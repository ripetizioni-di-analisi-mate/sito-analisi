// Dieci ID fissi nell'intero corso: cambiare capitolo o sessione non amplia l'anteprima.
export function anteprimaAnalisi3(argomenti = {}) {
 const candidati = Object.entries(argomenti).flatMap(([slug, domande]) => domande.map(d => ({slug,d}))).sort((a,b)=>a.d.n-b.d.n||a.slug.localeCompare(b.slug));
 const out={}; for(const {slug,d} of candidati.slice(0,10)) (out[slug]??=[]).push(d); return out;
}
