# Epic: Landing Page Revision — Top Player Experience

**Epic ID:** EPIC-LANDING-001  
**Status:** Draft  
**Created:** 2026-10-06  
**Epic Owner:** Morgan (PM)  
**Sprint:** Revision Sprint

---

## Epic Goal

Transformar a landing page estática funcional em uma **landing page top player** com estrutura perfeita, mostrando mais sobre a plataforma LexiQuest, como funciona e como utilizar, em sincronia com o trabalho já realizado nas conversas Antigravity.

---

## Epic Description

### Existing System Context

**Current Landing Page:**
- Stack: Astro v7 + Tailwind v4 + Impeccable Craft Floor
- Local: `C:\Users\Usuario\Documents\My KAIROS\Gabe's English Classes\landing\`
- State: Build verde (27KB), mas com gaps de UX/UX e conteúdo
- Existing Sections: Hero, AlunoEterno, MontanhaB2, QuizSection, OfertaAlpha, Faq, Footer

**Technology Stack:**
- Astro v7 (static site generator)
- Tailwind v4 (utility-first CSS)
- GSAP (animations)
- Howler.js (audio SFX)
- Impeccable Craft Floor (design patterns)

**Integration Points:**
- Components Astro (`.astro` files)
- Scripts TypeScript (`.ts` files)
- Global CSS (Tailwind v4)
- Antigravity brain context (conversas 7a31b8cf, c29ef613)

### Enhancement Details

**What's Being Added/Changed:**
1. **Brand Consistency:** 53 menções de "LexiQuest" → "LEXI Alpha"
2. **Seção DayInTheLife:** Timeline visual de um dia na plataforma
3. **Seção PlatformTour:** Tour das features com UI mockups
4. **Seção Testimonials:** Placeholder para depoimentos piloto
5. **Seção ComparisonInteractive:** Comparação visual interativa (antes/depois)
6. **Seção ProgressTimeline:** Timeline de progresso mensal
7. **Removal:** BottomNav modal (jornada gamificada), SentenceBuilder, PrepTrainer

**How It Integrates:**
- Novos componentes adicionados ao `index.astro`
- GSAP animations estendidas para novos componentes
- MANA Design System aplicado globalmente
- Preservação do Quiz e Oferta Hormozi (já validados)

**Success Criteria:**
- 0 menções de "LexiQuest" visíveis ao usuário
- 5 novas seções criadas e integradas
- MontanhaB2 renderizando corretamente
- Build verde < 50KB gzipped
- LCP < 1.5s mobile, FID < 100ms, CLS < 0.1

---

## Stories

### Story 1: Brand Consistency & Cleanup

**ID:** STORY-LANDING-001  
**Priority:** P0  
**Squad:** @dev + @copy-master  
**Executor:** @dev  
**Quality Gate:** @copy-master  
**Quality Gate Tools:** [search_validation, copy_review]

**Description:**
Remover todas as 53 menções de "LexiQuest" e substituir por "LEXI Alpha". Remover BottomNav modal e componentes obsoletos (SentenceBuilder, PrepTrainer). Aplicar MANA Design System em global.css.

**Acceptance Criteria:**
- [ ] Search & replace "LexiQuest" → "LEXI Alpha" em todos arquivos `.astro`
- [ ] BottomNav.astro removido do DOM
- [ ] SentenceBuilder.astro removido
- [ ] PrepTrainer.astro removido
- [ ] Meta tags HTML atualizadas
- [ ] MANA Design System aplicado em global.css (variáveis CSS)
- [ ] Build verde
- [ ] 0 menções LexiQuest visíveis ao usuário

**Quality Gates:**
- Pre-Commit: Search validation, copy review
- Pre-PR: Build validation, visual inspection

---

### Story 2: DayInTheLife Component

**ID:** STORY-LANDING-002  
**Priority:** P0  
**Squad:** @copy-master + @storytelling + @apex  
**Executor:** @apex  
**Quality Gate:** @copy-master  
**Quality Gate Tools:** [copy_validation, accessibility_check]

**Description:**
Criar componente `DayInTheLife.astro` mostrando o fluxo de um dia típico na LexiQuest (manhã, tarde, noite) com timeline visual e GSAP animations.

**Acceptance Criteria:**
- [ ] Componente criado em `src/components/DayInTheLife.astro`
- [ ] Timeline horizontal desktop, vertical mobile
- [ ] 4-6 cards com horários e ações
- [ ] GSAP ScrollTrigger animando cada card
- [ ] Copy aprovada por @copy-master
- [ ] Mobile responsive
- [ ] Load time < 1s

**Quality Gates:**
- Pre-Commit: Copy validation, accessibility check
- Pre-PR: GSAP validation, mobile testing

---

### Story 3: PlatformTour Component

**ID:** STORY-LANDING-003  
**Priority:** P0  
**Squad:** @design-squad + @apex + @copy-squad  
**Executor:** @apex  
**Quality Gate:** @design-squad  
**Quality Gate Tools:** [design_validation, ui_consistency]

**Description:**
Criar componente `PlatformTour.astro` detalhando as 5 features principais (S-Curve Map, Gamification HUD, 7 Guardiões, FSRS-6 Flashcards, Companion Móvel) com UI mockups interativos.

**Acceptance Criteria:**
- [ ] Componente criado em `src/components/PlatformTour.astro`
- [ ] 5 features documentadas
- [ ] Tabs/Carousel para alternar features
- [ ] UI mockups consistentes com design system
- [ ] Hover states funcionais
- [ ] Mobile horizontal scroll snap
- [ ] WCAG AA accessibility

**Quality Gates:**
- Pre-Commit: Design validation, UI consistency
- Pre-PR: Accessibility audit, cross-browser testing

---

### Story 4: Testimonials Placeholder

**ID:** STORY-LANDING-004  
**Priority:** P1  
**Squad:** @copy-master + @design-squad  
**Executor:** @apex  
**Quality Gate:** @copy-master  
**Quality Gate Tools:** [copy_validation]

**Description:**
Criar componente `Testimonials.astro` com placeholder cards para depoimentos reais após piloto, mostrando transparência e expectativa de resultados autênticos.

**Acceptance Criteria:**
- [ ] Componente criado em `src/components/Testimonials.astro`
- [ ] Placeholder cards com skeleton loading state
- [ ] Copy comunicando transparência
- [ ] CTA direcionando para Oferta
- [ ] Design escalável para futuro (depoimentos reais)

**Quality Gates:**
- Pre-Commit: Copy validation
- Pre-PR: Visual inspection

---

### Story 5: ComparisonInteractive Component

**ID:** STORY-LANDING-005  
**Priority:** P1  
**Squad:** @design-squad + @copy-squad + @apex  
**Executor:** @apex  
**Quality Gate:** @design-squad  
**Quality Gate Tools:** [design_validation, interaction_check]

**Description:**
Criar componente `ComparisonInteractive.astro` com toggle switch comparando "Método Tradicional" vs "LexiQuest", substituindo o AlunoEterno estático por comparação visual interativa.

**Acceptance Criteria:**
- [ ] Componente criado em `src/components/ComparisonInteractive.astro`
- [ ] Toggle switch animado
- [ ] Lado Esquerdo (Tradicional) documentado
- [ ] Lado Direito (LexiQuest) documentado
- [ ] CSS transitions smooth para swap
- [ ] Mobile accordion em vez de side-by-side
- [ ] Copy melhorada (mais visual, menos texto)

**Quality Gates:**
- Pre-Commit: Design validation, interaction check
- Pre-PR: Mobile testing, animation validation

---

### Story 6: ProgressTimeline Component

**ID:** STORY-LANDING-006  
**Priority:** P1  
**Squad:** @copy-master + @design-squad  
**Executor:** @apex  
**Quality Gate:** @copy-master  
**Quality Gate Tools:** [copy_validation, visual_hierarchy]

**Description:**
Criar componente `ProgressTimeline.astro` mostrando o que o aluno pode esperar em cada mês dos 6-8 meses (milestones + tempo de prática diária).

**Acceptance Criteria:**
- [ ] Componente criado em `src/components/ProgressTimeline.astro`
- [ ] Timeline horizontal desktop, vertical mobile
- [ ] 8 meses documentados
- [ ] Tempo de prática por mês (15-20 min)
- [ ] Milestones visualmente claros
- [ ] GSAP ScrollTrigger animando milestones

**Quality Gates:**
- Pre-Commit: Copy validation, visual hierarchy
- Pre-PR: Mobile testing, animation validation

---

### Story 7: Hero & MontanhaB2 Fixes

**ID:** STORY-LANDING-007  
**Priority:** P0  
**Squad:** @copy-master + @apex  
**Executor:** @apex  
**Quality Gate:** @copy-master  
**Quality Gate Tools:** [copy_validation, render_check]

**Description:**
Simplificar Hero copy (reduzir texto, remover VSL modal complexo) e corrigir renderização do MontanhaB2 (bloco preto).

**Acceptance Criteria:**
- [ ] Hero copy simplificada
- [ ] VSL modal removido ou simplificado
- [ ] MontanhaB2 renderizando corretamente
- [ ] CTA direto para quiz (diagnóstico)
- [ ] Hero altura reduzida (92vh → 85vh)
- [ ] Build verde

**Quality Gates:**
- Pre-Commit: Copy validation, render check
- Pre-PR: Visual inspection, browser testing

---

### Story 8: Integration & Final Polish

**ID:** STORY-LANDING-008  
**Priority:** P1  
**Squad:** @ux-design-expert + @impeccable + @qa  
**Executor:** @dev  
**Quality Gate:** @qa  
**Quality Gate Tools:** [accessibility_audit, performance_audit, e2e_test]

**Description:**
Integrar todos os novos componentes no `index.astro`, aplicar micro-interações, executar accessibility audit (WCAG AA) e performance audit (LCP, FID, CLS).

**Acceptance Criteria:**
- [ ] Todos os componentes integrados no index.astro
- [ ] Micro-interações aplicadas (hover, focus, active)
- [ ] WCAG AA pass (contraste 4.5:1, aria-labels, focus states)
- [ ] Performance metrics green (LCP < 1.5s, FID < 100ms, CLS < 0.1)
- [ ] E2E testing mobile + desktop
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Build verde < 50KB gzipped

**Quality Gates:**
- Pre-Commit: Accessibility audit, performance audit
- Pre-PR: E2E test validation
- Pre-Deployment: Cross-browser validation

---

## Compatibility Requirements

- [ ] Existing APIs remain unchanged (nenhuma API backend afetada)
- [ ] Database schema changes: N/A (nenhuma mudança de DB)
- [ ] UI changes follow MANA Design System (Impeccable Craft Floor)
- [ ] Performance impact minimal (build < 50KB gzipped)

---

## Risk Mitigation

### Primary Risk

**Risk:** Too much content making landing page too long, increasing bounce rate  
**Probability:** High  
**Impact:** High

**Mitigation:**
- Use accordions em mobile
- Colocar CTAs estratégicos no meio do funil
- Priorizar visual over texto
- Testar A/B comprimento se necessário

### Secondary Risk

**Risk:** MANA Design System conflicts with education context  
**Probability:** Medium  
**Impact:** Medium

**Mitigation:**
- Adaptar Sentry colors para education (mais friendly)
- Testar contraste com ui-ux-pro-max
- Fallback para Tailwind se variáveis falharem

### Rollback Plan

Se a revisão degradar performance significativamente:
1. Reverter para build anterior via git
2. Desativar novos componentes condicionalmente
3. Manter apenas correções P0 (brand consistency, MontanhaB2 fix)

---

## Definition of Done

- [ ] All 8 stories completed with acceptance criteria met
- [ ] Brand consistency achieved (0 LexiQuest mentions)
- [ ] 5 new sections created and integrated
- [ ] MontanhaB2 rendering correctly
- [ ] MANA Design System applied globally
- [ ] Accessibility WCAG AA pass
- [ ] Performance metrics green
- [ ] Build verde < 50KB gzipped
- [ ] E2E testing pass
- [ ] Cross-browser testing pass
- [ ] Documentation updated

---

## Handoff to Story Manager

**To:** @sm (River)  
**From:** Morgan (PM)  
**Handoff:** handoff-orion-to-sm-2026-10-06T22-29-51-810Z.md

Please develop detailed user stories for this brownfield epic. Key considerations:

- This is an enhancement to an existing landing page running Astro v7 + Tailwind v4
- Integration points: index.astro, global.css, scripts/animations.ts
- Existing patterns to follow: Impeccable Craft Floor, MANA Design System
- Critical compatibility requirements: Build < 50KB gzipped, LCP < 1.5s
- Each story must include verification that existing functionality (Quiz, Oferta) remains intact

The epic should maintain system integrity while delivering a top player landing page experience.

---

**Epic Status:** Ready for Story Decomposition  
**Next Step:** @sm to decompose into detailed user stories with Definition of Done
