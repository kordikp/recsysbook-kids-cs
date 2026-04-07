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
    sbSaveGlitchDone(id, correct);
  },
  isDone(id) { return !!(this.progress[id]?.completed); },
};

// ── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  let appReady = false;

  const splashBtn = document.getElementById('splash-enter');
  splashBtn.addEventListener('click', () => {
    enterApp();
    if (!appReady) {
      // Show loading state inside feed while data loads
      document.getElementById('feed-container').innerHTML =
        '<p style="color:var(--text-muted);text-align:center;padding:60px 0">Načítám...</p>';
    }
  });

  try {
    await sbInit();
    await loadGlitches();
    renderFeed();
    renderMap();
    renderMissions();
  } catch (e) {
    console.error('Init error:', e);
  }

  appReady = true;

  updateProfileBtn();
  bindNav();
  bindProfileBtn();
  document.getElementById('logo-btn').addEventListener('click', () => {
    const feedBtn = document.querySelector('.nav-btn[data-view="feed"]');
    if (feedBtn) feedBtn.click();
  });
  bindAccountPage();

  document.addEventListener('wheel', (e) => {
    const activeView = document.querySelector('.view.active');
    if (!activeView) return;
    let el = e.target;
    while (el) {
      if (el === activeView) return; // view scrolls natively
      if (el.scrollHeight > el.clientHeight + 1 &&
          ['auto', 'scroll'].includes(getComputedStyle(el).overflowY)) return;
      el = el.parentElement;
    }
    // Find the actual scrollable element inside the active view
    const scrollTarget = activeView.querySelector('.missions-body') || activeView;
    scrollTarget.scrollBy({ top: e.deltaY, behavior: 'auto' });
  }, { passive: true });
});

function enterApp() {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
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
      const overlay = document.getElementById('detail-overlay');
      if (overlay && !overlay.classList.contains('hidden')) {
        closeDetail();
      }
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

function getUserNickname() {
  const u = State.user;
  return u ? (u.nickname || u.name || '') : '';
}

function updateProfileBtn() {
  const btn = document.getElementById('profile-btn');
  const bell = document.getElementById('bell-icon');
  const user = State.user;
  if (user) {
    btn.title = getUserNickname();
    if (bell) bell.classList.add('hidden');
  } else {
    btn.title = 'Přihlásit se';
    if (bell) bell.classList.remove('hidden');
  }
}

function bindProfileBtn() {
  document.getElementById('profile-btn').addEventListener('click', openAccountPage);
}

// ── ACCOUNT PAGE ──────────────────────────────

function openAccountPage() {
  const user = State.user || {};
  const overlay = document.getElementById('account-overlay');

  // Populate nickname
  setAccountDisplayField('account-nickname-val', getUserNickname());

  // Populate fullName and email
  setAccountDisplayField('account-fullname-val', user.fullName);
  setAccountDisplayField('account-email-val', user.email);

  // Populate radio groups
  setAccountRadio('gender', user.gender);
  setAccountRadio('learning', user.learningStyle);

  // Auth section
  if (sbCurrentUser) {
    document.getElementById('account-auth-logged-out').style.display = 'none';
    document.getElementById('account-auth-logged-in').style.display = '';
    document.getElementById('account-auth-email').textContent = sbCurrentUser.email;
  } else {
    document.getElementById('account-auth-logged-out').style.display = '';
    document.getElementById('account-auth-logged-in').style.display = 'none';
    document.getElementById('auth-email-input').value = '';
    document.getElementById('auth-password-input').value = '';
    document.getElementById('auth-error').style.display = 'none';
  }

  // Show logout only when logged in (local or Supabase)
  document.getElementById('account-logout').style.display = (State.user || sbCurrentUser) ? '' : 'none';

  overlay.classList.remove('hidden');
  overlay.scrollTop = 0;
}

function setAccountDisplayField(elId, value) {
  const el = document.getElementById(elId);
  if (value) {
    el.textContent = value;
    el.classList.remove('empty');
  } else {
    el.textContent = el.dataset.placeholder || '—';
    el.classList.add('empty');
  }
}

function setAccountRadio(group, value) {
  document.querySelectorAll('.account-radio-opt[data-group="' + group + '"]').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.val === value);
  });
}

function saveAccountField(field, value) {
  const user = State.user || {};
  user[field] = value;
  State.setUser(user);
  const profileMap = { nickname: 'nickname', fullName: 'full_name', gender: 'gender', learningStyle: 'learning_style' };
  if (profileMap[field]) sbSaveProfile({ [profileMap[field]]: value });
}

function closeAccountPage() {
  document.getElementById('account-overlay').classList.add('hidden');
}

function bindAccountPage() {
  document.getElementById('account-close').addEventListener('click', closeAccountPage);

  // Inline editable fields
  [['account-nickname-val',  'account-nickname-input', 'nickname'],
   ['account-fullname-val',  'account-fullname-input', 'fullName'],
   ['account-email-val',     'account-email-input',    'email']].forEach(([valId, inputId, field]) => {
    const valEl = document.getElementById(valId);
    const inputEl = document.getElementById(inputId);
    function startEdit() {
      inputEl.value = State.user?.[field] || '';
      valEl.classList.add('hidden');
      inputEl.classList.remove('hidden');
      inputEl.focus();
    }
    function saveEdit() {
      const val = inputEl.value.trim();
      if (field === 'nickname' && val && !State.user) State.setUser({});
      if (State.user || val) saveAccountField(field, val);
      if (field === 'nickname') {
        setAccountDisplayField(valId, val);
        document.getElementById('account-logout').style.display = val ? '' : 'none';
        updateProfileBtn();
      } else {
        setAccountDisplayField(valId, val);
      }
      valEl.classList.remove('hidden');
      inputEl.classList.add('hidden');
    }
    valEl.addEventListener('click', startEdit);
    inputEl.addEventListener('blur', saveEdit);
    inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); saveEdit(); } });
  });

  // Radio buttons
  document.querySelectorAll('.account-radio-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const val = btn.dataset.val;
      document.querySelectorAll('.account-radio-opt[data-group="' + group + '"]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      saveAccountField(group === 'gender' ? 'gender' : 'learningStyle', val);
    });
  });

  // Reset progress
  const resetBtn = document.getElementById('account-reset');
  const resetConfirm = document.getElementById('account-reset-confirm');
  resetBtn.addEventListener('click', () => {
    resetBtn.style.display = 'none';
    resetConfirm.style.display = 'block';
  });
  document.getElementById('account-reset-yes').addEventListener('click', async () => {
    localStorage.removeItem('tg_progress');
    await sbResetProgress();
    renderFeed();
    renderMapContent(document.getElementById('map-container'), '');
    resetConfirm.style.display = 'none';
    resetBtn.style.display = '';
    closeAccountPage();
  });
  document.getElementById('account-reset-no').addEventListener('click', () => {
    resetConfirm.style.display = 'none';
    resetBtn.style.display = '';
  });

  // Auth: login / register
  async function handleAuth(isRegister) {
    const email = document.getElementById('auth-email-input').value.trim();
    const password = document.getElementById('auth-password-input').value;
    const errEl = document.getElementById('auth-error');
    errEl.style.display = 'none';
    if (!email || !password) { errEl.textContent = 'Vyplň e-mail a heslo.'; errEl.style.display = ''; return; }
    try {
      if (isRegister) {
        await sbSignUp(email, password);
      } else {
        await sbSignIn(email, password);
      }
      updateProfileBtn();
      openAccountPage();
      renderFeed();
      renderMissions();
    } catch (e) {
      errEl.textContent = e.message || 'Chyba přihlášení.';
      errEl.style.display = '';
    }
  }
  document.getElementById('auth-login-btn').addEventListener('click', () => handleAuth(false));
  document.getElementById('auth-register-btn').addEventListener('click', () => handleAuth(true));

  // Logout
  document.getElementById('account-logout').addEventListener('click', async () => {
    await sbSignOut();
    localStorage.removeItem('tg_user');
    updateProfileBtn();
    closeAccountPage();
  });
}


// ── FEED ─────────────────────────────────────

function renderFeed() {
  const container = document.getElementById('feed-container');
  container.innerHTML = '';
  GLITCHES.filter(g => !State.isDone(g.id))
    .forEach((g, i) => container.appendChild(buildFeedCard(g, i)));
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
  const searchInput = document.getElementById('map-search');

  renderMapDefault(container);

  searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    if (query) {
      renderMapSearch(container, query);
    } else {
      renderMapDefault(container);
    }
  });
}

function renderMapDefault(container) {
  container.innerHTML = '';

  const stickyExtra = document.getElementById('map-sticky-extra');
  if (stickyExtra) stickyExtra.innerHTML = '<p class="map-section-label">Nebo zvol téma</p>';

  CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'map-cat-card';
    card.dataset.catId = cat.id;
    card.innerHTML =
      '<div class="map-cat-title">' + cat.title + '</div>' +
      '<img class="map-cat-blob" src="assets/' + cat.blob + '" alt="">';
    card.addEventListener('click', () => renderMapCategory(container, cat));
    container.appendChild(card);
  });
}

function renderMapCategory(container, cat) {
  container.innerHTML = '';
  const stickyExtra = document.getElementById('map-sticky-extra');
  if (stickyExtra) stickyExtra.innerHTML = '';

  const backRow = document.createElement('div');
  backRow.className = 'detail-nav map-cat-back-row';
  backRow.innerHTML =
    '<button class="detail-back-btn" aria-label="Zpět"><img src="assets/back.svg" width="30" height="30" alt=""></button>' +
    '<span class="detail-topic-pill">' + cat.title + '</span>';
  backRow.querySelector('.detail-back-btn').addEventListener('click', () => {
    document.getElementById('map-search').value = '';
    renderMapDefault(container);
  });
  container.appendChild(backRow);

  const missions = MISSIONS.filter(m => cat.missionIds.includes(m.id));

  missions.forEach(mission => {
    const glitches = mission.glitches.map(id => GLITCHES.find(g => g.id === id)).filter(Boolean);
    if (!glitches.length) return;

    const group = document.createElement('div');
    group.className = 'map-topic-group';

    const header = document.createElement('div');
    header.className = 'map-topic-header';
    header.innerHTML = '<span class="map-topic-label">' + mission.title + '</span>';
    group.appendChild(header);

    const tiles = document.createElement('div');
    tiles.className = 'map-tiles';

    glitches.forEach(g => {
      const done = State.isDone(g.id);
      const tile = document.createElement('div');
      tile.className = 'map-tile';
      tile.innerHTML =
        '<div class="map-tile-body">' +
          '<div class="map-tile-title">' + g.title + '</div>' +
        '</div>' +
        (done ? '<div class="map-tile-check"><img src="assets/done.svg" width="21" height="21" alt=""></div>' : '');
      tile.addEventListener('click', () => openDetail(g.id));
      tiles.appendChild(tile);
    });

    group.appendChild(tiles);
    container.appendChild(group);
  });
}

function renderMapSearch(container, query) {
  container.innerHTML = '';
  const stickyExtra = document.getElementById('map-sticky-extra');
  if (stickyExtra) stickyExtra.innerHTML = '';

  const glitches = GLITCHES.filter(g =>
    g.title.toLowerCase().includes(query) ||
    (TOPICS[g.topic] && TOPICS[g.topic].label.toLowerCase().includes(query))
  );

  if (!glitches.length) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px 0">Žádný glitch nenalezen.</p>';
    return;
  }

  glitches.forEach(g => {
    const done = State.isDone(g.id);
    const topic = TOPICS[g.topic];
    const tile = document.createElement('div');
    tile.className = 'map-tile';
    tile.innerHTML =
      '<div class="map-tile-body">' +
        '<div class="map-tile-title">' + g.title + '</div>' +
        '<div class="map-tile-tag">' + (topic ? topic.label : '') + '</div>' +
      '</div>' +
      (done ? '<div class="map-tile-check"><img src="assets/done.svg" width="21" height="21" alt=""></div>' : '');
    tile.addEventListener('click', () => openDetail(g.id));
    container.appendChild(tile);
  });
}

// Compatibility wrapper used by closeDetail and account reset
function renderMapContent(container, query) {
  if (query) {
    renderMapSearch(container, query);
  } else {
    renderMapDefault(container);
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
    card.dataset.catId = cat.id;

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

  function updateArrows() {
    const canLeft = track.scrollLeft > 1;
    const canRight = track.scrollLeft < track.scrollWidth - track.offsetWidth - 1;
    prevBtn.style.visibility = canLeft ? 'visible' : 'hidden';
    nextBtn.style.visibility = canRight ? 'visible' : 'hidden';
  }

  carousel.appendChild(prevBtn);
  carousel.appendChild(track);
  carousel.appendChild(nextBtn);

  // Restore scroll position to match active category
  requestAnimationFrame(() => {
    if (activeCategoryIdx > 0) {
      const card = track.querySelector('.cat-card');
      const cardWidth = card ? card.offsetWidth : track.offsetWidth;
      track.scrollLeft = activeCategoryIdx * (cardWidth + 12);
    }
    updateArrows();
  });
  track.addEventListener('scroll', updateArrows, { passive: true });
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

  const chatContainer = document.getElementById('chat-container');
  chatContainer.innerHTML = '';
  document.getElementById('detail-overlay').classList.remove('hidden');

  // Nav row: yellow circle back btn + topic pill
  const topic = TOPICS[glitch.topic];
  const navRow = document.createElement('div');
  navRow.className = 'detail-nav';
  navRow.innerHTML =
    '<button class="detail-back-btn" aria-label="Zpět"><img src="assets/back.svg" width="30" height="30" alt=""></button>' +
    '<span class="detail-topic-pill">' + (topic ? topic.label : '') + '</span>';
  navRow.querySelector('.detail-back-btn').addEventListener('click', closeDetail);
  chatContainer.appendChild(navRow);

  // Large title
  const titleEl = document.createElement('h1');
  titleEl.className = 'detail-title-large';
  titleEl.textContent = glitch.title;
  chatContainer.appendChild(titleEl);

  const progress = State.progress[glitchId];
  if (progress && progress.completed) {
    replayFull(glitch);
  } else {
    runChat(glitch);
  }
}

function addDeepdive(glitch) {
  if (!glitch.deepdive || !glitch.deepdive.length) return;
  const container = document.getElementById('chat-container');
  const section = document.createElement('div');
  section.className = 'deepdive-section';
  glitch.deepdive.forEach(para => {
    const p = document.createElement('p');
    p.textContent = para;
    section.appendChild(p);
  });
  container.appendChild(section);
  scrollChatToBottom();
}

function showDeepDiveAndEnd(glitch, showRetry) {
  addDeepdive(glitch);
  showEndActions(glitch);
  if (showRetry) showRetryQuiz(glitch);
}

function showRetryQuiz(glitch) {
  const quizStep = glitch.chat.find(s => s.quiz);
  if (!quizStep) return;
  const container = document.getElementById('chat-container');

  const label = document.createElement('div');
  label.className = 'chat-bubble bot';
  label.textContent = 'Zkus kvíz znovu — tentokrát to dáš! 💪';
  container.appendChild(label);
  scrollChatToBottom();

  setTimeout(() => {
    showQuiz(quizStep.quiz, correct => {
      State.setGlitchDone(glitch.id, correct);
    });
  }, 400);
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

// ── CHAT ENGINE ──────────────────────────────

function replayFull(glitch) {
  const container = document.getElementById('chat-container');

  glitch.chat.forEach(step => {
    if (step.bot) {
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble bot';
      bubble.style.opacity = '1';
      bubble.style.transform = 'none';
      bubble.textContent = step.bot;
      container.appendChild(bubble);
    } else if (step.quiz) {
      const quiz = step.quiz;
      const block = document.createElement('div');
      block.className = 'quiz-block';
      block.style.opacity = '1';
      block.style.transform = 'none';

      const optionsHTML = quiz.options.map((opt, i) => {
        const isCorrect = i === quiz.correct;
        return '<button class="quiz-option' + (isCorrect ? ' correct' : '') + '" disabled>' +
          '<span class="quiz-dot' + (isCorrect ? ' correct' : '') + '"></span><span>' + opt + '</span>' +
        '</button>';
      }).join('');

      block.innerHTML =
        '<div class="quiz-question">' + quiz.question + '</div>' +
        '<div class="quiz-options">' + optionsHTML + '</div>';

      if (quiz.explanation) {
        const explanation = document.createElement('div');
        explanation.className = 'quiz-explanation';
        explanation.textContent = quiz.explanation;
        block.appendChild(explanation);
      }
      container.appendChild(block);
    }
  });

  if (glitch.deepdive && glitch.deepdive.length) {
    const section = document.createElement('div');
    section.className = 'deepdive-section';
    glitch.deepdive.forEach(para => {
      const p = document.createElement('p');
      p.textContent = para;
      section.appendChild(p);
    });
    container.appendChild(section);
  }

  showEndActions(glitch, false);
}

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
          setTimeout(() => showEndActions(glitch, true), 800);
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

function showEndActions(glitch, withReadMore = false) {
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
    nextBtn.textContent = 'Další glitch';
    nextBtn.addEventListener('click', () => openDetail(nextGlitchId));
    actionsEl.appendChild(nextBtn);
  } else {
    // Find next mission in the same category
    const cat = CATEGORIES.find(c => c.missionIds.some(mid => {
      const m = MISSIONS.find(ms => ms.id === mid);
      return m && m.glitches.includes(glitch.id);
    }));
    if (cat && mission) {
      const missionIdx = cat.missionIds.indexOf(mission.id);
      const nextMissionId = cat.missionIds[missionIdx + 1];
      const nextMission = nextMissionId && MISSIONS.find(m => m.id === nextMissionId);
      if (nextMission && nextMission.glitches.length) {
        const chapBtn = document.createElement('button');
        chapBtn.className = 'chat-action-btn primary-action';
        chapBtn.textContent = 'Další kapitola';
        chapBtn.addEventListener('click', () => openDetail(nextMission.glitches[0]));
        actionsEl.appendChild(chapBtn);
      }
    }
  }

  if (withReadMore && glitch.deepdive && glitch.deepdive.length) {
    const readMoreLink = document.createElement('button');
    readMoreLink.className = 'read-more-link';
    readMoreLink.textContent = 'Nebo si přečti více →';
    readMoreLink.addEventListener('click', () => {
      // Remove entire actions row, show deepdive, then show next btn below
      actionsEl.remove();
      addDeepdive(glitch);
      const afterBtn = document.createElement('button');
      afterBtn.className = 'chat-action-btn primary-action';
      afterBtn.style.alignSelf = 'flex-start';
      if (nextGlitchId) {
        afterBtn.textContent = 'Další glitch';
        afterBtn.addEventListener('click', () => openDetail(nextGlitchId));
        container.appendChild(afterBtn);
      } else {
        const cat = CATEGORIES.find(c => c.missionIds.some(mid => {
          const m = MISSIONS.find(ms => ms.id === mid);
          return m && m.glitches.includes(glitch.id);
        }));
        if (cat && mission) {
          const missionIdx = cat.missionIds.indexOf(mission.id);
          const nextMissionId = cat.missionIds[missionIdx + 1];
          const nextMission = nextMissionId && MISSIONS.find(m => m.id === nextMissionId);
          if (nextMission && nextMission.glitches.length) {
            afterBtn.textContent = 'Další kapitola';
            afterBtn.addEventListener('click', () => openDetail(nextMission.glitches[0]));
            container.appendChild(afterBtn);
          }
        }
      }
      scrollChatToBottom();
    });
    actionsEl.appendChild(readMoreLink);
  }

  container.appendChild(actionsEl);
  scrollChatToBottom();
}

function scrollChatToBottom() {
  const container = document.getElementById('chat-container');
  setTimeout(() => {
    const distFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    if (distFromBottom < 150) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }, 50);
}
