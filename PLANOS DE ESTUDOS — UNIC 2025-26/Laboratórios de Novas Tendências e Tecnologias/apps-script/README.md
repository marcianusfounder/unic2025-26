# apps-script/ — Solução da Questão 1

Automação em Google Apps Script que lê os 3 ficheiros Sheets partilhados na
pasta do Drive, consolida numa Master Sheet, converte a escala qualitativa em
numérica, calcula médias por professor e por faculdade, e cria a aba `Dashboard`.

## Ficheiros

| Ficheiro | Papel |
| --- | --- |
| `Code.gs` | Toda a lógica (alíneas a–e). Entrada: `main()`. |
| `appsscript.json` | Manifesto: timezone Luanda, V8, scopes Sheets + Drive. |
| `.clasp.json.example` | Modelo — copiar para `.clasp.json` com o `scriptId` real. |

## Configurar

Editar o objeto `CONFIG` no topo de `Code.gs`:
- `FOLDER_ID` — já preenchido com `1PdXplD2DpwP4JRSX4gYzZZ3UGqnwueyB`.
- `CRITERIA` — ajustar aos 5 cabeçalhos reais dos inquéritos (a deteção ignora
  acentos/maiúsculas/ordem, mas os nomes têm de bater aproximadamente).
- `QUALITATIVE_SCALE` — acrescentar termos qualitativos que apareçam nos dados.

## Correr sem clasp (rápido)

1. https://script.google.com → **Novo projeto**.
2. Colar `Code.gs`; em Definições do projeto ativar "mostrar `appsscript.json`" e colar o manifesto.
3. Executar `main()` → autorizar scopes.
4. O menu **⚙️ Avaliações → Processar / atualizar tudo** fica disponível na folha consolidada.

## Correr com clasp (versionado no GitHub)

```bash
npm i -g @google/clasp
clasp login
cd "PLANOS DE ESTUDOS — UNIC 2025-26/Laboratórios de Novas Tendências e Tecnologias/apps-script"
clasp create --type standalone --title "Avaliações Docentes — LNTT II" --rootDir .
cp .clasp.json .clasp.json.example   # (não versionar o .clasp.json real; ver .gitignore)
clasp push
clasp open
```

Depois, `clasp pull` traz alterações feitas no editor web e `git commit` versiona-as.

## O que o script produz na folha "CONSOLIDADO - Avaliações Docentes"

- **Master** — todas as respostas unificadas + coluna "Faculdade (origem)" e "Ficheiro de origem" (rastreabilidade — alínea a).
- **Por Professor** — médias nos 5 critérios, média global, média da faculdade, média geral, Δ vs faculdade, Δ vs geral, classificação (alíneas c + d).
- **Por Faculdade** — médias por critério e global, Δ vs média geral (alínea d).
- **Dashboard** — KPIs + 3 gráficos (ranking de professores, média por faculdade, média por critério) criados via código (alínea e).
