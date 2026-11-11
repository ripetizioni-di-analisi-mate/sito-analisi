import { link, materieL } from '../i18n';
import { paginaLocalizzata, type LinguaCatalogo } from './lingue-sito';

export function indiceRicercaCatalogo(lingua: LinguaCatalogo) {
  const voci = materieL(lingua).filter((m) => paginaLocalizzata(lingua, `/${m.slug}`)).flatMap((m) => [
    { t: m.titolo, s: m.descrizione, h: link(lingua, `/${m.slug}`), c: 'corsi', m: m.gruppo, p: '' },
    ...m.argomenti.map((a) => ({ t: a.titolo, s: '', h: link(lingua, `/${m.slug}#${a.slug}`), c: 'argomenti', m: m.titolo, p: '' })),
  ]);
  return Response.json(voci);
}
