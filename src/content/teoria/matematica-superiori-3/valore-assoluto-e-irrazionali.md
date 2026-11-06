---
titolo: Valore assoluto ed equazioni irrazionali
sommario: 'Valore assoluto e radicali: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Distanza sulla retta

:::definizione{#assoluto titolo="Valore assoluto"}
Il **valore assoluto** $|u|$ è $u$ se $u\geq0$ e $-u$ se $u<0$. È sempre non negativo. La quantità $|x-a|$ misura la distanza tra $x$ e $a$ sulla retta reale. Per esempio $|x-2|=3$ individua $x=-1$ e $x=5$, entrambi a distanza $3$ da $2$.
:::

## Equazioni con valore assoluto

:::teorema{#equazioni titolo="Due possibilità per la distanza"}
Per $r>0$, $|f(x)|=r$ equivale a $f(x)=r$ oppure $f(x)=-r$. Se $r=0$ resta $f(x)=0$; se $r<0$ non ci sono soluzioni. Per $|2x-1|=5$, i due casi danno $x=3$ e $x=-2$. Entrambi vanno sostituiti nella traccia iniziale quando altre espressioni impongono condizioni di esistenza.
:::

## Disequazioni interne

:::teorema{#interne titolo="Distanza minore di un raggio"}
Per $r>0$, $|f(x)|\leq r$ equivale a $-r\leq f(x)\leq r$. Si tratta di due condizioni simultanee. Per $|x-2|<3$ si ottiene $-3<x-2<3$, quindi $-1<x<5$. Con $\leq$ si includono gli estremi. Il grafico di $|x-2|$ permette di leggere gli stessi intervalli sotto la retta $y=3$.

::grafico{f="abs(x-2);3" xmin=-3 xmax=7 ymin=-1 ymax=6 titolo="Il grafico di $|x-2|$ incontra $y=3$ in $x=-1$ e $x=5$"}
:::

## Disequazioni esterne

:::teorema{#esterne titolo="Distanza maggiore di un raggio"}
Per $r>0$, $|f(x)|\geq r$ equivale a $f(x)\leq-r$ oppure $f(x)\geq r$. Per $|x+1|\geq2$ si ottiene $x\leq-3$ oppure $x\geq1$. La soluzione è l'unione dei due intervalli. Se il secondo membro è negativo, ogni valore del dominio soddisfa $|f(x)|>r$.
:::

## Radicali e dominio

:::definizione{#radicali titolo="Radice quadrata reale"}
Per $u\geq0$, $\sqrt u$ è l'unico numero non negativo il cui quadrato vale $u$. Quindi $\sqrt{x^2}=|x|$. In $\dfrac1{\sqrt{x-2}}$ il radicando deve essere strettamente positivo, perché la radice sta al denominatore: il dominio è $x>2$. Per $\sqrt{x-2}$ è invece ammesso anche $x=2$.
:::

## Equazioni con una radice

:::teorema{#irrazionali titolo="Elevamento al quadrato equivalente"}
L'equazione $\sqrt{f(x)}=g(x)$ equivale al sistema $\begin{cases}g(x)\geq0,\\f(x)=g(x)^2.\end{cases}$ La seconda condizione rende già non negativo $f(x)$. Per $\sqrt{x+2}=x$, si richiede $x\geq0$ e si risolve $x+2=x^2$. I candidati sono $2$ e $-1$, quindi rimane solo $2$.
:::

## Confronti con una radice

:::teorema{#confronti titolo="Confrontare quantità non negative"}
Per $c\geq0$, $\sqrt{f(x)}\leq c$ equivale a $0\leq f(x)\leq c^2$. Per esempio $\sqrt{x+1}\leq3$ dà $-1\leq x\leq8$. Se il secondo membro dipende da $x$, si distingue il suo segno prima di elevare al quadrato. Per $\sqrt{x+1}>x$, tutti i punti del dominio con $x<0$ soddisfano già il confronto.
:::

## Espressioni definite a tratti

:::esempio{#tratti titolo="Una somma di distanze"}
Per risolvere $|x-1|+|x-4|=5$ si separano gli intervalli $x<1$, $1\leq x\leq4$, $x>4$. Nel primo si ottiene $5-2x=5$, quindi $x=0$; nel secondo la somma vale $3$; nel terzo vale $2x-5$, quindi $x=5$. Le soluzioni $0$ e $5$ appartengono agli intervalli usati e soddisfano la traccia.
:::
