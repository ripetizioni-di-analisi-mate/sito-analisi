---
titolo: "Ragionamento logico e problemi"
sommario: "Enunciati, condizioni, quantificatori, insiemi, vincoli e procedure con esempi, figure e controllo delle conclusioni."
---

## Enunciati e valori di verità

:::definizione{#enunciati titolo="Enunciati e premesse"}
Un **enunciato** è una frase alla quale, nel contesto considerato, si può attribuire il valore vero oppure falso. «Il codice contiene quattro cifre» è un enunciato; «inserire il codice» è un'istruzione. Le lettere $P,Q,R$ rappresentano enunciati completi. La lettera conserva lo stesso significato per tutto il ragionamento, anche quando ricompare dentro una formula più lunga.

Le **premesse** sono le informazioni assunte come vere. Una conclusione è una conseguenza delle premesse quando è vera in ogni situazione che le soddisfa. La plausibilità quotidiana della conclusione non sostituisce questo controllo. Se il testo afferma che tutti i mezzi elettrici del deposito sono rossi, la deduzione riguarda proprio quel deposito, anche se altrove esistono mezzi elettrici di altri colori.
:::

:::esempio{titolo="Una conclusione possibile e una necessaria"}
Tutti i campioni numerati sono catalogati. Il campione $a$ è catalogato. Il campione potrebbe essere numerato, ma potrebbe anche appartenere alla parte dei catalogati priva di numero. Le premesse ammettono entrambi i casi, quindi la numerazione di $a$ è **indeterminata**. Se invece il dato sul campione fosse «$a$ è numerato», la catalogazione seguirebbe dalla regola e sarebbe una conclusione necessaria.

Un **controesempio** è una situazione in cui tutte le premesse sono vere e la conclusione proposta è falsa. Basta un controesempio per escludere una deduzione; per dimostrarla occorre coprire tutte le situazioni ammesse. Questa differenza spiega perché trovare un caso favorevole non dimostra una conclusione universale.
:::

:::osservazione
«Può essere vero» richiede almeno una situazione compatibile; «deve essere vero» richiede tutte le situazioni compatibili; «è impossibile» richiede che nessuna lo sia. Le tre richieste possono riferirsi alle stesse premesse e avere risposte diverse. Le informazioni non espresse rimangono libere, salvo che siano determinate dalle altre condizioni.
:::

## Connettivi e negazioni

:::definizione{#connettivi titolo="Congiunzione e disgiunzione"}
La **congiunzione** $P\land Q$ è vera quando entrambi gli enunciati sono veri. La **disgiunzione inclusiva** $P\lor Q$ è vera quando almeno uno è vero, compreso il caso in cui lo siano entrambi. La negazione $\neg P$ cambia il valore di verità di $P$. Nella tabella, V significa vero e F significa falso.

| $P$ | $Q$ | $P\land Q$ | $P\lor Q$ |
| --- | --- | --- | --- |
| V | V | V | V |
| V | F | F | V |
| F | V | F | V |
| F | F | F | F |

La frase «esattamente uno» richiede almeno un enunciato vero ed esclude che siano veri entrambi. Si esprime quindi con $(P\lor Q)\land\neg(P\land Q)$. La sola parola «oppure», in assenza di altre precisazioni, viene letta in senso inclusivo nei quesiti di questo capitolo.
:::

::::teorema{#de-morgan titolo="Leggi di De Morgan"}
Per enunciati qualunque $P,Q$ valgono le equivalenze
$$
\neg(P\land Q)\iff(\neg P)\lor(\neg Q),
$$
$$
\neg(P\lor Q)\iff(\neg P)\land(\neg Q).
$$
Servono a negare un requisito composto senza perderne i casi ammessi.

:::dimostrazione
La congiunzione è falsa in tre righe della tabella, precisamente quelle in cui almeno uno dei due enunciati è falso. Perciò la sua negazione equivale alla disgiunzione delle negazioni. La disgiunzione è falsa soltanto nell'ultima riga, dove entrambi sono falsi. Quindi la sua negazione equivale alla congiunzione delle negazioni.
:::
::::

:::esempio{titolo="Requisiti di una richiesta"}
Una richiesta è completa esattamente quando presenta la firma e almeno un recapito fra telefono ed email. Indicando questi tre fatti con $F,T,E$, la completezza è $F\land(T\lor E)$. La richiesta è incompleta quando
$$
\neg\bigl(F\land(T\lor E)\bigr)
\iff \neg F\lor(\neg T\land\neg E).
$$
Basta dunque che manchi la firma, oppure che manchino entrambi i recapiti. La presenza della firma da sola lascia aperta la completezza della richiesta.
:::

## Implicazioni e condizioni

:::definizione{#implicazione titolo="Implicazione"}
L'enunciato $P\Rightarrow Q$, letto «se $P$, allora $Q$», esclude soltanto il caso in cui $P$ è vero e $Q$ falso. $P$ è detto antecedente e $Q$ conseguente. Per esempio, «se il sensore rileva fumo, invia un avviso» viene violato quando il sensore rileva fumo e nessun avviso viene inviato.

| $P$ | $Q$ | $P\Rightarrow Q$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

La tabella dà due scritture utili. L'implicazione equivale a $\neg P\lor Q$; la sua negazione equivale a $P\land\neg Q$. Quando l'antecedente è falso, la regola non determina il valore del conseguente.
:::

::::teorema{#contrapposta titolo="Contrapposizione e deduzione"}
L'implicazione $P\Rightarrow Q$ equivale alla **contrapposta** $\neg Q\Rightarrow\neg P$. Da $P\Rightarrow Q$ insieme a $P$ segue $Q$; dalla stessa regola insieme a $\neg Q$ segue $\neg P$.

:::dimostrazione
Le due implicazioni sono false nello stesso caso, cioè $P$ vero e $Q$ falso, quindi hanno sempre lo stesso valore. Se la regola è vera e $P$ è vero, il caso $Q$ falso è escluso. Se la regola è vera e $Q$ è falso, il caso $P$ vero è escluso. Questo giustifica entrambe le deduzioni senza informazioni aggiuntive.
:::
::::

:::definizione{#necessario-sufficiente titolo="Condizioni necessarie e sufficienti"}
In $P\Rightarrow Q$, $P$ è **sufficiente** per $Q$, mentre $Q$ è **necessaria** per $P$. «Si entra solo se si possiede il badge» significa ingresso $\Rightarrow$ badge. «Il badge basta per entrare» significa badge $\Rightarrow$ ingresso. Le due frasi esprimono vincoli diversi. Se valgono entrambe, si scrive ingresso $\iff$ badge e si parla di condizione necessaria e sufficiente.

La frase «la visita si svolge salvo chiusura del museo», intesa come garanzia in tutti i casi di apertura, significa museo aperto $\Rightarrow$ visita. Quando il museo è chiuso, questa frase da sola non stabilisce se la visita possa svolgersi altrove. Il significato delle eccezioni dipende quindi dalla formulazione precisa del quesito.
:::

:::attenzione
Da «se piove, il cortile è bagnato» e «il cortile è bagnato» non segue che piova. Il cortile potrebbe essere stato lavato. Analogamente, l'assenza di pioggia non garantisce un cortile asciutto. Questi due errori scambiano la regola con la sua inversa o con la negazione dei due membri senza invertirne l'ordine.
:::

## Quantificatori e insiemi

:::definizione{#quantificatori titolo="Tutti, alcuni, nessuno"}
Il quantificatore **universale** «tutti» riguarda ogni elemento di un insieme. Il quantificatore **esistenziale** «alcuni», nei quesiti logici, significa almeno uno. «Tutti gli A sono B» si rappresenta con $A\subseteq B$; «alcuni A sono B» richiede $A\cap B\ne\varnothing$; «nessun A è B» richiede $A\cap B=\varnothing$.

Una proprietà universale non afferma l'esistenza di elementi. Se il laboratorio non possiede microscopi, «tutti i microscopi del laboratorio sono revisionati» non viene smentita da alcun oggetto. Per dedurre che esiste uno strumento revisionato occorre anche sapere che almeno un microscopio esiste.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="Tutti gli A sono B: A è contenuto in B"}
:::

:::teorema{#negazione-quantificatori titolo="Negazione dei quantificatori"}
La negazione di «tutti gli A sono B» è «esiste almeno un A che non è B». La negazione di «alcuni A sono B» è «nessun A è B». La negazione di «nessun A è B» è «almeno un A è B». Negare «esattamente uno» significa ammettere zero oppure almeno due elementi con la proprietà.

Per negare «ogni studente ha letto almeno un testo» occorre uno studente che non abbia letto alcun testo. Affermare che ogni studente ha lasciato almeno un testo da leggere sarebbe diverso: anche chi ha letto molti testi potrebbe soddisfare quest'ultima frase.
:::

:::esempio{titolo="Un testimone che attraversa due premesse"}
Alcuni tecnici sono volontari e tutti i volontari sono assicurati. La prima premessa garantisce una persona che è insieme tecnico e volontario. La seconda si applica a quella stessa persona, quindi **alcuni tecnici sono assicurati**. Non si conclude che tutti i tecnici siano assicurati, perché i tecnici esterni al gruppo dei volontari restano senza vincoli.

Da «alcuni A sono B» e «alcuni B sono C» non segue invece che alcuni A siano C. Due elementi distinti possono soddisfare le due esistenze: uno appartiene ad A e B, l'altro a B e C, e nessuno appartiene ad A e C. L'identità dell'elemento usato nella deduzione è quindi decisiva.
:::

:::osservazione
Nella frase «ogni studente consulta un tutor» il tutor può cambiare da studente a studente. «Esiste un tutor consultato da tutti gli studenti» richiede una singola persona comune. La seconda frase implica sempre la prima: il tutor comune fornisce un testimone per ciascuno studente. La prima non garantisce invece la seconda. L'ordine delle espressioni «ogni» ed «esiste» modifica ciò che viene affermato.
:::

## Conteggi con insiemi

:::definizione{#conteggi-insiemi titolo="Regioni disgiunte"}
Per un insieme finito $A$, il simbolo $|A|$ indica il suo numero di elementi. Con due proprietà si distinguono quattro regioni: solo A, solo B, entrambe, nessuna. Queste regioni sono **disgiunte**, quindi i loro conteggi si possono sommare senza contare due volte una persona. Se $N$ è il totale del gruppo, la somma delle quattro regioni vale $N$.

::venn{tipo="due" nomi="A,B" universo="1" elementi="a:12;ab:5;b:8;u:7" titolo="Le quattro regioni contengono in totale 32 elementi"}

Nel diagramma $|A|=12+5=17$, $|B|=8+5=13$, l'unione contiene $25$ elementi e il gruppo intero ne contiene $32$. Gli elementi con esattamente una proprietà sono $12+8=20$.
:::

::::teorema{#inclusione-esclusione titolo="Inclusione ed esclusione"}
Per due insiemi finiti,
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
Gli elementi con esattamente una proprietà sono
$$
|A|+|B|-2|A\cap B|.
$$

:::dimostrazione
Nella somma $|A|+|B|$ gli elementi comuni vengono contati due volte, mentre gli altri vengono contati una volta. Per l'unione occorre mantenere una copia di ogni elemento comune, quindi si sottrae l'intersezione una volta. Per escludere completamente gli elementi comuni occorre sottrarre entrambe le copie, quindi l'intersezione viene sottratta due volte.
:::
::::

:::esempio{titolo="Un limite inferiore senza conoscere l'intersezione"}
Fra $30$ persone, $19$ parlano francese e $16$ parlano tedesco. Le iscrizioni complessive sono $35$, ma le persone sono soltanto $30$. Perciò almeno $5$ persone compaiono in entrambi i gruppi. In generale,
$$
\max(0,|A|+|B|-N)\le |A\cap B|\le\min(|A|,|B|).
$$
Il limite inferiore si raggiunge rendendo l'unione più grande possibile; quello superiore si raggiunge includendo il gruppo più piccolo nel maggiore. Per dichiarare che un minimo o massimo è raggiungibile occorre descrivere anche una distribuzione che lo realizzi.
:::

:::osservazione
Con tre insiemi si sommano i tre conteggi, si sottraggono le tre intersezioni a coppie e si aggiunge l'intersezione tripla. Le intersezioni a coppie comprendono gli elementi comuni a tutti e tre, salvo diversa indicazione. Un elemento comune ai tre viene sommato tre volte e sottratto tre volte; l'ultima aggiunta lo fa contare una sola volta.
:::

## Ordinamenti, abbinamenti e reti

:::definizione{#vincoli titolo="Vincoli e configurazioni"}
Un **vincolo** limita le configurazioni ammesse. In un ordine senza parità, $A<B$ significa che A precede B. Da $A<B$ e $B<C$ segue $A<C$. «Subito prima» richiede inoltre che non ci sia alcun elemento intermedio. Negli abbinamenti uno a uno, ogni persona riceve un solo ruolo e ogni ruolo viene assegnato una sola volta.

Una tabella può registrare gli abbinamenti possibili. Se un ruolo è già occupato, viene escluso per le altre persone. Se una persona ha una sola possibilità rimasta, quell'abbinamento è obbligato. Quando rimangono più possibilità, si esaminano separatamente i casi, mantenendo in ciascuno tutti i vincoli iniziali.
:::

:::esempio{titolo="Un blocco di attività consecutive"}
Quattro attività A, B, C, D occupano quattro turni. B si svolge immediatamente dopo A, C precede A e D chiude. Il blocco AB può occupare soltanto i turni $2$ e $3$, perché deve lasciare C prima e D dopo. L'ordine completo è quindi C, A, B, D. Il vincolo di adiacenza aggiunge un'informazione che la sola relazione $A<B$ non contiene.

Se invece si sapesse soltanto che A precede C, con B e D liberi, molti ordini sarebbero ammessi. Per rispondere «chi può essere primo» basta costruire un ordine valido per ciascun candidato; per rispondere «chi deve essere primo» occorre che tutti gli ordini validi inizino con la stessa persona.
:::

:::definizione{#reti titolo="Collegamenti e percorsi"}
Una rete è descritta da vertici, che rappresentano luoghi o attività, e collegamenti fra vertici. Nei quesiti diretti, ogni collegamento ha un verso; nei quesiti non diretti si può percorrerlo in entrambe le direzioni. Un percorso è una successione di collegamenti consecutivi. La possibilità di raggiungere un luogo dipende dai collegamenti disponibili, non dalla distanza visiva fra le etichette.

In una rete con collegamenti A–B, B–C e B–D, ogni percorso da A a D passa per B. Togliendo B si separa A dal resto. Se si aggiunge A–D, quel passaggio obbligato scompare. Per contare percorsi di lunghezza fissata si possono elencare i successori di ogni posizione, rispettando eventuali divieti di ripetizione.
:::

## Successioni, procedure e garanzie

:::definizione{#procedure titolo="Stato iniziale e istruzioni"}
Una procedura specifica uno stato iniziale e una regola di aggiornamento. Per esempio, partire da $4$, raddoppiare e poi sottrarre $1$ significa ottenere $8$ e poi $7$. La frase «dopo due operazioni» riguarda $7$, mentre «il secondo valore, contando quello iniziale» riguarda $8$. Il conteggio delle operazioni va quindi distinto dal conteggio dei valori elencati.

Nelle successioni periodiche, un blocco di lunghezza $k$ si ripete. La divisione della posizione per $k$ individua il posto nel blocco: un resto zero corrisponde all'ultimo posto. In una successione definita ricorsivamente, come $a_{n+2}=a_{n+1}+a_n$, ciascun valore usa i valori già ottenuti, e le condizioni iniziali devono essere assegnate.
:::

:::attenzione
Un elenco finito, senza una regola o una classe di regole dichiarata, ammette molte continuazioni. I quesiti di questo capitolo esplicitano la procedura oppure chiedono quale fra le regole proposte sia compatibile con tutti i dati. La somiglianza dei primi incrementi da sola non dimostra un'unica continuazione.
:::

::::teorema{#cassetti titolo="Principio dei cassetti"}
Se più di $kr$ oggetti vengono distribuiti in $k$ gruppi, almeno un gruppo contiene almeno $r+1$ oggetti.

:::dimostrazione
Se ciascun gruppo contenesse al massimo $r$ oggetti, il totale sarebbe al massimo $kr$. Un totale maggiore rende impossibile questa situazione, quindi almeno un gruppo supera $r$. Per stabilire il minimo numero che garantisce la proprietà si verifica anche che $kr$ oggetti possano davvero essere distribuiti con $r$ in ogni gruppo.
:::
::::

:::esempio{titolo="Garantire un colore o una ripetizione"}
Un sacchetto contiene $4$ gettoni rossi e $6$ blu. Per garantire almeno un rosso occorrono $7$ estrazioni senza reinserimento: potrebbero uscire prima tutti i sei blu. Per garantire due gettoni dello stesso colore ne bastano $3$, perché due colori possono ospitare al massimo un gettone ciascuno senza ripetizioni. Le due domande usano casi peggiori diversi, pur riferendosi allo stesso sacchetto.
:::

## Argomentazioni e controllo delle conclusioni

:::definizione{#argomentazioni titolo="Ipotesi e conclusioni di un argomento"}
Un argomento collega dati e conclusione attraverso una regola, talvolta lasciata implicita. «Il nuovo orario è utile perché le presenze sono aumentate» usa un dato sulle presenze per valutare l'orario. Per attribuire l'aumento all'orario occorre escludere spiegazioni alternative rilevanti, come un aumento degli iscritti o una diversa modalità di registrazione.

Un'informazione **rafforza** l'argomento se rende più giustificato il collegamento; lo **indebolisce** se propone un dato contrario o una spiegazione alternativa. Nessuno dei due verbi significa necessariamente dimostrare o confutare in modo definitivo. La domanda può chiedere soltanto quale informazione sia più pertinente alla conclusione formulata.
:::

:::esempio{titolo="Un confronto controllato"}
Due gruppi svolgono la stessa prova. Un gruppo ha studiato con una nuova scheda e ottiene risultati migliori. Se il gruppo era già più preparato prima di usare la scheda, il risultato finale da solo non isola l'effetto del materiale. Se invece le condizioni iniziali e il tempo di studio sono comparabili, il confronto fornisce un sostegno più diretto all'utilità della scheda. Rimane distinta l'osservazione dei risultati dalla conclusione causale.
:::

:::osservazione
Per verificare una risposta si ricostruisce una situazione concreta con tutti i dati. Nei problemi numerici questo controllo comprende unità, interi ammessi e totale disponibile; nei problemi verbali comprende il significato dei quantificatori e l'identità delle persone citate. Una conclusione che richiede una premessa ulteriore rimane indeterminata, anche quando quella premessa sembra ragionevole.
:::
