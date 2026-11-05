---
titolo: Temperatura, calore e cambiamenti di stato
sommario: La temperatura e le sue scale, l'energia scambiata come calore, il riscaldamento dei corpi, l'equilibrio tra corpi a temperature diverse e i cambiamenti di stato.
---

## Temperatura ed equilibrio termico

:::definizione{#temperatura titolo="Temperatura"}
La **temperatura** è la grandezza che permette di stabilire quando due corpi sono in equilibrio termico. Due corpi a contatto sono in **equilibrio termico** quando hanno la stessa temperatura e lo scambio netto di energia dovuto alla differenza di temperatura è nullo.

Se una tazza d'acqua calda viene lasciata in una stanza, l'acqua cede energia all'ambiente e si raffredda. Se la temperatura della stanza resta costante, dopo un tempo sufficientemente lungo l'acqua raggiunge quella temperatura. Per esempio, acqua inizialmente a $60\,^\circ\mathrm{C}$ tende a raggiungere i $20\,^\circ\mathrm{C}$ della stanza.

La temperatura si misura con un termometro. Il termometro deve scambiare energia con il corpo fino a raggiungere l'equilibrio termico; perciò la lettura richiede un certo tempo. Nel modello di misura ideale il termometro modifica in modo trascurabile la temperatura del corpo.
:::

:::teorema{#equilibrio-termico titolo="Principio zero della termodinamica"}
Se due corpi sono ciascuno in equilibrio termico con un terzo corpo, sono in equilibrio termico anche tra loro. È un principio sperimentale, sul quale si basa il confronto delle temperature.

Un termometro che, dopo l'equilibrio, indica $25\,^\circ\mathrm{C}$ sia per il corpo $A$ sia per il corpo $B$ assegna ai due corpi la stessa temperatura. Se $A$ e $B$ vengono messi a contatto, la differenza di temperatura tra loro è nulla.
:::

:::osservazione{titolo="Misura e sensazione termica"}
La sensazione prodotta dal contatto dipende anche dalla rapidità con cui viene trasferita energia. Un oggetto metallico e uno di legno, entrambi alla temperatura della stanza, possono dare sensazioni diverse alla mano. Il metallo può trasferire energia più rapidamente del legno e far raffreddare più rapidamente la pelle. Il termometro, portato all'equilibrio con ciascun oggetto, permette invece di confrontarne la temperatura. Per descrivere uno scambio termico si distingue quindi la temperatura misurata dalla velocità dello scambio.
:::

## Scala Celsius e scala Kelvin

:::definizione{#scale-termometriche titolo="Gradi Celsius e kelvin"}
La temperatura nella scala Celsius si esprime in **gradi Celsius**, con simbolo $^\circ\mathrm{C}$. Per l'acqua pura alla pressione atmosferica di riferimento, pari a $101\,325\,\mathrm{Pa}$, la fusione del ghiaccio avviene circa a $0\,^\circ\mathrm{C}$ e l'ebollizione circa a $100\,^\circ\mathrm{C}$.

L'unità del Sistema Internazionale è il **kelvin**, con simbolo $\mathrm{K}$. Lo zero della scala Kelvin corrisponde a $-273{,}15\,^\circ\mathrm{C}$ ed è detto zero assoluto. Un intervallo di un kelvin ha la stessa ampiezza di un intervallo di un grado Celsius.

Indichiamo con $t_C$ il *valore numerico* della temperatura in gradi Celsius e con $T_K$ quello in kelvin. Le conversioni sono
$$
T_K=t_C+273{,}15,
\qquad
t_C=T_K-273{,}15.
$$
Per esempio $20\,^\circ\mathrm{C}$ corrispondono a $293{,}15\,\mathrm{K}$. Il numero cresce di $273{,}15$ perché cambia lo zero della scala; la temperatura fisica del corpo resta la stessa.

::grafico{assi=0 uguale=1 linee="0,0 8,0;0,2 8,2;1,-0.2 1,0.2;4,-0.2 4,0.2;7,-0.2 7,0.2;1,1.8 1,2.2;4,1.8 4,2.2;7,1.8 7,2.2" etichette="0.6,2.65,0 °C;3.6,2.65,50 °C;6.5,2.65,100 °C;0.3,-0.8,273,15 K;3.3,-0.8,323,15 K;6.3,-0.8,373,15 K" xmin=-0.4 xmax=8.8 ymin=-1.3 ymax=3.2 titolo="Le due scale hanno intervalli della stessa ampiezza: a un aumento di $50\,^\circ\mathrm{C}$ corrisponde un aumento di $50\,\mathrm{K}$"}
:::

:::osservazione{#variazione-temperatura titolo="Variazione di temperatura"}
La **variazione di temperatura** è il valore finale meno quello iniziale. Il simbolo $\Delta$, che si legge delta, indica questa differenza. Per un riscaldamento da $15\,^\circ\mathrm{C}$ a $35\,^\circ\mathrm{C}$ si ha
$$
\Delta T=20\,\mathrm{K}.
$$
Nella scala Kelvin gli stessi estremi sono $288{,}15\,\mathrm{K}$ e $308{,}15\,\mathrm{K}$, e la loro differenza è ancora $20\,\mathrm{K}$. Un raffreddamento da $35\,^\circ\mathrm{C}$ a $15\,^\circ\mathrm{C}$ dà invece $\Delta T=-20\,\mathrm{K}$.
:::

:::attenzione
A una differenza di temperatura non si aggiunge $273{,}15$. Se la temperatura aumenta di $10\,^\circ\mathrm{C}$, aumenta di $10\,\mathrm{K}$; il valore $283{,}15\,\mathrm{K}$ è invece la temperatura che corrisponde a $10\,^\circ\mathrm{C}$.
:::

## Calore ed energia interna

:::definizione{#calore titolo="Calore scambiato"}
Il **calore** è energia trasferita tra corpi a causa di una differenza di temperatura. Si indica con $Q$ e si misura in joule, con simbolo $\mathrm{J}$. In un contatto termico ordinario l'energia passa spontaneamente dal corpo a temperatura maggiore a quello a temperatura minore.

Scelto un corpo come sistema, si assume $Q>0$ quando esso assorbe calore e $Q<0$ quando lo cede. Se un blocco cede $600\,\mathrm{J}$ all'acqua, per il blocco $Q=-600\,\mathrm{J}$. Se l'acqua riceve tutta quell'energia, per l'acqua $Q=+600\,\mathrm{J}$.

L'**energia interna** è l'energia associata al moto microscopico e alle interazioni delle particelle che costituiscono un corpo. Il calore descrive un trasferimento di energia, mentre l'energia interna è una proprietà del corpo nel suo stato. Nei riscaldamenti qui considerati il lavoro e le altre forme di scambio energetico sono trascurabili.
:::

:::osservazione
La temperatura, da sola, non determina quanta energia occorre per riscaldare un corpo. Per la stessa sostanza e lo stesso aumento di temperatura, una massa maggiore richiede più energia. Per esempio, due quantità d'acqua di masse $1\,\mathrm{kg}$ e $2\,\mathrm{kg}$ possono essere entrambe a $20\,^\circ\mathrm{C}$; per portarle entrambe a $30\,^\circ\mathrm{C}$ la seconda richiede il doppio del calore della prima.
:::

## Calore specifico e riscaldamento

:::definizione{#calore-specifico titolo="Calore specifico"}
Il **calore specifico** $c$ di una sostanza esprime il calore necessario per aumentare di un kelvin la temperatura di un chilogrammo di quella sostanza, nelle condizioni considerate. La sua unità è $\mathrm{J/(kg\cdot K)}$.

Per l'acqua liquida useremo il valore approssimato $c_a=4180\,\mathrm{J/(kg\cdot K)}$, considerato costante nell'intervallo di temperatura di ogni problema. Pertanto un chilogrammo d'acqua richiede circa $4180\,\mathrm{J}$ per un aumento di $1\,\mathrm{K}$. Per l'alluminio useremo, quando indicato, $c_{\mathrm{Al}}=900\,\mathrm{J/(kg\cdot K)}$. A parità di massa e di aumento di temperatura, l'acqua richiede più calore dell'alluminio.
:::

:::teorema{#legge-calorimetria titolo="Legge della calorimetria"}
Un corpo omogeneo di massa $m$, con calore specifico $c$ assunto costante, scambia il calore
$$
Q=mc\Delta T
$$
quando la sua temperatura varia di $\Delta T$ senza cambiamenti di stato, nelle condizioni per cui è assegnato $c$. La relazione descrive sperimentalmente il riscaldamento e il raffreddamento di molti solidi e liquidi nelle condizioni ordinarie.

La formula permette di determinare anche una delle altre grandezze. Per $m>0$ e $c>0$ si ha
$$
\Delta T=\frac{Q}{mc}.
$$
Il prodotto delle unità $\mathrm{kg}$, $\mathrm{J/(kg\cdot K)}$ e $\mathrm{K}$ dà $\mathrm{J}$, quindi il risultato è un'energia. Se il corpo si raffredda, la variazione di temperatura è negativa e anche $Q$ risulta negativo.
:::

:::esempio{titolo="Riscaldare mezzo chilogrammo d'acqua"}
Per portare $0{,}50\,\mathrm{kg}$ d'acqua da $20\,^\circ\mathrm{C}$ a $30\,^\circ\mathrm{C}$, senza perdite, si calcola prima $\Delta T=10\,\mathrm{K}$. Quindi
$$
Q=0{,}50\,\mathrm{kg}\cdot4180\,\mathrm{J/(kg\cdot K)}\cdot10\,\mathrm{K}
=20\,900\,\mathrm{J}.
$$
Il risultato è positivo perché l'acqua assorbe energia.

::grafico{f="2.09*x" xmin=0 xmax=20 ymin=0 ymax=45 nomi="ΔT,Q" legenda=0 punti="10,20.9,pieno" titolo="Per $0{,}50\,\mathrm{kg}$ d'acqua il calore $Q$, in kilojoule, è proporzionale a $\Delta T$, in kelvin: a $10\,\mathrm{K}$ corrispondono $20{,}9\,\mathrm{kJ}$"}
:::

## Capacità termica

:::definizione{#capacita-termica titolo="Capacità termica di un corpo"}
La **capacità termica** $C$ di un corpo è il calore scambiato diviso per la variazione di temperatura, quando questa è diversa da zero e non avvengono cambiamenti di stato. Si misura in $\mathrm{J/K}$ e vale
$$
C=\frac{Q}{\Delta T}.
$$
Per un corpo omogeneo nelle condizioni della legge della calorimetria si ottiene $C=mc$. La capacità termica dipende dunque sia dalla sostanza sia dalla massa. Un blocco di alluminio di $2\,\mathrm{kg}$, con $c=900\,\mathrm{J/(kg\cdot K)}$, ha $C=1800\,\mathrm{J/K}$. Per aumentare la sua temperatura di $5\,\mathrm{K}$ servono $Q=C\Delta T=9000\,\mathrm{J}$.

La capacità termica permette di descrivere anche un oggetto formato da parti diverse, se le parti hanno tutte la stessa variazione di temperatura. In questo caso si sommano le loro capacità termiche. Un oggetto con capacità termica di $300\,\mathrm{J/K}$ richiede $600\,\mathrm{J}$ per un aumento di $2\,\mathrm{K}$.
:::

## Contatto termico e mescolanze

::::teorema{#bilancio-termico titolo="Temperatura di equilibrio di due corpi"}
Due corpi vengono messi a contatto in un recipiente isolato dall'ambiente. Si trascura la capacità termica del recipiente, non avvengono cambiamenti di stato e i calori specifici restano costanti. Indichiamo con $m_1,m_2$ le masse, con $c_1,c_2$ i calori specifici e con $t_1,t_2$ le temperature iniziali in gradi Celsius. La temperatura comune finale è
$$
t_e=\frac{m_1c_1t_1+m_2c_2t_2}{m_1c_1+m_2c_2}.
$$
Qui le temperature nella formula sono i valori numerici espressi tutti nella stessa scala. La relazione vale anche usando i kelvin. Il calore ceduto dal corpo più caldo è assorbito dal corpo più freddo, quindi la temperatura finale è compresa tra quelle iniziali.

:::dimostrazione
Si impone che la somma dei calori scambiati sia nulla, perché il sistema è isolato e il recipiente assorbe energia trascurabile. Pertanto
$$
m_1c_1(t_e-t_1)+m_2c_2(t_e-t_2)=0.
$$
Raggruppando i termini che contengono $t_e$ si ottiene
$$
(m_1c_1+m_2c_2)t_e=m_1c_1t_1+m_2c_2t_2.
$$
Le masse e i calori specifici sono positivi, quindi si può dividere per $m_1c_1+m_2c_2$ e ricavare la formula.
:::
::::

:::esempio{titolo="Due quantità della stessa acqua"}
Si mescolano $1\,\mathrm{kg}$ d'acqua a $60\,^\circ\mathrm{C}$ e $2\,\mathrm{kg}$ d'acqua a $15\,^\circ\mathrm{C}$ nelle condizioni del bilancio termico. I calori specifici sono uguali, quindi si semplificano e si ha
$$
t_e=\frac{1\cdot60+2\cdot15}{1+2}=30.
$$
La temperatura finale è $30\,^\circ\mathrm{C}$. La massa d'acqua maggiore cambia temperatura di meno; infatti l'acqua calda si raffredda di $30\,\mathrm{K}$ e quella fredda si riscalda di $15\,\mathrm{K}$.

::grafico{assi=0 uguale=1 linee="0,0 0,2 2,2 2,0 0,0;4,0 4,2 6,2 6,0 4,0;8,0 8,2 10,2 10,0 8,0" vettori="6.4,1,7.6,1" etichette="2.8,1,+;0.3,1.2,1 kg;0.2,0.5,60 °C;4.3,1.2,2 kg;4.2,0.5,15 °C;8.3,1.2,3 kg;8.2,0.5,30 °C" xmin=-0.5 xmax=10.5 ymin=-0.5 ymax=2.7 titolo="Schema dei dati della mescolanza: le due quantità iniziali formano $3\,\mathrm{kg}$ d'acqua alla temperatura comune di $30\,^\circ\mathrm{C}$"}
:::

:::osservazione{titolo="Ipotesi del bilancio termico"}
Nel bilancio con due corpi si considera l'energia scambiata durante tutto il processo, dall'istante iniziale all'equilibrio. L'isolamento termico rende trascurabile il calore scambiato con l'ambiente. La capacità termica trascurabile del recipiente rende trascurabile l'energia che il recipiente assorbe o cede. Se invece il recipiente partecipa allo scambio, il suo calore compare come un ulteriore termine nella somma. Le temperature finali comuni presuppongono inoltre che il contatto sia durato abbastanza da raggiungere l'equilibrio.
:::

## Passaggi tra gli stati della materia

:::definizione{#cambiamenti-di-stato titolo="Fusione, solidificazione e vaporizzazione"}
La **fusione** è il passaggio dallo stato solido a quello liquido; la **solidificazione** è il passaggio inverso. La **vaporizzazione** è il passaggio da liquido a vapore; la **condensazione** è il passaggio inverso.

Durante la fusione di una sostanza pura in equilibrio, a pressione costante, la temperatura resta alla temperatura di fusione finché sono presenti entrambe le fasi. Il calore assorbito permette il cambiamento di stato. Lo stesso accade durante l'ebollizione a pressione costante. Per esempio ghiaccio e acqua pura possono coesistere circa a $0\,^\circ\mathrm{C}$ alla pressione atmosferica di riferimento.

L'evaporazione avviene dalla superficie di un liquido anche a temperature inferiori a quella di ebollizione. L'ebollizione interessa invece tutto il liquido, nel quale si formano bolle di vapore. La temperatura di ebollizione dipende dalla pressione, quindi il valore di $100\,^\circ\mathrm{C}$ per l'acqua si riferisce alla pressione atmosferica di riferimento.
:::

:::teorema{#calore-latente titolo="Calore per il cambiamento di stato"}
Il calore assorbito per fondere una massa $m$ già alla temperatura di fusione è
$$
Q=mL_f,
$$
dove $L_f$ è il calore latente specifico di fusione, espresso in $\mathrm{J/kg}$. Per vaporizzare alla temperatura di ebollizione si usa invece $Q=mL_v$. Sono relazioni sperimentali riferite alla sostanza e alla pressione assegnate.

Per l'acqua alla pressione atmosferica di riferimento useremo $L_f=334\,000\,\mathrm{J/kg}$ e $L_v=2\,260\,000\,\mathrm{J/kg}$. Fondere $0{,}10\,\mathrm{kg}$ di ghiaccio già a $0\,^\circ\mathrm{C}$ richiede $33\,400\,\mathrm{J}$. Nella solidificazione della stessa massa vengono ceduti $33\,400\,\mathrm{J}$, quindi per l'acqua $Q=-33\,400\,\mathrm{J}$.
:::

:::osservazione{#processi-in-piu-fasi titolo="Riscaldamento in più fasi"}
Per portare ghiaccio a $0\,^\circ\mathrm{C}$ fino ad acqua a $20\,^\circ\mathrm{C}$ si distinguono due fasi. Prima il ghiaccio fonde, poi l'acqua liquida si riscalda. Il calore totale è la somma
$$
Q_{\mathrm{tot}}=mL_f+mc_a\Delta T.
$$
Per $0{,}10\,\mathrm{kg}$ si ottiene $33\,400\,\mathrm{J}+8360\,\mathrm{J}=41\,760\,\mathrm{J}$. La temperatura resta costante durante la prima fase e cresce durante la seconda.

::grafico{linee="0,0 33.4,0 41.76,20" xmin=0 xmax=50 ymin=-5 ymax=25 nomi="Q,t" titolo="Fusione e riscaldamento di $0{,}10\,\mathrm{kg}$ di ghiaccio inizialmente a $0\,^\circ\mathrm{C}$: $Q$ è in kilojoule e la temperatura è in gradi Celsius"}
:::

## Modi di trasferimento del calore

:::definizione{#propagazione-calore titolo="Conduzione, convezione e irraggiamento"}
Nella **conduzione** l'energia si trasferisce attraverso un materiale senza un trasporto macroscopico del materiale stesso. Un cucchiaio metallico immerso in acqua calda si riscalda anche lungo il manico, perché l'energia si trasferisce dalle parti a temperatura maggiore a quelle a temperatura minore.

La **convezione** comporta il movimento di un fluido, cioè di un liquido o di un gas. In una pentola riscaldata dal basso, porzioni di liquido possono salire e altre scendere, trasportando energia. La circolazione dipende dalle differenze di densità e dalle condizioni del fluido.

Nell'**irraggiamento** l'energia viene trasportata da onde elettromagnetiche, che possono propagarsi anche nel vuoto. L'energia solare raggiunge la Terra in questo modo. Un corpo emette e assorbe radiazione; lo scambio netto dipende sia dal corpo sia dall'ambiente.

In una situazione reale possono agire più modi di trasferimento insieme. Nel caso di un recipiente con acqua calda, per esempio, l'energia può attraversare le pareti per conduzione e poi essere trasferita all'aria anche per convezione. Un recipiente isolante riduce gli scambi, perciò approssima il sistema isolato usato nei problemi di mescolanza.
:::
