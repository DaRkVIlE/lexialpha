/**
 * audio.ts — Howler.js SFX Integration
 * Apex Squad | @motion-eng (Matt) — audio feedback system
 *
 * ⚡ Addy (@perf-eng): Loaded lazily (import from client script only, not SSR).
 * 🔇 Default: MUTED on first load. User must click audio toggle to enable.
 * 📁 Placeholder paths: Gabe adds actual .mp3 files to /public/sounds/ later.
 */

import { Howl } from 'howler';

let isMuted = true; // Default: silent on load (respects user expectations)

const sounds = {
  quizComplete: new Howl({
    src: ['/sounds/quiz-complete.mp3'],
    volume: 0.6,
    preload: false,
  }),
  portalHover: new Howl({
    src: ['/sounds/portal-hover.mp3'],
    volume: 0.25,
    preload: false,
  }),
  quizStep: new Howl({
    src: ['/sounds/quiz-step.mp3'],
    volume: 0.3,
    preload: false,
  }),
};

export function playSound(name: keyof typeof sounds): void {
  if (isMuted) return;
  const sound = sounds[name];
  if (sound) sound.play();
}

export function toggleMute(): boolean {
  isMuted = !isMuted;
  return isMuted;
}

export function isSoundMuted(): boolean {
  return isMuted;
}

export function initAudioToggle(): void {
  const btn = document.getElementById('audio-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const muted = toggleMute();
    btn.setAttribute('aria-label', muted ? 'Ativar som' : 'Silenciar');
    btn.innerHTML = muted ? '🔇' : '🔊';
    btn.title = muted ? 'Ativar som' : 'Silenciar';
    if (!muted) {
      // Preload on first unmute
      Object.values(sounds).forEach((s) => s.load());
    }
  });
}

// Portal card hover SFX
export function attachPortalHoverSFX(): void {
  document.querySelectorAll('.anim-portal-card').forEach((card) => {
    card.addEventListener('mouseenter', () => playSound('portalHover'));
  });
}
