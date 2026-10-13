const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  arrows: '<path d="M7 7h13l-3-3M17 17H4l3 3"/><path d="M20 7l-3 3M4 17l3-3"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r=".8"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  down: '<path d="M12 5v14m-7-7 7 7 7-7"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  edit: '<path d="m15 5 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-9h.01"/>',
  logout: '<path d="M10 17l5-5-5-5m5 5H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
};

const icon = (name, extra = '') => `<svg ${extra} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ''}</svg>`;
const brl = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const datePt = value => new Intl.DateTimeFormat('pt-BR').format(new Date(`${value}T12:00:00`));
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

const state = {
  page: 'dashboard',
  role: 'pastor',
  user: { name: 'Samuel Oliveira', email: 'samuel@vinde.org.br' },
  selectedId: null,
  transactions: [
    { id: 1, description: 'Dízimos e ofertas', value: 8420, date: '2026-10-12', type: 'entrada', category: 'Contribuições', sector: 'Geral', details: 'Culto de domingo', active: true },
    { id: 2, description: 'Manutenção elétrica', value: 1280, date: '2026-10-10', type: 'saida', category: 'Manutenção', sector: 'Templo', details: 'Troca de luminárias do salão principal', active: true },
    { id: 3, description: 'Cantina — outubro', value: 960, date: '2026-10-08', type: 'entrada', category: 'Eventos', sector: 'Ação Social', details: '', active: true },
    { id: 4, description: 'Material para crianças', value: 486.5, date: '2026-10-06', type: 'saida', category: 'Materiais', sector: 'Infantil', details: 'Atividades do mês', active: true },
    { id: 5, description: 'Doação para missões', value: 1500, date: '2026-10-04', type: 'saida', category: 'Missões', sector: 'Missões', details: '', active: true },
    { id: 6, description: 'Oferta de missões', value: 2180, date: '2026-10-03', type: 'entrada', category: 'Contribuições', sector: 'Missões', details: '', active: true },
    { id: 7, description: 'Conta de energia', value: 738.2, date: '2026-09-29', type: 'saida', category: 'Contas', sector: 'Templo', details: 'Referente a setembro', active: true },
    { id: 8, description: 'Retiro de jovens', value: 3200, date: '2026-09-27', type: 'entrada', category: 'Eventos', sector: 'Jovens', details: 'Inscrições', active: false },
    { id: 9, description: 'Compra de alimentos', value: 1120, date: '2026-09-21', type: 'saida', category: 'Ação Social', sector: 'Ação Social', details: '', active: true },
    { id: 10, description: 'Dízimos e ofertas', value: 7890, date: '2026-09-14', type: 'entrada', category: 'Contribuições', sector: 'Geral', details: '', active: true },
    { id: 11, description: 'Material de limpeza', value: 320, date: '2026-08-19', type: 'saida', category: 'Materiais', sector: 'Templo', details: '', active: true },
    { id: 12, description: 'Oferta missionária', value: 1780, date: '2026-08-09', type: 'entrada', category: 'Contribuições', sector: 'Missões', details: '', active: true },
  ],
  categories: ['Ação Social', 'Contribuições', 'Contas', 'Eventos', 'Manutenção', 'Materiais', 'Missões'],
  sectors: ['Ação Social', 'Geral', 'Infantil', 'Jovens', 'Missões', 'Templo'],
  users: [
    { id: 1, name: 'Samuel Oliveira', email: 'samuel@vinde.org.br', role: 'Pastor presidente', active: true },
    { id: 2, name: 'Mariana Costa', email: 'mariana@vinde.org.br', role: 'Tesouraria', active: true },
    { id: 3, name: 'Rafael Souza', email: 'rafael@vinde.org.br', role: 'Liderança', active: true },
    { id: 4, name: 'Ana Beatriz Lima', email: 'ana@vinde.org.br', role: 'Tesouraria', active: false },
  ],
  roles: ['Liderança', 'Pastor presidente', 'Tesouraria'],
  audit: [
    { user: 'Samuel Oliveira', action: 'Movimentação criada', record: 'Dízimos e ofertas', date: '2026-10-12T10:24', after: 'Entrada de R$ 8.420,00', reason: '' },
    { user: 'Mariana Costa', action: 'Movimentação editada', record: 'Manutenção elétrica', date: '2026-10-10T15:42', before: 'R$ 1.180,00', after: 'R$ 1.280,00', reason: 'Valor atualizado conforme nota fiscal.' },
    { user: 'Samuel Oliveira', action: 'Movimentação desativada', record: 'Retiro de jovens', date: '2026-10-09T09:12', before: 'Ativa', after: 'Inativa', reason: 'Inscrição duplicada no registro.' },
    { user: 'Samuel Oliveira', action: 'Conta ativada', record: 'Mariana Costa', date: '2026-09-18T11:30', before: 'Inativa', after: 'Ativa', reason: 'Cadastro conferido com a tesouraria.' },
    { user: 'Mariana Costa', action: 'Movimentação criada', record: 'Conta de energia', date: '2026-09-15T16:06', after: 'Saída de R$ 738,20', reason: '' },
  ],
  filter: { search: '', type: '', category: '', sector: '', start: '', end: '' },
};

const navItems = [
  { label: 'Painel financeiro', page: 'dashboard', icon: 'grid', group: 'Visão geral' },
  { label: 'Movimentações', page: 'transactions', icon: 'arrows', group: 'Financeiro' },
  { label: 'Relatórios', page: 'reports', icon: 'chart', group: 'Financeiro' },
  { label: 'Auditoria', page: 'audit', icon: 'clock', group: 'Financeiro' },
  { label: 'Categorias e setores', page: 'taxonomy', icon: 'tag', group: 'Organização' },
  { label: 'Usuários e cargos', page: 'users', icon: 'users', group: 'Administração', pastorOnly: true },
];

const pageTitles = {
  dashboard: 'Painel financeiro', transactions: 'Movimentações', 'transaction-form': 'Movimentações',
  'transaction-detail': 'Movimentações', reports: 'Relatórios', audit: 'Auditoria', taxonomy: 'Categorias e setores', users: 'Usuários e cargos',
};

function activeTransactions() { return state.transactions.filter(item => item.active); }
function totalFor(items, type) { return items.filter(item => item.type === type).reduce((sum, item) => sum + item.value, 0); }
function monthItems(month) { return activeTransactions().filter(item => item.date.startsWith(month)); }
function monthLabel(month) { return new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(new Date(`${month}-01T12:00:00`)).replace('.', ''); }

function render() {
  const app = document.querySelector('#app');
  if (state.page === 'login' || state.page === 'signup' || state.page === 'recovery') {
    app.innerHTML = renderAuth();
    return;
  }
  if (state.page === 'disabled') {
    app.innerHTML = `<main class="access-blocked"><section class="blocked-box"><div class="blocked-symbol">${icon('lock')}</div><p class="eyebrow">ChurchWise Finance</p><h1>Acesso indisponível</h1><p>Esta conta está desativada no momento. Entre em contato com a liderança da Comunidade Cristã Vinde para obter mais informações.</p><button class="btn btn-secondary" data-action="go-login">Voltar ao acesso</button></section></main>`;
    return;
  }
  app.innerHTML = `<div class="app-shell">
    <aside class="sidebar" id="sidebar">${renderSidebar()}</aside>
    <section class="main-area">
      <header class="topbar"><div class="crumb"><button class="mobile-menu" data-action="toggle-menu" aria-label="Abrir menu">${icon('menu')}</button>${pageTitles[state.page] || 'ChurchWise Finance'}</div><div class="topbar-right">
      <label class="demo-role">Perfil de demonstração <select data-change="role"><option value="pastor" ${state.role === 'pastor' ? 'selected' : ''}>Pastor presidente</option><option value="member" ${state.role === 'member' ? 'selected' : ''}>Usuário ativo</option></select></label>
      <div class="profile"><div class="avatar">${initials(state.user.name)}</div><div><div class="profile-name">${esc(state.user.name)}</div><div class="profile-role">${state.role === 'pastor' ? 'Pastor presidente' : 'Usuário ativo'}</div></div><button class="icon-button" data-action="logout" aria-label="Sair" title="Sair">${icon('logout')}</button></div>
      </div></header>
      <main class="content">${renderPage()}</main>
    </section>
  </div>`;
}

function renderSidebar() {
  let currentGroup = '';
  const items = navItems.filter(item => !item.pastorOnly || state.role === 'pastor').map(item => {
    const heading = item.group !== currentGroup ? `<div class="nav-label">${item.group}</div>` : '';
    currentGroup = item.group;
    return `${heading}<button class="nav-link ${state.page === item.page || (state.page.startsWith('transaction-') && item.page === 'transactions') ? 'active' : ''}" data-page="${item.page}">${icon(item.icon)}<span>${item.label}</span></button>`;
  }).join('');
  return `<div class="brand"><div class="brand-mark">V</div><div><div class="brand-name">ChurchWise</div><div class="brand-caption">FINANCE · COMUNIDADE VINDE</div></div></div><nav class="nav-list">${items}</nav><div class="sidebar-bottom"><strong>Comunidade Cristã Vinde</strong>Gestão financeira<br />Protótipo demonstrativo</div>`;
}

function renderPage() {
  switch (state.page) {
    case 'dashboard': return renderDashboard();
    case 'transactions': return renderTransactions();
    case 'transaction-form': return renderTransactionForm();
    case 'transaction-detail': return renderTransactionDetail();
    case 'reports': return renderReports();
    case 'audit': return renderAudit();
    case 'taxonomy': return renderTaxonomy();
    case 'users': return state.role === 'pastor' ? renderUsers() : renderDashboard();
    default: return renderDashboard();
  }
}

function heading(eyebrow, title, subtitle, action = '') {
  return `<div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ''}</div>${action}</div>`;
}

function renderDashboard() {
  const thisMonth = monthItems('2026-10');
  const prevMonth = monthItems('2026-09');
  const metrics = [
    ['Caixa geral', totalFor(activeTransactions(), 'entrada') - totalFor(activeTransactions(), 'saida'), 'Acumulado de movimentações ativas', 'grid'],
    ['Saldo do mês', totalFor(thisMonth, 'entrada') - totalFor(thisMonth, 'saida'), 'Outubro de 2026', 'chart'],
    ['Entradas do mês', totalFor(thisMonth, 'entrada'), `${thisMonth.filter(x => x.type === 'entrada').length} registros ativos`, 'up'],
    ['Saídas do mês', totalFor(thisMonth, 'saida'), `${thisMonth.filter(x => x.type === 'saida').length} registros ativos`, 'down'],
  ];
  const latest = [...state.transactions].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  const chartMonths = ['2026-08', '2026-09', '2026-10'];
  const maxValue = Math.max(...chartMonths.flatMap(month => { const rows = monthItems(month); return [totalFor(rows, 'entrada'), totalFor(rows, 'saida')]; }), 1);
  const chart = chartMonths.map(month => {
    const rows = monthItems(month);
    const incoming = totalFor(rows, 'entrada');
    const outgoing = totalFor(rows, 'saida');
    return `<div class="chart-month"><div class="bar-pair"><span class="bar" style="height:${Math.max(4, incoming / maxValue * 100)}%" title="Entradas ${brl(incoming)}"></span><span class="bar out" style="height:${Math.max(4, outgoing / maxValue * 100)}%" title="Saídas ${brl(outgoing)}"></span></div>${monthLabel(month)}</div>`;
  }).join('');
  return `${heading('Visão geral', 'Painel financeiro', 'Acompanhe as movimentações e os resultados da comunidade.', `<button class="btn btn-primary" data-action="new-transaction">${icon('plus')} Nova movimentação</button>`)}
    <section class="metrics">${metrics.map(([label, value, note, symbol]) => `<article class="metric"><div class="metric-label">${label}<span class="metric-icon">${icon(symbol)}</span></div><div class="metric-value">${brl(value)}</div><div class="metric-note">${note}</div></article>`).join('')}</section>
    <div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Fluxo financeiro</h2><div class="panel-kicker">Entradas e saídas · últimos três meses</div></div><div class="chart-legend"><span><i class="legend-dot"></i>Entradas</span><span><i class="legend-dot out"></i>Saídas</span></div></div><div class="panel-body"><div class="chart-wrap"><div class="chart-y"><span>${brl(maxValue).replace(',00', '')}</span><span>${brl(maxValue / 2).replace(',00', '')}</span><span>R$ 0</span></div><div class="chart-grid"><span></span><span></span><span></span></div><div class="chart-bars">${chart}</div></div></div></section>
    <section class="panel"><div class="panel-head"><div><h2 class="panel-title">Movimentações recentes</h2><div class="panel-kicker">Últimos registros do sistema</div></div><button class="btn btn-quiet" data-page="transactions">Ver todas</button></div><div class="panel-body"><div class="quick-list">${latest.map(item => `<div class="quick-row"><div><div class="quick-title">${esc(item.description)}${!item.active ? ' · Inativa' : ''}</div><div class="quick-meta">${datePt(item.date)} · ${esc(item.category)}</div></div><div class="amount ${item.type === 'entrada' ? 'in' : 'out'}">${item.type === 'entrada' ? '+' : '−'} ${brl(item.value)}</div></div>`).join('')}</div></div></section></div>`;
}

function filteredTransactions() {
  const filters = state.filter;
  return [...state.transactions].filter(item => {
    const matchesSearch = !filters.search || item.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesSearch && (!filters.type || item.type === filters.type) && (!filters.category || item.category === filters.category) && (!filters.sector || item.sector === filters.sector) && (!filters.start || item.date >= filters.start) && (!filters.end || item.date <= filters.end);
  }).sort((a, b) => b.date.localeCompare(a.date));
}

function filterControls() {
  const f = state.filter;
  return `<form class="filters" data-form="filters"><div class="filter-search"><label class="field"><span>Buscar descrição</span><span class="search-wrap">${icon('search')}<input class="control" name="search" placeholder="Ex.: conta de energia" value="${esc(f.search)}" /></span></label></div><label class="field"><span>Tipo</span><select class="control" name="type"><option value="">Todos</option><option value="entrada" ${f.type === 'entrada' ? 'selected' : ''}>Entrada</option><option value="saida" ${f.type === 'saida' ? 'selected' : ''}>Saída</option></select></label><label class="field"><span>Categoria</span><select class="control" name="category"><option value="">Todas</option>${state.categories.map(c => `<option ${f.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></label><label class="field"><span>Setor</span><select class="control" name="sector"><option value="">Todos</option>${state.sectors.map(c => `<option ${f.sector === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></label><label class="field"><span>De</span><input class="control" type="date" name="start" value="${f.start}" /></label><label class="field"><span>Até</span><input class="control" type="date" name="end" value="${f.end}" /></label><button class="btn btn-secondary filter-submit" type="submit">Filtrar</button></form>`;
}

function transactionRows(items, includeActions = true) {
  if (!items.length) return `<tr><td colspan="7"><div class="empty">Nenhuma movimentação encontrada para estes filtros.</div></td></tr>`;
  return items.map(item => `<tr><td><div class="primary-cell"><span class="row-mark ${item.type === 'saida' ? 'out' : ''}">${icon(item.type === 'entrada' ? 'down' : 'up')}</span><div><div class="cell-title">${esc(item.description)}</div><div class="cell-sub">${esc(item.details || item.category)}</div></div></div></td><td>${datePt(item.date)}</td><td><span class="pill ${item.type === 'saida' ? 'out' : ''}">${item.type === 'entrada' ? 'Entrada' : 'Saída'}</span></td><td>${esc(item.category)}</td><td>${esc(item.sector)}</td><td><span class="amount ${item.type === 'entrada' ? 'in' : 'out'}">${item.type === 'entrada' ? '+' : '−'} ${brl(item.value)}</span></td><td>${includeActions ? `<div class="table-actions"><button class="icon-button" data-action="detail" data-id="${item.id}" aria-label="Ver detalhes" title="Ver detalhes">${icon('eye')}</button></div>` : `<span class="pill ${item.active ? '' : 'inactive'}">${item.active ? 'Ativa' : 'Inativa'}</span>`}</td></tr>`).join('');
}

function renderTransactions() {
  const rows = filteredTransactions();
  return `${heading('Financeiro', 'Movimentações', 'Consulte os registros financeiros da comunidade.', `<button class="btn btn-primary" data-action="new-transaction">${icon('plus')} Nova movimentação</button>`)}<section class="panel">${filterControls()}<div class="table-wrap"><table><thead><tr><th>Descrição</th><th>Data</th><th>Natureza</th><th>Categoria</th><th>Setor</th><th>Valor</th><th></th></tr></thead><tbody>${transactionRows(rows)}</tbody></table></div><div class="panel-head"><span class="panel-kicker">${rows.length} registros · movimentações inativas permanecem no histórico</span></div></section>`;
}

function renderTransactionForm() {
  const item = state.transactions.find(row => row.id === state.selectedId);
  const editing = Boolean(item);
  return `${heading('Financeiro', 'Movimentações', `${editing ? 'Edite os dados do registro.' : 'Registre uma entrada ou saída financeira.'}`)}<section class="panel form-panel">${editing ? `<div class="notice">${icon('info')}Ao salvar alterações, informe a justificativa para manter o histórico rastreável.</div>` : ''}<form data-form="transaction"><div class="form-grid"><label class="field"><span>Valor *</span><input class="control" name="value" type="number" min="0.01" step="0.01" placeholder="0,00" value="${item ? item.value : ''}" required /></label><label class="field"><span>Data *</span><input class="control" name="date" type="date" value="${item?.date || '2026-10-13'}" required /></label><label class="field span-two"><span>Descrição *</span><input class="control" name="description" maxlength="100" placeholder="Ex.: Conta de água" value="${esc(item?.description || '')}" required /></label><label class="field"><span>Natureza *</span><select class="control" name="type" required><option value="entrada" ${item?.type !== 'saida' ? 'selected' : ''}>Entrada</option><option value="saida" ${item?.type === 'saida' ? 'selected' : ''}>Saída</option></select></label><label class="field"><span>Categoria *</span><select class="control" name="category" required><option value="">Selecione</option>${state.categories.map(c => `<option ${item?.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></label><label class="field"><span>Setor *</span><select class="control" name="sector" required><option value="">Selecione</option>${state.sectors.map(c => `<option ${item?.sector === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select></label><label class="field span-two"><span>Detalhes complementares</span><textarea class="control" name="details" placeholder="Informações adicionais sobre esta movimentação">${esc(item?.details || '')}</textarea></label>${editing ? `<label class="field span-two"><span>Justificativa da alteração *</span><textarea class="control" name="reason" placeholder="Descreva o motivo da alteração" required></textarea></label>` : ''}</div><div class="form-actions"><button class="btn btn-secondary" type="button" data-page="transactions">Cancelar</button><button class="btn btn-primary" type="submit">${editing ? 'Salvar alterações' : 'Salvar movimentação'}</button></div></form></section>`;
}

function renderTransactionDetail() {
  const item = state.transactions.find(row => row.id === state.selectedId);
  if (!item) return renderTransactions();
  const action = item.active ? `<button class="btn btn-danger" data-action="deactivate-transaction" data-id="${item.id}">Desativar movimentação</button>` : `<button class="btn btn-secondary" data-action="activate-transaction" data-id="${item.id}">Reativar movimentação</button>`;
  return `${heading('Financeiro', 'Detalhes da movimentação', `Registro CW-${String(item.id).padStart(5, '0')}`, `<button class="btn btn-secondary" data-action="edit-transaction" data-id="${item.id}">${icon('edit')} Editar</button>`)}<div class="detail-grid"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">${esc(item.description)}</h2><div class="panel-kicker">Criado em ${datePt(item.date)}</div></div><span class="pill ${item.active ? '' : 'inactive'}">${item.active ? 'Ativa' : 'Inativa'}</span></div><div class="panel-body"><div class="detail-list"><div class="detail-item"><label>Valor</label><div class="amount ${item.type === 'entrada' ? 'in' : 'out'}">${brl(item.value)}</div></div><div class="detail-item"><label>Natureza</label><div>${item.type === 'entrada' ? 'Entrada' : 'Saída'}</div></div><div class="detail-item"><label>Data</label><div>${datePt(item.date)}</div></div><div class="detail-item"><label>Categoria</label><div>${esc(item.category)}</div></div><div class="detail-item"><label>Setor</label><div>${esc(item.sector)}</div></div><div class="detail-item span-two"><label>Detalhes complementares</label><div>${esc(item.details || 'Nenhum detalhe informado.')}</div></div></div></div></section><aside class="panel"><div class="panel-head"><h2 class="panel-title">Ações do registro</h2></div><div class="panel-body"><p class="panel-kicker" style="line-height:1.7">${item.active ? 'A movimentação está incluída nos cálculos financeiros ativos.' : 'A movimentação inativa permanece registrada e não compõe os cálculos financeiros.'}</p><div style="display:grid;gap:8px;margin-top:18px">${action}<button class="btn btn-secondary" data-page="transactions">Voltar à lista</button></div></div></aside></div>`;
}

function reportItems() {
  return filteredTransactions().filter(item => item.active);
}

function renderReports() {
  const rows = reportItems();
  const incoming = totalFor(rows, 'entrada');
  const outgoing = totalFor(rows, 'saida');
  return `${heading('Financeiro', 'Relatórios', 'Resumo das movimentações ativas para o período selecionado.', `<button class="btn btn-secondary" data-action="print">${icon('chart')} Imprimir relatório</button>`)}<section class="metrics"><article class="metric"><div class="metric-label">Total de entradas<span class="metric-icon">${icon('down')}</span></div><div class="metric-value">${brl(incoming)}</div><div class="metric-note">Registros ativos no filtro</div></article><article class="metric"><div class="metric-label">Total de saídas<span class="metric-icon">${icon('up')}</span></div><div class="metric-value">${brl(outgoing)}</div><div class="metric-note">Registros ativos no filtro</div></article><article class="metric"><div class="metric-label">Saldo do período<span class="metric-icon">${icon('chart')}</span></div><div class="metric-value">${brl(incoming - outgoing)}</div><div class="metric-note">Entradas menos saídas</div></article><article class="metric"><div class="metric-label">Movimentações<span class="metric-icon">${icon('arrows')}</span></div><div class="metric-value">${rows.length}</div><div class="metric-note">Somente registros ativos</div></article></section><section class="panel">${filterControls()}<div class="table-wrap"><table><thead><tr><th>Descrição</th><th>Data</th><th>Natureza</th><th>Categoria</th><th>Setor</th><th>Valor</th><th>Situação</th></tr></thead><tbody>${transactionRows(rows, false)}</tbody></table></div></section>`;
}

function renderAudit() {
  const actions = [...new Set(state.audit.map(item => item.action))];
  const users = [...new Set(state.audit.map(item => item.user))];
  const rows = [...state.audit].sort((a, b) => b.date.localeCompare(a.date));
  return `${heading('Transparência', 'Auditoria', 'Histórico cronológico das ações realizadas no sistema.') }<section class="panel"><form class="filters" data-form="audit-filter"><label class="field"><span>Período inicial</span><input class="control" type="date" name="start" /></label><label class="field"><span>Período final</span><input class="control" type="date" name="end" /></label><label class="field"><span>Responsável</span><select class="control" name="user"><option value="">Todos</option>${users.map(u => `<option>${esc(u)}</option>`).join('')}</select></label><label class="field"><span>Tipo de ação</span><select class="control" name="action"><option value="">Todas</option>${actions.map(a => `<option>${esc(a)}</option>`).join('')}</select></label><button class="btn btn-secondary filter-submit" type="submit">Filtrar</button></form><div class="table-wrap"><table><thead><tr><th>Data e hora</th><th>Responsável</th><th>Ação</th><th>Registro afetado</th><th>Alteração</th><th>Justificativa</th></tr></thead><tbody id="audit-rows">${auditRows(rows)}</tbody></table></div><div class="panel-head"><span class="panel-kicker">${rows.length} registros · histórico somente para consulta</span></div></section>`;
}

function auditRows(items) {
  if (!items.length) return '<tr><td colspan="6"><div class="empty">Nenhuma ação encontrada para estes filtros.</div></td></tr>';
  return items.map(item => `<tr><td>${new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(item.date))}</td><td>${esc(item.user)}</td><td>${esc(item.action)}</td><td>${esc(item.record)}</td><td><div class="audit-change">${item.before ? `<span class="audit-before">Antes: ${esc(item.before)}</span>` : ''}${item.after ? `<span class="audit-after">Depois: ${esc(item.after)}</span>` : ''}</div></td><td style="white-space:normal;min-width:170px">${esc(item.reason || '—')}</td></tr>`).join('');
}

function renderTaxonomy() {
  const categoryRows = state.categories.map(name => taxonomyRow(name, 'category')).join('');
  const sectorRows = state.sectors.map(name => taxonomyRow(name, 'sector')).join('');
  return `${heading('Organização', 'Categorias e setores', 'Organize os registros por natureza e área da comunidade.', `<button class="btn btn-primary" data-action="add-taxonomy" data-kind="category">${icon('plus')} Nova categoria</button>`)}<div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Categorias</h2><div class="panel-kicker">${state.categories.length} opções</div></div><button class="icon-button" data-action="add-taxonomy" data-kind="category" aria-label="Adicionar categoria" title="Adicionar categoria">${icon('plus')}</button></div><div class="table-wrap"><table><thead><tr><th>Nome</th><th>Movimentações vinculadas</th><th></th></tr></thead><tbody>${categoryRows}</tbody></table></div></section><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Setores</h2><div class="panel-kicker">${state.sectors.length} opções</div></div><button class="icon-button" data-action="add-taxonomy" data-kind="sector" aria-label="Adicionar setor" title="Adicionar setor">${icon('plus')}</button></div><div class="table-wrap"><table><thead><tr><th>Nome</th><th>Movimentações vinculadas</th><th></th></tr></thead><tbody>${sectorRows}</tbody></table></div></section></div>`;
}

function taxonomyRow(name, kind) {
  const linked = state.transactions.filter(item => (kind === 'category' ? item.category : item.sector) === name).length;
  return `<tr><td><span class="cell-title">${esc(name)}</span></td><td>${linked ? `${linked} registros` : 'Nenhum registro'}</td><td><div class="table-actions"><button class="icon-button" data-action="remove-taxonomy" data-kind="${kind}" data-value="${esc(name)}" ${linked ? 'disabled' : ''} aria-label="Excluir ${esc(name)}" title="${linked ? 'Há movimentações vinculadas' : 'Excluir'}">${icon('trash')}</button></div></td></tr>`;
}

function renderUsers() {
  const userRows = state.users.map(user => `<tr><td><div class="primary-cell"><div class="avatar">${initials(user.name)}</div><div><div class="cell-title">${esc(user.name)}</div><div class="cell-sub">${esc(user.email)}</div></div></div></td><td>${esc(user.role)}</td><td><span class="pill ${user.active ? '' : 'inactive'}">${user.active ? 'Ativa' : 'Inativa'}</span></td><td><div class="table-actions"><button class="btn ${user.active ? 'btn-danger' : 'btn-secondary'}" data-action="toggle-user" data-id="${user.id}">${user.active ? 'Desativar' : 'Ativar'}</button></div></td></tr>`).join('');
  const roleRows = state.roles.map(role => {
    const linked = state.users.filter(user => user.role === role).length;
    return `<tr><td><span class="cell-title">${esc(role)}</span></td><td>${linked} usuários</td><td><div class="table-actions"><button class="icon-button" data-action="remove-role" data-value="${esc(role)}" ${linked ? 'disabled' : ''} aria-label="Excluir cargo ${esc(role)}" title="${linked ? 'Há usuários vinculados' : 'Excluir cargo'}">${icon('trash')}</button></div></td></tr>`;
  }).join('');
  return `${heading('Administração', 'Usuários e cargos', 'Gerencie o acesso das contas e os cargos disponíveis.', `<button class="btn btn-primary" data-action="add-role">${icon('plus')} Novo cargo</button>`)}<div class="notice">${icon('shield')}Gerenciamento exclusivo do pastor presidente. As alterações de acesso exigem justificativa.</div><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Contas de usuário</h2><div class="panel-kicker">${state.users.filter(u => u.active).length} ativas · novas contas aguardam ativação</div></div></div><div class="table-wrap"><table><thead><tr><th>Usuário</th><th>Cargo</th><th>Situação</th><th></th></tr></thead><tbody>${userRows}</tbody></table></div></section><section class="panel section-gap"><div class="panel-head"><div><h2 class="panel-title">Cargos</h2><div class="panel-kicker">${state.roles.length} cargos cadastrados</div></div></div><div class="table-wrap"><table><thead><tr><th>Cargo</th><th>Vínculos</th><th></th></tr></thead><tbody>${roleRows}</tbody></table></div></section>`;
}

function renderAuth() {
  const isSignup = state.page === 'signup';
  const isRecovery = state.page === 'recovery';
  const title = isSignup ? 'Criar conta' : isRecovery ? 'Recuperar acesso' : 'Acesse sua conta';
  const description = isSignup ? 'Preencha seus dados para solicitar acesso ao ChurchWise Finance.' : isRecovery ? 'Informe seu e-mail para continuar com a recuperação da senha.' : 'Entre para consultar e gerenciar as informações financeiras da comunidade.';
  return `<main class="auth-screen"><section class="auth-aside"><div class="brand"><div class="brand-mark">V</div><div><div class="brand-name">ChurchWise</div><div class="brand-caption">FINANCE · COMUNIDADE VINDE</div></div></div><div class="auth-message"><p class="eyebrow" style="color:#a8d2bd">Comunidade Cristã Vinde</p><h1>Transparência que fortalece a comunidade.</h1><p>Um espaço organizado para acompanhar cada recurso com cuidado e responsabilidade.</p></div><div class="auth-foot">ChurchWise Finance · Protótipo demonstrativo</div></section><section class="auth-main"><div class="auth-card"><p class="eyebrow">ChurchWise Finance</p><h2>${title}</h2><p>${description}</p><form class="auth-fields" data-form="${isSignup ? 'signup' : isRecovery ? 'recovery' : 'login'}">${isSignup ? `<label class="field"><span>Nome completo</span><input class="control" name="name" autocomplete="name" required /></label>` : ''}<label class="field"><span>E-mail</span><input class="control" name="email" type="email" autocomplete="email" value="${isSignup ? '' : 'samuel@vinde.org.br'}" required /></label>${!isRecovery ? `<label class="field"><span>Senha</span><input class="control" name="password" type="password" autocomplete="${isSignup ? 'new-password' : 'current-password'}" ${isSignup ? 'minlength="6"' : ''} value="${isSignup ? '' : 'vinde2026'}" required /></label>` : ''}${isSignup ? `<label class="field"><span>Cargo</span><select class="control" name="role">${state.roles.map(role => `<option>${esc(role)}</option>`).join('')}</select></label><div class="notice" style="margin:0">${icon('info')}A nova conta começa inativa. O acesso será liberado pelo pastor presidente.</div>` : ''}<button class="btn btn-primary auth-submit" type="submit">${isSignup ? 'Criar conta' : isRecovery ? 'Enviar instruções' : 'Entrar'}</button></form><div class="auth-links">${isSignup ? `<button class="text-button" data-page="login">Voltar para entrar</button>` : isRecovery ? `<button class="text-button" data-page="login">Voltar para entrar</button>` : `<button class="text-button" data-page="recovery">Esqueci minha senha</button><button class="text-button" data-page="signup">Criar uma conta</button>`}</div><div id="auth-confirm"></div></div></section></main>`;
}

function initials(name) { return name.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase(); }
function showToast(message) {
  document.querySelector('.toast')?.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2800);
}

function askReason({ title, description, confirm, onConfirm }) {
  const root = document.querySelector('#modal-root');
  root.innerHTML = `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">${title}</h2><button class="icon-button" data-action="close-modal" aria-label="Fechar">${icon('close')}</button></div><form data-form="reason"><div class="modal-body"><p>${description}</p><label class="field"><span>Justificativa *</span><textarea class="control" name="reason" placeholder="Descreva o motivo desta ação" required></textarea></label><div class="modal-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancelar</button><button class="btn btn-primary" type="submit">${confirm}</button></div></div></form></section></div>`;
  root.querySelector('textarea')?.focus();
  root.dataset.callback = '';
  root._onConfirm = onConfirm;
}

function closeModal() {
  const root = document.querySelector('#modal-root');
  root.innerHTML = '';
  root._onConfirm = null;
}

function showTextModal(title, label, placeholder, onConfirm) {
  const root = document.querySelector('#modal-root');
  root.innerHTML = `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true"><div class="modal-head"><h2>${title}</h2><button class="icon-button" data-action="close-modal" aria-label="Fechar">${icon('close')}</button></div><form data-form="text-modal"><div class="modal-body"><label class="field"><span>${label} *</span><input class="control" name="value" maxlength="50" placeholder="${placeholder}" required /></label><div class="modal-actions"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancelar</button><button class="btn btn-primary" type="submit">Adicionar</button></div></div></form></section></div>`;
  root._onConfirm = onConfirm;
  root.querySelector('input')?.focus();
}

function addAudit(action, record, before, after, reason) {
  state.audit.unshift({ user: state.user.name, action, record, date: new Date().toISOString().slice(0, 16), before, after, reason });
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-page], [data-action]');
  if (!target) return;
  if (target.dataset.page) {
    state.page = target.dataset.page;
    document.querySelector('#sidebar')?.classList.remove('open');
    render();
    return;
  }
  const { action, id, kind, value } = target.dataset;
  if (action === 'toggle-menu') document.querySelector('#sidebar')?.classList.toggle('open');
  if (action === 'new-transaction') { state.selectedId = null; state.page = 'transaction-form'; render(); }
  if (action === 'detail') { state.selectedId = Number(id); state.page = 'transaction-detail'; render(); }
  if (action === 'edit-transaction') { state.selectedId = Number(id); state.page = 'transaction-form'; render(); }
  if (action === 'logout') { state.page = 'login'; render(); }
  if (action === 'go-login') { state.page = 'login'; render(); }
  if (action === 'close-modal') closeModal();
  if (action === 'deactivate-transaction' || action === 'activate-transaction') {
    const item = state.transactions.find(row => row.id === Number(id));
    const active = action === 'activate-transaction';
    askReason({ title: active ? 'Reativar movimentação' : 'Desativar movimentação', description: active ? 'A movimentação voltará a compor os cálculos financeiros ativos.' : 'O registro permanecerá no histórico, mas deixará de compor os cálculos financeiros ativos.', confirm: active ? 'Reativar' : 'Desativar', onConfirm: reason => {
      item.active = active;
      addAudit(active ? 'Movimentação reativada' : 'Movimentação desativada', item.description, active ? 'Inativa' : 'Ativa', active ? 'Ativa' : 'Inativa', reason);
      closeModal(); render(); showToast(`Movimentação ${active ? 'reativada' : 'desativada'}.`);
    }});
  }
  if (action === 'toggle-user' && state.role === 'pastor') {
    const user = state.users.find(row => row.id === Number(id));
    const active = !user.active;
    askReason({ title: `${active ? 'Ativar' : 'Desativar'} conta`, description: `${active ? 'Liberar' : 'Suspender'} o acesso de ${user.name}.`, confirm: active ? 'Ativar conta' : 'Desativar conta', onConfirm: reason => {
      user.active = active;
      addAudit(active ? 'Conta ativada' : 'Conta desativada', user.name, active ? 'Inativa' : 'Ativa', active ? 'Ativa' : 'Inativa', reason);
      closeModal(); render(); showToast(`Conta ${active ? 'ativada' : 'desativada'}.`);
    }});
  }
  if (action === 'add-taxonomy') {
    const isCategory = kind === 'category';
    showTextModal(`Nova ${isCategory ? 'categoria' : 'setor'}`, `Nome ${isCategory ? 'da categoria' : 'do setor'}`, isCategory ? 'Ex.: Eventos' : 'Ex.: Jovens', name => {
      const list = isCategory ? state.categories : state.sectors;
      if (list.some(item => item.toLowerCase() === name.toLowerCase())) { showToast('Esta opção já existe.'); return; }
      list.push(name); list.sort((a, b) => a.localeCompare(b, 'pt-BR')); closeModal(); render(); showToast(`${isCategory ? 'Categoria' : 'Setor'} adicionada.`);
    });
  }
  if (action === 'remove-taxonomy') {
    const list = kind === 'category' ? state.categories : state.sectors;
    if (state.transactions.some(item => (kind === 'category' ? item.category : item.sector) === value)) return;
    list.splice(list.indexOf(value), 1); render(); showToast('Opção excluída.');
  }
  if (action === 'add-role' && state.role === 'pastor') {
    showTextModal('Novo cargo', 'Nome do cargo', 'Ex.: Coordenação', name => {
      if (state.roles.some(item => item.toLowerCase() === name.toLowerCase())) { showToast('Este cargo já existe.'); return; }
      state.roles.push(name); state.roles.sort((a, b) => a.localeCompare(b, 'pt-BR')); closeModal(); render(); showToast('Cargo adicionado.');
    });
  }
  if (action === 'remove-role' && state.role === 'pastor') {
    if (state.users.some(user => user.role === value)) return;
    state.roles.splice(state.roles.indexOf(value), 1); render(); showToast('Cargo excluído.');
  }
  if (action === 'print') window.print();
});

document.addEventListener('change', event => {
  if (event.target.matches('[data-change="role"]')) {
    state.role = event.target.value;
    state.page = state.role === 'pastor' ? 'users' : 'dashboard';
    render();
  }
});

document.addEventListener('submit', event => {
  const form = event.target.closest('form[data-form]');
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const kind = form.dataset.form;
  if (kind === 'transaction') {
    const editing = state.selectedId !== null;
    const item = state.transactions.find(row => row.id === state.selectedId);
    const before = item ? `${brl(item.value)} · ${item.description}` : '';
    const fields = { value: Number(data.get('value')), date: data.get('date'), description: data.get('description').trim(), type: data.get('type'), category: data.get('category'), sector: data.get('sector'), details: data.get('details').trim() };
    if (editing) Object.assign(item, fields);
    else { const nextId = Math.max(...state.transactions.map(row => row.id)) + 1; state.transactions.push({ ...fields, id: nextId, active: true }); state.selectedId = nextId; }
    addAudit(editing ? 'Movimentação editada' : 'Movimentação criada', fields.description, before, `${fields.type === 'entrada' ? 'Entrada' : 'Saída'} de ${brl(fields.value)}`, editing ? data.get('reason').trim() : '');
    state.page = editing ? 'transaction-detail' : 'transactions';
    render(); showToast(editing ? 'Alterações salvas com justificativa.' : 'Movimentação registrada.');
  }
  if (kind === 'reason') document.querySelector('#modal-root')._onConfirm?.(data.get('reason').trim());
  if (kind === 'text-modal') document.querySelector('#modal-root')._onConfirm?.(data.get('value').trim());
  if (kind === 'filters') {
    state.filter = { search: data.get('search').trim(), type: data.get('type'), category: data.get('category'), sector: data.get('sector'), start: data.get('start'), end: data.get('end') };
    render();
  }
  if (kind === 'audit-filter') {
    const { start, end, user, action } = Object.fromEntries(data.entries());
    const rows = [...state.audit].sort((a, b) => b.date.localeCompare(a.date)).filter(item => (!start || item.date.slice(0, 10) >= start) && (!end || item.date.slice(0, 10) <= end) && (!user || item.user === user) && (!action || item.action === action));
    document.querySelector('#audit-rows').innerHTML = auditRows(rows);
  }
  if (kind === 'login') {
    state.user = { name: data.get('email').split('@')[0].split(/[._-]/).map(part => part[0]?.toUpperCase() + part.slice(1)).join(' '), email: data.get('email') };
    if (state.user.email === 'inativo@vinde.org.br') { state.page = 'disabled'; render(); return; }
    state.role = 'pastor'; state.page = 'dashboard'; render(); showToast('Acesso demonstrativo iniciado.');
  }
  if (kind === 'signup') {
    document.querySelector('#auth-confirm').innerHTML = '<div class="auth-confirm">Cadastro demonstrativo recebido. A conta começa inativa e precisa ser ativada pelo pastor presidente antes do acesso.</div>';
  }
  if (kind === 'recovery') {
    document.querySelector('#auth-confirm').innerHTML = '<div class="auth-confirm">Se o endereço estiver cadastrado, as instruções de recuperação serão enviadas.</div>';
  }
});

render();