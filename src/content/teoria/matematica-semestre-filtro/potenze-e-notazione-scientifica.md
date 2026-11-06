---
titolo: "Potenze, radici e notazione scientifica"
sommario: "Operazioni con potenze di dieci, radici e numeri molto grandi o molto piccoli."
---

## Potenze intere

:::definizione{#potenze titolo="Potenze con esponente intero"}
Per $a\ne0$ e $n$ intero positivo, $a^n$ è il prodotto di $n$ fattori uguali ad $a$, $a^0=1$ e $a^{-n}=\dfrac{1}{a^n}$. Per esempio $10^{-3}=0{,}001$.

L'esponente negativo descrive il reciproco di una potenza. Perciò $10^{-3}$ è positivo, mentre $-10^3=-1000$ è negativo.
:::

## Proprietà delle potenze

:::teorema{#proprieta titolo="Prodotti, quozienti e potenze di potenze"}
Per $a\ne0$ e $m,n$ interi valgono
$$
a^ma^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n},\qquad (a^m)^n=a^{mn}.
$$
Le prime due uguaglianze seguono dal conteggio e dalla semplificazione dei fattori. Per esempio, $10^{-3}\cdot10^5=10^2$ e $\dfrac{10^{-3}}{10^5}=10^{-8}$. Nei quozienti si sottrae l'intero esponente del denominatore, compreso il suo segno.
:::

## Notazione scientifica

:::definizione{#scientifica titolo="Coefficiente ed esponente"}
Un numero positivo è scritto in **notazione scientifica** se ha la forma $a\cdot10^n$, con $1\le a<10$ e $n$ intero. Così $0{,}00072=7{,}2\cdot10^{-4}$ e $540000=5{,}4\cdot10^5$.

Il coefficiente indica le cifre del numero; l'esponente ne fissa la scala. Spostando la virgola di un posto verso sinistra, l'esponente aumenta di uno affinché il valore resti uguale.
:::

## Operazioni in notazione scientifica

:::osservazione{#operazioni titolo="Calcolo con coefficienti ed esponenti"}
Nel prodotto si moltiplicano i coefficienti e si sommano gli esponenti. Nel quoziente si dividono i coefficienti e si sottraggono gli esponenti. Per sommare o sottrarre si esprimono prima i termini con la stessa potenza di dieci.
$$
(3\cdot10^4)(4\cdot10^{-2})=12\cdot10^2=1{,}2\cdot10^3,
$$
$$
2\cdot10^{-3}+5\cdot10^{-4}=20\cdot10^{-4}+5\cdot10^{-4}=2{,}5\cdot10^{-3}.
$$
Questi calcoli permettono di usare nello stesso problema dimensioni molecolari e quantità macroscopiche.
:::

## Radici e potenze frazionarie

:::definizione{#radici titolo="Radice quadrata"}
Per $x\ge0$, $\sqrt{x}$ è l'unico numero non negativo il cui quadrato vale $x$. Per esempio $\sqrt{36}=6$. Per ogni $a$ reale vale $\sqrt{a^2}=|a|$.

Per $x>0$, $x^{\frac{1}{2}}=\sqrt{x}$ e $x^{-\frac{1}{2}}=\dfrac{1}{\sqrt{x}}$. In particolare,
$$
\sqrt{9\cdot10^{-6}}=3\cdot10^{-3}.
$$
La radice quadrata compare quando si ricava una velocità dall'energia cinetica o una lunghezza dall'area.
:::

## Stime e arrotondamenti

:::osservazione{#stime titolo="Controllo della scala del risultato"}
Una stima consiste nel sostituire i dati con valori vicini per controllare la dimensione numerica del risultato. Per esempio $\dfrac{5{,}9\cdot10^6}{2{,}1\cdot10^3}$ è vicino a $3\cdot10^3$.

Le cifre significative iniziano dalla prima cifra diversa da zero. Il numero $0{,}00450$ ha tre cifre significative. Nei prodotti e nei quozienti il risultato si arrotonda, in genere, al numero di cifre significative del dato meno preciso. I fattori di conversione esatti non limitano la precisione; i passaggi intermedi si conservano con qualche cifra in più.
:::
