import fs from 'fs';

function getJpgSize(path) {
  const buf = fs.readFileSync(path);
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xFF) break;
    const marker = buf[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buf.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

const files = [
  'cover_hero.jpg',
  'cap1_problema.jpg',
  'cap2_metodo.jpg',
  'cap3_preparacao.jpg',
  'dia1_diagnostico.jpg',
  'dia2_cafeteria.jpg',
  'dia4_fluencia.jpg'
];

files.forEach(f => {
  const size = getJpgSize('public/assets/' + f);
  console.log(f, size);
});
