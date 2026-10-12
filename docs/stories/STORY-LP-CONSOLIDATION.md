# Story: Consolidate Lexi Alpha Landing Page with Supabase Dark DS & Meta-Methodology

**ID:** STORY-LP-CONSOLIDATION  
**Epic:** Lexi Alpha MVP Launch (Boss 1)  
**Status:** Done  
**Owner:** Gabriel Lima (@dev, @pm, @architect, @qa)  
**Created:** 2026-10-12  
**Completed:** 2026-10-12  
**Commit:** `663f025`  
**Deploy:** Production Vercel (`https://landing-pi-jade-44.vercel.app`)

---

## 1. Overview & Objective
Consolidar a landing page oficial da Lexi Alpha no Astro, substituindo o visual e narrativa legados pelo Design System Supabase Dark (tokens `#0f0f0f`, `#171717`, `#242424`, `#3ecf8e`, botões pill de 9999px) e pela nova meta-metodologia baseada em Krashen, Lyster & Saito (2010), Bastani et al. (PNAS 2025) e FSRS-6.

O diferencial inegociável é o professor Gabriel Lima (Gabe) à frente com 3 encontros semanais (2 rápidos + 1 estendido de conversação plena), tendo a Lexi Alpha como IA conversacional complementar 24/7 de autoria própria.

---

## 2. Acceptance Criteria (DoD)

- [x] **AC-1 (Design System Supabase Dark):** Fundo `#0f0f0f`, cards `#141414`/`#171717`, bordas `#242424`, acento esmeralda `#3ecf8e`, botões pill `rounded-full`.
- [x] **AC-2 (Hero Section):** Gabriel Lima no centro, proposta anti-ilusão ("Você não estuda para falar. Você fala para aprender"), microcopy R$ 197/mês, 10 vagas.
- [x] **AC-3 (Problem Section):** Transparência estilo Mairo Vergara ("Sem mentiras de fluência em 3 ou 6 meses"), desmonte do Aluno Eterno.
- [x] **AC-4 (Solution Section):** Tríade pedagógica (3x aulas com Gabe + IA autoral no bolso + feedback em 3 camadas).
- [x] **AC-5 (Quiz Interativo):** Diagnóstico em 3 passos com pontuação, confete e CTA que abre o WhatsApp com diagnóstico preenchido.
- [x] **AC-6 (5 Estágios Práticos):** Substituição da Montanha B2 por fases acessíveis e compreensíveis.
- [x] **AC-7 (Rotina & Features):** Prática por áudio/voz de 15m diários sem limites máximos, integração natural com as aulas do Gabe.
- [x] **AC-8 (Social Proof Científico):** Citações de Krashen ($i+1$), Lyster & Saito (2010), Bastani et al. (2025) e FSRS-6.
- [x] **AC-9 (Pricing & Garantia):** R$ 197/mês, sem contrato anual, 30 dias de garantia com reembolso Pix.
- [x] **AC-10 (FAQ & CTA Final):** Objeções sinceras desarmadas e direcionamento para WhatsApp (`+55 11 96723-9791`).
- [x] **AC-11 (Auditoria de Erros/Alucinações):** 0 menções a "Gabriel Ferreira", "LexiQuest", "A1 para todo mundo", "frustrando".
- [x] **AC-12 (Build & Deploy):** `npm run build` estático 0 erros, commit e push para GitHub `main`.

---

## 3. Architecture & Artifacts

- Spec Pipeline Artifacts:
  - `docs/stories/STORY-LP-CONSOLIDATION/spec/requirements.json`
  - `docs/stories/STORY-LP-CONSOLIDATION/spec/complexity.json`
  - `docs/stories/STORY-LP-CONSOLIDATION/spec/research.json`
  - `docs/stories/STORY-LP-CONSOLIDATION/spec/spec.md`
  - `docs/stories/STORY-LP-CONSOLIDATION/spec/critique.json` (Gate APPROVED, Score 4.94/5)
  - `docs/stories/STORY-LP-CONSOLIDATION/spec/plan.json`
- Componentes Astro Atualizados:
  - `src/styles/global.css`
  - `src/components/Button.astro`
  - `src/components/Card.astro`
  - `src/components/Hero.astro`
  - `src/components/Problem.astro`
  - `src/components/Solution.astro`
  - `src/components/QuizSection.astro`
  - `src/components/MontanhaB2.astro`
  - `src/components/LexiAlphaFeatures.astro`
  - `src/components/SocialProof.astro`
  - `src/components/Pricing.astro`
  - `src/components/Faq.astro`
  - `src/components/FinalCTA.astro`
  - `src/components/Footer.astro`
  - `src/pages/index.astro`

---

## 4. Change Log

| Data | Versão | Descrição | Autor |
|---|---|---|---|
| 2026-10-12 | 1.0 | Implementação completa da Spec Pipeline e consolidação visual/copy. Commit `663f025` pushado para `main`. Story fechada. | @po & @dev |
