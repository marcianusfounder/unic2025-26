---
disciplina: "Sistemas Distribuídos e Programação em Paralelo"
tipo: "02 - Exercícios e Práticas"
status: "Não Iniciado"
---
# Exercícios e Práticas: Sistemas Distribuídos e Programação em Paralelo

Este documento contém o guia prático para implementação e fixação dos conceitos detalhados no *01 - Guia de Estudo Teórico*. A peça central deste documento é a resolução e orientação do trabalho prático de exame.

---

## Parte 1: Trabalho Prático de Exame - Comunicação e Sincronização em Sistemas Distribuídos

**Tema:** Soquetes de Rede e Relógios Lógicos de Lamport
**Objetivo:** Implementar uma aplicação distribuída composta por 3 ou mais processos (ex: Servidor e 2 Clientes), comunicando-se via Sockets (TCP/UDP), mantendo ordenação lógica via Relógio de Lamport.

### Cenário Simulado Sugerido: Sistema de Consulta / Chat
Construiremos um sistema onde Clientes enviam mensagens para o Servidor, e o Servidor processa e responde. Cada processo precisará carregar e atualizar seu próprio relógio.

### Requisitos Técnicos e Arquitetura
- **Tecnologia:** Python 3 (uso da biblioteca padrão `socket` e `threading`).
- **Protocolo:** TCP (Garante confiabilidade).
- **Formato da Mensagem:** Para transmitir o Relógio Lógico, usaremos o formato JSON (ex: `{"sender": "Cliente 1", "clock": 2, "msg": "Olá Servidor"}`).

### Código-Fonte de Referência (Python)

Abaixo está uma estrutura de alto nível para resolver a exigência do trabalho.

#### `server.py`
```python
import socket
import threading
import json

class LamportClock:
    def __init__(self):
        self.clock = 0
        self.lock = threading.Lock()

    def increment(self):
        with self.lock:
            self.clock += 1
            return self.clock

    def update(self, received_time):
        with self.lock:
            self.clock = max(self.clock, received_time) + 1
            return self.clock

def handle_client(conn, addr, server_clock, server_id):
    try:
        while True:
            data = conn.recv(1024)
            if not data:
                break
            
            message = json.loads(data.decode('utf-8'))
            
            # Evento de recebimento: Atualiza o relógio (max(local, remoto) + 1)
            current_clock = server_clock.update(message['clock'])
            print(f"[{server_id}] Servidor recebeu mensagem de {message['sender']} | Clock: {current_clock} | Msg: {message['msg']}")
            
            # Evento de envio: Incrementa o relógio antes de responder
            send_clock = server_clock.increment()
            response = {
                "sender": server_id,
                "clock": send_clock,
                "msg": f"Recebido. OK."
            }
            conn.sendall(json.dumps(response).encode('utf-8'))
            print(f"[{server_id}] Servidor respondeu {message['sender']} | Clock: {send_clock}")
            
    except Exception as e:
        print(f"Erro com cliente {addr}: {e}")
    finally:
        conn.close()

def main():
    HOST = '127.0.0.1'
    PORT = 65432
    server_clock = LamportClock()
    server_id = "Servidor-Principal"

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        print(f"Servidor aguardando conexões na porta {PORT}...")
        
        while True:
            conn, addr = s.accept()
            # Inicia uma thread para suportar 3 ou mais processos simultâneos
            thread = threading.Thread(target=handle_client, args=(conn, addr, server_clock, server_id))
            thread.start()

if __name__ == "__main__":
    main()
```

#### `client.py`
```python
import socket
import json
import time

class LamportClock:
    def __init__(self):
        self.clock = 0

    def increment(self):
        self.clock += 1
        return self.clock

    def update(self, received_time):
        self.clock = max(self.clock, received_time) + 1
        return self.clock

def start_client(client_id):
    HOST = '127.0.0.1'
    PORT = 65432
    clock = LamportClock()

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((HOST, PORT))
        
        for i in range(1, 3): # Simula o envio de 2 mensagens sucessivas
            time.sleep(1) # Aguarda 1s
            
            # Evento de Envio:
            current_clock = clock.increment()
            msg_text = f"Mensagem de teste {i}"
            data_to_send = {
                "sender": client_id,
                "clock": current_clock,
                "msg": msg_text
            }
            s.sendall(json.dumps(data_to_send).encode('utf-8'))
            print(f"[{client_id}] Enviou mensagem | Clock: {current_clock}")
            
            # Evento de Recebimento:
            data = s.recv(1024)
            if data:
                response = json.loads(data.decode('utf-8'))
                updated_clock = clock.update(response['clock'])
                print(f"[{client_id}] Recebeu resposta | Clock: {updated_clock}")

if __name__ == "__main__":
    # Ao testar, rode múltiplas instâncias deste script mudando o ID (Cliente 1, Cliente 2)
    start_client("Cliente 1")
```

### Instruções de Execução (Exigências do Exame)
1. Abra um terminal e execute `python server.py`.
2. Abra outro terminal e execute `python client.py` (este atuará como Cliente 1).
3. Abra um terceiro terminal (opcional) e rode outro cliente, alterando a string "Cliente 1" para "Cliente 2".
4. Verifique a saída no terminal. Ela exibirá os `Timestamps` lógicos avançando perfeitamente sincronizados com o algoritmo de Lamport, conforme o Requisito do Trabalho ("Saída Esperada").

---

## Parte 2: Exercícios Teóricos Fixadores

**Questão 1: Relógios Lógicos e Causalidade**
Dado três eventos $A$, $B$, e $C$ em um sistema distribuído. O evento $A$ e $B$ ocorrem no mesmo processo, com $A$ ocorrendo primeiro. O evento $B$ envia uma mensagem e $C$ é o evento de recebimento desta mesma mensagem.
a) Trace a relação *Happens-Before* ($\rightarrow$) entre $A, B$ e $C$.
b) Se o relógio de Lamport do processo que executou $A$ era 0, defina os possíveis valores dos relógios em $A, B$ e $C$.
> *Resposta sugerida:* $A \rightarrow B$ (mesmo processo). $B \rightarrow C$ (envio-recebimento). Logo, pela transitividade $A \rightarrow C$. Relógios: $C(A) = 1$, $C(B) = 2$. O processo em que $C$ ocorre terá no mínimo relógio de valor 3 (atualização $max(\text{local}, 2) + 1$).

**Questão 2: Sockets TCP vs UDP**
Em um cenário de um jogo multiplayer de tiro em primeira pessoa (FPS), os desenvolvedores devem enviar as coordenadas de movimento de cada jogador para o servidor a cada 10 milissegundos. Qual o protocolo da camada de transporte (TCP ou UDP) via soquete de rede é mais adequado e por quê?
> *Resposta sugerida:* UDP. Em jogos FPS a baixa latência é crucial. O UDP não exige *handshake* e não tenta retransmitir pacotes perdidos. No caso de coordenadas, se o pacote com a posição do frame 1 for perdido, retransmiti-lo no frame 3 é inútil (o jogador já se moveu). A rapidez do UDP suplanta a confiabilidade do TCP neste cenário.

**Questão 3: Programação Paralela - Paradigmas**
Você é o engenheiro chefe de um laboratório de genômica e precisa alinhar trilhões de cadeias de DNA contra uma base de dados global. Você dispõe de um cluster com 100 computadores interligados em rede; cada computador tem 1 processador com 32 núcleos.
Descreva como você usaria MPI e OpenMP juntos (Modelo Híbrido) para atingir o máximo desempenho.
> *Resposta sugerida:* O MPI deve ser utilizado para comunicação distribuída entre os 100 computadores (nós) do cluster. O trabalho total de alinhamento de DNA é particionado em 100 lotes e enviado para cada nó. Dentro de cada nó, como há 32 núcleos acessando a mesma memória física, utiliza-se OpenMP para paralelizar o processamento do lote alocado em 32 threads de memória compartilhada. Isso reduz o custo excessivo de envio de mensagens via rede que ocorreria se usássemos MPI para todos os 3200 núcleos (100 * 32), unindo a escalabilidade distribuída com a eficiência do processamento multi-core.

**Questão 4: Segurança - Ameaças e Mitigação**
Um sistema de microsserviços financeiro transmite informações de saldos através de Sockets internos entre o Serviço de Conta e o Banco de Dados.
a) Explique o que aconteceria se um ataque de *Man-in-the-Middle (MitM)* ouvisse a rede local não criptografada. Quais pilares da segurança falhariam?
b) Como o protocolo SSL/TLS mitiga esta falha na prática?
> *Resposta sugerida:*
> a) O atacante interceptaria senhas e saldos. Os pilares comprometidos seriam: *Confidencialidade* (dados sensíveis expostos) e *Integridade* (o atacante poderia forjar pacotes modificando o saldo transferido).
> b) O SSL/TLS estabelece um *Handshake* verificando o Certificado Digital do Banco de Dados (provando autenticidade). Ele negocia uma chave de criptografia simétrica para a sessão, transformando os dados do Socket em texto cifrado (embaralhado). Se o MitM interceptar os dados, lerá apenas lixo (criptografado), garantindo confidencialidade, e se tentar alterar algo, a falha na verificação de hash do TLS alertará a perda de integridade, derrubando a conexão.

---
*Bons estudos! Use os scripts Python fornecidos como alicerce para desenvolver a versão final do seu trabalho.*
