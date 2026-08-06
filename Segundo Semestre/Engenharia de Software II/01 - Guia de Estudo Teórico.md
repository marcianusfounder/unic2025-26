# Guia de Estudo Teórico: Engenharia de Software II

Este guia foi elaborado para oferecer um mergulho profundo nos conceitos fundamentais e avançados de Engenharia de Software II, abordando desde os princípios de Arquitetura de Software até a Análise e Design Orientado a Objetos (A/DOO), Princípios de Design (SOLID, GRASP), Padrões Arquitetônicos e de Projeto, e metodologias (como o RUP). 

---

## Índice
1. [Introdução à Arquitetura e Análise Orientada a Objetos](#1-introdução-à-arquitetura-e-análise-orientada-a-objetos)
2. [Paradigmas de Programação e Propriedades da POO](#2-paradigmas-de-programação-e-propriedades-da-poo)
3. [Análise Orientada a Objetos (AOO)](#3-análise-orientada-a-objetos-aoo)
4. [Design Orientado a Objetos (DOO)](#4-design-orientado-a-objetos-doo)
5. [Princípios de Design (SOLID, GRASP, DRY, KISS)](#5-princípios-de-design-solid-grasp-dry-kiss)
6. [Padrões de Arquitetura e Padrões de Projeto (Design Patterns)](#6-padrões-de-arquitetura-e-padrões-de-projeto)
7. [Estudo de Caso: RUP (Rational Unified Process)](#7-estudo-de-caso-rup)

---

## 1. Introdução à Arquitetura e Análise Orientada a Objetos

A **Arquitetura de Software** refere-se à estrutura de alto nível de um sistema de software, a disciplina de criar tais estruturas e a documentação destas estruturas. Tais estruturas são fundamentais para o sucesso do projeto e envolvem decisões críticas de design que, uma vez implementadas, são caras e difíceis de alterar.

### 1.1 Atributos de Qualidade
Uma boa arquitetura deve satisfazer não apenas os requisitos funcionais, mas principalmente os **requisitos não-funcionais (atributos de qualidade)**:
- **Observáveis em tempo de execução:**
  - *Disponibilidade (Availability):* Prontidão do sistema para uso.
  - *Desempenho (Performance):* Velocidade, uso de memória e tempo de resposta.
  - *Segurança (Security/Safety):* Resistência a acessos não autorizados e operação sem riscos ao meio ou informações.
  - *Confiabilidade (Reliability):* Capacidade do sistema manter sua operação ao longo do tempo.
- **Não observáveis em tempo de execução:**
  - *Modificabilidade e Manutenibilidade:* Facilidade de alterar o sistema, corrigir bugs e adicionar features.
  - *Testabilidade:* Facilidade em demonstrar falhas ao testar o software.
  - *Escalabilidade:* Capacidade do design crescer.
  - *Portabilidade:* Capacidade de rodar em diferentes ambientes.

### 1.2 Modelagem de Arquitetura
Arquiteturas são comumente modeladas usando:
- **ADL (Architecture Description Languages):** Linguagens de descrição como Armani e ADML (baseado em XML).
- **UML (Unified Modeling Language):** Padrão da indústria para modelar sistemas orientados a objetos. Diagramas de componentes e de implantação são usados para modelar a arquitetura física e lógica.

---

## 2. Paradigmas de Programação e Propriedades da POO

Um paradigma de programação é um estilo ou forma de conceituar e estruturar o código.
1. **Programação Imperativa:** Foco em "como" fazer as coisas. (Ex: C, Pascal)
2. **Programação Estruturada:** Uso de sequências, seleções e repetições (evitando GOTO).
3. **Programação Declarativa:** Foco em "o que" fazer. (Ex: SQL, HTML)
4. **Programação Orientada a Objetos (POO):** Foco em modelar o sistema como um conjunto de objetos interagindo.

### Propriedades Fundamentais da POO
- **Abstração:** Capacidade de focar nos detalhes essenciais de um objeto e ignorar os irrelevantes, criando classes que representam o domínio real.
- **Encapsulamento:** Ocultamento dos detalhes internos e do estado de um objeto, protegendo-o de acessos indevidos e permitindo que o objeto seja autônomo (Information Hiding).
- **Herança:** Mecanismo pelo qual uma classe deriva características e comportamentos de outra classe, permitindo reuso de código e hierarquias.
- **Polimorfismo:** Capacidade de objetos diferentes responderem à mesma mensagem de formas diferentes. Facilita muito a extensibilidade.

---

## 3. Análise Orientada a Objetos (AOO)

A Análise Orientada a Objetos é o processo de entender e modelar o domínio do problema usando conceitos de objetos e classes.

### 3.1 Conceitos Essenciais
- **Objeto:** Uma entidade com estado (atributos), comportamento (métodos) e identidade.
- **Classe:** O "molde" a partir do qual os objetos são criados.
- **Instância:** Um objeto específico criado a partir de uma classe.

### 3.2 Diagramas UML na Análise
Na análise, focamos em entender os requisitos e as colaborações.
- **Diagrama de Casos de Uso:** Captura os requisitos funcionais do sistema a partir da perspectiva dos usuários (atores).
- **Diagrama de Pacotes:** Organiza os elementos do modelo em grupos lógicos, mostrando dependências.
- **Diagrama de Colaboração (ou Comunicação):** Mostra como os objetos interagem para realizar um caso de uso.

---

## 4. Design Orientado a Objetos (DOO)

Enquanto a análise foca no *problema* (o que o sistema deve fazer), o design foca na *solução* (como o sistema fará).

### 4.1 Fundamentos do Design
- **Modularidade:** Dividir o sistema em módulos independentes e coesos.
- **Coesão:** O grau de relacionamento entre os elementos de um módulo. **Desejável: Alta coesão.** (Um módulo/classe deve fazer bem apenas uma coisa).
- **Acoplamento:** O grau de dependência entre módulos diferentes. **Desejável: Baixo acoplamento.** (Módulos devem ser o mais independentes possível).

### 4.2 Diagramas UML no Design
- **Diagrama de Classes:** O coração do DOO. Mostra classes, seus atributos, métodos e as relações (Associação, Agregação, Composição, Herança, Dependência).
  - *Agregação:* Relação "todo/parte" fraca (a parte pode existir sem o todo).
  - *Composição:* Relação "todo/parte" forte (a parte morre se o todo morrer).
- **Diagrama de Estado:** Modela as mudanças de estado de um objeto em resposta a eventos.
- **Diagrama de Implantação:** Modela a disposição física dos nós de hardware e os componentes de software rodando neles.

---

## 5. Princípios de Design (SOLID, GRASP, DRY, KISS)

Para garantir sistemas de alta qualidade, manuteníveis e extensíveis, os desenvolvedores seguem princípios estabelecidos.

### 5.1 SOLID
O acrônimo SOLID (cunhado por Robert C. Martin) engloba 5 princípios fundamentais:
1. **S - Single Responsibility Principle (SRP):** Uma classe deve ter um, e apenas um, motivo para mudar. (Alta coesão).
2. **O - Open/Closed Principle (OCP):** Entidades de software devem ser abertas para extensão, mas fechadas para modificação. (Use polimorfismo/interfaces para adicionar novos comportamentos).
3. **L - Liskov Substitution Principle (LSP):** Classes derivadas devem poder substituir suas classes base sem quebrar o sistema. Se *S* é subtipo de *T*, então objetos do tipo *T* podem ser substituídos por objetos do tipo *S*.
4. **I - Interface Segregation Principle (ISP):** Clientes não devem ser forçados a depender de interfaces que não usam. É melhor ter muitas interfaces pequenas e específicas do que uma interface grande e genérica.
5. **D - Dependency Inversion Principle (DIP):** Dependa de abstrações, não de implementações concretas. Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.

### 5.2 GRASP (General Responsibility Assignment Software Patterns)
Padrões para atribuir responsabilidades às classes em OOD:
- **Especialista na Informação (Information Expert):** Atribua uma responsabilidade à classe que possui as informações necessárias para cumpri-la.
- **Criador (Creator):** A classe B deve criar instâncias de A se: B agrega A, B contém A, B registra A, ou B usa intimamente A.
- **Controlador (Controller):** Atribua a responsabilidade de lidar com eventos do sistema a uma classe de "controlador" que representa o sistema como um todo.
- **Baixo Acoplamento (Low Coupling):** Atribua responsabilidades de modo que as dependências permaneçam baixas.
- **Alta Coesão (High Cohesion):** Mantenha as classes focadas e não as sobrecarregue com tarefas não relacionadas.
- **Polimorfismo:** Quando o comportamento varia por tipo, atribua a responsabilidade usando operações polimórficas.
- **Invenção Pura (Pure Fabrication):** Crie uma classe artificial (que não representa um conceito de domínio) para salvar a alta coesão e o baixo acoplamento (ex: repositórios de banco de dados).
- **Indireção (Indirection):** Desacople dois elementos colocando um intermediário entre eles.
- **Variações Protegidas (Protected Variations):** Proteja os elementos das variações em outros elementos (usando interfaces).

### 5.3 Outros Princípios
- **DRY (Don't Repeat Yourself):** Cada pedaço de conhecimento ou lógica deve ter uma representação única, não ambígua e autoritativa no sistema. Evite duplicação.
- **KISS (Keep It Simple, Stupid):** Os sistemas funcionam melhor se forem mantidos simples em vez de complexos.

---

## 6. Padrões de Arquitetura e Padrões de Projeto

Padrões (*Patterns*) são soluções comprovadas para problemas recorrentes de design de software.

### 6.1 Padrões Arquitetônicos
Definem a estrutura de alto nível do sistema:
- **Camadas (Layers):** Separa o sistema em camadas hierárquicas (ex: Apresentação, Lógica de Negócio, Acesso a Dados).
- **MVC (Model-View-Controller):** Separa o domínio da aplicação, a interface gráfica e o input do usuário.
  - *Model:* Dados e regras de negócio.
  - *View:* Interface gráfica.
  - *Controller:* Processa requisições e altera o modelo ou a view.
- **Pipes and Filters (Tubulações e Filtros):** Processa correntes de dados. Cada etapa de processamento é um filtro, conectada por tubulações.
- **Quadro-negro (Blackboard):** Solucionadores de problemas independentes (agentes) interagem com um repositório central (o quadro-negro).
- **Microkernel:** Separa o núcleo funcional mínimo do sistema das funcionalidades estendidas.
- **Broker (Corretor):** Estrutura sistemas distribuídos com componentes desacoplados que interagem por chamadas de procedimento remoto.

### 6.2 Padrões de Projeto (Design Patterns - GoF)
Solucionam problemas específicos de design no nível de classes e objetos. Dividem-se em 3 categorias:
1. **Criacionais:** Lidam com a inicialização/criação de objetos (ex: Singleton, Factory, Builder).
2. **Estruturais:** Lidam com a composição de classes e objetos para formar estruturas maiores (ex: Adapter, Composite, Decorator).
3. **Comportamentais:** Lidam com a comunicação, responsabilidades e algoritmos entre objetos (ex: Observer, Strategy, Command).

---

## 7. Estudo de Caso: RUP (Rational Unified Process)

O RUP é um framework de processo de desenvolvimento de software iterativo e incremental, fortemente guiado por Casos de Uso e focado na arquitetura.

### 7.1 Fases do RUP
1. **Concepção (Inception):** Definir o escopo, visão e casos de uso iniciais do projeto.
2. **Elaboração (Elaboration):** Planejar o projeto, especificar recursos e construir a linha de base arquitetônica.
3. **Construção (Construction):** Construir o software em iterações até a capacidade operacional inicial.
4. **Transição (Transition):** Transferir o produto final para a comunidade de usuários (beta testes, implantação).

### 7.2 Análise e Design no RUP (Fluxos de Trabalho)
- **Análise de Arquitetura:** Define a estrutura, as camadas, os nós e tecnologias.
- **Análise de Casos de Uso (Realização de Casos de Uso):** Como os casos de uso são efetivamente realizados pelas classes. É documentado usando diagramas de interação (sequência/colaboração).
- **Análise de Classes:** Identificação das classes e seus estereótipos:
  - *Classes de Entidade:* Informações persistentes/de negócio.
  - *Classes de Interface (Boundary):* Comunicação com os atores (telas, APIs externas).
  - *Classes de Controle:* Coordenam e sequenciam o fluxo do caso de uso.
- **Análise de Pacotes:** Organização e agrupamento lógico dos elementos do sistema.
- **Design de Casos de Uso e Classes:** Refinamento dos modelos de análise com dependências tecnológicas específicas (banco de dados, frameworks), aplicando padrões arquitetônicos e de projeto (SOLID, GRASP).

---

> *"Engenharia de Software não é apenas escrever código, é projetar estruturas que resistem ao teste do tempo, das mudanças de requisitos e da escalabilidade. O domínio de arquitetura, princípios SOLID/GRASP e Design Patterns são o que separam um programador júnior de um Engenheiro de Software pleno/sênior."*
