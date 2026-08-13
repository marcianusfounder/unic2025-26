---
tipo: "Fonte Original"
origem: "Rar Programação Web Animações Css"
---

# Rar Programação Web Animações Css

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

Animações com CSS
Animações CSS são uma maneira eficaz de adicionar movimento e interatividade aos elementos de uma página web, permitindo que as pessoas desenvolvedoras criem experiências mais ricas e dinâmicas para as pessoas usuárias.
O CSS suporta a capacidade de animar objetos HTML com bastante facilidade sem JavaScript. Para trabalhar com animações CSS, você precisa das seguintes propriedades:
As principais propriedades de animação em CSS são:
animation-name: Especifica o nome da regra @keyframes que define a animação. Cada @keyframes contém os estilos que devem ser aplicados em diferentes momentos da animação.
animation-duration: Define o tempo total que a animação deve levar para completar um ciclo.
animation-timing-function: Controla a velocidade da animação ao longo do tempo, permitindo aceleração, desaceleração ou variações na velocidade.
animation-delay: Especifica o atraso antes que a animação comece.
animation-iteration-count: Determina quantas vezes a animação deve repetir.
animation-direction: Define se a animação deve ser reproduzida na direção normal, inversa, alternativa ou alternativa inversa.
animation-fill-mode: Especifica os estilos que devem ser aplicados antes e depois da execução da animação.
animation-play-state: Permite pausar ou retomar a animação.
A propriedade “animation” é uma propriedade abreviada que permite definir todas as propriedades de animação em uma única declaração.
<div></div>

@keyframes example {
    from {background-color: red;} /* Cor inicial */
    to {background-color: yellow;} /* Cor final */
}
 
div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
} 

Os keyframes são uma regra CSS que permite definir animações. Eles são usados para criar sequências de estilos que são aplicados a um elemento ao longo do tempo, permitindo que o elemento se mova, mude de cor, altere tamanho, e assim por diante, de maneira controlada.
Cada keyframe é identificado por um nome único e contém uma lista de seletores que especificam os estilos para cada ponto da animação.
Sintaxe:

@keyframes nome_animação {
  0% {
    propriedade: significado;
    ...
    propriedade: significado;
  }
  x2% {
    propriedade: significado;
    ...
    propriedade: significado;
  }
  ...
  x3% {
    propriedade: significado;
    ...
    propriedade: significado;
  }
  100% {
    propriedade: significado;
    ...
    propriedade: significado;
  }
}

Exemplos:
.animated-block {
  animation-name: nome_animacao;
  animation-duration: 3s;
  animation-delay: 3s;
  animation-iteration: infinite;
  animation-direction: alternate-reverse;
  animation-timing-function: linear;
  animation-fill-mode: forwards

<!DOCTYPE html>
<html>
<head>
    <title>Animação CSS</title>
    <link rel="stylesheet" href="animacao.css">
</head>
<body>

    <div class="caixa"></div>

</body>
</html>

.caixa {
    width: 100px;
    height: 100px;
    background-color: blue;

    /* Aplicação da animação */
    animation-name: mover;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

/* Definição da animação */
@keyframes mover {
    from {
        margin-left: 0;
    }

    to {
        margin-left: 300px;
    }
}


Exercício 1
Crie uma página web contendo um quadrado colorido no centro da tela. O quadrado deverá:
Começar na cor azul. 
Mover-se horizontalmente da esquerda para a direita. 
Mudar de cor para vermelho durante o movimento. 
Retornar à posição inicial. 
Repetir a animação continuamente.
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício de Animação</title>
    <link rel="stylesheet" href="exercicio.css">
</head>
<body>

    <div class="caixa"></div>

</body>
</html>
body{
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.caixa{
    width: 100px;
    height: 100px;
    background-color: blue;

    animation: mover 5s infinite alternate;
}

@keyframes mover{

    0%{
        margin-left: 0;
        background-color: blue;
    }

    50%{
        background-color: green;
    }

    100%{
        margin-left: 1800px;
        background-color: red;
    }

}

