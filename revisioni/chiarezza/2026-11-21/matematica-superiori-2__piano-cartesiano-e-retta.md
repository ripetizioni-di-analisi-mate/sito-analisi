# Revisione di chiarezza · matematica-superiori-2 / piano-cartesiano-e-retta

Controllo (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

## Parole

- Italiano: 2189 → 3719 (×1,70, entro il vincolo)
- Inglese: 2235 → 3857 (×1,73, entro 1,8)

## Che cosa è cambiato

1. Il primo blocco definisce piano cartesiano, perpendicolari, asse $x$/$y$, origine, ascissa, ordinata, quadranti (elenco con i segni), proiezioni, riflessione rispetto a un asse e valore assoluto, prima di usarli.
2. Distanza e punto medio: notazione $x_P$, spostamenti $\Delta x$, $\Delta y$ (usati nelle schede 1 e 3, prima assenti), motivo della formula con Pitagora enunciato, punto medio definito; il calcolo per $A(1;2)$, $B(4;6)$ è scritto per intero.
3. Forma esplicita, coefficiente angolare e intercetta: perché $q$ è l'ordinata sull'asse verticale ($x=0$), calcolo di $m$ con i numeri, crescente/decrescente/orizzontale in elenco, motivo per cui la verticale non ha pendenza. Dimostrazione con la sottrazione scritta.
4. Forma generale: definiti forma implicita, coefficienti, termine noto, i due casi $b\ne0$ / $b=0$ in elenco, conti delle intersezioni con gli assi; aggiunta l'equazione **equivalente** (moltiplicazione per un numero non nullo) e il simbolo $\Longleftrightarrow$.
5. Retta per un punto: lettura di $x_0$, $y_0$ e da dove viene la formula (pendenza costante); costruzione per due punti con i due casi in elenco.
6. Parallele e perpendicolari: rette parallele distinte / coincidenti / **incidenti** in elenco, perpendicolari definite, regola dell'**opposto del reciproco**; nella dimostrazione la rotazione $(u;v)\to(-v;u)$ con il senso antiorario spiegato.
7. Intersezioni: sistema scritto con la graffa, sistema impossibile e indeterminato definiti. Distanza: definiti distanza punto-retta e **piede** della perpendicolare; dimostrazione con i passaggi algebrici e Pitagora; figura descritta ($H(1{,}2;1{,}6)$ ricalcolato).
8. Modelli: lettura di $C(x)$, definizione di dominio, retta $AB$ del triangolo ricavata passo per passo, conti delle tariffe con i numeri. Il testo attorno a ogni figura ne descrive il contenuto. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle 9 figure identici; dati numerici invariati.

## Com'era / Com'è ora (blocco `#posizioni`)

**Com'era**

> Due rette non verticali sono perpendicolari se $m_1m_2=-1$. Per esempio una perpendicolare a $y=2x+1$ ha coefficiente $-\dfrac12$. La retta orizzontale e quella verticale sono perpendicolari e vanno trattate separatamente.

**Com'è ora**

> Due rette sono **perpendicolari** se si incontrano formando angoli retti. Due rette non verticali, con coefficienti angolari $m_1$ e $m_2$, sono perpendicolari se il prodotto $m_1m_2$ vale $-1$. Quindi il coefficiente della perpendicolare è l'**opposto del reciproco** di quello dato, cioè si scambiano numeratore e denominatore e si cambia il segno. Per esempio una perpendicolare a $y=2x+1$ ha coefficiente $-\dfrac12$, e infatti $2\cdot\left(-\dfrac12\right)=-1$. Una retta orizzontale e una verticale sono perpendicolari, ma la verticale non ha coefficiente angolare, quindi questo caso va trattato separatamente.

## Errori trovati nell'originale

Nessun errore numerico: tutti i risultati ricalcolati con sympy ($AB=5$, $M(\frac52;4)$, $x=2$ e $8$, $m=2$ e $-\frac12$, $(2;5)$, $d=2$, $H(1{,}2;1{,}6)$, area $11$, $n=3$ e $\frac72$, costi 14/15 e 17/16). Precisato «cambia soltanto il segno dell'ascissa» nella riflessione (prima «cambia soltanto l'ascissa») e nell'osservazione sulle verticali chiarito che $x=-1$ è la retta data.

## Aggiunte per coprire esercizi e domande

- $\Delta x$, $\Delta y$ (schede 1, 3); «forma implicita» ed «equazione equivalente», simbolo $\Longleftrightarrow$ (schede 4, 5, 6, 7; domande 13, 29); «termine noto» (domande 5, 13, 29, 63).
- «Incidenti» e «coincidenti» (domande 66-70); «opposto del reciproco» (domande 6, 71, 72); regola di rotazione $(u;v)\to(-v;u)$ (domanda 74, scheda 6).
- «Piede» della perpendicolare (scheda 8, domanda 84); quadranti con i segni e valore assoluto (domande 17, 47); asse $x$ e asse $y$ come nomi degli assi (domande 25, 61-63); sistema impossibile/indeterminato; dominio e lettura di $C(x)$.
- Riduzione dei coefficienti prima della distanza fra parallele, con $6x+8y-12=0$ diviso per $2$ (domanda 40).

## Problemi negli esercizi e nelle domande (non corretti)

- Scheda svolta 3, esercizio 2: «Quelli quelli sull'orizzontale» (parola ripetuta).
- Domande 34, 46, 51, 76, 77, 81, 82, 86, 87: coordinate scritte con la virgola, $(2,9)$, invece del punto e virgola usato nel resto del capitolo.
- Domanda 8: «lunghezza del vettore dei coefficienti», termine che la teoria del 2° anno non introduce.

## Dubbi rimasti

- Il file inglese esistente usa la grafia americana (*counterclockwise*, *traveled*): l'ho mantenuta, anche se alcune domande inglesi del capitolo usano *anticlockwise* e *litres*.
- In inglese sistema impossibile e indeterminato sono resi con *inconsistent* e *dependent*.
