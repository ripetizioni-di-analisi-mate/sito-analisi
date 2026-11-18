---
titolo: Tipi, espressioni e ingresso-uscita
sommario: Come ricavare il tipo e il valore di un’espressione C17 e controllare un’operazione di lettura o scrittura formattata.
---

## Oggetti, valori e costanti

:::definizione{#oggetti-e-tipi titolo="Oggetto e tipo"}
Un **oggetto** è una regione di memoria il cui contenuto può rappresentare valori. In una definizione come `int count = 12;`, il nome `count` designa un oggetto di tipo `int` e `12` ne è l’inizializzatore. Il tipo stabilisce l’insieme dei valori ammessi e le regole per accedere all’oggetto e usarne il valore. Per interpretare `count + 2` occorre conoscere il tipo di entrambi gli operandi.

L’**inizializzazione** attribuisce un valore quando l’oggetto viene definito. L’istruzione `count = 15;` eseguita dopo la definizione è un assegnamento. Il valore dell’espressione a destra viene convertito nel tipo dell’oggetto a sinistra e memorizzato nell’oggetto. In questo caso `15` è già un `int`, perciò viene memorizzato senza variazioni.
:::

:::esempio{titolo="Valore iniziale e valore aggiornato"}
Nel frammento seguente `total` ha un valore definito prima di essere letto.

```c
int total = 4;
int next = total + 3;
total = next + 2;
```

La prima riga fissa `total` a $4$. La seconda usa quel valore per inizializzare `next` a $7$. La terza legge `next` e poi assegna $9$ a `total`. Il valore di `next` resta $7$, perché l’inizializzazione ha memorizzato il risultato della somma in un oggetto distinto.
:::

:::definizione{#limiti-dei-tipi titolo="Limiti, byte e sizeof"}
Gli interi di tipo `int` coprono almeno l’intervallo da $-32767$ a $32767$. `unsigned int` parte da $0$ e arriva almeno a $65535$. I limiti effettivi `INT_MIN`, `INT_MAX` e `UINT_MAX` sono definiti in `<limits.h>`. Poiché C17 ammette implementazioni con limiti diversi, un calcolo che dipende dal massimo deve usare il limite del tipo oppure dichiarare la macchina assunta.

`sizeof` esprime una dimensione in byte del C e il suo risultato ha tipo `size_t`, un tipo intero senza segno. Per `char`, `signed char` e `unsigned char` la dimensione è sempre $1$. Il numero di bit in un byte è `CHAR_BIT` ed è almeno $8$. `sizeof(int) * CHAR_BIT` conta i bit della rappresentazione dell’oggetto, inclusi eventuali bit di riempimento. Per conoscere l’intervallo di `int` si leggono quindi i limiti, anziché ricavarlo dalla sola dimensione.

Il tipo `char` è distinto da `signed char` e da `unsigned char`. L’implementazione specifica quale dei due intervalli adotta per `char`. Quando serve un piccolo intero con segno dichiarato in modo esplicito si può usare `signed char`.
:::

:::definizione{#letterali titolo="Costanti scritte nel sorgente"}
Il tipo di una **costante** dipende dalla sua forma. Le piccole costanti decimali intere senza suffisso, come `12`, sono `int`. Il suffisso `u` in `12u` dà qui il tipo `unsigned int`. Per costanti più grandi valgono le liste dei tipi candidati dipendenti da base e suffisso. Si seleziona il primo tipo della lista che rappresenta il valore.

La forma `14.0`, priva di suffisso ma con il punto, è `double`. `14.0f` è `float` e `14.0L` è `long double`. Nelle costanti del sorgente il separatore decimale è il punto. Il locale numerico riguarda la conversione di testo durante l’esecuzione e si studia con l’ingresso-uscita formattato.
:::

:::osservazione
La scrittura `-7` applica l’operatore unario `-` alla costante intera `7`. Questa distinzione diventa rilevante agli estremi dell’intervallo. Per citare il minimo di `int` in un programma portabile, il nome `INT_MIN` esprime direttamente il limite dell’implementazione. I termini «larghezza», «segno» e «rappresentazione» assumono così il significato del tipo dichiarato.
:::

## Raggruppamento, valutazione ed effetti

:::definizione{#operatori-aritmetici titolo="Operandi e risultati"}
Gli operatori aritmetici `+`, `-`, `*` e `/` combinano due valori aritmetici e producono un valore. L’operatore `%` richiede operandi interi. Il tipo comune dei due operandi si determina con le promozioni e le conversioni aritmetiche usuali. Si applica poi l’operazione a valori del tipo comune.

Un confronto come `a < b` o `a != b` produce un `int` che vale $1$ quando la relazione è vera e $0$ quando è falsa. Si può quindi sommare il risultato di due confronti per contare quante condizioni risultano vere. I confronti sugli interi esaminano i valori dopo le conversioni previste per i rispettivi operandi.
:::

:::definizione{#precedenza titolo="Precedenza e associatività"}
La **precedenza** determina quali operatori raccolgono per primi i propri operandi nella struttura sintattica di un’espressione. A parità di precedenza, l’**associatività** risolve il raggruppamento. I cast e gli altri operatori unari legano più di `*`, `/` e `%`, che a loro volta legano più di `+` e `-`. Gli operatori di confronto relazionale seguono quelli aritmetici. Gli operatori di uguaglianza seguono i confronti relazionali.

Poiché la sottrazione associa da sinistra, `18 - 7 - 4` si raggruppa come `(18 - 7) - 4` e vale $7$. In `14 - 2 * 5` la moltiplicazione forma l’operando a destra della sottrazione e dà `14 - (2 * 5)`, che vale $4$. Le parentesi possono imporre un raggruppamento diverso.
:::

:::definizione{#effetti-collaterali titolo="Valori, effetti e sequenze"}
La valutazione di un’espressione può calcolare un valore e produrre un **effetto collaterale**, per esempio aggiornare un oggetto. `n++` produce il valore precedente di `n` e ne incrementa il contenuto. `++n` produce il valore dopo l’incremento. In entrambi i casi l’operazione presuppone che l’incremento sia definito per il tipo di `n`.

L’inizializzatore completo e l’espressione completa di un’istruzione sono separati dalla sequenza di esecuzione delle istruzioni. Nel frammento seguente la lettura di `n` nella terza riga avviene a incremento compiuto.

```c
int n = 6;
int before = n++;
int after = n;
```

Si ottengono `before` uguale a $6$ e `after` uguale a $7$. I due valori rispondono a due letture distinte, una operata dal post-incremento e l’altra dall’inizializzatore successivo.
:::

:::attenzione
Le parentesi determinano la struttura dell’espressione. Per esempio `(a + b) + c` impone quale somma è operando della seconda. L’ordine in cui sono valutati operandi o argomenti dipende dalle garanzie di sequenziamento del linguaggio. Se un’espressione modifica un oggetto scalare e lo legge in una valutazione non sequenziata rispetto alla modifica, si ha comportamento indefinito. Una forma portabile separa l’aggiornamento e l’uso in espressioni complete successive.
:::

## Divisione e resto tra interi

::::teorema{#quoziente-e-resto titolo="Identità del quoziente e del resto"}
Siano `a` e `b` di tipo `int`, con `b` diverso da zero e con il quoziente troncato rappresentabile in `int`. Si denotino con $q$ il valore di `a / b` e con $r$ quello di `a % b`. La divisione tronca verso zero e vale l’identità
$$
a=bq+r,\qquad |r|<|b|.
$$
Se il resto è diverso da zero, ha lo stesso segno del dividendo $a$. L’identità permette di calcolare entrambi i valori con una sola divisione e controllare il risultato sostituendoli nell’uguaglianza.

:::dimostrazione
Scriviamo $x=\dfrac{a}{b}$ per il rapporto esatto e $q=\operatorname{trunc}(x)$ per il suo troncamento verso zero. Il resto previsto dal linguaggio, quando il quoziente è rappresentabile, è $r=a-bq$. Dunque $r=b(x-q)$. Poiché $|x-q|<1$, si ha $|r|<|b|$.

Quando $x-q$ è diverso da zero, il suo segno è quello di $x$. Moltiplicandolo per $b$, il segno del resto diventa il segno di $a$. Se $x$ è un intero, $q=x$ e $r=0$.
:::
::::

:::esempio{titolo="Dividendo e divisore negativi"}
Per $a=-23$ e $b=-5$ il rapporto esatto è positivo e appartiene all’intervallo da $4$ a $5$, estremi esclusi. Il troncamento dà $q=4$. Il resto si ricava con
$$
r=-23-(-5)\cdot4=-3 .
$$
La verifica dà $(-5)\cdot4+(-3)=-23$. Il resto è negativo anche con divisore negativo, perché il segno pertinente è quello del dividendo.
:::

:::attenzione
I prerequisiti riguardano sia `/` sia `%`. Se `b` vale zero oppure il quoziente è fuori dall’intervallo di `int`, il comportamento di entrambe le espressioni è indefinito. Un caso dipendente dai limiti è `INT_MIN / -1`. Quando `INT_MIN` è più piccolo di `-INT_MAX`, l’opposto matematico di `INT_MIN` è fuori intervallo. L’analisi deve quindi verificare il denominatore e la rappresentabilità prima di assegnare un valore alle espressioni.
:::

## Scelta del tipo prima del calcolo

:::definizione{#promozioni-intere titolo="Promozioni intere"}
Nelle espressioni soggette a **promozioni intere**, come l’addizione di due `short`, gli operandi di tipo intero con rango inferiore a `int` sono convertiti in `int` se il tipo rappresenta tutti i loro valori. In caso contrario sono convertiti in `unsigned int`. I ranghi stabiliscono un ordine tra i tipi interi. Per i tipi con segno standard il rango cresce da `signed char` a `short`, `int`, `long` e `long long`. Il tipo senza segno corrispondente ha lo stesso rango.

Per esempio, due `signed short` inizializzati a $100$ e $200$ sono promossi a `int` prima della somma. Gli operandi e il risultato della somma sono quindi `int`. Un `unsigned short` è promosso a `int` quando `USHRT_MAX` è al più `INT_MAX` e a `unsigned int` negli altri casi ammessi.
:::

:::definizione{#conversioni-aritmetiche titolo="Conversioni aritmetiche usuali"}
Per gli operatori aritmetici a due operandi reali, le **conversioni aritmetiche usuali** determinano un tipo comune. Se uno dei due operandi ha tipo `long double`, l’altro è convertito in `long double`. In assenza di `long double`, si applica lo stesso criterio a `double` e poi a `float`.

Se entrambi gli operandi sono interi, si applicano prima le promozioni. Se i tipi risultanti coincidono, il tipo comune è quello. Se hanno lo stesso segno e tipi diversi, il tipo di rango minore è convertito in quello di rango maggiore. In caso di segno misto, sia $U$ il tipo senza segno e sia $S$ quello con segno. La conversione dipende dal rango e dall’intervallo di ciascun tipo.

- Se $U$ ha rango almeno pari a $S$, l’operando di tipo $S$ è convertito in $U$.
- Se $S$ ha rango maggiore e rappresenta ogni valore di $U$, l’operando di tipo $U$ è convertito in $S$.
- Altrimenti entrambi gli operandi sono convertiti nel tipo senza segno corrispondente a $S$.

In `9u + (-2)` entrambi i tipi hanno il rango di `int`, dunque l’operazione si svolge in `unsigned int`. La conversione dell’operando negativo segue la regola modulare degli interi senza segno.
:::

:::definizione{#conversioni-assegnamento titolo="Cast e conversioni di destinazione"}
Il **cast** `(T) expr` converte il risultato di `expr` nel tipo `T`. L’inizializzazione e l’assegnamento effettuano una conversione alla destinazione anche quando il cast è assente. Per individuare i valori intermedi si distingue la conversione che precede l’operatore dalla conversione che memorizza il risultato.

La conversione di un valore finito in virgola mobile a un tipo intero diverso da `_Bool` elimina la parte frazionaria, con troncamento verso zero. Il valore troncato deve essere rappresentabile nel tipo di destinazione. Per esempio, su un sistema binario, `(int)(-5.75)` vale $-5$. La conversione di un intero in un tipo reale conserva il valore quando è rappresentabile esattamente. Se il valore è compreso nell’intervallo reale ma è tra due valori rappresentabili, la scelta tra i due adiacenti è definita dall’implementazione.
:::

:::esempio{titolo="Posizione del cast nella divisione"}
Si assume un `double` con base due e aritmetica secondo l’allegato F di C17, in arrotondamento al più vicino. Le due espressioni della figura differiscono per il punto in cui si converte un valore.

![Le espressioni (double)(11 / 4) e (double)11 / 4. La prima esegue la divisione intera e vale 2,0. La seconda converte 11 e vale 2,75.](/immagini/informatica/tipi-ed-espressioni/schema-teoria-it.png)

In `(double)(11 / 4)` i due operandi della divisione sono `int`. La divisione produce $2$, dal quale il cast ricava $2{,}0$. In `(double)11 / 4` il cast converte l’operando a sinistra prima della divisione. La conversione aritmetica porta anche il $4$ a `double`, quindi il rapporto è
$$
\dfrac{11}{4}=2+\dfrac{3}{4}=2{,}75 .
$$
Il valore è esatto in base due perché il denominatore della parte frazionaria è una potenza di $2$ e queste cifre rientrano nella precisione di `double`.
:::

## Risultati rappresentabili e semantica

::::teorema{#interi-unsigned titolo="Aritmetica modulo il numero di valori"}
Sia $U$ un tipo intero senza segno con massimo $U_{\max}$. Poniamo $M=U_{\max}+1$ come intero matematico. Una conversione da un tipo intero a $U$ restituisce l’unico intero in $[0,M-1]$ congruente al valore di partenza modulo $M$. Un risultato matematico di somma, differenza o prodotto, quando l’operazione si esegue nel tipo $U$, è ridotto nello stesso intervallo.

:::dimostrazione
La regola di conversione aggiunge o sottrae il numero di valori $M$ fino a rientrare nell’intervallo. Due interi distinti dell’intervallo differiscono al più di $M-1$ in valore assoluto, quindi hanno resti distinti modulo $M$. Poiché l’intervallo contiene $M$ interi, ogni classe ha un rappresentante. Per l’aritmetica del tipo senza segno si applica la stessa riduzione al risultato matematico.
:::
::::

:::esempio{titolo="Una sottrazione di unsigned int"}
In `3u - 5u` il tipo dell’operazione è `unsigned int`. Il risultato matematico è $-2$. Posto $M=\mathrm{UINT\_MAX}+1$, il rappresentante in $[0,M-1]$ è $M-2$, cioè $\mathrm{UINT\_MAX}-1$. Come controllo, la somma in `unsigned int` di questo valore e `2u` è $0$.
:::

:::definizione{#rappresentabilita titolo="Operazione e intervallo di risultato"}
La **rappresentabilità** richiede che il valore risulti ammesso nel tipo pertinente. Per l’aritmetica ordinaria di tipo intero con segno, un risultato matematico fuori intervallo comporta comportamento indefinito. Per la conversione di un intero in un tipo con segno che non lo rappresenta, C17 prevede un risultato definito dall’implementazione oppure un segnale definito dall’implementazione. La distinzione dipende dall’operazione eseguita.

Per verificare una somma `int` di `value` e `delta` con `delta > 0`, basta confrontare `value` con `INT_MAX - delta`. Il valore della differenza di soglia è rappresentabile, perché `delta` è già un `int` positivo. Se `value` è almeno `INT_MIN` e al più quella soglia, anche la somma è nell’intervallo. Questo controllo precede l’eventuale somma. Si ritrova lo stesso criterio analizzando le disuguaglianze $a+b\leq \mathrm{INT\_MAX}$ e $a+b\geq\mathrm{INT\_MIN}$.
:::

:::definizione{#categorie-comportamento titolo="Categorie previste dal C17"}
Un comportamento **definito dall’implementazione** ammette una scelta tra possibilità consentite e richiede che l’implementazione documenti la scelta. L’intervallo adottato per `char` è un esempio. Il comportamento **non specificato** ammette possibilità consentite e l’implementazione può scegliere senza documentare quale valga in ciascun caso. Per esempio l’ordine di valutazione di due argomenti indipendenti può variare.

In presenza di comportamento **indefinito** lo standard non pone requisiti sul comportamento del programma per quel caso. Un’operazione aritmetica con segno fuori intervallo rientra in questa categoria. Quando la domanda richiede di classificare un’operazione, serve la categoria prevista dallo standard. Un valore osservato in un’esecuzione costituisce soltanto un’osservazione su quella esecuzione.
:::

## Scrittura numerica su stdout

:::definizione{#printf-formati titolo="Specificatori di printf"}
La funzione `printf`, dichiarata in `<stdio.h>`, scrive su `stdout`. La stringa di formato alterna caratteri ordinari, scritti direttamente, e specifiche di conversione, che stabiliscono come leggere e mostrare un argomento. Nelle chiamate a una funzione variadica, gli argomenti dopo la parte dichiarata sono soggetti alle promozioni predefinite. In particolare `float` diventa `double` e si applicano le promozioni intere.

| Specifica | Tipo dell’argomento dopo le promozioni |
|---|---|
| `%d` | `int` |
| `%u` | `unsigned int` |
| `%ld` | `long` |
| `%zu` | `size_t`, con le eventuali promozioni |
| `%f` | `double` |
| `%Lf` | `long double` |

`%%` scrive il carattere `%` senza consumare un argomento. Se la scrittura riesce, `printf` restituisce il numero di caratteri trasmessi dalla chiamata. Se si verifica un errore di scrittura o di codifica, restituisce un valore negativo. Una specifica con tipo incompatibile con l’argomento produce comportamento indefinito.
:::

:::definizione{#larghezza-e-precisione titolo="Larghezza di campo e precisione"}
La **larghezza di campo** indica un minimo di caratteri per la conversione. Per impostazione predefinita, uno spazio viene inserito a sinistra per ciascun carattere mancante. In `%5d` la larghezza è $5$. Il valore $36$ occupa due caratteri e quindi richiede tre spazi iniziali. Il valore $123456$ occupa sei caratteri e viene scritto per intero.

Per `f` la precisione è il numero di cifre dopo il separatore decimale. In `%.2f` la precisione è $2$. Per `d` la precisione indica invece il numero minimo di cifre e può anteporre zeri. Segno, cifre e separatore fanno parte del campo e concorrono alla larghezza.
:::

:::esempio{titolo="Allineare due campi"}
Si assumono una realizzazione conforme all’allegato F di C17 in arrotondamento al più vicino, il locale numerico C e scrittura riuscita. Il frammento include `<stdio.h>`.

```c
printf("[%4d][%6.2f]", 17, 1.25);
```

L’output è `[  17][  1.25]`. Il primo campo è largo $4$ e contiene due cifre. Il secondo è largo $6$ e la conversione `1.25` occupa quattro caratteri. In entrambi servono due spazi a sinistra. Le parentesi quadre sono caratteri ordinari e aggiungono quattro caratteri in tutto, quindi il valore restituito è $4+6+4=14$.
:::

## Lettura formattata e valori assegnati

:::definizione{#scanf-formati titolo="Specificatori di scanf"}
La funzione `scanf`, dichiarata in `<stdio.h>`, legge da `stdin`. Per ciascuna conversione che assegna un risultato si passa l’indirizzo dell’oggetto della destinazione. L’operatore `&` ricava tale indirizzo. Il formato deve corrispondere al tipo dell’oggetto.

| Specifica | Tipo dell’oggetto puntato |
|---|---|
| `%d` e `%i` | `int` |
| `%u` | `unsigned int` |
| `%f` | `float` |
| `%lf` | `double` |
| `%Lf` | `long double` |

`%d` riconosce un intero in base dieci. `%i` determina la base dall’inizio del campo. Per esempio `014` corrisponde a $12$ in base dieci con `%i`, mentre con `%d` il valore è $14$. Le conversioni numeriche saltano gli spazi bianchi iniziali prima del campo. Una direttiva di spazio bianco nel formato consuma zero o più caratteri di spazio bianco e si ferma al primo altro carattere o a fine ingresso.
:::

:::definizione{#esito-lettura titolo="Esito e numero di assegnamenti"}
Il valore restituito da `scanf` conta quanti oggetti ha assegnato. Se un campo non corrisponde, la funzione si arresta e restituisce il numero di assegnamenti già effettuati. Può restituire $0$ quando il primo campo è presente e non corrisponde. Se un fallimento di ingresso interviene prima che sia completata la prima conversione, il risultato è `EOF`. Questo caso include, per esempio, un ingresso vuoto nella lettura di un intero.

Consideriamo `scanf("%d %lf", &count, &rate)` con `count` di tipo `int` e `rate` di tipo `double`. Con ingresso `8 stop`, il primo campo converte $8$ e il secondo si arresta sul testo `stop`. Il valore restituito è $1$. Il programma può quindi usare `count` come risultato di quella chiamata, mentre `rate` conserva il valore precedente. Una verifica che richiede $2$ assegnamenti distingue la lettura completa da quella parziale.
:::

:::attenzione
Le letture numeriche con `scanf` richiedono che il risultato riconosciuto sia rappresentabile nell’oggetto di destinazione. C17 definisce come indefinito il comportamento della conversione il cui risultato è fuori intervallo. Il controllo di ritorno è utile per individuare un errore di corrispondenza e per sapere quante assegnazioni sono avvenute. Per accettare testo arbitrario e controllare esplicitamente gli estremi numerici si può leggere una riga e usare `strtol`, come nel capitolo sui file di testo.
:::

:::osservazione
Il locale numerico C usa il punto nella rappresentazione decimale di ingresso e uscita. Le formule in italiano riportano invece la virgola. Nel frammento sorgente e nella riga di output della prova si conserva il carattere effettivo. Negli esempi numerici di formattazione si assume l’arrotondamento al più vicino su una realizzazione conforme all’allegato F di C17. Così `printf("%.2f", 1.25)` produce `1.25` nel locale C, mentre la stessa quantità scritta in una formula italiana è $1{,}25$.
:::
