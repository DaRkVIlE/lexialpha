import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

// Section detail inspector
const sectionRegex = /<section[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/section>/g;
let match;
let idx = 1;
while ((match = sectionRegex.exec(html)) !== null) {
  const cls = match[1];
  const inner = match[2];
  console.log(`\n========================================`);
  console.log(`SECTION ${idx}: .${cls} (${inner.length} chars)`);
  console.log(`========================================`);

  // First 500 chars of inner
  console.log(inner.substring(0, 600).replace(/\s+/g, ' '));
  idx++;
}
