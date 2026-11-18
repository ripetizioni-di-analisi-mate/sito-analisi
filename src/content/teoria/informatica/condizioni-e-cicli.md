---
titolo: Condizioni, cicli e invarianti
sommario: Dalle guardie e dalla selezione alla dimostrazione di correttezza e terminazione dei cicli in C.
---

## Espressioni che decidono un percorso

:::definizione{#verita-scalare titolo="Valore logico di uno scalare"}
Le condizioni delle istruzioni `if` e dei cicli C hanno tipo scalare. Per un intero, la condizione è falsa quando il valore è zero ed è vera per ogni intero diverso da zero, compresi quelli negativi. Un confronto come `x < 10` produce un valore di tipo `int` che vale precisamente `0` oppure `1`. La stessa convenzione vale per l’uguaglianza `==`, la disuguaglianza `!=` e gli operatori logici.

Lo **stato** comprende i valori delle variabili in un punto del programma. La **guardia** è la condizione che decide se eseguire un ramo o un’altra iterazione. Dato lo stato `x = -6`, la guardia `x` è vera, mentre `x > 0` è falsa. Le due scritture esprimono proprietà diverse dello stesso intero, quindi la scelta dipende dalla proprietà richiesta nel problema.
:::

:::definizione{#cortocircuito titolo="Valutazione in corto circuito"}
Gli operatori `&&` e `||` valutano prima l’operando sinistro. Per una congiunzione, se il primo operando è falso il risultato vale `0` e l’operando destro viene saltato. Per una disgiunzione, se il primo operando è vero il risultato vale `1` e l’operando destro viene saltato. Negli altri casi la seconda valutazione determina il risultato. L’operatore `!` produce `1` quando il suo operando vale zero e `0` quando vale un valore diverso da zero.

La precedenza più alta di `&&` rispetto a `||` fa sì che `a || b && c` raggruppi gli ultimi due operandi. Le parentesi permettono di esprimere il raggruppamento `(a || b) && c`, in cui il valore di `c` contribuisce quando la prima disgiunzione è vera.
:::

:::esempio{titolo="Guardia per una divisione intera"}
Il frammento verifica se il quoziente intero supera `3` dopo aver verificato che il divisore è diverso da zero.

```c
int numerator = 18, divisor = 0;
int ok = divisor != 0 && numerator / divisor > 3;
```

Con i valori mostrati, il primo confronto è falso, perciò `ok` vale `0` e la divisione viene saltata. Con `divisor = 4` il primo confronto è vero, quindi si calcola il quoziente intero `18 / 4`, che vale `4`. Il confronto `4 > 3` è vero e `ok` vale `1`. Con `divisor = 6` la divisione è definita, ma il quoziente vale esattamente `3`, quindi il confronto stretto produce `0`.
:::

:::attenzione
Nella forma `0 < x < 10` il primo confronto produce `0` o `1`. Entrambi questi risultati sono minori di `10`, quindi l’intera espressione è vera persino quando `x = 12`. La scrittura `0 < x && x < 10` verifica direttamente entrambe le disuguaglianze.

Il corto circuito riguarda anche gli effetti sulle variabili. Se `count = 2`, la disgiunzione `count > 0 || ++count == 3` vale `1` e `count` conserva il valore `2`, perché il secondo operando viene saltato.
:::

## Dalla condizione al ramo

:::definizione{#selezione-if titolo="Selezione con if"}
Con `if (condition) statement` si esegue l’istruzione controllata quando la condizione è vera. Se è presente la clausola `else`, si esegue esattamente uno dei due rami. Le graffe raggruppano più istruzioni in un blocco. In una catena di `else if` ciascuna guardia viene valutata solo se tutte le precedenti sono false. La guardia vera determina il blocco da eseguire e conclude la selezione. L’eventuale `else` finale copre gli stati per i quali ogni confronto precedente è falso.

Una traccia di esecuzione può registrare le guardie esaminate nell’ordine effettivo. Due istruzioni `if` consecutive sono invece due selezioni distinte. Entrambe possono eseguire il proprio ramo se le condizioni corrispondenti sono vere quando vengono valutate.
:::

:::esempio{titolo="Partizione di valori con due soglie"}
Il frammento assegna una categoria intera ai valori di `t`. La prima soglia è `0` e la seconda è `7`.

```c
int t = 7, band;
if (t < 0) {
    band = -1;
} else if (t < 7) {
    band = 0;
} else {
    band = 1;
}
```

Per entrare nel secondo ramo devono valere insieme `t >= 0` e `t < 7`. La sua fascia comprende dunque i valori interi da `0` a `6`. Per il dato `t = 7` entrambe le guardie sono false e il terzo ramo assegna `1`. Se `t = 6`, la seconda guardia è vera e determina la categoria `0`. Con `t = -1` si entra subito nel primo ramo, quindi il secondo confronto viene saltato.
:::

:::definizione{#selezione-switch titolo="Selezione con switch"}
L’espressione di controllo di `switch` ha tipo intero ed è soggetta alle promozioni intere. Ogni etichetta `case` richiede un’espressione costante intera. I valori di queste espressioni, convertiti al tipo promosso, devono essere tutti distinti e identificano i punti del corpo da cui proseguire l’esecuzione. Se il valore di controllo coincide con una costante, l’esecuzione parte dall’etichetta corrispondente. Quando nessuna costante coincide, un’etichetta `default` presente fornisce il punto di ingresso. Con `default` assente e nessuna corrispondenza, il corpo viene saltato.

Dopo l’ingresso, le istruzioni seguono l’ordine scritto. Un’etichetta successiva è un altro punto di ingresso e da sola lascia proseguire l’esecuzione. Questo passaggio è chiamato **fall-through**. Un `break` che appartiene allo `switch` conclude la selezione.
:::

:::attenzione
Con due `if` annidati, un `else` si associa al più vicino `if` precedente compatibile con la grammatica che può ancora ricevere un `else`. Ad esempio, se `if (x > 0)` controlla direttamente `if (y > 0) s = 1; else s = -1;`, l’assegnamento alternativo appartiene alla selezione su `y`. Con `x = 0` si salta l’intero `if` interno. Un blocco delimitato da graffe consente di chiudere la selezione su `y` prima di scrivere l’`else` della selezione su `x`.
:::

## Guardia iniziale e guardia finale

:::definizione{#ciclo-while titolo="Ciclo while"}
In un `while` la condizione viene valutata prima del corpo. Una condizione vera avvia un’iterazione e, quando il corpo raggiunge normalmente la fine, il controllo torna alla guardia. Una condizione falsa porta all’istruzione successiva al ciclo. Se il primo controllo dà falso, il corpo viene eseguito zero volte.

Per ricostruire l’esecuzione si può compilare una **tabella di traccia** con una riga per ogni valutazione della guardia, compresa quella falsa che termina il ciclo. Le colonne riportano solo lo stato necessario a calcolare la guardia e a prevedere l’aggiornamento. L’ultima riga permette di leggere anche lo stato disponibile dopo il ciclo.
:::

:::esempio{titolo="Triplicazioni fino alla soglia"}
Si contano le moltiplicazioni per tre che portano `p` almeno a `13`.

```c
int p = 1, steps = 0;
while (p < 13) {
    p *= 3;
    ++steps;
}
```

| `p` alla guardia | `steps` | Esito |
|---:|---:|---|
| 1 | 0 | vero |
| 3 | 1 | vero |
| 9 | 2 | vero |
| 27 | 3 | falso |

L’ultimo valore utilizzato nel corpo è `9` perché rappresenta l’ultimo stato di ingresso con guardia vera. Il valore finale è `27` perché si esegue l’aggiornamento completo prima del successivo controllo. La soglia può quindi essere superata.
:::

:::definizione{#ciclo-do titolo="Ciclo do while"}
In un `do while` il controllo giunge al corpo prima di valutare la guardia. Quando l’esecuzione arriva al controllo finale, una condizione vera avvia la replica del corpo e una condizione falsa conclude il ciclo. La forma richiede il punto e virgola dopo la parentesi della condizione.

```c
int x = 9;
do {
    x -= 2;
} while (x > 10);
```

L’aggiornamento produce `x = 7` prima del primo test, quindi il confronto con `10` è falso e il ciclo termina. La sequenza ha un solo aggiornamento. Partire da `9` con una guardia iniziale `x > 10` porterebbe a zero aggiornamenti. La posizione del primo controllo determina il comportamento sui valori iniziali al bordo.
:::

:::osservazione
In un `while` che termina attraverso una guardia falsa, con $k$ esecuzioni complete del corpo e senza uscite anticipate, la guardia viene valutata $k+1$ volte. Le prime $k$ valutazioni sono vere e l’ultima è falsa. Nelle stesse condizioni, in un `do while` si hanno $k$ verifiche per $k$ esecuzioni complete, perché ogni verifica segue il corpo. Questi conteggi distinguono le operazioni eseguite nella guardia da quelle eseguite nel corpo.
:::

## Contatori e confini del for

:::definizione{#ciclo-for titolo="Fasi del ciclo for"}
Nel `for` si distinguono l’inizializzazione, la condizione di controllo e l’aggiornamento. L’inizializzazione viene eseguita una volta all’ingresso. Prima di ogni possibile iterazione si valuta la condizione. Dopo un’esecuzione del corpo che raggiunge la fine, si esegue l’aggiornamento e si rivaluta la condizione. Se l’inizializzazione dichiara un contatore, il suo nome è visibile nella parte restante della dichiarazione e nel ciclo, quindi può essere usato sia nella condizione sia nell’aggiornamento. Se la condizione è omessa, si usa una condizione sempre vera.

Quando si contano le iterazioni, si separano i valori usati nel corpo dal primo valore che rende la condizione falsa. Se il corpo cambia il contatore o altri dati da cui dipende la condizione, la successione di valori va ricavata dagli aggiornamenti effettivamente eseguiti.
:::

::::teorema{#intervalli-discreti titolo="Conteggio con passo positivo"}
Siano $a,b$ interi e sia $d>0$ un intero. Si consideri un `for` con contatore iniziale $a$, guardia `i < b` e aggiornamento `i += d`, dove `b` e `d` rappresentano i corrispondenti valori matematici. Si supponga che il corpo termini a ogni iterazione, che lasci invariati il contatore, il limite e il passo, che il ciclo termini tramite la guardia e che gli aggiornamenti siano rappresentabili. Se $a\ge b$ si hanno zero iterazioni. Se $a<b$, il numero $m$ di iterazioni è

$$
m=\left\lceil\frac{b-a}{d}\right\rceil .
$$

:::dimostrazione
Dopo $j$ aggiornamenti il contatore vale $a+jd$. Ciò vale per $j=0$ e, se vale per $j$, aggiungere $d$ dà $a+(j+1)d$. Perciò l’uscita avviene al primo $j$ che soddisfa $a+jd\ge b$. Quando $a<b$ la disuguaglianza equivale a $j\ge \dfrac{b-a}{d}$, quindi il minimo intero ammissibile è l’arrotondamento per eccesso.
:::
::::

:::esempio{titolo="Lettura di un intervallo semichiuso"}
Con passo $1$, il ciclo da $a$ incluso a $b$ escluso, per $a\le b$, visita $b-a$ interi. L’uso dell’intervallo $[a,b)$ rende esplicito che $a=b$ produce zero visite. Con passo $3$ e intervallo $[5,19)$, i dati soddisfano

$$
m=\left\lceil\frac{19-5}{3}\right\rceil
 =\left\lceil\frac{14}{3}\right\rceil=5 .
$$

I valori visitati sono $5$, $8$, $11$, $14$ e $17$. L’aggiornamento da $17$ a $20$ ha luogo dopo l’ultima esecuzione del corpo. Poiché $20\ge 19$, il corpo termina con cinque visite.
:::

:::attenzione
La rappresentabilità va verificata anche nell’ultimo aggiornamento. Con un contatore `int`, la guardia `i <= INT_MAX` ammette il valore `INT_MAX`. L’eventuale incremento successivo ha un risultato matematico fuori dall’intervallo di `int`, con comportamento indefinito. Un limite escluso `i < n`, con `n` rappresentabile, fa svolgere l’ultima iterazione per `i = n - 1` e lascia l’ultimo incremento nel tipo, quando si parte da un valore minore di `n` e si procede a passo unitario.
:::

## Uscire e passare al controllo seguente

:::definizione{#interruzione-break titolo="Uscita con break"}
Un `break` termina il più interno tra i cicli e gli `switch` che lo contengono lessicalmente. Si prosegue dalla prima istruzione dopo l’istruzione di controllo terminata. In un `for` un `break` nel corpo salta anche l’espressione di aggiornamento del ciclo. Per descrivere lo stato dopo un’uscita anticipata si considerano solo le assegnazioni già eseguite e le condizioni vere nel punto in cui si incontra `break`.
:::

:::definizione{#salto-continue titolo="Prossimo controllo con continue"}
Un `continue` passa al punto di prosecuzione del più interno tra i cicli che lo contengono. Nel `for` tale punto precede l’espressione di aggiornamento e la successiva valutazione della guardia. In un `while` o in un `do while` il prossimo controllo è direttamente la guardia. Le istruzioni che seguono il `continue` nel corpo corrente vengono saltate. La posizione dell’incremento è quindi decisiva quando un cammino termina con `continue`.
:::

:::esempio{titolo="Aggiornamento garantito prima del salto"}
Il frammento somma i valori dispari da `1` a `5`. L’aggiornamento del contatore precede la selezione che può causare un salto.

```c
int i = 0, sum = 0;
while (i < 5) {
    ++i;
    if (i % 2 == 0) {
        continue;
    }
    sum += i;
}
```

I valori prodotti da `++i` sono `1`, `2`, `3`, `4` e `5`. Per `2` e `4` si torna direttamente alla guardia, conservando il valore aggiornato di `i`. Gli addendi conservati danno `1 + 3 + 5 = 9`. Se il solo aggiornamento di `i` fosse dopo il `continue`, un salto su un valore pari riproporrebbe alla guardia lo stesso valore e la successiva iterazione ripeterebbe il salto.
:::

:::osservazione
Quando un `switch` compare dentro un ciclo, il `break` contenuto nel suo corpo conclude normalmente lo `switch`. Il controllo può quindi proseguire con altre istruzioni del corpo del ciclo. Un `continue` all’interno dello stesso `switch` appartiene invece al ciclo più interno che lo contiene, perché solo un’istruzione di iterazione fornisce un punto di prosecuzione per `continue`. La struttura delle istruzioni permette di individuare le destinazioni senza seguire tutti i valori della traccia.
:::

## Due livelli di ripetizione

:::definizione{#cicli-annidati titolo="Ciclo esterno e ciclo interno"}
Due cicli sono annidati quando il corpo del ciclo esterno contiene il ciclo interno. Entrando nel ciclo interno a ogni iterazione esterna, si esegue nuovamente la sua inizializzazione, se presente. Le iterazioni interne possono essere identificate da coppie $(i,j)$, con $i$ indice esterno e $j$ indice interno. Chiamato $m_i$ il numero di iterazioni interne nella riga $i$, il conteggio complessivo è la somma di tutti gli $m_i$.

Quando $m_i$ è lo stesso intero $c$ per tutte le $r$ iterazioni esterne, la somma vale $rc$. Se la guardia interna usa $i$, si determinano prima i valori di $j$ ammessi per una riga fissata.
:::

:::esempio{titolo="Conteggio di un triangolo"}
Si contano le coppie di interi $1\le i\le j\le 4$ con un accumulatore.

```c
int count = 0;
for (int i = 1; i <= 4; ++i) {
    for (int j = i; j <= 4; ++j) {
        ++count;
    }
}
```

Per $i=1$ sono possibili quattro valori di $j$. Per $i=2$ sono possibili tre valori, da $2$ a $4$. In generale la riga $i$ comprende $4-i+1$ valori. Si ottiene $4+3+2+1=10$. Come controllo combinatorio, le coppie con indici diversi scelgono due numeri diversi fra quattro, quindi sono sei. Le quattro coppie con $i=j$ fanno salire il totale a dieci.
:::

:::osservazione
Un `break` nel corpo del ciclo interno può ridurre un singolo $m_i$. Ad esempio, per $i$ uguale a $2$, $3$ oppure $4$, si provino in ordine i valori di $j$ a partire da $1$ e si interrompa il ciclo interno quando `j % i == 0`, prima di contare quell’iterazione. I primi multipli positivi incontrati sono rispettivamente $2$, $3$ e $4$. Si contano perciò $1$, $2$ e $3$ iterazioni che raggiungono l’accumulatore, su tre righe distinte. L’esecuzione del corpo che incontra `break` va contata separatamente quando si chiede quante volte il corpo ha iniziato l’esecuzione.
:::

## Proprietà conservate al controllo

:::definizione{#invariante-di-ciclo titolo="Invariante alla testa del ciclo"}
Una proprietà è un **invariante di ciclo** al punto di controllo se vale prima della prima valutazione della guardia e a ogni successivo ritorno a quel punto. La proprietà è formulata sui valori nello stato, anche mediante quantità matematiche che il codice non calcola. Per verificarla si dimostrano l’inizializzazione e il mantenimento. Nel mantenimento si assume la proprietà nello stato di ingresso e si dimostra che ogni transizione del corpo verso il punto di controllo la conserva.

La scelta del punto di controllo precisa quali valori compaiono nella relazione. Una proprietà necessaria all’ingresso della guardia può cessare temporaneamente di valere durante il corpo e tornare vera dopo tutti gli aggiornamenti.
:::

::::teorema{#correttezza-parziale titolo="Uscita normale con invariante"}
Si consideri un `while` con valutazione della guardia priva di effetti sullo stato e operazioni definite negli stati considerati. Si supponga che le esecuzioni che escono dal ciclo lo facciano per guardia falsa. Se $P$ vale inizialmente e ogni corpo che torna alla guardia da uno stato con $P$ e guardia vera conserva $P$, allora in ogni uscita vale $P$ insieme alla negazione della guardia.

:::dimostrazione
Alla prima valutazione vale $P$ per ipotesi. Se in una valutazione la guardia è vera, l’ipotesi di mantenimento dà $P$ al successivo ritorno alla condizione. Per induzione $P$ vale quindi a ogni valutazione raggiunta. L’uscita normale avviene durante una valutazione falsa. Poiché la valutazione lascia invariato lo stato, valgono entrambe le proprietà richieste all’uscita.
:::
::::

:::esempio{titolo="Somma progressiva dei primi interi"}
In ogni ritorno alla condizione, `s` contiene la somma dei primi `i` interi positivi.

```c
int i = 0, s = 0;
while (i < 4) {
    ++i;
    s += i;
}
```

![Stati alla guardia i minore di 4. I punti sono (0,0), (1,1), (2,3), (3,6) e (4,10).](/immagini/informatica/condizioni-e-cicli/schema-teoria-it.png)

L’invariante combina $0\le i\le 4$ e $s=\sum_{k=1}^{i} k$, con somma vuota uguale a zero. Inizialmente $i=s=0$. Se la guardia è vera, $i<4$ e il nuovo contatore è $i'=i+1\le 4$. Poiché l’assegnamento a `s` usa il nuovo contatore, lo stato aggiornato soddisfa

$$
s'=s+i'=\sum_{k=1}^{i}k+(i+1)=\sum_{k=1}^{i'} k .
$$

Alla guardia falsa vale $i\ge 4$, quindi dall’invariante segue $i=4$. La formula della somma produce $s=\dfrac{4\cdot 5}{2}=10$, in accordo con l’ultimo stato della figura.
:::

:::attenzione
La condizione $i\ge 0$ da sola è un invariante troppo debole per concludere che `i` valga il limite alla guardia falsa. Per esempio, da `i = 0` con guardia `i < 4` e aggiornamento `i += 3` si raggiunge `i = 6`. Per dimostrare un’uguaglianza all’uscita occorre una seconda informazione che vincoli il contatore anche dall’alto.
:::

## Una misura per dimostrare l’arresto

:::definizione{#variante-di-ciclo titolo="Variante intera non negativa"}
Una **variante di ciclo** a valori interi non negativi è una quantità calcolata a partire dallo stato nei punti di verifica della guardia. È non negativa in ogni stato raggiunto in quel punto e diminuisce strettamente al passaggio da uno stato con guardia vera allo stato della verifica seguente. L’espressione della variante descrive una quantità matematica e può usare grandezze che il programma tiene implicite.
:::

::::teorema{#terminazione-con-variante titolo="Arresto per discesa negli interi"}
Si supponga che il controllo raggiunga la guardia iniziale di un ciclo e che tutte le successive valutazioni della guardia e le iterazioni avviate terminino, con operazioni definite. Si supponga inoltre che ogni iterazione termini uscendo dal ciclo oppure tornando alla guardia. Se esiste una variante come quella definita, il ciclo termina dopo un numero finito di iterazioni.

:::dimostrazione
Chiamato $V_0$ il valore iniziale, dopo $k$ passaggi completi verso la guardia la quantità vale al più $V_0-k$, perché una diminuzione stretta fra interi è almeno di una unità. Quando $k>V_0$ questo limite è negativo, in contrasto con l’ipotesi di non negatività. Perciò è impossibile ritornare infinite volte al controllo. Poiché ogni iterazione e ogni controllo terminano, si giunge a un’uscita.
:::
::::

:::esempio{titolo="Quoziente e resto per sottrazione"}
Si parte da `r = 43` e `q = 0`. Finché `r` è almeno `7`, si sottrae `7` e si incrementa `q`.

```c
int r = 43, q = 0;
while (r >= 7) {
    r -= 7;
    ++q;
}
```

Il valore matematico di `r` è una variante, perché è inizialmente non negativo e la guardia permette di sottrarre `7` lasciando ancora un valore non negativo. L’identità $43=7q+r$ vale prima di entrare. Quando si passa da $q$ a $q+1$ e da $r$ a $r-7$, il secondo membro conserva lo stesso valore. La guardia falsa dà $r<7$. Le condizioni finali sono

$$
43=7q+r,\qquad 0\le r<7 .
$$

La divisione euclidea determina perciò $q=6$ e $r=1$. L’identità e la disuguaglianza provano il risultato, mentre la variante prova che lo stato finale viene raggiunto.
:::

:::attenzione
La proprietà che un contatore sia non negativo può essere insufficiente per provare progresso. Quando un `unsigned int` di valore zero viene decrementato, C produce `UINT_MAX`. La quantità matematica associata al contatore aumenta in quella transizione. Una prova con variante decrescente deve quindi dimostrare che i passi raggiungibili, compreso l’ultimo, rispettano la diminuzione senza attraversare un ritorno modulo.
:::
