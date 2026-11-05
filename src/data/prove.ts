// Prove ufficiali simulate con i quesiti di src/content/quesiti (Worker: worker/prova.mjs, pagina: src/viste/SimulazioneProva.astro).
// Per ora solo la prova di Fisica del semestre filtro di Medicina (bando 2026/27): 31 quesiti in 50 minuti,
// 21 a risposta multipla con cinque opzioni e 10 a completamento; +1 corretta, −0,1 errata, 0 non data;
// voto in trentesimi (31 = 30 e lode), sufficiente da 18.
// I quesiti di ogni unità del programma sono proporzionali ai crediti (CFU) dell'unità nel syllabus ministeriale.

export interface UnitaProva { nome: string; cfu: number; argomenti: string[] }
export interface Prova {
  titolo: string;
  nomeProva: string;
  multipla: number;
  completamento: number;
  minuti: number;
  punti: { corretta: number; errata: number; nondata: number };
  soglia: number;
  unita: UnitaProva[];
}

export const PROVE: Record<string, Prova> = {
  'fisica-semestre-filtro': {
    titolo: 'Simulazione della prova di Fisica del semestre filtro',
    nomeProva: 'prova di Fisica',
    multipla: 21,
    completamento: 10,
    minuti: 50,
    punti: { corretta: 1, errata: -0.1, nondata: 0 },
    soglia: 18,
    unita: [
      { nome: 'Metodi della fisica', cfu: 0.2, argomenti: ['grandezze-e-vettori'] },
      { nome: 'Meccanica', cfu: 1.4, argomenti: ['cinematica', 'dinamica', 'lavoro-energia-quantita-di-moto', 'corpo-rigido-e-leve'] },
      { nome: 'Meccanica dei fluidi', cfu: 1.2, argomenti: ['fluidi-in-quiete', 'fluidi-in-movimento'] },
      { nome: 'Onde meccaniche', cfu: 0.4, argomenti: ['onde-e-suono'] },
      { nome: 'Termodinamica', cfu: 1.0, argomenti: ['termodinamica'] },
      { nome: 'Elettricità e magnetismo', cfu: 1.2, argomenti: ['elettrostatica-e-condensatori', 'corrente-magnetismo-induzione'] },
      { nome: 'Fisica delle radiazioni e ottica', cfu: 0.6, argomenti: ['radiazioni-e-ottica'] },
    ],
  },
};

// Ripartizione di n oggetti in parti proporzionali ai pesi (metodo dei resti più grandi).
export function ripartisci(n: number, pesi: number[]): number[] {
  const tot = pesi.reduce((a, b) => a + b, 0) || 1;
  const esatti = pesi.map((p) => (n * p) / tot);
  const parti = esatti.map(Math.floor);
  let resto = n - parti.reduce((a, b) => a + b, 0);
  const ordine = esatti.map((x, i) => [x - Math.floor(x), i] as const).sort((a, b) => b[0] - a[0]);
  for (const [, i] of ordine) { if (resto <= 0) break; parti[i]++; resto--; }
  return parti;
}
