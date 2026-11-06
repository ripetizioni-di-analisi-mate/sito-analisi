---
titolo: Circuiti elettrici e leggi di Kirchhoff
sommario: Resistenze in serie e parallelo, nodi e maglie, generatori reali, bilanci di potenza e transitori di carica e scarica di un condensatore.
---

## Nodi, rami e componenti ideali

:::definizione{#nodi-rami titolo="Lettura di uno schema elettrico"}
Un **nodo** è un insieme di punti collegati da fili ideali senza componenti interposti; tutti quei punti hanno lo stesso potenziale. Un **ramo** collega due nodi e può contenere uno o più componenti. Una **maglia** è un percorso chiuso nello schema.

Nei fili ideali la resistenza è nulla. I disegni possono avere forme geometriche diverse e rappresentare lo stesso circuito, se i collegamenti fra i nodi restano gli stessi. Due resistori sono in parallelo quando sono collegati agli stessi due nodi; sono in serie quando la corrente che esce dal primo deve attraversare il secondo senza una diramazione intermedia.

Il generatore ideale impone una tensione $\mathcal E$, chiamata forza elettromotrice e misurata in volt. La parola forza è parte del nome storico: $\mathcal E$ esprime energia fornita per unità di carica. Le correnti dei rami possono essere inizialmente scelte con versi arbitrari; un risultato negativo indicherà il verso opposto.
:::

## Resistenze in serie

::::teorema{#serie titolo="Stessa corrente e tensioni che si sommano"}
Resistori in serie sono attraversati dalla stessa corrente. La resistenza equivalente è
$$
R_{\mathrm{eq}}=R_1+R_2+\cdots.
$$
Per due resistori da $4{,}0$ e $8{,}0\,\Omega$ collegati in serie a $12\,\mathrm V$, $R_{\mathrm{eq}}=12\,\Omega$ e $I=1{,}0\,\mathrm A$. Le cadute di tensione sono $4{,}0$ e $8{,}0\,\mathrm V$ e la loro somma restituisce la tensione del generatore.

:::dimostrazione
La tensione totale è $\Delta V=\Delta V_1+\Delta V_2$. Applicando la legge di Ohm a ogni componente, $\Delta V=IR_1+IR_2=I(R_1+R_2)$. Confrontando con $\Delta V=IR_{\mathrm{eq}}$ si ricava la somma delle resistenze.
:::
::::

:::teorema{#partitore titolo="Partitore di tensione"}
In una serie attraversata dalla stessa corrente, la tensione su $R_1$ è $\Delta V_1=\Delta V_{\mathrm{tot}}\dfrac{R_1}{R_1+R_2}$. Il risultato presuppone che il punto di uscita non sia caricato da un altro ramo che modifichi il circuito. Con $R_1=2{,}0\,\mathrm{k\Omega}$, $R_2=3{,}0\,\mathrm{k\Omega}$ e $\Delta V_{\mathrm{tot}}=10\,\mathrm V$, la caduta su $R_1$ è $4{,}0\,\mathrm V$.
:::

## Resistenze in parallelo

::::teorema{#parallelo titolo="Stessa tensione e correnti che si sommano"}
Resistori in parallelo hanno la stessa tensione. La corrente totale è la somma delle correnti dei rami, quindi
$$
\frac1{R_{\mathrm{eq}}}=\frac1{R_1}+\frac1{R_2}+\cdots.
$$
Per due resistori si ottiene $R_{\mathrm{eq}}=\dfrac{R_1R_2}{R_1+R_2}$. Con $6{,}0$ e $3{,}0\,\Omega$ si ha $R_{\mathrm{eq}}=2{,}0\,\Omega$. A $12\,\mathrm V$ le correnti sono $2{,}0$ e $4{,}0\,\mathrm A$, per un totale di $6{,}0\,\mathrm A$. Il ramo con resistenza minore è attraversato dalla corrente maggiore.

:::dimostrazione
Le correnti sono $I_1=\dfrac{\Delta V}{R_1}$ e $I_2=\dfrac{\Delta V}{R_2}$. Sommando e usando $I_{\mathrm{tot}}=\dfrac{\Delta V}{R_{\mathrm{eq}}}$ si ha $\dfrac{\Delta V}{R_{\mathrm{eq}}}=\Delta V\left(\dfrac1{R_1}+\dfrac1{R_2}\right)$. La tensione si semplifica e si trova la formula.
:::
::::

:::osservazione
La resistenza equivalente di un parallelo di resistenze positive è minore della più piccola. Aggiungere un ramo offre un ulteriore percorso alla corrente e aumenta la corrente totale a tensione fissata. Nel calcolo di un circuito misto si semplificano prima i gruppi che sono effettivamente in serie o parallelo e poi si ricostruiscono tensioni e correnti dei singoli componenti.
:::

## Leggi di Kirchhoff

:::teorema{#kirchhoff titolo="Conservazione della carica e dell'energia"}
La **legge dei nodi** afferma che in regime stazionario la somma delle correnti entranti in un nodo è uguale alla somma delle uscenti. Esprime la conservazione della carica quando nel nodo non c'è accumulo netto. Se entrano $2{,}0$ e $3{,}0\,\mathrm A$ ed esce un ramo da $1{,}0\,\mathrm A$, l'altro ramo uscente porta $4{,}0\,\mathrm A$.

La **legge delle maglie** afferma che la somma algebrica delle variazioni di potenziale lungo un percorso chiuso è zero, per circuiti concentrati senza flusso magnetico variabile concatenato. Attraversando un resistore nel verso della corrente si ha $-IR$; nel verso opposto si ha $+IR$. Attraversando un generatore ideale dal morsetto negativo al positivo si ha $+\mathcal E$; nel verso opposto $-\mathcal E$.

In una maglia con generatori opposti da $12$ e $4{,}0\,\mathrm V$ e resistenza totale $4{,}0\,\Omega$, il bilancio nel verso imposto dal generatore maggiore è $12-4-4I=0$, quindi $I=2{,}0\,\mathrm A$. Un verso iniziale opposto avrebbe dato $I=-2{,}0\,\mathrm A$, descrivendo la stessa corrente fisica.
:::

## Generatore reale

:::teorema{#generatore-reale titolo="Resistenza interna e tensione ai morsetti"}
Un generatore reale può essere modellato mediante una forza elettromotrice ideale $\mathcal E$ in serie con una resistenza interna $r$. Quando eroga corrente $I>0$ a un carico $R$,
$$
I=\frac{\mathcal E}{R+r},\qquad
V_{\mathrm{morsetti}}=\mathcal E-rI=IR.
$$
Con $\mathcal E=12\,\mathrm V$, $r=1{,}0\,\Omega$ e $R=5{,}0\,\Omega$, $I=2{,}0\,\mathrm A$ e la tensione ai morsetti è $10\,\mathrm V$. A circuito aperto $I=0$ e la tensione coincide con la forza elettromotrice. Nel modello il cortocircuito $R=0$ darebbe $I=\dfrac{\mathcal E}{r}$, con tutta la potenza dissipata internamente.

La retta $V_{\mathrm{morsetti}}$ in funzione di $I$ ha intercetta $\mathcal E$ e pendenza $-r$. Due misure stazionarie permettono quindi di ricavare i parametri del modello. Se invece il generatore viene ricaricato e la corrente entra dal morsetto positivo, la relazione dei segni va adattata al verso effettivo della corrente.
:::

::grafico{f="12-x" xmin=0 xmax=6 ymin=0 ymax=14 nomi="I,V" titolo="Generatore da $12\,\mathrm V$ con resistenza interna $1{,}0\,\Omega$: la tensione ai morsetti diminuisce quando aumenta la corrente erogata"}

## Bilancio delle potenze

:::teorema{#potenze titolo="Potenza erogata e dissipata"}
Nel modello del generatore reale che alimenta un resistore,
$$
P_{\mathrm{gen}}=\mathcal E I,
\qquad P_R=I^2R,
\qquad P_r=I^2r,
\qquad P_{\mathrm{gen}}=P_R+P_r.
$$
Nell'esempio precedente il generatore fornisce $24\,\mathrm W$, il carico riceve $20\,\mathrm W$ e la resistenza interna dissipa $4{,}0\,\mathrm W$. La frazione trasferita al carico vale $\dfrac{R}{R+r}$, cioè circa $83{,}3\%$ in quel caso.

Per un circuito con più generatori, il segno della potenza scambiata dipende dal verso della corrente ai morsetti. Un generatore attraversato da corrente entrante nel morsetto positivo assorbe energia nel modello del circuito. La verifica delle potenze richiede quindi di considerare i generatori che erogano e quelli che assorbono, oltre alle dissipazioni. La somma delle potenze trasferite è coerente con la legge delle maglie.
:::

## Carica di un condensatore attraverso un resistore

:::teorema{#carica-rc titolo="Transitorio di carica RC"}
Un condensatore inizialmente scarico di capacità $C$ viene collegato a un generatore ideale $\mathcal E$ attraverso una resistenza totale $R$. Nel modello ideale,
$$
\tau=RC,\qquad
q(t)=C\mathcal E(1-e^{-t/\tau}),
$$
$$
V_C(t)=\mathcal E(1-e^{-t/\tau}),\qquad
I(t)=\frac{\mathcal E}{R}e^{-t/\tau}.
$$
$\tau$ è la **costante di tempo** e si misura in secondi, perché $\Omega\cdot\mathrm F=\mathrm s$. All'inizio la tensione del condensatore è zero e la corrente è $\dfrac{\mathcal E}{R}$. Dopo molto tempo il condensatore raggiunge la tensione del generatore e la corrente tende a zero.

A $t=\tau$ la tensione è circa il $63{,}2\%$ del valore finale, mentre la corrente è circa il $36{,}8\%$ del valore iniziale. Con $R=10\,\mathrm{k\Omega}$ e $C=100\,\mathrm{\mu F}$, $\tau=1{,}0\,\mathrm s$. A $5\tau$ la carica supera il $99\%$ del valore finale. La legge delle maglie è $\mathcal E-RI-V_C=0$ in ogni istante del modello.
:::

::grafico{f="1-exp(-x);exp(-x)" xmin=0 xmax=5 ymin=0 ymax=2 nomi="t/τ,y" legenda="Vc/E;I/I₀" titolo="Carica RC: la tensione normalizzata cresce verso uno mentre la corrente normalizzata diminuisce verso zero"}

## Scarica e continuità della tensione

:::teorema{#scarica-rc titolo="Transitorio di scarica RC"}
Se un condensatore carico a tensione iniziale $V_0$ viene scollegato dal generatore e connesso a un resistore $R$,
$$
V_C(t)=V_0e^{-t/(RC)},\qquad
q(t)=CV_0e^{-t/(RC)}.
$$
Il modulo della corrente di scarica è $\dfrac{V_0}{R}e^{-t/(RC)}$. Il verso va dall'armatura inizialmente positiva a quella negativa attraverso il resistore. Dopo $\tau$ la tensione resta al $36{,}8\%$ del valore iniziale; dopo $\tau\ln2$ si dimezza.

L'energia iniziale $\dfrac12CV_0^2$ viene dissipata nel resistore nel modello senza altre perdite. L'energia diminuisce come $e^{-2t/\tau}$, perché dipende dal quadrato della tensione. La tensione di un condensatore ideale non cambia istantaneamente con corrente finita: una variazione di tensione richiede infatti una variazione di carica. Questo permette di fissare la condizione iniziale quando si sposta un interruttore. Le formule di carica e scarica corrispondono a collegamenti diversi e si scelgono leggendo il circuito dopo la commutazione.
:::
