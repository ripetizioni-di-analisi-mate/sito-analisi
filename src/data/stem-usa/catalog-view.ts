import type { Materia } from '../materie';
import { courseUrl, groups, hasUsStudyPages } from './catalog.mjs';
import { haProgramma, programmaDi, SEZIONI_USA } from './programmi.mjs';
import { highSchoolGroups, highSchoolName } from './high-school/index.mjs';
import { url } from '../../lib/url';
import { usaProduct } from './pricing';

export const gruppoUsa = 'University';
export const gruppiUsa = [gruppoUsa, highSchoolName];

const colori = ['#2e6b63', '#376966', '#42676b', '#597153'];

export const blocchiUsa = [...groups, ...highSchoolGroups].map((group, index) => ({
  gruppo: group.id.startsWith('hs-') ? highSchoolName : gruppoUsa,
  sotto: group.name,
  materie: group.courses.map(course => {
    const m: Materia = {
      slug: course.slug,
      titolo: course.title,
      breve: course.title,
      descrizione: course.description,
      gruppo: group.id.startsWith('hs-') ? highSchoolName : gruppoUsa,
      sottogruppo: group.name,
      colore: colori[index % colori.length],
      prezzo: usaProduct(course.slug)?.prezzo,
      attiva: true,
      argomenti: haProgramma(course.slug)
        ? programmaDi(course.slug).map((a) => ({ slug: a.slug, titolo: a.titolo, breve: a.breve }))
        : course.lessons.map((lesson, i) => ({
          slug: 'unit-' + (i + 1),
          titolo: lesson.title,
          breve: lesson.title,
        })),
    };
    return { m, nome: m.titolo };
  }),
}));

export const materieUsa = blocchiUsa.flatMap(blocco => blocco.materie.map(({ m }) => m));

export const materiaUsa = (slug: string) => materieUsa.find(m => m.slug === slug);

export function linkArgomentoUsa(materia: string, argomento: string, sezione: string) {
  const path = courseUrl(materia);
  // Corsi scritti sul programma americano: argomenti e sezioni hanno indirizzi inglesi.
  if (haProgramma(materia)) {
    const [nome, ...resto] = sezione.split('/');
    const tradotta = (SEZIONI_USA as Record<string, string>)[nome] ?? nome;
    return url([path, argomento, tradotta, ...resto].join('/'));
  }
  if (sezione === 'domande' || hasUsStudyPages(materia)) return url(path + '/' + argomento + '/' + sezione);
  const numero = argomento.slice('unit-'.length);
  const ancora = sezione === 'teoria' ? argomento
    : sezione === 'esercizi-svolti' ? 'worked-' + numero
    : (materia.startsWith('hs-') ? 'exercises-' : 'question-') + numero;
  return url(path + '#' + ancora);
}
