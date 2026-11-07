const fs = require('fs');

console.log('Injecting Nano Banana images into build-synthetic-lexiquest.cjs...');

let content = fs.readFileSync('landing/scripts/build-synthetic-lexiquest.cjs', 'utf8');

// 1. In Portal 1 card, add bossraid_portal1.jpg
if (!content.includes('bossraid_portal1.jpg')) {
  content = content.replace(
    '<h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">O Descongelamento</h3>',
    '<div style="border-radius: 6px; overflow: hidden; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.08);"><img src="/synthetic/images/bossraid_portal1.jpg" alt="Boss Raid Portal 1 - Aeroporto JFK" style="width: 100%; height: 130px; object-fit: cover; display: block;"></div>\n              <h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">O Descongelamento</h3>'
  );
}

// 2. In Portal 2 card, add cap1_cafeteria.jpg
if (!content.includes('cap1_cafeteria.jpg')) {
  content = content.replace(
    '<h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">A Travessia</h3>',
    '<div style="border-radius: 6px; overflow: hidden; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.08);"><img src="/synthetic/images/cap1_cafeteria.jpg" alt="Boss Raid Portal 2 - Cafeteria & Viagens" style="width: 100%; height: 130px; object-fit: cover; display: block;"></div>\n              <h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">A Travessia</h3>'
  );
}

// 3. In Portal 3 card, add bossraid_portal3.jpg
if (!content.includes('bossraid_portal3.jpg')) {
  content = content.replace(
    '<h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">O Território</h3>',
    '<div style="border-radius: 6px; overflow: hidden; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.08);"><img src="/synthetic/images/bossraid_portal3.jpg" alt="Boss Raid Portal 3 - Pub no Brooklyn" style="width: 100%; height: 130px; object-fit: cover; display: block;"></div>\n              <h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">O Território</h3>'
  );
}

// 4. In Portal 4 card, add bossraid_portal4.jpg
if (!content.includes('bossraid_portal4.jpg')) {
  content = content.replace(
    '<h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">O Domínio</h3>',
    '<div style="border-radius: 6px; overflow: hidden; margin-bottom: 14px; border: 1px solid rgba(255,255,255,0.08);"><img src="/synthetic/images/bossraid_portal4.jpg" alt="Boss Raid Portal 4 - Pitch Executivo" style="width: 100%; height: 130px; object-fit: cover; display: block;"></div>\n              <h3 class="how_it_works_item-heading" style="font-size: 20px; color: #ffffff;">O Domínio</h3>'
  );
}

// 5. In Section 4 (Método SPARK), add the neural graphic cap2_metodo.jpg
if (!content.includes('cap2_metodo.jpg')) {
  content = content.replace(
    '<!-- VISUAL SPEC COMPONENT 2: THE SPARK KINETIC LOOP DIAGRAM -->',
    '<!-- VISUAL SPEC COMPONENT 2: THE SPARK KINETIC LOOP & NEURAL COGNITION -->\n            <div style="margin-bottom: 16px; border-radius: 8px; overflow: hidden; border: 1px solid var(--_globals---colors--color-600); box-shadow: 0 10px 30px rgba(0,0,0,0.4);"><img src="/synthetic/images/cap2_metodo.jpg" alt="Mapeamento Neural Método SPARK" style="width: 100%; height: auto; display: block;"></div>'
  );
}

// 6. In Portal 0, add portal_opening.jpg as decorative header banner
if (!content.includes('portal_opening.jpg')) {
  content = content.replace(
    '<div class="display-subtitle" style="color: #58f27f;">Portal 0 · O Prólogo</div>',
    '<div style="border-radius: 8px; overflow: hidden; margin-bottom: 20px; border: 1px solid rgba(88,242,127,0.3); max-height: 180px;"><img src="/synthetic/images/portal_opening.jpg" alt="Portal 0 - A Entrada dos Portais" style="width: 100%; height: 180px; object-fit: cover; display: block;"></div>\n            <div class="display-subtitle" style="color: #58f27f;">Portal 0 · O Prólogo</div>'
  );
}

// 7. In Section 7 (Conheça a AIDA Companion), replace cap3_reuniao.jpg with Gabe in the recording studio with Shure mic
content = content.replace(
  '<img src="/synthetic/images/cap3_reuniao.jpg" alt="AIDA Companion em Ação"',
  '<img src="/synthetic/images/cap3_reuniao.jpg" alt="Sessões de Voz e Acompanhamento Gabe"'
);

fs.writeFileSync('landing/scripts/build-synthetic-lexiquest.cjs', content, 'utf8');
console.log('Successfully updated build-synthetic-lexiquest.cjs with all Nano Banana artwork!');
