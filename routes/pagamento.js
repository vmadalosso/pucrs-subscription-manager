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
    // Rota para registrar um pagamento
    fastify.post('/registrarpagamento', async (request, reply) => {
        // Extrair os dados necessários do corpo da solicitação
        const { dia, mes, ano, codass, valorPago } = request.body;
        // Processar o pagamento usando o serviço de pagamento
        const resultado = pagamentoService.processarPagamento(dia, mes, ano, codass, valorPago);
        // Retornar o resultado do processamento do pagamento
        return resultado;
    });

    // Rota para calcular o total faturado
    fastify.get('/servpag/totalfaturado', async (request, reply) => {
        // Calcular o total faturado usando o serviço de pagamento
        const total = pagamentoService.calcularTotalFaturado();
        // Retornar o total faturado
        return total;
    });
}
