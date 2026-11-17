---
titolo: "Equazioni di primo grado"
sommario: "Principi di equivalenza, soluzioni, equazioni con frazioni e traduzione dei problemi."
---

## Equazioni e principi di equivalenza

:::teorema{#equivalenza titolo="Trasformazioni che conservano le soluzioni"}
Un’**equazione** è un’uguaglianza che contiene una o più incognite. Una **soluzione** è un valore ammesso che rende uguali i due membri. Due equazioni sono equivalenti se hanno lo stesso insieme di soluzioni.

Aggiungere la stessa espressione a entrambi i membri conserva le soluzioni nel dominio in cui l’espressione è definita. Moltiplicare o dividere entrambi i membri per lo stesso numero non nullo conserva le soluzioni. Per esempio, da $3x+2=11$ si ottiene $3x=9$ sottraendo $2$ a entrambi i membri, quindi si trova $x=3$ dividendo per $3$. Ogni passaggio si può invertire.
:::

:::attenzione{titolo="Divisione per un’espressione che può annullarsi"}
Da $x(x-2)=0$, dividendo per $x$ si trova $x=2$ nel caso $x\ne 0$. Il prodotto iniziale vale zero anche per $x=0$. Per conservare entrambe le soluzioni si usa la legge di annullamento del prodotto, oppure si esamina a parte il caso $x=0$.
:::

## Forma normale e soluzione

:::teorema{#lineari titolo="Equazione ax uguale a b"}
Dopo la riduzione, un’equazione di primo grado assume la forma $ax=b$, con $a\ne 0$. Poiché la divisione per $a$ è reversibile, la soluzione unica è $x=\dfrac ba$.

Per esempio, per risolvere $5x-4=2x+8$ si sottrae $2x$ da entrambi i membri e si aggiunge $4$ a entrambi. Si ottiene $3x=12$, quindi $x=4$. Il cambio di segno di un termine trasferito da un membro all’altro deriva dall’aggiunta del suo opposto a entrambi.
:::

:::esempio{titolo="Verifica nell’equazione iniziale"}
Per verificare $x=4$ nell’equazione $5x-4=2x+8$, si calcolano separatamente $5\cdot 4-4=16$ e $2\cdot 4+8=16$. I due risultati coincidono. Nei grafici di $y=5x-4$ e $y=2x+8$, questa uguaglianza corrisponde al punto $(4,16)$.
:::

::grafico{f="5*x-4;2*x+8" xmin=-1 xmax=6 ymin=-6 ymax=24 punti="4,16,pieno,P" titolo="Intersezione in (4, 16)"}

## Equazioni con raggruppamenti

:::esempio{#parentesi titolo="Distribuire un fattore negativo"}
Nell’equazione seguente il fattore $-2$ moltiplica entrambi i termini del binomio $x-3$. Il termine costante dello sviluppo è quindi $(-2)(-3)=6$.

$$
\begin{aligned}
-2(x-3)+4 &= x+1 \\[6pt]
-2x+6+4 &= x+1 \\[6pt]
9 &= 3x \\[6pt]
x &= 3
\end{aligned}
$$

La terza riga si ottiene aggiungendo $2x$ e sottraendo $1$ da entrambi i membri. Sostituendo $3$ nell’equazione iniziale si ottiene $4$ in entrambi i membri.
:::

## Denominatori numerici e letterali

:::teorema{#frazioni titolo="Eliminare i denominatori nel dominio ammesso"}
Con soli denominatori numerici non nulli, si può moltiplicare ogni termine dei due membri per il minimo comune multiplo dei denominatori. Da $\dfrac x2-\dfrac x3=4$, moltiplicando per $6$ anche il secondo membro, si ottiene $3x-2x=24$, quindi $x=24$.

Con denominatori che contengono l’incognita si determina prima il dominio. Nell’equazione $\dfrac{x-3}{x+1}=\dfrac13$ si esclude $x=-1$. Nel dominio ammesso si può moltiplicare per $3(x+1)$ e ottenere $3x-9=x+1$. Il candidato $x=5$ appartiene al dominio, quindi è la soluzione.
:::

:::esempio{titolo="Candidato fuori dal dominio"}
Per $\dfrac{2x-4}{x-2}=0$ il dominio richiede $x\ne 2$. Una frazione è nulla quando il numeratore è zero e il denominatore è diverso da zero. L’unico zero del numeratore è $2$, che il dominio esclude. L’insieme delle soluzioni è $\varnothing$.
:::

## Equazioni impossibili e identità

:::osservazione{#classificazione titolo="Quando l’incognita scompare"}
Se la riduzione dà $0x=b$ con $b\ne 0$, l’equazione è **impossibile**. Per esempio, $2(x+1)=2x+3$ si riduce a $2=3$.

Se la riduzione dà $0x=0$, l’uguaglianza è un’**identità** nel dominio iniziale. Per esempio, $3(x-2)=3x-6$ vale per ogni reale. In un’equazione con frazioni algebriche rimangono esclusi i valori che annullano i denominatori.
:::

:::esempio{titolo="Il ruolo di un parametro"}
Nell’equazione $mx+5=4x+5$, $m$ è un parametro e $x$ è l’incognita. Sottraendo $4x+5$ da entrambi i membri si ottiene $(m-4)x=0$.

- Se $m=4$, l’uguaglianza vale per ogni $x\in\mathbb R$.
- Se $m\ne 4$, si può dividere per $m-4$ e l’unica soluzione è $x=0$.
:::

## Problemi e formule inverse

:::esempio{#problemi titolo="Scegliere l’incognita e interpretare il risultato"}
Un servizio costa $5$ euro fissi più $3$ euro per attività. Se $x$ indica il numero di attività, il totale di $26$ euro si traduce in $5+3x=26$. Rimangono $21$ euro dopo aver sottratto il costo fisso. Dividendo per il costo unitario si trova $x=7$, che è un intero non negativo.

Per due interi consecutivi di somma $19$, si indica il minore con $x$ e il maggiore con $x+1$. L’equazione $x+(x+1)=19$ dà $2x=18$. I due interi sono quindi $9$ e $10$.

Per ricavare $t$ da $s=3t+2$, si sottrae $2$ a entrambi i membri e si divide per $3$. Si ottiene $t=\dfrac{s-2}{3}$. Se $s=14$, la formula inversa dà $t=4$, che nella formula iniziale restituisce $s=14$.
:::
