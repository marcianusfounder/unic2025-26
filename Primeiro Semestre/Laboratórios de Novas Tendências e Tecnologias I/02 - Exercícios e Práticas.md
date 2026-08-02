---
disciplina: "Laboratórios de Novas Tendências e Tecnologias I"
tipo: "02 - Exercícios e Práticas"
status: "Não Iniciado"
---
# 02 - Exercícios e Práticas: Laboratórios de Novas Tendências e Tecnologias I

Este documento contém estudos de caso detalhados, cenários práticos e exercícios hands-on para consolidar o conhecimento teórico abordado na disciplina. As práticas foram projetadas para simular desafios do mundo real em nível de engenharia sênior.

---

## 1. Práticas em Cloud Computing

### Estudo de Caso 1: Migração para Arquitetura Cloud-Native (AWS)
**Contexto:** Uma startup de e-commerce "SuperStore" possui um aplicativo monolítico rodando em um único servidor local. Durante a Black Friday, o servidor travou devido à sobrecarga. Eles precisam migrar para a AWS usando uma arquitetura escalável e tolerante a falhas.
**Desafio Prático:** Desenhe e implemente (em teoria ou via Terraform/AWS Console) a nova infraestrutura.

**Passos Guiados:**
1. **Desacoplamento de Banco de Dados:** Migre o banco de dados local MySQL para o Amazon RDS (Relational Database Service) com Multi-AZ (Multi-Availability Zone) ativado para alta disponibilidade.
2. **Armazenamento de Estáticos:** Mova todas as imagens dos produtos para um bucket do Amazon S3. Configure o Amazon CloudFront (CDN) na frente do S3 para reduzir a latência de carregamento das imagens em todo o mundo.
3. **Escalonamento Horizontal:** Crie uma AMI (Amazon Machine Image) do servidor web monolítico. Configure um Auto Scaling Group (ASG) que aumente o número de instâncias EC2 sempre que o uso de CPU ultrapassar 75%.
4. **Balanceamento de Carga:** Coloque um Application Load Balancer (ALB) na frente do ASG para distribuir o tráfego uniformemente entre as instâncias EC2.

### Exercício Prático 2: Serverless (GCP/AWS)
**Objetivo:** Criar um redimensionador de imagens automático usando computação Serverless.
**Instruções:**
1. Crie dois buckets (S3 na AWS ou Cloud Storage no GCP): um chamado `imagens-originais` e outro `imagens-redimensionadas`.
2. Escreva uma função (AWS Lambda ou Google Cloud Function) em Node.js ou Python.
3. Configure a função para ser engatilhada (trigger) automaticamente sempre que um novo arquivo for feito upload no bucket `imagens-originais`.
4. A função deve usar uma biblioteca (como o Sharp ou Pillow) para redimensionar a imagem para 800x600 pixels e salvá-la no bucket `imagens-redimensionadas`.

---

## 2. Práticas em Frameworks Avançados (Laravel, Express, Vue.js)

### Estudo de Caso 3: Arquitetura de Microserviços (Express.js + Vue.js)
**Contexto:** Construir uma aplicação simplificada de "Ridesharing" (como o Uber).
**Desafio Prático:** Separar o sistema em microserviços e construir o frontend reativo.

**Serviço 1: Motoristas (Express.js + MongoDB)**
1. Crie uma API REST em Express.js que gerencia motoristas (`/api/drivers`).
2. Defina endpoints para: Cadastrar motorista (POST), Listar motoristas próximos (GET), Atualizar localização do motorista (PUT).
3. Use o Mongoose para conectar ao MongoDB e criar um Schema `Driver` com suporte a indexação geoespacial (2dsphere) para consultas por localização.

**Serviço 2: Passageiros/Viagens (Laravel + MySQL)**
1. Crie uma API REST em Laravel que gerencia a solicitação de viagens (`/api/rides`).
2. Use o Eloquent para relacionar `User`, `Ride`, e `Driver`.
3. Dispare um Evento no Laravel quando uma corrida for solicitada, enviando uma notificação assíncrona usando RabbitMQ ou Redis Pub/Sub para que o Serviço 1 seja alertado.

**Frontend: Painel de Controle (Vue.js + Pinia)**
1. Crie uma aplicação Vue 3 usando Vite (`npm create vue@latest`).
2. Utilize o Vue Router para criar duas visões: `DashboardMotorista.vue` e `SolicitarCorrida.vue`.
3. Utilize a Composition API e `fetch` (ou Axios) para buscar motoristas próximos do Serviço 1 a cada 5 segundos (simulando tempo real).
4. Gerencie o estado do "usuário logado" usando o Pinia (Store).

---

## 3. Práticas em Visão Artificial

### Exercício Prático 4: Contagem Automática de Objetos (OpenCV + Python)
**Objetivo:** Construir um script Python que lê uma imagem de uma esteira industrial contendo peças, detecta os contornos e conta o número de peças.
**Ferramentas:** Python, OpenCV (`cv2`), Numpy.

**Passos Guiados:**
1. Carregue a imagem usando `cv2.imread()`.
2. Converta a imagem para escala de cinza (`cv2.cvtColor`).
3. Aplique um filtro Gaussiano (`cv2.GaussianBlur`) para reduzir o ruído.
4. Aplique binarização/limiarização adaptativa (`cv2.adaptiveThreshold`) ou Canny Edge Detection para destacar as bordas dos objetos contra o fundo da esteira.
5. Encontre os contornos usando `cv2.findContours`.
6. Itere sobre os contornos. Se a área do contorno (`cv2.contourArea`) for maior que um valor mínimo (para ignorar sujeira), desenhe um retângulo delimitador (`cv2.boundingRect` e `cv2.rectangle`) em volta da peça original e incremente um contador.
7. Exiba a imagem final e o total contado usando `cv2.imshow()`.

### Estudo de Caso 5: Detecção de Equipamento de Proteção (YOLO)
**Contexto:** Um canteiro de obras precisa monitorar se todos os trabalhadores estão usando capacetes.
**Desafio Prático:** Usar Transfer Learning. Baixe pesos pré-treinados do YOLOv8 e faça o *fine-tuning* em um pequeno dataset personalizado do Kaggle (Imagens de pessoas com e sem capacetes) no Google Colab.

---

## 4. Práticas em Informática Quântica

### Exercício Prático 6: Meu Primeiro Circuito Quântico (IBM Qiskit)
**Objetivo:** Utilizar a biblioteca Qiskit em Python para simular a criação de um Estado de Bell (um par de qubits maximamente emaranhados).
**Contexto:** Este exercício ajuda a solidificar os conceitos de superposição e emaranhamento sem precisar de um computador quântico físico, usando o simulador Aer.

**Passos (Código Python):**
1. Instale o Qiskit: `pip install qiskit qiskit-aer`.
2. Crie um circuito quântico de 2 qubits e 2 bits clássicos (para medição).
   ```python
   from qiskit import QuantumCircuit
   circuito = QuantumCircuit(2, 2)
   ```
3. Aplique a porta Hadamard (H) no qubit 0 (colocando-o em superposição).
   ```python
   circuito.h(0)
   ```
4. Aplique a porta CNOT (CX), usando o qubit 0 como controle e o qubit 1 como alvo. Isso emaranha os dois qubits.
   ```python
   circuito.cx(0, 1)
   ```
5. Meça os dois qubits.
   ```python
   circuito.measure([0,1], [0,1])
   ```
6. Execute o circuito no `AerSimulator`. O resultado teórico deve ser aproximadamente 50% de probabilidade de medir `00` e 50% de probabilidade de medir `11`. Nunca mediremos `01` ou `10`, demonstrando o emaranhamento.

### Estudo de Caso 7: Otimização de Rotas (Logística Quântica)
**Contexto:** Uma empresa de logística quer minimizar o caminho de entrega entre N cidades (O Problema do Caixeiro Viajante - TSP).
**Desafio Teórico-Prático:** Pesquise sobre o algoritmo QAOA (Quantum Approximate Optimization Algorithm). Explique em um documento curto como esse algoritmo híbrido (quântico-clássico) pode ser aplicado para resolver o TSP melhor que heurísticas clássicas quando o número de cidades cresce absurdamente. Use o Qiskit Optimization Module para explorar a modelagem de problemas QUBO (Quadratic Unconstrained Binary Optimization).
