---
titolo: Rendite costanti, differite e perpetue
sommario: Valore attuale e montante delle rendite, rate anticipate e posticipate, differimento e determinazione di rata, durata e tasso.
---

## Rendita posticipata

::::teorema{#rendita-posticipata titolo="Valore attuale di rate costanti posticipate"}
Una rendita certa posticipata di $n$ rate $R$ paga ai tempi $1,\ldots,n$. Se $i>-1$, posto $v=(1+i)^{-1}$, il valore attuale è
$$V=R a_{\overline n|i},\qquad a_{\overline n|i}=\sum_{k=1}^n v^k=\frac{1-(1+i)^{-n}}i\quad(i\ne0).$$
Per $i=0$ il fattore vale $n$. Il periodo del tasso coincide con quello delle rate. Dieci rate annue da $1000$ euro al $5\%$ valgono circa $7721{,}73$ euro oggi.

:::dimostrazione
La somma è geometrica di primo termine $v$ e ragione $v$. Moltiplicando $v+\cdots+v^n$ per $1-v$, i termini intermedi si eliminano e resta $v-v^{n+1}$. Poiché $1-v=iv$, il rapporto si riduce a $\dfrac{1-v^n}i$.
:::
::::

## Rendita anticipata

:::teorema{#rendita-anticipata titolo="Spostamento di un periodo"}
Una rendita anticipata paga ai tempi $0,1,\ldots,n-1$. Ogni pagamento precede di un periodo quello della rendita posticipata corrispondente, quindi
$$\ddot a_{\overline n|i}=(1+i)a_{\overline n|i},\qquad V=R\ddot a_{\overline n|i}.$$
Con tre rate da $100$ euro al $10\%$, il valore anticipato è $100+\dfrac{100}{1{,}1}+\dfrac{100}{1{,}1^2}$, circa $273{,}55$ euro. Il numero delle rate è ancora tre; cambia la prima scadenza.
:::

## Montante alla fine del piano

:::teorema{#montante-rendita titolo="Montante della rendita posticipata"}
Il montante al tempo $n$, subito dopo l'ultima rata posticipata, è
$$M=R s_{\overline n|i},\qquad s_{\overline n|i}=\frac{(1+i)^n-1}i=(1+i)^n a_{\overline n|i}.$$
L'ultima rata si somma senza interessi; la prima matura per $n-1$ periodi. Per una rendita anticipata valutata allo stesso tempo $n$ si moltiplica questo montante per $1+i$. Cinque versamenti posticipati da $1000$ euro al $4\%$ formano circa $5416{,}32$ euro.
:::

## Differimento

:::definizione{#rendita-differita titolo="Prima rata al tempo assegnato"}
Una rendita posticipata differita di $m$ periodi paga ai tempi $m+1,\ldots,m+n$. Il valore al tempo $m$ è $R a_{\overline n|i}$; riportandolo a oggi si ottiene
$$V=R a_{\overline n|i}(1+i)^{-m}.$$
Se la prima rata è al tempo $4$, il differimento della rendita posticipata è $m=3$. Con rendita anticipata il primo pagamento sarebbe invece al tempo $m$. Specificare la prima e l'ultima data permette di verificare l'esponente del fattore di differimento.
:::

## Rendite perpetue

:::teorema{#rendita-perpetua titolo="Limite della rendita costante"}
Per $i>0$ la rendita posticipata perpetua ha valore
$$V=\sum_{k=1}^{\infty}R(1+i)^{-k}=\frac Ri.$$
La rendita anticipata vale $\dfrac{R(1+i)}i$ e quella posticipata differita di $m$ periodi vale $\dfrac Ri(1+i)^{-m}$. Queste formule seguono dal limite di $a_{\overline n|i}$, poiché $(1+i)^{-n}\to0$. Al $5\%$, una rendita perpetua posticipata di $500$ euro annui vale $10000$ euro. Con rata positiva e $i=0$ la serie diverge, quindi manca un valore attuale finito.
:::

## Rata incognita

:::definizione{#rata-incognita titolo="Rata equivalente a un capitale"}
Un capitale $C$ si scambia con $n$ rate posticipate costanti imponendo $C=R a_{\overline n|i}$. Quindi
$$R=\frac C{a_{\overline n|i}}.$$
Per costituire un montante $M$ mediante versamenti posticipati si usa invece $R=\dfrac M{s_{\overline n|i}}$. Il primo problema attualizza pagamenti futuri; il secondo capitalizza versamenti fino a una data finale. Se le rate sono mensili e il tasso assegnato è annuo effettivo, prima si ricava il tasso mensile equivalente.
:::

## Durata incognita

:::definizione{#durata-incognita titolo="Durata teorica e numero intero di rate"}
Per $C>0$, $R>0$ e $i>0$, dall'equazione $C=R\dfrac{1-(1+i)^{-n}}i$ segue
$$n=-\frac{\log(1-Ci/R)}{\log(1+i)},\qquad R>Ci.$$
La condizione rende positivo l'argomento del logaritmo. Se $R=Ci$, le rate coprono soltanto gli interessi di una perpetuità; per $R<Ci$ il capitale assegnato supera il valore di quella perpetuità. Quando il risultato teorico non è intero, una sequenza di rate tutte uguali richiede di rideterminare la rata oppure di prevedere un pagamento finale diverso, dichiarandone la data.
:::

## Tasso incognito

:::teorema{#tasso-rendita titolo="Equazione del tasso della rendita"}
Con $R>0$ e $n\geq1$, la funzione $V(i)=R\sum_{k=1}^n(1+i)^{-k}$ è continua e strettamente decrescente per $i>-1$, perché
$$V'(i)=-R\sum_{k=1}^n k(1+i)^{-k-1}<0.$$
Quindi un valore attuale assegnato determina al più un tasso in questo intervallo. Per un tasso positivo serve $0<C<nR$. La bisezione parte da due tassi $i_a<i_b$ con $V(i_a)\geq C\geq V(i_b)$ e conserva a ogni passo il sottointervallo in cui cambia segno $V(i)-C$. Il tasso trovato si controlla sostituendolo nella somma delle rate attualizzate.
:::
