## Conceitos
- Git
- Dependências (Packages.json)
- Configurações (dev / env / production)
- Serviços independentes (Containers Docker)
- Build, release, run
- Processos (Stateless) - readyonly - only persists external stuff. (AWS S3 - paper Trail)
- Port binding
- Concurrency (Horizontal scaling) - Load Balancer
- Disposability (Sigterm, graceful shutdown, rolling restart) - Tudo descartável nos containeres
- Dev/prod similares (cotinuous deployment, testes com github actions)
- Logs (STDOUT nos containeres, papertrail, logstash, kubana)
- Admin processes

- Testes Unitários
- Integração continua (git rebase)
- Git actions (rodar testes automaticamente)
- Branch main - Sagrado
- Staging automático (Para testes)

## Stack Tecnológica

- TypeScript
- Node.js
- Nest
- Postgres
- Docker

## Etapas do Projeto

### 1. Produto e Categoria

- Implementar a funcionalidade de gerenciamento de produtos e categorias.
- Estabelecer um relacionamento de muitos para muitos entre produtos e categorias.
- Cada produto pode pertencer a várias categorias e vice-versa.

### 2. Autenticação e Autorização

- Desenvolver um sistema de autenticação e registro de usuários.
- Definir diferentes funções de usuário: Admin, User e Anonymous.
- Restrinjir o acesso às APIs de acordo com as funções do usuário.
- Exemplo: Administradores podem criar produtos e categorias, enquanto usuários e usuários anônimos podem visualizar/listar produtos e categorias.

### 3. Carrinho de Compras e Pedidos

- Implementar um sistema de carrinho de compras.
- Todos os usuários podem ter um carrinho, mas apenas usuários autenticados podem efetuar pedidos.

### 4. Integração com ElasticSearch

- Integrar o ElasticSearch para indexar os produtos.
- Permitir a busca eficiente de produtos utilizando recursos de pesquisa do ElasticSearch.

### 5. Integração de Pagamento

- Integração do sistema de pedidos com um provedor de pagamento, como PayPal ou Stripe.
- Permita que os usuários realizem pagamentos para os pedidos efetuados.

### 6. Implantação na AWS

- Fazer o deploy de todo o sistema na AWS, utilizando EC2 ou AWS Fargate.
- Certificar-se de gerenciar cuidadosamente os recursos para evitar custos excessivos.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
