// La chiave è quella dei visitatori verificati. Non colleghiamo il registro agli account.
export async function improntaGiornaliera(req, giorno) {
  const ua = req.headers.get('user-agent') || '';
  const ip = req.headers.get('cf-connecting-ip') || '';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${giorno}|${ip}|${ua}`));
  return [...new Uint8Array(digest).slice(0, 8)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function creaTabelleFermi(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS fermi_iscrizione (
    giorno TEXT NOT NULL, h TEXT NOT NULL, esito TEXT, proseguito INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (giorno, h))`);
  sql.exec("INSERT OR IGNORE INTO impostazioni (chiave, valore) VALUES ('fermi_iscrizione_dal', strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))");
}

export function registraFermo(sql, { giorno, h, evento }) {
  if (evento === 'mostrato') {
    sql.exec('INSERT OR IGNORE INTO fermi_iscrizione (giorno, h) VALUES (?, ?)', giorno, h);
  } else if (evento === 'proseguito') {
    sql.exec('UPDATE fermi_iscrizione SET proseguito = 1 WHERE giorno = ? AND h = ? AND esito IS NULL AND proseguito = 0', giorno, h);
  } else if (evento === 'iscrizione' || evento === 'accesso') {
    sql.exec('UPDATE fermi_iscrizione SET esito = ? WHERE giorno = ? AND h = ? AND esito IS NULL', evento, giorno, h);
  }
}

export function datiFermi(archivio) {
  return {
    dal: archivio.riga("SELECT valore FROM impostazioni WHERE chiave = 'fermi_iscrizione_dal'").valore,
    giorni: archivio.righe(`SELECT f.giorno, COUNT(*) AS fermi,
      SUM(CASE WHEN f.esito = 'iscrizione' THEN 1 ELSE 0 END) AS iscrizioni,
      SUM(CASE WHEN f.esito = 'accesso' THEN 1 ELSE 0 END) AS accessi,
      SUM(CASE WHEN f.esito IS NULL AND f.proseguito = 1 THEN 1 ELSE 0 END) AS proseguiti
      FROM fermi_iscrizione f JOIN presenze p ON p.giorno = f.giorno AND p.h = f.h
      WHERE f.giorno >= date('now', '-179 days') GROUP BY f.giorno ORDER BY f.giorno`),
  };
}
