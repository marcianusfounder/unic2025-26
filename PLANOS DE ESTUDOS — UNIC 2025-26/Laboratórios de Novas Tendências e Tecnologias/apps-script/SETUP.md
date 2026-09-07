# Setup de acesso total (Sheets + Apps Script) via clasp

Objetivo: o agente cria, versiona, faz deploy e **executa** o script sem cliques.

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

## Reutilização para outros exames

Cada exame novo = nova pasta no repo + novo `Code.gs` adaptado + `clasp create`
próprio. O agente repete o bloco acima por exame.
