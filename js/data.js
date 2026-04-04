/* ============================================
   Tiny Glitch — Content Loader
   Loads glitches from /glitches/*.md files
   ============================================ */

let CATEGORIES = [];
let TOPICS = {};
let MISSIONS = [];
let GLITCHES = [];

function parseFrontmatter(text) {
  const result = {};
  for (const line of text.split('\n')) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) result[match[1]] = match[2].trim();
  }
  return result;
}

function parseMd(text) {
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return null;

  const frontmatter = parseFrontmatter(fmMatch[1]);
  const fullBody = fmMatch[2].trim();

  // Split off deepdive section (after +++)
  const deepdiveSplit = fullBody.split(/\n\+\+\+\n/);
  const body = deepdiveSplit[0].trim();
  const deepdiveRaw = deepdiveSplit[1] ? deepdiveSplit[1].trim() : null;

  const paragraphs = body.split(/\n\n+/);
  const chat = [];

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;
    const lines = trimmed.split('\n');

    if (lines[0].startsWith('? ')) {
      const question = lines[0].slice(2).trim();
      const options = [];
      let correct = 0;
      let explanation = '';

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('* ')) {
          correct = options.length;
          options.push(line.slice(2).trim());
        } else if (line.startsWith('- ')) {
          options.push(line.slice(2).trim());
        } else if (line.startsWith('! ')) {
          explanation = line.slice(2).trim();
        }
      }

      chat.push({ quiz: { question, options, correct, explanation } });
    } else {
      chat.push({ bot: trimmed.replace(/\n/g, ' ') });
    }
  }

  // Parse deepdive into paragraphs
  const deepdive = deepdiveRaw
    ? deepdiveRaw.split(/\n\n+/).map(p => p.trim()).filter(Boolean)
    : null;

  return { id: frontmatter.id, topic: frontmatter.topic, title: frontmatter.title, teaser: frontmatter.teaser, hook: frontmatter.hook || null, chat, deepdive };
}

async function loadGlitches() {
  const resp = await fetch('glitches/index.json');
  const index = await resp.json();

  CATEGORIES = index.categories || [];
  TOPICS = index.topics;
  MISSIONS = index.missions;

  GLITCHES = await Promise.all(
    index.glitches.map(async filename => {
      const r = await fetch('glitches/' + filename);
      const text = await r.text();
      return parseMd(text);
    })
  );
}
