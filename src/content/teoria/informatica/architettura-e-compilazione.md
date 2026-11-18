---
titolo: Architettura del calcolatore e compilazione
sommario: Il programma memorizzato, le gerarchie di memoria e il percorso di un sorgente C17 fino all’esecuzione.
---

## I componenti durante l’esecuzione

:::definizione{#programma-memorizzato titolo="Programma memorizzato"}
In un calcolatore a **programma memorizzato**, le istruzioni sono codificate e conservate in una memoria accessibile al processore. Il processore preleva una codifica, individua l’operazione che essa indica e la esegue sui dati. Per cambiare il comportamento del calcolatore basta caricare istruzioni diverse, mantenendo l’insieme di operazioni che l’hardware sa eseguire.

Nel modello di von Neumann lo spazio di memoria contiene dati e istruzioni. Il ruolo di una sequenza di bit dipende dall’accesso che la interpreta. Se il processore la preleva per decodificare un’istruzione, la legge come codice. Se un’istruzione di caricamento legge quella stessa sequenza come valore, la interpreta come dato. Alcune macchine separano gli accessi a istruzioni e dati, per esempio con due cache distinte. La separazione delle cache può coesistere con uno spazio di indirizzi unificato.
:::

:::definizione{#stato-macchina titolo="Stato e registri del processore"}
Lo **stato** del modello comprende il contenuto della memoria, i registri e l’indicazione di arresto. I registri conservano valori direttamente disponibili al processore. Il contatore di programma, indicato con `PC`, specifica l’indirizzo dell’istruzione da prelevare all’inizio del passo successivo. L’unità di controllo decodifica l’istruzione e coordina gli accessi. L’unità aritmetico-logica produce, per esempio, una somma sui valori dei registri.

Un accesso a memoria specifica un indirizzo e un’operazione di lettura o scrittura. In lettura il valore passa dalla memoria a un registro o al meccanismo di prelievo. In scrittura il valore passa dal processore alla cella indirizzata. Il canale che trasporta gli indirizzi, quello per i dati e i segnali di controllo possono essere distinti oppure condividere fisicamente parte dell’interconnessione. L’analisi del passo richiede di distinguere l’indirizzo selezionato, il dato trasferito e il verso del trasferimento.
:::

:::esempio{titolo="Effetto di una lettura"}
Si consideri un registro `R` che contiene $8$ e una cella di memoria di indirizzo $12$ che contiene $43$. Un’istruzione di lettura che copia la cella $12$ in `R` porta il registro a $43$. La memoria all’indirizzo $12$ conserva $43$ poiché il trasferimento è una lettura. Il numero $12$ individua la posizione, quindi il nuovo contenuto del registro è il dato $43$.
:::

## Una macchina da tracciare a mano

:::definizione{#istruzioni-modello titolo="Istruzioni del modello ad accumulatore"}
La macchina didattica usa un accumulatore `A` per un intero matematico e un contatore `PC`. Le celle dati contengono interi e ogni istruzione occupa una cella. Si indica con $M[a]$ il dato all’indirizzo $a$. Ogni prelievo usa il valore corrente di `PC`, quindi il passo successivo dipende dall’aggiornamento eseguito nel passo attuale.

| Istruzione | Effetto, oltre al passo di `PC` |
|---|---|
| `LOAD a` | Copia $M[a]$ in `A` |
| `ADD a` | Somma $M[a]$ al valore di `A` |
| `STORE a` | Copia `A` in $M[a]$ |
| `JZ a` | Sceglie il prossimo indirizzo |
| `HALT` | Arresta la macchina |

Per `LOAD`, `ADD` e `STORE` il contatore avanza di una cella. Con `JZ a` viene impostato ad $a$ se `A` vale zero e avanza di una cella negli altri casi. Nel modello `HALT` conserva il `PC` corrente e imposta lo stato di arresto. Nelle tracce tutti gli accessi indicati sono a celle esistenti. Un processore reale può avere istruzioni di estensione variabile, aritmetica di larghezza finita e una diversa convenzione per osservare il contatore.
:::

:::esempio{titolo="Prelievo, salto e scrittura"}
Si assumano `PC` iniziale $0$ e dati $M[20]=0$, $M[21]=7$, $M[22]=0$. Il programma carica il valore della cella $20$, verifica lo zero e decide se aggiungere il contenuto della cella $21$.

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

Prima si legge `LOAD 20` e il dato $M[20]$ sostituisce il valore iniziale di `A`. Poiché il nuovo valore è zero, il salto imposta direttamente `PC` a $3$. L’addizione all’indirizzo $2$ resta fuori dalla traccia. La scrittura in $M[22]$ trasferisce quindi zero. Per verificare il risultato si ripercorre la catena di provenienza del dato scritto. L’ultima assegnazione a `A` è quella della cella $20$, che contiene effettivamente zero.
:::

:::osservazione
Il ciclo di istruzione distingue **prelievo**, decodifica ed esecuzione. Per prelevare `JZ 3` si consulta la cella istruzioni indicata da `PC`. Durante la decodifica si riconosce il salto e si estrae l’operando $3$. Durante l’esecuzione si valuta la condizione su `A` e si determina il prossimo indirizzo. Queste sono fasi logiche. Una progettazione può sovrapporre operazioni di istruzioni successive, purché mantenga gli effetti previsti dal modello visibile al programma.

Una traccia indica il `PC` prima del passo e registra il valore dopo ogni aggiornamento. Poiché una riga descrive l’esecuzione di una sola istruzione, un salto compare come variazione del prossimo indirizzo. Se si sommasse sempre uno all’indirizzo appena eseguito, nell’esempio si otterrebbe l’addizione che il salto evita.
:::

## Dagli indirizzi ai byte

::::teorema{#indirizzi-e-capacita titolo="Capacità e intervalli di indirizzi"}
Sia $p$ il numero positivo di bit di un indirizzo. Se ogni indirizzo identifica un byte presente e gli indirizzi sono in corrispondenza biunivoca con i byte, la capacità è $2^p$ byte. Per gli interi $u$ e $v$ con $0\leq u\leq v$, la regione semiaperta $[u,v)$ contiene $v-u$ indirizzi consecutivi. Se ciascun gruppo di $g$ byte identifica un registro, con $g$ intero positivo, e l’intera regione è suddivisa in tali gruppi, il numero di registri vale $\dfrac{v-u}{g}$.

:::dimostrazione
Per ciascuno dei $p$ bit ci sono due scelte indipendenti, quindi il numero di indirizzi è il prodotto di $p$ fattori uguali a due. La corrispondenza biunivoca assegna esattamente un byte a ciascuna combinazione. Nel secondo enunciato l’intervallo è vuoto quando $u=v$. Quando $u<v$, sottraendo $u$ agli indirizzi di $[u,v)$ si ottengono gli interi da $0$ a $v-u-1$, che sono $v-u$. Poiché ciascun registro contiene $g$ byte e i registri sono disgiunti, il totale dei byte è $g$ volte il numero di registri.
:::
::::

:::esempio{titolo="Intervallo di un dispositivo"}
Una periferica occupa gli indirizzi da `0x100` incluso a `0x130` escluso. Ogni registro occupa $4$ byte consecutivi. La regione misura $(30)_{16}=48$ byte, quindi contiene $\dfrac{48}{4}=12$ registri. Come verifica, il primo indirizzo del dodicesimo registro sta a distanza $11\cdot4=44$ byte dall’inizio. I suoi quattro byte terminano a distanza $47$, cioè nell’ultima posizione ammessa.
:::

:::attenzione
La larghezza dell’indirizzo determina il numero di posizioni esprimibili. In una mappa reale la capacità installata può essere più piccola. Per esempio, con $16$ bit l’intervallo esprimibile va da $0$ a $65535$, mentre una macchina può montare $4096$ byte e lasciare senza memoria tutte le altre posizioni. Nel calcolo della capacità fisica si contano le posizioni realmente assegnate. Il byte di C è l’unità misurata da `sizeof`. Il numero di bit per byte è dato da `CHAR_BIT` in `<limits.h>`.
:::

:::definizione{#ordine-byte titolo="Ordine dei byte di una parola"}
Si consideri una parola senza segno di $k$ byte, ciascuno di otto bit. Sia $b_j$ il valore del byte all’indirizzo iniziale più $j$, per $0\leq j<k$. In ordine **little endian** il byte di indice $0$ è il meno significativo, quindi il valore della parola è $\sum_{j=0}^{k-1}b_j256^j$. In ordine **big endian** il byte di indice $0$ è il più significativo, quindi il valore è $\sum_{j=0}^{k-1}b_j256^{k-1-j}$. La base $256$ si ottiene da $2^8$, il numero di configurazioni di un byte nella macchina ipotizzata.

Con due byte nei quali l’indirizzo minore contiene `0x2A` e il successivo `0x01`, la lettura little endian dà $(012A)_{16}=298$. La lettura big endian dà $(2A01)_{16}=10753$. Gli indirizzi dei due byte e il contenuto di ogni byte rimangono gli stessi nelle due interpretazioni. L’ordine determina quale byte moltiplica il peso $256$.
:::

## Blocchi, cache e tempi di accesso

:::definizione{#localita-memoria titolo="Gerarchia e località degli accessi"}
Una **gerarchia di memoria** organizza livelli con capacità e tempi d’accesso diversi. I registri sono direttamente disponibili alle istruzioni del processore. Una cache mantiene copie di blocchi di memoria. La memoria principale conserva istruzioni e dati dei programmi in esecuzione. La memoria di massa è destinata a conservare informazioni a lungo termine. Un accesso che trova il blocco nella cache termina al livello più vicino considerato dal modello. Altrimenti il sistema recupera i dati da un altro livello.

La **località temporale** riguarda il riuso della stessa posizione o dello stesso blocco a breve distanza nella sequenza degli accessi. La **località spaziale** riguarda l’accesso a posizioni vicine. Leggere gli indirizzi $5$, $6$ e $7$ con blocchi da quattro byte coinvolge un solo blocco e usa località spaziale. Leggere di nuovo $5$ dopo tali accessi presenta anche località temporale. La località descrive la sequenza di accessi. La presenza del blocco dipende inoltre dalla configurazione della cache e dalle eventuali sostituzioni.
:::

:::definizione{#cache-diretta titolo="Blocchi e cache a mappatura diretta"}
Una memoria a byte con indirizzi a partire da zero è suddivisa in blocchi da $B>0$ byte. Per l’indirizzo intero $a\geq0$, il numero del blocco è $b=\lfloor\dfrac{a}{B}\rfloor$ e l’offset, cioè lo spostamento entro il blocco, è $a-bB$. Infatti il blocco $b$ occupa l’intervallo $[bB,(b+1)B)$. Avere offset uguali significa occupare la stessa posizione relativa in blocchi che possono essere differenti.

In una cache a **mappatura diretta** con $L>0$ linee, il blocco $b$ può occupare solo la linea $b\bmod L$. Per ogni linea si conserva l’informazione necessaria a distinguere il blocco presente. Nel modello delle tracce la linea conserva il numero intero del blocco, oppure risulta vuota. La lettura è un **hit** quando la linea contiene già il blocco richiesto. Si ha un **miss** quando la linea è vuota oppure contiene un altro blocco. In quest’ultimo caso, il blocco richiesto viene caricato al posto del precedente. Nell’esercizio si assume l’assenza di altri accessi e caricamenti anticipati.
:::

:::esempio{titolo="Conflitto nella stessa linea"}
Si usano blocchi da $4$ byte e due linee inizialmente vuote. La sequenza di letture è $3$, $4$, $5$, $11$, $2$.

| Indirizzo | Blocco | Linea | Esito |
|---:|---:|---:|---|
| 3 | 0 | 0 | miss |
| 4 | 1 | 1 | miss |
| 5 | 1 | 1 | hit |
| 11 | 2 | 0 | miss |
| 2 | 0 | 0 | miss |

All’indirizzo $5$ si incontra lo stesso blocco dell’indirizzo $4$, quindi si ha un hit. Il blocco $2$ usa la linea del blocco $0$ perché entrambi hanno resto zero nella divisione per due. Quando si torna al blocco $0$, la sola linea in cui può trovarsi contiene il blocco $2$. I due accessi di indirizzo $3$ e $2$ appartengono allo stesso blocco, eppure l’accesso interposto al blocco $2$ provoca il secondo miss.
:::

:::definizione{#costo-medio titolo="Tempo medio nel modello a due livelli"}
Sia $t_h$ il tempo dedicato alla consultazione della cache in ogni accesso. Sia $P$ il tempo aggiuntivo costante in caso di miss. Se $h$ è la frazione di hit in una sequenza con almeno un accesso, il tempo medio è
$$
\bar{t}=h\,t_h+(1-h)(t_h+P)=t_h+(1-h)P .
$$
Nell’ultima espressione, il termine $t_h$ conta il tempo di consultazione sostenuto da ogni accesso. Il termine $(1-h)P$ aggiunge la penalità solo sulla frazione $1-h$ degli accessi. Nel caso dei cinque accessi in tabella, $h=\dfrac{1}{5}$. Per $t_h=2\,\mathrm{ns}$ e $P=15\,\mathrm{ns}$ si ottiene $14\,\mathrm{ns}$. La somma diretta dei tempi dà $2+4\cdot17=70\,\mathrm{ns}$ e la media conferma il risultato. Se il valore del problema indica il tempo **totale** di un miss, nella media si usa quel valore al posto di $t_h+P$.
:::

## Il sorgente visto dal preprocessore

:::definizione{#preprocessore titolo="Direttive di preelaborazione"}
Il preprocessore tratta il sorgente come sequenza di unità lessicali di preelaborazione. Per i casi di questo capitolo, `#include` inserisce il contenuto individuato per l’header, `#define` associa un nome a una sostituzione e `#if` decide quale parte del sorgente rimane in base a un’espressione ammessa dal preprocessore. Le direttive agiscono prima che il codice risultante venga analizzato come programma C.

Per esempio, dopo `#define SIZE 12`, in `int n = SIZE;` il token `SIZE` viene sostituito con il token `12`. In una stringa letterale come `"SIZE"` i caratteri formano parte di un singolo token, quindi rimangono tali. La sostituzione della macro riguarda token nel sorgente. Un oggetto C dichiarato nel programma ha invece un tipo e, quando viene usato come valore, appartiene al codice analizzato dopo la preelaborazione.
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

Dopo l’espansione nella condizione, `#if` riceve il valore $1$ e seleziona il primo ramo. La sostituzione di `SCALE` nell’inizializzatore dà quindi `int factor = 4;`. Modificando `MEASURE` in $0$, il ramo alternativo stabilisce la sostituzione con $2$. In entrambi i casi, l’inizializzatore finale è una sola espressione C. L’eseguibile prodotto contiene il risultato di questa scelta nel codice o nei dati che il compilatore genera.
:::

:::definizione{#unita-traduzione titolo="Unità di traduzione e dichiarazioni condivise"}
Nell’esempio a più file si ottiene un’**unità di traduzione** a partire da un sorgente `.c` e dal materiale che le sue direttive rendono disponibile. Ogni sorgente viene preelaborato con il proprio insieme di definizioni e inclusioni. Includere lo stesso header in due sorgenti ne rende disponibili le dichiarazioni in entrambe le unità. Se una funzione definita in un file viene chiamata da un altro, una dichiarazione condivisa informa il compilatore sul tipo da usare per la chiamata.

Le guardie di inclusione usano un nome di macro che viene definito alla prima espansione dell’header nell’unità. Una successiva inclusione della stessa intestazione trova il nome già definito e lascia fuori la parte protetta. Poiché la preelaborazione di un altro sorgente è separata, la guardia opera di nuovo per quel sorgente. Una modifica all’header può cambiare tutte le unità che lo includono, anche quando l’inclusione passa per un altro header.
:::

## Dal sorgente all’oggetto

:::definizione{#file-oggetto titolo="Traduzione separata e file oggetto"}
In una toolchain compatibile con GCC, il comando `cc` è un driver che avvia le fasi richieste. Dal sorgente `.c` si può salvare il sorgente preelaborato in `.i`. La compilazione in senso stretto controlla il codice C risultante e può produrre un listato assembly `.s`. L’assemblatore converte il listato in un file oggetto `.o`. Il file oggetto conserva sezioni con codice o dati e le informazioni di cui il collegatore ha bisogno per riferimenti e posizioni ancora da risolvere. Il driver può ottenere il file oggetto in un solo comando e lasciare impliciti gli intermedi.

Le estensioni dei file e le opzioni seguenti sono convenzioni del driver. Le fasi logiche della traduzione previste da ISO C possono essere realizzate con strumenti e formati diversi. Nei comandi del capitolo, `-std=c17` seleziona la versione del linguaggio nelle invocazioni sul C, mentre `-o` assegna il nome al risultato richiesto.
:::

:::esempio{titolo="Salvare i prodotti intermedi"}
Il sorgente `main.c` contiene un programma che chiama la funzione esterna `scale`, definita in `scale.c`. Il diagramma mostra il percorso esplicito di `main.c` in un ambiente con driver GCC compatibile, formato a file oggetto e shell di tipo POSIX.

![Il sorgente main.c produce main.i, poi main.s e main.o. Il collegamento combina main.o e scale.o per ottenere app.](/immagini/informatica/architettura-e-compilazione/schema-teoria-it.png)

```shell
cc -std=c17 -E main.c -o main.i
cc -std=c17 -S main.i -o main.s
cc -c main.s -o main.o
cc -std=c17 -c scale.c -o scale.o
cc main.o scale.o -o app
```

`-E` termina dopo la preelaborazione. Applicando `-S` a `main.i` si ottiene il listato assembly. Il driver tratta `main.s` come input dell’assemblatore e `-c` produce `main.o`. Lo stesso `-c`, applicato a `scale.c`, percorre anche le fasi anteriori. Il comando finale usa i due oggetti come ingressi del collegamento. Se si cambia solo `scale.c` e le interfacce restano uguali, si può ricostruire `scale.o` e ripetere il collegamento, mantenendo `main.o` ottenuto dallo stesso insieme di dichiarazioni.
:::

:::osservazione
Il compilatore interpreta il testo secondo sintassi e significato del linguaggio. Un’istruzione C può contribuire a più istruzioni macchina, mentre più operazioni C possono essere riunite o eliminate se il comportamento osservabile resta equivalente nei casi definiti. Perciò il conteggio di righe in un sorgente e quello delle istruzioni nel file `.s` misurano grandezze diverse. Le tracce sul processore didattico usano invece una sequenza di istruzioni già definita per quella macchina.
:::

## Dagli oggetti all’eseguibile

:::definizione{#risoluzione-simboli titolo="Definizioni e riferimenti nel collegamento"}
Un simbolo esterno rappresenta, nel modello dei file oggetto, un nome visibile fra unità di traduzione, per esempio il nome di una funzione definita in un altro sorgente. Ogni chiamante può produrre un riferimento a quel nome. Il **collegamento** associa i riferimenti alle definizioni e aggiorna le posizioni del codice e dei dati in base alla disposizione finale. Nel modello si considerano oggetti forniti esplicitamente al driver con simboli forti ordinari. Per ogni riferimento esterno da risolvere occorre la relativa definizione e la stessa funzione esterna richiede dichiarazioni compatibili.

Un nome senza definizione tra gli ingressi utilizzati lascia un riferimento irrisolto. Due definizioni esterne ordinarie dello stesso nome introducono invece un conflitto. Una dichiarazione informa la compilazione sul tipo. La definizione di funzione aggiunge il suo corpo, quindi offre il codice associato al nome. Un collegamento riuscito permette di trovare le definizioni richieste. La verifica della compatibilità dei tipi usa inoltre le dichiarazioni coerenti nei sorgenti.
:::

:::esempio{titolo="Due unità con un header comune"}
Il file `scale.h` dichiara la funzione con una guardia di inclusione.

```c
#ifndef SCALE_H_INCLUDED
#define SCALE_H_INCLUDED
int scale(int value);
#endif
```

Il file `scale.c` include l’header e definisce la funzione. I dati d’ingresso dell’esempio ricadono nell’intervallo $[-100,100]$, perciò il raddoppio è rappresentabile in `int`.

```c
#include "scale.h"

int scale(int value)
{
    return 2 * value;
}
```

Il file `main.c` include lo stesso header per la chiamata. Si assume riuscita la scrittura su uscita standard.

```c
#include <stdio.h>
#include "scale.h"

int main(void)
{
    printf("%d\n", scale(6));
    return 0;
}
```

Con i comandi della traduzione separata, `main.o` contiene il riferimento a `scale` e `scale.o` lo risolve. Il doppio di $6$ è $12$, quindi l’eseguibile stampa `12` seguito da un ritorno a capo. Passando al collegamento soltanto `main.o` e le librerie standard fornite dal driver, il nome `scale` del progetto rimarrebbe privo di definizione. Il prototipo rende corretta la chiamata durante la compilazione di `main.c` e il corpo in `scale.c` rende disponibile l’implementazione al collegatore.
:::

:::attenzione
Due unità possono essere compilate separatamente con dichiarazioni incompatibili per una stessa funzione esterna. Se ciascun compilatore vede una sola dichiarazione locale, il problema può restare invisibile in quell’invocazione. Un collegatore che risolve riferimenti per nome può accettare gli oggetti anche in presenza del difetto. In C la compatibilità resta un requisito del programma. Includere l’header sia nel chiamante sia nel sorgente della definizione mette il compilatore in condizione di confrontare le dichiarazioni dove sono utilizzate.
:::

## Avvio e diagnosi di un programma C

:::definizione{#avvio-hosted titolo="Ingresso, uscita e terminazione in ambiente hosted"}
Nell’ambiente C17 **hosted**, `int main(void)` è una firma ammessa per la funzione avviata dal sistema quando il programma richiede zero parametri. Il valore restituito dalla prima chiamata a `main` partecipa alla terminazione. `return 0;` segnala il successo all’ambiente secondo la convenzione dello standard C. `EXIT_SUCCESS` in `<stdlib.h>` esprime anch’esso il successo, mentre `EXIT_FAILURE` esprime il fallimento. Per gli altri valori lo stato riportato all’ambiente è determinato dall’implementazione.

`printf` scrive su `stdout`, l’uscita standard. La destinazione può essere un terminale, un file o un altro processo, secondo come viene avviato il programma. Il valore di ritorno di `main` è distinto dai caratteri inviati allo stream. Nell’esempio precedente una scrittura riuscita invia due cifre e un ritorno a capo, e `return 0;` comunica il successo. Una procedura che verifica il programma può confrontare l’uscita acquisita con quella attesa e controllare separatamente l’esito della terminazione.
:::

:::definizione{#diagnosi-fasi titolo="Diagnosi a partire dall’artefatto prodotto"}
Per localizzare un errore si osservano il comando eseguito e l’artefatto che avrebbe dovuto produrre. Una direttiva che chiede un header introvabile si manifesta durante la preelaborazione. Un vincolo violato nel sorgente risultante, per esempio una chiamata con un argomento in più rispetto a un prototipo visibile, viene diagnosticato durante l’analisi della traduzione. Se l’oggetto contiene un riferimento esterno privo di definizione tra gli oggetti forniti, il problema si manifesta al collegamento. Una differenza tra stampa attesa e stampa osservata con build riuscita richiede invece di esaminare l’esecuzione e la specifica del programma.

I messaggi possono essere diversi tra i driver. La localizzazione per fase aiuta a scegliere i dati da consultare. Per un’inclusione si osservano il nome e i percorsi cercati. Per un riferimento irrisolto si individuano il chiamante, la definizione prevista e gli oggetti realmente passati al driver. Per un risultato errato, un caso di prova riproducibile stabilisce i dati in ingresso e l’uscita attesa.
:::

:::osservazione
Le regole C su ambiente di traduzione e di esecuzione sono raccolte nel documento C17 del comitato WG14. Le opzioni `-E`, `-S`, `-c` e `-o` seguono la documentazione del driver GCC. [Bozza C17 N2176](https://www.open-std.org/jtc1/sc22/wg14/www/docs/n2176.pdf) · [Opzioni GCC per il tipo di uscita](https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html)
:::
