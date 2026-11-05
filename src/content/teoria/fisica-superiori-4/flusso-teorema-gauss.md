---
titolo: Flusso elettrico e teorema di Gauss
sommario: Superfici orientate, flusso elettrico, carica racchiusa e applicazioni del teorema di Gauss a sfere, fili, piani e conduttori.
---

## Superficie e normale

:::definizione{#superficie-orientata titolo="Area orientata"}
Per descrivere quanto campo attraversa una superficie piana si associa alla sua area $A$ un vettore $\vec A=A\hat n$. Il versore $\hat n$ è perpendicolare al piano e ha uno dei due versi possibili. Scegliere il verso significa **orientare** la superficie.

Per una superficie chiusa si adotta la normale rivolta verso l'esterno del volume racchiuso. In un cubo, per esempio, le due facce opposte hanno normali opposte. Per una superficie curva si suddivide idealmente l'area in piccoli elementi, ognuno con la propria normale.

L'angolo usato nel calcolo del flusso è quello fra campo e normale. Un campo perpendicolare al piano forma angolo zero o $180^\circ$ con la normale; un campo parallelo al piano forma $90^\circ$. Questa scelta rende il flusso positivo per il campo uscente e negativo per quello entrante attraverso una superficie chiusa.
:::

## Flusso del campo uniforme

:::definizione{#flusso titolo="Flusso attraverso una superficie piana"}
Se il campo è uniforme su una superficie piana,
$$
\Phi_E=\vec E\cdot\vec A=EA\cos\theta.
$$
Il **flusso elettrico** si misura in $\mathrm{N\,m^2/C}$. Con $E=200\,\mathrm{N/C}$, $A=0{,}030\,\mathrm{m^2}$ e $\theta=60^\circ$, si ottiene $\Phi_E=3{,}0\,\mathrm{N\,m^2/C}$. Invertire la normale cambia il segno del flusso. Se il campo è parallelo al piano, il flusso è nullo anche quando il campo ha modulo elevato.

Per un campo non uniforme o una superficie curva si sommano i contributi $\vec E\cdot\Delta\vec A$ di elementi abbastanza piccoli. Il flusso totale considera quindi orientamento e valore del campo su ogni parte. Il conteggio qualitativo delle linee di campo può aiutare a visualizzare il segno, ma il valore fisico deriva dalla formula e non dal numero arbitrario di linee disegnate.
:::

::grafico{assi=0 uguale=1 linee="-2,0 2,0" vettori="0,0,0,2,n;0,0,2,2,E" xmin=-3 xmax=3 ymin=-1 ymax=3 titolo="La superficie è rappresentata di taglio: l'angolo del flusso è quello tra il campo e la normale, non quello tra campo e piano"}

## Teorema di Gauss

:::teorema{#gauss titolo="Flusso totale e carica racchiusa"}
Il **teorema di Gauss** stabilisce che il flusso totale attraverso una superficie chiusa nel vuoto è
$$
\Phi_{E,\mathrm{chiusa}}=\frac{Q_{\mathrm{int}}}{\varepsilon_0},
\qquad\varepsilon_0=8{,}85\cdot10^{-12}\,\mathrm{C^2/(N\,m^2)}.
$$
$Q_{\mathrm{int}}$ è la somma algebrica delle cariche racchiuse. Una carica interna $+2{,}0\,\mathrm{nC}$ produce flusso totale di circa $226\,\mathrm{N\,m^2/C}$, indipendentemente dalla forma della superficie. Se dentro sono presenti anche $-2{,}0\,\mathrm{nC}$, il flusso totale è zero.

Le cariche esterne contribuiscono al campo nei punti della superficie, ma il loro contributo al flusso totale chiuso è nullo. Il campo prodotto da una carica esterna può quindi essere diverso da zero su tutta la superficie pur avendo flusso netto nullo. Il teorema riguarda una superficie *chiusa*; per una singola faccia aperta non basta conoscere la carica racchiusa da un'altra superficie.
:::

:::attenzione
Flusso nullo non significa campo nullo. Un campo uniforme che attraversa un cubo entra da una faccia ed esce da quella opposta con contributi uguali e contrari. Sulle altre quattro facce il campo è tangente, quindi il flusso è nullo. Il totale è zero, mentre il campo è presente.
:::

## Simmetria sferica

::::teorema{#sfera titolo="Campo esterno di una distribuzione sferica"}
Per una distribuzione di carica sfericamente simmetrica, il campo è radiale e ha lo stesso modulo in tutti i punti alla stessa distanza $r$ dal centro. Una superficie gaussiana sferica permette di scrivere
$$
E\,4\pi r^2=\frac{|Q_{\mathrm{int}}|}{\varepsilon_0},
\qquad E=\frac{|Q_{\mathrm{int}}|}{4\pi\varepsilon_0r^2}.
$$
Fuori da una sfera di carica totale $Q$ si ritrova quindi il campo di una carica puntiforme nel centro. Il verso è uscente per $Q>0$ ed entrante per $Q<0$. Con $Q=1{,}0\,\mathrm{nC}$ e $r=0{,}20\,\mathrm m$, il modulo è circa $225\,\mathrm{N/C}$.

:::dimostrazione
Per simmetria ogni elemento della sfera ha il campo lungo la normale. Il modulo costante si può raccogliere nella somma dei contributi di flusso, ottenendo il prodotto del campo per l'area totale $4\pi r^2$. Il teorema di Gauss fornisce allora l'equazione scritta. Se la carica è negativa il flusso è negativo e il campo è diretto verso il centro; il modulo resta positivo.
:::
::::

:::teorema{#sfera-uniforme titolo="Interno di una sfera isolante uniformemente carica"}
Per una sfera isolante di raggio $R$ con densità volumica uniforme e carica totale $Q$, una sfera interna di raggio $r<R$ racchiude $Q_{\mathrm{int}}=Q\dfrac{r^3}{R^3}$. Il campo interno ha quindi modulo
$$
E=\frac{|Q|r}{4\pi\varepsilon_0R^3}.
$$
Cresce linearmente dal centro fino alla superficie e poi decresce come l'inverso del quadrato della distanza. Con $r=\dfrac R2$ il campo è metà del valore sulla superficie. Questa distribuzione riguarda un isolante con carica uniforme nel volume; un conduttore in equilibrio ha una distribuzione diversa.
:::

::grafico{f="x<=1?x:1/(x^2)" xmin=0 xmax=3 ymin=0 ymax=2 nomi="r/R,E/Es" titolo="Campo normalizzato di una sfera isolante uniformemente carica: cresce linearmente dentro e decresce all'esterno"}

## Filo indefinito

::::teorema{#filo titolo="Distribuzione lineare uniforme"}
Un filo rettilineo idealmente indefinito con densità lineare di carica $\lambda_q$, misurata in $\mathrm{C/m}$, produce a distanza $r$ un campo di modulo
$$
E=\frac{|\lambda_q|}{2\pi\varepsilon_0r}.
$$
Il simbolo $\lambda_q$ indica carica per unità di lunghezza, distinta dalla lunghezza d'onda. Con $\lambda_q=1{,}0\cdot10^{-9}\,\mathrm{C/m}$ e $r=0{,}10\,\mathrm m$, si ottiene circa $180\,\mathrm{N/C}$. Il modello approssima il tratto centrale di un filo lungo rispetto alla distanza osservata.

:::dimostrazione
Si sceglie un cilindro gaussiano coassiale, di raggio $r$ e lunghezza $L$. Sulla superficie laterale il campo è normale e ha modulo costante. Sulle basi è tangente e non produce flusso. La carica interna è $\lambda_qL$, quindi $E\,2\pi rL=\dfrac{|\lambda_q|L}{\varepsilon_0}$. La lunghezza si semplifica e si ottiene la formula.
:::
::::

## Piano indefinito e condensatore

::::teorema{#piano titolo="Distribuzione piana uniforme"}
Un piano idealmente indefinito con densità superficiale $\sigma_q$ produce su ciascun lato un campo uniforme di modulo
$$
E=\frac{|\sigma_q|}{2\varepsilon_0}.
$$
Il campo è perpendicolare al piano, uscente se la carica è positiva. Con $\sigma_q=8{,}85\cdot10^{-9}\,\mathrm{C/m^2}$ il modulo è $500\,\mathrm{N/C}$ per lato.

:::dimostrazione
Una superficie cilindrica sottile attraversa il piano con due basi uguali di area $A$. Il campo è perpendicolare a entrambe le basi ed è tangente alla parte laterale. Il flusso è quindi $2EA$. La carica racchiusa è $\sigma_qA$, da cui $2EA=\dfrac{|\sigma_q|A}{\varepsilon_0}$ e la formula.
:::
::::

:::teorema{#due-piani titolo="Campo tra due armature opposte"}
Due piani paralleli con densità uguali in modulo e opposte producono, per sovrapposizione, un campo nullo all'esterno e un campo uniforme fra essi,
$$
E=\frac{|\sigma_q|}{\varepsilon_0}.
$$
Il verso va dall'armatura positiva alla negativa. Il risultato approssima un condensatore piano lontano dai bordi quando la separazione è molto minore delle dimensioni delle armature. Con le densità dell'esempio precedente, il campo interno è $1000\,\mathrm{N/C}$.
:::

## Conduttori in equilibrio elettrostatico

:::teorema{#conduttore titolo="Campo nel metallo e sulla superficie"}
In un conduttore in equilibrio elettrostatico il campo all'interno del materiale è nullo. Un campo non nullo muoverebbe le cariche libere, in contrasto con l'equilibrio. L'eventuale carica netta in eccesso si distribuisce sulla superficie. Il campo appena fuori è perpendicolare alla superficie, perché una componente tangenziale produrrebbe moto delle cariche.

Un piccolo cilindro gaussiano che attraversa la superficie, con una base nel metallo e una appena fuori, dà
$$
E_{\mathrm{est}}=\frac{|\sigma_q|}{\varepsilon_0}.
$$
Il fattore è diverso da quello del singolo piano isolante, perché nel metallo il campo è zero. Per una sfera conduttrice isolata di raggio $R$, con distribuzione simmetrica di carica $Q$, il campo interno è nullo e quello esterno è quello di una carica puntiforme. Una cavità vuota completamente racchiusa da un conduttore in equilibrio è schermata dai campi elettrostatici esterni; una cavità contenente cariche richiede invece di considerare anche le cariche indotte.
:::

## Quando Gauss permette di trovare il campo

:::osservazione{#uso-simmetria titolo="Legge generale e metodo di calcolo"}
Il teorema di Gauss vale anche senza simmetria. Per ricavare facilmente il campo occorre però una superficie su cui il modulo sia costante e la direzione rispetto alla normale sia nota. Una superficie sferica attorno a una carica fuori centro ha lo stesso flusso totale di una che la racchiude al centro, ma il campo non è uniforme sulla superficie.

Il flusso totale di $+1{,}0\,\mathrm{nC}$ è circa $113\,\mathrm{N\,m^2/C}$ per ogni superficie chiusa che racchiuda la carica. Dividere questo valore per l'area fornisce il campo solo quando la simmetria giustifica il raccoglimento di $E$. Nei problemi con poche cariche puntiformi e senza simmetria si usa invece la somma vettoriale dei campi del capitolo precedente.
:::
