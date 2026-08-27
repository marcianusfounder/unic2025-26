---
disciplina: "Engenharia de Software II"
tipo: "Dashboard da Disciplina"
semestre: "2.º Semestre"
data_exame: "2026-09-03"
horario_exame: "14:00 - 16:00"
sala: "Cutato 0.4"
tag_sinergia: "Tag A"
parceiras_estudo: ["Engenharia de Software I", "Sistemas Distribuídos e Programação em Paralelo"]
---

# 🏗️ Dashboard: Engenharia de Software II

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Quinta-feira, **03 de Setembro de 2026**
> - **⏰ Horário:** **14:00 às 16:00** (Turno Vespertino)
> - **🏛️ Sala:** **Cutato 0.4**
> - **🏷️ Tag de Sinergia:** `Tag A` (Estudar em conjunto com **Engenharia de Software I**)
> - **⚡ Nível de Complexidade:** Muito Alta (Metodologia RUP, Modelagem UML, Casos de Uso, Padrões de Projeto e Arquitetura)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Processo Unificado Racional (RUP), Fases e Disciplinas do RUP, Diagramas UML (Casos de Uso, Classes, Sequência, Atividades, Estados), Arquitetura 4+1 e Padrões GoF.*
- 🛠️ [[02 - Exercícios e Práticas]] — *Resolução de diagramas de Casos de Uso com relações `<<include>>` e `<<extend>>`, modelagem de classes completa e estudos de caso de provas.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: As 4 Fases do RUP
> **P:** Quais são as 4 fases sequenciais do RUP e os seus marcos (*milestones*)?
> **R:**
> 1. **Concepção (Inception):** Define o escopo do sistema e viabilidade do negócio (Marco: *Objetivos do Ciclo de Vida*).
> 2. **Elaboração (Elaboration):** Modela os requisitos detalhados e estabiliza a arquitetura básica (Marco: *Arquitetura do Ciclo de Vida*).
> 3. **Construção (Construction):** Implementação massiva e testes do sistema (Marco: *Capacidade Operacional Inicial*).
> 4. **Transição (Transition):** Entrega, testes de aceitação do utilizador (UAT) e implantação em produção (Marco: *Lançamento do Produto*).

> [!tip] Flashcard 2: Casos de Uso: `<<include>>` vs `<<extend>>`
> **P:** Qual a diferença técnica entre os relacionamentos de inclusão e extensão na UML?
> **R:**
> - **`<<include>>` (Obrigatório):** O caso de uso base **sempre executa** o caso de uso incluído como parte indispensável do seu fluxo (ex: "Efetuar Pagamento" inclui "Autenticar Utilizador").
> - **`<<extend>>` (Opcional/Condicional):** O caso de uso extensão é executado **apenas se uma condição específica for satisfeita** num ponto de extensão (ex: "Emitir Seguro Adicional" estende "Comprar Bilhete de Viagem").

> [!tip] Flashcard 3: O Modelo de Visões Arquiteturais 4+1 (Kruchten)
> **P:** Quais são as 5 visões do modelo 4+1 da UML?
> **R:**
> 1. **Visão de Casos de Uso (Cenários - O "+1"):** Direciona todas as outras visões.
> 2. **Visão Lógica:** Estrutura de classes, pacotes e interfaces.
> 3. **Visão de Processos:** Concorrência, threads, desempenho e escalabilidade.
> 4. **Visão de Implementação:** Módulos de código, bibliotecas e componentes.
> 5. **Visão de Implantação (Deployment):** Distribuição física em servidores e nós de rede.

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** Modelação de um Sistema de Comércio Eletrónico para Pagamentos Multicaixa Express.
> **Missão:** 
> 1. Desenha o Diagrama de Casos de Uso para o fluxo de compra, identificando os atores (Cliente, Gateway Bancário) e aplicando corretamente `<<include>>` e `<<extend>>`.
> 2. Constrói o Diagrama de Sequência para a autenticação bancária síncrona.
> *(Vê o diagrama e a especificação completa no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Segundo Semestre/Engenharia de Software II"
WHERE file.name != "00 - Engenharia de Software II.md"
SORT file.name ASC
```
