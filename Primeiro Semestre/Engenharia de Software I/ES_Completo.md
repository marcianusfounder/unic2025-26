---
tipo: "Fonte Original"
origem: "Es Completo"
---

# Es Completo

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

﻿Guia de Estudo 
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
 

 
 ​
​
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Ingeniería de Software I 
PLAN 
DE 
ESTUDIOS: 
Grado en Ingeniería Informática 
FACULTAD: 
Escuela Politécnica Superior 
CARÁCTER 
DE 
LA 
ASIGNATURA: 
Obligatoria 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Primero 
IDIOMA 
EN 
QUE 
SE 
IMPARTE: 
Español 
PROFESORADO: 
Dr. Manuel Masías Vergara 
DIRECCIÓN 
DE 
CORREO 
ELECTRÓNICO: 
manuel.masias@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
REQUISITOS PREVIOS: 
No aplica 
CONTENIDOS: 
●​ Tema 1: Introducción a la Ingeniería de Software.  
-​
Definición  
-​
Evolución, características, importancia y problemas del software. 
-​
Objetivos 
-​
Paradigmas de la IS 
●​ Tema 2: Disciplina de Requisitos  
-​
Modelo del dominio 
1 
P03SP03_GUIA 

 
-​
Requisitos 
o​ Actores & casos de uso 
o​ Priorización de casos de uso 
o​ Detalle de casos de uso 
o​ Estructurado de casos de uso 
o​ Prototipado de casos de uso 
●​ Tema 3: Modelado 
○​ UML como herramienta de modelado. 
COMPETENCIAS 
COMPETENCIAS GENERALES: 
Que los estudiantes sean capaces de: 
-​
CG1​
Capacidad para concebir, redactar, organizar, planificar, desarrollar 
y firmar proyectos en el ámbito de la ingeniería en informática que tengan 
por objeto la concepción, el desarrollo o la explotación de sistemas, 
servicios y aplicaciones informáticas. 
-​
CG2​
Capacidad para dirigir las actividades objeto de los proyectos del 
ámbito de la informática. 
-​
CG3​
Capacidad para diseñar, desarrollar, evaluar y asegurar la 
accesibilidad, ergonomía, usabilidad y seguridad de los sistemas, servicios y 
aplicaciones informáticas, así como de la información que gestionan. 
-​
CG5​
Capacidad para concebir, desarrollar y mantener sistemas, 
servicios y aplicaciones informáticas empleando los métodos de la 
ingeniería del software como instrumento para el aseguramiento de su 
calidad, 
-​
CG9​
Capacidad para resolver problemas con iniciativa, toma de 
decisiones, autonomía y creatividad. Capacidad para saber comunicar y 
transmitir los conocimientos, habilidades y destrezas de la profesión de 
Ingeniero Técnico en Informática. 
COMPETENCIAS ESPECÍFICAS: 
Que los estudiantes sean capaces de: 
-​
CE07​
Capacidad 
para 
diseñar, 
desarrollar, 
seleccionar y evaluar 
aplicaciones y sistemas informáticos, asegurando su fiabilidad, seguridad y 
calidad, conforme a principios éticos y a la legislación y normativa vigente. 
-​
CE08​
Capacidad para planificar, concebir, desplegar y dirigir proyectos, 
servicios y sistemas informáticos en todos los ámbitos, liderando su puesta 
en marcha y su mejora continua y valorando su impacto económico y social. 
2 
P03SP03_GUIA 

 
-​
CE10​
Capacidad para elaborar el pliego de condiciones técnicas de una 
instalación informática que cumpla los estándares y normativas vigentes. 
-​
CE22​
Capacidad de conocer y aplicar los principios, metodologías y 
ciclos de vida de la ingeniería de software. 
-​
CE26​
Capacidad para valorar las necesidades del cliente y especificar los 
requisitos software para satisfacer estas necesidades, reconciliando 
objetivos en conflicto mediante la búsqueda de compromisos aceptables 
dentro de las limitaciones derivadas del coste, del tiempo, de la existencia 
de sistemas ya desarrollados y de las propias organizaciones. 
-​
CE28​
Capacidad de identificar y analizar problemas y diseñar, desarrollar, 
implementar, verificar y documentar soluciones software sobre la base de 
un conocimiento adecuado de las teorías, modelos y técnicas actuales. 
-​
CE30​
Capacidad para diseñar soluciones apropiadas en uno o más 
dominios de aplicación utilizando métodos de la ingeniería del software que 
integren aspectos éticos, sociales, legales y económicos. 
RESULTADOS DE APRENDIZAJE: 
En esta asignatura se espera que los alumnos alcancen los siguientes resultados 
de aprendizaje: 
-​
Conocer y aplicar las técnicas de ingeniería de requisitos 
-​
Conocer y aplicar los distintos tipos de modelos de ciclos de vida del 
software 
-​
Conocer los procesos de software a profundidad y cómo evaluarlos para 
mejorarlos 
-​
Conocer las técnicas más comunes de análisis y diseño de software 
-​
Conocer y saber aplicar aspectos de calidad en el desarrollo de software 
como la usabilidad, accesibilidad, seguridad, fiabilidad, etc. 
-​
Dirigir un proyecto basándose en los principios de análisis, diseño y gestión. 
 
3 
P03SP03_GUIA 

 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
-​
MD1​
Método expositivo 
-​
MD2​
Estudio y análisis de casos 
-​
MD3​
Resolución de ejercicios 
-​
MD4​
Aprendizaje basado en problemas 
-​
MD5​
Aprendizaje orientado a proyectos 
-​
MD6​
Aprendizaje cooperativo / Trabajo en grupos 
-​
MD7​
Trabajo autónomo  
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
Actividades formativas 
Horas 
Actividades 
dirigidas 
Clases expositivas 
11,3 
Clases prácticas 
15 
Seminarios y talleres 
11,3 
Actividades 
supervisadas 
Supervisión de actividades 
7,5 
Tutorías (individual / en grupo) 
7,5 
Actividades 
autónomas 
Preparación de clases 
7,5 
Estudio personal y lecturas 
37,5 
Elaboración de trabajos 
37,5 
Trabajo en campus virtual 
7,5 
 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
Actividades de evaluación 
Ponderación 
4 
P03SP03_GUIA 

 
Evaluación 
continua 
Examen Parcial 
25 % 
Entregas de portfolios y ejercicios 
25 % 
Evaluación final 
Evaluación práctica final 
50 % 
 
La calificación del instrumento de la evaluación final (tanto de la convocatoria 
ordinaria como de la extraordinaria, según corresponda) no podrá ser inferior, en 
ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar la asignatura y 
consecuentemente poder realizar el cálculo de porcentajes en la calificación final. 
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes determinado en el 
calendario académico fijado por la universidad. Esta consistirá en la realización de 
uno o dos Exámenes Teórico-Prácticos con un valor de hasta el 50% de la nota 
final de la asignatura. El resto de la nota se complementará con la calificación 
obtenida en la evaluación continua de la convocatoria ordinaria.  
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
​
 
 
5 
P03SP03_GUIA 
BIBLIOGRAFÍA BÁSICA:  
Las siguientes referencias son de consulta obligatoria: 
-​
Pressman, R. (2010) Ingeniería de Software, un enfoque práctico.  
McGrawHill 
-​
Sommerville 
I. 
(2011) 
Ingeniería 
de 
Software 
7ª 
EDICIÓN. 
Ed.  
ADDISON-WESLEY  
-​
Subra JP. (2018).  SCRUM: un metodo agil para sus proyectos 1ª Edición. Ed. 
Eni 
 
BIBLIOGRAFÍA COMPLEMENTARIA:  
Las siguientes referencias no se consideran de consulta obligatoria, pero su 
lectura es muy recomendable para aquellos estudiantes que quieran profundizar 
en los temas que se abordan en la asignatura.  
-​
Schach, Sthepen R. (2006) Ingeniería de Software clásica y orientada a 
objetos.McGrawHill 
WEBS DE REFERENCIA: 
No aplica. 
OTRAS FUENTES DE CONSULTA: 
-​
https://github.com/mmasias/idsw1  

 
 
 
 
 ​
​
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Sistemas Distribuidos y Programación en Paralelo 
PLAN 
DE 
ESTUDIOS: 
Grado en Ingeniería Informática 
FACULTAD: 
Escuela Politécnica Superior 
CARÁCTER 
DE 
LA 
ASIGNATURA: 
Obligatorio 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Primero 
IDIOMA 
EN 
QUE 
SE 
IMPARTE: 
Español 
PROFESORADO: 
Daniel Iglesias Santamaría 
DIRECCIÓN 
DE 
CORREO 
ELECTRÓNICO: 
daniel.iglesias@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
REQUISITOS PREVIOS: 
Se recomienda que para cursar la asignatura de Sistemas distribuidos y 
Programación en paralelo el alumno haya realizado previamente las asignaturas 
de Sistemas Operativos, Redes de ordenadores y Programación II. 
CONTENIDOS: 
Tema 1 : Visual Studio Community  y  .NET 
1.2​
Conceptos básicos de .NET 
1.3​
WCF (Windows Communication Foundation) 
1.4​
.Net remoting 
Tema 2 : Fundamentos de los Sistemas Distribuidos 
1 
P03SP03_GUIA 

 
 
 
 
2.1   Definición 
2.2​
Características 
2.3​
Paradigmas 
2.4​
Tipos de Servidores 
2.5​
Protocolo 
2.6​
Middleware 
Tema 3: Arquitecturas Distribuidas 
3.1​
Cliente Servidor 
3.2​
Arquitectura de capas 
3.3​
Thin and fat clients 
3.4​
Arquitectura de objetos distribuidos 
3.5​
Peer to Peer (P2P) 
3.6​
SOA (Service Oriented Architecture) 
Tema 4: Programación Asíncrona y  en paralelo 
4.1​
Asynchronous programming (Async, Await) 
4.2​
Parallel Programming 
Tema 5: Servicios Web y Rest (SOA)​
 
5.1​
Tecnologías que soportan SOA​
 
5.2​
Servicio Web y Rest 
5.3​
Implementar mejoras. 
Tema 6: Programación distribuida en .Net 
6.1​
Conceptos básicos 
6.2​
.Net Remoting 
Tema 7: Cloud Computing 
7.1​
Tipos de servicios 
7.2​
Principales proveedores 
7.3         Formación - Taller AWS 
 
COMPETENCIAS 
COMPETENCIAS GENERALES: 
Que los estudiantes sean capaces de: 
2 
P03SP03_GUIA 

 
 
 
 
-​
CG4​
Capacidad para definir, evaluar y seleccionar plataformas hardware 
y software para el desarrollo y la ejecución de sistemas, servicios y 
aplicaciones informáticas. 
-​
CG6​
Capacidad para concebir y desarrollar sistemas o arquitecturas 
informáticas centralizadas o distribuidas integrando hardware, software y 
redes. 
COMPETENCIAS ESPECÍFICAS: 
Que los estudiantes sean capaces de: 
-​
CE17​ Capacidad de conocer y aplicar las características, funcionalidades 
y estructura de los Sistemas Distribuidos, las Redes de Computadores e 
Internet y diseñar e implementar aplicaciones basadas en ellas. 
-​
CE20​ Capacidad de conocer y aplicar los principios fundamentales y 
técnicas básicas de la programación paralela, concurrente, distribuida y de 
tiempo real. 
RESULTADOS DE APRENDIZAJE: 
En esta asignatura se espera que los alumnos alcancen los siguientes resultados 
de aprendizaje: 
-​
Entender las técnicas de comunicación de procesos. 
-​
Entender un entorno de sistema distribuido y ser capaz de programar 
aplicaciones en este entorno. 
-​
Conocer y comprender la utilidad y el funcionamiento de la arquitectura 
TCP/IP. 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
-​
MD1​
Método expositivo 
-​
MD2​
Estudio y análisis de casos 
-​
MD4​ Aprendizaje basado en problemas 
-​
MD6​ Aprendizaje cooperativo / Trabajo en grupos 
-​
MD7​
Trabajo autónomo 
 
3 
P03SP03_GUIA 

 
 
 
 
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
Actividades formativas 
Horas 
Actividades 
dirigidas 
Clases expositivas 
15 
Clases prácticas 
18,8 
Seminarios y talleres 
11,3 
Actividades 
supervisadas 
Supervisión de actividades 
3,8 
Tutorías (individual / en grupo) 
3,8 
Actividades 
autónomas 
Preparación de clases 
15 
Estudio personal y lecturas 
37,5 
Elaboración de trabajos 
30 
Trabajo en campus virtual 
7,5 
 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
Actividades de evaluación 
Ponderaci
ón 
Evaluación 
continua 
1 Examen Parcial 
25 % 
Entregas de Portfolios y Ejercicios 
20 % 
Interés y participación del alumno en la 
asignatura 
5 % 
Evaluación 
final 
Examen Teórico-Práctico 
50 % 
 
La calificación del instrumento de la evaluación final (tanto de la convocatoria 
ordinaria como de la extraordinaria, según corresponda) no podrá ser inferior, en 
ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar la asignatura y 
consecuentemente poder realizar el cálculo de porcentajes en la calificación final. 
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese el 
calendario académico fijado por la universidad). Esta consistirá en la realización 
de un Examen Teórico-Práctico con un valor del 50 % de la nota final de la 
asignatura. El resto de la nota se complementará con la calificación obtenida en la 
evaluación continua de la convocatoria ordinaria.  
4 
P03SP03_GUIA 

 
 
 
 
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
​
 
 
5 
P03SP03_GUIA 
BIBLIOGRAFÍA BÁSICA:  
Las siguientes referencias son de consulta obligatoria: 
●​ Roy, O. (2013) The Art of Unit Testing. Ed. Manning Publications 
●​ Tanenbaum, A. y Van Steen, M. (2008) Sistemas Distribuidos: Principios y 
Paradigmas. Ed. Pearson Educación 
BIBLIOGRAFÍA COMPLEMENTARIA:  
No aplica. 
WEBS DE REFERENCIA: 
●​ https://docs.microsoft.com/es es/dotnet/ 
●​ https://docs.microsoft.com/es es/dotnet/csharp/ 
●​ https://visualstudio.microsoft.com/es/vs/ 
●​ https://azure.microsoft.com/es es/overview/what is devops/ 
OTRAS FUENTES DE CONSULTA: 
No aplica. 

 
 
 
 
 ​
​
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Ética y Legislación Informática 
PLAN 
DE 
ESTUDIOS: 
Grado en Ingeniería Informática 
FACULTAD: 
Escuela Politécnica Superior 
CARÁCTER 
DE 
LA 
ASIGNATURA: 
Obligatoria 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Primero 
IDIOMA 
EN 
QUE 
SE 
IMPARTE: 
Español 
PROFESORADO: 
Manuel Baelo Álvarez 
Francisco Javier Bel Blesa 
DIRECCIÓN 
DE 
CORREO 
ELECTRÓNICO: 
Manuel.baelo@uneatlantico.es 
Javier.bel@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
REQUISITOS PREVIOS: 
No Aplica 
CONTENIDOS: 
1. Ética profesional. 
1.1. Introducción. 
1.2. Ética. 
1.3. Formación. 
1.4. Carácter profesional. 
1.5. Vocación. 
1 
P03SP03_GUIA 

 
 
 
 
1.6. Costumbre. 
1.7. Responsabilidad. 
1.8. Libertad. 
1.9. Ética profesional. 
2. La ética en los sistemas de información.​ 
2.1. Introducción. 
2.2. La perspectiva ética en la automatización. 
2.3. Valores éticos en los sistemas de información. 
2.4. Ética informática. 
2.5. Deontología informática. 
2.6. La corrupción y los sistemas de información. 
2.7. El sujeto y objeto ético de los sistemas de información. 
2.8. Evolución de la ética. 
3. La ética en la administración de los recursos informáticos. 
3.1. Introducción. 
3.2. Recursos financieros. 
3.3. Recursos materiales. 
3.4. Recursos de hardware. 
3.5. Recursos de software. 
3.6. Recursos humanos. 
3.7. Recursos de gestión. 
4. Delitos informáticos. 
4.1. Introducción. 
4.2. Conceptos. 
4.3. Alcances y limitaciones. 
4.4. Tipificación del delito informático. 
4.5. Impacto de los delitos informáticos. 
4.6. Seguridad contra el delito informático. 
4.7. Peritajes informáticos. 
5. El derecho informático. 
5.1. Introducción. 
5.2. Principales áreas informáticas reguladas por el derecho. 
5.3. La informática jurídica. 
2 
P03SP03_GUIA 

 
 
 
 
5.4. El derecho de la informática. 
5.5. Reglamento general de protección de datos  
5.6. Ley de servicios de la sociedad de la información y de comercio 
electrónico. 
COMPETENCIAS 
COMPETENCIAS GENERALES: 
Que los estudiantes adquieran: 
●​ CG1 - Capacidad para concebir, redactar, organizar, planificar, desarrollar y 
firmar proyectos en el ámbito de la ingeniería en informática que tengan por 
objeto la concepción, el desarrollo o la explotación de sistemas, servicios y 
aplicaciones informáticas. 
●​ CG7 - Capacidad para conocer, comprender y aplicar la legislación necesaria 
durante el desarrollo de la profesión de Ingeniero Técnico en Informática y 
manejar especificaciones, reglamentos y normas de obligado cumplimiento. 
●​ CG11 - Capacidad para analizar y valorar el impacto social y medioambiental 
de las soluciones técnicas, comprendiendo la responsabilidad ética y 
profesional de la actividad del Ingeniero Técnico en Informática. 
●​ CG12 - Capacidad de conocer y aplicar los elementos básicos de economía y 
de gestión de recursos humanos, organización y planificación de proyectos, 
así como la legislación, regulación y normalización en el ámbito de los 
proyectos informáticos. 
COMPETENCIAS ESPECÍFICAS: 
Que los estudiantes sean capaces de: 
●​ CE06 - Conocer y aplicar los conceptos de empresa, marco institucional y 
jurídico de la empresa, así como de la organización y gestión de empresas. 
●​ CE07 - Capacidad para diseñar, desarrollar, seleccionar y evaluar aplicaciones 
y sistemas informáticos, asegurando su fiabilidad, seguridad y calidad, 
conforme a principios éticos y a la legislación y normativa vigente. 
●​ CE10 - Capacidad para elaborar el pliego de condiciones técnicas de una 
instalación informática que cumpla los estándares y normativas vigentes. 
●​ CE24 - Conocer y saber aplicar la normativa y la regulación de la informática 
en los ámbitos nacionales, europeos e internacionales. 
●​ CE30 - Capacidad para diseñar soluciones apropiadas en uno o más dominios 
de aplicación utilizando métodos de la ingeniería del software que integren 
aspectos éticos, sociales, legales y económicos. 
RESULTADOS DE APRENDIZAJE: 
En esta asignatura se espera que los alumnos alcancen los siguientes resultados 
de aprendizaje: 
3 
P03SP03_GUIA 

 
 
 
 
●​ Conocer la legislación vigente en materia de tecnología y saber aplicar 
principios éticos 
●​ Llevar a cabo proyectos informáticos según principios éticos y legislación 
vigente 
●​ Conducir de forma eficiente el liderazgo y la negociación que supone la 
elaboración y desarrollo de un proyecto informático. 
●​ Adquirir habilidades de comunicación efectiva en entornos de desarrollo de 
software 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
●​ MD1​ - Método expositivo 
●​ MD2​ - Estudio y análisis de casos 
●​ MD7​ - Trabajo autónomo 
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
Actividades formativas 
Horas 
Actividades 
dirigidas 
Clases expositivas 
22.5 
Clases prácticas 
15 
Seminarios y talleres 
15 
Actividades 
supervisadas 
Supervisión de actividades 
3.8 
Tutorías (individual / en grupo) 
3.8 
Actividades 
autónomas 
Preparación de clases 
15 
Estudio personal y lecturas 
45 
Elaboración de trabajos 
7.5 
Trabajo en campus virtual 
15 
 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
4 
P03SP03_GUIA 

 
 
 
 
Actividades de evaluación 
Ponderaci
ón 
Evaluación 
continua 
Un Examen Parcial 
25 % 
Entregas de Portfolios y Ejercicios 
20 % 
Interés y participación del alumno en la 
asignatura 
5 % 
Evaluación 
final 
Un examen Teórico-Práctico 
50 % 
 
La calificación del instrumento de la evaluación final (tanto de la convocatoria 
ordinaria como de la extraordinaria, según corresponda) no podrá ser inferior, en 
ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar la asignatura y 
consecuentemente poder realizar el cálculo de porcentajes en la calificación final. 
 
5 
P03SP03_GUIA 

 
 
 
 
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese el 
calendario académico fijado por la universidad). Esta consistirá en la realización 
de un examen teórico-práctico con un valor del 50 % de la nota final de la 
asignatura. El resto de la nota se complementará con la calificación obtenida en la 
evaluación continua de la convocatoria ordinaria.  
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
6 
P03SP03_GUIA 
BIBLIOGRAFÍA BÁSICA:  
Las siguientes referencias son de consulta obligatoria: 
●​
Aguilar Castillo Gildardo, "Apuntes para la materia Ética y Legislación 
Informática", 
Facultad 
de 
Estadística 
e 
Informática, 
Universidad 
Veracruzana. México, 2003. 
●​
Aguilar, G. (2012). Administración de recursos informáticos, EAE Editorial 
Academia Española. 
BIBLIOGRAFÍA COMPLEMENTARIA:  
Las siguientes referencias no se consideran de consulta obligatoria, pero su 
lectura es muy recomendable para aquellos estudiantes que quieran 
profundizar en los temas que se abordan en la asignatura.  
●​ Rodríguez, M.A. (2008) Manual de derecho informático. 10ª edición. 
Aranzadi. Pamplona.  
●​ Manandez Mato, J.C. (2014) Derecho e Informática Ética y Legislación. J.m 
Bosch Editor. Barcelona 
●​ Guerra Soto, M. (2021) Análisis Forense Informático. Ra-ma S.A. 
Editorial y Publicaciones 
WEBS DE REFERENCIA: 
●​ Boletín Oficial del Estado: HTTP://WWW.BOE.ES 
●​ DELITOS 
INFORMÁTICOS. 
ESTRADA 
GARAVILLA, 
MIGUEL. 
Universidad Abierta: http://www.universidadabierta.edu.mx. 
OTRAS FUENTES DE CONSULTA: 
●​
ÁLVARO AGUDO Guevara: ética en la sociedad de información. 
●​
APOLONIA DEL BRUTTO Bibiana: globalización y el nuevo orden 
internacional: las sociedades de la información. 

 
 
 
 
​
 
 
7 
P03SP03_GUIA 
●​
CEDIPROE: centro de diseño, producción y evaluación de recursos 
multimedia para el aprendizaje. 
●​
LARRAÑAGA Dámaso Antonio: lineamientos generales para la gestión de 
la información.  
●​
VILLANUEVA MANSILLA Eduardo: el ciberespacio y sus desafíos éticos 
●​
C. Crespo Emilio: la ética en los sistemas de información. 
●​
REYNA CAAMAÑO Gerardo Silvestre: informática: ética vs. Competitividad 
●​
Cabañas Balcázar María: códigos de ética en informática 
●​
FOLEY John P., PASTORE Pierfranco: ética en internet 
●​
GUIBERT UCÍN José M.: ¿qué es la ética de la informática? 
●​
SUÁREZ RUBIO Santiago: Promoción de la tecnología como herramienta 
de desarrollo. 

 
 
 
 
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Dirección de Sistemas de Información 
PLAN 
DE 
ESTUDIOS: 
Grado de Ingeniería Informática 
FACULTAD: 
Escuela Politécnica Superior 
CARÁCTER 
DE 
LA 
ASIGNATURA: 
Obligatoria 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Segundo 
IDIOMA 
EN 
QUE 
SE 
IMPARTE: 
Español 
PROFESORADO: 
David Diego Dobarganes 
DIRECCIÓN 
DE 
CORREO 
ELECTRÓNICO: 
david.diego@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
REQUISITOS PREVIOS: 
No aplica. 
CONTENIDOS: 
Tema 1: Modelos de negocio e innovación 
1.1 Economía Digital. 
1.2 Modelos de Negocio CANVAS y estudios de caso. 
1 
 

 
 
 
 
1.3 Análisis DAFO. 
1.4 Herramientas de diseño e introducción al Design Thinking. 
1.5 Innovación y metodologías ágiles. 
1.6 La estrategia de Océano Azul y su aplicación práctica. 
 
Tema 2: Funciones de la DSI 
2.1 Definición y roles de los Sistemas de Información en las organizaciones. 
2.2 Evolución histórica y últimas tendencias (IA, blockchain, Big Data). 
2.3 Recursos Materiales y datos: Elementos básicos (Hardware y Software). 
2.4 Personas y gestión del cambio organizacional en DSI. 
2.5 Actividades y operaciones clave de la DSI. 
 
Tema 3: Estrategia y planificación de los sistemas de información 
3.1 Transformación digital y ciberseguridad. 
3.2 La organización: usuarios - clientes y su implicación en la estrategia TI. 
3.3 Planificación de las TI y frameworks de arquitectura empresarial (TOGAF, 
Zachman). 
3.4 Evaluación, gestión y control de proyectos TI. 
3.5 El capital humano de TI y su desarrollo. 
3.6 El rol del CIO en la era digital. 
 
Tema 4: Gestión de proyectos de integración de sistemas 
4.1 Objetivos e introducción a la gestión de proyectos TI. 
4.2 Lenguajes de Programación y su evolución. 
4.3 Metodologías de Desarrollo (Ágil, CMMi, CI/CD). 
4.4 Tipología de Aplicaciones y sistemas integrados (ERP, CRM, SCM). 
4.5 Caso Práctico: Implantación y integración de sistemas empresariales. 
 
Tema 5: Gestión de operaciones 
5.1 Infraestructura Tecnológica y su evolución. 
5.2 Cloud Computing y modelos de servicio. 
5.3 Green IT y sostenibilidad en TI. 
5.4 Virtualización y Automatización de Procesos Robóticos (RPA). 
5.5 IoT y su impacto en la gestión de operaciones. 
5.6 Arquitectura Empresarial en la práctica. 
 
2 
 

 
 
 
 
Tema 6: Gestión de proveedores y seguridad 
6.1 Gestión de servicios TI y modelos de sourcing (Rightsourcing, outsourcing). 
6.2 Offshoring y estrategias de implementación. 
6.3 Definición y gestión de SLA en la externalización. 
6.4 Caso práctico: Acuerdos de Nivel de Servicio (SLA). 
6.5 Seguridad de la Información: Tendencias y amenazas actuales. 
6.6 Privacidad y gestión de riesgos en seguridad TI. 
 
Tema 7: Comercio electrónico y digital 
7.1 Fundamentos y evolución del Comercio electrónico. 
7.2 Comercio móvil (m-commerce) y el papel de las redes sociales. 
7.3 Análisis de datos y personalización en el comercio electrónico. 
7.4 Éxitos y fracasos en el comercio electrónico: Lecciones aprendidas. 
7.5 Componentes clave y estrategias de éxito en el negocio electrónico. 
COMPETENCIAS 
COMPETENCIAS GENERALES: 
Que los estudiantes sean capaces de: 
CG1​
Capacidad para concebir, redactar, organizar, planificar, desarrollar y 
firmar proyectos en el ámbito de la ingeniería en informática que tengan por 
objeto la concepción, el desarrollo o la explotación de sistemas, servicios y 
aplicaciones informáticas. 
CG2​
Capacidad para dirigir las actividades objeto de los proyectos del ámbito 
de la informática. 
CG3​
Capacidad para diseñar, desarrollar, evaluar y asegurar la accesibilidad, 
ergonomía, usabilidad y seguridad de los sistemas, servicios y aplicaciones 
informáticas, así como de la información que gestionan. 
CG5​
Capacidad para concebir, desarrollar y mantener sistemas, servicios y 
aplicaciones informáticas empleando los métodos de la ingeniería del software 
como instrumento para el aseguramiento de su calidad, 
CG9​
Capacidad para resolver problemas con iniciativa, toma de decisiones, 
autonomía y creatividad. Capacidad para saber comunicar y transmitir los 
conocimientos, habilidades y destrezas de la profesión de Ingeniero Técnico en 
Informática. 
COMPETENCIAS ESPECIFICAS: 
 
3 
 

 
 
 
 
CE08​ Capacidad para planificar, concebir, desplegar y dirigir proyectos, 
servicios y sistemas informáticos en todos los ámbitos, liderando su puesta en 
marcha y su mejora continua y valorando su impacto económico y social. 
CE09​ Capacidad de comprender y valorar la importancia de la negociación, los 
hábitos de trabajo efectivos, el liderazgo y las habilidades de comunicación en 
todos los entornos de desarrollo de software. 
CE10​ Capacidad para elaborar el pliego de condiciones técnicas de una 
instalación informática que cumpla los estándares y normativas vigentes. 
CE26​ Capacidad para valorar las necesidades del cliente y especificar los 
requisitos software para satisfacer estas necesidades, reconciliando objetivos 
en conflicto mediante la búsqueda de compromisos aceptables dentro de las 
limitaciones derivadas del coste, del tiempo, de la existencia de sistemas ya 
desarrollados y de las propias organizaciones. 
CE27​ Capacidad de dar solución a problemas de integración en función de las 
estrategias, estándares y tecnologías disponibles. 
 
RESULTADOS DE APRENDIZAJE: 
En esta asignatura se esperan los siguientes resultados de aprendizaje por 
parte de los alumnos: 
●​ Entender el rol que cumplen los sistemas de información en las 
empresas 
●​ Conocer los procesos de software a profundidad y cómo evaluarlos para 
mejorarlos 
 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
-​
Método expositivo 
-​
Estudio y análisis de casos 
-​
Resolución de ejercicios 
-​
Aprendizaje basado en proyectos 
4 
 

 
 
 
 
-​
Aprendizaje orientado a proyectos 
-​
Aprendizaje cooperativo / Trabajo en grupo 
-​
Trabajo autónomo 
  
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
 
Actividades formativas 
Horas 
 
Actividades 
dirigidas 
Clases expositivas 
15 
Clases prácticas 
15 
Seminarios y talleres 
7,5 
Actividades 
supervisadas 
Supervisión de actividades 
7,5 
Tutorías (individual / en grupo) 
7,5 
 
Actividades 
autónomas 
Preparación de clases 
15 
Estudio personal y lecturas 
30 
Elaboración de trabajos 
30 
Trabajo en campus virtual 
15 
 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
 
5 
 

 
 
 
 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
 
Actividades de evaluación 
Ponderación 
Evaluación 
continua 
Resultados 
de 
las pruebas escritas 
teóricas y prácticas individuales. 
25 % 
Resolución de problemas propuestos, 
resolución de casos prácticos, entrega y 
exposición de trabajos en grupo, etc.   
 
25 % 
Evaluación 
final 
1 prueba final teórico práctico  
50 % 
 
La asistencia y la superación de las prácticas es obligatoria y necesaria para 
poder aprobar la asignatura. En caso de no haberse superado se perderá el 
derecho a la convocatoria ordinaria y extraordinaria. 
  
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese 
el calendario académico fijado por la universidad). Esta consistirá en la 
realización de una prueba teórico-práctica con un valor del 50% de la nota final 
de la asignatura, donde la nota mínima para hacer media con el resto de nota 
será de 4.0. El resto de la nota se complementará con la calificación obtenida en 
la evaluación continua de la convocatoria ordinaria.  
  
6 
 

 
 
 
 
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
BIBLIOGRAFÍA BÁSICA: 
Las siguientes referencias son de consulta obligatoria: 
El libro en PDF de la asignatura. 
Sistemas de Información 
Gerencial. 
Kenneth C. Laudon New York University.  
Jane P. Laudon Azimuth Information Systems. Ed
Generación de Modelos de 
Negocio. 
Alexander Osterwalder; Yves Pigneur.  
Deusto S.A. Ediciones. 
Tu modelo de negocio. 
Alexander Osterwalder; Yves Pigneur.  
Deusto S.A. Ediciones. 
Seis 
sombreros 
para 
pensar. 
Edward de Bono. Editorial Paidos Iberica 
La estrategia del Océano 
Azul. 
W. Chan Kim. Editorial Verticales de bolsillo. 
Desarrollar la gestión de la 
creatividad 
y 
de 
la 
innovación. 
Harvard business essentials. Editorial: Deusto. 
 
BIBLIOGRAFÍA COMPLEMENTARIA:  
Las siguientes referencias no se consideran de consulta obligatoria, pero su 
lectura es muy recomendable para aquellos estudiantes que quieran profundizar 
en los temas que se abordan en la asignatura.  
7 
 

 
 
 
 
Dirección 
y 
Gestión 
de 
los 
Sistemas de Información en la 
Empresa: Una visión integradora. 
Varios Autores. ESIC Editorial. 
 
WEBS DE REFERENCIA: 
 
The 2012 CIO Agenda: Re-imagining IT/ 
IDC Predictions: European Services in 2013  
Enel : The Global ICT transformation 
http://www.cio.com/  
 
OTRAS FUENTES DE CONSULTA: 
 
-​
Google. 
-​
Informes Gartner. 
 
​
 
 
8 
 

 
 
 
 
 
 ​
​
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Seguridad Informática y criptografía 
PLAN 
DE 
ESTUDIOS: 
Grado en Ingeniería Informática 
FACULTAD: 
Escuela Politécnica Superior 
CARÁCTER 
DE 
LA 
ASIGNATURA: 
Básica 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Segundo 
IDIOMA 
EN 
QUE 
SE 
IMPARTE: 
Español 
PROFESORADO: 
Fco. Javier Bel Blesa 
DIRECCIÓN 
DE 
CORREO 
ELECTRÓNICO: 
Javier.bel@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
 
REQUISITOS PREVIOS: 
No aplica 
CONTENIDOS: 
1. FUNDAMENTOS DE LA SEGURIDAD INFORMATICA. 
1.1. INTRODUCCIÓN. 
1.2. LA NECESIDAD DE APLICAR MECANISMOS DE SEGURIDAD. 
1.3. ELEMENTOS A PROTEGER. 
1.4. DEFINICIONES. 
1.5. ESTRUCTURAS BÁSICAS DE SEGURIDAD INFORMÁTICA. 
1.6. SEGURIDAD PASIVA 
1 
 

 
 
 
 
1.7. SEGURIDAD ACTIVA. 
1.8. HACKERS, TIPOS DE HACKERS. 
1.9. RECONOCIMIENTO DE AMENAZAS. CONTRAMEDIDAS. 
1.10. BUENAS PRÁCTICAS. 
2. CRIPTOGRAFIA.CRIPTOGRAFIA DE CLAVE SECRETA.​ 
2.1. INTRODUCCIÓN. 
2.2. CRIPTOGRAFÍA. 
2.3. CRIPTOGRAFÍA SIMÉTRICA O DE CLAVE SECRETA. 
2.4. ALGORITMOS PARA LA CRIPTOGRAFÍA SIMETRICA DE BLOQUE. 
3. CRIPTOGRAFIA.CRIPTOSOSTEMAS SIMETRICOS DE CIFRADO EN FLUJO. 
3.1. INTRODUCCIÓN. 
3.2. ALGORITMOS PARA LA CRIPTOGRAFÍA SIMETRICA DE FLUJO. 
4. CRIPTOGRAFIA.CRIPTOSOSTEMAS DE CLAVE PÚBLICA. 
4.1. INTRODUCCIÓN. 
4.2. APLICACIONES PRINCIPALES DE LA CRIPTOGRAFÍA DE CLAVE 
PÚBLICA. 
4.3. ALGORITMOS DE CLAVE PÚBLICA 
5. FUNCIONES DE AUTENTICACION E INTEGRIDAD. 
5.1. INTRODUCCIÓN. 
5.2. MÉTODOS Y FACTORES DE AUTENTICACION 
5.3. INTEGRIDAD. FUNCIONES HASH O RESUMEN. 
6. FIRMA DIGITAL Y CERTIFICADOS DIGITALES. 
6.1. INTRODUCCIÓN. 
6.2. FIRMA DIGITALIZADA Y FIRMA ELECTRÓNICA 
6.3. FIRMA DIGITAL. 
6.4. CERTIFICADOS DIGITALES. 
6.5. TIPOS DE CERTIFICADOS.​
 
6.6. EJEMPLO DE PKI. El DNI Electrónico (DNIe) 
7. APLICACIONES SEGURAS. 
7.1. INTRODUCCIÓN. 
7.2. IDENTIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD. 
7.3. HITOS EN LA SEGURIDAD DEL SOFTWARE 
7.4. ERRORES FRECUENTES DE CODIFICACIÓN 
7.5. APLICACIONES WEB 
7.6. SOLUCIONES POSIBLES AL CONTROL DE APLICACIONES 
8. ACRONIMOS 
9. BIBLIOGRAFIA 
COMPETENCIAS 
COMPETENCIAS GENERALES: 
Que los estudiantes sean capaces de: 
●​ Capacidad para concebir y desarrollar sistemas o arquitecturas 
criptográficas. 
2 
P03SP03_GUIA 

 
 
 
 
●​ Capacidad de desarrollar y establecer un Sistema de Gestión de Seguridad de 
la Información (SGSI). 
●​ Capacidad para detectar intrusiones en la seguridad, y aplicar alguno de los 
algoritmos criptográficos para solventar estos problemas. 
●​ Que los estudiantes hayan demostrado poseer y comprender conocimientos 
tanto en el entorno de la necesidad y aplicación de la Seguridad Informática 
como en los medios para garantizar esta seguridad. 
●​ Que los estudiantes sepan aplicar sus conocimientos a su trabajo o vocación 
de una forma profesional y posean las competencias que suelen demostrarse 
por medio de la elaboración y defensa de argumentos y la resolución de 
problemas dentro de su área de estudio. 
●​ Que los estudiantes tengan la capacidad de reunir e interpretar datos 
relevantes (normalmente dentro de su área de estudio) para emitir juicios que 
incluyan una reflexión sobre temas relevantes de índole social, científica o 
ética. 
●​ Que los estudiantes puedan transmitir información, ideas, problemas y 
soluciones a un público tanto especializado como no especializado, sobre 
todo en la importancia de la aplicación de sistemas de seguridad en el ámbito 
tecnológico.  
●​ Que los estudiantes hayan desarrollado aquellas habilidades de aprendizaje 
necesarias para emprender estudios posteriores con un alto grado de 
autonomía 
COMPETENCIAS ESPECÍFICAS: 
Que los estudiantes sean capaces de: 
●​ Capacidad de explicar y aplicar los procedimientos de aplicación de medidas 
de seguridad informática básicas en los sistemas de información, con 
capacidad de identificar futuros problemas y diseñar soluciones a los mismos. 
●​ Capacidad de entender y utilizar de forma eficiente los algoritmos y sistemas 
de encriptación más adecuados a la resolución de un problema en concreto. 
●​ Capacidad para analizar, diseñar, construir y mantener sistemas de seguridad 
informática de forma robusta, segura y eficiente, eligiendo las estrategias de 
definición de seguridad y algoritmos de criptografía más adecuados. 
COMPETENCIAS PROPIAS DE LA ASIGNATURA: 
No aplica 
RESULTADOS DE APRENDIZAJE: 
En esta asignatura se espera que los alumnos alcancen los siguientes resultados 
de aprendizaje: 
●​ Conocer los principales algoritmos de encriptación y sus vulnerabilidades 
para resolución de problemas comunes. 
●​ Reconocer y paliar o evitar posibles ataques o intrusiones a los sistemas 
informáticos.  
●​ Comprender y saber utilizar eficientemente los distintos modelos de 
implantación de la Seguridad Informática (los Sistemas de Gestión de 
Seguridad de la Información). 
3 
P03SP03_GUIA 

 
 
 
 
 
 
4 
P03SP03_GUIA 

 
 
 
 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
•​
MD2 - Estudio y análisis de casos. 
•​
MD7 - Trabajo autónomo  
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
 
Actividades formativas 
Horas 
 
 
Actividades 
autónomas 
Preparación de clases 
15,0 
Estudio personal y lecturas 
37,5 
Elaboración de trabajos 
30,0 
Trabajo en campus virtual 
7,5 
 
Actividades 
dirigidas 
Clases expositivas 
15,0 
Clases prácticas 
18,8 
Seminarios y talleres 
11,3 
Actividades 
de Evaluación 
Actividades de Evaluación 
7,5 
Actividades 
supervisadas 
Supervisión de actividades 
3,8 
Tutorías (individual / en grupo) 
3,8 
Prácticas externas 
0,0 
Trabajo final de grado 
0,0 
 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
 
 
5 
P03SP03_GUIA 

 
 
 
 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
 
Actividades de evaluación 
Ponderación 
Evaluación 
continua 
Un examen Parcial 
25 % 
Entrega de portfolios y ejercicios 
20 % 
Interés y participación del alumno en la 
asignatura 
5 % 
Evaluación 
final 
Ejercicio de programación que será 
entregado el día anterior a la prueba 
escrita 
teórico-práctica 
de 
la 
convocatoria ordinaria. 
 
15 % 
Prueba escrita teórico-práctica. 
35% 
La calificación de la prueba escrita teórico-práctica de la convocatoria ordinaria 
no podrá ser inferior, en ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar 
la asignatura y consecuentemente poder realizar el cálculo de porcentajes en la 
calificación final. 
 
 
CONVOCATORIA EXTRAORDINARIA: 
 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese 
el calendario académico fijado por la universidad). Esta consistirá en la 
realización de una prueba teórico-práctica con un valor del 50 % de la nota final 
de la asignatura.  
En el caso de acudir a la convocatoria extraordinaria, la nota obtenida en el 
ejercicio de programación de la convocatoria ordinaria no será tenida en 
cuenta. La prueba teórico-práctica de la convocatoria extraordinaria será 
equivalente al 50% de la evaluación final de la convocatoria ordinaria. 
 
El resto de la nota se complementará con la calificación obtenida en la 
evaluación continua de la convocatoria ordinaria.  
 
La calificación de la prueba escrita teórico-práctica de la convocatoria ordinaria 
no podrá ser inferior, en ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar 
la asignatura y consecuentemente poder realizar el cálculo de porcentajes en la 
calificación final. 
 
 
6 
P03SP03_GUIA 

 
 
 
 
 
 
7 
P03SP03_GUIA 

 
 
 
 
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
​
 
 
8 
P03SP03_GUIA 
BIBLIOGRAFÍA BÁSICA:  
Las siguientes referencias son de consulta obligatoria: 
1. Técnicas criptográficas de protección de datos, 3ª edición”, Fuster Sabater, A., De la 
Guía, D., Hernández L., Montoya F,  
Editor: Ra-Ma; Edición: 3rd edicion. (2004) 
ISBN-10: 8478975942 
ISBN-13: 9788478975945 
2. Seguridad Informática.  Roa, J.F.,  
Editor: Mc. Graw Hill. 2013 
ISBN-10: 8448183967 
ISBN-13: 9788448171377 
BIBLIOGRAFÍA COMPLEMENTARIA:  
1.​ Empire: Hacking avanzado en el Red Team, 1ª edición, Castro, S., 
González, P. 
Editor: ZeroXword Computing 
ISBN-13: 978-84-09-14088-6 
 
2.​ Hacking web technologies, 2ª edición revisada y ampliada, Rando, E., 
Gonzalez, P., Aparicio, A., Martín, R., Alonso, C. 
Editor: ZeroXword Computing 
ISBN-13: 978-84-697-7701-5 
 
WEBS DE REFERENCIA: 
 
OTRAS FUENTES DE CONSULTA: 
 

 
 
 
 
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Programación Web I 
PLAN DE 
ESTUDIOS: 
Grado en Ingeniería Informática 
FACULTAD: 
Escuela Politécnica Superior 
CARÁCTER DE LA 
ASIGNATURA: 
Obligatoria 
ECTS: 
6 
CURSO: 
Cuarto 
SEMESTRE: 
Primero 
IDIOMA EN QUE SE 
IMPARTE: 
Castellano 
PROFESORADO: 
David Pérez 
DIRECCIÓN DE CORREO 
ELECTRÓNICO: 
david.alvarez@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
REQUISITOS PREVIOS: 
No Aplica 
CONTENIDOS: 
1.​ Arquitectura de los sitios Web. 
2.​ Aplicaciones web. 
1.​ Introducción a HTML5. Aprender a estructurar páginas web 
semánticas y accesibles. 
2.​ Diseño Web con CSS3. Estilos visuales avanzados para crear 
interfaces atractivas y responsivas. 
1 
P03SP03_GUIA 

 
 
 
 
3.​ ECMAScript6 (JavaScript moderno). Introducir a las nuevas 
características de ECMAScript 6. 
4.​ Manipulación del DOM con JavaScript. Controlar la estructura y 
el contenido del DOM. 
3.​ Servicios y Backend. 
1.​ Comunicación con el servidor. AJAX, Fetch, Axios. Aprender a 
realizar solicitudes asíncronas al servidor. 
2.​ API RESTful y SOAP. Conocer las diferencias y características de 
API REST y SOAP.  
3.​ NodeJS y NPM (Backend básico). Crear servidores utilizando 
Node.js y gestionar dependencias con NPM 
4.​ Integración cliente-servidor. Aprender cómo interactúa el 
frontend con el backend. 
4.​ Aplicaciones web modernas 
1.​ PWA. Crear aplicaciones web con características similares a las 
nativas. 
2.​ Docker 
para 
despliegue 
y 
contenedores. 
Aprender 
a 
contenedorizar aplicaciones con Docker. 
3.​ Orquestación 
con 
Kubernetes. 
Aprender 
a 
orquestar 
contenedores y gestionar aplicaciones escalables. 
COMPETENCIAS 
COMPETENCIAS GENERALES: 
Que los estudiantes sean capaces de: 
-​
Capacidad 
para 
concebir 
y 
desarrollar 
sistemas 
o arquitecturas 
informáticas centralizadas o distribuidas integrando hardware, software y 
redes. 
-​
Capacidad de explicar y aplicar las materias básicas y tecnologías, que 
permitan el aprendizaje y desarrollo de nuevos métodos y tecnologías, así 
como las que les doten de una gran versatilidad para adaptarse a nuevas 
situaciones. 
-​
Capacidad para resolver problemas con iniciativa, toma de decisiones, 
autonomía y creatividad. Capacidad para saber comunicar y transmitir los 
2 
P03SP03_GUIA 

 
 
 
 
conocimientos, habilidades y destrezas de la profesión de Ingeniero 
Técnico en Informática. 
-​
Que 
los 
estudiantes 
hayan 
demostrado 
poseer 
y 
comprender 
conocimientos en un área de estudio que parte de la base de la educación 
secundaria general, y se suele encontrar a un nivel que, si bien se apoya en 
libros de texto avanzados, incluye también algunos aspectos que implican 
conocimientos procedentes de la vanguardia de su campo de estudio 
-​
Que los estudiantes sepan aplicar sus conocimientos a su trabajo o 
vocación de una forma profesional y posean las competencias que suelen 
demostrarse por medio de la elaboración y defensa de argumentos y la 
resolución de problemas dentro de su área de estudio 
-​
Que los estudiantes tengan la capacidad de reunir e interpretar datos 
relevantes (normalmente dentro de su área de estudio) para emitir juicios 
que incluyan una reflexión sobre temas relevantes de índole social, 
científica o ética 
-​
Que los estudiantes puedan transmitir información, ideas, problemas y 
soluciones a un público tanto especializado como no especializado 
-​
Que los estudiantes hayan desarrollado aquellas habilidades de aprendizaje 
necesarias para emprender estudios posteriores con un alto grado de 
autonomía 
COMPETENCIAS ESPECÍFICAS: 
Que los estudiantes sean capaces de: 
-​
Capacidad para diseñar, desarrollar, seleccionar y evaluar aplicaciones y 
sistemas informáticos, asegurando su fiabilidad, seguridad y calidad, 
conforme a principios éticos y a la legislación y normativa vigente. 
-​
Capacidad para analizar, diseñar, construir y mantener aplicaciones de 
forma robusta, segura y eficiente, eligiendo el paradigma y los lenguajes de 
programación más adecuados. 
-​
Capacidad de conocer y aplicar las herramientas necesarias para el 
almacenamiento, procesamiento y acceso a los Sistemas de información, 
incluidos los basados en web. 
-​
Capacidad para diseñar y evaluar interfaces persona computador que 
garanticen la accesibilidad y usabilidad a los sistemas, servicios y 
aplicaciones informáticas. 
RESULTADOS DE APRENDIZAJE: 
En esta asignatura se espera que los alumnos alcancen los siguientes resultados 
de aprendizaje: 
3 
P03SP03_GUIA 

 
 
 
 
-​
Conocer los principios de una arquitectura cliente - servidor 
-​
Comprender los estándares de construcción web, tales como el 
metalenguaje HTML y ser capaz de construir una página web basada en 
dichos estándares 
-​
Desarrollar una aplicación con lenguaje de servidor incluyendo la conexión 
con bases de datos 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con 
el objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
-​
MD1​
Método expositivo 
-​
MD2​
Estudio y análisis de casos 
-​
MD3​
Resolución de ejercicios 
-​
MD4​
Aprendizaje basado en problemas 
-​
MD5​
Aprendizaje orientado a proyectos 
-​
MD6​
Aprendizaje cooperativo / Trabajo en grupos 
-​
MD7​
Trabajo autónomo 
 
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
Actividades formativas 
Horas 
Actividades 
dirigidas 
Clases expositivas 
 
Clases prácticas 
 
Actividades 
supervisadas 
Supervisión de actividades 
 
Tutorías (individual / en grupo) 
 
Actividades 
autónomas 
Preparación de clases 
 
Estudio personal y lecturas 
 
Elaboración de trabajos 
 
Trabajo individual en campus virtual 
 
 
El primer día de clase, el profesor/a proporcionará información más detallada al 
respecto. 
4 
P03SP03_GUIA 

 
 
 
 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
Actividades de evaluación 
Ponderaci
ón 
Evaluación 
continua 
Entregas de Portfolios y Ejercicios 
45 % 
Interés y participación del alumno en la 
asignatura 
5 % 
Evaluación 
final 
Examen Teórico-Práctico 
50 % 
La calificación del instrumento de la evaluación final (tanto de la convocatoria 
ordinaria como de la extraordinaria, según corresponda) no podrá ser inferior, en 
ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar la asignatura y 
consecuentemente poder realizar el cálculo de porcentajes en la calificación 
final. 
En la circunstancia que en esa Prueba o Examen Final se obtenga una calificación 
de 3.9 o inferior, en el Acta de Evaluación correspondiente se registrará la nota o 
calificación obtenida en dicho Examen Final, sin hacer media aritmética con las 
notas obtenidas en la Evaluación continua. 
El alumno que suspenda la asignatura en la convocatoria ordinaria podrá 
examinarse en la convocatoria extraordinaria, donde se tendrán en cuenta las 
calificaciones obtenidas en la Evaluación continua a lo largo del semestre. 
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese el 
calendario académico fijado por la universidad). Esta consistirá en la realización 
de uno o dos Exámenes Teórico-Prácticos con un valor de hasta el 50% de la 
nota final de la asignatura. El resto de la nota se complementará con la 
calificación obtenida en la evaluación continua de la convocatoria ordinaria.  
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
BIBLIOGRAFÍA BÁSICA:  
Las siguientes referencias son de consulta obligatoria: 
●​ Eloquent JavaScript, 3rd Edition - Marijn Haverbeke 
🌕​URL: https://eloquentjavascript.net/ 
5 
P03SP03_GUIA 

 
 
 
 
🌕​Descripción: Un excelente libro interactivo en línea para aprender 
JavaScript moderno (ES6) y conceptos avanzados del lenguaje. 
🌕​Temas: JavaScript, DOM, programación funcional. 
●​ You Don't Know JS (Yet), 2nd Edition - Kyle Simpson 
🌕​URL: https://github.com/getify/You-Dont-Know-JS 
🌕​Descripción: Una serie de libros que profundizan en los aspectos 
fundamentales y avanzados de JavaScript. 
🌕​Temas: JavaScript (ES6+), programación asíncrona, promesas, 
fetch. 
●​ MDN Web Docs - Mozilla Foundation 
🌕​URL: https://developer.mozilla.org/ 
🌕​Descripción: Documentación oficial y tutoriales de HTML5, CSS3, 
y JavaScript. Es una de las referencias más importantes para 
desarrolladores web. 
🌕​Temas: HTML5, CSS3, JavaScript, APIs web. 
●​ Node.js Official Documentation - Node.js Foundation 
🌕​URL: https://nodejs.org/en/docs/ 
🌕​Descripción: Documentación oficial para aprender sobre Node.js, 
el entorno de ejecución JavaScript en el backend. 
🌕​Temas: Node.js, manejo de servidores, APIs, npm. 
●​ Express.js Documentation - Express.js 
🌕​URL: https://expressjs.com/ 
6 
P03SP03_GUIA 

 
 
 
 
🌕​Descripción: La guía oficial para aprender Express.js, un 
framework ligero para desarrollar servidores y APIs RESTful con 
Node.js. 
🌕​Temas: Node.js, Express, API REST, middleware 
BIBLIOGRAFÍA COMPLEMENTARIA:  
Las siguientes referencias no se consideran de consulta obligatoria, pero su 
lectura es muy recomendable para aquellos estudiantes que quieran 
profundizar en los temas que se abordan en la asignatura.  
●​ Learning Progressive Web Apps - Google Developers 
🌕​URL: https://developers.google.com/web/ilt/pwa 
🌕​Descripción: Una colección de recursos y tutoriales ofrecidos por 
Google para aprender a crear Progressive Web Apps (PWA). 
🌕​Temas: PWA, service workers, caché, manifest. 
●​ RESTful Web APIs - Leonard Richardson, Mike Amundsen, Sam Ruby 
🌕​URL: https://restfulapi.net/ 
🌕​Descripción: Un sitio web completo que ofrece recursos sobre 
cómo diseñar APIs RESTful, con tutoriales y mejores prácticas. 
🌕​Temas: APIs REST, JSON, HTTP. 
●​ Docker Documentation - Docker Inc. 
🌕​URL: https://docs.docker.com/ 
🌕​Descripción: Guía oficial de Docker, ideal para aprender cómo 
contenedorizan aplicaciones y manejar la infraestructura basada 
en contenedores. 
🌕​Temas: Docker, contenedores, imágenes, docker-compose. 
●​ Kubernetes Documentation - Kubernetes 
7 
P03SP03_GUIA 

 
 
 
 
🌕​URL: https://kubernetes.io/docs/ 
🌕​Descripción: Documentación oficial de Kubernetes, el sistema de 
orquestación de contenedores más popular. 
🌕​Temas: Kubernetes, pods, servicios, despliegue de aplicaciones. 
WEBS DE REFERENCIA: 
●​ “Mozilla Developer Network web docs: Learn web development” 
https://developer.mozilla.org/en-US/docs/Learn 
●​ Documentación oficial de NodeJS: https://nodejs.org/en/docs/ 
OTRAS FUENTES DE CONSULTA: 
●​ “Aprende desarrollo web”. https://developer.mozilla.org/es/docs/Learn 
 
8 
P03SP03_GUIA 

 
 
 
 
 
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Laboratorio de Nuevas Tendencias en Tecnologías I 
PLAN DE ESTUDIOS: 
Grado en Ingeniería Informática 
CENTRO: 
Escuela Politécnica Superior 
CARÁCTER DE LA ASIGNATURA: 
Optativa 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Primero 
IDIOMA EN QUE SE IMPARTE: 
Español 
PROFESORADO: 
Daniel Gavilanes 
DIRECCIÓN DE CORREO 
ELECTRÓNICO: 
loyda.alas@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
CONTENIDOS: 
Tema 1 Cloud computing  
AWS Amazon Web Services 
Microsoft Azure 
Google Cloud Platform 
Tema 2 Frameworks avanzados  
Frameworks Web 
Lado del servidor: Lumen / Laravel / Express.js 
Lado del cliente: Vue.js 
Tema 3 Visión artificial  
Tema 4 Informática cuántica 
 
1 
 

 
 
 
 
OBJETIVOS Y COMPETENCIAS 
COMPETENCIAS GENERALES: 
●​ CG2​
Capacidad para dirigir las actividades objeto de los proyectos del 
ámbito de la informática. 
●​ CG4​
Capacidad para definir, evaluar y seleccionar plataformas 
hardware y software para el desarrollo y la ejecución de sistemas, servicios y 
aplicaciones informáticas. 
●​ CG9​
Capacidad para resolver problemas con iniciativa, toma de 
decisiones, autonomía y creatividad. Capacidad para saber comunicar y 
transmitir los conocimientos, habilidades y destrezas de la profesión de 
Ingeniero Técnico en Informática. 
●​ CG12​
Capacidad de conocer y aplicar los elementos básicos de 
economía y de gestión de recursos humanos, organización y planificación de 
proyectos, así como la legislación, regulación y normalización en el ámbito 
de los proyectos informáticos. 
COMPETENCIAS ESPECÍFICAS: 
●​ CEOP3​
Desarrollar destrezas para la aplicación de las teorías y técnicas 
más recientes en el diseño, desarrollo, gestión e implementación de 
proyectos de ámbito informático. 
●​ CEOP4​
Capacidad de integrar y sintetizar de forma profesional los 
conocimientos adquiridos en el ámbito de la Ingeniería informática 
RESULTADOS DE APRENDIZAJE: 
●​ Conocer los criterios para seleccionar el framework más adecuado para 
diferentes escenarios. 
●​ Conocer los principios de la visión artificial y sus algoritmos relacionados. 
●​ Conocer los conceptos relacionados con la computación en nube y 
aplicarlos en la solución de un proyecto. 
●​ Conocer los conceptos relacionados con la computación en nube y 
aplicarlos en la solución de un proyecto. 
 
2 
 

 
 
 
 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
●​ MD2​ - Estudio y análisis de casos 
●​ MD4 - Aprendizaje basado en problemas 
●​ MD5 - Aprendizaje orientado a Proyectos 
●​ MD6 - Aprendizaje cooperativo / Trabajo en grupos 
●​ MD7 - Trabajo autónomo 
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
Actividades formativas 
Actividades 
dirigidas 
Clases expositivas 
Clases prácticas 
Actividades 
supervisadas 
Supervisión de actividades 
Tutorías (individual / en grupo) 
Actividades 
autónomas 
Preparación de clases 
Estudio personal y lecturas 
Elaboración de trabajos 
Trabajo individual en campus virtual 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
Actividades de evaluación 
Ponderación 
Evaluación continua 
Evaluación de seguimiento 
90 % 
Evaluación final 
Examen Práctico final 
10 % 
 
3 
 

 
 
 
 
La calificación del instrumento de la evaluación final (tanto de la convocatoria 
ordinaria como de la extraordinaria, según corresponda) no podrá ser inferior, 
en ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar la asignatura y 
consecuentemente poder realizar el cálculo de porcentajes en la calificación 
final. 
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese 
el calendario académico fijado por la universidad). Esta consistirá en la 
realización de uno o dos Exámenes Teórico-Prácticos con un valor de hasta el 
50% de la nota final de la asignatura. El resto de la nota se complementará con 
la calificación obtenida en la evaluación continua de la convocatoria ordinaria.  
 
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
BIBLIOGRAFÍA  
Atendiendo a las necesidades de cada estudiante el Tutor le proporcionará 
bibliografía específica.   
 
4 
 

 
 
 
 
 
GUÍA DOCENTE 2026-2027 
DATOS GENERALES DE LA ASIGNATURA 
ASIGNATURA: 
Laboratorio de Nuevas Tendencias en Tecnologías II 
PLAN DE ESTUDIOS: 
Grado en Ingeniería Informática 
CENTRO: 
Escuela Politécnica Superior 
CARÁCTER DE LA ASIGNATURA: 
Optativa 
ECTS: 
6 
CURSO: 
Tercero 
SEMESTRE: 
Segundo 
IDIOMA EN QUE SE IMPARTE: 
Español 
PROFESORADO: 
Lázaro Hernández Rodríguez 
DIRECCIÓN DE CORREO ELECTRÓNICO: 
lazaro.hernandez@uneatlantico.es 
DATOS ESPECÍFICOS DE LA ASIGNATURA 
CONTENIDOS: 
●​ Tema 1: Proveedores cloud  
o​ Introducción a los Proveedores Cloud 
o​ Amazon 
o​ Google 
o​ DigitalOcean 
●​ Tema 2: Infraestructuras de virtualización  
o​ VMware 
o​ VirtualBox 
o​ ESX 
●​ Tema 3: Sistemas en la nube (cloud)  
o​ IaaS 
o​ PasS 
o​ SaaS 
o​ Usos y aplicaciones 
●​ Tema 4: Sistemas big data  
●​ Tema 5: Microservicios  
1 
 

 
 
 
 
o​ DDD Táctico 
o​ DDD Estratégico 
o​ Clean Architecture 
o​ Patrones de código 
●​ Tema 6: Contenedores 
o​ Docker 
o​ Docker Compose 
o​ Kubernetes 
 
 
OBJETIVOS Y COMPETENCIAS 
COMPETENCIAS GENERALES: 
●​ CG2​
Capacidad para dirigir las actividades objeto de los proyectos del 
ámbito de la informática. 
●​ CG4​
Capacidad para definir, evaluar y seleccionar plataformas 
hardware y software para el desarrollo y la ejecución de sistemas, servicios y 
aplicaciones informáticas. 
●​ CG9​
Capacidad para resolver problemas con iniciativa, toma de 
decisiones, autonomía y creatividad. Capacidad para saber comunicar y 
transmitir los conocimientos, habilidades y destrezas de la profesión de 
Ingeniero Técnico en Informática. 
●​ CG12​
Capacidad de conocer y aplicar los elementos básicos de 
economía y de gestión de recursos humanos, organización y planificación de 
proyectos, así como la legislación, regulación y normalización en el ámbito 
de los proyectos informáticos. 
COMPETENCIAS ESPECÍFICAS: 
●​ CEOP3​
Desarrollar destrezas para la aplicación de las teorías y técnicas 
más recientes en el diseño, desarrollo, gestión e implementación de 
proyectos de ámbito de informático. 
●​ CEOP2​
Desarrollar destrezas para la implementación y el despliegue de 
soluciones aplicando las tendencias tecnológicas más recientes en el 
ámbito de la informática. 
●​ CEOP4​
Capacidad de integrar y sintetizar de forma profesional los 
conocimientos adquiridos en el ámbito de la Ingeniería informática 
RESULTADOS DE APRENDIZAJE: 
●​ Conocer los criterios para seleccionar el framework más adecuado para 
diferentes escenarios. 
●​ Conocer los principios de la visión artificial y sus algoritmos relacionados. 
●​ Conocer los conceptos relacionados con la computación en nube y 
aplicarlos en la solución de un proyecto. 
●​ Conocer los conceptos relacionados con la computación en nube y 
aplicarlos en la solución de un proyecto. 
2 
 

 
 
 
 
METODOLOGÍAS DOCENTES Y ACTIVIDADES FORMATIVAS 
METODOLOGÍAS DOCENTES: 
En esta asignatura se ponen en práctica diferentes metodologías docentes con el 
objetivo de que los alumnos puedan obtener los resultados de aprendizaje 
definidos anteriormente:  
●​ MD2​ - Estudio y análisis de casos 
●​ MD4 - Aprendizaje basado en problemas 
●​ MD5 - Aprendizaje orientado a Proyectos 
●​ MD6 - Aprendizaje cooperativo / Trabajo en grupos 
●​ MD7​- Trabajo autónomo 
ACTIVIDADES FORMATIVAS: 
A partir de las metodologías docentes especificadas anteriormente, en esta 
asignatura, el alumno participará en las siguientes actividades formativas: 
Actividades formativas 
Actividades 
dirigidas 
Clases expositivas 
Clases prácticas 
Actividades 
supervisadas 
Supervisión de actividades 
Tutorías (individual / en grupo) 
Actividades 
autónomas 
Preparación de clases 
Estudio personal y lecturas 
Elaboración de trabajos 
Trabajo individual en campus virtual 
El primer día de clase, el profesor proporcionará información más detallada al 
respecto. 
SISTEMA DE EVALUACIÓN 
CONVOCATORIA ORDINARIA: 
En la convocatoria ordinaria de esta asignatura se aplican los siguientes 
instrumentos de evaluación: 
 
Actividades de evaluación 
Ponderación 
Evaluación continua 
Evaluación de seguimiento 
90 % 
Evaluación final 
Examen Práctico final 
10 % 
 
La calificación del instrumento de la evaluación final (tanto de la convocatoria 
ordinaria como de la extraordinaria, según corresponda) no podrá ser inferior, 
3 
 

 
 
 
 
en ningún caso, a 4,0 puntos (escala 0 a 10) para aprobar la asignatura y 
consecuentemente poder realizar el cálculo de porcentajes en la calificación 
final. 
CONVOCATORIA EXTRAORDINARIA: 
La convocatoria extraordinaria tendrá lugar durante el mes de julio (consúltese 
el calendario académico fijado por la universidad). Esta consistirá en la 
realización de uno o dos Exámenes Teórico-Prácticos con un valor de hasta el 
50% de la nota final de la asignatura. El resto de la nota se complementará con 
la calificación obtenida en la evaluación continua de la convocatoria ordinaria.  
BIBLIOGRAFÍA Y RECURSOS DE REFERENCIA GENERALES 
BIBLIOGRAFÍA  
Atendiendo a las necesidades de cada estudiante el Tutor le proporcionará 
bibliografía específica.   
 
4 
 

Plataforma de E-commerce Angolana
Em 2022, uma startup angolana decidiu criar uma plataforma nacional de e-commerce para permitir que pequenos comerciantes vendessem os seus produtos online.
O objetivo era oferecer um “mercado digital angolano”, com funcionalidades de catálogo, pagamento e entrega ao domicílio.
O projeto foi iniciado com grande entusiasmo e recebeu investimento privado, mas apenas três meses após o lançamento, o sistema apresentou falhas graves:
O site ficou fora do ar nos dias de maior tráfego.
Pagamentos eletrónicos falhavam frequentemente, causando perda de transações.
Havia falhas de segurança que expunham dados de clientes.
As equipas de desenvolvimento e marketing não se comunicavam bem, resultando em versões instáveis e mudanças de última hora.
Muitos clientes abandonaram a plataforma, e os comerciantes voltaram a usar redes sociais para vender.
O projeto acabou por ser suspenso no final de 2023, apesar do investimento em publicidade e do potencial de mercado.
Tarefa do grupo
Analisa o caso e responde coletivamente às questões a seguir. Usa os conceitos estudados na disciplina Engenharia de Software (qualidade, princípios, paradigmas, processos, etc.).
1. Identificação do problema
Quais foram os principais erros cometidos pela equipa de desenvolvimento e pela gestão do projeto?
(Descreve pelo menos 3 falhas técnicas ou organizacionais.)
2. Causas do fracasso
Que factores contribuíram para essas falhas (falta de planeamento, ausência de testes, comunicação, gestão de risco, etc.)?
3. Princípios da Engenharia de Software violados
Indica que princípios fundamentais da Engenharia de Software foram ignorados (ex.: planeamento, modularidade, verificação, comunicação, gestão de qualidade).
4. Estratégias de prevenção
Como o projeto poderia ter sido conduzido de forma diferente para evitar o fracasso?
Propõe três medidas concretas com base em boas práticas da Engenharia de Software.
5. Lições aprendidas
Que aprendizagens este caso oferece a futuros engenheiros de software?
6. Modelo de processo alternativo
Se a equipa tivesse adotado um modelo ágil (por exemplo, Scrum ou incremental), como isso poderia ter melhorado o resultado?
Sistema de Gestão Académica Universitária
Em 2021, uma universidade angolana decidiu desenvolver internamente um Sistema de Gestão Académica (SGA) para informatizar os processos de matrícula, emissão de pautas, controle de notas e geração de relatórios administrativos.
O objetivo era reduzir o uso de papel, melhorar a eficiência administrativa e permitir que estudantes e docentes acedessem online aos seus dados.
O projeto foi confiado a uma equipa mista composta por docentes de informática e estudantes finalistas, com um cronograma de seis meses.
No entanto, o sistema não funcionou conforme o esperado:
A interface era confusa e pouco intuitiva, causando erros frequentes dos utilizadores.
O sistema bloqueava durante períodos de pico, especialmente nas matrículas.
Não havia cópias de segurança automáticas, e parte dos dados foi perdida após uma falha de servidor.
A comunicação entre a equipa técnica e a administração era limitada: requisitos mudavam constantemente sem controlo de versão.
Faltavam testes de usabilidade e validação com os utilizadores finais (secretarias, docentes, estudantes).
Ao final, a universidade voltou temporariamente ao sistema manual enquanto contratava uma empresa externa para corrigir e reimplementar o software.
Tarefa do grupo
Analisa o caso e responde coletivamente às questões seguintes.
Aplica os conceitos de Engenharia de Software (qualidade, ciclo de vida, princípios, paradigmas e modelos de processo).
1. Identificação do problema
Quais foram os principais erros técnicos e de gestão cometidos no desenvolvimento do SGA?
(Descreve pelo menos 3 falhas específicas.)
2. Causas do fracasso
Quais fatores (humanos, técnicos, organizacionais) contribuíram para o fracasso do projeto?
(Ex.: comunicação deficiente, planeamento inadequado, ausência de testes, má definição de requisitos.)
3. Qualidade do software
Que fatores de qualidade foram comprometidos (confiabilidade, usabilidade, eficiência, integridade, manutenibilidade)?
Explica como cada um foi afetado.
4. Princípios fundamentais da Engenharia de Software violados
Quais princípios foram ignorados?
(Ex.: planeamento, verificação e validação, modularidade, documentação, comunicação, gestão de risco.)
5. Estratégias de melhoria
Como o projeto poderia ter sido conduzido de forma diferente?
Propõe três medidas corretivas baseadas em boas práticas da Engenharia de Software.
6. Modelo de processo alternativo
Que modelo de processo de software (ex.: incremental, em espiral, ágil/Scrum) seria mais adequado para este tipo de projeto?
Justifica a tua escolha.
7. Lições aprendidas
Que ensinamentos este caso oferece aos futuros engenheiros de software?
(Reflete sobre a importância da qualidade, comunicação e validação.)






Excelente caso para análise — trata-se de um exemplo clássico de fracasso de projeto de software por falta de aplicação sistemática dos princípios da Engenharia de Software.
Abaixo segue uma resposta estruturada e completa a cada questão:


1. Identificação do problema

Principais erros técnicos e de gestão cometidos:

1. Interface confusa e pouco intuitiva:
Falha de design e usabilidade — não houve análise das necessidades reais dos utilizadores nem testes de interface (UI/UX).
2. Falhas de desempenho e estabilidade:
O sistema bloqueava durante períodos de pico, revelando problemas de escalabilidade, ausência de testes de carga e arquitetura mal planejada.
3. Ausência de mecanismos de cópia de segurança e recuperação:
Não havia backup automático, resultando em perda de dados após falhas do servidor — grave erro de confiabilidade e gestão de riscos.
4. Comunicação e controlo de versões deficientes:
As alterações nos requisitos eram feitas sem rastreabilidade, levando à inconsistência entre o que a administração queria e o que a equipa técnica desenvolvia.

2. Causas do fracasso

Fatores humanos, técnicos e organizacionais:

Humanos:
Falta de comunicação clara entre administração e equipa técnica.
Equipa mista (docentes e estudantes) sem experiência prática em gestão de projetos complexos.
Técnicos:
Falta de testes de desempenho e usabilidade.
Ausência de plano de backup, segurança e documentação técnica adequada.

Organizacionais:
Planeamento inadequado (cronograma de 6 meses irrealista).
Requisitos instáveis e sem gestão formal (mudavam constantemente).
Falta de metodologia de desenvolvimento definida (ausência de modelo de processo).

3. Qualidade do software
Fatores de qualidade comprometidos e como foram afetados:
Fator de Qualidade	Situação no Projeto	Consequência

Confiabilidade	Perda de dados e falhas no servidor.	Usuários perderam confiança no sistema.
Usabilidade	Interface confusa e sem testes com utilizadores.	Dificuldade de uso e erros frequentes.
Eficiência/Desempenho	Sistema bloqueava em picos de acesso.	Lentidão e interrupções nas matrículas.
Integridade	Falta de mecanismos de backup e segurança.	Dados corrompidos ou perdidos.
Manutenibilidade	Mudanças sem controlo de versão nem documentação.	Dificuldade de correção e evolução do sistema.

4. Princípios fundamentais da Engenharia de Software violados

1. Planeamento e gestão de projeto:
Não houve cronograma realista nem gestão adequada de recursos e riscos.

2. Verificação e validação (V&V):
O sistema não foi testado adequadamente antes da implantação.

3. Comunicação eficaz:
Falha na interação entre equipa técnica e administração — requisitos mal compreendidos.

4. Documentação e controlo de versões:
Alterações sem rastreabilidade nem registo formal.

5. Gestão de riscos:
Não se previu falhas de servidor, perda de dados nem contingências.

5. Estratégias de melhoria
Três medidas corretivas baseadas em boas práticas da Engenharia de Software:
1. Adotar um processo estruturado e iterativo:
Implementar um modelo incremental ou ágil (Scrum), com revisões e entregas parciais para obter feedback contínuo dos utilizadores.

2. Envolver utilizadores finais desde o início:
Realizar testes de usabilidade, reuniões regulares com secretarias, docentes e estudantes para validar requisitos e protótipos.

3. Implementar práticas de qualidade e segurança:

Plano de testes (funcionais, de carga e de segurança).
Sistema de backup automático e gestão de versões (Git).
Documentação técnica e de utilizador.

6. Modelo de processo alternativo
Modelo sugerido: Modelo Ágil/Scrum
Justificação:
Permite entregas incrementais e feedback contínuo dos utilizadores (secretarias, docentes e estudantes).
Facilita adaptação a mudanças de requisitos, que eram frequentes neste projeto.
Promove melhor comunicação entre a equipa técnica e os stakeholders através de reuniões curtas e regulares (sprints e reviews).
Incentiva o trabalho colaborativo e iterativo, ideal para equipas mistas e em contexto universitário.

7. Lições aprendidas
A qualidade do software depende do processo seguido. Um sistema bem planejado e testado reduz retrabalho e falhas.
A comunicação é essencial. Sem diálogo contínuo entre utilizadores e desenvolvedores, o produto final não atende às reais necessidades.
A validação contínua previne fracassos. Testes regulares com utilizadores e revisões técnicas evitam que problemas se acumulem até o fim do projeto.
Gestão de riscos e cópias de segurança são indispensáveis. Dados institucionais não podem depender de soluções improvisadas.
Documentação e controlo de versões garantem manutenção e evolução.
Queres que eu te ajude a transformar esta análise em formato de relatório académico (com introdução, desenvolvimento e conclusão) para entrega em grupo?

