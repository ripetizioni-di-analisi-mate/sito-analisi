---
titolo: "Moto uniformemente accelerato e caduta libera"
sommario: "Accelerazione costante, leggi del moto, frenata, caduta libera e lancio verticale."
---

## L'accelerazione

:::definizione{#accelerazione titolo="La variazione della velocità"}
L'**accelerazione media** è il rapporto tra la variazione di velocità e la durata dell'intervallo,
$$a_m=\frac{v_f-v_i}{\Delta t}.$$
L'unità di misura è $\mathrm{m/s^2}$. Un'accelerazione di $2\,\mathrm{m/s^2}$ indica che la velocità aumenta di $2\,\mathrm{m/s}$ ogni secondo, se l'accelerazione resta costante. Il segno dipende dall'asse scelto. Quando velocità e accelerazione hanno segno opposto, il corpo rallenta; quando hanno lo stesso segno, il modulo della velocità aumenta.
:::

## La legge della velocità

:::teorema{#velocita titolo="Velocità con accelerazione costante"}
Nel moto rettilineo uniformemente accelerato, con istante iniziale $t=0$,
$$v=v_0+at.$$
La relazione segue dalla definizione di accelerazione costante $a=\dfrac{v-v_0}{t}$. Nel grafico velocità-tempo la pendenza è $a$ e l'intercetta è $v_0$.

::grafico{f="2*x+3" xmin=0 xmax=5 ymin=0 ymax=15 nomi="t,v" titolo="Per $v=3+2t$, la velocità iniziale è $3\,\mathrm{m/s}$ e l'accelerazione è $2\,\mathrm{m/s^2}$"}
:::

## La legge oraria

::::teorema{#posizione titolo="Posizione con accelerazione costante"}
Se l'accelerazione è costante, la posizione segue
$$x=x_0+v_0t+\frac12at^2.$$
:::dimostrazione
La velocità varia linearmente, quindi la velocità media nell'intervallo è $\dfrac{v_0+v}{2}$. Moltiplicando per il tempo si ottiene lo spostamento. Sostituendo $v=v_0+at$ si trova
$$x-x_0=\frac{v_0+v_0+at}{2}t=v_0t+\frac12at^2.$$
:::
::::

:::esempio{titolo="Partenza da fermo"}
Un carrello parte da fermo dall'origine con accelerazione $2\,\mathrm{m/s^2}$. Dopo $3\,\mathrm s$ ha velocità $6\,\mathrm{m/s}$ e posizione $9\,\mathrm m$. La distanza cresce con il quadrato del tempo; dopo $6\,\mathrm s$ vale $36\,\mathrm m$.
:::

## Una relazione senza il tempo

:::teorema{#senza-tempo titolo="Velocità e spostamento"}
Eliminando il tempo dalle due leggi del moto si ottiene
$$v^2=v_0^2+2a(x-x_0).$$
Questa forma serve quando sono note velocità, accelerazione e spostamento. Se si ricava $v$ mediante una radice quadrata, il verso del moto deve essere stabilito dal problema: il quadrato determina soltanto il modulo.
:::

## Frenata e tempo di reazione

:::osservazione{#frenata titolo="Il tratto fino all'arresto"}
Un veicolo con velocità iniziale $v_0>0$ e accelerazione costante $a=-b$, con $b>0$, si ferma dopo
$$t_a=\frac{v_0}{b},\qquad s_f=\frac{v_0^2}{2b}.$$
Le formule descrivono la frenata fino all'arresto. Durante un tempo di reazione $t_r$ il veicolo mantiene invece la velocità iniziale e percorre $s_r=v_0t_r$. La distanza totale di arresto è $s_r+s_f$ nelle ipotesi indicate.

::grafico{f="20-4*x" area="20-4*x;0;0;5" xmin=0 xmax=5 ymin=0 ymax=20 nomi="t,v" titolo="Il triangolo della frenata da $20\,\mathrm{m/s}$ in $5\,\mathrm s$ ha area $50\,\mathrm m$"}
:::

## Caduta e lancio verticale

:::teorema{#caduta titolo="Moto verticale vicino alla Terra"}
Trascurando la resistenza dell'aria, vicino alla superficie terrestre l'accelerazione è rivolta verso il basso e ha modulo $g=9{,}81\,\mathrm{m/s^2}$. Con asse positivo verso l'alto si ha
$$v=v_0-gt,\qquad y=y_0+v_0t-\frac12gt^2.$$
Un corpo lasciato da fermo da altezza $h$ impiega $\sqrt{\dfrac{2h}{g}}$ per raggiungere il suolo. Un corpo lanciato verso l'alto raggiunge la quota massima quando $v=0$, quindi dopo $\dfrac{v_0}{g}$. Nel punto più alto la velocità è nulla e l'accelerazione resta $-g$. Per esercizi che adottano $g=10\,\mathrm{m/s^2}$ il valore approssimato viene dichiarato nella traccia.
:::
