---
titolo: "Correnti a pelo libero: moto uniforme ed energia specifica"
sommario: Gli elementi geometrici delle sezioni dei canali, il moto uniforme con le formule di Chézy e di Gauckler-Strickler, la scala delle portate, la sezione di massima efficienza idraulica, l'energia specifica con l'altezza critica, le correnti lente e veloci, la pendenza critica e la celerità delle piccole perturbazioni.
---

## Canali e correnti a pelo libero

Nelle condotte in pressione la sezione occupata dal fluido è imposta dalla parete. In un canale la superficie superiore della corrente è libera, quindi la forma della sezione bagnata dipende dall'altezza che l'acqua raggiunge, e questa altezza è una delle incognite del problema.

:::definizione{#corrente-a-pelo-libero titolo="Corrente a pelo libero"}
Una **corrente a pelo libero** è una corrente lineare la cui superficie superiore, detta *pelo libero*, è a contatto con l'atmosfera. Su quella superficie la pressione relativa è nulla, perciò, se la distribuzione delle pressioni nella sezione è idrostatica, il carico piezometrico di tutti i punti della sezione vale
$$
h_{\text{piez}} = z_f + h ,
$$
dove $z_f$ è la quota del fondo e $h$ l'altezza d'acqua misurata sulla verticale. Il pelo libero coincide quindi con la *piezometrica* della corrente, e la linea dei carichi totali sta sopra di esso dell'altezza cinetica $\dfrac{v^2}{2g}$.

Questa proprietà è la ragione per cui in un canale si ragiona sulle altezze d'acqua: assegnata la portata, conoscere $h$ in una sezione equivale a conoscere la pressione in tutti i suoi punti.
:::

:::definizione{#elementi-geometrici titolo="Elementi geometrici della sezione"}
Assegnata la forma della sezione trasversale di un canale e l'altezza d'acqua $h$, si definiscono:

- l'**area bagnata** $A(h)$, cioè l'area della parte di sezione occupata dall'acqua;
- il **contorno bagnato** $C(h)$, cioè la lunghezza della linea di contatto fra acqua e parete, misurata nella sezione e *senza* il pelo libero;
- il **raggio idraulico** $R = \dfrac{A}{C}$;
- la **larghezza del pelo libero** $B(h)$;
- l'**altezza media** $h_m = \dfrac{A}{B}$.

La velocità media è $v = \dfrac{Q}{A}$, per l'equazione di continuità. Il raggio idraulico entra nelle formule della resistenza al moto, perché misura quanta area di corrente è servita da ogni metro di parete; l'altezza media entra nel numero di Froude. Per una sezione rettangolare larga $b$ risulta $A = b h$, $C = b + 2h$, $B = b$ e $h_m = h$, quindi l'altezza media coincide con l'altezza d'acqua.

::schema{nodi="S,-2.1,1.4;T,5.1,1.4" nomi=0 acqua="0,0 3,0 5.1,1.4 -2.1,1.4" solidi="-4.5,1.9 -2.85,1.9 0,0 3,0 5.85,1.9 7.5,1.9 7.5,-0.7 -4.5,-0.7" pelo="-2.1,5.1,1.4,p_a = 0" quote="1.5 0,1.5 1.4,1.40 m,0;0 -0.7,3 -0.7,3.00 m,0.5;S,T,B,-0.5" riferimento=0 titolo="Sezione trapezia con $b = 3\,\mathrm{m}$, altezza d'acqua $h = 1{,}40\,\mathrm{m}$ e scarpa $m = 1{,}5$: $A = 7{,}14\,\mathrm{m^2}$, $C = 8{,}05\,\mathrm{m}$, $R = 0{,}887\,\mathrm{m}$, $B = 7{,}20\,\mathrm{m}$"}
:::

:::osservazione{#sezioni-usuali titolo="Sezioni usuali"}
Per le tre sezioni che si incontrano più spesso gli elementi geometrici si scrivono in funzione dell'altezza d'acqua.

- Sezione **rettangolare** di larghezza $b$:
$$
A = b\,h ,
\qquad
C = b + 2h ,
\qquad
B = b .
$$
- Sezione **trapezia** di larghezza del fondo $b$ e scarpa $m$, cioè con le sponde che avanzano di $m$ in orizzontale per ogni metro in verticale:
$$
A = (b + m\,h)\,h ,
\qquad
C = b + 2h\sqrt{1 + m^2} ,
\qquad
B = b + 2m\,h .
$$
- Sezione **circolare** di diametro $D$ parzialmente piena, con $\theta$ angolo al centro sotteso dal pelo libero:
$$
A = \frac{D^2}{8}\,(\theta - \sin\theta) ,
\qquad
C = \frac{D\,\theta}{2} ,
\qquad
B = D\sin\frac{\theta}{2} ,
\qquad
\cos\frac{\theta}{2} = 1 - \frac{2h}{D} .
$$

Nella sezione trapezia il contorno bagnato contiene le due sponde inclinate, lunghe $h\sqrt{1+m^2}$ ciascuna, mentre la larghezza del fondo compare una volta sola. Nella sezione circolare l'angolo $\theta$ si ricava dall'altezza d'acqua con la relazione scritta sopra, poi si sostituisce nelle prime tre formule: per $D = 1{,}20\,\mathrm{m}$ e $h = 0{,}65\,\mathrm{m}$ risulta $\theta = 3{,}308\,\mathrm{rad}$, quindi $A = 0{,}625\,\mathrm{m^2}$ e $R = 0{,}315\,\mathrm{m}$.

::schema{nodi="P,-0.598,0.05;Q,0.598,0.05" nomi=0 cerchi="0,0,0.6" acqua="-0.598,0.050 -0.593,-0.091 -0.555,-0.228 -0.486,-0.351 -0.391,-0.455 -0.273,-0.534 -0.140,-0.583 0.000,-0.600 0.140,-0.583 0.273,-0.534 0.391,-0.455 0.486,-0.351 0.555,-0.228 0.593,-0.091 0.598,0.050" linee="-0.598,0.05 0.598,0.05" quote="0 -0.6,0 0.05,0.65 m,-0.9;P,Q,B,-0.85" etichette="0.02,-0.2,θ" frecce="0,0,-0.58,0.1,;0,0,0.58,0.1," riferimento=0 titolo="Sezione circolare di diametro $D = 1{,}20\,\mathrm{m}$ parzialmente piena: l'angolo al centro $\theta$ sotteso dal pelo libero individua l'area bagnata"}
:::

## Moto uniforme

In un canale rettilineo di sezione costante e pendenza costante, abbastanza lungo perché gli effetti dell'imbocco e dello sbocco si esauriscano, la corrente assume la stessa altezza in tutte le sezioni.

:::definizione{#moto-uniforme titolo="Moto uniforme in un canale"}
Una corrente a pelo libero è in **moto uniforme** quando la portata è costante nel tempo e l'altezza d'acqua è la stessa in ogni sezione. L'altezza corrispondente si indica con $h_0$ e si dice *altezza di moto uniforme*. Poiché $A$ e quindi $v = \dfrac{Q}{A}$ non cambiano lungo il canale, il pelo libero, il fondo e la linea dei carichi totali sono tre rette parallele.

Il moto uniforme è la condizione a cui tende una corrente in un canale lungo e regolare, perciò l'altezza $h_0$ serve da riferimento in tutti i problemi di dimensionamento: si calcola una volta dalla portata di progetto e si confronta con l'altezza delle sponde.

::schema{nodi="M,0,1.6;N,10,1.0" nomi=0 acqua="0,0.6 10,0 10,1.0 0,1.6" solidi="0,0.6 10,0 10,-0.8 0,-0.8" linee="0,1.6 10,1.0" piezometrica="0,1.6 10,1.0" energia="0,2.2 10,1.6" quote="5.5 0.27,5.5 1.27,h_0,0.45;7.5 1.15,7.5 1.75,,0.35" etichette="2.4,2.4,linea dei carichi totali;2.1,1.15,pelo libero e piezometrica;8.3,1.25,altezza cinetica;6.6,-0.5,fondo con pendenza i" riferimento=0 titolo="Moto uniforme: fondo, pelo libero e linea dei carichi totali sono paralleli, quindi la cadente $J$ è uguale alla pendenza del fondo $i$"}
:::

:::richiamo{titolo="Equazione globale in moto permanente"}
Per un volume di controllo attraversato in moto permanente da una portata $Q$, con ingresso nella sezione $1$ e uscita nella sezione $2$,
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} ,
$$
dove $\vec{\Pi}_i = p_i A_i \hat{n}_i$ sono le spinte sulle sezioni, dirette verso l'interno del volume, $\vec{G}$ è il peso del volume e $\vec{R}$ la forza che le pareti esercitano sul fluido. Si rimanda all'argomento sull'equazione globale dell'equilibrio dinamico.
:::

::::teorema{#cadente-uguale-pendenza titolo="Cadente del moto uniforme"}
Sia una corrente a pelo libero in moto uniforme in un canale di pendenza del fondo $i$, sezione costante, area bagnata $A$, contorno bagnato $C$ e raggio idraulico $R$. Allora la cadente è uguale alla pendenza del fondo,
$$
J = i ,
$$
e lo sforzo tangenziale medio alla parete vale
$$
\tau_0 = \gamma\,R\,i .
$$

La prima uguaglianza trasforma un problema di resistenza al moto in un dato geometrico: la perdita di carico per unità di lunghezza è nota appena si conosce la pendenza del fondo. La seconda lega la pendenza allo sforzo che l'acqua esercita sul rivestimento, e si usa per verificare che il fondo non venga eroso. Per $R = 0{,}75\,\mathrm{m}$ e $i = 0{,}001$ risulta $\tau_0 = 9810 \cdot 0{,}75 \cdot 0{,}001\,\mathrm{Pa} = 7{,}36\,\mathrm{Pa}$.

:::dimostrazione
L'idea è di scrivere prima il bilancio dell'energia fra due sezioni, che dà la cadente, poi il bilancio della quantità di moto sullo stesso tratto, che dà lo sforzo alla parete.

Siano $1$ e $2$ due sezioni distanti $L$ lungo il canale, con la $2$ a valle. Il carico totale di una corrente a pelo libero è $H = z_f + h + \dfrac{v^2}{2g}$. In moto uniforme $h$ e $v$ sono uguali nelle due sezioni, perciò
$$
H_1 - H_2 = z_{f1} - z_{f2} = i\,L ,
$$
dato che $i$ è la pendenza del fondo. Per definizione di cadente $H_1 - H_2 = J\,L$, quindi $J\,L = i\,L$ e perciò $J = i$.

Si prenda ora come volume di controllo il tratto di corrente fra le due sezioni e si proietti l'equazione globale sulla direzione del moto, orientata verso valle. Le velocità nelle due sezioni sono uguali in modulo e direzione, quindi il primo membro è nullo. Le due sezioni hanno la stessa area e la stessa distribuzione di pressione, perciò le spinte $\vec{\Pi}_1$ e $\vec{\Pi}_2$ hanno lo stesso modulo e versi opposti, e la loro somma è nulla. Il peso del volume è $G = \gamma A L$ e la sua componente nella direzione del moto è $\gamma A L \sin i$. La forza delle pareti ha componente $-\tau_0\,C\,L$, perché lo sforzo tangenziale è opposto al moto e agisce su una superficie di area $C L$. La proiezione dell'equazione globale è quindi
$$
0 = \gamma\,A\,L\,\sin i - \tau_0\,C\,L ,
$$
da cui $\tau_0 = \gamma\,\dfrac{A}{C}\,\sin i = \gamma\,R\,\sin i$. Nei canali la pendenza è piccola, quindi $\sin i \simeq \tan i = i$ e si ottiene $\tau_0 = \gamma R i$.

::schema{nodi="A,2,2.0;B,6,1.4" nomi=0 acqua="0,1.0 8,0.2 8,1.4 0,2.2" solidi="0,1.0 8,0.2 8,-0.5 0,-0.5" linee="0,2.2 8,1.4" tratteggi="2,0.8 2,2.0;6,0.2 6,1.4" forze="4 1.25,0,-0.8,G" reazioni="4 0.72,-1.1,0.11,τ_0 C L;2 1.45,0.9,-0.09,Π_1;6 0.85,-0.9,0.09,Π_2" quote="2 -0.5,6 -0.5,L,0.5" riferimento=0 titolo="Volume di controllo di lunghezza $L$ in moto uniforme: le spinte sulle sezioni si elidono e la componente del peso equilibra lo sforzo alla parete"}
:::
::::

:::osservazione{#chezy-strickler titolo="Formule di Chézy e di Gauckler-Strickler"}
La resistenza al moto in un canale si esprime con le formule monomie ricavate dalle misure di laboratorio e di campo. La **formula di Chézy** scrive la velocità media come
$$
v = \chi\sqrt{R\,J} ,
$$
con $\chi$ coefficiente di Chézy, in $\mathrm{m^{1/2}/s}$. La **formula di Gauckler-Strickler** esprime $\chi = k_s R^{1/6}$ e, in moto uniforme, dove $J = i$, dà
$$
v = k_s\,R^{2/3}\,i^{1/2} ,
\qquad
Q = k_s\,A\,R^{2/3}\,i^{1/2} ,
$$
con $k_s$ in $\mathrm{m^{1/3}/s}$. Il coefficiente $n = \dfrac{1}{k_s}$ è il coefficiente di Manning. Valori di uso corrente: $k_s = 80 \div 90$ per il calcestruzzo liscio, $70 \div 75$ per il calcestruzzo gettato in opera, $50 \div 60$ per la muratura, $30 \div 40$ per un canale in terra, $20 \div 30$ per un alveo naturale con vegetazione.

Le due formule non si dimostrano, perché sono espressioni sperimentali, valide nel campo del moto assolutamente turbolento, in cui l'indice di resistenza non dipende più dal numero di Reynolds. Nei canali questa condizione è quasi sempre soddisfatta, perché il raggio idraulico è grande e le velocità sono dell'ordine del metro al secondo. Il legame fra $k_s$ e la scabrezza della parete è trattato nell'argomento sulle perdite di carico distribuite e localizzate.
:::

:::esempio{titolo="Portata in moto uniforme"}
Un canale rettangolare largo $b = 4\,\mathrm{m}$, con pendenza $i = 0{,}001$ e $k_s = 60\,\mathrm{m^{1/3}/s}$, trasporta una corrente alta $h_0 = 1{,}20\,\mathrm{m}$. Gli elementi geometrici sono
$$
A = 4 \cdot 1{,}20 = 4{,}80\,\mathrm{m^2} ,
\qquad
C = 4 + 2 \cdot 1{,}20 = 6{,}40\,\mathrm{m} ,
\qquad
R = \frac{4{,}80}{6{,}40} = 0{,}750\,\mathrm{m} ,
$$
quindi
$$
v = 60 \cdot 0{,}750^{2/3} \cdot 0{,}001^{1/2} = 60 \cdot 0{,}825 \cdot 0{,}0316 = 1{,}57\,\mathrm{m/s} ,
\qquad
Q = 4{,}80 \cdot 1{,}57 = 7{,}52\,\mathrm{m^3/s} .
$$
La velocità è dell'ordine del metro al secondo, come ci si attende in un canale artificiale con questa pendenza.
:::

## Scala delle portate e altezza di moto uniforme

La formula di Gauckler-Strickler dà la portata quando si conosce l'altezza. Il problema inverso, che è quello del dimensionamento, richiede di ricavare l'altezza dalla portata.

:::definizione{#scala-delle-portate titolo="Scala delle portate"}
Assegnate la forma della sezione, la pendenza $i$ e il coefficiente $k_s$, la funzione
$$
Q(h) = k_s\,A(h)\,R(h)^{2/3}\,i^{1/2}
$$
si dice **scala delle portate** del canale. Risulta strettamente crescente, perché al crescere di $h$ crescono sia l'area bagnata sia il raggio idraulico; perciò a ogni portata corrisponde una sola altezza di moto uniforme.

La scala delle portate si traccia una volta per tutte per un canale assegnato e permette di leggere $h_0$ da $Q$ e viceversa. Nelle sezioni chiuse, come la circolare, la monotonia vale fino al grado di riempimento in cui il contorno bagnato cresce più rapidamente dell'area, oltre il quale la portata smette di crescere.

::grafico{f="60*4*x*(4*x/(4+2*x))^(2/3)*0.0316228" xmin=0 xmax=2 ymin=0 ymax=16 nomi="h,Q" punti="1.2,7.52,pieno" segmenti="1.2,0,1.2,7.52;0,7.52,1.2,7.52" legenda="Q(h) = k_s\,A(h)\,R(h)^{2/3}\,i^{1/2}" titolo="Scala delle portate del canale rettangolare con $b = 4\,\mathrm{m}$, $i = 0{,}001$ e $k_s = 60\,\mathrm{m^{1/3}/s}$: alla portata $Q = 7{,}52\,\mathrm{m^3/s}$ corrisponde $h_0 = 1{,}20\,\mathrm{m}$"}
:::

:::osservazione{#altezza-di-moto-uniforme titolo="Calcolo dell'altezza di moto uniforme"}
L'equazione $Q(h_0) = Q$ non si risolve in forma chiusa, perché $h_0$ compare sia nell'area sia nel raggio idraulico con esponenti diversi. Si procede per tentativi: si assegnano alcuni valori di $h$, si calcola $Q(h)$ e si restringe l'intervallo che contiene la soluzione, finché la portata calcolata differisce da quella assegnata meno della tolleranza scelta.

Per la sezione rettangolare la formula si può riscrivere in modo da ottenere un'iterazione che converge in pochi passi. Da $Q = k_s\,b\,h\left(\dfrac{b\,h}{b + 2h}\right)^{2/3} i^{1/2}$ si ricava
$$
h = \left(\frac{Q}{k_s\,b\,i^{1/2}}\right)^{3/5}\left(\frac{b + 2h}{b}\right)^{2/5} ,
$$
che si usa sostituendo a destra il valore del tentativo precedente. La prima stima si prende dall'ipotesi di canale larghissimo, cioè $R \simeq h$, che dà $h \simeq \left(\dfrac{Q}{k_s\,b\,i^{1/2}}\right)^{3/5}$.
:::

:::esempio{titolo="Altezza di moto uniforme per tentativi"}
Un canale rettangolare largo $b = 4\,\mathrm{m}$, con $i = 0{,}0005$ e $k_s = 75\,\mathrm{m^{1/3}/s}$, deve portare $Q = 6\,\mathrm{m^3/s}$. Risulta
$$
\frac{Q}{k_s\,b\,i^{1/2}} = \frac{6}{75 \cdot 4 \cdot 0{,}02236} = 0{,}894 ,
$$
quindi la prima stima è $h = 0{,}894^{3/5} = 0{,}935\,\mathrm{m}$. L'iterazione dà in ordine $1{,}090\,\mathrm{m}$, $1{,}113\,\mathrm{m}$, $1{,}116\,\mathrm{m}$ e $1{,}117\,\mathrm{m}$; con una tolleranza di un millimetro si arresta qui. Il controllo diretto dà
$$
A = 4{,}47\,\mathrm{m^2} ,
\qquad
R = 0{,}717\,\mathrm{m} ,
\qquad
Q = 75 \cdot 4{,}47 \cdot 0{,}717^{2/3} \cdot 0{,}02236 = 6{,}00\,\mathrm{m^3/s} ,
$$
perciò $h_0 = 1{,}12\,\mathrm{m}$ e la velocità media è $v = 1{,}34\,\mathrm{m/s}$.
:::

## Sezione di massima efficienza idraulica

Fra tutte le sezioni della stessa forma che hanno la stessa area, una porta più portata delle altre. Dato che il costo di uno scavo dipende soprattutto dal volume movimentato, cioè dall'area della sezione, quella forma è anche la più economica.

:::richiamo{titolo="Punti di minimo di una funzione derivabile"}
Sia $f$ derivabile due volte su un intervallo aperto e sia $x_0$ un punto interno con $f'(x_0) = 0$ e $f''(x_0) > 0$. Allora $x_0$ è un punto di minimo locale di $f$. Se inoltre $f'$ è negativa a sinistra di $x_0$ e positiva a destra, il minimo è assoluto sull'intervallo. Si rimanda all'argomento sui massimi e minimi di Analisi 1.
:::

::::teorema{#massima-efficienza titolo="Sezione rettangolare di massima efficienza idraulica"}
Fra le sezioni rettangolari di area bagnata $A$ assegnata, con pendenza $i$ e coefficiente $k_s$ assegnati, la portata in moto uniforme è massima quando
$$
b = 2h ,
\qquad
R = \frac{h}{2} .
$$

La condizione $b = 2h$ è la regola di dimensionamento dei canali rettangolari rivestiti: assegnata la portata, fissare la larghezza al doppio dell'altezza d'acqua di progetto rende minima l'area di scavo. Per $Q = 5\,\mathrm{m^3/s}$, $i = 0{,}001$ e $k_s = 70\,\mathrm{m^{1/3}/s}$ la sezione di massima efficienza ha $h = 1{,}24\,\mathrm{m}$ e $b = 2{,}49\,\mathrm{m}$.

:::dimostrazione
L'idea è che a parità di area la portata dipende solo dal contorno bagnato, quindi massimizzare la portata equivale a minimizzare il contorno.

Dalla formula di Gauckler-Strickler, con $R = \dfrac{A}{C}$,
$$
Q = k_s\,A\left(\frac{A}{C}\right)^{2/3} i^{1/2} = k_s\,A^{5/3}\,C^{-2/3}\,i^{1/2} .
$$
Poiché $A$, $k_s$ e $i$ sono assegnati, $Q$ è funzione decrescente di $C$; perciò $Q$ è massima quando $C$ è minimo.

Per la sezione rettangolare $A = b h$, quindi $b = \dfrac{A}{h}$ e
$$
C(h) = b + 2h = \frac{A}{h} + 2h ,
\qquad h > 0 .
$$
La derivata è $C'(h) = -\dfrac{A}{h^2} + 2$, che si annulla per $h = \sqrt{\dfrac{A}{2}}$, ed è negativa per $h$ minore di questo valore e positiva per $h$ maggiore. La derivata seconda è $C''(h) = \dfrac{2A}{h^3} > 0$, quindi il punto è di minimo assoluto. Con $A = 2h^2$ si ottiene $b = \dfrac{A}{h} = 2h$ e
$$
R = \frac{A}{C} = \frac{2h^2}{4h} = \frac{h}{2} .
$$
:::
::::

:::osservazione{#sezione-trapezia-ottima titolo="Sezione trapezia di massima efficienza"}
Lo stesso procedimento, applicato alla sezione trapezia di scarpa $m$ assegnata, dà
$$
b = 2h\left(\sqrt{1 + m^2} - m\right) ,
\qquad
R = \frac{h}{2} ,
$$
e il raggio idraulico vale metà dell'altezza d'acqua come nel caso rettangolare. Se si lascia variare anche la scarpa, il contorno bagnato è minimo per $m = \dfrac{1}{\sqrt{3}}$, cioè con le sponde inclinate di $60^\circ$ sull'orizzontale; la sezione corrispondente è metà di un esagono regolare e ha $b = 1{,}155\,h$. Nei canali in terra la scarpa dipende dall'angolo di attrito del terreno, perciò la formula si applica con il valore di $m$ imposto dalla stabilità delle sponde.
:::

:::attenzione
La sezione di massima efficienza idraulica rende minima l'area bagnata, non il costo complessivo dell'opera. Un canale rettangolare largo $2{,}49\,\mathrm{m}$ e alto $1{,}24\,\mathrm{m}$ ha area $3{,}10\,\mathrm{m^2}$ e contorno $4{,}98\,\mathrm{m}$; una sezione larga $4{,}00\,\mathrm{m}$ che porti la stessa portata è più larga da scavare, ma richiede sponde più basse e muri meno spessi. La scelta finale confronta il costo dello scavo con quello del rivestimento e con lo spazio disponibile.
:::

## Energia specifica

Nei problemi di transizione, per esempio un gradino sul fondo o un restringimento, conviene misurare il carico totale a partire dal fondo del canale invece che da un piano orizzontale.

:::definizione{#energia-specifica titolo="Energia specifica"}
Si dice **energia specifica** di una corrente a pelo libero il carico totale misurato rispetto al fondo del canale:
$$
E = h + \frac{v^2}{2g} = h + \frac{Q^2}{2\,g\,A(h)^2} .
$$

L'energia specifica differisce dal carico totale per la quota del fondo, cioè $H = z_f + E$. A portata costante $E$ è funzione della sola altezza d'acqua, quindi il legame fra due sezioni vicine si legge su una curva piana. Per $Q = 10\,\mathrm{m^3/s}$ in un canale rettangolare largo $5\,\mathrm{m}$ e con $h = 1{,}50\,\mathrm{m}$ risulta $v = 1{,}33\,\mathrm{m/s}$ e $E = 1{,}50 + 0{,}091 = 1{,}59\,\mathrm{m}$.
:::

:::definizione{#numero-di-froude titolo="Numero di Froude"}
Si dice **numero di Froude** di una corrente a pelo libero il numero adimensionale
$$
Fr = \frac{v}{\sqrt{g\,h_m}} ,
\qquad
h_m = \frac{A}{B} .
$$
Sostituendo $v = \dfrac{Q}{A}$ e $h_m = \dfrac{A}{B}$ si ottiene la forma equivalente
$$
Fr^2 = \frac{Q^2\,B}{g\,A^3} ,
$$
che si usa quando la sezione non è rettangolare. Il numero di Froude confronta la velocità della corrente con la velocità con cui si propagano le piccole perturbazioni del pelo libero, e la sua posizione rispetto a $1$ decide quale estremo del canale governa la corrente.
:::

:::attenzione
Nel numero di Froude compare l'altezza media $h_m = \dfrac{A}{B}$, che in una sezione non rettangolare è minore dell'altezza d'acqua. In un canale trapezio con $b = 1{,}00\,\mathrm{m}$, scarpa $m = 2$, $h = 1{,}00\,\mathrm{m}$ e $Q = 8{,}40\,\mathrm{m^3/s}$ risulta $A = 3{,}00\,\mathrm{m^2}$, $B = 5{,}00\,\mathrm{m}$, $h_m = 0{,}600\,\mathrm{m}$ e $v = 2{,}80\,\mathrm{m/s}$, quindi
$$
Fr = \frac{2{,}80}{\sqrt{9{,}81 \cdot 0{,}600}} = 1{,}15 ,
$$
e la corrente è veloce. Con l'altezza d'acqua al posto dell'altezza media si otterrebbe $0{,}894$, cioè una classificazione sbagliata.
:::

::::teorema{#stato-critico titolo="Minimo dell'energia specifica e stato critico"}
Sia assegnata la portata $Q$ in un canale di sezione qualsiasi, con $A(h)$ derivabile e crescente e $\dfrac{dA}{dh} = B(h)$. Allora
$$
\frac{dE}{dh} = 1 - \frac{Q^2 B}{g\,A^3} = 1 - Fr^2 ,
$$
e la funzione $E(h)$ ha un minimo nell'altezza $h_c$ per cui $Fr = 1$. L'altezza $h_c$ si dice **altezza critica** e lo stato corrispondente *stato critico*.

Il teorema dice che il minimo dell'energia specifica e la condizione $Fr = 1$ sono la stessa cosa, quindi l'altezza critica si calcola dalla condizione $Q^2 B = g A^3$, senza derivare la curva. Serve a sapere se una transizione è possibile: in una sezione dove l'energia specifica disponibile scende sotto $E(h_c)$ la portata assegnata non passa.

:::dimostrazione
Si deriva l'energia specifica rispetto all'altezza d'acqua, tenendo la portata costante:
$$
\frac{dE}{dh} = \frac{d}{dh}\left(h + \frac{Q^2}{2\,g\,A^2}\right) = 1 - \frac{Q^2}{g\,A^3}\,\frac{dA}{dh} .
$$
Un aumento $dh$ dell'altezza d'acqua aggiunge all'area bagnata una striscia di base $B$ e altezza $dh$, quindi $\dfrac{dA}{dh} = B$ e
$$
\frac{dE}{dh} = 1 - \frac{Q^2 B}{g\,A^3} = 1 - Fr^2 ,
$$
per la forma del numero di Froude scritta sopra. La derivata è nulla se e solo se $Fr = 1$.

Si verifica che il punto è di minimo. Il rapporto $\dfrac{A^3}{B}$ è crescente, perché $A$ cresce e, nelle sezioni usate nei canali, cresce più rapidamente di $B^{1/3}$; perciò $Fr^2 = \dfrac{Q^2 B}{g A^3}$ è decrescente e $\dfrac{dE}{dh} = 1 - Fr^2$ è crescente. Allora la derivata è negativa per $h < h_c$ e positiva per $h > h_c$, quindi $h_c$ è un punto di minimo assoluto. Inoltre $E \to +\infty$ sia per $h \to 0^+$, perché $A \to 0$ e il termine cinetico diverge, sia per $h \to +\infty$, perché il primo termine diverge; perciò il minimo è interno.
:::
::::

::::teorema{#altezza-critica-rettangolare titolo="Altezza critica della sezione rettangolare"}
Sia un canale rettangolare di larghezza $b$ percorso dalla portata $Q$, e sia $q = \dfrac{Q}{b}$ la portata per unità di larghezza. Allora
$$
h_c = \sqrt[3]{\frac{Q^2}{g\,b^2}} = \sqrt[3]{\frac{q^2}{g}} ,
\qquad
E_{\min} = \frac{3}{2}\,h_c .
$$

Le due formule risolvono la maggior parte dei problemi d'esame sui canali rettangolari: la prima dà l'altezza critica dal solo dato della portata per unità di larghezza, la seconda l'energia specifica minima necessaria perché quella portata passi. Per $b = 3\,\mathrm{m}$ e $Q = 6\,\mathrm{m^3/s}$ risulta $q = 2\,\mathrm{m^2/s}$, quindi $h_c = 0{,}742\,\mathrm{m}$ e $E_{\min} = 1{,}11\,\mathrm{m}$.

:::dimostrazione
Nella sezione rettangolare $A = b h$ e $B = b$, perciò la condizione $Q^2 B = g A^3$ diventa
$$
Q^2 b = g\,b^3 h_c^3 ,
$$
da cui $h_c^3 = \dfrac{Q^2}{g\,b^2}$ e quindi la prima formula. Dividendo numeratore e denominatore per $b^2$ si ottiene $h_c^3 = \dfrac{q^2}{g}$, cioè $q^2 = g\,h_c^3$.

L'energia specifica nello stato critico è
$$
E_{\min} = h_c + \frac{q^2}{2\,g\,h_c^2} = h_c + \frac{g\,h_c^3}{2\,g\,h_c^2} = h_c + \frac{h_c}{2} = \frac{3}{2}\,h_c ,
$$
dove si è sostituito $q^2 = g h_c^3$. Nello stato critico l'altezza cinetica vale perciò metà dell'altezza d'acqua.
:::
::::

## Correnti lente e correnti veloci

Il segno di $\dfrac{dE}{dh}$ divide le altezze d'acqua in due famiglie, che si comportano in modo diverso in tutte le transizioni.

:::definizione{#correnti-lente-e-veloci titolo="Corrente lenta e corrente veloce"}
Una corrente a pelo libero si dice:

- **lenta** (o subcritica) se $Fr < 1$, cioè se $h > h_c$;
- **veloce** (o supercritica) se $Fr > 1$, cioè se $h < h_c$;
- in stato critico se $Fr = 1$, cioè se $h = h_c$.

L'equivalenza fra le due scritture segue dalla monotonia di $Fr$ rispetto all'altezza d'acqua, dimostrata nello stato critico. In una corrente lenta un aumento dell'energia specifica fa salire il pelo libero, perché $\dfrac{dE}{dh} > 0$; in una corrente veloce lo fa scendere. Questa differenza di segno spiega perché un gradino sul fondo abbassa il pelo libero in una corrente lenta e lo innalza in una corrente veloce.
:::

:::osservazione{#altezze-alternate titolo="Altezze alternate"}
Assegnata la portata, per ogni valore $E > E_{\min}$ l'equazione $E(h) = E$ ha esattamente due soluzioni: una minore di $h_c$, che è un'altezza di corrente veloce, e una maggiore di $h_c$, che è un'altezza di corrente lenta. Le due altezze si dicono **alternate** e sono i due modi in cui la stessa portata trasporta la stessa energia specifica.

L'esistenza di due soluzioni segue dall'andamento della curva: $E$ è strettamente decrescente su $(0, h_c)$, strettamente crescente su $(h_c, +\infty)$ e tende a $+\infty$ a entrambi gli estremi. Per la sezione rettangolare le due altezze si trovano risolvendo
$$
h^3 - E\,h^2 + \frac{q^2}{2g} = 0 ,
$$
che si ottiene moltiplicando $E = h + \dfrac{q^2}{2 g h^2}$ per $h^2$. L'equazione ha tre radici reali, delle quali una è negativa e si scarta.

::grafico{curve="t+0.203874/t^2,t,0.25,2.3;t,t,0,2.3" xmin=0 xmax=2.6 ymin=0 ymax=2.3 nomi="E,h" punti="1.1123,0.7415,pieno;1.6,1.5107,pieno;1.6,0.4147,pieno" segmenti="1.6,0.4147,1.6,1.5107;0,0.7415,1.1123,0.7415" etichette="1.72,1.52,corrente lenta;1.72,0.42,corrente veloce;0.1,0.86,altezza critica" legenda="E(h) = h + \dfrac{q^2}{2\,g\,h^2};E = h" titolo="Curva dell'energia specifica per $q = 2\,\mathrm{m^2/s}$: a $E = 1{,}60\,\mathrm{m}$ corrispondono le altezze alternate $1{,}51\,\mathrm{m}$ e $0{,}415\,\mathrm{m}$, e il minimo $E_{\min} = 1{,}11\,\mathrm{m}$ cade in $h_c = 0{,}742\,\mathrm{m}$"}
:::

:::esempio{titolo="Altezza alternata in un canale rettangolare"}
In un canale rettangolare largo $b = 4\,\mathrm{m}$ scorre $Q = 10\,\mathrm{m^3/s}$ con $h = 2{,}00\,\mathrm{m}$. Risulta $q = 2{,}50\,\mathrm{m^2/s}$, $v = 1{,}25\,\mathrm{m/s}$ e
$$
Fr = \frac{1{,}25}{\sqrt{9{,}81 \cdot 2{,}00}} = 0{,}282 ,
$$
quindi la corrente è **lenta**. L'energia specifica è $E = 2{,}00 + 0{,}0797 = 2{,}08\,\mathrm{m}$ e l'equazione $h^3 - 2{,}08\,h^2 + 0{,}319 = 0$ ha come seconda radice positiva $h' = 0{,}441\,\mathrm{m}$. In quella sezione la velocità sarebbe $v' = 5{,}67\,\mathrm{m/s}$ e il numero di Froude $2{,}73$, perciò l'altezza alternata è un'altezza di corrente veloce, come ci si attende perché è minore di $h_c = 0{,}860\,\mathrm{m}$.
:::

:::osservazione{#portata-a-energia-costante titolo="Portata a energia specifica costante"}
Se invece della portata si tiene costante l'energia specifica, dalla definizione si ricava
$$
Q(h) = A(h)\sqrt{2g\,(E - h)} ,
\qquad 0 < h < E .
$$
La portata è nulla per $h = 0$, dove l'area si annulla, ed è nulla per $h = E$, dove si annulla l'altezza cinetica; fra i due estremi ha un massimo. Per la sezione rettangolare $Q = b\,h\sqrt{2g(E-h)}$ e il massimo cade in $h = \dfrac{2}{3}E$, cioè nell'altezza che è critica per quella portata. Lo stato critico è perciò il solo stato in cui, a energia specifica assegnata, la portata non si può aumentare.
:::

## Pendenza critica e tipo di alveo

L'altezza di moto uniforme dipende dalla pendenza del fondo e dalla scabrezza; l'altezza critica dipende dalla sola portata e dalla geometria. Il loro confronto classifica il canale.

:::definizione{#pendenza-critica titolo="Pendenza critica"}
Si dice **pendenza critica** $i_c$ la pendenza del fondo per la quale l'altezza di moto uniforme coincide con l'altezza critica. Si ottiene scrivendo la formula di Gauckler-Strickler nello stato critico:
$$
i_c = \frac{Q^2}{k_s^2\,A_c^2\,R_c^{4/3}} = \frac{v_c^2}{k_s^2\,R_c^{4/3}} ,
$$
dove $A_c$, $R_c$ e $v_c$ sono area, raggio idraulico e velocità media calcolati con l'altezza critica.

La pendenza critica dipende dalla portata, perché $h_c$ dipende dalla portata, e di conseguenza lo stesso canale può essere a debole pendenza per una portata e a forte pendenza per un'altra. Per un canale rettangolare largo $3\,\mathrm{m}$, con $Q = 6\,\mathrm{m^3/s}$ e $k_s = 70\,\mathrm{m^{1/3}/s}$, risulta $h_c = 0{,}742\,\mathrm{m}$, $R_c = 0{,}496\,\mathrm{m}$, $v_c = 2{,}70\,\mathrm{m/s}$ e $i_c = 0{,}00378$.
:::

:::osservazione{#alvei-debole-forte titolo="Alvei a debole e a forte pendenza"}
Il confronto fra la pendenza del fondo e la pendenza critica si traduce nel confronto fra le due altezze di riferimento:
$$
\begin{cases}
i < i_c & \Longrightarrow \quad h_0 > h_c \\[4pt]
i = i_c & \Longrightarrow \quad h_0 = h_c \\[4pt]
i > i_c & \Longrightarrow \quad h_0 < h_c
\end{cases}
$$
Nel primo caso l'alveo si dice a **debole pendenza** e il moto uniforme è una corrente lenta; nel terzo si dice a **forte pendenza** e il moto uniforme è una corrente veloce. L'implicazione segue dal fatto che $Q(h)$ è crescente: se la pendenza scende sotto $i_c$, la portata assegnata richiede un'area bagnata maggiore, quindi un'altezza maggiore di $h_c$.

La distinzione governa il tracciamento dei profili di moto permanente e la posizione delle sezioni di controllo, trattati nell'argomento sui profili di moto permanente e il risalto idraulico.
:::

:::esempio{titolo="Classificazione di un canale"}
Un canale rettangolare largo $b = 2{,}50\,\mathrm{m}$, con $k_s = 60\,\mathrm{m^{1/3}/s}$ e pendenza $i = 0{,}010$, porta $Q = 5\,\mathrm{m^3/s}$. L'altezza critica è $h_c = 0{,}742\,\mathrm{m}$, da cui $A_c = 1{,}85\,\mathrm{m^2}$, $R_c = 0{,}465\,\mathrm{m}$, $v_c = 2{,}70\,\mathrm{m/s}$ e
$$
i_c = \frac{2{,}70^2}{60^2 \cdot 0{,}465^{4/3}} = 0{,}00560 .
$$
Poiché $i = 0{,}010 > i_c$, l'alveo è a **forte pendenza**. Il calcolo dell'altezza di moto uniforme conferma la conclusione, dato che risulta $h_0 = 0{,}606\,\mathrm{m} < h_c$ e $Fr = 1{,}35$, perciò il moto uniforme è una corrente veloce.
:::

## Celerità delle piccole perturbazioni

Il numero di Froude è stato introdotto come rapporto fra la velocità della corrente e una velocità caratteristica. Resta da calcolare quest'ultima.

::::teorema{#celerita-delle-perturbazioni titolo="Celerità delle piccole perturbazioni"}
In un canale rettangolare in cui l'acqua è in quiete con altezza $h$, una perturbazione del pelo libero di ampiezza $\delta h$ piccola rispetto a $h$ si propaga con celerità
$$
c = \sqrt{g\,h} .
$$
In una sezione qualsiasi vale la stessa formula con l'altezza media, cioè $c = \sqrt{g\,h_m}$.

La formula dà il significato del numero di Froude, perché $Fr = \dfrac{v}{c}$, e spiega la differenza fra correnti lente e veloci: in una corrente lenta la perturbazione risale verso monte con velocità $c - v > 0$, in una corrente veloce viene trascinata verso valle. Per $h = 1{,}20\,\mathrm{m}$ risulta $c = 3{,}43\,\mathrm{m/s}$.

:::dimostrazione
L'idea è di osservare il fenomeno da un riferimento che si muove con la perturbazione, perché in quel riferimento il moto è permanente e si possono applicare la continuità e l'equazione globale.

Si prenda un riferimento solidale con il fronte della perturbazione. In esso l'acqua indisturbata arriva con velocità $c$ e altezza $h$, e attraversa il fronte uscendo con altezza $h + \delta h$ e velocità $c - \delta v$, dove $\delta v$ è la velocità che la perturbazione imprime all'acqua nel riferimento fisso. Sia $b$ la larghezza del canale. L'equazione di continuità dà
$$
c\,h = (c - \delta v)(h + \delta h) = c\,h + c\,\delta h - \delta v\,h - \delta v\,\delta h .
$$
Trascurando il prodotto $\delta v\,\delta h$, che è di secondo ordine, si ottiene $c\,\delta h = h\,\delta v$, quindi
$$
\delta v = \frac{c\,\delta h}{h} .
$$
Si applichi ora l'equazione globale al volume di controllo che contiene il fronte, proiettata sulla direzione del moto. Le spinte sulle due sezioni sono quelle di una distribuzione idrostatica, cioè $\gamma\,\dfrac{b\,h^2}{2}$ e $\gamma\,\dfrac{b\,(h + \delta h)^2}{2}$, dirette verso l'interno del volume; la componente del peso e la resistenza alla parete sono trascurabili su un tratto corto. Il bilancio è
$$
\rho\,b\,c\,h\,\big[(c - \delta v) - c\big] = \gamma\,\frac{b\,h^2}{2} - \gamma\,\frac{b\,(h + \delta h)^2}{2} .
$$
Sviluppando il quadrato e trascurando $\delta h^2$ si ha $(h+\delta h)^2 - h^2 \simeq 2 h\,\delta h$, perciò
$$
-\rho\,c\,h\,\delta v = -\gamma\,h\,\delta h ,
$$
cioè $\rho\,c\,\delta v = \gamma\,\delta h$ e quindi $\delta v = \dfrac{g\,\delta h}{c}$, dato che $\gamma = \rho g$. Uguagliando le due espressioni di $\delta v$ si ottiene
$$
\frac{c\,\delta h}{h} = \frac{g\,\delta h}{c} ,
$$
da cui $c^2 = g\,h$ e perciò $c = \sqrt{g\,h}$.
:::
::::

:::osservazione{#significato-di-froude titolo="Significato del numero di Froude"}
Se l'acqua, invece di essere in quiete, si muove con velocità media $v$, le due perturbazioni generate in un punto si propagano con velocità $c - v$ verso monte e $c + v$ verso valle. Il segno della prima dipende dal numero di Froude:

- in una corrente **lenta** risulta $v < c$, quindi $Fr < 1$ e la perturbazione risale il canale, quindi una variazione imposta a valle, per esempio una paratoia, si fa sentire verso monte;
- in una corrente **veloce** risulta $v > c$, quindi $Fr > 1$ ed entrambe le perturbazioni vanno verso valle, quindi la corrente è governata da ciò che avviene a monte.

Per una corrente alta $1{,}30\,\mathrm{m}$ con altezza media $0{,}969\,\mathrm{m}$ e velocità $1{,}82\,\mathrm{m/s}$ si ha $c = 3{,}08\,\mathrm{m/s}$ e $Fr = 0{,}591$: la perturbazione risale con velocità $1{,}26\,\mathrm{m/s}$ e scende con velocità $4{,}90\,\mathrm{m/s}$.

::schema{nodi="P,5,1.2" nomi=0 acqua="0,0 10,0 10,1.2 0,1.2" solidi="0,-0.7 10,-0.7 10,0 0,0" pelo="0,10,1.2,p_a = 0" frecce="4.2,0.6,5.8,0.6,v;4.4,1.65,2.9,1.65,c − v;5.6,1.65,7.1,1.65,c + v" etichette="5.0,2.2,perturbazione" riferimento=0 titolo="Le due perturbazioni generate in un punto della corrente si propagano con velocità $c - v$ verso monte e $c + v$ verso valle"}
:::
