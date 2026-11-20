---
titolo: "Ragionamento logico e problemi"
sommario: "Enunciati, condizioni, quantificatori, insiemi, vincoli e procedure con esempi, figure e controllo delle conclusioni."
---

## Enunciati e valori di verità

:::definizione{#enunciati titolo="Enunciati e premesse"}
Un **enunciato**, detto anche proposizione, è una frase di cui si può dire se è vera oppure falsa. «Il codice contiene quattro cifre» è un enunciato, perché guardando il codice si stabilisce se è vera. «Inserire il codice» è un'istruzione, e di un'istruzione non ha senso chiedersi se sia vera, quindi non è un enunciato. Vero e falso si chiamano **valori di verità**.

Ogni enunciato si indica con una lettera maiuscola, per esempio $P$ = «il codice contiene quattro cifre». In un ragionamento la stessa lettera indica sempre lo stesso enunciato.

Le **premesse** sono le informazioni che il quesito dà per vere. Una conclusione **segue** dalle premesse quando è vera in ogni situazione in cui le premesse sono vere. Contano soltanto le premesse scritte nel quesito. Se il testo afferma che tutti i mezzi elettrici del deposito sono rossi, in quel quesito lo sono, benché altrove esistano mezzi elettrici di altri colori.
:::

:::esempio{titolo="Una conclusione possibile e una necessaria"}
Le premesse sono «tutti i campioni numerati sono catalogati» e «il campione $a$ è catalogato». Si chiede se $a$ sia numerato.

La prima premessa dice che ogni campione con il numero è nel catalogo, e non dice nulla sui campioni senza numero. Le situazioni in cui entrambe le premesse sono vere sono quindi due.

- Il campione $a$ è catalogato e numerato.
- Il campione $a$ è catalogato e privo di numero.

Le premesse non permettono di scegliere, quindi la numerazione di $a$ è **indeterminata**. Se invece la seconda premessa fosse «$a$ è numerato», la prima si applicherebbe ad $a$, e «$a$ è catalogato» sarebbe una conclusione **necessaria**, cioè una conclusione che segue dalle premesse.

Un **controesempio** è una situazione in cui le premesse sono vere e la conclusione proposta è falsa. La seconda situazione dell'elenco è un controesempio alla conclusione «$a$ è numerato». Un solo controesempio basta per scartare una conclusione.
:::

:::osservazione
Sulle stesse premesse i quesiti pongono tre domande diverse.

- «Può essere vero» chiede almeno una situazione, fra quelle in cui le premesse sono vere, in cui la frase è vera.
- «Deve essere vero» chiede che la frase sia vera in tutte quelle situazioni.
- «È impossibile» chiede che la frase sia falsa in tutte quelle situazioni.

Nell'esempio dei campioni, «$a$ è numerato» può essere vero, perché è vero nella prima situazione, e non deve esserlo, perché è falso nella seconda.
:::

## Connettivi e negazioni

:::definizione{#connettivi titolo="Congiunzione e disgiunzione"}
Un **connettivo** è una parola, come «non», «e», «oppure», che a partire da uno o due enunciati ne forma uno nuovo. Siano $P$ = «Luca ha il biglietto» e $Q$ = «Luca ha il documento».

- La **negazione** «Luca non ha il biglietto» si scrive $\neg P$ e si legge «non $P$». È vera quando $P$ è falso ed è falsa quando $P$ è vero.
- La **congiunzione** «Luca ha il biglietto *e* il documento» si scrive $P\land Q$ e si legge «$P$ e $Q$». È vera quando entrambi gli enunciati sono veri.
- La **disgiunzione** «Luca ha il biglietto *oppure* il documento» si scrive $P\lor Q$ e si legge «$P$ oppure $Q$». È vera quando almeno uno dei due enunciati è vero, compreso il caso in cui lo sono entrambi, e per questo si chiama *inclusiva*.

Una **tavola di verità** elenca, una per riga, tutte le combinazioni di vero (V) e falso (F) degli enunciati di partenza, con il valore dell'enunciato composto.

| $P$ | $Q$ | $P\land Q$ | $P\lor Q$ |
| --- | --- | --- | --- |
| V | V | V | V |
| V | F | F | V |
| F | V | F | V |
| F | F | F | F |

Nella seconda riga Luca ha il biglietto e non ha il documento, quindi la congiunzione è falsa e la disgiunzione è vera.

«Luca ha esattamente una delle due cose» richiede che almeno un enunciato sia vero e che non lo siano entrambi. Si scrive $(P\lor Q)\land\neg(P\land Q)$ ed è vera nella seconda e nella terza riga. Nei quesiti di questo capitolo la parola «oppure», senza altre precisazioni, ha il significato inclusivo.
:::

::::teorema{#de-morgan titolo="Leggi di De Morgan"}
Le leggi di De Morgan dicono come si nega una frase costruita con «e» oppure con «oppure».

- «Non è vero che Luca ha il biglietto e il documento» significa che gliene manca almeno uno, cioè che Luca non ha il biglietto oppure non ha il documento.
- «Non è vero che Luca ha il biglietto oppure il documento» significa che gli mancano entrambi, cioè che Luca non ha il biglietto e non ha il documento.

In simboli, per enunciati qualunque $P$ e $Q$,
$$
\neg(P\land Q)\iff(\neg P)\lor(\neg Q),
$$
$$
\neg(P\lor Q)\iff(\neg P)\land(\neg Q).
$$
Il simbolo $\iff$ si legge «equivale a» e indica che le due scritture hanno lo stesso valore di verità in ogni riga della tavola.

:::dimostrazione
La congiunzione $P\land Q$ è falsa nella seconda, nella terza e nella quarta riga della tavola, cioè nelle righe in cui almeno uno fra $P$ e $Q$ è falso. Sono le stesse righe in cui è vero $\neg P$ oppure è vero $\neg Q$, quindi vale la prima equivalenza. La disgiunzione $P\lor Q$ è falsa soltanto nella quarta riga, che è l'unica in cui $\neg P$ e $\neg Q$ sono entrambi veri, quindi vale la seconda.
:::
::::

:::esempio{titolo="Requisiti di una richiesta"}
Una richiesta è completa esattamente quando presenta la firma e almeno un recapito fra telefono ed email. Con $F$ = «c'è la firma», $T$ = «c'è il telefono» ed $E$ = «c'è l'email», la richiesta è completa quando è vero $F\land(T\lor E)$. È incompleta quando è vera la negazione, che si calcola con le due leggi di De Morgan, applicate prima a $\land$ e poi a $\lor$.
$$
\neg\bigl(F\land(T\lor E)\bigr)
\iff \neg F\lor\neg(T\lor E)
\iff \neg F\lor(\neg T\land\neg E).
$$
La richiesta è quindi incompleta quando manca la firma, oppure quando mancano sia il telefono sia l'email. Una richiesta con la firma e senza recapiti è perciò incompleta.
:::

## Implicazioni e condizioni

:::definizione{#implicazione titolo="Implicazione"}
Un'**implicazione** è una frase della forma «se …, allora …». Un genitore promette al figlio: «Se superi l'esame, ti regalo una bicicletta». Con $P$ = «il figlio supera l'esame» e $Q$ = «il genitore regala la bicicletta», la promessa si scrive $P\Rightarrow Q$ e si legge «se $P$, allora $Q$» oppure «$P$ implica $Q$». L'enunciato $P$ si chiama **antecedente** e l'enunciato $Q$ si chiama **conseguente**.

L'implicazione è falsa quando la promessa è violata ed è vera in tutti gli altri casi.

| $P$ | $Q$ | $P\Rightarrow Q$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

- Prima riga. Il figlio supera l'esame e riceve la bicicletta. La promessa è mantenuta, quindi l'implicazione è vera.
- Seconda riga. Il figlio supera l'esame e non riceve la bicicletta. La promessa è violata, quindi l'implicazione è falsa.
- Terza riga. Il figlio non supera l'esame e riceve lo stesso la bicicletta. Il genitore aveva detto che cosa avrebbe fatto in caso di esame superato e nulla sul caso contrario, quindi non ha violato la promessa e l'implicazione è vera.
- Quarta riga. Il figlio non supera l'esame e non riceve la bicicletta. Anche in questo caso la promessa non è violata, quindi l'implicazione è vera.

L'implicazione è perciò falsa in un solo caso, quello con $P$ vero e $Q$ falso, ed è vera ogni volta che l'antecedente è falso, qualunque sia $Q$. Allo stesso modo, la regola «se il sensore rileva fumo, invia un avviso» è violata soltanto quando il sensore rileva fumo e l'avviso non parte.

L'implicazione è vera esattamente nelle righe in cui $P$ è falso oppure $Q$ è vero, quindi $P\Rightarrow Q$ equivale a $\neg P\lor Q$. La sua negazione è vera soltanto nella seconda riga, quindi equivale a $P\land\neg Q$, cioè a «il figlio ha superato l'esame e non ha ricevuto la bicicletta».
:::

::::teorema{#contrapposta titolo="Contrapposizione e deduzione"}
Dalla regola «se piove, il cortile è bagnato» si ricava che, se il cortile non è bagnato, non piove, perché con la pioggia il cortile sarebbe bagnato. La frase «se il cortile non è bagnato, non piove» è la **contrapposta** della regola. Si ottiene scambiando di posto i due enunciati e negandoli entrambi.

In simboli, l'implicazione $P\Rightarrow Q$ equivale alla sua contrapposta $\neg Q\Rightarrow\neg P$. Da un'implicazione vera si ricavano due deduzioni.

- Da $P\Rightarrow Q$ e $P$ segue $Q$. Piove, quindi il cortile è bagnato.
- Da $P\Rightarrow Q$ e $\neg Q$ segue $\neg P$. Il cortile non è bagnato, quindi non piove.

:::dimostrazione
L'implicazione $P\Rightarrow Q$ è falsa soltanto quando $P$ è vero e $Q$ è falso. La contrapposta è falsa soltanto quando il suo antecedente $\neg Q$ è vero e il suo conseguente $\neg P$ è falso, cioè nello stesso caso. Le due implicazioni hanno quindi lo stesso valore in ogni riga della tavola.

Se $P\Rightarrow Q$ e $P$ sono veri, allora $Q$ è vero, perché con $Q$ falso l'implicazione sarebbe falsa. Per lo stesso motivo, se $P\Rightarrow Q$ è vera e $Q$ è falso, allora $P$ è falso.
:::
::::

:::definizione{#necessario-sufficiente titolo="Condizioni necessarie e sufficienti"}
La frase «se una persona è nata a Roma, è nata in Italia» è un'implicazione vera.

- Essere nati a Roma è una condizione **sufficiente** per essere nati in Italia, perché sapere che una persona è nata a Roma basta per concludere che è nata in Italia.
- Essere nati in Italia è una condizione **necessaria** per essere nati a Roma, perché chi non è nato in Italia non è nato a Roma. La condizione non è sufficiente, dato che chi è nato a Milano è nato in Italia e non a Roma.

In generale, quando $P\Rightarrow Q$ è vera, $P$ è sufficiente per $Q$ e $Q$ è necessaria per $P$.

- «Il badge basta per entrare» significa badge $\Rightarrow$ ingresso. Il badge è condizione sufficiente, cioè chi ha il badge entra.
- «Si entra solo se si possiede il badge» significa ingresso $\Rightarrow$ badge. Il badge è condizione necessaria, cioè chi è entrato aveva il badge. La frase è contraddetta soltanto da una persona che entra senza badge, mentre una persona che ha il badge e resta fuori la lascia vera.
- «Si entra se e solo se si possiede il badge» afferma entrambe le implicazioni e si scrive ingresso $\iff$ badge. Il badge è condizione necessaria e sufficiente, e il simbolo $\iff$ si legge in questo caso «se e solo se».

Una frase con «salvo» è un'implicazione che ha per antecedente l'assenza dell'eccezione. «Salvo imprevisti, la consegna avviene domani» significa nessun imprevisto $\Rightarrow$ consegna domani. Se si verifica un imprevisto, la consegna avviene domani oppure più tardi, e in entrambi i casi la frase è vera.
:::

:::attenzione
Da «se piove, il cortile è bagnato» e «il cortile è bagnato» non segue che piova. Un cortile appena lavato in una giornata di sole è un controesempio, perché le due premesse sono vere e «piove» è falsa. Lo stesso cortile mostra che da «non piove» non segue «il cortile non è bagnato».

Le due conclusioni sbagliate usano, al posto della regola $P\Rightarrow Q$, un'implicazione che non le equivale.

- L'**inversa** $Q\Rightarrow P$, cioè «se il cortile è bagnato, piove».
- La **contraria** $\neg P\Rightarrow\neg Q$, cioè «se non piove, il cortile non è bagnato».
:::

## Quantificatori e insiemi

:::definizione{#quantificatori titolo="Tutti, alcuni, nessuno"}
Un **quantificatore** è una parola che dice a quanti elementi di un gruppo si riferisce una frase.

- Il quantificatore **universale** è «tutti», oppure «ogni». «Tutti gli studenti della classe hanno il libro» dice che ogni studente lo ha, senza eccezioni. Il simbolo è $\forall$ e si legge «per ogni».
- Il quantificatore **esistenziale** è «alcuni», oppure «esiste». «Alcuni studenti della classe hanno il libro» dice che *almeno uno* studente lo ha. In logica «alcuni» ha sempre questo significato, quindi la frase è vera con un solo studente ed è vera anche quando il libro lo hanno tutti. Il simbolo è $\exists$ e si legge «esiste».

Una frase con «tutti» non afferma che esistano elementi. Se il laboratorio non possiede microscopi, la frase «tutti i microscopi del laboratorio sono revisionati» è vera, perché per smentirla servirebbe un microscopio non revisionato. Per concludere che esiste uno strumento revisionato occorre quindi un'altra premessa, cioè che il laboratorio possieda almeno un microscopio.

Un **insieme** è un gruppo di oggetti, detti elementi, e la scrittura $x\in A$ si legge «$x$ appartiene ad $A$». Siano $A$ l'insieme degli studenti della classe e $B$ l'insieme di chi ha il libro. L'**intersezione** $A\cap B$ è l'insieme degli elementi che appartengono sia ad $A$ sia a $B$, e $\varnothing$ indica l'insieme vuoto, cioè l'insieme senza elementi.

- «Tutti gli A sono B» si scrive «$\forall x\in A$, $x\in B$», oppure $A\subseteq B$, che si legge «$A$ è contenuto in $B$».
- «Alcuni A sono B» si scrive «$\exists x\in A$ tale che $x\in B$», oppure $A\cap B\ne\varnothing$, cioè l'intersezione è diversa dall'insieme vuoto.
- «Nessun A è B» si scrive $A\cap B=\varnothing$, cioè l'intersezione è l'insieme vuoto.

Nel diagramma della prima frase la regione di $A$ è disegnata dentro quella di $B$, perché ogni elemento di $A$ è anche un elemento di $B$.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="Tutti gli A sono B: A è contenuto in B"}
:::

:::teorema{#negazione-quantificatori titolo="Negazione dei quantificatori"}
Per smentire «tutti gli studenti hanno consegnato il compito» basta uno studente che non lo ha consegnato. La negazione di una frase con «tutti» è quindi una frase con «esiste almeno uno», e viceversa.

- La negazione di «tutti gli A sono B» è «esiste almeno un A che non è B».
- La negazione di «alcuni A sono B» è «nessun A è B».
- La negazione di «nessun A è B» è «almeno un A è B».
- La negazione di «esattamente un A è B» è «nessun A è B, oppure almeno due A sono B».

Con due quantificatori la regola si applica a entrambi. Nella frase «ogni studente ha letto almeno un testo», «ogni studente» diventa «esiste uno studente» e «almeno un testo» diventa «nessun testo», quindi la negazione è «esiste uno studente che non ha letto nessun testo».
:::

:::attenzione
La negazione di «tutti gli studenti hanno consegnato il compito» è «almeno uno studente non lo ha consegnato», e non «nessuno studente lo ha consegnato». In una classe di $20$ studenti, $19$ hanno consegnato il compito e $1$ no. La frase «tutti lo hanno consegnato» è falsa ed è falsa anche «nessuno lo ha consegnato». Una frase e la sua negazione hanno sempre valori di verità opposti, quindi la seconda non è la negazione della prima. La frase «almeno uno studente non lo ha consegnato» è invece vera.
:::

:::esempio{titolo="Un testimone che attraversa due premesse"}
Le premesse sono «alcuni tecnici sono volontari» e «tutti i volontari sono assicurati». Per la prima esiste almeno una persona che è insieme tecnico e volontario, detta *testimone* della premessa; la si chiami Marta. Marta è volontaria, quindi per la seconda premessa è assicurata. Perciò **alcuni tecnici sono assicurati**. Sui tecnici che non sono volontari le premesse non dicono nulla, quindi «tutti i tecnici sono assicurati» non segue.

Da «alcuni tecnici sono volontari» e «alcuni volontari sono pensionati» non segue invece che alcuni tecnici siano pensionati. Un controesempio è un gruppo di due persone, nel quale Marta è tecnico e volontaria e non è pensionata, mentre Piero è volontario e pensionato e non è tecnico. Le due premesse sono vere e nessun tecnico è pensionato. Nel primo ragionamento le premesse si applicano alla stessa persona, in questo i due testimoni sono diversi.
:::

:::osservazione
L'ordine dei quantificatori cambia il significato di una frase.

- «Ogni studente consulta un tutor.» Per ogni studente esiste un tutor, che cambia da uno studente all'altro.
- «Esiste un tutor consultato da tutti gli studenti.» Il tutor è una sola persona, la stessa per tutti.

Se Anna e Bruno consultano il tutor Rossi e Carla consulta il tutor Bianchi, la prima frase è vera e la seconda è falsa, perché nessuno dei due tutor è consultato da tutti e tre. Quando invece la seconda frase è vera, è vera anche la prima, perché il tutor comune è un tutor per ciascuno studente.
:::

## Conteggi con insiemi

:::definizione{#conteggi-insiemi titolo="Regioni disgiunte"}
Per un insieme finito $A$, il simbolo $|A|$ indica il numero dei suoi elementi.

In un gruppo di persone, siano $A$ l'insieme di chi suona uno strumento e $B$ l'insieme di chi pratica uno sport. Ogni persona si trova in una sola di quattro regioni: solo A, solo B, entrambe, nessuna. Le regioni sono **disgiunte**, cioè non hanno elementi in comune, quindi nella somma dei loro conteggi ogni persona è contata una sola volta e la somma è il totale $N$ del gruppo.

::venn{tipo="due" nomi="A,B" universo="1" elementi="a:12;ab:5;b:8;u:7" titolo="Le quattro regioni contengono in totale 32 elementi"}

Nel diagramma il rettangolo rappresenta il gruppo intero e ogni numero indica quanti elementi contiene la regione in cui è scritto.

- $|A|=12+5=17$, perché $A$ è formato dalla regione «solo A» e dalla regione comune. Allo stesso modo $|B|=8+5=13$.
- L'**unione** $A\cup B$ è l'insieme degli elementi che appartengono ad almeno uno dei due insiemi, e contiene $12+5+8=25$ elementi.
- Gli elementi con esattamente una proprietà, cioè quelli che appartengono a uno solo dei due insiemi, sono $12+8=20$.
- Il gruppo intero contiene $N=25+7=32$ elementi.
:::

::::teorema{#inclusione-esclusione titolo="Inclusione ed esclusione"}
Per due insiemi finiti $A$ e $B$,
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
Gli elementi con esattamente una proprietà sono
$$
|A|+|B|-2|A\cap B|.
$$
Con i numeri del diagramma, $|A\cup B|=17+13-5=25$ e gli elementi con esattamente una proprietà sono $17+13-2\cdot 5=20$, come nel conteggio per regioni.

:::dimostrazione
Nella somma $|A|+|B|$ un elemento che appartiene a un solo insieme è contato una volta, mentre un elemento comune è contato due volte, una in $|A|$ e una in $|B|$. Nell'unione ogni elemento va contato una volta, quindi si sottrae $|A\cap B|$ una volta. Fra gli elementi con esattamente una proprietà quelli comuni non vanno contati, quindi si sottrae $|A\cap B|$ due volte.
:::
::::

:::esempio{titolo="Un limite inferiore senza conoscere l'intersezione"}
In un gruppo di $N=30$ persone, $19$ parlano francese e formano l'insieme $A$, mentre $16$ parlano tedesco e formano l'insieme $B$. Si cerca il numero minimo di persone che parlano entrambe le lingue.

Dalla formula di inclusione ed esclusione si ricava $|A\cap B|=19+16-|A\cup B|=35-|A\cup B|$. Le persone sono $30$, quindi l'unione ha al massimo $30$ elementi e l'intersezione ne ha almeno $35-30=5$. Il valore $5$ si realizza con $14$ persone che parlano solo francese, $11$ che parlano solo tedesco e $5$ che parlano entrambe le lingue, perché $14+11+5=30$. L'intersezione è contenuta in $B$, quindi ha al massimo $16$ elementi, e il valore $16$ si realizza quando tutte le persone che parlano tedesco parlano anche francese. In generale,
$$
\max(0,|A|+|B|-N)\le |A\cap B|\le\min(|A|,|B|),
$$
dove $\le$ si legge «minore o uguale», $\max$ indica il maggiore e $\min$ il minore dei numeri elencati. Lo $0$ serve quando $|A|+|B|$ è minore di $N$. Un minimo o un massimo è accertato soltanto quando si descrive anche una distribuzione che lo realizza.
:::

:::osservazione
Con tre insiemi si sommano i tre conteggi, si sottraggono le tre intersezioni a coppie e si aggiunge l'intersezione dei tre. Un elemento comune a tutti e tre è infatti contato tre volte nella somma e tolto tre volte con le intersezioni a coppie, quindi l'ultima aggiunta lo conta una volta. Per esempio, con insiemi di $10$, $9$ e $8$ elementi, intersezioni a coppie di $4$, $3$ e $2$ elementi e intersezione dei tre di $1$ elemento, l'unione contiene $10+9+8-4-3-2+1=19$ elementi. Nei quesiti l'intersezione di due insiemi comprende anche gli elementi comuni a tutti e tre, salvo indicazione diversa.
:::

## Ordinamenti, abbinamenti e reti

:::definizione{#vincoli titolo="Vincoli e configurazioni"}
Una **configurazione** è una disposizione completa degli elementi, per esempio l'ordine di arrivo di quattro corridori. Un **vincolo** è una condizione che la configurazione deve rispettare, per esempio «Anna arriva prima di Bruno». La risposta si cerca fra le configurazioni che rispettano tutti i vincoli.

In un ordinamento senza parità, cioè senza due elementi nella stessa posizione, $A<B$ significa «A precede B». Da $A<B$ e $B<C$ segue $A<C$. «A è subito prima di B» richiede inoltre che fra A e B non ci sia alcun elemento.

In un **abbinamento uno a uno** ogni persona riceve un solo ruolo e ogni ruolo è assegnato a una sola persona. Gli abbinamenti si registrano in una tabella con una riga per persona e una colonna per ruolo, nella quale si segnano le caselle escluse dai vincoli. Dario, Elena e Franco si dividono i ruoli di portiere, difensore e attaccante, con i vincoli «Dario non è portiere né difensore» ed «Elena non è portiere».

| | Portiere | Difensore | Attaccante |
| --- | --- | --- | --- |
| Dario | no | no | |
| Elena | no | | |
| Franco | | | |

A Dario resta una sola casella, quindi Dario è attaccante e questo ruolo si esclude per Elena e Franco. A Elena resta allora il difensore, e a Franco il portiere. Quando a ogni persona restano più caselle, si esaminano separatamente i casi, e in ciascuno valgono tutti i vincoli iniziali.
:::

:::esempio{titolo="Un blocco di attività consecutive"}
Quattro attività A, B, C, D occupano i turni $1$, $2$, $3$, $4$. I vincoli sono tre: B si svolge subito dopo A, C precede A, D occupa l'ultimo turno.

D occupa il turno $4$, quindi A, B, C occupano i primi tre turni. A e B sono consecutive, quindi occupano i turni $1$ e $2$ oppure i turni $2$ e $3$. Nel primo caso A sarebbe nel turno $1$ e C non avrebbe un turno precedente. Resta il secondo caso, con C nel turno $1$. L'ordine è **C, A, B, D** ed è l'unico che rispetta i tre vincoli.

Con il solo vincolo «A precede C» sono ammessi più ordini, fra cui A, B, C, D e B, A, C, D e D, A, C, B. Ciascuna delle attività A, B e D *può* essere prima, perché è prima in uno di questi ordini. Nessuna attività *deve* essere prima, perché gli ordini validi non iniziano tutti con la stessa attività.
:::

:::definizione{#reti titolo="Collegamenti e percorsi"}
Una **rete** è formata da punti, detti **vertici**, e da **collegamenti** fra coppie di vertici. I vertici rappresentano luoghi, per esempio le fermate di un autobus, e il collegamento fra A e B si scrive A–B. In una rete *diretta* ogni collegamento ha un verso, come una strada a senso unico, mentre in una rete *non diretta* si percorre nei due versi.

Un **percorso** è una successione di collegamenti nella quale ciascuno parte dal vertice in cui arriva il precedente. Un vertice è raggiungibile da un altro quando esiste un percorso che li unisce, e lo si stabilisce dall'elenco dei collegamenti, non dalla vicinanza dei vertici nel disegno.

Nella rete non diretta con i collegamenti A–B, B–C e B–D, l'unico collegamento di A è A–B, quindi ogni percorso da A a D passa per B. Togliendo B con i suoi collegamenti, A resta separato da C e da D. Aggiungendo invece il collegamento A–D, da A si raggiunge D senza passare per B.

I percorsi fra due vertici si contano elencando, vertice per vertice, i collegamenti che ne partono. Nella rete diretta con i collegamenti A→B, A→C, B→D e C→D, da A si va in B oppure in C, e da ciascuno dei due soltanto in D. I percorsi da A a D sono quindi due, A→B→D e A→C→D.
:::

## Successioni, procedure e garanzie

:::definizione{#procedure titolo="Stato iniziale e istruzioni"}
Una **procedura** è un elenco di istruzioni che si eseguono in ordine a partire da un valore assegnato, detto **stato iniziale**. Nella procedura «si parte da $4$, si raddoppia e poi si sottrae $1$» lo stato iniziale è $4$, dopo la prima operazione si ottiene $2\cdot 4=8$ e dopo la seconda $8-1=7$. «Il valore dopo due operazioni» è $7$, mentre «il secondo valore, contando quello iniziale» è $8$.

Una **successione** è un elenco ordinato di numeri, detti termini. Il termine di posto $n$ si indica con $a_n$, che si legge «a con $n$». Una successione è **periodica** quando un blocco di $k$ termini si ripete sempre uguale. Il resto della divisione di $n$ per $k$ indica il posto di $a_n$ dentro il blocco, e il resto $0$ corrisponde all'ultimo posto. Nella successione $3, 5, 8, 3, 5, 8, \dots$ il blocco ha $k=3$ termini. Poiché $20=3\cdot 6+2$, il resto è $2$ e $a_{20}$ è il secondo termine del blocco, cioè $5$.

Una successione è definita **per ricorrenza** quando ogni termine si calcola dai precedenti. La regola $a_{n+2}=a_{n+1}+a_n$ dice che ogni termine è la somma dei due che lo precedono. Per applicarla servono i primi due termini, detti condizioni iniziali. Con $a_1=1$ e $a_2=1$ si ottiene $a_3=1+1=2$, poi $a_4=2+1=3$ e $a_5=3+2=5$.
:::

:::attenzione
Un elenco finito di numeri, senza una regola dichiarata, ammette più di una continuazione. L'elenco $2, 4, 8$ prosegue con $16$ se ogni termine è il doppio del precedente, e prosegue con $14$ se le differenze fra termini consecutivi sono $+2$, $+4$, $+6$. Per questo motivo i quesiti dichiarano la regola, oppure chiedono quale fra le regole proposte produce tutti i termini assegnati.
:::

::::teorema{#cassetti titolo="Principio dei cassetti"}
Se $7$ calzini vengono riposti in $3$ cassetti, almeno un cassetto ne contiene almeno $3$. Infatti, con al massimo $2$ calzini per cassetto, i calzini sarebbero in tutto al massimo $3\cdot 2=6$.

In generale, se più di $kr$ oggetti vengono distribuiti in $k$ gruppi, almeno un gruppo contiene almeno $r+1$ oggetti. Nell'esempio $k=3$, $r=2$ e gli oggetti sono $7$, più di $kr=6$.

:::dimostrazione
Se ogni gruppo contenesse al massimo $r$ oggetti, gli oggetti sarebbero in tutto al massimo $kr$. Gli oggetti sono più di $kr$, quindi almeno un gruppo ne contiene più di $r$, cioè almeno $r+1$. Con $kr$ oggetti la conclusione non è assicurata, perché si possono mettere $r$ oggetti in ogni gruppo. Perciò $kr+1$ è il più piccolo numero che garantisce un gruppo con almeno $r+1$ oggetti.
:::
::::

:::esempio{titolo="Garantire un colore o una ripetizione"}
Un sacchetto contiene $4$ gettoni rossi e $6$ blu, che si estraggono senza guardare e senza rimetterli nel sacchetto. Un numero di estrazioni garantisce un risultato quando il risultato si ottiene anche nel caso più sfavorevole.

Per garantire almeno un gettone rosso, il caso più sfavorevole è quello in cui escono per primi tutti i $6$ gettoni blu. Dopo di essi nel sacchetto restano soltanto gettoni rossi, quindi servono $6+1=7$ estrazioni.

Per garantire due gettoni dello stesso colore, il caso più sfavorevole è quello in cui i primi due gettoni hanno colori diversi. Il terzo gettone ha il colore di uno dei primi due, quindi bastano $3$ estrazioni. È il principio dei cassetti con $k=2$ colori e $r=1$.
:::

## Argomentazioni e controllo delle conclusioni

:::definizione{#argomentazioni titolo="Ipotesi e conclusioni di un argomento"}
Un **argomento** è un ragionamento che parte da un dato e arriva a una conclusione. Si consideri «il nuovo orario della biblioteca è utile, perché da quando è in vigore le presenze sono aumentate». Il dato è l'aumento delle presenze e la conclusione è che l'orario è utile. L'**ipotesi implicita**, cioè la premessa che l'argomento usa senza scriverla, è che l'aumento sia dovuto all'orario. L'aumento ha però anche altre spiegazioni, per esempio un aumento degli iscritti oppure un modo diverso di registrare le presenze.

Un'informazione **rafforza** l'argomento se rende più credibile il passaggio dal dato alla conclusione, e lo **indebolisce** se lo rende meno credibile.

- «Il numero degli iscritti è rimasto uguale» rafforza l'argomento, perché esclude una spiegazione alternativa.
- «Gli iscritti sono raddoppiati» lo indebolisce, perché fornisce una spiegazione alternativa.

Rafforzare un argomento è meno che dimostrarne la conclusione, e indebolirlo è meno che dimostrarla falsa.
:::

:::esempio{titolo="Un confronto controllato"}
Due gruppi di studenti svolgono la stessa prova. Il gruppo 1, che ha studiato con una nuova scheda, ottiene in media $26$ punti su $30$. Il gruppo 2, che ha studiato senza la scheda, ne ottiene $22$. L'argomento è «la scheda è utile, perché il gruppo che l'ha usata ha ottenuto $4$ punti in più».

- Se prima di ricevere la scheda il gruppo 1 aveva già $4$ punti di vantaggio, l'argomento è indebolito, perché la differenza si spiega con la preparazione di partenza.
- Se prima della scheda i due gruppi avevano la stessa media e hanno poi studiato per lo stesso numero di ore, l'argomento è rafforzato, perché queste due spiegazioni alternative sono escluse.
:::

:::osservazione
Una risposta si controlla costruendo una situazione concreta che rispetta tutti i dati del quesito e verificando che in essa la risposta sia vera. Nei problemi con i numeri si controlla che un numero di persone sia un intero non negativo e che la somma delle parti dia il totale assegnato. Nei problemi verbali si controlla il significato di «tutti», «alcuni» e «nessuno» e che le premesse usate insieme si riferiscano alla stessa persona.

Una conclusione che richiede una premessa non scritta nel quesito resta indeterminata, anche quando la premessa sembra ragionevole.
:::
