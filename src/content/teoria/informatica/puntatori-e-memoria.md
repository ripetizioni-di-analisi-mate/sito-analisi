---
titolo: Puntatori e memoria dinamica
sommario: Indirizzi, array e durata degli oggetti permettono di seguire la memoria di un programma in C17, dalla prima allocazione al rilascio.
---

## Indirizzo, valore e accesso a un oggetto

:::definizione{#indirizzo-e-accesso titolo="Oggetto puntato e dereferenziazione"}
Ogni variabile occupa una posizione in memoria, e il numero di quella posizione è il suo **indirizzo**. L’operatore `&` dà l’indirizzo di una variabile, quindi se `x` è un `int`, `&x` è l’indirizzo di `x`. Un **puntatore** è una variabile che contiene un indirizzo. La dichiarazione `int *p = &x;` crea un puntatore `p` che contiene l’indirizzo di `x`; si dice che `p` **punta** a `x`. Il tipo `int *` si legge «puntatore a `int`». Anche `p` è una variabile e ha a sua volta un indirizzo, `&p`, di tipo `int **`.

L’operatore `*` applicato a un puntatore dà la variabile a cui il puntatore punta; l’operazione si chiama **dereferenziazione**. Se `p` punta a `x`, scrivere `*p` equivale a scrivere `x`. In lettura, `*p` dà il valore di `x`; a sinistra di un assegnamento, `*p = 14;` mette $14$ in `x`. Per seguire un programma con puntatori si tengono distinte due informazioni, cioè a quale variabile punta ciascun puntatore e quanto vale ciascuna variabile.
:::

:::esempio{titolo="Copiare un valore e scrivere attraverso un indirizzo"}
Il frammento si trova nel corpo di una funzione e usa tre variabili, l’intero `x`, il puntatore `p` e l’intero `copy`.

```c
int x = 7;
int *p = &x;
int copy = *p;
*p = 14;
```

La terza riga legge `x` attraverso `p` e mette $7$ in `copy`. La quarta scrive $14$ in `x` attraverso `p`. Alla fine `x` vale $14$ e `copy` vale ancora $7$, perché `copy` è una variabile distinta che aveva ricevuto una copia del valore prima della modifica.

| Istruzione eseguita | `p` punta a | `x` | `copy` |
|---|---|---:|---:|
| `int *p = &x;` | `x` | 7 | non esiste ancora |
| `int copy = *p;` | `x` | 7 | 7 |
| `*p = 14;` | `x` | 14 | 7 |
:::

:::osservazione{#puntatore-nullo titolo="Indicazione esplicita di assenza"}
Un puntatore può anche non puntare a nulla. Questo stato si indica con il valore speciale `NULL`, definito per esempio in `<stddef.h>`, e il puntatore si dice **nullo**. `NULL` è diverso dall’indirizzo di qualsiasi variabile. Una funzione che cerca un elemento e restituisce il suo indirizzo usa `NULL` per segnalare che l’elemento non c’è, e chi la chiama confronta il risultato con `NULL` prima di usarlo.
:::

:::attenzione
Un puntatore dichiarato senza valore iniziale, come `int *p;` dentro una funzione, contiene un indirizzo imprevedibile, e nemmeno il confronto con `NULL` dà un’informazione affidabile. Un puntatore che all’inizio non punta a nulla si dichiara con `int *p = NULL;`. Dereferenziare un puntatore nullo, cioè scrivere `*p` quando `p` vale `NULL`, ha comportamento indefinito, e di solito il programma si interrompe.
:::

## Effetti delle copie e significato di const

:::definizione{#alias-e-const titolo="Alias e accesso qualificato"}
Assegnare un puntatore a un altro copia l’indirizzo. Dopo `int *q = p;`, se `p` punta a `x` anche `q` punta a `x`. Due puntatori che puntano alla stessa variabile si chiamano **alias**, e una modifica fatta attraverso uno dei due si vede anche attraverso l’altro. Un assegnamento successivo `p = &y;` cambia soltanto `p`, mentre `q` continua a puntare a `x`.

La parola `const` in una dichiarazione di puntatore ha due significati diversi secondo la posizione. In `const int *p` è costante l’intero puntato, quindi attraverso `p` lo si può leggere ma non modificare, e `*p = 5;` è un errore di compilazione; `p` stesso può essere fatto puntare altrove. In `int *const p` è costante il puntatore, che punta sempre alla stessa variabile, mentre l’intero puntato si può modificare.
:::

::::teorema{titolo="Propagazione di una scrittura fra alias"}
Siano `p` e `q` due puntatori che puntano alla stessa variabile `int`. Dopo l’assegnamento `*p = v;`, una lettura di `*q` dà il valore `v`, se nel frattempo la variabile non è stata modificata di nuovo. Conta quindi a quale variabile i puntatori puntano, e non con quale nome la si raggiunge.

:::dimostrazione
L’assegnamento scrive `v` nella variabile a cui punta `p`. Per ipotesi è la stessa a cui punta `q`, quindi `*q` legge quella variabile, che contiene `v`.
:::
::::

:::esempio{titolo="Spostare un alias"}
Il frammento, nel corpo di una funzione, usa due interi e due puntatori.

```c
int x = 4;
int y = 6;
int *p = &x;
int *q = p;
*p = 9;
q = &y;
*q = *p + 3;
```

Dopo la quarta riga `p` e `q` puntano entrambi a `x`, e `*p = 9;` porta `x` a $9$. La riga `q = &y;` fa puntare `q` a `y`. L’ultima riga legge `x` attraverso `p`, ottiene $9$, e scrive $9+3=12$ in `y` attraverso `q`. Alla fine `x` vale $9$ e `y` vale $12$.
:::

:::osservazione
I puntatori permettono a una funzione di modificare una variabile di chi la chiama. La regola del passaggio per valore resta valida, ma ciò che viene copiato nel parametro è un indirizzo, e attraverso l’indirizzo la funzione raggiunge la variabile originale.

```c
void store(int *out, int value)
{
    *out = value;
}
```

La chiamata `store(&x, 18)` copia l’indirizzo di `x` nel parametro `out`, e `*out = value;` scrive $18$ in `x`. È lo stesso meccanismo di `scanf("%d", &n)`. Un assegnamento a `out` stesso, come `out = NULL;`, modificherebbe soltanto la copia locale dell’indirizzo.
:::

## Posizioni ammesse in uno stesso array

:::definizione{#passi-nello-stesso-array titolo="Spostamenti e differenze in elementi"}
Il nome di un vettore, usato in un’espressione, vale l’indirizzo del suo primo elemento, quindi `a` equivale a `&a[0]`. A un puntatore si può sommare un intero. Se `a` è un vettore di $n\geq 1$ elementi, `a + i` è l’indirizzo dell’elemento di indice $i$, cioè `&a[i]`, e `*(a + i)` equivale ad `a[i]`. La somma conta in elementi e non in byte, perché il compilatore tiene conto della dimensione del tipo. Il valore `a + n` è l’indirizzo della posizione subito dopo l’ultimo elemento. Non corrisponde a un elemento, ma è ammesso come confine con cui confrontare gli altri puntatori.

La differenza fra due puntatori allo stesso vettore dà il numero di elementi che li separa. Se `p` punta all’elemento di indice $i$ e `q` a quello di indice $j$, `q - p` vale $j-i$. Il risultato ha tipo `ptrdiff_t`, un tipo intero con segno dichiarato in `<stddef.h>`. La distanza in byte è la differenza moltiplicata per la dimensione di un elemento.
:::

:::esempio{titolo="Leggere una distanza orientata"}
Sia `a` l’array `{10, 20, 30, 40}`. Si prendano `p = a + 1`, `q = a + 3` ed `end = a + 4`.

![Array a con valori 10, 20, 30, 40, p all’indice 1, q all’indice 3 ed end al confine 4.](/immagini/informatica/puntatori-e-memoria/schema-teoria-it.png)

Il puntatore `q` corrisponde all’indice $3$ e `p` all’indice $1$, quindi `q - p` vale $2$ e `p - q` vale $-2$. Con elementi di quattro byte i due indirizzi distano otto byte. La differenza `end - p` vale $4-1=3$, ed è il numero di elementi da quello puntato da `p` fino alla fine del vettore.
:::

:::attenzione
Somme e differenze di puntatori sono definite soltanto all’interno di uno stesso vettore, compresa la posizione subito dopo l’ultimo elemento. Per un vettore di quattro elementi `a + 4` è un confine valido, ma `*(a + 4)` è un accesso fuori dal vettore, e anche il solo calcolo di `a + 5` ha comportamento indefinito. La differenza fra puntatori a due vettori diversi è indefinita, anche se in una certa esecuzione i due vettori risultano vicini in memoria.
:::

## Scansione con un confine escluso

:::definizione{#intervallo-di-puntatori titolo="Intervallo semichiuso di puntatori"}
Una parte di un vettore si può indicare con due puntatori invece che con due indici. L’intervallo `[first, last)` comprende gli elementi da quello puntato da `first` fino a quello che precede `last`; `last` è il confine escluso. I due puntatori devono appartenere allo stesso vettore, con `first` non successivo a `last`. Se `first == last` l’intervallo è vuoto.

Un ciclo su un intervallo di puntatori parte da `first`, avanza con `++p` e si ferma quando `p` è uguale a `last`. Lo stesso ciclo funziona per il vettore intero, con `first = a` e `last = a + n`, e per una sua parte.
:::

::::teorema{titolo="Conteggio esatto durante una scansione"}
Siano `first` e `last` i confini di un intervallo valido di interi che hanno un valore. Il frammento seguente conta in `hits` gli elementi dell’intervallo uguali a `key`. Il puntatore è dichiarato `const int *` perché gli elementi vengono soltanto letti, e `size_t` è dichiarato in `<stddef.h>`.

```c
size_t hits = 0;
for (const int *p = first; p != last; ++p) {
    if (*p == key) {
        ++hits;
    }
}
```

:::dimostrazione
L’invariante è «all’inizio di ogni iterazione `hits` è il numero di elementi uguali a `key` nel tratto `[first, p)`». All’inizio `p` è uguale a `first`, il tratto è vuoto e `hits` vale zero. Se `p != last`, `p` punta a un elemento dell’intervallo; il corpo aumenta `hits` esattamente quando quell’elemento è uguale a `key`, e `++p` allunga il tratto di un elemento, quindi l’invariante si conserva.

A ogni iterazione `p` avanza di un elemento e le posizioni fino a `last` sono in numero finito, quindi il ciclo termina con `p == last`. In quel momento il tratto `[first, p)` è l’intero intervallo.
:::
::::

:::esempio{titolo="Contare senza includere il confine"}
Nel vettore `{4, 8, 4, 1, 4}` si pongono `first = a + 1`, `last = a + 4` e `key = 4`. Il ciclo esamina gli elementi di indice $1$, $2$ e $3$, che valgono $8$, $4$ e $1$, e soltanto quello di indice $2$ è uguale a `key`. L’elemento di indice $4$ vale $4$, ma è il confine escluso, quindi il risultato è $1$.
:::

## Intervalli di durata e validità degli accessi

:::definizione{#durata-degli-oggetti-puntati titolo="Durata di memorizzazione"}
Un puntatore è utilizzabile soltanto finché esiste la variabile a cui punta. Il periodo in cui una variabile esiste è la sua **durata**, e i casi sono tre.

- **Durata automatica.** Una variabile dichiarata dentro una funzione, come `int x = 12;`, esiste da quando l’esecuzione entra nel blocco in cui è dichiarata fino a quando ne esce. Al ritorno dalla funzione non esiste più.
- **Durata statica.** Una variabile dichiarata con `static` esiste per tutta l’esecuzione del programma, anche se il suo nome è visibile soltanto dentro la funzione.
- **Durata allocata.** Un blocco di memoria ottenuto con `malloc` esiste da quando viene ottenuto fino a quando il programma lo rilascia con `free`.

La durata è distinta dalla visibilità, che è la parte del sorgente in cui un nome si può usare. Una variabile può esistere ancora in memoria in un punto del programma in cui il suo nome non è visibile, ed essere raggiunta con un puntatore.
:::

:::esempio{titolo="Ottenere un indirizzo che resta valido"}
La funzione restituisce l’indirizzo di una variabile statica, che resta valido dopo il ritorno.

```c
const int *limit_address(void)
{
    static const int limit = 120;
    return &limit;
}
```

Il nome `limit` è visibile soltanto dentro la funzione, ma la variabile esiste per tutta l’esecuzione, quindi chi chiama può leggerne il valore attraverso l’indirizzo ricevuto. Due chiamate restituiscono lo stesso indirizzo, perché la variabile è una sola.
:::

:::attenzione
Quando una variabile smette di esistere, i puntatori che puntavano a essa non sono più utilizzabili; un puntatore in questo stato si chiama **puntatore pendente** (*dangling pointer*). L’errore tipico è una funzione che restituisce l’indirizzo di una propria variabile automatica, come in `int x = 5; return &x;`. Al ritorno `x` non esiste più, e usare quell’indirizzo ha comportamento indefinito. Lo stesso vale per un puntatore a un blocco già rilasciato con `free`.
:::

## Richiesta in byte e inizializzazione

:::definizione{#dimensione-allocazione titolo="Dimensionare un blocco prima della richiesta"}
Finora la quantità di memoria era fissata scrivendo il programma. Con l’**allocazione dinamica** il programma chiede memoria durante l’esecuzione, nella quantità che serve in quel momento, per esempio per un vettore la cui lunghezza si conosce solo dopo aver letto i dati. La funzione `malloc`, dichiarata in `<stdlib.h>`, riceve il numero di byte richiesti e restituisce l’indirizzo dell’inizio del blocco ottenuto, oppure `NULL` se la memoria non è disponibile. Il risultato ha tipo `void *`, cioè «puntatore a un tipo non precisato», e si assegna direttamente a un puntatore del tipo voluto. Il contenuto del blocco appena ottenuto è imprevedibile.

Per $n$ elementi di $s>0$ byte ciascuno servono $ns$ byte, e la richiesta si scrive `malloc(n * sizeof *p)`. Il prodotto è calcolato nel tipo `size_t` e non deve superare il suo massimo `SIZE_MAX`, definito in `<stdint.h>`. Questo accade se e solo se
$$
n \leq \left\lfloor \dfrac{\mathrm{SIZE\_MAX}}{s}\right\rfloor .
$$
Il limite si calcola con la divisione intera `SIZE_MAX / s`, e il confronto va fatto prima della moltiplicazione.
:::

:::esempio{titolo="Allocare un vettore con limite esplicito"}
La funzione riceve il numero di elementi e restituisce un blocco per `n` interi, oppure `NULL` se `n` è zero, se il prodotto supererebbe `SIZE_MAX` o se `malloc` fallisce.

```c
#include <stdint.h>
#include <stdlib.h>

int *allocate_ints(size_t n)
{
    int *p;
    if (n == 0 || n > SIZE_MAX / sizeof *p) {
        return NULL;
    }
    p = malloc(n * sizeof *p);
    return p;
}
```

L’espressione `sizeof *p` è la dimensione del tipo a cui `p` punta, cioè `int`. Il compilatore la ricava dal tipo senza leggere `p`, quindi si può usare anche quando `p` non ha ancora un valore. Con `int` di quattro byte e $n=6$ la richiesta è di ventiquattro byte. Chi chiama la funzione deve controllare che il risultato sia diverso da `NULL` prima di usarlo.
:::

:::definizione{#inizializzazione-allocata titolo="Contenuto prima del primo accesso"}
La memoria ottenuta con `malloc` va riempita prima di essere letta, assegnando un valore a ogni elemento. La funzione `calloc(n, s)` chiede memoria per $n$ elementi di $s$ byte e in più la azzera, mettendo a zero tutti i bit. Per i tipi interi questo significa che ogni elemento vale $0$. Lo standard non garantisce che tutti i bit a zero rappresentino il puntatore nullo o lo zero in virgola mobile, anche se sui calcolatori comuni è così.
:::

:::esempio{titolo="Distinguere ottenimento e inizializzazione"}
Con `<stdlib.h>` incluso, dopo `unsigned char *p = calloc(4, sizeof *p);` si controlla che `p` sia diverso da `NULL`. I quattro elementi valgono zero. Dopo `p[1] = 7;` e `p[3] = 2;` il contenuto è $(0,7,0,2)$, con somma $9$. Con `malloc` al posto di `calloc` si dovrebbero assegnare esplicitamente anche `p[0]` e `p[2]`.
:::

## Responsabilità del blocco e rilascio

:::definizione{#proprieta-del-blocco titolo="Proprietario e riferimenti temporanei"}
Ogni blocco ottenuto con `malloc` va restituito al sistema con `free` quando non serve più; un blocco mai rilasciato resta occupato inutilmente, e l’errore si chiama **memory leak**. Per non dimenticare un rilascio e non farne due, per ogni blocco si stabilisce quale parte del programma ne è **proprietaria**, cioè ha il compito di chiamare `free`. La proprietà è una convenzione, scritta nel contratto delle funzioni, e il compilatore non la controlla. Copiare l’indirizzo di un blocco in un altro puntatore non crea un secondo blocco; i due puntatori indicano la stessa memoria, e uno solo ne è proprietario.

Una funzione che alloca un blocco e ne restituisce l’indirizzo trasferisce la proprietà a chi la chiama, che dovrà rilasciarlo in ogni percorso di esecuzione, compresi quelli in cui si esce prima per un errore.
:::

:::esempio{titolo="Completare due richieste consecutive"}
La funzione alloca due interi, li usa e li rilascia prima di tornare, quindi ne è proprietaria dall’inizio alla fine. Restituisce $1$ se entrambe le allocazioni riescono e $0$ altrimenti.

```c
int record_pair(int x, int y)
{
    int *left = malloc(sizeof *left);
    if (left == NULL) {
        return 0;
    }
    int *right = malloc(sizeof *right);
    if (right == NULL) {
        free(left);
        return 0;
    }
    *left = x;
    *right = y;
    free(right);
    free(left);
    return 1;
}
```

I percorsi possibili sono tre. Se fallisce la prima allocazione non c’è nulla da rilasciare. Se riesce la prima e fallisce la seconda, la funzione rilascia `left` prima di tornare. Se riescono entrambe, la funzione usa i due blocchi e li rilascia tutti e due. In ogni percorso, al ritorno tutti i blocchi ottenuti sono stati rilasciati.
:::

:::attenzione{#rilascio-e-alias titolo="Effetti di free sui riferimenti"}
A `free` si passa l’indirizzo restituito da `malloc`, `calloc` o `realloc` per un blocco non ancora rilasciato, oppure `NULL`, nel qual caso non accade nulla. Sono errori con comportamento indefinito rilasciare due volte lo stesso blocco, passare un indirizzo interno al blocco come `p + 1`, e usare il blocco dopo il rilascio. Dopo `free(p);` conviene scrivere `p = NULL;`, così un uso successivo per errore è riconoscibile. Le eventuali altre copie dell’indirizzo restano però puntatori pendenti.
:::

## Ridimensionamento e contenuto conservato

:::definizione{#ridimensionamento-con-realloc titolo="Esiti di realloc con una dimensione positiva"}
La funzione `realloc(p, bytes)` cambia la dimensione di un blocco già allocato, per esempio per allungare un vettore. Qui `p` è l’indirizzo del blocco e `bytes` la nuova dimensione, maggiore di zero. Gli esiti possibili sono due.

- Se la memoria non è disponibile, `realloc` restituisce `NULL` e il vecchio blocco resta valido, con il contenuto invariato.
- Se riesce, restituisce l’indirizzo del blocco con la nuova dimensione, che può trovarsi in un punto diverso della memoria. Il contenuto viene conservato fino alla più piccola fra la vecchia e la nuova dimensione, e la parte aggiunta ha contenuto imprevedibile. Il vecchio indirizzo non è più utilizzabile, e nemmeno i puntatori che puntavano dentro il vecchio blocco.

Per questo il risultato va messo in una variabile diversa da `p`. Scrivendo `p = realloc(p, bytes);`, in caso di fallimento `p` diventerebbe `NULL` e l’indirizzo del vecchio blocco, ancora allocato, andrebbe perduto. Solo dopo aver controllato che il risultato è diverso da `NULL` lo si copia in `p`.
:::

:::esempio{titolo="Aumentare la capacità conservando tre interi"}
Con `<stdlib.h>` incluso, `p` punta a un blocco di tre interi che valgono $7$, $11$ e $18$. Il frammento porta il blocco a cinque interi.

```c
int *next = realloc(p, 5 * sizeof *p);
if (next != NULL) {
    p = next;
    p[3] = 0;
    p[4] = 0;
}
```

Se `realloc` riesce, i primi tre interi conservano i loro valori e le due assegnazioni danno un valore agli elementi aggiunti, quindi il contenuto è $(7,11,18,0,0)$. Se fallisce, `p` non viene modificato e punta ancora al blocco di tre interi. In entrambi i casi `p` contiene l’indirizzo del blocco da rilasciare alla fine.
:::

:::osservazione
Se `p` è `NULL`, `realloc(p, bytes)` si comporta come `malloc(bytes)`. Un vettore che cresce si può quindi gestire con un solo schema, partendo da un puntatore nullo e da una capacità zero e usando `realloc` sia per il primo blocco sia per gli allungamenti. Poiché il blocco può cambiare posizione, per ricordare un elemento attraverso un ridimensionamento si conserva il suo indice e non il suo indirizzo.
:::
