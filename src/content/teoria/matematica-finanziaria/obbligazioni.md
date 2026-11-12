---
titolo: Titoli obbligazionari, prezzi e rendimenti
sommario: Titoli senza cedola e con cedola, rendimento a scadenza, rateo, corso secco e rendimento durante il possesso.
---

## Titoli senza cedola

:::definizione{#zero-coupon titolo="Zero coupon bond"}
Uno **zero coupon bond**, abbreviato ZCB, paga soltanto il valore di rimborso $N>0$ alla scadenza $T$. Se il rendimento annuo composto è $y>-1$, il prezzo è
$$P=N(1+y)^{-T},\qquad y=\left(\frac NP\right)^{\frac1T}-1.$$
Con rimborso $1000$ euro fra due anni e rendimento del $5\%$, il prezzo è $\dfrac{1000}{1{,}05^2}$, circa $907{,}03$ euro. Il valore nominale usato per esprimere una quotazione e l'importo effettivamente rimborsato coincidono soltanto quando la traccia lo stabilisce.
:::

## Titoli con cedola

:::teorema{#prezzo-obbligazione titolo="Prezzo come valore attuale dei pagamenti"}
Per un titolo che paga cedole annuali costanti $c$ e rimborsa $N$ con l'ultima cedola al tempo $n$, il prezzo al rendimento $y$ è
$$P=c a_{\overline n|y}+N(1+y)^{-n}.$$
I flussi sono $c$ ai tempi $1,\ldots,n-1$ e $c+N$ al tempo $n$. La formula segue dalla somma dei valori attuali della rendita cedolare e del rimborso. Se $c=Nq$, $q$ è il tasso cedolare annuo. Il tasso cedolare determina l'importo delle cedole; il rendimento dipende anche dal prezzo.
:::

## Rendimento a scadenza

:::definizione{#rendimento-scadenza titolo="Tasso interno del titolo"}
Il rendimento a scadenza, o yield to maturity, è il tasso $y$ che uguaglia il prezzo pagato al valore attuale di cedole e rimborso. Per prezzo positivo e pagamenti futuri positivi è unico per $y>-1$, perché il prezzo teorico è strettamente decrescente rispetto a $y$. Si può trovare per bisezione. Il rapporto $\dfrac cP$, detto rendimento cedolare corrente per cedole annuali, usa soltanto la cedola e quindi differisce dal rendimento a scadenza quando il prezzo è diverso dal rimborso.
:::

## Cedole infrannuali

:::definizione{#cedole-infrannuali titolo="Periodo del rendimento e periodo delle cedole"}
Con $m$ cedole uguali all'anno e tasso cedolare nominale annuo $q$, ciascuna cedola vale $c=\dfrac{Nq}m$. Se $y$ è annuo effettivo, il rendimento del sottoperiodo è $j=(1+y)^{\frac1m}-1$. Con $n$ anni residui e date regolari, il numero di cedole è $mn$ e
$$P=c a_{\overline{mn}|j}+N(1+j)^{-mn}.$$
Se viene dato un rendimento annuo nominale convertibile $m$ volte, si usa invece $j=\dfrac{y^{(m)}}m$. Per questo la convenzione del rendimento è necessaria per determinare il prezzo.
:::

## Corso secco e tel quel

:::definizione{#corso-secco titolo="Rateo della cedola"}
Il prezzo tel quel, o dirty price, è l'importo che si scambia alla data di regolamento. Il corso secco, o clean price, si ottiene sottraendo il rateo. In una convenzione di rateo lineare, se $\alpha$ è la frazione del periodo cedolare già trascorsa,
$$\operatorname{rateo}=\alpha c,\qquad P_{\mathrm{tel\ quel}}=P_{\mathrm{secco}}+\alpha c.$$
Con cedola $30$, metà periodo trascorsa e corso secco $990$, il tel quel è $1005$. Per valutare il titolo tra due cedole si attualizzano i flussi usando le frazioni di periodo residue; il rateo si calcola con la convenzione assegnata. Quotazioni per $100$ di nominale e prezzi per l'intero titolo richiedono un fattore di scala coerente.
:::

## Relazione fra prezzo e rendimento

:::teorema{#tassi-prezzi titolo="Prezzo sopra o sotto la pari"}
Per un titolo con cedole annuali $Nq$, rimborso $N$ e rendimento $y$, vale
$$P-N=N(q-y)a_{\overline n|y}.$$
Poiché il fattore della rendita è positivo per $y>-1$, il prezzo è sopra la pari se $q>y$, alla pari se $q=y$ e sotto la pari se $q<y$. L'identità segue da $1=y a_{\overline n|y}+(1+y)^{-n}$. Per un insieme fissato di pagamenti positivi, un aumento del rendimento diminuisce il loro valore attuale.
:::

## Rendimento di periodo

:::definizione{#rendimento-periodo titolo="Risultato durante il possesso"}
Un titolo acquistato a $P_0$ e venduto dopo un anno a $P_1$, subito dopo una cedola $c$ incassata, produce il rendimento di periodo
$$h=\frac{P_1+c-P_0}{P_0}.$$
Se le cedole sono incassate prima della vendita, il risultato alla data finale richiede una convenzione di reinvestimento. Per trasformare un rendimento complessivo $h$ su $T$ anni in un rendimento annuo composto equivalente si usa $(1+h)^{\frac1T}-1$. Il prezzo di rivendita dipende dal rendimento di mercato alla data finale, perciò il rendimento realizzato può differire dal rendimento a scadenza iniziale.
:::

## Portafoglio di titoli

:::definizione{#portafoglio-titoli titolo="Additività dei prezzi"}
Se $x_j$ è il numero di unità del titolo $j$ e $P_j$ è il prezzo per unità, il valore del portafoglio è $P=\sum_jx_jP_j$. Anche i flussi si sommano, data per data. Due ZCB con rimborsi $100$ ai tempi $1$ e $2$, detenuti in quantità $3$ e $5$, producono $300$ al tempo $1$ e $500$ al tempo $2$. Quando un esercizio assegna pesi percentuali, questi sono di norma quote del valore di mercato; per ricavare le quantità si divide l'importo investito in ogni titolo per il prezzo unitario.
:::
