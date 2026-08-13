---
tipo: "Fonte Original"
origem: "Es Engenharia De Software-Guia De Estudo"
---

# Es Engenharia De Software-Guia De Estudo

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

Guia de Estudo 
Disciplina: Engenharia de Software I 
Curso: Engenharia Informática       Ano: 4 
 
Tema: Problemas, qualidade, princípios e modelos da Engenharia de Software 
 
1. Objetivos de aprendizagem 
Ao final da aula, o estudante será capaz de: 
1. Identificar os principais problemas enfrentados no desenvolvimento de 
software. 
2. Analisar as causas e consequências desses problemas. 
3. Explicar os fatores que influenciam a qualidade do software. 
4. Compreender os princípios fundamentais da Engenharia de Software. 
5. Descrever e comparar os principais modelos de processo de software. 
6. Relacionar boas práticas de engenharia com a prevenção de falhas e 
melhoria da qualidade. 
 
1. CARACTERÍSTICAS, IMPORTÂNCIA E PROBLEMAS DO SOFTWARE 
Software: 
O software é o equipamento lógico ou suporte lógico de um computador digital; 
compreende o conjunto de componentes necessários que tornam possível a 
realização de tarefas específicas. 
O software é a parte visual que nos permite interagir com o hardware. O uso de 
dispositivos como computadores, telefones celulares e até mesmo câmeras não 
poderia ser usado sem a instalação do software necessário para fazê-lo 
funcionar. 
CARACTERÍSTICAS DEL SOFTWARE 
De acordo com Roger S. Pressman (2011), o software é um produto lógico, 
desenvolvido e concebido por processos de engenharia, e não fabricado de 
forma industrial. 

Essa natureza única faz com que o software apresente características 
específicas que o diferenciam de outros produtos de engenharia. 
1. O software é desenvolvido, não manufaturado 
Enquanto o hardware é fabricado por processos repetitivos, o software é 
construído intelectualmente — é projetado e desenvolvido. 
Cada cópia de um programa é idêntica à original; portanto, não existem “defeitos 
de produção”, apenas erros de projeto. 
Implicação: os custos de software concentram-se no desenvolvimento, e não na 
reprodução. Assim, a engenharia de software deve gerir complexidade e 
qualidade, não linhas de produção. 
2. O software não se desgasta, mas deteriora-se 
O software não sofre desgaste físico com o tempo; o seu funcionamento não se 
altera simplesmente por ser usado. 
Contudo, à medida que o ambiente muda (hardware, sistemas operativos, 
requisitos, normas), o software deteriora-se funcionalmente, pois deixa de se 
adaptar às novas condições. 
Pressman denomina isso de “entropia do software”: se não for actualizado e 
mantido, o sistema perde qualidade e confiabilidade. 
3. O software é personalizado 
O software não é um produto universal: é quase sempre feito sob medida, 
adaptado às necessidades específicas de um cliente, organização ou contexto. 
Mesmo os pacotes comerciais precisam de parametrização e integração com 
outros sistemas. 
Essa característica implica que cada projeto é, de certo modo, único, e requer 
um processo de engenharia que trate a personalização como parte essencial do 
planeamento. 
4. O software é intangível 
Pressman destaca que o software não é físico nem visível; é um conjunto de 
instruções e dados que apenas pode ser percebido através de sua execução. 

Essa intangibilidade dificulta a visualização do progresso e a medição da 
qualidade, tornando essencial o uso de métricas, documentação e revisões 
formais. 
Por essa razão, a gestão de software precisa de ferramentas e práticas que 
permitam “ver” e avaliar o que está a ser produzido. 
5. O software é fácil de modificar (mas difícil de gerir) 
Modificar software é teoricamente simples — basta alterar código —, mas cada 
modificação pode introduzir novos erros e aumentar a complexidade. 
Pressman observa que, sem processos controlados de manutenção, o software 
tende a perder estrutura e degradar a qualidade interna. 
Daí a importância da engenharia de manutenção, controlo de versões e 
refatoração contínua. 
6. O software é sujeito à complexidade crescente 
Mesmo sistemas pequenos podem conter milhares de linhas de código e 
interações complexas. 
Pressman enfatiza que o software é uma das entidades mais complexas já 
criadas pelo ser humano, e essa complexidade é intrínseca e cumulativa — 
cresce à medida que o sistema evolui. 
A complexidade exige modelagem, abstração, modularização e verificação 
sistemática para ser controlada. 
7. O software é dependente de pessoas 
A qualidade do software depende fortemente da competência, disciplina e 
comunicação das equipas envolvidas. 
Como destaca Pressman, o software é um produto intelectual e cooperativo — 
desenvolvido por pessoas que interagem entre si e com o cliente. 
Assim, aspectos humanos como motivação, liderança e comunicação são tão 
críticos quanto a tecnologia utilizada. 
 

Resumo 
Característica 
Descrição  
Desenvolvido, não 
fabricado 
É concebido por engenheiros, não produzido em 
série. 
Não se desgasta 
Sofre deterioração por mudanças, não por uso. 
Personalizado 
Feito sob medida ou configurado para cada 
cliente. 
Intangível 
Produto lógico, não físico, difícil de visualizar. 
Fácil de modificar 
Mudanças são simples, mas arriscadas. 
Altamente complexo 
Contém lógica e interdependências intricadas. 
Dependente de pessoas 
A qualidade depende das equipas e processos. 
 
2. PROBLEMAS NO DESENVOLVIMENTO DE SOFTWARE 
O desenvolvimento de software é uma actividade complexa que envolve 
pessoas, processos e tecnologia.  
A falha no desenvolvimento de software raramente é resultado de um único erro 
técnico; normalmente, é consequência de uma combinação de factores 
humanos, organizacionais e processuais. 
Segundo Roger Pressman, muitos projectos de software falham parcial ou 
totalmente devido a problemas recorrentes, entre os quais se destacam: 
Principais problemas do software: 
1. Falta de comunicação e entendimento com o cliente 
Muitas vezes, as equipas de desenvolvimento não compreendem 
completamente as necessidades reais dos utilizadores finais. Requisitos mal 
definidos ou ambíguos conduzem a produtos que não resolvem os 
problemas do cliente. 
2. Requisitos incompletos ou em constante mudança 
O processo de levantamento de requisitos é frequentemente deficiente. A 
ausência de um controlo rigoroso das mudanças leva à instabilidade do 
projecto e à perda de tempo e recursos. 
 

3. Planeamento inadequado e estimativas imprecisas 
A falta de planeamento detalhado e de estimativas realistas de custo, tempo 
e esforço resulta em atrasos e orçamentos ultrapassados. 
4. Gestão deficiente do projecto 
Muitos projectos sofrem com falta de acompanhamento, ausência de 
métricas e má coordenação entre as equipas, o que dificulta a detecção 
precoce de erros e desvios. 
5. Falta de padrões e processos definidos 
A inexistência de metodologias ou práticas padronizadas leva à 
inconsistência na qualidade do código e nos resultados do desenvolvimento. 
6. Qualidade insuficiente e testes inadequados 
Quando o software não é devidamente testado em todas as suas fases, 
aumentam os defeitos e as falhas em produção, comprometendo a 
confiabilidade do produto. 
7. Complexidade crescente dos sistemas 
À medida que o software cresce em tamanho e integração, torna-se mais 
difícil manter a coerência, a modularidade e a manutenibilidade do código. 
8. Problemas humanos e de equipa 
Falta de motivação, formação técnica insuficiente e má comunicação entre 
os membros da equipa pode comprometer seriamente o sucesso do projecto. 
Causas dos problemas 
Causas técnicas: 
• 
Falta de testes sistemáticos. 
• 
Escolha inadequada de arquitetura ou tecnologias. 
• 
Defeitos no código e ausência de padronização. 
Causas organizacionais: 
• 
Planeamento deficiente. 
• 
Falta de comunicação entre programadores e clientes. 
• 
Escopo mal definido. 
• 
Gestão ineficaz do tempo e dos recursos. 
 
 

3. O QUE É ENGENHARIA DE SOFTWARE? 
A engenharia de software é uma disciplina ou área da ciência da computação 
que oferece métodos, técnicas, princípios e procedimentos científicos para 
desenvolver e manter softwares de qualidade, eficientes e confiáveis que 
resolvem problemas de todos os tipos, aplicáveis a um número infinito de áreas, 
com uma orientação metódica, ordenada e quantificável para o aumento, a 
execução e a manutenção de softwares. 
4. QUALIDADE DO SOFTWARE 
De acordo com Roger S. Pressman, a qualidade do software é o grau em que 
um sistema, componente ou processo satisfaz os requisitos funcionais e de 
desempenho explicitamente declarados, as normas de desenvolvimento 
documentadas e as necessidades implícitas dos utilizadores. 
“A qualidade não é um acidente; é sempre o resultado de uma intenção inteligente, de 
um esforço sincero e de uma execução hábil.” 
Roger S. Pressman 
 
Qualidade significa cumprir o que foi prometido (requisitos) e superar as 
expectativas do utilizador (satisfação). 
Factores que determinam a qualidade do software 
Segundo Pressman, a qualidade do software é afectada por múltiplos factores, 
que se podem agrupar em três grandes categorias: 
1. Produto – características técnicas e funcionais do software. 
2. Processo – forma como o software é planeado, desenvolvido e testado. 
3. Pessoas – competências, comunicação e motivação da equipa de 
desenvolvimento. 
Fator de Qualidade Descrição 
Correção 
O software realiza as funções para as quais foi 
projectado. 
Confiabilidade 
A capacidade do software de manter o desempenho sob 
condições específicas por um período definido. É 
estável e seguro? 

Eficiência 
Uso adequado de recursos (memória, CPU, tempo). 
Responde rápido sob carga? 
Integridade 
Protecção contra acesso não autorizado ou perda de 
dados. 
Usabilidade 
Facilidade de utilização e de aprendizagem do sistema. 
É fácil de aprender e usar? 
Manutenibilidade 
Facilidade com que o software pode ser modificado. É 
fácil corrigir e evoluir? 
Flexibilidade 
Capacidade de se adaptar a novas condições. 
Testabilidade 
Facilidade com que o software pode ser testado. 
Portabilidade 
Capacidade de ser transferido de um ambiente para 
outro. Funciona em diferentes ambientes? 
Reusabilidade 
Grau em que componentes podem ser reutilizados. 
Interoperabilidade 
Capacidade de interagir com outros sistemas. 
 
Benefícios de alcançar qualidade de software 
• 
Redução de falhas e retrabalho. 
• 
Diminuição de custos de manutenção. 
• 
Aumento da satisfação do cliente. 
• 
Melhoria da imagem da organização. 
• 
Facilitação da evolução e integração futura do produto. 
“Software de qualidade é aquele que cumpre os requisitos explícitos e implícitos do 
utilizador, mantém confiabilidade e é produzido através de um processo controlado e 
mensurável.” 
Roger S. Pressman 
Princípios da Engenharia de Software  
A Engenharia de Software fundamenta-se num conjunto de princípios 
orientadores que garantem que o processo de desenvolvimento produza 
software de qualidade, confiável, eficiente e manutenível. Estes princípios 
aplicam-se a todas as fases do ciclo de vida do software — desde a concepção 
até à manutenção. 

1. Compreender o problema 
Antes de qualquer linha de código ser escrita, a equipa deve entender 
completamente o problema que o software pretende resolver. 
Sem uma definição clara dos requisitos, o projecto está destinado a falhar. 
• 
Requer análise cuidadosa das necessidades dos utilizadores. 
• 
Envolve comunicação constante com o cliente e partes interessadas. 
• 
Deve resultar num documento de requisitos completo e verificável. 
2. Planeamento adequado 
Pressman enfatiza que o planeamento é uma etapa que define o sucesso ou o 
fracasso do projecto. 
Um plano realista define o escopo, o cronograma, os recursos e os riscos. 
• 
Deve-se estabelecer um cronograma de tarefas com marcos (milestones). 
• 
A gestão de riscos deve ser contínua. 
• 
O planeamento deve ser flexível para incorporar mudanças inevitáveis. 
3. Modularidade  
A modularização permite dividir um sistema complexo em partes menores e 
compreensíveis, reduzindo a complexidade e facilitando testes e manutenção. 
• 
Cada módulo deve ter uma única responsabilidade. 
• 
Os módulos devem ser altamente coesos e fracamente acoplados. 
• 
A modularidade melhora a reusabilidade e a manutenibilidade. 
4. Qualidade contínua 
Segundo Pressman, a qualidade não é um resultado final, mas um processo 
constante de verificação e validação. 
• 
Deve-se aplicar testes unitários, de integração e de sistema em cada fase. 
• 
A avaliação por revisões técnicas formais (peer reviews) detecta erros 
precocemente. 
• 
A automação de testes melhora a eficiência e reduz falhas humanas. 
5. Rigor e método 
A Engenharia de Software é, antes de tudo, uma disciplina de engenharia: requer 
método, ferramentas e disciplina. 
• 
Deve haver processos documentados e métricas de desempenho. 

• 
A intuição e a improvisação são úteis, mas devem ser guiadas por 
métodos formais. 
• 
O uso de ferramentas CASE e modelos de processo reforça a 
padronização. 
6. Foco nas pessoas 
Pressman reforça que o sucesso de um projecto de software depende, acima de 
tudo, das pessoas. 
• 
Equipas motivadas e bem treinadas produzem software de melhor 
qualidade. 
• 
A comunicação eficaz e o trabalho colaborativo são essenciais. 
• 
O gestor de projecto deve saber liderar e inspirar, não apenas 
supervisionar. 
7. Melhoria contínua  
A Engenharia de Software é uma disciplina evolutiva. Cada projecto fornece 
lições que devem ser documentadas e aplicadas em projectos futuros. 
• 
As organizações devem implementar processos de melhoria contínua 
(SPI). 
• 
Deve-se medir, avaliar e aprimorar o processo de desenvolvimento com 
base em resultados reais. 
Resumo dos Princípios 
Nº Princípio 
Conceito-chave 
1 
Compreender o problema 
Clareza nos requisitos 
2 
Planeamento adequado 
Objectivos, prazos e riscos 
3 
Modularidade 
Divisão em partes simples 
4 
Qualidade contínua 
Verificação e validação 
5 
Rigor e método 
Processo sistemático 
6 
Foco nas pessoas 
Comunicação e motivação 
7 
Melhoria contínua 
Aprendizado e evolução 
 


