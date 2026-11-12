---
titolo: Lunghe condotte e impianti di sollevamento
sommario: Lo schema di lunga condotta, i problemi di verifica e di progetto fra due serbatoi, il tracciamento della piezometrica e il controllo delle pressioni lungo il profilo, la prevalenza e la potenza di una pompa, il punto di funzionamento e l'altezza massima di aspirazione.
---

## Lo schema di lunga condotta

Una condotta in pressione che collega due serbatoi dissipa energia in tre modi: per resistenza continua lungo tutto lo sviluppo, per resistenze localizzate nei gomiti, negli organi di regolazione e agli estremi, e con l'altezza cinetica che la corrente porta via allo sbocco. Quando la condotta è molto lunga rispetto al diametro il primo termine prevale sugli altri, e il calcolo si semplifica.

:::definizione{#lunga-condotta titolo="Lunga condotta"}
Una condotta in pressione si dice **lunga condotta** quando nel bilancio dei carichi si tengono le sole perdite di carico continue e si trascurano le perdite localizzate e le altezze cinetiche. Con questa ipotesi il carico totale e il carico piezometrico coincidono in ogni sezione,
$$
H = z + \frac{p}{\gamma} + \frac{v^2}{2g} \simeq z + \frac{p}{\gamma} = h ,
$$
quindi la linea dei carichi totali e la piezometrica sono la stessa retta, di pendenza pari alla cadente $J$. Lo schema serve a calcolare con due sole grandezze, la portata $Q$ e il diametro $D$, gli acquedotti, le condotte di adduzione e le mandate degli impianti di sollevamento, nei quali lo sviluppo è di centinaia o di migliaia di metri.

::schema{acqua="0,4.4 1.8,4.4 1.8,2.6 0,2.6;10.2,1.4 12,1.4 12,-0.2 10.2,-0.2" solidi="0,2.3 1.8,2.3 1.8,2.6 0,2.6;10.2,-0.5 12,-0.5 12,-0.2 10.2,-0.2" nodi="A,1.8,3,-;U,10.2,0.6,-" condotte="A-U,0.18,D" pelo="0,1.8,4.4,monte;10.2,12,1.4,valle" piezometrica="1.8,4.4 10.2,1.4" tratteggi="1.8,4.4 13,4.4;10.2,1.4 13,1.4" quote="13 4.4,13 1.4,Δz" etichette="5.3,3.75,piezometrica;6,0.95,L" titolo="Lunga condotta fra due serbatoi: la piezometrica unisce i due peli liberi e la sua pendenza è la cadente $J$"}
:::

:::osservazione{#quando-vale-lo-schema titolo="Quando lo schema è accettabile"}
Il peso dei due gruppi di termini si confronta sul coefficiente che moltiplica l'altezza cinetica. La perdita continua vale $\lambda\,\dfrac{L}{D}\,\dfrac{v^2}{2g}$ e la somma delle perdite localizzate lungo il percorso vale $\left(\sum \xi\right)\dfrac{v^2}{2g}$, perciò lo schema è accettabile quando
$$
\lambda\,\frac{L}{D} \gg \sum \xi + 1 ,
$$
dove $\sum \xi$ raccoglie imbocco, curve e organi di regolazione, e l'addendo $1$ tiene conto dell'altezza cinetica persa allo sbocco. Con $\lambda \simeq 0{,}02$ il primo membro vale $20$ per $\dfrac{L}{D} = 1000$ e vale $200$ per $\dfrac{L}{D} = 10\,000$, mentre il secondo membro resta dell'ordine di qualche unità. Per una condotta di $800\,\mathrm{m}$ con $D = 400\,\mathrm{mm}$, $\lambda = 0{,}023$, imbocco, due curve e sbocco si ha $\lambda\,\dfrac{L}{D} = 46$ e $\sum \xi + 1 = 2{,}1$: la portata calcolata con lo schema di lunga condotta supera di circa il $2\,\%$ quella del bilancio completo.
:::

:::attenzione
Lo schema non si applica alle condotte corte. Per una condotta di $25\,\mathrm{m}$ con $D = 300\,\mathrm{mm}$ e $\lambda = 0{,}025$ si ha $\lambda\,\dfrac{L}{D} = 2{,}08$, mentre imbocco, due curve, una saracinesca aperta e lo sbocco danno $\sum \xi + 1 = 2{,}3$: le perdite localizzate superano quelle continue, quindi vanno scritte tutte. Le condotte brevi di collegamento fra due vasche e i tronchi di aspirazione delle pompe si calcolano sempre con il bilancio completo.
:::

## I richiami di resistenza al moto

Il calcolo di una lunga condotta usa le formule di resistenza stabilite per le condotte in pressione. Se ne richiamano qui le forme necessarie.

:::richiamo{#darcy-weisbach titolo="Formula di Darcy-Weisbach"}
In una condotta circolare di diametro $D$ percorsa dalla velocità media $v$, la cadente vale
$$
J = \lambda\,\frac{1}{D}\,\frac{v^2}{2g} ,
$$
dove l'indice di resistenza $\lambda$ si ricava dalla formula di Colebrook-White
$$
\frac{1}{\sqrt{\lambda}} = -2\log_{10}\!\left(\frac{2{,}51}{Re\sqrt{\lambda}} + \frac{\varepsilon}{3{,}71\,D}\right) ,
$$
con $Re = \dfrac{v D}{\nu}$ e $\varepsilon$ scabrezza assoluta della parete. Si rimanda all'argomento sulle perdite di carico distribuite e localizzate.
:::

:::richiamo{#formule-monomie titolo="Formula di Gauckler-Strickler"}
Nel campo di moto assolutamente turbolento la cadente si calcola anche con la formula monomia
$$
v = k_s\,R^{2/3}\,J^{1/2} ,
$$
con $R$ raggio idraulico e $k_s$ coefficiente di scabrezza in $\mathrm{m^{1/3}/s}$, dipendente solo dal materiale della parete. Si rimanda all'argomento sulle perdite di carico distribuite e localizzate.
:::

## L'equazione della lunga condotta

::::teorema{#equazione-della-lunga-condotta titolo="Equazione della lunga condotta"}
Siano due serbatoi di grande superficie, con peli liberi alle quote $z_1$ e $z_2$ con $z_1 > z_2$, collegati da una condotta di lunghezza $L$ e diametro costante $D$. Se il moto è permanente, il fluido incomprimibile e vale lo schema di lunga condotta, allora
$$
z_1 - z_2 = J\,L .
$$
Il dislivello fra i due peli liberi si spende quindi tutto in resistenza continua, e la cadente è nota prima di conoscere la portata:
$$
J = \frac{z_1 - z_2}{L} .
$$

:::dimostrazione
L'idea è scrivere il bilancio dei carichi totali fra i due peli liberi, dove sono noti tutti i termini tranne la perdita.

Si prenda la sezione $1$ sul pelo libero del serbatoio di monte e la sezione $2$ su quello di valle, e si misurino le quote da un piano orizzontale di riferimento. Le pressioni sono relative, perciò sui due peli liberi $p_1 = p_2 = 0$. I serbatoi hanno grande superficie, quindi le velocità di abbassamento e di innalzamento dei peli sono trascurabili e $v_1 = v_2 = 0$. I carichi totali valgono allora $H_1 = z_1$ e $H_2 = z_2$.

Il teorema di Bernoulli per un fluido reale fra le due sezioni dà $H_1 = H_2 + \Delta H$, dove $\Delta H$ è la perdita di carico complessiva. Nello schema di lunga condotta la perdita complessiva si riduce a quella continua, cioè $\Delta H = J L$. Sostituendo i tre valori si ottiene $z_1 = z_2 + J L$, perciò $z_1 - z_2 = J L$.
:::
::::

:::definizione{#resistenza-della-condotta titolo="Resistenza idraulica di una condotta"}
Sostituendo $v = \dfrac{4Q}{\pi D^2}$ nella formula di Darcy-Weisbach si ottiene
$$
J = \frac{\lambda}{D}\,\frac{1}{2g}\,\frac{16\,Q^2}{\pi^2 D^4} = \frac{8\,\lambda\,Q^2}{\pi^2 g\,D^5} ,
$$
quindi la perdita su tutta la condotta si scrive $\Delta H = r\,Q^2$ con
$$
r = \frac{8\,\lambda\,L}{g\,\pi^2 D^5} ,
$$
detta **resistenza idraulica** della condotta e misurata in $\mathrm{s^2/m^5}$. La scrittura $\Delta H = r Q^2$ è la forma usata per i sistemi di condotte e per il punto di funzionamento di una pompa, perché raccoglie in un solo numero la lunghezza, il diametro e la scabrezza. Con la formula di Gauckler-Strickler la resistenza vale $r = \dfrac{10{,}29\,L}{k_s^2\,D^{16/3}}$, e si usa questa forma quando la scabrezza della parete è assegnata con $k_s$. Per $L = 1000\,\mathrm{m}$, $D = 250\,\mathrm{mm}$ e $\lambda = 0{,}025$ risulta $r = 2115\,\mathrm{s^2/m^5}$, quindi $Q = 90\,\mathrm{L/s}$ costa $\Delta H = 2115 \cdot 0{,}090^2 = 17{,}1\,\mathrm{m}$.
:::

:::osservazione{#dipendenza-dal-diametro titolo="Il peso del diametro"}
La resistenza $r$ è proporzionale a $D^{-5}$, perciò a parità di portata la perdita di carico cambia moltissimo con il diametro. Passare da $250\,\mathrm{mm}$ a $300\,\mathrm{mm}$, cioè aumentare $D$ del $20\,\%$, riduce la perdita nel rapporto $\left(\dfrac{250}{300}\right)^5 = 0{,}40$, cioè la rende meno della metà. Questa dipendenza spiega sia la scelta del diametro economico sia il peso delle incrostazioni, che riducono $D$ e aumentano $\varepsilon$ allo stesso tempo.
:::

## Verifica: calcolo della portata

Nel problema di verifica la condotta è assegnata, cioè sono noti $L$, $D$ e $\varepsilon$, ed è noto il dislivello: si cerca la portata che la condotta trasporta.

:::osservazione{#verifica titolo="Procedimento di verifica"}
Il dislivello dà subito $J = \dfrac{z_1 - z_2}{L}$. Se l'indice di resistenza $\lambda$ è assegnato, la velocità si ricava direttamente dalla formula di Darcy-Weisbach,
$$
v = \sqrt{\frac{2 g D J}{\lambda}} ,
\qquad
Q = v\,\frac{\pi D^2}{4} ,
$$
e il numero di Reynolds $Re = \dfrac{v D}{\nu}$ calcolato alla fine conferma che il regime di moto è quello supposto. Se invece $\lambda$ va ricavato da Colebrook-White, le due incognite $v$ e $\lambda$ compaiono in due equazioni che si risolvono insieme:
$$
\begin{cases}
v = \sqrt{\dfrac{2 g D J}{\lambda}} \\[8pt]
\dfrac{1}{\sqrt{\lambda}} = -2\log_{10}\!\left(\dfrac{2{,}51}{Re\sqrt{\lambda}} + \dfrac{\varepsilon}{3{,}71\,D}\right)
\end{cases}
$$
:::

::::teorema{#verifica-diretta titolo="Soluzione diretta del problema di verifica"}
Siano noti $D$, $J$, $\varepsilon$ e $\nu$. Allora il prodotto $Re\sqrt{\lambda}$ è noto senza conoscere la portata e vale
$$
Re\,\sqrt{\lambda} = \frac{D}{\nu}\,\sqrt{2 g D J} ,
$$
quindi la formula di Colebrook-White fornisce $\lambda$ in un solo passaggio, e la velocità segue da $v = \sqrt{\dfrac{2 g D J}{\lambda}}$.

:::dimostrazione
Dalla formula di Darcy-Weisbach scritta per la velocità segue $v\sqrt{\lambda} = \sqrt{2 g D J}$. Moltiplicando entrambi i membri per $\dfrac{D}{\nu}$ si ottiene
$$
Re\,\sqrt{\lambda} = \frac{v D}{\nu}\,\sqrt{\lambda} = \frac{D}{\nu}\,\sqrt{2 g D J} ,
$$
dove il secondo membro contiene solo dati. Poiché nella formula di Colebrook-White l'incognita $\lambda$ compare a primo membro e, a secondo membro, solo nel prodotto $Re\sqrt{\lambda}$, il secondo membro è ora un numero, perciò $\dfrac{1}{\sqrt{\lambda}}$ si calcola direttamente.
:::
::::

:::esempio{titolo="Portata di una condotta assegnata"}
Due serbatoi con dislivello $18\,\mathrm{m}$ sono collegati da una condotta di $1200\,\mathrm{m}$, $D = 300\,\mathrm{mm}$, $\varepsilon = 0{,}25\,\mathrm{mm}$. La cadente vale $J = \dfrac{18}{1200} = 0{,}015$. Allora
$$
Re\sqrt{\lambda} = \frac{0{,}300}{10^{-6}}\sqrt{2 \cdot 9{,}81 \cdot 0{,}300 \cdot 0{,}015} = 3 \cdot 10^{5} \cdot 0{,}2971 = 8{,}91 \cdot 10^{4} ,
$$
$$
\frac{1}{\sqrt{\lambda}} = -2\log_{10}\!\left(2{,}82\cdot 10^{-5} + 2{,}25\cdot 10^{-4}\right) = 7{,}19 ,
\qquad
\lambda = 0{,}0193 .
$$
Perciò $v = \sqrt{\dfrac{0{,}0883}{0{,}0193}} = 2{,}14\,\mathrm{m/s}$ e $Q = 2{,}14 \cdot 0{,}0707 = 0{,}151\,\mathrm{m^3/s}$, cioè $151\,\mathrm{L/s}$. Il numero di Reynolds vale $6{,}4 \cdot 10^{5}$, quindi il moto è turbolento, come la formula di Colebrook-White richiede.
:::

:::osservazione{#iterazione-su-lambda titolo="Quando l'iterazione serve davvero"}
Se i dati assegnati sono la portata e il diametro, il numero di Reynolds è noto ma $\lambda$ compare a entrambi i membri della formula di Colebrook-White, perciò si procede per approssimazioni successive: si parte da $\lambda_0 = 0{,}02$, si calcola il secondo membro, se ne ricava $\lambda_1$, e si ripete. Il procedimento converge in tre o quattro passi, perché il logaritmo rende la dipendenza da $\lambda$ molto debole; ci si arresta quando due valori consecutivi differiscono per meno di $10^{-4}$.
:::

## Progetto: scelta del diametro

Nel problema di progetto sono noti la portata da trasportare, il dislivello disponibile e la lunghezza del tracciato: si cerca il diametro.

::::teorema{#progetto-del-diametro titolo="Diametro di progetto"}
Siano assegnati $Q$, $L$ e il carico disponibile $\Delta H = z_1 - z_2$. Con la formula di Darcy-Weisbach il diametro vale
$$
D = \left(\frac{8\,\lambda\,L\,Q^2}{\pi^2 g\,\Delta H}\right)^{1/5} ,
$$
e con la formula di Gauckler-Strickler, essendo $J = \dfrac{\Delta H}{L}$,
$$
D = \left(\frac{10{,}29\;Q^2}{k_s^2\,J}\right)^{3/16} .
$$

:::dimostrazione
La prima formula si ottiene risolvendo rispetto a $D$ la relazione $\Delta H = \dfrac{8\lambda L Q^2}{\pi^2 g D^5}$.

Per la seconda si parte da $v = k_s R^{2/3} J^{1/2}$ con $R = \dfrac{D}{4}$ per una condotta circolare piena, da cui $J = \dfrac{v^2}{k_s^2}\left(\dfrac{4}{D}\right)^{4/3}$. Sostituendo $v = \dfrac{4Q}{\pi D^2}$ si ha
$$
J = \frac{16\,Q^2}{\pi^2 D^4\,k_s^2}\cdot\frac{4^{4/3}}{D^{4/3}} = \frac{16 \cdot 4^{4/3}}{\pi^2}\;\frac{Q^2}{k_s^2\,D^{16/3}} ,
$$
e poiché $\dfrac{16 \cdot 4^{4/3}}{\pi^2} = 10{,}29$, risulta $J = \dfrac{10{,}29\,Q^2}{k_s^2\,D^{16/3}}$. Risolvendo rispetto a $D$ si ottiene l'esponente $\dfrac{3}{16}$.
:::
::::

:::osservazione{#diametri-commerciali titolo="Diametro commerciale e carico residuo"}
Il diametro che risolve l'equazione di progetto non è un diametro di produzione, perciò si sceglie il **diametro commerciale immediatamente superiore**, nella serie $100$, $150$, $200$, $250$, $300$, $400$, $500\,\mathrm{mm}$. Con il diametro maggiore la perdita effettiva è minore del carico disponibile, quindi resta un **carico residuo** $\Delta H_{\mathrm{disp}} - \Delta H_{\mathrm{eff}}$ che va dissipato in un organo di regolazione all'estremo di valle, oppure accettato come maggiore pressione in arrivo. Il diametro commerciale inferiore darebbe invece una perdita maggiore del dislivello, perciò non trasporterebbe la portata richiesta. Lo spessore della parete si sceglie poi in funzione della pressione massima di esercizio e del materiale, e si rimanda ai corsi di costruzioni idrauliche.
:::

:::esempio{titolo="Progetto con la formula monomia"}
Una condotta in ghisa rivestita, $k_s = 90\,\mathrm{m^{1/3}/s}$, deve portare $Q = 80\,\mathrm{L/s}$ su $L = 2000\,\mathrm{m}$ con un dislivello di $30\,\mathrm{m}$. Risulta $J = 0{,}015$ e
$$
D = \left(\frac{10{,}29 \cdot 0{,}080^2}{90^2 \cdot 0{,}015}\right)^{3/16} = \left(5{,}42\cdot10^{-4}\right)^{3/16} = 0{,}244\,\mathrm{m} .
$$
Si adotta quindi $D = 250\,\mathrm{mm}$, per il quale la cadente scende a $J = 0{,}0132$ e la perdita effettiva vale $26{,}4\,\mathrm{m}$: restano $3{,}6\,\mathrm{m}$ da dissipare in una saracinesca di valle. La velocità risulta $1{,}63\,\mathrm{m/s}$, compresa nel campo usuale degli acquedotti.
:::

## La piezometrica e la pressione lungo il profilo

Trovata la portata, resta da controllare che la condotta funzioni in ogni sua sezione. Il controllo si fa confrontando la piezometrica con il profilo altimetrico del tracciato.

::::teorema{#pressione-lungo-il-profilo titolo="Pressione in una sezione della condotta"}
Sia una lunga condotta di cadente $J$ che parte da un serbatoio con pelo libero alla quota $z_1$. Detta $x$ l'ascissa misurata lungo la condotta a partire dall'imbocco e $z(x)$ la quota dell'asse della condotta, il carico piezometrico e la pressione relativa nella sezione di ascissa $x$ valgono
$$
h(x) = z_1 - J\,x ,
\qquad
\frac{p(x)}{\gamma} = z_1 - J\,x - z(x) .
$$
L'altezza piezometrica in una sezione è quindi la distanza verticale fra la piezometrica e l'asse della condotta, misurata su quella sezione.

:::dimostrazione
Si applichi il bilancio dei carichi fra il pelo libero del serbatoio e la sezione di ascissa $x$. Sul pelo libero il carico totale vale $z_1$, perché la pressione relativa è nulla e la velocità è trascurabile. Nello schema di lunga condotta il carico totale coincide con il carico piezometrico e la perdita fra le due sezioni vale $J x$, perciò $h(x) = z_1 - J x$. Dalla definizione di carico piezometrico, $h(x) = z(x) + \dfrac{p(x)}{\gamma}$, segue $\dfrac{p(x)}{\gamma} = h(x) - z(x)$, cioè la formula enunciata.
:::
::::

:::osservazione{#lettura-del-disegno titolo="Lettura dello schema"}
La piezometrica è una retta che parte dal pelo libero di monte e arriva al pelo libero di valle, oppure alla quota dell'asse della condotta allo sbocco quando la condotta scarica nell'atmosfera, perché in quella sezione la pressione relativa è nulla. Dove la piezometrica sta sopra l'asse della condotta la pressione è positiva; dove sta sotto la pressione è negativa, cioè la condotta è in depressione. Il profilo altimetrico, invece, segue il terreno e può salire e scendere più volte, perciò la distanza fra le due linee cambia da sezione a sezione.

::schema{nodi="A,1.6,4.2,-;C,5,5,-;E,8.2,2.2,-;U,11.4,1,-" acqua="0,5.8 1.6,5.8 1.6,3.9 0,3.9;11.4,1 13,1 13,-0.6 11.4,-0.6" solidi="0,3.6 1.6,3.6 1.6,3.9 0,3.9;11.4,-0.9 13,-0.9 13,-0.6 11.4,-0.6" condotte="A-C-E-U,0.16,D" pelo="0,1.6,5.8,monte;11.4,13,1,valle" piezometrica="1.6,5.8 11.4,1" etichette="7.6,4.6,piezometrica;5,5.6,p<0;8.7,1.45,p>0" titolo="Nel tratto in cui il profilo sale sopra la piezometrica la pressione relativa è negativa"}
:::

## Punti critici e condotte vicine al piano dei carichi

:::definizione{#punto-critico titolo="Punto critico di una lunga condotta"}
Si dice **punto critico** la sezione in cui la pressione relativa è minima. Poiché
$$
\frac{p(x)}{\gamma} = z_1 - \big(z(x) + J\,x\big) ,
$$
la pressione è minima dove la quantità $z(x) + J x$ è massima. Il punto critico è quindi il punto del profilo più alto rispetto alla piezometrica, e non coincide in generale con il punto più alto del tracciato: una sezione meno elevata ma molto più lontana dall'imbocco può avere $z + J x$ maggiore, perché la perdita accumulata $J x$ è maggiore.
:::

:::esempio{titolo="Ricerca del punto critico"}
Una condotta lunga $2800\,\mathrm{m}$ parte da un serbatoio con pelo a $92\,\mathrm{m}$ e arriva a un serbatoio con pelo a $62\,\mathrm{m}$, con cadente $J = \dfrac{30}{2800} = 0{,}0107$. Il profilo passa per i punti $(1400\,\mathrm{m};\,84\,\mathrm{m})$ e $(2100\,\mathrm{m};\,78\,\mathrm{m})$. Si calcola $z + J x$ nelle due sezioni:
$$
84 + 0{,}0107 \cdot 1400 = 99{,}0\,\mathrm{m} ,
\qquad
78 + 0{,}0107 \cdot 2100 = 100{,}5\,\mathrm{m} .
$$
Il massimo si ha nella seconda sezione, perciò il punto critico è a $2100\,\mathrm{m}$, dove la pressione vale $92 - 100{,}5 = -8{,}5\,\mathrm{m}$ di colonna d'acqua, mentre nel punto più alto del profilo vale $-7{,}0\,\mathrm{m}$.
:::

:::attenzione
La pressione relativa in una condotta non può scendere sotto il valore che porta il liquido alla sua tensione di vapore. Per l'acqua a $20\,^\circ\mathrm{C}$ la tensione di vapore vale $2{,}34\,\mathrm{kPa}$, quindi in pressioni assolute il limite è $\dfrac{2{,}34}{9{,}81} = 0{,}24\,\mathrm{m}$ e in pressioni relative, con pressione atmosferica $101{,}3\,\mathrm{kPa}$, vale $0{,}24 - 10{,}33 = -10{,}09\,\mathrm{m}$. Nella pratica si impone un margine e si accetta al più $-7\,\mathrm{m}$, perché oltre quel valore l'aria disciolta si libera e forma sacche che riducono la sezione utile. Per la condotta dell'esempio precedente il punto critico a $-8{,}5\,\mathrm{m}$ supera il limite ammesso, perciò la portata va ridotta oppure il tracciato va abbassato.
:::

:::osservazione{#regolazione-con-saracinesca titolo="Riduzione della portata con una saracinesca"}
Riducendo la portata si riduce la cadente, quindi la piezometrica si abbassa meno e la pressione nel punto critico cresce. Imposto il valore minimo ammesso $\dfrac{p_{\min}}{\gamma}$ nella sezione critica di ascissa $x_c$ e quota $z_c$, la cadente ammessa vale
$$
J_{\mathrm{amm}} = \frac{z_1 - z_c - \dfrac{p_{\min}}{\gamma}}{x_c} ,
$$
e con essa si calcola la portata. Il carico che la resistenza continua non dissipa, cioè $(z_1 - z_2) - J_{\mathrm{amm}} L$, va speso in una saracinesca di coefficiente $\xi$ posta **a valle del punto critico**, perché una perdita concentrata abbassa la piezometrica solo nelle sezioni che la seguono.

::schema{nodi="A,1.6,4.5,-;C,5,5.1,-;U,11.6,1.3,-" acqua="0,5.9 1.6,5.9 1.6,4.2 0,4.2;11.6,1.3 13,1.3 13,-0.3 11.6,-0.3" solidi="0,3.9 1.6,3.9 1.6,4.2 0,4.2;11.6,-0.6 13,-0.6 13,-0.3 11.6,-0.3" condotte="A-C-U,0.16,D" pelo="0,1.6,5.9,monte;11.6,13,1.3,valle" piezometrica="1.6,5.9 11.6,3.3;11.6,3.3 11.6,1.3" etichette="7.4,4.9,piezometrica;12.2,2.6,saracinesca;4.3,5.7,punto critico" titolo="La saracinesca di valle fa cadere la piezometrica solo nelle sezioni che la seguono, perciò solleva la pressione a monte"}
:::

## Impianti di sollevamento: prevalenza e potenza

Quando il serbatoio da alimentare sta più in alto di quello di partenza, il dislivello geodetico e le perdite vanno vinti da una pompa inserita nella condotta.

::::teorema{#prevalenza titolo="Prevalenza di una pompa"}
Siano due serbatoi con peli liberi alle quote $z_1$ e $z_2$, con $z_2 > z_1$, collegati da una condotta di resistenza $r$ nella quale è inserita una pompa. Se la portata sollevata è $Q$, la pompa deve fornire al fluido la **prevalenza**
$$
H_p = (z_2 - z_1) + r\,Q^2 ,
$$
cioè il dislivello geodetico più la perdita di carico complessiva della condotta.

:::dimostrazione
La pompa cede al fluido che la attraversa un'energia per unità di peso pari a $H_p$, perciò il carico totale subisce in corrispondenza della pompa un incremento $H_p$.

Si scriva il bilancio dei carichi totali fra i due peli liberi, tenendo conto di questo incremento:
$$
H_1 + H_p = H_2 + \Delta H .
$$
Sui due peli liberi le pressioni relative sono nulle e le velocità trascurabili, quindi $H_1 = z_1$ e $H_2 = z_2$. Nello schema di lunga condotta la perdita complessiva vale $\Delta H = r Q^2$. Sostituendo si ottiene $z_1 + H_p = z_2 + r Q^2$, perciò $H_p = (z_2 - z_1) + r Q^2$.
:::
::::

:::definizione{#potenza-della-pompa titolo="Potenza utile e potenza assorbita"}
La **potenza utile** che la pompa cede alla corrente è il prodotto del peso di fluido sollevato nell'unità di tempo per la prevalenza,
$$
P_u = \gamma\,Q\,H_p .
$$
La macchina assorbe più di quanto cede, perché dissipa energia negli attriti meccanici e idraulici. Detto $\eta$ il rendimento globale del gruppo, con $0 < \eta < 1$, la **potenza assorbita** vale
$$
P = \frac{\gamma\,Q\,H_p}{\eta} .
$$
Con $\gamma$ in $\mathrm{kN/m^3}$, $Q$ in $\mathrm{m^3/s}$ e $H_p$ in $\mathrm{m}$ la potenza risulta in $\mathrm{kW}$. Per $Q = 40\,\mathrm{L/s}$, $H_p = 50{,}6\,\mathrm{m}$ e $\eta = 0{,}72$ si ha $P = \dfrac{9{,}81 \cdot 0{,}040 \cdot 50{,}6}{0{,}72} = 27{,}6\,\mathrm{kW}$. La potenza assorbita moltiplicata per le ore annue di funzionamento dà l'energia consumata, che è la voce principale del costo di esercizio di un impianto di sollevamento.

::schema{nodi="A,1.6,1.2,-;P,4,1.2,-;C,7,4.4,-;U,10.4,4.4,-" acqua="0,1.5 1.6,1.5 1.6,-0.2 0,-0.2;10.4,5.6 12,5.6 12,4 10.4,4" solidi="0,-0.5 1.6,-0.5 1.6,-0.2 0,-0.2;10.4,3.7 12,3.7 12,4 10.4,4" condotte="A-P-C-U,0.16,D" pompa="4,1.2,P" pelo="0,1.6,1.5,monte;10.4,12,5.6,valle" piezometrica="1.6,1.5 4,1.5;4,7.2 10.4,5.6" quote="4.6 1.5,4.6 7.2,H_p,-0.8" etichette="7.5,6.9,piezometrica" titolo="La pompa innalza la piezometrica del salto $H_p$; a valle la piezometrica scende con la cadente fino al pelo del serbatoio di arrivo"}
:::

## Curve caratteristiche e punto di funzionamento

La prevalenza richiesta cresce con la portata, mentre la prevalenza che la pompa riesce a dare diminuisce. La portata effettiva è quella per cui le due coincidono.

:::definizione{#curve-caratteristiche titolo="Curva della condotta e curva della pompa"}
La **curva caratteristica della condotta** è il grafico della prevalenza richiesta in funzione della portata,
$$
H_c(Q) = \Delta z_g + r\,Q^2 ,
$$
una parabola con vertice sull'asse delle ordinate alla quota del dislivello geodetico $\Delta z_g$. La **curva caratteristica della pompa** è il grafico della prevalenza che la macchina fornisce al variare della portata, ricavato dalle prove di collaudo del costruttore e spesso interpolato nella forma
$$
H_p(Q) = H_0 - a\,Q^2 ,
$$
dove $H_0$ è la prevalenza a bocca chiusa. Le due curve servono a prevedere come l'impianto reagisce a una modifica: chiudere parzialmente una saracinesca aumenta $r$ e rende più ripida la curva della condotta, mentre riempire il serbatoio di arrivo aumenta $\Delta z_g$ e la trasla verso l'alto.
:::

:::richiamo{titolo="Teorema degli zeri"}
Sia $f$ continua su $[a, b]$ con $f(a)\,f(b) < 0$. Allora esiste almeno un punto $c \in (a, b)$ con $f(c) = 0$; se inoltre $f$ è strettamente monotona su $[a, b]$, tale punto è unico. Si rimanda all'argomento sulle funzioni continue di Analisi 1.
:::

::::teorema{#punto-di-funzionamento titolo="Punto di funzionamento"}
Siano $H_p$ strettamente decrescente e continua su $[0, +\infty)$, con $H_p(0) = H_0 > \Delta z_g$ e $H_p(Q) \to -\infty$ per $Q \to +\infty$, e sia $H_c(Q) = \Delta z_g + r Q^2$ con $r > 0$. Allora esiste una sola portata $Q_F > 0$ per cui $H_p(Q_F) = H_c(Q_F)$. Tale portata è la portata effettivamente sollevata dall'impianto e il valore comune $H_F = H_c(Q_F)$ è la prevalenza di esercizio.

:::dimostrazione
Si ponga $f(Q) = H_p(Q) - H_c(Q)$, funzione continua su $[0, +\infty)$ perché differenza di funzioni continue.

Risulta $f(0) = H_0 - \Delta z_g > 0$ per ipotesi, mentre per $Q$ abbastanza grande $f(Q) < 0$, poiché $H_p$ tende a $-\infty$ e $H_c$ cresce. Per il teorema degli zeri esiste quindi un punto $Q_F > 0$ in cui $f$ si annulla.

Inoltre $H_p$ è strettamente decrescente e $H_c$ è strettamente crescente su $[0, +\infty)$, quindi $f$ è strettamente decrescente, perciò lo zero è unico.
:::
::::

:::esempio{titolo="Calcolo del punto di funzionamento"}
Una pompa di curva $H_p = 55 - 900\,Q^2$, con $Q$ in $\mathrm{m^3/s}$ e $H_p$ in $\mathrm{m}$, solleva acqua per un dislivello di $30\,\mathrm{m}$ attraverso una condotta con $L = 1000\,\mathrm{m}$, $D = 250\,\mathrm{mm}$ e $\lambda = 0{,}025$, cioè $r = 2115\,\mathrm{s^2/m^5}$. Uguagliando le due prevalenze si ha
$$
55 - 900\,Q^2 = 30 + 2115\,Q^2 ,
\qquad
Q^2 = \frac{25}{3015} = 8{,}29 \cdot 10^{-3} ,
$$
quindi $Q_F = 0{,}0911\,\mathrm{m^3/s}$, cioè $91{,}1\,\mathrm{L/s}$, e $H_F = 30 + 2115 \cdot 8{,}29\cdot10^{-3} = 47{,}5\,\mathrm{m}$.

::grafico{f="30+2115*x^2;55-900*x^2" xmin=0 xmax=0.14 ymin=20 ymax=60 punti="0.0911,47.5,pieno,F" nomi="Q,H" etichette="0.1,32,condotta;0.03,52,pompa" titolo="Punto di funzionamento $F$, con $Q$ in $\mathrm{m^3/s}$ e $H$ in $\mathrm{m}$"}
:::

## Aspirazione, cavitazione e diametro economico

:::definizione{#npsh titolo="Carico netto all'aspirazione"}
Si dice **carico netto all'aspirazione disponibile**, indicato con $\mathrm{NPSH}_d$, il carico assoluto della corrente all'ingresso della pompa diminuito dell'altezza corrispondente alla tensione di vapore. Per una pompa posta alla quota $z_a$ sopra il pelo libero del serbatoio di aspirazione, con perdita $\Delta H_a$ nel tronco aspirante,
$$
\mathrm{NPSH}_d = \frac{p_{\mathrm{atm}} - p_v}{\gamma} - z_a - \Delta H_a .
$$
Il costruttore dichiara per ogni portata il valore richiesto $\mathrm{NPSH}_r$, misurato al banco di prova, che dipende dalla geometria della girante. Il funzionamento è regolare quando $\mathrm{NPSH}_d \geq \mathrm{NPSH}_r$; sotto quel valore si formano bolle di vapore nella girante, che implodono nelle zone a pressione maggiore e corrodono le pale.
:::

:::osservazione{#altezza-di-aspirazione titolo="Altezza massima di aspirazione"}
Dalla condizione $\mathrm{NPSH}_d \geq \mathrm{NPSH}_r$ si ricava la quota massima a cui la pompa può essere installata sopra il pelo libero:
$$
z_a \leq \frac{p_{\mathrm{atm}} - p_v}{\gamma} - \Delta H_a - \mathrm{NPSH}_r .
$$
Per acqua a $20\,^\circ\mathrm{C}$ il primo addendo vale $\dfrac{101{,}3 - 2{,}34}{9{,}81} = 10{,}09\,\mathrm{m}$, perciò la quota utile si riduce di quanto valgono la perdita nel tronco aspirante e il carico richiesto dalla macchina. Con $\Delta H_a = 0{,}38\,\mathrm{m}$ e $\mathrm{NPSH}_r = 3{,}5\,\mathrm{m}$ si ottiene $z_a \leq 6{,}21\,\mathrm{m}$. Il tronco di aspirazione si fa quindi corto, con diametro largo e poche curve, e il bilancio di quel tratto si scrive sempre con tutte le perdite localizzate.

::schema{nodi="S,1.6,0.4,-;G,1.6,2.6,-;P,5.2,3.4,-" acqua="0,1.6 3,1.6 3,-0.8 0,-0.8" solidi="0,-1.1 3,-1.1 3,-0.8 0,-0.8" condotte="S-G-P,0.14,D_a" pompa="5.2,3.4,P" pelo="0,3,1.6,aspirazione" tratteggi="1.6,1.6 6.6,1.6;5.2,3.4 6.6,3.4" quote="6.4 1.6,6.4 3.4,z_a,-0.7" etichette="2.3,3.7,tronco aspirante" titolo="Pompa installata sopra il pelo libero: la quota $z_a$ è limitata dalla pressione atmosferica e dal carico richiesto all'aspirazione"}
:::

:::osservazione{#diametro-economico titolo="Diametro economico"}
In un impianto di sollevamento il diametro non è imposto da un dislivello, perché la pompa fornisce il carico necessario, quindi si sceglie confrontando due costi che variano in senso opposto. Il costo della condotta cresce con il diametro, all'incirca in proporzione a $D$; il costo annuo dell'energia è proporzionale alla prevalenza e quindi contiene il termine $r Q^2$, proporzionale a $D^{-5}$. La somma del costo annuo dell'energia e della quota annua di ammortamento della condotta ha perciò un minimo, e il diametro corrispondente si dice **diametro economico**.

Per $Q = 100\,\mathrm{L/s}$, $L = 2000\,\mathrm{m}$, dislivello $20\,\mathrm{m}$, $\lambda = 0{,}02$, $\eta = 0{,}75$, $4000$ ore annue di funzionamento, energia a $0{,}20\,\text{€/kWh}$, condotta a $800\,\text{€/m}$ per metro di diametro e ammortamento in $25$ anni, il costo totale annuo in migliaia di euro vale
$$
C(D) = 20{,}93 + \frac{0{,}0346}{D^5} + 64\,D ,
$$
con $D$ in metri, e il suo minimo cade a $D = 0{,}373\,\mathrm{m}$, cioè sul diametro commerciale $400\,\mathrm{mm}$.

::grafico{f="20.93+0.0346/x^5;64*x;20.93+0.0346/x^5+64*x" xmin=0.2 xmax=0.6 ymin=0 ymax=90 punti="0.373,49.6,pieno" nomi="D,C" etichette="0.52,17,energia;0.5,37,condotta;0.44,60,totale" titolo="Costo annuo in migliaia di euro al variare del diametro $D$ in metri: il minimo cade a $D = 0{,}373\,\mathrm{m}$"}
:::
