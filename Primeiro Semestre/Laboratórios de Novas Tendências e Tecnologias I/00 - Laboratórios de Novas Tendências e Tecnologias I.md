---
disciplina: "Laboratórios de Novas Tendências e Tecnologias I"
tipo: "Dashboard da Disciplina"
semestre: "1.º Semestre"
data_exame: "2026-09-07"
horario_exame: "09:00 - 11:00"
sala: "Cutato 0.4"
tag_sinergia: "Tag E"
parceira_estudo: "Laboratórios de Novas Tendências e Tecnologias II"
---

# ☁️ Dashboard: Laboratórios de Novas Tendências e Tecnologias I

> [!important] 🎯 Informações Oficiais do Exame
> - **📅 Data da Prova:** Segunda-feira, **07 de Setembro de 2026**
> - **⏰ Horário:** **09:00 às 11:00** (Turno Matutino)
> - **🏛️ Sala:** **Cutato 0.4**
> - **🏷️ Tag de Sinergia:** `Tag E` (Estudar em conjunto com **Laboratórios II**)
> - **⚡ Nível de Complexidade:** Alta (Computação em Nuvem, Modelos IaaS/PaaS/SaaS, Virtualização, Containers Docker e Orquestração)

---

## 🗂️ Guias Mestres de Estudo
- 📖 [[01 - Guia de Estudo Teórico]] — *Cloud Computing, Pilares NIST, Modelos de Serviço (IaaS, PaaS, SaaS), Modelos de Implantação (Pública, Privada, Híbrida), Virtualização vs Contentorização (Docker, Hipervisores Tipo 1 e 2), Microsserviços e Arquiteturas Serverless.*
- 🛠️ [[02 - Exercícios e Práticas]] — *Configuração de Dockerfile e docker-compose, dimensionamento de instâncias Cloud, cálculo de ROI de infraestrutura e exercícios de provas.*

---

## 🎴 Baralho de Flashcards Rápidos (Active Recall)

> [!tip] Flashcard 1: Modelos de Serviço Cloud (IaaS vs PaaS vs SaaS)
> **P:** Quem gere o quê nos 3 modelos de serviço de computação em nuvem?
> **R:**
> - **IaaS (Infrastructure as a Service - ex: AWS EC2, Azure VM):** O provedor gere hardware, rede e virtualização; o cliente gere o SO, middleware, runtime e aplicações.
> - **PaaS (Platform as a Service - ex: Heroku, AWS Elastic Beanstalk):** O provedor gere até ao runtime; o cliente apenas implementa o seu código/aplicação e dados.
> - **SaaS (Software as a Service - ex: Google Workspace, Microsoft 365):** O provedor gere 100% da pilha tecnológica; o cliente apenas consome o serviço.

> [!tip] Flashcard 2: Máquinas Virtuais (VMs) vs Contentores Docker
> **P:** Qual a diferença arquitetural entre uma VM e um Contentor Docker?
> **R:**
> - **VM (Virtualização por Hipervisor):** Cada VM inclui um **Sistema Operativo Convidado (Guest OS) completo**, tornando-a pesada (gigabytes) e com arranque lento.
> - **Docker (Contentorização ao nível do Kernel):** Todos os contentores **partilham o kernel do Sistema Operativo Anfitrião**, isolando apenas os processos e bibliotecas. São extremamente leves (megabytes) e inicializam em milissegundos.

> [!tip] Flashcard 3: Hipervisores Tipo 1 (Bare-Metal) vs Tipo 2 (Hosted)
> **P:** Qual a distinção técnica entre Hipervisor Tipo 1 e Tipo 2?
> **R:**
> - **Tipo 1 (Bare-Metal - ex: VMware ESXi, Proxmox, Xen):** É instalado **diretamente sobre o hardware físico**, sem SO intermediário (máximo desempenho e estabilidade para Data Centers).
> - **Tipo 2 (Hosted - ex: VirtualBox, VMware Workstation):** É executado como uma aplicação sobre um SO anfitrião convencional (ideal para testes locais e desenvolvimento).

---

## ⚔️ Boss Fight / Desafio Prático
> **Cenário:** Uma instituição pública quer migrar a sua infraestrutura de servidores físicos antigos para uma arquitetura moderna em nuvem privada/híbrida.
> **Missão:** 
> 1. Escreve um `Dockerfile` para empacotar uma aplicação Web em Node.js ou Python.
> 2. Justifica a escolha entre IaaS e PaaS considerando custos operacionais, soberania de dados e facilidade de manutenção.
> *(Resolução e análise comparativa no [[02 - Exercícios e Práticas]])*

---

## 📚 Arquivo Completo da Disciplina

```dataview
TABLE tipo as "Tipo", file.mtime as "Última Atualização"
FROM "Primeiro Semestre/Laboratórios de Novas Tendências e Tecnologias I"
WHERE file.name != "00 - Laboratórios de Novas Tendências e Tecnologias I.md"
SORT file.name ASC
```
