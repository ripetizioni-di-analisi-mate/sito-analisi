---
titolo: "Fluidi in equilibrio"
sommario: "Densità, pressione, legge di Stevino, principio di Pascal, pressione atmosferica e spinta di Archimede."
---

## Pressione e densità

:::definizione{#pressione titolo="Forza distribuita su una superficie"}
La pressione media su una superficie è il rapporto fra forza normale e area, $p=\dfrac{F_\perp}{A}$. Il pascal è $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. Una forza di $100\,\mathrm N$ distribuita su $0{,}020\,\mathrm{m^2}$ produce pressione $5000\,\mathrm{Pa}$.

La densità è $\rho=\dfrac mV$. Nei problemi si usa spesso acqua con $\rho=1000\,\mathrm{kg/m^3}$, dichiarando l'approssimazione. In un fluido a riposo le forze di pressione sono perpendicolari alle superfici. La pressione in un punto è uno scalare; le forze esercitate sulle diverse facce hanno direzioni diverse perché cambiano le normali alle facce.
:::

## La legge di Stevino

:::teorema{#stevino titolo="Pressione e profondità"}
In un liquido omogeneo fermo, con densità costante e gravità uniforme, alla profondità $h$ sotto una superficie a pressione $p_0$,
$$
p=p_0+\rho gh.
$$
La relazione si ricava imponendo l'equilibrio di una colonna di liquido di area $A$: $pA-p_0A=\rho Ahg$. Dividendo per $A$ si ottiene la formula. La differenza di pressione dipende dal dislivello, dalla densità e da $g$, mentre non dipende dalla forma del recipiente.

A $2{,}0\,\mathrm m$ sotto l'acqua, la sovrapressione è circa $1{,}96\cdot10^4\,\mathrm{Pa}$. Se la superficie è aperta all'atmosfera, la pressione assoluta si ottiene aggiungendo quella atmosferica.
:::

::grafico{f="2+1.5*x" xmin=0 xmax=5 ymin=0 ymax=10 nomi="h,p" titolo="In un liquido omogeneo la pressione cresce linearmente con la profondità"}

## Pressione assoluta e manometri

:::osservazione{#manometri titolo="Confrontare pressioni"}
La pressione relativa o manometrica è $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}$. Un'indicazione manometrica nulla significa uguaglianza con la pressione atmosferica, non assenza di pressione assoluta. Nei calcoli si deve distinguere quale delle due è fornita.

In un tubo a U con lo stesso liquido manometrico, la differenza fra le pressioni applicate ai due rami è $\Delta p=\rho g\Delta h$, nelle condizioni in cui il contributo delle colonne sovrastanti è trascurabile o già considerato. La pressione è maggiore dal lato che comprime il liquido al livello più basso. Con mercurio di densità $13600\,\mathrm{kg/m^3}$ e dislivello $0{,}10\,\mathrm m$, la differenza è circa $1{,}33\cdot10^4\,\mathrm{Pa}$.
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmissione di una variazione di pressione"}
Una variazione di pressione applicata a un fluido confinato in equilibrio si trasmette a tutti i suoi punti. In un torchio idraulico ideale con pistoni alla stessa quota,
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Con area del secondo pistone dieci volte maggiore, una forza $F_1=50\,\mathrm N$ permette di equilibrare $F_2=500\,\mathrm N$, trascurando pesi dei pistoni e attriti. Per un fluido incomprimibile il volume spostato è lo stesso: $A_1s_1=A_2s_2$. Il pistone più grande si sposta di meno. Il lavoro ideale in ingresso uguaglia quello in uscita; il guadagno di forza è compensato dal diverso spostamento. Se i pistoni sono a quote diverse, si aggiunge la variazione idrostatica.
:::

## Principio di Archimede

:::teorema{#archimede titolo="Spinta del fluido"}
Un corpo immerso in un fluido in equilibrio riceve una spinta verso l'alto uguale al peso del fluido spostato,
$$
F_A=\rho_f gV_{\mathrm{immerso}}.
$$
La spinta deriva dalla pressione maggiore sulle parti più profonde. Il volume da usare è quello immerso, che può differire dal volume totale. Un corpo completamente immerso con volume $2{,}0\cdot10^{-3}\,\mathrm{m^3}$ in acqua riceve spinta circa $19{,}6\,\mathrm N$.

Se il corpo è appeso fermo a un filo e la spinta è minore del peso, la tensione è $T=mg-F_A$. Il peso gravitazionale resta $mg$, mentre la misura della tensione diminuisce. Per un corpo che risale o scende accelerando si deve includere $ma$ nel bilancio.
:::

## Galleggiamento

:::teorema{#galleggiamento titolo="Frazione immersa"}
Un corpo omogeneo galleggia in equilibrio con $\rho_c<\rho_f$ quando la spinta uguaglia il peso. Da $\rho_fgV_{\mathrm{immerso}}=\rho_cgV_{\mathrm{tot}}$ si trova
$$
\frac{V_{\mathrm{immerso}}}{V_{\mathrm{tot}}}=\frac{\rho_c}{\rho_f}.
$$
Un blocco con densità $600\,\mathrm{kg/m^3}$ in acqua ha il $60\%$ del volume immerso. Con densità uguali il modello ideale ammette equilibrio completamente immerso; con densità del corpo maggiore il corpo non può galleggiare liberamente in quel fluido.

Per un corpo cavo, come una nave, si confronta la densità media calcolata con massa totale e volume esterno che può spostare il liquido. La stabilità dell'orientamento di galleggiamento richiede anche un bilancio dei momenti e non segue dalla sola uguaglianza delle forze verticali.
:::

::grafico{assi=0 uguale=1 poligoni="-3,-2 3,-2 3,1 -3,1;-1,-1 1,-1 1,2 -1,2" linee="-3,3 -3,-2 3,-2 3,3" vettori="0,0,0,2.4,FA;0,0,0,-2.4,P" xmin=-4 xmax=4 ymin=-3 ymax=4 titolo="Corpo galleggiante in equilibrio: spinta e peso si compensano"}
