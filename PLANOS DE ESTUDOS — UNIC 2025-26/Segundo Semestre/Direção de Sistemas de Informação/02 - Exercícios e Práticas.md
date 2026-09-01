# Guia de Exercícios e Práticas: Direção de Sistemas de Informação

Este documento apresenta a resolução detalhada dos tópicos propostos para a disciplina, incluindo exercícios teóricos e casos de estudo abordando todas as fases do planeamento e gestão de projetos tecnológicos.

---

### Exercício 1: Aspectos da Definição Técnica de Projeto
**Questão:** Principais aspectos que ressaltam na definição técnica de projeto. Qual destes aspectos considera mais importante?

**Resolução Passo-a-Passo:**
A definição técnica de um projeto aponta para um "esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo".
Os principais aspectos que ressaltam nessa definição são:
1. **Temporariedade:** Todo projeto possui um início e um fim claramente definidos. Não é um esforço contínuo.
2. **Exclusividade (Singularidade):** O produto ou serviço resultante é único e diferente de operações de rotina.
3. **Escopo Definido:** Os requisitos e entregáveis são especificados.
4. **Recursos Limitados:** O projeto deve ser executado dentro de limites de tempo, orçamento e capital humano.

**Qual é o mais importante?**
Embora todos sejam essenciais, a **Temporariedade** é frequentemente considerada o aspecto mais importante da definição técnica. É a temporalidade que diferencia fundamentalmente a Gestão de Projetos da Gestão de Operações (processos contínuos de negócios). Sem um fim definido, a alocação orçamentária e a avaliação de sucesso perdem o seu sentido primordial.

---

### Exercício 2: Aplicação do ITIL Conforme o Tamanho da Organização
**Questão:** Explique como o ITIL é aplicado variando de acordo com o tamanho da organização.

**Resolução Passo-a-Passo:**
O ITIL (versão 4) é regido pelo princípio "Comece onde você está" (Start where you are), e sua aplicação não é prescritiva, o que o torna moldável a diferentes tamanhos de organização:
*   **Pequenas Empresas:** Não têm necessidade (nem recursos) para implementar todas as 34 práticas do ITIL. A aplicação deve focar no estritamente necessário para manter as operações, como um "Service Desk" unificado e uma "Gestão de Incidentes" básica. A comunicação é mais informal e muitos profissionais assumem papéis múltiplos.
*   **Médias Empresas:** Precisam de estabilidade devido ao crescimento. Começam a aplicar processos formais de "Gestão de Mudanças" para evitar que atualizações derrubem sistemas críticos, e "Gestão de Nível de Serviço (SLA)" para formalizar acordos com fornecedores.
*   **Grandes Organizações (Enterprise):** Aplicam a vasta maioria das 34 práticas de forma estruturada. Utilizam o framework para orquestrar dezenas de fornecedores de TI (SIAM - Service Integration and Management), garantir conformidade global e unificar fluxos complexos de valor (Cadeia de Valor de Serviço). 

---

### Exercício 3: Módulos ITIL
**Questão:** Detalhe os módulos fundamentais do ITIL 4.

**Resolução Passo-a-Passo:**
O ITIL 4 abandonou o ciclo de vida sequencial em favor de um modelo mais flexível. Seus módulos/componentes centrais formam o SVS:
1. **Sistema de Valor de Serviço (SVS):** É o coração do ITIL 4. Explica como todas as partes e atividades da organização trabalham em conjunto para criar valor.
2. **Princípios Orientadores:** 7 recomendações que guiam a organização em todas as circunstâncias (ex: Foco no Valor, Pense e trabalhe de forma holística).
3. **Governança:** Os meios pelos quais uma organização é dirigida e controlada.
4. **Cadeia de Valor do Serviço (Service Value Chain):** O modelo operacional de seis atividades (Planejar, Melhorar, Engajar, Desenhar/Transição, Obter/Construir, Entregar/Suportar) que transformam a demanda em valor.
5. **Práticas do ITIL:** Um conjunto de recursos organizacionais (34 no total) destinados a realizar um trabalho. (Substituíram os antigos "processos" da v3).

---

### Exercício 4: Guia de Referência COBIT
**Questão:** Defina COBIT, seus domínios e explique o seu modelo de maturidade.

**Resolução Passo-a-Passo:**
*   **Definição:** COBIT (Control Objectives for Information and Related Technologies) é um framework mundialmente reconhecido da ISACA focado na Governança e Gestão corporativa da Informação e Tecnologia (I&T). Ele alinha os objetivos de TI aos objetivos do negócio.
*   **Domínios de COBIT:** Os processos do COBIT estão organizados em 5 domínios principais:
    1.  **EDM (Evaluate, Direct and Monitor):** Foco em Governança. (Avaliar necessidades, direcionar a gestão e monitorar resultados).
    2.  **APO (Align, Plan and Organize):** Foco em Estratégia. (Alinhamento tático).
    3.  **BAI (Build, Acquire and Implement):** Foco em Construção. (Projetos e integração).
    4.  **DSS (Deliver, Service and Support):** Foco em Operações (Suporte diário).
    5.  **MEA (Monitor, Evaluate and Assess):** Foco em Conformidade e Auditoria.
*   **Modelo de Maturidade (Evolução):** No COBIT 4.1 e 5, utilizava-se uma escala clássica de Maturidade de Processos de 0 a 5. No **COBIT 2019**, o modelo foi substituído pela avaliação de desempenho baseada no **CMMI**. Em vez de medir a maturidade da organização inteira de forma generalista, o COBIT 2019 avalia os níveis de **capacidade** específicos para cada atividade (variando de 0 a 5), permitindo que metas sejam personalizadas por departamento através de Fatores de Desenho.

---

### Exercício 5: PRINCE2 versus PMBOK
**Questão:** Faça um paralelo entre a abordagem PRINCE2 e o PMBOK.

**Resolução Passo-a-Passo:**
A principal diferença entre os dois padrões é a sua **natureza fundamental**:

1.  **PMBOK (Project Management Body of Knowledge):**
    *   **Abordagem:** É *Descritivo*. Consiste em um amplo guia de melhores práticas e um catálogo de técnicas e ferramentas.
    *   **Foco:** Centrado no Gerente de Projetos e nas suas competências técnicas e interpessoais.
    *   **Vantagem:** Extrema versatilidade, podendo ser aplicado a qualquer indústria, exigindo que o gestor saiba qual ferramenta escolher do seu "cinto de utilidades".
2.  **PRINCE2 (Projects IN Controlled Environments):**
    *   **Abordagem:** É *Prescritivo*. Trata-se de uma verdadeira metodologia estruturada de processos, ditando o que deve ser feito, quando e por quem.
    *   **Foco:** Centrado na Governança e na justificativa de negócios (Business Case), delegando poderes a um Conselho Diretor (Project Board), do qual o gestor de projetos é subordinado.
    *   **Vantagem:** Excelente controle de risco e clareza de papéis.

**Conclusão Prática:** 
Muitas empresas utilizam uma abordagem híbrida: a governança e o controle de aprovações de fases são retirados do PRINCE2, enquanto as ferramentas de estimativa e execução diária (como elaboração da EAP/WBS e técnicas de qualidade) são trazidas do PMBOK.

---

## Casos de Estudo (Temas 3 a 5)

### Exercício 6: Visão de TI vs Visão de Negócio
**Questão:** Um banco pretende implementar um sistema de informação para aprovação automática de crédito. A direção de TI considera o projeto bem-sucedido porque: o software funciona sem erros, testes foram aprovados, a plataforma está estável. Entretanto, a direção comercial afirma que: os clientes continuam insatisfeitos, o tempo de aprovação não diminuiu, houve redução nas vendas.
1. Explique a diferença entre visão de TI e visão de negócio.
2. O projeto pode ser considerado bem-sucedido? Justifique.
3. Identifique os indicadores que cada área utilizou.
4. Que tipo de conflito organizacional está presente?
5. Como alinhar os objetivos tecnológicos aos objetivos de negócio?

**Resolução Passo-a-Passo:**
1. A **Visão de TI (tecnológica)** foca na dimensão de construção do artefato: ausência de *bugs*, estabilidade de infraestrutura, cumprimento das especificações de código. A **Visão de Negócio (gestão)** foca na dimensão da solução para a organização: impacto nas operações centrais, retorno financeiro e utilidade real para os clientes (e-business).
2. Não. O projeto tecnológico só atinge a sua finalidade se promover "uma solução inteligente a um problema" mudando a organização e influenciando o negócio (Teoria do Projeto, 1.4). Sem resultados nas vendas e satisfação, falhou.
3. **Indicadores TI:** Erros reportados (bugs), aprovação em testes de sistema, estabilidade e *uptime* da plataforma. **Indicadores Negócio:** Nível de satisfação do cliente (CRM), tempo médio (Time to Market/Time of Process) e volume de vendas.
4. Conflito entre a Dimensão de Gestão (Negócio) e a Dimensão de Construção (Tecnológica).
5. Através da Iniciação e Planeamento conjunto. Adotando Fatores Críticos de Êxito: garantindo compromisso de toda a organização executiva e assegurando que os requisitos de TI nasçam diretamente dos processos chave identificados pela Análise de Negócio.

---

### Exercício 7: Testes de Validação em Software
**Questão:** Uma empresa desenvolveu um sistema de gestão hospitalar. Antes da implementação definitiva, realizou testes. Durante os testes: alguns médicos afirmaram que o sistema era lento; certos pacientes não conseguiam finalizar o agendamento; os relatórios apresentavam informações incompletas; alguns utilizadores tiveram dificuldades em utilizar a interface.
1. Explique o objetivo dos testes de validação no contexto apresentado.
2. Diferencie teste Alfa e teste Beta.
3. Identifique quais problemas poderiam ser descobertos no teste Alfa e no Beta.
4. Justifique por que os testes são importantes antes da entrada em produção.
5. Caso os problemas não sejam corrigidos, quais poderão ser os impactos para: utilizadores, organização, pacientes.
6. Proponha duas melhorias que a equipa deve realizar antes da entrega final.

**Resolução Passo-a-Passo:**
1. O objetivo dos testes na fase final do desenvolvimento de software é responder à pergunta: "O problema foi resolvido?" (Validação dos requisitos funcionais face ao cliente).
2. O **Teste Alfa** é realizado em ambiente controlado, muitas vezes pela equipa interna. O **Teste Beta** é efetuado num ambiente real por um grupo restrito de clientes ou utilizadores finais.
3. **Alfa:** Sistema lento; relatórios com dados incompletos (erros sistémicos e de lógica interna). **Beta:** Pacientes que não conseguiam finalizar o agendamento; dificuldade com a interface e usabilidade por parte dos médicos.
4. Garantem a qualidade prometida e detetam as falhas técnicas preventivamente. Evitam a entrega de um produto inviável ("Triângulo do Diabo" na vertente da Qualidade), que originaria altíssimos custos de correção (manutenção) em produção.
5. **Utilizadores (médicos):** Frustração e recusa em usar a plataforma. **Organização (hospital):** Prejuízo financeiro, perda de prestígio, custos inflacionados com manutenção. **Pacientes:** Inabilidade de obter atendimento atempadamente, impactando riscos de saúde.
6. A equipa deve: 1) Efetuar intervenções de otimização da infraestrutura de servidores e do código para resolver a lentidão de processamento; 2) Redesenhar a usabilidade (UI/UX) da interface para garantir a correta interação dos utilizadores finais.

---

### Exercício 8: Análise Crítica de um Projeto Falhado
**Questão:** Uma organização pública implementou um sistema nacional de informação. O projeto consumiu um grande orçamento, sofreu um atraso de três anos e nunca atingiu a utilização planeada. Os utilizadores rejeitam o sistema, a manutenção é cara e não existe documentação adequada. Produza uma análise crítica.

**Resolução Passo-a-Passo:**
- **1. Classificação do projeto:** Pelo tipo de executor: Público. Pela natureza: Informática (Sistemas de Informação). Pelo grau de dificuldade: Êxito Incerto.
- **2. Falhas de gestão:** Houve falência total no controlo do "Triângulo do Diabo": o orçamento estourou (Custo), houve derrapagem massiva de cronogramas (Tempo) e o resultado final foi rejeitado (Qualidade/Alcance).
- **3. Falhas técnicas na fase de desenvolvimento:** Não foi aplicada rigorosamente a fase de "Análise das Exigências" (a equipa nunca entendeu o verdadeiro problema) e houve total incúria nas etapas de Teste, implementando software não testado junto dos utilizadores finais.
- **4. Problemas organizacionais e humanos:** Inexistência de gestão de mudança e falha na integração entre visão tecnológica e de negócio. Os utilizadores não foram envolvidos nem receberam documentação.
- **5. Impactos da ausência de documentação:** Impede a correta transferência de responsabilidades no "Encerramento". A ausência de manuais e código comentado inviabiliza que outras equipas façam a gestão ou a expansão, tornando qualquer manutenção extremamente morosa e dispendiosa.
- **6. Tipos de manutenção:** Neste momento, seriam precisas intervenções de Manutenção Corretiva (corrigir os defeitos atuais que originam a rejeição) e Adaptativa/Perfectiva para ajustar as funcionalidades às necessidades verdadeiras.
- **7. Estratégia de recuperação:** 1º Reiniciar a fase de *Inteligência* (identificando a razão real da rejeição); 2º Adotar uma abordagem ágil/incremental (*quick wins*) promovendo melhorias visíveis; 3º Executar testes intensivos junto dos utilizadores; 4º Produzir rigorosa documentação *As-Built* antes de libertar a versão definitiva, acompanhada de forte formação.
