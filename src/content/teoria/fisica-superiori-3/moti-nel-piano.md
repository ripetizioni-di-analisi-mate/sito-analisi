---
titolo: "Moto nel piano, proiettili e moto circolare"
sommario: "Componenti del moto, lanci orizzontali e obliqui, traiettorie, radianti e accelerazione centripeta."
---

## Descrivere il moto in due dimensioni

:::definizione{#componenti-moto titolo="Posizione, velocità e accelerazione nel piano"}
La posizione di un punto nel piano è individuata dalle coordinate $x,y$. Il vettore spostamento ha componenti $\Delta x,\Delta y$. La velocità media vettoriale è $\vec v_m=\dfrac{\Delta\vec r}{\Delta t}$; la velocità istantanea è tangente alla traiettoria e ha verso concorde al moto.

Le componenti permettono di risolvere separatamente le equazioni lungo i due assi. Il tempo è lo stesso per entrambe. Con $v_x=3\,\mathrm{m/s}$ e $v_y=4\,\mathrm{m/s}$, il modulo della velocità è $v=\sqrt{v_x^2+v_y^2}=5\,\mathrm{m/s}$. Nel moto curvilineo la direzione di $\vec v$ cambia, quindi può esserci accelerazione anche con modulo della velocità costante.
:::

## Il lancio orizzontale

:::teorema{#lancio-orizzontale titolo="Moti indipendenti lungo gli assi"}
Un corpo viene lanciato orizzontalmente da quota $h$ con velocità $v_0$. Scegliendo $x_0=0$ e l'asse $y$ verso l'alto, trascurando l'aria e assumendo $g$ costante,
$$
x=v_0t,\qquad y=h-\frac12gt^2,\qquad v_x=v_0,\qquad v_y=-gt.
$$
La componente orizzontale è uniforme perché l'accelerazione orizzontale è nulla. Lungo la verticale il corpo cade da fermo. Il tempo di volo fino al suolo è $t_f=\sqrt{\dfrac{2h}{g}}$; la distanza orizzontale è $R=v_0t_f$. Con $h=19{,}62\,\mathrm m$ e $v_0=6{,}0\,\mathrm{m/s}$ si ottengono $t_f=2{,}0\,\mathrm s$ e $R=12\,\mathrm m$. Eliminando $t$ risulta $y=h-\dfrac{g}{2v_0^2}x^2$, una parabola.
:::

## Il lancio obliquo

:::teorema{#lancio-obliquo titolo="Tempo di volo, quota massima e gittata"}
Per un lancio dall'origine con velocità iniziale $v_0$ inclinata di $\theta$ rispetto all'orizzontale,
$$
x=v_0\cos\theta\,t,\qquad y=v_0\sin\theta\,t-\frac12gt^2.
$$
La componente verticale della velocità è $v_y=v_0\sin\theta-gt$. Al culmine essa si annulla, quindi $t_H=\dfrac{v_0\sin\theta}{g}$ e $H=\dfrac{v_0^2\sin^2\theta}{2g}$. Al culmine la componente orizzontale resta $v_0\cos\theta$.

Se arrivo e partenza sono alla stessa quota, si ottengono $t_f=2t_H$ e $R=\dfrac{v_0^2\sin2\theta}{g}$. Il fattore $\sin2\theta$ ha valore massimo $1$, quindi la gittata massima si ha a $45^\circ$ nelle ipotesi del modello. Con quote diverse si risolve invece la legge verticale all'altezza di arrivo. Un lancio con $v_0=20\,\mathrm{m/s}$ e $\theta=30^\circ$ ha $H\simeq5{,}10\,\mathrm m$ e $R\simeq35{,}3\,\mathrm m$.
:::

::grafico{f="0.5*x-0.025*x^2" xmin=0 xmax=22 ymin=-2 ymax=4 nomi="x,y" titolo="Traiettoria parabolica: al culmine la tangente è orizzontale"}

## Angoli e velocità angolare

:::definizione{#radianti titolo="Il radiante"}
Un angolo in radianti è il rapporto fra lunghezza dell'arco $s$ e raggio $r$, quindi $\theta=\dfrac sr$. Un giro corrisponde a $2\pi$ radianti e a $360^\circ$. La velocità angolare media è $\omega_m=\dfrac{\Delta\theta}{\Delta t}$. Nel moto circolare uniforme è costante.

Il periodo $T$ è il tempo necessario a completare un giro; la frequenza è $f=\dfrac1T$. Valgono
$$
\omega=\frac{2\pi}{T}=2\pi f,\qquad v=\omega r.
$$
Un punto a $r=0{,}50\,\mathrm m$ che compie un giro ogni $2{,}0\,\mathrm s$ ha $\omega=\pi\,\mathrm{rad/s}$ e $v\simeq1{,}57\,\mathrm{m/s}$. Sullo stesso disco rigido tutti i punti hanno uguale velocità angolare; la velocità tangenziale cresce con la distanza dall'asse.
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="Variazione della direzione della velocità"}
Nel moto circolare uniforme l'accelerazione è diretta verso il centro e ha modulo
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
La relazione si ricava confrontando, in un intervallo breve, il triangolo formato dai raggi con quello formato dai vettori velocità; i due triangoli hanno lo stesso piccolo angolo. Risulta $\dfrac{|\Delta\vec v|}{v}\simeq\dfrac{\Delta s}{r}$. Dividendo per $\Delta t$ e usando $\dfrac{\Delta s}{\Delta t}=v$, si ottiene $a_c=\dfrac{v^2}{r}$.

Un corpo a $v=4{,}0\,\mathrm{m/s}$ su una circonferenza di raggio $2{,}0\,\mathrm m$ ha $a_c=8{,}0\,\mathrm{m/s^2}$. Raddoppiare la velocità a raggio fisso quadruplica l'accelerazione. L'aggettivo centripeta indica la direzione dell'accelerazione.
:::

::grafico{curve="3*cos(t),3*sin(t),0,6.283185" vettori="3,0,3,2,v;3,0,1,0,a" xmin=-4 xmax=5 ymin=-4 ymax=4 uguale=1 titolo="Velocità tangente e accelerazione verso il centro nel moto circolare uniforme"}

## Moto circolare non uniforme

:::osservazione{#tangenziale titolo="Due componenti dell’accelerazione"}
Se cambia anche il modulo della velocità, l'accelerazione ha una componente tangenziale $a_t$ e una normale $a_c=\dfrac{v^2}{r}$. La prima cambia il modulo della velocità, la seconda ne cambia la direzione. Poiché sono perpendicolari,
$$
a=\sqrt{a_t^2+a_c^2}.
$$
Con $a_t=3{,}0\,\mathrm{m/s^2}$ e $a_c=4{,}0\,\mathrm{m/s^2}$ il modulo totale è $5{,}0\,\mathrm{m/s^2}$. La traiettoria circolare e il grafico di una componente della posizione sono rappresentazioni diverse: la traiettoria usa due coordinate spaziali; la legge oraria mette in relazione una coordinata con il tempo. Le oscillazioni e la proiezione del moto circolare saranno riprese in Fisica del 4° anno.
:::

::grafico{f="x^2/2" xmin=0 xmax=5 ymin=0 ymax=14 nomi="v,a" titolo="A raggio $2\,\mathrm m$, l’accelerazione centripeta cresce con il quadrato della velocità"}
