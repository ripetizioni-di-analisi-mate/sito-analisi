---
titolo: Strutture, liste, pile e code
sommario: Come rappresentare record e sequenze in C17, mantenere validi i collegamenti e verificare inserimenti, estrazioni e rilascio dei nodi.
---

## Dai valori ai record

:::definizione{#strutture-e-membri titolo="Tipo struttura e membri"}
Una **struttura** raccoglie in un oggetto più membri con nome e tipo propri. La dichiarazione seguente definisce il tipo `struct Item`.

```c
struct Item {
    int code;
    int qty;
};
```

La parola `Item` è un tag. È parte della specificazione `struct Item`, che si può usare per dichiarare oggetti, parametri e puntatori. Se `item` è un oggetto di quel tipo, `item.code` designa il membro `code`. Se `ptr` è un puntatore valido a un oggetto del tipo, `ptr->code` designa il membro dello stesso oggetto. È una forma equivalente a `(*ptr).code`.

I membri appartengono all’oggetto struttura e ne seguono la durata. Un puntatore a un suo membro richiede che il membro esista e che l’oggetto sia ancora vivo. Per ottenere la dimensione dell’intera struttura si usa `sizeof(struct Item)`: la rappresentazione può comprendere byte di riempimento.
:::

:::definizione{#inizializzazione-assegnamento titolo="Inizializzazione e copia di strutture"}
Un inizializzatore può designare direttamente un membro con `.nome = espressione`. Gli eventuali membri omessi in un inizializzatore aggregato ricevono l’inizializzazione prevista per la durata statica. Per esempio, un membro intero omesso riceve $0$ e un membro di tipo puntatore omesso diventa nullo. Questa regola riguarda un inizializzatore presente. La dichiarazione di un oggetto automatico priva di inizializzatore è un caso diverso.

Dentro una funzione il frammento seguente mostra due oggetti indipendenti.

```c
struct Item a = {.code = 4, .qty = 6};
struct Item b = a;
b.qty = 3;
```

L’inizializzazione di `b` con `a` copia il valore della struttura. Dopo il successivo assegnamento le quantità dei due oggetti sono quindi $6$ e $3$. Un assegnamento tra strutture di tipo compatibile copia analogamente il valore della struttura di destra in quella di sinistra.
:::

:::attenzione
Un membro di tipo puntatore contiene un indirizzo. Copiarlo in una seconda struttura rende raggiungibile dallo stesso indirizzo l’oggetto puntato. La copia della struttura lascia separati i due membri puntatore, mentre entrambi possono designare il medesimo nodo. Per costruire copie indipendenti di una lista dinamica occorre allocare i nodi della copia e ricostruirne i collegamenti. La proprietà della memoria è una convenzione dell’interfaccia.
:::

## Sequenze rappresentate da collegamenti

:::definizione{#nodi-e-collegamenti titolo="Nodo, testa e successore"}
Un **nodo** di una lista semplicemente collegata contiene un dato e un puntatore al successore. Il tipo seguente usa `key` come dato intero.

```c
typedef struct Node {
    int key;
    struct Node *next;
} Node;
```

All’interno della dichiarazione di `struct Node` il tipo è ancora incompleto. È già possibile usare `struct Node *` per il campo `next`, perché un puntatore può designare un oggetto di quel tipo senza contenerlo per valore. Dopo la definizione `Node` è un nome alternativo per `struct Node`.

La variabile `head` rappresenta la testa. Se la lista è vuota, `head` è nullo. Altrimenti punta al primo nodo. In una lista non vuota l’ultimo nodo ha successore nullo. L’ordine logico è quindi definito dalla catena di puntatori. Due nodi consecutivi nella sequenza possono occupare regioni lontane della memoria.
:::

:::definizione{#invariante-lista titolo="Invariante di una lista lineare"}
Si assume che ogni puntatore non nullo percorso nella catena designi un nodo vivo e che ogni nodo raggiungibile compaia una sola volta seguendo `next`. Una lista così definita è aciclica. La catena è finita e termina al puntatore nullo. Quando la lista possiede dinamicamente i nodi, ciascuno dei nodi raggiungibili è responsabilità dell’operazione di rilascio della lista.

Si possono usare catene temporanee di oggetti automatici negli esercizi di tracciamento, purché la durata di ciascun oggetto copra tutti i suoi accessi. Una funzione che rilascia una lista proprietaria presuppone nodi ottenuti da allocazioni compatibili con `free`. La durata richiesta e la politica di rilascio dipendono dall’operazione dichiarata.
:::

:::esempio{titolo="Visitare le chiavi in ordine"}
Si assume visibile la definizione di `Node`. Il frammento usa `<stddef.h>` e una `head` che soddisfa l’invariante. La lunghezza è rappresentabile in `size_t`.

```c
size_t count = 0;
for (const Node *p = head; p != NULL; p = p->next) {
    ++count;
}
```

All’inizio di ogni iterazione `count` registra la lunghezza del prefisso già visitato, e `p` indica il primo nodo ancora da visitare. Il corpo conta quel nodo. L’aggiornamento passa al suo successore, quindi ricostituisce la relazione per l’iterazione seguente. Quando `p` è nullo, il prefisso coincide con l’intera lista. Con testa nulla il primo controllo è falso e il conteggio resta zero.
:::

## Inserire senza perdere un collegamento

:::definizione{#inserimento-in-lista titolo="Inserimento e proprietà del nuovo nodo"}
Inserire in testa richiede un nuovo nodo che punti alla testa precedente e l’aggiornamento della variabile `head` del chiamante. Il parametro `Node **head` contiene l’indirizzo di tale variabile. Si assume che `head` designi una variabile valida e che `*head` rappresenti una lista proprietaria lineare. Nel codice sono visibili `Node`, `<stdbool.h>` e `<stdlib.h>`.

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

L’allocazione richiede lo spazio del nodo intero. Se fallisce, si restituisce `false` prima di cambiare la testa. Se riesce, si inizializzano i due membri e si rende il nodo raggiungibile dalla testa. Nel caso vuoto il nuovo successore è nullo, quindi si ottiene una lista di un solo nodo.
:::

:::esempio{titolo="Inserire dopo un nodo presente"}
Nella figura si inserisce la chiave $20$ dopo il nodo di chiave $10$. Il nodo nuovo ha una propria allocazione e non è ancora nella catena.

![Prima la catena 10, 30, fine. Dopo la catena 10, 20, 30, fine. Il nodo 20 è quello nuovo.](/immagini/informatica/strutture-e-liste/schema-teoria-it.png)

Siano `prev` il puntatore al nodo $10$ e `node` il puntatore al nuovo nodo. L’assegnamento `node->next = prev->next;` memorizza nel nodo nuovo l’indirizzo del nodo $30$. L’assegnamento `prev->next = node;` rende poi raggiungibile $20$ seguendo il collegamento di $10$. Il successore del nodo $30$ resta nullo. L’invariante si conserva perché la catena nuova attraversa il nodo appena allocato una volta e riprende nel suffisso preesistente. La stessa sequenza di aggiornamenti funziona quando `prev` è l’ultimo nodo: in tal caso il collegamento salvato è nullo.
:::

:::attenzione
Quando si inserisce nel mezzo della lista, il suffisso successivo alla posizione conserva la propria identità. L’assegnamento che cambia il collegamento precedente va fatto dopo aver salvato il successore. Invertendo i due assegnamenti, il valore letto da `prev->next` sarebbe già `node`. Si costruirebbe un ciclo contenente il nuovo nodo e il suffisso originario non sarebbe più raggiungibile dalla testa.
:::

## Staccare un nodo e rilasciarne la memoria

:::definizione{#rimozione-e-rilascio titolo="Rimozione dalla testa"}
Si assume che `head` designi una variabile testa valida, riferita a una lista proprietaria, e che `out` punti a un `int` del chiamante esterno alla lista. Se la testa è nulla l’operazione fallisce e lascia gli oggetti invariati. Quando c’è almeno un nodo, si restituisce il suo dato e si collega la testa al successore. Sono visibili `Node`, `<stdbool.h>` e `<stdlib.h>`.

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

Il dato e il successore sono letti quando il nodo è ancora vivo. Poi la testa punta al suffisso e il nodo staccato può essere rilasciato. Con un nodo solo, il suffisso è vuoto e la nuova testa è nulla. Quando si rimuove un nodo interno, il collegamento da aggiornare è `next` del predecessore. Se il nodo rimosso è l’ultimo, il nuovo successore del predecessore è nullo.
:::

::::teorema{#svuotamento-lista titolo="Rilascio completo di una lista"}
Sia `head` la testa di una lista proprietaria finita, con $n$ nodi distinti. Se finché la testa è non nulla si salva il successore, si rilascia il nodo corrente e si assegna il successore alla testa, il rilascio avviene esattamente $n$ volte. Alla fine la testa è nulla.

:::dimostrazione
All’inizio restano $n$ nodi da rilasciare. Un passo legge il primo collegamento prima del rilascio e poi porta la testa al suffisso. La coda della catena rimane valida, perché ciascuna sua allocazione è distinta da quella appena rilasciata. Dopo $k$ passi restano dunque $n-k$ nodi, tutti vivi e raggiungibili, e i primi $k$ sono stati rilasciati. Ogni passo diminuisce di uno il numero intero non negativo dei nodi rimasti. Il processo termina al primo valore zero, che corrisponde a testa nulla.
:::
::::

:::attenzione
Dopo `free(old)` l’oggetto rilasciato ha concluso la propria durata. Le informazioni da conservare, come `old->next`, devono essere state lette prima della chiamata. Cambiare il collegamento di una lista fatta di oggetti automatici è possibile mentre quegli oggetti sono vivi. Quel cambio non comporta una chiamata a `free`.
:::

## Pila con capacità finita

:::definizione{#pila-vettore titolo="Disciplina LIFO e prefisso occupato"}
Una **pila** estrae per primo l’ultimo elemento ancora presente che vi è entrato. La disciplina è detta **LIFO**, da *last in, first out*. Una rappresentazione usa un vettore di capacità $C$ e un contatore `used` con $0\leq\mathrm{used}\leq C$. Le celle occupate hanno indici da zero a `used - 1` quando `used` è positivo. L’ultima di queste celle è la cima.

In questo esempio $C=5$. Sono visibili `<stddef.h>` e `<stdbool.h>`. Si assume che `s` designi una pila valida e che `out` punti a un `int` esterno alla pila.

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

La guardia inserisce solo se `used` è più piccolo della capacità. In quel caso il primo indice libero è valido. L’estrazione presuppone che il contatore sia positivo. Diminuirlo di uno porta all’indice della cima precedente, che è ancora leggibile nella stessa cella. L’occupazione logica esclude quella posizione dopo il decremento.
:::

:::esempio{titolo="Una sequenza di inserimenti ed estrazioni"}
Da una pila vuota si inseriscono prima $6$ e poi $9$. Le celle occupate sono in ordine $\langle 6,9\rangle$ e la cima occupa l’indice $1$. La prima estrazione restituisce $9$ e riduce il contatore a $1$. Inserire $4$ scrive nella cella liberata. Da quel momento la cima vale $4$ e l’elemento $6$ resta sottostante. Il controllo indipendente consiste nel leggere gli elementi ancora presenti in ordine inverso rispetto all’inserimento: sono $4$ e $6$.
:::

## Coda lineare con due estremi

:::definizione{#coda-collegata titolo="Disciplina FIFO e coppia front–rear"}
Una **coda** estrae per primo l’elemento presente da più tempo. La disciplina è detta **FIFO**, da *first in, first out*. In una coda collegata `front` indica il primo nodo e `rear` l’ultimo. La coda vuota ha entrambi i puntatori nulli. La coda non vuota è una lista lineare raggiungibile da `front`, e il suo ultimo nodo è proprio `rear`, con successore nullo.

Nel frammento seguente `q` designa una coda proprietaria valida. `out` designa un `int` esterno alla coda. Sono disponibili `Node`, `<stdlib.h>` e `<stdbool.h>`.

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

Inserire in coda conserva la sequenza preesistente come prefisso. Nel caso vuoto il nuovo nodo è sia il primo sia l’ultimo. Nel caso non vuoto si collega il precedente ultimo nodo al nuovo nodo e si aggiorna `rear`. L’estrazione stacca sempre il primo nodo. Quando quello staccato era l’ultimo, la nuova testa è nulla e il ramo della funzione azzera anche `rear`. Così l’operazione ripristina la rappresentazione della coda vuota.
:::

:::osservazione
Se `rear` punta all’ultimo nodo, l’inserimento modifica direttamente il suo collegamento. Se la rappresentazione dispone della sola testa, trovare l’ultimo nodo richiede una visita della catena. Il numero di aggiornamenti dei puntatori nella versione con due estremi è indipendente dalla lunghezza, mentre il tempo dell’allocatore dipende dall’implementazione. La presenza del puntatore all’ultimo nodo comporta una condizione da mantenere dopo estrazioni e azzeramento.
:::

## Coda circolare e indici logici

:::definizione{#coda-circolare titolo="Posizioni modulo la capacità"}
Una **coda circolare** usa un vettore con capacità positiva $C$, un indice `first` in $[0,C)$ e una lunghezza `used` in $[0,C]$. L’elemento di posizione logica $k$ con $0\leq k<\mathrm{used}$ occupa l’indice fisico
$$
(\mathrm{first}+k)\bmod C.
$$
A coda vuota `used` è zero. Se `used<C`, si inserisce all’indice $(\mathrm{first}+\mathrm{used})\bmod C$ e si aumenta la lunghezza. Se `used>0`, si legge l’elemento in `first`, si avanza `first` di una posizione modulo $C$ e si diminuisce la lunghezza.

Con capacità $5$ e `first` uguale a $4$, le prime tre posizioni logiche occupano $4$, $0$ e $1$. Un quarto elemento si inserisce all’indice $2$. Dopo la prima estrazione, `first` diventa $0$ e la sequenza delle posizioni ancora occupate è $0$, $1$, $2$. Il modulo rende indipendente l’ordine logico dal raggiungimento del limite del vettore.
:::

::::teorema{#unicita-indici-circolari titolo="Indici distinti entro una capacità"}
Siano $C>0$ e $0\leq\mathrm{first}<C$. Le posizioni logiche da $0$ a $C-1$ producono indici fisici distinti. In particolare, quando la lunghezza è inferiore a $C$, l’indice di inserimento è libero.

:::dimostrazione
Se due posizioni $k_1$ e $k_2$ producono lo stesso indice, la differenza $k_2-k_1$ è un multiplo di $C$. Per posizioni distinte nell’intervallo da $0$ a $C-1$ il valore assoluto della differenza è compreso tra $1$ e $C-1$. Un multiplo di $C$ non ha quella grandezza. Le posizioni occupate e la prima posizione libera danno quindi indici diversi.
:::
::::

:::attenzione
La formula con modulo usa interi matematici. Nell’aritmetica del C la somma intermedia deve rientrare nell’intervallo del tipo dell’operazione. Se l’aritmetica senza segno riduce già la somma, l’operazione `%` successiva usa il valore ridotto. Per capacità grandi si calcola prima `gap = capacity - first`. Se `k < gap`, la somma `first + k` è minore di `capacity` ed è rappresentabile. Negli altri casi l’indice cercato è `k - gap`. Qui $k<C$ e anche `capacity` è rappresentabile.
:::

## Verificare gli stati di confine

:::osservazione
Per confrontare rappresentazioni diverse si fissa la stessa sequenza logica e si controlla come cambiano campi e indici. Una pila restituisce l’ultimo elemento inserito ancora presente, e una coda restituisce il primo. Una lista conserva l’ordine dei collegamenti e ammette inserimenti locali quando la posizione è già disponibile. Una pila su vettore ha un prefisso occupato. Una coda circolare può occupare celle a entrambi i lati del confine degli indici. La scelta dipende quindi dalle operazioni richieste.

Le verifiche di un’interfaccia comprendono gli stati vuoto, unitario e pieno quando la capacità è finita. Per una coda dinamica si prova anche il percorso in cui l’allocatore fallisce prima di ogni aggiornamento. Si confrontano i collegamenti e il contenuto logico preesistenti. Se l’operazione dichiara fallimento e l’invariante è conservato, la struttura resta utilizzabile dal chiamante.
:::

:::esempio{titolo="Controllare gli estremi dopo l’ultima uscita"}
Si parte da una coda vuota. Si inserisce $7$, si estrae $7$ e si inserisce $11$. Dopo la prima estrazione entrambi gli estremi devono essere nulli. Il secondo inserimento deve così percorrere il ramo della coda vuota e dare una coda con `front` uguale a `rear` e successore nullo. Estraendo di nuovo si deve ottenere $11$. La sequenza esercita il passaggio da un nodo a zero nodi e da zero a un nodo, e verifica che il successivo inserimento usi lo stato già ricostituito.
:::
