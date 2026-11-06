import fs from 'node:fs';

const css = fs.readFileSync('src/styles/aether.css', 'utf-8');

function extractClass(className) {
  const reg = new RegExp(`\\.${className}\\s*\\{[^}]*\\}`, 'g');
  const m = css.match(reg);
  console.log(`\n.${className}:`, m ? m.slice(0, 3).join('\n') : 'NOT FOUND');
}

extractClass('navbar');
extractClass('home-hero');
extractClass('h-01');
extractClass('h-02');
extractClass('service-card');
extractClass('state-card');
extractClass('state-details-row');
extractClass('cta');
extractClass('footer-outer');
