# Exercícios e Práticas: Ética e Direito da Informática

Este documento complementa o *Guia de Estudo Teórico* e contém os exercícios práticos, questionários resolvidos, estudos de caso e guiões de seminários adaptados do material letivo.

---

## Prática 1: Questionário Resolvido de Segurança Informática e Auditoria

**1. Qual é o objetivo da segurança da informação? Quais são os seus elementos e o que cada um indica?**
> **Resposta:** O objetivo primordial é proteger os dados (em repouso, trânsito ou processamento) contra acessos não autorizados, alterações indevidas ou indisponibilidade, garantindo que o sistema permaneça confiável e restrito. 
> Os elementos principais formam o Triângulo CIA:
> - **Confidencialidade:** Garantia de que a informação é acessível apenas a pessoas autorizadas.
> - **Integridade:** Garantia de que os dados são precisos e não sofreram alterações ilegítimas.
> - **Disponibilidade:** A informação e os sistemas devem estar operacionais e acessíveis para os utilizadores sempre que necessário.
> - *Elementos adicionais:* Autenticidade (certeza sobre a autoria) e Não-Repúdio (impossibilidade de negar a execução de uma ação num sistema).

**2. A partir de que nível de segurança da informação é considerado o critério para qualificação para os Controles de Qualidade?**
> **Resposta:** Inicia-se a partir do momento em que a entidade comprova a conformidade mínima com frameworks e normativas internacionais (como a ISO/IEC 27001, COBIT e o NIST). O nível básico implica possuir a gestão de riscos e incidentes em funcionamento, bem como controlos rigorosos de acesso e documentação de processos.

**3. Como se define o cibercrime? Desenvolva dois exemplos que poderiam ocorrer em um ambiente de trabalho específico.**
> **Resposta:** Cibercrime é toda a atividade ilícita praticada com recurso a, ou tendo como alvo, dispositivos informáticos e redes.
> - **Exemplo 1 (Phishing em Recursos Humanos):** O RH recebe um e-mail aparentemente da chefia solicitando dados bancários dos funcionários. É um e-mail falsificado para roubar credenciais.
> - **Exemplo 2 (Ransomware em Hospital):** Um funcionário clica num anexo infetado que rapidamente criptografa os registos médicos dos pacientes. Os hackers exigem um resgate (pagamento em criptomoedas) para fornecer a chave de desencriptação.

**4. Defina auditoria em geral.**
> **Resposta:** Auditoria é o processo avaliativo, sistemático e independente, que visa verificar se um conjunto de atividades, fluxos, registos ou sistemas informáticos está em conformidade com as normas, boas práticas e políticas previamente estabelecidas, com o objetivo de assegurar a transparência e recomendar melhorias.

**5. Descreva os elementos que distinguem uma auditoria contábil, uma de TI e uma de segurança.**
> **Resposta:** 
> - **Contábil:** Foca nas demonstrações e balanços financeiros, com o objetivo de atestar a saúde e a veracidade monetária da organização, utilizando documentos de transações.
> - **Auditoria de TI:** Analisa os controlos de tecnologia, governação e eficiência dos sistemas. Foca-se em logs, infraestrutura e gestão da mudança.
> - **Segurança:** O alvo exclusivo são as barreiras de proteção e a exposição ao risco da organização. Usa testes de intrusão (pentests) e identificação de vulnerabilidades sistêmicas.

**6. Dê cinco exemplos de fatores externos que afetam a auditoria de TI.**
> **Resposta:** 
> 1. Legislação governamental (ex.: leis de proteção de dados como RGPD); 2. Atualização de normas globais (ISO); 3. O estado e flutuação da economia (afeta o orçamento para defesas); 4. O aumento súbito e global de um novo tipo de ciberataque; 5. Exigências e pressões da concorrência e do mercado.

**7. Quais procedimentos podem ser automatizados numa auditoria? Dê exemplos de automação em TI.**
> **Resposta:**
> Na auditoria: Coleta contínua de logs, varreduras de vulnerabilidades calendarizadas, relatórios automáticos de conformidade, identificação comportamental de anomalias.
> Em TI: Backup agendado, implantação automatizada de patches (atualizações de sistema), *provisioning* e desativação automática de credenciais de ex-colaboradores.

**8. Quais entidades estão presentes no planeamento da auditoria de TI?**
> **Resposta:** 
> - A **Equipe de Auditoria** (auditores internos/externos);
> - O **Cliente / Departamento Auditado** (os avaliados que fornecem dados e acessos);
> - O **Comitê de Auditoria / Alta Administração** (patrocinadores da auditoria que tomam as decisões baseadas nos relatórios);
> - **Stakeholders Reguladores** (Estado ou agências de regulação de setores específicos).

---

## Prática 2: Estudo de Caso e Elaboração de Relatório BPR

**Contexto:** Uma empresa automotiva está a passar por um Business Process Reengineering (BPR), migrando do antigo *mainframe* corporativo para um modelo de servidores distribuídos. A auditoria detetou falhas gravíssimas: processos incompletos, falta de treino e ausência de uma definição de papéis.

**Exercício: Elabore as conclusões e recomendações do Relatório.**

> **MODELO DE RELATÓRIO DE AUDITORIA DE SISTEMAS (Secções Finais)**
> 
> **4. Constatações Críticas:**
> 1. Incoerência Operacional: A transição não foi total e os fluxos práticos da empresa diferem do estipulado nos manuais. Há duplicidade de operações entre o velho mainframe e os novos servidores.
> 2. Despreparo Humano (Fator de Risco): Os empregados não sabem manipular os novos sistemas de forma eficaz e segura, tornando a infraestrutura vulnerável a ataques de engenharia social ou erros operacionais.
> 3. Matriz RACI inexistente: Ninguém sabe exatamente quem é o responsável pela aprovação e gestão dos sistemas. 
> 
> **5. Recomendações (Action Plan):**
> - Estabelecer um *freeze* (congelamento) em certas transições até que os processos incompletos sejam devidamente documentados e finalizados.
> - Lançamento imediato de uma academia interna ou formação de utilizadores-chave (*Key Users*) sobre segurança, usabilidade tecnológica e ética procedimental.
> - Remodelar formalmente as responsabilidades e distribuir os acessos privilegiados de acordo com a função estrita de cada utilizador (Princípio do Menor Privilégio).
> 
> **6. Conclusão:**
> A migração carece de amadurecimento e controlo. Prosseguir sob estas fragilidades é incorrer num elevado risco de paralisia das operações fabris ou perdas de dados críticas. O departamento de TI em uníssono com a Alta Administração devem agir preventivamente perante os alertas emitidos.

---

## Prática 3: Guião para o Seminário — Os Problemas Comuns em Informática

**Objetivos do Seminário em Sala:** Desenvolver competências de comunicação, julgamento moral e capacidade de análise sobre os impactos do trabalho em TI.

**Tópicos a Investigar e Debater pelos Alunos:**
1. **Tipos de Problemas Comuns:** Analisar as falhas mais frequentes em ambientes de TI, que vão desde avarias de hardware a ataques de negação de serviço (DDoS), ransomware, erro humano (apagar dados sem backup) e pirataria (software não licenciado).
2. **Causas Raiz:** Má formação, ausência de planeamento, orçamentos baixos que comprometem a qualidade e a segurança tecnológica, desobediência às regras de compliance (ética e direito).
3. **Consequências Éticas e Legais:** Custos financeiros astronómicos, perda da reputação de organizações, violação dos dados privados dos cidadãos (implicações diretas no direito à privacidade e possíveis multas para as entidades).
4. **Modos de Mitigação (Como Evitar):** Desenvolver políticas robustas de *Disaster Recovery*, backups imutáveis, criação de uma cultura de ética e segurança empresarial e respeito inegociável pelos regulamentos legais de tecnologia vigentes.

---

## Prática 4: Laboratório Web e Análise Ética

**Contexto Prático:** Foi proposto, no Laboratório 2, a criação de uma página HTML com um Formulário (Student Registration) envolvendo recolha de dados pessoais (Nome, Email, Palavra-Passe, etc).

**Código Base (Exemplo Pedagógico):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Formulário e Ética</title>
</head>
<body>
    <form name="formulario_aluno" method="POST" action="/submeter">
        <table border="1" cellpadding="5">
            <caption>Registro de Estudante</caption>
            <tr>
                <td>Nome Completo:</td>
                <td><input type="text" name="nome" required></td>
            </tr>
            <tr>
                <td>E-mail Institucional:</td>
                <td><input type="email" name="email" required></td>
            </tr>
            <tr>
                <td>Palavra-passe:</td>
                <td><input type="password" name="password" minlength="8" required></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="Enviar"></td>
            </tr>
        </table>
    </form>
</body>
</html>
```

**Reflexão Ética e Jurídica do Exercício:**
Enquanto programadores, criar um formulário para submissão de dados sem implementar protocolos de segurança é uma **negligência ética e jurídica**. 
1. **Confidencialidade e Transmissão:** Na vida real, este formulário precisa obrigatoriamente trafegar sobre o protocolo HTTPS (com certificado SSL/TLS) para evitar que as "palavras-passes" dos estudantes sejam intercetadas na rede em texto simples.
2. **Armazenamento:** A palavra-passe recebida no servidor jamais pode ser guardada tal como foi escrita. Tem de ser protegida por um mecanismo de "hash" criptográfico robusto (como bcrypt).
3. **Privacidade (Direito):** Deve ser incluído um termo de "Aceitação de Política de Privacidade", de forma a informar clara e inequivocamente ao estudante o destino, tempo de armazenamento e uso dos dados fornecidos, respeitando as exigências das leis de proteção de dados angolanas e internacionais.
