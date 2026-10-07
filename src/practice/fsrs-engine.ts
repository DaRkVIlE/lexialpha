/**
 * LexiQuest Platform — Layer 3: FSRS-6 Spaced Repetition Engine
 * Utiliza o algoritmo Free Spaced Repetition Scheduler v6 via ts-fsrs
 * Integrado à métrica de automaticidade oral do Método MANA (< 4.0s)
 */

import { fsrs, generatorParameters, createEmptyCard, Rating } from 'ts-fsrs';
import type { Card, FSRSParameters } from 'ts-fsrs';
import type { LexicalChunkCard } from './types.js';

export class FSRSPracticeEngine {
  private f: ReturnType<typeof fsrs>;
  private cards: Map<string, LexicalChunkCard> = new Map();

  constructor(customParams?: Partial<FSRSParameters>) {
    const params = generatorParameters({
      enable_fuzz: true,
      request_retention: 0.9,
      ...customParams
    });
    this.f = fsrs(params);
  }

  public registerChunkCard(
    id: string,
    chunk: string,
    portugueseTranslation: string,
    contextSentence: string,
    portalId: number = 1
  ): LexicalChunkCard {
    const cardItem: LexicalChunkCard = {
      id,
      chunk,
      portugueseTranslation,
      contextSentence,
      portalId,
      fsrsCard: createEmptyCard(new Date()),
      mastered: false
    };

    this.cards.set(id, cardItem);
    return cardItem;
  }

  public getDueCards(now: Date = new Date()): LexicalChunkCard[] {
    const due: LexicalChunkCard[] = [];
    for (const card of this.cards.values()) {
      if (new Date(card.fsrsCard.due) <= now) {
        due.push(card);
      }
    }
    return due;
  }

  /**
   * Avalia a resposta do aluno mapeando a velocidade oral (<4s) no FSRS Rating:
   * - Erro total = Rating.Again
   * - Correto mas lento (> 4.0s) = Rating.Hard (o cérebro ainda está traduzindo!)
   * - Correto em tempo normal (2.0s a 4.0s) = Rating.Good
   * - Correto ultrarrápido (< 2.0s) = Rating.Easy (automaticidade pura)
   */
  public reviewCard(
    cardId: string,
    isCorrect: boolean,
    reactionTimeSeconds: number,
    reviewTime: Date = new Date()
  ): { updatedCard: LexicalChunkCard; rating: Rating; nextDue: Date; isMastered: boolean } {
    const cardItem = this.cards.get(cardId);
    if (!cardItem) {
      throw new Error(`Card ${cardId} não encontrado no motor FSRS.`);
    }

    let rating: Rating = Rating.Again;
    if (isCorrect) {
      if (reactionTimeSeconds < 2.0) {
        rating = Rating.Easy;
      } else if (reactionTimeSeconds < 4.0) {
        rating = Rating.Good;
      } else {
        rating = Rating.Hard; // Correto, mas com atrito de tradução
      }
    }

    // Calcula o próximo agendamento FSRS-6
    const schedulingCards = this.f.repeat(cardItem.fsrsCard, reviewTime);
    const item = schedulingCards[rating];

    cardItem.fsrsCard = item.card;
    cardItem.lastReactionTimeSeconds = reactionTimeSeconds;
    cardItem.mastered = item.card.stability >= 21 && reactionTimeSeconds < 4.0;

    return {
      updatedCard: cardItem,
      rating,
      nextDue: new Date(item.card.due),
      isMastered: cardItem.mastered
    };
  }

  public getAllCards(): LexicalChunkCard[] {
    return Array.from(this.cards.values());
  }
}
