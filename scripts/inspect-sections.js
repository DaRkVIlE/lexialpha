import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

// Match all sections and their contents
const sectionRegex = /<section[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/section>/g;
let match;
let i = 1;
while ((match = sectionRegex.exec(html)) !== null) {
  const className = match[1];
  const inner = match[2];
  
  // Find h1, h2, h3, tag-box
  const titles = [...inner.matchAll(/<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/g)].map(m => `${m[1]}: ${m[2].replace(/<[^>]+>/g, '').trim().substring(0, 80)}`);
  const tags = [...inner.matchAll(/class=["'][^"']*tag[^"']*["'][^>]*>([\s\S]*?)<\/div>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  console.log(`\n=== Section ${i++}: .${className} ===`);
  console.log('Titles:', titles);
  console.log('Tags:', tags.filter(t => t.length > 0 && t.length < 50));
}
