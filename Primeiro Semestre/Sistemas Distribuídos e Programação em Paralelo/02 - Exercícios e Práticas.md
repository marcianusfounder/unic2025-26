# Guia de Exercícios e Práticas: Sistemas Distribuídos e Programação em Paralelo

Este guia consolida todas as práticas, trabalhos e estudos independentes recomendados durante a disciplina, com resoluções passo-a-passo.

---

## 1. Estudo Independente: Análise de um Sistema Distribuído

**Exercício:** Identifique um exemplo de sistema distribuído, faça a sua análise, identificando sua arquitetura e métodos de comunicação.

**Resolução (Exemplo: Netflix):**
- **Sistema:** Plataforma de streaming de vídeo Netflix.
- **Arquitetura:** Microsserviços baseados em Nuvem (Cloud Computing, hospedados primariamente na AWS) e uma rede de distribuição de conteúdo (CDN - Open Connect). Utiliza fortemente balanceamento de carga para alta disponibilidade.
- **Métodos de Comunicação:**
  - **Comunicação Cliente-Servidor e SOA/REST:** O aplicativo do cliente (Smart TV, Smartphone) faz requisições HTTP RESTful para os microsserviços de backend para obter catálogo, autenticar, etc.
  - **Comunicação Baseada em Mensagem e Assíncrona:** Internamente, para serviços que não exigem resposta imediata (como processamento de análise de dados, machine learning para recomendação), utiliza-se mensageria (ex: Kafka) para desacoplar componentes.
  - **Streaming:** Para a entrega do vídeo propriamente dito, utilizam-se protocolos de streaming otimizados (como TCP ou em alguns casos protocolos baseados em UDP) a partir dos servidores CDN mais próximos (Open Connect Appliances).

---

## 2. Prática P2P: Aplicativo de Chat usando WCF (Windows Communication Foundation)

**Exercício:** Criar um aplicativo de Chat P2P (Peer-to-Peer) em .NET, sem necessidade de um servidor central, para comunicação de um grupo de traders. A comunicação deve permitir envio de mensagens para a malha (mesh).

**Resolução (Passo a Passo):**

1. **Definir o Serviço (Contrato):**
   No Visual Studio, crie um projeto Windows Forms.
   Adicione a referência `System.ServiceModel`.
   Crie a interface que servirá como contrato:
   ```csharp
   using System.ServiceModel;

   [ServiceContract]
   public interface IQuickReturnTraderChat
   {
       [OperationContract(IsOneWay = true)]
       void Say(string user, string message);
   }
   ```
   *Nota:* `IsOneWay = true` significa que a comunicação é assíncrona; o cliente envia a mensagem e não espera uma resposta de retorno.

2. **Configurar o `App.config`:**
   Configure o *binding* `netPeerTcpBinding` que lida com comunicação P2P. Usaremos o PNRP (Peer Name Resolution Protocol) para descobrir os nós da malha.
   ```xml
   <system.serviceModel>
     <services>
       <service name="ChatApp.ChatForm">
         <endpoint name="QuickTraderChat" 
                   address="" 
                   binding="netPeerTcpBinding"
                   bindingConfiguration="BindingUnsecure" 
                   contract="ChatApp.IQuickReturnTraderChat"/>
         <host>
           <baseAddresses>
             <add baseAddress="net.p2p://QuickReturnTraderChat"/>
           </baseAddresses>
         </host>
       </service>
     </services>
     <bindings>
       <netPeerTcpBinding>
         <binding name="BindingUnsecure">
           <security mode="None"/>
           <resolver mode="Pnrp"/>
         </binding>
       </netPeerTcpBinding>
     </bindings>
   </system.serviceModel>
   ```

3. **Implementar a Lógica no Formulário:**
   O `ChatForm` implementará a interface e atuará como Serviço e Cliente (característica do P2P).
   ```csharp
   using System;
   using System.ServiceModel;
   using System.Windows.Forms;

   [ServiceBehavior(InstanceContextMode = InstanceContextMode.Single)]
   public partial class ChatForm : Form, IQuickReturnTraderChat
   {
       IQuickReturnTraderChat channel;
       ServiceHost host;
       ChannelFactory<IQuickReturnTraderChat> channelFactory;
       string userID = Environment.UserName;

       public ChatForm()
       {
           InitializeComponent();
           StartService();
       }

       private void StartService()
       {
           // Inicia o Host P2P
           host = new ServiceHost(this);
           host.Open();

           // Cria o canal de cliente
           channelFactory = new ChannelFactory<IQuickReturnTraderChat>("QuickTraderChat");
           channel = channelFactory.CreateChannel();

           // Avisa a malha que entrou
           channel.Say("Admin", "*** User " + userID + " Joined ****");
       }

       // Método invocado remotamente por outros Peers
       public void Say(string user, string message)
       {
           // Atualiza a interface gráfica
           richTextBoxScreen.Text += user + " says: " + message + Environment.NewLine;
       }

       private void btnSend_Click(object sender, EventArgs e)
       {
           // Envia mensagem para a malha
           channel.Say(userID, textBoxMessage.Text);
           textBoxMessage.Clear();
       }
   }
   ```

---

## 3. Trabalho de Sockets e Relógio de Lamport

**Exercício:** Implementar uma aplicação distribuída com 3 processos que se comunicam via sockets TCP. Cada processo deve manter um **Relógio Lógico de Lamport** para ordenar eventos de envio e recebimento, simulando um sistema de consulta distribuído ou chat.

**Resolução:**

Para este exemplo utilizaremos Python por sua sintaxe clara com threads e sockets.

**Código do Processo Servidor (`servidor.py`):**
```python
import socket
import threading

clock = 0
clock_lock = threading.Lock()

def handle_client(conn, addr):
    global clock
    print(f"[NOVA CONEXÃO] {addr} conectado.")
    while True:
        try:
            data = conn.recv(1024).decode('utf-8')
            if not data:
                break
            
            # Dados recebidos: formato "Msg|ClockCliente"
            msg, client_clock = data.split('|')
            client_clock = int(client_clock)
            
            with clock_lock:
                # Regra de Lamport no recebimento
                clock = max(clock, client_clock) + 1
                print(f"[RECEBEU] Servidor recebeu mensagem '{msg}' de {addr} | Clock: {clock}")
                
                # Regra de Lamport no envio (preparando resposta)
                clock += 1
                resp_msg = f"Resposta para {msg}|{clock}"
                conn.send(resp_msg.encode('utf-8'))
                print(f"[ENVIOU] Servidor respondeu a {addr} | Clock: {clock}")
        except:
            break
    conn.close()

def start_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('localhost', 5050))
    server.listen()
    print("[INICIANDO] Servidor aguardando conexões na porta 5050...")
    while True:
        conn, addr = server.accept()
        thread = threading.Thread(target=handle_client, args=(conn, addr))
        thread.start()

if __name__ == "__main__":
    start_server()
```

**Código do Processo Cliente (`cliente.py`):**
```python
import socket
import time

clock = 0

def start_client(client_id):
    global clock
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('localhost', 5050))
    
    # Evento de envio de mensagem
    clock += 1
    msg = f"Ola do Cliente {client_id}"
    dados_envio = f"{msg}|{clock}"
    client.send(dados_envio.encode('utf-8'))
    print(f"[ENVIOU] Cliente {client_id} enviou mensagem | Clock: {clock}")
    
    # Evento de recebimento de resposta
    data = client.recv(1024).decode('utf-8')
    resp_msg, server_clock = data.split('|')
    server_clock = int(server_clock)
    
    # Regra de Lamport no recebimento
    clock = max(clock, server_clock) + 1
    print(f"[RECEBEU] Cliente {client_id} recebeu resposta '{resp_msg}' | Clock: {clock}")
    
    client.close()

if __name__ == "__main__":
    # Pode-se executar multiplas instancias deste script
    start_client("1")
```

**Saída Esperada no Console:**
Ao rodar o servidor e logo após o cliente 1, a sincronização lógica será evidenciada no terminal pela progressão estrita do "Clock", independentemente do tempo real. A monotonicidade dos relógios em cada processo refletirá a ordem causal.
