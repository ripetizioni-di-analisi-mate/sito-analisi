// Trasforma le direttive Markdown nei blocchi del sito.
//
//   :::definizione{#limite-finito titolo="Limite finito"}   ...   :::
//   :::teorema{#permanenza-del-segno titolo="Permanenza del segno"}
//   :::dimostrazione   (apribile)
//   :::esempio  :::osservazione  :::attenzione
//   :::richiamo{titolo="Teorema di ..."}   solo ipotesi e tesi
//   :::soluzione   (apribile, "Mostra soluzione")
//   ::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.4 ymax=1.2 punti="0,1"}   (tutti gli attributi in grafico.mjs)
//   ::venn{zone="ab" titolo="A ∩ B"}   diagrammi di Venn (attributi in venn.mjs)
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import { grafico } from './grafico.mjs';
import { venn } from './venn.mjs';

const ETICHETTE = {
  definizione: 'Definizione',
  teorema: 'Teorema',
  proposizione: 'Proposizione',
  dimostrazione: 'Dimostrazione',
  esempio: 'Esempio',
  osservazione: 'Osservazione',
  attenzione: 'Attenzione',
  richiamo: 'Richiamo',
  soluzione: 'Soluzione',
};

const APRIBILI = { dimostrazione: 'Dimostrazione', soluzione: 'Mostra soluzione' };

// Contenuti inglesi (src/content-en/): stesse direttive, etichette in inglese.
const EN = {
  definizione: 'Definition', teorema: 'Theorem', proposizione: 'Proposition', dimostrazione: 'Proof',
  esempio: 'Example', osservazione: 'Remark', attenzione: 'Warning', richiamo: 'Recall', soluzione: 'Solution',
  mostra: 'Show solution', nascondi: 'Hide solution',
};
const IT = { ...ETICHETTE, mostra: 'Mostra soluzione', nascondi: 'Nascondi soluzione' };

const NUMERATI = new Set(['definizione', 'teorema', 'proposizione']);
const testo = (n) => (n.value ?? '') + (n.children || []).map(testo).join('');
const norma = (t) => String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

export default function remarkBlocchi() {
  return (tree, file) => {
    const percorso = String(file?.path || file?.history?.[0] || '');
    const E = /content-en[\\/]/.test(percorso) ? EN : IT;
    // Numerazione: dentro ogni sezione (##), se ci sono almeno due definizioni/teoremi/proposizioni,
    // i loro titoli diventano "1. …", "2. …"; un blocco da solo resta senza numero.
    // Un blocco che ha lo stesso titolo della sua sezione non ripete il titolo.
    const numeri = new Map();
    const senzaTitolo = new Set();
    let sezione = [], titoloSezione = '';
    const chiudi = () => { if (sezione.length > 1) sezione.forEach((n, i) => numeri.set(n, i + 1)); sezione = []; };
    for (const n of tree.children || []) {
      if (n.type === 'heading' && n.depth <= 2) { chiudi(); titoloSezione = norma(testo(n)); continue; }
      if (n.type !== 'containerDirective' || !ETICHETTE[n.name]) continue;
      if (titoloSezione && norma(n.attributes?.titolo || '') === titoloSezione) { senzaTitolo.add(n); continue; }
      if (NUMERATI.has(n.name)) sezione.push(n);
    }
    chiudi();
    visit(tree, (node) => {
      if (node.type === 'leafDirective' && (node.name === 'grafico' || node.name === 'venn')) {
        node.type = 'html';
        node.value = node.name === 'grafico' ? grafico(node.attributes || {}) : venn(node.attributes || {});
        return;
      }
      if (node.type !== 'containerDirective') return;
      const nome = node.name;
      if (!ETICHETTE[nome]) return;
      const a = node.attributes || {};
      const titolo = a.titolo || '';
      const data = (node.data ||= {});
      const classi = ['blocco', `blocco-${nome}`];

      if (APRIBILI[nome]) {
        // La soluzione cambia etichetta quando è aperta: "Mostra soluzione" / "Nascondi soluzione".
        const summary = nome === 'soluzione'
          ? h('summary', { class: 'blocco-etichetta' }, [h('span', { class: 'se-chiuso' }, E.mostra), h('span', { class: 'se-aperto' }, E.nascondi)])
          : h('summary', { class: 'blocco-etichetta' }, E[nome]);
        data.hName = 'details';
        data.hProperties = { class: classi.join(' '), id: a.id };
        node.children.unshift({ type: 'html', value: toHtml(summary) });
        return;
      }

      const num = numeri.get(node);
      const intestazione = senzaTitolo.has(node) ? '' : `<p class="blocco-etichetta">${num ? `<span class="numero-blocco">${num}.</span> ` : ''}${titolo || E[nome]}</p>`;
      data.hName = nome === 'richiamo' ? 'aside' : 'div';
      data.hProperties = { class: classi.join(' '), id: a.id };
      node.children.unshift({ type: 'html', value: intestazione });
    });
  };
}

function toHtml(el) {
  const attrs = Object.entries(el.properties || {})
    .map(([k, v]) => ` ${k === 'className' ? 'class' : k}="${Array.isArray(v) ? v.join(' ') : v}"`)
    .join('');
  const inner = el.children.map((c) => (c.type === 'text' ? c.value : toHtml(c))).join('');
  return `<${el.tagName}${attrs}>${inner}</${el.tagName}>`;
}
