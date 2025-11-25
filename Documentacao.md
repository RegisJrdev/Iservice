📄 DOCUMENTAÇÃO TÉCNICA — Iserv
Projeto: Iserv - Plataforma de Conexão de Serviços

Aluno(s):

Claiton da Costa Pereira

Reginaldo Junior

Murilo Moraes
Data: 24/11/2025

1. Visão Geral do Projeto

O Iserv é uma aplicação web desenvolvida para facilitar a conexão entre prestadores de serviços autônomos e clientes que necessitam de mão de obra especializada.

A plataforma funciona como um marketplace de serviços, permitindo:

Contratação ágil

Divulgação de serviços

Interface simples, intuitiva e responsiva

O foco é resolver a dificuldade de encontrar profissionais confiáveis de forma rápida, centralizando oferta e demanda em um único sistema.

2. Stack Tecnológica

O projeto utiliza uma stack moderna, voltada para performance e boa experiência do usuário.

2.1. Front-end e Lógica

Vue.js 3
Framework utilizado para construção da interface.
Motivos da escolha:

Alta reatividade

Composition API

Organização clara de componentes

JavaScript (ES6+)
Usado para:

Manipulação de DOM

Regras de negócio

Integração com o banco local

2.2. Estilização e UI

Tailwind CSS
Framework utility-first que permitiu criar uma interface responsiva e customizável rapidamente.

daisyUI
Biblioteca de componentes que acelerou a criação de elementos como:

botões

modais

cards

inputs
Garantindo padronização visual.

2.3. Persistência de Dados

IndexedDB
Banco de dados transacional executado no navegador.

Motivos da escolha:

Suporte a grandes quantidades de dados

Operações assíncronas

Excelente performance

Suporte offline

Stores do Banco:

users — perfis e login

services — serviços cadastrados

orders — histórico de solicitações (opcional)

3. Arquitetura e Estrutura

Projeto baseado em componentização utilizando Vue 3.

3.1. Componentes criados

CardServico.vue — mostra foto, nome, preço, etc.

NavBar.vue — navegação responsiva

ModalContratacao.vue — confirmação de pedido usando daisyUI

4. Funcionalidades do Sistema

O Iserv atende dois perfis de usuários.

4.1. Módulo Cliente

Busca de serviços

Contratação de prestador

Visualização detalhada do profissional

4.2. Módulo Prestador de Serviços

Cadastro de serviços

Edição de perfil profissional

5. Implementação do Banco de Dados (IndexedDB)

Diferente do localStorage, o IndexedDB suporta:

Armazenamento estruturado

Consultas complexas

Objetos JavaScript grandes

A comunicação é feita via Promises, garantindo uma UI fluida sem travamentos.

6. Conclusão

O Iserv demonstra uma aplicação prática das tecnologias modernas de desenvolvimento web.

Resultados obtidos:

UI moderna e rápida graças ao Vue 3 + Tailwind + daisyUI

Persistência robusta com IndexedDB

Arquitetura limpa e escalável baseada em componentes