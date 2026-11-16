---
titolo: Logica
sommario: Come si negano gli enunciati, come si usano implicazioni e condizioni necessarie e sufficienti, come si verificano i sillogismi con i diagrammi di Venn e come si risolvono i quesiti su gruppi di persone, ordinamenti, proporzioni, serie numeriche e simboli al posto dei numeri.
---

## Enunciati e connettivi

:::definizione{#enunciato titolo="Enunciato"}
Un **enunciato** è una frase che è vera oppure falsa. "Milano è in Lombardia" è un enunciato vero, "Un'ora ha $50$ minuti" è un enunciato falso. Una domanda o un ordine non sono enunciati, perché non sono né veri né falsi. Gli enunciati si indicano con lettere maiuscole, per esempio $A$ = "Luca ha la patente". Nei quesiti di logica del TIEC si accettano come vere le frasi del testo e ci si chiede quali altre frasi sono, di conseguenza, vere o false.
:::

:::definizione{#connettivi titolo="Negazione, congiunzione e disgiunzione"}
Le parole "non", "e", "o" collegano enunciati semplici e formano enunciati composti. Si chiamano **connettivi**, e il valore di verità dell'enunciato composto dipende solo dai valori delle parti.

- La **negazione** $\lnot A$ ("non $A$") è vera quando $A$ è falsa.
- La **congiunzione** $A \land B$ ("$A$ e $B$") è vera solo quando $A$ e $B$ sono *entrambe* vere.
- La **disgiunzione** $A \lor B$ ("$A$ o $B$") è vera quando *almeno una* delle due è vera, compreso il caso in cui lo sono entrambe.

| $A$ | $B$ | $A \land B$ | $A \lor B$ |
| --- | --- | --- | --- |
| V | V | V | V |
| V | F | F | V |
| F | V | F | V |
| F | F | F | F |

La tabella, detta **tavola di verità**, elenca i quattro casi possibili. Con $A$ = "Sara parla inglese" e $B$ = "Sara parla tedesco", se Sara parla solo inglese la frase "Sara parla inglese e tedesco" è falsa, mentre "Sara parla inglese o tedesco" è vera. Le parole "ma" e "però" hanno lo stesso valore di verità di "e".
:::

:::osservazione{#o-esclusiva titolo="O inclusiva e o esclusiva"}
Quando il testo non dice altro, la "o" è inclusiva. La "o" **esclusiva** ("o $A$ o $B$, ma non entrambe") è vera quando *esattamente una* delle due parti è vera, ed è dichiarata con espressioni come "ma non entrambi" o "uno solo dei due". La frase "Il premio va a Giulia o a Marco, ma non a entrambi" è falsa se vincono tutti e due.
:::

## Negazione di enunciati

::::teorema{#de-morgan titolo="Leggi di De Morgan"}
$$
\lnot (A \land B) \equiv \lnot A \lor \lnot B,
\qquad
\lnot (A \lor B) \equiv \lnot A \land \lnot B .
$$
Il simbolo $\equiv$ indica che i due enunciati sono veri negli stessi casi. Per negare una frase con "e" si negano le due parti e "e" diventa "o"; per negare una frase con "o" si negano le due parti e "o" diventa "e". La negazione di "Il volo è in orario e il bagaglio è arrivato" è "Il volo non è in orario oppure il bagaglio non è arrivato". La negazione di "Marco va al cinema o a teatro" è "Marco non va né al cinema né a teatro".

:::dimostrazione
La congiunzione $A \land B$ è falsa quando almeno una delle due parti è falsa. Negarla significa quindi affermare che almeno una parte è falsa, cioè $\lnot A \lor \lnot B$. La disgiunzione $A \lor B$ è falsa solo quando entrambe le parti sono false, perciò la sua negazione è $\lnot A \land \lnot B$.
:::
::::

:::attenzione
La negazione di "$A$ e $B$" *non* è "non $A$ e non $B$". Se il volo è in orario e il bagaglio non è arrivato, la frase "Il volo è in orario e il bagaglio è arrivato" è falsa, e anche "Il volo non è in orario e il bagaglio non è arrivato" è falsa. Una frase e la sua negazione hanno sempre valori opposti, quindi la seconda frase non è la negazione della prima.
:::

:::teorema{#negazione-quantificatori titolo="Negazione di tutti, alcuni, nessuno"}
Le parole "tutti", "ogni", "nessuno" parlano di *ogni* elemento di una categoria; "alcuni", "qualche", "almeno uno" parlano di *almeno un* elemento. In logica "alcuni" significa "almeno uno, forse tutti".

| frase | negazione |
| --- | --- |
| Tutti gli $A$ sono $B$ | Almeno un $A$ non è $B$ |
| Almeno un $A$ non è $B$ | Tutti gli $A$ sono $B$ |
| Nessun $A$ è $B$ | Almeno un $A$ è $B$ |
| Almeno un $A$ è $B$ | Nessun $A$ è $B$ |

La regola vale perché una frase su *tutti* gli elementi diventa falsa appena un solo elemento non la rispetta. Per rendere falsa "Tutti gli sportelli sono aperti" basta uno sportello chiuso, quindi la negazione è "Almeno uno sportello non è aperto", che si dice anche "Non tutti gli sportelli sono aperti".
:::

:::attenzione
La negazione di "Tutti i dipendenti sono laureati" *non* è "Nessun dipendente è laureato". In un ufficio con $10$ dipendenti, di cui $7$ laureati, le due frasi sono false entrambe. Anche "Solo alcuni dipendenti sono laureati" non è la negazione, perché è falsa nell'ufficio in cui nessuno è laureato, dove la frase di partenza è anch'essa falsa.
:::

:::esempio{titolo="Due quantificatori nella stessa frase"}
La frase "Ogni filiale ha almeno un dipendente che parla tedesco" si nega in due passi. Prima si nega "ogni filiale", che diventa "almeno una filiale"; poi si nega la parte che segue, e "ha almeno un dipendente che parla tedesco" diventa "non ha nessun dipendente che parla tedesco". La negazione è quindi "Almeno una filiale non ha nessun dipendente che parla tedesco".
:::

## Implicazione e condizioni necessarie e sufficienti

:::definizione{#implicazione titolo="Implicazione"}
L'**implicazione** "se $A$, allora $B$", scritta $A \Rightarrow B$, è falsa in *un solo* caso, quando $A$ è vera e $B$ è falsa. L'enunciato $A$ si chiama **antecedente**, $B$ **conseguente**.

| $A$ | $B$ | $A \Rightarrow B$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

La frase "Se piove, la partita è rinviata" è smentita solo da un giorno di pioggia in cui la partita si gioca. In un giorno senza pioggia la frase riguarda un caso che non si è presentato, quindi non è smentita. La frase "Tutti gli $A$ sono $B$" equivale all'implicazione "se un elemento è un $A$, allora è un $B$".
:::

:::teorema{#negazione-implicazione titolo="Negazione dell'implicazione"}
$$
\lnot (A \Rightarrow B) \equiv A \land \lnot B .
$$
L'implicazione è falsa solo con $A$ vera e $B$ falsa, perciò la sua negazione afferma proprio questo caso, ed è una frase con "e", senza "se". La negazione di "Se studio, supero l'esame" è "Studio e non supero l'esame".
:::

:::teorema{#contronominale titolo="Contronominale, inversa e contraria"}
Data l'implicazione $A \Rightarrow B$, la **contronominale** $\lnot B \Rightarrow \lnot A$ è equivalente all'implicazione di partenza. L'**inversa** $B \Rightarrow A$ e la **contraria** $\lnot A \Rightarrow \lnot B$ non sono equivalenti all'implicazione.

| $A$ | $B$ | $A \Rightarrow B$ | $\lnot B \Rightarrow \lnot A$ | $B \Rightarrow A$ |
| --- | --- | --- | --- | --- |
| V | V | V | V | V |
| V | F | F | F | V |
| F | V | V | V | F |
| F | F | V | V | V |

La contronominale vale perché, se $B$ è falsa e $A$ fosse vera, l'implicazione darebbe $B$ vera. Dalla frase "Se Giorgio abita a Napoli, abita in Campania" segue "Se Giorgio non abita in Campania, non abita a Napoli". L'inversa "Se Giorgio abita in Campania, abita a Napoli" è falsa per chi abita a Salerno.

::venn{tipo="incluso" zone="u" nomi="Campania,Napoli" universo=1 titolo="Napoli è contenuta nella Campania: chi sta fuori dalla Campania, nella zona colorata, sta anche fuori da Napoli"}

:::

:::definizione{#condizione-necessaria-sufficiente titolo="Condizione necessaria e condizione sufficiente"}
Se vale $A \Rightarrow B$, si dice che $A$ è **condizione sufficiente** per $B$ e che $B$ è **condizione necessaria** per $A$. Se valgono sia $A \Rightarrow B$ sia $B \Rightarrow A$, allora $A$ è condizione **necessaria e sufficiente** per $B$, e si scrive $A \Leftrightarrow B$ ("$A$ se e solo se $B$").

- "È sufficiente $A$ per $B$", "basta $A$ perché $B$", "$B$ se $A$" significano $A \Rightarrow B$.
- "È necessario $B$ per $A$", "occorre $B$ perché $A$", "$A$ solo se $B$" significano $A \Rightarrow B$.

La frase "Avere il diploma è necessario per iscriversi all'università" significa "se uno è iscritto all'università, allora ha il diploma". La frase non dice che chi ha il diploma è iscritto, perché il diploma da solo non basta.
:::

:::teorema{#deduzioni-corrette titolo="Deduzioni corrette"}
Da un'implicazione vera $A \Rightarrow B$ si ricavano due deduzioni.

- Se $A$ è vera, allora $B$ è vera.
- Se $B$ è falsa, allora $A$ è falsa.

La seconda deduzione è la contronominale applicata al caso concreto. Dalle frasi "Se il bar è aperto, Lucia fa colazione fuori" e "Oggi Lucia non ha fatto colazione fuori" segue che oggi il bar è chiuso. Le deduzioni si possono concatenare. Da $A \Rightarrow B$, $B \Rightarrow C$ e "$C$ è falsa" segue che $B$ è falsa, e quindi che $A$ è falsa.
:::

:::osservazione{#deduzioni-scorrette titolo="Deduzioni scorrette"}
Da $A \Rightarrow B$ non si ricava nulla su $A$ sapendo che $B$ è vera, né nulla su $B$ sapendo che $A$ è falsa. Dedurre $A$ da $B$ si chiama **affermazione del conseguente**; dedurre $\lnot B$ da $\lnot A$ si chiama **negazione dell'antecedente**. Con la frase "Se Paolo supera il test, si iscrive a Economia", sapere che Paolo si è iscritto a Economia non dice se ha superato il test, perché Paolo può essersi iscritto per un'altra via. Nei quiz la risposta corretta in questi casi è un'opzione come "non si può stabilire".
:::

:::definizione{#equivalenza titolo="Enunciati equivalenti"}
Due enunciati sono **equivalenti** se sono veri esattamente negli stessi casi, cioè se le loro tavole di verità coincidono. Un quesito che chiede quale frase "equivale" a una data si risolve cercando l'opzione vera e falsa negli stessi casi della frase data. Oltre alla contronominale, è utile l'equivalenza
$$
A \Rightarrow B \equiv \lnot A \lor B ,
$$
che vale perché i due enunciati sono falsi nello stesso unico caso, con $A$ vera e $B$ falsa. Perciò "Se esco, prendo l'ombrello" equivale a "Non esco oppure prendo l'ombrello".
:::

## Sillogismi e diagrammi di Venn

:::definizione{#sillogismo titolo="Sillogismo"}
Un **sillogismo** è un ragionamento con due premesse e una conclusione, in cui le premesse parlano di tre categorie e una di esse, il **termine medio**, compare in entrambe. Il sillogismo è **valido** se la conclusione è vera in *ogni* situazione in cui le premesse sono vere. La verità delle premesse nel mondo reale non conta, perché nei quiz le premesse si accettano come vere. Nei quiz si intende inoltre che ogni categoria nominata abbia almeno un elemento.
:::

:::teorema{#schemi-sillogismi titolo="Schemi validi"}
Per qualunque scelta delle categorie $A$, $B$, $C$ i sillogismi seguenti sono validi.

| prima premessa | seconda premessa | conclusione |
| --- | --- | --- |
| Tutti gli $A$ sono $B$ | Tutti i $B$ sono $C$ | Tutti gli $A$ sono $C$ |
| Tutti gli $A$ sono $B$ | Nessun $B$ è $C$ | Nessun $A$ è $C$ |
| Alcuni $A$ sono $B$ | Tutti i $B$ sono $C$ | Alcuni $A$ sono $C$ |
| Alcuni $A$ sono $B$ | Nessun $B$ è $C$ | Alcuni $A$ non sono $C$ |

Il primo schema vale perché, se il cerchio di $A$ sta dentro quello di $B$ e il cerchio di $B$ sta dentro quello di $C$, allora il cerchio di $A$ sta dentro quello di $C$. Nel terzo e nel quarto schema si considera l'elemento che la premessa con "alcuni" garantisce. Quell'elemento sta in $B$, quindi la seconda premessa dice se sta anche in $C$.

::venn{tipo="tre" zone="abc,bc,c" nomi="A,B,C" titolo="Tutti gli $A$ sono $B$ e tutti i $B$ sono $C$: le zone colorate sono le sole che possono contenere elementi, e quelle di $A$ stanno dentro $C$"}

:::

:::osservazione{#venn-tre-insiemi titolo="Verifica con tre cerchi"}
Per controllare una conclusione si disegnano tre cerchi, uno per categoria, e si leggono le premesse.

- "Tutti gli $A$ sono $B$" svuota le zone di $A$ fuori da $B$; "Nessun $A$ è $B$" svuota le zone comuni ad $A$ e $B$.
- "Alcuni $A$ sono $B$" mette un segno $\times$ in una zona comune ad $A$ e $B$ rimasta disponibile.

La conclusione segue necessariamente se si legge già nel disegno. Con le premesse "Tutti i medici sono laureati" e "Alcuni laureati sono sportivi" il segno $\times$ può stare fuori dal cerchio dei medici, quindi "Alcuni medici sono sportivi" non segue.

::venn{tipo="tre" zone="ab,abc,b,bc,c" nomi="medici,laureati,sportivi" elementi="bc:×" titolo="Il laureato sportivo $\times$ può stare fuori dal cerchio dei medici, quindi la conclusione su medici e sportivi non segue"}

:::

## Problemi con dati insiemistici

:::teorema{#conteggio-due-insiemi titolo="Conteggio con due insiemi"}
Se $|A|$ indica il numero di elementi dell'insieme $A$, allora
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
Sommando $|A|$ e $|B|$ gli elementi comuni vengono contati due volte, perciò si sottraggono una volta. La formula serve nei quesiti su gruppi di persone e attività scelte. Su $40$ clienti, $23$ hanno un abbonamento telefonico, $19$ un abbonamento a internet e $9$ entrambi. I clienti con almeno un abbonamento sono $23 + 19 - 9 = 33$, quindi $40 - 33 = 7$ clienti non ne hanno nessuno. Solo il telefono lo hanno $23 - 9 = 14$ clienti.

::venn{zone="a,ab,b" nomi="T,I" elementi="a:14;ab:9;b:10;u:7" titolo="Clienti con abbonamento telefonico ($T$) e internet ($I$): $14 + 9 + 10 = 33$ hanno almeno un abbonamento, $7$ nessuno"}

:::

:::teorema{#conteggio-tre-insiemi titolo="Conteggio con tre insiemi"}
Con tre insiemi vale
$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| .
$$
Un elemento comune a tutti e tre gli insiemi è contato tre volte nella prima somma e tolto tre volte con le intersezioni a due, perciò si aggiunge una volta alla fine. In pratica conviene riempire il diagramma dal centro verso l'esterno. In una classe di $50$ studenti, $22$ studiano inglese, $18$ francese, $15$ spagnolo; $7$ studiano inglese e francese, $5$ inglese e spagnolo, $4$ francese e spagnolo, $2$ tutte e tre. Al centro vanno $2$ studenti; nella zona "inglese e francese, non spagnolo" vanno $7 - 2 = 5$ studenti, e così via. Solo inglese studiano $22 - 5 - 3 - 2 = 12$ studenti. Gli studenti che studiano almeno una lingua sono
$$
22 + 18 + 15 - 7 - 5 - 4 + 2 = 41 ,
$$
quindi $9$ studenti non ne studiano nessuna.

::venn{tipo="tre" nomi="I,F,S" elementi="a:12;b:9;c:8;ab:5;ac:3;bc:2;abc:2;u:9" titolo="Studenti di inglese ($I$), francese ($F$) e spagnolo ($S$), con le zone riempite dal centro verso l'esterno"}

:::

## Ordinamenti e confronti

:::definizione{#relazioni-di-ordine titolo="Relazioni di confronto"}
Frasi come "è più alto di", "guadagna più di", "arriva prima di" sono **relazioni di confronto**. Per esse vale la **proprietà transitiva**: se Anna è più alta di Bruno e Bruno è più alto di Carla, allora Anna è più alta di Carla. Per risolvere un quesito si traduce ogni frase con il simbolo $>$, tenendo sempre lo stesso verso, e si dispongono i nomi su una riga. La frase "Carla è più bassa di Bruno" si scrive $B > C$. Da $D > A$, $A > B$ e $B > C$ si ottiene la catena
$$
D > A > B > C ,
$$
quindi Dario è il più alto e Carla la più bassa.
:::

:::osservazione{#ordinamenti-indeterminati titolo="Confronti non determinati"}
Spesso i dati non bastano per ordinare tutti. Con "Marco guadagna più di Luca" e "Paola guadagna più di Luca" si sa che Luca guadagna meno di entrambi, ma il confronto tra Marco e Paola non è determinato. Le domande "quale affermazione è *necessariamente* vera" chiedono una relazione che vale in *ogni* ordinamento compatibile con i dati. Un'opzione si scarta mostrando un ordinamento compatibile in cui è falsa. Nei quesiti con le posizioni in una fila o in una gara si scrivono tutte le disposizioni possibili, che di solito sono due o tre, e si cerca ciò che hanno in comune.
:::

## Proporzioni e ragionamento numerico

:::teorema{#proporzionalita titolo="Proporzionalità diretta, inversa e composta"}
Due grandezze sono **direttamente proporzionali** se il loro rapporto è costante e **inversamente proporzionali** se il loro prodotto è costante. Se $5$ quaderni costano $7{,}50$ euro, un quaderno costa $1{,}50$ euro e $12$ quaderni costano $18$ euro. Se $6$ operai finiscono un lavoro in $10$ giorni, il lavoro vale $60$ giornate-operaio, quindi $4$ operai impiegano $15$ giorni.

Quando le grandezze in gioco sono più di due, si calcola la quantità prodotta da *una* unità in *una* unità di tempo. Se $3$ macchine producono $240$ pezzi in $4$ ore, una macchina produce in un'ora
$$
\frac{240}{3 \cdot 4} = 20 \text{ pezzi},
$$
perciò $5$ macchine in $6$ ore producono $5 \cdot 6 \cdot 20 = 600$ pezzi. Per proporzioni e percentuali si rimanda al capitolo "Insiemi, numeri e percentuali".
:::

:::teorema{#miscele titolo="Media ponderata e miscele"}
Mescolando $p$ kg di un prodotto al prezzo $a$ con $q$ kg di un prodotto al prezzo $b$, il prezzo al kg della miscela è la **media ponderata**
$$
\frac{p \cdot a + q \cdot b}{p + q} .
$$
Il numeratore è la spesa totale e il denominatore il peso totale. Con $30$ kg di caffè a $4$ euro al kg e $20$ kg a $9$ euro al kg la miscela costa $\dfrac{120 + 180}{50} = 6$ euro al kg. La media ponderata sta sempre tra $a$ e $b$, più vicina al prezzo del prodotto presente in quantità maggiore.
:::

:::osservazione{#problemi-con-equazioni titolo="Problemi che si traducono in equazioni"}
Molti quesiti di ragionamento numerico si risolvono scegliendo un'incognita e scrivendo un'equazione o un sistema. Un teatro vende $30$ biglietti, interi a $8$ euro e ridotti a $5$ euro, e incassa $204$ euro. Con $x$ biglietti interi i ridotti sono $30 - x$, quindi
$$
8x + 5\,(30 - x) = 204
\iff
3x = 54
\iff
x = 18 .
$$
I biglietti interi sono $18$ e i ridotti $12$. Come controllo, $18 \cdot 8 + 12 \cdot 5 = 144 + 60 = 204$. Per i sistemi si rimanda al capitolo "Equazioni, disequazioni e sistemi".
:::

## Serie numeriche e simboli

:::definizione{#serie-numeriche titolo="Serie numeriche"}
Una **serie numerica** da completare è un elenco di numeri costruito con una regola, e il quesito chiede il termine mancante. Le regole più frequenti sono queste.

- Differenza costante: $4, 7, 10, 13$ cresce di $3$ a ogni passo.
- Differenze che crescono con regolarità: in $1, 3, 7, 13, 21$ le differenze sono $2, 4, 6, 8$.
- Rapporto costante: $3, 6, 12, 24$ raddoppia a ogni passo.
- Due operazioni di seguito: in $2, 5, 11, 23$ ogni termine è il doppio del precedente più $1$.
- Quadrati, cubi e loro variazioni: $2, 5, 10, 17, 26$ sono i numeri $n^2 + 1$.
- Ogni termine è la somma dei due precedenti: $2, 3, 5, 8, 13$.

Il primo controllo è sempre la serie delle differenze tra termini consecutivi. Se le differenze non mostrano una regola, si guardano i rapporti.
:::

:::osservazione{#serie-intercalate titolo="Serie alternate e intercalate"}
In alcune serie due regole si alternano. In $3, 8, 6, 11, 9$ si somma $5$ e si sottrae $2$ a turno, quindi il termine successivo è $14$. In altre serie i termini di posto dispari e quelli di posto pari formano due serie separate. Nella serie $2, 30, 4, 27, 8, 24$ i termini di posto dispari $2, 4, 8$ raddoppiano e quelli di posto pari $30, 27, 24$ diminuiscono di $3$. Una serie lunga, con salite e discese, si riconosce spesso come intercalata.
:::

:::teorema{#simboli-numeri titolo="Simboli al posto dei numeri"}
Nei quesiti con figure o lettere al posto dei numeri ogni simbolo è un'incognita e ogni uguaglianza è un'equazione. Se $\triangle + \triangle + \square = 17$ e $\triangle + \square = 11$, sottraendo la seconda uguaglianza dalla prima si ottiene $\triangle = 6$, quindi $\square = 5$. Quando i simboli compaiono a coppie in tre uguaglianze, conviene sommarle tutte. Con
$$
\begin{cases}
\triangle + \square = 12 \\
\square + \bigcirc = 15 \\
\triangle + \bigcirc = 13
\end{cases}
$$
la somma dà $2\,(\triangle + \square + \bigcirc) = 40$, cioè $\triangle + \square + \bigcirc = 20$, e sottraendo ciascuna uguaglianza da $20$ si trova $\bigcirc = 8$, $\triangle = 5$, $\square = 7$.
:::

:::osservazione{#cifre-lettere titolo="Lettere al posto delle cifre"}
Quando le lettere indicano cifre, un numero di due cifre scritto $AB$ vale $10A + B$. Questa scrittura trasforma il quesito in un'equazione. Per esempio $AB + BA = 10A + B + 10B + A = 11\,(A + B)$, quindi la somma di un numero di due cifre e del numero con le cifre scambiate è sempre un multiplo di $11$. Se $AB + BA = 99$, allora $A + B = 9$. Le cifre sono numeri interi da $0$ a $9$, e la prima cifra di un numero è diversa da $0$; questi vincoli escludono molte possibilità.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Metodi rapidi per i quiz"}
Con un minuto a quesito, molti quesiti di logica si risolvono con poche operazioni.

- **Forma della risposta**. La negazione di un'implicazione contiene "e" e non contiene "se", quindi le opzioni con "se" si scartano subito. La negazione di una frase con "tutti" contiene "almeno uno … non" oppure "non tutti".
- **Caso falso**. La negazione di una frase descrive esattamente i casi in cui la frase è falsa.
- **Controesempio**. Un'opzione si elimina trovando una situazione compatibile con i dati in cui è falsa. Per i sillogismi bastano categorie familiari, come animali, numeri o città.
- **Schema a margine**. Lettere per gli enunciati, frecce per le implicazioni, una riga con i simboli $>$ per gli ordinamenti, tre cerchi per gli insiemi riempiti dal centro.
- **Sostituzione delle opzioni**. Nei quesiti numerici e con i simboli si prova ogni opzione nei dati del testo, e la risposta è l'opzione che soddisfa tutte le condizioni. Nelle serie si inserisce il valore proposto e si controlla che la regola valga fino all'ultimo termine.
- **Ordine di grandezza**. In un problema di proporzionalità il risultato deve crescere o diminuire nel verso previsto. Con meno operai servono più giorni, quindi una risposta minore del tempo iniziale si scarta.
:::
