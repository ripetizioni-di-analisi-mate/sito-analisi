---
titolo: "Calore e calorimetria"
sommario: "Calore specifico, capacità termica, equilibrio, potenza e trasmissione del calore."
---

## Calore e temperatura

:::definizione{#calore titolo="Energia trasferita per differenza di temperatura"}
Il **calore** è l'energia che passa da un corpo a un altro perché i due corpi hanno temperature diverse. Il calore passa dal corpo più caldo a quello più freddo. Si indica con $Q$ e si misura in joule ($\mathrm J$), l'unità dell'energia nel Sistema Internazionale (SI) delle unità di misura. Due corpi alla stessa temperatura non si scambiano calore, e si dice che sono in **equilibrio termico**.

Il **sistema** è il corpo, o l'insieme di corpi, che si sceglie di studiare. Il **bilancio** del sistema è il conto dell'energia che entra e di quella che esce. Nel bilancio si scrive $Q>0$ se il sistema riceve energia come calore e $Q<0$ se la cede. Le parole *assorbito* e *ceduto* indicano per quale corpo si sta scrivendo il bilancio.
:::

:::osservazione{titolo="Segno del calore nel bilancio"}
Una tazza calda posata su un piattino più freddo gli cede energia. Per la tazza lo scambio ha segno negativo, perché la tazza perde energia. Per il piattino lo stesso scambio ha segno positivo, perché il piattino riceve energia. Se il sistema è l'insieme di tazza e piattino, lo scambio avviene al suo interno e non cambia l'energia totale. Gli scambi con l'aria, invece, attraversano il contorno dell'insieme, cioè la superficie che lo separa da ciò che sta fuori.
:::

:::osservazione{#confine-termico titolo="Scegliere il confine del sistema"}
Il **confine** del sistema è la superficie che separa il sistema da tutto il resto, che si chiama **ambiente**. Se il sistema è la sola acqua contenuta in una tazza, sia la tazza sia l'aria stanno fuori dal confine. Quando l'acqua si scalda, una parte dell'energia arrivata a tazza e acqua insieme resta alla tazza, quindi la misura dell'energia arrivata all'insieme non basta per sapere quanta energia abbia ricevuto l'acqua.

Se il sistema è l'insieme di tazza e acqua, lo scambio fra tazza e acqua è interno e nel bilancio non compare. Nel bilancio compaiono invece:
- gli scambi con l'aria;
- l'energia fornita da un eventuale riscaldatore;
- ogni altra energia che attraversa il confine scelto.

Per questo il nome del sistema si scrive prima del bilancio, così ogni contributo viene assegnato al corpo giusto.

Due procedimenti diversi possono portare la stessa acqua alla stessa temperatura finale.
- L'acqua si scalda in un recipiente più caldo. In questo caso riceve energia come calore, per la differenza di temperatura.
- L'acqua si scalda in un recipiente **isolato**, cioè che non scambia calore con l'esterno, mentre un agitatore la mescola a lungo. In questo caso riceve energia come **lavoro**, cioè per effetto della forza che l'agitatore esercita mentre si muove.

La variazione di temperatura può quindi essere la stessa, mentre è diverso il modo in cui l'energia è arrivata. Perciò dalla variazione di temperatura si ricava il calore scambiato solo quando il testo del problema indica gli altri contributi, per esempio dicendo che sono trascurabili.
:::

## Calore specifico

:::teorema{#specifico titolo="Riscaldamento senza cambiamenti di stato"}
Un corpo di massa $m$ resta nella stessa **fase**, cioè rimane solido, liquido o gassoso, e cambia temperatura soltanto perché scambia calore. Il calore necessario è **proporzionale** alla massa, cioè una massa doppia richiede calore doppio. È anche proporzionale alla variazione di temperatura, quindi un aumento doppio richiede calore doppio. Infine dipende dal materiale. Con i segni si scrive

$$
Q=mc\Delta T,\qquad \Delta T=T_f-T_i.
$$

La lettera greca $\Delta$ (*delta*) indica una variazione, cioè il valore finale meno il valore iniziale. Qui $T_i$ è la temperatura iniziale e $T_f$ quella finale. Una variazione di $1\,{}^\circ\mathrm C$ (grado Celsius) è uguale a una variazione di $1\,\mathrm K$ (kelvin), quindi $\Delta T$ ha lo stesso valore nelle due unità. Da $10\,{}^\circ\mathrm C$ a $40\,{}^\circ\mathrm C$ si ha $\Delta T=(40-10)\,\mathrm K=30\,\mathrm K$.

Il numero $c$ è il **calore specifico** del materiale. È l'energia che serve per aumentare di un kelvin la temperatura di un chilogrammo di quel materiale e si misura in $\mathrm{J/(kg\,K)}$, *joule al chilogrammo per kelvin*. La formula vale quando $c$ è circa costante nell'intervallo di temperatura considerato.

Poiché $m>0$ e $c>0$ per i materiali trattati, il segno di $Q$ è quello di $\Delta T$.
- Se il corpo si scalda, $\Delta T>0$ e $Q>0$, cioè il calore è assorbito.
- Se il corpo si raffredda, $\Delta T<0$ e il calcolo dà un numero negativo. Il **modulo** $|Q|$, cioè il valore senza segno, è il calore ceduto.

Durante un cambiamento di stato, come la fusione del ghiaccio o l'ebollizione dell'acqua, il corpo assorbe calore mentre la sua temperatura resta costante. Perciò in quel tratto la formula $Q=mc\Delta T$ non si applica. Questi casi si studiano nel capitolo sui cambiamenti di stato, con il calore latente.
:::

:::esempio{titolo="La stessa energia in rame e in acqua"}
Due campioni, cioè due porzioni di materiale, hanno entrambi massa $0{,}50\,\mathrm{kg}$ e assorbono separatamente $2100\,\mathrm J$. Uno è d'acqua, di simbolo chimico $\mathrm{H_2O}$, con $c=4200\,\mathrm{J/(kg\,K)}$. L'altro è di rame, di simbolo $\mathrm{Cu}$, con $c=400\,\mathrm{J/(kg\,K)}$. Entrambi rimangono nella stessa fase. Dividendo entrambi i membri di $Q=mc\Delta T$ per $mc$ si ricava $\Delta T=\dfrac{Q}{mc}$, quindi

$$
\Delta T_{\mathrm{H_2O}}=\frac{2100}{0{,}50\cdot4200}\,\mathrm K=\frac{2100}{2100}\,\mathrm K=1{,}0\,\mathrm K,\qquad \Delta T_{\mathrm{Cu}}=\frac{2100}{0{,}50\cdot400}\,\mathrm K=\frac{2100}{200}\,\mathrm K=10{,}5\,\mathrm K.
$$

Con la stessa energia il rame si scalda di più, perché ogni kelvin di aumento richiede $200\,\mathrm J$ per il rame e $2100\,\mathrm J$ per l'acqua. Nel grafico di $Q$ in kilojoule ($1\,\mathrm{kJ}=1000\,\mathrm J$) in funzione di $\Delta T$ ogni materiale è una retta che parte dall'origine, e la retta dell'acqua è la più ripida.

::grafico{f="2.1*x;0.2*x" legenda="\mathrm{H_2O};\mathrm{Cu}" punti="1,2.1,pieno;10.5,2.1,pieno" xmin=0 xmax=12 ymin=0 ymax=4 nomi="ΔT (K),Q (kJ)" titolo="I due punti alla stessa quota corrispondono a 2,1 kJ. Le loro ascisse sono differenti."}
:::

:::esempio{titolo="Riscaldare e raffreddare lo stesso campione"}
Un campione di massa $0{,}30\,\mathrm{kg}$ ha calore specifico $900\,\mathrm{J/(kg\,K)}$ e rimane nella stessa fase. Ogni kelvin di aumento richiede $0{,}30\cdot900=270\,\mathrm J$.
- Se passa da $10$ a $40\,{}^\circ\mathrm C$, la variazione è $+30\,\mathrm K$ e il calore assorbito vale $270\cdot30=+8100\,\mathrm J$.
- Se torna da $40$ a $10\,{}^\circ\mathrm C$, la variazione è $-30\,\mathrm K$ e il calore vale $270\cdot(-30)=-8100\,\mathrm J$.

Il secondo risultato vale se il calore specifico è lo stesso e non ci sono altri scambi di energia.

Il riscaldamento si può anche dividere in due tratti, da $10$ a $25\,{}^\circ\mathrm C$ e da $25$ a $40\,{}^\circ\mathrm C$. Ogni tratto misura $15\,\mathrm K$, quindi ogni contributo vale $270\cdot15=4050\,\mathrm J$. La somma $4050+4050$ restituisce $8100\,\mathrm J$, perché nei due tratti ogni kelvin richiede gli stessi $270\,\mathrm J$. La **pendenza** di una retta è di quanto sale la retta per ogni unità di spostamento in orizzontale. Se le misure mostrano che il grafico del calore in funzione della temperatura ha pendenze diverse nei due tratti, per ogni tratto si usa il proprio numero di joule per kelvin.
:::

## Capacità termica

:::definizione{#capacita titolo="La risposta termica dell’intero corpo"}
La **capacità termica** $C$ di un corpo è l'energia che il corpo intero assorbe per ogni kelvin di aumento della temperatura, nelle condizioni considerate. Si misura in $\mathrm{J/K}$, *joule al kelvin*. Per un corpo **omogeneo**, cioè fatto dello stesso materiale in ogni punto, di massa $m$, la capacità termica è il calore specifico moltiplicato per la massa. Sostituendo $C$ al prodotto $mc$ nella formula del calore si ottiene la seconda relazione.

$$
C=mc,\qquad Q=C\Delta T.
$$

Due parti già in equilibrio, cioè alla stessa temperatura, si scaldano insieme di $\Delta T$. L'energia totale è $C_1\Delta T+C_2\Delta T$, e raccogliendo $\Delta T$ si ottiene $(C_1+C_2)\Delta T$. La somma delle capacità vale solo per le parti che hanno la stessa variazione di temperatura.

In un grafico con $Q$ sull'asse verticale e $\Delta T$ sull'asse orizzontale, un corpo è rappresentato da una retta che parte dall'origine. La sua pendenza, cioè l'aumento di $Q$ quando $\Delta T$ aumenta di $1\,\mathrm K$, è la capacità termica in $\mathrm{J/K}$. Se gli assi sono scambiati, con $\Delta T$ in verticale e $Q$ in orizzontale, la pendenza vale $\dfrac1C$ e si misura in $\mathrm{K/J}$.
:::

:::esempio{titolo="Separare il campione dal contenitore"}
Una massa di $0{,}40\,\mathrm{kg}$ si scalda insieme al suo contenitore. Il grafico misurato di $Q$ in funzione di $\Delta T$ ha pendenza $500\,\mathrm{J/K}$, che è la capacità termica di campione e contenitore insieme. Il contenitore da solo ha capacità $80\,\mathrm{J/K}$. La capacità del campione è quindi $(500-80)\,\mathrm{J/K}=420\,\mathrm{J/K}$. Dividendo per la massa si ottiene $c=\dfrac{420}{0{,}40}\,\mathrm{J/(kg\,K)}=1050\,\mathrm{J/(kg\,K)}$. Se si attribuisse al campione tutta la pendenza, si otterrebbe $\dfrac{500}{0{,}40}\,\mathrm{J/(kg\,K)}=1250\,\mathrm{J/(kg\,K)}$, un valore troppo grande.

::grafico{f="0.5*x;0.42*x;0.08*x" punti="10,5,pieno;10,4.2,pieno;10,0.8,pieno" xmin=0 xmax=12 ymin=0 ymax=7 nomi="ΔT (K),Q (kJ)" legenda="\mathrm{totale};\mathrm{campione};\mathrm{recipiente}" titolo="A 10 K di aumento il campione assorbe 4,2 kJ e il recipiente 0,8 kJ."}
:::

:::esempio{#pendenze-calorimetro titolo="Isolare il calore specifico con due masse"}
Uno stesso recipiente serve a scaldare, in due prove, due masse diverse dello stesso materiale. In ciascuna prova la massa e il recipiente hanno sempre la stessa temperatura. La **potenza dispersa**, cioè l'energia che ogni secondo va verso l'aria, è trascurabile, cioè così piccola da poter essere ignorata. Il grafico del calore richiesto in funzione della variazione comune di temperatura ha come pendenza la capacità dell'insieme. Questa è la somma della capacità $C_{\mathrm{rec}}$ del recipiente e della capacità $mc$ del campione, $C_{\mathrm{tot}}=C_{\mathrm{rec}}+mc$.
- Per $m_1=0{,}20\,\mathrm{kg}$ la pendenza è $120\,\mathrm{J/K}$.
- Per $m_2=0{,}60\,\mathrm{kg}$ la pendenza è $280\,\mathrm{J/K}$.

Dalla prima alla seconda prova la massa aumenta di $(0{,}60-0{,}20)\,\mathrm{kg}=0{,}40\,\mathrm{kg}$ e la pendenza aumenta di $(280-120)\,\mathrm{J/K}=160\,\mathrm{J/K}$. Il termine del recipiente è uguale nelle due prove, quindi la sottrazione lo elimina e l'aumento di pendenza è dovuto soltanto alla massa aggiunta. Poi $C_{\mathrm{rec}}$ si ricava dalla prima prova, togliendo dalla pendenza la capacità del campione.

$$
\begin{aligned}
c&=\frac{280-120}{0{,}60-0{,}20}\,\mathrm{J/(kg\,K)}=\frac{160}{0{,}40}\,\mathrm{J/(kg\,K)}=400\,\mathrm{J/(kg\,K)}\\[6pt]
C_{\mathrm{rec}}&=(120-0{,}20\cdot 400)\,\mathrm{J/K}=(120-80)\,\mathrm{J/K}=40\,\mathrm{J/K}.
\end{aligned}
$$

Nella seconda prova recipiente e campione danno insieme $(40+0{,}60\cdot400)\,\mathrm{J/K}=(40+240)\,\mathrm{J/K}=280\,\mathrm{J/K}$, come nella misura. Con una sola prova si trova soltanto la capacità complessiva. Per dividerla fra recipiente e campione occorre conoscere una delle due capacità oppure fare una misura indipendente.

::grafico{f="120*x;280*x" punti="10,1200,pieno;10,2800,pieno" xmin=0 xmax=12 ymin=0 ymax=3500 nomi="ΔT (K),Q (J)" legenda="0{,}20\,\mathrm{kg};0{,}60\,\mathrm{kg}" titolo="Le due pendenze si riferiscono a campione e recipiente insieme. La loro differenza isola il contributo dei 0,40 kg aggiunti."}
:::

## Equilibrio termico

::::teorema{#equilibrio titolo="Bilancio delle energie in un sistema isolato"}
Due corpi a temperature diverse messi a contatto si scambiano calore finché raggiungono una temperatura comune $T_f$, detta **temperatura di equilibrio**. Il corpo 1 ha capacità termica $C_1>0$ e temperatura iniziale $T_{1,i}$. Il corpo 2 ha capacità $C_2>0$ e temperatura iniziale $T_{2,i}$; nei pedici la $i$ sta per *iniziale*. Le ipotesi sono tre:
- il sistema è isolato, cioè non scambia energia con l'esterno;
- i corpi restano nella stessa fase;
- fra i corpi avvengono soltanto scambi di calore.

Allora il bilancio dà

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}.
$$

Questa è una **media pesata**, cioè una media in cui ogni valore conta in proporzione al proprio peso, che qui è la capacità termica del corpo. Perciò $T_f$ è compresa fra le due temperature iniziali ed è più vicina a quella del corpo con capacità maggiore. Se le capacità sono uguali, si ottiene la media aritmetica $\dfrac{T_{1,i}+T_{2,i}}{2}$. Se i corpi sono della stessa sostanza, si sostituisce $C=mc$ e il calore specifico si semplifica, quindi i pesi sono le masse. Con tre o più corpi si aggiunge un termine per ciascun corpo al numeratore e al denominatore.

:::dimostrazione
Il sistema è isolato, quindi l'energia totale non cambia e il calore ceduto da un corpo è assorbito dall'altro. In simboli si scrive $Q_1+Q_2=0$. Sostituendo $Q_1=C_1(T_f-T_{1,i})$ e $Q_2=C_2(T_f-T_{2,i})$ si ottiene

$$
C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=0.
$$

Per la proprietà distributiva $C_1(T_f-T_{1,i})=C_1T_f-C_1T_{1,i}$, e lo stesso vale per il secondo termine. Si portano poi a destra i termini senza $T_f$, cambiando loro il segno:

$$
C_1T_f+C_2T_f=C_1T_{1,i}+C_2T_{2,i}.
$$

Si raccoglie $T_f$ a sinistra, ottenendo $(C_1+C_2)T_f$, e si divide per $C_1+C_2$, che è positivo e quindi diverso da zero. I pesi $\dfrac{C_1}{C_1+C_2}$ e $\dfrac{C_2}{C_1+C_2}$ sono positivi e la loro somma è $\dfrac{C_1+C_2}{C_1+C_2}=1$. Perciò $T_f$ è compresa fra le due temperature iniziali.
:::
::::

:::esempio{titolo="Leggere le due quantità di calore"}
Si mescolano $0{,}25\,\mathrm{kg}$ d'acqua a $60\,{}^\circ\mathrm C$ e $0{,}75\,\mathrm{kg}$ d'acqua a $20\,{}^\circ\mathrm C$, trascurando il contenitore e gli scambi con l'ambiente. La sostanza è la stessa, quindi i pesi sono le masse:

$$
T_f=\frac{0{,}25\cdot60+0{,}75\cdot20}{0{,}25+0{,}75}\,{}^\circ\mathrm C=\frac{15+15}{1{,}00}\,{}^\circ\mathrm C=30\,{}^\circ\mathrm C.
$$

Il calore specifico è comune, quindi i due calori si confrontano anche senza conoscerne il valore, dividendo ciascuno per $c$. Si ottengono $\dfrac{Q_1}{c}=0{,}25\cdot(30-60)\,\mathrm{kg\,K}=-7{,}5\,\mathrm{kg\,K}$ e $\dfrac{Q_2}{c}=0{,}75\cdot(30-20)\,\mathrm{kg\,K}=+7{,}5\,\mathrm{kg\,K}$. I due risultati hanno lo stesso modulo e segni opposti, quindi l'acqua calda cede esattamente l'energia che l'acqua fredda assorbe.

Nel grafico, per una temperatura finale $T$ qualsiasi, le curve $0{,}25\,(60-T)$ e $0{,}75\,(T-20)$ si incontrano nel punto $E$, a $30\,{}^\circ\mathrm C$.

::grafico{curve="t,0.25*(60-t),20,60;t,0.75*(t-20),20,60" punti="30,7.5,pieno,E" xmin=20 xmax=68 ymin=0 ymax=32 nomi="T finale (°C),|Q|/c (kg K)" legenda="\mathrm{ceduto};\mathrm{assorbito}" titolo="L’incrocio mostra la temperatura a cui i due calori sono uguali in modulo."}
:::

:::teorema{#bilancio-aperto titolo="Quando la media delle temperature vale"}
La temperatura di equilibrio è la media pesata delle temperature iniziali quando valgono insieme tre condizioni:
- il sistema scambia calore soltanto al proprio interno;
- tutte le parti restano nella stessa fase;
- ogni parte raggiunge la stessa temperatura finale.

Se invece al sistema arriva energia dall'esterno e gli altri contributi al bilancio sono trascurabili, la somma dei calori delle parti è uguale all'energia **netta** $E_{\mathrm{est}}$ ricevuta dall'esterno, cioè l'energia entrata meno quella uscita. Con due parti si scrive

$$
C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=E_{\mathrm{est}}.
$$

Ricavando $T_f$ con gli stessi passaggi del caso isolato si trova la media pesata più il termine $\dfrac{E_{\mathrm{est}}}{C_1+C_2}$:

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}+\frac{E_{\mathrm{est}}}{C_1+C_2}.
$$

Con più parti il denominatore è la somma di tutte le capacità, che si scrive $\sum_j C_j$; la lettera greca $\Sigma$ (*sigma* maiuscola) indica una somma. Le capacità sono positive e si assumono costanti negli intervalli considerati. Se un riscaldatore fornisce un'energia e una parte di essa va all'ambiente, $E_{\mathrm{est}}$ è la differenza fra le due. Per esempio, parti con capacità complessiva $400\,\mathrm{J/K}$ che si scaldano di $10\,\mathrm K$ ricevono $400\cdot10=4000\,\mathrm J$. Se il riscaldatore ne ha forniti $5000\,\mathrm J$, gli altri $5000-4000=1000\,\mathrm J$ sono andati all'ambiente.

Si considerano due capacità di $160\,\mathrm{J/K}$ e $640\,\mathrm{J/K}$, a $70$ e a $20\,{}^\circ\mathrm C$. La media pesata vale $\dfrac{160\cdot70+640\cdot20}{800}\,{}^\circ\mathrm C=\dfrac{24000}{800}\,{}^\circ\mathrm C=30\,{}^\circ\mathrm C$. Se durante il processo arrivano $4000\,\mathrm J$ dall'esterno, il termine aggiuntivo vale $\dfrac{4000}{800}\,\mathrm K=5\,\mathrm K$ e $T_f=35\,{}^\circ\mathrm C$. Il corpo inizialmente caldo scambia $160\cdot(35-70)\,\mathrm J=-5600\,\mathrm J$, cioè cede $5600\,\mathrm J$. Quello inizialmente freddo assorbe $640\cdot(35-20)\,\mathrm J=9600\,\mathrm J$. Perciò la somma dei due contributi è $-5600+9600=+4000\,\mathrm J$, uguale all'energia arrivata dall'esterno.

La tabella confronta tre prove con le stesse capacità e le stesse temperature iniziali. Un'energia netta di $-4\,\mathrm{kJ}$ significa che $4\,\mathrm{kJ}$ escono dal sistema. In quel caso la temperatura finale scende di cinque kelvin, da $30$ a $25\,{}^\circ\mathrm C$, e il corpo caldo cede più energia.

| Energia netta | Temperatura finale | Contributo del corpo caldo |
| --- | --- | --- |
| $-4\,\mathrm{kJ}$ | $25\,{}^\circ\mathrm C$ | $-7{,}2\,\mathrm{kJ}$ |
| $0\,\mathrm{kJ}$ | $30\,{}^\circ\mathrm C$ | $-6{,}4\,\mathrm{kJ}$ |
| $+4\,\mathrm{kJ}$ | $35\,{}^\circ\mathrm C$ | $-5{,}6\,\mathrm{kJ}$ |

Nel grafico ogni prova è un punto, e i tre punti stanno su una retta. La retta incontra l'asse orizzontale a $30\,{}^\circ\mathrm C$, la temperatura di equilibrio senza scambi con l'esterno.

::grafico{linee="20,-8 45,12" punti="25,-4,pieno;30,0,pieno;35,4,pieno" xmin=19 xmax=46 ymin=-9 ymax=13 nomi="T finale (°C),Energia netta (kJ)" titolo="L’intersezione con l’asse orizzontale dà l’equilibrio isolato a 30 °C. Per arrivare a 35 °C occorrono 4 kJ netti dall’esterno."}
:::

## Calorimetro e potenza di riscaldamento

:::osservazione{#riscaldamento titolo="Includere i corpi che assorbono energia"}
Il **calorimetro** è un recipiente isolato in cui si mettono a contatto dei corpi per misurare il calore che si scambiano. Anche le pareti del calorimetro si scaldano o si raffreddano. Se la sua capacità termica $C_{\mathrm{cal}}$ non è trascurabile, nel bilancio compare il termine $C_{\mathrm{cal}}(T_f-T_{\mathrm{cal},i})$, dove $T_{\mathrm{cal},i}$ è la temperatura iniziale del calorimetro.
- Se il calorimetro era in equilibrio con il liquido freddo che contiene, il suo termine ha lo stesso intervallo di temperatura del liquido freddo. Perciò si possono sommare le due capacità termiche. Con $0{,}20\,\mathrm{kg}$ d'acqua, di capacità $0{,}20\cdot4200=840\,\mathrm{J/K}$, in un calorimetro da $160\,\mathrm{J/K}$, la parte fredda ha capacità $(840+160)\,\mathrm{J/K}=1000\,\mathrm{J/K}$.
- Se il calorimetro parte da una temperatura diversa, si scrive un terzo termine.

La capacità di un calorimetro si esprime anche come **massa d'acqua equivalente**, cioè la massa d'acqua che ha la stessa capacità termica. Si ricava da $m_{\mathrm{eq}}=\dfrac{C_{\mathrm{cal}}}{c_{\mathrm{acqua}}}$. Per $C_{\mathrm{cal}}=420\,\mathrm{J/K}$ e $c_{\mathrm{acqua}}=4200\,\mathrm{J/(kg\,K)}$ si ottiene $m_{\mathrm{eq}}=0{,}10\,\mathrm{kg}$.
:::

:::definizione{#potenza-utile titolo="Dalla potenza al tempo"}
La **potenza** è l'energia trasferita in ogni secondo. Si misura in watt ($\mathrm W$), e $1\,\mathrm W=1\,\mathrm{J/s}$, cioè un joule al secondo. Un riscaldatore elettrico assorbe dalla rete una potenza costante $P$, scritta sull'apparecchio e detta **potenza nominale**. Solo una parte di questa energia arriva al corpo da scaldare, mentre il resto va all'ambiente. Il **rendimento** $\eta$ (lettera greca *eta*) è il rapporto fra l'energia che arriva al corpo e l'energia assorbita. È un numero compreso fra $0$ e $1$, spesso scritto in percentuale: $\eta=0{,}80$ equivale all'$80\%$. La **potenza utile**, cioè quella che arriva al corpo, è quindi $\eta P$.

Con potenza utile costante, in un tempo $t$ il corpo riceve $Q=\eta Pt$. Dividendo entrambi i membri per $\eta P$ si ottiene il tempo necessario per trasferire $Q$:

$$
t=\frac{Q}{\eta P}.
$$

Un riscaldatore da $600\,\mathrm W$ con rendimento $0{,}75$ trasferisce al corpo $0{,}75\cdot600=450\,\mathrm J$ ogni secondo. Per fargli assorbire $18\,\mathrm{kJ}=18000\,\mathrm J$ occorrono $\dfrac{18000}{450}\,\mathrm s=40\,\mathrm s$. Nello stesso tempo il riscaldatore assorbe dalla rete $600\cdot40=24000\,\mathrm J=24\,\mathrm{kJ}$. Se il rendimento cambiasse durante il riscaldamento, la formula andrebbe usata con un valore del rendimento adatto a ciascun intervallo.

::grafico{f="0.6*x;0.45*x" punti="40,24,pieno;40,18,pieno" xmin=0 xmax=50 ymin=0 ymax=31 nomi="t (s),E (kJ)" legenda="\mathrm{ingresso};\mathrm{utile}" titolo="In 40 s arrivano 24 kJ in ingresso, di cui 18 kJ al corpo."}
:::

:::esempio{#potenze-a-tratti titolo="Potenza utile su due intervalli"}
Un riscaldatore funziona per $40\,\mathrm s$ a $200\,\mathrm W$ con rendimento $0{,}70$ e poi per $20\,\mathrm s$ a $350\,\mathrm W$ con rendimento $0{,}80$. In ciascun intervallo la potenza utile è costante. L'energia utile di ogni tratto è la sua potenza utile moltiplicata per la sua durata.

$$
\begin{aligned}
E_1&=0{,}70\cdot200\cdot40\,\mathrm J=140\cdot40\,\mathrm J=5600\,\mathrm J\\[6pt]
E_2&=0{,}80\cdot350\cdot20\,\mathrm J=280\cdot20\,\mathrm J=5600\,\mathrm J.
\end{aligned}
$$

I due tratti danno al corpo lo stesso contributo, perché nella seconda fase la potenza utile è doppia ($280$ contro $140\,\mathrm W$) e la durata è dimezzata ($20$ contro $40\,\mathrm s$). Il corpo riceve in tutto $11200\,\mathrm J$. Se la sua capacità termica è $560\,\mathrm{J/K}$ e comprende già tutto ciò che si scalda, la temperatura aumenta di $\dfrac{11200}{560}\,\mathrm K=20\,\mathrm K$.

L'energia in ingresso si calcola come quella utile, tratto per tratto: $200\cdot40+350\cdot20=8000+7000=15000\,\mathrm J$. Il rendimento complessivo è dunque $\dfrac{11200}{15000}\simeq0{,}747$, dove il simbolo $\simeq$ si legge *circa uguale*. Questo valore è la media dei due rendimenti pesata con l'energia in ingresso di ciascun tratto: $\dfrac{0{,}70\cdot8000+0{,}80\cdot7000}{15000}=\dfrac{11200}{15000}$.

Nel grafico della potenza utile in funzione del tempo ogni tratto è un rettangolo, e la sua area, base per altezza, è l'energia utile del tratto.

::grafico{linee="0,140 40,140;40,280 60,280" segmenti="40,140,40,280" poligoni="0,0 40,0 40,140 0,140;40,0 60,0 60,280 40,280" xmin=0 xmax=65 ymin=0 ymax=320 nomi="t (s),P utile (W)" titolo="I rettangoli di base 40 s e 20 s hanno la stessa area. Ciascuna area rappresenta 5,6 kJ trasferiti al corpo."}
:::

:::osservazione{#limite-riscaldamento titolo="Temperatura limite con dispersioni"}
Un corpo può continuare a ricevere energia elettrica mentre la sua temperatura resta costante. Succede quando la potenza che riceve è uguale alla potenza che cede all'ambiente, detta potenza dispersa. Un campione riceve $240\,\mathrm W$ e l'aria intorno è a $20\,{}^\circ\mathrm C$. Il campione cede all'aria $8\,\mathrm W$ per ogni kelvin di differenza fra la sua temperatura $T$ e quella dell'aria, quindi la potenza dispersa è $8\,(T-20)\,\mathrm W$.
- A $40\,{}^\circ\mathrm C$ il campione perde $8\cdot20=160\,\mathrm W$, meno dei $240\,\mathrm W$ che riceve. Quindi la sua energia continua ad aumentare e la temperatura sale.
- A $50\,{}^\circ\mathrm C$ perde $8\cdot30=240\,\mathrm W$. La potenza netta è zero e la temperatura resta costante.
- A una temperatura appena più alta le perdite supererebbero la potenza in ingresso. Perciò la temperatura tornerebbe a diminuire.

Il valore $50\,{}^\circ\mathrm C$ si ricava da $8\,(T-20)=240$, cioè $T-20=30$. È la temperatura di **regime** dell'apparecchio, quella a cui il corpo si stabilizza, e serve a sapere se una temperatura voluta si può raggiungere. Nel grafico le due rette si incontrano nel punto $E$, a $50\,{}^\circ\mathrm C$.

::grafico{f="240;8*(x-20)" punti="50,240,pieno,E" xmin=20 xmax=61 ymin=0 ymax=330 nomi="T (°C),P (W)" legenda="P_{in};P_{disp}" titolo="La potenza dispersa raggiunge quella in ingresso a 50 °C. A sinistra dell’incrocio il corpo si riscalda."}
:::

## Conduzione, convezione e irraggiamento

:::definizione{#trasmissione titolo="Tre modi di trasferire energia"}
- Nella **conduzione** l'energia passa attraverso un materiale fermo, perché le sue parti più calde la trasferiscono alle parti vicine più fredde. Così si scalda il manico di un cucchiaio immerso nella zuppa calda.
- Nella **convezione** un fluido, cioè un liquido o un gas, si muove e trasporta con sé materia ed energia. Così l'acqua scaldata sul fondo di una pentola sale e quella più fredda scende.
- Nell'**irraggiamento** l'energia è trasportata da onde elettromagnetiche, come la luce, che si propagano anche nel vuoto. Così arriva sulla Terra l'energia del Sole.

I tre modi possono agire insieme. Una parete, per esempio, conduce energia al suo interno mentre l'aria vicino alle sue facce scambia energia per convezione.
:::

:::teorema{#parete titolo="Potenza attraverso una parete piana"}
Si considera una parete piana omogenea di spessore $d$ e area $A$. La **conducibilità termica** $k$ è una proprietà del materiale e si misura in $\mathrm{W/(m\,K)}$. Indica quanti watt attraversano un metro quadrato di uno strato spesso un metro quando le sue facce differiscono di un kelvin. Le ipotesi sono le seguenti:
- $k$ è circa costante;
- ciascuna faccia ha la stessa temperatura in tutti i suoi punti, e le due temperature sono mantenute fisse;
- la parete è in **regime stazionario**, cioè le temperature al suo interno non cambiano più nel tempo;
- le perdite dai bordi sono trascurabili.

Allora il modulo della potenza condotta, cioè dell'energia che attraversa la parete ogni secondo, è

$$
P=\frac{kA(T_{\mathrm{calda}}-T_{\mathrm{fredda}})}{d}.
$$

Dentro la parete la temperatura scende in linea retta dalla faccia calda alla faccia fredda. Il salto di temperatura diviso per lo spessore, $\dfrac{T_{\mathrm{calda}}-T_{\mathrm{fredda}}}{d}$, è il modulo del **gradiente** di temperatura, cioè la pendenza di quella retta, e si misura in $\mathrm{K/m}$. La potenza è proporzionale all'area e al salto di temperatura ed è **inversamente proporzionale** allo spessore, cioè uno spessore doppio dà potenza dimezzata. Infatti, a parità di salto, uno spessore doppio dimezza il gradiente.

Per $k=0{,}04\,\mathrm{W/(m\,K)}$, $A=5\,\mathrm{m^2}$, $d=0{,}10\,\mathrm m$ e un salto di $20\,\mathrm K$ si ottiene

$$
P=\frac{0{,}04\cdot5\cdot20}{0{,}10}\,\mathrm W=\frac{4}{0{,}10}\,\mathrm W=40\,\mathrm W.
$$

Dividendo per l'area si ottiene la potenza che attraversa ogni metro quadrato, $\dfrac{40}{5}=8\,\mathrm{W/m^2}$.

::grafico{linee="0,25 10,5" punti="0,25,pieno;10,5,pieno" xmin=0 xmax=11 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Profilo lineare per una parete spessa 10 cm, fra 25 °C e 5 °C."}
:::

:::osservazione{#resistenza-termica titolo="Strati in serie"}
La formula della parete si può scrivere $P=\dfrac{T_{\mathrm{calda}}-T_{\mathrm{fredda}}}{R}$ con $R=\dfrac{d}{kA}$. Il numero $R$ è la **resistenza termica** dello strato, si misura in $\mathrm{K/W}$ e indica quanti kelvin di salto servono per far passare un watt. Da qui il salto in uno strato è $\Delta T=PR$.

Due strati con la stessa area sono **in serie** quando il calore li attraversa uno dopo l'altro. In regime stazionario la stessa potenza $P$ attraversa ogni strato, perché nessuno strato accumula energia. Il salto totale è la somma dei salti nei due strati, $PR_1+PR_2=P(R_1+R_2)$, quindi le resistenze si sommano. Con $R_1=0{,}25\,\mathrm{K/W}$ e $R_2=0{,}75\,\mathrm{K/W}$ e un salto complessivo di $20\,\mathrm K$ si ha $P=\dfrac{20}{0{,}25+0{,}75}\,\mathrm W=20\,\mathrm W$. I salti nei due strati sono $20\cdot0{,}25=5\,\mathrm K$ e $20\cdot0{,}75=15\,\mathrm K$.

Nel grafico gli strati sono spessi $4$ e $5\,\mathrm{cm}$. La temperatura scende da $25$ a $20\,{}^\circ\mathrm C$ nel primo strato e da $20$ a $5\,{}^\circ\mathrm C$ nel secondo. Il punto $I$ è l'**interfaccia**, cioè la superficie di contatto fra i due strati.

::grafico{linee="0,25 4,20 9,5" punti="4,20,pieno,I" xmin=0 xmax=10 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Con spessori di 4 e 5 cm, I è l’interfaccia a 20 °C."}
:::

:::osservazione{#vie-termiche-parallele titolo="Due vie alternative per il calore"}
Una parete fatta di due porzioni affiancate offre al calore due vie, dette **in parallelo**, perché il calore passa attraverso l'una oppure attraverso l'altra. Si suppone che le facce di entrambe le porzioni siano alle stesse due temperature e che la conduzione laterale fra le porzioni sia trascurabile. Allora il salto termico $\Delta T$ è lo stesso per le due vie.
- Con resistenze $R_1$ e $R_2$ le potenze sono $\dfrac{\Delta T}{R_1}$ e $\dfrac{\Delta T}{R_2}$.
- La perdita complessiva è la somma delle due potenze.
- La resistenza equivalente, cioè la resistenza di una parete unica che fa passare la stessa potenza, è il reciproco di $\dfrac{1}{R_1}+\dfrac{1}{R_2}$.

Una porzione che conduce molto più del resto della parete si chiama **ponte termico**.

Con $\Delta T=18\,\mathrm K$, $R_1=0{,}60\,\mathrm{K/W}$ e $R_2=1{,}80\,\mathrm{K/W}$, la prima via trasferisce $\dfrac{18}{0{,}60}=30\,\mathrm W$ e la seconda $\dfrac{18}{1{,}80}=10\,\mathrm W$. Il totale vale $40\,\mathrm W$, quindi la resistenza equivalente è $\dfrac{18}{40}\,\mathrm{K/W}=0{,}45\,\mathrm{K/W}$. È minore di entrambe le resistenze, perché a parità di salto il calore ha due vie a disposizione. Per confronto, negli strati in serie è comune la potenza e si sommano i salti di temperatura, mentre in parallelo è comune il salto e si sommano le potenze.
:::

:::esempio{#temperatura-interfaccia titolo="Invertire gli strati della parete"}
Due strati sono a contatto e l'area attraversata è la stessa per entrambi. Le facce esterne sono a $24\,{}^\circ\mathrm C$ e a $-6\,{}^\circ\mathrm C$, quindi il salto totale è $24-(-6)=30\,\mathrm K$. Il primo strato ha resistenza $0{,}20\,\mathrm{K/W}$, il secondo $1{,}30\,\mathrm{K/W}$. A regime e senza perdite laterali la stessa energia attraversa ogni secondo entrambi gli strati, quindi le resistenze si sommano e la resistenza totale è $0{,}20+1{,}30=1{,}50\,\mathrm{K/W}$. La potenza è $\dfrac{30}{1{,}50}\,\mathrm W=20\,\mathrm W$. Dalla faccia calda al contatto la temperatura scende di $20\cdot0{,}20=4\,\mathrm K$, quindi l'interfaccia è a $24-4=20\,{}^\circ\mathrm C$.

Si inverte l'ordine degli strati. La resistenza complessiva e le temperature delle facce esterne non cambiano, quindi la potenza resta $20\,\mathrm W$. Il primo strato ora è quello da $1{,}30\,\mathrm{K/W}$, quindi il salto in esso diventa $20\cdot1{,}30=26\,\mathrm K$ e l'interfaccia si porta a $24-26=-2\,{}^\circ\mathrm C$. Perciò una misura della temperatura all'interfaccia distingue due pareti che trasferiscono all'esterno la stessa potenza. Il calcolo vale con temperature delle facce fissate e a regime raggiunto. Mentre la parete stessa si raffredda, i due strati possono accumulare o cedere energia a ritmi diversi.

Gli strati sono spessi $4\,\mathrm{cm}$ (resistenza $0{,}20\,\mathrm{K/W}$) e $7\,\mathrm{cm}$ (resistenza $1{,}30\,\mathrm{K/W}$), quindi invertendo l'ordine l'interfaccia passa da $4$ a $7\,\mathrm{cm}$. Nel grafico le due linee partono e arrivano alle stesse temperature, mentre cambiano posizione e temperatura dell'interfaccia.

::grafico{linee="0,24 4,20 11,-6" segmenti="0,24,7,-2;7,-2,11,-6" punti="4,20,pieno,A;7,-2,pieno,B" xmin=0 xmax=12 ymin=-11 ymax=28 nomi="x (cm),T (°C)" titolo="Il tratto continuo incontra l’interfaccia A a 20 °C. Nell’ordine inverso, il tratto tratteggiato la incontra in B a −2 °C."}
:::
