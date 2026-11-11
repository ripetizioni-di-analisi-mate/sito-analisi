---
titolo: Sforzo normale, taglio e momento flettente
sommario: Si ricavano le azioni interne per taglio e si costruiscono i diagrammi riconoscendo pendenze, salti e valori estremi.
---

:::percorso
Una volta note le reazioni, si può isolare qualsiasi tratto di trave. Le azioni richieste per tenerlo in equilibrio sono le azioni interne della sezione. Il momento flettente si userà per calcolare sia le tensioni sia la deformata.
:::

## Azioni interne e segni

:::definizione{#convenzione-ntm titolo="Convenzione per una trave orizzontale"}
Si orienta $x$ da sinistra verso destra e si isola la parte a sinistra della sezione. Sul taglio si assume lo **sforzo normale** $N$ positivo verso destra, il **taglio** $T$ positivo verso il basso e il **momento flettente** $M$ positivo in senso antiorario. Con questa convenzione $N>0$ indica trazione. Per $M>0$ la flessione dà un contributo di trazione nelle fibre inferiori. Sulla faccia di taglio del tratto destro i versi positivi sono opposti.
:::

## Metodo della sezione

:::teorema{#metodo-sezione titolo="Equilibrio di una parte di trave"}
Si taglia la trave alla coordinata $x$ e si applicano le tre equazioni di equilibrio a una delle due parti. Le incognite sono $N(x)$, $T(x)$ e $M(x)$. Per il momento si sceglie come polo il punto di taglio, così le azioni $N$ e $T$ hanno braccio nullo. Se il taglio cade all'interno di un tratto caricato, si considera solo la parte del carico che agisce sulla porzione isolata.
:::

## Pendenza dei diagrammi

:::teorema{#relazioni-diagrammi titolo="Relazioni tra carico, taglio e momento"}
Sia $q(x)$ il carico trasversale distribuito, positivo verso il basso. Negli intervalli privi di azioni concentrate l'equilibrio di un elemento infinitesimo dà
$$
T'(x)=-q(x),
\qquad
M'(x)=T(x).
$$
Dove $q=0$ il taglio è costante e il momento è lineare. Dove $q$ è costante e diverso da zero il taglio è lineare e il momento è quadratico. L'area con segno sotto il diagramma di $T$ su un tratto senza coppie concentrate è la variazione di $M$ lungo il tratto.
:::

## Forze e coppie concentrate

:::teorema{#salti-diagrammi titolo="Salti dei diagrammi"}
Attraversando da sinistra a destra una forza $P$ verso il basso, il taglio varia di $-P$. Il momento resta continuo perché la forza ha braccio nullo rispetto alla sezione di applicazione. Attraversando una coppia antioraria $C$, il momento varia di $-C$ e il taglio resta continuo. Una forza assiale concentrata $F_x$ verso destra produce invece un salto $-F_x$ nel diagramma di $N$.
:::

## Valori ai vincoli

:::osservazione{#valori-ai-vincoli titolo="Condizioni ai bordi"}
A un estremo incernierato o appoggiato, in assenza di coppie applicate all'estremo, il momento è nullo. Anche in una cerniera interna priva di coppie applicate il momento è nullo. Un appoggio intermedio sotto una trave continua, invece, lascia passare il momento da una campata all'altra, perché la trave resta collegata senza cerniera.
:::

## Massimi e minimi del momento

:::osservazione{#estremi-momento titolo="Ricerca delle sezioni più sollecitate"}
In un tratto liscio i punti interni in cui $T=0$ sono candidati a un massimo o a un minimo di $M$. Vanno esaminate anche le sezioni in cui il taglio cambia segno per una forza concentrata, gli estremi della trave e i due limiti laterali dove il momento salta. Per trovare il massimo di $|M|$ si confrontano i moduli dei valori ottenuti.
:::

:::esempio{titolo="Forza concentrata e massimo del momento"}
Per una trave appoggiata lunga $5\,\mathrm{m}$, con una forza verticale verso il basso di $10\,\mathrm{kN}$ a $2\,\mathrm{m}$ dal primo appoggio, le reazioni verticali valgono $6\,\mathrm{kN}$ e $4\,\mathrm{kN}$. Il taglio passa da $+6\,\mathrm{kN}$ a $-4\,\mathrm{kN}$ nella sezione della forza. Il momento cresce prima della forza e decresce dopo, quindi raggiunge il massimo di $6\cdot2=12\,\mathrm{kN\,m}$ in quella sezione.
:::
