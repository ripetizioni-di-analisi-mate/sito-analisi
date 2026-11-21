# Verifica · Fisica 1° anno · Equilibrio del corpo rigido

**Controllo finale** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 equilibrio-corpo-rigido`): nessun ERRORE, esito «a posto, con avvisi da valutare». Resta solo l'avviso sulla sigla «OA», che è il nome di un segmento.

**Parole** (conteggio dello script):
- italiano: originale 2681; consegna dell'autore 5314 (×1,98); dopo la verifica 5072 (×1,89);
- inglese: originale 2660; consegna dell'autore 5487 (×2,06); dopo la verifica 5112 (×1,92).

## Conti rifatti

Ho rifatto con Python e sympy circa 45 conti: momenti (7,5; 6; 12; 0 e −6; +2,4; 50 e 40 N m), triangolo della fune (1,50 m, 4/5, 3/5), T = 80 N e reazioni 64 e 48 N, leve (9 e 9 N m, F = 20 N, fulcro 60 e 40 N), coppie (+14, −6, +8 N m), travi (25/75, 45/95 N, controllo in B 380 N m), sbalzo (120, −30, 130, 20 N, controllo in B = 0), baricentri (3 m, 1,25 m, 1 m), soglie (50, 40, 80 N), tan θ = 0,50 (26,6°, quindi «circa 27°» è corretto), valori del seno e geometria della figura della chiave (braccio perpendicolare alla retta d'azione, θ ≈ 30°). **Nessun errore.** Controllati anche i versi: la coppia della figura è oraria rispetto al centro, le due coppie dell'esempio sono +14 antioraria e −6 oraria, i segni del controllo in B dello sbalzo sono giusti.

## Completezza rispetto all'originale

Confronto blocco per blocco: regole, casi e dati numerici dell'originale ci sono tutti e nello stesso blocco con ancora. Nessun contenuto da rimettere. Righe delle figure, titoli `##`, ancore e titoli dei blocchi invariati (verificato dallo script).

## Termini e sigle

Ogni termine nuovo (corpo rigido, momento, modulo, retta d'azione, braccio, seno, tangente, perno, trave, risultante, reazione, equilibrio, punto materiale, cerniera, tensione, leva, fulcro, forza motrice e resistente, vantaggio, appoggio, appoggio semplice, sbalzo, contrappeso, omogenea, baricentro, centro di massa, media pesata, base d'appoggio, soglia, spigolo, attrito statico, proiezione ortogonale) è definito alla prima comparsa. SI, N, m, kg, cm, θ, Σ spiegati. Nessuna mancanza trovata.

## Copertura degli esercizi

Controllati tracce e domande del capitolo: «vantaggio» (anche «vantaggio meccanico»), momento della coppia, $\tan\theta$ sono spiegati in teoria. Nessuna aggiunta necessaria.

## Correzioni di voce e di forma

- «La reazione del fulcro va calcolata separatamente dall'equilibrio delle forze» (prescrittiva e ambigua) → «La reazione del fulcro si ricava a parte, dall'equilibrio delle forze».
- «Il modulo si può anche ottenere» → «Il modulo si ottiene anche».
- «la sua coordinata» (riferimento lontano) → «la coordinata del baricentro».

## Alleggerimento (italiano e inglese insieme)

Tolti: la verifica doppia del momento della chiave con il braccio; la frase «L'idea è confrontare…» nella dimostrazione; la ripetizione del momento totale nella dimostrazione della coppia; la seconda spiegazione del braccio zero della reazione orizzontale (già detta nel teorema); la ripetizione a parole di numeratore e denominatore di $x_G$; la descrizione punto per punto del grafico delle soglie (resta una frase su che cosa sono la curva e le due rette); varie frasi di raccordo unite con un connettivo. Nell'inglese, in più, tolte le formule prolisse rispetto all'italiano («that is» ripetuti, «The claim is that», «in order to»), senza togliere frasi.

**Perché non si arriva a 1,8.** Il resto dell'aumento è fatto di definizioni alla prima comparsa (circa trenta termini, più seno e tangente che non sono definiti in altri capitoli della materia), di passaggi di calcolo (Pitagora per la fune, 0,72 T = 57,6, derivazione di $x_G$, triangolo del piano inclinato) e dell'esempio numerico 1 kg / 3 kg prima della formula con le lettere, che serve anche per l'unità kg m usata dalle domande. Toglierli andrebbe contro le regole del brief: mi sono fermato a ×1,89 e ×1,92.

## Inglese

Traduzione completa del testo italiano finale: stessi blocchi, stessi paragrafi, stesse formule (controllo automatico blocco per blocco), punto decimale, grafia britannica (centre, metre, anticlockwise, spanner).

## Dubbi rimasti

- Titolo dell'esempio inglese «Restoring the centre of mass to the midpoint» (nel testo si usa «centre of gravity»): è un titolo di blocco preso dal file esistente, lasciato com'era.
- Il titolo della figura del secondo esempio usa «risultante» prima della sua definizione (nell'esempio dei due punti); la riga della figura non è modificabile.
- Copie di sicurezza dei due file prima del mio intervento: `/home/claude/lavoro/verifica-ecr/it.bak`, `en.bak`.
