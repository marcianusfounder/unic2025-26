# Guia de Estudo Teórico - Direção de Sistemas de Informação (Versão 2)

> [!info] 
> Este guia teórico foi estruturado de forma sequencial em 5 temas principais, agregando os conceitos e conhecimentos fundamentais abordados nas aulas teóricas da disciplina de Direção de Sistemas de Informação. 

---

## Tema 1. Teoria do Projeto Tecnológico

### 1.1. O que é um Projeto?
A palavra "projeto" provém do latim *proiectum*, que significa "lançar para diante". Em essência, um projeto é a busca de uma **solução inteligente** à colocação de um problema, tendendo a resolver uma necessidade humana. 

**Características Gerais de um Projeto:**
- Possui objetivos específicos.
- Tem início e fim bem definidos (organização temporária).
- Deve ser executado sob restrições (ex: orçamento, tempo).
- É executado por uma equipa e é **único**.

> [!TIP]
> Um projeto de engenharia é o processo de tomada de decisões iterativo em que ciências básicas, matemática e engenharias são aplicadas para converter de forma ótima os recursos num dado objetivo. Ele estabelece e define novas soluções para problemas conhecidos ou cria soluções para novos problemas.

### 1.2. Taxonomia de Projetos
Os projetos podem ser classificados de diversas formas:
- **Pela natureza:** Construção, Informática, Sociais.
- **Pelo grau de dificuldade:** Êxito certo (construção) vs. Êxito incerto (investigação).
- **Pelo tipo de cliente:** Internos vs. Externos.
- **Pelo setor da economia:** Agropecuários, Industriais, Infraestrutura (Social e Económica) e Serviços.
- **Pelo executor:** Públicos, Privados e Mistos.
- **Pelo tipo de problemas a resolver:** Básicos/Criação Científica, Desenvolvimento Tecnológico/Aplicado e Inovação Tecnológica.

### 1.3. Ciclo de Vida de um Projeto
O ciclo de vida engloba as fases pelas quais o projeto passa, do início ao fim:
1. **Identificação (Inteligência):** Diagnóstico da situação problemática, necessidades e meios técnicos.
2. **Desenho e Formulação:** Elaboração e eleição da alternativa adequada, definição de recursos, elaboração do documento do projeto e formação da equipa.
3. **Execução e Seguimento:** Execução das atividades, relatórios, gestão de recursos, revisão e adaptação.
4. **Avaliação (Terminação):** Finalização, revisão, documentação final (Relatório), entrega (transferência de responsabilidades) e libertação de recursos.

### 1.4. A Teoria do Projeto Tecnológico
O projeto tecnológico distingue-se dos outros quanto ao seu **objeto**: uma mudança organizacional que afeta o âmbito dos negócios pela influência e pelo uso conveniente das Tecnologias de Informação. Ele possui **duas dimensões** (gestão e construção) e requer **duas visões** integradas: a **Visão do Negócio** e a **Visão Tecnológica**.

---

## Tema 2. Gestão de Projetos

### 2.1. O que é Gestão de Projetos?
É o processo de planear, executar, monitorizar e controlar um projeto desde o início até o fim. O gestor tem de lidar constantemente com o "triângulo do diabo": **Custo, Tempo e Qualidade**, decidindo as prioridades entre estes perante as restrições impostas.

### 2.2. PMBOK (Project Management Body of Knowledge)
O PMBOK, desenvolvido pelo PMI (Project Management Institute), oferece uma linguagem universal e um referencial de melhores práticas. 

| Área de Conhecimento | Descrição |
| :--- | :--- |
| **Integração** | Coordenação adequada de todos os elementos do projeto. |
| **Alcance** | Garantir que apenas o trabalho necessário seja executado. |
| **Tempo** | Garantir que o projeto termina no tempo adequado. |
| **Custo** | Completar o projeto dentro do orçamento. |
| **Qualidade** | Satisfazer as necessidades predefinidas. |
| **Recursos Humanos** | Organizar e gerir as equipas de trabalho. |
| **Comunicações** | Geração e distribuição de informações relativas ao projeto. |
| **Riscos** | Identificação, análise e resposta aos riscos. |
| **Abastecimento** | Aquisição de bens/serviços necessários e contratos. |

### 2.3. Modelos de Maturidade de Gestão de Projetos
Os modelos de maturidade ajudam a avaliar a capacidade e institucionalização de práticas numa organização, inspirados muitas vezes no **CMM (Capability Maturity Model)** e **CMMI**.

> [!NOTE] 
> **Níveis de Maturidade no CMM/CMMI:**
> 1. **Inicial:** Processos caóticos, baseados no esforço pessoal.
> 2. **Repetível:** Algumas práticas geridas; sucessos podem ser repetidos.
> 3. **Definido:** Processos padronizados e integrados.
> 4. **Gerido:** Medições precisas para a tomada de decisões.
> 5. **Otimizado:** Melhoria contínua dos processos.

Outros modelos incluem o **Trillium Model** (usado em engenharia de software e foco em roadmaps e capability areas) e modelos próprios baseados no PMBOK.

### 2.4. Melhores Práticas e Guias de Referência em TI
- **ITIL:** Biblioteca que define as melhores práticas para a Gestão de Serviços de TI, visando alinhamento com o negócio e serviços consistentes.
- **SGSI (ISO/IEC 27001):** Sistema de Gestão da Segurança da Informação, fundamentado na Confidencialidade, Integridade e Disponibilidade da informação.
- **PRINCE2:** Método rigoroso de gestão de projetos (Projects In Controlled Environments) que foca a justificação de negócios e o planeamento baseado no produto.

---

## Tema 3. Engenharia de Software e Gestão de Projetos

Os projetos de informática podem ser caracterizados por dimensões específicas que determinam a sua abordagem.

### 3.1. Dimensões do Projeto de Informática
1. **Dimensão do Artefato:** Pode ser um projeto de software ou um projeto de infraestrutura.
2. **Dimensão do Alcance:** Pode focar-se na Engenharia de Software ou num Sistema de Informação (que envolve hardware, pessoas e procedimentos).
3. **Dimensão do Trabalho:** Projetos feitos à medida ("construir algo novo") vs. Projetos de adaptação de software existente.
4. **Dimensão Organizacional:** Referente à estrutura da equipa: Isomórfica, Especialista, Democrática ou Programador-Líder.
5. **Dimensão de Desenvolvimento:** A metodologia e as fases seguidas.

### 3.2. Fases do Desenvolvimento de Software
1. **Análise das Exigências:** Entender "O que é o problema?". Usa DER, DFD e DTE para modelar o domínio.
2. **Projeto (Design):** Responder a "Qual é a solução?". Desenha a arquitetura, as interfaces e estruturas de dados.
3. **Implementação:** "Como se constrói a solução?". A codificação do software.
4. **Teste:** "O problema foi resolvido?". 
   - *Caixa Branca:* Testa lógica interna, loops, caminhos do código.
   - *Caixa Preta:* Testa os requisitos funcionais e interfaces (sem ver o código).
   - Testes de Unidade, Integração e Validação (Alpha e Beta).
5. **Entrega e Manutenção:** Inclui manutenção Corretiva, Adaptativa, Perfectiva e Preventiva.

### 3.3. Modelos de Desenvolvimento
| Categoria | Modelos | Descrição |
| :--- | :--- | :--- |
| **Sequenciais** | Cascata (Waterfall) | Segue fases lineares com verificação e validação no final de cada etapa. Funciona para requisitos muito claros, mas é rígido. |
| **Incrementais** | Incremental, RAD | Entrega funcionalidades em etapas. O RAD (Rapid Application Development) prioriza velocidade extrema, mas exige domínio de requisitos e ambiente. |
| **Evolutivos** | Prototipagem, Espiral | Constroem versões preliminares iterativas (protótipos) para descobrir e clarificar as necessidades do cliente. A Espiral gere grandes riscos através de iterações avaliativas. |
| **Ágeis** | Extreme Programming (XP) | Foco em adaptação. Testes contínuos, programação pareada (pair programming), refatoração, iteratividade e colaboração diária com o cliente. |

> [!IMPORTANT]
> **E-Project (Projeto e-Business):** Possui diferenças claras do desenvolvimento tradicional. O ciclo de vida é muito mais curto (dias/meses), o processo é altamente iterativo, e a libertação de produto (releases) é rápida e frequente. A gestão de risco é inerente, em vez de estritamente planeada.

---

## Tema 4. Exemplo de Projeto Tecnológico: Implantação e-Business

O E-Business trata da utilização da Internet para transformar as operações centrais do negócio. Este tipo de projeto necessita tanto da **visão de negócio** quanto da **visão tecnológica**.

### 4.1. O Ciclo e-Business
1. **Transformação:** Mudar fundamentalmente os processos centrais da empresa.
2. **Criação de novas aplicações:** Construção ou adaptação rápida.
3. **Obtenção de um ambiente adequado:** Infraestrutura escalável, adaptável e segura.
4. **Conceber a estratégia:** Difundir o conhecimento por toda a empresa.

### 4.2. Definição Estratégica e Análise
Antes da implementação tecnológica, a estratégia tem de alinhar a missão com objetivos financeiros e de mercado:
- **Análise Externa:** O modelo das **Cinco Forças de Porter** avalia a Rivalidade entre concorrentes, o Poder de negociação dos compradores, o Poder de negociação dos fornecedores, a Ameaça de novos entrantes e a Ameaça de produtos substitutos.
- **Análise Demográfica/Mercado:** Perfil do consumidor web e tendências de internet.

### 4.3. Processos Chave e-Business (Os Grandes Pilares)
- **CRM (Customer Relationship Management):** Passa-se para o Marketing Relacional. Foco em manter um diálogo constante, conhecer o cliente, fidelizar (sai muito mais barato reter do que atrair) e personalizar a oferta ("Marketing 1-to-1").
- **SCM (Supply Chain Management):** A Gestão da Cadeia de Fornecimentos exige tempo de mercado (Time to Market) otimizado, integração em rede e minimização de custos logísticos, ligando a empresa aos parceiros em tempo real.
- **Comércio Eletrónico:** Empoderamento do cliente no auto-serviço (ex: processar os próprios pedidos on-line).

> [!WARNING]
> Fatores Críticos de Sucesso para e-Business incluem possuir clara orientação executiva, comprometer toda a organização (não é um projeto isolado de TI), unir visão de negócios e tecnológica e abraçar a mudança cultural.

---

## Tema 5. Ferramentas e Técnicas de Gestão de Projetos

Para garantir o sucesso de um projeto de TI/e-Business, aplica-se um conjunto estruturado de ferramentas de gestão em quatro etapas:

### 5.1. Iniciação e Planeamento
- **Motivações:** Demanda do mercado, de clientes, avanço tecnológico ou obrigações legais.
- **Planeamento e WBS:** A **WBS (Work Breakdown Structure / Estrutura de Decomposição do Projeto)** é vital para estimar o trabalho, subdividindo o projeto em fases, pacotes e tarefas menores que facilitam orçamentos e prazos.
- **Ferramentas de Tempo (Gantt e Diagrama de Rede):**
  - *Gráfico de Gantt:* Muito útil no início e para relatórios visuais; não mostra dependências complexas (ou caminhos críticos) facilmente.
  - *Diagramas de Precedência (Rede):* Demonstram as conexões lógicas entre as tarefas, permitindo calcular atrasos e impactos.

### 5.2. Estimativas de Custo
Os custos (muitas vezes calculados com base nas horas de esforço dos recursos) podem ser estimados:
- **Top-Down (De cima para baixo):** Baseia-se em analogias com projetos anteriores.
- **Bottom-Up (De baixo para cima):** Soma os custos das tarefas individuais mais detalhadas. A **Curva-S** ajuda a visualizar o custo financeiro acumulado ao longo do cronograma.

### 5.3. Controlo e Acompanhamento
Ferramentas de Garantia de Qualidade (*Walkthroughs*, inspeções, testes) em paridade com a avaliação do custo e do tempo. Deve gerir-se ativamente a configuração técnica, o desempenho, e intervir na motivação da equipa e resolução de conflitos.

### 5.4. Encerramento
A formalização da conclusão ocorre em dois eixos:
- **Administrativo:** Verificação e documentação dos resultados para que a entrega seja aceite pelo cliente.
- **Contratos:** Fecho formal com prestadores e fornecedores, assegurando que o estipulado foi cumprido.

> [!TIP]
> Em projetos e-Business, ferramentas tradicionais devem ser complementadas por táticas ágeis, priorizando retroalimentação contínua, vitórias rápidas ("quick wins") e alta flexibilidade perante novas descobertas tecnológicas.
