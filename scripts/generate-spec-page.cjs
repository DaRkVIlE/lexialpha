// landing/scripts/generate-spec-page.js
// Gera a landing page oficial da LexiQuest Turma Alpha
// 100% aderente ao Spec de Conteúdo (06/11/2026) e ao PRD v1.0
// Mantém os tokens de design do Aether Webflow, GSAP ScrollTrigger e animações 60fps.

const fs = require('fs');
const path = require('path');

const pageContent = `---
// src/pages/index.astro — LexiQuest Turma Alpha
// Especificação Canônica de Conteúdo (Spec v1.0 · 06/11/2026)
// Tokens: Aether Webflow Design System | Animações: GSAP + ScrollTrigger + Webflow IX3
import '../styles/aether.css';
---

<!DOCTYPE html>
<html lang="pt-BR" data-wf-domain="aether-template.webflow.io" data-wf-page="6a46377f9b1772d83fc52c0b" data-wf-site="6a46377c9b1772d83fc52bb4" class="w-mod-js w-mod-ix3">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script is:inline>
    !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
  </script>
  <title>LexiQuest · Você entende inglês. Agora é hora de falar.</title>
  <meta
    name="description"
    content="Prática diária com IA, 3 sessões por semana com o Gabe e uma trilha em formato de jogo. Um sistema para destravar a sua fala, sem tradução mental e sem decorar regras."
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
  <meta property="og:title" content="LexiQuest · Você entende inglês. Agora é hora de falar." />
  <meta
    property="og:description"
    content="Prática diária com IA, 3 sessões por semana com o Gabe e uma trilha em formato de jogo. 15 vagas na Turma Alpha por R$ 197/mês."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://landing-pi-jade-44.vercel.app" />
  <meta property="og:image" content="https://landing-pi-jade-44.vercel.app/assets/og-card.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://landing-pi-jade-44.vercel.app/assets/og-card.png" />

  <style is:global>
    /* ============================================================
       DESIGN SYSTEM: SEMANTIC TOKENS & CRAFT OVERRIDES
       ============================================================ */
    :root {
      --brand-green: #58f27f;
      --brand-green-muted: rgba(88, 242, 127, 0.15);
      --brand-green-border: rgba(88, 242, 127, 0.35);
      --surface-dark: #121212;
      --surface-elevated: #161616;
      --border-subtle: #1c1c1c;
      --border-medium: #262626;
      --text-muted: #8d9399;
    }

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
      font-family: var(--_typography---font-family--primary-font, 'Inter', sans-serif);
      -webkit-font-smoothing: antialiased;
    }

    /* Utilitários semânticos */
    .text-lime {
      color: var(--brand-green) !important;
    }
    .text-muted {
      color: var(--text-muted) !important;
    }

    /* ============================================================
       AETHER HARDWARE-ACCELERATED ANIMATIONS & MICRO-INTERACTIONS
       ============================================================ */
    @keyframes aetherMarquee {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }
    .partner-wrap {
      animation: aetherMarquee 35s linear infinite;
      will-change: transform;
    }
    .partner-right:hover .partner-wrap {
      animation-play-state: paused;
    }

    /* Button hover micro-interaction */
    .btn-01-link .btn-icon {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-01-link:hover .btn-icon {
      transform: rotate(180deg);
    }

    /* Cards interactive hover lift */
    .service-card, .state-card, .feature-card-clean {
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease;
    }
    .service-card:hover, .state-card:hover, .feature-card-clean:hover {
      transform: translateY(-4px);
      border-color: rgba(88, 242, 127, 0.35);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4), 0 0 24px rgba(88, 242, 127, 0.08);
    }

    @media (prefers-reduced-motion: reduce) {
      .partner-wrap {
        animation: none !important;
      }
      .service-card:hover, .state-card:hover, .feature-card-clean:hover {
        transform: none !important;
      }
    }

    /* ============================================================
       TOP BAR (BLOCO 0)
       ============================================================ */
    .top-banner {
      background: #111111;
      border-bottom: 1px solid #202020;
      padding: 10px 16px;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      color: #a1a1aa;
      position: relative;
      z-index: 100;
    }
    .top-banner a {
      color: var(--brand-green);
      text-decoration: none;
      margin-left: 6px;
      font-weight: 700;
      transition: opacity 0.2s ease;
    }
    .top-banner a:hover {
      text-decoration: underline;
    }

    /* ============================================================
       HERO DEMO DIALOGUE BOX (BLOCO 1 - AIDA RECASTING)
       ============================================================ */
    .hero-demo-card {
      background: var(--surface-dark);
      border: 1px solid var(--border-medium);
      border-radius: 18px;
      padding: 24px 28px;
      max-width: 620px;
      margin: 36px auto 0;
      text-align: left;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    .demo-badge {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: var(--brand-green);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .demo-msg-bubble {
      padding: 12px 18px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    .demo-msg-aida {
      background: var(--surface-elevated);
      border: 1px solid #282828;
      color: #ffffff;
    }
    .demo-msg-user {
      background: rgba(88, 242, 127, 0.08);
      border: 1px solid rgba(88, 242, 127, 0.25);
      color: #bbf7d0;
    }
    .demo-legend {
      font-size: 13px;
      color: var(--text-muted);
      border-top: 1px solid var(--border-subtle);
      padding-top: 14px;
      margin-top: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* 3 Pontos de apoio no Hero */
    .hero-support-row {
      display: flex;
      gap: 24px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-muted);
    }
    .hero-support-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .hero-support-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--brand-green);
    }

    /* ============================================================
       SUA SEMANA (TABELA DA ROTINA REAL - BLOCO 5)
       ============================================================ */
    .schedule-table-wrap {
      width: 100%;
      overflow-x: auto;
      border-radius: 16px;
      border: 1px solid var(--border-medium);
      background: var(--surface-dark);
      margin-top: 36px;
    }
    .schedule-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 14px;
      min-width: 580px;
    }
    .schedule-table th {
      padding: 16px 20px;
      background: var(--surface-elevated);
      color: #a1a1aa;
      font-weight: 600;
      border-bottom: 1px solid var(--border-medium);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .schedule-table td {
      padding: 18px 20px;
      border-bottom: 1px solid var(--border-subtle);
      color: #ffffff;
      line-height: 1.5;
    }
    .schedule-table tr:last-child td {
      border-bottom: none;
    }

    /* ============================================================
       PARA QUEM É / QUALIFICAÇÃO (BLOCO 9)
       ============================================================ */
    .qualify-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      max-width: 960px;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      .qualify-grid {
        grid-template-columns: 1fr;
      }
    }
    .qualify-card {
      background: var(--surface-dark);
      border: 1px solid var(--border-medium);
      border-radius: 20px;
      padding: 36px 32px;
    }
    .qualify-card.is-fit {
      border-color: rgba(88, 242, 127, 0.35);
      box-shadow: 0 10px 30px rgba(88, 242, 127, 0.05);
    }
    .qualify-card.not-fit {
      border-color: rgba(248, 113, 113, 0.25);
      box-shadow: 0 10px 30px rgba(248, 113, 113, 0.03);
    }
    .qualify-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 14px;
      font-size: 14px;
      line-height: 1.6;
      color: #d1d5db;
    }
    .qualify-icon {
      font-weight: 800;
      font-size: 15px;
      flex-shrink: 0;
      margin-top: 1px;
    }

    /* ============================================================
       FEATURE TABS: ESTÁGIOS / PORTAIS (BLOCO 6)
       ============================================================ */
    .stage-tab-item {
      padding: 10px 20px;
      border-radius: 8px;
      border: 1px solid var(--border-subtle);
      background-color: var(--surface-dark);
      color: var(--text-muted);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    .stage-tab-item:hover {
      border-color: var(--border-medium);
      color: #ffffff;
    }
    .stage-tab-item.active {
      border-color: var(--brand-green-border);
      background-color: var(--brand-green-muted);
      color: var(--brand-green);
    }

    .stage-card-wrapper {
      border: 1px solid var(--stroke-colour, #171717);
      border-radius: 20px;
      background-color: var(--surface-dark);
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      align-items: stretch;
      margin-top: 36px;
    }
    @media (max-width: 991px) {
      .stage-card-wrapper {
        grid-template-columns: 1fr;
      }
    }
    .stage-card-content {
      padding: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .stage-card-media {
      position: relative;
      background: #080808;
      overflow: hidden;
      min-height: 340px;
    }
    .stage-card-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: opacity 0.3s ease;
    }

    /* ============================================================
       FAQ ACCORDION (BLOCO 13)
       ============================================================ */
    .faq-details {
      background: var(--surface-dark);
      border: 1px solid var(--stroke-colour);
      border-radius: 16px;
      margin-bottom: 12px;
      overflow: hidden;
      transition: border-color 0.2s ease;
    }
    .faq-details[open] {
      border-color: var(--brand-green-border);
    }
    .faq-summary {
      padding: 22px 24px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      list-style: none;
    }
    .faq-summary::-webkit-details-marker {
      display: none;
    }
    .faq-icon-arrow {
      transition: transform 0.25s ease;
      color: var(--brand-green);
      flex-shrink: 0;
      font-size: 18px;
    }
    .faq-details[open] .faq-icon-arrow {
      transform: rotate(180deg);
    }
    .faq-answer {
      padding: 0 24px 22px;
      font-size: 14px;
      line-height: 1.7;
      color: #a1a1aa;
    }

    /* ============================================================
       QUIZ STYLES (DIAGNÓSTICO COM GATE 18+ & LGPD)
       ============================================================ */
    .quiz-card-aether {
      background-color: var(--surface-dark) !important;
      border: 1px solid var(--stroke-colour, #171717) !important;
      border-radius: 24px;
      padding: 40px;
      max-width: 820px;
      margin: 0 auto;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
    }
    .quiz-option-btn {
      width: 100% !important;
      text-align: left !important;
      padding: 20px 24px !important;
      border-radius: 14px !important;
      background-color: var(--surface-elevated) !important;
      border: 1px solid var(--border-medium) !important;
      color: #ffffff !important;
      display: flex !important;
      align-items: center !important;
      gap: 16px !important;
      cursor: pointer !important;
      transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
      font-size: 15px !important;
      line-height: 1.5 !important;
      box-sizing: border-box !important;
      outline: none !important;
    }
    .quiz-option-btn:hover {
      border-color: var(--brand-green) !important;
      background-color: #1a1a1a !important;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px -4px rgba(88, 242, 127, 0.18) !important;
    }
    .quiz-opt-letter {
      width: 32px !important;
      height: 32px !important;
      border-radius: 8px !important;
      background-color: #222222 !important;
      border: 1px solid #2e2e2e !important;
      color: var(--brand-green) !important;
      font-weight: 800 !important;
      font-size: 14px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      transition: all 0.2s ease !important;
    }
    .quiz-option-btn:hover .quiz-opt-letter {
      background-color: var(--brand-green) !important;
      color: #0d0d0d !important;
    }
    .quiz-input-field {
      width: 100% !important;
      padding: 16px 18px !important;
      border-radius: 12px !important;
      background-color: var(--surface-elevated) !important;
      border: 1px solid var(--border-medium) !important;
      color: #ffffff !important;
      font-size: 14px !important;
      outline: none !important;
      box-sizing: border-box !important;
      transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
    }
    .quiz-input-field:focus {
      border-color: var(--brand-green) !important;
      box-shadow: 0 0 0 3px rgba(88, 242, 127, 0.15) !important;
    }
  </style>
</head>
<body>
  <div class="page-wrapper">

    <!-- BLOCO 0: BARRA DE TOPO (ESPECIFICAÇÃO CANÔNICA) -->
    <aside class="top-banner">
      <span style="color: #ffffff;">Turma Alpha</span> · 15 vagas · Início em 10/11/2026 · 
      <a href="#diagnostico">Descobrir meu Portal →</a>
    </aside>

    <!-- NAVBAR (Identidade LexiQuest Oficial) -->
    <div class="navbar">
      <div role="banner" class="navbar-wrap w-nav">
        <div class="navbar-container">
          <div class="navbar-wrapper">
            <div class="nav-left">
              <a href="#" class="navbar-brand w-nav-brand w--current" aria-label="home" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
                <!-- Logo Vetorial LexiQuest -->
                <div style="width: 38px; height: 38px; border-radius: 10px; background: #141414; border: 1px solid #282828; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(88, 242, 127, 0.15);">
                  <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                    <path d="M14 12V34H26" stroke="#58f27f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 20V26" stroke="#58f27f" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M28 15V31" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M34 18V28" stroke="#58f27f" stroke-width="2.5" stroke-linecap="round"/>
                    <circle cx="34" cy="14" r="2" fill="#58f27f"/>
                  </svg>
                </div>
                <div style="display: flex; align-items: baseline; gap: 6px;">
                  <span style="font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">Lexi<span class="text-lime">Quest</span></span>
                  <span style="font-size: 10px; font-weight: 800; color: #58f27f; background: rgba(88, 242, 127, 0.1); border: 1px solid rgba(88, 242, 127, 0.25); padding: 1px 7px; border-radius: 99px; letter-spacing: 0.5px;">ALPHA</span>
                </div>
              </a>
            </div>

            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
              <ul role="list" class="nav-menu-two w-list-unstyled">
                <li class="nav-list-item"><a href="#espelho" class="nav-link w-inline-block"><div class="body-s-medium">O Desafio</div></a></li>
                <li class="nav-list-item"><a href="#mecanismo" class="nav-link w-inline-block"><div class="body-s-medium">O Método</div></a></li>
                <li class="nav-list-item"><a href="#como-funciona" class="nav-link w-inline-block"><div class="body-s-medium">O Sistema</div></a></li>
                <li class="nav-list-item"><a href="#sua-semana" class="nav-link w-inline-block"><div class="body-s-medium">Sua Semana</div></a></li>
                <li class="nav-list-item"><a href="#portais" class="nav-link w-inline-block"><div class="body-s-medium">Os Portais</div></a></li>
                <li class="nav-list-item"><a href="#mentor" class="nav-link w-inline-block"><div class="body-s-medium">O Gabe</div></a></li>
                <li class="nav-list-item"><a href="#oferta" class="nav-link w-inline-block"><div class="body-s-medium">Turma Alpha</div></a></li>
                <li class="nav-list-item"><a href="#faq" class="nav-link w-inline-block"><div class="body-s-medium">Dúvidas</div></a></li>
              </ul>
            </nav>

            <div class="nav-right">
              <div class="nav-buttons-wrapper">
                <div class="btn">
                  <a href="#diagnostico" class="btn-01-link w-variant-dfc820a8-2001-fb88-679d-ef64cb0b7e7a w-inline-block">
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                    </div>
                  </a>
                </div>
                <div class="btn">
                  <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Quero%20conversar%20sobre%20a%20Turma%20Alpha%20da%20LexiQuest." target="_blank" rel="noopener noreferrer" class="btn-01-link w-inline-block">
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

    <!-- BLOCO 1: HERO (COPY CANÔNICA + DEMO RECASTING + AMBIENT FLOATERS) -->
    <section class="home-hero">
      <div class="container">
        <div class="home-hero-inner">
          <div class="home-hero-center">
            <!-- Eyebrow -->
            <div slide-up-01="" data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 24px;">
              <div class="tag-box" style="border-color: rgba(88, 242, 127, 0.3);">
                <div class="tag-icon"></div>
                <div class="tag text-lime">LexiQuest · Turma Alpha</div>
              </div>
            </div>

            <!-- H1 -->
            <h1 slide-up-01="" class="h-01">
              Você entende inglês.<br />
              <span class="text-lime">Agora é hora de falar.</span>
            </h1>

            <!-- Subheadline -->
            <div slide-up-02="" class="short-text" style="max-width: 720px; margin: 0 auto;">
              <div class="color-gray">
                <div class="body-m-regular">
                  Prática diária com IA, 3 sessões por semana com o Gabe e uma trilha em formato de jogo. Um sistema para destravar a sua fala, sem tradução mental e sem decorar regras.
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div slide-up-03="" class="hero-btn" style="margin-top: 32px; flex-direction: column; align-items: center; gap: 14px;">
              <div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;">
                <div class="btn">
                  <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                    <div class="btn-outer">
                      <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                      <div class="btn-text-wrap">
                        <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="btn">
                  <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Quero%20conversar%20sobre%20a%20Turma%20Alpha%20da%20LexiQuest." target="_blank" rel="noopener noreferrer" class="btn-01-link w-inline-block">
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Prefere conversar antes? Chame o Gabe</div></div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Microcopy do CTA -->
              <div style="font-size: 13px; color: var(--text-muted);">
                Quiz de nível, cerca de 8 minutos. Você só paga depois de conversar com o Gabe.
              </div>

              <!-- Três Pontos de Apoio -->
              <div class="hero-support-row">
                <div class="hero-support-item">
                  <span class="hero-support-dot"></span>
                  <span>3 sessões por semana com o Gabe</span>
                </div>
                <div class="hero-support-item">
                  <span class="hero-support-dot"></span>
                  <span>A partir de 15 minutos por dia com a AIDA</span>
                </div>
                <div class="hero-support-item">
                  <span class="hero-support-dot"></span>
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            <!-- Peça Central do Hero: Demonstração Real do Produto (Spaced Recasting) -->
            <div slide-up-03="" class="hero-demo-card">
              <div class="demo-badge">
                <span class="hero-support-dot"></span>
                <span>Demonstração Real: O Recasting em Ação</span>
              </div>
              <div class="demo-msg-bubble demo-msg-aida">
                <strong style="color: #60a5fa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 2px;">AIDA (Jordan)</strong>
                "Hey! First time in New York? ✈️"
              </div>
              <div class="demo-msg-bubble demo-msg-user">
                <strong style="color: var(--brand-green); font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 2px;">Você</strong>
                "Yes, I go to meeting tomorrow."
              </div>
              <div class="demo-msg-bubble demo-msg-aida">
                <strong style="color: #60a5fa; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 2px;">AIDA (Jordan)</strong>
                "Oh nice, you’re <strong>going to a meeting tomorrow</strong>? What kind of meeting? 💼"
              </div>
              <div class="demo-legend">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>A AIDA repetiu a frase do jeito certo e a conversa continuou. Sem interrupção, sem caneta vermelha.</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Ambient portraits do Aether perfeitamente posicionados nas laterais com fluidez orgânica -->
      <div class="hero-float" aria-hidden="true">
        <div class="hero-float-01 _01"><img src="/aether/6a71df2e01bdba7b0fbcaf8a_image%2013.webp" alt="Avatar 1" class="all-img" /></div>
        <div class="hero-float-01 _02"><img src="/aether/6a71df2d0b210822a72bae32_image%2014.webp" alt="Avatar 2" class="all-img" /></div>
        <div class="hero-float-01 _03"><img src="/aether/6a71df2dc9eed5a1cea7c2fd_image%2011.webp" alt="Avatar 3" class="all-img" /></div>
        <div class="hero-float-01 _04"><img src="/aether/6a71df2d6370c6cdcda6a026_image%2018.webp" alt="Avatar 4" class="all-img" /></div>
        <div class="hero-float-01 _05"><img src="/aether/6a71df2d19d562ccf209c668_image%2015.webp" alt="Avatar 5" class="all-img" /></div>
        <div class="hero-float-01 _06"><img src="/aether/6a71df2d8077db844252f78e_image%207.webp" alt="Avatar 6" class="all-img" /></div>
        <div class="hero-float-01 _07"><img src="/aether/6a71df2d4d114675ed561298_image%2016.webp" alt="Avatar 7" class="all-img" /></div>
        <div class="hero-float-01 _08"><img src="/aether/6a71df2db8d0a9e79333f57b_image%2017.webp" alt="Avatar 8" class="all-img" /></div>
      </div>
    </section>

    <!-- CREDENCIAIS & MARQUEE (60FPS HARDWARE ACCELERATED) -->
    <section class="logos">
      <div class="section-02">
        <div class="container">
          <div class="partner-inner">
            <div slide-up-01="" class="partner-left">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Metodologia Validada no Mundo Real</div>
                </div>
              </div>
            </div>
            <div class="partner-right">
              <div class="partner-wrap" style="display: flex; gap: 40px; align-items: center; white-space: nowrap; padding-right: 40px;">
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">5 Anos de Sala de Aula</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">Rede All Net Idiomas</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">100% Individual</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">Método SPARK</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium text-lime">Garantia Pix de 30 Dias</span>
              </div>
              <div class="partner-wrap" aria-hidden="true" style="display: flex; gap: 40px; align-items: center; white-space: nowrap; padding-right: 40px;">
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">5 Anos de Sala de Aula</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">Rede All Net Idiomas</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">100% Individual</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium" style="color: #ffffff; opacity: 0.85;">Método SPARK</span>
                <span style="color: #292929;">/</span>
                <span class="body-m-medium text-lime">Garantia Pix de 30 Dias</span>
              </div>
              <div class="partner-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 2: ESPELHO ("Se isso soa familiar, o problema não é você") -->
    <section class="service" id="espelho">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 56px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="blue" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c"></div>
                  <div class="tag w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c">O Espelho da Realidade</div>
                </div>
              </div>
              <h2 class="h-02">Se isso soa familiar, o problema não é você.</h2>
              <div class="color-gray" style="margin-top: 16px;">
                <div class="body-m-regular">O cérebro adulto não adquire fala por análise sintática. Quando a pressão sobe, regras gramaticais colapsam.</div>
              </div>
            </div>

            <div class="service-grid">
              <!-- Item 1 -->
              <div slide-up-01="" class="service-card">
                <div class="service-card-img-box">
                  <img src="/aether/6a4c3904f973ea91d65a15ca_18d35268cc1f3a7647a2b164eef1b424_Group 2087336133.svg" alt="O Inglês Some" class="service-card-img" />
                </div>
                <div class="service-text">
                  <div class="body-m-medium">O Inglês Some</div>
                  <div class="color-gray">
                    <div class="body-s-regular">Você entende o que lê, o que ouve, o que escrevem para você. Na hora de falar, o inglês simplesmente some.</div>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div slide-up-02="" class="service-card">
                <div class="service-card-img-box">
                  <img src="/aether/6a4c39048826a46ca2e2b3c1_0af3a5b0354b34b92379b55e113fc1b0_Group 2087336134.svg" alt="A Tradução Mental" class="service-card-img" />
                </div>
                <div class="service-text">
                  <div class="body-m-medium">A Tradução Mental</div>
                  <div class="color-gray">
                    <div class="body-s-regular">Você monta a frase em português e traduz na cabeça. Quando termina, o tempo natural da conversa já seguiu.</div>
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div slide-up-03="" class="service-card">
                <div class="service-card-img-box">
                  <img src="/aether/6a4c3904c06df95902d02ecc_123306a716f22527f53d99f1915b86b5_Group 2087336135.svg" alt="Estudou Muito, Falou Pouco" class="service-card-img" />
                </div>
                <div class="service-text">
                  <div class="body-m-medium">Estudou Muito, Falou Pouco</div>
                  <div class="color-gray">
                    <div class="body-s-regular">Você já fez curso, aplicativo, aula particular. Estudou bastante gramática. Mas na prática, falou muito pouco.</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fechamento do Espelho -->
            <div slide-up-02="" style="max-width: 760px; margin: 48px auto 0; text-align: center; background: var(--surface-dark); border: 1px solid var(--border-medium); border-radius: 16px; padding: 24px 32px;">
              <p class="body-m-regular" style="color: #d1d5db; margin: 0; line-height: 1.6;">
                Isso não é falta de inteligência nem de esforço. É falta de <strong>prática de fala, em volume, com segurança e com alguém olhando o que importa</strong>. É exatamente isso que a Turma Alpha organiza.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 3: MECANISMO ("Por que a Turma Alpha funciona diferente") -->
    <section class="state" id="mecanismo">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 56px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="yellow" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-5f608897-5531-7a7c-52a8-4781b464b78d"></div>
                  <div class="tag w-variant-5f608897-5531-7a7c-52a8-4781b464b78d">Método SPARK</div>
                </div>
              </div>
              <h2 class="h-02">Por que a Turma Alpha funciona diferente</h2>
              <div class="color-gray" style="margin-top: 16px;">
                <div class="body-m-regular">O Método SPARK parte de uma ideia simples: adultos adquirem uma língua falando, em situações reais, com retomada espaçada e baixo medo de errar. Três decisões de projeto vêm daí:</div>
              </div>
            </div>

            <div class="service-grid">
              <!-- Decisão 1 -->
              <div slide-up-01="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Decisão 01</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 20px;">Falar antes de entender a regra</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Você produz primeiro. A explicação vem depois, só quando necessária, e só com o Gabe. Nada de começar pela gramática e travar no reflexo oral.
                  </div>
                </div>
              </div>

              <!-- Decisão 2 -->
              <div slide-up-02="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Decisão 02</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 20px;">Blocos, não palavras soltas</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Você aprende chunks que soam como um nativo falando, como <em>"look forward to"</em> e <em>"figure out"</em>. Primeiro ouve, depois repete, depois usa em cenas que mudam a cada retomada.
                  </div>
                </div>
              </div>

              <!-- Decisão 3 -->
              <div slide-up-03="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Decisão 03</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 20px;">Erro sem constrangimento</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    A AIDA reformula o que você disse do jeito certo e a conversa continua. Ninguém interrompe, ninguém marca de vermelho. O erro vira dado pedagógico, não vergonha.
                  </div>
                </div>
              </div>
            </div>

            <!-- Fundamentação Científica Discreta -->
            <div slide-up-02="" style="margin-top: 36px; text-align: center;">
              <span class="body-s-regular text-muted" style="font-size: 13px;">
                Fundamentos científicos de desenho do produto: apoiado em pesquisas consolidadas de aquisição de 2ª língua (Krashen, Swain, Long, Vygotsky, Cummins).
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 4: COMO FUNCIONA ("Três peças, um sistema") -->
    <section class="features" id="como-funciona">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center max-width-large" style="text-align: center; margin: 0 auto 56px;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Arquitetura de Aquisição</div>
                </div>
              </div>
              <h2 class="h-02">Três peças, um sistema</h2>
              <div class="color-gray" style="margin-top: 14px;">
                <div class="body-m-regular">Cada peça faz o que faz melhor. Juntas, formam uma rotina em que você fala todos os dias e alguém de verdade valida o que importa.</div>
              </div>
            </div>

            <div class="service-grid">
              <!-- Peça 1 -->
              <div slide-up-01="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Peça 01 · A Trilha</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 21px;">O Portal do Aluno</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Uma trilha em formato de jogo, com missões práticas, XP e badges. Cada Portal termina em uma Boss Raid: uma cena real de mundo exterior validada ao vivo pelo Gabe.
                  </div>
                </div>
              </div>

              <!-- Peça 2 -->
              <div slide-up-02="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--brand-green-border); padding: 36px 32px; border-radius: 20px; box-shadow: 0 10px 40px rgba(88, 242, 127, 0.08);">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Peça 02 · Volume Diário</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 21px;">A AIDA (Companion de IA)</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Seu parceiro de prática, disponível 24/7. Conversa com você em cenas reais (aeroporto, café, reunião) a partir de 15 minutos por dia e lembra do que você já domina e onde ainda trava.
                  </div>
                </div>
              </div>

              <!-- Peça 3 -->
              <div slide-up-03="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Peça 03 · Julgamento Humano</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 12px; font-size: 21px;">Sessões com o Gabe</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Três encontros por semana (duas sessões de 15 min e uma de 30 min). Pronúncia, desinibição, treino sem apoio e a validação dos momentos críticos da sua jornada.
                  </div>
                </div>
              </div>
            </div>

            <!-- Síntese & CTA -->
            <div slide-up-02="" style="text-align: center; margin-top: 48px;">
              <div class="body-l-medium" style="color: #ffffff; margin-bottom: 24px;">
                A IA dá volume. O Gabe dá julgamento. O jogo faz você voltar amanhã.
              </div>
              <div class="btn">
                <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                  <div class="btn-outer">
                    <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 5: SUA SEMANA ("Como é a sua semana na Turma Alpha") -->
    <section class="state" id="sua-semana">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 40px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="blue" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c"></div>
                  <div class="tag w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c">Rotina Sem Fricção</div>
                </div>
              </div>
              <h2 class="h-02">Como é a sua semana na Turma Alpha</h2>
              <div class="color-gray" style="margin-top: 14px;">
                <div class="body-m-regular">Sem maratona de sábado. Uma rotina curta e constante, desenhada para caber em dias normais de quem trabalha e tem pouco tempo.</div>
              </div>
            </div>

            <!-- Tabela da Rotina Real -->
            <div slide-up-02="" class="schedule-table-wrap">
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th style="width: 25%;">Quando</th>
                    <th style="width: 55%;">O que acontece</th>
                    <th style="width: 20%;">Tempo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong class="text-lime">Todos os dias</strong></td>
                    <td>Daily Quest com a AIDA: um cartão no Portal abre uma cena prática, você conversa, ouve e retoma chunks em situações reais.</td>
                    <td>A partir de 15 min</td>
                  </tr>
                  <tr>
                    <td><strong>2x por semana</strong></td>
                    <td>Sessão curta individual com o Gabe: pronúncia, mini-cenas ágeis e desinibição imediata.</td>
                    <td>15 min cada</td>
                  </tr>
                  <tr>
                    <td><strong>1x por semana</strong></td>
                    <td>Sessão longa individual com o Gabe: Checkpoint sem apoio ou Boss Raid ao vivo.</td>
                    <td>30 min</td>
                  </tr>
                  <tr>
                    <td><strong>Ao fim de cada semana</strong></td>
                    <td>Resumo personalizado no WhatsApp: seus pontos fortes, seus gargalos e o foco da semana seguinte.</td>
                    <td>2 min de leitura</td>
                  </tr>
                  <tr>
                    <td><strong>Ao fim de cada Portal</strong></td>
                    <td>Boss Raid ao vivo com o Gabe para validar sua promoção de nível no mundo real.</td>
                    <td>30 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Notas & Destaque do SPARK Score -->
            <div slide-up-03="" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 28px;">
              <div style="background: var(--surface-dark); border: 1px solid var(--border-medium); border-radius: 16px; padding: 24px;">
                <div class="body-s-medium text-lime" style="margin-bottom: 6px;">COMPROMISSO REALÍSTICO</div>
                <p class="body-s-regular color-gray" style="margin: 0; line-height: 1.6;">
                  A rotina mínima é de 15 minutos e uma Daily Quest. Quem tem mais tempo pode fazer a rotina completa (3 quests, 45 minutos), mas ela é opcional. As sessões têm horários fixos combinados na entrada e a primeira acontece em até 48 horas após o pagamento.
                </p>
              </div>

              <div style="background: var(--surface-dark); border: 1px solid var(--brand-green-border); border-radius: 16px; padding: 24px; box-shadow: 0 8px 30px rgba(88, 242, 127, 0.05);">
                <div class="body-s-medium text-lime" style="margin-bottom: 6px;">VOCÊ VÊ O SEU PROGRESSO</div>
                <p class="body-s-regular" style="color: #ffffff; margin: 0; line-height: 1.6;">
                  Você começa com uma medição quantitativa estruturada (<strong>SPARK Score</strong>) e refaz em 30 dias. Assim você enxerga claramente o que mudou na sua fala, em vez de torcer para ter mudado.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 6: PORTAIS ("Quatro Portais, do A1 ao B2") -->
    <section class="features" id="portais">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center max-width-large" style="text-align: center; margin: 0 auto 36px;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">A Escala dos Portais</div>
                </div>
              </div>
              <h2 class="h-02">Quatro Portais, do A1 ao B2</h2>
              <div class="color-gray" style="margin-top: 12px;">
                <div class="body-m-regular">Cada Portal é uma etapa da trilha, com um Guardião, missões, retomadas espaçadas e uma Boss Raid final. Você não começa do zero nem repete o que já sabe: o quiz indica o seu ponto de partida.</div>
              </div>
            </div>

            <!-- Tab Pills -->
            <div slide-up-02="" style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <button type="button" class="stage-tab-item active" data-stage="0">
                <span>01. O Descongelamento (Jordan)</span>
              </button>
              <button type="button" class="stage-tab-item" data-stage="1">
                <span>02. O Motor do BICS (Miles)</span>
              </button>
              <button type="button" class="stage-tab-item" data-stage="2">
                <span>03. A Tração Conversacional (Zack)</span>
              </button>
              <button type="button" class="stage-tab-item" data-stage="3">
                <span>04. A Fronteira Executiva (Alexandra)</span>
              </button>
            </div>

            <!-- Feature Card: Split Editorial & Artwork Canônica -->
            <div slide-up-03="" class="stage-card-wrapper">
              <div class="stage-card-content">
                <div id="stage-badge" class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                  Portal 1 · Nível A1 → A2 · Guardião: Jordan
                </div>
                <h3 id="stage-title" class="h-02" style="font-size: 32px; line-height: 1.2; margin: 0 0 16px;">
                  O Descongelamento
                </h3>
                <p id="stage-desc" class="color-gray body-m-regular" style="line-height: 1.7; margin: 0 0 28px;">
                  Quebrar o tradutor mental. Seus primeiros chunks sonoros de sobrevivência prática e as primeiras conversas reais sem depender de análise de regras no cérebro.
                </p>
                <div style="border-top: 1px solid var(--border-subtle); padding-top: 20px;">
                  <div class="body-s-medium text-lime" style="margin-bottom: 4px;">BOSS RAID (CENA FINAL AO VIVO):</div>
                  <div id="stage-skills" class="body-s-regular" style="color: #ffffff;">
                    Imigração no Aeroporto JFK (Nova York) sem tradutor e sem travar.
                  </div>
                </div>
              </div>
              <div class="stage-card-media">
                <img id="stage-img" src="/assets/dia2_cafeteria.jpg" alt="Portal de Fala LexiQuest" />
              </div>
            </div>

            <!-- Fechamento dos Portais -->
            <div slide-up-02="" style="text-align: center; margin-top: 40px;">
              <p class="body-m-regular color-gray" style="max-width: 720px; margin: 0 auto 24px; line-height: 1.6;">
                Você só avança de Portal com evidência: uma cena inédita, um checkpoint sem apoio e uma Boss Raid validada pelo Gabe. Streak e XP não abrem a porta sozinhos.
              </p>
              <div class="btn">
                <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                  <div class="btn-outer">
                    <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 7: AIDA ("Conheça a AIDA, sua parceira de prática") -->
    <section class="service" id="aida">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 56px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="yellow" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-5f608897-5531-7a7c-52a8-4781b464b78d"></div>
                  <div class="tag w-variant-5f608897-5531-7a7c-52a8-4781b464b78d">Inteligência Pedagógica</div>
                </div>
              </div>
              <h2 class="h-02">Conheça a AIDA, sua parceira de prática</h2>
              <div class="color-gray" style="margin-top: 14px;">
                <div class="body-m-regular">A AIDA é um companion de IA que conversa com você em cenas reais, no seu nível, todos os dias. Ela fala por meio de quatro personas (os Guardiões dos Portais: Jordan, Miles, Zack e Alexandra), todas compartilhando a mesma memória sobre você.</div>
              </div>
            </div>

            <!-- O que ela faz vs O que ela nunca faz -->
            <div slide-up-02="" class="qualify-grid">
              <!-- O que faz -->
              <div class="qualify-card is-fit">
                <div class="body-m-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">
                  ✓ O que a AIDA faz por você
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Conversa em cenas do mundo real, com respostas curtas e ágeis, exatamente como uma conversa de verdade.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Reformula o que você disse do jeito certo (Spaced Recasting) e segue o assunto sem te constranger.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Traz de volta, em cenas novas e dinâmicas, os chunks que você ainda não consolidou.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Registra o que você domina e o que ainda trava, preparando um dossiê que o Gabe lê antes das sessões.</span>
                </div>
              </div>

              <!-- O que NUNCA faz -->
              <div class="qualify-card not-fit">
                <div class="body-m-medium" style="color: #f87171; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">
                  ✕ O que a AIDA NUNCA faz
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span><strong>Nunca interrompe a sua fala para corrigir:</strong> zero quebra de raciocínio.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span><strong>Nunca traduz para o português:</strong> você é treinado a pensar direto no reflexo em inglês.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span><strong>Nunca dá aula de gramática no meio da conversa:</strong> explicação conceitual fica com o Gabe, e só quando faz sentido.</span>
                </div>
              </div>
            </div>

            <!-- Transparência Radical da IA -->
            <div slide-up-03="" style="max-width: 760px; margin: 36px auto 0; text-align: center; font-size: 13px; color: var(--text-muted); line-height: 1.6;">
              <strong>Transparência Radical:</strong> A AIDA é uma inteligência artificial, e você sempre sabe quando está falando com ela. O que ela observa sobre sua fala alimenta o seu dossiê confidencial, garantindo que suas sessões com Gabriel sejam 100% cirúrgicas.
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 8: O GABE ("Uma pessoa de verdade valida o seu progresso") -->
    <section class="service" id="mentor">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); border-radius: 28px; padding: 56px;">
              <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 48px; align-items: start;">
                
                <!-- Coluna Esquerda: A História Narrativa -->
                <div>
                  <div data-wf--tag-box-wrap--variant="blue" class="tag-box-wrap" style="margin-bottom: 20px;">
                    <div class="tag-box">
                      <div class="tag-icon w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c"></div>
                      <div class="tag w-variant-2e667d52-7c51-ea40-1a61-1eb73fdb904c">O Professor Responsável</div>
                    </div>
                  </div>
                  <h2 class="h-02" style="margin-bottom: 24px; font-size: 38px; line-height: 1.2;">
                    Uma pessoa de verdade valida o seu progresso
                  </h2>
                  <div class="color-gray" style="display: flex; flex-direction: column; gap: 16px; font-size: 15px; line-height: 1.7;">
                    <p>
                      O Método SPARK nasceu da prática real de ensino do <strong>Gabe (Gabriel Ferreira Lima)</strong>, professor de inglês com cerca de <strong>5 anos de atuação na linha de frente</strong> — com passagens por duas unidades da tradicional rede All Net Idiomas e mentoria particular de profissionais.
                    </p>
                    <p>
                      Na Turma Alpha, o Gabe acompanha cada um dos 15 alunos pessoalmente: lê o seu dossiê antes de cada sessão, decide quando uma explicação é realmente necessária, destrava a sua pronúncia e valida cada Boss Raid ao vivo.
                    </p>
                    <p style="color: #ffffff; font-weight: 500;">
                      <strong>Por que são apenas 15 vagas:</strong> Para que esse acompanhamento seja humanamente viável. Quinze alunos, três sessões individuais por semana cada, tudo com preparo prévio. Esse é o limite estrito em que a mentoria continua sendo de verdade.
                    </p>
                  </div>
                </div>

                <!-- Coluna Direita: Métricas & Credenciais Fatuais -->
                <div style="display: flex; flex-direction: column; gap: 20px;">
                  <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); padding: 24px; border-radius: 16px;">
                    <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Experiência Comprovada</div>
                    <div class="body-l-medium" style="color: #ffffff;">5 Anos de Sala de Aula</div>
                    <div class="color-gray body-s-regular" style="margin-top: 4px;">Centenas de alunos destravados presencialmente.</div>
                  </div>

                  <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); padding: 24px; border-radius: 16px;">
                    <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Instituições</div>
                    <div class="body-l-medium" style="color: #ffffff;">Rede All Net Idiomas</div>
                    <div class="color-gray body-s-regular" style="margin-top: 4px;">Atuação em duas unidades e mentoria executiva.</div>
                  </div>

                  <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); padding: 24px; border-radius: 16px;">
                    <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Acompanhamento</div>
                    <div class="body-l-medium" style="color: #ffffff;">100% Individual</div>
                    <div class="color-gray body-s-regular" style="margin-top: 4px;">Sessões exclusivas 1-on-1 direto com Gabriel.</div>
                  </div>

                  <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); padding: 24px; border-radius: 16px;">
                    <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Segurança Financeira</div>
                    <div class="body-l-medium" style="color: #ffffff;">30 Dias de Garantia Pix</div>
                    <div class="color-gray body-s-regular" style="margin-top: 4px;">Risco financeiro zero para o aluno fundador.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 9: PARA QUEM É (QUALIFICAÇÃO ATIVA) -->
    <section class="state" id="para-quem-e">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 56px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Qualificação Honesta</div>
                </div>
              </div>
              <h2 class="h-02">A Turma Alpha é para você?</h2>
              <div class="color-gray" style="margin-top: 14px;">
                <div class="body-m-regular">A LexiQuest não é para todo mundo, e fazemos questão de dizer isso antes de você investir seu tempo e dinheiro.</div>
              </div>
            </div>

            <div slide-up-02="" class="qualify-grid">
              <!-- É para você se... -->
              <div class="qualify-card is-fit">
                <div class="body-m-medium text-lime" style="text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">
                  ✓ É para você se:
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Quer falar inglês em situações reais (trabalho, viagem, convívio), não apenas passar em uma prova teórica.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Está entre os níveis A1 e B2 (do básico travado à autonomia cotidiana).</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Topa praticar todos os dias, a partir de 15 minutos no seu celular.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Topa gravar a própria voz e errar em voz alta em ambiente seguro.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon text-lime">✓</span>
                  <span>Consegue reservar três horários fixos por semana para as sessões com Gabe (1 hora no total).</span>
                </div>
              </div>

              <!-- NÃO é para você se... -->
              <div class="qualify-card not-fit">
                <div class="body-m-medium" style="color: #f87171; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">
                  ✕ Talvez NÃO seja para você se:
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span>Já está no nível C1 ou acima (o piloto é desenhado para destravar até B2).</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span>Seu foco exclusivo é uma prova específica (IELTS, TOEFL) ou certificação acadêmica.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span>Quer apenas estudar gramática no papel ou aprender lendo em silêncio.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span>Não pode ou não quer gravar a própria voz nas missões práticas.</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span>Tem menos de 18 anos (o programa é exclusivo para adultos).</span>
                </div>
                <div class="qualify-item">
                  <span class="qualify-icon" style="color: #f87171;">✕</span>
                  <span>Espera resultado milagroso sem ter uma rotina diária constante.</span>
                </div>
              </div>
            </div>

            <!-- Fechamento & CTA -->
            <div slide-up-03="" style="text-align: center; margin-top: 40px;">
              <p class="body-m-regular color-gray" style="margin-bottom: 20px;">
                Na dúvida, faça o diagnóstico. Ele mostra exatamente onde você está, sem nenhum compromisso.
              </p>
              <div class="btn">
                <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                  <div class="btn-outer">
                    <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 10: OFERTA (PREÇO CANÔNICO & TRANSPARÊNCIA RADICAL) -->
    <section class="state" id="oferta">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 48px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="yellow" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon w-variant-5f608897-5531-7a7c-52a8-4781b464b78d"></div>
                  <div class="tag w-variant-5f608897-5531-7a7c-52a8-4781b464b78d">Condição da Turma Alpha</div>
                </div>
              </div>
              <h2 class="h-02">O que você recebe na Turma Alpha</h2>
              <div class="color-gray" style="margin-top: 14px;">
                <div class="body-m-regular">Apenas 15 vagas na turma-piloto com acompanhamento individual direto com o professor Gabriel Lima.</div>
              </div>
            </div>

            <!-- Card Central de Preço Aether -->
            <div slide-up-02="" style="max-width: 680px; margin: 0 auto; background: var(--surface-dark); border: 1px solid var(--brand-green-border); border-radius: 28px; padding: 48px; text-align: center; box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 20px; margin-bottom: 32px;">
                <div class="body-m-medium" style="color: #ffffff; font-weight: 700;">Alunos Fundadores Alpha</div>
                <div class="body-s-medium text-lime" style="background: var(--brand-green-muted); border: 1px solid var(--brand-green-border); padding: 5px 14px; border-radius: 99px; font-weight: 700;">
                  15 Vagas Restritas
                </div>
              </div>

              <!-- Preço -->
              <div style="margin-bottom: 28px;">
                <div style="display: flex; justify-content: center; align-items: baseline; gap: 8px;">
                  <span style="font-size: 26px; font-weight: 700; color: #ffffff;">R$</span>
                  <span class="h-01 text-lime" style="font-size: 80px; line-height: 1;">197</span>
                  <span class="color-gray body-m-regular">/mês</span>
                </div>
                <div style="font-size: 14px; color: #d1d5db; margin-top: 12px; font-weight: 500;">
                  Pagamento por Pix, após sua conversa direta com o Gabe.
                </div>
              </div>

              <!-- Aviso de Preço Transparente (Regra dos 6 Meses) -->
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-medium); border-radius: 12px; padding: 14px 18px; margin-bottom: 32px; font-size: 13px; color: #d1d5db; line-height: 1.5; text-align: left;">
                <strong style="color: #ffffff;">Transparência Radical de Preço:</strong> Depois de cerca de 6 meses, o plano passa para R$ 297 por mês para todos os alunos. Você será avisado com pelo menos 30 dias de antecedência, e a regra está escrita no termo de adesão. Sem pegadinhas.
              </div>

              <!-- Lista Completa de Inclusões -->
              <div style="text-align: left; display: flex; flex-direction: column; gap: 16px; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); padding: 28px 0; margin-bottom: 32px;">
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>Portais 1 a 4:</strong> A trilha completa, do A1 ao B2, em formato de jogo.</span>
                </div>
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>AIDA com 4 personas:</strong> Jordan, Miles, Zack e Alexandra, com memória do que você domina.</span>
                </div>
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>3 Sessões Individuais / Semana com Gabe:</strong> 2 de 15 minutos e 1 de 30 minutos.</span>
                </div>
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>Resumo semanal por WhatsApp:</strong> Seus avanços e gargalos mapeados toda semana.</span>
                </div>
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>SPARK Score:</strong> Medição diagnóstica na entrada e reavaliação objetiva em 30 dias.</span>
                </div>
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>Boss Raid ao vivo por Portal:</strong> Desafio em tempo real 1-on-1 com o Gabe.</span>
                </div>
                <div style="display: flex; gap: 14px; align-items: flex-start;">
                  <span style="color: var(--brand-green); font-weight: 800; font-size: 16px;">✓</span>
                  <span class="body-s-regular" style="color: #ffffff;"><strong>Início Rápido:</strong> Sua primeira sessão acontece em até 48 horas depois do pagamento.</span>
                </div>
              </div>

              <!-- CTAs -->
              <div style="display: flex; flex-direction: column; gap: 14px;">
                <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432" style="width: 100%;">
                  <div class="btn-outer" style="justify-content: center; padding: 18px 24px;">
                    <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal (8 min)</div></div>
                    </div>
                  </div>
                </a>
                <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Quero%20conversar%20sobre%20a%20Turma%20Alpha%20por%20R%24%20197%2Fm%C3%AAs." target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); font-size: 14px; text-decoration: none; padding: 6px;">
                  Prefere conversar antes? <span style="color: var(--brand-green); text-decoration: underline;">Chame o Gabe no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 11: GARANTIA ("Garantia de 30 dias, com as regras claras") -->
    <section class="state" id="garantia">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" style="max-width: 780px; margin: 0 auto; background: var(--surface-dark); border: 1px solid var(--border-medium); border-radius: 24px; padding: 48px;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Compromisso de Integridade</div>
                </div>
              </div>
              <h2 class="h-02" style="font-size: 34px; margin-bottom: 20px;">
                Garantia de 30 dias, com as regras claras
              </h2>
              <p class="body-m-regular" style="color: #ffffff; line-height: 1.7; margin-bottom: 24px;">
                Use a Turma Alpha de verdade por 30 dias. Se não fizer sentido para você, devolvemos a primeira mensalidade, integralmente.
              </p>

              <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
                <div class="body-s-medium text-lime" style="text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px;">
                  Para a garantia valer, você precisa ter usado o programa:
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #d1d5db;">
                  <div><strong>1.</strong> Ter feito pelo menos <strong>3 sessões</strong> com o Gabe (1 hora no total);</div>
                  <div><strong>2.</strong> Ter concluído a <strong>Seção 0</strong> do Portal (3 missões);</div>
                  <div><strong>3.</strong> Ter enviado pelo menos <strong>2 Speaking Quests</strong> gravadas.</div>
                </div>
              </div>

              <div class="color-gray body-s-regular" style="line-height: 1.6;">
                <p style="margin-bottom: 12px;">
                  <strong>Por quê:</strong> Só dá para avaliar um método depois de usá-lo. Esses três passos comprovam que você usou, e todos ficam registrados no seu Portal.
                </p>
                <p style="margin: 0;">
                  <strong>Além disso:</strong> Como em qualquer compra feita online, você tem <strong>7 dias para desistir</strong>, nos termos do Código de Defesa do Consumidor, sem precisar cumprir condição nenhuma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 12: COMO ENTRAR (3 PASSOS) -->
    <section class="features" id="como-entrar">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 56px; text-align: center;">
              <h2 class="h-02">Como entrar, em três passos</h2>
              <div class="color-gray" style="margin-top: 12px;">
                <div class="body-m-regular">Processo simples, transparente e sem cobranças automáticas no cartão.</div>
              </div>
            </div>

            <div class="service-grid">
              <!-- Passo 1 -->
              <div slide-up-01="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="h-02 text-lime" style="font-size: 40px; margin-bottom: 12px;">01</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 10px; font-size: 20px;">Faça o quiz</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Cerca de 8 minutos para descobrir o seu ponto de partida real, sem estresse e sem precisar falar agora.
                  </div>
                </div>
              </div>

              <!-- Passo 2 -->
              <div slide-up-02="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="h-02 text-lime" style="font-size: 40px; margin-bottom: 12px;">02</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 10px; font-size: 20px;">Converse com o Gabe</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Pelo WhatsApp, vocês confirmam o seu Portal inicial, alinham os horários fixos das sessões e tiram as últimas dúvidas.
                  </div>
                </div>
              </div>

              <!-- Passo 3 -->
              <div slide-up-03="" class="service-card" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); padding: 36px 32px; border-radius: 20px;">
                <div class="h-02 text-lime" style="font-size: 40px; margin-bottom: 12px;">03</div>
                <div class="body-l-medium" style="color: #ffffff; margin-bottom: 10px; font-size: 20px;">Pague por Pix e comece</div>
                <div class="color-gray">
                  <div class="body-s-regular" style="line-height: 1.6;">
                    Após o alinhamento, você efetua o Pix manual de R$ 197 e sua primeira sessão individual acontece em até 48 horas.
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div slide-up-02="" style="text-align: center; margin-top: 40px;">
              <div class="btn">
                <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                  <div class="btn-outer">
                    <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- DIAGNÓSTICO INTERATIVO DE ENTRADA (GATE + 4 BLOCOS DE NÍVEL) -->
    <section class="state" id="diagnostico">
      <div class="section-02">
        <div class="container">
          <div class="section-inner">
            <div slide-up-01="" class="header-center" style="max-width: 800px; margin: 0 auto 48px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Diagnóstico de Ponto de Partida · 8 Minutos</div>
                </div>
              </div>
              <h2 class="h-02">Descubra o seu Portal inicial</h2>
              <div class="color-gray" style="margin-top: 14px;">
                <div class="body-m-regular">Responda a situações práticas do mundo real. O teste avalia sua automaticidade e indica seu Portal inicial de fala, sem julgamento.</div>
              </div>
            </div>

            <!-- Quiz Container Card -->
            <div slide-up-02="" class="quiz-card-aether" id="quiz-container">
              
              <!-- TELA 1: GATE INICIAL (DADOS, 18+ & CONSENTIMENTO LGPD) -->
              <div id="quiz-gate-area">
                <div style="text-align: center; margin-bottom: 28px;">
                  <div style="font-size: 12px; font-weight: 700; color: var(--brand-green); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                    Passo Prévio · Identificação
                  </div>
                  <h3 style="font-size: 24px; font-weight: 800; color: #ffffff; margin-bottom: 8px;">
                    Antes de começar o diagnóstico
                  </h3>
                  <p style="font-size: 14px; color: var(--text-muted); margin: 0 auto; max-width: 480px; line-height: 1.5;">
                    Seus dados são usados exclusivamente para calcular seu ponto de partida e gerar o contato direto com Gabriel Ferreira Lima.
                  </p>
                </div>

                <form id="quiz-gate-form" style="max-width: 460px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px; text-align: left;">
                  <div>
                    <label style="display: block; font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Seu Nome Completo</label>
                    <input type="text" id="lead-name" class="quiz-input-field" placeholder="Como o Gabe deve te chamar?" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Seu WhatsApp (com DDD)</label>
                    <input type="tel" id="lead-phone" class="quiz-input-field" placeholder="(11) 90000-0000" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Ano de Nascimento (Confirmação de 18+)</label>
                    <input type="number" id="lead-birthyear" class="quiz-input-field" placeholder="Ex: 1994" min="1930" max="2026" required />
                  </div>

                  <!-- Consentimento LGPD -->
                  <div style="display: flex; gap: 10px; align-items: flex-start; margin-top: 6px;">
                    <input type="checkbox" id="lead-consent" required style="margin-top: 3px; accent-color: #58f27f; width: 16px; height: 16px;" />
                    <label for="lead-consent" style="font-size: 12px; color: #a1a1aa; line-height: 1.5;">
                      Concordo com o tratamento dos meus dados para fins de nivelamento e contato pelo WhatsApp da LexiQuest, nos termos da Lei Geral de Proteção de Dados (LGPD).
                    </label>
                  </div>

                  <p id="gate-error" style="display: none; font-size: 13px; color: #f87171; text-align: center; margin: 0;">Por favor, preencha todos os campos e aceite o consentimento.</p>

                  <button type="submit" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432" style="width: 100%; border: none; cursor: pointer; margin-top: 10px;">
                    <div class="btn-outer" style="justify-content: center; padding: 18px 24px;">
                      <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                      <div class="btn-text-wrap">
                        <div class="btn-text _01"><div class="body-m-medium">Iniciar Diagnóstico de Ponto de Partida →</div></div>
                      </div>
                    </div>
                  </button>
                </form>
              </div>

              <!-- TELA 2: ÁREA DE PERGUNTAS -->
              <div id="quiz-question-area" style="display: none;">
                <!-- Top bar de progresso -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px; margin-bottom: 28px;">
                  <div style="font-size: 13px; font-weight: 700; color: var(--brand-green);" id="quiz-step-label">
                    Questão 1 de 8
                  </div>
                  <div style="width: 160px; height: 6px; border-radius: 99px; background: #1a1a1a; overflow: hidden;">
                    <div id="quiz-progress-bar" style="width: 12.5%; height: 100%; background: var(--brand-green); border-radius: 99px; transition: width 0.3s ease;"></div>
                  </div>
                </div>

                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--brand-green); letter-spacing: 0.5px; margin-bottom: 8px;" id="situation-tag">
                  Situação
                </div>
                <h3 id="question-title" style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 12px; line-height: 1.4;">
                  Título da questão
                </h3>
                <p id="question-desc" style="font-size: 14px; color: var(--text-muted); margin: 0 0 24px;">
                  Instrução...
                </p>

                <div id="options-container" style="display: flex; flex-direction: column; gap: 12px;">
                  <!-- Botoes inseridos via JS -->
                </div>
              </div>

              <!-- TELA 3: RESULTADO NORMAL (PORTAIS 1 A 4) -->
              <div id="quiz-result-area" style="display: none; text-align: center; padding: 10px 0;">
                <div style="font-size: 12px; font-weight: 700; color: var(--brand-green); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                  Diagnóstico Concluído
                </div>
                <h3 id="result-portal-name" class="h-02 text-lime" style="font-size: 32px; margin-bottom: 16px;">
                  Portal Detectado
                </h3>

                <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); border-radius: 20px; padding: 32px; text-align: left; margin: 28px 0;">
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 20px; margin-bottom: 20px;">
                    <div>
                      <div style="font-size: 11px; font-weight: 700; color: var(--brand-green); text-transform: uppercase;">Guardião AIDA</div>
                      <div id="result-guardian" style="font-size: 18px; font-weight: 700; color: #ffffff;">Jordan</div>
                    </div>
                    <div>
                      <div style="font-size: 11px; font-weight: 700; color: #60a5fa; text-transform: uppercase;">Boss Raid Final</div>
                      <div id="result-boss" style="font-size: 16px; font-weight: 600; color: #ffffff;">Imigração no JFK</div>
                    </div>
                  </div>

                  <div style="font-size: 12px; font-weight: 700; color: var(--brand-green); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Diagnóstico do Seu Momento</div>
                  <p id="result-block-text" style="font-size: 15px; color: #ffffff; line-height: 1.6; margin: 0 0 20px;">
                    Análise...
                  </p>
                  <div style="font-size: 12px; font-weight: 700; color: #60a5fa; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Plano Recomendado com Gabe</div>
                  <p id="result-plan-text" style="font-size: 14px; color: #aaaaaa; line-height: 1.6; margin: 0;">
                    Plano...
                  </p>
                </div>

                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                  <a id="btn-whatsapp-result" href="https://wa.me/5511967239791" target="_blank" rel="noopener noreferrer" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432">
                    <div class="btn-outer" style="padding: 18px 28px;">
                      <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Icon" class="btn-icon" />
                      <div class="btn-text-wrap">
                        <div class="btn-text _01"><div class="body-m-medium">Enviar Diagnóstico para Gabriel no WhatsApp →</div></div>
                      </div>
                    </div>
                  </a>
                  <button type="button" id="btn-restart-quiz" class="btn-01-link" style="background: transparent; border: 1px solid var(--border-medium); color: #ffffff; cursor: pointer; border-radius: 99px; padding: 0 24px;">
                    <div class="body-m-medium">↻ Refazer Teste</div>
                  </button>
                </div>
              </div>

              <!-- TELA 4: BARREIRA C1+ (QUALIFICAÇÃO HONESTA) -->
              <div id="quiz-barrier-c1" style="display: none; text-align: center; padding: 20px 0;">
                <div style="font-size: 12px; font-weight: 700; color: #60a5fa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                  Nível Avançado Detectado (C1+)
                </div>
                <h3 class="h-02" style="font-size: 28px; margin-bottom: 16px; color: #ffffff;">
                  Você já tem domínio de fala avançado!
                </h3>
                <div style="background: var(--surface-elevated); border: 1px solid var(--border-medium); border-radius: 20px; padding: 28px; text-align: left; max-width: 600px; margin: 24px auto;">
                  <p class="body-m-regular" style="color: #ffffff; line-height: 1.7; margin: 0 0 16px;">
                    Suas respostas mostram excelente percepção de nuances, ironia sutil e desenvoltura argumentativa.
                  </p>
                  <p class="body-s-regular color-gray" style="line-height: 1.6; margin: 0;">
                    Por integridade radical com você e com seu investimento: <strong>a Turma Alpha foi desenhada especificamente para destravar alunos entre A1 e B2</strong>. No momento, não temos uma turma calibrada para o nível C1+. Agradecemos imensamente seu interesse e manteremos você informado caso abramos turmas executivas avançadas no futuro!
                  </p>
                </div>
                <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Fiz%20o%20teste%20e%20deu%20n%C3%ADvel%20C1%2B.%20Gostaria%20de%20bater%20um%20papo%20mesmo%20assim." target="_blank" rel="noopener noreferrer" class="btn-01-link" style="display: inline-block; border: 1px solid var(--border-medium); border-radius: 99px; padding: 14px 28px; color: #ffffff; text-decoration: none;">
                  Chamar Gabriel no WhatsApp mesmo assim
                </a>
              </div>

              <!-- TELA 5: BARREIRA MENOR DE 18 ANOS -->
              <div id="quiz-barrier-age" style="display: none; text-align: center; padding: 20px 0;">
                <div style="font-size: 12px; font-weight: 700; color: #f87171; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                  Programa Restrito para Adultos
                </div>
                <h3 class="h-02" style="font-size: 26px; margin-bottom: 16px; color: #ffffff;">
                  A Turma Alpha é exclusiva para maiores de 18 anos
                </h3>
                <p class="body-m-regular color-gray" style="max-width: 520px; margin: 0 auto 24px; line-height: 1.6;">
                  Nossa metodologia e nossos termos de conformidade e uso de IA foram concebidos estritamente para o público adulto. Desejamos muito sucesso nos seus estudos de inglês!
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 13: PERGUNTAS FREQUENTES (FAQ COM AS 15 RESPOSTAS OFICIAIS DO SPEC) -->
    <section class="service" id="faq">
      <div class="section-02">
        <div class="container">
          <div class="section-inner" style="max-width: 820px; margin: 0 auto;">
            <div slide-up-01="" class="header-center" style="margin-bottom: 48px; text-align: center;">
              <div data-wf--tag-box-wrap--variant="base" class="tag-box-wrap" style="justify-content: center; margin-bottom: 16px;">
                <div class="tag-box">
                  <div class="tag-icon"></div>
                  <div class="tag">Esclarecimento Total</div>
                </div>
              </div>
              <h2 class="h-02">Perguntas Frequentes</h2>
              <div class="color-gray" style="margin-top: 12px;">
                <div class="body-m-regular">Tudo o que você precisa saber sobre a metodologia, a rotina e o formato da Turma Alpha.</div>
              </div>
            </div>

            <div slide-up-02="" style="display: flex; flex-direction: column;">
              <!-- FAQ 1 -->
              <details class="faq-details" open>
                <summary class="faq-summary">
                  <span>1. Preciso ter um nível mínimo de inglês?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Não. A Turma Alpha atende do A1 ao B2, e o quiz mostra em qual Portal você começa. Só não atendemos, por enquanto, quem já está no nível C1 ou acima.
                </div>
              </details>

              <!-- FAQ 2 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>2. Sou muito travado. Serve para mim?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  É exatamente para esse perfil. O método foi desenhado para reduzir o medo de errar: a AIDA nunca interrompe para corrigir, e o Gabe trabalha a desinibição nas sessões curtas.
                </div>
              </details>

              <!-- FAQ 3 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>3. Quanto tempo por dia eu preciso?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  A rotina mínima é de 15 minutos e uma Daily Quest. Quem tem mais tempo pode fazer a rotina completa (3 quests, 45 minutos ou mais), mas ela é opcional. Somando as sessões com o Gabe, são cerca de 1 hora por semana.
                </div>
              </details>

              <!-- FAQ 4 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>4. A IA não vai me ensinar errado?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  IA pode errar, e é por isso que o Gabe está no sistema. Todo conteúdo que você vê é revisado por ele antes de ser publicado, a AIDA passa por testes pedagógicos antes de entrar no ar, e os momentos críticos (Checkpoint sem apoio e Boss Raid) são validados por ele ao vivo. Se algo parecer estranho, você leva para a sessão.
                </div>
              </details>

              <!-- FAQ 5 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>5. Por que a AIDA não me corrige de forma explícita?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Corrigir no meio da fala aumenta o medo de errar e quebra a conversa. A AIDA reformula do jeito certo e segue. Quando um desvio se repete em duas cenas, ela avisa o Gabe, e é ele quem decide se vale uma explicação curta, de até 60 palavras, na sessão.
                </div>
              </details>

              <!-- FAQ 6 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>6. Vou precisar gravar a minha voz?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Sim. Algumas missões pedem uma gravação curta, porque falar é o objetivo. Depois do pagamento, você assina um termo específico de voz. Os áudios ficam guardados durante a sua matrícula e por mais 90 dias, e você pode pedir a exclusão a qualquer momento. O uso de áudio em depoimento ou divulgação só acontece com uma autorização separada.
                </div>
              </details>

              <!-- FAQ 7 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>7. Como funcionam as sessões com o Gabe?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  São três por semana, em horários fixos combinados na entrada: duas de 15 minutos e uma de 30. O Gabe lê o seu dossiê antes de cada sessão, então o tempo vai para o que você mais precisa. Ao fim de cada semana, você recebe um resumo por WhatsApp.
                </div>
              </details>

              <!-- FAQ 8 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>8. Em quanto tempo eu vou falar inglês?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Ninguém sério promete um prazo, porque ele depende do seu ponto de partida e da sua constância. O que a Turma Alpha faz é medir: você começa com uma avaliação (SPARK Score) e refaz em 30 dias, e acompanha o seu avanço por Transfer Tasks, checkpoints e Boss Raids. Você enxerga evidências, não promessas vazias.
                </div>
              </details>

              <!-- FAQ 9 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>9. Qual a diferença para um curso, um app ou uma aula particular?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  A Turma Alpha combina três coisas: prática diária de fala com a AIDA, acompanhamento humano frequente (três sessões por semana) e uma trilha em que você só avança com evidência. Ela é feita para quem quer destravar a fala, e não é a melhor escolha para todo objetivo.
                </div>
              </details>

              <!-- FAQ 10 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>10. Quanto custa, e por que muda para R$ 297?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  R$ 197 por mês durante o piloto, por Pix. Depois de cerca de 6 meses, todos os alunos passam para R$ 297 por mês, porque o valor da turma-piloto é um preço de lançamento. Você é avisado com pelo menos 30 dias de antecedência, e isso fica escrito no termo de adesão.
                </div>
              </details>

              <!-- FAQ 11 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>11. Como funciona a garantia?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Você tem 30 dias para pedir a devolução integral da primeira mensalidade, desde que tenha feito pelo menos 3 sessões com o Gabe, concluído a Seção 0 do Portal (3 missões) e enviado pelo menos 2 Speaking Quests. Independentemente disso, você tem os 7 dias de arrependimento previstos no Código de Defesa do Consumidor, sem condição.
                </div>
              </details>

              <!-- FAQ 12 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>12. Como eu pago?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Por Pix, depois da sua conversa com o Gabe, quando vocês já confirmaram o seu ponto de partida. Não há cobrança no quiz nem nesta página.
                </div>
              </details>

              <!-- FAQ 13 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>13. Meus dados e meus áudios estão seguros?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Coletamos só o que serve a uma finalidade: nome, WhatsApp, data de nascimento (para confirmar que você é maior de 18 anos) e as respostas do quiz, para definir o seu ponto de partida. Se você não entrar na turma, esses dados são apagados em até 30 dias. Dados e áudios da matrícula ficam guardados enquanto você for aluno e por mais 90 dias. Alguns serviços de IA e de hospedagem podem processar dados fora do Brasil, e isso consta no Aviso de Privacidade. Você pode pedir acesso, correção ou exclusão pelo WhatsApp.
                </div>
              </details>

              <!-- FAQ 14 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>14. Por que é uma turma-piloto?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  A Turma Alpha é a primeira turma da LexiQuest, limitada a 15 alunos para que o Gabe acompanhe cada um de perto. Isso significa preço de lançamento, atenção direta e um produto que ainda está sendo lapidado com o seu feedback. Se você prefere um produto já maduro e padronizado, talvez este não seja o momento.
                </div>
              </details>

              <!-- FAQ 15 -->
              <details class="faq-details">
                <summary class="faq-summary">
                  <span>15. Serve para IELTS, TOEFL ou certificação?</span>
                  <span class="faq-icon-arrow">↓</span>
                </summary>
                <div class="faq-answer">
                  Não é o foco. A Turma Alpha treina fala em situações reais e não promete certificação de nível nem preparação específica para provas.
                </div>
              </details>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 14: CTA FINAL ("Descubra o seu ponto de partida em cerca de 8 minutos") -->
    <section class="cta">
      <div class="container">
        <div slide-up-01="" class="cta-inner" style="background: var(--surface-dark); border: 1px solid var(--stroke-colour); border-radius: 28px; padding: 60px 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 32px; box-shadow: 0 25px 70px rgba(0,0,0,0.5);">
          <div class="cta-left" style="max-width: 600px;">
            <div class="h-01" style="font-size: 38px; line-height: 1.15; margin-bottom: 16px;">
              Descubra o seu ponto de partida em cerca de 8 minutos
            </div>
            <div class="color-gray">
              <div class="body-l-medium" style="font-size: 16px; line-height: 1.6;">
                O quiz mostra em qual Portal você começa. Depois, você conversa com o Gabe e decide, sem pagar nada antes.
              </div>
            </div>
          </div>
          <div class="cta-bottom">
            <div style="display: flex; flex-direction: column; gap: 14px; align-items: flex-start;">
              <div class="btn">
                <a href="#diagnostico" class="btn-01-link w-variant-e00ff45f-ff78-0ca4-3201-26a6f77c8432 w-inline-block">
                  <div class="btn-outer" style="padding: 18px 32px;">
                    <img src="/aether/6a4b8f9c0bdaaba4fc98f516_Dots.svg" alt="BTN Logo" class="btn-icon" />
                    <div class="btn-text-wrap">
                      <div class="btn-text _01"><div class="body-m-medium">Descobrir meu Portal</div></div>
                    </div>
                  </div>
                </a>
              </div>
              <a href="https://wa.me/5511967239791?text=Ol%C3%A1%20Gabe!%20Quero%20conversar%20sobre%20a%20Turma%20Alpha." target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); font-size: 13px; text-decoration: none;">
                Prefere conversar antes? <span style="color: var(--brand-green); text-decoration: underline;">Chame o Gabe no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOCO 15: RODAPÉ OFICIAL -->
    <section class="footer-outer">
      <div class="container">
        <div class="footer-wrapper" style="padding-bottom: 48px;">
          <div slide-up-01="" class="footer-block-wrap" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; border-top: 1px solid var(--stroke-colour); padding-top: 32px; width: 100%;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-weight: 800; color: #ffffff; font-size: 17px;">Lexi<span class="text-lime">Quest</span></span>
              <span class="color-gray body-s-regular">· Método Gabriel Lima</span>
            </div>
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
              <a href="#espelho" class="nav-link w-inline-block"><div class="body-s-medium">O Desafio</div></a>
              <a href="#mecanismo" class="nav-link w-inline-block"><div class="body-s-medium">O Método</div></a>
              <a href="#portais" class="nav-link w-inline-block"><div class="body-s-medium">Os Portais</div></a>
              <a href="#oferta" class="nav-link w-inline-block"><div class="body-s-medium">Turma Alpha</div></a>
              <a href="#faq" class="nav-link w-inline-block"><div class="body-s-medium">FAQ</div></a>
              <a href="https://wa.me/5511967239791" target="_blank" rel="noopener noreferrer" class="nav-link w-inline-block text-lime"><div class="body-s-medium">WhatsApp do Gabe</div></a>
            </div>
            <div class="color-gray body-s-regular" style="font-size: 12px; max-width: 440px; text-align: right; line-height: 1.5;">
              Aviso: A LexiQuest não promete resultado específico de nível ou prazo. A evolução depende da prática e da constância de cada aluno.
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- SCRIPTS INTERATIVOS -->
  <script is:inline>
    // 1. TABS DOS 4 PORTAIS (BLOCO 6)
    (function initStageTabs() {
      const stagesData = [
        {
          badge: "Portal 1 · Nível A1 → A2 · Guardião: Jordan",
          title: "O Descongelamento",
          desc: "Quebrar o tradutor mental. Seus primeiros chunks sonoros de sobrevivência prática e as primeiras conversas reais sem depender de análise de regras no cérebro.",
          skills: "Imigração no Aeroporto JFK (Nova York) sem tradutor e sem travar.",
          img: "/assets/dia2_cafeteria.jpg"
        },
        {
          badge: "Portal 2 · Nível A2 → B1 · Guardião: Miles",
          title: "O Motor do BICS",
          desc: "Ganhar velocidade comunicativa. Conversar com autonomia no dia a dia, viajar, resolver imprevistos práticos e responder sem engasgar.",
          skills: "Check-in de hotel com reserva errada em Nova York, sustentado em inglês.",
          img: "/assets/cap3_preparacao.jpg"
        },
        {
          badge: "Portal 3 · Nível B1 → B2 · Guardião: Zack",
          title: "A Tração Conversacional",
          desc: "Sustentar a conversa por longos períodos. Small talk natural em pubs e eventos sociais, participação ativa em reuniões profissionais e presença confiante.",
          skills: "Conversa espontânea em Pub no Brooklyn, debatendo ideias com nativos.",
          img: "/assets/cap2_metodo.jpg"
        },
        {
          badge: "Portal 4 · Nível B2 · Guardiã: Alexandra",
          title: "A Fronteira Executiva",
          desc: "Pensar direto em inglês. Argumentar, negociar sob pressão, apresentar projetos e usar diplomacia executiva e sutilezas culturais com segurança.",
          skills: "Pitch executivo para investidores com sessão aberta de perguntas e respostas.",
          img: "/assets/dia4_fluencia.jpg"
        }
      ];

      const tabButtons = document.querySelectorAll('.stage-tab-item');
      const badgeEl = document.getElementById('stage-badge');
      const titleEl = document.getElementById('stage-title');
      const descEl = document.getElementById('stage-desc');
      const skillsEl = document.getElementById('stage-skills');
      const imgEl = document.getElementById('stage-img');

      if (!tabButtons.length || !badgeEl || !titleEl || !descEl || !skillsEl || !imgEl) return;

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-stage') || '0', 10);
          const data = stagesData[idx];
          if (!data) return;

          tabButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          imgEl.style.opacity = '0.3';
          setTimeout(() => {
            badgeEl.textContent = data.badge;
            titleEl.textContent = data.title;
            descEl.textContent = data.desc;
            skillsEl.textContent = data.skills;
            imgEl.src = data.img;
            imgEl.style.opacity = '1';
          }, 150);
        });
      });
    })();

    // 2. QUIZ DE NIVELAMENTO (DIAGNÓSTICO DETERMINÍSTICO DE PORTAL)
    (function initDiagnosticQuiz() {
      // 8 Questões Situacionais Mapeadas aos 4 Blocos de Competência (2 por bloco)
      const questions = [
        // Bloco 1: A1 -> A2 (Sobrevivência & Chunks Básicos)
        {
          block: 1,
          tag: "Bloco 1 · Situação 1: Café & Sobrevivência (A1/A2)",
          title: "Você está em Nova York e o barista te entrega um copo com bebida totalmente diferente do que você pediu. Qual é a sua reação imediata?",
          desc: "Seja 100% sincero com o que acontece no reflexo:",
          options: [
            { text: "Fico com vergonha, bebo assim mesmo ou aponto pro copo fazendo mímica.", correct: false },
            { text: "Demoro vários segundos montando na cabeça ('The coffee... is not this...'), mas consigo pedir a troca.", correct: false },
            { text: "Falo no reflexo natural sem traduzir: 'Hey, sorry, I actually ordered an iced latte, could you check it?'", correct: true }
          ]
        },
        {
          block: 1,
          tag: "Bloco 1 · Situação 2: Aeroporto & Imprevistos (A1/A2)",
          title: "Seu voo de conexão em Londres mudou de portão em cima da hora. Você precisa perguntar ao agente no corredor para onde ir.",
          desc: "Como sai a sua fala?",
          options: [
            { text: "Entro em desespero, procuro telas ou abro o Google Tradutor no celular.", correct: false },
            { text: "Falo palavras soltas ('Where... gate... please?') com o coração acelerado.", correct: false },
            { text: "Uso chunks práticos com calma: 'Excuse me, could you point me to gate 14? My flight was moved.'", correct: true }
          ]
        },

        // Bloco 2: A2 -> B1 (Autonomia & Rotina Sem Tradução)
        {
          block: 2,
          tag: "Bloco 2 · Situação 3: Hotel & Reserva Errada (A2/B1)",
          title: "Na recepção do hotel, o atendente diz que sua reserva é para a próxima semana, não para hoje.",
          desc: "Como você conduz a resolução do problema?",
          options: [
            { text: "Travo. Mostro o comprovante no celular em silêncio e rezo para ele entender.", correct: false },
            { text: "Consigo explicar aos trancos, mas penso em português antes de cada verbo e gaguejo bastante.", correct: false },
            { text: "Explico a situação com chunks articulados: 'There seems to be a mix-up with the dates, can we look up the confirmation code?'", correct: true }
          ]
        },
        {
          block: 2,
          tag: "Bloco 2 · Situação 4: Conversa Cotidiana (A2/B1)",
          title: "Um colega gringo pergunta como foi o seu final de semana e o que você costuma fazer nos momentos livres.",
          desc: "Qual o seu ritmo de resposta?",
          options: [
            { text: "Digo só 'Good, very good' e fico calado para não correr risco de errar.", correct: false },
            { text: "Consigo falar frases curtas, mas paro no meio para buscar palavras no dicionário mental.", correct: false },
            { text: "Desenvolvo um relato fluido: 'I just relaxed, caught up on some reading and spent time outdoors.'", correct: true }
          ]
        },

        // Bloco 3: B1 -> B2 (Sustentar Conversa & Reuniões)
        {
          block: 3,
          tag: "Bloco 3 · Situação 5: Reunião Profissional Sob Pressão (B1/B2)",
          title: "Numa reunião remota com clientes internacionais, questionam se a sua equipe vai conseguir entregar o prazo prometido.",
          desc: "Qual é a sua postura ao microfone?",
          options: [
            { text: "Fico de câmera fechada torcendo para outro colega responder no meu lugar.", correct: false },
            { text: "Falo meu inglês técnico básico, mas peço desculpas pelo meu inglês e sinto que perdi autoridade.", correct: false },
            { text: "Assumo a resposta com diplomacia: 'We’re currently on track, but if anything shifts, I’ll flag it well in advance.'", correct: true }
          ]
        },
        {
          block: 3,
          tag: "Bloco 3 · Situação 6: Social & Pub Conversational (B1/B2)",
          title: "Num pub ou jantar informal, nativos começam a debater sobre diferenças culturais e pedem sua opinião.",
          desc: "Como você participa da conversa?",
          options: [
            { text: "Só dou risada quando os outros riem, sem conseguir expor meu ponto de vista.", correct: false },
            { text: "Até consigo opinar, mas perco o ritmo quando todo mundo fala rápido ao mesmo tempo.", correct: false },
            { text: "Entro na conversa usando conectores naturais: 'To be honest, coming from Brazil, what really stands out is...'", correct: true }
          ]
        },

        // Bloco 4: Barreira C1 (Refinamento Idiomático & Sarcasmo Sutil)
        {
          block: 4,
          tag: "Bloco 4 · Situação 7: Humor Sutil & Ironia (Nível C1+)",
          title: "Durante uma conversa executiva descontraída, um interlocutor faz um comentário irônico de duplo sentido.",
          desc: "Como você reage?",
          options: [
            { text: "Fico perdido sem entender se ele estava falando sério ou brincando.", correct: false },
            { text: "Entendo o sentido literal das palavras, mas a ironia passa batida.", correct: false },
            { text: "Pego o duplo sentido na hora e devolvo outra tirada inteligente no mesmo tom sutil.", correct: true }
          ]
        },
        {
          block: 4,
          tag: "Bloco 4 · Situação 8: Negociação de Alto Impacto (Nível C1+)",
          title: "Em uma negociação complexa, você precisa discordar veementemente de uma cláusula sem parecer agressivo.",
          desc: "Qual o seu nível de refinamento verbal?",
          options: [
            { text: "Falo 'I don’t agree' de forma seca porque me faltam expressões mais polidas.", correct: false },
            { text: "Tento suavizar, mas fico inseguro se a frase soou rude para a cultura local.", correct: false },
            { text: "Uso diplomacia impecável: 'While I see where you’re coming from, that particular term might put us in a tight spot.'", correct: true }
          ]
        }
      ];

      let currentStep = 0;
      let userName = '';
      let userPhone = '';
      let userBirthYear = 0;
      let blockScores = { 1: 0, 2: 0, 3: 0, 4: 0 };

      const gateArea = document.getElementById('quiz-gate-area');
      const gateForm = document.getElementById('quiz-gate-form');
      const gateError = document.getElementById('gate-error');

      const questionArea = document.getElementById('quiz-question-area');
      const stepLabel = document.getElementById('quiz-step-label');
      const progressBar = document.getElementById('quiz-progress-bar');
      const situationTag = document.getElementById('situation-tag');
      const questionTitle = document.getElementById('question-title');
      const questionDesc = document.getElementById('question-desc');
      const optionsContainer = document.getElementById('options-container');

      const resultArea = document.getElementById('quiz-result-area');
      const resultPortalName = document.getElementById('result-portal-name');
      const resultGuardian = document.getElementById('result-guardian');
      const resultBoss = document.getElementById('result-boss');
      const resultBlockText = document.getElementById('result-block-text');
      const resultPlanText = document.getElementById('result-plan-text');
      const btnWhatsappResult = document.getElementById('btn-whatsapp-result');
      const btnRestart = document.getElementById('btn-restart-quiz');

      const barrierC1 = document.getElementById('quiz-barrier-c1');
      const barrierAge = document.getElementById('quiz-barrier-age');

      // 1. Submit Gate
      gateForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameVal = document.getElementById('lead-name')?.value.trim();
        const phoneVal = document.getElementById('lead-phone')?.value.trim();
        const yearVal = parseInt(document.getElementById('lead-birthyear')?.value || '0', 10);
        const consentChecked = document.getElementById('lead-consent')?.checked;

        if (!nameVal || !phoneVal || !yearVal || !consentChecked) {
          if (gateError) gateError.style.display = 'block';
          return;
        }

        // Validação 18+ anos
        const currentYear = new Date().getFullYear();
        if (currentYear - yearVal < 18) {
          if (gateArea) gateArea.style.display = 'none';
          if (barrierAge) barrierAge.style.display = 'block';
          return;
        }

        userName = nameVal;
        userPhone = phoneVal;
        userBirthYear = yearVal;
        if (gateError) gateError.style.display = 'none';

        // Ir para perguntas
        if (gateArea) gateArea.style.display = 'none';
        if (questionArea) questionArea.style.display = 'block';
        renderQuestion(0);
      });

      // 2. Render Question
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
              if (opt.correct) {
                blockScores[q.block] = (blockScores[q.block] || 0) + 1;
              }
              btn.style.borderColor = '#58f27f';
              btn.style.backgroundColor = 'rgba(88, 242, 127, 0.15)';
              setTimeout(() => {
                if (currentStep < questions.length - 1) {
                  currentStep++;
                  renderQuestion(currentStep);
                } else {
                  calculateAndShowResult();
                }
              }, 180);
            });
            optionsContainer.appendChild(btn);
          });
        }
      }

      // 3. Cálculo de Atribuição de Portal
      function calculateAndShowResult() {
        if (questionArea) questionArea.style.display = 'none';

        // Regra de atribuição canônica do PRD:
        // Domina Bloco 4 (ambas corretas) -> C1+ Barreira
        // Domina Bloco 3 -> Portal 4
        // Domina Bloco 2 -> Portal 3
        // Domina Bloco 1 -> Portal 2
        // Não domina Bloco 1 -> Portal 1
        const b1 = blockScores[1] || 0;
        const b2 = blockScores[2] || 0;
        const b3 = blockScores[3] || 0;
        const b4 = blockScores[4] || 0;

        if (b4 >= 2 && b3 >= 1) {
          if (barrierC1) barrierC1.style.display = 'block';
          return;
        }

        let portalNum = 1;
        let portalName = 'Portal 1 · O Descongelamento';
        let guardian = 'Jordan';
        let boss = 'Imigração no Aeroporto JFK (Nova York)';
        let blockText = '';
        let planText = '';

        if (b3 >= 2) {
          portalNum = 4;
          portalName = 'Portal 4 · A Fronteira Executiva';
          guardian = 'Alexandra';
          boss = 'Pitch executivo para investidores internacionais';
          blockText = 'Você já fala com bastante desenvoltura, mas busca precisão retórica, diplomacia em negociações sob pressão e eliminação de pequenos vícios de linguagem.';
          planText = 'Simulações de alta complexidade com Gabriel para refinamento de autoridade e argumentação direta sem tradução mental.';
        } else if (b2 >= 2) {
          portalNum = 3;
          portalName = 'Portal 3 · A Tração Conversacional';
          guardian = 'Zack';
          boss = 'Bate-papo espontâneo em Pub no Brooklyn';
          blockText = 'Você já se vira bem no básico, mas ainda se perde no ritmo de nativos conversando rápido e sente falta de conectores para sustentar conversas longas.';
          planText = 'Prática diária de small talk com AIDA + sessões com Gabe focadas em desinibição e sustentação de ideias sem gaguejar.';
        } else if (b1 >= 2) {
          portalNum = 2;
          portalName = 'Portal 2 · O Motor do BICS';
          guardian = 'Miles';
          boss = 'Check-in de hotel em NY com reserva errada';
          blockText = 'Você entende bastante coisa quando lê ou ouve com calma, mas sofre com a tradução mental: pensa em português antes de emitir cada frase, gerando pausas desconfortáveis.';
          planText = 'Automatizar chunks cotidianos no celular com a AIDA + 3 sessões semanais com Gabe para falar no reflexo motor oral.';
        } else {
          portalNum = 1;
          portalName = 'Portal 1 · O Descongelamento';
          guardian = 'Jordan';
          boss = 'Imigração no Aeroporto JFK (Nova York)';
          blockText = 'Seu principal obstáculo é o medo inicial de falar e a tentativa frustrante de tentar montar regras gramaticais na cabeça antes de abrir a boca.';
          planText = 'Imersão em blocos sonoros de sobrevivência prática com a AIDA + sessões curtas com Gabriel para construir confiança e fala natural desde o primeiro dia.';
        }

        if (resultPortalName) resultPortalName.textContent = portalName;
        if (resultGuardian) resultGuardian.textContent = guardian;
        if (resultBoss) resultBoss.textContent = boss;
        if (resultBlockText) resultBlockText.textContent = blockText;
        if (resultPlanText) resultPlanText.textContent = planText;

        const waMsg = encodeURIComponent('Olá Gabe! Meu nome é ' + userName + '. Fiz o diagnóstico da LexiQuest e meu ponto de partida indicado foi o ' + portalName + ' (Guardião: ' + guardian + '). Quero conversar sobre a minha vaga na Turma Alpha!');
        if (btnWhatsappResult) btnWhatsappResult.href = 'https://wa.me/5511967239791?text=' + waMsg;

        if (resultArea) resultArea.style.display = 'block';
      }

      // 4. Refazer Quiz
      btnRestart?.addEventListener('click', function() {
        currentStep = 0;
        blockScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
        if (resultArea) resultArea.style.display = 'none';
        if (barrierC1) barrierC1.style.display = 'none';
        if (barrierAge) barrierAge.style.display = 'none';
        if (questionArea) questionArea.style.display = 'block';
        renderQuestion(0);
      });
    })();
  </script>

  <!-- Aether Webflow & GSAP Core Libraries -->
  <script is:inline src="/aether/jquery.min.js"></script>
  <script is:inline src="/aether/webflow-core.js"></script>
  <script is:inline src="/aether/webflow-ix3.js"></script>
  <script is:inline src="/aether/gsap.min.js"></script>
  <script is:inline src="/aether/ScrollTrigger.min.js"></script>

  <!-- GSAP & AETHER ANIMATION ORCHESTRATOR -->
  <script is:inline>
    (function initAetherAnimations() {
      // Respeitar acessibilidade
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      function setupMotion() {
        if (typeof gsap === 'undefined') return;
        if (typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);
        }

        // 1. HERO CASCADE ENTRANCE
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl
          .from('.home-hero .tag-box-wrap', { opacity: 0, y: 20, duration: 0.6 })
          .from('.home-hero .h-01', { opacity: 0, y: 35, duration: 0.8 }, '-=0.4')
          .from('.home-hero .short-text', { opacity: 0, y: 25, duration: 0.8 }, '-=0.5')
          .from('.home-hero .hero-btn', { opacity: 0, y: 25, duration: 0.8 }, '-=0.5')
          .from('.hero-demo-card', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
          .from('.hero-float-01', {
            scale: 0.5,
            opacity: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: 'back.out(1.4)'
          }, '-=0.7');

        // 2. CONTINUOUS AMBIENT FLOATING FOR HERO AVATARS
        const floatParams = [
          { y: -10, x: 4, dur: 3.8 },
          { y: 8, x: -5, dur: 4.2 },
          { y: -12, x: -4, dur: 4.6 },
          { y: 10, x: 6, dur: 3.5 },
          { y: -8, x: 5, dur: 4.0 },
          { y: 12, x: -4, dur: 4.4 },
          { y: -11, x: 6, dur: 3.7 },
          { y: 9, x: -5, dur: 4.1 }
        ];
        document.querySelectorAll('.hero-float-01').forEach((el, i) => {
          const cfg = floatParams[i % floatParams.length];
          gsap.to(el, {
            y: cfg.y,
            x: cfg.x,
            duration: cfg.dur,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2
          });
        });

        // 3. SCROLL-TRIGGERED ENTRANCE REVEALS (AETHER SLIDE-UP SPEC)
        if (typeof ScrollTrigger !== 'undefined') {
          // Reveals for slide-up-01 (Headings, Main titles)
          gsap.utils.toArray('[slide-up-01]').forEach(el => {
            if (el.closest('.home-hero')) return;
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                once: true
              },
              opacity: 0,
              y: 35,
              duration: 0.8,
              ease: 'power2.out'
            });
          });

          // Reveals for slide-up-02 (Secondary content, tabs, descriptions)
          gsap.utils.toArray('[slide-up-02]').forEach(el => {
            if (el.closest('.home-hero')) return;
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                once: true
              },
              opacity: 0,
              y: 40,
              duration: 0.85,
              delay: 0.1,
              ease: 'power2.out'
            });
          });

          // Reveals for slide-up-03 (Third-level cards & wrappers)
          gsap.utils.toArray('[slide-up-03]').forEach(el => {
            if (el.closest('.home-hero')) return;
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: 'top 86%',
                once: true
              },
              opacity: 0,
              y: 45,
              duration: 0.9,
              delay: 0.18,
              ease: 'power2.out'
            });
          });

          // Staggered reveals for cards inside grids
          ['.service-grid', '.state-grid'].forEach(gridSelector => {
            const grid = document.querySelector(gridSelector);
            if (grid) {
              const cards = Array.from(grid.children);
              gsap.from(cards, {
                scrollTrigger: {
                  trigger: grid,
                  start: 'top 85%',
                  once: true
                },
                opacity: 0,
                y: 30,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power2.out'
              });
            }
          });

          // Refresh positions once images and fonts load
          window.addEventListener('load', () => {
            ScrollTrigger.refresh();
          });
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupMotion);
      } else {
        setupMotion();
      }
    })();
  </script>
</body>
</html>
`;

const targetPath = path.join(__dirname, '..', 'src', 'pages', 'index.astro');
fs.writeFileSync(targetPath, pageContent, 'utf8');
console.log('Successfully written index.astro according to Spec v1.0!');
