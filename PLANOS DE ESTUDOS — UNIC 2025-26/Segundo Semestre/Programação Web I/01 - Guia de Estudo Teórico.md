---
disciplina: "Programação Web I"
tipo: "01 - Guia de Estudo Teórico"
status: "Não Iniciado"
---
# Guia de Estudo Teórico: Programação Web I

Bem-vindo ao guia definitivo e exaustivo de Programação Web I. Este documento foi elaborado para cobrir de ponta a ponta os fundamentos e os conceitos avançados necessários para o desenvolvimento de aplicações web modernas. Exploraremos a arquitetura da Web, o HTML5, o CSS3 (incluindo animações e layouts modernos) e a manipulação do DOM via JavaScript.

---

## 1. Fundamentos da Web e o Protocolo HTTP

A World Wide Web (WWW) opera com base em um modelo **Cliente-Servidor**. O cliente (geralmente um navegador web, como Chrome, Firefox ou Edge) faz requisições a um servidor, que processa a solicitação e devolve uma resposta (geralmente um documento HTML, imagens, estilos, ou dados em formato JSON).

### 1.1. O que é o HTTP?
O **Hypertext Transfer Protocol (HTTP)** é o protocolo base da comunicação na Web. Ele define como as mensagens são formatadas e transmitidas, e quais ações os servidores e os navegadores devem tomar em resposta a diversos comandos.

O HTTP é um protocolo *stateless* (sem estado), o que significa que cada requisição é independente; o servidor não guarda informações sobre requisições anteriores por padrão. Para manter o estado (como um carrinho de compras ou um login), utilizam-se Cookies, Local Storage ou Sessions no servidor.

### 1.2. Métodos HTTP
Os métodos HTTP (ou verbos) indicam a ação que o cliente deseja realizar no recurso especificado.
*   **GET**: Solicita a representação de um recurso. É usado apenas para recuperar dados (ex: carregar uma página web).
*   **POST**: Envia dados ao servidor, frequentemente causando uma mudança de estado ou efeitos colaterais no servidor (ex: enviar um formulário de cadastro).
*   **PUT**: Substitui todas as atuais representações do recurso de destino pelos dados da requisição.
*   **PATCH**: Aplica modificações parciais a um recurso.
*   **DELETE**: Remove um recurso específico.

### 1.3. Códigos de Status HTTP
Quando o servidor responde a uma requisição, ele envia um código de status de 3 dígitos:
*   **1xx (Informativo)**: A requisição foi recebida e o processo continua.
*   **2xx (Sucesso)**: A ação foi recebida com sucesso, compreendida e aceita (ex: `200 OK`, `201 Created`).
*   **3xx (Redirecionamento)**: Mais ações são necessárias para completar a requisição (ex: `301 Moved Permanently`).
*   **4xx (Erro do Cliente)**: A requisição contém sintaxe incorreta ou não pode ser cumprida (ex: `400 Bad Request`, `401 Unauthorized`, `404 Not Found`).
*   **5xx (Erro do Servidor)**: O servidor falhou ao cumprir uma requisição aparentemente válida (ex: `500 Internal Server Error`).

---

## 2. HTML5: A Estrutura da Web

O HTML (*HyperText Markup Language*) é a linguagem de marcação padrão para a criação de páginas web. O HTML5 introduziu uma série de elementos semânticos que dão significado à estrutura da página, facilitando a acessibilidade por leitores de tela e melhorando a indexação por motores de busca (SEO).

### 2.1. Estrutura Básica de um Documento HTML5
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição do site para motores de busca">
    <title>Título da Página</title>
    <!-- Inclusão de CSS externo -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- O conteúdo da página vai aqui -->
</body>
</html>
```

### 2.2. Semântica HTML5
O uso correto das tags semânticas é vital. As principais são:
*   `<header>`: Representa um grupo de introdução ou um conjunto de elementos de navegação.
*   `<nav>`: Define uma seção de navegação, contendo links principais.
*   `<main>`: Especifica o conteúdo principal do documento. Deve ser único por página.
*   `<article>`: Representa uma composição independente e auto-suficiente em um documento, como um post de blog ou uma notícia.
*   `<section>`: Representa uma seção genérica contendo conteúdo temático, geralmente com um cabeçalho.
*   `<aside>`: Define conteúdo tangencial ao conteúdo ao seu redor (ex: barras laterais, publicidade).
*   `<footer>`: Representa um rodapé para a seção ou documento (ex: informações de autoria, links de contato, direitos autorais).

### 2.3. Formulários e Entradas
Os formulários são a principal forma de interação do usuário com o sistema, enviando dados para o servidor.
```html
<form action="/enviar" method="POST">
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" name="nome" required placeholder="Digite seu nome">

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" minlength="8" required>

    <fieldset>
        <legend>Preferências:</legend>
        <label><input type="radio" name="tema" value="claro" checked> Claro</label>
        <label><input type="radio" name="tema" value="escuro"> Escuro</label>
    </fieldset>

    <button type="submit">Cadastrar</button>
</form>
```
Atributos como `required`, `minlength`, `maxlength`, `pattern`, fornecem **validação do lado do cliente** sem necessidade de JavaScript inicial.

---

## 3. CSS3: Estilo, Layout e Animações

O CSS (*Cascading Style Sheets*) descreve a apresentação de um documento HTML. 

### 3.1. Tipos de Inclusão de CSS
Existem três maneiras fundamentais de aplicar CSS:
1.  **Inline CSS**: Aplicado diretamente na tag HTML através do atributo `style`. Útil para testes rápidos, mas péssimo para manutenção.
    ```html
    <p style="color: red;">Texto vermelho</p>
    ```
2.  **Internal CSS**: Dentro da tag `<style>` no `<head>` do documento HTML. Bom para páginas únicas.
3.  **External CSS**: Em um arquivo `.css` separado, linkado no `<head>`. É a melhor prática, promovendo reuso e organização em grandes projetos.

### 3.2. O Modelo de Caixa (Box Model)
Cada elemento HTML é considerado uma "caixa" na renderização visual. O Box Model é composto por:
*   **Content**: O conteúdo em si (texto, imagem).
*   **Padding**: Espaçamento interno entre o conteúdo e a borda.
*   **Border**: A borda ao redor do padding e do conteúdo.
*   **Margin**: O espaçamento externo, fora da borda, separando a caixa de outros elementos.

A propriedade crucial para não quebrar o layout é:
```css
* {
    box-sizing: border-box; /* O padding e a borda são incluídos na largura/altura total */
}
```

### 3.3. Layouts: Flexbox
O Flexbox (*Flexible Box Layout*) é ideal para organizar elementos em uma única dimensão (linhas ou colunas).
```css
.container {
    display: flex;
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    justify-content: space-between; /* Alinhamento horizontal: center, flex-start, flex-end, space-around, space-evenly */
    align-items: center; /* Alinhamento vertical: flex-start, flex-end, stretch, baseline */
    flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
}
```

### 3.4. Layouts: CSS Grid
O CSS Grid é um poderoso sistema bidimensional (linhas e colunas).
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanhos iguais */
    grid-template-rows: auto 1fr auto;
    gap: 20px; /* Espaço entre os itens */
}
```

### 3.5. Animações e Keyframes (Foco Principal)
As animações CSS são uma maneira eficaz de adicionar movimento aos elementos HTML sem usar JavaScript. 
Para criar uma animação, precisamos de duas partes: a chamada da animação (as propriedades no seletor) e a definição dos estados (o `@keyframes`).

**As Principais Propriedades de Animação:**
*   `animation-name`: O nome do `@keyframes` que define a sequência.
*   `animation-duration`: A duração total de um ciclo (ex: `2s`, `500ms`).
*   `animation-timing-function`: Curva de velocidade (ex: `linear`, `ease`, `ease-in`, `ease-out`, `cubic-bezier`).
*   `animation-delay`: Tempo de espera antes de iniciar a animação.
*   `animation-iteration-count`: Quantas vezes repete (`infinite` para rodar para sempre, ou um número inteiro).
*   `animation-direction`: Direção (`normal`, `reverse`, `alternate`, `alternate-reverse`). O `alternate` faz a animação ir e voltar de forma suave.
*   `animation-fill-mode`: Como o estilo é aplicado antes ou depois da animação (`forwards` mantém o estado final).
*   `animation-play-state`: `running` ou `paused`.

**A propriedade shorthand (`animation`):**
Permite declarar tudo de uma vez. A ordem recomendada é: nome, duração, função de temporização, atraso, contagem, direção, modo de preenchimento.
```css
.elemento {
    animation: moverParaDireita 3s ease-in-out 1s infinite alternate;
}
```

**Definindo os `@keyframes`:**
Os *keyframes* controlam os estilos aplicados ao longo do tempo. Podem ser definidos com `from` (0%) e `to` (100%), ou usando porcentagens para criar múltiplos passos.
```css
@keyframes moverParaDireita {
    0% {
        transform: translateX(0) scale(1);
        background-color: blue;
    }
    50% {
        transform: translateX(150px) scale(1.2);
        background-color: purple;
    }
    100% {
        transform: translateX(300px) scale(1);
        background-color: red;
    }
}
```
> [!TIP]
> **Performance:** Para animações mais fluidas (60fps), procure sempre animar as propriedades `transform` (translates, scales, rotates) e `opacity`. Evite animar `margin`, `padding`, `width`, `height` ou `top/left`, pois estas propriedades causam *Repaint* e *Reflow* no navegador, consumindo muita CPU.

---

## 4. JavaScript: O Comportamento da Web

JavaScript é a linguagem de programação da Web. Ele roda no lado do cliente e permite interatividade complexa, manipulação do DOM e comunicação assíncrona com o servidor.

### 4.1. O DOM (Document Object Model)
Quando uma página HTML é carregada, o navegador cria o DOM, que é uma representação em árvore do documento. O JavaScript pode usar os métodos do DOM para alterar o documento HTML dinamicamente.

**Selecionando Elementos:**
```javascript
// Seleção moderna e versátil (usa seletores CSS)
const botao = document.querySelector('#meuBotao'); // Retorna o primeiro elemento que casar
const todosParagrafos = document.querySelectorAll('.texto'); // Retorna uma NodeList com todos
```

**Alterando Elementos:**
```javascript
const titulo = document.querySelector('h1');
titulo.textContent = 'Novo Título via JS'; // Altera o texto
titulo.style.color = 'green'; // Altera o CSS inline
titulo.classList.add('destaque'); // Adiciona uma classe CSS (Recomendado)
titulo.classList.remove('oculto');
```

### 4.2. Event Listeners
Para interagir com o usuário, o JS deve "ouvir" eventos (cliques, digitação, rolar a página).
```javascript
const btn = document.querySelector('#meuBotao');

btn.addEventListener('click', function(evento) {
    evento.preventDefault(); // Impede o comportamento padrão, muito usado em formulários
    alert('Botão clicado!');
    
    // Podemos acessar o elemento que disparou o evento via evento.target
    console.log(evento.target); 
});
```

### 4.3. Manipulação de Arrays e Objetos
O JavaScript moderno (ES6+) oferece ferramentas poderosas.
```javascript
const usuarios = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 17 },
    { nome: 'João', idade: 30 }
];

// Map: Transforma um array em outro
const nomes = usuarios.map(user => user.nome); 
// ['Ana', 'Carlos', 'João']

// Filter: Filtra baseado em uma condição
const maioresDeIdade = usuarios.filter(user => user.idade >= 18);
```

### 4.4. Comunicação Assíncrona (Fetch API)
Para realizar requisições HTTP via JS sem recarregar a página (AJAX).
```javascript
async function buscarDados() {
    try {
        const resposta = await fetch('https://api.exemplo.com/dados');
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const dadosJson = await resposta.json();
        console.log(dadosJson);
    } catch (erro) {
        console.error('Falha na comunicação:', erro);
    }
}
```

---

## 5. Conclusão do Guia Teórico
Aprofunde-se nestes conceitos através da prática constante. O desenvolvimento web exige que a estruturação (HTML), a apresentação (CSS) e o comportamento (JavaScript) trabalhem em harmonia de modo que a aplicação seja responsiva, acessível e otimizada. Utilize os laboratórios complementares a este guia para consolidar o seu aprendizado de forma empírica.
