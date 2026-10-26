// Costruisce gli indirizzi del sito. In anteprima statica (ANTEPRIMA=1)
// aggiunge ".html", per un hosting di file senza riscrittura degli URL.
const ANTEPRIMA = process.env.ANTEPRIMA === '1';

export function url(path: string): string {
  const [p, hash] = path.split('#');
  let out = p;
  if (ANTEPRIMA && !/\.[a-z0-9]+$/i.test(p)) out = p === '/' ? '/index.html' : `${p}.html`;
  return hash ? `${out}#${hash}` : out;
}
