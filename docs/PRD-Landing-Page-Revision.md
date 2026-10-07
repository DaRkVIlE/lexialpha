# PRD: Revisão Landing Page LEXI Alpha — Top Player Experience

**Versão:** 1.0  
**Data:** 2026-10-06  
**Autor:** Morgan (PM)  
**Status:** Draft  
**Tipo:** Brownfield PRD

---

## 📋 1. Document Summary

### 1.1 Resumo Executivo

Este PRD define a revisão estratégica da landing page da LEXI Alpha (anteriormente LexiQuest), transformando-a de uma página estática funcional em uma **landing page top player** com estrutura perfeita, mostrando mais sobre a plataforma, como funciona e como utilizar.

A revisão será executada em sincronia com o trabalho já realizado nas conversas Antigravity (IDs `7a31b8cf` e `c29ef613`), complementando-o sem refazer trabalho duplicado.

### 1.2 Contexto do Projeto

**Sessões Antigrativity Relevantes:**
- `7a31b8cf-c2dd-40c3-b1e3-8c435e581e08`: LexiQuest Platform Orchestration Plan (5 camadas de gamificação)
- `c29ef613-d68a-4ca9-9814-2da3ddb7fca8`: LexiQuest XKORTEX Synthesis (Smart Triage v5)

**Arquitetura Atual:**
- Stack: Astro v7 + Tailwind v4 + Impeccable Craft Floor
- Local: `C:\Users\Usuario\Documents\My KAIROS\Gabe's English Classes\landing\`
- Estado: Build verde (27KB), mas com gaps de UX/UX e conteúdo

### 1.3 Problema Statement

A landing page atual tem:
- **Falta de profundidade:** Não explica "como funciona" a plataforma LexiQuest
- **Sem visualização da experiência:** O usuário não consegue imaginar o fluxo de uso
- **Ausência de prova social:** Sem depoimentos, case studies ou métricas
- **Brand confusion:** 53 ocorrências de "LexiQuest" (icebox) vs "LEXI Alpha" (produto atual)
- **UX issues:** Montanha B2 não renderiza, VSL modal complexo, muito texto

### 1.4 Objetivo do Produto

Transformar a landing page em uma **estrutura top player** com:
1. Seção "Como Funciona" — Day in the Life visual da plataforma
2. Seção "Tour da Plataforma" — Features detalhadas com UI mockups
3. Seção "Resultados Reais" — Placeholder para depoimentos piloto
4. Comparação visual interativa — Antes vs Depois
5. Timeline de progresso — O que esperar em cada mês
6. Correção de brand consistency — 100% LEXI Alpha

---

## 🎯 2. Product Vision & Goals

### 2.1 Vision Statement

"Uma landing page que não apenas convence, mas **educa** o usuário sobre como a plataforma LexiQuest funciona em 5 minutos, construindo confiança através de transparência e profissionalismo."

### 2.2 Goals (SMART)

| Goal | Métrica | Timeline |
|------|---------|----------|
| Aumentar tempo na página | +40% avg session duration | Pós-launch |
| Aumentar taxa de conclusão do quiz | +25% quiz completion rate | Pós-launch |
| Reduzir bounce rate | < 40% bounce rate | Pós-launch |
| Aumentar CTR para WhatsApp | +15% CTA click-through | Pós-launch |
| Brand consistency | 0 menções de "LexiQuest" | Pós-correção |

### 2.3 Non-Goals (O que NÃO faremos)

- ❌ Implementar gamificação real na landing (isso é backend)
- ❌ Criar versão mobile app (isso é Capacitor)
- ❌ Integrar LearnHouse/LibreLingo (isso é sprint futuro)
- ❌ Adicionar depoimentos falsos (placeholder para piloto real)
- ❌ Mudar oferta Hormozi (já validada)

---

## 👥 3. User Personas & Journey

### 3.1 Primary Persona: The Frustrated Learner

**Nome:** Carlos (35 anos, Engenheiro de Software)  
**Problema:** Estuda inglês há 5 anos, não consegue falar, travado em tradução mental  
**Meta:** Conseguir conversar em reuniões com clientes gringos em 6 meses  
**Pain Points:**
- "Estudo tanto e não funciona"
- "Tento traduzir tudo no cérebro antes de falar"
- "Tenho vergonha de errar em público"

**Journey Atual:**
1. Vê anúncio/indicado → Clica na landing
2. Lê Hero (texto denso) → Dúvida: "Mais um curso?"
3. Vê VSL modal (complexo) → Clica X para fechar
4. Vê AlunoEterno (texto pesado) → Scrola rápido
5. Chega no Quiz → Faz diagnóstico
6. Vê Oferta → Vai para WhatsApp

**Journey Ideal (Pós-Revisão):**
1. Vê anúncio/indicado → Clica na landing
2. Hero simplificado → Entende proposta em 10s
3. "Como Funciona" → Vê fluxo visual (ah, é assim!)
4. Tour da Plataforma → Vê UI real (isso parece moderno)
5. Quiz → Faz diagnóstico (confiança built)
6. Oferta → Vai para WhatsApp com clareza

### 3.2 Secondary Persona: The Skeptical Professional

**Nome:** Ana (28 anos, Product Manager)  
**Problema:** Já tentou vários cursos, cética de promessas "mágicas"  
**Meta:** Validar se o método é sério antes de investir  
**Pain Points:**
- "Todo curso promete fluência em 3 meses"
- "Quero saber a ciência por trás"
- "Preciso ver resultados reais"

**Journey Atual:**
1. Vê landing → Scrola até FAQ
2. Lê FAQ → Dúvidas não respondidas
3. Clica em CTA → WhatsApp (com dúvidas)

**Journey Ideal (Pós-Revisão):**
1. Vê landing → Scrola até "Como Funciona"
2. Vê "Day in the Life" → Entende fluxo real
3. Vê "Timeline de Progresso" → Sabe o que esperar
4. Vê "Resultados Reais" (placeholder) → Aguarda piloto
5. FAQ completa → Clica em CTA com confiança

---

## 📊 4. Functional Requirements

### 4.1 Seção: Como Funciona (Day in the Life)

**ID:** REQ-F1  
**Prioridade:** P0  
**Squad:** @copy-master + @storytelling + @apex

**Descrição:**
Seção visual mostrando o fluxo de um dia típico na LexiQuest, desde o login até a prática diária.

**Conteúdo:**
- 4-6 cards com timeline visual (manhã, tarde, noite)
- Cada card mostra: tela da plataforma + ação do usuário + resultado
- Copy: "09:00 — Abre o app, vê Streak 14 dias, escolhe Portal 1"
- Copy: "12:30 — 15 min de conversação com Jordan no almoço"
- Copy: "19:00 — 10 min de FSRS flashcards antes de dormir"
- CTA: "Começar sua jornada →"

**Requisitos Técnicos:**
- Componente Astro novo: `DayInTheLife.astro`
- Layout: Horizontal timeline desktop, vertical mobile
- Animações: Fade-in scroll (GSAP)
- UI Mockups: SVG placeholders das telas da plataforma

**Critérios de Aceitação:**
- [ ] Componente criado em `src/components/DayInTheLife.astro`
- [ ] Timeline responsiva (mobile < 768px vertical)
- [ ] GSAP ScrollTrigger animando cada card
- [ ] Copy aprovada por @copy-master
- [ ] Load time < 1s

### 4.2 Seção: Tour da Plataforma

**ID:** REQ-F2  
**Prioridade:** P0  
**Squad:** @design-squad + @apex + @copy-squad

**Descrição:**
Seção detalhando as features principais da LexiQuest com UI mockups interativos.

**Conteúdo:**
- Feature 1: S-Curve Map (5 Portais em espiral)
- Feature 2: Gamification HUD (XP, Hearts, Streaks)
- Feature 3: 7 Guardiões de IA (avatars + descrição)
- Feature 4: FSRS-6 Flashcards (interface de review)
- Feature 5: Companion Móvel (chat extra)

**Requisitos Técnicos:**
- Componente Astro novo: `PlatformTour.astro`
- Tabs/Carousel para alternar features
- UI Mockups: SVG ou CSS puro (sem screenshots)
- Hover states mostrando detalhes
- Mobile: Horizontal scroll snap

**Critérios de Aceitação:**
- [ ] Componente criado em `src/components/PlatformTour.astro`
- [ ] 5 features documentadas
- [ ] UI mockups consistentes com design system
- [ ] Mobile scroll snap funcional
- [ ] Acessibilidade WCAG AA

### 4.3 Seção: Resultados Reais (Placeholder)

**ID:** REQ-F3  
**Prioridade:** P1  
**Squad:** @copy-master + @design-squad

**Descrição:**
Seção placeholder para depoimentos reais após piloto, mostrando que os resultados são autênticos.

**Conteúdo:**
- Placeholder cards: "Depoimento Turma Alpha — Em breve"
- Copy: "Os primeiros 10 alunos da Turma Alpha estão validando o método. Aguarde resultados reais."
- CTA: "Quero fazer parte da Turma Alpha"

**Requisitos Técnicos:**
- Componente Astro novo: `Testimonials.astro`
- Cards com skeleton loading state
- Placeholder avatars (iniciais)

**Critérios de Aceitação:**
- [ ] Componente criado com placeholders
- [ ] Copy comunicando transparência
- [ ] CTA direcionando para Oferta
- [ ] Design escalável para futuro (depoimentos reais)

### 4.4 Seção: Comparação Visual Interativa

**ID:** REQ-F4  
**Prioridade:** P1  
**Squad:** @design-squad + @copy-squad + @apex

**Descrição:**
Comparação visual "Antes vs Depois" interativa, substituindo o AlunoEterno estático.

**Conteúdo:**
- Toggle switch: "Método Tradicional" ↔ "LexiQuest"
- Lado Esquerdo (Tradicional): Lista, gramática, correção punitiva
- Lado Direito (LexiQuest): Chunks, conversação, recasting natural
- Animação smooth entre estados

**Requisitos Técnicos:**
- Componente Astro novo: `ComparisonInteractive.astro`
- Toggle com checkbox visual
- CSS transitions para swap
- Mobile: Acordion em vez de side-by-side

**Critérios de Aceitação:**
- [ ] Componente criado
- [ ] Toggle animado smooth
- [ ] Mobile accordion funcional
- [ ] Copy melhorada (mais visual, menos texto)

### 4.5 Seção: Timeline de Progresso

**ID:** REQ-F5  
**Prioridade:** P1  
**Squad:** @copy-master + @design-squad

**Descrição:**
Timeline mostrando o que o aluno pode esperar em cada mês dos 6-8 meses.

**Conteúdo:**
- Mês 1: Descongelamento (Portal 1)
- Mês 2-3: Motor BICS (Portal 2)
- Mês 4-5: Ponte da Fluência (Portal 3)
- Mês 6-7: CALP Executivo (Portal 4)
- Mês 8: Cume B2 (Portal 5)
- Cada mês: milestone + tempo de prática diária

**Requisitos Técnicos:**
- Componente Astro novo: `ProgressTimeline.astro`
- Timeline horizontal desktop, vertical mobile
- Milestones destacados
- Animação scroll (milestones aparecem progressivamente)

**Critérios de Aceitação:**
- [ ] Componente criado
- [ ] 8 meses documentados
- [ ] Tempo de prática por mês (15-20 min)
- [ ] Milestones visualmente claros

### 4.6 Correção Brand Consistency

**ID:** REQ-F6  
**Prioridade:** P0  
**Squad:** @dev + @copy-master

**Descrição:**
Remover todas as 53 menções de "LexiQuest" e substituir por "LEXI Alpha".

**Requisitos Técnicos:**
- Search & replace em todos os arquivos `.astro`
- Atualizar: Hero, Faq, AlunoEterno, Footer, OfertaAlpha
- Remover BottomNav modal "Jornada LexiQuest™"
- Atualizar meta tags HTML

**Critérios de Aceitação:**
- [ ] 0 menções de "LexiQuest" visíveis ao usuário
- [ ] Meta tags atualizadas
- [ ] BottomNav removido do DOM
- [ ] Badge consistente: "LEXI Alpha • Método MANA 3.0"

---

## 🎨 5. Non-Functional Requirements

### 5.1 Performance

- LCP (Largest Contentful Paint) < 1.5s mobile
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Build size < 50KB gzipped

### 5.2 Accessibility (WCAG AA)

- Contraste ratio 4.5:1 para texto normal
- Contraste ratio 3:1 para texto grande
- Aria-labels em todos os botões
- Focus states visíveis em todos os elementos interativos
- Navegação por teclado funcional

### 5.3 Design System

- 100% MANA Design System (Impeccable Craft Floor)
- Variáveis CSS (nenhum Tailwind hardcoded)
- Tipografia: Inter (sem Outfit/DM Sans)
- Cores: Sentry-inspired adaptado para education
- Nenhum emoji em UI (SVG icons only)

### 5.4 Responsiveness

- Mobile: < 576px (single column)
- Tablet: 576-768px (2 columns)
- Desktop: > 768px (full layout)
- Safe areas (viewport-fit=cover)
- Touch targets mínimo 44x44px

---

## 🏗️ 6. Technical Architecture

### 6.1 Componentes a Criar

```
landing/src/components/
├── DayInTheLife.astro          [NEW]
├── PlatformTour.astro          [NEW]
├── Testimonials.astro         [NEW]
├── ComparisonInteractive.astro [NEW]
└── ProgressTimeline.astro     [NEW]
```

### 6.2 Componentes a Modificar

```
landing/src/components/
├── Hero.astro                 [MODIFY] - Simplificar copy
├── AlunoEterno.astro          [MODIFY] - Substituir por ComparisonInteractive
├── MontanhaB2.astro           [MODIFY] - Corrigir renderização
├── OfertaAlpha.astro          [MODIFY] - Atualizar copy LEXI Alpha
├── Faq.astro                 [MODIFY] - Atualizar copy LEXI Alpha
├── Footer.astro               [MODIFY] - Atualizar copy LEXI Alpha
└── BottomNav.astro            [DELETE] - Remover completamente
```

### 6.3 Scripts a Atualizar

```
landing/src/scripts/
├── animations.ts              [MODIFY] - Adicionar GSAP para novos componentes
└── audio.ts                   [MODIFY] - Remover referências SentenceBuilder
```

### 6.4 Estilos a Atualizar

```
landing/src/styles/
└── global.css                 [MODIFY] - Aplicar MANA Design System
```

---

## 🚀 7. Implementation Plan

### 7.1 Fase 1: Limpeza & Brand Consistency (Sprint A)

**Squads:** @dev + @copy-master  
**Duração:** 1 dia

**Tasks:**
1. [ ] Search & replace "LexiQuest" → "LEXI Alpha" em todos arquivos
2. [ ] Remover BottomNav.astro e referências
3. [ ] Atualizar meta tags HTML
4. [ ] Aplicar MANA Design System em global.css
5. [ ] Corrigir MontanhaB2 renderização

**Quality Gate:**
- [ ] Build verde
- [ ] 0 menções LexiQuest visíveis
- [ ] MontanhaB2 renderiza corretamente

### 7.2 Fase 2: Novas Seções (Sprint B)

**Squads:** @copy-master + @storytelling + @design-squad + @apex  
**Duração:** 2 dias

**Tasks:**
1. [ ] Criar DayInTheLife.astro
2. [ ] Criar PlatformTour.astro
3. [ ] Criar Testimonials.astro (placeholder)
4. [ ] Criar ComparisonInteractive.astro
5. [ ] Criar ProgressTimeline.astro
6. [ ] Adicionar GSAP animations

**Quality Gate:**
- [ ] Todos os componentes criados
- [ ] GSAP animations funcionando
- [ ] Mobile responsive

### 7.3 Fase 3: Refinamento & Polishing (Sprint C)

**Squads:** @ux-design-expert + @impeccable + @qa  
**Duração:** 1 dia

**Tasks:**
1. [ ] Simplificar Hero copy
2. [ ] Simplificar/Remover VSL modal
3. [ ] Revisar copy de todas seções
4. [ ] Aplicar micro-interações
5. [ ] Accessibility audit (WCAG AA)
6. [ ] Performance audit (LCP, FID, CLS)

**Quality Gate:**
- [ ] WCAG AA pass
- [ ] Performance metrics green
- [ ] Copy aprovada por squads

### 7.4 Fase 4: QA & Deploy (Sprint D)

**Squads:** @qa + @devops  
**Duração:** 1 dia

**Tasks:**
1. [ ] E2E testing (mobile + desktop)
2. [ ] Cross-browser testing (Chrome, Firefox, Safari)
3. [ ] Build validation
4. [ ] Deploy Railway/Vercel
5. [ ] Production validation

**Quality Gate:**
- [ ] E2E pass
- [ ] Cross-browser pass
- [ ] Deploy sucesso
- [ ] Production validado

---

## 📈 8. Success Metrics

### 8.1 Pre-Launch (Baseline)

- Avg session duration: Xs (medir com Google Analytics)
- Quiz completion rate: X%
- Bounce rate: X%
- CTA click-through: X%

### 8.2 Post-Launch (30 dias)

- Avg session duration: +40%
- Quiz completion rate: +25%
- Bounce rate: < 40%
- CTA click-through: +15%

### 8.3 Qualitative Metrics

- Feedback de usability (pesquisa piloto)
- Feedback de copy (clarity)
- Feedback de design (profissionalismo)

---

## ⚠️ 9. Risks & Mitigations

### 9.1 Risk 1: Too Much Content

**Risco:** Adicionar tantas seções torna a landing page muito longa  
**Probabilidade:** Alta  
**Impacto:** Alto (bounce rate)

**Mitigação:**
- Usar accordions em mobile
- Colocar CTAs estratégicos no meio do funil
- Priorizar visual over texto
- Testar A/B comprimento

### 9.2 Risk 2: Design System Conflicts

**Risco:** MANA Design System não funciona para education  
**Probabilidade:** Média  
**Impacto:** Médio (retrabalho)

**Mitigação:**
- Adaptar Sentry colors para education (mais friendly)
- Testar contraste com ui-ux-pro-max
- Fallback para Tailwind se variáveis falharem

### 9.3 Risk 3: Performance Degradation

**Risco:** Novos componentes com GSAP aumentam load time  
**Probabilidade:** Média  
**Impacto:** Alto (bounce rate)

**Mitigação:**
- Lazy loading de componentes abaixo fold
- GSAP only on scroll
- Otimizar SVG assets
- Testar LCP em mobile 3G

---

## 📝 10. Open Questions

1. **VSL Modal:** Deve manter VSL cinematográfica ou simplificar para placeholder vídeo?  
2. **Depoimentos:** Deve usar placeholders genéricos ou esconder seção até piloto?  
3. **Tour UI:** Deve usar SVG mockups ou CSS puro (sem screenshots reais)?  
4. **Timeline:** Deve ser timeline fixa (6-8 meses) ou baseada em teste?

---

## 🤝 11. Dependencies & Blocking

### 11.1 Dependencies

- UX-AUDIT-LEXI-ALPHA.md — Deve implementar correções P0 primeiro
- Conversa Antigravity 7a31b8cf — LexiQuest Platform Plan (contexto)
- Conversa Antigravity c29ef613 — XKORTEX Synthesis (contexto)

### 11.2 Blocking

- Nenhum bloqueio técnico
- Aprovação de copy por @copy-master
- Aprovação de design por @design-squad

---

## 📋 12. Appendix

### 12.1 Glossary

- **LEXI Alpha:** Produto atual de idiomas (anteriormente LexiQuest)
- **LexiQuest:** Arquitetura de gamificação (icebox, não implementar)
- **MANA 3.0:** Método pedagógico baseado em Krashen + Swain
- **Montanha B2:** Trilha de 2.500 chunks nucleares
- **FSRS-6:** Algoritmo de repetição espaçada
- **Recasting Natural:** Correção orgânica sem caneta vermelha

### 12.2 Referências

- UX-AUDIT-LEXI-ALPHA.md
- LexiQuest Platform Orchestration Plan (Antigravity 7a31b8cf)
- LexiQuest XKORTEX Synthesis (Antigravity c29ef613)
- HARNESS_LEXI_Squads_Tasks_Agentes_.canvas
- LEXI META Blueprint.canvas

---

**Aprovado por:** Morgan (PM)  
**Data:** 2026-10-06  
**Próximo Passo:** Executar *create-epic para decompor em stories
