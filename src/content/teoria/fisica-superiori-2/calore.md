---
titolo: "Calore e calorimetria"
sommario: "Calore specifico, capacità termica, equilibrio, potenza e trasmissione del calore."
---

## Calore e temperatura

:::definizione{#calore titolo="Energia trasferita per differenza di temperatura"}
Il **calore** è energia trasferita fra due sistemi per effetto di una differenza di temperatura. Si indica con $Q$ e si misura in joule. Dato un corpo di cui vogliamo fare il bilancio, prendiamo $Q>0$ se riceve energia come calore e $Q<0$ se la cede. Le parole *assorbito* e *ceduto* indicano per quale corpo si sta scrivendo il bilancio.
:::

:::osservazione{titolo="Segno del calore nel bilancio"}
Una tazza calda a contatto con un piattino più freddo gli cede energia. Se consideriamo solo la tazza, lo scambio ha segno negativo. Considerando il piattino, lo stesso scambio ha segno positivo. Per l’insieme, uno scambio interno non modifica l’energia totale. Gli eventuali scambi con l’aria, invece, attraversano il contorno del sistema.
:::

:::osservazione{#confine-termico titolo="Scegliere il confine del sistema"}
Se il sistema è la sola acqua contenuta in una tazza, all’esterno ci sono sia la tazza sia l’aria. Quando l’acqua si scalda, una misura dell’energia arrivata all’insieme non basta per dire quanta ne abbia ricevuta l’acqua. Per un bilancio che comprende tazza e acqua, lo scambio tra loro è interno. Occorre invece includere gli scambi con l’aria, l’energia trasferita da un eventuale riscaldatore e ogni altra energia che attraversa il confine scelto. Scrivere il nome del sistema prima del bilancio permette di assegnare correttamente ogni contributo.

Due procedure possono portare lo stesso campione alla stessa temperatura finale. Un recipiente caldo può riscaldare l’acqua per differenza di temperatura. In un recipiente isolato, un agitatore può fornire energia all’acqua per lavoro. La variazione di temperatura può quindi essere uguale, pur essendo diverso il modo in cui è stata trasferita l’energia. La relazione con la temperatura si usa per ricavare il calore scambiato quando il modello specifica gli altri contributi.
:::

## Calore specifico

:::teorema{#specifico titolo="Riscaldamento senza cambiamenti di stato"}
Un campione di massa $m$ rimane nella stessa fase e cambia temperatura per il solo scambio di calore. Quando il **calore specifico** $c$ è circa costante nelle condizioni della misura, il modulo del calore scambiato è proporzionale alla massa e all’ampiezza della variazione di temperatura. Con i segni si scrive

$$
Q=mc\Delta T,\qquad \Delta T=T_f-T_i.
$$

Il calore specifico è l’energia richiesta per un chilogrammo riscaldato di un kelvin, espressa in $\mathrm{J/(kg\,K)}$. Poiché $m>0$ e $c>0$ per i materiali trattati, il segno di $Q$ segue quello di $\Delta T$. Per un raffreddamento il calcolo produce un numero negativo. Il valore assoluto dà il calore ceduto.
:::

:::esempio{titolo="La stessa energia in rame e in acqua"}
Due campioni di massa $0{,}50\,\mathrm{kg}$ assorbono separatamente $2100\,\mathrm J$. Per l’acqua si assume $c=4200\,\mathrm{J/(kg\,K)}$ e per il rame $c=400\,\mathrm{J/(kg\,K)}$. Entrambi rimangono nella stessa fase.

$$
\Delta T_{\mathrm{H_2O}}=\frac{2100}{0{,}50\cdot4200}\,\mathrm K=1{,}0\,\mathrm K,\qquad \Delta T_{\mathrm{Cu}}=\frac{2100}{0{,}50\cdot400}\,\mathrm K=10{,}5\,\mathrm K.
$$

Con la stessa energia il rame si scalda di più, perché la sua capacità termica è minore. Se si disegna $Q$ in funzione di $\Delta T$, l’acqua ha la retta più ripida.

::grafico{f="2.1*x;0.2*x" legenda="\mathrm{H_2O};\mathrm{Cu}" punti="1,2.1,pieno;10.5,2.1,pieno" xmin=0 xmax=12 ymin=0 ymax=4 nomi="ΔT (K),Q (kJ)" titolo="I due punti alla stessa quota corrispondono a 2,1 kJ. Le loro ascisse sono differenti."}
:::

:::esempio{titolo="Riscaldare e raffreddare lo stesso campione"}
Un campione di massa $0{,}30\,\mathrm{kg}$ ha calore specifico $900\,\mathrm{J/(kg\,K)}$ e rimane nella stessa fase. La capacità termica vale $270\,\mathrm{J/K}$. Se passa da $10$ a $40\,{}^\circ\mathrm C$, la differenza è $+30\,\mathrm K$ e il calore assorbito vale $+8100\,\mathrm J$. Se torna alle condizioni iniziali, la differenza è $-30\,\mathrm K$ e il calore diventa $-8100\,\mathrm J$ nel modello con lo stesso calore specifico e senza altri scambi di energia.

Si può anche suddividere il riscaldamento a $25\,{}^\circ\mathrm C$. I due intervalli misurano $15\,\mathrm K$ ciascuno, quindi ogni contributo vale $4050\,\mathrm J$. La somma restituisce $8100\,\mathrm J$ perché la capacità termica è uguale sui due intervalli. Se un dato sperimentale mostra pendenze diverse del grafico del calore in funzione della temperatura, conviene usare capacità diverse nei rispettivi tratti.
:::

## Capacità termica

:::definizione{#capacita titolo="La risposta termica dell’intero corpo"}
La **capacità termica** $C$ è l’energia assorbita dall’intero corpo per ogni kelvin di aumento, nelle condizioni considerate. Per un campione omogeneo di massa $m$ si ottiene moltiplicando il calore specifico per la massa.

$$
C=mc,\qquad Q=C\Delta T.
$$

Per due parti già in equilibrio che si scaldano insieme di $\Delta T$, l’energia totale è $(C_1+C_2)\Delta T$. La somma delle capacità vale solo per le parti che subiscono la stessa variazione. Una capacità termica in $\mathrm{J/K}$ si può confrontare con la pendenza di un grafico che ha $Q$ sull’asse verticale e $\Delta T$ sull’asse orizzontale.
:::

:::esempio{titolo="Separare il campione dal contenitore"}
Per una massa di $0{,}40\,\mathrm{kg}$ in un contenitore, la pendenza sperimentale è $500\,\mathrm{J/K}$. La capacità del solo contenitore è $80\,\mathrm{J/K}$. La capacità del campione è $420\,\mathrm{J/K}$, quindi $c=\dfrac{420}{0{,}40}\,\mathrm{J/(kg\,K)}=1050\,\mathrm{J/(kg\,K)}$. Se si attribuisse l’intera pendenza al campione, si otterrebbe un valore troppo grande.

::grafico{f="0.5*x;0.42*x;0.08*x" punti="10,5,pieno;10,4.2,pieno;10,0.8,pieno" xmin=0 xmax=12 ymin=0 ymax=7 nomi="ΔT (K),Q (kJ)" legenda="\mathrm{totale};\mathrm{campione};\mathrm{recipiente}" titolo="A 10 K di aumento il campione assorbe 4,2 kJ e il recipiente 0,8 kJ."}
:::

:::esempio{#pendenze-calorimetro titolo="Isolare il calore specifico con due masse"}
Un recipiente viene usato per scaldare due masse diverse dello stesso materiale. In ciascuna prova la massa e il recipiente sono alla stessa temperatura e la potenza dispersa è trascurabile. In funzione della variazione comune di temperatura il calore richiesto ha pendenza $C_{\mathrm{tot}}=C_{\mathrm{rec}}+mc$. Per $m_1=0{,}20\,\mathrm{kg}$ la pendenza è $120\,\mathrm{J/K}$, mentre per $m_2=0{,}60\,\mathrm{kg}$ è $280\,\mathrm{J/K}$.

Sottraendo le misure si elimina il termine del recipiente, perché è lo stesso in entrambe le prove.

$$
\begin{aligned}
c&=\frac{280-120}{0{,}60-0{,}20}\,\mathrm{J/(kg\,K)}=400\,\mathrm{J/(kg\,K)}\\[6pt]
C_{\mathrm{rec}}&=(120-0{,}20\cdot 400)\,\mathrm{J/K}=40\,\mathrm{J/K}.
\end{aligned}
$$

Nella seconda prova il recipiente e il campione danno insieme $40+0{,}60\cdot400=280\,\mathrm{J/K}$, come richiesto. Se una sola prova è disponibile, si può trovare la capacità complessiva. Per separarla nelle due parti occorre conoscere una delle due capacità o aggiungere una misura indipendente.

::grafico{f="120*x;280*x" punti="10,1200,pieno;10,2800,pieno" xmin=0 xmax=12 ymin=0 ymax=3500 nomi="ΔT (K),Q (J)" legenda="0{,}20\,\mathrm{kg};0{,}60\,\mathrm{kg}" titolo="Le due pendenze si riferiscono a campione e recipiente insieme. La loro differenza isola il contributo dei 0,40 kg aggiunti."}
:::

## Equilibrio termico

::::teorema{#equilibrio titolo="Bilancio delle energie in un sistema isolato"}
Siano $T_{1,i}$ e $T_{2,i}$ le temperature iniziali di due corpi di capacità termiche positive $C_1$ e $C_2$. Il sistema è isolato, i corpi restano nella stessa fase e gli scambi interni sono solo di calore. Alla temperatura di equilibrio $T_f$ il bilancio dà

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}.
$$

La temperatura finale è una media pesata e si trova fra le due letture iniziali. Il peso maggiore è quello del corpo con capacità termica maggiore. Se le capacità sono uguali, si ottiene la media aritmetica.

:::dimostrazione
Per la conservazione dell’energia $Q_1+Q_2=0$. Sostituendo i due contributi si ottiene $C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=0$. Si raccoglie $T_f$ e si divide per $C_1+C_2>0$. I pesi $\dfrac{C_1}{C_1+C_2}$ e $\dfrac{C_2}{C_1+C_2}$ sono positivi e sommano a uno.
:::
::::

:::esempio{titolo="Leggere le due quantità di calore"}
Si mescolano $0{,}25\,\mathrm{kg}$ d’acqua a $60\,{}^\circ\mathrm C$ e $0{,}75\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$. Trascurando il contenitore e gli scambi con l’ambiente, $T_f=30\,{}^\circ\mathrm C$. Dividendo per il calore specifico comune si ottengono $Q_1/c=0{,}25(30-60)\,\mathrm{kg\,K}=-7{,}5\,\mathrm{kg\,K}$ e $Q_2/c=0{,}75(30-20)\,\mathrm{kg\,K}=+7{,}5\,\mathrm{kg\,K}$. I segni mostrano che la prima parte cede esattamente ciò che la seconda assorbe.

::grafico{curve="t,0.25*(60-t),20,60;t,0.75*(t-20),20,60" punti="30,7.5,pieno,E" xmin=20 xmax=68 ymin=0 ymax=32 nomi="T finale (°C),|Q|/c (kg K)" legenda="\mathrm{ceduto};\mathrm{assorbito}" titolo="L’incrocio mostra la temperatura a cui i due calori sono uguali in modulo."}
:::

:::teorema{#bilancio-aperto titolo="Quando la media delle temperature vale"}
La temperatura di equilibrio è una media pesata se il sistema scambia calore soltanto al proprio interno, tutte le parti restano nella stessa fase e ogni parte raggiunge la temperatura finale comune. Se al sistema arriva energia dall’esterno e gli altri contributi al bilancio sono trascurabili, la somma dei termini $C_j(T_f-T_{j,i})$ è l’energia netta $E_{\mathrm{est}}$ fornita dall’esterno. Il risultato si sposta rispetto alla media pesata per il termine $\dfrac{E_{\mathrm{est}}}{\sum_j C_j}$. Le capacità devono essere positive e si assumono costanti negli intervalli considerati.

Per due capacità $160\,\mathrm{J/K}$ e $640\,\mathrm{J/K}$ a $70$ e $20\,{}^\circ\mathrm C$, la media pesata vale $30\,{}^\circ\mathrm C$. Se durante il processo arrivano $4000\,\mathrm J$ dall’esterno, il termine aggiuntivo vale $5\,\mathrm K$ e $T_f=35\,{}^\circ\mathrm C$. Il corpo inizialmente caldo cede $5600\,\mathrm J$. Quello inizialmente freddo assorbe $9600\,\mathrm J$, quindi il bilancio dei due contributi è $+4000\,\mathrm J$.

La tabella confronta tre prove con le stesse condizioni iniziali. Con un’uscita netta di energia la temperatura finale scende di cinque kelvin e il corpo caldo cede più energia.

| Energia netta | Temperatura finale | Contributo del corpo caldo |
| --- | --- | --- |
| $-4\,\mathrm{kJ}$ | $25\,{}^\circ\mathrm C$ | $-7{,}2\,\mathrm{kJ}$ |
| $0\,\mathrm{kJ}$ | $30\,{}^\circ\mathrm C$ | $-6{,}4\,\mathrm{kJ}$ |
| $+4\,\mathrm{kJ}$ | $35\,{}^\circ\mathrm C$ | $-5{,}6\,\mathrm{kJ}$ |

::grafico{linee="20,-8 45,12" punti="25,-4,pieno;30,0,pieno;35,4,pieno" xmin=19 xmax=46 ymin=-9 ymax=13 nomi="T finale (°C),Energia netta (kJ)" titolo="L’intersezione con l’asse orizzontale dà l’equilibrio isolato a 30 °C. Per arrivare a 35 °C occorrono 4 kJ netti dall’esterno."}
:::

## Calorimetro e potenza di riscaldamento

:::osservazione{#riscaldamento titolo="Includere i corpi che assorbono energia"}
Se la capacità termica del calorimetro è apprezzabile, nel bilancio compare $C_{\mathrm{cal}}(T_f-T_{\mathrm{cal},i})$. Se era in equilibrio con il liquido freddo, il termine ha il medesimo intervallo di temperatura del liquido freddo e si possono sommare le due capacità termiche. Con una temperatura iniziale diversa, si scrive un terzo termine.
:::

:::definizione{#potenza-utile titolo="Dalla potenza al tempo"}
La **potenza** è l’energia trasferita per unità di tempo. Se l’ingresso elettrico è costante e uguale a $P$ e il rendimento è $\eta$, la potenza utile è $\eta P$. Il tempo per un trasferimento utile $Q$ è

$$
t=\frac{Q}{\eta P}.
$$

Un riscaldatore da $600\,\mathrm W$ con rendimento $0{,}75$ trasferisce $450\,\mathrm J$ al secondo al corpo. Per assorbire $18\,\mathrm{kJ}$ occorrono $40\,\mathrm s$. Se il rendimento cambiasse durante il riscaldamento, il modello con potenza utile costante richiederebbe una stima adatta all’intervallo.

::grafico{f="0.6*x;0.45*x" punti="40,24,pieno;40,18,pieno" xmin=0 xmax=50 ymin=0 ymax=31 nomi="t (s),E (kJ)" legenda="\mathrm{ingresso};\mathrm{utile}" titolo="In 40 s arrivano 24 kJ in ingresso, di cui 18 kJ al corpo."}
:::

:::esempio{#potenze-a-tratti titolo="Potenza utile su due intervalli"}
Un riscaldatore funziona per $40\,\mathrm s$ a $200\,\mathrm W$ con rendimento $0{,}70$ e poi per $20\,\mathrm s$ a $350\,\mathrm W$ con rendimento $0{,}80$. La potenza utile è costante in ciascun intervallo. Si moltiplica separatamente per la durata del tratto.

$$
\begin{aligned}
E_1&=0{,}70\cdot200\cdot40\,\mathrm J=5600\,\mathrm J\\[6pt]
E_2&=0{,}80\cdot350\cdot20\,\mathrm J=5600\,\mathrm J.
\end{aligned}
$$

I due tratti forniscono lo stesso contributo al corpo, perché nella seconda fase la potenza utile è doppia e la durata è dimezzata. Se la capacità termica è $560\,\mathrm{J/K}$ ed è già compreso tutto ciò che si scalda, la temperatura aumenta di $\dfrac{11200}{560}\,\mathrm K=20\,\mathrm K$. Consumo in ingresso ed energia utile si possono confrontare sommando separatamente i due bilanci. In ingresso si registrano $8000+7000=15000\,\mathrm J$. Il rendimento complessivo è dunque $\dfrac{11200}{15000}\simeq0{,}747$. In ciascun tratto il rendimento va pesato tramite l’energia in ingresso di quel tratto.

::grafico{linee="0,140 40,140;40,280 60,280" segmenti="40,140,40,280" poligoni="0,0 40,0 40,140 0,140;40,0 60,0 60,280 40,280" xmin=0 xmax=65 ymin=0 ymax=320 nomi="t (s),P utile (W)" titolo="I rettangoli di base 40 s e 20 s hanno la stessa area. Ciascuna area rappresenta 5,6 kJ trasferiti al corpo."}
:::

:::osservazione{#limite-riscaldamento titolo="Temperatura limite con dispersioni"}
Un corpo può continuare a ricevere energia elettrica pur restando a temperatura costante. Succede quando la potenza fornita uguaglia la potenza ceduta all’ambiente. Consideriamo un campione che riceve $240\,\mathrm W$. Ogni kelvin sopra la temperatura ambiente di $20\,{}^\circ\mathrm C$ aggiunge $8\,\mathrm W$ alla potenza ceduta all’aria. A $40\,{}^\circ\mathrm C$ il campione perde $160\,\mathrm W$, quindi la sua energia continua ad aumentare. A $50\,{}^\circ\mathrm C$ perde $240\,\mathrm W$ e il bilancio è nullo.

Una temperatura appena più alta aumenterebbe le perdite oltre la potenza in ingresso. La temperatura tornerebbe quindi a diminuire. Il modello descrive il regime dell’apparecchio e serve a valutare se una temperatura obiettivo è raggiungibile.

::grafico{f="240;8*(x-20)" punti="50,240,pieno,E" xmin=20 xmax=61 ymin=0 ymax=330 nomi="T (°C),P (W)" legenda="P_{in};P_{disp}" titolo="La potenza dispersa raggiunge quella in ingresso a 50 °C. A sinistra dell’incrocio il corpo si riscalda."}
:::

## Conduzione, convezione e irraggiamento

:::definizione{#trasmissione titolo="Tre modi di trasferire energia"}
Nella **conduzione** l’energia passa attraverso un materiale per interazioni fra le sue parti. Nella **convezione** il moto di un fluido trasporta materia ed energia. Nell’**irraggiamento** l’energia è trasmessa da onde elettromagnetiche, che si propagano anche nel vuoto. Una parete può condurre energia mentre, presso le sue facce, il fluido scambia energia per convezione.
:::

:::teorema{#parete titolo="Potenza attraverso una parete piana"}
Consideriamo una parete omogenea di spessore $d$, area $A$ e conducibilità $k$ circa costante. Le due facce hanno temperature uniformi mantenute fisse. In regime stazionario, trascurando le perdite dai bordi, il modulo della potenza condotta è

$$
P=\frac{kA(T_{\mathrm{calda}}-T_{\mathrm{fredda}})}{d}.
$$

Lo spessore misura la distanza lungo cui avviene il calo di temperatura. A parità di salto termico uno spessore doppio dimezza la pendenza e la potenza. Per $k=0{,}04\,\mathrm{W/(m\,K)}$, $A=5\,\mathrm{m^2}$, $d=0{,}10\,\mathrm m$ e salto di $20\,\mathrm K$ il modello dà $P=40\,\mathrm W$.

::grafico{linee="0,25 10,5" punti="0,25,pieno;10,5,pieno" xmin=0 xmax=11 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Profilo lineare per una parete spessa 10 cm, fra 25 °C e 5 °C."}
:::

:::osservazione{#resistenza-termica titolo="Strati in serie"}
Dal rapporto fra differenza termica e potenza si ricava la resistenza termica $R=\dfrac{d}{kA}$. Per strati a contatto con la stessa area, in regime stazionario la stessa potenza attraversa ogni strato. La differenza termica totale è la somma delle differenze attraverso gli strati, quindi si sommano le resistenze. Con $R_1=0{,}25\,\mathrm{K/W}$ e $R_2=0{,}75\,\mathrm{K/W}$, un salto complessivo di $20\,\mathrm K$ dà $20\,\mathrm W$. I salti nei due strati sono $5\,\mathrm K$ e $15\,\mathrm K$.

::grafico{linee="0,25 4,20 9,5" punti="4,20,pieno,I" xmin=0 xmax=10 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Con spessori di 4 e 5 cm, I è l’interfaccia a 20 °C."}
:::

:::osservazione{#vie-termiche-parallele titolo="Due vie alternative per il calore"}
Una parete composta da due porzioni affiancate offre due vie per il passaggio del calore. Se le facce di entrambe le porzioni sono alle stesse due temperature e si trascura la conduzione laterale al loro confine, il salto termico $\Delta T$ è lo stesso per entrambe. Per resistenze $R_1$ e $R_2$ le potenze sono $\dfrac{\Delta T}{R_1}$ e $\dfrac{\Delta T}{R_2}$. Si sommano queste potenze per ottenere la perdita complessiva. La resistenza corrispondente è il reciproco di $\dfrac{1}{R_1}+\dfrac{1}{R_2}$.

Con $\Delta T=18\,\mathrm K$, $R_1=0{,}60\,\mathrm{K/W}$ e $R_2=1{,}80\,\mathrm{K/W}$, la prima via trasferisce $30\,\mathrm W$ e la seconda $10\,\mathrm W$. Il totale vale $40\,\mathrm W$, quindi la resistenza equivalente è $\dfrac{18}{40}\,\mathrm{K/W}=0{,}45\,\mathrm{K/W}$. È minore di entrambe le resistenze, perché il flusso dispone di due vie a parità di differenza. Per confronto, in strati attraversati uno dopo l’altro la potenza è la stessa e si sommano le differenze di temperatura.
:::

:::esempio{#temperatura-interfaccia titolo="Invertire gli strati della parete"}
Due strati sono a contatto e l’area attraversata resta costante. Le temperature delle facce esterne sono $24\,{}^\circ\mathrm C$ e $-6\,{}^\circ\mathrm C$. Il primo strato ha resistenza $0{,}20\,\mathrm{K/W}$, il secondo $1{,}30\,\mathrm{K/W}$. A regime e senza perdite laterali, si sommano le resistenze perché ogni secondo la stessa energia passa attraverso entrambi. La potenza è $\dfrac{30}{1{,}50}\,\mathrm W=20\,\mathrm W$. Dal lato caldo al contatto la temperatura scende di $20\cdot0{,}20=4\,\mathrm K$, quindi l’interfaccia è a $20\,{}^\circ\mathrm C$.

Se si inverte l’ordine, la potenza rimane la stessa perché la resistenza complessiva e le temperature agli estremi sono immutate. Il salto nel primo strato diventa $20\cdot1{,}30=26\,\mathrm K$ e l’interfaccia si porta a $-2\,{}^\circ\mathrm C$. Una misura all’interfaccia permette così di distinguere due pareti che trasferiscono all’esterno la stessa potenza. Il calcolo usa temperature di faccia fissate e si riferisce al regime raggiunto. Durante il raffreddamento della parete stessa i due strati possono accumulare o cedere energia a ritmi diversi.

Se gli strati misurano rispettivamente $4\,\mathrm{cm}$ e $7\,\mathrm{cm}$, il contatto si sposta insieme allo strato che viene per primo. I due profili hanno gli stessi valori agli estremi, mentre cambiano posizione e temperatura dell’interfaccia.

::grafico{linee="0,24 4,20 11,-6" segmenti="0,24,7,-2;7,-2,11,-6" punti="4,20,pieno,A;7,-2,pieno,B" xmin=0 xmax=12 ymin=-11 ymax=28 nomi="x (cm),T (°C)" titolo="Il tratto continuo incontra l’interfaccia A a 20 °C. Nell’ordine inverso, il tratto tratteggiato la incontra in B a −2 °C."}
:::
