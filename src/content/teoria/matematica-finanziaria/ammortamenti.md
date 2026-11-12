---
titolo: Ammortamento dei prestiti e debito residuo
sommario: Costruzione dei piani di rimborso, calcolo del debito residuo, estinzione, valutazione del credito e rinegoziazione.
---

## Equazioni del piano

:::definizione{#piano-ammortamento titolo="Rata, quota capitale e quota interesse"}
Alla stipula il debitore riceve il capitale $D_0$. Alle date $k=1,\ldots,n$ paga le rate $R_k$, ciascuna alla fine del relativo periodo. Indichiamo con $D_k$ il debito subito dopo il pagamento della rata $k$ e con $i$ il tasso effettivo per periodo. Supponiamo che $i\geq 0$ e che il tasso resti costante. Scriviamo $q=1+i$ per il fattore di montante e $v=q^{-1}$ per il fattore di sconto di un periodo.

La **quota interesse** $I_k$ remunera il capitale che il debitore ha ancora a disposizione durante il periodo $k$. Quel capitale è $D_{k-1}$, quindi $I_k=iD_{k-1}$. La parte della rata che riduce il debito è la **quota capitale** $C_k=R_k-I_k$. Da queste relazioni segue

$$
\begin{aligned}
D_k &= D_{k-1}-C_k \\[6pt]
    &= qD_{k-1}-R_k.
\end{aligned}
$$

Il debito *prima* della rata è $qD_{k-1}$, perché comprende gli interessi maturati nel periodo. Il debito *dopo* la rata è $D_k$. Questa distinzione consente di leggere correttamente un piano anche quando una rata comprende un rimborso straordinario.
:::

:::esempio{titolo="Da una riga alla successiva"}
Un finanziamento di $1000\,\mathrm{euro}$ ha tasso effettivo del $5\%$ per periodo e prima rata di $300\,\mathrm{euro}$. L'interesse del primo periodo è $0{,}05\cdot1000=50\,\mathrm{euro}$. La rata rimborsa quindi $300-50=250\,\mathrm{euro}$ di capitale e lascia un residuo di $750\,\mathrm{euro}$. Se la seconda rata è ancora di $300\,\mathrm{euro}$, il suo interesse è $0{,}05\cdot750=37{,}50\,\mathrm{euro}$. La nuova quota capitale è $262{,}50\,\mathrm{euro}$ e il secondo residuo è $487{,}50\,\mathrm{euro}$. Subito prima della seconda rata il debito è invece $787{,}50\,\mathrm{euro}$, perché in quel momento l'interesse del periodo è già maturato.
:::

:::osservazione
In un piano estinto alla data $n$ vale $D_n=0$. Dato che $C_k=D_{k-1}-D_k$, sommando le quote capitale i debiti intermedi si elidono e rimane $D_0-D_n=D_0$. Sottraendo l'importo erogato dalla somma delle rate si ricava quindi la somma delle quote interesse. Questa verifica contabile si applica a tutti i piani senza spese incluse nelle rate.

Se si arrotondano ai centesimi gli importi mostrati in tabella, i calcoli possono comunque conservare la precisione originaria. Se, invece, le rate sono effettivamente pagate già arrotondate, sono quegli importi a entrare nella ricorrenza del debito. L'ultima rata si ricava dal debito maturato prima del pagamento, secondo la convenzione di arrotondamento prevista.
:::

:::attenzione
Se $R_k=I_k$, la rata copre soltanto gli interessi e il debito resta invariato. Se $R_k<I_k$ e il contratto capitalizza la parte di interesse rimasta insoluta, la quota capitale risulta negativa. Per esempio, con debito iniziale di $1000\,\mathrm{euro}$, tasso del $5\%$ e rata di $40\,\mathrm{euro}$, il saldo sale a $1010\,\mathrm{euro}$, perché maturano $50\,\mathrm{euro}$ di interesse e se ne pagano $40\,\mathrm{euro}$.
:::


:::osservazione
Durante un periodo di **preammortamento** con soli interessi pagati alle scadenze, ciascun pagamento copre per intero l'interesse maturato e la quota capitale è nulla. Il saldo all'inizio dell'ammortamento coincide quindi con il capitale erogato. Per esempio, su un prestito di $2000\,\mathrm{euro}$ al $5\%$ annuo, un anno di preammortamento comporta un pagamento di $100\,\mathrm{euro}$ e lascia il saldo a $2000\,\mathrm{euro}$.
:::

## Ammortamento francese

::::teorema{#francese titolo="Rata costante"}
Sia $D_0>0$ il capitale di un prestito al tasso effettivo costante $i\geq 0$. Nel piano francese il rimborso avviene in $n\geq 1$ rate posticipate uguali. Indichiamo con $a_{\overline n|i}$ il valore alla data zero di $n$ rate unitarie alle date da $1$ a $n$. La rata e la successione delle quote capitale soddisfano

$$
R=\frac{D_0}{a_{\overline n|i}},\qquad C_{k+1}=qC_k\quad (1\leq k<n).
$$

La prima formula determina la rata dai dati contrattuali. La seconda permette di ricavare ogni quota capitale dalla precedente. Per $i>0$ le quote capitale crescono e le quote interesse diminuiscono della stessa quantità. Per $i=0$ il fattore di rendita è $n$, quindi ogni rata rimborsa esattamente $\dfrac{D_0}{n}$.

:::dimostrazione
L'idea è esprimere le rate e il capitale erogato alla stessa data. Il valore iniziale delle rate è $R\sum_{k=1}^n v^k=R a_{\overline n|i}$. L'uguaglianza con $D_0$ dà il valore di $R$. Dato che $D_k=D_{k-1}-C_k$, si ricava

$$
\begin{aligned}
C_{k+1}
  &= R-iD_k \\[6pt]
  &= R-iD_{k-1}+iC_k \\[6pt]
  &= qC_k.
\end{aligned}
$$

Le quote capitale sommano $D_0>0$ e sono tutte multipli positivi di $C_1$. Perciò $C_1>0$ e, se $i>0$, la ragione $q>1$ rende le quote capitale strettamente crescenti. Siccome $I_k=R-C_k$ e $R$ è costante, le quote interesse sono strettamente decrescenti.
:::
::::

:::esempio{titolo="Piano con due rate annuali"}
Siano $D_0=2100\,\mathrm{euro}$, $i=10\%$ e $n=2$. Il valore attuale di una rata unitaria a fine anno uno più quello di una rata unitaria a fine anno due è $\dfrac{1}{1{,}1}+\dfrac{1}{1{,}1^2}=\dfrac{210}{121}$. Quindi la rata è $1210\,\mathrm{euro}$. Il piano, con tutti gli importi in euro, è

| Rata | Debito iniziale | Interesse | Capitale | Pagamento | Debito finale |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 2100 | 210 | 1000 | 1210 | 1100 |
| 2 | 1100 | 110 | 1100 | 1210 | 0 |

L'interesse scende da $210$ a $110\,\mathrm{euro}$ perché la seconda rata remunera soltanto i $1100\,\mathrm{euro}$ rimasti in prestito. Le quote capitale sommano $2100\,\mathrm{euro}$ e il saldo finale è nullo.
:::

:::osservazione
Un importo finale aggiuntivo modifica l'equazione di equivalenza. Se a fine periodo $n$ si paga l'ultima rata ordinaria $R$ insieme a un importo aggiuntivo $B$, allora

$$
D_0=R a_{\overline n|i}+Bv^n.
$$

Si sottrae quindi dal capitale il valore attuale di $B$ prima di dividere per il fattore di rendita. Per esempio, con $D_0=2200\,\mathrm{euro}$, $i=10\%$, $n=2$ e $B=1210\,\mathrm{euro}$, il versamento aggiuntivo ha valore attuale di $1000\,\mathrm{euro}$. Le due rate ordinarie coprono i restanti $1200\,\mathrm{euro}$ in valore attuale, quindi ciascuna è di $\dfrac{4840}{7}\,\mathrm{euro}$, circa $691{,}43\,\mathrm{euro}$. Il pagamento totale dell'ultima data è di circa $1901{,}43\,\mathrm{euro}$.
:::

## Ammortamento italiano

:::definizione{#italiano titolo="Quota capitale costante"}
Nel piano italiano ogni rata restituisce la stessa frazione del capitale iniziale. Con $n$ rate posticipate e tasso effettivo costante $i\geq 0$, si ha $C_k=C=\dfrac{D_0}{n}$. Dopo $k$ pagamenti sono state restituite $k$ quote, quindi

$$
D_k=D_0-kC,\qquad I_k=i[D_0-(k-1)C],\qquad R_k=C+I_k.
$$

A ogni periodo il debito iniziale diminuisce di $C$, perciò con $i>0$ la rata diminuisce di $iC$. La progressione aritmetica riguarda sia le rate sia le quote interesse. La quota capitale è già nota, quindi è possibile calcolare una riga qualunque del piano senza costruire tutte le righe precedenti.
:::

:::esempio{titolo="Terza rata e interesse complessivo"}
Per $D_0=3000\,\mathrm{euro}$, $n=3$ e $i=5\%$ si rimborsano $1000\,\mathrm{euro}$ di capitale a ogni data. I debiti all'inizio dei tre periodi sono $3000$, $2000$ e $1000\,\mathrm{euro}$, quindi gli interessi sono $150$, $100$ e $50\,\mathrm{euro}$. La terza rata è di $1050\,\mathrm{euro}$ e l'interesse totale è di $300\,\mathrm{euro}$. In generale, la media tra il debito iniziale del primo periodo, $D_0$, e quello dell'ultimo, $\dfrac{D_0}{n}$, è $\dfrac{D_0(n+1)}{2n}$. Moltiplicando per $n$ periodi e per il tasso $i$ si ottiene

$$
\sum_{k=1}^n I_k=iD_0\frac{n+1}{2}.
$$
:::

:::osservazione
A parità di capitale, numero di rate e tasso positivo, il piano italiano rimborsa più capitale all'inizio rispetto al francese, quando $n>1$. Infatti la media delle quote capitale francesi è $C=\dfrac{D_0}{n}$, mentre la loro successione è strettamente crescente. Per ogni $k<n$ la media delle prime $k$ quote francesi è quindi inferiore a $C$. Il debito italiano dopo la rata $k$ è di conseguenza minore, come gli interessi calcolati su quel saldo nel periodo successivo. Alla data finale entrambi i debiti sono estinti.
:::

::grafico{curve="t,3000-1000*t,0,3;t,3000*(1.05^3-1.05^t)/(1.05^3-1),0,3" nomi="k,euro" xmin=-0.3 xmax=3.3 ymin=-400 ymax=3600 legenda="D_k\ \mathrm{italiano};D_k\ \mathrm{francese}" punti="0,3000;1,2000;2,1000;3,0;1,2048.3743,vuoto;2,1049.1673,vuoto" titolo="Debito dopo la rata k, in euro, per un prestito di 3000 euro al 5%. I punti pieni indicano il piano italiano e quelli vuoti il piano francese. I due piani coincidono a k = 0 e k = 3."}

## Ammortamento americano

:::definizione{#americano titolo="Rimborso finale e fondo di accumulo"}
Nel prestito con rimborso unico del capitale, o *bullet*, il debitore paga gli interessi $iD_0$ a ogni fine periodo e restituisce $D_0$ alla scadenza $n$. Il debito verso il creditore resta pari a $D_0$ dopo ciascuna delle prime $n-1$ rate. All'ultima scadenza il creditore incassa sia l'interesse dell'ultimo periodo sia il capitale.

Nel **piano americano con fondo**, il debitore accantona separatamente una quota costante $Q$ a fine periodo per formare il capitale da restituire. Sia $j\geq0$ il tasso effettivo del fondo. Indicando con $s_{\overline n|j}$ il montante di $n$ versamenti unitari posticipati, l'importo del versamento è

$$
Q=\frac{D_0}{s_{\overline n|j}},\qquad
s_{\overline n|j}=\sum_{k=1}^n(1+j)^{n-k}.
$$

La rata verso il creditore e il versamento al fondo appartengono a rapporti distinti. Finché il fondo viene alimentato secondo il piano, alla scadenza esso fornisce l'intero capitale al creditore. L'esborso periodico finanziato dal debitore è allora $iD_0+Q$, contando una sola volta il capitale trasferito dal fondo.
:::

:::esempio{titolo="Interesse del prestito e rendimento del fondo"}
Un capitale di $2100\,\mathrm{euro}$ va restituito dopo due anni. Il prestito costa il $5\%$ annuo, perciò il creditore riceve $105\,\mathrm{euro}$ di interesse a ogni fine anno. Il fondo rende il $10\%$ annuo. Il primo accantonamento matura un anno di interesse e il secondo entra nel fondo alla data in cui serve il capitale. Perciò $Q(1{,}1+1)=2100\,\mathrm{euro}$ e ogni accantonamento vale $1000\,\mathrm{euro}$. L'esborso del debitore è di $1105\,\mathrm{euro}$ all'anno. Dopo il primo pagamento il fondo contiene $1000\,\mathrm{euro}$, mentre il capitale ancora dovuto al creditore è di $2100\,\mathrm{euro}$.
:::

:::osservazione
Se il fondo ha tasso zero, i versamenti si sommano senza capitalizzazione e si ottiene $Q=\dfrac{D_0}{n}$. Se il fondo e il prestito hanno lo stesso tasso effettivo positivo $i$, l'esborso periodico $iD_0+Q$ coincide con la rata francese di pari durata. Infatti $s_{\overline n|i}=q^n a_{\overline n|i}$ e $i\,s_{\overline n|i}=q^n-1$, quindi

$$
iD_0+\frac{D_0}{s_{\overline n|i}}
=\frac{D_0q^n}{s_{\overline n|i}}
=\frac{D_0}{a_{\overline n|i}}.
$$

L'uguaglianza riguarda l'esborso periodico del debitore. I saldi verso il creditore seguono piani diversi.
:::

## Debito residuo

::::teorema{#debito-residuo titolo="Metodi prospettivo e retrospettivo"}
Siano $D_0$ il capitale iniziale, $R_h$ le rate effettive alle date $h=1,\ldots,n$ e $i$ il tasso contrattuale costante per periodo. Supponiamo che il prestito sia estinto alla data $n$. Subito dopo la rata $k$ il debito residuo è

$$
\begin{aligned}
D_k &= \sum_{h=k+1}^n R_h q^{k-h} \\[6pt]
    &= D_0q^k-\sum_{h=1}^k R_h q^{k-h}.
\end{aligned}
$$

Il **metodo prospettivo** porta indietro al tempo $k$ le sole rate future. Il **metodo retrospettivo** porta avanti alla stessa data il capitale iniziale e i pagamenti già eseguiti, poi li sottrae. Il metodo prospettivo è comodo quando restano poche rate. Il retrospettivo è comodo quando si conoscono il capitale iniziale e i primi pagamenti.

:::dimostrazione
Alla data iniziale il capitale equivale al valore attuale di tutte le rate, quindi $D_0=\sum_{h=1}^n R_hq^{-h}$. Moltiplicando per $q^k$ e separando le rate già pagate dalle altre si ottiene

$$
D_0q^k=\sum_{h=1}^k R_hq^{k-h}+\sum_{h=k+1}^n R_hq^{k-h}.
$$

Sottraendo la prima somma si ottiene la forma retrospettiva. La somma rimasta contiene soltanto le rate future. Ciascun esponente $k-h$ è negativo e attualizza il pagamento alla data $k$, quindi la somma è anche la forma prospettiva.
:::
::::

:::esempio{titolo="Due calcoli allo stesso istante"}
Nel prestito di $2100\,\mathrm{euro}$ al $10\%$ con due rate da $1210\,\mathrm{euro}$, subito dopo la prima rata resta un solo pagamento da scontare. Il metodo prospettivo dà $\dfrac{1210}{1{,}1}=1100\,\mathrm{euro}$. Il metodo retrospettivo dà $2100\cdot1{,}1-1210=1100\,\mathrm{euro}$. La prima rata compare nella sottrazione retrospettiva, perché al momento della valutazione è stata appena pagata. Nel caso francese con $n-k$ rate residue uguali si può scrivere $D_k=R a_{\overline{n-k}|i}$, ponendo $a_{\overline 0|i}=0$.
:::

## Estinzione anticipata

:::definizione{#estinzione-anticipata titolo="Estinzione contrattuale e valutazione di mercato"}
Nel modello senza costi aggiuntivi, per estinguere il prestito subito dopo il pagamento della rata $k$ occorre rimborsare $D_k$. Se si estingue una frazione $\theta$ di periodo più tardi, con $0<\theta<1$, e il contratto usa l'interpolazione esponenziale, l'importo sale a $D_kq^\theta$. Gli eventuali costi indicati nella traccia si aggiungono nella data in cui sono dovuti.

Il **valore di mercato del credito** esprime, invece, il valore delle rate ancora da riscuotere al tasso di valutazione $j$. Alla stessa data $k$ è

$$
V_k(j)=\sum_{h=k+1}^n R_h(1+j)^{k-h},\qquad j>-1.
$$

Se $j=i$, il valore coincide con $D_k$. Se ogni rata residua è positiva e ne rimane almeno una, all'aumentare di $j$ il valore diminuisce, poiché ogni esponente $k-h$ è negativo. Le rate pattuite rimangono i flussi da valutare.
:::

:::esempio{titolo="Saldo dopo la rata e prezzo del credito"}
Subito dopo una rata, l'unico pagamento residuo è di $1210\,\mathrm{euro}$ fra un anno. Il tasso contrattuale è il $10\%$, quindi il saldo per estinguere in quella data è $1100\,\mathrm{euro}$ in assenza di costi. Se il tasso di valutazione è il $21\%$, il valore di mercato è $\dfrac{1210}{1{,}21}=1000\,\mathrm{euro}$. Lo stesso pagamento compare in entrambi i calcoli, con il fattore di sconto proprio di ciascuna valutazione. Se la chiusura avviene subito *prima* di pagare la rata corrente, occorre invece comprendere anche il pagamento dovuto in quella data.
:::

## Usufrutto e nuda proprietà

:::definizione{#usufrutto-nuda-proprieta titolo="Valutazione separata delle quote"}
Dato un piano di rimborso, l'**usufrutto** $U(j)$ è il valore iniziale delle quote interesse al tasso effettivo di valutazione $j>-1$. La **nuda proprietà** $N(j)$ è il valore iniziale delle quote capitale allo stesso tasso. Le due componenti si calcolano con

$$
\begin{aligned}
U(j) &= \sum_{k=1}^n I_k(1+j)^{-k},\\[6pt]
N(j) &= \sum_{k=1}^n C_k(1+j)^{-k}.
\end{aligned}
$$

Si usa il tasso contrattuale $i$ per determinare le quote del piano e il tasso $j$ per valutarle. Poiché $I_k+C_k=R_k$ in ciascun periodo, il valore complessivo delle rate è $U(j)+N(j)$. Per $j=i$ questa somma è $D_0$, per l'equivalenza finanziaria iniziale.
:::

:::esempio{titolo="Nuda proprietà di un piano italiano"}
Per un capitale di $2000\,\mathrm{euro}$ rimborsato con due quote capitale uguali, ciascuna quota è di $1000\,\mathrm{euro}$. Se $j=10\%$, la nuda proprietà è

$$
N(j)=\frac{1000}{1{,}1}+\frac{1000}{1{,}1^2}
=\frac{210000}{121}\,\mathrm{euro}\approx1735{,}54\,\mathrm{euro}.
$$

Se il tasso contrattuale è il $5\%$, le quote interesse alle stesse scadenze sono $100$ e $50\,\mathrm{euro}$. Il loro valore iniziale al $10\%$ è di circa $132{,}23\,\mathrm{euro}$. Per valutare un piano italiano con $n$ rate basta quindi usare $N(j)=\dfrac{D_0}{n}a_{\overline n|j}$ per la parte capitale e scontare la sequenza decrescente degli interessi per l'usufrutto.
:::

## Variazione del tasso

:::definizione{#tasso-variabile titolo="Ricalcolo della rata sul debito residuo"}
Supponiamo che subito dopo la rata $k$ il tasso passi da $i$ a $j\geq0$ e che il piano mantenga la scadenza finale. Se le $m=n-k$ rate rimanenti diventano tutte uguali, si usa $D_k$ come capitale di un nuovo piano francese alla data $k$. La rata e il primo interesse dopo l'aggiornamento sono

$$
R_{\mathrm{nuova}}=\frac{D_k}{a_{\overline m|j}},
\qquad I_{k+1}=jD_k.
$$

Fino alla rata $k$ valgono i tassi già applicati. Il tasso nuovo riguarda i periodi successivi al cambio. Se il contratto prevede ulteriori revisioni, ogni volta si ricalcola a partire dal debito esistente in quella data.
:::

:::esempio{titolo="Cambio del tasso dopo un pagamento"}
Un debitore ha appena pagato la rata corrente e deve ancora $1100\,\mathrm{euro}$. Resta una rata annuale e il tasso passa dal $10\%$ al $5\%$. L'interesse dell'ultimo anno è di $55\,\mathrm{euro}$, quindi la nuova rata unica è di $1155\,\mathrm{euro}$. Poiché l'aggiornamento avviene dopo il pagamento corrente, il suo importo è già confluito nel calcolo del debito di $1100\,\mathrm{euro}$.
:::

:::osservazione
Una rinegoziazione può prevedere un versamento extra $X$ immediato e una nuova durata di $m$ periodi. Se $0\leq X<D_k$, il capitale da rifinanziare è $D_k-X$. La nuova rata posticipata vale $\dfrac{D_k-X}{a_{\overline m|j}}$. Se si fissa invece la rata e si chiede la nuova durata, con $j>0$ una durata finita è possibile solo se la rata supera $j(D_k-X)$. Quel prodotto è l'interesse del primo periodo. Quando la rata gli è uguale, il debito resta costante. Quando gli è inferiore, il debito aumenta se gli interessi insoluti vengono capitalizzati.
:::

:::esempio{titolo="Rata invariata e ultima rata ridotta"}
Dopo un versamento straordinario il capitale residuo è di $1000\,\mathrm{euro}$. Il tasso per i periodi rimanenti è il $10\%$. Se il debitore mantiene la rata di $600\,\mathrm{euro}$, dopo il primo periodo il debito vale $1000\cdot1{,}1-600=500\,\mathrm{euro}$. Prima della seconda rata il saldo maturato è di $550\,\mathrm{euro}$, quindi quella rata chiude il piano con un pagamento ridotto. Se il debito maturato fosse ancora superiore alla rata ordinaria, il piano proseguirebbe per un altro periodo. La successione dei saldi permette così di trovare sia il numero di rate intere sia l'eventuale importo dell'ultima. Il calcolo riparte dal saldo dopo il versamento, perché il capitale rimborsato in quella data cessa di produrre interessi.
:::
