---
titolo: "Spinta di Archimede e galleggiamento"
sommario: "Volume immerso, peso apparente, densità, carichi sostenibili e corpi vincolati."
---

## Il principio di Archimede

::::teorema{#archimede titolo="Peso del fluido spostato"}
Un corpo immerso in un fluido in quiete, esposto alla pressione del fluido sulla parte di superficie immersa, riceve una risultante verso l'alto detta **spinta di Archimede**. Il suo modulo è il peso del fluido che occuperebbe il volume sostituito dalla parte immersa. Per densità del fluido $\rho_f$ e campo gravitazionale $g$ uniformi,
$$
F_A=\rho_f gV_i,
$$
dove $V_i$ è il volume immerso che esclude il fluido. Si trascura la spinta dell'aria sulla parte emersa quando è piccola rispetto a quella del liquido.

:::dimostrazione
Si consideri il volume di fluido presente prima che si inserisca il corpo. Quel fluido è fermo, quindi le forze di pressione sulla sua superficie ne equilibrano il peso. Lo si sostituisce idealmente con un corpo di uguale forma immersa. Poiché le pressioni alla frontiera sono le stesse, la risultante di pressione resta quella che sosteneva il fluido sostituito. Questo mostra perché nel calcolo entra la densità del fluido.
:::
::::

:::esempio{titolo="La differenza di pressione su un prisma"}
Un prisma verticale interamente in acqua di densità $1000\,\mathrm{kg/m^3}$ ha area orizzontale $A=0{,}02\,\mathrm m^2$ e altezza $h=0{,}3\,\mathrm m$. Con $g=10\,\mathrm{N/kg}$ la base inferiore ha pressione superiore a quella della faccia alta di $3000\,\mathrm{Pa}$. Le forze laterali sono orizzontali e si compensano. Il risultato verticale è
$$
F_A=(3000\,\mathrm{Pa})(0{,}02\,\mathrm m^2)=60\,\mathrm N.
$$
Il volume $Ah$ è $0{,}006\,\mathrm m^3$, cioè $6\,\mathrm L$. Il peso di sei litri d'acqua è infatti sessanta newton.
:::

::grafico{assi=0 uguale=1 linee="-2,2 4,2" poligoni="0,0 2,0 2,1.5 0,1.5" vettori="1,2.1,1,1.5,p₁ A;1,-1.35,1,0,p₂ A" etichette="2.8,0.75,h" xmin=-3 xmax=5 ymin=-2 ymax=3 titolo="Prisma immerso. La forza sulla faccia inferiore è maggiore. Le frecce rappresentano solo le componenti verticali"}

## Volume immerso e problemi inversi

:::osservazione{#inverse titolo="Identificare il volume che sposta fluido"}
Per un corpo rigido, impermeabile e interamente sommerso, la parte immersa occupa il volume esterno $V$. Un corpo parzialmente immerso dà $V_i<V$. Per una scatola cava e stagna si considera il volume esterno immerso. Se un'apertura consente all'acqua di riempire parte della cavità, il liquido che entra non è più escluso da quel volume.

Con una spinta di $72\,\mathrm N$ in un olio di densità $800\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, il volume spostato è $72/(800\cdot10)\,\mathrm m^3=0{,}009\,\mathrm m^3$. Sono $9\,\mathrm L$, perché $1\,\mathrm L=10^{-3}\,\mathrm m^3$. Se il corpo emerge in parte, dal solo dato della spinta non si ricava il volume totale.
:::

## Peso apparente

:::teorema{#apparente titolo="La tensione del dinamometro"}
Un corpo sospeso a un dinamometro dall'alto, fermo e immerso senza altri contatti, soddisfa $T+F_A=P$. La lettura è $T=P-F_A$, purché il filo rimanga teso. Si chiama **peso apparente** la lettura nelle condizioni descritte. Il peso gravitazionale non cambia perché la massa e il campo sono gli stessi.

Se un solido pesa $90\,\mathrm N$ trascurando la spinta dell'aria e legge $60\,\mathrm N$ in acqua a immersione completa, la spinta è $30\,\mathrm N$. Il peso del solido e la perdita apparente sono rispettivamente $\rho_c Vg$ e $\rho_f Vg$. Dividendo si ottiene $\rho_c/\rho_f=P/(P-T)=3$. Lo stesso volume si semplifica perché l'immersione è completa.
:::

## Galleggiamento libero

:::teorema{#galleggiamento titolo="Spinta uguale al peso"}
Un corpo che galleggia in quiete sotto la sola azione di peso e spinta soddisfa $F_A=P$. Perché esista una configurazione con volume emerso, il peso deve essere minore della spinta corrispondente all'immersione completa. Se il peso la supera, non si trova un volume immerso ammissibile che equilibri il corpo. Se le due forze si eguagliano proprio a immersione completa, il corpo può restare sospeso nel fluido ideale uniforme.

Una barca che pesa $5000\,\mathrm N$ riceve $5000\,\mathrm N$ di spinta quando galleggia. In acqua più densa la stessa forza è prodotta da un volume spostato minore. In questo confronto è fissato il peso, mentre il volume immerso si adatta.
:::

## Frazione immersa

::::teorema{#frazione titolo="Rapporto tra densità"}
Per un corpo che galleggia liberamente in un liquido uniforme la frazione immersa è
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f},
$$
dove $\rho_c=m/V$ è la densità media del corpo, calcolata sul volume esterno che escluderebbe il liquido a immersione completa.

:::dimostrazione
L'equilibrio uguaglia la spinta $\rho_f gV_i$ al peso $mg=\rho_c Vg$. Si divide per il prodotto positivo $\rho_f gV$. La frazione emersa è il complemento a uno della frazione immersa.
:::
::::

:::esempio{titolo="Volume immerso e volume emerso"}
In acqua di densità $1000\,\mathrm{kg/m^3}$ un blocco di densità $600\,\mathrm{kg/m^3}$ immerge sei decimi del suo volume. Se ha volume totale $20\,\mathrm L$, ne immerge $12\,\mathrm L$ e ne lascia emergere $8\,\mathrm L$. Per un prisma verticale di sezione costante la stessa frazione vale per le altezze. Con sezioni variabili si usano direttamente i volumi.
:::

::grafico{f="x" nomi="ρc / ρf,Vᵢ / V" punti="0.6,0.6,pieno,A;1,1,pieno,B" xmin=0 xmax=1 ymin=0 ymax=1.1 titolo="La frazione immersa cresce con la densità relativa. B è il limite dell'immersione completa"}

## Carichi sui galleggianti

:::teorema{#carichi titolo="Massa totale e volume disponibile"}
Per un galleggiante rigido di massa $m_0$ con un carico di massa $m_c$ tenuto fuori dall'acqua, l'equilibrio dà $\rho_f V_i=m_0+m_c$. L'ulteriore volume necessario per un aumento di massa $\Delta m$ è $\Delta V_i=\Delta m/\rho_f$. Se il massimo volume spostabile è $V_{\max}$, la portata limite nel modello vale $\rho_f V_{\max}-m_0$.

Con $V_{\max}=80\,\mathrm L$ in acqua di densità $1\,\mathrm{kg/L}$ e massa del galleggiante $24\,\mathrm{kg}$, la capacità limite è $56\,\mathrm{kg}$. Se si richiede che restino fuori $10\,\mathrm L$ di volume, il massimo volume immerso diventa $70\,\mathrm L$ e la portata scende a $46\,\mathrm{kg}$.
:::

## Corpi vincolati

:::osservazione{#vincoli titolo="La corda può tirare verso l'alto o verso il basso"}
Per un corpo che tenderebbe ad affondare, una corda ancorata sopra aggiunge una tensione verso l'alto. Se tende a salire quando è completamente immerso, una corda ancorata sotto può aggiungere una tensione verso il basso. Si scrive il bilancio nel verso effettivo del vincolo. Con $F_A=28\,\mathrm N$ e $P=19\,\mathrm N$ occorre una tensione verso il basso di $9\,\mathrm N$. Una corda dall'alto non potrebbe applicare quella forza.
:::

## Confronti fra situazioni

:::osservazione{#confronti titolo="Quali fattori cambiano"}
Su un corpo rigido interamente immerso in un liquido uniforme, lontano dalle pareti e dal fondo, due profondità diverse danno lo stesso $V_i$ e quindi la stessa spinta. Le pressioni assolute possono cambiare senza che cambi la loro differenza fra le parti alte e basse del corpo. Se la densità del fluido o il volume immerso cambiano, la conclusione va riesaminata.

A parità di volume immerso e fluido, due corpi di massa diversa ricevono uguale spinta. A parità di peso nel galleggiamento libero, due fluidi di densità diversa danno uguale spinta con volumi immersi differenti. Prima di confrontare le spinte si stabilisce quale grandezza viene mantenuta fissa dall'esperimento.
:::
