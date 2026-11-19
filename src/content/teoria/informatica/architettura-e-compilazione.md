---
titolo: Architettura del calcolatore e compilazione
sommario: Il programma memorizzato, le gerarchie di memoria e il percorso di un sorgente C17 fino all’esecuzione.
---

## I componenti durante l’esecuzione

:::definizione{#programma-memorizzato titolo="Programma memorizzato"}
Un calcolatore esegue **istruzioni**, cioè operazioni elementari come «somma due numeri» o «copia un valore». Un **programma** è una sequenza di istruzioni. In un calcolatore a **programma memorizzato** le istruzioni sono scritte in memoria sotto forma di numeri, come i dati. Il **processore** le legge una alla volta e le esegue. Per far svolgere al calcolatore un compito diverso basta quindi caricare in memoria un altro programma, senza modificare i circuiti.

La **memoria** è una sequenza di celle numerate, e il numero di una cella è il suo **indirizzo**. Nel modello di von Neumann la stessa memoria contiene sia le istruzioni sia i dati. Una sequenza di bit, da sola, non indica se è un’istruzione o un dato. È un’istruzione quando il processore la legge per eseguirla, ed è un dato quando un’istruzione la legge come valore su cui operare.
:::

:::definizione{#stato-macchina titolo="Stato e registri del processore"}
Il processore contiene alcune celle interne molto veloci, chiamate **registri**, in cui tiene i valori su cui sta lavorando. Un registro particolare, il **contatore di programma** `PC` (*program counter*), contiene l’indirizzo della prossima istruzione da eseguire. Il lavoro è diviso fra due parti del processore. L’**unità di controllo** legge l’istruzione, riconosce quale operazione indica e comanda i trasferimenti. L’**unità aritmetico-logica** esegue i calcoli, per esempio una somma. Lo **stato** della macchina in un certo istante è l’insieme dei contenuti della memoria e dei registri, più l’informazione se la macchina è ferma.

Il processore scambia valori con la memoria in due modi. In una **lettura** indica un indirizzo e riceve una copia del valore contenuto in quella cella, che resta invariata. In una **scrittura** indica un indirizzo e un valore, e il valore sostituisce il contenuto della cella. In ogni accesso si distinguono quindi l’indirizzo, il valore trasferito e il verso del trasferimento.
:::

:::esempio{titolo="Effetto di una lettura"}
Il registro `R` contiene $8$ e la cella di indirizzo $12$ contiene $43$. Un’istruzione di lettura copia la cella $12$ in `R`. Dopo l’istruzione `R` contiene $43$ e il valore $8$ è perduto. La cella $12$ contiene ancora $43$, perché una lettura copia il valore senza toglierlo. Il numero $12$ è l’indirizzo, cioè indica dove leggere; il numero $43$ è il dato letto.
:::

## Una macchina da tracciare a mano

:::definizione{#istruzioni-modello titolo="Istruzioni del modello ad accumulatore"}
Per seguire a mano l’esecuzione di un programma si usa una macchina molto semplice. Ha un solo registro per i calcoli, l’**accumulatore** `A`, e il contatore `PC`. Ogni cella di memoria contiene un intero oppure un’istruzione, e $M[a]$ indica il contenuto della cella di indirizzo $a$. A ogni passo la macchina esegue l’istruzione che si trova all’indirizzo contenuto in `PC` e poi aggiorna `PC`.

| Istruzione | Effetto |
|---|---|
| `LOAD a` | Copia $M[a]$ in `A` |
| `ADD a` | Somma $M[a]$ al valore di `A` |
| `STORE a` | Copia `A` in $M[a]$ |
| `JZ a` | Salta all’indirizzo $a$ se `A` vale zero |
| `HALT` | Arresta la macchina |

Dopo `LOAD`, `ADD` e `STORE` il contatore aumenta di uno, quindi la macchina passa all’istruzione successiva. `JZ a` (*jump if zero*) è un salto condizionato. Se `A` vale zero, `PC` diventa $a$; altrimenti aumenta di uno. `HALT` ferma la macchina e lascia `PC` invariato. I processori reali hanno molte più istruzioni e numeri con una quantità finita di bit, ma funzionano con lo stesso schema.
:::

:::esempio{titolo="Prelievo, salto e scrittura"}
All’inizio `PC` vale $0$ e i dati sono $M[20]=0$, $M[21]=7$, $M[22]=0$. Il programma copia la cella $20$ in `A`. Se il valore è zero salta l’addizione, altrimenti somma la cella $21$. Infine scrive il risultato nella cella $22$. Nel listato il numero a sinistra è l’indirizzo dell’istruzione.

```text
0  LOAD 20
1  JZ 3
2  ADD 21
3  STORE 22
4  HALT
```

| `PC` prima | `A` dopo | `PC` dopo |
|---:|---:|---:|
| 0 | 0 | 1 |
| 1 | 0 | 3 |
| 3 | 0 | 4 |
| 4 | 0 | 4 |

Ogni riga della tabella è un passo. Al passo con `PC` uguale a $0$ si esegue `LOAD 20`, quindi `A` diventa $M[20]=0$ e `PC` passa a $1$. All’indirizzo $1$ c’è `JZ 3`. Poiché `A` vale zero, `PC` diventa $3$ e l’istruzione `ADD 21` all’indirizzo $2$ non viene eseguita. `STORE 22` copia `A`, cioè $0$, nella cella $22$, e `HALT` ferma la macchina. Se la cella $20$ contenesse un valore diverso da zero, il salto non avverrebbe e nella cella $22$ finirebbe quel valore più $7$.
:::

:::osservazione
L’esecuzione di ogni istruzione si divide in tre fasi, che insieme formano il **ciclo di istruzione**. Nel **prelievo** il processore legge l’istruzione dalla cella indicata da `PC`. Nella **decodifica** riconosce di quale istruzione si tratta e qual è il suo operando; per `JZ 3` riconosce un salto con operando $3$. Nell’**esecuzione** compie l’operazione e aggiorna `PC`.

Una traccia, come la tabella dell’esempio, riporta per ogni passo il valore di `PC` prima dell’istruzione e i valori dopo. Dopo un salto il nuovo `PC` è diverso dal precedente più uno. Nell’esempio, aggiungendo sempre uno si eseguirebbe anche `ADD 21`, che invece il salto evita.
:::

## Dagli indirizzi ai byte

::::teorema{#indirizzi-e-capacita titolo="Capacità e intervalli di indirizzi"}
Con $p$ bit si scrivono $2^p$ indirizzi diversi, da $0$ a $2^p-1$. Se a ogni indirizzo corrisponde un **byte**, cioè un gruppo di otto bit, la memoria ha una capacità di $2^p$ byte; con $p=16$ sono $65536$ byte. Una zona di memoria si indica con l’indirizzo iniziale $u$, incluso, e l’indirizzo finale $v$, escluso, e si scrive $[u,v)$, con $0\leq u\leq v$. La zona contiene $v-u$ byte. Se la zona è divisa in gruppi di $g$ byte ciascuno, con $g$ intero positivo, i gruppi sono $\dfrac{v-u}{g}$.

:::dimostrazione
Ciascuno dei $p$ bit può valere $0$ oppure $1$, quindi le combinazioni sono $2\cdot 2\cdots 2=2^p$, e a ciascuna corrisponde un byte. Per il secondo enunciato, sottraendo $u$ agli indirizzi di $[u,v)$ si ottengono gli interi da $0$ a $v-u-1$, che sono $v-u$; se la zona è vuota, cioè $u=v$, il conto dà zero. Poiché i gruppi non si sovrappongono e ciascuno contiene $g$ byte, il totale dei byte è $g$ volte il numero dei gruppi.
:::
::::

:::esempio{titolo="Intervallo di un dispositivo"}
Una periferica, per esempio una scheda di rete, occupa gli indirizzi da `0x100` incluso a `0x130` escluso; il prefisso `0x` indica un numero esadecimale. La periferica è divisa in registri di $4$ byte consecutivi ciascuno. La zona misura $(130)_{16}-(100)_{16}=(30)_{16}=48$ byte, quindi contiene $\dfrac{48}{4}=12$ registri. Come verifica, il dodicesimo registro inizia $11\cdot4=44$ byte dopo l’inizio e i suoi quattro byte arrivano alla posizione $47$, l’ultima della zona.
:::

:::attenzione
Il numero di bit dell’indirizzo stabilisce quanti indirizzi si possono scrivere, non quanta memoria è montata. Con $16$ bit gli indirizzi vanno da $0$ a $65535$, ma una macchina può avere soltanto $4096$ byte di memoria, e agli altri indirizzi non corrisponde nulla. La capacità reale si calcola contando gli indirizzi a cui corrisponde memoria. In C la dimensione di un dato si misura in byte con l’operatore `sizeof`, e il numero di bit di un byte è la costante `CHAR_BIT` di `<limits.h>`, che sulle macchine comuni vale $8$.
:::

:::definizione{#ordine-byte titolo="Ordine dei byte di una parola"}
Un numero che occupa più byte, per esempio un intero di due o quattro byte, sta in celle consecutive, e resta da stabilire in quale ordine. Con l’ordine **little endian** all’indirizzo più basso si trova il byte meno significativo, cioè quello di peso minore. Con l’ordine **big endian** all’indirizzo più basso si trova il byte più significativo.

Per esempio, il numero $(012A)_{16}=298$ occupa i due byte `0x01` e `0x2A`. In little endian l’indirizzo più basso contiene `0x2A` e il successivo `0x01`; in big endian l’ordine è l’opposto. Nel verso contrario, se l’indirizzo più basso contiene `0x2A` e il successivo `0x01`, la lettura little endian dà $(012A)_{16}=298$ e la lettura big endian dà $(2A01)_{16}=10753$. In formule, se i byte sono $k$ e $b_j$ è il byte all’indirizzo iniziale più $j$, il valore senza segno è $\sum_{j=0}^{k-1}b_j256^j$ in little endian e $\sum_{j=0}^{k-1}b_j256^{k-1-j}$ in big endian. Il peso $256=2^8$ è il numero di valori di un byte di otto bit.
:::

## Blocchi, cache e tempi di accesso

:::definizione{#localita-memoria titolo="Gerarchia e località degli accessi"}
Le memorie veloci costano molto e sono piccole, mentre quelle grandi sono lente. Un calcolatore ne usa quindi più tipi insieme, organizzati in una **gerarchia di memoria** di quattro livelli, dal più veloce e piccolo al più lento e grande. I **registri** stanno dentro il processore. La **cache** è una memoria piccola e veloce che tiene una copia dei dati usati di recente. La **memoria principale** (RAM) contiene istruzioni e dati dei programmi in esecuzione. La **memoria di massa**, cioè dischi e unità a stato solido, conserva i dati anche a calcolatore spento. Quando il processore chiede un dato, lo cerca prima nella cache. Se c’è, l’accesso è rapido; altrimenti il dato va preso dalla memoria principale, con un tempo maggiore.

La cache è utile perché i programmi non accedono alla memoria a caso. Per **località temporale** un dato appena usato viene di solito riusato poco dopo, come il contatore di un ciclo. Per **località spaziale**, dopo un dato vengono di solito usati quelli vicini, come gli elementi consecutivi di un vettore. Per sfruttare la località spaziale la cache copia ogni volta un **blocco** di byte consecutivi e non un byte solo. Con blocchi di quattro byte, gli indirizzi $4$, $5$, $6$ e $7$ stanno nello stesso blocco, quindi dopo la lettura di $5$ anche $6$ e $7$ sono già nella cache.
:::

:::definizione{#cache-diretta titolo="Blocchi e cache a mappatura diretta"}
La memoria si divide in blocchi di $B>0$ byte, numerati da zero. Il blocco $0$ contiene gli indirizzi da $0$ a $B-1$, il blocco $1$ quelli da $B$ a $2B-1$ e così via. L’indirizzo $a\geq 0$ appartiene quindi al blocco $b=\left\lfloor\dfrac{a}{B}\right\rfloor$, cioè al quoziente intero della divisione di $a$ per $B$. Il resto della divisione, $a-bB$, è l’**offset**, cioè la posizione del byte dentro il blocco. Con $B=4$, l’indirizzo $11$ sta nel blocco $2$ con offset $3$, perché $11=4\cdot 2+3$.

La cache è formata da $L>0$ **linee**, ciascuna delle quali contiene un blocco oppure è vuota. In una cache a **mappatura diretta** ogni blocco può stare in una sola linea, e il blocco $b$ va nella linea $b\bmod L$, cioè il resto della divisione di $b$ per $L$. Con $L=2$ i blocchi pari vanno nella linea $0$ e i dispari nella linea $1$. A ogni lettura si guarda la linea del blocco richiesto. Se contiene proprio quel blocco, l’accesso è un **hit** e il dato è disponibile subito. Se la linea è vuota o contiene un altro blocco, l’accesso è un **miss**; in questo caso il blocco richiesto viene copiato dalla memoria principale nella linea e sostituisce quello presente.
:::

:::esempio{titolo="Conflitto nella stessa linea"}
Si usano blocchi da $4$ byte e una cache con due linee, inizialmente vuote. Il programma legge nell’ordine gli indirizzi $3$, $4$, $5$, $11$, $2$. Per ciascuno si calcolano il blocco, come quoziente intero della divisione per $4$, e la linea, come resto della divisione del blocco per $2$.

| Indirizzo | Blocco | Linea | Esito |
|---:|---:|---:|---|
| 3 | 0 | 0 | miss |
| 4 | 1 | 1 | miss |
| 5 | 1 | 1 | hit |
| 11 | 2 | 0 | miss |
| 2 | 0 | 0 | miss |

La lettura di $3$ trova la linea $0$ vuota, quindi è un miss e il blocco $0$ viene caricato. Lo stesso accade per $4$, con il blocco $1$ nella linea $1$. L’indirizzo $5$ appartiene ancora al blocco $1$, che è già nella linea $1$, quindi è un hit. L’indirizzo $11$ appartiene al blocco $2$, che va nella linea $0$ perché $2$ è pari; la linea contiene il blocco $0$, quindi è un miss e il blocco $2$ prende il suo posto. L’indirizzo $2$ appartiene al blocco $0$, che era stato caricato alla prima lettura ma è appena stato sostituito, quindi è di nuovo un miss.
:::

:::definizione{#costo-medio titolo="Tempo medio nel modello a due livelli"}
Ogni accesso richiede il tempo $t_h$ per consultare la cache. Un miss richiede in più un tempo $P$, detto **penalità**, per prendere il blocco dalla memoria principale. Se $h$ è la frazione di accessi che sono hit, la frazione di miss è $1-h$ e il tempo medio di un accesso è
$$
\bar{t}=h\,t_h+(1-h)(t_h+P)=t_h+(1-h)P .
$$
Il termine $t_h$ è pagato da tutti gli accessi, la penalità $P$ soltanto dai miss. Nei cinque accessi della tabella c’è un solo hit, quindi $h=\dfrac{1}{5}$. Con $t_h=2\,\mathrm{ns}$ e $P=15\,\mathrm{ns}$ si ottiene $\bar{t}=2+\dfrac{4}{5}\cdot 15=14\,\mathrm{ns}$. Il conto diretto dà lo stesso risultato, perché un hit dura $2\,\mathrm{ns}$ e ciascuno dei quattro miss dura $17\,\mathrm{ns}$, per un totale di $70\,\mathrm{ns}$, e $\dfrac{70}{5}=14\,\mathrm{ns}$. Se un esercizio fornisce il tempo **totale** di un miss, quel valore sostituisce $t_h+P$.
:::

## Il sorgente visto dal preprocessore

:::definizione{#preprocessore titolo="Direttive di preelaborazione"}
Un programma C è un file di testo, il **sorgente**. Prima della compilazione vera e propria il sorgente passa per il **preprocessore**, un programma che modifica il testo seguendo le righe che iniziano con `#`, chiamate **direttive**. Le direttive più usate sono tre. `#include` inserisce in quel punto il contenuto di un altro file, detto **header**. `#define` associa a un nome un testo, e ogni comparsa successiva del nome viene sostituita con quel testo; un nome definito così si chiama **macro**. `#if` conserva o elimina una parte del sorgente secondo il valore di una condizione. Il compilatore riceve il testo già modificato.

Per esempio, dopo `#define SIZE 12` la riga `int n = SIZE;` diventa `int n = 12;`. La sostituzione riguarda il nome quando compare come parola a sé; dentro una stringa come `"SIZE"` i caratteri restano invariati. Una macro è quindi una sostituzione di testo eseguita prima della compilazione, mentre una variabile è una zona di memoria con un tipo, che esiste quando il programma è in esecuzione.
:::

:::esempio{titolo="Ramo scelto prima della compilazione"}
Si consideri il seguente frammento di sorgente.

```c
#define MEASURE 1
#if MEASURE
#define SCALE 4
#else
#define SCALE 2
#endif
int factor = SCALE;
```

La prima riga definisce `MEASURE` come `1`. La direttiva `#if MEASURE` diventa `#if 1`; la condizione è vera, quindi il preprocessore conserva `#define SCALE 4` ed elimina il ramo dopo `#else`. L’ultima riga diventa `int factor = 4;`. Cambiando la prima riga in `#define MEASURE 0` verrebbe conservato l’altro ramo e l’ultima riga diventerebbe `int factor = 2;`. La scelta avviene prima della compilazione, quindi nel programma eseguibile resta uno solo dei due valori.
:::

:::definizione{#unita-traduzione titolo="Unità di traduzione e dichiarazioni condivise"}
Un programma di una certa dimensione è diviso in più file sorgente `.c`, che si compilano uno alla volta. Il testo che il compilatore riceve per un sorgente, dopo che il preprocessore ha inserito gli header e fatto le sostituzioni, si chiama **unità di traduzione**. Quando una funzione è definita in un file e chiamata in un altro, il compilatore che traduce il secondo file deve conoscere almeno la sua **dichiarazione**, cioè nome, tipo del risultato e tipi dei parametri. La dichiarazione si scrive una volta sola in un header `.h`, e ogni sorgente che usa la funzione include quell’header.

Se un header viene incluso due volte nella stessa unità, per esempio perché lo include anche un altro header, le sue dichiarazioni compaiono due volte. Le **guardie di inclusione** lo evitano. L’header inizia con `#ifndef NOME`, che significa «se `NOME` non è definito», seguito da `#define NOME`, e termina con `#endif`. Alla prima inclusione `NOME` non è definito, quindi il contenuto viene conservato e `NOME` viene definito. Alla seconda inclusione `NOME` è già definito e il contenuto viene saltato. Ogni sorgente è preelaborato separatamente, quindi la guardia riparte da capo per ciascuno.
:::

## Dal sorgente all’oggetto

:::definizione{#file-oggetto titolo="Traduzione separata e file oggetto"}
La traduzione di un sorgente in un programma eseguibile avviene in quattro fasi. Nei sistemi di tipo Unix le avvia tutte il comando `cc`.

1. La **preelaborazione** applica le direttive e produce un sorgente C senza direttive (file `.i`).
2. La **compilazione** controlla che il testo rispetti le regole del C e lo traduce in **assembly**, un linguaggio in cui ogni riga corrisponde a un’istruzione del processore (file `.s`).
3. L’**assemblaggio** traduce l’assembly in codice macchina, cioè nei numeri che il processore esegue, e produce un **file oggetto** (file `.o`).
4. Il **collegamento** unisce i file oggetto in un solo file eseguibile.

Un file oggetto contiene il codice macchina di un solo sorgente. Le chiamate a funzioni definite in altri file vi restano in sospeso, annotate con il nome della funzione, e vengono completate nel collegamento. Di solito un solo comando esegue le prime tre fasi senza salvare i file intermedi. Nei comandi del capitolo `-std=c17` indica la versione del linguaggio C e `-o` il nome del file da produrre.
:::

:::esempio{titolo="Salvare i prodotti intermedi"}
Il programma è formato da due sorgenti. Il file `main.c` chiama la funzione `scale`, definita in `scale.c`. Lo schema mostra le fasi per `main.c`, eseguite una alla volta con il comando `cc` in un terminale.

![Il sorgente main.c produce main.i, poi main.s e main.o. Il collegamento combina main.o e scale.o per ottenere app.](/immagini/informatica/architettura-e-compilazione/schema-teoria-it.png)

```shell
cc -std=c17 -E main.c -o main.i
cc -std=c17 -S main.i -o main.s
cc -c main.s -o main.o
cc -std=c17 -c scale.c -o scale.o
cc main.o scale.o -o app
```

L’opzione `-E` ferma `cc` dopo la preelaborazione, e il risultato è `main.i`. L’opzione `-S` lo ferma dopo la compilazione, e il risultato è il file assembly `main.s`. L’opzione `-c` lo ferma dopo l’assemblaggio, e il risultato è il file oggetto `main.o`. Nella quarta riga `-c` è applicata direttamente a `scale.c`, quindi `cc` esegue di seguito le prime tre fasi e produce `scale.o`. L’ultima riga non ha opzioni di arresto e collega i due file oggetto nell’eseguibile `app`. Se in seguito si modifica soltanto `scale.c`, senza cambiare la dichiarazione della funzione, basta ripetere la quarta e la quinta riga, perché `main.o` è ancora valido.
:::

:::osservazione
Una riga di C non corrisponde a una sola istruzione del processore. Un’istruzione C come `a = b + c * d;` richiede più istruzioni macchina, e il compilatore può anche riordinare o eliminare operazioni, purché il programma produca gli stessi risultati. Il numero di righe del sorgente e il numero di istruzioni nel file `.s` sono quindi diversi.
:::

## Dagli oggetti all’eseguibile

:::definizione{#risoluzione-simboli titolo="Definizioni e riferimenti nel collegamento"}
Nel file oggetto ogni funzione definita nel sorgente compare con il suo nome, chiamato **simbolo**, accanto al suo codice. Ogni chiamata a una funzione definita altrove compare come **riferimento** a un simbolo ancora senza codice. Il **collegamento** unisce i file oggetto, cerca per ogni riferimento la definizione con lo stesso nome e inserisce nella chiamata l’indirizzo che la funzione ha nell’eseguibile.

Il collegamento fallisce in due casi. Se per un nome usato nessun file oggetto contiene la definizione, il riferimento resta **irrisolto** (*undefined reference*). Se due file oggetto definiscono lo stesso nome, c’è una **definizione multipla**. La dichiarazione e la definizione hanno quindi compiti diversi. La dichiarazione, di solito in un header, serve al compilatore per controllare che la chiamata usi i tipi giusti. La definizione contiene il corpo della funzione e serve al collegamento, che deve trovare il codice da eseguire.
:::

:::esempio{titolo="Due unità con un header comune"}
Il file `scale.h` dichiara la funzione con una guardia di inclusione.

```c
#ifndef SCALE_H_INCLUDED
#define SCALE_H_INCLUDED
int scale(int value);
#endif
```

Il file `scale.c` include l’header e definisce la funzione. Nell’esempio l’argomento è compreso fra $-100$ e $100$, quindi il suo doppio sta sicuramente in un `int`.

```c
#include "scale.h"

int scale(int value)
{
    return 2 * value;
}
```

Il file `main.c` include lo stesso header per poter chiamare la funzione.

```c
#include <stdio.h>
#include "scale.h"

int main(void)
{
    printf("%d\n", scale(6));
    return 0;
}
```

Compilando i due sorgenti separatamente, `main.o` contiene un riferimento a `scale` e `scale.o` contiene la sua definizione, quindi il collegamento riesce. Il doppio di $6$ è $12$, e il programma stampa `12` seguito da un ritorno a capo. Se al collegamento si passasse soltanto `main.o`, il nome `scale` resterebbe senza definizione e il collegamento fallirebbe con un riferimento irrisolto. L’header permette al compilatore di controllare la chiamata in `main.c`; il corpo in `scale.c` fornisce il codice che il collegamento inserisce nell’eseguibile.
:::

:::attenzione
Il collegamento associa riferimenti e definizioni soltanto per nome e non controlla i tipi. Se `main.c` dichiarasse per conto proprio `double scale(double value);` mentre `scale.c` definisce la funzione con parametro `int`, ciascun file verrebbe compilato senza errori e il collegamento riuscirebbe, ma il programma darebbe risultati sbagliati. Per questo la dichiarazione si scrive una sola volta nell’header e l’header si include sia nel file che chiama la funzione sia in quello che la definisce; così il compilatore confronta la dichiarazione con la definizione e segnala le differenze.
:::

## Avvio e diagnosi di un programma C

:::definizione{#avvio-hosted titolo="Ingresso, uscita e terminazione in ambiente hosted"}
L’esecuzione di un programma C comincia dalla funzione `main`. Un programma che gira sotto un sistema operativo si dice eseguito in ambiente **hosted**. La forma `int main(void)` indica che `main` non riceve parametri e restituisce un intero. Questo intero viene comunicato al sistema operativo quando il programma termina e indica se il programma è terminato correttamente. Per convenzione `return 0;` segnala il successo. L’header `<stdlib.h>` definisce due nomi per lo stesso scopo, `EXIT_SUCCESS` per il successo ed `EXIT_FAILURE` per il fallimento.

La funzione `printf` scrive caratteri sull’**uscita standard**, chiamata `stdout`, che di solito è il terminale ma può essere rediretta su un file. Il testo stampato e il valore restituito da `main` sono due risultati distinti. Il programma dell’esempio precedente stampa `12` e un ritorno a capo, e in più restituisce $0$. Chi verifica un programma controlla entrambi, cioè che il testo stampato sia quello atteso e che il valore restituito indichi il successo.
:::

:::definizione{#diagnosi-fasi titolo="Diagnosi a partire dall’artefatto prodotto"}
Quando la costruzione di un programma fallisce, il primo passo è capire in quale fase è avvenuto l’errore, perché ogni fase produce errori di tipo diverso.

- **Preelaborazione.** Un `#include` indica un file che non si trova; il messaggio contiene il nome del file.
- **Compilazione.** Il sorgente viola una regola del linguaggio, per esempio con una chiamata che ha un argomento in più rispetto alla dichiarazione; il messaggio indica il file e la riga.
- **Collegamento.** Una funzione è chiamata ma nessun file oggetto la definisce; il messaggio contiene il nome della funzione e non una riga del sorgente.
- **Esecuzione.** Il programma viene costruito senza errori ma stampa un risultato diverso da quello atteso; l’errore è nella logica del programma.

Il testo dei messaggi cambia da un compilatore all’altro, mentre la fase si riconosce sempre. Per un header mancante si controllano il nome e la cartella in cui si trova. Per un riferimento irrisolto si controlla quale file definisce la funzione e se il suo file oggetto è stato passato al collegamento. Per un risultato sbagliato si fissa un caso di prova, cioè un ingresso preciso con l’uscita attesa, e si segue l’esecuzione su quel caso.
:::

:::osservazione
Le regole C su ambiente di traduzione e di esecuzione sono raccolte nel documento C17 del comitato WG14. Le opzioni `-E`, `-S`, `-c` e `-o` seguono la documentazione del driver GCC. [Bozza C17 N2176](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2176.pdf) · [Opzioni GCC per il tipo di uscita](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
:::
