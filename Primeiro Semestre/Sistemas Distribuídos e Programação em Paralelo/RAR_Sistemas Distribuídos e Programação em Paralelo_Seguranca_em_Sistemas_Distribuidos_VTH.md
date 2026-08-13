---
tipo: "Fonte Original"
origem: "Rar Sistemas Distribuídos E Programação Em Paralelo Seguranca Em Sistemas Distribuidos Vth"
---

# Rar Sistemas Distribuídos E Programação Em Paralelo Seguranca Em Sistemas Distribuidos Vth

> [!info] Fonte Original
> Este documento é uma transcrição direta e intocada da fonte original, convertida em Markdown para retenção de 100% da essência e indexação de pesquisa.

Segurança em Sistemas Distribuídos
Um sistema distribuído, segundo Andrew Tanenbaum define-se como um conjunto de computadores independentes que se apresentam aos seus usuários como um sistema único e coerente.
Segurança em sistemas distribuídos é a prática de proteger sistemas com múltiplos componentes interconectados contra ameaças, garantindo confidencialidade, integridade, disponibilidade e não-repúdio dos dados e recursos, apesar da complexidade e da maior superfície de ataque, controlando acessos, autenticando usuários e monitorando constantemente a rede para prevenir vazamentos, alterações indevidas ou indisponibilidade. 
Desafios Específicos:
Superfície de Ataque Ampla: Dados trafegam por diversas máquinas e redes, aumentando pontos vulneráveis.
Distribuição de Dados: Informações espalhadas por múltiplos locais dificultam o controle centralizado.
Comunicação entre Componentes: Troca constante de mensagens exige segurança na rede e nos protocolos. 
Principais Conceitos e Ameaças:
Confidencialidade: Garantir que apenas usuários autorizados vejam os dados (evitar vazamento/leakage).
Integridade: Proteger contra modificação não autorizada (tampering).
Disponibilidade: Assegurar que o sistema esteja sempre acessível (vandalismo, negação de serviço).
Não-Repúdio: Impedir que um agente negue ter realizado uma ação.
Ameaças Comuns: Personificação (spoofing), introdução de código malicioso, escuta de mensagens, roubo de recursos. 
Mecanismos de Proteção:
Autenticação e Autorização: Confirmar identidade e permissões dos "principais" (pessoas/processos).
Criptografia: Proteger dados em trânsito e em repouso.
Controle de Acesso: Restringir o acesso a informações e recursos.
Monitoramento Contínuo: Coleta de métricas para identificar anomalias e manter a integridade do sistema.
Políticas de Segurança: Definição clara de regras, custos e estratégias de proteção. 




Autenticação e Autorização em Sistemas Distribuídos
Em sistemas distribuídos, autenticação verifica a identidade (quem você é) via credenciais (senha, biometria, tokens) e autorização concede ou nega permissões de acesso a recursos, garantindo que usuários autenticados só acessem o que lhes é permitido, usando métodos como OAuth, tokens JWT, e APIs para gerenciar essas identidades e permissões em ambientes complexos como microsserviços, com a segurança dependendo de criptografia, autenticação forte e controle de acesso robusto. 
Autenticação (Quem é você?)
Objetivo: Confirmar a identidade de usuários, serviços ou dispositivos.
Métodos Comuns:
Senhas/PINs: Fatores "o que você sabe".
Biometria: Impressão digital, facial, voz ("o que você é").
Tokens/Chaves de API/Smartcards: Fatores "o que você possui" ou chaves temporárias.
Autenticação de Dois Fatores (2FA/MFA): Combina dois ou mais fatores para maior segurança.
Autorização (O que você pode fazer?)
Objetivo: Determinar os direitos e permissões de um usuário autenticado sobre os recursos do sistema (arquivos, dados, funções).
Mecanismos:
Listas de Controle de Acesso (ACLs): Permissões definidas para cada recurso.
Modelos Baseados em Papéis (RBAC): Atribuição de permissões a papéis (funções), e papéis a usuários.
Políticas de Acesso: Regras dinâmicas, comuns em ambientes de nuvem. 
Desafios em Sistemas Distribuídos
Complexidade: Múltiplos serviços e pontos de acesso, exigindo federação de identidade.
Comunicação Segura: Tokens e criptografia são cruciais para proteger a comunicação entre serviços.
Gerenciamento Centralizado: Necessidade de um Identity Provider (IdP) para gerenciar identidades e políticas de forma unificada. 
Como se Relacionam
A autenticação é a pré-condição para a autorização: primeiro você prova quem é (autenticação), e só então o sistema verifica se você tem permissão para realizar uma ação específica (autorização). 


Comunicação Segura em Sistemas Distribuídos 
Em sistemas distribuídos, a comunicação segura SSL/TLS (Secure Sockets Layer/Transport Layer Security) é fundamental para garantir a confidencialidade, integridade e autenticação dos dados, criptografando o tráfego entre componentes (como servidores, bancos de dados, APIs) e protegendo contra interceptações (ataques man-in-the-middle), com o TLS sendo a versão moderna e mais segura do SSL, utilizando certificados digitais para provar a identidade e estabelecer uma sessão criptografada através do processo de handshake. 
Como Funciona em Sistemas Distribuídos:
Autenticação: Um serviço (cliente) tenta se comunicar com outro (servidor). O servidor envia seu certificado digital, provando sua identidade ao cliente.
Verificação: O cliente verifica a validade e confiança do certificado do servidor.
Troca de Chaves: Após a autenticação, o cliente e o servidor trocam chaves de sessão de forma segura para criptografar a comunicação.
Criptografia (Handshake): O processo inicial de negociação é chamado de "handshake" (aperto de mão), onde definem a versão do TLS e os algoritmos de criptografia a serem usados.
Dados Criptografados: Todos os dados trocados a partir daí são criptografados (embaralhados) com essas chaves, tornando-os ilegíveis para interceptadores. 
Importância:
Proteção de Dados Sensíveis: Garante que informações como dados de usuários, transações financeiras ou segredos de negócio não sejam expostos ao transitar entre microsserviços, APIs, bancos de dados e usuários finais.
Confiança e Credibilidade: A falta de HTTPS/TLS pode fazer com que navegadores alertem usuários e sistemas, diminuindo a confiança e o tráfego.
Integridade: Assegura que os dados não foram alterados durante o transporte, prevenindo manipulações maliciosas. 
SSL vs. TLS:
SSL (Secure Sockets Layer): Protocolo original, com versões antigas (1.0, 2.0, 3.0) que são inseguras e descontinuadas.
TLS (Transport Layer Security): Sucessor do SSL, mais robusto e seguro, com versões como TLS 1.2 e 1.3 sendo as mais usadas hoje. 





Ataques Comuns e Mitigação

Em sistemas distribuídos, ataques comuns incluem DoS/DDoS (negação de serviço, sobrecarregando recursos) e Man-in-the-Middle (MitM) (interceptação de comunicação), sendo os MitM focados em roubar ou manipular dados, explorando falhas de criptografia e autenticação. Mitigações envolvem usar VPNs, autenticação multifator (MFA), HTTPS/TLS, monitoramento de rede para anomalias (DoS) e ARP Poisoning (MitM), além de conscientização dos usuários. 

Ataques
Ataques de Negação de Serviço (DoS/DDoS):
Como funciona: Inunda servidores ou redes com tráfego excessivo (DDoS, de múltiplas fontes), esgotando recursos e tornando o serviço indisponível para usuários legítimos.
Em sistemas distribuídos: Alvos comuns são serviços de orquestração (Kubernetes), APIs, bancos de dados e balanceadores de carga, paralisando a coordenação e o acesso aos componentes.
Ataques Man-in-the-Middle (MitM):
Como funciona: O atacante se posiciona entre duas partes (usuário-servidor, serviço-serviço) para interceptar, ler ou modificar a comunicação.
Tipos comuns:
Wi-Fi Falso: Cria pontos de acesso Wi-Fi falsos (Evil Twin) para capturar dados.
Sequestro de Sessão: Rouba cookies de sessão para assumir a identidade do usuário.
Man-in-the-Browser: Malwares no navegador para capturar dados. 
Mitigação
Para DoS/DDoS:
Balanceamento de Carga e CDN: Distribuição de tráfego e uso de Content Delivery Networks para absorver picos.
Filtragem de Tráfego: Bloqueio de IPs maliciosos e padrões de tráfego anômalos em firewalls e roteadores.
Rate Limiting: Limitar o número de requisições por IP ou usuário.
Proteção Anti-DDoS Dedicada: Serviços especializados (ex: Cloudflare, AWS Shield).
Para MitM:
Criptografia Forte (TLS/HTTPS): Garante que os dados transmitidos sejam ilegíveis se interceptados.
VPNs (Virtual Private Networks): Cria túneis seguros, especialmente em redes públicas.
Autenticação Multifator (MFA): Impede o acesso mesmo se credenciais forem roubadas.
Monitoramento de Rede: Detectar ARP Poisoning e pontos de acesso não autorizados.
Conscientização do Usuário: Evitar redes Wi-Fi públicas não seguras e verificar sempre o HTTPS.
Autenticação Forte: Uso de certificados digitais e protocolos de autenticação robustos. 

