# Especificação Técnica e Editorial: Consolidação da Landing Page Lexi Alpha

> **ID da Story:** `STORY-LP-CONSOLIDATION`  
> **Status:** ESPECIFICAÇÃO CONSOLIDADA (Fase 4 - Spec Pipeline)  
> **Autor:** `@pm` (Morgan / KAIROS NOESIS)  
> **Data:** 12 de Outubro de 2026  
> **Fontes Canônicas:**  
> - `lexi-landing-esboco.canvas` (Arquitetura visual e de seções)  
> - `Benchmarking de metodologias de inglês e meta-metodologia da Lexi.md` (@Castle)  
> - `Gabe's-design-system.md` (Design System Supabase Dark)  
> - Diretrizes do Operador Gabe (Aulas presenciais/online com Gabe, R$ 197/mês, 10 vagas)

---

## 1. Visão Geral & Posicionamento

A Landing Page da **Lexi Alpha** é a superfície oficial de conversão para fechar os **10 primeiros alunos co-fundadores da Turma Alpha** com foco em geração rápida de caixa (**R$ 197 por mês**).

### A Proposta Única de Valor (UVP)
> **"Você não estuda para falar. Você fala para aprender."**  
> Mentoria direta com o professor **Gabriel Lima (Gabe)** (3 sessões semanais) potencializada pela **Lexi Alpha**, uma IA conversacional de autoria própria disponível 24h no celular para treino diário sem constrangimento.

### Pilares de Rompimento com o Mercado
1. **Transparência Radical (Nadar contra a maré estilo Mairo Vergara):** Zero promessas milagrosas de *"fique fluente em 3 ou 6 meses"*. A Cambridge estima 500 a 600 horas guiadas até o B2. O compromisso é com ensino sério, consistência e respeito.
2. **Desmonte do Aluno Eterno:** Denúncia do modelo predatório das escolas tradicionais, que lucram mantendo o aluno por anos pagando mensalidade sem desenvolver reflexo oral espontâneo.
3. **Professor no Centro:** Nenhuma EdTech ou professor do mercado possui uma IA conversacional de autoria própria como ferramenta complementar. O Gabe lidera as aulas e a IA dá o suporte diário.
4. **Preço de Baixo Atrito:** Mensalidade acessível de **R$ 197/mês** (sem fidelidade de 1 ano, sem taxa de matrícula e com garantia de 30 dias com devolução 100% via Pix).

---

## 2. Design System: Supabase Dark (`Gabe's-design-system.md`)

A identidade visual adota o padrão estético de plataformas para desenvolvedores do **Supabase**:

| Propriedade | Valor / Token | Aplicação |
|:---|:---|:---|
| **Background Principal** | `#0f0f0f` | Fundo nativo da página (near-black, nunca cinza lavado) |
| **Superfície Elevada** | `#171717` | Containers, cards elevados e header blur |
| **Cards & Elementos** | `#141414` | Blocos de conteúdo com borda fina |
| **Bordas** | `#242424` / `#2e2e2e` | Contraste sutil e elegante, dispensando sombras pesadas |
| **Marca / Ação Primária** | `#3ecf8e` (Emerald) | CTAs principais, indicadores ativos, acentos de destaque |
| **Ação Secundária** | `#00c573` (Link Green) | Links interativos e hover states |
| **Texto Primário** | `#fafafa` | Títulos e leitura com contraste máximo |
| **Texto Secundário** | `#898989` / `#b4b4b4` | Parágrafos de apoio e legendas |
| **Botões de Ação** | `rounded-full` (9999px) | *Pill buttons* para CTAs principais (Supabase style) |
| **Cards** | `rounded-2xl` (16px) | Borda de 1px com raio arredondado refinado |
| **Tipografia** | Inter + Source Code Pro | Interface amigável + marcadores técnicos em monospace |

---

## 3. Arquitetura Seção a Seção (10 Componentes Canônicos)

### Seção 0: Header & Navegação Fixa (`Header`)
- **Logo:** `Gabe's English` com badge pill em monospace: `TURMA ALPHA`.
- **Menu Desktop:** Como Funciona (`#metodo`), Diagnóstico (`#quiz`), Rotina & IA (`#aulas-ia`), Turma Alpha (`#pricing`), Dúvidas (`#faq`).
- **CTA Topo:** Botão pill emerald: `Garantir Vaga • R$ 197` (scroll para `#pricing`).

### Seção 1: Hero (`Hero.astro`)
- **Badge:** Pulsante em verde: `Turma Alpha • Apenas 10 Vagas • Aulas com Gabe + IA Lexi Alpha`.
- **Headline:** *Você não estuda para falar. Você fala para aprender.*
- **Subheadline:** Acompanhamento direto com Gabriel Lima (Gabe) somado à Lexi Alpha para treino diário no celular. Sem mentiras de fluência em meses.
- **CTAs Duplos:** `Fazer Diagnóstico de Fala (3 min)` (scroll `#quiz`) + `Como Funciona o Método` (`#metodo`).
- **Microcopy:** R$ 197/mês • 10 Vagas • 2x Sessões Rápidas + 1x Sessão Estendida • IA Diária 24/7.

### Seção 2: O Problema (`Problem.astro`)
- **Badge:** Vermelho discreto: `O Que as Escolas Não Dizem`.
- **Headline:** *Sem mentiras de "fique fluente em poucos meses".*
- **3 Fatos do Mercado:**
  1. *O Modelo do Aluno Eterno:* Escolas lucram com a retenção do aluno por anos em módulos infinitos.
  2. *Regras Gramaticais vs. Reflexo de Fala:* Ninguém aprendeu português decorando pronomes antes de falar.
  3. *O Vácuo entre Aulas:* Fazer 1h de aula e passar 6 dias sem falar destrói a memória de trabalho.
- **Card Visual:** O ciclo comum de frustração e abandono.

### Seção 3: A Solução (`Solution.astro`)
- **Headline:** *A Mentoria de um Professor de Verdade com a Potência da IA no Seu Bolso.*
- **3 Pilares Integrados:**
  1. *Encontros Diretos com o Gabe:* 2 sessões semanais rápidas de alinhamento + 1 sessão estendida de conversação plena.
  2. *IA Autoral para Treino Diário:* Disponível 24h no WhatsApp/navegador para treinar áudio sem vergonha.
  3. *Feedback Natural Imediato:* Recasting e prompts para falar como um nativo, sem caneta vermelha.

### Seção 4: Diagnóstico Interativo de 3 Minutos (`QuizSection.astro`)
- **Passo 1 (O Travamento):** Cenário de reação de surpresa (congelamento, falta de vocabulário, vocabulário repetitivo, reuniões de trabalho).
- **Passo 2 (Cenário do Dia a Dia):** O barista pergunta *"Hey there, what can I get started for you today?"*.
- **Passo 3 (O Objetivo Principal):** Destravamento desejado (perder vergonha, viagens, trabalho internacional, liderança).
- **Resultado:** Cálculo imediato do estágio (1 a 4), mensagem de acolhimento e botão com confetes disparando link direto para o WhatsApp:
  > `https://wa.me/5511967239791?text=Oi%20Gabe!%20Fiz%20o%20diagnóstico...`

### Seção 5: Os 5 Estágios Práticos da Fala (`MontanhaB2.astro`)
- **Headline:** *Os 5 Estágios da Sua Fala: O Que Você Realmente Consegue Fazer.*
- **Estágios:**
  - *Estágio 1 (Descongelamento):* Perder o medo de falar e pedidos simples.
  - *Estágio 2 (Autonomia em Viagens):* Aeroporto, hotel e imprevistos sem tradutor.
  - *Estágio 3 (Conversação Cotidiana):* Diálogo natural sem repetir sempre as mesmas 5 palavras.
  - *Estágio 4 (Profissional & Carreira):* Reuniões de trabalho e argumentos claros.
  - *Estágio 5 (Autonomia Plena):* Expressão espontânea com humor e nuances, lapidado com o Gabe.

### Seção 6: Estrutura da Rotina (`LexiAlphaFeatures.astro`)
- **Rotina Sustentável:**
  - 3 aulas ao vivo por semana com o Gabe.
  - Mínimo de 15 minutos por dia na IA (sem teto).
  - Prática por áudio e voz em velocidade real.
  - Frases prontas (chunks) em vez de tradução mental.
  - Ponte pedagógica Gabe + IA (diagnóstico contínuo de gargalos).
  - Acesso mobile leve e descomplicado.

### Seção 7: Fundamentos Científicos (`SocialProof.astro`)
- **Evidências do Benchmark:**
  1. *Input Compreensível ($i+1$) - Krashen:* Aquisição biológica natural.
  2. *Repetição Espaçada FSRS:* Retenção calculada contra a curva do esquecimento.
  3. *Recasting & Prompts de Autocorreção:* Meta-análise de Lyster & Saito (2010).
  4. *Salvaguarda Anti-Muleta:* Evidência de Bastani et al. (PNAS 2025) incorporada.
  5. *Teste sem trava:* Diagnóstico aberto na página.

### Seção 8: Oferta Turma Alpha (`Pricing.astro`)
- **Preço:** R$ 197 por mês.
- **Escassez:** 10 vagas reais.
- **Condições:** Sem fidelidade, sem matrícula, cancelamento livre.
- **Garantia:** 30 dias (reembolso integral via Pix se o aluno não se adaptar).

### Seção 9: FAQ Transparente (`Faq.astro`)
- Respostas diretas e honestas para as principais dúvidas sobre metodologia, rotina, cancelamento e papel da IA.

### Seção 10: CTA Final & Footer (`FinalCTA.astro` + `Footer.astro`)
- Última chamada para as 10 vagas, comparação rápida e créditos institucionais.

---

## 4. Critérios de Aceite e Verificação

| Critério | Verificação Esperada | Status |
|:---|:---|:---:|
| **AC-01** | Zero menções a Gabriel Ferreira, LexiQuest e promessas de meses | ✅ Verificado |
| **AC-02** | Professor Gabriel Lima posicionado com 3 aulas semanais na cópia | ✅ Verificado |
| **AC-03** | Oferta de R$ 197/mês, 10 vagas e garantia de 30 dias refletida | ✅ Verificado |
| **AC-04** | Quiz de 3 minutos calcula estágio e gera deep link correto do WhatsApp | ✅ Verificado |
| **AC-05** | Design System Supabase Dark (tokens #0f0f0f, #3ecf8e e pills 9999px) ativo | ✅ Verificado |
| **AC-06** | Build Astro verde sem erros de tipagem em < 5 segundos | ✅ Verificado (1.17s) |
