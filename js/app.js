/* ============================================
   Tiny Glitch — SPA
   ============================================ */

// ── STATE ────────────────────────────────────

const State = {
  get user() { return JSON.parse(localStorage.getItem('tg_user') || 'null'); },
  setUser(u) { localStorage.setItem('tg_user', JSON.stringify(u)); },

  get progress() { return JSON.parse(localStorage.getItem('tg_progress') || '{}'); },
  setGlitchDone(id, correct) {
    const p = this.progress;
    p[id] = { completed: true, correct, ts: Date.now() };
    localStorage.setItem('tg_progress', JSON.stringify(p));
  },
  isDone(id) { return !!(this.progress[id]?.completed); },
};

// ── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  await loadGlitches();
  renderFeed();
  renderMap();
  renderMissions();
  updateProfileBtn();
  bindNav();
  bindProfileBtn();
  bindDetailBack();
  bindLoginModal();

  document.getElementById('splash-enter').addEventListener('click', enterApp);
});

function enterApp() {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  splash.classList.add('hidden');
  app.classList.remove('hidden');
}

// ── NAVIGATION ───────────────────────────────

function updateSpotlight(index) {
  const spotlight = document.querySelector('.nav-spotlight');
  if (spotlight) spotlight.style.transform = `translateX(${index * 100}%)`;
}

function bindNav() {
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateSpotlight(i);
      showView(btn.dataset.view);
    });
  });
  updateSpotlight(0);
}

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + name);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
    if (name === 'feed') triggerFeedAnimations();
    if (name === 'missions') renderMissions();
  }
}

// ── PROFILE ──────────────────────────────────

function updateProfileBtn() {
  const btn = document.getElementById('profile-btn');
  const user = State.user;
  if (user) {
    btn.textContent = user.name.charAt(0).toUpperCase();
    btn.classList.add('has-user');
    btn.title = user.name;
  } else {
    btn.textContent = '👤';
    btn.classList.remove('has-user');
  }
}

function bindProfileBtn() {
  document.getElementById('profile-btn').addEventListener('click', () => {
    if (!State.user) {
      openLoginModal();
    } else {
      if (confirm('Přihlášen/a jako ' + State.user.name + '. Odhlásit?')) {
        localStorage.removeItem('tg_user');
        updateProfileBtn();
      }
    }
  });
}

// ── LOGIN MODAL ──────────────────────────────

function openLoginModal() {
  document.getElementById('login-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('username-input').focus(), 100);
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.add('hidden');
}

function bindLoginModal() {
  document.getElementById('login-submit').addEventListener('click', submitLogin);
  document.getElementById('username-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitLogin();
  });
  document.querySelector('.modal-backdrop').addEventListener('click', closeLoginModal);
}

function submitLogin() {
  const input = document.getElementById('username-input');
  const name = input.value.trim();
  if (!name) { input.focus(); return; }
  State.setUser({ name });
  updateProfileBtn();
  closeLoginModal();
  input.value = '';
}

// ── FEED ─────────────────────────────────────

function renderFeed() {
  const container = document.getElementById('feed-container');
  container.innerHTML = '';
  GLITCHES.forEach(g => container.appendChild(buildFeedCard(g)));
  triggerFeedAnimations();
}

function buildFeedCard(glitch) {
  const topic = TOPICS[glitch.topic];
  const done = State.isDone(glitch.id);

  const card = document.createElement('article');
  card.className = 'glitch-card';
  card.dataset.id = glitch.id;

  card.innerHTML =
    '<div class="card-bg" style="background:' + topic.bg + '"></div>' +
    '<div class="card-overlay"></div>' +
    (done ? '<div class="card-done-badge">✓ Splněno</div>' : '') +
    '<div class="card-content">' +
      '<span class="card-emoji">' + topic.emoji + '</span>' +
      '<span class="card-topic-badge" style="background:' + topic.color + '22;color:' + topic.color + '">' + topic.label + '</span>' +
      '<h2 class="card-title">' + glitch.title + '</h2>' +
      '<p class="card-teaser">' + glitch.teaser + '</p>' +
    '</div>' +
    '<div class="card-cta">→</div>';

  card.addEventListener('click', () => openDetail(glitch.id));
  return card;
}

function triggerFeedAnimations() {
  const cards = document.querySelectorAll('.glitch-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card, i) => {
    card.style.transitionDelay = (i * 0.07) + 's';
    observer.observe(card);
  });
}

// ── MAP ───────────────────────────────────────

function renderMap() {
  const container = document.getElementById('map-container');
  renderMapContent(container, '');

  document.getElementById('map-search').addEventListener('input', e => {
    renderMapContent(container, e.target.value.toLowerCase());
  });
}

function renderMapContent(container, query) {
  container.innerHTML = '';

  Object.keys(TOPICS).forEach(topicKey => {
    const topic = TOPICS[topicKey];
    const glitches = GLITCHES.filter(g =>
      g.topic === topicKey &&
      (!query || g.title.toLowerCase().includes(query) || topic.label.toLowerCase().includes(query))
    );
    if (!glitches.length) return;

    const group = document.createElement('div');
    group.className = 'map-topic-group';
    group.innerHTML =
      '<div class="map-topic-header">' +
        '<span class="map-topic-emoji">' + topic.emoji + '</span>' +
        '<span class="map-topic-label" style="color:' + topic.color + '">' + topic.label + '</span>' +
      '</div>' +
      '<div class="map-tiles"></div>';

    const tilesEl = group.querySelector('.map-tiles');
    glitches.forEach(g => {
      const done = State.isDone(g.id);
      const tile = document.createElement('div');
      tile.className = 'map-tile' + (done ? ' done' : '');
      tile.innerHTML =
        (done ? '<span class="map-tile-check">✓</span>' : '') +
        '<div class="map-tile-title">' + g.title + '</div>' +
        '<div class="map-tile-tag" style="color:' + topic.color + '">' + topic.label + '</div>';
      tile.addEventListener('click', () => openDetail(g.id));
      tilesEl.appendChild(tile);
    });

    container.appendChild(group);
  });

  if (!container.children.length) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px 0">Žádný glitch nenalezen.</p>';
  }
}

// ── MISSIONS ─────────────────────────────────

function renderMissions() {
  const container = document.getElementById('missions-container');
  container.innerHTML = '';

  MISSIONS.forEach(mission => {
    const topic = TOPICS[mission.topic];
    const total = mission.glitches.length;
    const done = mission.glitches.filter(id => State.isDone(id)).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const complete = done === total;

    const card = document.createElement('div');
    card.className = 'mission-card' + (complete ? ' complete' : '');
    card.innerHTML =
      '<div class="mission-top">' +
        '<span class="mission-emoji">' + mission.emoji + '</span>' +
        '<div class="mission-info">' +
          '<div class="mission-title">' + mission.title + '</div>' +
          '<div class="mission-desc">' + mission.description + '</div>' +
          '<div class="mission-meta">' + total + ' glitche · ' + (complete ? '✓ Splněno' : done + '/' + total + ' splněno') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="mission-progress">' +
        '<div class="mission-progress-bar" style="width:' + pct + '%;background:' + (complete ? '#00E676' : topic.color) + '"></div>' +
      '</div>' +
      '<div class="mission-progress-label">' +
        '<span>' + (complete ? 'Hotovo!' : 'Pokrok') + '</span>' +
        '<span>' + pct + '%</span>' +
      '</div>';

    card.addEventListener('click', () => {
      const nextId = mission.glitches.find(id => !State.isDone(id)) || mission.glitches[0];
      openDetail(nextId);
    });

    container.appendChild(card);
  });
}

// ── DETAIL / CHATBOT ─────────────────────────

let currentGlitchId = null;

function openDetail(glitchId) {
  const glitch = GLITCHES.find(g => g.id === glitchId);
  if (!glitch) return;
  currentGlitchId = glitchId;

  document.getElementById('detail-title').textContent = glitch.title;
  document.getElementById('chat-container').innerHTML = '';
  document.getElementById('detail-overlay').classList.remove('hidden');

  runChat(glitch);
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.add('hidden');
  currentGlitchId = null;
  renderFeed();
  renderMapContent(
    document.getElementById('map-container'),
    document.getElementById('map-search').value.toLowerCase()
  );
}

function bindDetailBack() {
  document.getElementById('detail-back').addEventListener('click', closeDetail);
}

// ── CHAT ENGINE ──────────────────────────────

function runChat(glitch) {
  const steps = glitch.chat;
  let stepIndex = 0;

  function nextStep() {
    if (stepIndex >= steps.length) return;
    const step = steps[stepIndex++];

    if (step.bot) {
      showTyping().then(() => {
        addBotBubble(step.bot);
        if (stepIndex < steps.length) {
          setTimeout(nextStep, 600);
        }
      });
    } else if (step.quiz) {
      setTimeout(() => {
        showQuiz(step.quiz, correct => {
          State.setGlitchDone(glitch.id, correct);
          setTimeout(() => showEndActions(glitch), 800);
        });
      }, 400);
    }
  }

  setTimeout(nextStep, 300);
}

function addBotBubble(text) {
  const container = document.getElementById('chat-container');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble bot';
  bubble.textContent = text;
  container.appendChild(bubble);
  scrollChatToBottom();
}

function addUserBubble(text) {
  const container = document.getElementById('chat-container');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user';
  bubble.textContent = text;
  container.appendChild(bubble);
  scrollChatToBottom();
}

function showTyping() {
  return new Promise(resolve => {
    const container = document.getElementById('chat-container');
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML =
      '<div class="typing-dot"></div>' +
      '<div class="typing-dot"></div>' +
      '<div class="typing-dot"></div>';
    container.appendChild(indicator);
    scrollChatToBottom();

    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      indicator.remove();
      resolve();
    }, delay);
  });
}

function showQuiz(quiz, onDone) {
  const container = document.getElementById('chat-container');
  const block = document.createElement('div');
  block.className = 'quiz-block';

  const optionsHTML = quiz.options.map((opt, i) =>
    '<button class="quiz-option" data-idx="' + i + '">' +
      '<span class="quiz-dot"></span><span>' + opt + '</span>' +
    '</button>'
  ).join('');

  block.innerHTML =
    '<div class="quiz-question">' + quiz.question + '</div>' +
    '<div class="quiz-options">' + optionsHTML + '</div>';

  const optionsBtns = block.querySelectorAll('.quiz-option');
  optionsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = parseInt(btn.dataset.idx);
      const correct = chosen === quiz.correct;

      optionsBtns.forEach(b => {
        b.disabled = true;
        const idx = parseInt(b.dataset.idx);
        if (idx === chosen) b.classList.add(correct ? 'correct' : 'wrong');
        if (idx === chosen) b.classList.add('selected');
      });

      addUserBubble(quiz.options[chosen]);

      const explanation = document.createElement('div');
      explanation.className = 'quiz-explanation';
      explanation.textContent = quiz.explanation;
      block.appendChild(explanation);

      scrollChatToBottom();
      onDone(correct);
    });
  });

  container.appendChild(block);
  scrollChatToBottom();
}

function showEndActions(glitch) {
  const container = document.getElementById('chat-container');
  const actionsEl = document.createElement('div');
  actionsEl.className = 'chat-actions';

  const mission = MISSIONS.find(m => m.glitches.includes(glitch.id));
  let nextGlitchId = null;
  if (mission) {
    const idx = mission.glitches.indexOf(glitch.id);
    if (idx < mission.glitches.length - 1) {
      nextGlitchId = mission.glitches[idx + 1];
    }
  }

  if (nextGlitchId) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'chat-action-btn primary-action';
    nextBtn.textContent = 'Další glitch →';
    nextBtn.addEventListener('click', () => openDetail(nextGlitchId));
    actionsEl.appendChild(nextBtn);
  }

  const backBtn = document.createElement('button');
  backBtn.className = 'chat-action-btn';
  backBtn.textContent = '← Zpět na feed';
  backBtn.addEventListener('click', () => {
    closeDetail();
    showView('feed');
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === 'feed');
    });
  });
  actionsEl.appendChild(backBtn);

  container.appendChild(actionsEl);
  scrollChatToBottom();
}

function scrollChatToBottom() {
  const container = document.getElementById('chat-container');
  setTimeout(() => {
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, 50);
}
