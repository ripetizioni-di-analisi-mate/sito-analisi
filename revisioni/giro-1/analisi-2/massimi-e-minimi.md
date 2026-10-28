# Massimi e minimi liberi e vincolati: primo giro

Riletti la teoria, le 7 schede svolte e le 13 tracce; punti critici, hessiane, valori sui bordi e sistemi di Lagrange ricalcolati (nessun errore nei risultati), figure ridisegnate.

## Modifiche fatte

- `teoria/analisi-2/massimi-e-minimi.md`, *Teorema di Weierstrass* (italiano e inglese): "La dimostrazione è analoga a quella in una variabile e si rimanda al capitolo sulle funzioni di più variabili", ma in quel capitolo la dimostrazione è omessa, quindi lo studente che segue il rimando non la trova. Ora: "Il teorema è enunciato in $\mathbb{R}^n$ nel capitolo sulle funzioni di più variabili; la dimostrazione usa le successioni in $\mathbb{R}^n$ e si omette." Didattica.
- Teoria, figura dell'esempio *Rettangolo di area massima* (italiano e inglese): didascalia scritta senza formule ("A(x) = x(10 − x)"), asse verticale chiamato $y$ e legenda $y = x(10 - x)$ mentre il testo parla di $A$, punto senza stile, riga vuota mancante prima della chiusura del blocco. Ora l'asse verticale è $A$, la legenda è $A(x) = x(10 - x)$, il massimo è un punto pieno e la didascalia è "L'area $A(x) = x(10 - x)$ dei rettangoli di perimetro $20$: il massimo è nel vertice, per $x = 5$". Figure.

## Modifiche da fare

- Schede svolte: sono 7 invece di 10. Tipologie frequenti senza esercizio svolto né traccia: (a) estremi assoluti su insiemi non compatti (piano intero o semipiano), con lo studio del comportamento all'infinito; (b) moltiplicatori con due vincoli in tre variabili, per cui la teoria ha un blocco dedicato (*Moltiplicatori con due vincoli*) ma nessun esercizio; (c) estremi su un compatto con frontiera curva risolti con Lagrange sul bordo invece che con la sostituzione; (d) funzioni con punti interni di non derivabilità (per esempio $|x| + y^2 - y$ su un quadrato), che la teoria elenca fra i candidati senza mai mostrarle.
- Teoria, *Segno di una matrice simmetrica*: "semidefinita (caso degenere) se almeno un autovalore è nullo" usa il termine in modo diverso dall'algebra lineare, dove una matrice definita positiva è anche semidefinita positiva. Proposta: chiamare il caso "degenere" e riservare "semidefinita positiva/negativa" alla definizione standard, con una riga.
- Teoria, *Teorema dei moltiplicatori di Lagrange*: la giustificazione "se la attraversassero il valore di $f$ lungo il vincolo starebbe ancora crescendo" è intuitiva e un po' figurata. Proposta: "se la curva di livello attraversasse il vincolo, lungo il vincolo $f$ assumerebbe valori maggiori e minori di $f(x_0, y_0)$ in ogni intorno del punto".
- `svolti/.../4.md`, esercizio 2, figura: il candidato $\left(\dfrac{3}{2}, \dfrac{3}{2}\right)$ non ha l'etichetta del valore $-\dfrac{3}{4}$ e l'etichetta $f = -1$ è spostata in basso a sinistra del punto $(1, 1)$. Proposta: etichette accanto a ciascun candidato con il suo valore.
- "Matrice Hessiana" (maiuscolo, qui) e "matrice hessiana" (minuscolo, in *Calcolo differenziale*): da uniformare.
