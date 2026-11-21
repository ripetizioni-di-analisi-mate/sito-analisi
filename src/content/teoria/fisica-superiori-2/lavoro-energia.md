---
titolo: Lavoro, energia e potenza
sommario: Lavoro con segno, energia cinetica e potenziale, bilanci con e senza attrito, potenza e rendimento.
---

## Lavoro di una forza costante

:::definizione{#lavoro titolo="Forza e spostamento"}
Il **lavoro** è la quantità di energia che una forza trasferisce a un corpo mentre il corpo si sposta. Una forza e uno spostamento sono vettori, cioè grandezze descritte da un valore (il **modulo**), da una direzione e da un verso. Si indicano con $\vec F$ la forza costante e con $\vec s$ lo spostamento, con $F$ e $s$ i loro moduli e con $\theta$ (si legge «teta») l'angolo fra i due vettori. Il lavoro si indica con $W$ e vale
$$
W=Fs\cos\theta=F_\parallel s,\qquad 1\,\mathrm{J}=1\,\mathrm{N\,m}.
$$
- $\cos\theta$ (si legge «coseno di teta») è il numero per cui si moltiplica la lunghezza di un vettore inclinato di $\theta$ per ottenere la sua proiezione. Vale $1$ per $0^\circ$, $\dfrac12$ per $60^\circ$, $0$ per $90^\circ$ e $-1$ per $180^\circ$.
- $F_\parallel=F\cos\theta$ è la **componente parallela** della forza, cioè la sua proiezione sulla retta dello spostamento, presa con il segno $+$ se ha il verso dello spostamento e con il segno $-$ se ha il verso opposto.
- Il lavoro si misura in **joule** ($\mathrm J$), l'unità di energia del Sistema Internazionale (SI). Un joule è il lavoro di una forza di un newton ($\mathrm N$, l'unità di misura della forza) su un metro nel suo stesso verso.

$F$ e $s$ sono moduli, cioè numeri positivi, quindi il segno del lavoro viene dalla proiezione $F_\parallel$.
- Se l'angolo è minore di $90^\circ$, il coseno è positivo e il lavoro è **positivo**. La forza ha una parte nel verso del moto e cede energia al corpo.
- Se l'angolo supera $90^\circ$, il coseno è negativo e il lavoro è **negativo**. La forza ha una parte opposta al moto e toglie energia al corpo. Con $\theta=180^\circ$ si ha $\cos180^\circ=-1$, quindi una forza di $8\,\mathrm N$ opposta a uno spostamento di $5\,\mathrm m$ compie $-40\,\mathrm J$.
- Se la forza è perpendicolare allo spostamento ($\theta=90^\circ$), la proiezione è nulla e il lavoro è zero.

Il lavoro è una grandezza **scalare**, cioè un numero con unità di misura e senza direzione. Il suo segno indica se l'energia entra nel corpo o ne esce, non un verso nello spazio. Per questo il prodotto $Fs\cos\theta$ si chiama **prodotto scalare** dei vettori $\vec F$ e $\vec s$ e si scrive $\vec F\cdot\vec s$.

Se agiscono più forze, si calcola il lavoro di ciascuna e poi si sommano i risultati con il loro segno. La **risultante** è la forza che da sola equivale a tutte le forze applicate. Per forze costanti il suo lavoro coincide con la somma dei lavori, perché la proiezione della risultante è la somma delle proiezioni delle singole forze.

Una forza costante, cioè con modulo, direzione e verso sempre uguali, può agire anche su un percorso curvo, che si divide in tratti brevi quasi rettilinei. Il lavoro su ciascun tratto usa la proiezione di quel tratto sulla direzione fissa della forza. Le proiezioni dei tratti si sommano e danno la proiezione dello spostamento complessivo, cioè del segmento che va dal punto di partenza al punto di arrivo. Per esempio, una forza orizzontale di $12\,\mathrm N$ su un arco che termina $3\,\mathrm m$ più a destra del punto di partenza compie $36\,\mathrm J$, qualunque sia la lunghezza dell'arco. Se l'oggetto torna al punto di partenza, lo spostamento complessivo è nullo e quel lavoro totale è zero.
:::

:::esempio{titolo="La proiezione utile di una forza inclinata"}
Una valigia si sposta di $3\,\mathrm{m}$ lungo un pavimento. Una fune la tira con $20\,\mathrm{N}$ a $60^\circ$ dallo spostamento. Poiché $\cos60^\circ=\dfrac12$, la proiezione lungo il pavimento è $20\cos60^\circ\,\mathrm{N}=10\,\mathrm{N}$, quindi il lavoro della fune vale $10\cdot3\,\mathrm J=30\,\mathrm{J}$.

La parte verticale della trazione è perpendicolare allo spostamento orizzontale, quindi il suo lavoro è nullo. Essa cambia soltanto le forze di contatto, cioè quanto la valigia preme sul pavimento. Anche il peso e la **normale** (la forza con cui il pavimento sostiene la valigia, perpendicolare al pavimento) sono verticali e hanno lavoro nullo in questo spostamento. Se la valigia scorre con attrito, l'attrito è opposto al moto e compie un ulteriore lavoro negativo.

::grafico{assi=0 uguale=1 linee="-0.7,0 4.2,0" vettori="0,0,3,0,s;0,0,1.3,2.25,F" segmenti="1.3,0,1.3,2.25" xmin=-0.8 xmax=4.3 ymin=-0.6 ymax=2.8 titolo="La forza e lo spostamento formano 60°. La proiezione orizzontale è la metà della forza."}
:::

:::osservazione{#area-lavoro titolo="Lavoro come area con segno"}
Si considera un grafico con la posizione $x$ del corpo lungo il moto sull'asse orizzontale e la componente parallela della forza sull'asse verticale. In un tratto in cui la forza è costante, il grafico è un segmento orizzontale e il lavoro $F_\parallel\cdot\Delta x$ è l'area del rettangolo fra il segmento e l'asse ($\Delta x$, «delta x», indica la lunghezza del tratto). La base si misura in metri, l'altezza in newton, quindi l'area si misura in joule. L'area è **con segno**: un rettangolo sopra l'asse vale lavoro positivo, uno sotto l'asse vale lavoro negativo.

Per una serie di tratti si sommano le aree con il loro segno. Una forza che cresce in modo lineare, cioè di quantità uguali su tratti uguali, ha per grafico un segmento inclinato.
- Se parte da zero, l'area è un triangolo, con lavoro uguale a metà di base per altezza.
- Se parte da un valore diverso da zero, l'area è un trapezio. Il lavoro è la **forza media**, cioè la media fra la forza iniziale e quella finale, moltiplicata per la lunghezza del tratto. Una forza che sale da $4$ a $10\,\mathrm N$ in $3\,\mathrm m$ compie $\dfrac{4+10}{2}\cdot3\,\mathrm J=21\,\mathrm J$.

Questa lettura servirà per ricavare l'energia di una molla.
:::

:::esempio{titolo="Area positiva e area negativa"}
Un carrello avanza lungo una guida orizzontale. La componente della forza lungo il moto vale $6\,\mathrm N$ nei primi $4\,\mathrm m$ e $-4\,\mathrm N$ nei successivi $3\,\mathrm m$.
- Nel primo tratto la forza trasferisce $6\cdot4\,\mathrm J=24\,\mathrm J$ al carrello.
- Nel secondo tratto ne sottrae $4\cdot3\,\mathrm J=12\,\mathrm J$, cioè compie $-12\,\mathrm J$.

Il lavoro complessivo è $(24-12)\,\mathrm J=12\,\mathrm J$, su una distanza percorsa di $7\,\mathrm m$. La somma delle due aree senza segno darebbe $36\,\mathrm J$ e non terrebbe conto del cambio di verso della forza, perciò il rettangolo sotto l'asse si conta con segno negativo.

::grafico{linee="0,6 4,6;4,-4 7,-4" area="6;0;0;4|0;-4;4;7" segmenti="4,0,4,6;4,0,4,-4;7,0,7,-4" xmin=-0.3 xmax=7.8 ymin=-5.5 ymax=7.5 nomi="x (m),F (N)" titolo="L’area fra 0 e 4 m vale +24 J. Quella fra 4 e 7 m vale −12 J."}
:::

## Energia cinetica

::::teorema{#cinetica titolo="Il lavoro totale cambia l'energia cinetica"}
Un **punto materiale** è un corpo le cui dimensioni non contano nel problema studiato. La **rapidità** $v$ è il modulo della velocità, cioè quanti metri percorre il corpo in un secondo, senza segno. Un punto materiale di massa $m$ e rapidità $v$ ha **energia cinetica**
$$
K=\frac12mv^2.
$$
Con la massa in chilogrammi e la rapidità in metri al secondo si ottiene $\mathrm{kg\,m^2/s^2}$, che è il joule. La rapidità compare al quadrato, perciò se triplica l'energia cinetica diventa nove volte maggiore.

Il **lavoro totale** $W_{\mathrm{tot}}$ è la somma dei lavori di tutte le forze che agiscono sul corpo durante un tratto. Il **teorema dell'energia cinetica** afferma che il lavoro totale è uguale alla variazione di energia cinetica, cioè all'energia finale meno quella iniziale:
$$
W_{\mathrm{tot}}=\Delta K=K_f-K_i.
$$
Il simbolo $\Delta$ («delta») indica sempre valore finale meno valore iniziale. Una forza singola può compiere lavoro positivo mentre altre compiono lavoro negativo. La variazione di energia cinetica dipende dalla somma. Se il lavoro totale è positivo il corpo accelera, se è negativo rallenta, se è nullo ha alla fine la stessa rapidità dell'inizio.
:::dimostrazione
Si considera un tratto rettilineo, lungo un asse, in cui la risultante $F_R$ è costante e diretta lungo l'asse. Il lavoro totale è il lavoro della risultante, cioè $F_R\Delta x$.

Il secondo principio della dinamica afferma che $F_R=ma$, dove $a$ è l'accelerazione, con i segni presi lungo l'asse. Quindi $W_{\mathrm{tot}}=ma\Delta x$.

Nel moto con accelerazione costante vale la relazione $v_f^2-v_i^2=2a\Delta x$, quindi $a\Delta x=\dfrac{v_f^2-v_i^2}{2}$. Sostituendo si ottiene
$$
W_{\mathrm{tot}}=ma\Delta x=\frac12m(v_f^2-v_i^2)=K_f-K_i.
$$
Il risultato vale anche quando la forza varia. In quel caso si divide il moto in tratti brevi, in ciascuno dei quali la forza è quasi costante, e si sommano le variazioni di energia dei tratti. I termini intermedi si cancellano, perché l'energia alla fine di ogni tratto è l'energia iniziale del tratto successivo, e resta $K_f-K_i$.
:::
::::

:::esempio{titolo="Frenare riducendo l'energia cinetica"}
Un carrello di $2\,\mathrm{kg}$ rallenta da $6$ a $4\,\mathrm{m/s}$. Le energie cinetiche agli estremi sono
$$
K_i=\frac12\cdot2\cdot6^2\,\mathrm J=36\,\mathrm J,\qquad K_f=\frac12\cdot2\cdot4^2\,\mathrm J=16\,\mathrm J.
$$
Il lavoro totale vale $(16-36)\,\mathrm J=-20\,\mathrm{J}$. Il segno è negativo perché la rapidità diminuisce.

Se l'unica forza orizzontale è un attrito di modulo costante $f$ e il carrello percorre $5\,\mathrm{m}$, il lavoro dell'attrito è $-f\cdot5\,\mathrm m$. Uguagliando a $-20\,\mathrm J$ si trova il modulo $f=\dfrac{20}{5}\,\mathrm{N}=4\,\mathrm{N}$.

Con $m=2\,\mathrm{kg}$ si ha $K=\dfrac12\cdot2\cdot v^2=v^2$ in joule. Nel grafico I è il punto iniziale e F quello finale.

::grafico{f="x^2" punti="4,16,pieno,F;6,36,pieno,I" xmin=0 xmax=6.7 ymin=0 ymax=44 nomi="v (m/s),K (J)" titolo="Per 2 kg l'energia in joule è il quadrato della rapidità in m/s."}
:::

:::esempio{titolo="Trasferire l’energia da un tratto al successivo"}
Un carrello di $2\,\mathrm{kg}$ entra in un tratto a $3\,\mathrm{m/s}$, quindi con $K_i=\dfrac12\cdot2\cdot3^2\,\mathrm J=9\,\mathrm J$.
- Nei primi $4\,\mathrm m$ la risultante compie $16\,\mathrm J$ di lavoro. Al cambio di tratto il carrello ha $(9+16)\,\mathrm J=25\,\mathrm J$. Poiché $v^2=\dfrac{2K}{m}=25\,\mathrm{m^2/s^2}$, procede a $5\,\mathrm{m/s}$.
- Nei successivi $3\,\mathrm m$ un freno compie $-9\,\mathrm J$. Il secondo tratto parte dai $25\,\mathrm J$ già raggiunti, quindi restano $(25-9)\,\mathrm J=16\,\mathrm J$ e la rapidità finale è $4\,\mathrm{m/s}$.

Nel grafico di $K$ in funzione della posizione $x$, la **pendenza** di un segmento è il rapporto fra quanto sale l'energia e la lunghezza del tratto. In ogni tratto la risultante è costante, quindi la pendenza coincide con la componente della risultante lungo il moto. Il primo segmento sale di $16\,\mathrm J$ in $4\,\mathrm m$, perciò la risultante vale $\dfrac{16}{4}\,\mathrm N=4\,\mathrm N$. Il secondo scende di $9\,\mathrm J$ in $3\,\mathrm m$, perciò vale $-3\,\mathrm N$. Fra A e C l'energia aumenta di $(16-9)\,\mathrm J=7\,\mathrm J$, cioè del lavoro totale sull'intero percorso.

::grafico{linee="0,9 4,25 7,16" punti="0,9,pieno,A;4,25,pieno,B;7,16,pieno,C" xmin=-0.4 xmax=7.8 ymin=0 ymax=31 nomi="x (m),K (J)" titolo="In B finisce la spinta e comincia il tratto con frenata. L’energia è continua nel passaggio."}
:::

## Energia potenziale gravitazionale

:::definizione{#potenziale titolo="Energia associata alla quota"}
Il peso di un corpo di massa $m$ è la forza $mg$ diretta verso il basso, dove $g$ è l'accelerazione di gravità. Vicino al suolo $g$ si considera costante. Vale circa $9{,}8\,\mathrm{m/s^2}$ e negli esercizi si arrotonda spesso a $10\,\mathrm{m/s^2}$.

Si sceglie un livello di **quota zero**, per esempio il pavimento. La **quota** $h$ di un punto è la sua altezza misurata in verticale da quel livello, ed è positiva sopra il livello scelto e negativa sotto. L'**energia potenziale gravitazionale** del corpo è
$$
U_g=mgh.
$$

Fra una quota iniziale $h_i$ e una finale $h_f$ valgono le relazioni
$$
\Delta U_g=mg(h_f-h_i),\qquad W_g=mg(h_i-h_f)=-\Delta U_g.
$$
La seconda formula segue dalla definizione di lavoro. Il peso è verticale e punta verso il basso, quindi conta soltanto lo spostamento verticale $h_f-h_i$, misurato verso l'alto, e il lavoro del peso è $-mg(h_f-h_i)$.
- In discesa $h_f<h_i$, quindi l'energia potenziale diminuisce e il peso compie lavoro **positivo**.
- In salita $h_f>h_i$, quindi l'energia potenziale aumenta e il peso compie lavoro **negativo**.
- Su un percorso che torna alla quota di partenza il lavoro del peso è zero.

Cambiare il livello zero aggiunge la stessa costante all'energia di ogni punto. La differenza fra due quote non cambia, quindi restano invariati anche $\Delta U_g$ e il lavoro del peso.

Il lavoro del peso dipende soltanto dalla variazione di quota. Una rampa lunga e una più corta con gli stessi estremi danno lo stesso lavoro del peso, anche se l'attrito sottrae energie diverse sulle due rampe.
:::

:::esempio{titolo="Una quota di arrivo sotto lo zero"}
Un corpo di $3\,\mathrm{kg}$ scende da $h_i=2\,\mathrm{m}$ a $h_f=-1\,\mathrm{m}$, con $g=10\,\mathrm{m/s^2}$. Rispetto al riferimento scelto
$$
U_i=3\cdot10\cdot2\,\mathrm J=60\,\mathrm{J},\qquad U_f=3\cdot10\cdot(-1)\,\mathrm J=-30\,\mathrm{J}.
$$
Quindi $\Delta U_g=(-30-60)\,\mathrm J=-90\,\mathrm{J}$ e il peso compie $+90\,\mathrm{J}$ di lavoro. Se si sceglie lo zero nel punto di arrivo, le quote diventano $3\,\mathrm m$ e $0\,\mathrm m$, le energie $90$ e $0\,\mathrm{J}$, e la variazione è ancora $-90\,\mathrm J$.

::grafico{f="30*x" punti="-1,-30,pieno,F;2,60,pieno,I" xmin=-1.6 xmax=2.5 ymin=-50 ymax=80 nomi="h (m),U (J)" titolo="Il lavoro del peso è positivo, perché l'energia potenziale diminuisce da I a F."}
:::

:::esempio{titolo="Stesso dislivello e due lunghezze"}
Due guide collegano gli stessi punti A e B. Entrambe scendono di $3\,\mathrm m$ (il **dislivello**, cioè la differenza di quota). La prima è il segmento AB, lungo $5\,\mathrm m$ per il teorema di Pitagora, poiché $\sqrt{3^2+4^2}=5$. La seconda è la spezzata che scende in verticale per $3\,\mathrm m$ e poi prosegue in orizzontale per $4\,\mathrm m$, quindi è lunga $7\,\mathrm m$. Nel disegno verticale e orizzontale hanno la stessa scala, e la spezzata rappresenta una guida con il raccordo dell'angolo molto breve.

Per un carrello di $2\,\mathrm{kg}$ con $g=10\,\mathrm{m/s^2}$ il peso compie $2\cdot10\cdot3\,\mathrm J=60\,\mathrm J$ su entrambi i percorsi.

Se sul carrello agisce anche una forza resistente **tangenziale**, cioè diretta lungo la guida e opposta al moto, di modulo costante $4\,\mathrm N$, il suo lavoro dipende dalla lunghezza della guida.
- Sulla prima guida vale $-4\cdot5\,\mathrm J=-20\,\mathrm J$ e il lavoro netto è $(60-20)\,\mathrm J=40\,\mathrm J$.
- Sulla seconda vale $-4\cdot7\,\mathrm J=-28\,\mathrm J$ e il lavoro netto è $(60-28)\,\mathrm J=32\,\mathrm J$.

Il carrello riceve quindi $8\,\mathrm J$ di lavoro netto in più lungo il percorso breve. Si assume che riesca a completare entrambi i percorsi.

::grafico{assi=0 uguale=1 linee="0,3 4,0;0,3 0,0 4,0" punti="0,3,pieno,A;4,0,pieno,B" segmenti="-0.35,0,-0.35,3" etichette="-1.02,1.45,3 m;1.85,1.77,5 m;1.15,-0.35,4 m" xmin=-1.35 xmax=4.9 ymin=-0.7 ymax=3.6 titolo="Le guide uniscono A e B con lo stesso dislivello. La lunghezza della spezzata è 3 m + 4 m."}
:::

## Energia elastica

:::teorema{#elastica titolo="Energia di una molla ideale"}
La **lunghezza naturale** di una molla è la sua lunghezza quando nessuno la tira o la schiaccia. La **deformazione** $x$ è la differenza fra la lunghezza della molla e la lunghezza naturale. È positiva se la molla è allungata, negativa se è compressa.

La forza della molla sul corpo attaccato all'estremo libero è data dalla **legge di Hooke**
$$
F_e=-kx.
$$
- $k$ è la **costante elastica**, misurata in newton al metro ($\mathrm{N/m}$), e indica quanti newton servono per deformare la molla di un metro.
- Il segno meno indica che la forza elastica è opposta alla deformazione. La molla allungata tira indietro, quella compressa spinge in fuori.
- La legge vale nel **regime lineare**, cioè finché la deformazione è abbastanza piccola da non danneggiare la molla. Una molla ideale è una molla di massa trascurabile per cui la legge vale sempre.

Si allunga la molla **lentamente**, cioè senza dare energia cinetica all'estremo, da $0$ a una deformazione $x>0$. La forza esterna necessaria è uguale e opposta a $F_e$, quindi ha modulo che cresce in modo lineare da zero a $kx$. Il suo lavoro è l'area sotto la retta nel grafico forza-deformazione, cioè l'area di un triangolo di base $x$ e altezza $kx$:
$$
\frac12\cdot x\cdot kx=\frac12kx^2.
$$
Questo lavoro resta immagazzinato nella molla come **energia potenziale elastica**,
$$
U_e=\frac12 kx^2.
$$
Una compressione di uguale modulo dà la stessa energia, perché $(-x)^2=x^2$. A parità di deformazione l'energia è proporzionale a $k$. A parità di molla, se la deformazione raddoppia l'energia diventa quattro volte maggiore.

Quando la molla torna verso la lunghezza naturale, la forza elastica ha il verso del moto dell'estremo e compie lavoro positivo. Fra una deformazione iniziale e una finale il lavoro della forza elastica è
$$
W_e=U_{e,i}-U_{e,f}.
$$
Il fattore $\dfrac12$ compare perché la forza è variabile e durante il carico raggiunge $kx$ solo alla fine. Il prodotto $kx\cdot x$ della forza finale per l'intera deformazione è l'area del rettangolo e vale il doppio del lavoro di carico.
:::

:::esempio{titolo="Area della forza necessaria a caricare una molla"}
Una molla con $k=100\,\mathrm{N/m}$ viene allungata di $0{,}10\,\mathrm{m}$. La forza di carico sale fino a $100\cdot0{,}10\,\mathrm N=10\,\mathrm{N}$. L'energia è l'area del triangolo fino al punto A:
$$
U_e=\frac12\cdot0{,}10\cdot10\,\mathrm{J}=0{,}50\,\mathrm{J}.
$$
Il fattore un mezzo compare perché la forza cresce in modo lineare, quindi la forza media è $5\,\mathrm N$, metà di quella finale.

::grafico{f="100*x" area="100*x;0;0;0.10" punti="0.1,10,pieno,A" etichette="0.086,-0.58,0,10 m" xmin=0 xmax=0.12 ymin=0 ymax=13 nomi="x (m),F (N)" titolo="L'area del triangolo durante il carico vale 0,50 J."}
:::

:::esempio{titolo="Scaricare solo in parte una molla"}
Una molla con $k=250\,\mathrm{N/m}$ passa da una compressione di $0{,}12\,\mathrm m$ a una di $0{,}04\,\mathrm m$. Le deformazioni sono negative, $x_i=-0{,}12\,\mathrm m$ e $x_f=-0{,}04\,\mathrm m$, e l'estremo libero si sposta nel verso positivo, cioè verso la lunghezza naturale.
- La forza elastica vale inizialmente $-250\cdot(-0{,}12)\,\mathrm N=30\,\mathrm N$ e scende fino a $-250\cdot(-0{,}04)\,\mathrm N=10\,\mathrm N$.
- Le energie ai due estremi sono $\dfrac12\cdot250\cdot0{,}12^2\,\mathrm J=1{,}8\,\mathrm J$ e $\dfrac12\cdot250\cdot0{,}04^2\,\mathrm J=0{,}2\,\mathrm J$.
- La forza elastica compie quindi il lavoro positivo $W_e=(1{,}8-0{,}2)\,\mathrm J=1{,}6\,\mathrm J$.

Nel grafico la forza è positiva su tutto il tratto. L'area è un trapezio di base $0{,}08\,\mathrm m$ e forza media $\dfrac{30+10}{2}\,\mathrm N=20\,\mathrm N$, quindi vale $20\cdot0{,}08\,\mathrm J=1{,}6\,\mathrm J$, lo stesso lavoro ottenuto dalla differenza fra le due energie. Ciascuna delle due energie si calcola con la propria deformazione misurata dalla lunghezza naturale, e solo dopo si sottrae. Il conto $\dfrac12\cdot250\cdot0{,}08^2\,\mathrm J=0{,}8\,\mathrm J$, fatto con la differenza delle deformazioni, dà un valore diverso.

::grafico{f="-250*x" area="-250*x;0;-0.12;-0.04" punti="-0.12,30,pieno,I;-0.04,10,pieno,F" etichette="-0.135,-2.25,−0,12 m;-0.054,-2.25,−0,04 m" xmin=-0.15 xmax=0.018 ymin=-4 ymax=38 nomi="x (m),F_e (N)" titolo="La molla compie lavoro positivo mentre l’estremo si muove da I verso F."}
:::

## Conservazione dell'energia meccanica

:::teorema{#conservazione titolo="Trasformazioni tra energia cinetica e potenziale"}
L'**energia meccanica** di un corpo è la somma della sua energia cinetica e delle energie potenziali delle forze presenti, qui quella gravitazionale e quella elastica:
$$
E_m=K+U_g+U_e.
$$
Si suppone che soltanto il peso e la forza elastica compiano lavoro. Allora il lavoro totale è
$$
W_{\mathrm{tot}}=W_g+W_e=-\Delta U_g-\Delta U_e.
$$
Il teorema dell'energia cinetica dà $\Delta K=W_{\mathrm{tot}}$, quindi $\Delta K=-\Delta U_g-\Delta U_e$, cioè $\Delta K+\Delta U_g+\Delta U_e=0$. L'energia meccanica quindi non cambia, $\Delta E_m=0$, e vale la **conservazione dell'energia meccanica**:
$$
K_i+U_{g,i}+U_{e,i}=K_f+U_{g,f}+U_{e,f}.
$$
Il risultato vale anche in presenza di un **vincolo fermo**, cioè una guida, un piano o un filo fisso che sostiene il corpo, se la sua forza è sempre perpendicolare allo spostamento, perché allora il suo lavoro è nullo. È il caso della normale di una rampa liscia, cioè senza attrito.

Un corpo parte da fermo e scende di un dislivello $h$ senza attrito. Tutta la diminuzione di energia gravitazionale diventa energia cinetica:
$$
mgh=\frac12mv^2.
$$
Si dividono i due membri per $m$ e si moltiplicano per $2$, quindi $v^2=2gh$ e $v=\sqrt{2gh}$. La massa si semplifica perché in questo caso tutte le energie coinvolte sono proporzionali a $m$.
:::

:::osservazione{#energia-attrito titolo="Bilancio quando agiscono altre forze"}
Si indica con $W_{\mathrm{oth}}$ il lavoro delle **altre forze**, cioè di tutte le forze che compiono lavoro tranne il peso e la forza elastica (il pedice oth viene dall'inglese *other*, «altre»). Il lavoro totale è $W_g+W_e+W_{\mathrm{oth}}$, e lo stesso ragionamento della conservazione dà
$$
\Delta E_m=W_{\mathrm{oth}}.
$$
- Un attrito opposto allo scorrimento lungo un piano fermo compie lavoro negativo sul corpo e riduce la sua energia meccanica. L'energia sottratta passa, per esempio, in **energia interna** del corpo e della superficie, cioè l'energia legata al moto delle particelle che li formano, che si manifesta come riscaldamento.
- Un motore o una mano possono invece trasferire energia al corpo e aumentare $E_m$.

Il lavoro del peso è già contenuto in $\Delta U_g$ e quello della molla in $\Delta U_e$, perciò questi due lavori non entrano in $W_{\mathrm{oth}}$. Aggiungerli anche lì significherebbe contarli due volte.

Per esempio, un blocco attaccato a una molla parte e arriva fermo su una guida orizzontale, con $4\,\mathrm J$ di energia elastica iniziale. La mano compie $7\,\mathrm J$ e l'attrito $-2\,\mathrm J$, quindi $E_m$ aumenta di $5\,\mathrm J$. Poiché $K$ e $U_g$ non cambiano, l'energia elastica finale è $(4+5)\,\mathrm J=9\,\mathrm J$.
:::

:::esempio{titolo="Dallo stesso dislivello con e senza attrito"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo e scende di $5\,\mathrm{m}$ con $g=10\,\mathrm{m/s^2}$. La diminuzione di energia gravitazionale è $2\cdot10\cdot5\,\mathrm J=100\,\mathrm J$.
- Senza attrito $K_f=100\,\mathrm{J}$, quindi $v^2=\dfrac{2\cdot100}{2}\,\mathrm{m^2/s^2}=100\,\mathrm{m^2/s^2}$ e la rapidità è $10\,\mathrm{m/s}$.
- Se l'attrito compie $-36\,\mathrm{J}$, il bilancio $\Delta E_m=W_{\mathrm{oth}}$ dà $K_f=(100-36)\,\mathrm J=64\,\mathrm{J}$, quindi $v^2=64\,\mathrm{m^2/s^2}$ e la rapidità è $8\,\mathrm{m/s}$.

La variazione di quota è la stessa, mentre cambia il lavoro delle altre forze. Il risultato suppone che il carrello raggiunga la fine della discesa.
:::

:::attenzione{titolo="Controllare che il carrello raggiunga il tratto successivo"}
Un carrello di $2\,\mathrm{kg}$ entra a $4\,\mathrm{m/s}$ in un tratto orizzontale di $4\,\mathrm m$ con una forza resistente costante di $5\,\mathrm N$. L'energia cinetica all'ingresso è $\dfrac12\cdot2\cdot4^2\,\mathrm J=16\,\mathrm J$. Per attraversare tutto il tratto il carrello dovrebbe cedere $5\cdot4\,\mathrm J=20\,\mathrm J$, più di quanta energia possiede, quindi si ferma prima. Nel punto di arresto il lavoro resistente $5\,\mathrm N\cdot d$ ha tolto tutti i $16\,\mathrm J$, perciò $5d=16$ e $d=3{,}2\,\mathrm m$ dall'ingresso.

Un motore collocato dopo il tratto fornirebbe nuova energia soltanto se il carrello lo raggiungesse. Un bilancio fra partenza e arrivo vale quindi solo se in ogni fase intermedia l'energia cinetica calcolata è positiva.
:::

:::esempio{titolo="Discesa, tratto ruvido e compressione"}
Un carrello di $2\,\mathrm{kg}$ parte da fermo in A, a $2{,}5\,\mathrm m$ di altezza rispetto al piano orizzontale. La discesa fino a B è liscia. Tra B e C scorre per $2\,\mathrm m$ contro un attrito costante di $7\,\mathrm N$ (il tratto **ruvido**). Da C entra in un tratto liscio e comprime una molla di costante $200\,\mathrm{N/m}$, fino a fermarsi per un istante in D. Si assume $g=10\,\mathrm{m/s^2}$ e si prende il piano orizzontale come quota zero.

::grafico{assi=0 uguale=1 linee="0,2.5 0.8,2.42 1.6,2 2.3,1 3.1,0.22 4,0 8,0;6.48,0.22 6.64,0.34 6.86,0.1 7.08,0.34 7.3,0.1 7.52,0.34 7.7,0.22;7.7,0 7.7,0.6" punti="0,2.5,pieno,A;4,0,pieno,B;6,0,pieno,C;6.6,0,pieno,D" segmenti="4,-0.3,6,-0.3" etichette="4.72,-0.56,2 m" xmin=-0.7 xmax=8.45 ymin=-0.82 ymax=3.15 titolo="La discesa è liscia. Il freno agisce soltanto tra B e C. La compressione avviene sul tratto liscio."}

- In A l'energia è tutta gravitazionale, $2\cdot10\cdot2{,}5\,\mathrm J=50\,\mathrm J$. La discesa è liscia, quindi in B questi $50\,\mathrm J$ sono diventati energia cinetica.
- Fra B e C l'attrito compie $-7\cdot2\,\mathrm J=-14\,\mathrm J$. In C rimangono $(50-14)\,\mathrm J=36\,\mathrm J$ di energia meccanica, ancora tutta cinetica, perché il piano è a quota zero e la molla non è ancora compressa.

La tabella riassume gli stati, con $U=U_g+U_e$.

| Punto | $K$ (J) | $U$ (J) | $E_m$ (J) |
| --- | ---: | ---: | ---: |
| A | 0 | 50 | 50 |
| B | 50 | 0 | 50 |
| C | 36 | 0 | 36 |
| D | 0 | 36 | 36 |

Da C a D il tratto è liscio, quindi l'energia meccanica si conserva e passa interamente nella molla. In D vale perciò
$$
\frac12\cdot200x^2=36,\qquad x^2=\frac{36}{100}=0{,}36,
$$
e la compressione in modulo è $0{,}60\,\mathrm m$. Sull'intero percorso il calo di $E_m$ da $50$ a $36\,\mathrm J$ coincide con il lavoro dell'attrito, l'unica forza che compie lavoro senza essere rappresentata da un'energia potenziale. Le variazioni di $K$ dei singoli tratti sono invece diverse, perché la rapidità in B è diversa da quella in C.

::grafico{linee="4,50 6,36 6.6,36" punti="4,50,pieno,B;6,36,pieno,C;6.6,36,pieno,D" xmin=3.65 xmax=7.25 ymin=28 ymax=56 nomi="x (m),E_m (J)" titolo="Sul piano, l’energia meccanica diminuisce soltanto durante lo scorrimento sul tratto ruvido."}
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Energia trasferita nell'unità di tempo"}
La **potenza media** $\mathcal P_m$ è il lavoro diviso per la durata $\Delta t$ in cui viene compiuto:
$$
\mathcal P_m=\frac{W}{\Delta t}.
$$
La durata è positiva. La potenza si misura in **watt**. Un watt ($\mathrm W$, in carattere dritto, mentre il lavoro $W$ è in corsivo) corrisponde a un joule al secondo. Un kilowatt è $1\,\mathrm{kW}=1000\,\mathrm W$. Un motore che compie $1400\,\mathrm J$ di lavoro in $8\,\mathrm s$ ha potenza media $\dfrac{1400}{8}\,\mathrm W=175\,\mathrm W$.

Due motori possono trasferire la stessa energia in tempi diversi. Quello che la fornisce in meno tempo ha potenza media maggiore, perché divide lo stesso lavoro per una durata minore.

Se la forza parallela e la velocità sono costanti, lo spostamento è $s=v\,\Delta t$. Sostituendo nel lavoro $W=F_\parallel s$ si ottiene
$$
\mathcal P=\frac{F_\parallel v\,\Delta t}{\Delta t}=F_\parallel v.
$$
:::

:::esempio{titolo="Due durate e una sola potenza media"}
Un motore fornisce $120\,\mathrm W$ per $2\,\mathrm s$ e poi $45\,\mathrm W$ per $8\,\mathrm s$. Nel grafico della potenza in funzione del tempo, ciascun tratto è un rettangolo con base la durata e altezza la potenza, e la sua area è il lavoro di quel tratto.
- Il primo rettangolo vale $120\cdot2\,\mathrm J=240\,\mathrm J$.
- Il secondo vale $45\cdot8\,\mathrm J=360\,\mathrm J$.

Il lavoro totale è quindi $600\,\mathrm J$ e, per $10\,\mathrm s$ di funzionamento, la potenza media vale $\dfrac{600}{10}\,\mathrm W=60\,\mathrm W$.

Il tratto a $45\,\mathrm W$ dura di più, quindi pesa di più nel calcolo della media. La potenza media è perciò più vicina a $45\,\mathrm W$ che a $120\,\mathrm W$. Se tra i due tratti si inserisce una pausa a motore spento, il totale in joule resta uguale mentre aumenta la durata su cui si calcola la media, quindi la potenza media diminuisce.

::grafico{linee="0,120 2,120;2,45 10,45" area="120;0;0;2|45;0;2;10" segmenti="2,0,2,120;10,0,10,45" xmin=-0.4 xmax=10.9 ymin=0 ymax=144 nomi="t (s),P (W)" titolo="I due rettangoli valgono 240 J e 360 J. Il secondo trasferisce più energia pur a potenza inferiore."}
:::

:::osservazione{titolo="Potenza di una forza e potenza risultante"}
Quando la rapidità varia, il rapporto $\dfrac{W}{\Delta t}$ dà comunque la potenza media sull'intervallo. Il prodotto $F_\parallel v$ dà invece la potenza di quella forza in un singolo istante, con la componente e la rapidità di quell'istante. Una forza perpendicolare alla velocità ha $F_\parallel=0$, quindi in quell'istante ha potenza nulla.

Una gru solleva a velocità costante una massa di $100\,\mathrm{kg}$ a $0{,}20\,\mathrm{m/s}$, con $g=10\,\mathrm{m/s^2}$. La velocità è costante, quindi la forza della gru equilibra il peso e vale $100\cdot10\,\mathrm N=1000\,\mathrm N$ verso l'alto. La sua potenza utile vale $1000\cdot0{,}20\,\mathrm W=200\,\mathrm W$. Il peso è opposto al moto e compie lavoro con potenza $-200\,\mathrm W$. La potenza risultante sul carico è quindi zero e l'energia cinetica resta costante.
:::

:::definizione{#rendimento titolo="Quota utile dell'energia in ingresso"}
Una macchina assorbe energia (per esempio elettrica) e ne restituisce una parte nella forma che serve, detta **energia utile**; il resto passa ad altre forme, per esempio riscaldando la macchina. Il **rendimento** $\eta$ (si legge «eta») è il rapporto fra l'energia utile $E_u$ e l'energia assorbita $E_i$ («i» sta per ingresso) nello stesso processo, misurate sulla stessa durata:
$$
\eta=\frac{E_u}{E_i}=\frac{\mathcal P_u}{\mathcal P_i}.
$$
- Il rapporto delle potenze vale se entrambe sono potenze medie sulla stessa durata, perché dividere le due energie per la stessa durata non cambia il loro rapporto.
- L'energia utile è una parte dell'energia assorbita, quindi $\eta$ è un numero fra $0$ e $1$. Il valore percentuale è $100\eta\,\%$.
- Se tutta l'uscita utile di un primo dispositivo entra in un secondo, il rendimento dell'insieme è il prodotto dei due rendimenti. Per esempio, con $80\%$ e $75\%$ si ha $0{,}80\cdot0{,}75=0{,}60$, cioè $60\%$.

Se un motore assorbe $500\,\mathrm{J}$ e ne fornisce $350\,\mathrm{J}$ utili, il rendimento vale $\dfrac{350}{500}=0{,}70$, cioè $70\%$. I restanti $(500-350)\,\mathrm J=150\,\mathrm{J}$ non sono uscita utile. Se il processo dura $5\,\mathrm{s}$, le due potenze medie valgono $\dfrac{500}{5}\,\mathrm W=100\,\mathrm{W}$ e $\dfrac{350}{5}\,\mathrm W=70\,\mathrm{W}$, e il loro rapporto è ancora $0{,}70$.
:::
