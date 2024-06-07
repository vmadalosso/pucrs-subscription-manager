// routes/cadastro.js

// Importar o serviço relacionado
import * as cadastroService from '../services/servicoCadastro.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    // Rota para listar todos os clientes
    fastify.get('/clientes', async (request, reply) => {
        // Obter a lista de clientes do serviço de cadastro
        const clientes = cadastroService.listarClientes();
        // Retornar a lista de clientes
        return clientes;
    });

    // Rota para listar todos os aplicativos
    fastify.get('/aplicativos', async (request, reply) => {
        // Obter a lista de aplicativos do serviço de cadastro
        const aplicativos = cadastroService.listarAplicativos();
        // Retornar a lista de aplicativos
        return aplicativos;
    });

    // Rota para criar uma nova assinatura
    fastify.post('/assinaturas', async (request, reply) => {
        // Extrair os dados do cliente e do aplicativo do corpo da solicitação
        const { codCliente, codAplicativo } = request.body;
        // Criar uma nova assinatura usando o serviço de cadastro
        const assinatura = cadastroService.criarAssinatura(codCliente, codAplicativo);
        // Retornar a assinatura criada
        return assinatura;
    });

    // Rota para atualizar o custo de um aplicativo
    fastify.patch('/aplicativos/:idAplicativo', async (request, reply) => {
        // Extrair o ID do aplicativo dos parâmetros da solicitação
        const { idAplicativo } = request.params;
        // Extrair o novo custo do aplicativo do corpo da solicitação
        const { custo } = request.body;
        // Atualizar o custo do aplicativo usando o serviço de cadastro
        const aplicativo = cadastroService.atualizarCustoAplicativo(idAplicativo, custo);
        // Se o aplicativo for encontrado e atualizado com sucesso, retornar o aplicativo atualizado
        // Caso contrário, retornar uma mensagem de erro
        if (aplicativo) {
            return aplicativo;
        } else {
            reply.code(404).send({ message: `Aplicativo ${idAplicativo} não encontrado` });
        }
    });

    // Rota para listar assinaturas por tipo
    fastify.get('/assinaturas/:tipo', async (request, reply) => {
        // Extrair o tipo de assinatura dos parâmetros da solicitação
        const { tipo } = request.params;
        // Obter a lista de assinaturas do tipo especificado usando o serviço de cadastro
        const assinaturas = cadastroService.listarAssinaturasPorTipo(tipo);
        // Retornar a lista de assinaturas
        return assinaturas;
    });

    // Rota para listar assinaturas por cliente
    fastify.get('/asscli/:codcli', async (request, reply) => {
        // Extrair o código do cliente dos parâmetros da solicitação
        const { codcli } = request.params;
        // Obter a lista de assinaturas do cliente especificado usando o serviço de cadastro
        const assinaturas = cadastroService.listarAssinaturasPorCliente(codcli);
        // Retornar a lista de assinaturas
        return assinaturas;
    });

    // Rota para listar assinaturas por aplicativo
    fastify.get('/assapp/:codapp', async (request, reply) => {
        // Extrair o código do aplicativo dos parâmetros da solicitação
        const { codapp } = request.params;
        // Obter a lista de assinaturas do aplicativo especificado usando o serviço de cadastro
        const assinaturas = cadastroService.listarAssinaturasPorAplicativo(codapp);
        // Retornar a lista de assinaturas
        return assinaturas;
    });
};
