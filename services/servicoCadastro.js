// services/servicoCadastro.js

// Simulação de dados estáticos para clientes, aplicativos e assinaturas
let clientes = [
    { codigo: 1, nome: 'Vitor Madalosso', email: 'vitor.madalosso@edu.pucrs.br' },
    { codigo: 2, nome: 'Bernardo Copstein', email: 'professor@edu.pucrs.br' },
    { codigo: 3, nome: 'Julio Machado', email: 'professor@edu.pucrs.br' }
];

let aplicativos = [
    { codigo: 1, nome: 'Netflix', custoMensal: 10.99 },
    { codigo: 2, nome: 'HBO Max', custoMensal: 15.99 },
    { codigo: 3, nome: 'Spotify', custoMensal: 5.99 }
];

let assinaturas = [
    { codigo: 1, codCli: 1, codApp: 1, inicioVigencia: new Date(), fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: 'ATIVA' },
    { codigo: 2, codCli: 1, codApp: 2, inicioVigencia: new Date(), fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: 'CANCELADA' },
    { codigo: 3, codCli: 2, codApp: 3, inicioVigencia: new Date(), fimVigencia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), status: 'ATIVA' }
];

// Funções para manipular os dados

// Função para listar clientes
function listarClientes() {
    return clientes;
}

// Função para listar aplicativos
function listarAplicativos() {
    return aplicativos;
}

// Função para criar uma nova assinatura
function criarAssinatura(codCliente, codAplicativo) {
    const inicioVigencia = new Date();
    const fimVigencia = new Date(inicioVigencia.setFullYear(inicioVigencia.getFullYear() + 1));
    const assinatura = {
        codigo: assinaturas.length + 1,
        codCli: codCliente,
        codApp: codAplicativo,
        inicioVigencia: new Date(),
        fimVigencia: fimVigencia, // Definindo fimVigencia para um ano após inicioVigencia, caso contrario ficaria NULL
        status: 'ATIVA'
    };

    assinaturas.push(assinatura);
    return assinatura;
}

// Função para atualizar o custo de um aplicativo
function atualizarCustoAplicativo(idAplicativo, custo) {
    const aplicativo = aplicativos.find(app => app.codigo == idAplicativo);
    if (aplicativo) {
        aplicativo.custoMensal = custo;
        return aplicativo;
    }
    return null;
}

// Função para listar assinaturas por tipo
function listarAssinaturasPorTipo(tipo) {
    if (tipo === 'TODAS') {
        return assinaturas;
    } else if (tipo === 'ATIVA' || tipo === 'CANCELADA') {
        return assinaturas.filter(assinatura => assinatura.status === tipo);
    }
    return [];
}

// Função para listar assinaturas por cliente
function listarAssinaturasPorCliente(codcli) {
    return assinaturas.filter(assinatura => assinatura.codCli == codcli);
}

// Função para listar assinaturas por aplicativo
function listarAssinaturasPorAplicativo(codapp) {
    return assinaturas.filter(assinatura => assinatura.codApp == codapp);
}

// Exportar as funções para uso em outros arquivos
export {
    listarClientes,
    listarAplicativos,
    criarAssinatura,
    atualizarCustoAplicativo,
    listarAssinaturasPorTipo,
    listarAssinaturasPorCliente,
    listarAssinaturasPorAplicativo
};
