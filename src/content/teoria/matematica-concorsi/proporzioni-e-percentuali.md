---
titolo: Rapporti, proporzioni e percentuali
sommario: Come si calcolano rapporti e proporzioni, come si riconoscono le grandezze direttamente e inversamente proporzionali, come si ripartisce una somma e come si risolvono i quesiti su percentuali, sconti, aumenti, IVA e variazioni successive.
---

## Rapporti

:::definizione{#rapporto titolo="Rapporto tra due numeri"}
Il **rapporto** tra due numeri $a$ e $b$, con $b \neq 0$, è il quoziente $\dfrac{a}{b}$, che si scrive anche $a : b$ e si legge "$a$ sta a $b$". Il rapporto dice quante volte $a$ contiene $b$, oppure quale frazione di $b$ è $a$. Un rapporto non cambia se si moltiplicano o si dividono entrambi i termini per lo stesso numero diverso da zero, quindi si può sempre semplificare: in un gruppo di $12$ uomini e $18$ donne il rapporto tra uomini e donne è
$$
\frac{12}{18} = \frac{2}{3},
$$
cioè ci sono $2$ uomini ogni $3$ donne. Il rapporto tra uomini e totale delle persone è invece $\dfrac{12}{30} = \dfrac{2}{5}$. I due rapporti sono diversi, quindi il risultato di un quesito dipende da quali grandezze si confrontano.
:::

:::esempio{titolo="Scala di una carta geografica"}
La **scala** di una carta è il rapporto tra una distanza misurata sulla carta e la distanza reale corrispondente. In una carta in scala $1 : 25\,000$ ogni centimetro sulla carta corrisponde a $25\,000$ centimetri reali, cioè a $250$ metri. Due punti che sulla carta distano $4$ cm sono quindi lontani nella realtà
$$
4 \cdot 25\,000\ \text{cm} = 100\,000\ \text{cm} = 1\ \text{km} .
$$
Per passare dai centimetri ai chilometri si divide per $100\,000$, perché $1$ km $= 1000$ m $= 100\,000$ cm.
:::

## Proporzioni

::::teorema{#proprieta-fondamentale titolo="Proprietà fondamentale delle proporzioni"}
Una **proporzione** è un'uguaglianza tra due rapporti,
$$
a : b = c : d ,
$$
dove $a$ e $d$ si chiamano **estremi** e $b$ e $c$ **medi**. In ogni proporzione il prodotto dei medi è uguale al prodotto degli estremi:
$$
a : b = c : d \iff a \cdot d = b \cdot c .
$$
La proprietà serve a trovare un termine incognito. Nella proporzione $3 : 4 = 15 : x$ si ha $3 \cdot x = 4 \cdot 15$, quindi
$$
x = \frac{4 \cdot 15}{3} = 20 .
$$
In pratica un medio incognito si ottiene moltiplicando gli estremi e dividendo per l'altro medio, e un estremo incognito moltiplicando i medi e dividendo per l'altro estremo.

:::dimostrazione
La proporzione dice che $\dfrac{a}{b} = \dfrac{c}{d}$. Moltiplicando i due membri per $b \cdot d$, che è diverso da zero, si ottiene $a \cdot d = c \cdot b$. Viceversa, se $a \cdot d = b \cdot c$, dividendo i due membri per $b \cdot d$ si ritrova $\dfrac{a}{b} = \dfrac{c}{d}$.
:::
::::

:::teorema{#proprieta-del-comporre titolo="Proprietà del comporre"}
Se $a : b = c : d$, allora
$$
(a + b) : a = (c + d) : c
\qquad\text{e}\qquad
(a + b) : b = (c + d) : d .
$$
La proprietà segue dalla proprietà fondamentale sviluppando i prodotti. Serve nei problemi in cui sono noti il rapporto tra due quantità e la loro somma. Per dividere $120$ in due parti $x$ e $y$ con $x : y = 3 : 5$ si scrive $(x + y) : x = (3 + 5) : 3$, cioè $120 : x = 8 : 3$, e si ottiene $x = \dfrac{120 \cdot 3}{8} = 45$, quindi $y = 120 - 45 = 75$. Lo stesso risultato si ottiene ragionando per parti: $120$ si divide in $3 + 5 = 8$ parti uguali da $15$, e $x$ ne prende $3$, $y$ ne prende $5$.
:::

## Grandezze direttamente e inversamente proporzionali

:::definizione{#grandezze-direttamente-proporzionali titolo="Grandezze direttamente proporzionali"}
Due grandezze sono **direttamente proporzionali** se il loro rapporto è costante: raddoppiando una, raddoppia anche l'altra; triplicando una, triplica l'altra. Se $x$ e $y$ sono direttamente proporzionali, allora $y = k\,x$ per un numero fisso $k$, e il grafico di $y$ in funzione di $x$ è una retta che passa per l'origine. Sono direttamente proporzionali, per esempio, il peso della merce e il prezzo pagato a prezzo unitario fisso, oppure lo spazio percorso e il tempo a velocità costante. Se $3$ kg di mele costano $7{,}50$ euro, un chilogrammo costa $2{,}50$ euro e $5$ kg costano $12{,}50$ euro.

::grafico{f="2.5*x+0*sqrt(x)" punti="3,7.5,pieno;5,12.5,pieno" segmenti="3,0,3,7.5;5,0,5,12.5" xmin=-1 xmax=7 ymin=-2 ymax=18 nomi="kg,€" legenda="y = 2{,}5\,x" titolo="Prezzo in funzione del peso a $2{,}50$ euro al chilogrammo: una retta per l'origine, perché le due grandezze sono direttamente proporzionali"}

:::

:::definizione{#grandezze-inversamente-proporzionali titolo="Grandezze inversamente proporzionali"}
Due grandezze sono **inversamente proporzionali** se il loro prodotto è costante: raddoppiando una, l'altra si dimezza. Se $x$ e $y$ sono inversamente proporzionali, allora $x \cdot y = k$ per un numero fisso $k$, cioè $y = \dfrac{k}{x}$, e il grafico è un ramo di iperbole. Sono inversamente proporzionali il numero di operai che svolgono un lavoro e il tempo necessario, a parità di lavoro e di ritmo, oppure la velocità e il tempo di percorrenza di un tragitto fisso. Se $6$ operai impiegano $10$ giorni, il lavoro vale $6 \cdot 10 = 60$ giornate-operaio, quindi $4$ operai impiegano $\dfrac{60}{4} = 15$ giorni.

::grafico{f="60/x+0*sqrt(x)" punti="4,15,pieno;6,10,pieno;10,6,pieno" xmin=-2 xmax=18 ymin=-4 ymax=36 nomi="x,y" legenda="y = \dfrac{60}{x}" titolo="Giorni di lavoro $y$ in funzione del numero $x$ di operai, con un lavoro di $60$ giornate-operaio: il prodotto delle due grandezze è costante"}

:::

:::osservazione{#regola-del-tre titolo="Regola del tre"}
Quando due grandezze sono proporzionali e di una coppia di valori si conoscono entrambi, il valore incognito si trova con una proporzione, detta **regola del tre**.

- Se le grandezze sono direttamente proporzionali, i valori stanno nello stesso rapporto: $5$ quaderni costano $7{,}50$ euro, quindi $12$ quaderni costano $x$ con $5 : 7{,}50 = 12 : x$, cioè $x = 18$ euro.
- Se le grandezze sono inversamente proporzionali, si uguagliano i prodotti: $4$ rubinetti uguali riempiono una vasca in $6$ ore, quindi $3$ rubinetti la riempiono in $x$ ore con $4 \cdot 6 = 3 \cdot x$, cioè $x = 8$ ore.

Prima di impostare il calcolo si stabilisce di che tipo è la proporzionalità, chiedendosi se all'aumentare di una grandezza l'altra aumenta oppure diminuisce. Con più rubinetti il tempo diminuisce, perciò il risultato deve essere minore di $6$ ore se i rubinetti aumentano e maggiore se diminuiscono.
:::

## Ripartizione proporzionale

:::definizione{#ripartizione-diretta titolo="Ripartizione in parti direttamente proporzionali"}
Ripartire una quantità $S$ in parti **direttamente proporzionali** ai numeri $a$, $b$, $c$ significa dividerla in tre parti $x$, $y$, $z$ tali che
$$
x : a = y : b = z : c
\qquad\text{e}\qquad
x + y + z = S .
$$
Si divide $S$ per la somma $a + b + c$, ottenendo il valore di una parte, e lo si moltiplica per ciascun numero: $x = \dfrac{S}{a + b + c} \cdot a$, e allo stesso modo per $y$ e $z$. Per ripartire $900$ euro in parti proporzionali a $2$, $3$ e $4$ si calcola $\dfrac{900}{9} = 100$, quindi le parti sono $200$, $300$ e $400$ euro. Come controllo, la somma delle parti deve essere $S$.
:::

:::definizione{#ripartizione-inversa titolo="Ripartizione in parti inversamente proporzionali"}
Ripartire $S$ in parti **inversamente proporzionali** ai numeri $a$, $b$, $c$ significa ripartirla in parti direttamente proporzionali ai reciproci $\dfrac{1}{a}$, $\dfrac{1}{b}$, $\dfrac{1}{c}$. Per evitare le frazioni si riducono i reciproci allo stesso denominatore e si usano i numeratori. Per ripartire $600$ euro in parti inversamente proporzionali a $2$, $3$ e $6$ si scrivono i reciproci con denominatore $6$:
$$
\frac{1}{2} = \frac{3}{6},
\qquad
\frac{1}{3} = \frac{2}{6},
\qquad
\frac{1}{6} = \frac{1}{6},
$$
quindi la ripartizione è in parti direttamente proporzionali a $3$, $2$ e $1$. Poiché $\dfrac{600}{6} = 100$, le parti sono $300$, $200$ e $100$ euro: la parte maggiore va a chi corrisponde il numero minore.
:::

## Percentuali

:::definizione{#percentuale titolo="Percentuale"}
Una **percentuale** è un rapporto con denominatore $100$: $p\%$ significa $\dfrac{p}{100}$. Quindi il $p\%$ di un numero $N$ è
$$
\frac{p}{100} \cdot N .
$$
I quesiti sulle percentuali chiedono una delle tre quantità $p$, $N$ e la parte $P = \dfrac{p}{100} \cdot N$, conoscendo le altre due.

- Il $15\%$ di $80$ è $\dfrac{15}{100} \cdot 80 = 12$.
- $18$ è il $p\%$ di $72$ con $p = \dfrac{18}{72} \cdot 100 = 25$, cioè il $25\%$.
- $30$ è il $12\%$ di $N = \dfrac{30 \cdot 100}{12} = 250$.

Le tre formule sono la stessa proporzione $P : N = p : 100$, risolta ogni volta rispetto al termine incognito.
:::

:::osservazione{#percentuali-e-frazioni titolo="Percentuali e frazioni"}
Alcune percentuali corrispondono a frazioni semplici, e riconoscerle accorcia molti calcoli:
$$
50\% = \frac{1}{2},
\qquad
25\% = \frac{1}{4},
\qquad
20\% = \frac{1}{5},
\qquad
10\% = \frac{1}{10},
\qquad
12{,}5\% = \frac{1}{8},
\qquad
75\% = \frac{3}{4} .
$$
Il $25\%$ di $360$ è quindi $\dfrac{360}{4} = 90$. Il $10\%$ di un numero si ottiene spostando la virgola di un posto a sinistra, e l'$1\%$ spostandola di due posti: il $10\%$ di $345$ è $34{,}5$ e l'$1\%$ è $3{,}45$. Da questi si ricavano le altre percentuali; per esempio il $15\%$ è il $10\%$ più la sua metà.
:::

## Aumenti, sconti e IVA

:::teorema{#aumenti-e-sconti titolo="Aumenti e sconti percentuali"}
Un aumento del $p\%$ moltiplica il valore per $1 + \dfrac{p}{100}$; uno sconto del $p\%$ lo moltiplica per $1 - \dfrac{p}{100}$:
$$
V_{\text{nuovo}} = V \cdot \left( 1 + \frac{p}{100} \right),
\qquad
V_{\text{scontato}} = V \cdot \left( 1 - \frac{p}{100} \right) .
$$
Infatti aumentare $V$ del $p\%$ significa aggiungere a $V$ la quantità $\dfrac{p}{100} \cdot V$, e raccogliendo $V$ si ottiene la prima formula; per lo sconto la quantità si sottrae. Un prezzo di $80$ euro aumentato del $15\%$ diventa $80 \cdot 1{,}15 = 92$ euro; un prezzo di $45$ euro scontato del $20\%$ diventa $45 \cdot 0{,}8 = 36$ euro. Il numero per cui si moltiplica, come $1{,}15$ o $0{,}8$, si chiama **fattore moltiplicativo**.

::grafico{f="1.2*x+0*sqrt(x);0.8*x+0*sqrt(x)" punti="50,60,pieno;50,40,pieno" segmenti="50,0,50,60" xmin=-10 xmax=90 ymin=-10 ymax=90 nomi="x,y" legenda="y = 1{,}2\,x;y = 0{,}8\,x" titolo="Un aumento del $20\%$ moltiplica il prezzo $x$ per $1{,}2$, uno sconto del $20\%$ lo moltiplica per $0{,}8$: un prezzo di $50$ euro diventa $60$ euro oppure $40$ euro"}

:::

:::esempio{titolo="Calcolo e scorporo dell'IVA"}
L'IVA è un aumento percentuale applicato al prezzo senza imposta, detto **imponibile**. Con l'aliquota del $22\%$ un imponibile di $150$ euro diventa
$$
150 \cdot 1{,}22 = 183 \text{ euro} .
$$
Il calcolo inverso, detto **scorporo**, parte dal prezzo con IVA e trova l'imponibile dividendo per il fattore moltiplicativo. Un prezzo di $244$ euro IVA inclusa ha imponibile $\dfrac{244}{1{,}22} = 200$ euro, e l'IVA vale $44$ euro. L'imponibile non si ottiene togliendo il $22\%$ dal prezzo finale, perché il $22\%$ è calcolato sull'imponibile e non sul prezzo con IVA: togliendo il $22\%$ da $244$ euro si otterrebbero $190{,}32$ euro, che è sbagliato.
:::

## Variazioni percentuali

:::definizione{#variazione-percentuale titolo="Variazione percentuale"}
Quando una grandezza passa dal valore $V_1$ al valore $V_2$, la sua **variazione percentuale** è
$$
\frac{V_2 - V_1}{V_1} \cdot 100 .
$$
Si divide sempre per il valore *iniziale*. È positiva per un aumento e negativa per una diminuzione. Un abbonamento che passa da $40$ a $46$ euro aumenta del $\dfrac{6}{40} \cdot 100 = 15\%$; un prezzo che scende da $64$ a $48$ euro diminuisce del $\dfrac{16}{64} \cdot 100 = 25\%$.
:::

:::teorema{#variazioni-successive titolo="Variazioni percentuali successive"}
Se un valore subisce una dopo l'altra due variazioni percentuali, il valore finale si ottiene moltiplicando per i due fattori moltiplicativi:
$$
V_{\text{finale}} = V \cdot \left( 1 \pm \frac{p}{100} \right) \cdot \left( 1 \pm \frac{q}{100} \right) .
$$
La seconda variazione si calcola sul valore già modificato dalla prima, perciò i fattori si moltiplicano e le percentuali non si sommano. Due sconti successivi del $10\%$ e del $20\%$ danno il fattore $0{,}9 \cdot 0{,}8 = 0{,}72$, cioè uno sconto complessivo del $28\%$ e non del $30\%$. Una popolazione che cresce del $5\%$ per due anni di seguito è moltiplicata per $1{,}05^{2} = 1{,}1025$, quindi cresce del $10{,}25\%$.
:::

:::attenzione
Un aumento e una diminuzione della stessa percentuale *non* si compensano. Un prezzo di $100$ euro aumentato del $20\%$ diventa $120$ euro; diminuito poi del $20\%$ diventa $120 \cdot 0{,}8 = 96$ euro, perché il secondo $20\%$ è calcolato su $120$ e non su $100$. Il fattore complessivo è $1{,}2 \cdot 0{,}8 = 0{,}96$, quindi il prezzo finale è il $4\%$ in meno di quello iniziale.
:::

:::osservazione{#punti-percentuali titolo="Punti percentuali"}
Quando la grandezza che varia è già una percentuale, come un tasso di interesse o di disoccupazione, si distingue la differenza in **punti percentuali** dalla variazione percentuale. Se il tasso di disoccupazione passa dall'$8\%$ al $10\%$, la differenza è di $2$ punti percentuali, mentre la variazione percentuale è $\dfrac{10 - 8}{8} \cdot 100 = 25\%$. Nei quesiti a risposta multipla le due risposte compaiono spesso entrambe tra le opzioni.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Calcolo mentale delle percentuali"}
Nelle prove a tempo molti calcoli si fanno a mente con tre osservazioni.

- **Scomporre la percentuale** in parti facili: il $15\%$ di $360$ è il $10\%$, cioè $36$, più il $5\%$, cioè $18$, quindi $54$.
- **Scambiare i numeri**: il $p\%$ di $q$ è uguale al $q\%$ di $p$, perché entrambi valgono $\dfrac{p \cdot q}{100}$. Il $16\%$ di $25$ è quindi il $25\%$ di $16$, cioè $4$.
- **Stimare** prima di calcolare: il $19{,}8\%$ di $4012$ è circa il $20\%$ di $4000$, cioè $800$. Tra le risposte proposte di solito una sola è vicina alla stima, e le altre differiscono per un fattore $10$ o per un errore tipico, come lo sconto calcolato sul valore sbagliato.

Il verso del risultato offre un ulteriore controllo, perché un prezzo scontato è minore del prezzo iniziale, un imponibile è minore del prezzo con IVA e con più operai il tempo diminuisce.
:::
