---
titolo: Lavoro, energia e potenza
sommario: Lavoro con segno, bilanci dell’energia meccanica, attrito, potenza e rendimento.
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Componente lungo lo spostamento"}
Il **lavoro** di una forza è l’energia che la forza trasferisce mentre si sposta il suo **punto di applicazione**, cioè il punto del corpo su cui la forza agisce. Si consideri una forza $\vec F$ costante, cioè con modulo, direzione e verso che non cambiano durante il moto (il **modulo** di un vettore è la sua intensità, per una forza in newton). Lo spostamento del punto di applicazione è il vettore $\Delta\vec r$ dalla posizione iniziale a quella finale (la lettera greca $\Delta$, «delta», indica una variazione). Indicato con $s=|\Delta\vec r|$ il modulo dello spostamento e con $\theta$ («teta») l’angolo fra i due vettori, il lavoro è
$$
W=\vec F\cdot\Delta\vec r=(F\cos\theta)s .
$$
Il simbolo $\vec F\cdot\Delta\vec r$ indica il **prodotto scalare** dei due vettori, cioè il prodotto dei moduli per il coseno dell’angolo compreso. Il fattore $F_s=F\cos\theta$ è la **componente** della forza lungo lo spostamento, cioè la proiezione di $\vec F$ sulla retta dello spostamento, presa con un segno. Il segno è quello del coseno:
- per un angolo acuto ($\theta<90^\circ$) il coseno è positivo, quindi il lavoro è positivo;
- per un angolo ottuso ($90^\circ<\theta\le180^\circ$) il coseno è negativo, quindi il lavoro è negativo;
- per $\theta=90^\circ$ il coseno vale zero, quindi il lavoro è nullo.

Se il punto di applicazione rimane fermo, $s=0$ e il lavoro è nullo anche per una forza intensa. Il lavoro è uno **scalare**, cioè un numero con segno, senza direzione, e si misura in joule ($\mathrm J$), con $1\,\mathrm J=1\,\mathrm{N\cdot m}$; un joule è il lavoro di una forza di un newton su uno spostamento di un metro nella stessa direzione e nello stesso verso.

Se forza e spostamento sono dati con le componenti su due assi perpendicolari, $\vec F=(F_x,F_y)$ e $\Delta\vec r=(\Delta x,\Delta y)$, il prodotto scalare è la somma dei prodotti delle componenti corrispondenti, $W=F_x\Delta x+F_y\Delta y$. Per esempio, con $\vec F=(6,2)\,\mathrm N$ e $\Delta\vec r=(3,-1)\,\mathrm m$ si ottiene $W=(6\cdot3-2\cdot1)\,\mathrm J=16\,\mathrm J$.

Quando agiscono più forze, il lavoro totale si calcola in due modi:
- si calcola il lavoro di ciascuna forza e si sommano i risultati con il loro segno;
- si calcola prima la **risultante**, cioè la somma vettoriale delle forze, e se ne prende la componente lungo lo spostamento.

I due procedimenti danno lo stesso valore, poiché il prodotto scalare è distributivo: $(\vec F_1+\vec F_2)\cdot\Delta\vec r=\vec F_1\cdot\Delta\vec r+\vec F_2\cdot\Delta\vec r$. Su un piano orizzontale fisso, per esempio, il peso e la **normale** (la forza che il piano esercita perpendicolarmente alla propria superficie) sono verticali, quindi perpendicolari allo spostamento orizzontale, e il loro lavoro è zero. Le due forze entrano però nell’equilibrio verticale, che dà il valore della normale e quindi dell’attrito.
:::

:::esempio{titolo="Trazione inclinata e resistenza orizzontale"}
Una corda tira una cassa con $20\,\mathrm N$ a $60^\circ$ sopra l’orizzontale. La cassa percorre $4\,\mathrm m$ verso destra e l’attrito, opposto al moto, vale $6\,\mathrm N$. La componente della tensione lungo lo spostamento è $20\cos 60^\circ\,\mathrm N=20\cdot0{,}5\,\mathrm N=10\,\mathrm N$, quindi la tensione compie $10\cdot4\,\mathrm J=40\,\mathrm J$. L’attrito forma $180^\circ$ con lo spostamento e compie $-6\cdot4\,\mathrm J=-24\,\mathrm J$. Il lavoro totale (pedice «net», cioè netto) è
$$
W_{\mathrm{net}}=10\cdot4\,\mathrm J-6\cdot4\,\mathrm J=16\,\mathrm J.
$$
Il lavoro totale è positivo, quindi l’energia cinetica della cassa aumenta, come stabilisce il teorema dell’energia cinetica. I $40\,\mathrm J$ forniti dalla trazione superano i $24\,\mathrm J$ sottratti dall’attrito con la superficie.

::grafico{assi=0 uguale=1 vettori="0,0,4,0,s;0,0,1.7,2.944,F;0,0,-1,0,f" xmin=-2 xmax=5 ymin=-1 ymax=4 titolo="La forza di trazione forma un angolo di $60^\circ$ con lo spostamento"}
:::

:::esempio{#trazione-inversa titolo="Ricavare la trazione dal bilancio dei lavori"}
Una slitta percorre orizzontalmente $6\,\mathrm m$, tirata da una fune inclinata di $60^\circ$ sull’orizzontale, mentre una resistenza costante di $4\,\mathrm N$ si oppone al moto. Il lavoro totale è $36\,\mathrm J$ e si cerca la tensione $F$ della fune. Il lavoro della resistenza vale $-4\cdot6\,\mathrm J=-24\,\mathrm J$. Il lavoro totale è la somma dei due lavori, quindi la trazione compie $36\,\mathrm J-(-24\,\mathrm J)=60\,\mathrm J$. Dividendo per lo spostamento e poi per $\cos60^\circ=0{,}5$ si ottiene:
$$
F\cos60^\circ=\dfrac{60\,\mathrm J}{6\,\mathrm m}=10\,\mathrm N,\qquad F=20\,\mathrm N.
$$
Il bilancio dà la componente orizzontale, e per il modulo serve anche l’angolo. Una fune perpendicolare allo spostamento compirebbe lavoro nullo per qualunque modulo, perciò il lavoro totale non potrebbe valere $36\,\mathrm J$.

Per una forza costante, la somma dei lavori lungo più tratti è uguale al lavoro calcolato con lo **spostamento netto**, cioè il vettore che va dal punto di partenza al punto di arrivo. Il motivo è la proprietà distributiva: $\vec F\cdot\Delta\vec r_1+\vec F\cdot\Delta\vec r_2+\vec F\cdot\Delta\vec r_3=\vec F\cdot(\Delta\vec r_1+\Delta\vec r_2+\Delta\vec r_3)$. Nel disegno il percorso va $4\,\mathrm m$ verso destra, $3\,\mathrm m$ verso l’alto e $3\,\mathrm m$ verso sinistra. Il primo e l’ultimo tratto si compensano per tre metri, quindi lo spostamento netto da A a B ha componenti $(1,3)\,\mathrm m$. La lunghezza percorsa, $10\,\mathrm m$, serve invece per il lavoro di una resistenza sempre opposta al moto, perché quella forza cambia verso con il moto e quindi non è costante.

::grafico{assi=0 uguale=1 vettori="0,0,4,0;4,0,4,3;4,3,1,3" segmenti="0,0,1,3" punti="0,0,pieno,A;1,3,pieno,B" xmin=-.52 xmax=4.51 ymin=-.50 ymax=3.56 titolo="La linea tratteggiata unisce gli estremi A e B. La somma degli spostamenti dei singoli tratti coincide con questo vettore."}
:::

## Lavoro nei grafici

:::osservazione{#lavoro-variabile titolo="Area sotto il grafico forza-posizione"}
Si consideri un moto rettilineo lungo l’asse $x$ con una componente $F_x$ della forza che cambia da punto a punto. Su un tratto piccolo $\Delta x$ la forza è quasi costante, quindi il lavoro su quel tratto è circa $F_x\,\Delta x$, cioè l’area di un rettangolo sottile di base $\Delta x$ e altezza $F_x$. Sommando i rettangoli e rendendoli sempre più stretti, la somma diventa l’**area orientata** fra il grafico di $F_x$ e l’asse delle posizioni. «Orientata» significa che ogni regione ha un segno. Nel moto verso $x$ crescenti:
- le regioni sopra l’asse, dove $F_x>0$, contano positivamente;
- le regioni sotto l’asse, dove $F_x<0$, contano negativamente.

Se lo stesso tratto si percorre nel verso opposto, gli spostamenti $\Delta x$ sono negativi, quindi il lavoro della stessa legge $F_x(x)$ cambia segno.

Nel grafico forza-posizione la coordinata orizzontale è la posizione. L’area sotto un grafico forza-tempo rappresenta invece l’**impulso**, cioè la somma dei prodotti forza per durata, perché le sue unità sono $\mathrm{N\cdot s}$ invece di $\mathrm{N\cdot m}$. Quando il grafico $F_x$-$x$ è fatto di tratti rettilinei, l’area si calcola con triangoli, rettangoli e trapezi. Ai tratti in cui la forza è costante corrispondono rettangoli. Per un tratto in cui la forza cresce linearmente da $2$ a $4\,\mathrm N$ lungo $3\,\mathrm m$ l’area è un trapezio, e il lavoro è la base per la media delle due altezze, $\dfrac{(2+4)\cdot3}{2}\,\mathrm J=9\,\mathrm J$.
:::

:::esempio{titolo="Regioni di segno opposto"}
Da $0$ a $2\,\mathrm m$ la forza passa linearmente da zero a $6\,\mathrm N$. Da $2$ a $4\,\mathrm m$ vale $-1\,\mathrm N$. Il primo tratto forma un triangolo sopra l’asse di area $\dfrac{2\cdot6}{2}\,\mathrm J=6\,\mathrm J$. Il rettangolo sotto l’asse contribuisce $-1\cdot2\,\mathrm J=-2\,\mathrm J$. La somma algebrica è quindi $6\,\mathrm J-2\,\mathrm J=4\,\mathrm J$. Il salto istantaneo della forza in $x=2\,\mathrm m$ non aggiunge lavoro, perché avviene in una sola posizione e la regione corrispondente ha base nulla.

::grafico{linee="0,0 2,6;2,-1 4,-1" area="3*x;0;0;2|-1;0;2;4" punti="2,6,pieno;4,-1,pieno" xmin=0 xmax=5 ymin=-3 ymax=7 nomi="x (m),F_x (N)" titolo="Il triangolo contribuisce $+6\,\mathrm J$ e il rettangolo $-2\,\mathrm J$"}
:::

:::esempio{#lavoro-accumulato titolo="Punto in cui il lavoro accumulato si azzera"}
Un cursore avanza da $x=0$ a $x=6\,\mathrm m$ mentre la forza lungo l'asse segue $F_x=(6-2x)\,\mathrm N$, con il valore di $x$ espresso in metri. Il **lavoro accumulato** fino a una posizione è il lavoro compiuto dalla partenza fino a quella posizione. La forza si annulla dove $6-2x=0$, cioè in $x=3\,\mathrm m$. Fino a quel punto il grafico forma un triangolo sopra l’asse di base $3\,\mathrm m$ e altezza $6\,\mathrm N$, quindi il lavoro accumulato cresce di $\dfrac{3\cdot6}{2}\,\mathrm J=9\,\mathrm J$. Da $3$ a $6\,\mathrm m$ la forza è negativa e forma un triangolo uguale sotto l'asse, che contribuisce $-9\,\mathrm J$. Al termine il lavoro totale è $9\,\mathrm J-9\,\mathrm J=0$. Il lavoro accumulato cresce finché la forza è positiva e decresce quando la forza è negativa, perciò è massimo dove la forza si annulla, e torna a zero dove le due aree si compensano.

::grafico{linee="0,6 6,-6" area="6-2*x;0;0;3|0;6-2*x;3;6" punti="0,6,pieno;3,0,pieno;6,-6,pieno" xmin=0 xmax=7 ymin=-7 ymax=8 nomi="x (m),F_x (N)" titolo="Il lavoro accumulato cresce fino a 3 m e torna a zero a 6 m"}

La stessa regola delle aree vale per altre coppie di grandezze. L’unità dell’area è il prodotto delle unità dell’**ordinata** (asse verticale) e dell’**ascissa** (asse orizzontale), e indica che cosa si sta sommando; un watt per un secondo è un joule.

| Grafico | Unità dell’area | Grandezza |
| --- | --- | --- |
| $F_x$ rispetto a $x$ | $\mathrm{N\,m}$ | Lavoro |
| $F_x$ rispetto a $t$ | $\mathrm{N\,s}$ | Impulso |
| $P$ rispetto a $t$ | $\mathrm{W\,s}$ | Energia trasferita |
:::

## Energia cinetica

:::teorema{#energia-cinetica titolo="Teorema dell’energia cinetica"}
L’**energia cinetica** è l’energia che un corpo possiede perché si muove. Per un **punto materiale** (un corpo di cui si trascurano le dimensioni) di massa $m$ costante vale $K=\dfrac12mv^2$, dove $v$ è il modulo della velocità in metri al secondo. Una velocità in $\mathrm{km/h}$ si porta in $\mathrm{m/s}$ dividendo per $3{,}6$, perché $1\,\mathrm{km/h}=\dfrac{1000\,\mathrm m}{3600\,\mathrm s}$; per esempio $18\,\mathrm{km/h}=5\,\mathrm{m/s}$. Se la velocità è data con le componenti su due assi perpendicolari, per il teorema di Pitagora $v^2=v_x^2+v_y^2$. La **quantità di moto** di un corpo è il vettore $\vec p=m\vec v$, di modulo $p=mv$. Sostituendo $v=\dfrac pm$ nell’energia cinetica si ottiene $K=\dfrac{p^2}{2m}$; per esempio, con $p=6\,\mathrm{kg\cdot m/s}$ e $m=2\,\mathrm{kg}$ si ha $K=\dfrac{6^2}{2\cdot2}\,\mathrm J=9\,\mathrm J$.

Il **teorema dell’energia cinetica** afferma che, in un riferimento inerziale (un sistema di riferimento in cui vale il principio di inerzia), il lavoro della risultante fra due posizioni è uguale alla variazione dell’energia cinetica:
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
I pedici $i$ e $f$ indicano lo stato iniziale e quello finale. Il teorema si dimostra per una forza costante lungo un asse, con lo stesso verso positivo per forza, spostamento e velocità. Per il secondo principio della dinamica la risultante vale $ma$, quindi il suo lavoro è $W_{\mathrm{tot}}=ma\Delta x$. Nel moto uniformemente accelerato vale la legge $v_f^2-v_i^2=2a\Delta x$; moltiplicando entrambi i membri per $\dfrac12m$ segue $ma\Delta x=\dfrac12m(v_f^2-v_i^2)=K_f-K_i$. Per una forza variabile si applica lo stesso ragionamento su intervalli brevi, in cui la forza è quasi costante. Sommando gli intervalli, ogni energia cinetica intermedia compare una volta come energia finale e una volta come energia iniziale, quindi si cancella e resta $K_f-K_i$.

L’energia cinetica è positiva per un corpo in movimento e dipende dalla velocità misurata nel riferimento scelto. In un riferimento che si muove con velocità costante $\vec u$ la velocità del corpo è $\vec v-\vec u$; per esempio, un carrello a $9\,\mathrm{m/s}$ visto da un treno che viaggia a $4\,\mathrm{m/s}$ nello stesso verso ha velocità $5\,\mathrm{m/s}$. Due velocità uguali in modulo e opposte in verso danno la stessa $K$, perché $v$ compare al quadrato. Se il lavoro totale è nullo, allora $K_f=K_i$, quindi i moduli della velocità iniziale e finale coincidono. Il verso invece può cambiare, come in una curva percorsa con **velocità scalare** (il modulo della velocità) costante. In quel caso la forza risultante è istante per istante perpendicolare alla velocità, quindi non compie lavoro e cambia soltanto la direzione del moto.
:::

:::esempio{titolo="Arresto con forza costante"}
Un carrello di $4\,\mathrm{kg}$ si muove a $5\,\mathrm{m/s}$ e una forza resistente di $10\,\mathrm N$ lo arresta. L’energia iniziale è $\dfrac12\cdot4\cdot5^2\,\mathrm J=50\,\mathrm J$ e quella finale è zero. La forza è opposta allo spostamento $d$, quindi il lavoro resistente è $-10d$ in joule quando $d$ è espresso in metri. Per il teorema dell’energia cinetica questo lavoro è uguale a $K_f-K_i=-50\,\mathrm J$, perciò $-10d=-50$ dà $d=5\,\mathrm m$. Con massa e forza fissate la distanza di arresto è proporzionale all’energia iniziale, cioè a $v^2$, quindi raddoppiare la velocità quadruplica la distanza di arresto. Questa previsione cessa di valere se la forza resistente cambia durante la frenata. Il grafico mostra la parabola $K=2v^2$ di questo carrello (SI indica il Sistema Internazionale di unità).

::grafico{f="2*x^2" punti="5,50,pieno,A;0,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=74 nomi="v (m/s),K (J)" titolo="Per questo carrello $K=2v^2$, in unità SI"}
:::

:::esempio{#frenata-parziale titolo="Frenata interrotta a metà percorso"}
Una forza resistente costante di modulo $F$ arresterebbe un corpo in $12\,\mathrm m$; per il teorema dell’energia cinetica il suo lavoro su quei $12\,\mathrm m$, cioè $-F\cdot12\,\mathrm m$, è uguale a $-K_i$. Dopo $6\,\mathrm m$ il lavoro resistente è $-F\cdot6\,\mathrm m$, metà di quel valore, quindi resta metà dell'energia cinetica iniziale. L’energia cinetica è proporzionale a $v^2$, perciò il rapporto delle velocità è la radice quadrata del rapporto delle energie:
$$
\dfrac{K}{K_i}=\dfrac{1}{2},\qquad \dfrac{v}{v_i}=\dfrac{1}{\sqrt 2}.
$$
La distanza residua è ancora metà della distanza di arresto, ma la velocità è $\dfrac{1}{\sqrt2}\simeq0{,}71$ volte quella iniziale, circa il settanta per cento. Il risultato vale anche senza conoscere la forza o la massa, purché la resistenza sia costante lungo il tratto.

::grafico{curve="t,1-t/12,0,12;t,sqrt(1-t/12),0,12" punti="6,.5,pieno;6,.707107,pieno" segmenti="6,0,6,.707107" xmin=0 xmax=13 ymin=0 ymax=1.15 nomi="s (m),frazione" legenda="K/K_i;v/v_i" titolo="A metà frenata resta metà dell’energia cinetica. Il modulo della velocità vale circa il 71% di quello iniziale."}
:::

## Forze conservative ed energia potenziale

:::definizione{#potenziale titolo="Energia associata alla configurazione"}
Una forza è **conservativa** se il lavoro che compie fra due **configurazioni** (le posizioni dei corpi del sistema) dipende soltanto dalla configurazione iniziale e da quella finale, e non dal percorso seguito. Il peso e la forza di una molla sono conservativi; l’attrito non lo è, perché il suo lavoro cresce con la lunghezza del percorso. A ogni configurazione si assegna un’**energia potenziale** $U$, scelta in modo che il lavoro della forza conservativa sia l’opposto della variazione $\Delta U=U_f-U_i$:
$$
W_c=-\Delta U .
$$
Quando la forza compie lavoro positivo, l’energia potenziale diminuisce della stessa quantità. In un percorso chiuso la configurazione finale coincide con quella iniziale, quindi $\Delta U=0$ e il lavoro totale della forza conservativa è nullo. Il livello zero di $U$ si sceglie liberamente. Un cambiamento del livello zero trasla tutti i valori di $U$ della stessa quantità e lascia invariati le differenze $\Delta U$ e il lavoro.

Vicino alla superficie terrestre la gravità è approssimativamente **uniforme**, cioè ha lo stesso valore $g=9{,}81\,\mathrm{m/s^2}$ in ogni punto (negli esercizi anche $10\,\mathrm{m/s^2}$). Per il sistema corpo-Terra si usa $U_g=mgh$, con $h$ quota rispetto al livello scelto come zero; sotto quel livello la quota $h$ è negativa e anche $U_g$ è negativa. Se il corpo sale, $U_g$ cresce e il peso compie lavoro negativo. Se il corpo scende, $U_g$ diminuisce e il peso compie lavoro positivo. Nella formula entra soltanto il dislivello verticale, che su una rampa lunga $s$ e inclinata di un angolo $\alpha$ («alfa») vale $h=s\sin\alpha$. La formula è utilizzabile per traiettorie molto più brevi del raggio terrestre, circa $6400\,\mathrm{km}$. Su distanze maggiori $g$ cambia sensibilmente con la quota, e si usa il potenziale gravitazionale del capitolo sulla gravitazione.

Una molla ideale esercita la forza $F_x=-kx$ (legge di Hooke), dove $k$ è la **costante elastica**, in $\mathrm{N/m}$, e $x$ è la deformazione rispetto alla **lunghezza naturale**, cioè alla lunghezza della molla a riposo. La deformazione è positiva per un allungamento e negativa per una compressione; il segno meno indica che la forza è opposta alla deformazione. Il grafico di $F_x$ è una retta per l’origine, quindi da $x=0$ a $x=d$ l’area fra la retta e l’asse è un triangolo di base $d$ e altezza $-kd$. Il lavoro della molla da $x=0$ a $x=d$ è perciò $-\dfrac12 kd^2$. Poiché $W_c=-\Delta U$, ne deriva $U_e=\dfrac12 kx^2$, prendendo lo zero alla lunghezza naturale. Un allungamento e una compressione di uguale modulo immagazzinano la stessa energia, perché la deformazione compare al quadrato. Le forze elastiche associate hanno invece segno opposto.
:::

:::esempio{titolo="Dalla compressione all’allungamento"}
Per $k=200\,\mathrm{N/m}$, le configurazioni $x=-0{,}10\,\mathrm m$ e $x=+0{,}10\,\mathrm m$ hanno entrambe energia elastica $\dfrac12\cdot200\cdot0{,}10^2\,\mathrm J=1\,\mathrm J$. Durante il tragitto la molla prima torna alla lunghezza naturale e compie lavoro $+1\,\mathrm J$, poi si allunga e compie lavoro $-1\,\mathrm J$. Il lavoro complessivo della molla è zero, perché l’energia potenziale ha lo stesso valore nei due estremi, anche se cambia nei singoli tratti. Nel grafico i punti A e B, a $-10$ e $+10\,\mathrm{cm}$, stanno alla stessa altezza sulla parabola.

::grafico{f=".01*x^2" punti="-10,1,pieno,A;10,1,pieno,B" xmin=-18 xmax=18 ymin=0 ymax=3.5 nomi="x (cm),Uₑ (J)" titolo="Le due deformazioni hanno la stessa energia elastica"}
:::

:::osservazione{#molla-verticale titolo="Posizione di equilibrio di una molla verticale"}
Si consideri una massa $m$ sospesa a una molla verticale. Si prende positivo verso il basso l'allungamento $x$ e si prende lo zero dell'energia gravitazionale alla lunghezza naturale. Quando la molla è allungata di $x$, la massa si trova a quota $-x$, quindi $U_g=-mgx$. Il **potenziale totale**, cioè la somma dell’energia elastica e di quella gravitazionale, è
$$
U=\dfrac{1}{2}kx^2-mgx
  =\dfrac{1}{2}k\left(x-\dfrac{mg}{k}\right)^2-\dfrac{(mg)^2}{2k}.
$$
La seconda forma si verifica sviluppando il quadrato, che dà $\dfrac12kx^2-mgx+\dfrac{(mg)^2}{2k}$, e sottraendo l’ultimo termine. Il primo termine della seconda forma non è mai negativo ed è nullo per $x=\dfrac{mg}{k}$, perciò il minimo si trova a $x=\dfrac{mg}{k}$. In quel punto $kx=mg$, cioè la forza elastica compensa il peso. Configurazioni equidistanti da questo punto hanno lo stesso potenziale totale. Per i calcoli si può porre lo zero del potenziale totale al minimo, sommando a tutti i valori la costante $\dfrac{(mg)^2}{2k}$. Si conserva così la stessa differenza di energia fra configurazioni, perché la costante compare sia all'inizio sia alla fine.

Con $k=200\,\mathrm{N/m}$, massa $3\,\mathrm{kg}$ e $g=10\,\mathrm{m/s^2}$, l’equilibrio è a $\dfrac{3\cdot10}{200}\,\mathrm m=0{,}15\,\mathrm m=15\,\mathrm{cm}$. A $5\,\mathrm{cm}$ e a $25\,\mathrm{cm}$ il potenziale è lo stesso, con lo zero scelto alla lunghezza naturale:
$$
\begin{aligned}
U(0{,}05\,\mathrm m)&=\left(100\cdot0{,}05^2-30\cdot0{,}05\right)\mathrm J=(0{,}25-1{,}5)\,\mathrm J=-1{,}25\,\mathrm J,\\[6pt]
U(0{,}25\,\mathrm m)&=\left(100\cdot0{,}25^2-30\cdot0{,}25\right)\mathrm J=(6{,}25-7{,}5)\,\mathrm J=-1{,}25\,\mathrm J.
\end{aligned}
$$
Nel minimo E il potenziale vale $-\dfrac{30^2}{2\cdot200}\,\mathrm J=-2{,}25\,\mathrm J$.

::grafico{f=".01*x^2-.3*x" punti="5,-1.25,pieno;15,-2.25,pieno,E;25,-1.25,pieno" segmenti="5,-1.25,25,-1.25;15,0,15,-2.25" xmin=0 xmax=34 ymin=-2.75 ymax=2 nomi="x (cm),U (J)" titolo="Il potenziale totale ha un minimo in E, sotto la lunghezza naturale. I punti equidistanti da E hanno la stessa energia."}
:::

## Conservazione e dissipazione

:::teorema{#bilancio-energia titolo="Bilancio dell’energia meccanica"}
L’**energia meccanica** di un sistema è la somma della sua energia cinetica e delle energie potenziali scelte per descriverlo, $E=K+U$. Il lavoro totale si divide in due parti, il lavoro $W_c$ delle forze conservative e il lavoro $W_{\mathrm{nc}}$ delle altre forze, dette non conservative (attrito, spinte, tensioni). Il teorema dell’energia cinetica dà la prima uguaglianza; sostituendo $W_c=-\Delta U$ e portando $\Delta U$ al primo membro si ottiene la seconda:
$$
\Delta K=W_c+W_{\mathrm{nc}},
\qquad
\Delta(K+U)=W_{\mathrm{nc}}.
$$
Prima si scelgono il sistema e le configurazioni iniziale e finale, poi si decide quali interazioni entrano in $U$. Ogni forza si conta una sola volta. Se la gravità è già in $U_g$, aggiungere il lavoro del peso al secondo membro conterebbe due volte lo stesso trasferimento. Se tutti i lavori non conservativi hanno somma nulla, $E_i=E_f$, cioè l’energia meccanica si **conserva**. La normale di una guida fissa è in ogni istante perpendicolare allo spostamento, quindi non compie lavoro e non entra nel bilancio. Per un corpo che scende di un dislivello $h$ senza attrito e parte da fermo, $K_i=0$ e $U$ diminuisce di $mgh$, quindi il bilancio dà $\dfrac12mv^2=mgh$. La massa compare in entrambi i membri e si semplifica, perciò resta $v=\sqrt{2gh}$. Se il corpo parte con velocità $v_i$, lo stesso bilancio dà $v_f^2=v_i^2+2gh$.

L’**attrito dinamico** è la forza che una superficie esercita su un corpo che vi striscia sopra. Ha verso opposto al moto e modulo $\mu_dN$, dove $\mu_d$ («mu di») è il coefficiente di attrito dinamico, un numero senza unità, e $N$ è il modulo della normale. L’attrito dinamico di una superficie fissa dissipa energia meccanica, cioè la trasforma in energia interna dei corpi a contatto, che si scaldano. Per una superficie orizzontale e sole forze verticali peso e normale, l’equilibrio verticale dà $N=mg$, e il lavoro dell’attrito su un percorso lungo $s$ vale $W_{\mathrm{attr}}=-\mu_dmg\,s$. In un percorso di andata e ritorno, per esempio, l’attrito cambia verso insieme al moto e il suo lavoro è negativo su entrambi i tratti. In un percorso composto da tratti diversi si calcola questo lavoro su ciascun tratto con la sua lunghezza e la normale pertinente, poi si sommano i risultati. Quando il piano è inclinato di un angolo $\alpha$ e nessun’altra forza ha componente perpendicolare al piano, $N=mg\cos\alpha$. Se invece una forza tira il corpo con una componente verticale $F_y$ verso l’alto, la normale su un piano orizzontale si riduce a $N=mg-F_y$. Un lavoro non conservativo può anche essere positivo, come quello di una persona che spinge una cassa. Nel bilancio conta la somma di tutti i lavori non conservativi.
:::

:::esempio{titolo="Percorso con una tratta dissipativa"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo e scende di $3\,\mathrm m$ senza attrito. In un tratto orizzontale successivo l’attrito compie lavoro $-12\,\mathrm J$. Con $g=9{,}81\,\mathrm{m/s^2}$, nella discesa l’energia potenziale diminuisce di $mgh=2\cdot9{,}81\cdot3\,\mathrm J=58{,}86\,\mathrm J$. Il carrello parte da fermo e non c’è attrito, quindi in fondo alla discesa la sua energia cinetica vale $58{,}86\,\mathrm J$. Dopo il tratto orizzontale rimangono $(58{,}86-12)\,\mathrm J=46{,}86\,\mathrm J$ di energia cinetica. Con $m=2\,\mathrm{kg}$ si ha $K=\dfrac12\cdot2\cdot v^2=v^2$ in unità SI, perciò $v=\sqrt{46{,}86}\,\mathrm{m/s}\simeq6{,}85\,\mathrm{m/s}$. Se il lavoro resistente assegnato superasse $58{,}86\,\mathrm J$, il carrello si fermerebbe prima del punto finale. In quel caso il bilancio darebbe un’energia cinetica negativa, e una radice di argomento negativo indica che quel punto non è raggiungibile nelle condizioni del problema.

::grafico{linee="0,3 3,0 6,0" punti="0,3,pieno,A;3,0,pieno,B;6,0,pieno,C" xmin=-.6 xmax=6.7 ymin=-.8 ymax=3.9 nomi="s,h (m)" titolo="La discesa da A a B precede il tratto dissipativo da B a C. La posizione orizzontale è schematica"}
:::

:::esempio{#contorno-sistema titolo="Attrito, contorno del sistema ed energia termica"}
Un pattino parte con $50\,\mathrm J$ di energia cinetica e termina un tratto orizzontale con $32\,\mathrm J$, quindi la sua energia cinetica varia di $(32-50)\,\mathrm J=-18\,\mathrm J$. Il bilancio dipende da quali corpi si includono nel sistema.
- Se il sistema è il solo pattino, trattato come punto materiale, il teorema dell'energia cinetica assegna alla risultante un lavoro di $-18\,\mathrm J$. Se l’unica forza che compie lavoro è l'attrito della pista, il lavoro resistente ha quel valore.
- Se il sistema comprende pattino e pista e gli scambi con l'esterno sono trascurabili, la perdita meccanica di $18\,\mathrm J$ corrisponde a un aumento dell'**energia interna** dell'insieme, cioè dell’energia di agitazione delle particelle dei due corpi, che si osserva come aumento di temperatura.

Se una forza esterna compie anche un lavoro sul sistema, l’aumento di energia interna è la perdita meccanica più quel lavoro. Il bilancio energetico determina l'aumento totale. Per stabilire quanto si scaldi ciascun corpo occorrono informazioni sul contatto e sui materiali.
:::

:::esempio{#vincolo-guida titolo="Energia e contatto in una guida circolare"}
Una pallina puntiforme parte da ferma a quota $H$ rispetto al punto più basso della guida interna circolare di raggio $R$, cioè di un binario a forma di cerchio verticale percorso dall’interno. La guida è fissa e liscia (senza attrito), quindi la normale non compie lavoro e l’energia meccanica si conserva. Alla sommità, che si trova a quota $2R$, la normale e il peso puntano verso il centro. In un moto circolare la risultante verso il centro è uguale alla massa per l’accelerazione centripeta $\dfrac{v^2}{R}$, quindi in cima $N+mg=\dfrac{mv^2}{R}$. Al limite del distacco la normale vale zero, quindi $\dfrac{v^2}{R}=g$, cioè $v^2=gR$. Il bilancio energetico dalla partenza alla sommità, diviso per la massa, dà $gH=2gR+\dfrac{v^2}{2}$. Sostituendo $v^2=gR$ si ottiene $gH=2gR+\dfrac{gR}{2}=\dfrac{5gR}{2}$, da cui $H_{\rm min}=\dfrac{5R}{2}$. Durante il giro la velocità è minima in cima, quindi lì è minima la forza verso il centro richiesta, mentre la componente del peso verso il centro è massima. Perciò la normale è minima in cima, ed è la sommità a fissare il requisito di contatto. Il bilancio energetico stabilisce la velocità, mentre l’equazione lungo il raggio stabilisce se la guida può esercitare la forza richiesta.

::grafico{assi=0 uguale=1 linee="-3,2.5 -2.65,2.5;-1.08,0 0,0" curve="-2.65+1.57*t,2.5*(1-3*t^2+2*t^3),0,1;cos(t),1+sin(t),0,6.283185" segmenti="-3,0,-.15,0;-2.95,0,-2.95,2.5;0,1,1,1" vettori="0,2,0,1.39,mg" punti="-2.65,2.5,pieno,A;0,2,pieno;0,0,pieno" etichette="-2.85,1.52,H;.44,1.08,R" xmin=-3.45 xmax=1.45 ymin=-.28 ymax=2.88 titolo="Al contatto limite in cima resta soltanto il peso lungo il raggio. Le quote sono misurate dal punto più basso."}
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Velocità del trasferimento di energia"}
La **potenza** è l’energia trasferita, o il lavoro compiuto, per unità di tempo. La **potenza media** di un trasferimento su un intervallo di durata $\Delta t$ è $P_m=\dfrac{W}{\Delta t}$. La potenza istantanea di una forza è il prodotto scalare $P=\vec F\cdot\vec v=Fv\cos\theta$, con $\theta$ angolo fra forza e velocità. Su un intervallo breve lo spostamento è $\Delta\vec r\simeq\vec v\,\Delta t$, quindi il lavoro è $\vec F\cdot\Delta\vec r\simeq\vec F\cdot\vec v\,\Delta t$, e dividendo per $\Delta t$ si ottiene $\vec F\cdot\vec v$. Il segno dipende dalla componente della forza lungo la velocità. Una resistenza applicata quando il corpo si muove fornisce potenza meccanica negativa. Il **watt** ($\mathrm W$) equivale a un joule al secondo. Il **kilowattora** ($\mathrm{kWh}$) misura energia, perché moltiplica una potenza per un tempo, e vale $1000\,\mathrm W\cdot3600\,\mathrm s=3{,}6\cdot10^6\,\mathrm J$.

Il **rendimento** $\eta$ («eta») di una macchina è il rapporto fra l’energia utile che la macchina fornisce e l’energia che riceve nello stesso intervallo, $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{fornita}}}$. Scrivendo il rapporto si specifica quali trasferimenti rientrano nel numeratore. Il rendimento è un numero senza unità, non superiore a $1$, e si scrive anche in percentuale. Per una macchina che lavora in **regime stazionario**, cioè sempre nelle stesse condizioni, si può usare il rapporto delle potenze medie, poiché entrambe sono riferite allo stesso tempo. Un rendimento dell’$80\%$ significa che la parte utile è $0{,}80$ volte l’energia ricevuta. Se si conosce la parte utile, l’energia in ingresso si ottiene dividendo per $0{,}80$. Se l’energia passa per due macchine una dopo l’altra, l’uscita della prima è l’ingresso della seconda, quindi il rendimento complessivo è il prodotto dei due rendimenti; per esempio, con $0{,}90$ e $0{,}50$ si ottiene $0{,}90\cdot0{,}50=0{,}45$.
:::

:::esempio{titolo="Potenza richiesta in salita"}
Un montacarichi solleva a velocità costante una massa di $50\,\mathrm{kg}$ per $8\,\mathrm m$ in $10\,\mathrm s$. A velocità costante l’energia cinetica non cambia, quindi il lavoro utile è l’aumento di energia potenziale. Con $g=9{,}81\,\mathrm{m/s^2}$ il lavoro utile è $mgh=50\cdot9{,}81\cdot8\,\mathrm J=3924\,\mathrm J$ e la potenza utile media è $\dfrac{3924\,\mathrm J}{10\,\mathrm s}=392{,}4\,\mathrm W$. Se il rendimento complessivo vale $0{,}75$, la potenza in ingresso deve essere $\dfrac{392{,}4\,\mathrm W}{0{,}75}=523{,}2\,\mathrm W$. La differenza di $(523{,}2-392{,}4)\,\mathrm W=130{,}8\,\mathrm W$ è la potenza che non si ritrova come innalzamento della massa. In una fase con accelerazione, la variazione dell’energia cinetica sarebbe un termine aggiuntivo del lavoro utile.
:::

:::esempio{#potenza-ciclo titolo="Potenza media nelle fasi di un ciclo"}
Una macchina fornisce $300\,\mathrm W$ per $4\,\mathrm s$ e poi resta ferma per $6\,\mathrm s$, senza trasferimenti utili nell'intervallo di pausa. Il lavoro utile del ciclo è $300\cdot4\,\mathrm J=1200\,\mathrm J$. La potenza media va riferita ai dieci secondi complessivi, pausa compresa.
$$
P_m=\dfrac{300\cdot4\,\mathrm J}{10\,\mathrm s}=120\,\mathrm W.
$$
Una macchina che producesse costantemente $120\,\mathrm W$ fornirebbe la stessa energia, $1200\,\mathrm J$, dopo un ciclo. Nei primi quattro secondi, però, la sua energia utile sarebbe $120\cdot4\,\mathrm J=480\,\mathrm J$, minore dei $1200\,\mathrm J$ della prima macchina. L'equivalenza fra potenze medie riguarda quindi solo gli estremi dell'intervallo sul quale si calcola la media. Nel grafico l’energia è l’area sotto la potenza, e i due rettangoli hanno la stessa area.

::grafico{linee="0,300 4,300;4,0 10,0" area="300;0;0;4" segmenti="0,120,10,120;4,0,4,300" xmin=0 xmax=11 ymin=0 ymax=330 nomi="t (s),P (W)" titolo="L’area del rettangolo fino a 4 s equivale a quella corrispondente a 120 W per tutti i 10 s."}
:::
