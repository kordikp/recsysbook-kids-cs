// ── SUPABASE CLIENT ──────────────────────────

const SUPABASE_URL = 'https://pfpqwxqayuvihnqnuyvv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xUSlFUWpapqMCW--b6LDsQ_P0HCKsg6';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let sbCurrentUser = null;

// ── INIT ─────────────────────────────────────

async function sbInit() {
  const { data: { user } } = await sb.auth.getUser();
  sbCurrentUser = user;
  if (user) await sbMergeToLocal(user.id);
  return user;
}

// ── AUTH ─────────────────────────────────────

async function sbSignUp(email, password) {
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) throw error;
  sbCurrentUser = data.user;
  if (sbCurrentUser) {
    await sbSyncLocalToSupabase(sbCurrentUser.id);
    await sbMergeToLocal(sbCurrentUser.id);
  }
  return data;
}

async function sbSignIn(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  sbCurrentUser = data.user;
  if (sbCurrentUser) await sbMergeToLocal(sbCurrentUser.id);
  return data;
}

async function sbSignOut() {
  await sb.auth.signOut();
  sbCurrentUser = null;
}

// ── PROFILE ──────────────────────────────────

async function sbSaveProfile(fields) {
  if (!sbCurrentUser) return;
  await sb.from('profiles').upsert({ id: sbCurrentUser.id, ...fields });
}

// ── PROGRESS ─────────────────────────────────

async function sbSaveGlitchDone(glitchId, correct) {
  if (!sbCurrentUser) return;
  await sb.from('progress').upsert({
    user_id: sbCurrentUser.id,
    glitch_id: glitchId,
    completed: true,
    quiz_answer: correct ? 'correct' : 'incorrect',
    completed_at: new Date().toISOString()
  }, { onConflict: 'user_id,glitch_id' });
}

async function sbResetProgress() {
  if (!sbCurrentUser) return;
  await sb.from('progress').delete().eq('user_id', sbCurrentUser.id);
}

// ── SYNC ─────────────────────────────────────

async function sbSyncLocalToSupabase(userId) {
  const local = JSON.parse(localStorage.getItem('tg_progress') || '{}');
  const entries = Object.entries(local);
  if (!entries.length) return;
  const rows = entries.map(([glitchId, d]) => ({
    user_id: userId,
    glitch_id: glitchId,
    completed: d.completed,
    quiz_answer: d.correct ? 'correct' : 'incorrect',
    completed_at: d.ts ? new Date(d.ts).toISOString() : new Date().toISOString()
  }));
  await sb.from('progress').upsert(rows, { onConflict: 'user_id,glitch_id' });
}

async function sbMergeToLocal(userId) {
  // Progress: Supabase → localStorage (add missing entries)
  const { data: rows } = await sb.from('progress').select('*').eq('user_id', userId);
  if (rows && rows.length) {
    const local = JSON.parse(localStorage.getItem('tg_progress') || '{}');
    rows.forEach(row => {
      if (!local[row.glitch_id]) {
        local[row.glitch_id] = {
          completed: row.completed,
          correct: row.quiz_answer === 'correct',
          ts: row.completed_at ? new Date(row.completed_at).getTime() : Date.now()
        };
      }
    });
    localStorage.setItem('tg_progress', JSON.stringify(local));
  }

  // Profile: Supabase → localStorage
  const { data: profile } = await sb.from('profiles').select('*').eq('id', userId).single();
  if (profile) {
    const user = JSON.parse(localStorage.getItem('tg_user') || '{}');
    localStorage.setItem('tg_user', JSON.stringify({
      ...user,
      nickname: profile.nickname || user.nickname,
      fullName: profile.full_name || user.fullName,
      gender: profile.gender || user.gender,
      learningStyle: profile.learning_style || user.learningStyle,
    }));
  }
}
