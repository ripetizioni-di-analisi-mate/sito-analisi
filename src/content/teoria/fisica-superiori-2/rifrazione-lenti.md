---
titolo: "Rifrazione, riflessione totale e lenti sottili"
sommario: "Indice di rifrazione, legge di Snell, riflessione totale, lenti sottili e immagini."
---

## Indice di rifrazione

:::definizione{#indice titolo="La velocità della luce in un mezzo"}
L'**indice di rifrazione** di un mezzo trasparente è $n=\dfrac cv$, dove $c$ è la velocità nel vuoto e $v$ quella nel mezzo. Negli esercizi sull'aria si assume $n\simeq1$. Per il vetro si possono usare valori intorno a $1{,}5$, dichiarati nella traccia.

Quando la luce passa da un mezzo a un altro, la frequenza rimane costante. Poiché $v=\lambda f$, la lunghezza d'onda cambia insieme alla velocità. Se $\lambda_0$ è la lunghezza d'onda nel vuoto, nel mezzo si ha $\lambda=\dfrac{\lambda_0}{n}$.
:::

## Legge di Snell

:::teorema{#snell titolo="Gli angoli della rifrazione"}
Il raggio incidente, il raggio rifratto e la normale alla superficie appartengono allo stesso piano. Gli angoli $\theta_1$ e $\theta_2$, misurati rispetto alla normale, soddisfano
$$n_1\sin\theta_1=n_2\sin\theta_2.$$
Se $n_2>n_1$, il raggio rifratto si avvicina alla normale. Se $n_2<n_1$ e la rifrazione è possibile, se ne allontana. A incidenza normale la direzione rimane la stessa, anche se cambiano velocità e lunghezza d'onda.

::grafico{assi=0 linee="-3,0 3,0" segmenti="0,-3,0,3" vettori="-2,2,0,0,i;0,0,1.069,-2,r" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Passando dall'aria a un vetro di indice $1{,}5$, un raggio incidente a $45^\circ$ si rifrange a circa $28{,}1^\circ$"}
:::

## Riflessione totale

:::teorema{#totale titolo="L'angolo limite"}
La riflessione totale può avvenire quando la luce passa da un mezzo con indice $n_1$ a uno con indice minore $n_2$. L'angolo limite soddisfa
$$\sin\theta_c=\frac{n_2}{n_1}.$$
Per $\theta_1>\theta_c$ il raggio rifratto propagante non esiste e la luce viene riflessa totalmente. Per $\theta_1=\theta_c$ il raggio limite è radente alla superficie. Le fibre ottiche sfruttano la riflessione totale per guidare la luce.
:::

## Lenti convergenti e divergenti

:::definizione{#lenti titolo="I fuochi di una lente sottile"}
Una lente convergente in aria porta i raggi paralleli all'asse a incontrarsi in un fuoco reale; una lente divergente li fa allontanare e i loro prolungamenti passano per un fuoco virtuale. Per una lente sottile si assume $f>0$ nel caso convergente e $f<0$ nel caso divergente.

Un raggio che passa per il centro ottico mantiene approssimativamente la propria direzione. Un raggio parallelo all'asse, dopo una lente convergente, passa per il fuoco oltre la lente. Questi due raggi permettono di costruire graficamente l'immagine di un punto.
:::

## Equazione delle lenti sottili

:::teorema{#equazione titolo="Posizione e dimensione dell'immagine"}
Per un oggetto reale a distanza $p>0$ e raggi parassiali,
$$\frac1p+\frac1q=\frac1f,\qquad M=-\frac qp.$$
La distanza $q$ è positiva per un'immagine reale oltre la lente e negativa per una virtuale dalla parte dell'oggetto. Un'immagine reale può essere raccolta su uno schermo. Il segno negativo di $M$ indica un'immagine capovolta.

Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$, si ottengono $q=15\,\mathrm{cm}$ e $M=-0{,}50$. Con $p=5\,\mathrm{cm}$ e lo stesso fuoco, si ottengono invece $q=-10\,\mathrm{cm}$ e $M=2$: l'immagine è virtuale, diritta e ingrandita. Per $p=f$ i raggi emergenti sono paralleli e non si forma un'immagine a distanza finita.

::grafico{assi=0 linee="0,-2 0,2;-3,0 -3,1.5;-3,1.5 0,1.5 1.5,-0.75;-3,1.5 1.5,-0.75;1.5,0 1.5,-0.75" segmenti="-4,0,3,0" punti="1,0,pieno,F;-1,0,pieno,F" xmin=-4 xmax=3 ymin=-2 ymax=2 uguale=1 titolo="Lente convergente con $p=3f$: i raggi si incontrano a $q=1{,}5f$ e formano un'immagine capovolta"}
:::

## Potere diottrico e applicazioni

:::definizione{#diottrie titolo="L'inverso della distanza focale"}
Il **potere diottrico** è $D=\dfrac1f$, con $f$ espresso in metri. Si misura in diottrie, equivalenti a $\mathrm{m^{-1}}$. Una lente convergente di focale $0{,}25\,\mathrm m$ ha potere $+4\,\mathrm{m^{-1}}$; una divergente di focale $-0{,}50\,\mathrm m$ ha potere $-2\,\mathrm{m^{-1}}$.

L'occhio forma un'immagine reale sulla retina. La miopia si corregge con una lente divergente; l'ipermetropia con una convergente. Nel modello di due lenti sottili a contatto, i poteri diottrici si sommano. La dispersione, cioè la dipendenza dell'indice dalla frequenza, spiega la separazione dei colori in un prisma.
:::
