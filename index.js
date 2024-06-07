import fastify from 'fastify';

// Importar os arquivos de rota
import cadastroRoutes from './routes/cadastro.js';
import pagamentoRoutes from './routes/pagamento.js';
import assinaturasValidasRoutes from './routes/assinaturasValidas.js';

const server = fastify();

// Registrar as rotas
server.register(cadastroRoutes);
server.register(pagamentoRoutes);
server.register(assinaturasValidasRoutes);

// Inicializar o servidor
const start = async () => {
    try {
        await server.listen(3000);
        console.log('Servidor rodando em http://localhost:3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
