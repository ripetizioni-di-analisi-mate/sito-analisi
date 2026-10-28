// Trasforma le direttive Markdown nei blocchi del sito.
//
//   :::definizione{#limite-finito titolo="Limite finito"}   ...   :::
//   :::teorema{#permanenza-del-segno titolo="Permanenza del segno"}
//   :::dimostrazione   (apribile)
//   :::esempio  :::osservazione  :::attenzione
//   :::richiamo{titolo="Teorema di ..."}   solo ipotesi e tesi
//   :::soluzione   (apribile, "Mostra soluzione")
//   ::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.4 ymax=1.2 punti="0,1"}
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';
import { grafico } from './grafico.mjs';

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

export default function remarkBlocchi() {
  return (tree, file) => {
    const percorso = String(file?.path || file?.history?.[0] || '');
    const E = /content-en[\\/]/.test(percorso) ? EN : IT;
    visit(tree, (node) => {
      if (node.type === 'leafDirective' && node.name === 'grafico') {
        const a = node.attributes || {};
        node.type = 'html';
        node.value = grafico({
          f: a.f,
          xmin: Number(a.xmin ?? -5), xmax: Number(a.xmax ?? 5),
          ymin: a.ymin !== undefined ? Number(a.ymin) : undefined,
          ymax: a.ymax !== undefined ? Number(a.ymax) : undefined,
          punti: a.punti, asintoti: a.asintoti, titolo: a.titolo,
        });
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

      const intestazione = `<p class="blocco-etichetta">${titolo || E[nome]}</p>`;
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
