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

Un sistema è **determinato** se ha una sola soluzione, **impossibile** se non ne ha, **indeterminato** se ne ha infinite. In un sistema lineare di due incognite ogni equazione con almeno un coefficiente non nullo rappresenta una retta. Due rette incidenti danno una soluzione, due parallele distinte nessuna, due coincidenti infinite.
:::

:::esempio{titolo="Una coppia può appartenere a una sola delle rette"}
Sul grafico le rette $y=7-x$ e $y=x-1$ si incontrano in $(4;3)$. La coppia $(3;4)$ compare sulla retta decrescente perché la somma delle coordinate è sette. Alla stessa ascissa, la retta crescente ha invece ordinata $2$. Rilevare dove si trova ciascun punto rende visibile il controllo che si fa per sostituzione. Se la graffa contiene due equazioni, sono richieste entrambe le condizioni.
::grafico{f="7-x;x-1" xmin=0 xmax=8 ymin=-1 ymax=8 punti="4,3,pieno,P;3,4,pieno,Q" titolo="P appartiene a entrambe le rette, mentre Q appartiene soltanto alla retta decrescente"}
:::

## Sostituzione e confronto

::::teorema{#sostituzione titolo="Riduzione a una sola incognita"}
Nel **metodo di sostituzione** si ricava un'incognita da un'equazione e si inserisce la sua espressione nell'altra. Il sistema diventa un'equazione in una sola incognita insieme alla relazione che permette di trovare la seconda.

Per $\begin{cases}x+y=7\\x-y=1\end{cases}$ la prima dà $y=7-x$. Nella seconda segue $x-(7-x)=1$, quindi $2x=8$ e $x=4$. Infine $y=7-4=3$.

Nel **metodo del confronto** si ricava la stessa incognita da entrambe le equazioni e si uguagliano le espressioni ottenute. Per $y=2x+1$ e $y=-x+7$ si ha $2x+1=-x+7$, da cui $x=2$ e $y=5$. L'uguaglianza nasce dal fatto che entrambe le espressioni devono rappresentare lo stesso valore di $y$.

:::dimostrazione
Se la prima equazione equivale a $y=u(x)$, ogni soluzione deve usare proprio quel valore di $y$. Nell’altra equazione si può quindi scrivere $u(x)$ al posto di $y$. In senso inverso, ogni $x$ che soddisfa la nuova equazione fornisce la coppia $(x;u(x))$. Questa soddisfa la prima equazione per costruzione e la seconda per il calcolo eseguito. È essenziale conservare la relazione $y=u(x)$ per recuperare la seconda coordinata.
:::
::::

:::esempio{titolo="Sostituzione con una soluzione frazionaria"}
Nel sistema

$$
\begin{cases}
3x-2y=1\\
x+y=4
\end{cases}
$$

la seconda equazione permette di ricavare $y=4-x$ senza introdurre denominatori. La prima diventa

$$
\begin{aligned}
3x-2(4-x)&=1\\[6pt]
3x-8+2x&=1\\[6pt]
5x&=9.
\end{aligned}
$$

La soluzione è $x=\dfrac95$ e $y=4-\dfrac95=\dfrac{11}5$. L'espressione sostituita compare moltiplicata per $-2$. Perciò il termine $-x$ in $4-x$ contribuisce con $+2x$.
:::

:::osservazione{titolo="Scegliere una riga che evita frazioni"}
Nel sistema precedente il coefficiente di $y$ nella seconda equazione è $1$. La relazione $y=4-x$ si trova senza divisioni. La prima equazione isolerebbe la stessa incognita come $y=\dfrac{3x-1}{2}$. È una scelta equivalente, ma introduce subito il denominatore $2$. Il confronto delle due forme riscrive lo stesso problema come uguaglianza fra le ordinate alla medesima ascissa.
::grafico{f="4-x;(3*x-1)/2" xmin=0 xmax=4 ymin=-1 ymax=6 punti="1.8,2.2,pieno,P" titolo="Le due rette hanno la stessa ordinata per $x=\dfrac95$"}
:::

## Il metodo di riduzione

::::teorema{#riduzione titolo="Eliminazione di un’incognita"}
Sommando a un'equazione un multiplo dell'altra si ottiene un sistema equivalente, cioè con le stesse soluzioni. Si scelgono i multipli in modo che i coefficienti di una delle incognite diventino opposti.

Nel sistema $\begin{cases}2x+3y=13\\3x-2y=0\end{cases}$ si moltiplica la prima equazione per $2$ e la seconda per $3$. Sommando segue $13x=26$, quindi $x=2$. Dalla seconda equazione $6-2y=0$, quindi $y=3$.

Se si moltiplica un'intera equazione per un numero, anche il termine noto viene moltiplicato. Per esempio $x-y=2$ diventa $3x-3y=6$. Questo passaggio è utilizzabile perché il moltiplicatore è diverso da zero.

:::dimostrazione
Una coppia che soddisfa entrambe le equazioni soddisfa anche la seconda più $k$ volte la prima. Conservando la prima, si può sottrarre $k$ volte quella stessa equazione dalla nuova seconda e recuperare l’originale. Il passaggio è dunque reversibile per qualsiasi $k$. Moltiplicare un’intera equazione per un fattore è reversibile quando quel fattore è non nullo, perché si può dividere per esso.
:::
::::

:::esempio{titolo="Riduzione mediante sottrazione"}
Nel sistema

$$
\begin{cases}
3x+4y=10\\
5x+6y=16
\end{cases}
$$

i coefficienti di $y$ diventano entrambi $12$ moltiplicando la prima equazione per $3$ e la seconda per $2$. Le equazioni risultanti sono $9x+12y=30$ e $10x+12y=32$. La seconda meno la prima dà $x=2$. Sostituendo nella prima equazione iniziale si trova $6+4y=10$, perciò $y=1$.

Si conserva una delle due equazioni mentre si sostituisce l'altra con la differenza. Infatti, sommando alla differenza l'equazione conservata, si recupera quella sostituita.
:::

:::esempio{titolo="Usare multipli piccoli per eliminare"}
In $\begin{cases}4x-6y=2\\6x+9y=21\end{cases}$ si vuole eliminare $y$. Il minimo comune multiplo dei moduli $6$ e $9$ è $18$. Si moltiplica la prima riga per $3$ e la seconda per $2$. Le nuove righe hanno coefficienti $-18$ e $18$, quindi si sommano direttamente.
$$
\begin{aligned}
12x-18y&=6,\\[6pt]
12x+18y&=42,\\[6pt]
24x&=48\quad\Longrightarrow\quad x=2.
\end{aligned}
$$
La prima equazione iniziale ora dà $8-6y=2$, quindi $y=1$. La seconda verifica il calcolo con $12+9=21$. Si poteva usare un multiplo comune più grande. L’uso di $18$ limita i coefficienti durante i passaggi.
:::

## Determinanti e Cramer

::::teorema{#cramer titolo="Formule di Cramer"}
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

:::dimostrazione
Usando $a$ volte la seconda equazione meno $d$ volte la prima si ottiene anche $Dy=D_y$. Se $D\ne0$, le due identità fissano una sola coppia candidata. Per vedere che soddisfa le equazioni iniziali, si sviluppano i prodotti
$$
\begin{aligned}
aD_x+bD_y&=a(ce-bf)+b(af-cd)=cD,\\[6pt]
dD_x+eD_y&=d(ce-bf)+e(af-cd)=fD.
\end{aligned}
$$
Dividendo per $D$ si recuperano i due termini noti. Le condizioni risultano dunque sia necessarie sia sufficienti.
:::
::::

:::esempio{titolo="Un’equazione verticale nei determinanti"}
Per $\begin{cases}x=3\\x+y=5\end{cases}$ i coefficienti della prima riga sono $1$ e $0$. Si ottengono $D=1$, $D_x=3$ e $D_y=2$. Graficamente, la prima riga impone una retta verticale, perciò non si può scrivere $y$ in funzione di $x$ per quella riga. Il metodo dei determinanti funziona comunque perché la condizione riguarda $D$. Il calcolo più rapido, in questo caso, è sostituire $x=3$ nella seconda riga.
::grafico{f="5-x" linee="3,-1 3,6" punti="3,2,pieno,P" xmin=0 xmax=6 ymin=-1 ymax=6 titolo="La retta verticale x = 3 taglia y = 5 − x in un solo punto"}
:::

## Sistemi impossibili e indeterminati

::::teorema{#classificazione titolo="Discussione delle soluzioni"}
Se la riduzione produce $0=k$ con $k\ne0$, il sistema è impossibile. Se produce $0=0$, l'equazione eliminata era conseguenza dell'altra; se resta una sola equazione lineare effettiva in due incognite, il sistema è indeterminato.

Per $\begin{cases}x+y=3\\2x+2y=8\end{cases}$ la seconda meno il doppio della prima dà $0=2$, quindi non ci sono soluzioni. Sostituendo $8$ con $6$ si ottiene $0=0$ e le soluzioni sono $(t;3-t)$ per ogni $t\in\mathbb R$.

Quando tutti i coefficienti di un'equazione sono nulli, si esamina direttamente il termine noto. L'equazione $0x+0y=0$ non aggiunge condizioni; $0x+0y=1$ rende impossibile l'intero sistema. Questa lettura evita divisioni per coefficienti nulli.

::grafico{f="3-x;4-x" xmin=-2 xmax=5 ymin=-2 ymax=7 titolo="Le rette $y=3-x$ e $y=4-x$ sono parallele e distinte"}

:::dimostrazione
Una riga con tutti i coefficienti nulli impone soltanto un’uguaglianza tra numeri. Se è falsa, nessuna coppia può soddisfarla. Se è vera, ogni coppia la soddisfa e restano solo le altre eventuali condizioni. Con una sola relazione effettiva $ax+by=c$, almeno uno fra $a$ e $b$ è non nullo. Si può quindi assegnare liberamente un valore a una variabile e ricavare l’altra, ottenendo infinite coppie.
:::
::::

:::osservazione{titolo="Il determinante nullo richiede una seconda verifica"}
I rapporti di Cramer non sono definiti quando $D=0$. Se resta un’equazione con coefficienti non nulli, la riduzione può mostrare una contraddizione oppure che le equazioni descrivono la stessa retta. Con due righe nulle e due termini noti nulli, ogni coppia del piano è ammessa.

| Dopo la riduzione | Insieme delle soluzioni |
|---|---|
| Una condizione $0=k$ con $k\ne0$ | Vuoto |
| Una sola equazione effettiva e una riga identica | Una retta |
| Due identità $0=0$ | Tutto il piano |
| Due condizioni indipendenti | Un punto |

Per $x+y=3$ e $2x+2y=6$, entrambi i membri della seconda riga sono il doppio della prima. Raddoppiare una riga cambia i coefficienti e lascia invariata la retta dei punti che la soddisfano.
::grafico{f="3-x" xmin=-2 xmax=5 ymin=-2 ymax=6 punti="0,3;1,2;3,0" titolo="Una sola retta contiene tutte le soluzioni di entrambe le equazioni"}
:::

## Frazioni e parametri

:::teorema{#parametri titolo="Condizioni e casi da separare"}
I denominatori numerici si eliminano moltiplicando ogni equazione per il minimo comune multiplo. Se compaiono denominatori letterali, si scrivono prima le condizioni che li rendono non nulli e si verificano le soluzioni candidate.

Un **parametro** è una lettera il cui valore è fissato durante la risoluzione. Per $\begin{cases}kx+y=1\\2x+y=3\end{cases}$ il determinante è $k-2$. Se $k\ne2$, sottraendo segue $x=-\dfrac2{k-2}$ e poi $y=1-kx$. Se $k=2$, le due equazioni avrebbero lo stesso primo membro e termini noti distinti, quindi il sistema è impossibile.

La divisione per $k-2$ è stata usata soltanto nel caso in cui quel fattore è diverso da zero. Il caso escluso va studiato nelle equazioni iniziali.
:::

:::esempio{titolo="Una famiglia di soluzioni nel caso singolare"}
Si consideri

$$
\begin{cases}
kx+2y=6\\
3x+y=3.
\end{cases}
$$

Dalla prima equazione si sottrae il doppio della seconda. Si ottiene $(k-6)x=0$. Per $k\ne6$ segue $x=0$ e la seconda equazione dà $y=3$. Per $k=6$ la prima equazione è il doppio della seconda. Ogni coppia $(t;3-3t)$, con $t\in\mathbb R$, soddisfa entrambe. Il determinante si annulla in quest'ultimo caso e la riduzione mostra che le soluzioni sono infinite.
:::

:::esempio{titolo="Un sistema che diventa lineare su un dominio ristretto"}
Nella prima riga di
$$
\begin{cases}
\dfrac{x^2-4}{x-2}+y=7\\
x-y=-1
\end{cases}
$$
si esclude $x=2$ prima di cancellare. Per le coppie ammesse, la prima equazione diventa $x+y=5$. Sommandola all’altra si ottiene $2x=4$ e quindi la coppia candidata $(2;3)$. L’ascissa è esclusa, dunque il sistema di partenza è impossibile. La soluzione del sistema lineare semplificato si trova esattamente nel punto mancante della prima relazione.
::grafico{f="5-x;x+1" xmin=-1 xmax=6 ymin=-1 ymax=7 punti="2,3,vuoto" titolo="L’intersezione delle formule ridotte cade dove la prima equazione è indefinita"}
:::

## Tre incognite e interpretazione grafica

::::teorema{#tre-incognite titolo="Riduzione di sistemi più grandi"}
In un sistema lineare di tre incognite si elimina una lettera da due coppie di equazioni. Si risolve il sistema di due incognite ottenuto e si recupera l'ultima incognita per sostituzione. Tutte le equazioni originali devono essere soddisfatte.

Se $x+y+z=9$, $x+y=5$ e $x-y=1$, sottraendo le prime due relazioni si trova $z=4$. Le ultime due danno $x=3$ e $y=2$. La verifica completa è $3+2+4=9$, $3+2=5$, $3-2=1$.

Nel piano, l'intersezione di due rette rende visibile la soluzione di un sistema di due equazioni.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-2 xmax=6 ymin=-2 ymax=10 titolo="Le rette si incontrano nella soluzione $(2;5)$"}

:::dimostrazione
Se il coefficiente di $x$ in una delle tre equazioni è non nullo, usa quella riga per eliminare $x$ dalle altre due. Le sottrazioni di multipli sono reversibili perché la prima riga rimane. Si risolvono le due condizioni rimaste in $y$ e $z$, poi si determina $x$ dalla riga che la contiene. Se nessuna riga contiene $x$, questa variabile può essere libera, purché le condizioni su $y$ e $z$ siano compatibili.
:::
::::

:::esempio{titolo="Eliminare la stessa incognita da due righe diverse"}
Da $x+y+z=6$, $x-y+2z=5$ e $x+2y-z=2$ si sottrae la prima equazione da entrambe le altre. Restano $-2y+z=-1$ e $y-2z=-4$. La prima nuova equazione dà $z=2y-1$. Sostituendo nella seconda si ottiene $-3y=-6$, perciò $y=2$ e $z=3$. Dalla riga conservata segue $x=1$. La verifica nelle due righe originali trasformate dà $1-2+6=5$ e $1+4-3=2$.
::grafico{f="2*x-1;(x+4)/2" xmin=-1 xmax=5 ymin=-1 ymax=7 nomi="y,z" legenda="z=2y-1;z=(y+4)/2" punti="2,3,pieno,P" titolo="Il sistema ridotto determina y e z prima di recuperare x"}
:::

## Problemi con due dati

:::osservazione{#problemi titolo="Scelta delle incognite e verifica dei vincoli"}
Per tradurre un problema si assegnano nomi alle quantità richieste e si scrive un'equazione per ciascun dato indipendente. Le incognite conservano lo stesso significato in tutte le relazioni. Dopo il calcolo si controllano i vincoli del problema.

Se due biglietti interi e uno ridotto costano $23$ euro, mentre un intero e due ridotti costano $19$ euro, ponendo $i$ e $r$ i prezzi segue $\begin{cases}2i+r=23\\i+2r=19\end{cases}$. La soluzione è $i=9$, $r=5$ euro. Sostituendo si ritrovano entrambi i totali.

Un numero di persone deve essere intero e non negativo; una lunghezza deve essere positiva. Una soluzione algebrica che viola queste condizioni non risolve il problema concreto. Anche le unità devono essere coerenti prima di costruire le equazioni.
:::

:::esempio{titolo="Due tariffe con lo stesso costo"}
Siano $n$ il numero di lezioni e $C$ il costo in euro. La prima tariffa richiede $12$ euro di iscrizione e $4$ euro per lezione. La seconda richiede $3$ euro di iscrizione e $7$ euro per lezione. Per trovare quando le due tariffe coincidono si impone lo stesso valore di $C$.

$$
\begin{cases}
C=12+4n\\
C=3+7n.
\end{cases}
$$

Il confronto dà $12+4n=3+7n$, perciò $3n=9$ e $n=3$. Entrambe le tariffe costano allora $24$ euro. L'ascissa del punto di intersezione è un intero non negativo, quindi la soluzione ha senso anche come numero di lezioni.

::grafico{f="12+4*x;3+7*x" legenda="C=12+4n;C=3+7n" nomi="n,C" xmin=-0.5 xmax=6 ymin=-2 ymax=49 punti="0,12;0,3;3,24,pieno,P" segmenti="3,0,3,24;0,24,3,24" titolo="Le due tariffe costano 24 euro per tre lezioni"}

:::

:::esempio{titolo="Un’intersezione fra due numeri interi di lezioni"}
Con tariffe $C=11+4n$ e $C=2+8n$, l’uguaglianza richiede $4n=9$ e quindi $n=\dfrac94$. La soluzione delle equazioni esiste, ma il numero di lezioni è un intero non negativo. In $n=2$ i costi sono $19$ e $18$ euro. In $n=3$ sono $23$ e $26$ euro. Si può dunque distinguere quale piano costa meno ai due interi vicini anche se nessuno dei due realizza la parità.
::grafico{f="11+4*x;2+8*x" xmin=0 xmax=4 ymin=0 ymax=35 nomi="n,C" legenda="C=11+4n;C=2+8n" punti="2,19;2,18;3,23;3,26;2.25,20,vuoto" titolo="La parità cade fra due e tre lezioni e il costo minore cambia fra i due interi"}
:::
