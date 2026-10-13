# Instagram Production Workflow - LEXI Alpha

Workflow de produção de conteúdo para Instagram com automação via IA.

---

## Rotina Semanal (Domingo)

### 1. Planejamento (30 min)

**Objetivo**: Definir temas da semana baseado no calendário editorial do @conversation.

**Checklist**:
- [ ] Revisar calendário editorial do @conversation (plan-b51bd9375e1714e1.md)
- [ ] Selecionar 7 temas da semana (1 por dia)
- [ ] Selecionar 3 temas de carrossel (terça e quinta)
- [ ] Definir hooks para cada post (usar `instagram-content-bank.md`)
- [ ] Definir CTAs (variar entre diagnóstico e WhatsApp)
- [ ] Documentar em Notion/Google Sheets

**Ferramentas**:
- `instagram-content-bank.md` (conceitos e hooks)
- Calendário editorial (@conversation)
- Notion/Google Sheets (planejamento)

---

### 2. Geração de Scripts (1h)

**Objetivo**: Gerar scripts para Reels e Carrossels usando prompt templates.

**Checklist**:
- [ ] Usar prompt template do `instagram-prompt-templates.md`
- [ ] Gerar 7 scripts de Reel (1 por dia)
- [ ] Gerar 3 scripts de Carrossel (terça e quinta)
- [ ] Gerar captions para todos os posts
- [ ] Revisar e ajustar tom (human review obrigatório)
- [ ] Validar que CTA aponta para diagnóstico na bio
- [ ] Remover jargão de marketing (funil, conversão, etc.)

**Ferramentas**:
- Claude/ChatGPT (geração de scripts)
- `instagram-prompt-templates.md` (templates)
- `instagram-content-bank.md` (conceitos)

**Human Review Checklist**:
- [ ] Tom é empático, não de marketer
- [ ] Zero jargão de marketing
- [ ] Exemplos do dia a dia do aluno
- [ ] CTA claro (diagnóstico na bio)
- [ ] Duração adequada (30-45s para Reels)
- [ ] Hook impactante (para o scroll)

---

### 3. Geração de Visuals (1h)

**Objetivo**: Gerar thumbnails e assets visuais usando Midjourney/Canva.

**Checklist**:
- [ ] Usar prompt template para Midjourney (`instagram-prompt-templates.md`)
- [ ] Gerar 7 thumbnails (1 por Reel)
- [ ] Gerar 3 conjuntos de slides (1 por Carrossel)
- [ ] Revisar consistência visual com design system
- [ ] Validar cores (slate-950, emerald-400, purple-600, amber-400)
- [ ] Validar font (Inter)
- [ ] Validar contraste (4.5:1 mínimo)
- [ ] Criar assets para Stories (templates)

**Ferramentas**:
- Midjourney (thumbnails e assets)
- Canva/Figma (templates e refinamento)
- `instagram-prompt-templates.md` (prompts visuais)
- Design system LEXI Alpha (cores, font)

**Visual Checklist**:
- [ ] Background: slate-950 (#0f172a)
- [ ] Accent: emerald-400 (#34d399)
- [ ] Font: Inter
- [ ] Contraste: 4.5:1 mínimo
- [ ] Clean, minimal, data-driven
- [ ] Texto legível (headline > 24px)
- [ ] Sem emojis excessivos (máximo 1-2)

---

### 4. Agendamento (30 min)

**Objetivo**: Agendar posts para a semana usando Later/Buffer.

**Checklist**:
- [ ] Upload assets para Later/Buffer
- [ ] Agendar Reels (12:00 e 19:00)
- [ ] Agendar Carrossels (14:00 terça e quinta)
- [ ] Criar Stories templates (09:00, 14:00, 20:00)
- [ ] Configurar UTM tracking em todos os links
- [ ] Revisar horários (almoço e noite)
- [ ] Validar que todos os CTAs apontam para bio

**Ferramentas**:
- Later/Buffer (agendamento)
- `instagram-link.astro` (link na bio)
- UTM parameters (tracking)

**Horários de Posting**:
- **Reels**: 12:00 (almoço), 19:00 (noite)
- **Carrossels**: 14:00 (tarde)
- **Stories**: 09:00 (manhã), 14:00 (tarde), 20:00 (noite)

**UTM Parameters**:
- Profile link: `?utm_source=instagram&utm_medium=profile_link&utm_campaign=lexi_alpha_organic`
- Stories: `?utm_source=instagram&utm_medium=stories&utm_campaign=story_[date]`
- Reels: `?utm_source=instagram&utm_medium=reels&utm_campaign=reel_[id]`
- Carousels: `?utm_source=instagram&utm_medium=carousel&utm_campaign=carousel_[id]`

---

## Rotina Diária (Segunda-Sábado)

### Manhã (09:00)

**Objetivo**: Postar Story motivacional + streak.

**Checklist**:
- [ ] Postar Story motivacional (streak, XP, progresso)
- [ ] Revisar comentários do dia anterior
- [ ] Responder a comentários (usar templates)
- [ ] Responder a DMs (usar templates)
- [ ] Engajar com posts da comunidade (like + comment)

**Ferramentas**:
- Instagram app (postar stories)
- `instagram-prompt-templates.md` (templates de resposta)
- Notion (rastrear engajamento)

**Template de Story Manhã**:
- Texto: "Dia [X] de streak 🔥"
- CTA: "Continuar praticando → link na bio"
- Interactive: Slider (tempo de prática)

---

### Tarde (14:00)

**Objetivo**: Postar Story com dica rápida + poll.

**Checklist**:
- [ ] Postar Story com dica rápida (chunk do dia)
- [ ] Adicionar poll/quiz (engajamento)
- [ ] Engajar com posts da comunidade (like + comment)
- [ ] Reply comments (within 1h)
- [ ] Monitorar analytics do dia

**Ferramentas**:
- Instagram app (postar stories)
- Instagram Insights (analytics)
- `instagram-content-bank.md` (chunks do dia)

**Template de Story Tarde**:
- Texto: "Chunk do dia: [CHUNK]"
- Poll: "Você já usa esse chunk? (Sim | Não)"
- CTA: "Aprender mais chunks → link na bio"

---

### Noite (20:00)

**Objetivo**: Postar Story behind the scenes + CTA.

**Checklist**:
- [ ] Postar Story behind the scenes (mentoria, diagnóstico, conteúdo)
- [ ] Adicionar CTA (diagnóstico ou WhatsApp)
- [ ] Revisar analytics do dia
- [ ] Ajustar se necessário (horário, formato, CTA)
- [ ] Planejar próxima semana (ajustes baseados em dados)

**Ferramentas**:
- Instagram app (postar stories)
- Instagram Insights (analytics)
- Notion (planejamento)

**Template de Story Noite**:
- Texto: "Behind the scenes: [CENÁRIO]"
- CTA: "Fazer diagnóstico gratuito → link na bio"
- Interactive: Question (qual seu maior desafio?)

---

## Sábado (Review Semanal)

**Objetivo**: Review analytics e ajustar calendário da próxima semana.

**Checklist**:
- [ ] Review analytics semanal (Instagram Insights)
- [ ] Identificar best-performing hooks (views, engagement)
- [ ] Identificar worst-performing posts (ajustar ou remover)
- [ ] Ajustar calendário da próxima semana (baseado em dados)
- [ ] Gerar novos scripts baseado em best performers
- [ ] Documentar aprendizados (Notion)

**Métricas a Monitorar**:
- **Reach**: Impressões totais
- **Engagement Rate**: (likes + comments + shares) / reach
- **Profile Visits**: Visitas ao perfil
- **Link Clicks**: Cliques na bio
- **Video Views**: Views dos Reels
- **Watch Time**: Tempo médio de assistência

**Ferramentas**:
- Instagram Insights (analytics)
- Plausible (UTM tracking)
- Notion (documentação)

**Ajustes Baseados em Dados**:
- Se engagement < 3%: Ajustar hook ou formato
- Se watch time < 15s: Ajustar duração ou introdução
- Se link clicks < 5%: Ajustar CTA ou urgência
- Se comments < 2%: Adicionar pergunta no caption

---

## Templates de Resposta

### Resposta a Comentários

**Template 1: Agradecimento + CTA**
```
Valeu, [nome]! O segredo é praticar com chunks, não gramática.
Faz o diagnóstico gratuito pra ver onde você está (link na bio) 🚀
```

**Template 2: Resposta a Pergunta**
```
Boa pergunta, [nome]! [RESPOSTA BREVE].
Quer saber mais? Faz o diagnóstico no link da bio 🎯
```

**Template 3: Resposta a Crítica**
```
Entendo seu ponto, [nome]. O LEXI Alpha funciona diferente porque [EXPLICAÇÃO].
Experimenta o diagnóstico gratuito pra ver se faz sentido pra você 👇
```

**Template 4: Resposta a Dúvida sobre Preço**
```
[Nome], a mentoria é R$ 197/mês com garantia 30 dias.
Faz o diagnóstico gratuito pra ver o seu nível e eu te explico melhor 💬
```

**Template 5: Resposta a Dúvida sobre Método**
```
[Nome], o método usa IA com Recasting Natural — correção sem julgamento.
Faz o diagnóstico pra entender como funciona na prática 🚀
```

---

### Resposta a DMs

**Template 1: Interesse Geral**
```
Oi [nome]! O LEXI Alpha usa IA com Recasting Natural pra você falar sem vergonha.
Consigo te passar mais detalhes no WhatsApp. Qual seu número? 💬
```

**Template 2: Dúvida sobre Método**
```
Oi [nome]! O LEXI Alpha foca em fala, não gramática.
Quer que eu te explique no WhatsApp? Manda teu número 📱
```

**Template 3: Dúvida sobre Preço**
```
Oi [nome]! A mentoria é R$ 197/mês com 10 vagas.
Posso te mandar os detalhes no WhatsApp. Qual seu número? 💰
```

**Template 4: Dúvida sobre Garantia**
```
Oi [nome]! Tem garantia 30 dias incondicional — se não gostar, devolvo 100%.
Manda teu número no WhatsApp que te explico tudo 📱
```

**Template 5: Conversa Avançada**
```
[Nome], vendo que você está interessado! O melhor é falarmos no WhatsApp.
Qual teu número? Aí te explico o método passo a passo 💬
```

---

### Auto-Reply (ManyChat/Chatfuel)

**Template**
```
Obrigado pelo interesse! Faz o quiz no link para diagnóstico personalizado → [link]
Depois do diagnóstico, posso te explicar o método no WhatsApp 💬
```

**Link**: `https://mana-landing-production.up.railway.app?utm_source=instagram&utm_medium=dm_auto_reply`

---

## Checklist de Qualidade

### Antes de Postar (Reels)
- [ ] Script revisado (human review)
- [ ] Thumbnail com design system consistente
- [ ] Duração adequada (30-45s)
- [ ] Hook impactante (primeiros 3s)
- [ ] CTA claro (diagnóstico na bio)
- [ ] Zero jargão de marketing
- [ ] Contraste visual adequado (4.5:1)
- [ ] Font Inter aplicada
- [ ] Cores corretas (slate-950, emerald-400)
- [ ] UTM tracking configurado

### Antes de Postar (Carrossels)
- [ ] 7 slides completos
- [ ] Máximo 20 palavras por slide
- [ ] 1 conceito por slide
- [ ] Visual > texto (emoji anchors)
- [ ] CTA no último slide
- [ ] Número de slide visível (1/7, 2/7, etc.)
- [ ] Design system consistente
- [ ] UTM tracking configurado

### Antes de Postar (Stories)
- [ ] Interactive element (poll, quiz, slider)
- [ ] CTA claro (diagnóstico ou WhatsApp)
- [ ] Design system consistente
- [ ] Texto legível (headline > 24px)
- [ ] Contraste adequado (4.5:1)
- [ ] UTM tracking configurado

---

## Ferramentas e Setup

### Ferramentas de Criação
- **Claude/ChatGPT**: Scripts, captions, hooks
- **Midjourney**: Thumbnails e assets visuais
- **Canva/Figma**: Profile picture, highlights, carrossels
- **CapCut**: Edição de Reels (templates + AI voiceover)

### Ferramentas de Gestão
- **Later/Buffer**: Schedule posts, analytics
- **ManyChat/Chatfuel**: Auto-responder DMs
- **Zapier**: Integração Instagram → Landing → WhatsApp

### Ferramentas de Analytics
- **Instagram Insights**: Native analytics
- **Plausible**: UTM tracking (já integrado na landing)
- **Notion/Google Sheets**: Content calendar tracking

### Setup Inicial
1. Criar conta Later/Buffer
2. Conectar perfil Instagram
3. Configurar UTM tracking
4. Criar pasta Google Drive para assets
5. Configurar ManyChat (opcional, Fase 2)
6. Setup calendário editorial
7. Criar templates de resposta
8. Testar flow Instagram → Landing

---

## Troubleshooting

### Problema: Baixo engagement (< 3%)
**Solução**:
- Ajustar hook (mais impactante)
- Adicionar pergunta no caption
- Aumentar frequência de stories
- Testar diferentes formatos (Reel vs Carrossel)

### Problema: Baixo watch time (< 15s)
**Solução**:
- Ajustar introdução (mais direta)
- Reduzir duração (30s ideal)
- Adicionar visual interest (text overlay, motion)
- Testar diferentes hooks

### Problema: Baixo CTR bio (< 5%)
**Solução**:
- Ajustar CTA (mais específico)
- Adicionar urgência (limitado no tempo)
- Testar CTA (diagnóstico vs WhatsApp)
- Aumentar social proof (depoimentos)

### Problema: Comentários < 2%
**Solução**:
- Adicionar pergunta no caption
- Usar polls nos stories
- Engajar com comunidade (reply comments)
- Postar conteúdo polêmico/controversial (com cuidado)

---

## Métricas de Sucesso

### Semanal
- **Reach**: 1K+ primeiros 30 dias
- **Engagement Rate**: > 3% (benchmark: 1-2%)
- **Profile Visits**: 200+ primeiros 30 dias
- **Link Clicks**: 100+ primeiros 30 dias

### Mensal
- **Follower Growth**: 200+ primeiros 30 dias
- **Quiz Completion Rate**: > 20% (from Instagram traffic)
- **WhatsApp Leads**: 10+ primeiros 30 dias
- **Conversion to Paid**: 2+ alunos (R$ 394)

### Automação
- **Content Creation Time**: < 2h/semana (vs 10h manual)
- **Scheduling Coverage**: 100% (no gaps)
- **Auto-Reply Rate**: > 80% of DMs
