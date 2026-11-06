---
titolo: "Sistemi lineari"
sommario: "Sistemi di due e tre equazioni, metodi di sostituzione, confronto e riduzione, Cramer, discussione con un parametro e problemi."
---

## Equazioni da soddisfare insieme

:::definizione{#soluzione titolo="Soluzione di un sistema"}
Una **soluzione di un sistema** di due equazioni in $x$ e $y$ è una coppia ordinata che soddisfa entrambe le equazioni. La prima coordinata sostituisce sempre $x$, la seconda sempre $y$. La graffa indica che le due condizioni devono valere contemporaneamente.

Nel sistema
$$
\begin{cases}x+y=7\\x-y=1\end{cases}
$$
la coppia $(4;3)$ è una soluzione, perché $4+3=7$ e $4-3=1$. La coppia $(3;4)$ soddisfa soltanto la prima equazione, quindi non risolve il sistema.

Un sistema è **determinato** se ha una sola soluzione, **impossibile** se non ne ha, **indeterminato** se ne ha infinite. Nei sistemi lineari di due incognite le equazioni rappresentano rette. Due rette incidenti danno una soluzione, due parallele distinte nessuna, due coincidenti infinite.
:::

## Sostituzione e confronto

:::teorema{#sostituzione titolo="Riduzione a una sola incognita"}
Nel **metodo di sostituzione** si ricava un'incognita da un'equazione e si inserisce la sua espressione nell'altra. Il sistema diventa un'equazione in una sola incognita insieme alla relazione che permette di trovare la seconda.

Per $\begin{cases}x+y=7\\x-y=1\end{cases}$ la prima dà $y=7-x$. Nella seconda segue $x-(7-x)=1$, quindi $2x=8$ e $x=4$. Infine $y=7-4=3$.

Nel **metodo del confronto** si ricava la stessa incognita da entrambe le equazioni e si uguagliano le espressioni ottenute. Per $y=2x+1$ e $y=-x+7$ si ha $2x+1=-x+7$, da cui $x=2$ e $y=5$. L'uguaglianza nasce dal fatto che entrambe le espressioni devono rappresentare lo stesso valore di $y$.
:::

## Il metodo di riduzione

:::teorema{#riduzione titolo="Eliminazione di un’incognita"}
Sommando a un'equazione un multiplo dell'altra si ottiene un sistema equivalente, cioè con le stesse soluzioni. Si scelgono i multipli in modo che i coefficienti di una delle incognite diventino opposti.

Nel sistema $\begin{cases}2x+3y=13\\3x-2y=0\end{cases}$ si moltiplica la prima equazione per $2$ e la seconda per $3$. Sommando segue $13x=26$, quindi $x=2$. Dalla seconda equazione $6-2y=0$, quindi $y=3$.

Se si moltiplica un'intera equazione per un numero, anche il termine noto viene moltiplicato. Per esempio $x-y=2$ diventa $3x-3y=6$. Questo passaggio è utilizzabile perché il moltiplicatore è diverso da zero.
:::

## Determinanti e Cramer

:::teorema{#cramer titolo="Formule di Cramer"}
Per il sistema $\begin{cases}ax+by=c\\dx+ey=f\end{cases}$ si definiscono
$$
D=ae-bd,\qquad D_x=ce-bf,\qquad D_y=af-cd.
$$
Se $D\ne0$, la soluzione unica è
$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D}.
$$
Per $\begin{cases}2x+y=5\\x-y=1\end{cases}$ si ottengono $D=-3$, $D_x=-6$, $D_y=-3$, quindi $(x;y)=(2;1)$.

I tre determinanti possono essere scritti come $\begin{vmatrix}a&b\\d&e\end{vmatrix}$, $\begin{vmatrix}c&b\\f&e\end{vmatrix}$ e $\begin{vmatrix}a&c\\d&f\end{vmatrix}$. Il determinante di una matrice quadrata di due righe è il prodotto della diagonale principale meno quello dell'altra diagonale.

La formula per $x$ deriva eliminando $y$ con la combinazione $e$ volte la prima equazione meno $b$ volte la seconda. Si ottiene $(ae-bd)x=ce-bf$, che si può dividere per $D$ soltanto quando $D\ne0$.
:::

## Sistemi impossibili e indeterminati

:::teorema{#classificazione titolo="Discussione delle soluzioni"}
Se la riduzione produce $0=k$ con $k\ne0$, il sistema è impossibile. Se produce $0=0$, l'equazione eliminata era conseguenza dell'altra; se resta una sola equazione lineare effettiva in due incognite, il sistema è indeterminato.

Per $\begin{cases}x+y=3\\2x+2y=8\end{cases}$ la seconda meno il doppio della prima dà $0=2$, quindi non ci sono soluzioni. Sostituendo $8$ con $6$ si ottiene $0=0$ e le soluzioni sono $(t;3-t)$ per ogni $t\in\mathbb R$.

Quando tutti i coefficienti di un'equazione sono nulli, si esamina direttamente il termine noto. L'equazione $0x+0y=0$ non aggiunge condizioni; $0x+0y=1$ rende impossibile l'intero sistema. Questa lettura evita divisioni per coefficienti nulli.

::grafico{f="x+1;x+3" xmin=-3 xmax=4 ymin=-3 ymax=7 titolo="Rette parallele distinte: nessuna coppia soddisfa entrambe le equazioni"}
:::

## Frazioni e parametri

:::teorema{#parametri titolo="Condizioni e casi da separare"}
I denominatori numerici si eliminano moltiplicando ogni equazione per il minimo comune multiplo. Se compaiono denominatori letterali, si scrivono prima le condizioni che li rendono non nulli e si verificano le soluzioni candidate.

Un **parametro** è una lettera il cui valore è fissato durante la risoluzione. Per $\begin{cases}kx+y=1\\2x+y=3\end{cases}$ il determinante è $k-2$. Se $k\ne2$, sottraendo segue $x=-\dfrac2{k-2}$ e poi $y=1-kx$. Se $k=2$, le due equazioni avrebbero lo stesso primo membro e termini noti distinti, quindi il sistema è impossibile.

La divisione per $k-2$ è stata usata soltanto nel caso in cui quel fattore è diverso da zero. Il caso escluso va studiato nelle equazioni iniziali.
:::

## Tre incognite e interpretazione grafica

:::teorema{#tre-incognite titolo="Riduzione di sistemi più grandi"}
In un sistema lineare di tre incognite si elimina una lettera da due coppie di equazioni. Si risolve il sistema di due incognite ottenuto e si recupera l'ultima incognita per sostituzione. Tutte le equazioni originali devono essere soddisfatte.

Se $x+y+z=9$, $x+y=5$ e $x-y=1$, sottraendo le prime due relazioni si trova $z=4$. Le ultime due danno $x=3$ e $y=2$. La verifica completa è $3+2+4=9$, $3+2=5$, $3-2=1$.

Nel piano, l'intersezione di due rette rende visibile la soluzione di un sistema di due equazioni.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-2 xmax=6 ymin=-2 ymax=10 titolo="Le rette si incontrano nella soluzione $(2;5)$"}
:::

## Problemi con due dati

:::osservazione{#problemi titolo="Scelta delle incognite e verifica dei vincoli"}
Per tradurre un problema si assegnano nomi alle quantità richieste e si scrive un'equazione per ciascun dato indipendente. Le incognite conservano lo stesso significato in tutte le relazioni. Dopo il calcolo si controllano i vincoli del problema.

Se due biglietti interi e uno ridotto costano $23$ euro, mentre un intero e due ridotti costano $19$ euro, ponendo $i$ e $r$ i prezzi segue $\begin{cases}2i+r=23\\i+2r=19\end{cases}$. La soluzione è $i=9$, $r=5$ euro. Sostituendo si ritrovano entrambi i totali.

Un numero di persone deve essere intero e non negativo; una lunghezza deve essere positiva. Una soluzione algebrica che viola queste condizioni non risolve il problema concreto. Anche le unità devono essere coerenti prima di costruire le equazioni.
:::
