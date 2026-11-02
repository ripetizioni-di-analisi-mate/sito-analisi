// Invio delle tracce d'esame dalla pagina dei corsi di gruppo (worker/gruppi.mjs, /api/gruppi/file).
// Le foto si riducono nel browser (lato lungo al massimo 2000 px, JPEG) prima dell'invio; i PDF partono così come sono.
const MAX_LATO = 2000;
const MAX_BYTE = 8 * 1024 * 1024;

async function riduciFoto(f: File): Promise<Blob> {
  if (!f.type.startsWith('image/') || f.type === 'image/gif') return f;
  try {
    const img = await createImageBitmap(f);
    const k = Math.min(1, MAX_LATO / Math.max(img.width, img.height));
    if (k === 1 && f.size < 1.5 * 1024 * 1024 && f.type !== 'image/heic') return f;
    const c = document.createElement('canvas');
    c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
    c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
    return await new Promise<Blob>((ok) => c.toBlob((b) => ok(b || f), 'image/jpeg', 0.85));
  } catch { return f; }
}

export async function inviaTraccia(t: string, f: File) {
  const dati = await riduciFoto(f);
  const tipo = dati.type || f.type;
  if (dati.size > MAX_BYTE) throw new Error(`«${f.name}» supera gli 8 MB.`);
  const nome = tipo === 'image/jpeg' && !/\.jpe?g$/i.test(f.name) ? f.name.replace(/\.[^.]+$/, '') + '.jpg' : f.name;
  const r = await fetch(`/api/gruppi/file?t=${encodeURIComponent(t)}&nome=${encodeURIComponent(nome)}`, { method: 'POST', headers: { 'content-type': tipo }, body: dati });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.errore || `«${f.name}» non è stato inviato.`);
  return d;
}
