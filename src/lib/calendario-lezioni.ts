// Calendario degli orari liberi per le lezioni individuali (pagine /prenota e /prenota/gestisci).
// Una settimana alla volta, dal lunedì al sabato; ogni giorno ha i suoi orari liberi come tasti.
export type Orario = { inizio: number; giorno: string; ora: string };

const GIORNI = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
const GIORNI_LUNGHI = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
const MESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
const MESI_BREVI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

const data = (g: string) => new Date(g + 'T12:00:00Z');
const chiave = (d: Date) => d.toISOString().slice(0, 10);
const lunedi = (g: string) => { const d = data(g); d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7)); return chiave(d); };
const piu = (g: string, n: number) => { const d = data(g); d.setUTCDate(d.getUTCDate() + n); return chiave(d); };

export function descriviOrario(o: Orario) {
  const d = data(o.giorno);
  const [h] = o.ora.split(':').map(Number);
  return `${GIORNI_LUNGHI[d.getUTCDay()]} ${d.getUTCDate()} ${MESI[d.getUTCMonth()]}, ore ${o.ora}-${String(h + 1).padStart(2, '0')}:00`;
}
function etichettaSettimana(lun: string) {
  const a = data(lun), b = data(piu(lun, 5));
  return a.getUTCMonth() === b.getUTCMonth()
    ? `${a.getUTCDate()}-${b.getUTCDate()} ${MESI[b.getUTCMonth()]}`
    : `${a.getUTCDate()} ${MESI[a.getUTCMonth()]} - ${b.getUTCDate()} ${MESI[b.getUTCMonth()]}`;
}

export function calendario(radice: HTMLElement, orari: Orario[], quandoScelto: (o: Orario) => void) {
  const perGiorno = new Map<string, Orario[]>();
  for (const o of orari) perGiorno.set(o.giorno, [...(perGiorno.get(o.giorno) ?? []), o]);
  const settimane = [...new Set(orari.map((o) => lunedi(o.giorno)))].sort();
  let indice = 0;
  let scelto: number | null = null;

  const disegna = () => {
    radice.innerHTML = '';
    if (!settimane.length) {
      radice.innerHTML = '<p class="cal-vuoto">In questo momento non ci sono orari liberi nelle prossime settimane.</p>';
      return;
    }
    const lun = settimane[indice];
    const testa = document.createElement('div');
    testa.className = 'cal-testa';
    testa.innerHTML = `<button type="button" class="cal-freccia" data-dir="-1" aria-label="Settimana precedente" ${indice === 0 ? 'disabled' : ''}>‹</button>
      <span class="cal-settimana">${etichettaSettimana(lun)}</span>
      <button type="button" class="cal-freccia" data-dir="1" aria-label="Settimana successiva" ${indice === settimane.length - 1 ? 'disabled' : ''}>›</button>`;
    radice.append(testa);
    const elenco = document.createElement('div');
    elenco.className = 'cal-giorni';
    for (let i = 0; i < 6; i++) {
      const g = piu(lun, i);
      const d = data(g);
      const riga = document.createElement('div');
      riga.className = 'cal-giorno';
      const liberi = perGiorno.get(g) ?? [];
      riga.innerHTML = `<span class="cal-data"><b>${GIORNI[d.getUTCDay()]}</b> ${d.getUTCDate()} ${MESI_BREVI[d.getUTCMonth()]}</span>`;
      const ore = document.createElement('span');
      ore.className = 'cal-ore';
      if (!liberi.length) ore.innerHTML = '<span class="cal-nessuno">nessun orario libero</span>';
      for (const o of liberi) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'cal-ora';
        b.textContent = o.ora;
        b.setAttribute('aria-pressed', String(o.inizio === scelto));
        b.setAttribute('aria-label', descriviOrario(o));
        b.addEventListener('click', () => { scelto = o.inizio; disegna(); quandoScelto(o); });
        ore.append(b);
      }
      riga.append(ore);
      elenco.append(riga);
    }
    radice.append(elenco);
    testa.querySelectorAll<HTMLButtonElement>('.cal-freccia').forEach((b) => b.addEventListener('click', () => {
      indice = Math.min(settimane.length - 1, Math.max(0, indice + Number(b.dataset.dir)));
      disegna();
    }));
  };
  disegna();
  return { azzera() { scelto = null; disegna(); } };
}
