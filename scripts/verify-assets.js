import fs from 'fs';

const content = fs.readFileSync('src/pages/index.astro', 'utf8');
const regex = /src="\/([^"]+)"/g;
let match;
const matches = [];
while ((match = regex.exec(content)) !== null) {
  matches.push(match[1]);
}
console.log('Total src attributes found:', matches.length);
let allOk = true;
matches.forEach(m => {
  const decoded = decodeURIComponent(m);
  const existsNormal = fs.existsSync('public/' + m);
  const existsDecoded = fs.existsSync('public/' + decoded);
  if (existsNormal || existsDecoded) {
    console.log('[OK]', m);
  } else {
    console.log('[MISSING]', m);
    allOk = false;
  }
});
if (allOk) {
  console.log('ALL ASSETS VERIFIED SUCCESSFULLY!');
} else {
  console.error('SOME ASSETS ARE MISSING!');
  process.exit(1);
}
