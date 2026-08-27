# Transcrições Lote 3

## IMG-20260625-WA0055.jpg

**Universidade Internacional do CUANZA (UNIC)**

Logo no primeiro ano, surgiram atrasos significativos devido à dificuldade em coletar requisitos de forma adequada. Os diferentes ministérios não chegavam a um consenso sobre quais dados seriam partilhados ou que nível de acesso cada entidade teria, o que levou a conflitos interdepartamentais e sucessivas revisões de escopo.

As empresas do consórcio utilizavam tecnologias e metodologias distintas, o que resultou em problemas de interoperabilidade. Equipas de desenvolvimento trabalhavam de maneira isolada, sem comunicação clara ou documentação unificada, dificultando a integração dos módulos do sistema.

A parte de biometria, considerada crítica, revelou-se tecnicamente muito mais complexa do que o previsto. A infraestrutura de servidores adquirida inicialmente era insuficiente para suportar a captura e processamento de milhões de registros biométricos, provocando falhas recorrentes de desempenho, perda de dados e necessidade de substituição de equipamentos, aumentando os custos.

O governo exigiu várias mudanças legislativas durante o andamento do projeto, como novos requisitos de segurança, inclusão de mais tipos de dados e alteração dos padrões de criptografia. Essas mudanças criaram requisitos instáveis e ampliaram substancialmente o escopo inicial, sem revisão proporcional no orçamento ou cronograma.

A falta de formação dos funcionários públicos levou a erros operacionais durante os testes piloto. Em algumas províncias, registou-se até 30% de duplicação de perfis, devido à má operação do equipamento, falhas na leitura biométrica e conexões instáveis à Internet.

Relatórios internos mostraram que o consórcio não conseguia cumprir os marcos acordados. O Ministério da Administração Pública, no entanto, continuava a aprovar pagamentos, apesar das evidências de baixo progresso, indicando falhas graves de governança e supervisão.

Ao final de quatro anos, apenas 40% do sistema estava funcional e apresentava falhas graves de segurança. Uma auditoria externa comprovou que o nível de criptografia implementado era inadequado e que existiam vulnerabilidades que permitiam acesso não autorizado aos dados de cidadãos.

O orçamento inicial de 750 milhões foi ultrapassado, chegando a 1,9 mil milhões de dólares, e o projeto foi oficialmente suspenso. A implantação nacional nunca foi concluída, e apenas alguns módulos isolados continuam em uso. O governo abriu processos judiciais contra as empresas do consórcio, enquanto o país voltou a utilizar sistemas híbridos (digital + papel), aumentando a desconfiança da população.

1. Liste e descreva cinco problemas críticos presentes no projeto SNRC. Para cada problema, explique por que ele representa um risco significativo para o sucesso do projeto.
2. Identifique três fatores de qualidade que foram comprometidos no sistema SNRC. Relacione cada fator a um incidente ou comportamento específico observado no caso.
3. Relacione três dos problemas identificados com os princípios fundamentais da Engenharia de Software. Explique como cada problema viola um princípio específico.
4. Proponha três estratégias de melhoria que poderiam ter aumentado a probabilidade de sucesso do projeto SNRC.

*(Assinaturas)*
Duliet Hong León
Docente

Róger Sarín Rivas Suárez
Decano

---

## IMG-20260625-WA0056.jpg

**Universidade Internacional do CUANZA (UNIC)**
ENGENHARIA
Série: A
FOLHA DE PROVA

*(Nota vermelha: 5V)*

4. R.: Um exemplo de sistema distribuídos, é a Netflix.
A Netflix trata-se de um sistema distribuído por se tratar de uma plataforma de streaming, que permite que milhares de usuários acedam à filmes e séries ao mesmo tempo, através de servidores espalhados por toda parte do mundo que fazem o armazenamento, processamento e distribuição do conteúdo em vídeos.

Arquiteturas:
* Cliente-servidor - o cliente solicita aceder à plataforma e ter acesso aos filmes e séries, e o servidor disponibiliza o conteúdo solicitado pelo cliente, para isso ela tem diversos servidores, e o servidor mais perto do cliente disponibiliza o conteúdo para uma entrega eficiente do streaming;
* Servidores CDN;
* Micro-serviços: a plataforma se divide em pequenos serviços, que seja cada funcionalidade corresponde a um serviço específico mas que todos funcionam em conjunto, como: acesso por login; ver o catálogo; sistemas de pagamentos; emissão dos vídeos;

Métodos de comunicação:
Protocolos HTPP e HTPPs;
Api's Rest.

---

## IMG-20260625-WA0057.jpg

**Universidade Internacional do CUANZA (UNIC)**

*(Tabela com marcas de check vermelhas nas células A, D, E, G, H, e uma marcação 5/5)*
| Célula A | | Célula B |
| Célula C | Célula D | Célula E |
| | Célula F | |
| Célula G | Célula H | |

4. Insira uma linha horizontal para separar o primeiro exercício do seguinte. **(2 valores)** *(Nota vermelha: 1/1)*
5. Observe o formulário abaixo:
   a) Construa o código HTML de um formulário utilizando uma tabela, contendo os campos ilustrados na imagem. **(8 valores)**
   
   **Obs:** A opção de concordância é um campo obrigatório.

*(Imagem de um formulário com a nota vermelha 4,5/5)*
**Formulário do Estudante**
Nome: [caixa de texto]
Sobrenome: [caixa de texto]
Gênero: ( ) Masculino ( ) Feminino
Faculdade: [Engenharia (dropdown)]
Email: [yolanda@gmail.com]
[ ] Eu consinto o tratamento de dados pessoais -
[Enviar] [Limpar]

*(Assinaturas)*
Núria de Sousa
Docente

Róger Sarín Rivas Suárez
Decano

---

## IMG-20260625-WA0059.jpg

**Universidade Internacional do CUANZA (UNIC)**
FACULDADE DE ENGENHARIA

3. Em sistemas distribuídos, o monitor de transação é um elemento responsável pela coordenação e execução de transações, permitindo o acesso a vários servidores e serviços. A figura a seguir demonstra a sua utilização em sistemas distribuídos.

*(Diagrama: Aplicação cliente envia Requisições para o Monitor TP, que envia Requisições para vários Servidores (Servidor, Servidor, Servidor). Os Servidores enviam Respostas ao Monitor TP, que envia Resposta à Aplicação cliente. Há também uma seta de Suporte entre os servidores.)*

A necessidade de comunicação entre aplicações originou modelos diferentes de comunicação, entre as quais destacam-se: Remote Procedure Calls (RPC), Remote Method Invocations (RMI) e Message-Oriented Middleware (MOM). Em relação ao RPC, escolha a alternativa correta. **(4 valores)** *(Nota vermelha: 3V)*

a) RPC é uma interface de programação para a criação de programas distribuídos, permitindo que objetos de uma máquina possam interagir com objetos de outras máquinas.
b) RPC é um método de comunicação entre componentes de software orientado a mensagens.
c) RPC é um conceito que envolve a passagem de dados entre aplicativos usando um canal de comunicação que transporta unidades autônomas de informação (mensagens).
d) RPC é um protocolo para a criação de programas distribuídos no qual os usuários utilizam procedimentos remotos como se fossem chamadas locais sem se preocuparem com o servidor de destino. *(Marcado com X)*

*(Nota vermelha circulada: 3V)*

4. Identifique um exemplo de sistema distribuído, em seguida faça a sua análise, identificando sua arquitetura e métodos de comunicação. **(5 valores)**

*(Assinaturas)*
Núria de Sousa
Docente

Róger Sarín Rivas Suárez
Decano

---

## IMG-20260625-WA0060.jpg

**Universidade Internacional do CUANZA (UNIC)**

3. Uma universidade decidiu modernizar a sua gestão acadêmica e melhorar a experiência dos estudantes. Para isso, foi proposto um conjunto de iniciativas que inclui: o desenvolvimento de um sistema digital para matrículas e notas, a criação de uma plataforma de ensino online e a implementação de um aplicativo móvel para comunicação institucional.

Cada uma dessas iniciativas possui objetivos específicos, equipes próprias, prazos distintos e orçamentos definidos, embora todas estejam alinhadas a uma estratégia institucional comum.

a) Considerando a situação apresentada, identifique as características comuns dos projetos, que se aplicam a cada um deles. **(3 valores)** *(Nota vermelha: 3/3)*

4. Uma empresa de tecnologia foi contratada para desenvolver um sistema de gestão hospitalar para um grande hospital. O projeto inclui funcionalidades como registo de pacientes, agendamento de consultas, gestão de prontuários eletrônicos e integração com sistemas laboratoriais. O projeto possui prazo de 10 meses e orçamento limitado. Durante a execução, o cliente solicita novas funcionalidades, a equipe enfrenta atrasos em algumas entregas e surgem riscos relacionados à segurança dos dados dos pacientes.

a) Com base na situação apresentada e nos conceitos do PMBOK Guide, identifique e explique como as diferentes áreas de conhecimento da gestão de projetos estão representadas no caso. **(3 valores)** *(Nota vermelha: 3/3)*

b) Com base nos conhecimentos adquiridos sobre o PMBOK Guide, explique a finalidade deste guia na gestão de projetos. **(2 valores)** *(Nota vermelha: 2/2)*

5. Quais são os principais desafios que as organizações enfrentam na implementação da guia de referência ITIL (Information Technology Infrastructure Library) para a gestão da informação? **(2 valores)** *(Nota vermelha: 0/2)*

*(Assinaturas)*
Mágyuri Ávila Martínez
Docente

Róger Rivas Suárez
Decano
