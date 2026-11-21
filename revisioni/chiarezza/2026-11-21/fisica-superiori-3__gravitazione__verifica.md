# Verifica · Fisica 3° anno · Gravitazione e orbite

Esito del controllo `strumenti/controlla_capitolo.py`: «a posto», nessun ERRORE né AVVISO.

## Lunghezza (parole contate dallo script)
- Italiano: prima del mio intervento 3759 (×1,53), dopo 3774 (×1,54); originale 2456.
- Inglese: prima 3849 (×1,63), dopo 3865 (×1,64); originale 2361.
Il capitolo era già sotto i limiti (1,7 IT, 1,8 EN) e sotto 1,8: nessun taglio necessario. Le due righe aggiunte non li superano.

## Conti rifatti (Python/sympy): 12, nessuno sbagliato
Forza fra due masse da 1000 kg a 1 m (6,67·10⁻⁵ N); prodotti F r² nelle tre misure; 1,01² ≃ 1,02; campo a quota R e pesi 24 N e 6 N; punto di campo nullo x = 4 km (l'altra radice, 12, è fuori dal segmento); differenza esatta U(R+h) − U(R) e rapporto 1 + h/R; ΔU fra R e 2R; 0,05·6400 = 320 km e 1/1,05² ≃ 0,907; v ≃ 6,98·10³ m/s, μ ≃ 3,90·10¹⁴ m³/s², M ≃ 5,85·10²⁴ kg (scritto 5,8·10²⁴); 2^(2/3) ≃ 1,59; terza legge con μ₂ = 9μ₁ (periodo 1/3); derivazione di v_p² e di E/m = −μ/(r_p + r_a) (sympy); curva v/v_A = √(24/r − 3); v = √(64 + 36) = 10 km/s; energie 4, −8, −4 MJ.

## «Potenziale» → «energia potenziale»
Corretto. L'originale scriveva «il potenziale è U(r) = −GMm/r»: la grandezza contiene m ed è in joule, quindi è l'energia potenziale; poche righe dopo lo stesso blocco definisce il potenziale Φ = U/m in J/kg. Anche le altre due occorrenze dell'originale («il potenziale cresce di GMm/(2R)» nell'esempio, «un altro zero del potenziale» nell'osservazione finale) indicavano U e ora dicono energia potenziale. Lo stesso in inglese.

## Completezza
Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è nel blocco con ancora in cui stava; dati numerici degli esempi invariati; righe delle figure identiche. Le aggiunte dell'autore (sfera piena, somma di campi perpendicolari, lavoro su percorso chiuso, somma di energie potenziali, ω, terza legge con sorgenti diverse, v² = v_fuga² + v∞²) servono a esercizi e domande e sono corrette.

## Correzioni fatte (IT ed EN)
- `#legge-gravitazione`: «campo» compariva prima della sua definizione; aggiunta una glossa in una riga (forza su ogni chilogrammo di massa attratta, con rimando a «Campo e peso»).
- Osservazione sull'eccentricità: i due punti dopo e = c/a sostituiti da un punto.

## Voce e inglese
Nessun tono prescrittivo, frasi a effetto o «tu»; frazioni in colonna. L'inglese è la traduzione completa del testo italiano finale (stessi blocchi, formule, numeri con il punto decimale, grafia britannica come nel file esistente).

## Dubbi
Nessuno. Termini degli esercizi e delle domande (g₀, accelerazione di gravità) già spiegati in teoria.
