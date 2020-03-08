# Serviço Locação
## Requerimentos:
Liquibase
Mysql

## Recursos
#### Collection do Postman: 

# Introdução
#### Devido a questão do tempo, e da minha maquina não ter tudo instalado, decidi não utilizar o docker nesse projeto. Porém em vias normais utilizaria o docker para executar o banco e o micro-serviço pois seria mais facil essa parte de configuração, e seria o ideal visando em publicação para escalonamento do ms.Mas como só vou executar esse projeto uma vez por maquina e não será mais atualizado nem terá manutenção decidi não utilizar


# Problemas, Má práticas e observações
#### Minha classe de tratamento de erro não está bem estruturada, e a logica dela não está boa, devido ao tempo eu não foquei muito nessa parte, mas tenho consciencia de como ela poderia ser melhorada

![tratamento código http](https://snipboard.io/oHsu7C.jpg)

#### Eu poderia ao invés de utilizar essa validação por isSuccessful, tratar o codigo de resposta baseado no que o meu controller base me retorna.
#### Já que o Liquibase retorna o tipo de exceção no meu validation, eu poderia ter feito uma classe melhor de tratamento

