---
titolo: "Metodi della fisica, grandezze e vettori"
sommario: "Dalle unità ai grafici: conversioni, stime, controlli dimensionali, trigonometria e operazioni vettoriali per costruire e verificare un ragionamento fisico."
---
:::osservazione{#programma titolo="Programma di riferimento"}
Il capitolo sviluppa l’unità 1 del [programma MUR di Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf). Un risultato fisico richiede un numero, un’unità e un significato: gli strumenti seguenti servono a conservarli durante ogni passaggio.
:::
## 1. Misurare una grandezza e scegliere un’unità

:::esempio{titolo="Numero, unità e grandezza"}
Misurare una lunghezza significa confrontarla con una lunghezza scelta come riferimento. La scritta «2,4» da sola non descrive lo spessore di un campione: può indicare millimetri, centimetri o un rapporto senza unità. La scritta $\ell=2{,}4\,\mathrm{cm}$ separa invece la grandezza $\ell$, il suo valore numerico e l’unità. Se si passa ai metri, la stessa lunghezza diventa $0{,}024\,\mathrm{m}$: il campione non cambia, cambia il numero necessario per descriverlo.
:::

:::definizione{#grandezze titolo="Grandezze fisiche e Sistema Internazionale"}
Una **grandezza fisica** è una proprietà descrivibile quantitativamente mediante un confronto. Il Sistema Internazionale, SI, stabilisce unità condivise; le sette unità di base sono:

| Grandezza di base | Unità | Simbolo |
| --- | --- | --- |
| Lunghezza | metro | $\mathrm{m}$ |
| Massa | chilogrammo | $\mathrm{kg}$ |
| Tempo | secondo | $\mathrm{s}$ |
| Corrente elettrica | ampere | $\mathrm{A}$ |
| Temperatura termodinamica | kelvin | $\mathrm{K}$ |
| Quantità di sostanza | mole | $\mathrm{mol}$ |
| Intensità luminosa | candela | $\mathrm{cd}$ |

Le unità derivate combinano quelle di base: $\mathrm{m/s}$ per la velocità, $\mathrm{N}=\mathrm{kg\,m/s^2}$ per la forza, $\mathrm{J}=\mathrm{N\,m}$ per l’energia e $\mathrm{Pa}=\mathrm{N/m^2}$ per la pressione.
:::

:::osservazione{titolo="Definizione, misura e significato dei simboli"}
Le definizioni moderne del SI fissano valori di costanti di riferimento; la **realizzazione** sperimentale di un’unità rimane una misura con incertezza. Un cronometro che mostra molti decimali non garantisce automaticamente altrettanta accuratezza. Non serve memorizzare qui tutte le costanti definitorie: serve distinguere l’unità convenzionale dalla qualità dello strumento che la realizza.

I simboli sono sensibili alle maiuscole: $\mathrm{m}$ è il metro, mentre il prefisso mega è $\mathrm{M}$. Il chilogrammo è l’unità di base della massa, non il grammo; la massa non è il peso, che è una forza e si esprime in newton. Un valore negativo non rende vettoriale una grandezza: una temperatura Celsius può essere negativa pur essendo scalare. Le operazioni ammissibili dipendono dalla natura della grandezza, non soltanto dalla sua notazione.
:::

## 2. Conversioni, notazione scientifica e stime
:::definizione{#conversioni titolo="Cambiare unità senza cambiare grandezza"}
Un fattore di conversione è un rapporto uguale a uno, formato da due espressioni della stessa quantità. Per esempio:
$$
108\,\dfrac{\mathrm{km}}{\mathrm{h}}
\dfrac{1000\,\mathrm{m}}{1\,\mathrm{km}}
\dfrac{1\,\mathrm{h}}{3600\,\mathrm{s}}
=30\,\mathrm{m/s}.
$$
Le unità da eliminare devono comparire una volta al numeratore e una al denominatore. È questa cancellazione a stabilire se moltiplicare o dividere, senza affidarsi a una regola ricordata a metà.
:::

:::esempio{titolo="Prefissi, potenze e portate"}
I prefissi più comuni sono kilo $10^3$, centi $10^{-2}$, milli $10^{-3}$, micro $10^{-6}$ e nano $10^{-9}$. Il prefisso fa parte dell’unità elevata a potenza:
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}.
$$
Un millilitro è un centimetro cubo, mentre un litro è $10^{-3}\,\mathrm{m^3}$. Il litro è un’unità non SI, equivalente al decimetro cubo; l’unità SI coerente del volume è il metro cubo. Una portata richiede due conversioni: $4{,}8\,\mathrm{L/min}=8{,}0\cdot10^{-5}\,\mathrm{m^3/s}$. Il minuto sta al denominatore: aumentare il numero di secondi nell’unità di tempo riduce il valore numerico della portata.
:::

![Un centimetro lungo ogni spigolo produce un fattore dieci alla meno sei nel volume in metri cubi.](/figure/fisica-semestre-filtro/metodi-della-fisica/volume-it.svg)

:::osservazione{titolo="Convertire una densità"}
Nella densità si convertono numeratore e denominatore: $1{,}05\,\mathrm{g/cm^3}=1050\,\mathrm{kg/m^3}$. Il valore numerico cresce anche se il grammo viene sostituito dal chilogrammo, perché cambia contemporaneamente l’unità di volume. Controllare soltanto il prefisso della massa porterebbe alla previsione opposta.
:::

:::definizione{#notazione titolo="Notazione scientifica e ordine di grandezza"}
Per un numero positivo, la forma normalizzata è $a\cdot10^n$ con $1\le a<10$ e $n$ intero. Nei prodotti si sommano gli esponenti; nelle somme occorre prima portare i termini alla stessa potenza di dieci. Per esempio:
$$
(3\cdot10^{-6})(4\cdot10^3)=1{,}2\cdot10^{-2},\qquad
3\cdot10^{-6}+4\cdot10^{-5}=4{,}3\cdot10^{-5}.
$$
Per l’**ordine di grandezza** adottiamo la potenza di dieci più vicina su scala logaritmica: con $a<\sqrt{10}$ si sceglie $10^n$, con $a\ge\sqrt{10}$ si sceglie $10^{n+1}$. Il criterio va dichiarato perché esistono convenzioni didattiche diverse.
:::
![La soglia fra due ordini di grandezza è la loro media geometrica, non la media aritmetica.](/figure/fisica-semestre-filtro/metodi-della-fisica/orders-it.svg)

:::osservazione{titolo="Stime e cifre significative"}
Così $6\cdot10^{-6}\,\mathrm{m}$ ha ordine $10^{-5}\,\mathrm{m}$, mentre $2\cdot10^{-6}\,\mathrm{m}$ ha ordine $10^{-6}\,\mathrm{m}$. Una stima serve a intercettare errori di fattore mille prima del calcolo preciso. Le conversioni esatte non aggiungono incertezza; i dati misurati sì. Per prodotti e quozienti semplici, riportare le cifre significative del dato meno preciso è una regola pratica di arrotondamento, non una sostituzione dell’analisi delle incertezze. Conviene mantenere cifre di guardia nei passaggi e arrotondare alla fine.
:::

:::esempio{titolo="Un cambio di unità non migliora la misura"}
Una bilancia fornisce $m=(2{,}40\pm0{,}05)\,\mathrm{g}$, dove il termine dopo il segno più o meno indica l’incertezza assoluta dichiarata. Passare ai chilogrammi significa moltiplicare entrambi i numeri per lo stesso fattore:
$$
m=(2{,}40\cdot10^{-3}\pm5\cdot10^{-5})\,\mathrm{kg}.
$$
Convertire soltanto il valore centrale cambierebbe il significato fisico dell’intervallo. Il rapporto fra incertezza e valore centrale rimane $\dfrac{0{,}05}{2{,}40}\simeq0{,}021$, circa il due per cento. Anche aggiungere zeri alla visualizzazione non fornisce informazioni nuove sulla massa. Nel confrontare misure espresse in unità diverse, bisogna perciò riportare alla stessa unità sia i valori sia le incertezze. Questa distinzione consente di separare una trasformazione esatta della scrittura dalla qualità sperimentale del dato.
:::

## 3. Dimensioni: controllare una formula prima dei numeri

:::osservazione{titolo="Dimensione e unità non coincidono"}
Due lunghezze possono avere unità diverse ma la stessa dimensione. Una lunghezza e un tempo hanno dimensioni diverse, anche se i loro valori numerici coincidono. Con $M$, $L$ e $T$ indichiamo dimensioni di massa, lunghezza e tempo, senza confonderle con simboli di unità o con le grandezze del problema.
:::

:::osservazione{#dimensioni titolo="Omogeneità dimensionale"}
In una somma fisica tutti i termini devono avere la stessa dimensione; anche i due membri di un’uguaglianza devono essere omogenei. Per esempio:
$$
[v]=LT^{-1},\qquad [a]=LT^{-2},\qquad
[\rho v^2]=(ML^{-3})(L^2T^{-2})=ML^{-1}T^{-2}=[p].
$$
La relazione $x=v_0t+at$ è incoerente: il primo termine è una lunghezza, il secondo una velocità. La sostituzione di $at$ con un termine proporzionale ad $at^2$ ripristina l’omogeneità, ma non determina il coefficiente numerico corretto.
:::

:::osservazione{titolo="Limiti del controllo dimensionale"}
L’analisi dimensionale può escludere una legge, non provarla. $x=v_0t+at^2$ e $x=v_0t+\dfrac{at^2}{2}$ sono entrambe omogenee; soltanto la seconda descrive, con origine iniziale nulla, il moto ad accelerazione costante. Anche i limiti del modello e le condizioni iniziali vanno controllati.

Per ricavare l’unità di una costante, prima la si isola. Se $F=bv$, allora $[b]=\dfrac{[F]}{[v]}=MT^{-1}$ e l’unità è $\mathrm{kg/s}$. Non tutte le costanti sono numeri puri. Anche gli argomenti di esponenziali e logaritmi devono essere adimensionali: $\exp\!\left(-\dfrac{t}{\tau}\right)$ è sensato se $t$ e $\tau$ sono tempi, mentre $\exp(-t)$ richiede che sia stato dichiarato un tempo numerico normalizzato. Per un seno occorre un angolo espresso con una convenzione coerente; inserire gradi in una formula che usa il valore in radianti cambia il risultato.
:::

:::esempio{titolo="Ricavare esponenti senza inventare un coefficiente"}
Supponiamo che un tempo caratteristico dipenda soltanto da una lunghezza $\ell$ e da un’accelerazione $g$, nella forma $t_c=C\ell^\alpha g^\beta$, con $C$ adimensionale. Il membro destro ha dimensioni $L^{\alpha+\beta}T^{-2\beta}$. Per ottenere un tempo occorrono:
$$
\alpha+\beta=0,\qquad-2\beta=1,
\qquad\alpha=\dfrac12,\quad\beta=-\dfrac12.
$$
La forma compatibile è dunque $t_c=C\sqrt{\dfrac\ell g}$. Le dimensioni non determinano $C$, non provano che la dipendenza sia davvero una potenza e non escludono parametri adimensionali non considerati. Il valore del coefficiente e l’adeguatezza del modello richiedono una legge fisica o dati sperimentali. La conclusione corretta è condizionata alle dipendenze ipotizzate: basta omettere una variabile rilevante perché un risultato dimensionalmente coerente sia incompleto.
:::

## 4. Parti di un sistema: estensive e intensive
:::definizione{#estensive-intensive titolo="Come cambia la grandezza dividendo un campione"}
Una grandezza **estensiva** è additiva per parti nelle condizioni considerate: massa, volume ed energia interna sono esempi usuali. Una grandezza **intensiva**, come temperatura, pressione o densità, non cresce per il solo fatto di aumentare la quantità di materiale nello stesso stato.
:::

:::esempio{titolo="Dividere un campione omogeneo"}
Immaginiamo un campione omogeneo diviso in quattro parti uguali, senza alterarne temperatura o composizione. Massa e volume di ogni parte sono un quarto degli iniziali; la densità resta $\rho=\dfrac{\dfrac m4}{\dfrac V4}=\dfrac mV$. La prova riguarda la divisione di uno stesso materiale, non il confronto casuale fra oggetti diversi. Un corpo più grande può avere densità diversa perché è fatto di un altro materiale, senza rendere estensiva la densità.
:::

![Per uno stesso materiale omogeneo massa e volume aumentano insieme, mantenendo la stessa pendenza uguale alla densità.](/figure/fisica-semestre-filtro/metodi-della-fisica/density-it.svg)

:::osservazione{titolo="Stato del materiale e mescolamento"}
Unendo due porzioni identiche nello stesso stato, massa ed energia interna si sommano, mentre la temperatura resta uguale se non intervengono lavoro, scambi energetici o trasformazioni. Due campioni a temperature diverse richiedono invece un bilancio energetico: «intensiva» non significa «invariabile in ogni processo». Analogamente, la densità di una miscela non è in generale la media aritmetica delle densità iniziali; si calcola da massa totale e volume finale.

L’additività del volume va applicata alle condizioni del problema. Miscelare sostanze diverse può cambiare il volume totale rispetto alla somma dei volumi iniziali, perché cambia lo stato fisico della miscela. Negli esercizi che sommano volumi al mescolamento questa approssimazione deve essere dichiarata. Nel modello additivo a stato fissato, il rapporto fra due grandezze estensive, con denominatore non nullo, è intensivo: entrambe scalano dello stesso fattore, che si cancella. È il caso di $\dfrac mV$. Il quadrato della massa, invece, non è estensivo, perché quadruplica quando la quantità di sistema raddoppia: rapporti che contengono potenze richiedono un nuovo controllo di scala.
:::

## 5. Formule inverse, pendenze e aree
:::osservazione{#grafici titolo="Una relazione fisica deve conservare le unità"}
Da $\rho=\dfrac mV$ seguono $m=\rho V$ e $V=\dfrac m\rho$. Si opera prima sui simboli, poi si sostituiscono grandezze in unità compatibili. In una relazione lineare $y=kx+b$, la pendenza è $k=\dfrac{\Delta y}{\Delta x}$ e l’intercetta $b$ ha l’unità di $y$.
:::

:::esempio{titolo="Equazioni fra grandezze e valori numerici"}
Una dipendenza lineare non è necessariamente una proporzionalità diretta: serve anche $b=0$. Per $x(t)=(2\,\mathrm{m/s})t+1\,\mathrm{m}$, raddoppiare $t$ non raddoppia $x$, perché la posizione iniziale non è nulla. L’equazione fra grandezze contiene le unità dei coefficienti. La forma numerica $\dfrac{x}{\mathrm{m}}=2\dfrac{t}{\mathrm{s}}+1$ esprime la stessa relazione con variabili adimensionali. Scrivere soltanto $x=2t+1$ senza dichiarare le unità lascia invece ambiguo il significato dei numeri.
:::

![Due punti della retta posizione-tempo determinano una variazione di sei metri in tre secondi; l’intercetta è un metro.](/figure/fisica-semestre-filtro/metodi-della-fisica/position-it.svg)

:::osservazione{titolo="Distinguere pendenza e area"}
La pendenza non si trova in generale con $\dfrac yx$: si usano differenze fra due punti. Su una curva, il rapporto delle differenze è una pendenza media nell’intervallo; una tangente descrive il tasso locale. Inoltre l’angolo visivo della retta dipende dalle scale dei due assi: cambiare la scala del disegno cambia l’inclinazione sul foglio senza cambiare la velocità fisica.

L’area ha un significato diverso dalla pendenza. In un grafico velocità-tempo la pendenza ha unità $\mathrm{m/s^2}$ e rappresenta accelerazione; l’area ha unità $(\mathrm{m/s})\mathrm{s}=\mathrm{m}$ e rappresenta spostamento. Su tratti costanti si usano rettangoli; su tratti lineari, triangoli o trapezi. L’area sotto l’asse contribuisce negativamente allo spostamento.
:::

![Una velocità positiva per due secondi e negativa nei due successivi dà aree con segno opposto.](/figure/fisica-semestre-filtro/metodi-della-fisica/signed-area-it.svg)

:::esempio{titolo="Spostamento, distanza e durata"}
Se un punto viaggia a $3\,\mathrm{m/s}$ per due secondi e a $-1\,\mathrm{m/s}$ per altri due, lo spostamento è $6\,\mathrm{m}-2\,\mathrm{m}=4\,\mathrm{m}$, mentre la distanza percorsa è $6\,\mathrm{m}+2\,\mathrm{m}=8\,\mathrm{m}$. La media delle velocità va pesata con le durate: una semplice media aritmetica vale solo se gli intervalli sono uguali. Questi controlli consentono di leggere un grafico senza confondere altezza, pendenza e area.
:::

:::esempio{titolo="Invertire una potenza conserva il significato geometrico"}
Per una sfera, $V=\dfrac43\pi r^3$. Per ricavare il raggio da un volume non basta dividere per il coefficiente: prima si isola il cubo, poi si applica la radice cubica:
$$
r^3=\dfrac{3V}{4\pi},\qquad r=\sqrt[3]{\dfrac{3V}{4\pi}}.
$$
La radice cubica di un volume ha dimensione di lunghezza; una radice quadrata avrebbe dimensione $L^{\dfrac32}$ e segnalerebbe un errore. Se il volume aumenta di otto volte, il raggio raddoppia. Inversamente, dimezzare il raggio riduce il volume a un ottavo. Questo controllo di scala aiuta a riconoscere formule inverse sbagliate senza sostituire dati numerici e chiarisce perché una variazione percentuale della lunghezza non si trasferisce invariata al volume.
:::

## 6. Angoli e funzioni trigonometriche
:::definizione{#trigonometria titolo="Seno, coseno, tangente e radianti"}
In un triangolo rettangolo il seno è il rapporto fra cateto opposto e ipotenusa, il coseno fra cateto adiacente e ipotenusa, e la tangente fra cateto opposto e cateto adiacente. Per estendere queste definizioni a qualsiasi angolo si usa la circonferenza unitaria: il punto individuato da $\theta$ ha coordinate $(\cos\theta,\sin\theta)$.
$$
\sin^2\theta+\cos^2\theta=1,\qquad
\tan\theta=\dfrac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).
$$
Un angolo in radianti è il rapporto fra lunghezza dell’arco e raggio: $\theta=\dfrac sr$. Un giro completo vale $2\pi\,\mathrm{rad}=360^\circ$.
:::
![Circonferenza unitaria con un angolo di centoventi gradi: coseno negativo e seno positivo.](/figure/fisica-semestre-filtro/metodi-della-fisica/circle-it.svg)

:::osservazione{titolo="Convertire angoli e controllare i segni"}
Il radiante è un’unità derivata SI di dimensione uno, poiché nasce dal rapporto fra lunghezze. Il simbolo $\mathrm{rad}$ resta utile per indicare che il numero descrive un angolo. «Adimensionale» non significa che un radiante e un grado abbiano lo stesso valore: il fattore è $\dfrac{\pi}{180}$. Ad esempio $60^\circ=\dfrac{\pi}{3}\,\mathrm{rad}$.

Per $30^\circ$ il seno vale $\dfrac12$ e il coseno $\dfrac{\sqrt3}{2}$; per $45^\circ$ sono entrambi $\dfrac{\sqrt2}{2}$. Nel secondo quadrante il coseno è negativo e il seno positivo; nel terzo sono entrambi negativi. Prima del calcolo conviene prevedere questi segni. La tangente da sola non distingue due direzioni separate da $180^\circ$: l’inversione mediante arcotangente richiede di controllare il quadrante. Anche la modalità gradi/radianti della calcolatrice deve corrispondere al dato inserito.
:::

## 7. Vettori, componenti e somma
:::definizione{#componenti titolo="Uno scalare e un vettore descrivono informazioni diverse"}
Uno **scalare** è specificato da valore e unità; un **vettore** richiede modulo, direzione e verso. Una forza di $10\,\mathrm{N}$ non è ancora determinata senza orientamento. Scelti due assi perpendicolari e misurato $\theta$ dal semiasse positivo $x$ in verso antiorario:
$$
a_x=a\cos\theta,\qquad a_y=a\sin\theta,\qquad
a=\sqrt{a_x^2+a_y^2}.
$$
Le componenti hanno la stessa unità del vettore e possono essere negative; il modulo è non negativo.
:::

:::osservazione{titolo="La scelta degli assi"}
Se l’angolo è dato rispetto a $y$, il ruolo di seno e coseno cambia: non basta associare automaticamente «x» a «coseno». Un disegno chiarisce quale cateto sia adiacente all’angolo. Il modulo di ciascuna componente non può superare il modulo del vettore. Cambiando l’orientamento degli assi cambiano le componenti, mentre il vettore fisico e il suo modulo restano gli stessi. Il vettore nullo ha componenti nulle e non possiede una direzione definita.
:::

:::definizione{#operazioni-vettori titolo="Somma, differenza e moltiplicazione per uno scalare"}
Si sommano componenti corrispondenti di grandezze compatibili:
$$
(\vec{a}\pm\vec{b})_x=a_x\pm b_x,\qquad
(\vec{a}\pm\vec{b})_y=a_y\pm b_y.
$$
Geometricamente si può spostare la coda del secondo vettore sulla punta del primo; il risultante va dalla prima coda all’ultima punta. La differenza $\vec{a}-\vec{b}$ è la somma di $\vec{a}$ e dell’opposto di $\vec{b}$.
:::
![Somma punta-coda di due spostamenti e vettore risultante, con coordinate e scale comuni.](/figure/fisica-semestre-filtro/metodi-della-fisica/addition-it.svg)

:::esempio{titolo="Moduli, versi e operazioni ammissibili"}
Per $\vec{a}=(3;2)\,\mathrm{m}$ e $\vec{b}=(-1;4)\,\mathrm{m}$, la somma è $(2;6)\,\mathrm{m}$. I moduli non si sommano in generale: $|\vec{a}+\vec{b}|$ è compreso fra $|a-b|$ e $a+b$, con gli estremi per vettori opposti e concordi. Il teorema di Pitagora sui due moduli vale soltanto se i vettori sono perpendicolari. Una forza equilibrante è l’opposto della risultante, non un vettore con le stesse componenti.

Moltiplicare per un numero puro $c$ moltiplica tutte le componenti per $c$ e il modulo per $|c|$; se $c<0$ inverte il verso. Se lo scalare ha un’unità, anche l’unità del prodotto cambia: massa per accelerazione produce una forza. Non è invece definita fisicamente la somma di una forza e uno spostamento, anche se si possono formalmente sommare le loro coppie di numeri.
:::

## 8. Due prodotti con significati diversi
:::definizione{#prodotti-vettori titolo="Prodotto scalare e prodotto vettoriale"}
Il **prodotto scalare** restituisce uno scalare e seleziona la proiezione di un vettore sull’altro:
$$
\vec{a}\cdot\vec{b}=ab\cos\theta=a_xb_x+a_yb_y+a_zb_z.
$$
Il **prodotto vettoriale** restituisce un vettore perpendicolare ai due fattori, con modulo $ab\sin\theta$ per $0\le\theta\le\pi$ e verso dato dalla mano destra. In coordinate cartesiane destrorse:
$$
\vec{a}\times\vec{b}=(a_yb_z-a_zb_y;\ a_zb_x-a_xb_z;\ a_xb_y-a_yb_x).
$$
:::
![Il prodotto scalare misura una proiezione; il prodotto vettoriale ha modulo pari all’area del parallelogramma.](/figure/fisica-semestre-filtro/metodi-della-fisica/products-it.svg)

:::osservazione{titolo="Segni, lavoro e momento"}
Il prodotto scalare è positivo per un angolo acuto, negativo per un angolo ottuso e nullo per vettori perpendicolari; se uno dei fattori è nullo, non si può dedurre un angolo. Il lavoro di una forza costante è $W=\vec{F}\cdot\Delta\vec{r}$: una forza perpendicolare allo spostamento non compie lavoro. Dal prodotto scalare si ricava anche $\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{ab}$ per vettori non nulli.

Il prodotto vettoriale si annulla per fattori paralleli e raggiunge modulo massimo a $90^\circ$. L’ordine conta: $\vec{b}\times\vec{a}=-\vec{a}\times\vec{b}$, mentre il prodotto scalare è commutativo. Nel piano $xy$ la componente $z$ è $a_xb_y-a_yb_x$: positiva significa verso $+z$, uscente dal foglio quando $x$ punta a destra e $y$ in alto.

Il momento di una forza rispetto a un punto è $\vec\tau=\vec{r}\times\vec{F}$, con $\vec{r}$ dal punto di riferimento al punto di applicazione. Il modulo è $rF\sin\theta=Fb$, dove $b$ è la distanza perpendicolare dalla retta d’azione. Momento e lavoro hanno entrambi dimensioni di forza per lunghezza, ma sono grandezze diverse: il momento si esprime in $\mathrm{N\,m}$ e il lavoro in joule. Questo è un esempio concreto del motivo per cui le sole dimensioni non identificano completamente una grandezza fisica.
:::
