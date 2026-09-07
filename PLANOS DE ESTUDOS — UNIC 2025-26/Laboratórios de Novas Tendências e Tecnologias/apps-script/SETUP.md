# Setup de acesso total (Sheets + Apps Script) via clasp

Objetivo: o agente cria, versiona, faz deploy e **executa** o script sem cliques.

## Estado atual (2026-09-07)

- clasp autenticado como `marcianusfounder.israelnzambi@gmail.com` ✅
- Projeto Apps Script criado ✅
  `scriptId = 1bT9Sdp6TerXom1y-5rhZmecKfCHSA65IU3PlnnWKk_0L0sehvBph9xIb`
  https://script.google.com/d/1bT9Sdp6TerXom1y-5rhZmecKfCHSA65IU3PlnnWKk_0L0sehvBph9xIb/edit
- `Code.gs` + `appsscript.json` (com scopes Sheets/Drive + webapp) enviados ✅ — versão 1 criada ✅
- **Falta:** consentir os scopes / executar. `clasp run-function` devolve
  `NOT_FOUND ... reading from storage` porque o projeto usa o GCP project
  *default*. Duas saídas:
  1. **Rápida:** abrir o editor, correr `main` 1x, autorizar. Fica feito.
  2. **Autonomia 100%:** associar um GCP project standard (ver secção abaixo),
     depois o agente faz tudo headless para todos os exames.

## Passos manuais (uma vez) — só tu podes fazer

1. **Ativar a Apps Script API** na tua conta:
   https://script.google.com/home/usersettings → "Google Apps Script API" = **ON**

2. **Login do clasp** (no teu terminal, NÃO via `!`, porque é interativo):
   ```bash
   clasp login --no-localhost
   ```
   Abre o URL no teu telemóvel/PC, autoriza (Drive + Apps Script), cola o código.
   Isto grava `~/.clasprc.json` — a partir daí o agente assume.

Depois destes 2 passos, diz "feito" ao agente.

## O que o agente faz a seguir (autónomo)

```bash
cd "PLANOS DE ESTUDOS — UNIC 2025-26/Laboratórios de Novas Tendências e Tecnologias/apps-script"
clasp create --type standalone --title "Avaliações Docentes — LNTT" --rootDir .
clasp push -f
clasp deploy -d "run endpoint"                 # cria a Web App (doGet)
# guarda o RUN_TOKEN nas Script Properties:
clasp run 'setRunToken_'  --params '["<TOKEN>"]'   # ou define à mão 1x
# executar o processamento:
curl -s "https://script.google.com/macros/s/<DEPLOY_ID>/exec?token=<TOKEN>"
```

`.clasp.json` (com o scriptId real) fica **fora** do git (`.gitignore`); o agente
guarda o scriptId + deployId + token em `~/.config/lntt-appsscript.env` (fora do repo).

## Autonomia 100% — associar GCP project standard (uma vez)

1. https://console.cloud.google.com/projectcreate → cria projeto (ex.: `unic-appsscript`)
2. Nesse projeto: ativa **Apps Script API** e anota o **número do projeto**
   (Configurações do projeto → "Número do projeto")
3. Editor do script → ⚙️ **Definições do projeto** → **Projeto do Google Cloud** →
   *Alterar projeto* → cola o número → Definir projeto
4. Tela de consentimento OAuth: tipo **Interno** (ou Externo + adiciona-te como tester)
5. Diz "GCP pronto" ao agente → ele corre `clasp run-function main` e tudo o resto sem cliques

## Reutilização para outros exames

Cada exame novo = nova pasta no repo + novo `Code.gs` adaptado + `clasp create`
próprio. O agente repete o bloco acima por exame.
