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

  document.addEventListener('wheel', (e) => {
    const activeView = document.querySelector('.view.active');
    if (activeView && !activeView.contains(e.target)) {
      activeView.scrollBy({ top: e.deltaY, behavior: 'auto' });
    }
  }, { passive: true });
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
  updateSpotlight(1);
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
  GLITCHES.forEach((g, i) => container.appendChild(buildFeedCard(g, i)));
  triggerFeedAnimations();
}

function buildFeedCard(glitch, index) {
  const topic = TOPICS[glitch.topic];
  const done = State.isDone(glitch.id);
  const blob = String((index % 20) + 1).padStart(2, '0');
  const hook = glitch.hook || glitch.teaser || '→';

  const card = document.createElement('article');
  card.className = 'glitch-card';
  card.dataset.id = glitch.id;

  card.innerHTML =
    '<div class="card-bg"></div>' +
    '<img class="card-blob-img" src="assets/blob-images_' + blob + '.png" alt="">' +
    '<div class="card-header">' +
      '<span class="card-topic-badge">' + topic.label + '</span>' +
      '<span class="card-done-indicator' + (done ? ' done' : '') + '">' +
        (done ? '<img src="assets/done.svg" width="21" height="21" alt="">' : '') +
      '</span>' +
    '</div>' +
    '<div class="card-content">' +
      '<h2 class="card-title">' + glitch.title + '</h2>' +
      '<p class="card-teaser">' + glitch.teaser + '</p>' +
      '<div class="card-footer">' +
        '<span class="card-hook-pill">' + hook + '</span>' +
        '<button class="card-cta" aria-label="Otevřít">' +
          '<img src="assets/go.svg" width="31" height="31" alt="">' +
        '</button>' +
      '</div>' +
    '</div>';

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
        '<span class="map-topic-label">' + topic.label + '</span>' +
      '</div>' +
      '<div class="map-tiles"></div>';

    const tilesEl = group.querySelector('.map-tiles');
    glitches.forEach(g => {
      const done = State.isDone(g.id);
      const tile = document.createElement('div');
      tile.className = 'map-tile' + (done ? ' done' : '');
      tile.innerHTML =
        '<div class="map-tile-body">' +
          '<div class="map-tile-title">' + g.title + '</div>' +
          '<div class="map-tile-tag">' + topic.label + '</div>' +
        '</div>' +
        (done ? '<div class="map-tile-check"><img src="assets/done.svg" width="21" height="21" alt=""></div>' : '');
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

let activeCategoryId = null;
let activeCategoryIdx = 0;

function renderMissions() {
  activeCategoryId = activeCategoryId || (CATEGORIES[0] && CATEGORIES[0].id);
  activeCategoryIdx = Math.max(0, CATEGORIES.findIndex(c => c.id === activeCategoryId));
  renderCategoryCarousel();
  renderMissionList(null);
}

function renderCategoryCarousel() {
  const carousel = document.getElementById('category-carousel');
  carousel.innerHTML = '';

  const track = document.createElement('div');
  track.className = 'cat-track';

  function switchToIdx(newIdx) {
    if (newIdx === activeCategoryIdx || !CATEGORIES[newIdx]) return;
    const dir = newIdx > activeCategoryIdx ? 'next' : 'prev';
    activeCategoryId = CATEGORIES[newIdx].id;
    activeCategoryIdx = newIdx;
    renderMissionList(dir);
  }

  // Touch: react on touchend, before snap animation finishes
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 20) return;
    switchToIdx(dx < 0
      ? Math.min(activeCategoryIdx + 1, CATEGORIES.length - 1)
      : Math.max(activeCategoryIdx - 1, 0));
  }, { passive: true });

  // Desktop: scrollend or debounced scroll
  function onScrollSettle() {
    if (!CATEGORIES.length) return;
    const cardWidth = track.scrollWidth / CATEGORIES.length;
    const idx = Math.min(Math.round(track.scrollLeft / cardWidth), CATEGORIES.length - 1);
    switchToIdx(idx);
  }
  if ('onscrollend' in window) {
    track.addEventListener('scrollend', onScrollSettle, { passive: true });
  } else {
    let scrollTimer;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(onScrollSettle, 50);
    }, { passive: true });
  }

  CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'cat-card' + (cat.id === activeCategoryId ? ' active' : '');

    const starsHtml = buildStarsHtml(cat);

    card.innerHTML =
      '<div class="cat-card-title">' + cat.title + '</div>' +
      '<div class="cat-card-bottom">' +
        '<div class="cat-card-progress">' + starsHtml + '</div>' +
        '<img class="cat-blob-img" src="assets/' + cat.blob + '" alt="">' +
      '</div>';

    card.addEventListener('click', () => {
      const newIdx = CATEGORIES.findIndex(c => c.id === cat.id);
      const dir = newIdx > activeCategoryIdx ? 'next' : newIdx < activeCategoryIdx ? 'prev' : null;
      activeCategoryId = cat.id;
      activeCategoryIdx = newIdx;
      renderCategoryCarousel();
      renderMissionList(dir);
      const track = document.querySelector('.cat-track');
      if (track) track.scrollTo({ left: newIdx * track.offsetWidth, behavior: 'smooth' });
    });

    track.appendChild(card);
  });

  const prevBtn = document.createElement('button');
  prevBtn.className = 'cat-arrow cat-arrow-left';
  prevBtn.innerHTML = '<img src="assets/arrow.svg" width="21" height="21" alt="Předchozí" style="transform:rotate(180deg)">';
  prevBtn.addEventListener('click', () => {
    const newIdx = Math.max(0, activeCategoryIdx - 1);
    if (newIdx === activeCategoryIdx) return;
    activeCategoryId = CATEGORIES[newIdx].id;
    activeCategoryIdx = newIdx;
    renderCategoryCarousel();
    renderMissionList('prev');
    const t = document.querySelector('.cat-track');
    if (t) t.scrollTo({ left: newIdx * t.offsetWidth, behavior: 'smooth' });
  });

  const nextBtn = document.createElement('button');
  nextBtn.className = 'cat-arrow cat-arrow-right';
  nextBtn.innerHTML = '<img src="assets/arrow.svg" width="21" height="21" alt="Další">';
  nextBtn.addEventListener('click', () => {
    const newIdx = Math.min(CATEGORIES.length - 1, activeCategoryIdx + 1);
    if (newIdx === activeCategoryIdx) return;
    activeCategoryId = CATEGORIES[newIdx].id;
    activeCategoryIdx = newIdx;
    renderCategoryCarousel();
    renderMissionList('next');
    const t = document.querySelector('.cat-track');
    if (t) t.scrollTo({ left: newIdx * t.offsetWidth, behavior: 'smooth' });
  });

  carousel.appendChild(prevBtn);
  carousel.appendChild(track);
  carousel.appendChild(nextBtn);
}

const STAR_PATH = 'M8.65934 5.11583C10.0559 2.79522 13.4203 2.79522 14.8168 5.11583C15.3186 5.94952 16.1369 6.54409 17.0849 6.76363C19.7234 7.37474 20.7631 10.5745 18.9876 12.6198C18.3498 13.3546 18.0372 14.3166 18.1213 15.286C18.3555 17.9843 15.6337 19.9618 13.1398 18.9053C12.2439 18.5257 11.2323 18.5257 10.3364 18.9053C7.84252 19.9618 5.12069 17.9843 5.35486 15.286C5.43899 14.3166 5.1264 13.3546 4.48856 12.6198C2.71309 10.5745 3.75274 7.37474 6.39134 6.76363C7.33926 6.54409 8.15762 5.94952 8.65934 5.11583Z';

function starSvg(filled) {
  const color = filled ? '#FFF062' : '#483B58';
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="' + STAR_PATH + '" fill="' + color + '"/></svg>';
}

function buildStarsHtml(cat) {
  const catMissions = MISSIONS.filter(m => cat.missionIds.includes(m.id));
  const totalMissions = catMissions.length;
  const doneMissions = catMissions.filter(m => {
    const done = m.glitches.filter(id => State.isDone(id)).length;
    return done === m.glitches.length && m.glitches.length > 0;
  }).length;
  const starCount = 5;
  let html = '';
  for (let i = 0; i < starCount; i++) {
    html += starSvg(i < Math.round((doneMissions / Math.max(totalMissions, 1)) * starCount));
  }
  return html;
}

function fillMissionList(container) {
  container.innerHTML = '';
  const cat = CATEGORIES.find(c => c.id === activeCategoryId);
  if (!cat) return;

  const catMissions = MISSIONS.filter(m => cat.missionIds.includes(m.id));

  catMissions.forEach((mission, idx) => {
    const total = mission.glitches.length;
    const done = mission.glitches.filter(id => State.isDone(id)).length;
    const complete = done === total && total > 0;

    const card = document.createElement('div');
    card.className = 'mission-card';

    const starsHtml = buildMissionStarsHtml(done, total);

    card.innerHTML =
      '<div class="mission-body">' +
        '<div class="mission-title">' + mission.title + '</div>' +
        '<div class="mission-desc">' + mission.description + '</div>' +
        '<div class="mission-footer">' +
          '<div class="mission-meta-row">' +
            '<span class="mission-meta">' + total + ' glitchů · splněno ' + done + '/' + total + '</span>' +
          '</div>' +
          '<div class="mission-bottom-row">' +
            '<div class="mission-stars">' + starsHtml + '</div>' +
            '<button class="mission-go-btn" aria-label="Spustit misi">' +
              '<img src="assets/go.svg" width="21" height="21" alt="">' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    if (idx < catMissions.length - 1) {
      card.classList.add('mission-card--sep');
    }

    card.addEventListener('click', () => {
      const nextId = mission.glitches.find(id => !State.isDone(id)) || mission.glitches[0];
      openDetail(nextId);
    });

    container.appendChild(card);
  });
}

function renderMissionList(dir) {
  const container = document.getElementById('missions-container');

  if (!dir || !container.children.length) {
    fillMissionList(container);
    return;
  }

  // slide out
  const outX = dir === 'next' ? '-20px' : '20px';
  const inX  = dir === 'next' ?  '20px' : '-20px';
  container.style.cssText = 'opacity:0;transform:translateX(' + outX + ');transition:opacity 0.07s ease,transform 0.07s ease;overflow:hidden';

  setTimeout(() => {
    fillMissionList(container);
    container.style.cssText = 'opacity:0;transform:translateX(' + inX + ');transition:none;overflow:hidden';
    container.getBoundingClientRect(); // force reflow
    container.style.cssText = 'opacity:1;transform:translateX(0);transition:opacity 0.14s ease,transform 0.14s ease;overflow:hidden';
  }, 75);
}

function buildMissionStarsHtml(done, total) {
  const starCount = 5;
  const filled = Math.round((done / Math.max(total, 1)) * starCount);
  let html = '';
  for (let i = 0; i < starCount; i++) {
    html += starSvg(i < filled);
  }
  return html;
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

  if (glitch.deepdive && glitch.deepdive.length) {
    const readMoreBtn = document.createElement('button');
    readMoreBtn.className = 'chat-action-btn read-more-btn';
    readMoreBtn.textContent = 'Číst více →';
    readMoreBtn.addEventListener('click', () => {
      readMoreBtn.remove();
      glitch.deepdive.forEach(para => addBotBubble(para));
      scrollChatToBottom();
    });
    container.appendChild(readMoreBtn);
  }

  scrollChatToBottom();
}

function scrollChatToBottom() {
  const container = document.getElementById('chat-container');
  setTimeout(() => {
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, 50);
}
