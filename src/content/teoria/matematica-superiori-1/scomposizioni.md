---
titolo: "Scomposizione dei polinomi"
sommario: "Raccoglimenti, prodotti notevoli letti al contrario, trinomi e fattori comuni."
---

:::percorso
Sviluppare un prodotto trasforma fattori in una somma. Scomporre esegue il passaggio inverso e cerca un prodotto uguale al polinomio dato. I fattori ottenuti serviranno a semplificare frazioni algebriche e a individuare valori che annullano un’espressione.
:::

## Raccoglimento totale

:::teorema{#comune titolo="Raccogliere un fattore comune"}
Se tutti i termini di un polinomio contengono un fattore comune, la proprietà distributiva permette di portarlo fuori dalla somma. Per esempio

$$
6x^2+9x=3x(2x+3).
$$

Ogni termine interno si ottiene dividendo il corrispondente termine iniziale per il fattore raccolto. Il controllo consiste nel moltiplicare nuovamente: $3x\cdot2x=6x^2$ e $3x\cdot3=9x$.

Il fattore comune può essere negativo. La scomposizione $-4x^2-8x=-4x(x+2)$ mantiene correttamente entrambi i segni. Una scomposizione è un’identità tra polinomi e vale anche per $x=0$; le condizioni di non annullamento servono quando si esegue una divisione.
:::

## Raccoglimento parziale

:::teorema{#parziale titolo="Far comparire un binomio comune"}
Il raccoglimento parziale organizza i termini in gruppi. Da ogni gruppo si raccoglie un fattore, cercando la stessa espressione residua:

$$
\begin{aligned}
xy+3x+2y+6
&=x(y+3)+2(y+3)\\
&=(x+2)(y+3).
\end{aligned}
$$

La seconda uguaglianza raccoglie il binomio comune $y+3$. L’ordine dei termini si può cambiare grazie alla proprietà commutativa della somma. Il raggruppamento è utile quando produce fattori comuni effettivi, verificabili con la distributiva.
:::

## Prodotti notevoli in senso inverso

:::teorema{#quadrati titolo="Differenze di quadrati e trinomi quadrati"}
Le formule già studiate si possono leggere da destra a sinistra:

$$
a^2-b^2=(a-b)(a+b),
$$

$$
a^2+2ab+b^2=(a+b)^2,\qquad
a^2-2ab+b^2=(a-b)^2.
$$

Per esempio $9x^2-16y^2=(3x-4y)(3x+4y)$ e $x^2-8x+16=(x-4)^2$.

Per riconoscere un trinomio quadrato occorre controllare anche il termine centrale. I quadrati estremi, da soli, non bastano. Il polinomio $x^2+2x+9$ non è $(x+3)^2$, perché quel quadrato avrebbe termine centrale $6x$.
:::

## Trinomi con coefficiente iniziale uno

:::teorema{#trinomio titolo="Somma e prodotto di due numeri"}
Dal prodotto $(x+r)(x+s)=x^2+(r+s)x+rs$ segue un metodo per scomporre $x^2+bx+c$: si cercano due numeri $r,s$ la cui somma sia $b$ e il cui prodotto sia $c$.

Per $x^2+5x+6$, i numeri sono $2$ e $3$, quindi il prodotto è $(x+2)(x+3)$. Per $x^2-5x+6$ sono $-2$ e $-3$, quindi si ottiene $(x-2)(x-3)$. Per $x^2+x-6$ sono $3$ e $-2$.

La ricerca di interi può non riuscire: questo significa che il metodo non trova fattori lineari con coefficienti interi, senza autorizzare una scomposizione inventata.
:::

## Più passaggi e verifica finale

:::esempio{#completa titolo="Scomporre tutti i fattori ancora scomponibili"}
Nel polinomio $3x^3-3x$ si raccoglie prima $3x$, poi si usa la differenza di quadrati:

$$
3x^3-3x=3x(x^2-1)=3x(x-1)(x+1).
$$

Anche $x^4-16$ richiede due passaggi:

$$
x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4).
$$

Il fattore $x^2+4$ non è una differenza di quadrati reali.

Per controllare una scomposizione si sviluppa il prodotto e si confrontano tutti i coefficienti. Sostituire qualche valore numerico può scoprire un errore, ma non prova da solo un’identità per ogni valore.
:::

## MCD, mcm e valori che annullano i fattori

:::osservazione{#mcd-mcm titolo="Confrontare le parti fattorizzate"}
Per monomi con coefficienti interi positivi, il MCD usa il MCD dei coefficienti e il minimo esponente di ogni lettera comune. Il mcm usa il mcm dei coefficienti e il massimo esponente di tutte le lettere presenti. Per $12x^3y^2$ e $18x^2y^4$, si ottengono $6x^2y^2$ e $36x^3y^4$.

Una forma fattorizzata permette anche di riconoscere rapidamente uno zero. Per $P(x)=(x+3)(x-1)$, si ha $P(-3)=0$, perché il primo fattore si annulla. Questo uso non richiede di sviluppare il polinomio.
:::
