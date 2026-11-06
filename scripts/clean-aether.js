import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

// Function to dump clean HTML without the review bridge or extra scripts
function cleanHtml(str) {
  return str
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/style="[^"]*"/gi, '')
    .replace(/data-wf-target="[^"]*"/gi, '');
}

fs.writeFileSync('scripts/aether-dump.html', cleanHtml(html));
console.log('Saved scripts/aether-dump.html');
