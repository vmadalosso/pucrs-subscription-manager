// index.js

import fastify from 'fastify';

// Importar os arquivos de rota
import cadastroRoutes from './routes/cadastro.js';
import pagamentoRoutes from './routes/pagamento.js';
import assinaturasValidasRoutes from './routes/assinaturasValidas.js';

const server = fastify();

// Registrar as rotas
server.register(cadastroRoutes, { prefix: '/servcad' });
server.register(pagamentoRoutes, { prefix: '/servcad' });
server.register(assinaturasValidasRoutes, { prefix: '/servcad' });

// Inicializar o servidor
const start = async () => {
    try {
        // Detalhe sobre mudança no node, server.listen(3000) não é mais recomendado utilizar, correto é abrir um objeto e setar a porta
        await server.listen({
            port: 3000
        });
        console.log('Servidor rodando em http://localhost:3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
