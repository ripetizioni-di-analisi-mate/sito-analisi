---
titolo: Ricerca, ordinamento e complessità
sommario: Specifiche e invarianti per cercare e ordinare, con il conteggio dei confronti e dello spazio ausiliario.
---

## Specificare la posizione cercata

:::definizione{#precondizione-ricerca titolo="Contratto di una ricerca"}
**Cercare** un valore in un vettore significa trovare in quale posizione si trova. Sia `a` un vettore di `n` interi e `key` il valore cercato, detto **chiave**. Se la chiave compare più volte, la funzione restituisce l’indice più piccolo in cui compare, cioè la **prima occorrenza**. Se non compare, restituisce `n`, che non è un indice valido e quindi non si può confondere con una posizione. Per un vettore vuoto il risultato è `0`, che coincide con `n`.

Precisare «la prima occorrenza» rende unico il risultato. Nel vettore $(7,2,6,2,1)$ la chiave $2$ compare agli indici $1$ e $3$, e il risultato richiesto è $1$. Negli esempi si usa il tipo `size_t`, da `<stddef.h>`, per lunghezze e indici.
:::

:::definizione{#ricerca-lineare titolo="Scansione in ordine di indice"}
La **ricerca lineare** confronta la chiave con gli elementi uno dopo l’altro, a partire dall’indice zero, e si ferma al primo elemento uguale. Poiché gli elementi vengono esaminati in ordine di indice, quello trovato è la prima occorrenza. Il metodo funziona su qualsiasi vettore, anche non ordinato.

```c
size_t linear_first(const int a[], size_t n, int key)
{
    for (size_t i = 0; i < n; ++i) {
        if (a[i] == key) {
            return i;
        }
    }
    return n;
}
```

L’invariante del ciclo è «nessun elemento di indice in $[0,i)$ è uguale alla chiave». All’inizio $i=0$ e il tratto è vuoto. Se `a[i] == key` è falso, il tratto senza la chiave si allunga di un elemento. Se il ciclo termina perché `i == n`, l’invariante dice che la chiave non compare in tutto il vettore, e la funzione restituisce `n`.
:::

:::esempio{titolo="L’ordine degli indici decide il risultato"}
Nel vettore $(7,2,6,2,1)$ la ricerca della chiave $2$ confronta prima $7$ e poi $2$, e restituisce l’indice $1$. Il secondo $2$, all’indice $3$, non viene mai esaminato.

Se la prima occorrenza è all’indice $i$, i confronti con la chiave sono $i+1$. Se la chiave è assente sono $n$, cioè tutti. Per un vettore vuoto sono zero, perché la condizione `i < n` è falsa già all’inizio.
:::

## Restringere un intervallo ordinato

:::definizione{#lower-bound titolo="Limite inferiore della chiave"}
Se il vettore è ordinato si può cercare molto più in fretta. Un vettore è **non decrescente** quando ogni elemento è minore o uguale al successivo, cioè $a_i\le a_{i+1}$; sono ammessi elementi uguali. In un vettore non decrescente il **limite inferiore** (*lower bound*) di `key` è il primo indice il cui elemento è maggiore o uguale alla chiave, oppure `n` se tutti gli elementi sono minori. Nel vettore $(1,3,4,4,4,7,9)$ il limite inferiore di $4$ è $2$, quello di $5$ è $5$ e quello di $10$ è $7$. Prima del limite inferiore tutti gli elementi sono minori della chiave, dal limite in poi sono tutti maggiori o uguali.

Dal limite inferiore $p$ si ricava la prima occorrenza. Se $p<n$ e `a[p]` è uguale alla chiave, $p$ è la prima occorrenza. Altrimenti la chiave è assente, perché gli elementi prima di $p$ sono minori e quelli da $p$ in poi sono maggiori.
:::

::::teorema{#dicotomia-invariante titolo="Estremi e invariante della dicotomia"}
La **ricerca dicotomica**, o binaria, trova il limite inferiore in un vettore non decrescente dimezzando a ogni passo il tratto in cui può trovarsi. Tiene due indici, `lo` e `hi`, che delimitano il tratto $[\mathrm{lo},\mathrm{hi})$ ancora da esaminare, e confronta la chiave con l’elemento centrale `a[mid]`. Se `a[mid]` è minore della chiave, il limite sta dopo `mid` e si scarta la metà sinistra; altrimenti sta in `mid` o prima, e si scarta la metà destra.

```c
size_t lower_bound(const int a[], size_t n, int key)
{
    size_t lo = 0, hi = n;
    while (lo < hi) {
        size_t mid = lo + (hi - lo) / 2;
        if (a[mid] < key) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}
```

L’invariante è formato da tre condizioni. Vale $0\le \mathrm{lo}\le\mathrm{hi}\le n$. Ogni elemento di indice in $[0,\mathrm{lo})$ è minore della chiave. Ogni elemento di indice in $[\mathrm{hi},n)$ è maggiore o uguale alla chiave. Il limite inferiore è quindi sempre compreso fra `lo` e `hi`, estremi inclusi, e quando i due indici coincidono è il loro valore comune.

:::dimostrazione
All’inizio `lo` vale $0$ e `hi` vale $n$, i due tratti già esaminati sono vuoti e l’invariante vale. Se `lo < hi`, la metà intera di $\mathrm{hi}-\mathrm{lo}$ è minore di $\mathrm{hi}-\mathrm{lo}$, quindi $\mathrm{lo}\le\mathrm{mid}<\mathrm{hi}$ e `mid` è un indice valido. Il punto medio è calcolato come `lo + (hi - lo) / 2`, e non come `(lo + hi) / 2`, perché la somma `lo + hi` potrebbe superare il massimo del tipo.

Se `a[mid] < key`, per l’ordinamento anche tutti gli elementi prima di `mid` sono minori della chiave, quindi `lo` può passare a `mid + 1`. Altrimenti `a[mid]` e tutti gli elementi successivi sono maggiori o uguali alla chiave, quindi `hi` può passare a `mid`. In entrambi i casi l’invariante si conserva e la lunghezza $\mathrm{hi}-\mathrm{lo}$ diminuisce di almeno uno, quindi il ciclo termina con `lo == hi`, che è il limite inferiore.
:::
::::

:::esempio{titolo="Prima posizione in un gruppo di duplicati"}
Si cerca la chiave $4$ nel vettore $(1,3,4,4,4,7,9)$, che ha $n=7$ elementi.

![Limite inferiore per la chiave 4. Le righe lo, hi, mid, a[mid] sono (0,7,3,4), (0,3,1,3), (2,3,2,4) e infine gli estremi (2,2).](/immagini/informatica/ricerca-ordinamento-complessita/schema-teoria-it.png)

All’inizio il tratto è $[0,7)$ e `mid` vale $3$. Poiché `a[3]` vale $4$, che non è minore della chiave, `hi` diventa $3$. Nel tratto $[0,3)$ `mid` vale $1$; `a[1]` vale $3$, minore della chiave, quindi `lo` diventa $2$. Nel tratto $[2,3)$ `mid` vale $2$; `a[2]` vale $4$, quindi `hi` diventa $2$. Ora `lo` e `hi` coincidono e il limite inferiore è $2$, che è anche la prima occorrenza di $4$. La funzione seguente completa la ricerca.

```c
size_t binary_first(const int a[], size_t n, int key)
{
    size_t p = lower_bound(a, n, key);
    return (p < n && a[p] == key) ? p : n;
}
```

Il limite inferiore `p` è la prima occorrenza soltanto se in quella posizione c’è proprio la chiave. Se `p == n`, la condizione `p < n` è falsa e, per il corto circuito, `a[p]` non viene letto.
:::

## Contare operazioni e confrontare la crescita

:::definizione{#modello-di-costo titolo="Modello di costo e dimensione"}
Per confrontare due algoritmi si conta quante operazioni eseguono in funzione della **dimensione dell’input**, che per ricerca e ordinamento è il numero $n$ di elementi. Occorre stabilire quali operazioni contare, cioè fissare un **modello di costo**. Per ricerca e ordinamento si contano di solito i confronti fra elementi, perché il resto del lavoro è proporzionale a essi. A volte si contano anche le scritture nel vettore, perché due algoritmi con lo stesso numero di confronti possono eseguire un numero diverso di scritture.

A parità di $n$ il costo dipende dai dati. Il **caso peggiore** è il costo massimo fra tutti gli input di dimensione $n$, e il **caso migliore** è il minimo. Nella ricerca lineare il caso migliore è $1$ confronto, quando la chiave è al primo posto, e il caso peggiore è $n$ confronti, quando è assente.
:::

:::definizione{#ordini-asintotici titolo="Limite superiore e limite stretto"}
Di un costo interessa soprattutto come cresce al crescere di $n$, senza badare alle costanti. La notazione $T\in O(g)$, che si legge «$T$ è O grande di $g$», significa che da un certo $n$ in poi il costo $T(n)$ è al più un multiplo fisso di $g(n)$; in formule, esistono una costante $C>0$ e una soglia $n_0$ tali che $T(n)\le Cg(n)$ per ogni $n\ge n_0$. È un limite superiore. La notazione $T\in\Theta(g)$ significa che $T$ è compreso fra due multipli di $g$, cioè vale anche $T(n)\ge cg(n)$ per una costante $c>0$; in questo caso $T$ cresce proprio come $g$.

Per esempio, se $T(n)=4n+7$, per $n\ge1$ vale $4n\le T(n)\le 11n$, quindi $T\in\Theta(n)$, e si dice che il costo è lineare. Poiché $n\le n^2$, vale anche $T\in O(n^2)$, che è un’affermazione vera ma meno precisa. La ricerca lineare ha costo $\Theta(n)$ nel caso peggiore.
:::

::::teorema{#confronti-dicotomici titolo="Costo della ricerca dicotomica"}
La ricerca dicotomica su $n\ge1$ elementi esegue al massimo $1+\lfloor\log_2 n\rfloor$ confronti `a[mid] < key`, quindi il suo costo è $O(\log n)$. Per un vettore di un milione di elementi i confronti sono al più $20$, contro il milione della ricerca lineare. Il massimo è raggiunto quando tutti gli elementi sono maggiori o uguali alla chiave. Per $n=0$ i confronti sono zero.

:::dimostrazione
Se il tratto ha $m$ elementi, dopo un confronto ne restano al più $\left\lfloor\dfrac{m}{2}\right\rfloor$. Il ramo `hi = mid` ne lascia esattamente questo numero, e il ramo `lo = mid + 1` scarta anche l’elemento centrale e ne lascia al più altrettanti. Dopo $k$ confronti restano quindi al più $\left\lfloor\dfrac{n}{2^k}\right\rfloor$ elementi, e il ciclo termina quando questa quantità è zero, cioè quando $2^k>n$. Il più piccolo $k$ con questa proprietà è $1+\lfloor\log_2 n\rfloor$. Se tutti gli elementi sono maggiori o uguali alla chiave si esegue sempre il primo ramo e il massimo è raggiunto.
:::
::::

:::esempio{titolo="Confini nel conteggio logaritmico"}
Con $n=13$ e tutti gli elementi maggiori o uguali alla chiave, le lunghezze del tratto sono $13$, $6$, $3$, $1$ e $0$, quindi i confronti sono quattro; infatti $\lfloor\log_2 13\rfloor=3$. Con $n=16$ le lunghezze sono $16$, $8$, $4$, $2$, $1$ e $0$, e i confronti sono cinque, perché $\log_2 16=4$.

Questi numeri riguardano il calcolo del limite inferiore. La funzione che cerca la prima occorrenza esegue in più, quando il limite è minore di $n$, un confronto di uguaglianza.
:::

## Inserire una chiave nel prefisso

:::definizione{#insertion-sort titolo="Ordinamento per inserimento"}
**Ordinare** un vettore significa disporre i suoi elementi in ordine non decrescente. L’**ordinamento per inserimento** (*insertion sort*) procede come chi ordina le carte in mano. Considera gli elementi uno alla volta da sinistra, e inserisce ciascuno al posto giusto fra quelli già ordinati che lo precedono. Al passo di indice `i` gli elementi di indice minore di `i` sono già ordinati. Si salva `a[i]` in `key`, si spostano di una posizione a destra gli elementi maggiori di `key` e si scrive `key` nel posto rimasto libero. La condizione `j > 0` è scritta prima di `a[j - 1] > key`, così per il corto circuito `a[j - 1]` non viene letto quando `j` vale zero.

```c
void insertion_sort(int a[], size_t n)
{
    for (size_t i = 1; i < n; ++i) {
        int key = a[i];
        size_t j = i;
        while (j > 0 && a[j - 1] > key) {
            a[j] = a[j - 1];
            --j;
        }
        a[j] = key;
    }
}
```
:::

::::teorema{titolo="Conservazione del prefisso ordinato"}
All’inizio di ogni passo di indice $i$ il tratto $[0,i)$ contiene gli stessi elementi che conteneva all’inizio, disposti in ordine non decrescente. Alla fine l’intero vettore contiene gli elementi iniziali in ordine non decrescente.

:::dimostrazione
Al primo passo il tratto $[0,1)$ ha un solo elemento, quindi è ordinato. Si supponga ordinato il tratto $[0,i)$. Gli elementi maggiori di `key` ne occupano la parte finale, e il ciclo `while` li sposta tutti di una posizione a destra, senza cambiarne l’ordine. Il ciclo si ferma quando il posto libero è all’inizio del vettore oppure è preceduto da un elemento minore o uguale a `key`. Scrivendo `key` in quel posto il tratto $[0,i+1)$ risulta ordinato e contiene gli stessi elementi di prima. Un vettore con zero o un elemento è già ordinato e il ciclo esterno non esegue alcun passo.
:::
::::

:::osservazione
Al passo di indice $i$ i confronti fra elementi sono al più $i$. Il caso peggiore è un vettore in ordine decrescente, in cui ogni elemento va portato fino all’inizio; i confronti sono $1+2+\dots+(n-1)=\dfrac{n(n-1)}{2}$, quindi il costo è $\Theta(n^2)$. Il caso migliore è un vettore già ordinato, in cui a ogni passo il primo confronto è falso; i confronti sono $n-1$, e il costo è $\Theta(n)$. Per $n=1000$ i due casi danno $499\,500$ e $999$ confronti.
:::

:::esempio{titolo="Spostamenti e inversioni"}
Un’**inversione** è una coppia di elementi che si trovano nell’ordine sbagliato, cioè in cui quello che viene prima è maggiore di quello che viene dopo. Nell’ordinamento per inserimento ogni spostamento a destra elimina esattamente un’inversione, quindi il numero di spostamenti è uguale al numero di inversioni del vettore iniziale.

Nel vettore $(5,2,4,2)$ le inversioni sono quattro, cioè $5$ con il primo $2$, $5$ con $4$, $5$ con l’ultimo $2$ e $4$ con l’ultimo $2$. L’inserimento del primo $2$ sposta $5$. L’inserimento di $4$ sposta $5$. L’inserimento dell’ultimo $2$ sposta $5$ e $4$. Gli spostamenti sono quattro, come le inversioni. I due elementi uguali a $2$ non formano un’inversione e restano nell’ordine iniziale.
:::

## Scegliere il minimo del suffisso

:::definizione{#selection-sort titolo="Ordinamento per selezione"}
L’**ordinamento per selezione** (*selection sort*) cerca l’elemento più piccolo del vettore e lo scambia con il primo; poi cerca il più piccolo fra i rimanenti e lo scambia con il secondo, e così via. Al passo di indice `i` cerca il minimo fra gli indici da `i` a `n - 1` e lo porta in posizione `i`. La variabile `min_index` contiene l’indice del minimo trovato finora, e viene aggiornata soltanto quando si trova un elemento strettamente minore.

```c
void selection_sort(int a[], size_t n)
{
    for (size_t i = 0; i < n; ++i) {
        size_t min_index = i;
        for (size_t j = i + 1; j < n; ++j) {
            if (a[j] < a[min_index]) {
                min_index = j;
            }
        }
        if (min_index != i) {
            int saved = a[i];
            a[i] = a[min_index];
            a[min_index] = saved;
        }
    }
}
```

Dopo il passo di indice $i$ gli elementi di indice da $0$ a $i$ sono in ordine e sono tutti minori o uguali agli elementi che seguono, perché in posizione $i$ è stato messo il minimo di quelli che restavano. Lo scambio non aggiunge né toglie elementi.
:::

:::osservazione
Al passo di indice $i$ i confronti sono $n-i-1$, qualunque siano i dati. Il totale è $(n-1)+(n-2)+\dots+0=\dfrac{n(n-1)}{2}$, quindi il costo in confronti è $\Theta(n^2)$ sia nel caso migliore sia nel peggiore; un vettore già ordinato non fa risparmiare nulla. Gli scambi invece sono pochi, al più $n-1$, perché ogni passo ne esegue al più uno.
:::

:::esempio{titolo="Lo stesso vettore con due conteggi"}
Su un vettore di sei elementi tutti uguali, la selezione esegue $5+4+3+2+1=15$ confronti e nessuno scambio. L’inserimento esegue cinque confronti e nessuno spostamento, ma scrive comunque `key` al suo posto a ogni passo, per cinque scritture. Nel confrontare due algoritmi va quindi precisato che cosa si conta, cioè confronti, scambi o singole scritture.
:::

## Riconoscere la stabilità

:::definizione{#stabilita-ordinamento titolo="Ordine relativo con chiave uguale"}
Quando si ordinano dati con più campi, per esempio studenti ordinati per voto, due dati diversi possono avere la stessa chiave. Un ordinamento è **stabile** se due elementi con la stessa chiave restano nell’ordine in cui erano all’inizio. Per vederlo si scrive ogni elemento come coppia (chiave, etichetta), dove l’etichetta distingue elementi con la stessa chiave ma non entra nei confronti.

L’ordinamento per inserimento è stabile. Lo spostamento si ferma quando incontra un elemento uguale a `key`, perché la condizione è `a[j - 1] > key` con il maggiore stretto, quindi il nuovo elemento viene messo dopo quelli uguali già presenti.
:::

:::esempio{titolo="Uno scambio che inverte due record"}
Si ordinano per selezione gli elementi $(2,A)$, $(2,B)$ e $(1,C)$. Il primo passo trova il minimo $(1,C)$ e lo scambia con $(2,A)$, e il vettore diventa $(1,C)$, $(2,B)$, $(2,A)$. I passi successivi non cambiano nulla. I due elementi di chiave $2$ compaiono ora nell’ordine $B$, $A$, opposto a quello iniziale.

Il vettore finale è ordinato, quindi il risultato è corretto, ma l’ordinamento per selezione non è stabile. Lo scambio ha portato $(2,A)$ oltre $(2,B)$.
:::

## Fondere tratti già ordinati

:::definizione{#fusione-ordinata titolo="Fusione da due fronti"}
La **fusione** (*merge*) costruisce un unico tratto ordinato a partire da due tratti già ordinati. I due tratti sono consecutivi nel vettore `a`, cioè $[\mathrm{lo},\mathrm{mid})$ e $[\mathrm{mid},\mathrm{hi})$ con `lo <= mid` e `mid <= hi`, e il risultato viene scritto in un secondo vettore `tmp`, distinto da `a`. A ogni passo si confrontano i primi elementi non ancora copiati dei due tratti e si copia in `tmp` il più piccolo. Quando uno dei due tratti è finito, si copia ciò che resta dell’altro.

```c
void merge_range(const int a[], int tmp[],
                 size_t lo, size_t mid, size_t hi)
{
    size_t i = lo, j = mid, k = lo;
    while (i < mid && j < hi) {
        if (a[i] <= a[j]) {
            tmp[k++] = a[i++];
        } else {
            tmp[k++] = a[j++];
        }
    }
    while (i < mid) {
        tmp[k++] = a[i++];
    }
    while (j < hi) {
        tmp[k++] = a[j++];
    }
}
```

Gli indici `i` e `j` indicano il primo elemento non ancora copiato dei due tratti, e `k` la posizione in cui scrivere. L’elemento più piccolo fra quelli non ancora copiati è per forza il primo di uno dei due tratti, perché ciascun tratto è ordinato; per questo basta confrontare `a[i]` e `a[j]`. In caso di parità la condizione `a[i] <= a[j]` copia l’elemento del tratto sinistro, e questo rende la fusione stabile.
:::

:::esempio{titolo="Contare i confronti prima della coda"}
Si fondono $(3,7)$ e $(4,8,9)$. Il confronto fra $3$ e $4$ copia $3$. Il confronto fra $7$ e $4$ copia $4$. Il confronto fra $7$ e $8$ copia $7$. Il primo tratto è finito, quindi $8$ e $9$ vengono copiati senza altri confronti. In tutto i confronti sono tre e le scritture cinque.

In generale, per due tratti non vuoti di lunghezze $p$ e $q$ ogni confronto copia un elemento, e quando un tratto finisce nell’altro resta almeno un elemento, che viene copiato senza confronti. I confronti sono quindi al più $p+q-1$. Il costo della fusione è proporzionale al numero totale di elementi.
:::

:::esempio{titolo="Pari chiavi alla testa dei due tratti"}
Si fondono $(2,A),(4,B)$ e $(2,C),(3,D)$. Nel primo confronto le chiavi sono uguali e viene copiato $(2,A)$, che appartiene al tratto sinistro. Poi si confrontano $4$ e $2$ e viene copiato $(2,C)$; poi $4$ e $3$ e viene copiato $(3,D)$; infine si copia $(4,B)$. I due elementi di chiave $2$ sono nell’ordine $A$, $C$, come all’inizio.

Con la condizione `a[i] < a[j]` al posto di `a[i] <= a[j]`, in caso di parità verrebbe copiato per primo $(2,C)$. Il risultato sarebbe ancora ordinato, ma la fusione non sarebbe più stabile.
:::

## Seguire le divisioni del merge sort

:::definizione{#merge-sort titolo="Ordinamento per divisione e fusione"}
L’**ordinamento per fusione** (*merge sort*) è un algoritmo ricorsivo. Divide il tratto da ordinare in due metà, ordina ciascuna metà chiamando se stesso, e poi fonde le due metà ordinate. Il caso base è un tratto con zero o un elemento, che è già ordinato. La funzione riceve anche il vettore ausiliario `tmp`, della stessa lunghezza di `a`, in cui `merge_range` scrive il risultato della fusione, che viene poi ricopiato in `a`.

```c
void merge_sort(int a[], int tmp[], size_t lo, size_t hi)
{
    size_t n = hi - lo;
    if (n < 2) {
        return;
    }
    size_t mid = lo + n / 2;
    merge_sort(a, tmp, lo, mid);
    merge_sort(a, tmp, mid, hi);
    merge_range(a, tmp, lo, mid, hi);
    for (size_t k = lo; k < hi; ++k) {
        a[k] = tmp[k];
    }
}
```

La precondizione è `lo <= hi`. Per $n\ge2$ le due metà hanno lunghezze che differiscono al più di uno e sono entrambe minori di $n$, quindi le chiamate ricorsive arrivano al caso base. Per induzione sulla lunghezza, le due chiamate lasciano ordinate le due metà; la fusione produce in `tmp` l’intero tratto ordinato, e il ciclo finale lo ricopia in `a`. Per $(5,2,4,1)$ le due metà $(5,2)$ e $(4,1)$ diventano $(2,5)$ e $(1,4)$, e la fusione dà $(1,2,4,5)$.
:::

::::teorema{#spazio-ausiliario titolo="Lavoro per livello e memoria riutilizzata"}
L’ordinamento per fusione ha costo $\Theta(n\log n)$ in ogni caso, contando confronti e scritture. Usa un vettore ausiliario di $n$ elementi, oltre allo spazio per le chiamate ricorsive, la cui profondità è $O(\log n)$. In particolare, per $n=2^k$ con $k\ge0$ intero le scritture che ricopiano da `tmp` ad `a` sono esattamente $nk$. Per $n=1000$, $n\log_2 n$ vale circa $10\,000$, contro il mezzo milione di confronti del caso peggiore degli ordinamenti per inserimento e per selezione.

:::dimostrazione
Si consideri prima $n=2^k$. Le chiamate si dispongono su livelli, cioè un tratto di $n$ elementi, due di $\dfrac{n}{2}$, quattro di $\dfrac{n}{4}$, fino ai tratti di un elemento. I livelli in cui avviene una fusione sono $k$, e in ciascuno i tratti fusi coprono insieme tutti gli $n$ elementi. Ogni elemento viene scritto una volta in `tmp` e una volta ricopiato in `a`, quindi le copie di ritorno sono $n$ per livello e $nk$ in tutto. Il lavoro di ogni livello è proporzionale a $n$, perché ogni fusione esegue al più un confronto per elemento copiato; il totale è proporzionale a $nk=n\log_2 n$.

Per $n$ qualsiasi i livelli di fusione sono al più $\lceil\log_2 n\rceil$, e nei primi $\lfloor\log_2 n\rfloor$ le fusioni coprono tutti gli $n$ elementi, quindi il costo resta $\Theta(n\log n)$. Le due chiamate ricorsive vengono eseguite una dopo l’altra e usano parti diverse dello stesso vettore `tmp`, per il quale bastano quindi $n$ elementi. Nella pila ci sono al più $O(\log n)$ record di attivazione contemporaneamente, ciascuno di dimensione fissa.
:::
::::
