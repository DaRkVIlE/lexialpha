/**
 * LexiQuest Platform — Layer 3: Practice Surfaces & FSRS-6 Types
 */

import type { Card } from 'ts-fsrs';

export interface LexicalChunkCard {
  id: string;
  chunk: string;
  portugueseTranslation: string;
  contextSentence: string;
  portalId: number;
  fsrsCard: Card;
  mastered: boolean;
  lastReactionTimeSeconds?: number;
}

export interface SentenceBuilderToken {
  id: string;
  text: string;
  isCorrectOrder: number;
}

export interface SentenceBuilderExercise {
  id: string;
  promptPortuguese: string;
  expectedEnglish: string;
  tokens: SentenceBuilderToken[];
  recastExplanation: string;
}

export interface PrepositionDrillItem {
  id: string;
  sentenceWithBlank: string; // Ex: "I'm interested ___ learning English"
  correctPreposition: string; // "in"
  options: string[]; // ["in", "on", "at", "for"]
  recastChunk: string; // "interested in"
}
