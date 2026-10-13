/**
 * animations.ts — GSAP ScrollTrigger Animation System
 * Apex Squad | @motion-eng (Matt) + @a11y-eng (Sara)
 *
 * Micro-animations and scroll triggers are managed within individual components
 * using standard Astro is:inline scripts with the global window.gsap registry.
 */

export function initAnimations(): void {
  // Global registry handles fallback batches for [data-anim="fade-up"] in index.astro.
  // Component-specific ScrollTriggers are mounted directly inside each component.
}
