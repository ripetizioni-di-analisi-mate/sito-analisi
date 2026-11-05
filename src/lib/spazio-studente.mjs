// Scelte di navigazione per lo spazio personale. I dati restano quelli dell'account;
// questo modulo non assegna punti e non interpreta gli EXP come competenze.
export function collegamentoStudio(href, catalogo, pref = '') {
  if (typeof href !== 'string' || !/^\/(?:en\/)?[a-z0-9-]+(?:\/[a-z0-9-]+\/(?:domande|teoria|esercizi-svolti|esercizi)(?:\/\d+)?)?$/.test(href)) return null;
  const senzaLingua = href.replace(/^\/en(?=\/)/, '');
  const [materia, argomento, sezione] = senzaLingua.slice(1).split('/');
  const m = catalogo.find((voce) => voce.slug === materia);
  if (!m) return null;
  if (!argomento) return `${pref}/${materia}`;
  if (sezione === 'domande' && (m.domande.includes(argomento) || ['prove-d-esame', 'ripasso-di-oggi'].includes(argomento))) {
    return m.domande.length ? `${pref}${senzaLingua}` : null;
  }
  if (m.argomenti.some((a) => a.slug === argomento) && ['teoria', 'esercizi-svolti', 'esercizi'].includes(sezione)) {
    return `${pref}${senzaLingua}`;
  }
  return null;
}

export function scelteSpazio(dati, catalogo, pref = '') {
  const sessioni = Array.isArray(dati?.sessioni) ? dati.sessioni : [];
  const obiettivi = Array.isArray(dati?.obiettivi) ? dati.obiettivi : [];
  const ultima = sessioni.find((s) => catalogo.some((m) => m.slug === s.materia && m.argomenti.some((a) => a.slug === s.argomento)));
  const materia = ultima && catalogo.find((m) => m.slug === ultima.materia);
  const argomento = materia?.argomenti.find((a) => a.slug === ultima.argomento);
  const riprendi = ultima ? {
    href: `${pref}/${ultima.materia}/${ultima.argomento}/teoria`,
    titolo: argomento.titolo,
    materia: materia.titolo,
  } : null;
  const obiettivo = obiettivi.find((o) => !o.completato) || null;
  const conLink = obiettivi.find((o) => !o.completato && collegamentoStudio(o.link, catalogo, pref));
  const quiz = conLink ? collegamentoStudio(conLink.link, catalogo, pref)
    : ultima && materia.domande.includes(ultima.argomento) ? `${pref}/${ultima.materia}/${ultima.argomento}/domande`
    : materia?.domande.length ? `${pref}/${ultima.materia}/prove-d-esame/domande` : null;
  return { riprendi, obiettivo, quiz, tuttiCompletati: obiettivi.length > 0 && obiettivi.every((o) => o.completato) };
}

export function ripassiDisponibili(dati, catalogo, pref = '') {
  return (Array.isArray(dati?.oggi) ? dati.oggi : []).flatMap((r) => {
    const materia = catalogo.find((m) => m.slug === r.materia && m.domande.length);
    const n = Number(r.n);
    return materia && Number.isFinite(n) && n > 0
      ? [{ titolo: materia.titolo, n: Math.floor(n), href: `${pref}/${materia.slug}/ripasso-di-oggi/domande` }]
      : [];
  });
}
