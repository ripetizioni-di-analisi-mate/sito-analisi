import { materieL } from '../../i18n';
import { inTedesco } from '../../lib/lingue-sito';

export function GET() {
  const voci = materieL('de').filter((m) => m.attiva && inTedesco(`/${m.slug}`)).flatMap((m) => [
    { t: m.titolo, s: m.descrizione, h: `/de/${m.slug}`, c: 'corsi', m: m.gruppo, p: '' },
    ...m.argomenti.map((a) => ({ t: a.titolo, s: '', h: `/de/${m.slug}#${a.slug}`, c: 'argomenti', m: m.titolo, p: '' })),
  ]);
  return Response.json(voci);
}
