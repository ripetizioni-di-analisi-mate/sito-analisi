export const BOCCONI = {
  slug: 'test-bocconi',
  quesiti: 50,
  minuti: 75,
  perPagina: 3,
  diagnostico: 18,
  simulazioni: 4,
  fonti: {
    it: 'https://www.unibocconi.it/it/entrare-bocconi/corsi-di-laurea-triennale-e-giurisprudenza/ammissione/test-online-bocconi',
    en: 'https://www.unibocconi.it/en/applying-bocconi/bachelor-and-law-programs/application-and-admissions/online-bocconi-test',
  },
};

export const AREE_BOCCONI = {
  matematica: { it: 'Matematica', en: 'Mathematics', quesiti: 24 },
  comprensione: { it: 'Comprensione del testo', en: 'Reading comprehension', quesiti: 11 },
  numerico: { it: 'Ragionamento numerico', en: 'Numerical reasoning', quesiti: 6 },
  critico: { it: 'Pensiero critico', en: 'Critical thinking', quesiti: 9 },
};

export const PROVE_BOCCONI = ['diagnostico', ...Array.from({ length: BOCCONI.simulazioni }, (_, i) => String(i + 1))];
