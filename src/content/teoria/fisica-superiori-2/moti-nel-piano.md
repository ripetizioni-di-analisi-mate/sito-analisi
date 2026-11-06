---
titolo: "Moto nel piano e moto circolare uniforme"
sommario: "Componenti vettoriali, lancio orizzontale, periodo, frequenza e accelerazione centripeta."
---

## Vettori e componenti

:::definizione{#componenti titolo="Descrivere due direzioni"}
Nel piano la posizione è individuata da due coordinate $(x,y)$. Uno spostamento ha componenti $\Delta x$ e $\Delta y$ e modulo $\sqrt{(\Delta x)^2+(\Delta y)^2}$. Per esempio, uno spostamento di $3\,\mathrm m$ verso est e $4\,\mathrm m$ verso nord ha modulo $5\,\mathrm m$.

La **velocità** è tangente alla traiettoria e ha componenti $v_x$ e $v_y$. Il suo modulo è $v=\sqrt{v_x^2+v_y^2}$. Se un vettore di modulo $v$ forma un angolo $\alpha$ con il semiasse positivo delle ascisse, le componenti sono $v_x=v\cos\alpha$ e $v_y=v\sin\alpha$.

::grafico{vettori="0,0,3,4,v" segmenti="0,0,3,0;3,0,3,4" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="Le componenti $3$ e $4$ individuano un vettore di modulo $5$"}
:::

## Composizione dei moti

:::teorema{#composizione titolo="Studiare separatamente gli assi"}
Quando l'accelerazione è nota lungo due direzioni perpendicolari, il moto si studia lungo ciascun asse. I tempi dei due moti coincidono. Se $a_x=0$ e $a_y=-g$, si ha
$$x=x_0+v_{0x}t,\qquad y=y_0+v_{0y}t-\frac12gt^2.$$
Le componenti della velocità sono $v_x=v_{0x}$ e $v_y=v_{0y}-gt$. Queste relazioni valgono per un proiettile vicino alla superficie terrestre, trascurando la resistenza dell'aria.
:::

## Lancio orizzontale

:::teorema{#lancio titolo="Dal bordo di un tavolo"}
Un oggetto lanciato orizzontalmente da altezza $h$ ha velocità verticale iniziale nulla. Scelto il suolo come quota zero,
$$t_f=\sqrt{\frac{2h}{g}},\qquad R=v_0t_f.$$
Il tempo di caduta si ricava dal moto verticale; la distanza orizzontale $R$ si trova poi dal moto uniforme. Due oggetti lasciati dalla stessa altezza, uno da fermo e uno con velocità orizzontale, arrivano al suolo insieme nelle ipotesi del modello.

::grafico{f="5-0.2*x^2" xmin=0 xmax=5 ymin=0 ymax=5 uguale=1 nomi="x,y" titolo="Una traiettoria parabolica: la quota diminuisce mentre la posizione orizzontale aumenta"}
:::

## Periodo e frequenza

:::definizione{#periodo titolo="Contare i giri"}
Nel **moto circolare uniforme** il corpo percorre una circonferenza con rapidità costante. Il periodo $T$ è il tempo impiegato per un giro; la frequenza $f$ è il numero di giri nell'unità di tempo,
$$f=\frac1T,\qquad T=\frac1f.$$
La frequenza si misura in hertz, con $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. Se si compiono $N$ giri in un tempo $\Delta t$, allora $f=\dfrac{N}{\Delta t}$. Un valore espresso in giri al minuto si divide per $60$ per ottenere gli hertz.
:::

## Velocità tangenziale e angolare

:::teorema{#circolare titolo="La lunghezza di un giro"}
Per una circonferenza di raggio $r$, la distanza percorsa in un periodo è $2\pi r$. Quindi
$$v=\frac{2\pi r}{T}=2\pi rf,\qquad \omega=\frac{2\pi}{T},\qquad v=\omega r.$$
La velocità angolare $\omega$ si misura in radianti al secondo. Due punti di un disco rigido hanno la stessa velocità angolare; quello più lontano dal centro ha velocità tangenziale maggiore.
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="La direzione della velocità cambia"}
Nel moto circolare uniforme la rapidità è costante, mentre la direzione della velocità cambia. Esiste quindi un'accelerazione rivolta verso il centro,
$$a_c=\frac{v^2}{r}=\omega^2r.$$
Se la velocità tangenziale raddoppia a raggio costante, l'accelerazione centripeta quadruplica. Nel capitolo sui principi della dinamica questa accelerazione sarà collegata alla risultante delle forze diretta verso il centro.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185" vettori="2,0,2,1.5,v;2,0,0.5,0,a" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Nel punto a destra della circonferenza la velocità è tangente e l'accelerazione è diretta verso il centro"}
:::
