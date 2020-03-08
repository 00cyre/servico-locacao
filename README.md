# Serviço Locação
## Requerimentos:
Liquibase

Mysql

Windows 10

Postman

Node.JS

## Recursos
#### [![Collection do Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/2f7f80c141f1a66d54da)
#### Escopo do Exercicio:   [![Escopo](https://fonts.gstatic.com/s/i/materialicons/description/v4/24px.svg)](https://docs.google.com/document/d/1Wo2Vyu9JUF6wfbp0Z3zkx4fUEu-Wz880d6h46ncNHNs/edit?usp=sharing)
## Setup
### Para configurar eu fiz um script que roda todos os comandos na ordem certa pra funcionar corretamente, porem o mysql já tem que estar configurado, e ele tem que ter o schema feito.
````sql
  create schema Locacao
````
### Apos criar o Schema execute o comando
````
  npm run initialize
````
### Ele irá executar todos os comandos necessarios para configurar o ambiente e inicializar o serviço.


# Introdução
#### Devido a questão do tempo, e da minha maquina não ter tudo instalado, decidi não utilizar o docker nesse projeto. Porém em vias normais utilizaria o docker para executar o banco e o micro-serviço pois seria mais facil essa parte de configuração, e seria o ideal visando em publicação para escalonamento do ms.Mas como só vou executar esse projeto uma vez por maquina e não será mais atualizado nem terá manutenção decidi não utilizar

# Pontos notáveis
#### utilizando um sistema de cli para facilitar a configuração do ambiente, deixando a experiencia para a execução quase seamless.Toda o codigo foi feito utilizando o padrão [CamelCase](https://pt.wikipedia.org/wiki/CamelCase). O Padrão de estruturação de código foi feito por features, a a branchificação foi feita por features também. Por exemplo:

![Feature User](https://snipboard.io/Zm9f4R.jpg)

#### Onde a feature User é separada do resto. 

![Branch User](https://snipboard.io/8EXCqx.jpg)

#### Onde as features são separadas em branches

#### Commits limpos e curtos.

![Commits](https://snipboard.io/D3Peqg.jpg)

#### São Auto-Explicativos e todos padronizados em inglês, também tem a padronização do identificador inicial da branch, para quando o pull request for feito poderá ser identificado o que esta sendo adicionado e facilmente identificado commits que são não relacionados.


# Problemas, Má práticas e observações
#### Minha classe de tratamento de erro não está bem estruturada, e a logica dela não está boa, devido ao tempo eu não foquei muito nessa parte, mas tenho consciencia de como ela poderia ser melhorada

![tratamento código http](https://snipboard.io/oHsu7C.jpg)

#### Eu poderia ao invés de utilizar essa validação por isSuccessful, tratar o codigo de resposta baseado no que o meu controller base me retorna.
#### Já que o Liquibase retorna o tipo de exceção no meu validation, eu poderia ter feito uma classe melhor de tratamento

