---
titolo: Strutture, liste, pile e code
sommario: Come rappresentare record e sequenze in C17, mantenere validi i collegamenti e verificare inserimenti, estrazioni e rilascio dei nodi.
---

## Dai valori ai record

:::definizione{#strutture-e-membri titolo="Tipo struttura e membri"}
Una **struttura** riunisce sotto un solo nome più dati, anche di tipo diverso, che descrivono lo stesso oggetto, per esempio il codice e la quantità di un articolo di magazzino. I dati che la compongono si chiamano **membri**, o campi. La dichiarazione seguente definisce un nuovo tipo, `struct Item`, con due membri interi.

```c
struct Item {
    int code;
    int qty;
};
```

Il tipo si chiama `struct Item`, con entrambe le parole. Una variabile di questo tipo si dichiara con `struct Item item;`, e i suoi membri si indicano con il punto, come in `item.code` e `item.qty`. Quando si ha un puntatore `ptr` a una struttura, i membri si indicano con la freccia `->`; `ptr->code` è una forma abbreviata di `(*ptr).code`.

I membri fanno parte della variabile struttura ed esistono finché esiste la variabile. La dimensione di una struttura si ottiene con `sizeof(struct Item)` e può essere maggiore della somma delle dimensioni dei membri, perché il compilatore può inserire fra un membro e l’altro alcuni byte inutilizzati, detti di riempimento.
:::

:::definizione{#inizializzazione-assegnamento titolo="Inizializzazione e copia di strutture"}
Una struttura si inizializza con una lista fra graffe, in cui ogni membro si può indicare per nome nella forma `.nome = valore`. I membri non nominati nella lista ricevono zero, o il puntatore nullo se sono puntatori. Una struttura dichiarata dentro una funzione senza lista ha invece membri dal valore imprevedibile.

Le strutture si copiano con un semplice assegnamento, che copia tutti i membri. Nel frammento seguente, dentro una funzione, `b` è una copia di `a` e le due variabili sono poi indipendenti.

```c
struct Item a = {.code = 4, .qty = 6};
struct Item b = a;
b.qty = 3;
```

La seconda riga copia in `b` i valori di tutti i membri di `a`. La terza modifica soltanto `b`, quindi alla fine `a.qty` vale $6$ e `b.qty` vale $3$.
:::

:::attenzione
Se una struttura ha un membro puntatore, la copia della struttura copia l’indirizzo e non il dato a cui l’indirizzo si riferisce. Dopo la copia le due strutture hanno ciascuna il proprio puntatore, ma i due puntatori indicano lo stesso dato, e una modifica fatta attraverso uno si vede attraverso l’altro. Per ottenere una copia indipendente di una lista, per esempio, bisogna allocare nuovi nodi e ricopiare i dati uno per uno.
:::

## Sequenze rappresentate da collegamenti

:::definizione{#nodi-e-collegamenti titolo="Nodo, testa e successore"}
Una **lista collegata** è una sequenza di elementi in cui ciascun elemento contiene, oltre al proprio dato, l’indirizzo dell’elemento successivo. A differenza di un vettore, gli elementi non sono vicini in memoria e si possono aggiungere e togliere senza spostare gli altri. Ogni elemento si chiama **nodo**, ed è una struttura con il dato, qui l’intero `key`, e un puntatore al nodo seguente.

```c
typedef struct Node {
    int key;
    struct Node *next;
} Node;
```

Il membro `next` è un puntatore a un’altra struttura dello stesso tipo. Dentro la dichiarazione si scrive `struct Node *`, perché il nome breve `Node`, introdotto da `typedef`, è disponibile soltanto dopo la fine della dichiarazione. Da quel punto `Node` e `struct Node` indicano lo stesso tipo.

Il programma tiene un puntatore al primo nodo, chiamato **testa** (`head`). Dalla testa si raggiunge il secondo nodo seguendo `next`, e così via. L’ultimo nodo ha `next` uguale a `NULL`, che segnala la fine della lista. Una lista vuota è rappresentata da una testa uguale a `NULL`. L’ordine degli elementi è quello dei collegamenti, e non dipende dalla posizione dei nodi in memoria.
:::

:::definizione{#invariante-lista titolo="Invariante di una lista lineare"}
Perché le funzioni sulle liste funzionino, una lista deve sempre rispettare alcune condizioni, che formano il suo **invariante**. Ogni puntatore diverso da `NULL` che si incontra seguendo i collegamenti punta a un nodo esistente. Nessun nodo compare due volte, quindi la lista non contiene cicli, e seguendo `next` si arriva a `NULL` dopo un numero finito di passi. Ogni funzione che modifica la lista riceve una lista che rispetta l’invariante e deve lasciarla in uno stato che lo rispetta ancora.

Di solito i nodi sono allocati con `malloc`, e la lista ne è proprietaria, cioè chi la gestisce deve rilasciarli tutti con `free`. Negli esercizi di tracciamento i nodi possono essere anche variabili ordinarie, e in quel caso `free` non va chiamata.
:::

:::esempio{titolo="Visitare le chiavi in ordine"}
Il frammento conta i nodi di una lista. Il puntatore `p` parte dalla testa e a ogni iterazione passa al nodo successivo con `p = p->next`, finché vale `NULL`. Sono visibili la definizione di `Node` e `<stddef.h>`.

```c
size_t count = 0;
for (const Node *p = head; p != NULL; p = p->next) {
    ++count;
}
```

All’inizio di ogni iterazione `count` è il numero di nodi già contati e `p` punta al primo nodo non ancora contato. Il corpo conta quel nodo e l’aggiornamento sposta `p` sul successivo. Quando `p` vale `NULL` tutti i nodi sono stati contati. Se la lista è vuota la testa è `NULL`, il corpo non viene eseguito e `count` resta zero.
:::

## Inserire senza perdere un collegamento

:::definizione{#inserimento-in-lista titolo="Inserimento e proprietà del nuovo nodo"}
Per inserire un nodo in testa si alloca il nodo, si fa puntare il suo `next` al vecchio primo nodo e si fa puntare la testa al nodo nuovo. La funzione deve quindi modificare la variabile `head` di chi la chiama, e per questo riceve il suo indirizzo. Poiché `head` è un `Node *`, il suo indirizzo è un `Node **`, cioè un puntatore a puntatore, e dentro la funzione `*head` è la testa. Sono visibili `Node`, `<stdbool.h>` e `<stdlib.h>`.

```c
bool push_front(Node **head, int key)
{
    Node *node = malloc(sizeof *node);
    if (node == NULL) {
        return false;
    }
    node->key = key;
    node->next = *head;
    *head = node;
    return true;
}
```

Se `malloc` fallisce, la funzione restituisce `false` senza aver modificato la lista. Altrimenti riempie i due membri del nodo e solo alla fine aggiorna la testa. L’ordine delle due ultime assegnazioni conta, perché `node->next = *head;` deve leggere la vecchia testa prima che `*head = node;` la sostituisca. Se la lista era vuota, la vecchia testa è `NULL` e il nuovo nodo, che è anche l’ultimo, ha `next` uguale a `NULL`.
:::

:::esempio{titolo="Inserire dopo un nodo presente"}
Nella figura si inserisce un nodo con chiave $20$ dopo il nodo con chiave $10$. Il nodo nuovo è già stato allocato ma non fa ancora parte della lista.

![Prima la catena 10, 30, fine. Dopo la catena 10, 20, 30, fine. Il nodo 20 è quello nuovo.](/immagini/informatica/strutture-e-liste/schema-teoria-it.png)

Sia `prev` il puntatore al nodo $10$ e `node` il puntatore al nodo nuovo. Servono due assegnazioni, in quest’ordine. La prima, `node->next = prev->next;`, fa puntare il nodo nuovo al nodo $30$. La seconda, `prev->next = node;`, fa puntare il nodo $10$ al nodo nuovo. La lista diventa $10$, $20$, $30$. Le stesse due istruzioni funzionano anche quando `prev` è l’ultimo nodo; in quel caso `prev->next` vale `NULL` e il nodo nuovo diventa l’ultimo.
:::

:::attenzione
L’ordine delle due assegnazioni non si può scambiare. Eseguendo prima `prev->next = node;` si perde l’indirizzo del nodo $30$, che era contenuto soltanto in `prev->next`. La successiva `node->next = prev->next;` farebbe allora puntare il nodo nuovo a se stesso. La lista conterrebbe un ciclo, e il nodo $30$ non sarebbe più raggiungibile.
:::

## Staccare un nodo e rilasciarne la memoria

:::definizione{#rimozione-e-rilascio titolo="Rimozione dalla testa"}
La funzione toglie il primo nodo dalla lista, ne restituisce il dato attraverso il puntatore `out` e ne rilascia la memoria. Come per l’inserimento riceve l’indirizzo della testa, perché deve modificarla. Se la lista è vuota restituisce `false` e non modifica nulla. Sono visibili `Node`, `<stdbool.h>` e `<stdlib.h>`.

```c
bool pop_front(Node **head, int *out)
{
    if (*head == NULL) {
        return false;
    }
    Node *old = *head;
    *out = old->key;
    *head = old->next;
    free(old);
    return true;
}
```

L’ordine delle operazioni è obbligato. Prima si salva in `old` l’indirizzo del nodo da togliere. Poi si copiano il dato e il collegamento `old->next`, finché il nodo esiste ancora. Solo alla fine si chiama `free(old)`. Se la lista aveva un solo nodo, `old->next` è `NULL` e la testa diventa `NULL`, cioè la lista è vuota. Per togliere un nodo che non è il primo si modifica allo stesso modo il membro `next` del nodo che lo precede.
:::

::::teorema{#svuotamento-lista titolo="Rilascio completo di una lista"}
Per rilasciare un’intera lista di $n$ nodi si ripetono tre operazioni finché la testa è diversa da `NULL`. Si salva l’indirizzo del nodo successivo, si rilascia il nodo in testa e si assegna alla testa l’indirizzo salvato. Il procedimento esegue esattamente $n$ rilasci e termina con la testa uguale a `NULL`.

:::dimostrazione
All’inizio i nodi da rilasciare sono $n$. Ogni passo legge il collegamento del primo nodo prima di rilasciarlo e poi sposta la testa sul nodo successivo. Gli altri nodi restano validi, perché sono blocchi di memoria distinti da quello rilasciato. Dopo $k$ passi sono stati rilasciati $k$ nodi e ne restano $n-k$, tutti raggiungibili dalla testa. Il numero dei nodi rimasti diminuisce di uno a ogni passo, quindi dopo $n$ passi è zero e la testa vale `NULL`.
:::
::::

:::attenzione
Dopo `free(old)` il nodo non esiste più, e leggere `old->next` ha comportamento indefinito. Il collegamento al nodo successivo va quindi salvato prima del rilascio. Un ciclo scritto come `for (p = head; p != NULL; p = p->next) free(p);` è sbagliato proprio per questo, perché l’aggiornamento legge `p->next` dopo che `p` è stato rilasciato.
:::

## Pila con capacità finita

:::definizione{#pila-vettore titolo="Disciplina LIFO e prefisso occupato"}
Una **pila** (*stack*) è una raccolta di elementi in cui si inserisce e si toglie sempre dalla stessa estremità, detta **cima**, come in una pila di piatti. L’elemento tolto è sempre l’ultimo inserito; la regola si chiama **LIFO**, da *last in, first out*. L’inserimento si chiama *push* e l’estrazione *pop*. Una pila si realizza con un vettore di capacità $C$ e un contatore `used` degli elementi presenti, con $0\leq\mathrm{used}\leq C$. Gli elementi occupano gli indici da $0$ a `used - 1`, e la cima è l’elemento di indice `used - 1`.

Nell’esempio $C=5$. Le due funzioni ricevono un puntatore alla pila e restituiscono `false` quando l’operazione non si può eseguire. Sono visibili `<stddef.h>` e `<stdbool.h>`.

```c
enum { CAPACITY = 5 };
typedef struct {
    int data[CAPACITY];
    size_t used;
} Stack;

bool stack_push(Stack *s, int value)
{
    if (s->used == CAPACITY) {
        return false;
    }
    s->data[s->used] = value;
    ++s->used;
    return true;
}

bool stack_pop(Stack *s, int *out)
{
    if (s->used == 0) {
        return false;
    }
    --s->used;
    *out = s->data[s->used];
    return true;
}
```

L’inserimento fallisce se la pila è piena. Altrimenti scrive il valore nella prima posizione libera, che ha indice `used`, e aumenta il contatore. L’estrazione fallisce se la pila è vuota. Altrimenti diminuisce il contatore, che diventa l’indice della cima, e copia quell’elemento in `*out`. Il valore resta scritto nel vettore, ma non fa più parte della pila, e il prossimo inserimento lo sovrascrive.
:::

:::esempio{titolo="Una sequenza di inserimenti ed estrazioni"}
Si parte da una pila vuota e si inseriscono $6$ e poi $9$. La pila contiene $6$ all’indice $0$ e $9$ all’indice $1$, che è la cima. Un’estrazione restituisce $9$ e porta `used` a $1$. Inserendo poi $4$, il valore viene scritto all’indice $1$, al posto di $9$. Due estrazioni successive restituiscono $4$ e poi $6$.
:::

## Coda lineare con due estremi

:::definizione{#coda-collegata titolo="Disciplina FIFO e coppia front–rear"}
Una **coda** (*queue*) è una raccolta di elementi in cui si inserisce da un’estremità e si toglie dall’altra, come in una fila di persone. L’elemento tolto è sempre quello presente da più tempo; la regola si chiama **FIFO**, da *first in, first out*. Una coda si realizza con una lista collegata e due puntatori. `front` punta al primo nodo, da cui si toglie, e `rear` all’ultimo, dopo il quale si inserisce. Nella coda vuota entrambi valgono `NULL`.

L’inserimento si chiama *enqueue* e l’estrazione *dequeue*. Sono visibili `Node`, `<stdlib.h>` e `<stdbool.h>`.

```c
typedef struct {
    Node *front;
    Node *rear;
} Queue;

bool enqueue(Queue *q, int key)
{
    Node *node = malloc(sizeof *node);
    if (node == NULL) {
        return false;
    }
    *node = (Node){.key = key, .next = NULL};
    if (q->rear == NULL) {
        q->front = node;
    } else {
        q->rear->next = node;
    }
    q->rear = node;
    return true;
}

bool dequeue(Queue *q, int *out)
{
    Node *old = q->front;
    if (old == NULL) {
        return false;
    }
    *out = old->key;
    q->front = old->next;
    if (q->front == NULL) {
        q->rear = NULL;
    }
    free(old);
    return true;
}
```

L’inserimento crea un nodo con `next` uguale a `NULL`, perché sarà l’ultimo. Se la coda era vuota, il nodo nuovo è sia il primo sia l’ultimo, quindi `front` e `rear` puntano entrambi a esso. Altrimenti il vecchio ultimo nodo viene collegato al nuovo, e `rear` passa al nuovo. L’estrazione toglie il primo nodo come in una lista. Se il nodo tolto era l’unico, `front` diventa `NULL` e va messo a `NULL` anche `rear`, che altrimenti punterebbe a un nodo rilasciato.
:::

:::osservazione
Il puntatore `rear` serve a rendere rapido l’inserimento. Senza di esso, per inserire in fondo bisognerebbe percorrere l’intera lista a partire da `front`, con un tempo proporzionale alla lunghezza. Con `rear` l’inserimento richiede sempre le stesse poche assegnazioni, qualunque sia la lunghezza. In cambio le funzioni devono tenere `rear` aggiornato, in particolare quando la coda si svuota.
:::

## Coda circolare e indici logici

:::definizione{#coda-circolare titolo="Posizioni modulo la capacità"}
Una coda si può realizzare anche con un vettore, senza allocazioni. Poiché si toglie dall’inizio e si inserisce in fondo, gli elementi occupati si spostano verso gli indici alti; arrivati alla fine del vettore si riprende dall’indice $0$, come se il vettore fosse chiuso ad anello. Questa è una **coda circolare**. Si usano un vettore di capacità $C>0$, l’indice `first` del primo elemento, con $0\leq\mathrm{first}<C$, e il numero `used` di elementi presenti. L’elemento che occupa la posizione $k$ nella coda, con $0\leq k<\mathrm{used}$, si trova nel vettore all’indice
$$
(\mathrm{first}+k)\bmod C.
$$
dove $\bmod$ indica il resto della divisione. La coda è vuota quando `used` è zero e piena quando `used` è uguale a $C$. Per inserire, se la coda non è piena, si scrive all’indice $(\mathrm{first}+\mathrm{used})\bmod C$ e si aumenta `used`. Per estrarre, se la coda non è vuota, si legge l’elemento di indice `first`, si porta `first` a $(\mathrm{first}+1)\bmod C$ e si diminuisce `used`.

Con capacità $5$, `first` uguale a $4$ e tre elementi, questi occupano gli indici $4$, $0$ e $1$, perché $(4+1)\bmod 5=0$ e $(4+2)\bmod 5=1$. Un quarto elemento va all’indice $(4+3)\bmod 5=2$. Dopo un’estrazione `first` diventa $(4+1)\bmod 5=0$ e gli elementi rimasti occupano gli indici $0$, $1$ e $2$.
:::

::::teorema{#unicita-indici-circolari titolo="Indici distinti entro una capacità"}
Siano $C>0$ e $0\leq\mathrm{first}<C$. Le posizioni $k$ da $0$ a $C-1$ corrispondono a indici $(\mathrm{first}+k)\bmod C$ tutti diversi fra loro. Di conseguenza due elementi della coda non occupano mai la stessa cella, e quando la coda non è piena l’indice di inserimento è libero.

:::dimostrazione
Se due posizioni $k_1$ e $k_2$ dessero lo stesso indice, la differenza $k_2-k_1$ sarebbe un multiplo di $C$. Per due posizioni diverse fra $0$ e $C-1$ il valore assoluto della differenza è compreso fra $1$ e $C-1$, e nessun multiplo di $C$ sta in questo intervallo.
:::
::::

:::attenzione
Nel programma la somma `first + k` va calcolata prima del resto, e deve stare nel tipo usato. Con indici di tipo `size_t` e capacità ordinarie questo è sempre vero. Per capacità vicine al massimo del tipo si evita la somma. Si calcola `gap = capacity - first`; se `k < gap` l’indice è `first + k`, altrimenti è `k - gap`.
:::

## Verificare gli stati di confine

:::osservazione
Le tre strutture differiscono per l’elemento che restituiscono. La pila restituisce l’ultimo elemento inserito, la coda il primo; la lista permette di inserire e togliere in qualsiasi punto, purché si abbia il puntatore al nodo precedente. Pila e coda circolare su vettore non richiedono allocazioni ma hanno capacità fissa, mentre le versioni con lista crescono finché c’è memoria. La scelta dipende dalle operazioni che servono al programma.

Nel provare queste funzioni i casi più importanti sono quelli di confine, cioè struttura vuota, struttura con un solo elemento e, se la capacità è fissa, struttura piena. Per le versioni con allocazione si prova anche il caso in cui `malloc` fallisce, controllando che la struttura resti invariata e utilizzabile.
:::

:::esempio{titolo="Controllare gli estremi dopo l’ultima uscita"}
Si parte da una coda vuota, si inserisce $7$, lo si estrae e si inserisce $11$. Dopo l’estrazione la coda è di nuovo vuota, e sia `front` sia `rear` devono valere `NULL`. Il secondo inserimento trova quindi `rear` uguale a `NULL`, esegue il ramo della coda vuota e fa puntare entrambi al nodo nuovo. Una nuova estrazione restituisce $11$. Se `dequeue` non azzerasse `rear`, il secondo inserimento scriverebbe nel nodo già rilasciato.
:::
