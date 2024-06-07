<h1 align="center">Projeto Desenvolvimento de Sistemas Back-End</h1>

<p align="center">
Projeto individual para a disciplina Desenvolvimento de Sistemas Back-End - PUCRS<br/>Aluno: Vitor Madalosso<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="PUCRS" src=".github/preview.jpeg" width="30%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js + Fastify
- Git + GitHub
- VSCode + REST Client

## 💻 Projeto

Nos dias de hoje é comum o surgimento de startups baseadas em aplicativos para celular. Muitas vezes, uma boa ideia se transforma em um aplicativo de sucesso, alavancando pequenas empresas para o sucesso rápido.

Considere uma startup que trabalha com o modelo de assinaturas. Neste modelo, o cliente pode baixar os aplicativos gratuitamente na loja, porém eles só funcionam se o cliente tiver uma assinatura paga. Em função disso, todo o mês, é necessário levantar a lista dos clientes que devem ser cobrados, assim como aqueles que devem ter suas assinaturas canceladas por falta de pagamento.

O objetivo geral deste trabalho é criar um sistema que auxilie na gestão das assinaturas dos aplicativos. Para tanto, o sistema deve ser capaz de manter a lista de assinaturas de cada cliente, a situação das assinaturas, gerar lista de cobrança e, mais importante, responder para os aplicativos sempre que eles questionarem se a assinatura continua ativa ou se eles devem bloquear. O detalhamento deste contexto, bem como dos requisitos do sistema encontra-se em documento complementar (arquivo “Especificacao_Projeto_DesSistBackend.pdf”).

Como objetivos específicos, busca-se aplicar conhecimentos para modelar e implementar um serviço usando a arquitetura limpa proposta por Robert Martin e integrar este serviço com dois microserviços auxiliares usando tanto comunicação síncrona como por filas.

O projeto é individual e está dividido em duas fases descritas a seguir neste documento.

Durante a avaliação, serão seguidos os critérios abaixo:</br>
• Códigos que não estejam em JavaScript ou estejam com erros de sintaxe não serão avaliados.</br>
• O programa deve atender aos itens especificados.</br>
• O código de programa deve estar organizado, ser legível e estar comentado.

## 🔖 Execução

Clone - Para clonar o repositório utilize o comando abaixo:

```
git clone https://github.com/vmadalosso/pucrs-subscription-manager.git
```

Instalação das dependências - Acessar o diretório (/pucrs-subscription-manager) e executar o comando abaixo em cada um dos 3 diretórios:

```
npm i
```

Execução - Basta inicializar o servidor com o comando abaixo (está configurado na porta 3000):

```
node index.js
```

Testes dos endpoints - Utilizo o plugin REST Client dentro do próprio VSCode, com ele podemos executar os requests de GET, POST, PATCH e etc dentro do mesmo, sem necessidade de configurar no Insomnia ou Postman. Mais explicações no PDF que está anexado aos demais arquivos entregues pela plataforma da PUCRS Online.

<img alt="PUCRS" src=".github/routes-http.jpeg" width="100%">

## 📝 Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Vitor Madalosso 👋
