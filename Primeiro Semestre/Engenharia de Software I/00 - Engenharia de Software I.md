---
disciplina: "Engenharia de Software I"
tipo: "Dashboard da Disciplina"
semestre: "1.º Semestre"
data_exame: "2026-09-03"
horario_exame: "09:00 - 11:00"
sala: "Mumbué 0.4"
tag_sinergia: "Tag A"
parceiras_estudo: ["Engenharia de Software II", "Sistemas Distribuídos e Programação em Paralelo"]
---

# 📐 Dashboard: Engenharia de Software I

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Quinta-feira, **03 de Setembro de 2026**
> - **⏰ Horário:** **09:00 às 11:00** (Turno Matutino)
> - **🏛️ Sala:** **Mumbué 0.4**
> - **🏷️ Tag de Sinergia:** `Tag A` (Estudar em conjunto com **Engenharia de Software II**)
> - **⚡ Nível de Complexidade:** Alta (Engenharia de Requisitos, Modelos de Ciclo de Vida e Métricas de Qualidade de Pressman)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Conceito de Software, Crise do Software, Modelos de Processo (Cascata, Espiral, Prototipagem, Ágil/Scrum), Engenharia de Requisitos e Garantia da Qualidade (SQA).*
- 🛠️ [[02 - Exercícios e Práticas]] — *Estudos de Caso (ex: Sistema Hospitalar NHS), especificação de requisitos funcionais/não-funcionais e resolução de exames.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: Requisitos Funcionais vs Não-Funcionais
> **P:** Qual a distinção fundamental entre Requisitos Funcionais e Não-Funcionais?
> **R:**
> - **Funcionais:** Descrevem **o que o sistema deve fazer** (serviços, fluxos, operações de negócio: ex: "O sistema deve emitir fatura com QR Code").
> - **Não-Funcionais:** Descrevem **as restrições e qualidades operacionais** com que o sistema deve operar (Desempenho, Segurança, Disponibilidade, Confiabilidade: ex: "O tempo de resposta da busca não deve exceder 200ms sob 10.000 conexões").

> [!tip] Flashcard 2: Modelo em Cascata vs Metodologias Ágeis
> **P:** Em que cenários é recomendado usar o Modelo em Cascata vs um Modelo Ágil (Scrum/Kanban)?
> **R:**
> - **Cascata (Linear Sequencial):** Ideal para projetos com **requisitos perfeitamente claros, estáveis e imutáveis**, com tecnologia dominada (ex: sistemas aeroespaciais ou controladores de tráfego aéreo).
> - **Ágil (Iterativo/Incremental):** Ideal para projetos de **alta incerteza, volatilidade de mercado** e necessidade de entregas rápidas de valor aos utilizadores (ex: startups, aplicações web/mobile).

> [!tip] Flashcard 3: Dimensões da Qualidade de Software (Pressman)
> **P:** Quais são as principais métricas de qualidade do produto de software?
> **R:**
> 1. **Correção:** O grau em que o software executa a função prescrita.
> 2. **Manutenibilidade:** A facilidade com que o software pode ser corrigido, adaptado ou expandido.
> 3. **Integridade:** Capacidade do sistema de resistir a acessos não autorizados.
> 4. **Usabilidade:** Esforço cognitivo necessário para aprender, operar e interpretar o sistema.

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** O Ministério da Saúde contratou a tua equipa para conceber o novo Sistema Integrado Hospitalar Nacional (Caso NHS).
> **Missão:** 
> 1. Modela 3 Requisitos Funcionais de alta criticidade e 2 Requisitos Não-Funcionais mensuráveis.
> 2. Justifica por que a adoção de um ciclo de vida puramente em cascata causou o colapso do projeto NHS real em Inglaterra e como a abordagem iterativa teria mitigado esse risco.
> *(Vê a resolução completa no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Primeiro Semestre/Engenharia de Software I"
WHERE file.name != "00 - Engenharia de Software I.md"
SORT file.name ASC
```
