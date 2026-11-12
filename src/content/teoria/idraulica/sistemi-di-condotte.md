---
titolo: "Sistemi di condotte: serie, parallelo e reti"
sommario: La resistenza idraulica di un ramo, le condotte in serie e in parallelo, la condotta equivalente, l'erogazione lungo il percorso, il problema dei tre serbatoi, le reti aperte ramificate e le reti chiuse a maglie risolte con il metodo di Hardy-Cross.
---

## La resistenza idraulica di un ramo

Un sistema di condotte è formato da più tronchi collegati fra loro in nodi. Ogni tronco si comporta come una lunga condotta, perciò conviene riassumerne il comportamento in un solo coefficiente, che lega la perdita di carico alla portata.

:::richiamo{titolo="Perdita di carico continua (Darcy-Weisbach)"}
In una condotta circolare di diametro $D$ e lunghezza $L$, percorsa in moto permanente dalla portata $Q$, la perdita di carico continua vale
$$
\Delta H = \lambda\,\frac{L}{D}\,\frac{v^2}{2g} ,
\qquad
v = \frac{Q}{A} = \frac{4\,Q}{\pi D^2} ,
$$
con indice di resistenza $\lambda$ letto sull'abaco di Moody in funzione del numero di Reynolds $Re = \dfrac{v D}{\nu}$ e della scabrezza relativa $\dfrac{\varepsilon}{D}$. Si rimanda all'argomento sulle perdite di carico distribuite e localizzate.
:::

:::richiamo{titolo="Schema della lunga condotta"}
Quando la lunghezza della condotta è grande rispetto al diametro, le altezze cinetiche e le perdite localizzate sono piccole rispetto alle perdite continue, perciò si trascurano. Allora il carico totale coincide con il carico piezometrico, la linea dei carichi totali coincide con la piezometrica e fra due serbatoi il dislivello dei peli liberi è uguale alla somma delle perdite continue. Si rimanda all'argomento sulle lunghe condotte e gli impianti di sollevamento.
:::

:::definizione{#resistenza-idraulica titolo="Resistenza idraulica di un ramo"}
Si chiama **resistenza idraulica** del ramo il coefficiente $r$ che compare nella scrittura
$$
\Delta H = r\,Q^2 .
$$
Sostituendo $v = \dfrac{4Q}{\pi D^2}$ nella formula di Darcy-Weisbach si ottiene
$$
r = \frac{8\,\lambda\,L}{g\,\pi^2 D^5} ,
$$
mentre con la formula di Gauckler-Strickler, per una condotta circolare piena in cui $R = \dfrac{D}{4}$, risulta
$$
r = \frac{10{,}29\,L}{k_s^2\,D^{\frac{16}{3}}} .
$$
La resistenza ha le dimensioni di $\mathrm{s^2/m^5}$ e dipende solo dalla geometria del ramo e dalla sua scabrezza. Per $\lambda = 0{,}022$, $L = 1000\,\mathrm{m}$ e $D = 0{,}300\,\mathrm{m}$ si ottiene $r = 748\,\mathrm{s^2/m^5}$, quindi una portata di $100\,\mathrm{L/s}$ produce la perdita $\Delta H = 748 \cdot 0{,}100^2 = 7{,}48\,\mathrm{m}$. Tutto il capitolo si svolge su questa scrittura: ogni ramo entra nei conti con il suo valore di $r$.
:::

:::osservazione{#ipotesi-del-capitolo titolo="Ipotesi di calcolo"}
I risultati che seguono si ottengono sotto le ipotesi seguenti, che vanno verificate caso per caso.

- Il fluido è incomprimibile e il moto è permanente.
- Vale lo schema di lunga condotta, quindi le perdite localizzate e le altezze cinetiche si trascurano.
- L'indice di resistenza $\lambda$ è costante in ciascun ramo.

La terza ipotesi è soddisfatta quando il moto è assolutamente turbolento, perché in quel campo $\lambda$ dipende solo dalla scabrezza relativa. Se invece $\lambda$ dipende ancora da $Re$, la resistenza cambia con la portata e il calcolo si ripete per approssimazioni successive, aggiornando $\lambda$ a ogni passo.
:::

## Condotte in serie

Due rami sono in serie quando il secondo riceve tutta la portata che esce dal primo, cioè quando il nodo che li separa non eroga e non riceve altra portata.

::::teorema{#condotte-in-serie titolo="Resistenza di condotte in serie"}
Siano $n$ rami di resistenze $r_1, \dots, r_n$ collegati in serie fra due sezioni estreme, senza erogazioni nei nodi intermedi. Allora la portata è la stessa in tutti i rami e la perdita di carico complessiva vale $\Delta H = r_{\mathrm{eq}}\,Q^2$ con
$$
r_{\mathrm{eq}} = \sum_{i=1}^{n} r_i .
$$

Il risultato permette di sostituire l'intera successione di tronchi con un solo ramo di resistenza $r_{\mathrm{eq}}$ e di ricavare subito la portata quando è noto il dislivello: per due tronchi con $r_1 = 598{,}4\,\mathrm{s^2/m^5}$ e $r_2 = 1218\,\mathrm{s^2/m^5}$ posti fra due serbatoi con dislivello $18\,\mathrm{m}$ risulta $Q = \sqrt{\dfrac{18}{1817}} = 0{,}0995\,\mathrm{m^3/s}$.

:::dimostrazione
L'idea è che la continuità impone una sola portata e il bilancio di energia somma le perdite.

Nei nodi intermedi non c'è erogazione, quindi l'equazione di continuità dà $Q_1 = Q_2 = \dots = Q_n = Q$.

I carichi totali delle sezioni successive sono $H_0, H_1, \dots, H_n$ e fra due sezioni consecutive vale $H_{i-1} - H_i = r_i Q^2$. Sommando le $n$ uguaglianze i termini intermedi si elidono a due a due, perciò
$$
\Delta H = H_0 - H_n = \sum_{i=1}^{n} r_i Q^2 = \Big(\sum_{i=1}^{n} r_i\Big) Q^2 .
$$
Il confronto con la scrittura $\Delta H = r_{\mathrm{eq}} Q^2$, valida per ogni $Q$, dà la tesi.
:::
::::

::schema{nodi="A,3.5,17;N,15,12,-;V,28,0,-;P,30.5,20,-;Q,30.5,3,-" etichette="15.95,12.95,N;28.95,-0.95,V" condotte="A-N,0.7,tratto 1;N-V,0.6,tratto 2" acqua="0,13 3.5,13 3.5,20 0,20;26,-2 30.5,-2 30.5,3 26,3" solidi="0,12 3.5,12 3.5,13 0,13;26,-3 30.5,-3 30.5,-2 26,-2" pelo="0,3.5,20,monte;26,30.5,3,valle" piezometrica="3.5,20 15,14.07 28,3" quote="Q,P,18.00 m,1.2" titolo="Due condotte in serie: la piezometrica scende da un pelo libero all'altro con due pendenze diverse"}

:::osservazione{#pendenza-della-piezometrica titolo="Lettura della piezometrica"}
Nello schema di lunga condotta la cadente di ciascun tronco vale $J_i = \dfrac{r_i Q^2}{L_i}$, quindi la piezometrica è una spezzata formata da segmenti rettilinei, uno per tronco, e cambia pendenza in ogni nodo. Il tronco di diametro minore ha la cadente maggiore, perciò il suo segmento è il più ripido. La quota piezometrica di un nodo intermedio si ottiene togliendo al carico di monte le perdite dei tronchi che precedono il nodo, e la pressione nel nodo è $\dfrac{p}{\gamma} = h - z$, con $z$ quota geodetica dell'asse della condotta.
:::

## Condotte in parallelo

Due rami sono in parallelo quando partono dallo stesso nodo e arrivano allo stesso nodo.

::::teorema{#condotte-in-parallelo titolo="Resistenza di condotte in parallelo"}
Siano $n$ rami di resistenze $r_1, \dots, r_n$ collegati fra i due stessi nodi $M$ e $V$. Allora tutti i rami hanno la stessa perdita di carico $\Delta H = h_M - h_V$, le portate si sommano e la resistenza equivalente vale
$$
r_{\mathrm{eq}} = \frac{1}{\left(\displaystyle\sum_{i=1}^{n} \frac{1}{\sqrt{r_i}}\right)^{2}} .
$$

Il risultato serve a trattare un fascio di rami come un ramo solo e a prevedere l'effetto di una condotta aggiunta in parallelo a una esistente. Per due rami uguali di resistenza $r$ si ottiene $r_{\mathrm{eq}} = \dfrac{r}{4}$, quindi a parità di dislivello la portata raddoppia.

:::dimostrazione
L'idea è che il carico piezometrico di un nodo è uno solo, perciò tutti i rami che collegano gli stessi due nodi hanno la stessa perdita.

Siano $h_M$ e $h_V$ i carichi dei due nodi e $\Delta H = h_M - h_V > 0$. Per ogni ramo vale $\Delta H = r_i Q_i^2$, quindi
$$
Q_i = \sqrt{\frac{\Delta H}{r_i}} = \frac{\sqrt{\Delta H}}{\sqrt{r_i}} .
$$
L'equazione di continuità nel nodo $M$ dà $Q = \sum_i Q_i$, perciò
$$
Q = \sqrt{\Delta H}\,\sum_{i=1}^{n} \frac{1}{\sqrt{r_i}} .
$$
Elevando al quadrato e ricavando $\Delta H$ si ottiene
$$
\Delta H = \frac{Q^2}{\left(\sum_i r_i^{-\frac{1}{2}}\right)^2} ,
$$
e il confronto con $\Delta H = r_{\mathrm{eq}} Q^2$ dà la tesi.
:::
::::

::schema{nodi="M,4,8;V,24,8,-;B,14,12,-;C,14,4,-" condotte="M-B-V,0.5,ramo 1;M-C-V,0.42,ramo 2" etichette="14,13.4,Q_1;14,2.4,Q_2;25.0,8.0,V" frecce="1,8,3.4,8,Q;24.6,8,27,8,Q" titolo="Due rami in parallelo fra i nodi $M$ e $V$: la perdita è la stessa, le portate si sommano"}

:::osservazione{#ripartizione-parallelo titolo="Ripartizione della portata fra i rami"}
Dalle relazioni $Q_i = \sqrt{\dfrac{\Delta H}{r_i}}$ segue che il rapporto fra due portate non dipende dalla portata complessiva:
$$
\frac{Q_1}{Q_2} = \sqrt{\frac{r_2}{r_1}} .
$$
La portata si distribuisce quindi in proporzione inversa alla radice della resistenza, perciò il ramo più corto e di diametro maggiore ne porta la parte maggiore. Con $r_1 = 643\,\mathrm{s^2/m^5}$ e $r_2 = 2234\,\mathrm{s^2/m^5}$ il rapporto vale $\sqrt{\dfrac{2234}{643}} = 1{,}86$: su una portata complessiva di $150\,\mathrm{L/s}$ il primo ramo ne porta $97{,}6\,\mathrm{L/s}$ e il secondo $52{,}4\,\mathrm{L/s}$.
:::

## La condotta equivalente

:::definizione{#condotta-equivalente titolo="Condotta equivalente"}
Si chiama **condotta equivalente** a un sistema di rami la condotta singola che, percorsa dalla stessa portata, produce la stessa perdita di carico, cioè la condotta di resistenza $r_{\mathrm{eq}}$. Fissati la lunghezza $L_e$ e l'indice di resistenza $\lambda_e$, il suo diametro si ricava dalla definizione di resistenza:
$$
D_e = \left(\frac{8\,\lambda_e\,L_e}{g\,\pi^2\,r_{\mathrm{eq}}}\right)^{\frac{1}{5}} .
$$
La condotta equivalente serve a confrontare soluzioni diverse e a semplificare uno schema complesso prima di risolverlo: un fascio di rami in parallelo, sostituito dalla sua condotta equivalente, entra poi nel calcolo come un tronco qualsiasi in serie con gli altri.
:::

:::esempio{titolo="Sostituzione di due tronchi in serie"}
Due tronchi in serie di resistenze $r_1 = 598{,}4\,\mathrm{s^2/m^5}$ e $r_2 = 1218\,\mathrm{s^2/m^5}$ hanno $r_{\mathrm{eq}} = 1817\,\mathrm{s^2/m^5}$. La condotta equivalente lunga $L_e = 1400\,\mathrm{m}$, con $\lambda_e = 0{,}023$, ha diametro
$$
D_e = \left(\frac{8 \cdot 0{,}023 \cdot 1400}{9{,}81 \cdot \pi^2 \cdot 1817}\right)^{\frac{1}{5}} = 0{,}271\,\mathrm{m} ,
$$
cioè $271\,\mathrm{mm}$. Il diametro commerciale immediatamente superiore è $300\,\mathrm{mm}$, che dà una resistenza minore e quindi, a parità di dislivello, una portata maggiore di quella del sistema di partenza.
:::

:::osservazione{#raddoppio titolo="Raddoppio di una condotta"}
Affiancare a una condotta esistente una seconda condotta uguale, sullo stesso percorso, equivale a dimezzare la resistenza del tratto raddoppiato secondo $r_{\mathrm{eq}} = \dfrac{r}{4}$. Se il raddoppio interessa solo una parte della lunghezza, il sistema diventa la serie di due elementi: il tratto raddoppiato, con resistenza $\dfrac{r'}{4}$, e il tratto rimasto singolo, con la sua resistenza $r''$. Il raddoppio di $n$ condotte uguali porta a $r_{\mathrm{eq}} = \dfrac{r}{n^2}$, quindi a parità di dislivello la portata diventa $n$ volte quella iniziale.
:::

:::attenzione
Il diametro della condotta equivalente a due rami in parallelo non è la somma dei due diametri.

Due rami uguali di diametro $200\,\mathrm{mm}$ e stessa lunghezza hanno $r_{\mathrm{eq}} = \dfrac{r}{4}$, quindi $D_e^5 = 4\,D^5$ e $D_e = 4^{\frac{1}{5}}\cdot 200 = 264\,\mathrm{mm}$, non $400\,\mathrm{mm}$. Una condotta da $400\,\mathrm{mm}$ avrebbe resistenza $\dfrac{r}{32}$, cioè otto volte minore di quella della coppia.
:::

## Erogazione lungo il percorso

Nelle reti di distribuzione gli utenti sono distribuiti lungo le strade, perciò la portata di un tronco diminuisce procedendo verso valle.

:::definizione{#portata-distribuita titolo="Portata distribuita"}
Un tronco lungo $L$ eroga lungo il percorso quando perde portata con continuità attraverso gli allacciamenti laterali. Detta $p$ la **portata distribuita** per unità di lunghezza, supposta costante, la portata nella sezione a distanza $x$ dall'estremo di monte vale
$$
Q(x) = Q_m - p\,x ,
\qquad
p = \frac{Q_m - Q_v}{L} ,
$$
dove $Q_m$ è la portata entrante a monte e $Q_v = Q(L)$ la **portata di transito**, cioè quella che prosegue verso i tronchi successivi. La portata erogata dal tronco è $Q_m - Q_v = p\,L$.
:::

::schema{nodi="M,2,6;V,20,6" condotte="M-V,0.45," frecce="4,5.4,4,3.8,;6,5.4,6,3.8,;8,5.4,8,3.8,;10,5.4,10,3.8,;12,5.4,12,3.8,;14,5.4,14,3.8,;16,5.4,16,3.8,;18,5.4,18,3.8," etichette="2,7.6,Q_m;20,7.6,Q_v;11,2.8,erogazione uniforme p" titolo="Tronco con erogazione uniforme: la portata scende da $Q_m$ a $Q_v$"}

:::richiamo{titolo="Integrazione per sostituzione"}
Se $u = \varphi(x)$ è derivabile con derivata continua e $f$ è continua, allora
$$
\int_a^b f\big(\varphi(x)\big)\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(u)\,du .
$$
Si rimanda all'argomento sugli integrali di Analisi 1.
:::

::::teorema{#perdita-con-erogazione titolo="Perdita di carico con erogazione uniforme"}
Sia un tronco di resistenza $r$ e lunghezza $L$ con erogazione uniforme, portata entrante $Q_m$ e portata di transito $Q_v$, e sia la resistenza distribuita in modo uniforme lungo il tronco. Allora la perdita di carico complessiva vale
$$
\Delta H = \frac{r}{3}\left(Q_m^2 + Q_m Q_v + Q_v^2\right) .
$$

La formula permette di trattare il tronco come un ramo ordinario percorso da una portata costante opportuna, e mostra che la perdita è minore di quella che si avrebbe se tutta la portata $Q_m$ arrivasse a valle. Per $r = 1071\,\mathrm{s^2/m^5}$, $Q_m = 120\,\mathrm{L/s}$ e $Q_v = 60\,\mathrm{L/s}$ si ottiene $\Delta H = 9{,}00\,\mathrm{m}$, contro i $15{,}4\,\mathrm{m}$ del calcolo con la sola $Q_m$.

:::dimostrazione
L'idea è di scrivere la perdita del tratto infinitesimo e di integrare lungo il tronco.

La resistenza per unità di lunghezza vale $\dfrac{r}{L}$, quindi il tratto $dx$ posto a distanza $x$ da monte dà la perdita $dH = \dfrac{r}{L}\,Q(x)^2\,dx$. Integrando su tutto il tronco,
$$
\Delta H = \frac{r}{L}\int_0^L \left(Q_m - p\,x\right)^2 dx .
$$
Sia $Q_m \neq Q_v$, cioè $p \neq 0$. Con la sostituzione $u = Q_m - p\,x$, da cui $du = -p\,dx$, gli estremi diventano $u(0) = Q_m$ e $u(L) = Q_v$, perciò
$$
\int_0^L \left(Q_m - p\,x\right)^2 dx = \frac{1}{p}\int_{Q_v}^{Q_m} u^2\,du = \frac{Q_m^3 - Q_v^3}{3\,p} .
$$
Poiché $p = \dfrac{Q_m - Q_v}{L}$ e $Q_m^3 - Q_v^3 = (Q_m - Q_v)\left(Q_m^2 + Q_m Q_v + Q_v^2\right)$, il fattore $Q_m - Q_v$ si semplifica e resta
$$
\Delta H = \frac{r}{L}\cdot\frac{L\left(Q_m^2 + Q_m Q_v + Q_v^2\right)}{3} = \frac{r}{3}\left(Q_m^2 + Q_m Q_v + Q_v^2\right) .
$$
Se invece $Q_m = Q_v$, l'integrando è costante e si ritrova $\Delta H = r\,Q_m^2$, che è il valore dato dalla formula.
:::
::::

:::definizione{#portata-equivalente titolo="Portata equivalente"}
Si chiama **portata equivalente** del tronco con erogazione la portata costante che produce la stessa perdita di carico:
$$
Q_e = \sqrt{\frac{Q_m^2 + Q_m Q_v + Q_v^2}{3}} ,
\qquad
\Delta H = r\,Q_e^2 .
$$
Con $Q_e$ al posto della portata effettiva, il tronco rientra in tutte le regole viste per la serie e il parallelo. Quando tutta la portata entrante viene erogata, cioè $Q_v = 0$, risulta $Q_e = \dfrac{Q_m}{\sqrt{3}} = 0{,}577\,Q_m$ e la perdita si riduce a un terzo di quella calcolata con $Q_m$.
:::

:::osservazione{#portata-media-pratica titolo="Formula pratica della portata media"}
Nel dimensionamento delle reti di distribuzione si usa spesso la portata media
$$
Q_e \simeq Q_v + 0{,}55\,(Q_m - Q_v) ,
$$
che per $Q_v = 0$ dà $0{,}55\,Q_m$ contro il valore esatto $0{,}577\,Q_m$. Lo scarto sulla perdita di carico resta entro il $10\%$, cioè entro l'incertezza con cui si stima $\lambda$, perciò la formula pratica è accettabile in sede di progetto; nelle verifiche conviene usare l'espressione esatta.
:::

## Il problema dei tre serbatoi

:::definizione{#nodo-di-diramazione titolo="Nodo di diramazione"}
Un **nodo di diramazione** è un punto in cui confluiscono tre o più rami. Nel nodo il carico piezometrico ha un solo valore $h_N$, perciò ogni ramo che lo collega a un serbatoio di quota $z_i$ ha perdita $|z_i - h_N|$, e la portata del ramo, presa positiva quando è diretta verso il nodo, vale
$$
Q_i = \operatorname{sgn}(z_i - h_N)\,\sqrt{\frac{|z_i - h_N|}{r_i}} .
$$
L'incognita del problema è quindi il solo valore $h_N$: trovato quello, le portate si leggono una per una dalla formula precedente.
:::

::schema{nodi="N,18,6,-;A,3.5,16;B,13,14;C,26,2,-" etichette="17.2,5.2,N;26.8,1.2,C" condotte="A-N,0.55,ramo A;B-N,0.45,ramo B;N-C,0.65,ramo C" acqua="0,13 3.5,13 3.5,20 0,20;10,14 13,14 13,17 10,17;26,-1 30,-1 30,5 26,5" solidi="0,12 3.5,12 3.5,13 0,13;10,13 13,13 13,14 10,14;26,-2 30,-2 30,-1 26,-1" pelo="0,3.5,20,z_A;10,13,17,z_B;26,30,5,z_C" titolo="Tre serbatoi collegati al nodo di diramazione $N$"}

:::richiamo{titolo="Teorema degli zeri"}
Sia $f$ continua su $[a, b]$ con $f(a)\,f(b) < 0$. Allora esiste $c \in (a, b)$ tale che $f(c) = 0$; se inoltre $f$ è strettamente monotona, tale $c$ è unico. Si rimanda all'argomento sulle funzioni continue di Analisi 1.
:::

::::teorema{#tre-serbatoi titolo="Esistenza e unicità del carico nel nodo"}
Siano $n \geq 2$ serbatoi di quote $z_1, \dots, z_n$ non tutte uguali, collegati a un nodo $N$ da rami di resistenze $r_1, \dots, r_n$, senza erogazione nel nodo. Allora il carico piezometrico $h_N$ che soddisfa la continuità esiste ed è unico, e appartiene all'intervallo $\left[\min_i z_i,\ \max_i z_i\right]$.

Il teorema garantisce che il procedimento per tentativi su $h_N$ converge a una sola soluzione, qualunque sia il valore di primo tentativo: la funzione da annullare è monotona, quindi il segno dello squilibrio dice subito se il tentativo successivo va alzato o abbassato.

:::dimostrazione
L'idea è di scrivere la continuità come una sola equazione in $h_N$ e di studiarne la monotonia.

Si ponga, per $h$ reale,
$$
\Phi(h) = \sum_{i=1}^{n} \operatorname{sgn}(z_i - h)\,\sqrt{\frac{|z_i - h|}{r_i}} ,
$$
che è la somma delle portate dirette verso il nodo. La continuità nel nodo si scrive $\Phi(h_N) = 0$.

Ciascun addendo è una funzione continua di $h$, perché $t \mapsto \operatorname{sgn}(t)\sqrt{|t|}$ è continua, e strettamente decrescente, perché $t \mapsto \operatorname{sgn}(t)\sqrt{|t|}$ è strettamente crescente e $h \mapsto z_i - h$ è strettamente decrescente. Quindi $\Phi$ è continua e strettamente decrescente su tutto $\mathbb{R}$.

Siano $z_{\min}$ e $z_{\max}$ la minima e la massima delle quote. In $h = z_{\min}$ ogni addendo è maggiore o uguale a zero e almeno uno è positivo, perché le quote non sono tutte uguali; perciò $\Phi(z_{\min}) > 0$. In $h = z_{\max}$, con lo stesso argomento, $\Phi(z_{\max}) < 0$.

Per il teorema degli zeri esiste $h_N \in (z_{\min}, z_{\max})$ con $\Phi(h_N) = 0$, e la stretta decrescenza assicura che non ce ne siano altri.
:::
::::

::grafico{f="sqrt(abs(20-x))/27*(2*(x<20)-1)+sqrt(abs(15-x))/39*(2*(x<15)-1)-sqrt(abs(x-5))/20" xmin=5 xmax=21 ymin=-0.31 ymax=0.26 punti="12.71,0,pieno" nomi="h,Φ" titolo="La funzione $\Phi$ è strettamente decrescente, quindi si annulla in un solo punto, che è il carico $h_N$ del nodo"}

:::osservazione{#verso-ramo-centrale titolo="Verso della portata nel ramo intermedio"}
Con tre serbatoi di quote $z_A > z_B > z_C$ il verso della portata nel ramo intermedio si stabilisce prima di risolvere, provando $h_N = z_B$. Con questo valore il ramo $B$ non è percorso, e la continuità richiede
$$
\sqrt{\frac{z_A - z_B}{r_A}} = \sqrt{\frac{z_B - z_C}{r_C}} .
$$
Si confrontano allora i due membri:

- se il primo membro è minore del secondo, il ramo $C$ chiede più portata di quanta ne arrivi da $A$, quindi $h_N < z_B$ e il serbatoio $B$ alimenta il nodo;
- se il primo membro è maggiore del secondo, da $A$ arriva più portata di quanta ne vada in $C$, quindi $h_N > z_B$ e il nodo alimenta il serbatoio $B$;
- se i due membri sono uguali, risulta $h_N = z_B$ e nel ramo intermedio la portata è nulla.

Stabilito il verso, le tre portate si scrivono con i segni corretti e l'equazione di continuità diventa $Q_A + Q_B = Q_C$ nel primo caso e $Q_A = Q_B + Q_C$ nel secondo.
:::

## Reti aperte ramificate

:::definizione{#rete-ramificata titolo="Rete aperta ramificata"}
Una **rete aperta ramificata** è una rete il cui schema non contiene maglie chiuse: da ogni nodo si raggiunge la fonte di alimentazione lungo un solo percorso. La portata di ciascun ramo si ricava allora dalla sola continuità, partendo dai nodi terminali e risalendo verso la fonte: la portata di un ramo è la somma delle erogazioni di tutti i nodi che stanno a valle di esso. Note le portate, le perdite si calcolano ramo per ramo e i carichi piezometrici dei nodi si ottengono scendendo dal serbatoio lungo i percorsi.
:::

::schema{nodi="S,2,10;A,10,10;B,18,14;C,18,6,-;D,26,14" etichette="18.85,5.15,C" condotte="S-A,0.5,0;A-B,0.4,1;A-C,0.4,2;B-D,0.33,3" acqua="0,7 2,7 2,12 0,12" solidi="0,6 2,6 2,7 0,7" pelo="0,2,12,serbatoio" frecce="18.9,14,20.2,14,;18.9,6,20.2,6,;26.9,14,28.2,14," titolo="Rete aperta ramificata: da ogni nodo si risale al serbatoio lungo un solo percorso"}

:::osservazione{#dimensionamento-rami titolo="Dimensionamento di un ramo"}
Nel progetto sono assegnate le erogazioni dei nodi e la pressione minima $\dfrac{p_{\min}}{\gamma}$ richiesta in ciascuno di essi. Per un ramo che va dal nodo $M$, di carico noto $h_M$, al nodo terminale $V$ di quota $z_V$, la perdita disponibile è
$$
\Delta H_{\mathrm{disp}} = h_M - z_V - \frac{p_{\min}}{\gamma} ,
$$
e il diametro minimo si ricava imponendo $r\,Q^2 = \Delta H_{\mathrm{disp}}$, cioè
$$
D \geq \left(\frac{8\,\lambda\,L\,Q^2}{g\,\pi^2\,\Delta H_{\mathrm{disp}}}\right)^{\frac{1}{5}} .
$$
Si adotta poi il diametro commerciale immediatamente superiore e si ricalcola la perdita effettiva, che risulta minore di quella disponibile; la verifica si chiude controllando che la velocità resti nell'intervallo di uso corrente, fra $0{,}5$ e $2\,\mathrm{m/s}$ circa.
:::

:::esempio{titolo="Pressione in un nodo terminale"}
Un serbatoio con pelo libero a $100{,}00\,\mathrm{m}$ alimenta il tronco $0$ ($r_0 = 571{,}2\,\mathrm{s^2/m^5}$) che porta $120\,\mathrm{L/s}$ al nodo $A$, dal quale partono i rami $A\!-\!B$ ($r_B = 3563\,\mathrm{s^2/m^5}$, $40\,\mathrm{L/s}$) e $A\!-\!C$ ($r_C = 1861\,\mathrm{s^2/m^5}$, $80\,\mathrm{L/s}$). Risulta
$$
h_A = 100{,}00 - 571{,}2 \cdot 0{,}120^2 = 91{,}77\,\mathrm{m} ,
$$
quindi $h_B = 91{,}77 - 3563 \cdot 0{,}040^2 = 86{,}07\,\mathrm{m}$ e $h_C = 91{,}77 - 1861 \cdot 0{,}080^2 = 79{,}86\,\mathrm{m}$. Con i nodi $B$ e $C$ alle quote $70{,}00\,\mathrm{m}$ e $65{,}00\,\mathrm{m}$ le pressioni valgono $16{,}07\,\mathrm{m}$ e $14{,}86\,\mathrm{m}$ di colonna d'acqua, cioè $158\,\mathrm{kPa}$ e $146\,\mathrm{kPa}$.
:::

## Reti chiuse a maglie

In una rete chiusa ogni nodo è raggiunto da più percorsi, perciò la sola continuità non basta a determinare le portate e occorre aggiungere il bilancio di energia lungo i circuiti chiusi.

:::definizione{#equazioni-ai-nodi titolo="Equazioni ai nodi"}
In ogni nodo della rete la portata entrante è uguale a quella uscente, perciò, detta $E_j$ l'erogazione concentrata nel nodo $j$ e preso il segno positivo per le portate entranti,
$$
\sum_{i \in j} Q_i = E_j .
$$
Su una rete con $n$ nodi si scrivono $n - 1$ equazioni indipendenti, perché la somma di tutte le equazioni ai nodi esprime il bilancio complessivo fra portate immesse ed erogate e quindi non aggiunge informazione.
:::

:::definizione{#equazioni-alle-maglie titolo="Equazioni alle maglie"}
Si fissa un verso di percorrenza di una maglia chiusa e si prende positiva la portata di un ramo quando è concorde con quel verso. Poiché il carico piezometrico di ogni nodo ha un solo valore, la somma algebrica delle perdite lungo la maglia è nulla:
$$
\sum_{i \in \text{maglia}} r_i\,Q_i\,|Q_i| = 0 .
$$
Il prodotto $Q_i |Q_i|$ sostituisce $Q_i^2$ perché la perdita deve cambiare segno con il verso della portata, e vale $Q_i^2$ quando $Q_i > 0$.
:::

::schema{nodi="A,4,16;B,15,16;C,26,16;D,4,5;E,15,5;F,26,5" condotte="A-B,0.38,r_AB;B-C,0.38,r_BC;C-F,0.38,r_CF;E-F,0.38,r_EF;D-E,0.38,r_DE;A-D,0.38,r_AD;B-E,0.38,r_BE" frecce="4,19.5,4,17,Q" etichette="9.5,10.5,maglia I;20.5,10.5,maglia II" titolo="Rete a due maglie: il ramo $B\!-\!E$ appartiene a entrambe"}

:::osservazione{#numero-di-equazioni titolo="Numero di equazioni indipendenti"}
Una rete con $l$ rami e $n$ nodi ha $l$ portate incognite. Le equazioni ai nodi indipendenti sono $n - 1$, perciò le equazioni alle maglie necessarie sono
$$
m = l - (n - 1) = l - n + 1 ,
$$
che è anche il numero di maglie indipendenti dello schema, cioè delle maglie elementari che non ne contengono altre al loro interno. Per la rete di sei nodi e sette rami della figura risulta $m = 7 - 6 + 1 = 2$, in accordo con le due maglie elementari. Il sistema delle $n-1$ equazioni ai nodi e delle $m$ equazioni alle maglie ha tante equazioni quante incognite, ma le equazioni alle maglie sono quadratiche, perciò si risolve per approssimazioni successive.
:::

## Il metodo di Hardy-Cross

:::richiamo{titolo="Metodo di Newton"}
Sia $F$ derivabile con $F'(x_0) \neq 0$. Sostituendo a $F$ la sua retta tangente in $x_0$ si ottiene l'approssimazione
$$
x_1 = x_0 - \frac{F(x_0)}{F'(x_0)}
$$
dello zero di $F$. Si rimanda all'argomento sulle derivate e le loro applicazioni di Analisi 1.
:::

::::teorema{#hardy-cross titolo="Correzione di Hardy-Cross"}
Sia una maglia percorsa in un verso fissato, formata da rami di resistenze $r_i$, e sia $Q_i^{(0)}$ una distribuzione di portate che soddisfa tutte le equazioni ai nodi. Si correggano tutte le portate della maglia della stessa quantità $\Delta Q$. Allora le equazioni ai nodi restano soddisfatte per ogni $\Delta Q$, e il valore che annulla l'approssimazione lineare dell'equazione di maglia è
$$
\Delta Q = -\,\frac{\displaystyle\sum_i r_i\,Q_i^{(0)}\,\big|Q_i^{(0)}\big|}{2\displaystyle\sum_i r_i\,\big|Q_i^{(0)}\big|} .
$$

La formula è il passo del metodo che risolve le reti a maglie: si parte da una distribuzione qualsiasi compatibile con la continuità, si calcola $\Delta Q$ maglia per maglia, si correggono le portate e si ripete finché $\Delta Q$ scende sotto la tolleranza fissata.

:::dimostrazione
L'idea è che una correzione uguale su tutti i rami della maglia non altera i bilanci ai nodi, e che l'equazione di maglia si risolve con un passo del metodo di Newton.

Ogni nodo della maglia appartiene a due suoi rami consecutivi. Percorrendo la maglia nel verso fissato, uno dei due porta portata verso il nodo e l'altro la porta via, perciò la correzione $\Delta Q$ entra nel bilancio del nodo una volta con il segno più e una volta con il segno meno e la somma resta invariata. Le equazioni ai nodi restano quindi soddisfatte.

Si ponga
$$
F(\Delta Q) = \sum_i r_i\left(Q_i^{(0)} + \Delta Q\right)\left|Q_i^{(0)} + \Delta Q\right| ,
$$
cioè la somma delle perdite lungo la maglia dopo la correzione. La funzione $t \mapsto t\,|t|$ è derivabile con derivata $2|t|$, perciò
$$
F'(\Delta Q) = 2\sum_i r_i\left|Q_i^{(0)} + \Delta Q\right| .
$$
L'equazione di maglia è $F(\Delta Q) = 0$. Applicando il metodo di Newton a partire da $\Delta Q = 0$ si ottiene
$$
\Delta Q = -\,\frac{F(0)}{F'(0)} = -\,\frac{\sum_i r_i\,Q_i^{(0)}\big|Q_i^{(0)}\big|}{2\sum_i r_i\big|Q_i^{(0)}\big|} ,
$$
che è la tesi. Si osservi inoltre che $F$ è strettamente crescente, perché somma di funzioni strettamente crescenti con $r_i > 0$, quindi l'equazione di maglia ha una sola soluzione in $\Delta Q$.
:::
::::

:::osservazione{#procedura-hardy-cross titolo="Procedura di calcolo"}
Il calcolo si organizza in una tabella con una riga per ramo e le colonne $r_i$, $Q_i$, $r_i Q_i |Q_i|$ e $r_i |Q_i|$; in fondo si sommano le ultime due colonne e si ricava $\Delta Q$. I passi sono i seguenti.

- Si sceglie il verso di percorrenza di ogni maglia e si assegna il segno alle portate.
- Si assume una distribuzione iniziale che soddisfa le equazioni ai nodi.
- Si calcola $\Delta Q$ con la formula di correzione e si sommano $\Delta Q$ a tutte le portate della maglia, con il segno che compete al ramo.
- Il ramo in comune fra due maglie riceve le correzioni di entrambe, ciascuna con il proprio segno.
- Si ripete finché $|\Delta Q|$ è minore della tolleranza fissata, per esempio $1\,\mathrm{L/s}$, oppure finché la somma $\sum r_i Q_i |Q_i|$ è minore di qualche centesimo di metro.

Il criterio di arresto va dichiarato prima di cominciare, perché stabilisce quante cifre del risultato sono significative.
:::

## Pompa inserita in un ramo

:::osservazione{#pompa-in-un-ramo titolo="Ramo con pompa"}
Una pompa inserita in un ramo fornisce al fluido la prevalenza $H_p$, quindi innalza di $H_p$ il carico totale fra la sezione di aspirazione e quella di mandata. Il bilancio del ramo fra i nodi $M$ e $V$ diventa
$$
h_M + H_p = h_V + r\,Q^2 ,
$$
e nell'equazione di maglia il termine $-H_p$ si somma alle perdite, con il segno positivo quando la pompa spinge nel verso di percorrenza. La potenza assorbita dalla pompa vale $P = \dfrac{\gamma\,Q\,H_p}{\eta}$, con $\eta$ rendimento dell'impianto di sollevamento. Se la prevalenza non è costante, si usa la curva caratteristica $H_p = H_p(Q)$ e il bilancio del ramo diventa un'equazione nella sola $Q$. Si rimanda all'argomento sulle lunghe condotte e gli impianti di sollevamento per la curva caratteristica e il punto di funzionamento.
:::

::schema{nodi="A,3.5,3;N,15,10;V,28,16" condotte="A-N,0.6,tratto 1;N-V,0.5,tratto 2" pompa="9,6.3,P" acqua="0,0 3.5,0 3.5,5 0,5;28,13 32,13 32,18 28,18" solidi="0,-1 3.5,-1 3.5,0 0,0;28,12 32,12 32,13 28,13" pelo="0,3.5,5,aspirazione;28,32,18,mandata" titolo="Pompa inserita in un ramo: il carico totale sale di $H_p$ attraversando la macchina"}

:::esempio{titolo="Prevalenza di una pompa in un sistema serie-parallelo"}
Una pompa solleva $100\,\mathrm{L/s}$ da un serbatoio con pelo a $10{,}00\,\mathrm{m}$ a uno con pelo a $50{,}00\,\mathrm{m}$. Il tratto comune ha $r_0 = 714\,\mathrm{s^2/m^5}$ e i due rami in parallelo che seguono hanno resistenza equivalente $r_p = 549\,\mathrm{s^2/m^5}$. Le perdite valgono $714 \cdot 0{,}100^2 = 7{,}14\,\mathrm{m}$ e $549 \cdot 0{,}100^2 = 5{,}49\,\mathrm{m}$, perciò
$$
H_p = 40{,}00 + 7{,}14 + 5{,}49 = 52{,}63\,\mathrm{m} .
$$
Con rendimento $\eta = 0{,}72$ la potenza assorbita è $P = \dfrac{9{,}81 \cdot 0{,}100 \cdot 52{,}63}{0{,}72} = 71{,}7\,\mathrm{kW}$.
:::
