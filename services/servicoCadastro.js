// Simulação de dados estáticos para clientes, aplicativos e assinaturas
let clientes = [
    { codigo: 1, nome: 'Cliente A', email: 'clienteA@example.com' },
    { codigo: 2, nome: 'Cliente B', email: 'clienteB@example.com' },
    { codigo: 3, nome: 'Cliente C', email: 'clienteC@example.com' }
];

let aplicativos = [
    { codigo: 1, nome: 'Aplicativo X', custoMensal: 10.99 },
    { codigo: 2, nome: 'Aplicativo Y', custoMensal: 7.99 },
    { codigo: 3, nome: 'Aplicativo Z', custoMensal: 5.99 }
];

let assinaturas = [];

// Funções para manipular os dados
function listarClientes() {
    return clientes;
}

function listarAplicativos() {
    return aplicativos;
}

function criarAssinatura(codCliente, codAplicativo) {
    const assinatura = {
        codigo: assinaturas.length + 1,
        codCli: codCliente,
        codApp: codAplicativo,
        inicioVigencia: new Date(),
        fimVigencia: null // A ser preenchido com a lógica adequada
    };

    assinaturas.push(assinatura);
    return assinatura;
}

function atualizarCustoAplicativo(idAplicativo, custo) {
    const aplicativo = aplicativos.find(app => app.codigo == idAplicativo);
    if (aplicativo) {
        aplicativo.custoMensal = custo;
        return aplicativo;
    }
    return null;
}

function listarAssinaturasPorTipo(tipo) {
    // Filtrar assinaturas por tipo (assumindo que o tipo pode ser algo a ser derivado dos dados)
    return assinaturas.filter(assinatura => assinatura.tipo === tipo);
}

function listarAssinaturasPorCliente(codcli) {
    return assinaturas.filter(assinatura => assinatura.codCli == codcli);
}

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
