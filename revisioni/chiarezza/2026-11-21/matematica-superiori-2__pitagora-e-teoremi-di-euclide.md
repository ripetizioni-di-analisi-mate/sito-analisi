# Revisione di chiarezza · Matematica 2° anno · Pitagora e teoremi di Euclide

**Parole**: italiano 2254 → 3629 (×1,61); inglese 2292 → 3845 (×1,68). Controllo `controlla_capitolo.py`: ESITO a posto, nessun avviso.

## Che cosa è cambiato
1. Definiti alla prima comparsa: triangolo rettangolo, angolo retto, perpendicolari, quadrato di una lunghezza, radicando, membri di un'uguaglianza, disuguaglianza triangolare, criterio LLL (con il nome per esteso), equilatero, altezza, mediana, bisettrice, criterio di similitudine angolo-angolo, proiezione e piede, triangoli simili e scrittura ordinata dei vertici, medi ed estremi di una proporzione, medio proporzionale, completamento del quadrato, isoscele e lati obliqui, coordinate, ascissa e ordinata, valore assoluto, notazione Δx e Δy.
2. Dimostrazione di Pitagora: detto perché l'angolo del quadrilatero centrale è retto (somma degli angoli 180°, angolo piatto sul lato del quadrato grande), da dove viene l'area ab/2 dei triangoli e lo sviluppo del quadrato del binomio, un passaggio per riga.
3. Tutti i conti degli esempi scritti per intero (radici, 289−64, 17·225/17, completamento del quadrato con (p−10)=±6, conversione 0,3 km = 300 m, razionalizzazione 10/√2 = 5√2).
4. Aggiunta la conseguenza «l'ipotenusa è il lato più lungo» nel blocco del teorema, usata da molte domande (10, 17, 41, 55).
5. Primo e secondo teorema di Euclide: proporzioni in evidenza, «moltiplicare in croce» spiegato, corrispondenza dei vertici nelle similitudini scritta esplicitamente; un esempio numerico di una riga sotto ciascun enunciato.
6. Criterio inverso del secondo teorema: enunciato riscritto in forma diretta, dimostrazione con la somma in evidenza e il motivo di p+q = BC.
7. Testo attorno alle figure: descritte la costruzione 5, 12, 13, il grafico di h² = p(10−p) con il massimo (5;25) e i cerchietti vuoti agli estremi, il quadratino dell'angolo retto.
8. Area: l'osservazione dice che qualunque lato può fare da base; nell'esempio con area 50 cm² mostrato il valore h = 50/7 cm che supera il limite di 7 cm.

## Com'era / Com'è ora
**Com'era** (secondo teorema, dimostrazione): «Nella similitudine $HBA\sim HAC$, il lato $BH$ corrisponde ad $AH$, mentre $AH$ del primo triangolo corrisponde a $HC$ del secondo. I rapporti nello stesso ordine danno $\dfrac{BH}{AH}=\dfrac{AH}{HC}$. Si moltiplicano i medi e gli estremi e si ottiene $AH^2=BH\cdot HC$. L'altezza compare come termine medio, perché è un lato comune con un ruolo diverso nelle due corrispondenze.»

**Com'è ora**: «Nella similitudine $HBA\sim HAC$ il vertice $H$ corrisponde ad $H$, $B$ ad $A$ e $A$ a $C$. Quindi il lato $BH$ del primo triangolo corrisponde al lato $AH$ del secondo, mentre il lato $AH$ del primo corrisponde a $HC$ del secondo. Prendendo i rapporti nello stesso ordine si ottiene la proporzione [formula in evidenza]. In una proporzione il prodotto dei medi (i due termini interni, qui $AH$ e $AH$) è uguale al prodotto degli estremi (i due termini esterni, $BH$ e $HC$). Perciò $AH^2=BH\cdot HC$, cioè $h^2=pq$. L'altezza compare due volte, come termine medio della proporzione, […]; per questo si dice che l'altezza è **medio proporzionale** fra le due proiezioni.»

Prima lo studente doveva indovinare da dove venissero le corrispondenze dei lati e che cosa fossero «medi ed estremi»; il termine «termine medio» usato nella scheda 6 non era spiegato.

## Errori trovati nell'originale
- Nessun errore numerico (tutti i numeri ricalcolati con sympy/Python).
- Imprecisione corretta: «confrontare il quadrato della lunghezza maggiore con la somma degli altri due» → «con la somma dei quadrati delle altre due».
- «Questa misura è confrontabile con la metà dell'ipotenusa» → «è minore della metà dell'ipotenusa» (7,2 < 7,5).

## Termini degli esercizi che mancavano in teoria (aggiunti)
- Disuguaglianza triangolare (domande 26, 53, 54; schede 1, 2, 8) → blocco `inverso`/attenzione.
- Criterio LLL (domanda 62) → dimostrazione del teorema inverso.
- Mediana, bisettrice, isoscele con altezza nel punto medio (schede 4, 8; domande 16, 84) → `notevoli` e esempio dell'isoscele.
- Cateto opposto a 60° = √3/2 dell'ipotenusa (domanda 63, scheda 4) → esempio dei 30°.
- Medio proporzionale / termine medio (scheda 6) → `euclide-secondo`.
- Diagonale di un rettangolo (scheda 3, domande 11, 27, 86-90; citano `distanze`) → una riga in `distanze`.
- Notazione Δx, Δy e valore assoluto (scheda 3) → esempio sulle coordinate.

## Segnalazioni su esercizi e domande (non corretti)
- Scheda 2, esercizio 3: pedici in inglese nel file italiano ($d_{\mathrm{hyp}}$, $d_{\mathrm{leg}}$).
- Scheda 3, esercizio 1: unità «in» per i pollici nel file italiano.
- Domanda 11: nella spiegazione la lettera $d$ indica la semidifferenza dei lati, mentre nel resto del capitolo $d$ è la diagonale.
- Nessun errore di calcolo trovato in schede, tracce e domande.

## Dubbi rimasti
- Nessuno sui contenuti. Le figure sono invariate; il testo che le descrive è stato aggiunto accanto, senza toccare le righe `::grafico`.
