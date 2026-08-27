---
tipo: "Fonte Original"
origem: "Rar Eng- Software I Actividadpractica Eng Soft01"
---

# Rar Eng- Software I Actividadpractica Eng Soft01

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

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
