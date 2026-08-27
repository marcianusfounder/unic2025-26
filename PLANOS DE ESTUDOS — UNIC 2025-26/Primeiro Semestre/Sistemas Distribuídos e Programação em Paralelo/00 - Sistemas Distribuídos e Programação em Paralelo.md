---
disciplina: "Sistemas Distribuídos e Programação em Paralelo"
tipo: "Dashboard da Disciplina"
semestre: "1.º Semestre"
data_exame: "2026-09-02"
horario_exame: "09:00 - 11:00"
sala: "Cutato 0.4"
tag_sinergia: "Tag A"
parceiras_estudo: ["Engenharia de Software I", "Engenharia de Software II"]
---

# 🌐 Dashboard: Sistemas Distribuídos e Programação em Paralelo

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Quarta-feira, **02 de Setembro de 2026**
> - **⏰ Horário:** **09:00 às 11:00** (Turno Matutino)
> - **🏛️ Sala:** **Cutato 0.4**
> - **🏷️ Tag de Sinergia:** `Tag A` (Estudar em conjunto com **Engenharia de Software I e II**)
> - **⚡ Nível de Complexidade:** Muito Alta (Sockets de Rede, Concorrência/Threads, RPC, RMI e Tolerância a Falhas)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Arquiteturas Cliente-Servidor e P2P, Comunicação por Sockets TCP/UDP, Chamada de Procedimento Remoto (RPC/RMI), Middleware, Sincronização de Relógios e Algoritmos de Eleição.*
- 🛠️ [[02 - Exercícios e Práticas]] — *Implementações de Sockets em Java/Python, resolução de deadlocks, tolerância a falhas e questões de provas anteriores.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: Sockets TCP vs Sockets UDP
> **P:** Qual a diferença técnica entre usar Sockets TCP (`SOCK_STREAM`) e Sockets UDP (`SOCK_DGRAM`)?
> **R:**
> - **TCP:** Orientado a conexão, garante entrega ordenada e confiável de pacotes via handshake triplo (SYN, SYN-ACK, ACK), controle de fluxo e retransmissão.
> - **UDP:** Não orientado a conexão, não garante entrega nem ordem, mas oferece latência ultrabaixa (ideal para streaming, VoIP e jogos).

> [!tip] Flashcard 2: O Papel do Middleware
> **P:** O que é um Middleware e por que ele é crucial num Sistema Distribuído?
> **R:** É uma camada de software posicionada entre o sistema operativo/rede e as aplicações distribuídas. O seu objetivo é ocultar a heterogeneidade das plataformas de hardware e SO, fornecendo transparência de localização, acesso e replicação (ex: gRPC, CORBA, RabbitMQ).

> [!tip] Flashcard 3: RPC vs RMI
> **P:** Qual a distinção essencial entre RPC e RMI?
> **R:**
> - **RPC (Remote Procedure Call):** Modelo procedural (estilo linguagem C), onde um cliente executa um procedimento num servidor remoto passando parâmetros por valor.
> - **RMI (Remote Method Invocation):** Modelo orientado a objetos (Java RMI), permitindo que um objeto cliente invoque métodos diretamente num objeto remoto instanciado, passando parâmetros por valor ou por referência remota.

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** Precisas construir um servidor distribuído multithread para processamento de transações bancárias.
> **Missão:** 
> 1. Escreve a estrutura em pseudocódigo ou Java do `ServerSocket` e o loop `accept()` que despacha cada conexão de cliente para uma nova `Thread`/`Runnable`.
> 2. Como prevenires condições de corrida (*Race Conditions*) no saldo partilhado?
> *(Verifica o código completo e resolvido no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Primeiro Semestre/Sistemas Distribuídos e Programação em Paralelo"
WHERE file.name != "00 - Sistemas Distribuídos e Programação em Paralelo.md"
SORT file.name ASC
```
