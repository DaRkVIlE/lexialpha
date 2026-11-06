import fs from 'node:fs';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf-8');

// Find navbar
const navStart = html.indexOf('<div class="navbar">');
const heroStart = html.indexOf('<section class="home-hero">');

console.log('--- NAVBAR HTML ---');
console.log(html.substring(navStart, heroStart));
