---
titolo: "Disequazioni di secondo grado e fratte"
sommario: "Segno del trinomio, radici e discriminante, disequazioni intere e fratte, sistemi di disequazioni e domini di radicali."
---

## Insiemi di soluzioni

:::definizione{#intervalli titolo="Intervalli aperti e chiusi"}
Risolvere una **disequazione** significa trovare tutti i valori del dominio per cui il confronto è vero. Il simbolo $\le$ ammette l'uguaglianza, mentre $<$ la esclude. Un estremo incluso si indica con una parentesi quadra; un estremo escluso con una parentesi tonda.

La condizione $1<x\le4$ si scrive $(1,4]$. La condizione $x<1$ oppure $x>4$ si scrive $(-\infty,1)\cup(4,+\infty)$. I simboli di infinito hanno sempre un estremo aperto, perché non sono numeri reali.

Moltiplicando o dividendo entrambi i membri per un numero negativo si inverte il verso. Per esempio $-2x>6$ equivale a $x<-3$.
:::

## Segno del trinomio

:::teorema{#segno titolo="Due radici reali distinte"}
Se $a>0$ e il trinomio ha radici $x_1<x_2$, la scomposizione è $a(x-x_1)(x-x_2)$. Per $x<x_1$ entrambi i fattori sono negativi, fra le radici hanno segno opposto e per $x>x_2$ sono entrambi positivi.

Il trinomio è dunque positivo all'esterno delle radici e negativo all'interno. Negli zeri vale zero. Se $a<0$, tutti i segni si invertono.

Per $x^2-5x+6=(x-2)(x-3)$, la disequazione $x^2-5x+6\le0$ dà $[2,3]$. La disequazione stretta $>0$ dà $(-\infty,2)\cup(3,+\infty)$.

::grafico{f="x^2-5*x+6" punti="2,0,pieno,A;3,0,pieno,B" xmin=0 xmax=5 ymin=-1 ymax=6 titolo="Il trinomio è negativo tra gli zeri"}
:::

## Radice doppia o nessuna radice

:::teorema{#discriminante titolo="I casi del discriminante"}
Se $\Delta=0$, il trinomio si scrive $a(x-x_0)^2$. Ha il segno di $a$ per $x\ne x_0$ e si annulla in $x_0$. Per esempio $(x-2)^2>0$ dà $\mathbb R\setminus\{2\}$; $(x-2)^2\le0$ dà $\{2\}$.

Se $\Delta<0$, il trinomio ha sempre il segno di $a$. Si può vedere dal completamento del quadrato
$$
ax^2+bx+c=a\left[\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a^2}\right].
$$
Il termine entro le parentesi quadre è positivo perché $-\Delta>0$. Quindi $x^2+1>0$ per ogni reale, mentre $x^2+1\le0$ non ha soluzioni.

::grafico{f="(x-2)^2" punti="2,0,pieno,A" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="Il quadrato si annulla in $2$ ed è positivo negli altri punti"}
:::

## Procedimento completo

:::teorema{#procedimento titolo="Dalla forma normale al risultato"}
Si porta il confronto a zero, si riducono i termini simili e si determina il segno dell'espressione ottenuta. Spostare un termine da un membro all'altro ne cambia il segno.

Per $x^2\le3x+4$ si ottiene $x^2-3x-4\le0$. Le radici sono $-1$ e $4$ e il coefficiente principale è positivo. La soluzione è $[-1,4]$.

Un controllo numerico aiuta a verificare la lettura dei segni. Il valore $x=0$ appartiene all'intervallo e dà $0\le4$; il valore $x=5$ è esterno e dà $25\le19$, che è falso. Il controllo di singoli punti integra il ragionamento sui fattori, senza sostituirlo.
:::

## Disequazioni fratte

:::teorema{#fratte titolo="Tabella dei segni e denominatore"}
Per un quoziente si studiano separatamente numeratore e denominatore. Il quoziente è positivo se hanno lo stesso segno e negativo se hanno segni opposti. Gli zeri del denominatore sono sempre esclusi.

Per $\dfrac{x-1}{x-3}\ge0$ i punti critici sono $1$ e $3$. Il segno è positivo prima di $1$, negativo tra $1$ e $3$ e positivo dopo $3$. La soluzione è $(-\infty,1]\cup(3,+\infty)$.

Lo zero $1$ si include perché il quoziente è definito e vale zero. Il punto $3$ non si include, anche se la disequazione ammette l'uguaglianza. Moltiplicare direttamente per $x-3$ senza conoscerne il segno non mantiene necessariamente il verso.
:::

## Prodotti e molteplicità

:::teorema{#prodotti titolo="Punti in cui il segno cambia"}
In un prodotto di fattori lineari distinti il segno cambia attraversando ciascuno zero semplice. Un fattore elevato a una potenza pari non cambia segno attraversando il proprio zero.

Per $(x-1)^2(x+2)>0$, il quadrato è positivo tranne in $1$. Il segno dipende quindi da $x+2$, con esclusione di $1$. La soluzione è $(-2,1)\cup(1,+\infty)$.

Se un fattore si semplifica tra numeratore e denominatore, il suo zero rimane escluso dal dominio. Per $\dfrac{(x-1)(x+2)}{x-1}>0$ si ottiene $x>-2$ e $x\ne1$, quindi lo stesso insieme appena trovato.
:::

## Sistemi

:::definizione{#sistemi titolo="Intersezione delle condizioni"}
Un **sistema di disequazioni** richiede che tutte le condizioni siano vere insieme. Si risolve ciascuna disequazione e si prende l'intersezione degli insiemi.

Per $\begin{cases}x^2-5x+6\le0\\x>\dfrac52\end{cases}$ si intersecano $[2,3]$ e $(\dfrac52,+\infty)$. Resta $(\dfrac52,3]$.

L'unione descrive invece valori che soddisfano almeno una condizione. Se due intervalli non hanno punti comuni, il sistema non ha soluzioni. Per esempio $x\le1$ e $x>3$ hanno intersezione vuota.
:::

## Domini e problemi

:::osservazione{#domini titolo="Radici e vincoli"}
Per il dominio di $\sqrt{x^2-4}$ si richiede $x^2-4\ge0$. Il risultato è $(-\infty,-2]\cup[2,+\infty)$. Se la stessa radice è al denominatore, si richiede $x^2-4>0$ e si escludono anche $\pm2$.

Nei problemi le disequazioni algebriche si combinano con le condizioni delle grandezze. Se $x$ rappresenta una lunghezza e si trova $-3\le x\le5$, il vincolo $x>0$ restringe la risposta a $0<x\le5$.

Le condizioni del testo appartengono al sistema fin dall'inizio. La soluzione finale deve soddisfare contemporaneamente la disequazione e i vincoli del problema.
:::
