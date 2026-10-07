/**
 * LexiQuest Platform — Layer 0: Gamification Engine Types
 * Baseado nos padrões do OpenLingo (maxwell1500) + Duolingo + Blueprint LexiQuest
 */

export interface HeartState {
  current: number; // 0 a 5
  max: number; // 5
  lastRefillTimestamp: string;
  freeInstantRefillAvailable: boolean; // 1 refill grátis emergencial
}

export interface StreakState {
  currentDays: number;
  longestDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  repairAvailable: boolean; // 1 reparo por semana
  repairedThisWeek: boolean;
}

export interface GoldenCrowns {
  unitId: string;
  crowns: 0 | 1 | 2 | 3;
  // Crown 1: Completar a unidade
  // Crown 2: Acurácia >= 90%
  // Crown 3: 100% de acerto + tempo oral < média (automaticidade)
}

export interface DailyQuest {
  id: string;
  title: string;
  targetXp: number; // Ex: 30 XP
  currentXp: number;
  completed: boolean;
  rewardClaimed: boolean;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface SCurveNode {
  unitId: string;
  title: string;
  portalId: number;
  loopIndex: number;
  order: number;
  status: 'locked' | 'unlocked' | 'in_progress' | 'mastered';
  crowns: 0 | 1 | 2 | 3;
}

export interface PlayerGamificationProfile {
  userId: string | number;
  totalXp: number;
  cefrLevel: 'A1.1' | 'A1.2' | 'A1.3' | 'A2.1' | 'A2.2' | 'B1.1' | 'B1.2' | 'B2.1' | 'B2.2' | 'C1' | 'C2';
  hearts: HeartState;
  streak: StreakState;
  crowns: Record<string, 0 | 1 | 2 | 3>;
  dailyQuest: DailyQuest;
  unlockedBadges: string[];
  currentUnitId: string;
}
