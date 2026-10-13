# Instagram Tools Guide - LEXI Alpha

Guia completo de ferramentas para criação, gestão e automação de conteúdo Instagram.

---

## Ferramentas de Criação

### Escrita

#### Claude (Anthropic)
**Uso**: Scripts, captions, hooks
**Prompt Templates**: `instagram-prompt-templates.md`
**Asset Bank**: `instagram-content-bank.md`
**Vantagens**:
- Melhor para copywriting em português
- Entende bem o contexto educacional
- Gera outputs consistentes com tom de mentor

**Alternativas**:
- **ChatGPT (GPT-4o)**: Similar, mas às vezes mais "marketer"
- **Gemini Flash**: Mais rápido, mas menos detalhado
- **Perplexity**: Bom para pesquisa, não para copy

**Setup**:
1. Criar conta em claude.ai
2. Salvar `instagram-prompt-templates.md` como reference
3. Criar custom prompts para cada tipo de conteúdo
4. Usar asset bank para gerar conteúdo rápido

---

### Visual

#### Midjourney
**Uso**: Thumbnails e assets visuais
**Prompt Templates**: `instagram-prompt-templates.md`
**Vantagens**:
- Melhor qualidade visual
- Prompt templates funcionam bem
- Consistência de estilo

**Alternativas**:
- **DALL-E 3**: Alternativa para UI mockups
- **Stable Diffusion**: Open source, mas mais complexo
- **Canva AI**: Mais simples, mas menos controle

**Setup**:
1. Criar conta em Midjourney (Discord)
2. Usar prompt templates do `instagram-prompt-templates.md`
3. Validar cores com design system (slate-950, emerald-400)
4. Criar style presets para consistência

**Prompt Tips**:
- Especificar cor exata em hex (#0f172a, #34d399)
- Incluir "Inter font" para tipografia
- Usar "clean minimal design" para estilo LEXI Alpha
- Adicionar "high contrast" para legibilidade

---

#### Canva
**Uso**: Profile picture, highlights, carrossels
**Vantagens**:
- Templates prontos
- Fácil de usar
- Export em alta qualidade

**Alternativas**:
- **Figma**: Mais controle, mas mais complexo
- **Adobe Express**: Similar ao Canva
- **Photoshop**: Overkill para Instagram

**Setup**:
1. Criar conta no Canva
2. Criar template 9:16 para Reels/Stories
3. Criar template 1:1 para Carrossels
4. Definir palette de cores (slate-950, emerald-400, purple-600, amber-400)
5. Adicionar font Inter ao Canva

**Templates Necessários**:
- Profile picture (circular, 400x400)
- Highlight covers (circular, 400x400)
- Reel thumbnail (9:16, 1080x1920)
- Carrossel slide (1:1, 1080x1080)
- Story template (9:16, 1080x1920)

---

### Edição de Vídeo

#### CapCut
**Uso**: Edição de Reels (templates + AI voiceover)
**Vantagens**:
- Templates prontos
- AI voiceover embutido
- Fácil para mobile

**Alternativas**:
- **Premiere Rush**: Alternativa profissional
- **InShot**: Alternativa mobile
- **DaVinci Resolve**: Overkill, mas gratuito

**Setup**:
1. Baixar CapCut (mobile ou desktop)
2. Criar projeto 9:16 (1080x1920)
3. Importar thumbnail do Midjourney
4. Adicionar script como caption
5. Usar AI voiceover (opcional)
6. Exportar em 1080p

**Workflow**:
1. Importar thumbnail
2. Adicionar text overlay (headline)
3. Adicionar script como caption
4. Usar AI voiceover ou gravar voz própria
5. Adicionar música (royalty-free)
6. Exportar em 1080p

---

## Ferramentas de Gestão

### Agendamento

#### Later
**Uso**: Schedule posts, analytics
**Vantagens**:
- UI intuitiva
- Analytics embutidos
- Suporta Reels, Carrossels, Stories
- Preview antes de postar

**Alternativas**:
- **Buffer**: Similar, mas UI diferente
- **Hootsuite**: Enterprise, mais caro
- **Sprout Social**: Enterprise, muito caro

**Setup**:
1. Criar conta em Later.com
2. Conectar perfil Instagram
3. Criar calendário semanal
4. Configurar horários de posting
5. Adicionar UTM tracking nos links

**Horários Recomendados**:
- Reels: 12:00 (almoço), 19:00 (noite)
- Carrossels: 14:00 (tarde)
- Stories: 09:00 (manhã), 14:00 (tarde), 20:00 (noite)

**UTM Tracking**:
- Profile link: `?utm_source=instagram&utm_medium=profile_link&utm_campaign=lexi_alpha_organic`
- Stories: `?utm_source=instagram&utm_medium=stories&utm_campaign=story_[date]`
- Reels: `?utm_source=instagram&utm_medium=reels&utm_campaign=reel_[id]`
- Carousels: `?utm_source=instagram&utm_medium=carousel&utm_campaign=carousel_[id]`

---

### Automação

#### ManyChat
**Uso**: Auto-responder DMs
**Vantagens**:
- Interface visual (no-code)
- Integração nativa com Instagram
- Fluxos complexos possíveis

**Alternativas**:
- **Chatfuel**: Similar, mas UI diferente
- **MobileMonkey**: Similar, mas menos features
- **Zapier**: Integração, mas não chatbot

**Setup**:
1. Criar conta em ManyChat.com
2. Conectar perfil Instagram
3. Criar auto-responder inicial
4. Configurar fluxo para WhatsApp
5. Testar com DM real

**Fluxo Sugerido**:
1. Usuário envia DM
2. Auto-responder: "Obrigado pelo interesse! Faz o quiz no link → [link]"
3. Usuário clica no link → Landing
4. Usuário faz quiz → WhatsApp
5. ManyChat transiciona para conversa manual

**Template de Auto-Reply**:
```
Obrigado pelo interesse! Faz o quiz no link para diagnóstico personalizado →
https://mana-landing-production.up.railway.app?utm_source=instagram&utm_medium=dm_auto_reply
Depois do diagnóstico, posso te explicar o método no WhatsApp 💬
```

---

#### Zapier
**Uso**: Integração Instagram → Landing → WhatsApp
**Vantagens**:
- Conecta qualquer ferramenta
- Workflow visual
- Automatiza processos complexos

**Setup**:
1. Criar conta em Zapier.com
2. Criar Zap: Instagram New Follower → Google Sheets
3. Criar Zap: Instagram New DM → ManyChat
4. Criar Zap: Landing Quiz Complete → WhatsApp
5. Testar cada Zap

**Zaps Sugeridos**:
- Instagram New Follower → Google Sheets (lead capture)
- Instagram New DM → ManyChat (auto-responder)
- Landing Quiz Complete → WhatsApp (seguimento)
- Instagram Comment with Keyword → Auto-reply (engajamento)

---

### Analytics

#### Instagram Insights
**Uso**: Native analytics
**Vantagens**:
- Nativo, grátis
- Dados em tempo real
- Métricas detalhadas

**Métricas Chave**:
- **Reach**: Impressões totais
- **Engagement Rate**: (likes + comments + shares) / reach
- **Profile Visits**: Visitas ao perfil
- **Link Clicks**: Cliques na bio
- **Video Views**: Views dos Reels
- **Watch Time**: Tempo médio de assistência

**Setup**:
1. Ativar conta profissional/creator
2. Acessar Insights no app Instagram
3. Configurar período (últimos 7 dias, 30 dias)
4. Exportar dados (CSV) para análise

---

#### Plausible
**Uso**: UTM tracking (já integrado na landing)
**Vantagens**:
- Privacy-first
- Lightweight
- Integra com landing

**Setup**:
1. Já integrado na landing (config.yaml)
2. Configurar UTM parameters
3. Monitorar tráfego do Instagram
4. Analisar funil Instagram → Landing → Quiz

**Relatórios**:
- Tráfego por source (instagram)
- Tráfego por medium (profile_link, stories, reels, carousel)
- Taxa de conversão (quiz completion)
- Bounce rate

---

#### Google Analytics
**Uso**: Funnel tracking
**Vantagens**:
- Detalhado
- Custom events
- Relatórios avançados

**Setup**:
1. Criar conta GA4
2. Adicionar tracking code na landing
3. Configurar eventos (quiz completion, WhatsApp click)
4. Criar funil Instagram → Landing → Quiz → WhatsApp

**Relatórios**:
- Funnel de conversão
- Eventos customizados
- Aquisição por source
- Retenção

---

## Ferramentas de Organização

### Calendário

#### Notion
**Uso**: Content calendar
**Vantagens**:
- Flexível
- Database integrado
- Colaborativo

**Alternativas**:
- **Airtable**: Database mais poderoso
- **Google Sheets**: Simples, mas menos features
- **Trello**: Kanban, mas menos detalhado

**Setup**:
1. Criar workspace no Notion
2. Criar database "Instagram Content"
3. Colunas: Data, Tipo, Hook, Status, Link
4. Integrar com calendário view
5. Adicionar tags (educacional, transformação, urgência)

**Database Schema**:
- Data (date)
- Tipo (select: Reel, Carrossel, Story)
- Hook (text)
- Status (select: Planejado, Criado, Agendado, Postado)
- Link (url)
- Tags (multi-select: educacional, transformação, urgência, bastidores)

---

#### Airtable
**Uso**: Alternativa com database
**Vantagens**:
- Database mais poderoso
- Relacionamentos entre tabelas
- Views avançadas

**Setup**:
1. Criar base no Airtable
2. Criar tabela "Content"
3. Criar tabela "Analytics"
4. Relacionar tables
5. Criar views (calendar, kanban, grid)

---

#### Google Sheets
**Uso**: Alternativa simples
**Vantagens**:
- Simples
- Gratuito
- Colaborativo

**Setup**:
1. Criar planilha no Google Sheets
2. Criar abas: Content, Analytics, Ideas
3. Compartilhar com equipe
4. Configurar notificações

---

### Asset Management

#### Google Drive
**Uso**: Armazenamento de assets
**Vantagens**:
- Gratuito (15GB)
- Integrado com Google Workspace
- Fácil de compartilhar

**Alternativas**:
- **Dropbox**: Sync mais rápido, mas pago
- **OneDrive**: Integrado com Microsoft
- **Notion**: Asset bank integrado

**Setup**:
1. Criar pasta "LEXI Alpha Instagram"
2. Subpastas: Thumbnails, Scripts, Videos, Analytics
3. Compartilhar com equipe
4. Configurar sync

---

#### Dropbox
**Uso**: Alternativa com sync
**Vantagens**:
- Sync mais rápido
- Version history
- Smart Sync

**Setup**:
1. Criar conta Dropbox
2. Criar estrutura de pastas
3. Instalar Dropbox desktop
4. Configurar Smart Sync

---

#### Notion
**Uso**: Asset bank integrado
**Vantagens**:
- Integrado com calendário
- Search poderoso
- Colaborativo

**Setup**:
1. Criar página "Asset Bank"
2. Adicionar seções: Scripts, Visuals, Templates
3. Usar `instagram-content-bank.md` como base
4. Adicionar tags para busca

---

## Setup Inicial

### Dia 1

**Objetivo**: Configurar ferramentas essenciais

**Checklist**:
- [ ] Criar conta Later/Buffer
- [ ] Conectar perfil Instagram
- [ ] Configurar UTM tracking
- [ ] Criar pasta Google Drive para assets
- [ ] Criar conta Claude
- [ ] Criar conta Midjourney
- [ ] Criar conta Canva

**Tempo Estimado**: 2 horas

---

### Dia 2

**Objetivo**: Configurar automação e organização

**Checklist**:
- [ ] Configurar ManyChat (opcional, Fase 2)
- [ ] Setup calendário editorial (Notion/Google Sheets)
- [ ] Criar templates de resposta
- [ ] Testar flow Instagram → Landing
- [ ] Criar asset bank no Notion
- [ ] Configurar Zapier (opcional)

**Tempo Estimado**: 2 horas

---

### Dia 3

**Objetivo**: Primeiro batch de conteúdo

**Checklist**:
- [ ] Primeiro batch de conteúdo (7 Reels + 3 Carrosséis)
- [ ] Schedule posts para Semana 1
- [ ] Testar analytics (Instagram Insights)
- [ ] Ajustar baseado em feedback
- [ ] Documentar workflow

**Tempo Estimado**: 4 horas

---

## Troubleshooting

### Problema: Later não conecta Instagram
**Solução**:
- Verificar se conta é profissional/creator
- Desconectar e reconectar
- Verificar permissões do Instagram
- Usar link de autenticação manual

### Problema: Midjourney não gera estilo correto
**Solução**:
- Especificar cores em hex (#0f172a, #34d399)
- Adicionar "Inter font" ao prompt
- Usar style presets consistentes
- Ajustar prompt com feedback visual

### Problema: CapCut export em baixa qualidade
**Solução**:
- Verificar resolução (1080p)
- Verificar bitrate (1080p recommended)
- Usar export "HD" ou "4K"
- Verificar settings do projeto

### Problema: UTM tracking não aparece no analytics
**Solução**:
- Verificar se Plausible está configurado
- Verificar se UTM parameters estão corretos
- Testar link manualmente
- Verificar se ad blocker está bloqueando

---

## Recursos Adicionais

### Templates e Resources
- `instagram-content-bank.md` - Asset bank com 200+ prompts
- `instagram-prompt-templates.md` - Prompt templates para IA
- `instagram-production-workflow.md` - Workflow de produção
- `instagram-calendar.ics` - Calendário editorial

### Links Úteis
- Later: https://later.com
- Buffer: https://buffer.com
- ManyChat: https://manychat.com
- Zapier: https://zapier.com
- Claude: https://claude.ai
- Midjourney: https://midjourney.com
- Canva: https://canva.com
- CapCut: https://www.capcut.com

### Comunidades
- Instagram Creator Community
- Reddit r/socialmediamarketing
- Facebook Groups: Instagram Marketing
- Discord: Marketing Automation

---

## Suporte

Se tiver problemas com ferramentas:
1. Verificar documentação oficial da ferramenta
2. Pesquisar no YouTube (tutoriais)
3. Buscar em comunidades (Reddit, Discord)
4. Entrar em contato com suporte da ferramenta
