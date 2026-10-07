# UX/UI Audit Report - LEXI Alpha Landing

**Data:** 2026-10-06
**Auditores:** @ux-design-expert, @ui-ux-pro-max, @impeccable
**Status:** CRITICAL - Requer correção imediata

---

## 🚨 Descobertas Críticas

### 1. LexiQuest Onipresente (53 ocorrências)

**Arquivos afetados:**
- Hero.astro (1): VSL scene title
- Faq.astro (4): Perguntas e respostas
- AlunoEterno.astro (3): Título e descrição
- Footer.astro (1): Rodapé
- BottomNav.astro (14): Modal mobile completo
- OfertaAlpha.astro (4): Oferta e CTA WhatsApp
- SentenceBuilder.astro (4): Comentários e eventos
- PrepTrainer.astro (3): Comentários e eventos
- gamification/ (6+): Comentários técnicos, types
- courses/ (2): Config engine

**Impacto:** Confusão de marca entre LexiQuest (icebox) e LEXI Alpha (produto atual)

**Recomendação:**
- Substituir todas as menções visíveis ao usuário por "LEXI Alpha"
- Manter comentários técnicos se necessário para contexto de código
- Remover completamente BottomNav modal "Jornada LexiQuest™"

---

### 2. Montanha B2 Não Renderiza (Bloco Preto)

**Status:** Não investigado ainda - requer verificação visual

**Hipóteses prováveis:**
- Background color conflitando
- Overflow CSS ocultando conteúdo
- Assets SVG não carregando
- Z-index problemático
- Conflito com animações GSAP

**Recomendação:**
- Abrir browser preview para ver o problema real
- Inspecionar elemento no navegador
- Verificar console para erros de assets
- Testar removendo animações GSAP temporariamente

---

### 3. SentenceBuilder Ainda Existe

**Status:** Arquivo SentenceBuilder.astro ainda presente

**Impacto:**
- Componente quebrado ainda no código
- Import removido de index.astro mas arquivo existe
- Comentários e eventos ainda referenciam "lexiquest:exercise-result"

**Recomendação:**
- Remover arquivo SentenceBuilder.astro completamente
- Remover PrepTrainer.astro (também Layer 3 Practice Surface)
- Remover referências a "lexiquest:exercise-result" em gamification/
- Limpar event listeners em scripts

---

### 4. MANA Design System Parcialmente Aplicado

**Status:** global.css tem variáveis, mas componentes não usam consistentemente

**Problemas:**
- Variáveis CSS definidas mas Tailwind classes ainda usam valores hardcoded
- Cores não seguem padrão Sentry (#6a5fc1, #1f1633, #c2ef4e)
- Tipografia Inter definida mas Outfit ainda em index.astro
- Buttons não seguem inset shadow pattern
- Cards não seguem glass effect pattern

**Recomendação:**
- Remover Outfit/DMSans de index.astro, usar apenas Inter
- Substituir Tailwind hardcoded por variáveis CSS
- Aplicar button styles: background #79628c, inset shadow
- Aplicar card styles: backdrop-filter blur(18px) saturate(180%)
- Aplicar spacing system: base unit 8px

---

## 📋 Recomendações por Agente

### @ux-design-expert (Uma) - UX Audit

**Foco:** Hierarquia visual, fluxo de usuário, acessibilidade

**Recomendações:**
1. **Hero Section**
   - Simplificar copy atual (ainda muito texto)
   - Remover VSL modal complexo (muito pesado)
   - CTA direto para quiz (diagnóstico)
   - Reduzir altura de hero (92vh é excessivo)

2. **Information Architecture**
   - Remover BottomNav modal (jornada gamificada)
   - Simplificar navegação mobile
   - Reduzir seções (muito conteúdo para landing)
   - Focar em: Hero → Diagnóstico → Oferta

3. **Accessibility**
   - Verificar contraste WCAG AA em todos os textos
   - Adicionar aria-labels em botões
   - Verificar focus states em todos os elementos interativos
   - Testar navegação por teclado

---

### @ui-ux-pro-max - Design System

**Foco:** Cores, tipografia, spacing, layout, componentes

**Recomendações:**
1. **Design System LEXI Alpha**
   - Gerar design system específico para produto de idiomas
   - Keywords: "language learning", "education", "modern dark"
   - Cores: adaptar Sentry para education (mais friendly)
   - Tipografia: Inter + Google Font pairing

2. **Component Specifics**
   - Buttons: primary, secondary, tertiary seguindo MANA
   - Cards: glassmorphism com backdrop-filter
   - Forms: inputs com border radius 8px, focus ring
   - Modals: backdrop blur, border, shadow

3. **Spacing & Layout**
   - Aplicar spacing system (8px base unit)
   - Container max-width: 1152px
   - Responsive breakpoints: mobile <576px, tablet 576-768px, desktop >768px
   - Vertical spacing: 64-80px entre seções

---

### @impeccable - Visual Quality

**Foco:** Polish, profissionalismo, micro-interações, brand consistency

**Recomendações:**
1. **Brand Consistency**
   - Nome consistente: "LEXI Alpha" (nunca "LexiQuest™")
   - Badge: "LEXI Alpha • Método MANA 3.0"
   - Tons: purple primary, lime-green accent
   - Nenhum emoji em UI (usar SVG icons)

2. **Visual Polish**
   - Remover em dashes (—) excessivos no copy
   - Remover padrão "não é isso, é isso"
   - Simplificar copy para ser mais direto
   - Adicionar micro-interactions (hover, focus, active states)

3. **Professionalism**
   - Hero CTA deve ser claro e direto
   - Remover VSL modal (parece salesy)
   - Diagnóstico deve parecer profissional, não "game"
   - Oferta deve ser clara e transparente

---

## 🎯 Priorização de Correções

### P0 (Crítico - Bloqueia Launch)
1. Remover todas as menções visíveis de LexiQuest
2. Corrigir Montanha B2 (bloco preto)
3. Remover SentenceBuilder e PrepTrainer

### P1 (Alta Impacto)
4. Aplicar MANA Design System completamente
5. Remover BottomNav modal
6. Simplificar Hero (reduzir texto, remover VSL)

### P2 (Média Impacto)
7. Aplicar accessibility WCAG AA
8. Ajustar spacing e layout
9. Polish micro-interações

---

## 📝 Próximos Passos

1. **@dev** implementar Story 1.1 (Limpeza LexiQuest)
2. **@dev** implementar Story 1.2 (Corrigir Montanha B2)
3. **@dev** implementar Story 1.3 (Remover SentenceBuilder)
4. **@dev** implementar Story 1.4 (Aplicar MANA Design System)
5. **@qa** validar todas as correções
6. **@devops** deploy após validação

---

## 🔍 Verificação de Design System

**Recomendação:** Gerar design system específico com ui-ux-pro-max:

```bash
python "${CLAUDE_PLUGIN_ROOT}/.claude/skills/ui-ux-pro-max/scripts/search.py" "language learning education modern dark" --design-system -p "LEXI Alpha"
```

Isso gerará:
- Cores específicas para educação
- Tipografia apropriada
- Component patterns
- Anti-patterns a evitar
