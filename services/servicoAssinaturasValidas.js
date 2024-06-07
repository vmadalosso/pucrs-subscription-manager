// services/servicoAssinaturasValidas.js

import { listarAssinaturasPorCliente } from './servicoCadastro.js';

// Função para listar assinaturas válidas com base no código da assinatura
function listarAssinaturasValidas(codAssinatura) {
    // Lógica para verificar se uma assinatura é válida
    const assinatura = listarAssinaturasPorCliente(codAssinatura);
    // Verificar se a assinatura existe e se ainda não expirou
    return assinatura && !assinatura.fimVigencia ? assinatura : null;
}

// Exportar a função para uso em outros arquivos
export {
    listarAssinaturasValidas
};
