---
titolo: File di testo e prova di laboratorio
sommario: Dall’apertura di uno stream alla validazione delle righe, con aggregazione e verifica completa di una prova in C17.
---

## File esterno e stream

:::definizione{#stream titolo="Stream di testo"}
Uno **stream** mette in relazione il programma con una sorgente o una destinazione di dati. In C17 le funzioni di ingresso e uscita su stream sono dichiarate in `<stdio.h>`. Il tipo `FILE` rappresenta le informazioni che la libreria usa per gestire l’operazione. Un puntatore di tipo `FILE *` identifica lo stream e si passa alle funzioni che lo leggono, lo scrivono o lo chiudono. Ogni lettura riuscita consuma una parte dell’ingresso. Le letture successive riprendono dalla posizione risultante.

Uno **stream di testo** fornisce caratteri organizzati in righe. Il carattere `'\n'` rappresenta il ritorno a capo nel programma. L’ambiente può convertire la rappresentazione esterna durante la lettura o la scrittura. Nel ragionamento sul programma si usano i caratteri osservabili attraverso lo stream. Per esempio, la riga `73` seguita da un ritorno a capo fornisce i caratteri `'7'`, `'3'` e `'\n'`.
:::

:::osservazione
Il file esterno e lo stream hanno durate distinte. Aprire un file stabilisce la relazione tra il nome e lo stream. Chiudere lo stream conclude quella relazione. Un altro programma può riaprire lo stesso file per leggere i dati persistenti. Lo stesso programma può aprire più stream, per esempio uno per l’ingresso delle misure e uno per il rapporto prodotto. L’indicatore di fine file di uno stream riguarda la sua lettura. L’esito di scrittura dello stream del rapporto si controlla a parte.

Per descrivere una prova si specificano il contenuto iniziale del file, il modo di apertura e le operazioni riuscite. Indicare anche l’ordine delle operazioni consente di ricostruire quali caratteri vengono letti e quali restano nel file.
:::

## Apertura con il modo richiesto

:::definizione{#apertura titolo="Modo e risultato di fopen"}
`fopen(name, mode)` apre il file identificato da `name` nel modo richiesto dalla stringa `mode`. Restituisce un puntatore allo stream se l’apertura riesce, oppure un puntatore nullo. I tre modi impiegati in questo capitolo sono `"r"` per la lettura di un file esistente, `"w"` per la scrittura a partire da un file vuoto e `"a"` per la scrittura in coda. I modi `"w"` e `"a"` possono creare il file. Un’apertura riuscita in `"w"` tronca un file che esiste già. In `"a"` le scritture si aggiungono alla fine del file.

Questo comportamento determina la scelta del modo nell’enunciato. Un rapporto da rigenerare si apre in `"w"`. Un registro che conserva le misure già acquisite si estende con `"a"`. Se il solo scopo è esaminare il registro, il modo pertinente è `"r"`.
:::

:::esempio{titolo="Scrittura dopo un controllo"}
Se il registro contiene la riga `41`, il codice aggiunge una seconda riga con `52` quando tutte le operazioni riescono.

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

Il frammento appartiene a `main` e richiede `<stdio.h>` e `<stdlib.h>`. Dopo l’apertura riuscita la chiusura si esegue anche se `fputs` segnala un errore. Dopo `fclose` è terminata l’associazione con quello stream. Il risultato della chiusura può segnalare un errore di scrittura di dati che erano ancora nel buffer della libreria.
:::

:::attenzione
Controllare `log != NULL` verifica l’apertura. Il valore di ritorno di `fputs` e quello di `fclose` rispondono a domande successive, quindi un programma che annuncia di aver completato il rapporto controlla anche questi due risultati. Un’apertura riuscita in `"w"` ha già l’effetto di troncamento, anche quando il programma ritorna prima di chiamare una funzione di scrittura.
:::

## Lettura e fine del file

:::definizione{#fine-flusso titolo="Caratteri, EOF e indicatori"}
`fgetc(file)` restituisce un carattere come valore di tipo `int` oppure `EOF`, un valore negativo definito in `<stdio.h>`. Per i caratteri del testo impiegati nelle tracce il valore ottenuto distingue sempre un carattere letto correttamente da `EOF`. Conservare il risultato in un `int` consente di fare il confronto prima di qualsiasi conversione verso un tipo carattere.

Il valore `EOF` indica che la chiamata non ha prodotto un carattere. `feof(file)` interroga l’indicatore di fine file dello stream. `ferror(file)` interroga l’indicatore di errore. Ciascuna funzione dà zero quando il relativo indicatore è spento e un valore diverso da zero quando è acceso. Dopo il ciclo, `ferror(file) != 0` permette di rilevare una lettura interrotta da un errore. La verifica avviene prima di chiudere lo stream.
:::

:::esempio{titolo="Misurare i separatori"}
Un file fornisce la sequenza `A\nB\nC\n`. Per studiare il numero di ritorni a capo bastano un contatore e la variabile che conserva l’ultimo risultato. Si assume che il conteggio sia rappresentabile come `size_t`.

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

Il contatore aumenta dopo ciascun ritorno a capo, quindi vale $3$ quando tutte le letture riescono. La chiamata successiva restituisce `EOF` per raggiunta fine del file. Se la terza riga è l’ultima e il suo ritorno a capo manca nel flusso osservato, i separatori letti sono $2$. Il numero di separatori e il numero di righe logiche coincidono quando ogni riga ha un ritorno a capo finale.
:::

:::attenzione
La condizione `!feof(file)` descrive lo stato dello stream prima della lettura. La prossima operazione può ancora fallire e accendere l’indicatore. Il ciclo controlla quindi l’esito della lettura e aggiorna i risultati all’interno della parte che elabora un dato effettivamente ottenuto. Per un file che fornisce una sola misura, questo ordine impedisce di elaborare la vecchia misura una seconda volta dopo il tentativo successivo.
:::

## Righe e frammenti

:::definizione{#fgets titolo="Contratto di fgets"}
Per un array `buffer` con almeno `capacity` elementi e `capacity` maggiore o uguale a $2$, `fgets(buffer, capacity, file)` legge al più `capacity - 1` caratteri. Si ferma anche quando legge il ritorno a capo, che conserva nell’array, oppure quando incontra la fine del file. Dopo una lettura riuscita aggiunge `'\0'`. Il valore restituito è `buffer` se la lettura riesce. Interrogare il valore restituito prima di usare la stringa è parte del contratto.

Con capacità $5$, la lettura iniziale della riga `1234567` seguita da un ritorno a capo produce la stringa `"1234"`. Nel buffer i primi quattro posti contengono le quattro cifre e l’ultimo contiene `'\0'`. La prossima lettura parte da `'5'`. Ottiene `"567\n"` perché quattro caratteri riempiono lo spazio disponibile e il quarto è già il separatore.
:::

:::definizione{#validazione-righe titolo="Confine di una riga"}
Il programma specifica quali righe sono ammesse prima di convertirle. In una prova con righe sempre terminate da ritorno a capo, testo senza caratteri nulli interni e capacità sufficiente per ogni riga valida, `strchr(buffer, '\n')` individua il separatore dopo una lettura riuscita. Se il separatore manca, il programma classifica la riga come incompleta o troppo lunga secondo la specifica. Se decide di proseguire dopo una riga troppo lunga, consuma fino al suo separatore oppure fino alla fine del file e ricontrolla gli errori. Così il frammento successivo resta associato alla stessa riga fisica.

Con un limite di $60$ caratteri prima del ritorno a capo e un buffer da $64$, una riga valida può stare per intero nell’array. Contiene al più $60+1$ caratteri di testo, quindi anche il terminatore di stringa trova posto. Se il programma accetta l’ultima riga priva di separatore, specifica quel caso e distingue la fine normale da una lettura ripresa che trova altri caratteri.
:::

## Interpretazione dei campi numerici

:::definizione{#conversione-controllata titolo="Conversione con strtol"}
`strtol(text, &end, 10)` tenta di leggere un intero in base dieci e restituisce un `long`. Nella locale C riconosce gli spazi iniziali, l’eventuale segno e una sequenza di cifre. Se c’è una conversione, `end` punta al primo carattere dopo la parte letta. Se le cifre mancano, `end` coincide con `text`. Impostare `errno = 0` prima della chiamata consente di attribuire un eventuale `ERANGE` a questa conversione.

Questi controlli sono distinti dalla convalida dei valori ammessi dall’esercizio. Se il programma accetta soltanto misure tra $-100$ e $100$, si verifica anche quell’intervallo in `long` prima di convertire verso `int`. La rappresentabilità come `int` segue dai limiti scelti. Per controllare che la riga contenga proprio un numero, dopo le cifre si accettano soltanto eventuali spazi e il terminatore.
:::

:::esempio{titolo="Una riga con un intero"}
La riga fornita dal file contiene uno spazio, le cifre di `27` e un ritorno a capo. La conversione restituisce `27` e lascia il puntatore sul ritorno a capo. La procedura salta tutti i caratteri di spazio ammessi dalla locale C, compreso il separatore, e verifica il terminatore. Per `"27x\n"`, il puntatore è invece sul carattere `'x'`. Il controllo sulla parte residua distingue i due casi.

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

Il frammento usa `<errno.h>`, `<stdlib.h>` e `<ctype.h>`. Per la verifica si assume che i caratteri di ingresso siano quelli del repertorio di base impiegato nel corso. Il cast nella chiamata a `isspace` mantiene il valore nel dominio dei caratteri senza segno. Il controllo finale sulla parte residua distingue una riga intera da un prefisso interpretabile.
:::

:::osservazione
Con due campi separati da spazi orizzontali serve controllare anche il delimitatore. Per esempio, due conversioni consecutive potrebbero interpretare `"12+3"` come `12` seguito da `+3`. Se la specifica richiede almeno uno spazio o una tabulazione tra i campi, il programma controlla il carattere puntato da `end` dopo il primo campo e chiama la seconda conversione soltanto se il delimitatore è presente. Si controllano poi il dominio del secondo valore e l’assenza di altri token.
:::

## Scrittura e completamento

:::definizione{#scrittura-controllata titolo="Esito della scrittura e chiusura"}
`fprintf(file, format, ...)` formatta i dati e li scrive sullo stream. In caso di successo restituisce il numero di caratteri trasmessi secondo il formato. Un esito negativo segnala un errore di scrittura o di codifica. Il conteggio riguarda i caratteri dello stream e include gli eventuali separatori del formato.

Se una scrittura usa un buffer, i dati possono essere ancora in attesa nella libreria dopo il ritorno di `fprintf`. `fflush(file)` consegna all’ambiente ospite i dati in attesa su uno stream di uscita. `fclose` esegue anche lo svuotamento dei dati in attesa e il suo risultato permette di rilevare un eventuale errore. Se l’output è `stdout`, mantenere lo stream utilizzabile e chiamare `fflush(stdout)` permette di testare quell’esito prima di restituire il codice dal programma.
:::

:::esempio{titolo="Misura con segno e separatore"}
Nella locale C, `fprintf(file, "%d\n", -125)` trasmette il segno meno, tre cifre e un ritorno a capo. Se riesce restituisce $1+3+1=5$. In un rapporto con una misura per riga, il carattere finale permette alla procedura di lettura di riconoscere il confine della riga anche quando quella misura è l’ultima. Il conteggio delle cifre è diverso dal numero complessivo di caratteri prodotti.
:::

## Aggregazione di record validi

::::teorema{#aggregati-file titolo="Invariante dell’aggregazione"}
Siano $r_1,\ldots,r_k$ i record già esaminati. Un predicato $P$ identifica i record validi che interessano il calcolo, e $v(r)$ è il valore da sommare di un record ammesso. A ogni passo si aggiunge $v(r)$ alla variabile $s$ se $P(r)$ è vero. Se $s$ parte da zero e ogni somma intermedia è rappresentabile, dopo $k$ passi vale
$$
s = \sum_{\substack{1\le i\le k\\P(r_i)}}v(r_i).
$$

:::dimostrazione
Prima della prima lettura non è stato esaminato alcun record. La somma vuota vale zero e coincide con il valore iniziale. Se il record successivo soddisfa $P$, la somma prescritta acquista esattamente il suo valore. L’istruzione di accumulazione esegue quell’aggiunta. Se $P$ è falso, sia l’insieme dei record ammessi sia $s$ restano uguali. In entrambi i casi la proprietà si conserva dopo il passo. Alla fine di una lettura completata, il prefisso esaminato coincide con l’intero ingresso.
:::
::::

:::esempio{titolo="Due aggregati e controllo incrociato"}
Per le misure di categoria `A` e `B` si mantengono due somme, una per categoria. I record $(A,8)$, $(B,4)$, $(A,-3)$, $(B,5)$ producono dopo l’ultimo passo $s_A=5$ e $s_B=9$. La somma diretta delle quattro misure è $8+4-3+5=14$ e coincide con $5+9$. Questo controllo segue dal fatto che le categorie formano una partizione dei record validi. Se una categoria sconosciuta deve essere esclusa, il confronto usa la somma diretta dei soli record ammessi.

Prima di scegliere il tipo degli accumulatori conviene applicare un limite. Con al più $2000$ righe valide e valori in $[-100,100]$, il valore assoluto di ogni somma parziale è al più $200000$. Tale limite rientra nel dominio garantito di `long` in C17. Grazie al controllo preliminare, l’invariante matematico è utilizzabile anche come proprietà del valore memorizzato dal programma.
:::

## Progettazione di una prova completa

:::definizione{#prova-laboratorio titolo="Specifica, componenti e test"}
Una consegna di laboratorio specifica il formato di ogni record, il dominio dei campi, il trattamento delle righe non valide e la forma dell’uscita. Le funzioni sono organizzate in base a queste responsabilità. Una funzione trasforma la riga in un record valido, il ciclo principale governa la lettura e una funzione di aggregazione aggiorna soltanto lo stato relativo ai record ammessi. Se la specifica richiede il primo massimo, l’aggiornamento usa un confronto stretto. La condizione più ampia che include l’uguaglianza realizza la scelta dell’ultimo massimo.

Una verifica efficace comprende un ingresso normale, un caso di confine e un caso in cui nessuna riga viene accettata. Per il massimo, una variabile booleana segnala se esiste già un candidato. In questo modo un numero arbitrario, per esempio zero, non viene confuso con il massimo di una sequenza di valori negativi. Una prova con due massimi uguali controlla quale identificativo viene mantenuto. Una riga con un campo extra controlla che il parser distingua l’intera riga dal solo prefisso.
:::

:::esempio{titolo="Consegna e verifica prima della codifica"}
Un sensore registra righe formate da classe e misura. Le classi ammesse sono $0$, $1$ e $2$ e la misura deve stare tra $10$ e $30$. Il rapporto contiene la somma della sola classe $2$. Il parser controlla entrambi i campi e il resto della stringa prima di consegnare il record al ciclo. Per le righe `2 20`, `2 30`, `1 15` e `2 31` l’ultima è fuori dal dominio dei valori. Le prime due contribuiscono e la terza appartiene a un’altra classe. Il risultato atteso per questo caso è quindi $20+30=50$.

Un secondo caso fornisce `1 10` e `0 30`. Entrambi i record sono validi, ma la somma della classe $2$ resta zero. Un terzo caso fornisce `2 20 4` e `2 30`. Il campo extra invalida il primo record e l’uscita attesa è $30$. Questi casi legano la correttezza della conversione, la regola di selezione e il valore finale. La scheda di laboratorio aggiunge il controllo degli esiti di apertura, lettura e scrittura a questo ragionamento.
:::

## Ripetere e verificare la lettura

:::definizione{#posizione-stream titolo="Posizione e stato dello stream"}
La posizione fa parte dello stato dello stream. Due chiamate a `fgets` sullo stesso puntatore, una dopo l’altra, iniziano in posizioni diverse quando la prima ha consumato caratteri. Per rielaborare un file si può chiuderlo e riaprirlo in lettura. Lo stream nuovo parte dall’inizio del file nel suo stato attuale. Su un file di testo un conteggio dei caratteri letti non dà in generale un offset portabile. Una chiamata a `fseek(file, 0L, SEEK_SET)` con esito zero riposiziona uno stream che supporta l’operazione all’inizio e azzera l’indicatore di fine file. `clearerr` azzera i due indicatori e lascia nella stessa posizione lo stream.

Il programma distingue gli esiti dei due passaggi. Se la prima scansione termina con un errore, si prende una decisione sulla base di quell’esito prima di iniziare l’altra. Quando `fgets` restituisce `NULL` per errore di lettura, il contenuto dell’array è indeterminato. Dopo il ciclo si usano gli indicatori e i risultati già accumulati. Il codice potrà segnalare un aggregato riferito al prefisso quando la specifica ammette risultati parziali.
:::

:::esempio{titolo="Capacità esatta e rilettura"}
Un file di prova contiene una riga con `91753` e il ritorno a capo. Il testo richiede sei caratteri e un terminatore di stringa. Con capacità $6$, una prima lettura conserva le cinque cifre. La seconda può fornire il solo ritorno a capo. La stessa riga con capacità $7$ è fornita tutta dalla prima lettura. Per effettuare la seconda prova sullo stesso file serve una nuova apertura in lettura oppure un riposizionamento riuscito. Si confrontano due scansioni distinte dello stesso contenuto. L’invariante riguarda le righe fisiche, quindi la presenza del separatore determina quando aggiornare gli aggregati.
:::

:::osservazione
Per verificare una durata da un registro vale una proprietà analoga a un controllo di somma. Siano $t_0,\ldots,t_{k-1}$ i tempi in ordine non decrescente e $\ell_i$ il livello associato a $t_i$. Il livello del record di indice $i$ vale su $[t_i,t_{i+1})$. La lettura di un nuovo record permette di concludere l’intervallo precedente. Due tempi consecutivi uguali delimitano un intervallo vuoto. La somma di tutte le durate vale $t_{k-1}-t_0$ per $k\ge 1$, perché i tempi interni si cancellano nella somma delle differenze. Un aggregato per un singolo livello è compreso fra zero e questa durata totale. L’uso dei soli estremi temporali verifica quindi un limite sul valore prodotto dal ciclo senza ripetere la sua selezione dei record.
:::
