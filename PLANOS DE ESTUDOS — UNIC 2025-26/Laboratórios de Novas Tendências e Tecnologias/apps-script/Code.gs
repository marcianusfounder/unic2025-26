/**
 * Laboratórios de Novas Tendências e Tecnologias II — Exame (Questão 1)
 * Automação do processamento de avaliações docentes com Google Apps Script.
 *
 * Alíneas resolvidas:
 *   a) Ler os 3 ficheiros Sheets da pasta do Drive e unificar numa Master Sheet
 *      (mantendo a faculdade de origem de cada resposta).
 *   b) Converter respostas qualitativas -> escala quantitativa (1..5).
 *   c) Média global por professor nos 5 critérios de avaliação.
 *   d) Média por faculdade + comparação de cada professor com a média da sua
 *      faculdade e com a média geral.
 *   e) Criar via código uma aba "Dashboard" com os resultados relevantes + gráficos.
 *
 * Uso: definir FOLDER_ID abaixo e correr `main()`. Autoriza os scopes no 1.º arranque.
 */

// ————————————————————————————————————————————————————————————————
// Configuração
// ————————————————————————————————————————————————————————————————
const CONFIG = {
  // Pasta do Google Drive partilhada com os 3 ficheiros de inquéritos.
  FOLDER_ID: '1PdXplD2DpwP4JRSX4gYzZZ3UGqnwueyB',

  // Nome do ficheiro consolidado que o script cria/reutiliza dentro da mesma pasta.
  MASTER_SPREADSHEET_NAME: 'CONSOLIDADO - Avaliações Docentes',

  MASTER_SHEET_NAME: 'Master',
  BY_TEACHER_SHEET_NAME: 'Por Professor',
  BY_FACULTY_SHEET_NAME: 'Por Faculdade',
  DASHBOARD_SHEET_NAME: 'Dashboard',

  // Os 5 critérios de avaliação. Ajustar aos cabeçalhos reais dos inquéritos
  // (a deteção é tolerante a maiúsculas/acentos/ordem).
  CRITERIA: [
    'Domínio dos Conteúdos',
    'Clareza na Exposição',
    'Pontualidade e Assiduidade',
    'Relação com os Estudantes',
    'Avaliação Justa',
  ],

  // Nomes de coluna aceites para professor / faculdade (deteção flexível).
  TEACHER_ALIASES: ['professor', 'docente', 'nome do professor', 'nome do docente', 'teacher'],
  FACULTY_ALIASES: ['faculdade', 'faculty', 'unidade orgânica', 'escola'],
};

// Mapa qualitativo -> quantitativo (alínea b). Chaves normalizadas (minúsculas, sem acento).
const QUALITATIVE_SCALE = {
  'muito mau': 1, 'pessimo': 1, 'muito insatisfeito': 1, 'nunca': 1, 'discordo totalmente': 1,
  'mau': 2, 'insatisfeito': 2, 'raramente': 2, 'discordo': 2, 'fraco': 2,
  'razoavel': 3, 'suficiente': 3, 'neutro': 3, 'as vezes': 3, 'medio': 3, 'nem concordo nem discordo': 3,
  'bom': 4, 'satisfeito': 4, 'frequentemente': 4, 'concordo': 4,
  'muito bom': 5, 'excelente': 5, 'muito satisfeito': 5, 'sempre': 5, 'concordo totalmente': 5, 'otimo': 5,
};

// ————————————————————————————————————————————————————————————————
// Utilitários
// ————————————————————————————————————————————————————————————————
function norm_(s) {
  return String(s == null ? '' : s)
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function round2_(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

/** Converte um valor de resposta para número 1..5, ou null se não aplicável. */
function toQuantitative_(value) {
  if (value === '' || value === null || value === undefined) return null;
  if (typeof value === 'number' && isFinite(value)) return value;
  const n = Number(String(value).replace(',', '.'));
  if (!isNaN(n) && isFinite(n)) return n;
  const key = norm_(value);
  return QUALITATIVE_SCALE.hasOwnProperty(key) ? QUALITATIVE_SCALE[key] : null;
}

/** Encontra o índice de uma coluna cujo cabeçalho corresponde a um dos aliases. */
function findColumn_(headers, aliases) {
  const normHeaders = headers.map(norm_);
  for (const alias of aliases) {
    const i = normHeaders.indexOf(norm_(alias));
    if (i !== -1) return i;
  }
  // correspondência parcial
  for (let i = 0; i < normHeaders.length; i++) {
    if (aliases.some(a => normHeaders[i].indexOf(norm_(a)) !== -1)) return i;
  }
  return -1;
}

/** Mapeia cada critério configurado para o índice da coluna correspondente. */
function mapCriteria_(headers) {
  const map = {};
  CONFIG.CRITERIA.forEach(function (crit) {
    let idx = findColumn_(headers, [crit]);
    map[crit] = idx;
  });
  return map;
}

// ————————————————————————————————————————————————————————————————
// a) + b) Ler os 3 ficheiros e consolidar na Master Sheet
// ————————————————————————————————————————————————————————————————
function buildMasterSheet_(masterSs) {
  const folder = DriveApp.getFolderById(CONFIG.FOLDER_ID);
  const it = folder.getFilesByType(MimeType.GOOGLE_SHEETS);

  const outHeaders = ['Faculdade (origem)', 'Ficheiro de origem', 'Professor']
    .concat(CONFIG.CRITERIA)
    .concat(['Média do Inquérito']);
  const rows = [];
  let filesProcessed = 0;

  while (it.hasNext()) {
    const file = it.next();
    if (file.getId() === masterSs.getId()) continue;               // não ler o próprio consolidado
    if (file.getName() === CONFIG.MASTER_SPREADSHEET_NAME) continue;

    const ss = SpreadsheetApp.openById(file.getId());
    const sheet = ss.getSheets()[0];
    const data = sheet.getDataRange().getValues();
    if (data.length < 2) continue;

    const headers = data[0];
    const tIdx = findColumn_(headers, CONFIG.TEACHER_ALIASES);
    const fIdx = findColumn_(headers, CONFIG.FACULTY_ALIASES);
    const critMap = mapCriteria_(headers);

    // Faculdade: coluna própria, senão deriva do nome do ficheiro.
    const facultyFromName = file.getName().replace(/\.(xlsx|gsheet)$/i, '').trim();

    for (let r = 1; r < data.length; r++) {
      const row = data[r];
      if (row.join('') === '') continue;

      const faculty = (fIdx !== -1 && row[fIdx] !== '') ? row[fIdx] : facultyFromName;
      const teacher = (tIdx !== -1 ? row[tIdx] : '') || '(sem nome)';

      const critValues = CONFIG.CRITERIA.map(function (crit) {
        const ci = critMap[crit];
        return ci === -1 ? null : toQuantitative_(row[ci]);      // alínea b)
      });

      const nums = critValues.filter(function (v) { return typeof v === 'number' && !isNaN(v); });
      const surveyAvg = nums.length ? round2_(nums.reduce(function (a, b) { return a + b; }, 0) / nums.length) : '';

      rows.push([faculty, file.getName(), teacher].concat(critValues.map(function (v) {
        return v === null ? '' : v;
      })).concat([surveyAvg]));
    }
    filesProcessed++;
  }

  const master = getOrCreateSheet_(masterSs, CONFIG.MASTER_SHEET_NAME);
  master.clear();
  master.getRange(1, 1, 1, outHeaders.length).setValues([outHeaders])
    .setFontWeight('bold').setBackground('#0b5394').setFontColor('#ffffff');
  if (rows.length) {
    master.getRange(2, 1, rows.length, outHeaders.length).setValues(rows);
  }
  master.setFrozenRows(1);
  master.autoResizeColumns(1, outHeaders.length);

  return { headers: outHeaders, rows: rows, filesProcessed: filesProcessed };
}

// ————————————————————————————————————————————————————————————————
// c) Média global por professor nos 5 critérios
// d) Média por faculdade + comparação
// ————————————————————————————————————————————————————————————————
function analyze_(master) {
  const CRIT_OFFSET = 3; // colunas 0..2 = faculdade, ficheiro, professor
  const nCrit = CONFIG.CRITERIA.length;

  const byTeacher = {};   // teacher -> { faculty, sums[], counts[], nRespostas }
  const byFaculty = {};   // faculty -> { sums[], counts[] }
  const geral = { sums: new Array(nCrit).fill(0), counts: new Array(nCrit).fill(0) };

  master.rows.forEach(function (row) {
    const faculty = row[0];
    const teacher = row[2];
    const key = teacher + ' @ ' + faculty;

    if (!byTeacher[key]) {
      byTeacher[key] = { teacher: teacher, faculty: faculty,
        sums: new Array(nCrit).fill(0), counts: new Array(nCrit).fill(0), n: 0 };
    }
    if (!byFaculty[faculty]) {
      byFaculty[faculty] = { sums: new Array(nCrit).fill(0), counts: new Array(nCrit).fill(0), n: 0 };
    }
    byTeacher[key].n++;
    byFaculty[faculty].n++;

    for (let c = 0; c < nCrit; c++) {
      const v = row[CRIT_OFFSET + c];
      if (typeof v === 'number' && !isNaN(v)) {
        byTeacher[key].sums[c] += v; byTeacher[key].counts[c]++;
        byFaculty[faculty].sums[c] += v; byFaculty[faculty].counts[c]++;
        geral.sums[c] += v; geral.counts[c]++;
      }
    }
  });

  const avg = function (sum, cnt) { return cnt ? round2_(sum / cnt) : ''; };
  const overall = function (o) {
    const s = o.sums.reduce(function (a, b) { return a + b; }, 0);
    const c = o.counts.reduce(function (a, b) { return a + b; }, 0);
    return c ? round2_(s / c) : '';
  };

  const geralGlobal = overall(geral);

  // ---- c) tabela por professor
  const teacherHeaders = ['Professor', 'Faculdade', 'N.º Respostas']
    .concat(CONFIG.CRITERIA)
    .concat(['Média Global (Prof.)', 'Média da Faculdade', 'Média Geral',
             'Δ vs Faculdade', 'Δ vs Geral', 'Classificação']);
  const teacherRows = Object.keys(byTeacher).map(function (k) {
    const t = byTeacher[k];
    const critAvgs = t.sums.map(function (s, i) { return avg(s, t.counts[i]); });
    const gProf = overall(t);
    const gFac = overall(byFaculty[t.faculty]);
    const dFac = (gProf !== '' && gFac !== '') ? round2_(gProf - gFac) : '';
    const dGer = (gProf !== '' && geralGlobal !== '') ? round2_(gProf - geralGlobal) : '';
    const classe = gProf === '' ? '—'
      : gProf >= 4.5 ? 'Excelente'
      : gProf >= 3.5 ? 'Bom'
      : gProf >= 2.5 ? 'Satisfatório'
      : 'A melhorar';
    return [t.teacher, t.faculty, t.n].concat(critAvgs)
      .concat([gProf, gFac, geralGlobal, dFac, dGer, classe]);
  }).sort(function (a, b) { return (b[teacherHeaders.indexOf('Média Global (Prof.)')] || 0)
                                 - (a[teacherHeaders.indexOf('Média Global (Prof.)')] || 0); });

  // ---- d) tabela por faculdade
  const facultyHeaders = ['Faculdade', 'N.º Respostas']
    .concat(CONFIG.CRITERIA)
    .concat(['Média Global (Fac.)', 'Δ vs Média Geral']);
  const facultyRows = Object.keys(byFaculty).map(function (f) {
    const o = byFaculty[f];
    const critAvgs = o.sums.map(function (s, i) { return avg(s, o.counts[i]); });
    const gFac = overall(o);
    const dGer = (gFac !== '' && geralGlobal !== '') ? round2_(gFac - geralGlobal) : '';
    return [f, o.n].concat(critAvgs).concat([gFac, dGer]);
  }).sort(function (a, b) { return (b[b.length - 2] || 0) - (a[a.length - 2] || 0); });

  return {
    geralGlobal: geralGlobal,
    teacher: { headers: teacherHeaders, rows: teacherRows },
    faculty: { headers: facultyHeaders, rows: facultyRows },
  };
}

function writeTable_(ss, sheetName, table, headerColor) {
  const sh = getOrCreateSheet_(ss, sheetName);
  sh.clear();
  sh.getRange(1, 1, 1, table.headers.length).setValues([table.headers])
    .setFontWeight('bold').setBackground(headerColor || '#38761d').setFontColor('#ffffff');
  if (table.rows.length) {
    sh.getRange(2, 1, table.rows.length, table.headers.length).setValues(table.rows);
  }
  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, table.headers.length);
  return sh;
}

// ————————————————————————————————————————————————————————————————
// e) Dashboard (criada via código)
// ————————————————————————————————————————————————————————————————
function buildDashboard_(ss, master, analysis) {
  const dash = getOrCreateSheet_(ss, CONFIG.DASHBOARD_SHEET_NAME);
  dash.clear();
  dash.getCharts().forEach(function (c) { dash.removeChart(c); });

  dash.getRange('A1').setValue('DASHBOARD — Avaliações Docentes')
    .setFontSize(16).setFontWeight('bold').setFontColor('#0b5394');
  dash.getRange('A2').setValue('Gerado automaticamente em ' + new Date());

  const teacherRows = analysis.teacher.rows;
  const facultyRows = analysis.faculty.rows;
  const gIdxProf = analysis.teacher.headers.indexOf('Média Global (Prof.)');

  const nRespostas = master.rows.length;
  const nProfs = teacherRows.length;
  const nFac = facultyRows.length;
  const best = teacherRows[0] || [];
  const worst = teacherRows[teacherRows.length - 1] || [];

  const kpis = [
    ['Métrica', 'Valor'],
    ['Respostas consolidadas', nRespostas],
    ['Ficheiros processados', master.filesProcessed],
    ['Professores avaliados', nProfs],
    ['Faculdades', nFac],
    ['Média geral (todos os critérios)', analysis.geralGlobal],
    ['Melhor avaliado', (best[0] || '—') + ' (' + (best[gIdxProf] || '—') + ')'],
    ['Menor média', (worst[0] || '—') + ' (' + (worst[gIdxProf] || '—') + ')'],
  ];
  dash.getRange(4, 1, kpis.length, 2).setValues(kpis);
  dash.getRange(4, 1, 1, 2).setFontWeight('bold').setBackground('#0b5394').setFontColor('#ffffff');

  // Tabela auxiliar 1: ranking de professores (para gráfico de barras)
  const t1Start = 4 + kpis.length + 2;
  dash.getRange(t1Start, 1).setValue('Ranking — Média Global por Professor').setFontWeight('bold');
  const rankData = [['Professor', 'Média Global']].concat(
    teacherRows.map(function (r) { return [r[0], r[gIdxProf] || 0]; }));
  dash.getRange(t1Start + 1, 1, rankData.length, 2).setValues(rankData);

  // Tabela auxiliar 2: média por faculdade
  const gIdxFac = analysis.faculty.headers.indexOf('Média Global (Fac.)');
  const t2Start = t1Start + rankData.length + 3;
  dash.getRange(t2Start, 1).setValue('Média Global por Faculdade').setFontWeight('bold');
  const facData = [['Faculdade', 'Média Global']].concat(
    facultyRows.map(function (r) { return [r[0], r[gIdxFac] || 0]; }));
  dash.getRange(t2Start + 1, 1, facData.length, 2).setValues(facData);

  // Tabela auxiliar 3: média por critério (geral)
  const t3Start = t2Start + facData.length + 3;
  dash.getRange(t3Start, 1).setValue('Média Geral por Critério').setFontWeight('bold');
  const critIdx0 = analysis.faculty.headers.indexOf(CONFIG.CRITERIA[0]);
  const critAgg = CONFIG.CRITERIA.map(function (crit, i) {
    let s = 0, c = 0;
    facultyRows.forEach(function (r) {
      const v = r[critIdx0 + i];
      if (typeof v === 'number') { s += v; c++; }
    });
    return [crit, c ? round2_(s / c) : 0];
  });
  const critData = [['Critério', 'Média']].concat(critAgg);
  dash.getRange(t3Start + 1, 1, critData.length, 2).setValues(critData);

  // Gráficos
  const barTeachers = dash.newChart().asColumnChart()
    .addRange(dash.getRange(t1Start + 1, 1, rankData.length, 2))
    .setPosition(4, 4, 0, 0)
    .setOption('title', 'Média Global por Professor')
    .setOption('legend', { position: 'none' })
    .setOption('width', 620).setOption('height', 320)
    .build();
  dash.insertChart(barTeachers);

  const barFaculty = dash.newChart().asColumnChart()
    .addRange(dash.getRange(t2Start + 1, 1, facData.length, 2))
    .setPosition(22, 4, 0, 0)
    .setOption('title', 'Média Global por Faculdade')
    .setOption('legend', { position: 'none' })
    .setOption('width', 620).setOption('height', 300)
    .build();
  dash.insertChart(barFaculty);

  const radarCrit = dash.newChart().asLineChart()
    .addRange(dash.getRange(t3Start + 1, 1, critData.length, 2))
    .setPosition(40, 4, 0, 0)
    .setOption('title', 'Média Geral por Critério')
    .setOption('curveType', 'function')
    .setOption('width', 620).setOption('height', 300)
    .build();
  dash.insertChart(radarCrit);

  dash.autoResizeColumns(1, 2);
  SpreadsheetApp.setActiveSheet(dash);
}

// ————————————————————————————————————————————————————————————————
// Infra
// ————————————————————————————————————————————————————————————————
function getOrCreateSheet_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function getOrCreateMasterSpreadsheet_() {
  const folder = DriveApp.getFolderById(CONFIG.FOLDER_ID);
  const existing = folder.getFilesByName(CONFIG.MASTER_SPREADSHEET_NAME);
  if (existing.hasNext()) {
    return SpreadsheetApp.openById(existing.next().getId());
  }
  const ss = SpreadsheetApp.create(CONFIG.MASTER_SPREADSHEET_NAME);
  const file = DriveApp.getFileById(ss.getId());
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
  return ss;
}

// ————————————————————————————————————————————————————————————————
// Ponto de entrada
// ————————————————————————————————————————————————————————————————
function main() {
  const ss = getOrCreateMasterSpreadsheet_();

  const master = buildMasterSheet_(ss);                 // a) + b)
  if (!master.rows.length) {
    throw new Error('Nenhum registo lido. Confirma que a pasta ' + CONFIG.FOLDER_ID +
      ' contém os 3 ficheiros Google Sheets e que estão partilhados com esta conta.');
  }

  const analysis = analyze_(master);                    // c) + d)
  writeTable_(ss, CONFIG.BY_TEACHER_SHEET_NAME, analysis.teacher, '#38761d');
  writeTable_(ss, CONFIG.BY_FACULTY_SHEET_NAME, analysis.faculty, '#b45f06');

  buildDashboard_(ss, master, analysis);                // e)

  Logger.log('OK — consolidado: %s', ss.getUrl());
  return ss.getUrl();
}

/** Menu ao abrir a folha consolidada. */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('⚙️ Avaliações')
    .addItem('Processar / atualizar tudo', 'main')
    .addToUi();
}
