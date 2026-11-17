---
titolo: "Disequazioni di primo grado"
sommario: "Verso delle disuguaglianze, intervalli, condizioni simultanee e soglie nei problemi."
---

## Disuguaglianze e trasformazioni

:::teorema{#ordine titolo="Conservare oppure invertire il verso"}
Aggiungere la stessa quantità ai due membri conserva il verso di una disuguaglianza. Moltiplicare o dividere per un numero positivo conserva il verso. Moltiplicare o dividere per un numero negativo lo inverte.

Per esempio, da $2<5$, moltiplicando per $-1$ si ottiene $-2>-5$. Questo spiega il cambio di verso richiesto quando si isola una variabile con coefficiente negativo. Le disuguaglianze $<$ e $>$ escludono l’uguaglianza; $\le$ e $\ge$ la includono.
:::

## Isolare la variabile

:::esempio{#coefficienti titolo="Coefficienti positivi e negativi"}
La disequazione $3x+2>11$ equivale a $3x>9$ e quindi a $x>3$. La divisione per tre conserva il verso.

Per $-2x+1\le7$, si ottiene $-2x\le6$. Dividendo per $-2$ il verso si inverte e si ottiene

$$
x\ge-3.
$$

Il valore $x=-3$ è incluso, perché nell’espressione iniziale produce l’uguaglianza. Per $x=0$ la disequazione è vera, mentre per $x=-4$ è falsa. Questi controlli individuano da quale lato della soglia stanno le soluzioni.
:::

## Intervalli e rappresentazione delle soluzioni

:::definizione{#intervalli titolo="Estremi inclusi ed esclusi"}
La condizione $a<x<b$ corrisponde all’intervallo aperto $(a,b)$. La condizione $a\le x\le b$ corrisponde a $[a,b]$. L’intervallo $(a,b]$ include invece $b$ ed esclude $a$.

La condizione $x>3$ si scrive $(3,+\infty)$, mentre $x\le3$ si scrive $(-\infty,3]$. I simboli di infinito indicano che l’intervallo prosegue senza limite. Si scrive sempre una parentesi tonda accanto a un simbolo di infinito. Su una retta numerica, un estremo escluso si indica con un punto vuoto e uno incluso con un punto pieno.
:::

::grafico{assi=0 xmin=-1 xmax=7 ymin=-0.7 ymax=0.8 linee="-0.8,0 6.5,0" vettori="6.4,0,6.8,0" area="0.07;-0.07;2;5" punti="2,0,vuoto;5,0,pieno" etichette="2,-0.3,2;5,-0.3,5;6.8,-0.3,x" titolo="L’intervallo (2, 5] include 5 ed esclude 2"}

## Condizioni contemporanee e alternative

:::teorema{#sistemi titolo="Intersezione e unione delle soluzioni"}
Se due condizioni devono valere contemporaneamente, si prende l’**intersezione** dei loro insiemi di soluzioni. Le condizioni $x>2$ e $x\le5$ danno $(2,5]$. Le condizioni $x>5$ e $x\le2$ non hanno soluzioni comuni.

Se è sufficiente che valga almeno una condizione, si prende l’**unione**. Le condizioni $x<-2$ oppure $x>2$ danno $(-\infty,-2)\cup(2,+\infty)$.

Una doppia disuguaglianza descrive condizioni contemporanee. Da $3\le2x+1<7$, sottraendo uno e dividendo per due in tutti e tre i membri, si ricava $1\le x<3$.
:::

:::esempio{titolo="Doppia disuguaglianza con coefficiente negativo"}
Da $0\le 4-2x<6$, si sottrae $4$ da tutti e tre i membri. Si ottiene $-4\le -2x<2$. Dividere i tre membri per $-2$ inverte entrambi i confronti, quindi $2\ge x>-1$. Scrivendo prima il limite inferiore si ottiene $-1<x\le 2$, cioè $(-1,2]$.
:::

## Tutti i valori oppure nessun valore

:::osservazione{#casi titolo="Confronti numerici dopo la riduzione"}
Riducendo una disequazione, i termini con l’incognita possono eliminarsi. Se resta un confronto vero, ogni valore del dominio iniziale è soluzione. Per esempio $2x+1<2x+4$ equivale a $1<4$, quindi è vera per ogni reale.

Se resta un confronto falso, l’insieme delle soluzioni è vuoto. Per esempio $3x+5\le3x+2$ equivale a $5\le2$. Il caso $0<0$ è falso, mentre $0\le0$ è vero. La presenza dell’uguaglianza cambia dunque il risultato.
:::

## Soglie, conteggi e risultati interi

:::esempio{#problemi titolo="Massimo acquistabile e minimo necessario"}
Con $20$ euro e biglietti da $3$ euro, il numero $x$ di biglietti deve soddisfare $3x\le20$. La soluzione reale è $x\le\dfrac{20}{3}$, ma il contesto richiede un intero non negativo. Il massimo numero acquistabile è quindi $6$. Sei biglietti costano $18$ euro, mentre sette ne costano $21$ e superano il budget.

Per ottenere almeno $21$ matite comprando confezioni da $4$, serve $4x\ge21$. La soglia reale è $\dfrac{21}{4}$ e il minimo intero ammissibile è $6$. Cinque confezioni contengono $20$ matite, mentre sei ne contengono $24$. I due arrotondamenti hanno verso diverso perché nel primo problema si cerca un massimo senza superare una spesa e nel secondo un minimo che raggiunga una quantità.
:::
