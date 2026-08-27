# Exercícios e Práticas: Programação Web I

Este documento compila os exercícios práticos, laboratórios e desafios propostos para a disciplina de Programação Web I, acompanhados de suas respectivas resoluções passo a passo.

---

## 💻 Práticas Iniciais (Aulas 2 e 3)

### Exercício 1: Olá Mundo
**Objetivo:** Criar uma página HTML básica contendo um título e um parágrafo.

**Resolução:**
Crie um arquivo chamado `ola_mundo.html` e insira o seguinte código:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1</title>
</head>
<body>
    <h1>Olá Mundo!</h1>
    <p>Este é o meu primeiro parágrafo em HTML.</p>
</body>
</html>
```

### Exercício 2: Inserção de Linha Horizontal
**Objetivo:** Modificar o Exercício 1 inserindo uma linha horizontal para separar o título do texto.

**Resolução:**
Adicione a tag `<hr>` logo após o título `<h1>`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 2</title>
</head>
<body>
    <h1>Olá Mundo!</h1>
    <hr>
    <p>Este é o meu primeiro parágrafo em HTML.</p>
</body>
</html>
```

### Exercício 3: Parágrafos e Quebras de Linha
**Objetivo:** Criar uma página demonstrando o uso de parágrafos múltiplos e quebras de linha forçadas.

**Resolução:**
Utilizaremos a tag `<br>` para quebrar a linha dentro de um mesmo parágrafo e `<p>` para novos blocos.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Poema - Exercício 3</title>
</head>
<body>
    <h2>Batatinha quando nasce</h2>
    <p>
        Batatinha quando nasce<br>
        espalha a rama pelo chão.<br>
        Menina quando dorme<br>
        põe a mão no coração.
    </p>
    <p>Autor: Domínio Público</p>
</body>
</html>
```

---

## 🎨 Práticas de Formatação e Símbolos (Aula 4)

### Exercício 4: Símbolos e Emojis
**Objetivo:** Criar uma página que utilize Entidades HTML (símbolos) e Emojis para enriquecer o texto.

**Resolução:**
Aqui, usamos entidades como `&hearts;` e códigos hexadecimais para emojis.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Símbolos e Emojis</title>
</head>
<body>
    <h1>Linguagens de Programação</h1>
    <p>Eu amo desenvolver para a web &hearts;</p>
    
    <h2>Tecnologias:</h2>
    <ul>
        <li>HTML5 &#x1F310;</li>
        <li>CSS3 &#x1F3A8;</li>
        <li>JavaScript &#x1F4BB;</li>
    </ul>
    
    <hr>
    <p>&copy; 2026 Direitos Reservados.</p>
</body>
</html>
```

---

## 🚀 Laboratório 1: Criando Sua Primeira Página Completa

**Objetivo Geral:** Construir uma página web que integre todos os conceitos aprendidos (títulos, listas, formatação, imagens e símbolos).

**Instruções e Requisitos:**
1. Arquivo `meu_site.html`.
2. Uso da tag `<title>`.
3. Título de boas-vindas com `<h1>`.
4. Subtítulos com `<h2>` e `<h3>`.
5. Dois ou mais parágrafos (`<p>`).
6. Linha horizontal (`<hr>`) e quebras de linha (`<br>`).
7. Uma lista ordenada (`<ol>`) e uma não ordenada (`<ul>`).
8. Uma imagem (`<img>`) com atributo `alt`.
9. Pelo menos 3 símbolos HTML e 3 emojis.

**Resolução Passo a Passo:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Requisito 1: Título da página -->
    <title>Meu Site Pessoal - Lab 1</title>
</head>
<body>
    
    <!-- Requisito 2: Cabeçalho principal -->
    <h1>Bem-vindo ao Meu Site! &#x1F44B;</h1>
    
    <hr> <!-- Requisito 5: Linha horizontal -->

    <!-- Requisito 3: Subtítulos -->
    <h2>Sobre Mim</h2>
    <h3>Quem sou eu?</h3>
    
    <!-- Requisito 4: Parágrafos -->
    <p>Olá! Meu nome é [Seu Nome], sou estudante universitário e um grande entusiasta de tecnologia e desenvolvimento de software.</p>
    <p>Atualmente, estou focado em aprender os fundamentos da web, como HTML e CSS, para criar interfaces de usuário incríveis.</p>
    
    <!-- Requisito 5: Quebra de linha -->
    <p>
        "O aprendizado contínuo é o mínimo<br>
        necessário para o sucesso em qualquer área."
    </p>

    <!-- Requisito 6: Listas -->
    <h2>Meus Hobbies Favoritos</h2>
    <ul>
        <li>Ouvir música &#x1F3B5;</li>
        <li>Ler livros de ficção científica &#x1F4DA;</li>
        <li>Jogar videogame &#x1F3AE;</li>
    </ul>

    <h2>Metas para o Ano</h2>
    <ol>
        <li>Dominar HTML e CSS.</li>
        <li>Construir um portfólio online.</li>
        <li>Aprender JavaScript avançado.</li>
    </ol>

    <!-- Requisito 7: Imagem -->
    <h2>Minha Foto de Perfil</h2>
    <img src="https://via.placeholder.com/150" alt="Foto de Perfil Genérica" width="150">

    <hr>

    <!-- Requisito 8: Símbolos e Emojis -->
    <footer>
        <p>Feito com &hearts; por mim mesmo.</p>
        <p>Preço da dedicação: Inestimável &euro;</p>
        <p>Copyright &copy; 2026. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

### Análise da Resolução do Laboratório 1:
*   A página segue a estrutura padrão do HTML5 (uso de `<!DOCTYPE html>`).
*   Utilizamos `<h1>` até `<h3>` mantendo a hierarquia semântica correta.
*   Foram combinadas entidades como `&hearts;` (Coração) e `&copy;` (Copyright) com Emojis Unicode.
*   A tag `<img>` foi usada com um placeholder de exemplo, mas ensina a importância do atributo `alt` e a dimensão `width`.
