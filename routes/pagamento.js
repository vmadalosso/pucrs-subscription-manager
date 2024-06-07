import * as pagamentoService from '../services/servicoPagamento.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    fastify.post('/servpag/pagamento', async (request, reply) => {
        const { codCliente, codAssinatura } = request.body;
        const resultado = pagamentoService.processarPagamento(codCliente, codAssinatura);
        return resultado;
    });

    fastify.get('/servpag/totalfaturado', async (request, reply) => {
        const total = pagamentoService.calcularTotalFaturado();
        return total;
    });
}
