# Verifica · Matematica 1° anno · Rette parallele e quadrilateri

**Esito:** `python3 strumenti/controlla_capitolo.py matematica-superiori-1 parallele-e-quadrilateri` → nessun ERRORE. Unico avviso «sigle BD, AC»: sono nomi di segmenti, non sigle.

**Parole (conteggio dello script):**
- italiano: originale 2473; consegna dell'autore 4684 (×1,89); dopo la verifica 4675 (×1,89);
- inglese: originale 2436; consegna dell'autore 4780 (×1,96); dopo la verifica 4783 (×1,96).

Ho tolto circa 120 parole in italiano e 150 in inglese, ma ne ho aggiunte circa 110 e 130 per due termini usati negli esercizi e mai spiegati in teoria (vedi sotto). Quindi il saldo resta quasi pari. Sotto ×1,8 non si scende senza togliere definizioni alla prima comparsa (una ventina: trasversale, congruente, supplementari, opposti al vertice, adiacenti, semiretta, traslazione, consecutivi/opposti, diagonale, convesso, punto medio, criteri ALA, LAL e LLL, perpendicolari, perimetro, semiperimetro, area, cateti, ipotenusa, proiezione) o passaggi di calcolo. Per questo mi sono fermato qui. L'inglese è più lungo dell'italiano per la sola resa dei termini (*same-side interior angles*, *alternate interior angles*) e resta sotto 2,0.

## Comandi LaTeX senza barra rovesciata
Ho cercato con uno script dentro tutte le formule (416 per lingua) `circ`, `angle`, `parallel`, `perp`, `dfrac`, `frac`, `mathrm`, `cdot`, `alpha`, `beta`, `quad` non preceduti da `\`, oltre a `^circ` e `,mathrm` ovunque nel file. In italiano e in inglese non ne resta nessuno: le sole segnalazioni sono `\begin{aligned}` e `\qquad`, che sono corrette. Nell'originale le occorrenze erano 51.

## Conti rifatti con Python e sympy
Ho rifatto 34 conti, e nessuno è sbagliato:
- l'equazione $5x+30=180$ con $x=30$ e gli angoli $100^\circ$ e $80^\circ$;
- gli angoli $116^\circ$, $135^\circ$, $75^\circ$ (con la somma parziale $285^\circ$), $122^\circ$ e $58^\circ$, $80^\circ$;
- perimetro e semiperimetro ($17$ e $10$ cm), lato del rombo $7$ cm, altezza $4$ dal lato $5$ e dalla proiezione $3$;
- formule di area simboliche ($bh$ e $\frac{d_1d_2}{2}$), rombo con diagonali $8$ e $6$ (area $24$, lato $5$, perimetro $20$);
- trapezio della figura con area $16{,}5$ e parallelogramma con area $33$, coordinate della copia ruotata, altezza $7$ cm dall'area;
- $AB^2=25$ e $BC^2=13$ nell'ultimo esempio.

Ho controllato anche le coordinate di tutte le figure:
- diagonali del parallelogramma $6{,}04$ e $3{,}54$, non perpendicolari, con punto medio comune;
- angolo delle diagonali del rettangolo $3\times2$ pari a $112{,}6^\circ$;
- quadrato con diagonali $3$;
- trapezio isoscele con diagonali uguali;
- rette a $45^\circ$;
- retta per $B$ che passa per $(0;\,2{,}133)$.

Il testo di ogni figura corrisponde al disegno.

## Completezza
Ho confrontato blocco per blocco tutti i 24 blocchi con l'originale. Ogni regola, caso e precisazione è nel suo blocco, e i dati numerici sono invariati. Nel teorema «Lati, angoli e diagonali» la frase generale «nel parallelogramma generico le diagonali possono avere lunghezze diverse…» ora si riferisce al parallelogramma della figura. Il contenuto è lo stesso e l'ho lasciata così.

## Aggiunte per gli esercizi
- **Angolo piatto** (usato in 9 file fra schede e domande): nel teorema «Uguaglianze e somme», nella definizione di angoli adiacenti («insieme formano un angolo piatto, cioè un angolo di $180^\circ$»).
- **Bisettrice** (scheda e esercizio sulla diagonale del rombo che divide a metà un angolo): nel teorema «Proprietà aggiuntive delle diagonali», con il caso numerico $70^\circ \to 35^\circ$. Ho scelto numeri diversi da quelli dell'esercizio ($86^\circ$).

## Correzioni di definizione e di voce
- «Due segmenti sono congruenti…» stava dopo la tabella che usa già «lati congruenti»: l'ho spostata prima della tabella, nello stesso blocco.
- «si sommano i termini simili… da entrambi i membri» (termini mai spiegati) è diventato «si sommano fra loro i termini con la $x$ e fra loro i numeri… da entrambi i lati dell'uguale».
- «lati obliqui» ora è in grassetto, dove viene definito.

## Alleggerimenti
- descrizione della figura iniziale (posizione di $r$ e $s$ ripetuta);
- definizione di «incrocio» in una frase;
- «Si traccia questa parallela» tolta;
- le tre frasi sulle metà delle diagonali riunite in una;
- frasi su $DH$, base e altezza, triangoli «uno a sinistra e uno a destra»;
- verifica del rombo nell'ultima attenzione in una frase;
- tolta la verifica doppia aggiunta dall'autore nell'osservazione «Una proprietà non è sempre reversibile» (diagonali $8$ e $12$). Ripeteva quanto già detto in «Condizioni sufficienti» con gli stessi dati.

## Inglese
È una traduzione completa del testo italiano finale: stessi blocchi, stessi numeri, punto decimale, grafia americana come il file esistente e le schede (*recognizing*, *labeled*, *trapezoid*). Ho usato *straight angle* e *angle bisector* come le schede inglesi. Ogni modifica è stata applicata in coppia alle due lingue.

## Dubbi rimasti
- La lunghezza resta sopra l'intervallo atteso (×1,89 e ×1,96). Decida il titolare se vuole tagli che tocchino le definizioni.
- In inglese *legs* indica sia i lati obliqui del trapezio sia i cateti, come segnalato dall'autore. È l'uso delle schede inglesi e l'ho lasciato.
- Non ho reso le figure in PNG: le righe `::grafico` sono identiche all'originale, verificate dallo script, e i testi sono controllati sulle coordinate.
