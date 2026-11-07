// Elenco di tutte le voci (teoremi, proposizioni, definizioni) di tutte le materie attive, con il titolo italiano
// come chiave comune: serve agli indici generali `/teoremi` e `/definizioni` e al riquadro «Lo stesso teorema
// in altre materie» delle pagine singole.
import { MATERIE } from '../data/materie';
import { materiaL, argomentoL, type Lingua } from '../i18n';
import { tutteLeVoci, type VoceTeoria } from './voci-teoria';

export interface VoceGlobale {
  tipo: VoceTeoria['tipo'];
  titolo: string;       // nella lingua richiesta
  chiave: string;       // titolo italiano in minuscolo (per alias e confronti fra materie)
  materia: string;
  materiaTitolo: string;
  argomento: string;
  argomentoTitolo: string;
  ancora: string;
  href: string;         // senza prefisso di lingua
}

const cache = new Map<Lingua, Promise<VoceGlobale[]>>();
export function vociGlobali(lingua: Lingua): Promise<VoceGlobale[]> {
  if (!cache.has(lingua)) cache.set(lingua, (async () => {
    const it = await tutteLeVoci('it');
    const tradotte = lingua === 'en' ? await tutteLeVoci('en') : it;
    const out: VoceGlobale[] = [];
    for (const m of MATERIE) {
      if (!m.attiva) continue;
      for (const a of m.argomenti) {
        const id = `${m.slug}/${a.slug}`;
        const vociIt = it.get(id) ?? [];
        const vociL = tradotte.get(id);
        if (!vociL) continue;   // in inglese: solo gli argomenti tradotti
        for (const v of vociL) {
          const vIt = vociIt.find((x) => x.ancora === v.ancora);
          out.push({
            tipo: v.tipo, titolo: v.titolo, chiave: (vIt?.titolo ?? v.titolo).toLowerCase().trim(),
            materia: m.slug, materiaTitolo: materiaL(lingua, m.slug).breve, argomento: a.slug, argomentoTitolo: argomentoL(lingua, m.slug, a.slug).breve, ancora: v.ancora,
            href: `/${id}/teoria/${v.ancora}`,
          });
        }
      }
    }
    return out;
  })());
  return cache.get(lingua)!;
}

// Etichetta di una voce in un elenco di più materie: la materia, più l'argomento se la stessa materia compare più volte.
export function etichettaVoce(v: VoceGlobale, gruppo: VoceGlobale[]): string {
  return gruppo.filter((x) => x.materia === v.materia).length > 1 ? `${v.materiaTitolo} · ${v.argomentoTitolo}` : v.materiaTitolo;
}

// Lettera iniziale per gli indici alfabetici (accenti tolti).
export function iniziale(s: string): string {
  const c = s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().match(/[A-Z]/);
  return c ? c[0] : '#';
}
