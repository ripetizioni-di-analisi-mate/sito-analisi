---
titolo: Ricerca, ordinamento e complessità
sommario: Specifiche e invarianti per cercare e ordinare, con il conteggio dei confronti e dello spazio ausiliario.
---

## Specificare la posizione cercata

:::definizione{#precondizione-ricerca titolo="Contratto di una ricerca"}
Sia `a` un vettore di `n` interi. Si assume che le posizioni da `0` a `n - 1` siano leggibili quando `n` è positivo. L’indice più piccolo in cui compare un valore `key` è la sua **prima occorrenza**. Per rappresentare l’assenza si può usare `n`, perché ogni indice leggibile è strettamente minore di `n`. Nel caso vuoto la risposta è `0`, che coincide con la lunghezza.

La specifica distingue l’appartenenza, che richiede solo una risposta logica, dalla ricerca della prima posizione. Con duplicati, una funzione che promette una qualunque occorrenza può restituire più indici diversi. Il contratto della prima occorrenza determina un solo risultato. Negli esempi C si usa `size_t` da `<stddef.h>` per lunghezze e indici.
:::

:::definizione{#ricerca-lineare titolo="Scansione in ordine di indice"}
La **ricerca lineare** verifica l’uguaglianza fra la chiave e gli elementi a partire dall’indice zero. Dopo ogni confronto falso, gli elementi già esaminati sono esclusi dalla ricerca. Se il confronto è vero, tutte le posizioni precedenti sono già escluse, quindi il ritorno dà la prima occorrenza. Il procedimento vale su un vettore in qualsiasi ordine.

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

Alla guardia `i < n`, l’invariante è che nessun elemento di $[0,i)$ coincide con la chiave. Vale all’inizio, perché il tratto è vuoto. Se `a[i] == key` è falso, il tratto escluso si allunga di uno. Alla guardia falsa si ha `i == n` e l’invariante esclude l’intero vettore.
:::

:::esempio{titolo="L’ordine degli indici decide il risultato"}
Il vettore $(7,2,6,2,1)$ contiene due valori uguali a $2$. La scansione per quella chiave confronta prima $7$, poi $2$, quindi restituisce l’indice $1$. La ricomparsa a indice $3$ rimane irrilevante al contratto.

Se la prima occorrenza è all’indice $i$, il numero di confronti di uguaglianza è $i+1$ perché si inizia da zero. Se il valore è assente, i confronti sono $n$. Per il vettore vuoto il primo controllo della lunghezza impedisce l’accesso agli elementi e il numero di confronti con la chiave è zero.
:::

## Restringere un intervallo ordinato

:::definizione{#lower-bound titolo="Limite inferiore della chiave"}
Un vettore è **non decrescente** quando $a_i\le a_{i+1}$ per ogni coppia adiacente esistente. Su quel vettore, il **limite inferiore** di `key` è il primo indice il cui elemento è maggiore o uguale alla chiave, oppure `n` quando tutti gli elementi sono minori. Gli indici precedenti al limite contengono quindi valori minori. Dalla posizione del limite in poi, tutti i valori sono maggiori o uguali.

Per ottenere la prima occorrenza, si controlla se il limite è un indice leggibile e se la sua chiave coincide con quella cercata. Un valore strettamente maggiore al limite certifica l’assenza, perché a sinistra si trovano solo valori minori e a destra, per l’ordinamento, valori almeno altrettanto grandi.
:::

::::teorema{#dicotomia-invariante titolo="Estremi e invariante della dicotomia"}
Sotto la precondizione di un vettore non decrescente, la seguente funzione calcola il limite inferiore. L’intervallo di elementi ancora da esaminare è semichiuso, $[\mathrm{lo},\mathrm{hi})$.

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

Si mantiene $0\le \mathrm{lo}\le\mathrm{hi}\le n$. Ogni indice di $[0,\mathrm{lo})$ ha un elemento minore della chiave. Ogni indice di $[\mathrm{hi},n)$ ha un elemento maggiore o uguale. La posizione cercata appartiene quindi ai possibili confini da `lo` a `hi`, compresi gli estremi.

:::dimostrazione
Inizialmente i due tratti già classificati sono vuoti e le disuguaglianze sugli estremi valgono. Quando `lo < hi`, la differenza `hi - lo` è positiva. La divisione intera dà un valore minore della differenza, dunque `lo <= mid` e `mid < hi`. La sottrazione e la somma del punto medio sono rappresentabili, poiché il risultato di ciascuna è fra zero e `hi`. Inoltre `mid + 1` è al massimo `hi`.

Se `a[mid] < key`, l’ordinamento estende quella disuguaglianza a tutti gli elementi precedenti, perciò il prefisso escluso può arrivare fino a `mid` incluso. Nell’altro ramo, tutti gli elementi da `mid` in poi valgono almeno la chiave, quindi `mid` può diventare il nuovo `hi`. In entrambi i casi la lunghezza del tratto ancora da classificare diminuisce strettamente e resta non negativa. Alla fine gli estremi coincidono. Le due relazioni dell’invariante caratterizzano allora il limite cercato.
:::
::::

:::esempio{titolo="Prima posizione in un gruppo di duplicati"}
Si usa la chiave $4$ sul vettore $(1,3,4,4,4,7,9)$.

![Limite inferiore per la chiave 4. Le righe lo, hi, mid, a[mid] sono (0,7,3,4), (0,3,1,3), (2,3,2,4) e infine gli estremi (2,2).](/immagini/informatica/ricerca-ordinamento-complessita/schema-teoria-it.png)

Il confronto a indice $3$ dà uguaglianza, quindi il ramo che modifica l’estremo destro sposta il limite `hi` a $3$. Il confronto a indice $1$ trova un valore minore e porta `lo` a $2$. All’indice $2$ l’uguaglianza restringe ancora il tratto, fino agli estremi coincidenti a $2$. Il limite coincide con la prima occorrenza.

```c
size_t binary_first(const int a[], size_t n, int key)
{
    size_t p = lower_bound(a, n, key);
    return (p < n && a[p] == key) ? p : n;
}
```

Se `p == n`, il corto circuito evita di leggere `a[p]`. Il controllo di uguaglianza si aggiunge solo quando il limite appartiene al vettore.
:::

## Contare operazioni e confrontare la crescita

:::definizione{#modello-di-costo titolo="Modello di costo e dimensione"}
La **dimensione dell’input** di una ricerca o di un ordinamento è qui il numero $n$ di elementi del vettore. Un **modello di costo** fissa quale operazione contare. Per confrontare algoritmi basati sull’ordine si contano spesso i confronti fra chiavi. Questo conteggio lascia fuori i test sugli indici, gli aggiornamenti dei contatori e le scritture. Queste ultime formano un secondo conteggio utile, perché due algoritmi possono effettuare lo stesso numero di confronti e un numero diverso di scritture.

Per ogni $n$ il costo può variare al variare dei dati iniziali. Il caso peggiore è il massimo sul dominio di quella dimensione e il caso migliore è il minimo. Una stima basata su operazioni di costo unitario descrive la crescita del lavoro al crescere di $n$. La memoria disponibile e la rappresentabilità degli indici limitano le istanze concrete della macchina C.
:::

:::definizione{#ordini-asintotici titolo="Limite superiore e limite stretto"}
Per funzioni di costo non negative, $T\in O(g)$ significa che esistono una costante $C>0$ e una soglia $n_0$ tali che $T(n)\le Cg(n)$ per ogni $n\ge n_0$. La notazione $T\in\Theta(g)$ richiede anche un limite inferiore $T(n)\ge cg(n)$ per una costante $c>0$ dopo una soglia. Le costanti possono essere diverse e i limiti devono valere per tutte le dimensioni abbastanza grandi.

Per esempio, se $T(n)=4n+7$, allora per $n\ge1$ valgono insieme $4n\le T(n)\le 11n$. Questo prova che $T\in\Theta(n)$. Poiché $n\le n^2$ per $n\ge1$, lo stesso costo appartiene anche a $O(n^2)$. Il limite quadratico è un limite superiore più largo.
:::

::::teorema{#confronti-dicotomici titolo="Costo della ricerca dicotomica"}
Il limite inferiore su $n\ge1$ elementi richiede al massimo $1+\lfloor\log_2 n\rfloor$ confronti `a[mid] < key`. La stima è raggiunta su un vettore in cui tutti gli elementi valgono almeno la chiave. Per $n=0$ il conteggio è zero.

:::dimostrazione
Con lunghezza corrente $m$, il ramo che assegna `hi = mid` lascia $\left\lfloor\dfrac{m}{2}\right\rfloor$ elementi. Il ramo opposto scarta anche l’elemento mediano, quindi lascia al più lo stesso numero. Dopo $k$ confronti restano al più $\left\lfloor\dfrac{n}{2^k}\right\rfloor$ elementi. Questa quantità è zero quando $2^k>n$. Il minimo intero $k$ che soddisfa tale disuguaglianza è $1+\lfloor\log_2 n\rfloor$. Se tutti gli elementi sono almeno la chiave, si percorre sempre il ramo che conserva esattamente $\left\lfloor\dfrac{m}{2}\right\rfloor$ elementi e il limite è raggiunto.
:::
::::

:::esempio{titolo="Confini nel conteggio logaritmico"}
Se $n=13$ e tutte le chiavi sono maggiori o uguali al bersaglio, le lunghezze residue sono $13$, $6$, $3$, $1$ e $0$. Quattro confronti riducono a zero la lunghezza. Per $n=16$ nella stessa situazione si conservano prima $8$ elementi, quindi servono cinque confronti. La differenza si spiega perché $2^4$ uguaglia $16$ e dopo quattro divisioni resta ancora un elemento.

Queste sequenze contano il solo limite inferiore. Nella funzione che cerca la prima occorrenza, il limite può identificare un valore strettamente maggiore della chiave. In quel caso il confronto finale di uguaglianza avviene e dà falso. Se il limite vale `n`, la funzione conclude l’assenza mediante il solo confronto sugli indici.
:::

## Inserire una chiave nel prefisso

:::definizione{#insertion-sort titolo="Ordinamento per inserimento"}
L’**insertion sort** estende un prefisso ordinato di una posizione per passo. Nel passo con indice `i` si salva la chiave da inserire e si spostano a destra le chiavi maggiori che la precedono. La guardia controlla `j > 0` prima di leggere `a[j - 1]`. Al termine, `j` indica la posizione per la chiave salvata.

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
Per ogni passo, il prefisso $[0,i)$ è una permutazione ordinata dei record inizialmente compresi nello stesso prefisso. Al termine si ottiene una permutazione non decrescente di tutto il vettore.

:::dimostrazione
Il prefisso iniziale ha un elemento, quindi è ordinato. Assumendo ordinato il prefisso precedente, le chiavi strettamente maggiori di `key` formano un tratto finale del prefisso. Il `while` sposta tutte e sole queste chiavi, conservandone l’ordine. Quando la guardia si arresta, il posto libero è all’inizio oppure segue una chiave minore o uguale a `key`. Inserendo la chiave salvata si conserva l’ordinamento e si estende di uno la permutazione. La proprietà vale quindi a ogni passo. I vettori di lunghezza zero o uno sono già ordinati.
:::
::::

:::osservazione
Nel passo con indice $i$ si eseguono al massimo $i$ confronti fra chiavi. Su una sequenza strettamente decrescente ogni chiave nuova va spostata fino all’inizio, quindi il limite è raggiunto in ciascun passo. Per $n\ge1$ il totale peggiore è $\dfrac{n(n-1)}{2}$. Su dati non decrescenti il primo confronto di ciascun passo è falso, perciò si ottengono $n-1$ confronti. Le scritture di spostamento al termine di un confronto vero vanno contate separatamente dalla scrittura finale della chiave salvata.
:::

:::esempio{titolo="Spostamenti e inversioni"}
Un’**inversione** è una coppia di posizioni iniziali in cui la chiave precedente è strettamente maggiore della seguente. L’inserimento della seconda chiave provoca uno spostamento della prima, perché il prefisso contiene già il primo record. Per questo, nel codice mostrato, gli spostamenti hanno lo stesso numero delle inversioni iniziali.

Sul vettore $(5,2,4,2)$ il primo $2$ sposta $5$. La chiave $4$ sposta ancora $5$ nel passo successivo. L’ultimo $2$ sposta $5$ e $4$, quindi gli spostamenti sono quattro. Separando le scritture, si hanno anche tre depositi della chiave salvata, uno per passo. La coppia dei due record di chiave $2$ resta nell’ordine iniziale e non contribuisce alle inversioni.
:::

## Scegliere il minimo del suffisso

:::definizione{#selection-sort titolo="Ordinamento per selezione"}
Il **selection sort** cerca il minimo tra le posizioni da `i` a `n - 1` e lo scambia con l’elemento in `i`. La funzione conserva l’indice del primo minimo a ogni scansione, perché aggiorna `min_index` solo per una chiave strettamente minore.

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

Dopo il passo, il prefisso esteso contiene chiavi in ordine non decrescente e ogni sua chiave è minore o uguale a quelle rimaste. Infatti la nuova chiave collocata alla fine del prefisso è un minimo del suffisso precedente. Lo scambio mantiene tutte le chiavi presenti.
:::

:::osservazione
Nel passo $i$ si confrontano col minimo corrente esattamente $n-i-1$ elementi. Per $n\ge1$ la somma è $\dfrac{n(n-1)}{2}$ e vale per qualsiasi disposizione iniziale. Perciò il conteggio dei confronti appartiene a $\Theta(n^2)$ sia nel caso migliore sia nel caso peggiore. Gli scambi avvengono solo quando il minimo si trova in un’altra posizione. La condizione permette da zero a $n-1$ scambi quando $n\ge1$, perché l’ultima posizione ha un suffisso di lunghezza uno.
:::

:::esempio{titolo="Lo stesso vettore con due conteggi"}
Per sei chiavi tutte uguali, la selezione esegue $5+4+3+2+1=15$ confronti. Poiché il minimo trovato rimane alla prima posizione di ciascun suffisso, esegue zero scambi. L’inserimento usa cinque confronti, tutti falsi nella parte `a[j - 1] > key`. Esegue zero spostamenti, ma il codice scrive comunque la chiave salvata in `a[j]` a ogni passo. Per confrontare il traffico in memoria bisogna quindi indicare se si conta lo spostamento di un record, lo scambio di due record oppure ogni singola scrittura.
:::

## Riconoscere la stabilità

:::definizione{#stabilita-ordinamento titolo="Ordine relativo con chiave uguale"}
Un ordinamento è **stabile** se ogni coppia di record con chiave uguale conserva l’ordine relativo che aveva in ingresso. Due record possono avere lo stesso valore di chiave e campi diversi. Per rendere osservabile l’ordine, si può assegnare a ciascuno un’etichetta che accompagna il record durante gli spostamenti, anche se i confronti usano solo la chiave.

L’insertion sort illustrato è stabile perché una chiave uguale a quella da inserire fa arrestare lo spostamento. La nuova chiave si colloca quindi dopo tutte le occorrenze equivalenti già nel prefisso. Per induzione, l’ordine relativo fra chiavi uguali rimane quello iniziale.
:::

:::esempio{titolo="Uno scambio che inverte due record"}
Si considerino $(2,A)$, $(2,B)$ e $(1,C)$ in quest’ordine. Il primo passo del selection sort sceglie l’unico minimo, $(1,C)$, e lo scambia con $(2,A)$. Il vettore diventa $(1,C)$, $(2,B)$, $(2,A)$. Nei passi successivi il primo minimo del suffisso coincide con la sua prima posizione. Quindi l’ordine finale fra le due chiavi uguali è $B$ seguito da $A$.

Il risultato è ordinato e contiene i tre record iniziali, perciò soddisfa la specifica di ordinamento. La stabilità è una proprietà aggiuntiva dell’ordine relativo. La scelta del primo minimo per valore non impedisce allo scambio di spostare un altro record equivalente oltre i suoi pari.
:::

## Fondere tratti già ordinati

:::definizione{#fusione-ordinata titolo="Fusione da due fronti"}
Si assumano due tratti non decrescenti $[\mathrm{lo},\mathrm{mid})$ e $[\mathrm{mid},\mathrm{hi})$ in `a`, con `lo <= mid` e `mid <= hi`. La **fusione** confronta il primo elemento residuo di ciascun tratto e scrive quello di chiave minore in `tmp`. Il vettore `tmp` è scrivibile nelle stesse posizioni e ha memoria separata da `a`. Una volta esaurito uno dei tratti, si copia la coda dell’altro.

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

Prima di ogni scrittura, $[\mathrm{lo},k)$ contiene in ordine tutti gli elementi consumati. Il prossimo minimo residuo deve trovarsi a una delle due teste, perché ciascun tratto è ordinato. Consumando quella testa si conserva l’invariante. La scelta del tratto sinistro in caso di uguaglianza conserva l’ordine relativo quando i due tratti provengono dalla divisione in posizioni contigue di un vettore.
:::

:::esempio{titolo="Contare i confronti prima della coda"}
Fondere $(3,7)$ e $(4,8,9)$ richiede il confronto fra $3$ e $4$, poi fra $7$ e $4$ e infine fra $7$ e $8$. Dopo aver scritto $7$ il primo tratto è esaurito. I valori $8$ e $9$ si copiano senza confrontarli con la prima sequenza. Il costo del merge è quindi di tre confronti fra chiavi e cinque scritture.

Con due tratti di lunghezze positive $p$ e $q$, ogni confronto trasferisce una chiave all’uscita. Quando si esaurisce il primo tratto, rimane almeno un elemento nell’altro, perché prima del trasferimento erano entrambi non vuoti. Ne segue il limite superiore $p+q-1$ sui confronti. Con uno dei tratti vuoto i confronti sono zero.
:::

:::esempio{titolo="Pari chiavi alla testa dei due tratti"}
Si fondano i record $(2,A),(4,B)$ e $(2,C),(3,D)$. Il primo confronto ha chiavi uguali, quindi scrive $(2,A)$, che proviene dal tratto sinistro. Il successivo confronto ha $4$ a sinistra e $2$ a destra e scrive $(2,C)$. Poi si scrive $(3,D)$, perché $3<4$, e si copia la coda $(4,B)$. L’ordine relativo $A,C$ è quello di ingresso.

Se nel confronto delle chiavi in testa si scegliesse il tratto destro in caso di parità, il primo record scritto sarebbe $(2,C)$. L’ordinamento per chiave resterebbe corretto, mentre l’ordine relativo dei due record uguali sarebbe invertito.
:::

## Seguire le divisioni del merge sort

:::definizione{#merge-sort titolo="Ordinamento per divisione e fusione"}
Il **merge sort** divide un tratto in due parti, ordina ciascuna con la stessa procedura e fonde i risultati. Il caso base ha lunghezza zero o uno. La funzione seguente usa il vettore ausiliario disgiunto già ricevuto. Le posizioni di `a` e `tmp` nel tratto devono esistere ed essere scrivibili. La funzione `merge_range` è dichiarata prima del suo uso.

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

Si richiede `lo <= hi` e si sceglie `mid` con lunghezze delle metà che differiscono al più di una unità. Entrambe sono minori di $n$ quando $n\ge2$, quindi si giunge al caso base. Per induzione sulle lunghezze, le due chiamate restituiscono tratti non decrescenti. La fusione costruisce quindi il tratto intero in ordine e la copia lo riporta nel vettore iniziale.
:::

::::teorema{#spazio-ausiliario titolo="Lavoro per livello e memoria riutilizzata"}
Con $n=2^k$, per $k\ge0$ intero, il numero di scritture che copiano dall’ausiliario al vettore è $nk$. Il merge sort mostrato ha costo totale $\Theta(n\log n)$ quando si contano almeno queste scritture e con costo unitario per confronto, accesso, aggiornamento e scrittura. Si usa un solo vettore ausiliario di $n$ posizioni per una chiamata che ordina il vettore intero, oltre allo spazio per le chiamate attive.

:::dimostrazione
Per una potenza di due, a ciascuno dei $k$ livelli di fusione i tratti partizionano il vettore. Ognuno viene scritto una volta nell’ausiliario e una volta nella copia di ritorno, quindi quest’ultima totalizza $n$ scritture per livello. Si ottengono $nk$ scritture. Il lavoro complessivo per livello è al più un multiplo di $n$, poiché ogni fusione ha al più un confronto per elemento scritto e il costo di tutte le istruzioni è proporzionale alle lunghezze.

Per $n$ generico, il numero di livelli di fusione è al più $\lceil\log_2 n\rceil$ per $n\ge2$. Ai primi $\lfloor\log_2 n\rfloor$ livelli, contati dalle chiamate di lunghezza maggiore, tutte le parti hanno lunghezza almeno due e le loro fusioni coprono $n$ elementi. Questo dà anche il limite inferiore in ordine di crescita. Le chiamate figlie avanzano una dopo l’altra e usano porzioni del medesimo vettore ausiliario, perciò bastano $n$ posizioni. Ogni record di attivazione contiene una quantità fissa di dati e il numero massimo di chiamate contemporanee è in $O(\log n)$.
:::
::::
