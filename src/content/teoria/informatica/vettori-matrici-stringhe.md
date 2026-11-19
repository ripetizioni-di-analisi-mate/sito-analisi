---
titolo: Vettori, matrici e stringhe
sommario: Come attraversare un vettore entro i suoi limiti, leggere una matrice per righe e costruire stringhe C con il terminatore al posto giusto.
---

## Oggetti composti e indici validi

:::definizione{#vettore-c titolo="Vettore di elementi omogenei"}
Un **vettore** (in inglese *array*) è una sequenza di variabili dello stesso tipo, poste una dopo l’altra in memoria e indicate con un solo nome. La dichiarazione `int a[5];` crea cinque variabili `int`, chiamate **elementi**. Ogni elemento si indica con il nome del vettore e un **indice** fra parentesi quadre, come in `a[2]`. Gli indici partono da zero, quindi per un vettore di lunghezza $n$ gli indici validi sono
$$
0\le i<n .
$$
Il primo elemento è `a[0]` e l’ultimo è `a[n - 1]`; in un vettore di cinque elementi l’ultimo è `a[4]`, e `a[5]` non esiste. Un vettore si elabora di solito con un ciclo `for (i = 0; i < n; ++i)`, in cui $n$ è il primo indice escluso.
:::

:::definizione{#inizializzazione-vettore titolo="Inizializzazione con una lista"}
Un vettore si inizializza con una lista di valori fra graffe, assegnati agli elementi in ordine. In `int a[5] = {7, -2};` l’elemento `a[0]` vale $7$ e `a[1]` vale $-2$. Se la lista ha meno valori degli elementi, quelli che restano ricevono zero, quindi `a[2]`, `a[3]` e `a[4]` valgono $0$. Se la dimensione è omessa, come in `int b[] = {7, -2};`, il compilatore la ricava dalla lista, e `b` ha due elementi.
:::

:::esempio{titolo="Leggere una cella inizializzata"}
Nel frammento seguente il vettore ha cinque elementi, e la seconda riga ne legge due.
```c
int a[5] = {7, -2};
int value = a[1] + a[4];
```
L’elemento `a[1]` vale $-2$, il secondo valore della lista. L’elemento `a[4]` non compare nella lista e vale $0$. Perciò `value` riceve $-2+0=-2$.
:::

:::attenzione
Un vettore dichiarato dentro una funzione senza lista, come `int a[5];`, non viene azzerato, e i suoi elementi hanno valori imprevedibili finché il programma non assegna loro un valore. Leggere un elemento prima di averlo assegnato è un errore. Un errore diverso è usare un indice fuori dall’intervallo, come `a[5]` per un vettore di cinque elementi; il C non controlla gli indici, e l’accesso ha comportamento indefinito.
:::

## Intervalli e invarianti di scansione

:::definizione{#intervallo-semichiuso titolo="Intervallo semichiuso di indici"}
Una parte di un vettore si indica con due indici, il primo incluso e il secondo escluso. L’intervallo **semichiuso** $[lo,hi)$ contiene gli indici da $lo$ a $hi-1$; per esempio $[1,4)$ contiene $1$, $2$ e $3$. Con questa convenzione il numero di indici è $hi-lo$, l’intervallo è vuoto quando $lo=hi$, e l’intero vettore di capacità $n$ è $[0,n)$. Gli estremi devono soddisfare $0\le lo\le hi\le n$. Un intervallo si divide in due parti senza sovrapposizioni scegliendo un indice intermedio $k$, e le parti sono $[lo,k)$ e $[k,hi)$.
:::

::::teorema{#traversata-vettore titolo="Accumulatore su un intervallo"}
Il ciclo seguente calcola la somma degli elementi di indice in $[lo,hi)$. Si suppone $0\le lo\le hi\le n$, che gli elementi dell’intervallo abbiano un valore e che nessuna somma intermedia dia overflow. Il tipo `size_t`, dichiarato in `<stddef.h>`, è il tipo intero senza segno usato per indici e dimensioni.
```c
int sum = 0;
for (size_t i = lo; i < hi; ++i) {
    sum += a[i];
}
```

:::dimostrazione
L’invariante è «prima di ogni controllo della condizione, `sum` contiene la somma degli elementi di indice in $[lo,i)$». All’inizio $i=lo$, l’intervallo è vuoto e `sum` vale zero. Se $i<hi$, l’indice $i$ è valido; il corpo aggiunge `a[i]` e l’incremento porta l’indice a $i+1$, quindi `sum` contiene la somma su $[lo,i+1)$ e l’invariante si conserva. La quantità $hi-i$ diminuisce di uno a ogni iterazione, quindi il ciclo termina, e termina con $i=hi$. In quel momento `sum` contiene la somma su tutto $[lo,hi)$.
:::
::::

:::esempio{titolo="Contare con una condizione"}
Si vogliono contare gli elementi negativi di `int a[5] = {4, -1, -3, 2, -2};` nell’intervallo $[1,4)$. Si parte da un contatore a zero e lo si aumenta di uno quando `a[i] < 0`. Gli indici $1$, $2$ e $3$ corrispondono ai valori $-1$, $-3$ e $2$; i primi due sono negativi, quindi il risultato è $2$. L’elemento `a[4]` è negativo, ma l’indice $4$ è escluso dall’intervallo e non viene contato.
:::

:::osservazione
La lunghezza $hi-lo$ ha senso soltanto se $lo\le hi$. Se $hi<lo$ la differenza sarebbe negativa, ma in una variabile `size_t`, che è senza segno, diventa un numero positivo enorme. Per questo si controlla $lo\le hi$ prima di sottrarre. Per la somma, inoltre, deve essere rappresentabile ogni somma intermedia e non soltanto il risultato finale. Con `int` di $4$ byte, sommando nell’ordine $2\,000\,000\,000$, $1\,000\,000\,000$ e $-2\,000\,000\,000$ il risultato finale $1\,000\,000\,000$ è rappresentabile, ma la prima somma intermedia $3\,000\,000\,000$ supera `INT_MAX`.
:::

:::osservazione
Una funzione che riceve $lo$, $hi$ e la capacità $n$ controlla la validità dell’intervallo con `lo <= hi && hi <= n`; gli estremi negativi sono già esclusi dal tipo `size_t`. Con $n=5$, la coppia $(4,2)$ non supera il primo controllo e la coppia $(3,6)$ non supera il secondo. La coppia $(5,5)$ li supera entrambi e indica un intervallo vuoto. Il secondo confronto è `hi <= n` e non `hi < n`, perché $hi$ è l’estremo escluso; con `hi < n` verrebbe rifiutato anche $[0,5)$, cioè l’intero vettore.
:::

## Dimensione dell’oggetto e parametri

:::definizione{#dimensione-vettore titolo="Misura in byte e numero di elementi"}
L’operatore `sizeof` applicato a un vettore dà il numero di byte occupati dall’intero vettore, e applicato a un elemento dà i byte di un elemento. Per `int a[7];`, con `int` di $4$ byte, `sizeof a` vale $28$ e `sizeof a[0]` vale $4$. Poiché gli elementi hanno tutti la stessa dimensione,
$$
\texttt{sizeof a}=7\cdot\texttt{sizeof a[0]} .
$$
Il numero di elementi si ottiene quindi con `sizeof a / sizeof a[0]`, che vale $7$ qualunque sia la dimensione di un `int`. In questo modo, se la dimensione nella dichiarazione cambia, il resto del programma resta corretto senza modifiche.
:::

:::definizione{#parametro-vettore titolo="Vettore passato a una funzione"}
Quando un vettore viene passato a una funzione, la funzione riceve l’indirizzo del primo elemento e non una copia degli elementi. Un parametro dichiarato `const int a[]` è in realtà un **puntatore**, cioè una variabile che contiene un indirizzo, e si può scrivere in modo equivalente `const int *a`; i puntatori sono l’argomento del capitolo successivo. Dentro la funzione si scrive `a[i]` come al solito, e la parola `const` indica che la funzione legge gli elementi senza modificarli. Le conseguenze sono due. La funzione non conosce la lunghezza del vettore, che va passata con un altro parametro. Dentro la funzione `sizeof a` dà la dimensione di un indirizzo, quindi la formula `sizeof a / sizeof a[0]` funziona soltanto dove il vettore è dichiarato.
:::

:::esempio{titolo="Contratto per una somma parziale"}
La funzione calcola la somma degli elementi di indice in $[lo,hi)$. Il suo contratto richiede che il vettore passato abbia almeno $hi$ elementi, che quelli dell’intervallo abbiano un valore e che le somme intermedie non diano overflow.
```c
int sum_range(const int a[], size_t lo, size_t hi)
{
    int sum = 0;
    for (size_t i = lo; i < hi; ++i) {
        sum += a[i];
    }
    return sum;
}
```
Con `int samples[4] = {9, 1, 6, 3};` la chiamata `sum_range(samples, 1, 4)` restituisce $1+6+3=10$. La chiamata con $lo=4$ e $hi=4$ indica un intervallo vuoto e restituisce $0$ senza leggere alcun elemento. Poiché il parametro è dichiarato `const`, un’istruzione come `a[i] = 0;` nel corpo sarebbe segnalata come errore dal compilatore.
:::

:::osservazione
Un parametro si può dichiarare anche nella forma `const int a[static 4]`. Significa che chi chiama deve passare un vettore con almeno quattro elementi, e il compilatore può segnalare le chiamate che non lo rispettano. Un vettore di sette elementi è ammesso, uno di tre no. La forma è adatta a funzioni che leggono sempre un numero fisso di elementi; quando la lunghezza varia, o può essere zero, si usa un parametro con la lunghezza.
:::

## Struttura fisica delle righe

:::definizione{#matrice-per-righe titolo="Matrice come vettore di vettori"}
Una **matrice** è una tabella di elementi disposti in righe e colonne. La dichiarazione `int m[3][4];` crea una matrice di $3$ righe e $4$ colonne, cioè $12$ interi. L’elemento della riga $r$ e della colonna $c$ si scrive `m[r][c]`, con $0\le r<3$ e $0\le c<4$. Per il C la matrice è un vettore di tre elementi, ciascuno dei quali è una riga, cioè un vettore di quattro `int`. In memoria le righe sono scritte una dopo l’altra, prima tutta la riga $0$, poi la riga $1$, poi la riga $2$.
:::

::::teorema{#scostamento-matrice titolo="Scostamento della cella sotto la disposizione per righe"}
Sia `T m[R][C]` una matrice con $R>0$ righe e $C>0$ colonne di elementi di tipo `T`. Poiché le righe sono memorizzate una dopo l’altra, l’elemento `m[r][c]` è preceduto da $k$ elementi e si trova $b$ byte dopo l’inizio della matrice, con
$$
k=rC+c,\qquad b=k\,\texttt{sizeof(T)} .
$$
:::dimostrazione
Prima della riga $r$ ci sono $r$ righe complete di $C$ elementi ciascuna, cioè $rC$ elementi. Nella riga $r$, prima della colonna $c$ ci sono gli elementi delle colonne da $0$ a $c-1$, che sono $c$. Il totale è $rC+c$, e ogni elemento occupa `sizeof(T)` byte.
:::
::::

:::esempio{titolo="Individuare una cella della griglia"}
Si consideri la matrice mostrata nella figura.

![Tre righe con valori 5, 9, 2, 7, poi 4, 0, 8, 1, poi 6, 3, 5, 2. La cella di riga 1 e colonna 2 vale 8.](/immagini/informatica/vettori-matrici-stringhe/schema-teoria-it.png)

L’elemento `m[1][2]` vale $8$. Prima di esso in memoria ci sono i quattro elementi della riga $0$ e gli elementi `m[1][0]` e `m[1][1]`, in tutto $1\cdot4+2=6$ elementi. Con `int` di $4$ byte l’elemento si trova $6\cdot4=24$ byte dopo l’inizio della matrice.
:::

:::attenzione
Anche se le righe sono consecutive in memoria, ogni indice deve restare nel proprio intervallo. In una matrice con righe di $4$ elementi, `m[0][4]` è un accesso fuori dalla riga $0$ e ha comportamento indefinito, anche se in memoria in quel punto si trova `m[1][0]`. Per passare da una posizione $k$ contata dall’inizio, con $0\le k<RC$, agli indici si usa la divisione per $C$, il cui quoziente è la riga e il cui resto è la colonna. Con $C=4$ la posizione $6$ dà riga $1$ e colonna $2$.
:::

## Scansioni di matrici rettangolari

:::definizione{#traversata-matrice titolo="Visita, colonne e diagonale"}
Per elaborare tutti gli elementi di una matrice con $R$ righe e $C$ colonne si usano due cicli annidati. Il ciclo esterno fa variare la riga $r$ da $0$ a $R-1$ e, per ogni riga, quello interno fa variare la colonna $c$ da $0$ a $C-1$. Per elaborare una sola colonna $j$ basta un ciclo sulle righe, che legge `m[r][j]`. Gli elementi della **diagonale principale** sono quelli con indice di riga uguale all’indice di colonna, cioè `m[i][i]`. L’indice $i$ deve essere valido sia come riga sia come colonna, quindi gli elementi della diagonale sono $\min(R,C)$; in una matrice $3\times 4$ sono tre.
:::

:::esempio{titolo="Somma di una colonna con larghezza fissa"}
La funzione somma gli elementi della colonna `col` di una matrice con righe di quattro elementi. In un parametro matrice il numero di colonne va sempre scritto, qui `[4]`, perché serve al compilatore per calcolare la posizione degli elementi; il numero di righe si passa con il parametro `rows`. Il contratto richiede `col < 4`.
```c
int column_sum(const int m[][4], size_t rows, size_t col)
{
    int sum = 0;
    for (size_t r = 0; r < rows; ++r) {
        sum += m[r][col];
    }
    return sum;
}
```
Con la matrice della figura e `col = 2` la funzione legge $2$, $8$ e $5$ e restituisce $2+8+5=15$.
:::

:::osservazione
La **trasposta** di una matrice si ottiene scambiando le righe con le colonne. Se `m` ha $R$ righe e $C$ colonne, la trasposta `t` ha $C$ righe e $R$ colonne, e `t[c][r]` è uguale a `m[r][c]`. Si calcola con due cicli annidati che eseguono `t[c][r] = m[r][c];` per ogni coppia di indici, usando per `t` una matrice distinta da `m`.
:::

:::osservazione
Due matrici con lo stesso numero totale di elementi possono avere righe di lunghezza diversa, e non sono intercambiabili. Una matrice `int[2][6]` e una `int[3][4]` contengono entrambe dodici interi, ma la funzione `column_sum` accetta soltanto la seconda, perché il suo parametro richiede righe di quattro elementi. L’elemento di riga $1$ e colonna $0$ è preceduto da $6$ elementi nella prima matrice e da $4$ nella seconda. Per scrivere una funzione che accetti matrici di larghezza qualsiasi si memorizza la matrice in un vettore semplice di $R\cdot C$ elementi e si calcola la posizione con la formula $rC+c$.
:::

## Terminazione e lunghezza del testo

:::definizione{#stringa-c titolo="Stringa terminata da carattere nullo"}
In C un testo si memorizza in un vettore di `char`, un carattere per elemento. Per indicare dove il testo finisce, dopo l’ultimo carattere si mette un carattere speciale di valore zero, scritto `'\0'` e chiamato **carattere nullo** o **terminatore**. Una **stringa C** è quindi una sequenza di caratteri seguita dal terminatore. La stringa `"ciao"` occupa cinque elementi, i quattro caratteri e il terminatore. Il carattere nullo `'\0'`, di valore $0$, è diverso dalla cifra `'0'`, che è un carattere stampabile e nel codice ASCII vale $48$. Una stringa vuota contiene soltanto il terminatore. Tutte le funzioni che lavorano sulle stringhe leggono i caratteri fino al primo terminatore e ignorano ciò che il vettore contiene dopo.
:::

:::definizione{#dimensione-e-lunghezza titolo="Capacità, sizeof e strlen"}
Per una stringa si distinguono due numeri. La **capacità** $B$ è il numero di elementi del vettore; per un vettore `s` di `char` è data da `sizeof s`, perché un `char` occupa un byte. La **lunghezza** $\ell$ è il numero di caratteri prima del terminatore, ed è data dalla funzione `strlen(s)` di `<string.h>`. Per `char s[10] = "ciao";` la capacità è $10$ e la lunghezza è $4$. Poiché serve un elemento anche per il terminatore, vale sempre
$$
0\le\ell<B .
$$
Il terminatore si trova nell’elemento di indice $\ell$. `strlen` conta gli elementi `char` e richiede che il vettore contenga un terminatore; in caso contrario prosegue oltre la fine del vettore, con comportamento indefinito.
:::

:::esempio{titolo="Sequenza con un nullo interno"}
Nella dichiarazione `char s[8] = "ab\0cd";` il vettore contiene nell’ordine `'a'`, `'b'`, `'\0'`, `'c'`, `'d'`, poi il terminatore che il compilatore aggiunge alla fine di ogni testo fra virgolette, e infine due elementi a zero. La capacità `sizeof s` è $8$. La lunghezza `strlen(s)` è $2$, perché il primo terminatore si trova all’indice $2$. I caratteri `'c'` e `'d'` sono nel vettore e si possono leggere con `s[3]` e `s[4]`, ma sono fuori dalla stringa.
:::

:::attenzione
La dichiarazione `char raw[3] = "ram";` riempie i tre elementi con i tre caratteri e non lascia posto per il terminatore. Il vettore è valido come sequenza di tre caratteri, ma non è una stringa, e passarlo a `strlen` o a `printf` con `%s` ha comportamento indefinito. Con `char text[4] = "ram";` il terminatore sta nell’elemento di indice $3$. Un vettore che deve contenere un testo di $\ell$ caratteri ha quindi bisogno di almeno $\ell+1$ elementi.
:::

## Spazio per costruire una stringa

::::teorema{#capacita-stringa titolo="Capacità per una concatenazione"}
**Concatenare** due stringhe significa scrivere la seconda di seguito alla prima. Se le due stringhe hanno lunghezze $u$ e $v$, il vettore che contiene il risultato deve avere capacità $B$ almeno pari a $u+v+1$, cioè i caratteri delle due stringhe più un terminatore. Per `"ciao"` e `"mondo"` servono $4+5+1=10$ elementi.
:::dimostrazione
La prima stringa occupa gli indici $[0,u)$ e la seconda gli indici $[u,u+v)$, quindi il terminatore va all’indice $u+v$. Questo indice è valido se $u+v<B$, cioè $B\ge u+v+1$. In un programma che usa `size_t` conviene evitare di calcolare $u+v$, che potrebbe superare il massimo del tipo. Si controlla prima $u<B$ e poi $v\le B-1-u$, due confronti che non possono dare overflow.
:::
::::

:::esempio{#costruzione-stringa titolo="Aggiungere un carattere con capacità nota"}
La funzione aggiunge il carattere `ch` in fondo a una stringa `s` di lunghezza `len`, contenuta in un vettore di capacità `cap`. Servono due elementi liberi a partire dall’indice `len`, uno per il carattere e uno per il nuovo terminatore. Se non ci sono, la funzione non modifica nulla e restituisce `false`; il tipo `bool` e i valori `true` e `false` vengono da `<stdbool.h>`.
```c
bool append_char(char s[], size_t cap, size_t len, char ch)
{
    if (len >= cap || cap - len < 2 || ch == '\0') {
        return false;
    }
    s[len] = ch;
    s[len + 1] = '\0';
    return true;
}
```
Con `char s[5] = "tre";` si ha `len = 3` e `cap = 5`. La differenza `cap - len` è $2$, quindi `'s'` viene scritto all’indice $3$ e il terminatore all’indice $4$, e la stringa diventa `"tres"`. Con una capacità di quattro elementi la differenza sarebbe $1$ e la funzione restituirebbe `false` senza scrivere. La condizione `len >= cap` è scritta per prima perché protegge la sottrazione `cap - len`, che fra valori `size_t` darebbe un numero enorme se `len` fosse maggiore di `cap`.
:::

:::osservazione
Controllare che l’indice di scrittura sia valido non basta. Con capacità $5$ e lunghezza $4$ l’elemento `s[4]` esiste, ed è quello che contiene il terminatore. Scrivere il nuovo carattere in `s[4]` sarebbe un accesso valido, ma cancellerebbe il terminatore, e il nuovo terminatore andrebbe in `s[5]`, che non esiste. Per questo la funzione richiede due elementi liberi.
:::

## Lettura e riscrittura con due indici

:::definizione{#traversata-stringa titolo="Indice di lettura e indice di scrittura"}
Per copiare da una stringa soltanto alcuni caratteri si usano due indici. L’indice di lettura $i$ scorre tutti i caratteri della stringa di partenza. L’indice di scrittura $k$ indica la posizione in cui scrivere il prossimo carattere conservato, e aumenta soltanto quando un carattere viene copiato. In ogni momento i primi $k$ elementi del risultato contengono, nello stesso ordine, i caratteri da conservare fra i primi $i$ letti, e vale $k\le i$. Alla fine si scrive il terminatore all’indice $k$. Se la stringa di partenza ha lunghezza $\ell$, al risultato bastano $\ell+1$ elementi.
:::

:::esempio{titolo="Filtro che conserva l’ordine"}
Il frammento copia in `out` i caratteri di `"sasso"` diversi da `'s'`. La capacità di `out` è $6$, sufficiente anche se tutti e cinque i caratteri venissero conservati. Il ciclo si ferma quando `source[i]` è il terminatore.
```c
char source[] = "sasso";
char out[6];
size_t k = 0;
for (size_t i = 0; source[i] != '\0'; ++i) {
    if (source[i] != 's') {
        out[k] = source[i];
        ++k;
    }
}
out[k] = '\0';
```
I tre caratteri `'s'` vengono saltati, `'a'` viene copiato all’indice $0$ e `'o'` all’indice $1$. Alla fine `k` vale $2$, il terminatore viene scritto in `out[2]` e il risultato è `"ao"`. Se la stringa di partenza è vuota il ciclo non esegue alcuna iterazione e il terminatore viene scritto in `out[0]`, quindi il risultato è la stringa vuota.
:::

:::osservazione
Per cercare una parola di lunghezza $q$ dentro un testo di lunghezza $\ell$ si prova ogni posizione di partenza e si confrontano $q$ caratteri consecutivi. Se $q>\ell$ la parola non può comparire. Altrimenti le posizioni di partenza possibili vanno da $0$ a $\ell-q$, perché oltre non restano abbastanza caratteri. Provando tutte le posizioni una per una si contano anche le occorrenze che si sovrappongono; in `"ananas"` la parola `"ana"` compare agli indici $0$ e $2$, quindi il conteggio è $2$.
:::
