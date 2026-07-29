---
tipo: "Fonte Original"
origem: "Rar Eng- Software Ii Caso De Estudo"
---

# Rar Eng- Software Ii Caso De Estudo

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

Caso de estudo

"Hotel X"
Um exemplo prático para o assunto de Engenharia de Software 




Autor
Zaide Evaristo Massoli Dos Santos
zaide.massoli@unic.co.ao.com
Universidade Internacional do Cuanza
2026-03-19

índice
Introdução 1
1. Modelagem de Negócios 2
1.1 Processos de negócios 2
1.1.1 Técnicas de captura de informação 2
1.1.2 Artefacto "Descrição literal das CUs ​​de negócios" 8
1.1.3 Artefacto "Descrição de alto nível de UC de negócios" 13
1.1.4 Artefacto "Diagrama de Caso de Uso de Negócios" 18
1.1.5 Artefacto "Diagramas de actividades" 20
1.2 Artefacto "Modelo de Objetos de Negócios" 25


Introdução
O desenvolvimento de qualquer sistema de software exige um trabalho coordenado da equipe de desenvolvimento e intercâmbio permanente com os usuários finais do produto são os únicos que deve finalmente ser satisfeitos com a automação alcançado. Alguma metodologia deve ser seguida para desenvolver o software que orienta os esforços dos desenvolvedores em todos os momentos, a fim de obter um produto de qualidade e no menor tempo possível.
Este Estudo de Caso trata da automação dos processos fundamentais relacionados à reserva de quartos realizados pelo "Hotel X", que até então são realizados manualmente. A metodologia proposta pelo RUP é seguida e, portanto, o desenvolvimento passa pelas disciplinas ou fases de Modelagem de Negócios, Captura e Análise de Requisitos. artefactos fundamentais de cada um daqueles que foram vistos em sala de aula, discutindo e explicando diferentes aspectos que podem ajudá-los a entender como ele está fazendo os processos são obtidos.
 
O objectivo geral deste trabalho é focado no suporte da disciplina Engenharia de Software-1, no aprendizado das disciplinas supracitadas.
O documento está estruturado em três capítulos que abrangem Modelagem de Negócios, Captura de Requisitos e Análise dos mesmos.
 
1. Modelagem de Negócios
Introdução ao capítulo
Neste capítulo, os artefactos de Modelagem de Negócios do "Hotel X" são desenvolvidos. Os processos actuais realizados nos mesmos ligados às reservas de quartos são descritos e estes são modelados com a realização dos diagramas de actividades; Melhorias nos negócios são propostas e, finalmente, um diagrama do modelo de objecto de negócios é obtido.




1.1 Processos de negócios
Nesta secção, um conjunto de elementos de interesse que giram em torno dos processos que ocorrem no hotel, ou seja, a CU do negócio, serão abordados. Abrange toda a modelagem dinâmica de negócios.

1.1.1 Técnicas de captura de informação
Sabe-se que para capturar todas as informações necessárias sobre os processos de negócios existem várias técnicas que podem ser usadas entre destacando as entrevistas e questionários, a primeira delas com mais vantagens para este caso em que há falta de tema.
O responsável por descrever os processos de negócios, entre outras tarefas, é o Business Designer (DN). Isso tem que ter a capacidade de ser um bom ouvinte e ser capaz de orientar a entrevista, é muito comum que o usuário software dê muito processo de exposição e o DN deve ser capaz de distinguir entre informações relevantes e irrelevantes.
Para modelagem de negócios "Hotel X" DN entrevistou o gerente das mesmas, que são reproduzidas a seguir alguns trechos:
"...."
- DN: Quais são os procedimentos que são seguidos para reservar um quarto de hotel?
- Representante: O processo de reservar um quarto no hotel começa quando o cliente chega ao hotel e fazer a solicitação de alojamento para o (a) mesmo recepcionista. (Informações relevantes: já é conhecido quem é o actor de negócios que inicia o caso de uso). Geralmente, o cliente não precisa esperar muito para ser atendido, pois muitos clientes não chegam ao mesmo tempo. Antes, quando não havia hotel que agora temos na frente, se muitos clientes vieram e, em seguida...
- DN: Sim, mas bom... O que você me explicou sobre o pedido de acomodação? Isso é muito interessante (Observe como o DN interrompeu a Gerente elegantemente como este se desvia daquilo que é realmente importante. Isto conduz a entrevista para obter informações relevantes do processo, o que é uma habilidade essencial para desempenhar esse papel.)
- Gerente: Ah sim. Quando o cliente faz o pedido de alojamento, o recepcionista do hotel solicita ao cliente o seu passaporte para confirmar a sua condição de turista estrangeiro e também verifica se é válido; no caso de o passaporte apresentar um problema que cancela sua validade, a recepcionista do hotel o rejeita e o processo é interrompido; Se, por outro lado, o passaporte é completamente válido, o recepcionista do hotel captura os dados pessoais do cliente em um novo formulário de inscrição para hospedagem. Para completar as informações necessárias para reservar um quarto, o recepcionista do hotel pergunta ao cliente as características de sua estadia.

- DN: Três perguntas sobre isso.
1. O que é verificado para ver se o passaporte é válido?
2. Quais dados pessoais são colectados exactamente?
3. Quando você menciona "características da estadia", o que exactamente você quer dizer?
(Aqui você pode ver como o DN investiga até as informações mais básicas. Isso é necessário porque o usuário, e geralmente tem um alto conhecimento dos processos de negócio, omite a informação que é óbvio para ele, mas que os desenvolvedores devem também saber para que o futuro software atenda plenamente às necessidades.)
- Gestor: Em relação à primeira pergunta: O que se verifica no passaporte é que tem os carimbos necessários, que é válido, que o visto está em ordem, etc. (Note-se que, embora a utilização etc. indica que existem mais itens que não foram referidas, o DN não continua a aumentar, uma vez que compreende que este processo não pode ser substituída por um processo automatizado e, portanto, não vale a pena aprofundamento de o mesmo.). Quanto à segunda questão: os dados colectados são Nome e Sobrenome, Número do Passaporte e Nacionalidade. Respondendo ao terceiro: as características da estadia não é diferente do número de pessoas, data de partida, tipo de quarto em que você quer ficar e a data da reserva é adicionada.
- DN: Quais são os tipos de quartos que podem existir no hotel? (Esta questão é muito importante. Em todos ou quase todos os processos são classificadores predefinir informações. Você precisa saber esses classificadores, porque senão você poderia cometer erros no futuro alocação sistema não classificada a quaisquer dados valores manipulados.)
- Gerente: Os quartos são classificados em simples ordinário, duplo comum, suite dupla, suite tripla.
- DN: E no caso de um cliente solicitar um duplo comum, por exemplo, e especificar que o número de pessoas é 3 em vez de 2, o quarto está reservado?
- Gerente: Não. Sempre o quarto solicitado deve ter capacidade para o número de pessoas especificado. Isso não pode ser violado. (Aqui está uma regra de negócios).
- DN: Quando os detalhes do aplicativo são concluídos, como o processo continua?
- Gerente: Depois disso, a recepcionista do hotel começa a procurar no quarto. Essa busca é feita apenas pela análise da disponibilidade de quartos que são o tipo de quarto solicitado pelo cliente; para cada um deles, o livro de reservas é pesquisado se estiver desocupado. No caso de não encontrar um quarto que satisfaça os desejos do cliente, o recepcionista do hotel pergunta se ele / ela quer mudar as características da sua estadia; se ele não quiser, o recepcionista do hotel devolve o passaporte e o processo termina. Por outro lado, se o cliente quiser, a recepcionista habilita um novo formulário de inscrição para hospedagem e o processo é repetido a partir da captura de seus dados pessoais.
Em caso de encontrar um quarto, o recepcionista do hotel solicita o pagamento correspondente ao seu pedido; Esse pagamento pode ser feito em dinheiro ou cheque; o recepcionista do hotel mantém o pagamento na caixa registradora e prossegue com a preparação do formulário de reserva, no qual forma os dados pessoais do cliente e o número da sala entregue; em seguida, anexar o formulário de reserva ao formulário de apresentação de alojamento, formando assim o arquivo de alojamento para o qual ele atribui o código correspondente e preparar o comprovante de reserva. Finalmente, o recepcionista do hotel atribui as informações referentes à nova reserva no livro de reservas, mantém o arquivo de hospedagem no arquivo de arquivos de hospedagem, entrega o comprovante de reserva, bem como a chave do quarto atribuído ao cliente e ele retorna seu passaporte. O cliente ocupa o quarto.
- DN: Quais informações estão não incluiu comprovante?
- Gestor: Código do ficheiro de candidatura, data de partida, carimbo do hotel.
- DN: Esses registros de hospedagem são por quanto tempo eles são mantidos? Para que servem? Qual é o código?
- Gerente: Esses arquivos são mantidos por um mês; É uma medida de precaução porque tem havido casos de clientes, que por um mau uso deterioram a quarto ou algum meio existente nela ou algo similar e nestes casos você pode contar com os dados do cliente para tomar alguma acção legal com o mesmo. Após o mês, esses arquivos são transferidos para um arquivo de registros de hospedagem por um ano. Relacionado ao código vou te dizer que existe uma regra para a geração do mesmo e é que ele está satisfeito com a data, seguido do número da sala. (Aqui está outra regra de negócios.)
- DN: Bem, não se pensou na possibilidade de esses arquivos serem usados para identificar clientes regulares e, talvez, de alguma forma, dar a eles um tratamento diferenciado, ou talvez saber qual quarto eles ocuparam em outros quartos e até onde é possível atribuir a você aquele quarto com a qual você provavelmente se sente familiar? Coisas assim (é necessário que o DN seja capaz de propor melhorias ao negócio). Desta forma, o futuro sistema não se limita a automatizar o que é feito actualmente no negócio, mas também incorpora coisas que podem não ser feitas pela empresa. incapacidade actual.)
- Gerente: Isso é algo que seria muito bom mas hoje em dia é impossível para nós fazê-lo, pois vários desses arquivos são gerados diariamente e armazenados, assim como a busca pelos dados de um cliente é realmente impossível quando o cliente está à nossa espera responder
- DN: E no caso de você precisar de um arquivo, como é feita a busca no arquivo de hospedagem?
- Gerente: Você se refere ao arquivo de hospedagem? (Aqui você pode apreciar a importância de, uma vez conhecidos, respeitar os termos usados no negócio, os desenvolvedores devem falar em "a linguagem dos usuários" durante a modelagem do negócio.)
DN: Sim, é isso que eu quero dizer.
- Gerente: Este arquivo tem uma secção dedicada a cada quarto para facilitar a busca; sempre o último arquivo de cada quarto corresponde à última reserva feita para ele.
- DN: Com relação ao livro de reservas, o que exactamente está escrito nele? Que estrutura tem?
- Gerente: Bem, esse livro é alterado anualmente. Como o arquivo de registros de hospedagem é dividido por secções correspondentes aos quartos; neste caso, tem 10 páginas consecutivas para cada quarto e, nelas, especifica o estado do quarto. Por exemplo, se um cliente solicita um quarto duplo comum, a recepcionista pesquisa o livro em busca de quartos desse tipo até encontrar um, cuja última incidência informada é uma saída ou não há incidência (novo livro). Em seguida, adicione um incidente de entrada no quarto que nada mais é do que especificar que uma entrada foi feita, a data de partida e o código do arquivo de acomodação correspondente.
- DN: Agora que você mencionou isso a partir da pesquisa no livro operativo, deve o recepcionista do hotel saber de cor o tipo de quarto para cada um deles?
- Gerente: Embora, na prática, este seja o caso, existe um documento na posse da recepcionista, onde esta informação é necessária.
- DN: Este documento é reconhecido por algum nome específico? (Esta questão é muito importante.) O DN deve tentar identificar as entidades que são gerenciadas no negócio pelos termos em que são conhecidas, deve ser lembrado que o que é modelado pelos desenvolvedores também deve ser entendido pelos usuários.)
- Gerente: Sim. É chamado de lista de distribuição de conforto e capacidade.
- DN: Uma última pergunta; Existe a possibilidade de fazer reservas para datas futuras?
- Gerente: Isso foi tentado a ser implementado, mas na prática tem sido impossível para nós porque o processo de reserva é muito complicado e lento, o que é contra nossa operação.
- DN: Esse é um dos seus objectivos? (É extremamente importante que o DN possa saber quais são as expectativas e metas dos usuários para o software contemplar e seu impacto na organização é maior.)
- Gerente: Essa é uma das coisas que mais queremos.
- DN: Muito obrigado. Suas respostas foram muito úteis. (Embora a educação é algo que deve estar presente em todas as pessoas, no DN não pode faltar.) O trabalho realizado pelo usuário deve ser respeitado em todos os momentos.
"...."
A partir dessa entrevista, o DN foi capaz de determinar que há um processo bem definido no negócio que consiste na reserva de quartos, que ele já é capaz de descrever sinteticamente. (O DN deve ter as habilidades necessárias para dividir todo o negócio em processos bem definidos, bem como sintetizar as informações obtidas dos usuários e com sua perspectiva do desenvolvedor).
Da mesma forma, o resto dos processos que ocorrem no Hotel X devem ser identificados para descrevê-los através dos diferentes artefactos que serão vistos abaixo.

1.1.2 Artefacto "Descrição literal do CU do negócio"
O CU do negócio pode ser descrito literalmente sem seguir qualquer estrutura pré-estabelecida. A descrição deve contemplar tudo o que acontece dentro do processo, embora o DN, de acordo com sua experiência, possa omitir certos elementos que, do ponto de vista da automação, são totalmente irrelevantes.
Processo "Reservar quarto"
O processo de reserva de um quarto começa quando o cliente faz o pedido de acomodação para a recepcionista. O recepcionista do hotel verifica o passaporte do cliente; Caso o passaporte apresente um problema que cancela sua validade, o recepcionista do hotel o rejeita e o processo é interrompido; Se, por outro lado, o passaporte for completamente válido, o recepcionista do hotel cria um novo formulário de inscrição para hospedar os dados pessoais do cliente que são necessários, que são:
Primeiro e último nome
Número do passaporte
Nacionalidade
O recepcionista do hotel solicita ao cliente as características da sua estadia e também o mostra no pedido de alojamento; Esta informação inclui:
Número de pessoas
Data de partida
Tipo de quarto em que você deseja se hospedar (simples comum, duplo comum, suite dupla, suite tripla).
Depois, a recepcionista do hotel começa a procurar no quarto. Essa busca é feita apenas pela análise da disponibilidade de quartos que são o tipo de quartos solicitada pelo cliente; para cada um deles, o livro de reservas é pesquisado se estiver desocupado. Para saber o tipo de quarto em cada quarto, o recepcionista do hotel usará o documento Lista de conforto e distribuição de capacidade. No caso de não encontrar um quarto que atenda aos desejos do cliente, o recepcionista do hotel pergunta ao cliente se ele deseja alterar as características de sua estadia; se ele não quiser, o recepcionista do hotel devolve o passaporte e o processo termina. Por outro lado, se o cliente assim o desejar, a recepcionista possibilita uma nova forma de solicitação de hospedagem e o processo é repetido a partir da captura de seus dados pessoais. Em caso de encontrar um quarto, o recepcionista do hotel exige o pagamento correspondente ao seu pedido e o salva na caixa registradora; em seguida, procede à preparação do formulário de reserva, que reflete os mesmos dados pessoais do cliente e o número de quarto entregue; em seguida, anexar o formulário de reserva ao formulário de solicitação de hospedagem, formando assim o arquivo de acomodação, para o qual ele atribui o código correspondente e preparar o comprovante de reserva. Este comprovativo inclui:
Código do arquivo do aplicativo
Data de partida
Carimbo do hotel
Além disso, o recepcionista do hotel atribui as informações sobre a nova reserva no livro de reservas. Isso é simplesmente para especificar que uma entrada foi feita, a data de partida e o código do arquivo de hospedagem correspondente. O passaporte é devolvido ao cliente, o recibo da reserva é fornecido, assim como a chave do quarto atribuída e o cliente ocupa o quarto.
Regras de negócios para o processo
Uma reserva não pode ser feita se o tipo de quarto solicitado pelo cliente tiver uma capacidade menor que o número de pessoas especificado pelo cliente para essa reserva.
O pagamento de reservas pode ser feito em dinheiro ou cheque.
Os registros de hospedagem são mantidos no Arquivo de Hospedagem por um mês.
Os registros de hospedagem são mantidos no arquivo de registros hospedados por um ano.
O código para os registros de hospedagem é gerado pela concatenação da data em que a reserva é feita, seguida pelo número do quarto.
O livro de operações de reserva é alterado anualmente.
Melhorias no processo
Como melhorias para este processo são propostas:
Como haverá um controle automatizado de informações, as reservas podem ser feitas para datas futuras.
Os serviços de um banco que fornece uma interface de aplicativo para realizar transacções com cartão de crédito serão contratados. Isso possibilitará fazer reservas on-line usando um módulo da Web publicado na Internet e efectuando o pagamento inserindo as informações do cartão de crédito. Também será possível fornecer a possibilidade de que o cliente que fizer a reserva directamente no hotel possa efectuar o pagamento usando o cartão de crédito.
Propõe-se eliminar a entrega do comprovante de reserva apenas possuir um código gerado para a referida reserva.
As informações existentes nos arquivos de hospedagem serão mantidas por 3 anos e serão utilizadas para que ao atribuir um quarto a um cliente seja verificado se este foi em um momento anterior e na medida do possível é atribuído o Mesmo quarto que você já usou naquele momento.
Processo de "cancelar reserva"
O processo de cancelamento começa quando o hóspede chega ao hotel e solicita o cancelamento de uma reserva feita anteriormente por ele. O recepcionista do hotel solicita o comprovante de reserva, localiza o arquivo de hospedagem, faz o desconto para os dias em que o convidado foi hospedado e devolve o dinheiro restante. Depois disso, o recepcionista do hotel atribui as informações sobre o fechamento da reserva no livro de reservas, que nada mais é do que especificar que um quarto foi feita e isso completa o check-in. O quarto está disponível para uma nova reserva.
Regras de negócios para o processo
Todas as reservas podem ser canceladas pelo hóspede, caso ele deseje.
Quando um hóspede deseja cancelar a sua reserva, o dinheiro restante é devolvido após a aplicação do desconto para a estadia.
Para o cancelamento, o cliente deve trazer o comprovante de reserva para a busca do arquivo de hospedagem.

Melhorias no processo
Propõe-se que você também pode cancelar a reserva on-line e para isso o cliente deve inserir o código de reserva (que substitui o comprovante da reserva) e os dados do cartão de crédito para o retorno do dinheiro. Você também pode cancelar directamente no hotel, dando o código de reserva e o cartão de crédito para a recepcionista, que é assistida por um leitor de cartão.
Duas novas regras são adicionadas ao processo aprimorado.
Se o cancelamento for feito 72 ou mais horas antes da data de entrada da reserva, o valor total pago pela referida reserva será reembolsado.
Se o cancelamento for feito com menos de 72 horas de antecedência, o cliente será reembolsado em 90% do valor pago pela referida reserva; dito desconto é feito para o conceito congelado do quarto.
Processo de "quebra de relatório"
Se depois de ter sido ficado, o quarto atribuído ao hóspede está fora de serviço, deve relatá-lo para o recepcionista do hotel, que enviou uma equipe de manutenção para o quarto com o objectivo de que este será reparado no momento. No caso de a interrupção não poder ser reparada momentaneamente, o quarto reportado será reparado e, até que esteja novamente disponível, não pode ser considerado na atribuição de quartos aos clientes; Por outro lado, outro quarto disponível deve ser reatribuído ao hóspede. Espaço para a realocação de uma pesquisa inicial é realizada por meio da análise da disponibilidade dos quartos que são do tipo de quarto solicitado pelo cliente, obter essa informação a partir da hospedagem de aplicativos encontrados no dossiê para hospedagem. Para cada quarto, o procedimento é: o livro de reservas é pesquisado se o quarto estiver desocupado. Se um quarto não for encontrado nesta primeira busca, um quarto de conforto superior será pesquisada.
Processo de "Terminar reserva"
O processo começa quando chega o dia e hora de conclusão da reserva, o hóspede entrega a chave do quarto ocupado ao recepcionista do hotel. O Recepcionista do hotel atribui a informação referente à conclusão da reserva no livro operativo de reservas que não é mais que especificar que uma saída foi feita com a qual o registro de entrada é completado. O quarto está disponível para uma nova reserva.










.1.3 Artefacto "Descrição de alto nível de CU de negócios"
Nesta secção, analisaremos a descrição de alto nível da CU do negócio. Deve ser lembrado que esta é uma tarefa realizada pelo DN. A tabela a seguir mostra a descrição da sala de reserva de CU.

1.1.4 Artefacto "Diagrama de Caso de Uso de Negócios"
A Figura 1 mostra o diagrama de CU do Negócio no qual os processos de negócios representados pelo CU são apresentados. Esta é uma primeira abordagem a esses processos, realizando uma divisão natural dos negócios com base nas informações colectadas. No entanto, em muitos casos, ao analisar O CU encontrado no negócio, você pode encontrar sequências de actividades que são repetidas em algumas delas. Em situações como essas, você deve sempre considerar a possibilidade de agrupar essas actividades que são comuns a mais de um CU como um processo independente, desde que isso não impeça a compreensão do diagrama.
No caso do negócio "Hotel X", pode-se perceber o que se mencionou acima acontece; para fazer a reserva de um quarto (Processo de "reserva de quarto") a busca por um quarto deve ser feita de acordo com os dados do pedido do cliente; Por outro lado, quando o hóspede reportar uma quebra em seu quarto (Processo "Report breakage"), se isso não puder ser resolvido imediatamente, um quarto deverá ser reatribuída ao cliente, para que a busca seja realizada da mesma forma de um quarto disponível de acordo com os dados do pedido de hospedagem feito pelo mesmo; então a busca por um quarto disponível de acordo com os dados do pedido do cliente é um processo comum para os processos "Reserva de quarto" e "Quebra Relatório" sendo para o primeiro destes uma parte inescapável, sempre necessária para a conclusão do processo, enquanto para o segundo é uma parte que nem sempre é feita, mas sob uma condição (neste caso a impossibilidade de reparar o quarto imediatamente).
Devido às características da dependência desses processos com o novo processo que resultaria ao agrupar actividades comuns, vale a pena pensar nas relações de inclusão e extensão entre CU, respectivamente. A Figura 2 mostra o Gráfico de CU do Negócio após refinar em correspondência com o que foi previamente analisado.







1.1.5 Artefacto "Diagramas de Actividades"
Nesta secção, a atenção será focada na CU da "Reserva". Os diagramas de actividade correspondentes a eles serão desenvolvidos.
O DN deve ser capaz de modelar os processos de acordo com as actividades realizadas dentro deles. Os diagramas de actividades constituem um primeiro passo para a algoritmização dos processos que são realizados na entidade e, portanto, constituem uma primeira abordagem para o futuro sistema. O DN deve ser capaz de descrever, com a ajuda do diagrama de actividades, tudo o que acontece no processo, de uma maneira que seja compreensível para os usuários… Os diagramas de actividade das Figuras 3, 4 e 5 detalham o CU de "Reservar Quarto" e a da Figura 6 descreve o CU "Search available room".





















Figura 3. Diagrama de actividades do CU Reservar quarto






Figura 4. Diagrama de actividade Elaborar Planilha de solicitação de hospedagem








Figura 5. Diagrama de actividade Elaborar reserva







Figura 6. Diagrama de Actividades do CU Pesquisar quarto disponível





Como pode ser visto em diagramas de actividades podem incluir uma grande quantidade de informações e pode ser muito útil para a compreensão de processos e também para ter uma ideia inicial do que a magnitude é alcançada com a automação. Como você pode ver, a "quarto de reserva" do CU foi capturada completamente em três diagramas, mas alcançando total compreensão do processo; esta é uma habilidade que não pode estar ausente no DN que consiste em gerenciar a complexidade dos diagramas. Você pode criar mais de um diagrama para o CU, agrupando um conjunto de actividades em uma que possa abranger as mesmas e, em seguida, criar outro diagrama para essa actividade. Note que as actividades podem ser coloridas em cores diferentes que tenham algum significado para os desenvolvedores; por exemplo, nos diagramas representados nas Figuras 3, 4, 5 e 6, as actividades de luz azul coloridas expressam que são contenção de um conjunto de actividades e, por conseguinte, têm associado um outro diagrama de actividade, enquanto que as actividades de cor vermelha representam para aqueles que serão automatizados.
Também é muito importante que os diagramas de actividades mostrem os objectos que são manipulados por trabalhadores e atores, assim como é claro em quais actividades eles constituem uma entrada e quais actividades são uma saída; Além disso, o DN deve expressar claramente os diferentes estados pelos quais os objectos podem passar durante a realização do caso de uso. A partir dos diagramas de actividades, é possível obter claramente as entidades de negócios que representam a primeira visualização das futuras classes persistentes (que contêm informações que devem durar ao longo do tempo) que darão vida ao software.
1.2 Artefacto "Modelo de Objectos de Negócios"
É importante observar que o Modelo de Objecto de Negócios serve o DN para representar todos os relacionamentos lógicos existentes entre as entidades de negócios e também identificar esses relacionamentos. Esse modelo é o primeiro diagrama de classes do sistema, portanto, o DN não deve perder nenhuma entidade comercial. Para o desenvolvimento desse artefacto, o DN deve ser capaz de diferenciar entre todos os objectos manipulados nos diferentes processos de negócios, que constituem entidades de negócios. A Figura 7 mostra o diagrama do Business Object Model que é obtido dos processos descritos. Observe no referido diagrama que, por exemplo, o objecto "Key" que foi manipulado em algum ponto no processo "Reserva de quarto" não está incluído, uma vez que para o sistema futuro isso não é significativo. Você também pode ver neste diagrama como é o relacionamento entre o arquivo de hospedagem e o formulário de reserva de entidades e o formulário de solicitação de hospedagem, que é um relacionamento de agregação porque, nesse caso, o primeiro é criado a partir de a união dos outros dois. Você também pode ver neste diagrama como o DN mostra a relação existente entre o trabalhador de negócios e as entidades de negócios. É muito importante que o DN seja consistente com o que é expresso nos diagramas de actividade ao preparar este dispositivo.

Figura 7. Modelo de objectos do negócio










