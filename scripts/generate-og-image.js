import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGlow" cx="20%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#3b2c60" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#1f1633" stop-opacity="1"/>
      <stop offset="100%" stop-color="#150e24" stop-opacity="1"/>
    </radialGradient>

    <!-- Accent Lime Glow -->
    <radialGradient id="limeGlow" cx="85%" cy="85%" r="50%">
      <stop offset="0%" stop-color="#c2ef4e" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#1f1633" stop-opacity="0"/>
    </radialGradient>

    <!-- Purple Core Glow -->
    <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6a5fc1" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1f1633" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="630" fill="url(#bgGlow)"/>
  <rect width="1200" height="630" fill="url(#purpleGlow)"/>
  <rect width="1200" height="630" fill="url(#limeGlow)"/>

  <!-- Border Card Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="28" stroke="#3b2c60" stroke-width="2" fill="none"/>

  <!-- Subtle Grid Pattern Dots -->
  <g opacity="0.15" fill="#ffffff">
    <circle cx="100" cy="100" r="1.5"/><circle cx="200" cy="100" r="1.5"/><circle cx="300" cy="100" r="1.5"/><circle cx="400" cy="100" r="1.5"/><circle cx="500" cy="100" r="1.5"/><circle cx="600" cy="100" r="1.5"/><circle cx="700" cy="100" r="1.5"/><circle cx="800" cy="100" r="1.5"/><circle cx="900" cy="100" r="1.5"/><circle cx="1000" cy="100" r="1.5"/><circle cx="1100" cy="100" r="1.5"/>
    <circle cx="100" cy="200" r="1.5"/><circle cx="200" cy="200" r="1.5"/><circle cx="300" cy="200" r="1.5"/><circle cx="400" cy="200" r="1.5"/><circle cx="500" cy="200" r="1.5"/><circle cx="600" cy="200" r="1.5"/><circle cx="700" cy="200" r="1.5"/><circle cx="800" cy="200" r="1.5"/><circle cx="900" cy="200" r="1.5"/><circle cx="1000" cy="200" r="1.5"/><circle cx="1100" cy="200" r="1.5"/>
    <circle cx="100" cy="300" r="1.5"/><circle cx="200" cy="300" r="1.5"/><circle cx="300" cy="300" r="1.5"/><circle cx="400" cy="300" r="1.5"/><circle cx="500" cy="300" r="1.5"/><circle cx="600" cy="300" r="1.5"/><circle cx="700" cy="300" r="1.5"/><circle cx="800" cy="300" r="1.5"/><circle cx="900" cy="300" r="1.5"/><circle cx="1000" cy="300" r="1.5"/><circle cx="1100" cy="300" r="1.5"/>
    <circle cx="100" cy="400" r="1.5"/><circle cx="200" cy="400" r="1.5"/><circle cx="300" cy="400" r="1.5"/><circle cx="400" cy="400" r="1.5"/><circle cx="500" cy="400" r="1.5"/><circle cx="600" cy="400" r="1.5"/><circle cx="700" cy="400" r="1.5"/><circle cx="800" cy="400" r="1.5"/><circle cx="900" cy="400" r="1.5"/><circle cx="1000" cy="400" r="1.5"/><circle cx="1100" cy="400" r="1.5"/>
    <circle cx="100" cy="500" r="1.5"/><circle cx="200" cy="500" r="1.5"/><circle cx="300" cy="500" r="1.5"/><circle cx="400" cy="500" r="1.5"/><circle cx="500" cy="500" r="1.5"/><circle cx="600" cy="500" r="1.5"/><circle cx="700" cy="500" r="1.5"/><circle cx="800" cy="500" r="1.5"/><circle cx="900" cy="500" r="1.5"/><circle cx="1000" cy="500" r="1.5"/><circle cx="1100" cy="500" r="1.5"/>
  </g>

  <!-- TOP BAR: Logo & Scarcity Tag -->
  <g transform="translate(80, 72)">
    <!-- Logo Icon Box -->
    <rect width="48" height="48" rx="14" fill="#271d40" stroke="#3b2c60" stroke-width="1.5"/>
    <!-- Logo SVG Path -->
    <path d="M16 16V32H32" stroke="#c2ef4e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 22V28" stroke="#c2ef4e" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M26 18V30" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 21V26" stroke="#c2ef4e" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Brand Name -->
    <text x="64" y="32" font-family="'Inter', sans-serif" font-size="28" font-weight="800" fill="#ffffff" letter-spacing="-0.5">LexiQuest</text>

    <!-- Alpha Pill -->
    <rect x="208" y="10" width="76" height="26" rx="13" fill="#c2ef4e" fill-opacity="0.12" stroke="#c2ef4e" stroke-opacity="0.35" stroke-width="1"/>
    <text x="246" y="27" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#c2ef4e" text-anchor="middle" letter-spacing="1">ALPHA</text>

    <!-- Urgency Right Pill -->
    <g transform="translate(720, 4)">
      <rect width="320" height="40" rx="20" fill="#271d40" stroke="#c2ef4e" stroke-opacity="0.4" stroke-width="1.5"/>
      <circle cx="24" cy="20" r="5" fill="#c2ef4e"/>
      <text x="40" y="25" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="1">TURMA ALPHA · APENAS 15 VAGAS</text>
    </g>
  </g>

  <!-- MAIN HEADLINE -->
  <g transform="translate(80, 230)">
    <text x="0" y="0" font-family="'Rubik', 'Inter', sans-serif" font-size="62" font-weight="900" fill="#ffffff" letter-spacing="-1.5">
      Pare de traduzir na sua cabeça.
    </text>
    <text x="0" y="76" font-family="'Rubik', 'Inter', sans-serif" font-size="62" font-weight="900" fill="#c2ef4e" letter-spacing="-1.5">
      Destrave sua fala em 30 dias.
    </text>
  </g>

  <!-- SUBHEADLINE / DESCRIPTION -->
  <g transform="translate(80, 370)">
    <text x="0" y="0" font-family="'Inter', sans-serif" font-size="22" font-weight="400" fill="#cfcfdb">
      15 minutos diários de prática com IA sem julgamento + 3 sessões individuais por semana
    </text>
    <text x="0" y="32" font-family="'Inter', sans-serif" font-size="22" font-weight="400" fill="#cfcfdb">
      com o professor Gabriel Ferreira Lima. 0% gramática desconectada.
    </text>
  </g>

  <!-- BOTTOM VALUE PILLS -->
  <g transform="translate(80, 475)">
    <!-- Pill 1: Price -->
    <g>
      <rect width="180" height="54" rx="16" fill="#271d40" stroke="#c2ef4e" stroke-opacity="0.5" stroke-width="1.5"/>
      <text x="24" y="34" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#c2ef4e">R$ 197<tspan font-size="14" font-weight="500" fill="#cfcfdb">/mês</tspan></text>
    </g>

    <!-- Pill 2: 3x Sessions -->
    <g transform="translate(200, 0)">
      <rect width="250" height="54" rx="16" fill="#271d40" stroke="#3b2c60" stroke-width="1.5"/>
      <text x="24" y="34" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#ffffff">3 Sessões Semanais Gabe</text>
    </g>

    <!-- Pill 3: IA 24/7 -->
    <g transform="translate(470, 0)">
      <rect width="240" height="54" rx="16" fill="#271d40" stroke="#3b2c60" stroke-width="1.5"/>
      <text x="24" y="34" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#ffffff">Sparring IA no LibreChat</text>
    </g>

    <!-- Pill 4: Guarantee -->
    <g transform="translate(730, 0)">
      <rect width="270" height="54" rx="16" fill="#271d40" stroke="#fa7faa" stroke-opacity="0.4" stroke-width="1.5"/>
      <text x="24" y="34" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#fa7faa">Garantia Pix de 30 Dias</text>
    </g>
  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public/assets/og-card.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);
  console.log(`Generated og-card.png successfully: ${outputPath}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
