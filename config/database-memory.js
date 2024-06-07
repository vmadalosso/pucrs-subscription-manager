// database-memory.js

// Dados estáticos
let clientes = [
  { codigo: 1, nome: "Cliente 1", email: "cliente1@example.com" },
  { codigo: 2, nome: "Cliente 2", email: "cliente2@example.com" },
  // Adicione mais clientes conforme necessário
];

let aplicativos = [
  { codigo: 1, nome: "App 1", custoMensal: 10.99 },
  { codigo: 2, nome: "App 2", custoMensal: 15.99 },
  // Adicione mais aplicativos conforme necessário
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

// Exportar as funções para uso em outros arquivos
module.exports = {
  listarClientes,
  listarAplicativos,
  criarAssinatura
};
