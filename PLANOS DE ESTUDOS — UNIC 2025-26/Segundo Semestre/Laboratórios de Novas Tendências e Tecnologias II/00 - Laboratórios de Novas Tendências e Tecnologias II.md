---
disciplina: "Laboratórios de Novas Tendências e Tecnologias II"
tipo: "Dashboard da Disciplina"
semestre: "2.º Semestre"
data_exame: "2026-09-07"
horario_exame: "14:00 - 16:00"
sala: "Cutato 0.4"
tag_sinergia: "Tag E"
parceira_estudo: "Laboratórios de Novas Tendências e Tecnologias I"
---

# 🤖 Dashboard: Laboratórios de Novas Tendências e Tecnologias II

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Segunda-feira, **07 de Setembro de 2026**
> - **⏰ Horário:** **14:00 às 16:00** (Turno Vespertino)
> - **🏛️ Sala:** **Cutato 0.4**
> - **🏷️ Tag de Sinergia:** `Tag E` (Estudar em conjunto com **Laboratórios I**)
> - **⚡ Nível de Complexidade:** Muito Alta (Big Data, Ecossistema Hadoop/Spark, Inteligência Artificial, Machine Learning, Visão Computacional e IoT/Edge)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Os 5 Vs do Big Data (Volume, Velocidade, Variedade, Veracidade, Valor), Hadoop HDFS e MapReduce, Apache Spark, Inteligência Artificial vs Machine Learning vs Deep Learning, Redes Neuronais Convolucionais (CNN) para Visão Artificial e Edge Computing.*
- 🛠️ [[02 - Exercícios e Práticas]] — *Pipelines de processamento Big Data, classificação de modelos ML (Supervisionado vs Não-Supervisionado), extração de features em imagens e exercícios de provas.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: Os 5 Vs do Big Data
> **P:** Quais são os 5 Vs fundamentais que caracterizam os ecossistemas de Big Data?
> **R:**
> 1. **Volume:** Quantidade massiva de dados (terabytes a petabytes).
> 2. **Velocidade:** Taxa ultrarrápida de geração e necessidade de processamento em tempo real/streaming.
> 3. **Variedade:** Diversidade de formatos (Estruturados, Semi-estruturados JSON/XML, Não-estruturados Vídeo/Áudio).
> 4. **Veracidade:** Confiabilidade e qualidade dos dados brutos coletados.
> 5. **Valor:** O retorno de inteligência e negócio extraído através da análise.

> [!tip] Flashcard 2: Machine Learning Supervisionado vs Não-Supervisionado
> **P:** Qual a distinção técnica entre Aprendizado Supervisionado e Não-Supervisionado?
> **R:**
> - **Supervisionado:** O modelo é treinado com **dados rotulados** (pares entrada $\rightarrow$ saída esperada). Usado para **Classificação** (ex: spam vs não-spam) e **Regressão** (ex: previsão de preços).
> - **Não-Supervisionado:** O modelo descobre padrões e relações em **dados não-rotulados**. Usado para **Agrupamento/Clustering** (ex: K-Means, segmentação de clientes) e Redução de Dimensionalidade (PCA).

> [!tip] Flashcard 3: Visão Artificial e Redes Convolucionais (CNNs)
> **P:** Como uma Rede Neuronal Convolucional (CNN) processa imagens em Visão Computacional?
> **R:** Utiliza **Camadas Convolucionais** com filtros (kernels) que deslizam sobre a matriz de pixels para extrair características visuais (arestas, texturas, formas complexas), seguidas de **Pooling** (redução espacial) e **Camadas Totalmente Conectadas** para a classificação final.

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** Implementação de um sistema de tráfego inteligente capaz de detetar matrículas e veículos em tempo real nas vias de Luanda.
> **Missão:** 
> 1. Modela a arquitetura de processamento em pipeline (Edge Computing nas câmaras $\rightarrow$ Mensageria/Streaming $\rightarrow$ Apache Spark $\rightarrow$ Armazenamento em Data Lake).
> 2. Explica por que o processamento na borda (*Edge Computing*) reduz o consumo de largura de banda e a latência na resposta de emergência.
> *(Vê a resolução completa no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Segundo Semestre/Laboratórios de Novas Tendências e Tecnologias II"
WHERE file.name != "00 - Laboratórios de Novas Tendências e Tecnologias II.md"
SORT file.name ASC
```
