---
titolo: Lavoro, energia e potenza
sommario: Lavoro con segno, energia cinetica e potenziale, bilanci con e senza attrito, potenza e rendimento.
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Forza e spostamento"}
Il **lavoro** di una forza costante $\vec F$ durante uno spostamento $\vec s$ misura un trasferimento di energia. Indicando con $\theta$ l'angolo fra i due vettori, si definisce
$$
W=Fs\cos\theta=F_\parallel s,\qquad 1\,\mathrm{J}=1\,\mathrm{N\,m}.
$$
$F$ e $s$ sono moduli, quindi il segno del lavoro viene dalla proiezione $F_\parallel$. Una forza con parte parallela concorde produce lavoro positivo. Una parte parallela opposta produce lavoro negativo. Se la forza è perpendicolare allo spostamento, la proiezione è nulla. Il lavoro è scalare: il segno riguarda il trasferimento, non un verso nello spazio.

Se agiscono più forze, si può calcolare il lavoro di ciascuna e poi sommare con segno. Per forze costanti si ottiene lo stesso risultato calcolando il lavoro della risultante, poiché le proiezioni lungo lo spostamento si sommano.

Una forza costante si può considerare anche su un percorso curvo suddiviso in tratti. Il lavoro su ciascun tratto usa la proiezione del relativo spostamento sulla direzione fissa della forza. Le proiezioni si sommano e danno quella dello spostamento complessivo. Se l'oggetto torna al punto di partenza, quel lavoro totale è zero.
:::

:::esempio{titolo="La proiezione utile di una forza inclinata"}
Una valigia si sposta di $3\,\mathrm{m}$ lungo un pavimento. Una fune la tira con $20\,\mathrm{N}$ a $60^\circ$ dallo spostamento. La proiezione lungo il pavimento è $20\cos60^\circ\,\mathrm{N}=10\,\mathrm{N}$, quindi il lavoro della fune vale $30\,\mathrm{J}$. La parte verticale della trazione cambia le forze di contatto ma ha lavoro diretto nullo durante lo spostamento orizzontale. Anche peso e normale hanno lavoro nullo in questo spostamento. Se scorre con attrito, l'attrito compie un ulteriore lavoro negativo.

::grafico{assi=0 uguale=1 linee="-0.7,0 4.2,0" vettori="0,0,3,0,s;0,0,1.3,2.25,F" segmenti="1.3,0,1.3,2.25" xmin=-0.8 xmax=4.3 ymin=-0.6 ymax=2.8 titolo="La forza e lo spostamento formano 60°. La proiezione orizzontale è la metà della forza."}
:::

:::osservazione{#area-lavoro titolo="Lavoro come area con segno"}
Se un grafico riporta la componente parallela della forza in funzione della coordinata lungo il moto, il lavoro di un tratto a forza costante è l'area con segno del rettangolo. La base ha unità di metri, l'altezza di newton e il prodotto si misura in joule. Per una serie di tratti si sommano le aree. Per una forza che cresce linearmente da zero si ottiene un triangolo. Questa lettura servirà per ricavare l'energia di una molla.
:::

:::esempio{titolo="Area positiva e area negativa"}
Un carrello avanza lungo una guida orizzontale. La componente della forza lungo il moto vale $6\,\mathrm N$ nei primi $4\,\mathrm m$ e $-4\,\mathrm N$ nei successivi $3\,\mathrm m$. Nel primo tratto la forza trasferisce $24\,\mathrm J$ al carrello. Nel secondo ne sottrae $12\,\mathrm J$. Il lavoro complessivo di questa forza è $12\,\mathrm J$ e la distanza percorsa è $7\,\mathrm m$. Se si legge il grafico sommando le due aree geometriche, si perde l'informazione sul cambio di verso della forza. Il rettangolo sotto l'asse si conta con segno negativo.

::grafico{linee="0,6 4,6;4,-4 7,-4" area="6;0;0;4|0;-4;4;7" segmenti="4,0,4,6;4,0,4,-4;7,0,7,-4" xmin=-0.3 xmax=7.8 ymin=-5.5 ymax=7.5 nomi="x (m),F (N)" titolo="L’area fra 0 e 4 m vale +24 J. Quella fra 4 e 7 m vale −12 J."}
:::

## Energia cinetica

::::teorema{#cinetica titolo="Il lavoro totale cambia l'energia cinetica"}
Un punto materiale di massa $m$ e rapidità $v$ ha energia cinetica $K=\dfrac12mv^2$. Il lavoro **totale** delle forze durante un tratto è $\Delta K=K_f-K_i$. Una forza singola può compiere lavoro positivo mentre altre compiono lavoro negativo. La variazione di energia cinetica dipende dalla somma.
:::dimostrazione
Per un tratto rettilineo con risultante costante lungo l'asse, il lavoro totale è $F_R\Delta x$. Il secondo principio dà $F_R=ma$ con i segni lungo l'asse. Usando $2a\Delta x=v_f^2-v_i^2$ si ottiene
$$
W_{\mathrm{tot}}=ma\Delta x=\frac12m(v_f^2-v_i^2)=K_f-K_i.
$$
Il risultato vale più in generale. Se la forza varia, si può suddividere il moto in tratti brevi e sommare le variazioni di energia. I termini intermedi si cancellano perché l'energia alla fine di ogni tratto diventa quella iniziale del successivo.
:::
::::

:::esempio{titolo="Frenare riducendo l'energia cinetica"}
Un carrello di $2\,\mathrm{kg}$ rallenta da $6$ a $4\,\mathrm{m/s}$. Le energie cinetiche agli estremi sono $36$ e $16\,\mathrm{J}$. Il lavoro totale vale $16-36=-20\,\mathrm{J}$. Il segno negativo è coerente con la diminuzione di rapidità. Se la sola forza orizzontale è un attrito uniforme e il carrello percorre $5\,\mathrm{m}$, il suo modulo è $\dfrac{20}{5}\,\mathrm{N}=4\,\mathrm{N}$.

::grafico{f="x^2" punti="4,16,pieno,F;6,36,pieno,I" xmin=0 xmax=6.7 ymin=0 ymax=44 nomi="v (m/s),K (J)" titolo="Per 2 kg l'energia in joule è il quadrato della rapidità in m/s."}
:::

:::esempio{titolo="Trasferire l’energia da un tratto al successivo"}
Un carrello di $2\,\mathrm{kg}$ entra in un tratto a $3\,\mathrm{m/s}$ con $K_i=9\,\mathrm J$. La risultante compie $16\,\mathrm J$ di lavoro nei primi $4\,\mathrm m$, quindi al cambio di tratto il carrello ha $25\,\mathrm J$ e procede a $5\,\mathrm{m/s}$. Un freno compie poi $-9\,\mathrm J$ nei successivi $3\,\mathrm m$. In quel secondo tratto si parte dai $25\,\mathrm J$ già raggiunti. Restano $16\,\mathrm J$ e la rapidità finale è $4\,\mathrm{m/s}$.

Le forze risultanti sono costanti all'interno di ciascun tratto, quindi nel grafico di $K$ la pendenza di ciascun segmento coincide con la forza lungo il moto. Il primo segmento sale di $16\,\mathrm J$ e il secondo scende di $9\,\mathrm J$. Tra gli estremi l'energia aumenta di $7\,\mathrm J$, pari al lavoro netto sull'intero percorso.

::grafico{linee="0,9 4,25 7,16" punti="0,9,pieno,A;4,25,pieno,B;7,16,pieno,C" xmin=-0.4 xmax=7.8 ymin=0 ymax=31 nomi="x (m),K (J)" titolo="In B finisce la spinta e comincia il tratto con frenata. L’energia è continua nel passaggio."}
:::

## Energia potenziale gravitazionale

:::definizione{#potenziale titolo="Energia associata alla quota"}
Vicino al suolo si può prendere $g$ costante. Per un corpo di massa $m$ l'energia potenziale gravitazionale, scegliendo una quota di riferimento zero, è $U_g=mgh$. La quota $h$ è positiva sopra il livello scelto e negativa sotto. Cambiare riferimento aggiunge la stessa costante all'energia di ogni punto. La variazione fra due quote e il lavoro del peso restano quindi invariati.
$$
\Delta U_g=mg(h_f-h_i),\qquad W_g=mg(h_i-h_f)=-\Delta U_g.
$$
Il peso punta verso il basso, quindi compie lavoro positivo durante una discesa. Il lavoro dipende dalla variazione di quota. Una rampa lunga e una più corta con gli stessi estremi danno lo stesso lavoro del peso, anche se possono produrre perdite diverse a causa dell'attrito.
:::

:::esempio{titolo="Una quota di arrivo sotto lo zero"}
Un corpo di $3\,\mathrm{kg}$ scende da $h_i=2\,\mathrm{m}$ a $h_f=-1\,\mathrm{m}$, con $g=10\,\mathrm{m/s^2}$. Rispetto al riferimento scelto $U_i=60\,\mathrm{J}$ e $U_f=-30\,\mathrm{J}$. Quindi $\Delta U_g=-90\,\mathrm{J}$ e il peso compie $+90\,\mathrm{J}$ di lavoro. Se si sceglie zero all'arrivo, le energie diventano $90$ e $0\,\mathrm{J}$ e si ottiene la stessa variazione.

::grafico{f="30*x" punti="-1,-30,pieno,F;2,60,pieno,I" xmin=-1.6 xmax=2.5 ymin=-50 ymax=80 nomi="h (m),U (J)" titolo="Il lavoro del peso è positivo, perché l'energia potenziale diminuisce da I a F."}
:::

:::esempio{titolo="Stesso dislivello e due lunghezze"}
Due guide collegano le stesse quote iniziale e finale. La prima misura $5\,\mathrm m$ e la seconda $7\,\mathrm m$, ma entrambe scendono di $3\,\mathrm m$. Per un carrello di $2\,\mathrm{kg}$ con $g=10\,\mathrm{m/s^2}$ il peso compie $60\,\mathrm J$ di lavoro su entrambi i percorsi. Nel disegno verticale e orizzontale sono in scala. La spezzata aiuta a distinguere le due distanze e rappresenta una guida con il raccordo molto breve.

Se sul carrello agisce anche una forza resistente tangenziale costante di $4\,\mathrm N$, occorre usare la lunghezza della guida per il suo lavoro. La prima guida comporta $-20\,\mathrm J$ di lavoro resistente, la seconda $-28\,\mathrm J$. Il carrello riceve quindi $8\,\mathrm J$ di lavoro netto in più lungo il percorso breve. Si assume che riesca a completare entrambi i percorsi.

::grafico{assi=0 uguale=1 linee="0,3 4,0;0,3 0,0 4,0" punti="0,3,pieno,A;4,0,pieno,B" segmenti="-0.35,0,-0.35,3" etichette="-1.02,1.45,3 m;1.85,1.77,5 m;1.15,-0.35,4 m" xmin=-1.35 xmax=4.9 ymin=-0.7 ymax=3.6 titolo="Le guide uniscono A e B con lo stesso dislivello. La lunghezza della spezzata è 3 m + 4 m."}
:::

## Energia elastica

:::teorema{#elastica titolo="Energia di una molla ideale"}
La deformazione $x$ di una molla è misurata dalla lunghezza naturale. La legge elastica $F_e=-kx$ vale nel regime lineare. Allungando lentamente la molla da zero a $x>0$, la forza esterna necessaria ha modulo crescente da zero a $kx$. Il lavoro della forza esterna è l'area sotto la retta, un triangolo di base $x$ e altezza $kx$. Il lavoro è immagazzinato nella molla come energia potenziale elastica,
$$
U_e=\frac12 kx^2.
$$
La compressione di uguale modulo dà la stessa energia, perché il quadrato elimina il segno. Nello scaricarsi la molla compie lavoro positivo se si muove verso la lunghezza naturale. In generale il lavoro elastico fra due configurazioni è $W_e=U_{e,i}-U_{e,f}$. La forza dipende da $x$, perciò moltiplicare la forza finale per l'intera deformazione raddoppierebbe il lavoro di carico da zero.
:::

:::esempio{titolo="Area della forza necessaria a caricare una molla"}
Una molla con $k=100\,\mathrm{N/m}$ viene allungata di $0{,}10\,\mathrm{m}$. La forza di carico sale fino a $10\,\mathrm{N}$. L'energia è $\dfrac12\cdot0{,}10\cdot10\,\mathrm{J}=0{,}50\,\mathrm{J}$. Il fattore un mezzo descrive la crescita lineare della forza lungo tutta la deformazione.

::grafico{f="100*x" area="100*x;0;0;0.10" punti="0.1,10,pieno,A" etichette="0.086,-0.58,0,10 m" xmin=0 xmax=0.12 ymin=0 ymax=13 nomi="x (m),F (N)" titolo="L'area del triangolo durante il carico vale 0,50 J."}
:::

:::esempio{titolo="Scaricare solo in parte una molla"}
Una molla con $k=250\,\mathrm{N/m}$ passa da una compressione di $0{,}12\,\mathrm m$ a una di $0{,}04\,\mathrm m$. Le deformazioni sono negative e lo spostamento dell'estremo libero ha verso positivo. La forza elastica vale inizialmente $30\,\mathrm N$ e scende fino a $10\,\mathrm N$. Le energie ai due estremi sono $1{,}8$ e $0{,}2\,\mathrm J$. La forza elastica compie lavoro positivo di $1{,}6\,\mathrm J$.

Nel grafico, la forza è positiva su tutto il tratto. L'area è un trapezio di base $0{,}08\,\mathrm m$ e forza media $20\,\mathrm N$. Questo restituisce lo stesso lavoro della differenza fra le due energie. Perciò la formula con il quadrato va applicata alle due deformazioni misurate dalla lunghezza naturale, prima di sottrarre.

::grafico{f="-250*x" area="-250*x;0;-0.12;-0.04" punti="-0.12,30,pieno,I;-0.04,10,pieno,F" etichette="-0.135,-2.25,−0,12 m;-0.054,-2.25,−0,04 m" xmin=-0.15 xmax=0.018 ymin=-4 ymax=38 nomi="x (m),F_e (N)" titolo="La molla compie lavoro positivo mentre l’estremo si muove da I verso F."}
:::

## Conservazione dell'energia meccanica

:::teorema{#conservazione titolo="Trasformazioni tra energia cinetica e potenziale"}
Si considera l'energia meccanica $E_m=K+U_g+U_e$, includendo le energie potenziali delle interazioni rilevanti. Se soltanto il peso e la forza elastica compiono lavoro, $W_{\mathrm{tot}}=-\Delta U_g-\Delta U_e$. Il teorema dell'energia cinetica dà allora $\Delta E_m=0$. Anche un vincolo in quiete che esercita una forza sempre perpendicolare allo spostamento può essere presente, perché il suo lavoro è nullo.
$$
K_i+U_{g,i}+U_{e,i}=K_f+U_{g,f}+U_{e,f}.
$$
Da fermo, scendendo di un dislivello $h$ senza attrito, tutto l'abbassamento di energia gravitazionale diventa energia cinetica. Si scrive $mgh=\dfrac12mv^2$, quindi $v=\sqrt{2gh}$. La massa si semplifica perché tutte le energie coinvolte in questo caso sono proporzionali a $m$.
:::

:::osservazione{#energia-attrito titolo="Bilancio quando agiscono altre forze"}
Se forze ulteriori compiono lavoro $W_{\mathrm{oth}}$, allora $\Delta E_m=W_{\mathrm{oth}}$. Un attrito opposto allo scorrimento lungo un piano fermo compie lavoro negativo sul corpo e riduce la sua energia meccanica. Parte dell'energia passa, per esempio, in energia interna del corpo e della superficie. Un motore può invece trasferire energia al corpo e aumentare $E_m$. Occorre dichiarare quali forze sono già rappresentate dalle energie potenziali per evitare di contarle due volte.
:::

:::esempio{titolo="Dallo stesso dislivello con e senza attrito"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo e scende di $5\,\mathrm{m}$ con $g=10\,\mathrm{m/s^2}$. Senza attrito ha $K_f=100\,\mathrm{J}$ e rapidità $10\,\mathrm{m/s}$. Se l'attrito compie lavoro di $-36\,\mathrm{J}$, il bilancio dà $K_f=64\,\mathrm{J}$ e rapidità $8\,\mathrm{m/s}$. La variazione di quota è la stessa e cambia il lavoro delle altre forze. Il risultato suppone che il carrello raggiunga la fine della discesa.
:::

:::attenzione{titolo="Controllare che il carrello raggiunga il tratto successivo"}
Un carrello di $2\,\mathrm{kg}$ entra a $4\,\mathrm{m/s}$ in un tratto orizzontale di $4\,\mathrm m$ con una forza resistente costante di $5\,\mathrm N$. L'energia cinetica all'ingresso è $16\,\mathrm J$. Attraversare tutto il tratto richiederebbe di cedere $20\,\mathrm J$, quindi il carrello si ferma prima. Il punto di arresto si ottiene da $5d=16$, cioè $d=3{,}2\,\mathrm m$ dall'ingresso. Un motore collocato dopo il tratto potrebbe fornire nuova energia soltanto se il carrello lo raggiungesse. Il bilancio va controllato in ogni fase che precede il punto di arrivo.
:::

:::esempio{titolo="Discesa, tratto ruvido e compressione"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo in A, a $2{,}5\,\mathrm m$ di altezza rispetto al piano orizzontale. La discesa fino a B è liscia. Tra B e C scorre per $2\,\mathrm m$ contro un attrito costante di $7\,\mathrm N$. Da C entra in un tratto liscio e comprime una molla di costante $200\,\mathrm{N/m}$, fino a fermarsi per un istante in D. Si assume $g=10\,\mathrm{m/s^2}$.

::grafico{assi=0 uguale=1 linee="0,2.5 0.8,2.42 1.6,2 2.3,1 3.1,0.22 4,0 8,0;6.48,0.22 6.64,0.34 6.86,0.1 7.08,0.34 7.3,0.1 7.52,0.34 7.7,0.22;7.7,0 7.7,0.6" punti="0,2.5,pieno,A;4,0,pieno,B;6,0,pieno,C;6.6,0,pieno,D" segmenti="4,-0.3,6,-0.3" etichette="4.72,-0.56,2 m" xmin=-0.7 xmax=8.45 ymin=-0.82 ymax=3.15 titolo="La discesa è liscia. Il freno agisce soltanto tra B e C. La compressione avviene sul tratto liscio."}

All'arrivo in B la discesa ha convertito i $50\,\mathrm J$ di energia gravitazionale in energia cinetica. L'attrito sul tratto seguente compie $-7\cdot2\,\mathrm J=-14\,\mathrm J$. In C rimangono $36\,\mathrm J$ di energia meccanica, ancora tutta cinetica. La tabella riassume gli stati, con $U=U_g+U_e$.

| Punto | $K$ (J) | $U$ (J) | $E_m$ (J) |
| --- | ---: | ---: | ---: |
| A | 0 | 50 | 50 |
| B | 50 | 0 | 50 |
| C | 36 | 0 | 36 |
| D | 0 | 36 | 36 |

Da C a D l'energia meccanica si conserva e passa interamente nella molla. L'equazione $\dfrac12\cdot200x^2=36$ dà una compressione in modulo di $0{,}60\,\mathrm m$. Nel controllo sul percorso complessivo, il calo da $50$ a $36\,\mathrm J$ coincide con l'unico lavoro esterno alle energie potenziali. Le variazioni di $K$ dei singoli tratti vanno invece tenute distinte, perché la rapidità in B è diversa da quella in C.

::grafico{linee="4,50 6,36 6.6,36" punti="4,50,pieno,B;6,36,pieno,C;6.6,36,pieno,D" xmin=3.65 xmax=7.25 ymin=28 ymax=56 nomi="x (m),E_m (J)" titolo="Sul piano, l’energia meccanica diminuisce soltanto durante lo scorrimento sul tratto ruvido."}
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Energia trasferita nell'unità di tempo"}
La **potenza media** è il lavoro diviso per la durata positiva, $\mathcal P_m=\dfrac{W}{\Delta t}$. Un watt corrisponde a un joule al secondo. Due motori possono trasferire la stessa energia in tempi diversi. Quello che la fornisce in meno tempo ha potenza media maggiore. Se forza parallela e velocità sono costanti, sostituendo lo spostamento si ottiene $\mathcal P=F_\parallel v$.
:::

:::esempio{titolo="Due durate e una sola potenza media"}
Un motore fornisce $120\,\mathrm W$ per $2\,\mathrm s$ e poi $45\,\mathrm W$ per $8\,\mathrm s$. In ciascun tratto, il prodotto della potenza per la durata corrisponde a un rettangolo nel grafico. Il primo rettangolo vale $240\,\mathrm J$ e il secondo $360\,\mathrm J$. Il lavoro totale è quindi $600\,\mathrm J$ e, per $10\,\mathrm s$ di funzionamento, la potenza media vale $60\,\mathrm W$.

Il tratto più lungo pesa di più nel calcolo della media. La potenza media è perciò più vicina a $45\,\mathrm W$ che a $120\,\mathrm W$. Se tra i due tratti si inserisce una pausa a motore spento, il totale in joule resta uguale mentre aumenta la durata su cui si calcola la media.

::grafico{linee="0,120 2,120;2,45 10,45" area="120;0;0;2|45;0;2;10" segmenti="2,0,2,120;10,0,10,45" xmin=-0.4 xmax=10.9 ymin=0 ymax=144 nomi="t (s),P (W)" titolo="I due rettangoli valgono 240 J e 360 J. Il secondo trasferisce più energia pur a potenza inferiore."}
:::

:::osservazione{titolo="Potenza di una forza e potenza risultante"}
Quando la rapidità varia, il rapporto $\dfrac{W}{\Delta t}$ descrive comunque la media durante l'intervallo. Il prodotto $F_\parallel v$ dà la potenza di quella forza nell'istante in cui si osservano la componente e la rapidità. Una gru che solleva a velocità costante una massa di $100\,\mathrm{kg}$ a $0{,}20\,\mathrm{m/s}$, con $g=10\,\mathrm{m/s^2}$, esercita una forza verso l'alto di $1000\,\mathrm N$. La sua potenza utile vale $200\,\mathrm W$. Il peso compie lavoro con potenza $-200\,\mathrm W$, quindi la potenza risultante sul carico è zero e l'energia cinetica resta costante.
:::

:::definizione{#rendimento titolo="Quota utile dell'energia in ingresso"}
Il **rendimento** $\eta$ confronta l'energia utile con quella assorbita nello stesso processo. Si assume positiva l'energia in ingresso e si misura l'uscita utile sulla stessa durata. La frazione è
$$
\eta=\frac{E_u}{E_i}=\frac{\mathcal P_u}{\mathcal P_i}.
$$
Il rapporto delle potenze vale se entrambe sono medie sulla stessa durata. Il valore percentuale è $100\eta\%$. Se un motore assorbe $500\,\mathrm{J}$ e ne fornisce $350\,\mathrm{J}$ di utili, il rendimento vale $70\%$ e $150\,\mathrm{J}$ non sono uscita utile. Su $5\,\mathrm{s}$ le due potenze medie valgono $100\,\mathrm{W}$ e $70\,\mathrm{W}$. Anche il loro rapporto restituisce $0{,}70$.
:::
