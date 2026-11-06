import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== .workflow-wrap full inner HTML ===');
console.log($('.workflow-wrap').html()?.slice(0, 1500));

console.log('=== .feature-tabs full inner HTML ===');
console.log($('.feature-tabs').html()?.slice(0, 1500));
