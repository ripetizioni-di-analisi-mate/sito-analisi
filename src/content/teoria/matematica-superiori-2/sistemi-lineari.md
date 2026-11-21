---
titolo: "Sistemi lineari"
sommario: "Sistemi di due e tre equazioni, metodi di sostituzione, confronto e riduzione, Cramer, discussione con un parametro e problemi."
---

## Equazioni da soddisfare insieme

:::definizione{#soluzione titolo="Soluzione di un sistema"}
Un'**equazione lineare** in $x$ e $y$ è un'equazione come $3x-2y=1$, in cui le **incognite** $x$ e $y$ (le lettere di cui si cerca il valore) compaiono solo al primo grado, cioè senza esponenti e senza prodotti fra loro. I numeri che moltiplicano le incognite si chiamano **coefficienti** ($3$ e $-2$); il numero senza lettere si chiama **termine noto** ($1$). La parte a sinistra dell'uguale è il **primo membro**, quella a destra il **secondo membro**.

Un **sistema** è un gruppo di equazioni da risolvere insieme e si scrive con una graffa a sinistra. Una **soluzione di un sistema** di due equazioni in $x$ e $y$ è una coppia ordinata che soddisfa entrambe le equazioni. La coppia si scrive fra parentesi tonde con il punto e virgola, come $(4;3)$. La prima coordinata sostituisce sempre $x$, la seconda sempre $y$. La graffa indica che le due condizioni devono valere contemporaneamente.

Nel sistema
$$
\begin{cases}x+y=7\\x-y=1\end{cases}
$$
la coppia $(4;3)$ è una soluzione, perché $4+3=7$ e $4-3=1$. La coppia $(3;4)$ soddisfa soltanto la prima equazione, perché $3-4=-1$ e non $1$; quindi non risolve il sistema.

Un sistema è **determinato** se ha una sola soluzione, **impossibile** se non ne ha, **indeterminato** se ne ha infinite.

Nel piano cartesiano ogni coppia $(x;y)$ è un punto, di cui $x$ è l'**ascissa** (coordinata orizzontale) e $y$ l'**ordinata** (coordinata verticale). In un sistema lineare di due incognite ogni equazione con almeno un coefficiente non nullo rappresenta una retta, formata dai punti che la soddisfano. Una soluzione del sistema è quindi un punto che sta su entrambe le rette.
- Due rette **incidenti**, cioè che si incontrano in un punto, danno una soluzione.
- Due rette **parallele distinte** non hanno punti comuni, quindi il sistema non ha soluzioni.
- Due rette **coincidenti**, cioè la stessa retta scritta in due modi, danno infinite soluzioni.
:::

:::esempio{titolo="Una coppia può appartenere a una sola delle rette"}
Le due equazioni del sistema precedente si scrivono isolando $y$. Da $x+y=7$ si ottiene $y=7-x$; da $x-y=1$ si ottiene $y=x-1$. Sul grafico la retta $y=7-x$ scende da sinistra a destra (è **decrescente**), mentre la retta $y=x-1$ sale (è **crescente**). Le due rette si incontrano in $P=(4;3)$.

Il punto $Q=(3;4)$ sta sulla retta decrescente, perché la somma delle sue coordinate è $3+4=7$. Alla stessa ascissa $3$, la retta crescente ha invece ordinata $3-1=2$, quindi $Q$ non sta su di essa. Il grafico mostra lo stesso controllo che si fa sostituendo le coordinate nelle equazioni. Se la graffa contiene due equazioni, sono richieste entrambe le condizioni.
::grafico{f="7-x;x-1" xmin=0 xmax=8 ymin=-1 ymax=8 punti="4,3,pieno,P;3,4,pieno,Q" titolo="P appartiene a entrambe le rette, mentre Q appartiene soltanto alla retta decrescente"}
:::

## Sostituzione e confronto

::::teorema{#sostituzione titolo="Riduzione a una sola incognita"}
Il **metodo di sostituzione** è composto da tre passi.
1. Da un'equazione si ricava un'incognita, cioè la si scrive in funzione dell'altra.
2. L'espressione ottenuta si inserisce al posto di quell'incognita nell'altra equazione, che diventa un'equazione in una sola incognita.
3. Si risolve questa equazione e si torna alla relazione del passo 1 per trovare la seconda incognita.

Per $\begin{cases}x+y=7\\x-y=1\end{cases}$ la prima equazione dà $y=7-x$. Nella seconda si scrive $7-x$ al posto di $y$:
$$
\begin{aligned}
x-(7-x)&=1\\[6pt]
x-7+x&=1\\[6pt]
2x&=8\\[6pt]
x&=4.
\end{aligned}
$$
Infine la relazione del passo 1 dà $y=7-4=3$.

Il **metodo del confronto** è una variante. Si ricava la stessa incognita da entrambe le equazioni e si uguagliano le due espressioni ottenute. L'uguaglianza è corretta perché nella soluzione entrambe le espressioni rappresentano lo stesso valore di $y$. Per $y=2x+1$ e $y=-x+7$ si scrive
$$
\begin{aligned}
2x+1&=-x+7\\[6pt]
3x&=6\\[6pt]
x&=2,
\end{aligned}
$$
e poi $y=2\cdot2+1=5$.

:::dimostrazione
Si indica con $u(x)$ l'espressione in $x$ ricavata dalla prima equazione, per esempio $u(x)=7-x$. Se la prima equazione equivale a $y=u(x)$, ogni soluzione deve usare proprio quel valore di $y$. Nell'altra equazione si può quindi scrivere $u(x)$ al posto di $y$, e la soluzione la soddisfa ancora.

In senso inverso, ogni $x$ che soddisfa la nuova equazione fornisce la coppia $(x;u(x))$. Questa coppia soddisfa la prima equazione per costruzione e la seconda per il calcolo eseguito. Le soluzioni del sistema e quelle del sistema trasformato sono perciò le stesse. La relazione $y=u(x)$ si conserva, perché serve a recuperare la seconda coordinata.
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

nella seconda equazione il coefficiente di $y$ è $1$. Sottraendo $x$ da entrambi i membri si ricava $y=4-x$ senza introdurre denominatori. La prima equazione diventa

$$
\begin{aligned}
3x-2(4-x)&=1\\[6pt]
3x-8+2x&=1\\[6pt]
5x&=9.
\end{aligned}
$$

Nel secondo passaggio il fattore $-2$ moltiplica entrambi i termini di $4-x$, quindi $-2\cdot4=-8$ e $-2\cdot(-x)=+2x$. Nel terzo si aggiunge $8$ a entrambi i membri. La soluzione è $x=\dfrac95$ e
$$
y=4-\frac95=\frac{20}5-\frac95=\frac{11}5.
$$
:::

:::osservazione{titolo="Scegliere una riga che evita frazioni"}
Nel sistema precedente il coefficiente di $y$ nella seconda equazione è $1$, perciò la relazione $y=4-x$ si trova senza divisioni. Dalla prima equazione la stessa incognita si isola così:
$$
\begin{aligned}
3x-2y&=1\\[6pt]
-2y&=1-3x\\[6pt]
y&=\frac{3x-1}{2}.
\end{aligned}
$$
È una scelta equivalente, che però introduce subito il denominatore $2$. Uguagliando le due forme si applica il confronto, $4-x=\dfrac{3x-1}{2}$. Sul grafico questo significa cercare l'ascissa in cui le due rette hanno la stessa ordinata, cioè il punto $P$ di ascissa $\dfrac95=1{,}8$ e ordinata $\dfrac{11}5=2{,}2$.
::grafico{f="4-x;(3*x-1)/2" xmin=0 xmax=4 ymin=-1 ymax=6 punti="1.8,2.2,pieno,P" titolo="Le due rette hanno la stessa ordinata per $x=\dfrac95$"}
:::

## Il metodo di riduzione

::::teorema{#riduzione titolo="Eliminazione di un’incognita"}
Due sistemi sono **equivalenti** se hanno le stesse soluzioni. Sommando a un'equazione un multiplo dell'altra, cioè l'altra equazione moltiplicata per un numero, e lasciando l'altra com'è, si ottiene un sistema equivalente. Nel **metodo di riduzione** si scelgono i multipli in modo che i coefficienti di una delle incognite diventino **opposti**, cioè uguali a meno del segno, come $6$ e $-6$. Sommando le due equazioni quell'incognita sparisce.

Nel sistema $\begin{cases}2x+3y=13\\3x-2y=0\end{cases}$ i coefficienti di $y$ sono $3$ e $-2$. Si moltiplica la prima equazione per $2$ e la seconda per $3$, così i coefficienti di $y$ diventano $6$ e $-6$:
$$
\begin{aligned}
4x+6y&=26\\[6pt]
9x-6y&=0\\[6pt]
13x&=26\quad\Longrightarrow\quad x=2.
\end{aligned}
$$
La terza riga è la somma delle prime due. Dalla seconda equazione iniziale segue $3\cdot2-2y=0$, cioè $6-2y=0$, quindi $y=3$.

Se si moltiplica un'intera equazione per un numero, anche il termine noto viene moltiplicato. Per esempio $x-y=2$ diventa $3x-3y=6$. Questo passaggio dà un'equazione equivalente perché il moltiplicatore è diverso da zero.

:::dimostrazione
Una coppia che soddisfa entrambe le equazioni soddisfa anche la seconda più $k$ volte la prima, perché si sommano uguaglianze vere. Conservando la prima, dalla nuova seconda si può sottrarre $k$ volte quella stessa equazione e recuperare l'originale. Il passaggio si può quindi annullare per qualsiasi $k$; un passaggio di questo tipo si dice **reversibile**, e per questo non aggiunge e non toglie soluzioni. Moltiplicare un'intera equazione per un fattore è reversibile quando quel fattore è non nullo, perché si può dividere per esso.
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

i coefficienti di $y$ diventano entrambi $12$ moltiplicando la prima equazione per $3$ e la seconda per $2$. Le equazioni risultanti sono $9x+12y=30$ e $10x+12y=32$. Poiché i coefficienti di $y$ sono uguali e non opposti, si sottrae:
$$
(10x+12y)-(9x+12y)=32-30,\qquad\text{quindi}\qquad x=2.
$$
Sostituendo nella prima equazione iniziale si trova $3\cdot2+4y=10$, cioè $6+4y=10$, perciò $4y=4$ e $y=1$.

Si conserva una delle due equazioni mentre si sostituisce l'altra con la differenza. Infatti, sommando alla differenza l'equazione conservata, si recupera quella sostituita.
:::

:::esempio{titolo="Usare multipli piccoli per eliminare"}
In $\begin{cases}4x-6y=2\\6x+9y=21\end{cases}$ si vuole eliminare $y$. Il **modulo** (o valore assoluto) di un numero è il numero senza segno, quindi i moduli dei coefficienti di $y$ sono $6$ e $9$. Il loro minimo comune multiplo, cioè il più piccolo numero positivo divisibile per entrambi, è $18$. Si moltiplica la prima riga, cioè la prima equazione, per $3$ e la seconda per $2$. Le nuove righe hanno coefficienti di $y$ uguali a $-18$ e $18$, quindi si sommano direttamente.
$$
\begin{aligned}
12x-18y&=6,\\[6pt]
12x+18y&=42,\\[6pt]
24x&=48\quad\Longrightarrow\quad x=2.
\end{aligned}
$$
La prima equazione iniziale ora dà $8-6y=2$, quindi $-6y=-6$ e $y=1$. La seconda verifica il calcolo con $12+9=21$. Si poteva usare un multiplo comune più grande, come $36$; con $18$ i coefficienti restano più piccoli durante i passaggi.
:::

## Determinanti e Cramer

::::teorema{#cramer titolo="Formule di Cramer"}
Per il sistema $\begin{cases}ax+by=c\\dx+ey=f\end{cases}$ le lettere $a,b,d,e$ indicano i coefficienti e $c,f$ i termini noti. I numeri si dispongono in una **matrice**, cioè una tabella di righe e colonne: ogni riga corrisponde a un'equazione, la prima colonna contiene i coefficienti di $x$, la seconda quelli di $y$, e a parte c'è la colonna dei termini noti.

Il **determinante** di una matrice quadrata di due righe e due colonne è il prodotto dei numeri sulla diagonale principale (da in alto a sinistra a in basso a destra) meno il prodotto dei numeri sull'altra diagonale:
$$
\begin{vmatrix}a&b\\d&e\end{vmatrix}=ae-bd.
$$
Con il sistema si calcolano tre determinanti.
- $D$ usa le due colonne dei coefficienti.
- $D_x$ si ottiene da $D$ mettendo la colonna dei termini noti al posto della colonna di $x$.
- $D_y$ si ottiene da $D$ mettendo la colonna dei termini noti al posto della colonna di $y$.

Quindi
$$
D=ae-bd,\qquad D_x=ce-bf,\qquad D_y=af-cd.
$$
Se $D\ne0$, la soluzione unica è
$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D}.
$$
Per $\begin{cases}2x+y=5\\x-y=1\end{cases}$ si ottengono
$$
\begin{aligned}
D&=\begin{vmatrix}2&1\\1&-1\end{vmatrix}=2\cdot(-1)-1\cdot1=-3,\\[6pt]
D_x&=\begin{vmatrix}5&1\\1&-1\end{vmatrix}=5\cdot(-1)-1\cdot1=-6,\\[6pt]
D_y&=\begin{vmatrix}2&5\\1&1\end{vmatrix}=2\cdot1-5\cdot1=-3,
\end{aligned}
$$
quindi $x=\dfrac{-6}{-3}=2$, $y=\dfrac{-3}{-3}=1$ e $(x;y)=(2;1)$.

I tre determinanti si scrivono anche come $\begin{vmatrix}a&b\\d&e\end{vmatrix}$, $\begin{vmatrix}c&b\\f&e\end{vmatrix}$ e $\begin{vmatrix}a&c\\d&f\end{vmatrix}$.

La formula per $x$ si ottiene eliminando $y$ per riduzione. Si moltiplica la prima equazione per $e$ e la seconda per $b$, poi si sottrae:
$$
\begin{aligned}
aex+bey&=ce\\[6pt]
bdx+bey&=bf\\[6pt]
(ae-bd)x&=ce-bf.
\end{aligned}
$$
L'ultima riga è $Dx=D_x$, che si può dividere per $D$ soltanto quando $D\ne0$.

:::dimostrazione
Allo stesso modo, $a$ volte la seconda equazione meno $d$ volte la prima dà $(ae-bd)y=af-cd$, cioè $Dy=D_y$. Se $D\ne0$, le due uguaglianze $Dx=D_x$ e $Dy=D_y$ fissano una sola coppia possibile. Per vedere che questa coppia soddisfa le equazioni iniziali, si sviluppano i prodotti:
$$
\begin{aligned}
aD_x+bD_y&=a(ce-bf)+b(af-cd)\\[6pt]
&=ace-abf+abf-bcd\\[6pt]
&=c(ae-bd)=cD,\\[6pt]
dD_x+eD_y&=d(ce-bf)+e(af-cd)\\[6pt]
&=cde-bdf+aef-cde\\[6pt]
&=f(ae-bd)=fD.
\end{aligned}
$$
Dividendo per $D$ si ottiene $a\dfrac{D_x}{D}+b\dfrac{D_y}{D}=c$ e $d\dfrac{D_x}{D}+e\dfrac{D_y}{D}=f$, cioè si recuperano i due termini noti. Le formule danno quindi una coppia che è soluzione, ed è l'unica possibile.
:::
::::

:::esempio{titolo="Un’equazione verticale nei determinanti"}
Per $\begin{cases}x=3\\x+y=5\end{cases}$ la prima riga si legge $1\cdot x+0\cdot y=3$, quindi i suoi coefficienti sono $1$ e $0$. Si ottengono
$$
D=1\cdot1-0\cdot1=1,\qquad D_x=3\cdot1-0\cdot5=3,\qquad D_y=1\cdot5-3\cdot1=2,
$$
quindi la soluzione è $(3;2)$. Sul grafico la prima riga è la retta verticale formata dai punti di ascissa $3$, perciò da quella riga non si può scrivere $y$ in funzione di $x$. Il metodo dei determinanti funziona comunque, perché la sua condizione riguarda soltanto $D$. Il calcolo più rapido, in questo caso, è sostituire $x=3$ nella seconda riga, da cui $y=5-3=2$.
::grafico{f="5-x" linee="3,-1 3,6" punti="3,2,pieno,P" xmin=0 xmax=6 ymin=-1 ymax=6 titolo="La retta verticale x = 3 taglia y = 5 − x in un solo punto"}
:::

## Sistemi impossibili e indeterminati

::::teorema{#classificazione titolo="Discussione delle soluzioni"}
Se la riduzione elimina entrambe le incognite, resta un'uguaglianza fra numeri.
- Se resta $0=k$ con $k\ne0$, l'uguaglianza è falsa per ogni coppia e il sistema è impossibile.
- Se resta $0=0$, l'uguaglianza è vera per ogni coppia, perciò l'equazione eliminata era conseguenza dell'altra. Se rimane una sola equazione lineare effettiva in due incognite, cioè con almeno un coefficiente non nullo, il sistema è indeterminato.

Per $\begin{cases}x+y=3\\2x+2y=8\end{cases}$ il doppio della prima è $2x+2y=6$; la seconda meno questo doppio dà $0=8-6=2$, quindi non ci sono soluzioni. Sostituendo $8$ con $6$ si ottiene $0=0$. In questo caso si assegna a $x$ un valore qualsiasi $t$ e si ricava $y=3-t$; le soluzioni sono le coppie $(t;3-t)$ per ogni $t\in\mathbb R$. Il simbolo $\mathbb R$ indica l'insieme dei numeri reali e $t\in\mathbb R$ si legge «$t$ appartiene ai reali». La lettera $t$ descrive tutte le soluzioni al variare del suo valore; per $t=0$ si ha $(0;3)$, per $t=1$ si ha $(1;2)$.

Quando tutti i coefficienti di un'equazione sono nulli, si esamina direttamente il termine noto. L'equazione $0x+0y=0$ è un'**identità**, cioè un'uguaglianza vera per ogni coppia, e non aggiunge condizioni. L'equazione $0x+0y=1$ non è vera per nessuna coppia e rende impossibile l'intero sistema. Questa lettura evita divisioni per coefficienti nulli.

Il grafico mostra il caso impossibile. La seconda equazione $2x+2y=8$ equivale a $x+y=4$, perciò le rette sono $y=3-x$ e $y=4-x$. Hanno la stessa inclinazione e non si incontrano mai.

::grafico{f="3-x;4-x" xmin=-2 xmax=5 ymin=-2 ymax=7 titolo="Le rette $y=3-x$ e $y=4-x$ sono parallele e distinte"}

:::dimostrazione
Una riga con tutti i coefficienti nulli impone soltanto un'uguaglianza tra numeri. Se è falsa, nessuna coppia può soddisfarla. Se è vera, ogni coppia la soddisfa e restano solo le altre eventuali condizioni. Con una sola relazione effettiva $ax+by=c$, almeno uno fra $a$ e $b$ è non nullo; per esempio, se $b\ne0$ si ricava $y=\dfrac{c-ax}{b}$. Si può quindi assegnare liberamente un valore a una variabile e ricavare l'altra, ottenendo infinite coppie.
:::
::::

:::osservazione{titolo="Il determinante nullo richiede una seconda verifica"}
I rapporti di Cramer non sono definiti quando $D=0$, perché non si divide per zero. Se resta un'equazione con coefficienti non nulli, la riduzione può mostrare una contraddizione oppure che le equazioni descrivono la stessa retta. Con due righe nulle e due termini noti nulli, ogni coppia del piano è ammessa.

Nella tabella, $\varnothing$ indica l'**insieme vuoto** (nessuna soluzione) e $\mathbb R^2$ l'insieme di tutte le coppie di numeri reali, cioè tutto il piano. L'insieme delle soluzioni si indica spesso con $S$, per esempio $S=\{(t;3-t):t\in\mathbb R\}$.

| Dopo la riduzione | Insieme delle soluzioni |
|---|---|
| Una condizione $0=k$ con $k\ne0$ | Vuoto |
| Una sola equazione effettiva e una riga identica | Una retta |
| Due identità $0=0$ | Tutto il piano |
| Due condizioni indipendenti | Un punto |

Due primi membri sono **proporzionali** quando i coefficienti dell'uno sono quelli dell'altro moltiplicati per uno stesso numero. Per $x+y=3$ e $2x+2y=6$, entrambi i membri della seconda riga sono il doppio di quelli della prima. Raddoppiare una riga cambia i coefficienti e lascia invariata la retta dei punti che la soddisfano. Il grafico mostra la retta comune $y=3-x$ con tre suoi punti, $(0;3)$, $(1;2)$ e $(3;0)$.

Se i primi membri sono proporzionali ma i termini noti non seguono lo stesso fattore, le rette sono parallele distinte. Isolando $y$ in $x+y=3$ e $2x+2y=8$ si ottiene $y=-x+3$ e $y=-x+4$. Il numero che moltiplica $x$ è il **coefficiente angolare** (o pendenza) e indica l'inclinazione; in queste due rette vale $-1$. Il termine senza $x$ è l'**intercetta**, l'ordinata del punto in cui la retta taglia l'asse $y$, e in queste due rette vale $3$ e $4$. Stesso coefficiente angolare e intercette diverse danno rette parallele distinte.
::grafico{f="3-x" xmin=-2 xmax=5 ymin=-2 ymax=6 punti="0,3;1,2;3,0" titolo="Una sola retta contiene tutte le soluzioni di entrambe le equazioni"}
:::

## Frazioni e parametri

:::teorema{#parametri titolo="Condizioni e casi da separare"}
Se un'equazione contiene frazioni con denominatori numerici, si moltiplicano tutti i suoi termini, termine noto compreso, per il minimo comune multiplo dei denominatori. Per esempio $\dfrac x2+\dfrac y3=4$ moltiplicata per $6$ diventa $3x+2y=24$. Se compaiono denominatori letterali, cioè con incognite, si scrivono prima le **condizioni** che li rendono non nulli e alla fine si controlla che le soluzioni candidate le rispettino.

Un **parametro** è una lettera diversa dalle incognite, il cui valore è fissato durante la risoluzione; a ogni valore del parametro corrisponde un sistema diverso. **Discutere** un sistema significa dire, per ogni valore del parametro, quante soluzioni ha e quali sono.

Per $\begin{cases}kx+y=1\\2x+y=3\end{cases}$ il determinante è $D=k\cdot1-1\cdot2=k-2$. Sottraendo la seconda equazione dalla prima si elimina $y$:
$$
(k-2)x=1-3=-2.
$$
- Se $k\ne2$, si divide per $k-2$, quindi $x=-\dfrac2{k-2}$ e poi $y=1-kx$. Il sistema è determinato.
- Se $k=2$, la prima equazione è $2x+y=1$. Le due equazioni avrebbero lo stesso primo membro $2x+y$ e termini noti distinti, $1$ e $3$, quindi il sistema è impossibile.

La divisione per $k-2$ è stata usata soltanto nel caso in cui quel fattore è diverso da zero. Il caso escluso va studiato nelle equazioni iniziali. L'insieme dei reali tranne $2$ si scrive $\mathbb R\setminus\{2\}$.
:::

:::esempio{titolo="Una famiglia di soluzioni nel caso singolare"}
Si consideri

$$
\begin{cases}
kx+2y=6\\
3x+y=3.
\end{cases}
$$

Il doppio della seconda equazione è $6x+2y=6$. Sottraendolo dalla prima si ottiene
$$
(k-6)x+(2-2)y=6-6,\qquad\text{cioè}\qquad (k-6)x=0.
$$
- Per $k\ne6$ si divide per $k-6$, quindi $x=0$, e la seconda equazione dà $y=3$.
- Per $k=6$ la prima equazione è $6x+2y=6$, il doppio della seconda. Ogni coppia $(t;3-3t)$, con $t\in\mathbb R$, soddisfa entrambe.

Il determinante $D=k\cdot1-2\cdot3=k-6$ si annulla proprio nel caso $k=6$, che si chiama **caso singolare**; la riduzione mostra che in quel caso le soluzioni sono infinite.
:::

:::esempio{titolo="Un sistema che diventa lineare su un dominio ristretto"}
Nella prima riga di
$$
\begin{cases}
\dfrac{x^2-4}{x-2}+y=7\\
x-y=-1
\end{cases}
$$
il denominatore $x-2$ si annulla per $x=2$, perciò si esclude $x=2$ prima di semplificare. Poiché $x^2-4=(x-2)(x+2)$, per $x\ne2$ la frazione vale $x+2$ e la prima equazione diventa $x+2+y=7$, cioè $x+y=5$. Sommandola all'altra si ottiene $2x=4$ e quindi $x=2$ e $y=3$, perciò la coppia candidata è $(2;3)$. La sua ascissa è esclusa, dunque il sistema di partenza è impossibile.

Il grafico mostra le rette semplificate $y=5-x$ e $y=x+1$, che si incontrano in $(2;3)$, segnato con un cerchio vuoto perché in quel punto la prima equazione non è definita.
::grafico{f="5-x;x+1" xmin=-1 xmax=6 ymin=-1 ymax=7 punti="2,3,vuoto" titolo="L’intersezione delle formule ridotte cade dove la prima equazione è indefinita"}
:::

## Tre incognite e interpretazione grafica

::::teorema{#tre-incognite titolo="Riduzione di sistemi più grandi"}
Una soluzione di un sistema in $x$, $y$, $z$ è una **terna** ordinata $(x;y;z)$ che soddisfa tutte le equazioni. In un sistema lineare di tre equazioni in tre incognite si procede così.
1. Si elimina una lettera da due coppie di equazioni, per esempio da prima e seconda e da prima e terza.
2. Si risolve il sistema di due equazioni in due incognite ottenuto.
3. Si recupera l'ultima incognita sostituendo in una delle equazioni iniziali.

Alla fine tutte le equazioni originali devono essere soddisfatte.

Se $x+y+z=9$, $x+y=5$ e $x-y=1$, la prima meno la seconda dà $z=9-5=4$. Le ultime due, sommate, danno $2x=6$, quindi $x=3$, e poi $y=5-3=2$. La verifica completa è $3+2+4=9$, $3+2=5$, $3-2=1$.

Nel piano, l'intersezione di due rette rende visibile la soluzione di un sistema di due equazioni. Il grafico mostra le rette $y=2x+1$ e $y=-x+7$ del metodo del confronto, che si incontrano nel punto $(2;5)$.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-2 xmax=6 ymin=-2 ymax=10 titolo="Le rette si incontrano nella soluzione $(2;5)$"}

:::dimostrazione
Se il coefficiente di $x$ in una delle tre equazioni è non nullo, si usa quella riga per eliminare $x$ dalle altre due, sottraendo da ciascuna un suo multiplo. Le sottrazioni di multipli sono reversibili perché la riga usata rimane nel sistema, quindi le soluzioni non cambiano. Si risolvono le due condizioni rimaste in $y$ e $z$, poi si determina $x$ dalla riga che la contiene. Se nessuna riga contiene $x$, questa variabile è **libera**, cioè può assumere ogni valore reale, purché le condizioni su $y$ e $z$ siano compatibili.
:::
::::

:::esempio{titolo="Eliminare la stessa incognita da due righe diverse"}
Da $x+y+z=6$, $x-y+2z=5$ e $x+2y-z=2$ si sottrae la prima equazione da entrambe le altre:
$$
\begin{aligned}
(x-y+2z)-(x+y+z)&=5-6,\qquad\text{cioè}\qquad -2y+z=-1,\\[6pt]
(x+2y-z)-(x+y+z)&=2-6,\qquad\text{cioè}\qquad y-2z=-4.
\end{aligned}
$$
La prima nuova equazione dà $z=2y-1$. Sostituendo nella seconda si ottiene $y-2(2y-1)=-4$, cioè $-3y+2=-4$, quindi $-3y=-6$, perciò $y=2$ e $z=2\cdot2-1=3$. Dalla riga conservata segue $x=6-2-3=1$. La verifica nelle due righe originali trasformate dà $1-2+6=5$ e $1+4-3=2$.

Il grafico usa $y$ in orizzontale e $z$ in verticale. Le rette $z=2y-1$ e $z=\dfrac{y+4}{2}$ rappresentano le due equazioni ridotte e si incontrano nel punto $y=2$, $z=3$.
::grafico{f="2*x-1;(x+4)/2" xmin=-1 xmax=5 ymin=-1 ymax=7 nomi="y,z" legenda="z=2y-1;z=(y+4)/2" punti="2,3,pieno,P" titolo="Il sistema ridotto determina y e z prima di recuperare x"}
:::

## Problemi con due dati

:::osservazione{#problemi titolo="Scelta delle incognite e verifica dei vincoli"}
Per tradurre un problema in un sistema si procede in quattro passi.
1. Si assegna una lettera a ciascuna quantità richiesta; la lettera conserva lo stesso significato in tutte le equazioni.
2. Si scrive un'equazione per ciascun dato **indipendente**, cioè per ciascuna informazione che non si ricava dalle altre.
3. Si risolve il sistema.
4. Si controllano i vincoli del problema.

Due biglietti interi e uno ridotto costano $23$ euro, mentre un intero e due ridotti costano $19$ euro. Indicando con $i$ il prezzo del biglietto intero e con $r$ quello del ridotto, si ha $\begin{cases}2i+r=23\\i+2r=19\end{cases}$. Dalla prima equazione $r=23-2i$; sostituendo nella seconda,
$$
\begin{aligned}
i+2(23-2i)&=19\\[6pt]
i+46-4i&=19\\[6pt]
-3i&=-27\\[6pt]
i&=9,
\end{aligned}
$$
e poi $r=23-18=5$. Il biglietto intero costa $9$ euro e il ridotto $5$ euro. Sostituendo si ritrovano entrambi i totali, $18+5=23$ e $9+10=19$.

Un numero di persone o di oggetti è un intero non negativo; una lunghezza è positiva. Una soluzione algebrica che viola queste condizioni non risolve il problema concreto. Anche le unità di misura devono essere le stesse in tutte le equazioni, per esempio tutte le lunghezze in centimetri, prima di costruire il sistema.
:::

:::esempio{titolo="Due tariffe con lo stesso costo"}
Siano $n$ il numero di lezioni e $C$ il costo in euro. La prima tariffa richiede $12$ euro di iscrizione e $4$ euro per lezione. La seconda richiede $3$ euro di iscrizione e $7$ euro per lezione. Le due tariffe coincidono quando danno lo stesso valore di $C$ per lo stesso $n$.

$$
\begin{cases}
C=12+4n\\
C=3+7n.
\end{cases}
$$

Il confronto dà $12+4n=3+7n$, perciò $12-3=7n-4n$, cioè $3n=9$ e $n=3$. Entrambe le tariffe costano allora $12+4\cdot3=24$ euro. L'ascissa del punto di intersezione è un intero non negativo, quindi la soluzione ha senso anche come numero di lezioni.

Nel grafico il numero di lezioni $n$ è in orizzontale e il costo $C$ in verticale. Le due rette partono dai costi di iscrizione $12$ e $3$ sull'asse verticale e si incontrano nel punto $P=(3;24)$.

::grafico{f="12+4*x;3+7*x" legenda="C=12+4n;C=3+7n" nomi="n,C" xmin=-0.5 xmax=6 ymin=-2 ymax=49 punti="0,12;0,3;3,24,pieno,P" segmenti="3,0,3,24;0,24,3,24" titolo="Le due tariffe costano 24 euro per tre lezioni"}

:::

:::esempio{titolo="Un’intersezione fra due numeri interi di lezioni"}
Con tariffe $C=11+4n$ e $C=2+8n$, l'uguaglianza $11+4n=2+8n$ richiede $9=4n$ e quindi $n=\dfrac94=2{,}25$. Le equazioni hanno una soluzione, ma il numero di lezioni è un intero non negativo, perciò la parità non si realizza.
- Per $n=2$ i costi sono $11+8=19$ e $2+16=18$ euro, quindi costa meno la seconda tariffa.
- Per $n=3$ i costi sono $11+12=23$ e $2+24=26$ euro, quindi costa meno la prima.

Il grafico mostra i quattro costi agli interi $2$ e $3$ e, con un cerchio vuoto, il punto di parità di ascissa $2{,}25$, che non corrisponde a un numero intero di lezioni.
::grafico{f="11+4*x;2+8*x" xmin=0 xmax=4 ymin=0 ymax=35 nomi="n,C" legenda="C=11+4n;C=2+8n" punti="2,19;2,18;3,23;3,26;2.25,20,vuoto" titolo="La parità cade fra due e tre lezioni e il costo minore cambia fra i due interi"}
:::
