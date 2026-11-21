# Verifica · fisica-superiori-2 / luce-riflessione

Parole: italiano 4145 → 4147 (×1,69 sull'originale di 2449); inglese 4463 → 4465 (×1,76 sull'originale di 2534). Entrambe entro i limiti (1,7 e 1,8); non è servito alleggerire. Controllo `strumenti/controlla_capitolo.py`: «ESITO: a posto», nessun ERRORE.

## Conti rifatti
Tutti con Python/sympy: 22 verifiche (tempi e cammini dell'eco: 3,0 µs, 2400 m, 1200 m, 600 m, 300 m; camera oscura 48·30/120 = 12 cm, 40·20/160 = 5 cm e 7,5 cm; ombra del disco 10 cm; angoli 55°, 110°, deviazione 70°, rotazione 30°; specchio minimo 0,80 m, 1,65 m, 0,85 m; equazione degli specchi: (8, 24) → q = 12 cm, M = −0,50; (−8, 24) → q = −6 cm, M = 0,25; (10, 6) → q = −15 cm, M = 2,5; identità q = f + f²/(p − f); punti del grafico q/f; coordinate delle figure del convesso e del concavo). Nessun errore.

Dimostrazione dell'equazione degli specchi rifatta passo per passo (rette y = −(h_o/p)x e y = h_o(1 − x/f), intersezione in x = q, M = −q/p): corretta. Caso convesso: |q| = |f|p/(p + |f|) < p e 0 < M < 1, corretto.

## Correzione dell'autore sulla camera oscura
L'originale diceva «I due triangoli condividono l'angolo al foro». L'autore ha scritto che gli angoli al foro sono uguali perché opposti al vertice. È giusto: i due triangoli hanno il vertice comune nel foro e stanno da parti opposte, quindi gli angoli al foro sono distinti e opposti al vertice; sono rettangoli nei piedi dell'oggetto e dell'immagine, che stanno sull'asse. Correzione confermata.

## Completezza
Confronto blocco per blocco con l'originale: tutte le regole, i casi e le precisazioni sono presenti nel loro blocco con ancora; dati numerici degli esempi invariati; righe delle figure identiche (controllo dello script).

## Correzioni di voce (IT ed EN insieme)
- «Usiamo $f>0$…» → «Si usa $f>0$…» (EN «Use…» → «The convention is…»).
- «Il vertice è il centro dello specchio» → «il punto centrale dello specchio», per non confonderlo con il centro di curvatura.
- EN: «tells us», «we obtain» (due volte) resi impersonali.

## Termini e sigle
Controllati alla prima comparsa: raggio, mezzo, omogeneo, lunghezza d'onda, diffrazione, impulso, µ, rivelatore, cammino, spostamento, Δ, pendenza, modulo, reciproco, penombra, camera oscura, simili, normale, complanari, θ, φ, complementari, supplementare, simmetrico, virtuale, reale, fuoco, ≃, piano focale, parassiale, diritta, asintoti. Tutti definiti.

## Inglese
Traduzione completa e fedele del testo italiano finale, stessi blocchi e numeri, punto decimale, grafia britannica (centre, metre, disc).

## Dubbi rimasti
Nessuno. Le segnalazioni dell'autore su domande ed esercizi (domande 4, 22, 25, 26, 28, 48, 88; scheda 4 e 7) restano da valutare a parte: non sono state toccate.
