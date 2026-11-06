import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

console.log('HTML Length:', html.length);

const sections = [];
const regex = /<section[^>]*class=["']([^"']*)["'][^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  sections.push(match[1]);
}
console.log('Sections:', sections);

const h2s = [];
const h2regex = /<h2[^>]*>(.*?)<\/h2>/g;
while ((match = h2regex.exec(html)) !== null) {
  h2s.push(match[1].replace(/<[^>]+>/g, '').trim());
}
console.log('H2 Headings:', h2s);
