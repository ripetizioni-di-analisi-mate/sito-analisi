import { nomiAllenamento } from './allenamento.mjs';

// Indirizzi ricavati dal catalogo pubblicato: una sessione di ripasso non ha
// una pagina di teoria e un argomento senza quiz non ha una pagina di domande.
export function creaCatalogoStudio(materie, domande, lingua = 'it') {
  return Object.fromEntries(materie.filter((m) => m.attiva).map((m) => [m.slug, {
    titolo: m.titolo,
    argomenti: m.argomenti.map((a) => a.slug),
    domande: domande[m.slug] || [],
    ripasso: nomiAllenamento(m, lingua).ripasso,
  }]));
}

export function leggiCatalogoStudio() {
  try { return JSON.parse(document.getElementById('catalogo-percorso')?.textContent || '{}'); }
  catch { return {}; }
}

export function destinazioneSessione(sessione, catalogo, lingua = 'it') {
  if (!sessione || !Object.hasOwn(catalogo, sessione.materia)) return null;
  const m = catalogo[sessione.materia];
  const base = `${lingua === 'en' ? '/en' : ''}/${sessione.materia}`;
  const a = sessione.argomento;
  if (!a) return { href: base, domande: null, titolo: m.titolo };
  const ripasso = a === 'prove-d-esame' || a === 'ripasso-di-oggi';
  if (ripasso) {
    if (!m.domande.length) return null;
    const href = `${base}/${a}/domande`;
    const titolo = a === 'ripasso-di-oggi'
      ? (lingua === 'en' ? 'Today’s review' : 'Ripasso di oggi') : m.ripasso;
    return { href, domande: href, titolo };
  }
  if (!m.argomenti.includes(a)) return null;
  return {
    href: `${base}/${a}/teoria`,
    domande: m.domande.includes(a) ? `${base}/${a}/domande` : null,
    titolo: sessione.titolo || m.titolo,
  };
}

export function destinazioneObiettivo(obiettivo, catalogo, lingua = 'it') {
  if (!obiettivo || obiettivo.completato || typeof obiettivo.link !== 'string') return null;
  const parti = obiettivo.link.match(/^\/(?:en\/)?([a-z0-9-]+)\/([a-z0-9-]+)\/domande$/);
  if (!parti) return null;
  return destinazioneSessione({ materia: parti[1], argomento: parti[2] }, catalogo, lingua)?.domande || null;
}

export function ultimaSessioneStudio(sessioni, catalogo, lingua = 'it') {
  for (const s of sessioni || []) {
    const destinazione = destinazioneSessione(s, catalogo, lingua);
    if (destinazione) return destinazione;
  }
  return null;
}

export function prossimaAttivita(dati, catalogo, lingua = 'it') {
  const en = lingua === 'en';
  const domande = en ? 'Continue with the timed questions' : 'Continua con le domande a tempo';
  for (const o of dati?.obiettivi || []) {
    const href = destinazioneObiettivo(o, catalogo, lingua);
    if (href) return { href, testo: domande };
  }
  const ultima = ultimaSessioneStudio(dati?.sessioni, catalogo, lingua);
  if (ultima) return {
    href: ultima.domande || ultima.href,
    testo: ultima.domande ? domande : (en ? 'Continue studying' : 'Riprendi lo studio'),
  };
  return {
    href: `${en ? '/en' : ''}/domande-a-tempo`,
    testo: en ? 'Choose a topic and start' : 'Scegli un argomento e inizia',
  };
}

// Home, account e pannello del livello riusano la stessa risposta per 30 secondi.
// Un errore temporaneo lascia attivi i collegamenti iniziali e consente un nuovo tentativo.
const richieste = new Map();
export async function caricaPercorsoStudio(lingua = 'it') {
  const precedente = richieste.get(lingua);
  if (precedente && Date.now() - precedente.quando < 30000) return precedente.risposta;
  const voce = { quando: Date.now(), risposta: null };
  voce.risposta = (async () => {
    try {
      const r = await fetch(`/api/percorso?l=${lingua}`);
      if (r.ok) {
        const d = await r.json();
        if (d && typeof d === 'object' && !Array.isArray(d)) return d;
      }
    } catch { /* I collegamenti restano utilizzabili anche senza la risposta. */ }
    if (richieste.get(lingua) === voce) richieste.delete(lingua);
    return null;
  })();
  richieste.set(lingua, voce);
  return voce.risposta;
}
