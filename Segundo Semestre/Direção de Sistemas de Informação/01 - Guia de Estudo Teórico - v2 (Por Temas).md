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
4. **Dimensão Organizacional:** Referente à estrutura da equipa: Isomórfica, Especialista, Democrática ou Programador-Líder (detalhada no ponto 3.5).
5. **Dimensão de Desenvolvimento:** A metodologia e as fases seguidas.

> [!NOTE] Projeto de Software vs. Projeto de Sistema de Informação (Dimensão do Alcance)
> - **Projeto de Engenharia de Software (visão de TI):** o objetivo imediato é construir ou modificar um *software*. A vitória é declarada quando o software satisfaz as exigências e é aceite pelos utilizadores e/ou dirigentes.
> - **Projeto de Sistema de Informação (visão de negócio):** o objetivo imediato é o aperfeiçoamento de um *sistema de trabalho* (que engloba hardware, serviços, pessoal e procedimentos). A vitória só é declarada quando o sistema de trabalho satisfaz os objetivos de negócio, contando com um mecanismo para continuar a realizar mudanças com êxito. *Ex.: sistemas de voo, contabilidade, radar, controlo de stocks, controlo ferroviário.*

**Sinais que indicam quando um projeto está sob risco:**
As necessidades do cliente não são compreendidas; o âmbito está pobremente definido; as mudanças foram mal realizadas; a tecnologia escolhida muda; as necessidades do negócio mudam; as datas de entrega não são realistas; os utilizadores mostram-se resistentes; perdem-se os patrocinadores; falta pessoal; os gestores evitam boas práticas e sábias lições.

**Como evitar estes problemas (boas práticas):** começar "com o pé direito" trabalhando para compreender o problema; proporcionar incentivos que mantenham a rotatividade de pessoal adequada; acompanhar o progresso à medida que se realizam os produtos de trabalho (código, especificações, casos de teste); adotar decisões inteligentes, dedicando mais tempo do que se pensa às tarefas arriscadas ou complexas; e efetuar uma análise *post-mortem* após concluir o projeto.

> [!NOTE] Participantes de todo projeto de software
> 1. **Gestores superiores:** definem os aspetos de negócio que exercem influência significativa no projeto.
> 2. **Gestores (técnicos) do projeto:** planeiam, motivam, organizam e controlam os profissionais que realizam o trabalho.
> 3. **Clientes:** especificam os requisitos para a engenharia do software.
> 4. **Utilizadores finais:** interagem com o software assim que é entregue à produção.

### 3.2. Fases do Desenvolvimento de Software
1. **Análise das Exigências:** Entender "O que é o problema?". Usa DER, DFD e DTE para modelar o domínio.
2. **Projeto (Design):** Responder a "Qual é a solução?". Desenha a arquitetura, as interfaces e estruturas de dados.
3. **Implementação:** "Como se constrói a solução?". A codificação do software.
4. **Teste:** "O problema foi resolvido?". 
   - *Caixa Branca:* Testa lógica interna, loops, caminhos do código.
   - *Caixa Preta:* Testa os requisitos funcionais e interfaces (sem ver o código).
   - Testes de Unidade, Integração e Validação (Alpha e Beta).
5. **Entrega e Manutenção:** Inclui manutenção Corretiva, Adaptativa, Perfectiva e Preventiva.

> [!TIP] A Análise como "ponte" entre a Engenharia e o Projeto de Software
> A fase de análise faz a ligação entre três perguntas encadeadas: **"O que o cliente precisa?"** → **"Como entendemos e organizamos essas necessidades?"** → **"Como construiremos o software?"**. A análise interpreta o que o cliente deseja, elimina ambiguidades, define processos e dados, e transforma ideias em algo técnico. Divide-se em cinco áreas de esforço: **1) Reconhecimento do problema; 2) Avaliação e síntese; 3) Modelagem; 4) Especificação; 5) Revisão.** O modelo de análise tem três objetivos primários: descrever o que o cliente quer, estabelecer uma base para o projeto do software e definir um conjunto de requisitos validáveis após a construção.

**Aprofundamento dos Testes (fase 4):** O objetivo é responder *"o problema foi resolvido?"*. Os princípios de um bom teste são: dar acompanhamento a todos os testes até cobrir as exigências do cliente; planear os testes muito antes de os executar; começar "pelo menor" e progredir para "o maior"; e conduzir os testes por uma equipa independente. Além da distinção **Caixa Branca** (estrutura de controlo, lógica interna, laços/loops) vs. **Caixa Preta** (requisitos funcionais, sem ver o código), existem também:
- **Teste de Unidade:** verifica a menor unidade — o **módulo** (interface do módulo, estruturas de dados locais, condições-limite, caminhos de manejo de erros). É orientado à Caixa Branca.
- **Teste do Sistema:** testa profundamente o sistema completo, verificando a integração de todos os elementos.
- **Teste de Validação (Alfa e Beta):** o **Alfa** realiza-se no local de desenvolvimento, mas por um cliente, com o programador a observar e registar os erros; o **Beta** é feito pelos utilizadores finais no seu ambiente real, sem o programador presente, sendo o próprio cliente a registar e reportar os problemas.

> [!NOTE] Porque existe a Manutenção?
> O software não termina quando é entregue: com o tempo aparecem erros, as tecnologias mudam, as necessidades do negócio mudam e o sistema envelhece. A manutenção enfrenta problemas quando as alterações não são documentadas, não se compreende o trabalho alheio, falta documentação, o projeto é inadequado ou há negligência para com a própria manutenção — por isso **todas as fases do desenvolvimento devem considerar o custo futuro da manutenção**.

### 3.3. Modelos de Desenvolvimento
| Categoria | Modelos | Descrição |
| :--- | :--- | :--- |
| **Sequenciais** | Cascata (Waterfall) | Segue fases lineares com verificação e validação no final de cada etapa. Funciona para requisitos muito claros, mas é rígido. |
| **Incrementais** | Incremental, RAD | Entrega funcionalidades em etapas. O RAD (Rapid Application Development) prioriza velocidade extrema, mas exige domínio de requisitos e ambiente. |
| **Evolutivos** | Prototipagem, Espiral | Constroem versões preliminares iterativas (protótipos) para descobrir e clarificar as necessidades do cliente. A Espiral gere grandes riscos através de iterações avaliativas. |
| **Ágeis** | Extreme Programming (XP) | Foco em adaptação. Testes contínuos, programação pareada (pair programming), refatoração, iteratividade e colaboração diária com o cliente. |

> [!IMPORTANT]
> **E-Project (Projeto e-Business):** Possui diferenças claras do desenvolvimento tradicional. O ciclo de vida é muito mais curto (dias/meses), o processo é altamente iterativo, e a libertação de produto (releases) é rápida e frequente. A gestão de risco é inerente, em vez de estritamente planeada. Pode ser de três tipos: Nova Construção, Remodelamento e Manutenção (em tempo real).

#### 3.3.1. Aprofundamento de cada Modelo

Todo bom modelo de processo de software procura ser: **compreensível, bem construído** (com ferramentas automatizadas), **confiável** (deteta erros a tempo), **robusto** (opera sob falha), **versátil** (ajusta-se a mudanças) e **barato** (no tempo e orçamento adequados). Os modelos mais característicos são:

- **Cascata (Waterfall):** o mais básico e base dos outros. Princípios: planear antes de "embarcar", definir o comportamento externo do sistema, documentar cada atividade, projetar antes de codificar e testar antes de construir. Em cada fase há **Verificação** ("estamos a construir corretamente o produto?") e **Validação** ("estamos a construir o produto correto?"). Falha porque os projetos reais raramente seguem uma ordem sequencial, é difícil obter todas as exigências à partida e o cliente só vê resultados no fim (caos se um erro grave é detetado tardiamente).
- **Incremental:** iterativo por natureza. As exigências iniciais estão bem definidas, mas o desenvolvimento não é linear. A **funcionalidade do software é limitada em cada incremento** para que o cliente possa revê-la e refiná-la na fase seguinte. Útil quando não há pessoal suficiente para uma implementação completa na data combinada (os incrementos iniciais podem ser feitos por menos pessoas). *Na representação gráfica, o eixo do tempo mostra a entrega sucessiva do 1.º, 2.º… n-ésimo incremento.*
- **RAD (Rapid Application Development):** adaptação de alta velocidade do modelo cascata, com ciclo de vida extremamente curto (**60 a 90 dias**). Fases: Modelagem da Gestão, Modelagem de Dados, Modelagem do Processo, Geração de Aplicações (técnicas de 4.ª geração e reutilização de componentes) e Testes/Entrega. **Não é adequado** em ambientes tecnológicos novos ou que exijam interoperabilidade com aplicações existentes (não haverá tempo para testes de integração).
- **Prototipagem:** melhor enfoque quando o cliente define objetivos gerais mas não os requisitos detalhados, ou quando o programador não está seguro de um algoritmo/interação. Constrói-se um protótipo rápido para o cliente avaliar e refinar os requisitos. Muitas vezes o primeiro protótipo é lento/pesado e é **descartado**, começando-se um novo já corrigido.
- **Espiral:** enfrenta grandes sistemas com muitos subsistemas (prototipagem para partes de alto risco + cascata para partes claras). **O raio da espiral representa o custo acumulado** e o produto só está terminado ao finalizar toda a espiral (não ao fim de cada ciclo). Divide-se em **3 a 6 regiões de tarefas**: comunicação com o cliente, planeamento/replaneamento, análise de riscos, engenharia, construção/adaptação e avaliação da reação do cliente. Princípios: flexibilidade, eliminação antecipada de erros, integração de desenvolvimento e manutenção, e reutilização.
- **Extreme Programming (XP):** os 5 valores/princípios originais são **Simplicidade, Comunicação, Retroalimentação (feedback), Coragem e Respeito**. Características: desenvolvimento iterativo e incremental, testes unitários contínuos e automatizados (incl. regressão), **programação pareada** (dois a um computador), integração frequente com o cliente, correção de todos os erros antes de nova funcionalidade, **refatoração** (melhorar o código sem alterar o comportamento) e propriedade coletiva do código.

> [!NOTE] Diferenças entre Projeto Tradicional e E-Project
> | Critério | Projeto Tradicional | E-Project |
> | :--- | :--- | :--- |
> | Frequência de libertação | Meses/anos | Dias ou poucos meses |
> | Alcance do produto entregue | Grande | Menor (uma aplicação, corrigir um bug) |
> | Processo | Planeado/sequencial | Iterativo |
>
> Os **três tipos de e-Project** são: **Nova Construção** (fases de descobrimento, projeção, desenvolvimento e desdobramento; ex.: e-Shop, B2B — poucos meses); **Remodelamento** (alterações mantendo o serviço online; processo acelerado, poucas fases; semanas); e **Manutenção** (em tempo real: bugs, melhorias menores, mudanças de conteúdo — poucos dias; usa "páginas de manutenção" registadas em base de dados com data, versão, esforço estimado/real, urgência, confirmação de qualidade, etc.).

### 3.4. Problemas Comuns em Projetos de Informática e Má Gestão
Os projetos de software frequentemente enfrentam os mesmos desafios crónicos, que derivam tanto da natureza do produto como de falhas de gestão.

**Problemas Comuns:**
- **Necessidades não satisfeitas** ou não identificadas.
- **Os habituais:** Atrasos crónicos e derrapagem de custos.
- **O social:** A imposição dos resultados aos utilizadores (rejeição).

**As Causas:**
- **Natureza do Produto:** Intangível, invisível, complexo, volátil em exigências e sociotécnico (difícil de medir).
- **Problemas de Gestão:** Objetivos e especificações pobremente definidos, falta de planeamento, orçamentos e prazos irreais, e falta de habilidades nas relações sociais.

**Estados de uma Má Gestão:**
1. **Fora de controle e escalada:** O projeto entra num efeito "bola de neve" de erros. Há replanejamentos frequentes, dispersão de motivação e a sensação de que "as semanas têm 7 dias e os dias 24 horas".
2. **Modo ajustado:** A situação é tensa e o projeto "cheira a fracasso".
3. **Marcha Mortal (Death March):** Situação extrema onde o prazo, orçamento ou pessoal foram cortados para metade do racionalmente exigido, enquanto os requisitos e complexidade duplicaram.

**Recuperação e Desescalada:**
Para superar uma escalada de erros, a gestão deve implementar ações de *desescalada*. Existem duas propostas de referência:
- **Ribera:** circunscrever a envergadura do projeto; aumentar a produtividade com melhorias de curto prazo; assumir que não terminará a tempo, atrasar o plano e adotar medidas de controlo de danos.
- **Glass (por ordem de preferência):** 1) postergar as datas; 2) usar melhores procedimentos de gestão; 3) mais pessoal; 4) mais fundos; 5) reduzir o alcance; 6) melhores metodologias de desenvolvimento; 7) substituir tecnologia; 8) abandonar o projeto.

Por vezes, contrata-se um **Cavaleiro Branco** (*White Knight*): um especialista de salvamento que entra em cena para eliminar o mau funcionamento e tentar recuperar o projeto (a assessoria e consultoria em projetos são meios válidos de encontrar um).

> [!TIP] Atuação Preditiva (prevenir em vez de remediar)
> A melhor gestão é preventiva: objetivos claramente definidos; apoio total da direção; orçamento adequado e realista; programa coerente e realista; participação e confiança do cliente/utilizadores; boa liderança; revisões contínuas e construtivas; gestão eficiente da mudança; boas comunicações; e antecipar-se aos problemas com uma gestão de contingências.

### 3.5. Dimensão Organizacional: Estruturas de Equipa

Uma estrutura de equipa inadequada conduz a longos tempos de desenvolvimento, custos altos, qualidade pobre, má comunicação, baixa moral e alta rotatividade — podendo levar ao cancelamento do projeto. As quatro estruturas estudadas são:

| Estrutura | Descrição | Vantagens | Desvantagens |
| :--- | :--- | :--- | :--- |
| **Isomórfica** | Organiza-se segundo os principais módulos de software; cada membro liga-se a um módulo do início ao fim. | Organizacionalmente simples; tarefas paralelas; tarefas claramente definidas. | Dificuldades de integração dos módulos por problemas de comunicação. |
| **Especialista** | Cada membro dedica-se à sua área de conhecimento ao longo de todos os módulos. | Máximo aproveitamento e eficiência de cada especialista. | Dificuldade de integração, carência de unidade no módulo, difícil monitorizar a contribuição individual. |
| **Democrática** (autogerida) | Estrutura informal; decisões partilhadas; forte comunicação e interação. | Ótima em projetos pequenos onde inovação e criatividade importam mais que prazos estritos. | Pouco efetiva; conflitos interpessoais (egos fortes); tendência a evoluir sem liderança. |
| **Com Programador-Líder** | Proposta pela **IBM** para projetos de grande complexidade; oposta à democrática. Todas as decisões importantes são tomadas por um programador-líder assistido por especialistas de apoio. | Clareza de decisão em projetos complexos. | Forte dependência de uma só pessoa. |

### 3.6. Papéis Envolvidos num Projeto Informático

- **Equipa interna do projeto:** chefia do projeto; projetistas lógicos; projetistas tecnológicos; pessoal de controlo de qualidade e melhoria do processo; pessoal de informática de prestadores; pessoal imposto pela organização cliente; especialistas; e utilizadores.
- **Agentes externos ligados ao projeto:** cliente; proprietário; promotor/patrocinador; financiadores; consultores e assessores; auditores; diretores organizacionais; diretor de sistemas de informação; fornecedores de hardware/software/insumos; e prestadores de serviço.

---

## Tema 4. Exemplo de Projeto Tecnológico: Implantação e-Business

O E-Business trata da utilização da Internet para transformar as operações centrais do negócio. Este tipo de projeto necessita tanto da **visão de negócio** quanto da **visão tecnológica**.

### 4.1. O Ciclo e-Business
1. **Transformação:** Mudar fundamentalmente os processos centrais da empresa.
2. **Criação de novas aplicações:** Construção ou adaptação rápida.
3. **Obtenção de um ambiente adequado:** Infraestrutura escalável, adaptável e segura.
4. **Conceber a estratégia:** Difundir o conhecimento por toda a empresa.

> [!NOTE] Perguntas a fazer ANTES de iniciar uma iniciativa e-Business
> Como transformar a empresa em termos de e-Business? Como maximizar o valor do investimento em TI? Como reduzir custos e aumentar lucros? Há unanimidade na organização quanto à utilidade da solução? Contamos com os especialistas de negócio e de tecnologia? Podemos aproveitar os investimentos já feitos nos sistemas atuais (são adaptáveis)? Temos experiência em segurança eletrónica? **Estamos dispostos a enfrentar a mudança?**

### 4.2. Definição Estratégica e Análise
Antes da implementação tecnológica, a estratégia tem de **definir a missão** para o uso da solução e-Business e **estabelecer objetivos alinhados** à missão e aos objetivos corporativos, distinguindo:
- **Objetivos Estratégicos:** ser líder de mercado reconhecido; elevar a posição no mercado; melhor serviço ao cliente; estrutura de custos mais baixa que a concorrência; alta capacidade de resposta às mudanças; produtos de alta qualidade reconhecida.
- **Objetivos Financeiros:** elevar as margens de lucro; acelerar o crescimento das receitas; reduzir gastos elevando a eficiência dos processos.

A conceção da estratégia deve considerar três aspetos: **Coerência com o negócio principal**, **Análise de forças externas** e **Análise de mercado**:
- **Coerência com o negócio principal:** competir com base na qualidade; tempo de resposta ao mercado (inovador); melhor serviço; baixos custos; melhor acompanhamento do serviço prestado.
- **Análise Externa:** o modelo das **Cinco Forças de Porter** (Michael E. Porter, 1980) avalia a Rivalidade entre concorrentes, o Poder de negociação dos compradores, o Poder de negociação dos fornecedores, a Ameaça de novos entrantes e a Ameaça de produtos substitutos. Consideram-se ainda a concorrência, novos fornecedores potenciais, regulamentações governamentais e implicações culturais.
- **Análise Demográfica/Mercado:** perfil do consumidor web (demografia da Web) e tendências de internet.

> [!TIP] Considerações Estratégicas do Website (aspetos técnico-comerciais)
> Conteúdo de boa qualidade que convide a revisitar; projeto gráfico atrativo (harmonia entre visual e texto); comunicação eficaz na linguagem do mercado-alvo; interação fluida; navegação lógica e familiar ao utilizador; funcionamento **sem erros**; atualização frequente; promoção contínua (imprensa, buscadores, publicidade); e manutenção da fidelidade (informar novidades e promoções, criar vínculo pessoal).

### 4.3. Processos Chave e-Business (Os Grandes Pilares)
Existem **três processos-chave** que proporcionam maior retorno do investimento num ambiente e-Business: **CRM, SCM e Comércio Eletrónico**.

- **CRM (Customer Relationship Management):** Passa-se para o **Marketing Relacional**, suplantando os conceitos tradicionais do marketing. Os conceitos-chave a adotar são:
  - **Foco no cliente** ("o cliente é o rei"): passa-se de uma economia centrada no produto para uma economia centrada no cliente.
  - **Inteligência sobre clientes:** conhecer o cliente (via bases de dados e regras) para desenvolver produtos/serviços à medida das suas expectativas.
  - **Interatividade:** a comunicação deixa de ser monólogo (empresa→cliente) e torna-se diálogo, dirigido pelo cliente.
  - **Fidelização:** é mais rentável reter do que conquistar novos clientes (gestão do ciclo de vida do cliente).
  - **Personalização** ("Marketing 1-to-1"): comunicações e ofertas personalizadas em fundo e forma.

  *Contribuição da Internet para o marketing relacional:* redução de custos de interação, bidirecionalidade, públicos muito segmentados, atenção ao cliente 24/7/365. Para obter êxito, uma solução CRM apoia-se em **quatro pilares básicos: Estratégia, Pessoas, Processos e Tecnologia**.
- **SCM (Supply Chain Management):** A Gestão da Cadeia de Fornecimentos exige cumprir a promessa de entrega (não quando convém à empresa), otimizar o tempo de mercado (*Time to Market*), reduzir custos internos e o tempo do ciclo de conceção. A sua evolução online implica: **partilha de informação** (stocks, previsões — integrando a Web ao ERP), **realização de transações** (ordens, faturas, envios) e **estabelecimento de comunidades de negócio** (portais, mercados Web, leilões/licitações). Vantagens: redução de custos logísticos, maior satisfação, entrega pontual, fabricação sob demanda, aumento de receitas e maior fatia de mercado.
- **Comércio Eletrónico:** Empoderamento do cliente no auto-serviço — os próprios clientes processam os seus pedidos online (ex.: demandas numa seguradora ou pagamentos numa entidade bancária). Mudança de enorme potencial.

### 4.4. Fatores de Êxito para a Estratégia e Arquitetura e-Business
A infraestrutura tecnológica desenhada para a solução e-Business deve assegurar que o sistema seja:
- **Escalável e Particionável:** Suportar crescimento na capacidade de acordo com a demanda e volumes de transações.
- **Flexível:** Arquitetura aberta a incorporar novas tecnologias e processos.
- **Confiável e Disponível:** Com 99.99% de disponibilidade (24/7/365).
- **Acessível e Gerenciável:** Acesso a partir de qualquer dispositivo cliente e gerido sob uma plataforma única.
- **Recuperável:** Capaz de preservar a integridade da base de dados e recuperar-se rapidamente após quedas.

> [!WARNING]
> A nível de negócios, os Fatores Críticos de Sucesso para e-Business incluem possuir clara orientação executiva, comprometer toda a organização (não é um projeto isolado de TI), unir visão de negócios e tecnológica, e abraçar a mudança cultural.

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
