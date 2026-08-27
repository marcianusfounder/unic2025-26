---
disciplina: "Programação Web I"
tipo: "Dashboard da Disciplina"
semestre: "2.º Semestre"
data_exame: "2026-09-04"
horario_exame: "14:00 - 16:00"
sala: "Cutato 0.4"
tag_sinergia: "Tag D"
parceira_estudo: "Desenvolvimento Web Autônomo"
---

# 🌐 Dashboard: Programação Web I

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Sexta-feira, **04 de Setembro de 2026**
> - **⏰ Horário:** **14:00 às 16:00** (Turno Vespertino)
> - **🏛️ Sala:** **Cutato 0.4**
> - **🏷️ Tag de Sinergia:** `Tag D` (Foco em Desenvolvimento Web e Arquiteturas Frontend/Backend)
> - **⚡ Nível de Complexidade:** Alta (HTML5 Semântico, CSS Avançado/Animações, JavaScript DOM, Assincronismo e REST APIs)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Arquitetura Web Cliente-Servidor, Protocolo HTTP/HTTPS, Métodos GET/POST/PUT/DELETE, HTML5 Semântico, CSS Grid/Flexbox, Keyframe Animations, JavaScript ES6+, DOM Manipulation e AJAX/Fetch.*
- 🛠️ [[02 - Exercícios e Práticas]] — *Resolução dos Laboratórios 1, 2 e 3, criação de layouts responsivos, manipulação assíncrona de dados JSON e questões de exame.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: Métodos HTTP e Verbos REST
> **P:** Quais são os 4 verbos HTTP fundamentais numa API RESTful e o que cada um opera?
> **R:**
> - **GET:** Recupera dados de um recurso (Seguro e Idempotente).
> - **POST:** Cria um novo recurso no servidor.
> - **PUT / PATCH:** Atualiza um recurso existente (PUT substitui integralmente; PATCH atualiza parcialmente).
> - **DELETE:** Remove o recurso especificado.

> [!tip] Flashcard 2: Flexbox vs CSS Grid
> **P:** Quando devemos usar CSS Flexbox vs CSS Grid?
> **R:**
> - **Flexbox (Unidimensional):** Projetado para distribuir elementos ao longo de **um único eixo** (linha OU coluna). Ideal para barras de navegação, alinhamento de itens dentro de um card e botões.
> - **CSS Grid (Bidimensional):** Projetado para layouts completos em **dois eixos simultâneos** (linhas E colunas). Ideal para estruturas globais de páginas e dashboards complexos.

> [!tip] Flashcard 3: O Modelo Assíncrono do JavaScript (Event Loop)
> **P:** Como funcionam as Promises e o `async/await` no JavaScript?
> **R:** Uma `Promise` representa uma operação que ainda não foi concluída mas resultará num valor futuro (Pending, Fulfilled, Rejected). `async/await` é uma sintaxe sobre Promises que permite escrever código assíncrono com aparência sequencial síncrona sem bloquear a thread principal (evitando o *Callback Hell*).

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** Precisas construir um componente de catálogo de produtos dinâmico.
> **Missão:** 
> 1. Escreve a função JavaScript utilizando `fetch()` e `async/await` para obter uma lista de produtos de `/api/produtos` em formato JSON.
> 2. Itera sobre a lista com `.forEach()` ou `.map()` e insere dinamicamente os cards no DOM (`document.getElementById('catalogo')`).
> *(Código completo e testado disponível no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Segundo Semestre/Programação Web I"
WHERE file.name != "00 - Programação Web I.md"
SORT file.name ASC
```
