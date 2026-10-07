/**
 * animations.ts — GSAP ScrollTrigger Animation System
 * Apex Squad | @motion-eng (Matt) + @a11y-eng (Sara)
 *
 * ♿ Sara (@a11y-eng) VETO: ALL animations gated behind prefers-reduced-motion check.
 * ⚡ Addy (@perf-eng) NOTE: GSAP is loaded client-side only (no SSR). Tree-shaken via named imports.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ♿ Sara (@a11y-eng) — Mandatory reduced-motion gate (VETO condition)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initAnimations(): void {
  if (prefersReducedMotion) {
    // Still make everything visible — no animation, just instant display
    document.querySelectorAll<HTMLElement>('.hero-badge, .hero-headline, .hero-sub, .hero-vsl, .hero-cta').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // ─── 🎬 Matt (@motion-eng): Hero Section — Staggered entrance on load ───────
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTL
    .from('.hero-badge',    { opacity: 0, y: -20, duration: 0.7 })
    .from('.hero-headline', { opacity: 0, y: 40, duration: 1.1 }, '-=0.3')
    .from('.hero-sub',      { opacity: 0, y: 24, duration: 0.9 }, '-=0.6')
    .from('.hero-vsl',      { opacity: 0, scale: 0.96, duration: 0.9 }, '-=0.5')
    .from('.hero-cta',      { opacity: 0, y: 16, duration: 0.7 }, '-=0.4');

  // ─── 🎬 Matt (@motion-eng): AlunoEterno Cards — ScrollTrigger stagger from left ──
  gsap.from('.aluno-card', {
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.aluno-card',
      start: 'top 80%',
    },
  });

  // ─── 🎬 Matt (@motion-eng): Portal Cards — ScrollTrigger stagger from bottom ──
  gsap.from('.portal-card', {
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.18,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#portais',
      start: 'top 75%',
    },
  });

  // ─── 🎬 Matt (@motion-eng): Quiz Container — Scale-in reveal ─────────────────
  gsap.from('#quiz-container', {
    opacity: 0,
    scale: 0.97,
    y: 30,
    duration: 0.8,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '#quiz',
      start: 'top 70%',
    },
  });

  // ─── 🎬 Matt (@motion-eng): FAQ Cards — Fade stagger ─────────────────────────
  gsap.from('.faq-card', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.faq-card',
      start: 'top 85%',
    },
  });

}
