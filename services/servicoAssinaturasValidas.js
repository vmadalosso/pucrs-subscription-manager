// services/servicoAssinaturasValidas.js

import { listarAssinaturasPorCliente } from './servicoCadastro.js';

function listarAssinaturasValidas(codAssinatura) {
    // Lógica para verificar se uma assinatura é válida
    const assinatura = listarAssinaturasPorCliente(codAssinatura);
    return assinatura && !assinatura.fimVigencia ? assinatura : null;
}

// Exportar a função para uso em outros arquivos
export {
    listarAssinaturasValidas
};
