---
titolo: Teorema di Bernoulli e carico totale
sommario: Le tre altezze che compongono il carico totale, il teorema di Bernoulli per il fluido perfetto e la sua estensione alle correnti reali con la perdita di carico, la piezometrica e la linea dei carichi totali, le applicazioni ai piezometri, al tubo di Pitot, al venturimetro, all'efflusso da un serbatoio e al limite di aspirazione.
---

## Le tre altezze e il carico totale

In un fluido in quiete la somma $z + \dfrac{p}{\gamma}$ ha lo stesso valore in tutti i punti. Quando il fluido è in moto quella somma cambia da un punto all'altro, e per ritrovare una quantità costante si deve aggiungere un terzo termine, legato alla velocità.

:::richiamo{#legge-di-stevin titolo="Legge di Stevin"}
In un fluido pesante incomprimibile in quiete, di peso specifico $\gamma$, la pressione cresce linearmente con la profondità e la somma della quota geodetica e dell'altezza piezometrica è costante in tutto il fluido:
$$
z + \frac{p}{\gamma} = \text{costante} .
$$
Si rimanda all'argomento sulle proprietà dei fluidi e la statica dei fluidi.
:::

:::definizione{#carico-piezometrico titolo="Quota geodetica, altezza piezometrica e carico piezometrico"}
Si fissa un piano orizzontale di riferimento. La **quota geodetica** $z$ di un punto è la sua distanza da quel piano, misurata sulla verticale e presa positiva verso l'alto. L'**altezza piezometrica** del punto è il rapporto $\dfrac{p}{\gamma}$ fra la pressione e il peso specifico del fluido, cioè l'altezza della colonna di fluido che produce la pressione $p$. La loro somma
$$
h = z + \frac{p}{\gamma}
$$
si chiama **carico piezometrico** del punto e si misura in metri.

Le pressioni si intendono relative alla pressione atmosferica, quindi $\dfrac{p}{\gamma}$ è negativa nei punti in cui la pressione è minore di quella atmosferica. Il carico piezometrico dipende dal piano di riferimento scelto, mentre la differenza dei carichi piezometrici di due punti non dipende da quella scelta.
:::

:::definizione{#carico-totale titolo="Altezza cinetica e carico totale"}
Sia $v$ la velocità di una particella di fluido nel punto considerato. La quantità
$$
\frac{v^2}{2g}
$$
si chiama **altezza cinetica** del punto, ed è l'altezza da cui un grave deve cadere nel vuoto per acquistare la velocità $v$. La somma delle tre altezze
$$
H = z + \frac{p}{\gamma} + \frac{v^2}{2g}
$$
si chiama **carico totale** del punto e si misura in metri.

Ciascuno dei tre termini è un'energia per unità di peso di fluido. La quota geodetica è l'energia potenziale di posizione, l'altezza piezometrica è il lavoro che le forze di pressione compiono per spingere l'unità di peso attraverso la sezione, l'altezza cinetica è l'energia cinetica. Il carico totale è quindi l'energia meccanica posseduta dall'unità di peso di fluido che transita per quel punto, ed è la grandezza il cui bilancio governa tutto lo studio delle correnti in pressione. In una condotta con l'asse a $z = 4{,}00\,\mathrm{m}$, pressione relativa $p = 150\,\mathrm{kPa}$ e velocità $v = 1{,}91\,\mathrm{m/s}$ risulta $\dfrac{p}{\gamma} = 15{,}29\,\mathrm{m}$, $\dfrac{v^2}{2g} = 0{,}186\,\mathrm{m}$ e $H = 19{,}48\,\mathrm{m}$.

::schema{nodi="M,2,3,-;N,11,3,-" condotte="M-N,0.7" linee="4,3.35 4,6.6;4.6,3.35 4.6,6.6;6.6,7.4 6.6,2.9 5.8,2.9;6,7.4 6,3.1 5.8,3.1;0.6,0 12,0" piezometrica="1.6,6.6 11.4,6.6" energia="1.6,7.4 11.4,7.4" quote="8 0,8 3,z,-0.8;8 3,8 6.6,p/γ,-0.8;8 6.6,8 7.4,v²/2g,-0.8;11.4 0,11.4 7.4,H,-1" etichette="2.6,6.9,piezometrica;3.2,7.7,linea dei carichi totali;2,0.35,piano di riferimento" riferimento=0 titolo="Le tre altezze in una sezione di condotta: il piezometro misura $\dfrac{p}{\gamma}$, il tubo di Pitot aggiunge $\dfrac{v^2}{2g}$"}
:::

## Il teorema di Bernoulli

Il carico totale di una particella cambia, in generale, mentre la particella si muove. Il teorema che segue dice in quali ipotesi quel valore si conserva.

:::richiamo{#continuita titolo="Equazione di continuità"}
In un tubo di flusso percorso in moto permanente da un fluido incomprimibile la portata è la stessa in tutte le sezioni:
$$
Q = A_1 v_1 = A_2 v_2 .
$$
Si rimanda all'argomento sulla cinematica dei fluidi, la portata e l'equazione di continuità.
:::

::::teorema{#teorema-di-bernoulli titolo="Teorema di Bernoulli"}
Sia un fluido perfetto, cioè privo di viscosità, incomprimibile e di peso specifico $\gamma$, in moto permanente sotto l'azione del solo peso. Allora il carico totale è costante lungo ogni traiettoria, cioè, presi due punti $1$ e $2$ della stessa traiettoria, vale
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} .
$$

Il teorema lega fra loro quota, pressione e velocità, perciò due di queste grandezze determinano la terza. Insieme all'equazione di continuità, che lega le velocità alle aree, permette di calcolare la pressione in una sezione nota quella in un'altra sezione, e di ricavare la portata da una differenza di pressione misurata. In moto permanente le traiettorie coincidono con le linee di corrente, quindi il carico totale è costante lungo ogni linea di corrente.

::schema{acqua="1,2.4 4,2.8 7.4,4.8 10,5.4 10,4.5 7.4,3.9 4,1.9 1,1.5" linee="1,2.4 4,2.8 7.4,4.8 10,5.4;1,1.5 4,1.9 7.4,3.9 10,4.5;0,0 11,0" tratteggi="1,1.95 10,4.95;2.2,2.67 2.2,1.67;8.5,5.15 8.5,4.2" frecce="1.3,1.95,2.9,2.2,v_1;8.8,4.67,9.9,4.8,v_2" etichette="0.75,1.2,1;2.35,1.45,1';8.25,3.6,2;10.2,4.2,2';2.2,0.35,piano di riferimento" quote="1 0,1 1.95,z_1,-0.8;10 0,10 4.95,z_2,0.8" riferimento=0 titolo="Il tubo di flusso fra le sezioni $1$ e $2$: in $dt$ le due sezioni avanzano in $1'$ e $2'$ spazzando lo stesso volume"}

:::dimostrazione
L'idea è di applicare il teorema dell'energia cinetica al fluido contenuto in un tubo di flusso elementare costruito attorno alla traiettoria, e di osservare che in moto permanente tutto si riduce al trasferimento di una massa dalla prima alla seconda sezione.

Si considera il tubo di flusso che ha per asse la traiettoria e si prendono su di esso due sezioni normali, di aree $dA_1$ e $dA_2$, nei punti $1$ e $2$. Nell'intervallo $dt$ la prima sezione avanza in $1'$ di $v_1\,dt$ e la seconda avanza in $2'$ di $v_2\,dt$. I due volumi spazzati sono $dV_1 = v_1\,dA_1\,dt$ e $dV_2 = v_2\,dA_2\,dt$; per l'**equazione di continuità** risulta $v_1\,dA_1 = v_2\,dA_2$, quindi i due volumi sono uguali e si indicano con $dV$. La massa corrispondente è $dm = \rho\,dV$.

Il moto è permanente, perciò nella regione compresa fra $1'$ e $2$, comune alle due configurazioni, la distribuzione delle velocità e delle quote è la stessa prima e dopo lo spostamento. La variazione di energia cinetica del fluido considerato è quindi quella di una massa $dm$ che passa dal volume fra $1$ e $1'$ al volume fra $2$ e $2'$:
$$
dE_c = \frac{1}{2}\,\rho\,dV\,(v_2^2 - v_1^2) .
$$

Si calcola ora il lavoro delle forze esterne. Il fluido che segue preme sulla sezione $1$ con la forza $p_1\,dA_1$, diretta nel verso del moto, che compie il lavoro $p_1\,dA_1\,v_1\,dt = p_1\,dV$; il fluido che precede preme sulla sezione $2$ con la forza $p_2\,dA_2$, opposta al verso del moto, che compie il lavoro $-p_2\,dV$. Sulla superficie laterale del tubo di flusso la velocità è tangente alla superficie e, poiché il fluido è perfetto, la forza è la sola pressione, perpendicolare alla superficie; quindi la potenza di quelle forze è nulla e il loro lavoro è nullo. Il lavoro del peso è il prodotto del peso $\gamma\,dV$ per la diminuzione di quota, cioè $-\gamma\,dV\,(z_2 - z_1)$.

Per il teorema dell'energia cinetica la variazione di energia cinetica è uguale al lavoro totale, perciò
$$
\frac{1}{2}\,\rho\,dV\,(v_2^2 - v_1^2) = (p_1 - p_2)\,dV - \gamma\,dV\,(z_2 - z_1) .
$$
Si divide per $\gamma\,dV$ e si usa $\gamma = \rho g$:
$$
\frac{v_2^2 - v_1^2}{2g} = \frac{p_1 - p_2}{\gamma} - (z_2 - z_1) .
$$
Portando a primo membro i termini con l'indice $1$ si ottiene la tesi.
:::
::::

:::osservazione{#bernoulli-in-pressioni titolo="Le altre forme del trinomio"}
Moltiplicando il carico totale per $\gamma$ si ottiene un'energia per unità di volume, e la relazione diventa
$$
p_1 + \gamma z_1 + \frac{1}{2}\rho v_1^2 = p_2 + \gamma z_2 + \frac{1}{2}\rho v_2^2 ,
$$
che è la forma usata in Fisica 1, dove ogni termine ha le dimensioni di una pressione; il termine $\dfrac{1}{2}\rho v^2$ si chiama *pressione dinamica*. Nell'Idraulica si preferisce la forma in altezze, perché i tre termini si misurano in metri, si leggono su uno schema in scala e si confrontano direttamente con i dislivelli geometrici dell'impianto. Per il fluido in quiete si ha $v_1 = v_2 = 0$ e la relazione si riduce alla **legge di Stevin**.
:::

## Piezometrica e linea dei carichi totali

Le due somme parziali del trinomio si rappresentano come linee disegnate sopra il profilo della condotta, e su quelle linee si legge lo stato della corrente in ogni sezione.

:::definizione{#piezometrica titolo="Piezometrica"}
La **piezometrica** è la linea che ha per ordinata, in ogni sezione, il carico piezometrico $h = z + \dfrac{p}{\gamma}$ della corrente in quella sezione. La sua distanza verticale dall'asse della condotta è l'altezza piezometrica $\dfrac{p}{\gamma}$, quindi la piezometrica sta sopra l'asse dove la pressione relativa è positiva e sotto l'asse dove è negativa. Nel serbatoio alimentatore la piezometrica coincide con il piano dei carichi idrostatici, cioè con il piano orizzontale passante per il pelo libero, perché lì la velocità è trascurabile e la pressione relativa è nulla sulla superficie.
:::

:::definizione{#linea-dei-carichi-totali titolo="Linea dei carichi totali"}
La **linea dei carichi totali** è la linea che ha per ordinata, in ogni sezione, il carico totale $H$ della corrente. Sta sempre sopra la piezometrica, alla distanza verticale $\dfrac{v^2}{2g}$, perché l'altezza cinetica è positiva. Per il teorema di Bernoulli la linea dei carichi totali di un fluido perfetto è orizzontale.
:::

:::osservazione{#lettura-delle-linee titolo="Lettura delle due linee"}
Dalle due linee si leggono tutte le grandezze della corrente, e il disegno sostituisce una tabella di valori.

- La distanza verticale fra la linea dei carichi totali e la piezometrica è $\dfrac{v^2}{2g}$, quindi dove le due linee si avvicinano la corrente è più lenta. In una condotta di diametro costante la portata è la stessa in ogni sezione, perciò l'altezza cinetica è costante e le due linee sono parallele.
- La distanza verticale fra la piezometrica e l'asse della condotta è $\dfrac{p}{\gamma}$, e si legge in metri di colonna d'acqua.
- La pendenza della linea dei carichi totali nel verso del moto è la perdita di carico per unità di lunghezza.
- Dove la condotta cambia diametro l'altezza cinetica cambia, quindi la piezometrica presenta un salto. Al passaggio a un diametro minore il salto è verso il basso, perché la corrente accelera e parte del carico piezometrico si trasforma in altezza cinetica.

::schema{acqua="0.2,0.6 2.4,0.6 2.4,9 0.2,9;15,0.6 18.4,0.6 18.4,5.4 15,5.4" solidi="0,0 2.6,0 2.6,0.6 0,0.6;0,0 0.2,0 0.2,9.6 0,9.6;2.4,0.6 2.6,0.6 2.6,3.65 2.4,3.65;2.4,4.35 2.6,4.35 2.6,9.6 2.4,9.6;14.8,0 18.6,0 18.6,0.6 14.8,0.6;14.8,0.6 15,0.6 15,3.65 14.8,3.65;14.8,4.35 15,4.35 15,6 14.8,6;18.4,0 18.6,0 18.6,6 18.4,6" pelo="0.2,2.4,9;15,18.4,5.4" condotte="2.6 4-15 4,0.7" piezometrica="2.6,9 2.7,8.55 15,5.4" energia="2.6,9 2.7,8.85 15,5.7" quote="8 4,8 7.19,p/γ,0;12 6.17,12 6.47,v²/2g,1.2" etichette="6.2,8.6,linea dei carichi totali;5.6,7,piezometrica;1.3,9.5,A;16.7,5.9,B" riferimento=0 titolo="Condotta che collega due serbatoi: la linea dei carichi totali scende nel verso del moto e la distanza dalla piezometrica è l'altezza cinetica"}
:::

:::attenzione
Quando la piezometrica scende sotto l'asse della condotta la pressione relativa è negativa, e il tratto corrispondente lavora in depressione. In una condotta che scavalca un rilievo a $2{,}00\,\mathrm{m}$ sopra il pelo libero del serbatoio di monte, con perdita di carico fino al colmo pari a $1{,}60\,\mathrm{m}$ e altezza cinetica $0{,}20\,\mathrm{m}$, il carico piezometrico nel colmo vale $-1{,}80\,\mathrm{m}$ rispetto al pelo libero, quindi la pressione relativa è $\dfrac{p}{\gamma} = -3{,}80\,\mathrm{m}$, cioè $-37{,}3\,\mathrm{kPa}$. La condotta funziona, perché la pressione assoluta resta positiva, ma va verificata rispetto alla tensione di vapore.
:::

## Correnti lineari e coefficiente di ragguaglio

Il teorema di Bernoulli vale lungo una traiettoria, mentre nelle applicazioni interessa l'intera corrente che attraversa una sezione, nella quale la velocità varia da punto a punto.

:::richiamo{#coefficiente-di-ragguaglio titolo="Coefficiente di ragguaglio delle potenze cinetiche"}
Sia $A$ l'area della sezione trasversale di una corrente, $v$ la velocità locale e $V = \dfrac{Q}{A}$ la velocità media. Il coefficiente
$$
\alpha = \frac{1}{A\,V^3}\int_A v^3\,dA
$$
vale $1$ se la velocità è uniforme e supera $1$ in ogni altro caso. Per il moto turbolento nelle condotte circolari vale fra $1{,}03$ e $1{,}10$, per il moto laminare vale $2$. Si rimanda all'argomento sulla cinematica dei fluidi, la portata e l'equazione di continuità.
:::

::::teorema{#bernoulli-per-correnti titolo="Teorema di Bernoulli per una corrente lineare"}
Sia una corrente lineare, cioè una corrente le cui linee di corrente sono rettilinee e parallele, o di curvatura trascurabile, di un fluido perfetto incomprimibile in moto permanente. Allora nella sezione trasversale la distribuzione delle pressioni è idrostatica, cioè $z + \dfrac{p}{\gamma}$ ha lo stesso valore $h$ in tutti i punti della sezione, e il carico totale della corrente, definito come potenza per unità di peso transitante,
$$
H = h + \alpha\,\frac{V^2}{2g} = z + \frac{p}{\gamma} + \alpha\,\frac{V^2}{2g} ,
$$
ha lo stesso valore in due sezioni qualsiasi.

La grandezza $z + \dfrac{p}{\gamma}$ si può calcolare in un punto qualsiasi della sezione, per esempio sull'asse della condotta o sul pelo libero di un canale, e il risultato non cambia. Nelle condotte in pressione si assume $\alpha = 1$, perché lo scostamento da $1$ incide sull'altezza cinetica, che nei problemi di condotta è una frazione piccola del carico totale; da qui in avanti si scrive $H = z + \dfrac{p}{\gamma} + \dfrac{v^2}{2g}$ intendendo per $v$ la velocità media.

:::dimostrazione
Le linee di corrente sono rettilinee e parallele, quindi l'accelerazione nella direzione normale alle linee di corrente è nulla. Lungo quella direzione agiscono il peso e le forze di pressione, perciò l'equilibrio è quello di un fluido in quiete e per la **legge di Stevin** la somma $z + \dfrac{p}{\gamma}$ è costante sulla sezione; si indica quel valore comune con $h$.

La potenza transitante attraverso la sezione è l'integrale del carico totale locale moltiplicato per il peso che passa nell'unità di tempo attraverso l'elemento $dA$, cioè per $\gamma\,v\,dA$:
$$
P = \int_A \gamma\left(h + \frac{v^2}{2g}\right) v\,dA
= \gamma\,h\int_A v\,dA + \frac{\gamma}{2g}\int_A v^3\,dA .
$$
Il primo integrale è la portata $Q = V A$ e il secondo vale $\alpha\,V^3 A$ per la definizione del **coefficiente di ragguaglio**, quindi
$$
P = \gamma\,Q\,h + \frac{\gamma}{2g}\,\alpha\,V^3 A = \gamma\,Q\left(h + \alpha\,\frac{V^2}{2g}\right) .
$$
Dividendo per il peso $\gamma Q$ che transita nell'unità di tempo si ottiene l'espressione di $H$. Il fluido è perfetto, quindi per il **teorema di Bernoulli** il carico totale è costante su ogni traiettoria e, poiché la potenza che entra da una sezione esce dall'altra, il valore di $H$ è lo stesso nelle due sezioni.
:::
::::

## Correnti reali e perdita di carico

Nei fluidi reali la viscosità produce sforzi tangenziali, il cui lavoro è negativo e si trasforma in calore. Il carico totale allora diminuisce nel verso del moto.

:::definizione{#perdita-di-carico titolo="Perdita di carico"}
Siano $1$ e $2$ due sezioni di una corrente, con $2$ a valle di $1$. La differenza
$$
\Delta H_{1,2} = H_1 - H_2
$$
si chiama **perdita di carico** fra le due sezioni e si misura in metri. È l'energia meccanica che l'unità di peso di fluido perde nel percorso, trasformata in calore dagli sforzi viscosi. La perdita di carico dovuta alla resistenza lungo le pareti di un tratto rettilineo si dice *continua* e si scrive $\Delta H = J L$, dove $L$ è la lunghezza del tratto e $J$, adimensionale, è la **cadente**; la perdita prodotta da una singolarità, come un imbocco, una curva o una valvola, si dice *localizzata*. Il calcolo di $J$ e dei coefficienti delle perdite localizzate è trattato nell'argomento sulle perdite di carico distribuite e localizzate.
:::

::::teorema{#bernoulli-fluidi-reali titolo="Teorema di Bernoulli per i fluidi reali"}
Sia una corrente lineare di un fluido reale incomprimibile in moto permanente, e siano $1$ e $2$ due sue sezioni, con $2$ a valle di $1$. Allora
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} + \Delta H_{1,2} ,
$$
con $\Delta H_{1,2} \geq 0$.

La relazione, insieme all'equazione di continuità, è lo strumento con cui si risolvono i problemi delle condotte in pressione. Note le quote dei peli liberi di due serbatoi e la legge che lega la perdita alla portata, l'equazione determina la portata; nota la portata, determina la pressione in ogni sezione. Per una condotta che collega due serbatoi con dislivello $12{,}00\,\mathrm{m}$, nella quale la perdita complessiva vale $40\,\dfrac{v^2}{2g}$, risulta $\dfrac{v^2}{2g} = 0{,}30\,\mathrm{m}$ e quindi $v = 2{,}43\,\mathrm{m/s}$.

:::dimostrazione
Si ripete il bilancio di energia della dimostrazione del **teorema di Bernoulli**, aggiungendo il lavoro delle forze viscose che il fluido esterno al volume considerato e le pareti esercitano sulla sua superficie laterale. Si indica con $L_a$ quel lavoro nell'intervallo $dt$. Il teorema dell'energia cinetica dà allora
$$
\gamma\,Q\,dt\,(H_2 - H_1) = L_a ,
$$
dove $\gamma\,Q\,dt$ è il peso transitato. Si pone $\Delta H_{1,2} = -\dfrac{L_a}{\gamma\,Q\,dt}$ e si ottiene la relazione dell'enunciato.

Gli sforzi tangenziali di origine viscosa si oppongono al moto relativo degli strati di fluido, perciò la loro potenza è negativa, cioè $L_a \leq 0$ e $\Delta H_{1,2} \geq 0$; l'uguaglianza vale soltanto per il fluido perfetto.
:::
::::

:::attenzione
La perdita di carico si sottrae sempre procedendo da monte verso valle, qualunque sia la geometria della condotta. In una condotta che sale, il carico totale diminuisce comunque nel verso del moto, mentre il carico piezometrico può crescere o diminuire. Per una corrente che passa da $z_1 = 2{,}00\,\mathrm{m}$ con $\dfrac{p_1}{\gamma} = 28{,}54\,\mathrm{m}$ e $\dfrac{v_1^2}{2g} = 0{,}053\,\mathrm{m}$ a $z_2 = 6{,}50\,\mathrm{m}$ con $\dfrac{p_2}{\gamma} = 21{,}41\,\mathrm{m}$ e $\dfrac{v_2^2}{2g} = 0{,}408\,\mathrm{m}$, i carichi totali valgono $H_1 = 30{,}595\,\mathrm{m}$ e $H_2 = 28{,}315\,\mathrm{m}$, quindi la perdita è $2{,}28\,\mathrm{m}$ e la corrente va dalla sezione $1$ alla sezione $2$, nonostante la quota cresca.
:::

## Piezometri e tubo di Pitot

Le due linee si misurano punto per punto, con due strumenti che differiscono per il modo in cui la presa è orientata rispetto alla corrente.

:::definizione{#piezometro titolo="Piezometro"}
Il **piezometro** è un tubo trasparente, aperto all'atmosfera, inserito nella parete della condotta con l'asse perpendicolare alla corrente e con il bordo della presa a filo della parete interna. Il liquido sale nel tubo fino alla quota in cui la pressione alla base uguaglia quella della corrente, perciò il livello raggiunto segna il carico piezometrico $h = z + \dfrac{p}{\gamma}$ della sezione. Il piezometro misura quindi direttamente un punto della piezometrica. Per pressioni elevate la colonna richiesta diventa impraticabile e si usa un manometro, mentre per pressioni negative il piezometro aspira aria e si usa un manometro differenziale.
:::

::::teorema{#tubo-di-pitot titolo="Tubo di Pitot"}
Sia un tubo con la presa rivolta contro corrente, immerso in una corrente di velocità $v$ e collegato all'atmosfera. Il liquido che riempie il tubo è in quiete, quindi la particella che arriva alla presa si ferma, e il punto della presa si chiama *punto di arresto*. Allora il livello raggiunto nel tubo supera quello del piezometro posto nella stessa sezione della quantità
$$
\Delta = \frac{v^2}{2g} ,
\qquad\text{da cui}\qquad
v = \sqrt{2 g\,\Delta} .
$$

Il tubo di Pitot misura quindi la velocità locale della corrente attraverso una misura di lunghezza, e la coppia piezometro-Pitot dà in una sola lettura il carico piezometrico e il carico totale. Nelle condotte i due tubi sono riuniti in un unico strumento, detto *tubo di Pitot-Prandtl*, con una presa frontale e prese laterali collegate ai due rami di un manometro differenziale. Con un dislivello $\Delta = 0{,}22\,\mathrm{m}$ di colonna d'acqua risulta $v = \sqrt{2 \cdot 9{,}81 \cdot 0{,}22} = 2{,}08\,\mathrm{m/s}$.

::schema{acqua="0,0 13,0 13,3.2 0,3.2" solidi="-0.5,-0.7 13.5,-0.7 13.5,0 -0.5,0" pelo="0,13,3.2" linee="4.6,1.2 4.6,5;5.2,1.2 5.2,5;8.2,5.9 8.2,1.2 7,1.2;7.6,5.9 7.6,1.5 7,1.5" frecce="1.2,1.4,3,1.4,v" quote="10.6 4.3,10.6 5.3,Δ,0.9" etichette="4.9,0.75,P;4.9,6.3,piezometro;7.9,6.6,Pitot" piezometrica="3.6,4.3 11.6,4.3" energia="3.6,5.3 11.6,5.3" riferimento=0 titolo="Piezometro e tubo di Pitot nella stessa sezione: il dislivello fra i due livelli è l'altezza cinetica"}

:::dimostrazione
Si applica il **teorema di Bernoulli** lungo la linea di corrente che termina nel punto di arresto $A$, fra un punto $P$ che la precede, abbastanza lontano dallo strumento perché la corrente non sia ancora perturbata, e il punto $A$ stesso. I due punti stanno alla stessa quota $z$, la velocità in $P$ vale $v$ e quella in $A$ è nulla, quindi
$$
z + \frac{p_P}{\gamma} + \frac{v^2}{2g} = z + \frac{p_A}{\gamma} ,
$$
da cui $\dfrac{p_A - p_P}{\gamma} = \dfrac{v^2}{2g}$. Il liquido nei due tubi è in quiete, perciò per la **legge di Stevin** il livello in ciascun tubo sta alla quota $z + \dfrac{p}{\gamma}$ della rispettiva presa; la differenza dei due livelli è quindi $\dfrac{p_A - p_P}{\gamma}$, cioè $\dfrac{v^2}{2g}$. Risolvendo rispetto a $v$ si ottiene la tesi.
:::
::::

## Misuratori di portata a strozzatura

Una strozzatura accelera la corrente e, per il teorema di Bernoulli, ne abbassa il carico piezometrico, quindi la differenza di livello fra due prese diventa una misura della portata.

:::richiamo{#manometro-differenziale titolo="Manometro differenziale"}
Un manometro differenziale a $U$ collega due prese di una corrente di liquido di peso specifico $\gamma$ e contiene un liquido manometrico di peso specifico $\gamma_m > \gamma$ immiscibile con il primo. Se il dislivello fra i due menischi è $\Delta$, la differenza dei carichi piezometrici delle due prese vale
$$
h_1 - h_2 = \Delta\left(\frac{\gamma_m}{\gamma} - 1\right) ,
$$
indipendentemente dall'inclinazione del tratto e dalle quote delle prese. Per il mercurio $\dfrac{\gamma_m}{\gamma} = 13{,}6$, quindi il fattore vale $12{,}6$. Si rimanda all'argomento sulle proprietà dei fluidi e la statica dei fluidi.
:::

::::teorema{#tubo-di-venturi titolo="Tubo di Venturi"}
Sia un tratto di condotta formato da un convergente, da una strozzatura di area $A_2$ e da un divergente, inserito in una condotta di area $A_1 > A_2$ e percorso da un fluido perfetto incomprimibile in moto permanente. Se $\Delta h = h_1 - h_2$ è la differenza fra i carichi piezometrici della sezione di monte e della strozzatura, la portata vale
$$
Q = \frac{A_2}{\sqrt{1 - \left(\dfrac{A_2}{A_1}\right)^2}}\;\sqrt{2 g\,\Delta h} .
$$

La portata si ottiene quindi da una sola misura di dislivello, con due piezometri se la pressione lo consente oppure con un manometro differenziale. La formula non contiene le quote delle due sezioni, perciò il venturimetro funziona allo stesso modo in orizzontale, in verticale o inclinato. Con $D_1 = 200\,\mathrm{mm}$, $D_2 = 100\,\mathrm{mm}$ e $\Delta h = 0{,}85\,\mathrm{m}$ risulta $Q = 33{,}1\,\mathrm{L/s}$.

::schema{acqua="0,0.6 3,0.6 4.4,0.3 6,0.3 7.4,0.6 11,0.6 11,-0.6 7.4,-0.6 6,-0.3 4.4,-0.3 3,-0.6 0,-0.6" linee="0,0.6 3,0.6 4.4,0.3 6,0.3 7.4,0.6 11,0.6;0,-0.6 3,-0.6 4.4,-0.3 6,-0.3 7.4,-0.6 11,-0.6;1.5,0.6 1.5,3.6 2.1,3.6 2.1,0.6;5,0.3 5,2.9 5.6,2.9 5.6,0.3" tratteggi="1.5,0 1.5,0.6;5,0 5,0.3;0,0 11,0" etichette="1.2,-0.95,1;4.7,-0.95,2;1.1,1.6,D_1;4.6,1.3,D_2" quote="2.1 2.9,5 2.9,Δh,-0.45" riferimento=0 titolo="Venturimetro: la strozzatura accelera la corrente e abbassa il carico piezometrico di $\Delta h$"}

:::dimostrazione
Per l'**equazione di continuità** $v_1 A_1 = v_2 A_2 = Q$, quindi $v_1 = \dfrac{Q}{A_1}$ e $v_2 = \dfrac{Q}{A_2}$. Le due sezioni appartengono a una corrente lineare, perciò si applica il **teorema di Bernoulli per una corrente lineare** con $\alpha = 1$:
$$
h_1 + \frac{v_1^2}{2g} = h_2 + \frac{v_2^2}{2g} .
$$
Sostituendo le velocità si ottiene
$$
\Delta h = h_1 - h_2 = \frac{Q^2}{2g}\left(\frac{1}{A_2^2} - \frac{1}{A_1^2}\right)
= \frac{Q^2}{2g\,A_2^2}\left(1 - \left(\frac{A_2}{A_1}\right)^2\right) .
$$
Poiché $A_2 < A_1$, il fattore $1 - \left(\dfrac{A_2}{A_1}\right)^2$ è positivo, quindi si risolve rispetto a $Q$ e si ottiene la tesi.
:::
::::

:::osservazione{#diaframma titolo="Diaframma e coefficiente di efflusso"}
Il diaframma è un disco forato inserito fra due flange della condotta, con le prese di pressione a monte e a valle del disco. È più economico del venturimetro e dissipa molto di più, perché la vena si contrae oltre il foro e poi si riallarga bruscamente. La portata si scrive nella stessa forma della formula del venturimetro, moltiplicata per un **coefficiente di efflusso** $C$ che tiene conto della contrazione della vena e della dissipazione:
$$
Q = C\,\frac{A_2}{\sqrt{1 - \left(\dfrac{A_2}{A_1}\right)^2}}\;\sqrt{2 g\,\Delta h} .
$$
Il coefficiente si ricava da misure di laboratorio e dipende dal rapporto dei diametri e dal numero di Reynolds; i valori e il campo di validità sono raccolti nelle norme tecniche sui misuratori a strozzatura. In condizioni correnti vale circa $0{,}98$ per il venturimetro e circa $0{,}60$ per il diaframma. Nei problemi in cui il coefficiente non è assegnato si assume $C = 1$, cioè si tratta il misuratore come ideale.
:::

## Efflusso da un serbatoio e condotte fra serbatoi

Il teorema di Bernoulli si applica anche quando una delle due sezioni è il pelo libero di un serbatoio, dove la pressione relativa è nulla e la velocità è trascurabile.

::::teorema{#efflusso-da-un-serbatoio titolo="Efflusso da un serbatoio a livello costante"}
Sia un serbatoio di grandi dimensioni, aperto all'atmosfera e mantenuto a livello costante, dal quale il liquido esce attraverso un breve convergente di area $A$ posto alla profondità $h$ sotto il pelo libero. Se le perdite di carico sono trascurabili, la velocità di efflusso e la portata valgono
$$
v = \sqrt{2 g h} ,
\qquad
Q = A\,\sqrt{2 g h} .
$$

La velocità di efflusso è quella che un grave acquista cadendo nel vuoto dall'altezza $h$, e non dipende dalla densità del liquido. La formula si usa per calcolare la portata di uno scarico di fondo, la gittata di un getto e la velocità all'uscita di un ugello; da un convergente di diametro $60\,\mathrm{mm}$ posto a $4{,}50\,\mathrm{m}$ di profondità escono $26{,}6\,\mathrm{L/s}$. Se la luce è praticata in parete sottile la vena si contrae e la portata effettiva è minore, perciò la formula si corregge con un coefficiente di portata; la questione è trattata nell'argomento sulla foronomia.

::schema{acqua="0.2,0.5 5,0.5 5,7.5 0.2,7.5;5,1.1 6.1,1.1 6.1,1.7 5,1.7" solidi="0,0 5.2,0 5.2,0.5 0,0.5;0,0 0.2,0 0.2,8 0,8;5,0.5 5.2,0.5 5.2,1.1 5,1.1;5,1.7 5.2,1.7 5.2,8 5,8" pelo="0.2,5,7.5" linee="5.2,1.1 6.1,1.25 6.1,1.55 5.2,1.7" frecce="6.3,1.4,7.5,1.4,v" quote="2.6 1.4,2.6 7.5,h,0" etichette="2.6,8,pelo libero" riferimento=0 titolo="Efflusso da un convergente alla profondità $h$: il carico totale del pelo libero si trasforma in altezza cinetica"}

:::dimostrazione
Si prende il piano di riferimento passante per l'asse del convergente e si applica il **teorema di Bernoulli** fra un punto $S$ del pelo libero e la sezione di uscita $U$. In $S$ la quota è $h$, la pressione relativa è nulla e la velocità è trascurabile, perché la sezione del serbatoio è molto maggiore di quella della luce e per l'**equazione di continuità** la velocità di abbassamento del pelo libero è nella stessa proporzione. In $U$ la quota è nulla e la vena è a contatto con l'atmosfera, quindi la pressione relativa è nulla. Perciò
$$
h + 0 + 0 = 0 + 0 + \frac{v^2}{2g} ,
$$
da cui $v = \sqrt{2 g h}$. La portata segue dalla definizione $Q = A v$.
:::
::::

:::osservazione{#condotta-tra-due-serbatoi titolo="Condotta che collega due serbatoi"}
Due serbatoi a livello costante sono collegati da una condotta, e il dislivello fra i peli liberi è $\Delta z$. Si applica il teorema di Bernoulli per i fluidi reali fra i due peli liberi. In entrambi la pressione relativa è nulla e la velocità è trascurabile, quindi i carichi totali coincidono con le quote dei peli liberi e
$$
\Delta z = \Delta H_{1,2} .
$$
Tutto il dislivello è speso in perdite di carico. Se la perdita complessiva si scrive nella forma $\Delta H = K\,\dfrac{v^2}{2g}$, con $K$ somma dei coefficienti delle perdite continue e localizzate, risulta $\dfrac{v^2}{2g} = \dfrac{\Delta z}{K}$, da cui la velocità e la portata. Quando invece la condotta scarica in atmosfera, l'altezza cinetica della sezione di sbocco resta nel bilancio e il dislivello fra il pelo libero e l'asse dello sbocco vale $\dfrac{v^2}{2g} + \Delta H$. Il dimensionamento di queste condotte è trattato nell'argomento sulle lunghe condotte e gli impianti di sollevamento.
:::

## Cavitazione e limite di aspirazione

Il carico piezometrico può scendere sotto l'asse della condotta, ma non indefinitamente, perché esiste un valore della pressione al di sotto del quale il liquido non resta liquido.

:::definizione{#tensione-di-vapore titolo="Tensione di vapore"}
La **tensione di vapore** $p_v$ di un liquido è la pressione assoluta alla quale il liquido e il suo vapore sono in equilibrio alla temperatura considerata. Se in un punto della corrente la pressione assoluta scende fino a $p_v$, il liquido evapora e si formano bolle di vapore. Per l'acqua a $20\,^\circ\mathrm{C}$ risulta $p_v = 2{,}34\,\mathrm{kPa}$, cioè $\dfrac{p_v}{\gamma} = 0{,}24\,\mathrm{m}$ di colonna d'acqua; il valore cresce rapidamente con la temperatura. La pressione atmosferica al livello del mare vale $101{,}3\,\mathrm{kPa}$, cioè $10{,}33\,\mathrm{m}$ di colonna d'acqua.
:::

:::osservazione{#cavitazione titolo="Cavitazione"}
Le bolle formate dove la pressione è minima vengono trasportate dalla corrente e, raggiunta una zona a pressione maggiore, collassano in tempi brevissimi. Il fenomeno si chiama **cavitazione** e produce rumore, vibrazioni, riduzione della portata ed erosione delle pareti metalliche, perché il collasso avviene a contatto con la parete e vi applica pressioni elevatissime. I punti da controllare sono quelli in cui il carico piezometrico è più basso rispetto all'asse: il colmo di un sifone, la sezione di monte di una pompa, la strozzatura di un venturimetro.
:::

:::osservazione{#altezza-di-aspirazione titolo="Limite di aspirazione"}
Una pompa posta alla quota $z_a$ sopra il pelo libero del serbatoio da cui aspira riceve l'acqua con il carico totale ridotto dal dislivello e dalle perdite nella condotta di aspirazione. Scrivendo il bilancio in pressioni assolute fra il pelo libero e la sezione di ingresso della pompa si ottiene
$$
\frac{p_{\mathrm{ass}}}{\gamma} = \frac{p_{\mathrm{atm}}}{\gamma} - z_a - \frac{v^2}{2g} - \Delta H .
$$
La condizione $\dfrac{p_{\mathrm{ass}}}{\gamma} > \dfrac{p_v}{\gamma}$ dà quindi
$$
z_a < \frac{p_{\mathrm{atm}}}{\gamma} - \frac{p_v}{\gamma} - \frac{v^2}{2g} - \Delta H ,
$$
e il limite assoluto è $10{,}33 - 0{,}24 = 10{,}09\,\mathrm{m}$ per l'acqua a $20\,^\circ\mathrm{C}$ al livello del mare. Le perdite, l'altezza cinetica e il margine che il costruttore della pompa richiede riducono il valore ammissibile a qualche metro. Il margine richiesto dalla pompa, detto carico netto all'aspirazione, è trattato nell'argomento sulle lunghe condotte e gli impianti di sollevamento.

::schema{acqua="0.2,0.5 4.6,0.5 4.6,3 0.2,3" solidi="0,0 4.8,0 4.8,0.5 0,0.5;0,0 0.2,0 0.2,3.4 0,3.4;4.6,0 4.8,0 4.8,3.4 4.6,3.4" pelo="0.2,4.6,3" condotte="2.4 1.2-2.4 7.2-7.2 7.2,0.55" pompa="7.9,7.2,P" quote="1.2 3,1.2 7.2,z_a,0;6 2.45,6 7.2,p/γ,0" piezometrica="0.2,3 2.4,2.8 7.2,2.4" etichette="5.8,1.8,piezometrica;4.6,7.9,condotta di aspirazione" riferimento=0 titolo="Condotta di aspirazione: la piezometrica scende sotto l'asse e la pressione nella sezione di monte della pompa è la minima dell'impianto"}
:::
