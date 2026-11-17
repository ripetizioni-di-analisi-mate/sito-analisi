---
titolo: "Rifrazione e lenti"
sommario: "Indice di rifrazione, legge di Snell, riflessione totale, immagini di lenti sottili e potere diottrico."
---

## Indice di rifrazione

:::definizione{#indice titolo="La velocità della luce in un mezzo"}
Per un materiale trasparente e una frequenza fissata, l’**indice di rifrazione** $n$ è il rapporto fra la velocità della luce nel vuoto $c$ e la velocità della fase nel mezzo $v$. L’indice è adimensionale. Nei materiali trasparenti comuni qui trattati vale $n>1$, quindi la luce viaggia più lentamente che nel vuoto.

$$
n=\frac cv,\qquad v=\frac cn.
$$

Al passaggio attraverso una superficie stazionaria la frequenza $\nu$ resta la stessa, poiché l’onda incidente e quella trasmessa hanno lo stesso andamento nel tempo al contatto. La lunghezza d’onda cambia. Se nel vuoto vale $\lambda_0=c/\nu$, nel mezzo vale $\lambda=v/\nu=\lambda_0/n$. I valori di $n$ possono dipendere dalla frequenza, quindi un indice fornito si usa per la luce specificata.
:::

:::esempio{titolo="Dalla velocità alla lunghezza d’onda"}
In un vetro con $n=1{,}50$ e con $c=3{,}0\cdot10^8\,\mathrm{m/s}$ si ha $v=2{,}0\cdot10^8\,\mathrm{m/s}$. Una lunghezza d’onda nel vuoto di $600\,\mathrm{nm}$ diventa $400\,\mathrm{nm}$. Il rapporto fra le lunghezze d’onda è lo stesso rapporto fra le velocità, perché il numero di oscillazioni al secondo resta invariato.

::grafico{f="600/x" punti="1,600,pieno;1.5,400,pieno;2,300,pieno" xmin=0.9 xmax=2.35 ymin=0 ymax=695 nomi="n,λ (nm)" titolo="Per una data frequenza, a indice maggiore corrisponde minore lunghezza d’onda."}
:::

## Legge di Snell

:::teorema{#snell titolo="Gli angoli della rifrazione"}
Fra due mezzi omogenei il raggio può cambiare direzione. La normale è perpendicolare all’interfaccia. Indichiamo con $\theta_1$ l’angolo del raggio incidente dalla normale nel primo mezzo e con $\theta_2$ quello del raggio trasmesso dalla normale nel secondo. Quando esiste un raggio trasmesso che si propaga nel secondo mezzo, vale

$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$

Si isola $\sin\theta_2$ e si cerca l’angolo fra $0^\circ$ e $90^\circ$ che abbia quel seno. Se $n_2>n_1$, l’angolo diminuisce e il raggio si avvicina alla normale. Se l’incidenza è normale e i mezzi sono entrambi trasparenti, la direzione prosegue sulla normale anche quando velocità e lunghezza d’onda cambiano.
:::

:::esempio{titolo="Dall’aria al vetro"}
Per $n_1=1{,}00$, $n_2=1{,}50$ e $\theta_1=30^\circ$, il seno rifratto è $\dfrac{1{,}00}{1{,}50}\cdot0{,}50=\dfrac13$. L’arcoseno vale circa $19{,}5^\circ$. L’angolo resta minore di $30^\circ$ come previsto. Se si scambiassero i due mezzi invertendo il cammino del raggio, si ritroverebbe il raggio iniziale.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-1.4,2.424871,0,0;0,0,0.933333,-2.639865" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="Il raggio in aria forma 30° dalla normale. Nel vetro forma circa 19,5°."}
:::

:::osservazione{#lastra titolo="Entrata e uscita da una lastra"}
Quando le due facce di una lastra sono parallele, hanno normali parallele. Se fuori da entrambe c’è lo stesso mezzo, applicando Snell alla prima e alla seconda faccia si ritrova lo stesso seno dell’angolo iniziale. Il raggio emergente è parallelo a quello incidente e può essere traslato perché ha seguito una direzione diversa nella lastra.
:::

## Riflessione totale

:::teorema{#totale titolo="L’angolo limite"}
La riflessione totale può avvenire quando il raggio parte nel mezzo con indice maggiore, quindi $n_1>n_2$. L’**angolo limite** $\theta_c$ è il valore di $\theta_1$ per cui Snell dà $\theta_2=90^\circ$.

$$
\theta_c=\arcsin\frac{n_2}{n_1}.
$$

Per $\theta_1<\theta_c$ esiste un raggio trasmesso nel secondo mezzo. Al limite è parallelo alla superficie. Per $\theta_1>\theta_c$ il seno richiesto dalla legge supererebbe uno e quindi manca il raggio trasmesso propagante. Nell’interfaccia ideale priva di assorbimento, la luce viene riflessa nel primo mezzo.
:::

:::esempio{titolo="Al di sopra dell’angolo limite"}
Dal vetro di indice $1{,}50$ all’aria di indice $1{,}00$, $\theta_c=\arcsin(\dfrac23)\simeq41{,}8^\circ$. Incidendo da vetro a $55^\circ$ si supera il valore limite. L’angolo del raggio riflesso è ancora $55^\circ$ dalla normale nel vetro. Se la luce arrivasse invece dall’aria verso il vetro, la riflessione totale sarebbe assente in questo modello.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-2.293626,1.606014,0,0;0,0,2.293626,1.606014" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="Da vetro ad aria con incidenza 55° rimane il raggio riflesso nel vetro."}
:::

## Lenti convergenti e divergenti

:::definizione{#lenti titolo="I fuochi di una lente sottile"}
Una **lente sottile** è modellata come un elemento il cui spessore è trascurabile rispetto alle distanze focali e di lavoro. Per raggi parassiali vicini all’asse, il raggio che attraversa il centro ottico si tratta come non deviato. Un raggio parallelo all’asse, uscendo, passa per il fuoco dal lato di uscita se la lente è convergente. Se la lente è divergente, il raggio uscente sembra provenire dal fuoco lato oggetto quando viene prolungato indietro.

Si usa $f>0$ per la lente convergente e $f<0$ per la divergente. La costruzione assume lo stesso mezzo esterno sui due lati. Per lenti molto spesse o raggi lontani dall’asse, questa rappresentazione è un’approssimazione insufficiente.
:::

## Equazione delle lenti sottili

::::teorema{#equazione titolo="Posizione e dimensione dell’immagine"}
Nella convenzione adottata un oggetto reale prima della lente ha $p>0$. Un’immagine reale dopo la lente ha $q>0$. Se si incontrano solo i prolungamenti verso il lato oggetto si ha $q<0$ e l’immagine è virtuale. Nel modello parassiale valgono

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=\frac{h_i}{h_o}=-\frac qp.
$$

L’ingrandimento trasversale $M$ ha segno negativo per un’immagine capovolta e positivo per un’immagine diritta. Il modulo indica il rapporto fra le altezze. Quando $p=f>0$, i raggi emergono paralleli e manca una posizione immagine finita.

:::dimostrazione
Prendiamo la lente in $x=0$ e l’oggetto alto $h_o$ in $x=-p$. Il raggio centrale ha retta $y=-h_ox/p$. Il raggio che arriva parallelo all’asse incontra la lente a quota $h_o$ e dopo la lente segue $y=h_o(1-x/f)$. All’intersezione in $x=q$, si uguagliano i due valori e si ottiene $-q/p=1-q/f$. Per un’immagine virtuale si usano le estensioni di queste stesse rette.
:::
::::

:::esempio{titolo="Quando si può usare uno schermo"}
Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$, $q=15\,\mathrm{cm}$ è positivo e $M=-0{,}50$. La lente produce un’immagine reale e ridotta dal lato opposto all’oggetto. Se si cambia solo la lente impostando $f=-10\,\mathrm{cm}$, si ottengono $q=-7{,}5\,\mathrm{cm}$ e $M=0{,}25$. Lo schermo non raccoglie un’immagine in quel punto, poiché vi si incontrano soltanto i prolungamenti.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-5.2 0,5.2" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,-2;0,0,15,-2;15,0,15,-2" punti="10,0,pieno,F;-10,0,pieno,F′;15,-2,pieno,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-5.72 ymax=5.72 titolo="La lente convergente produce l’immagine reale I a 15 cm dal centro."}
:::

:::osservazione{#regimi titolo="Leggere il segno e il modulo"}
Per una convergente con $p>f$ si ha immagine reale. Se $p>2f$ è ridotta, se $p=2f$ ha uguale altezza in modulo, mentre con $f<p<2f$ è ingrandita. Se $0<p<f$, la stessa lente convergente dà un’immagine virtuale, diritta e ingrandita. Per una lente divergente con oggetto reale vale sempre $q<0$ e $0<M<1$.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-13 0,13" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,10;0,0,15,-2" segmenti="0,4,-7.5,1;0,0,-7.5,1;-7.5,0,-7.5,1" punti="-10,0,pieno,F;10,0,pieno,F′;-7.5,1,vuoto,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-14.3 ymax=14.3 titolo="Con una lente divergente, I è sullo stesso lato di O dove si incrociano i prolungamenti."}
:::

## Potere diottrico e applicazioni

:::definizione{#diottrie titolo="L’inverso della distanza focale"}
Il **potere diottrico** $D$ di una lente sottile è il reciproco della distanza focale con segno, espressa in metri. Il valore numerico si misura in diottrie, con una diottria uguale a $\mathrm{m^{-1}}$. La stessa distanza focale espressa in centimetri va convertita prima di calcolare $D$.

$$
D=\frac{1}{f}.
$$

Per una convergente con $f=25\,\mathrm{cm}=0{,}25\,\mathrm m$ si ha $D=+4\,\mathrm{m^{-1}}$. Per una divergente con $f=-0{,}50\,\mathrm m$ si ha $D=-2\,\mathrm{m^{-1}}$. Con lenti sottili in contatto in aria, al primo ordine si sommano le potenze. Lenti separate richiedono invece un modello che includa la loro distanza.
:::
