---
titolo: Duration, convexity e sensibilità dei prezzi
sommario: Calcolo della durata media finanziaria e stima delle variazioni di prezzo di titoli e portafogli al variare del rendimento.
---

## Durata media finanziaria

:::definizione{#duration-macaulay titolo="Duration di Macaulay"}
Si consideri un titolo con pagamenti certi $C_k>0$ ai tempi $t_k\geq 0$, misurati in anni dalla data di valutazione. Indichiamo con $y>-1$ il rendimento annuo effettivo usato per attualizzare tutti i flussi. Il fattore di sconto annuo è $v=(1+y)^{-1}$. Il valore attuale del pagamento $k$ è $A_k=C_kv^{t_k}$ e il prezzo è $P(y)=\sum_k A_k$. La **duration di Macaulay**, indicata con $D$, è la media dei tempi di pagamento con pesi uguali alle rispettive quote di prezzo.

$$
\begin{aligned}
w_k&=\frac{A_k}{P(y)},\\[6pt]
D(y)&=\sum_k t_kw_k=\frac{\sum_k t_k C_kv^{t_k}}{P(y)}.
\end{aligned}
$$

I pesi sono positivi e sommano a uno, quindi la duration si misura in anni e cade fra la prima e l'ultima scadenza. Un pagamento che incide molto sul prezzo incide molto anche sulla media delle date. Il peso si calcola usando il valore attuale perché tutti gli importi devono essere espressi alla data di valutazione.
:::

:::esempio{titolo="Dal calendario dei pagamenti alla duration"}
Un titolo paga $55\,\mathrm{euro}$ fra un anno e $121\,\mathrm{euro}$ fra due anni. Al rendimento annuo effettivo del $10\%$, i valori attuali sono

$$
A_1=\frac{55}{1{,}1}=50\,\mathrm{euro},
\qquad
A_2=\frac{121}{1{,}1^2}=100\,\mathrm{euro}.
$$

Il prezzo è $150\,\mathrm{euro}$, perciò le quote di prezzo valgono $\dfrac13$ e $\dfrac23$. La duration è $1\cdot\dfrac13+2\cdot\dfrac23=\dfrac53\,\mathrm{anni}$. La scadenza del titolo è due anni. La media finanziaria è inferiore a due perché il primo incasso contribuisce al prezzo.
:::

:::osservazione
Due titoli con gli stessi tempi di pagamento possono avere duration diverse. Con date $1$ e $2$ e valori attuali rispettivamente di $100$ e $100\,\mathrm{euro}$, la duration è $1{,}5\,\mathrm{anni}$. Se il primo valore attuale scende di $40\,\mathrm{euro}$ e il secondo cresce della stessa cifra, il prezzo resta $200\,\mathrm{euro}$ e la duration sale a $1{,}7\,\mathrm{anni}$. A prezzo invariato, l'aumento del peso della scadenza più lontana fa aumentare la media.
:::

:::osservazione
Al variare del rendimento cambiano anche i pesi. Se due flussi scadono a $t_1<t_2$, il rapporto dei loro valori attuali è $\dfrac{C_2}{C_1}(1+y)^{-(t_2-t_1)}$. Quando $y$ aumenta, il rapporto diminuisce perché $t_2-t_1>0$. In questo caso la quota di prezzo della scadenza più lontana si riduce, quindi la duration di Macaulay diminuisce. Con un unico flusso il suo peso vale sempre uno e la duration resta pari alla scadenza.
:::

:::osservazione
Il calcolo con due flussi si estende a un numero finito di pagamenti positivi. La derivata del peso $w_k=\dfrac{A_k}{P(y)}$ si ottiene derivando numeratore e denominatore. Poiché $A'_k=-t_k \dfrac{A_k}{1+y}$ e $P'=-\dfrac{D P}{1+y}$, risulta

$$
w'_k=\frac{D-t_k}{1+y}w_k.
$$

Un flusso con scadenza anteriore alla duration acquista peso all'aumentare del rendimento. Uno con scadenza successiva perde peso. La media dei tempi ha quindi derivata

$$
\begin{aligned}
D'(y)&=\frac{D^2-\sum_k w_k t_k^2}{1+y}\\[6pt]
&=-\frac{\sum_k w_k(t_k-D)^2}{1+y}.
\end{aligned}
$$

La somma al numeratore misura la dispersione dei tempi intorno alla duration. È zero quando tutti i flussi hanno la stessa scadenza, mentre è positiva quando almeno due scadenze sono distinte. La duration diminuisce quindi in modo stretto con il rendimento per ogni flusso con più scadenze distinte. Il risultato riguarda la media finanziaria con pesi ricalcolati allo stesso rendimento.
:::

## Duration modificata

::::teorema{#duration-modificata titolo="Derivata del prezzo e duration modificata"}
Siano i flussi fissi e positivi e le scadenze espresse in anni, con almeno un pagamento futuro. Il prezzo $P(y)$ è derivabile per $y>-1$. La **duration modificata** rispetto al rendimento annuo effettivo $y$ è la derivata del prezzo cambiata di segno e divisa per il prezzo stesso.

$$
D_{\mathrm{mod}}(y)=-\frac{P'(y)}{P(y)}=\frac{D(y)}{1+y}.
$$

La derivata misura la variazione in euro per unità di tasso. Dividendo per il prezzo si ottiene la variazione relativa, quindi si possono confrontare titoli con prezzi diversi. Poiché $P'(y)<0$, un aumento del rendimento riduce il prezzo.

:::dimostrazione
Si deriva la somma dei valori attuali mantenendo fissi pagamenti e date. Per ciascun flusso si ha

$$
\frac{\mathrm d}{\mathrm dy}\bigl[C_k(1+y)^{-t_k}\bigr]
=-\frac{t_k}{1+y}\,C_k(1+y)^{-t_k}.
$$

Il fattore $-\dfrac{1}{1+y}$ è comune a tutti i termini. Dopo averlo raccolto, resta la somma dei valori attuali moltiplicati per i tempi. Dividendo per $P(y)$ questa somma diventa $D(y)$.
:::
::::

:::esempio{titolo="Un semestre come periodo di capitalizzazione"}
Un titolo paga dopo tre semestri, quindi la sua duration di Macaulay è $1{,}5\,\mathrm{anni}$. Il rendimento effettivo semestrale è il $2\%$. Se $j$ è il rendimento nominale annuo convertibile due volte, allora $j=4\%$ e il prezzo è proporzionale a $\left(1+\dfrac{j}{2}\right)^{-3}$. La sensibilità relativa rispetto a $j$ è

$$
D_{\mathrm{mod},j}
=\frac{3}{2(1+0{,}02)}
=\frac{1{,}5}{1{,}02}\approx 1{,}4706.
$$

Rispetto al tasso semestrale $i=\dfrac{j}{2}$ la sensibilità relativa è invece $\dfrac{3}{1{,}02}$, perché a una stessa variazione numerica di $i$ corrisponde una variazione di $j$ doppia. L'unità di tempo della media e la variabile rispetto a cui si deriva vanno dichiarate insieme.
:::

:::osservazione
Se un rendimento annuo effettivo del $10\%$ diventa l'$11\%$, la variazione assoluta è $\Delta y=0{,}01$, ossia un punto percentuale o cento punti base. Il tasso è cresciuto del $10\%$ rispetto al suo valore iniziale, perché $\dfrac{0{,}01}{0{,}10}=0{,}10$. Per approssimare il prezzo con la derivata si usa la differenza assoluta $0{,}01$.
:::

## Convexity

::::teorema{#convexity titolo="Curvatura del prezzo rispetto al rendimento"}
La **convexity** rispetto al rendimento annuo effettivo $y$ è il rapporto fra la derivata seconda del prezzo e il prezzo. Con flussi fissi positivi ai tempi $t_k\geq 0$ e almeno una scadenza futura si ha

$$
\mathcal C(y)
=\frac{P''(y)}{P(y)}
=\frac{\sum_k t_k(t_k+1)w_k}{(1+y)^2}>0.
$$

La curva del prezzo è strettamente convessa, quindi il suo grafico si trova sopra la retta tangente. La differenza fra prezzo e tangente compare già con un titolo a pagamento unico, perché il fattore di sconto varia in modo non lineare con il tasso.

:::dimostrazione
Si deriva una seconda volta il valore attuale di ogni pagamento. La derivata di $(1+y)^{-t_k-1}$ porta un fattore $-t_k-1$, quindi la seconda derivata del termine è $t_k(t_k+1)C_k(1+y)^{-t_k-2}$. Dividendo la somma per $P(y)$, il valore attuale di ciascun pagamento diventa il peso $w_k$. Almeno un $t_k$ è positivo, perciò il numeratore della formula in pesi è strettamente positivo.
:::
::::

:::esempio{titolo="Convexity con due flussi attualizzati"}
Al rendimento annuo effettivo del $10\%$, due flussi ai tempi $1$ e $2$ contribuiscono al prezzo con $80$ e $120\,\mathrm{euro}$. La media dei fattori $t_k(t_k+1)$ vale $2\cdot 0{,}4+6\cdot 0{,}6=4{,}4$. Dopo la divisione per $1{,}1^2$ la convexity è $\dfrac{4{,}4}{1{,}21}\approx 3{,}6364$. Il secondo pagamento produce il $60\%$ del prezzo e contribuisce per $3{,}6$ dei $4{,}4$ nel numeratore. La derivata seconda assegna maggiore incidenza alle scadenze lontane perché i fattori crescono quadraticamente con il tempo.
:::

:::attenzione
La convexity dipende dal parametro con cui si misura il rendimento. Se si usa la forza di interesse $\delta=\log(1+y)$, ogni valore attuale è $C_k e^{-\delta t_k}$. In quella variabile le due derivate relative danno, con i segni consueti, $\sum_k w_k t_k$ e $\sum_k w_k t_k^2$. Per esempio, uno zero coupon a due anni ha convexity $4$ rispetto a $\delta$ e $\dfrac{6}{(1+y)^2}$ rispetto a $y$. Entrambe descrivono lo stesso prezzo, espresso in due variabili diverse.
:::

## Variazione lineare di prezzo

:::definizione{#sensibilita-prezzo titolo="Variazione relativa, variazione in euro e DV01"}
Al rendimento iniziale $y$ si considera uno spostamento $\Delta y$ con $y+\Delta y>-1$. Poniamo $\Delta P=P(y+\Delta y)-P(y)$. Al primo ordine si ottengono due stime dello stesso movimento.

$$
\begin{aligned}
\frac{\Delta P}{P(y)}&\approx -D_{\mathrm{mod}}(y)\Delta y,\\[6pt]
\Delta P&\approx -P(y)D_{\mathrm{mod}}(y)\Delta y.
\end{aligned}
$$

La prima esprime la variazione come frazione del prezzo, la seconda in euro. In questo capitolo il **DV01** è l'importo positivo della perdita stimata per un aumento di un punto base, ossia $P(y)D_{\mathrm{mod}}(y)10^{-4}$. La perdita esatta per un punto base si ottiene valutando nuovamente tutti i flussi al tasso $y+10^{-4}$.
:::

:::esempio{titolo="Da punti base a euro"}
Un titolo vale $1200\,\mathrm{euro}$ e ha duration modificata $4{,}5$. Il DV01 è $1200\cdot 4{,}5\cdot10^{-4}=0{,}54\,\mathrm{euro}$ per punto base. Una discesa di $25$ punti base corrisponde a $\Delta y=-0{,}0025$. Sostituendo nell'espressione lineare si ottengono $+0{,}01125$ come variazione relativa e $+13{,}50\,\mathrm{euro}$ come variazione assoluta. Il segno positivo indica un aumento del prezzo.
:::

:::osservazione
La duration modificata ordina la sensibilità percentuale, mentre il DV01 tiene conto anche dell'importo investito. Un titolo da $1000\,\mathrm{euro}$ con duration modificata $6$ ha DV01 pari a $0{,}60\,\mathrm{euro}$. Un titolo da $3000\,\mathrm{euro}$ con duration modificata $3$ ha DV01 pari a $0{,}90\,\mathrm{euro}$. Il primo subisce la variazione percentuale più grande per il medesimo spostamento del rendimento. Il secondo subisce la variazione in euro più grande perché la sua base di calcolo è maggiore.
:::

## Secondo ordine

::::teorema{#taylor-prezzo titolo="Approssimazione con duration e convexity"}
Con pagamenti fissi e rendimento annuo effettivo $y>-1$, il prezzo è tre volte derivabile in un intorno di $y$. Per $\Delta y$ vicino a zero, il polinomio di Taylor del secondo ordine dà

$$
\frac{\Delta P}{P(y)}
=-D_{\mathrm{mod}}(y)\Delta y
+\frac{\mathcal C(y)}{2}(\Delta y)^2
+O\bigl((\Delta y)^3\bigr).
$$

Il termine $O\bigl((\Delta y)^3\bigr)$ indica un resto che in valore assoluto è al più una costante per $|\Delta y|^3$ in un intorno di zero. Per flussi positivi la correzione quadratica ha segno positivo per entrambi i versi dello spostamento. Per due spostamenti opposti ammissibili, la stretta convessità dà $P(y-h)+P(y+h)>2P(y)$ per $h>0$. Il guadagno per la discesa supera quindi la perdita per la salita.

:::dimostrazione
Si applica il teorema di Taylor alla funzione $P$ nel punto $y$. Si sottrae $P(y)$ e si divide per il prezzo iniziale. I coefficienti del primo e del secondo termine diventano rispettivamente $-D_{\mathrm{mod}}(y)$ e $\dfrac{\mathcal C(y)}{2}$. La derivata terza è continua e limitata in un piccolo intervallo chiuso intorno a $y$, quindi il resto ha l'ordine indicato.
:::
::::

:::esempio{titolo="Confronto con il nuovo prezzo esatto"}
Un titolo a due anni paga $110{,}25\,\mathrm{euro}$ a scadenza. Al rendimento del $5\%$ il prezzo è $100\,\mathrm{euro}$. Se il rendimento sale al $9\%$, vale $\Delta y=0{,}04$. Il prezzo lineare è $100\bigl(1-\dfrac{2}{1{,}05}\cdot 0{,}04\bigr)\approx92{,}38\,\mathrm{euro}$. La convexity è $\dfrac{6}{1{,}05^2}$ e il termine quadratico aggiunge circa $0{,}435\,\mathrm{euro}$. Il prezzo al secondo ordine è circa $92{,}82\,\mathrm{euro}$ e il prezzo esatto è $\dfrac{110{,}25}{1{,}09^2}\approx92{,}80\,\mathrm{euro}$. Prima dell'arrotondamento, il prezzo esatto e quello al secondo ordine differiscono di circa $0{,}021\,\mathrm{euro}$.
:::

::grafico{f="110.25/(1.05+x/100)^2-100;-200/1.05*x/100;100*(-2/1.05*x/100+3/1.05^2*(x/100)^2)" xmin=-16 xmax=16 ymin=-32 ymax=44 nomi="h,ΔP" legenda="\text{Variazione esatta};\text{Primo ordine};\text{Secondo ordine}" titolo="Zero coupon a due anni con rendimento iniziale del 5 per cento. Lo spostamento h è in punti percentuali e la variazione di prezzo in euro."}

:::osservazione
Dimezzando lo spostamento, il termine quadratico si riduce a un quarto. Per confrontare le stime numeriche si calcola l'errore in euro come differenza fra prezzo stimato e prezzo esatto. Nel grafico la coordinata orizzontale è lo spostamento in punti percentuali, e la coordinata verticale è la variazione di prezzo in euro. Le tre curve passano per il punto corrispondente allo spostamento nullo e hanno in quel punto la stessa pendenza. Il prezzo esatto e il secondo ordine hanno anche la stessa curvatura locale. La formula con la convexity è una stima locale. Se lo spostamento è ampio, il ricalcolo esatto tiene conto anche dei termini di ordine superiore.
:::

## Portafogli

::::teorema{#duration-portafoglio titolo="Pesi di mercato e sensibilità del portafoglio"}
Siano $x_j\geq0$ le quantità detenute e $P_j(s)>0$ i prezzi dei singoli titoli quando i rendimenti cambiano secondo uno stesso parametro $s$. Un esempio è lo shock parallelo $s$ che si somma, in forma decimale, a ogni rendimento iniziale. Sia $V(s)=\sum_j x_jP_j(s)>0$ il valore del portafoglio. Rispetto a $s$ le sensibilità normalizzate si combinano con i **pesi di valore di mercato** $\omega_j=\dfrac{x_jP_j(s)}{V(s)}$.

$$
\begin{aligned}
D_{\mathrm{mod},V}&=\sum_j\omega_jD_{\mathrm{mod},j},\\[6pt]
\mathcal C_V&=\sum_j\omega_j\mathcal C_j.
\end{aligned}
$$

In particolare, il DV01 del portafoglio è la somma dei DV01 delle posizioni. Il peso di un titolo dipende dalla quantità detenuta e dal prezzo unitario. Anche titoli acquistati nella stessa quantità possono avere pesi diversi.

:::dimostrazione
Le quantità sono fisse, quindi $V'=\sum_j x_jP_j'$ e $V''=\sum_j x_jP_j''$. Dividendo per $V$ e moltiplicando ogni addendo per $\dfrac{P_j}{P_j}$, si ottengono i pesi $\omega_j$. La formula sul DV01 segue moltiplicando la duration modificata del portafoglio per $V\cdot 10^{-4}$.
:::
::::

:::esempio{titolo="Due quantità uguali e valori diversi"}
Un portafoglio contiene una unità di un titolo da $300\,\mathrm{euro}$ con duration modificata $2$ e una unità di un titolo da $700\,\mathrm{euro}$ con duration modificata $5$. Per uno spostamento comune dei rendimenti, la duration modificata del portafoglio è $0{,}3\cdot2+0{,}7\cdot5=4{,}1$. Il DV01 è $0{,}41\,\mathrm{euro}$. Per un aumento di $20$ punti base la perdita stimata è $8{,}20\,\mathrm{euro}$. La stessa perdita si ottiene sommando $300\cdot 2\cdot0{,}002=1{,}20$ e $700\cdot 5\cdot0{,}002=7\,\mathrm{euro}$.
:::

:::attenzione
Se gli spostamenti dei rendimenti sono diversi, si calcola al primo ordine $\Delta V\approx-\sum_j x_jP_jD_{\mathrm{mod},j}\Delta y_j$. Un titolo con prezzo $300\,\mathrm{euro}$ e duration modificata $2$ perde circa $6\,\mathrm{euro}$ se il suo rendimento sale di un punto percentuale. Un altro titolo con prezzo $600\,\mathrm{euro}$ e duration modificata $2$ guadagna circa $6\,\mathrm{euro}$ se il suo rendimento scende di mezzo punto percentuale. Le variazioni si compensano al primo ordine anche se entrambe le duration sono positive. L'immunizzazione studia condizioni di compensazione tra attività e passività sotto ipotesi di spostamento dichiarate.
:::

## ZCB e rendite

:::teorema{#duration-zcb titolo="Sensibilità di un pagamento unico"}
Uno zero coupon, indicato con ZCB, paga un solo importo positivo $C$ al tempo $T>0$. Poiché tutto il prezzo è attribuito alla scadenza $T$, la duration di Macaulay è $D=T$. Con rendimento annuo effettivo $y>-1$ seguono le identità

$$
D_{\mathrm{mod}}=\frac{T}{1+y},
\qquad
\mathcal C=\frac{T(T+1)}{(1+y)^2}.
$$

La prima uguaglianza discende dal rapporto fra la derivata del prezzo e il prezzo. La seconda si ottiene derivando due volte $C(1+y)^{-T}$. L'importo $C$ si semplifica nei rapporti, quindi entrambe le misure relative dipendono da $T$ e $y$.
:::

:::esempio{titolo="Un titolo con cedole e uno zero coupon"}
Due titoli scadono fra tre anni. Il primo è uno zero coupon, quindi la sua duration di Macaulay è $3\,\mathrm{anni}$. Nel secondo, le quote di valore attuale dei pagamenti ai tempi $1$, $2$ e $3$ sono $0{,}1$, $0{,}1$ e $0{,}8$. La duration è $0{,}1+0{,}2+2{,}4=2{,}7\,\mathrm{anni}$. Allo stesso rendimento annuo effettivo, il titolo con cedole ha anche duration modificata minore, perché il divisore $1+y$ è uguale per i due titoli.
:::

:::osservazione
Per una rendita perpetua posticipata con rata annua costante $R>0$ e rendimento $y>0$, il prezzo è $P(y)=\dfrac R y$. La derivata prima è $-\dfrac R {y^2}$ e la seconda è $\dfrac{2R}{y^3}$. Pertanto $D_{\mathrm{mod}}=\dfrac1y$, $D=\dfrac{1+y}{y}$ e $\mathcal C=\dfrac{2}{y^2}$. Con $y=5\%$ la duration di Macaulay vale $21\,\mathrm{anni}$. La media è finita perché i valori attuali delle rate lontane diminuiscono geometricamente.
:::

## Controlli mediante le derivate

:::definizione{#derivate-prezzo titolo="Differenze finite centrate"}
Se si conosce il prezzo a tre rendimenti vicini, si possono stimare le derivate senza calcolare i singoli pesi. Sia $h>0$ un incremento del rendimento in forma decimale e sia $y-h>-1$. Si usano le **differenze finite centrate**

$$
\begin{aligned}
P'(y)&\approx\frac{P(y+h)-P(y-h)}{2h},\\[6pt]
P''(y)&\approx\frac{P(y+h)-2P(y)+P(y-h)}{h^2}.
\end{aligned}
$$

Sviluppando i prezzi attorno a $y$, nella differenza si eliminano il termine costante e quelli di ordine pari. Nella somma si elimina il termine lineare e sottraendo due volte $P(y)$ si elimina anche il termine costante. Il divisore $2h$ deriva dalla distanza fra i due rendimenti estremi.
:::

:::esempio{titolo="Stima della sensibilità da tre prezzi"}
Al rendimento iniziale del $4\%$ un titolo vale $100\,\mathrm{euro}$. A $3{,}9\%$ vale $100{,}402\,\mathrm{euro}$ e a $4{,}1\%$ vale $99{,}602\,\mathrm{euro}$. Con $h=0{,}001$ si ottengono

$$
\begin{aligned}
P'(y)&\approx \frac{99{,}602-100{,}402}{0{,}002}=-400,\\[6pt]
P''(y)&\approx \frac{99{,}602-200+100{,}402}{0{,}001^2}=4000.
\end{aligned}
$$

Dividendo per il prezzo iniziale, si ottengono duration modificata circa $4$ e convexity circa $40$. La prima differenza registra la direzione del movimento. La seconda confronta il prezzo centrale con la media dei due prezzi esterni, che è più alta perché il prezzo è convesso.
:::

:::attenzione
Quando i prezzi sono arrotondati, un passo piccolo può peggiorare la stima. Arrotondando i tre prezzi dell'esempio ai centesimi si ottengono $100{,}40$, $100{,}00$ e $99{,}60\,\mathrm{euro}$. La seconda differenza diventa zero, perché l'arrotondamento cancella lo scarto di quattro millesimi. La curvatura si misura con quotazioni sufficientemente precise rispetto al passo impiegato.
:::
