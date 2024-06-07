import { pagamentoEmitter } from '../services/servicoPagamento.js';
import * as pagamentoService from '../services/servicoPagamento.js';

// Observar o evento de pagamento cadastrado
pagamentoEmitter.on('PagamentoServicoCadastramento', (pagamento) => {
    console.log('Pagamento cadastrado:', pagamento);
});

// Observar o evento de pagamento para o serviço de assinatura válida
pagamentoEmitter.on('PagamentoServicoAssinaturaValida', (pagamento) => {
    console.log('Pagamento para serviço de assinatura válida:', pagamento);
});

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    fastify.post('/registrarpagamento', async (request, reply) => {
        const { dia, mes, ano, codass, valorPago } = request.body;
        const resultado = pagamentoService.processarPagamento(dia, mes, ano, codass, valorPago);
        return resultado;
    });

    fastify.get('/servpag/totalfaturado', async (request, reply) => {
        const total = pagamentoService.calcularTotalFaturado();
        return total;
    });
}
