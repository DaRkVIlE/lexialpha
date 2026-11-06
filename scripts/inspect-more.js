import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

function showSection(name) {
  const reg = new RegExp(`<section[^>]*class=["'][^"']*${name}[^"']*["'][^>]*>([\\s\\S]*?)<\\/section>`, 'i');
  const m = html.match(reg);
  if (m) {
    console.log(`\n========================================`);
    console.log(`SECTION: ${name}`);
    console.log(`========================================`);
    console.log(m[0].substring(0, 1500));
  }
}

showSection('features');
showSection('work-flow');
showSection('cta');
showSection('footer-outer');
