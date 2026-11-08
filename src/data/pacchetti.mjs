// Unico listino dei pacchetti, condiviso da pagina e pagamento lato server.
export const SCONTI_PACCHETTI = [{ da: 4, percentuale: 25 }, { da: 3, percentuale: 20 }, { da: 2, percentuale: 15 }];
export const scontoMaterie = (n) => SCONTI_PACCHETTI.find((s) => n >= s.da)?.percentuale || 0;
export const euro = (centesimi) => (centesimi / 100).toLocaleString('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: centesimi % 100 === 0 ? 0 : 2 });

export const PACCHETTI_MATERIE = [
  { id: 'analisi', titolo: 'Pacchetto Analisi', materie: ['analisi-1', 'analisi-2'] },
  { id: 'fisica', titolo: 'Pacchetto Fisica', materie: ['fisica-1', 'fisica-2'] },
  { id: 'base-universitaria', titolo: 'Base universitaria', materie: ['analisi-1', 'algebra-lineare', 'fisica-1'] },
  { id: 'maturita', titolo: 'Maturità scientifica', materie: ['matematica-superiori-5', 'fisica-superiori-5'] },
  { id: 'concorsi', titolo: 'Preparazione concorsi', materie: ['matematica-concorsi', 'logica-concorsi'] },
  { id: 'scientifico', titolo: 'Pacchetto scientifico', materie: ['analisi-1', 'analisi-2', 'fisica-1', 'fisica-2'] },
  { id: 'semestre-filtro', titolo: 'Semestre filtro completo', materie: ['fisica-semestre-filtro', 'chimica-semestre-filtro', 'biologia-semestre-filtro'] },
];
export const PACCHETTI_VIDEO = [
  { id: 'video-analisi', titolo: 'Pacchetto Analisi', video: ['analisi-1-e-2'], confronto: ['analisi-1', 'analisi-2'], prezzo: 499 },
  { id: 'video-basi', titolo: 'Le basi dell’università', video: ['analisi-1', 'algebra'], prezzo: 399 },
  { id: 'video-economia', titolo: 'Pacchetto Economia', video: ['matematica-generale', 'algebra'], prezzo: 499 },
  { id: 'video-analisi-algebra', titolo: 'Analisi e Algebra', video: ['analisi-1-e-2', 'algebra'], prezzo: 549 },
];

export function riepilogoMaterie(slugs, catalogo) {
  if (!Array.isArray(slugs) || slugs.length < 2 || slugs.length > 30 || new Set(slugs).size !== slugs.length) throw new Error('Scegli almeno due materie diverse.');
  const voci = slugs.map((s) => catalogo.find((m) => m.slug === s && m.attiva && m.prezzo > 0));
  if (voci.some((v) => !v)) throw new Error('Una delle materie scelte non è acquistabile.');
  const percentuale = scontoMaterie(voci.length);
  const importi = voci.map((m) => Math.round(m.prezzo * 100));
  const separato = importi.reduce((a, b) => a + b, 0);
  const totale = importi.reduce((a, b) => a + Math.round(b * (100 - percentuale) / 100), 0);
  return { tipo: 'materie', titolo: `${voci.length} materie a scelta`, chiavi: slugs, importi, separato, totale, risparmio: separato - totale, percentuale };
}

export function riepilogoVideo(id, catalogo) {
  const p = PACCHETTI_VIDEO.find((p) => p.id === id);
  if (!p) throw new Error('Scegli un pacchetto di videocorsi.');
  const voci = p.video.map((s) => catalogo.find((v) => v.slug === s));
  const confronti = (p.confronto || p.video).map((s) => catalogo.find((v) => v.slug === s));
  if (voci.some((v) => !v) || confronti.some((v) => !v)) throw new Error('Pacchetto non disponibile.');
  const importi = voci.map((v) => Math.round(v.prezzo * 100));
  const base = importi.reduce((a, b) => a + b, 0);
  const separato = confronti.reduce((a, v) => a + Math.round(v.prezzo * 100), 0);
  const totale = Math.round(p.prezzo * 100);
  if (totale > base) throw new Error('Il prezzo del pacchetto deve essere aggiornato.');
  return { tipo: 'video', id, titolo: p.titolo, chiavi: p.video.map((s) => `video-${s}`), video: p.video,
    inclusi: [...new Set(voci.flatMap((v) => v.sblocca))], lezioni: voci.reduce((a, v) => a + v.lezioni, 0),
    importi, base, separato, totale, risparmio: separato - totale, sconto: base - totale };
}

export function videoPosseduti(chiavi, catalogo) {
  return new Set(chiavi.flatMap((k) => {
    const v = catalogo.find((v) => `video-${v.slug}` === k);
    return v ? [k, ...(v.pacchettoDi || []).map((s) => `video-${s}`)] : [];
  }));
}
export function videoSovrapposti(chiavi, posseduti, catalogo) {
  const tuoi = videoPosseduti(posseduti, catalogo);
  return [...videoPosseduti(chiavi, catalogo)].some((k) => tuoi.has(k));
}
