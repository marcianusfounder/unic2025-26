# Guia de Estudo Teórico: Engenharia de Software II - v2

Este guia foi elaborado para oferecer um mergulho profundo nos conceitos fundamentais e avançados de Engenharia de Software II, abordando desde os princípios de Arquitetura de Software até a Análise e Design Orientado a Objetos (A/DOO), Princípios de Design (SOLID, GRASP), Padrões Arquitetônicos e de Projeto, e metodologias (como o RUP). O guia integra exemplos práticos e teóricos da disciplina para otimizar o estudo.

---

## Índice
1. [Introdução à Arquitetura e Engenharia de Software](#1-introdução-à-arquitetura-e-engenharia-de-software)
2. [Paradigmas de Programação e Propriedades da POO](#2-paradigmas-de-programação-e-propriedades-da-poo)
3. [Análise Orientada a Objetos (AOO) e Modelagem de Negócios](#3-análise-orientada-a-objetos-aoo-e-modelagem-de-negócios)
4. [Design Orientado a Objetos (DOO) e Classes de Análise](#4-design-orientado-a-objetos-doo-e-classes-de-análise)
5. [Diagramas de Atividades](#5-diagramas-de-atividades)
6. [Princípios de Design (SOLID, GRASP, DRY, KISS)](#6-princípios-de-design-solid-grasp-dry-kiss)
7. [Padrões de Arquitetura e Padrões de Projeto (Design Patterns)](#7-padrões-de-arquitetura-e-padrões-de-projeto)
8. [Estudo de Caso: RUP e Hotel X](#8-estudo-de-caso-rup-e-hotel-x)

---

## 1. Introdução à Arquitetura e Engenharia de Software

A **Engenharia de Software** é a aplicação de princípios de engenharia ao desenvolvimento de software, utilizando métodos sistemáticos, técnicas e ferramentas (como ferramentas CASE) para produzir software de qualidade, eficiente e confiável. O **ciclo de vida de um software** envolve desde a concepção até a sua descontinuação, com atores chaves como o Analista de Sistemas, o Administrador de Base de Dados e o Desenvolvedor.

A **Arquitetura de Software** refere-se à estrutura de alto nível de um sistema, envolvendo:
- **Dados:** Informações que o sistema armazena e manipula.
- **Processamento:** Cálculos e operações.
- **Conexão:** Comunicação entre as partes do sistema.

> [!IMPORTANT]
> Decisões arquiteturais são tomadas antes da implementação detalhada. Uma vez implementadas, são caras e difíceis de alterar.

### 1.1 Atributos de Qualidade
Uma boa arquitetura deve satisfazer não apenas requisitos funcionais, mas principalmente **requisitos não-funcionais (atributos de qualidade)**:

| Categoria | Atributo | Descrição |
| :--- | :--- | :--- |
| **Tempo de Execução** | Disponibilidade | Prontidão do sistema para uso imediato. |
| **Tempo de Execução** | Desempenho | Rapidez, eficiência, uso de memória e tempo de resposta. |
| **Tempo de Execução** | Segurança | Resistência a acessos não autorizados e operação sem riscos. |
| **Tempo de Execução** | Confiabilidade | Capacidade do sistema de manter sua operação ao longo do tempo. |
| **Não Observáveis** | Manutenibilidade | Facilidade de alterar o sistema, corrigir bugs e adicionar features. |
| **Não Observáveis** | Testabilidade | Facilidade em demonstrar falhas ao testar. |
| **Não Observáveis** | Escalabilidade | Capacidade de crescer. |
| **Não Observáveis** | Portabilidade | Executar em ambientes diferentes. |

### 1.2 Modelagem de Arquitetura
Arquiteturas são comumente modeladas usando **ADL (Architecture Description Languages)**, como Armani, ADML, e Wright, que superam os diagramas informais oferecendo verificações formais (deadlocks, invariantes). No contexto comercial, a **UML (Unified Modeling Language)** é a norma dominante.

---

## 2. Paradigmas de Programação e Propriedades da POO

Um paradigma de programação é um estilo ou forma de conceituar e estruturar o código:
1. **Imperativa:** Foco em "como" fazer as coisas.
2. **Estruturada:** Uso de sequências, seleções e repetições.
3. **Declarativa:** Foco em "o que" fazer.
4. **POO:** Foco em modelar o sistema como um conjunto de objetos interagindo.

### Propriedades Fundamentais da POO
- **Abstração:** Focar nos detalhes essenciais (ex: modelo de domínio).
- **Encapsulamento:** Ocultamento de estado interno e implementação.
- **Herança:** Reuso de características e comportamentos de classes base.
- **Polimorfismo:** Respostas diferentes à mesma mensagem, viabilizando extensibilidade.

---

## 3. Análise Orientada a Objetos (AOO) e Modelagem de Negócios

A AOO foca em entender os requisitos e o problema, mapeando o mundo real. Para isso, distinguimos os conceitos entre a perspectiva do negócio e a do sistema.

### 3.1 Negócio vs. Sistema

> [!TIP]
> A Modelagem de Negócios captura como a organização funciona antes (ou independentemente) da automação.

- **Ator do Negócio:** Indivíduo externo que interage com a empresa (ex: Cliente do Hotel, Fornecedor).
- **Trabalhador do Negócio:** Pessoas de dentro da organização que realizam os processos (ex: Recepcionista do Hotel).
- **Caso de Uso do Negócio (CUN):** Processo dentro do negócio (ex: "Reservar Quarto", "Atender Paciente").

Quando passamos para o software:
- **Ator do Sistema:** Entidade externa que interage diretamente com o sistema.
- **Caso de Uso do Sistema (CUS):** Funcionalidade que será automatizada (ex: "Efetuar Login", "Processar Pagamento"). Os nomes devem começar com verbo no infinitivo.

### 3.2 Relacionamentos em Casos de Uso
- **Associação (Inicialização):** Ligação entre o ator e o caso de uso.
- **Inclusão (`<<include>>`):** Atividade obrigatória que é extraída para reuso (ex: "Realizar Matrícula" inclui "Validar Documentos").
- **Extensão (`<<extend>>`):** Atividade opcional ou condicional (ex: "Realizar Matrícula" estende para "Solicitar Bolsa" apenas se necessário).
- **Generalização/Especialização:** Casos de uso hierárquicos (ex: "Inscrição" se especializa em "Inscrição Presencial" e "Inscrição Online").

---

## 4. Design Orientado a Objetos (DOO) e Classes de Análise

No Design, focamos em **como** o sistema resolve o problema (solução).

### 4.1 Fundamentos do Design
- **Modularidade:** Módulos independentes e coesos.
- **Coesão:** Alta (um módulo deve focar em apenas um objetivo).
- **Acoplamento:** Baixo (mínima interdependência).

### 4.2 Modelos de Classe de Análise
As classes de análise descrevem os elementos a serem implementados, sendo categorizadas em 3 estereótipos:
1. **Entidade (Entity):** Dados persistentes e lógicas de negócios núcleo (ex: `Cliente`, `Reserva`).
2. **Fronteira (Boundary):** Interação com o usuário ou outros sistemas (ex: `TelaDeLogin`, `FormularioReserva`).
3. **Controle (Control):** Lógica e orquestração do sistema, sequenciando os fluxos (ex: `ControladorDeReserva`).

> [!NOTE]
> **Descobrindo Classes:** Uma técnica eficaz é a identificação por **substantivos** presentes nos requisitos (que viram classes ou atributos) e **verbos** (que podem virar métodos).

---

## 5. Diagramas de Atividades

Os diagramas de atividades modelam o fluxo de execução de processos e algoritmos. São amplamente usados na Modelagem de Negócios e casos de uso complexos.

- **Atividades/Ações:** Tarefas executadas. (Um *Estado de Ação* é atômico/indivisível; um *Estado de Atividade* pode ser longo e decomposto).
- **Transições:** Passagem automática de uma atividade concluída para a próxima.
- **Condição de Guarda:** Condição lógica (`[passaporte_valido == true]`) para a transição.
- **Decisão (Desvio):** Ramificações lógicas (losangos).
- **Bifurcação (Fork) e União (Join):** Representam processamento paralelo (barras de sincronização).
- **Swinlanes (Raias):** Dividem o diagrama definindo responsabilidades de quem executa (ex: Raia Cliente, Raia Recepcionista, Raia Sistema).

---

## 6. Princípios de Design (SOLID, GRASP, DRY, KISS)

### 6.1 SOLID
1. **S - Single Responsibility:** Uma classe, uma responsabilidade.
2. **O - Open/Closed:** Aberto para extensão (polimorfismo), fechado para modificação.
3. **L - Liskov Substitution:** Subtipos devem ser perfeitamente substituíveis pela classe base.
4. **I - Interface Segregation:** Várias interfaces pequenas e específicas ao invés de uma genérica.
5. **D - Dependency Inversion:** Dependa de abstrações, não de classes concretas.

### 6.2 GRASP e outros
- **Information Expert:** Dê a responsabilidade a quem tem os dados.
- **Creator:** Quem agrega ou contém, cria.
- **Controller:** Ponto central que recebe eventos de interface.
- **Baixo Acoplamento / Alta Coesão.**
- **Polimorfismo / Variações Protegidas.**
- **Pure Fabrication:** Classe artificial (ex: DAO/Repository) criada para manter alta coesão e baixo acoplamento.

---

## 7. Padrões de Arquitetura e Padrões de Projeto

- **Arquitetônicos (Estruturais Gerais):**
  - MVC (Model-View-Controller)
  - Camadas (Layers)
  - Pipes and Filters
  - Microkernel
  - Broker
- **Design Patterns (GoF - Classes/Objetos):**
  - **Criacionais:** Singleton, Factory Method, Builder.
  - **Estruturais:** Adapter, Composite, Decorator.
  - **Comportamentais:** Observer, Strategy, Command.

---

## 8. Estudo de Caso: RUP e Hotel X

O **RUP (Rational Unified Process)** é iterativo e incremental, fortemente guiado por Casos de Uso.
- **Fases:** Inception (Concepção), Elaboration (Elaboração), Construction (Construção), Transition (Transição).

### O Caso Prático: Hotel X
Este caso demonstra como extrair dados de entrevistas de usuários:
1. **Identificar o Processo:** A entrevista revela um fluxo ("Reservar Quarto") com regras específicas (ex: validação de passaporte).
2. **Identificar Atores do Negócio:** O Hóspede/Cliente.
3. **Trabalhadores do Negócio:** A Recepcionista.
4. **Entidades do Negócio:** Formulário de Hospedagem, Livro de Reservas, Comprovante.
5. **Modelagem Dinâmica:** A entrevista é transformada em um Diagrama de Atividades detalhado com raias (swinlanes). Se descobre que buscar quarto é comum a `Reservar` e `Mudar Quarto Quebrado`, sugerindo um relacionamento `<<include>>`.
6. **Melhorias de Processo:** A automação proposta muda a regra de negócios, eliminando a busca manual, incorporando pagamento via cartão de crédito (`<<extend>>` opcional).

> [!WARNING]
> Entender a linguagem do usuário é crucial. No caso do Hotel X, o arquiteto deve respeitar o nome dos relatórios reais ("Lista de conforto", "Livro de Reservas") antes de convertê-los em Entidades de classe de análise.

---

> *"Engenharia de Software não é apenas escrever código, é projetar estruturas que resistem ao teste do tempo, das mudanças de requisitos e da escalabilidade."*
