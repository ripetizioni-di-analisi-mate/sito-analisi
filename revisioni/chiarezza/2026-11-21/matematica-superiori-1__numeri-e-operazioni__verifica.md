# Verifica · Matematica 1° anno · Numeri, operazioni e frazioni

**Esito**: `python3 strumenti/controlla_capitolo.py matematica-superiori-1 numeri-e-operazioni` → «ESITO: a posto», nessun ERRORE e nessun AVVISO.

**Parole** (conteggio dello script, solo il corpo del testo)

| | Originale | Consegna dell'autore | Dopo la verifica |
| --- | --- | --- | --- |
| Italiano | 2540 | 5418 (×2,13) | 4862 (×1,91) |
| Inglese | 2593 | 5708 (×2,20) | 5131 (×1,98) |

## Conti rifatti

Circa 60 conti rifatti con Python (`fractions`, `math`, `sympy.factorint`). Tutti giusti: confronto $-\frac56<-\frac79$ (in diciottesimi $-15$ e $-14$), $20-2\cdot3^2=2$, $14-(9-2(4-7))=-1$ nei due modi, $(9-5)-2=2$ e $9-(5-2)=6$, scomposizioni di 72 e 120, MCD 24 e mcm 360, MCD e mcm di 8 e 12, Euclide su 132 e 84 (resti 48, 36, 12, 0), $\frac{18}{24}=\frac34$, $\frac23+\frac14=\frac{11}{12}$, $\frac23\cdot\frac45$, $\frac23:\frac45=\frac56$, $\frac34\cdot\frac23=\frac12$, $\frac{15}{6}=\frac52$, $\frac7{40}=0{,}175$, la tabella dei resti di $\frac7{24}$, $0{,}2\overline{15}=\frac{71}{330}$, penne (7 pacchetti, 40 penne), recipiente ($\frac12$). Nessun errore di contenuto.

## Completezza rispetto all'originale

Confronto blocco per blocco: ogni regola, caso, esempio e dato dell'originale c'è ancora nel suo blocco. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici. Nessun contenuto da rimettere.

## Alleggerimento (italiano e inglese insieme)

Tolti soltanto ripetizioni, verifiche doppie ed esempi doppi aggiunti dall'autore, per esempio:
- la seconda verifica del punto medio con la formula ($m=\frac{-3+5}{2}$), la frase sul passo che parte dallo stesso valore, la riga «Il risultato è $-1$» sotto il calcolo già incolonnato;
- la frase «Il calcolo $24:6\cdot2=24:12=2$ è errato», doppione della riga successiva;
- la prima riga della tabella dei resti di $\frac7{24}$ ripetuta a parole prima della tabella;
- la frase sulle cifre che si cancellano, ripetuta due volte attorno al calcolo della frazione generatrice;
- gli esempi numerici gonfiati delle tre proprietà (ora una sola uguaglianza ciascuno), il secondo esempio sui reciproci ($2<5$), le due divisioni delle penne riscritte in una frase, «Ogni naturale è anche un intero» (già nella definizione degli interi);
- frasi di raccordo («Si mostra prima che…», «Si mostra ora che…», «Le due divisioni consentono entrambe…»).

**Perché non sotto 1,8.** Per scendere ancora bisognerebbe togliere le definizioni aggiunte alla prima comparsa (insieme, opposto, numeratore, dividendo, divisore, quoziente, coordinata, retta numerica, unità, potenza, esponente, divisore, multiplo, numero primo, scomposizione, divisione con resto, membri, se e solo se, periodo, antiperiodo, frazione generatrice, i simboli $\in,\ne,\subsetneq,<,\le,\ge,\max$…) o i passaggi di calcolo scritti uno per riga: l'originale è molto asciutto e quei termini non vi erano spiegati. Mi sono fermato a ×1,91 (IT) e ×1,98 (EN).

## Voce e grassetti

- Grassetti riportati a 2-3 per blocco (prima fino a 8 in «Insiemi numerici» e 7 in «Divisori»): restano in grassetto i termini principali del blocco, gli altri termini definiti sono in tondo.
- Nessun «può/possono», «permette», tono prescrittivo, lineetta lunga o due punti al posto di un connettivo (controllato con una ricerca). Riscritta in forma piena la frase «I numeri 9 e 10 sono coprimi, anche se…, perché…», che legava male le due subordinate.

## Inglese

Allineato al testo italiano finale: stessi 162 paragrafi, stesso numero di frasi in ogni paragrafo (controllo automatico), stesse formule (1128 `$`), stessi grassetti per blocco, punto decimale. Grafia americana come il file esistente (*center*, *canceling*).

## Dubbi rimasti

- Inglese a ×1,98, appena sotto il doppio: la stessa frase inglese è più lunga di quella italiana (rapporto EN/IT 1,06 contro 1,02 dell'originale).
- Il rinvio dell'autore su «modulo» reso con *magnitude* (come nelle domande inglesi) è stato lasciato.
