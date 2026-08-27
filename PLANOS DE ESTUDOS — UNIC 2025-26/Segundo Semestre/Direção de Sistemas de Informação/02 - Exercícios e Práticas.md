# Guia de Exercícios e Práticas: Direção de Sistemas de Informação

Este documento apresenta a resolução detalhada dos tópicos propostos para o Seminário 1 (Temas 1 e 2) da disciplina.

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
