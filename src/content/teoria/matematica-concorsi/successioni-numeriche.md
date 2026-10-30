---
titolo: Successioni e serie numeriche
sommario: Come si trova la regola di una successione nei test attitudinali (differenze, rapporti, termini intrecciati, quadrati, cubi, Fibonacci), come si calcolano termine generale e somma delle progressioni aritmetiche e geometriche e come si risolvono le serie con lettere e le tabelle con il numero mancante.
---

## Successioni e regola di formazione

:::definizione{#successione titolo="Successione"}
Una **successione** è un elenco ordinato di numeri, detti **termini**. Ogni termine occupa una posizione. Il primo termine si indica con $a_1$, il secondo con $a_2$ e in generale il termine di posto $n$ con $a_n$. Nella successione
$$
2,\ 5,\ 8,\ 11,\ 14,\ \dots
$$
si ha $a_1 = 2$, $a_3 = 8$ e $a_5 = 14$. I puntini indicano che l'elenco prosegue con la stessa regola. Nei test attitudinali un elenco di questo tipo si chiama spesso **serie numerica**, e il quesito chiede il termine che segue oppure un termine mancante in mezzo all'elenco.
:::

:::definizione{#regola-di-formazione titolo="Regola di formazione"}
La **regola di formazione** di una successione è l'operazione che produce ogni termine a partire dai precedenti, oppure a partire dalla sua posizione $n$. La successione $2, 5, 8, 11, \dots$ si può descrivere in due modi.

- Ogni termine è il precedente più $3$, cioè $a_{n+1} = a_n + 3$ con $a_1 = 2$. Questa scrittura si chiama **forma ricorsiva**.
- Il termine di posto $n$ è $a_n = 3n - 1$; per esempio $a_4 = 3 \cdot 4 - 1 = 11$. Questa scrittura si chiama **termine generale**.

La forma ricorsiva dà il termine successivo a quelli scritti. Il termine generale dà invece un termine lontano senza scrivere i precedenti, come $a_{50} = 3 \cdot 50 - 1 = 149$.
:::

:::osservazione{#ordine-dei-controlli titolo="Come si cerca la regola"}
Le regole usate nei quiz si riconoscono con alcuni controlli, ordinati dal più semplice al più complesso.

- Se i termini crescono o diminuiscono in modo regolare, si calcolano le differenze tra termini consecutivi.
- Se i termini crescono sempre più rapidamente, si calcolano i rapporti, oppure si confrontano i termini con i quadrati e con i cubi.
- Se i termini salgono e scendono senza un andamento regolare, si separano i termini di posto dispari da quelli di posto pari.
- Se i controlli precedenti non danno una regola, si verifica se ogni termine è la somma dei due precedenti oppure se si alternano due operazioni.

Una regola è accettabile solo se vale per *tutti* i termini dati. Nella successione $1, 2, 4, 7, 11$ la regola "ogni termine è il doppio del precedente" vale per i primi tre termini e non per il quarto, mentre le differenze $1, 2, 3, 4$ danno una regola che vale per tutti, e il termine successivo è $11 + 5 = 16$.
:::

## Differenze e rapporti

:::definizione{#differenze titolo="Differenze tra termini consecutivi"}
La **differenza** tra due termini consecutivi è $a_{n+1} - a_n$, cioè la quantità che si aggiunge a un termine per ottenere il successivo. Si scrive sotto la coppia di termini a cui si riferisce:
$$
\begin{array}{ccccccc}
7 & & 11 & & 15 & & 19 \\
& +4 & & +4 & & +4 &
\end{array}
$$
Nella successione $7, 11, 15, 19, \dots$ le differenze valgono tutte $4$, quindi il termine successivo è $19 + 4 = 23$. Nella successione $50, 43, 36, 29, \dots$ le differenze valgono tutte $-7$, quindi il termine successivo è $29 - 7 = 22$.
:::

:::teorema{#differenze-seconde titolo="Differenze delle differenze"}
Quando le differenze non sono tutte uguali, se ne calcolano a loro volta le differenze, dette **differenze seconde**, e le si scrive in una terza riga. Se le differenze seconde sono costanti, la successione si prolunga a partire dall'ultima riga. Nella successione $2, 5, 10, 17, 26, \dots$ si ottiene lo schema
$$
\begin{array}{ccccccccc}
2 & & 5 & & 10 & & 17 & & 26 \\
& 3 & & 5 & & 7 & & 9 & \\
& & 2 & & 2 & & 2 & &
\end{array}
$$
La differenza successiva è quindi $9 + 2 = 11$, e il termine successivo è $26 + 11 = 37$. Il metodo è corretto perché ogni termine è il precedente più la sua differenza, e ogni differenza è la precedente più $2$. Come controllo, i termini sono i numeri $n^2 + 1$, e infatti $6^2 + 1 = 37$.
:::

:::esempio{titolo="Differenze che seguono un'altra regola"}
Le differenze possono formare una successione di un altro tipo. Nella successione $3, 4, 6, 10, 18, \dots$ le differenze sono $1, 2, 4, 8$, e ognuna è il doppio della precedente. La differenza successiva è perciò $16$, e il termine successivo è $18 + 16 = 34$.
:::

:::definizione{#rapporti titolo="Rapporti tra termini consecutivi"}
Il **rapporto** tra due termini consecutivi è $\dfrac{a_{n+1}}{a_n}$, cioè il numero per cui si moltiplica un termine per ottenere il successivo. Se i rapporti sono tutti uguali, ogni termine è il precedente moltiplicato per lo stesso numero. Nella successione $3, 6, 12, 24, \dots$ ogni termine è il doppio del precedente, quindi il termine successivo è $48$. Nella successione $400, 200, 100, 50, \dots$ il rapporto vale $\dfrac{1}{2}$, quindi il termine successivo è $25$. In queste successioni le differenze non sono costanti, perché ognuna è il doppio, oppure la metà, della precedente; la regola si trova quindi con i rapporti.
:::

## Operazioni miste e successioni intrecciate

:::definizione{#operazioni-miste titolo="Successioni con operazioni miste"}
In una successione con **operazioni miste** ogni termine si ottiene dal precedente con due operazioni, eseguite sempre nello stesso ordine oppure alternate.

- Nella successione $2, 5, 11, 23, 47, \dots$ ogni termine è il doppio del precedente più $1$, infatti $2 \cdot 2 + 1 = 5$, $5 \cdot 2 + 1 = 11$ e $11 \cdot 2 + 1 = 23$. Il termine successivo è $47 \cdot 2 + 1 = 95$.
- Nella successione $4, 8, 5, 10, 7, 14, \dots$ si alternano le operazioni "moltiplicare per $2$" e "sottrarre $3$". Il termine $14$ si ottiene con una moltiplicazione, quindi il termine successivo si ottiene con la sottrazione e vale $14 - 3 = 11$.

Nella prima successione i rapporti tra termini consecutivi valgono circa $2{,}5$, $2{,}2$, $2{,}09$ e $2{,}04$, quindi sono vicini a $2$ senza essere uguali a $2$. Un andamento di questo tipo indica una moltiplicazione per $2$ seguita da un'addizione.
:::

:::definizione{#successioni-intrecciate titolo="Successioni alternate o intrecciate"}
Una successione è **intrecciata** quando i termini di posto dispari $a_1, a_3, a_5, \dots$ e quelli di posto pari $a_2, a_4, a_6, \dots$ formano due successioni distinte, ciascuna con la sua regola. Si riconosce perché i termini salgono e scendono senza un andamento regolare. Nella successione
$$
3,\ 20,\ 6,\ 17,\ 9,\ 14,\ 12,\ \dots
$$
i termini di posto dispari sono $3, 6, 9, 12$, che crescono di $3$, e quelli di posto pari sono $20, 17, 14$, che diminuiscono di $3$. Il termine successivo occupa l'ottavo posto, che è pari, quindi continua la seconda successione e vale $14 - 3 = 11$.
:::

:::osservazione{#segni-alterni titolo="Successioni a segni alterni"}
Una successione è **a segni alterni** quando i suoi termini sono alternativamente positivi e negativi, come $1, -2, 4, -8, 16, \dots$. In questa successione ogni termine è il precedente moltiplicato per $-2$, quindi il termine successivo è $16 \cdot (-2) = -32$. Un rapporto negativo produce sempre un cambio di segno a ogni passaggio, perché il prodotto di un numero per un numero negativo ha segno opposto al numero di partenza.
:::

## Quadrati, cubi e successione di Fibonacci

:::definizione{#quadrati-e-cubi titolo="Quadrati e cubi"}
I **quadrati perfetti** sono i numeri $n^2$ e i **cubi perfetti** sono i numeri $n^3$, con $n$ numero naturale. I primi sono
$$
\begin{aligned}
&n^2 :\quad 1,\ 4,\ 9,\ 16,\ 25,\ 36,\ 49,\ 64,\ 81,\ 100,\ \dots \\[6pt]
&n^3 :\quad 1,\ 8,\ 27,\ 64,\ 125,\ 216,\ 343,\ \dots
\end{aligned}
$$
Molte successioni dei quiz si ottengono da questi numeri con una piccola modifica. Nella successione $0, 3, 8, 15, 24, \dots$ ogni termine è un quadrato meno $1$, cioè $a_n = n^2 - 1$, e il termine successivo è $36 - 1 = 35$. Nella successione $2, 9, 28, 65, \dots$ ogni termine è un cubo più $1$, cioè $a_n = n^3 + 1$, e il termine successivo è $125 + 1 = 126$. Se i primi quadrati e i primi cubi sono noti a memoria, queste regole si riconoscono senza calcolare le differenze.
:::

:::osservazione{#quadrati-e-dispari titolo="Differenze tra quadrati consecutivi"}
Le differenze tra quadrati consecutivi sono i numeri dispari $3, 5, 7, 9, \dots$, perché $(n + 1)^2 - n^2 = 2n + 1$. La figura mostra il motivo. Per passare dal quadrato di lato $n$ al quadrato di lato $n + 1$ si aggiunge una squadra di $n$ punti in verticale, $n$ in orizzontale e uno nell'angolo, cioè $2n + 1$ punti. Di conseguenza la successione dei quadrati ha differenze seconde costanti, uguali a $2$.

::grafico{assi=0 uguale=1 xmin=0 xmax=5.4 ymin=0 ymax=5.4 punti="1,1,pieno,1;2,2,pieno,3;3,3,pieno,5;4,4,pieno,7;1,2;1,3;1,4;2,1;2,3;2,4;3,1;3,2;3,4;4,1;4,2;4,3" linee="1.5,0.5 1.5,1.5 0.5,1.5;2.5,0.5 2.5,2.5 0.5,2.5;3.5,0.5 3.5,3.5 0.5,3.5;0.5,0.5 4.5,0.5 4.5,4.5 0.5,4.5 0.5,0.5" titolo="I $16$ punti del quadrato di lato $4$ divisi in squadre di $1$, $3$, $5$ e $7$ punti; accanto all'angolo di ogni squadra è scritto il numero dei suoi punti, e $1 + 3 + 5 + 7 = 4^2$"}

:::

:::definizione{#fibonacci titolo="Successione di Fibonacci"}
Nella **successione di Fibonacci** i primi due termini valgono $1$ e ogni termine successivo è la somma dei due precedenti:
$$
a_1 = a_2 = 1,
\qquad
a_{n+2} = a_{n+1} + a_n .
$$
I primi termini sono $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, \dots$, infatti $2 = 1 + 1$, $3 = 1 + 2$ e $5 = 2 + 3$. Nei quiz la stessa regola si applica partendo da due numeri qualsiasi. Nella successione $2, 5, 7, 12, 19, 31, \dots$ ogni termine è la somma dei due precedenti, quindi il termine successivo è $19 + 31 = 50$. Una successione di questo tipo si riconosce dalle differenze, perché dalla seconda in poi coincidono con i termini della successione stessa. Per $2, 5, 7, 12, 19, 31$ le differenze sono infatti $3, 2, 5, 7, 12$.
:::

## Progressioni aritmetiche

:::definizione{#progressione-aritmetica titolo="Progressione aritmetica"}
Una **progressione aritmetica** è una successione in cui la differenza tra ogni termine e il precedente è sempre lo stesso numero $d$, detto **ragione**. Per arrivare al termine di posto $n$ si parte da $a_1$ e si aggiunge $d$ per $n - 1$ volte, perciò il **termine generale** è
$$
a_n = a_1 + (n - 1)\, d .
$$
Nella progressione $5, 9, 13, 17, \dots$ si ha $a_1 = 5$ e $d = 4$, quindi $a_{30} = 5 + 29 \cdot 4 = 121$. Il fattore $n - 1$ conta i passaggi da un termine al successivo: dal primo al secondo termine c'è un passaggio, dal primo al trentesimo ce ne sono $29$.

::grafico{f="4*x+1+0*sqrt(x)" punti="1,5,pieno;2,9,pieno;3,13,pieno;4,17,pieno;5,21,pieno" segmenti="1,5,2,5;2,5,2,9" xmin=-1 xmax=7 ymin=-3 ymax=27 nomi="n,aₙ" legenda="a_n = 4n + 1" titolo="I termini della progressione $5, 9, 13, 17, 21$ stanno su una retta; a ogni passo di $1$ verso destra il termine sale di $d = 4$"}

:::

:::esempio{#ragione-da-due-termini titolo="Ragione da due termini noti"}
Se di una progressione aritmetica si conoscono due termini, la ragione è la loro differenza divisa per il numero di passaggi tra le due posizioni. Se $a_3 = 11$ e $a_8 = 26$, dal terzo all'ottavo termine ci sono $8 - 3 = 5$ passaggi, quindi
$$
d = \frac{26 - 11}{5} = 3,
\qquad
a_1 = a_3 - 2d = 11 - 6 = 5 .
$$
Con la ragione e il primo termine si calcola qualsiasi altro termine, per esempio $a_{20} = 5 + 19 \cdot 3 = 62$.
:::

::::teorema{#somma-aritmetica titolo="Somma dei termini di una progressione aritmetica"}
La somma dei primi $n$ termini di una progressione aritmetica è
$$
S_n = \frac{(a_1 + a_n) \cdot n}{2},
$$
cioè il numero dei termini moltiplicato per la media tra il primo e l'ultimo. Quando il numero dei termini non è dato, si ricava dal termine generale come $n = \dfrac{a_n - a_1}{d} + 1$. I numeri dispari da $1$ a $49$ sono quindi $\dfrac{48}{2} + 1 = 25$, e la loro somma è
$$
S_{25} = \frac{(1 + 49) \cdot 25}{2} = 625 .
$$

:::dimostrazione
Si scrive la somma due volte, la seconda in ordine inverso, e si sommano i termini incolonnati. Il primo termine con l'ultimo, il secondo con il penultimo e così via danno sempre $a_1 + a_n$, perché passando da una colonna alla successiva il primo addendo aumenta di $d$ e il secondo diminuisce di $d$. Le colonne sono $n$, quindi $2 S_n = (a_1 + a_n) \cdot n$.
:::
::::

:::teorema{#somma-primi-naturali titolo="Somma dei primi numeri naturali"}
La somma dei numeri naturali da $1$ a $n$ è
$$
1 + 2 + 3 + \dots + n = \frac{n\,(n + 1)}{2} .
$$
È la somma della progressione aritmetica con $a_1 = 1$ e $a_n = n$. La figura mostra il motivo per $n = 5$. Due scale uguali di $1 + 2 + 3 + 4 + 5$ quadretti, una colorata e una capovolta, formano un rettangolo di $5 \cdot 6 = 30$ quadretti, quindi una scala ne contiene $15$. Allo stesso modo la somma dei numeri da $1$ a $100$ vale $\dfrac{100 \cdot 101}{2} = 5050$.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=5.5 ymin=-0.5 ymax=6.5 poligoni="0,0 5,0 5,5 4,5 4,4 3,4 3,3 2,3 2,2 1,2 1,1 0,1" linee="0,0 5,0 5,6 0,6 0,0;1,0 1,6;2,0 2,6;3,0 3,6;4,0 4,6;0,1 5,1;0,2 5,2;0,3 5,3;0,4 5,4;0,5 5,5" titolo="La scala colorata ha $1 + 2 + 3 + 4 + 5$ quadretti; con la sua copia capovolta forma un rettangolo di $5 \cdot 6 = 30$ quadretti, quindi $1 + 2 + 3 + 4 + 5 = \dfrac{5 \cdot 6}{2} = 15$"}

:::

:::esempio{titolo="I posti di un teatro"}
Un teatro ha $20$ file. La prima fila ha $12$ posti e ogni fila ha $2$ posti più della precedente. I posti delle file formano quindi una progressione aritmetica con $a_1 = 12$ e $d = 2$. L'ultima fila ha $a_{20} = 12 + 19 \cdot 2 = 50$ posti, e i posti in tutto sono
$$
S_{20} = \frac{(12 + 50) \cdot 20}{2} = 620 .
$$
:::

## Progressioni geometriche

:::definizione{#progressione-geometrica titolo="Progressione geometrica"}
Una **progressione geometrica** è una successione di numeri diversi da zero in cui il rapporto tra ogni termine e il precedente è sempre lo stesso numero $q$, detto **ragione**. Per arrivare al termine di posto $n$ si moltiplica $a_1$ per $q$ per $n - 1$ volte, perciò il termine generale è
$$
a_n = a_1 \cdot q^{\,n - 1} .
$$
Nella progressione $3, 6, 12, 24, \dots$ si ha $a_1 = 3$ e $q = 2$, quindi $a_8 = 3 \cdot 2^7 = 3 \cdot 128 = 384$. Se $a_1 > 0$ e $q > 1$, i termini crescono sempre più rapidamente, come mostra la figura; se $a_1 > 0$ e $0 < q < 1$, i termini diminuiscono e si avvicinano a zero.

::grafico{f="3*2^(x-1)+0*sqrt(x)" punti="1,3,pieno;2,6,pieno;3,12,pieno;4,24,pieno;5,48,pieno" xmin=-1 xmax=6 ymin=-6 ymax=54 nomi="n,aₙ" legenda="a_n = 3 \cdot 2^{n-1}" titolo="I termini della progressione $3, 6, 12, 24, 48$ di ragione $q = 2$; ogni termine è il doppio del precedente, quindi gli aumenti sono sempre più grandi"}

:::

:::attenzione
L'esponente nel termine generale è $n - 1$ e *non* $n$. Nella progressione $3, 6, 12, 24, \dots$ si ha $a_4 = 3 \cdot 2^3 = 24$, mentre $3 \cdot 2^4 = 48$ è il quinto termine. Con l'esponente $n$ si ottiene il termine che segue quello richiesto, e nei quiz questo valore compare spesso tra le opzioni sbagliate.
:::

:::teorema{#somma-geometrica titolo="Somma dei termini di una progressione geometrica"}
Se $q \neq 1$, la somma dei primi $n$ termini di una progressione geometrica è
$$
S_n = a_1 \cdot \frac{q^{\,n} - 1}{q - 1} .
$$
La formula si ottiene confrontando $S_n$ con $q\,S_n$. Le due somme hanno in comune tutti i termini tranne $a_1$, che compare solo in $S_n$, e $a_1 q^{\,n}$, che compare solo in $q\,S_n$; quindi $q\,S_n - S_n = a_1 q^{\,n} - a_1$, e dividendo per $q - 1$ si ottiene la formula. Per la somma $3 + 6 + 12 + 24 + 48$ si ha $a_1 = 3$, $q = 2$ e $n = 5$, quindi
$$
S_5 = 3 \cdot \frac{2^5 - 1}{2 - 1} = 3 \cdot 31 = 93 .
$$
Se $q = 1$, tutti i termini sono uguali ad $a_1$ e la somma vale $n \cdot a_1$.
:::

:::esempio{titolo="Un avviso inoltrato a catena"}
Il primo giorno un avviso arriva a $4$ dipendenti di un'azienda. Ogni giorno successivo ciascuno di quelli che l'hanno ricevuto il giorno prima lo inoltra a $3$ colleghi che non l'hanno ancora ricevuto. I nuovi destinatari di ogni giorno formano una progressione geometrica con $a_1 = 4$ e $q = 3$, cioè $4, 12, 36, 108$. Dopo quattro giorni l'avviso è arrivato in tutto a
$$
S_4 = 4 \cdot \frac{3^4 - 1}{3 - 1} = 4 \cdot \frac{80}{2} = 160 \text{ dipendenti} .
$$
:::

## Serie con lettere e numeri

:::definizione{#posizione-delle-lettere titolo="Posizione delle lettere nell'alfabeto"}
Nelle serie con lettere ogni lettera si sostituisce con il numero della sua posizione nell'alfabeto, e la serie diventa una successione di numeri. Il testo del quesito dichiara quale alfabeto si usa.

- L'**alfabeto italiano** ha $21$ lettere, con le posizioni della tabella.
- L'**alfabeto inglese** ha $26$ lettere, perché contiene anche J, K, W, X e Y. Le posizioni coincidono con quelle italiane fino alla I, che è la nona lettera; poi seguono J $= 10$, K $= 11$, L $= 12$, e la Z occupa il posto $26$.

$$
\begin{array}{ccccccc}
\text{A} & \text{B} & \text{C} & \text{D} & \text{E} & \text{F} & \text{G} \\
1 & 2 & 3 & 4 & 5 & 6 & 7 \\[8pt]
\text{H} & \text{I} & \text{L} & \text{M} & \text{N} & \text{O} & \text{P} \\
8 & 9 & 10 & 11 & 12 & 13 & 14 \\[8pt]
\text{Q} & \text{R} & \text{S} & \text{T} & \text{U} & \text{V} & \text{Z} \\
15 & 16 & 17 & 18 & 19 & 20 & 21
\end{array}
$$

Dopo l'ultima lettera si ricomincia dalla prima. Nell'alfabeto italiano, quindi, la lettera che si trova tre posti dopo la U è la A, perché dopo la U vengono V, Z e poi di nuovo A.
:::

:::esempio{#serie-di-lettere titolo="Serie di lettere"}
Con l'alfabeto italiano la serie B, E, H, M, … corrisponde ai numeri $2, 5, 8, 11$, che crescono di $3$. Il termine successivo è $14$, quindi la lettera successiva è la P.

La scelta dell'alfabeto cambia la risposta. La serie C, F, I, … corrisponde ai numeri $3, 6, 9$ in entrambi gli alfabeti, e il termine successivo è $12$. Nell'alfabeto italiano il posto $12$ è occupato dalla N, nell'alfabeto inglese dalla L.
:::

:::definizione{#serie-alfanumeriche titolo="Serie miste di lettere e numeri"}
In una **serie mista** ogni elemento è formato da una lettera e da un numero, oppure lettere e numeri si alternano. Le due parti seguono di solito regole separate, che si cercano una alla volta. Con l'alfabeto italiano, nella serie
$$
\text{A}2,\ \ \text{C}4,\ \ \text{E}8,\ \ \text{G}16,\ \dots
$$
le lettere avanzano di due posti e i numeri raddoppiano. La lettera successiva alla G è perciò la I e il numero successivo è $32$, quindi l'elemento successivo è I32. In altre serie il numero dipende dalla lettera, come in A1, C3, E5, dove il numero è la posizione della lettera.
:::

## Tabelle e figure con il numero mancante

:::definizione{#tabelle-numeriche titolo="Tabelle con il numero mancante"}
In una **tabella con il numero mancante** i numeri di ogni riga, oppure di ogni colonna, sono legati dalla stessa regola, e il numero mancante si trova applicando la regola alla riga o alla colonna che lo contiene. La regola si ricava da una riga completa e si controlla sulle altre righe complete. Nella tabella
$$
\begin{array}{|c|c|c|}
\hline
3 & 5 & 16 \\ \hline
4 & 2 & 9 \\ \hline
7 & 2 & ? \\ \hline
\end{array}
$$
il terzo numero di ogni riga è il prodotto dei primi due più $1$, infatti $3 \cdot 5 + 1 = 16$ e $4 \cdot 2 + 1 = 9$. Il numero mancante è quindi $7 \cdot 2 + 1 = 15$. Le regole delle tabelle nei quiz combinano di solito somme, prodotti e differenze dei numeri di una riga; quando le righe non danno una regola, si esaminano le colonne.
:::

:::definizione{#figure-numeriche titolo="Figure con il numero mancante"}
Nelle **figure con il numero mancante** alcuni numeri sono disposti nei vertici o nei settori di una figura, e un numero, di solito al centro, si ottiene dagli altri con una regola che vale per tutte le figure della serie. Nella figura il numero al centro di ogni triangolo è la somma dei due numeri alla base moltiplicata per il numero in alto. Nel primo triangolo $(2 + 4) \cdot 3 = 18$ e nel secondo $(5 + 1) \cdot 2 = 12$, quindi nel terzo il numero mancante è $(3 + 6) \cdot 4 = 36$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=15 ymin=-1 ymax=4 linee="0,0 4,0 2,3 0,0;5,0 9,0 7,3 5,0;10,0 14,0 12,3 10,0" etichette="1.85,3.25,3;-0.45,-0.55,2;3.95,-0.55,4;1.65,0.9,18;6.85,3.25,2;4.55,-0.55,5;8.95,-0.55,1;6.65,0.9,12;11.85,3.25,4;9.55,-0.55,3;13.95,-0.55,6;11.85,0.9,?" titolo="In ogni triangolo il numero al centro è la somma dei numeri alla base moltiplicata per il numero in alto, quindi al posto del punto interrogativo va $(3 + 6) \cdot 4 = 36$"}

:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Riconoscere la regola in fretta"}
Nelle prove a tempo la ricerca della regola si accorcia con tre osservazioni.

- **Andamento dei termini**: se i termini crescono di quantità simili, la regola è quasi sempre una somma, e si guardano le differenze; se crescono di quantità sempre maggiori, si guardano i rapporti, i quadrati e i cubi.
- **Verifica delle opzioni**: si scrive ogni opzione in coda alla successione e si controlla con quale le differenze o i rapporti diventano regolari. Con la successione $2, 6, 12, 20, \dots$ e le opzioni $28$ e $30$, le differenze diventano $4, 6, 8, 8$ oppure $4, 6, 8, 10$, quindi la risposta è $30$.
- **Successioni intrecciate**: se i termini salgono e scendono, si separano subito i termini di posto pari da quelli di posto dispari, prima di calcolare qualsiasi differenza.
:::

:::osservazione{#calcoli-rapidi titolo="Calcoli rapidi con le progressioni"}
Nei quesiti sulle progressioni alcune osservazioni accorciano i calcoli e rendono evidenti gli errori nel conteggio dei termini.

- **Numero dei termini**: i numeri interi da $15$ a $40$ sono $40 - 15 + 1 = 26$, perché si contano entrambi gli estremi. Il valore $25$, che dimentica un estremo, compare spesso tra le opzioni.
- **Somma con ragione $2$**: in una progressione geometrica con $q = 2$ la somma dei primi termini è il doppio dell'ultimo meno il primo, perché $a_1 \cdot (2^n - 1) = 2 \cdot a_1 2^{\,n-1} - a_1$. Infatti $3 + 6 + 12 + 24 + 48 = 2 \cdot 48 - 3 = 93$.
- **Somma dei primi dispari**: la somma dei primi $n$ numeri dispari è $n^2$, perché per la somma di una progressione aritmetica vale $\dfrac{(1 + 2n - 1) \cdot n}{2} = n^2$. La somma $1 + 3 + 5 + \dots + 49$ ha $25$ termini, quindi vale $25^2 = 625$.
:::
