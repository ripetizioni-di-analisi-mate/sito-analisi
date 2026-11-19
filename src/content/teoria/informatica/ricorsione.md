---
titolo: Ricorsione e record di attivazione
sommario: Contratti ricorsivi, tracce dei ritorni, induzione e analisi del numero di chiamate e della profondità.
---

## Una funzione che richiama se stessa

:::definizione{#contratto-ricorsivo titolo="Contratto di una funzione ricorsiva"}
Una funzione è **ricorsiva** quando nel proprio corpo chiama se stessa. L’idea è risolvere un problema riducendolo a una versione più piccola dello stesso problema. Per esempio, la somma degli interi da $1$ a $n$ è uguale a $n$ più la somma degli interi da $1$ a $n-1$, e quest’ultima è lo stesso problema con un dato più piccolo. Una funzione ricorsiva ha quindi due parti. Il **caso base** è il caso più piccolo, in cui il risultato si conosce direttamente senza altre chiamate; per la somma è $n=0$, con risultato $0$. Il **passo ricorsivo** chiama la funzione su un dato più piccolo e usa il risultato per costruire quello richiesto.

Ogni chiamata, anche quella interna, deve rispettare la precondizione della funzione. Nello scrivere una funzione ricorsiva si controllano separatamente due cose, cioè che il dato passato alla chiamata interna sia ammesso e più vicino al caso base, e che il risultato venga ricostruito correttamente.
:::

:::esempio{titolo="Un contratto per la somma"}
La funzione seguente accetta un intero senza segno $n$ con $0\leq n\leq 20$. Restituisce la somma degli interi da $1$ a $n$.

```c
unsigned sum(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    return n + sum(n - 1u);
}
```

Il ramo ricorsivo viene eseguito soltanto per $n\geq1$, quindi `n - 1u` è compreso fra $0$ e $19$ e rispetta la precondizione. Il risultato più grande è $210$, per $n=20$, e sta in un `unsigned`. Per `sum(3)` le chiamate si susseguono con argomenti $3$, $2$, $1$ e $0$. L’ultima è il caso base e restituisce $0$; tornando indietro si ottengono $1+0=1$, poi $2+1=3$, poi $3+3=6$.
:::

:::osservazione
Per una funzione ricorsiva vanno verificate tre proprietà. Gli argomenti delle chiamate interne devono soddisfare la precondizione. La catena di chiamate deve arrivare a un caso base dopo un numero finito di passi, cioè la funzione deve **terminare**. Il risultato costruito a partire da quello della chiamata interna deve essere quello richiesto. Per `sum` la prima segue dal controllo su $n$; le altre due si dimostrano nei paragrafi seguenti, la terminazione con una misura che diminuisce e il risultato con l’induzione.
:::

## Una misura che garantisce la fine

::::teorema{#misura-decrescente titolo="Criterio di terminazione per misura naturale"}
Per dimostrare che una funzione ricorsiva termina si associa a ogni chiamata un numero intero maggiore o uguale a zero, chiamato **misura** e indicato con $\mu$, calcolato dai suoi argomenti; per `sum` la misura è $n$. Se ogni chiamata interna ha una misura strettamente minore di quella della chiamata che la esegue, e ogni chiamata esegue un numero finito di operazioni e di chiamate interne, allora ogni chiamata termina. Infatti un intero non negativo non può diminuire all’infinito.

:::dimostrazione
Si procede per induzione sulla misura $m$. Una chiamata di misura $0$ non può eseguire chiamate interne, perché non esiste una misura intera non negativa minore di zero, quindi esegue un numero finito di operazioni e termina. Si supponga ora che terminino tutte le chiamate di misura minore di $m$. Una chiamata di misura $m$ esegue un numero finito di chiamate interne, tutte di misura minore, che terminano per ipotesi; poiché anche le altre operazioni sono in numero finito, la chiamata termina.
:::
::::

:::esempio{titolo="Ridurre l’argomento con una divisione"}
La funzione conta quante volte si può dimezzare $n$, con divisione intera, prima di arrivare a zero. Il dominio è $0\leq n\leq127$.

```c
unsigned halves(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    return 1u + halves(n / 2u);
}
```

Per $n>0$ il quoziente intero $\left\lfloor\dfrac{n}{2}\right\rfloor$ è strettamente minore di $n$, quindi la misura $\mu(n)=n$ diminuisce a ogni chiamata e la funzione termina. Partendo da $13$ gli argomenti sono $13$, $6$, $3$, $1$ e $0$. Le prime quattro chiamate eseguono il passo ricorsivo e ciascuna aggiunge $1$, quindi `halves(13)` restituisce $4$. Nel dominio le chiamate ricorsive sono al più sette, perché $127<2^7$.
:::

:::osservazione
Il numero di dimezzamenti si ricava dalle potenze di due senza elencare gli argomenti. Dividere $k$ volte per due con divisione intera equivale a dividere una volta per $2^k$. Se $2^{k-1}\leq n<2^k$, dopo $k-1$ dimezzamenti il quoziente è $1$ e dopo $k$ è $0$, quindi `halves(n)` vale $k$. Per $13$ si ha $2^3=8\leq13<16=2^4$, quindi $k=4$, in accordo con l’esempio.
:::

:::attenzione
Scrivere un caso base non basta a garantire la terminazione; serve che le chiamate interne lo raggiungano. Una funzione che controlla $n=0$ e negli altri casi chiama se stessa con lo stesso $n$ non termina mai per $n=3$, perché la misura resta $3$. Va controllata anche la sottrazione nel tipo usato. Con `unsigned`, `n - 1u` per $n=0$ non dà $-1$ ma il massimo del tipo, quindi una chiamata interna eseguita anche per $n=0$ non diminuirebbe la misura.
:::

:::esempio{titolo="Scegliere la misura con due parametri"}
Una funzione riceve due interi non negativi $(a,b)$ e, quando $b>0$, chiama se stessa con $(b, a \bmod b)$, dove $a\bmod b$ è il resto della divisione di $a$ per $b$; il caso base è $b=0$. Il primo argomento può aumentare, come nel passaggio da $(6,15)$ a $(15,6)$, quindi non è una misura. La misura adatta è il secondo argomento, perché il resto di una divisione è sempre minore del divisore. Partendo da $(6,15)$ le chiamate sono $(15,6)$, $(6,3)$ e $(3,0)$, con misure $15$, $6$, $3$ e $0$. La funzione quindi termina. Che il risultato sia quello voluto, cioè il massimo comune divisore, si dimostra a parte, nell’ultimo paragrafo del capitolo.
:::

## Lo stato delle invocazioni attive

:::definizione{#record-attivazione titolo="Record di attivazione nel modello logico"}
Ogni chiamata di funzione ha bisogno di uno spazio di memoria proprio, in cui tenere i parametri, le variabili locali e il punto del programma da cui riprendere quando la chiamata termina. Questo spazio si chiama **record di attivazione**. Quando una funzione ricorsiva chiama se stessa, la nuova chiamata riceve un record nuovo, distinto da quello della chiamata che l’ha eseguita. Per questo il parametro `n` può valere $3$ nella prima chiamata e $2$ nella seconda senza che i due valori si confondano.

I record si accumulano in una **pila** (*stack*). Ogni chiamata aggiunge il proprio record in cima; la funzione che ha chiamato resta in attesa, con il suo record sotto. Quando una chiamata termina, il suo record viene tolto dalla cima e la funzione in attesa riprende dal punto in cui si era fermata. L’ultimo record aggiunto è quindi il primo a essere tolto.
:::

:::definizione{#traccia-ritorni titolo="Discesa delle chiamate e risalita dei risultati"}
La **traccia** di una funzione ricorsiva si costruisce in due fasi. Nella discesa si scrivono gli argomenti delle chiamate, una sotto l’altra, e accanto a ciascuna il calcolo che resta in sospeso in attesa del risultato della chiamata interna. Arrivati al caso base si risale. Il risultato di ogni chiamata si inserisce nel calcolo in sospeso della riga precedente, fino ad arrivare alla prima chiamata.
:::

:::esempio{titolo="Un termine locale per ogni invocazione"}
Per $0\leq n\leq20$ la funzione seguente somma gli interi pari positivi fino a $2n$.

```c
unsigned scaled_total(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    unsigned term = 2u * n;
    unsigned smaller = scaled_total(n - 1u);
    return term + smaller;
}
```

Per `scaled_total(3)` esistono contemporaneamente tre record, in cui `term` vale $6$, $4$ e $2$. Nella chiamata con argomento $0$ la funzione ritorna dal primo ramo e `term` non viene creata.

| Argomento | Calcolo in sospeso | Risultato |
|---:|---|---:|
| $3$ | $6+$ risultato interno | $12$ |
| $2$ | $4+$ risultato interno | $6$ |
| $1$ | $2+$ risultato interno | $2$ |
| $0$ | nessuno | $0$ |

La chiamata con argomento $0$ restituisce $0$. Quella con argomento $1$ calcola $2+0$ e restituisce $2$. Quella con argomento $2$ usa il proprio `term`, che vale $4$, e restituisce $4+2=6$. La prima usa il proprio `term`, che vale $6$, e restituisce $6+6=12$. Il risultato coincide con la somma $2+4+6$.
:::

## Dimostrare il valore restituito

::::teorema{#induzione-ricorsiva titolo="Correttezza della somma ricorsiva"}
Per ogni $n$ intero con $0\leq n\leq20$, la funzione `sum` termina e restituisce
$$
S(n)=\frac{n(n+1)}{2}.
$$

:::dimostrazione
La funzione termina per il criterio della misura, con misura $n$. La formula si dimostra per induzione su $n$. Per $n=0$ la funzione restituisce $0$ e la formula dà $\dfrac{0\cdot 1}{2}=0$. Per $n\geq1$ si suppone la formula vera per $n-1$, cioè che la chiamata interna restituisca $\dfrac{(n-1)n}{2}$. La funzione aggiunge $n$, quindi restituisce
$$
\begin{aligned}
n+\frac{(n-1)n}{2}
 &= \frac{2n+(n-1)n}{2}\\[6pt]
 &= \frac{n(n+1)}{2}.
\end{aligned}
$$
Tutti i valori sono non negativi e il più grande è $210$, quindi le somme eseguite dal programma non escono dall’intervallo di `unsigned` e coincidono con quelle matematiche.
:::
::::

:::osservazione
L’induzione corrisponde esattamente alla struttura della funzione. Il caso base della dimostrazione è il caso base del codice, e l’ipotesi induttiva è l’affermazione che la chiamata interna, con argomento più piccolo, restituisce il valore giusto. Nel passo induttivo si usa quindi la formula soltanto per $n-1$, e la si ricava per $n$.
:::

:::esempio{titolo="Una seconda verifica a partire da una differenza"}
La formula si può controllare anche in un altro modo. Secondo il codice, il risultato per $n$ supera quello per $n-1$ esattamente di $n$. Con la formula si trova
$$
S(n)-S(n-1)=\frac{n(n+1)-(n-1)n}{2}=n .
$$
La differenza è proprio l’addendo $n$ del codice, e il valore iniziale $S(0)=0$ coincide con il caso base.
:::

## Applicare il metodo a un prefisso di vettore

:::definizione{#ricorsione-su-prefisso titolo="Tagliare un prefisso alla sua ultima posizione"}
La ricorsione si applica anche ai vettori. La somma dei primi $n$ elementi di un vettore `a` è la somma dei primi $n-1$ elementi più l’elemento `a[n - 1]`. Il caso base è $n=0$, in cui la somma vale zero e non si legge alcun elemento. La misura è $n$, il numero di elementi ancora da sommare. Il vettore è lo stesso in tutte le chiamate, e cambia soltanto quanti elementi si considerano.

Nell’esempio si assume $0\leq n\leq6$ con elementi compresi fra $0$ e $100$, quindi la somma è al più $600$ e sta in un `unsigned`.

```c
#include <stddef.h>

unsigned prefix_sum(const unsigned a[], size_t n)
{
    if (n == 0) {
        return 0u;
    }
    return prefix_sum(a, n - 1) + a[n - 1];
}
```

Con gli elementi $3$, $5$ e $1$ e $n=3$, la chiamata con $n=1$ restituisce $0+3=3$, quella con $n=2$ restituisce $3+5=8$ e quella con $n=3$ restituisce $8+1=9$. Nel ramo ricorsivo vale $n>0$, quindi l’indice $n-1$ è valido.
:::

:::esempio{titolo="Un caso base per il massimo"}
Il massimo dei primi $n$ elementi è il più grande fra il massimo dei primi $n-1$ e l’elemento `a[n - 1]`. Qui il caso base è $n=1$, perché il massimo di un solo elemento è l’elemento stesso, mentre un vettore senza elementi non ha massimo. La precondizione è quindi $1\leq n\leq6$.

```c
#include <stddef.h>

int max_prefix(const int a[], size_t n)
{
    if (n == 1) {
        return a[0];
    }
    int previous = max_prefix(a, n - 1);
    return a[n - 1] > previous ? a[n - 1] : previous;
}
```

Con gli elementi $-5$, $-2$ e $-8$ le chiamate con $n=1$, $2$ e $3$ restituiscono $-5$, $-2$ e $-2$. Il caso base con un elemento funziona anche quando tutti i valori sono negativi. Scegliendo come caso base $n=0$ con risultato $0$, per questi dati si otterrebbe $0$, che non è un elemento del vettore.
:::

## Quando una chiamata ne avvia due

:::definizione{#albero-chiamate titolo="Albero logico delle invocazioni"}
Quando una chiamata ne esegue più di una interna, le chiamate si rappresentano con un **albero delle chiamate**. Ogni chiamata è un **nodo**. Il nodo in alto, la **radice**, è la chiamata iniziale. Sotto ogni nodo si disegnano i suoi **figli**, cioè le chiamate che esso esegue direttamente. I nodi senza figli, le **foglie**, sono i casi base. Due chiamate con lo stesso argomento, se vengono eseguite entrambe, sono due nodi distinti. Il risultato di un nodo si calcola dai risultati dei suoi figli.
:::

:::esempio{titolo="Scomposizione del quarto numero di Fibonacci"}
Per $0\leq n\leq10$ la funzione seguente restituisce $F_n$, dove $F_0=0$, $F_1=1$ e $F_n=F_{n-1}+F_{n-2}$ quando $n\geq2$.

```c
unsigned fib(unsigned n)
{
    if (n <= 1u) {
        return n;
    }
    unsigned left = fib(n - 1u);
    unsigned right = fib(n - 2u);
    return left + right;
}
```

![Albero di fib(4) con due distinti nodi fib(2) e foglie etichettate fib(0) oppure fib(1).](/immagini/informatica/ricorsione/schema-teoria-it.png)

Si legge l’albero dal basso. Ciascuno dei due nodi `fib(2)` riceve $1$ da `fib(1)` e $0$ da `fib(0)` e restituisce $1$. Il nodo `fib(3)` riceve $1$ da `fib(2)` e $1$ da `fib(1)` e restituisce $2$. La radice riceve $2$ e $1$ e restituisce $3$, che è $F_4$. Il valore `fib(2)` viene calcolato due volte, in due punti diversi dell’albero. Nel dominio il risultato più grande è $F_{10}=55$.
:::

:::osservazione
La correttezza di `fib` si dimostra per induzione forte, cioè supponendo il risultato vero per tutti gli argomenti minori di $n$ e non soltanto per $n-1$. I due casi base restituiscono $F_0=0$ e $F_1=1$. Per $n\geq2$ le due chiamate interne hanno argomenti $n-1$ e $n-2$, entrambi minori di $n$, quindi per ipotesi restituiscono $F_{n-1}$ e $F_{n-2}$; la funzione restituisce la loro somma, che per definizione è $F_n$.
:::

:::definizione{#sequenza-chiamate titolo="Ordine stabilito da espressioni distinte"}
Nel codice di `fib` le due chiamate sono in due istruzioni separate, quindi il loro ordine è stabilito. La chiamata con argomento $n-1$ viene completata, e il suo risultato salvato in `left`, prima che cominci quella con argomento $n-2$.

Scrivendo invece `return fib(n - 1u) + fib(n - 2u);` il risultato sarebbe lo stesso, ma l’ordine delle due chiamate non sarebbe stabilito, perché il C non fissa quale operando di `+` venga calcolato per primo. L’albero e il numero dei nodi sono gli stessi nei due casi; cambia soltanto l’ordine in cui i rami vengono percorsi.
:::

:::esempio{titolo="Registrare l’avvio delle invocazioni"}
Si vuole elencare in che ordine cominciano le chiamate di `fib(4)`, nella versione con le due istruzioni separate. L’elenco comprende anche i casi base. La radice ha argomento $4$ e comincia dal figlio sinistro, `fib(3)`, che a sua volta comincia da `fib(2)`, che chiama `fib(1)` e poi `fib(0)`. Completato `fib(2)`, il nodo `fib(3)` chiama il suo secondo figlio, `fib(1)`. Completato `fib(3)`, la radice chiama il secondo figlio, `fib(2)`, che chiama `fib(1)` e `fib(0)`. L’ordine è quindi $4$, $3$, $2$, $1$, $0$, $1$, $2$, $1$, $0$, in tutto nove chiamate.
:::

## Separare profondità e numero di chiamate

:::definizione{#profondita-ricorsione titolo="Massimo numero di record attivi"}
Di una funzione ricorsiva interessano due quantità diverse. Il **numero di chiamate** è il totale dei nodi dell’albero, e misura il lavoro svolto. La **profondità** è il massimo numero di record di attivazione presenti contemporaneamente nella pila, e misura la memoria necessaria. Una chiamata resta nella pila finché non termina, quindi in ogni momento la pila contiene i nodi di un solo cammino dalla radice verso il basso. La profondità è perciò il numero di nodi del cammino più lungo dalla radice a una foglia.

Per `fib(4)` il cammino più lungo passa per gli argomenti $4$, $3$, $2$, $1$, quindi la profondità è $4$, mentre le chiamate sono $9$. Quando il ramo sinistro è terminato i suoi record sono già stati tolti dalla pila, e il ramo destro riusa lo stesso spazio. Il numero di chiamate si calcola anche senza disegno. Un caso base è una chiamata. Per `fib(2)` le chiamate sono $1+1+1=3$, per `fib(3)` sono $1+3+1=5$ e per `fib(4)` sono $1+5+3=9$.
:::

::::teorema{#ricorrenza-costo titolo="Conteggio di un albero binario completo"}
Si consideri una funzione con argomento intero $n\geq0$ che per $n=0$ è un caso base e per $n>0$ esegue, una dopo l’altra, due chiamate con argomento $n-1$. Il numero totale di chiamate è $N(n)=2^{n+1}-1$ e la profondità è $n+1$. Il lavoro raddoppia a ogni aumento di $n$, mentre la memoria cresce di un solo record; per $n=10$ le chiamate sono $2047$ e la profondità è $11$.

:::dimostrazione
La chiamata iniziale conta per uno, e ciascuna delle due chiamate interne ne genera in tutto $N(n-1)$. Perciò $N(0)=1$ e $N(n)=1+2N(n-1)$ per $n>0$. Per induzione, se $N(n-1)=2^n-1$ allora $N(n)$ vale
$$
1+2(2^n-1)=2^{n+1}-1.
$$
La formula vale anche per $n=0$, perché $2^1-1=1$. Per la profondità, mentre una delle due chiamate interne è in esecuzione la pila contiene in più soltanto il record della chiamata iniziale. Quindi $D(0)=1$ e $D(n)=1+D(n-1)$, cioè $D(n)=n+1$.
:::
::::

:::osservazione
Il numero di chiamate è una buona stima del tempo quando ogni chiamata esegue circa la stessa quantità di operazioni. La profondità indica quanti record devono stare nella pila nello stesso momento. Una ricorsione troppo profonda esaurisce lo spazio della pila e il programma si interrompe (*stack overflow*). I byte realmente occupati e i secondi impiegati dipendono poi dal compilatore e dalla macchina.
:::

## Riconoscere lo stato da trasferire

:::definizione{#ricorsione-in-coda titolo="Chiamata ricorsiva in posizione di coda"}
Una chiamata ricorsiva è in **posizione di coda** quando è l’ultima operazione della funzione, cioè quando il suo risultato viene restituito così com’è. In `return gcd(b, a % b);` la chiamata è in coda. In `return n + sum(n - 1u);` non lo è, perché dopo il ritorno della chiamata interna resta da eseguire la somma con `n`, e per questo il record deve conservare `n`. Una funzione con ricorsione in coda non ha calcoli in sospeso, e si può riscrivere come un ciclo che aggiorna le variabili al posto di eseguire la chiamata.
:::

:::osservazione
La somma ricorsiva si porta in forma di coda aggiungendo un parametro, l’**accumulatore** $d$, che contiene la somma parziale e parte da zero. La chiamata con $(n,d)$ esegue la chiamata con $(n-1,d+n)$, e il caso base $n=0$ restituisce $d$. Per $n=3$ le chiamate hanno argomenti $(3,0)$, $(2,3)$, $(1,5)$ e $(0,6)$, e il risultato è $6$. La quantità $d+S(n)$, dove $S(n)$ è la somma degli interi da $1$ a $n$, resta uguale a ogni passo, perché $n$ passa dalla somma ancora da fare all’accumulatore. Lo stesso calcolo si scrive come ciclo con due variabili, `n` e l’accumulatore.
:::

:::esempio{titolo="Euclide con chiamata diretta e con ciclo"}
L’**algoritmo di Euclide** calcola il massimo comune divisore di due interi senza segno $a$ e $b$, non entrambi nulli. Se $b>0$, sia $r$ il resto della divisione di $a$ per $b$, cioè $a=qb+r$ con $0\leq r<b$. Un numero che divide $a$ e $b$ divide anche $r=a-qb$, e un numero che divide $b$ e $r$ divide anche $a=qb+r$. Le coppie $(a,b)$ e $(b,r)$ hanno quindi gli stessi divisori comuni e lo stesso massimo comune divisore. Se $b=0$, il massimo comune divisore è $a$.

```c
unsigned gcd(unsigned a, unsigned b)
{
    if (b == 0u) {
        return a;
    }
    return gcd(b, a % b);
}
```

La misura è $b$, che diminuisce a ogni chiamata perché il resto è minore del divisore. Per $48$ e $18$ le chiamate hanno argomenti $(48,18)$, $(18,12)$, $(12,6)$ e $(6,0)$, e il risultato è $6$. La chiamata ricorsiva è in posizione di coda, quindi la funzione si riscrive come ciclo.

```c
unsigned gcd_loop(unsigned a, unsigned b)
{
    while (b != 0u) {
        unsigned remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
```

Il resto viene salvato in `remainder` prima di modificare `a` e `b`, perché il suo calcolo usa i vecchi valori di entrambe. A ogni iterazione la coppia `(a, b)` assume gli stessi valori degli argomenti delle chiamate ricorsive. Il ciclo termina quando `b` vale $0$ e restituisce `a`, come il caso base. Il risultato $6$ divide sia $48$ sia $18$.
:::

:::osservazione
Due casi particolari da provare sono quelli con uno zero. `gcd(7, 0)` è il caso base e restituisce subito $7$. In `gcd(0, 7)` il resto di $0$ diviso $7$ è $0$, quindi la chiamata interna è `gcd(7, 0)`, che restituisce $7$.
:::
