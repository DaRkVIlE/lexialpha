# Specification: STORY-LP-PREMIUM-REFACTOR

**Story ID:** STORY-LP-PREMIUM-REFACTOR  
**Author:** @pm (Morgan)  
**Status:** In Review  
**Date:** 2026-10-12  

---

## 1. Escopo & Decisões de Produto
Esta especificação redefine a experiência da Landing Page oficial da Lexi Alpha / Gabe's English com base na crítica direta de Gabriel Lima:
1. **Identidade Visual:** Introdução de uma logo autoral no Header e Footer com monograma geométrico GE e onda sonora vetorial.
2. **Hero:** Foco na autoridade de Gabriel, método e proposta de valor. Remoção do preço da dobra superior. CTA 'Conhecer o método na prática →' rola até `#metodo`.
3. **Bento Grid da Metodologia:** Exposição convincente e aprofundada dos 4 pilares da aquisição acelerada (Chunks, Input i+1, Sem Tradução Mental, Feedback Natural sem caneta vermelha).
4. **Tabs dos 5 Estágios (CEFR + Cambridge):** Componente interativo que exibe de A1 a C1 com as horas oficiais de Cambridge English e como a abordagem de Gabe destrava cada fase.
5. **Formato das Aulas & LibreChat:** Encontros de alinhamento 100% individuais 1 a 1 com Gabe. Tutor de IA hiper-personalizado no LibreChat (sem menções precoces a bot de WhatsApp).
6. **Erradicação de Travessões:** Zero uso de '—' em todos os arquivos e componentes.
7. **Remoção do Quiz Público:** Retirada do componente `QuizSection.astro` da árvore de componentes da página.

---

## 2. Mapa dos Componentes a Refatorar/Criar
- `src/components/Logo.astro` (Novo): Monograma GE vetorial com frequência de voz em SVG.
- `src/components/Header.astro` (Atualizado): Header fixo com a nova Logo, navegação sem preço no CTA.
- `src/components/Hero.astro` (Atualizado): Sem preço, com CTA para `#metodo` e design limpo.
- `src/components/Solution.astro` (Substituído por Bento Grid): Apresentação dos pilares com cartões Bento modernos.
- `src/components/MontanhaB2.astro` (Substituído por Estágios Tabbed): Tabs interativas A1 a C1 com Cambridge Hours e atuação de Gabe.
- `src/components/LexiAlphaFeatures.astro` (Atualizado): Enfatizando LibreChat e personalização 1 a 1 do tutor.
- `src/components/Pricing.astro` (Atualizado): Mantendo R$ 197/mês, 10 vagas, sem fidelidade e com garantia Pix de 30 dias.
- `src/components/QuizSection.astro`: Desconectado de `src/pages/index.astro`.
- `src/pages/index.astro`: Orquestração da nova estrutura.

---

## 3. Critérios de Aceite
- [ ] Build estático `npm run build` verde (0 erros).
- [ ] Zero ocorrências do travessão '—' na página gerada.
- [ ] Logo vetorial GE visível no topo e no rodapé.
- [ ] Tabs interativas dos 5 estágios funcionando sem recarregar a página.
- [ ] Preço não aparece no Hero nem no Header fixo.
