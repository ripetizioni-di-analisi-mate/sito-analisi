---
titolo: Gravitazione e orbite
sommario: Campo gravitazionale, energie, velocità e periodi delle orbite, leggi di Keplero e fuga.
---

## La legge di gravitazione

:::teorema{#legge-gravitazione titolo="Attrazione fra masse"}
Una massa si dice **puntiforme** quando le dimensioni del corpo sono trascurabili rispetto alla distanza dagli altri corpi. Due masse puntiformi $m_1$ e $m_2$ a distanza $r$ si attraggono con due forze di uguale **modulo**, cioè di uguale intensità:
$$
F=G\frac{m_1m_2}{r^2},\qquad G=6{,}67\cdot10^{-11}\,\mathrm{N\cdot m^2/kg^2}.
$$
$G$ è la **costante di gravitazione universale** e ha lo stesso valore per qualunque coppia di corpi. La sua unità, newton per metro quadrato diviso chilogrammo quadrato, è quella che rende $F$ una forza in newton ($\mathrm N$). Per esempio, due masse da $1000\,\mathrm{kg}$ a $1\,\mathrm m$ si attraggono con $F=6{,}67\cdot10^{-11}\cdot10^6\,\mathrm N=6{,}67\cdot10^{-5}\,\mathrm N$.

Ogni forza è diretta verso l’altra massa. Le due forze formano una coppia di azione e reazione (terzo principio della dinamica) e agiscono su corpi diversi.

Un corpo ha **distribuzione di massa sfericamente simmetrica** quando la massa è disposta allo stesso modo in tutte le direzioni attorno al centro, come in una sfera fatta di strati concentrici. All’esterno di un corpo di questo tipo, il suo campo (la forza esercitata su ogni chilogrammo di massa attratta, definita nel paragrafo «Campo e peso») è uguale al campo di un punto della stessa massa posto al centro. In particolare, per due corpi sferici di questo tipo e disgiunti (cioè che non si sovrappongono), nella formula si usa la distanza fra i centri. All’interno di una sfera piena conta soltanto la massa racchiusa entro la distanza del punto dal centro; per una sfera omogenea il campo vale zero al centro e cresce fino alla superficie.

Sopra la superficie di un pianeta di raggio $R$, la quota $h$ dà distanza $r=R+h$ dal centro. Per la gravità *al suolo* vale $r=R$. Se si mettesse nel denominatore la quota zero al posto di $R$, il denominatore sarebbe nullo e la formula non darebbe alcun valore.

La forza è direttamente proporzionale al prodotto $m_1m_2$. Raddoppiando una massa a distanza fissa raddoppia quindi la forza su entrambi i corpi. Le loro accelerazioni, invece, dipendono anche dalle rispettive masse, perché per il secondo principio $a=\dfrac Fm$. A masse fisse, triplicare la distanza moltiplica $r^2$ per $9$ e riduce il modulo a un nono. Quando cambiano più grandezze, si calcola il rapporto fra la nuova forza e quella iniziale, nel quale $G$ si semplifica.
:::

:::esempio{titolo="Versi della coppia gravitazionale"}
Per due masse lungo una retta, $m_1$ è a sinistra e $m_2$ a destra. La forza su $m_1$ è verso destra e la forza su $m_2$ è verso sinistra, con lo stesso modulo $F$. Se $m_2=3m_1$, le accelerazioni valgono $a_1=\dfrac F{m_1}$ e $a_2=\dfrac F{3m_1}$, quindi il secondo corpo ha accelerazione di modulo pari a un terzo del primo. La **quantità di moto** è il prodotto $mv$ di massa e velocità, e in un intervallo $\Delta t$ (la lettera greca delta, $\Delta$, indica una variazione) cambia di $F\Delta t$. Poiché le due forze hanno lo stesso modulo e versi opposti, le due variazioni della quantità di moto hanno lo stesso modulo e verso opposto.

::grafico{assi=0 vettori="0,0,1,0,F_1;4,0,3,0,F_2" punti="0,0,pieno,m_1;4,0,pieno,m_2" xmin=-1 xmax=5 ymin=-1 ymax=1 titolo="Le due forze sono applicate a corpi diversi"}
:::

:::esempio{titolo="Controllo del modello con misure relative"}
Un apparecchio misura la forza fra due masse piccole rispetto alla distanza fra i centri, in tre posizioni. Con distanza $r_1$, $2r_1$ e $3r_1$ la legge prevede $F_1$, $\dfrac{F_1}{4}$ e $\dfrac{F_1}{9}$. Il prodotto $Fr^2$ vale quindi sempre $F_1r_1^2$:
$$
F_1r_1^2,\qquad \frac{F_1}{4}\,(2r_1)^2=F_1r_1^2,\qquad \frac{F_1}{9}\,(3r_1)^2=F_1r_1^2.
$$
Per questo il confronto fra i tre prodotti controlla la legge anche se il sensore non è tarato con precisione in newton, purché la taratura sia la stessa nelle tre misure. In una misura reale le differenze fra i prodotti si confrontano con l’incertezza, cioè con il possibile errore, della distanza e della forza. Nel prodotto la distanza compare al quadrato, quindi un errore relativo dell’$1\%$ su $r$ dà circa il $2\%$ su $r^2$, perché $1{,}01^2\simeq1{,}02$.

::grafico{f="100/x^2" punti="1,100,pieno;2,25,pieno;3,11.111111,pieno" xmin=.9 xmax=3.45 ymin=0 ymax=115 nomi="r/r_1,100 F/F_1" titolo="Raddoppiando e triplicando la distanza la forza scende al 25% e a circa l’11% del valore iniziale"}
:::

## Campo e peso

:::definizione{#campo-gravitazionale titolo="Forza per unità di massa di prova"}
Una **massa di prova** è una massa piccola, che si colloca in un punto per misurare l’attrazione delle altre masse (le **sorgenti**) senza spostarle. Il **campo gravitazionale** in un punto è la forza sulla massa di prova divisa per la massa di prova, cioè la forza per ogni chilogrammo. Fuori da un corpo a simmetria sferica di massa $M$, dividendo $F=G\dfrac{Mm}{r^2}$ per $m$ si ottiene il modulo
$$
g(r)=\frac{GM}{r^2},
$$
e il vettore è diretto verso il centro. L’unità $\mathrm{N/kg}$ è equivalente a $\mathrm{m/s^2}$, perché $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. Un corpo di massa $m$ riceve un **peso** di modulo $mg(r)$. Il campo dipende dalla sorgente e dal punto e non dipende dalla massa del corpo che lo misura, mentre il peso è proporzionale a quella massa.

Alla distanza $2R$ dal centro, $r^2$ è quattro volte $R^2$, quindi il campo è un quarto di quello superficiale. A *quota* $2R$ dalla superficie la distanza dal centro è $R+2R=3R$, quindi il campo si riduce a un nono. Se in un punto agiscono più sorgenti, i loro campi si sommano come vettori:
- se due campi hanno la stessa direzione e lo stesso verso, il modulo totale è la somma dei moduli;
- se hanno versi opposti, il modulo totale è la differenza dei moduli;
- se sono perpendicolari, i due campi sono i cateti di un triangolo rettangolo e il modulo totale si trova con il teorema di Pitagora: con moduli $3$ e $4\,\mathrm{m/s^2}$ si ottiene $\sqrt{3^2+4^2}=5\,\mathrm{m/s^2}$.

Su un asse fra due masse le componenti dei due campi hanno versi opposti e possono annullarsi anche se ciascuna è non nulla. All’esterno del segmento che unisce le masse, le due componenti hanno lo stesso verso.
:::

:::esempio{titolo="Campo a una quota pari al raggio"}
Per un pianeta con $g_0=12\,\mathrm{m/s^2}$ alla superficie, a quota $R$ la distanza dal centro è $2R$ e il campo è
$$
g=\frac{g_0}{4}=3\,\mathrm{m/s^2}.
$$
Un oggetto da $2\,\mathrm{kg}$ pesa $2\cdot12=24\,\mathrm N$ alla superficie e $2\cdot3=6\,\mathrm N$ a quella quota. La massa resta la stessa, perciò il rapporto dei pesi coincide con il rapporto dei campi.

::grafico{f="12/x^2" punti="1,12,pieno,A;2,3,pieno,B" xmin=1 xmax=4 ymin=0 ymax=16 nomi="r/R,g (m/s²)" titolo="A è la superficie e B è a distanza doppia dal centro"}
:::

:::esempio{titolo="Dove si annulla il campo di due sorgenti"}
Due sorgenti puntiformi hanno masse $4M$ e $M$ e distano $6\,\mathrm{km}$. Sulla retta che le unisce si indica con $x$ la distanza in chilometri dalla sorgente maggiore; la distanza dalla minore è allora $6-x$. Fra le sorgenti i due campi puntano in versi opposti, quindi il campo totale è nullo dove i moduli sono uguali. Si scrive l’uguaglianza dei moduli, si semplifica $GM$ e si prende la radice quadrata dei due membri:
$$
\frac{4}{x^2}=\frac{1}{(6-x)^2},
\qquad
\frac{2}{x}=\frac{1}{6-x}.
$$
Poiché entrambe le distanze sono positive, si è scelta la radice positiva. Moltiplicando in croce si ha $2(6-x)=x$, cioè $12=3x$, e risulta $x=4\,\mathrm{km}$. Il punto è più vicino alla massa minore, perché la distanza minore compensa la massa minore. Una massa di prova collocata lì riceve un campo totale nullo nell’istante considerato, anche se ciascuna delle due sorgenti esercita su di essa una forza.

::grafico{assi=0 linee="0,0 6,0" punti="0,0,pieno,A;6,0,pieno,B;4,0,pieno,P" vettori="4,.52,2.5,.52,g_A;4,.52,5.5,.52,g_B" etichette="-.09,-.33,4M;5.88,-.33,M" xmin=-.65 xmax=6.65 ymin=-.72 ymax=1.15 titolo="In P, a 4 km da A e 2 km da B, i due campi hanno moduli uguali"}
:::

## Energia gravitazionale

:::teorema{#energia-gravitazionale titolo="Zero dell’energia all’infinito"}
Per l’energia potenziale gravitazionale si sceglie come zero la situazione in cui i due corpi sono *infinitamente lontani*, cioè così distanti che l’attrazione è trascurabile. Per una massa $m$ all’esterno di una sorgente sferica di massa $M$, a distanza $r$ dal centro, l’energia potenziale vale
$$
U(r)=-\frac{GMm}{r}.
$$
Il valore è negativo, perché per avvicinare il corpo partendo dall’infinito la gravità compie lavoro positivo e l’energia potenziale scende sotto lo zero. Avvicinare il corpo rende quindi $U$ più negativo; allontanarlo fa salire $U$ verso zero.

Se il corpo si sposta dalla distanza $r_i$ (iniziale) alla distanza $r_f$ (finale), la variazione è $\Delta U=U(r_f)-U(r_i)$ e la gravità compie lavoro
$$
W_g=-\Delta U=GMm\left(\frac1{r_f}-\frac1{r_i}\right).
$$
Se la distanza aumenta, $\dfrac1{r_f}$ è minore di $\dfrac1{r_i}$ e il lavoro è negativo. Il lavoro dipende solo dalle distanze iniziale e finale, non dal percorso; su un percorso chiuso, che torna al punto di partenza, il lavoro della gravità è quindi zero. Se più sorgenti agiscono sullo stesso corpo, le energie potenziali, che sono numeri e non vettori, si sommano con il loro segno: due contributi di $-18\,\mathrm{MJ}$ e $-7\,\mathrm{MJ}$ danno $-25\,\mathrm{MJ}$ (un megajoule, $\mathrm{MJ}$, vale $10^6\,\mathrm J$).

Per stabilire se il corpo può allontanarsi senza limite si aggiunge all’energia potenziale l’energia cinetica $K=\dfrac12mv^2$. La velocità va misurata rispetto alla **sorgente dominante**, cioè la massa molto maggiore delle altre. Questo riferimento è approssimativamente **inerziale** (un riferimento in cui vale il primo principio della dinamica) quando la massa del corpo è trascurabile rispetto alla sorgente. Una velocità misurata rispetto a un veicolo in moto darebbe un’energia cinetica diversa e un bilancio sbagliato.

L’energia potenziale $U$ è espressa in joule e dipende anche dalla massa $m$. Il **potenziale gravitazionale** è invece $\Phi=\dfrac Um$ (la lettera greca fi), espresso in joule per chilogrammo. A sorgente e posizione fissate, raddoppiare la massa di prova raddoppia $U$ e lascia uguale $\Phi$.

Per una salita di quota $h$ a partire dalla superficie, di raggio $R$, la differenza esatta è
$$
\begin{aligned}
U(R+h)-U(R)&=GMm\left(\frac1R-\frac1{R+h}\right)\\[6pt]
&=GMm\,\frac{(R+h)-R}{R(R+h)}=\frac{GMmh}{R(R+h)}.
\end{aligned}
$$
Se $h\ll R$ (si legge «$h$ molto minore di $R$»), il denominatore è circa $R\cdot R=R^2$. Poiché $g_0=\dfrac{GM}{R^2}$ è il campo alla superficie, la differenza è circa $m g_0 h$, la formula dell’energia potenziale a gravità costante. Il rapporto fra la stima e il valore esatto è
$$
\frac{mg_0h}{\dfrac{GMmh}{R(R+h)}}=\frac{GMmh}{R^2}\cdot\frac{R(R+h)}{GMmh}=\frac{R+h}{R}=1+\frac hR.
$$
Su piccole quote l’errore relativo $\dfrac hR$ è quindi piccolo; se $h$ è confrontabile con $R$, la stima supera di molto la differenza esatta. La formula $mg_0h$ si usa di solito con lo zero a terra; questa scelta non cambia il confronto, che riguarda solo differenze di energia.
:::

:::esempio{titolo="Un trasferimento fra due distanze"}
Quando $r$ passa da $R$ a $2R$, l’energia potenziale passa da $-\dfrac{GMm}{R}$ a $-\dfrac{GMm}{2R}$. La variazione è
$$
\Delta U=-\frac{GMm}{2R}-\left(-\frac{GMm}{R}\right)=\frac{GMm}{2R},
$$
positiva, quindi per allontanare il corpo occorre fornire energia. La stima a gravità costante con $h=R$ vale $mg_0R=m\dfrac{GM}{R^2}R=\dfrac{GMm}{R}$, il doppio della differenza esatta.

::grafico{f="-1/x" punti="1,-1,pieno,A;2,-.5,pieno,B" xmin=1 xmax=4 ymin=-1.5 ymax=.25 nomi="r/R,U/(GMm/R)" titolo="All’aumentare di r l’energia potenziale cresce verso zero"}
:::

:::esempio{titolo="Scelta della quota per un’approssimazione"}
Si vuole stimare l’aumento di energia potenziale con il campo superficiale, con un errore relativo al più del $5\%$ rispetto al valore esatto. La stima supera il valore esatto della frazione $\dfrac hR$ di quel valore, quindi si impone $\dfrac hR\le0{,}05$. Perciò la quota può arrivare fino a $0{,}05R$. Con $R=6400\,\mathrm{km}$ il limite è $0{,}05\cdot6400=320\,\mathrm{km}$. Il campo a quella quota vale $\dfrac{g_0}{1{,}05^2}\simeq0{,}91\,g_0$, circa il $91\%$ del campo superficiale. Le due percentuali misurano grandezze diverse, perché l’energia dipende dal lavoro su tutto il tratto, lungo il quale il campo varia fra il valore alla superficie e quello alla quota finale.

::grafico{f="100*x/(1+x);100*x" punti="1,50,pieno;1,100,pieno" xmin=0 xmax=1.15 ymin=0 ymax=120 nomi="h/R,100 ΔU/(mg₀R)" legenda="100\,\dfrac{x}{1+x};100x" titolo="La curva dà la variazione esatta. La retta usa il campo costante g₀."}
:::

## Orbite circolari

:::teorema{#orbite titolo="Gravità come risultante centripeta"}
Un **satellite** è un corpo che gira attorno a una sorgente di massa $M$ molto maggiore della sua. Il prodotto $\mu=GM$ (la lettera greca mu) si chiama **parametro gravitazionale** della sorgente e si misura in $\mathrm{m^3/s^2}$. Un corpo che percorre una circonferenza di raggio $r$ a velocità di modulo costante $v$ ha un’**accelerazione centripeta**, diretta verso il centro, di modulo $\dfrac{v^2}{r}$. In un’orbita circolare questa accelerazione è prodotta dalla sola gravità, quindi il campo $\dfrac{\mu}{r^2}$ è uguale a $\dfrac{v^2}{r}$. Moltiplicando per $r$ si ha $v^2=\dfrac\mu r$. Il **periodo** $T$ è il tempo di un giro, cioè la circonferenza $2\pi r$ divisa per la velocità; sostituendo $v$ si ottiene
$$
v=\sqrt{\frac\mu r},\qquad
T=\frac{2\pi r}{v}=2\pi r\sqrt{\frac r\mu}=2\pi\sqrt{\frac{r^3}{\mu}}.
$$
La **velocità angolare** $\omega=\dfrac{2\pi}{T}$ (la lettera greca omega) è l’angolo in radianti percorso ogni secondo, e vale $v=\omega r$.

La forza cala come l’inverso del quadrato del raggio, mentre la velocità circolare cala solo come l’inverso della radice del raggio: a raggio quadruplo il campo è un sedicesimo e la velocità è la metà. Il periodo, invece, cresce con il raggio, perché si percorre una circonferenza più lunga a velocità minore.

Il calcolo suppone che la gravità sia l’unica forza importante e che la velocità sia tangente al cerchio, cioè perpendicolare al raggio. Nella stessa posizione una velocità di modulo diverso, oppure con una componente lungo il raggio, porta a una traiettoria diversa dal cerchio. Lungo un’orbita circolare la gravità, che è radiale, è sempre perpendicolare alla velocità, quindi non compie lavoro. Un astronauta in un veicolo in orbita non avverte il proprio peso perché veicolo e astronauta cadono insieme, con accelerazioni gravitazionali quasi identiche; perciò il pavimento non esercita sull’astronauta alcuna spinta di sostegno, anche se il campo è diverso da zero.
:::

:::esempio{titolo="Stimare la massa centrale da un’orbita"}
Un satellite percorre una circonferenza di raggio $8{,}0\cdot10^6\,\mathrm m$ in $7200\,\mathrm s$. La lunghezza del giro divisa per il periodo dà
$$
v=\frac{2\pi\cdot8{,}0\cdot10^6\,\mathrm m}{7200\,\mathrm s}\simeq6{,}98\cdot10^3\,\mathrm{m/s}.
$$
L’attrazione fornisce l’accelerazione centripeta che cambia la direzione di quella velocità, quindi $v^2=\dfrac\mu r$ e
$$
\mu=v^2r\simeq(6{,}98\cdot10^3)^2\cdot8{,}0\cdot10^6\,\mathrm{m^3/s^2}\simeq3{,}90\cdot10^{14}\,\mathrm{m^3/s^2}.
$$
Dividendo per $G$ si stima la massa centrale, $M=\dfrac\mu G\simeq5{,}8\cdot10^{24}\,\mathrm{kg}$. Ripetendo il calcolo su un’altra orbita dello stesso pianeta si deve trovare lo stesso parametro, a meno dell’incertezza delle misure. Il prodotto $v^2r$ usa il raggio misurato dal centro e la velocità nel riferimento in cui la sorgente è approssimativamente ferma.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" punti="0,0,pieno,O;2,0,pieno,S" vettori="2,0,2,1.33,v;2,0,.9,0,g" xmin=-2.35 xmax=2.9 ymin=-2.35 ymax=2.35 titolo="In S la velocità è tangente e il campo punta verso il centro O"}
:::

:::esempio{titolo="Aumento del raggio orbitale"}
Due orbite circolari attorno allo stesso pianeta hanno raggi $r$ e $4r$. Poiché $v$ è proporzionale a $\dfrac1{\sqrt r}$, la più ampia ha velocità $\dfrac{v}{\sqrt4}=\dfrac v2$, metà dell’altra. Il suo percorso è quattro volte più lungo. Il tempo per completare un giro diventa quindi $4\cdot2=8$ volte maggiore. La massa dei satelliti non compare in $v$ e in $T$, perciò non interviene nel confronto.
:::

:::osservazione{titolo="Il periodo come misura del raggio"}
Per la stessa sorgente, dalla formula di $T$ si ha $\dfrac{T_2}{T_1}=\left(\dfrac{r_2}{r_1}\right)^{\frac32}$, e quindi $\dfrac{r_2}{r_1}=\left(\dfrac{T_2}{T_1}\right)^{\frac23}$: dal rapporto dei periodi si ricava il rapporto dei raggi. Un periodo doppio corrisponde a un raggio moltiplicato per $2^{\frac23}\simeq1{,}59$. Il raggio cresce quindi meno del periodo. In un’orbita ellittica lo stesso calcolo dà il **semiasse maggiore**, cioè metà dell’asse più lungo dell’ellisse. Per ricavare la distanza minima e la distanza massima dalla sorgente occorre conoscere anche la forma dell’orbita.

::grafico{f="x^(3/2)" punti="1,1,pieno;1.587401,2,pieno;4,8,pieno" segmenti="0,2,1.587401,2;1.587401,0,1.587401,2" xmin=0 xmax=4.35 ymin=0 ymax=10 nomi="r/r_1,T/T_1" titolo="Il periodo doppio corrisponde a un raggio di circa 1,59 volte quello di riferimento"}
:::

## Le leggi di Keplero

:::teorema{#keplero titolo="Forma, aree e periodi delle orbite"}
Un’**ellisse** è la curva chiusa formata dai punti per cui la somma delle distanze da due punti fissi, i **fuochi**, è sempre la stessa. Un’orbita è **legata** quando il corpo resta a distanza limitata dalla sorgente. Il **momento angolare** di un corpo che gira attorno a un punto vale $L=mrv_\perp$, dove $v_\perp$ è la componente della velocità perpendicolare al raggio. Si considera il modello di due corpi, in cui una sorgente dominante attrae un corpo molto più leggero. Le tre leggi di Keplero sono queste.
- **Prima legge.** Le orbite legate con momento angolare diverso da zero sono ellissi con la sorgente in un fuoco. Il cerchio è il caso in cui i due fuochi coincidono con il centro.
- **Seconda legge.** Il segmento che va dalla sorgente al corpo, detto **raggio vettore**, spazza aree uguali in tempi uguali.
- **Terza legge.** Il rapporto fra il quadrato del periodo e il cubo del semiasse maggiore $a$ è lo stesso per tutte le orbite attorno alla stessa sorgente.

La seconda legge segue dalla conservazione del momento angolare. Il momento di una forza rispetto a un punto è il prodotto della forza per il **braccio**, la distanza fra il punto e la retta su cui agisce la forza. La retta della forza di gravità passa per il fuoco, quindi il braccio è nullo e il momento della forza rispetto al fuoco è zero; perciò il momento angolare resta costante. Il **pericentro** è il punto dell’orbita più vicino alla sorgente e l’**apocentro** è il più lontano. Vicino al pericentro la distanza è minore, quindi per spazzare la stessa area il raggio vettore deve ruotare di un angolo maggiore. Nei due punti estremi la velocità è perpendicolare al raggio, perciò $v_\perp=v$ e il prodotto $rv$ ha lo stesso valore: $r_pv_p=r_av_a$.

Per la terza legge vale
$$
\frac{T^2}{a^3}=\frac{4\pi^2}{GM}.
$$
In un’ellisse $a$ è metà della somma fra distanza minima e distanza massima dal fuoco. Per due moti attorno alla stessa sorgente vale $\dfrac{T_2}{T_1}=\left(\dfrac{a_2}{a_1}\right)^{\frac32}$. Attorno a sorgenti diverse la costante cambia, perché dipende da $GM=\mu$; il confronto deve allora includere i due parametri gravitazionali:
$$
\frac{T_2}{T_1}=\left(\frac{a_2}{a_1}\right)^{\frac32}\sqrt{\frac{\mu_1}{\mu_2}}.
$$
Per esempio, con lo stesso semiasse e $\mu_2=9\mu_1$ il secondo periodo è $\sqrt{\dfrac19}=\dfrac13$ del primo.
:::

:::osservazione{titolo="Eccentricità e area spazzata"}
Si chiami $c$ la distanza fra il centro dell’ellisse e un fuoco. L’**eccentricità** è $e=\dfrac ca$. Vale $0$ per il cerchio e si avvicina a $1$ per un’ellisse molto allungata. Lungo l’asse maggiore il pericentro dista $a$ dal centro e il fuoco dista $c$, quindi $r_p=a-c=a(1-e)$; allo stesso modo $r_a=a+c=a(1+e)$. Pericentro e apocentro sono i punti in cui la componente della velocità lungo il raggio vale zero, perché lì la distanza smette di diminuire o di aumentare.

In un intervallo breve $\Delta t$, l’area spazzata è circa quella di un triangolo con base $r$ e altezza $v_\perp\Delta t$, cioè $\dfrac12 rv_\perp\Delta t$. Il prodotto $mrv_\perp$ è il momento angolare e resta costante, quindi anche $\dfrac12rv_\perp$, l’area spazzata in un secondo, resta la stessa lungo tutta l’orbita.
:::

:::esempio{titolo="Raggi estremi e semiasse"}
Un satellite passa da distanza minima $2R$ a distanza massima $6R$. Il semiasse maggiore vale $\dfrac{2R+6R}{2}=4R$. Il suo periodo è lo stesso di un satellite in orbita circolare di raggio $4R$ attorno alla stessa sorgente. Le velocità istantanee sono però diverse. Da $r_pv_p=r_av_a$ si ha $v_p=\dfrac{6R}{2R}v_a=3v_a$, cioè la velocità al pericentro è tripla di quella all’apocentro.

::grafico{uguale=1 assi=0 curve="4*cos(t),3.464102*sin(t),0,6.283185" punti="2,0,pieno,F;4,0,pieno,P;-4,0,pieno,A" linee="-4,0 4,0" xmin=-5 xmax=5 ymin=-4 ymax=4 titolo="Dal fuoco F gli estremi P e A distano rispettivamente 2R e 6R"}
:::

:::esempio{titolo="Velocità lungo un’orbita ellittica"}
Si indichino con $r_p,r_a$ i raggi al pericentro e all’apocentro e con $v_p,v_a$ i moduli delle velocità. La conservazione del momento angolare dà $v_a=\dfrac{r_p}{r_a}v_p$. Anche l’energia meccanica si conserva, e per unità di massa vale $\dfrac12v^2-\dfrac\mu r$ in ogni punto. Si uguagliano i valori ai due estremi, si sostituisce $v_a$ e si raccolgono i termini:
$$
\begin{aligned}
\frac12v_p^2-\frac{\mu}{r_p}&=\frac12\,\frac{r_p^2}{r_a^2}\,v_p^2-\frac{\mu}{r_a}\\[6pt]
v_p^2\,\frac{(r_a-r_p)(r_a+r_p)}{r_a^2}&=2\mu\,\frac{r_a-r_p}{r_pr_a}\\[6pt]
v_p^2&=\frac{2\mu r_a}{r_p(r_p+r_a)}.
\end{aligned}
$$
Nel secondo passaggio si è usato $1-\dfrac{r_p^2}{r_a^2}=\dfrac{r_a^2-r_p^2}{r_a^2}$ e $\dfrac1{r_p}-\dfrac1{r_a}=\dfrac{r_a-r_p}{r_pr_a}$; nel terzo si è diviso per $r_a-r_p$. Sostituendo $v_p^2$ nell’energia al pericentro si ottiene
$$
\frac Em=\frac{\mu r_a}{r_p(r_p+r_a)}-\frac{\mu}{r_p}=-\frac{\mu}{r_p+r_a}=-\frac{\mu}{2a}.
$$
Il termine $\dfrac Em$ è l’energia meccanica per unità di massa. Poiché rimane costante, a ogni distanza vale $\dfrac12v^2-\dfrac\mu r=-\dfrac\mu{2a}$, cioè $v^2=\mu\left(\dfrac2r-\dfrac1a\right)$. Nell’ellisse con $a=4R$ il modulo della velocità varia fra i due estremi indicati nel grafico. Il campo, diretto verso la sorgente, aumenta la velocità mentre il satellite si avvicina e la diminuisce mentre si allontana, perché nei due tratti la componente della velocità lungo il raggio ha verso opposto.

::grafico{curve="t,sqrt(24/t-3),2,6" punti="2,3,pieno,P;6,1,pieno,A" xmin=1.85 xmax=6.45 ymin=0 ymax=4 nomi="r/R,v/v_A" titolo="Nell’ellisse con semiasse 4R, il rapporto v/v_A scende da tre a uno fra il punto più vicino e il più lontano"}
:::

## Energia orbitale e fuga

:::teorema{#fuga titolo="Sistemi legati e velocità minima di fuga"}
In un’orbita circolare $v^2=\dfrac{GM}{r}$, quindi l’energia cinetica è $K=\dfrac12mv^2=\dfrac{GMm}{2r}$, mentre l’energia potenziale è $U=-\dfrac{GMm}{r}$. L’energia cinetica vale dunque metà del modulo dell’energia potenziale, e l’energia meccanica totale è
$$
E=K+U=\frac{GMm}{2r}-\frac{GMm}{r}=-\frac{GMm}{2r},
$$
negativa con lo zero all’infinito. Il sistema si dice **legato**.

La **velocità minima di fuga** è la velocità minima con cui un corpo diretto verso l’esterno può arrivare a distanza infinita, dove la sua velocità tende a zero. Si trascurano atmosfera, ostacoli e spinte successive. All’infinito $U=0$ e $K=0$, quindi si impone $E=0$, cioè $\dfrac12mv^2=\dfrac{GMm}{r}$, da cui
$$
v_{\mathrm{fuga}}=\sqrt{\frac{2GM}{r}}.
$$
A parità di raggio la velocità di fuga è $\sqrt2$ volte quella circolare, perché serve un’energia cinetica doppia di quella del moto circolare. Con energia iniziale positiva, all’infinito resta un’energia cinetica uguale a $E$ e la velocità tende a un valore $v_\infty$ diverso da zero; da $\dfrac12mv^2-\dfrac{GMm}{r}=\dfrac12mv_\infty^2$ si ottiene $v^2=v_{\mathrm{fuga}}^2+v_\infty^2$. Per esempio, con $v_{\mathrm{fuga}}=8\,\mathrm{km/s}$ e $v_\infty=6\,\mathrm{km/s}$ serve $v=\sqrt{64+36}\,\mathrm{km/s}=10\,\mathrm{km/s}$. Con energia negativa il corpo non può arrivare a distanza infinita.

Un’orbita **geostazionaria** è un’orbita che mantiene il satellite sempre sopra lo stesso punto della superficie terrestre. Per questo l’orbita è:
- circolare;
- equatoriale, cioè nel piano dell’equatore;
- percorsa nello stesso verso della rotazione terrestre;
- con periodo uguale a un **giorno siderale**, il tempo di un giro della Terra rispetto alle stelle (circa $23\,\mathrm h\;56\,\mathrm{min}$).

Un’orbita inclinata rispetto all’equatore, con lo stesso periodo, porta il satellite alternativamente a nord e a sud dell’equatore, quindi vista da terra la sua latitudine cambia e il satellite non resta sopra lo stesso punto.
:::

:::esempio{titolo="Energia da aggiungere a un satellite"}
Un satellite in orbita circolare ha $K=4\,\mathrm{MJ}$ e $U=-8\,\mathrm{MJ}$. Il totale vale $4-8=-4\,\mathrm{MJ}$. Una spinta ideale del motore, data alla stessa distanza, deve aggiungere almeno $4\,\mathrm{MJ}$ di energia meccanica per raggiungere la soglia $E=0$. L’energia potenziale non cambia, perché la distanza è la stessa, quindi l’energia cinetica passa da $4$ a $8\,\mathrm{MJ}$. L’energia cinetica raddoppia e la velocità aumenta del fattore $\sqrt2$.
:::

:::osservazione{titolo="Soglia e velocità residua"}
L’energia per unità di massa è $\varepsilon=\dfrac12v^2-\dfrac{\mu}{r}$ (la lettera greca epsilon). La tabella riguarda il modello a due corpi con momento angolare diverso da zero. Si suppone che il corpo possa proseguire senza urtare la superficie della sorgente o altri ostacoli. Parabola e iperbole sono curve aperte, che non si richiudono.

| $\varepsilon$ | Traiettoria ideale | Comportamento |
| --- | --- | --- |
| Negativa | Ellisse o cerchio | Distanza limitata |
| Nulla | Parabola | Fuga con $v_\infty=0$ |
| Positiva | Iperbole | Fuga con $v_\infty>0$ |

A parità di posizione iniziale, la condizione $\varepsilon=0$ fissa la velocità minima di fuga. A ogni distanza finita questa velocità è ancora positiva. Mentre il corpo sale, l’energia potenziale tende a zero e l’energia cinetica diminuisce senza salti. Con $\varepsilon>0$ resta invece all’infinito l’energia cinetica $m\varepsilon$. Se si sceglie un altro zero per l’energia potenziale, la soglia della fuga è il valore assegnato a $U(\infty)$, perché il confronto fisico usa la differenza fra l’energia iniziale e quella all’infinito.

::grafico{f="sqrt(2/x);sqrt(2+2/x)" punti="1,1.414214,pieno;1,2,pieno" asintoti="y=1.414214" xmin=1 xmax=10 ymin=0 ymax=2.35 nomi="r/R,v/v_c(R)" legenda="\sqrt{2/x};\sqrt{2+2/x}" titolo="La fuga alla soglia tende a zero. Con energia iniziale positiva la velocità tende a un limite non nullo."}
:::
