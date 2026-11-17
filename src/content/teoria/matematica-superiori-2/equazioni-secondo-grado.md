---
titolo: "Equazioni di secondo grado"
sommario: "Equazioni pure, spurie e complete, formula risolutiva, discriminante, relazioni di Viète, equazioni fratte e problemi."
---

## Forma normale

:::definizione{#forma titolo="Coefficienti e soluzioni"}
Un'**equazione di secondo grado** si scrive $ax^2+bx+c=0$, con $a\ne0$. I coefficienti sono reali. Prima di applicare la formula si eseguono i prodotti, si porta tutto a un membro e si riducono i termini simili.

Da $(x+1)(x+2)=7$ segue $x^2+3x-5=0$, quindi $a=1$, $b=3$ e $c=-5$. Il segno del termine noto appartiene al coefficiente.

Un valore è soluzione se, sostituito a $x$, rende nullo il polinomio. L'equazione può avere zero, una o due radici reali distinte.
:::

## Equazioni incomplete

:::teorema{#incomplete titolo="Equazioni pure e spurie"}
Se $b=0$, l'equazione è **pura** e diventa $x^2=-\dfrac ca$. Un secondo membro positivo dà due radici opposte. Se è zero si trova la radice nulla, mentre un valore negativo esclude le soluzioni reali.

Per $2x^2-18=0$ si ha $x^2=9$ e quindi $x=\pm3$. Per $x^2+4=0$ non ci sono soluzioni reali.

Se $c=0$, l'equazione è **spuria** e si fattorizza in $x(ax+b)=0$. Le radici sono $0$ e $-\dfrac ba$. Se anche $b=0$, i due valori coincidono e $0$ è una radice doppia. Per $3x^2-12x=0$ si ottengono $0$ e $4$. Dividendo per $x$ si perderebbe la radice nulla.
:::

## Formula risolutiva

:::teorema{#formula titolo="Completamento del quadrato"}
Moltiplicando $ax^2+bx+c=0$ per $4a$ e completando il quadrato si ottiene
$$
4a^2x^2+4abx+4ac=0
\iff(2ax+b)^2=b^2-4ac.
$$
Si definisce **discriminante** il numero $\Delta=b^2-4ac$. Se $\Delta\ge0$, estraendo la radice si trova
$$
x=\frac{-b\pm\sqrt\Delta}{2a}.
$$
Per $x^2-5x+6=0$, $\Delta=25-24=1$ e le radici sono $\dfrac{5\pm1}{2}$, cioè $2$ e $3$. La divisione per $2a$ è ammessa perché il coefficiente di secondo grado è non nullo.

Se il coefficiente lineare è $2b'$, si può usare la formula ridotta $x=\dfrac{-b'\pm\sqrt{(b')^2-ac}}a$.
:::

## Il discriminante

:::teorema{#discriminante titolo="Numero e natura delle radici"}
Se $\Delta>0$, le due radici sono reali e distinte. Se $\Delta=0$, coincidono nel valore $-\dfrac b{2a}$, detto radice doppia. Se $\Delta<0$, l'equazione non ha radici reali.

Per $x^2-4x+1=0$ le radici esatte sono $2\pm\sqrt3$. Per $x^2+2x+5=0$, $\Delta=-16$, quindi non ci sono soluzioni reali. Per $(x-3)^2=0$ il valore $3$ è l'unica radice distinta.

Le radici irrazionali si conservano in forma esatta. Una radice doppia compare con esponente due nella fattorizzazione e come unico elemento nell'insieme delle soluzioni.

::grafico{f="(x-2)^2;x^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 titolo="Una radice doppia per $y=(x-2)^2$, nessuna radice reale per $y=x^2+1$"}
:::

:::esempio{titolo="Discriminante e intersezioni con l'asse"}
Il valore minimo di $x^2-4x+5$ è $1$, perché $x^2-4x+5=(x-2)^2+1$. La parabola resta quindi sopra l'asse delle ascisse e l'equazione non ha radici reali. Abbassando il termine noto da $5$ a $4$, il minimo diventa zero. In quel caso la parabola tocca l'asse in $x=2$ e l'equazione ha una radice doppia. Con termine noto $3$ si ottiene invece $(x-2)^2-1$. I valori $x=1$ e $x=3$ rendono il quadrato uguale a $1$ e danno due intersezioni.

::grafico{f="(x-2)^2+1;(x-2)^2;(x-2)^2-1" legenda="y=(x-2)^2+1;y=(x-2)^2;y=(x-2)^2-1" xmin=-0.5 xmax=4.5 ymin=-1.7 ymax=4.2 punti="1,0,pieno,A;2,0,pieno,V;3,0,pieno,B" titolo="Il termine noto cambia l'altezza del vertice"}
:::

## Relazioni di Viète

:::teorema{#viete titolo="Somma, prodotto e scomposizione"}
Se $x_1,x_2$ sono le radici reali, contando due volte quella doppia,
$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca,\qquad
ax^2+bx+c=a(x-x_1)(x-x_2).
$$
Sviluppando il prodotto si ritrovano i coefficienti e si dimostrano le prime due relazioni.

Per $2x^2-10x+12=0$ le radici sono $2$ e $3$. La somma è $5$, il prodotto è $6$ e il trinomio si scompone come $2(x-2)(x-3)$. Il fattore $a$ resta nella scomposizione.

Due numeri con somma $s$ e prodotto $p$ risolvono $t^2-st+p=0$. Sono reali se $s^2-4p\ge0$.
:::

## Equazioni fratte

:::teorema{#fratte titolo="Dominio e radici escluse"}
Prima di eliminare i denominatori si richiede che ciascuno sia diverso da zero. Si moltiplica poi per il denominatore comune e si risolve l'equazione intera. Restano valide soltanto le radici del dominio iniziale.

Per $\dfrac{x^2-5x+6}{x-2}=0$ si esclude $x=2$. Il numeratore si annulla per $2$ e $3$, ma resta soltanto $3$. La semplificazione del fattore $x-2$ conserva l'esclusione.

La verifica nel testo iniziale controlla sia l'uguaglianza sia i denominatori. Moltiplicare per un'espressione che si annulla non giustifica l'inserimento del suo zero fra le soluzioni.
:::

:::esempio{titolo="Una radice esclusa dopo la riduzione"}
Nell'equazione $\dfrac{x}{x-1}=\dfrac{2}{x(x-1)}$ occorre escludere $x=0$ e $x=1$. Una volta fissato questo dominio, si può moltiplicare per $x(x-1)$. Si ottiene $x^2=2$, quindi i candidati sono $-\sqrt2$ e $\sqrt2$. Entrambi sono ammessi. Se al posto di $2$ si pone $1$, si arriva a $x^2=1$. In quel caso resta soltanto $x=-1$, perché il candidato $x=1$ annulla un denominatore.
:::

## Equazioni con parametri

:::teorema{#parametri titolo="Discussione dei casi"}
Si verifica prima che il coefficiente di $x^2$ sia non nullo. Se si annulla, l'equazione perde grado e si studia separatamente.

Per $x^2-2x+k=0$ il discriminante è $4-4k$. Si hanno due radici distinte per $k<1$, una doppia per $k=1$ e nessuna reale per $k>1$.

Se sono richieste due radici positive, si controlla prima che siano reali. Poi somma positiva e prodotto positivo assicurano che siano entrambe positive. Un prodotto positivo, da solo, ammetterebbe anche due radici negative.

Per $kx^2+x-1=0$ il caso $k=0$ dà l'equazione lineare $x-1=0$; la formula quadratica si applica soltanto quando $k\ne0$.
:::

:::esempio{titolo="Radici di segno opposto"}
Per $2x^2-3x+k=0$ il prodotto delle radici reali è $\dfrac k2$. Avere due radici di segno opposto richiede quindi $k<0$. Per tali valori il discriminante vale $9-8k>0$, perciò le radici sono davvero reali e distinte. Il prodotto è negativo e i due segni sono opposti. Per $k=0$ una radice è zero, quindi il valore di frontiera non soddisfa la richiesta.
:::

## Problemi e parabole

:::osservazione{#problemi titolo="Vincoli sulle soluzioni"}
Se un rettangolo ha base $h+2$ e area $24$, l'altezza soddisfa $h(h+2)=24$. Le radici sono $4$ e $-6$, ma una lunghezza deve essere positiva. Si ottengono altezza $4$ e base $6$.

Graficamente, le radici sono le ascisse dei punti in cui la parabola $y=ax^2+bx+c$ incontra l'asse orizzontale. Le loro ordinate sono zero.

::grafico{f="x^2-5*x+6" punti="2,0,pieno,A;3,0,pieno,B" xmin=-1 xmax=6 ymin=-2 ymax=8 titolo="Le radici $2$ e $3$ sono le ascisse dei punti sull’asse orizzontale"}

Il grafico distingue i casi del discriminante; il calcolo algebrico fornisce le radici esatte. Nei problemi si controllano poi unità, segni e vincoli richiesti.
:::
