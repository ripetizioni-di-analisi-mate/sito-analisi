---
titolo: Tipi, espressioni e ingresso-uscita
sommario: Come ricavare il tipo e il valore di un’espressione C17 e controllare un’operazione di lettura o scrittura formattata.
---

## Oggetti, valori e costanti

:::definizione{#oggetti-e-tipi titolo="Oggetto e tipo"}
Una **variabile** è una zona di memoria con un nome, in cui il programma conserva un valore che può cambiare. La riga `int count = 12;` crea una variabile di nome `count` che contiene il numero $12$. La parola `int` è il **tipo** della variabile. Il tipo stabilisce quali valori la variabile può contenere, quanta memoria occupa e quali operazioni sono ammesse; `int` indica un numero intero. Nello standard del C la zona di memoria si chiama **oggetto**, e in questo corso i due termini si usano come sinonimi.

Dare il valore nella stessa riga in cui la variabile viene creata si chiama **inizializzazione**. Cambiarlo in seguito, come in `count = 15;`, si chiama **assegnamento**. Nell’assegnamento il segno `=` è un comando, con cui si calcola il valore a destra e lo si copia nella variabile a sinistra, al posto del valore precedente.
:::

:::esempio{titolo="Valore iniziale e valore aggiornato"}
Nel frammento seguente ogni variabile riceve un valore prima di essere usata.

```c
int total = 4;
int next = total + 3;
total = next + 2;
```

La prima riga crea `total` con valore $4$. La seconda calcola $4+3$ e crea `next` con valore $7$. La terza calcola $7+2$ e mette $9$ in `total`, al posto di $4$. Il valore di `next` resta $7$, perché `next` è una variabile distinta e la terza riga la legge soltanto.
:::

:::definizione{#limiti-dei-tipi titolo="Limiti, byte e sizeof"}
Una variabile occupa un numero fissato di byte, quindi può contenere soltanto i numeri di un certo intervallo. Sulla maggior parte dei calcolatori attuali un `int` occupa $4$ byte e contiene gli interi da $-2\,147\,483\,648$ a $2\,147\,483\,647$. Il tipo `unsigned int` contiene soltanto interi non negativi, di solito da $0$ a $4\,294\,967\,295$. Lo standard garantisce intervalli più piccoli, almeno da $-32767$ a $32767$ per `int` e almeno da $0$ a $65535$ per `unsigned int`, perché i valori effettivi dipendono dal calcolatore e dal compilatore. Un programma li trova nell’header `<limits.h>` con i nomi `INT_MIN`, `INT_MAX` e `UINT_MAX`.

L’operatore `sizeof` dà il numero di byte occupati da un tipo o da una variabile; per esempio `sizeof(int)` vale di solito $4$. Il risultato ha tipo `size_t`, un tipo intero senza segno usato per le dimensioni. Il tipo `char` occupa sempre $1$ byte, e il numero di bit di un byte è `CHAR_BIT`, che vale almeno $8$. Per conoscere l’intervallo di un tipo si usano i limiti di `<limits.h>`.

Il tipo `char` contiene un carattere, memorizzato come un piccolo intero. Se questo intero abbia il segno oppure no dipende dal compilatore. Quando serve un piccolo intero con un segno certo si usano `signed char` oppure `unsigned char`, che sono tipi distinti da `char`.
:::

:::definizione{#letterali titolo="Costanti scritte nel sorgente"}
Un numero scritto direttamente nel sorgente, come `12`, si chiama **costante**, e ha anch’esso un tipo, che dipende da come è scritto. Una costante intera senza suffisso, come `12`, è un `int`; se il valore è troppo grande per un `int`, il compilatore usa un tipo intero più grande. Con il suffisso `u`, come in `12u`, la costante è un `unsigned int`.

Una costante con il punto, come `14.0`, è un `double`, cioè un numero in virgola mobile. Con il suffisso `f`, come `14.0f`, è un `float`, che ha meno cifre di precisione; con il suffisso `L`, come `14.0L`, è un `long double`. Nel sorgente il separatore decimale è sempre il punto.
:::

:::osservazione
La scrittura `-7` è l’operatore `-` applicato alla costante `7`. La distinzione conta soltanto per il minimo di `int`. Con `int` di $4$ byte il numero $2\,147\,483\,648$ supera `INT_MAX`, quindi la costante `2147483648` ha un tipo più grande di `int`, e così anche `-2147483648`. Per indicare il minimo si usa il nome `INT_MIN`.
:::

## Raggruppamento, valutazione ed effetti

:::definizione{#operatori-aritmetici titolo="Operandi e risultati"}
Gli operatori `+`, `-`, `*` e `/` eseguono somma, differenza, prodotto e divisione di due numeri. L’operatore `%` dà il resto della divisione fra due interi; per esempio `17 % 5` vale $2$. Se i due operandi hanno tipi diversi, prima dell’operazione vengono portati a un tipo comune, con le regole descritte più avanti in questo capitolo, e il risultato ha quel tipo.

Gli operatori di confronto sono `<`, `<=`, `>`, `>=`, `==` (uguale) e `!=` (diverso). In C il risultato di un confronto è un `int`, che vale $1$ se la relazione è vera e $0$ se è falsa. Per esempio `3 < 5` vale $1$ e `3 == 5` vale $0$. Per questo la somma `(a > 0) + (b > 0)` conta quanti fra `a` e `b` sono positivi.
:::

:::definizione{#precedenza titolo="Precedenza e associatività"}
Quando un’espressione contiene più operatori, la **precedenza** stabilisce quale si applica per primo, come in matematica. Dal più forte al più debole l’ordine è il seguente. Vengono prima gli operatori con un solo operando, come il segno `-` e il cast; poi `*`, `/` e `%`; poi `+` e `-`; poi i confronti `<`, `<=`, `>`, `>=`; infine `==` e `!=`. Fra operatori con la stessa precedenza decide l’**associatività**, che per quelli aritmetici va da sinistra a destra.

Per esempio in `14 - 2 * 5` la moltiplicazione ha precedenza, quindi l’espressione equivale a `14 - (2 * 5)` e vale $4$. In `18 - 7 - 4` i due operatori hanno la stessa precedenza e si procede da sinistra, quindi l’espressione equivale a `(18 - 7) - 4` e vale $7$. Le parentesi tonde impongono un ordine diverso, e `(14 - 2) * 5` vale $60$.
:::

:::definizione{#effetti-collaterali titolo="Valori, effetti e sequenze"}
Alcune espressioni, oltre a produrre un valore, modificano una variabile, e la modifica si chiama **effetto collaterale**. L’assegnamento è il caso più comune. Gli operatori `++` e `--` aumentano e diminuiscono di uno una variabile, e hanno due forme. L’espressione `n++` (post-incremento) vale quanto `n` valeva *prima* dell’aumento. L’espressione `++n` (pre-incremento) vale quanto `n` vale *dopo* l’aumento. In entrambi i casi alla fine `n` è aumentata di uno.

Le istruzioni si eseguono una dopo l’altra, e gli effetti di una riga sono completi prima che cominci la successiva. Nel frammento seguente la terza riga legge quindi `n` già aumentata.

```c
int n = 6;
int before = n++;
int after = n;
```

La variabile `before` vale $6$, cioè il valore di `n` prima dell’aumento, e `after` vale $7$. Con `int before = ++n;` nella seconda riga, entrambe varrebbero $7$.
:::

:::attenzione
Il C non stabilisce in quale ordine vengono calcolati i due operandi di un operatore come `+`, né gli argomenti di una funzione. Di solito l’ordine non conta, ma conta quando la stessa espressione modifica una variabile e la legge in un altro punto. Un’espressione come `n + n++` non ha un valore determinato, e lo standard classifica il caso come **comportamento indefinito**, definito più avanti in questo capitolo. La forma corretta separa la modifica e l’uso in due istruzioni, come nel frammento precedente.
:::

## Divisione e resto tra interi

::::teorema{#quoziente-e-resto titolo="Identità del quoziente e del resto"}
Fra due interi l’operatore `/` calcola la divisione intera, cioè scarta la parte dopo la virgola; `17 / 5` vale $3$ e `17 % 5` vale $2$. Con i numeri negativi lo scarto avviene verso lo zero, quindi `-17 / 5` vale $-3$. In generale, siano `a` e `b` di tipo `int`, con `b` diverso da zero e con il quoziente rappresentabile in `int`. Indicati con $q$ il valore di `a / b` e con $r$ quello di `a % b`, vale l’identità
$$
a=bq+r,\qquad |r|<|b|.
$$
Se il resto è diverso da zero, ha lo stesso segno del dividendo $a$; per esempio `-17 % 5` vale $-2$, infatti $-17=5\cdot(-3)+(-2)$. L’identità permette di controllare quoziente e resto sostituendoli nell’uguaglianza.

:::dimostrazione
Scriviamo $x=\dfrac{a}{b}$ per il rapporto esatto e $q=\operatorname{trunc}(x)$ per il suo troncamento verso zero. Il resto previsto dal linguaggio, quando il quoziente è rappresentabile, è $r=a-bq$. Dunque $r=b(x-q)$. Poiché $|x-q|<1$, si ha $|r|<|b|$.

Quando $x-q$ è diverso da zero, il suo segno è quello di $x$. Moltiplicandolo per $b$, il segno del resto diventa il segno di $a$. Se $x$ è un intero, $q=x$ e $r=0$.
:::
::::

:::esempio{titolo="Dividendo e divisore negativi"}
Per $a=-23$ e $b=-5$ il rapporto esatto è $4{,}6$. Scartando la parte dopo la virgola si ottiene $q=4$. Il resto si ricava dall’identità,
$$
r=-23-(-5)\cdot4=-3 .
$$
La verifica dà $(-5)\cdot4+(-3)=-23$. Il resto è negativo perché il dividendo è negativo; il segno del divisore non conta.
:::

:::attenzione
Le espressioni `a / b` e `a % b` non hanno un risultato in due casi. Il primo è la divisione per zero. Il secondo, con `int` di $4$ byte, è `INT_MIN / -1`, perché il risultato matematico sarebbe $2\,147\,483\,648$, che supera `INT_MAX` di uno. In entrambi i casi il comportamento del programma è indefinito, quindi il programma deve controllare i valori prima di dividere.
:::

## Scelta del tipo prima del calcolo

:::definizione{#promozioni-intere titolo="Promozioni intere"}
Il C esegue i calcoli fra interi almeno nel tipo `int`. I tipi interi più piccoli di `int`, cioè `char` e `short` nelle loro varianti, vengono convertiti in `int` ogni volta che compaiono in un’operazione aritmetica; la conversione si chiama **promozione intera** e lascia invariato il valore. Lo standard ordina i tipi interi per **rango**, dal più piccolo al più grande, cioè `char`, `short`, `int`, `long`, `long long`; un tipo senza segno ha lo stesso rango del corrispondente con segno.

Per esempio, se `a` e `b` sono due `short` che valgono $100$ e $200$, in `a + b` entrambi vengono promossi a `int` e il risultato $300$ è un `int`. Nel caso raro in cui `int` non contiene tutti i valori del tipo di partenza, come può accadere per `unsigned short` su macchine in cui `short` e `int` hanno la stessa dimensione, la promozione avviene verso `unsigned int`.
:::

:::definizione{#conversioni-aritmetiche titolo="Conversioni aritmetiche usuali"}
Quando i due operandi di un operatore aritmetico hanno tipi diversi, il C li porta a un tipo comune prima di calcolare, con regole chiamate **conversioni aritmetiche usuali**. L’idea è che prevale il tipo più capiente. Se uno dei due è in virgola mobile, l’altro viene convertito in quel tipo; fra tipi in virgola mobile l’ordine crescente è `float`, `double`, `long double`. Per esempio in `7 + 2.5` il $7$ diventa $7{,}0$ e il risultato è il `double` $9{,}5$.

Se entrambi sono interi, si applicano prima le promozioni. Se dopo le promozioni i tipi sono uguali, quello è il tipo comune. Se sono entrambi con segno o entrambi senza segno, quello di rango minore viene convertito nell’altro; per esempio in una somma fra un `int` e un `long` il calcolo avviene in `long`. Se uno è con segno, di tipo $S$, e l’altro senza segno, di tipo $U$, valgono tre casi.

- Se $U$ ha rango almeno pari a $S$, l’operando di tipo $S$ è convertito in $U$.
- Se $S$ ha rango maggiore e rappresenta ogni valore di $U$, l’operando di tipo $U$ è convertito in $S$.
- Altrimenti entrambi gli operandi sono convertiti nel tipo senza segno corrispondente a $S$.

Il caso più comune è il primo. In `9u + (-2)` i tipi sono `unsigned int` e `int`, che hanno lo stesso rango, quindi $-2$ viene convertito in `unsigned int`. Un numero negativo convertito in un tipo senza segno diventa un numero positivo molto grande, secondo la regola del teorema sull’aritmetica senza segno più avanti in questo capitolo; il risultato finale della somma è comunque $7$.
:::

:::definizione{#conversioni-assegnamento titolo="Cast e conversioni di destinazione"}
Il **cast** `(T) expr` converte il valore di `expr` nel tipo `T`; per esempio `(double) 3` vale $3{,}0$. Una conversione avviene anche senza cast in ogni inizializzazione e in ogni assegnamento, perché il valore a destra viene convertito nel tipo della variabile a sinistra. In `int k = 2.9;` la variabile `k` riceve $2$.

La conversione da virgola mobile a intero elimina la parte dopo la virgola, senza arrotondare, quindi `(int) 5.75` vale $5$ e `(int)(-5.75)` vale $-5$. Il valore così ottenuto deve stare nell’intervallo del tipo intero. La conversione da intero a virgola mobile conserva il valore quando il tipo di arrivo ha abbastanza cifre; per interi molto grandi il risultato è uno dei due valori rappresentabili più vicini.
:::

:::esempio{titolo="Posizione del cast nella divisione"}
Le due espressioni della figura contengono gli stessi numeri, ma il cast è applicato in due punti diversi e il risultato cambia.

![Le espressioni (double)(11 / 4) e (double)11 / 4. La prima esegue la divisione intera e vale 2,0. La seconda converte 11 e vale 2,75.](/immagini/informatica/tipi-ed-espressioni/schema-teoria-it.png)

In `(double)(11 / 4)` la divisione viene calcolata per prima, fra due `int`. È quindi una divisione intera e vale $2$; il cast converte poi $2$ in $2{,}0$, e la parte frazionaria è già perduta. In `(double)11 / 4` il cast ha precedenza sulla divisione e converte $11$ in $11{,}0$. A questo punto i due operandi hanno tipi diversi, quindi anche $4$ viene convertito in `double`, e la divisione fra numeri in virgola mobile dà
$$
\dfrac{11}{4}=2+\dfrac{3}{4}=2{,}75 .
$$
Il risultato è esatto, perché $2{,}75=\dfrac{11}{4}$ ha per denominatore una potenza di $2$ e quindi una scrittura binaria finita.
:::

## Risultati rappresentabili e semantica

::::teorema{#interi-unsigned titolo="Aritmetica modulo il numero di valori"}
Nei tipi senza segno i calcoli non escono mai dall’intervallo, perché un risultato troppo grande o negativo viene riportato dentro con la regola del resto. Sia $U$ un tipo intero senza segno con massimo $U_{\max}$, e sia $M=U_{\max}+1$ il numero dei suoi valori; per un `unsigned int` di $4$ byte $M=2^{32}$. Il risultato di una somma, una differenza o un prodotto calcolati nel tipo $U$ è il resto della divisione del risultato matematico per $M$, cioè l’unico intero fra $0$ e $M-1$ che differisce dal risultato matematico per un multiplo di $M$. La stessa regola vale quando un intero di un altro tipo viene convertito in $U$.

:::dimostrazione
Per rientrare nell’intervallo si aggiunge o si sottrae $M$ quante volte serve. Il valore ottenuto è unico, perché due interi distinti fra $0$ e $M-1$ differiscono al più di $M-1$ e quindi la loro differenza non è un multiplo di $M$.
:::
::::

:::esempio{titolo="Una sottrazione di unsigned int"}
In `3u - 5u` i due operandi sono `unsigned int`, quindi il calcolo avviene in quel tipo. Il risultato matematico è $-2$, che è fuori dall’intervallo. Aggiungendo $M=\mathrm{UINT\_MAX}+1$ si ottiene $M-2=\mathrm{UINT\_MAX}-1$, che con `unsigned int` di $4$ byte è $4\,294\,967\,294$. Come controllo, sommando `2u` a questo valore si ottiene $M$, che riportato nell’intervallo dà $0$.
:::

:::definizione{#rappresentabilita titolo="Operazione e intervallo di risultato"}
Un valore è **rappresentabile** in un tipo se appartiene all’intervallo di quel tipo. Per gli interi con segno la regola del resto non vale. Se il risultato matematico di una somma, una differenza o un prodotto fra `int` esce dall’intervallo, si ha un **overflow** e il comportamento del programma è indefinito. Per esempio `INT_MAX + 1` non ha un valore su cui si possa contare. Diverso è il caso di una conversione, come l’assegnamento a un `int` di un valore troppo grande, in cui il risultato è deciso dal compilatore.

Il controllo va quindi fatto *prima* della somma. Se `delta` è positivo, la somma `value + delta` è rappresentabile quando `value <= INT_MAX - delta`. La sottrazione `INT_MAX - delta` non può dare overflow, perché `delta` è positivo. Per esempio, con `INT_MAX` uguale a $2\,147\,483\,647$ e `delta` uguale a $10$, la somma è sicura per `value` fino a $2\,147\,483\,637$. La condizione è la disuguaglianza $\mathrm{value}+\mathrm{delta}\leq \mathrm{INT\_MAX}$ con `delta` portato a destra.
:::

:::definizione{#categorie-comportamento titolo="Categorie previste dal C17"}
Lo standard del C non fissa ogni dettaglio, e classifica i casi lasciati liberi in tre categorie.

- **Definito dall’implementazione.** Il compilatore sceglie fra alcune possibilità e documenta la scelta, che resta sempre la stessa. Un esempio è se `char` abbia il segno oppure no.
- **Non specificato.** Il compilatore sceglie fra alcune possibilità senza doverlo documentare, e la scelta può cambiare da un punto all’altro del programma. Un esempio è l’ordine in cui vengono calcolati due argomenti di una funzione.
- **Indefinito.** Lo standard non dice nulla su ciò che accade, e il programma può dare un risultato sbagliato, interrompersi o sembrare corretto. Esempi sono l’overflow di un `int` e la divisione per zero.

Un programma corretto non esegue mai un’operazione dal comportamento indefinito. Il fatto che in una prova il programma stampi il valore atteso non dimostra che l’operazione sia definita, perché con un altro compilatore o con altre opzioni il risultato può cambiare.
:::

## Scrittura numerica su stdout

:::definizione{#printf-formati titolo="Specificatori di printf"}
La funzione `printf`, dichiarata in `<stdio.h>`, stampa testo sull’uscita standard. Il primo argomento è la **stringa di formato**. I caratteri normali della stringa vengono stampati così come sono. Ogni **specifica di conversione**, che inizia con `%`, viene sostituita dal valore dell’argomento successivo, scritto nel modo indicato dalla specifica. Per esempio `printf("x = %d\n", 7);` stampa `x = 7` e va a capo, perché `\n` è il carattere di ritorno a capo. La specifica deve corrispondere al tipo dell’argomento.

| Specifica | Tipo dell’argomento |
|---|---|
| `%d` | `int` |
| `%u` | `unsigned int` |
| `%ld` | `long` |
| `%zu` | `size_t` |
| `%f` | `double` |
| `%Lf` | `long double` |

Un argomento `float` viene convertito automaticamente in `double`, e uno più piccolo di `int` in `int`, quindi `%f` e `%d` valgono anche per questi tipi. Per stampare il carattere `%` si scrive `%%`. `printf` restituisce il numero di caratteri stampati, oppure un valore negativo se la scrittura non riesce. Se una specifica non corrisponde al tipo dell’argomento, per esempio `%d` con un `double`, il comportamento è indefinito.
:::

:::definizione{#larghezza-e-precisione titolo="Larghezza di campo e precisione"}
Fra `%` e la lettera si può scrivere un numero, la **larghezza di campo**, che è il numero minimo di caratteri occupati dal valore. Se il valore ne ha meno, vengono aggiunti spazi a sinistra; se ne ha di più, viene stampato per intero. Con `%5d` il valore $36$ è stampato con tre spazi davanti, e $123456$ è stampato con tutte le sue sei cifre. La larghezza serve a incolonnare i numeri.

Dopo un punto si scrive la **precisione**. Con `%f` è il numero di cifre dopo il punto decimale, quindi `%.2f` stampa due decimali e $3{,}14159$ diventa `3.14`. Con `%d` è il numero minimo di cifre, ottenuto aggiungendo zeri a sinistra, quindi `%.3d` stampa $7$ come `007`. Il segno, le cifre e il punto decimale contano tutti nella larghezza.
:::

:::esempio{titolo="Allineare due campi"}
Il frammento seguente, con `<stdio.h>` incluso, stampa un intero e un numero con due decimali, ciascuno in un campo di larghezza fissata.

```c
printf("[%4d][%6.2f]", 17, 1.25);
```

Il testo stampato è `[  17][  1.25]`. Il primo campo è largo $4$ e il numero $17$ ha due cifre, quindi è preceduto da due spazi. Il secondo campo è largo $6$ e `1.25` occupa quattro caratteri, quindi è preceduto da due spazi. Le quattro parentesi quadre sono caratteri normali. In tutto i caratteri sono $4+6+4=14$, e questo è il valore restituito da `printf`.
:::

## Lettura formattata e valori assegnati

:::definizione{#scanf-formati titolo="Specificatori di scanf"}
La funzione `scanf`, dichiarata in `<stdio.h>`, legge dall’**ingresso standard** `stdin`, che di solito è la tastiera, e mette i valori letti in variabili. Anche `scanf` usa una stringa di formato; per ogni specifica si passa l’**indirizzo** della variabile da riempire, che si ottiene scrivendo `&` davanti al nome. Per leggere un intero nella variabile `n` si scrive `scanf("%d", &n);`. L’indirizzo serve perché `scanf` deve modificare la variabile, e per farlo deve sapere dove si trova in memoria. La specifica deve corrispondere al tipo della variabile.

| Specifica | Tipo della variabile |
|---|---|
| `%d` e `%i` | `int` |
| `%u` | `unsigned int` |
| `%f` | `float` |
| `%lf` | `double` |
| `%Lf` | `long double` |

A differenza di `printf`, per un `double` si usa `%lf` e per un `float` si usa `%f`. `%d` legge un intero scritto in base dieci. `%i` riconosce anche le altre basi dal prefisso, quindi legge `014` come numero ottale, cioè $12$, mentre `%d` lo legge come $14$. Prima di un numero `scanf` salta spazi, tabulazioni e ritorni a capo. Uno spazio nella stringa di formato indica di saltare tutti gli spazi presenti in quel punto dell’ingresso, anche nessuno.
:::

:::definizione{#esito-lettura titolo="Esito e numero di assegnamenti"}
`scanf` restituisce il numero di variabili che è riuscita a riempire. Questo valore va sempre controllato, perché l’ingresso può non contenere ciò che il programma si aspetta. Se un campo non ha la forma richiesta, per esempio lettere al posto di un numero, `scanf` si ferma in quel punto e restituisce il numero di variabili riempite fino a lì, che può essere $0$. Se l’ingresso finisce prima che sia stato letto il primo valore, restituisce il valore speciale `EOF`.

Si consideri `scanf("%d %lf", &count, &rate)` con `count` di tipo `int` e `rate` di tipo `double`. Se l’ingresso è `8 stop`, il primo campo viene letto e `count` vale $8$; il secondo campo dovrebbe essere un numero ma trova `stop`, quindi la lettura si ferma. Il valore restituito è $1$ e `rate` conserva il valore che aveva prima. Il programma riconosce la lettura completa controllando che il valore restituito sia $2$.
:::

:::attenzione
Se il numero letto è troppo grande per la variabile, per esempio venti cifre lette con `%d`, il comportamento di `scanf` è indefinito, e il valore restituito non lo segnala. Per leggere dati di cui non si conosce la forma è più sicuro leggere l’intera riga come testo e convertirla con la funzione `strtol`, che segnala i valori fuori intervallo; il metodo è descritto nel capitolo sui file di testo.
:::

:::osservazione
Nel sorgente e nel testo stampato dal programma il separatore decimale è il punto, mentre nelle formule di questo corso è la virgola. Così `printf("%.2f", 1.25)` stampa `1.25`, e la stessa quantità in una formula si scrive $1{,}25$. Negli esempi di stampa si assume inoltre che i numeri in virgola mobile siano arrotondati al valore più vicino, come avviene sui calcolatori comuni.
:::
