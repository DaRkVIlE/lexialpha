/**
 * LexiQuest Layer 2: Exercise Engine Types (LibreLingo YAML Schema)
 * Regras estritas: Método MANA 3.0 + Recasting Natural.
 */

export type ExerciseType = 'matching' | 'sentence_builder' | 'fill_in' | 'listening' | 'speaking';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  instruction: string;
  xp_value?: number;
  recast_rule?: string; // Regra de recasting natural associada (sem caneta vermelha)
}

export interface MatchingPair {
  prompt: string;
  target: string;
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface SentenceBuilderExercise extends BaseExercise {
  type: 'sentence_builder';
  target_sentence: string;
  tokens: string[];
  distractors?: string[];
  recast_feedback?: string; // Frase natural oferecida pelo tutor se o aluno montar forma não-idiomática
}

export interface FillInExercise extends BaseExercise {
  type: 'fill_in';
  sentence: string; // Ex: "Don't worry, ___."
  missing: string;
  hints?: string[];
}

export interface ListeningOption {
  text: string;
  correct: boolean;
}

export interface ListeningExercise extends BaseExercise {
  type: 'listening';
  audio_asset?: string;
  options: ListeningOption[];
}

export interface SpeakingExercise extends BaseExercise {
  type: 'speaking';
  target_phrase: string;
  phonetic_guide?: string;
  acceptable_variations?: string[];
}

export type Exercise = 
  | MatchingExercise 
  | SentenceBuilderExercise 
  | FillInExercise 
  | ListeningExercise 
  | SpeakingExercise;

export interface CourseUnit {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  order: number;
  xp_reward: number;
  crowns_available: number;
  exercises: Exercise[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  version: string;
  target_level: string;
  units: CourseUnit[];
}

/**
 * Interface de Contrato para a Layer 1 (LearnHouse Block Activity)
 */
export interface LearnHouseBlockActivity {
  id: string;
  title: string;
  type: 'interactive_quiz' | 'custom_practice';
  config: {
    engine: 'lexiquest_librelingo';
    exercises: Exercise[];
    xp_reward: number;
    completion_criteria: {
      min_accuracy: number;
      max_attempts: number;
    };
  };
}
