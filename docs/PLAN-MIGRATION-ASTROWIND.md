# Plano de Migração: Astrowind Template para LEXI Alpha

**Data:** 2026-10-06  
**Autor:** Morgan (PM)  
**Status:** Draft  
**Template:** https://github.com/arthelokyo/astrowind

---

## 🎯 Objetivo

Acelerar a landing page usando o template Astrowind (Astro v7 + Tailwind v4) como base, personalizando-o com o conteúdo e identidade da LEXI Alpha, preservando os componentes funcionais (Quiz, Oferta) já validados.

---

## 📊 Análise de Mapeamento: Widgets Astrowind ↔ Seções LEXI Alpha

| Widget Astrowind | Seção LEXI Alpha | Mapeamento | Prioridade |
|------------------|------------------|------------|------------|
| **Hero** | Hero atual | Substituir hero com hero widget, adaptar copy | P0 |
| **Features** | PlatformTour | Usar features widget para tour da plataforma | P0 |
| **Timeline** | ProgressTimeline | Usar timeline widget para 8 meses | P1 |
| **Tabs** | DayInTheLife | Usar tabs widget para morning/afternoon/evening | P1 |
| **Pricing** | OfertaAlpha | Usar pricing widget com tabela de comparação | P0 |
| **FAQ Accordion** | FAQ atual | Usar FAQ widget (já é accordion) | P1 |
| **Testimonials** | Testimonials placeholder | Usar testimonials widget | P1 |
| **Bento** | ComparisonInteractive | Usar bento grid para antes/depois | P1 |
| **Custom** | MontanhaB2 | Manter componente existente (não há widget equivalente) | P0 |
| **Custom** | QuizSection | Manter componente existente (quiz funcional) | P0 |

---

## 🏗️ Estratégia de Implementação

### Fase 1: Setup Astrowind (1 hora)

**Objetivo:** Integrar template Astrowind no projeto atual

**Steps:**
1. Fazer fork/clone do Astrowind em diretório temporário
2. Copiar estrutura crítica para o projeto atual:
   - `src/components/widgets/` → `src/components/widgets/`
   - `src/assets/styles/` → `src/assets/styles/`
   - `src/components/CustomStyles.astro` → `src/components/CustomStyles.astro`
   - `src/config.yaml` → `src/config.yaml`
3. Preservar componentes customizados:
   - `src/components/MontanhaB2.astro` (manter)
   - `src/components/QuizSection.astro` (manter)
   - `src/components/OfertaAlpha.astro` (manter - mas adaptar)
4. Atualizar dependências no `package.json` se necessário

**Quality Gate:**
- [ ] Build verde após integração
- [ ] Dev server funciona
- [ ] Widgets carregam corretamente

---

### Fase 2: Personalização Visual (2 horas)

**Objetivo:** Adaptar design system Astrowind para identidade LEXI Alpha

**Steps:**
1. Atualizar `src/config.yaml`:
   ```yaml
   site:
     name: 'LEXI Alpha'
     site: 'https://mana-landing-production.up.railway.app'
   metadata:
     title:
       default: 'LEXI Alpha'
       template: '%s — LEXI Alpha • Método MANA 3.0'
     description: 'Você não estuda para falar. Você fala para aprender. Destrave seu inglês sem gramática escolar com os 5 Portais da Montanha B2 e tutores de IA com Recasting Natural.'
   ui:
     theme: 'dark' # LEXI Alpha é dark mode
   ```

2. Atualizar `src/components/CustomStyles.astro`:
   - Cores: Adaptar para Sentry-inspired education (slate-950, emerald-400, purple-600, amber-400)
   - Tipografia: Inter (remover referências a outras fonts)
   - Espaçamento: Base unit 8px

3. Atualizar `src/assets/styles/tailwind.css`:
   - Customizar @theme tokens
   - Adicionar utilities específicos da LEXI Alpha

**Quality Gate:**
- [ ] Cores aplicadas corretamente
- [ ] Inter font carregando
- [ ] Dark mode funciona

---

### Fase 3: Mapeamento de Seções (3 horas)

**Objetivo:** Substituir seções manuais por widgets Astrowind

#### 3.1 Hero Widget (P0)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Header.astro` + Hero widget

**Ação:**
- Substituir Hero.astro atual por hero widget Astrowind
- Adaptar copy:
  - Headline: "Sua fala em inglês desbloqueada em 6 a 8 meses"
  - Subheadline: "O método que transforma reflexo oral em automaticidade natural. Sem gramática, sem tradução mental."
  - CTA: "Fazer Diagnóstico Gratuito"
- Remover VSL modal complexo (simplificar para placeholder)

**Preservar:**
- Badge "LEXI Alpha • Método MANA 3.0"

---

#### 3.2 Features Widget → PlatformTour (P0)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Features.astro`

**Ação:**
- Usar features widget para mostrar as 5 features principais:
  1. S-Curve Map (5 Portais em espiral)
  2. Gamification HUD (XP, Hearts, Streaks)
  3. 7 Guardiões de IA (avatars + descrição)
  4. FSRS-6 Flashcards (interface de review)
  5. Companion Móvel (chat extra)
- Adicionar ícones SVG para cada feature
- Copy curto e impactante

**Preservar:**
- Design system consistente

---

#### 3.3 Timeline Widget → ProgressTimeline (P1)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Timeline.astro`

**Ação:**
- Usar timeline widget para mostrar 8 meses
- Cada nó do timeline:
  - Mês 1: Descongelamento (Portal 1)
  - Mês 2-3: Motor BICS (Portal 2)
  - Mês 4-5: Ponte da Fluência (Portal 3)
  - Mês 6-7: CALP Executivo (Portal 4)
  - Mês 8: Cume B2 (Portal 5)
- Adicionar tempo de prática diária (15-20 min)

**Preservar:**
- Milestones visualmente claros

---

#### 3.4 Tabs Widget → DayInTheLife (P1)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Tabs.astro`

**Ação:**
- Usar tabs widget para morning/afternoon/evening
- Tab 1 (Morning): "09:00 — Abre o app, vê Streak 14 dias, escolhe Portal 1"
- Tab 2 (Afternoon): "12:30 — 15 min de conversação com Jordan no almoço"
- Tab 3 (Evening): "19:00 — 10 min de FSRS flashcards antes de dormir"
- UI mockups placeholder (SVG ou CSS)

**Preservar:**
- Fluxo visual claro

---

#### 3.5 Pricing Widget → OfertaAlpha (P0)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Pricing.astro`

**Ação:**
- Adaptar OfertaAlpha.astro para usar pricing widget
- Manter tabela de comparação (value stack)
- Manter preço: 12x R$ 49,70 ou R$ 497 à vista
- Manter bônus (Diagnóstico Individual, Companion Móvel)
- Manter CTA WhatsApp
- Manter garantia 30 dias

**Preservar:**
- Todos os elementos da oferta Hormozi
- WhatsApp link funcional

---

#### 3.6 FAQ Widget (P1)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Accordion.astro` (FAQ)

**Ação:**
- Usar FAQ widget Astrowind
- Migrar 6 perguntas existentes:
  1. O que é a Plataforma LexiQuest™?
  2. Preciso instalar ferramentas complexas?
  3. Como funcionam os Guardiões de IA?
  4. Vou ter que decorar regras de gramática?
  5. E se eu tiver muita vergonha de falar errado?
  6. Quanto tempo dura a preparação até o nível B2?

**Preservar:**
- Copy existente
- Respostas detalhadas

---

#### 3.7 Testimonials Widget (P1)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Testimonials.astro`

**Ação:**
- Usar testimonials widget
- Placeholder cards: "Depoimento Turma Alpha — Em breve"
- Copy: "Os primeiros 10 alunos da Turma Alpha estão validando o método. Aguarde resultados reais."
- CTA: "Quero fazer parte da Turma Alpha"

**Preservar:**
- Design escalável para futuro

---

#### 3.8 Bento Widget → ComparisonInteractive (P1)

**Arquivo:** `src/pages/index.astro`  
**Widget:** `Bento.astro`

**Ação:**
- Usar bento grid para antes/depois
- Grid 2x2:
  - Top-left: Método Tradicional (ícone negativo)
  - Top-right: LexiQuest (ícone positivo)
  - Bottom-left: Lista de problemas tradicionais
  - Bottom-right: Lista de benefícios LexiQuest
- Animations para swap (se suportado pelo widget)

**Preservar:**
- Comparação visual clara

---

### Fase 4: Preservação de Componentes Customizados (1 hora)

**Objetivo:** Manter componentes que não têm equivalente no Astrowind

#### 4.1 MontanhaB2.astro (P0)

**Ação:**
- Manter componente MontanhaB2.astro atual
- Integrar no novo layout (posicionar após PlatformTour)
- Corrigir renderização (bloco preto) se ainda existir
- Adaptar estilos para dark mode do Astrowind

**Preservar:**
- Timeline dos 5 Portais
- Guardiões (Jordan, Miles, Zack, Alexandra, Hayes)
- Progressão A1 → B2

---

#### 4.2 QuizSection.astro (P0)

**Ação:**
- Manter componente QuizSection.astro atual
- Integrar no novo layout (posicionar após MontanhaB2)
- Adaptar estilos para dark mode do Astrowind
- Garantir que confetti e interações funcionam

**Preservar:**
- Quiz de 3 perguntas
- Resultados (Portal 1-4)
- CTA para oferta
- Confetti animation

---

### Fase 5: Brand Consistency (30 min)

**Objetivo:** Remover menções de "LexiQuest" e substituir por "LEXI Alpha"

**Ação:**
- Search & replace em todos os arquivos `.astro`
- Atualizar meta tags HTML
- Remover BottomNav.astro se ainda existir
- Atualizar Footer.astro

**Quality Gate:**
- [ ] 0 menções de "LexiQuest" visíveis
- [ ] Badge consistente: "LEXI Alpha • Método MANA 3.0"

---

### Fase 6: Integração Final & Testing (1 hora)

**Objetivo:** Integrar todos os componentes e validar

**Steps:**
1. Atualizar `src/pages/index.astro` com nova ordem:
   ```astro
   <Header />
   <Hero /> (Astrowind widget)
   <Tabs /> (DayInTheLife)
   <Features /> (PlatformTour)
   <MontanhaB2 /> (custom)
   <Timeline /> (ProgressTimeline)
   <QuizSection /> (custom)
   <Bento /> (ComparisonInteractive)
   <Pricing /> (OfertaAlpha)
   <Testimonials /> (placeholder)
   <Accordion /> (FAQ)
   <Footer />
   ```

2. Validar:
   - Build verde
   - LCP < 1.5s mobile
   - FID < 100ms
   - CLS < 0.1
   - Mobile responsive
   - Quiz funcional
   - Oferta CTA funcional
   - WhatsApp link funcional

3. Deploy teste em Railway/Vercel

**Quality Gate:**
- [ ] Build verde
- [ ] Performance metrics green
- [ ] E2E test pass

---

## 📦 Estrutura Final de Arquivos

```
landing/
├── src/
│   ├── components/
│   │   ├── widgets/              [NEW - Astrowind]
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── Timeline.astro
│   │   │   ├── Tabs.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── Accordion.astro
│   │   │   ├── Testimonials.astro
│   │   │   └── Bento.astro
│   │   ├── CustomStyles.astro    [NEW - Astrowind]
│   │   ├── MontanhaB2.astro      [PRESERVED]
│   │   ├── QuizSection.astro     [PRESERVED]
│   │   ├── Footer.astro          [UPDATED]
│   │   └── (others from Astrowind)
│   ├── assets/
│   │   └── styles/
│   │       ├── tailwind.css      [NEW - Astrowind]
│   │       └── shadcn.css       [NEW - Astrowind]
│   ├── config.yaml               [NEW - Astrowind]
│   └── pages/
│       └── index.astro           [UPDATED]
└── package.json                  [UPDATED]
```

---

## ⚠️ Riscos & Mitigações

### Risk 1: Conflito de Estilos

**Risco:** Estilos Astrowind conflitam com estilos existentes  
**Probabilidade:** Média  
**Impacto:** Médio

**Mitigação:**
- Usar CSS Modules ou scoped styles onde possível
- Sobrescrever apenas tokens necessários em CustomStyles.astro
- Testar em mobile e desktop

### Risk 2: Performance Degradation

**Risco:** Widgets Astrowind aumentam bundle size  
**Probabilidade:** Baixa (Astrowind tem 100/100/100/100)  
**Impacto:** Baixo

**Mitigação:**
- Astrowind já otimizado (Lighthouse scores perfeitos)
- Lazy loading de widgets abaixo fold
- Tree-shaking automático do Astro

### Risk 3: Componentes Customizados Quebram

**Risco:** MontanhaB2 e QuizSection quebram com novo CSS  
**Probabilidade:** Média  
**Impacto:** Alto

**Mitigação:**
- Testar componentes customizados isoladamente
- Adaptar estilos manualmente se necessário
- Fallback para styles inline críticos

---

## 📅 Cronograma Estimado

| Fase | Duração Estimada | Responsável |
|------|------------------|-------------|
| Fase 1: Setup Astrowind | 1 hora | @dev |
| Fase 2: Personalização Visual | 2 horas | @apex + @design-squad |
| Fase 3: Mapeamento de Seções | 3 horas | @apex + @copy-master |
| Fase 4: Preservação Customizados | 1 hora | @dev |
| Fase 5: Brand Consistency | 30 min | @dev + @copy-master |
| Fase 6: Integração & Testing | 1 hora | @qa + @devops |
| **Total** | **8.5 horas** | |

---

## 🎯 Success Criteria

- [ ] Landing page usando Astrowind como base
- [ ] 5 seções novas implementadas via widgets
- [ ] MontanhaB2 e QuizSection preservados e funcionais
- [ ] Brand consistency: 0 menções "LexiQuest"
- [ ] Lighthouse scores: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] Build verde < 50KB gzipped
- [ ] Mobile responsive
- [ ] Deploy test em Railway/Vercel

---

## 🔄 Próximos Passos

1. **Decisão:** Aprovar plano de migração
2. **Execução:** Iniciar Fase 1 (Setup Astrowind)
3. **Sincronização:** Atualizar PRD/epic para refletir nova abordagem
4. **Entrega:** Landing page personalizada com Astrowind em ~1 dia

---

**Status:** Aguardando aprovação para iniciar execução  
**Next Step:** Clone Astrowind e iniciar Fase 1
