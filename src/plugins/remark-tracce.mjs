// Schede svolte: segna dove finisce la traccia di ogni esercizio.
//
// Nel Markdown di una scheda ogni esercizio comincia con "## Esercizio k"; la traccia è il primo
// blocco di testo dopo il titolo (paragrafo e formule scritte senza righe vuote in mezzo), più gli
// eventuali elenchi che lo seguono subito (risposte A-E dei quiz, domande numerate, premesse).
// Dopo la traccia si inserisce un segnaposto vuoto e invisibile, <span class="fine-traccia" hidden>:
// scripts/vetrine.mjs lo usa per costruire la vetrina delle schede bloccate (tracce visibili,
// svolgimenti tolti). Per chi vede la scheda completa non cambia nulla.
// Le figure (::grafico, ::venn) arrivano qui già trasformate da remark-blocchi in HTML <figure>.
const figura = (n) => n?.type === 'html' && /^<figure/.test(n.value || '');
const testo = (n) => (n.value && n.type === 'text' ? n.value : (n.children || []).map(testo).join(''));

export default function remarkTracce() {
  return (tree, file) => {
    const percorso = String(file?.path || file?.history?.[0] || '');
    if (!/[\\/]svolti[\\/]/.test(percorso)) return;
    const figli = tree.children;
    const fuori = [];
    for (let i = 0; i < figli.length; i++) {
      if (figli[i].type !== 'heading' || figli[i].depth !== 2) continue;
      let j = i + 1;
      if (j >= figli.length || figli[j].type === 'heading') continue;
      // primo blocco: nodi contigui, senza righe vuote fra l'uno e l'altro
      let fine = figli[j].position?.end.line ?? 0;
      j++;
      while (j < figli.length && figli[j].type !== 'heading' && (figli[j].position?.start.line ?? 0) <= fine + 1) {
        fine = figli[j].position?.end.line ?? fine;
        j++;
      }
      const testoTraccia = figli.slice(i + 1, j).map(testo).join(' ');
      let estesa = false;
      // traccia che finisce con i due punti ("Il numero al posto del punto interrogativo è:"): segue la figura o la formula
      if (j < figli.length && figli[j].type !== 'heading' && testo(figli[j - 1]).trim().endsWith(':')) { j++; estesa = true; }
      // figura citata come parte del testo ("della figura", "diagramma a torta"); i grafici descritti a parole
      // nella traccia restano fuori, perché la loro didascalia può contenere parte della soluzione
      const citaFigura = /figur|diagramm|schemi|diagram/i.test(testoTraccia);
      // (nei quiz il grafico dei dati può venire dopo le risposte: "Il grafico riporta…", risposte A-E, grafico)
      const figuraDellaTraccia = (k) => figura(figli[k])
        && (citaFigura || figli[k + 1]?.type === 'list' || (figli[k - 1]?.type === 'list' && /grafic|istogramm|graph|histogram/i.test(testoTraccia)));
      if (figuraDellaTraccia(j)) { j++; estesa = true; }
      // tabella di dati seguita dalla domanda e dalle risposte (quiz di statistica e di logica)
      if (figli[j]?.type === 'table' && figli[j + 1]?.type === 'paragraph' && figli[j + 2]?.type === 'list') { j += 3; estesa = true; }
      // elenchi subito dopo: fanno parte della traccia, anche con una domanda fra due elenchi
      // ("Sono vere le seguenti affermazioni:", elenco, "Quale delle seguenti…?", risposte A-E)
      if (j < figli.length && (estesa || figli[j].type === 'list')) {
        while (j < figli.length) {
          if (figli[j].type === 'list') j++;
          else if (figli[j].type === 'paragraph' && figli[j + 1]?.type === 'list') j += 2;
          else if (figuraDellaTraccia(j)) j++;
          else break;
        }
      }
      fuori.push(j);
    }
    for (const j of fuori.reverse()) figli.splice(j, 0, { type: 'html', value: '<span class="fine-traccia" hidden></span>' });
  };
}
