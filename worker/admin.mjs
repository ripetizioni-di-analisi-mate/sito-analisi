// Dashboard riservata (/admin): pagina unica con viste a schede (panoramica, studenti, vendite, traffico, strumenti).
// I dati arrivano da /admin/api/*; il codice del browser è la funzione `cliente`, inserita nella pagina come sorgente.

const ICONE = {
  panoramica: '<path d="M4 13h6V4H4zM14 20h6v-9h-6zM4 20h6v-4H4zM14 7h6V4h-6z"/>',
  studenti: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="8" r="3.5"/><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 4.6a3.5 3.5 0 0 1 0 6.8"/>',
  vendite: '<path d="M17.5 6.5A7 7 0 1 0 17.5 17.5"/><path d="M4 10.5h9M4 13.5h9"/>',
  traffico: '<path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 3 5-6"/>',
  strumenti: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L4 16.7V20h3.3l5.3-5.3a4 4 0 0 0 5.1-5.4l-2.4 2.4-2.4-.6-.6-2.4z"/>',
  aggiorna: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',
  esci: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 16l4-4-4-4M14 12H4"/>',
  sito: '<path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
};
const icona = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONE[n]}</svg>`;

export function paginaAdmin(aPagamento, materie) {
  const info = materie.map((m) => ({ slug: m.slug, titolo: m.titolo, breve: m.breve, colore: m.colore, prezzo: m.prezzo, argomenti: Object.fromEntries(m.argomenti.map((a) => [a.slug, a.breve])) }));
  const viste = [['panoramica', 'Panoramica'], ['studenti', 'Studenti'], ['vendite', 'Vendite'], ['traffico', 'Traffico'], ['strumenti', 'Strumenti']];
  const nav = viste.map(([id, t]) => `<a href="#${id}" data-vista="${id}">${icona(id)}<span>${t}</span></a>`).join('');
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex"><meta name="theme-color" content="#1c2625">
<title>Dashboard · Ripetizioni di Analisi</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap">
<style>
:root{
  --fondo:#f4f2ec;--pannello:#fff;--pannello-2:#faf9f5;--ink:#1f2b2a;--ink-2:#5d6967;--ink-3:#8b9593;--riga:#e6e1d6;--riga-2:#efebe2;
  --acc:#2f6f68;--acc-tenue:#e3efec;--su:#2e7d4f;--giu:#b23c2a;--avviso:#a8762b;--barra:#1c2625;--barra-ink:#c9d3d0;--barra-att:#fff;
  --ombra:0 1px 2px rgba(28,38,37,.05),0 4px 16px rgba(28,38,37,.05);
  --acc-ink:#fff;--c1:#2f6f68;--c2:#3b5f8f;--c3:#6b5ca5;--c4:#2e7d4f;--c5:#a8762b;--c6:#d6336c;
  --ui:'Source Sans 3',system-ui,-apple-system,'Segoe UI',sans-serif;--num:'Source Serif 4',Georgia,serif;color-scheme:light}
@media (prefers-color-scheme:dark){:root{
  --fondo:#111615;--pannello:#192120;--pannello-2:#1d2625;--ink:#e6ebe8;--ink-2:#a3aeab;--ink-3:#75817e;--riga:#2b3533;--riga-2:#232c2b;
  --acc:#6fb8ad;--acc-tenue:#1e3532;--su:#6cc28f;--giu:#e3826f;--avviso:#d9a85a;--barra:#0c1110;--barra-ink:#9aa7a4;--barra-att:#fff;
  --ombra:0 1px 2px rgba(0,0,0,.3);--acc-ink:#0d1a18;--c1:#5fb3a8;--c2:#7fa3d6;--c3:#a596e0;--c4:#62c08a;--c5:#d9a85a;--c6:#f06595;color-scheme:dark}}
*{box-sizing:border-box}html,body{height:100%;overflow-x:hidden}
body{margin:0;background:var(--fondo);color:var(--ink);font:15px/1.5 var(--ui);-webkit-font-smoothing:antialiased}
button,input,select{font:inherit;color:inherit}
a{color:var(--acc)}
[hidden]{display:none!important}
.num,.kpi b,.cifra{font-family:var(--num);font-variant-numeric:tabular-nums}
td,th,.tab{font-variant-numeric:tabular-nums}

/* struttura */
.app{display:grid;grid-template-columns:15rem minmax(0,1fr);min-height:100%}
.lato{background:var(--barra);color:var(--barra-ink);padding:1.2rem .8rem;display:flex;flex-direction:column;gap:.25rem;position:sticky;top:0;height:100vh}
.marchio{display:flex;align-items:center;gap:.6rem;color:#fff;font-weight:700;padding:.2rem .6rem 1.2rem;font-size:1rem;line-height:1.2}
.marchio i{width:2rem;height:2rem;border-radius:9px;background:linear-gradient(135deg,#3d8a81,#2f6f68);display:grid;place-items:center;font:600 1.05rem var(--num);font-style:italic;color:#fff;flex:none}
.marchio small{display:block;font-weight:400;color:var(--barra-ink);font-size:.78rem}
.lato nav{display:grid;gap:.15rem}
.lato a{display:flex;align-items:center;gap:.7rem;padding:.55rem .7rem;border-radius:8px;color:var(--barra-ink);text-decoration:none;font-weight:500}
.lato a svg{width:1.15rem;height:1.15rem;flex:none}
.lato a:hover{background:rgba(255,255,255,.06);color:#fff}
.lato a.attiva{background:rgba(111,184,173,.16);color:var(--barra-att)}
.lato a.attiva svg{color:#8fd0c5}
.lato .fondo-lato{margin-top:auto;display:grid;gap:.15rem;border-top:1px solid rgba(255,255,255,.08);padding-top:.6rem}
.lato .fondo-lato button{all:unset;display:flex;align-items:center;gap:.7rem;padding:.55rem .7rem;border-radius:8px;cursor:pointer;color:var(--barra-ink);font-weight:500}
.lato .fondo-lato button:hover{background:rgba(255,255,255,.06);color:#fff}
.lato .fondo-lato svg{width:1.15rem;height:1.15rem}
main{padding:1.4rem clamp(16px,3vw,2.2rem) 3rem;min-width:0}
.testa{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1.3rem}
.testa h1{font:600 1.55rem/1.2 var(--num);margin:0;letter-spacing:-.01em}
.testa .stato-agg{color:var(--ink-3);font-size:.85rem;display:flex;align-items:center;gap:.4rem}
.testa .stato-agg::before{content:"";width:.5rem;height:.5rem;border-radius:50%;background:var(--su);box-shadow:0 0 0 3px color-mix(in srgb,var(--su) 20%,transparent)}
.testa .destra{margin-left:auto;display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
.segmenti{display:inline-flex;background:var(--pannello);border:1px solid var(--riga);border-radius:9px;padding:3px}
.segmenti button{border:0;background:none;padding:.3rem .75rem;border-radius:6px;cursor:pointer;color:var(--ink-2);font-weight:600;font-size:.88rem}
.segmenti button[aria-pressed=true]{background:var(--acc);color:var(--acc-ink)}
.bottone{display:inline-flex;align-items:center;gap:.45rem;border:1px solid var(--riga);background:var(--pannello);border-radius:9px;padding:.42rem .8rem;cursor:pointer;font-weight:600;font-size:.88rem;color:var(--ink);text-decoration:none;white-space:nowrap}
.bottone:hover{border-color:color-mix(in srgb,var(--acc) 45%,var(--riga))}
.bottone svg{width:1rem;height:1rem}
.bottone.primario{background:var(--acc);border-color:var(--acc);color:var(--acc-ink)}
.bottone.primario:hover{filter:brightness(1.08)}
.bottone.pericolo{color:var(--giu)}
.bottone:disabled{opacity:.5;cursor:default}
.ruota svg{animation:ruota .8s linear infinite}@keyframes ruota{to{transform:rotate(360deg)}}
:focus-visible{outline:2px solid var(--acc);outline-offset:2px}

/* schede e griglie */
.griglia{display:grid;gap:1rem}
.kpi-riga{display:grid;grid-template-columns:repeat(auto-fit,minmax(11.5rem,1fr));gap:1rem;margin-bottom:1rem}
.card{background:var(--pannello);border:1px solid var(--riga);border-radius:14px;box-shadow:var(--ombra);min-width:0}
.card>header{display:flex;align-items:baseline;gap:.8rem;padding:1rem 1.2rem .2rem;flex-wrap:wrap}
.card>header h2{margin:0;font-size:1rem;font-weight:700}
.card>header .nota{margin-left:auto}
.card .corpo{padding:.6rem 1.2rem 1.1rem}
.nota{color:var(--ink-3);font-size:.84rem;font-weight:400}
.kpi{padding:1rem 1.1rem .7rem;display:grid;gap:.15rem;position:relative;overflow:hidden}
.kpi .etichetta{font-size:.82rem;color:var(--ink-2);font-weight:600}
.kpi b{font-size:1.85rem;font-weight:600;line-height:1.15;letter-spacing:-.01em}
.kpi .delta{font-size:.8rem;font-weight:700}
.kpi .delta.su{color:var(--su)}.kpi .delta.giu{color:var(--giu)}.kpi .delta.pari{color:var(--ink-3)}
.kpi .delta span{font-weight:400;color:var(--ink-3)}
.kpi svg.spark{width:100%;height:34px;margin-top:.35rem;display:block}
.due{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(0,1fr);gap:1rem;margin-bottom:1rem}
.due.pari{grid-template-columns:repeat(2,minmax(0,1fr))}
@media (max-width:1100px){.due,.due.pari{grid-template-columns:minmax(0,1fr)}}

/* grafici */
.grafico{position:relative}
.grafico svg{display:block;width:100%;overflow:visible}
.grafico .asse{fill:var(--ink-3);font-size:11px;font-family:var(--ui)}
.grafico .griglia-g{stroke:var(--riga-2);stroke-width:1}
.grafico .mirino{stroke:var(--ink-3);stroke-dasharray:3 3}
.suggerimento{position:absolute;pointer-events:none;background:var(--barra);color:#fff;border-radius:8px;padding:.45rem .65rem;font-size:.8rem;line-height:1.35;white-space:nowrap;box-shadow:0 6px 20px rgba(0,0,0,.18);transform:translate(-50%,-110%);z-index:3}
.suggerimento i{display:inline-block;width:.55rem;height:.55rem;border-radius:2px;margin-right:.35rem}
.legenda{display:flex;gap:1rem;flex-wrap:wrap;font-size:.82rem;color:var(--ink-2);padding:0 1.2rem}
.legenda i{display:inline-block;width:.7rem;height:.7rem;border-radius:3px;margin-right:.35rem;vertical-align:-1px}

/* elenchi a barre */
.barre{display:grid;gap:.55rem}
.barra-riga{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:.15rem .8rem;align-items:center;font-size:.9rem}
.barra-riga .nome{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;gap:.45rem}
.barra-riga .valore{font-weight:700;text-align:right}
.barra-riga .valore small{font-weight:400;color:var(--ink-3);margin-left:.35rem}
.barra-riga .traccia{grid-column:1/-1;height:6px;border-radius:99px;background:var(--riga-2);overflow:hidden}
.barra-riga .traccia div{height:100%;border-radius:99px;background:var(--acc)}
.punto{width:.6rem;height:.6rem;border-radius:50%;flex:none;display:inline-block}

/* imbuto */
.imbuto{display:grid;gap:.7rem}
.passo{display:grid;grid-template-columns:5.5rem minmax(0,1fr) auto;gap:.3rem .8rem;align-items:center;font-size:.9rem}
.passo .fascia{grid-column:1/-1;height:.9rem;border-radius:99px;background:var(--acc-tenue);overflow:hidden}
.passo .fascia div{height:100%;background:var(--acc);border-radius:99px;min-width:4px;transition:width .5s}
.passo b{font:600 1.35rem/1.1 var(--num);font-variant-numeric:tabular-nums}
.passo .perc{text-align:right;color:var(--ink-2);font-size:.82rem}
.imbuto{gap:1rem}

/* attività */
.attivita{list-style:none;margin:0;padding:0;display:grid}
.attivita li{display:grid;grid-template-columns:2rem minmax(0,1fr) auto;gap:.7rem;align-items:center;padding:.55rem 0;border-bottom:1px solid var(--riga-2);font-size:.9rem}
.attivita li:last-child{border-bottom:0}
.attivita .bollo{width:2rem;height:2rem;border-radius:50%;display:grid;place-items:center;font-size:.9rem;font-weight:700}
.bollo.iscrizione{background:var(--acc-tenue);color:var(--acc)}
.bollo.pagamento{background:color-mix(in srgb,var(--su) 16%,transparent);color:var(--su)}
.bollo.manuale{background:color-mix(in srgb,var(--avviso) 16%,transparent);color:var(--avviso)}
.attivita .testo{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.attivita time{color:var(--ink-3);font-size:.8rem;white-space:nowrap}

/* tabelle */
.strumenti-tab{display:flex;gap:.6rem;flex-wrap:wrap;align-items:center;padding:1rem 1.2rem .6rem}
.cerca{flex:1 1 15rem;display:flex;align-items:center;gap:.5rem;border:1px solid var(--riga);border-radius:9px;padding:.4rem .7rem;background:var(--pannello-2)}
.cerca input{border:0;background:none;outline:none;width:100%}
.cerca kbd{font:600 .72rem var(--ui);color:var(--ink-3);border:1px solid var(--riga);border-radius:4px;padding:0 .3rem}
.filtri{display:flex;gap:.35rem;flex-wrap:wrap}
.filtro{border:1px solid var(--riga);background:var(--pannello);border-radius:99px;padding:.28rem .75rem;cursor:pointer;font-size:.85rem;font-weight:600;color:var(--ink-2)}
.filtro[aria-pressed=true]{background:var(--ink);border-color:var(--ink);color:var(--pannello)}
.filtro small{font-weight:400;opacity:.75;margin-left:.2rem}
select.scelta{border:1px solid var(--riga);border-radius:9px;padding:.38rem .6rem;background:var(--pannello)}
.tabella{overflow-x:auto}
table{border-collapse:collapse;width:100%;font-size:.9rem}
th{font-size:.76rem;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-3);font-weight:700;text-align:left;padding:.55rem 1.2rem;border-bottom:1px solid var(--riga);white-space:nowrap;background:var(--pannello-2)}
th[data-ordina]{cursor:pointer;user-select:none}
th[data-ordina]:hover{color:var(--ink)}
th .freccia{opacity:.5;margin-left:.2rem}
td{padding:.65rem 1.2rem;border-bottom:1px solid var(--riga-2);vertical-align:middle}
tbody tr:last-child td{border-bottom:0}
tbody tr.cliccabile{cursor:pointer}
tbody tr.cliccabile:hover td{background:var(--pannello-2)}
td.destra,th.destra{text-align:right}
.persona{display:flex;align-items:center;gap:.7rem;min-width:13rem}
.avatar{width:2.1rem;height:2.1rem;border-radius:50%;display:grid;place-items:center;font-weight:700;color:#fff;flex:none;font-size:.88rem}
.persona .chi{min-width:0}
.persona b{display:block;font-weight:600;line-height:1.25}
.persona .mail{display:block;color:var(--ink-3);font-size:.82rem;line-height:1.25;word-break:break-all}
.chip{display:inline-flex;align-items:center;gap:.3rem;font-size:.78rem;font-weight:600;padding:.12rem .55rem;border-radius:99px;background:var(--riga-2);color:var(--ink-2);white-space:nowrap;margin:.1rem .25rem .1rem 0}
.chip.pagante{background:color-mix(in srgb,var(--su) 15%,transparent);color:var(--su)}
.chip.manuale{background:color-mix(in srgb,var(--avviso) 16%,transparent);color:var(--avviso)}
.chip.attesa{background:color-mix(in srgb,var(--giu) 12%,transparent);color:var(--giu)}
.chip.fonte-instagram{background:linear-gradient(90deg,#f58529,#dd2a7b,#8134af);color:#fff}
.chip.corso{background:color-mix(in srgb,#7a5fb0 16%,transparent);color:#7a5fb0}
.corso-dichiarato{border:1px solid color-mix(in srgb,#7a5fb0 35%,transparent);background:color-mix(in srgb,#7a5fb0 7%,transparent);border-radius:12px;padding:.75rem .9rem}
.corso-dichiarato p{margin:.2rem 0 0}
.puntini{display:flex;gap:.25rem;flex-wrap:wrap}
.puntini .punto{width:.75rem;height:.75rem;box-shadow:0 0 0 2px var(--pannello)}
.vuoto{padding:2rem 1.2rem;text-align:center;color:var(--ink-3)}
.vuoto b{display:block;color:var(--ink-2);font-size:1rem;margin-bottom:.2rem}

/* cassetto dello studente */
.velo{position:fixed;inset:0;background:rgba(12,18,17,.38);z-index:20;opacity:0;transition:opacity .2s}
.velo.aperto{opacity:1}
.cassetto{position:fixed;top:0;right:0;bottom:0;width:min(30rem,100%);background:var(--pannello);z-index:21;box-shadow:-10px 0 40px rgba(0,0,0,.18);transform:translateX(100%);visibility:hidden;transition:transform .25s cubic-bezier(.2,.8,.2,1),visibility 0s .25s;display:flex;flex-direction:column;padding-bottom:env(safe-area-inset-bottom,0px)}
.cassetto.aperto{transform:none;visibility:visible;transition:transform .25s cubic-bezier(.2,.8,.2,1)}
.cassetto header{padding:1.2rem 1.3rem;border-bottom:1px solid var(--riga);display:flex;gap:.9rem;align-items:center}
.cassetto header .avatar{width:3rem;height:3rem;font-size:1.15rem}
.cassetto header h2{margin:0;font:600 1.2rem/1.2 var(--num)}
.cassetto header p{margin:.1rem 0 0;color:var(--ink-3);font-size:.85rem;word-break:break-all}
.cassetto .chiudi{margin-left:auto;align-self:flex-start;border:0;background:none;font-size:1.5rem;line-height:1;cursor:pointer;color:var(--ink-3);padding:.2rem .4rem;border-radius:6px}
.cassetto .dentro{overflow-y:auto;padding:1rem 1.3rem 2rem;display:grid;gap:1.3rem;align-content:start}
.cassetto h3{margin:0 0 .5rem;font-size:.76rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-3)}
.dati{display:grid;grid-template-columns:auto 1fr;gap:.35rem 1rem;font-size:.9rem;margin:0}
.dati dt{color:var(--ink-3)}.dati dd{margin:0;font-weight:600}
.elenco-m{display:grid;gap:.4rem}
.elenco-m .riga-m{display:flex;align-items:center;gap:.6rem;padding:.5rem .7rem;border:1px solid var(--riga);border-radius:9px;font-size:.9rem}
.elenco-m .riga-m .chip{margin-left:auto}
.elenco-m button{border:0;background:none;color:var(--giu);cursor:pointer;font-weight:600;font-size:.82rem;padding:.2rem .3rem}
.scelte{display:flex;flex-wrap:wrap;gap:.4rem}
.scelta-m{display:inline-flex;align-items:center;gap:.4rem;border:1px solid var(--riga);border-radius:99px;padding:.3rem .75rem .3rem .5rem;cursor:pointer;font-size:.86rem;font-weight:600;user-select:none}
.scelta-m input{position:absolute;opacity:0;pointer-events:none}
.scelta-m:has(input:checked){border-color:var(--c);background:color-mix(in srgb,var(--c) 12%,transparent)}
.scelta-m:has(input:focus-visible){outline:2px solid var(--acc)}
.scelta-m .punto{background:var(--c)}
.azioni{display:flex;gap:.5rem;flex-wrap:wrap}

/* moduli */
.modulo{display:grid;gap:.8rem}
.campo{display:grid;gap:.3rem}
.campo label{font-size:.84rem;font-weight:600;color:var(--ink-2)}
.campo input{border:1px solid var(--riga);border-radius:9px;padding:.55rem .75rem;background:var(--pannello-2);width:100%}
.risultato{border:1px dashed var(--acc);border-radius:10px;padding:.8rem 1rem;background:var(--acc-tenue);font-size:.92rem}
.risultato code{font:700 1.15rem ui-monospace,Menlo,monospace;letter-spacing:.04em}

/* avvisi e conferme */
.toast{position:fixed;left:50%;bottom:calc(1.2rem + env(safe-area-inset-bottom,0px));transform:translate(-50%,150%);visibility:hidden;background:var(--barra);color:#fff;padding:.7rem 1.1rem;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.25);z-index:40;transition:transform .25s;font-weight:600;max-width:calc(100% - 32px)}
.toast.visibile{transform:translate(-50%,0);visibility:visible}
@media (max-width:860px){.toast{bottom:calc(5rem + env(safe-area-inset-bottom,0px))}}
.dialogo{position:fixed;inset:0;display:grid;place-items:center;z-index:30;background:rgba(12,18,17,.45);padding:16px}
.dialogo .scatola{background:var(--pannello);border-radius:14px;padding:1.3rem 1.4rem;max-width:26rem;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.dialogo h3{margin:0 0 .4rem;font-size:1.05rem}
.dialogo p{margin:0 0 1.1rem;color:var(--ink-2)}
.dialogo .azioni{justify-content:flex-end}

/* accesso */
#login{min-height:100%;display:grid;place-items:center;padding:16px;background:radial-gradient(circle at 30% 20%,color-mix(in srgb,var(--acc) 14%,transparent),transparent 60%),var(--fondo)}
#login form{background:var(--pannello);border:1px solid var(--riga);border-radius:16px;padding:2rem;width:min(22rem,100%);display:grid;gap:1rem;box-shadow:var(--ombra)}
#login .marchio{color:var(--ink);padding:0}
#login .marchio small{color:var(--ink-3)}
#login-errore{color:var(--giu);font-size:.88rem;min-height:1.2em;margin:0}

/* scheletro di caricamento */
.scheletro{background:linear-gradient(90deg,var(--riga-2),var(--pannello-2),var(--riga-2));background-size:200% 100%;animation:luccica 1.2s infinite;border-radius:8px;height:1rem}
@keyframes luccica{to{background-position:-200% 0}}

/* telefono */
@media (max-width:860px){
  .app{grid-template-columns:minmax(0,1fr)}
  .lato{position:fixed;top:auto;bottom:0;left:0;right:0;height:auto;flex-direction:row;padding:.35rem max(8px,env(safe-area-inset-left,0px)) calc(.35rem + env(safe-area-inset-bottom,0px));z-index:15;gap:0}
  .lato .marchio,.lato .fondo-lato{display:none}
  .lato nav{grid-auto-flow:column;grid-auto-columns:1fr;width:100%}
  .lato a{flex-direction:column;gap:.15rem;font-size:.7rem;padding:.4rem .2rem;text-align:center}
  main{padding-bottom:6rem;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
  .testa h1{font-size:1.3rem}
  .kpi-riga{grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem}
  .kpi{padding:.8rem .85rem .6rem}
  .kpi b{font-size:1.35rem}
  .kpi .delta span{display:none}
  .kpi svg.spark{height:26px}
  th,td{padding-left:.8rem;padding-right:.8rem}
  .solo-largo{display:none}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
</style></head><body>
<div id="login" hidden><form id="modulo-login">
  <div class="marchio"><i>∫</i><span>Ripetizioni di Analisi<small>Dashboard riservata</small></span></div>
  <div class="campo"><label for="pw">Password</label><input id="pw" type="password" autocomplete="current-password" required></div>
  <button class="bottone primario" type="submit" style="justify-content:center">Entra</button>
  <p id="login-errore" role="alert"></p>
</form></div>
<div class="app" id="app" hidden>
  <aside class="lato">
    <div class="marchio"><i>∫</i><span>Ripetizioni di Analisi<small>Dashboard</small></span></div>
    <nav>${nav}</nav>
    <div class="fondo-lato">
      <button type="button" onclick="window.open('/','_blank')">${icona('sito')}<span>Apri il sito</span></button>
      <button type="button" id="esci">${icona('esci')}<span>Esci</span></button>
    </div>
  </aside>
  <main>
    <div class="testa">
      <h1 id="titolo-vista">Panoramica</h1>
      <span class="stato-agg" id="stato-agg">Caricamento…</span>
      <div class="destra">
        <div class="segmenti" role="group" aria-label="Periodo">
          <button type="button" data-giorni="7" aria-pressed="false">7 giorni</button>
          <button type="button" data-giorni="30" aria-pressed="true">30 giorni</button>
          <button type="button" data-giorni="90" aria-pressed="false">90 giorni</button>
        </div>
        <button type="button" class="bottone" id="aggiorna" title="Aggiorna i dati">${icona('aggiorna')}<span class="solo-largo">Aggiorna</span></button>
      </div>
    </div>
    <div id="vista"></div>
  </main>
</div>
<div class="velo" id="velo" hidden></div>
<aside class="cassetto" id="cassetto" aria-hidden="true" role="dialog" aria-label="Scheda dello studente"></aside>
<div class="toast" id="toast" role="status"></div>
<script>var __name = function (f) { return f; };
(${cliente.toString()})(${JSON.stringify(info)}, ${JSON.stringify(aPagamento)});</script>
</body></html>`;
}

// ---------------------------------------------------------------------------
// Codice eseguito nel browser. Non usa variabili esterne: riceve i dati come argomenti.
// Il bundler di Wrangler può inserire chiamate a __name nel sorgente: la pagina ne definisce una versione vuota.
function cliente(MATERIE, A_PAGAMENTO) {
  const M = Object.fromEntries(MATERIE.map((m) => [m.slug, m]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const nf = new Intl.NumberFormat('it-IT');
  const eur = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });
  const VISTE = { panoramica: 'Panoramica', studenti: 'Studenti', vendite: 'Vendite', traffico: 'Traffico', strumenti: 'Strumenti' };
  const COL = { acc: 'var(--acc)', avviso: 'var(--avviso)', su: 'var(--su)', ink3: 'var(--ink-3)' };
  const COLORI_FONTI = { Instagram: 'var(--c6)', Google: '#4285f4', 'Diretto o app': '#8b9593', WhatsApp: '#25a35a', Facebook: '#1877f2', TikTok: '#111', Bing: '#00809d', ChatGPT: '#10a37f' };

  let D = null, giorni = 30, vista = 'panoramica', aggiornato = null, inCorso = false;
  const stato = { cerca: '', filtro: 'tutti', fonte: '', ordina: 'creato', verso: -1, aperto: null };
  try { const g = Number(localStorage.getItem('dash-giorni')); if ([7, 30, 90].includes(g)) giorni = g; } catch {}

  // ---------- utilità di data ----------
  const oggiISO = () => new Date().toISOString().slice(0, 10);
  const giornoISO = (d) => d.toISOString().slice(0, 10);
  function elencoGiorni(n, fine = 0) { const out = []; const t = Date.now(); for (let i = n - 1 + fine; i >= fine; i--) out.push(giornoISO(new Date(t - i * 864e5))); return out; }
  const breveData = (g) => { const [, m, d] = g.split('-'); return d + '/' + m; };
  function dataOra(s) { if (!s) return '—'; const d = new Date(s); return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: '2-digit' }) + ', ' + d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }); }
  function fa(s) {
    if (!s) return '—';
    const sec = (Date.now() - new Date(typeof s === 'number' ? s : s).getTime()) / 1000;
    if (sec < 60) return 'adesso'; if (sec < 3600) return Math.floor(sec / 60) + ' min fa';
    if (sec < 86400) return Math.floor(sec / 3600) + ' h fa'; if (sec < 172800) return 'ieri';
    if (sec < 30 * 86400) return Math.floor(sec / 86400) + ' giorni fa';
    return new Date(s).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: '2-digit' });
  }
  const iniziali = (u) => ((u.nome || u.email || '?').trim().split(/[\s@._-]+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join('') || '?').toUpperCase();
  function coloreDa(s) { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) % 360; return 'hsl(' + h + ' 38% 46%)'; }
  const nomeMateria = (m) => (M[m] ? M[m].titolo : m);
  const breveMateria = (m) => (M[m] ? M[m].breve || M[m].titolo : m);
  function nomeSezione(s) {
    if (s === 'home') return 'Home'; if (s === 'en') return 'Home inglese';
    const [m, a] = s.split('/');
    if (M[m]) return a ? (M[m].argomenti[a] || a) + ' · ' + breveMateria(m) : nomeMateria(m) + ' (indice)';
    const voci = { 'chi-sono': 'Chi sono', prezzi: 'Prezzi', accedi: 'Accedi', account: 'Account', contatti: 'Contatti', cerca: 'Cerca', privacy: 'Privacy', termini: 'Termini' };
    return voci[s] || s;
  }

  // ---------- rete ----------
  async function api(p, corpo) {
    const r = await fetch('/admin/api/' + p, { method: corpo ? 'POST' : 'GET', headers: { 'content-type': 'application/json' }, body: corpo ? JSON.stringify(corpo) : undefined });
    if (r.status === 401) { mostraLogin(); throw new Error('401'); }
    return r.json();
  }
  async function carica(silenzioso) {
    if (inCorso) return; inCorso = true;
    const b = $('#aggiorna'); b.classList.add('ruota');
    try {
      D = await api('dati'); aggiornato = new Date(); prepara();
      $('#login').hidden = true; $('#app').hidden = false;
      disegna(); if (stato.aperto) apriStudente(stato.aperto, true);
    } catch (e) { if (!silenzioso && e.message !== '401') avviso('Impossibile aggiornare i dati'); }
    finally { inCorso = false; b.classList.remove('ruota'); segnaAggiornato(); }
  }
  function segnaAggiornato() { if (aggiornato) $('#stato-agg').textContent = 'Aggiornato alle ' + aggiornato.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }); }
  function mostraLogin() { $('#app').hidden = true; $('#login').hidden = false; setTimeout(() => $('#pw').focus(), 50); }

  // ---------- dati derivati ----------
  let S = {};
  function prepara() {
    const ab = {}; D.abilitazioni.forEach((a) => { (ab[a.email] ||= []).push(a); });
    const acq = {}; D.acquisti.forEach((a) => { (acq[a.email] ||= []).push(a); });
    const disp = {}; (D.dispositivi || []).forEach((d) => { (disp[d.email] ||= []).push(d); });
    const registrati = new Set(D.utenti.map((u) => u.email));
    const studenti = D.utenti.map((u) => {
      const abil = ab[u.email] || [], acquisti = acq[u.email] || [];
      const spesa = acquisti.reduce((s, a) => s + (Number(a.importo) || 0), 0);
      const tipo = acquisti.length ? 'pagante' : abil.some((a) => a.origine === 'manuale') ? 'manuale' : 'gratis';
      return { ...u, abil, acquisti, spesa, tipo, dispositivi: disp[u.email] || [], registrato: true };
    });
    const attesa = [...new Set(D.abilitazioni.filter((a) => !registrati.has(a.email)).map((a) => a.email))]
      .map((e) => ({ email: e, nome: '', fonte: '', creato: (ab[e][0] || {}).creato, ultimo_accesso: null, abil: ab[e], acquisti: acq[e] || [], spesa: 0, tipo: 'attesa', dispositivi: [], registrato: false }));
    const primoAcquisto = {}; D.acquisti.forEach((a) => { const g = a.creato.slice(0, 10); if (!primoAcquisto[a.email] || g < primoAcquisto[a.email]) primoAcquisto[a.email] = g; });
    const perGiorno = (righe) => Object.fromEntries(righe.map((r) => [r.giorno, r]));
    S = { studenti: studenti.concat(attesa), primoAcquisto, visite: perGiorno(D.visite), visitatori: perGiorno(D.visitatori || []) };
  }
  // serie giornaliere su un intervallo; fine = quanti giorni prima di oggi termina (per il periodo precedente)
  function serie(nome, n, fine = 0) {
    const g = elencoGiorni(n, fine);
    const conta = (lista, campo) => { const c = {}; lista.forEach((x) => { if (x) { const k = x.slice(0, 10); c[k] = (c[k] || 0) + 1; } }); return g.map((d) => c[d] || 0); };
    switch (nome) {
      case 'visite': return g.map((d) => (S.visite[d] || {}).n || 0);
      case 'visitatori': return g.map((d) => (S.visitatori[d] || {}).n || 0);
      case 'iscritti': return conta(D.utenti.map((u) => u.creato));
      case 'paganti': return conta(Object.values(S.primoAcquisto));
      case 'vendite': return conta(D.acquisti.map((a) => a.creato));
      case 'incasso': { const c = {}; D.acquisti.forEach((a) => { const k = a.creato.slice(0, 10); c[k] = (c[k] || 0) + (Number(a.importo) || 0); }); return g.map((d) => Math.round((c[d] || 0) * 100) / 100); }
      case 'ingressi': { const c = {}; D.ingressi.forEach((r) => { c[r.giorno] = (c[r.giorno] || 0) + r.n; }); return g.map((d) => c[d] || 0); }
    }
    return g.map(() => 0);
  }
  const somma = (a) => a.reduce((s, x) => s + x, 0);

  // ---------- componenti grafici ----------
  function scalaBella(max) { if (max <= 4) return 4; const p = Math.pow(10, Math.floor(Math.log10(max))); const n = max / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }
  function sparkline(valori, colore) {
    const W = 200, H = 34, max = Math.max(1, ...valori), n = valori.length;
    const pt = valori.map((v, i) => [(i / Math.max(1, n - 1)) * W, H - 3 - (v / max) * (H - 6)]);
    const linea = pt.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
    const id = 'g' + Math.random().toString(36).slice(2, 8);
    return '<svg class="spark" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="' + id + '" x1="0" x2="0" y1="0" y2="1"><stop offset="0" style="stop-color:' + colore + ';stop-opacity:.22"/><stop offset="1" style="stop-color:' + colore + ';stop-opacity:0"/></linearGradient></defs>' +
      '<path d="' + linea + 'L' + W + ' ' + H + 'L0 ' + H + 'Z" fill="url(#' + id + ')"/><path d="' + linea + '" fill="none" style="stroke:' + colore + '" stroke-width="1.8" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>' +
      '<circle cx="' + pt[n - 1][0] + '" cy="' + pt[n - 1][1] + '" r="2.6" style="fill:' + colore + '"/></svg>';
  }
  // grafico a linee/aree con mirino e suggerimento; serie: [{nome, valori, colore, formato, barre}]
  function grafico(el, etichette, serieG, opz = {}) {
    const disegnaG = () => {
      const W = Math.max(280, el.clientWidth), H = opz.altezza || 230, sx = 40, dx = 12, su = 12, giu = 26;
      const tutti = serieG.flatMap((s) => s.valori); const max = scalaBella(Math.max(1, ...tutti)); const n = etichette.length;
      const X = (i) => sx + (n === 1 ? (W - sx - dx) / 2 : (i / (n - 1)) * (W - sx - dx)); const Y = (v) => su + (1 - v / max) * (H - su - giu);
      let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" height="' + H + '" role="img" aria-label="' + esc(opz.titolo || 'grafico') + '">';
      s += '<defs>' + serieG.map((x, k) => '<linearGradient id="a' + k + opz.id + '" x1="0" x2="0" y1="0" y2="1"><stop offset="0" style="stop-color:' + x.colore + ';stop-opacity:.25"/><stop offset="1" style="stop-color:' + x.colore + ';stop-opacity:0"/></linearGradient>').join('') + '</defs>';
      const nt = Number.isInteger(max / 4) ? 4 : 5;
      for (let t = 0; t <= nt; t++) { const v = (max / nt) * t, y = Y(v); s += '<line class="griglia-g" x1="' + sx + '" x2="' + (W - dx) + '" y1="' + y + '" y2="' + y + '"/><text class="asse" x="' + (sx - 8) + '" y="' + (y + 4) + '" text-anchor="end">' + (opz.euro ? (v >= 1000 ? Math.round(v / 1000) + 'k' : Math.round(v)) + '€' : nf.format(Math.round(v * 10) / 10)) + '</text>'; }
      const passo = Math.max(1, Math.ceil(n / Math.floor((W - sx) / 62)));
      etichette.forEach((g, i) => { if ((n - 1 - i) % passo === 0) s += '<text class="asse" x="' + X(i) + '" y="' + (H - 6) + '" text-anchor="middle">' + breveData(g) + '</text>'; });
      serieG.forEach((x, k) => {
        if (x.barre) {
          const nb = serieG.filter((y) => y.barre).length, kb = serieG.filter((y) => y.barre).indexOf(x);
          const bw = Math.max(2, Math.min(16, (((W - sx - dx) / n) * 0.62) / nb));
          x.valori.forEach((v, i) => { if (v > 0) s += '<rect x="' + (X(i) - (nb * bw) / 2 + kb * bw) + '" y="' + Y(v) + '" width="' + Math.max(1.5, bw - 1) + '" height="' + (Y(0) - Y(v)) + '" rx="2" style="fill:' + x.colore + '" opacity=".9"/>'; });
          return;
        }
        const pt = x.valori.map((v, i) => [X(i), Y(v)]);
        const d = pt.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
        if (x.area !== false) s += '<path d="' + d + 'L' + X(n - 1) + ' ' + Y(0) + 'L' + X(0) + ' ' + Y(0) + 'Z" fill="url(#a' + k + opz.id + ')"/>';
        s += '<path d="' + d + '" fill="none" style="stroke:' + x.colore + '" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"' + (x.tratteggio ? ' stroke-dasharray="4 4"' : '') + '/>';
        s += '<circle cx="' + pt[n - 1][0] + '" cy="' + pt[n - 1][1] + '" r="3.5" style="fill:' + x.colore + ';stroke:var(--pannello)" stroke-width="2"/>';
      });
      s += '<line class="mirino" id="m' + opz.id + '" y1="' + su + '" y2="' + Y(0) + '" visibility="hidden"/>';
      s += '<rect x="' + sx + '" y="0" width="' + (W - sx - dx) + '" height="' + H + '" fill="transparent" id="r' + opz.id + '"/></svg><div class="suggerimento" hidden></div>';
      el.innerHTML = s;
      const r = el.querySelector('#r' + opz.id), m = el.querySelector('#m' + opz.id), tip = el.querySelector('.suggerimento');
      const muovi = (ev) => {
        const box = el.querySelector('svg').getBoundingClientRect(); const cx = ((ev.touches ? ev.touches[0].clientX : ev.clientX) - box.left) * (W / box.width);
        const i = Math.max(0, Math.min(n - 1, Math.round(((cx - sx) / (W - sx - dx)) * (n - 1))));
        m.setAttribute('x1', X(i)); m.setAttribute('x2', X(i)); m.setAttribute('visibility', 'visible');
        tip.hidden = false; tip.style.left = (X(i) / W) * box.width + 'px'; tip.style.top = (Y(Math.max(...serieG.map((x) => x.valori[i]))) / H) * box.height + 'px';
        tip.innerHTML = '<b>' + new Date(etichette[i] + 'T12:00:00').toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' }) + '</b><br>' +
          serieG.map((x) => '<i style="background:' + x.colore + '"></i>' + esc(x.nome) + ': <b>' + (x.formato ? x.formato(x.valori[i]) : nf.format(x.valori[i])) + '</b>').join('<br>');
      };
      const esci = () => { m.setAttribute('visibility', 'hidden'); tip.hidden = true; };
      r.addEventListener('mousemove', muovi); r.addEventListener('touchmove', muovi, { passive: true }); r.addEventListener('touchstart', muovi, { passive: true });
      r.addEventListener('mouseleave', esci); r.addEventListener('touchend', () => setTimeout(esci, 1500));
    };
    disegnaG(); grafici.push(disegnaG);
  }
  let grafici = [];
  let rit; window.addEventListener('resize', () => { clearTimeout(rit); rit = setTimeout(() => grafici.forEach((f) => f()), 120); });

  function legenda(serieG) { return '<div class="legenda">' + serieG.map((s) => '<span><i style="background:' + s.colore + '"></i>' + esc(s.nome) + '</span>').join('') + '</div>'; }
  function barre(righe, opz = {}) {
    if (!righe.length) return '<div class="vuoto">' + (opz.vuoto || 'Nessun dato nel periodo') + '</div>';
    const max = Math.max(1, ...righe.map((r) => r.valore)), tot = opz.totale || somma(righe.map((r) => r.valore)) || 1;
    return '<div class="barre">' + righe.map((r) => '<div class="barra-riga"><span class="nome">' + (r.colore ? '<i class="punto" style="background:' + r.colore + '"></i>' : '') + esc(r.nome) + '</span><span class="valore">' + (opz.formato ? opz.formato(r.valore) : nf.format(r.valore)) + (opz.quota !== false ? '<small>' + Math.round((r.valore / tot) * 100) + '%</small>' : '') + (r.extra || '') + '</span><div class="traccia"><div style="width:' + ((r.valore / max) * 100).toFixed(1) + '%;background:' + (r.colore || 'var(--acc)') + '"></div></div></div>').join('') + '</div>';
  }
  function kpi(etichetta, valore, attuale, precedente, valori, colore, formato) {
    let delta = '';
    if (precedente > 0) { const p = ((attuale - precedente) / precedente) * 100; const cl = Math.abs(p) < 0.5 ? 'pari' : p > 0 ? 'su' : 'giu'; delta = '<span class="delta ' + cl + '">' + (p > 0 ? '▲ ' : p < 0 ? '▼ ' : '') + Math.abs(Math.round(p)) + '% <span>sui ' + giorni + ' giorni prima</span></span>'; }
    else if (attuale > 0) delta = '<span class="delta su">nuovo <span>sui ' + giorni + ' giorni prima</span></span>';
    else delta = '<span class="delta pari">—</span>';
    return '<div class="card kpi"><span class="etichetta">' + etichetta + '</span><b>' + valore + '</b>' + delta + sparkline(valori, colore) + '</div>';
  }

  // ---------- viste ----------
  function disegna() {
    grafici = [];
    $('#titolo-vista').textContent = VISTE[vista];
    $$('.lato a').forEach((a) => a.classList.toggle('attiva', a.dataset.vista === vista));
    $$('.segmenti button').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.giorni) === giorni)));
    $('.segmenti').hidden = vista === 'strumenti';
    ({ panoramica, studenti, vendite, traffico, strumenti })[vista]();
  }

  function panoramica() {
    const g = elencoGiorni(giorni);
    const v = serie('visitatori', giorni), vp = serie('visitatori', giorni, giorni);
    const pv = serie('visite', giorni), pvp = serie('visite', giorni, giorni);
    const is = serie('iscritti', giorni), isp = serie('iscritti', giorni, giorni);
    const pa = serie('paganti', giorni), pap = serie('paganti', giorni, giorni);
    const inc = serie('incasso', giorni), incp = serie('incasso', giorni, giorni);
    const da = D.inizioVisitatori && D.inizioVisitatori > g[0] ? D.inizioVisitatori : null;
    $('#vista').innerHTML =
      '<div class="kpi-riga">' +
      kpi('Visitatori unici', nf.format(somma(v)), somma(v), somma(vp), v, 'var(--c1)') +
      kpi('Pagine viste', nf.format(somma(pv)), somma(pv), somma(pvp), pv, 'var(--c2)') +
      kpi('Nuovi iscritti', nf.format(somma(is)), somma(is), somma(isp), is, 'var(--c3)') +
      kpi('Nuovi clienti', nf.format(somma(pa)), somma(pa), somma(pap), pa, 'var(--c4)') +
      kpi('Incasso lordo', eur.format(somma(inc)), somma(inc), somma(incp), inc, 'var(--c5)') +
      '</div>' +
      '<div class="due"><section class="card"><header><h2>Visitatori unici</h2><span class="nota">' + (da ? 'contati dal ' + breveData(da) : 'ultimi ' + giorni + ' giorni') + '</span></header>' +
      '<div class="corpo"><div class="grafico" id="g-andamento"></div></div></section>' +
      '<section class="card"><header><h2>Dalla visita al pagamento</h2><span class="nota">' + giorni + ' giorni</span></header><div class="corpo">' + imbuto(somma(v), somma(is), somma(pa)) + '</div></section></div>' +
      '<div class="due"><section class="card"><header><h2>Iscrizioni e nuovi clienti</h2><span class="nota">al giorno</span></header>' +
      legenda([{ nome: 'Nuovi iscritti', colore: 'var(--c3)' }, { nome: 'Nuovi clienti', colore: 'var(--c4)' }]) + '<div class="corpo"><div class="grafico" id="g-iscritti"></div></div></section>' +
      '<section class="card"><header><h2>Da dove arrivano</h2><span class="nota">ingressi dall\u2019esterno</span></header><div class="corpo">' + barreFonti(6) + '</div></section></div>' +
      '<section class="card"><header><h2>Ultime attività</h2><a class="nota" href="#studenti">tutti gli studenti →</a></header><div class="corpo">' + attivita(10) + '</div></section>';
    grafico($('#g-andamento'), g, [{ nome: 'Visitatori unici', valori: v, colore: 'var(--c1)' }, { nome: 'Pagine viste', valori: pv, colore: 'var(--c2)', area: false, tratteggio: true }], { id: 'and', titolo: 'Visitatori unici', altezza: 210 });
    grafico($('#g-iscritti'), g, [{ nome: 'Nuovi iscritti', valori: is, colore: 'var(--c3)', barre: true }, { nome: 'Nuovi clienti', valori: pa, colore: 'var(--c4)', barre: true }], { id: 'isc', titolo: 'Iscrizioni', altezza: 190 });
  }
  function imbuto(vis, isc, pag) {
    const max = Math.max(1, vis, isc, pag);
    const passo = (n, t, base, di) => '<div class="passo"><span>' + t + '</span><b>' + nf.format(n) + '</b><span class="perc">' + (base ? ((n / base) * 100).toFixed(1).replace('.', ',') + '% ' + di : di ? '— ' + di : '') + '</span><div class="fascia"><div style="width:' + Math.max(0.8, (n / max) * 100) + '%"></div></div></div>';
    return '<div class="imbuto">' + passo(vis, 'Visitatori', 0, '') + passo(isc, 'Iscritti', vis, 'dei visitatori') + passo(pag, 'Paganti', isc, 'degli iscritti') + '</div>';
  }
  function fontiPeriodo() {
    const inizio = elencoGiorni(giorni)[0]; const F = {};
    D.ingressi.forEach((r) => { if (r.giorno >= inizio) F[r.fonte] = (F[r.fonte] || 0) + r.n; });
    return Object.entries(F).sort((a, b) => b[1] - a[1]);
  }
  function barreFonti(lim) {
    const f = fontiPeriodo(); const righe = f.slice(0, lim).map(([k, n]) => ({ nome: k, valore: n, colore: COLORI_FONTI[k] || '#7a8a87' }));
    return barre(righe, { totale: somma(f.map((x) => x[1])), vuoto: 'Nessun ingresso registrato in questo periodo' });
  }
  function attivita(lim) {
    const ev = [];
    D.utenti.forEach((u) => ev.push({ t: u.creato, tipo: 'iscrizione', s: '+', txt: '<b>' + esc(u.nome || u.email) + '</b> si è iscritto' + (u.fonte ? ' <span class="nota">da ' + esc(u.fonte) + '</span>' : '') + (u.corso ? ' <span class="chip corso">corso: ' + esc(u.corso) + '</span>' : ''), email: u.email }));
    D.acquisti.forEach((a) => ev.push({ t: a.creato, tipo: 'pagamento', s: '€', txt: '<b>' + esc(a.email) + '</b> ha comprato ' + esc(breveMateria(a.materia)) + ' · ' + eur.format(a.importo), email: a.email }));
    D.abilitazioni.filter((a) => a.origine === 'manuale').forEach((a) => ev.push({ t: a.creato, tipo: 'manuale', s: '✓', txt: 'Attivata ' + esc(breveMateria(a.materia)) + ' a <b>' + esc(a.email) + '</b>', email: a.email }));
    ev.sort((a, b) => String(b.t).localeCompare(String(a.t)));
    if (!ev.length) return '<div class="vuoto"><b>Ancora nessuna attività</b>Iscrizioni e pagamenti compariranno qui.</div>';
    return '<ul class="attivita">' + ev.slice(0, lim).map((e) => '<li data-email="' + esc(e.email) + '" style="cursor:pointer"><span class="bollo ' + e.tipo + '">' + e.s + '</span><span class="testo">' + e.txt + '</span><time>' + fa(e.t) + '</time></li>').join('') + '</ul>';
  }

  function studenti() {
    const conta = (t) => S.studenti.filter((s) => passaFiltro(s, t)).length;
    const fonti = [...new Set(S.studenti.map((s) => s.fonte).filter(Boolean))].sort();
    const filtri = [['tutti', 'Tutti'], ['pagante', 'Paganti'], ['manuale', 'Attivati a mano'], ['gratis', 'Solo gratis'], ['attesa', 'Da registrare'], ['corso', 'Dai miei corsi']];
    $('#vista').innerHTML = '<section class="card"><div class="strumenti-tab">' +
      '<label class="cerca"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="cerca" placeholder="Cerca per nome o email" value="' + esc(stato.cerca) + '" aria-label="Cerca studenti"><kbd>/</kbd></label>' +
      '<select class="scelta" id="sel-fonte" aria-label="Provenienza"><option value="">Tutte le provenienze</option>' + fonti.map((f) => '<option' + (f === stato.fonte ? ' selected' : '') + '>' + esc(f) + '</option>').join('') + '</select>' +
      '<button class="bottone" id="csv" type="button">Esporta CSV</button></div>' +
      '<div class="strumenti-tab" style="padding-top:0"><div class="filtri">' + filtri.map(([k, t]) => '<button type="button" class="filtro" data-filtro="' + k + '" aria-pressed="' + (stato.filtro === k) + '">' + t + '<small>' + conta(k) + '</small></button>').join('') + '</div></div>' +
      '<div class="tabella"><table><thead><tr>' +
      [['nome', 'Studente'], ['fonte', 'Arrivato da', 'solo-largo'], ['creato', 'Iscritto', 'solo-largo'], ['ultimo', 'Ultimo accesso', 'solo-largo'], ['', 'Materie'], ['spesa', 'Speso', 'destra solo-largo']].map(([k, t, c]) => '<th' + (k ? ' data-ordina="' + k + '"' : '') + (c ? ' class="' + c + '"' : '') + '>' + t + (k === stato.ordina ? '<span class="freccia">' + (stato.verso > 0 ? '↑' : '↓') + '</span>' : '') + '</th>').join('') +
      '</tr></thead><tbody id="corpo-studenti"></tbody></table></div></section>';
    righeStudenti();
    $('#cerca').addEventListener('input', (e) => { stato.cerca = e.target.value; righeStudenti(); });
    $('#sel-fonte').addEventListener('change', (e) => { stato.fonte = e.target.value; righeStudenti(); });
    $$('[data-filtro]').forEach((b) => b.addEventListener('click', () => { stato.filtro = b.dataset.filtro; studenti(); }));
    $$('th[data-ordina]').forEach((th) => th.addEventListener('click', () => { const k = th.dataset.ordina; stato.verso = stato.ordina === k ? -stato.verso : (k === 'nome' || k === 'fonte' ? 1 : -1); stato.ordina = k; studenti(); }));
    $('#csv').addEventListener('click', esportaCSV);
  }
  function passaFiltro(s, t) { return t === 'tutti' || (t === 'corso' ? !!s.corso : s.tipo === t); }
  function filtrati() {
    const q = stato.cerca.trim().toLowerCase();
    const val = { nome: (s) => (s.nome || s.email).toLowerCase(), fonte: (s) => (s.fonte || '~').toLowerCase(), creato: (s) => s.creato || '', ultimo: (s) => s.ultimo_accesso || '', spesa: (s) => s.spesa };
    return S.studenti.filter((s) => passaFiltro(s, stato.filtro) && (!stato.fonte || s.fonte === stato.fonte) && (!q || (s.email + ' ' + (s.nome || '')).toLowerCase().includes(q)))
      .sort((a, b) => { const x = val[stato.ordina](a), y = val[stato.ordina](b); return (x > y ? 1 : x < y ? -1 : 0) * stato.verso; });
  }
  function chipStato(s) { return { pagante: '<span class="chip pagante">Pagante</span>', manuale: '<span class="chip manuale">Attivato a mano</span>', gratis: '<span class="chip">Solo gratis</span>', attesa: '<span class="chip attesa">Da registrare</span>' }[s.tipo]; }
  function righeStudenti() {
    const r = filtrati(), corpo = $('#corpo-studenti');
    if (!r.length) { corpo.innerHTML = '<tr><td colspan="6"><div class="vuoto"><b>Nessuno studente trovato</b>Cambia la ricerca o il filtro.</div></td></tr>'; return; }
    corpo.innerHTML = r.map((s) => '<tr class="cliccabile" data-email="' + esc(s.email) + '" tabindex="0">' +
      '<td><div class="persona"><span class="avatar" style="background:' + coloreDa(s.email) + '">' + esc(iniziali(s)) + '</span><span class="chi"><b>' + esc(s.nome || s.email.split('@')[0]) + '</b><span class="mail">' + esc(s.email) + '</span></span></div></td>' +
      '<td class="solo-largo">' + (s.fonte ? '<span class="chip' + (s.fonte === 'Instagram' ? ' fonte-instagram' : '') + '">' + esc(s.fonte) + '</span>' : '<span class="nota">—</span>') + '</td>' +
      '<td class="solo-largo" title="' + esc(dataOra(s.creato)) + '">' + (s.registrato ? fa(s.creato) : '<span class="nota">—</span>') + '</td>' +
      '<td class="solo-largo" title="' + esc(dataOra(s.ultimo_accesso)) + '">' + fa(s.ultimo_accesso) + '</td>' +
      '<td><div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap"><span class="puntini">' + s.abil.map((a) => '<i class="punto" title="' + esc(nomeMateria(a.materia)) + '" style="background:' + (M[a.materia] || {}).colore + '"></i>').join('') + '</span>' + chipStato(s) + (s.corso ? '<span class="chip corso" title="Corso seguito: ' + esc(s.corso) + '">Corso: ' + esc(s.corso.length > 24 ? s.corso.slice(0, 23) + '…' : s.corso) + '</span>' : '') + '</div></td>' +
      '<td class="destra cifra solo-largo">' + (s.spesa ? eur.format(s.spesa) : '<span class="nota">—</span>') + '</td></tr>').join('');
  }
  function esportaCSV() {
    const righe = [['email', 'nome', 'provenienza', 'corso_seguito', 'iscritto', 'ultimo_accesso', 'materie', 'stato', 'speso_eur']].concat(filtrati().map((s) => [s.email, s.nome || '', s.fonte || '', s.corso || '', s.creato || '', s.ultimo_accesso || '', s.abil.map((a) => a.materia).join(' '), s.tipo, s.spesa.toFixed(2)]));
    const csv = righe.map((r) => r.map((c) => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv' })); a.download = 'studenti-' + oggiISO() + '.csv'; a.click();
    avviso('CSV scaricato: ' + (righe.length - 1) + ' righe');
  }

  // ---------- scheda dello studente ----------
  function apriStudente(email, ricarica) {
    const s = S.studenti.find((x) => x.email === email); if (!s) { chiudiStudente(); return; }
    stato.aperto = email;
    const c = $('#cassetto'), sbloccate = new Set(s.abil.map((a) => a.materia));
    const daAttivare = A_PAGAMENTO.filter((m) => !sbloccate.has(m));
    c.innerHTML = '<header><span class="avatar" style="background:' + coloreDa(s.email) + '">' + esc(iniziali(s)) + '</span><div><h2>' + esc(s.nome || s.email.split('@')[0]) + '</h2><p>' + esc(s.email) + '</p><div style="margin-top:.35rem">' + chipStato(s) + '</div></div><button class="chiudi" type="button" aria-label="Chiudi">×</button></header>' +
      '<div class="dentro">' +
      (s.corso ? '<section class="corso-dichiarato"><h3>Ha seguito un tuo corso</h3><p><b>' + esc(s.corso) + '</b></p><p class="nota">Lo ha indicato all\u2019iscrizione. Se è corretto, attiva qui sotto le materie da sbloccare gratis.</p></section>' : '') +
      '<section><h3>Dati</h3><dl class="dati"><dt>Iscritto</dt><dd>' + (s.registrato ? dataOra(s.creato) : 'non ancora registrato') + '</dd><dt>Ultimo accesso</dt><dd>' + dataOra(s.ultimo_accesso) + '</dd><dt>Arrivato da</dt><dd>' + esc(s.fonte || '—') + '</dd><dt>Corso seguito</dt><dd>' + esc(s.corso || '—') + '</dd><dt>Speso</dt><dd>' + eur.format(s.spesa) + '</dd></dl></section>' +
      '<section><h3>Materie sbloccate</h3>' + (s.abil.length ? '<div class="elenco-m">' + s.abil.map((a) => '<div class="riga-m"><i class="punto" style="background:' + (M[a.materia] || {}).colore + '"></i>' + esc(nomeMateria(a.materia)) + '<span class="chip ' + (a.origine === 'manuale' ? 'manuale' : 'pagante') + '">' + (a.origine === 'manuale' ? 'a mano' : 'acquisto') + '</span><button type="button" data-revoca="' + esc(a.materia) + '">Revoca</button></div>').join('') + '</div>' : '<p class="nota" style="margin:0">Nessuna materia sbloccata.</p>') + '</section>' +
      (daAttivare.length ? '<section><h3>Attiva altre materie</h3><div class="scelte">' + daAttivare.map((m) => '<label class="scelta-m" style="--c:' + M[m].colore + '"><input type="checkbox" value="' + m + '"><i class="punto"></i>' + esc(breveMateria(m)) + '</label>').join('') + '</div><div class="azioni" style="margin-top:.7rem"><button type="button" class="bottone primario" id="c-attiva">Attiva le materie scelte</button></div></section>' : '') +
      '<section><h3>Dispositivi (al massimo 2)</h3>' + (s.dispositivi.length ? '<div class="elenco-m">' + s.dispositivi.map((d) => '<div class="riga-m">' + esc(d.nome) + '<span class="nota" style="margin-left:auto">usato ' + fa(d.ultimo_uso) + '</span></div>').join('') + '</div><div class="azioni" style="margin-top:.6rem"><button type="button" class="bottone pericolo" id="c-scollega">Scollega tutti</button></div>' : '<p class="nota" style="margin:0">Nessun dispositivo collegato.</p>') + '</section>' +
      (s.acquisti.length ? '<section><h3>Pagamenti</h3><div class="elenco-m">' + s.acquisti.map((a) => '<div class="riga-m">' + esc(breveMateria(a.materia)) + '<span class="nota">' + dataOra(a.creato) + '</span><b style="margin-left:auto">' + eur.format(a.importo) + '</b></div>').join('') + '</div></section>' : '') +
      (s.registrato ? '<section><h3>Accesso</h3><div class="azioni"><button type="button" class="bottone" id="c-reset">Genera password provvisoria</button></div><div id="c-esito"></div></section>' : '') +
      '</div>';
    if (!ricarica) { const v = $('#velo'); v.hidden = false; requestAnimationFrame(() => { v.classList.add('aperto'); c.classList.add('aperto'); }); c.setAttribute('aria-hidden', 'false'); setTimeout(() => $('.chiudi', c).focus(), 60); }
    $('.chiudi', c).addEventListener('click', chiudiStudente);
    $$('[data-revoca]', c).forEach((b) => b.addEventListener('click', async () => {
      const m = b.dataset.revoca; if (!(await conferma('Revocare ' + nomeMateria(m) + '?', s.email + ' non potrà più aprire le pagine a pagamento di questa materia.', 'Revoca'))) return;
      await api('revoca', { email: s.email, materia: m }); avviso(nomeMateria(m) + ' revocata'); carica(true);
    }));
    const att = $('#c-attiva', c); if (att) att.addEventListener('click', async () => {
      const materie = $$('.scelta-m input:checked', c).map((i) => i.value); if (!materie.length) { avviso('Scegli almeno una materia'); return; }
      const r = await api('abilita', { email: s.email, materie }); if (r.errore) { avviso(r.errore); return; }
      avviso('Attivate: ' + materie.map(breveMateria).join(', ')); carica(true);
    });
    const sc = $('#c-scollega', c); if (sc) sc.addEventListener('click', async () => {
      if (!(await conferma('Scollegare tutti i dispositivi?', 'Lo studente dovrà accedere di nuovo con email e password.', 'Scollega'))) return;
      await api('scollega', { email: s.email }); avviso('Dispositivi scollegati'); carica(true);
    });
    const rs = $('#c-reset', c); if (rs) rs.addEventListener('click', async () => {
      if (!(await conferma('Generare una password provvisoria?', 'La password attuale smette di funzionare e i dispositivi vengono scollegati.', 'Genera'))) return;
      const r = await api('reset', { email: s.email }); $('#c-esito', c).innerHTML = risultatoPassword(s.email, r);
      collegaCopia(c);
    });
  }
  function chiudiStudente() {
    stato.aperto = null; const c = $('#cassetto'), v = $('#velo');
    c.classList.remove('aperto'); v.classList.remove('aperto'); c.setAttribute('aria-hidden', 'true'); setTimeout(() => { v.hidden = true; }, 220);
  }
  function risultatoPassword(email, r) {
    if (r.errore) return '<div class="risultato" style="margin-top:.7rem">' + esc(r.errore) + '</div>';
    return '<div class="risultato" style="margin-top:.7rem">Password provvisoria per <b>' + esc(email) + '</b><div style="display:flex;align-items:center;gap:.6rem;margin:.4rem 0"><code>' + esc(r.password) + '</code><button type="button" class="bottone" data-copia="' + esc(r.password) + '">Copia</button></div><span class="nota">Comunicala allo studente: potrà cambiarla dal suo account.</span></div>';
  }
  function collegaCopia(r) { $$('[data-copia]', r).forEach((b) => b.addEventListener('click', () => { navigator.clipboard.writeText(b.dataset.copia).then(() => avviso('Copiata'), () => avviso('Selezionala e copiala a mano')); })); }

  function vendite() {
    const g = elencoGiorni(giorni), inc = serie('incasso', giorni), incp = serie('incasso', giorni, giorni), ve = serie('vendite', giorni), vep = serie('vendite', giorni, giorni);
    const inizio = g[0]; const nel = D.acquisti.filter((a) => a.creato.slice(0, 10) >= inizio);
    const perM = {}; nel.forEach((a) => { const x = perM[a.materia] ||= { n: 0, e: 0 }; x.n++; x.e += Number(a.importo) || 0; });
    const medio = nel.length ? somma(nel.map((a) => Number(a.importo) || 0)) / nel.length : 0;
    $('#vista').innerHTML = '<div class="kpi-riga">' +
      kpi('Incasso lordo', eur.format(somma(inc)), somma(inc), somma(incp), inc, 'var(--c5)') +
      kpi('Vendite', nf.format(somma(ve)), somma(ve), somma(vep), ve, 'var(--c4)') +
      '<div class="card kpi"><span class="etichetta">Scontrino medio</span><b>' + (nel.length ? eur.format(medio) : '—') + '</b><span class="delta pari">' + giorni + ' giorni</span></div>' +
      '<div class="card kpi"><span class="etichetta">Incasso da sempre</span><b>' + eur.format(somma(D.totali.map((t) => t.incasso || 0))) + '</b><span class="delta pari">' + nf.format(somma(D.totali.map((t) => t.vendite))) + ' vendite in tutto</span></div></div>' +
      '<div class="due"><section class="card"><header><h2>Incasso giornaliero</h2><span class="nota">lordo, IVA e commissioni Paddle comprese</span></header><div class="corpo"><div class="grafico" id="g-incasso"></div></div></section>' +
      '<section class="card"><header><h2>Per materia</h2><span class="nota">' + giorni + ' giorni</span></header><div class="corpo">' +
      barre(A_PAGAMENTO.map((m) => ({ nome: breveMateria(m), valore: Math.round(((perM[m] || {}).e || 0) * 100) / 100, colore: M[m].colore, extra: '' })).filter((r) => r.valore > 0).sort((a, b) => b.valore - a.valore), { formato: (x) => eur.format(x), vuoto: 'Nessuna vendita nel periodo' }) +
      '<p class="nota" style="margin:1rem 0 .3rem">Prezzi attuali</p><div class="scelte">' + A_PAGAMENTO.map((m) => '<span class="chip"><i class="punto" style="background:' + M[m].colore + '"></i>' + esc(breveMateria(m)) + ' · ' + (M[m].prezzo ? eur.format(M[m].prezzo) : '—') + '</span>').join('') + '</div></div></section></div>' +
      '<section class="card"><header><h2>Pagamenti</h2><span class="nota">' + nf.format(D.acquisti.length) + ' in tutto</span></header><div class="tabella"><table><thead><tr><th>Data</th><th>Studente</th><th>Materia</th><th class="destra">Importo</th><th class="solo-largo">Transazione</th></tr></thead><tbody>' +
      (D.acquisti.length ? D.acquisti.map((a) => '<tr class="cliccabile" data-email="' + esc(a.email) + '"><td>' + dataOra(a.creato) + '</td><td>' + esc(a.email) + '</td><td><i class="punto" style="background:' + (M[a.materia] || {}).colore + ';margin-right:.4rem"></i>' + esc(breveMateria(a.materia)) + '</td><td class="destra cifra"><b>' + eur.format(a.importo) + '</b></td><td class="nota solo-largo">' + esc(a.transazione) + '</td></tr>').join('') :
        '<tr><td colspan="5"><div class="vuoto"><b>Nessun pagamento ancora</b>Le vendite arrivano qui appena Paddle conferma il pagamento.</div></td></tr>') + '</tbody></table></div></section>';
    grafico($('#g-incasso'), g, [{ nome: 'Incasso', valori: inc, colore: 'var(--c5)', formato: (x) => eur.format(x) }], { id: 'inc', euro: true, titolo: 'Incasso giornaliero' });
  }

  function traffico() {
    const g = elencoGiorni(giorni), v = serie('visitatori', giorni), pv = serie('visite', giorni), ing = serie('ingressi', giorni);
    const inizio = g[0]; const vis = D.visitatori.filter((r) => r.giorno >= inizio); const tot = somma(vis.map((r) => r.n)), mob = somma(vis.map((r) => r.mobile || 0));
    const f = fontiPeriodo(); const totF = somma(f.map((x) => x[1])) || 1;
    const isc = {}; (D.fontiIscritti || []).forEach((r) => { isc[r.fonte] = r; });
    const sez = (D.sezioni && D.sezioni[giorni]) || [];
    $('#vista').innerHTML =
      '<div class="kpi-riga">' +
      kpi('Visitatori unici', nf.format(somma(v)), somma(v), somma(serie('visitatori', giorni, giorni)), v, 'var(--c1)') +
      kpi('Pagine viste', nf.format(somma(pv)), somma(pv), somma(serie('visite', giorni, giorni)), pv, 'var(--c2)') +
      '<div class="card kpi"><span class="etichetta">Pagine per visitatore</span><b>' + (somma(v) ? (somma(pv) / somma(v)).toFixed(1).replace('.', ',') : '—') + '</b><span class="delta pari">media del periodo</span></div>' +
      '<div class="card kpi"><span class="etichetta">Da telefono</span><b>' + (tot ? Math.round((mob / tot) * 100) + '%' : '—') + '</b><span class="delta pari">' + (tot ? nf.format(tot - mob) + ' da computer' : 'nessun dato') + '</span></div></div>' +
      '<section class="card" style="margin-bottom:1rem"><header><h2>Visite</h2><span class="nota">solo persone: robot e anteprime dei link esclusi</span></header>' + legenda([{ nome: 'Visitatori unici', colore: 'var(--c1)' }, { nome: 'Pagine viste', colore: 'var(--c2)' }, { nome: 'Ingressi dall’esterno', colore: 'var(--c6)' }]) +
      '<div class="corpo"><div class="grafico" id="g-visite"></div></div></section>' +
      '<div class="due pari"><section class="card"><header><h2>Provenienza</h2><span class="nota">' + giorni + ' giorni</span></header><div class="tabella"><table><thead><tr><th>Fonte</th><th class="destra">Ingressi</th><th class="destra">Quota</th><th class="destra" title="Iscritti da sempre con questa provenienza">Iscritti</th><th class="destra">Paganti</th></tr></thead><tbody>' +
      (f.length ? f.map(([k, n]) => '<tr><td><span style="display:flex;align-items:center;gap:.45rem"><i class="punto" style="background:' + (COLORI_FONTI[k] || '#7a8a87') + '"></i>' + esc(k) + '</span></td><td class="destra"><b>' + nf.format(n) + '</b></td><td class="destra">' + Math.round((n / totF) * 100) + '%</td><td class="destra">' + ((isc[k] || {}).iscritti || 0) + '</td><td class="destra">' + ((isc[k] || {}).paganti || 0) + '</td></tr>').join('') :
        '<tr><td colspan="5"><div class="vuoto">Nessun ingresso registrato in questo periodo</div></td></tr>') +
      '</tbody></table></div><p class="nota" style="padding:0 1.2rem 1rem;margin:.6rem 0 0">Instagram comprende bio, storie e DM aperti nell’app. “Diretto o app”: indirizzi scritti a mano, preferiti e link da WhatsApp, Telegram o email, che non dicono la provenienza.</p></section>' +
      '<section class="card"><header><h2>Pagine più viste</h2><span class="nota">' + giorni + ' giorni</span></header><div class="corpo">' +
      barre(sez.map((r) => { const m = r.sezione.split('/')[0]; return { nome: nomeSezione(r.sezione), valore: r.n, colore: (M[m] || {}).colore || '#7a8a87' }; }), { quota: false, vuoto: 'Nessuna visita nel periodo' }) + '</div></section></div>';
    grafico($('#g-visite'), g, [{ nome: 'Pagine viste', valori: pv, colore: 'var(--c2)', area: false }, { nome: 'Visitatori unici', valori: v, colore: 'var(--c1)' }, { nome: 'Ingressi dall’esterno', valori: ing, colore: 'var(--c6)', area: false, tratteggio: true }], { id: 'vis', titolo: 'Visite' });
  }

  function strumenti() {
    $('#vista').innerHTML = '<div class="due pari">' +
      '<section class="card"><header><h2>Attiva materie a mano</h2></header><div class="corpo"><form class="modulo" id="f-attiva">' +
      '<p class="nota" style="margin:0">Per chi ha pagato in altro modo. Se lo studente non ha ancora un account, trova le materie appena si registra con questa email.</p>' +
      '<div class="campo"><label for="a-email">Email dello studente</label><input id="a-email" type="email" required placeholder="nome@esempio.it" list="email-note"></div>' +
      '<datalist id="email-note">' + S.studenti.map((s) => '<option value="' + esc(s.email) + '">').join('') + '</datalist>' +
      '<div class="campo"><label>Materie</label><div class="scelte">' + A_PAGAMENTO.map((m) => '<label class="scelta-m" style="--c:' + M[m].colore + '"><input type="checkbox" value="' + m + '"><i class="punto"></i>' + esc(breveMateria(m)) + '</label>').join('') + '</div></div>' +
      '<div class="azioni"><button class="bottone primario" type="submit">Attiva</button></div><div id="esito-attiva"></div></form></div></section>' +
      '<section class="card"><header><h2>Password provvisoria</h2></header><div class="corpo"><form class="modulo" id="f-reset">' +
      '<p class="nota" style="margin:0">Per chi ha dimenticato la password. La vecchia smette di funzionare e i suoi dispositivi vengono scollegati.</p>' +
      '<div class="campo"><label for="r-email">Email dell’account</label><input id="r-email" type="email" required placeholder="nome@esempio.it" list="email-note"></div>' +
      '<div class="azioni"><button class="bottone" type="submit">Genera password provvisoria</button></div><div id="esito-reset"></div></form></div></section>' +
      '<section class="card"><header><h2>Collegamenti rapidi</h2></header><div class="corpo"><div class="azioni">' +
      '<a class="bottone" href="https://vendors.paddle.com/transactions-v2" target="_blank" rel="noopener">Paddle · transazioni</a>' +
      '<a class="bottone" href="https://vendors.paddle.com/payouts" target="_blank" rel="noopener">Paddle · pagamenti a te</a>' +
      '<a class="bottone" href="https://dash.cloudflare.com/" target="_blank" rel="noopener">Cloudflare</a>' +
      '<a class="bottone" href="/" target="_blank" rel="noopener">Il sito</a></div></div></section></div>';
    $('#f-attiva').addEventListener('submit', async (e) => {
      e.preventDefault(); const email = $('#a-email').value.trim(); const materie = $$('#f-attiva .scelta-m input:checked').map((i) => i.value);
      if (!materie.length) { avviso('Scegli almeno una materia'); return; }
      const r = await api('abilita', { email, materie });
      $('#esito-attiva').innerHTML = '<div class="risultato">' + (r.errore ? esc(r.errore) : 'Fatto: ' + materie.map(breveMateria).join(', ') + ' per <b>' + esc(email) + '</b>. ' + (r.account ? 'Le vede già nel suo account.' : 'Le troverà appena si registra con questa email.')) + '</div>';
      if (!r.errore) { e.target.reset(); carica(true); }
    });
    $('#f-reset').addEventListener('submit', async (e) => {
      e.preventDefault(); const email = $('#r-email').value.trim();
      if (!(await conferma('Generare una password provvisoria?', 'La password attuale di ' + email + ' smette di funzionare.', 'Genera'))) return;
      const r = await api('reset', { email }); $('#esito-reset').innerHTML = risultatoPassword(email, r); collegaCopia($('#esito-reset'));
    });
  }

  // ---------- avvisi e conferme nella pagina ----------
  let tt; function avviso(t) { const el = $('#toast'); el.textContent = t; el.classList.add('visibile'); clearTimeout(tt); tt = setTimeout(() => el.classList.remove('visibile'), 2600); }
  function conferma(titolo, testo, azione) {
    return new Promise((ok) => {
      const d = document.createElement('div'); d.className = 'dialogo';
      d.innerHTML = '<div class="scatola" role="alertdialog" aria-modal="true"><h3>' + esc(titolo) + '</h3><p>' + esc(testo) + '</p><div class="azioni"><button type="button" class="bottone" data-r="0">Annulla</button><button type="button" class="bottone primario" data-r="1">' + esc(azione) + '</button></div></div>';
      document.body.appendChild(d); $('[data-r="1"]', d).focus();
      const fine = (v) => { d.remove(); ok(v); };
      d.addEventListener('click', (e) => { if (e.target === d) fine(false); const b = e.target.closest('[data-r]'); if (b) fine(b.dataset.r === '1'); });
      d.addEventListener('keydown', (e) => { if (e.key === 'Escape') fine(false); });
    });
  }

  // ---------- navigazione e avvio ----------
  function daHash() { const h = location.hash.slice(1); vista = VISTE[h] ? h : 'panoramica'; if (D) disegna(); }
  window.addEventListener('hashchange', daHash);
  $$('.segmenti button').forEach((b) => b.addEventListener('click', () => { giorni = Number(b.dataset.giorni); try { localStorage.setItem('dash-giorni', giorni); } catch {} disegna(); }));
  $('#aggiorna').addEventListener('click', () => carica());
  $('#velo').addEventListener('click', chiudiStudente);
  document.addEventListener('click', (e) => { const r = e.target.closest('tr.cliccabile[data-email], .attivita li[data-email]'); if (r) apriStudente(r.dataset.email); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && stato.aperto) chiudiStudente();
    if (e.key === 'Enter' && e.target.matches('tr.cliccabile')) apriStudente(e.target.dataset.email);
    if (e.key === '/' && !e.target.matches('input,textarea,select')) { e.preventDefault(); if (vista !== 'studenti') location.hash = 'studenti'; setTimeout(() => { const c = $('#cerca'); if (c) c.focus(); }, 30); }
  });
  $('#modulo-login').addEventListener('submit', async (e) => {
    e.preventDefault(); const r = await fetch('/admin/api/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ pw: $('#pw').value }) });
    if (r.ok) { $('#login-errore').textContent = ''; carica(); } else $('#login-errore').textContent = 'Password sbagliata.';
  });
  $('#esci').addEventListener('click', () => { document.cookie = 'admin=; Max-Age=0; Path=/admin'; fetch('/admin/api/esci', { method: 'POST' }).finally(() => location.reload()); });
  setInterval(() => { if (document.visibilityState === 'visible' && !stato.aperto) carica(true); }, 60000);
  setInterval(segnaAggiornato, 30000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && aggiornato && Date.now() - aggiornato > 60000) carica(true); });
  daHash();
  carica(true);
}
