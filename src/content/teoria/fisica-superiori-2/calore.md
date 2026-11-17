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

## Calore specifico

:::teorema{#specifico titolo="Riscaldamento senza cambiamenti di stato"}
Per un campione di massa $m$ che rimane nella stessa fase, l’energia assorbita cresce con la quantità di materia e con la variazione di temperatura. In un intervallo in cui il **calore specifico** $c$ è circa costante e per le condizioni della misura si usa la relazione

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

## Equilibrio termico

::::teorema{#equilibrio titolo="Bilancio delle energie in un sistema isolato"}
Siano $T_{1,i}$ e $T_{2,i}$ le temperature iniziali di due corpi di capacità termiche positive $C_1$ e $C_2$. Il sistema è isolato, i corpi restano nella stessa fase e gli scambi interni sono solo di calore. Alla temperatura di equilibrio $T_f$ il bilancio dà

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}.
$$

La temperatura finale è una media pesata e si trova fra le due letture iniziali. Il peso maggiore è quello del corpo con capacità termica maggiore. Se le capacità sono uguali, si ottiene la media aritmetica.

:::dimostrazione
Per la conservazione dell’energia $Q_1+Q_2=0$. Sostituendo i due contributi si ottiene $C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=0$. Si raccoglie $T_f$ e si divide per $C_1+C_2>0$. I pesi $C_1/(C_1+C_2)$ e $C_2/(C_1+C_2)$ sono positivi e sommano a uno.
:::
::::

:::esempio{titolo="Leggere le due quantità di calore"}
Si mescolano $0{,}25\,\mathrm{kg}$ d’acqua a $60\,{}^\circ\mathrm C$ e $0{,}75\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$. Trascurando il contenitore, $T_f=30\,{}^\circ\mathrm C$. Il primo contributo è $0{,}25c(30-60)=-7{,}5c$, il secondo è $0{,}75c(30-20)=7{,}5c$. Il controllo sui segni conferma che la prima parte cede esattamente ciò che la seconda assorbe.

::grafico{f="0.25*(60-x);0.75*(x-20)" punti="30,7.5,pieno,E" xmin=20 xmax=61 ymin=0 ymax=27 nomi="T_f (°C),|Q|/c" legenda="\mathrm{ceduto};\mathrm{assorbito}" titolo="Si cerca l’incrocio dei moduli, che identifica il bilancio di segno opposto."}
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
Dal rapporto fra differenza termica e potenza si ricava la resistenza termica $R=d/(kA)$. Per strati a contatto con la stessa area, in regime stazionario la stessa potenza attraversa ogni strato. La differenza termica totale è la somma delle differenze attraverso gli strati, quindi si sommano le resistenze. Con $R_1=0{,}25\,\mathrm{K/W}$ e $R_2=0{,}75\,\mathrm{K/W}$, un salto complessivo di $20\,\mathrm K$ dà $20\,\mathrm W$. I salti nei due strati sono $5\,\mathrm K$ e $15\,\mathrm K$.

::grafico{linee="0,25 4,20 9,5" punti="4,20,pieno,I" xmin=0 xmax=10 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Con spessori di 4 e 5 cm, I è l’interfaccia a 20 °C."}
:::
