---
titolo: Circuiti elettrici e leggi di Kirchhoff
sommario: Come leggere uno schema, impostare correnti e tensioni e riconoscere che cosa cambia dopo la commutazione di un circuito RC.
---

## Nodi, rami e componenti ideali

:::definizione{#nodi-rami titolo="Lettura di uno schema elettrico"}
Un **nodo** è l'insieme dei punti collegati da fili ideali senza componenti interposti. Poiché in un filo ideale la caduta di tensione è nulla, tutti i punti del nodo hanno lo stesso potenziale. Un **ramo** collega due nodi e può contenere più componenti. Una **maglia** è un percorso chiuso lungo i rami.

Per riconoscere due resistori in parallelo si seguono i fili da entrambi i terminali. Se ogni terminale del primo ha lo stesso nodo del terminale corrispondente del secondo, entrambi i resistori hanno ai capi la stessa differenza di potenziale. Per riconoscere due resistori in serie si esamina il collegamento tra loro. Se in quel punto confluiscono soltanto i due resistori, la corrente che esce dal primo entra interamente nel secondo.
:::

:::osservazione
Un generatore ideale fissa tra i propri morsetti una differenza di potenziale $\mathcal E$, chiamata **forza elettromotrice**. Si misura in volt e rappresenta l'energia fornita per unità di carica. La pila nello schema ha il morsetto positivo sulla piastra più lunga. Quando la pila alimenta da sola un circuito resistivo, nel circuito esterno la corrente convenzionale va dal morsetto positivo a quello negativo.

Per un ramo il cui verso è incerto, si sceglie una freccia di riferimento prima di scrivere le equazioni. Un valore come $I=-0{,}40\,\mathrm A$ rappresenta una corrente di modulo $0{,}40\,\mathrm A$ diretta nel verso opposto a quella freccia.
:::

## Resistenze in serie

::::teorema{#serie titolo="Stessa corrente e tensioni che si sommano"}
In una serie di resistori la corrente è comune, perché nei collegamenti intermedi non scorre corrente verso altri rami. La **resistenza equivalente** è il valore del singolo resistore che, alla stessa tensione, assorbirebbe la stessa corrente dell'intera serie.
$$
R_{\mathrm{eq}}=R_1+R_2+\cdots.
$$

:::dimostrazione
Per due resistori, la tensione ai capi della serie è la somma delle due cadute. Poiché la corrente è comune, la legge di Ohm dà
$$
\begin{aligned}
\Delta V &= \Delta V_1+\Delta V_2 \\[6pt]
&= IR_1+IR_2 \\[6pt]
&= I(R_1+R_2).
\end{aligned}
$$
La stessa relazione scritta per un unico resistore è $\Delta V=IR_{\mathrm{eq}}$. Il coefficiente di $I$ è quindi $R_1+R_2$.
:::
::::

:::esempio{titolo="Cadute di tensione lungo una serie"}
Nel circuito disegnato, la pila mantiene $12\,\mathrm V$ ai capi della serie. Poiché $R_{\mathrm{eq}}=4\,\Omega+8\,\Omega=12\,\Omega$, in entrambi i resistori scorre
$$
I=\frac{12\,\mathrm V}{12\,\Omega}=1\,\mathrm A.
$$
Sul primo resistore la caduta è $1\,\mathrm A\cdot4\,\Omega=4\,\mathrm V$. Sul secondo è $1\,\mathrm A\cdot8\,\Omega=8\,\mathrm V$. Partendo dal morsetto negativo a $0\,\mathrm V$, si sale a $12\,\mathrm V$ attraverso la pila, poi si scende a $8\,\mathrm V$ fra i due resistori e si torna a $0\,\mathrm V$.

::schema{riferimento=0 linee="0,1.48 0,3 1.4,3;2.8,3 4.2,3;5.6,3 7,3 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;1.4,2.72 2.8,2.72 2.8,3.28 1.4,3.28 1.4,2.72;4.2,2.72 5.6,2.72 5.6,3.28 4.2,3.28 4.2,2.72" frecce="0.8,3.85,2.2,3.85,I" etichette="0.9,1.32,12 V;2.1,2.25,4 Ω;4.9,2.25,8 Ω" titolo="Nella maglia la corrente attraversa entrambi i resistori"}
:::

:::teorema{#partitore titolo="Partitore di tensione"}
Due resistori in serie collegati a una tensione $\Delta V_{\mathrm{tot}}$ sono attraversati da $I=\dfrac{\Delta V_{\mathrm{tot}}}{R_1+R_2}$. Sostituendo nella relazione $\Delta V_1=IR_1$ si ottiene
$$
\Delta V_1=\Delta V_{\mathrm{tot}}\frac{R_1}{R_1+R_2}.
$$
La frazione di tensione ricevuta da $R_1$ coincide con la sua frazione della resistenza totale. Per $R_1=2\,\mathrm{k\Omega}$, $R_2=3\,\mathrm{k\Omega}$ e $\Delta V_{\mathrm{tot}}=10\,\mathrm V$ si ha $\Delta V_1=10\,\mathrm V\cdot\dfrac{2}{5}=4\,\mathrm V$.
:::

:::attenzione
Un carico collegato ai capi di $R_1$ modifica il partitore. Se il carico vale anch'esso $2\,\mathrm{k\Omega}$, il parallelo vale $1\,\mathrm{k\Omega}$ e la tensione su quel gruppo scende a $10\,\mathrm V\cdot\dfrac{1}{1+3}=2{,}5\,\mathrm V$. Si usa quindi la resistenza equivalente del parallelo nel calcolo della tensione sul carico.
:::

## Resistenze in parallelo

::::teorema{#parallelo titolo="Stessa tensione e correnti che si sommano"}
Ogni ramo di un parallelo parte dallo stesso nodo e termina nello stesso nodo. Poiché il potenziale è unico in ciascun nodo, i resistori hanno la stessa tensione $\Delta V$. Nel nodo in cui la corrente si divide, la corrente totale è la somma delle correnti dei rami.
$$
\frac{1}{R_{\mathrm{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots.
$$

:::dimostrazione
Per due rami, dalla legge di Ohm segue
$$
I_{\mathrm{tot}}=\frac{\Delta V}{R_1}+\frac{\Delta V}{R_2}
=\Delta V\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
Il singolo resistore equivalente porta la stessa corrente a parità di $\Delta V$. Il coefficiente di $\Delta V$ è quindi $\dfrac{1}{R_{\mathrm{eq}}}$. Per due resistori si può scrivere anche $R_{\mathrm{eq}}=\dfrac{R_1R_2}{R_1+R_2}$.
:::
::::

:::esempio{titolo="Come si divide la corrente"}
Nel parallelo fra $R_1=6\,\Omega$ e $R_2=3\,\Omega$ la pila mantiene $V_A-V_B=12\,\mathrm V$ su entrambi i rami. Nel ramo da $6\,\Omega$ scorrono $2\,\mathrm A$, quindi il ramo di resistenza dimezzata porta il doppio della corrente, $4\,\mathrm A$. La pila eroga complessivamente $6\,\mathrm A$, da cui si ricava $R_{\mathrm{eq}}=\dfrac{12\,\mathrm V}{6\,\mathrm A}=2\,\Omega$.

::schema{riferimento=0 linee="0,1.48 0,3 6,3 6,2.12;6,0.88 6,0 0,0 0,1.16;3,3 3,2.12;3,0.88 3,0;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;2.73,0.88 3.27,0.88 3.27,2.12 2.73,2.12 2.73,0.88;5.73,0.88 6.27,0.88 6.27,2.12 5.73,2.12 5.73,0.88" punti="3,3,A,pieno;3,0,B,pieno" frecce="3.92,2.16,3.92,0.83,I_1;6.95,2.16,6.95,0.83,I_2" etichette="0.9,1.32,12 V;2.13,1.51,6 Ω;5.06,1.51,3 Ω" titolo="I due resistori sono collegati agli stessi nodi A e B"}
:::

:::osservazione
L'equivalente di un parallelo di resistenze positive è minore della più piccola. Aggiungere un ramo aumenta infatti la corrente totale a tensione fissata. In un circuito misto si può usare un equivalente per trovare la corrente erogata e poi tornare allo schema iniziale. Per esempio, se il parallelo da $2\,\Omega$ è in serie con un resistore da $4\,\Omega$ su $18\,\mathrm V$, la corrente della serie vale $3\,\mathrm A$. Sul parallelo cadono $3\,\mathrm A\cdot2\,\Omega=6\,\mathrm V$, quindi i rami da $6\,\Omega$ e $3\,\Omega$ portano rispettivamente $1\,\mathrm A$ e $2\,\mathrm A$.
:::

## Leggi di Kirchhoff

:::teorema{#kirchhoff titolo="Conservazione della carica e dell'energia"}
La **legge dei nodi** esprime la conservazione della carica. In un nodo del modello circuitale, senza accumulo di carica, la somma delle correnti entranti è uguale alla somma di quelle uscenti. Se entrano $2\,\mathrm A$ e $3\,\mathrm A$ ed esce un ramo da $1\,\mathrm A$, l'altro ramo porta $2\,\mathrm A+3\,\mathrm A-1\,\mathrm A=4\,\mathrm A$ in uscita.

La **legge delle maglie** afferma che la somma algebrica delle variazioni di potenziale lungo un percorso chiuso è zero, se il circuito concentrato non concatena un flusso magnetico variabile. Percorrendo un resistore nel verso scelto come positivo per $I$ si scrive $-RI$. In direzione opposta si scrive $+RI$. Passando nel generatore ideale dal morsetto negativo al positivo si scrive $+\mathcal E$. Nel verso inverso si scrive $-\mathcal E$.
:::

:::esempio{titolo="Due generatori opposti"}
Si sceglie come positivo il verso in cui si attraversa il generatore da $4\,\mathrm V$ dal negativo al positivo. Per due generatori opposti da $4\,\mathrm V$ e $12\,\mathrm V$ e resistenza totale $4\,\Omega$, il bilancio della maglia è
$$
4\,\mathrm V-12\,\mathrm V-(4\,\Omega)I=0
\quad\Longrightarrow\quad
I=-2\,\mathrm A.
$$
Il segno indica che la corrente scorre nel verso imposto dal generatore da $12\,\mathrm V$. Percorrendo la maglia nel verso effettivo, il generatore maggiore fornisce $12\,\mathrm J$ per coulomb. Il minore ne assorbe $4\,\mathrm J$ e la resistenza dissipa gli $8\,\mathrm J$ rimanenti.
:::

:::esempio{titolo="Tre rami con due generatori"}
Tra i nodi $A$ e $B$ sono collegati tre rami. Il primo contiene una pila ideale da $12\,\mathrm V$ in serie con $R_1=6\,\Omega$. Il secondo contiene una pila da $6\,\mathrm V$ con $R_2=3\,\Omega$. Nel terzo c'è solo $R_3=6\,\Omega$. Entrambe le pile hanno il morsetto positivo dalla parte di $A$.

Indicando con $V$ la differenza $V_A-V_B$ e scegliendo tutte le correnti dirette da $A$ verso $B$, la legge di Ohm applicata a ciascun ramo dà
$$
\begin{aligned}
I_1 &= \frac{V-12\,\mathrm V}{6\,\Omega}, \qquad
I_2 = \frac{V-6\,\mathrm V}{3\,\Omega},\\[6pt]
I_3 &= \frac{V}{6\,\Omega}.
\end{aligned}
$$
Poiché tutte le frecce sono uscenti da $A$, il bilancio è $I_1+I_2+I_3=0$. Moltiplicando l'equazione per $6\,\Omega$ si ottiene $4V-24\,\mathrm V=0$, quindi $V=6\,\mathrm V$. Il primo ramo porta $1\,\mathrm A$ da $B$ verso $A$, il secondo ha $I_2=0$ perché $V$ coincide con la tensione della sua pila, e il terzo porta $1\,\mathrm A$ da $A$ verso $B$.

::schema{riferimento=0 linee="0,2.63 0,3.1;0,4.15 0,4.7 7,4.7 7,2.9;7,1.8 7,0 0,0 0,2.34;-0.4,2.63 0.4,2.63;-0.24,2.34 0.24,2.34;-0.26,3.1 0.26,3.1 0.26,4.15 -0.26,4.15 -0.26,3.1;3.5,4.7 3.5,4.15;3.5,3.1 3.5,2.63;3.5,2.34 3.5,0;3.1,2.63 3.9,2.63;3.26,2.34 3.74,2.34;3.24,3.1 3.76,3.1 3.76,4.15 3.24,4.15 3.24,3.1;6.74,1.8 7.26,1.8 7.26,2.9 6.74,2.9 6.74,1.8" punti="3.5,4.7,A,pieno;3.5,0,B,pieno" frecce="0.95,1.73,0.95,0.53,I_1;4.45,1.73,4.45,0.53,I_2;7.95,1.73,7.95,0.53,I_3" etichette="0.89,2.47,12 V;0.9,3.63,6 Ω;4.35,2.47,6 V;4.39,3.63,3 Ω;7.88,2.43,6 Ω" titolo="Tutte le frecce di riferimento puntano dal nodo A al nodo B"}
:::

## Generatore reale

:::teorema{#generatore-reale titolo="Resistenza interna e tensione ai morsetti"}
Un generatore reale si può modellare con una forza elettromotrice ideale $\mathcal E$ in serie con una resistenza interna $r$. Se alimenta un resistore esterno $R$, la stessa corrente attraversa $R$ e $r$. Si ottiene
$$
I=\frac{\mathcal E}{R+r},
\qquad V_{\mathrm{morsetti}}=\mathcal E-rI=IR.
$$
A circuito aperto il voltmetro ideale misura $\mathcal E$, perché la corrente è nulla. Se il carico chiude il circuito, la caduta $rI$ riduce la tensione disponibile all'esterno. Nel modello, un cortocircuito esterno avrebbe $R=0$ e corrente $\dfrac{\mathcal E}{r}$, quindi tutta la potenza si dissiperebbe nella resistenza interna.
:::

:::esempio{titolo="Parametri ricavati da due misure"}
Si misurano $11\,\mathrm V$ quando il generatore eroga $1\,\mathrm A$ e $9\,\mathrm V$ quando eroga $3\,\mathrm A$. La tensione diminuisce di $2\,\mathrm V$ per un aumento di $2\,\mathrm A$, quindi
$$
r=\frac{11\,\mathrm V-9\,\mathrm V}{3\,\mathrm A-1\,\mathrm A}=1\,\Omega.
$$
Poiché a $1\,\mathrm A$ la caduta interna è $1\,\mathrm V$, la forza elettromotrice vale $11\,\mathrm V+1\,\mathrm V=12\,\mathrm V$. Nel grafico è l'intercetta con l'asse delle tensioni.

::grafico{f="12-x" xmin=0 xmax=5 ymin=0 ymax=14 nomi="I,V" punti="0,12,pieno;1,11,pieno;3,9,pieno" titolo="Tensione ai morsetti in volt e corrente in ampere. Dalle misure si risale alla tensione a vuoto e alla resistenza interna."}
:::

## Bilancio delle potenze

:::teorema{#potenze titolo="Potenza erogata e dissipata"}
Per un generatore reale che alimenta un carico resistivo, il bilancio della legge delle maglie è $\mathcal E=I(R+r)$. Moltiplicando per $I$, si passa dal bilancio delle energie per unità di carica a quello delle energie per unità di tempo.
$$
\mathcal E I=I^2R+I^2r.
$$
Se una pila da $12\,\mathrm V$ con $r=1\,\Omega$ alimenta un carico $R=5\,\Omega$, la corrente vale $2\,\mathrm A$. La pila fornisce $24\,\mathrm W$, di cui $20\,\mathrm W$ sono trasferiti al carico e $4\,\mathrm W$ sono dissipati internamente. La frazione utile vale $\dfrac{20}{24}\simeq83{,}3\%$.
:::

:::osservazione
Per una pila ricaricata, la corrente entra dal morsetto positivo. Con $I$ inteso come modulo di quella corrente, la tensione ai morsetti è $\mathcal E+rI$. Nel bilancio delle potenze la parte ideale della pila assorbe $\mathcal E I$, e la resistenza interna dissipa ancora $I^2r$, che è positivo in entrambi i versi.
:::

## Carica di un condensatore attraverso un resistore

:::teorema{#carica-rc titolo="Transitorio di carica RC"}
Un condensatore di capacità $C$ inizialmente scarico viene collegato in serie a una resistenza $R$ e a un generatore ideale $\mathcal E$. La tensione $V_C$ tra le armature vale $\dfrac{q}{C}$, dove $q$ è la carica dell'armatura collegata alla parte positiva del circuito. La maglia dà $\mathcal E=RI+V_C$. Appena chiuso il circuito, $V_C=0$ e tutta la tensione del generatore cade sul resistore. Via via che $q$ cresce, $V_C$ aumenta e la tensione disponibile sul resistore diminuisce.

Nel modello ideale, per $t$ misurato dalla chiusura,
$$
\begin{aligned}
\tau &= RC,\\[6pt]
V_C(t) &= \mathcal E(1-e^{-\frac{t}{\tau}}),\\[6pt]
q(t) &= CV_C(t),\\[6pt]
I(t) &= \frac{\mathcal E}{R}e^{-\frac{t}{\tau}}.
\end{aligned}
$$
La **costante di tempo** $\tau$ si misura in secondi, perché $\Omega\cdot\mathrm F=\mathrm s$. Il rapporto $\dfrac{t}{\tau}$ è adimensionale.
:::

:::esempio{titolo="Carica e corrente dopo una costante di tempo"}
Con $R=10\,\mathrm{k\Omega}$, $C=100\,\mathrm{\mu F}$ ed $\mathcal E=12\,\mathrm V$, il prodotto in unità SI dà $\tau=(10^4\,\Omega)(10^{-4}\,\mathrm F)=1\,\mathrm s$. All'istante $t=\tau$ la tensione del condensatore è $12\,\mathrm V(1-e^{-1})\simeq7{,}59\,\mathrm V$. Sul resistore rimangono $12\,\mathrm V-7{,}59\,\mathrm V=4{,}41\,\mathrm V$, quindi $I\simeq0{,}441\,\mathrm{mA}$. Il condensatore ha raggiunto circa il $63{,}2\%$ della tensione finale e la corrente è scesa al $36{,}8\%$ del valore iniziale.

::grafico{f="1-exp(-x);exp(-x)" xmin=0 xmax=5 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{\mathcal E};\dfrac{I}{I_0}" punti="1,0.63212,pieno;1,0.36788,pieno" titolo="La tensione normalizzata sul condensatore cresce mentre la corrente normalizzata diminuisce"}
:::

## Scarica e continuità della tensione

:::teorema{#scarica-rc titolo="Transitorio di scarica RC"}
Un condensatore a tensione iniziale $V_0>0$ viene scollegato dalla pila e chiuso su un resistore $R$. La corrente nel resistore scorre dall'armatura inizialmente positiva a quella negativa. Poiché la sorgente è stata rimossa, in valore assoluto la tensione sul resistore è $V_C$.
$$
V_C(t)=V_0e^{-\frac{t}{\tau}},
\qquad q(t)=CV_C(t),
\qquad I_{\mathrm{mod}}(t)=\frac{V_C(t)}{R}.
$$
Dopo $\tau$ resta il $36{,}8\%$ della tensione iniziale. Per trovare il tempo di dimezzamento si pone $e^{-\frac{t}{\tau}}=\dfrac{1}{2}$. Il logaritmo dà $t=\tau\ln 2$.
:::

:::esempio{titolo="Tensione ed energia residua"}
L'energia immagazzinata vale $U(t)=\dfrac{1}{2}CV_C(t)^2$. Sostituendo la legge di scarica,
$$
\frac{U(t)}{U(0)}=e^{-\frac{2t}{\tau}}.
$$
All'istante in cui la tensione si è dimezzata, resta un quarto dell'energia. I tre quarti mancanti sono stati dissipati dal resistore nel modello ideale.

::grafico{f="exp(-x);exp(-2*x)" xmin=0 xmax=3 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{V_0};\dfrac{U}{U_0}" punti="0.693147,0.5,pieno;0.693147,0.25,pieno" titolo="Nella scarica l'energia residua diminuisce più rapidamente della tensione"}
:::

:::osservazione
Quando si sposta un interruttore, si parte dalla tensione che il condensatore aveva subito prima della commutazione. Una variazione istantanea di $V_C$ richiederebbe infatti una variazione istantanea di carica $q=CV_C$, impossibile con una corrente finita. La corrente può invece cambiare subito, perché è determinata dal collegamento del resistore dopo la commutazione.
:::
