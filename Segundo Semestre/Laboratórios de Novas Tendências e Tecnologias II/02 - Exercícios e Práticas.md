---
disciplina: "Laboratórios de Novas Tendências e Tecnologias II"
tipo: "02 - Exercícios e Práticas"
status: "Não Iniciado"
---
# Exercícios e Práticas: Laboratórios de Novas Tendências e Tecnologias II

Este documento contém cenários práticos, estudos de caso e exercícios laboratoriais robustos desenhados para consolidar os conhecimentos teóricos da disciplina. As tarefas simulam desafios reais enfrentados por arquitetos de software, engenheiros de dados e especialistas em DevOps no mercado corporativo.

---

## 1. Provedores Cloud (Amazon, Google, DigitalOcean)

### Estudo de Caso 1: Arquitetando uma Solução Global de E-commerce
**Cenário:** Você foi contratado como Arquiteto Cloud para a "GlobalBuy", uma startup de comércio eletrônico que está expandindo para a América Latina e Europa. Eles preveem picos maciços de tráfego durante a Black Friday. A latência é crítica para a conversão de vendas. O banco de dados atual on-premise já não suporta o volume.
**Objetivo:** Elaborar uma proposta de arquitetura comparando a implementação na AWS e no GCP.

**Exercício:**
1.  **Desenhe a arquitetura (Diagrama Mental ou Mermaid):** Especifique como você distribuiria o tráfego usando balanceadores de carga em múltiplas regiões.
2.  **Mapeamento de Serviços:** Liste quais serviços específicos da AWS e do GCP você usaria para:
    *   Computação web (Front-end e Back-end).
    *   Armazenamento de imagens estáticas dos produtos (CDN).
    *   Banco de dados relacional distribuído.
    *   Banco de dados NoSQL para cache de carrinhos de compras.
3.  **Defesa:** Justifique por que a GlobalBuy poderia escolher o GCP em vez da AWS (focando na rede de fibra própria do Google), e vice-versa (focando na maturidade da AWS).

---

## 2. Infraestruturas de Virtualização

### Laboratório Prático 1: Criando uma Mini-Infraestrutura Local
**Cenário:** A equipe de QA (Quality Assurance) precisa testar o software da empresa em diferentes sistemas operacionais isolados antes do deploy em nuvem, mas o orçamento de cloud acabou neste mês.
**Objetivo:** Configurar um ambiente de laboratório local (sandbox) utilizando o Oracle VirtualBox (Hypervisor Tipo 2).

**Exercício:**
1.  Baixe e instale o VirtualBox em sua máquina de laboratório.
2.  Faça o download de duas imagens ISO: uma do Ubuntu Server (Linux) e outra do Windows Server (Evaluation).
3.  Crie as duas VMs:
    *   Aloque 2 vCPUs e 4GB de RAM para o Windows Server.
    *   Aloque 1 vCPU e 1GB de RAM para o Ubuntu Server.
4.  **Desafio de Rede:** Configure a rede do VirtualBox (Host-Only Adapter e NAT) para que:
    *   As duas VMs tenham acesso à internet (para baixar pacotes).
    *   A VM Ubuntu consiga pingar a VM Windows.
    *   A máquina Host consiga acessar um servidor Web local (Nginx) rodando na VM Ubuntu, sem expor a porta para a rede externa da universidade.

---

## 3. Modelos na Nuvem (IaaS, PaaS, SaaS)

### Exercício de Análise: Qual Modelo Escolher?
**Cenário:** O CIO de uma empresa de contabilidade tradicional, a "ContaFácil", contratou você para modernizar a TI da empresa. Leia os cenários abaixo e defina o melhor modelo (IaaS, PaaS ou SaaS) para cada um, justificando detalhadamente.

1.  **Cenário A:** A ContaFácil precisa de um novo sistema de e-mail e edição colaborativa de documentos para seus 500 funcionários. A empresa não possui especialistas em segurança de correio eletrônico.
    *   *Sua Escolha (IaaS, PaaS ou SaaS)? Justifique e dê um exemplo.*
2.  **Cenário B:** Os desenvolvedores da ContaFácil criaram uma aplicação web inovadora para cálculo automático de impostos em Node.js. Eles querem colocar isso no ar até a semana que vem para testar com clientes beta. Eles não querem perder tempo instalando firewalls, atualizando o Linux ou configurando Nginx.
    *   *Sua Escolha (IaaS, PaaS ou SaaS)? Justifique e dê um exemplo.*
3.  **Cenário C:** A empresa comprou um software corporativo legado do governo (ERP) que é extremamente sensível. O software só roda em uma versão específica do Windows Server 2012 R2 com configurações profundas de registro que precisam ser alteradas manualmente pelo administrador de sistemas.
    *   *Sua Escolha (IaaS, PaaS ou SaaS)? Justifique e dê um exemplo.*

---

## 4. Sistemas Big Data

### Estudo de Caso 2: Processamento de Dados de IoT para Cidades Inteligentes
**Cenário:** A prefeitura da capital implementou 10.000 sensores de trânsito em semáforos, gerando cerca de 5 TB de dados em formato JSON por dia. Os dados medem fluxo de veículos, clima e qualidade do ar em tempo real. O gestor de tráfego quer:
1. Um painel (dashboard) com análises em tempo real para tomar decisões imediatas.
2. Um modelo de Machine Learning que preveja o trânsito com meses de antecedência usando dados históricos.

**Exercício:**
1.  **Arquitetura Lambda de Big Data:** Proponha uma arquitetura de Big Data dividida em duas camadas (Speed Layer / Batch Layer).
2.  **Definição do Data Lake:** Explique como o conceito de "Schema-on-Read" de um Data Lake ajudará a prefeitura a armazenar esses JSONs massivos sem estruturá-los primeiro.
3.  **Ferramentas:** Onde o Apache Spark (Spark Streaming vs Spark SQL) se encaixaria nesse fluxo de trabalho em comparação com o Hadoop HDFS tradicional?

---

## 5. Microserviços: DDD e Clean Architecture

### Laboratório Avançado de Modelagem: O Monolito "Pizza Delivery"
**Cenário:** O sistema "UltraPizza" começou como um monolito PHP simples há 5 anos. Hoje ele tem 2 milhões de linhas de código. O código da interface do usuário está misturado com regras de negócios de pagamento, que estão acopladas diretamente a consultas SQL do banco MySQL. Uma mudança no sistema de cupons de desconto quebrou a integração com o rastreamento GPS dos entregadores.
**Objetivo:** Iniciar a refatoração do sistema utilizando DDD e Clean Architecture.

**Exercício Prático (Design em Papel/Quadro Branco):**
1.  **DDD Estratégico (Bounded Contexts):**
    *   Identifique pelo menos três Bounded Contexts (Contextos Delimitados) cruciais neste sistema (Exemplo de dica: `Gestão de Pedidos`, `Logística e Rastreamento`, `Faturamento`).
    *   Defina as fronteiras e explique por que a Entidade "Pedido" possui características diferentes no contexto de *Gestão de Pedidos* versus o contexto de *Faturamento*.
2.  **DDD Táctico (dentro do Contexto de Gestão de Pedidos):**
    *   Identifique o **Aggregate Root** principal.
    *   Crie um **Value Object** (Objeto de Valor) que faria sentido no contexto de uma Pizza (ex: Tamanho ou Sabor, se for imutável) e um Endereço de Entrega.
    *   Escreva o nome de um **Domain Event** importante que o contexto de Gestão de Pedidos deve emitir para notificar os outros microsserviços de que o cozinheiro terminou a pizza.
3.  **Clean Architecture:**
    *   Desenhe um diagrama em círculos concêntricos e aloque os seguintes arquivos da aplicação refatorada nas camadas corretas (Domínio, Casos de Uso, Controladores, Infraestrutura/DB):
        *   `CalcularTaxaDeEntregaUseCase.ts`
        *   `PedidoEntity.ts`
        *   `PostgresPedidoRepository.ts`
        *   `PedidoRestController.ts`

---

## 6. Contêineres e Kubernetes (Docker, K8s)

### Desafio Prático Final: Do Código à Orquestração
**Cenário:** Você tem uma aplicação backend de catálogo de produtos escrita em Python/Flask.
**Objetivo:** Empacotar a aplicação num contêiner imutável e escrever o manifesto Kubernetes para implantação.

**Exercício 1: O Dockerfile**
Escreva o conteúdo de um `Dockerfile` para conteinerizar a aplicação. Utilize as melhores práticas:
1.  Use uma imagem base leve (ex: `python:3.9-alpine`).
2.  Defina o diretório de trabalho interno como `/app`.
3.  Copie o arquivo `requirements.txt` e instale as dependências.
4.  Copie o restante do código fonte.
5.  Exponha a porta `5000` (porta padrão do Flask).
6.  Defina o comando de execução principal.

*Nota: Escreva o arquivo textual na sua resposta do exercício.*

**Exercício 2: Orquestração no Kubernetes**
Você construiu a imagem e a publicou no Docker Hub com o nome `meu-usuario/api-catalogo:v1`. O site terá muito acesso. Você precisa instruir o Kubernetes a rodar isso com alta disponibilidade.

1.  **Deployment:** Escreva (ou descreva linha por linha) um manifesto YAML de Kubernetes (`kind: Deployment`) que:
    *   Se chame `catalogo-deployment`.
    *   Tenha exatamente `3 réplicas` (para tolerância a falhas).
    *   Utilize a imagem `meu-usuario/api-catalogo:v1`.
2.  **Service:** Descreva qual o papel do Objeto Service (`kind: Service`) neste cenário. Se os três pods criados pelo Deployment mudarem de endereço IP constantemente devido a falhas, como o microserviço de Front-End conseguirá conversar com o backend sem saber seus novos IPs?

---
*Bom trabalho! A resolução aprofundada de cada um desses casos irá prepará-lo não apenas para os exames acadêmicos, mas para discussões arquiteturais de altíssimo nível em entrevistas técnicas no mercado de TI global.*
