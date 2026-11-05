---
titolo: Riflessione, rifrazione, specchi e lenti
sommario: Raggi luminosi, legge di Snell, riflessione totale, formazione delle immagini, equazione degli specchi e delle lenti sottili.
---

## Raggi e indice di rifrazione

:::definizione{#indice titolo="Modello dei raggi luminosi"}
L'**ottica geometrica** descrive la propagazione mediante raggi, linee orientate che indicano la direzione della luce. Il modello è adatto quando le dimensioni degli ostacoli e delle aperture sono molto maggiori della lunghezza d'onda. In un mezzo omogeneo isotropo i raggi sono rettilinei.

L'indice di rifrazione di un mezzo è
$$
n=\frac{c}{u},\qquad c=3{,}00\cdot10^8\,\mathrm{m/s},
$$
dove $u$ è la velocità di fase della luce nel mezzo. Per un vetro con $n=1{,}50$ la velocità è $2{,}00\cdot10^8\,\mathrm{m/s}$. L'indice è senza unità e può dipendere dalla frequenza. Quando la luce attraversa un'interfaccia ferma, la frequenza resta la stessa mentre cambiano velocità e lunghezza d'onda. Perciò $\lambda=\dfrac{\lambda_0}{n}$, con $\lambda_0$ lunghezza d'onda nel vuoto.
:::

## Riflessione

:::teorema{#riflessione titolo="Legge della riflessione"}
Il raggio incidente, il raggio riflesso e la normale alla superficie nel punto di incidenza giacciono nello stesso piano. L'angolo di riflessione è uguale a quello di incidenza,
$$
\theta_r=\theta_i.
$$
Gli angoli sono misurati rispetto alla **normale**, cioè alla retta perpendicolare alla superficie. Un raggio che forma $30^\circ$ con lo specchio forma $60^\circ$ con la normale e viene riflesso con angolo $60^\circ$ rispetto alla normale.

Uno specchio piano produce un'immagine virtuale simmetrica dell'oggetto rispetto al piano dello specchio. I raggi riflessi divergono; i loro prolungamenti all'indietro si incontrano nel punto immagine. Un oggetto posto a $0{,}80\,\mathrm m$ davanti allo specchio ha immagine a $0{,}80\,\mathrm m$ dietro lo specchio, quindi la distanza oggetto-immagine è $1{,}60\,\mathrm m$. L'immagine è diritta e ha la stessa altezza dell'oggetto.
:::

::grafico{assi=0 uguale=1 linee="-3,0 3,0;0,-2 0,3" vettori="-2,2,0,0;0,0,2,2" etichette="0.3,2.6,normale;-2.5,-0.4,specchio" xmin=-4 xmax=4 ymin=-1 ymax=4 titolo="Riflessione su uno specchio piano: gli angoli di incidenza e riflessione sono misurati rispetto alla normale verticale"}

## Rifrazione e legge di Snell

:::teorema{#snell titolo="Passaggio fra due mezzi trasparenti"}
Per due mezzi trasparenti omogenei, la legge sperimentale di **Snell** è
$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$
Gli angoli sono misurati rispetto alla normale all'interfaccia. Il raggio incidente, il rifratto e la normale giacciono nello stesso piano. Passando verso un indice maggiore il raggio si avvicina alla normale; passando verso un indice minore si allontana, se la rifrazione è possibile.

Dall'aria, approssimata con $n_1=1{,}00$, al vetro con $n_2=1{,}50$ e $\theta_1=30^\circ$, si ottiene
$$
\sin\theta_2=\frac{1{,}00}{1{,}50}\sin30^\circ=\frac13,
\qquad\theta_2\simeq19{,}5^\circ.
$$
All'incidenza normale entrambi gli angoli sono nulli. La direzione resta invariata, ma velocità e lunghezza d'onda cambiano ugualmente. L'indice dipendente dalla frequenza spiega la dispersione della luce bianca in un prisma.
:::

::grafico{assi=0 uguale=1 linee="-3,0 3,0" segmenti="0,-3,0,3" vettori="-2,2,0,0;0,0,1.2,-2.4" etichette="-2.5,2.7,n₁;-2.5,-2.7,n₂ > n₁" xmin=-4 xmax=4 ymin=-4 ymax=4 titolo="Rifrazione verso un mezzo con indice maggiore: il raggio trasmesso forma un angolo minore con la normale"}

## Riflessione totale

::::teorema{#angolo-limite titolo="Condizione per la riflessione totale interna"}
Se la luce passa da un mezzo con indice $n_1$ a uno con indice $n_2<n_1$, esiste un angolo limite
$$
\theta_c=\arcsin\frac{n_2}{n_1}.
$$
Per $\theta_1>\theta_c$ si verifica riflessione totale interna nel modello ideale senza assorbimento. Con vetro di indice $1{,}50$ e aria di indice $1{,}00$, $\theta_c\simeq41{,}8^\circ$. A $50^\circ$ non esiste un raggio rifratto propagante nell'aria. Questo fenomeno permette il confinamento della luce nelle fibre ottiche.

:::dimostrazione
La legge di Snell dà $\sin\theta_2=\dfrac{n_1}{n_2}\sin\theta_1$. Il seno di un angolo reale non supera uno. Il valore limite si raggiunge per $\theta_2=90^\circ$, quindi $n_1\sin\theta_c=n_2$. Per incidenze maggiori il rapporto richiederebbe un seno maggiore di uno, incompatibile con un raggio rifratto propagante.
:::
::::

## Immagini e costruzione dei raggi

:::definizione{#immagini titolo="Immagine reale e virtuale"}
Un'immagine è **reale** quando i raggi emergenti si incontrano effettivamente nel punto immagine; può essere raccolta su uno schermo. È **virtuale** quando si incontrano solo i prolungamenti all'indietro dei raggi. La costruzione richiede almeno due raggi provenienti dallo stesso punto dell'oggetto.

Per una lente convergente sottile, un raggio parallelo all'asse emerge passando per il fuoco posteriore; un raggio che attraversa il centro ottico procede approssimativamente senza deviazione. Un raggio che arriva lungo la direzione del fuoco anteriore emerge parallelo all'asse. Per una lente divergente il raggio parallelo emerge come se provenisse dal fuoco anteriore.

Le costruzioni valgono nell'approssimazione **parassiale**, cioè per raggi vicini all'asse e poco inclinati. I raggi molto lontani dall'asse possono produrre aberrazioni. Il segno della distanza immagine e dell'ingrandimento formalizza le informazioni ottenute dal disegno.
:::

## Lenti sottili

:::teorema{#lenti titolo="Equazione delle lenti e ingrandimento"}
Per una lente sottile in aria con oggetto reale si adotta $p>0$ per la distanza oggetto; $q>0$ per un'immagine reale sul lato opposto della lente e $q<0$ per un'immagine virtuale sul lato dell'oggetto. La focale $f$ è positiva per la lente convergente e negativa per la divergente. Vale
$$
\frac1f=\frac1p+\frac1q,\qquad
q=\frac{fp}{p-f},\qquad M=\frac{h'}h=-\frac qp.
$$
$M$ è l'ingrandimento trasversale con segno. Se è negativo l'immagine è capovolta; se è positivo è diritta. Il suo modulo confronta le altezze.

Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ si trova $q=15\,\mathrm{cm}$ e $M=-0{,}50$. L'immagine è reale, capovolta e alta la metà. Con lo stesso $f$ e $p=5{,}0\,\mathrm{cm}$ si ottiene invece $q=-10\,\mathrm{cm}$ e $M=+2{,}0$: è virtuale, diritta e ingrandita. Quando $p=f$, i raggi emergono paralleli e non esiste un'immagine a distanza finita.
:::

::grafico{assi=0 uguale=1 linee="-7,0 7,0;0,-2 0,3;-6,0 -6,2;3,0 3,-1;-6,2 0,2 3,-1;-6,2 3,-1" punti="-2,0,pieno,F₁;2,0,pieno,F₂" xmin=-8 xmax=8 ymin=-3 ymax=4 titolo="Lente convergente con $p=3f$: due raggi partiti dalla cima dell'oggetto si incontrano in un'immagine reale capovolta a $q=\dfrac32f$"}

## Specchi sferici

:::teorema{#specchi titolo="Specchi concavi e convessi"}
Per uno specchio sferico, nell'approssimazione parassiale, la distanza focale ha modulo pari a metà del raggio di curvatura. Si adotta $f>0$ per lo specchio concavo e $f<0$ per il convesso. Per un oggetto reale davanti allo specchio, $p>0$; $q>0$ indica un'immagine reale davanti allo specchio e $q<0$ una virtuale dietro. Valgono
$$
\frac1f=\frac1p+\frac1q,\qquad M=-\frac qp.
$$
Uno specchio concavo con $f=20\,\mathrm{cm}$ e oggetto a $60\,\mathrm{cm}$ produce un'immagine reale a $30\,\mathrm{cm}$, con $M=-0{,}50$. Per uno specchio convesso con $f=-20\,\mathrm{cm}$ e $p=60\,\mathrm{cm}$ si trova $q=-15\,\mathrm{cm}$ e $M=+0{,}25$. Nel secondo caso l'immagine è virtuale, diritta e ridotta.

Le equazioni coincidono formalmente con quelle delle lenti, ma il significato spaziale di $q>0$ cambia. Nello specchio la luce viene riflessa sul lato dell'oggetto; nella lente viene trasmessa. Il disegno identifica perciò quale lato contiene l'immagine.
:::

## Potere diottrico e strumenti

:::definizione{#diottrie titolo="Potere di una lente"}
Il **potere diottrico** è $D=\dfrac1f$ con $f$ espresso in metri. Si misura in diottrie, equivalenti a $\mathrm{m^{-1}}$. Una lente convergente da $f=0{,}25\,\mathrm m$ ha potere $+4{,}0$ diottrie; una divergente da $f=-0{,}50\,\mathrm m$ ha potere $-2{,}0$ diottrie. Per due lenti sottili a contatto, nello stesso mezzo e nel modello parassiale, i poteri si sommano.

Una lente d'ingrandimento lavora con l'oggetto entro la distanza focale e forma un'immagine virtuale ingrandita. Una macchina fotografica forma sul sensore un'immagine reale. Nell'occhio il sistema ottico deve formare l'immagine sulla retina; la variazione del potere del cristallino permette di mettere a fuoco oggetti a distanze diverse. Questi esempi distinguono l'ingrandimento trasversale dell'immagine dall'ingrandimento angolare percepito da un osservatore, che richiede anche la posizione dell'occhio.
:::
