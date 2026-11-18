---
titolo: Rappresentazione dei numeri
sommario: Come leggere e costruire codifiche numeriche, riconoscere un overflow e calcolare l’arrotondamento in virgola mobile.
---

## Basi e pesi delle cifre

:::definizione{#notazione-posizionale titolo="Notazione posizionale"}
In una **notazione posizionale** ogni cifra contribuisce al valore del numero con un peso che dipende dalla sua posizione. Sia $b$ un intero maggiore o uguale a $2$ e sia $k\geq 1$ il numero di cifre. Per ogni indice $i$ con $0\leq i<k$, la cifra $d_i$ è un intero con $0\leq d_i<b$. L’indice $0$ identifica la posizione a destra. Il valore della scrittura $(d_{k-1}\cdots d_0)_b$ è
$$
(d_{k-1}\cdots d_0)_b = \sum_{i=0}^{k-1} d_i b^i .
$$
Il pedice $b$ indica la **base**. Il peso della cifra a destra è $1$ perché $b^0=1$. Ogni spostamento di una posizione verso sinistra moltiplica il peso per $b$, quindi la stessa cifra vale diversamente in due posizioni diverse.
:::

:::esempio{titolo="Dal binario al decimale"}
In base $2$ le cifre $0$ e $1$ si chiamano **bit**, da *binary digit*. Nella parola $101101$ l’indice a sinistra è $5$ perché ci sono sei posizioni a partire da $0$.

![Sei posizioni con indici da 5 a 0, bit 1 0 1 1 0 1 e pesi da 32 a 1.](/immagini/informatica/rappresentazione-numeri/pesi-binari-it.png)

Poiché ogni cifra $0$ moltiplica il peso della sua posizione per zero, contribuiscono solo i quattro bit a $1$.
$$
\begin{aligned}
(101101)_2
  &= 1\cdot 2^5 + 0\cdot 2^4 + 1\cdot 2^3 \\
  &\quad + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0 \\[6pt]
  &= 32+8+4+1 = 45 .
\end{aligned}
$$
L’addendo $1$ proviene dal bit di indice $0$. Poiché tutti i pesi a sinistra sono pari, quel bit da solo determina la parità dell’intero senza segno.
:::

:::osservazione
La scrittura $(110)_2$ vale $4+2=6$, mentre $(110)_{10}$ vale $100+10=110$. Specificare la base elimina l’ambiguità quando le stesse cifre sono ammesse in più basi. Uno zero iniziale aggiunge un peso moltiplicato per $0$, quindi $(00110)_2$ vale ancora $6$. Le due scritture hanno lunghezze diverse, una proprietà che conta quando si specifica quante posizioni ha una parola.
:::

## Dall’intero alle cifre

::::teorema{#conversione-interi titolo="Divisioni successive per la base"}
Sia $N$ un intero positivo. Dividendo $N$ per la base $b$ si ottengono un quoziente intero $q$ e un resto $r$ con
$$
N=bq+r,\qquad 0\leq r<b .
$$
Il resto è la cifra di indice $0$. Si ripete la divisione sul quoziente fino a ottenere quoziente zero. I resti, letti nell’ordine inverso a quello di calcolo, danno l’unica scrittura di $N$ in base $b$ priva di zeri iniziali. L’intero $0$ si scrive con la cifra $0$.

:::dimostrazione
La divisione euclidea determina univocamente quoziente e resto. Nella scrittura posizionale, i termini con indice almeno $1$ sono divisibili per $b$, quindi il termine di indice $0$ coincide con il resto. Il quoziente ha per cifre quelle rimaste, con gli indici diminuiti di uno.

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
Il primo resto vale $0$ e occupa la posizione di peso $1$. L’ultimo vale $1$ e occupa la posizione di peso $16$. La parola ottenuta è $(11010)_2$. La decodifica restituisce $16+8+2=26$, quindi le due conversioni concordano.
:::

:::osservazione
Una seconda procedura legge le cifre di una parola a partire da sinistra. Se $v$ è il valore del prefisso già letto e $d$ la nuova cifra, il nuovo prefisso ha valore $bv+d$. Infatti, con l’aggiunta della cifra a destra, ciascuna cifra del prefisso precedente aumenta di uno il proprio indice. Applicando la regola a $(102)_3$, si ottengono in sequenza $1$, $3$ e $11$. La scrittura estesa dà $1\cdot3^2+0\cdot3+2=11$.
:::

## Esadecimale e gruppi di quattro bit

:::definizione{#esadecimale titolo="Base esadecimale"}
La **base esadecimale** è la base $16$. Le cifre da $0$ a $9$ conservano il loro valore e $A,B,C,D,E,F$ denotano rispettivamente $10,11,12,13,14,15$. Poiché $16=2^4$, quattro bit hanno $16$ configurazioni e rappresentano esattamente le sedici cifre esadecimali.
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
Nella conversione di una parte intera si allineano i gruppi al bit di peso $1$. Aggiungere tre zeri a destra di $1$ produrrebbe $1000$, che in binario vale $8$. Aggiungerli a sinistra produce invece $0001$, che conserva il valore $1$.
:::

## Interi senza segno e larghezza

:::definizione{#interi-senza-segno titolo="Interi senza segno su n bit"}
Una parola di $n$ bit è una sequenza di lunghezza fissata $n$, con $n\geq 1$. Chiamato $b_i$ il bit di indice $i$, il valore **senza segno** $U$ è
$$
U=\sum_{i=0}^{n-1} b_i2^i .
$$
I valori possibili sono tutti gli interi da $0$ a $2^n-1$. Il minimo ha tutti i bit a zero. Il massimo ha tutti i bit a uno e vale $1+2+\dots+2^{n-1}=2^n-1$. La rappresentazione è univoca perché la scrittura posizionale di ciascun valore è univoca a meno di zeri a sinistra, e la larghezza impone quanti zeri inserire.
:::

:::esempio{titolo="Dimensionare una parola"}
Il contatore di un apparato deve contenere i valori interi da $0$ a $1000$. Su $9$ bit il massimo disponibile è $2^9-1=511$, perciò la larghezza è insufficiente. Su $10$ bit il massimo sale a $2^{10}-1=1023$, quindi $1000$ è rappresentabile. Poiché i massimi crescono con $n$, **dieci bit** sono il minimo. Il numero di stati richiesti è $1001$ perché il contatore include anche $0$. I $2^{10}=1024$ stati disponibili lasciano $23$ configurazioni inutilizzate.
:::

:::osservazione
Per un intero positivo $N$, la larghezza minima $n$ soddisfa $2^{n-1}\leq N<2^n$. La disuguaglianza a sinistra esprime la necessità della posizione di peso $2^{n-1}$. La disuguaglianza a destra garantisce la rappresentabilità su $n$ bit. Per esempio, $128=2^7$ richiede otto bit e si scrive $10000000$.
:::

## Codifica in complemento a due

:::definizione{#complemento-a-due titolo="Interpretazione in complemento a due"}
In una parola di $n$ bit, la codifica in **complemento a due** attribuisce il peso $-2^{n-1}$ al bit più significativo e conserva i pesi positivi dei bit restanti. Il valore con segno $T$ è
$$
T=-b_{n-1}2^{n-1}+\sum_{i=0}^{n-2} b_i2^i .
$$
Per $n=1$ la somma è vuota, quindi vale $0$. Se il bit iniziale è $0$, il valore è fra $0$ e $2^{n-1}-1$. Se è $1$, il valore è fra $-2^{n-1}$ e $-1$. L’intervallo comprende dunque un valore negativo in più dei valori strettamente positivi, perché una configurazione con bit iniziale $0$ rappresenta lo zero.
:::

::::teorema{titolo="Conversione fra valore con segno e parola"}
Sia $x$ un intero nell’intervallo rappresentabile in complemento a due su $n$ bit. La parola corrispondente è la codifica senza segno di $x$ se $x\ge 0$ e di $x+2^n$ se $x<0$. Per decodificare, si legge il valore senza segno $U$ e si sottrae $2^n$ quando il primo bit è $1$.

:::dimostrazione
Per la stessa parola, la differenza fra valore senza segno e valore con segno viene dal solo bit più significativo. Il suo peso cambia da $2^{n-1}$ a $-2^{n-1}$, quindi $U-T=b_{n-1}2^n$. Se $T$ è negativo, il primo bit è $1$, perciò $U=T+2^n$. Se $T$ è nullo o positivo, il primo bit è $0$ e i due valori coincidono. La codifica di $U$ senza segno è univoca, quindi la codifica con segno è a sua volta univoca.
:::
::::

:::esempio{titolo="Codificare un valore negativo"}
Per rappresentare $-34$ su $8$ bit si calcola $-34+2^8=222$. Poiché $222=128+64+16+8+4+2$, la parola è $11011110$. La verifica con i pesi con segno dà
$$
-128+64+16+8+4+2=-34.
$$
La stessa parola vale $222$ senza segno. La differenza $222-(-34)=256$ è proprio $2^8$, quindi entrambe le letture sono coerenti con la loro regola.
:::

:::osservazione
Il minimo su $8$ bit in complemento a due è $-128$ e il massimo è $127$. Perciò il valore opposto di $-128$ richiede una larghezza maggiore. Il caso è rilevante quando si calcola il valore assoluto mantenendo lo stesso formato di destinazione.
:::

## Somma su larghezza fissa ed estensione

::::teorema{#somma-su-n-bit titolo="Somma modulo una potenza di due"}
Il resto modulo $m$ è il resto della divisione euclidea per l’intero positivo $m$. Se si sommano due parole di $n$ bit e si conservano le $n$ posizioni meno significative, il valore senza segno della parola ottenuta è il resto della somma dei valori degli operandi modulo $2^n$. Questo vale anche quando gli operandi sono interpretati in complemento a due.

:::dimostrazione
Le cifre conservate hanno indici da $0$ a $n-1$. Ogni cifra scartata ha indice almeno $n$, quindi il suo contributo è un multiplo di $2^n$. La somma dei pesi conservati è fra $0$ e $2^n-1$, perciò rappresenta il resto. Passare dal valore senza segno al valore con segno di ciascun operando modifica l’addendo di zero oppure di $-2^n$, quantità che lasciano invariato il resto.
:::
::::

:::definizione{titolo="Overflow della somma"}
Si ha **overflow** se la somma matematica cade fuori dall’intervallo rappresentabile nel formato degli operandi. Senza segno, l’overflow si riconosce dal riporto oltre l’ultima posizione. In complemento a due, si riconosce quando gli addendi hanno lo stesso bit di segno e il risultato ridotto ha bit di segno opposto.

Due addendi di segno diverso hanno una somma compresa fra i due addendi, quindi il valore resta rappresentabile. La somma di due non negativi che supera il massimo va da $2^{n-1}$ a $2^n-2$, e il suo resto ha bit iniziale $1$. La somma di due negativi che scende sotto il minimo va da $-2^n$ a $-2^{n-1}-1$. Aggiungendo $2^n$ si ottiene un resto da $0$ a $2^{n-1}-1$, con bit iniziale $0$.
:::

:::esempio{titolo="Interpretare le stesse parole dopo la somma"}
Su quattro bit, sommare $0111$ e $0011$ produce $1010$. Senza segno si calcola $7+3=10$, valore che appartiene all’intervallo da $0$ a $15$. In complemento a due la somma matematica è ancora $10$, ma il massimo è $7$. La parola finale vale $10-16=-6$ secondo quel formato, quindi si verifica overflow con segno. La regola di conservazione delle cifre descrive il modello matematico della parola, mentre il comportamento di un’operazione in un linguaggio dipende dalle regole del tipo e dell’operatore.
:::

::::teorema{#estensione-di-segno titolo="Estensione di segno"}
Per passare da $n$ a $m$ bit con $m>n$ in complemento a due, si antepongono $m-n$ copie del bit più significativo. Questa operazione conserva il valore. Per passare alla stessa larghezza nel formato senza segno si antepongono zeri.

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
Per risalire alle cifre a partire da una frazione $r$ compresa fra $0$ incluso e $1$ escluso, si raddoppia $r$. La parte intera di $2r$ è il primo bit e la parte frazionaria è il residuo su cui si ripete il procedimento. Se $a_1$ è la parte intera e $r_1$ è il residuo, l’uguaglianza $2r=a_1+r_1$ dà $r=a_1 2^{-1}+r_1 2^{-1}$. Alla seconda iterazione, scrivendo $2r_1=a_2+r_2$, si ottiene
$$
r=a_1 2^{-1}+a_2 2^{-2}+r_2 2^{-2} .
$$
A ogni iterazione il nuovo bit occupa la posizione immediatamente a destra del precedente. Dopo $f$ iterazioni il contributo ancora da sviluppare è inferiore a $2^{-f}$ perché il residuo è inferiore a $1$. Quando un residuo vale zero, i bit già ottenuti danno il valore esatto.
:::

::::teorema{titolo="Condizione per una scrittura binaria finita"}
Sia $\dfrac{a}{d}$ una frazione ridotta ai minimi termini con interi $a\ge 0$ e $d\ge 1$. Il valore ammette una scrittura binaria con un numero finito di bit frazionari se e solo se il denominatore $d$ è una potenza di $2$, compreso $1=2^0$.

:::dimostrazione
Se la scrittura ha $f$ bit frazionari, moltiplicando il valore per $2^f$ si ottiene un intero $K$. Dunque $\dfrac{a}{d}=\dfrac{K}{2^f}$. Poiché $a$ e $d$ sono coprimi, $d$ divide $2^f$, quindi è una potenza di $2$.

Viceversa, se $d=2^f$, si scrive $a$ in base $2$ e si sposta la virgola di $f$ posizioni a sinistra. Se occorrono cifre aggiuntive si antepongono zeri. Lo spostamento divide ogni peso per $2^f$, ottenendo esattamente il valore richiesto.
:::
::::

:::esempio{titolo="Dimezzamenti e denominatore ridotto"}
La frazione $\dfrac{3}{8}$ ha denominatore $2^3$, quindi basta partire da $11$ e collocare tre posizioni dopo la virgola. Si ha $(0{,}011)_2=\dfrac{1}{4}+\dfrac{1}{8}=\dfrac{3}{8}$. Per $0{,}1$ in base dieci, la frazione ridotta è $\dfrac{1}{10}$. Poiché $10$ ha un fattore $5$, la sua espansione binaria richiede infiniti bit frazionari. Un formato con precisione finita rappresenterà un valore approssimato.
:::

:::definizione{#virgola-fissa titolo="Formato binario in virgola fissa"}
In **virgola fissa** il numero intero $f\geq 0$ di bit frazionari è una proprietà del formato. Una parola di $n$ bit si interpreta prima come intero $K$, con o senza segno secondo il formato, poi si divide $K$ per $2^f$. La differenza fra due valori consecutivi è $2^{-f}$ perché gli interi corrispondenti differiscono di $1$.
:::

:::esempio{titolo="Intervallo e passo del formato"}
Una parola di sei bit in complemento a due con tre bit frazionari usa gli interi da $-32$ a $31$ con fattore $\dfrac{1}{8}$. Quindi i valori vanno da $-4$ a $\dfrac{31}{8}$ a passi di $\dfrac{1}{8}$. La parola $110101$ ha $U=53$ e $K=53-64=-11$, perciò il valore rappresentato è $-\dfrac{11}{8}=-1{,}375$.
:::

## Virgola mobile e arrotondamento

:::definizione{#virgola-mobile titolo="Forma binaria normalizzata"}
Una forma binaria **normalizzata** per un numero positivo usa un significando compreso fra $1$ incluso e $2$ escluso, moltiplicato per una potenza di $2$. Nel modello didattico a precisione $p$, con $p\geq 2$, un valore positivo rappresentabile ha forma
$$
x=(1{,}b_1\cdots b_{p-1})_2\cdot 2^e .
$$
Il numero $p$ conta anche il bit iniziale $1$ del significando. L’intero $e$ si chiama **esponente**. In questo modello gli esponenti sono liberi e lo zero è rappresentato a parte. Spostare la virgola per avere un solo bit prima di essa modifica l’esponente in modo che il prodotto conservi il valore. Per esempio, $(110{,}01)_2=(1{,}1001)_2\cdot 2^2$. Per numeri positivi minori di $1$, la virgola si sposta verso destra fino alla prima cifra $1$, quindi l’esponente è negativo. In $(0{,}0011)_2$ il primo bit a $1$ è al terzo posto dopo la virgola, perciò $(0{,}0011)_2=(1{,}1)_2\cdot 2^{-3}$. A precisione $p=4$ si può scrivere il significando come $1{,}100$, poiché gli zeri aggiunti a destra hanno contributo nullo.
:::

:::osservazione
A esponente $e$ fissato, due significandi consecutivi distano $2^{-(p-1)}$. Quindi due valori consecutivi all’interno della stessa fascia $[2^e,2^{e+1})$ distano $2^{e-(p-1)}$. Al raddoppio della scala, da $e$ a $e+1$, raddoppia anche la distanza. Per $p=4$ il passo fra $4$ e $8$ è $2^{-1}$, mentre il passo da $8$ in poi, fino a $16$, è $1$.
:::

:::definizione{#arrotondamento titolo="Arrotondamento al più vicino con parità"}
Siano $L$ e $H$ i due valori consecutivi rappresentabili immediatamente sotto e sopra un valore positivo $x$ da approssimare. L’**arrotondamento al più vicino** sceglie quello con distanza minore da $x$. Se le distanze coincidono, la regola *ties to even* sceglie il valore il cui ultimo bit del significando è $0$. Un valore già rappresentabile resta invariato. Se il valore cade al di sotto del punto medio aritmetico $\dfrac{L+H}{2}$, la distanza da $L$ è minore della distanza da $H$ e si sceglie $L$. Se cade al di sopra, si sceglie $H$. La differenza fra il valore esatto e quello arrotondato ha quindi modulo al più pari a metà della distanza $H-L$.

Il criterio di parità riguarda i bit del significando, quindi si applica anche a valori che in base dieci presentano una parte frazionaria. Fra due significandi consecutivi con lo stesso esponente, gli ultimi bit sono uno $0$ e uno $1$. Al confine fra esponenti il significando passa da $1{,}11\ldots 1$ a $1{,}00\ldots 0$, che ha ultimo bit $0$.
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
