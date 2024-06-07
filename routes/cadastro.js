import * as cadastroService from '../services/servicoCadastro.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    fastify.get('/servcad/clientes', async (request, reply) => {
        const clientes = cadastroService.listarClientes();
        return clientes;
    });

    fastify.get('/servcad/aplicativos', async (request, reply) => {
        const aplicativos = cadastroService.listarAplicativos();
        return aplicativos;
    });

    fastify.post('/servcad/assinaturas', async (request, reply) => {
        const { codCliente, codAplicativo } = request.body;
        const assinatura = cadastroService.criarAssinatura(codCliente, codAplicativo);
        return assinatura;
    });

    fastify.patch('/servcad/aplicativos/:idAplicativo', async (request, reply) => {
        const { idAplicativo } = request.params;
        const { custo } = request.body;
        const aplicativo = cadastroService.atualizarCustoAplicativo(idAplicativo, custo);
        return aplicativo ? { message: `Custo mensal do aplicativo ${idAplicativo} atualizado para ${custo}` }
                          : { error: 'Aplicativo não encontrado' };
    });

    fastify.get('/servcad/assinaturas/:tipo', async (request, reply) => {
        const { tipo } = request.params;
        const assinaturas = cadastroService.listarAssinaturasPorTipo(tipo);
        return assinaturas;
    });

    fastify.get('/servcad/asscli/:codcli', async (request, reply) => {
        const { codcli } = request.params;
        const assinaturas = cadastroService.listarAssinaturasPorCliente(codcli);
        return assinaturas;
    });

    fastify.get('/servcad/assapp/:codapp', async (request, reply) => {
        const { codapp } = request.params;
        const assinaturas = cadastroService.listarAssinaturasPorAplicativo(codapp);
        return assinaturas;
    });
}
