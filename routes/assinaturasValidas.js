// routes/assinaturasValidas.js

// Importar o serviço relacionado
import * as assinaturasValidasService from '../services/servicoAssinaturasValidas.js';

// Exportar uma função que registra as rotas
export default async function (fastify, opts) {
    // Rota para obter detalhes de uma assinatura válida
    fastify.get('/assinvalidas/:codAssinatura', async (request, reply) => {
        // Extrair o código da assinatura dos parâmetros da solicitação
        const { codAssinatura } = request.params;
        
        // Chamar o serviço para obter os detalhes da assinatura válida
        const assinaturaValida = assinaturasValidasService.listarAssinaturasValidas(codAssinatura);
        
        // Retornar os detalhes da assinatura válida se encontrado, caso contrário, retornar uma mensagem de erro
        return assinaturaValida ? assinaturaValida : { message: 'Assinatura não é válida ou não encontrada' };
    });
}
