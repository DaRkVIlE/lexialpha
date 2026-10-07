/**
 * LexiQuest Platform — Layer 4: KAIROS AI Router
 * Roteia erros pedagógicos e tópicos de prática para as 7 Personas Canônicas
 * Blindado com a Regra Suprema do Recasting Natural (Zero Correção Explícita)
 */

export interface CanonicalPersona {
  id: string;
  name: string;
  portalId: number;
  cefrLevel: string;
  role: string;
  recastingStyle: string;
  chatEndpoint: string;
}

export const CANONICAL_PERSONAS: Record<string, CanonicalPersona> = {
  jordan: {
    id: 'jordan',
    name: 'Jordan',
    portalId: 1,
    cefrLevel: 'A1 → A2',
    role: 'Amigo descontraído de New York',
    recastingStyle: 'Responde informalmente modelando o chunk certo em uma pergunta de follow-up.',
    chatEndpoint: '/api/agents/v1/chat/completions?agent=jordan'
  },
  miles: {
    id: 'miles',
    name: 'Miles',
    portalId: 2,
    cefrLevel: 'A2 → B1',
    role: 'Mochileiro e Explorador Global',
    recastingStyle: 'Conversa sobre viagens e situações cotidianas no exterior modelando o pretérito.',
    chatEndpoint: '/api/agents/v1/chat/completions?agent=miles'
  },
  zack: {
    id: 'zack',
    name: 'Zack',
    portalId: 3,
    cefrLevel: 'B1 → B2',
    role: 'Cyber Technomancer e Tech Enthusiast',
    recastingStyle: 'Usa gírias rápidas de internet, debilita termos lentos e instiga reflexo ágil.',
    chatEndpoint: '/api/agents/v1/chat/completions?agent=zack'
  },
  alexandra: {
    id: 'alexandra',
    name: 'Alexandra',
    portalId: 4,
    cefrLevel: 'B2 Pleno',
    role: 'Executive Business Coach',
    recastingStyle: 'Eleva o tom para reuniões corporativas e liderança internacional.',
    chatEndpoint: '/api/agents/v1/chat/completions?agent=alexandra'
  },
  hayes: {
    id: 'hayes',
    name: 'Prof. Hayes',
    portalId: 5,
    cefrLevel: 'C1 → C2',
    role: 'Sage Archivist e Diplomata',
    recastingStyle: 'Retórica sofisticada, figuras de linguagem e precisão lexical máxima.',
    chatEndpoint: '/api/agents/v1/chat/completions?agent=hayes'
  },
  aida_tutor: {
    id: 'aida_tutor',
    name: 'AIDA Tutora',
    portalId: 0, // Transversal
    cefrLevel: 'Todos',
    role: 'Mentora Pedagógica e Guardiã do Método MANA',
    recastingStyle: 'Explicações em 2 a 4 frases estilo WhatsApp e incentivo de streak.',
    chatEndpoint: '/api/mana/tutor/chat'
  },
  aida_admin: {
    id: 'aida_admin',
    name: 'AIDA Admin',
    portalId: 0,
    cefrLevel: 'Instrutor',
    role: 'Painel do Gabe e Gestão de Handoffs',
    recastingStyle: 'Gera relatórios de gaps orais e telemetria para as aulas individuais.',
    chatEndpoint: '/api/mana/admin/dossier'
  }
};

export class KairosAIRouter {
  /**
   * Roteia o aluno para a persona ideal com base no Portal ativo
   */
  public static getGuardianForPortal(portalId: number): CanonicalPersona {
    switch (portalId) {
      case 1: return CANONICAL_PERSONAS.jordan;
      case 2: return CANONICAL_PERSONAS.miles;
      case 3: return CANONICAL_PERSONAS.zack;
      case 4: return CANONICAL_PERSONAS.alexandra;
      case 5: return CANONICAL_PERSONAS.hayes;
      default: return CANONICAL_PERSONAS.jordan;
    }
  }

  /**
   * Constrói o contexto invisível de Recasting Natural quando o aluno erra um exercício determinístico:
   * A persona NÃO diz "você errou a preposição".
   * A persona simplesmente introduz o chunk correto de forma vívida no diálogo.
   */
  public static generateRecastingContext(
    portalId: number,
    failedChunk: string,
    studentInput: string,
    correctChunk: string
  ): { targetPersona: CanonicalPersona; systemInjection: string; starterPrompt: string } {
    const persona = this.getGuardianForPortal(portalId);

    const systemInjection = `[INVISÍVEL AO ALUNO - RECASTING NATURAL ATIVO]
O aluno acabou de ter atrito com o chunk: "${failedChunk}".
Tentativa do aluno: "${studentInput}".
Forma natural esperada: "${correctChunk}".
REGRA SUPREMA: NUNCA diga que o aluno errou. NUNCA cite regras gramaticais.
Apenas use a forma correta "${correctChunk}" organicamente na sua primeira frase e faça uma pergunta empolgante.`;

    const starterPrompt = `Hey! I was just thinking about that... how would you use "${correctChunk}" in your daily routine?`;

    return {
      targetPersona: persona,
      systemInjection,
      starterPrompt
    };
  }
}
