---
titolo: "Calore, calorimetria e trasmissione termica"
sommario: "Calore specifico, capacità termica, equilibrio calorimetrico e trasmissione del calore."
---

## Calore e temperatura

:::definizione{#calore titolo="Energia trasferita per differenza di temperatura"}
Il **calore** $Q$ è energia trasferita tra corpi a causa di una differenza di temperatura. Si misura in joule. Per convenzione $Q>0$ quando il corpo considerato assorbe calore e $Q<0$ quando lo cede. La temperatura descrive lo stato termico; il calore descrive un trasferimento di energia.

In uno scambio spontaneo il calore passa dal corpo a temperatura maggiore a quello a temperatura minore. Una volta raggiunto l'equilibrio termico, lo scambio netto cessa. Il valore convenzionale della caloria termochimica è $1\,\mathrm{cal}=4{,}184\,\mathrm J$.
:::

## Calore specifico

:::teorema{#specifico titolo="Riscaldamento senza cambiamenti di stato"}
Se la sostanza rimane nello stesso stato fisico e il calore specifico $c$ è circa costante,
$$Q=mc(T_f-T_i)=mc\Delta T.$$
Il calore specifico si misura in $\mathrm{J/(kg\,K)}$ e dipende dalla sostanza e dalle condizioni del processo. Per gli esercizi sull'acqua liquida si assume $c=4200\,\mathrm{J/(kg\,K)}$, salvo diversa indicazione. Riscaldare $0{,}50\,\mathrm{kg}$ d'acqua di $10\,\mathrm K$ richiede $21000\,\mathrm J$.
:::

## Capacità termica

:::definizione{#capacita titolo="La risposta termica dell'intero corpo"}
La **capacità termica** è $C=mc$ e si misura in $\mathrm{J/K}$. La relazione calorimetrica diventa $Q=C\Delta T$. Due corpi della stessa sostanza hanno capacità termiche diverse se hanno masse diverse. Per una capacità termica di $200\,\mathrm{J/K}$, assorbire $1000\,\mathrm J$ produce un aumento di temperatura di $5\,\mathrm K$.

::grafico{f="200*x" xmin=0 xmax=10 ymin=0 ymax=2000 nomi="ΔT,Q" titolo="La pendenza del grafico calore-variazione di temperatura è la capacità termica"}
:::

## Equilibrio tra due corpi

::::teorema{#equilibrio titolo="Bilancio del calore in un sistema isolato"}
Due corpi che scambiano calore soltanto tra loro, senza cambiamenti di stato, raggiungono una temperatura comune $T_e$. Con calori specifici costanti,
$$m_1c_1(T_e-T_1)+m_2c_2(T_e-T_2)=0,$$
quindi
$$T_e=\frac{m_1c_1T_1+m_2c_2T_2}{m_1c_1+m_2c_2}.$$
:::dimostrazione
Il sistema è isolato, quindi il calore assorbito da un corpo è l'opposto di quello ceduto dall'altro. Sviluppando il bilancio si raccolgono i termini con $T_e$. Dividendo per la somma positiva delle capacità termiche si ottiene la formula.
:::
::::

## Calorimetro e potenza di riscaldamento

:::osservazione{#riscaldamento titolo="Includere i corpi che assorbono energia"}
Se il recipiente ha capacità termica $C_{\mathrm{cal}}$ e temperatura iniziale $T_{\mathrm{cal}}$, nel bilancio compare anche $C_{\mathrm{cal}}(T_e-T_{\mathrm{cal}})$. Un recipiente di capacità trascurabile può essere escluso soltanto quando l'ipotesi è dichiarata.

Un riscaldatore di potenza costante $\mathcal P$ fornisce energia $\mathcal P\Delta t$. Se la frazione assorbita dal corpo è $\eta$, si ha $Q=\eta\mathcal P\Delta t$. Il tempo richiesto è quindi $\Delta t=\dfrac{mc\Delta T}{\eta\mathcal P}$, in assenza di cambiamenti di stato.
:::

## Conduzione, convezione e irraggiamento

:::definizione{#trasmissione titolo="Tre modi di trasferire energia"}
Nella **conduzione** l'energia si trasferisce attraverso la materia senza trasporto macroscopico di materia. Attraverso una parete piana di spessore $d$, area $A$ e conducibilità $\lambda$, in regime stazionario si ha $\mathcal P=\dfrac{\lambda A(T_1-T_2)}{d}$, con $T_1>T_2$. La conducibilità si misura in $\mathrm{W/(m\,K)}$.

Nella **convezione** il trasferimento è associato al movimento di un fluido. Nell'**irraggiamento** l'energia è trasportata da onde elettromagnetiche e può propagarsi anche nel vuoto. Un rivestimento isolante riduce il flusso di calore; il grado di isolamento si valuta considerando anche spessore e area della superficie.
:::
