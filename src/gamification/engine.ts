/**
 * LexiQuest Platform — Layer 0: Gamification Engine Implementation
 * Fio condutor transversal do aprendizado com padrões OpenLingo + Duolingo + MANA 3.0
 */

import type {
  PlayerGamificationProfile,
  HeartState,
  StreakState,
  SCurveNode
} from './types.js';

export class GamificationEngine {
  private profile: PlayerGamificationProfile;

  constructor(initialProfile?: Partial<PlayerGamificationProfile>) {
    this.profile = {
      userId: initialProfile?.userId || 'guest-alpha',
      totalXp: initialProfile?.totalXp || 0,
      cefrLevel: initialProfile?.cefrLevel || 'A1.1',
      hearts: initialProfile?.hearts || {
        current: 5,
        max: 5,
        lastRefillTimestamp: new Date().toISOString(),
        freeInstantRefillAvailable: true
      },
      streak: initialProfile?.streak || {
        currentDays: 1,
        longestDays: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        repairAvailable: true,
        repairedThisWeek: false
      },
      crowns: initialProfile?.crowns || {},
      dailyQuest: initialProfile?.dailyQuest || {
        id: 'daily-quest-30xp',
        title: 'Meta Diária: Conquistar 30 XP',
        targetXp: 30,
        currentXp: 0,
        completed: false,
        rewardClaimed: false
      },
      unlockedBadges: initialProfile?.unlockedBadges || [],
      currentUnitId: initialProfile?.currentUnitId || 'unit_1_saudacoes'
    };
  }

  public getProfile(): PlayerGamificationProfile {
    return { ...this.profile };
  }

  /**
   * ❤️ HEARTS SYSTEM:
   * 5 corações por sessão. Erro deduz 1 coração.
   */
  public recordMistake(): { heartsRemaining: number; sessionLocked: boolean; message: string } {
    if (this.profile.hearts.current > 0) {
      this.profile.hearts.current -= 1;
    }

    const sessionLocked = this.profile.hearts.current === 0;

    return {
      heartsRemaining: this.profile.hearts.current,
      sessionLocked,
      message: sessionLocked
        ? '💔 Seus corações acabaram! Use seu Refill Emergencial ou revise cards no FSRS-6 sem perder vidas.'
        : `💔 Você errou! Restam ${this.profile.hearts.current}/5 corações.`
    };
  }

  public useFreeInstantRefill(): boolean {
    if (this.profile.hearts.freeInstantRefillAvailable) {
      this.profile.hearts.current = this.profile.hearts.max;
      this.profile.hearts.freeInstantRefillAvailable = false;
      this.profile.hearts.lastRefillTimestamp = new Date().toISOString();
      return true;
    }
    return false;
  }

  /**
   * ⚡ XP & DAILY QUESTS:
   * Concede XP com suporte a bônus Pure Run (+50%)
   */
  public awardXP(amount: number, isPureRun: boolean = false): { xpAdded: number; newTotal: number; questCompleted: boolean } {
    const finalAmount = isPureRun ? Math.round(amount * 1.5) : amount;
    this.profile.totalXp += finalAmount;
    this.profile.dailyQuest.currentXp += finalAmount;

    let questCompleted = false;
    if (this.profile.dailyQuest.currentXp >= this.profile.dailyQuest.targetXp && !this.profile.dailyQuest.completed) {
      this.profile.dailyQuest.completed = true;
      questCompleted = true;
      this.unlockBadge('daily_quest_master');
    }

    // CEFR sub-levels: 100 XP por sub-nível
    this.updateCefrLevel();

    return {
      xpAdded: finalAmount,
      newTotal: this.profile.totalXp,
      questCompleted
    };
  }

  /**
   * 🔥 STREAKS & REPAIR:
   * Streak de dias com suporte a "Streak Repair" (1 dia perdido não zera)
   */
  public recordDailyActivity(dateStr: string = new Date().toISOString().split('T')[0]): { streakDays: number; repaired: boolean; bossRaidUnlocked: boolean } {
    const lastDate = this.profile.streak.lastActiveDate;
    if (lastDate === dateStr) {
      return {
        streakDays: this.profile.streak.currentDays,
        repaired: false,
        bossRaidUnlocked: this.profile.streak.currentDays >= 21
      };
    }

    const last = new Date(lastDate + 'T00:00:00Z');
    const current = new Date(dateStr + 'T00:00:00Z');
    const diffDays = Math.round((current.getTime() - last.getTime()) / (1000 * 3600 * 24));

    let repaired = false;

    if (diffDays === 1) {
      // Dia consecutivo perfeito
      this.profile.streak.currentDays += 1;
    } else if (diffDays === 2 && this.profile.streak.repairAvailable && !this.profile.streak.repairedThisWeek) {
      // 1 dia perdido → reparo automático ativado!
      this.profile.streak.currentDays += 1;
      this.profile.streak.repairedThisWeek = true;
      this.profile.streak.repairAvailable = false;
      repaired = true;
      this.unlockBadge('streak_shield_used');
    } else if (diffDays > 1) {
      // Streak quebrado
      this.profile.streak.currentDays = 1;
    }

    if (this.profile.streak.currentDays > this.profile.streak.longestDays) {
      this.profile.streak.longestDays = this.profile.streak.currentDays;
    }

    this.profile.streak.lastActiveDate = dateStr;

    // Badges de streak
    if (this.profile.streak.currentDays >= 7) this.unlockBadge('7_day_streak');
    if (this.profile.streak.currentDays >= 21) this.unlockBadge('21_day_boss_raid');

    return {
      streakDays: this.profile.streak.currentDays,
      repaired,
      bossRaidUnlocked: this.profile.streak.currentDays >= 21
    };
  }

  /**
   * 👑 GOLDEN CROWNS:
   * Crown 1: Completou a unidade
   * Crown 2: Acurácia >= 90%
   * Crown 3: 100% de acerto + tempo oral médio < 4.0s (automaticidade estrita do MANA)
   */
  public evaluateUnitCompletion(
    unitId: string,
    accuracyPercent: number,
    averageReactionTimeSec: number
  ): { crownsEarned: 0 | 1 | 2 | 3; xpGranted: number; isMastered: boolean } {
    let crowns: 0 | 1 | 2 | 3 = 1;

    if (accuracyPercent >= 90) {
      crowns = 2;
    }
    if (accuracyPercent === 100 && averageReactionTimeSec < 4.0) {
      crowns = 3;
    }

    const previousCrowns = this.profile.crowns[unitId] || 0;
    if (crowns > previousCrowns) {
      this.profile.crowns[unitId] = crowns;
    }

    const xpGranted = crowns === 3 ? 50 : (crowns === 2 ? 30 : 15);
    this.awardXP(xpGranted);

    if (crowns === 3) {
      this.unlockBadge('golden_crown_master');
    }

    return {
      crownsEarned: crowns,
      xpGranted,
      isMastered: crowns === 3
    };
  }

  /**
   * 🌀 S-CURVE MAP GENERATOR:
   * Converte unidades em espiral de loops visuais com status
   */
  public generateSCurveMap(units: Array<{ id: string; title: string; portalId: number }>): SCurveNode[] {
    return units.map((u, index) => {
      const crowns = this.profile.crowns[u.id] || 0;
      let status: SCurveNode['status'] = 'locked';

      if (crowns === 3) {
        status = 'mastered';
      } else if (crowns > 0) {
        status = 'in_progress';
      } else if (index === 0 || (index > 0 && (this.profile.crowns[units[index - 1].id] || 0) >= 1)) {
        status = 'unlocked';
      }

      return {
        unitId: u.id,
        title: u.title,
        portalId: u.portalId,
        loopIndex: Math.floor(index / 3) + 1,
        order: index + 1,
        status,
        crowns
      };
    });
  }

  private unlockBadge(badgeId: string): void {
    if (!this.profile.unlockedBadges.includes(badgeId)) {
      this.profile.unlockedBadges.push(badgeId);
    }
  }

  private updateCefrLevel(): void {
    const xp = this.profile.totalXp;
    if (xp < 100) this.profile.cefrLevel = 'A1.1';
    else if (xp < 250) this.profile.cefrLevel = 'A1.2';
    else if (xp < 450) this.profile.cefrLevel = 'A1.3';
    else if (xp < 750) this.profile.cefrLevel = 'A2.1';
    else if (xp < 1100) this.profile.cefrLevel = 'A2.2';
    else if (xp < 1600) this.profile.cefrLevel = 'B1.1';
    else if (xp < 2200) this.profile.cefrLevel = 'B1.2';
    else if (xp < 3000) this.profile.cefrLevel = 'B2.1';
    else if (xp < 4000) this.profile.cefrLevel = 'B2.2';
    else if (xp < 6000) this.profile.cefrLevel = 'C1';
    else this.profile.cefrLevel = 'C2';
  }
}
