---
titolo: Potenze, proporzioni e percentuali
sommario: Proprietà delle potenze, ordini di grandezza, rapporti tra misure, modelli proporzionali e variazioni percentuali.
---

In questo capitolo si calcola con le potenze, si scrivono con le potenze di dieci numeri come $0{,}0032$, si risolvono proporzioni come $2:3=8:x$ e si calcolano sconti e aumenti. Gli esponenti torneranno nel calcolo con le lettere. Le percentuali serviranno in statistica per le frequenze relative, cioè per dire quale parte di un gruppo ha una certa caratteristica.

## Base, esponente e segno

:::definizione{#base-e-segno titolo="La base della potenza"}
In una moltiplicazione i numeri che si moltiplicano si chiamano fattori e il risultato si chiama prodotto. Una **potenza** è un prodotto di fattori tutti uguali. Il prodotto $2\cdot2\cdot2\cdot2$ ha quattro fattori uguali a $2$ e si scrive $2^4$, che si legge «due alla quarta» e vale $16$. Il numero che si ripete è la **base**. Il numero scritto in alto a destra è l'**esponente** e indica quanti sono i fattori.

Con le lettere, se $n$ è un intero positivo (uno dei numeri $1,2,3,\dots$), la potenza $a^n$ è il prodotto di $n$ fattori uguali ad $a$. In particolare $a^1=a$.

Una base negativa si scrive fra parentesi tonde. Nell'espressione $(-2)^n$ ogni fattore è $-2$. Il prodotto di due numeri negativi è positivo, quindi i primi valori sono

$$
\begin{aligned}
(-2)^1&=-2,\\[6pt]
(-2)^2&=(-2)\cdot(-2)=4,\\[6pt]
(-2)^3&=4\cdot(-2)=-8,\\[6pt]
(-2)^4&=(-8)\cdot(-2)=16.
\end{aligned}
$$

Se $n$ è pari (cioè $2,4,6,\dots$), i fattori negativi si raggruppano a coppie e ogni coppia dà un prodotto positivo, quindi la potenza è positiva. Se $n$ è dispari (cioè $1,3,5,\dots$), dopo aver formato le coppie rimane un fattore negativo e la potenza è negativa. Nella figura i punti $v=(-2)^n$ stanno alternativamente sotto e sopra l'asse orizzontale.

::grafico{xmin=0 xmax=4.6 ymin=-10 ymax=18 nomi="n,v" punti="1,-2,pieno;2,4,pieno;3,-8,pieno;4,16,pieno" segmenti="2,0,2,4;3,0,3,-8;4,0,4,16" titolo="I valori $v=(-2)^n$ hanno segno alterno per $n=1,2,3,4$"}

Nella scrittura $-2^4$, senza parentesi, l'esponente è attaccato al solo numero $2$, quindi la base della potenza è $2$. Prima si calcola $2^4=16$ e poi si prende l'opposto, cioè lo stesso numero con il segno cambiato. Si ottiene $-2^4=-16$, mentre $(-2)^4=16$.

Le due scritture $(-2)^3$ e $-2^3$ valgono entrambe $-8$. I due valori coincidono perché l'esponente è dispari, e in quel caso la potenza con base negativa ha lo stesso segno dell'opposto di $2^3$.
:::

::::teorema{#potenze titolo="Prodotto, quoziente e potenza di potenza"}
Le quattro proprietà che seguono servono a calcolare con le potenze senza scrivere tutti i fattori. Nelle formule $m$ e $n$ sono interi positivi. Il simbolo $\ne$ si legge «diverso da».

- **Prodotto di potenze con la stessa base.** Si sommano gli esponenti. Per esempio $2^3\cdot2^2=(2\cdot2\cdot2)\cdot(2\cdot2)=2^5$. In formula, $a^m a^n=a^{m+n}$.
- **Potenza di potenza.** Si moltiplicano gli esponenti. Per esempio $(2^3)^2=2^3\cdot2^3=2^6$. In formula, $(a^m)^n=a^{mn}$.
- **Quoziente di potenze con la stessa base.** Il quoziente è il risultato di una divisione e si scrive con i due punti oppure con la linea di frazione. Si sottraggono gli esponenti. Per esempio $2^5:2^2=\dfrac{2\cdot2\cdot2\cdot2\cdot2}{2\cdot2}=2^3$. In formula, per $a\ne0$ e $m>n$ si ha $\dfrac{a^m}{a^n}=a^{m-n}$. Si chiede $a\ne0$ perché la divisione per zero non è definita.
- **Prodotto di potenze con lo stesso esponente.** Si moltiplicano le basi. Per esempio $2^3\cdot5^3=(2\cdot5)\cdot(2\cdot5)\cdot(2\cdot5)=10^3$. In formula, $a^n b^n=(ab)^n$.

Nella scrittura $2^{3^2}$, senza parentesi, si calcola prima l'esponente $3^2=9$, quindi $2^{3^2}=2^9=512$. La potenza di potenza $(2^3)^2$ vale invece $2^6=64$.

:::dimostrazione
Nel prodotto $a^m a^n$ si scrivono di seguito due gruppi di fattori uguali ad $a$. Il primo gruppo ne contiene $m$ e il secondo $n$, quindi i fattori sono in tutto $m+n$.

Nella potenza $(a^m)^n$ il gruppo di $m$ fattori si ripete $n$ volte, quindi i fattori sono in tutto $mn$.

Nel quoziente $\dfrac{a^m}{a^n}$ il numeratore ha $m$ fattori e il denominatore ne ha $n$. Semplificare significa dividere numeratore e denominatore per lo stesso numero diverso da zero. Poiché $a\ne0$, si semplificano gli $n$ fattori del denominatore con $n$ fattori del numeratore. Al numeratore restano $m-n$ fattori e al denominatore resta $1$.

Nel prodotto $a^n b^n$ ci sono $n$ fattori $a$ e $n$ fattori $b$. In una moltiplicazione l'ordine dei fattori si può cambiare, perciò a ogni fattore $a$ si accoppia un fattore $b$ e si ottengono $n$ fattori uguali ad $ab$.
:::
::::

:::esempio{titolo="Scegliere la proprietà dalla forma del prodotto"}
Nel prodotto $2^4\cdot5^4$ le basi sono diverse e gli esponenti sono uguali. Si moltiplicano quindi le basi e si ottiene $(2\cdot5)^4=10^4=10000$.

Nel prodotto $2^4\cdot 2^5$ sono uguali le basi. Il primo gruppo ha quattro fattori $2$ e il secondo ne ha cinque, quindi il prodotto vale $2^{4+5}=2^9=512$.

Le proprietà precedenti riguardano prodotti e quozienti. Nella somma $2^4+2^5$ si usa invece il raccoglimento. Poiché $2^5=2^4\cdot2$, il fattore $2^4$ compare in entrambi i termini della somma e si raccoglie, cioè si scrive una volta sola davanti alla somma di ciò che resta.

$$
\begin{aligned}
2^4+2^5&=2^4\cdot1+2^4\cdot2\\[6pt]
&=2^4\cdot(1+2)\\[6pt]
&=16\cdot3=48.
\end{aligned}
$$
:::

## Esponenti nulli e negativi

::::teorema{#esponenti-non-positivi titolo="Il valore della potenza quando l'esponente scende a zero"}
Le potenze di $2$ con esponente $3$, $2$ e $1$ valgono $8$, $4$ e $2$. Ogni volta che l'esponente diminuisce di uno, il valore si divide per la base $2$. Continuando a dividere per $2$ si assegna un valore anche agli esponenti $0$, $-1$ e $-2$.

$$
2^1=2,\qquad 2^0=1,\qquad 2^{-1}=\frac12,\qquad 2^{-2}=\frac14.
$$

Con le lettere, per una base $a\ne0$ e per $n$ intero positivo si pone

$$
a^0=1,\qquad a^{-n}=\frac{1}{a^n}.
$$

Il **reciproco** di un numero diverso da zero è $1$ diviso per quel numero. La potenza $a^{-n}$ è quindi il reciproco di $a^n$. Per esempio $3^{-2}=\dfrac{1}{3^2}=\dfrac19$.

Con queste definizioni la proprietà del quoziente $\dfrac{a^m}{a^n}=a^{m-n}$ vale per tutti gli interi positivi $m$ e $n$, anche quando $m$ è minore o uguale a $n$. Per esempio $\dfrac{3^2}{3^5}=3^{2-5}=3^{-3}=\dfrac1{27}$.

Il reciproco di una frazione si ottiene scambiando numeratore e denominatore. Per $a\ne0$ e $b\ne0$ si ha quindi $\left(\dfrac ab\right)^{-n}=\left(\dfrac ba\right)^n$. Per esempio $\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^2=\dfrac94$.

Poiché ogni passo verso un esponente minore è una divisione per la base, il segno e la grandezza del risultato si ricavano prima del calcolo. Per esempio $2^{-3}$ è positivo e minore di $1$, perché si ottiene da $1$ dividendo tre volte per $2$.

:::dimostrazione
*Esponente zero.* Sia $n$ un intero positivo. Poiché $a\ne0$, anche $a^n$ è diverso da zero. Un numero diverso da zero diviso per se stesso dà $1$, quindi $\dfrac{a^n}{a^n}=1$. Se allo stesso quoziente si applica la sottrazione degli esponenti, si ottiene $a^{n-n}=a^0$. Le due scritture indicano lo stesso quoziente, perciò si pone $a^0=1$.

*Esponente negativo.* Si chiede che la proprietà del prodotto valga anche per l'esponente $-n$, cioè che $a^{-n}\cdot a^n=a^{-n+n}=a^0=1$. I due membri di un'uguaglianza sono le espressioni a sinistra e a destra del segno $=$. Dividendo i due membri per $a^n$, che è diverso da zero, si ottiene $a^{-n}=\dfrac1{a^n}$.

*Verifica della proprietà del prodotto.* Siano $r$ e $s$ interi positivi. Se entrambi gli esponenti sono negativi, si ha $a^{-r}a^{-s}=\dfrac{1}{a^ra^s}=\dfrac1{a^{r+s}}=a^{-r-s}$. Se gli esponenti hanno segno opposto, il prodotto $a^{-r}a^s$ è il quoziente $\dfrac{a^s}{a^r}$. Dopo la semplificazione dei fattori comuni si hanno tre casi.

- Se $s>r$, rimangono $s-r$ fattori al numeratore.
- Se $s<r$, rimangono $r-s$ fattori al denominatore.
- Se $s=r$, il quoziente vale $1$.

In ciascun caso il risultato è $a^{s-r}$, e $s-r$ è la somma degli esponenti $-r$ e $s$.
:::

Nella figura ogni punto $v=2^n$, per $n$ da $-2$ a $3$, è alto il doppio del punto alla sua sinistra.

::grafico{xmin=-2.6 xmax=3.6 ymin=-0.7 ymax=9.4 nomi="n,v" punti="-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;1,2,pieno;2,4,pieno;3,8,pieno" titolo="Un passo verso sinistra dimezza il valore $v=2^n$"}
::::

:::esempio{titolo="Reciproco di una potenza con base negativa"}
Si calcola $\left(-\dfrac23\right)^{-3}$. Prima si calcola la potenza con l'esponente positivo $3$, poi se ne prende il reciproco.

$$
\begin{aligned}
\left(-\frac23\right)^3&=\left(-\frac23\right)\cdot\left(-\frac23\right)\cdot\left(-\frac23\right)=-\frac8{27},\\[6pt]
\left(-\frac23\right)^{-3}&=-\frac{27}{8}.
\end{aligned}
$$

Il cubo, cioè la potenza con esponente $3$, è negativo perché l'esponente è dispari. Il reciproco ha lo stesso segno, quindi resta negativo.

Moltiplicando i due risultati si ottiene $\left(-\dfrac8{27}\right)\cdot\left(-\dfrac{27}8\right)=1$. La somma degli esponenti è infatti $3+(-3)=0$ e una potenza con esponente zero vale $1$.

Il valore assoluto di un numero è il numero senza il segno. Il valore assoluto del risultato, $\dfrac{27}{8}$, è maggiore di $1$ perché è il reciproco di $\dfrac8{27}$, che è minore di $1$.
:::

:::attenzione
Lo zero elevato a un esponente positivo vale zero, per esempio $0^2=0\cdot0=0$. Con un esponente negativo la definizione darebbe $0^{-2}=\dfrac{1}{0^2}=\dfrac10$, e la divisione per zero non è definita, quindi $0^{-2}$ non ha valore. Anche $0^0$ resta senza valore in questo corso, perché il quoziente $\dfrac{a^n}{a^n}$ usato per giustificare $a^0=1$ richiede una base diversa da zero.
:::

## Potenze di dieci e notazione scientifica

:::definizione{#notazione titolo="Coefficiente ed esponente della notazione scientifica"}
Una potenza di dieci con esponente positivo si scrive con la cifra $1$ seguita da tanti zeri quanti ne indica l'esponente, per esempio $10^3=1000$. Con esponente negativo è il reciproco, per esempio $10^{-3}=\dfrac1{1000}=0{,}001$.

La **notazione scientifica** è la scrittura di un numero positivo come prodotto $c\cdot10^n$. Il numero $c$ si chiama **coefficiente** ed è maggiore o uguale a $1$ e minore di $10$, in simboli $1\le c<10$. L'esponente $n$ è un intero positivo, negativo o nullo. Per esempio

$$
4500=4{,}5\cdot1000=4{,}5\cdot10^3,\qquad
0{,}0032=3{,}2\cdot0{,}001=3{,}2\cdot10^{-3}.
$$

L'esponente conta di quanti posti si è spostata la virgola per ottenere il coefficiente. In $4500$ la virgola si sposta di tre posti verso sinistra e l'esponente è $3$. In $0{,}0032$ si sposta di tre posti verso destra e l'esponente è $-3$.

Per un numero negativo si scrive il segno meno davanti alla notazione scientifica del valore assoluto. Lo zero si scrive $0$.

La condizione $1\le c<10$ rende unica la scrittura. Moltiplicando per $10^n$ i tre termini della condizione si ottiene infatti $10^n\le c\cdot10^n<10^{n+1}$, quindi il numero è compreso fra due potenze di dieci consecutive e l'esponente $n$ è quello della minore delle due. Per esempio $0{,}0032$ è compreso fra $10^{-3}=0{,}001$ e $10^{-2}=0{,}01$, quindi il suo esponente è $-3$ e la scrittura è $3{,}2\cdot10^{-3}$.
:::

:::esempio{titolo="Normalizzare il coefficiente dopo il prodotto"}
Nel prodotto $(3\cdot10^4)(4\cdot10^2)$ si moltiplicano fra loro i coefficienti e fra loro le potenze di dieci.

$$
(3\cdot10^4)(4\cdot10^2)=(3\cdot4)\cdot(10^4\cdot10^2)=12\cdot10^{4+2}=12\cdot10^6.
$$

Il coefficiente $12$ è maggiore di $10$, quindi $12\cdot10^6$ non è ancora in notazione scientifica. **Normalizzare** significa riportare il coefficiente fra $1$ e $10$ senza cambiare il numero. Poiché $12=1{,}2\cdot10$, si ha

$$
12\cdot10^6=1{,}2\cdot10\cdot10^6=1{,}2\cdot10^7.
$$

Il coefficiente è stato diviso per dieci e la potenza è stata moltiplicata per dieci, quindi il prodotto è rimasto lo stesso. Nella figura il punto $12$ è fuori dal tratto che va da $1$ a $10$, mentre il punto $1{,}2$ è dentro.

::grafico{xmin=0 xmax=13.4 ymin=-1 ymax=3.1 assi=0 vettori="0,0,13,0" linee="1,-0.2 1,0.2;10,-0.2 10,0.2" punti="1.2,0,pieno;12,0,pieno" etichette="1,-0.55,1;10,-0.55,10;1.3,0.62,1.2;12,0.62,12;5.4,0.62,1 ≤ c < 10" titolo="$12\cdot10^6$ e $1{,}2\cdot10^7$ rappresentano lo stesso numero. Il secondo coefficiente rientra nell'intervallo della notazione scientifica"}

Lo stesso procedimento vale con un esponente negativo. Per esempio $38\cdot10^{-7}=3{,}8\cdot10\cdot10^{-7}=3{,}8\cdot10^{-6}$.

Per una somma si scrivono prima i due numeri con la stessa potenza di dieci. In $4{,}2\cdot10^5+8\cdot10^4$ si riscrive il secondo numero. Poiché $8=0{,}8\cdot10$, si ha $8\cdot10^4=0{,}8\cdot10\cdot10^4=0{,}8\cdot10^5$. Ora entrambi i coefficienti contano centinaia di migliaia e si sommano.

$$
4{,}2\cdot10^5+0{,}8\cdot10^5=(4{,}2+0{,}8)\cdot10^5=5\cdot10^5.
$$

L'esponente comune resta $5$.
:::

## Rapporti e proporzioni

::::teorema{#rapporti titolo="Equivalenza tra proporzione e uguaglianza dei prodotti"}
Il **rapporto** fra due numeri $a$ e $b$, con $b\ne0$, è il quoziente $\dfrac ab$. Si scrive anche $a:b$ e si legge «$a$ sta a $b$». Un rapporto resta uguale se i suoi due termini si moltiplicano o si dividono per uno stesso numero diverso da zero. Per esempio $3:5$ e $6:10$ sono lo stesso rapporto.

Una **proporzione** è l'uguaglianza fra due rapporti. La scrittura $a:b=c:d$ indica che $\dfrac ab=\dfrac cd$, con $b\ne0$ e $d\ne0$. Per esempio $2:3=8:12$, perché $\dfrac8{12}$ si riduce a $\dfrac23$. Il primo e l'ultimo termine, $a$ e $d$, si chiamano **estremi**. I due termini centrali, $b$ e $c$, si chiamano **medi**.

Con $b\ne0$ e $d\ne0$, la proporzione $a:b=c:d$ equivale all'uguaglianza $ad=bc$. A parole, il prodotto degli estremi è uguale al prodotto dei medi. In $2:3=8:12$ i due prodotti sono $2\cdot12=24$ e $3\cdot8=24$.

:::dimostrazione
Un'uguaglianza resta vera se si moltiplicano o si dividono entrambi i membri per uno stesso numero diverso da zero.

Si parte da $\dfrac ab=\dfrac cd$ e si moltiplicano i due membri per $bd$. A sinistra si semplifica $b$ e resta $ad$. A destra si semplifica $d$ e resta $bc$. Si ottiene quindi $ad=bc$.

Viceversa, si parte da $ad=bc$ e si dividono i due membri per $bd$. A sinistra si semplifica $d$ e resta $\dfrac ab$. A destra si semplifica $b$ e resta $\dfrac cd$.

Il numero $bd$ è diverso da zero perché $b\ne0$ e $d\ne0$. Da ciascuna delle due uguaglianze si ricava dunque l'altra.
:::

In $2:3=8:x$ la lettera $x$ è l'incognita, cioè il numero da trovare. L'incognita è un divisore, quindi si richiede $x\ne0$. I valori ammessi per l'incognita formano il dominio. L'uguaglianza dei prodotti dà $2\cdot x=3\cdot8$, cioè $2x=24$. Dividendo i due membri per $2$ si ottiene $x=12$. Il valore $12$ è diverso da zero, quindi appartiene al dominio. Sostituendolo si ha $\dfrac8{12}=\dfrac23$, perciò la proporzione è vera.

Nella proporzione $0:5=3:x$ l'uguaglianza dei prodotti dà $0\cdot x=5\cdot3=15$. Il prodotto $0\cdot x$ vale $0$ per ogni $x$, quindi la proporzione non ha soluzioni.

Due rapporti con un termine in comune si moltiplicano per ottenere un terzo rapporto. Se $A:B=2:3$ e $B:C=3:7$, allora $\dfrac AC=\dfrac AB\cdot\dfrac BC=\dfrac23\cdot\dfrac37=\dfrac27$, cioè $A:C=2:7$.
::::

:::esempio{titolo="Una ripartizione in cinque quote uguali"}
Dividere $60$ euro nel rapporto $2:3$ significa trovare due somme che hanno per totale $60$ euro e per rapporto $\dfrac23$. La prima somma si rappresenta con due quote uguali e la seconda con tre quote uguali alle prime. Le quote sono in tutto $2+3=5$ e hanno lo stesso valore, quindi una quota vale $\dfrac{60}{5}=12$ euro. Le due somme sono

$$
2\cdot12=24\ \text{euro},\qquad 3\cdot12=36\ \text{euro}.
$$

Il rapporto fra le somme è $\dfrac{24}{36}=\dfrac23$. Rispetto al totale, la prima somma è $\dfrac{24}{60}=\dfrac25$, cioè due quote su cinque. Nella figura la barra è divisa in cinque caselle uguali, due per la somma di $24$ euro (simbolo €) e tre per quella di $36$ euro.

::struttura{riferimento=0 poligoni="0,0 2,0 2,0.8 0,0.8;2,0 5,0 5,0.8 2,0.8" linee="1,0 1,0.8;2,0 2,0.8;3,0 3,0.8;4,0 4,0.8" etichette="1,1.15,24 €;3.5,1.15,36 €" titolo="Il totale di 60 euro comprende cinque quote da 12 euro. Le prime due valgono 24 euro e le altre tre 36 euro"}
:::

:::osservazione
Una **grandezza** è una proprietà che si misura, come una lunghezza, un tempo o un costo. L'**unità di misura** è la quantità scelta come riferimento, per esempio il metro (simbolo $\mathrm m$) o il centimetro (simbolo $\mathrm{cm}$).

Per il rapporto fra due lunghezze si scrivono le due misure nella stessa unità. Poiché $1\,\mathrm m=100\,\mathrm{cm}$, il rapporto fra un metro e $25\,\mathrm{cm}$ è $\dfrac{100}{25}=4$. Il risultato è un numero senza unità.

Nel rapporto fra grandezze di tipo diverso le unità restano nel risultato. Una distanza di $180\,\mathrm{km}$ (chilometri) percorsa in $3\,\mathrm h$ (ore) dà la velocità media $\dfrac{180}{3}=60$ chilometri all'ora, che si scrive $60\,\mathrm{km/h}$. Il valore indica i chilometri percorsi in media in un'ora.
:::

## Proporzionalità diretta e quota fissa

:::definizione{#proporzionalita titolo="Il rapporto costante nella proporzionalità diretta"}
Un quaderno costa $3$ euro. Due quaderni costano $6$ euro e quattro quaderni costano $12$ euro. In ogni coppia il rapporto fra il costo e il numero di quaderni è lo stesso, perché $\dfrac31=\dfrac62=\dfrac{12}4=3$.

Due grandezze $x$ e $y$ sono **direttamente proporzionali** se $y=kx$, dove $k$ è una costante, cioè un numero che resta lo stesso per tutte le coppie di valori. Il numero $k$ si chiama costante di proporzionalità. Per ogni $x\ne0$ il quoziente $\dfrac yx$ vale $k$. Se $x$ raddoppia, anche $y$ raddoppia.

Nell'esempio, $x$ è il numero di quaderni, $y$ è il costo in euro e $y=3x$. La costante $k=3$ si misura in euro per quaderno ed è il **prezzo unitario**, cioè il prezzo di un solo quaderno.

Se fra i valori di $x$ c'è anche $x=0$, si ha $y=k\cdot0=0$. Il grafico di $y=kx$ è perciò una retta che passa per l'origine, cioè per il punto in cui si incontrano i due assi.
:::

:::esempio{titolo="Il costo per pezzo e il costo totale"}
Una tariffa è la regola con cui si calcola un costo. Si confrontano due tariffe, dove $x$ è il numero di pezzi e $C$ è il costo in euro.

- Nella tariffa $C=3x$ ogni pezzo costa $3$ euro.
- Nella tariffa $C=3x+5$ ogni pezzo costa ancora $3$ euro e in più si paga una **quota fissa** di $5$ euro, uguale per qualsiasi numero di pezzi.

Per quattro pezzi la prima tariffa dà $3\cdot4=12$ euro e la seconda $3\cdot4+5=17$ euro.

Il costo medio per pezzo è il costo totale diviso per il numero di pezzi. Nella prima tariffa vale sempre $3$ euro. Nella seconda vale $\dfrac{3+5}{1}=8$ euro con un pezzo e $\dfrac{17}{4}=4{,}25$ euro con quattro pezzi.

Nella figura le due tariffe sono due rette parallele. La prima parte dall'origine e la seconda dal punto di altezza $5$.

::grafico{f="3*x;3*x+5" xmin=-0.55 xmax=5.5 ymin=-1 ymax=22 nomi="x,C" legenda="C=3x;C=3x+5" punti="0,0,pieno;0,5,pieno;4,12,pieno;4,17,pieno" segmenti="4,0,4,17" titolo="Le due tariffe hanno lo stesso aumento per pezzo. La seconda parte già da 5 euro"}

Una tabella distingue un rapporto costante da un aumento costante. Quando $x$ passa da $1$ a $4$, cioè cresce di tre unità, entrambe le tariffe aumentano di $9$ euro. Dividendo ogni costo per il suo numero di pezzi, solo la prima tariffa dà sempre lo stesso valore, quindi solo nella prima il costo è direttamente proporzionale al numero di pezzi.

| Pezzi $x$ | Costo $3x$ | Costo $3x+5$ | Media per pezzo nella seconda tariffa |
| --- | --- | --- | --- |
| $1$ | $3$ | $8$ | $8$ |
| $4$ | $12$ | $17$ | $\dfrac{17}{4}$ |
:::

## Proporzionalità inversa e quantità conservata

:::definizione{#proporzionalita-inversa titolo="Il prodotto costante nella proporzionalità inversa"}
Un rettangolo di area $12$ ha base $2$ e altezza $6$, oppure base $3$ e altezza $4$, oppure base $4$ e altezza $3$. In ogni coppia il prodotto è lo stesso, perché $2\cdot6=3\cdot4=4\cdot3=12$.

Due grandezze positive $x$ e $y$ sono **inversamente proporzionali** se il loro prodotto è costante, cioè se $xy=k$ con $k>0$ fisso. Dividendo i due membri per $x$ si ottiene $y=\dfrac{k}{x}$.

Se $x$ raddoppia, $y$ si dimezza. Con un fattore qualsiasi, indicato con la lettera greca $\lambda$ (si legge «lambda») e maggiore di zero, moltiplicando $x$ per $\lambda$ si divide $y$ per $\lambda$. Infatti il prodotto $(\lambda x)\cdot\dfrac{y}{\lambda}$ è ancora $xy=k$.

Nel grafico di $y=\dfrac kx$, con $x$ e $y$ positivi, quando $x$ aumenta $y$ diminuisce. In una tabella la proporzionalità inversa si riconosce moltiplicando i due valori di ogni coppia, perché i prodotti sono tutti uguali a $k$.
:::

:::esempio{titolo="Macchine identiche impegnate nello stesso lavoro"}
Un lavoro richiede $24$ ore a una sola macchina. Un'**ora-macchina** è il lavoro che una macchina compie in un'ora, quindi il lavoro intero vale $24$ ore-macchina.

Si suppone che $m$ macchine identiche lavorino insieme allo stesso ritmo e che il lavoro si possa dividere fra loro. In $t$ ore le $m$ macchine compiono $m\cdot t$ ore-macchina. Il lavoro è finito quando $m\cdot t=24$, quindi $t=\dfrac{24}{m}$. Il numero di macchine e la durata sono inversamente proporzionali.

Con $3$ macchine servono $\dfrac{24}3=8$ ore e con $6$ macchine ne servono $\dfrac{24}6=4$. I due prodotti $3\cdot8$ e $6\cdot4$ valgono entrambi $24$. Nella figura sono segnati i punti per $2$, $3$ e $6$ macchine.

::grafico{f="24/x" xmin=0.9 xmax=8.4 ymin=-0.6 ymax=16.2 nomi="m,t" legenda="t=\dfrac{24}{m}" punti="2,12,pieno;3,8,pieno;6,4,pieno" segmenti="3,0,3,8;6,0,6,4" titolo="I punti segnati rappresentano gli interi $m=2,3,6$ e le corrispondenti durate in ore"}

Con le ore-macchina si calcola anche il lavoro che resta quando il numero delle macchine cambia durante il lavoro. Se tre macchine hanno lavorato per due ore, hanno compiuto $3\cdot2=6$ ore-macchina. Restano $24-6=18$ ore-macchina. Con sei macchine occorrono altre $\dfrac{18}6=3$ ore.
:::

:::osservazione
Si suppone che il lavoro richieda anche un'ora di preparazione, uguale per qualsiasi numero di macchine. La durata totale è allora $t=1+\dfrac{24}{m}$. Con due macchine il totale è $1+12=13$ ore e con quattro è $1+6=7$ ore. I prodotti $2\cdot13=26$ e $4\cdot7=28$ sono diversi, quindi la durata totale non è inversamente proporzionale al numero di macchine. La sola durata della lavorazione, $\dfrac{24}m$, resta inversamente proporzionale a $m$.
:::

## Percentuali, parte e base di confronto

:::definizione{#percentuali titolo="Il totale rispetto a cui si misura la percentuale"}
Una **percentuale** è una frazione con denominatore $100$. Il simbolo $\%$ si legge «per cento», quindi $20\%=\dfrac{20}{100}=\dfrac15$.

Il $p\%$ di una quantità $Q$ è $Q\cdot\dfrac p{100}$, per esempio il $20\%$ di $80$ è $16$.

Nel verso opposto, se sono noti la parte $P$ e il totale $Q$, con $Q$ positivo, la percentuale è $p=100\cdot\dfrac PQ$. Il rapporto $\dfrac PQ$ fra la parte e il totale si chiama anche frequenza relativa. In un gruppo di $80$ studenti gli assenti sono $16$. Poiché $\dfrac{16}{80}=\dfrac15$ e $100\cdot\dfrac15=20$, gli assenti sono il $20\%$ del gruppo. I presenti sono $80-16=64$, cioè l'$80\%$, perché $\dfrac{64}{80}=\dfrac45$.

Le due percentuali hanno per denominatore lo stesso totale $Q=80$ e la loro somma è $100\%$. Ciascuna è la percentuale complementare dell'altra, cioè quella che manca per arrivare a $100\%$. Nella figura il tratto dei presenti è lungo quattro volte quello degli assenti, come $80\%$ è quattro volte $20\%$.

::struttura{riferimento=0 poligoni="0,0 8,0 8,0.9 0,0.9;8,0 10,0 10,0.9 8,0.9" linee="8,0 8,0.9" etichette="4,1.25,64 presenti;9,1.25,16 assenti;4,0.4,80%;9,0.4,20%" titolo="Le 80 unità del totale si dividono in due gruppi. I due tratti hanno lunghezze proporzionali alle rispettive percentuali"}

Per la percentuale di due gruppi riuniti, che non hanno persone in comune, si sommano le parti fra loro e i totali fra loro. Nel primo gruppo partecipano $6$ persone su $20$, cioè il $30\%$. Nel secondo partecipano $18$ persone su $30$, cioè il $60\%$. In tutto partecipano $6+18=24$ persone su $20+30=50$, quindi la percentuale complessiva è

$$
100\cdot\frac{6+18}{20+30}=100\cdot\frac{24}{50}=48.
$$

La media aritmetica di due numeri è la loro somma divisa per due. La media aritmetica di $30\%$ e $60\%$ è $45\%$ ed è diversa da $48\%$, perché dà lo stesso peso a due gruppi che hanno un numero diverso di persone.

Le percentuali dei singoli gruppi servono da controllo. In ciascun gruppo partecipa almeno il $30\%$ delle persone, quindi anche nei due gruppi riuniti partecipa almeno il $30\%$. Allo stesso modo, in ciascun gruppo partecipa al massimo il $60\%$, quindi la percentuale complessiva è compresa fra $30\%$ e $60\%$. Il valore $48\%$ è più vicino a $60\%$ perché il gruppo con il $60\%$ è il più numeroso.
:::

:::esempio{titolo="Punti percentuali e variazione relativa"}
Una quota, cioè una parte del totale espressa in percentuale, sale dal $40\%$ al $50\%$. La differenza fra le due percentuali è $50-40=10$ e si misura in **punti percentuali**.

La **variazione relativa** è la differenza divisa per il valore di partenza. In percentuale si moltiplica per $100$.

$$
100\cdot\frac{50-40}{40}=100\cdot\frac{10}{40}=100\cdot\frac14=25.
$$

La quota è quindi aumentata del $25\%$ rispetto al suo valore iniziale. Come controllo, $40\cdot1{,}25=50$.
:::

## Variazioni successive e ricostruzione del valore iniziale

::::teorema{#variazioni-successive titolo="Il prodotto dei fattori di variazione"}
Un prezzo di $200$ euro aumenta del $10\%$. Il $10\%$ di $200$ è $20$, quindi il nuovo prezzo è $200+20=220$ euro. Lo stesso risultato si ottiene con una sola moltiplicazione, $200\cdot1{,}1=220$. Il numero $1{,}1$ è il **fattore di variazione**, cioè il numero per cui si moltiplica il valore iniziale per avere quello finale.

Per una quantità positiva $Q$ valgono le formule seguenti.

- Un aumento del $p\%$ dà $Q\left(1+\dfrac p{100}\right)$.
- Una riduzione del $p\%$, con $0\le p\le100$, dà $Q\left(1-\dfrac p{100}\right)$.

In due variazioni successive la seconda si calcola sul valore già cambiato dalla prima. Ciascun fattore moltiplica il valore ottenuto fino a quel momento, quindi il fattore complessivo è il prodotto dei due fattori.

:::dimostrazione
L'aumento aggiunge a $Q$ il suo $p\%$, cioè la quantità $Q\cdot\dfrac p{100}$. Il nuovo valore è $Q+Q\cdot\dfrac p{100}$. Il fattore $Q$ compare in entrambi i termini e si raccoglie, quindi si ottiene $Q\left(1+\dfrac p{100}\right)$.

Nella riduzione la stessa quantità si sottrae. Il nuovo valore è $Q-Q\cdot\dfrac p{100}=Q\left(1-\dfrac p{100}\right)$.

Per due variazioni successive si indicano con $a$ e $b$ i due fattori. Dopo la prima variazione il valore è $Qa$. La seconda variazione moltiplica questo valore per $b$ e dà $(Qa)b=Q(ab)$.
:::
::::

:::esempio{titolo="Aumento e riduzione di uguale percentuale"}
Si parte da $100$. L'aumento del $10\%$ dà $100\cdot1{,}1=110$. La riduzione successiva del $10\%$ si calcola su $110$ e vale $11$, quindi si arriva a $110-11=99$.

Invertendo l'ordine, la riduzione del $10\%$ porta prima a $90$. L'aumento del $10\%$ si calcola su $90$ e vale $9$, quindi si arriva di nuovo a $99$. Il valore finale è lo stesso perché in entrambi i casi il fattore complessivo è $1{,}1\cdot0{,}9=0{,}99$.

Nella figura i due percorsi partono da $100$, passano per i valori intermedi $110$ e $90$ e arrivano entrambi a $99$.

::grafico{xmin=-0.45 xmax=2.65 ymin=85 ymax=115 nomi="passo,valore" linee="0,100 1,110 2,99;0,100 1,90 2,99" punti="0,100,pieno;1,110,pieno;1,90,pieno;2,99,pieno" etichette="1.02,112.5,110;1.02,87.6,90;2.28,97.6,99" titolo="A partire da 100, i passaggi del 10% conducono a 99 attraverso due valori intermedi diversi"}

Per ritrovare il valore iniziale si divide il valore finale per il fattore di variazione. Uno sconto è una riduzione del prezzo. Se uno sconto del $20\%$ porta il prezzo a $64$ euro, il fattore è $1-\dfrac{20}{100}=\dfrac{80}{100}=\dfrac45$. Dividere per $\dfrac45$ equivale a moltiplicare per il reciproco $\dfrac54$, quindi il prezzo iniziale è

$$
64\cdot\frac54=80\ \text{euro}.
$$

Per tornare da $64$ a $80$ euro si aggiungono $16$ euro. Rispetto al nuovo prezzo di $64$ euro l'aumento è $\dfrac{16}{64}=\dfrac14$, cioè il $25\%$. Lo sconto del $20\%$ si annulla quindi con un aumento del $25\%$, perché le due percentuali sono calcolate su prezzi diversi.
:::

:::attenzione
Una riduzione del $100\%$ ha fattore $1-\dfrac{100}{100}=0$. Ogni valore iniziale diventa zero, per esempio sia $50$ sia $80$. Dal solo valore finale non si ricava quindi il valore di partenza.
:::

## Scale, conversioni e misure di area

:::definizione{#scale titolo="Il rapporto tra misura sul disegno e misura reale"}
La **scala** di una carta o di un disegno è il rapporto fra una lunghezza sul disegno e la lunghezza reale corrispondente, misurate con la stessa unità. In una scala $1:k$, con $k>0$, a un'unità sul disegno corrispondono $k$ unità dello stesso tipo nella realtà.

In scala $1:50000$ un centimetro sulla carta corrisponde a $50000\,\mathrm{cm}$ reali. Un metro contiene $100$ centimetri e un chilometro contiene $1000$ metri, quindi

$$
50000\,\mathrm{cm}=\frac{50000}{100}\,\mathrm m=500\,\mathrm m=0{,}5\,\mathrm{km}.
$$

Sei centimetri sulla carta corrispondono perciò a $6\cdot0{,}5\,\mathrm{km}=3\,\mathrm{km}$.

Nel verso opposto, per sapere quanto è lunga sulla carta una distanza reale di $2\,\mathrm{km}$, la si scrive prima in centimetri. Si ha $2\,\mathrm{km}=2000\,\mathrm m=200000\,\mathrm{cm}$. Dividendo per $50000$ si ottiene $\dfrac{200000}{50000}=4$, cioè $4\,\mathrm{cm}$ sulla carta.

Nella figura $c$ è la lunghezza sulla carta in centimetri e $d$ è la distanza reale in chilometri. Le due grandezze sono direttamente proporzionali, con $d=0{,}5\,c$. I due punti segnati sono quelli già calcolati.

::grafico{f="0.5*x" xmin=-0.35 xmax=7.2 ymin=-0.35 ymax=4.1 nomi="c,d" legenda="d=0{,}5c" punti="4,2,pieno;6,3,pieno" segmenti="4,0,4,2;0,2,4,2;6,0,6,3;0,3,6,3" titolo="In scala $1:50000$, a ogni centimetro $c$ sulla carta corrisponde mezzo chilometro reale $d$"}
:::

:::esempio{titolo="Dal fattore di lunghezza al fattore di area"}
Su una pianta in scala $1:200$ un rettangolo misura $3\,\mathrm{cm}$ per $5\,\mathrm{cm}$. Ogni lunghezza reale è $200$ volte quella sul disegno, quindi i lati reali sono

$$
3\,\mathrm{cm}\cdot200=600\,\mathrm{cm}=6\,\mathrm m,\qquad
5\,\mathrm{cm}\cdot200=1000\,\mathrm{cm}=10\,\mathrm m.
$$

L'area di un rettangolo è il prodotto dei due lati. L'area reale è $6\,\mathrm m\cdot10\,\mathrm m=60\,\mathrm{m}^2$ (metri quadrati).

Lo stesso risultato si ottiene partendo dall'area sul disegno, che è $3\,\mathrm{cm}\cdot5\,\mathrm{cm}=15\,\mathrm{cm}^2$ (centimetri quadrati). Entrambi i lati si moltiplicano per $200$, quindi l'area si moltiplica per $200\cdot200=200^2=40000$.

$$
15\,\mathrm{cm}^2\cdot200^2=15\,\mathrm{cm}^2\cdot40000=600000\,\mathrm{cm}^2.
$$

Un metro quadrato è un quadrato con il lato di $100\,\mathrm{cm}$, quindi contiene $100\cdot100=10000$ centimetri quadrati. Dividendo si ritrova $\dfrac{600000}{10000}=60$, cioè $60\,\mathrm{m}^2$.
:::
