# Exercícios e Práticas: Segurança Informática e Criptografia

Este guia prático contém exercícios e cenários de estudo dirigidos aos alunos de Segurança Informática e Criptografia, abordando desde conceitos teóricos de governança de TI até a resolução matemática de algoritmos criptográficos.

---

## Prática 1: Fundamentos de Segurança e SGSI

**Cenário:** A universidade decidiu implementar um projeto de e-Business para a gestão acadêmica. A Direção de Sistemas de Informação (DSI) identificou que o sistema processará dados críticos dos alunos (notas, propinas, dados pessoais).

**Questão 1.1:** Utilizando a **Tríade CID (Confidencialidade, Integridade e Disponibilidade)**, relacione cada pilar a uma ameaça possível no cenário apresentado e proponha uma contramedida técnica.
*   **Resolução:**
    *   *Confidencialidade:* Ameaça de vazamento de dados de cartões de crédito dos alunos durante o pagamento. *Contramedida:* Implementação de criptografia na comunicação (SSL/TLS, HTTPS) e encriptação da base de dados.
    *   *Integridade:* Ameaça de um aluno mal-intencionado invadir o sistema para alterar suas notas. *Contramedida:* Controles de acesso restritos (autenticação forte), funções de Hash na base de dados para garantir que os dados não foram modificados, e *logs* de auditoria (princípio de não repúdio).
    *   *Disponibilidade:* Ameaça de ataque de negação de serviço (DDoS) durante a época de matrículas, tirando o sistema do ar. *Contramedida:* Sistemas de balanceamento de carga, firewalls de aplicação (WAF) e redundância de servidores em Cloud.

**Questão 1.2:** A universidade precisa estabelecer um **SGSI (Sistema de Gestão da Segurança da Informação)**. Descreva os 4 níveis da documentação que precisam ser criados para gerir este sistema, conforme as práticas estudadas na disciplina.
*   **Resolução:**
    1.  **Políticas e Diretrizes:** O documento máximo onde a Reitoria aprova o compromisso com a segurança da informação, definindo o escopo (ex: "Proteger todos os dados do sistema académico").
    2.  **Procedimentos Operacionais:** Regras que garantem o planejamento e a operação (ex: "Procedimento de gestão de incidentes de segurança", "Regras de criação de senhas").
    3.  **Instruções de Trabalho:** Guias detalhados (ex: "Manual passo a passo de como configurar o Firewall da universidade").
    4.  **Registos:** Evidências de que o SGSI está a funcionar (ex: "Logs do servidor", "Fichas assinadas pelos funcionários a concordar com a política de segurança").

---

## Prática 2: Criptografia Clássica (Cifras de Substituição)

**Questão 2.1:** Utilize a **Cifra de César** clássica (deslocamento de 3 posições à direita: $k = 3$) para cifrar a palavra `SEGURANCA` (considere o alfabeto padrão A-Z sem caracteres especiais).
*   **Resolução Passo a Passo:**
    *   A fórmula de cifragem é: $E(x) = (x + k) \pmod{26}$.
    *   Alfabeto: A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7, I=8, J=9, K=10, L=11, M=12, N=13, O=14, P=15, Q=16, R=17, S=18, T=19, U=20, V=21, W=22, X=23, Y=24, Z=25.
    *   Deslocamento: $k = 3$
    *   S (18) + 3 = 21 (V)
    *   E (4) + 3 = 7 (H)
    *   G (6) + 3 = 9 (J)
    *   U (20) + 3 = 23 (X)
    *   R (17) + 3 = 20 (U)
    *   A (0) + 3 = 3 (D)
    *   N (13) + 3 = 16 (Q)
    *   C (2) + 3 = 5 (F)
    *   A (0) + 3 = 3 (D)
    *   **Texto Cifrado:** `VHJXUDQFD`

---

## Prática 3: Criptografia Assimétrica (Algoritmo RSA)

**Cenário:** O RSA é amplamente utilizado em assinaturas digitais. Ele baseia-se na dificuldade matemática de fatorar o produto de dois grandes números primos.

**Questão 3.1:** Gere as chaves (Pública e Privada) do algoritmo RSA utilizando os números primos $p = 61$ e $q = 53$. Considere o expoente público $e = 17$.
*   **Resolução Passo a Passo:**
    1.  **Calcular o módulo $n$:**
        $n = p \times q$
        $n = 61 \times 53 = 3233$
    2.  **Calcular a Função Totiente de Euler $\phi(n)$:**
        $\phi(n) = (p - 1) \times (q - 1)$
        $\phi(n) = 60 \times 52 = 3120$
    3.  **Escolher o expoente público $e$:**
        Foi dado que $e = 17$. Verifique se $1 < e < 3120$ e se $\text{mdc}(17, 3120) = 1$. Como 17 é primo e não divide 3120, a condição é satisfeita.
        **Chave Pública:** $(n, e) = (3233, 17)$
    4.  **Calcular o expoente privado $d$:**
        A chave privada $d$ é o inverso multiplicativo de $e$ módulo $\phi(n)$.
        Isto significa que: $d \times e \equiv 1 \pmod{\phi(n)}$
        $17d \equiv 1 \pmod{3120}$
        Utilizando o Algoritmo de Euclides Estendido (ou por tentativa em exercícios pequenos), descobrimos que o valor de $d$ que satisfaz esta equação é $d = 2753$.
        *Prova: $17 \times 2753 = 46801$. E $46801 \pmod{3120} = 1$.*
        **Chave Privada:** $(n, d) = (3233, 2753)$

---

## Prática 4: Assinaturas Digitais e Funções Hash

**Questão 4.1:** Explique o fluxo de envio de uma mensagem assinada digitalmente de Alice para Bob, utilizando funções Hash e criptografia assimétrica, garantindo integridade e não repúdio.
*   **Resolução:**
    1.  Alice escreve a mensagem "Transferir 1000 KZ para conta X".
    2.  Alice passa esta mensagem por um algoritmo de **Hash** (ex: SHA-256), gerando um *digest* único de tamanho fixo.
    3.  Alice cifra este *digest* (Hash) usando a **sua própria Chave Privada**. O resultado é a *Assinatura Digital*.
    4.  Alice envia a mensagem original e a Assinatura Digital para Bob.
    5.  Bob recebe a mensagem e a Assinatura.
    6.  Bob utiliza a **Chave Pública de Alice** para decifrar a Assinatura, revelando o *Hash original*.
    7.  Bob pega na mensagem original recebida e passa pelo mesmo algoritmo de Hash (SHA-256).
    8.  Bob compara o Hash gerado por ele com o Hash decifrado. Se forem **iguais**, ele tem certeza de que a mensagem não foi alterada (Integridade) e que foi realmente enviada por Alice, visto que só a chave privada dela poderia ter cifrado o Hash (Autenticidade e Não Repúdio).
