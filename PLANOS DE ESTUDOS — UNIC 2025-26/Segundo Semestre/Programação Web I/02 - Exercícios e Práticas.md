---
disciplina: "Programação Web I"
tipo: "02 - Exercícios e Práticas"
status: "Não Iniciado"
---
# Guia de Exercícios e Práticas: Programação Web I

Este documento contém a extração, resolução passo a passo e o raciocínio detalhado de todos os laboratórios práticos e exercícios focados em Programação Web I.

---

## Laboratório 1 – Criando sua primeira página HTML

### 🎯 Objetivo:
Criar uma página web simples utilizando as tags HTML básicas, incluindo títulos, parágrafos, listas, imagens, símbolos e emojis.

### 📋 Solução Detalhada e Raciocínio:
O arquivo base se chamará `meu_site.html`. Para contemplar todos os requisitos, utilizaremos a estrutura boilerplate do HTML5 e incluiremos tags semânticas para separar a apresentação, embora o laboratório exija apenas tags simples.

#### O Código (meu_site.html)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Requisito 1: Título da página -->
    <title>Meu Primeiro Site Pessoal</title>
</head>
<body>

    <!-- Requisito 2: Cabeçalho principal com <h1> -->
    <h1>Bem-vindos à Minha Página! 😄</h1>

    <!-- Requisito 3: Subtítulos com <h2> e <h3> -->
    <h2>Sobre Mim</h2>
    <h3>Quem sou eu</h3>

    <!-- Requisito 4: Parágrafos -->
    <p>Olá! Eu sou um estudante apaixonado por tecnologia e desenvolvimento web. Gosto de resolver problemas complexos e aprender novas linguagens de programação.</p>
    
    <!-- Requisito 5 (parte 2): Quebra de linha manual com <br> -->
    <p>Acredito que a prática leva à perfeição.<br>Por isso, estou praticando intensamente o HTML5.</p>

    <!-- Requisito 5 (parte 1): Linha horizontal com <hr> -->
    <hr>

    <h2>Meus Interesses 🎵</h2>
    
    <!-- Requisito 6 (parte 2): Lista não ordenada (<ul>) -->
    <p>Minhas comidas e atividades favoritas:</p>
    <ul>
        <li>Programar ouvindo música</li>
        <li>Comer pizza de pepperoni 🍕</li>
        <li>Assistir a filmes de ficção científica 🎬</li>
    </ul>

    <h3>Minhas Metas para o Ano</h3>
    
    <!-- Requisito 6 (parte 1): Lista ordenada (<ol>) -->
    <ol>
        <li>Dominar HTML5, CSS3 e JavaScript.</li>
        <li>Conseguir meu primeiro estágio na área de T.I.</li>
        <li>Contribuir em um projeto Open Source.</li>
    </ol>

    <hr>

    <h2>Galeria de Inspiração</h2>
    <!-- Requisito 7: Imagem com atributo alt -->
    <!-- Utilizando uma imagem genérica da web (placekitten) como placeholder, já que não temos uma local -->
    <img src="https://placekitten.com/400/300" alt="Um gatinho muito fofo programador">

    <!-- Requisito 8: Símbolos HTML e Emojis espalhados -->
    <p>Seja gentil! &hearts; O conhecimento vale mais que &euro; ou dólares.</p>
    
    <footer>
        <p>Copyright &copy; 2026 - Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

### Explicação dos Passos:
1. **Estrutura e Título**: O `<title>` vai no `<head>`. É ele que aparece na aba superior do navegador.
2. **Cabeçalhos**: A hierarquia vai do `<h1>` ao `<h6>`. O `<h1>` é o mais importante e deve existir apenas um por página na visão semântica ideal.
3. **Listas**: `<ul>` gera *bullets* (pontos), enquanto `<ol>` gera números. Ambos contêm tags `<li>` (List Item) no seu interior.
4. **Símbolos e Emojis**: Símbolos especiais em HTML (entities) sempre começam com um `&` (e-comercial) e terminam com `;` (ponto-e-vírgula). Exemplos: `&hearts;` para ♥, `&copy;` para ©. Emojis podem ser colados diretamente no código caso o `<meta charset="UTF-8">` esteja configurado no `<head>`.

---

## Laboratório 2 – Tabela e Formulário

### 🎯 Objetivo:
Implementar um formulário estruturado visualmente através de uma tabela. Esta era uma prática muito comum no passado (tabelas para layout) e é um excelente exercício para compreender o alinhamento e as propriedades de tabelas em conjunto com formulários. O laboratório possui requisitos implícitos (campos obrigatórios).

### 📋 Solução Detalhada e Raciocínio:
Vamos corrigir e otimizar o código fornecido, inserindo os atributos necessários (como `required` para tornar as opções de condições obrigatórias) e refinando as tags.

#### O Código Otimizado
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabela e Formulário de Registro</title>
  <style>
      /* Adicionando um pequeno estilo CSS para centralizar e embelezar a tabela */
      body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          display: flex;
          justify-content: center;
          padding: 20px;
      }
      table {
          background-color: #ffffff;
          border-collapse: collapse;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      caption {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
      }
      td {
          padding: 10px;
      }
  </style>
</head>
<body>
  
  <form name="forma1" action="#" method="POST">  
  <!-- Utilizamos border="1" para visualizar a tabela, mas estilizar via CSS é a prática moderna -->
  <table border="1" cellspacing="0" cellpadding="10">
    <caption>Formulário de registro de estudante</caption>
    
    <!-- Campos de Texto Simples -->
    <tr>
      <td><label for="nome">Nome:</label></td>
      <td><input type="text" id="nome" name="nome" size="25" required></td>
    </tr>
    <tr>
      <td><label for="sobrenome">Sobrenome:</label></td>
      <td><input type="text" id="sobrenome" name="sobrenome" size="25" required></td>
    </tr>
    <tr>
      <td><label for="email">E-mail:</label></td>
      <td><input type="email" id="email" name="email" size="25" required></td>
    </tr>
    
    <!-- Senha -->
    <tr>
      <td><label for="senha">Digite sua palavra-passe:</label></td>
      <td><input type="password" id="senha" name="senha" size="20" maxlength="50" required></td>
    </tr>
    
    <!-- Botões Radio -->
    <tr>
      <td>Você é matemático:</td>
      <td>
        <!-- Name igual "matematico" garante que apenas um possa ser selecionado -->
        <label><input type="radio" name="matematico" value="sim" checked> Sim</label>
        <label><input type="radio" name="matematico" value="nao"> Não</label>
      </td>
    </tr>
    
    <!-- Combobox / Select (Dropdown) -->
    <tr>
      <td><label for="ano_ingresso">Em que ano você ingressou na universidade:</label></td>
      <td>
          <select id="ano_ingresso" name="ano_ingresso">
              <!-- Atributo required pode ser usado se deixarmos uma opção neutra -->
              <option value="" disabled>Selecione um ano</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024" selected>2024</option>
              <option value="2025">2025</option>
          </select>
      </td>
    </tr>
    
    <!-- Select Múltiplo / Lista -->
    <tr>
      <td><label for="habilidades">O que você pode fazer:</label></td>
      <td>
          <select id="habilidades" name="habilidades" size="3">
              <option value="matematica" selected>Matemática</option>
              <option value="matematica_aplicada">Matemática Aplicada</option>
              <option value="info_aplicada">Matemática Aplicada e Informática</option>
          </select>
      </td>
    </tr>
    
    <!-- Textarea para blocos longos de texto -->
    <tr>
      <td><label for="impressoes">As suas impressões sobre o treinamento:</label></td>
      <td>
         <textarea id="impressoes" name="impressoes" cols="35" rows="4" placeholder="Escreva aqui sua opinião..."></textarea>
      </td>
    </tr>
    
    <!-- Botões de Ação (Submit e Reset) -->
    <tr>
      <td align="right" colspan="2">
         <input type="submit" value="Enviar">
         <input type="reset" value="Limpar">
      </td>
    </tr>
  </table>
  </form>

</body>
</html>
```

### Explicação:
A estrutura `<table>` divide os elementos perfeitamente em duas colunas (rótulos e inputs). Adicionei a tag `<label for="...">` que melhora exponencialmente a usabilidade, permitindo que o clique na palavra foque no input (desde que o `for` faça par com o `id` do input). O requisito explícito do laboratório mencionava *"As duas opções de condições, são campos obrigatórios"*. Logo, asseguramos o uso do atributo `required` nos principais inputs.

---

## Laboratório 3 – HTML e CSS

### 🎯 Objetivo:
Criar um pequeno website contendo 3 páginas HTML interligadas, fazendo uso dos 3 tipos de CSS (Inline, Interno e Externo), com Menu de Navegação, Imagem de fundo abarcando a tela toda, tags semânticas (`div`, `footer`).

### 📋 Solução Detalhada e Raciocínio:
Vamos arquitetar três páginas: `index.html` (Início), `sobre.html` (Sobre Nós) e `contato.html` (Fale Conosco). Haverá um arquivo central de CSS chamado `estilo.css`.

#### Arquivo Externo de Estilos: `estilo.css` (CSS Externo)
```css
/* Reseta as margens padrão do navegador */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Imagem de Fundo na tela inteira */
    background-image: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #333;
}

/* O fundo escuro com transparência ajuda a ler os textos em cima da imagem */
.container {
    background-color: rgba(255, 255, 255, 0.9);
    width: 80%;
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 8px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
}

nav {
    background-color: #2c3e50;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 30px;
}

nav ul li a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
}

nav ul li a:hover {
    color: #3498db;
}

main {
    flex-grow: 1; /* Faz a div crescer para empurrar o footer para baixo */
}

footer {
    text-align: center;
    margin-top: 30px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
    color: #555;
}
```

#### Página 1: `index.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Início - Meu Site</title>
    <!-- CSS Externo -->
    <link rel="stylesheet" href="estilo.css">
    
    <!-- CSS Interno -->
    <style>
        .hero-title {
            text-align: center;
            color: #2980b9;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <nav>
            <ul>
                <li><a href="index.html">Início</a></li>
                <li><a href="sobre.html">Sobre</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </nav>

        <main>
            <h1 class="hero-title">Bem-vindos à Página Inicial</h1>
            <!-- CSS Inline aplicado diretamente na tag p -->
            <p style="font-size: 1.2em; line-height: 1.6; text-align: justify;">
                Este é o projeto do Laboratório 3. Aqui demonstramos a junção perfeita entre a semântica do HTML5 e o poder de estilização do CSS3. Utilizamos uma imagem imersiva de fundo com o atributo <code>background-size: cover;</code>, garantindo que não importa o tamanho do monitor, a imagem irá preencher todo o espaço.
            </p>
        </main>

        <footer>
            <p>Laboratório 3 &copy; 2026. Desenvolvido com dedicação.</p>
        </footer>
    </div>
</body>
</html>
```

*(O código estrutural para `sobre.html` e `contato.html` seria idêntico, alternando apenas o título da página e o conteúdo da tag `<main>`.)*

### O que Aprendemos:
- **`background-size: cover;`**: A grande chave para "ocupar a tela inteira" sem distorcer a imagem.
- **Três tipos de CSS**: Foram exigidos os 3 estilos. No `index.html`, utilizamos o `<link href="estilo.css">` (externo), o `<style>` na seção de cabeçalho (interno) e o atributo `style="..."` no parágrafo (inline).
- **Navegação Interligada**: A tag `<nav>` com a lista `<ul>` conectando `index.html`, `sobre.html` e `contato.html` proporciona a experiência fluida de um site real.

---

## Exercício: Animações CSS

### 🎯 Objetivo:
Criar uma página web contendo um quadrado colorido no centro da tela que deve: Começar azul, mover-se da esquerda para a direita, mudar para vermelho durante o movimento, retornar, e repetir tudo continuamente em loop.

### 📋 Solução Detalhada e Raciocínio:
O CSS provê o sistema de `@keyframes` para resolver isso.

#### O Código da Animação
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício de Animação - O Quadrado Mágico</title>
    <style>
        /* Reset e alinhamento no centro vertical da tela */
        body {
            margin: 0;
            height: 100vh; /* Altura total da Viewport */
            display: flex;
            align-items: center; /* Centraliza verticalmente */
            /* A centralização horizontal não será total pois queremos que ele parta da esquerda */
            padding-left: 10vw; /* Dá uma margem inicial do canto esquerdo da tela */
            background-color: #f0f0f0;
        }

        .caixa {
            width: 150px;
            height: 150px;
            background-color: blue;
            border-radius: 10px; /* Bordas levemente arredondadas para design moderno */
            
            /*
              animation: [nome] [duração] [repetições] [direção]
              nome: movimentacaoCaixa
              duração: 4s (ida e volta somam 8s)
              infinite: repete para sempre
              alternate: ao chegar no final (100%), ele reproduz de 100% a 0%, o que faz a caixa "retornar".
            */
            animation: movimentacaoCaixa 4s infinite alternate;
        }

        /* O Keyframe de 0% a 100% */
        @keyframes movimentacaoCaixa {
            0% {
                transform: translateX(0);
                background-color: blue;
            }
            50% {
                /* A meio caminho, vamos transitar por uma cor secundária ou uma mescla. 
                   Opcionalmente, podemos deixá-lo roxo durante a viagem */
                background-color: purple; 
            }
            100% {
                /* translateX é muito mais performático que margin-left! 
                   Ao invés de margin-left, movemos 600px na tela usando GPU. */
                transform: translateX(60vw); 
                background-color: red;
            }
        }
    </style>
</head>
<body>

    <div class="caixa"></div>

</body>
</html>
```

### Por que esta solução é otimizada?
No texto original (do arquivo de estudo txt), o movimento era feito alterando o `margin-left` (indo de `0` para `1800px`).
Alterar propriedades de Box Model, como `margin` e `padding`, dentro de um keyframe, não é uma boa prática corporativa. Isso força o navegador a recalcular o layout de todos os elementos na tela a cada *frame* da animação (um fenômeno chamado de *Reflow/Layout thrashing*). 
Na nossa solução, utilizamos `transform: translateX()`, que é manipulado exclusivamente pela placa de vídeo (GPU), sendo incrivelmente leve e proporcionando 60 quadros por segundo sem engasgos.
O comando `alternate` na propriedade de animação garante o requisito "Retornar à posição inicial" de forma fluida.
