# Revisione di chiarezza · matematica-superiori-2 / equivalenza-e-aree

**Parole**: italiano 2385 → 3908 (×1,64); inglese 2419 → 4087 (×1,69).
**Controllo** (`strumenti/controlla_capitolo.py`): «ESITO: a posto», nessun ERRORE né AVVISO.

## Che cosa è cambiato
1. Definiti alla prima comparsa i termini che il capitolo dava per noti: area, perimetro, congruente, unità quadrate, interni disgiunti, intersezione, figure accostate, parallelogramma, base, altezza, perpendicolare, lato obliquo, proiezione, piede, altezza relativa, ottusangolo, prolungamento, punto medio, trapezio e basi, diagonale, rombo, semidiagonali, semiprodotto, convesso, poligono regolare, centro, apotema, circoscritto, tangente, inscritta, problema inverso, equazione di secondo grado, figura composta; enunciato del teorema di Pitagora in una riga alla prima comparsa.
2. Passaggi di calcolo mancanti scritti per esteso: conversione $1\,\mathrm m^2=100\cdot100\,\mathrm{cm}^2$; sviluppo di $(s/2)^2-ab=(a-b)^2/4$; perimetri del foro e del ritaglio; $(b+u)h-2\frac{uh}{2}=bh+uh-uh$; somma dei due triangoli nel trapezio e nel quadrilatero a diagonali perpendicolari; scomposizione di $x^2+3x-40$; radici $\sqrt{27}$, $\sqrt{12}$; somme dei triangoli nel poligono regolare.
3. Motivi dei «quindi» resi espliciti: perché i sei triangoli dell'esagono sono equilateri (angolo al centro $60^\circ$); perché nella rotazione di mezzo giro le coppie di lati sono parallele (una rotazione di $180^\circ$ porta ogni retta in una retta parallela); perché il raggio fa da altezza comune nel poligono circoscritto.
4. Imperativi («considera», «traccia», «prendi», «usa») e formule prescrittive («va applicata», «vanno usate», «va associata») trasformati in forma impersonale ed espositiva; frazioni tutte in colonna, anche nella tabella finale.
5. Figure descritte nel testo (altezza da $D$, taglio a destra del lato $BC$, numeri del quadrilatero con $AC=6$, $BD=4$).
6. Esempi numerici brevi aggiunti solo dove il blocco non ne aveva: punto medio e rapporto delle aree ($AM=1$, $MB=2$, area $30$), figure accostate ($6\times2$ e $4\times3$ lungo $2$), area coperta da uno solo dei rettangoli sovrapposti ($29$).
7. Inglese ritradotto per intero dal nuovo italiano, grafia britannica come le schede inglesi del capitolo (centre, metres, centimetres; «center» dell'originale portato a «centre»).

## Com'era / Com'è ora (dimostrazione dell'area del triangolo)
**Com'era**: «Prendi una seconda copia di $ABC$ e ruotala di $180^\circ$ attorno al punto medio di $BC$. I due estremi $B,C$ si scambiano e $A$ diventa un punto $D$ dall'altra parte di $BC$. Le coppie $AB,CD$ e $AC,BD$ risultano parallele perché ciascuna è legata dalla rotazione.»
**Com'è ora**: «Si prende una seconda copia del triangolo $ABC$ e la si ruota di $180^\circ$, cioè di mezzo giro, attorno al punto medio di $BC$. Il punto medio sta a metà fra $B$ e $C$, quindi la rotazione porta $B$ in $C$ e $C$ in $B$. Il vertice $A$ va in un punto $D$ dall'altra parte di $BC$. Una rotazione di mezzo giro trasforma ogni retta in una retta parallela. Il segmento $AB$ diventa il segmento $DC$, quindi $AB$ e $CD$ sono paralleli. Allo stesso modo $AC$ diventa $DB$, quindi $AC$ e $BD$ sono paralleli.»

## Errori nell'originale
Nessun errore numerico: tutti i conti ricalcolati con Python/sympy (aree, perimetri, apotemi $3\sqrt3$ e $2\sqrt3$, aree $54\sqrt3$ e $24\sqrt3$, radici $5$ e $-8$, $0{,}96\,\mathrm m^2=9600\,\mathrm{cm}^2$).

## Copertura di schede, esercizi e domande (aggiunte in teoria)
- millimetri e $1\,\mathrm{cm}^2=100\,\mathrm{mm}^2$ (dafare 9, domanda 60) → blocco `equivalenza`;
- conteggio dei quadrati in file per l'area del rettangolo (dafare 1) → `parallelogramma`;
- «lunghezza media delle basi» (dafare 12) → `trapezio`;
- semidiagonali, semiprodotto, area del quadrato dalla diagonale $\frac{d^2}{2}$ (dafare 13, domande 29, 69) → `rombo`;
- poligono circoscritto, tangente, convesso (schede 5 e 6, domande 21, 22, 80) → `regolari`, dimostrazione del rombo.

## Dubbi / segnalazioni (non corretti, fuori dai miei file)
- Scheda 1, esercizio 1: la riga di calcolo usa $\frac85\cdot\frac34=\frac65$ mentre la spiegazione parla di $1{,}6\,\mathrm m$; corretto, solo stile diverso.
- Domande 81 e 82 hanno lo stesso testo a meno del numero ($5$ cm / $7$ cm): doppione.
- Domande 86 e 87: stessa situazione con numeri diversi (piastrelle da $0{,}25\,\mathrm m^2$).
