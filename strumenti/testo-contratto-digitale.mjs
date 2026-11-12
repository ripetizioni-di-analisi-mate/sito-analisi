// Produce il testo leggibile delle due pagine legali. Le fotografie già spedite vanno
// conservate; una modifica delle pagine richiede una nuova versione del contratto.
import { readFileSync } from 'node:fs';
import { parseFragment } from 'parse5';
import { SITO_EMAIL } from '../worker/email.mjs';

export function testoContrattoCorrente(lingua, versione) {
  const en = lingua === 'en';
  const pref = en ? '/en' : '';
  const cartella = new URL('../src/pages' + pref + '/', import.meta.url);
  const lezioni = readFileSync(new URL('../src/data/lezioni.ts',import.meta.url),'utf8');
  const ore = lezioni.match(/\brimborsoOre:\s*(\d+)/)?.[1];
  if (!ore) throw new Error('Durata delle condizioni di prenotazione assente');
  function testo(n) {
    if (n.nodeName === '#text') return n.value;
    const v = (n.childNodes || []).map(testo).join('');
    if (n.tagName === 'a') {
      const href = n.attrs.find(a=>a.name==='href')?.value;
      if (!href) throw new Error('Link senza indirizzo');
      const url = new URL(href,SITO_EMAIL).href;
      return v===url || url==='mailto:'+v ? v : v+' ('+url+')';
    }
    if (n.tagName === 'li') return '\n• '+v.trim()+'\n';
    return v;
  }
  const parti = ['Ripetizioni di Analisi · '+(en?'Contract version ':'Versione del contratto ')+versione];
  for (const file of ['termini','rimborsi']) {
    const fonte=readFileSync(new URL(file+'.astro',cartella),'utf8');
    const corpo=fonte.slice(fonte.indexOf('  <p class="sopratitolo">'),fonte.lastIndexOf('</Base>')).replaceAll('{LEZIONI.rimborsoOre}',ore);
    if (!corpo || /[{}]/.test(corpo)) throw new Error('Contenuto dinamico non reso: '+file);
    const paragrafi=parseFragment(corpo).childNodes.filter(n=>n.tagName).map(n=>
      testo(n).trim().split(/\n+/).map(l=>l.replace(/\s+/g,' ').trim()).filter(Boolean).join('\n')
    );
    parti.push(SITO_EMAIL+pref+'/'+file,...paragrafi);
  }
  return parti.join('\n\n')+'\n';
}
