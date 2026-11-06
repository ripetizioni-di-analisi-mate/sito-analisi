---
titolo: "Funzioni, proporzionalità e grafici"
sommario: "Leggere gli assi, riconoscere una proporzionalità e interpretare pendenza e area nei grafici del moto."
---

## Variabili e grafici

:::definizione{#grafico titolo="Rappresentazione di una funzione"}
Una funzione associa a ogni valore ammesso di $x$ un unico valore $y=f(x)$. Il grafico è l'insieme dei punti $(x,f(x))$. Gli assi indicano la grandezza e la sua unità; la scala stabilisce il valore corrispondente a ogni intervallo.

Se $s(t)=2t+1$, con $t$ in secondi e $s$ in metri, al tempo $t=3\,\mathrm{s}$ corrisponde $s=7\,\mathrm{m}$. Il punto del grafico ha coordinate $(3,7)$.
:::

## Retta e pendenza

:::definizione{#retta titolo="Coefficiente angolare e intercetta"}
Nella relazione $y=mx+q$, $q$ è il valore di $y$ per $x=0$ e $m=\dfrac{\Delta y}{\Delta x}$ è la **pendenza**. Il rapporto ha le unità di $y$ divise per quelle di $x$.

Per $s(t)=2t+1$, la pendenza è $2\,\mathrm{m/s}$ e la posizione iniziale è $1\,\mathrm{m}$.

::grafico{f="2*x+1" xmin=0 xmax=4 ymin=0 ymax=10 nomi="t (s),s (m)" punti="0,1;3,7" segmenti="0,1,3,1;3,1,3,7" titolo="Una variazione di posizione di 6 m in 3 s corrisponde alla pendenza di 2 m/s."}
:::

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
Due quantità sono direttamente proporzionali se $y=kx$. Per $x\ne0$, il rapporto $\dfrac{y}{x}=k$ è costante e il grafico passa per l'origine. Moltiplicando $x$ per un fattore, anche $y$ viene moltiplicata per quel fattore.

A densità costante, $m=\rho V$: raddoppiando il volume raddoppia la massa. La relazione $y=2x+1$ è affine, ma non è una proporzionalità diretta poiché $y(0)=1$.
:::

## Proporzionalità inversa e quadratica

:::definizione{#inversa-quadratica titolo="Prodotto costante e dipendenza dal quadrato"}
Per $y=\dfrac{k}{x}$, con $x\ne0$, il prodotto $xy=k$ è costante. Se $x$ raddoppia, $y$ si dimezza. È il caso della pressione di un gas ideale a temperatura e quantità di sostanza fissate, per cui $pV$ è costante.

Per $y=kx^2$, raddoppiare $x$ moltiplica $y$ per quattro. L'energia cinetica $E_c=\dfrac12mv^2$, a massa fissata, ha questa dipendenza dal modulo della velocità.
:::

## Pendenza nei grafici del moto

:::osservazione{#moto titolo="Posizione, velocità e accelerazione"}
La velocità media in un intervallo è $v_m=\dfrac{s_2-s_1}{t_2-t_1}$. È la pendenza della retta che unisce i due punti del grafico posizione-tempo.

Nel grafico velocità-tempo la pendenza media è $a_m=\dfrac{v_2-v_1}{t_2-t_1}$. Per esempio, un passaggio da $2$ a $10\,\mathrm{m/s}$ in $4\,\mathrm{s}$ dà $a_m=2\,\mathrm{m/s^2}$. La pendenza di una retta coincide con quella di ogni suo tratto.
:::

## Area nel grafico velocità-tempo

:::osservazione{#area titolo="Spostamento e area con segno"}
L'area con segno sotto il grafico velocità-tempo rappresenta lo spostamento. Per velocità costante $v$ e durata $\Delta t$, il rettangolo ha area $v\Delta t$.

Se la velocità cresce linearmente da zero a $6\,\mathrm{m/s}$ in $4\,\mathrm{s}$, l'area triangolare è $\dfrac12\cdot4\cdot6=12\,\mathrm{m}$. Le parti sotto l'asse dei tempi contribuiscono con segno negativo. La distanza percorsa si ottiene invece sommando i valori assoluti delle aree.
:::
