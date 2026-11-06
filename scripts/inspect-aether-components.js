import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== .features inner structure ===');
console.log($('.features').html()?.slice(0, 800));

console.log('=== .work-flow inner structure ===');
console.log($('.work-flow').html()?.slice(0, 800));
