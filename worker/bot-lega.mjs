import { livelloDa, sogliaLivello } from '../src/data/livelli.ts';

const MINIMO_PARTECIPANTI = 10;
const NOMI = [
  'Alessandro', 'Giulia', 'Matteo', 'Aurora', 'Lorenzo', 'Beatrice', 'Francesco', 'Chiara',
  'Davide', 'Camilla', 'Leonardo', 'Alice', 'Gabriele', 'Gaia', 'Federico', 'Elisa',
  'Edoardo', 'Martina', 'Simone', 'Sofia', 'Niccolò', 'Arianna', 'Luca', 'Giorgia',
  'Alberto', 'Irene', 'Giacomo', 'Vittoria', 'Riccardo', 'Miriam', 'Enrico', 'Laura',
  'Samuele', 'Caterina', 'Mattia', 'Emma', 'Filippo', 'Carlotta', 'Giorgio', 'Greta',
  'Pietro', 'Ludovica', 'Antonio', 'Silvia', 'Daniele', 'Valentina', 'Cesare', 'Noemi',
  'Raffaele', 'Anita', 'Manuel', 'Margherita', 'Dario', 'Adele', 'Vincenzo', 'Lucia',
  'Cristiano', 'Bianca', 'Michele', 'Flavia', 'Alessia',
];
const orologio = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
export function minutoLega(ms = Date.now()) {
  const [ora, minuti] = orologio.format(ms).split(':').map(Number);
  return ora * 60 + minuti;
}

function sorteggio(seme) {
  let valore = 2166136261;
  for (const carattere of seme) valore = Math.imul(valore ^ carattere.charCodeAt(0), 16777619);
  valore = Math.imul(valore ^ (valore >>> 16), 0x85ebca6b);
  return (valore ^ (valore >>> 13)) >>> 0;
}

function puntiDellaSettimana(seme, posto, lega, oggi, minuto) {
  let exp = 0;
  const giornoAttivo = sorteggio(`${seme}/attivo`) % 7;
  for (let giorno = 0; giorno <= Math.min(6, oggi); giorno++) {
    const data = `${seme}/${giorno}`;
    const ritmo = sorteggio(`${data}/ritmo`) % 10;
    if (ritmo < 2 && giorno !== giornoAttivo) continue;
    const sessioni = ritmo < 7 ? 1 : ritmo < 9 ? 2 : 3;
    // Distribuisce le sessioni in fasce distinte tra le 7 e le 23, con orari estratti per quel giorno.
    const fascia = Math.floor(960 / sessioni);
    for (let s = 0; s < sessioni; s++) {
      const attivita = `${data}/${s}`;
      const orario = 420 + s * fascia + sorteggio(`${attivita}/ora`) % fascia;
      if (giorno === oggi && minuto < orario) continue;
      const base = 4 + posto + sorteggio(`${attivita}/punti`) % (8 + 2 * posto);
      exp += base + lega * (2 + Math.ceil(base / 5));
    }
  }
  return exp;
}

export function classificaConBot(studenti, { settimana, lega, gruppo, oggi, minuto = 1439 }) {
  if (!studenti.length) return [];
  const righe = [...studenti];
  // Le date sono giorni civili a Roma. La differenza fra le stringhe ISO non risente dell'ora legale.
  const giorno = (Date.parse(oggi) - Date.parse(settimana)) / 86400000;
  const semeGruppo = `${settimana}/${gruppo}`;
  const primoNome = (sorteggio(`${semeGruppo}/nomi`) % NOMI.length + 11 * lega) % NOMI.length;
  for (let posto = 0; posto < MINIMO_PARTECIPANTI - studenti.length; posto++) {
    const seme = `${semeGruppo}/${posto}`;
    const nome = NOMI[(primoNome + 7 * posto) % NOMI.length];
    const exp = puntiDellaSettimana(seme, posto, lega, giorno, minuto);
    const livelloIniziale = 1 + 2 * lega + sorteggio(`${seme}/livello`) % 5;
    const livello = livelloDa(sogliaLivello(livelloIniziale) + exp).livello;
    righe.push({ bot: true, nome, exp, livello });
  }
  // L'ordinamento stabile conserva gli spareggi tra studenti e dà loro precedenza a pari EXP.
  return righe.sort((a, b) => b.exp - a.exp).map((riga, i) => ({ ...riga, pos: i + 1 }));
}
