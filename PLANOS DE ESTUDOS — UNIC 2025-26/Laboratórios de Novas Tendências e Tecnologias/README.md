# Laboratórios de Novas Tendências e Tecnologias

Pasta única que consolida **Lab. Novas Tendências e Tecnologias I** (1.º Semestre) e
**II** (2.º Semestre) — Eng. Informática, UNIC 2025-26, Turma ENGINF-A4N1.

## Ligações (GitHub ⇄ Google)

| Recurso | Local |
| --- | --- |
| Este diretório no GitHub | `PLANOS DE ESTUDOS — UNIC 2025-26/Laboratórios de Novas Tendências e Tecnologias/` |
| Pasta no Google Drive | https://drive.google.com/drive/folders/1PdXplD2DpwP4JRSX4gYzZZ3UGqnwueyB |
| Enunciado do exame (frequência, 08/07/2026) | https://drive.google.com/file/d/1KThTRlTzn-5jMbxwpkkp8T9J20OzZSP2/view |
| Ecossistema Google | Drive · Sheets · Apps Script (via `clasp`) — ver `apps-script/` |

## Conteúdo

- `apps-script/` — solução em Google Apps Script para a **Questão 1** do exame
  (consolidação automática dos inquéritos docentes de 3 faculdades + Dashboard).
  Versionada com [`clasp`](https://github.com/google/clasp) para sincronizar
  com o projeto Apps Script na conta Google.
- Guias de estudo I e II permanecem nas pastas por semestre até serem migrados para aqui.

## Fluxo de sincronização

```
Google Apps Script  <--clasp push/pull-->  apps-script/  <--git-->  GitHub
        |                                                              |
   Google Sheets  <---------- lê/escreve ----------- Code.gs           |
        |                                                              |
   Google Drive (pasta 1PdXpl...) ------- fonte dos 3 Sheets -----------+
```
