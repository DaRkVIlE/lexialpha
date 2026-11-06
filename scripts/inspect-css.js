import fs from 'node:fs';

const css = fs.readFileSync('c:/Users/Usuario/Downloads/landing page - playpp inspiratins_files/aether-template.webflow.shared.90486b0b1.css', 'utf-8');

console.log('CSS Length:', css.length);

// Extract root variables
const rootVars = css.match(/:root\s*\{[^}]*\}/s);
if (rootVars) {
  console.log('--- Root CSS Variables ---');
  console.log(rootVars[0]);
}

// Extract body styles
const bodyMatch = css.match(/body\s*\{[^}]*\}/s);
if (bodyMatch) {
  console.log('--- Body styles ---');
  console.log(bodyMatch[0]);
}

// Find key utility / component classes
const classNames = [...css.matchAll(/\.([a-zA-Z0-9_-]+)\s*\{/g)].map(m => m[1]);
const uniqueClasses = [...new Set(classNames)];
console.log('Total unique classes:', uniqueClasses.length);
console.log('Sample classes:', uniqueClasses.slice(0, 50));
