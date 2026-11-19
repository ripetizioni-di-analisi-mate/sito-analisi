---
titolo: Ricorsione e record di attivazione
sommario: Contratti ricorsivi, tracce dei ritorni, induzione e analisi del numero di chiamate e della profondità.
---

## Una funzione che richiama se stessa

:::definizione{#contratto-ricorsivo titolo="Contratto di una funzione ricorsiva"}
Una funzione è **direttamente ricorsiva** quando il suo corpo contiene una chiamata alla stessa funzione. All’inizio di ogni invocazione valgono le precondizioni del contratto. Nel **caso base** si restituisce il risultato senza chiamate ricorsive. Nel passo ricorsivo si invoca la funzione su dati che soddisfano lo stesso contratto e si usa il risultato per completare il problema iniziale.

Il parametro passato alla chiamata interna specifica un nuovo problema. Per esempio, la somma degli interi da $1$ a $n$ si ottiene aggiungendo $n$ alla somma fino a $n-1$. Il caso $n=0$ corrisponde alla somma di un insieme vuoto e restituisce $0$. Separare i casi permette di controllare in modo distinto la formazione del problema successivo e la ricostruzione del risultato.
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

Se il ramo ricorsivo viene eseguito, allora $n\geq1$. La sottrazione produce dunque un argomento compreso tra $0$ e $19$. Il risultato atteso più grande è $210$, perciò il dominio lascia spazio per tutte le somme nel tipo `unsigned`. Nel percorso per `sum(3)`, le richieste si riducono a $3$, $2$, $1$ e $0$. Dalla base si recuperano nell’ordine i valori $0$, $1$, $3$ e $6$.
:::

:::osservazione
Il contratto richiede almeno tre verifiche. Gli argomenti delle chiamate interne devono soddisfare le precondizioni. Il processo deve raggiungere casi risolvibili direttamente in un numero finito di passi. Infine l’operazione che combina i risultati interni deve produrre il valore richiesto per i dati iniziali. Per `sum` la prima verifica deriva dal test su $n$. La proprietà di terminazione e il valore restituito si dimostrano usando rispettivamente una misura decrescente e un’induzione.
:::

## Una misura che garantisce la fine

::::teorema{#misura-decrescente titolo="Criterio di terminazione per misura naturale"}
Sia $\mu$ una funzione che assegna un intero non negativo a ogni invocazione ammissibile. Si supponga che ogni singola invocazione, a parte le chiamate ricorsive, svolga un numero finito di operazioni e avvii un numero finito di chiamate. Se ogni chiamata ricorsiva resta nel dominio e ha misura strettamente minore di quella del chiamante, ogni invocazione termina.

:::dimostrazione
Si procede per induzione forte sulla misura $m$. Con $m=0$ una chiamata ricorsiva richiederebbe una misura naturale strettamente minore di zero. Perciò il calcolo locale è sufficiente e termina. Si supponga ora che tutte le invocazioni di misura minore di $m$ terminino. Ogni chiamata avviata da una invocazione di misura $m$ ha misura minore e termina per ipotesi induttiva. Poiché le chiamate avviate sono in numero finito e il resto dei passi è finito, anche l’invocazione di misura $m$ termina.
:::
::::

:::esempio{titolo="Ridurre l’argomento con una divisione"}
Nella funzione seguente il dominio è $0\leq n\leq127$. La divisione riguarda due interi senza segno, quindi restituisce il quoziente intero.

```c
unsigned halves(unsigned n)
{
    if (n == 0u) {
        return 0u;
    }
    return 1u + halves(n / 2u);
}
```

Per $n>0$ il valore $\lfloor\dfrac{n}{2}\rfloor$ è almeno zero ed è strettamente minore di $n$. La misura $\mu(n)=n$ soddisfa quindi il criterio. Partendo da $13$ si ottengono $13$, $6$, $3$, $1$ e $0$. Quattro invocazioni eseguono il passo ricorsivo e ciascuna aggiunge uno al risultato ricevuto. Perciò `halves(13)` restituisce $4$. In tutto il dominio la catena ha al massimo sette riduzioni, quindi ogni somma intermedia è rappresentabile.
:::

:::osservazione
Nel dimezzamento si può controllare il numero di riduzioni con le potenze di due. Dopo $k$ divisioni intere successive per due si ottiene il quoziente della divisione per $2^k$. Infatti, se $n=2^kq+r$ con $0\leq r<2^k$ e $q=2t+s$ con $s$ uguale a $0$ oppure $1$, allora $n=2^{k+1}t+2^ks+r$. L’ultimo resto è minore di $2^{k+1}$, quindi il quoziente successivo è $t$. Per un $n$ positivo tra $2^{k-1}$ incluso e $2^k$ escluso, dopo $k-1$ divisioni il quoziente è uno. Dopo la divisione successiva è zero. Per $13$ si ha $8\leq13<16$, quindi il conteggio di quattro riduzioni è verificato anche senza elencare tutti gli argomenti.
:::

:::attenzione
La presenza testuale di un ramo base non basta per la terminazione. Se la funzione verifica $n=0$ e negli altri casi richiama se stessa con lo stesso $n$, partendo da $n=3$ tutte le invocazioni mantengono la misura $3$. Il ramo base resta fuori dalla traccia logica. Anche una sottrazione va giustificata nel tipo dichiarato. Per esempio, con `unsigned` e $n=0$, sottrarre uno produce il massimo del tipo, quindi quella sottrazione non realizza un decremento naturale.
:::

:::esempio{titolo="Scegliere la misura con due parametri"}
Una regola sostituisce la coppia non negativa $(a,b)$ con $(b,a\bmod b)$ ogni volta che $b>0$. Il primo parametro può aumentare. Per esempio, con $(6,15)$ la prima chiamata interna usa $(15,6)$. La misura utile è il secondo parametro, perché il resto è sempre minore del divisore positivo. Dopo la prima chiamata si generano $(6,3)$ e $(3,0)$. Le misure sono quindi $15$, $6$, $3$ e $0$. Il caso base esamina proprio il secondo parametro e si raggiunge con misura zero. Poiché il test precede il calcolo del resto, il divisore è positivo dovunque il resto sia valutato. Il criterio dimostra la terminazione di questa sequenza di trasformazioni. L’uguaglianza fra il risultato richiesto e quello del caso base richiede anche una proprietà conservata dalla trasformazione.
:::

## Lo stato delle invocazioni attive

:::definizione{#record-attivazione titolo="Record di attivazione nel modello logico"}
Un **record di attivazione** rappresenta i dati necessari a una singola invocazione. Comprende i valori dei parametri, i valori degli oggetti automatici locali necessari e il punto al quale riprendere l’esecuzione dopo una chiamata. Due invocazioni della stessa funzione conservano record distinti. Per esempio, il parametro `n` della chiamata iniziale e quello della chiamata interna possono avere valori diversi, pur essendo dichiarati nello stesso corpo.

Nel modello, l’avvio di una chiamata crea un record. Il chiamante rimane attivo mentre il chiamato lavora. Quando il chiamato restituisce un valore, il suo record esce dalla sequenza attiva e il chiamante riprende il calcolo sospeso. Questo ordine descrive una pila logica. In C17 l’uso di una struttura fisica di memoria con quel particolare formato dipende dall’implementazione, che può scegliere un’altra disposizione purché conservi gli effetti richiesti.
:::

:::definizione{#traccia-ritorni titolo="Discesa delle chiamate e risalita dei risultati"}
Per costruire una traccia si registrano all’andata gli argomenti nell’ordine di chiamata. Se rimane un’operazione da eseguire dopo il ritorno, la si associa al record del chiamante. Dalla base si ricostruiscono all’indietro i risultati, inserendo ciascuno nel calcolo sospeso del relativo chiamante. La traccia distingue così un valore che appartiene al record attivo da un valore già restituito.
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

Per `scaled_total(3)` si conservano tre valori di `term`, rispettivamente $6$, $4$ e $2$. Nella chiamata di base `term` non viene inizializzato perché l’esecuzione termina nel primo ramo.

| Argomento | Calcolo in attesa | Ritorno |
|---:|---|---:|
| $3$ | $6+$ risultato interno | $12$ |
| $2$ | $4+$ risultato interno | $6$ |
| $1$ | $2+$ risultato interno | $2$ |
| $0$ | nessuno | $0$ |

Dopo la base, il record con argomento $1$ riceve $0$ e restituisce $2$. Il record con argomento $2$ conserva il proprio $4$, quindi restituisce $6$. Il record iniziale conserva il proprio $6$ e restituisce $12$. Come verifica, la somma diretta $2+4+6$ dà lo stesso risultato. I valori dei termini locali dimostrano perché il calcolo in risalita usa il dato del chiamante.
:::

## Dimostrare il valore restituito

::::teorema{#induzione-ricorsiva titolo="Correttezza della somma ricorsiva"}
Per ogni $n$ intero con $0\leq n\leq20$, la funzione `sum` termina e restituisce
$$
S(n)=\frac{n(n+1)}{2}.
$$

:::dimostrazione
Per la terminazione si applica il criterio con misura $n$, poiché il ramo ricorsivo viene eseguito soltanto per $n\geq1$ e richiama la funzione con $n-1$. Si dimostra poi per induzione la formula. A $n=0$ si restituisce zero e la formula dà $0$. Per $n\geq1$ la chiamata interna, per ipotesi induttiva, restituisce $\dfrac{(n-1)n}{2}$. La funzione aggiunge $n$, quindi
$$
\begin{aligned}
n+\frac{(n-1)n}{2}
 &= \frac{2n+(n-1)n}{2}\\[6pt]
 &= \frac{n(n+1)}{2}.
\end{aligned}
$$
I valori intermedi sono non negativi e il maggiore risultato è $210$. Perciò le somme del programma sono rappresentabili in `unsigned` e l’algebra descrive il loro risultato effettivo.
:::
::::

:::osservazione
L’ipotesi induttiva riguarda la chiamata interna, della quale si conosce il contratto con argomento minore. Usare la formula per l’argomento attuale prima di derivarla lascerebbe scoperto il passo induttivo. Inoltre la formula chiusa appartiene alla dimostrazione matematica. Una sua eventuale traduzione in C richiederebbe di controllare separatamente il prodotto prima della divisione. Per il dominio qui assunto anche il prodotto $20\cdot21$ è rappresentabile nel tipo considerato.
:::

:::esempio{titolo="Una seconda verifica a partire da una differenza"}
Dal contratto ci si aspetta che il valore al passo $n$ superi quello al passo $n-1$ di $n$. Calcolando con la formula si trova
$$
S(n)-S(n-1)=\frac{n(n+1)-(n-1)n}{2}=n .
$$
La differenza concorda con l’addendo del codice. Il valore iniziale $S(0)=0$ fissa la sequenza, quindi la verifica della differenza conferma la stessa formula.
:::

## Applicare il metodo a un prefisso di vettore

:::definizione{#ricorsione-su-prefisso titolo="Tagliare un prefisso alla sua ultima posizione"}
Sia `a` un vettore accessibile almeno nelle posizioni da $0$ a $n-1$. La somma di quelle posizioni si può esprimere come somma del prefisso di lunghezza $n-1$ e dell’elemento di indice $n-1$. Con $n=0$ si restituisce zero prima di leggere elementi. La misura è il numero di elementi del prefisso. La stessa memoria è disponibile a ogni chiamata e cambia soltanto il limite da considerare.

Per l’esempio si assumono $0\leq n\leq6$ e valori degli elementi nell’intervallo da $0$ a $100$. Il limite $600$ garantisce che tutte le somme sono rappresentabili in `unsigned`.

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

Con i dati $3$, $5$ e $1$, il prefisso di lunghezza uno dà $3$. Quello di lunghezza due dà $3+5=8$. Il prefisso intero dà $8+1=9$. Il ramo con $n>0$ usa solo l’indice $n-1$ del prefisso corrente. Perciò il riferimento è compreso nell’intervallo ammesso quando valgono le precondizioni.
:::

:::esempio{titolo="Un caso base per il massimo"}
Il massimo di un vettore con un solo elemento è quell’elemento. Per un prefisso più lungo si confrontano il massimo già determinato per il prefisso ridotto e l’ultimo elemento. Affinché questo contratto definisca un valore occorre almeno un elemento. Nell’esempio, `a` è accessibile nelle prime $n$ posizioni e $1\leq n\leq6$.

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

Per i dati $-5$, $-2$ e $-8$ si ottengono nell’ordine i massimi $-5$, $-2$, $-2$. Il risultato è uno degli elementi del vettore e domina gli altri due. Il caso base a lunghezza uno vale anche quando tutti gli elementi sono negativi. Partire da zero come massimo darebbe invece un valore esterno al vettore per questi dati.
:::

## Quando una chiamata ne avvia due

:::definizione{#albero-chiamate titolo="Albero logico delle invocazioni"}
L’**albero delle chiamate** associa un nodo a ciascuna invocazione. La radice è l’invocazione iniziale. Ogni figlio corrisponde a una chiamata avviata direttamente dal genitore. Le foglie completano il calcolo locale senza avviare chiamate ricorsive. Due nodi con lo stesso argomento rappresentano invocazioni distinte se il programma le esegue separatamente. Il valore di ritorno del genitore si ricava dai risultati dei figli e dai dati del suo record.
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

Ciascuna delle due invocazioni con argomento $2$ ottiene $1+0=1$. L’invocazione con argomento $3$ riceve a sua volta $1$ e $1$, quindi restituisce $2$. La radice somma $2$ e $1$ e restituisce $3$. I due nodi con argomento $2$ calcolano lo stesso valore, ma ciascuno ha il proprio genitore. Il ricalcolo diretto della successione dà $F_2=1$, $F_3=2$ e $F_4=3$. Nel dominio assunto, il massimo valore restituito è $55$.
:::

:::osservazione
Per la correttezza di `fib` si usa l’induzione forte. I due casi base rispettano i due valori iniziali. Per $n\geq2$ l’ipotesi induttiva dà entrambi i risultati $F_{n-1}$ e $F_{n-2}$, perché gli argomenti sono già nel dominio e sono minori di $n$. Il codice ne calcola la somma e realizza quindi la relazione che definisce $F_n$. I valori sono non negativi e la successione è non decrescente, quindi dal valore $F_{10}=55$ si ottiene anche un limite per ogni somma incontrata nel dominio.
:::

:::definizione{#sequenza-chiamate titolo="Ordine stabilito da espressioni distinte"}
Nel codice di `fib` l’inizializzatore di `left` termina prima dell’inizializzatore di `right`. La chiamata con argomento $n-1$ si completa quindi prima dell’avvio della chiamata con argomento $n-2$. Nel record del chiamante il valore di `left` rimane disponibile mentre si calcola `right`.

Una scrittura con entrambe le chiamate come operandi del medesimo `+` determina il valore della somma nei casi considerati. L’operatore `+` lascia non specificato quale operando venga valutato per primo. Quando una traccia chiede l’ordine di avvio, si deve quindi usare il sequenziamento presente nel codice. La forma dell’albero e il suo numero di nodi si possono determinare anche se l’ordine dei due rami è libero, purché entrambi i rami eseguano gli stessi calcoli nei due ordini.
:::

:::esempio{titolo="Registrare l’avvio delle invocazioni"}
Si vuole verificare la cronologia di `fib(4)` nella versione con inizializzatori separati. Un’osservazione dell’argomento all’ingresso di ogni invocazione deve avvenire prima di controllare il caso base, così il registro comprende anche le foglie. Si osserva anzitutto $4$. Il primo ramo registra $3$, poi la catena interna registra $2$, $1$, $0$ e la sua foglia successiva $1$. Terminato quel ramo, la radice avvia il secondo figlio, che registra $2$, $1$, $0$. Si ottengono nove osservazioni, nell’ordine $4$, $3$, $2$, $1$, $0$, $1$, $2$, $1$, $0$. Il registro distingue le due invocazioni con argomento $2$ grazie alla loro posizione. La cronologia determina quanti avvii sono avvenuti, ma la profondità richiede anche di individuare quando termina ciascun record.
:::

## Separare profondità e numero di chiamate

:::definizione{#profondita-ricorsione titolo="Massimo numero di record attivi"}
La **profondità** di un’invocazione nel modello logico è il massimo numero di record simultaneamente attivi durante il suo calcolo. Si conta anche il record iniziale. Una foglia ha profondità uno. Se una chiamata avvia più figli in sequenza, durante l’attività di un figlio il genitore resta attivo. La profondità è uno più la maggiore profondità fra i figli. Il numero totale di invocazioni, invece, conta anche i rami già completati.

In `fib(4)` il cammino con argomenti $4$, $3$, $2$, $1$ contiene quattro nodi. Gli altri cammini hanno al massimo quattro nodi, quindi la profondità è $4$. Il conteggio dei nodi della figura dà un numero diverso, $9$. Quando il ramo sinistro è terminato, i suoi record interni hanno già restituito i valori e non sono più attivi mentre procede il ramo destro. Si può controllare il totale senza disegno. I due casi base hanno un nodo ciascuno. Per `fib(2)` la radice e i due figli danno $3$ nodi, per `fib(3)` danno $1+3+1=5$ e per `fib(4)` danno $1+5+3=9$.
:::

::::teorema{#ricorrenza-costo titolo="Conteggio di un albero binario completo"}
Si consideri un calcolo con argomento intero $n\geq0$. Quando $n=0$ esegue un solo caso base. Per $n>0$ l’invocazione avvia due chiamate con argomento $n-1$, completandole in sequenza. Il numero complessivo $N(n)$ delle chiamate è $2^{n+1}-1$ e la profondità è $n+1$.

:::dimostrazione
La radice contribuisce un nodo e ogni figlio avvia un albero che ha $N(n-1)$ nodi. Perciò $N(0)=1$ e $N(n)=1+2N(n-1)$ per $n>0$. Sostituendo la formula per l’argomento minore si ottiene
$$
1+2(2^n-1)=2^{n+1}-1.
$$
La formula vale anche nella base, quindi il risultato segue per induzione. Per la profondità, durante ciascun ramo resta attivo il solo record aggiuntivo della radice. Di conseguenza la ricorrenza è $D(0)=1$ e $D(n)=1+D(n-1)$, che dà $n+1$.
:::
::::

:::osservazione
Il conteggio delle chiamate è una misura del lavoro quando ogni invocazione esegue una quantità comparabile di operazioni locali. La profondità descrive invece quante invocazioni devono essere rappresentate nello stesso momento nel modello. Un’implementazione C può conservare dati aggiuntivi o semplificare alcuni passaggi. Queste misure logiche non determinano da sole i byte effettivi di memoria né il tempo in secondi.
:::

## Riconoscere lo stato da trasferire

:::definizione{#ricorsione-in-coda titolo="Chiamata ricorsiva in posizione di coda"}
Una chiamata è in **posizione di coda** quando il valore ricevuto costituisce direttamente il risultato del chiamante. In `return n + sum(n - 1u);` rimane da eseguire una somma dopo il ritorno, quindi quel caso richiede di conservare il valore del termine. Un’espressione della forma `return gcd(b, a % b);` può restituire direttamente il valore della chiamata interna. La posizione di coda consente una trasformazione in ciclo quando il nuovo stato dipende soltanto dai dati già disponibili. L’eliminazione del record fisico resta una scelta dell’implementazione.
:::

:::osservazione
Per trasformare la somma in una ricorsione in coda si aggiunge allo stato un accumulatore $d$, inizializzato a zero. Il passaggio a $(n-1,d+n)$ mantiene la quantità $d+S(n)$, dove $S$ è la somma ancora da svolgere. Infatti $S(n)=n+S(n-1)$, quindi aggiungere $n$ all’accumulatore e rimuoverlo dalla somma rimanente lascia costante il totale. Con $n=0$ si restituisce direttamente $d$. Per $n=3$ i valori dell’accumulatore sono $0$, $3$, $5$ e $6$. Le somme intermedie non superano il valore iniziale di $S(n)$, che nel dominio della funzione è al più $210$. Il limite garantisce quindi anche la rappresentabilità della nuova addizione. Il passaggio di stato può essere effettuato, nello stesso ordine, da un ciclo che conserva un solo valore di $n$ e un solo accumulatore.
:::

:::esempio{titolo="Euclide con chiamata diretta e con ciclo"}
Si considerano due interi senza segno $a$ e $b$, con almeno uno dei due positivo. Quando $b>0$ si può scrivere $a=qb+r$, con $0\leq r<b$. Ogni divisore comune di $a$ e $b$ divide anche $r=a-qb$. Ogni divisore comune di $b$ e $r$ divide inoltre $a=qb+r$. I due insiemi di divisori comuni coincidono. Si può quindi sostituire lo stato $(a,b)$ con $(b,r)$ e conservare il massimo comune divisore.

```c
unsigned gcd(unsigned a, unsigned b)
{
    if (b == 0u) {
        return a;
    }
    return gcd(b, a % b);
}
```

La misura $b$ diminuisce a ogni passo. Nel caso $b=0$ il risultato è $a$. Per gli argomenti $48$ e $18$ il percorso è $(48,18)$, $(18,12)$, $(12,6)$ e $(6,0)$, quindi il valore restituito è $6$. Il ciclo seguente ripete la stessa trasformazione nell’ordine delle stesse coppie.

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

Il valore di `remainder` è calcolato prima della modifica di `a` e `b`, perciò i nuovi valori coincidono con gli argomenti della chiamata ricorsiva. Quando il ciclo termina, $b=0$ e resta lo stesso risultato del caso base. Come verifica, $6$ divide sia $48$ sia $18$ e l’identità $6=3\cdot18-48$ mostra che ogni loro divisore comune divide $6$.
:::

:::osservazione
Si verifica il caso $b=0$ con `gcd(7,0)`, che restituisce direttamente $7$. Si verifica anche `gcd(0,7)`. Nel secondo caso il primo resto è $0$, quindi si passa alla coppia $(7,0)$ e si restituisce di nuovo $7$. I due casi controllano rispettivamente la terminazione immediata e il passaggio alla base quando il primo dato è zero. I valori di prova affiancano la dimostrazione, che copre tutte le coppie del contratto.
:::
