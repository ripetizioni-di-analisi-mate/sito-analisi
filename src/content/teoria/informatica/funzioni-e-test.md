---
titolo: "Funzioni, specifiche e test"
sommario: "Dalle chiamate in C17 ai contratti, alla scomposizione dei programmi e alla verifica con casi di test scelti dalla specifica."
---

## Dichiarare una funzione e usarla

:::definizione{#prototipi titolo="Prototipo di funzione"}
Una **funzione** è un gruppo di istruzioni con un nome, che riceve alcuni dati, esegue un calcolo e restituisce un risultato. Eseguire una funzione scrivendone il nome seguito dai dati fra parentesi, come in `max2(4, 9)`, si dice **chiamarla**. Prima di poter chiamare una funzione il compilatore deve conoscerne la **dichiarazione**, detta anche **prototipo**, che indica il tipo del risultato, quanti dati riceve e di quale tipo.

```c
int max2(int a, int b);
```

Il primo `int` è il tipo del risultato. Fra parentesi ci sono i **parametri**, cioè le variabili in cui la funzione riceve i dati; qui sono due `int`. Nel prototipo i nomi `a` e `b` si possono omettere, ma aiutano a capire il ruolo di ciascun parametro. La **definizione** della funzione ripete la stessa intestazione e aggiunge fra graffe il **corpo**, cioè le istruzioni da eseguire.
:::

:::esempio{titolo="Dichiarazione prima della chiamata"}
Il programma stampa il maggiore fra $4$ e $9$. Il prototipo è scritto prima di `main`, così il compilatore può controllare la chiamata anche se la definizione di `max2` si trova più in basso. L’espressione `a > b ? a : b` vale `a` se la condizione `a > b` è vera e `b` altrimenti.

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

Nella chiamata `max2(4, 9)` il parametro `a` riceve $4$ e `b` riceve $9$. La condizione `4 > 9` è falsa, quindi la funzione restituisce `b`, cioè $9$, e `printf` stampa `9`. Scambiando gli argomenti, con `max2(9, 4)`, la condizione è vera e la funzione restituisce `a`, che vale ancora $9$.
:::

:::attenzione
Per dichiarare una funzione senza parametri si scrive `void` fra le parentesi, come in `int sample(void);`. La forma con le parentesi vuote, `int sample();`, nel C17 significa che i parametri non sono specificati, e il compilatore non controlla gli argomenti delle chiamate. Con `int sample(void);` una chiamata come `sample(3)` viene segnalata come errore.
:::

:::osservazione
Il prototipo e la definizione devono indicare gli stessi tipi nello stesso ordine. Il prototipo si scrive di solito in un header incluso da tutti i file che usano la funzione, come descritto nel capitolo sulla compilazione; la definizione si scrive una sola volta, in un file sorgente.
:::

## Dati della chiamata e valore restituito

:::definizione{#passaggio-per-valore titolo="Passaggio per valore"}
Nella chiamata `adjust(x)` l’espressione `x` scritta fra parentesi è l’**argomento**. La variabile `n` dichiarata nell’intestazione della funzione è il **parametro**. In C la chiamata *copia* il valore dell’argomento nel parametro; questa regola si chiama **passaggio per valore**. Il parametro è una variabile nuova, che esiste soltanto durante quella chiamata. Se il tipo dell’argomento è diverso da quello del parametro, il valore viene convertito come in un assegnamento.

Di conseguenza una funzione può modificare il proprio parametro senza che la variabile del chiamante cambi, perché lavora su una copia. Per permettere a una funzione di modificare una variabile del chiamante si passa l’indirizzo della variabile, come si vede nel capitolo sui puntatori.
:::

:::esempio{titolo="Tracciare una copia e il ritorno"}
Si consideri la funzione seguente, chiamata con `int x = 9;` e poi `int y = adjust(x);`. L’istruzione `n += 3` equivale a `n = n + 3`.

```c
int adjust(int n)
{
    n += 3;
    return 2 * n;
}
```

![La chiamata copia x uguale a 9 in n. La funzione cambia n in 12 e restituisce 24, che il chiamante assegna a y. x rimane 9.](/immagini/informatica/funzioni-e-test/schema-teoria-it.png)

La chiamata copia il valore $9$ di `x` nel parametro `n`. Il corpo porta `n` a $12$ e restituisce $2\cdot 12=24$, che viene messo in `y`. La variabile `x` vale ancora $9$, perché la funzione ha modificato soltanto la copia `n`.
:::

:::definizione{#ritorno-dalla-funzione titolo="Istruzione return"}
L’istruzione `return expr;` termina la funzione e consegna al chiamante il valore di `expr`, convertito nel tipo del risultato. Le istruzioni scritte dopo un `return` eseguito non vengono eseguite. Una funzione che non deve restituire nulla, per esempio una che si limita a stampare, si dichiara con tipo `void`; termina quando arriva alla graffa finale oppure con `return;` senza valore. In una funzione con risultato ogni percorso di esecuzione deve terminare con un `return` che indica un valore.
:::

:::esempio{titolo="Divisione prima della conversione"}
La funzione `double half(int total) { return total / 2; }` ha un risultato `double`, ma con `half(5)` restituisce $2{,}0$ e non $2{,}5$. Gli operandi `total` e `2` sono entrambi `int`, quindi la divisione è intera e vale $2$. Il `return` converte poi $2$ in `double`, quando la parte frazionaria è già perduta.

Con `return total / 2.0;` il divisore è un `double`. Anche `total` viene quindi convertito in `double` prima della divisione, e il risultato è $\dfrac{5}{2}=2{,}5$. Le due versioni sono entrambe corrette, ma calcolano cose diverse, la metà intera e la metà esatta.
:::

:::attenzione
L’ordine in cui vengono calcolati gli argomenti di una chiamata non è stabilito. In `mix(++x, 7)` questo non crea problemi, perché il secondo argomento non dipende da `x`. In `mix(++x, x)` un argomento modifica `x` e l’altro la legge, e non è stabilito quale dei due venga calcolato prima; il comportamento è indefinito. La forma corretta esegue l’incremento in un’istruzione a parte, `++x;`, e poi chiama `mix(x, x)`.
:::

## Nomi visibili e oggetti nel tempo

:::definizione{#visibilita-dei-nomi titolo="Visibilità di un identificatore"}
La **visibilità** (in inglese *scope*) di un nome è la parte del sorgente in cui quel nome si può usare. Una variabile dichiarata dentro un blocco, cioè fra una coppia di graffe, è visibile dal punto della dichiarazione fino alla graffa che chiude il blocco; fuori dal blocco il nome non esiste. Un parametro è visibile in tutto il corpo della sua funzione. Per questo due funzioni diverse possono usare lo stesso nome per due variabili distinte. Se in un blocco interno si dichiara una variabile con un nome già usato in un blocco esterno, dentro il blocco interno il nome indica la variabile nuova, che **oscura** quella esterna.
:::

:::esempio{titolo="Stesso nome in due blocchi"}
Nella funzione seguente il nome `n` indica due variabili diverse, il parametro e la variabile dichiarata nel blocco interno.

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

Con `shadow(3)` il parametro `n` vale $3$ e `saved` parte da $3$. Nel blocco interno `n` è la variabile nuova, che vale $4$, quindi `saved` diventa $3+4=7$. Dopo la chiusura del blocco `n` indica di nuovo il parametro, che vale $3$, e il risultato è $7+3=10$. Chiamando `local` la variabile interna il risultato è lo stesso e il codice si legge meglio.
:::

:::definizione{#durata-degli-oggetti titolo="Durata automatica e durata statica"}
La **durata** di una variabile è l’intervallo di tempo, durante l’esecuzione, in cui la variabile esiste in memoria. Una variabile dichiarata dentro una funzione, come `int count = 0;`, ha **durata automatica**. Viene creata ogni volta che l’esecuzione arriva alla dichiarazione e distrutta quando si esce dal blocco, quindi a ogni chiamata riparte dal valore iniziale. Con la parola `static`, come in `static int count = 0;`, la variabile ha **durata statica**. Esiste per tutta l’esecuzione del programma, viene inizializzata una sola volta e conserva il valore fra una chiamata e l’altra. Il suo nome resta comunque visibile soltanto dentro la funzione.
:::

:::esempio{titolo="Contatore con o senza memoria"}
Si consideri una funzione il cui corpo è `static int count = 0; return ++count;`. Tre chiamate successive restituiscono $1$, $2$ e $3$, perché la variabile conserva il valore lasciato dalla chiamata precedente. Senza `static` la variabile viene ricreata con valore $0$ a ogni chiamata, e le tre chiamate restituiscono tutte $1$. La visibilità è la stessa nei due casi; cambia la durata.
:::

## Input ammessi e risultati promessi

:::definizione{#contratti-di-funzione titolo="Precondizione e postcondizione"}
Chi usa una funzione deve sapere due cose, cioè quali dati le può passare e che cosa ottiene. Queste due informazioni formano il **contratto** della funzione. La **precondizione** è la condizione che gli argomenti devono soddisfare, ed è responsabilità di chi chiama. La **postcondizione** è ciò che la funzione garantisce sul risultato quando la precondizione è soddisfatta. Per una funzione che calcola la radice quadrata intera, la precondizione è «l’argomento è maggiore o uguale a zero» e la postcondizione è «il risultato è il più grande intero il cui quadrato non supera l’argomento». In simboli, se $x$ indica gli argomenti e $y$ il risultato, la precondizione si scrive $P(x)$ e la postcondizione $Q(x,y)$.

Se la precondizione è falsa il contratto non garantisce nulla, e la funzione può restituire un valore senza significato o avere comportamento indefinito. Per questo la precondizione si controlla prima della chiamata.
:::

::::teorema{#limiti-operativi titolo="Dominio di un costo affine"}
Una precondizione serve spesso a evitare l’overflow. Sia `quantity` un `int` non negativo, di valore $q$. La funzione seguente calcola $5+3q$, e tutte le operazioni restano nell’intervallo di `int` esattamente quando

$$
0 \leq q \leq \left\lfloor\frac{M-5}{3}\right\rfloor ,
$$

dove $M$ è il valore di `INT_MAX` e $\lfloor x\rfloor$ è l’arrotondamento per difetto all’intero. La condizione si ricava da $5+3q\leq M$. Con `INT_MAX` uguale a $2\,147\,483\,647$ il limite è $715\,827\,880$.

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
In C il limite si calcola con `(INT_MAX - 5) / 3`, dove `INT_MAX` viene da `<limits.h>`; la divisione fra interi positivi arrotonda già per difetto. Il programma confronta `quantity` con questo limite prima di chiamare la funzione. Il controllo stesso non può dare overflow, perché sottrae da `INT_MAX` e divide.
:::

## Suddividere il calcolo in passaggi

:::definizione{#scomposizione titolo="Scomposizione per contratti"}
**Scomporre** un calcolo significa dividerlo in funzioni più piccole, ciascuna con un compito solo. Quando due funzioni si applicano una dopo l’altra, il risultato della prima diventa l’argomento della seconda. Perché la combinazione sia corretta, la postcondizione della prima deve garantire la precondizione della seconda; in questo modo ciascuna funzione si può scrivere e controllare separatamente.
:::

::::teorema{#composizione-contratti titolo="Composizione di due funzioni"}
Siano $f$ e $g$ due funzioni che non hanno effetti oltre al risultato e che terminano sempre. La funzione $f$ ha precondizione $P_f(x)$ e postcondizione $Q_f(x,z)$; la funzione $g$ ha precondizione $P_g(z)$ e postcondizione $Q_g(z,y)$. Se ogni risultato $z$ che $f$ produce su un argomento ammesso soddisfa la precondizione $P_g(z)$, allora la chiamata $g(f(x))$ con $x$ ammesso termina, e il suo risultato $y$ soddisfa $Q_g(z,y)$, dove $z=f(x)$ soddisfa $Q_f(x,z)$.

:::dimostrazione
Fissato un $x$ per cui vale $P_f(x)$, il contratto di $f$ garantisce un risultato $z$ con $Q_f(x,z)$. Per ipotesi, questo $z$ soddisfa $P_g(z)$. Si applica quindi il contratto di $g$ e si ottiene $y$ con $Q_g(z,y)$. Entrambe le chiamate terminano e l’intermedio usato dalla seconda è quello restituito dalla prima. Le due postcondizioni valgono dunque per lo stesso $z$.
:::
::::

:::esempio{titolo="Soglia applicata a un costo"}
La funzione `base_cost` accetta quantità fra $0$ e $100$ e calcola `2 * quantity + 1`, quindi il suo risultato è compreso fra $1$ e $201$. La funzione `minimum_charge` accetta importi fra $0$ e $300$ e restituisce il maggiore fra l’importo e $8$. Ogni risultato della prima è un argomento ammesso dalla seconda, perché l’intervallo da $1$ a $201$ è contenuto in quello da $0$ a $300$; la combinazione `minimum_charge(base_cost(quantity))` è quindi corretta. Per la quantità $4$ si ottiene prima $9$ e poi il maggiore fra $9$ e $8$, cioè $9$.

Le due funzioni si provano prima separatamente e poi insieme. Per la prova d’insieme sono adatte le quantità $3$ e $4$, che danno i costi intermedi $7$ e $9$, uno sotto e uno sopra la soglia $8$; i risultati attesi sono $8$ e $9$.
:::

## Campioni selezionati dalla specifica

:::definizione{#partizioni-di-test titolo="Classi di equivalenza per i test"}
Un **test** esegue una funzione su un argomento scelto e confronta il risultato con quello atteso. Poiché gli argomenti possibili sono troppi per provarli tutti, li si divide in **classi di equivalenza**, cioè gruppi di argomenti a cui la specifica applica la stessa regola; ogni argomento ammesso appartiene a una sola classe. L’insieme delle classi si chiama **partizione**. Il risultato atteso di un test si ricava dalla specifica, e non dal programma che si sta provando; ciò che fornisce il risultato atteso si chiama **oracolo**.

Il criterio minimo è provare almeno un argomento per ogni classe. Se le classi sono $k$, bastano $k$ test.
:::

:::esempio{titolo="Rappresentanti di fasce intere"}
Un tariffario, per un numero intero di unità fra $0$ e $20$, prevede il prezzo $4$ fino a $4$ unità, $6$ da $5$ a $12$ unità e $7$ da $13$ a $20$ unità. Le regole sono tre, quindi le classi sono tre, e si sceglie un argomento per ciascuna.

| Input | Classe | Atteso |
| --- | --- | --- |
| $2$ | $[0,4]$ | $4$ |
| $8$ | $[5,12]$ | $6$ |
| $16$ | $[13,20]$ | $7$ |

L’argomento $8$ appartiene alla seconda classe, quindi il risultato atteso è $6$; allo stesso modo $2$ e $16$ provano le altre due regole. Questi tre test non provano però i valori in cui la regola cambia. Un errore che riguarda soltanto l’argomento $5$ non verrebbe scoperto, perché la seconda classe è stata provata con $8$. Per questo si aggiungono i test sui confini, descritti nel paragrafo seguente.
:::

## Confini di un insieme di input

:::definizione{#valori-di-confine titolo="Test dei valori di confine"}
Un **valore di confine** è un argomento in cui la regola cambia, oppure un estremo dei valori ammessi. Gli errori più comuni si trovano lì, per esempio un `<` scritto al posto di `<=`. Se la regola cambia passando da $x<t$ a $x\geq t$, si provano i due valori vicini $t-1$ e $t$, che stanno dai due lati del cambio. Per una fascia che va da $a$ a $b$ inclusi si provano $a$ e $b$, e anche $a-1$ e $b+1$ quando sono argomenti ammessi.
:::

:::esempio{titolo="Controllare una disuguaglianza inclusiva"}
Una funzione riceve un intero fra $0$ e $100$ e deve restituire $1$ se l’argomento è almeno $20$ e $0$ altrimenti. I valori di confine sono $19$ e $20$, con risultati attesi $0$ e $1$. Se la funzione è scritta per errore con `x > 20`, restituisce $0$ per entrambi; il test con $20$ scopre l’errore, mentre un test con $50$ non lo scoprirebbe.

Un test superato garantisce il risultato soltanto per l’argomento provato. Per essere certi della correttezza su tutti gli argomenti serve una dimostrazione oppure, se gli argomenti sono pochi, la prova di tutti.
:::

:::esempio{titolo="Due passaggi di fascia"}
Nel tariffario precedente la regola cambia fra $4$ e $5$ e fra $12$ e $13$. I valori di confine sono $4$, $5$, $12$ e $13$, con risultati attesi $4$, $6$, $6$ e $7$. Se la prima condizione è scritta in modo da comprendere anche $5$ nella prima fascia, il test con $5$ dà $4$ invece di $6$. Se la seconda fascia esclude per errore $12$, il test con $12$ dà $7$ invece di $6$.

A questi si aggiungono gli estremi $0$ e $20$. Per coprire le classi bastavano tre test; quelli sui confini servono a controllare che le soglie siano al posto giusto.
:::

:::osservazione
I valori di confine si scelgono fra gli argomenti ammessi. Se gli argomenti ammessi vanno da $0$ a $18$ e una regola cambia a $20$, i valori $19$ e $20$ sono fuori dai valori ammessi e non sono test validi per quella funzione. Diverso è il caso di una funzione che ha proprio il compito di respingere gli argomenti non validi; per essa i valori fuori intervallo sono argomenti ammessi, con un risultato atteso preciso.
:::

## Asserzioni e configurazione di compilazione

:::definizione{#asserzioni titolo="Asserzione in C17"}
La macro `assert`, definita in `<assert.h>`, controlla una condizione durante l’esecuzione. Se la condizione scritta in `assert(e)` è vera, il programma prosegue. Se è falsa, il programma stampa un messaggio con il file, la riga e la condizione, e si interrompe subito. Le asserzioni servono a scrivere nel codice ciò che in quel punto deve essere vero, per esempio una precondizione o il risultato atteso di un test.

Le asserzioni si possono disattivare tutte insieme definendo la macro `NDEBUG` prima di includere `<assert.h>`, di solito nella versione finale del programma. In questo caso `assert(e)` non fa nulla e l’espressione `e` non viene nemmeno calcolata.
:::

:::esempio{titolo="Oracolo codificato come asserzione"}
Il programma prova la funzione `eligible`, che deve restituire $1$ per i punteggi da $20$ in su e $0$ per gli altri. I due test usano i valori di confine $19$ e $20$.

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

Il primo test controlla l’ultimo valore escluso e il secondo il primo valore incluso. Entrambe le condizioni sono vere, quindi il programma termina senza stampare nulla. Se nella funzione si sostituisce `>=` con `>`, la seconda condizione è falsa e il programma si interrompe con il messaggio dell’asserzione. Con `NDEBUG` definita le due righe non eseguono nulla, quindi il programma termina regolarmente anche con la funzione sbagliata.
:::

:::attenzione
Dentro un’asserzione non va scritta un’operazione che serve al programma. Con `int n = 4; assert(++n == 5);` la variabile `n` vale $5$ quando le asserzioni sono attive e resta $4$ quando sono disattivate, perché l’incremento non viene eseguito. La forma corretta esegue `++n;` in un’istruzione a parte e poi `assert(n == 5);`.
:::
