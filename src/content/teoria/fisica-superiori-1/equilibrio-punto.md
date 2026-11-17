---
titolo: "Equilibrio del punto materiale"
sommario: "Diagrammi di corpo libero, bilancio delle componenti, piani inclinati, attrito e vincoli."
---

## Condizioni di equilibrio

:::teorema{#condizioni titolo="Risultante nulla"}
Un corpo che si può modellare come **punto materiale** è in equilibrio statico se resta fermo in un riferimento inerziale. Questo modello è adatto quando la forma e le possibili rotazioni del corpo sono irrilevanti per la domanda. La condizione di equilibrio è che la risultante $\vec R$ delle forze esterne sia il vettore nullo. Nel piano la si verifica mediante due equazioni indipendenti:
$$
\begin{cases}
R_x=\sum F_x=0,\\
R_y=\sum F_y=0.
\end{cases}
$$
La somma è fra componenti con segno, lungo ciascun asse. Se il punto è già fermo e la risultante resta nulla, mantiene la quiete. Se è già in moto, una risultante nulla ne mantiene la velocità.
:::

:::esempio{titolo="Equilibrio di un anello lungo una guida"}
Due funi tirano un anello lungo la stessa direzione. Prima, una forza verso destra vale $11\,\mathrm N$ e quella verso sinistra vale $6\,\mathrm N$. Scegliamo il verso positivo a destra, quindi $R_x=11-6=5\,\mathrm N$. Una terza fune deve esercitare $5\,\mathrm N$ verso sinistra affinché la somma diventi zero. L'equazione verticale è già soddisfatta se tutte le forze agiscono lungo la guida orizzontale.
:::

## Disegnare e proiettare le forze

:::osservazione{#componenti titolo="Un corpo alla volta"}
Il **diagramma di corpo libero** riporta le forze esterne che agiscono sul solo corpo scelto. Per un gancio appeso si disegnano il peso sul gancio e la tensione della fune sul gancio. La forza che il gancio esercita sulla fune appartiene al diagramma della fune.

Scelti gli assi, si scompone ogni forza. La proiezione lungo un asse ha segno positivo se il suo verso concorda con quel verso positivo. La forza che equilibra un gruppo di forze è l'opposto della loro risultante. Per $\vec R=(6;8)\,\mathrm N$ si ha $\vec F=(-6;-8)\,\mathrm N$, dunque il modulo è $\sqrt{6^2+8^2}\,\mathrm N=10\,\mathrm N$. Sostituire entrambe le componenti nella somma verifica il risultato.
:::

::grafico{assi=0 uguale=1 vettori="0,0,6,0,6 N;0,0,0,8,8 N;0,0,-6,-8,F" punti="0,0,pieno,O" xmin=-8 xmax=8 ymin=-10 ymax=10 titolo="Equilibrante F dell'anello O. Le componenti della freccia obliqua sono opposte alle due forze assegnate"}

## Corde verticali

::::teorema{#corde titolo="Ripartire un carico"}
Una corda ideale tesa tira il corpo lungo la propria direzione verso il punto di sospensione. Se un corpo fermo di peso $P$ riceve sostegno da una sola corda verticale, la sua tensione è $T=P$. Con due corde verticali dall'alto si ha $T_1+T_2=P$.

:::dimostrazione
Scelto positivo il verso verticale verso l'alto, le tensioni hanno componente positiva e la componente del peso è $-P$. La somma verticale si annulla esattamente quando il totale delle tensioni uguaglia il peso.
:::
::::

:::esempio{titolo="Dalla somma alla singola tensione"}
Due corde sostengono un anello di peso $84\,\mathrm N$ e la prima è misurata a $30\,\mathrm N$. La seconda deve fornire $84-30=54\,\mathrm N$. Se si conoscesse soltanto il peso, la relazione darebbe più coppie di valori. Il valore di $42\,\mathrm N$ per ciascuna corda si ottiene aggiungendo l'ipotesi che le due tensioni siano uguali.
:::

## Molle in equilibrio

:::teorema{#molla titolo="Deformazione richiesta dal carico"}
Per una molla verticale a cui è appeso un corpo in quiete, nel tratto elastico lineare, la forza di richiamo della molla bilancia il peso. Se l'allungamento è $x\ge0$ e la molla ha costante $k$, si ottiene $kx=P$. Il rapporto $P/k$ restituisce una lunghezza, perché si dividono newton per newton al metro.

Con $P=16\,\mathrm N$ e $k=200\,\mathrm{N/m}$ risulta $x=0{,}08\,\mathrm m$. Se il modello lineare è stato verificato soltanto fino a $0{,}06\,\mathrm m$, il risultato è fuori dall'intervallo. Serve una descrizione della molla oltre quel limite per conoscere la deformazione reale. Lo stesso bilancio si applica orizzontalmente quando la forza elastica equilibra le altre forze lungo il suo asse.
:::

::grafico{f="2*x;16" nomi="x (cm),F (N)" punti="8,16,pieno,A" xmin=0 xmax=10 ymin=0 ymax=23 titolo="Per k uguale a 200 N/m, la retta elastica incontra il carico di 16 N in A, a 8 cm"}

## Piani inclinati

::::teorema{#piano titolo="Assi parallelo e perpendicolare al piano"}
Sia $\alpha$ l'angolo che il piano forma con l'orizzontale, con $0\leq\alpha<90^\circ$. Le proiezioni del peso hanno moduli $P_\parallel=P\sin\alpha$ verso la discesa e $P_\perp=P\cos\alpha$ verso il piano. Se le lunghezze del triangolo della rampa sono altezza $h$, base $b$ e lato inclinato $\ell$, si può usare $\sin\alpha=h/\ell$ e $\cos\alpha=b/\ell$.

:::dimostrazione
Ruotando di un angolo retto la rampa e l'orizzontale si ottengono, rispettivamente, la direzione perpendicolare al piano e la verticale. Perciò l'angolo fra il peso e la direzione verso il piano è ancora $\alpha$. Nel triangolo delle componenti, il cateto adiacente a $\alpha$ è $P_\perp$ e quello opposto è $P_\parallel$.
:::
::::

:::esempio{titolo="Normale e fune su una rampa liscia"}
Per $P=60\,\mathrm N$ e $(h,b,\ell)=(3,4,5)\,\mathrm m$, le componenti sono $36\,\mathrm N$ lungo la discesa e $48\,\mathrm N$ verso il piano. Se una fune parallela alla rampa tiene fermo il corpo, la tensione vale $36\,\mathrm N$. La normale, unica forza uscente perpendicolare, vale $48\,\mathrm N$. La scomposizione permette di assegnare una forza di vincolo diversa a ciascun asse.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3" riferimento="2,1.5,36.87,1.5,x,y" vettori="2,1.5,2,-0.5,P" etichette="2.3,-0.3,4 m;4.4,1.5,3 m" xmin=-1 xmax=5.8 ymin=-1 ymax=4.4 titolo="Assi ruotati con la rampa. Il lato inclinato è 5 m e la freccia del peso resta verticale"}

## Attrito e possibilità di quiete

:::teorema{#attrito-equilibrio titolo="Prima la forza richiesta, poi il limite"}
Per un corpo che si suppone fermo si ricava prima dall'equilibrio il vettore d'attrito necessario. Poi si confronta il suo modulo $f_{\mathrm{rich}}$ con $\mu_s N$. La quiete è ammissibile se $f_{\mathrm{rich}}\leq\mu_sN$ e il contatto è mantenuto. Senza altre forze lungo la rampa l'attrito richiesto deve compensare la componente del peso verso la discesa, quindi punta verso la salita.

Se una fune tira lungo la salita con tensione $T$, il segno cambia quando $T$ supera $P_\parallel$. Con asse positivo in salita, $f_x=P_\parallel-T$. Con $P_\parallel=12\,\mathrm N$ e $T=15\,\mathrm N$ il risultato è $-3\,\mathrm N$, quindi l'attrito necessario è in discesa. Se il limite è $4\,\mathrm N$, quel verso e quel modulo sono ammissibili.
:::

## Corde inclinate simmetriche

::::teorema{#corde-inclinate titolo="Somma delle componenti verticali"}
Due corde inclinate dello stesso angolo $\alpha$ sull'orizzontale tirano un anello in versi orizzontali opposti. Con $0<\alpha\leq90^\circ$, se le tensioni hanno modulo comune $T$, la condizione verticale di equilibrio di un peso $P$ è
$$
2T\sin\alpha=P.
$$

:::dimostrazione
Le componenti orizzontali delle tensioni sono uguali in modulo e opposte in verso. Ciascuna tensione ha componente verticale verso l'alto di modulo $T\sin\alpha$. La somma verticale deve annullare la componente $-P$ del peso.
:::
::::

:::esempio{titolo="Sostegno con corde poco inclinate"}
Per $P=48\,\mathrm N$ e $\sin\alpha=3/5$ serve $T=40\,\mathrm N$ in ciascuna corda. Se si riduce l'angolo, a peso invariato, la frazione verticale diminuisce. La tensione deve crescere per produrre la medesima componente verticale. Per corde perfettamente orizzontali il sostegno verticale è impossibile con il solo schema descritto.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-4,3,T;0,0,4,3,T;0,0,0,-6,P" punti="0,0,pieno,O" xmin=-5 xmax=5 ymin=-7 ymax=4 titolo="Lati orizzontali opposti e lati verticali concordi. In scala, 1 unità grafica rappresenta 8 N"}

## Contatto con un piano

:::osservazione{#contatto titolo="Normale e forze verticali"}
Per un appoggio orizzontale senza adesione, la normale è diretta verso l'alto. Con una corda verticale dal soffitto, la condizione è $N=P-T$, ammessa con $0\leq T\leq P$. Con $T=P$ si trova il limite $N=0$. Per $T>P$ servirebbe una forza verso il basso dal piano. Quel vincolo non è disponibile per semplice appoggio.

La normale è perpendicolare alla superficie locale. Se la superficie è inclinata, la normale è inclinata rispetto alla verticale. L'asse parallelo al piano permette di escludere questa forza dal bilancio parallelo.
:::

## Corpi premuti contro una parete

:::teorema{#parete titolo="Normale orizzontale e attrito verticale"}
Un corpo fermo premuto da una forza orizzontale $S$ contro una parete verticale riceve una normale di modulo $N=S$ se non agiscono altre forze orizzontali. L'attrito richiesto è verticale verso l'alto e vale $P$ se il peso è l'unica altra forza verticale. La parete sostiene il corpo purché $P\leq\mu_s S$.

Per $P=15\,\mathrm N$ e $\mu_s=0{,}25$, la spinta minima è $60\,\mathrm N$. Aumentando la spinta a $72\,\mathrm N$, la soglia cresce a $18\,\mathrm N$, mentre l'attrito effettivo resta $15\,\mathrm N$. Le due equazioni spiegano perché una spinta orizzontale possa rendere ammissibile una forza d'attrito verticale.
:::
