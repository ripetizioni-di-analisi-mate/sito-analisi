---
titolo: "Sistemi di riferimento e relatività galileiana"
sommario: "Posizioni e velocità relative, incontri, moti di barche e nastri, sistemi inerziali e forze apparenti."
---

## Posizione relativa

:::definizione{#posizioni-relative titolo="Due osservatori dello stesso moto"}
Un sistema di riferimento comprende assi e orologio rispetto ai quali si descrive il moto. Un passeggero seduto è fermo rispetto al treno, ma si muove rispetto alla stazione. La descrizione cambia perché cambia l'osservatore; la posizione non è una proprietà indipendente dal riferimento.

Se il sistema $S'$ trasla rispetto a $S$ con velocità costante $u$ lungo $x$, gli assi sono paralleli e le origini coincidono a $t=0$, allora $x=x'+ut$ e $y=y'$. Il tempo è lo stesso, $t=t'$, nella meccanica galileiana. Con $u=5\,\mathrm{m/s}$ e $x'=2\,\mathrm m$, a $t=3\,\mathrm s$ si ottiene $x=17\,\mathrm m$.
:::

## Composizione delle velocità

:::teorema{#velocita-relative titolo="Legge galileiana delle velocità"}
Nelle condizioni precedenti,
$$
\vec v=\vec v'+\vec u.
$$
Per ricavarla si considerano due istanti separati da $\Delta t$. Lo spostamento nel riferimento $S$ è la somma dello spostamento relativo e di quello dell'origine mobile. Dividendo per lo stesso intervallo di tempo si ottiene la somma delle velocità.

Un passeggero cammina a $1{,}5\,\mathrm{m/s}$ verso la testa di un treno che viaggia a $12\,\mathrm{m/s}$; rispetto al suolo ha velocità $13{,}5\,\mathrm{m/s}$. Camminando verso la coda ha componente relativa $-1{,}5\,\mathrm{m/s}$ e velocità al suolo $10{,}5\,\mathrm{m/s}$. I segni vanno assegnati nello stesso asse. La legge classica è adeguata quando le velocità sono molto inferiori a quella della luce.
:::

## Incontri e inseguimenti

:::teorema{#incontri titolo="Velocità di avvicinamento"}
Per due corpi sullo stesso asse la velocità relativa è $v_{A/B}=v_A-v_B$. Se la distanza iniziale è $d$ e il corpo dietro è più veloce, il tempo per raggiungere l'altro è $t=\dfrac{d}{v_A-v_B}$. Con $d=60\,\mathrm m$, $v_A=8\,\mathrm{m/s}$ e $v_B=5\,\mathrm{m/s}$ si trova $t=20\,\mathrm s$.

Quando i corpi viaggiano uno incontro all'altro, le componenti hanno segno opposto; la velocità con cui diminuisce la distanza è la somma dei loro moduli. Se il ritardo di partenza è diverso da zero, le posizioni iniziali devono essere riferite allo stesso istante. Un tempo negativo indica che l'incontro precede l'origine temporale scelta, quindi va confrontato con i dati del problema.
:::

::grafico{f="8*x;60+5*x" xmin=0 xmax=24 ymin=0 ymax=200 nomi="t,x" legenda="inseguitore;corpo davanti" titolo="Inseguimento: le posizioni coincidono a $t=20\,\mathrm s$"}

## Attraversare un fiume

:::osservazione{#moto-fiume titolo="Somma vettoriale e deriva"}
La velocità della barca rispetto alla riva è la somma della velocità rispetto all'acqua e di quella della corrente. Se la barca punta perpendicolarmente alle sponde con velocità relativa $v_b$, la corrente $u$ è parallela alle sponde e la larghezza è $d$, il tempo di attraversamento è $t=\dfrac d{v_b}$. La deriva vale $x=ut$ e il modulo della velocità rispetto alla riva è $\sqrt{v_b^2+u^2}$.

Con $d=40\,\mathrm m$, $v_b=4\,\mathrm{m/s}$ e $u=3\,\mathrm{m/s}$ si hanno $t=10\,\mathrm s$, deriva $30\,\mathrm m$ e velocità al suolo $5\,\mathrm{m/s}$. Per arrivare esattamente di fronte, la componente della velocità della barca contraria alla corrente deve uguagliare $u$. Ciò è possibile soltanto se $v_b>u$ per un attraversamento con componente trasversale positiva.
:::

::grafico{vettori="0,0,3,0,u;3,0,3,4,v′;0,0,3,4,v" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="Composizione di corrente e velocità relativa della barca"}

## Riferimenti inerziali

:::definizione{#inerziali titolo="Invarianza dell’accelerazione"}
Un **riferimento inerziale** è un riferimento nel quale un corpo isolato resta fermo oppure si muove di moto rettilineo uniforme. Un sistema che trasla a velocità costante rispetto a un riferimento inerziale è anch'esso inerziale.

Poiché la velocità di trascinamento $\vec u$ è costante, le variazioni di $\vec v$ e $\vec v'$ nello stesso intervallo coincidono. Pertanto $\vec a=\vec a'$. Le leggi della meccanica hanno la stessa forma in tutti i riferimenti inerziali. In una cabina che procede rettilineamente a velocità costante, una pallina lasciata cadere mantiene la velocità orizzontale iniziale e ricade sotto il punto di rilascio rispetto alla cabina, nelle ipotesi ideali del modello.
:::

## Sistemi accelerati

:::osservazione{#apparenti titolo="Forza apparente in una traslazione"}
Un sistema che accelera rispetto a un riferimento inerziale non è inerziale. Se la sua accelerazione è $\vec A$ e gli assi restano paralleli, l'accelerazione relativa è $\vec a'=\vec a-\vec A$. Scrivendo la dinamica nel sistema mobile compare il termine $\vec F_{\mathrm{app}}=-m\vec A$.

Un oggetto libero visto da una cabina che accelera in avanti sembra accelerare all'indietro. La forza apparente descrive l'effetto della scelta del riferimento; non è prodotta da un altro corpo. Per una massa di $2{,}0\,\mathrm{kg}$ e una cabina con accelerazione $1{,}5\,\mathrm{m/s^2}$ in avanti, il termine apparente ha modulo $3{,}0\,\mathrm N$ e verso opposto. Nei sistemi rotanti compaiono ulteriori termini, che non sono trattati con la sola formula della traslazione.
:::
