const fs = require('fs');

console.log('Injecting official LexiQuest logos into build-synthetic-lexiquest.cjs...');

let content = fs.readFileSync('landing/scripts/build-synthetic-lexiquest.cjs', 'utf8');

// 1. Update favicon link in <head>
content = content.replace(
  '<link rel="icon" type="image/svg+xml" href="/favicon.svg">',
  '<link rel="icon" type="image/png" href="/favicon.png">\n  <link rel="apple-touch-icon" href="/favicon.png">'
);

// 2. Replace Header Navbar Logo placeholder with official wordmark
const oldNavLogo = `<a href="#" class="logo_container w-inline-block" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
            <div style="width: 14px; height: 14px; border-radius: 3px; background: #58f27f; box-shadow: 0 0 10px #58f27f;"></div>
            <span style="font-family: var(--font-mono); font-weight: 700; font-size: 18px; letter-spacing: -0.02em; color: #ffffff;">LEXIQUEST</span>
          </a>`;

const newNavLogo = `<a href="#" class="logo_container w-inline-block" style="text-decoration: none; display: flex; align-items: center; transition: opacity 0.2s;">
            <img src="/synthetic/images/lexiquest_logo_white.png" alt="LexiQuest Official Logo" style="height: 32px; width: auto; display: block; filter: drop-shadow(0 0 12px rgba(88,242,127,0.2));">
          </a>`;

content = content.replace(oldNavLogo, newNavLogo);

// 3. In Footer, add the official logo above the description
const oldFooterHeading = `<div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: #ffffff; margin-bottom: 8px;">LexiQuest Turma Alpha</div>`;

const newFooterHeading = `<div style="margin-bottom: 12px;">
                <img src="/synthetic/images/lexiquest_logo_white.png" alt="LexiQuest" style="height: 26px; width: auto; display: block;">
              </div>
              <div style="font-family: var(--font-mono); font-size: 13px; font-weight: 600; color: #58f27f; margin-bottom: 8px;">TURMA ALPHA // PILOTO 2026</div>`;

content = content.replace(oldFooterHeading, newFooterHeading);

fs.writeFileSync('landing/scripts/build-synthetic-lexiquest.cjs', content, 'utf8');
console.log('Successfully injected official logos into build-synthetic-lexiquest.cjs!');
