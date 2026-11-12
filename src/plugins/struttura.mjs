// Schemi strutturali per la Statica, generati a tempo di build (SVG): travi, telai, archi, travature,
// vincoli, carichi, quote, sezioni per la geometria delle masse e diagrammi delle sollecitazioni.
//
// ::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="3 0,0,-1.2,F" titolo="…"}
//
// Coordinate in metri (o in unità qualsiasi), y verso l'alto; la scala si sceglie da sola.
// Un "punto" è il nome di un nodo (A) oppure due numeri separati da uno spazio (3 1.5).
//
//   nodi         "A,0,0;B,6,0;C,6,3"  nodi con nome e coordinate; il nome compare accanto al nodo
//                (nomi=0 li nasconde; "A,0,0,-" nasconde solo quello)
//   aste         "A-B;B-C;C-D"  aste a tratto spesso tra due nodi (travi, pilastri, aste di travature)
//   catene       "A-B"  catene e tiranti: aste a tratto sottile tra due nodi (lavorano solo a trazione)
//   cerniere     "B;C"  cerniere interne: cerchietto vuoto sul nodo
//   interni     "B,doppio-pendolo,0;C,pendolo,90"  vincoli interni nel nodo tra due aste: doppio pendolo interno (due
//                bielle parallele alla direzione in gradi, 0 = orizzontali) o pendolo interno (una biella)
//   reticolare=1 cerchietto vuoto su ogni nodo non vincolato (travature reticolari)
//   vincoli      "A,cerniera;B,carrello;C,incastro,180;D,pendolo,225;E,doppio-pendolo,270"
//                tipo e direzione in gradi dal nodo verso il terreno (predefinita 270 = terreno sotto):
//                cerniera · carrello (la reazione ha la direzione indicata) · incastro (180 = parete a sinistra)
//                · pendolo (biella nella direzione indicata) · doppio-pendolo (bielle parallele alla direzione
//                indicata: impedisce la traslazione lungo di essa e la rotazione)
//   forze        "B,0,-1.2,F;3 0,1,0,H"  forza concentrata nel punto: componenti dx, dy della freccia
//                (in unità del disegno) ed etichetta; la punta sta sul punto. Etichette con pedice: R_A, V_B
//   reazioni     come forze, nel secondo colore (reazioni vincolari nei diagrammi di corpo libero)
//   carichi      "A,B,0.8,0.8,q"  carico distribuito tra due punti: altezze del diagramma nei due estremi
//                (unità del disegno; 0 per il carico triangolare), etichetta e, facoltativa, la direzione
//                delle frecce in gradi (predefinita 270 = verso il basso)
//   coppie       "B,1,M;C,-1,W"  coppia concentrata: 1 antioraria, -1 oraria
//   quote        "A,B,3 m;B,C,2 m,0.9"  quota tra due punti, parallela al segmento, con distanza facoltativa
//                (positiva a destra del verso da primo a secondo punto; predefinita 0.7)
//   punti        "2,1.5,G,baricentro;4,0,C₁;5,1,P,pieno"  punti: baricentro (simbolo), centro (centro di
//                rotazione, cerchietto con croce), pieno (predefinito)
//   poligoni     "0,0 4,0 4,1 0,1;…"  regioni colorate (sezioni); fori="…" regioni tolte (bianche)
//   cerchi       "x,y,r;x,y,r,foro"  cerchi pieni o fori circolari
//   linee        "x,y x,y …;…"  spezzate sottili a tratto pieno (terreno, profili)
//   tratteggi    "x,y x,y …;…"  spezzate tratteggiate (assi di simmetria, configurazione spostata)
//   frecce       "x0,y0,x1,y1,etichetta"  frecce sottili (assi di una sezione, spostamenti)
//   etichette    "x,y,testo"  testi in posizione (pedici con _ : M_A)
//   Nei testi delle etichette e delle quote i decimali si scrivono con il punto (2.5 m): il disegno mostra 2,5 m.
//   diagramma    "x0,y0,x1,y1,espressione;…"  diagramma di una sollecitazione lungo uno o più tratti rettilinei:
//                l'espressione è nella variabile s (da 0 alla lunghezza del tratto, dal primo punto) e il valore
//                positivo si disegna a sinistra del verso del tratto (per un tratto da sinistra a destra: sopra).
//                verso=-1 inverte tutto (momento dalla parte delle fibre tese). Valori agli estremi e nei punti
//                di massimo o minimo interni scritti da soli (numeri=0 li toglie); segni=1 mette ⊕ e ⊖;
//                scala= unità del disegno per unità di sollecitazione (predefinita: il massimo vale 1/5 della struttura)
//
//   Idraulica (gli stessi attributi valgono per la direttiva ::schema):
//   acqua        "0,0 6,0 6,3 0,3;…"  regione d'acqua, riempita nel colore della materia
//   solidi       "0,-1 6,-1 6,0 0,0;…"  terreno o muratura, con campitura a tratteggio
//   pelo         "0,6,3,pelo libero"  superficie libera: segmento da x=0 a x=6 alla quota y=3,
//                con il simbolo ▽ e l'etichetta facoltativa a sinistra
//   condotte     "A-B,0.5;B-C,0.3,D_2"  tubazione tra due punti, con il diametro in unità del disegno
//                (parete, acqua all'interno e asse tratto-punto); l'etichetta sta accanto alla mezzeria
//   piezometrica "0,5 10,4.2;…"  linea piezometrica (tratteggiata)
//   energia      "0,5.4 10,4.6;…"  linea dei carichi totali (tratto-punto)
//   pressioni    "A,B,0,1.2,p;…"  diagramma di pressione sul segmento A-B: valori agli estremi in unità
//                del disegno, frecce perpendicolari rivolte verso il segmento; con un sesto campo -1
//                le frecce premono dall'altra parte
//   pompa        "4,0,P"  simbolo della pompa (cerchio con il triangolo) nel punto
//   riferimento=0  toglie il piccolo sistema x, y orientato in basso a sinistra
//   titolo       didascalia (formule fra dollari)
import katex from 'katex';
import { compila } from './grafico-svg.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const didascalia = (t) => String(t).split(/(\$[^$]+\$)/g).map((p) => (/^\$[^$]+\$$/.test(p)
  ? katex.renderToString(p.slice(1, -1), { throwOnError: false, output: 'html' })
  : esc(p))).join('');
const testoSemplice = (t) => String(t).replace(/\$([^$]+)\$/g, '$1').replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)').replace(/[\\{}]/g, '');
const lista = (s, sep = ';') => String(s || '').split(sep).map((x) => x.trim()).filter(Boolean);
const campi = (s) => s.split(',').map((x) => x.trim());
const f = (v) => v.toFixed(1);
let contatore = 0;

// Testo con pedici: "R_A" → R con pedice A; "M_{AB}" → pedice AB.
// I decimali si scrivono con il punto (la virgola separa i campi): il disegno mostra la virgola, 2.5 m → 2,5 m.
function testoSvg(t) {
  const parti = String(t).replace(/(\d)\.(\d)/g, '$1,$2').split(/_(\{[^}]*\}|[^\s_]+)/);
  let out = esc(parti[0]);
  for (let i = 1; i < parti.length; i += 2) {
    const p = parti[i].replace(/^\{|\}$/g, '');
    out += `<tspan class="pedice" dy="5">${esc(p)}</tspan>`;
    if (parti[i + 1]) out += `<tspan dy="-5">${esc(parti[i + 1])}</tspan>`;
    else out += '<tspan dy="-5"></tspan>';
  }
  return out;
}

// Numero all'italiana: al massimo due decimali, virgola, niente zeri finali, meno tipografico.
function numero(v) {
  if (Math.abs(v) < 5e-4) return '0';
  // tre decimali solo se il valore è esatto con tre (15/8 = 1,875), altrimenti due
  const tre = Math.abs(v * 1000 - Math.round(v * 1000)) < 1e-6;
  let t = tre ? (Math.round(v * 1000) / 1000).toFixed(3).replace(/\.?0+$/, '') : (Math.round(v * 100) / 100).toFixed(2).replace(/\.?0+$/, '');
  return t.replace('.', ',').replace('-', '−');
}

// Versore perpendicolare al segmento p1-p2: con lato = 1 sta a sinistra del verso da p1 a p2.
function normale(p1, p2, lato = 1) {
  const L = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) || 1;
  return [(-(p2[1] - p1[1]) / L) * lato, ((p2[0] - p1[0]) / L) * lato];
}

export function struttura(a) {
  const id = `s${++contatore}`;
  // Nodi
  const nodi = new Map(), nascosti = new Set();
  for (const s of lista(a.nodi)) {
    const [n, x, y, vis] = campi(s);
    nodi.set(n, [Number(x), Number(y)]);
    if (vis === '-') nascosti.add(n);
  }
  const punto = (t) => {
    t = String(t).trim();
    if (nodi.has(t)) return nodi.get(t);
    const p = t.split(/\s+/).map(Number);
    if (p.length === 2 && p.every(Number.isFinite)) return p;
    throw new Error(`punto non riconosciuto: "${t}"`);
  };
  const coppie = (s) => s.trim().split(/\s+/).map((p) => p.split(',').map(Number)).filter((p) => p.length === 2 && p.every(Number.isFinite));

  const aste = lista(a.aste).map((s) => s.split('-').map((n) => punto(n)));
  const catene = lista(a.catene).map((s) => s.split('-').map((n) => punto(n)));
  const forze = lista(a.forze).map((s) => { const [p, dx, dy, ...et] = campi(s); return { p: punto(p), d: [Number(dx), Number(dy)], et: et.join(',') }; });
  const reazioni = lista(a.reazioni).map((s) => { const [p, dx, dy, ...et] = campi(s); return { p: punto(p), d: [Number(dx), Number(dy)], et: et.join(',') }; });
  const carichi = lista(a.carichi).map((s) => {
    const [p1, p2, h1, h2, et = '', ang = '270'] = campi(s);
    return { p1: punto(p1), p2: punto(p2), h1: Number(h1), h2: Number(h2), et, ang: (Number(ang) * Math.PI) / 180 };
  });
  const coppieM = lista(a.coppie).map((s) => { const [p, v, ...et] = campi(s); return { p: punto(p), v: Number(v) >= 0 ? 1 : -1, et: et.join(',') }; });
  const quote = lista(a.quote).map((s) => { const [p1, p2, t = '', d = '0.7'] = campi(s); return { p1: punto(p1), p2: punto(p2), t, d: Number(d) }; });
  const punti = lista(a.punti).map((s) => { const [x, y, et = '', tipo = 'pieno'] = campi(s); return { p: [Number(x), Number(y)], et, tipo }; });
  const poligoni = lista(a.poligoni).map(coppie), fori = lista(a.fori).map(coppie);
  const cerchi = lista(a.cerchi).map((s) => { const [x, y, r, tipo] = campi(s); return { c: [Number(x), Number(y)], r: Number(r), foro: tipo === 'foro' }; });
  const linee = lista(a.linee).map(coppie), tratteggi = lista(a.tratteggi).map(coppie);
  const frecce = lista(a.frecce).map((s) => { const [x0, y0, x1, y1, ...et] = campi(s); return { p0: [Number(x0), Number(y0)], p1: [Number(x1), Number(y1)], et: et.join(',') }; });
  const etichette = lista(a.etichette).map((s) => { const [x, y, ...t] = campi(s); return { p: [Number(x), Number(y)], t: t.join(',') }; });
  const vincoli = lista(a.vincoli).map((s) => { const [n, tipo, ang = '270'] = campi(s); return { n, p: punto(n), tipo, ang: (Number(ang) * Math.PI) / 180 }; });
  const cerniere = lista(a.cerniere).map((n) => ({ n, p: punto(n) }));

  // Idraulica
  const acqua = lista(a.acqua).map(coppie), solidi = lista(a.solidi).map(coppie);
  const peli = lista(a.pelo).map((s) => { const [x0, x1, y, ...et] = campi(s); return { x0: Number(x0), x1: Number(x1), y: Number(y), et: et.join(',') }; });
  const condotte = lista(a.condotte).map((s) => {
    const [seg, d = '0.4', ...et] = campi(s);
    return { pts: seg.split('-').map((n) => punto(n)), d: Number(d), et: et.join(',') };
  });
  const piezometriche = lista(a.piezometrica).map(coppie), energie = lista(a.energia).map(coppie);
  const pressioni = lista(a.pressioni).map((s) => {
    const [p1, p2, h1, h2, et = '', lato = '1'] = campi(s);
    return { p1: punto(p1), p2: punto(p2), h1: Number(h1), h2: Number(h2), et, lato: Number(lato) >= 0 ? 1 : -1 };
  });
  const pompe = lista(a.pompa).map((s) => { const [x, y, ...et] = campi(s); return { p: [Number(x), Number(y)], et: et.join(',') }; });

  // Diagramma delle sollecitazioni: campionamento dei tratti
  const verso = String(a.verso) === '-1' ? -1 : 1;
  const tratti = lista(a.diagramma).map((s) => {
    const p = s.split(',');
    const [x0, y0, x1, y1] = p.slice(0, 4).map(Number);
    const g = compila(p.slice(4).join(',').trim(), 's');
    const L = Math.hypot(x1 - x0, y1 - y0);
    const u = [(x1 - x0) / L, (y1 - y0) / L], nrm = [-u[1] * verso, u[0] * verso];
    const M = 160;
    const val = Array.from({ length: M + 1 }, (_, i) => { const s2 = (L * i) / M; return [s2, g(s2)]; });
    return { p0: [x0, y0], p1: [x1, y1], L, u, nrm, val };
  });

  // Riquadro della struttura (senza diagramma) per scegliere la scala del diagramma
  const geo = [...nodi.values(), ...aste.flat(), ...catene.flat(), ...vincoli.map((v) => v.p), ...poligoni.flat(), ...linee.flat(), ...tratti.flatMap((t) => [t.p0, t.p1]),
    ...acqua.flat(), ...solidi.flat(), ...condotte.flatMap((c) => c.pts)];
  if (!geo.length) for (const c of cerchi) geo.push([c.c[0] - c.r, c.c[1] - c.r], [c.c[0] + c.r, c.c[1] + c.r]);
  const gx = geo.map((p) => p[0]), gy = geo.map((p) => p[1]);
  const D = Math.max(1e-6, Math.max(...gx) - Math.min(...gx), Math.max(...gy) - Math.min(...gy)) || 1;
  const vmax = Math.max(1e-9, ...tratti.flatMap((t) => t.val.map((v) => Math.abs(v[1])).filter(Number.isFinite)));
  const scala = a.scala ? Number(a.scala) : (0.2 * D) / vmax;
  const sulDiagramma = (t, s2, v) => [t.p0[0] + t.u[0] * s2 + t.nrm[0] * v * scala, t.p0[1] + t.u[1] * s2 + t.nrm[1] * v * scala];

  // Tutti i punti da far entrare nel disegno
  const tutti = [...geo];
  for (const F of [...forze, ...reazioni]) tutti.push(F.p, [F.p[0] - F.d[0], F.p[1] - F.d[1]]);
  for (const c of carichi) {
    const dir = [Math.cos(c.ang), Math.sin(c.ang)];
    tutti.push([c.p1[0] - dir[0] * c.h1, c.p1[1] - dir[1] * c.h1], [c.p2[0] - dir[0] * c.h2, c.p2[1] - dir[1] * c.h2]);
  }
  for (const q of quote) {
    const L = Math.hypot(q.p2[0] - q.p1[0], q.p2[1] - q.p1[1]) || 1;
    const n = [(q.p2[1] - q.p1[1]) / L, -(q.p2[0] - q.p1[0]) / L];
    tutti.push([q.p1[0] + n[0] * q.d, q.p1[1] + n[1] * q.d], [q.p2[0] + n[0] * q.d, q.p2[1] + n[1] * q.d]);
  }
  for (const p of punti) tutti.push(p.p);
  for (const p of fori) tutti.push(...p);
  for (const c of cerchi) tutti.push([c.c[0] - c.r, c.c[1] - c.r], [c.c[0] + c.r, c.c[1] + c.r]);
  for (const t of tratteggi) tutti.push(...t);
  for (const fr of frecce) tutti.push(fr.p0, fr.p1);
  for (const e of etichette) tutti.push(e.p);
  for (const p of peli) tutti.push([p.x0, p.y], [p.x1, p.y + 0.001]);
  for (const l of [...piezometriche, ...energie]) tutti.push(...l);
  for (const c of condotte) for (const q of c.pts) tutti.push([q[0] - c.d, q[1] - c.d], [q[0] + c.d, q[1] + c.d]);
  for (const q of pressioni) {
    const n = normale(q.p1, q.p2, q.lato);
    tutti.push([q.p1[0] + n[0] * q.h1, q.p1[1] + n[1] * q.h1], [q.p2[0] + n[0] * q.h2, q.p2[1] + n[1] * q.h2]);
  }
  for (const p of pompe) tutti.push(p.p);
  for (const t of tratti) for (const [s2, v] of t.val) if (Number.isFinite(v)) tutti.push(sulDiagramma(t, s2, v));

  const xs = tutti.map((p) => p[0]).filter(Number.isFinite), ys = tutti.map((p) => p[1]).filter(Number.isFinite);
  let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  if (x1 - x0 < 1e-9) { x0 -= 1; x1 += 1; }
  if (y1 - y0 < 1e-9) { y0 -= 0.5; y1 += 0.5; }

  // Scala: larghezza fissa del disegno; margini per vincoli, etichette e quote.
  const W = 640, mg = 58;
  const k = Math.min((W - 2 * mg) / (x1 - x0), (620 - 2 * mg) / (y1 - y0));
  const larghezzaUtile = (x1 - x0) * k;
  const dx = (W - 2 * mg - larghezzaUtile) / 2;
  const H = Math.max(150, Math.round((y1 - y0) * k + 2 * mg));
  const dy = (H - 2 * mg - (y1 - y0) * k) / 2;
  const X = (x) => mg + dx + (x - x0) * k;
  const Y = (y) => H - mg - dy - (y - y0) * k;
  const P = (p) => `${f(X(p[0]))} ${f(Y(p[1]))}`;
  const path = (pts, chiuso) => pts.map((p, i) => `${i ? 'L' : 'M'}${P(p)}`).join(' ') + (chiuso ? ' Z' : '');

  let svg = '';
  // Idraulica: terreno e muratura, acqua, condotte
  svg += solidi.map((q) => `<path class="solido" fill="url(#${id}-campitura)" d="${path(q, true)}"/>`).join('');
  svg += acqua.map((q) => `<path class="acqua" d="${path(q, true)}"/>`).join('');
  for (const c of condotte) {
    const d = path(c.pts), sp = Math.max(7, c.d * k);
    svg += `<path class="condotta-parete" stroke-width="${f(sp + 3.6)}" d="${d}"/>`;
    svg += `<path class="condotta-acqua" stroke-width="${f(sp)}" d="${d}"/>`;
    svg += `<path class="asse-condotta" d="${d}"/>`;
    if (c.et) {
      const [q1, q2] = [c.pts[0], c.pts[1]];
      const n = normale(q1, q2, 1), m = [(q1[0] + q2[0]) / 2, (q1[1] + q2[1]) / 2];
      const d0 = sp / 2 + 14, base = n[1] > 0.3 ? -3 : n[1] < -0.3 ? 15 : 6;
      svg += `<text class="etichetta" x="${f(X(m[0]) + n[0] * d0)}" y="${f(Y(m[1]) - n[1] * d0 + base)}" text-anchor="${n[0] > 0.5 ? 'start' : n[0] < -0.5 ? 'end' : 'middle'}">${testoSvg(c.et)}</text>`;
    }
  }

  // Sezioni e regioni
  svg += poligoni.map((p) => `<path class="sezione" d="${path(p, true)}"/>`).join('');
  svg += cerchi.filter((c) => !c.foro).map((c) => `<circle class="sezione" cx="${f(X(c.c[0]))}" cy="${f(Y(c.c[1]))}" r="${f(c.r * k)}"/>`).join('');
  svg += fori.map((p) => `<path class="foro" d="${path(p, true)}"/>`).join('');
  svg += cerchi.filter((c) => c.foro).map((c) => `<circle class="foro" cx="${f(X(c.c[0]))}" cy="${f(Y(c.c[1]))}" r="${f(c.r * k)}"/>`).join('');
  svg += linee.map((p) => `<path class="sottile" d="${path(p)}"/>`).join('');
  svg += tratteggi.map((p) => `<path class="tratteggio" d="${path(p)}"/>`).join('');
  svg += piezometriche.map((q) => `<path class="piezometrica" d="${path(q)}"/>`).join('');
  svg += energie.map((q) => `<path class="energia" d="${path(q)}"/>`).join('');
  for (const q of peli) {
    svg += `<line class="pelo" x1="${f(X(q.x0))}" y1="${f(Y(q.y))}" x2="${f(X(q.x1))}" y2="${f(Y(q.y))}"/>`;
    const xs = X(q.x0 + (q.x1 - q.x0) * 0.12), ys = Y(q.y), r = 7;
    svg += `<path class="pelo-simbolo" d="M${f(xs - r)} ${f(ys - r * 1.35)} L${f(xs + r)} ${f(ys - r * 1.35)} L${f(xs)} ${f(ys)} Z"/>`;
    if (q.et) svg += `<text class="etichetta" x="${f(xs + r + 7)}" y="${f(ys - 10)}" text-anchor="start">${testoSvg(q.et)}</text>`;
  }

  // Diagramma: area con tratteggio perpendicolare all'asta, contorno, valori
  const etDiagramma = [];
  // i valori dei diagrammi si scrivono per ultimi, con un alone del colore della carta, così aste e vincoli non li coprono
  let valoriSvg = '';
  for (const t of tratti) {
    const ok = t.val.filter((v) => Number.isFinite(v[1]));
    if (!ok.length) continue;
    const contorno = ok.map(([s2, v]) => sulDiagramma(t, s2, v));
    const asse = [[t.p0[0] + t.u[0] * ok[0][0], t.p0[1] + t.u[1] * ok[0][0]], [t.p0[0] + t.u[0] * ok.at(-1)[0], t.p0[1] + t.u[1] * ok.at(-1)[0]]];
    svg += `<path class="diagramma-area" d="${path([asse[0], ...contorno, asse[1]], true)}"/>`;
    const passo = Math.max(1, Math.round(9 / ((t.L * k) / 160)));
    for (let i = 0; i < ok.length; i += passo) {
      const [s2, v] = ok[i];
      if (Math.abs(v * scala * k) < 2) continue;
      svg += `<line class="diagramma-tratteggio" x1="${f(X(t.p0[0] + t.u[0] * s2))}" y1="${f(Y(t.p0[1] + t.u[1] * s2))}" x2="${f(X(sulDiagramma(t, s2, v)[0]))}" y2="${f(Y(sulDiagramma(t, s2, v)[1]))}"/>`;
    }
    svg += `<path class="diagramma-linea" d="${path(contorno)}"/>`;
    // valori: estremi e massimi o minimi interni
    if (String(a.numeri) !== '0') {
      const indici = [0, ok.length - 1];
      for (let i = 1; i < ok.length - 1; i++) {
        const [, a0] = ok[i - 1], [, a1] = ok[i], [, a2] = ok[i + 1];
        if ((a1 - a0) * (a2 - a1) < 0 && Math.abs(a1) > 1e-6) indici.push(i);
      }
      for (const i of indici) {
        const [s2, v] = ok[i];
        if (Math.abs(v) < 5e-4) continue;
        const q = sulDiagramma(t, s2, v);
        const segno = v >= 0 ? 1 : -1;
        etDiagramma.push({ x: X(q[0] + t.nrm[0] * segno * 0.04 * D), y: Y(q[1] + t.nrm[1] * segno * 0.04 * D), n: t.nrm, segno, t: numero(v) });
      }
    }
    if (String(a.segni) === '1') {
      // un segno per ogni tratto di segno costante, nel punto di valore assoluto massimo, a metà altezza
      let inizio = 0;
      for (let i = 1; i <= ok.length; i++) {
        if (i === ok.length || Math.sign(ok[i][1]) !== Math.sign(ok[inizio][1])) {
          const run = ok.slice(inizio, i);
          const peso = run.reduce((m, r) => m + Math.abs(r[1]), 0) || 1;
          const sm = run.reduce((m, r) => m + r[0] * Math.abs(r[1]), 0) / peso;
          const best = run.reduce((m, r) => (Math.abs(r[0] - sm) < Math.abs(m[0] - sm) ? r : m), run[0]);
          if (Math.abs(best[1]) * scala * k > 22) {
            const q = sulDiagramma(t, best[0], best[1] / 2);
            svg += `<text class="segno" x="${f(X(q[0]))}" y="${f(Y(q[1]) + 6)}" text-anchor="middle">${best[1] > 0 ? '+' : '−'}</text>`;
          }
          inizio = i;
        }
      }
    }
  }
  // un solo valore per posizione (nodi condivisi da due tratti con lo stesso valore)
  const visti = [];
  for (const e of etDiagramma) {
    if (visti.some((v) => Math.hypot(v.x - e.x, v.y - e.y) < 18 && v.t === e.t)) continue;
    visti.push(e);
    const ancora = Math.abs(e.n[0]) > 0.5 ? (e.n[0] * e.segno > 0 ? 'start' : 'end') : 'middle';
    valoriSvg += `<text class="valore" x="${f(e.x)}" y="${f(e.y + (Math.abs(e.n[1]) > 0.5 ? (e.n[1] * e.segno > 0 ? -2 : 12) : 5))}" text-anchor="${ancora}">${esc(e.t)}</text>`;
  }

  // Aste
  svg += catene.map(([p, q]) => `<line class="catena" x1="${f(X(p[0]))}" y1="${f(Y(p[1]))}" x2="${f(X(q[0]))}" y2="${f(Y(q[1]))}"/>`).join('');
  svg += aste.map(([p, q]) => `<line class="asta" x1="${f(X(p[0]))}" y1="${f(Y(p[1]))}" x2="${f(X(q[0]))}" y2="${f(Y(q[1]))}"/>`).join('');

  // Vincoli (dimensioni in pixel)
  const terreno = (cx, cy, ux, uy, mezzo) => {
    // segmento perpendicolare a u centrato in (cx, cy) con il tratteggio dalla parte di u
    const tx = -uy, ty = ux;
    let s = `<line class="terreno" x1="${f(cx - tx * mezzo)}" y1="${f(cy - ty * mezzo)}" x2="${f(cx + tx * mezzo)}" y2="${f(cy + ty * mezzo)}"/>`;
    for (let i = -mezzo + 3; i <= mezzo; i += 6) {
      const ax = cx + tx * i, ay = cy + ty * i;
      s += `<line class="tratto-terreno" x1="${f(ax)}" y1="${f(ay)}" x2="${f(ax + ux * 7 - tx * 6)}" y2="${f(ay + uy * 7 - ty * 6)}"/>`;
    }
    return s;
  };
  for (const v of vincoli) {
    const cx = X(v.p[0]), cy = Y(v.p[1]);
    const ux = Math.cos(v.ang), uy = -Math.sin(v.ang); // direzione verso il terreno, in pixel (y in basso)
    const tx = -uy, ty = ux;
    let s = '';
    if (v.tipo === 'cerniera' || v.tipo === 'carrello') {
      const h = 17, b = 11;
      const ax = cx + ux * h, ay = cy + uy * h;
      s += `<path class="vincolo" d="M${f(cx)} ${f(cy)} L${f(ax + tx * b)} ${f(ay + ty * b)} L${f(ax - tx * b)} ${f(ay - ty * b)} Z"/>`;
      if (v.tipo === 'carrello') {
        const r = 3.2;
        for (const j of [-6, 6]) s += `<circle class="rullo" cx="${f(ax + ux * r + tx * j)}" cy="${f(ay + uy * r + ty * j)}" r="${r}"/>`;
        s += terreno(ax + ux * 2 * r, ay + uy * 2 * r, ux, uy, 16);
      } else s += terreno(ax, ay, ux, uy, 16);
      s += `<circle class="cerniera" cx="${f(cx)}" cy="${f(cy)}" r="4"/>`;
    } else if (v.tipo === 'incastro') {
      s += terreno(cx, cy, ux, uy, 20);
    } else if (v.tipo === 'pendolo') {
      const L = 40, ax = cx + ux * L, ay = cy + uy * L;
      s += `<line class="biella" x1="${f(cx)}" y1="${f(cy)}" x2="${f(ax)}" y2="${f(ay)}"/>`;
      s += `<circle class="cerniera" cx="${f(cx)}" cy="${f(cy)}" r="3.6"/><circle class="cerniera" cx="${f(ax)}" cy="${f(ay)}" r="3.6"/>`;
      s += terreno(ax + ux * 3.6, ay + uy * 3.6, ux, uy, 12);
    } else if (v.tipo === 'doppio-pendolo') {
      const L = 24, b = 8;
      s += `<line class="biella" x1="${f(cx - tx * (b + 3))}" y1="${f(cy - ty * (b + 3))}" x2="${f(cx + tx * (b + 3))}" y2="${f(cy + ty * (b + 3))}"/>`;
      for (const j of [-b, b]) {
        const sx = cx + tx * j, sy = cy + ty * j, ex = sx + ux * L, ey = sy + uy * L;
        s += `<line class="biella" x1="${f(sx)}" y1="${f(sy)}" x2="${f(ex)}" y2="${f(ey)}"/><circle class="cerniera" cx="${f(sx)}" cy="${f(sy)}" r="3"/><circle class="cerniera" cx="${f(ex)}" cy="${f(ey)}" r="3"/>`;
      }
      s += terreno(cx + ux * (L + 3), cy + uy * (L + 3), ux, uy, 16);
    } else throw new Error(`vincolo sconosciuto: "${v.tipo}" (cerniera, carrello, incastro, pendolo, doppio-pendolo)`);
    svg += `<g class="vincolo-${v.tipo}">${s}</g>`;
  }
  const vincolati = new Set(vincoli.map((v) => v.n));
  const conCerchio = [...cerniere.map((c) => c.p), ...(String(a.reticolare) === '1' ? [...nodi].filter(([n]) => !vincolati.has(n)).map(([, p]) => p) : [])];
  svg += conCerchio.map((p) => `<circle class="cerniera" cx="${f(X(p[0]))}" cy="${f(Y(p[1]))}" r="4.2"/>`).join('');
  // Vincoli interni: doppio pendolo interno (due bielle parallele alla direzione data, a cavallo del nodo)
  // e pendolo interno (una biella), disegnati sopra le aste che arrivano nel nodo.
  for (const s of lista(a.interni)) {
    const [n, tipo = 'doppio-pendolo', ang = '0'] = campi(s);
    const p = punto(n), cx = X(p[0]), cy = Y(p[1]);
    const t0 = (Number(ang) * Math.PI) / 180, ux = Math.cos(t0), uy = -Math.sin(t0), tx = -uy, ty = ux;
    const L = 16, doppio = tipo !== 'pendolo';
    if (!['pendolo', 'doppio-pendolo'].includes(tipo)) throw new Error(`vincolo interno sconosciuto: "${tipo}" (pendolo, doppio-pendolo)`);
    // il tratto delle aste vicino al nodo si cancella, così si vede la sconnessione; le due parti finiscono
    // in due piastrine (doppio pendolo) o in due cerniere (pendolo) collegate dalle bielle
    svg += `<circle class="interruzione" cx="${f(cx)}" cy="${f(cy)}" r="${L}"/>`;
    const pt = (s2, j) => [cx + ux * s2 + tx * j, cy + uy * s2 + ty * j];
    if (doppio) {
      for (const s2 of [-L, L]) {
        const [p1x, p1y] = pt(s2, -11), [p2x, p2y] = pt(s2, 11);
        svg += `<line class="piastrina" x1="${f(p1x)}" y1="${f(p1y)}" x2="${f(p2x)}" y2="${f(p2y)}"/>`;
      }
      for (const j of [-7, 7]) {
        const [sx, sy] = pt(-L, j), [ex, ey] = pt(L, j);
        svg += `<line class="biella" x1="${f(sx)}" y1="${f(sy)}" x2="${f(ex)}" y2="${f(ey)}"/><circle class="cerniera" cx="${f(sx)}" cy="${f(sy)}" r="2.8"/><circle class="cerniera" cx="${f(ex)}" cy="${f(ey)}" r="2.8"/>`;
      }
    } else {
      const [sx, sy] = pt(-L, 0), [ex, ey] = pt(L, 0);
      // le estremità tagliate delle aste che arrivano nel nodo si collegano alle due cerniere della biella
      const dirs = [];
      for (const [q, r] of aste) {
        const da = Math.abs(q[0] - p[0]) < 1e-9 && Math.abs(q[1] - p[1]) < 1e-9 ? r : Math.abs(r[0] - p[0]) < 1e-9 && Math.abs(r[1] - p[1]) < 1e-9 ? q : null;
        if (da) { const dx2 = X(da[0]) - cx, dy2 = Y(da[1]) - cy, l = Math.hypot(dx2, dy2) || 1; dirs.push([dx2 / l, dy2 / l]); }
      }
      const capi = [[sx, sy], [ex, ey]];
      dirs.slice(0, 2).forEach(([dx2, dy2], i) => {
        // ogni asta va alla cerniera più vicina; a parità, la prima asta alla prima cerniera
        const e = [cx + dx2 * L, cy + dy2 * L];
        const d0 = Math.hypot(e[0] - capi[0][0], e[1] - capi[0][1]), d1 = Math.hypot(e[0] - capi[1][0], e[1] - capi[1][1]);
        const c = Math.abs(d0 - d1) < 1 ? capi[i] : d0 < d1 ? capi[0] : capi[1];
        if (Math.hypot(e[0] - c[0], e[1] - c[1]) > 2) svg += `<line class="piastrina" x1="${f(e[0])}" y1="${f(e[1])}" x2="${f(c[0])}" y2="${f(c[1])}"/>`;
      });
      svg += `<line class="biella" x1="${f(sx)}" y1="${f(sy)}" x2="${f(ex)}" y2="${f(ey)}"/><circle class="cerniera" cx="${f(sx)}" cy="${f(sy)}" r="3.6"/><circle class="cerniera" cx="${f(ex)}" cy="${f(ey)}" r="3.6"/>`;
    }
  }

  // Carichi distribuiti
  for (const c of carichi) {
    const dir = [Math.cos(c.ang), Math.sin(c.ang)];
    const L = Math.hypot(c.p2[0] - c.p1[0], c.p2[1] - c.p1[1]);
    const n = Math.max(2, Math.round((L * k) / 26));
    const sopra = (t) => { const h = c.h1 + (c.h2 - c.h1) * t; return [c.p1[0] + (c.p2[0] - c.p1[0]) * t - dir[0] * h, c.p1[1] + (c.p2[1] - c.p1[1]) * t - dir[1] * h]; };
    svg += `<path class="carico-area" d="${path([c.p1, sopra(0), sopra(1), c.p2], true)}"/>`;
    svg += `<path class="carico-linea" d="${path([sopra(0), sopra(1)])}"/>`;
    for (let i = 0; i <= n; i++) {
      const t = i / n, h = c.h1 + (c.h2 - c.h1) * t;
      if (h * k < 7) continue;
      const base = [c.p1[0] + (c.p2[0] - c.p1[0]) * t, c.p1[1] + (c.p2[1] - c.p1[1]) * t], top = sopra(t);
      svg += `<line class="carico" x1="${f(X(top[0]))}" y1="${f(Y(top[1]))}" x2="${f(X(base[0]))}" y2="${f(Y(base[1]))}" marker-end="url(#${id}-carico)"/>`;
    }
    if (c.et) {
      const hm = Math.max(c.h1, c.h2), t = c.h1 >= c.h2 ? 0.25 : 0.75, q = sopra(t);
      const ox = -dir[0], oy = -dir[1];
      // fuori dal diagramma del carico, dalla parte delle code delle frecce
      const ancoraC = ox < -0.5 ? 'end' : ox > 0.5 ? 'start' : 'middle';
      svg += `<text class="etichetta" x="${f(X(q[0]) + ox * 10)}" y="${f(Y(q[1]) - oy * 12 + 5)}" text-anchor="${ancoraC}">${testoSvg(c.et)}</text>`;
      void hm;
    }
  }

  // Diagrammi di pressione (frecce perpendicolari al segmento, rivolte verso di esso)
  for (const q of pressioni) {
    const n = normale(q.p1, q.p2, q.lato);
    const L = Math.hypot(q.p2[0] - q.p1[0], q.p2[1] - q.p1[1]) || 1;
    const nf = Math.max(2, Math.round((L * k) / 26));
    const fuori = (t) => { const h = q.h1 + (q.h2 - q.h1) * t; return [q.p1[0] + (q.p2[0] - q.p1[0]) * t + n[0] * h, q.p1[1] + (q.p2[1] - q.p1[1]) * t + n[1] * h]; };
    svg += `<path class="carico-area" d="${path([q.p1, fuori(0), fuori(1), q.p2], true)}"/>`;
    svg += `<path class="carico-linea" d="${path([fuori(0), fuori(1)])}"/>`;
    for (let i = 0; i <= nf; i++) {
      const t = i / nf, h = q.h1 + (q.h2 - q.h1) * t;
      if (h * k < 7) continue;
      const base = [q.p1[0] + (q.p2[0] - q.p1[0]) * t, q.p1[1] + (q.p2[1] - q.p1[1]) * t], top = fuori(t);
      svg += `<line class="carico" x1="${f(X(top[0]))}" y1="${f(Y(top[1]))}" x2="${f(X(base[0]))}" y2="${f(Y(base[1]))}" marker-end="url(#${id}-carico)"/>`;
    }
    if (q.et) {
      const t = q.h1 >= q.h2 ? 0.25 : 0.75, c = fuori(t);
      const ancoraP = n[0] > 0.5 ? 'start' : n[0] < -0.5 ? 'end' : 'middle';
      svg += `<text class="etichetta" x="${f(X(c[0]) + n[0] * 11)}" y="${f(Y(c[1]) - n[1] * 13 + 5)}" text-anchor="${ancoraP}">${testoSvg(q.et)}</text>`;
    }
  }

  // Pompe
  for (const q of pompe) {
    const cx = X(q.p[0]), cy = Y(q.p[1]), r = 14;
    svg += `<circle class="pompa" cx="${f(cx)}" cy="${f(cy)}" r="${r}"/>`;
    svg += `<path class="pompa-segno" d="M${f(cx - 5)} ${f(cy - 7)} L${f(cx + 8)} ${f(cy)} L${f(cx - 5)} ${f(cy + 7)} Z"/>`;
    if (q.et) svg += `<text class="etichetta" x="${f(cx)}" y="${f(cy + r + 20)}" text-anchor="middle">${testoSvg(q.et)}</text>`;
  }

  // Forze e reazioni
  const freccia = (F, classe, marker) => {
    const t0 = [F.p[0] - F.d[0], F.p[1] - F.d[1]];
    const lp = Math.hypot(F.d[0], F.d[1]) * k || 1;
    // la punta si ferma poco prima del punto, così non copre nodi e vincoli
    const acc = Math.min(5, lp * 0.15);
    const ex = X(F.p[0]) - (F.d[0] * k / lp) * acc, ey = Y(F.p[1]) + (F.d[1] * k / lp) * acc;
    let s = `<line class="${classe}" x1="${f(X(t0[0]))}" y1="${f(Y(t0[1]))}" x2="${f(ex)}" y2="${f(ey)}" marker-end="url(#${id}-${marker})"/>`;
    if (F.et) {
      // etichetta vicino alla coda, spostata di lato rispetto alla freccia
      const ux = F.d[0] * k / lp, uy = -F.d[1] * k / lp;
      const lx = X(t0[0]) - ux * 4 + (Math.abs(uy) > 0.7 ? 9 : 0), ly = Y(t0[1]) - uy * 4 + (Math.abs(ux) > 0.7 ? -8 : 0) + (uy > 0.7 ? -4 : uy < -0.7 ? 14 : 0);
      const ancora = Math.abs(uy) > 0.7 ? 'start' : ux > 0 ? 'end' : 'start';
      s += `<text class="etichetta ${classe}-et" x="${f(lx)}" y="${f(ly)}" text-anchor="${ancora}">${testoSvg(F.et)}</text>`;
    }
    return s;
  };
  svg += forze.map((F) => freccia(F, 'forza', 'forza')).join('');
  svg += reazioni.map((F) => freccia(F, 'reazione', 'reazione')).join('');

  // Coppie: arco di circonferenza con la punta
  for (const c of coppieM) {
    const cx = X(c.p[0]), cy = Y(c.p[1]), r = 19;
    // arco da -60° a 210° (in senso antiorario per v = 1)
    const a0 = (-50 * Math.PI) / 180, a1 = (220 * Math.PI) / 180;
    const pa = (t) => [cx + r * Math.cos(t), cy - r * Math.sin(t)];
    const [sx0, sy0] = c.v > 0 ? pa(a0) : pa(a1), [sx1, sy1] = c.v > 0 ? pa(a1) : pa(a0);
    svg += `<path class="coppia" d="M${f(sx0)} ${f(sy0)} A${r} ${r} 0 1 ${c.v > 0 ? 0 : 1} ${f(sx1)} ${f(sy1)}" marker-end="url(#${id}-forza)"/>`;
    if (c.et) svg += `<text class="etichetta forza-et" x="${f(cx + r + 6)}" y="${f(cy - r + 2)}">${testoSvg(c.et)}</text>`;
  }

  // Frecce sottili
  svg += frecce.map((fr) => `<line class="freccia-sottile" x1="${f(X(fr.p0[0]))}" y1="${f(Y(fr.p0[1]))}" x2="${f(X(fr.p1[0]))}" y2="${f(Y(fr.p1[1]))}" marker-end="url(#${id}-sottile)"/>` +
    (fr.et ? `<text class="nome-asse" x="${f(X(fr.p1[0]) + 6)}" y="${f(Y(fr.p1[1]) - 6)}">${testoSvg(fr.et)}</text>` : '')).join('');

  // Quote
  for (const q of quote) {
    const L = Math.hypot(q.p2[0] - q.p1[0], q.p2[1] - q.p1[1]) || 1;
    const n = [(q.p2[1] - q.p1[1]) / L, -(q.p2[0] - q.p1[0]) / L];
    const a1 = [q.p1[0] + n[0] * q.d, q.p1[1] + n[1] * q.d], a2 = [q.p2[0] + n[0] * q.d, q.p2[1] + n[1] * q.d];
    const e1 = [q.p1[0] + n[0] * 0.15 * Math.sign(q.d), q.p1[1] + n[1] * 0.15 * Math.sign(q.d)], e2 = [q.p2[0] + n[0] * 0.15 * Math.sign(q.d), q.p2[1] + n[1] * 0.15 * Math.sign(q.d)];
    const fine = [a1[0] + n[0] * 0.12 * Math.sign(q.d), a1[1] + n[1] * 0.12 * Math.sign(q.d)], fine2 = [a2[0] + n[0] * 0.12 * Math.sign(q.d), a2[1] + n[1] * 0.12 * Math.sign(q.d)];
    svg += `<path class="quota-richiamo" d="${path([e1, fine])} ${path([e2, fine2])}"/>`;
    svg += `<line class="quota" x1="${f(X(a1[0]))}" y1="${f(Y(a1[1]))}" x2="${f(X(a2[0]))}" y2="${f(Y(a2[1]))}"/>`;
    for (const p of [a1, a2]) svg += `<line class="quota-tacca" x1="${f(X(p[0]) - 4)}" y1="${f(Y(p[1]) + 4)}" x2="${f(X(p[0]) + 4)}" y2="${f(Y(p[1]) - 4)}"/>`;
    const mx = (X(a1[0]) + X(a2[0])) / 2, my = (Y(a1[1]) + Y(a2[1])) / 2;
    let ang = (Math.atan2(Y(a2[1]) - Y(a1[1]), X(a2[0]) - X(a1[0])) * 180) / Math.PI;
    if (ang > 90) ang -= 180; if (ang < -90) ang += 180;
    // testo dalla parte esterna della quota
    const sx = n[0] * Math.sign(q.d), sy = -n[1] * Math.sign(q.d);
    const tx = mx + sx * 5 - Math.sin((ang * Math.PI) / 180) * 0, ty = my + sy * 5;
    const giu = sy > 0.5;
    svg += `<text class="quota-testo" x="${f(tx)}" y="${f(ty + (giu ? 13 : -4))}" text-anchor="middle" transform="rotate(${f(ang)} ${f(tx)} ${f(ty)})">${testoSvg(q.t)}</text>`;
  }

  // Punti speciali
  for (const p of punti) {
    const cx = X(p.p[0]), cy = Y(p.p[1]);
    if (p.tipo === 'baricentro') {
      const r = 6.5;
      svg += `<circle class="baricentro" cx="${f(cx)}" cy="${f(cy)}" r="${r}"/><path class="baricentro-pieno" d="M${f(cx)} ${f(cy)} L${f(cx + r)} ${f(cy)} A${r} ${r} 0 0 0 ${f(cx)} ${f(cy - r)} Z M${f(cx)} ${f(cy)} L${f(cx - r)} ${f(cy)} A${r} ${r} 0 0 0 ${f(cx)} ${f(cy + r)} Z"/>`;
    } else if (p.tipo === 'centro') {
      svg += `<circle class="centro" cx="${f(cx)}" cy="${f(cy)}" r="5"/><path class="centro-croce" d="M${f(cx - 5)} ${f(cy)} L${f(cx + 5)} ${f(cy)} M${f(cx)} ${f(cy - 5)} L${f(cx)} ${f(cy + 5)}"/>`;
    } else svg += `<circle class="punto" cx="${f(cx)}" cy="${f(cy)}" r="4"/>`;
    if (p.et) svg += `<text class="etichetta" x="${f(cx + 9)}" y="${f(cy - 9)}">${testoSvg(p.et)}</text>`;
  }

  // Nomi dei nodi: nella direzione più lontana da aste, vincoli e forze che arrivano nel nodo
  if (String(a.nomi) !== '0') {
    for (const [n, p] of nodi) {
      if (nascosti.has(n)) continue;
      const occupate = []; // angoli in gradi, y verso l'alto
      const ang = (dx2, dy2) => (Math.atan2(dy2, dx2) * 180) / Math.PI;
      const uguale = (q) => Math.abs(q[0] - p[0]) < 1e-9 && Math.abs(q[1] - p[1]) < 1e-9;
      const segmenti = [...aste, ...catene];
      for (const c of condotte) for (let i = 1; i < c.pts.length; i++) segmenti.push([c.pts[i - 1], c.pts[i]]);
      for (const [q, r] of segmenti) {
        if (uguale(q)) occupate.push(ang(r[0] - q[0], r[1] - q[1]));
        if (uguale(r)) occupate.push(ang(q[0] - r[0], q[1] - r[1]));
      }
      for (const v of vincoli) if (v.n === n) { const g = (v.ang * 180) / Math.PI; occupate.push(g, g - 35, g + 35); }
      for (const F of [...forze, ...reazioni]) if (uguale(F.p)) occupate.push(ang(-F.d[0], -F.d[1]));
      for (const c of carichi) if (uguale(c.p1) || uguale(c.p2)) occupate.push((c.ang * 180) / Math.PI + 180);
      for (const s of lista(a.interni)) { const [m, , g = '0'] = campi(s); if (m === n) occupate.push(Number(g), Number(g) + 180); }
      // candidati: preferiti in alto a sinistra, poi gli altri
      const candidati = [135, 45, 90, 180, 0, 225, 315, 270];
      let migliore = candidati[0], distanza = -1;
      for (const c of candidati) {
        const d = occupate.length ? Math.min(...occupate.map((o) => { const x = Math.abs(((c - o) % 360 + 540) % 360 - 180); return x; })) : 180;
        if (d > distanza + 1e-6) { distanza = d; migliore = c; }
      }
      const r = (migliore * Math.PI) / 180, ox = Math.cos(r), oy = -Math.sin(r);
      // con una coppia nel nodo l'etichetta va fuori dall'arco (raggio 19)
      const conCoppia = coppieM.some((c) => uguale(c.p));
      let dist = conCoppia ? 31 : vincoli.some((v) => v.n === n && v.tipo === 'incastro') ? 30 : vincoli.some((v) => v.n === n) || lista(a.interni).some((s) => campi(s)[0] === n) ? 22 : 16;
      // su una condotta il nome esce dalla parete del tubo
      for (const c of condotte) if (c.pts.some(uguale)) dist = Math.max(dist, Math.max(7, c.d * k) / 2 + 13);
      const cx = X(p[0]) + ox * dist, cy = Y(p[1]) + oy * dist + 6;
      svg += `<text class="nome-nodo" x="${f(cx)}" y="${f(cy)}" text-anchor="${ox > 0.35 ? 'start' : ox < -0.35 ? 'end' : 'middle'}">${testoSvg(n)}</text>`;
    }
  }
  svg += etichette.map((e) => `<text class="etichetta" x="${f(X(e.p[0]))}" y="${f(Y(e.p[1]))}" text-anchor="middle">${testoSvg(e.t)}</text>`).join('');

  svg += valoriSvg;

  // Riferimento x, y orientato in basso a sinistra
  if (String(a.riferimento) !== '0') {
    const ox = 14, oy = H - 12, L = 30;
    svg += `<g class="riferimento"><line x1="${ox}" y1="${oy}" x2="${ox + L}" y2="${oy}" marker-end="url(#${id}-sottile)"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - L}" marker-end="url(#${id}-sottile)"/>` +
      `<text class="nome-asse" x="${ox + L + 4}" y="${oy + 4}">x</text><text class="nome-asse" x="${ox - 4}" y="${oy - L - 5}">y</text></g>`;
  }

  const marker = (nome, classe, dim) => `<marker id="${id}-${nome}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="${dim}" markerHeight="${dim}" orient="auto-start-reverse"><path class="${classe}" d="M0 0 L10 5 L0 10 z"/></marker>`;
  const larghezza = Math.min(560, Math.round((360 * W) / H));
  const descr = a.titolo || 'Schema della struttura';
  return `<figure class="grafico struttura"><svg viewBox="0 0 ${W} ${H}" style="max-width: ${larghezza}px" role="img" aria-label="${esc(testoSemplice(descr))}">
<defs><pattern id="${id}-campitura" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line class="campitura" x1="0" y1="0" x2="0" y2="7"/></pattern>${marker('forza', 'punta-forza', 6)}${marker('reazione', 'punta-reazione', 6)}${marker('carico', 'punta-carico', 5)}${marker('sottile', 'punta-sottile', 7)}</defs>
${svg}
</svg>${a.titolo ? `<figcaption>${didascalia(a.titolo)}</figcaption>` : ''}</figure>`;
}
