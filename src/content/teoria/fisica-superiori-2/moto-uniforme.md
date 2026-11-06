---
titolo: "Moto rettilineo uniforme e grafici"
sommario: "Posizione, spostamento, velocità media, grafici, incontri e moti a tratti."
---

## Posizione e spostamento

:::definizione{#posizione titolo="Descrivere la posizione di un corpo"}
Per descrivere un moto lungo una strada rettilinea si scelgono un'origine, un verso positivo e un'unità di lunghezza. La **posizione** $x$ è la coordinata del corpo rispetto a queste scelte. La legge oraria associa una posizione a ogni istante $t$.

Lo **spostamento** è $\Delta x=x_f-x_i$, dove gli indici indicano la posizione finale e quella iniziale. Se un ciclista passa da $x_i=12\,\mathrm m$ a $x_f=5\,\mathrm m$, lo spostamento vale $-7\,\mathrm m$. Il segno indica il moto verso coordinate decrescenti. La distanza percorsa misura invece la lunghezza del tragitto ed è sempre non negativa.
:::

## Velocità media e unità di misura

:::definizione{#velocita titolo="Variazione della posizione nel tempo"}
La **velocità media** confronta lo spostamento con il tempo impiegato,
$$v_m=\frac{\Delta x}{\Delta t},\qquad \Delta t=t_f-t_i>0.$$
Il rapporto tra distanza totale e durata è la rapidità media. Un viaggio di andata e ritorno può avere velocità media nulla e rapidità media positiva, perché lo spostamento complessivo è nullo.

Nel Sistema Internazionale la velocità si esprime in $\mathrm{m/s}$. Poiché $1\,\mathrm{km}=1000\,\mathrm m$ e $1\,\mathrm h=3600\,\mathrm s$, per convertire i $\mathrm{km/h}$ in $\mathrm{m/s}$ si divide per $3{,}6$. Per esempio, $54\,\mathrm{km/h}=15\,\mathrm{m/s}$.
:::

## La legge del moto uniforme

::::teorema{#uniforme titolo="Posizione a velocità costante"}
Nel **moto rettilineo uniforme** la velocità mantiene modulo, direzione e verso costanti. Scelto $t=0$ come istante iniziale, si ha
$$x=x_0+vt.$$
Il termine $x_0$ è la posizione iniziale; il termine $vt$ è lo spostamento compiuto nel tempo $t$. In intervalli di tempo uguali si compiono spostamenti uguali.

:::dimostrazione
La velocità costante coincide con la velocità media in ogni intervallo. Quindi $v=\dfrac{x-x_0}{t}$ per $t>0$. Moltiplicando per $t$ e sommando $x_0$ si ottiene la legge oraria.
:::
::::

:::esempio{titolo="Un corpo che attraversa l'origine"}
Un carrello parte da $x_0=6\,\mathrm m$ con $v=-2\,\mathrm{m/s}$. La legge oraria è $x=6-2t$, con $x$ in metri e $t$ in secondi. Per trovare quando attraversa l'origine si pone $x=0$, quindi $t=3\,\mathrm s$.
:::

## Il grafico posizione-tempo

:::osservazione{#grafico-posizione titolo="La pendenza rappresenta la velocità"}
Nel grafico posizione-tempo il tempo sta sull'asse orizzontale. Un moto uniforme è rappresentato da una retta; il rapporto tra la variazione verticale e quella orizzontale è la velocità. Una retta crescente indica velocità positiva, una decrescente velocità negativa e una orizzontale un corpo fermo. L'altezza del punto sul grafico rappresenta la posizione.

::grafico{f="2*x+1;-x+7" xmin=0 xmax=4 ymin=0 ymax=10 nomi="t,x" legenda="A;B" titolo="I moti $x_A=1+2t$ e $x_B=7-t$ si incontrano a $t=2\,\mathrm s$ e $x=5\,\mathrm m$"}
:::

## Incontri e inseguimenti

:::teorema{#incontri titolo="Stessa posizione allo stesso istante"}
Due corpi si incontrano quando $x_A(t)=x_B(t)$. Se partono allo stesso istante con velocità costanti, allora
$$x_{A0}+v_At=x_{B0}+v_Bt.$$
Con $v_A\ne v_B$, il tempo cercato è $t=\dfrac{x_{B0}-x_{A0}}{v_A-v_B}$. Un valore negativo descrive un incontro precedente all'origine dei tempi. Per un problema che inizia a $t=0$ si accettano i valori $t\geq0$. Se uno dei corpi parte più tardi, il suo tempo di moto è il tempo trascorso dalla sua partenza.
:::

## Moti a tratti

:::osservazione{#tratti titolo="Un intervallo per ogni velocità"}
Se la velocità cambia durante il viaggio, lo spostamento si calcola separatamente in ciascun tratto e poi si somma. Nel grafico velocità-tempo, l'area con segno tra il grafico e l'asse dei tempi è lo spostamento. Un tratto sotto l'asse dà un contributo negativo. Per la distanza percorsa si sommano invece i moduli dei contributi.

Se un corpo percorre due tratti in tempi diversi, la rapidità media è la distanza totale divisa per il tempo totale. Per due tratti lunghi $100\,\mathrm m$ percorsi a $2$ e $4\,\mathrm{m/s}$, il tempo totale è $75\,\mathrm s$ e la rapidità media è $\dfrac{200}{75}\,\mathrm{m/s}$.
:::
