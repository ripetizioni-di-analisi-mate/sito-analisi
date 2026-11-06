import type { Lingua } from '../i18n';
import { GRUPPI_EN } from './materie-en';

const aree = [
  { nome: 'Università', slug: 'universita' },
  { nome: 'Superiori', slug: 'superiori' },
  { nome: 'Concorsi', slug: 'concorsi' },
  { nome: 'Percorso per principianti', slug: 'da-zero', it: 'Da zero', en: 'From scratch' },
  { nome: 'Semestre filtro', slug: 'semestre-filtro' },
  { nome: 'TOLC, OFA e test di ingresso', slug: 'test-ingresso', it: 'Test d’ingresso', en: 'Admission tests' },
];

export function percorsiL(lingua: Lingua) {
  return aree.map((area) => {
    const nome = lingua === 'it' ? area.nome : GRUPPI_EN[area.nome];
    return { slug: area.slug, nome, breve: area[lingua] ?? nome };
  });
}
