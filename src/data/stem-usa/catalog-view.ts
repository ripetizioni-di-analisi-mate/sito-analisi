import type { Materia } from '../materie';
import { groups } from './catalog.mjs';
import { url } from '../../lib/url';
import { calculusSlug } from './calculus-1-practice.mjs';

export const gruppoUsa = 'University';

const colori = ['#2e6b63', '#376966', '#42676b', '#597153'];

export const blocchiUsa = groups.map((group, index) => ({
  sotto: group.name,
  materie: group.courses.map(course => {
    const m: Materia = {
      slug: course.slug,
      titolo: course.title,
      breve: course.title,
      descrizione: course.description,
      gruppo: gruppoUsa,
      sottogruppo: group.name,
      colore: colori[index],
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
  if (sezione === 'domande') return url('/us/' + materia + '/' + argomento + '/domande');
  const numero = argomento.slice('unit-'.length);
  const ancora = sezione === 'teoria' ? argomento
    : sezione === 'esercizi-svolti' ? 'worked-' + numero
    : (materia === calculusSlug ? 'exercises-' : 'question-') + numero;
  return url('/us/' + materia + '#' + ancora);
}
