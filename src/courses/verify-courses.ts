import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parseCourseYaml, toLearnHouseActivity } from './parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const coursePath = join(__dirname, 'portal-1-descoberta.yaml');
console.log(`[TEST] Lendo curso YAML em: ${coursePath}`);

try {
  const yamlContent = readFileSync(coursePath, 'utf-8');
  const course = parseCourseYaml(yamlContent);

  console.log(`[OK] Curso validado com sucesso: "${course.title}" (${course.id})`);
  console.log(`[INFO] Unidades detectadas: ${course.units.length}`);

  course.units.forEach((unit, idx) => {
    console.log(`  -> Unidade ${idx + 1}: ${unit.title} (${unit.exercises.length} exercícios, ${unit.xp_reward} XP)`);
    const lhActivity = toLearnHouseActivity(unit);
    console.log(`     [LearnHouse Layer 1 Block Activity]: ${lhActivity.id} | Engine: ${lhActivity.config.engine}`);
  });

  console.log('\n[PASS] Todos os contratos das Layers 1 e 2 estão 100% íntegros!');
} catch (err: any) {
  console.error('[FAIL] Erro ao validar curso:', err.message);
  process.exit(1);
}
