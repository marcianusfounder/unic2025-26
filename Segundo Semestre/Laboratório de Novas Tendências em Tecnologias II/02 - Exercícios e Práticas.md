# Exercícios e Práticas: Laboratório de Novas Tendências em Tecnologias II

Este guia prático do segundo nível conduz o estudante através da prototipagem em realidades imersivas, desenvolvimento descentralizado e experimentação com conceitos quânticos utilizando simuladores.

---

## Laboratório 1: Implantação de um Smart Contract Básico

**Objetivo:** Escrever, compilar e realizar o deploy de um contrato inteligente na rede de testes Ethereum.

**Ferramenta:** Remix IDE (remix.ethereum.org)

**Cenário:** Você criará um contrato para registrar de forma imutável a nota de um aluno da disciplina LNTT II.

**Passos Práticos:**
1. Acesse o Remix IDE pelo navegador.
2. Crie um novo arquivo chamado `RegistroNotas.sol`.
3. Escreva o código na linguagem Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroNotas {
    // Variável de estado para armazenar a nota
    uint public notaLNTT;

    // Evento disparado quando a nota é atualizada
    event NotaAtualizada(uint novaNota);

    // Função para alterar/registrar a nota
    function definirNota(uint _novaNota) public {
        require(_novaNota <= 20, "A nota maxima e 20"); // Validacao
        notaLNTT = _novaNota;
        emit NotaAtualizada(_novaNota);
    }
}
```

4. **Compilação:** Na aba "Solidity Compiler", compile o código.
5. **Deploy:** Na aba "Deploy & Run Transactions", selecione o ambiente "Remix VM (London)" (rede simulada no navegador). Clique em Deploy.
6. **Interação:** No painel inferior, acesse o contrato implantado. Insira um valor (ex: 18) e chame a função `definirNota`. Depois, clique no botão `notaLNTT` para ler a nota registrada no bloco e confirmar a imutabilidade do registro.

---

## Laboratório 2: Experiência de Realidade Aumentada (AR) em Web

**Objetivo:** Criar uma experiência simples de AR acessível via navegador de smartphone, sem necessidade de instalar aplicativos.

**Ferramenta:** AR.js (uma biblioteca leve em JavaScript para Realidade Aumentada).

**Passos Práticos:**
1. Crie um arquivo HTML local (ex: `index.html`).
2. Utilize o seguinte código para inicializar uma cena de Realidade Aumentada baseada em "Marcadores" (Marker-based AR):

```html
<!DOCTYPE html>
<html>
  <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
  <!-- Importa o AR.js compatível com o A-Frame -->
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  <body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs>
      <!-- Define o Marcador Padrão (HIRO) -->
      <a-marker preset="hiro">
        <!-- Objeto virtual que aparecerá sobre o marcador: uma caixa giratória vermelha -->
        <a-box position='0 0.5 0' material='color: red;' animation="property: rotation; to: 0 360 0; loop: true; dur: 2000"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
```

3. **Hospedagem Rápida:** Publique este arquivo no GitHub Pages ou utilize o Live Server no VS Code via túnel (ngrok).
4. **Teste:** Pelo seu smartphone, acesse a URL gerada e dê permissão de câmera. Aponte a câmera para a imagem do "Marcador HIRO" (pesquise "Hiro marker" no Google e abra a imagem no monitor do seu PC). Você verá o cubo 3D renderizado flutuando sobre o padrão em sua mesa.

---

## Laboratório 3: Simulação de Circuitos Quânticos

**Objetivo:** Compreender a Superposição criando seu primeiro circuito quântico.

**Ferramenta:** IBM Quantum Composer (quantum-computing.ibm.com).

**Passos Práticos:**
1. Crie uma conta gratuita no IBM Quantum.
2. Abra o "Quantum Composer", a interface visual (arrastar e soltar) para construir circuitos.
3. Observe os fios horizontais que representam os *qubits* (q0, q1, etc.) iniciados em estado |0>.
4. Arraste uma **Porta Hadamard (H)** para o fio `q0`. A porta H coloca o qubit no estado de superposição (50% de chance de ser 0, 50% de chance de ser 1).
5. Arraste um bloco de **Medição (Measure)** - o ícone de um medidor rosa - e coloque-o logo após a porta H.
6. **Execução:** Clique em "Setup and Run" para rodar o circuito em um simulador na nuvem (ou num computador quântico real da IBM, se disponível na fila).
7. **Análise dos Resultados:** Você observará um histograma mostrando que o estado colapsou para '0' cerca de 50% das vezes e para '1' nas outras 50%. Você acabou de gerar aleatoriedade quântica verdadeira.
