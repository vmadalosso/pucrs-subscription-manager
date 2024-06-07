// routes/assinaturasValidas.js

import * as assinaturasValidasService from '../services/servicoAssinaturasValidas.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    fastify.get('/assinvalidas/:codAssinatura', async (request, reply) => {
        const { codAssinatura } = request.params;
        const assinaturaValida = assinaturasValidasService.listarAssinaturasValidas(codAssinatura);
        return assinaturaValida ? assinaturaValida : { message: 'Assinatura não é válida ou não encontrada' };
    });
}
