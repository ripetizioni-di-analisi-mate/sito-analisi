---
titolo: "Rifrazione e lenti"
sommario: "Indice di rifrazione, legge di Snell, riflessione totale, immagini di lenti sottili e potere diottrico."
---

## Indice di rifrazione

:::definizione{#indice titolo="La velocità della luce in un mezzo"}
Per un materiale trasparente e una frequenza fissata, l’**indice di rifrazione** $n$ è il rapporto fra la velocità della luce nel vuoto $c$ e la velocità della fase nel mezzo $v$. L’indice è adimensionale. Nei materiali trasparenti comuni qui trattati vale $n>1$, quindi la luce viaggia più lentamente che nel vuoto.

$$
n=\frac{c}{v},\qquad v=\frac{c}{n}.
$$

Al passaggio attraverso una superficie stazionaria la frequenza $\nu$ resta la stessa, poiché l’onda incidente e quella trasmessa hanno lo stesso andamento nel tempo al contatto. La lunghezza d’onda cambia. Se nel vuoto vale $\lambda_0=\dfrac{c}{\nu}$, nel mezzo vale $\lambda=\dfrac{v}{\nu}=\dfrac{\lambda_0}{n}$. I valori di $n$ possono dipendere dalla frequenza, quindi un indice fornito si usa per la luce specificata. Quando un esercizio non dà un valore per l’aria, si usa $n=1$ nell’approssimazione qui adottata.
:::

:::esempio{titolo="Dalla velocità alla lunghezza d’onda"}
In un vetro con $n=1{,}50$ e con $c=3{,}0\cdot10^8\,\mathrm{m/s}$ si ha $v=2{,}0\cdot10^8\,\mathrm{m/s}$. Una lunghezza d’onda nel vuoto di $600\,\mathrm{nm}$ diventa $400\,\mathrm{nm}$. Il rapporto fra le lunghezze d’onda è lo stesso rapporto fra le velocità, perché il numero di oscillazioni al secondo resta invariato.

::grafico{f="600/x" punti="1,600,pieno;1.5,400,pieno;2,300,pieno" xmin=0.9 xmax=2.35 ymin=0 ymax=695 nomi="n,λ (nm)" titolo="Per una data frequenza, a indice maggiore corrisponde minore lunghezza d’onda."}
:::

:::esempio{#tempo-in-piu-mezzi titolo="Luce in due materiali successivi"}
Consideriamo la stessa radiazione di lunghezza d’onda nel vuoto $600\,\mathrm{nm}$. In ciascun mezzo si divide la velocità nel vuoto per $n$ per ricavare la velocità di fase. Poiché la frequenza resta uguale, anche la lunghezza d’onda si divide per lo stesso fattore. Le due grandezze sono quindi ordinate nello stesso modo.

| Mezzo | Velocità ($10^8\,\mathrm{m/s}$) | Lunghezza d’onda (nm) |
| --- | --- | --- |
| Vuoto | $3{,}0$ | $600$ |
| A, $n=1{,}20$ | $2{,}5$ | $500$ |
| B, $n=1{,}50$ | $2{,}0$ | $400$ |

Un impulso percorre normalmente $30\,\mathrm{cm}$ nel materiale A e $30\,\mathrm{cm}$ nel materiale B. Se i mezzi sono poco dispersivi, si usa $\dfrac{c}{n}$ anche per stimare la velocità dell’impulso. Il primo tratto dura $1{,}2\,\mathrm{ns}$ e il secondo $1{,}5\,\mathrm{ns}$, quindi il tempo totale è $2{,}7\,\mathrm{ns}$. Nel vuoto, per la stessa lunghezza complessiva servirebbero $2{,}0\,\mathrm{ns}$. Il ritardo di $0{,}7\,\mathrm{ns}$ viene dalla somma dei ritardi di ciascun tratto. La velocità media si ottiene dividendo il cammino totale per il tempo totale.

::grafico{linee="0,0 30,1.2 60,2.7" segmenti="0,0,60,2" punti="30,1.2,pieno,A;60,2.7,pieno,B" xmin=0 xmax=65 ymin=0 ymax=3.6 nomi="cammino (cm),tempo (ns)" titolo="Il tratto nel mezzo B è più ripido. La linea tratteggiata indica il tempo sullo stesso cammino nel vuoto."}
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
Per $n_1=1{,}00$, $n_2=1{,}50$ e $\theta_1=30^\circ$, il seno rifratto è $\dfrac{1{,}00}{1{,}50}\cdot0{,}50=\dfrac{1}{3}$. L’arcoseno vale circa $19{,}5^\circ$. L’angolo resta minore di $30^\circ$ come previsto. Se si scambiassero i due mezzi invertendo il cammino del raggio, si ritroverebbe il raggio iniziale.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-1.4,2.424871,0,0;0,0,0.933333,-2.639865" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="Il raggio in aria forma 30° dalla normale. Nel vetro forma circa 19,5°."}
:::

:::esempio{#angolo-dalla-superficie titolo="Quale angolo entra nella legge"}
Sul banco ottico il goniometro può essere appoggiato lungo la superficie. In quel caso la lettura è l’angolo $\varphi$ dalla superficie. La normale è perpendicolare, quindi prima di applicare Snell si calcola $\theta_1=90^\circ-\varphi$. Se $\varphi=30^\circ$, l’angolo nella legge vale $60^\circ$.

Prendiamo l’aria come $n_1=1{,}00$ e il vetro come $n_2=1{,}50$. Dato che $\sin60^\circ=\dfrac{\sqrt3}{2}$, la legge dà $\sin\theta_2=\dfrac{\sqrt3}{3}$ e $\theta_2\simeq35{,}3^\circ$. Usando per errore i $30^\circ$ del goniometro, si ricaverebbero circa $19{,}5^\circ$. Entrambi i risultati sono minori del valore inserito, quindi il controllo sul verso della deviazione da solo non intercetta l’errore. Occorre identificare il riferimento prima di leggere il valore.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-3.05,0,3.05" curve="0.85*cos(t),0.85*sin(t),1.5707963,2.6179939;1.25*cos(t),1.25*sin(t),2.6179939,3.1415927" vettori="-2.424871,1.4,0,0;0,0,1.616581,-2.28619" etichette="-0.93,1.14,60°;-1.76,0.32,30°;1.86,-1.18,35,3°" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 titolo="L’incidenza è 60° dalla normale e 30° dalla superficie. In vetro la rifrazione è circa 35,3° dalla normale."}
:::

:::osservazione{#lastra titolo="Entrata e uscita da una lastra"}
Quando le due facce di una lastra sono parallele, hanno normali parallele. Se fuori da entrambe c’è lo stesso mezzo, applicando Snell alla prima e alla seconda faccia si ritrova lo stesso seno dell’angolo iniziale. Il raggio emergente è parallelo a quello incidente e può essere traslato perché ha seguito una direzione diversa nella lastra.
:::

:::esempio{#scarto-lastra titolo="Lo spostamento laterale nella lastra"}
Una lastra spessa $e$ è immersa in aria. Il raggio entra con angolo $\theta_1$ dalla normale e percorre dentro la lastra un segmento di lunghezza $L=\dfrac{e}{\cos\theta_2}$. Alla seconda faccia esce con lo stesso angolo iniziale, perché dall’indice della lastra si torna a quello dell’aria. La distanza perpendicolare fra il raggio emergente e la retta iniziale prolungata è $L\sin(\theta_1-\theta_2)$ quando $\theta_1>\theta_2$. Il seno compare perché il segmento interno forma con la direzione iniziale l’angolo $\theta_1-\theta_2$.

Per $e=4{,}0\,\mathrm{cm}$, indice della lastra $\sqrt2$ e $\theta_1=45^\circ$, Snell dà $\theta_2=30^\circ$. La distanza vale allora $\dfrac{4{,}0\sin15^\circ}{\cos30^\circ}\,\mathrm{cm}\simeq1{,}2\,\mathrm{cm}$. Raddoppiando lo spessore raddoppia questo spostamento, mentre l’angolo emergente resta invariato. All’incidenza normale la differenza fra gli angoli è zero e le due rette coincidono.

::grafico{assi=0 uguale=1 linee="-3.6,0 7,0;-3.6,-4 7,-4" segmenti="0,0,0,2.4;2.309401,-6.4,2.309401,-2.5;0,0,5.9,-5.9;2.309401,-4,3.154701,-3.154701" vettori="-2.3,2.3,0,0;0,0,2.309401,-4;2.309401,-4,4.509401,-6.2" etichette="4.1,-2.8,lastra;2.65,-3.35,scarto" xmin=-4 xmax=7.4 ymin=-7 ymax=2.8 titolo="Le direzioni prima della lastra e dopo l’uscita sono parallele. Lo scarto è misurato perpendicolarmente alla retta tratteggiata."}
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
Dal vetro di indice $1{,}50$ all’aria di indice $1{,}00$, $\theta_c=\arcsin(\dfrac{2}{3})\simeq41{,}8^\circ$. Incidendo da vetro a $55^\circ$ si supera il valore limite. L’angolo del raggio riflesso è ancora $55^\circ$ dalla normale nel vetro. Se la luce arrivasse invece dall’aria verso il vetro, la riflessione totale sarebbe assente in questo modello.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-2.293626,1.606014,0,0;0,0,2.293626,1.606014" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="Da vetro ad aria con incidenza 55° rimane il raggio riflesso nel vetro."}
:::

:::osservazione{#soglia-snell titolo="Verificare prima che esista un raggio rifratto"}
Nel passaggio dal vetro all’aria conviene calcolare il valore richiesto a $\sin\theta_2$ prima di usare l’arcoseno. Con indice del vetro $1{,}50$, a incidenza di $30^\circ$ si ottiene $1{,}50\cdot0{,}50=0{,}75$, quindi può uscire un raggio. A $60^\circ$ risulta invece circa $1{,}30$. Questo numero supera il massimo valore di un seno e non corrisponde ad alcun angolo trasmesso.

Il punto in cui il valore raggiunge uno separa i due regimi. Se si sostituisce l’aria con acqua di indice $1{,}33$, bisogna dividere per tale indice. L’angolo limite diventa circa $62{,}5^\circ$. La stessa incidenza di $60^\circ$ che produce riflessione totale verso l’aria lascia allora propagare un raggio verso l’acqua.

::grafico{f="1.5*sin(x*pi/180);1" punti="30,0.75,pieno;41.810315,1,pieno,C;60,1.299038,pieno" xmin=0 xmax=85 ymin=0 ymax=1.65 nomi="incidenza (°),seno richiesto" legenda="1{,}50\sin\theta_1;1" titolo="La soglia C è a 41,8°. A destra di C il valore richiesto supera uno."}
:::

## Lenti convergenti e divergenti

:::definizione{#lenti titolo="I fuochi di una lente sottile"}
Una **lente sottile** è modellata come un elemento il cui spessore è trascurabile rispetto alle distanze focali e di lavoro. Per raggi parassiali vicini all’asse, il raggio che attraversa il centro ottico si tratta come non deviato. Un raggio parallelo all’asse, uscendo, passa per il fuoco dal lato di uscita se la lente è convergente. Se la lente è divergente, il raggio uscente sembra provenire dal fuoco lato oggetto quando viene prolungato indietro.

Si usa $f>0$ per la lente convergente e $f<0$ per la divergente. La costruzione assume lo stesso mezzo esterno sui due lati. Per lenti molto spesse o raggi lontani dall’asse, questa rappresentazione è un’approssimazione insufficiente.
:::

:::osservazione{#controllo-raggi titolo="Controllare la costruzione con un terzo raggio"}
Per trovare l’immagine di un punto fuori asse bastano due raggi con direzioni diverse. Nella costruzione della convergente si tracciano di solito il raggio centrale e quello che incide parallelo all’asse. Come controllo se ne può tracciare un terzo. Un raggio diretto attraverso il fuoco sul lato oggetto emerge parallelo all’asse. Questa regola si ottiene percorrendo all’indietro il cammino di un raggio parallelo che viene focalizzato dalla lente.

Dopo aver trovato l’intersezione dei primi due, si verifica che anche il terzo raggio o il suo prolungamento passi per lo stesso punto. Per un’immagine reale si intersecano i raggi uscenti. Per un’immagine virtuale si intersecano le rette prolungate verso il lato oggetto. Nel disegno i prolungamenti si tracciano tratteggiati. Il tratteggio distingue le rette usate per localizzare l’immagine dalle traiettorie effettivamente percorse dalla luce.
:::

## Equazione delle lenti sottili

::::teorema{#equazione titolo="Posizione e dimensione dell’immagine"}
Nella convenzione adottata un oggetto reale prima della lente ha $p>0$. Un’immagine reale dopo la lente ha $q>0$. Se si incontrano solo i prolungamenti verso il lato oggetto si ha $q<0$ e l’immagine è virtuale. Nel modello parassiale valgono

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=\frac{h_i}{h_o}=-\frac qp.
$$

L’ingrandimento trasversale $M$ ha segno negativo per un’immagine capovolta e positivo per un’immagine diritta. Il modulo indica il rapporto fra le altezze. Quando $p=f>0$, i raggi che partono dallo stesso punto dell’oggetto emergono paralleli tra loro. Manca una posizione immagine finita.

:::dimostrazione
Prendiamo la lente in $x=0$ e l’oggetto alto $h_o$ in $x=-p$. Il raggio centrale ha retta $y=-\dfrac{h_ox}{p}$. Il raggio che arriva parallelo all’asse incontra la lente a quota $h_o$ e dopo la lente segue $y=h_o(1-\dfrac{x}{f})$. All’intersezione in $x=q$, si uguagliano i due valori e si ottiene $-\dfrac{q}{p}=1-\dfrac{q}{f}$. Per un’immagine virtuale si usano le estensioni di queste stesse rette.
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

:::esempio{#ingrandimento-virtuale titolo="Lente convergente usata come lente di ingrandimento"}
Una convergente con focale $12\,\mathrm{cm}$ osserva un oggetto reale a $6\,\mathrm{cm}$. Il denominatore $p-f$ è negativo, quindi $q=-12\,\mathrm{cm}$. Il segno indica che l’immagine è sul lato oggetto. Poiché $M=-\dfrac{-12}{6}=+2$, è diritta e alta il doppio dell’oggetto. I raggi emergenti restano separati e i loro prolungamenti si incontrano nel punto dell’immagine virtuale.

La costruzione consente di distinguere due immagini diritte. Per una convergente con oggetto entro il fuoco l’immagine virtuale ha modulo di ingrandimento maggiore di uno. Per una divergente con oggetto reale, invece, l’immagine virtuale è più piccola. Il segno di $q$ stabilisce il lato in cui collocare l’immagine nella costruzione. Per sapere se è ridotta o ingrandita serve anche il modulo di $M$.

::grafico{assi=0 uguale=1 linee="-16,0 19,0;0,-7 0,7" vettori="-6,0,-6,2;-6,2,0,2;-6,2,0,0;0,2,18,-1;0,0,18,-6" segmenti="0,2,-12,4;0,0,-12,4;-12,0,-12,4" punti="-12,0,pieno,F′;12,0,pieno,F;-12,4,vuoto,I;-6,2,pieno,O" xmin=-17.5 xmax=20 ymin=-7.5 ymax=7.5 titolo="L’oggetto è entro il fuoco. I prolungamenti verso sinistra si incontrano nell’immagine virtuale I."}
:::

:::osservazione{#grafico-distanza-immagine titolo="Leggere come si muove il piano immagine"}
Per una convergente di focale $10\,\mathrm{cm}$ il grafico di $q$ in funzione di $p$ ha due rami. Se l’oggetto è a $5\,\mathrm{cm}$, $q=-10\,\mathrm{cm}$. A $15\,\mathrm{cm}$, invece, $q=30\,\mathrm{cm}$ e si può raccogliere l’immagine su uno schermo. Avvicinando l’oggetto alla focale dall’esterno, lo schermo va allontanato. Con $p=12\,\mathrm{cm}$ serve $q=60\,\mathrm{cm}$ e con $p=11\,\mathrm{cm}$ serve $q=110\,\mathrm{cm}$. Vicino al fuoco un centimetro di spostamento dell’oggetto può quindi richiedere decine di centimetri per rimettere a fuoco.

Quando $p$ cresce molto, $q$ si avvicina a $f$ dal lato di uscita. Quando invece $p=f$, il grafico non dà un valore finito. La sinistra rappresenta immagini virtuali, quindi le quote negative non sono posizioni in cui uno schermo possa raccoglierle.

::grafico{f="10*x/(x-10)" asintoti="x=10;y=10" punti="5,-10,pieno;15,30,pieno;20,20,pieno;30,15,pieno" xmin=0 xmax=36 ymin=-34 ymax=41 nomi="p (cm),q (cm)" titolo="La verticale a p = 10 cm separa i rami. La linea orizzontale indica il limite q = 10 cm per oggetti lontani."}
:::

## Potere diottrico e applicazioni

:::definizione{#diottrie titolo="L’inverso della distanza focale"}
Il **potere diottrico** $D$ di una lente sottile è il reciproco della distanza focale con segno, espressa in metri. Il valore numerico si misura in diottrie, con una diottria uguale a $\mathrm{m^{-1}}$. La stessa distanza focale espressa in centimetri va convertita prima di calcolare $D$.

$$
D=\frac{1}{f}.
$$

Per una convergente con $f=25\,\mathrm{cm}=0{,}25\,\mathrm m$ si ha $D=+4\,\mathrm{m^{-1}}$. Per una divergente con $f=-0{,}50\,\mathrm m$ si ha $D=-2\,\mathrm{m^{-1}}$. Con lenti sottili in contatto in aria, al primo ordine si sommano le potenze. Lenti separate richiedono invece un modello che includa la loro distanza.
:::

:::esempio{#banco-ottico titolo="Dalla focale alla posizione sul banco"}
Sul banco ottico, stabiliamo che la luce proceda da sinistra a destra. L’oggetto è alla coordinata $20\,\mathrm{cm}$ e la lente alla coordinata $50\,\mathrm{cm}$. La distanza oggetto da sostituire nella legge è $p=30\,\mathrm{cm}$. Se due lenti sottili in contatto hanno poteri $+8$ e $-3\,\mathrm{m^{-1}}$, il potere complessivo è $+5\,\mathrm{m^{-1}}$ e la focale equivalente vale $20\,\mathrm{cm}$.

Il calcolo con $f=20\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ dà $q=60\,\mathrm{cm}$. Si deve spostare lo schermo fino alla coordinata $110\,\mathrm{cm}$, perché $q$ è la distanza dalla lente, misurata sul lato d’uscita. Se il banco termina a $100\,\mathrm{cm}$, quella disposizione non permette di mettere a fuoco sul banco. Si può intervenire sulla posizione dell’oggetto o sulla scelta della focale.
:::

:::osservazione{#due-posizioni-lente titolo="Due posizioni nitide con oggetto e schermo fissi"}
Se oggetto e schermo sono a distanza fissa $L$ e la lente convergente si trova fra loro, $p+q=L$. La legge delle lenti dà $\dfrac{1}{f}=\dfrac{p+q}{pq}$. Aggiungendo il vincolo si ottiene $pq=fL$. Una coppia $(p,q)$ che soddisfa entrambe le condizioni resta una soluzione se si scambiano le due distanze.

Con una lente di focale $10\,\mathrm{cm}$ e distanza fra oggetto e schermo di $45\,\mathrm{cm}$ si trovano i valori $15\,\mathrm{cm}$ e $30\,\mathrm{cm}$. La loro somma è $45\,\mathrm{cm}$ e il prodotto è $450\,\mathrm{cm^2}$. Collocando la lente nella prima posizione si ottiene un’immagine capovolta con altezza in modulo doppia dell’oggetto. Nella seconda posizione si ottiene un’immagine più piccola, alta la metà dell’oggetto.

Il massimo prodotto di due distanze positive a somma fissata vale $\dfrac{L^2}{4}$, quando sono uguali. Quindi occorre $L\geq4f$ per trovare almeno una posizione nitida. All’uguaglianza c’è una sola posizione, a metà fra oggetto e schermo.
:::
