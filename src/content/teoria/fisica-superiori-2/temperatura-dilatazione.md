---
titolo: "Temperatura e dilatazione termica"
sommario: "Equilibrio termico, scale di temperatura, dilatazione lineare, superficiale e volumica."
---

## Equilibrio termico

:::definizione{#equilibrio titolo="Confrontare lo stato termico"}
La **temperatura** è la grandezza che permette di stabilire se due corpi sono in equilibrio termico. Due corpi a contatto possono scambiarsi energia; raggiunto l'equilibrio, hanno la stessa temperatura e lo scambio netto di energia per differenza di temperatura cessa.

Il principio zero afferma che due corpi in equilibrio termico con un terzo sono in equilibrio termico tra loro. Questa proprietà permette di usare un termometro. La misura richiede che il termometro raggiunga l'equilibrio con il corpo e che la sua presenza ne alteri in modo trascurabile la temperatura.
:::

## Celsius e kelvin

:::definizione{#scale titolo="La temperatura assoluta"}
La scala Celsius usa i gradi Celsius, indicati con $\mathrm{^{\circ}C}$. La scala kelvin usa i kelvin, indicati con $\mathrm K$. La conversione è
$$T=t_C+273{,}15,$$
dove $T$ è il valore in kelvin e $t_C$ quello in gradi Celsius. Perciò $20\,\mathrm{^{\circ}C}$ corrispondono a $293{,}15\,\mathrm K$. Un intervallo di $1\,\mathrm{^{\circ}C}$ ha la stessa ampiezza di un intervallo di $1\,\mathrm K$. La temperatura assoluta viene usata nelle leggi dei gas; lo zero della scala kelvin corrisponde a $-273{,}15\,\mathrm{^{\circ}C}$.
:::

## Dilatazione lineare

:::teorema{#lineare titolo="La variazione di lunghezza"}
Per un solido omogeneo, in un intervallo in cui il coefficiente di dilatazione lineare $\alpha$ si può considerare costante,
$$\Delta L=\alpha L_0\Delta T,\qquad L=L_0(1+\alpha\Delta T).$$
$L_0$ è la lunghezza alla temperatura iniziale; $\Delta T=T_f-T_i$ è la variazione di temperatura. Il coefficiente $\alpha$ si misura in $\mathrm{K^{-1}}$. Un raffreddamento dà $\Delta T<0$ e una contrazione, se $\alpha>0$.

:::

## Un esempio di dilatazione

:::esempio{#esempio titolo="Una barra metallica"}
Una barra lunga $2{,}00\,\mathrm m$ ha $\alpha=12\cdot10^{-6}\,\mathrm{K^{-1}}$ e viene riscaldata di $50\,\mathrm K$. La variazione di lunghezza è
$$\Delta L=12\cdot10^{-6}\cdot2{,}00\cdot50\,\mathrm m=0{,}0012\,\mathrm m=1{,}2\,\mathrm{mm}.$$
La lunghezza finale è $2{,}0012\,\mathrm m$. Le conversioni tra metri e millimetri permettono di confrontare la variazione con un eventuale spazio libero tra due elementi.

::grafico{f="0.024*x" xmin=0 xmax=100 ymin=0 ymax=3 nomi="ΔT,ΔL" titolo="Per la barra dell'esempio, l'allungamento in millimetri cresce linearmente con la variazione di temperatura in kelvin"}
:::

## Superfici, volumi e fori

:::teorema{#volume titolo="Dilatazione di un solido isotropo"}
Per un solido che si dilata nello stesso modo in tutte le direzioni, e per piccole deformazioni,
$$\Delta A\simeq2\alpha A_0\Delta T,\qquad \Delta V\simeq3\alpha V_0\Delta T.$$
I coefficienti superficiale e volumico sono quindi circa $2\alpha$ e $3\alpha$. L'approssimazione trascura i termini che contengono potenze superiori di $\alpha\Delta T$. Il foro di una piastra si dilata come la parte di materiale che lo riempirebbe: se la temperatura aumenta e $\alpha>0$, il diametro del foro aumenta.
:::

## Liquidi e dilatazione apparente

:::osservazione{#apparente titolo="Anche il recipiente si dilata"}
Per un liquido si usa il coefficiente volumico $\beta$, con $\Delta V=\beta V_0\Delta T$ nell'intervallo di validità del modello. Se il recipiente si dilata, l'aumento di volume osservato rispetto al recipiente è circa
$$\Delta V_{\mathrm{app}}=(\beta_{\mathrm{liquido}}-\beta_{\mathrm{recipiente}})V_0\Delta T.$$
L'acqua presenta un comportamento particolare tra $0$ e circa $4\,\mathrm{^{\circ}C}$: riscaldandola, il volume diminuisce e la densità aumenta. Intorno a $4\,\mathrm{^{\circ}C}$ la densità è massima. Un unico coefficiente positivo costante non descrive questo intervallo.
:::
