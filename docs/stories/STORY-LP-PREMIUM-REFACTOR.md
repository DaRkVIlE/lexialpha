# Story: Premium Refactor & Design System Overhaul — Gabe's English Landing Page

**ID:** STORY-LP-PREMIUM-REFACTOR  
**Epic:** Lexi Alpha MVP Launch (Boss 1)  
**Status:** Done  
**Owner:** Gabriel Lima (@kairos, @pm, @architect, @dev, @qa)  
**Created:** 2026-10-12  
**Completed:** 2026-10-12  
**Commit:** `ea25ad2`  
**Deploy:** Production Vercel (`https://landing-pi-jade-44.vercel.app`) / Local (`http://localhost:4321`)

---

## 1. Overview & Objective
Refatoração premium completa da landing page baseada nos 10 pontos de crítica direta de Gabriel Lima:
1. Criação e integração do logotipo técnico vetorial monograma "GE" com onda sonora e badge "Alpha".
2. Remoção de preços da dobra 1 (Hero e Header superior), concentrando a oferta exclusivamente na seção `#pricing`.
3. Substituição de blocos lineares por Bento Grid interativo estilo Supabase/Vercel/Linear na seção "Como Funciona".
4. Transformação da seção de estágios da fala em Abas Interativas (Tabs) quantitativas mapeadas no CEFR (A1 a C1) com o estudo de Cambridge English Guided Learning Hours (90h a 800h).
5. Ênfase no acompanhamento 100% individual 1 a 1 com o professor Gabriel Lima (dinâmicas em grupo apenas pontuais).
6. Tutor de IA Lexi Alpha hiper-personalizado por aluno operando na interface web do LibreChat (sem menção pública a bot de WhatsApp).
7. Expurgo completo de todos os travessões (`—`), eliminando marca d'água de IA em todos os componentes.
8. Remoção do quiz diagnóstico simplificado da landing page (mantendo a avaliação para onboarding do aluno alpha).
9. Clareza nos fundamentos científicos (Stephen Krashen $i+1$, Chunks, FSRS, Recasting Natural).
10. Compromisso inegociável: zero captação comercial antes de Gabriel Lima testar e aprovar a plataforma completa como Aluno Alpha #0.

---

## 2. Acceptance Criteria (DoD)

- [x] **AC-1 (Logo Monograma GE):** Componente `src/components/Logo.astro` criado com SVG vetorial de onda sonora, acento esmeralda `#3ecf8e` e badge `Alpha`. Integrado no header e footer.
- [x] **AC-2 (Hero & Header Sem Preço Prematuro):** CTA primário "Conhecer o método na prática →" com scroll suave para `#metodo`. Preço R$ 197 removido do header e da hero.
- [x] **AC-3 (Expurgo de Em-Dashes `—`):** 0 ocorrências de `—` em todo o código estático renderizado (`dist/index.html`).
- [x] **AC-4 (Bento Grid na Solução):** 5 blocos dinâmicos com hierarquia visual forte, micro-interações, foco em Krashen ($i+1$), Chunks, sessões individuais, LibreChat e Recasting.
- [x] **AC-5 (Tabs Interativas Cambridge CEFR):** Abas interativas para 5 estágios (A1 a C1) indicando horas guiadas de Cambridge, armadilhas comuns e solução Gabe.
- [x] **AC-6 (Encontros 1 a 1 & Tutor LibreChat):** Destaque explícito para encontros individuais com Gabe e tutor exclusivo no LibreChat.
- [x] **AC-7 (Remoção do Quiz Simplificado):** `<QuizSection />` desconectado da LP pública.
- [x] **AC-8 (Build & Validação QA):** `npm run build` gerado com sucesso em 45.16s, testado no `http://localhost:4321`.
- [x] **AC-9 (Git & Versionamento):** Commit `ea25ad2` e push com sucesso para `origin/main`.

---

## 3. Architecture & Spec Pipeline Artifacts

- Spec Pipeline Artifacts:
  - `docs/stories/STORY-LP-PREMIUM-REFACTOR/spec/requirements.json`
  - `docs/stories/STORY-LP-PREMIUM-REFACTOR/spec/complexity.json` (Score 12/25, STANDARD)
  - `docs/stories/STORY-LP-PREMIUM-REFACTOR/spec/research.json` (Cambridge CEFR hours & Bento Grid)
  - `docs/stories/STORY-LP-PREMIUM-REFACTOR/spec/spec.md`
  - `docs/stories/STORY-LP-PREMIUM-REFACTOR/spec/critique.json` (Approved 5.0/5.0)
  - `docs/stories/STORY-LP-PREMIUM-REFACTOR/spec/plan.json`
- Componentes Atualizados:
  - `src/components/Logo.astro` (novo)
  - `src/components/Hero.astro`
  - `src/components/Problem.astro`
  - `src/components/Solution.astro`
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
| 2026-10-12 | 1.0 | Conclusão da refatoração premium. Logo GE, Bento Grid, Cambridge CEFR Tabs, zero em-dashes, foco individual 1:1 e LibreChat. Build limpo e commit pushado. | @kairos & @dev |
