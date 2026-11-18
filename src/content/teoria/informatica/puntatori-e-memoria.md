---
titolo: Puntatori e memoria dinamica
sommario: Indirizzi, array e durata degli oggetti permettono di seguire la memoria di un programma in C17, dalla prima allocazione al rilascio.
---

## Indirizzo, valore e accesso a un oggetto

:::definizione{#indirizzo-e-accesso titolo="Oggetto puntato e dereferenziazione"}
Un oggetto in C è una regione di memoria il cui contenuto rappresenta un valore. Dato un oggetto `x` di tipo `int`, l’espressione `&x` ne fornisce l’indirizzo e ha tipo `int *`. Si può conservare questo valore in una variabile `p` di tipo `int *`. In tal caso, `p` è a sua volta un oggetto. Il valore contenuto in `p` individua `x`, mentre `&p` individua il puntatore stesso e ha tipo `int **`.

Se `p` punta a un oggetto `int` in corso di durata, la **dereferenziazione** `*p` dà un’espressione che designa quell’oggetto. Quando l’espressione è letta, si ottiene il valore memorizzato. Quando è a sinistra di un assegnamento, in assenza di qualifiche che impediscono la modifica, indica dove scrivere. Durante una traccia si registrano quindi la destinazione del puntatore e il contenuto dell’oggetto in due colonne separate.
:::

:::esempio{titolo="Copiare un valore e scrivere attraverso un indirizzo"}
Il frammento è nel corpo di una funzione. I tre oggetti `x`, `p` e `copy` hanno ciascuno la propria memoria.

```c
int x = 7;
int *p = &x;
int copy = *p;
*p = 14;
```

Al momento dell’inizializzazione di `copy`, la dereferenziazione legge $7$ da `x`. L’ultima istruzione sceglie ancora `x` come destinazione e vi scrive $14$. A quel punto `x` vale $14$ e `copy` vale $7$, perché il suo valore era stato copiato prima della scrittura.

| Istruzione completata | Destinazione di `p` | `x` | `copy` |
|---|---|---:|---:|
| `int *p = &x;` | `x` | 7 | da dichiarare |
| `int copy = *p;` | `x` | 7 | 7 |
| `*p = 14;` | `x` | 14 | 7 |
:::

:::osservazione{#puntatore-nullo titolo="Indicazione esplicita di assenza"}
La macro `NULL`, disponibile per esempio in `<stddef.h>`, si espande in una costante di puntatore nullo. Assegnata a un puntatore, produce il valore nullo di quel tipo. Il valore nullo si confronta diverso da un puntatore a un oggetto o a una funzione. Una funzione che cerca un oggetto può quindi restituire `NULL` per indicarne l’assenza. Il chiamante confronta il risultato con `NULL` prima di un eventuale accesso.
:::

:::attenzione
Un puntatore automatico dichiarato come `int *p;` ha un valore indeterminato finché non viene inizializzato o assegnato. Il test `p != NULL` richiede un valore già determinato. Se il puntatore deve rappresentare inizialmente un’assenza, si usa `int *p = NULL;`. Una dereferenziazione del valore nullo ha comportamento indefinito.
:::

## Effetti delle copie e significato di const

:::definizione{#alias-e-const titolo="Alias e accesso qualificato"}
Due puntatori sono **alias** di un oggetto quando entrambi lo designano. L’inizializzazione `int *q = p;` copia il valore di un `int *` già inizializzato. Se `p` punta a `x`, la copia fa puntare anche `q` a `x`. L’assegnamento successivo `p = &y;` cambia soltanto il valore memorizzato in `p`. Nel disegno della traccia si sposta una freccia, mentre l’altra conserva la destinazione.

Nella dichiarazione `const int *p`, la qualifica riguarda l’intero accessibile attraverso `p`. L’espressione `*p` designa un `const int` e l’assegnamento attraverso quell’espressione viola il vincolo che richiede un lvalue modificabile. Nella dichiarazione `int *const p`, la qualifica riguarda invece il puntatore. In questo caso l’oggetto puntato può essere un intero modificabile, mentre la destinazione iniziale è fissata per la durata di `p`.
:::

::::teorema{titolo="Propagazione di una scrittura fra alias"}
Siano `p` e `q` due puntatori validi allo stesso oggetto `int` modificabile. Se un assegnamento `*p = v;` scrive un valore rappresentabile e una lettura successiva di `*q` è effettuata prima di altre scritture, la lettura restituisce il valore assegnato. Il criterio riguarda l’identità dell’oggetto designato.

:::dimostrazione
La destinazione dell’assegnamento è l’oggetto designato dall’espressione `*p`. Per ipotesi lo stesso oggetto è designato da `*q`. La lettura successiva ne accede al contenuto dopo l’assegnamento. Poiché fra le due operazioni il contenuto resta invariato, il risultato della lettura è quello memorizzato.
:::
::::

:::esempio{titolo="Spostare un alias"}
Nel corpo di una funzione si parta da due interi distinti.

```c
int x = 4;
int y = 6;
int *p = &x;
int *q = p;
*p = 9;
q = &y;
*q = *p + 3;
```

Prima di aggiornare `q`, entrambi i puntatori designano `x` e l’assegnamento porta quell’oggetto a $9$. Dopo `q = &y`, la scrittura attraverso `q` va in `y`, mentre la lettura attraverso `p` prende $9$ da `x`. La coppia finale dei valori è $(9,12)$.
:::

:::osservazione
Una funzione riceve ciascun argomento **per valore**, anche quando riceve un indirizzo. Per esempio, nella definizione seguente il parametro `out` è una copia dell’indirizzo passato. La scrittura attraverso la copia modifica l’oggetto del chiamante, purché l’argomento punti a un `int` scrivibile e in corso di durata.

```c
void store(int *out, int value)
{
    *out = value;
}
```

La chiamata `store(&x, 18)` scrive $18$ in `x`. Un assegnamento al solo parametro `out` avrebbe effetto sul parametro locale. Per aggiornare una variabile puntatore del chiamante si passa invece il suo indirizzo, che ha un livello di indirezione in più.
:::

## Posizioni ammesse in uno stesso array

:::definizione{#passi-nello-stesso-array titolo="Spostamenti e differenze in elementi"}
Sia `a` un array di $n\geq1$ elementi dello stesso tipo `T`. In `a + i`, il nome `a` si converte in un puntatore al primo elemento. Per un indice $i$ con $0\leq i<n$, `a + i` punta all’elemento `a[i]`. Il valore `a + n` è il puntatore **alla posizione successiva** all’ultimo elemento. Esso rappresenta un confine e può essere confrontato con puntatori dello stesso array.

Se `p` corrisponde all’indice $i$ e `q` all’indice $j$ dello stesso array, includendo la posizione successiva, `q - p` vale $j-i$ quando la differenza è rappresentabile in `ptrdiff_t`. Questo tipo intero con segno è dichiarato in `<stddef.h>`. La differenza esprime un numero di elementi. La distanza in byte di quelle posizioni nel modello contiguo si ottiene moltiplicando la differenza per `sizeof(T)`, intesa come grandezza matematica.
:::

:::esempio{titolo="Leggere una distanza orientata"}
Sia `a` l’array `{10, 20, 30, 40}`. Si prendano `p = a + 1`, `q = a + 3` ed `end = a + 4`.

![Array a con valori 10, 20, 30, 40, p all’indice 1, q all’indice 3 ed end al confine 4.](/immagini/informatica/puntatori-e-memoria/schema-teoria-it.png)

Poiché `q` è all’indice $3$ e `p` all’indice $1$, `q - p` vale $3-1=2$. La differenza opposta `p - q` vale $-2$. Su una macchina in cui un elemento occupa quattro byte, due elementi corrispondono a otto byte di distanza. Il valore di `end - p` è $4-1=3$. Questo è il numero degli elementi a partire da quello designato da `p` e fino al termine dell’array.
:::

:::attenzione
L’aritmetica dei puntatori si svolge entro lo stesso array, esteso alla sola posizione successiva. Per un array di quattro elementi, `a + 4` è un confine valido, mentre calcolare `a + 5` ha comportamento indefinito. L’accesso in lettura o scrittura attraverso `a + 4` ha comportamento indefinito perché manca un oggetto in quella posizione. Anche la sottrazione fra puntatori a elementi di due array distinti è indefinita. Una vicinanza apparente degli indirizzi in una particolare esecuzione non soddisfa la condizione sullo stesso array.
:::

## Scansione con un confine escluso

:::definizione{#intervallo-di-puntatori titolo="Intervallo semichiuso di puntatori"}
Un intervallo semichiuso `[first, last)` di un array comprende gli elementi da `first` fino alla posizione che precede `last`. I due estremi appartengono alle posizioni ammesse dello stesso array e l’indice di `first` è minore o uguale all’indice di `last`. Il caso `first == last` è l’intervallo vuoto. Nel caso particolare in cui un contratto ammette entrambi gli estremi nulli per l’intervallo vuoto, il ciclo deve concludersi per uguaglianza prima di qualsiasi aritmetica.

Percorrere un intervallo per indirizzi consente di riusare il medesimo algoritmo per l’array intero e per una parte interna. La posizione finale resta il limite del ciclo. Nel corpo si accede soltanto all’elemento che precede quel limite o a un elemento anteriore.
:::

::::teorema{titolo="Conteggio esatto durante una scansione"}
Siano `first` e `last` i confini ordinati di un intervallo valido di interi inizializzati, con lunghezza rappresentabile in `size_t`. Il frammento seguente conta gli elementi uguali a `key`. Le dichiarazioni di `size_t` in `<stddef.h>` sono visibili.

```c
size_t hits = 0;
for (const int *p = first; p != last; ++p) {
    if (*p == key) {
        ++hits;
    }
}
```

:::dimostrazione
All’inizio di ogni iterazione `hits` è il numero di occorrenze nel tratto già visitato `[first, p)`. Quando `p = first` quel tratto è vuoto e il contatore è zero. Se `p != last`, la posizione corrente denota un elemento dell’intervallo. L’istruzione condizionale aggiunge uno esattamente quando l’elemento è uguale alla chiave. La successiva avanzata di `p` estende il tratto visitato di un elemento e conserva l’invariante.

La posizione del puntatore avanza di un elemento ad ogni iterazione e i confini delimitano un numero finito di posizioni. Alla terminazione `p == last`, quindi l’invariante riguarda l’intero intervallo. Il contatore è sempre al più pari alla lunghezza, perciò gli incrementi sono rappresentabili.
:::
::::

:::esempio{titolo="Contare senza includere il confine"}
Nell’array `{4, 8, 4, 1, 4}` si pongano `first = a + 1`, `last = a + 4` e `key = 4`. Gli indici visitati sono $1$, $2$ e $3$, con valori rispettivamente $8$, $4$ e $1$. Solo l’indice $2$ contribuisce al contatore. L’elemento di indice $4$ vale ancora $4$, ma si trova al confine e viene escluso, quindi il risultato è $1$.
:::

## Intervalli di durata e validità degli accessi

:::definizione{#durata-degli-oggetti-puntati titolo="Durata di memorizzazione"}
La **durata di memorizzazione** determina per quale periodo è disponibile la memoria di un oggetto. Per gli esempi del capitolo si distinguono tre casi.

- Un oggetto locale ordinario, per esempio `int x = 12;` in una funzione, ha durata automatica. Per un oggetto automatico con tipo privo di dimensioni variabili, la durata si estende dall’ingresso nel blocco associato fino alla sua fine. Una chiamata o un blocco interno sospendono l’esecuzione del blocco esterno, mentre la durata dell’oggetto continua.
- Un oggetto dichiarato `static` in un blocco ha durata statica. Esiste per l’intera esecuzione del programma, anche se il suo nome si usa soltanto entro l’ambito della dichiarazione.
- Un oggetto ottenuto da un’allocazione riuscita ha durata allocata, dall’allocazione fino al rilascio corrispondente.

La visibilità di un nome riguarda la parte di testo nella quale lo si può usare. La durata riguarda l’oggetto durante l’esecuzione. Un parametro puntatore e l’oggetto cui punta possono avere durate diverse.
:::

:::esempio{titolo="Ottenere un indirizzo che resta valido"}
La funzione restituisce un indirizzo preso da un oggetto con durata statica.

```c
const int *limit_address(void)
{
    static const int limit = 120;
    return &limit;
}
```

Il nome `limit` è locale al blocco della funzione. L’oggetto resta disponibile dopo il ritorno e il chiamante può accedere al suo valore attraverso l’indirizzo ottenuto. Due chiamate alla funzione restituiscono l’indirizzo dello stesso oggetto. Al termine della prima chiamata termina l’esecuzione del blocco, mentre la durata statica di `limit` prosegue.
:::

:::attenzione
Quando termina la durata di un oggetto, il valore di un puntatore che lo designava diventa indeterminato. Per esempio, dopo l’uscita dal blocco in cui è dichiarato un intero automatico, un accesso all’intero attraverso un indirizzo salvato prima dell’uscita ha comportamento indefinito. La stessa regola si applica ai puntatori che designavano un blocco rilasciato. Per documentare lo stato di un programma si ricostruisce prima la durata dell’oggetto, poi si verifica se l’accesso ricade in quella durata.
:::

## Richiesta in byte e inizializzazione

:::definizione{#dimensione-allocazione titolo="Dimensionare un blocco prima della richiesta"}
`malloc`, dichiarata in `<stdlib.h>`, riceve una quantità espressa in byte di tipo `size_t`. Se la richiesta positiva è soddisfatta, restituisce un puntatore al blocco ottenuto. In caso di fallimento restituisce un puntatore nullo. Il risultato ha tipo `void *`. L’assegnamento a un `int *` converte il valore nel tipo del puntatore destinatario. Il contenuto iniziale del blocco ottenuto con `malloc` è indeterminato.

Per $n$ elementi ciascuno di dimensione $s$, con $s>0$, la richiesta matematica è $n s$ byte. Il prodotto è rappresentabile in `size_t` se e solo se
$$
n \leq \left\lfloor \dfrac{\mathrm{SIZE\_MAX}}{s}\right\rfloor .
$$
`SIZE_MAX`, dichiarato in `<stdint.h>`, è il massimo valore di `size_t`. La divisione intera applicata a `SIZE_MAX` e alla dimensione positiva fornisce direttamente il limite da verificare prima della moltiplicazione.
:::

:::esempio{titolo="Allocare un vettore con limite esplicito"}
La funzione seguente riceve un numero di elementi e restituisce un blocco di interi da inizializzare. Il contratto sceglie `NULL` anche per $n=0$, così ogni chiamata effettiva a `malloc` ha dimensione positiva.

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

`sizeof *p` qui usa il tipo fisso `int` e il suo operando non viene valutato. Perciò, durante il calcolo della dimensione, il valore di `p` è irrilevante. Se `sizeof(int)` vale quattro byte e $n=6$, la richiesta, dopo la verifica, è di ventiquattro byte. Una richiesta rappresentabile può ancora fallire per indisponibilità di memoria, quindi il chiamante controlla comunque il puntatore restituito.
:::

:::definizione{#inizializzazione-allocata titolo="Contenuto prima del primo accesso"}
Con `malloc` si ottiene memoria, poi si scrive il valore di ogni elemento che sarà letto. Con `calloc(n, s)`, per $n>0$, $s>0$ e risultato non nullo, si ottiene memoria per $n$ elementi di $s$ byte ciascuno con tutti i bit iniziali a zero. Per `unsigned char` questi bit rappresentano il valore numerico zero. La rappresentazione tutta a zero non è richiesta per il valore nullo di un tipo puntatore o per lo zero in virgola mobile.
:::

:::esempio{titolo="Distinguere ottenimento e inizializzazione"}
Con `<stdlib.h>` incluso e `unsigned char *p = calloc(4, sizeof *p);`, se `p` è non nullo i quattro elementi valgono inizialmente zero. Dopo le assegnazioni `p[1] = 7;` e `p[3] = 2;`, la sequenza è $(0,7,0,2)$. La somma è $9$. La stessa sequenza si può ottenere con `malloc`, inizializzando esplicitamente anche gli elementi agli indici $0$ e $2$. Il controllo del puntatore precede entrambe le procedure.
:::

## Responsabilità del blocco e rilascio

:::definizione{#proprieta-del-blocco titolo="Proprietario e riferimenti temporanei"}
La **proprietà** di un blocco è la responsabilità di rilasciarlo quando termina l’uso. È una convenzione del programma documentata nei contratti delle funzioni. Un puntatore proprietario conserva il riferimento che consente `free`. Un riferimento temporaneo accede al blocco durante la validità concessa dal proprietario. Copiare l’indirizzo crea un altro valore puntatore al medesimo blocco e lascia invariato il numero delle allocazioni.

Una funzione può trasferire la responsabilità restituendo il puntatore a un blocco appena ottenuto. Il chiamante lo conserva se è non nullo e organizza il rilascio in ogni uscita successiva. Per controllare le diramazioni si tiene un elenco dei blocchi in corso di durata e si associa a ciascuno un responsabile.
:::

:::esempio{titolo="Completare due richieste consecutive"}
Con `<stdlib.h>` incluso, la funzione usa due interi allocati che restano locali quanto alla responsabilità del rilascio. Il valore di ritorno indica se ha potuto eseguire entrambe le scritture.

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

Se fallisce la prima allocazione, la funzione non ha blocchi da rilasciare. Se riesce soltanto la prima, `left` conserva la responsabilità dell’unico blocco ottenuto. Nel percorso di successo ci sono due blocchi distinti e i due rilasci terminano le rispettive durate. Il conteggio finale dei blocchi in corso di durata è zero in ciascuno dei tre percorsi.
:::

:::attenzione{#rilascio-e-alias titolo="Effetti di free sui riferimenti"}
`free` accetta il puntatore nullo senza effetti, oppure un valore che corrisponde all’indirizzo iniziale restituito per un blocco ancora in corso di durata. Dopo il rilascio si può assegnare `NULL` alla variabile proprietaria, perché un assegnamento diretto al puntatore non legge il contenuto precedente. La scrittura riguarda soltanto quella variabile. Una copia dell’indirizzo conservata altrove resta un valore indeterminato e non consente di leggere, confrontare o rilasciare nuovamente l’oggetto appena liberato. Anche un puntatore interno al blocco, diverso dal suo inizio, non è un argomento valido per il rilascio.
:::

## Ridimensionamento e contenuto conservato

:::definizione{#ridimensionamento-con-realloc titolo="Esiti di realloc con una dimensione positiva"}
Sia `p` il puntatore proprietario di un blocco in corso di durata ottenuto mediante allocazione. Sia `bytes` una nuova dimensione strettamente positiva e rappresentabile in `size_t`. La chiamata `realloc(p, bytes)` ha due esiti rilevanti.

- In caso di fallimento restituisce `NULL`. Il blocco precedente resta disponibile e il suo contenuto è invariato.
- In caso di successo restituisce un puntatore al nuovo blocco. Il contenuto è conservato fino al minore tra la dimensione precedente e quella richiesta. La parte aggiunta, se presente, ha contenuto indeterminato. La durata dell’oggetto precedente termina e i puntatori che lo designavano diventano indeterminati, anche se l’area restituita occupa la stessa posizione.

Il risultato della chiamata si registra in una nuova variabile. Nel ramo di successo si sostituisce il riferimento proprietario, si ricostruiscono gli eventuali riferimenti interni a partire dal nuovo puntatore e si inizializzano gli elementi aggiunti che dovranno essere letti. Il caso di richiesta zero segue regole dipendenti dall’implementazione in C17, quindi i contratti di questo capitolo lo gestiscono prima di chiamare `realloc`.
:::

:::esempio{titolo="Aumentare la capacità conservando tre interi"}
Con `<stdlib.h>` incluso, si supponga che `p` sia proprietario di un blocco di tre interi inizializzati ai valori $7$, $11$ e $18$, e che la dimensione per cinque sia rappresentabile. Si esegue il frammento nel corpo di una funzione.

```c
int *next = realloc(p, 5 * sizeof *p);
if (next != NULL) {
    p = next;
    p[3] = 0;
    p[4] = 0;
}
```

Nel ramo di successo i primi tre interi mantengono i loro valori e le due scritture completano l’inizializzazione. La sequenza diventa $(7,11,18,0,0)$. Nel ramo di fallimento l’assegnamento a `p` viene saltato e rimane valido il blocco da tre elementi. Una capacità memorizzata in una variabile separata va aggiornata nel ramo di successo. In entrambi i casi il riferimento conservato in `p` identifica il blocco che dovrà essere rilasciato.
:::

:::osservazione
Con `p` nullo e dimensione positiva, `realloc(p, bytes)` si comporta come `malloc(bytes)`. Questo caso consente di rappresentare un vettore inizialmente vuoto con capacità zero e riferimento proprietario nullo, per poi ottenere il primo blocco con lo stesso schema di controllo usato per la crescita. Per conservare la posizione di un elemento durante un ridimensionamento si salva il suo indice. Se l’indice resta entro la nuova capacità, il relativo puntatore si ricostruisce dal risultato riuscito, senza riutilizzare un indirizzo del blocco precedente.
:::
