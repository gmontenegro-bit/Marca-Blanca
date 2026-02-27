#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'design', 'components');
const HTML_OUT = path.join(ROOT, 'src', 'html', 'pages', 'design-uikit.html');
const CSS_OUT = path.join(ROOT, 'src', 'css', 'pages', 'design-uikit.css');
const JS_OUT = path.join(ROOT, 'src', 'js', 'pages', 'design-uikit.js');
const META_OUT = path.join(ROOT, 'design', '.uikit-meta.json');

const CSS_TEMPLATE = `:root {
  color-scheme: light dark;
}

body {
  margin: 0;
  font-family: "Sora", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  background:
    radial-gradient(1000px 500px at -5% -10%, rgba(60, 0, 95, 0.14), transparent 58%),
    radial-gradient(900px 480px at 108% -8%, rgba(10, 163, 163, 0.14), transparent 52%),
    var(--bg);
  color: var(--on);
}

.ui-kit {
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 16px 48px;
}

.ui-kit-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.ui-kit-title {
  margin: 0;
  font-size: clamp(24px, 3.2vw, 34px);
  line-height: 1.15;
  letter-spacing: -0.5px;
}

.ui-kit-sub {
  margin: 8px 0 0;
  color: var(--on-mid);
  font-size: 14px;
}

.ui-kit-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.ui-btn {
  height: 38px;
  border-radius: 12px;
  padding: 0 12px;
  border: 1px solid var(--line);
  background: var(--surf);
  color: var(--on);
  font-weight: 700;
  cursor: pointer;
}

.ui-btn:hover {
  border-color: var(--p-bdr);
}

.ui-btn.primary {
  background: var(--p);
  border-color: var(--p);
  color: #fff;
}

.ui-stamp {
  margin: 0 0 18px;
  font-size: 12px;
  color: var(--on-sub);
}

.ui-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px;
}

.cmp {
  background: color-mix(in srgb, var(--surf) 90%, transparent);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px;
  box-shadow: var(--sh-sm);
}

.cmp-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.cmp-name {
  margin: 0;
  font-size: 16px;
}

.cmp-file {
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  color: var(--on-sub);
}

.cmp-purpose {
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--on-mid);
  line-height: 1.5;
}

.preview {
  border: 1px dashed var(--line);
  border-radius: 12px;
  background: linear-gradient(180deg, var(--surf2), var(--surf));
  padding: 10px;
  margin-bottom: 12px;
  min-height: 120px;
}

.preview-title {
  margin: 0 0 8px;
  font-size: 11px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--on-sub);
  font-weight: 800;
}

.spec-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.spec {
  background: var(--surf2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px;
}

.spec h4 {
  margin: 0 0 8px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--on-sub);
}

.spec ul,
.spec ol {
  margin: 0;
  padding-left: 18px;
  color: var(--on-mid);
  font-size: 13px;
  line-height: 1.5;
}

.spec p {
  margin: 0;
  color: var(--on-mid);
  font-size: 13px;
  line-height: 1.5;
}

.kbd {
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  border: 1px solid var(--line);
  background: var(--surf);
  padding: 1px 6px;
  border-radius: 999px;
  font-size: 11px;
}

.mock-shell {
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
}

.mock-shell .bar {
  height: 28px;
  border-bottom: 1px solid var(--line);
  background: var(--surf);
}

.mock-shell .rows {
  display: grid;
  grid-template-columns: 56px 1fr;
  min-height: 86px;
}

.mock-shell .side {
  border-right: 1px solid var(--line);
  background: var(--surf3);
}

.mock-shell .main {
  background: var(--surf2);
}

.mock-tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.mock-tiles .tile {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  color: var(--on-mid);
  background: var(--surf);
}

.mock-tiles .tile.add {
  border-style: dashed;
}

.mock-sheet {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surf);
  padding: 10px;
}

.mock-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-bottom: 8px;
}

.mock-steps span {
  display: block;
  height: 5px;
  border-radius: 999px;
  background: var(--line);
}

.mock-steps span.active {
  background: var(--p);
}

.mock-line {
  height: 28px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surf2);
  margin-bottom: 6px;
}

.mock-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.mock-table th,
.mock-table td {
  border: 1px solid var(--line);
  padding: 5px;
  text-align: left;
}

.mock-table th {
  background: var(--surf2);
  color: var(--on-mid);
}

.mock-snack {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid var(--line);
  padding: 6px 12px;
  font-size: 12px;
  background: var(--ok-bg);
  color: var(--ok);
}

.mock-modal {
  margin: 0 auto;
  max-width: 260px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surf);
  padding: 9px;
}

.mock-modal .field {
  height: 24px;
  border: 1px solid var(--line);
  border-radius: 7px;
  margin-bottom: 6px;
  background: var(--surf2);
}

@media (max-width: 760px) {
  .ui-kit {
    padding-top: 20px;
  }

  .ui-kit-head {
    flex-direction: column;
  }

  .mock-tiles {
    grid-template-columns: repeat(2, 1fr);
  }
}`;

const JS_TEMPLATE = `(() => {
  let lastStamp = null;

  async function checkStamp() {
    try {
      const res = await fetch('/design/.uikit-meta.json?ts=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) {
        return;
      }
      const data = await res.json();
      if (lastStamp === null) {
        lastStamp = data.generatedAt;
        return;
      }
      if (data.generatedAt !== lastStamp) {
        window.location.reload();
      }
    } catch (err) {
      // Ignore polling errors (usually caused by local server restart).
    }
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  checkStamp();
  setInterval(checkStamp, 2000);
})();`;

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeTitle(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseSectionBlock(content) {
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('### '));

  const bullets = [];
  const numbered = [];
  const paragraphs = [];

  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      bullets.push(bulletMatch[1].trim());
      continue;
    }

    const numMatch = line.match(/^\d+\.\s+(.+)$/);
    if (numMatch) {
      numbered.push(numMatch[1].trim());
      continue;
    }

    if (!line.startsWith('#')) {
      paragraphs.push(line);
    }
  }

  return {
    bullets,
    numbered,
    paragraph: paragraphs.join(' '),
  };
}

function parseComponentMarkdown(raw) {
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : 'Componente';

  const sectionRegex = /^##\s+(.+)$/gm;
  const matches = [...raw.matchAll(sectionRegex)];
  const sections = [];

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index];
    const next = matches[index + 1];
    const sectionTitle = current[1].trim();
    const start = current.index + current[0].length;
    const end = next ? next.index : raw.length;
    const body = raw.slice(start, end).trim();

    sections.push({
      title: sectionTitle,
      key: normalizeTitle(sectionTitle),
      ...parseSectionBlock(body),
    });
  }

  return { title, sections };
}

function renderList(values, ordered = false) {
  if (!values || values.length === 0) {
    return '';
  }
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag}>${values.map((v) => `<li>${escapeHtml(v)}</li>`).join('')}</${tag}>`;
}

function previewByFile(fileName) {
  if (fileName === 'app-shell-component.md') {
    return `<div class="mock-shell"><div class="bar"></div><div class="rows"><div class="side"></div><div class="main"></div></div></div>`;
  }
  if (fileName === 'service-tile-component.md') {
    return `<div class="mock-tiles"><div class="tile">Luz</div><div class="tile">Agua</div><div class="tile add">Agregar</div></div>`;
  }
  if (fileName === 'payment-flow-sheet-component.md') {
    return `<div class="mock-sheet"><div class="mock-steps"><span class="active"></span><span class="active"></span><span></span><span></span><span></span></div><div class="mock-line"></div><div class="mock-line"></div><div class="mock-line" style="width:60%"></div></div>`;
  }
  if (fileName === 'data-table-component.md') {
    return `<table class="mock-table"><thead><tr><th>Hora</th><th>Servicio</th><th>Estado</th></tr></thead><tbody><tr><td>08:12</td><td>Luz</td><td>OK</td></tr><tr><td>09:10</td><td>Agua</td><td>OK</td></tr></tbody></table>`;
  }
  if (fileName === 'feedback-components.md') {
    return `<div class="mock-snack">ok Accion completada</div>`;
  }
  if (fileName === 'user-modal-component.md') {
    return `<div class="mock-modal"><div class="field"></div><div class="field"></div><div class="field"></div><div class="field" style="width:50%"></div></div>`;
  }
  return `<div class="mock-line"></div><div class="mock-line" style="width:65%"></div>`;
}

function sectionByKey(sections, keyCandidates) {
  for (const section of sections) {
    if (keyCandidates.includes(section.key)) {
      return section;
    }
  }
  return null;
}

function renderComponentCard(fileName, parsed) {
  const objective = sectionByKey(parsed.sections, ['objetivo']);
  const structure = sectionByKey(parsed.sections, ['estructura', 'partes', 'contenedor', 'subcomponentes']);
  const states = sectionByKey(parsed.sections, ['estados', 'estados e interacciones']);
  const variants = sectionByKey(parsed.sections, ['variantes']);
  const acceptance = sectionByKey(parsed.sections, ['criterios de aceptacion']);

  const objectiveText = objective && objective.paragraph ? objective.paragraph : 'Sin objetivo documentado';

  const blocks = [];
  if (structure && (structure.bullets.length || structure.numbered.length || structure.paragraph)) {
    blocks.push(
      `<article class="spec"><h4>Estructura</h4>${
        structure.paragraph ? `<p>${escapeHtml(structure.paragraph)}</p>` : ''
      }${renderList(structure.bullets)}${renderList(structure.numbered, true)}</article>`,
    );
  }

  if (states && (states.bullets.length || states.numbered.length || states.paragraph)) {
    blocks.push(
      `<article class="spec"><h4>Estados</h4>${
        states.paragraph ? `<p>${escapeHtml(states.paragraph)}</p>` : ''
      }${renderList(states.bullets)}${renderList(states.numbered, true)}</article>`,
    );
  }

  if (variants && (variants.bullets.length || variants.numbered.length || variants.paragraph)) {
    blocks.push(
      `<article class="spec"><h4>Variantes</h4>${
        variants.paragraph ? `<p>${escapeHtml(variants.paragraph)}</p>` : ''
      }${renderList(variants.bullets)}${renderList(variants.numbered, true)}</article>`,
    );
  }

  if (acceptance && (acceptance.bullets.length || acceptance.numbered.length || acceptance.paragraph)) {
    blocks.push(
      `<article class="spec"><h4>Criterios</h4>${
        acceptance.paragraph ? `<p>${escapeHtml(acceptance.paragraph)}</p>` : ''
      }${renderList(acceptance.bullets)}${renderList(acceptance.numbered, true)}</article>`,
    );
  }

  return `<section class="cmp"><header class="cmp-head"><h2 class="cmp-name">${escapeHtml(
    parsed.title,
  )}</h2><span class="cmp-file">${escapeHtml(fileName)}</span></header><p class="cmp-purpose">${escapeHtml(
    objectiveText,
  )}</p><div class="preview"><h3 class="preview-title">Vista rapida</h3>${previewByFile(
    fileName,
  )}</div><div class="spec-cols">${blocks.join('')}</div></section>`;
}

function buildHtml(componentEntries) {
  const stamp = new Date().toLocaleString('es-NI', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return `<!doctype html>
<html lang="es" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Design UI Kit</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link href="/src/css/tokens/theme.css" rel="stylesheet" />
    <link href="/src/css/base/reset.css" rel="stylesheet" />
    <link href="/src/css/pages/design-uikit.css" rel="stylesheet" />
  </head>
  <body>
    <main class="ui-kit">
      <header class="ui-kit-head">
        <div>
          <h1 class="ui-kit-title">UIKit de componentes</h1>
          <p class="ui-kit-sub">Fuente: <span class="kbd">design/components/*.md</span>. Al editar un spec, esta pagina se regenera.</p>
        </div>
        <div class="ui-kit-actions">
          <button class="ui-btn" id="theme-toggle" type="button">Cambiar tema</button>
          <a class="ui-btn primary" href="/src/html/pages/paypoint.html">Ver PayPoint</a>
        </div>
      </header>
      <p class="ui-stamp">Ultima generacion: ${escapeHtml(stamp)} | componentes: ${componentEntries.length}</p>
      <section class="ui-grid">${componentEntries.join('')}</section>
    </main>
    <script src="/src/js/pages/design-uikit.js"></script>
  </body>
</html>`;
}

function readComponentFiles() {
  return fs
    .readdirSync(COMPONENTS_DIR)
    .filter((name) => name.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b));
}

function generateOnce() {
  const componentFiles = readComponentFiles();
  const entries = componentFiles.map((fileName) => {
    const raw = fs.readFileSync(path.join(COMPONENTS_DIR, fileName), 'utf8');
    const parsed = parseComponentMarkdown(raw);
    return renderComponentCard(fileName, parsed);
  });

  fs.writeFileSync(CSS_OUT, CSS_TEMPLATE, 'utf8');
  fs.writeFileSync(JS_OUT, JS_TEMPLATE, 'utf8');
  fs.writeFileSync(HTML_OUT, buildHtml(entries), 'utf8');

  const meta = {
    generatedAt: Date.now(),
    componentCount: componentFiles.length,
  };
  fs.writeFileSync(META_OUT, `${JSON.stringify(meta, null, 2)}\n`, 'utf8');

  console.log(`[design-uikit] updated ${path.relative(ROOT, HTML_OUT)} (${componentFiles.length} components)`);
}

function watchMode() {
  generateOnce();

  let timer = null;
  const schedule = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      try {
        generateOnce();
      } catch (error) {
        console.error('[design-uikit] generate error:', error.message);
      }
    }, 120);
  };

  fs.watch(COMPONENTS_DIR, schedule);
  console.log('[design-uikit] watching design/components/*.md');
}

const isWatch = process.argv.includes('--watch');

try {
  if (isWatch) {
    watchMode();
  } else {
    generateOnce();
  }
} catch (error) {
  console.error('[design-uikit] fatal error:', error.message);
  process.exitCode = 1;
}
