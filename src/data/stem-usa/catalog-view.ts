import type { Materia } from '../materie';
import { courseUrl, groups, universityTimedTopics } from './catalog.mjs';
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
      argomenti: course.lessons.map((lesson, i) => ({
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
  if (sezione === 'domande') return url(path + '/' + argomento + '/domande');
  const numero = argomento.slice('unit-'.length);
  const ancora = sezione === 'teoria' ? argomento
    : sezione === 'esercizi-svolti' ? 'worked-' + numero
    : (Object.hasOwn(universityTimedTopics, materia) || materia.startsWith('hs-') ? 'exercises-' : 'question-') + numero;
  return url(path + '#' + ancora);
}
