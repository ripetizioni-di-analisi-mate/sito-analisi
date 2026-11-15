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

## Conduttori, isolanti e induzione

:::definizione{#conduttori titolo="Mobilità delle cariche"}
In un **conduttore** alcuni portatori di carica si muovono attraverso il materiale. Nei metalli sono elettroni. In un **isolante** le cariche rimangono più legate alle strutture atomiche. Possono comunque spostarsi su distanze microscopiche e produrre polarizzazione.

Si avvicini una bacchetta positiva a un conduttore neutro isolato. Gli elettroni si concentrano nella parte più vicina alla bacchetta e rimane un difetto di elettroni nella parte più lontana. La carica totale del conduttore resta nulla. La parte vicina è attratta e la parte lontana è respinta. Poiché l'interazione è più intensa a distanza minore, il conduttore può essere attratto verso la bacchetta.
:::

:::esempio{titolo="Elettrizzazione per induzione"}
Con la bacchetta positiva ancora vicina, si collega il conduttore a terra. Il collegamento consente l'ingresso di elettroni nel conduttore. Se si stacca il collegamento mentre la bacchetta è ancora presente, la carica aggiunta resta sul conduttore isolato. Quando si allontana la bacchetta, gli elettroni in eccesso si redistribuiscono. La carica netta lasciata sul conduttore è negativa.

Due sfere conduttrici identiche con cariche iniziali $+6{,}0$ e $-2{,}0\,\mathrm{nC}$, messe in contatto e poi separate in condizioni simmetriche, si dividono la carica totale di $+4{,}0\,\mathrm{nC}$. Ognuna resta con $+2{,}0\,\mathrm{nC}$. La divisione in parti uguali deriva dalla simmetria. In generale due conduttori in contatto raggiungono lo stesso potenziale.
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

## Linee di campo e dipolo

:::definizione{#linee titolo="Rappresentazione del campo e momento di dipolo"}
Le **linee di campo** hanno in ogni punto la direzione tangente al campo e il verso della forza su una carica positiva. In elettrostatica partono da sorgenti positive o dall'infinito e terminano su sorgenti negative o all'infinito. Dove il campo è definito e diverso da zero, le linee non si incrociano, perché in quel punto il vettore ha un'unica direzione.

Un **dipolo elettrico** è formato da due cariche $+q$ e $-q$ separate da una distanza $d$. Il momento di dipolo $\vec p$ punta dalla carica negativa a quella positiva e ha modulo $p=qd$. In un campo esterno uniforme le due forze $+q\vec E$ e $-q\vec E$ si annullano nella somma. Sono applicate in punti diversi e possono produrre una rotazione. Se $\theta$ è l'angolo fra $\vec p$ e $\vec E$, il modulo del momento torcente è $M=pE\sin\theta$.

Con $q=1{,}0\,\mathrm{nC}$, $d=2{,}0\,\mathrm{cm}$ ed $E=1000\,\mathrm{N/C}$, il momento massimo vale $2{,}0\cdot10^{-8}\,\mathrm{N\,m}$. Si raggiunge a $90^\circ$, quando il braccio della coppia è $d$. Per orientamento parallelo e antiparallelo, le rette d'azione coincidono e il momento è nullo. L'orientamento parallelo è stabile, perché una piccola rotazione produce un momento opposto alla rotazione.
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
