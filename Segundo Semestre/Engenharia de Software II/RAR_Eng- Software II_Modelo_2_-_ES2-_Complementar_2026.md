---
tipo: "Fonte Original"
origem: "Rar Eng- Software Ii Modelo 2 - Es2- Complementar 2026"
---

# Rar Eng- Software Ii Modelo 2 - Es2- Complementar 2026

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

 
 
 
ENGENHARIA DE SOFTWARE II 
 
 
 
TITULO: AUTOMATIZAÇÃO DO PROCESSO DE MATRÍCULA E CONTROLE DA 
UNIC 
 
 
 
 
AUTORES: 
xxxxx 
 
 
 
 
 
 
 
 
CUITO - BIÉ / 2026 
 
    
    

 
 
ENGENHARIA DE SOFTWARE II 
 
TITULO: AUTOMATIZAÇÃO DO PROCESSO DE MATRÍCULA E CONTROLE DA 
UNIC. 
 
 
 
 
AUTOR: 
XXXXXXXXXXXXXX 
 
 
 
ORIENTADOR: XXXXXXXXXXX 
 
 
 
 
 
 
 
CUITO - BIÉ / 2026 
 
 

Índice 
 
1. 
3 
2 Processos 
3 
2.1 Realizar matrícula 
3 
2.2 Elaborar certificados de notas 
3 
2.3 Consultar resultados docentes 
3 
3 Actores e casos de uso do negócio 
4 
3.1 ACTORES DO NEGÓCIO 
4 
3.2 CASOS DE USO DO NEGÓCIO 
4 
4. DIAGRAMA DE CASOS DE USOS DO NEGÓCIO 
5 
5 DESCRIÇÃO DOS CASOS DE USO DO NEGÓCIO 
5 
5.1 REALIZAR MATRICULA 
5 
5.2 ELABORAR CERTIFICADOS DE NOTAS 
6 
5.3 CONSULTAR RESULTADOS DOCENTES 
7 
6 Trabalhadores e entidades do negócio 
8 
6.1 TRABALHADORES DO NEGÓCIO 
8 
6.2 ENTIDADES DO NEGÓCIO 
8 
7 Modelo Objecto 
9 
8 Objecto de Automação 
10 
8 Requerimentos funcionais e não funcionais 
10 
8.1 Requerimentos funcionais 
10 
8.2 Requerimentos não funcionais 
11 
9 ACTORES E CASOS DE USO DO SISTEMA 
12 
9.1 Actores 
12 
9.2 Casos de uso do sistema 
12 
9.3 Diagrama de Caso de uso do sistema 
12 
9.4 Descrição dos casos de uso do sistema 
13 
10 BIBLIOGRAFIA 
16 
 

 
 1
1. Descrição do negócio 
Na secretaria da UNIC se deseja automatizar o processo de matrícula e controle dos 
resultados docentes dos alunos da Instituição. Quando um estudante se matricula no 
curso lhe é solicitado seus dados pessoais e se elabora uma ficha de inscrição. Esta 
ficha contêm os dados pessoais do aluno como número do BI, nome, apelidos, telefone, 
direcção particular e grupo ao que pertence. Ao finalizar cada curso escolar os 
professores entregam na secretaria docente as actas de notas com uma lista com os 
nomes e apelidos dos estudantes que receberam as disciplinas durante o curso e as 
notas que alcançaram e o exame final, no caso de não ter aprovado no exame final e a 
nota final que alcançaram na disciplina. Com estas actas, a secretaria elabora um 
certificado de notas contendo os resultados alcançados pelo aluno durante do curso, 
assim como a media geral. Por último, este certificado é arquivado na ficha do dito aluno, 
dando a possibilidade de ser consultada em qualquer momento pelo aluno e seus 
professores. 
 
2 Processos 
2.1 Realizar matrícula  
⮚ Elaboração de ficha escolar a partir dos dados oferecidos pelo estudante.  
2.2 Elaborar certificados de notas 
⮚ Recepção das actas de notas.  
⮚ Elaboração dos certificados de notas.  
⮚ Arquivo dos certificados de notas elaborados. 
2.3 Consultar resultados docentes  
⮚ Obtenção de informação a partir dos certificados de notas arquivados.  
 
 
 
 
 
 
 
 

 
 1
3 Actores e casos de uso do negócio 
 
3.1 ACTORES DO NEGÓCIO 
Actores do negócio 
Justificação 
Estudantes 
O Estudante é o que inicia algumas das acções 
que dá começo aos processos de negócio 
analisados, e ao mesmo tempo é o principal 
beneficiado com o resultado dos ditos 
processos de negócio. 
Professores 
O Professor é o que inicia algumas das acções 
que dá começo aos processos de negócio 
analisados, e ao mesmo tempo é beneficiado 
com o resultado dos ditos processos de 
negócio. 
 
3.2 CASOS DE USO DO NEGÓCIO 
Casos de uso do negócio 
Justificação 
Realizar matricula 
Realizar Matrícula permite a matrícula de 
novos estudantes na faculdade. Este caso de 
uso é disparado pelo Estudante. 
Elaborar certificado de notas 
Elaborar Certificado de Nota permite registar 
os resultados académicos dos estudantes. 
Este caso de uso é disparado pelo Professor.  
Consultar resultado docentes 
Consultar 
Resultados 
Docentes 
permite 
conhecer 
os 
resultados 
docentes 
dos 
estudantes. Este caso de uso é disparado pelo 
Professor e/ou o Estudante. processos de 
negócio. 
 
 

 
 1
4. DIAGRAMA DE CASOS DE USOS DO NEGÓCIO 
Diagrama de caso de uso do negócio 
 
5 DESCRIÇÃO DOS CASOS DE USO DO NEGÓCIO 
5.1 REALIZAR MATRICULA 
Caso de uso realizar do Negocio 
Realizar Matrícula 
Actores 
Estudante 
Propósito 
Permitir que o estudante seja matriculado na 
faculdade 
RESUMO: O caso de uso começa quando o estudante faz a sua solicitação de matrícula. A 
secretaria docente verifica que o estudante esta na lista de novos ingressados e conclui quando 
a secretaria docente elabora a ficha escolar do estudante. 
 
Acção do Actor 
Resposta do Negócio 
1- O estudante solicita a secretaria docente 
ser matriculado. 
1.1- A secretaria docente solícita os dado 
pessoais.  
1.2- A secretaria docente verifica que o 
estudante aparece na lista de novos 
ingressados. (CA1)  
1.3- A secretaria docente elabora a ficha 
escolar. 
Prioridades 
 
Melhorias 
 
Cursos alternos: CA1- Se o estudante não aparece na lista de novos ingressos conclui o caso 
de uso 

 
 1
 
 
5.2 ELABORAR CERTIFICADOS DE NOTAS 
Caso de uso do Negocio 
Elaborar Certificados de Notas 
Actores 
Professores 
Propósito 
Registar Resultados académicos dos Alunos 
RESUMO: O caso de uso começa quando os professores entregam as actas de notas a 
secretaria docente. A secretaria docente elabora os certificados de notas. O caso de uso termina 
quando a secretaria arquiva os certificados de notas elaborados.  
 
Acção do Actor 
Resposta do Negócio 
1- O Professor entrega a acta de notas a 
secretaria docente 
1.1- A secretaria docente verifica que a acta 
esta correcta. (CA1)  
1.2- A secretaria docente elabora o certificado 
de nota para cada estudante. (CA2).  
1.3- A secretaria docente arquiva os 
certificados elaborados 
Prioridades 
 
Melhorias 
 
Cursos alternos: CA1- Em caso de que a acta de nota não esta correcta, se devolve ao 
professor e termina o caso de uso.  
CA2- Em caso de que o certificado já esta elaborado, o actualiza. 
 

 
 1
 
 
5.3 CONSULTAR RESULTADOS DOCENTES 
Caso de uso do Negocio 
Consultar resultados docentes 
Actores 
Estudantes, Professores 
Propósito 
Mostrar informação acerca dos  
resultados docentes dos alunos. 
RESUMO: O caso de uso começa quando um estudante ou um professor solicita informação 
sobre os resultados docentes. A secretaria docente realiza uma busca dos dados pedidos e 
finaliza quando elabora uma ficha com os resultados obtidos.  
 
Acção do Actor 
Resposta do Negócio 
1- O estudante ou professor solicita 
informação sobre os resultados docentes. 
1.1- A secretaria docente realiza uma busca 
dos dados pedidos nos certificados de notas. 
CA1.  
1.2- A secretaria docente elabora uma ficha 
com os resultados da busca efectuada. CA2 
 
Prioridades 
 
Melhorias 
 
Cursos alternos: CA1- Em caso de que a acta de nota não esta correcta, se devolve ao 
professor e termina o caso de uso.  
CA2- Em caso de que o certificado já esta elaborado, o actualiza. 
 

 
 1
 
 
6 Trabalhadores e entidades do negócio 
6.1 TRABALHADORES DO NEGÓCIO 
Actores do negócio 
Justificação 
Secretaria docente 
A secretaria docente realiza todo o trabalho 
interno do negócio. Será a mais beneficiada 
com o sistema. 
 
6.2 ENTIDADES DO NEGÓCIO 
Entidades do negócio 
Justificação 
Ficha escolar 
A secretaria docente realiza todo o trabalho  
interno do negócio. Será a mais beneficiada  
 
com o sistema. 
Actas de notas 
 
Certificados de notas 
 
 
 
 
 
 
 
 
 

 
 1
7 Modelo Objecto 
Modelo Objecto 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 1
8 Objecto de Automação 
 
Automatizar o processo de matrícula e controle dos resultados docentes Unic, o sistema 
deve permitir registar os dados dos estudantes em uma ficha escolar (ID, nome, apelidos, 
telefone, direcção particular e grupo ao que pertence). A ficha escolar é única para cada 
estudante e pode fazer actualizações em seus dados durante os 5 anos que dura o curso. 
Por outra parte o sistema deve permitir também armazenar os resultados docentes 
obtidos através das actas de notas nos certificados de notas de cada aluno. Para poder 
realizar estas duas actividades é necessário que o sistema permita a secretaria docente 
aceder a ele, usando um nome de usuário e contra-senha, requisito indispensável para 
poder fazer qualquer tipo de operação sobre os dados armazenados. Por último os 
usuários devem poder fazer consultas ao sistema acerca dos resultados docentes, para 
que não será necessária a autentificação ao sistema.  
8 Requerimentos funcionais e não funcionais 
8.1 Requerimentos funcionais 
⮚ Criar nova ficha Escolar quando se realiza a matrícula a um estudante.  
⮚ Actualizar dados na ficha Escolar.  
⮚ Permitir que se armazena os resultados docentes obtidos  
⮚ Criar novo Certificado de Notas, ao concluir cada semestre.  
⮚ Actualizar dados nos Certificado de Notas.  
⮚ Permitir a autentificação no sistema através de um nome de usuário e uma  
⮚ Contra-senha.  
⮚ Permitir realizar consulta dos resultados docentes. 
 
 
 
 
 
 
 
 
 

 
 1
8.2 Requerimentos não funcionais 
Aparência ou interfaz externa  
● Muito legível.  
● Simples de usar.  
● Interactivo.  
Usabilidade  
● Fácil de usar por pessoas sem muita experiencia.  
● Interfaz gráfica consistente.  
● Diminuição ou eliminação dos erros de cálculos ao ser estes automáticos.  
● Disponibilidade de ajuda para o usuário.  
● Rapidez na obtenção dos dados desejados.  
Rendimento  
● Grande disponibilidade, ao ser acessível desde qualquer lugar da intranet.  
Suporte  
● Fácil manutenção.  
● Extensibilidade.  
Portabilidade  
● Poderá ser usado em qualquer plataforma que suporte PHP, MySQL, Apache  
            (Linux, Windows, Mac…).  
Software  
● Sistemas Operativos Windows XP ou Superior, Linux e/ou Mac.  
● Internet Explorer 5.0+, Mozilla Firefox, Opera.  
Hardware  
● Placa de rede Ethernet 10/100 Mbps.  
Desenho e implementação  
● Estandartes requeridos: W3C XHTML 1.0, W3C CSS.  
● Linguagem de Programação: Pascal.  
● Ferramentas: Borland Delphi7, Navicat, Dreamweaver  
Segurança  
● Os dados seram protegidos, só se poderá realizar operações sobre eles depois de fazer-
se autentificação ao sistema, será necessária uma conta de usuário com sua contra-
senha. 

 
 1
9 ACTORES E CASOS DE USO DO SISTEMA 
9.1 Actores 
 
Actores 
Justificação 
Secretaria Docente 
É que começa todos os casos de usos e todos 
os 
processos 
analisados 
delimita-se 
a 
executá-los. 
Cliente 
É que começa o Caso de uso Consultar 
Resultados Docente beneficia-se a obter tais 
resultados. 
 
9.2 Casos de uso do sistema 
● CU Gestão de Matricula  
● CU Validar Usuário  
● CU Gestão dos Resultados Docentes  
● CU Consultar Resultados Docentes 
 
9.3 Diagrama de Caso de uso do sistema 
 
 
 

 
 1
9.4 Descrição dos casos de uso do sistema 
CASO DE USO 
VALIDAR USUARIO 
ACTORES 
Secretaria Docente 
PROPOSITO 
 Certificar que o usuário tenha acesso ao 
sistema. 
RESUMO 
 O caso de uso começa quando a Secretaria 
Docente introduz seu nome de usuário e 
contra-senha para aceder ao sistema. Aqui 
será validado os dados e se forem correctos 
aceder ao sistema, caso contrário solicita os 
dados novamente. 
Pre-condição 
 
Curso normal de eventos 
Acção do actor 
Resposta do Sistema 
1.  A Secretaria Docente introduz 
nome do usuário e contra-senha 
2.  O sistema verifica que o usuário existe 
e que a contra-senha seja correcta. 
3. O sistema redirecciona ao usuário ao 
panel de controlo CA1 
Cursos alternados 
 CA1 Se o usuário não existe ou a contra-
senha é incorrecta notifica-se ao usuário e é 
solicitado novamente os dados. 
Prioridades 
 
Melhorias 
 
Pos-Condição 
A instancia do caso de uso termina quando se 
acessa ao sistema. 
 
 

 
 1
CASO DE USO 
GESTÃO DE MATRICULAS 
ACTORES 
Secretaria Docente 
PROPOSITO 
 Matricula dos estudantes 
RESUMO 
 O caso de uso começa quando a Secretaria 
Docente introduz os dados dos estudantes. Se 
cria um expediente escolar ao estudante com 
os seguintes dados: numero do cartão de 
identidade, nome, apelidos, telefone, endereço 
e grupo a que pertence. 
Pre-condição 
Que o usuário se tenha identificado 
Curso normal de eventos 
Acção do actor 
Resposta do Sistema 
1. A Secretaria Docente introduz os 
dados dos estudantes. 
2. O sistema verifica a não existência do 
expediente. 
3. O 
sistema 
cria 
o 
expediente 
e 
armazena os dados do Estudante. CA1 
Cursos alternados 
 CA1 Se o expediente existe actualiza os 
dados do Estudante. 
Prioridades 
 
Melhorias 
 
Pos-Condição 
A instância de caso de uso termina quando se 
tem salvado correctamente os dados dos 
estudantes. 
 
CASO DE USO 
GESTÃO DOS RESULTADOS DECENTES 

 
 1
ACTORES 
Secretaria Docente 
PROPOSITO 
 Registrar os resultados docentes obtidos pelo 
estudante. 
RESUMO 
O caso de uso começa quando a Secretaria 
Docente introduz os resultados obtidos pelo 
estudante durante o curso. se cria um 
certificado de notas com os seguintes dados:  
número do estudante, nome, apelidos, notas, 
media geral e grupo ao que pertence. 
Pre-condição 
Que o usuário se tenha identificado 
Curso normal de eventos 
Acção do actor 
Resposta do Sistema 
1. A Secretaria Docente introduz 
resultados docentes dos 
estudantes 
2. O sistema obtém dado de expediente 
escolar do estudante. CA1 
3. O sistema cria o certificado de notas 
com os dados do aluno. 
4. O sistema armazena os resultados 
obtidos pelo estudante em curso. 
Cursos alternados 
 CA1 Se o expediente existe actualiza os 
dados do Estudante. 
Prioridades 
 
Melhorias 
 
Pos-Condição 
A instância do caso de uso termina quando se 
há salvado correctamente os dados de 
estudante. 
 

 
 1
 
 
 
 
 
 
 
 
 
 
 
 
 
 
10 BIBLIOGRAFIA 
 
▪ 
Sommerville, I. Engenharia de Software, 8ª pearson Education ISBN: 
9788588639287 Portugal 2007. 
▪ 
Pressman, 
Roger. 
Engenharia 
de 
Software 
McGraw-Hill-6ª 
ISBN: 
97885633080096, Brasil 2007. 
▪ 
Koscianski, A. e Dos Santos S., Michel. Qualidade de Software. Novatec, 2ª Ed. 
ISBN-10: 8575221124. Brasil, 2007. 
▪ 
Jacobson, I. Rumbaugh, J. Booch, J. El proceso unificado de desarrollo de 
software RUP, Félix Varela, Cuba, 2005. 
▪ 
Pressman, R. Engenharia de Software, McGraw-Hill-6 ª, Brasil, 2006, ISBN: 
97885633080096 
▪ 
Russ Miles & Kim Ham 
▪ 
ilton; Learning UML 2.0, O'Reilly, 2006. ISBN: 0-596-00982-8  

 
 1
▪ 
Silva, Alberto Manuel Rodrigues da; UML, metodologias e ferramentas  CASE. 
ISBN: 989-615-009-5 
▪ 
Humphrey, Watts S; A discipline for Software engineering. ISBN: 0-201-54610-8 
▪ 
Ian Sommerville; Software engineering (9th edition), Addison-Wesley, 2011. ISBN: 
9780137035151 
▪ 
NUNES, M.; O´NEIL, H. – Fundamental de UML. FCA Editora 
▪ 
CABRAL, Adelino Manuel de Oliveira; ARAÚJO, Lúcio Goretti de – UML – Unifield 
Modeling Language. 
 
 


