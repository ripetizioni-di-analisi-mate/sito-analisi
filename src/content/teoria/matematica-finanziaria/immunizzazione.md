---
titolo: Immunizzazione finanziaria e gestione del rischio di tasso
sommario: Corrispondenza dei valori attuali e delle duration, portafogli immunizzanti, condizioni di Redington e limiti della protezione locale.
---

## Attività e passività

:::definizione{#valore-netto titolo="Surplus del portafoglio"}
Le attività producono incassi $A_k$ e le passività richiedono pagamenti $L_h$. Nel modello a curva piatta con forza di interesse $\delta$, i loro valori sono $A(\delta)=\sum_kA_ke^{-\delta t_k}$ e $L(\delta)=\sum_hL_he^{-\delta u_h}$. Il surplus è
$$S(\delta)=A(\delta)-L(\delta).$$
L'immunizzazione studia la variazione di questo surplus quando il parametro dei tassi cambia. Una copertura iniziale esatta richiede $S(\delta_0)=0$. Il modello considera flussi certi fissati e spostamenti della curva specificati; altri rischi richiedono ipotesi aggiuntive.
:::

## Corrispondenza delle duration

::::teorema{#duration-matching titolo="Annullamento della sensibilità di primo ordine"}
Con attivi e passivi positivi e valutazione continua, si ha $A'=-AD_A$ e $L'=-LD_L$. Pertanto
$$A(\delta_0)=L(\delta_0),\qquad D_A(\delta_0)=D_L(\delta_0)
\quad\Longrightarrow\quad S'(\delta_0)=0.$$
Il primo ordine della variazione del surplus si annulla. Con rendimento composto si può esprimere la stessa condizione usando le duration modificate rispetto a un unico tasso comune.

:::dimostrazione
Sottraendo le due derivate si ottiene $S'=-AD_A+LD_L$. Se i valori sono uguali e le duration coincidono, i due termini sono opposti e la somma è zero.
:::
::::

## Portafoglio di due ZCB

:::teorema{#portafoglio-due-titoli titolo="Ripartizione dei valori di mercato"}
Per coprire un passivo di valore $L_0$ e duration $D_L$ con due ZCB di scadenze $T_1<T_2$, le quote di valore di mercato sono
$$w_1=\frac{T_2-D_L}{T_2-T_1},\qquad
w_2=\frac{D_L-T_1}{T_2-T_1}.$$
I capitali investiti oggi sono $X_1=L_0w_1$ e $X_2=L_0w_2$. Le formule risolvono $X_1+X_2=L_0$ e $T_1X_1+T_2X_2=D_LL_0$. Le quote sono non negative se $T_1\leq D_L\leq T_2$. Il valore di rimborso da acquistare per ciascuna scadenza si ottiene dividendo il suo capitale iniziale per il fattore di sconto corrispondente.
:::

## Corrispondenza della convexity

:::definizione{#convexity-matching titolo="Secondo momento delle scadenze"}
Rispetto a spostamenti della forza continua, la convexity è il secondo momento delle scadenze pesate con i valori attuali:
$$C_A=\frac{\sum_kt_k^2A_ke^{-\delta t_k}}A,\qquad
C_L=\frac{\sum_hu_h^2L_he^{-\delta u_h}}L.$$
Con uguaglianza dei valori, $S''=A(C_A-C_L)$. Una convexity degli attivi maggiore di quella dei passivi rende positiva la derivata seconda del surplus. Uguagliare anche le convexity elimina la sensibilità fino al secondo ordine, ma lascia da studiare gli ordini successivi. Nel modello composto la convexity usa i fattori $t(t+1)$ e le opportune potenze di $1+y$.
:::

## Condizioni di Redington

::::teorema{#redington titolo="Minimo locale del surplus"}
Supponendo che $S$ sia due volte continuamente derivabile in un intorno di $\delta_0$, le condizioni
$$S(\delta_0)=0,\qquad S'(\delta_0)=0,\qquad S''(\delta_0)>0$$
assicurano che $S(\delta)\geq0$ per spostamenti sufficientemente piccoli del parametro intorno a $\delta_0$. La disuguaglianza è stretta per spostamenti non nulli abbastanza piccoli.

:::dimostrazione
Per Taylor, $S(\delta_0+h)=\dfrac12S''(\delta_0)h^2+o(h^2)$. Il coefficiente del termine quadratico è positivo; quindi, per $h$ abbastanza piccolo e non nullo, il resto non ne modifica il segno.
:::
::::

## Rischio di prezzo e reinvestimento

:::definizione{#rischio-reinvestimento titolo="Valore all'orizzonte di investimento"}
Un pagamento ricevuto prima dell'orizzonte $H$ deve essere reinvestito fino a $H$; un pagamento successivo a $H$ deve essere valutato o ceduto al tempo $H$. Nel modello con una nuova forza costante $\delta$ applicabile a tutti questi trasferimenti, il valore all'orizzonte è
$$W_H(\delta)=\sum_kC_ke^{\delta(H-t_k)}.$$
Derivando si ottiene $W_H'(\delta)=\sum_k(H-t_k)C_ke^{\delta(H-t_k)}$. Alla forza iniziale il primo ordine si annulla quando $H=D$. I pagamenti anticipati e quelli tardivi contribuiscono con segni opposti alla sensibilità. La relazione spiega la condizione di duration matching rispetto a un orizzonte unico.
:::

## Riequilibrio nel tempo

:::definizione{#riequilibrio titolo="Aggiornamento di valori e scadenze residue"}
Quando passa il tempo, si eliminano i flussi già pagati e si usano le scadenze residue per quelli ancora dovuti. Le cedole incassate diventano disponibilità da reinvestire. Se i tassi cambiano, cambiano anche i pesi di valore delle attività e la duration dei passivi. Un portafoglio che soddisfaceva le condizioni iniziali può quindi richiedere un nuovo calcolo delle quantità. Per due ZCB senza flussi intermedi, il nuovo sistema usa i prezzi aggiornati e le due scadenze residue rispetto alla data di riequilibrio.
:::

## Portata della copertura

:::attenzione{#limiti-immunizzazione titolo="Ipotesi della protezione locale"}
La corrispondenza di una sola duration descrive una sensibilità rispetto a un parametro unico. Una curva può subire spostamenti diversi alle varie scadenze; in quel caso servono sensibilità per nodo o una copertura dei flussi. Anche un grande spostamento parallelo può richiedere termini oltre il secondo ordine. Con quantità non negative, due ZCB entrambi più brevi della duration del passivo non possono raggiungerla, perché la loro media pesata resta fra le due scadenze. Una copertura esatta data per data, quando realizzabile nel modello, uguaglia invece ogni flusso dell'attivo al corrispondente flusso del passivo.
:::
