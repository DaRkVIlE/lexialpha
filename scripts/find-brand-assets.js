import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.astro' || file === 'my-aida-agents-hub') continue;
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        results = results.concat(walk(full));
      } else if (/\.(png|jpg|jpeg|webp|svg)$/i.test(file)) {
        results.push(full);
      }
    }
  } catch (e) {}
  return results;
}

const landingAssets = walk('public');
console.log('=== PUBLIC ASSETS ===');
console.log(landingAssets.map(f => path.relative('public', f)));

const lexiquestAssets = walk('..');
console.log('=== LEXIQUEST ROOT ASSETS ===');
console.log(lexiquestAssets.filter(f => !f.includes('landing')).map(f => path.relative('..', f)));
