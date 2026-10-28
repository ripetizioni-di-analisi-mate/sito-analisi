---
titolo: Ottica geometrica e ondulatoria
sommario: Come la luce si riflette e si rifrange secondo le leggi di Snell, come specchi e lenti sottili formano le immagini, e come interferenza, diffrazione e polarizzazione rivelano la natura ondulatoria della luce.
---

## Luce, raggi e indice di rifrazione

:::richiamo{titolo="Onde elettromagnetiche"}
La luce è un'onda elettromagnetica: i campi $\vec{E}$ e $\vec{B}$ oscillano perpendicolarmente tra loro e alla direzione di propagazione, e nel vuoto si propagano con velocità $c = 3{,}00 \cdot 10^{8}\,\mathrm{m/s}$. La lunghezza d'onda $\lambda$ e la frequenza $\nu$ sono legate da $c = \lambda\,\nu$, e la luce visibile occupa le lunghezze d'onda comprese tra circa $400\,\mathrm{nm}$ (violetto) e $700\,\mathrm{nm}$ (rosso). Si rimanda all'argomento sulle equazioni di Maxwell e le onde elettromagnetiche.
:::

:::definizione{#ottica-geometrica titolo="Raggio luminoso e ottica geometrica"}
Un **fronte d'onda** è una superficie i cui punti oscillano tutti con la stessa fase; un **raggio luminoso** è una linea orientata, perpendicolare in ogni punto ai fronti d'onda, che indica la direzione di propagazione. In un mezzo omogeneo i raggi sono rettilinei.

L'**ottica geometrica** descrive la propagazione della luce solo per mezzo dei raggi. È un'approssimazione, valida quando le aperture e gli ostacoli incontrati dalla luce hanno dimensioni molto maggiori della lunghezza d'onda: una lente di qualche centimetro è circa centomila volte più grande di $\lambda$, e per essa i raggi bastano. Quando le dimensioni sono confrontabili con $\lambda$, come per fenditure larghe qualche decimo di millimetro, compaiono interferenza e diffrazione, che sono l'oggetto dell'**ottica ondulatoria**.
:::

:::definizione{#indice-di-rifrazione titolo="Indice di rifrazione"}
In un mezzo trasparente omogeneo la luce si propaga con una velocità $v$ minore di $c$. L'**indice di rifrazione** del mezzo è il numero puro
$$
n = \frac{c}{v} \geq 1 .
$$
Il vuoto ha $n = 1$, l'aria $n \approx 1{,}0003$, che nei problemi si approssima con $1{,}00$; l'acqua ha $n = 1{,}33$, il vetro comune $n \approx 1{,}5$, il diamante $n = 2{,}42$. Fra due mezzi si dice *più rifrangente* quello con indice maggiore, in cui la luce è più lenta. In acqua, per esempio, $v = \dfrac{c}{1{,}33} \approx 2{,}26 \cdot 10^{8}\,\mathrm{m/s}$.
:::

:::teorema{#lunghezza-onda-nel-mezzo titolo="Frequenza e lunghezza d'onda in un mezzo"}
Quando la luce passa da un mezzo a un altro la frequenza $\nu$ resta la stessa, perché le oscillazioni dei campi sui due lati della superficie di separazione avvengono allo stesso ritmo, imposto dalla sorgente. In un mezzo di indice $n$ la lunghezza d'onda è quindi
$$
\lambda_n = \frac{v}{\nu} = \frac{c}{n\,\nu} = \frac{\lambda}{n} ,
$$
dove $\lambda$ è la lunghezza d'onda nel vuoto. Il colore della luce dipende dalla frequenza, perciò resta lo stesso nei diversi mezzi. Una luce di $600\,\mathrm{nm}$ nel vuoto ha in acqua $\lambda_n = \dfrac{600}{1{,}33}\,\mathrm{nm} \approx 451\,\mathrm{nm}$. La relazione serve nell'ottica ondulatoria, dove le condizioni di interferenza si scrivono con la lunghezza d'onda nel mezzo in cui la luce si propaga.
:::

## Riflessione e rifrazione

Quando un raggio incide sulla superficie di separazione tra due mezzi trasparenti, una parte della luce torna indietro nel primo mezzo e una parte entra nel secondo cambiando direzione.

:::definizione{#angoli-di-incidenza titolo="Piano e angoli di incidenza"}
Si consideri un raggio che incide in un punto della superficie di separazione e sia $\hat{n}$ la normale alla superficie in quel punto. Il **piano di incidenza** è il piano che contiene il raggio incidente e la normale. L'**angolo di incidenza** $\theta_1$, l'angolo di riflessione $\theta_1'$ e l'**angolo di rifrazione** $\theta_2$ sono gli angoli che il raggio incidente, il raggio riflesso e il raggio rifratto formano con la normale. Misurare gli angoli dalla normale, e non dalla superficie, rende le leggi della riflessione e della rifrazione indipendenti dalla forma della superficie.
:::

:::teorema{#legge-della-riflessione titolo="Legge della riflessione"}
È una legge sperimentale. Il raggio riflesso giace nel piano di incidenza, dalla parte opposta della normale rispetto al raggio incidente, e l'angolo di riflessione è uguale all'angolo di incidenza:
$$
\theta_1' = \theta_1 .
$$
La legge vale per ogni superficie riflettente, piana o curva, con la normale nel punto di incidenza, ed è la base della teoria degli specchi. Un raggio che incide su uno specchio con $\theta_1 = 30^\circ$ viene riflesso a $30^\circ$ dall'altra parte della normale, quindi il raggio riflesso forma un angolo di $60^\circ$ con il raggio incidente.
:::

:::teorema{#legge-di-snell titolo="Legge di Snell"}
È una legge sperimentale. Un raggio che passa da un mezzo di indice $n_1$ a un mezzo di indice $n_2$ viene rifratto nel piano di incidenza, dalla parte opposta della normale, e gli angoli soddisfano
$$
n_1 \sin\theta_1 = n_2 \sin\theta_2 .
$$
La legge, insieme alla legge della riflessione, costituisce le **leggi di Snell**, e permette di calcolare la direzione del raggio rifratto. Si interpreta con il principio di Huygens: il fronte d'onda che entra nel mezzo più lento rallenta, e per questo ruota. Un raggio che passa dall'aria al vetro con $n_2 = 1{,}50$ e $\theta_1 = 45^\circ$ ha $\sin\theta_2 = \dfrac{\sin 45^\circ}{1{,}50} \approx 0{,}471$, quindi $\theta_2 \approx 28{,}1^\circ$.

::grafico{assi=0 uguale=1 poligoni="-4,0 4,0 4,-3 -4,-3" linee="-4,0 4,0" segmenti="0,-3,0,3" vettori="-2.83,2.83,0,0;0,0,2.83,2.83;0,0,1.41,-2.65" etichette="-0.65,1.2,θ₁;0.3,1.2,θ₁;0.12,-1.3,θ₂;-3.7,0.35,n₁;-3.7,-0.65,n₂;-3.4,2.45,incidente;2.15,2.45,riflesso;1.55,-2.1,rifratto" xmin=-4.2 xmax=4.2 ymin=-3.2 ymax=3.3 titolo="Raggio incidente, riflesso e rifratto: gli angoli si misurano dalla normale tratteggiata; con $n_2 > n_1$ il raggio rifratto si avvicina alla normale"}

:::

:::osservazione{#verso-della-deviazione titolo="Verso della deviazione"}
Dalla legge di Snell, $\sin\theta_2 = \dfrac{n_1}{n_2}\sin\theta_1$, e il seno è crescente tra $0$ e $\dfrac{\pi}{2}$.

- Se $n_2 > n_1$, allora $\theta_2 < \theta_1$: il raggio che entra in un mezzo più rifrangente si **avvicina** alla normale.
- Se $n_2 < n_1$, allora $\theta_2 > \theta_1$: il raggio si allontana dalla normale.
- Se $\theta_1 = 0$, allora $\theta_2 = 0$: il raggio perpendicolare alla superficie prosegue senza deviare.

Attraverso una successione di strati a facce parallele la grandezza $n \sin\theta$ resta la stessa in ogni strato, perché la legge di Snell la conserva a ogni superficie; quindi l'angolo nell'ultimo mezzo dipende solo dagli indici del primo e dell'ultimo.
:::

:::osservazione{#dispersione titolo="Dispersione della luce"}
L'indice di rifrazione di un mezzo dipende dalla lunghezza d'onda; nel vetro e nell'acqua decresce al crescere di $\lambda$, quindi la luce violetta è deviata più della rossa. Questo fenomeno si chiama **dispersione**. Un fascio di luce bianca che attraversa un prisma di vetro esce perciò separato nei colori, e l'arcobaleno nasce dalla dispersione della luce del Sole nelle gocce d'acqua. Nei problemi in cui l'indice è dato come un solo numero la dispersione si trascura.
:::

::::teorema{#lamina-a-facce-parallele titolo="Lamina a facce parallele"}
Si consideri una lamina trasparente di spessore $t$ e indice $n$, delimitata da due facce piane parallele e immersa in aria, e un raggio che incide sulla prima faccia con angolo $\theta_1$. Allora il raggio emerge dalla seconda faccia **parallelo** al raggio incidente, spostato lateralmente della distanza
$$
d = \frac{t \sin(\theta_1 - \theta_2)}{\cos\theta_2} , \qquad \sin\theta_2 = \frac{\sin\theta_1}{n} .
$$
Lo spostamento è nullo per incidenza normale e cresce con $\theta_1$; per questo un vetro di finestra non altera la direzione da cui si vedono gli oggetti. Con $t = 1{,}0\,\mathrm{cm}$, $n = 1{,}50$ e $\theta_1 = 45^\circ$ si ha $\theta_2 \approx 28{,}1^\circ$ e $d \approx 0{,}33\,\mathrm{cm}$.

:::dimostrazione
Le due facce sono parallele, quindi hanno normali parallele, e il raggio interno forma con la normale alla seconda faccia lo stesso angolo $\theta_2$ che forma con la normale alla prima. La **legge di Snell** alla seconda faccia dà $n \sin\theta_2 = \sin\theta_3$, e alla prima $\sin\theta_1 = n \sin\theta_2$; perciò $\sin\theta_3 = \sin\theta_1$, cioè $\theta_3 = \theta_1$, e il raggio emergente è parallelo a quello incidente.

Siano $A$ e $B$ i punti di ingresso e di uscita. Il segmento $AB$ forma con la normale l'angolo $\theta_2$ e attraversa lo spessore $t$, quindi $AB = \dfrac{t}{\cos\theta_2}$. Lo spostamento $d$ è la distanza di $B$ dalla retta del raggio incidente prolungato, che passa per $A$ e forma con $AB$ l'angolo $\theta_1 - \theta_2$; perciò $d = AB \sin(\theta_1 - \theta_2)$, che è la tesi.
:::
::::

## Riflessione totale

::::teorema{#angolo-limite titolo="Riflessione totale e angolo limite"}
Si consideri un raggio che passa da un mezzo di indice $n_1$ a un mezzo *meno* rifrangente, di indice $n_2 < n_1$. L'**angolo limite** è l'angolo $\theta_c$ tale che
$$
\sin\theta_c = \frac{n_2}{n_1} .
$$
Per $\theta_1 = \theta_c$ il raggio rifratto è radente alla superficie; per $\theta_1 > \theta_c$ non esiste raggio rifratto e tutta la luce viene riflessa nel primo mezzo. Questo fenomeno si chiama **riflessione totale**. Tra acqua e aria l'angolo limite è $\arcsin\dfrac{1}{1{,}33} \approx 48{,}8^\circ$, tra vetro con $n = 1{,}50$ e aria è circa $41{,}8^\circ$; perciò un raggio che incide a $45^\circ$ sulla faccia interna di un prisma di vetro viene riflesso totalmente, e i prismi dei binocoli funzionano come specchi senza perdite.

::grafico{assi=0 uguale=1 poligoni="-1,0 7,0 7,-2.6 -1,-2.6" linee="-1,0 7,0" segmenti="2.28,-2.4,2.28,1.2;3.76,-2.4,3.76,1.2" vettori="0,-2,0.93,0;0.93,0,2.17,1.82;0,-2,2.28,0;2.28,0,4.6,0.02;0,-2,3.76,0;3.76,0,6.77,-1.6" punti="0,-2,pieno,S" etichette="1.85,-0.75,θc;3.3,-0.75,θ₁;-0.8,0.3,aria;-0.8,-0.5,acqua" xmin=-1.2 xmax=7.2 ymin=-2.8 ymax=2.2 titolo="Raggi emessi dalla sorgente $S$ in acqua: sotto l'angolo limite escono rifratti, all'angolo limite $\theta_c$ escono radenti, oltre l'angolo limite vengono riflessi totalmente"}

:::dimostrazione
Per la **legge di Snell** $\sin\theta_2 = \dfrac{n_1}{n_2}\sin\theta_1$, con $\dfrac{n_1}{n_2} > 1$. Il secondo membro cresce con $\theta_1$ e vale $1$ quando $\sin\theta_1 = \dfrac{n_2}{n_1}$, cioè per $\theta_1 = \theta_c$; in quel caso $\theta_2 = 90^\circ$. Per $\theta_1 > \theta_c$ il secondo membro supera $1$, quindi nessun angolo $\theta_2$ soddisfa la legge di Snell e il raggio rifratto non esiste; si osserva sperimentalmente che allora tutta l'energia luminosa si ritrova nel raggio riflesso. Se invece $n_2 > n_1$, il secondo membro è sempre minore di $1$, perciò la riflessione totale avviene *solo* passando verso un mezzo meno rifrangente.
:::
::::

:::esempio{titolo="Fibra ottica"}
Una fibra ottica è un filo di vetro, il nucleo, di indice $n_1$, rivestito da un mantello di indice $n_2 < n_1$. Un raggio che percorre il nucleo e incide sul mantello con un angolo maggiore dell'angolo limite viene riflesso totalmente, e lo stesso accade a ogni riflessione successiva; quindi la luce resta confinata nel nucleo anche quando la fibra è curva. Con $n_1 = 1{,}50$ e $n_2 = 1{,}40$ l'angolo limite è $\arcsin\dfrac{1{,}40}{1{,}50} \approx 69{,}0^\circ$, perciò sono guidati i raggi che formano con l'asse della fibra un angolo minore di $21{,}0^\circ$.
:::

:::richiamo{titolo="Approssimazione per piccoli angoli"}
Per $\theta$ espresso in radianti, gli sviluppi di Taylor $\sin\theta = \theta - \dfrac{\theta^3}{6} + o(\theta^3)$, $\tan\theta = \theta + \dfrac{\theta^3}{3} + o(\theta^3)$ e $\cos\theta = 1 - \dfrac{\theta^2}{2} + o(\theta^2)$ danno, per $\theta \to 0$, le approssimazioni $\sin\theta \approx \tan\theta \approx \theta$ e $\cos\theta \approx 1$. Per $\theta = 0{,}1\,\mathrm{rad}$ l'errore relativo su $\sin\theta$ è circa lo $0{,}2\,\%$. Si rimanda all'argomento sul calcolo differenziale e Taylor di Analisi 1.
:::

::::teorema{#profondita-apparente titolo="Profondità apparente"}
Si consideri un oggetto alla profondità $h$ sotto la superficie piana di un mezzo di indice $n_1$, osservato da un mezzo di indice $n_2$ in direzione quasi perpendicolare alla superficie, così che i raggi che arrivano all'occhio formino angoli piccoli con la normale. Allora l'immagine dell'oggetto si trova alla profondità
$$
h' = \frac{n_2}{n_1}\, h .
$$
Visto dall'aria, un oggetto in acqua appare quindi meno profondo di quanto è: il fondo di una piscina profonda $2{,}0\,\mathrm{m}$ appare a $\dfrac{2{,}0}{1{,}33}\,\mathrm{m} \approx 1{,}5\,\mathrm{m}$.

::grafico{assi=0 uguale=1 poligoni="-3,0 3,0 3,-3.4 -3,-3.4" linee="-3,0 3,0" vettori="0,-3,1,0;1,0,1.84,1.81;0,-3,-1,0;-1,0,-1.84,1.81" segmenti="1,0,0,-2.16;-1,0,0,-2.16;0,-3.4,0,1.5" punti="0,-3,pieno,O;0,-2.16,vuoto,O′" etichette="-2.8,0.3,aria;-2.8,-0.5,acqua" xmin=-3.2 xmax=3.2 ymin=-3.6 ymax=2.1 titolo="I raggi uscenti dall'acqua sembrano provenire da $O'$, più vicino alla superficie dell'oggetto $O$: per raggi quasi verticali $h' = \dfrac{n_2}{n_1}\,h$"}

:::dimostrazione
Un raggio che parte dall'oggetto $O$ e forma l'angolo $\theta_1$ con la verticale raggiunge la superficie alla distanza orizzontale $x = h\tan\theta_1$ dalla verticale per $O$, e si rifrange con l'angolo $\theta_2$. L'occhio vede il raggio provenire dal suo prolungamento all'indietro, che incontra la verticale per $O$ alla profondità $h'$ tale che $x = h'\tan\theta_2$. Quindi
$$
h' = h\,\frac{\tan\theta_1}{\tan\theta_2} \approx h\,\frac{\sin\theta_1}{\sin\theta_2} = \frac{n_2}{n_1}\, h ,
$$
dove l'approssimazione vale per angoli piccoli e l'ultima uguaglianza segue dalla **legge di Snell**. Il valore approssimato non dipende da $\theta_1$, perciò tutti i raggi quasi verticali sembrano provenire dallo stesso punto, che è l'immagine.
:::
::::

## Specchi piani e sferici

:::definizione{#oggetto-e-immagine titolo="Oggetto e immagine"}
Si consideri un sistema ottico, cioè un insieme di specchi o di lenti, e un punto $P$ da cui partono raggi luminosi. Se i raggi provenienti da $P$, dopo il sistema, convergono in un punto $P'$, il punto $P'$ è un'**immagine reale** di $P$: la luce passa davvero per $P'$, e uno schermo posto lì raccoglie l'immagine. Se invece i raggi divergono come se provenissero da un punto $P'$, cioè se passano per $P'$ i loro prolungamenti, $P'$ è un'**immagine virtuale**: l'occhio la vede, ma uno schermo non la raccoglie. L'immagine proiettata su uno schermo da un proiettore è reale, quella vista in uno specchio piano è virtuale.
:::

:::teorema{#specchio-piano titolo="Immagine in uno specchio piano"}
L'immagine di un punto $P$ in uno specchio piano è il punto $P'$ simmetrico di $P$ rispetto al piano dello specchio; l'immagine è virtuale, diritta e uguale all'oggetto. Il risultato segue dalla **legge della riflessione**: il raggio riflesso è simmetrico del raggio incidente rispetto alla normale, quindi il suo prolungamento dietro lo specchio passa per il simmetrico di $P$, qualunque sia il punto di incidenza. Una persona a $1{,}5\,\mathrm{m}$ da uno specchio vede la propria immagine a $3{,}0\,\mathrm{m}$ da sé.
:::

:::definizione{#specchio-sferico titolo="Specchio sferico"}
Uno **specchio sferico** è una calotta sferica riflettente di raggio $R$. Il centro della sfera è il **centro di curvatura** $C$, il punto centrale della calotta è il **vertice** $V$, e la retta $CV$ è l'**asse ottico**. Lo specchio è *concavo* se riflette dalla parte di $C$, *convesso* se riflette dalla parte opposta.

Si lavora in **approssimazione parassiale**: i raggi sono vicini all'asse e poco inclinati su di esso, così che valgono le approssimazioni per piccoli angoli. Uno specchio sferico che riceve raggi lontani dall'asse non li fa convergere in un solo punto, e le immagini perdono nitidezza.
:::

::::teorema{#equazione-degli-specchi titolo="Equazione degli specchi sferici"}
Si consideri uno specchio sferico concavo di raggio $R$, in approssimazione parassiale, e un oggetto puntiforme sull'asse a distanza $p$ dal vertice. Allora l'immagine si trova sull'asse a distanza $q$ dal vertice, con
$$
\frac{1}{p} + \frac{1}{q} = \frac{2}{R} = \frac{1}{f} , \qquad f = \frac{R}{2} .
$$
Per $p \to \infty$, cioè per raggi paralleli all'asse, si ottiene $q = f$: i raggi paralleli convergono nel **fuoco** $F$, a metà tra il vertice e il centro di curvatura, e $f$ si chiama **distanza focale**. Con la convenzione dei segni l'equazione vale anche per lo specchio convesso, con $R$ e $f$ negativi. Per uno specchio concavo con $R = 40\,\mathrm{cm}$ e un oggetto a $60\,\mathrm{cm}$ si ha $\dfrac{1}{q} = \dfrac{1}{20} - \dfrac{1}{60} = \dfrac{1}{30}$, quindi l'immagine è a $q = 30\,\mathrm{cm}$ dal vertice.

:::dimostrazione
Si tratta il caso in cui l'oggetto $O$ è oltre il centro di curvatura; gli altri casi si trattano allo stesso modo. Un raggio parte da $O$, incide sullo specchio nel punto $A$, a distanza $h$ dall'asse, e dopo la riflessione incontra l'asse nel punto $I$. Siano $\alpha$, $\beta$ e $\gamma$ gli angoli che le rette $OA$, $CA$ e $IA$ formano con l'asse. La retta $CA$ è un raggio della sfera, quindi è la normale allo specchio in $A$, e l'angolo di incidenza $\theta$ è l'angolo tra $OA$ e $CA$.

Nel triangolo $OAC$ l'angolo esterno in $C$ è uguale alla somma degli angoli interni non adiacenti, quindi $\beta = \alpha + \theta$. Per la **legge della riflessione** anche l'angolo tra $CA$ e $AI$ vale $\theta$, e nel triangolo $CAI$ l'angolo esterno in $I$ dà $\gamma = \beta + \theta$. Eliminando $\theta$ si ottiene
$$
\alpha + \gamma = 2\beta .
$$
In approssimazione parassiale gli angoli sono piccoli e la distanza di $A$ dal piano tangente in $V$ è trascurabile, perciò $\alpha \approx \dfrac{h}{p}$, $\beta \approx \dfrac{h}{R}$ e $\gamma \approx \dfrac{h}{q}$. Sostituendo e dividendo per $h$ si ottiene $\dfrac{1}{p} + \dfrac{1}{q} = \dfrac{2}{R}$. Il risultato non dipende da $h$, quindi tutti i raggi parassiali uscenti da $O$ passano per $I$, che è l'immagine di $O$.
:::
::::

:::definizione{#convenzione-dei-segni titolo="Convenzione dei segni e ingrandimento"}
Per specchi e lenti si usa la convenzione seguente.

- La distanza $p$ dell'oggetto è positiva per un oggetto reale, posto dalla parte da cui arriva la luce.
- La distanza $q$ dell'immagine è positiva per un'immagine reale, cioè davanti allo specchio o dietro la lente, e negativa per un'immagine virtuale.
- La distanza focale $f$ è positiva per lo specchio concavo e per la lente convergente, negativa per lo specchio convesso e per la lente divergente.
- Le altezze $y$ dell'oggetto e $y'$ dell'immagine sono positive sopra l'asse.

L'**ingrandimento lineare** è
$$
m = \frac{y'}{y} = -\frac{q}{p} .
$$
Se $m < 0$ l'immagine è capovolta, se $m > 0$ è diritta; se $|m| > 1$ è ingrandita, se $|m| < 1$ è rimpicciolita. Per lo specchio la formula segue dal raggio che incide nel vertice: la normale in $V$ è l'asse, quindi il raggio riflesso è simmetrico rispetto all'asse, e i triangoli formati dall'oggetto e dall'immagine con il vertice sono simili. Nell'esempio dello specchio con $R = 40\,\mathrm{cm}$ si ha $m = -\dfrac{30}{60} = -0{,}5$: l'immagine è reale, capovolta e alta la metà dell'oggetto.
:::

:::osservazione{#costruzione-specchi titolo="Costruzione grafica per gli specchi"}
L'immagine della punta di un oggetto si trova come intersezione di due dei raggi seguenti, detti raggi principali.

- Il raggio parallelo all'asse si riflette passando per il fuoco.
- Il raggio che passa per il fuoco si riflette parallelo all'asse.
- Il raggio che passa per il centro di curvatura incide perpendicolarmente e torna su sé stesso.
- Il raggio diretto al vertice si riflette simmetrico rispetto all'asse.

Per lo specchio concavo, con l'oggetto oltre $C$ l'immagine è reale, capovolta e rimpicciolita, tra $F$ e $C$; con l'oggetto tra $F$ e $C$ è reale, capovolta e ingrandita, oltre $C$; con l'oggetto tra $F$ e lo specchio è virtuale, diritta e ingrandita. Lo specchio convesso dà sempre un'immagine virtuale, diritta e rimpicciolita.

::grafico{assi=0 uguale=1 curve="-6+6*cos(t),6*sin(t),-0.3,0.3" linee="-10,0 0.5,0;-9,1.5 0,1.5 -4.5,-0.75;-9,1.5 -3,0 0,-0.75 -4.5,-0.75;-9,1.5 0,0 -4.5,-0.75" vettori="-9,0,-9,1.5;-4.5,0,-4.5,-0.75" punti="-6,0,pieno,C;-3,0,pieno,F;0,0,pieno,V" etichette="-9.7,1.8,oggetto;-5.3,-1.25,immagine" xmin=-10.2 xmax=1 ymin=-2.2 ymax=2.3 titolo="Specchio concavo con l'oggetto a distanza $p = 3f$: i raggi principali si incontrano a $q = \dfrac{3}{2}\,f$, dove si forma un'immagine reale, capovolta e rimpicciolita con $m = -\dfrac{1}{2}$"}

:::

:::esempio{titolo="Specchio convesso"}
Uno specchio convesso ha $R = -60\,\mathrm{cm}$, quindi $f = -30\,\mathrm{cm}$, e un oggetto si trova a $p = 40\,\mathrm{cm}$. L'equazione degli specchi dà
$$
\frac{1}{q} = -\frac{1}{30\,\mathrm{cm}} - \frac{1}{40\,\mathrm{cm}} = -\frac{7}{120\,\mathrm{cm}}
\quad\Longrightarrow\quad
q \approx -17\,\mathrm{cm} ,
$$
e $m = -\dfrac{q}{p} \approx 0{,}43$. L'immagine è virtuale, dietro lo specchio, diritta e rimpicciolita. Uno specchio convesso mostra perciò in piccolo una zona ampia, e per questo si usa negli specchietti retrovisori e agli incroci.
:::

## Lenti sottili

:::definizione{#lente-sottile titolo="Lente sottile"}
Una **lente** è un corpo trasparente delimitato da due superfici sferiche, o da una superficie sferica e una piana. La lente è **sottile** se il suo spessore è trascurabile rispetto ai raggi di curvatura e alle distanze di oggetto e immagine; le distanze si misurano allora dal centro $O$ della lente.

Una lente in aria più spessa al centro che ai bordi è **convergente**: fa convergere i raggi paralleli all'asse in un punto $F'$, il secondo fuoco. Una lente più sottile al centro è **divergente**: fa divergere i raggi paralleli come se provenissero da un punto $F$ dalla parte da cui arriva la luce. I due fuochi sono simmetrici rispetto alla lente, a distanza $|f|$ dal centro, dove la **distanza focale** $f$ è positiva per le lenti convergenti e negativa per le divergenti. Il **potere diottrico** è
$$
P = \frac{1}{f} ,
$$
e si misura in **diottrie**, $1\,\mathrm{D} = 1\,\mathrm{m^{-1}}$; una lente con $f = 25\,\mathrm{cm}$ ha $P = 4{,}0\,\mathrm{D}$, e le lenti per la correzione della miopia hanno potere negativo.
:::

:::teorema{#formula-del-costruttore titolo="Formula del costruttore di lenti"}
Si consideri una lente sottile di indice $n$ immersa in aria, con raggi di curvatura $R_1$, della faccia che la luce incontra per prima, e $R_2$; il raggio è positivo se il centro di curvatura si trova dalla parte da cui la luce esce, negativo altrimenti. Allora
$$
\frac{1}{f} = (n - 1)\left( \frac{1}{R_1} - \frac{1}{R_2} \right) .
$$
La formula si ricava applicando la legge di Snell, in approssimazione parassiale, alla rifrazione su ciascuna delle due superfici sferiche; la dimostrazione si omette. Serve a calcolare la distanza focale dalla forma della lente: una lente biconvessa con $R_1 = 20\,\mathrm{cm}$, $R_2 = -20\,\mathrm{cm}$ e $n = 1{,}50$ ha $\dfrac{1}{f} = 0{,}50 \cdot \dfrac{2}{20\,\mathrm{cm}}$, cioè $f = 20\,\mathrm{cm}$ e $P = 5{,}0\,\mathrm{D}$. Se la lente è immersa in un mezzo di indice $n_m$, al posto di $n - 1$ compare $\dfrac{n}{n_m} - 1$, quindi in acqua una lente di vetro ha distanza focale maggiore che in aria.
:::

:::osservazione{#costruzione-lenti titolo="Raggi principali di una lente"}
Per costruire l'immagine della punta di un oggetto bastano due dei raggi seguenti.

- Il raggio parallelo all'asse esce passando per il secondo fuoco $F'$ se la lente è convergente; se è divergente, esce in direzione tale che il suo prolungamento all'indietro passa per il fuoco $F$.
- Il raggio che passa per il centro $O$ prosegue senza deviare, perché vicino al centro le due facce sono quasi parallele e la lente si comporta come una lamina a facce parallele di spessore trascurabile.
- Il raggio diretto verso il fuoco $F$ della lente convergente, o verso il fuoco $F'$ della divergente, esce parallelo all'asse.

::grafico{assi=0 uguale=1 poligoni="0.20,0.00 0.19,0.65 0.17,1.25 0.14,1.77 0.10,2.17 0.05,2.41 0.00,2.50 -0.05,2.41 -0.10,2.17 -0.14,1.77 -0.17,1.25 -0.19,0.65 -0.20,0.00 -0.19,-0.65 -0.17,-1.25 -0.14,-1.77 -0.10,-2.17 -0.05,-2.41 0.00,-2.50 0.05,-2.41 0.10,-2.17 0.14,-1.77 0.17,-1.25 0.19,-0.65" linee="-4,0 7,0;-3,1 0,1 6,-2;-3,1 6,-2;-3,1 0,-2 6,-2" vettori="-3,0,-3,1;6,0,6,-2" punti="-2,0,pieno,F;2,0,pieno,F′;0,0,pieno,O" xmin=-4.2 xmax=7.2 ymin=-2.8 ymax=2.8 titolo="Lente convergente con $f = 10\,\mathrm{cm}$ e oggetto a $p = 15\,\mathrm{cm}$: i tre raggi principali si incontrano a $q = 30\,\mathrm{cm}$, dove l'immagine è reale e capovolta, con $m = -2$"}

:::

::::teorema{#equazione-delle-lenti titolo="Equazione delle lenti sottili"}
Si consideri una lente sottile di distanza focale $f$, in approssimazione parassiale, e un oggetto a distanza $p$ dalla lente. Allora l'immagine si trova a distanza $q$ dalla lente, con
$$
\frac{1}{p} + \frac{1}{q} = \frac{1}{f} , \qquad m = -\frac{q}{p} ,
$$
nella convenzione dei segni degli specchi e delle lenti. L'equazione vale per le lenti convergenti e per le divergenti, e dà posizione, natura e dimensione dell'immagine. Con $f = 10\,\mathrm{cm}$ e $p = 15\,\mathrm{cm}$ si ottiene $q = 30\,\mathrm{cm}$ e $m = -2$; con $p = 5{,}0\,\mathrm{cm}$, cioè con l'oggetto tra il fuoco e la lente, si ottiene $\dfrac{1}{q} = \dfrac{1}{10} - \dfrac{1}{5} = -\dfrac{1}{10}$, quindi $q = -10\,\mathrm{cm}$ e $m = 2$. Nel secondo caso l'immagine è virtuale, diritta e ingrandita: la lente funziona da lente d'ingrandimento.

:::dimostrazione
Si tratta il caso della lente convergente con l'immagine reale; gli altri casi si trattano allo stesso modo con i segni della convenzione. Sia $B$ il piede dell'oggetto sull'asse e $A$ la sua punta, all'altezza $y$; siano $B'$ e $A'$ il piede e la punta dell'immagine, all'altezza $y' < 0$.

Il raggio che passa per il centro $O$ non devia, quindi $A$, $O$ e $A'$ sono allineati, e i triangoli rettangoli $ABO$ e $A'B'O$ sono simili perché hanno gli angoli in $O$ opposti al vertice. Perciò
$$
\frac{-y'}{y} = \frac{q}{p} .
$$
Il raggio che parte da $A$ parallelo all'asse incontra la lente nel punto $H$ all'altezza $y$ e prosegue per $F'$ e per $A'$. I triangoli rettangoli $HOF'$ e $A'B'F'$ sono simili, con i cateti $OF' = f$ e $B'F' = q - f$, quindi
$$
\frac{-y'}{y} = \frac{q - f}{f} .
$$
Uguagliando i secondi membri si ottiene $qf = pq - pf$, e dividendo per $pqf$ si ottiene $\dfrac{1}{f} = \dfrac{1}{p} + \dfrac{1}{q}$. La prima proporzione dà inoltre $m = \dfrac{y'}{y} = -\dfrac{q}{p}$.
:::
::::

:::esempio{titolo="Lente divergente"}
Una lente divergente ha $f = -30\,\mathrm{cm}$ e un oggetto si trova a $p = 60\,\mathrm{cm}$. L'equazione delle lenti dà
$$
\frac{1}{q} = -\frac{1}{30\,\mathrm{cm}} - \frac{1}{60\,\mathrm{cm}} = -\frac{1}{20\,\mathrm{cm}}
\quad\Longrightarrow\quad
q = -20\,\mathrm{cm} ,
$$
e $m = \dfrac{20}{60} = \dfrac{1}{3}$. L'immagine è virtuale, dalla stessa parte dell'oggetto, diritta e rimpicciolita; una lente divergente dà questo tipo di immagine per ogni oggetto reale.

::grafico{assi=0 uguale=1 poligoni="0.37,2.40 0.24,1.80 0.15,1.20 0.09,0.60 0.07,0.00 0.09,-0.60 0.14,-1.20 0.24,-1.80 0.37,-2.40 -0.37,-2.40 -0.24,-1.80 -0.14,-1.20 -0.09,-0.60 -0.07,0.00 -0.09,0.60 -0.15,1.20 -0.24,1.80 -0.37,2.40" linee="-7,0 3.5,0;-6,1.5 0,1.5 3,3;-6,1.5 3,-0.75" segmenti="0,1.5,-3,0" vettori="-6,0,-6,1.5;-2,0,-2,0.5" punti="-3,0,pieno,F;3,0,pieno,F′" xmin=-7.2 xmax=3.6 ymin=-1.2 ymax=3.2 titolo="Lente divergente con $f = -30\,\mathrm{cm}$ e oggetto a $p = 60\,\mathrm{cm}$: il raggio parallelo esce come se provenisse da $F$, e l'immagine virtuale si forma a $20\,\mathrm{cm}$ dalla lente, con $m = \dfrac{1}{3}$"}

:::

:::osservazione{#sistemi-di-due-lenti titolo="Sistemi di due lenti"}
In un sistema di due lenti sottili sullo stesso asse, a distanza $D$ tra loro, l'immagine data dalla prima lente fa da oggetto per la seconda. Se la prima immagine è a distanza $q_1$ dalla prima lente, la distanza dell'oggetto per la seconda è $p_2 = D - q_1$; se $p_2 < 0$, la prima immagine cadrebbe oltre la seconda lente, e per questa è un **oggetto virtuale**. L'ingrandimento complessivo è il prodotto $m = m_1 m_2$, perché la seconda lente ingrandisce l'immagine già ingrandita dalla prima. Microscopio e cannocchiale sono sistemi di questo tipo.

Per due lenti a contatto, $D = 0$ e $p_2 = -q_1$. Sommando l'equazione della prima lente, $\dfrac{1}{p} + \dfrac{1}{q_1} = \dfrac{1}{f_1}$, e quella della seconda, $-\dfrac{1}{q_1} + \dfrac{1}{q} = \dfrac{1}{f_2}$, si ottiene $\dfrac{1}{p} + \dfrac{1}{q} = \dfrac{1}{f_1} + \dfrac{1}{f_2}$; quindi i poteri diottrici di lenti a contatto si **sommano**.
:::

## Interferenza ed esperimento di Young

:::teorema{#principio-di-huygens titolo="Principio di Huygens-Fresnel"}
È un postulato dell'ottica ondulatoria. Ogni punto di un fronte d'onda si comporta come una sorgente di onde sferiche secondarie, con la frequenza dell'onda incidente, e l'onda negli istanti successivi è la sovrapposizione di queste onde secondarie. Il principio spiega perché la luce che attraversa un'apertura stretta si allarga oltre l'apertura, che si comporta come una nuova sorgente; nell'esperimento di Young le due fenditure, illuminate dallo stesso fronte d'onda, diventano due sorgenti che oscillano in fase.
:::

:::definizione{#interferenza titolo="Sovrapposizione e interferenza"}
In un punto raggiunto da due onde luminose il campo elettrico è la somma dei due campi, perché le equazioni di Maxwell sono lineari. Due sorgenti si dicono **coerenti** se emettono con la stessa frequenza e con una differenza di fase costante nel tempo; due lampade distinte non sono coerenti, perché la fase di ciascuna cambia in modo casuale in tempi molto brevi.

Si considerino due sorgenti coerenti in fase, che raggiungono il punto $P$ dopo i cammini $r_1$ e $r_2$. La **differenza di cammino** è $\delta = r_2 - r_1$, e corrisponde alla differenza di fase $\varphi = \dfrac{2\pi\,\delta}{\lambda}$. In $P$ si ha

- **interferenza costruttiva** se $\delta = m\lambda$, con $m$ intero, perché le onde arrivano in fase e i campi si sommano;
- **interferenza distruttiva** se $\delta = \left( m + \dfrac{1}{2} \right) \lambda$, perché le onde arrivano in opposizione di fase e, con ampiezze uguali, i campi si annullano.
:::

::::teorema{#esperimento-di-young titolo="Interferenza da due fenditure"}
Si considerino due fenditure strette e parallele, a distanza $d$, illuminate perpendicolarmente da un'onda piana monocromatica di lunghezza d'onda $\lambda$, e uno schermo parallelo alle fenditure a distanza $L \gg d$. Nella direzione che forma l'angolo $\theta$ con la perpendicolare alle fenditure si osservano

- i massimi di intensità (frange chiare) per $d \sin\theta = m\lambda$, con $m = 0, \pm 1, \pm 2, \dots$;
- i minimi (frange scure) per $d \sin\theta = \left( m + \dfrac{1}{2} \right) \lambda$.

Per angoli piccoli le frange chiare sullo schermo sono alle distanze $y_m = \dfrac{m \lambda L}{d}$ dal centro, equidistanziate con l'**interfrangia**
$$
\Delta y = \frac{\lambda L}{d} .
$$
L'esperimento permette di misurare la lunghezza d'onda della luce da grandezze macroscopiche. Con $\lambda = 600\,\mathrm{nm}$, $d = 0{,}20\,\mathrm{mm}$ e $L = 1{,}5\,\mathrm{m}$ si ha $\Delta y = \dfrac{6{,}00 \cdot 10^{-7} \cdot 1{,}5}{2{,}0 \cdot 10^{-4}}\,\mathrm{m} = 4{,}5\,\mathrm{mm}$.

::grafico{assi=0 uguale=1 linee="0,3.6 0,0.75;0,0.45 0,-0.45;0,-0.75 0,-3.6;8,-3.6 8,3.6;0,0.6 8,3;0,-0.6 8,3" segmenti="0,0,8,0;0,0,8,3;0,0.6,0.45,-0.4" punti="0,0.6,pieno;0,-0.6,pieno;8,3,pieno,P" etichette="-0.75,0.75,S₁;-0.75,-0.95,S₂;1.3,0.12,θ;0.5,-0.8,δ;8.15,0.1,schermo;3.8,-0.45,L" xmin=-0.8 xmax=9.6 ymin=-3.8 ymax=4 titolo="Le onde che partono da $S_1$ e $S_2$ raggiungono $P$ con la differenza di cammino $\delta = d \sin\theta$; la figura non è in scala, perché nell'esperimento $d$ è molto minore di $L$"}

:::dimostrazione
Le fenditure sono illuminate dallo stesso fronte d'onda, quindi per il **principio di Huygens-Fresnel** sono due sorgenti coerenti in fase. Sia $P$ un punto dello schermo nella direzione $\theta$. Poiché $L \gg d$, i raggi $S_1P$ e $S_2P$ sono quasi paralleli e formano entrambi l'angolo $\theta$ con la perpendicolare alle fenditure. Sia $H$ il piede della perpendicolare condotta da $S_1$ alla retta $S_2P$; allora $HP \approx S_1P$, e la differenza di cammino è il segmento $S_2H$, cateto del triangolo rettangolo $S_1HS_2$ opposto all'angolo $\theta$:
$$
\delta = S_2 H = d \sin\theta .
$$
Le condizioni di interferenza costruttiva e distruttiva danno i massimi e i minimi. Il punto $P$ dista dal centro dello schermo $y = L\tan\theta$, e per angoli piccoli $\tan\theta \approx \sin\theta$, quindi $y_m = L\,\dfrac{m\lambda}{d}$; la differenza tra due posizioni consecutive è $\dfrac{\lambda L}{d}$.
:::
::::

:::richiamo{titolo="Formule di prostaferesi"}
Per ogni coppia di angoli $\alpha$ e $\beta$ vale $\sin\alpha + \sin\beta = 2 \sin\dfrac{\alpha + \beta}{2} \cos\dfrac{\alpha - \beta}{2}$. Si rimanda all'argomento sulle equazioni e disequazioni goniometriche del Precorso.
:::

::::teorema{#intensita-young titolo="Intensità della figura di interferenza"}
Nelle ipotesi dell'esperimento di Young, se le onde provenienti dalle due fenditure hanno sullo schermo la stessa ampiezza e ciascuna da sola produce l'intensità $I_1$, l'intensità nella direzione $\theta$ è
$$
I(\theta) = I_{\max} \cos^2\left( \frac{\pi\, d \sin\theta}{\lambda} \right) , \qquad I_{\max} = 4 I_1 ,
$$
e per angoli piccoli, sullo schermo, $I(y) = I_{\max} \cos^2\left( \dfrac{\pi\, d\, y}{\lambda L} \right)$. Nei massimi l'intensità è quattro volte quella di una fenditura sola, nei minimi è nulla; la media su una frangia è $2I_1$, perciò l'interferenza ridistribuisce l'energia delle due onde senza crearne. La formula serve a calcolare l'intensità nei punti intermedi tra le frange.

::grafico{f="cos(pi*x)^2" nomi="y,I" legenda="I = I_{\max}\cos^2\left(\dfrac{\pi d y}{\lambda L}\right)" xmin=-3.3 xmax=3.3 ymin=-0.3 ymax=1.4 titolo="Intensità relativa $\dfrac{I}{I_{\max}}$ in funzione della posizione $y$ sullo schermo, misurata in unità di interfrangia $\dfrac{\lambda L}{d}$: le frange chiare sono equidistanziate e ugualmente intense"}

:::dimostrazione
Nel punto $P$ i campi delle due onde, con la stessa ampiezza $E_0$, sono $E_1 = E_0 \sin(\omega t)$ ed $E_2 = E_0 \sin(\omega t + \varphi)$, dove $\varphi = \dfrac{2\pi\, d \sin\theta}{\lambda}$ è la differenza di fase dovuta alla differenza di cammino. Per le **formule di prostaferesi**
$$
E_1 + E_2 = 2 E_0 \cos\frac{\varphi}{2}\, \sin\left( \omega t + \frac{\varphi}{2} \right) ,
$$
quindi il campo risultante oscilla con ampiezza $2E_0 \left| \cos\dfrac{\varphi}{2} \right|$. L'intensità è proporzionale al quadrato dell'ampiezza, e $I_1$ è proporzionale a $E_0^2$, perciò $I = 4 I_1 \cos^2\dfrac{\varphi}{2}$, che è la tesi con $\dfrac{\varphi}{2} = \dfrac{\pi\, d \sin\theta}{\lambda}$.
:::
::::

## Diffrazione da una fenditura

::::teorema{#minimi-di-diffrazione titolo="Minimi di diffrazione da una fenditura"}
Si consideri una fenditura di larghezza $a$, illuminata perpendicolarmente da un'onda piana monocromatica di lunghezza d'onda $\lambda$, e uno schermo a distanza $L \gg a$. L'intensità è nulla nelle direzioni
$$
a \sin\theta = m\lambda , \qquad m = \pm 1, \pm 2, \dots
$$
Il **massimo centrale** è compreso tra i due minimi con $m = \pm 1$, e per angoli piccoli ha sullo schermo la larghezza $w = \dfrac{2\lambda L}{a}$. Più la fenditura è stretta, più la figura di diffrazione è larga. Con $\lambda = 500\,\mathrm{nm}$, $a = 0{,}10\,\mathrm{mm}$ e $L = 2{,}0\,\mathrm{m}$ il massimo centrale è largo $w = \dfrac{2 \cdot 5{,}00 \cdot 10^{-7} \cdot 2{,}0}{1{,}0 \cdot 10^{-4}}\,\mathrm{m} = 2{,}0\,\mathrm{cm}$.

:::dimostrazione
Per il **principio di Huygens-Fresnel** ogni punto della fenditura è una sorgente di onde secondarie in fase. Si divide la fenditura in due metà di larghezza $\dfrac{a}{2}$ e si associa a ogni punto della metà superiore il punto della metà inferiore che si trova $\dfrac{a}{2}$ più in basso. Nella direzione $\theta$ le onde di due punti associati hanno la differenza di cammino $\dfrac{a}{2}\sin\theta$, per lo stesso ragionamento dell'esperimento di Young. Se
$$
\frac{a}{2}\sin\theta = \frac{\lambda}{2} ,
$$
le onde di ogni coppia arrivano in opposizione di fase e si annullano, quindi l'intensità totale è nulla: questa è la condizione $a \sin\theta = \lambda$. Dividendo la fenditura in $2|m|$ strisce di larghezza $\dfrac{a}{2|m|}$ e associando a due a due le strisce adiacenti, lo stesso ragionamento dà un minimo quando $\dfrac{a}{2|m|}\sin\theta = \dfrac{\lambda}{2}$, cioè $a \sin\theta = |m|\lambda$, e per simmetria anche nella direzione $-\theta$. Per $\theta = 0$ tutte le onde secondarie arrivano in fase, e lì si trova il massimo centrale.
:::
::::

:::osservazione{#intensita-diffrazione titolo="Intensità della figura di diffrazione"}
Sommando con un integrale i contributi di tutti i punti della fenditura si ottiene l'intensità
$$
I(\theta) = I_0 \left( \frac{\sin\beta}{\beta} \right)^{2} , \qquad \beta = \frac{\pi\, a \sin\theta}{\lambda} ;
$$
il calcolo si omette. Gli zeri di $\sin\beta$ con $\beta \neq 0$ sono i minimi già trovati. I massimi secondari sono molto più deboli del centrale, il primo è circa il $4{,}7\,\%$ di $I_0$, quindi quasi tutta la luce cade nel massimo centrale, largo il doppio dei massimi secondari.

::grafico{f="(sin(pi*x+1e-9)/(pi*x+1e-9))^2" nomi="y,I" legenda="I = I_0\left(\dfrac{\sin\beta}{\beta}\right)^2" xmin=-3.3 xmax=3.3 ymin=-0.3 ymax=1.4 titolo="Intensità relativa $\dfrac{I}{I_0}$ della diffrazione da una fenditura in funzione della posizione $y$ sullo schermo, misurata in unità di $\dfrac{\lambda L}{a}$: i minimi cadono nei multipli interi non nulli"}

:::

:::osservazione{#fenditure-di-larghezza-finita titolo="Due fenditure di larghezza finita"}
Nell'esperimento di Young reale ogni fenditura ha una larghezza $a$, e la figura di interferenza è modulata dalla figura di diffrazione di ciascuna fenditura: l'intensità è il prodotto di $\cos^2\left( \dfrac{\pi\, d \sin\theta}{\lambda} \right)$ e di $\left( \dfrac{\sin\beta}{\beta} \right)^{2}$. Se una direzione soddisfa insieme le due condizioni
$$
\begin{cases}
d \sin\theta = m\lambda \\[4pt]
a \sin\theta = m'\lambda , \quad m' \neq 0
\end{cases}
$$
il massimo di interferenza di ordine $m$ cade su un minimo di diffrazione e manca. Con $d = 3a$, per esempio, mancano gli ordini $m = \pm 3, \pm 6, \dots$
:::

:::osservazione{#criterio-di-rayleigh titolo="Potere risolutivo e criterio di Rayleigh"}
Anche un'apertura circolare di diametro $D$ produce una figura di diffrazione, con il primo minimo nella direzione $\sin\theta = 1{,}22\,\dfrac{\lambda}{D}$; il coefficiente $1{,}22$ viene dal calcolo per l'apertura circolare, che si omette. Secondo il **criterio di Rayleigh**, le immagini di due sorgenti puntiformi sono distinguibili se la loro separazione angolare è almeno $\theta_R = 1{,}22\,\dfrac{\lambda}{D}$, cioè se il massimo centrale di una cade sul primo minimo dell'altra o oltre. Per la pupilla dell'occhio, con $D = 3{,}0\,\mathrm{mm}$ e $\lambda = 550\,\mathrm{nm}$, si ha $\theta_R \approx 2{,}2 \cdot 10^{-4}\,\mathrm{rad}$; i telescopi hanno grandi diametri anche per ridurre questo angolo.
:::

## Reticolo di diffrazione

:::definizione{#reticolo-di-diffrazione titolo="Reticolo di diffrazione"}
Un **reticolo di diffrazione** è un insieme di $N$ fenditure parallele uguali ed equidistanti, in numero molto grande. La distanza $d$ tra i centri di due fenditure adiacenti è il **passo** del reticolo, e di solito si ricava dal numero di righe per unità di lunghezza: un reticolo con $600$ righe al millimetro ha $d = \dfrac{1}{600}\,\mathrm{mm} \approx 1{,}67\,\mathrm{\mu m}$.
:::

::::teorema{#massimi-del-reticolo titolo="Massimi principali del reticolo"}
Si consideri un reticolo di passo $d$, illuminato perpendicolarmente da un'onda piana monocromatica di lunghezza d'onda $\lambda$, e uno schermo lontano. I **massimi principali** si osservano nelle direzioni
$$
d \sin\theta = m\lambda , \qquad m = 0, \pm 1, \pm 2, \dots ,
$$
e l'intero $m$ è l'**ordine** del massimo. Poiché $|\sin\theta| \leq 1$, sono visibili solo gli ordini con $|m| \leq \dfrac{d}{\lambda}$. Con $600$ righe al millimetro e $\lambda = 500\,\mathrm{nm}$ si ha $\sin\theta = 0{,}30\,m$: il primo ordine è a $17{,}5^\circ$, il secondo a $36{,}9^\circ$, il terzo a $64{,}2^\circ$, e il quarto non esiste perché richiederebbe $\sin\theta = 1{,}2$.

:::dimostrazione
Per lo stesso ragionamento dell'esperimento di Young, le onde provenienti da due fenditure adiacenti hanno nella direzione $\theta$ la differenza di cammino $d \sin\theta$. Se $d \sin\theta = m\lambda$, ogni coppia di fenditure adiacenti invia onde in fase, quindi tutte le $N$ onde arrivano in fase; i campi si sommano, l'ampiezza è $N$ volte quella di una fenditura e l'intensità $N^2$ volte.
:::
::::

:::osservazione{#larghezza-dei-massimi titolo="Larghezza dei massimi e separazione dei colori"}
Le direzioni dei massimi principali sono le stesse dell'esperimento di Young con la stessa distanza $d$, ma con $N$ fenditure tra due massimi principali consecutivi cadono $N - 1$ minimi, e i massimi diventano tanto più stretti quanto più $N$ è grande. Per questo luci di lunghezze d'onda vicine danno righe nettamente separate, e il reticolo si usa negli spettroscopi per misurare le lunghezze d'onda emesse da una sorgente. In ogni ordine $m \geq 1$ la luce violetta è deviata *meno* della rossa, nell'ordine inverso rispetto al prisma.

::grafico{f="sin(6*pi*x+1e-7)*sin(6*pi*x+1e-7)/(36*sin(pi*x+1e-7)*sin(pi*x+1e-7));cos(pi*x)^2" nomi="u,I" legenda="N = 6;N = 2" xmin=-2.4 xmax=2.4 ymin=-0.3 ymax=1.4 titolo="Intensità relativa in funzione di $u = \dfrac{d \sin\theta}{\lambda}$ per $N = 6$ fenditure e per $N = 2$: i massimi principali hanno la stessa posizione, e con più fenditure sono molto più stretti"}

:::

## Polarizzazione

:::definizione{#luce-polarizzata titolo="Luce polarizzata"}
Le onde elettromagnetiche sono trasversali: il campo elettrico è perpendicolare alla direzione di propagazione. La luce è **polarizzata linearmente** se il campo elettrico oscilla sempre nella stessa direzione, detta direzione di polarizzazione. La luce del Sole e delle lampade comuni è *non polarizzata*: la direzione del campo elettrico cambia in modo casuale, in tempi molto brevi, tra tutte quelle perpendicolari alla propagazione. Un **polarizzatore**, per esempio un filtro polaroid, trasmette solo la componente del campo elettrico parallela a una direzione, il suo **asse di trasmissione**, e la luce che lo attraversa esce polarizzata lungo quell'asse.
:::

:::teorema{#legge-di-malus titolo="Legge di Malus"}
È una legge sperimentale. Se luce polarizzata linearmente di intensità $I_0$ incide su un polarizzatore il cui asse di trasmissione forma l'angolo $\theta$ con la direzione di polarizzazione, l'intensità trasmessa è
$$
I = I_0 \cos^2\theta .
$$
La legge si interpreta con la trasversalità del campo: il polarizzatore trasmette la componente $E_0 \cos\theta$ del campo, e l'intensità è proporzionale al quadrato dell'ampiezza. Se la luce incidente è *non* polarizzata, la direzione del campo assume tutti gli angoli con uguale probabilità, e poiché la media di $\cos^2\theta$ su un giro vale $\dfrac{1}{2}$, l'intensità trasmessa è $\dfrac{I_0}{2}$. Due polarizzatori con gli assi perpendicolari, detti incrociati, non lasciano passare luce. Luce non polarizzata di $40\,\mathrm{W/m^2}$ esce dal primo polarizzatore con $20\,\mathrm{W/m^2}$, e da un secondo polarizzatore ruotato di $60^\circ$ con $20 \cdot \cos^2 60^\circ\,\mathrm{W/m^2} = 5{,}0\,\mathrm{W/m^2}$.
:::

:::teorema{#angolo-di-brewster titolo="Polarizzazione per riflessione e angolo di Brewster"}
Si osserva sperimentalmente che la luce non polarizzata riflessa da una superficie trasparente è parzialmente polarizzata, e che è polarizzata totalmente, perpendicolarmente al piano di incidenza, quando il raggio riflesso e il raggio rifratto sono perpendicolari. Questo avviene per l'**angolo di Brewster** $\theta_B$, che passando dal mezzo di indice $n_1$ al mezzo di indice $n_2$ soddisfa
$$
\tan\theta_B = \frac{n_2}{n_1} .
$$
Infatti la perpendicolarità dei due raggi equivale a $\theta_B + \theta_2 = 90^\circ$, quindi $\sin\theta_2 = \cos\theta_B$, e la legge di Snell $n_1 \sin\theta_B = n_2 \sin\theta_2$ diventa $n_1 \sin\theta_B = n_2 \cos\theta_B$. Per la riflessione dall'aria su un vetro con $n = 1{,}50$ si ha $\theta_B = \arctan 1{,}50 \approx 56{,}3^\circ$. La luce riflessa da superfici orizzontali, come l'acqua o una strada bagnata, è polarizzata in prevalenza orizzontalmente, e gli occhiali con lenti polarizzate ad asse verticale la attenuano.
:::
