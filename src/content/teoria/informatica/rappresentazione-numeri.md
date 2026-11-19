---
titolo: Rappresentazione dei numeri
sommario: Come leggere e costruire codifiche numeriche, riconoscere un overflow e calcolare l’arrotondamento in virgola mobile.
---

## Basi e pesi delle cifre

:::definizione{#notazione-posizionale titolo="Notazione posizionale"}
Nel numero $345$ la cifra $3$ vale trecento, la cifra $4$ vale quaranta e la cifra $5$ vale cinque, infatti $345=3\cdot 100+4\cdot 10+5\cdot 1$. Il valore di ogni cifra dipende quindi dalla posizione che occupa. Una scrittura con questa proprietà si chiama **notazione posizionale**. I numeri $1$, $10$ e $100$ sono potenze di $10$, e $10$ è la **base** della scrittura decimale.

La stessa regola vale con una base $b$ qualsiasi, purché intera e maggiore o uguale a $2$. Le cifre ammesse sono gli interi da $0$ a $b-1$. Le posizioni si numerano da destra a partire da $0$, e la cifra nella posizione $i$, indicata con $d_i$, si moltiplica per il **peso** $b^i$. Una scrittura di $k$ cifre vale quindi
$$
(d_{k-1}\cdots d_0)_b = \sum_{i=0}^{k-1} d_i b^i .
$$
Il pedice $b$ indica la base. La cifra a destra ha peso $b^0=1$, e ogni spostamento di una posizione verso sinistra moltiplica il peso per $b$. In base $2$ i pesi sono $1$, $2$, $4$, $8$, $16$ e così via.
:::

:::esempio{titolo="Dal binario al decimale"}
In base $2$ le cifre ammesse sono soltanto $0$ e $1$ e si chiamano **bit**, da *binary digit*. Una sequenza di bit si chiama **parola**. La parola $101101$ ha sei bit, quindi le posizioni vanno da $0$, a destra, a $5$, a sinistra.

![Sei posizioni con indici da 5 a 0, bit 1 0 1 1 0 1 e pesi da 32 a 1.](/immagini/informatica/rappresentazione-numeri/pesi-binari-it.png)

Un bit $0$ non aggiunge nulla, perché moltiplica per zero il peso della sua posizione. Si sommano quindi i pesi delle quattro posizioni in cui il bit vale $1$.
$$
\begin{aligned}
(101101)_2
  &= 1\cdot 2^5 + 0\cdot 2^4 + 1\cdot 2^3 \\
  &\quad + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0 \\[6pt]
  &= 32+8+4+1 = 45 .
\end{aligned}
$$
L’addendo $1$ proviene dal bit di indice $0$. Tutti gli altri pesi sono pari, quindi un numero scritto in binario è dispari esattamente quando il bit a destra vale $1$.
:::

:::osservazione
La scrittura $(110)_2$ vale $4+2=6$, mentre $(110)_{10}$ vale $100+10=110$. Le stesse cifre indicano quindi numeri diversi in basi diverse, e per questo si scrive la base a pedice. Uno zero iniziale non cambia il valore, perché il suo peso è moltiplicato per $0$, quindi $(00110)_2$ vale ancora $6$. Le due scritture hanno però lunghezze diverse, cinque cifre e tre cifre. La lunghezza diventa importante più avanti, nelle parole con un numero fissato di bit.
:::

## Dall’intero alle cifre

::::teorema{#conversione-interi titolo="Divisioni successive per la base"}
Per trovare le cifre di un numero in una base $b$ si divide ripetutamente per $b$ e si raccolgono i resti. Sia $N$ un intero positivo. Dividendo $N$ per la base $b$ si ottengono un quoziente intero $q$ e un resto $r$ con
$$
N=bq+r,\qquad 0\leq r<b .
$$
Il resto è la cifra di indice $0$, cioè quella a destra. Si ripete la divisione sul quoziente fino a ottenere quoziente zero. I resti, letti dall’ultimo al primo, danno l’unica scrittura di $N$ in base $b$ priva di zeri iniziali. L’intero $0$ si scrive con la cifra $0$.

:::dimostrazione
La divisione con resto fra interi, detta divisione euclidea, ha un solo quoziente e un solo resto. Nella scrittura posizionale, i termini con indice almeno $1$ sono divisibili per $b$, quindi il termine di indice $0$ coincide con il resto. Il quoziente ha per cifre quelle rimaste, con gli indici diminuiti di uno.

Per $N>0$ e $b\geq 2$ il quoziente è minore del dividendo, perché $q\leq \dfrac{N}{2}<N$. Ripetendo il passaggio si ottiene dunque quoziente zero dopo un numero finito di divisioni. Sostituendo ciascun dividendo con il suo quoziente moltiplicato per $b$ più il suo resto, si ricostruisce $N$ come somma dei resti pesati. L’unicità delle divisioni determina tutte le cifre.
:::
::::

:::esempio{titolo="Determinare l’ordine dei resti"}
Per convertire $26$ in base $2$ si eseguono le divisioni seguenti. In ogni riga, a destra del segno di uguale, il quoziente è il fattore che moltiplica la base $2$.
$$
\begin{aligned}
26 &= 2\cdot 13+0 \\
13 &= 2\cdot 6+1 \\
6 &= 2\cdot 3+0 \\
3 &= 2\cdot 1+1 \\
1 &= 2\cdot 0+1 .
\end{aligned}
$$
Il primo resto vale $0$ e occupa la posizione di peso $1$. L’ultimo vale $1$ e occupa la posizione di peso $16$. I resti si leggono quindi dal basso verso l’alto, e la parola ottenuta è $(11010)_2$. Il calcolo inverso dà $16+8+2=26$, quindi le due conversioni concordano.
:::

:::osservazione
Il valore di una scrittura si può calcolare anche da sinistra, una cifra alla volta. Si parte dalla prima cifra. A ogni cifra nuova $d$ si moltiplica per $b$ il valore ottenuto fino a quel punto e si somma $d$. Per $(102)_3$ si ottiene prima $1$, poi $1\cdot 3+0=3$, poi $3\cdot 3+2=11$. Il risultato coincide con la scrittura estesa $1\cdot3^2+0\cdot3+2=11$. La regola funziona perché l’aggiunta di una cifra a destra sposta tutte le cifre precedenti di una posizione verso sinistra, cioè moltiplica il loro valore per $b$.
:::

## Esadecimale e gruppi di quattro bit

:::definizione{#esadecimale titolo="Base esadecimale"}
La **base esadecimale** è la base $16$. Serve a scrivere in forma breve le parole binarie, perché una cifra esadecimale sostituisce quattro bit. Le cifre necessarie sono sedici. Le cifre da $0$ a $9$ conservano il loro valore e le lettere $A,B,C,D,E,F$ valgono rispettivamente $10,11,12,13,14,15$. Poiché $16=2^4$, quattro bit hanno $16$ configurazioni, da $0000$ a $1111$, una per ciascuna cifra esadecimale.
:::

::::teorema{titolo="Raggruppamento per quartine"}
Per convertire una parola binaria intera in esadecimale si raggruppano i bit a partire da destra, a quattro a quattro. Se il gruppo a sinistra ha meno di quattro bit, si completa con zeri a sinistra. Ogni gruppo si sostituisce con la cifra esadecimale di uguale valore. Per la conversione inversa, ciascuna cifra esadecimale si sostituisce con quattro bit, conservando tutti gli zeri interni alla parola.

:::dimostrazione
Chiamato $h_j$ il valore del gruppo di indice $j$, con $j=0$ per il gruppo a destra, il bit di peso locale $2^i$ ha peso complessivo $2^{4j+i}$. Poiché $2^{4j+i}=16^j 2^i$, la somma dei contributi del gruppo vale $h_j16^j$. Questa è la formula posizionale con base $16$.
:::
::::

:::esempio{titolo="Dalla parola binaria all’esadecimale"}
La parola $(110101101)_2$ ha nove bit. Completarla a sinistra permette di individuare tre gruppi.
$$
\begin{aligned}
(110101101)_2 &= (0001\;1010\;1101)_2 \\
              &= (1AD)_{16} .
\end{aligned}
$$
Il gruppo $1010$ vale $8+2=10$ e si scrive $A$. Il gruppo $1101$ vale $8+4+1=13$ e si scrive $D$. La cifra $1$ ha peso $16^2$, perciò il controllo in decimale dà $256+160+13=429$.
:::

:::attenzione
I gruppi di quattro bit si formano a partire da destra, e gli zeri di completamento si aggiungono a sinistra. Il gruppo incompleto $1$ diventa quindi $0001$, che vale ancora $1$. Con tre zeri aggiunti a destra si otterrebbe $1000$, che in binario vale $8$.
:::

## Interi senza segno e larghezza

:::definizione{#interi-senza-segno titolo="Interi senza segno su n bit"}
In un calcolatore ogni numero occupa un numero fissato di bit, per esempio $8$, $16$ o $32$. Una **parola di $n$ bit** è una sequenza di esattamente $n$ bit, con $n\geq 1$, in cui si scrivono anche gli zeri iniziali. Il bit a sinistra, di indice $n-1$, si chiama **bit più significativo**; quello a destra, di indice $0$, è il **bit meno significativo**. Chiamato $b_i$ il bit di indice $i$, se la parola si legge come numero non negativo il suo valore **senza segno** $U$ è
$$
U=\sum_{i=0}^{n-1} b_i2^i .
$$
I valori possibili sono tutti gli interi da $0$ a $2^n-1$. Il minimo ha tutti i bit a zero. Il massimo ha tutti i bit a uno e vale $1+2+\dots+2^{n-1}=2^n-1$. Per $n=3$ le otto parole da $000$ a $111$ valgono da $0$ a $7$. A ogni valore corrisponde una sola parola, perché la larghezza fissata stabilisce quanti zeri iniziali scrivere.
:::

:::esempio{titolo="Dimensionare una parola"}
Il contatore di un apparato deve contenere i valori interi da $0$ a $1000$. Su $9$ bit il massimo disponibile è $2^9-1=511$, perciò la larghezza è insufficiente. Su $10$ bit il massimo sale a $2^{10}-1=1023$, quindi $1000$ è rappresentabile. Poiché i massimi crescono con $n$, **dieci bit** sono il minimo. Il numero di stati richiesti è $1001$ perché il contatore include anche $0$. I $2^{10}=1024$ stati disponibili lasciano $23$ configurazioni inutilizzate.
:::

:::osservazione
La larghezza minima per un intero positivo $N$ è il più piccolo $n$ per cui $N\leq 2^n-1$, cioè $N<2^n$. Per $N=1000$ si ha $2^9=512\leq 1000<1024=2^{10}$, quindi servono dieci bit. Una potenza di due richiede un bit in più del suo esponente. Per esempio, $128=2^7$ richiede otto bit e si scrive $10000000$.
:::

## Codifica in complemento a due

:::definizione{#complemento-a-due titolo="Interpretazione in complemento a due"}
Per rappresentare anche i numeri negativi con $n$ bit, la codifica più usata è il **complemento a due**. I bit hanno gli stessi pesi della lettura senza segno, tranne il bit più significativo, che ha peso negativo $-2^{n-1}$ invece di $2^{n-1}$. Su $4$ bit i pesi sono $-8$, $4$, $2$, $1$, quindi $1011$ vale $-8+2+1=-5$ e $0101$ vale $4+1=5$. In generale il valore con segno $T$ è
$$
T=-b_{n-1}2^{n-1}+\sum_{i=0}^{n-2} b_i2^i .
$$
Se il bit più significativo è $0$, il valore è fra $0$ e $2^{n-1}-1$. Se è $1$, il valore è negativo, fra $-2^{n-1}$ e $-1$; per questo si chiama anche **bit di segno**. Su $4$ bit i valori vanno da $-8$ a $7$. I valori negativi sono uno in più di quelli positivi, perché fra le parole con bit di segno $0$ c’è anche lo zero. Per $n=1$ la somma non ha termini e vale $0$.
:::

::::teorema{titolo="Conversione fra valore con segno e parola"}
Sia $x$ un intero rappresentabile in complemento a due su $n$ bit. Se $x\ge 0$, la sua parola è la scrittura binaria di $x$ su $n$ bit. Se $x<0$, la sua parola è la scrittura binaria su $n$ bit del numero positivo $x+2^n$. Nel verso opposto, per trovare il valore di una parola si legge il suo valore senza segno $U$ e si sottrae $2^n$ quando il primo bit è $1$.

:::dimostrazione
Per la stessa parola, la differenza fra valore senza segno e valore con segno viene dal solo bit più significativo. Il suo peso cambia da $2^{n-1}$ a $-2^{n-1}$, quindi $U-T=b_{n-1}2^n$. Se $T$ è negativo, il primo bit è $1$, perciò $U=T+2^n$. Se $T$ è nullo o positivo, il primo bit è $0$ e i due valori coincidono. La codifica di $U$ senza segno è univoca, quindi la codifica con segno è a sua volta univoca.
:::
::::

:::esempio{titolo="Codificare un valore negativo"}
Per rappresentare $-34$ su $8$ bit si calcola $-34+2^8=222$. Poiché $222=128+64+16+8+4+2$, la parola è $11011110$. La verifica con i pesi con segno dà
$$
-128+64+16+8+4+2=-34.
$$
La stessa parola vale $222$ senza segno. La differenza $222-(-34)=256$ è proprio $2^8$, come afferma il teorema.
:::

:::osservazione
Su $8$ bit in complemento a due i valori vanno da $-128$ a $127$. L’opposto di $-128$ è $128$, che supera il massimo, quindi non si può scrivere su $8$ bit. Per questo il valore assoluto di $-128$ richiede una parola più larga.
:::

## Somma su larghezza fissa ed estensione

::::teorema{#somma-su-n-bit titolo="Somma modulo una potenza di due"}
La somma di due parole di $n$ bit può richiedere $n+1$ bit. Il calcolatore conserva soltanto gli $n$ bit a destra e scarta il riporto finale. Su $4$ bit, $1100+0101$ dà $10001$, e scartando il bit a sinistra resta $0001$. Senza segno la somma esatta è $12+5=17$ e il valore conservato è $1$, cioè il resto della divisione di $17$ per $16=2^4$. In generale, il valore senza segno della parola conservata è il resto della divisione della somma esatta per $2^n$; questo resto si chiama somma **modulo** $2^n$. La stessa regola vale quando gli operandi sono letti in complemento a due.

:::dimostrazione
Le cifre conservate hanno indici da $0$ a $n-1$. Ogni cifra scartata ha indice almeno $n$, quindi il suo contributo è un multiplo di $2^n$. La somma dei pesi conservati è fra $0$ e $2^n-1$, perciò rappresenta il resto. Passare dal valore senza segno al valore con segno di ciascun operando modifica l’addendo di zero oppure di $-2^n$, quantità che lasciano invariato il resto.
:::
::::

:::definizione{titolo="Overflow della somma"}
Si ha **overflow** quando il risultato esatto di una somma non è rappresentabile con gli $n$ bit del formato, e quindi la parola conservata non contiene il risultato corretto. Senza segno, l’overflow si riconosce dal riporto oltre l’ultima posizione. In complemento a due si riconosce dai bit di segno, perché i due addendi hanno lo stesso bit di segno e il risultato ha il bit di segno opposto.

La regola per il complemento a due segue da tre casi. Se gli addendi hanno segno diverso, la somma è compresa fra i due e quindi è rappresentabile. Se sono entrambi non negativi e la somma supera il massimo, la parola conservata ha bit di segno $1$ e si legge come un numero negativo. Se sono entrambi negativi e la somma scende sotto il minimo, la parola conservata ha bit di segno $0$ e si legge come un numero non negativo.
:::

:::esempio{titolo="Interpretare le stesse parole dopo la somma"}
Su quattro bit la somma di $0111$ e $0011$ è $1010$, senza riporto finale. Senza segno le parole valgono $7$ e $3$ e il risultato vale $10$, che è corretto perché l’intervallo va da $0$ a $15$. In complemento a due gli addendi valgono ancora $7$ e $3$, ma il massimo rappresentabile è $7$. La parola $1010$ si legge $-8+2=-6$, che non è la somma corretta, quindi c’è overflow. I due addendi hanno bit di segno $0$ e il risultato ha bit di segno $1$, come prevede la regola.
:::

::::teorema{#estensione-di-segno titolo="Estensione di segno"}
Capita di dover copiare un numero da una parola di $n$ bit a una parola più larga, di $m$ bit, senza cambiarne il valore. In complemento a due si antepongono $m-n$ copie del bit più significativo, e questa operazione conserva il valore. Nel formato senza segno si antepongono zeri.

:::dimostrazione
Sia $s$ il bit più significativo della parola iniziale. I bit già presenti conservano le posizioni da $0$ a $n-1$. Se si chiamano $U_n$ e $U_m$ i valori senza segno delle due parole, i bit aggiunti valgono complessivamente $s(2^m-2^n)$, poiché $\sum_{i=n}^{m-1}2^i=2^m-2^n$. Nella lettura con segno, il valore della parola estesa è
$$
\begin{aligned}
T_m &= U_m-s2^m \\
    &= U_n+s(2^m-2^n)-s2^m \\
    &= U_n-s2^n=T_n .
\end{aligned}
$$
La procedura senza segno aggiunge soltanto contributi nulli e perciò mantiene $U_n$.
:::
::::

:::esempio{titolo="Allargare una parola negativa"}
La parola a quattro bit $1011$ ha valore con segno $-8+2+1=-5$. Anteponendo due copie del bit iniziale $1$ si ottiene $111011$. Il peso del nuovo bit più significativo è $-32$ e i bit a $1$ nelle altre posizioni contribuiscono $16+8+2+1$, quindi la somma resta $-5$.

Se la stessa parola iniziale viene letta senza segno, il valore è $8+2+1=11$. Anteponendo due zeri si ottiene $001011$, che conserva $11$. In questo caso le due estensioni producono sequenze diverse perché il primo bit iniziale pesa $8$ nella lettura senza segno e $-8$ nella lettura con segno. Per una parola che comincia con zero, entrambe le estensioni antepongono zeri e il valore coincide nei due formati.
:::

## Frazioni binarie e virgola fissa

:::definizione{#frazioni-binarie titolo="Pesi frazionari in base due"}
Nella **parte frazionaria** di una scrittura binaria il primo bit a destra della virgola ha peso $2^{-1}$. Il bit successivo ha peso $2^{-2}$. Procedendo verso destra il peso si dimezza a ogni posizione, come nella parte intera. Per esempio
$$
(0{,}101)_2=\frac{1}{2}+\frac{0}{4}+\frac{1}{8}
=\frac{5}{8}.
$$
Per trovare i bit di una frazione $r$ con $0\leq r<1$ si raddoppia più volte. A ogni raddoppio la parte intera del risultato, $0$ oppure $1$, è il bit successivo, e la parte dopo la virgola è il numero da raddoppiare al passo seguente. Per $r=0{,}625$ i passi sono tre.

- $2\cdot 0{,}625=1{,}25$, quindi il primo bit è $1$ e resta $0{,}25$.
- $2\cdot 0{,}25=0{,}5$, quindi il secondo bit è $0$ e resta $0{,}5$.
- $2\cdot 0{,}5=1$, quindi il terzo bit è $1$ e resta $0$.

Il resto è zero, quindi il procedimento termina e $0{,}625=(0{,}101)_2$, in accordo con $\dfrac{5}{8}=0{,}625$. Il metodo funziona perché raddoppiare sposta la virgola binaria di una posizione verso destra, e così il primo bit frazionario diventa la parte intera. Se il resto non diventa mai zero, la scrittura binaria ha infiniti bit. Dopo $f$ passi la parte non ancora scritta vale meno di $2^{-f}$.
:::

::::teorema{titolo="Condizione per una scrittura binaria finita"}
Non tutte le frazioni hanno una scrittura binaria finita. Sia $\dfrac{a}{d}$ una frazione ridotta ai minimi termini con interi $a\ge 0$ e $d\ge 1$. Il valore ammette una scrittura binaria con un numero finito di bit frazionari se e solo se il denominatore $d$ è una potenza di $2$, compreso $1=2^0$.

:::dimostrazione
Se la scrittura ha $f$ bit frazionari, moltiplicando il valore per $2^f$ si ottiene un intero $K$. Dunque $\dfrac{a}{d}=\dfrac{K}{2^f}$. Poiché $a$ e $d$ sono coprimi, $d$ divide $2^f$, quindi è una potenza di $2$.

Viceversa, se $d=2^f$, si scrive $a$ in base $2$ e si sposta la virgola di $f$ posizioni a sinistra. Se occorrono cifre aggiuntive si antepongono zeri. Lo spostamento divide ogni peso per $2^f$, ottenendo esattamente il valore richiesto.
:::
::::

:::esempio{titolo="Dimezzamenti e denominatore ridotto"}
La frazione $\dfrac{3}{8}$ ha denominatore $2^3$, quindi basta scrivere $3$ in binario, cioè $11$, e spostare la virgola di tre posizioni verso sinistra. Si ha $(0{,}011)_2=\dfrac{1}{4}+\dfrac{1}{8}=\dfrac{3}{8}$. Il numero decimale $0{,}1$ è la frazione $\dfrac{1}{10}$. Poiché $10=2\cdot 5$ non è una potenza di $2$, la sua scrittura binaria ha infiniti bit frazionari. Per questo un calcolatore, che dispone di un numero finito di bit, conserva di $0{,}1$ soltanto un valore approssimato.
:::

:::definizione{#virgola-fissa titolo="Formato binario in virgola fissa"}
In **virgola fissa** si stabilisce una volta per tutte quanti bit della parola stanno dopo la virgola. Se i bit frazionari sono $f$, la parola di $n$ bit si legge prima come intero $K$, con o senza segno secondo il formato, e il suo valore è $\dfrac{K}{2^f}$. Con $n=4$ e $f=2$ la parola $0111$ vale $K=7$ come intero e $\dfrac{7}{4}=1{,}75$ in virgola fissa, cioè $(01{,}11)_2$. Due valori consecutivi distano $2^{-f}$, perché gli interi corrispondenti differiscono di $1$; questa distanza è il **passo** del formato.
:::

:::esempio{titolo="Intervallo e passo del formato"}
Una parola di sei bit in complemento a due con tre bit frazionari usa gli interi da $-32$ a $31$ con fattore $\dfrac{1}{8}$. Quindi i valori vanno da $-4$ a $\dfrac{31}{8}$ a passi di $\dfrac{1}{8}$. La parola $110101$ ha $U=53$ e $K=53-64=-11$, perciò il valore rappresentato è $-\dfrac{11}{8}=-1{,}375$.
:::

## Virgola mobile e arrotondamento

:::definizione{#virgola-mobile titolo="Forma binaria normalizzata"}
La **virgola mobile** è la notazione scientifica in base due. In base dieci si scrive $4250=4{,}25\cdot 10^3$, con una sola cifra diversa da zero prima della virgola e una potenza di dieci. In base due la sola cifra diversa da zero è $1$, quindi un numero positivo si scrive nella forma
$$
x=(1{,}b_1\cdots b_{p-1})_2\cdot 2^e .
$$
Questa forma si dice **normalizzata**. Il fattore $(1{,}b_1\cdots b_{p-1})_2$ è il **significando**, compreso fra $1$ incluso e $2$ escluso, e l’intero $e$ è l’**esponente**. La **precisione** $p\geq 2$ è il numero di bit del significando, compreso l’$1$ iniziale. Per esempio $(110{,}01)_2=(1{,}1001)_2\cdot 2^2$, perché la virgola si sposta di due posizioni verso sinistra. Per un numero positivo minore di $1$ la virgola si sposta verso destra fino al primo bit $1$ e l’esponente è negativo. In $(0{,}0011)_2$ il primo bit $1$ è al terzo posto dopo la virgola, perciò $(0{,}0011)_2=(1{,}1)_2\cdot 2^{-3}$; con precisione $p=4$ il significando si scrive $1{,}100$. In questo capitolo l’esponente può essere un intero qualsiasi e lo zero si tratta a parte.
:::

:::osservazione
Con precisione $p$ i numeri rappresentabili non sono tutti i numeri reali, ma una griglia di valori. Con esponente $e$ fissato, due significandi consecutivi distano $2^{-(p-1)}$, quindi due valori consecutivi fra $2^e$ e $2^{e+1}$ distano $2^{e-(p-1)}$. Quando l’esponente aumenta di uno, la distanza raddoppia. Per $p=4$ i valori fra $4$ e $8$ sono $4$; $4{,}5$; $5$; $5{,}5$ e così via, a passi di $0{,}5$, mentre fra $8$ e $16$ il passo è $1$.
:::

:::definizione{#arrotondamento titolo="Arrotondamento al più vicino con parità"}
Un numero che non appartiene alla griglia si sostituisce con un valore rappresentabile vicino, e questa operazione è l’**arrotondamento**. Siano $L$ e $H$ i due valori rappresentabili consecutivi con $L<x<H$. L’**arrotondamento al più vicino** sceglie quello dei due che dista meno da $x$. Con $p=4$, il numero $5{,}6$ sta fra $5{,}5$ e $6$ ed è più vicino a $5{,}5$, quindi si arrotonda a $5{,}5$. Un valore già rappresentabile resta invariato, e l’errore commesso è al più metà della distanza $H-L$.

Se $x$ è esattamente a metà fra $L$ e $H$, si sceglie il valore il cui significando termina con il bit $0$. La regola si chiama *ties to even*, cioè «in caso di parità, al pari». Di due significandi consecutivi uno termina con $0$ e l’altro con $1$, quindi la scelta è sempre determinata.
:::

:::esempio{titolo="Punto medio fra due valori rappresentabili"}
Siano $p=4$ e $x=(101{,}11)_2=5{,}75$. Si normalizza
$$
x=(1{,}0111)_2\cdot 2^2 .
$$
I valori rappresentabili adiacenti sono $L=(1{,}011)_2\cdot 2^2=5{,}5$ e $H=(1{,}100)_2\cdot 2^2=6$. Si calcola $x-L=H-x=0{,}25$, perciò si applica il criterio di parità. Il significando di $H$ termina con $0$, quindi il valore arrotondato è $6$.

![Retta con 5,5 e 6 ai lati di 5,75. Il valore scelto dal criterio di parità è 6.](/immagini/informatica/rappresentazione-numeri/arrotondamento-it.png)

Nell’intervallo considerato il passo è $0{,}5$. Il valore esatto è a metà del passo, quindi l’errore assoluto dell’arrotondamento è $0{,}25$.
:::

:::attenzione
L’arrotondamento può cambiare anche l’esponente. Con $p=3$, il punto medio fra $(1{,}11)_2\cdot2^2=7$ e $(1{,}00)_2\cdot2^3=8$ è $7{,}5$. Il significando di $8$ ha ultimo bit $0$, perciò il valore arrotondato è $8$ e l’esponente passa da $2$ a $3$.
:::
