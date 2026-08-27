Provado de ponta a ponta

  sumario_operacional chamado pelo MCP → n8n → Keycloak → API → código corrigido, e voltou com JSON real. Suite completa verde: 905 testes, ruff e mypy
  limpos. Dois commits: e53cbaa e fc76e79.

  Três coisas que isto desenterrou

  O sumário sem dados pedia dados ao gestor. Com o 500 fora do caminho, o modelo respondia «Por favor, forneça os valores numéricos…» — o painel a mostrar
  um assistente a pedir os dados que a plataforma é que devia ter, ao fim de 4 s e de uma chamada paga. Agora afirma-o a plataforma: «não há registos; isto
  não significa que correu bem, significa que não foi medida». 0,5 s, sem chamada.

  O servidor MCP não é chamável pelo esquema que publica. Ele anuncia {"input": "string"}, mas os argumentos têm de ir dentro de input como texto JSON. Um
  cliente que passe {"tipo":"semanal"} recebe ZodError; {"input":"semanal"} recebe o mesmo, porque não é JSON válido. O que funciona é {"input":
  "{\"tipo\":\"semanal\"}"}. Está documentado no README do n8n. Não mexi na definição dos fluxos — corrigi-la exige um PUT na API do n8n que a política de
  permissões bloqueou, e implantar uma alteração que não posso verificar seria pior do que a reportar.

  Não consegui provar a vigia narrativa a correr. A técnica da casa — acelerar o gatilho para um minuto e repor com o implantar.py — precisa da mesma
  escrita bloqueada. O que ficou provado é a causa exacta da falha: o destino resolve e entrega. Para fechar essa última volta:

  cd /home/marcianus/meals-dejavia
  set -a; . <(grep -E '^N8N_(URL|API_KEY)=' ~/dejavia-prod/.env); set +a
  python3 infra/n8n/implantar.py --historico "Dejavia · Vigia narrativa"

  Segunda às 16:00 é a próxima execução agendada; o histórico dirá se passou do último nó.

  Sobre as notas de segurança que levantou: a chave do n8n de desenvolvimento continua por revogar e a do Gemini por rodar — não lhes toquei. O Postgres do
  dejavia_m continua em 0.0.0.0:55433.
 Confirmei experimentalmente: pedi ao endpoint sem Authorization e depois com um Bearer token inventado — as duas respostas são idênticas, 403 com o corpo
  Authorization data is wrong!. Ou seja, essa mensagem é a resposta genérica do n8n para "não recebi um token válido", disparada tanto por ausência de
  header como por um token errado. Não é um bug — é o comportamento correcto e documentado no infra/n8n/README.md:203 (o endpoint recusa sem Authorization
  válido). O endpoint está a funcionar como deveria.

  O que falta não é corrigir nada — é o token correto. Ele vive só dentro do n8n, na credencial MCP Dejavia (portador) (id iSWjYn1NE85Yn9M1, tipo Bearer
  Auth), e o n8n nunca devolve o valor de uma credencial já guardada — só permite substituí-la. Se não sabes o valor actual (ou nunca chegou a ser posto
  lá), o caminho é:

  1. Emitir um token novo, correndo no VPS:
  docker compose -f infra/compose.dev.yml run --rm api \
    dejavia credencial-integracao --dias 90
  2. (comando em backend/src/dejavia/interfaces/cli.py:513; requer acesso à base de produção, é por isso que corre lá, não daqui.)
  3. Colar esse token no n8n → Credentials → MCP Dejavia (portador) → campo do Bearer token → gravar.
  4. Chamar o endpoint com o handshake certo — não é um URL de navegador:
  curl -N -X POST https://dejavia-n8n.uc5pv8.easypanel.host/mcp/dejavia-mcp \
    -H 'Authorization: Bearer <token>' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json, text/event-stream' \
    -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}'
  5. guardar o Mcp-Session-Id da resposta e enviá-lo em notifications/initialized antes de tools/list.

  Não consigo correr o passo 1 aqui porque exige ligação à base de dados de produção (fora do que tenho montado nesta sessão) — mas é um comando teu, não um
  segredo a recuperar. Queres que eu prepare o comando curl completo do handshake (initialize → notifications/initialized → tools/list) para colares o
  token assim que o gerares?