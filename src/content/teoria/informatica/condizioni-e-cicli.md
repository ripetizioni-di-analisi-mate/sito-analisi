---
titolo: Condizioni, cicli e invarianti
sommario: Dalle guardie e dalla selezione alla dimostrazione di correttezza e terminazione dei cicli in C.
---

## Espressioni che decidono un percorso

:::definizione{#verita-scalare titolo="Valore logico di uno scalare"}
Un programma deve spesso scegliere che cosa fare in base a una **condizione**, per esempio «`x` è minore di $10$». In C una condizione è un’espressione numerica, che vale *falso* se è zero e *vero* se è diversa da zero, anche quando è negativa. I confronti come `x < 10`, `x == y` e `x != y` producono $1$ quando sono veri e $0$ quando sono falsi.

Lo **stato** del programma in un certo punto è l’insieme dei valori delle sue variabili in quel momento. La condizione che decide se eseguire un ramo di una selezione o un’altra ripetizione di un ciclo si chiama **guardia**. Con `x` uguale a $-6$ la guardia `x` è vera, perché $-6$ è diverso da zero, mentre la guardia `x > 0` è falsa. Scrivere soltanto `x` equivale quindi a scrivere `x != 0`.
:::

:::definizione{#cortocircuito titolo="Valutazione in corto circuito"}
Le condizioni si combinano con tre **operatori logici**. `a && b` (e) è vera quando sono vere entrambe. `a || b` (oppure) è vera quando ne è vera almeno una. `!a` (non) è vera quando `a` è falsa. Anche questi operatori producono $1$ per vero e $0$ per falso.

Gli operatori `&&` e `||` calcolano prima l’operando di sinistra, e calcolano quello di destra soltanto se serve; il meccanismo si chiama **corto circuito**. In `a && b`, se `a` è falsa il risultato è già falso e `b` non viene calcolata. In `a || b`, se `a` è vera il risultato è già vero e `b` non viene calcolata. L’operatore `&&` ha precedenza su `||`, quindi `a || b && c` equivale a `a || (b && c)`; per ottenere l’altro raggruppamento si scrive `(a || b) && c`.
:::

:::esempio{titolo="Guardia per una divisione intera"}
Il corto circuito permette di proteggere un’operazione che non sempre si può eseguire. Il frammento controlla che il divisore sia diverso da zero prima di dividere.

```c
int numerator = 18, divisor = 0;
int ok = divisor != 0 && numerator / divisor > 3;
```

Con i valori mostrati, il primo confronto è falso, perciò `ok` vale `0` e la divisione viene saltata. Con `divisor = 4` il primo confronto è vero, quindi si calcola il quoziente intero `18 / 4`, che vale `4`. Il confronto `4 > 3` è vero e `ok` vale `1`. Con `divisor = 6` la divisione è definita, ma il quoziente vale esattamente `3`, quindi il confronto stretto produce `0`.
:::

:::attenzione
La scrittura matematica $0<x<10$ non si traduce in `0 < x < 10`. Il C calcola prima `0 < x`, che vale $0$ oppure $1$, e poi confronta questo risultato con $10$; il secondo confronto è sempre vero, anche per `x` uguale a $12$. La forma corretta è `0 < x && x < 10`.

Il corto circuito riguarda anche gli effetti sulle variabili. Se `count = 2`, la disgiunzione `count > 0 || ++count == 3` vale `1` e `count` conserva il valore `2`, perché il secondo operando viene saltato.
:::

## Dalla condizione al ramo

:::definizione{#selezione-if titolo="Selezione con if"}
L’istruzione `if (condizione) istruzione` esegue l’istruzione soltanto se la condizione è vera. Con `else` si aggiunge un’istruzione alternativa, eseguita quando la condizione è falsa; dei due rami se ne esegue sempre uno e uno solo. Per mettere più istruzioni in un ramo le si racchiude fra graffe, formando un **blocco**. In una catena `if … else if … else` le condizioni vengono controllate dall’alto in basso. Si esegue il ramo della prima condizione vera e le successive non vengono nemmeno calcolate; l’`else` finale, se c’è, viene eseguito quando sono tutte false.

Due `if` scritti uno dopo l’altro, senza `else`, sono invece due scelte indipendenti, e possono essere eseguiti entrambi i rami se entrambe le condizioni sono vere.
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

Il secondo ramo viene raggiunto soltanto se la prima condizione è falsa, cioè se `t >= 0`; perciò viene eseguito per i valori da `0` a `6`. Con `t = 7` entrambe le condizioni sono false e il terzo ramo assegna `1`. Con `t = 6` la seconda condizione è vera e `band` vale `0`. Con `t = -1` si esegue il primo ramo e la seconda condizione non viene calcolata.
:::

:::definizione{#selezione-switch titolo="Selezione con switch"}
L’istruzione `switch` sceglie fra più casi in base al valore di un’espressione intera. Il corpo contiene etichette `case` seguite da una costante intera, tutte diverse fra loro. Se il valore dell’espressione è uguale a una delle costanti, l’esecuzione salta a quella etichetta. Se non è uguale a nessuna, salta all’etichetta `default`, quando c’è; altrimenti l’intero corpo viene saltato.

Dall’etichetta raggiunta l’esecuzione prosegue riga dopo riga e non si ferma all’etichetta successiva; questo proseguimento si chiama **fall-through**. Per uscire dallo `switch` alla fine di un caso si scrive `break`.

```c
switch (day) {
case 6:
case 7:
    rest = 1;
    break;
default:
    rest = 0;
}
```

In questo frammento i valori $6$ e $7$ portano entrambi a `rest = 1`, perché dall’etichetta `case 6` l’esecuzione prosegue nel caso successivo. Ogni altro valore di `day` porta a `rest = 0`.
:::

:::attenzione
Quando due `if` sono scritti uno dentro l’altro senza graffe, un `else` appartiene sempre all’`if` più vicino che non ne ha ancora uno, qualunque sia il rientro delle righe. In `if (x > 0) if (y > 0) s = 1; else s = -1;` l’`else` appartiene all’`if` su `y`. Con `x` uguale a $0$ non viene eseguito nessuno dei due assegnamenti. Per legare l’`else` all’`if` su `x` si racchiude l’`if` interno fra graffe.
:::

## Guardia iniziale e guardia finale

:::definizione{#ciclo-while titolo="Ciclo while"}
Un **ciclo** ripete un gruppo di istruzioni, detto **corpo**; ogni ripetizione si chiama **iterazione**. Il ciclo `while (condizione) corpo` controlla la condizione prima di ogni iterazione. Se è vera esegue il corpo e torna a controllarla; se è falsa passa all’istruzione dopo il ciclo. Se la condizione è falsa già al primo controllo, il corpo non viene eseguito nemmeno una volta.

Per seguire un ciclo a mano si compila una **tabella di traccia**, con una riga per ogni controllo della guardia, compreso l’ultimo, quello falso. Le colonne riportano i valori delle variabili in quel momento. L’ultima riga contiene i valori che le variabili hanno dopo il ciclo.
:::

:::esempio{titolo="Triplicazioni fino alla soglia"}
Il ciclo moltiplica `p` per tre finché `p` è minore di `13`, e conta le moltiplicazioni in `steps`. L’istruzione `p *= 3` equivale a `p = p * 3`.

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

L’ultima iterazione parte da `p` uguale a `9`, che è l’ultimo valore per cui la guardia è vera, e porta `p` a `27`. Il valore finale supera quindi la soglia `13`, perché la guardia viene controllata soltanto dopo che la moltiplicazione è stata eseguita. Le moltiplicazioni sono tre.
:::

:::definizione{#ciclo-do titolo="Ciclo do while"}
Il ciclo `do corpo while (condizione);` esegue prima il corpo e controlla la condizione dopo. Il corpo viene quindi eseguito almeno una volta. Se la condizione è vera il corpo si ripete, altrimenti il ciclo termina. Dopo la condizione è richiesto il punto e virgola.

```c
int x = 9;
do {
    x -= 2;
} while (x > 10);
```

Il corpo porta `x` da `9` a `7`, poi la condizione `7 > 10` è falsa e il ciclo termina dopo una sola iterazione. Un `while (x > 10)` con lo stesso corpo non lo eseguirebbe mai, perché `9 > 10` è falsa già all’inizio. I due cicli si comportano in modo diverso proprio quando la condizione è falsa in partenza.
:::

:::osservazione
Se il corpo di un `while` viene eseguito $k$ volte, la guardia viene controllata $k+1$ volte, cioè $k$ volte con esito vero e un’ultima volta con esito falso. In un `do while` con $k$ iterazioni i controlli sono $k$, perché ogni controllo segue un’esecuzione del corpo. Nell’esempio delle triplicazioni le iterazioni sono $3$ e i controlli $4$, come le righe della tabella.
:::

## Contatori e confini del for

:::definizione{#ciclo-for titolo="Fasi del ciclo for"}
Il ciclo `for` raccoglie in una sola riga le tre parti di un ciclo con contatore, nella forma `for (inizializzazione; condizione; aggiornamento) corpo`. Per esempio `for (int i = 0; i < 3; ++i)` esegue il corpo con `i` uguale a $0$, $1$ e $2$. L’ordine di esecuzione è il seguente.

1. L’inizializzazione viene eseguita una sola volta, all’inizio.
2. Si controlla la condizione; se è falsa il ciclo termina.
3. Si esegue il corpo.
4. Si esegue l’aggiornamento e si torna al punto 2.

Una variabile dichiarata nell’inizializzazione, come `i` nell’esempio, esiste soltanto dentro il ciclo. Nel contare le iterazioni si distinguono i valori con cui il corpo viene eseguito dal primo valore che rende falsa la condizione. Nell’esempio il corpo è eseguito per $0$, $1$, $2$ e il ciclo termina quando `i` vale $3$.
:::

::::teorema{#intervalli-discreti titolo="Conteggio con passo positivo"}
Un ciclo `for` con contatore che parte da $a$, condizione `i < b` e aggiornamento `i += d`, con $d>0$, esegue il corpo per i valori $a$, $a+d$, $a+2d$ e così via, finché restano minori di $b$. Qui $a$, $b$ e $d$ sono interi. Si suppone che il corpo non modifichi il contatore, il limite né il passo, e che i valori del contatore siano rappresentabili. Se $a\ge b$ le iterazioni sono zero. Se $a<b$, il numero $m$ di iterazioni è

$$
m=\left\lceil\frac{b-a}{d}\right\rceil .
$$
dove il simbolo $\lceil x\rceil$ indica il più piccolo intero maggiore o uguale a $x$, cioè l’arrotondamento per eccesso.
:::dimostrazione
Dopo $j$ aggiornamenti il contatore vale $a+jd$. Ciò vale per $j=0$ e, se vale per $j$, aggiungere $d$ dà $a+(j+1)d$. Perciò l’uscita avviene al primo $j$ che soddisfa $a+jd\ge b$. Quando $a<b$ la disuguaglianza equivale a $j\ge \dfrac{b-a}{d}$, quindi il minimo intero ammissibile è l’arrotondamento per eccesso.
:::
::::

:::esempio{titolo="Lettura di un intervallo semichiuso"}
Con passo $1$ e $a\le b$ il ciclo esegue il corpo per gli interi da $a$ incluso a $b$ escluso, che sono $b-a$. L’insieme di questi interi si indica con $[a,b)$, e per $a=b$ è vuoto. Con passo $3$ e intervallo $[5,19)$ la formula dà

$$
m=\left\lceil\frac{19-5}{3}\right\rceil
 =\left\lceil\frac{14}{3}\right\rceil=5 .
$$

I valori con cui il corpo viene eseguito sono $5$, $8$, $11$, $14$ e $17$. Dopo l’ultima esecuzione l’aggiornamento porta il contatore a $20$; poiché $20\ge 19$, il ciclo termina dopo cinque iterazioni.
:::

:::attenzione
Anche l’ultimo aggiornamento del contatore deve dare un valore rappresentabile. Con un contatore `int`, la condizione `i <= INT_MAX` è sempre vera; dopo l’iterazione con `i` uguale a `INT_MAX` l’incremento produce un overflow, con comportamento indefinito. Con un limite escluso, `i < n`, l’ultima iterazione avviene per `i` uguale a `n - 1` e l’ultimo incremento porta `i` a `n`, che è rappresentabile.
:::

## Uscire e passare al controllo seguente

:::definizione{#interruzione-break titolo="Uscita con break"}
L’istruzione `break` fa uscire subito dal ciclo, o dallo `switch`, più interno che la contiene. L’esecuzione prosegue dalla prima istruzione dopo quel ciclo. In un `for` l’aggiornamento non viene eseguito. `break` serve a interrompere un ciclo appena si è trovato ciò che si cercava; per esempio, in un ciclo che cerca il primo divisore di un numero, si esce al primo divisore trovato.
:::

:::definizione{#salto-continue titolo="Prossimo controllo con continue"}
L’istruzione `continue` interrompe l’iterazione in corso e passa alla successiva, saltando le istruzioni che restano nel corpo. In un `while` e in un `do while` si passa direttamente al controllo della guardia. In un `for` si esegue prima l’aggiornamento e poi il controllo. Se in un `while` l’incremento del contatore si trova dopo il `continue`, viene saltato anch’esso, e il ciclo può non terminare.
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
Dentro uno `switch` scritto nel corpo di un ciclo, `break` esce soltanto dallo `switch`, e il ciclo prosegue. Un `continue` nello stesso punto riguarda invece il ciclo, perché `continue` ha senso soltanto per i cicli, e fa passare all’iterazione successiva.
:::

## Due livelli di ripetizione

:::definizione{#cicli-annidati titolo="Ciclo esterno e ciclo interno"}
Due cicli sono **annidati** quando uno è scritto nel corpo dell’altro. A ogni iterazione del ciclo esterno il ciclo interno viene eseguito per intero, ripartendo dalla sua inizializzazione. Se il ciclo esterno fa $r$ iterazioni e quello interno ne fa ogni volta $c$, il corpo interno viene eseguito $r\cdot c$ volte; per esempio $3$ righe per $4$ colonne danno $12$ esecuzioni.

Se il numero di iterazioni interne dipende dal contatore esterno $i$, e vale $m_i$, il totale è la somma di tutti gli $m_i$. In questo caso si conta prima, per un valore fissato di $i$, quanti valori assume il contatore interno $j$.
:::

:::esempio{titolo="Conteggio di un triangolo"}
Il frammento conta le coppie di interi $(i,j)$ con $1\le i\le j\le 4$. Il contatore interno parte da `i`, quindi il numero di iterazioni interne cambia a ogni riga.

```c
int count = 0;
for (int i = 1; i <= 4; ++i) {
    for (int j = i; j <= 4; ++j) {
        ++count;
    }
}
```

Per $i=1$ il contatore $j$ assume i quattro valori da $1$ a $4$. Per $i=2$ ne assume tre, da $2$ a $4$. In generale per la riga $i$ i valori sono $4-i+1$. Il totale è $4+3+2+1=10$, quindi alla fine `count` vale $10$.
:::

:::osservazione
Un `break` nel ciclo interno fa uscire soltanto da quello, e il ciclo esterno prosegue con l’iterazione successiva. In questo modo le iterazioni interne possono essere meno del previsto. Si supponga che per $i$ uguale a $2$, $3$ e $4$ il ciclo interno provi $j=1,2,3,\dots$ e si interrompa con `break` appena `j % i == 0`, prima di incrementare un contatore. Il primo $j$ divisibile per $i$ è $i$ stesso, quindi il contatore viene incrementato $i-1$ volte, cioè $1$, $2$ e $3$ volte nelle tre righe, per un totale di $6$.
:::

## Proprietà conservate al controllo

:::definizione{#invariante-di-ciclo titolo="Invariante alla testa del ciclo"}
Per dimostrare che un ciclo calcola ciò che deve si usa un **invariante di ciclo**, cioè una proprietà delle variabili che è vera ogni volta che l’esecuzione arriva al controllo della guardia, prima della prima iterazione e dopo ciascuna. Nel ciclo che somma in `s` gli interi da $1$ a `i`, un invariante è «`s` è la somma dei primi `i` interi positivi». Per dimostrare che una proprietà è un invariante servono due passi. Nell’**inizializzazione** si verifica che vale prima della prima iterazione. Nel **mantenimento** si suppone che valga all’inizio di un’iterazione, con la guardia vera, e si dimostra che vale ancora alla fine del corpo.

L’invariante riguarda il momento del controllo della guardia. A metà del corpo, quando solo alcune variabili sono state aggiornate, può essere temporaneamente falso.
:::

::::teorema{#correttezza-parziale titolo="Uscita normale con invariante"}
Si consideri un ciclo `while` in cui il controllo della guardia non modifica le variabili e da cui si esce soltanto quando la guardia è falsa. Se una proprietà $P$ vale prima del ciclo, e ogni esecuzione del corpo che parte con $P$ e la guardia vere termina con $P$ ancora vera, allora all’uscita dal ciclo valgono insieme $P$ e la negazione della guardia. Da queste due informazioni si ricava il risultato del ciclo.

:::dimostrazione
Alla prima valutazione vale $P$ per ipotesi. Se in una valutazione la guardia è vera, l’ipotesi di mantenimento dà $P$ al successivo ritorno alla condizione. Per induzione $P$ vale quindi a ogni valutazione raggiunta. L’uscita normale avviene durante una valutazione falsa. Poiché la valutazione lascia invariato lo stato, valgono entrambe le proprietà richieste all’uscita.
:::
::::

:::esempio{titolo="Somma progressiva dei primi interi"}
Il ciclo somma in `s` gli interi da $1$ a $4$. Si dimostra che il risultato è $10$ usando l’invariante «`s` è la somma dei primi `i` interi positivi, e `i` è compreso fra $0$ e $4$».

```c
int i = 0, s = 0;
while (i < 4) {
    ++i;
    s += i;
}
```

![Stati alla guardia i minore di 4. I punti sono (0,0), (1,1), (2,3), (3,6) e (4,10).](/immagini/informatica/condizioni-e-cicli/schema-teoria-it.png)

In formule l’invariante è $0\le i\le 4$ e $s=\sum_{k=1}^{i} k$, dove la somma senza termini vale zero. **Inizializzazione.** All’inizio $i=0$ e $s=0$, e la somma dei primi zero interi è zero. **Mantenimento.** Se la guardia è vera, $i<4$. Il corpo porta il contatore a $i'=i+1\le 4$ e poi somma a `s` il nuovo contatore, quindi il nuovo valore $s'$ soddisfa

$$
s'=s+i'=\sum_{k=1}^{i}k+(i+1)=\sum_{k=1}^{i'} k .
$$

**Uscita.** Quando la guardia è falsa vale $i\ge 4$; insieme a $i\le 4$ dell’invariante si ottiene $i=4$. Perciò $s=1+2+3+4=\dfrac{4\cdot 5}{2}=10$, in accordo con l’ultimo punto della figura.
:::

:::attenzione
Un invariante troppo debole non basta a ricavare il risultato. La sola condizione $i\ge 0$ è un invariante, ma all’uscita, insieme a $i\ge 4$, non dice quanto vale `i`. Con `i = 0`, guardia `i < 4` e aggiornamento `i += 3` il contatore assume i valori $0$, $3$ e $6$, e all’uscita vale $6$. Per concludere $i=4$ serve che l’invariante limiti il contatore anche dall’alto, come fa $i\le 4$ nell’esempio.
:::

## Una misura per dimostrare l’arresto

:::definizione{#variante-di-ciclo titolo="Variante intera non negativa"}
L’invariante garantisce che il risultato sia corretto *se* il ciclo termina. Per dimostrare che termina si usa una **variante di ciclo**, cioè una quantità intera calcolata dalle variabili che soddisfa due condizioni. A ogni controllo della guardia è maggiore o uguale a zero. A ogni iterazione diminuisce di almeno uno. In `for (int i = 0; i < n; ++i)` una variante è $n-i$, il numero di iterazioni che restano. Un intero non negativo non può diminuire all’infinito, quindi il ciclo termina.
:::

::::teorema{#terminazione-con-variante titolo="Arresto per discesa negli interi"}
Si consideri un ciclo in cui ogni iterazione termina, tornando alla guardia oppure uscendo dal ciclo. Se il ciclo ha una variante, cioè una quantità intera che è non negativa a ogni controllo della guardia e diminuisce a ogni iterazione, allora il ciclo termina dopo un numero finito di iterazioni, al più pari al valore iniziale della variante.

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

La quantità `r` è una variante. All’inizio vale $43$; la guardia `r >= 7` garantisce che dopo la sottrazione resti maggiore o uguale a zero, e a ogni iterazione diminuisce di $7$. Il ciclo quindi termina. L’invariante è $43=7q+r$. All’inizio vale perché $43=7\cdot 0+43$. Un’iterazione porta $q$ a $q+1$ e $r$ a $r-7$, e $7(q+1)+(r-7)=7q+r$, quindi l’uguaglianza si conserva. All’uscita la guardia è falsa, cioè $r<7$. Valgono quindi

$$
43=7q+r,\qquad 0\le r<7 .
$$

Questi sono il quoziente e il resto della divisione di $43$ per $7$, cioè $q=6$ e $r=1$. L’invariante dimostra che il risultato è corretto, la variante dimostra che il ciclo termina.
:::

:::attenzione
Con un contatore `unsigned int` la condizione «maggiore o uguale a zero» è sempre vera e non aiuta. In `for (unsigned int i = n; i >= 0; --i)` la guardia è sempre vera; quando `i` vale $0$ il decremento produce `UINT_MAX`, per la regola dell’aritmetica senza segno, e il ciclo non termina. In quel passaggio il valore di `i` aumenta, quindi `i` non è una variante.
:::
