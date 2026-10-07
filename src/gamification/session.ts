/**
 * LexiQuest Platform — Gamification Event Bus
 * Conecta os eventos dos componentes de prática ao GamificationEngine
 * Persiste o perfil do aluno em localStorage (offline-first, IndexedDB-ready)
 */

import { GamificationEngine } from '../gamification/engine.js';
import { KairosAIRouter } from '../ai/kairos-router.js';
import type { PlayerGamificationProfile } from '../gamification/types.js';

const STORAGE_KEY = 'lexiquest_player_profile';

export class LexiQuestSession {
  private engine: GamificationEngine;

  constructor() {
    const savedProfile = this.loadProfile();
    this.engine = new GamificationEngine(savedProfile || undefined);

    // Registrar atividade do dia
    this.engine.recordDailyActivity();

    // Escutar eventos dos componentes de prática
    window.addEventListener('lexiquest:exercise-result', (e: Event) => {
      const ev = e as CustomEvent;
      this.handleExerciseResult(ev.detail);
    });
  }

  private handleExerciseResult(detail: {
    exerciseId: string;
    isCorrect: boolean;
    accuracy?: number;
    reactionTime?: number;
    xpEarned: number;
  }) {
    const profile = this.engine.getProfile();
    const { isCorrect, reactionTime = 0, xpEarned } = detail;

    // Gamification: Hearts & XP
    if (!isCorrect) {
      const heartResult = this.engine.recordMistake();
      if (heartResult.sessionLocked) {
        this.notifySessionLocked();
        return;
      }
    }

    if (xpEarned > 0) {
      const xpResult = this.engine.awardXP(xpEarned, reactionTime < 4.0);
      this.updateHUD(xpResult.newTotal, xpResult.questCompleted);
    }

    // Layer 4: Recasting Natural se errou
    if (!isCorrect && profile.currentUnitId) {
      const recastCtx = KairosAIRouter.generateRecastingContext(
        1, // portalId do chunk errado
        detail.exerciseId,
        '(resposta do aluno)',
        '(forma correta — contextual)'
      );
      this.emitRecastingSuggestion(recastCtx.targetPersona.name, recastCtx.starterPrompt);
    }

    // Persistir
    this.saveProfile();
    this.refreshHeartsDisplay();
  }

  private updateHUD(totalXp: number, questCompleted: boolean) {
    const xpEl = document.getElementById('lq-hud-xp');
    if (xpEl) {
      xpEl.textContent = `${totalXp} XP`;
      xpEl.animate([{ transform: 'scale(1.2)' }, { transform: 'scale(1)' }], { duration: 300 });
    }
    if (questCompleted) {
      this.showToast('🎯 Daily Quest Completada! +30 XP Bônus!', 'emerald');
    }
  }

  private refreshHeartsDisplay() {
    const profile = this.engine.getProfile();
    const heartsEl = document.getElementById('lq-hud-hearts');
    if (heartsEl) {
      heartsEl.innerHTML = Array(5).fill(0).map((_, i) =>
        `<span class="${i < profile.hearts.current ? 'text-rose-400' : 'text-slate-700'}">♥</span>`
      ).join('');
    }
  }

  private notifySessionLocked() {
    this.showToast('💔 Seus corações acabaram! Use o Refill Grátis ou aguarde a meia-noite.', 'rose');
  }

  private emitRecastingSuggestion(personaName: string, prompt: string) {
    const event = new CustomEvent('lexiquest:recasting-suggestion', {
      detail: { personaName, prompt }
    });
    window.dispatchEvent(event);
  }

  private showToast(message: string, color: 'emerald' | 'rose' | 'amber') {
    const toast = document.createElement('div');
    const colors = {
      emerald: 'bg-emerald-950 border-emerald-500/40 text-emerald-300',
      rose: 'bg-rose-950 border-rose-500/40 text-rose-300',
      amber: 'bg-amber-950 border-amber-500/40 text-amber-300'
    };
    toast.className = `fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border text-sm font-semibold shadow-2xl ${colors[color]}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; }, 2800);
    setTimeout(() => toast.remove(), 3200);
  }

  private loadProfile(): Partial<PlayerGamificationProfile> | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  private saveProfile() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.engine.getProfile()));
    } catch { /* Silencioso em ambientes sem localStorage */ }
  }

  public getEngine(): GamificationEngine {
    return this.engine;
  }
}

// Inicialização automática quando carregado no browser
if (typeof window !== 'undefined') {
  (window as any).lexiQuestSession = new LexiQuestSession();
}
