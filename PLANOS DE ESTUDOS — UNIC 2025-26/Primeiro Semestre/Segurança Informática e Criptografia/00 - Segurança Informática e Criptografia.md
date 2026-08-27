---
disciplina: "Segurança Informática e Criptografia"
tipo: "Dashboard da Disciplina"
semestre: "1.º Semestre"
data_exame: "2026-09-01"
horario_exame: "09:00 - 11:00"
sala: "Cutato 0.4"
tag_sinergia: "Tag B"
parceira_estudo: "Direção de Sistemas de Informação"
---

# 🛡️ Dashboard: Segurança Informática e Criptografia

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Terça-feira, **01 de Setembro de 2026**
> - **⏰ Horário:** **09:00 às 11:00** (Turno Matutino)
> - **🏛️ Sala:** **Cutato 0.4**
> - **🏷️ Tag de Sinergia:** `Tag B` (Estudar em conjunto com **Direção de Sistemas de Informação**)
> - **⚡ Nível de Complexidade:** Alta (Teoria Criptográfica + Análise de Vulnerabilidades)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Conceitos fundamentais, Tríade CIA, Algoritmos RSA/AES, Hashing, Assinaturas Digitais e Firewalls.*
- 🛠️ [[02 - Exercícios e Práticas]] — *Estudos de caso, análise de ataques reais, questões resolvidas de provas anteriores.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: A Tríade CIA
> **P:** Quais são os 3 pilares da segurança da informação e o que cada um garante?
> **R:** 
> - **Confidencialidade:** Apenas utilizadores autorizados acedem ao dado (Criptografia, ACLs).
> - **Integridade:** O dado não foi corrompido ou alterado sem autorização (Hashes SHA-256, Checksums).
> - **Disponibilidade:** Os serviços e dados estão acessíveis quando necessários (Redundância, RAID, mitigação DDoS).

> [!tip] Flashcard 2: Criptografia Simétrica vs Assimétrica
> **P:** Qual a diferença fundamental entre Criptografia Simétrica e Assimétrica?
> **R:** 
> - **Simétrica (ex: AES, DES):** Utiliza a **mesma chave secreta** para encriptar e decriptar. Rápida, mas com desafio na distribuição de chaves.
> - **Assimétrica (ex: RSA, ECC):** Utiliza um **par de chaves pública e privada**. O que a pública encripta, apenas a privada correspondente decripta. Mais lenta, ideal para troca de chaves e assinaturas.

> [!tip] Flashcard 3: Assinatura Digital
> **P:** Como uma Assinatura Digital garante Autenticidade e Não-Repúdio?
> **R:** O emissor gera um Hash da mensagem e encripta esse Hash com a sua **chave privada**. Qualquer pessoa com a chave pública do emissor pode decriptar o Hash e comparar. Como só o emissor possui a chave privada, comprova a sua identidade e impede que negue a autoria.

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** Uma empresa bancária sofreu um ataque *Man-in-the-Middle (MitM)* onde transferências foram alteradas em trânsito.
> **Missão:** 
> 1. Explica qual dos pilares da Tríade CIA foi comprometido.
> 2. Desenha uma arquitetura de proteção usando TLS/HTTPS, Certificados X.509 e Hashing para anular definitivamente essa vulnerabilidade.
> *(Verifica a solução detalhada no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Primeiro Semestre/Segurança Informática e Criptografia"
WHERE file.name != "00 - Segurança Informática e Criptografia.md"
SORT file.name ASC
```
