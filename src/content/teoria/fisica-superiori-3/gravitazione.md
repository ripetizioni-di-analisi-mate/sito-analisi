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

## Campo e peso

:::definizione{#campo-gravitazionale titolo="Forza per unità di massa di prova"}
Il **campo gravitazionale** è la forza per unità di massa di prova. Fuori da un corpo a simmetria sferica di massa $M$, il suo modulo è $g(r)=GM/r^2$ e il vettore è diretto verso il centro. L’unità $\mathrm{N/kg}$ è equivalente a $\mathrm{m/s^2}$. Un corpo di massa $m$ riceve peso di modulo $mg(r)$. A differenza del peso, il campo dipende dalla sorgente e dal punto, senza dipendere dalla massa del corpo che lo misura.

Dalla superficie a distanza $2R$, il valore si riduce a un quarto. Dalla superficie a *quota* $2R$, la distanza diventa $3R$ e il valore si riduce a un nono. Se al punto agiscono più sorgenti, si sommano i loro campi come vettori. Su un asse fra due masse le componenti possono annullarsi anche se ciascuna è non nulla; all’esterno del segmento le due componenti hanno lo stesso verso.
:::

:::esempio{titolo="Campo a una quota pari al raggio"}
Per un pianeta con $g_0=12\,\mathrm{m/s^2}$ alla superficie, a quota $R$ il campo è $g_0/4=3\,\mathrm{m/s^2}$. Un oggetto da $2\,\mathrm{kg}$ pesa $24\,\mathrm N$ alla superficie e $6\,\mathrm N$ a quella quota. La massa resta invariata; il rapporto dei pesi coincide con il rapporto dei campi locali.

::grafico{f="12/x^2" punti="1,12,pieno,A;2,3,pieno,B" xmin=.85 xmax=4 ymin=0 ymax=16 nomi="r/R,g (m/s²)" titolo="A è la superficie e B è a distanza doppia dal centro"}
:::

## Energia gravitazionale

:::teorema{#energia-gravitazionale titolo="Zero dell’energia all’infinito"}
Per una massa $m$ all’esterno di una sorgente sferica $M$, ponendo lo zero quando sono infinitamente lontane, il potenziale è $U(r)=-GMm/r$. Avvicinare il corpo rende $U$ più negativo; allontanarlo fa salire $U$ verso zero. Per spostarsi da $r_i$ a $r_f$, la gravità compie lavoro
$$
W_g=-\Delta U=GMm\left(\frac1{r_f}-\frac1{r_i}\right).
$$
Il segno del lavoro è negativo se la distanza aumenta. Il valore del potenziale non determina da solo se il corpo sia destinato a scappare. Occorre aggiungere la sua energia cinetica.

Per una salita di quota $h$ dal raggio $R$, la differenza esatta è $GMmh/[R(R+h)]$. Se $h\ll R$, il denominatore è circa $R^2$, quindi la differenza è circa $m g_0 h$. Il rapporto fra stima a gravità costante e differenza esatta è $1+h/R$. Su piccole quote l’errore relativo è dunque piccolo; se $h$ è comparabile a $R$, l’approssimazione sovrastima la differenza. L’uso dello zero locale a terra non altera questa comparazione, che riguarda solo le differenze.
:::

:::esempio{titolo="Un trasferimento fra due distanze"}
Quando $r$ passa da $R$ a $2R$, l’energia passa da $-GMm/R$ a $-GMm/(2R)$. Occorre aggiungere energia per allontanare il corpo: il potenziale cresce di $GMm/(2R)$. A gravità superficiale fissata, la stima $mg_0R$ varrebbe invece $GMm/R$, il doppio della differenza esatta.

::grafico{f="-1/x" punti="1,-1,pieno,A;2,-.5,pieno,B" xmin=.8 xmax=4 ymin=-1.5 ymax=.25 nomi="r/R,U normalizzata" titolo="All’aumentare di r il potenziale cresce verso zero"}
:::

## Orbite circolari

:::teorema{#orbite titolo="Gravità come risultante centripeta"}
Per un satellite di massa trascurabile rispetto a $M$, si indica con $\mu=GM$ il **parametro gravitazionale** della sorgente. In un’orbita circolare di raggio $r$, il campo $\mu/r^2$ fornisce proprio l’accelerazione centripeta $v^2/r$. Ne seguono
$$
v=\sqrt{\frac\mu r},\qquad
T=\frac{2\pi r}{v}=2\pi\sqrt{\frac{r^3}{\mu}}.
$$
Il rapporto fra velocità e campo distingue due dipendenze. La forza cala come l’inverso del quadrato del raggio, mentre la velocità circolare cala solo come l’inverso della radice del raggio. Il periodo, invece, cresce, perché si percorre una circonferenza più lunga a velocità minore.

Il calcolo suppone che la gravità sia l’unica forza significativa e che la velocità sia tangente al cerchio. A quella posizione una velocità di modulo diverso, o con componente radiale, porta in generale a un’altra traiettoria. L’assenza di peso apparente in un veicolo orbitante è dovuta alla caduta libera comune: veicolo e astronauta hanno accelerazioni gravitazionali quasi identiche, così spesso manca una spinta di sostegno.
:::

:::esempio{titolo="Aumento del raggio orbitale"}
Due orbite circolari attorno allo stesso pianeta hanno raggi $r$ e $4r$. La più ampia ha velocità pari a metà dell’altra e un percorso quattro volte più lungo. Il tempo per completare un giro diventa quindi otto volte maggiore. La massa dei satelliti si semplifica prima del confronto.
:::

## Le leggi di Keplero

:::teorema{#keplero titolo="Forma, aree e periodi delle orbite"}
Nel modello di due corpi con sorgente dominante, le orbite legate sono ellissi con la sorgente in un fuoco, e il cerchio è il caso con i fuochi coincidenti. La retta di azione della forza passa per il fuoco, quindi il momento rispetto al fuoco è nullo. La conservazione del momento angolare dà aree uguali spazzate da raggio vettore in tempi uguali. In vicinanza del pericentro, la distanza minore richiede uno spostamento angolare maggiore per spazzare la stessa area. Ai due estremi della distanza la velocità è tangente alla traiettoria e $rv$ ha lo stesso valore.

Il rapporto $T^2/a^3=4\pi^2/(GM)$ comprende il semiasse maggiore $a$. In un’ellisse, $a$ è metà della somma fra distanza minima e massima dal fuoco. Per due moti attorno alla stessa sorgente vale $T_2/T_1=(a_2/a_1)^{3/2}$. A sorgenti diverse cambia il valore della costante; il confronto deve allora includere i due parametri gravitazionali.
:::

:::esempio{titolo="Raggi estremi e semiasse"}
Un satellite passa da distanza minima $2R$ a distanza massima $6R$. Il semiasse maggiore vale $4R$. Il suo periodo è lo stesso di un satellite in orbita circolare di raggio $4R$ attorno alla stessa sorgente. Le velocità istantanee sono però diverse: per conservare $rv$ agli estremi la velocità al pericentro è tripla di quella all’apocentro.

::grafico{uguale=1 assi=0 curve="4*cos(t),3.464102*sin(t),0,6.283185" punti="2,0,pieno,F;4,0,pieno,A;-4,0,pieno,B" linee="-4,0 4,0" xmin=-5 xmax=5 ymin=-4 ymax=4 titolo="Dal fuoco F gli estremi A e B distano rispettivamente 2R e 6R"}
:::

## Energia orbitale e fuga

:::teorema{#fuga titolo="Sistemi legati e velocità minima di fuga"}
In un’orbita circolare $K=GMm/(2r)$ e $U=-GMm/r$. L’energia meccanica totale è quindi $E=-GMm/(2r)$, negativa con zero all’infinito. Per la **velocità minima di fuga**, si chiede che il corpo diretto verso l’esterno possa arrivare all’infinito con velocità che tende a zero, trascurando atmosfera, ostacoli e successive spinte. Si impone $E=0$, dunque
$$
v_{\mathrm{fuga}}=\sqrt{\frac{2GM}{r}}.
$$
A parità di raggio la velocità di fuga è $\sqrt2$ volte quella circolare, perché occorre il doppio della cinetica che si ha nel moto circolare. Con energia iniziale positiva, la velocità all’infinito tende a un valore non nullo. Con energia negativa il corpo non può portarsi a distanza infinita nel modello.

Un’orbita geostazionaria è circolare, equatoriale e percorsa nello stesso verso della rotazione terrestre, con periodo uguale a un giorno siderale. Un’orbita inclinata con lo stesso periodo non basta per rimanere sopra lo stesso punto della superficie. L’inclinazione farebbe variare la latitudine osservata da terra.
:::

:::esempio{titolo="Energia da aggiungere a un satellite"}
Un satellite in orbita circolare ha $K=4\,\mathrm{MJ}$ e $U=-8\,\mathrm{MJ}$. Il totale vale $-4\,\mathrm{MJ}$. Un impulso propulsivo ideale alla stessa distanza deve aggiungere almeno $4\,\mathrm{MJ}$ di energia meccanica per raggiungere la soglia $E=0$. L’energia cinetica passa allora da $4$ a $8\,\mathrm{MJ}$ e la velocità aumenta del fattore $\sqrt2$.
:::
