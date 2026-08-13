---
title: "Aula 02- Qualidade do software"
document_type: "Oficial_Professores"
date_extracted: "2026-07-30"
tags: [RAG, UNIC, DocumentoOficial, PDF]
---

# Aula 02- Qualidade do software

> [!info] Fonte Original: Aula 02- Qualidade do software.pdf

## Página 1

ENGENHARIA DE SOFTWARE I

PROF: ENG. Duliet Hong León

Rua Padre Fidalgo s/n Bairro Sede, Cuito - Bié

932 884 895  993 908 786 (+244)  www.unic.co.ao

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p1_img0.jpeg)

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p1_img1.png)

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p1_img2.png)

## Página 2

Tema 1: Introdução à engenharia de software. Sumário: Qualidade do software ▪Benefícios de obter um software de qualidade. ▪Fatores que afetam a qualidade do software ▪Qualidade e ciclo de vida ▪Tipos de qualidade

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p2_img0.jpeg)

## Página 3

OBJETIVO

• Compreender os atributos da qualidade do software (correção, eficiência, usabilidade, etc.) e as métricas utilizadas para avaliá-los.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p3_img0.jpeg)

## Página 4

Bibliografia Basica

• (2017) OMG® Unified Modeling Language® (OMG UML®), specification  version 2.5.1. OMG. • Jacobson, I., Booch, G., & Rumbaugh, J. (2007). El lenguaje unificado de  modelado, manual de referencia. Madrid: Editorial Pearson Educación. • Leach, R. J. (2018). Introduction to software engineering. CRC Press. • Pressman, R. S. (2010). Ingeniería del Software, Un enfoque práctico.  Madrid: Editorial Mc Graw Hill. • Sommerville, I. (2005). Ingeniería del software. Madrid: Editorial Pearson  Educación. • Tsui, F., Karam, O., & Bernal, B. (2022). Essentials of software engineering.  Jones & Bartlett Learning.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p4_img0.jpeg)

## Página 5

Bibliografia Complementaria

• Ciesla, R. (2021). UML Class Diagrams. In Programming Basics (pp. 145- 165). Apress, Berkeley, CA. • Doe, J. (2011). Recommended Practice for Software Requirements  Specifications (IEEE). IEEE, New York. • Fernández, C., Ambrosio, M., Andrade, G., Cruz, G., Martín, J., Ortiz, R., &  Sánchez, H. (2011). Métodos formales aplicados en la industria del  software. Temas de Ciencia y Tecnología, 15(43), 3-12. • Loubser, N. (2021). Software Engineering for Absolute Beginners. New  York, New York, USA: Apress.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p5_img0.jpeg)

## Página 6

Introdução

• Na década de 1990, as grandes corporações reconheceram que milhares de milhões de dólares eram desperdiçados todos os anos em software que não tinha as características e funcionalidades prometidas. • Os códigos incorretos continuam a ser a ruína da indústria do software, responsável por até 45% do tempo em que os sistemas baseados em computador estão inativos e custou às empresas dos EUA cerca de 100 mil milhões de dólares no ano passado em perda de produtividade e reparações. • O mau software afeta quase todas as organizações que utilizam computadores, resultando em horas de trabalho perdido devido ao tempo em que as máquinas estão fora de uso, dados perdidos ou corrompidos, perda de oportunidades de venda e aumento dos custos de suporte e manutenção e baixa satisfação do cliente.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p6_img0.jpeg)

## Página 7

De quem é a culpa?

• Os clientes culpam os programadores, dizendo que as suas práticas

desleixadas produzem software de baixa qualidade.

• Os programadores culpam os clientes (e outras partes interessadas) com a

alegação de que datas de entrega irracionais e um fluxo contínuo de

alterações os obrigam a enviar o software antes de este ter sido

totalmente validado.

Quem tem razão?

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p7_img0.jpeg)

## Página 8

Qualidade de software

A qualidade do produto de software é determinada pelo conjunto de

propriedades desejadas (atributos de qualidade) que devem estar

presentes no produto. Um atributo sendo uma característica física ou

abstrata mensurável de uma entidade (sistema de software)

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p8_img0.jpeg)

## Página 9

Qualidade de software

Pode ser descrita a partir de cinco pontos de vista diferentes:

• ponto de vista transcendental: a qualidade é algo que é imediatamente

reconhecido, mas que não pode ser definido explicitamente.

• ponto de vista do utilizador: concebe a qualidade em função dos objetivos

específicos do utilizador final. Se um produto os satisfaz, tem qualidade.

• ponto de vista do fabricante: define-o em termos das especificações

originais do produto. Se os atender, tem qualidade.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p9_img0.jpeg)

## Página 10

Qualidade de software

Pode ser descrita a partir de cinco pontos de vista diferentes:

• ponto de vista do produto: sugere que a qualidade tem a ver com as

características inerentes (funções e características) de um produto.

• ponto de vista baseada no valor: medida pelo que um cliente está

disposto a pagar por um produto.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p10_img0.jpeg)

## Página 11

Qualidade de software

A qualidade do design refere-se às características que os designers

especificam para um produto. A qualidade do design de um produto

aumenta se este for fabricado de acordo com as especificações. Inclui o grau

em que o projeto cumpre as funções e características especificadas no

modelo de requisitos.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p11_img0.jpeg)

## Página 12

Qualidade de software

𝑆𝑎𝑡𝑖𝑠𝑓𝑎çã𝑜𝑑𝑜𝑢𝑡𝑖𝑙𝑖𝑧𝑎𝑑𝑜𝑟

= 𝑝𝑟𝑜𝑑𝑢𝑡𝑜𝑞𝑢𝑒𝑓𝑢𝑛𝑐𝑖𝑜𝑛𝑎+ 𝑏𝑜𝑎𝑞𝑢𝑎𝑙𝑖𝑑𝑎𝑑𝑒+ 𝑒𝑛𝑡𝑟𝑒𝑔𝑎𝑑𝑒𝑛𝑡𝑟𝑜𝑑𝑜𝑜𝑟ç𝑎𝑚𝑒𝑛𝑡𝑜𝑒𝑑𝑒𝑛𝑡𝑟𝑜𝑑𝑜𝑝𝑟𝑎𝑧𝑜

A qualidade é importante, mas se o utilizador não estiver satisfeito, nada

mais importa.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p12_img0.jpeg)

## Página 13

Qualidade de software

Como é definida a qualidade do software?

No sentido mais geral, é definido como: Um processo de software eficaz que

é aplicado de uma forma que cria um produto útil que fornece valor

mensurável para aqueles que o produzem e para aqueles que o utilizam.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p13_img0.jpeg)

## Página 14

Qualidade de software

Um processo de software eficaz estabelece a infra-estrutura que suporta

qualquer esforço para produzir um produto de software de alta qualidade.

As práticas de engenharia de software permitem ao programador analisar o

problema e conceber uma solução robusta. A gestão da mudança e as

revisões técnicas são atividades igualmente importantes.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p14_img0.jpeg)

## Página 15

Qualidade de software

Um produto útil entrega conteúdo, funções e características que o utilizador

final deseja; de forma fiável e sem erros. Satisfaz o conjunto de requisitos

(por exemplo, facilidade de utilização) que se espera que um software de

alta qualidade tenha.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p15_img0.jpeg)

## Página 16

Qualidade de software

Ao acrescentar valor ao produtor e utilizador de um produto, o software de

elevada qualidade proporciona benefícios à organização que o produz e à

comunidade de utilizadores finais. O produtor exige menos esforço de

manutenção, menos bugs para corrigir e pouco assistência ao cliente,

permitindo que seja gasto mais tempo na criação de novas aplicações e

menos tempo na repetição de trabalhos mal executados. O utilizador obtém

uma aplicação que agiliza um processo de negócio (maiores lucros, mais

rentabilidade, melhor disponibilidade de informação).

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p16_img0.jpeg)

## Página 17

Dimensões de qualidade

Qualidade de desempenho. O software entrega todo o conteúdo, funções e

características especificadas como parte do modelo de requisitos, de forma a

acrescentar valor ao utilizador final?

Qualidade dos recursos. O software possui funcionalidades que surpreendem

e encantam na primeira vez que os utilizadores finais o utilizam?

Fiabilidade. O software fornece todas as características e capacidades sem

travar? Está disponível quando necessário? Oferece funcionalidade livre de

erros?

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p17_img0.jpeg)

## Página 18

Dimensões de qualidade

Conformidade. O software está em conformidade com as normas locais e

externas relevantes para a aplicação? Está de acordo com as convenções de

design e código de facto?

Durabilidade. O software pode ser mantido (alterado) ou corrigido

(depurado) sem a geração inadvertida de eventos colaterais? As alterações

farão com que a taxa de erro ou a fiabilidade diminuam com o tempo?

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p18_img0.jpeg)

## Página 19

Dimensões de qualidade

Serviço. Existe a possibilidade de o software receber manutenção

(alterações) ou correções (depuração) num período de tempo

aceitavelmente curto? A equipa de suporte consegue adquirir todas as

informações necessárias para efetuar alterações ou corrigir defeitos?

Estética. Tem uma certa elegância, um fluxo único e uma “presença” óbvia

que é difícil de quantificar mas é evidente.

Percepção. Em determinadas situações, existem preconceitos que vão

influenciar a perceção de qualidade do utilizador.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p19_img0.jpeg)

## Página 20

Fatores de qualidade “difíceis”

1) fatores que podem ser medidos diretamente (por exemplo, defeitos não

descobertos durante o teste)

2) fatores que só podem ser medidos indiretamente (como a usabilidade

ou a facilidade de manutenção).

Em cada caso devem ser feitas medições: o software deve ser comparado

com alguns dados para se chegar a um indicador de qualidade.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p20_img0.jpeg)

## Página 21

Medidas diretas e indiretas

• Uma medição é uma quantificação direta (por exemplo, a medição da

altura de uma árvore). Envolve um instrumento.

• Um cálculo é uma quantificação indireta: as medições são feitas e

combinadas para quantificar uma entidade refletida por algum atributo.

A medida da qualidade depende do ponto de vista adotado:

• Visão do usuário: confiabilidade, disponibilidade, usabilidade.

• Visão do produto: complexidade dos módulos, métricas de fluxo de

informações no design.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p21_img0.jpeg)

## Página 22

Atributos

• Atributo externo: Ele é derivado da operação observável do sistema e está

relacionado aos requisitos ou às propriedades externas do software.

Exemplo: tempo de resposta de um sistema interativo.

• Atributo interno: É inerente ao próprio sistema; ele mede as

características internas. Exemplo: número de linhas de código. Os

atributos internos são aqueles relacionados à organização interna do

software e ao processo de seu desenvolvimento.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p22_img0.jpeg)

## Página 23

Atributos Internos

• Modularidade: Grau de independência e coesão dos módulos de software.

• Acoplamento: Grau de interligação entre módulos.

• Complexidade: Medida da dificuldade de compreensão, modificação ou teste

do software.

• Reutilização: Grau em que os componentes de software podem ser utilizados

noutros projetos.

• Legibilidade: Facilidade com que o código-fonte pode ser compreendido.

• Eficiência: Utilização ideal dos recursos do sistema.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p23_img0.jpeg)

## Página 24

Atributos Externos

• Correção: Grau em que o software cumpre os requisitos funcionais.

• Robustez: Capacidade do software operar em condições anormais ou com

dados de entrada inválidos.

• Usabilidade: Facilidade com que os utilizadores podem aprender e utilizar o

software.

• Eficiência: Rapidez e quantidade de recursos utilizados pelo software..

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p24_img0.jpeg)

## Página 25

Atributos Externos

• Fiabilidade: Probabilidade de o software funcionar corretamente durante um

período de tempo específico.

• Manutenibilidade: Facilidade com que o software pode ser modificado ou

corrigido.

• Portabilidade: Capacidade do software ser executado em diferentes

ambientes.

• Interoperabilidade: Capacidade do software interagir com outros sistemas.

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p25_img0.jpeg)

## Página 26

ENGENHARIA DE SOFTWARE I

PROF: ENG. Duliet Hong León

Rua Padre Fidalgo s/n Bairro Sede, Cuito - Bié

932 884 895  993 908 786 (+244)  www.unic.co.ao

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p26_img0.jpeg)

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p26_img1.png)

![Imagem Extraída](file:///C:/Users/adria/OneDrive/Documentos/Marcianus Founder/PLANOS DE ESTUDOS — UNIC 2025-26/Z - Fontes Originais (Raw)/Base de Dados RAG/Media/Aula 02- Qualidade do software_p26_img2.png)

