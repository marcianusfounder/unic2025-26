# Exercícios e Práticas: Engenharia de Software II

Este documento contém uma extensa lista de exercícios teóricos e práticos com o objetivo de fixar os conteúdos abordados em Engenharia de Software II. Os exercícios vão de perguntas conceituais até estudos de caso onde você precisará desenhar arquiteturas e diagramas UML.

---

## 1. Arquitetura de Software e Atributos de Qualidade

### Exercícios Teóricos
1. **Definição:** Explique o que é a Arquitetura de Software e por que ela é considerada as decisões de "alto custo de mudança" em um projeto.
2. **Atributos de Qualidade (Cenários):** Classifique os seguintes cenários nos atributos de qualidade corretos (Disponibilidade, Desempenho, Modificabilidade, Segurança, Testabilidade, Usabilidade):
   - A) O sistema deve processar 10.000 requisições por segundo.
   - B) O tempo médio de recuperação de falhas do sistema não deve ultrapassar 5 minutos (MTTR).
   - C) Senhas de usuários devem ser armazenadas utilizando hash e sal (bcrypt).
   - D) A adição de uma nova forma de pagamento (ex: Pix) não deve afetar o código do módulo de carrinho de compras.
3. **Padrões IEEE/ISO:** O que propõe a norma ISO/IEC/IEEE 42010 em relação à descrição de arquiteturas?

### Prática: Identificação de Atributos
- **Estudo de Caso:** Um aplicativo hospitalar para monitoramento cardíaco em tempo real (UTI).
- **Tarefa:** Liste os 3 atributos de qualidade *mais críticos* para este sistema. Justifique tecnicamente por que esses três são vitais frente aos outros.

---

## 2. Paradigmas e POO (Programação Orientada a Objetos)

### Exercícios Teóricos
1. **Paradigmas:** Compare os paradigmas de programação Estruturado, Declarativo e Orientado a Objetos. Quais as principais limitações da programação estruturada que levaram à adoção da POO?
2. **Quatro Pilares da POO:** Descreva, com exemplos do mundo real, os conceitos de:
   - Abstração
   - Encapsulamento
   - Herança
   - Polimorfismo

### Prática de Refatoração Mental
- **Código Imperativo:** Imagine um algoritmo em C que utiliza `struct` de Veículo e um longo `switch-case` numa função `calcularImposto(Veiculo v)` baseada no tipo (carro, moto, caminhao).
- **Tarefa:** Como você reestruturaria isso usando POO (especificamente Polimorfismo)? Escreva um pseudo-código Java/C# demonstrando as classes `Veiculo`, `Carro`, `Moto` e o método abstrato `calcularImposto()`.

---

## 3. Análise vs. Design Orientado a Objetos (AOO / DOO)

### Exercícios Teóricos
1. Qual a principal diferença entre a **Análise** Orientada a Objetos e o **Design** Orientado a Objetos?
2. **Acoplamento e Coesão:** Qual é a regra de ouro do design em relação a acoplamento e coesão? Cite as consequências de um sistema com Alto Acoplamento e Baixa Coesão.
3. No diagrama de classes UML, qual a diferença entre **Agregação** e **Composição**? Desenhe (ou explique textualmente) como representar cada uma.

### Prática: Diagrama de Classes
- **Cenário:** Sistema de Biblioteca.
- **Regras:**
  - Uma `Biblioteca` tem muitos `Livros`. Se a biblioteca for destruída, os livros físicos lá dentro também são (Composição).
  - Um `Leitor` (Usuário) pode realizar múltiplos `Emprestimos`. Se o Leitor for excluído do sistema, o registro do empréstimo histórico deve permanecer (Agregação / Associação simples).
  - Todo `Emprestimo` tem uma data de início, data prevista de devolução, e refere-se a um único `Livro`.
- **Tarefa:** Desenhe um diagrama de classes UML (usando Mermaid ou descrevendo as relações, atributos e multiplicidades).

---

## 4. Princípios S.O.L.I.D. e G.R.A.S.P.

### Exercícios Teóricos: Identificação de Violações SOLID
Para cada situação abaixo, identifique qual princípio SOLID está sendo violado e justifique:
1. Uma interface `IVeiculo` tem os métodos `ligarMotor()`, `acelerar()` e `voar()`. A classe `Carro` implementa `IVeiculo`, mas lança uma exceção no método `voar()`.
2. A classe `RelatorioDeVendas` obtém dados do banco, faz cálculos complexos de estatística e, por fim, converte os resultados para formato PDF e os envia por email.
3. A classe `ControladorDePagamento` instancia diretamente a classe concreta `CieloGateway` (usando o `new CieloGateway()`) em seu construtor.

### Exercícios Práticos: GRASP
- **Cenário:** Em um sistema de Vendas (PDV), quando o caixa confirma a venda, precisamos criar a instância de `Pagamento`.
- **Tarefa:** Segundo o padrão GRASP de **Criador (Creator)**, qual classe deveria ser responsável por criar a instância de `Pagamento`? A `Venda` ou o `Caixa`? Justifique sua resposta aplicando as regras do padrão Criador.

---

## 5. Padrões de Arquitetura e de Projeto

### Exercícios Teóricos
1. Descreva o Padrão Arquitetônico **Pipes and Filters (Tubulações e Filtros)**. Em que tipo de aplicações ele é extremamente útil?
2. Explique a motivação do padrão MVC (Model-View-Controller). Qual problema a separação em três camadas resolve na construção de interfaces de usuário?
3. Escolha **dois** dos seguintes padrões de projeto (GoF) e explique a intenção de cada um:
   - Singleton
   - Factory Method
   - Strategy
   - Observer

### Prática: Padrão Strategy
- **Cenário:** Um e-commerce tem uma classe `Carrinho` que calcula o frete. Hoje, o cálculo é feito em um `if-else` gigante dependendo da transportadora (Correios, Jadlog, Fedex).
- **Tarefa:** Aplique o padrão **Strategy**. Descreva quais interfaces seriam criadas, quais classes implementariam essa interface, e como a classe `Carrinho` utilizaria a estratégia (sem usar `if-else`).

---

## 6. Metodologia: O RUP (Rational Unified Process)

### Exercícios Teóricos
1. Cite as 4 fases do ciclo de vida do RUP e descreva brevemente o objetivo principal de cada uma.
2. O que o RUP quer dizer quando afirma que é **"Dirigido por Casos de Uso" (Use Case Driven)** e **"Centrado na Arquitetura"**?
3. No RUP, ao realizarmos a *Análise de Classes*, o modelo Entity-Control-Boundary (ECB) é frequentemente utilizado. Explique a responsabilidade de:
   - Classes de Interface (Boundary)
   - Classes de Controle (Control)
   - Classes de Entidade (Entity)

### Prática: Análise de Realização de Casos de Uso (ECB)
- **Cenário (Caso de Uso): "Sacar Dinheiro no Caixa Eletrônico (ATM)"**
- O Ator (Cliente) interage com a tela, insere o valor e o sistema verifica o saldo. Se houver saldo, dispensa o dinheiro e atualiza a conta.
- **Tarefa:** Identifique pelo menos:
  - 1 Classe Boundary.
  - 1 Classe de Controle.
  - 1 Classe de Entidade.
  - Descreva brevemente como a mensagem flui entre elas durante o saque de dinheiro (Ex: O ator envia requisição para Boundary -> Boundary chama Control -> Control valida com a Entidade).

---
*Fim dos exercícios. Recomenda-se a discussão em grupo das respostas arquitetônicas, pois muitas decisões de design de software não possuem uma única resposta certa, mas sim análises de trade-offs.*
