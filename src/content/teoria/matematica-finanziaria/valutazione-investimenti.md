---
titolo: VAN, TIR e confronto degli investimenti
sommario: Valore attuale netto, rendimento interno, unicità e molteplicità del TIR, confronto di progetti, costo effettivo e recupero attualizzato.
---

## Valore attuale netto

:::definizione{#van titolo="VAN di un flusso certo"}
Per un esborso iniziale $C_0>0$ e flussi successivi $F_k$ ai tempi $t_k>0$, il **valore attuale netto** al tasso di valutazione $i>-1$ è
$$\operatorname{VAN}(i)=-C_0+\sum_{k=1}^nF_k(1+i)^{-t_k}.$$
Un VAN positivo significa che il valore delle entrate supera l'esborso al tasso assegnato. Con $C_0=100$, incassi di $60$ a fine di ciascuno dei due anni e $i=10\%$, si ha $-100+\dfrac{60}{1{,}1}+\dfrac{60}{1{,}1^2}\approx4{,}13$. Un confronto richiede che i flussi siano espressi con convenzioni coerenti, per esempio tutti al netto degli stessi tipi di costi.
:::

## Tasso interno di rendimento

:::definizione{#tir titolo="Tasso che annulla il VAN"}
Un tasso $i^*>-1$ è un **TIR** se $\operatorname{VAN}(i^*)=0$. Per un solo incasso finale $M$ dopo $T$ periodi,
$$i^*=\left(\frac M{C_0}\right)^{\frac1T}-1.$$
Con più incassi l'equazione si può risolvere numericamente. Per flussi annuali si può anche porre $v=(1+i)^{-1}$ e ottenere un polinomio in $v$. Il valore trovato va sostituito nell'equazione originale per controllare il residuo e l'ammissibilità del tasso.
:::

## Unicità per investimenti convenzionali

::::teorema{#unicita-tir titolo="Unica radice con incassi non negativi"}
Se $C_0>0$, tutti gli $F_k$ sono non negativi e almeno uno è positivo, il VAN è continuo e strettamente decrescente per $i>-1$. Ha esattamente una radice in questo intervallo; la radice è positiva se $\sum_kF_k>C_0$.

:::dimostrazione
La derivata è $-\sum_kt_kF_k(1+i)^{-t_k-1}<0$. Inoltre il VAN tende a $+\infty$ per $i\to-1^+$ e a $-C_0$ per $i\to+\infty$, quindi il teorema degli zeri assicura l'esistenza e la monotonia assicura l'unicità. Il segno della radice rispetto a zero segue dal valore $\operatorname{VAN}(0)=\sum_kF_k-C_0$.
:::
::::

## TIR multipli

:::attenzione{#tir-multipli titolo="Flussi con più cambiamenti di segno"}
Se dopo un incasso compaiono altre uscite, il VAN può avere più zeri. Per i flussi $-100$, $230$, $-132$ ai tempi $0$, $1$, $2$, l'equazione è
$$-100+230v-132v^2=0.$$
Le radici positive sono $v=\dfrac{10}{11}$ e $v=\dfrac56$, quindi i TIR sono $10\%$ e $20\%$. La regola «il TIR supera il tasso di valutazione» richiede quindi ipotesi sul flusso. Il VAN a un tasso assegnato resta determinato anche quando i TIR sono molteplici o mancano.
:::

## Progetti alternativi

:::definizione{#confronto-progetti titolo="Confronto mediante VAN e flusso differenziale"}
Per progetti alternativi valutati sullo stesso orizzonte e con risorse compatibili, il criterio del VAN confronta i loro valori netti allo stesso tasso. La differenza $\operatorname{VAN}_B(i)-\operatorname{VAN}_A(i)$ è il VAN del flusso differenziale $B-A$. Un TIR più alto non implica un VAN più alto, perché il TIR è una misura percentuale e il VAN dipende anche dalla dimensione degli importi. Se gli orizzonti differiscono, il confronto richiede una convenzione esplicita sulle possibilità di rinnovo o sui flussi dopo la conclusione del progetto.
:::

## Tasso di indifferenza

:::definizione{#tasso-soglia titolo="Tasso di intersezione dei VAN"}
Un tasso di indifferenza rende uguali i VAN di due progetti. Si trova annullando il VAN differenziale. Se il flusso differenziale è convenzionale, valgono la monotonia e l'unicità del risultato del paragrafo precedente. Per esborsi uguali e un solo incasso rispettivamente di $110$ al tempo $1$ e $121$ al tempo $2$, l'indifferenza richiede $\dfrac{110}{1+i}=\dfrac{121}{(1+i)^2}$, quindi $i=10\%$. Ai due lati della soglia l'ordine dei VAN può invertirsi.
:::

## Costo effettivo di un finanziamento

:::definizione{#taeg titolo="Tasso effettivo del flusso del debitore"}
Se il debitore riceve un capitale nominale $C$ ma paga subito spese $S$, il capitale effettivamente disponibile è $C-S$. Con rate $R_k$ ai tempi $t_k$, il tasso effettivo del modello risolve
$$C-S=\sum_kR_k(1+i)^{-t_k}.$$
Con rate mensili e soluzione periodale $i_m$, il tasso annuo effettivo equivalente è $(1+i_m)^{12}-1$. Questo è un calcolo matematico sul flusso specificato; il TAEG di un prodotto reale richiede anche le convenzioni e le componenti stabilite per quel prodotto. Nei problemi ogni costo, data e base temporale deve essere assegnato.
:::

## Tempo di recupero attualizzato

:::definizione{#recupero-attualizzato titolo="Prima scadenza di recupero del capitale"}
Con incassi non negativi e tasso assegnato, il tempo di recupero attualizzato discreto è la prima scadenza $m$ per cui
$$\sum_{k=1}^mF_k(1+i)^{-t_k}\geq C_0.$$
Si calcolano gli incassi attualizzati e le somme cumulate alle loro date. Un'interpolazione tra due date descrive una convenzione aggiuntiva, perché i pagamenti discreti sono disponibili soltanto alle scadenze indicate. Se neppure la somma finale raggiunge l'esborso, il recupero non avviene entro l'orizzonte del progetto. Il criterio del recupero trascura quanto accade dopo quella data, mentre il VAN usa tutti i flussi.
:::
