---
titolo: "Potenze, radici e notazione scientifica"
sommario: "Calcolare con esponenti interi e frazionari, scrivere misure in notazione scientifica e controllare scala e precisione dei risultati."
---

## Potenze con esponente intero

:::definizione{#potenze titolo="Base, esponente e segno"}
Una **potenza** con esponente intero positivo riassume un prodotto di fattori uguali. Nella scrittura $a^n$, il numero reale $a$ è la base e l'intero positivo $n$ indica quanti fattori uguali ad $a$ compaiono. Per esempio, $4^3=4\cdot4\cdot4=64$. Questa scrittura permette di riconoscere i fattori prima di calcolare. In una formula con due fattori uguali a una velocità $v$, il prodotto $v\cdot v$ diventa $v^2$.

Quando la base è negativa, le parentesi precisano che il segno appartiene a ciascun fattore. In $(-3)^2=(-3)(-3)=9$ entrambi i fattori sono negativi. In $(-3)^3=(-3)(-3)(-3)=-27$ resta un fattore negativo dopo aver formato una coppia. Quindi una base negativa dà una potenza positiva con esponente pari e negativa con esponente dispari. Il comportamento dei segni è rappresentato nei grafici di $y=x^2$ e $y=x^3$. Per $x=-2$, il primo grafico ha ordinata $4$ e il secondo ordinata $-8$.

::grafico{f="x^2;x^3" xmin=-2.5 xmax=2.5 ymin=-10 ymax=10 punti="-2,4;-2,-8;2,4;2,8" titolo="Il quadrato mantiene lo stesso valore passando da $2$ a $-2$. Il cubo cambia segno."}

:::

:::attenzione
In $-3^2$ l'esponente si applica a $3$. Si ottiene quindi $-(3^2)=-9$. In $(-3)^2$ la base è $-3$ e il risultato vale $9$. La scrittura con parentesi conserva questa distinzione anche quando la base è un numero ricavato da una misura o da un calcolo intermedio.
:::

:::definizione{#esponente-negativo titolo="Esponente zero e reciproco"}
Per una base $a\ne0$ si pone $a^0=1$. Se $n$ è un intero positivo, si pone $a^{-n}=\dfrac{1}{a^n}$. Il reciproco è il numero che, moltiplicato per $a^n$, dà uno. Perciò $5^{-2}=\dfrac{1}{25}$ e $(-5)^{-2}=\dfrac{1}{25}$. Per base zero, le potenze con esponente intero positivo valgono zero. La definizione tramite il reciproco richiede invece una base diversa da zero, poiché il denominatore deve avere valore diverso da zero. Anche la convenzione per l'esponente zero si applica qui a basi diverse da zero.

Le potenze di una base fissata formano una successione in cui ogni passo verso l'esponente successivo moltiplica il valore per la base. Per la base due, i valori agli esponenti $-2$, $-1$, $0$, $1$, $2$ sono rispettivamente $\dfrac{1}{4}$, $\dfrac{1}{2}$, $1$, $2$, $4$. Tornando indietro da $2^0=1$, il valore si divide per due a ogni passo. Questa lettura spiega perché una potenza di dieci con esponente negativo rappresenta una frazione positiva compresa fra zero e uno.

::grafico{f="2^x" xmin=-2.75 xmax=2.65 ymin=-0.5 ymax=6 punti="-2,0.25;-1,0.5;0,1;1,2;2,4" nomi="n,2ⁿ" legenda="y=2^n" titolo="Le potenze intere di due sono i punti della curva con ascissa intera."}

:::

:::esempio{titolo="Valori e significato di una misura di segno negativo"}
Su un asse orientato, un corpo compie uno spostamento $\Delta x=-2\,\mathrm{m}$, dove $\Delta x$ indica posizione finale meno posizione iniziale. Il valore negativo descrive il verso. Se una formula richiede il quadrato dello spostamento, si eleva al quadrato sia il valore numerico sia l'unità.
$$
\begin{aligned}
(\Delta x)^2 &=(-2\,\mathrm{m})^2\\[6pt]
&=(-2)^2\cdot\mathrm{m^2}\\[6pt]
&=4\,\mathrm{m^2}.
\end{aligned}
$$
L'unità quadrata informa sul tipo di quantità ricavata. Lo spostamento resta una lunghezza con segno. Il suo quadrato è invece una quantità non negativa espressa in metri quadrati. Nel passaggio inverso la radice quadrata restituisce il valore assoluto dello spostamento, quindi per recuperarne il verso serve l'informazione iniziale sul segno.
:::

## Prodotti, quozienti e potenze di potenze

::::teorema{#proprieta titolo="Proprietà delle potenze di base comune"}
Per ogni base reale $a\ne0$ e per interi $m$ e $n$ valgono
$$
\begin{aligned}
a^m a^n &= a^{m+n},\\[6pt]
\frac{a^m}{a^n} &= a^{m-n},\\[6pt]
(a^m)^n &= a^{mn}.
\end{aligned}
$$
Il prodotto unisce fattori, il quoziente li semplifica e la potenza di una potenza ripete gruppi di fattori. Le tre operazioni permettono di tenere separati i calcoli sugli esponenti da quelli sui coefficienti.

:::dimostrazione
Per esponenti positivi, il prodotto $a^m a^n$ contiene $m$ copie di $a$ seguite da altre $n$ copie, quindi contiene $m+n$ copie di $a$. La stessa idea vale per $(a^m)^n$, che contiene $n$ gruppi di $m$ fattori, quindi $mn$ fattori. Per dividere $a^m$ per $a^n$ si moltiplica per $a^{-n}$. La definizione di esponente negativo permette di cancellare una coppia $a\cdot a^{-1}$ per volta, poiché ciascuna coppia vale uno. Il conteggio dei fattori che rimangono è quindi $m-n$ se prevalgono i fattori $a$, e il risultato è il reciproco della potenza corrispondente se prevalgono i fattori $a^{-1}$. Lo stesso conteggio con i reciproci estende la regola del prodotto agli esponenti negativi. Nella potenza di potenza, un esponente esterno negativo prende il reciproco del prodotto già calcolato, quindi inverte il segno del suo esponente. Quando un esponente è zero, si applica $a^0=1$.
:::

::::

:::esempio{titolo="Quoziente tra potenze con esponenti negativi"}
Si consideri il quoziente con numeratore $10^{-4}$ e denominatore $10^{-7}$. I due esponenti sono negativi, ma il denominatore ha valore minore del numeratore. Il risultato deve quindi essere maggiore di uno.
$$
\begin{aligned}
\frac{10^{-4}}{10^{-7}}
&=10^{-4-(-7)}\\[6pt]
&=10^3.
\end{aligned}
$$
Il risultato è coerente con il confronto iniziale. Le parentesi nell'esponente mostrano quale numero si sottrae.
:::

:::osservazione{#basi-diverse titolo="Potenze di prodotti e quozienti"}
Per $a,b\ne0$ e un intero $n$ valgono $(ab)^n=a^nb^n$ e $\left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n}$. Per un esponente positivo basta riordinare i fattori. Per un esponente negativo si applica poi il reciproco. Per esempio,
$$
\begin{aligned}
(2\cdot5)^3 &= 2^3\cdot5^3\\[6pt]
&=8\cdot125\\[6pt]
&=1000.
\end{aligned}
$$
Riconoscere una stessa potenza esterna permette di combinare basi diverse. Per esempio, $3^4\cdot2^4=(3\cdot2)^4=6^4$. Se gli esponenti sono diversi, una scomposizione delle basi può riportare il calcolo a una base comune. In $4^3\cdot2^{-4}$, poiché $4=2^2$, il prodotto vale $2^6\cdot2^{-4}=2^2$. Il controllo si può fare anche dividendo $64$ per $16$.
:::

:::esempio{titolo="Potenze di una stessa misura di lunghezza"}
Un cubo di lato $\ell=2\cdot10^{-3}\,\mathrm{m}$ ha volume $V=\ell^3$. Il coefficiente numerico, la potenza di dieci e l'unità compaiono tutti nei tre fattori uguali. Pertanto
$$
\begin{aligned}
V &=\bigl(2\cdot10^{-3}\,\mathrm{m}\bigr)^3\\[6pt]
&=2^3\cdot\bigl(10^{-3}\bigr)^3\,\mathrm{m^3}\\[6pt]
&=8\cdot10^{-9}\,\mathrm{m^3}.
\end{aligned}
$$
L'esponente decimale si moltiplica per tre, perché la potenza è ripetuta in tre fattori. Se il lato diventasse dieci volte maggiore, il volume diventerebbe mille volte maggiore, poiché il fattore dieci comparirebbe nella misura di ciascuno dei tre lati moltiplicati. Il controllo sul rapporto tra volumi conferma la variazione di tre unità dell'esponente.
:::

:::attenzione
La somma di potenze della stessa base richiede un passaggio diverso dal prodotto. Per esempio, $10^2+10^3=100+1000=1100$, mentre $10^5=100000$. Si possono raccogliere i fattori comuni. In questo caso $10^2+10^3=10^2(1+10)$, quindi il calcolo combina due coefficienti che si riferiscono alla stessa scala. Anche con base diversa, come $2^3+2^4$, la somma vale $2^3(1+2)=24$.
:::

## Notazione scientifica e normalizzazione

:::definizione{#scientifica titolo="Coefficiente ed esponente decimale"}
Ogni numero reale positivo si scrive in **notazione scientifica** nella forma $a\cdot10^n$, con $n$ intero e $1\le a<10$. Il numero $a$ è il coefficiente e $n$ è l'esponente decimale. Per un numero negativo si normalizza il valore assoluto e si scrive il segno meno davanti al prodotto. Lo zero si scrive $0$.

La normalizzazione equivale a scegliere l'unica coppia di potenze successive tale che
$$
10^n\le x<10^{n+1}.
$$
Infatti, dividendo i tre membri per il valore positivo $10^n$ si ottiene $1\le\dfrac{x}{10^n}<10$. Quindi il quoziente è il coefficiente richiesto. Per esempio, $4600$ è almeno $1000$ ed è minore di $10000$. Si ottiene allora $n=3$ e, dividendo $4600$ per $1000$, si ricava $a=4{,}6$. Lo stesso intervallo include il valore $1000$ e termina prima di $10000$, che appartiene all'intervallo successivo.

::grafico{xmin=-0.5 xmax=11.4 ymin=-1.7 ymax=3 punti="1,1.2,pieno;10,1.2,vuoto" linee="1,1.2 10,1.2" segmenti="1,0,1,1.2;10,0,10,1.2" etichette="1,2.05,10³;10,2.05,10⁴;5.5,1.9,n = 3" titolo="Sull’asse orizzontale una unità vale $1000$. L’intervallo di scala $n=3$ include $10^3$ e termina prima di $10^4$."}

:::

:::esempio{titolo="Numeri minori di uno e segno della misura"}
Si consideri $x=0{,}00038$. Poiché $10^{-4}=0{,}0001$ e $10^{-3}=0{,}001$, si ha $10^{-4}\le x<10^{-3}$. Il coefficiente vale quindi
$$
\begin{aligned}
a &= \frac{0{,}00038}{0{,}0001}\\[6pt]
&=3{,}8.
\end{aligned}
$$
Perciò $0{,}00038=3{,}8\cdot10^{-4}$. Si può verificare il risultato moltiplicando il coefficiente per il reciproco di $10^4$, cioè dividendolo per $10000$.

Una variazione di posizione pari a $-0{,}00038\,\mathrm{m}$ si scrive $-3{,}8\cdot10^{-4}\,\mathrm{m}$. Il segno meno descrive il verso della variazione rispetto all'asse scelto. L'esponente $-4$ indica invece la scala decimale del suo valore assoluto. Una singola misura può quindi avere entrambi i segni con ruoli distinti.
:::

:::osservazione{#confronto-scientifico titolo="Confronto di valori sulla stessa scala"}
Per confrontare due valori positivi già normalizzati si confrontano prima gli esponenti. Se gli esponenti sono uguali, si confrontano i coefficienti. Per esempio, $9{,}8\cdot10^{-6}$ è minore di $1{,}2\cdot10^{-5}$, perché il primo valore appartiene all'intervallo che termina a $10^{-5}$ e il secondo appartiene a quello che comincia a $10^{-5}$. Esprimendo entrambi i valori in unità di $10^{-6}$ si ottengono rispettivamente $9{,}8$ e $12$, che confermano il confronto.
:::

:::esempio{titolo="Riconoscere le scale in una tabella"}
Una tabella riporta due quantità di sostanza uguali, rispettivamente, a $0{,}0000024\,\mathrm{mol}$ e $0{,}000017\,\mathrm{mol}$. Per la prima, moltiplicare il valore per $10^6$ dà $2{,}4$, quindi la scrittura normalizzata è $2{,}4\cdot10^{-6}\,\mathrm{mol}$. Per la seconda basta il fattore $10^5$, quindi si ottiene $1{,}7\cdot10^{-5}\,\mathrm{mol}$. Si può confrontare anche il fattore di separazione. I coefficienti di $10^{-6}$ sono $2{,}4$ e $17$, quindi il rapporto fra la seconda quantità e la prima è compreso fra sette e otto. Un esponente maggiore di un'unità segnala il passaggio all'intervallo decimale successivo. Per sapere se la seconda quantità vale dieci volte la prima servono anche i coefficienti.
:::

## Operazioni con coefficienti ed esponenti

:::osservazione{#operazioni titolo="Prodotti e quozienti in notazione scientifica"}
Per moltiplicare due numeri scritti in notazione scientifica si moltiplicano i coefficienti e si sommano gli esponenti. Per dividere si dividono i coefficienti e si sottrae l'esponente del denominatore. Dopo il calcolo si controlla il coefficiente e, se occorre, si normalizza il risultato. In una misura composta si combinano anche le unità.

Per esempio, una soluzione omogenea contiene $4{,}0\cdot10^{-2}\,\mathrm{g/L}$ di soluto. In $6{,}0\cdot10^{-3}\,\mathrm{L}$ di soluzione la massa di soluto vale
$$
\begin{aligned}
m &= (4{,}0\cdot10^{-2}\,\mathrm{g/L})
      (6{,}0\cdot10^{-3}\,\mathrm{L})\\[6pt]
  &= 24\cdot10^{-5}\,\mathrm{g}\\[6pt]
  &= 2{,}4\cdot10^{-4}\,\mathrm{g}.
\end{aligned}
$$
I litri si semplificano, quindi rimane l'unità di massa. Poiché il coefficiente intermedio $24$ vale $2{,}4\cdot10$, l'esponente aumenta da $-5$ a $-4$.
:::

:::esempio{titolo="Normalizzazione con coefficiente minore di uno"}
Si consideri il quoziente di $2\cdot10^{-6}$ e $8\cdot10^{-4}$.
$$
\begin{aligned}
\frac{2\cdot10^{-6}}{8\cdot10^{-4}}
&=\frac{2}{8}\cdot10^{-6-(-4)}\\[6pt]
&=0{,}25\cdot10^{-2}\\[6pt]
&=2{,}5\cdot10^{-3}.
\end{aligned}
$$
Il coefficiente $0{,}25$ diventa $2{,}5$ moltiplicandolo per dieci. Per conservare il valore del prodotto, la potenza di dieci si divide quindi per dieci.
:::

:::osservazione{#somma-scala-comune titolo="Somme e differenze con esponente comune"}
In una somma o in una differenza, la potenza di dieci funziona da unità di conteggio. Si portano quindi i termini alla stessa potenza e si sommano o si sottraggono i coefficienti. Scegliere l'esponente più piccolo tra quelli presenti evita di introdurre decimali aggiuntivi in molti calcoli a mano.

Per esempio, $2\cdot10^{-3}=20\cdot10^{-4}$. La somma con $7\cdot10^{-4}$ contiene quindi $20$ unità della scala $10^{-4}$ nel primo termine e $7$ nel secondo.
$$
\begin{aligned}
2\cdot10^{-3}+7\cdot10^{-4}
&=(20+7)\cdot10^{-4}\\[6pt]
&=27\cdot10^{-4}\\[6pt]
&=2{,}7\cdot10^{-3}.
\end{aligned}
$$

::grafico{xmin=-2 xmax=30 ymin=-1.2 ymax=5 punti="0,2;20,2;27,2" vettori="0,2,20,2;20,2,27,2" segmenti="20,0,20,2;27,0,27,2" etichette="10,3,20 unità;23.5,3,7 unità;20.15,0.55,20;27.15,0.55,27" titolo="I due addendi misurano 20 e 7 unità della stessa scala $10^{-4}$."}

Nella differenza può scomparire la prima cifra, quindi si ricalcola l'esponente dopo aver sottratto i coefficienti. Per esempio, $3{,}14\cdot10^5-3{,}11\cdot10^5=0{,}03\cdot10^5=3\cdot10^3$. Il risultato è due ordini decimali sotto i termini scritti inizialmente con esponente cinque. Il calcolo con esponente comune mostra quali cifre si cancellano.
:::

:::esempio{titolo="Differenza tra due letture di massa"}
Due letture hanno valori esatti $m_1=7{,}10\cdot10^{-3}\,\mathrm{g}$ e $m_2=6{,}85\cdot10^{-3}\,\mathrm{g}$. Si vuole ricavare di quanto la seconda lettura è minore della prima. L'esponente è già comune, quindi si sottraggono direttamente i coefficienti.
$$
\begin{aligned}
m_1-m_2
&=(7{,}10-6{,}85)\cdot10^{-3}\,\mathrm{g}\\[6pt]
&=0{,}25\cdot10^{-3}\,\mathrm{g}\\[6pt]
&=2{,}5\cdot10^{-4}\,\mathrm{g}.
\end{aligned}
$$
La differenza è positiva perché la prima lettura è maggiore. Come verifica si può sommare il valore ottenuto a $m_2$. In unità di $10^{-3}\,\mathrm{g}$ si ottiene $6{,}85+0{,}25=7{,}10$, che è il coefficiente della prima lettura.
:::

## Radici ed esponenti frazionari

:::definizione{#radici titolo="Radice quadrata e valore assoluto"}
Per $x\ge0$, la **radice quadrata** $\sqrt{x}$ è il numero reale non negativo il cui quadrato vale $x$. Per esempio, $\sqrt{49}=7$. L'equazione $y^2=49$ ha due soluzioni, $7$ e $-7$. La notazione $\sqrt{49}$ indica la soluzione non negativa.

Per ogni $a$ reale vale $\sqrt{a^2}=|a|$. Infatti $|a|$ è non negativo e il suo quadrato vale $a^2$. Per esempio, $\sqrt{(-6)^2}=6$. Nel grafico di $y=x^2$ i punti di ordinata $9$ hanno ascisse $-3$ e $3$. La definizione di radice quadrata seleziona $3$. Questa scelta si usa quando un calcolo da un'area o da un'energia fornisce una lunghezza o il modulo di una velocità.

::grafico{f="x^2;9" xmin=-3.9 xmax=3.9 ymin=0 ymax=10 punti="-3,9,pieno,A;3,9,pieno,B" segmenti="-3,0,-3,9;3,0,3,9" titolo="Entrambi i punti hanno ordinata $9$. La radice $\sqrt{9}$ è l'ascissa positiva, cioè $3$."}

:::

:::definizione{#radici-e-potenze-frazionarie titolo="Radici di indice pari e dispari"}
Per un indice intero $q\ge2$, la radice $\sqrt[q]{x}$ è il numero il cui elevamento alla potenza $q$ restituisce $x$. Per $q$ pari, si richiede $x\ge0$ e si sceglie la radice non negativa. Per $q$ dispari, ogni numero reale ha una sola radice reale, con lo stesso segno del radicando. Per esempio, $\sqrt[3]{-27}=-3$, poiché $(-3)^3=-27$.

Per $x>0$, $p$ intero e $q\ge2$, vale $x^{\frac{p}{q}}=\left(\sqrt[q]{x}\right)^p$. Si può quindi calcolare prima la radice e poi la potenza. Per esempio, $16^{\frac{3}{4}}=\left(\sqrt[4]{16}\right)^3=2^3=8$. Con un numeratore negativo si prende il reciproco del risultato della potenza positiva, perciò $16^{-\frac{3}{4}}=\dfrac{1}{8}$.

:::

:::esempio{titolo="Radice quadrata con esponente decimale dispari"}
Si consideri $\sqrt{3{,}6\cdot10^{-5}}$. Per applicare la radice quadrata alla potenza di dieci si può riscrivere il radicando con esponente pari.
$$
\begin{aligned}
\sqrt{3{,}6\cdot10^{-5}}
&=\sqrt{36\cdot10^{-6}}\\[6pt]
&=\sqrt{36}\,\sqrt{10^{-6}}\\[6pt]
&=6\cdot10^{-3}.
\end{aligned}
$$
Il passaggio da $3{,}6$ a $36$ è compensato dalla diminuzione dell'esponente di un'unità. Il coefficiente $36$ ha radice quadrata intera, mentre l'esponente $-6$ è divisibile per due. Si può controllare il risultato calcolando $\left(6\cdot10^{-3}\right)^2=36\cdot10^{-6}=3{,}6\cdot10^{-5}$.
:::

:::osservazione{#esponente-della-radice titolo="Scomposizione del radicando"}
Se $x=a\cdot10^n$ con $a>0$ e $n$ è multiplo dell'indice $q$, allora $\sqrt[q]{x}=\sqrt[q]{a}\cdot10^{\frac{n}{q}}$. Infatti, elevando il prodotto a $q$ si ottiene $a\cdot10^n$. La stessa scomposizione vale per $a<0$ se l'indice $q$ è dispari. Per esempio, in $\sqrt[3]{-64\cdot10^{-9}}$ si ottiene $\sqrt[3]{-64}=-4$ e il quoziente tra l'esponente $-9$ e l'indice tre vale $-3$. La radice è quindi $-4\cdot10^{-3}$.

Se $n$ non è un multiplo di $q$, si può scegliere un altro esponente e compensare la variazione nel coefficiente. Per la radice cubica di $2{,}7\cdot10^{-5}$ conviene riscrivere il radicando come $27\cdot10^{-6}$. L'esponente $-6$ è multiplo di tre e la radice cubica di $27$ vale tre. Si ottiene quindi $3\cdot10^{-2}$.
:::

## Stime e ordini di grandezza

:::definizione{#stime titolo="Stima di un risultato"}
Una **stima** è un valore approssimato ricavato da dati arrotondati o da limiti semplici. Serve a controllare la scala di un risultato prima di eseguire il calcolo esatto. Per esempio, il rapporto $\dfrac{5{,}8\cdot10^6}{2{,}1\cdot10^3}$ è vicino a $\dfrac{6}{2}\cdot10^3=3\cdot10^3$. Si può controllare l'ordine del quoziente anche con due disuguaglianze. Il numeratore è compreso tra $5\cdot10^6$ e $6\cdot10^6$, mentre il denominatore è compreso tra $2\cdot10^3$ e $2{,}5\cdot10^3$. Tutti i valori sono positivi. Dividendo il limite inferiore del numeratore per il limite superiore del denominatore si ottiene $2\cdot10^3$. Dividendo il limite superiore del numeratore per il limite inferiore del denominatore si ottiene $3\cdot10^3$. Il quoziente esatto è quindi compreso tra questi due valori.

Le stime aiutano anche quando si deve ricavare una radice a mano. Poiché $4^2=16$ e $5^2=25$, $\sqrt{20}$ è compresa tra $4$ e $5$. Inoltre $4{,}5^2=20{,}25$, quindi $\sqrt{20}<4{,}5$. Nello stesso modo, $\sqrt{20\cdot10^{-8}}$ è compresa tra $4\cdot10^{-4}$ e $4{,}5\cdot10^{-4}$.
:::

:::definizione{#ordini-di-grandezza titolo="Potenza di dieci più vicina in scala moltiplicativa"}
Qui l'**ordine di grandezza** di un numero positivo è la potenza di dieci più vicina secondo il fattore moltiplicativo. Se $x=a\cdot10^n$ è normalizzato, le due potenze da confrontare sono $10^n$ e $10^{n+1}$. Il fattore che separa $10^n$ da $x$ vale $a$. Il fattore che separa $x$ da $10^{n+1}$ vale $\dfrac{10}{a}$. Si sceglie quindi la potenza associata al fattore più piccolo.

I fattori coincidono per $a^2=10$, cioè per $a=\sqrt{10}\approx3{,}16$. Per $a<\sqrt{10}$ è più vicina $10^n$. Per $a>\sqrt{10}$ è più vicina $10^{n+1}$. In caso di uguaglianza le due potenze sono alla stessa distanza moltiplicativa. Per esempio, $2\cdot10^4$ è due volte $10^4$ e cinque volte più piccolo di $10^5$. Il suo ordine di grandezza è quindi $10^4$. Per $8\cdot10^4$ i fattori valgono invece $8$ e $1{,}25$, quindi è più vicina $10^5$.

::grafico{f="x;10/x" xmin=0 xmax=8.4 ymin=0 ymax=9 punti="3.16227766,3.16227766,pieno" segmenti="3.16227766,0,3.16227766,3.16227766" nomi="a,fattore" legenda="a;\dfrac{10}{a}" titolo="I due fattori $a$ e $\dfrac{10}{a}$ coincidono per $a=\sqrt{10}$."}

:::

:::esempio{titolo="Stima di un prodotto tra grandezze misurate"}
Un piccolo corpo ha massa $7{,}9\cdot10^{-4}\,\mathrm{kg}$. Su di esso agisce un'accelerazione di modulo $4{,}2\cdot10^2\,\mathrm{m/s^2}$. Per stimare il modulo della risultante, si possono usare i coefficienti otto e quattro. Il prodotto approssimato è
$$
(8\cdot10^{-4})(4\cdot10^2)\,\mathrm{N}
=32\cdot10^{-2}\,\mathrm{N}
=3{,}2\cdot10^{-1}\,\mathrm{N}.
$$
Il risultato è dell'ordine di qualche decimo di newton. Un risultato di alcuni newton sarebbe di circa dieci volte maggiore di questa stima. Il calcolo esatto del coefficiente intermedio dà $7{,}9\cdot4{,}2=33{,}18$. Quindi il controllo della scala è utile anche prima di stabilire a quante cifre riportare il risultato.
:::

## Cifre significative e arrotondamenti

:::definizione{#cifre-significative titolo="Cifre significative di una misura"}
In una misura espressa in forma decimale, le **cifre significative** cominciano dalla prima cifra diversa da zero. Gli zeri prima di quella cifra fissano la posizione della virgola. Gli zeri tra cifre diverse da zero contano. Contano anche gli zeri finali scritti dopo la virgola quando riportano la precisione dichiarata della misura.

Per esempio, $0{,}00450\,\mathrm{m}$ si scrive $4{,}50\cdot10^{-3}\,\mathrm{m}$ e ha tre cifre significative. La scrittura $4{,}5\cdot10^{-3}\,\mathrm{m}$ indica lo stesso valore numerico con due cifre significative. Quando un numero intero come $4500$ è usato per riportare una misura, la notazione scientifica distingue $4{,}5\cdot10^3$ da $4{,}500\cdot10^3$. Un conteggio di $4500$ oggetti, se esatto, ha invece un significato diverso dalla lettura di una misura arrotondata.
:::

:::osservazione{#arrotondamenti titolo="Precisione di somme, prodotti e quozienti"}
Nei calcoli con dati misurati si usa spesso una regola di arrotondamento convenzionale. Per somme e differenze, l'ultima posizione mantenuta è quella del dato con l'ultima cifra significativa nella posizione meno fine. Per esempio, sommando $2{,}46\,\mathrm{m}$ e $1{,}3\,\mathrm{m}$ si ottiene $3{,}76\,\mathrm{m}$ prima di arrotondare. La seconda misura arriva ai decimi, quindi si scrive $3{,}8\,\mathrm{m}$.

Per prodotti e quozienti si mantiene di norma il numero di cifre significative del dato misurato che ne ha meno. Per esempio, dividendo $12{,}0\,\mathrm{m}$ per $3{,}5\,\mathrm{s}$ si ottiene circa $3{,}42857\,\mathrm{m/s}$. Il tempo ha due cifre significative, quindi il risultato convenzionale è $3{,}4\,\mathrm{m/s}$. Un fattore esatto, come il numero $100$ nel rapporto tra metri e centimetri, lascia invariata la precisione. Le cifre intermedie si mantengono fino al risultato finale, poiché l'arrotondamento prematuro può cambiare l'ultima cifra riportata.

Per arrotondare un valore positivo, si guarda la prima cifra che si intende scartare. Se è inferiore a cinque, si conserva l'ultima cifra da mantenere. Se è maggiore di cinque, oppure è cinque seguito da altre cifre tra cui almeno una è diversa da zero, si aumenta di una unità l'ultima cifra da mantenere. Nel caso di una metà esatta si precisa la convenzione. Negli esercizi che seguono, per un valore positivo a metà tra due valori si sceglie quello maggiore.
:::

:::esempio{titolo="Arrotondamento con passaggio di scala"}
Si vuole riportare $9{,}96\cdot10^{-3}\,\mathrm{m}$ con due cifre significative. Si mantengono inizialmente il nove delle unità e il nove dei decimi nel coefficiente. Poiché la prima cifra scartata è sei, si aggiunge un decimo a $9{,}9$. Il passaggio porta al valore $10$ nella scala iniziale, quindi si normalizza di nuovo il coefficiente. Il risultato è quindi $1{,}0\cdot10^{-2}\,\mathrm{m}$. Lo zero del coefficiente indica la seconda cifra significativa. Con la forma $1\cdot10^{-2}\,\mathrm{m}$ si perderebbe l'indicazione della precisione richiesta.
:::

:::osservazione
Quando un risultato è ottenuto sottraendo valori misurati vicini, alcune cifre iniziali possono cancellarsi. Per esempio, due masse riportate ai centesimi di grammo, $7{,}86\,\mathrm{g}$ e $7{,}61\,\mathrm{g}$, differiscono di $0{,}25\,\mathrm{g}$. Entrambi i dati hanno tre cifre significative. La differenza arriva ancora ai centesimi ma ha due cifre significative, perché è minore di un grammo. La posizione decimale conservata descrive la precisione della sottrazione in questo caso.
:::

## Applicazioni a misure e formule

:::esempio{titolo="Massa da concentrazione e volume"}
In una soluzione omogenea la concentrazione in massa è $c_m=\dfrac{m}{V}$, dove $m$ è la massa di soluto e $V$ il volume della soluzione. Se $c_m=3{,}20\cdot10^{-2}\,\mathrm{g/L}$ e $V=2{,}5\cdot10^{-3}\,\mathrm{L}$, la massa si ricava moltiplicando la concentrazione per il volume.
$$
\begin{aligned}
m &= c_m V\\[6pt]
  &= (3{,}20\cdot2{,}5)\cdot10^{-2+(-3)}\,\mathrm{g}\\[6pt]
  &= 8{,}0\cdot10^{-5}\,\mathrm{g}.
\end{aligned}
$$
La concentrazione ha tre cifre significative e il volume ne ha due. Il risultato è quindi espresso con due cifre significative. La stima con coefficienti $3$ e $3$ dà $9\cdot10^{-5}\,\mathrm{g}$, coerente con la scala del risultato. I due controlli rispondono a domande diverse. La cancellazione dei litri verifica l'unità e il prodotto approssimato verifica la grandezza numerica.
:::

:::esempio{titolo="Modulo della velocità da energia cinetica e massa"}
Per un corpo di massa $m>0$, l'energia cinetica è $E_c=\dfrac{1}{2}mv^2$, dove $v$ è il modulo della velocità. Si considerino i dati $E_c=9{,}0\cdot10^{-4}\,\mathrm{J}$ e $m=2{,}0\cdot10^{-1}\,\mathrm{kg}$. Si isola il quadrato della velocità prima di applicare la radice.
$$
\begin{aligned}
v^2 &= \frac{2E_c}{m}\\[6pt]
&= \frac{2\cdot9{,}0}{2{,}0}\cdot10^{-4-(-1)}\,\mathrm{J/kg}\\[6pt]
&=9{,}0\cdot10^{-3}\,\mathrm{m^2/s^2},\\[6pt]
v &=\sqrt{9{,}0\cdot10^{-3}}\,\mathrm{m/s}\\[6pt]
&\approx9{,}5\cdot10^{-2}\,\mathrm{m/s}.
\end{aligned}
$$
Un joule equivale a un chilogrammo per metro quadrato diviso per secondo quadrato, quindi il rapporto $\mathrm{J/kg}$ ha unità $\mathrm{m^2/s^2}$. La radice restituisce $\mathrm{m/s}$. Il valore di $v^2$ è leggermente minore di $10^{-2}\,\mathrm{m^2/s^2}$, quindi $v$ deve essere leggermente minore di $10^{-1}\,\mathrm{m/s}$. La stima conferma la scala prima dell'arrotondamento a due cifre significative.
:::
