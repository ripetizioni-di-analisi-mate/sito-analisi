// Videocorsi preregistrati di Carmine (video e PDF su Google Drive), venduti con Paddle.
// L'acquisto registra l'abilitazione `video-<slug>` e sblocca in automatico le materie del sito in `sblocca`.
// Il codice del prezzo Paddle è nella variabile PADDLE_PREZZO_VIDEO_<SLUG> (wrangler.jsonc); il link della
// cartella Drive in VIDEOCORSI_DRIVE (oggetto JSON slug → link), mostrato solo nell'account di chi ha comprato.

import PREZZI from './prezzi.json';

export interface Videocorso {
  slug: string;
  titolo: string;
  breve: string;
  lezioni: number;
  prezzo: number;
  colore: string;
  sblocca: string[];
  sommario: string;
  /** Risparmio reale rispetto all'acquisto separato dei corsi indicati. */
  pacchettoDi?: string[];
}

export const MINUTI_LEZIONE = 50;

export const VIDEOCORSI: Videocorso[] = [
  {
    slug: 'analisi-1-e-2',
    titolo: 'Videocorso di Analisi 1 e Analisi 2',
    breve: 'Analisi 1 e 2',
    lezioni: 51,
    prezzo: 499,
    colore: '#3f6f8a',
    sblocca: ['analisi-1', 'analisi-2', 'precorso'],
    sommario: "Il percorso completo di Analisi 1 e Analisi 2, dalle basi fino agli argomenti più avanzati richiesti all'università.",
    pacchettoDi: ['analisi-1', 'analisi-2'],
  },
  {
    slug: 'analisi-1',
    titolo: 'Videocorso di Analisi 1',
    breve: 'Analisi 1',
    lezioni: 35,
    prezzo: 360,
    colore: '#2f6f68',
    sblocca: ['analisi-1', 'precorso'],
    sommario: "Le lezioni complete di Analisi 1, con la teoria e gli esercizi svolti e spiegati per preparare lo scritto e l'orale.",
  },
  {
    slug: 'analisi-2',
    titolo: 'Videocorso di Analisi 2',
    breve: 'Analisi 2',
    lezioni: 16,
    prezzo: 192,
    colore: '#3b5f8f',
    sblocca: ['analisi-2'],
    sommario: "Le lezioni complete di Analisi 2, con la teoria e gli esercizi svolti e spiegati per preparare lo scritto e l'orale.",
  },
  {
    slug: 'matematica-generale',
    titolo: 'Videocorso di Matematica generale',
    breve: 'Matematica generale',
    lezioni: 38,
    prezzo: 456,
    colore: '#5b7a3a',
    sblocca: ['matematica-generale'],
    sommario: "Le lezioni complete di Matematica generale, con la teoria e gli esercizi svolti e spiegati per preparare lo scritto e l'orale.",
  },
  {
    slug: 'algebra',
    titolo: 'Videocorso di Algebra',
    breve: 'Algebra',
    lezioni: 8,
    prezzo: 96,
    colore: '#6b5ca5',
    sblocca: ['algebra-lineare'],
    sommario: "Le lezioni di Algebra, con la teoria e gli esercizi svolti e spiegati per preparare lo scritto e l'orale.",
  },
];

export const chiaveVideo = (slug: string) => `video-${slug}`;
export const variabilePrezzoVideo = (slug: string) => `PADDLE_PREZZO_VIDEO_${slug.toUpperCase().replace(/-/g, '_')}`;
export const oreTotali = (v: Videocorso) => Math.round((v.lezioni * MINUTI_LEZIONE) / 60);
export const prezzoSeparato = (v: Videocorso) =>
  (v.pacchettoDi || []).reduce((s, x) => s + (VIDEOCORSI.find((c) => c.slug === x)?.prezzo || 0), 0);
/** Valore delle materie del sito sbloccate dal videocorso (prezzi attuali delle materie): è il risparmio sul materiale didattico. */
export const valoreMateriale = (v: Videocorso) =>
  v.sblocca.reduce((s, x) => s + ((PREZZI as Record<string, number>)[x] || 0), 0);
