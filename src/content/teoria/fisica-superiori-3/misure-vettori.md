---
titolo: "Misure, incertezze e vettori"
sommario: "Conversioni e densità, controllo dimensionale, intervalli di misura, componenti e prodotti tra vettori."
---

## Grandezze e unità

:::definizione{#unita titolo="Misurare una grandezza"}
Una misura confronta una proprietà riproducibile con un'unità. La scrittura $\ell=2{,}40\,\mathrm{m}$ indica $2{,}40$ volte il metro. La stessa lunghezza è $240\,\mathrm{cm}$. Il numero cambia, mentre il prodotto del numero per l'unità descrive la medesima lunghezza.

Nel Sistema Internazionale si usano metro, chilogrammo e secondo per lunghezza, massa e tempo. Quando una grandezza è composta, il fattore di conversione si applica alle singole unità. Un centimetro quadrato corrisponde a un quadrato di lato $10^{-2}\,\mathrm{m}$, quindi l'area vale $(10^{-2})^2\,\mathrm{m^2}$. Per il centimetro cubo si usa una terza potenza e si ottiene $10^{-6}\,\mathrm{m^3}$.

Una velocità in chilometri all'ora divide una lunghezza in chilometri per un tempo in ore. Si usa $1\,\mathrm{km}=1000\,\mathrm{m}$ al numeratore e $1\,\mathrm{h}=3600\,\mathrm{s}$ al denominatore. Il rapporto $\dfrac{1000}{3600}=\dfrac{5}{18}$ moltiplica il valore in $\mathrm{km/h}$. Per tornare da $\mathrm{m/s}$ a $\mathrm{km/h}$ si usa il reciproco: percorrere $20\,\mathrm{m}$ ogni secondo equivale a percorrere $72\,\mathrm{km}$ in un'ora allo stesso ritmo.
:::

:::esempio{#densita-grafico titolo="Densità e lettura di un grafico massa-volume"}
Per un materiale omogeneo, la massa $m$ cresce proporzionalmente al volume $V$. La densità $\rho=\dfrac m V$ è il coefficiente di proporzionalità. Da $m=0{,}540\,\mathrm{kg}$ e $V=200\,\mathrm{cm^3}$ si ricava $V=2{,}00\cdot10^{-4}\,\mathrm{m^3}$, poi $\rho=2700\,\mathrm{kg/m^3}$. Se la massa si esprime in grammi e il volume in centimetri cubi, lo stesso rapporto vale $2{,}70\,\mathrm{g/cm^3}$.

Un grafico con $V$ sull'asse orizzontale e $m$ su quello verticale mostra la massa di campioni di dimensioni diverse. La pendenza è $\rho$. Se la bilancia registra anche la massa di un recipiente, l'intercetta è la tara e il rapporto $m/V$ di un singolo punto include il recipiente. La pendenza fra due punti rimane quella del materiale, perché sottraendo le due masse si annulla la stessa tara.
:::

::grafico{f="2.7*x;2.7*x+100" xmin=0 xmax=220 ymin=0 ymax=720 nomi="V (cm³),m (g)" punti="0,100,pieno;200,540,pieno;200,640,pieno" legenda="\mathrm{campione};\mathrm{campione+recipiente}" titolo="La tara di 100 g alza la retta senza alterarne la pendenza."}

:::esempio{titolo="Densità di una miscela di due liquidi"}
Versiamo $80\,\mathrm{cm^3}$ di un liquido di densità $0{,}8\,\mathrm{g/cm^3}$ e $20\,\mathrm{cm^3}$ di un liquido di densità $1{,}2\,\mathrm{g/cm^3}$. Supponiamo che non si perda massa e che il volume finale sia la somma dei due volumi versati. Le masse sono $64\,\mathrm g$ e $24\,\mathrm g$. Da $m=88\,\mathrm g$ e $V=100\,\mathrm{cm^3}$ segue $\rho=0{,}88\,\mathrm{g/cm^3}$. Il primo liquido occupa quattro quinti del volume. Quindi la densità finale è più vicina alla sua densità che a quella del secondo. Se i due volumi fossero uguali, si otterrebbe la loro media aritmetica. Il valore intermedio da solo non distingue una miscela da un singolo liquido della stessa densità.
:::

## Potenze di dieci e controllo delle formule

:::osservazione{#dimensioni titolo="Notazione scientifica e dimensioni"}
La notazione scientifica esprime un numero non nullo come $a\cdot10^n$, con $1\leq |a|<10$. Quando si moltiplicano due fattori si moltiplicano i coefficienti e si sommano gli esponenti. Per esempio $(2{,}0\cdot10^{-3})(3{,}0\cdot10^5)=6{,}0\cdot10^2$. Nelle somme, invece, si riportano entrambi i termini alla stessa potenza prima di sommare i coefficienti.

Le dimensioni indicano da quali grandezze fondamentali dipende una quantità. Se $L$, $M$ e $T$ rappresentano lunghezza, massa e tempo, allora $[v]=LT^{-1}$ e $[a]=LT^{-2}$. Nel modello $x=x_0+v_0t+\dfrac12 at^2$, ciascun addendo ha dimensione $L$. La verifica si applica a tutti i termini, anche quando la formula contiene parametri sconosciuti. Se $x=kt^2$, allora $[k]=LT^{-2}$, cioè l'unità SI di $k$ è $\mathrm{m/s^2}$.

Nei grafici, dividere le unità dell'asse verticale per quelle dell'asse orizzontale dà l'unità della pendenza. Una curva $x$ in funzione di $t$ ha pendenza in $\mathrm{m/s}$. Un grafico velocità-tempo ha invece pendenza in $\mathrm{m/s^2}$. L'unità dell'area sotto una curva velocità-tempo è $\mathrm{m}$, perché moltiplica $\mathrm{m/s}$ per $\mathrm{s}$.
:::

:::attenzione{titolo="I limiti del controllo dimensionale"}
La dimensione esclude, per esempio, $x=x_0+v_0$ se $v_0$ è una velocità. L'espressione $x=x_0+at^2$ supera invece il controllo dimensionale. Con partenza da fermo e accelerazione costante, lo spostamento vero è $\dfrac12at^2$. Le unità sono compatibili in entrambi i casi, quindi il coefficiente numerico si determina dalla legge fisica.
:::

:::esempio{titolo="Area con segno e spostamento"}
In un moto rettilineo la velocità passa da $4\,\mathrm{m/s}$ a zero nei primi $2\,\mathrm s$ e poi raggiunge $-2\,\mathrm{m/s}$ a $3\,\mathrm s$. La pendenza costante è $-2\,\mathrm{m/s^2}$. I due triangoli danno $+4\,\mathrm m$ e $-1\,\mathrm m$ di spostamento. Si sommano con i segni, ottenendo $3\,\mathrm m$. Per ricavare la distanza percorsa si sommano i moduli e si ottiene $5\,\mathrm m$.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|0;4-2*x;2;3" segmenti="3,0,3,-2" punti="0,4,pieno;2,0,pieno;3,-2,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="Il tratto sotto l'asse contribuisce con −1 m allo spostamento."}
:::

## Misure ripetute e incertezza

:::definizione{#incertezze titolo="Valore misurato e intervallo"}
Una misura di lunghezza $\ell=(12{,}4\pm0{,}1)\,\mathrm{cm}$ rappresenta una stima centrale e un intervallo da $12{,}3$ a $12{,}5\,\mathrm{cm}$. L'incertezza assoluta $\Delta\ell$ si esprime nelle stesse unità della lunghezza. La sua scelta dipende dalla risoluzione dello strumento, dalla taratura e dalla dispersione delle misure. Risoluzione e incertezza distinguono rispettivamente la più piccola variazione leggibile e il margine con cui si dichiara il risultato.

Con misure $x_1,\ldots,x_n$ della stessa quantità si usa la media $\bar x=\dfrac{x_1+\cdots+x_n}{n}$. Se la consegna adotta la semidispersione, si calcola $\dfrac{x_{\max}-x_{\min}}2$. Il centro dell'intervallo degli estremi è invece $\dfrac{x_{\max}+x_{\min}}2$. Con $10{,}0$, $10{,}0$ e $10{,}6\,\mathrm{cm}$ la media vale $10{,}2\,\mathrm{cm}$ e il punto medio fra gli estremi è $10{,}3\,\mathrm{cm}$. Le due stime coincidono se la distribuzione delle misure è simmetrica.

Per coprire tutte le letture con un intervallo simmetrico attorno alla media, si usa la maggiore fra le due distanze dagli estremi. Il margine nell'esempio è $0{,}4\,\mathrm{cm}$, perché la lettura più lontana dalla media è $10{,}6\,\mathrm{cm}$. La semidispersione di $0{,}3\,\mathrm{cm}$ copre tutti i dati se la si centra sul punto medio degli estremi.

::grafico{punti="100,1,pieno;100,2,pieno;106,1,pieno;102,3,pieno;103,4,pieno" etichette="102.16,3.1,Media;103.16,4.1,Punto medio" xmin=99 xmax=107 ymin=0 ymax=5 nomi="ℓ (mm),riga" titolo="I due punti a 100 mm indicano due letture uguali. Le due stime distano 1 mm."}

L'incertezza relativa $\varepsilon=\dfrac{\Delta x}{|\bar x|}$ è adimensionale e ha significato per una stima centrale diversa da zero. Per una misura $(20{,}0\pm0{,}2)\,\mathrm{cm}$ vale $0{,}010$, ossia $1{,}0\%$. Per confrontare misure su scale diverse conviene calcolare questa frazione. L'incertezza si arrotonda tipicamente a una o due cifre significative. Il valore centrale si scrive con la stessa posizione dell'ultima cifra decimale dell'incertezza.
:::

:::esempio{#compatibilita titolo="Intervalli che hanno un punto in comune"}
Due misure $(24{,}0\pm0{,}3)\,\mathrm{cm}$ e $(24{,}5\pm0{,}2)\,\mathrm{cm}$ hanno in comune il valore $24{,}3\,\mathrm{cm}$. Nel modello a intervalli sono quindi compatibili, anche se hanno centri diversi. Il criterio equivale a confrontare la distanza $0{,}5\,\mathrm{cm}$ tra i centri con la somma $0{,}5\,\mathrm{cm}$ delle incertezze. L'accordo indica una regione possibile comune. Se la procedura introduce lo stesso scarto di taratura in tutte le misure, anche due intervalli sovrapposti possono essere traslati rispetto al valore reale.
:::

::grafico{linee="23.7,1 24.3,1;24.3,2 24.7,2" segmenti="24.3,0,24.3,2" punti="23.7,1,pieno;24.3,1,pieno;24.3,2,pieno;24.7,2,pieno" etichette="23.66,0.57,23,7;24.26,0.57,24,3;24.64,0.57,24,7" xmin=23.55 xmax=24.85 ymin=-0.25 ymax=2.8 nomi="ℓ (cm),misura" titolo="I segmenti condividono il solo valore 24,3 cm."}

:::esempio{titolo="Una lettura a vuoto rivela lo scarto"}
Una bilancia ferma e priva di carico indica $3\,\mathrm g$. Lo stesso strumento indica $83\,\mathrm g$ per un campione e $115\,\mathrm g$ per un secondo campione. Supponiamo che lo scarto sia additivo e costante in questo intervallo di carico. Per stimare le singole masse sottraiamo $3\,\mathrm g$ da ciascuna lettura, ottenendo $80\,\mathrm g$ e $112\,\mathrm g$. La differenza fra le masse vale $32\,\mathrm g$ anche usando direttamente le letture, poiché il termine comune di taratura scompare. Ripetere molte volte la pesata può affinare la stima della dispersione. Per stimare lo scarto comune occorre invece confrontare la lettura con una massa di riferimento, in questo caso zero.
:::

## Propagazione delle incertezze

:::teorema{#propagazione titolo="Stima massima al primo ordine"}
Quando si conoscono soltanto gli intervalli di due misure, si può calcolare un margine prudente senza ipotizzare che gli errori si compensino. Nella somma $z=x+y$, la massima variazione rispetto a $x_0+y_0$ si ottiene prendendo due errori dello stesso segno. Nella differenza $x-y$ il caso estremo usa invece errori opposti. In entrambi i casi il margine massimo è $\Delta x+\Delta y$. Se le misure vengono dalla stessa taratura e hanno errori correlati, conoscere la correlazione può ridurre il margine effettivo.

Per un prodotto $A=xy$ si scrive $x=x_0+\delta x$ e $y=y_0+\delta y$. Sviluppando si trova $A=x_0y_0+y_0\delta x+x_0\delta y+\delta x\delta y$. Dividendo la variazione per $|x_0y_0|$ e trascurando il termine di secondo ordine, il margine relativo stimato è
$$
\frac{\Delta A}{|A_0|}\simeq\frac{\Delta x}{|x_0|}+\frac{\Delta y}{|y_0|}.
$$
Per un quoziente $q=\dfrac{x}{y}$, con $x_0\ne0$ e $|y_0|\gg\Delta y$, i due contributi relativi si sommano nella stima massima al primo ordine. Per valori positivi, il rapporto aumenta se cresce il numeratore oppure diminuisce il denominatore. Se l'intervallo del denominatore include zero, non si può ricavare un intervallo finito con questa regola.
:::

:::esempio{titolo="Dagli estremi alla stima della densità"}
Siano $m=(200\pm2)\,\mathrm{g}$ e $V=(80\pm1)\,\mathrm{cm^3}$. Poiché tutti gli estremi sono positivi, la densità minima è $\dfrac{198}{81}\,\mathrm{g/cm^3}$ e la massima è $\dfrac{202}{79}\,\mathrm{g/cm^3}$. L'intervallo è approssimativamente da $2{,}444$ a $2{,}557\,\mathrm{g/cm^3}$. La stima massima al primo ordine parte dal valore nominale $2{,}50\,\mathrm{g/cm^3}$ e usa $1\%+1{,}25\%=2{,}25\%$, cioè un margine di circa $0{,}056\,\mathrm{g/cm^3}$. Gli estremi esatti rivelano una lieve asimmetria del rapporto che la stima al primo ordine trascura.

| Caso | Massa (g) | Volume (cm³) | Densità (g/cm³) |
| --- | --- | --- | --- |
| Minimo | 198 | 81 | 2,444 |
| Nominale | 200 | 80 | 2,500 |
| Massimo | 202 | 79 | 2,557 |

::grafico{poligoni="79,198 81,198 81,202 79,202" punti="81,198,pieno;80,200,pieno;79,202,pieno" etichette="79.09,202.22,Massimo;80.46,197.58,Minimo" xmin=78.5 xmax=82 ymin=197 ymax=203 nomi="V (cm³),m (g)" titolo="Gli estremi della densità sono nei due vertici opposti del rettangolo delle misure."}
:::

:::esempio{titolo="Una differenza piccola fra due lunghezze"}
Due tacche hanno coordinate $(50{,}2\pm0{,}2)\,\mathrm{cm}$ e $(49{,}9\pm0{,}2)\,\mathrm{cm}$. Per stimare la distanza orientata si sottrae la seconda coordinata dalla prima. Il valore centrale è $0{,}3\,\mathrm{cm}$. Se si conoscono solo i due intervalli, il più piccolo risultato possibile è $(50{,}0-50{,}1)\,\mathrm{cm}=-0{,}1\,\mathrm{cm}$ e il più grande è $(50{,}4-49{,}7)\,\mathrm{cm}=0{,}7\,\mathrm{cm}$. L'intervallo contiene zero, quindi le misure non stabiliscono l'ordine delle tacche lungo l'asse. Le singole incertezze relative sono inferiori all'$1\%$, ma la differenza è confrontabile con la somma delle incertezze assolute. Se entrambe le coordinate hanno lo stesso errore additivo di origine, quell'errore si cancella prima di stimare il margine residuo.
:::

## Componenti di un vettore

:::definizione{#componenti titolo="Modulo, direzione e verso"}
Una massa o un intervallo di tempo è uno scalare. Uno spostamento è un **vettore** perché conta anche la direzione del movimento. Una freccia descrive sia la retta lungo la quale avviene il moto sia il verso lungo quella retta. Con assi cartesiani fissati, il vettore è individuato dalle due proiezioni orientate $A_x,A_y$. Per un vettore non nullo, l'angolo $\theta$ è misurato dal semiasse positivo $x$ in senso antiorario.
$$
A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2}.
$$
Le componenti hanno le stesse unità del modulo. Una componente negativa indica il verso opposto a quello positivo dell'asse. Se il vettore ha componenti $-3\,\mathrm{m}$ e $4\,\mathrm{m}$, il modulo vale $5\,\mathrm{m}$ e il verso è nel secondo quadrante. L'angolo acuto di riferimento soddisfa $\tan\alpha=\dfrac43$. L'angolo riferito al semiasse positivo $x$ è $180^\circ-\alpha$, cioè circa $126{,}9^\circ$.

Spostare la coda di una freccia senza cambiarne lunghezza e orientamento lascia invariate le componenti di un vettore libero. Per uno spostamento da $P=(x_1,y_1)$ a $Q=(x_2,y_2)$ si sottraggono le coordinate nell'ordine finale meno iniziale. L'operazione inversa cambia il segno di entrambe le componenti. Il modulo resta invariato.
:::

::grafico{vettori="0,0,-3,4,A" segmenti="-3,0,-3,4;0,4,-3,4" xmin=-5 xmax=4 ymin=-1 ymax=5.5 nomi="x (m),y (m)" uguale=1 titolo="Il vettore ha componente orizzontale negativa e verticale positiva."}

:::osservazione{#assi-ruotati titolo="Assi ruotati"}
Se il nuovo asse $x'$ forma un angolo $\phi$ con il vecchio asse $x$, la nuova componente orizzontale si ottiene proiettando il vettore su $x'$. Per esempio, il vettore $(5,0)\,\mathrm{N}$ ha componenti $(0,-5)\,\mathrm{N}$ dopo una rotazione antioraria degli assi di $90^\circ$. Il suo modulo resta $5\,\mathrm{N}$. Nei problemi sul piano inclinato questa scelta degli assi semplifica i conti perché una componente è parallela al vincolo.

I versori dei nuovi assi hanno componenti $(\cos\phi,\sin\phi)$ e $(-\sin\phi,\cos\phi)$ negli assi iniziali. Il prodotto scalare con ciascun versore dà la nuova proiezione.

$$
\begin{aligned}
A_{x'}&=A_x\cos\phi+A_y\sin\phi\\[6pt]
A_{y'}&=-A_x\sin\phi+A_y\cos\phi.
\end{aligned}
$$

Per $\vec A=(0,5)\,\mathrm m$ e una rotazione degli assi con $\cos\phi=\dfrac45$ e $\sin\phi=\dfrac35$, le proiezioni sono $3\,\mathrm m$ e $4\,\mathrm m$. La figura mostra le due proiezioni sugli assi inclinati.

::grafico{vettori="0,0,0,5,A" segmenti="0,5,2.4,1.8;0,5,-2.4,3.2" punti="2.4,1.8,pieno;-2.4,3.2,pieno" riferimento="0,0,36.8699,4.6,x′,y′" xmin=-4 xmax=5 ymin=-1 ymax=6 nomi="x (m),y (m)" uguale=1 titolo="Le due guide tratteggiate sono perpendicolari ai rispettivi assi ruotati."}
:::

:::esempio{titolo="Cambio di assi nel piano"}
Un vettore $\vec A=(6,8)\,\mathrm m$ ha modulo $10\,\mathrm m$. Ruotiamo gli assi di $90^\circ$ in senso antiorario. Il nuovo semiasse positivo $x'$ punta come il vecchio $y$, quindi $A_{x'}=8\,\mathrm m$. Il nuovo semiasse positivo $y'$ punta nel verso opposto al vecchio $x$, perciò $A_{y'}=-6\,\mathrm m$. I moduli delle proiezioni si scambiano, mentre il segno dipende dai versi dei nuovi assi. Per verificare il risultato si calcola $\sqrt{8^2+(-6)^2}\,\mathrm m=10\,\mathrm m$. Se ruotassimo la freccia di $90^\circ$ lasciando fermi gli assi, avremmo invece le componenti $(-8,6)\,\mathrm m$. Le due operazioni descrivono situazioni geometriche distinte.
:::

## Somme e prodotti

:::teorema{#operazioni titolo="Operazioni tra vettori"}
Nella somma punta-coda il secondo spostamento inizia al termine del primo. La risultante va dalla coda iniziale alla punta finale e ha componenti $R_x=A_x+B_x$ e $R_y=A_y+B_y$. Per $\vec A=(3,1)\,\mathrm{m}$ e $\vec B=(-1,3)\,\mathrm{m}$ si trova $\vec R=(2,4)\,\mathrm{m}$, quindi $R=\sqrt{20}\,\mathrm{m}$. Il modulo della risultante non supera la somma dei moduli, che rappresenta la lunghezza del percorso lungo i due segmenti.

Il **prodotto scalare** di due vettori restituisce un numero. In un piano ortonormale vale
$$
\vec A\cdot\vec B=A_x B_x+A_y B_y=AB\cos\theta.
$$
Se $\vec B$ è non nullo, dividere per $B$ dà la proiezione orientata di $\vec A$ lungo $\vec B$. Per due vettori non nulli il prodotto è positivo se l'angolo compreso è minore di $90^\circ$ e negativo se è maggiore. All'angolo retto il prodotto è nullo. Anche il vettore nullo ha prodotto scalare nullo con ogni vettore, ma il suo angolo con un'altra direzione è indefinito.

Nel piano $xy$ di un sistema destrorso, la componente lungo $z$ del **prodotto vettoriale** è $A_x B_y-A_y B_x$. La regola della mano destra ne determina il verso. Se i due vettori rappresentano lunghezze, il modulo del prodotto è l'area del parallelogramma che generano. Infatti il fattore $B|\sin\theta|$ è l'altezza sulla base $A$. Il prodotto scalare usa la proiezione parallela. La componente trasversale entra nel prodotto vettoriale e nel calcolo del momento di una forza.
:::

::grafico{vettori="0,0,3,1,A;3,1,2,4,B;0,0,2,4,R" xmin=-1 xmax=5 ymin=-1 ymax=5 nomi="x (m),y (m)" uguale=1 titolo="La risultante collega l'origine alla punta finale"}

::grafico{vettori="0,0,-3,4,A;0,0,4,3,B" xmin=-5 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="I vettori sono perpendicolari perché il loro prodotto scalare è zero"}

:::esempio{#proiezione-orientata titolo="Proiezione negativa e lavoro"}
Una forza $\vec F=(-2,5)\,\mathrm{N}$ agisce durante uno spostamento $\vec s=(3,0)\,\mathrm{m}$. La proiezione lungo lo spostamento è $\dfrac{\vec F\cdot\vec s}{s}=-2\,\mathrm{N}$. Il prodotto scalare vale $-6\,\mathrm{J}$. La componente verticale può influenzare altri aspetti del moto, ma qui non dà contributo al lavoro perché non c'è spostamento verticale. Il segno negativo segnala che la forza ha una proiezione opposta allo spostamento.

::grafico{vettori="0,0,-2,5,F;0,0,-2,0,Fₓ" segmenti="-2,0,-2,5" etichette="0.42,0.6,verso di s →" xmin=-3 xmax=4 ymin=-1 ymax=6 nomi="Fₓ (N),Fᵧ (N)" uguale=1 titolo="Il semiasse positivo orizzontale ha il verso di s. La proiezione della forza punta a sinistra."}
:::

:::esempio{titolo="Area e ordine dei vettori"}
Con $\vec A=(3,0)\,\mathrm m$ e $\vec B=(1,2)\,\mathrm m$ si ottiene $(\vec A\times\vec B)_z=+6\,\mathrm{m^2}$. Da $\vec A$ a $\vec B$ si gira in senso antiorario. Scambiando l'ordine, la componente diventa $-6\,\mathrm{m^2}$. L'area geometrica resta $6\,\mathrm{m^2}$, perché usa il modulo.

::grafico{poligoni="0,0 3,0 4,2 1,2" vettori="0,0,3,0,A;0,0,1,2,B" segmenti="1,0,1,2" xmin=-1 xmax=5 ymin=-1 ymax=3.8 nomi="x (m),y (m)" uguale=1 titolo="La base di 3 m e l'altezza di 2 m danno un'area di 6 m²."}
:::
