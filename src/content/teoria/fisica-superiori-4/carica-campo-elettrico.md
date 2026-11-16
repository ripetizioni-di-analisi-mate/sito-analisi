---
titolo: Carica elettrica, legge di Coulomb e campo elettrico
sommario: Conservazione della carica, forza di Coulomb, somma vettoriale dei campi, dipoli e moto delle particelle cariche.
---

## Carica e struttura della materia

:::definizione{#carica titolo="Carica elettrica e quantizzazione"}
La **carica elettrica** si misura in coulomb, simbolo $\mathrm C$. Cariche dello stesso segno si respingono e cariche di segno opposto si attraggono. Il protone ha carica $+e$ e l'elettrone ha carica $-e$, con $e\simeq1{,}60\cdot10^{-19}\,\mathrm C$. Nei processi di elettrizzazione dei corpi ordinari la carica netta è un multiplo intero di $e$. Un eccesso di $N$ elettroni dà $q=-Ne$. Un difetto di $N$ elettroni dà $q=+Ne$. La neutralità indica che le cariche positive e negative si compensano nel totale.

La carica totale di un sistema isolato si conserva. Per esempio, se due corpi inizialmente neutri vengono strofinati e uno acquista $-2{,}0\,\mathrm{\mu C}$, l'altro acquista $+2{,}0\,\mathrm{\mu C}$. Nelle unità SI, $1\,\mathrm{\mu C}=10^{-6}\,\mathrm C$ e $1\,\mathrm{nC}=10^{-9}\,\mathrm C$.
:::

:::esempio{titolo="Segno e numero di elettroni trasferiti"}
Un corpo inizialmente neutro perde $5{,}0\cdot10^{12}$ elettroni. Poiché ciascun elettrone sottratto porta via carica negativa, resta una carica positiva di modulo
$$
|q|=(5{,}0\cdot10^{12})(1{,}60\cdot10^{-19})\,\mathrm C
=8{,}0\cdot10^{-7}\,\mathrm C.
$$
La carica finale è quindi $+0{,}80\,\mathrm{\mu C}$. Se il corpo inizialmente neutro ricevesse lo stesso numero di elettroni, il modulo sarebbe uguale e il segno sarebbe negativo.
:::

:::esempio{titolo="Quanti elettroni formano un coulomb"}
Il numero di elettroni che porta la carica $-1\,\mathrm C$ si ricava dividendo la carica per quella di un elettrone:
$$
N=\frac{1\,\mathrm C}{1{,}60\cdot10^{-19}\,\mathrm C}=6{,}25\cdot10^{18}.
$$
Un corpo con la carica di $1\,\mathrm{\mu C}$ ha invece un eccesso di $6{,}25\cdot10^{12}$ elettroni. Con un numero così alto di portatori, aggiungere un singolo elettrone cambia la carica di una parte su $6{,}25\cdot10^{12}$, quindi nei corpi ordinari la quantizzazione non è percepibile.
:::

:::attenzione
Un corpo con $3{,}2\cdot10^{12}$ elettroni *in eccesso* ha carica negativa, $-5{,}12\cdot10^{-7}\,\mathrm C$, perché ogni elettrone in più porta $-e$. Lo stesso numero di elettroni *in difetto* darebbe $+5{,}12\cdot10^{-7}\,\mathrm C$. Una carica di $4{,}0\cdot10^{-19}\,\mathrm C$ non si può realizzare su un corpo ordinario, perché $\dfrac{4{,}0\cdot10^{-19}}{1{,}60\cdot10^{-19}}=2{,}5$ non è un numero intero.
:::

## Conduttori, isolanti e induzione

:::definizione{#conduttori titolo="Mobilità delle cariche"}
In un **conduttore** alcuni portatori di carica si muovono attraverso il materiale. Nei metalli sono elettroni. In un **isolante** le cariche rimangono più legate alle strutture atomiche. Possono comunque spostarsi su distanze microscopiche e produrre polarizzazione.

Si avvicini una bacchetta positiva a un conduttore neutro isolato. Gli elettroni si concentrano nella parte più vicina alla bacchetta e rimane un difetto di elettroni nella parte più lontana. La carica totale del conduttore resta nulla. La parte vicina è attratta e la parte lontana è respinta. Poiché l'interazione è più intensa a distanza minore, il conduttore può essere attratto verso la bacchetta.
:::

:::esempio{titolo="Elettrizzazione per induzione"}
Con la bacchetta positiva ancora vicina, si collega il conduttore a terra. Il collegamento consente l'ingresso di elettroni nel conduttore. Se si stacca il collegamento mentre la bacchetta è ancora presente, la carica aggiunta resta sul conduttore isolato. Quando si allontana la bacchetta, gli elettroni in eccesso si redistribuiscono. La carica netta lasciata sul conduttore è negativa.

Due sfere conduttrici identiche con cariche iniziali $+6{,}0$ e $-2{,}0\,\mathrm{nC}$, messe in contatto e poi separate in condizioni simmetriche, si dividono la carica totale di $+4{,}0\,\mathrm{nC}$. Ognuna resta con $+2{,}0\,\mathrm{nC}$. La divisione in parti uguali deriva dalla simmetria. In generale due conduttori in contatto raggiungono lo stesso potenziale.
:::

:::esempio{titolo="Distribuzione della carica indotta"}
Una bacchetta positiva è tenuta vicino all'estremo sinistro di un conduttore neutro isolato. Gli elettroni di conduzione si spostano verso la bacchetta, quindi l'estremo sinistro diventa negativo e l'estremo destro, da cui gli elettroni si sono allontanati, diventa positivo. La carica totale del conduttore resta nulla, perciò le due cariche indotte hanno lo stesso modulo: se all'estremo sinistro si accumulano $-0{,}30\,\mathrm{nC}$, all'estremo destro si trovano $+0{,}30\,\mathrm{nC}$.

::grafico{assi=0 uguale=1 poligoni="-3.8,-0.6 -2,-0.6 -2,0.6 -3.8,0.6;-1,-0.8 3,-0.8 3,0.8 -1,0.8" etichette="-2.9,0,+ + +;-0.6,0,− − −;2.5,0,+ + +;-2.9,1.1,bacchetta;1,1.3,conduttore" xmin=-4.3 xmax=3.6 ymin=-1.5 ymax=1.8 titolo="Bacchetta positiva a sinistra e conduttore neutro con le cariche indotte ai due estremi"}
:::

## Legge di Coulomb

:::teorema{#coulomb titolo="Forza fra due cariche puntiformi"}
Siano $q_1$ e $q_2$ due cariche puntiformi ferme nel vuoto e sia $r>0$ la loro distanza. Il versore $\hat r_{12}$ ha la direzione della congiungente e punta da $q_1$ verso $q_2$. La forza che la prima carica esercita sulla seconda è
$$
\vec F_{1\to2}=k_e\frac{q_1q_2}{r^2}\hat r_{12},
\qquad
k_e=8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
Il **modulo** è $F=k_e\dfrac{|q_1q_2|}{r^2}$. Se $q_1q_2>0$, la forza sulla seconda carica punta lungo $\hat r_{12}$ e le cariche si respingono. Se $q_1q_2<0$, la forza punta in verso opposto e le cariche si attraggono. La forza sulla prima carica ha lo stesso modulo e verso opposto. Le due forze agiscono su corpi distinti.

Il modello puntiforme è adatto quando le dimensioni dei corpi sono piccole rispetto alla distanza. In un mezzo dielettrico omogeneo si usa la costante corrispondente alla permittività del mezzo, nelle condizioni in cui il modello è applicabile.
:::

:::esempio{titolo="Dalla distanza al modulo e al verso"}
Le cariche $q_1=+2{,}0\,\mathrm{nC}$ e $q_2=-3{,}0\,\mathrm{nC}$ si trovano a $10\,\mathrm{cm}$ di distanza, con $q_1$ a sinistra. Si esprimono cariche e distanza nelle unità SI:
$$
F=(8{,}99\cdot10^9)\frac{(2{,}0\cdot10^{-9})(3{,}0\cdot10^{-9})}{(0{,}10)^2}\,\mathrm N
\simeq5{,}39\cdot10^{-6}\,\mathrm N.
$$
Il prodotto delle cariche è negativo, perciò la forza su $q_2$ punta a sinistra verso $q_1$. A $20\,\mathrm{cm}$ lo stesso prodotto si divide per un quadrato quattro volte maggiore, quindi il modulo scende a circa $1{,}35\,\mathrm{\mu N}$.

::grafico{f="539.4/x^2" punti="10,5.394,pieno,A;20,1.3485,pieno,B" xmin=7 xmax=26 ymin=0 ymax=10 nomi="r,F (µN)" titolo="Forza tra le due cariche. La distanza r è in centimetri"}
:::

:::esempio{titolo="Repulsione e attrazione con le stesse cariche"}
Due cariche con moduli $1{,}0\,\mathrm{nC}$ e $4{,}0\,\mathrm{nC}$ distano $10\,\mathrm{cm}$. Il modulo della forza non dipende dai segni:
$$
F=(8{,}99\cdot10^9)\frac{(1{,}0\cdot10^{-9})(4{,}0\cdot10^{-9})}{(0{,}10)^2}\,\mathrm N\simeq3{,}60\cdot10^{-6}\,\mathrm N.
$$
Se le due cariche sono entrambe positive le forze sono dirette verso l'esterno. Se la seconda è negativa le forze sono dirette verso l'interno. In ogni caso le due forze hanno lo stesso modulo, anche se le cariche sono diverse.

::grafico{assi=0 uguale=1 punti="0,1,pieno,+1 nC;4,1,pieno,+4 nC;0,-1,pieno,+1 nC;4,-1,pieno,−4 nC" vettori="0,1,-1.6,1;4,1,5.6,1;0,-1,1.6,-1;4,-1,2.4,-1" unicolore=1 xmin=-2.5 xmax=6.5 ymin=-2 ymax=2 titolo="In alto le forze sono repulsive, in basso attrattive. Tutte e quattro hanno il modulo $3{,}60\,\mathrm{\mu N}$."}
:::

:::esempio{titolo="Forza elettrica e forza gravitazionale"}
Per un protone e un elettrone entrambe le forze diminuiscono come $\dfrac{1}{r^2}$, quindi il loro rapporto non dipende dalla distanza:
$$
\frac{F_{\mathrm{el}}}{F_{\mathrm{gr}}}=\frac{k_ee^2}{Gm_pm_e}
=\frac{(8{,}99\cdot10^9)(1{,}60\cdot10^{-19})^2}{(6{,}67\cdot10^{-11})(1{,}67\cdot10^{-27})(9{,}11\cdot10^{-31})}\simeq2{,}27\cdot10^{39}.
$$
A livello atomico la forza gravitazionale è perciò trascurabile. Fra corpi macroscopici le cariche positive e negative quasi si compensano, quindi la forza elettrica netta è molto più piccola e l'attrazione gravitazionale può prevalere.
:::

:::esempio{titolo="Tre cariche allineate"}
Le cariche $q_1=+2{,}0\,\mathrm{nC}$, $q_2=-3{,}0\,\mathrm{nC}$ e $q_3=+1{,}0\,\mathrm{nC}$ si trovano sull'asse $x$ nelle posizioni $0$, $0{,}10\,\mathrm m$ e $0{,}25\,\mathrm m$. La forza su $q_2$ è la somma vettoriale delle forze esercitate da $q_1$ e da $q_3$, ciascuna calcolata come se l'altra non ci fosse. La carica $q_1$ attrae $q_2$ verso sinistra, a distanza $0{,}10\,\mathrm m$. La carica $q_3$ attrae $q_2$ verso destra, a distanza $0{,}15\,\mathrm m$. Con l'asse orientato verso destra
$$
\begin{aligned}
F_x&=-k_e\frac{|q_1q_2|}{(0{,}10)^2}+k_e\frac{|q_3q_2|}{(0{,}15)^2}\\[6pt]
&=(-5{,}39+1{,}20)\cdot10^{-6}\,\mathrm N\\[6pt]
&\simeq-4{,}2\cdot10^{-6}\,\mathrm N.
\end{aligned}
$$
La forza risultante è diretta verso sinistra e ha modulo $4{,}2\,\mathrm{\mu N}$.
:::

:::osservazione{titolo="Attrazione di un isolante neutro"}
Una bacchetta carica attira anche pezzetti di carta, che sono isolanti neutri. Nelle molecole della carta le cariche si spostano di poco e ogni molecola si polarizza: la carica di segno opposto a quello della bacchetta si dispone dal lato rivolto verso la bacchetta. Quella carica è più vicina alla sorgente dell'altra, quindi l'attrazione supera la repulsione. Per una sorgente $Q=+20\,\mathrm{nC}$, una carica indotta di modulo $1{,}0\,\mathrm{pC}$ a $5{,}0\,\mathrm{cm}$ e l'altra, uguale e di segno opposto, a $1{,}0\,\mathrm{mm}$ più lontano, la forza attrattiva è $7{,}19\cdot10^{-8}\,\mathrm N$ e quella repulsiva $6{,}91\cdot10^{-8}\,\mathrm N$. La differenza è un'attrazione netta di circa $2{,}8\cdot10^{-9}\,\mathrm N$.
:::

:::osservazione{titolo="La costante di Coulomb e la permittività"}
La costante di Coulomb si scrive anche $k_e=\dfrac{1}{4\pi\varepsilon_0}$, dove $\varepsilon_0=8{,}85\cdot10^{-12}\,\mathrm{C^2/(N\,m^2)}$ è la permittività elettrica del vuoto. Il calcolo numerico conferma il valore dato sopra:
$$
\frac{1}{4\pi\cdot8{,}85\cdot10^{-12}}\,\mathrm{N\,m^2/C^2}\simeq8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
La forma con $\varepsilon_0$ è quella che compare nel teorema di Gauss e nella capacità dei condensatori, trattati negli argomenti successivi.
:::

## Campo elettrico

:::definizione{#campo titolo="Forza per unità di carica di prova"}
Il **campo elettrico** in un punto è la forza per unità di carica positiva di prova. Si considera una carica $q_0$ abbastanza piccola da non alterare in modo apprezzabile la distribuzione delle sorgenti:
$$
\vec E=\frac{\vec F}{q_0}.
$$
Il campo si misura in $\mathrm{N/C}$ e dipende dalle sorgenti e dal punto di osservazione. Una carica $q$ collocata nel punto subisce $\vec F=q\vec E$. Per $q>0$ la forza ha il verso del campo. Per $q<0$ ha verso opposto. Ad esempio $q=-2{,}0\,\mathrm{nC}$ in un campo di $300\,\mathrm{N/C}$ verso destra subisce una forza di modulo $6{,}0\cdot10^{-7}\,\mathrm N$ verso sinistra.

Per una sorgente puntiforme $Q$, sia $\hat r$ il versore che punta dalla sorgente verso il punto osservato. La forza di Coulomb su $q_0$ contiene il prodotto $Qq_0$. Dividendo per $q_0$ si ottiene
$$
\vec E_Q=k_e\frac Q{r^2}\hat r.
$$
Una sorgente positiva produce un campo radiale uscente. Una sorgente negativa produce un campo radiale entrante. Il verso del campo dipende dal segno di $Q$, mentre il verso della forza sulla carica di prova dipende anche dal segno di quest'ultima.

Il modello puntiforme vale per $r>0$. Nella posizione della sorgente è singolare, quindi quel punto è escluso quando si cerca dove il campo totale si annulla.
:::

:::esempio{titolo="Il campo cambia verso attraversando la sorgente"}
Se $Q=-4\,\mathrm{nC}$ è nell'origine, il campo a destra punta verso sinistra e il campo a sinistra punta verso destra. I due punti a uguale distanza da $Q$ hanno campi di uguale modulo e verso opposto.

::grafico{assi=0 uguale=1 punti="0,0,pieno,−4 nC" vettori="2,0,0.6,0;-2,0,-0.6,0;0,2,0,0.6;0,-2,0,-0.6;1.5,1.5,0.5,0.5;-1.5,1.5,-0.5,0.5" unicolore=1 xmin=-3 xmax=3 ymin=-2.5 ymax=2.5 titolo="Le frecce indicano il verso del campo di una sorgente negativa"}
:::

:::esempio{titolo="Come decresce il campo con la distanza"}
Per $Q=+2{,}0\,\mathrm{nC}$ il modulo del campo è $E=\dfrac{k_eQ}{r^2}=\dfrac{17{,}98}{r^2}\,\mathrm{N/C}$, con $r$ in metri. Si ottengono $71{,}9\,\mathrm{N/C}$ a $0{,}50\,\mathrm m$, $18{,}0\,\mathrm{N/C}$ a $1{,}0\,\mathrm m$ e $4{,}5\,\mathrm{N/C}$ a $2{,}0\,\mathrm m$. A ogni raddoppio della distanza il campo diventa un quarto.

::grafico{f="17.98/x^2" punti="0.5,71.92,pieno,A;1,17.98,pieno,B;2,4.495,pieno,C" xmin=0 xmax=3 ymin=0 ymax=100 nomi="r,E (N/C)" titolo="Modulo del campo di una sorgente puntiforme di $2{,}0\,\mathrm{nC}$. La distanza $r$ è in metri."}
:::

:::attenzione
Il campo in un punto non dipende dalla carica di prova. Dove $E=300\,\mathrm{N/C}$, una carica $q_0=1{,}0\,\mathrm{nC}$ subisce $0{,}30\,\mathrm{\mu N}$ e una carica $q_0=2{,}0\,\mathrm{nC}$ subisce $0{,}60\,\mathrm{\mu N}$, ma in entrambi i casi $\dfrac{F}{q_0}=300\,\mathrm{N/C}$. Inoltre una carica più grande non subisce una forza più grande: con $q_1=1{,}0\,\mathrm{nC}$ e $q_2=4{,}0\,\mathrm{nC}$ a $10\,\mathrm{cm}$ la forza ha modulo $3{,}60\,\mathrm{\mu N}$ su entrambe. Il campo di $q_2$ nella posizione di $q_1$ è $3596\,\mathrm{N/C}$, quello di $q_1$ nella posizione di $q_2$ è $899\,\mathrm{N/C}$, e i due prodotti $q_1\cdot3596$ e $q_2\cdot899$ coincidono.
:::

## Sovrapposizione dei campi

:::teorema{#sovrapposizione titolo="Somma vettoriale"}
Il campo prodotto da più sorgenti è la somma vettoriale dei campi che ciascuna produrrebbe da sola nel punto considerato:
$$
\vec E_{\mathrm{tot}}=\vec E_1+\vec E_2+\cdots.
$$
Su una retta si sceglie un verso positivo e si sommano le componenti con segno. Nel piano si sommano separatamente le componenti orizzontali e verticali. Se $E_x$ ed $E_y$ sono le componenti della somma, il modulo è $\sqrt{E_x^2+E_y^2}$. Il segno delle due componenti individua il quadrante del vettore.

Nel punto medio di due sorgenti positive uguali le due frecce sono opposte e i campi si annullano. Nel punto medio di una coppia di segno opposto, entrambi i contributi puntano dalla positiva verso la negativa. Si sommano quindi anche quando il modulo delle due sorgenti è lo stesso.
:::

:::esempio{titolo="Due contributi perpendicolari"}
Una carica $Q_1=+3{,}0\,\mathrm{nC}$ è a $30\,\mathrm{cm}$ a sinistra di $P$. Una carica $Q_2=-4{,}0\,\mathrm{nC}$ è a $30\,\mathrm{cm}$ sopra $P$. Si scelgono gli assi verso destra e verso l'alto e si approssima $k_e$ a $9{,}0\cdot10^9\,\mathrm{N\,m^2/C^2}$. Nel punto $P$ il primo campo è diretto *via* da $Q_1$, quindi verso destra. Il secondo è diretto verso $Q_2$, quindi verso l'alto. Si ottiene
$$
\begin{aligned}
E_x&=\frac{9{,}0\cdot10^9\cdot3{,}0\cdot10^{-9}}{0{,}30^2}\,\mathrm{N/C}=300\,\mathrm{N/C},\\
E_y&=\frac{9{,}0\cdot10^9\cdot4{,}0\cdot10^{-9}}{0{,}30^2}\,\mathrm{N/C}=400\,\mathrm{N/C},\\
E_{\mathrm{tot}}&=\sqrt{300^2+400^2}\,\mathrm{N/C}=500\,\mathrm{N/C}.
\end{aligned}
$$
Il campo è nel primo quadrante e forma con l'asse orizzontale un angolo $\arctan(\dfrac{400}{300})\simeq53^\circ$.

::grafico{assi=0 uguale=1 punti="-3,0,pieno,+3 nC;0,3,pieno,−4 nC;0,0,pieno" etichette="-0.48,-0.20,P" vettori="0,0,1.2,0,E1;0,0,0,1.6,E2;0,0,1.2,1.6,E" segmenti="1.2,0,1.2,1.6;0,1.6,1.2,1.6" xmin=-4.5 xmax=3.5 ymin=-1 ymax=4.0 titolo="I due contributi ortogonali e la risultante in P"}
:::

::::teorema{#asse-coppia titolo="Campo sull'asse di una coppia di cariche uguali"}
Due cariche uguali $Q$ sono nei punti $(-a,0)$ e $(a,0)$. In un punto $(0,y)$ con $y>0$ il campo totale è parallelo all'asse $y$, è diretto verso l'alto se $Q>0$ e verso il basso se $Q<0$, e ha modulo
$$
E=\frac{2k_e|Q|\,y}{\left(y^2+a^2\right)^{\frac{3}{2}}}.
$$
Per $y\gg a$ il modulo tende a $\dfrac{2k_e|Q|}{y^2}$, cioè al campo di una sola carica $2Q$ posta nell'origine. La formula dà il campo in tutti i punti dell'asse con un solo calcolo, senza scomporre ogni volta i due contributi.

:::dimostrazione
Il punto $P=(0,y)$ dista $r=\sqrt{y^2+a^2}$ da ciascuna carica, quindi i due contributi hanno lo stesso modulo $E_1=\dfrac{k_e|Q|}{r^2}$. Per la somma vettoriale si sommano le componenti. Il campo di ciascuna carica forma con l'asse $y$ un angolo $\alpha$ tale che $\sin\alpha=\dfrac{a}{r}$ e $\cos\alpha=\dfrac{y}{r}$. Le componenti orizzontali, di modulo $E_1\sin\alpha$, hanno versi opposti e si annullano. Le componenti verticali, di modulo $E_1\cos\alpha$, hanno lo stesso verso e si sommano. Il campo totale è perciò
$$
E=2E_1\cos\alpha=2\frac{k_e|Q|}{r^2}\cdot\frac{y}{r}=\frac{2k_e|Q|\,y}{r^3},
$$
che con $r=\left(y^2+a^2\right)^{\frac{1}{2}}$ è la formula enunciata. Per $y\gg a$ si ha $r\simeq y$, quindi $E\simeq\dfrac{2k_e|Q|}{y^2}$.
:::
::::

:::esempio{titolo="Campo sull'asse a due distanze"}
Con $Q=2{,}0\,\mathrm{nC}$ e $a=0{,}20\,\mathrm m$, nel punto $y=0{,}15\,\mathrm m$ la distanza dalle cariche è $r=\sqrt{0{,}15^2+0{,}20^2}\,\mathrm m=0{,}25\,\mathrm m$ e
$$
E=\frac{2(8{,}99\cdot10^9)(2{,}0\cdot10^{-9})(0{,}15)}{(0{,}25)^3}\,\mathrm{N/C}\simeq345\,\mathrm{N/C}.
$$
A $y=3{,}0\,\mathrm m$ la formula esatta dà $3{,}97\,\mathrm{N/C}$ e quella approssimata $\dfrac{2k_eQ}{y^2}$ dà $4{,}00\,\mathrm{N/C}$, con una differenza di circa $0{,}7\%$.

::grafico{assi=0 uguale=1 punti="-2,0,pieno,+Q;2,0,pieno,+Q;0,1.5,pieno" etichette="-0.35,1.15,P;-1.25,0.45,r;-0.3,0.6,y;-1,-0.4,a" segmenti="-2,0,0,1.5;2,0,0,1.5;0,0,0,1.5" vettori="0,1.5,1.2,2.4,E1;0,1.5,-1.2,2.4,E2;0,1.5,0,3.3,E" xmin=-3.2 xmax=3.2 ymin=-1 ymax=3.8 titolo="Con $a=0{,}20\,\mathrm m$ e $y=0{,}15\,\mathrm m$ le componenti orizzontali di $\vec E_1$ e $\vec E_2$ si annullano e restano quelle verticali."}
:::

## Linee di campo e dipolo

:::definizione{#linee titolo="Rappresentazione del campo e momento di dipolo"}
Le **linee di campo** hanno in ogni punto la direzione tangente al campo e il verso della forza su una carica positiva. In elettrostatica partono da sorgenti positive o dall'infinito e terminano su sorgenti negative o all'infinito. Dove il campo è definito e diverso da zero, le linee non si incrociano, perché in quel punto il vettore ha un'unica direzione.

Un **dipolo elettrico** è formato da due cariche $+q$ e $-q$ separate da una distanza $d$. Il momento di dipolo $\vec p$ punta dalla carica negativa a quella positiva e ha modulo $p=qd$. In un campo esterno uniforme le due forze $+q\vec E$ e $-q\vec E$ si annullano nella somma. Sono applicate in punti diversi e possono produrre una rotazione. Se $\theta$ è l'angolo fra $\vec p$ e $\vec E$, il modulo del momento torcente è $M=pE\sin\theta$.

Con $q=1{,}0\,\mathrm{nC}$, $d=2{,}0\,\mathrm{cm}$ ed $E=1000\,\mathrm{N/C}$, il momento massimo vale $2{,}0\cdot10^{-8}\,\mathrm{N\,m}$. Si raggiunge a $90^\circ$, quando il braccio della coppia è $d$. Per orientamento parallelo e antiparallelo, le rette d'azione coincidono e il momento è nullo. L'orientamento parallelo è stabile, perché una piccola rotazione produce un momento opposto alla rotazione.
:::

:::esempio{titolo="Linee di campo di due cariche opposte"}
Le linee escono dalla carica positiva e terminano sulla negativa. Sul segmento che congiunge le cariche la linea è rettilinea, le altre si incurvano. Il campo è più intenso dove le linee sono più fitte, cioè vicino alle cariche. Nei punti equidistanti dalle due cariche il campo è parallelo al segmento che le congiunge e punta dalla positiva alla negativa, perché le componenti perpendicolari al segmento hanno versi opposti e si annullano, mentre quelle parallele hanno lo stesso verso.

::grafico{assi=0 uguale=1 linee="-0.91,0.05 -0.74,0.15 -0.56,0.24 -0.38,0.32 -0.18,0.37 0.01,0.39 0.21,0.36 0.40,0.31 0.59,0.23 0.77,0.13 0.94,0.04 0.94,0.04;-0.95,0.09 -0.85,0.26 -0.74,0.42 -0.61,0.58 -0.46,0.71 -0.29,0.82 -0.10,0.88 0.10,0.88 0.29,0.82 0.46,0.72 0.61,0.58 0.73,0.43 0.85,0.26 0.95,0.09 0.97,0.06;-1.00,0.10 -1.00,0.30 -0.99,0.50 -0.96,0.70 -0.92,0.89 -0.85,1.08 -0.76,1.26 -0.64,1.42 -0.50,1.56 -0.33,1.66 -0.14,1.72 0.06,1.73 0.26,1.69 0.44,1.60 0.59,1.48 0.72,1.33 0.82,1.15 0.89,0.97 0.95,0.78 0.98,0.58 0.99,0.38 1.00,0.18 1.00,0.10;-1.05,0.09 -1.15,0.26 -1.24,0.44 -1.33,0.62 -1.40,0.80 -1.47,0.99 -1.53,1.18 -1.57,1.38 -1.60,1.58 -1.62,1.78 -1.62,1.98 -1.61,2.18 -1.58,2.37 -1.53,2.57 -1.47,2.76 -1.41,2.90;-1.09,0.05 -1.26,0.15 -1.43,0.25 -1.60,0.36 -1.77,0.47 -1.93,0.58 -2.09,0.70 -2.25,0.82 -2.41,0.95 -2.56,1.08 -2.71,1.21 -2.86,1.34 -3.00,1.48 -3.15,1.62 -3.28,1.77 -3.42,1.92 -3.55,2.07 -3.68,2.22 -3.80,2.38 -3.92,2.54 -4.04,2.70 -4.15,2.86 -4.20,2.93;-1.10,0.01 -1.30,0.04 -1.49,0.07 -1.69,0.10 -1.89,0.13 -2.09,0.16 -2.29,0.20 -2.48,0.23 -2.68,0.27 -2.88,0.30 -3.07,0.34 -3.27,0.38 -3.46,0.42 -3.66,0.46 -3.86,0.50 -4.05,0.54 -4.21,0.58;-0.91,-0.05 -0.74,-0.15 -0.56,-0.24 -0.38,-0.32 -0.18,-0.37 0.01,-0.39 0.21,-0.36 0.40,-0.31 0.59,-0.23 0.77,-0.13 0.94,-0.04 0.94,-0.04;-0.95,-0.09 -0.85,-0.26 -0.74,-0.42 -0.61,-0.58 -0.46,-0.71 -0.29,-0.82 -0.10,-0.88 0.10,-0.88 0.29,-0.82 0.46,-0.72 0.61,-0.58 0.73,-0.43 0.85,-0.26 0.95,-0.09 0.97,-0.06;-1.00,-0.10 -1.00,-0.30 -0.99,-0.50 -0.96,-0.70 -0.92,-0.89 -0.85,-1.08 -0.76,-1.26 -0.64,-1.42 -0.50,-1.56 -0.33,-1.66 -0.14,-1.72 0.06,-1.73 0.26,-1.69 0.44,-1.60 0.59,-1.48 0.72,-1.33 0.82,-1.15 0.89,-0.97 0.95,-0.78 0.98,-0.58 0.99,-0.38 1.00,-0.18 1.00,-0.10;-1.05,-0.09 -1.15,-0.26 -1.24,-0.44 -1.33,-0.62 -1.40,-0.80 -1.47,-0.99 -1.53,-1.18 -1.57,-1.38 -1.60,-1.58 -1.62,-1.78 -1.62,-1.98 -1.61,-2.18 -1.58,-2.37 -1.53,-2.57 -1.47,-2.76 -1.41,-2.90;-1.09,-0.05 -1.26,-0.15 -1.43,-0.25 -1.60,-0.36 -1.77,-0.47 -1.93,-0.58 -2.09,-0.70 -2.25,-0.82 -2.41,-0.95 -2.56,-1.08 -2.71,-1.21 -2.86,-1.34 -3.00,-1.48 -3.15,-1.62 -3.28,-1.77 -3.42,-1.92 -3.55,-2.07 -3.68,-2.22 -3.80,-2.38 -3.92,-2.54 -4.04,-2.70 -4.15,-2.86 -4.20,-2.93;-1.10,-0.01 -1.30,-0.04 -1.49,-0.07 -1.69,-0.10 -1.89,-0.13 -2.09,-0.16 -2.29,-0.20 -2.48,-0.23 -2.68,-0.27 -2.88,-0.30 -3.07,-0.34 -3.27,-0.38 -3.46,-0.42 -3.66,-0.46 -3.86,-0.50 -4.05,-0.54 -4.21,-0.58;-0.9,0 0.9,0" vettori="-0.14,0.39,0.16,0.38;-0.13,0.89,0.17,0.88;-0.13,1.74,0.17,1.73;-1.56,1.31,-1.61,1.61;-2.72,1.21,-2.94,1.42;-2.53,0.24,-2.83,0.29;-0.14,-0.39,0.16,-0.38;-0.13,-0.89,0.17,-0.88;-0.13,-1.74,0.17,-1.73;-1.56,-1.31,-1.61,-1.61;-2.72,-1.21,-2.94,-1.42;-2.53,-0.24,-2.83,-0.29;-0.15,0,0.15,0" unicolore=1 punti="-1,0,pieno,+q;1,0,pieno,−q" xmin=-4.4 xmax=2.6 ymin=-3 ymax=3 titolo="Alcune linee di campo di una coppia di cariche uguali e opposte. Il verso è quello della forza su una carica positiva di prova."}
:::

:::richiamo{titolo="Forza su una carica in un campo"}
In un punto in cui il campo è $\vec E$, una carica $q$ subisce la forza $\vec F=q\vec E$.
:::

:::richiamo{titolo="Momento di una forza"}
Una forza di modulo $F$ la cui retta d'azione dista $b$ da un punto $O$ ha rispetto a $O$ un momento di modulo $Fb$.
:::

::::teorema{#momento-dipolo titolo="Momento torcente su un dipolo"}
Un dipolo di momento $\vec p$ si trova in un campo elettrico uniforme $\vec E$ e $\theta$ è l'angolo fra $\vec p$ e $\vec E$. La forza totale sul dipolo è nulla e il modulo del momento delle forze rispetto al centro del dipolo è
$$
M=pE\sin\theta.
$$
Il momento tende a far ruotare il dipolo fino ad allinearlo con $\vec E$. La formula permette di calcolare quanto vale la coppia in ogni orientamento e di individuare le posizioni di equilibrio, $\theta=0$ e $\theta=180^\circ$, dove $M=0$.

:::dimostrazione
Sulla carica $+q$ agisce $q\vec E$ e sulla carica $-q$ agisce $-q\vec E$. La somma è nulla. Poiché la forza totale è nulla, il momento totale è lo stesso rispetto a qualunque punto, e si calcola rispetto al centro $O$ del dipolo. Le due cariche sono a distanza $\dfrac{d}{2}$ da $O$ e la retta d'azione di ciascuna forza è parallela a $\vec E$, quindi forma con il segmento che unisce $O$ alla carica un angolo $\theta$ oppure $180^\circ-\theta$. Il braccio di ciascuna forza è perciò $b=\dfrac{d}{2}\sin\theta$. Ognuna delle due forze ha modulo $qE$, quindi ogni momento ha modulo $qE\cdot\dfrac{d}{2}\sin\theta$. I due momenti hanno lo stesso verso di rotazione, perché le forze sono opposte e applicate in punti opposti rispetto a $O$. Il momento totale ha dunque modulo
$$
M=2\cdot qE\frac{d}{2}\sin\theta=qd\,E\sin\theta=pE\sin\theta.
$$
:::
::::

:::esempio{titolo="Dipolo molecolare in un campo"}
Una molecola polare ha momento di dipolo $p=6{,}2\cdot10^{-30}\,\mathrm{C\,m}$ ed è in un campo uniforme $E=1{,}0\cdot10^5\,\mathrm{N/C}$. Il momento massimo, a $90^\circ$, vale $pE=6{,}2\cdot10^{-25}\,\mathrm{N\,m}$. A $\theta=30^\circ$ il momento è la metà, perché $\sin30^\circ=\dfrac{1}{2}$, cioè $3{,}1\cdot10^{-25}\,\mathrm{N\,m}$. Per $\theta=0$ e per $\theta=180^\circ$ il momento è nullo.

::grafico{assi=0 uguale=1 linee="-0.964,-1.149 0.964,1.149" segmenti="0,0,0,1.149;0,0,2,0" punti="0.964,1.149,pieno,+q;-0.964,-1.149,pieno,−q;0,0,pieno" vettori="0.964,1.149,2.8,1.149,qE;-0.964,-1.149,-2.8,-1.149,−qE;-3,2.5,-1.5,2.5,E" etichette="0.2,0.55,b;1.0,0.3,θ" xmin=-3.4 xmax=3.4 ymin=-1.9 ymax=3 titolo="Le rette d'azione delle due forze distano $b=\dfrac{d}{2}\sin\theta$ dal centro $O$ del dipolo."}
:::

## Moto in un campo uniforme

:::teorema{#moto-campo titolo="Accelerazione elettrica"}
Se il campo è uniforme e le altre forze sono trascurabili, la forza elettrica è costante. Una particella di massa $m$ e carica $q$ ha quindi accelerazione
$$
\vec a=\frac qm\vec E.
$$
Il segno della carica stabilisce se l'accelerazione concorda con il campo o se gli si oppone. Se parte da ferma, la particella comincia a muoversi nel verso dell'accelerazione. La velocità iniziale può però avere verso opposto a quel vettore, e allora la particella rallenta fino a fermarsi prima di invertire il moto, se resta nel campo abbastanza a lungo.
:::

:::esempio{titolo="Ingresso perpendicolare al campo"}
Si scelgano $x$ orizzontale e $y$ nel verso del campo. Una particella parte dall'origine con velocità orizzontale $v_0>0$. Poiché $a_x=0$, il moto lungo $x$ è uniforme. Poiché $a_y=qE/m$ e $v_y(0)=0$, il moto lungo $y$ è uniformemente accelerato:
$$
x=v_0t,
\qquad y=\frac{qE}{2m}t^2
=\frac{qE}{2mv_0^2}x^2.
$$
La traiettoria è parabolica. Per una carica negativa si ha $y<0$ a $t>0$. Il risultato vale finché la particella è nella regione in cui il campo è uniforme e le velocità restano piccole rispetto a quella della luce.
:::

:::esempio{titolo="Protone fermo in un campo uniforme"}
Un protone parte da fermo in un campo uniforme $E=1{,}0\cdot10^3\,\mathrm{N/C}$. L'accelerazione ha il verso del campo e vale
$$
a=\frac{eE}{m_p}=\frac{(1{,}60\cdot10^{-19})(1{,}0\cdot10^3)}{1{,}67\cdot10^{-27}}\,\mathrm{m/s^2}\simeq9{,}58\cdot10^{10}\,\mathrm{m/s^2}.
$$
Dopo $t=1{,}0\,\mathrm{\mu s}$ il moto uniformemente accelerato dà $v=at\simeq9{,}58\cdot10^4\,\mathrm{m/s}$ e $s=\dfrac{1}{2}at^2\simeq4{,}79\cdot10^{-2}\,\mathrm m$. Un elettrone nello stesso campo ha un'accelerazione circa $1{,}8\cdot10^3$ volte maggiore, perché la sua massa è minore in questo rapporto, e di verso opposto.
:::

:::esempio{titolo="Quando si può trascurare il peso"}
Su un elettrone in $E=100\,\mathrm{N/C}$ la forza elettrica è $eE=1{,}6\cdot10^{-17}\,\mathrm N$ e il peso è $m_eg=8{,}9\cdot10^{-30}\,\mathrm N$, con $g=9{,}8\,\mathrm{m/s^2}$. Il rapporto è circa $1{,}8\cdot10^{12}$, quindi il peso è trascurabile. Per una pallina di massa $1{,}0\,\mathrm g$ con carica $10\,\mathrm{nC}$ in $E=500\,\mathrm{N/C}$ si ha $qE=5{,}0\cdot10^{-6}\,\mathrm N$ contro un peso di $9{,}8\cdot10^{-3}\,\mathrm N$. In questo caso il peso prevale e non può essere trascurato.
:::

:::attenzione
Le linee di campo non sono traiettorie. La forza su una carica è tangente alla linea di campo, ma la velocità in generale non lo è. Un elettrone lanciato orizzontalmente in un campo uniforme verticale percorre una parabola, mentre le linee di campo sono rette verticali.
:::

::::teorema{#deflessione titolo="Deflessione in un campo uniforme"}
Una particella di carica $q$ e massa $m$ entra con velocità $v_0$ perpendicolare a un campo uniforme $E$ in una regione di lunghezza $L$, misurata lungo la direzione di $v_0$. Se le altre forze sono trascurabili, all'uscita lo spostamento trasversale è $y_L=\dfrac{qEL^2}{2mv_0^2}$ e l'angolo $\theta$ fra la velocità finale e quella iniziale soddisfa $\tan\theta=\dfrac{qEL}{mv_0^2}$. Dopo l'uscita la particella si muove in linea retta, e il prolungamento all'indietro di questa retta incontra la direzione iniziale nel punto medio della regione, a distanza $\dfrac{L}{2}$ dall'ingresso. Se $v_0$ è noto, la misura di $y_L$ permette di ricavare il rapporto $\dfrac{q}{m}$ della particella.

:::dimostrazione
La forza è perpendicolare a $\vec v_0$, quindi la componente della velocità lungo la direzione iniziale resta $v_0$ e il tempo di attraversamento è $t_L=\dfrac{L}{v_0}$. Nella direzione del campo l'accelerazione è $a=\dfrac{qE}{m}$ e la velocità iniziale è nulla. Perciò
$$
y_L=\frac{1}{2}at_L^2=\frac{qEL^2}{2mv_0^2},
\qquad
v_y=at_L=\frac{qEL}{mv_0}.
$$
L'angolo di uscita soddisfa $\tan\theta=\dfrac{v_y}{v_0}=\dfrac{qEL}{mv_0^2}$. Confrontando le due formule si ottiene $\tan\theta=\dfrac{2y_L}{L}$. Fuori dalla regione la forza è nulla, quindi la velocità resta costante e il moto è rettilineo con pendenza $\tan\theta$. Percorrendo la retta all'indietro dal punto di uscita, l'altezza $y_L$ si annulla dopo una distanza orizzontale $\dfrac{y_L}{\tan\theta}=\dfrac{L}{2}$.
:::
::::

:::esempio{titolo="Elettrone deflesso"}
Un elettrone con $v_0=3{,}0\cdot10^6\,\mathrm{m/s}$ attraversa una regione lunga $L=2{,}0\,\mathrm{cm}$ con un campo uniforme $E=2{,}0\cdot10^3\,\mathrm{N/C}$ perpendicolare a $\vec v_0$. Lo spostamento trasversale all'uscita è
$$
y_L=\frac{(1{,}60\cdot10^{-19})(2{,}0\cdot10^3)(0{,}020)^2}{2(9{,}11\cdot10^{-31})(3{,}0\cdot10^6)^2}\,\mathrm m\simeq7{,}8\cdot10^{-3}\,\mathrm m
$$
e $\tan\theta=\dfrac{2y_L}{L}\simeq0{,}78$, cioè $\theta\simeq38^\circ$. Se il campo è diretto verso il basso, la forza sull'elettrone è diretta verso l'alto e l'elettrone devia verso l'alto. Il prolungamento all'indietro della traiettoria rettilinea incontra la direzione iniziale a $1{,}0\,\mathrm{cm}$ dall'ingresso.

::grafico{f="x<=20?0.019515*x^2:7.806+0.7806*(x-20)" linee="0,14 20,14;0,-6 20,-6" segmenti="10,0,20,7.806" etichette="9,15.5,piastra +;9,-8,piastra −" xmin=0 xmax=35 ymin=-10 ymax=20 nomi="x,y (mm)" titolo="Traiettoria dell'elettrone: parabola fra le piastre e retta dopo l'uscita. Il tratteggio prolunga la retta fino all'asse $x$, in $x=10\,\mathrm{mm}$."}
:::

## Equilibrio e scelta del punto

:::osservazione{#equilibrio titolo="Campo nullo e forza nulla"}
Una carica di prova diversa da zero ha forza elettrica nulla dove il campo totale è nullo. Per due sorgenti puntiformi, affinché i contributi si annullino devono avere la stessa direzione e versi opposti. Fuori dalla retta delle sorgenti, i due vettori radiali non sono collineari. Si cercano quindi sulla retta le regioni in cui i versi sono opposti e si eguagliano i moduli soltanto in quelle regioni.

Per due cariche positive $Q$ e $4Q$ distanti $d$, il punto di annullamento è fra le sorgenti. Se $x$ è la distanza da $Q$ con $0<x<d$, si ha
$$
\frac{k_eQ}{x^2}=\frac{4k_eQ}{(d-x)^2}
\quad\Longrightarrow\quad d-x=2x
\quad\Longrightarrow\quad x=\frac d3.
$$
Si prende la radice positiva perché $x$ e $d-x$ sono distanze positive. Il punto è più vicino a $Q$, che deve agire da una distanza minore per eguagliare il contributo della sorgente più intensa.
:::

:::esempio{titolo="Annullo esterno per due segni opposti"}
Si pongano $+Q$ nell'origine e $-4Q$ nel punto di ascissa $d>0$. Fra le due sorgenti entrambi i campi puntano a destra. A destra della seconda sorgente, il contributo di $-4Q$ è maggiore, perché quella sorgente ha modulo maggiore ed è anche più vicina. Resta la regione a sinistra di $+Q$. Sia $s>0$ la distanza da $+Q$. Il contributo di $+Q$ punta a sinistra e quello di $-4Q$ a destra. L'uguaglianza dei moduli dà
$$
\frac{Q}{s^2}=\frac{4Q}{(d+s)^2}
\quad\Longrightarrow\quad d+s=2s
\quad\Longrightarrow\quad s=d.
$$
Il punto ha ascissa $-d$. Se le due sorgenti avessero modulo uguale e segno opposto, i contributi esterni potrebbero eguagliarsi soltanto a distanze uguali dalle sorgenti. Sulla retta ciò avviene solo nel punto medio, dove i due versi concordano. In quel caso non esiste un punto di annullamento a distanza finita.
:::

::::teorema{#annullamento-generale titolo="Punto di annullamento del campo di due cariche"}
Siano $Q_1$ e $Q_2$ due cariche puntiformi distanti $d$. Il campo totale non si annulla fuori dalla retta che le congiunge. Sulla retta:
- se $Q_1$ e $Q_2$ hanno lo stesso segno, il campo si annulla in un solo punto, interno al segmento, a distanza $x=\dfrac{d\sqrt{|Q_1|}}{\sqrt{|Q_1|}+\sqrt{|Q_2|}}$ da $Q_1$;
- se hanno segno opposto e $|Q_1|<|Q_2|$, il campo si annulla in un solo punto, esterno al segmento dalla parte di $Q_1$, a distanza $s=\dfrac{d\sqrt{|Q_1|}}{\sqrt{|Q_2|}-\sqrt{|Q_1|}}$ da $Q_1$;
- se hanno segno opposto e $|Q_1|=|Q_2|$, il campo non si annulla in nessun punto a distanza finita.

La formula dà direttamente la posizione, senza impostare ogni volta l'uguaglianza dei moduli.

:::dimostrazione
Fuori dalla retta i due campi non sono paralleli, quindi la loro somma non è nulla. Sulla retta si distinguono i casi.

Cariche dello stesso segno. All'esterno del segmento i due campi hanno lo stesso verso e non si annullano. All'interno hanno versi opposti, e se $x$ è la distanza da $Q_1$ l'annullamento richiede l'uguaglianza dei moduli
$$
\frac{k_e|Q_1|}{x^2}=\frac{k_e|Q_2|}{(d-x)^2}.
$$
Le distanze $x$ e $d-x$ sono positive, quindi estraendo la radice si ottiene $\dfrac{\sqrt{|Q_1|}}{x}=\dfrac{\sqrt{|Q_2|}}{d-x}$. Da qui $\sqrt{|Q_1|}\,(d-x)=\sqrt{|Q_2|}\,x$ e
$$
x=\frac{d\sqrt{|Q_1|}}{\sqrt{|Q_1|}+\sqrt{|Q_2|}}.
$$
L'equazione ha una sola soluzione, quindi il punto è unico.

Cariche di segno opposto. Fra le cariche i due campi hanno lo stesso verso e non si annullano. Dalla parte della carica di modulo maggiore $Q_2$, ogni punto è più vicino a $Q_2$ che a $Q_1$, quindi il campo di $Q_2$ prevale. Resta il lato di $Q_1$. Se $s$ è la distanza da $Q_1$, la distanza da $Q_2$ è $s+d$ e l'uguaglianza dei moduli dà $\dfrac{\sqrt{|Q_1|}}{s}=\dfrac{\sqrt{|Q_2|}}{s+d}$. Quindi $\sqrt{|Q_1|}\,(s+d)=\sqrt{|Q_2|}\,s$ e
$$
s=\frac{d\sqrt{|Q_1|}}{\sqrt{|Q_2|}-\sqrt{|Q_1|}}.
$$
Il risultato è positivo se e solo se $|Q_2|>|Q_1|$. Per $|Q_1|=|Q_2|$ l'equazione diventa $d=0$, impossibile.
:::
::::

:::esempio{titolo="Posizione del punto di campo nullo"}
Per $Q_1=+2{,}0\,\mathrm{nC}$ e $Q_2=+18\,\mathrm{nC}$ a $d=0{,}40\,\mathrm m$ si ha $\sqrt{|Q_1|}:\sqrt{|Q_2|}=1:3$, quindi $x=\dfrac{d}{1+3}=0{,}10\,\mathrm m$. In quel punto $\dfrac{2{,}0}{(0{,}10)^2}=\dfrac{18}{(0{,}30)^2}=200\,\mathrm{nC/m^2}$, quindi i due campi hanno lo stesso modulo $1{,}8\cdot10^3\,\mathrm{N/C}$. Con $Q_2=-18\,\mathrm{nC}$ il punto è esterno, dalla parte di $Q_1$, a $s=\dfrac{d}{3-1}=0{,}20\,\mathrm m$ da $Q_1$ e $0{,}60\,\mathrm m$ da $Q_2$. Anche qui $\dfrac{2{,}0}{(0{,}20)^2}=\dfrac{18}{(0{,}60)^2}=50\,\mathrm{nC/m^2}$.

::grafico{f="1/x^2-9/(1-x)^2" punti="0.25,0,pieno,P" xmin=0 xmax=1 ymin=-30 ymax=30 nomi="x/d,E" titolo="Componente $E_x$ fra due cariche positive con $Q_2=9Q_1$, in unità di $\dfrac{k_eQ_1}{d^2}$, con $x$ misurato da $Q_1$. Si annulla in $x=\dfrac{d}{4}$."}
:::

:::attenzione
Una carica di prova nel punto in cui il campo è nullo è in equilibrio, ma non sempre stabile. Per due cariche positive uguali $Q=1{,}0\,\mathrm{nC}$ distanti $0{,}20\,\mathrm m$ e una carica di prova $q_0=+1{,}0\,\mathrm{nC}$ nel punto medio, uno spostamento di $y=1{,}0\,\mathrm{cm}$ perpendicolare alla retta delle sorgenti produce la forza $\dfrac{2k_eQq_0y}{\left(y^2+a^2\right)^{\frac{3}{2}}}\simeq1{,}8\cdot10^{-7}\,\mathrm N$, con $a=0{,}10\,\mathrm m$, diretta verso l'esterno. La carica di prova si allontana dal punto medio. Per uno spostamento lungo la retta delle sorgenti la forza è invece diretta verso il punto medio.
:::
