---
titolo: "Forze ed equilibrio"
sommario: "Reazioni dei vincoli, molle, attrito, piani inclinati, funi e momenti delle forze."
---

## Forza normale e tensione

:::definizione{#vincoli titolo="Forze esercitate dai vincoli"}
Un **vincolo** limita i movimenti possibili di un corpo. La sua reazione è una forza che si ricava dall'equazione del moto e dalla condizione imposta. Una superficie piana, nel modello di contatto, esercita una forza normale perpendicolare alla superficie. Se c'è attrito, può esserci anche una componente tangenziale. Una corda tesa esercita una trazione lungo la propria direzione, verso l'altro estremo.

Sul piano orizzontale, con accelerazione verticale nulla e soltanto il peso e la normale, si ha $N=mg$. Se una corda tira anche verso l'alto con componente $T_y>0$, la stessa equazione diventa $N+T_y-mg=0$ e la normale si riduce. Se il corpo viene premuto verso il basso, la normale invece cresce. In entrambi i casi il suo valore va dedotto dal bilancio delle componenti normali, senza identificarlo automaticamente con il peso.

Una superficie senza adesione può spingere ma non tirare il corpo. Se il bilancio impone $N<0$, il contatto ipotizzato è incompatibile con le forze. Nel distacco della superficie la normale si annulla e il movimento deve essere studiato con le sole forze che restano.
:::

::grafico{assi=0 uguale=1 poligoni="-0.7,0 0.7,0 0.7,0.8 -0.7,0.8" segmenti="-2,0,2,0" vettori="0,0.4,0,-1.5,P;0,0.4,0,1.4,N;0,0.4,1.8,1.3,T" xmin=-2.2 xmax=2.2 ymin=-1.8 ymax=1.9 titolo="La componente verticale della trazione contribuisce al bilancio normale"}

:::osservazione{#confine-equilibrio titolo="Scegliere il confine prima delle equazioni"}
Supponiamo che una cassa di peso $50\,\mathrm N$ contenga un carico di peso $20\,\mathrm N$, appoggiato sul fondo. Entrambi sono fermi su un piano orizzontale. Per trovare la forza del pavimento, conviene racchiudere cassa e carico nello stesso contorno. Le forze che si scambiano al contatto sono interne. Restano due pesi e una reazione esterna, perciò la normale del pavimento è $70\,\mathrm N$.

Per ricavare la forza con cui il carico preme sul fondo, bisogna separarlo dalla cassa. Sul carico isolato la normale del fondo bilancia il suo peso, quindi vale $20\,\mathrm N$. Se si vuole sapere dove il pavimento esercita la risultante del contatto, serve anche la posizione del carico. Per questa domanda occorre un corpo rigido con punti di applicazione.
:::

::grafico{assi=0 uguale=1 linee="-3.25,0 3.25,0" poligoni="-2.55,0 -0.55,0 -0.55,0.6 -2.55,0.6;0.55,0 2.55,0 2.55,0.6 0.55,0.6;-1.98,0.6 -1.13,0.6 -1.13,1.24 -1.98,1.24;1.12,0.6 1.97,0.6 1.97,1.24 1.12,1.24" segmenti="-2.82,-0.15, -0.27,-0.15;-0.27,-0.15,-0.27,1.47;-0.27,1.47,-2.82,1.47;-2.82,1.47,-2.82,-0.15;0.97,0.53,2.12,0.53;2.12,0.53,2.12,1.39;2.12,1.39,0.97,1.39;0.97,1.39,0.97,0.53" etichette="-2.64,1.76,cassa e carico;0.88,1.76,solo carico" xmin=-3.35 xmax=3.35 ymin=-0.4 ymax=2.17 titolo="A sinistra il contatto interno è racchiuso dal contorno. A destra separa il sistema dal fondo della cassa."}

## La forza elastica

:::teorema{#hooke titolo="Legge di Hooke"}
Per una molla ideale, $x$ è la variazione con segno della lunghezza rispetto allo stato naturale. Se è positivo in allungamento, la componente della forza della molla sull'estremo mobile è $F_e=-kx$ con $k>0$. Il segno mostra che la forza tende a riportare l'estremo verso la posizione naturale. Si misura $k$ in $\mathrm{N/m}$, perché il prodotto $kx$ deve essere una forza.

La legge è un modello lineare valido nel campo elastico del dispositivo. Per controllarlo si può misurare la forza esterna che mantiene la molla ferma per diversi valori di $x$. Questa forza bilancia $F_e$, quindi la pendenza del grafico della forza applicata contro l'allungamento è $+k$. Un grafico della forza della molla contro $x$ ha pendenza opposta, $-k$.

In una molla verticale ideale, una massa appesa a riposo determina un allungamento $x=mg/k$. Con $m=0{,}40\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ e $k=100\,\mathrm{N/m}$, sono necessari $4\,\mathrm N$ di richiamo e quindi $x=0{,}040\,\mathrm m$. Se si aggiunge una massa di $0{,}20\,\mathrm{kg}$, il nuovo allungamento è $0{,}060\,\mathrm m$. La differenza di due centimetri dipende soltanto dal peso aggiunto, finché la molla resta nel tratto lineare.
:::

::grafico{f="100*x" punti="0.04,4,pieno;0.06,6,pieno" xmin=0 xmax=0.08 ymin=0 ymax=8.5 nomi="x (m),F (N)" titolo="Il grafico della forza applicata dà k uguale a 100 N/m"}

:::esempio{#calibrazione-molla titolo="Ricavare costante elastica e lunghezza naturale"}
Supponiamo di misurare la lunghezza totale $\ell$ della molla, senza conoscerne la lunghezza naturale $\ell_0$. Per tenerla allungata a $14\,\mathrm{cm}$ serve una trazione di $4\,\mathrm N$, mentre a $18\,\mathrm{cm}$ serve una trazione di $12\,\mathrm N$. Si confrontano le due misure perché la differenza elimina $\ell_0$ dalla relazione $F=k(\ell-\ell_0)$.

La pendenza è $\dfrac{12-4}{0{,}18-0{,}14}\,\mathrm{N/m}=200\,\mathrm{N/m}$. Nella prima misura la differenza rispetto alla lunghezza naturale è $4/200\,\mathrm m=0{,}02\,\mathrm m$, quindi $\ell_0=12\,\mathrm{cm}$. Sul grafico della forza contro la lunghezza totale la retta incontra l’asse orizzontale a $12\,\mathrm{cm}$. Dividere la forza per la lunghezza totale di una sola misura darebbe una pendenza errata.
:::

::grafico{curve="t,2*(t-12),12,21" punti="12,0,pieno;14,4,pieno;18,12,pieno" xmin=10 xmax=22 ymin=0 ymax=19 nomi="ℓ (cm),F (N)" titolo="L’intercetta orizzontale dà la lunghezza naturale. Ogni centimetro di allungamento richiede 2 N in più."}

## Attrito statico e dinamico

:::teorema{#attrito titolo="Modello dell'attrito radente"}
L'**attrito statico** si oppone allo scorrimento che le altre forze tenderebbero a produrre. Il suo modulo può variare da zero a $\mu_s N$. Per un corpo fermo si calcola prima quale attrito sarebbe necessario all'equilibrio. Se il modulo richiesto è al più $\mu_sN$, il contatto può sostenere la quiete. Al limite si raggiunge $f_s=\mu_sN$.

Con una normale di $50\,\mathrm N$ e $\mu_s=0{,}40$, il limite è $20\,\mathrm N$. Una trazione orizzontale di $12\,\mathrm N$ viene equilibrata da dodici newton di attrito statico, rivolti in verso opposto. Attribuire sempre al corpo venti newton di attrito prevederebbe un'accelerazione dalla parte opposta alla trazione, in contrasto con la quiete iniziale.

Quando il corpo scivola, il modello di attrito dinamico dà modulo $f_d=\mu_d N$ e un verso opposto allo scorrimento relativo. Se il corpo rallenta fino a fermarsi, si deve ricontrollare il limite statico prima di proseguire il calcolo. L'attrito può puntare nel verso della velocità rispetto al suolo su un nastro in moto, se lo scorrimento rispetto al nastro avviene in verso contrario.
:::

::grafico{curve="t,t,0,20;t,15,0,27" punti="12,12,pieno;20,20,pieno" xmin=0 xmax=27 ymin=0 ymax=22 nomi="F (N),f (N)" titolo="L'attrito statico segue la trazione fino a 20 N. In scorrimento, qui vale 15 N"}

:::esempio{#trazione-obliqua titolo="Quando la trazione cambia anche il limite statico"}
Una cassa pesa $60\,\mathrm N$ e poggia su un piano orizzontale con $\mu_s=0{,}40$. La forza $F$ tira verso destra e verso l’alto, con $\cos\alpha=0{,}80$ e $\sin\alpha=0{,}60$. In quiete la domanda all’attrito è $F\cos\alpha$, mentre la normale vale $60\,\mathrm N-F\sin\alpha$. La trazione aumenta il modulo richiesto all’attrito e riduce nello stesso tempo quello disponibile.

Alla soglia si impone $F\cos\alpha=\mu_s(60\,\mathrm N-F\sin\alpha)$. Risolvendo si trova $F=\dfrac{24}{0{,}80+0{,}40\cdot0{,}60}\,\mathrm N\simeq23{,}1\,\mathrm N$. A quel valore la normale è ancora positiva. Con una trazione orizzontale che avesse lo stesso modulo, la normale sarebbe ancora il peso e il limite di quiete sarebbe $24\,\mathrm N$. Prima di sostituire $f_d=\mu_dN$, si deve stabilire se la cassa è già in scorrimento o se la richiesta supera il limite della quiete.
:::

::grafico{f="0.8*x;24-0.24*x" punti="23.076923,18.461538,pieno,A" etichette="26.7,27,richiesto;28.5,13.5,disponibile" xmin=0 xmax=41 ymin=0 ymax=33 nomi="F (N),f (N)" titolo="Nel punto A la forza d’attrito richiesta per la quiete raggiunge il limite disponibile."}

:::osservazione{#attriti-piu-contatti titolo="Ripartire il carico tra contatti diversi"}
Se due pattini poggiano su materiali diversi, a ciascuna normale si associa il proprio coefficiente. Con $N_A=30\,\mathrm N$, $N_B=50\,\mathrm N$, $\mu_{s,A}=0{,}30$ e $\mu_{s,B}=0{,}50$, i due limiti statici valgono $9\,\mathrm N$ e $25\,\mathrm N$. La somma, $34\,\mathrm N$, è un limite superiore all’attrito totale nella direzione in cui si tenta di trascinare la slitta.

Per una slitta estesa, questo controllo da solo riguarda la traslazione. Forze d’attrito applicate su lati diversi possono produrre momenti, e l’equilibrio può richiedere una ripartizione particolare. Prima di considerare raggiungibile il massimo totale, si verifica quindi che possano annullarsi anche i momenti.
:::

## Piano inclinato

:::teorema{#piano-inclinato titolo="Scomposizione del peso"}
Sia $\theta$ l'angolo del piano con l'orizzontale. Si scelgono un asse lungo la discesa e uno normale uscente. La proiezione del peso lungo il piano vale $mg\sin\theta$, verso la discesa. La proiezione normale spinge dentro il piano con modulo $mg\cos\theta$. L'angolo $\theta$ è anche quello tra il peso e la normale entrante, perché entrambe le direzioni si ottengono ruotando l’orizzontale e il piano inclinato di un angolo retto.

Se non agiscono altre forze normali e il corpo resta sul piano, $N=mg\cos\theta$. In assenza di attrito, l'accelerazione lungo la discesa vale $g\sin\theta$. Se il corpo sta scendendo con attrito dinamico, da $ma=mg\sin\theta-\mu_dmg\cos\theta$ segue
$$
a=g(\sin\theta-\mu_d\cos\theta).
$$
Se invece sta salendo, l'attrito punta verso il basso lungo il piano e si somma alla proiezione del peso.

Per una partenza da fermo, il criterio statico è $mg\sin\theta\leq\mu_smg\cos\theta$. Per $0\leq\theta<90^\circ$ equivale a $\tan\theta\leq\mu_s$. La verifica va fatta prima di usare la formula dinamica. Se il risultato dinamico è negativo per un corpo che già scende, la rapidità di discesa diminuisce. Il corpo non cambia verso automaticamente dopo essersi fermato: bisogna tornare al bilancio statico.
:::

:::esempio{#distacco-piano titolo="Proiezione del peso e normale sono due risultati diversi"}
Una slitta di peso $60\,\mathrm N$ scende tenendosi a contatto su una rampa di $60^\circ$. Una forza ausiliaria $F$ è perpendicolare al piano e punta verso l’esterno. Il peso ha componente normale di modulo $60\cos60^\circ=30\,\mathrm N$ verso l’interno. Finché vale il vincolo e l’accelerazione perpendicolare è nulla, la normale è $N=30\,\mathrm N-F$.

Per $F=18\,\mathrm N$ la rampa esercita ancora $12\,\mathrm N$. Il distacco è al limite $F=30\,\mathrm N$, dove la normale si annulla. Con $F$ maggiore, il bilancio lungo la normale richiederebbe una spinta verso l’interno: l’ipotesi di contatto viene meno. Durante il tratto di contatto la forza ausiliaria non ha invece proiezione lungo la rampa. Può comunque cambiare la forza tangenziale tramite l’attrito, se il piano è ruvido.
:::

::grafico{assi=0 uguale=1 linee="-1.0,-2.14705 1.49,2.16576" vettori="0,0,0,-2,P;0,0,-0.519615,0.3;0,0,-0.34641,0.2" segmenti="0,-2,-0.866025,-1.5;0,0,-0.866025,-1.5" punti="0,0,pieno" etichette="-.65,.39,F;-.30,.38,N" xmin=-1.76 xmax=1.72 ymin=-2.37 ymax=2.46 titolo="Lungo la normale, la somma di F e N bilancia la proiezione entrante del peso."}

## Equilibrio del punto materiale

:::teorema{#equilibrio titolo="Risultante nulla"}
Nel modello di punto materiale, equilibrio traslazionale significa $\sum F_x=0$ e $\sum F_y=0$. Queste condizioni implicano accelerazione nulla. Per un equilibrio statico occorre inoltre che il punto sia inizialmente fermo. Quando il punto rappresenta un nodo ideale di corde, ogni corda esercita una forza lungo la propria direzione uscente.

Un peso $P$ è sostenuto da due fili simmetrici di inclinazione $\theta$ sopra l'orizzontale. Per simmetria le componenti orizzontali si annullano. Da $2T\sin\theta=P$ si ottiene $T=P/(2\sin\theta)$. Con $\theta=30^\circ$, ogni tensione vale $P$. Quando i fili diventano quasi orizzontali, il seno si riduce e occorrono tensioni molto grandi per ottenere lo stesso sostegno verticale.

Con angoli diversi si devono risolvere entrambe le equazioni. Per $\theta_L=30^\circ$ e $\theta_R=60^\circ$, le relazioni sono $T_L\cos30^\circ=T_R\cos60^\circ$ e $T_L\sin30^\circ+T_R\sin60^\circ=P$. Dalla prima segue $T_R=\sqrt3\,T_L$. Sostituendo nella seconda si ottiene $T_L=P/2$ e $T_R=\sqrt3 P/2$. Il filo più verticale sopporta la tensione maggiore in questo esempio.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-0.8660,0.5,T_L;0,0,0.8660,1.5,T_R;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.2 ymax=1.9 titolo="Le proiezioni orizzontali coincidono in modulo anche se le tensioni sono diverse"}

:::esempio{#portata-funi titolo="Quale fune raggiunge per prima il suo limite?"}
Per il nodo con inclinazioni di $30^\circ$ a sinistra e $60^\circ$ a destra, supponiamo che le tensioni ammesse siano al massimo $32\,\mathrm N$ e $36\,\mathrm N$. Dal bilancio si ricava $T_L=P/2$ e $T_R=\sqrt3 P/2$. La prima fune quindi ammette $P\leq64\,\mathrm N$, mentre la seconda ammette $P\leq72/\sqrt3\,\mathrm N\simeq41{,}6\,\mathrm N$. Perché il nodo resti in equilibrio con entrambe le funi entro il loro limite, deve valere il minore dei due massimi. In questo esempio è la fune destra, pur avendo il limite di tensione maggiore, a determinare il peso ammesso.
:::

## Momento ed equilibrio dei corpi estesi

:::definizione{#momento-equilibrio titolo="Braccio di una forza"}
Il **braccio** $b$ è la distanza perpendicolare dal perno alla retta d'azione della forza. Nel piano, il modulo del momento è $M=bF=rF|\sin\theta|$, dove $r$ è la distanza del punto di applicazione dal perno e $\theta$ è l'angolo tra posizione e forza. Un momento si misura in $\mathrm{N\cdot m}$. Si assume spesso positivo il verso di rotazione antiorario.

Due forze uguali possono avere momenti diversi rispetto allo stesso perno, perché conta la retta d'azione. Se la retta passa per il perno, il braccio è nullo. Una forza di $20\,\mathrm N$ applicata a $0{,}40\,\mathrm m$ dal perno con angolo di $30^\circ$ ha braccio $0{,}20\,\mathrm m$ e momento di modulo $4\,\mathrm{N\cdot m}$. Sarebbe il doppio se la forza fosse perpendicolare al raggio.

Per una trave libera in piano, l'equilibrio statico richiede che si annullino sia la risultante sia il momento totale. Una coppia di forze uguali e opposte su rette parallele distinte dà risultante nulla, ma i momenti si sommano. Per una leva con perno, conviene calcolare i momenti rispetto al perno perché la sua reazione ha braccio nullo. Si usa poi il bilancio delle forze per calcolare tale reazione. Ignorare il peso della leva è lecito solo quando è trascurabile o quando il suo momento rispetto al perno è nullo, a seconda della grandezza cercata.
:::

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,0,1,-1.73205;1,-1.73205,4,0" vettori="4,0,5.73205,1,F" punti="0,0,pieno,O;1,-1.73205,pieno,H" xmin=-0.4 xmax=6.2 ymin=-2.1 ymax=1.5 titolo="Il segmento OH è perpendicolare alla retta d'azione, perciò rappresenta il braccio"}

:::esempio{#momento-coordinate titolo="Calcolare il momento da componenti con segno"}
Con il polo nell’origine, gli assi orientati a destra e verso l’alto e l’antiorario positivo, una forza applicata in $(x;y)$ ha momento $M_O=xF_y-yF_x$. Il primo prodotto è il contributo della componente verticale, il cui braccio orizzontale dipende da $x$. Il secondo viene dalla componente orizzontale. Una forza orizzontale positiva applicata sopra il polo tende a ruotare in senso orario, da cui il segno meno.

Per $\vec r=(0{,}20;0{,}10)\,\mathrm m$ e $\vec F=(-4;6)\,\mathrm N$ entrambi i contributi sono positivi. Il momento vale $(0{,}20\cdot6-0{,}10(-4))\,\mathrm{N\cdot m}=+1{,}6\,\mathrm{N\cdot m}$. Cambiare il segno di una componente della forza cambia il contributo corrispondente.
:::

:::esempio{#coppia-forze titolo="Una coppia conserva il momento cambiando polo"}
Una forza di $10\,\mathrm N$ verso il basso agisce alla coordinata $x=0$ e una forza uguale verso l’alto a $x=0{,}60\,\mathrm m$. La risultante è nulla. Se il polo è nel primo punto, contribuisce solo la forza destra e il momento è $+6\,\mathrm{N\cdot m}$. Se si prende il punto medio, ciascuna forza ha braccio di $0{,}30\,\mathrm m$ e contribuisce $+3\,\mathrm{N\cdot m}$. La somma rimane uguale.

Spostando il polo, lo stesso spostamento si sottrae a entrambe le posizioni. Il cambiamento dei momenti è proporzionale alla risultante e si annulla quando la risultante è nulla. Se invece si mantiene solo una delle due forze, cambiare il polo può cambiare il momento.
:::

::grafico{assi=0 uguale=1 linee="-0.32,0 2.02,0" vettori="0,0,0,-0.9,F;1.8,0,1.8,0.9,F" punti="0,0,pieno;0.9,0,pieno;1.8,0,pieno" etichette="-.14,.24,O;.81,.27,C;1.68,-.27,B" xmin=-.55 xmax=2.34 ymin=-1.14 ymax=1.16 titolo="I versi sono opposti. Rispetto al polo C entrambe le forze fanno ruotare in verso antiorario."}

:::esempio{#appoggi-limite titolo="Verificare che entrambi gli appoggi possano reagire"}
Una tavola uniforme di lunghezza $3\,\mathrm m$ e peso $60\,\mathrm N$ poggia a $x=0$ e a $x=2\,\mathrm m$. Un peso aggiuntivo $Q$ è applicato a $x=3\,\mathrm m$. Calcolando i momenti rispetto al primo appoggio, $2N_B=60\cdot1{,}5+3Q$ quando distanze e forze sono espresse in unità SI. La somma verticale dà $N_A=60\,\mathrm N+Q-N_B$.

| Carico in punta (N) | Reazione A (N) | Reazione B (N) |
| ---: | ---: | ---: |
| 0 | 15 | 45 |
| 20 | 5 | 75 |
| 30 | 0 | 90 |

Il carico aggiuntivo scarica l’appoggio A, anche se il peso totale aumenta. Per $Q>30\,\mathrm N$ le due equazioni darebbero $N_A<0$: servirebbe una forza verso il basso che un appoggio semplice non fornisce. Il contatto in A si apre e la tavola può ruotare attorno a B.
:::

::grafico{assi=0 uguale=1 linee="-0.16,0 3.26,0" poligoni="-0.18,-.32 0,0 .18,-.32;1.82,-.32 2,0 2.18,-.32" vettori="0,0,0,.32,N_A;2,0,2,1.92,N_B;1.5,0,1.5,-1.92,P;3,0,3,-.32,Q" punti="0,0,pieno;1.5,0,pieno;2,0,pieno;3,0,pieno" etichette="-.13,-.53,A;1.88,-.53,B" xmin=-.58 xmax=3.56 ymin=-2.26 ymax=2.24 titolo="Per Q = 10 N, A esercita 10 N e B 60 N. Il peso della tavola è applicato al suo centro."}
