import PREZZI from '../prezzi.json';
import { courses, courseUrl } from './catalog.mjs';
import { highSchoolPath } from './high-school/index.mjs';

// Prices follow the Italian subject prices. Every U.S. course has its own access key.
export const equivalenteItaliano: Record<string, keyof typeof PREZZI> = {
  'precalculus': 'precorso',
  'calculus-1': 'analisi-1',
  'calculus-2': 'analisi-2',
  'calculus-3': 'analisi-2',
  'differential-equations': 'analisi-2',
  'linear-algebra': 'algebra-lineare',
  'statistics-and-probability': 'statistica',
  'physics-1-mechanics': 'fisica-1',
  'physics-2-electricity-and-magnetism': 'fisica-2',
  'thermal-physics': 'fisica-1',
  'engineering-thermodynamics': 'fisica-1',
  'engineering-statics': 'statica',
  'mechanics-of-materials': 'scienza-delle-costruzioni',
  'introduction-to-computer-science': 'informatica-superiori-5',
  'discrete-mathematics': 'matematica-generale',
  'data-structures': 'informatica-superiori-5',
  'general-chemistry-1': 'chimica-semestre-filtro',
  'introductory-biology': 'biologia-semestre-filtro',
  'hs-algebra-1': 'matematica-superiori-2',
  'hs-geometry': 'matematica-superiori-2',
  'hs-algebra-2': 'matematica-superiori-3',
  'hs-precalculus': 'matematica-superiori-5',
  'hs-biology': 'biologia-semestre-filtro',
  'hs-chemistry': 'chimica-semestre-filtro',
  'hs-physics': 'fisica-superiori-5',
  'hs-earth-space-science': 'fisica-superiori-5',
};

export const usaProducts = courses.map(course => {
  const prezzo = PREZZI[equivalenteItaliano[course.slug]];
  if (!prezzo) throw new Error('Missing Italian price for ' + course.slug);
  return { slug: course.slug, titolo: course.title, attiva: true, prezzo };
});
const usaBySlug = new Map(usaProducts.map(product => [product.slug, product]));
export const usaProduct = (slug: string) => usaBySlug.get(slug);

export function normalizedStudyPath(pathname: string) {
  let decoded: string;
  try { decoded = decodeURIComponent(pathname); } catch { return pathname; }
  return new URL('https://study.invalid' + decoded.replace(/\/+/g, '/')).pathname
    .replace(/\/$/, '').replace(/\.html$/i, '').replace(/\/index$/, '');
}

export function usaCoursePath(pathname: string) {
  const path = normalizedStudyPath(pathname);
  if (!path.startsWith('/us/')) return undefined;
  const highSchool = path.startsWith(highSchoolPath + '/');
  const [slug, ...rest] = path.slice(highSchool ? highSchoolPath.length + 1 : 4).split('/');
  const product = usaProduct((highSchool ? 'hs-' : '') + slug);
  if (!product || !path.startsWith(courseUrl(product.slug))) return undefined;
  return { slug: product.slug, section: rest.join('/') };
}
