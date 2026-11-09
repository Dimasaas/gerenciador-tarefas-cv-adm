// Sistema Gerenciador de Tarefas Online — dados salvos no navegador (localStorage).
// ponytail: localStorage = dados ficam só neste navegador; trocar por API + banco se for usar de verdade.

const db = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};
const STATUS = [['todo', 'A fazer'], ['doing', 'Em andamento'], ['done', 'Concluído']];
const state = { view: 'projects', projectId: null, month: new Date(), authMode: 'login', error: '' };
const $app = document.getElementById('app');

const uid = () => crypto.randomUUID();
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fmt = s => s ? s.split('-').reverse().join('/') : '—';
const today = () => iso(new Date());
async function hash(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const me = () => db.get('users').find(u => u.id === localStorage.getItem('session'));
const userName = id => db.get('users').find(u => u.id === id)?.name ?? '—';
const myProjects = u => db.get('projects').filter(p => p.members.includes(u.id));

// ---------- Telas ----------
function render() {
  const u = me();
  if (!u) return ($app.innerHTML = authView());
  const views = { projects: projectsView, project: projectView, calendar: calendarView };
  $app.innerHTML = headerView(u) + views[state.view](u);
  state.error = '';
}

function authView() {
  const reg = state.authMode === 'register';
  return `<div class="box auth">
    <h1>${reg ? 'Criar conta' : 'Entrar'}</h1>
    <p class="muted">Gerenciador de Tarefas Online — TR Enterprises</p>
    <form data-form="${reg ? 'register' : 'login'}">
      ${reg ? '<label>Nome <input name="name" required></label>' : ''}
      <label>E-mail <input name="email" type="email" required></label>
      <label>Senha <input name="password" type="password" minlength="6" required></label>
      ${state.error ? `<p class="error">${esc(state.error)}</p>` : ''}
      <button class="primary">${reg ? 'Cadastrar' : 'Entrar'}</button>
    </form>
    <p>${reg ? 'Já tem conta?' : 'Não tem conta?'}
      <button class="link" data-action="toggle-auth">${reg ? 'Entrar' : 'Cadastre-se'}</button></p>
  </div>`;
}

function headerView(u) {
  return `<header>
    <strong>📋 Gerenciador de Tarefas</strong>
    <nav>
      <button data-action="go" data-view="projects">Projetos</button>
      <button data-action="go" data-view="calendar">Calendário</button>
      <span class="muted">Olá, ${esc(u.name)}</span>
      <button data-action="logout">Sair</button>
    </nav>
  </header>`;
}

function projectsView(u) {
  const tasks = db.get('tasks');
  const others = db.get('users').filter(x => x.id !== u.id);
  const cards = myProjects(u).map(p => {
    const t = tasks.filter(x => x.projectId === p.id);
    const done = t.filter(x => x.status === 'done').length;
    const pct = t.length ? Math.round(done / t.length * 100) : 0;
    return `<div class="box project" data-action="open" data-id="${p.id}">
      <h3>${esc(p.name)}</h3>
      <p class="muted">${esc(p.description)}</p>
      <p class="muted">Prazo: ${fmt(p.deadline)} · ${p.members.length} membro(s)</p>
      <p class="muted">${done}/${t.length} tarefas concluídas</p>
      <div class="bar"><span style="width:${pct}%"></span></div>
    </div>`;
  }).join('') || '<p class="muted">Nenhum projeto ainda. Crie o primeiro abaixo.</p>';

  return `<div class="cal-head"><h2>Meus projetos</h2>
    <button data-action="seed" title="Cria projetos e tarefas de demonstração">Carregar dados de exemplo</button></div>
  <div class="grid">${cards}</div>
  <div class="box">
    <h3>Novo projeto</h3>
    <form data-form="project">
      <label>Nome <input name="name" required></label>
      <label>Descrição <textarea name="description" rows="2"></textarea></label>
      <label>Prazo final <input name="deadline" type="date" required></label>
      <fieldset><legend>Membros</legend>
        ${others.map(o => `<label><input type="checkbox" name="members" value="${o.id}"> ${esc(o.name)}</label>`).join('')
          || '<span class="muted">Cadastre outros usuários para adicioná-los.</span>'}
      </fieldset>
      <button class="primary">Criar projeto</button>
    </form>
  </div>`;
}

function projectView(u) {
  const p = db.get('projects').find(x => x.id === state.projectId);
  if (!p) { state.view = 'projects'; return projectsView(u); }
  const tasks = db.get('tasks').filter(t => t.projectId === p.id);

  const col = ([status, label], i) => `<div class="col" data-status="${status}">
    <h3>${label} (${tasks.filter(t => t.status === status).length})</h3>
    ${tasks.filter(t => t.status === status).map(t => {
      const late = t.status !== 'done' && t.due && t.due < today();
      return `<div class="card ${late ? 'late' : ''}" draggable="true" data-id="${t.id}">
        <strong>${esc(t.title)}</strong>
        ${t.description ? `<div class="muted">${esc(t.description)}</div>` : ''}
        <div class="muted">👤 ${esc(userName(t.assignee))} · 📅 ${fmt(t.due)}${late ? ' · <b style="color:var(--danger)">atrasada</b>' : ''}</div>
        <div class="actions">
          ${i > 0 ? `<button class="small" data-action="move" data-id="${t.id}" data-dir="-1" title="Voltar">←</button>` : ''}
          ${i < 2 ? `<button class="small" data-action="move" data-id="${t.id}" data-dir="1" title="Avançar">→</button>` : ''}
          <button class="small danger" data-action="del-task" data-id="${t.id}">Excluir</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;

  return `<div class="box">
    <h2>${esc(p.name)}</h2>
    <p class="muted">${esc(p.description)}</p>
    <p class="muted">Prazo: ${fmt(p.deadline)} · Membros: ${p.members.map(id => esc(userName(id))).join(', ')}</p>
    ${p.owner === u.id ? '<button class="small danger" data-action="del-project">Excluir projeto</button>' : ''}
  </div>
  <div class="box">
    <h3>Nova tarefa</h3>
    <form data-form="task" class="inline">
      <label>Título <input name="title" required></label>
      <label>Descrição <input name="description"></label>
      <label>Responsável <select name="assignee">${p.members.map(id => `<option value="${id}">${esc(userName(id))}</option>`).join('')}</select></label>
      <label>Prazo <input name="due" type="date" max="${p.deadline}" required></label>
      <button class="primary">Adicionar</button>
    </form>
  </div>
  <div class="kanban">${STATUS.map(col).join('')}</div>`;
}

function calendarView(u) {
  const y = state.month.getFullYear(), m = state.month.getMonth();
  const projects = myProjects(u);
  const ids = projects.map(p => p.id);
  const tasks = db.get('tasks').filter(t => ids.includes(t.projectId));
  const startPad = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();

  let cells = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => `<div class="dow">${d}</div>`).join('');
  cells += '<div></div>'.repeat(startPad);
  for (let d = 1; d <= days; d++) {
    const date = iso(new Date(y, m, d));
    const evs = projects.filter(p => p.deadline === date).map(p => `<span class="ev deadline" title="Prazo do projeto">🏁 ${esc(p.name)}</span>`)
      .concat(tasks.filter(t => t.due === date).map(t => `<span class="ev ${t.status}" title="${esc(userName(t.assignee))}">${esc(t.title)}</span>`));
    cells += `<div class="day ${date === today() ? 'today' : ''}"><b>${d}</b>${evs.join('')}</div>`;
  }

  return `<div class="box">
    <div class="cal-head">
      <button data-action="month" data-dir="-1">← Anterior</button>
      <h2>${state.month.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h2>
      <button data-action="month" data-dir="1">Próximo →</button>
    </div>
    <div class="cal">${cells}</div>
    <p class="muted">🟧 A fazer · 🟦 Em andamento · 🟩 Concluído · 🟥 Prazo de projeto</p>
  </div>`;
}

// ---------- Dados de exemplo (para demonstração) ----------
const addDays = n => { const d = new Date(); d.setDate(d.getDate() + n); return iso(d); };

async function seedDemo(u) {
  const users = db.get('users');
  const passHash = await hash('demo123');
  const team = [['Ana Souza (Cobrança)', 'ana@exemplo.com'], ['Bruno Lima (Financeiro)', 'bruno@exemplo.com']]
    .map(([name, email]) => users.find(x => x.email === email) ?? users[users.push({ id: uid(), name, email, passHash }) - 1]);
  db.set('users', users);
  const [ana, bruno] = team.map(x => x.id), eu = u.id;

  // [nome, descrição, prazo (dias a partir de hoje), membros, tarefas: [título, responsável, prazo, status]]
  const demo = [
    ['Cobrança — Village Campos Verdes (dezembro)', 'Acompanhamento dos clientes em atraso: retornos, promessas de pagamento e encaminhamentos.', 25, [eu, ana, bruno], [
      ['Retornar cliente Q12 L08: promessa de pagamento vence', ana, 2, 'todo'],
      ['Conferir no ERP o pagamento do cliente Q07 L22', ana, -1, 'todo'],
      ['Encaminhar Q03 L15 ao jurídico (mais de 120 dias)', eu, 5, 'doing'],
      ['Enviar lembrete de vencimento da parcela de dezembro', ana, -3, 'done'],
      ['Gerar o carnê anual de 2027 dos clientes em dia', bruno, 20, 'todo'],
    ]],
    ['Casa 1001 — pendências do monorepo', 'Organização dos sistemas internos (INAD, Financeiro e plugin dos colaboradores) em um único repositório.', 30, [eu, bruno], [
      ['Aplicar o tema Órbita no INAD e no Financeiro', eu, -5, 'done'],
      ['Juntar os arquivos do plugin numa pasta própria, com documentação', eu, 7, 'doing'],
      ['Subir o ajuste que estabiliza a suíte de testes do INAD', eu, 3, 'todo'],
      ['Validar o instalador do plugin num Mac', eu, 12, 'todo'],
      ['Decidir o que fazer com o trabalho parado no repositório antigo do INAD', eu, 14, 'todo'],
    ]],
    ['Backups e infraestrutura', 'Rotinas de backup, monitoramento e limpeza dos servidores e computadores da empresa.', 21, [eu, bruno], [
      ['Desligar a rotina automática que falhava todos os dias', eu, -10, 'done'],
      ['Apagar sobras de deploys antigos do servidor', eu, -9, 'done'],
      ['Liberar espaço no disco do computador do financeiro', bruno, -2, 'todo'],
      ['Reapontar o backup das 17h para o repositório novo', eu, 2, 'doing'],
      ['Criar o monitor do backup diário do Financeiro', bruno, 4, 'todo'],
      ['Criar credencial própria do Google Drive para os backups', eu, 18, 'todo'],
    ]],
  ];

  const projects = db.get('projects'), tasks = db.get('tasks');
  for (const [name, description, deadline, members, list] of demo) {
    if (projects.some(p => p.name === name && p.members.includes(eu))) continue;
    const id = uid();
    projects.push({ id, name, description, deadline: addDays(deadline), owner: eu, members });
    for (const [title, assignee, due, status] of list)
      tasks.push({ id: uid(), projectId: id, title, description: '', assignee, due: addDays(due), status });
  }
  db.set('projects', projects);
  db.set('tasks', tasks);
}

// ---------- Ações ----------
function setStatus(taskId, status) {
  db.set('tasks', db.get('tasks').map(t => t.id === taskId ? { ...t, status } : t));
}

$app.addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const d = Object.fromEntries(fd);
  const users = db.get('users');

  switch (e.target.dataset.form) {
    case 'register': {
      const email = d.email.trim().toLowerCase();
      if (users.some(u => u.email === email)) { state.error = 'E-mail já cadastrado.'; break; }
      const user = { id: uid(), name: d.name.trim(), email, passHash: await hash(d.password) };
      db.set('users', [...users, user]);
      localStorage.setItem('session', user.id);
      break;
    }
    case 'login': {
      const user = users.find(u => u.email === d.email.trim().toLowerCase());
      if (!user || user.passHash !== await hash(d.password)) { state.error = 'E-mail ou senha inválidos.'; break; }
      localStorage.setItem('session', user.id);
      state.view = 'projects';
      break;
    }
    case 'project': {
      const u = me();
      db.set('projects', [...db.get('projects'), {
        id: uid(), name: d.name.trim(), description: d.description.trim(), deadline: d.deadline,
        owner: u.id, members: [u.id, ...fd.getAll('members')],
      }]);
      break;
    }
    case 'task':
      db.set('tasks', [...db.get('tasks'), {
        id: uid(), projectId: state.projectId, title: d.title.trim(), description: d.description.trim(),
        assignee: d.assignee, due: d.due, status: 'todo',
      }]);
      break;
  }
  render();
});

$app.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const { action, id, view, dir } = el.dataset;
  if (action === 'seed') return seedDemo(me()).then(render);

  if (action === 'toggle-auth') state.authMode = state.authMode === 'login' ? 'register' : 'login';
  if (action === 'logout') { localStorage.removeItem('session'); state.authMode = 'login'; state.view = 'projects'; }
  if (action === 'go') state.view = view;
  if (action === 'open') { state.view = 'project'; state.projectId = id; }
  if (action === 'month') state.month = new Date(state.month.getFullYear(), state.month.getMonth() + Number(dir), 1);
  if (action === 'move') {
    const t = db.get('tasks').find(x => x.id === id);
    const i = STATUS.findIndex(([s]) => s === t.status) + Number(dir);
    setStatus(id, STATUS[i][0]);
  }
  if (action === 'del-task' && confirm('Excluir esta tarefa?')) db.set('tasks', db.get('tasks').filter(t => t.id !== id));
  if (action === 'del-project' && confirm('Excluir o projeto e todas as tarefas?')) {
    db.set('projects', db.get('projects').filter(p => p.id !== state.projectId));
    db.set('tasks', db.get('tasks').filter(t => t.projectId !== state.projectId));
    state.view = 'projects';
  }
  render();
});

// Arrastar e soltar no Kanban
$app.addEventListener('dragstart', e => e.target.classList?.contains('card') && e.dataTransfer.setData('text', e.target.dataset.id));
$app.addEventListener('dragover', e => { const c = e.target.closest('.col'); if (c) { e.preventDefault(); c.classList.add('over'); } });
$app.addEventListener('dragleave', e => e.target.closest('.col')?.classList.remove('over'));
$app.addEventListener('drop', e => {
  const c = e.target.closest('.col');
  if (!c) return;
  e.preventDefault();
  setStatus(e.dataTransfer.getData('text'), c.dataset.status);
  render();
});

render();
