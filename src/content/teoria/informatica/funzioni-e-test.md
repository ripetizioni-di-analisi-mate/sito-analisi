---
titolo: "Funzioni, specifiche e test"
sommario: "Dalle chiamate in C17 ai contratti, alla scomposizione dei programmi e alla verifica con casi di test scelti dalla specifica."
---

## Dichiarare una funzione e usarla

:::definizione{#prototipi titolo="Prototipo di funzione"}
Una **funzione** contiene istruzioni che si eseguono quando si valuta una sua chiamata. La dichiarazione seguente è un **prototipo** perché specifica il tipo del valore restituito, il numero degli argomenti e il tipo di ciascun parametro.

```c
int max2(int a, int b);
```

Il primo `int` è il tipo del risultato. Gli `int` tra parentesi sono i tipi dei due parametri, nell’ordine. Nel capitolo si considerano prototipi con una lista fissa di parametri. In un prototipo i nomi `a` e `b` si possono omettere. Indicarli aiuta a distinguere ruoli diversi quando i parametri hanno lo stesso tipo. Una **definizione** completa la dichiarazione con il corpo tra graffe, quindi fornisce le istruzioni da eseguire.
:::

:::esempio{titolo="Dichiarazione prima della chiamata"}
Il prototipo permette a `main` di verificare la chiamata anche se la definizione di `max2` compare dopo. Il programma stampa il maggiore fra $4$ e $9$. In caso di uguaglianza l’espressione condizionale seleziona `b`, che in quel caso vale quanto `a`.

```c
#include <stdio.h>

int max2(int a, int b);

int main(void)
{
    printf("%d\n", max2(4, 9));
    return 0;
}

int max2(int a, int b)
{
    return a > b ? a : b;
}
```

La funzione restituisce $9$, quindi l’argomento associato a `%d` vale $9$. Il risultato è un `int` e soddisfa il tipo atteso da quella conversione di stampa. Per verificare entrambi i rami si può scambiare l’ordine dei due argomenti. Poiché il maggiore rimane $9$, il risultato atteso rimane $9$.
:::

:::attenzione
Nel C17, una dichiarazione come `int sample();` fornisce il tipo restituito e lascia indeterminati numero e tipi dei parametri. Per dichiarare una funzione senza parametri si usa `int sample(void);`. In quest’ultima forma un argomento in più rende la chiamata incompatibile con il prototipo. Il termine `void` occupa da solo il posto della lista dei parametri.
:::

:::osservazione
La dichiarazione può trovarsi in un’intestazione condivisa da più file sorgente. Se la funzione restituisce sempre un `int` e riceve due `int`, anche la definizione usa quei tipi nell’ordine dichiarato. Un compilatore può confrontare una chiamata con il prototipo proprio perché i tipi sono disponibili in quel punto. Il corpo serve invece per descrivere il calcolo e deve essere disponibile all’interno del programma che usa la funzione.
:::

## Dati della chiamata e valore restituito

:::definizione{#passaggio-per-valore titolo="Passaggio per valore"}
L’**argomento** è l’espressione scritta nella chiamata. Il **parametro** è l’oggetto locale con cui il corpo riceve il valore di quell’espressione. In una chiamata con prototipo, ciascun valore viene convertito al tipo del parametro corrispondente come in un’assegnazione. I parametri hanno durata automatica, quindi ogni chiamata ha i propri parametri. Il C descrive questa regola con il **passaggio per valore**.

La funzione può assegnare un altro valore al proprio parametro. L’assegnazione interessa quell’oggetto locale. Un’espressione come `++x`, quando è usata come argomento, può tuttavia modificare `x` durante la valutazione nel chiamante. Tale modifica avviene prima dell’ingresso nel corpo.
:::

:::esempio{titolo="Tracciare una copia e il ritorno"}
Si consideri la funzione seguente. Nel chiamante si eseguono, in due istruzioni distinte, `int x = 9;` e `int y = adjust(x);`.

```c
int adjust(int n)
{
    n += 3;
    return 2 * n;
}
```

![La chiamata copia x uguale a 9 in n. La funzione cambia n in 12 e restituisce 24, che il chiamante assegna a y. x rimane 9.](/immagini/informatica/funzioni-e-test/schema-teoria-it.png)

Poiché l’argomento `x` vale $9$, il parametro `n` inizia da $9$. Il corpo aumenta `n` di $3$, quindi la moltiplicazione usa $12$. Il valore restituito è $24$, perciò `y` viene inizializzato a $24$. Il chiamante conserva `x` uguale a $9$ perché nel corpo l’assegnazione riguarda `n`. Un controllo diretto sostituisce nella formula $2(9+3)=24$ e confronta il valore con quello che arriva a `y`.
:::

:::definizione{#ritorno-dalla-funzione titolo="Istruzione return"}
`return expr;` termina l’esecuzione della chiamata corrente e consegna al chiamante il valore di `expr`. La conversione al tipo restituito avviene come in un’assegnazione. Una funzione `void` si usa per un’azione priva di risultato da inserire in un’espressione. Il corpo di una funzione `void` può terminare raggiungendo la graffa finale oppure tramite `return;`. Negli altri esercizi si indica un valore su ogni percorso che deve restituire un risultato.
:::

:::esempio{titolo="Divisione prima della conversione"}
Per input non negativi, `double half(int total) { return total / 2; }` restituisce la metà intera convertita in `double`. Con `half(5)`, `total` vale $5$ e il divisore `2` è di tipo `int`. La divisione produce quindi l’intero $2$. La conversione applicata dal `return` trasforma quell’intero in un `double` di valore $2$.

Con `return total / 2.0;`, il divisore ha tipo `double`. Le conversioni usuali portano anche il dividendo al tipo `double` prima della divisione, quindi si calcola un risultato in virgola mobile per il quoziente reale $\dfrac{5}{2}$. Con aritmetica binaria IEEE 754 si ottiene esattamente $2{,}5$. I due corpi rispondono a contratti diversi, perché in un caso si vuole la parte intera e nell’altro la divisione in virgola mobile.
:::

:::attenzione
L’ordine di valutazione degli argomenti di una chiamata in C17 è in generale non specificato. In `mix(++x, 7)` ciascun argomento è isolato rispetto alla modifica della variabile `x`, quindi dopo le valutazioni è determinato il valore del primo argomento. In `mix(++x, x)`, la scrittura in `x` e la lettura di `x` nell’altro argomento sono prive di sequenziamento reciproco. Il comportamento è indefinito. Per intendere una lettura dopo l’incremento si esegue `++x;` in un’istruzione precedente e poi si usa `mix(x, x)`.
:::

## Nomi visibili e oggetti nel tempo

:::definizione{#visibilita-dei-nomi titolo="Visibilità di un identificatore"}
La **visibilità**, o *scope*, indica la regione del sorgente in cui un nome designa una determinata entità. Un parametro in una definizione è visibile nel corpo. Una variabile dichiarata dentro un blocco ha visibilità di blocco, a partire dal punto che segue il proprio dichiaratore. Se in quel blocco si introduce un nuovo oggetto con un nome già usato in un blocco esterno, il nome interno **oscura** quello esterno nella propria regione di visibilità.
:::

:::esempio{titolo="Stesso nome in due blocchi"}
Nella funzione seguente, il nome `n` designa il parametro all’inizio e dopo la fine del blocco interno. Nell’istruzione `saved += n;` designa invece l’oggetto appena dichiarato.

```c
int shadow(int n)
{
    int saved = n;
    {
        int n = 4;
        saved += n;
    }
    return saved + n;
}
```

Con `shadow(3)`, `saved` inizia da $3$ e nel blocco interno diventa $3+4=7$. Poi si somma il parametro esterno, che vale ancora $3$, quindi il risultato è $10$. Rinominare il solo oggetto interno in `local` dà la stessa espressione finale e rende esplicita la provenienza dei due valori.
:::

:::definizione{#durata-degli-oggetti titolo="Durata automatica e durata statica"}
La **durata di memorizzazione** stabilisce per quanto tempo esiste un oggetto nella macchina astratta. Una variabile scalare di blocco dichiarata senza `static`, come `int count = 0;` in una funzione, ha in questo caso durata automatica. Ogni volta che l’esecuzione raggiunge la dichiarazione si esegue l’inizializzazione. Una variabile di blocco dichiarata `static int count = 0;` ha durata statica, quindi esiste per tutta l’esecuzione del programma. Viene inizializzata una volta prima dell’avvio del programma ed è indicabile tramite quel nome solo nella regione in cui è visibile.
:::

:::esempio{titolo="Contatore con o senza memoria"}
Data `static int count = 0;` e il successivo `return ++count;` nel corpo, tre chiamate in tre istruzioni distinte di una nuova esecuzione restituiscono nell’ordine $1$, $2$ e $3$. Ognuna riparte dal valore lasciato nell’unico oggetto `count`. Con `int count = 0;`, lo zero si riapplica a ogni ingresso che raggiunge la dichiarazione. Si ottiene dunque $1$ in tutti e tre i casi. I nomi hanno visibilità di blocco in entrambe le versioni. La differenza nei risultati deriva dalla durata e dall’inizializzazione.
:::

## Input ammessi e risultati promessi

:::definizione{#contratti-di-funzione titolo="Precondizione e postcondizione"}
Un **contratto** esprime le responsabilità del chiamante e della funzione. La **precondizione** $P(x)$ descrive gli input consentiti. Il simbolo $x$ può rappresentare anche un gruppo di argomenti. Per una chiamata che soddisfa $P$, il contratto promette, quando dichiara anche la terminazione, che la funzione termina con comportamento definito e che la **postcondizione** $Q(x,y)$ è vera per il risultato $y$. Il contratto specifica eventuali effetti esterni quando fanno parte del comportamento richiesto.

La condizione $P$ si verifica prima della chiamata. La condizione $Q$ si controlla dopo, usando i valori iniziali degli argomenti e il risultato. Se $P$ è falsa, la promessa di quel contratto è inapplicabile. Da una violazione di contratto, da sola, non si deduce quale comportamento si verificherà nella macchina astratta.
:::

::::teorema{#limiti-operativi titolo="Dominio di un costo affine"}
Sia `quantity` un `int` non negativo. La funzione seguente calcola il valore matematico $5+3q$, dove $q$ è il valore di `quantity`, con tutte le operazioni rappresentabili se la precondizione è

$$
0 \leq q \leq \left\lfloor\frac{M-5}{3}\right\rfloor ,
$$

dove $M$ è il valore di `INT_MAX`. Il limite comprende il massimo input non negativo per cui questa espressione in `int` ha comportamento definito.

```c
int price(int quantity)
{
    return 5 + 3 * quantity;
}
```

:::dimostrazione
Poiché $q\geq 0$, il prodotto e la somma sono non negativi. Dal limite su $q$ segue $3q\leq M-5$, quindi $3q$ e $5+3q$ sono entrambi rappresentabili. Per un intero $q$ maggiore del limite, vale $5+3q>M$. Se il prodotto è già maggiore di $M$, la prima operazione eccede l’intervallo. Se il prodotto è rappresentabile, è la somma a eccederlo. In entrambi i casi la valutazione dell’espressione in `int` provoca un overflow con segno.
:::
::::

:::osservazione
Per controllare la precondizione in C si può calcolare prima `(INT_MAX - 5) / 3`, con `INT_MAX` da `<limits.h>`. Il numeratore è non negativo, quindi la divisione intera coincide con l’arrotondamento per difetto. Si confronta poi `quantity` con tale limite. Il controllo precede la moltiplicazione e usa operazioni che rimangono rappresentabili anche quando l’input è fuori dal dominio.
:::

## Suddividere il calcolo in passaggi

:::definizione{#scomposizione titolo="Scomposizione per contratti"}
Si **scompone** un calcolo quando si assegnano compiti distinti a funzioni più piccole. Per due passaggi consecutivi, il primo calcola un valore intermedio e il secondo lo riceve come input. I contratti chiariscono sia che cosa produce il primo passaggio, sia quali proprietà del valore intermedio permettono il secondo. Questo legame rende verificabile la composizione.
:::

::::teorema{#composizione-contratti titolo="Composizione di due funzioni"}
Siano date due funzioni deterministiche che, sul dominio considerato, agiscono senza effetti esterni. La prima, $f$, soddisfa il contratto $P_f(x)$ e $Q_f(x,z)$. La seconda, $g$, soddisfa $P_g(z)$ e $Q_g(z,y)$. Entrambi i contratti garantiscono terminazione. I tipi consentono a $g$ di ricevere $z$ senza alterarne il valore. Se ogni $z$ prodotto da $f$ su un $x$ ammesso soddisfa $P_g(z)$, il calcolo di $g(f(x))$ termina con un valore $y$ per cui esiste un intermedio $z$ che soddisfa entrambe le postcondizioni.

:::dimostrazione
Fissato un $x$ per cui vale $P_f(x)$, il contratto di $f$ garantisce un risultato $z$ con $Q_f(x,z)$. Per ipotesi, questo $z$ soddisfa $P_g(z)$. Si applica quindi il contratto di $g$ e si ottiene $y$ con $Q_g(z,y)$. Entrambe le chiamate terminano e l’intermedio usato dalla seconda è quello restituito dalla prima. Le due postcondizioni valgono dunque per lo stesso $z$.
:::
::::

:::esempio{titolo="Soglia applicata a un costo"}
Per quantità tra $0$ e $100$, `base_cost` calcola `2 * quantity + 1`. Il risultato appartiene all’intervallo da $1$ a $201$. La funzione `minimum_charge` accetta importi tra $0$ e $300$ e restituisce il maggiore fra l’importo e $8$. Il primo risultato è nel dominio del secondo passaggio, perché l’intervallo da $1$ a $201$ è contenuto in quello da $0$ a $300$. Per la quantità $4$ si ottiene prima $9$. La soglia di $8$ lascia dunque invariato il risultato finale $9$.

Le due funzioni si possono provare in isolamento. L’integrazione si prova con quantità $3$ e $4$. Poiché i costi intermedi sono $7$ e $9$, ricadono da parti opposte della soglia. L’oracolo richiede rispettivamente $8$ e $9$.
:::

## Campioni selezionati dalla specifica

:::definizione{#partizioni-di-test titolo="Classi di equivalenza per i test"}
Una **partizione** del dominio è una famiglia di classi non vuote, a due a due disgiunte, la cui unione è il dominio. Nella scelta dei test, si possono raggruppare nella stessa classe gli input per cui si applica la stessa regola della specifica. Ogni caso di test individua un input e un risultato o un’altra osservazione attesa. L’**oracolo** ricava l’atteso dal contratto, indipendentemente dal risultato restituito dall’implementazione esaminata.

La copertura per classi richiede almeno un rappresentante per ciascuna classe. Poiché le classi sono disgiunte, ogni chiamata con un solo input copre una classe. Se le classi sono $k$ e ognuna ha un rappresentante, con $k$ chiamate si può ottenere quella copertura.
:::

:::esempio{titolo="Rappresentanti di fasce intere"}
Per un numero di unità intero tra $0$ e $20$, un tariffario prevede $4$ fino a $4$ unità, $6$ da $5$ a $12$ unità e $7$ da $13$ a $20$ unità. Le regole definiscono tre classi.

| Input | Classe | Atteso |
| --- | --- | --- |
| $2$ | $[0,4]$ | $4$ |
| $8$ | $[5,12]$ | $6$ |
| $16$ | $[13,20]$ | $7$ |

Si intendono gli interi di ciascun intervallo. L’input $8$ appartiene alla seconda fascia, quindi l’oracolo usa direttamente la tariffa $6$. Per lo stesso motivo $2$ e $16$ verificano le altre due regole. Un errore presente soltanto a $5$ può sfuggire a questi test, poiché la seconda classe è stata provata a $8$. I confini aggiungono casi mirati.
:::

## Confini di un insieme di input

:::definizione{#valori-di-confine titolo="Test dei valori di confine"}
Un **valore di confine** si trova in corrispondenza di un estremo del dominio oppure dove cambia la regola applicata. Per una soglia intera $t$ con passaggio da $x<t$ a $x\geq t$, due casi pertinenti sono $t-1$ e $t$, quando entrambi appartengono al dominio. Essi sono consecutivi e usano le due regole diverse. Per una fascia chiusa tra $a$ e $b$, gli input $a$ e $b$ appartengono alla fascia, mentre i vicini $a-1$ e $b+1$ si provano quando sono ammessi nel dominio totale.
:::

:::esempio{titolo="Controllare una disuguaglianza inclusiva"}
Su input interi da $0$ a $100$, la funzione di ammissione deve restituire $1$ quando l’input è almeno $20$ e $0$ altrimenti. I casi $19$ e $20$ verificano i due lati del cambio. L’espressione `x > 20` restituisce $0$ in entrambi. Il confronto con l’oracolo individua l’errore a $20$, poiché il contratto include la soglia nell’insieme ammesso.

Un test che passa verifica l’osservazione attesa soltanto per l’input usato. Per concludere la correttezza su tutto il dominio occorre un ragionamento generale oppure, per un dominio finito effettivamente enumerabile, una verifica esaustiva con osservazioni adeguate al contratto.
:::

:::esempio{titolo="Due passaggi di fascia"}
Si riprenda il tariffario con le fasce intere da $0$ a $4$, da $5$ a $12$ e da $13$ a $20$. Si passa dalla prima alla seconda fra $4$ e $5$ e dalla seconda alla terza fra $12$ e $13$. Perciò i quattro oracoli sono, nello stesso ordine, $4$, $6$, $6$ e $7$. Se una prima condizione sbagliata accetta anche $5$ nella fascia iniziale, si ottiene $4$ proprio dove l’oracolo richiede $6$. Se invece si esclude $12$ dalla fascia intermedia, si ottiene $7$ invece di $6$.

Gli estremi $0$ e $20$ completano il piano di prova dei confini del dominio. La copertura delle fasce richiede solo tre rappresentanti. Il piano dei confini aggiunge valori diversi perché mira a riconoscere anche gli errori nella collocazione delle soglie.
:::

:::osservazione
Una fascia vuota richiede un controllo preliminare nella costruzione della partizione. Se il dominio è da $0$ a $18$ e la regola cambia a $20$, entrambe le prove a $19$ e $20$ sarebbero esterne al dominio. I test di una funzione che assume il dominio si ricavano allora dalle regole effettivamente applicabili. Un controllo di ingresso che deve respingere valori fuori dominio ha invece un contratto proprio.
:::

## Asserzioni e configurazione di compilazione

:::definizione{#asserzioni titolo="Asserzione in C17"}
`assert` è una macro definita da `<assert.h>`. Quando `NDEBUG` è assente all’inclusione di quell’intestazione, `assert(e)` valuta l’espressione scalare `e`. Se il risultato si confronta uguale a zero, scrive una diagnostica sullo stream di errore standard e provoca la terminazione anomala tramite `abort`. Una condizione vera lascia proseguire l’esecuzione.

Quando `NDEBUG` è definita all’inclusione, la macro `assert` si espande in un’espressione innocua di tipo `void` senza valutare il suo argomento. La configurazione va esplicitata quando si discute l’esito di un programma che contiene asserzioni.
:::

:::esempio{titolo="Oracolo codificato come asserzione"}
In questo programma con asserzioni attive, la specifica dichiara che l’ammissione comincia al punteggio $20$. Gli argomenti del test appartengono al dominio considerato, quindi gli attesi si ricavano dalla regola.

```c
#include <assert.h>

int eligible(int score)
{
    return score >= 20;
}

int main(void)
{
    assert(eligible(19) == 0);
    assert(eligible(20) == 1);
    return 0;
}
```

Il primo test controlla il lato escluso e il secondo il primo valore incluso. Se si sostituisce `>=` con `>`, il secondo confronto è falso. Con asserzioni attive il programma segnala l’errore e termina tramite `abort`. Con `NDEBUG` definita prima dell’inclusione, le due chiamate scritte negli argomenti di `assert` vengono eliminate dalla macro, quindi l’esito regolare di quella versione è privo di quel riscontro.
:::

:::attenzione
Un’operazione necessaria al calcolo deve avere un posto indipendente dall’asserzione. Con `int n = 4; assert(++n == 5);`, il valore seguente di `n` è $5$ se le asserzioni sono attive e $4$ se sono disattivate. Scrivendo `++n;` in un’istruzione a parte e poi `assert(n == 5);`, l’incremento appartiene a entrambe le configurazioni. L’asserzione esegue il solo controllo.
:::
