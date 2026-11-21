# Revisione di chiarezza · Matematica 2° anno · Similitudine e teorema di Talete

**Parole** (conteggio di `controlla_capitolo.py`): italiano 2363 → 3760 (×1,59); inglese 2443 → 3920 (×1,60). Controllo senza ERRORE; unico avviso: «DE, DF» segnalate come sigle, ma sono nomi di segmenti.

## Che cosa è cambiato
1. **Termini definiti alla prima comparsa**: simili, corrispondenti/omologhi, congruenti, proporzionali, rapporto di similitudine $k$, ingrandimento/riduzione, rombo, proporzione con medi ed estremi, moltiplicazione in croce, simboli $\sim$, $\triangle$, $\parallel$, $A'$ («A primo»), fascio di rette parallele, trasversale, dilatazione, altezza, mediana, proiezione, piede dell'altezza, ipotenusa e cateti, trapezio, scala $1:N$, misura indiretta.
2. **Criteri di similitudine in elenco con i nomi** usati da schede e domande (primo criterio, LAL, LLL); richiamo dei criteri di congruenza LAL, ALA, LLL nella dimostrazione, con la dilatazione spiegata su un punto con coordinate.
3. **Passaggi mancanti scritti**: $ad=bc$ ottenuto moltiplicando per $bd$; nel teorema di Talete il calcolo di $B'C'=9$ e il confronto parte/totale con i numeri; nell'esempio del segmento totale la derivazione di $\dfrac{A'B'}{AB}=\dfrac{B'C'}{BC}$, che prima mancava e rendeva immotivato il «quindi»; nei triangoli annidati il motivo della congruenza degli angoli (angoli corrispondenti fra parallele); nel perimetro $k(a+b+c)$; nelle proiezioni il passaggio dalle proporzioni a $AB^2=BH\cdot BC$ e la divisione che dà $\dfrac{BH}{CH}=\dfrac{AB^2}{AC^2}$.
4. **Frasi vaghe sostituite da un controesempio numerico**: «mescolare i versi non è in generale equivalente» ora mostra $\dfrac52=\dfrac25$, falsa; «le altre lunghezze differiscono» (angolo non compreso) ora confronta i rapporti $1{,}2$ e $\approx1{,}80$; «due figure con uguale area possono avere perimetri diversi» ora ha il rettangolo $2\times8$ e il quadrato di lato $4$.
5. **Teorema inverso della parallela**: chiarito perché $E_0=E$ e perché rapporti diversi escludono il parallelismo.
6. **Frazioni in colonna** ovunque (prima molte in linea, $5/2$, $DE/AB$); lati scritti «$2$ e $3$» invece di «$2,3$», che in italiano si legge come decimale.
7. Tolte le forme prescrittive («Conviene», «puoi scrivere», «Misura le ombre») e il titolo con il «tu» di un esempio senza ancora.

## Com'era / Com'è ora (blocco «L'angolo deve essere compreso fra i due lati dati»)
**Com'era**: «I triangoli $ABC_1$ e $ABC_2$ hanno uguali $AB$, il lato di lunghezza $\sqrt{13}$ e l'angolo in $A$. L'angolo dato non è compreso fra i lati $AB$ e $BC_1$ o fra $AB$ e $BC_2$. Le altre lunghezze differiscono e le due figure non sono simili.»
(Non si diceva perché $BC_1=BC_2$, né perché lunghezze diverse escludono la similitudine.)

**Com'è ora**: «Ogni punto della circonferenza dista $\sqrt{13}$ dal centro, quindi $BC_1=BC_2=\sqrt{13}$. [...] L'angolo in $A$ non è compreso fra i lati $AB$ e $BC_1$, né fra $AB$ e $BC_2$, perché quei lati si incontrano in $B$. Il secondo criterio quindi non si applica, e i due triangoli hanno anche forme diverse. I lati del primo triangolo sono $2$, $\sqrt{13}\approx3{,}61$ e $5$, quelli del secondo sono $\sqrt{13}$, $5$ e $6$. Il rapporto fra i lati maggiori è $\dfrac65=1{,}2$, quello fra i lati minori è $\dfrac{\sqrt{13}}{2}\approx1{,}80$, perciò i lati non sono proporzionali e le due figure non sono simili.»

## Errori nell'originale
Nessun errore numerico: tutti i dati e i risultati (anche le coordinate delle figure) ricalcolati con Python risultano corretti.

## Aggiunte per la copertura di schede, esercizi e domande
- Primo teorema di Euclide $AB^2=BH\cdot BC$ (usato in scheda 5 es. 2 e nelle domande 37 e 63), ricavato nel blocco `#proiezioni` dalle proporzioni già presenti.
- «Prodotto dei medi e degli estremi» e «moltiplicare in croce» (domanda 6, schede 6 e 7) in `#proporzioni`.
- Sigle LAL e LLL dei criteri di similitudine (schede 2, domande 23, 24, 26) in `#criteri`; disuguaglianza triangolare (scheda 2 es. 3, domande 11, 26) in una riga in `#criteri`.
- Definizione di mediana e conservazione del punto medio (scheda 3 es. 1, domande 51-54) in `#perimetri` e nella sua dimostrazione.
- Rapporto parte/totale sulle trasversali con i numeri (schede 6, dafare 14, domande 14, 67, 69) in `#talete`.

## Da segnalare negli esercizi e nelle domande (non corretti)
- `domande/…/84.md`: «$2000,\mathrm{cm}$», manca la barra rovescia (`2000\,\mathrm{cm}`).
- `svolti/…/2.md` es. 1: «Alla gamba $AC$»: calco dall'inglese, il termine è «cateto».
- `domande/…/72.md`: «usa il raggio $DA$»: si intende la semiretta (o il segmento) $DA$.
- Tono prescrittivo o «tu» in alcune spiegazioni: domande 12 («Controlla»), 80 («esprimi»), 83 («usa»); scheda 5 es. 2 («usa le identità»).
- Frazioni in linea ($5/2$, $AD/AB$) in molte spiegazioni di schede e domande.

## Dubbi
Nessun dubbio matematico. Nell'attenzione finale sulle ombre non ho aggiunto un controesempio numerico per non allungare il capitolo: le condizioni sono dette in forma affermativa, con il motivo per ciascuna.
