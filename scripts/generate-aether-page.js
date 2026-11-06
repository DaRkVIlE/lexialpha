import fs from 'node:fs';

const pageContent = `---
// src/pages/index.astro — LexiQuest Alpha
// Baseado 100% no Design System Aether Webflow (Replicado e Adaptado)
// Foco: Método do Professor Gabriel Lima · 15 Vagas Alpha · R$ 197/mês
import '../styles/aether.css';
---

<!DOCTYPE html>
<html lang="pt-BR" class="w-mod-js w-mod-ix3">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>LexiQuest · Pare de Traduzir na Sua Cabeça · Destrave Sua Fala em Inglês</title>
  <meta
    name="description"
    content="Método de aquisição acelerada: 15 minutos diários de prática com IA sem julgamento + 3 sessões individuais por semana direto com o professor Gabriel Lima. 15 vagas Alpha."
  />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Fonts: Inter & Satoshi (Aether Design System) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />

  <!-- Open Graph -->
  <meta property="og:title" content="LexiQuest · Pare de Traduzir na Sua Cabeça · Destrave Sua Fala em Inglês" />
  <meta
    property="og:description"
    content="15 minutos diários de prática com IA sem julgamento + 3 sessões individuais por semana com o professor Gabriel. 15 vagas Alpha por R$ 197/mês."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://landing-pi-jade-44.vercel.app" />
  <meta property="og:image" content="https://landing-pi-jade-44.vercel.app/assets/og-card.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://landing-pi-jade-44.vercel.app/assets/og-card.png" />

  <style>
    /* Suporte suave a rolagem e ajustes Aether */
    html {
      scroll-behavior: smooth;
      background-color: var(--black, #0d0d0d);
      color: var(--white, #ffffff);
    }
    body {
      background-color: var(--black, #0d0d0d);
      color: var(--white, #ffffff);
      margin: 0;
      overflow-x: hidden;
    }
    .text-lime {
      color: #58f27f;
    }
    /* Estilos do Quiz dentro do design system Aether */
    .quiz-card-aether {
      background-color: #121212;
      border: 1px solid var(--stroke-colour, #171717);
      border-radius: 24px;
      padding: 32px;
      max-width: 800px;
      margin: 0 auto;
    }
    .quiz-option-btn {
      width: 100%;
      text-align: left;
      padding: 20px 24px;
      border-radius: 16px;
      background-color: #171717;
      border: 1px solid #292929;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 15px;
      line-height: 1.5;
    }
    .quiz-option-btn:hover {
      border-color: #58f27f;
      background-color: #1f1f1f;
    }
    .quiz-opt-letter {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background-color: #292929;
      color: #58f27f;
      font-weight: 700;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .quiz-input-field {
      width: 100%;
      padding: 16px 20px;
      border-radius: 12px;
      background-color: #171717;
      border: 1px solid #292929;
      color: #ffffff;
      font-size: 15px;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    }
    .quiz-input-field:focus {
      border-color: #58f27f;
    }
  </style>
</head>
<body>
  <div class="page-wrapper">

    <!-- NAVBAR (Aether Cloned) -->
    <div class="navbar">
      <div role="banner" class="navbar-wrap w-nav">
        <div class="navbar-container">
          <div class="navbar-wrapper">
            <div class="nav-left">
              <a href="#" class="navbar-brand w-nav-brand w--current" aria-label="home" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background: #171717; border: 1px solid #292929; display: flex; align-items: center; justify-content: center;">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                    <path d="M8 8V24H24" stroke="#58f27f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 14V20" stroke="#58f27f" stroke-width="2" stroke-linecap="round"/>
                    <path d="M18 10V22" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                    <path d="M22 13V18" stroke="#58f27f" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <span style="font-size: 18px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">LexiQuest</span>
                <span style="font-size: 11px; font-weight: 700; color: #58f27f; background: rgba(88, 242, 127, 0.1); border: 1px solid rgba(88, 242, 127, 0.25); padding: 2px 8px; border-radius: 99px;">ALPHA</span>
              </a>
            </div>

            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
              <ul role="list" class="nav-menu-two w-list-unstyled">
                <li class="nav-list-item"><a href="#problema" class="nav-link w-inline-block"><div class="body-s-medium">O Problema</div></a></li>
                <li class="nav-list-item"><a href="#comparativo" class="nav-link w-inline-block"><div class="body-s-medium">Comparativo</div></a></li>
                <li class="nav-list-item"><a href="#metodo" class="nav-link w-inline-block"><div class="body-s-medium">Como Funciona</div></a></li>
                <li class="nav-list-item"><a href="#mentor" class="nav-link w-inline-block"><div class="body-s-medium">O Mentor</div></a></li>
                <li class="nav-list-item"><a href="#diagnostico" class="nav-link w-inline-block"><div class="body-s-medium">Diagnóstico</div></a></li>
                <li class="nav-list-item"><a href="#oferta" class="nav-link w-inline-block"><div class="body-s-medium">Turma Alpha</div></a></li>
              </ul>
            </nav>

            <div class="nav-right">
              <div class="nav-buttons-wrapper">
                <div class="btn">
                  <a href="#diagnostico" class="btn-01-link w-variant-dfc820a8-2001-fb88-679d-ef64cb0b7e7a w-inline-block">
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Fazer Teste (2 min)</div></div>
                    </div>
                  </a>
                </div>
                <div class="btn">
                  <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabriel!%20Quero%20conhecer%20a%20Turma%20Alpha%20da%20LexiQuest!" target="_blank" rel="noopener noreferrer" class="btn-01-link w-inline-block">
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Falar com Gabe</div></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- HERO SECTION (Aether Home Hero Cloned) -->
    <section class="home-hero">
      <div class="container">
        <div class="home-hero-inner">
          <div class="home-hero-center">
            <h1 class="h-01">
              Pare de traduzir na sua cabeça.<br />
              <span class="text-lime">Destrave sua fala em inglês.</span>
            </h1>
            <div class="short-text">
              <div class="color-gray">
                <div class="body-m-regular">
                  Método de aquisição acelerada que combina <strong>15 minutos diários de prática com IA sem julgamento</strong> e <strong>3 sessões individuais por semana direto com o professor Gabriel Lima</strong>.
                </div>
              </div>
            </div>
          </div>

          <div class="hero-btn">
            <div class="btn">
              <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                <div class="btn-outer">
                  <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                  <div class="btn-text-wrap">
                    <div class="btn-text _01"><div class="body-m-medium">Fazer Diagnóstico de Nivelamento (Grátis)</div></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="btn">
              <a href="#oferta" class="btn-01-link w-inline-block">
                <div class="btn-text-wrap">
                  <div class="btn-text _01"><div class="body-m-medium">Ver Condição da Turma Alpha (15 Vagas)</div></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating subtle ambient avatars from Aether -->
      <div class="hero-float" aria-hidden="true">
        <div class="hero-float-01 _01"><img src="/aether/6a71df2e01bdba7b0fbcaf8a_image%2013.webp" alt="Avatar" class="all-img" /></div>
        <div class="hero-float-01 _03"><img src="/aether/6a71df2dc9eed5a1cea7c2fd_image%2011.webp" alt="Avatar" class="all-img" /></div>
        <div class="hero-float-01 _05"><img src="/aether/6a71df2d19d562ccf209c668_image%2015.webp" alt="Avatar" class="all-img" /></div>
        <div class="hero-float-01 _07"><img src="/aether/6a71df2d4d114675ed561298_image%2016.webp" alt="Avatar" class="all-img" /></div>
      </div>
    </section>

    <!-- LOGOS / CREDENTIALS (Aether Logos Marquee Cloned) -->
    <section class="logos">
      <div class="section-02">
        <div class="container">
          <div class="partner-inner">
            <div class="partner-left">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Metodologia Validada no Mundo Real</div>
                </div>
              </div>
            </div>
            <div class="partner-right">
              <div class="partner-wrap" style="display: flex; gap: 40px; align-items: center; white-space: nowrap;">
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">5 Anos de Sala de Aula</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">Rede All Net Idiomas</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">100% Individual</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">Conversação Executiva & Viagens</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #58f27f;">Garantia Pix de 30 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- O PROBLEMA (Aether Services Cloned) -->
    <section class="service" id="problema">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div class="header-center" style="max-width: 800px; margin: 0 auto 60px; text-align: center;">
              <h2 class="h-02">Por que você estuda anos e trava na hora de falar?</h2>
              <div class="color-gray" style="margin-top: 16px;">
                <div class="body-m-regular">O cérebro adulto não destrava a fala decorando tabelas de gramática ou preenchendo lacunas em apostilas.</div>
              </div>
            </div>

            <div class="service-grid">
              <!-- Card 1 -->
              <div class="service-card">
                <div class="service-card-img-box">
                  <img src="/aether/6a4c3904f973ea91d65a15ca_18d35268cc1f3a7647a2b164eef1b424_Group 2087336133.svg" alt="Tradução Mental" class="service-card-img" />
                </div>
                <div class="service-text">
                  <div class="body-m-medium">O Vício da Tradução Mental</div>
                  <div class="color-gray">
                    <div class="body-s-regular">Você ouve em inglês, traduz internamente para o português, tenta montar a regra e perde o tempo natural da conversa.</div>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="service-card">
                <div class="service-card-img-box">
                  <img src="/aether/6a4c39048826a46ca2e2b3c1_0af3a5b0354b34b92379b55e113fc1b0_Group 2087336134.svg" alt="Apps Solitários" class="service-card-img" />
                </div>
                <div class="service-text">
                  <div class="body-m-medium">A Ilusão dos Apps Solitários</div>
                  <div class="color-gray">
                    <div class="body-s-regular">Meses combinando pecinhas em uma tela geram dopamina rápida, mas na hora de pedir um café ou falar no aeroporto, a voz não sai.</div>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="service-card">
                <div class="service-card-img-box">
                  <img src="/aether/6a4c3904c06df95902d02ecc_123306a716f22527f53d99f1915b86b5_Group 2087336135.svg" alt="Caneta Vermelha" class="service-card-img" />
                </div>
                <div class="service-text">
                  <div class="body-m-medium">O Medo da Caneta Vermelha</div>
                  <div class="color-gray">
                    <div class="body-s-regular">A escola tradicional te ensinou que errar é motivo de humilhação. Hoje você prefere ficar mudo em reuniões a arriscar falar.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- O COMPARATIVO (Aether State Cards Cloned) -->
    <section class="state" id="comparativo">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div class="header-center" style="max-width: 800px; margin: 0 auto 60px; text-align: center;">
              <h2 class="h-02">O Cursinho Tradicional vs. A Mentoria LexiQuest</h2>
              <div class="color-gray" style="margin-top: 16px;">
                <div class="body-m-regular">Veja a diferença prática entre o modelo do aluno eterno e a imersão individual guiada por Gabriel.</div>
              </div>
            </div>

            <div class="state-grid">
              <!-- Card 1 -->
              <div class="state-card">
                <div class="state-card-top">
                  <div class="h-02 text-lime">15 min</div>
                  <div class="color-gray"><div class="body-m-medium">Prática Diária Sem Fricção</div></div>
                </div>
                <div class="state-card-bottom">
                  <div class="state-details">
                    <div class="body-l-medium">Tempo & Frequência</div>
                    <div class="state-details-inner">
                      <div class="state-details-row">
                        <div class="color-gray"><div class="body-s-regular">Cursinho Tradicional</div></div>
                        <div class="body-s-regular">2h por semana (espaçado)</div>
                      </div>
                      <div class="state-details-row">
                        <div class="color-gray"><div class="body-s-regular">Com Gabriel & IA</div></div>
                        <div class="body-s-regular text-lime">15m todo dia + 3x semana Gabe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="state-card">
                <div class="state-card-top">
                  <div class="h-02 text-lime">100%</div>
                  <div class="color-gray"><div class="body-m-medium">Atenção e Foco Individual</div></div>
                </div>
                <div class="state-card-bottom">
                  <div class="state-details">
                    <div class="body-l-medium">Ambiente de Treino</div>
                    <div class="state-details-inner">
                      <div class="state-details-row">
                        <div class="color-gray"><div class="body-s-regular">Cursinho Tradicional</div></div>
                        <div class="body-s-regular">15 a 20 alunos por sala</div>
                      </div>
                      <div class="state-details-row">
                        <div class="color-gray"><div class="body-s-regular">Com Gabriel & IA</div></div>
                        <div class="body-s-regular text-lime">Sessões 1-a-1 exclusivas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div class="state-card">
                <div class="state-card-top">
                  <div class="h-02 text-lime">Zero</div>
                  <div class="color-gray"><div class="body-m-medium">Vergonha ou Bloqueio</div></div>
                </div>
                <div class="state-card-bottom">
                  <div class="state-details">
                    <div class="body-l-medium">Forma de Correção</div>
                    <div class="state-details-inner">
                      <div class="state-details-row">
                        <div class="color-gray"><div class="body-s-regular">Cursinho Tradicional</div></div>
                        <div class="body-s-regular">Caneta vermelha e interrupção</div>
                      </div>
                      <div class="state-details-row">
                        <div class="color-gray"><div class="body-s-regular">Com Gabriel & IA</div></div>
                        <div class="body-s-regular text-lime">Spaced Recasting orgânico</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA A ROTINA (Aether Features Cloned) -->
    <section class="features" id="metodo">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div class="header-center max-width-large" style="text-align: center; margin: 0 auto 60px;">
              <div data-wf--tag-box-wrap--variant="yellow" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-5f608897-5531-7a7c-52a8-4781b464b78d"></div>
                  <div class="tag w-variant-5f608897-5531-7a7c-52a8-4781b464b78d">A Rotina da Turma Alpha</div>
                </div>
              </div>
              <h2 class="h-02">Três forças simples para destravar sua fala sem sobrecarregar sua rotina</h2>
            </div>

            <div class="service-grid">
              <!-- Pilar 1 -->
              <div class="service-card" style="background: #121212; border: 1px solid #171717; padding: 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Passo 01 · Prática Diária</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 22px;">15 min/dia de IA 24/7 (LibreChat)</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    No LibreChat, você tem um companion de IA calibrado para o seu nível. Pratique 15 minutos sem vergonha de errar, recebendo <em>Spaced Recasting</em> (a IA modela a frase certa na resposta sem te interromper).
                  </div>
                </div>
              </div>

              <!-- Pilar 2 -->
              <div class="service-card" style="background: #121212; border: 1px solid rgba(88, 242, 127, 0.3); padding: 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Passo 02 · Aceleração Humana</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 22px;">3x na Semana com Gabriel</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Encontros individuais estratégicos: <strong>duas sessões de 15 min</strong> para destravar a agilidade oral imediata, e <strong>uma sessão de 30 min</strong> focada em conversas reais sob pressão e negociações.
                  </div>
                </div>
              </div>

              <!-- Pilar 3 -->
              <div class="service-card" style="background: #121212; border: 1px solid #171717; padding: 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Passo 03 · Torre de Controle</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 22px;">Portal do Aluno (Moodle Hub)</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Acompanhe sua escalada. Acesse as gravações das suas sessões com Gabe para revisar sua própria voz, trilhas de missões práticas da semana e seu mapa quantitativo de domínio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- O MENTOR: GABRIEL FERREIRA LIMA (Aether Service / Storytelling Cloned) -->
    <section class="service" id="mentor">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div style="background: #121212; border: 1px solid #171717; border-radius: 24px; padding: 48px; display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center;">
              <div>
                <div data-wf--tag-box-wrap--variant="blue" class="tag-box-wrap" style="margin-bottom: 16px;">
                  <div class="tag-box">
                    <div class="tag-icon w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c"></div>
                    <div class="tag w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c">O Professor Responsável</div>
                  </div>
                </div>
                <h2 class="h-02" style="margin-bottom: 24px;">
                  5 anos ensinando idiomas, uma passagem pela coquetelaria e um retorno definitivo.
                </h2>
                <div class="color-gray" style="display: flex; flex-flow: column; gap: 16px; font-size: 16px; line-height: 1.7;">
                  <p>
                    Durante cerca de <strong>5 anos</strong>, atuei intensamente na linha de frente do ensino de idiomas — tanto em <strong>duas unidades da tradicional rede All Net Idiomas</strong> quanto na mentoria autônoma de adultos e profissionais que precisavam falar inglês sob pressão.
                  </p>
                  <p>
                    Em determinado momento, decidi pausar as aulas para me dedicar exclusivamente à alta coquetelaria. Foi uma imersão profunda em hospitalidade, precisão e leitura humana de pessoas em tempo real.
                  </p>
                  <p>
                    Hoje, estou retornando com uma metodologia completamente renovada: unindo o poder da Inteligência Artificial (prática diária sem medo 24/7) ao acompanhamento humano que nenhum aplicativo solitário substitui.
                  </p>
                </div>
                <div style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 24px; padding-top: 24px; border-top: 1px solid #1f1f1f;">
                  <div>
                    <div class="body-s-medium text-lime">EXPERIÊNCIA REAL</div>
                    <div class="body-m-medium" style="color: #ffffff;">5 Anos de Sala de Aula</div>
                  </div>
                  <div>
                    <div class="body-s-medium text-lime">UNIDADES</div>
                    <div class="body-m-medium" style="color: #ffffff;">All Net Idiomas & Mentoria</div>
                  </div>
                  <div>
                    <div class="body-s-medium text-lime">ACOMPANHAMENTO</div>
                    <div class="body-m-medium" style="color: #ffffff;">100% Individual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DIAGNÓSTICO / QUIZ INTERATIVO (Aether Style) -->
    <section class="state" id="diagnostico">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div class="header-center" style="max-width: 800px; margin: 0 auto 48px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Diagnóstico de Entrada · 2 Minutos</div>
                </div>
              </div>
              <h2 class="h-02">Onde exatamente a sua fala está travando?</h2>
              <div class="color-gray" style="margin-top: 16px;">
                <div class="body-m-regular">Responda a 5 situações práticas do mundo real e receba o diagnóstico imediato do seu nível comunicativo.</div>
              </div>
            </div>

            <!-- Quiz Container -->
            <div class="quiz-card-aether" id="quiz-container">
              <!-- Top bar -->
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1f1f1f; padding-bottom: 16px; margin-bottom: 24px;">
                <div style="font-size: 13px; font-weight: 600; color: #58f27f;" id="quiz-step-label">
                  Questão 1 de 5
                </div>
                <div style="width: 140px; height: 6px; border-radius: 99px; background: #171717; overflow: hidden;">
                  <div id="quiz-progress-bar" style="width: 20%; height: 100%; background: #58f27f; border-radius: 99px; transition: width 0.3s ease;"></div>
                </div>
              </div>

              <!-- Question Area -->
              <div id="quiz-question-area">
                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #8d9399; margin-bottom: 8px;" id="situation-tag">
                  Situação 1: Café & Sobrevivência (Nível A1)
                </div>
                <h3 id="question-title" style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 12px; line-height: 1.4;">
                  Você está em Nova York e o barista te entrega um café totalmente diferente do que você pediu. O que acontece?
                </h3>
                <p id="question-desc" style="font-size: 14px; color: #8d9399; margin: 0 0 24px;">
                  Seja sincero com a sua reação imediata e instintiva:
                </p>

                <div id="options-container" style="display: flex; flex-direction: column; gap: 12px;">
                  <button type="button" class="quiz-option-btn" data-points="0">
                    <span class="quiz-opt-letter">A</span>
                    <span>Fico com vergonha, bebo assim mesmo ou aponto pro copo fazendo mímica.</span>
                  </button>
                  <button type="button" class="quiz-option-btn" data-points="1">
                    <span class="quiz-opt-letter">B</span>
                    <span>Tento formular na cabeça ('The coffee... is not this... please?'), demoro mas peço a troca.</span>
                  </button>
                  <button type="button" class="quiz-option-btn" data-points="2">
                    <span class="quiz-opt-letter">C</span>
                    <span>Falo no reflexo: 'Hey, sorry, I actually ordered an iced latte, could you check it?' sem traduzir.</span>
                  </button>
                </div>
              </div>

              <!-- Lead Capture Area -->
              <div id="quiz-lead-area" style="display: none; text-align: center; padding: 20px 0;">
                <h3 style="font-size: 24px; font-weight: 700; color: #ffffff; margin-bottom: 8px;">
                  Quase lá. Receba seu diagnóstico completo.
                </h3>
                <p style="font-size: 14px; color: #8d9399; margin-bottom: 24px;">
                  Informe seu nome e WhatsApp para ver seu nível e encaminhar sua análise para Gabriel Lima:
                </p>

                <form id="quiz-lead-form" style="max-width: 380px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; text-align: left;">
                  <div>
                    <label style="display: block; font-size: 12px; font-weight: 600; color: #8d9399; margin-bottom: 6px; text-transform: uppercase;">Seu Nome</label>
                    <input type="text" id="lead-name" class="quiz-input-field" placeholder="Como o Gabe deve te chamar?" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 12px; font-weight: 600; color: #8d9399; margin-bottom: 6px; text-transform: uppercase;">WhatsApp (com DDD)</label>
                    <input type="tel" id="lead-phone" class="quiz-input-field" placeholder="(11) 9 0000-0000" required />
                  </div>
                  <button type="submit" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432" style="width: 100%; border: none; cursor: pointer; margin-top: 8px;">
                    <div class="btn-outer" style="justify-content: center;">
                      <div class="btn-text-wrap">
                        <div class="btn-text _01"><div class="body-m-medium">Ver Meu Diagnóstico Completo</div></div>
                      </div>
                    </div>
                  </button>
                  <p id="lead-error" style="display: none; font-size: 12px; color: #f59956; text-align: center;">Por favor, preencha nome e WhatsApp.</p>
                </form>
              </div>

              <!-- Result Area -->
              <div id="quiz-result-area" style="display: none; text-align: center; padding: 20px 0;">
                <div style="font-size: 12px; font-weight: 700; color: #58f27f; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                  Diagnóstico Concluído
                </div>
                <h3 id="result-portal-name" class="h-02 text-lime" style="font-size: 28px; margin-bottom: 16px;">
                  Nível Detectado
                </h3>

                <div style="background: #171717; border: 1px solid #292929; border-radius: 16px; padding: 24px; text-align: left; margin: 24px 0;">
                  <div style="font-size: 13px; font-weight: 700; color: #58f27f; text-transform: uppercase; margin-bottom: 6px;">O Que Está Acontecendo na Sua Fala</div>
                  <p id="result-block-text" style="font-size: 14px; color: #ffffff; line-height: 1.6; margin: 0 0 16px;">
                    Análise...
                  </p>
                  <div style="font-size: 13px; font-weight: 700; color: #57a6f4; text-transform: uppercase; margin-bottom: 6px;">O Plano Recomendado</div>
                  <p id="result-plan-text" style="font-size: 14px; color: #8d9399; line-height: 1.6; margin: 0;">
                    Plano...
                  </p>
                </div>

                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                  <a id="btn-whatsapp-result" href="https://wa.me/5511967239791" target="_blank" rel="noopener noreferrer" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432">
                    <div class="btn-outer">
                      <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                      <div class="btn-text-wrap">
                        <div class="btn-text _01"><div class="body-m-medium">Enviar Diagnóstico para Gabriel no WhatsApp</div></div>
                      </div>
                    </div>
                  </a>
                  <button type="button" id="btn-restart-quiz" class="btn-01-link" style="background: transparent; border: 1px solid #292929; color: #ffffff; cursor: pointer; border-radius: 99px; padding: 0 24px;">
                    <div class="body-m-medium">↻ Refazer Teste</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- A OFERTA ALPHA (Aether Pricing Card Cloned) -->
    <section class="state" id="oferta">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div class="header-center" style="max-width: 800px; margin: 0 auto 48px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="yellow" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-5f608897-5531-7a7c-52a8-4781b464b78d"></div>
                  <div class="tag w-variant-5f608897-5531-7a7c-52a8-4781b464b78d">Condição Exclusiva de Lançamento</div>
                </div>
              </div>
              <h2 class="h-02">Ingresse na Turma Alpha</h2>
              <div class="color-gray" style="margin-top: 16px;">
                <div class="body-m-regular">Apenas 15 vagas com acompanhamento individual direto com o professor Gabriel Lima.</div>
              </div>
            </div>

            <!-- Card Central de Preço -->
            <div style="max-width: 640px; margin: 0 auto; background: #121212; border: 1px solid rgba(88, 242, 127, 0.4); border-radius: 28px; padding: 48px; text-align: center;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1f1f1f; padding-bottom: 20px; margin-bottom: 32px;">
                <div class="body-m-medium" style="color: #ffffff;">Alunos Fundadores Alpha</div>
                <div class="body-s-medium text-lime" style="background: rgba(88, 242, 127, 0.1); border: 1px solid rgba(88, 242, 127, 0.3); padding: 4px 12px; border-radius: 99px;">
                  15 Vagas Restritas
                </div>
              </div>

              <div style="margin-bottom: 32px;">
                <div class="color-gray body-s-regular" style="text-decoration: line-through; margin-bottom: 8px;">Preço Regular Futuro: R$ 297/mês</div>
                <div style="display: flex; justify-content: center; align-items: baseline; gap: 8px;">
                  <span style="font-size: 24px; font-weight: 700; color: #ffffff;">R$</span>
                  <span class="h-01 text-lime" style="font-size: 72px; line-height: 1;">197</span>
                  <span class="color-gray body-m-regular">/mês</span>
                </div>
                <div class="color-gray body-s-regular" style="margin-top: 8px;">Preço travado para membros Alpha · Sem fidelidade · Cancele quando quiser</div>
              </div>

              <!-- Lista de Inclusões -->
              <div style="text-align: left; display: flex; flex-direction: column; gap: 14px; border-top: 1px solid #1f1f1f; border-bottom: 1px solid #1f1f1f; padding: 28px 0; margin-bottom: 32px;">
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                  <span style="color: #58f27f; font-weight: 700;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>3 Sessões Individuais / Semana:</strong> 2x 15m (agilidade) + 1x 30m (conversação) com Gabe.</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                  <span style="color: #58f27f; font-weight: 700;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>LibreChat IA 24/7:</strong> Sparring diário de 15 min sem caneta vermelha (Spaced Recasting).</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                  <span style="color: #58f27f; font-weight: 700;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>Portal do Aluno (Moodle Hub):</strong> Gravações salvas das suas sessões para você rever.</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                  <span style="color: #58f27f; font-weight: 700;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>Garantia Incondicional Pix de 30 Dias:</strong> Sua fala destrava ou 100% de reembolso via Pix.</span>
                </div>
              </div>

              <!-- CTA Preço -->
              <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Quero%20garantir%20uma%20das%2015%20vagas%20Alpha%20por%20R%24%20197%2Fm%C3%AAs!" target="_blank" rel="noopener noreferrer" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432" style="width: 100%;">
                <div class="btn-outer" style="justify-content: center; padding: 18px 24px;">
                  <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                  <div class="btn-text-wrap">
                    <div class="btn-text _01"><div class="body-m-medium">Garantir Uma das 15 Vagas Alpha</div></div>
                  </div>
                </div>
              </a>
              <div class="color-gray body-s-regular" style="margin-top: 14px; font-size: 13px;">Conversa direta no WhatsApp pessoal de Gabriel Ferreira Lima</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ (Aether Cloned) -->
    <section class="service" id="faq">
      <div class="section-02">
        <div class="container">
          <div class="section-inner" style="max-width: 800px; margin: 0 auto;">
            <div class="header-center" style="margin-bottom: 48px; text-align: center;">
              <h2 class="h-02">Perguntas Frequentes</h2>
              <div class="color-gray" style="margin-top: 12px;">
                <div class="body-m-regular">Tudo o que você precisa saber sobre a metodologia e o formato das aulas.</div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="background: #121212; border: 1px solid #1f1f1f; border-radius: 16px; padding: 24px;">
                <div class="body-m-medium" style="color: #ffffff; margin-bottom: 8px;">Eu começo do absoluto zero, o método serve para mim?</div>
                <div class="color-gray body-s-regular">Sim! O método começa por imersão contextual e blocos sonoros de sobrevivência prática. Gabriel te acompanha individualmente desde a primeira sessão, eliminando qualquer medo de errar.</div>
              </div>

              <div style="background: #121212; border: 1px solid #1f1f1f; border-radius: 16px; padding: 24px;">
                <div class="body-m-medium" style="color: #ffffff; margin-bottom: 8px;">Minha rotina é muito corrida, vou dar conta?</div>
                <div class="color-gray body-s-regular">Foi desenhado exatamente para quem não tem tempo a perder. A prática com IA dura apenas 15 minutos diários no seu celular, e as sessões com Gabe são ágeis (2 de 15 min e 1 de 30 min por semana), sem deslocamento ou enrolação.</div>
              </div>

              <div style="background: #121212; border: 1px solid #1f1f1f; border-radius: 16px; padding: 24px;">
                <div class="body-m-medium" style="color: #ffffff; margin-bottom: 8px;">Como funcionam os pagamentos e a garantia?</div>
                <div class="color-gray body-s-regular">O pagamento é feito mensalmente via Pix manual direto para Gabriel. Não há contrato de fidelidade ou taxas ocultas. Se nos primeiros 30 dias você não sentir evolução real, devolvemos 100% do seu valor via Pix.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL (Aether CTA Cloned) -->
    <section class="cta">
      <div class="container">
        <div class="cta-inner" style="background: #121212; border: 1px solid #1f1f1f; border-radius: 28px; padding: 60px 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 32px;">
          <div class="cta-left" style="max-width: 600px;">
            <div class="h-01" style="font-size: 42px; line-height: 1.1; margin-bottom: 16px;">
              Sua próxima conversa em inglês começa aqui.
            </div>
            <div class="color-gray">
              <div class="body-l-medium">
                15 vagas restritas com acompanhamento individual de Gabriel Lima + prática diária com IA. Fale diretamente no WhatsApp.
              </div>
            </div>
          </div>
          <div class="cta-bottom">
            <div class="btn">
              <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Quero%20entrar%20na%20Turma%20Alpha%20da%20LexiQuest!" target="_blank" rel="noopener noreferrer" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                <div class="btn-outer" style="padding: 18px 32px;">
                  <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Logo" class="btn-icon" />
                  <div class="btn-text-wrap">
                    <div class="btn-text _01"><div class="body-m-medium">Garantir Minha Vaga no WhatsApp</div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER (Aether Footer Cloned) -->
    <section class="footer-outer">
      <div class="container">
        <div class="footer-wrapper" style="padding-bottom: 48px;">
          <div class="footer-block-wrap" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; border-top: 1px solid #171717; padding-top: 32px; width: 100%;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-weight: 700; color: #ffffff;">LexiQuest</span>
              <span class="color-gray body-s-regular">· Método Gabriel Lima</span>
            </div>
            <div style="display: flex; gap: 24px;">
              <a href="#problema" class="nav-link w-inline-block"><div class="body-s-medium">O Problema</div></a>
              <a href="#metodo" class="nav-link w-inline-block"><div class="body-s-medium">Como Funciona</div></a>
              <a href="#oferta" class="nav-link w-inline-block"><div class="body-s-medium">Turma Alpha</div></a>
              <a href="https://wa.me/5511967239791" target="_blank" rel="noopener noreferrer" class="nav-link w-inline-block text-lime"><div class="body-s-medium">WhatsApp Direto</div></a>
            </div>
            <div class="color-gray body-s-regular">
              &copy; 2026 LexiQuest. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Quiz Script -->
  <script is:inline>
    (function initAetherQuiz() {
      const questions = [
        {
          tag: "Situação 1: Café & Sobrevivência (Nível A1)",
          title: "Você está em Nova York e o barista te entrega um café totalmente diferente do que você pediu. O que acontece?",
          desc: "Seja sincero com a sua reação imediata:",
          options: [
            { text: "Fico com vergonha, bebo assim mesmo ou aponto pro copo fazendo mímica.", points: 0 },
            { text: "Tento formular na cabeça ('The coffee... is not this... please?'), demoro uns segundos mas consigo pedir a troca.", points: 1 },
            { text: "Falo no reflexo imediato: 'Hey, sorry, I actually ordered an iced latte, could you check it?' sem traduzir.", points: 2 }
          ]
        },
        {
          tag: "Situação 2: Aeroporto & Imprevistos (Nível A2)",
          title: "Seu voo de conexão foi cancelado de surpresa em Londres. Você precisa ir ao balcão e entender o que fazer com bagagem e hotel.",
          desc: "Como você conduz essa conversa crítica?",
          options: [
            { text: "Pânico total. Abro o Google Tradutor no celular ou procuro algum brasileiro na fila pra me ajudar.", points: 0 },
            { text: "Consigo me virar com palavras soltas e pausas longas, mas o coração acelera e fico inseguro se entendi tudo.", points: 1 },
            { text: "Converso com calma usando blocos práticos ('What are my options for tonight?' / 'Where can I claim my bags?').", points: 2 }
          ]
        },
        {
          tag: "Situação 3: Pub & Conversa Casual (Nível B1)",
          title: "Em um evento social ou pub no exterior, nativos puxam papo com você sobre rotina, viagens passadas e trabalho.",
          desc: "Qual é a sua postura durante o bate-papo?",
          options: [
            { text: "Entendo algumas palavras soltas, mas só sorrio e concordo com a cabeça para não passar vergonha.", points: 0 },
            { text: "Respondo perguntas curtas e diretas, mas se a conversa aprofunda, travo na gramática e fico quieto.", points: 1 },
            { text: "Bato papo de forma solta, conto histórias usando expressões naturais ('actually', 'by the way', 'to be honest') sem medo de errar.", points: 2 }
          ]
        },
        {
          tag: "Situação 4: Reunião Profissional & Pitch (Nível B2)",
          title: "Numa reunião remota com clientes internacionais, questionam o prazo de entrega do seu projeto sob pressão.",
          desc: "Como você reage profissionalmente?",
          options: [
            { text: "Fico mudo de câmera fechada ou rezo para o meu colega de trabalho responder no meu lugar.", points: 0 },
            { text: "Falo o inglês técnico básico da minha área, mas peço desculpas pelo meu inglês e sinto que não transmiti autoridade.", points: 1 },
            { text: "Assumo a resposta com diplomacia executiva, negocio prazos ('If you can meet us halfway...') com firmeza.", points: 2 }
          ]
        },
        {
          tag: "Situação 5: Humor Sutil & Diplomacia (Nível C1)",
          title: "Durante um jantar de negócios, alguém faz uma piada com sarcasmo e duplo sentido refinado.",
          desc: "Qual o seu nível de percepção?",
          options: [
            { text: "Só dou risada quando todo mundo ri, sem entender a menor graça ou o contexto da piada.", points: 0 },
            { text: "Entendo o sentido literal das palavras, mas perco a ironia ou o jogo de palavras sutil.", points: 1 },
            { text: "Pego a nuance na hora, consigo responder com outra tirada inteligente e sustento a conversa com naturalidade.", points: 2 }
          ]
        }
      ];

      let currentStep = 0;
      let totalScore = 0;

      const questionArea = document.getElementById('quiz-question-area');
      const leadArea = document.getElementById('quiz-lead-area');
      const resultArea = document.getElementById('quiz-result-area');
      const stepLabel = document.getElementById('quiz-step-label');
      const progressBar = document.getElementById('quiz-progress-bar');
      const situationTag = document.getElementById('situation-tag');
      const questionTitle = document.getElementById('question-title');
      const questionDesc = document.getElementById('question-desc');
      const optionsContainer = document.getElementById('options-container');

      const resultPortalName = document.getElementById('result-portal-name');
      const resultBlockText = document.getElementById('result-block-text');
      const resultPlanText = document.getElementById('result-plan-text');
      const btnWhatsapp = document.getElementById('btn-whatsapp-result');
      const btnRestart = document.getElementById('btn-restart-quiz');
      const leadForm = document.getElementById('quiz-lead-form');
      const leadError = document.getElementById('lead-error');

      function renderQuestion(index) {
        const q = questions[index];
        if (!q) return;

        if (stepLabel) stepLabel.textContent = 'Questão ' + (index + 1) + ' de ' + questions.length;
        if (progressBar) progressBar.style.width = (((index + 1) / questions.length) * 100) + '%';
        if (situationTag) situationTag.textContent = q.tag;
        if (questionTitle) questionTitle.textContent = q.title;
        if (questionDesc) questionDesc.textContent = q.desc;

        if (optionsContainer) {
          optionsContainer.innerHTML = '';
          q.options.forEach((opt, optIndex) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'quiz-option-btn';
            btn.innerHTML = '<span class="quiz-opt-letter">' + String.fromCharCode(65 + optIndex) + '</span><span>' + opt.text + '</span>';
            btn.addEventListener('click', () => {
              totalScore += opt.points;
              if (currentStep < questions.length - 1) {
                currentStep++;
                renderQuestion(currentStep);
              } else {
                showLeadCapture();
              }
            });
            optionsContainer.appendChild(btn);
          });
        }
      }

      function showLeadCapture() {
        if (questionArea) questionArea.style.display = 'none';
        if (leadArea) leadArea.style.display = 'block';
        if (progressBar) progressBar.style.width = '100%';
      }

      function showResults(name) {
        if (leadArea) leadArea.style.display = 'none';
        if (resultArea) resultArea.style.display = 'block';

        let levelName = '';
        let blockText = '';
        let planText = '';

        if (totalScore <= 2) {
          levelName = 'Nível 1: Sobrevivência & Desbloqueio Inicial (A1)';
          blockText = 'Seu principal desafio é o medo inicial de se expressar e a trava de tentar montar regras mentais antes de abrir a boca.';
          planText = 'Imersão focada em expressões práticas imediatas com a IA no celular + sessões curtas com Gabriel para construir confiança e fala natural.';
        } else if (totalScore <= 4) {
          levelName = 'Nível 2: Autonomia Prática & Conversa Cotidiana (A2)';
          blockText = 'Você já entende frases simples, mas sofre com a tradução mental: pensa em português antes de falar, gerando pausas longas e insegurança.';
          planText = 'Automatizar blocos de fala do dia a dia com prática sem julgamento na IA + encontros individuais com Gabe para falar no reflexo.';
        } else if (totalScore <= 7) {
          levelName = 'Nível 3: Fluência Conversacional & Conectores (B1)';
          blockText = 'Você já consegue se virar, mas sua fala ainda é fragmentada. Falta o domínio de conectores naturais e histórias fluidas.';
          planText = 'Treinamento de agilidade com Gabriel para encadear argumentos com elegância e debater ideias sem receio de errar.';
        } else {
          levelName = 'Nível 4: Expressão Executiva & Nuance (B2/C1)';
          blockText = 'Você já tem excelente domínio técnico, mas busca refinamento retórico, autoridade executiva e diplomacia internacional.';
          planText = 'Simulações de reuniões reais e conversações avançadas de liderança diretamente com Gabriel.';
        }

        if (resultPortalName) resultPortalName.textContent = levelName;
        if (resultBlockText) resultBlockText.textContent = blockText;
        if (resultPlanText) resultPlanText.textContent = planText;

        const waMsg = encodeURIComponent('Olá Gabriel! Meu nome é ' + name + '. Fiz o teste da LexiQuest e meu resultado deu: ' + levelName + '. Quero conversar sobre a Turma Alpha!');
        if (btnWhatsapp) btnWhatsapp.href = 'https://wa.me/5511967239791?text=' + waMsg;
      }

      leadForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = document.getElementById('lead-name');
        const phoneInput = document.getElementById('lead-phone');
        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        if (!name || !phone) {
          if (leadError) leadError.style.display = 'block';
          return;
        }
        if (leadError) leadError.style.display = 'none';
        showResults(name);
      });

      btnRestart?.addEventListener('click', function() {
        currentStep = 0;
        totalScore = 0;
        if (resultArea) resultArea.style.display = 'none';
        if (leadArea) leadArea.style.display = 'none';
        if (questionArea) questionArea.style.display = 'block';
        renderQuestion(0);
      });

      // Init on load
      renderQuestion(0);
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync('src/pages/index.astro', pageContent, 'utf-8');
console.log('Successfully written src/pages/index.astro using Aether Webflow design system!');
