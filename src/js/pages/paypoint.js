/* Data */
const DEMO_USERS = {
  superadmin: {
    cedula: '000-000000-SUPER',
    nombre: 'Super',
    apellido: 'Admin',
    rol: 'superadmin',
    branch: 'Plataforma global',
  },
  admin: {
    cedula: '001-010101-ADMIN',
    nombre: 'Luisa',
    apellido: 'Prado',
    rol: 'admin',
    branch: 'Comercial Centro',
  },
  operador: {
    cedula: '001-020202-OPER',
    nombre: 'Ana',
    apellido: 'Torres',
    rol: 'operador',
    branch: 'Caja #2 - Comercial Norte',
  },
};

const USERS_DB = [
  {
    id: 1,
    nombre: 'Ana',
    apellido: 'Torres',
    cedula: '001-020202-OPER',
    tipo: 'nacional',
    rol: 'operador',
    estado: 'activo',
    acceso: 'Hace 8 min',
    ops: 28,
  },
  {
    id: 2,
    nombre: 'Carlos',
    apellido: 'Mendoza',
    cedula: '001-030303-0003M',
    tipo: 'nacional',
    rol: 'operador',
    estado: 'activo',
    acceso: 'Hace 1 h',
    ops: 35,
  },
  {
    id: 3,
    nombre: 'Luisa',
    apellido: 'Prado',
    cedula: '001-010101-ADMIN',
    tipo: 'nacional',
    rol: 'admin',
    estado: 'activo',
    acceso: 'Ayer',
    ops: 4,
  },
  {
    id: 4,
    nombre: 'Roberto',
    apellido: 'Jimenez',
    cedula: '001-040404-0004J',
    tipo: 'nacional',
    rol: 'operador',
    estado: 'inactivo',
    acceso: 'Hace 4 dias',
    ops: 19,
  },
];

const SERVICES = [
  { id: 'luz', name: 'Luz Electrica', icon: 'bolt', desc: 'DISNORTE / DISSUR' },
  { id: 'agua', name: 'Agua Potable', icon: 'water_drop', desc: 'ENACAL' },
  { id: 'gas', name: 'Gas Natural', icon: 'local_fire_department', desc: 'PETRONIC' },
  {
    id: 'tel',
    name: 'Telefonia Celular',
    icon: 'smartphone',
    desc: 'Claro - Tigo - Movistar',
  },
  { id: 'lafise', name: 'Lafise', icon: 'account_balance', desc: 'Cuotas y creditos' },
];

const MOCK_INVOICES = {
  luz: [
    { id: 'INV-001', period: 'Enero 2026', amount: 185.5, due: '05/02/2026', status: 'vencida' },
    {
      id: 'INV-002',
      period: 'Febrero 2026',
      amount: 203.0,
      due: '05/03/2026',
      status: 'pendiente',
    },
  ],
  agua: [{ id: 'INV-010', period: 'Enero 2026', amount: 88.0, due: '10/02/2026', status: 'vencida' }],
  gas: [
    { id: 'INV-020', period: 'Enero 2026', amount: 64.5, due: '15/02/2026', status: 'pendiente' },
  ],
  tel: [
    {
      id: 'INV-030',
      period: 'Febrero 2026',
      amount: 45.0,
      due: '01/03/2026',
      status: 'pendiente',
    },
  ],
  lafise: [
    {
      id: 'INV-040',
      period: 'Cuota Feb 2026',
      amount: 280.0,
      due: '28/02/2026',
      status: 'pendiente',
    },
    {
      id: 'INV-041',
      period: 'Cuota Mar 2026',
      amount: 280.0,
      due: '31/03/2026',
      status: 'pendiente',
    },
  ],
};

const OPS_DB = [
  {
    fecha: '25/02/2026 08:12',
    op: 'Ana Torres',
    svc: 'Luz Electrica',
    nis: 'NIS-4829',
    ref: 'INV-001',
    monto: 185.5,
    estado: 'completado',
  },
  {
    fecha: '25/02/2026 08:44',
    op: 'Carlos Mendoza',
    svc: 'Telefonia Celular',
    nis: 'NIS-0728',
    ref: 'INV-030',
    monto: 45.0,
    estado: 'completado',
  },
  {
    fecha: '25/02/2026 09:10',
    op: 'Ana Torres',
    svc: 'Agua Potable',
    nis: 'NIS-2201',
    ref: 'INV-010',
    monto: 88.0,
    estado: 'completado',
  },
  {
    fecha: '25/02/2026 09:38',
    op: 'Carlos Mendoza',
    svc: 'Lafise',
    nis: 'NIS-9032',
    ref: 'INV-040',
    monto: 280.0,
    estado: 'completado',
  },
  {
    fecha: '25/02/2026 10:05',
    op: 'Ana Torres',
    svc: 'Gas Natural',
    nis: 'NIS-3310',
    ref: 'INV-020',
    monto: 64.5,
    estado: 'pendiente',
  },
  {
    fecha: '25/02/2026 10:22',
    op: 'Carlos Mendoza',
    svc: 'Luz Electrica',
    nis: 'NIS-0041',
    ref: 'INV-002',
    monto: 203.0,
    estado: 'completado',
  },
];

const STATS = {
  dia: { ops: 42, monto: '$4,820', users: 3, avg: '1:38' },
  mes: { ops: 1340, monto: '$198,400', users: 4, avg: '1:44' },
  anio: { ops: 14800, monto: '$2.1M', users: 4, avg: '1:52' },
};

const PAYPOINT_LAYOUT_MANIFEST_URL = '/src/html/layouts/paypoint/manifest.json';
const PAYPOINT_TEXTS_URL = '/src/js/content/paypoint-texts.json';
let TEXTS = {};

function getText(path, fallback = '') {
  const value = path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), TEXTS);
  return value === undefined ? fallback : value;
}

/* App State */
const S = {
  user: null,
  role: null,
  payService: null,
  payMethod: null,
  payNIS: null,
  payBill: null,
  myOps: [],
  period: 'dia',
  dark: false,
};

/* Theme */
function toggleTheme() {
  S.dark = !S.dark;
  document.documentElement.setAttribute('data-theme', S.dark ? 'dark' : 'light');
  document.getElementById('theme-ico').textContent = S.dark ? 'light_mode' : 'dark_mode';
}

/* Clock */
function tick() {
  const el = document.getElementById('clock');
  if (el) {
    el.textContent = new Date().toLocaleTimeString('es-NI', { hour12: false });
  }
}

async function loadLayout() {
  const root = document.getElementById('app-root');
  if (!root) {
    throw new Error('No existe #app-root');
  }

  const manifestRes = await fetch(PAYPOINT_LAYOUT_MANIFEST_URL, { cache: 'no-store' });
  if (!manifestRes.ok) {
    throw new Error('No se pudo cargar manifest del layout de PayPoint');
  }

  const manifest = await manifestRes.json();
  const parts = Array.isArray(manifest.parts) ? manifest.parts : [];
  if (!parts.length) {
    throw new Error('Manifest de layout sin partes');
  }

  const chunks = await Promise.all(
    parts.map(async (url) => {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        throw new Error(`No se pudo cargar parcial: ${url}`);
      }
      return res.text();
    }),
  );

  root.innerHTML = chunks.join('\n');
}

async function loadTexts() {
  const res = await fetch(PAYPOINT_TEXTS_URL, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('No se pudo cargar textos de PayPoint');
  }
  TEXTS = await res.json();
}

function setDefaultLoginCredentials() {
  document.getElementById('in-cedula').value = DEMO_USERS.admin.cedula;
  document.getElementById('in-pass').value = getText('login.demoPassword', 'demo1234');
}

function applyI18nToLayout() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) {
      return;
    }
    el.textContent = getText(key, el.textContent);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) {
      return;
    }
    el.setAttribute('placeholder', getText(key, el.getAttribute('placeholder') || ''));
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (!key) {
      return;
    }
    el.setAttribute('title', getText(key, el.getAttribute('title') || ''));
  });

  document.querySelectorAll('[data-i18n-value]').forEach((el) => {
    const key = el.getAttribute('data-i18n-value');
    if (!key || !('value' in el)) {
      return;
    }
    el.value = getText(key, el.value || '');
  });
}

async function bootstrap() {
  try {
    await Promise.all([loadLayout(), loadTexts()]);
    applyI18nToLayout();
    setDefaultLoginCredentials();
    tick();
    setInterval(tick, 1000);
  } catch (error) {
    const root = document.getElementById('app-root');
    if (root) {
      root.innerHTML = '<div class="page active"><p style="padding:24px">No se pudo iniciar PayPoint.</p></div>';
    }
  }
}

/* Demo role */
function demoRole(r, el) {
  document.querySelectorAll('.demo-pill').forEach((p) => p.classList.remove('sel'));
  if (el) {
    el.classList.add('sel');
  }
  const u = DEMO_USERS[r];
  const inputCedula = document.getElementById('in-cedula');
  if (inputCedula) {
    inputCedula.value = u.cedula;
  }
}

function enterApp(user) {
  S.user = user;
  S.role = user.rol;

  const initials = (user.nombre[0] + user.apellido[0]).toUpperCase();
  document.getElementById('user-av').textContent = initials;
  const rc = document.getElementById('role-chip');
  const rlabels = {
    superadmin: getText('roleLabels.superadmin', 'Super Admin'),
    admin: getText('roleLabels.admin', 'Administrador'),
    operador: getText('roleLabels.operador', 'Operador/a'),
  };
  rc.textContent = rlabels[user.rol] || user.rol;
  rc.className = 'role-chip ' + user.rol;

  document.getElementById('op-name-strip').textContent = `${user.nombre} ${user.apellido}`;

  buildSvcGrid();
  buildUsersTable(USERS_DB);
  renderStats();
  renderOpsTable(OPS_DB);
  renderChart();

  showPage('pg-app');
  buildNav();
  const defView = S.role === 'operador' ? 'ops' : 'dash';
  showView(defView);
}

/* Login */
function doLogin() {
  const ced = document.getElementById('in-cedula').value.trim();
  const pas = document.getElementById('in-pass').value.trim();
  if (!ced || !pas) {
    snack(getText('login.emptyFields', 'Completa todos los campos'), 'err');
    return;
  }

  const user = Object.values(DEMO_USERS).find((u) => u.cedula === ced) || DEMO_USERS.admin;
  enterApp(user);
}

function doLogout() {
  S.myOps = [];
  showPage('pg-login');
}

/* Pages & Views */
function showPage(id) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) {
    page.classList.add('active');
  }
}

function showView(id) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  const v = document.getElementById('v-' + id);
  if (v) {
    v.classList.add('active');
  }
  document.querySelectorAll('.nav-btn,.bn-item').forEach((n) => n.classList.remove('active'));
  document.querySelectorAll('[data-view="' + id + '"]').forEach((n) => n.classList.add('active'));
}

/* Build Nav */
function buildNav() {
  const r = S.role;
  let top = '';
  let bot = '';

  if (r === 'superadmin') {
    top += navBtn('companies', 'business', getText('navigation.companies', 'Empresas'));
    top += navBtn('dash', 'bar_chart', getText('navigation.stats', 'Estadisticas'));
    top += navBtn('users', 'group', getText('navigation.users', 'Usuarios'));
  } else if (r === 'admin') {
    top += navBtn('dash', 'bar_chart', getText('navigation.stats', 'Estadisticas'));
    top += navBtn('users', 'group', getText('navigation.users', 'Usuarios'));
  }
  top += navBtn('ops', 'receipt_long', getText('navigation.operations', 'Operaciones'));

  if (r !== 'operador') {
    bot = navBtn('config', 'palette', getText('navigation.brandConfig', 'Marca / Config.'));
  }

  document.getElementById('sb-top').innerHTML = top;
  document.getElementById('sb-bot').innerHTML = bot;

  const bnItems = [];
  if (r === 'superadmin' || r === 'admin') {
    bnItems.push({ v: 'dash', ico: 'bar_chart', lbl: getText('navigation.stats', 'Estadisticas') });
    bnItems.push({ v: 'users', ico: 'group', lbl: getText('navigation.users', 'Usuarios') });
  }
  bnItems.push({ v: 'ops', ico: 'receipt_long', lbl: getText('navigation.operations', 'Operaciones') });
  if (r !== 'operador') {
    bnItems.push({ v: 'config', ico: 'palette', lbl: getText('navigation.configShort', 'Config.') });
  }

  document.getElementById('bottom-nav').innerHTML = bnItems
    .map(
      (i) => `
    <button class="bn-item" data-view="${i.v}" onclick="showView('${i.v}')">
      <span class="mi">${i.ico}</span>
      <span class="bn-item-label">${i.lbl}</span>
    </button>
  `
    )
    .join('');
}

function navBtn(view, ico, label) {
  return `<button class="nav-btn" data-view="${view}" onclick="showView('${view}')">
    <span class="mi">${ico}</span>${label}
  </button>`;
}

/* Service Grid */
function buildSvcGrid() {
  document.getElementById('svc-grid').innerHTML =
    SERVICES.map(
      (s) => `
    <div class="svc-tile" onclick="startPayFlow('${s.id}','${s.name}')">
      <div class="svc-ico"><span class="mi">${s.icon}</span></div>
      <div class="svc-name">${s.name}</div>
      <div class="svc-sub">${s.desc}</div>
    </div>
  `
    ).join('') +
    `
    <div class="svc-tile add-tile" onclick="snack('${getText('services.addWarn', 'Solo Administradores pueden agregar servicios')}','warn')">
      <div class="svc-ico"><span class="mi">add_circle_outline</span></div>
      <div class="svc-name">${getText('services.addLabel', 'Agregar servicio')}</div>
    </div>`;
}

/* PAYMENT FLOW */
function startPayFlow(svcId, svcName) {
  S.payService = { id: svcId, name: svcName };
  S.payMethod = null;
  S.payNIS = null;
  S.payBill = null;

  document.getElementById('pay-s1-title').textContent = getText('payFlow.titlePrefix', 'Pago - ') + svcName;
  document.querySelectorAll('.method-card').forEach((c) => c.classList.remove('sel'));
  document.getElementById('btn-step1-next').disabled = true;

  showPayStep(1);
  document.getElementById('pay-overlay').classList.add('open');
}

function showPayStep(n) {
  [1, 2, 3, 4, 5].forEach((i) => {
    document.getElementById('pay-step-' + i).style.display = i === n ? '' : 'none';
  });
}

function payOverlayClick(e) {
  if (e.target === document.getElementById('pay-overlay')) {
    closePayFlow();
  }
}

function closePayFlow() {
  document.getElementById('pay-overlay').classList.remove('open');
}

function selectMethod(m) {
  S.payMethod = m;
  document.querySelectorAll('.method-card').forEach((c) => c.classList.remove('sel'));
  document.getElementById('mc-' + m).classList.add('sel');
  document.getElementById('btn-step1-next').disabled = false;
}

function goStep2() {
  if (!S.payMethod) {
    return;
  }
  document.getElementById('pay-s2-title').textContent =
    S.payMethod === 'manual'
      ? getText('payFlow.manualTitle', 'Ingresa el NIS')
      : getText('payFlow.scanTitle', 'Escanear factura');
  document.getElementById('pay-s2-sub').textContent =
    S.payMethod === 'manual'
      ? getText('payFlow.manualSub', 'NIS - Numero de Identificacion del Servicio')
      : getText('payFlow.scanSub', 'Leer codigo de barras de la factura');
  document.getElementById('method-manual-ui').style.display = S.payMethod === 'manual' ? '' : 'none';
  document.getElementById('method-scan-ui').style.display = S.payMethod === 'scan' ? '' : 'none';
  document.getElementById('nis-input').value = '';
  document.getElementById('scan-input').value = '';
  showPayStep(2);
}

function validateNIS() {
  // Visual validation handled by styles.
}

function simulateScan() {
  document.getElementById('scan-input').value = '4829011200320';
  snack(getText('payFlow.scanOk', 'Codigo escaneado correctamente'));
}

function goStep1() {
  showPayStep(1);
}

/* Step 3 - invoices */
function goStep3() {
  const nisVal =
    S.payMethod === 'manual'
      ? document.getElementById('nis-input').value.trim()
      : document.getElementById('scan-input').value.trim();

  if (!nisVal) {
    snack(getText('payFlow.nisRequired', 'Ingresa el NIS del cliente'), 'err');
    return;
  }

  S.payNIS = 'NIS-' + (nisVal.replace(/\D/g, '').slice(-4) || '0000');

  const invoices = MOCK_INVOICES[S.payService.id] || [];
  document.getElementById('pay-s3-nis').textContent = `${S.payNIS} - ${S.payService.name}`;

  document.getElementById('bill-list').innerHTML = invoices.length
    ? invoices
        .map(
          (inv) => `
        <div class="bill-card" id="bc-${inv.id}" onclick="selectBill('${inv.id}')">
          <div class="bill-icon"><span class="mi">${
            SERVICES.find((s) => s.id === S.payService.id)?.icon || 'receipt'
          }</span></div>
          <div class="bill-info">
            <div class="bill-title">${inv.period}</div>
            <div class="bill-meta">Ref: ${inv.id} &nbsp;-&nbsp; Vence: ${inv.due} &nbsp;-&nbsp;
              <span style="color:${
                inv.status === 'vencida' ? 'var(--err)' : 'var(--warn)'
              };font-weight:700">
                ${
                  inv.status === 'vencida'
                    ? getText('payFlow.billStatusExpired', 'Vencida')
                    : getText('payFlow.billStatusPending', 'Pendiente')
                }
              </span>
            </div>
          </div>
          <div class="bill-amount">$${inv.amount.toFixed(2)}</div>
          <div class="bill-check"><span class="mi" style="display:none">check</span></div>
        </div>
      `
        )
        .join('')
    : `<div class="empty"><span class="mi">search_off</span><div class="empty-t">${getText(
        'payFlow.noBillsTitle',
        'Sin facturas pendientes',
      )}</div><div class="empty-s">${getText('payFlow.noBillsSub', 'No se encontraron facturas para este NIS')}</div></div>`;

  document.getElementById('btn-pay-now').disabled = true;
  showPayStep(3);
}

function selectBill(id) {
  S.payBill = MOCK_INVOICES[S.payService.id].find((i) => i.id === id);
  document.querySelectorAll('.bill-card').forEach((c) => {
    c.classList.remove('sel');
    c.querySelector('.bill-check .mi').style.display = 'none';
  });
  const bc = document.getElementById('bc-' + id);
  bc.classList.add('sel');
  bc.querySelector('.bill-check .mi').style.display = '';
  document.getElementById('btn-pay-now').disabled = false;
}

/* Step 4 - confirm */
function goStep4() {
  if (!S.payBill) {
    snack(getText('payFlow.billSelectRequired', 'Selecciona una factura'), 'err');
    return;
  }
  document.getElementById('pay-s4-title').textContent =
    getText('payFlow.confirmTitlePrefix', 'Confirmar - ') + S.payService.name;
  document.getElementById('pay-s4-body').innerHTML = `
    <div class="steps" style="margin-bottom:20px">
      <div class="step-dot done"><span class="mi">check</span></div>
      <div class="step-line done"></div>
      <div class="step-dot done"><span class="mi">check</span></div>
      <div class="step-line done"></div>
      <div class="step-dot done"><span class="mi">check</span></div>
      <div class="step-line done"></div>
      <div class="step-dot cur">4</div>
    </div>
    <div class="summ-card">
      <div class="summ-row"><span class="summ-lbl">${getText('payFlow.summary.service', 'Servicio')}</span><span class="summ-val">${S.payService.name}</span></div>
      <div class="summ-row"><span class="summ-lbl">${getText('payFlow.summary.nis', 'NIS')}</span><span class="summ-val mono">${S.payNIS}</span></div>
      <div class="summ-row"><span class="summ-lbl">${getText('payFlow.summary.period', 'Periodo')}</span><span class="summ-val">${S.payBill.period}</span></div>
      <div class="summ-row"><span class="summ-lbl">${getText('payFlow.summary.reference', 'Referencia')}</span><span class="summ-val mono">${S.payBill.id}</span></div>
      <div class="summ-row"><span class="summ-lbl">${getText('payFlow.summary.due', 'Vencimiento')}</span><span class="summ-val">${S.payBill.due}</span></div>
      <div class="summ-row summ-total"><span class="summ-lbl">${getText('payFlow.summary.total', 'Total a cobrar')}</span><span class="summ-val">$${S.payBill.amount.toFixed(
        2,
      )}</span></div>
    </div>
    <p style="font-size:12px;color:var(--on-mid);margin-bottom:16px;text-align:center">
      <span class="mi" style="font-size:14px;vertical-align:middle">info</span>
      ${getText('payFlow.summary.confirmHint', 'Confirma que el cliente entrego el efectivo antes de procesar')}
    </p>
    <div style="display:flex;gap:10px">
      <button class="btn btn-s" style="height:50px" onclick="showPayStep(3)">
        <span class="mi">arrow_back</span>
      </button>
      <button class="btn btn-p btn-full btn-lg" onclick="processPayment()">
        <span class="mi">check_circle</span> ${getText('payFlow.summary.processAction', 'Procesar pago')}
      </button>
    </div>
  `;
  showPayStep(4);
}

/* Process & Receipt */
function processPayment() {
  const code = 'PP' + Date.now().toString().slice(-8).toUpperCase();
  const now = new Date();
  const hora = now.toLocaleTimeString('es-NI', { hour12: false, hour: '2-digit', minute: '2-digit' });

  S.myOps.unshift({
    hora,
    svc: S.payService.name,
    nis: S.payNIS,
    ref: S.payBill.id,
    monto: S.payBill.amount,
    estado: 'completado',
    code,
  });
  renderMyOps();

  document.getElementById('receipt-body').innerHTML = `
    <div class="receipt">
      <div class="receipt-check"><span class="mi">check_circle</span></div>
      <div class="receipt-title">${getText('payFlow.receipt.title', 'Pago procesado')}</div>
      <div class="receipt-sub">${getText('payFlow.receipt.sub', 'La operacion se registro correctamente')}</div>

      <div class="receipt-dashed">
        <div class="receipt-code">${code}</div>
        <div style="font-size:11px;color:var(--on-sub);margin-bottom:12px">${getText('payFlow.receipt.receiptCode', 'Codigo de comprobante')}</div>
        <div class="receipt-field"><span class="rf-lbl">${getText('payFlow.summary.service', 'Servicio')}</span><span class="rf-val">${S.payService.name}</span></div>
        <div class="receipt-field"><span class="rf-lbl">${getText('payFlow.summary.nis', 'NIS')}</span><span class="rf-val mono">${S.payNIS}</span></div>
        <div class="receipt-field"><span class="rf-lbl">${getText('payFlow.summary.period', 'Periodo')}</span><span class="rf-val">${S.payBill.period}</span></div>
        <div class="receipt-field"><span class="rf-lbl">${getText('payFlow.summary.reference', 'Referencia')}</span><span class="rf-val mono">${S.payBill.id}</span></div>
        <div class="receipt-field"><span class="rf-lbl">${getText('payFlow.receipt.operator', 'Operador/a')}</span><span class="rf-val">${S.user.nombre} ${S.user.apellido}</span></div>
        <div class="receipt-field"><span class="rf-lbl">${getText('payFlow.receipt.datetime', 'Fecha y hora')}</span><span class="rf-val mono">${now.toLocaleDateString(
          'es-NI'
        )} ${hora}</span></div>
        <div class="receipt-field" style="border-top:2px solid var(--line);padding-top:10px;margin-top:4px">
          <span class="rf-lbl" style="font-weight:800;font-size:15px">${getText('payFlow.receipt.totalPaid', 'Total pagado')}</span>
          <span class="rf-val" style="font-size:18px;color:var(--p)">$${S.payBill.amount.toFixed(2)}</span>
        </div>
      </div>

      <div class="receipt-actions">
        <button class="btn btn-s" style="height:46px;justify-content:center" onclick="snack('${getText('payFlow.receipt.whatsappSent', 'Comprobante enviado por WhatsApp')}')">
          <span class="mi">share</span> ${getText('payFlow.receipt.send', 'Enviar')}
        </button>
        <button class="btn btn-s" style="height:46px;justify-content:center" onclick="printReceipt()">
          <span class="mi">print</span> ${getText('payFlow.receipt.print', 'Imprimir')}
        </button>
      </div>
      <button class="btn btn-p btn-full" style="margin-top:10px;height:46px" onclick="closePayFlow()">
        <span class="mi">check</span> ${getText('payFlow.receipt.done', 'Listo')}
      </button>
    </div>
  `;
  showPayStep(5);
  snack(
    getText('payFlow.receipt.successSnackPrefix', 'Pago de ') +
      S.payService.name +
      getText('payFlow.receipt.successSnackMiddle', ' completado - $') +
      S.payBill.amount.toFixed(2),
  );
}

function printReceipt() {
  snack(getText('payFlow.receipt.printSending', 'Enviando a impresora...'));
  setTimeout(() => window.print(), 300);
}

/* Render My Ops */
function renderMyOps() {
  const c = S.myOps.length;
  document.getElementById('my-ops-chip').textContent = c + ' op' + (c !== 1 ? 's.' : '.');
  if (!c) {
    return;
  }
  document.getElementById('my-ops-tbody').innerHTML = S.myOps
    .map(
      (o) => `
    <tr>
      <td class="mono">${o.hora}</td>
      <td>${o.svc}</td>
      <td class="mono" style="font-size:11px">${o.nis}</td>
      <td class="mono">$${o.monto.toFixed(2)}</td>
      <td><span class="chip chip-g"><span class="mi">check</span></span></td>
    </tr>
  `
    )
    .join('');
}

/* Stats */
function setPeriod(p, btn) {
  S.period = p;
  document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
  btn.classList.add('active');
  renderStats();
  renderChart();
}

function renderStats() {
  const s = STATS[S.period];
  document.getElementById('stats-grid').innerHTML = `
    ${sc(getText('stats.operations', 'Operaciones'), s.ops, 'receipt_long', 'ico-p', 'up', '+11%')}
    ${sc(getText('stats.amountProcessed', 'Monto procesado'), s.monto, 'attach_money', 'ico-g', 'up', '+8%')}
    ${sc(getText('stats.activeOperators', 'Operadores activos'), s.users, 'group', 'ico-b', 'fl', '-')} 
    ${sc(getText('stats.avgTime', 'Tiempo promedio'), s.avg, 'timer', 'ico-a', 'dn', '-3%')}
  `;
}

function sc(lbl, val, ico, iconClass, tr, tv) {
  const ti = tr === 'up' ? 'arrow_upward' : tr === 'dn' ? 'arrow_downward' : 'remove';
  const tc = tr === 'up' ? 'trend-up' : tr === 'dn' ? 'trend-dn' : 'trend-fl';
  return `<div class="sc">
    <div class="sc-hd">
      <div class="sc-ico ${iconClass}"><span class="mi">${ico}</span></div>
      <div class="trend ${tc}"><span class="mi">${ti}</span>${tv}</div>
    </div>
    <div class="sc-val">${val}</div>
    <div class="sc-lbl">${lbl}</div>
  </div>`;
}

function renderChart() {
  const data =
    S.period === 'dia'
      ? [
          { l: 'L', v: 58 },
          { l: 'M', v: 84 },
          { l: 'Mi', v: 71 },
          { l: 'J', v: 102 },
          { l: 'V', v: 78 },
          { l: 'S', v: 39 },
          { l: 'H', v: 42 },
        ]
      : S.period === 'mes'
        ? [
            { l: 'S1', v: 310 },
            { l: 'S2', v: 380 },
            { l: 'S3', v: 420 },
            { l: 'S4', v: 230 },
          ]
        : [
            { l: 'E', v: 1100 },
            { l: 'F', v: 1250 },
            { l: 'M', v: 1480 },
            { l: 'A', v: 1400 },
            { l: 'M', v: 1600 },
            { l: 'J', v: 1720 },
            { l: 'J', v: 1680 },
            { l: 'A', v: 1800 },
            { l: 'S', v: 1900 },
            { l: 'O', v: 2000 },
            { l: 'N', v: 2100 },
            { l: 'D', v: 2300 },
          ];
  const mx = Math.max(...data.map((d) => d.v));
  document.getElementById('chart-bars').innerHTML = data
    .map(
      (d) => `
    <div class="cb-col">
      <div class="cb-bar" style="height:${Math.round((d.v / mx) * 100)}%" title="${d.v}"></div>
      <div class="cb-lbl">${d.l}</div>
    </div>`
    )
    .join('');
}

/* Ops Table */
function renderOpsTable(data) {
  const status = { completado: 'chip-g', pendiente: 'chip-a', fallido: 'chip-r' };
  const slabel = {
    completado: getText('opsTable.status.completado', 'OK'),
    pendiente: getText('opsTable.status.pendiente', 'Pendiente'),
    fallido: getText('opsTable.status.fallido', 'Fallido'),
  };
  document.getElementById('ops-tbody').innerHTML = data.length
    ? data
        .map(
          (o) => `<tr>
        <td class="mono" style="font-size:11px">${o.fecha}</td>
        <td style="font-size:13px">${o.op}</td>
        <td>${o.svc}</td>
        <td class="mono">${o.nis}</td>
        <td class="mono">$${o.monto.toFixed(2)}</td>
        <td><span class="chip ${status[o.estado]}">${slabel[o.estado]}</span></td>
      </tr>`
        )
        .join('')
    : `<tr><td colspan="6"><div class="empty"><span class="mi">search_off</span><div class="empty-t">${getText(
        'opsTable.empty',
        'Sin resultados',
      )}</div></div></td></tr>`;
}

let _filterQ = '';
let _filterSvc = '';
function filterOps(q, svc) {
  if (q !== undefined) {
    _filterQ = q;
  }
  if (svc !== undefined) {
    _filterSvc = svc;
  }
  const f = OPS_DB.filter(
    (o) =>
      (!_filterQ || (o.op + o.nis + o.ref).toLowerCase().includes(_filterQ.toLowerCase())) &&
      (!_filterSvc || o.svc === _filterSvc)
  );
  renderOpsTable(f);
}

/* Users Table */
function buildUsersTable(list) {
  document.getElementById('users-tbody').innerHTML = list
    .map(
      (u) => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="user-av">${u.nombre[0]}${u.apellido[0]}</div>
          <div>
            <div style="font-weight:700;font-size:13px">${u.nombre} ${u.apellido}</div>
            <div style="font-size:11px;color:var(--on-mid)">${u.cedula}</div>
          </div>
        </div>
      </td>
      <td class="mono" style="font-size:11px">${u.cedula}</td>
      <td><span class="chip ${u.rol === 'admin' ? 'chip-p' : 'chip-b'}">${
        u.rol === 'admin' ? getText('users.roleAdmin', 'Admin') : getText('users.roleOperator', 'Operador/a')
      }</span></td>
      <td><span class="chip ${u.estado === 'activo' ? 'chip-g' : 'chip-n'}">${
        u.estado === 'activo' ? getText('users.stateActive', 'Activo') : getText('users.stateInactive', 'Inactivo')
      }</span></td>
      <td class="mono">${u.ops}</td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-sm btn-s" onclick="editUser(${u.id})"><span class="mi" style="font-size:15px">edit</span></button>
          <button class="btn btn-sm btn-e" onclick="toggleUser(${u.id})">
            <span class="mi" style="font-size:15px">${u.estado === 'activo' ? 'block' : 'check_circle'}</span>
          </button>
        </div>
      </td>
    </tr>`
    )
    .join('');
}

function filterUsers(q) {
  buildUsersTable(
    USERS_DB.filter(
      (u) => (u.nombre + ' ' + u.apellido).toLowerCase().includes(q.toLowerCase()) || u.cedula.includes(q)
    )
  );
}

function openUserModal() {
  document.getElementById('usr-modal-title').textContent = getText('users.modalAddTitle', 'Agregar Usuario');
  ['u-nombre', 'u-apellido', 'u-cedula'].forEach((id) => {
    document.getElementById(id).value = '';
  });
  document.getElementById('u-pass').value = getText('users.defaultTempPassword', 'Cambiar123');
  document.getElementById('user-overlay').classList.add('open');
}

function editUser(id) {
  const u = USERS_DB.find((item) => item.id === id);
  if (!u) {
    return;
  }
  document.getElementById('usr-modal-title').textContent = getText('users.modalEditTitle', 'Editar Usuario');
  document.getElementById('u-nombre').value = u.nombre;
  document.getElementById('u-apellido').value = u.apellido;
  document.getElementById('u-cedula').value = u.cedula;
  document.getElementById('u-tipo').value = u.tipo;
  document.getElementById('u-rol').value = u.rol;
  document.getElementById('u-pass').value = '********';
  document.getElementById('user-overlay').classList.add('open');
}

function toggleUser(id) {
  const u = USERS_DB.find((item) => item.id === id);
  if (!u) {
    return;
  }
  u.estado = u.estado === 'activo' ? 'inactivo' : 'activo';
  buildUsersTable(USERS_DB);
  snack(
    `Usuario ${
      u.estado === 'activo'
        ? getText('users.toggleEnabled', 'habilitado')
        : getText('users.toggleDisabled', 'deshabilitado')
    }: ${u.nombre} ${u.apellido}`,
  );
}

function saveUser() {
  const n = document.getElementById('u-nombre').value.trim();
  const a = document.getElementById('u-apellido').value.trim();
  const c = document.getElementById('u-cedula').value.trim();
  if (!n || !a || !c) {
    snack(getText('users.saveMissing', 'Completa nombre, apellido y cedula'), 'err');
    return;
  }
  USERS_DB.push({
    id: USERS_DB.length + 1,
    nombre: n,
    apellido: a,
    cedula: c,
    tipo: document.getElementById('u-tipo').value,
    rol: document.getElementById('u-rol').value,
    estado: 'activo',
    acceso: 'Nunca',
    ops: 0,
  });
  buildUsersTable(USERS_DB);
  document.getElementById('user-overlay').classList.remove('open');
  snack(`${n} ${a}${getText('users.saveSuccessSuffix', ' agregado/a correctamente')}`);
}

function closeUserModal(e) {
  if (e.target === document.getElementById('user-overlay')) {
    document.getElementById('user-overlay').classList.remove('open');
  }
}

/* Brand Config */
function previewBrand() {
  const name = document.getElementById('cfg-name').value || getText('brand.defaultName', 'PayPoint');
  const logo = document.getElementById('cfg-logo').value;
  document.getElementById('bp-name').textContent = name;
  const pl = document.getElementById('bp-logo');
  pl.innerHTML = logo
    ? `<img src="${logo}" onerror="this.parentNode.innerHTML='<span class=mi>payments</span>'" style="width:100%;height:100%;object-fit:cover;border-radius:12px">`
    : '<span class="mi">payments</span>';
}

function applyColor(hex, el) {
  document.documentElement.style.setProperty('--p', hex);
  document.getElementById('cfg-color-pick').value = hex;
  document.getElementById('cfg-color-hex').value = hex;
  document.querySelectorAll('.c-sw').forEach((s) => s.classList.remove('sel'));
  if (el) {
    el.classList.add('sel');
  }
  ['tb-logo', 'bp-logo'].forEach((id) => {
    const element = document.getElementById(id);
    if (element && !element.querySelector('img')) {
      element.style.background = hex;
    }
  });
  document.getElementById('user-av').style.background = hex;
}

function applyColorHex(hex) {
  if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    applyColor(hex, null);
  }
}

function saveBrand() {
  const name = document.getElementById('cfg-name').value || getText('brand.defaultName', 'PayPoint');
  document.getElementById('tb-name').textContent = name;
  const loginHero = document.getElementById('login-hero-name');
  if (loginHero) {
    loginHero.textContent = name;
  }
  snack(getText('brand.saveSuccess', 'Configuracion guardada correctamente'));
}

/* Snackbar */
let _snackT;
function snack(msg, type = 'ok') {
  const el = document.getElementById('snack');
  const ico = document.getElementById('snack-ico');
  document.getElementById('snack-txt').textContent = msg;
  const icons = { ok: 'check_circle', err: 'error', warn: 'warning' };
  const colors = { ok: '#4ADE80', err: '#F87171', warn: '#FCD34D' };
  ico.textContent = icons[type] || icons.ok;
  ico.style.color = colors[type] || colors.ok;
  el.classList.add('show');
  clearTimeout(_snackT);
  _snackT = setTimeout(() => el.classList.remove('show'), 3500);
}

bootstrap();
