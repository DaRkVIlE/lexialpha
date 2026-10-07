import { parse } from 'yaml';
import type { Course, CourseUnit, Exercise, LearnHouseBlockActivity } from './types.js';

export class CourseValidationError extends Error {
  public errors: string[];
  constructor(errors: string[]) {
    super(`Course validation failed: ${errors.join(', ')}`);
    this.name = 'CourseValidationError';
    this.errors = errors;
  }
}

/**
 * Validador estrito de integridade pedagógica e técnica do curso YAML
 */
export function validateCourse(course: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!course || typeof course !== 'object') {
    return { valid: false, errors: ['Course definition must be an object'] };
  }

  if (!course.id || typeof course.id !== 'string') {
    errors.push('Course must have a valid string "id"');
  }
  if (!course.title || typeof course.title !== 'string') {
    errors.push('Course must have a valid string "title"');
  }
  if (!Array.isArray(course.units) || course.units.length === 0) {
    errors.push('Course must contain at least one unit in "units" array');
  } else {
    course.units.forEach((unit: any, uIdx: number) => {
      if (!unit.id) errors.push(`Unit at index ${uIdx} missing "id"`);
      if (!unit.title) errors.push(`Unit at index ${uIdx} missing "title"`);
      if (!Array.isArray(unit.exercises) || unit.exercises.length === 0) {
        errors.push(`Unit "${unit.id || uIdx}" must contain at least one exercise`);
      } else {
        unit.exercises.forEach((ex: any, eIdx: number) => {
          if (!ex.id) errors.push(`Exercise at unit ${unit.id}[${eIdx}] missing "id"`);
          if (!ex.type) errors.push(`Exercise at unit ${unit.id}[${eIdx}] missing "type"`);
          
          if (ex.type === 'matching' && (!Array.isArray(ex.pairs) || ex.pairs.length === 0)) {
            errors.push(`Matching exercise "${ex.id}" must contain pairs`);
          }
          if (ex.type === 'sentence_builder' && (!ex.target_sentence || !Array.isArray(ex.tokens))) {
            errors.push(`Sentence builder exercise "${ex.id}" requires target_sentence and tokens`);
          }
          if (ex.type === 'fill_in' && (!ex.sentence || !ex.missing)) {
            errors.push(`Fill-in exercise "${ex.id}" requires sentence and missing`);
          }
        });
      }
    });
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Realiza o parse de uma string YAML e valida sua tipagem como Course
 */
export function parseCourseYaml(yamlContent: string): Course {
  const raw = parse(yamlContent);
  const validation = validateCourse(raw);
  if (!validation.valid) {
    throw new CourseValidationError(validation.errors);
  }
  return raw as Course;
}

/**
 * Converte uma Unit do LibreLingo para o formato de bloco de atividade do LearnHouse (Layer 1)
 */
export function toLearnHouseActivity(unit: CourseUnit): LearnHouseBlockActivity {
  return {
    id: `lh_act_${unit.id}`,
    title: unit.title,
    type: 'interactive_quiz',
    config: {
      engine: 'lexiquest_librelingo',
      exercises: unit.exercises,
      xp_reward: unit.xp_reward || 30,
      completion_criteria: {
        min_accuracy: 0.8,
        max_attempts: 3
      }
    }
  };
}
