---
disciplina: "Engenharia de Software II"
tipo: "01 - Guia de Estudo Teórico"
status: "Não Iniciado"
---
# Guia de Estudo Teórico: Engenharia de Software II

## Introdução

Este guia de estudo exaustivo e definitivo foi elaborado para cobrir de ponta a ponta a disciplina de Engenharia de Software II. Ele integra os conceitos fundamentais da modelagem de processos e sistemas, metodologias consolidadas como o Rational Unified Process (RUP), a Unified Modeling Language (UML) em nível avançado, Arquitetura de Software, Padrões de Projeto (Design Patterns) e Testes de Software. O material aqui disposto destina-se a orientar o aluno não apenas para a aprovação acadêmica, mas para a prática profissional de excelência.

A Engenharia de Software transcende a simples programação. Ela é o estabelecimento e o uso de princípios de engenharia robustos para obter software de maneira econômica, confiável e que funcione eficientemente em máquinas reais (Pressman). Enquanto a Engenharia de Sistemas foca na relação e integração entre hardware, software e o ambiente, a Engenharia de Software concentra-se nas técnicas, métodos e processos para o ciclo de vida do software.

---

## 1. Processos de Software e o Rational Unified Process (RUP)

Um processo de software é um conjunto de atividades, métodos e práticas que orientam o planejamento, desenvolvimento e teste de um software desde a sua concepção até a descontinuação (fim do ciclo de vida). Dentre os diversos modelos de processos, o **RUP (Rational Unified Process)** se destaca por sua robustez em projetos complexos corporativos.

### 1.1 Características do RUP
O RUP é um framework de processo de desenvolvimento de software iterativo e incremental, criado pela Rational Software Corporation (posteriormente adquirida pela IBM). Ele é:
- **Dirigido por Casos de Uso:** O desenvolvimento é focado em entregar valor aos atores (usuários finais ou sistemas externos). Os casos de uso orientam o design, a implementação e os testes.
- **Centrado na Arquitetura:** A arquitetura do sistema é o esqueleto em torno do qual o software é construído, devendo ser estabelecida cedo no ciclo de vida para mitigar riscos.
- **Iterativo e Incremental:** O projeto é dividido em mini-projetos (iterações), resultando em incrementos executáveis de software, o que permite validação contínua e redução de riscos técnicos e de negócio.

### 1.2 Fases do RUP
O ciclo de vida do RUP divide-se em quatro fases distintas, cada uma culminando em um marco (*milestone*) bem definido:

1. **Concepção (Inception):**
   - **Objetivo:** Estabelecer o caso de negócio (*business case*) para o sistema e definir o escopo do projeto.
   - **Atividades:** Identificação de todos os atores e casos de uso básicos, avaliação de viabilidade, estimativa inicial de custos e cronograma.
   - **Marco:** *Lifecycle Objective (LCO)* - Concordância das partes interessadas sobre o escopo e a viabilidade.

2. **Elaboração (Elaboration):**
   - **Objetivo:** Analisar o domínio do problema, estabelecer uma arquitetura sólida (baseline), mitigar os maiores riscos.
   - **Atividades:** Detalhamento da maioria dos casos de uso, criação da linha de base da arquitetura executável, plano de projeto revisado.
   - **Marco:** *Lifecycle Architecture (LCA)* - Arquitetura validada, riscos mitigados, casos de uso compreendidos.

3. **Construção (Construction):**
   - **Objetivo:** Desenvolver iterativamente o produto de software operacional completo, com foco na eficiência técnica.
   - **Atividades:** Design detalhado, codificação em larga escala, testes de unidade e integração.
   - **Marco:** *Initial Operational Capability (IOC)* - O sistema está pronto para ser testado pelos usuários finais em um ambiente beta.

4. **Transição (Transition):**
   - **Objetivo:** Garantir que o software está disponível para os usuários finais e entregar o produto acabado.
   - **Atividades:** Testes beta, treinamento de usuários, implantação, ajustes finos baseados no feedback dos usuários, conversão de dados.
   - **Marco:** *Product Release (PR)* - Produto final em produção, stakeholders satisfeitos.

### 1.3 Disciplinas do RUP
O RUP estrutura as tarefas em disciplinas (ou workflows), que ocorrem ao longo de todas as fases com diferentes níveis de intensidade:
- **Modelagem de Negócios (Business Modeling):** Compreensão dos processos de negócios da organização.
- **Requisitos (Requirements):** Elicitação e documentação do que o sistema deve fazer.
- **Análise e Design (Analysis & Design):** Como o sistema será realizado para satisfazer os requisitos (arquitetura e modelagem UML).
- **Implementação (Implementation):** Escrita de código (programação).
- **Testes (Test):** Verificação da qualidade e validação frente aos requisitos.
- **Implantação (Deployment):** Entrega do software ao usuário final.
- **Gerenciamento de Configuração e Mudança (Configuration & Change Management):** Controle de versões e alterações de artefatos.
- **Gerenciamento de Projeto (Project Management):** Planejamento, alocação de recursos e controle de riscos.
- **Ambiente (Environment):** Fornecimento de ferramentas CASE (Computer-Aided Software Engineering) e processos de suporte à equipe.

---

## 2. Modelagem de Negócios (Business Modeling)

A modelagem de negócios é essencial antes de construir o software para garantir que o sistema de informação suporte adequadamente os processos da organização. O Engenheiro de Software (ou Designer de Negócios/Analista de Sistemas) deve documentar como o negócio funciona independentemente da automação que será inserida.

### 2.1 Componentes da Modelagem de Negócios
- **Atores do Negócio:** Alguém ou algo (externo ao negócio) que interage com o negócio (ex: Cliente, Estudante).
- **Trabalhadores do Negócio:** Pessoas ou sistemas que executam tarefas dentro do negócio (ex: Recepcionista, Secretaria Docente).
- **Casos de Uso do Negócio:** Um processo que fornece um resultado de valor para um ator do negócio (ex: "Reservar Quarto", "Realizar Matrícula").
- **Entidades de Negócio:** "Coisas" manejadas e utilizadas no negócio, que frequentemente originarão as classes de persistência no sistema (ex: Ficha de Inscrição, Passaporte, Certificado de Notas).

### 2.2 Artefatos Produzidos
1. **Diagrama de Casos de Uso de Negócio:** Visão de alto nível de quais processos existem e quem interage com eles.
2. **Diagramas de Atividades:** Mapeamento visual e sequencial do fluxo de trabalho (*workflow*) do processo. Pode mostrar decisões, paralelismo, e divisões de responsabilidade (através de *swimlanes*).
3. **Modelo de Objetos de Negócio:** Um diagrama de classes identificando as entidades e os trabalhadores, e como eles se relacionam.
4. **Regras de Negócio (Business Rules):** Diretrizes, políticas ou regulamentos incontestáveis do negócio que o software deve respeitar rigidamente.

*Exemplo Prático*: No caso do "Hotel X", identificar o tipo de quarto requisitado e confrontá-lo com a capacidade de ocupantes é uma **regra de negócio**, e a busca por um quarto desocupado no Livro de Reservas é um processo que pode ser modelado usando **diagramas de atividades**.

---

## 3. Unified Modeling Language (UML) Avançada

A UML é a linguagem padrão da indústria para visualização, especificação, construção e documentação de artefatos de software. Nesta disciplina, requer-se domínio avançado das notações de UML.

### 3.1 Diagramas Comportamentais (Dinâmicos)

#### 3.1.1 Diagrama de Casos de Uso de Sistema
Modela os requisitos funcionais visíveis do exterior do sistema de software. 
- **Atores do Sistema:** Quem ou o que usará o software (ex: Cliente web, Atendente).
- **Relacionamentos Avançados:**
  - **`<<include>>` (Inclusão):** O caso de uso base sempre executa o caso de uso incluído. Usado para extrair comportamentos comuns. (Ex: "Reservar Quarto" `<<include>>` "Pesquisar Quarto Disponível").
  - **`<<extend>>` (Extensão):** O caso de uso estendido executa o caso de uso de extensão apenas sob certas condições (pontos de extensão). Modela comportamento opcional ou de exceção.
  - **Generalização/Especialização:** Aplicável tanto a Atores quanto a Casos de Uso. (Ex: "Pagamento com Cartão" herda de "Pagamento").

#### 3.1.2 Diagrama de Atividades
Mostra o fluxo de controle de uma atividade para outra, semelhante a um fluxograma, mas com suporte a concorrência.
- **Nós de Ação:** Passos do processo.
- **Decisões / Fusões (Decision/Merge Nodes):** Ramificações lógicas condicionais (losangos).
- **Bifurcações / Junções (Fork/Join Nodes):** Barras espessas que representam execução em paralelo (threads).
- **Raias (Swimlanes):** Dividem as responsabilidades de execução entre diferentes atores ou departamentos.

#### 3.1.3 Diagrama de Sequência
Mostra a interação entre objetos em ordem temporal. É fundamental na fase de Análise e Design para descrever como um Caso de Uso é implementado no código.
- **Linha de Vida (Lifeline):** Representa o objeto ao longo do tempo.
- **Mensagens:** Síncronas (seta preenchida), Assíncronas (seta aberta), de Retorno (linha tracejada).
- **Fragmentos Combinados (Combined Fragments):** Operadores avançados para loops (`loop`), condicionais (`opt`, `alt`), execução paralela (`par`), e referências (`ref`).

#### 3.1.4 Diagrama de Máquina de Estados
Modela os estados possíveis de um objeto complexo e as transições causadas por eventos. Fundamental para entidades cujo ciclo de vida afeta severamente o sistema (ex: Uma "Reserva" que passa por: Pendente -> Confirmada -> Paga -> Cancelada ou Concluída).

### 3.2 Diagramas Estruturais (Estáticos)

#### 3.2.1 Diagrama de Classes
A espinha dorsal orientada a objetos do sistema.
- **Classes:** Divididas em compartimentos (Nome, Atributos, Operações).
- **Visibilidade:** `+` (public), `-` (private), `#` (protected).
- **Associações:**
  - Simples: Conexão lógica entre duas classes.
  - **Agregação:** Relacionamento "todo-parte" fraco (losango vazado). A parte sobrevive sem o todo.
  - **Composição:** Relacionamento "todo-parte" forte (losango preenchido). A parte morre junto com o todo (Ex: Arquivo de Hospedagem contém Formulário de Reserva).
  - **Multiplicidade:** `1..*`, `0..1`, `*`, etc.

---

## 4. Arquitetura de Software e Padrões de Projeto (Design Patterns)

A Arquitetura de Software refere-se à organização fundamental de um sistema incorporada em seus componentes, aos relacionamentos dos componentes uns com os outros e com o ambiente, e aos princípios norteadores do seu design e evolução.

### 4.1 Padrões Arquiteturais
- **MVC (Model-View-Controller):** 
  - *Model:* Regras de negócio, dados, lógica central.
  - *View:* Interface gráfica (GUI).
  - *Controller:* Intermediário que recebe inputs da View, manipula o Model, e devolve resultados para a View.
- **Arquitetura em Camadas (Layered Architecture):** Organiza o sistema hierarquicamente, ex: Apresentação, Lógica de Negócios, Acesso a Dados.
- **Arquitetura Orientada a Serviços (SOA) e Microsserviços:** Divisão do sistema em serviços pequenos, escaláveis e independentes comunicando-se via rede (APIs, REST, SOAP).

### 4.2 Padrões de Projeto (GoF - Gang of Four)
São soluções consolidadas para problemas comuns no design de software orientado a objetos.

1. **Padrões Criacionais (Creation):**
   - **Singleton:** Garante a existência de apenas uma instância de uma classe, mantendo um ponto de acesso global ao seu objeto (ex: Conexão com banco de dados).
   - **Factory Method:** Define uma interface para criar um objeto, mas deixa as subclasses decidirem que classe instanciar.

2. **Padrões Estruturais (Structural):**
   - **Adapter:** Converte a interface de uma classe noutra requerida pelo cliente, permitindo que classes com interfaces incompatíveis trabalhem juntas.
   - **Facade:** Fornece uma interface unificada simplificada de alto nível para um conjunto de interfaces complexas em um subsistema.

3. **Padrões Comportamentais (Behavioral):**
   - **Observer:** Define uma dependência um-para-muitos, onde se o estado de um objeto mudar, todos os seus dependentes são notificados (base do padrão Pub/Sub e arquiteturas reativas).
   - **Strategy:** Define uma família de algoritmos, encapsula-os e os faz intercambiáveis. Permite que o algoritmo varie independentemente dos clientes que o utilizam.

---

## 5. Qualidade de Software e Testes

Os atributos de um bom software, listados nos fundamentos, são: **Confiabilidade** (funciona sem falhas sob condições específicas), **Flexibilidade** (capacidade de adaptar-se a mudanças) e **Eficiência** (uso otimizado de recursos como memória e CPU).
Para assegurar estes e outros atributos (como previstos na norma ISO/IEC 25010), aplicamos Engenharia de Qualidade e Testes de Software rigorosos.

### 5.1 Tipos de Testes
- **Testes de Unidade (Unit Testing):** Focados no menor bloco testável do código (funções, métodos, classes). Ferramentas: JUnit, NUnit, PyTest. Geralmente conduzidos por desenvolvedores.
- **Testes de Integração:** Avaliam como os módulos e subsistemas interagem e comunicam entre si. Detectam problemas de interface.
- **Testes de Sistema:** O software é testado por completo, em um ambiente que simula a produção.
- **Testes de Aceitação (UAT):** Realizados pelos usuários finais para homologar o sistema em relação aos requisitos de negócio.

### 5.2 Estratégias de Teste
- **Caixa Branca (White Box):** O testador conhece a estrutura interna do código. Envolve testes de caminho lógico, cobertura de ramos e loops.
- **Caixa Preta (Black Box):** O testador avalia o sistema considerando as entradas e saídas esperadas sem olhar para o código fonte (testes funcionais, análise de valor limite, particionamento de equivalência).
- **TDD (Test-Driven Development):** Prática onde os testes de unidade são escritos *antes* da implementação do código. Reduz os defeitos sistêmicos e favorece um design de software altamente modular.

---
*Este material guia o processo iterativo e unificado de transpor problemas do mundo real para sistemas de software confiáveis e manteníveis. O estudo e o domínio dessas técnicas determinam a maturidade do Engenheiro de Software na indústria.*
