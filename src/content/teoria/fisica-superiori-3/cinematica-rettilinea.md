---
titolo: "Moto rettilineo e grafici"
sommario: "Posizione, velocità, accelerazione, grafici del moto, frenate, incontri e caduta libera."
---

## Posizione e spostamento

:::definizione{#posizione titolo="Coordinata e intervallo di tempo"}
Per descrivere un moto rettilineo si scelgono un'origine, un verso positivo e un orologio. La **legge oraria** associa a ogni istante la coordinata del corpo. Lo spostamento è $\Delta x=x_f-x_i$; la distanza percorsa è la lunghezza del tragitto. Un corpo che va da $x=1\,\mathrm m$ a $x=5\,\mathrm m$ e poi torna a $x=2\,\mathrm m$ ha spostamento $1\,\mathrm m$ e distanza percorsa $7\,\mathrm m$. Il segno dello spostamento dipende dal verso scelto; la distanza è non negativa.

L'intervallo $\Delta t=t_f-t_i$ misura la durata del moto. L'istante iniziale si può scegliere uguale a zero; le condizioni iniziali $x_0$ e $v_0$ vanno riferite a quell'istante.
:::

## Velocità media e istantanea

:::definizione{#velocita titolo="Variazione della posizione"}
La **velocità media** è $v_m=\dfrac{\Delta x}{\Delta t}$. Il rapporto fra distanza totale e durata è invece la rapidità media. Per il tragitto precedente, percorso in $2\,\mathrm s$, la velocità media è $0{,}50\,\mathrm{m/s}$ e la rapidità media è $3{,}5\,\mathrm{m/s}$.

La velocità istantanea descrive come cambia la posizione in un intervallo molto breve attorno all'istante considerato. Nel grafico posizione-tempo corrisponde alla pendenza della tangente. Un tratto crescente ha velocità positiva, uno decrescente negativa, un tratto orizzontale velocità nulla. Per passare da $\mathrm{km/h}$ a $\mathrm{m/s}$ si divide per $3{,}6$; quindi $72\,\mathrm{km/h}=20\,\mathrm{m/s}$.
:::

## Moto uniforme

:::teorema{#uniforme titolo="Legge oraria a velocità costante"}
Se la velocità resta costante, in tempi uguali il corpo compie spostamenti uguali. La legge oraria è
$$
x=x_0+vt.
$$
Essa si ricava da $v=\dfrac{x-x_0}{t}$ moltiplicando per $t$ e isolando $x$. Con $x_0=4\,\mathrm m$ e $v=-2\,\mathrm{m/s}$, dopo $3\,\mathrm s$ la coordinata è $-2\,\mathrm m$. Il corpo attraversa l'origine dopo $2\,\mathrm s$. La velocità negativa indica che il moto avviene verso coordinate decrescenti.

Due corpi si incontrano quando hanno la stessa coordinata allo stesso istante. Per $x_A=x_{A0}+v_At$ e $x_B=x_{B0}+v_Bt$ si risolve $x_A=x_B$ e si controlla che il tempo trovato appartenga all'intervallo in cui entrambe le leggi sono valide.
:::

::grafico{f="2*x+1;-x+7" xmin=0 xmax=4 ymin=0 ymax=10 nomi="t,x" legenda="corpo A;corpo B" titolo="Le rette $x_A=1+2t$ e $x_B=7-t$ si intersecano a $t=2$, $x=5$"}

## Accelerazione

:::definizione{#accelerazione titolo="Variazione della velocità"}
L'accelerazione media è $a_m=\dfrac{v_f-v_i}{\Delta t}$. Se la velocità passa da $4$ a $10\,\mathrm{m/s}$ in $3\,\mathrm s$, l'accelerazione media vale $2\,\mathrm{m/s^2}$. Nel moto uniformemente accelerato l'accelerazione istantanea coincide con questo valore costante e la velocità segue
$$
v=v_0+at.
$$
Il segno dell'accelerazione indica il verso della variazione della velocità. Un corpo con $v<0$ e $a<0$ aumenta il modulo della velocità. Un corpo con $v>0$ e $a<0$ rallenta fino all'arresto; se l'accelerazione continua, poi riparte nel verso negativo. Il termine decelerazione si riferisce alla diminuzione del modulo della velocità.
:::

## Leggi del moto uniformemente accelerato

:::teorema{#uniformemente-accelerato titolo="Posizione e velocità con accelerazione costante"}
Con accelerazione costante, velocità iniziale $v_0$ e posizione iniziale $x_0$,
$$
x=x_0+v_0t+\frac12at^2,\qquad v^2=v_0^2+2a(x-x_0).
$$
La velocità media nell'intervallo è $\dfrac{v_0+v}{2}$, perché $v(t)$ è lineare. Quindi $x-x_0=\dfrac{v_0+v}{2}t$. Sostituendo $v=v_0+at$ si ricava la legge oraria; eliminando $t$ si ottiene la relazione che non contiene il tempo.

Per una frenata con $v_0=20\,\mathrm{m/s}$ e $a=-4\,\mathrm{m/s^2}$, l'arresto avviene a $t=5\,\mathrm s$ e lo spazio di frenata è $50\,\mathrm m$. La formula della frenata descrive il moto fino all'arresto. Con la stessa intensità della decelerazione, raddoppiare la velocità iniziale quadruplica lo spazio di arresto. L'eventuale spazio percorso durante il tempo di reazione va aggiunto separatamente.
:::

::grafico{f="20-4*x" area="20-4*x;0;0;5" xmin=0 xmax=6 ymin=-4 ymax=24 nomi="t,v" titolo="Frenata da $20\,\mathrm{m/s}$: il triangolo fino a $5\,\mathrm s$ ha area $50\,\mathrm m$"}

## Leggere i grafici e la caduta libera

:::osservazione{#grafici-caduta titolo="Pendenze e aree"}
Nel grafico velocità-tempo la pendenza è l'accelerazione e l'area con segno compresa fra il grafico e l'asse dei tempi è lo spostamento. Un'area sotto l'asse contribuisce negativamente. Nel grafico accelerazione-tempo l'area con segno è la variazione di velocità. Queste letture permettono di trattare moti a tratti senza applicare un'unica legge all'intero intervallo.

Vicino alla superficie terrestre e trascurando la resistenza dell'aria, l'accelerazione di caduta ha modulo $g=9{,}81\,\mathrm{m/s^2}$. Scegliendo l'asse verticale verso l'alto si scrive $a=-g$. Un corpo lasciato da fermo da altezza $h$ raggiunge il suolo dopo $t=\sqrt{\dfrac{2h}{g}}$ con velocità di modulo $\sqrt{2gh}$. Per $h=19{,}62\,\mathrm m$ si trova $t=2{,}00\,\mathrm s$. La massa non compare perché, nelle ipotesi indicate, tutti i corpi hanno la stessa accelerazione.
:::

::grafico{f="4*x-x^2" xmin=0 xmax=5 ymin=-5 ymax=5 nomi="t,x" titolo="La posizione cresce fino a $t=2$ e poi diminuisce; al vertice la velocità è nulla"}
