---
titolo: Vettori, matrici e stringhe
sommario: Come attraversare un vettore entro i suoi limiti, leggere una matrice per righe e costruire stringhe C con il terminatore al posto giusto.
---

## Oggetti composti e indici validi

:::definizione{#vettore-c titolo="Vettore di elementi omogenei"}
Un **vettore** in C è un oggetto composto da elementi contigui dello stesso tipo. La dichiarazione `int a[5];` riserva cinque elementi di tipo `int`. Il vettore ha lunghezza $n=5$ ed è possibile individuare ciascun elemento tramite il suo indice $i$. I vincoli sugli indici sono
$$
0\le i<n .
$$
Il primo elemento è `a[0]` e l’ultimo è `a[n - 1]`. Il valore $n$ è il primo indice escluso, perciò appartiene naturalmente alla descrizione del confine di una traversata. Un vettore dichiarato con dimensione costante ha una dimensione strettamente positiva nel C17 portabile. Una procedura può comunque elaborare zero elementi quando il suo intervallo attivo è vuoto.
:::

:::definizione{#inizializzazione-vettore titolo="Inizializzazione con una lista"}
Una lista di valori tra graffe inizializza le celle nell’ordine degli indici crescenti. In `int a[5] = {7, -2};`, gli elementi di indice $0$ e $1$ ricevono rispettivamente $7$ e $-2$. Poiché la dichiarazione fornisce una lista, i tre elementi rimanenti ricevono zero. In `int b[] = {7, -2};`, il compilatore deduce invece la dimensione $2$ dalla lunghezza della lista. In entrambi gli esempi, ogni cella del vettore ha un valore iniziale determinato.
:::

:::esempio{titolo="Leggere una cella inizializzata"}
Si consideri il frammento seguente, in cui tutti gli indici appartengono all’intervallo $[0,5)$.
```c
int a[5] = {7, -2};
int value = a[1] + a[4];
```
La cella `a[1]` vale $-2$ perché è stata inizializzata dal secondo valore della lista. La cella `a[4]` vale $0$ perché è stata inizializzata implicitamente. L’assegnazione a `value` memorizza dunque $-2+0=-2$. La prima operazione utile è stabilire come ciascun valore è stato assegnato, perché il solo indice individua una posizione.
:::

:::attenzione
Una dichiarazione come `int a[5];`, in un blocco e con durata automatica, lascia inizialmente indeterminato il contenuto del vettore. Un algoritmo che usa quelle celle assegna un valore a ciascuna cella prima di leggerla. L’accesso `a[5]` esce invece dal vettore anche quando tutti i suoi cinque elementi sono inizializzati. Il primo caso riguarda la disponibilità del valore, il secondo riguarda il dominio degli indici.
:::

## Intervalli e invarianti di scansione

:::definizione{#intervallo-semichiuso titolo="Intervallo semichiuso di indici"}
Sia $n$ la capacità in elementi di un vettore. Per estremi interi che soddisfano $0\le lo\le hi\le n$, l’intervallo **semichiuso** $[lo,hi)$ contiene gli indici da $lo$ incluso a $hi$ escluso. Il numero di indici è $hi-lo$. Se $lo=hi$, l’intervallo è vuoto e la sua lunghezza è zero. Gli intervalli $[lo,k)$ e $[k,hi)$, con $lo\le k\le hi$, coprono $[lo,hi)$ senza condividere indici. Si possono così dividere le letture in due gruppi e ricomporre il risultato.
:::

::::teorema{#traversata-vettore titolo="Accumulatore su un intervallo"}
Siano $0\le lo\le hi\le n$ e siano inizializzati gli elementi di $[lo,hi)$. Se tutte le somme parziali sono rappresentabili nel tipo di `sum`, il seguente ciclo produce la somma del segmento. Il tipo `size_t` è quello dichiarato da `<stddef.h>`.
```c
int sum = 0;
for (size_t i = lo; i < hi; ++i) {
    sum += a[i];
}
```

:::dimostrazione
Prima della condizione con indice $i$, l’accumulatore contiene la somma su $[lo,i)$. All’inizio $i=lo$, quindi la somma è quella di un intervallo vuoto e vale zero. Se $i<hi$, l’indice $i$ è valido e `a[i]` è l’unico elemento che si aggiunge passando a $[lo,i+1)$. L’incremento porta l’indice a $i+1$ e conserva l’enunciato dell’invariante. A ogni esecuzione del corpo, il numero $hi-i$ di elementi che restano scende di uno. Il ciclo si arresta a $i=hi$, quindi la somma copre tutto $[lo,hi)$.
:::
::::

:::esempio{titolo="Contare con una condizione"}
Per contare le celle negative in `int a[5] = {4, -1, -3, 2, -2};` nell’intervallo $[1,4)$, si inizializza un conteggio a zero. Si aggiunge uno solo quando `a[i] < 0`. All’ingresso gli indici $1,2,3$ corrispondono ai valori $-1,-3,2$. I primi due soddisfano la condizione, quindi il conteggio finale è $2$. L’elemento `a[4]` è negativo e ha indice escluso, perciò resta fuori dal conteggio. L’invariante usa il numero di valori negativi nel prefisso già esaminato e la stessa misura $hi-i$ prova la terminazione.
:::

:::osservazione
La lunghezza del segmento si calcola dopo aver stabilito l’ordine degli estremi. Se $hi<lo$, la differenza matematica è negativa. Memorizzare tale differenza in una variabile di tipo `size_t` produce il valore congruente nel tipo senza segno. Per mantenere il significato di $hi-lo$ come numerosità occorre quindi la relazione $lo\le hi$. Analogamente, per la somma basta che tutte le somme *del prefisso*, nell’ordine di visita scelto, siano rappresentabili. La sola rappresentabilità del risultato finale è una condizione più debole.
:::

:::osservazione
Per una funzione a cui si passa anche la capacità $n$, i controlli `lo <= hi` e `hi <= n` si possono riunire in una condizione. Il tipo `size_t` esclude già gli estremi negativi. Se $n=5$, la coppia $(4,2)$ non rispetta il primo controllo, mentre $(3,6)$ non rispetta il secondo. La coppia $(5,5)$ soddisfa entrambi i controlli e specifica una traversata vuota. Imporre `hi < n` farebbe rifiutare anche $[0,5)$, che comprende esattamente le cinque celle. Il confronto con $n$ riguarda l’estremo escluso, mentre quello con $hi$ limita ogni singolo indice visitato.
:::

## Dimensione dell’oggetto e parametri

:::definizione{#dimensione-vettore titolo="Misura in byte e numero di elementi"}
L’operatore `sizeof` restituisce la dimensione dell’operando in byte C, come valore di tipo `size_t`. Per un oggetto dichiarato `int a[7];`, `sizeof a` misura l’intero vettore e `sizeof a[0]` misura un elemento. Gli elementi sono contigui e hanno la stessa dimensione, quindi
$$
\texttt{sizeof a}=7\cdot\texttt{sizeof a[0]} .
$$
L’espressione `sizeof a / sizeof a[0]` vale $7$ anche su un’implementazione in cui `sizeof(int)` ha un valore diverso da quattro. Qui `sizeof a[0]` misura il tipo `int`, quindi può essere usato subito dopo la dichiarazione, prima che le celle ricevano un valore.
:::

:::definizione{#parametro-vettore titolo="Vettore passato a una funzione"}
Nella dichiarazione di un parametro, `const int a[]` è adattato a `const int *a`. Anche `const int a[7]`, senza la parola chiave `static` tra le parentesi quadre, dà lo stesso tipo di parametro. La funzione può usare `a[i]` quando il chiamante le mette a disposizione gli elementi necessari. Il valore della dimensione effettiva si comunica con un parametro di lunghezza o, tra funzioni che condividono una misura fissa, con un contratto esplicito. Dentro la funzione, `sizeof a` misura il parametro adattato a puntatore. La formula per dedurre il numero di elementi si applica dunque nel blocco in cui `a` è un oggetto vettore.
:::

:::esempio{titolo="Contratto per una somma parziale"}
Nel frammento si assume disponibile `<stddef.h>`. Il chiamante fornisce accesso ad almeno $hi$ elementi se l’intervallo ha lunghezza positiva. Le celle da $lo$ a $hi$ escluso sono inizializzate e ogni somma parziale è rappresentabile in `int`.
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
Da `int samples[4] = {9, 1, 6, 3};` si ottiene `sum_range(samples, 1, 4)` uguale a $1+6+3=10$. La chiamata con $lo=4$ e $hi=4$ restituisce $0$ senza leggere alcun elemento. Il contratto identifica la parte da visitare. La firma `const int a[]` consente letture attraverso il parametro e impedisce assegnazioni tramite `a[i]`.
:::

:::osservazione
È possibile dichiarare `const int a[static 4]` come parametro di funzione. In C17 questa forma impone che l’argomento fornisca accesso al primo elemento di un array che contiene almeno quattro elementi. La dimensione effettiva resta un dato del chiamante e il parametro ha comunque tipo puntatore. Per esempio, una funzione che legga un gruppo fisso di quattro campioni può adottare quel contratto. Un vettore di sette campioni lo soddisfa, purché il suo primo elemento sia accessibile. Un vettore di tre campioni viene escluso dal contratto prima di considerare il corpo della funzione. In altri casi, come la somma di un intervallo che può essere vuoto, risulta adatto un parametro di lunghezza esplicito.
:::

## Struttura fisica delle righe

:::definizione{#matrice-per-righe titolo="Matrice come vettore di vettori"}
La dichiarazione `int m[3][4];` crea tre elementi del tipo `int[4]`. Ciascun elemento è quindi una riga di quattro interi. L’espressione `m[r][c]` seleziona prima la riga di indice $r$, poi l’elemento di indice $c$ della riga. Gli indici validi soddisfano $0\le r<3$ e $0\le c<4$. La seconda dimensione descrive il tipo di una riga e determina di quanto cambia la posizione quando si passa alla riga successiva.
:::

::::teorema{#scostamento-matrice titolo="Scostamento della cella sotto la disposizione per righe"}
Siano $R>0$ il numero di righe e $C>0$ il numero di colonne di un oggetto `T m[R][C]`, con dimensioni costanti e indici validi $r,c$. Lo scostamento della cella `m[r][c]` rispetto all’inizio della matrice, espresso prima in elementi e poi in byte C, è dato da
$$
k=rC+c,\qquad b=k\,\texttt{sizeof(T)} .
$$
:::dimostrazione
Le prime $r$ righe sono contigue e contengono $C$ elementi ciascuna, quindi si saltano $rC$ elementi. All’interno della riga $r$, prima della cella scelta compaiono le $c$ celle di indice da $0$ a $c-1$. Il totale è $rC+c$ e ogni elemento occupa `sizeof(T)` byte C. La formula individua una posizione nella rappresentazione dell’oggetto. Gli accessi indicizzati continuano a rispettare i limiti di ogni riga.
:::
::::

:::esempio{titolo="Individuare una cella della griglia"}
Si consideri la matrice mostrata nella figura.

![Tre righe con valori 5, 9, 2, 7, poi 4, 0, 8, 1, poi 6, 3, 5, 2. La cella di riga 1 e colonna 2 vale 8.](/immagini/informatica/vettori-matrici-stringhe/schema-teoria-it.png)

La cella `m[1][2]` ha valore $8$. Per raggiungerla si passa oltre la riga $0$, composta da quattro elementi, e oltre le celle $0$ e $1$ della riga $1$. Lo scostamento è $1\cdot4+2=6$ elementi. Se `sizeof(int)` vale quattro per la macchina considerata, lo scostamento in byte C è $6\cdot4=24$.
:::

:::attenzione
Nel vettore interno di lunghezza $4$, l’indice $4$ è fuori dal dominio. Di conseguenza `m[0][4]` non accede alla cella `m[1][0]`, anche se la rappresentazione delle righe è contigua. Alla prima cella della seconda riga corrispondono l’indice di riga $1$ e l’indice di colonna $0$. Il quoziente e il resto della divisione di uno scostamento lineare per $C$ danno questi due indici, quando lo scostamento è compreso tra $0$ e $RC-1$.
:::

## Scansioni di matrici rettangolari

:::definizione{#traversata-matrice titolo="Visita, colonne e diagonale"}
Per visitare ogni cella di una matrice $R\times C$, si può scegliere un ciclo esterno sulle righe e uno interno sulle colonne. Quando il ciclo esterno fissa $r$, quello interno esamina $c\in[0,C)$. Per una sola colonna $j$ è sufficiente variare $r$ e accedere a `m[r][j]`, dopo aver verificato $0\le j<C$. Sulla diagonale principale si impone $r=c=i$. L’indice deve appartenere sia a $[0,R)$ sia a $[0,C)$, quindi la diagonale contiene $\min(R,C)$ celle. Questa condizione rende valida la visita anche quando la matrice è rettangolare.
:::

:::esempio{titolo="Somma di una colonna con larghezza fissa"}
La funzione riceve righe di quattro interi e legge la colonna `col`, con `col < 4`. Il chiamante fornisce `rows` righe accessibili, la colonna è inizializzata e ogni somma parziale è rappresentabile in `int`. Si assume disponibile `<stddef.h>`.
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
Con le tre righe della figura, dichiarate con elementi `const int`, l’esecuzione con `col = 2` legge in ordine $2$, $8$ e $5$. La somma è $2+8+5=15$. Il tipo del parametro consente al compilatore di stabilire la larghezza di una riga. Il numero di righe, che dipende dall’oggetto passato, è fornito separatamente.
:::

:::osservazione
La trasposta di una matrice $R\times C$ ha dimensioni $C\times R$. Il valore `m[r][c]` è assegnato a `t[c][r]`. Poiché $c<C$ e $r<R$, entrambi gli indici sono validi nella forma trasposta. Ogni coppia di indici della matrice di partenza raggiunge una coppia distinta nella matrice di arrivo, e scambiare nuovamente gli indici restituisce la coppia di partenza. Questa corrispondenza giustifica una trasposizione con due cicli quando le matrici occupano zone distinte.
:::

:::osservazione
Le dimensioni totali di due matrici possono coincidere senza che coincida il tipo delle loro righe. Per esempio, le matrici costanti di tipi `const int[2][6]` e `const int[3][4]` contengono entrambe dodici interi. La funzione `column_sum` dell’esempio riceve un puntatore a una riga di quattro elementi. Il secondo tipo fornisce quel tipo di riga, mentre il primo fornisce una riga di sei interi. La cella di indice di riga $1$ a colonna $0$ occupa la posizione lineare $6$ nella prima matrice e la posizione $4$ nella seconda. La coincidenza del numero totale di celle non basta dunque a scegliere il parametro. Per accettare una larghezza variabile si può progettare una rappresentazione con un vettore unidimensionale e dichiarare un contratto esplicito su righe, colonne e dimensione del vettore.
:::

## Terminazione e lunghezza del testo

:::definizione{#stringa-c titolo="Stringa terminata da carattere nullo"}
Una **stringa C** è una sequenza di caratteri che termina al primo carattere nullo `'\0'`. Il terminatore è contenuto nell’oggetto e ha valore zero. La cifra `'0'` appartiene invece ai caratteri del testo e ha un codice diverso. Se il primo elemento vale `'\0'`, la stringa è vuota e occupa comunque la cella che contiene il terminatore. Un vettore di `char` può contenere altri dati dopo il primo nullo. All’interno del vettore, la stringa che inizia dall’indice $0$ termina al primo nullo raggiunto da quella posizione.
:::

:::definizione{#dimensione-e-lunghezza titolo="Capacità, sizeof e strlen"}
Sia `s` un oggetto vettore di `char` con capacità $B$, misurata in elementi. Poiché `sizeof(char)` vale uno, `sizeof s` vale $B$ byte C. La funzione `strlen(s)`, dichiarata in `<string.h>`, restituisce invece il numero $\ell$ di caratteri che precedono il primo nullo. La sua precondizione è che il terminatore si trovi nel vettore e che ogni cella dal carattere iniziale al terminatore sia leggibile. Segue
$$
0\le\ell<B .
$$
Il terminatore occupa l’elemento `s[ell]`. La lunghezza conta unità di tipo `char` prima del nullo. Se il testo usa una codifica con più byte per un simbolo, il numero di tali simboli può essere diverso da $\ell$.
:::

:::esempio{titolo="Sequenza con un nullo interno"}
Nella dichiarazione `char s[8] = "ab\0cd";`, le prime sei celle contengono in ordine `'a'`, `'b'`, `'\0'`, `'c'`, `'d'` e il nullo finale aggiunto al letterale dal linguaggio. Le due celle restanti sono inizializzate a zero. L’operatore `sizeof s` dà $8$. La funzione `strlen(s)` dà $2$ perché il primo nullo ha indice $2$. Le celle contenenti `'c'` e `'d'` restano nell’oggetto. Il loro contenuto può essere letto con indici validi, mentre è escluso dalla stringa che inizia in `s[0]`.
:::

:::attenzione
La dichiarazione `char raw[3] = "ram";` inizializza le tre celle con i tre caratteri visibili ed esaurisce la capacità. Il letterale ha anche un carattere di terminazione, ma nel vettore di destinazione manca lo spazio che lo conterrebbe. Il vettore ottenuto è valido come sequenza di tre valori `char`. Usarlo come argomento di una funzione che richiede una stringa C violerebbe la precondizione. Con `char text[4] = "ram";` il terminatore trova posto all’indice $3$.
:::

## Spazio per costruire una stringa

::::teorema{#capacita-stringa titolo="Capacità per una concatenazione"}
Siano $u$ e $v$ le lunghezze di due testi, esclusi i terminatori. Per concatenarli in un unico vettore di capacità $B$, mantenendo un terminatore in coda, occorrono almeno $u+v+1$ celle.
:::dimostrazione
Il primo testo occupa $[0,u)$ e il secondo $[u,u+v)$. Insieme occupano $[0,u+v)$, quindi il terminatore va scritto all’indice $u+v$. La condizione per un indice valido è $u+v<B$. Poiché le quantità sono intere, equivale a $B\ge u+v+1$. Questa dimostrazione usa interi matematici. Per verificare la disuguaglianza con `size_t` senza formare subito la somma, si verifica prima $u<B$. Sotto questa ipotesi, $B-1-u$ è rappresentabile e il secondo testo deve soddisfare $v\le B-1-u$.
:::
::::

:::esempio{#costruzione-stringa titolo="Aggiungere un carattere con capacità nota"}
Sia `s` una stringa valida di lunghezza `len` in un vettore di capacità `cap`. Per aggiungere un carattere `ch` diverso da `'\0'`, la funzione verifica che ci siano almeno due celle a partire dalla posizione `len`. Il chiamante aggiorna la lunghezza se la funzione restituisce `true`. Si assumono disponibili `<stdbool.h>` e `<stddef.h>`.
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
Con `char s[5] = "tre";` si ha `len = 3` e `cap = 5`. La differenza è $2$, quindi il carattere `'s'` può essere scritto all’indice $3$ e il nuovo nullo all’indice $4$. La stringa risultante è `"tres"`. Con una capacità di quattro celle, il ramo di rifiuto si esegue prima delle assegnazioni e lascia invariati gli elementi. La condizione `len >= cap` è valutata per prima e impedisce di sottrarre una lunghezza troppo grande dal valore `cap`.
:::

:::osservazione
Il controllo dell’indice di scrittura e il controllo del terminatore svolgono due compiti separati. Con $B=5$ e $\ell=4$ l’ultima cella correttamente accessibile è `s[4]`, ed è quella che contiene il terminatore. Scrivere un carattere in `s[4]` resterebbe all’interno del vettore per quella singola assegnazione. Per ottenere una stringa valida dopo l’aggiunta occorrerebbe però anche `s[5]`. La richiesta di due celle evita questa perdita della terminazione.
:::

## Lettura e riscrittura con due indici

:::definizione{#traversata-stringa titolo="Indice di lettura e indice di scrittura"}
Per filtrare i caratteri di una stringa si mantiene un indice di lettura $i$ e un indice di scrittura $k$, entrambi inizialmente zero. All’ingresso di una iterazione, il prefisso di uscita $[0,k)$ contiene esattamente i caratteri da conservare tra i primi $i$ caratteri d’ingresso, nell’ordine originale. La relazione $k\le i$ segue perché ogni carattere letto produce al più un carattere scritto. Se la lunghezza d’ingresso è $\ell$, una capacità di almeno $\ell+1$ elementi copre sia tutte le scritture dei caratteri sia la scrittura finale del nullo.
:::

:::esempio{titolo="Filtro che conserva l’ordine"}
Si consideri la stringa `"sasso"` e si copino in un vettore distinto i caratteri diversi da `'s'`. La capacità di uscita vale $6$, quindi può contenere anche il caso in cui si conservino tutti e cinque i caratteri. Si assume disponibile il tipo `size_t`.
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
Il ciclo salta i tre caratteri `'s'`, copia `'a'` all’indice $0$ e copia `'o'` all’indice $1$. Il nullo è scritto all’indice $2$, quindi si ottiene `"ao"`. Se l’ingresso è vuoto, la condizione fallisce già all’indice $0$ e si scrive il nullo in `out[0]`. Il caso vuoto rispetta quindi lo stesso contratto di uscita.
:::

:::osservazione
Per cercare un motivo non vuoto di lunghezza $q$ dentro un testo lungo $\ell$, ciascun tentativo verifica $q$ caratteri consecutivi. Se $q>\ell$ non esiste alcuna posizione iniziale valida. Se $q\le\ell$, l’ultimo inizio valido è $\ell-q$ e il controllo dei caratteri si svolge solo per indici $j\in[0,q)$. Scorrere gli inizi uno alla volta permette di contare occorrenze sovrapposte. Per esempio, in `"ananas"`, il motivo `"ana"` appare agli indici $0$ e $2$, perciò il conteggio vale $2$.
:::
