---
tipo: "Fonte Original"
origem: "Rar Sistemas Distribuídos E Programação Em Paralelo Trabalho De Socket De Rede"
---

# Rar Sistemas Distribuídos E Programação Em Paralelo Trabalho De Socket De Rede

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

Tema:     Soquete de Rede
- Comunicação de dois processos

Soquetes são empregados para o envio de mensagens através de rede, ou seja permitindo a comunicação entre dois pontos finais em uma rede. 
As aplicações mais comuns para soquetes são aplicações cliente-servidor , onde um cliente se comunica com um servidor peritindo a troca de mensagens.
Endereço de soquete: Combinação de IP com o número de porta.
Quando se cria um soquete de rede (socket) em programação, há três tipos de "escutas" ou estados principais que podem ser observados durante o processo de comunicação:
Escuta de Recebimento (Listen): No lado do servidor, o soquete é colocado em um estado de escuta (via função listen()). O servidor está aguardando conexões de clientes. Essa escuta não envolve o recebimento de dados diretamente, mas sim a espera de um pedido de conexão.
Escuta de Conexão (Accept): Uma vez que um cliente se conecta ao servidor, o servidor aceita essa conexão usando a função accept(). Esse processo cria um novo soquete dedicado para a comunicação entre o cliente e o servidor, permitindo que ambos possam enviar e receber dados de forma independente.
Escuta de Dados (Recv/Send): Após a conexão ser estabelecida, os soquetes podem ser usados para enviar e receber dados entre o cliente e o servidor. Esse processo envolve a escuta de mensagens ou pacotes de dados que são enviados através do soquete, utilizando funções como recv() para receber e send() para enviar dados.
Essas três "escutas" representam as fases principais envolvidas no estabelecimento e comunicação de redes através de soquetes: escuta para conexões, aceitação de conexões e comunicação de dados.











Trabalho prático de Exame
Tema: Comunicação e Sincronização em Sistemas Distribuídos
Implementar uma aplicação distribuída composta por 3 ou mais processos, que se comunicam entre si via sockets (TCP ou UDP).
Além da troca de mensagens, cada processo deve manter um relógio lógico de Lamport, garantindo a ordenação lógica dos eventos de envio e recebimento.
A aplicação deve simular um cenário realista de comunicação distribuída, como exemplo:
Um chat distribuído com múltiplos usuários
Um sistema de consulta distribuído (clientes solicitam dados a servidores)
Um jogo distribuído simples (ex: adivinhação de número com múltiplos clientes)
Requisitos Técnicos
Bibliotecas:
Socket
threading (opcional, mas recomendado)
Comunicação: TCP
Execução em localhost
Funcionalidades Obrigatórias
Relógio Lógico
Cada processo deve possuir:
Uma variável clock, inicializada em 0
Comunicação
O cliente:
Envia uma mensagem ao servidor
O servidor:
Recebe a mensagem
Atualiza seu relógio
Envia uma resposta ao cliente
Saída Esperada
O programa deve exibir no terminal:
Envio e recebimento das mensagens
Identificação do processo
Timestamp lógico atualizado
Cliente 1 enviou mensagem | Clock: 1
Servidor recebeu mensagem de Cliente 1 | Clock: 2
Servidor respondeu Cliente 1 | Clock: 3
Cliente 1 recebeu resposta | Clock: 4
Data de entrega: 19/01/2026  Hora e local: à anunciar
Datas de defesa: 21/01/2026  Hora e local: à anunciar
   23/01/2026  Hora e local: à anunciar
