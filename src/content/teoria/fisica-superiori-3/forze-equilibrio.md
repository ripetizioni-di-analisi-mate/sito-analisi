---
titolo: "Forze ed equilibrio"
sommario: "Reazioni dei vincoli, molle, attrito, piani inclinati, funi e momenti delle forze."
---

## Forza normale e tensione

:::definizione{#vincoli titolo="Forze esercitate dai vincoli"}
Un **vincolo** è un oggetto che impedisce a un corpo alcuni movimenti, come un pavimento sotto una cassa o una corda che regge un lampadario. La forza che il vincolo esercita sul corpo si chiama **reazione vincolare**. Il suo valore non è noto in partenza e si ricava dal secondo principio della dinamica, $\vec F_R=m\vec a$ (la risultante delle forze è uguale alla massa per l'accelerazione), insieme alla condizione imposta dal vincolo, per esempio «il corpo resta sul pavimento».

Una superficie piana esercita una **forza normale** $\vec N$, cioè perpendicolare alla superficie («normale» in geometria significa perpendicolare). La lettera $N$ in corsivo indica il modulo di questa forza, mentre $\mathrm N$ in tondo è il newton, l'unità di misura delle forze. Se c'è attrito, la superficie esercita anche una componente **tangenziale**, cioè parallela alla superficie. Una corda tesa esercita una forza detta **tensione** $\vec T$, diretta lungo la corda e rivolta verso l'altro estremo della corda.

Sul piano orizzontale, se il corpo non accelera in verticale e agiscono soltanto il peso $mg$ verso il basso e la normale verso l'alto, la somma delle componenti verticali è $N-mg=0$, quindi $N=mg$. Se una corda tira anche verso l'alto con componente verticale $T_y>0$ (il pedice $y$ indica la componente lungo l'asse verticale), la stessa somma diventa $N+T_y-mg=0$. Quindi $N=mg-T_y$ e la normale si riduce. Se invece una mano preme il corpo verso il basso, la sua forza si aggiunge al peso e la normale cresce. In tutti i casi la normale si ricava dalla somma delle componenti perpendicolari alla superficie, e coincide con il peso solo nel primo.

Una superficie senza **adesione**, cioè senza colla né ventose, può spingere il corpo ma non tirarlo, quindi la sua normale soddisfa sempre $N\geq0$. Se la somma delle forze dà $N<0$, l'ipotesi che il corpo resti a contatto con la superficie è falsa. Nel **distacco** la normale si annulla e il moto successivo si studia con le sole forze che restano.
:::

::grafico{assi=0 uguale=1 poligoni="-0.7,0 0.7,0 0.7,0.8 -0.7,0.8" segmenti="-2,0,2,0" vettori="0,0.4,0,-1.5,P;0,0.4,0,1.4,N;0,0.4,1.8,1.3,T" xmin=-2.2 xmax=2.2 ymin=-1.8 ymax=1.9 titolo="La componente verticale della trazione contribuisce al bilancio normale"}

:::osservazione{#confine-equilibrio titolo="Scegliere il confine prima delle equazioni"}
Il **sistema** è l'insieme dei corpi che si decide di studiare, e il suo confine è la linea chiusa che lo separa dal resto. Le forze fra corpi interni al confine si chiamano **interne**, quelle esercitate da corpi esterni si chiamano **esterne**. Nel bilancio del sistema entrano solo le forze esterne. Infatti ogni forza interna compare insieme alla sua opposta (terzo principio della dinamica), e le due si annullano nella somma.

Supponiamo che una cassa di peso $50\,\mathrm N$ contenga un carico di peso $20\,\mathrm N$, appoggiato sul fondo, e che entrambi siano fermi su un pavimento orizzontale. Per trovare la forza del pavimento si racchiudono cassa e carico nello stesso confine (figura a sinistra). Le forze che cassa e carico si scambiano al contatto sono interne. Restano due pesi verso il basso e una reazione esterna verso l'alto, perciò la normale del pavimento è $(50+20)\,\mathrm N=70\,\mathrm N$.

Per ricavare la forza con cui il carico preme sul fondo, si separa il carico dalla cassa (figura a destra). Ora il confine passa fra carico e fondo, quindi la normale del fondo è una forza esterna. Sul carico isolato la normale del fondo bilancia il suo peso, quindi vale $20\,\mathrm N$. Per sapere *dove* il pavimento esercita la risultante del contatto serve anche la posizione del carico. Questa domanda richiede il modello di **corpo rigido**, un corpo esteso che non si deforma e di cui contano i punti di applicazione delle forze (si studia nell'ultimo paragrafo).
:::

::grafico{assi=0 uguale=1 linee="-3.25,0 3.25,0" poligoni="-2.55,0 -0.55,0 -0.55,0.6 -2.55,0.6;0.55,0 2.55,0 2.55,0.6 0.55,0.6;-1.98,0.6 -1.13,0.6 -1.13,1.24 -1.98,1.24;1.12,0.6 1.97,0.6 1.97,1.24 1.12,1.24" segmenti="-2.82,-0.15, -0.27,-0.15;-0.27,-0.15,-0.27,1.47;-0.27,1.47,-2.82,1.47;-2.82,1.47,-2.82,-0.15;0.97,0.53,2.12,0.53;2.12,0.53,2.12,1.39;2.12,1.39,0.97,1.39;0.97,1.39,0.97,0.53" etichette="-2.64,1.76,cassa e carico;0.88,1.76,solo carico" xmin=-3.35 xmax=3.35 ymin=-0.4 ymax=2.17 titolo="A sinistra il contatto interno è racchiuso dal contorno. A destra separa il sistema dal fondo della cassa."}

## La forza elastica

:::teorema{#hooke titolo="Legge di Hooke"}
Una **molla ideale** è una molla di massa trascurabile la cui forza dipende solo da quanto è deformata. La sua **lunghezza naturale** $\ell_0$ (lettera «elle» corsiva) è la lunghezza a riposo, quando nessuno la tira né la comprime. Si indica con $x$ la variazione di lunghezza rispetto a $\ell_0$, presa con il segno: $x>0$ se la molla è allungata, $x<0$ se è compressa. La componente della forza della molla sull'estremo mobile è
$$
F_e=-kx,\qquad k>0.
$$
Il numero $k$ è la **costante elastica** e indica quanti newton servono per ogni metro di deformazione. Si misura in $\mathrm{N/m}$, perché il prodotto $kx$ deve essere una forza. Il segno meno indica che la forza ha verso opposto alla deformazione. Una molla allungata tira l'estremo indietro ($F_e<0$) e una molla compressa lo spinge in fuori ($F_e>0$), quindi in entrambi i casi la forza riporta l'estremo verso la lunghezza naturale. Per questo si chiama anche **forza di richiamo**.

La legge di Hooke è un modello **lineare**, cioè la forza è direttamente proporzionale alla deformazione: raddoppiando $x$ raddoppia la forza. Vale nel **campo elastico** della molla, l'intervallo di deformazioni da cui la molla, lasciata libera, torna alla lunghezza naturale. Per controllarla si misura, per diversi valori di $x$, la forza esterna che tiene ferma la molla. Questa forza bilancia $F_e$, quindi vale $+kx$. Il grafico della forza applicata in funzione dell'allungamento è perciò una retta per l'origine con **pendenza** $+k$, dove la pendenza è l'aumento della forza diviso per l'aumento di $x$. Il grafico della forza della molla in funzione di $x$ ha pendenza opposta, $-k$.

Una massa $m$ appesa ferma a una molla verticale ideale riceve dalla molla una forza verso l'alto di modulo $kx$ e dalla Terra il peso $mg$ verso il basso. La quiete richiede $kx=mg$, quindi l'allungamento è
$$
x=\frac{mg}{k}.
$$
Con $m=0{,}40\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ e $k=100\,\mathrm{N/m}$ il peso vale $0{,}40\cdot10\,\mathrm N=4\,\mathrm N$, quindi $x=\dfrac{4}{100}\,\mathrm m=0{,}040\,\mathrm m$. Se si aggiunge una massa di $0{,}20\,\mathrm{kg}$, il peso diventa $6\,\mathrm N$ e il nuovo allungamento è $\dfrac{6}{100}\,\mathrm m=0{,}060\,\mathrm m$. La differenza di due centimetri è $\dfrac{2\,\mathrm N}{100\,\mathrm{N/m}}$, quindi dipende soltanto dal peso aggiunto, finché la molla resta nel tratto lineare.

Due molle sono **in serie** se stanno una di seguito all'altra, e in questo caso ciascuna trasmette tutta la forza e gli allungamenti si sommano. Sono **in parallelo** se stanno una accanto all'altra con gli estremi uniti, quindi hanno lo stesso allungamento e le loro forze si sommano. Con due molle di $100\,\mathrm{N/m}$ e una forza di $10\,\mathrm N$, in serie l'allungamento totale è $(0{,}10+0{,}10)\,\mathrm m=0{,}20\,\mathrm m$; in parallelo ciascuna porta $5\,\mathrm N$ e l'allungamento è $0{,}05\,\mathrm m$. La **costante equivalente**, cioè la forza divisa per l'allungamento totale, vale quindi $50\,\mathrm{N/m}$ in serie e $200\,\mathrm{N/m}$ in parallelo.
:::

::grafico{f="100*x" punti="0.04,4,pieno;0.06,6,pieno" xmin=0 xmax=0.08 ymin=0 ymax=8.5 nomi="x (m),F (N)" titolo="Il grafico della forza applicata dà k uguale a 100 N/m"}

:::esempio{#calibrazione-molla titolo="Ricavare costante elastica e lunghezza naturale"}
Supponiamo di misurare la lunghezza totale $\ell$ della molla, senza conoscerne la lunghezza naturale $\ell_0$. La deformazione è allora $\ell-\ell_0$ e la forza applicata è $F=k(\ell-\ell_0)$. Per tenere la molla allungata a $14\,\mathrm{cm}$ serve una trazione di $4\,\mathrm N$, mentre a $18\,\mathrm{cm}$ serve una trazione di $12\,\mathrm N$. Sottraendo la relazione della prima misura da quella della seconda, $\ell_0$ si elimina:
$$
(12-4)\,\mathrm N=k(0{,}18\,\mathrm m-\ell_0)-k(0{,}14\,\mathrm m-\ell_0)=k\,(0{,}18-0{,}14)\,\mathrm m.
$$
Quindi la costante è la pendenza
$$
k=\frac{12-4}{0{,}18-0{,}14}\,\mathrm{N/m}=\frac{8}{0{,}04}\,\mathrm{N/m}=200\,\mathrm{N/m}.
$$
Nella prima misura la deformazione è $\dfrac{4}{200}\,\mathrm m=0{,}02\,\mathrm m=2\,\mathrm{cm}$, quindi $\ell_0=(14-2)\,\mathrm{cm}=12\,\mathrm{cm}$. Sul grafico della forza in funzione della lunghezza totale la retta incontra l'asse orizzontale, dove $F=0$, proprio a $12\,\mathrm{cm}$. Questo punto si chiama **intercetta** orizzontale.

Dividere la forza per la lunghezza totale di una sola misura darebbe una pendenza errata, perché $0{,}14\,\mathrm m$ è la lunghezza della molla e non la sua deformazione.
:::

::grafico{curve="t,2*(t-12),12,21" punti="12,0,pieno;14,4,pieno;18,12,pieno" xmin=10 xmax=22 ymin=0 ymax=19 nomi="ℓ (cm),F (N)" titolo="L’intercetta orizzontale dà la lunghezza naturale. Ogni centimetro di allungamento richiede 2 N in più."}

## Attrito statico e dinamico

:::teorema{#attrito titolo="Modello dell'attrito radente"}
L'**attrito radente** è la forza tangenziale che una superficie esercita su un corpo appoggiato che scivola, o tende a scivolare, su di essa. Questo modello si chiama anche **modello di Coulomb**.

L'**attrito statico** $f_s$ si oppone allo scorrimento che le altre forze tenderebbero a produrre. Il suo modulo assume il valore che serve per la quiete, da zero fino al massimo
$$
f_{s,\max}=\mu_sN.
$$
La lettera $\mu$ si legge «mi». Il **coefficiente di attrito statico** $\mu_s$ è un numero puro, cioè senza unità di misura, che dipende dai due materiali a contatto. Per un corpo fermo si calcola prima quale attrito sarebbe necessario all'equilibrio. Se il modulo richiesto è al più $\mu_sN$, il contatto sostiene la quiete. Al limite, detto **soglia** dello scorrimento, si raggiunge $f_s=\mu_sN$.

Con una normale di $50\,\mathrm N$ e $\mu_s=0{,}40$ il limite è $0{,}40\cdot50\,\mathrm N=20\,\mathrm N$. Una trazione orizzontale di $12\,\mathrm N$ è minore di $20\,\mathrm N$, quindi viene equilibrata da $12\,\mathrm N$ di attrito statico, rivolti in verso opposto. Attribuire sempre al corpo $20\,\mathrm N$ di attrito darebbe una risultante di $(12-20)\,\mathrm N=-8\,\mathrm N$, cioè un'accelerazione dalla parte opposta alla trazione, in contrasto con la quiete iniziale.

Quando il corpo scivola agisce l'**attrito dinamico**, di modulo $f_d=\mu_dN$ e di verso opposto allo scorrimento rispetto alla superficie. Il numero puro $\mu_d$ è il **coefficiente di attrito dinamico**. Nel grafico, con la stessa normale di $50\,\mathrm N$, l'attrito statico segue la trazione fino a $20\,\mathrm N$. In scorrimento l'attrito vale $15\,\mathrm N$, quindi $\mu_d=\dfrac{15\,\mathrm N}{50\,\mathrm N}=0{,}30$. Se il corpo rallenta fino a fermarsi, da quell'istante vale di nuovo il caso statico, perciò si ricontrolla il limite $\mu_sN$ prima di proseguire il calcolo. Un pacco appoggiato fermo su un **nastro** trasportatore che va verso destra scivola verso sinistra rispetto al nastro, perciò l'attrito sul pacco punta verso destra, nel verso in cui il pacco si muove rispetto al suolo.
:::

::grafico{curve="t,t,0,20;t,15,0,27" punti="12,12,pieno;20,20,pieno" xmin=0 xmax=27 ymin=0 ymax=22 nomi="F (N),f (N)" titolo="L'attrito statico segue la trazione fino a 20 N. In scorrimento, qui vale 15 N"}

:::esempio{#trazione-obliqua titolo="Quando la trazione cambia anche il limite statico"}
Una cassa pesa $60\,\mathrm N$ e poggia su un piano orizzontale con $\mu_s=0{,}40$. La forza $F$ tira verso destra e verso l’alto e forma con l'orizzontale un angolo $\alpha$ (lettera «alfa») con $\cos\alpha=0{,}80$ e $\sin\alpha=0{,}60$. Nel triangolo rettangolo che ha $F$ come ipotenusa, la componente orizzontale è il cateto adiacente ad $\alpha$, cioè $F\cos\alpha$, e la componente verticale è il cateto opposto, cioè $F\sin\alpha$. In quiete:
- in orizzontale l'attrito bilancia $F\cos\alpha$, quindi l'attrito richiesto è $F\cos\alpha$;
- in verticale $N+F\sin\alpha-60\,\mathrm N=0$, quindi $N=60\,\mathrm N-F\sin\alpha$ e l'attrito disponibile è $\mu_s(60\,\mathrm N-F\sin\alpha)$.

Al crescere di $F$ l'attrito richiesto aumenta e quello disponibile diminuisce. Alla soglia i due valori sono uguali:
$$
\begin{aligned}
F\cos\alpha&=\mu_s(60\,\mathrm N-F\sin\alpha),\\
0{,}80\,F&=0{,}40\cdot60\,\mathrm N-0{,}40\cdot0{,}60\,F,\\
(0{,}80+0{,}24)\,F&=24\,\mathrm N,\\
F&=\frac{24}{1{,}04}\,\mathrm N\simeq23{,}1\,\mathrm N.
\end{aligned}
$$
Nella seconda riga $\mu_s$ moltiplica i due termini, nella terza i termini con $F$ sono portati a sinistra. A quel valore la normale è $60\,\mathrm N-0{,}60\,F\simeq46{,}2\,\mathrm N$, ancora positiva.

Con una trazione orizzontale dello stesso modulo, la normale sarebbe ancora il peso e il limite di quiete sarebbe $0{,}40\cdot60\,\mathrm N=24\,\mathrm N$. Prima di sostituire $f_d=\mu_dN$ si stabilisce se la cassa è già in scorrimento o se la richiesta supera il limite della quiete.
:::

::grafico{f="0.8*x;24-0.24*x" punti="23.076923,18.461538,pieno,A" etichette="26.7,27,richiesto;28.5,13.5,disponibile" xmin=0 xmax=41 ymin=0 ymax=33 nomi="F (N),f (N)" titolo="Nel punto A la forza d’attrito richiesta per la quiete raggiunge il limite disponibile."}

:::osservazione{#attriti-piu-contatti titolo="Ripartire il carico tra contatti diversi"}
Se i due pattini di una slitta poggiano su materiali diversi, ogni pattino ha la propria normale e il proprio coefficiente. Con $N_A=30\,\mathrm N$, $N_B=50\,\mathrm N$, $\mu_{s,A}=0{,}30$ e $\mu_{s,B}=0{,}50$ i due limiti statici valgono
$$
0{,}30\cdot30\,\mathrm N=9\,\mathrm N,\qquad 0{,}50\cdot50\,\mathrm N=25\,\mathrm N.
$$
La somma, $34\,\mathrm N$, è un limite superiore all’attrito totale nella direzione in cui si tenta di trascinare la slitta.

Questo controllo riguarda soltanto la **traslazione**, il moto in cui tutte le parti della slitta si spostano allo stesso modo, senza ruotare. Le forze d’attrito sui due pattini agiscono in punti diversi, quindi producono anche momenti, cioè tendono a far ruotare la slitta, e l'equilibrio può imporre ai due attriti valori diversi dai loro massimi. Prima di considerare raggiungibile il massimo totale, si verifica quindi che possano annullarsi anche i momenti.
:::

## Piano inclinato

:::teorema{#piano-inclinato titolo="Scomposizione del peso"}
Un **piano inclinato** è una superficie piana che forma un angolo $\theta$ (lettera «theta») con l'orizzontale. Si scelgono un asse lungo il piano, positivo verso la discesa, e un asse perpendicolare al piano, positivo verso l'esterno (asse **normale uscente**). Il peso si scompone lungo questi due assi:
- la componente (o proiezione) lungo il piano vale $P_\parallel=mg\sin\theta$ ed è diretta verso la discesa;
- la componente perpendicolare spinge il corpo dentro il piano e ha modulo $P_\perp=mg\cos\theta$.

Il peso è l'ipotenusa del triangolo rettangolo formato dalle due componenti. L'angolo fra il peso e la normale entrante è uguale a $\theta$, perché il peso è perpendicolare all'orizzontale, la normale è perpendicolare al piano, e due direzioni ruotate entrambe di un angolo retto formano lo stesso angolo di prima. Perciò la componente perpendicolare, adiacente a $\theta$, contiene il coseno, e quella lungo il piano, opposta a $\theta$, contiene il seno.

Se non agiscono altre forze perpendicolari e il corpo resta sul piano, la somma delle componenti perpendicolari è $N-mg\cos\theta=0$, quindi $N=mg\cos\theta$. Senza attrito l'unica forza lungo il piano è $mg\sin\theta$, quindi $ma=mg\sin\theta$ e l'accelerazione lungo la discesa vale $g\sin\theta$, uguale per ogni massa. Se il corpo sta scendendo con attrito dinamico, l'attrito $\mu_dN=\mu_dmg\cos\theta$ punta verso la salita, quindi $ma=mg\sin\theta-\mu_dmg\cos\theta$. Dividendo per $m$ segue
$$
a=g(\sin\theta-\mu_d\cos\theta).
$$
Se invece sta salendo, l'attrito punta verso il basso lungo il piano e si somma alla componente del peso, quindi con la discesa positiva $a=g(\sin\theta+\mu_d\cos\theta)$.

Per una partenza da fermo, la quiete è possibile se la componente del peso lungo il piano non supera il massimo attrito statico, cioè se $mg\sin\theta\leq\mu_smg\cos\theta$. Per $0\leq\theta<90^\circ$ il prodotto $mg\cos\theta$ è positivo, quindi dividendo per esso la condizione equivale a $\tan\theta\leq\mu_s$, dove la **tangente** è $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$. Questa verifica si fa prima di usare la formula dinamica. Se per un corpo che già scende la formula dinamica dà un risultato negativo, l'accelerazione è rivolta verso la salita, quindi la **rapidità** (il modulo della velocità) di discesa diminuisce. Dopo l'arresto l'attrito dinamico non agisce più, perciò si torna al bilancio statico, che stabilisce se il corpo resta fermo. Il corpo non cambia verso automaticamente.
:::

:::esempio{#distacco-piano titolo="Proiezione del peso e normale sono due risultati diversi"}
Una slitta di peso $60\,\mathrm N$ scende tenendosi a contatto su una rampa di $60^\circ$. Una forza ausiliaria $F$ è perpendicolare al piano e punta verso l’esterno. Il peso ha componente normale di modulo $60\cos60^\circ\,\mathrm N=60\cdot0{,}5\,\mathrm N=30\,\mathrm N$ verso l’interno. Finché vale il vincolo, l’accelerazione perpendicolare al piano è nulla, quindi la somma delle componenti perpendicolari è $N+F-30\,\mathrm N=0$ e
$$
N=30\,\mathrm N-F.
$$
Per $F=18\,\mathrm N$ la rampa esercita ancora $(30-18)\,\mathrm N=12\,\mathrm N$. Il distacco è al limite $F=30\,\mathrm N$, dove la normale si annulla. Con $F$ maggiore la formula darebbe $N<0$, cioè una spinta della rampa verso l'interno, quindi l’ipotesi di contatto non è più soddisfatta. La proiezione del peso resta $30\,\mathrm N$ per ogni valore di $F$, mentre la normale cambia con $F$.

Durante il contatto la forza ausiliaria è perpendicolare alla rampa e non ha proiezione lungo di essa. Se il piano è ruvido, $F$ cambia comunque la forza tangenziale, perché cambia la normale e quindi l'attrito $\mu_dN$.
:::

::grafico{assi=0 uguale=1 linee="-1.0,-2.14705 1.49,2.16576" vettori="0,0,0,-2,P;0,0,-0.519615,0.3;0,0,-0.34641,0.2" segmenti="0,-2,-0.866025,-1.5;0,0,-0.866025,-1.5" punti="0,0,pieno" etichette="-.65,.39,F;-.30,.38,N" xmin=-1.76 xmax=1.72 ymin=-2.37 ymax=2.46 titolo="Lungo la normale, la somma di F e N bilancia la proiezione entrante del peso."}

## Equilibrio del punto materiale

:::teorema{#equilibrio titolo="Risultante nulla"}
Un **punto materiale** è un corpo di cui si trascurano le dimensioni, rappresentato da un solo punto. Il punto materiale è in **equilibrio traslazionale** quando la somma delle componenti delle forze è nulla lungo entrambi gli assi:
$$
\sum F_x=0,\qquad \sum F_y=0.
$$
Il simbolo $\sum$ (sigma maiuscola) indica la somma su tutte le forze. Per il secondo principio queste condizioni implicano accelerazione nulla. Per un **equilibrio statico** occorre inoltre che il punto sia inizialmente fermo. Un **nodo** in cui si uniscono più corde ideali si tratta come un punto materiale, e ogni corda tira il nodo lungo la propria direzione, verso l'esterno del nodo.

Un peso $P$ è sostenuto da due fili simmetrici di inclinazione $\theta$ sopra l'orizzontale, con la stessa tensione $T$. Ciascun filo ha componente orizzontale $T\cos\theta$ e componente verticale $T\sin\theta$. Per simmetria le componenti orizzontali hanno versi opposti e si annullano. In verticale le due componenti sostengono il peso, quindi
$$
2T\sin\theta=P,\qquad T=\frac{P}{2\sin\theta}.
$$
Con $\theta=30^\circ$ si ha $\sin30^\circ=\dfrac12$, quindi $T=\dfrac{P}{2\cdot\frac12}=P$ e ogni tensione vale quanto il peso intero. Quando i fili diventano quasi orizzontali, il seno si avvicina a zero, perciò occorrono tensioni molto grandi per ottenere lo stesso sostegno verticale.

Con angoli diversi le tensioni sono diverse e si risolvono entrambe le equazioni. I pedici $L$ e $R$ indicano il filo sinistro e quello destro. Per $\theta_L=30^\circ$ e $\theta_R=60^\circ$ le relazioni sono
$$
\begin{aligned}
&\text{orizzontale:}\quad T_L\cos30^\circ=T_R\cos60^\circ,\\
&\text{verticale:}\quad T_L\sin30^\circ+T_R\sin60^\circ=P.
\end{aligned}
$$
Poiché $\cos30^\circ=\dfrac{\sqrt3}{2}$ e $\cos60^\circ=\dfrac12$, la prima diventa $\dfrac{\sqrt3}{2}T_L=\dfrac12T_R$, quindi $T_R=\sqrt3\,T_L$. Sostituendo nella seconda, con $\sin30^\circ=\dfrac12$ e $\sin60^\circ=\dfrac{\sqrt3}{2}$, si ottiene
$$
\frac12T_L+\sqrt3\,T_L\cdot\frac{\sqrt3}{2}=\frac12T_L+\frac32T_L=2T_L=P,
$$
quindi $T_L=\dfrac P2$ e $T_R=\dfrac{\sqrt3}{2}P$. Il filo più verticale sopporta la tensione maggiore in questo esempio.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-0.8660,0.5,T_L;0,0,0.8660,1.5,T_R;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.2 ymax=1.9 titolo="Le proiezioni orizzontali coincidono in modulo anche se le tensioni sono diverse"}

:::esempio{#portata-funi titolo="Quale fune raggiunge per prima il suo limite?"}
Per il nodo con inclinazioni di $30^\circ$ a sinistra e $60^\circ$ a destra, supponiamo che le tensioni ammesse siano al massimo $32\,\mathrm N$ per la fune sinistra e $36\,\mathrm N$ per la destra. Dal bilancio si ricava $T_L=\dfrac P2$ e $T_R=\dfrac{\sqrt3}{2}P$. Ciascun limite dà quindi una condizione sul peso:
$$
\begin{aligned}
\frac P2\leq32\,\mathrm N\quad&\Longrightarrow\quad P\leq64\,\mathrm N,\\
\frac{\sqrt3}{2}P\leq36\,\mathrm N\quad&\Longrightarrow\quad P\leq\frac{72}{\sqrt3}\,\mathrm N\simeq41{,}6\,\mathrm N.
\end{aligned}
$$
Perché il nodo resti in equilibrio con entrambe le funi entro il loro limite, valgono le due condizioni insieme, quindi il peso ammesso è il minore dei due massimi, $41{,}6\,\mathrm N$. In questo esempio è la fune destra, pur avendo il limite di tensione maggiore, a determinare il peso ammesso, perché la sua tensione cresce più in fretta con il peso.
:::

## Momento ed equilibrio dei corpi estesi

:::definizione{#momento-equilibrio titolo="Braccio di una forza"}
Un corpo che può ruotare attorno a un punto fisso, il **perno**, viene messo in rotazione dalle forze applicate. La **retta d'azione** di una forza è la retta su cui giace la sua freccia. Il **braccio** $b$ è la distanza perpendicolare dal perno alla retta d'azione della forza. Nel piano il **momento** della forza rispetto al perno ha modulo
$$
M=bF=rF|\sin\theta|,
$$
dove $r$ è la distanza del punto di applicazione dal perno e $\theta$ è l'angolo tra la posizione (il segmento dal perno al punto di applicazione) e la forza. Le due espressioni coincidono, perché nel triangolo rettangolo di ipotenusa $r$ il braccio è il cateto opposto a $\theta$, cioè $b=r|\sin\theta|$. Un momento si misura in $\mathrm{N\cdot m}$ (newton per metro). Il momento ha anche un segno, che indica il verso di rotazione, e si assume spesso positivo il verso **antiorario**, opposto a quello delle lancette dell'orologio.

Due forze uguali possono avere momenti diversi rispetto allo stesso perno, perché il momento dipende dalla retta d'azione. Se la retta passa per il perno, il braccio è nullo e quindi anche il momento. Una forza di $20\,\mathrm N$ applicata a $0{,}40\,\mathrm m$ dal perno con angolo di $30^\circ$ ha braccio $0{,}40\cdot\sin30^\circ\,\mathrm m=0{,}20\,\mathrm m$ e momento di modulo $0{,}20\cdot20\,\mathrm{N\cdot m}=4\,\mathrm{N\cdot m}$. Se la forza fosse perpendicolare al raggio, il braccio sarebbe $0{,}40\,\mathrm m$ e il momento il doppio, $8\,\mathrm{N\cdot m}$.

Una trave è un corpo esteso, che oltre a traslare può ruotare. Per una trave libera nel piano, l'equilibrio statico richiede che si annullino sia la risultante sia il momento totale, cioè la somma dei momenti con il loro segno. Con momento totale nullo la trave è in **equilibrio rotazionale**. Una **coppia** è formata da due forze uguali e opposte su rette parallele distinte. La coppia dà risultante nulla, ma i due momenti hanno lo stesso segno e si sommano.

Una **leva** è un'asta rigida che ruota attorno a un perno, detto anche **fulcro**. Il perno esercita sulla leva una reazione, di solito incognita. Calcolando i momenti rispetto al perno, questa reazione ha braccio nullo e non compare nell'equazione dei momenti. Si usa poi il bilancio delle forze per calcolare tale reazione. Una **cerniera** è un perno fissato che lascia ruotare la trave collegata, e la sua reazione ha in generale una componente orizzontale e una verticale. Il peso di un corpo esteso agisce nel suo **baricentro**, che per un'asta **uniforme**, con la massa distribuita in modo uguale su tutta la lunghezza, è il punto medio. Il peso della leva si può ignorare quando è trascurabile rispetto alle altre forze, oppure, per l'equazione dei momenti rispetto al perno, quando la sua retta d'azione passa per il perno. Nel secondo caso il peso resta comunque nel bilancio delle forze e quindi nella reazione del perno.
:::

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,0,1,-1.73205;1,-1.73205,4,0" vettori="4,0,5.73205,1,F" punti="0,0,pieno,O;1,-1.73205,pieno,H" xmin=-0.4 xmax=6.2 ymin=-2.1 ymax=1.5 titolo="Il segmento OH è perpendicolare alla retta d'azione, perciò rappresenta il braccio"}

:::esempio{#momento-coordinate titolo="Calcolare il momento da componenti con segno"}
Il **polo** è il punto rispetto a cui si calcolano i momenti (per una leva di solito è il perno). Con il polo nell’origine, gli assi orientati a destra e verso l’alto e l’antiorario positivo, una forza di componenti $(F_x;F_y)$ applicata nel punto $(x;y)$ ha momento
$$
M_O=xF_y-yF_x.
$$
Il primo prodotto è il contributo della componente verticale, il cui braccio orizzontale è $x$. Per $x>0$ e $F_y>0$ la rotazione è antioraria e il contributo è positivo. Il secondo prodotto viene dalla componente orizzontale, il cui braccio è $y$. Una forza orizzontale positiva applicata sopra il polo tende a ruotare in senso orario, da cui il segno meno.

Per $\vec r=(0{,}20;0{,}10)\,\mathrm m$, posizione del punto di applicazione, e $\vec F=(-4;6)\,\mathrm N$ entrambi i contributi sono positivi:
$$
M_O=\bigl(0{,}20\cdot6-0{,}10\cdot(-4)\bigr)\,\mathrm{N\cdot m}=(1{,}2+0{,}4)\,\mathrm{N\cdot m}=+1{,}6\,\mathrm{N\cdot m}.
$$
Cambiare il segno di una componente della forza cambia il segno del contributo corrispondente.
:::

:::esempio{#coppia-forze titolo="Una coppia conserva il momento cambiando polo"}
Una forza di $10\,\mathrm N$ verso il basso agisce nel punto $O$ alla coordinata $x=0$ e una forza uguale verso l’alto agisce nel punto $B$ a $x=0{,}60\,\mathrm m$. La risultante è $(-10+10)\,\mathrm N=0$.
- Se il polo è in $O$, la forza in $O$ ha braccio nullo. Contribuisce solo la forza in $B$, verso l'alto a destra del polo, e il momento è $+10\cdot0{,}60\,\mathrm{N\cdot m}=+6\,\mathrm{N\cdot m}$.
- Se il polo è il punto medio $C$, ciascuna forza ha braccio di $0{,}30\,\mathrm m$. La forza in $O$ punta in basso a sinistra di $C$ e quella in $B$ punta in alto a destra di $C$, quindi entrambe fanno ruotare in senso antiorario e contribuiscono $+10\cdot0{,}30\,\mathrm{N\cdot m}=+3\,\mathrm{N\cdot m}$. La somma rimane $+6\,\mathrm{N\cdot m}$.

Spostando il polo di un tratto $d$ verso destra, la coordinata di ogni punto rispetto al nuovo polo diventa $x-d$. Ogni momento $xF_y$ diventa quindi $(x-d)F_y=xF_y-dF_y$, e il momento totale cambia di $-d\sum F_y$. Il cambiamento è proporzionale alla risultante e si annulla quando la risultante è nulla. Se invece si mantiene solo una delle due forze, la risultante non è nulla e cambiare il polo cambia il momento.
:::

::grafico{assi=0 uguale=1 linee="-0.32,0 2.02,0" vettori="0,0,0,-0.9,F;1.8,0,1.8,0.9,F" punti="0,0,pieno;0.9,0,pieno;1.8,0,pieno" etichette="-.14,.24,O;.81,.27,C;1.68,-.27,B" xmin=-.55 xmax=2.34 ymin=-1.14 ymax=1.16 titolo="I versi sono opposti. Rispetto al polo C entrambe le forze fanno ruotare in verso antiorario."}

:::esempio{#appoggi-limite titolo="Verificare che entrambi gli appoggi possano reagire"}
Una tavola uniforme di lunghezza $3\,\mathrm m$ e peso $60\,\mathrm N$ poggia nel punto A a $x=0$ e nel punto B a $x=2\,\mathrm m$. Un **appoggio semplice** spinge la tavola verso l'alto ma non la trattiene, come la normale di una superficie. Poiché la tavola è uniforme, il suo peso agisce nel punto medio, a $x=1{,}5\,\mathrm m$. Un peso aggiuntivo $Q$ è applicato a $x=3\,\mathrm m$.

Si calcolano i momenti rispetto al primo appoggio, perché la reazione $N_A$ ha braccio nullo. Distanze e forze sono espresse in unità del Sistema Internazionale (SI), cioè metri e newton. $N_B$ verso l'alto a $2\,\mathrm m$ dà $+2N_B$, il peso a $1{,}5\,\mathrm m$ dà $-60\cdot1{,}5$ e $Q$ a $3\,\mathrm m$ dà $-3Q$. Il momento totale è nullo, quindi
$$
2N_B=60\cdot1{,}5+3Q,\qquad N_B=\frac{90+3Q}{2}.
$$
La somma verticale dà $N_A+N_B-60\,\mathrm N-Q=0$, cioè $N_A=60\,\mathrm N+Q-N_B$.

| Carico in punta (N) | Reazione A (N) | Reazione B (N) |
| ---: | ---: | ---: |
| 0 | 15 | 45 |
| 20 | 5 | 75 |
| 30 | 0 | 90 |

Il carico aggiuntivo scarica l’appoggio A, cioè fa diminuire $N_A$, anche se il peso totale aumenta. Il motivo è che $Q$ si trova oltre B e tende a far ruotare la tavola attorno a B, sollevando l'estremo in A. Per $Q>30\,\mathrm N$ le due equazioni darebbero $N_A<0$, cioè servirebbe una forza verso il basso che un appoggio semplice non fornisce. Quindi il contatto in A si apre e la tavola può ruotare attorno a B.
:::

::grafico{assi=0 uguale=1 linee="-0.16,0 3.26,0" poligoni="-0.18,-.32 0,0 .18,-.32;1.82,-.32 2,0 2.18,-.32" vettori="0,0,0,.32,N_A;2,0,2,1.92,N_B;1.5,0,1.5,-1.92,P;3,0,3,-.32,Q" punti="0,0,pieno;1.5,0,pieno;2,0,pieno;3,0,pieno" etichette="-.13,-.53,A;1.88,-.53,B" xmin=-.58 xmax=3.56 ymin=-2.26 ymax=2.24 titolo="Per Q = 10 N, A esercita 10 N e B 60 N. Il peso della tavola è applicato al suo centro."}
