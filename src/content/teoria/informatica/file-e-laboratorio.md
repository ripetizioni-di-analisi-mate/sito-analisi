---
titolo: File di testo e prova di laboratorio
sommario: Dall’apertura di uno stream alla validazione delle righe, con aggregazione e verifica completa di una prova in C17.
---

## File esterno e stream

:::definizione{#stream titolo="Stream di testo"}
Un **file** è una sequenza di dati conservata su disco, che resta disponibile anche dopo la fine del programma. Per leggere o scrivere un file il programma lo apre e ottiene uno **stream**, cioè un canale da cui i dati arrivano, o verso cui vanno, uno dopo l’altro. Le funzioni per gli stream sono dichiarate in `<stdio.h>`. Uno stream è rappresentato da un puntatore di tipo `FILE *`, che si ottiene all’apertura e si passa a tutte le funzioni che leggono, scrivono o chiudono. La lettura è sequenziale, cioè ogni lettura parte dal punto in cui è finita la precedente.

Un **file di testo** contiene caratteri organizzati in righe, e ogni riga termina con il carattere di ritorno a capo `'\n'`. La riga `73`, per esempio, arriva al programma come i tre caratteri `'7'`, `'3'` e `'\n'`.
:::

:::osservazione
Il file e lo stream sono due cose distinte. Il file sta sul disco ed esiste prima e dopo l’esecuzione; lo stream esiste soltanto nel programma, dall’apertura alla chiusura. Un programma può tenere aperti più stream nello stesso momento, per esempio uno per leggere le misure e uno per scrivere un rapporto, e ciascuno ha la propria posizione e i propri indicatori di errore.

Per prevedere che cosa fa un programma su un file servono tre informazioni, cioè il contenuto iniziale del file, il modo in cui viene aperto e l’ordine delle operazioni eseguite.
:::

## Apertura con il modo richiesto

:::definizione{#apertura titolo="Modo e risultato di fopen"}
La funzione `fopen(name, mode)` apre il file di nome `name` e restituisce lo stream, oppure `NULL` se l’apertura non riesce, per esempio perché il file non esiste. Il secondo argomento è una stringa che indica il **modo** di apertura.

- `"r"` (*read*) apre in lettura un file che esiste già.
- `"w"` (*write*) apre in scrittura. Se il file non esiste lo crea; se esiste lo svuota, e il contenuto precedente è perduto.
- `"a"` (*append*) apre in scrittura in coda. Se il file non esiste lo crea; se esiste, ciò che si scrive viene aggiunto alla fine.

Il modo si sceglie in base a ciò che deve accadere al contenuto esistente. Un rapporto da rifare ogni volta si apre con `"w"`, un registro a cui aggiungere dati con `"a"`, un file da consultare con `"r"`.
:::

:::esempio{titolo="Scrittura dopo un controllo"}
Il file `log.txt` contiene la riga `41`. Il frammento, che fa parte di `main` e usa `<stdio.h>` e `<stdlib.h>`, aggiunge in coda la riga `52`.

```c
FILE *log = fopen("log.txt", "a");
if (log == NULL) {
    return EXIT_FAILURE;
}
int ok = fputs("52\n", log) != EOF;
if (fclose(log) != 0) {
    ok = 0;
}
return ok ? EXIT_SUCCESS : EXIT_FAILURE;
```

Dopo `fopen` si controlla subito che lo stream sia diverso da `NULL`. La funzione `fputs` scrive una stringa sullo stream e restituisce `EOF` in caso di errore. La funzione `fclose` chiude lo stream e restituisce zero se tutto è andato bene; va chiamata anche quando `fputs` fallisce. Il risultato di `fclose` va controllato, perché le funzioni di scrittura accumulano i dati in una memoria temporanea, il **buffer**, e possono scriverli davvero sul disco soltanto alla chiusura.
:::

:::attenzione
I controlli da fare sono tre, cioè l’apertura, ogni scrittura e la chiusura; un’apertura riuscita non garantisce che le scritture riescano. Inoltre l’apertura con `"w"` svuota il file nel momento stesso in cui avviene, anche se poi il programma termina senza scrivere nulla.
:::

## Lettura e fine del file

:::definizione{#fine-flusso titolo="Caratteri, EOF e indicatori"}
La funzione `fgetc(file)` legge un carattere dallo stream e lo restituisce. Quando non ci sono più caratteri, o si verifica un errore, restituisce il valore speciale `EOF` (*end of file*), un numero negativo definito in `<stdio.h>`. Per questo `fgetc` restituisce un `int` e non un `char`, e il risultato va messo in una variabile `int`; così `EOF` resta distinto da tutti i caratteri.

`EOF` da solo non dice perché la lettura si è fermata. Lo dicono due funzioni. `feof(file)` è diversa da zero se è stata raggiunta la fine del file. `ferror(file)` è diversa da zero se c’è stato un errore di lettura. Dopo un ciclo di lettura si controlla `ferror` per sapere se il file è stato letto tutto o se la lettura si è interrotta.
:::

:::esempio{titolo="Misurare i separatori"}
Il file contiene `A\nB\nC\n`, cioè tre righe di un carattere. Il frammento conta i ritorni a capo. Il ciclo legge un carattere alla volta e termina quando `fgetc` restituisce `EOF`.

```c
size_t newlines = 0;
int ch;
while ((ch = fgetc(file)) != EOF) {
    if (ch == '\n') {
        ++newlines;
    }
}
int read_failed = ferror(file) != 0;
```

La condizione del ciclo assegna a `ch` il carattere letto e lo confronta con `EOF`; le parentesi interne sono necessarie perché `!=` ha precedenza su `=`. Il contatore aumenta a ogni ritorno a capo, quindi alla fine vale $3$. Se all’ultima riga mancasse il ritorno a capo finale, cioè con il contenuto `A\nB\nC`, il contatore varrebbe $2$ pur essendo le righe tre. Il numero di ritorni a capo coincide con il numero di righe soltanto se ogni riga, compresa l’ultima, termina con `'\n'`.
:::

:::attenzione
Un ciclo scritto come `while (!feof(file))` è sbagliato. L’indicatore di fine file si accende soltanto *dopo* che una lettura ha tentato di andare oltre la fine, quindi dopo l’ultimo dato `feof` vale ancora zero. Il ciclo esegue un giro in più, in cui la lettura fallisce e il programma elabora una seconda volta il dato precedente. La forma corretta controlla il risultato della lettura stessa, come nel frammento precedente.
:::

## Righe e frammenti

:::definizione{#fgets titolo="Contratto di fgets"}
La funzione `fgets(buffer, capacity, file)` legge una riga di testo e la mette nel vettore `buffer` come stringa. Si ferma dopo aver letto il ritorno a capo, che viene copiato nel vettore, oppure alla fine del file, oppure dopo `capacity - 1` caratteri, in modo che resti posto per il terminatore `'\0'`, che aggiunge sempre. Restituisce `buffer` se ha letto almeno un carattere e `NULL` se non ha letto nulla. Il risultato va controllato prima di usare la stringa.

Se la riga è più lunga del vettore, `fgets` ne legge soltanto una parte e il resto rimane da leggere. Con capacità $5$ e la riga `1234567`, la prima chiamata mette nel vettore `"1234"`, cioè quattro caratteri e il terminatore. La seconda chiamata riprende da `'5'` e legge `"567\n"`.
:::

:::definizione{#validazione-righe titolo="Confine di una riga"}
Dopo una chiamata a `fgets` il programma deve quindi sapere se ha ricevuto una riga intera. La riga è intera se la stringa contiene il ritorno a capo, e lo si verifica con `strchr(buffer, '\n')`, che restituisce l’indirizzo del primo `'\n'` oppure `NULL` se non c’è. Se manca, la riga era troppo lunga per il vettore, oppure è l’ultima del file ed è priva di ritorno a capo. Quando il programma scarta una riga troppo lunga, deve leggere e buttare via anche i pezzi successivi fino al ritorno a capo, altrimenti il pezzo seguente verrebbe scambiato per una riga nuova.

La capacità del vettore si calcola dalla lunghezza massima ammessa. Se una riga valida ha al più $60$ caratteri prima del ritorno a capo, servono $60+1$ caratteri più il terminatore, cioè $62$ elementi, e un vettore di $64$ è sufficiente.
:::

## Interpretazione dei campi numerici

:::definizione{#conversione-controllata titolo="Conversione con strtol"}
La riga letta è una stringa di caratteri. Per ottenere il numero che contiene si usa `strtol(text, &end, 10)`, che converte in `long` il numero scritto in base dieci all’inizio di `text`. La funzione salta gli spazi iniziali, legge un eventuale segno e le cifre, e mette in `end` l’indirizzo del primo carattere che non fa parte del numero. Questo permette due controlli. Se `end` è uguale a `text`, non è stata letta alcuna cifra. Se il numero è troppo grande per un `long`, `strtol` mette nella variabile `errno`, dichiarata in `<errno.h>`, il valore `ERANGE`; per accorgersene si azzera `errno` prima della chiamata.

A questi controlli il programma aggiunge i propri. Se sono ammessi soltanto valori fra $-100$ e $100$, si controlla l’intervallo sul valore `long`, e solo dopo lo si converte in `int`. Per accertare che la riga contenga soltanto il numero, si controlla che dopo le cifre ci siano al più spazi e poi il terminatore.
:::

:::esempio{titolo="Una riga con un intero"}
La riga è formata da uno spazio, le cifre `27` e il ritorno a capo. `strtol` salta lo spazio, restituisce $27$ e lascia `end` sul ritorno a capo. Il programma salta gli spazi finali, fra cui il ritorno a capo, e trova il terminatore, quindi accetta la riga. Per la riga `"27x\n"` il valore restituito sarebbe ancora $27$, ma `end` punterebbe a `'x'`, e la riga verrebbe rifiutata.

![Lo stream fornisce la riga con 27, strtol restituisce 27 e lascia il puntatore sul ritorno a capo, quindi il controllo della coda accetta la riga.](/immagini/informatica/file-e-laboratorio/schema-teoria-it.png)

```c
errno = 0;
char *end;
long value = strtol(buffer, &end, 10);
if (end != buffer && errno != ERANGE && -100 <= value && value <= 100) {
    while (isspace((unsigned char)*end)) {
        ++end;
    }
    if (*end == '\0') {
        reading = (int)value;
    }
}
```

Il frammento usa `<errno.h>`, `<stdlib.h>` e `<ctype.h>`. La condizione dell’`if` riunisce tre controlli, cioè che sia stata letta almeno una cifra, che non ci sia stato overflow e che il valore sia nell’intervallo ammesso. La funzione `isspace` dice se un carattere è uno spazio, una tabulazione o un ritorno a capo; il cast a `unsigned char` è richiesto perché la funzione non accetta valori negativi. Solo se dopo gli spazi c’è il terminatore il valore viene assegnato a `reading`.
:::

:::osservazione
Quando una riga contiene due numeri separati da spazi si chiama `strtol` due volte, la seconda a partire da `end`. Va però controllato anche il separatore. La stringa `"12+3"` verrebbe letta come $12$ seguito da $+3$, perché il segno `+` fa parte del secondo numero. Se la specifica richiede almeno uno spazio fra i due campi, il programma controlla che il carattere puntato da `end` dopo il primo numero sia uno spazio o una tabulazione prima di convertire il secondo, e alla fine controlla che non ci sia altro.
:::

## Scrittura e completamento

:::definizione{#scrittura-controllata titolo="Esito della scrittura e chiusura"}
La funzione `fprintf(file, format, ...)` funziona come `printf` ma scrive sullo stream indicato. Restituisce il numero di caratteri scritti, oppure un valore negativo in caso di errore.

I caratteri scritti passano dal buffer e possono arrivare al file in un secondo momento. La funzione `fflush(file)` li trasferisce subito, e `fclose` lo fa prima di chiudere. Un errore di scrittura può quindi manifestarsi soltanto in queste due chiamate, e per questo se ne controlla il risultato. Quando l’uscita è `stdout`, che non va chiuso, si chiama `fflush(stdout)` e se ne controlla il risultato prima di terminare il programma.
:::

:::esempio{titolo="Misura con segno e separatore"}
La chiamata `fprintf(file, "%d\n", -125)` scrive il segno meno, tre cifre e un ritorno a capo, quindi restituisce $1+3+1=5$. Il ritorno a capo va scritto anche dopo l’ultima misura, così chi rilegge il file trova tutte le righe complete.
:::

## Aggregazione di record validi

::::teorema{#aggregati-file titolo="Invariante dell’aggregazione"}
Molti programmi di laboratorio leggono un file una riga alla volta e sommano soltanto i valori delle righe che soddisfano una condizione. Siano $r_1,\ldots,r_k$ i record già letti, cioè i dati ricavati dalle righe, sia $P(r)$ la condizione che seleziona i record da sommare e $v(r)$ il valore di un record. La variabile $s$ parte da zero, e per ogni record letto si aggiunge $v(r)$ a $s$ soltanto se $P(r)$ è vera. Se nessuna somma dà overflow, dopo $k$ record vale
$$
s = \sum_{\substack{1\le i\le k\\P(r_i)}}v(r_i).
$$
In parole, $s$ è la somma dei valori dei record selezionati fra i primi $k$.
:::dimostrazione
Prima della prima lettura non ci sono record, la somma senza termini vale zero e $s$ vale zero. Se il record successivo soddisfa $P$, alla somma si aggiunge il suo valore e il programma esegue la stessa aggiunta su $s$. Se non la soddisfa, né la somma né $s$ cambiano. L’uguaglianza si conserva quindi a ogni record, e alla fine della lettura riguarda tutti i record del file.
:::
::::

:::esempio{titolo="Due aggregati e controllo incrociato"}
Un file contiene misure di due categorie, `A` e `B`, e si vuole la somma per categoria. Si usano due somme, $s_A$ e $s_B$, ciascuna aggiornata soltanto dai record della propria categoria. Con i record $(A,8)$, $(B,4)$, $(A,-3)$ e $(B,5)$ si ottengono $s_A=8-3=5$ e $s_B=4+5=9$. Come controllo, la somma di tutte le misure è $8+4-3+5=14$, uguale a $5+9$, perché ogni record appartiene a una sola delle due categorie.

Il tipo delle somme si sceglie stimando il valore massimo. Con al più $2000$ righe e valori fra $-100$ e $100$, ogni somma è compresa fra $-200\,000$ e $200\,000$, e sta in un `long`, che per lo standard contiene almeno i valori fino a circa due miliardi.
:::

## Progettazione di una prova completa

:::definizione{#prova-laboratorio titolo="Specifica, componenti e test"}
Il testo di una prova di laboratorio stabilisce quattro cose, cioè il formato di ogni riga, i valori ammessi per ogni campo, che cosa fare delle righe non valide e che cosa stampare. Il programma si divide di conseguenza in parti con un compito ciascuna. Una funzione riceve una riga e ne ricava un record, oppure segnala che la riga non è valida. Il ciclo principale legge le righe e controlla gli errori di lettura. Un’altra funzione aggiorna i risultati con i soli record validi. I dettagli della richiesta vanno letti con attenzione. Se si chiede il primo massimo fra valori uguali, l’aggiornamento usa `>`, mentre `>=` conserverebbe l’ultimo.

Il programma si prova con almeno tre file, cioè uno normale, uno con valori di confine e uno in cui nessuna riga è valida. Per calcolare un massimo si usa una variabile booleana che dice se è già stato trovato almeno un valore, invece di partire da un valore fisso come zero, che con dati tutti negativi darebbe un risultato sbagliato. Altri casi utili sono due massimi uguali e una riga con un campo in più, che deve essere rifiutata.
:::

:::esempio{titolo="Consegna e verifica prima della codifica"}
Un file contiene righe con due interi, la classe e la misura. Le classi ammesse sono $0$, $1$ e $2$, e la misura deve essere compresa fra $10$ e $30$. Il programma stampa la somma delle misure di classe $2$. Con le righe `2 20`, `2 30`, `1 15` e `2 31`, le prime due vengono sommate, la terza è valida ma di un’altra classe, e la quarta ha la misura fuori intervallo. Il risultato atteso è $20+30=50$.

Con le righe `1 10` e `0 30` entrambi i record sono validi, ma nessuno è di classe $2$, e il risultato atteso è $0$. Con le righe `2 20 4` e `2 30` la prima ha un campo in più e viene rifiutata, e il risultato atteso è $30$. Scrivere questi casi con il loro risultato prima di scrivere il codice chiarisce che cosa il programma deve fare.
:::

## Ripetere e verificare la lettura

:::definizione{#posizione-stream titolo="Posizione e stato dello stream"}
Uno stream ricorda la **posizione** a cui è arrivato, e ogni lettura prosegue da lì. Per leggere un file una seconda volta dall’inizio ci sono due modi. Il primo è chiuderlo e riaprirlo. Il secondo è chiamare `fseek(file, 0L, SEEK_SET)`, che riporta la posizione all’inizio e restituisce zero se riesce; la chiamata spegne anche l’indicatore di fine file. La funzione `clearerr(file)` spegne gli indicatori di fine file e di errore senza spostare la posizione.

Prima di una seconda lettura si controlla come è finita la prima. Se `fgets` restituisce `NULL` per un errore, il contenuto del vettore non è utilizzabile, e il programma decide in base a `ferror` se fermarsi o se usare i risultati ottenuti fino a quel punto, quando la specifica lo permette.
:::

:::esempio{titolo="Capacità esatta e rilettura"}
Un file contiene la riga `91753` con il ritorno a capo, cioè sei caratteri. Con un vettore di capacità $6$ la prima chiamata a `fgets` legge le cinque cifre, e il ritorno a capo resta per la chiamata successiva. Con capacità $7$ la prima chiamata legge la riga intera. Per provare le due capacità sullo stesso file, fra una prova e l’altra il file va riaperto oppure riportato all’inizio con `fseek`. In entrambe le prove la riga è una sola, e il programma la riconosce come conclusa quando trova il ritorno a capo.
:::

:::osservazione
Un controllo simile alla somma per categorie vale per le durate. Si supponga che il file registri, in ordine di tempo, gli istanti $t_0,\ldots,t_{k-1}$ in cui una grandezza cambia livello, e che il livello registrato all’istante $t_i$ duri fino all’istante successivo, cioè per un tempo $t_{i+1}-t_i$. La durata si può calcolare soltanto quando si legge il record successivo. Sommando tutte le durate i tempi intermedi si cancellano, e il totale è $t_{k-1}-t_0$. Il tempo totale passato a un certo livello è quindi compreso fra zero e $t_{k-1}-t_0$, e la somma dei tempi di tutti i livelli deve dare esattamente $t_{k-1}-t_0$.
:::
