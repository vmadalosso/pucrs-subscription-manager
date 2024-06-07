// routes/cadastro.js

// Importar o serviço relacionado
import * as cadastroService from '../services/servicoCadastro.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    fastify.get('/clientes', async (request, reply) => {
        const clientes = cadastroService.listarClientes();
        return clientes;
    });

    fastify.get('/aplicativos', async (request, reply) => {
        const aplicativos = cadastroService.listarAplicativos();
        return aplicativos;
    });

    fastify.post('/assinaturas', async (request, reply) => {
        const { codCliente, codAplicativo } = request.body;
        const assinatura = cadastroService.criarAssinatura(codCliente, codAplicativo);
        return assinatura;
    });

    fastify.patch('/aplicativos/:idAplicativo', async (request, reply) => {
        const { idAplicativo } = request.params;
        const { custo } = request.body;
        const aplicativo = cadastroService.atualizarCustoAplicativo(idAplicativo, custo);
        if (aplicativo) {
            return aplicativo;
        } else {
            reply.code(404).send({ message: `Aplicativo ${idAplicativo} não encontrado` });
        }
    });

    fastify.get('/assinaturas/:tipo', async (request, reply) => {
        const { tipo } = request.params;
        const assinaturas = cadastroService.listarAssinaturasPorTipo(tipo);
        return assinaturas;
    });

    fastify.get('/asscli/:codcli', async (request, reply) => {
        const { codcli } = request.params;
        const assinaturas = cadastroService.listarAssinaturasPorCliente(codcli);
        return assinaturas;
    });

    fastify.get('/assapp/:codapp', async (request, reply) => {
        const { codapp } = request.params;
        const assinaturas = cadastroService.listarAssinaturasPorAplicativo(codapp);
        return assinaturas;
    });
};
