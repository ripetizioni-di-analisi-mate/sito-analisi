---
titolo: Struttura a termine, tassi forward e arbitraggio
sommario: Fattori di sconto per scadenza, tassi spot e forward, bootstrap della curva e prezzi di non arbitraggio.
---

## Fattori di sconto

:::definizione{#fattori-sconto titolo="Prezzo di un euro futuro"}
Il fattore $v(0,T)>0$ è il prezzo oggi di un euro certo alla scadenza $T$. Si pone $v(0,0)=1$. Un pagamento certo $C$ alla data $T$ vale $Cv(0,T)$, quindi un flusso $C_k$ alle date $t_k$ vale
$$P=\sum_k C_kv(0,t_k).$$
La **struttura a termine** assegna un fattore a ogni scadenza considerata. Fattori decrescenti corrispondono a tassi forward non negativi; i tassi negativi possono invece produrre fattori maggiori di uno. La sola positività dei fattori non impone la loro monotonia.
:::

## Tassi a pronti

:::definizione{#tassi-spot titolo="Tasso spot composto"}
Il tasso spot annuo effettivo $s_T$ per la scadenza $T>0$ soddisfa
$$v(0,T)=(1+s_T)^{-T},\qquad s_T=v(0,T)^{-\frac1T}-1.$$
Se $v(0,2)=0{,}9$, il tasso spot biennale annuo è $0{,}9^{-\frac12}-1$, circa $5{,}4093\%$. Ogni $s_T$ è un tasso annuo equivalente fino a quella scadenza; un titolo con più pagamenti richiede più fattori di sconto. Un unico rendimento del titolo può ricostruirne il prezzo senza coincidere con tutti i tassi spot della curva.
:::

## Tassi a termine

::::teorema{#tassi-forward titolo="Tasso forward implicito"}
Con mercato deterministico senza attriti e possibilità di finanziamento e investimento agli stessi fattori, il tasso annuo composto a termine $f_{s,t}$ per l'intervallo $[s,t]$, con $0<s<t$, soddisfa
$$1+f_{s,t}=\left(\frac{v(0,s)}{v(0,t)}\right)^{\frac1{t-s}}.$$
In particolare per un intervallo di un anno il fattore è $\dfrac{v(0,s)}{v(0,s+1)}$. Il tasso forward è fissabile oggi per un'operazione futura; la formula descrive un vincolo tra prezzi attuali.

:::dimostrazione
Il fattore complessivo fino a $t$ deve coincidere con il prodotto del fattore fino a $s$ e del fattore forward tra $s$ e $t$. Quindi $\dfrac1{v(0,t)}=\dfrac1{v(0,s)}(1+f_{s,t})^{t-s}$. Riordinando ed estraendo la radice positiva si ottiene la formula.
:::
::::

## Convenzione continua

:::definizione{#forward-continuo titolo="Tassi spot e forward continui"}
Il tasso spot continuo è $z(T)=-\dfrac{\log v(0,T)}T$. Il tasso forward continuo medio tra $s$ e $t$ è
$$\phi_{s,t}=\frac{\log v(0,s)-\log v(0,t)}{t-s}.$$
Se il fattore è derivabile rispetto alla scadenza, il forward istantaneo è $f(0,T)=-\dfrac{\partial}{\partial T}\log v(0,T)$. Per una curva piatta $v(0,T)=e^{-\delta T}$ tutti questi tassi continui sono uguali a $\delta$. La conversione all'annuo composto equivalente è $e^z-1$.
:::

## Bootstrap

:::teorema{#bootstrap titolo="Determinazione successiva dei fattori"}
Se sono noti i fattori alle prime $n-1$ date e un titolo di prezzo $P_n$ paga cedole $c$ a ogni data e rimborso $N$ all'ultima, il fattore mancante è
$$v(0,n)=\frac{P_n-c\sum_{k=1}^{n-1}v(0,k)}{N+c}.$$
La relazione segue isolando l'ultimo flusso nell'equazione del prezzo. Con $v(0,1)=0{,}95$, $P_2=98$, $N=100$ e $c=4$, si ottiene $v(0,2)=\dfrac{98-4\cdot0{,}95}{104}$, circa $0{,}905769$. Un fattore non positivo segnala dati incompatibili con il modello di prezzi positivi adottato.
:::

## Prezzo sulla curva

:::definizione{#prezzo-curva titolo="Valutazione di tutti i flussi"}
Una volta costruita la curva, ogni flusso certo alle scadenze note viene valutato usando il fattore di quella data. Cedole di $5$ e rimborso di $100$ alla seconda data danno $P=5v(0,1)+105v(0,2)$. Se un pagamento cade tra due nodi, serve una convenzione di interpolazione esplicita, per esempio lineare sui tassi o sui logaritmi dei fattori; convenzioni diverse possono dare prezzi diversi. Negli esercizi senza interpolazione i flussi cadono soltanto sulle scadenze assegnate.
:::

## Arbitraggio

:::definizione{#arbitraggio titolo="Guadagno certo senza investimento iniziale positivo"}
Nel modello deterministico un arbitraggio è una strategia con costo iniziale non positivo, flussi successivi non negativi e almeno un guadagno strettamente positivo. Se due portafogli hanno identici pagamenti futuri e prezzi diversi, comprare quello meno caro e vendere allo scoperto quello più caro produce un guadagno iniziale e flussi futuri nulli. Il ragionamento assume quantità divisibili, possibilità di vendita allo scoperto e assenza di costi o vincoli aggiuntivi. La differenza tra prezzo osservato e prezzo replicante determina il verso della strategia.
:::

## Replicazione

:::teorema{#replicazione titolo="Prezzo di un flusso replicabile"}
Se un portafoglio di strumenti negoziati riproduce esattamente i pagamenti di un titolo, in assenza di arbitraggio il prezzo del titolo coincide con il costo del portafoglio. Indicando con $A$ la matrice dei pagamenti dei titoli e con $b$ il flusso desiderato, le quantità $x$ soddisfano $Ax=b$ e il costo è $\sum_jx_jP_j$. Un flusso di $20$ al primo anno e $50$ al secondo si replica con $20$ e $50$ ZCB unitari alle due scadenze, quindi vale $20v(0,1)+50v(0,2)$. Con strumenti cedolari le quantità si ricavano risolvendo il sistema delle due date.
:::
