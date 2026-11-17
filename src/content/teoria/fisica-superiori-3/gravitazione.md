---
titolo: Gravitazione e orbite
sommario: Campo gravitazionale, energie, velocità e periodi delle orbite, leggi di Keplero e fuga.
---

## La legge di gravitazione

:::teorema{#legge-gravitazione titolo="Attrazione fra masse"}
Due masse puntiformi $m_1,m_2$ a distanza $r$ si attraggono con forze di uguale modulo
$$
F=G\frac{m_1m_2}{r^2},\qquad G=6{,}67\cdot10^{-11}\,\mathrm{N\cdot m^2/kg^2}.
$$
Ogni forza è diretta verso l’altra massa. Le due forze formano una coppia di azione e reazione e agiscono su corpi diversi. All’esterno di un corpo con distribuzione di massa sfericamente simmetrica, il suo campo è uguale al campo di un punto della stessa massa posto al centro. In particolare, per due corpi sferici di questo tipo e disgiunti, si usa nella formula la distanza fra i centri. Sopra la superficie di un pianeta di raggio $R$, la quota $h$ dà distanza $r=R+h$ dal centro. In una domanda sulla gravità *al suolo* vale $r=R$, mentre inserire la quota zero nel denominatore farebbe divergere la formula.

Il prodotto $m_1m_2$ compare linearmente. Raddoppiando una massa a distanza fissa raddoppia la forza su entrambi i corpi. Le loro accelerazioni, invece, dipendono anche dalle rispettive inerzie. A masse fisse, triplicare la distanza riduce il modulo a un nono. Quando cambiano più quantità, conviene calcolare il rapporto fra la nuova forza e quella iniziale, in cui $G$ si semplifica.
:::

:::esempio{titolo="Versi della coppia gravitazionale"}
Per due masse lungo una retta, $m_1$ è a sinistra e $m_2$ a destra. La forza su $m_1$ verso destra e la forza su $m_2$ verso sinistra hanno lo stesso modulo. Se $m_2=3m_1$, il secondo corpo ha accelerazione di modulo pari a un terzo del primo. Nel bilancio della quantità di moto, le due variazioni hanno invece lo stesso modulo e verso opposto.

::grafico{assi=0 vettori="0,0,1,0,F_1;4,0,3,0,F_2" punti="0,0,pieno,m_1;4,0,pieno,m_2" xmin=-1 xmax=5 ymin=-1 ymax=1 titolo="Le due forze sono applicate a corpi diversi"}
:::

:::esempio{titolo="Controllo del modello con misure relative"}
In un apparato con due masse piccole rispetto alla distanza fra i centri si registra il modulo della forza in tre configurazioni. Con distanza $r_1$, $2r_1$ e $3r_1$ la previsione è $F_1$, $\dfrac{F_1}{4}$ e $\dfrac{F_1}{9}$. Il prodotto $F r^2$ deve quindi restare lo stesso. Un confronto fra i prodotti permette di verificare la legge senza conoscere con precisione la taratura assoluta del sensore, purché sia la stessa per le tre misure. In una misura reale si confrontano le differenze con l’incertezza della distanza e della forza. Il termine $r^2$ raddoppia, al primo ordine, l’effetto relativo dell’incertezza di $r$ sul prodotto.

::grafico{f="100/x^2" punti="1,100,pieno;2,25,pieno;3,11.111111,pieno" xmin=.9 xmax=3.45 ymin=0 ymax=115 nomi="r/r_1,100 F/F_1" titolo="Raddoppiando e triplicando la distanza la forza scende al 25% e a circa l’11% del valore iniziale"}
:::

## Campo e peso

:::definizione{#campo-gravitazionale titolo="Forza per unità di massa di prova"}
Il **campo gravitazionale** è la forza per unità di massa di prova. Fuori da un corpo a simmetria sferica di massa $M$, il suo modulo è $g(r)=\dfrac{GM}{r^2}$ e il vettore è diretto verso il centro. L’unità $\mathrm{N/kg}$ è equivalente a $\mathrm{m/s^2}$. Un corpo di massa $m$ riceve peso di modulo $mg(r)$. A differenza del peso, il campo dipende dalla sorgente e dal punto, senza dipendere dalla massa del corpo che lo misura.

Alla distanza $2R$ dal centro il valore si riduce a un quarto di quello superficiale. Dalla superficie a *quota* $2R$, la distanza diventa $3R$ e il valore si riduce a un nono. Se al punto agiscono più sorgenti, si sommano i loro campi come vettori. Su un asse fra due masse le componenti possono annullarsi anche se ciascuna è non nulla; all’esterno del segmento le due componenti hanno lo stesso verso.
:::

:::esempio{titolo="Campo a una quota pari al raggio"}
Per un pianeta con $g_0=12\,\mathrm{m/s^2}$ alla superficie, a quota $R$ il campo è $g_0/4=3\,\mathrm{m/s^2}$. Un oggetto da $2\,\mathrm{kg}$ pesa $24\,\mathrm N$ alla superficie e $6\,\mathrm N$ a quella quota. La massa resta invariata; il rapporto dei pesi coincide con il rapporto dei campi locali.

::grafico{f="12/x^2" punti="1,12,pieno,A;2,3,pieno,B" xmin=1 xmax=4 ymin=0 ymax=16 nomi="r/R,g (m/s²)" titolo="A è la superficie e B è a distanza doppia dal centro"}
:::

:::esempio{titolo="Dove si annulla il campo di due sorgenti"}
Due sorgenti puntiformi hanno masse $4M$ e $M$ e distano $6\,\mathrm{km}$. Sulla congiungente si misura $x$ in chilometri dalla sorgente maggiore. Fra le sorgenti i contributi puntano in versi opposti, quindi si cerca l’uguaglianza dei moduli.
$$
\frac{4}{x^2}=\frac{1}{(6-x)^2},
\qquad
\frac{2}{x}=\frac{1}{6-x}.
$$
Poiché entrambe le distanze sono positive, si è scelta la radice positiva. Risulta $x=4\,\mathrm{km}$. Il punto è più vicino alla massa minore, così la distanza compensa la differenza di massa. Se si colloca lì una massa di prova, il campo totale è nullo nell’istante considerato. Ciascuna delle sorgenti esercita comunque una forza.

::grafico{assi=0 linee="0,0 6,0" punti="0,0,pieno,A;6,0,pieno,B;4,0,pieno,P" vettori="4,.52,2.5,.52,g_A;4,.52,5.5,.52,g_B" etichette="-.09,-.33,4M;5.88,-.33,M" xmin=-.65 xmax=6.65 ymin=-.72 ymax=1.15 titolo="In P, a 4 km da A e 2 km da B, i due campi hanno moduli uguali"}
:::

## Energia gravitazionale

:::teorema{#energia-gravitazionale titolo="Zero dell’energia all’infinito"}
Per una massa $m$ all’esterno di una sorgente sferica $M$, ponendo lo zero quando sono infinitamente lontane, il potenziale è $U(r)=-\dfrac{GMm}{r}$. Avvicinare il corpo rende $U$ più negativo; allontanarlo fa salire $U$ verso zero. Per spostarsi da $r_i$ a $r_f$, la gravità compie lavoro
$$
W_g=-\Delta U=GMm\left(\frac1{r_f}-\frac1{r_i}\right).
$$
Il segno del lavoro è negativo se la distanza aumenta. Per decidere se il corpo può fuggire, si aggiunge al potenziale l’energia cinetica. La velocità va misurata nel riferimento della sorgente dominante, approssimativamente inerziale quando la massa del corpo è trascurabile. Usare una velocità misurata rispetto a un veicolo in moto cambierebbe la cinetica inserita nel bilancio.

L’energia potenziale $U$ è espressa in joule e dipende anche dalla massa $m$. Il **potenziale gravitazionale** è invece $\Phi=\dfrac Um$, espresso in joule per chilogrammo. A sorgente e posizione fissate, cambiare la massa di prova cambia $U$ dello stesso fattore e lascia uguale $\Phi$.

Per una salita di quota $h$ dal raggio $R$, la differenza esatta è $\dfrac{GMmh}{R(R+h)}$. Se $h\ll R$, il denominatore è circa $R^2$, quindi la differenza è circa $m g_0 h$. Il rapporto fra stima a gravità costante e differenza esatta è $1+\dfrac{h}{R}$. Su piccole quote l’errore relativo è dunque piccolo; se $h$ è comparabile a $R$, l’approssimazione sovrastima la differenza. L’uso dello zero locale a terra non altera questa comparazione, che riguarda solo le differenze.
:::

:::esempio{titolo="Un trasferimento fra due distanze"}
Quando $r$ passa da $R$ a $2R$, l’energia passa da $-\dfrac{GMm}{R}$ a $-\dfrac{GMm}{2R}$. Occorre aggiungere energia per allontanare il corpo: il potenziale cresce di $\dfrac{GMm}{2R}$. A gravità superficiale fissata, la stima $mg_0R$ varrebbe $\dfrac{GMm}{R}$, il doppio della differenza esatta.

::grafico{f="-1/x" punti="1,-1,pieno,A;2,-.5,pieno,B" xmin=1 xmax=4 ymin=-1.5 ymax=.25 nomi="r/R,U/(GMm/R)" titolo="All’aumentare di r l’energia potenziale cresce verso zero"}
:::

:::esempio{titolo="Scelta della quota per un’approssimazione"}
Si vuole stimare l’aumento di energia potenziale usando il campo superficiale, con errore relativo al più del $5\%$ rispetto al valore esatto. L’eccesso della stima è $\dfrac{h}{R}$ in proporzione alla differenza esatta. Perciò la quota può arrivare fino a $0{,}05R$. Con $R=6400\,\mathrm{km}$ il limite della stima è $320\,\mathrm{km}$ per questa precisione. Il campo locale a quella quota vale circa il $91\%$ del campo superficiale. Le due percentuali misurano grandezze diverse, perché l’energia dipende dal lavoro compiuto lungo l’intero tratto, quando il campo varia fra i valori ai due estremi.

::grafico{f="100*x/(1+x);100*x" punti="1,50,pieno;1,100,pieno" xmin=0 xmax=1.15 ymin=0 ymax=120 nomi="h/R,100 ΔU/(mg₀R)" legenda="100\,\dfrac{x}{1+x};100x" titolo="La curva dà la variazione esatta. La retta usa il campo costante g₀."}
:::

## Orbite circolari

:::teorema{#orbite titolo="Gravità come risultante centripeta"}
Per un satellite di massa trascurabile rispetto a $M$, si indica con $\mu=GM$ il **parametro gravitazionale** della sorgente. In un’orbita circolare di raggio $r$, il campo $\dfrac{\mu}{r^2}$ fornisce proprio l’accelerazione centripeta $\dfrac{v^2}{r}$. Ne seguono
$$
v=\sqrt{\frac\mu r},\qquad
T=\frac{2\pi r}{v}=2\pi\sqrt{\frac{r^3}{\mu}}.
$$
Il rapporto fra velocità e campo distingue due dipendenze. La forza cala come l’inverso del quadrato del raggio, mentre la velocità circolare cala solo come l’inverso della radice del raggio. Il periodo, invece, cresce, perché si percorre una circonferenza più lunga a velocità minore.

Il calcolo suppone che la gravità sia l’unica forza significativa e che la velocità sia tangente al cerchio. A quella posizione una velocità di modulo diverso, o con componente radiale, porta in generale a un’altra traiettoria. L’assenza di peso apparente in un veicolo orbitante è dovuta alla caduta libera comune: veicolo e astronauta hanno accelerazioni gravitazionali quasi identiche, così spesso manca una spinta di sostegno.
:::

:::esempio{titolo="Stimare la massa centrale da un’orbita"}
Supponiamo che un satellite percorra una circonferenza di raggio $8{,}0\cdot10^6\,\mathrm m$ in $7200\,\mathrm s$. La lunghezza del giro divisa per il periodo dà $v\simeq6{,}98\cdot10^3\,\mathrm{m/s}$. L’attrazione deve garantire l’accelerazione che cambia la direzione di quella velocità. Quindi $\mu=v^2r\simeq3{,}90\cdot10^{14}\,\mathrm{m^3/s^2}$. Dividendo per $G$ si stima la massa centrale. Se si ripete la procedura su un’altra orbita dello stesso pianeta, il parametro deve risultare lo stesso entro l’incertezza delle misure. Il prodotto $v^2r$ usa il raggio misurato dal centro e la velocità nel riferimento in cui la sorgente è approssimativamente ferma.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" punti="0,0,pieno,O;2,0,pieno,S" vettori="2,0,2,1.33,v;2,0,.9,0,g" xmin=-2.35 xmax=2.9 ymin=-2.35 ymax=2.35 titolo="In S la velocità è tangente e il campo punta verso il centro O"}
:::

:::esempio{titolo="Aumento del raggio orbitale"}
Due orbite circolari attorno allo stesso pianeta hanno raggi $r$ e $4r$. La più ampia ha velocità pari a metà dell’altra e un percorso quattro volte più lungo. Il tempo per completare un giro diventa quindi otto volte maggiore. La massa dei satelliti si semplifica prima del confronto.
:::

:::osservazione{titolo="Il periodo come misura del raggio"}
Per la stessa sorgente, dal rapporto dei periodi si può ricavare il rapporto dei raggi circolari. Un periodo doppio significa un raggio moltiplicato per $2^{\frac23}\simeq1{,}59$. La crescita è meno che proporzionale al periodo. In un’orbita ellittica la stessa inversione fornisce il semiasse maggiore. Per ricavare le distanze estreme occorre anche la forma dell’orbita.

::grafico{f="x^(3/2)" punti="1,1,pieno;1.587401,2,pieno;4,8,pieno" segmenti="0,2,1.587401,2;1.587401,0,1.587401,2" xmin=0 xmax=4.35 ymin=0 ymax=10 nomi="r/r_1,T/T_1" titolo="Il periodo doppio corrisponde a un raggio di circa 1,59 volte quello di riferimento"}
:::

## Le leggi di Keplero

:::teorema{#keplero titolo="Forma, aree e periodi delle orbite"}
Nel modello di due corpi con sorgente dominante, le orbite legate con momento angolare non nullo sono ellissi con la sorgente in un fuoco, e il cerchio è il caso con i fuochi coincidenti. La retta di azione della forza passa per il fuoco, quindi il momento rispetto al fuoco è nullo. La conservazione del momento angolare dà aree uguali spazzate da raggio vettore in tempi uguali. In vicinanza del pericentro, la distanza minore richiede uno spostamento angolare maggiore per spazzare la stessa area. Ai due estremi della distanza la velocità è ortogonale al raggio e $rv$ ha lo stesso valore.

Il rapporto $\dfrac{T^2}{a^3}=\dfrac{4\pi^2}{GM}$ comprende il semiasse maggiore $a$. In un’ellisse, $a$ è metà della somma fra distanza minima e massima dal fuoco. Per due moti attorno alla stessa sorgente vale $T_2/T_1=(a_2/a_1)^{3/2}$. A sorgenti diverse cambia il valore della costante; il confronto deve allora includere i due parametri gravitazionali.
:::

:::osservazione{titolo="Eccentricità e area spazzata"}
Si chiami $c$ la distanza fra centro dell’ellisse e fuoco. L’**eccentricità** è $e=\dfrac ca$, perciò dalla geometria dell’asse maggiore si ricavano $r_p=a(1-e)$ e $r_a=a(1+e)$. Il pericentro e l’apocentro sono i punti in cui la componente radiale della velocità si annulla.

In un intervallo breve $\Delta t$, l’area spazzata è circa $\dfrac12 rv_\perp\Delta t$, dove $v_\perp$ è la componente trasversale della velocità. Il prodotto $mrv_\perp$ è il momento angolare e resta costante. Il limite per intervalli piccoli dà la stessa area per unità di tempo lungo tutta l’orbita.
:::

:::esempio{titolo="Raggi estremi e semiasse"}
Un satellite passa da distanza minima $2R$ a distanza massima $6R$. Il semiasse maggiore vale $4R$. Il suo periodo è lo stesso di un satellite in orbita circolare di raggio $4R$ attorno alla stessa sorgente. Le velocità istantanee sono però diverse: per conservare $rv$ agli estremi la velocità al pericentro è tripla di quella all’apocentro.

::grafico{uguale=1 assi=0 curve="4*cos(t),3.464102*sin(t),0,6.283185" punti="2,0,pieno,F;4,0,pieno,P;-4,0,pieno,A" linee="-4,0 4,0" xmin=-5 xmax=5 ymin=-4 ymax=4 titolo="Dal fuoco F gli estremi P e A distano rispettivamente 2R e 6R"}
:::

:::esempio{titolo="Velocità lungo un’orbita ellittica"}
Si indichino con $r_p,r_a$ i raggi al pericentro e all’apocentro e con $v_p,v_a$ i moduli delle velocità. La conservazione del momento angolare impone $v_a=\dfrac{r_p}{r_a}v_p$. Inserendo questo valore nell’uguaglianza fra le energie ai due estremi si ottiene
$$
\begin{aligned}
v_p^2&=\frac{2\mu r_a}{r_p(r_p+r_a)},\\[6pt]
\frac Em&=-\frac{\mu}{r_p+r_a}=-\frac{\mu}{2a}.
\end{aligned}
$$
Il termine $\dfrac Em$ è l’energia meccanica per unità di massa. Poiché rimane costante, a ogni distanza la velocità soddisfa $v^2=\mu\left(\dfrac2r-\dfrac1a\right)$. Nell’ellisse con $a=4R$, il modulo cambia fra i due estremi illustrati. Il campo centrale accelera il satellite durante l’avvicinamento e lo rallenta durante l’allontanamento, perché la componente radiale della velocità cambia segno.

::grafico{curve="t,sqrt(24/t-3),2,6" punti="2,3,pieno,P;6,1,pieno,A" xmin=1.85 xmax=6.45 ymin=0 ymax=4 nomi="r/R,v/v_A" titolo="Nell’ellisse con semiasse 4R, il rapporto v/v_A scende da tre a uno fra il punto più vicino e il più lontano"}
:::

## Energia orbitale e fuga

:::teorema{#fuga titolo="Sistemi legati e velocità minima di fuga"}
In un’orbita circolare $K=\dfrac{GMm}{2r}$ e $U=-\dfrac{GMm}{r}$. L’energia meccanica totale è quindi $E=-\dfrac{GMm}{2r}$, negativa con zero all’infinito. Per la **velocità minima di fuga**, si chiede che il corpo diretto verso l’esterno possa arrivare all’infinito con velocità che tende a zero, trascurando atmosfera, ostacoli e successive spinte. Si impone $E=0$, dunque
$$
v_{\mathrm{fuga}}=\sqrt{\frac{2GM}{r}}.
$$
A parità di raggio la velocità di fuga è $\sqrt2$ volte quella circolare, perché occorre il doppio della cinetica che si ha nel moto circolare. Con energia iniziale positiva, la velocità all’infinito tende a un valore non nullo. Con energia negativa il corpo non può portarsi a distanza infinita nel modello.

Un’orbita geostazionaria è circolare, equatoriale e percorsa nello stesso verso della rotazione terrestre, con periodo uguale a un giorno siderale. Un’orbita inclinata con lo stesso periodo non basta per rimanere sopra lo stesso punto della superficie. L’inclinazione farebbe variare la latitudine osservata da terra.
:::

:::esempio{titolo="Energia da aggiungere a un satellite"}
Un satellite in orbita circolare ha $K=4\,\mathrm{MJ}$ e $U=-8\,\mathrm{MJ}$. Il totale vale $-4\,\mathrm{MJ}$. Un impulso propulsivo ideale alla stessa distanza deve aggiungere almeno $4\,\mathrm{MJ}$ di energia meccanica per raggiungere la soglia $E=0$. L’energia cinetica passa allora da $4$ a $8\,\mathrm{MJ}$ e la velocità aumenta del fattore $\sqrt2$.
:::

:::osservazione{titolo="Soglia e velocità residua"}
L’energia per unità di massa è $\varepsilon=\dfrac12v^2-\dfrac{\mu}{r}$. La tabella riguarda il modello a due corpi con momento angolare non nullo. Si suppone che il corpo possa proseguire senza incontrare la superficie centrale o altri ostacoli.

| $\varepsilon$ | Traiettoria ideale | Comportamento |
| --- | --- | --- |
| Negativa | Ellisse o cerchio | Distanza limitata |
| Nulla | Parabola | Fuga con $v_\infty=0$ |
| Positiva | Iperbole | Fuga con $v_\infty>0$ |

A parità di posizione iniziale, un valore $\varepsilon=0$ fissa la velocità di fuga minima. A ogni distanza finita questa velocità è ancora positiva. Mentre il corpo sale, l’energia potenziale tende a zero e la cinetica diminuisce con continuità. Con $\varepsilon>0$ resta invece la cinetica residua $m\varepsilon$. Se si sceglie un altro zero del potenziale, la soglia è il valore assegnato a $U(\infty)$, perché il confronto fisico usa la differenza fra l’energia iniziale e quella di arrivo.

::grafico{f="sqrt(2/x);sqrt(2+2/x)" punti="1,1.414214,pieno;1,2,pieno" asintoti="y=1.414214" xmin=1 xmax=10 ymin=0 ymax=2.35 nomi="r/R,v/v_c(R)" legenda="\sqrt{2/x};\sqrt{2+2/x}" titolo="La fuga alla soglia tende a zero. Con energia iniziale positiva la velocità tende a un limite non nullo."}
:::
