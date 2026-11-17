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

## La forza elastica

:::teorema{#hooke titolo="Legge di Hooke"}
Per una molla ideale, $x$ è la variazione con segno della lunghezza rispetto allo stato naturale. Se è positivo in allungamento, la componente della forza della molla sull'estremo mobile è $F_e=-kx$ con $k>0$. Il segno mostra che la forza tende a riportare l'estremo verso la posizione naturale. Si misura $k$ in $\mathrm{N/m}$, perché il prodotto $kx$ deve essere una forza.

La legge è un modello lineare valido nel campo elastico del dispositivo. Per controllarlo si può misurare la forza esterna che mantiene la molla ferma per diversi valori di $x$. Questa forza bilancia $F_e$, quindi la pendenza del grafico della forza applicata contro l'allungamento è $+k$. Un grafico della forza della molla contro $x$ ha pendenza opposta, $-k$.

In una molla verticale ideale, una massa appesa a riposo determina un allungamento $x=mg/k$. Con $m=0{,}40\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ e $k=100\,\mathrm{N/m}$, sono necessari $4\,\mathrm N$ di richiamo e quindi $x=0{,}040\,\mathrm m$. Se si aggiunge una massa di $0{,}20\,\mathrm{kg}$, il nuovo allungamento è $0{,}060\,\mathrm m$. La differenza di due centimetri dipende soltanto dal peso aggiunto, finché la molla resta nel tratto lineare.
:::

::grafico{f="100*x" punti="0.04,4,pieno;0.06,6,pieno" xmin=0 xmax=0.08 ymin=0 ymax=8.5 nomi="x,F" titolo="Il grafico della forza applicata dà k uguale a 100 N/m"}

## Attrito statico e dinamico

:::teorema{#attrito titolo="Modello dell'attrito radente"}
L'**attrito statico** si oppone allo scorrimento che le altre forze tenderebbero a produrre. Il suo modulo può variare da zero a $\mu_s N$. Per un corpo fermo si calcola prima quale attrito sarebbe necessario all'equilibrio. Se il modulo richiesto è al più $\mu_sN$, il contatto può sostenere la quiete. Al limite si raggiunge $f_s=\mu_sN$.

Con una normale di $50\,\mathrm N$ e $\mu_s=0{,}40$, il limite è $20\,\mathrm N$. Una trazione orizzontale di $12\,\mathrm N$ viene equilibrata da dodici newton di attrito statico, rivolti in verso opposto. Attribuire sempre al corpo venti newton di attrito prevederebbe un'accelerazione dalla parte opposta alla trazione, in contrasto con la quiete iniziale.

Quando il corpo scivola, il modello di attrito dinamico dà modulo $f_d=\mu_d N$ e un verso opposto allo scorrimento relativo. Se il corpo rallenta fino a fermarsi, si deve ricontrollare il limite statico prima di proseguire il calcolo. L'attrito può puntare nel verso della velocità rispetto al suolo su un nastro in moto, se lo scorrimento rispetto al nastro avviene in verso contrario.
:::

::grafico{segmenti="0,0,20,20;20,15,27,15" punti="12,12,pieno;20,20,pieno" xmin=0 xmax=27 ymin=0 ymax=22 nomi="F,f" titolo="L'attrito statico segue la trazione fino a 20 N. In scorrimento, qui vale 15 N"}

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

## Equilibrio del punto materiale

:::teorema{#equilibrio titolo="Risultante nulla"}
Nel modello di punto materiale, equilibrio traslazionale significa $\sum F_x=0$ e $\sum F_y=0$. Queste condizioni implicano accelerazione nulla. Per un equilibrio statico occorre inoltre che il punto sia inizialmente fermo. Quando il punto rappresenta un nodo ideale di corde, ogni corda esercita una forza lungo la propria direzione uscente.

Un peso $P$ è sostenuto da due fili simmetrici di inclinazione $\theta$ sopra l'orizzontale. Per simmetria le componenti orizzontali si annullano. Da $2T\sin\theta=P$ si ottiene $T=P/(2\sin\theta)$. Con $\theta=30^\circ$, ogni tensione vale $P$. Quando i fili diventano quasi orizzontali, il seno si riduce e occorrono tensioni molto grandi per ottenere lo stesso sostegno verticale.

Con angoli diversi si devono risolvere entrambe le equazioni. Per $\theta_L=30^\circ$ e $\theta_R=60^\circ$, le relazioni sono $T_L\cos30^\circ=T_R\cos60^\circ$ e $T_L\sin30^\circ+T_R\sin60^\circ=P$. Dalla prima segue $T_R=\sqrt3\,T_L$. Sostituendo nella seconda si ottiene $T_L=P/2$ e $T_R=\sqrt3 P/2$. Il filo più verticale sopporta la tensione maggiore in questo esempio.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-0.8660,0.5,T_L;0,0,0.8660,1.5,T_R;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.2 ymax=1.9 titolo="Le proiezioni orizzontali coincidono in modulo anche se le tensioni sono diverse"}

## Momento ed equilibrio dei corpi estesi

:::definizione{#momento-equilibrio titolo="Braccio di una forza"}
Il **braccio** $b$ è la distanza perpendicolare dal perno alla retta d'azione della forza. Nel piano, il modulo del momento è $M=bF=rF|\sin\theta|$, dove $r$ è la distanza del punto di applicazione dal perno e $\theta$ è l'angolo tra posizione e forza. Un momento si misura in $\mathrm{N\cdot m}$. Si assume spesso positivo il verso di rotazione antiorario.

Due forze uguali possono avere momenti diversi rispetto allo stesso perno, perché conta la retta d'azione. Se la retta passa per il perno, il braccio è nullo. Una forza di $20\,\mathrm N$ applicata a $0{,}40\,\mathrm m$ dal perno con angolo di $30^\circ$ ha braccio $0{,}20\,\mathrm m$ e momento di modulo $4\,\mathrm{N\cdot m}$. Sarebbe il doppio se la forza fosse perpendicolare al raggio.

Per una trave libera in piano, l'equilibrio statico richiede che si annullino sia la risultante sia il momento totale. Una coppia di forze uguali e opposte su rette parallele distinte dà risultante nulla, ma i momenti si sommano. Per una leva con perno, conviene calcolare i momenti rispetto al perno perché la sua reazione ha braccio nullo. Si usa poi il bilancio delle forze per calcolare tale reazione. Ignorare il peso della leva è lecito solo quando è trascurabile o quando il suo momento rispetto al perno è nullo, a seconda della grandezza cercata.
:::

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,0,1,-1.73205;1,-1.73205,4,0" vettori="4,0,5.73205,1,F" punti="0,0,pieno,O;1,-1.73205,pieno,H" xmin=-0.4 xmax=6.2 ymin=-2.1 ymax=1.5 titolo="Il segmento OH è perpendicolare alla retta d'azione, perciò rappresenta il braccio"}
