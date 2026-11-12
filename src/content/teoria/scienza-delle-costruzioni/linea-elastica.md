---
titolo: "Linea elastica e spostamenti delle travi"
sommario: "Come ottenere rotazioni e frecce dai momenti flettenti mediante integrazione e sovrapposizione."
---

:::percorso
Nella flessione semplice il momento determina la curvatura della trave. Integrando la curvatura si trovano la pendenza e la freccia in ogni sezione. Nelle strutture iperstatiche si useranno queste relazioni per imporre gli spostamenti prescritti dai vincoli.
:::

## Modello e convenzioni

:::definizione{#modello-eulero-bernoulli titolo="Trave di Eulero–Bernoulli"}
Nella teoria di Eulero–Bernoulli, per travi snelle e con piccole deformazioni, le sezioni piane rimangono piane e ortogonali all’asse deformato. Si assume l’ascissa $x$ orientata da sinistra a destra e la freccia $v(x)$ positiva verso il basso. La pendenza vale $v'(x)$. Il momento $M(x)$ è positivo se comprime le fibre superiori.
:::

## Curvatura e momento

:::teorema{#linea-elastica titolo="Equazione della linea elastica"}
Siano $E$ il modulo di Young e $I$ il momento d’inerzia intorno all’asse di flessione. Con le convenzioni fissate sopra,
$$
EI(x)v''(x)=-M(x).
$$
Se $EI$ è costante e il carico distribuito $q(x)$ è positivo verso il basso, le equazioni di equilibrio $M'=T$ e $T'=-q$ danno $EI\,v^{(4)}=q$ sui tratti senza forze o coppie concentrate.
:::

## Condizioni ai vincoli

:::definizione{#condizioni-vincolari titolo="Condizioni al contorno"}
Un incastro fisso impone $v=0$ e $v'=0$. Un appoggio semplice fisso impone $v=0$ e lascia libera la rotazione. Se l’appoggio è all’estremità della trave e in quel punto manca una coppia esterna, vale anche $M=0$. In un estremo libero senza forze o coppie concentrate valgono $M=0$ e $T=0$.
:::

## Integrazione a tratti

:::osservazione{#continuita titolo="Condizioni di raccordo"}
Quando cambia l’espressione di $M$ o di $EI$, si integra in ciascun tratto. Dove la trave è continua, si uguagliano $v$ e $v'$ dalle due parti. Una cerniera interna impone lo stesso spostamento trasversale ai due tronchi e trasmette momento nullo, mentre le pendenze dei tronchi possono differire.
:::

## Formule per gli schemi ricorrenti

:::teorema{#frecce-notevoli titolo="Frecce per travi prismatiche con rigidezza costante"}
Per carichi diretti verso il basso, le seguenti frecce sono positive nella convenzione adottata.

- Mensola con forza $P$ in punta. In punta $v=\dfrac{PL^3}{3EI}$ e $v'=\dfrac{PL^2}{2EI}$.
- Mensola con carico uniforme $q$ sull’intera luce. In punta $v=\dfrac{qL^4}{8EI}$ e $v'=\dfrac{qL^3}{6EI}$.
- Trave semplicemente appoggiata con forza $P$ in mezzeria. In mezzeria $v=\dfrac{PL^3}{48EI}$.
- Trave semplicemente appoggiata con carico uniforme $q$ sull’intera luce. In mezzeria $v=\dfrac{5qL^4}{384EI}$.

Una forza in $\mathrm{kN}$, una lunghezza in $\mathrm{m}$ e $EI$ in $\mathrm{kN\,m^2}$ danno la freccia in metri.
:::

## Sovrapposizione e simmetria

:::esempio{#sovrapposizione titolo="Trave appoggiata con forza centrale e carico uniforme"}
Per la stessa trave con $P$ in mezzeria e $q$ uniforme, l’elasticità lineare consente di sommare le due frecce. La freccia centrale è
$$
v\left(\frac{L}{2}\right)=\frac{PL^3}{48EI}+\frac{5qL^4}{384EI}.
$$
La rotazione in mezzeria è nulla perché geometria, rigidezza, vincoli e carico sono simmetrici rispetto a quella sezione.
:::
