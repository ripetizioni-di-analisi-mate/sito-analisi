---
titolo: Temperatura, calore e termodinamica
sommario: Gas ideali, calorimetria e passaggi di stato, trasmissione del calore, primo e secondo principio, cicli, rendimento ed entropia.
---

:::percorso
Dopo il lavoro e l'energia meccanica si studia come l'energia passa fra sistemi attraverso lavoro e calore. Le variabili di stato descrivono il sistema senza seguire ogni molecola. Il primo principio impone il bilancio energetico; il secondo stabilisce il verso dei processi spontanei.
:::

## Sistemi, stato e temperatura

:::definizione{#stato-termico titolo="Sistema e variabili di stato"}
Il **sistema** è la porzione di materia o la regione scelta per lo studio; il resto è l'ambiente. Un sistema aperto scambia materia ed energia, uno chiuso scambia energia senza materia, uno isolato non scambia né materia né energia.

Uno stato di equilibrio è descritto da variabili macroscopiche, come pressione $p$, volume $V$ e temperatura $T$. Una **funzione di stato**, come energia interna o entropia, ha una variazione determinata dagli stati iniziale e finale. Calore e lavoro dipendono dal processo.
$$
T\,(\mathrm K)=t\,({}^\circ\mathrm C)+273{,}15.
$$
Una variazione di $1\,\mathrm K$ è uguale a una variazione di $1\,{}^\circ\mathrm C$. Nei rapporti di temperature e nell'equazione dei gas si usa la scala kelvin.
:::

## Gas ideali ed energia interna

:::teorema{#gas-ideale titolo="Equazione di stato"}
Il **gas ideale** è un modello di particelle con volume proprio trascurabile e interazioni trascurabili al di fuori degli urti. Per $n$ moli,
$$
pV=nRT,\qquad R\simeq8{,}314\,\mathrm{J/(mol\,K)}.
$$
Per una quantità fissata di gas, $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. L'energia interna di un gas ideale dipende solo dalla temperatura. Con capacità termiche molari costanti, $\Delta U=nC_V\Delta T$. Per il gas monoatomico classico $C_V=\dfrac32R$; per il gas biatomico con rotazioni attive e vibrazioni trascurabili $C_V\simeq\dfrac52R$. Vale $C_p-C_V=R$.
:::

## Calore e calorimetria

:::definizione{#calorimetria titolo="Capacità termica e calore specifico"}
Il **calore** è energia trasferita per differenza di temperatura. Per un corpo che cambia temperatura senza passaggi di stato e con calore specifico $c$ circa costante,
$$
Q=mc\Delta T=C\Delta T.
$$
$C=mc$ è la capacità termica, in $\mathrm{J/K}$; $c$ si misura in $\mathrm{J/(kg\,K)}$. Per un sistema complessivamente isolato il bilancio calorimetrico è $\sum_iQ_i=0$, includendo recipiente ed eventuali passaggi di stato. Il segno è positivo per un corpo che assorbe calore.
:::

:::esempio{titolo="Mescolamento di acqua"}
Si mescolano, in un recipiente di capacità termica trascurabile, $0{,}20\,\mathrm{kg}$ di acqua a $60\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$. Con lo stesso calore specifico e senza dispersioni,
$$
0{,}20c(T_f-60)+0{,}30c(T_f-20)=0,
\qquad T_f=36\,{}^\circ\mathrm C.
$$
Il risultato è compreso fra le due temperature iniziali, come richiesto dall'equilibrio termico nelle ipotesi date.
:::

## Cambiamenti di stato

:::definizione{#calore-latente titolo="Energia nei passaggi di fase"}
Durante una transizione di fase di una sostanza pura alla pressione fissata di equilibrio la temperatura resta costante mentre varia la frazione delle due fasi. Il calore scambiato è
$$
Q=m\ell,
$$
con $\ell$ calore latente specifico. Fusione ed evaporazione assorbono energia; solidificazione e condensazione la cedono. Per riscaldare ghiaccio, fonderlo e poi riscaldare l'acqua si sommano i tre contributi. L'evaporazione dalla superficie può avvenire anche sotto la temperatura di ebollizione e sottrae energia al liquido.
:::

## Conduzione, convezione e irraggiamento

:::definizione{#trasmissione-calore titolo="Meccanismi di trasferimento"}
Nella **conduzione** l'energia passa attraverso la materia senza moto macroscopico del corpo. Per una parete piana uniforme, in regime stazionario e con conducibilità $\kappa$ costante,
$$
P=\kappa A\frac{T_1-T_2}{L},\qquad T_1>T_2.
$$
Nella **convezione** il fluido in movimento trasporta energia. Nell'**irraggiamento** il trasferimento avviene mediante radiazione elettromagnetica e può avvenire nel vuoto. Per una piccola superficie a temperatura uniforme che scambia con un grande ambiente isoterma, nel modello grigio,
$$
P_{\mathrm{netta}}=\varepsilon\sigma A(T^4-T_a^4),
$$
con emissività $0\le\varepsilon\le1$ e costante di Stefan-Boltzmann $\sigma\simeq5{,}67\cdot10^{-8}\,\mathrm{W/(m^2K^4)}$. Le temperature sono assolute. I tre meccanismi possono agire contemporaneamente nel bilancio termico del corpo umano.
:::

## Lavoro e primo principio

:::teorema{#primo-principio titolo="Bilancio dell'energia interna"}
Si assume positivo il calore assorbito $Q$ e positivo il lavoro $W$ compiuto dal sistema sull'ambiente. Per un sistema chiuso, trascurando variazioni macroscopiche di energia cinetica e potenziale,
$$
\Delta U=Q-W.
$$
Per un'espansione quasi statica, con solo lavoro di volume, $W=\int p\,dV$, uguale all'area con segno sotto la curva nel diagramma $p,V$. Un'espansione ha lavoro positivo, una compressione negativo. Se il processo non è quasi statico si usa la pressione esterna nel lavoro di frontiera, quando questo modello è applicabile.
:::

## Trasformazioni di un gas ideale

:::osservazione{#trasformazioni titolo="Isocora, isobara, isoterma e adiabatica"}
Per gas ideale e solo lavoro di volume, con capacità termiche costanti dove usate:

| Trasformazione | Condizione | Conseguenza |
| --- | --- | --- |
| isocora | $V$ costante | $W=0$, $Q=\Delta U=nC_V\Delta T$ |
| isobara quasi statica | $p$ costante | $W=p\Delta V$, $Q=nC_p\Delta T$ |
| isoterma reversibile | $T$ costante | $\Delta U=0$, $W=Q=nRT\ln\dfrac{V_f}{V_i}$ |
| adiabatica | $Q=0$ | $\Delta U=-W$ |

Per un'adiabatica reversibile con $\gamma=C_p/C_V$ costante vale anche $pV^\gamma=\text{costante}$. Una trasformazione reversibile può essere invertita ripristinando sistema e ambiente; attrito, espansione libera e scambi con differenza finita di temperatura producono irreversibilità.
:::

## Secondo principio e macchine termiche

:::teorema{#secondo-principio titolo="Direzione dei processi e rendimento"}
L'enunciato di **Kelvin-Planck** esclude una macchina ciclica il cui unico risultato sia convertire integralmente in lavoro il calore assorbito da un solo serbatoio. L'enunciato di **Clausius** esclude un processo il cui unico risultato sia trasferire calore da un corpo freddo a uno caldo.

In un ciclo $\Delta U=0$. Per una macchina che assorbe $Q_h>0$ dalla sorgente calda e cede una quantità $Q_c>0$ alla fredda,
$$
W=Q_h-Q_c,\qquad \eta=\frac{W}{Q_h}=1-\frac{Q_c}{Q_h}.
$$
Fra due sorgenti alle temperature assolute $T_h>T_c$, il ciclo reversibile di **Carnot**, composto da due isoterme e due adiabatiche reversibili, ha rendimento
$$
\eta_C=1-\frac{T_c}{T_h}.
$$
Nessuna macchina fra le stesse due sorgenti può avere rendimento superiore. Un frigorifero trasferisce calore dalla sorgente fredda spendendo lavoro; il suo coefficiente di prestazione è $\mathrm{COP}=\dfrac{Q_c}{W}$.
:::

## Entropia e verso spontaneo dei processi

:::definizione{#entropia titolo="Entropia come funzione di stato"}
La variazione di **entropia** si calcola lungo un cammino reversibile fra gli stessi stati:
$$
\Delta S=\int_i^f\frac{\delta Q_{\mathrm{rev}}}{T}.
$$
Un serbatoio a temperatura costante che assorbe $Q$ ha $\Delta S=\dfrac QT$. Un corpo di capacità termica costante ha $\Delta S=mc\ln\dfrac{T_f}{T_i}$. Per un gas ideale,
$$
\Delta S=nC_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}.
$$
Tutte le temperature sono in kelvin. Per sistema e ambiente considerati insieme, $\Delta S_{\mathrm{tot}}\ge0$: è nulla per un processo reversibile e positiva per uno irreversibile. Per esempio il calore $Q$ che passa da $T_h$ a $T_c<T_h$ produce $\Delta S_{\mathrm{tot}}=Q\left(\dfrac1{T_c}-\dfrac1{T_h}\right)>0$.

Nell'interpretazione statistica di Boltzmann, $S=k_B\ln\Omega$, dove $\Omega$ è il numero di microstati compatibili con lo stato macroscopico. L'evoluzione spontanea di un sistema isolato va verso macrostati statisticamente più probabili; una parte del sistema può diminuire la propria entropia se l'aumento dell'ambiente compensa tale diminuzione.
:::
