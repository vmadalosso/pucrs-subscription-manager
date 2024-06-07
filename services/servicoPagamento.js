import { EventEmitter } from 'events';

// Simulação de dados para pagamento
let pagamentos = [];

// EventEmitter para emitir eventos
const pagamentoEmitter = new EventEmitter();

// Função para processar pagamento
function processarPagamento(dia, mes, ano, codass, valorPago) {
    const pagamento = {
        codigo: pagamentos.length + 1,
        dia: dia,
        mes: mes,
        ano: ano,
        codAss: codass,
        valorPago: valorPago,
        dataPagamento: new Date()
    };

    pagamentos.push(pagamento);
    // Emitir evento de pagamento cadastrado
    pagamentoEmitter.emit('PagamentoServicoCadastramento', pagamento);
    // Emitir evento de pagamento para o serviço de assinatura válida
    pagamentoEmitter.emit('PagamentoServicoAssinaturaValida', pagamento);

    return pagamento;
}

// Função para calcular total faturado
function calcularTotalFaturado() {
    return pagamentos.reduce((total, pagamento) => total += pagamento.valorPago, 0);
}

// Exportar as funções e o EventEmitter para uso em outros arquivos
export {
    processarPagamento,
    calcularTotalFaturado,
    pagamentoEmitter
};
