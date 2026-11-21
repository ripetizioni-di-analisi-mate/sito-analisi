# Verifica · Fisica 3° anno · Misure, incertezze e vettori

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-3 misure-vettori`): ESITO a posto, nessun ERRORE.

**Parole** (script): italiano 4255 → 4253 dopo la verifica (originale 2505, ×1,70); inglese 4364 → 4365 (originale 2484, ×1,76). Entro i limiti richiesti (1,7 IT, 1,8 EN).

## Conti rifatti
Circa 35 conti rifatti con Python/sympy: conversioni (5/18, 72 km/h, cm², cm³, g/cm³ → kg/m³), densità 2700 kg/m³ e 2,70 g/cm³, tara (3,2 e 2,7 g/cm³), miscela (64, 24, 88 g, 0,88), notazione scientifica, area con segno (pendenza −2, +4, −1, 3 m, 5 m), media 10,2 e punto medio 10,3 cm, margini 0,2/0,4/0,3 cm, incertezza relativa 1,0%, compatibilità (23,7-24,3 e 24,3-24,7), scarto della bilancia (80, 112, 32 g), densità estrema 2,444 e 2,557, 2,25%, 0,05625, distanze 0,056 e 0,057, d_min −0,1 e d_max 0,7, 0,4%, modulo 5 e angoli 53,1° e 126,9°, rotazioni (0,−5), (12,5), (3,4) con φ ≃ 36,9°, (8,−6) e (−8,6), risultante (2,4) e √20 ≃ 4,47, prodotto scalare 0 e −6 J, proiezione −2 N, prodotto vettoriale ±6 m². **Nessun conto sbagliato.**

## Completezza
Confronto blocco per blocco con l'originale: tutte le regole, i casi e le precisazioni sono rimasti nel loro blocco (anche «la correlazione può ridurre il margine», «la ripetizione affina la dispersione», vettore nullo con angolo indefinito, limiti del controllo dimensionale). Dati degli esempi invariati. Unica frase dell'originale non ripresa alla lettera: «L'accordo indica una regione possibile comune», ora contenuta nella definizione di misure compatibili (intervalli con almeno un valore in comune).

## Correzioni fatte (IT ed EN insieme)
- **Litro aggiunto in #unita** («Il litro è il volume di un cubo di lato 1 dm = 10 cm, quindi 1 L = 10³ cm³»): una domanda del capitolo converte una portata da L/min a cm³/s e la teoria non definiva il litro.
- **Parola «scarto» con due significati nel blocco #propagazione**: era usata sia per l'offset comune («uno scarto comune… si annulla») sia per δx. Per δ ora «errore» («valore centrale più un errore», «l'errore effettivo», «due errori piccoli»); in inglese «deviation» → «error».
- **Tolti**: la ripetizione «e trascurando il termine di secondo ordine» (già detto nella frase prima) e l'esempio aggiunto «0,1 cm su 5,0 cm, che è il 2%» (l'originale aveva già l'esempio 20,0 ± 0,2 cm), per restare entro 1,7.

## Lettura e voce
Termini e simboli definiti alla prima comparsa (grandezza, SI, fattore di conversione, omogeneo, proporzionale, ρ, pendenza, tara, intercetta, addendo, pedice, ±, Δ, x̄, semidispersione, ε, cifre significative, compatibili, offset, δ, ≃, ≫, scalare, vettore, θ, quadranti, α, x′, φ, newton, vincolo, versore, ortonormale, concordi/discordi, destrorso, joule). Nessuna frase prescrittiva o a effetto rimasta; «può» solo dove indica possibilità reale. Testo attorno alle figure coerente con gli attributi delle righe.

## Inglese
Traduzione completa e fedele dell'italiano finale, stessi blocchi, numeri con il punto decimale, grafia britannica (metre, centre, anticlockwise). Unica differenza di registro: «We pour» nella miscela (l'italiano è impersonale), lasciata perché naturale in inglese.

## Dubbi rimasti
- Due domande parlano di «determinante» (A_xB_y − A_yB_x), termine non introdotto in teoria: la formula c'è, la parola no (già segnalato dall'autore).
- Restano i due punti segnalati dall'autore fuori dai miei file: refuso «la stesso» nella scheda 8, es. 3; domande 20, 21, 22, 24 che rimandano a `#unita` mentre il contenuto è in `#dimensioni`.
- «Oltre 90° seno e coseno possono essere negativi»: corretto con «possono» (il seno è negativo solo oltre 180°); lasciato.
