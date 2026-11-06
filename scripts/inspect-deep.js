import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

function extractBlock(tag, className) {
  const reg = new RegExp(`<${tag}[^>]*class=["'][^"']*${className}[^"']*["'][^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = html.match(reg);
  return m ? m[0] : null;
}

console.log('--- NAVBAR ---');
const nav = html.match(/<div class="navbar">([\s\S]*?)<\/div><\/div><\/div>/);
if (nav) console.log(nav[0].substring(0, 500));

console.log('\n--- HERO ---');
const hero = html.match(/<section class="home-hero">([\s\S]*?)<\/section>/);
if (hero) console.log(hero[0].substring(0, 800));

console.log('\n--- STATE (Comparison) ---');
const state = html.match(/<section class="state">([\s\S]*?)<\/section>/);
if (state) console.log(state[0]);

console.log('\n--- CTA ---');
const cta = html.match(/<section class="cta">([\s\S]*?)<\/section>/);
if (cta) console.log(cta[0].substring(0, 800));
