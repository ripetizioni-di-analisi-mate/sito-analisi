---
titolo: "Combinatoria, probabilità e statistica"
sommario: "Tecniche di conteggio, probabilità condizionata e Bayes, frequenze e indici descrittivi."
---

## Contare per casi e per fasi

:::definizione{#conteggio titolo="Regole della somma e del prodotto"}
Un conteggio parte dalla descrizione dell'oggetto finale. Per esempio, un itinerario può essere identificato con le sue due tratte in ordine. Un modo di classificare gli itinerari è invece separarli in base al mezzo della prima tratta.

La **regola della somma** si applica se i casi sono disgiunti ed esauriscono tutte le possibilità. Il totale si ottiene sommando il numero di oggetti in ciascun caso. Se due casi condividono degli oggetti, si può sottrarre ciò che è stato contato due volte.

La **regola del prodotto** si applica a una scelta per fasi. Se la prima fase ha $n_1$ possibilità e, per ogni esito della prima fase, la seconda ha $n_2$ possibilità, il totale è $n_1n_2$. Il numero di possibilità può essere diverso da una fase all'altra. Conta che a una stessa fase il numero di alternative sia uguale per tutte le scelte già compiute.
:::

:::esempio{titolo="Due rami con numeri di scelte diversi"}
Una navetta raggiunge ogni mattina il centro da tre fermate. Dalle prime due fermate è possibile abbinare uno dei quattro treni regionali. Dalla terza si può prendere soltanto uno dei due treni diretti. Conta la coppia costituita dalla fermata e dal treno.

Le prime due fermate danno $2\cdot4=8$ coppie. La terza ne dà $1\cdot2=2$. Poiché una singola coppia appartiene a uno solo dei due casi, si somma $8+2=10$. Il prodotto $3\cdot4$ conterebbe due abbinamenti non disponibili.
:::

:::osservazione{titolo="Negare una condizione per contare"}
Se è noto il numero totale di esiti, a volte basta contare quelli che violano la condizione. Per un codice di cinque cifre, per esempio, il vincolo *almeno uno zero* è soddisfatto in $10^5-9^5$ casi. Il totale comprende ogni cifra in ciascuna posizione. I codici esclusi hanno nove scelte in ogni posizione, perché lo zero è vietato in tutte.
:::

## Permutazioni e disposizioni

:::definizione{#permutazioni titolo="Scelte ordinate"}
In una **disposizione** di $k$ oggetti l'ordine fa parte dell'esito. Se si dispone di $n$ oggetti distinti e ciascuno può comparire al più una volta, le prime $k$ posizioni hanno rispettivamente $n,n-1,\ldots,n-k+1$ possibilità. Per $0\le k\le n$ si ottiene
$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$
Qui $n!$ è il prodotto dei primi $n$ interi positivi e $0!=1$. Per $k=0$ c'è un solo esito, la sequenza vuota. Se $k=n$ si ottengono le **permutazioni** degli $n$ oggetti, in numero di $n!$.

Con ripetizione ammessa, ciascuna delle $k$ posizioni ha di nuovo $n$ possibilità, quindi si ottengono $n^k$ sequenze. La ripetizione agisce sulle scelte disponibili. L'ordine, invece, decide se due sequenze vanno contate come oggetti diversi.
:::

:::esempio{titolo="Prima cifra soggetta a vincolo"}
Si considerano i numeri di tre cifre distinte formati con $0,2,4,7,9$. La prima cifra ha quattro possibilità, perché lo zero produrrebbe un numero di due cifre. Fissata la prima cifra, ne rimangono quattro, incluso lo zero. Fissata anche la seconda, le ultime possibilità sono tre. Il totale è $4\cdot4\cdot3=48$. Se gli stessi simboli formano un codice che può iniziare con zero, l'esito cambia e il totale diventa $5\cdot4\cdot3=60$.
:::

:::definizione{titolo="Permutazioni con elementi indistinguibili"}
Se in $n$ posizioni si collocano $r_1$ copie del primo simbolo, $r_2$ del secondo e così via, con $r_1+r_2+\cdots=n$, il numero di sequenze diverse è
$$
\frac{n!}{r_1!\,r_2!\cdots}.
$$
Si possono etichettare temporaneamente tutte le copie e contare $n!$ permutazioni. Tolte le etichette, ciascuna sequenza è stata replicata esattamente $r_1!\,r_2!\cdots$ volte, perché si possono scambiare le etichette di uno stesso simbolo in qualsiasi ordine. Per le lettere di MAMMA si ottengono $\dfrac{5!}{3!\,2!}=10$ sequenze diverse.
:::

## Combinazioni e gruppi

:::definizione{#combinazioni titolo="Scelte senza ordine"}
Una **combinazione** è un sottoinsieme di $k$ elementi scelti fra $n$ distinti. Ogni gruppo di $k$ elementi ammette $k!$ ordini. Poiché tutti questi ordini rappresentano lo stesso gruppo, il numero di combinazioni è
$$
\binom nk=\frac{D_{n,k}}{k!}
         =\frac{n!}{k!(n-k)!},
\qquad 0\le k\le n.
$$
La scrittura $\binom nk$ si legge «$n$ su $k$». La relazione $\binom nk=\binom n{n-k}$ segue dal fatto che specificare chi entra nel gruppo equivale a specificare chi resta fuori.
:::

:::esempio{titolo="Membri e ruoli"}
Con sette candidati si possono formare $\binom73=35$ commissioni di tre membri. Se i tre membri ricevono tre incarichi diversi, ogni commissione dà $3!=6$ assegnazioni. Si ottengono dunque $35\cdot6=210$ esiti, lo stesso valore di $D_{7,3}$. Assegnare un incarico al solo presidente darebbe invece $35\cdot3=105$ esiti.
:::

:::esempio{titolo="Esatti e minimi"}
Un laboratorio ha cinque provette di tipo $A$ e quattro di tipo $B$, tutte distinguibili. Per scegliere quattro provette con *esattamente* due di tipo $A$, si effettuano due scelte di gruppi e si ottiene $\binom52\binom42=10\cdot6=60$.

Per sceglierne *almeno* due di tipo $A$, i casi possibili sono due, tre e quattro provette di tipo $A$. Questi casi sono disgiunti. Il totale diventa
$$
\binom52\binom42+\binom53\binom41+\binom54\binom40
=60+40+5=105.
$$
:::

:::osservazione{titolo="Quando il divisore è costante"}
La divisione per $k!$ è giustificata dal fatto che ogni gruppo di $k$ elementi distinti ha lo stesso numero di ordini. Con simboli ripetuti questo fatto va controllato. Per esempio, con le lettere $A$ e $B$ si possono costruire le sequenze $AA,AB,BA,BB$. Se si ignora l'ordine, $AB$ e $BA$ si uniscono in un solo esito. Gli esiti senza ordine sono tre e il numero di sequenze che li rappresentano varia da uno a due.
:::

## Eventi, unione e complemento

:::definizione{#eventi titolo="Spazio campionario ed eventi"}
Lo **spazio campionario** $\Omega$ è l'insieme degli esiti dell'esperimento. Un **evento** $A$ è un sottoinsieme di $\Omega$. L'evento si verifica quando l'esito appartiene ad $A$. Se $\Omega$ è finito e i suoi esiti hanno tutti la stessa probabilità, vale
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
Con esiti di probabilità diversa, si sommano invece le probabilità dei singoli esiti favorevoli. Per esempio, lanciando due dadi equi, le coppie ordinate sono equiprobabili. Le somme da $2$ a $12$ hanno probabilità diverse, perché dipendono da numeri diversi di coppie.
:::

:::definizione{titolo="Operazioni tra eventi"}
L'**intersezione** $A\cap B$ si verifica se si verificano entrambi gli eventi. L'**unione** $A\cup B$ si verifica se se ne verifica almeno uno, anche quando si verificano entrambi. Il complemento $A^c$ contiene gli esiti che lasciano $A$ irrealizzato. Valgono
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B),
\qquad P(A^c)=1-P(A).
$$
Si sottrae l'intersezione perché è stata aggiunta una volta con $A$ e una volta con $B$. Per eventi disgiunti l'intersezione è vuota, quindi la formula si riduce alla somma delle probabilità.
:::

:::esempio{titolo="Iscritti a due iniziative"}
In una classe di $30$ alunni, $12$ partecipano a un coro, $14$ a un giornale e $5$ a entrambi. Sia $A$ l'evento «partecipa al coro» e $B$ l'evento «partecipa al giornale». Chi partecipa a una sola attività appartiene a due regioni disgiunte, con $12-5=7$ e $14-5=9$ alunni.

::venn{tipo="due" universo=1 ambiente="Ω" zone="a,ab,b" elementi="a:7;ab:5;b:9;u:9" titolo="Numero di alunni nelle quattro regioni. L'unione comprende 7, 5 e 9 alunni."}

Per un alunno scelto uniformemente, la probabilità di almeno un'attività è $\dfrac{12+14-5}{30}=\dfrac{21}{30}$. La probabilità di partecipare a esattamente una è $\dfrac{7+9}{30}=\dfrac{16}{30}$, mentre nove alunni non partecipano a nessuna delle due.
:::

## Condizionamento e indipendenza

:::definizione{#condizionata titolo="Probabilità condizionata"}
Se si sa che $B$ è avvenuto e $P(B)>0$, la **probabilità di $A$ dato $B$** si scrive
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Il denominatore riguarda la popolazione compatibile con l'informazione $B$. Il numeratore conta la parte di quella popolazione in cui è avvenuto anche $A$. Moltiplicando per $P(B)$ si ottiene la regola del prodotto per gli eventi:
$$
P(A\cap B)=P(B)P(A\mid B).
$$
La regola rimane valida se l'esito della prima scelta modifica le probabilità della seconda.
:::

:::esempio{titolo="Due estrazioni senza reinserimento"}
Un sacchetto contiene quattro gettoni azzurri e tre verdi. Per ottenere prima un azzurro e poi un verde, la prima probabilità è $\dfrac47$. Dopo l'azzurro restano sei gettoni, di cui tre verdi. Di conseguenza
$$
P(\text{azzurro, poi verde})=\frac47\cdot\frac36=\frac27.
$$
Se basta ottenere un gettone per colore, si aggiunge il caso verde seguito da azzurro, di probabilità $\dfrac37\cdot\dfrac46=\dfrac27$. Il totale è $\dfrac47$.
:::

:::definizione{titolo="Indipendenza"}
Due eventi $A$ e $B$ sono **indipendenti** se $P(A\cap B)=P(A)P(B)$. Quando $P(B)>0$, la definizione equivale a $P(A\mid B)=P(A)$. L'informazione che $B$ è avvenuto lascia quindi invariata la probabilità di $A$. Per esempio, ottenuto $6$ nel primo di due lanci indipendenti di un dado equo, la probabilità di $6$ nel secondo rimane $\dfrac16$.
:::

:::attenzione
Con *disgiunti* si descrive l'intersezione vuota. Con *indipendenti* si descrive il prodotto delle probabilità. Se, nel lancio di una moneta equa, $A$ è testa e $B$ è croce, l'intersezione ha probabilità $0$ mentre $P(A)P(B)=\dfrac14$. Questi due eventi disgiunti sono dipendenti.
:::

## Probabilità totale e formula di Bayes

:::definizione{#bayes titolo="Partizione e probabilità totale"}
Si ha una **partizione** quando gli eventi $B_1,\ldots,B_m$ sono disgiunti e la loro unione è $\Omega$. Se ciascun $B_i$ ha probabilità positiva, ciascuna parte di $A$ si può esprimere tramite $P(A\mid B_i)$. Si ottiene
$$
P(A)=\sum_{i=1}^{m} P(B_i)P(A\mid B_i).
$$
Ogni addendo è la probabilità di un ramo completo. Poiché i rami sono disgiunti, si sommano i contributi che terminano con $A$. Il peso di un gruppo è la sua probabilità nella popolazione. Perciò una media semplice delle probabilità nei gruppi è adatta soltanto se i pesi sono uguali, a meno di coincidenze numeriche.
:::

:::esempio{titolo="Due linee di collaudo"}
La linea $B_1$ produce il $70\%$ dei pezzi e ne respinge il $2\%$. La linea $B_2$ produce il restante $30\%$ e ne respinge il $5\%$. Sia $A$ l'evento «pezzo respinto». La frequenza attesa su $1000$ pezzi rende espliciti i pesi.

| Linea | Pezzi | Respinti |
|---|---:|---:|
| $B_1$ | $700$ | $14$ |
| $B_2$ | $300$ | $15$ |
| Totale | $1000$ | $29$ |

Poiché un pezzo respinto proviene da una delle due linee, $P(A)=\dfrac{29}{1000}$. Il calcolo è equivalente alla somma $0{,}70\cdot0{,}02+0{,}30\cdot0{,}05$.
:::

:::teorema{titolo="Formula di Bayes"}
Nella stessa partizione, se $P(A)>0$, la **formula di Bayes** è
$$
P(B_j\mid A)=
\frac{P(B_j)P(A\mid B_j)}
     {\displaystyle\sum_{i=1}^{m}P(B_i)P(A\mid B_i)}.
$$
Si applica la definizione di probabilità condizionata. Al numeratore compare $P(B_j\cap A)$, che è uguale al contributo del ramo $B_j$. Al denominatore compare la probabilità totale di $A$. Nell'esempio del collaudo, fra i $29$ respinti ce ne sono $15$ della seconda linea. Quindi $P(B_2\mid A)=\dfrac{15}{29}$, mentre $P(A\mid B_2)=\dfrac{5}{100}$.
:::

## Frequenze, tabelle e diagrammi

:::definizione{#frequenze titolo="Frequenze assolute, relative e condizionate"}
La **frequenza assoluta** è il numero di osservazioni che soddisfano una condizione. La frequenza relativa si ottiene dividendo per il numero di osservazioni pertinenti. Una frequenza relativa può essere espressa in frazione, decimale o percentuale.

Quando si rilevano due caratteri, la frequenza **congiunta** conta chi ha simultaneamente i due valori della cella. La frequenza **marginale** conta chi ha un dato valore di un carattere, qualunque sia il valore dell'altro. Si legge dai totali di riga o di colonna. La frequenza relativa **condizionata** si calcola nella sola riga o colonna determinata dalla condizione. Il totale di tale gruppo deve essere positivo.
:::

:::esempio{titolo="Qual è il denominatore?"}
Un corso rileva la modalità di iscrizione e la partecipazione al primo incontro.

| Iscrizione | Ha partecipato | Non ha partecipato | Totale |
|---|---:|---:|---:|
| Individuale | $18$ | $6$ | $24$ |
| Di gruppo | $12$ | $4$ | $16$ |
| Totale | $30$ | $10$ | $40$ |

La frequenza assoluta congiunta di iscrizione individuale e partecipazione è $18$. La frequenza relativa congiunta è $\dfrac{18}{40}$. La frequenza relativa marginale di partecipazione è $\dfrac{30}{40}$. Fra chi si iscrive individualmente, la frequenza relativa di partecipazione è $\dfrac{18}{24}$. Fra chi ha partecipato, invece, la frequenza relativa di iscrizione individuale è $\dfrac{18}{30}$. La stessa cella può quindi contribuire a più risposte, perché cambia la popolazione di riferimento.
:::

:::osservazione{titolo="Leggere assi e unità"}
In un diagramma a barre con scala lineare, la quota associata a ciascuna categoria si legge dall'altezza della barra sulla scala indicata. L'asse può rappresentare persone oppure percentuali. Percentuali uguali riferite a gruppi di numerosità diversa corrispondono a conteggi diversi, quindi il totale del gruppo è necessario per tornare ai conteggi. In un diagramma a settori l'angolo del settore è la frequenza relativa moltiplicata per $360^\circ$. Un settore di $54^\circ$ rappresenta $\dfrac{54}{360}=\dfrac{3}{20}=15\%$ del totale.
:::

## Misure di posizione e dispersione

:::definizione{#sintesi-statistica titolo="Media, mediana e moda"}
Per $N>0$ osservazioni numeriche $x_1,\ldots,x_N$, la **media aritmetica** è $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. Se ogni valore distinto $v_j$ compare $f_j$ volte, si può calcolare la stessa media come
$$
\bar x=\frac{\sum_j f_jv_j}{\sum_j f_j}.
$$
Per trovare la **mediana** si ordinano le osservazioni. Con $N$ dispari si sceglie quella in posizione $\dfrac{N+1}{2}$. Con $N$ pari si fa la media dei valori in posizione $\dfrac N2$ e $\dfrac N2+1$. Nella tabella di frequenze le posizioni si individuano dalle frequenze cumulate. Una **moda** è un valore di frequenza massima. Più valori possono condividere la frequenza massima.
:::

:::esempio{titolo="La posizione centrale nella tabella"}
I tempi in minuti sono $2,2,4,4,4,10$. Dai valori e dalle rispettive frequenze,
$$
\bar x=\frac{2\cdot2+4\cdot3+10\cdot1}{6}=\frac{26}{6}=\frac{13}{3}.
$$
La terza e la quarta osservazione valgono $4$, quindi la mediana è $4$. Anche la moda è $4$, perché compare tre volte. Se $10$ diventa $16$, la media aumenta di $\dfrac66=1$. La mediana rimane $4$, perché l'ordine dei dati centrali è invariato.
:::

:::definizione{titolo="Campo di variazione, varianza e deviazione standard"}
Il **campo di variazione** è la differenza fra il massimo e il minimo. La **varianza descrittiva** $\sigma^2$ è la media dei quadrati degli scarti dalla media. La **deviazione standard** $\sigma$ è la sua radice quadrata. Per i dati raggruppati per singolo valore,
$$
\sigma^2=\frac{\sum_j f_j(v_j-\bar x)^2}{\sum_j f_j}
        =\frac{\sum_j f_jv_j^2}{\sum_j f_j}-\bar x^2,
\qquad
\sigma=\sqrt{\sigma^2}.
$$
La seconda formula segue sviluppando il quadrato e usando $\sum_j f_jv_j=N\bar x$. Se i dati sono espressi in minuti, la varianza è in minuti quadrati e la deviazione standard è in minuti. Se viene richiesta esplicitamente la varianza campionaria corretta, il denominatore della somma dei quadrati è $N-1$ per $N\ge2$.
:::

:::esempio{titolo="Stessa media, dispersione diversa"}
Le misure $2,4,6$ e $3,4,5$ hanno entrambe media $4$. I campi di variazione sono rispettivamente $4$ e $2$. Le varianze descrittive valgono $\dfrac{4+0+4}{3}=\dfrac83$ e $\dfrac{1+0+1}{3}=\dfrac23$. Nel primo insieme di dati i valori si allontanano di più dal centro, quindi la deviazione standard è maggiore.
:::

:::osservazione{titolo="Dati aggregati e cambio di scala"}
Per unire due gruppi di numerosità $n_1,n_2$ e medie $\bar x_1,\bar x_2$, le somme dei valori sono $n_1\bar x_1$ e $n_2\bar x_2$. La media totale è quindi $\dfrac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}$. I pesi sono le numerosità dei gruppi.

Aggiungendo la stessa costante a ogni misura, si sposta la media della stessa quantità. Gli scarti dalla media restano invariati, quindi varianza e deviazione standard restano uguali. Moltiplicando tutte le misure per $a$, gli scarti sono moltiplicati per $a$. La varianza è quindi moltiplicata per $a^2$ e la deviazione standard per $|a|$.
:::
