---
titolo: Potenze, proporzioni e percentuali
sommario: Proprietà delle potenze, ordini di grandezza, rapporti tra misure, modelli proporzionali e variazioni percentuali.
---

Le operazioni sui razionali permettono di moltiplicare fattori uguali e di confrontare due misure con un quoziente. Le proprietà delle potenze accorciano il primo calcolo. Rapporti e percentuali descrivono il secondo e aiutano a formulare problemi con una quantità incognita. Gli esponenti torneranno nel calcolo con i monomi, mentre le percentuali saranno usate per esprimere le frequenze relative in statistica.

## Base, esponente e segno

:::definizione{#base-e-segno titolo="La base della potenza"}
Per un intero positivo $n$, la potenza $a^n$ è il prodotto di $n$ fattori uguali ad $a$. Il numero $a$ è la **base** e $n$ è l'**esponente**. Nell'espressione $(-2)^n$ ogni fattore è $-2$. Se $n$ è pari, i fattori negativi si possono raggruppare a coppie e danno un prodotto positivo. Se $n$ è dispari, rimane un fattore negativo e il prodotto è negativo.

::grafico{xmin=0 xmax=4.6 ymin=-10 ymax=18 nomi="n,v" punti="1,-2,pieno;2,4,pieno;3,-8,pieno;4,16,pieno" segmenti="2,0,2,4;3,0,3,-8;4,0,4,16" titolo="I valori $v=(-2)^n$ hanno segno alterno per $n=1,2,3,4$"}

Nella scrittura $-2^4$ la base della potenza è invece $2$. Prima si calcola $2^4=16$ e poi si prende l'opposto, quindi $-2^4=-16$. Le due scritture $(-2)^3$ e $-2^3$ valgono entrambe $-8$. L'accordo vale in quel caso perché l'esponente è dispari e il segno della potenza con base negativa coincide con quello dell'opposto.
:::

::::teorema{#potenze titolo="Prodotto, quoziente e potenza di potenza"}
Siano $m$ e $n$ interi positivi. Il prodotto di due potenze di base $a$ è $a^m a^n=a^{m+n}$. La potenza di una potenza vale $(a^m)^n=a^{mn}$. Per $a\ne0$ e $m>n$ il quoziente vale $\dfrac{a^m}{a^n}=a^{m-n}$. Se due potenze hanno esponente uguale, si possono invece moltiplicare le basi, quindi $a^n b^n=(ab)^n$.

:::dimostrazione
Nel prodotto $a^m a^n$ si accostano due gruppi di fattori. Il primo ne contiene $m$, il secondo $n$, quindi il totale è $m+n$. Nella potenza $(a^m)^n$ si ripete il gruppo da $m$ fattori per $n$ volte, quindi il totale è $mn$. Nel quoziente $\dfrac{a^m}{a^n}$ si semplificano $n$ fattori comuni, ognuno diverso da zero perché $a\ne0$. Restano $m-n$ fattori al numeratore. Infine, nel prodotto $a^n b^n$ a ogni fattore $a$ si accoppia un fattore $b$, perciò si ottengono $n$ fattori $ab$.
:::
::::

:::esempio{titolo="Scegliere la proprietà dalla forma del prodotto"}
Nel prodotto $2^4\cdot5^4$ le basi sono diverse e gli esponenti coincidono. Si può dunque formare la base $2\cdot5$ e ottenere $10^4=10000$. Nel prodotto $2^4\cdot 2^5$ sono invece le basi a coincidere. Si contano quattro fattori $2$ nel primo gruppo e cinque nel secondo, quindi il prodotto vale $2^9=512$. In una somma, ad esempio $2^4+2^5$, si può raccogliere $2^4$, perciò si ottiene $2^4(1+2)=48$.
:::

## Esponenti nulli e negativi

::::teorema{#esponenti-non-positivi titolo="Il valore della potenza quando l'esponente scende a zero"}
Per mantenere la regola del quoziente anche con esponenti interi, per $a\ne0$ si pone $a^0=1$ e $a^{-n}=\dfrac{1}{a^n}$ per $n$ intero positivo. Da una potenza alla successiva con esponente minore di una unità si divide per la base. Questa lettura permette di anticipare il valore e il segno prima del calcolo.

:::dimostrazione
Poiché $a\ne0$, per ogni $n>0$ si ha $\dfrac{a^n}{a^n}=1$. Se nel quoziente si sottraggono gli esponenti, il valore corrispondente a $a^{n-n}$ è quindi $1$. Per ricavare $a^{-n}$ si impone $a^{-n}a^n=a^0$. Dividendo per $a^n$ si ottiene il suo reciproco.

Si può verificare la regola del prodotto con queste definizioni. Per gli interi positivi $r,s$ si ha $a^{-r}a^{-s}=\dfrac{1}{a^ra^s}=\dfrac1{a^{r+s}}$. Se gli esponenti hanno segno opposto, il prodotto $a^{-r}a^s$ diventa $\dfrac{a^s}{a^r}$. Dopo la semplificazione rimangono $s-r$ fattori al numeratore se $s>r$ oppure $r-s$ fattori al denominatore se $s<r$. Quando $s=r$ il quoziente vale $1$. In ciascun caso il risultato è $a^{s-r}$.
:::

::grafico{xmin=-2.6 xmax=3.6 ymin=-0.7 ymax=9.4 nomi="n,v" punti="-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;1,2,pieno;2,4,pieno;3,8,pieno" titolo="Un passo verso sinistra dimezza il valore $v=2^n$"}
::::

:::esempio{titolo="Reciproco di una potenza con base negativa"}
Per la base $-\dfrac23$ e l'esponente $-3$, prima si determina la potenza di esponente positivo. Il cubo ha segno negativo, quindi il suo reciproco resta negativo.

$$
\begin{aligned}
\left(-\frac23\right)^3&=-\frac8{27},\\[6pt]
\left(-\frac23\right)^{-3}&=-\frac{27}{8}.
\end{aligned}
$$

Moltiplicando i due risultati si ottiene $1$, come richiede la somma nulla degli esponenti. Il valore assoluto $\dfrac{27}{8}$ supera $1$, poiché si è preso il reciproco di una quantità di valore assoluto minore di $1$.
:::

:::attenzione
Lo zero elevato a un esponente positivo vale zero. La definizione dell'esponente negativo richiede invece un denominatore diverso da zero, perciò $0^{-2}$ è indefinito. Anche $0^0$ resta escluso in questo corso, perché il quoziente usato per motivare l'esponente nullo richiede una base diversa da zero.
:::

## Potenze di dieci e notazione scientifica

:::definizione{#notazione titolo="Coefficiente ed esponente della notazione scientifica"}
In notazione scientifica un numero positivo si scrive $c\cdot10^n$, con $1\le c<10$ e $n$ intero. Per un numero negativo si scrive il segno meno davanti alla notazione scientifica del valore assoluto. Lo zero si scrive $0$. L'intervallo imposto a $c$ rende unica la scrittura, perché $10^n\le c\cdot10^n<10^{n+1}$. L'esponente $n$ identifica così la fascia tra due potenze di dieci consecutive. Per esempio $0{,}0032$ è compreso fra $10^{-3}$ e $10^{-2}$, quindi si scrive $3{,}2\cdot10^{-3}$.
:::

:::esempio{titolo="Normalizzare il coefficiente dopo il prodotto"}
Da $(3\cdot10^4)(4\cdot10^2)$ si ottiene $12\cdot10^6$. Il coefficiente $12$ supera il limite superiore dell'intervallo richiesto. Poiché $12=1{,}2\cdot10$, la forma normalizzata è $1{,}2\cdot10^7$. Dividere il coefficiente per dieci e moltiplicare la potenza per dieci lascia invariato il prodotto.

::grafico{xmin=0 xmax=13.4 ymin=-1 ymax=3.1 assi=0 vettori="0,0,13,0" linee="1,-0.2 1,0.2;10,-0.2 10,0.2" punti="1.2,0,pieno;12,0,pieno" etichette="1,-0.55,1;10,-0.55,10;1.3,0.62,1.2;12,0.62,12;5.4,0.62,1 ≤ c < 10" titolo="$12\cdot10^6$ e $1{,}2\cdot10^7$ rappresentano lo stesso numero. Il secondo coefficiente rientra nell'intervallo della notazione scientifica"}

Per la somma si usa invece una potenza comune di dieci. Per esempio, $4{,}2\cdot10^5+8\cdot10^4=(4{,}2+0{,}8)\cdot10^5$. L'esponente comune resta $5$, perché i coefficienti contano entrambi unità da centomila. La somma vale $5\cdot10^5$.
:::

## Rapporti e proporzioni

::::teorema{#rapporti titolo="Equivalenza tra proporzione e uguaglianza dei prodotti"}
Il **rapporto** fra $a$ e $b$, con $b\ne0$, è $\dfrac ab$. La proporzione $a:b=c:d$ indica che $\dfrac ab=\dfrac cd$, con $b,d\ne0$. In queste condizioni la proporzione equivale all'uguaglianza $ad=bc$.

:::dimostrazione
Moltiplicando i due membri del confronto fra frazioni per $bd$ si ottiene $ad=bc$. Viceversa, dividendo questa uguaglianza per $bd$ si ritrova l'uguaglianza delle frazioni. Il fattore $bd$ è diverso da zero in entrambi i passaggi, quindi le trasformazioni sono reversibili.
:::

In $2:3=8:x$ l'incognita è un divisore, quindi si richiede $x\ne0$. L'uguaglianza dei prodotti dà $2x=24$, da cui $x=12$. La frazione $\dfrac8{12}$ si riduce a $\dfrac23$, quindi la soluzione appartiene al dominio e rende vera la proporzione.
::::

:::esempio{titolo="Una ripartizione in cinque quote uguali"}
Per dividere $60$ euro nel rapporto $2:3$ si rappresenta la prima somma con due quote uguali e la seconda con tre. Dato che tutte e cinque le quote hanno lo stesso valore, una quota vale $\dfrac{60}{5}=12$ euro. Le somme sono quindi $24$ e $36$ euro. Il rapporto fra le somme è $2:3$, mentre la prima somma rappresenta $\dfrac25$ del totale.

::struttura{riferimento=0 poligoni="0,0 2,0 2,0.8 0,0.8;2,0 5,0 5,0.8 2,0.8" linee="1,0 1,0.8;2,0 2,0.8;3,0 3,0.8;4,0 4,0.8" etichette="1,1.15,24 €;3.5,1.15,36 €" titolo="Il totale di 60 euro comprende cinque quote da 12 euro. Le prime due valgono 24 euro e le altre tre 36 euro"}
:::

:::osservazione
Nel confronto fra lunghezze si portano le misure alla stessa unità. Poiché $1\,\mathrm m=100\,\mathrm{cm}$, il rapporto fra un metro e $25\,\mathrm{cm}$ è $4$. Nel confronto fra grandezze di natura diversa le unità restano nel rapporto. Una distanza di $180\,\mathrm{km}$ percorsa in $3\,\mathrm h$ dà una velocità media di $60\,\mathrm{km/h}$, che indica quanti chilometri corrispondono in media a un'ora.
:::

## Proporzionalità diretta e quota fissa

:::definizione{#proporzionalita titolo="Il rapporto costante nella proporzionalità diretta"}
Le grandezze $x$ e $y$ sono direttamente proporzionali se $y=kx$ per una costante $k$. Per ogni $x\ne0$ il quoziente $\dfrac yx$ restituisce $k$. Se il modello comprende $x=0$, si ha $y=0$ e il grafico è una retta passante per l'origine. Con $x$ numero di quaderni e $y$ costo in euro, la costante si misura in euro per quaderno.
:::

:::esempio{titolo="Il costo per pezzo e il costo totale"}
Nella tariffa $C=3x$, ogni pezzo costa $3$ euro. Nella tariffa $C=3x+5$ lo stesso costo unitario si aggiunge a una quota fissa di $5$ euro. A quattro pezzi le tariffe danno rispettivamente $12$ e $17$ euro. A un solo pezzo la seconda tariffa ammonta a $8$ euro. Perciò il suo costo medio passa da $8$ a $\dfrac{17}{4}$ euro per pezzo.

::grafico{f="3*x;3*x+5" xmin=-0.55 xmax=5.5 ymin=-1 ymax=22 nomi="x,C" legenda="C=3x;C=3x+5" punti="0,0,pieno;0,5,pieno;4,12,pieno;4,17,pieno" segmenti="4,0,4,17" titolo="Le due tariffe hanno lo stesso aumento per pezzo. La seconda parte già da 5 euro"}

Una tabella distingue un rapporto costante da un incremento costante. Se $x$ cresce di tre unità, entrambe le tariffe aumentano di $9$ euro. Dividendo i costi per il rispettivo numero di pezzi si vede quale tariffa mantiene la proporzionalità.

| Pezzi $x$ | Costo $3x$ | Costo $3x+5$ | Media per pezzo nella seconda tariffa |
| --- | --- | --- | --- |
| $1$ | $3$ | $8$ | $8$ |
| $4$ | $12$ | $17$ | $\dfrac{17}{4}$ |
:::

## Proporzionalità inversa e quantità conservata

:::definizione{#proporzionalita-inversa titolo="Il prodotto costante nella proporzionalità inversa"}
Per $x>0$ e $y>0$, la proporzionalità inversa è descritta da $xy=k$, con $k>0$ fisso. Da $y=\dfrac{k}{x}$ segue che moltiplicando $x$ per $\lambda>0$ si divide $y$ per lo stesso fattore. Nel grafico del modello positivo, all'aumento di $x$ corrisponde una diminuzione di $y$. Per riconoscere il modello in una tabella si verificano i prodotti delle coppie.
:::

:::esempio{titolo="Macchine identiche impegnate nello stesso lavoro"}
Un lavoro richiede $24$ ore di una sola macchina. Se $m$ macchine identiche lavorano insieme allo stesso ritmo e possono dividersi il lavoro, forniscono $m\cdot t$ ore-macchina in $t$ ore. Pertanto $t=\dfrac{24}{m}$. Con $3$ macchine servono $8$ ore, mentre con $6$ macchine ne servono $4$. I due prodotti $3\cdot8$ e $6\cdot4$ valgono entrambi $24$.

::grafico{f="24/x" xmin=0.9 xmax=8.4 ymin=-0.6 ymax=16.2 nomi="m,t" legenda="t=\dfrac{24}{m}" punti="2,12,pieno;3,8,pieno;6,4,pieno" segmenti="3,0,3,8;6,0,6,4" titolo="I punti segnati rappresentano gli interi $m=2,3,6$ e le corrispondenti durate in ore"}

Il prodotto costante descrive il lavoro residuo anche se il numero delle macchine cambia a metà. Se tre macchine hanno lavorato per due ore, hanno fornito $6$ ore-macchina. Restano $18$ ore-macchina e, con sei macchine, occorrono altre $3$ ore.
:::

:::osservazione
Se il lavoro richiede anche un'ora di preparazione di durata fissa, la durata totale è $t=1+\dfrac{24}{m}$. Con due macchine il totale è di $13$ ore e con quattro è di $7$ ore. I prodotti $2\cdot13=26$ e $4\cdot7=28$ sono diversi. La durata della lavorazione segue ancora la proporzionalità inversa, mentre il tempo aggiuntivo di preparazione compare per qualsiasi numero di macchine.
:::

## Percentuali, parte e base di confronto

:::definizione{#percentuali titolo="Il totale rispetto a cui si misura la percentuale"}
Il $p\%$ di una quantità $Q$ è $Q\cdot\dfrac p{100}$. Se la parte $P$ è nota e il totale $Q$ è positivo, la percentuale si trova da $p=100\dfrac PQ$. In un gruppo di $80$ studenti, i $16$ assenti rappresentano il $20\%$ perché $\dfrac{16}{80}=\dfrac15$. I presenti sono $64$, quindi rappresentano l'$80\%$. La scelta di $Q$ come denominatore determina entrambe le percentuali.

::struttura{riferimento=0 poligoni="0,0 8,0 8,0.9 0,0.9;8,0 10,0 10,0.9 8,0.9" linee="8,0 8,0.9" etichette="4,1.25,64 presenti;9,1.25,16 assenti;4,0.4,80%;9,0.4,20%" titolo="Le 80 unità del totale si dividono in due gruppi. I due tratti hanno lunghezze proporzionali alle rispettive percentuali"}

Per riunire due gruppi senza membri in comune, si sommano prima le parti e poi i totali. Con $6$ partecipanti su $20$ e $18$ su $30$, la percentuale complessiva è $100\cdot\dfrac{6+18}{20+30}=48$. La media aritmetica di $30\%$ e $60\%$ sarebbe $45\%$ e attribuirebbe lo stesso peso a gruppi di dimensioni differenti.

Le percentuali dei singoli gruppi forniscono un controllo. In ciascun gruppo partecipa almeno il $30\%$ delle persone, quindi questa soglia vale anche sommando i due gruppi. Allo stesso modo, ciascun gruppo ha al massimo il $60\%$ di partecipanti, perciò il tasso complessivo resta compreso fra i due tassi. Il risultato è più vicino al $60\%$ perché a quel tasso corrisponde il gruppo più numeroso.
:::

:::esempio{titolo="Punti percentuali e variazione relativa"}
Una quota sale dal $40\%$ al $50\%$. La differenza è di $10$ **punti percentuali**. La variazione relativa ha per base il dato di partenza, quindi vale $100\cdot\dfrac{50-40}{40}=25$. In altre parole la quota aumenta del $25\%$. Il controllo consiste nel moltiplicare $40\%$ per $1{,}25$, ottenendo $50\%$.
:::

## Variazioni successive e ricostruzione del valore iniziale

::::teorema{#variazioni-successive titolo="Il prodotto dei fattori di variazione"}
Per una quantità positiva $Q$, un aumento del $p\%$ dà $Q(1+\dfrac p{100})$. Una riduzione del $p\%$, con $0\le p\le100$, dà $Q(1-\dfrac p{100})$. In due passaggi successivi ciascun fattore moltiplica il valore aggiornato, quindi il fattore complessivo è il prodotto dei due fattori.

:::dimostrazione
L'aumento aggiunge a $Q$ la quantità $Q\dfrac p{100}$. Raccogliendo $Q$ si ottiene $Q(1+\dfrac p{100})$. Nella riduzione si sottrae la stessa quantità. Indicando con $a$ e $b$ i due fattori, dopo il primo passaggio il valore è $Qa$. Il secondo lo trasforma in $(Qa)b=Q(ab)$.
:::
::::

:::esempio{titolo="Aumento e riduzione di uguale percentuale"}
Partendo da $100$, l'aumento del $10\%$ dà $110$. La riduzione successiva si calcola su $110$ e vale $11$, quindi si arriva a $99$. Invertendo l'ordine si passa prima a $90$ e poi a $99$, perché il prodotto $1{,}1\cdot0{,}9$ è lo stesso. I valori intermedi distinguono i due percorsi.

::grafico{xmin=-0.45 xmax=2.65 ymin=85 ymax=115 nomi="passo,valore" linee="0,100 1,110 2,99;0,100 1,90 2,99" punti="0,100,pieno;1,110,pieno;1,90,pieno;2,99,pieno" etichette="1.02,112.5,110;1.02,87.6,90;2.28,97.6,99" titolo="A partire da 100, i passaggi del 10% conducono a 99 attraverso due valori intermedi diversi"}

Per recuperare il valore iniziale si divide per il fattore complessivo. Se uno sconto del $20\%$ porta il prezzo a $64$ euro, il fattore è $\dfrac45$ e il prezzo iniziale è $64\cdot\dfrac54=80$ euro. Per annullare quello sconto serve invece un aumento del $25\%$ sul nuovo prezzo, perché si aggiungono $16$ euro a una base di $64$.
:::

:::attenzione
Una riduzione del $100\%$ ha fattore zero. Ogni valore iniziale diventa zero, quindi il risultato finale da solo è insufficiente per ricostruire il dato di partenza.
:::

## Scale, conversioni e misure di area

:::definizione{#scale titolo="Il rapporto tra misura sul disegno e misura reale"}
Una scala $1:k$, con $k>0$, assegna a un'unità sul disegno $k$ unità della stessa specie nella realtà. A scala $1:50000$, un centimetro sulla carta corrisponde a $50000\,\mathrm{cm}$ reali, cioè $500\,\mathrm m$. Sei centimetri equivalgono quindi a $3\,\mathrm{km}$. Nel verso opposto, per rappresentare $2\,\mathrm{km}$ si converte la distanza in $200000\,\mathrm{cm}$ e la si divide per $50000$, ottenendo $4\,\mathrm{cm}$.

::grafico{f="0.5*x" xmin=-0.35 xmax=7.2 ymin=-0.35 ymax=4.1 nomi="c,d" legenda="d=0{,}5c" punti="4,2,pieno;6,3,pieno" segmenti="4,0,4,2;0,2,4,2;6,0,6,3;0,3,6,3" titolo="In scala $1:50000$, a ogni centimetro $c$ sulla carta corrisponde mezzo chilometro reale $d$"}
:::

:::esempio{titolo="Dal fattore di lunghezza al fattore di area"}
Su una pianta in scala $1:200$, un rettangolo misura $3\,\mathrm{cm}$ per $5\,\mathrm{cm}$. I lati reali sono $600\,\mathrm{cm}$ e $1000\,\mathrm{cm}$, ossia $6\,\mathrm m$ e $10\,\mathrm m$. L'area reale è $60\,\mathrm{m}^2$. In centimetri quadrati, il fattore d'area è $200^2$ perché entrambi i lati si moltiplicano per $200$. Infatti $15\,\mathrm{cm}^2\cdot 200^2=600000\,\mathrm{cm}^2$. Poiché ogni metro quadrato contiene $10000$ centimetri quadrati, si ritrova $60\,\mathrm{m}^2$.
:::
