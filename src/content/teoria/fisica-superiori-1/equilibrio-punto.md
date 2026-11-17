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

:::osservazione{titolo="Un bilancio nullo può mantenere velocità diverse"}
Su una guida orizzontale priva di attrito, una forza di $6\,\mathrm N$ verso destra e una di $6\,\mathrm N$ verso sinistra agiscono sullo stesso carrello. Il peso e la reazione della guida si compensano in verticale. Se il carrello parte fermo, rimane nella posizione iniziale. Se attraversa quel punto con velocità di $2\,\mathrm{m/s}$ verso destra, percorre altri $6\,\mathrm m$ nei successivi $3\,\mathrm s$, finché il bilancio delle forze rimane lo stesso. La condizione $\vec R=\vec 0$ stabilisce che la velocità si conserva. Occorre quindi conoscere la velocità iniziale per concludere che il carrello resta fermo.

::grafico{f="2*x;0" nomi="t (s),x (m)" punti="3,6,pieno,A;3,0,pieno,B" legenda="\text{carrello in movimento};\text{carrello fermo}" xmin=0 xmax=4 ymin=-1 ymax=9 titolo="Nel medesimo bilancio di forze, la pendenza dipende dalla velocità iniziale."}
:::

## Disegnare e proiettare le forze

:::osservazione{#componenti titolo="Un corpo alla volta"}
Il **diagramma di corpo libero** riporta le forze esterne che agiscono sul solo corpo scelto. Per un gancio appeso si disegnano il peso sul gancio e la tensione della fune sul gancio. La forza che il gancio esercita sulla fune appartiene al diagramma della fune.

Scelti gli assi, si scompone ogni forza. La proiezione lungo un asse ha segno positivo se il suo verso concorda con quel verso positivo. La forza che equilibra un gruppo di forze è l'opposto della loro risultante. Per $\vec R=(6;8)\,\mathrm N$ si ha $\vec F=(-6;-8)\,\mathrm N$, dunque il modulo è $\sqrt{6^2+8^2}\,\mathrm N=10\,\mathrm N$. Sostituire entrambe le componenti nella somma verifica il risultato.
:::

::grafico{assi=0 uguale=1 vettori="0,0,6,0,6 N;0,0,0,8,8 N;0,0,-6,-8" punti="0,0,pieno,O" etichette="-2.1,-5,F" xmin=-8 xmax=8 ymin=-10 ymax=10 titolo="Equilibrante F dell'anello O. Le componenti della freccia obliqua sono opposte alle due forze assegnate"}

:::esempio{titolo="Un tirante di direzione assegnata"}
La risultante delle forze già presenti su un anello è $\vec R=(16;-18)\,\mathrm N$. Si può aggiungere una fune orientata a sinistra verso l'alto lungo una direzione con rapporto salita su spostamento orizzontale di tre quarti. I moduli delle componenti di una tensione $T$ sono quindi $\dfrac45 T$ in orizzontale e $\dfrac35 T$ in verticale. Il bilancio orizzontale fissa $T=20\,\mathrm N$. Con quella tensione la componente verticale della fune è $12\,\mathrm N$, mentre l'equilibrio richiede $18\,\mathrm N$. Serve anche un tirante verticale di $6\,\mathrm N$ verso l'alto. La somma $\left(16-16;-18+12+6\right)\,\mathrm N=(0;0)\,\mathrm N$ verifica la scelta.

Partendo dall'origine, si può tracciare la risultante assegnata e poi disporre le tensioni testa-coda. Il primo tratto obliquo di compensazione riporta il percorso sull'asse verticale, a quota $-6\,\mathrm N$. Il tirante verticale chiude il percorso. Se si leva quel tirante, il poligono resta aperto di $6\,\mathrm N$ e la risultante punta verso il basso.

::grafico{uguale=1 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,16,-18,R;16,-18,0,-6,T;0,-6,0,0,Tᵥ" punti="16,-18,pieno;0,-6,pieno" xmin=-6 xmax=20 ymin=-21 ymax=7 titolo="La chiusura del poligono delle forze richiede il tratto verticale di 6 N."}
:::

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

:::esempio{titolo="Carico sostenibile sotto due limiti"}
Un punto di peso $90\,\mathrm N$ è sostenuto da due tiranti verticali. Il primo può trasmettere fino a $35\,\mathrm N$ e il secondo fino a $60\,\mathrm N$. Le tensioni devono sommare il peso. Siccome il secondo tirante porta al massimo $60\,\mathrm N$, il primo ne deve portare almeno $30\,\mathrm N$. Per questo insieme di vincoli,

$$
30\,\mathrm N\leq T_1\leq35\,\mathrm N,\qquad
55\,\mathrm N\leq T_2=90\,\mathrm N-T_1\leq60\,\mathrm N.
$$

I limiti indicano le ripartizioni ammissibili, se la regolazione dei tiranti permette di sceglierle. Per esempio $T_1=32\,\mathrm N$ e $T_2=58\,\mathrm N$ rispettano entrambe le soglie. La ripartizione uguale supererebbe il limite del primo tirante.

::grafico{f="90-x" nomi="T₁ (N),T₂ (N)" punti="30,60,pieno,A;35,55,pieno,B" segmenti="27,60,30,60;35,52,35,55" xmin=27 xmax=39 ymin=50 ymax=64 titolo="L'equilibrio fissa la retta. I limiti meccanici dei tiranti restringono le scelte al segmento da A a B."}
:::

## Molle in equilibrio

:::teorema{#molla titolo="Deformazione richiesta dal carico"}
Per una molla verticale a cui è appeso un corpo in quiete, nel tratto elastico lineare, la forza di richiamo della molla bilancia il peso. Se l'allungamento è $x\ge0$ e la molla ha costante $k$, si ottiene $kx=P$. Il rapporto $\dfrac{P}{k}$ restituisce una lunghezza, perché si dividono newton per newton al metro.

Con $P=16\,\mathrm N$ e $k=200\,\mathrm{N/m}$ risulta $x=0{,}08\,\mathrm m$. Se il modello lineare è stato verificato soltanto fino a $0{,}06\,\mathrm m$, il risultato è fuori dall'intervallo. Serve una descrizione della molla oltre quel limite per conoscere la deformazione reale. Lo stesso bilancio si applica orizzontalmente quando la forza elastica equilibra le altre forze lungo il suo asse.
:::

::grafico{f="16" linee="0,0 6,12" segmenti="6,12,8,16" nomi="x (cm),F (N)" punti="6,12,pieno,B;8,16,vuoto,A" xmin=0 xmax=10 ymin=0 ymax=23 titolo="B delimita il tratto verificato. Il prolungamento tratteggiato incontra il carico di 16 N in A, a 8 cm."}

:::esempio{titolo="Equilibrio di una molla con arresto"}
Una molla verticale di rigidezza $k=250\,\mathrm{N/m}$ sostiene un peso che scende di una distanza $x$ a partire dalla lunghezza naturale. Un arresto rigido orizzontale è posto a $x_s=0{,}04\,\mathrm m$ e può spingere verso l'alto. Senza contatto, un peso di $18\,\mathrm N$ richiederebbe $x=\dfrac{18}{250}\,\mathrm m=0{,}072\,\mathrm m$, oltre la posizione dell'arresto. Quando il peso raggiunge l'arresto, la molla sostiene $kx_s=10\,\mathrm N$ e la normale fornisce gli $8\,\mathrm N$ rimanenti.

Nel modello il contatto comincia a $P=kx_s$. Per un peso minore si ha $x=\dfrac Pk$ e $N=0$. Per un peso maggiore la posizione resta $x_s$ e aumenta la sola reazione dell'arresto. Il bilancio cambia quando cambia il vincolo attivo. Se la massa è diminuita lentamente partendo da una situazione di contatto, a $P=10\,\mathrm N$ la reazione torna nulla e, sotto soglia, il peso si solleva dall'arresto.

::grafico{linee="0,0 10,4 24,4" nomi="P (N),x (cm)" punti="10,4,pieno,C;18,4,pieno" xmin=0 xmax=24 ymin=0 ymax=6 titolo="Nel punto C la normale è ancora nulla. Oltre C la reazione cresce mentre l'allungamento resta a 4 cm."}
:::

## Piani inclinati

::::teorema{#piano titolo="Assi parallelo e perpendicolare al piano"}
Sia $\alpha$ l'angolo che il piano forma con l'orizzontale, con $0\leq\alpha<90^\circ$. Le proiezioni del peso hanno moduli $P_\parallel=P\sin\alpha$ verso la discesa e $P_\perp=P\cos\alpha$ verso il piano. Se le lunghezze del triangolo della rampa sono altezza $h$, base $b$ e lato inclinato $\ell$, si può usare $\sin\alpha=\dfrac{h}{\ell}$ e $\cos\alpha=\dfrac{b}{\ell}$.

:::dimostrazione
Ruotando di un angolo retto la rampa e l'orizzontale si ottengono, rispettivamente, la direzione perpendicolare al piano e la verticale. Perciò l'angolo fra il peso e la direzione verso il piano è ancora $\alpha$. Nel triangolo delle componenti, il cateto adiacente a $\alpha$ è $P_\perp$ e quello opposto è $P_\parallel$.
:::
::::

:::esempio{titolo="Normale e fune su una rampa liscia"}
Per $P=60\,\mathrm N$ e $(h,b,\ell)=(3,4,5)\,\mathrm m$, le componenti sono $36\,\mathrm N$ lungo la discesa e $48\,\mathrm N$ verso il piano. Se una fune parallela alla rampa tiene fermo il corpo, la tensione vale $36\,\mathrm N$. La normale, unica forza uscente perpendicolare, vale $48\,\mathrm N$. La scomposizione permette di assegnare una forza di vincolo diversa a ciascun asse.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3" riferimento="2,1.5,36.87,1.5,x,y" vettori="2,1.5,2,-0.5,P" etichette="2.3,-0.3,4 m;4.4,1.5,3 m" xmin=-1 xmax=5.8 ymin=-1 ymax=4.4 titolo="Assi ruotati con la rampa. Il lato inclinato è 5 m e la freccia del peso resta verticale"}

:::esempio{titolo="Una spinta orizzontale su una rampa liscia"}
Una rampa ha altezza $3\,\mathrm m$, base $4\,\mathrm m$ e lato inclinato $5\,\mathrm m$. Un blocco di peso $50\,\mathrm N$ è premuto orizzontalmente verso il lato alto con una forza di $20\,\mathrm N$. Una fune parallela alla rampa lo tiene in equilibrio. La spinta orizzontale ha componente in salita $20\cdot\dfrac45\,\mathrm N=16\,\mathrm N$ e componente verso il piano $20\cdot\dfrac35\,\mathrm N=12\,\mathrm N$. Il peso ha componenti di $30\,\mathrm N$ in discesa e $40\,\mathrm N$ verso il piano.

Si ottiene $T=(30-16)\,\mathrm N=14\,\mathrm N$ per la fune e $N=(40+12)\,\mathrm N=52\,\mathrm N$ per la normale. Una forza orizzontale può quindi contribuire a entrambi i bilanci se gli assi sono orientati lungo la rampa e perpendicolarmente a essa.
:::

## Attrito e possibilità di quiete

:::teorema{#attrito-equilibrio titolo="Prima la forza richiesta, poi il limite"}
Per un corpo che si suppone fermo si ricava prima dall'equilibrio il vettore d'attrito necessario. Poi si confronta il suo modulo $f_{\mathrm{rich}}$ con $\mu_s N$. La quiete è ammissibile se $f_{\mathrm{rich}}\leq\mu_sN$ e il contatto è mantenuto. Senza altre forze lungo la rampa l'attrito richiesto deve compensare la componente del peso verso la discesa, quindi punta verso la salita.

Se una fune tira lungo la salita con tensione $T$, il segno cambia quando $T$ supera $P_\parallel$. Con asse positivo in salita, $f_x=P_\parallel-T$. Con $P_\parallel=12\,\mathrm N$ e $T=15\,\mathrm N$ il risultato è $-3\,\mathrm N$, quindi l'attrito necessario è in discesa. Se il limite è $4\,\mathrm N$, quel verso e quel modulo sono ammissibili.
:::

:::osservazione{titolo="Pendenza massima senza fune"}
Su una rampa priva di altre azioni, il peso richiede $P\sin\alpha$ di attrito verso l'alto e preme il corpo sul piano con $N=P\cos\alpha$. Per $0\leq\alpha<90^\circ$, la condizione di quiete si semplifica in

$$
P\sin\alpha\leq\mu_s P\cos\alpha
\quad\Longleftrightarrow\quad
\tan\alpha\leq\mu_s.
$$

Nel triangolo della rampa $\tan\alpha=\dfrac hb$. Con $\mu_s=0{,}5$ e base $4\,\mathrm m$, l'altezza massima è quindi $2\,\mathrm m$. Due blocchi di peso diverso, nello stesso modello con lo stesso coefficiente, hanno lo stesso limite perché il peso moltiplica sia la forza richiesta sia la capacità di attrito. Una trazione o spinta aggiuntiva cambia in generale quel confronto.

Se si alza lentamente un'estremità della rampa e il blocco comincia a scorrere a $h=1{,}8\,\mathrm m$ con base orizzontale misurata in quell'istante di $4\,\mathrm m$, la stima di $\mu_s$ è $0{,}45$. Quella misura sfrutta l'uguaglianza al limite. Una prova isolata in cui il blocco è fermo, per esempio a $h=1{,}6\,\mathrm m$ con la stessa base, darebbe soltanto $\mu_s\geq0{,}40$.

::grafico{f="x/4;0.5" nomi="h (m),f/N" punti="2,0.5,pieno,C" legenda="\text{rapporto richiesto};\mu_s" xmin=0 xmax=3 ymin=0 ymax=1 titolo="Con base fissa di 4 m e coefficiente 0,5, le due curve si incontrano a un'altezza di 2 m."}
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
Per $P=48\,\mathrm N$ e $\sin\alpha=\dfrac{3}{5}$ serve $T=40\,\mathrm N$ in ciascuna corda. Se si riduce l'angolo, a peso invariato, la frazione verticale diminuisce. La tensione deve crescere per produrre la medesima componente verticale. Per corde perfettamente orizzontali il sostegno verticale è impossibile con il solo schema descritto.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-4,3,T;0,0,4,3;0,0,0,-6,P" etichette="2.4,1.25,T" punti="0,0,pieno,O" xmin=-5 xmax=5 ymin=-7 ymax=4 titolo="Lati orizzontali opposti e lati verticali concordi. In scala, 1 unità grafica rappresenta 8 N"}

:::esempio{titolo="Corde inclinate ad angoli diversi"}
Un anello di peso $50\,\mathrm N$ è sostenuto da due corde. A sinistra, i fattori orizzontale e verticale sono rispettivamente $\dfrac45$ e $\dfrac35$. A destra sono $\dfrac35$ e $\dfrac45$. Con $T_\mathrm s$ e $T_\mathrm d$ per i moduli delle tensioni i due bilanci diventano

$$
\begin{cases}
4T_\mathrm s=3T_\mathrm d,\\[2pt]
\dfrac35T_\mathrm s+\dfrac45T_\mathrm d=50\,\mathrm N.
\end{cases}
$$

La prima equazione impone una tensione destra maggiore. Sostituendo $T_\mathrm d=\dfrac43 T_\mathrm s$ nella seconda si ottiene $T_\mathrm s=30\,\mathrm N$ e quindi $T_\mathrm d=40\,\mathrm N$. Le componenti orizzontali hanno entrambe modulo $24\,\mathrm N$. Quelle verticali valgono $18\,\mathrm N$ e $32\,\mathrm N$ e sostengono l'intero peso.

::grafico{assi=0 uguale=1 vettori="0,0,-24,18,Tₛ;0,0,24,32;0,0,0,-50,P" etichette="14.5,15.5,Tᵈ" punti="0,0,pieno,O" xmin=-28 xmax=28 ymin=-55 ymax=36 titolo="Le corde hanno tensioni diverse. I contributi orizzontali si compensano e quelli verticali sostengono 50 N."}
:::

## Contatto con un piano

:::osservazione{#contatto titolo="Normale e forze verticali"}
Per un appoggio orizzontale senza adesione, la normale è diretta verso l'alto. Con una corda verticale dal soffitto, la condizione è $N=P-T$, ammessa con $0\leq T\leq P$. Con $T=P$ si trova il limite $N=0$. Per $T>P$ servirebbe una forza verso il basso dal piano. Quel vincolo non è disponibile per semplice appoggio.

La normale è perpendicolare alla superficie locale. Se la superficie è inclinata, la normale è inclinata rispetto alla verticale. L'asse parallelo al piano permette di escludere questa forza dal bilancio parallelo.
:::

:::esempio{titolo="Una normale diretta verso il basso"}
Un corpo di peso $26\,\mathrm N$ viene premuto contro un soffitto orizzontale con una spinta verso l'alto di modulo $S$. La normale del soffitto è rivolta verso il basso. Scelto verso positivo verso l'alto, il bilancio è $S-P-N=0$. Per $S=40\,\mathrm N$ il soffitto esercita quindi $14\,\mathrm N$ verso il basso. Un appoggio da sotto avrebbe verso opposto.

Se la spinta scende a $20\,\mathrm N$, per mantenere la quiete servirebbe che il soffitto tirasse il corpo verso l'alto con $6\,\mathrm N$. Il semplice contatto non aderente non può fornire quella forza. In corrispondenza di $S=26\,\mathrm N$ il contatto si trova alla soglia e la reazione si annulla.

::grafico{f="x-26" nomi="S (N),N (N)" punti="26,0,pieno,C;40,14,pieno,A" xmin=26 xmax=44 ymin=0 ymax=20 titolo="Per la spinta contro il soffitto, il ramo di equilibrio ha normale non negativa e inizia in C."}
:::

## Corpi premuti contro una parete

:::teorema{#parete titolo="Normale orizzontale e attrito verticale"}
Un corpo fermo premuto da una forza orizzontale $S$ contro una parete verticale riceve una normale di modulo $N=S$ se non agiscono altre forze orizzontali. L'attrito richiesto è verticale verso l'alto e vale $P$ se il peso è l'unica altra forza verticale. La parete sostiene il corpo purché $P\leq\mu_s S$.

Per $P=15\,\mathrm N$ e $\mu_s=0{,}25$, la spinta minima è $60\,\mathrm N$. Aumentando la spinta a $72\,\mathrm N$, la soglia cresce a $18\,\mathrm N$, mentre l'attrito effettivo resta $15\,\mathrm N$. Le due equazioni spiegano perché una spinta orizzontale possa rendere ammissibile una forza d'attrito verticale.
:::

:::esempio{titolo="Attrito verso il basso sulla parete"}
Un corpo pesa $18\,\mathrm N$ e riceve una spinta con $S_x=32\,\mathrm N$ verso la parete e $S_y=24\,\mathrm N$ verso l'alto. La parete reagisce con normale di $32\,\mathrm N$. La spinta supera il peso di $6\,\mathrm N$ in verticale. Per mantenere la quiete serve quindi attrito statico di modulo $6\,\mathrm N$ verso il basso. Con $\mu_s=0{,}25$, il limite è $8\,\mathrm N$ e la configurazione è possibile. Per individuare il verso dell'attrito si confrontano tutte le altre componenti tangenziali al contatto. Guardare soltanto il peso porterebbe a scegliere il verso sbagliato.
:::
