// Immagini di anteprima dei link (og:image): una per materia e una per argomento e sezione, in italiano e in inglese.
// Questo modulo decide indirizzo e testi dell'immagine di una pagina. Lo usano src/layouts/Base.astro (meta og:image)
// e scripts/immagini-og.mjs (che disegna i PNG in dist/og dopo la build): così indirizzo e contenuto coincidono sempre.
// Le pagine senza materia (home, prezzi, chi sono…) restano sull'immagine generale /og.png.
import { nomiAllenamento } from './allenamento.mjs';

export const RIPASSO_OG = 'prove-d-esame'; // come RIPASSO in src/data/livelli.ts
export const DOMINIO = 'ripetizionidianalisi.com';
export const NOME_SITO_OG = 'Ripetizioni di Analisi';

const SEZIONI = {
  it: { teoria: 'Teoria', 'esercizi-svolti': 'Esercizi svolti', esercizi: 'Esercizi da fare', domande: 'Domande a tempo' },
  en: { teoria: 'Theory', 'esercizi-svolti': 'Worked examples', esercizi: 'Exercises', domande: 'Timed questions' },
};
const TESTI = {
  it: { domandeRipasso: 'Domande di ripasso', materia: 'Teoria ed esercizi svolti', generale: 'Ripetizioni di Analisi: teoria ed esercizi svolti per le materie scientifiche (università, superiori, concorsi)' },
  en: { domandeRipasso: 'Review questions', materia: 'Theory and worked examples', generale: 'Ripetizioni di Analisi: theory and worked examples for Calculus, Linear Algebra and Physics' },
};

// Testi dell'immagine generale (public/og.png e public/og-en.png, disegnate da scripts/og-generale.mjs).
export const OG_GENERALE = {
  it: { titolo: 'Teoria ed esercizi svolti per le materie scientifiche', sotto: 'Università · Superiori · Concorsi' },
  en: { titolo: 'Theory and worked examples for science subjects', sotto: 'Calculus · Linear Algebra · Physics' },
};
export const ogGenerale = (lingua) => (lingua === 'en' ? '/og-en.png' : '/og.png');

// Testo alternativo dell'immagine generale (/og.png).
export const altGenerale = (lingua) => TESTI[lingua === 'en' ? 'en' : 'it'].generale;

/**
 * Immagine di anteprima di una pagina.
 * @param {{ lingua?: 'it'|'en', materia?: { slug: string, titolo: string, breve: string, colore: string, gruppo?: string }, argomento?: string, titoloArgomento?: string, sezione?: string }} p
 * @returns {null | { percorso: string, sopra: string, titolo: string, sotto: string, alt: string, colore: string, lingua: 'it'|'en' }}
 *   percorso è l'indirizzo dentro il sito (/og/…png); null = si usa /og.png.
 */
export function anteprima({ lingua = 'it', materia, argomento, titoloArgomento, sezione }) {
  if (!materia) return null;
  const l = lingua === 'en' ? 'en' : 'it';
  const pref = l === 'en' ? '/og/en' : '/og';
  const T = TESTI[l];
  // Pagina della materia e pagina Sblocca: nome della materia. La stessa immagine vale per le altre pagine
  // della materia senza un'immagine propria (simulazione d'esame, ripasso di oggi, stampa).
  const diMateria = {
    percorso: `${pref}/${materia.slug}.png`, lingua: l, colore: materia.colore,
    sopra: '', titolo: materia.titolo, sotto: T.materia,
    alt: `${materia.titolo}: ${T.materia.toLowerCase()} · ${NOME_SITO_OG}`,
  };
  if (!argomento || !SEZIONI[l][sezione]) return diMateria;
  const ripasso = argomento === RIPASSO_OG;
  if (ripasso && sezione !== 'domande') return diMateria;
  const titolo = ripasso ? nomiAllenamento(materia, l).ripasso : titoloArgomento;
  if (!titolo) return diMateria;
  const nomeSezione = ripasso ? T.domandeRipasso : SEZIONI[l][sezione];
  return {
    percorso: `${pref}/${materia.slug}/${argomento}/${sezione}.png`, lingua: l, colore: materia.colore,
    sopra: `${materia.breve} · ${nomeSezione}`, titolo, sotto: '',
    alt: `${titolo} (${materia.breve}, ${nomeSezione.toLowerCase()}) · ${NOME_SITO_OG}`,
  };
}
