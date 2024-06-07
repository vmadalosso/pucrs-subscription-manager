import * as assinaturasValidasService from '../services/servicoAssinaturasValidas.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    fastify.get('/servass/assinaturasvalidas', async (request, reply) => {
        const assinaturasValidas = assinaturasValidasService.listarAssinaturasValidas();
        return assinaturasValidas;
    });
}
