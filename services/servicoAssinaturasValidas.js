import { listarAssinaturasPorTipo } from './servicoCadastro.js';

// Função para listar assinaturas válidas
function listarAssinaturasValidas() {
    const assinaturas = listarAssinaturasPorTipo('validas');
    return assinaturas;
}

// Exportar a função para uso em outros arquivos
export {
    listarAssinaturasValidas
};
