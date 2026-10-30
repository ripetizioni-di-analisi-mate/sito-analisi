---
titolo: Sillogismi e quantificatori
sommario: Come si leggono e si negano le frasi con tutti, nessuno e alcuni, quali coppie di frasi possono essere vere o false insieme, e come si decide con i diagrammi di Venn se una conclusione segue necessariamente dalle premesse.
---

## Quantificatori

:::definizione{#quantificatori titolo="Quantificatore universale ed esistenziale"}
Molte frasi dei quiz parlano di una **categoria** di persone o di cose (i candidati, gli uffici, i treni) e dicono quanti dei suoi elementi hanno una certa proprietà. Le parole che indicano questa quantità si chiamano **quantificatori**.

- Il **quantificatore universale** riguarda *ogni* elemento della categoria. Si esprime con "tutti", "ogni", "qualunque", e nella forma negativa con "nessuno".
- Il **quantificatore esistenziale** riguarda *almeno un* elemento della categoria. Si esprime con "alcuni", "qualche", "almeno uno", "esiste", "c'è".

La frase "Ogni sportello è aperto" è universale, quindi basta un solo sportello chiuso per renderla falsa. La frase "C'è uno sportello aperto" è esistenziale, quindi basta un solo sportello aperto per renderla vera.
:::

:::osservazione{#alcuni-in-senso-logico titolo="Alcuni significa almeno uno"}
In logica "alcuni" significa *almeno uno, forse tutti*. La frase "Alcuni dipendenti parlano inglese" è vera se un solo dipendente parla inglese, ed è vera anche se lo parlano tutti. Nella lingua di tutti i giorni chi dice "alcuni" spesso intende "alcuni sì e altri no"; nei quiz questa seconda informazione non è contenuta nella frase. Perciò da "Alcuni dipendenti parlano inglese" segue "Almeno un dipendente parla inglese", mentre "Alcuni dipendenti non parlano inglese" non segue.
:::

:::osservazione{#categorie-non-vuote titolo="Categorie con almeno un elemento"}
Nei quiz si intende che ogni categoria nominata abbia almeno un elemento. Per esempio, se il testo parla dei vigili del turno di notte, almeno un vigile fa il turno di notte. Con questa convenzione da "Tutti i vigili del turno di notte hanno la patente" segue "Alcuni vigili del turno di notte hanno la patente". Quando una deduzione dipende da questa convenzione, il testo del quesito di solito la rende esplicita, per esempio con "Sullo scaffale ci sono $12$ libri".
:::

## Le quattro forme

:::definizione{#forma-universale-affermativa titolo="Tutti gli A sono B"}
La frase "Tutti gli $A$ sono $B$" afferma che ogni elemento della categoria $A$ appartiene anche alla categoria $B$. In un diagramma di Venn il cerchio di $A$ è contenuto nel cerchio di $B$. La frase non dice nulla sugli elementi di $B$ che stanno fuori da $A$, quindi da "Tutti i carabinieri hanno superato una visita medica" non segue che chi ha superato una visita medica sia un carabiniere.

::venn{tipo="incluso" zone="a,ab" nomi="B,A" titolo="Tutti gli $A$ sono $B$: le zone colorate sono quelle che possono contenere elementi, e la parte di $A$ fuori da $B$ non esiste"}

:::

:::definizione{#forma-universale-negativa titolo="Nessun A è B"}
La frase "Nessun $A$ è $B$" afferma che nessun elemento appartiene a entrambe le categorie. I due cerchi sono separati. La frase si può leggere nei due versi, quindi "Nessun medico del reparto è uno specializzando" e "Nessuno specializzando è un medico del reparto" dicono la stessa cosa.

::venn{tipo="disgiunti" zone="a,b" nomi="A,B" titolo="Nessun $A$ è $B$: le due categorie non hanno elementi in comune"}

:::

:::definizione{#forma-particolare-affermativa titolo="Alcuni A sono B"}
La frase "Alcuni $A$ sono $B$" afferma che almeno un elemento appartiene sia ad $A$ sia a $B$. Nel diagramma si segna con il simbolo $\times$ la zona comune, che contiene sicuramente almeno un elemento; le altre zone possono essere piene oppure vuote. Anche questa frase si legge nei due versi, quindi "Alcuni turisti sono francesi" equivale ad "Alcuni francesi sono turisti", perché entrambe affermano che esiste un turista francese.

::venn{zone="a,ab,b" nomi="A,B" elementi="ab:×" titolo="Alcuni $A$ sono $B$: il simbolo $\times$ indica che la parte comune contiene almeno un elemento"}

:::

:::definizione{#forma-particolare-negativa titolo="Alcuni A non sono B"}
La frase "Alcuni $A$ non sono $B$" afferma che almeno un elemento di $A$ sta fuori da $B$. Il simbolo $\times$ va nella parte di $A$ esterna a $B$. A differenza di "Nessun $A$ è $B$" e di "Alcuni $A$ sono $B$", questa frase non si può rovesciare. La frase "Alcuni laureati non sono dirigenti" può essere vera in un ufficio in cui tutti i dirigenti sono laureati, perciò da essa non segue "Alcuni dirigenti non sono laureati".

::venn{zone="a,ab,b" nomi="A,B" elementi="a:×" titolo="Alcuni $A$ non sono $B$: almeno un elemento di $A$ sta fuori da $B$"}

:::

:::osservazione{#frasi-equivalenti titolo="Frasi equivalenti nei testi dei quiz"}
Due frasi sono **equivalenti** quando sono vere nelle stesse situazioni. I bandi e i quiz usano molte formulazioni diverse per le quattro forme.

| formulazione del quiz | forma |
| --- | --- |
| Ogni $A$ è $B$; chi è $A$ è $B$; solo i $B$ sono $A$ | Tutti gli $A$ sono $B$ |
| Nessun $A$ è $B$; nessun $B$ è $A$; non esiste un $A$ che sia $B$ | Nessun $A$ è $B$ |
| Almeno un $A$ è $B$; esiste un $A$ che è $B$; alcuni $B$ sono $A$ | Alcuni $A$ sono $B$ |
| Non tutti gli $A$ sono $B$; almeno un $A$ non è $B$ | Alcuni $A$ non sono $B$ |

La frase "Solo i dipendenti con cinque anni di servizio possono chiedere il trasferimento" significa che chi chiede il trasferimento ha cinque anni di servizio, quindi equivale a "Tutti quelli che possono chiedere il trasferimento hanno cinque anni di servizio". Il verso di "solo" è trattato per esteso nell'argomento sulle condizioni necessarie e sufficienti.
:::

## Negazione delle frasi quantificate

:::teorema{#negazione-quantificatori titolo="Negazione delle quattro forme"}
La **negazione** di una frase è la frase vera esattamente quando la prima è falsa. Le quattro forme si negano così:

| frase | negazione |
| --- | --- |
| Tutti gli $A$ sono $B$ | Alcuni $A$ non sono $B$ (almeno un $A$ non è $B$) |
| Alcuni $A$ non sono $B$ | Tutti gli $A$ sono $B$ |
| Nessun $A$ è $B$ | Alcuni $A$ sono $B$ (almeno un $A$ è $B$) |
| Alcuni $A$ sono $B$ | Nessun $A$ è $B$ |

La regola vale perché una frase universale diventa falsa appena si trova un solo elemento che non la rispetta. Per rendere falsa "Tutti gli sportelli sono aperti" basta uno sportello chiuso, quindi la negazione è "Almeno uno sportello non è aperto". Allo stesso modo "Nessun candidato è arrivato in ritardo" è falsa appena un candidato è arrivato in ritardo.
:::

:::attenzione
La negazione di "Tutti gli $A$ sono $B$" *non* è "Nessun $A$ è $B$". In un ufficio con $10$ dipendenti, di cui $7$ laureati, la frase "Tutti i dipendenti sono laureati" è falsa e anche "Nessun dipendente è laureato" è falsa. Due frasi entrambe false non sono una la negazione dell'altra, perciò "Nessun dipendente è laureato" non è la negazione cercata. La negazione corretta è "Almeno un dipendente non è laureato", che in quell'ufficio è vera.
:::

:::esempio{titolo="Negazione con una proprietà composta"}
La frase "Ogni candidato ammesso ha superato sia la prova scritta sia la prova orale" è universale, quindi la sua negazione afferma che esiste un candidato ammesso che *non* ha superato entrambe le prove. Per le leggi di De Morgan, trattate nell'argomento sui connettivi, "non (scritta e orale)" equivale a "non scritta oppure non orale", con la "o" inclusiva. La negazione è perciò "Almeno un candidato ammesso non ha superato la prova scritta oppure non ha superato la prova orale".
:::

## Il quadrato logico

:::definizione{#quadrato-logico titolo="Contraddittorie, contrarie e subcontrarie"}
Il **quadrato logico** classifica le coppie formate dalle quattro forme con gli stessi $A$ e $B$, secondo la possibilità che le due frasi siano vere insieme o false insieme.

- Due frasi sono **contraddittorie** se non possono essere né entrambe vere né entrambe false, cioè se una è la negazione dell'altra.
- Due frasi sono **contrarie** se non possono essere entrambe vere, ma possono essere entrambe false.
- Due frasi sono **subcontrarie** se possono essere entrambe vere, ma non possono essere entrambe false.

| coppia | relazione | entrambe vere | entrambe false |
| --- | --- | --- | --- |
| Tutti gli $A$ sono $B$ / Alcuni $A$ non sono $B$ | contraddittorie | no | no |
| Nessun $A$ è $B$ / Alcuni $A$ sono $B$ | contraddittorie | no | no |
| Tutti gli $A$ sono $B$ / Nessun $A$ è $B$ | contrarie | no | sì |
| Alcuni $A$ sono $B$ / Alcuni $A$ non sono $B$ | subcontrarie | sì | no |

Le frasi "Tutti i treni sono in orario" e "Nessun treno è in orario" sono contrarie, perché sono false entrambe in una giornata in cui alcuni treni sono in orario e altri no. Le frasi "Alcuni treni sono in orario" e "Alcuni treni non sono in orario" sono subcontrarie, perché sono vere entrambe in una giornata in cui alcuni treni sono in orario e altri no, e non possono essere false entrambe, perché ogni treno è in orario oppure no.
:::

:::teorema{#vero-e-falso-nel-quadrato titolo="Che cosa segue dalla verità o dalla falsità di una forma"}
Se di una delle quattro forme si sa che è vera oppure falsa, la tabella dice il valore delle altre tre. Il simbolo ? indica che il valore non è determinato.

| frase data | Tutti gli $A$ sono $B$ | Nessun $A$ è $B$ | Alcuni $A$ sono $B$ | Alcuni $A$ non sono $B$ |
| --- | --- | --- | --- | --- |
| vera "Tutti gli $A$ sono $B$" | V | F | V | F |
| falsa "Tutti gli $A$ sono $B$" | F | ? | ? | V |
| vera "Nessun $A$ è $B$" | F | V | F | V |
| falsa "Nessun $A$ è $B$" | ? | F | V | ? |
| vera "Alcuni $A$ sono $B$" | ? | F | V | ? |
| falsa "Alcuni $A$ sono $B$" | F | V | F | V |
| vera "Alcuni $A$ non sono $B$" | F | ? | ? | V |
| falsa "Alcuni $A$ non sono $B$" | V | F | V | F |

Ogni riga segue dalle relazioni del quadrato logico e dalla convenzione che $A$ abbia almeno un elemento. Per esempio, se "Tutti gli $A$ sono $B$" è vera, allora ogni elemento di $A$ è anche in $B$; poiché $A$ ha almeno un elemento, "Alcuni $A$ sono $B$" è vera; la frase "Alcuni $A$ sono $B$" si dice **subalterna** di "Tutti gli $A$ sono $B$". Se invece "Alcuni $A$ sono $B$" è vera, gli altri elementi di $A$ possono stare dentro o fuori da $B$, e per questo la prima e l'ultima casella della riga contengono ?.
:::

## Il sillogismo

:::definizione{#sillogismo titolo="Sillogismo"}
Un **sillogismo** è un ragionamento formato da due frasi quantificate, dette **premesse**, e da una terza frase, detta **conclusione**. Le premesse hanno una categoria in comune, il **termine medio**, che nella conclusione non compare. Nel sillogismo

- Tutti gli ispettori sono funzionari;
- tutti i funzionari hanno superato un concorso;
- quindi tutti gli ispettori hanno superato un concorso,

il termine medio è "funzionari", e la conclusione collega le due categorie rimaste, "ispettori" e "persone che hanno superato un concorso".
:::

:::definizione{#sillogismo-valido titolo="Sillogismo valido"}
Un sillogismo è **valido** se la conclusione è vera in *ogni* situazione in cui le premesse sono vere. In un sillogismo valido non esiste quindi una situazione con le premesse vere e la conclusione falsa. Un sillogismo non valido ammette almeno una situazione di questo tipo, che si chiama **controesempio**.

I quiz chiedono quale conclusione "segue necessariamente" dalle premesse, cioè quale conclusione rende valido il sillogismo. La verità delle premesse nel mondo reale non conta, perché si accettano le premesse come vere e si controlla soltanto che cosa ne segue. Il sillogismo "Tutti i gatti sanno nuotare; Fufi è un gatto; quindi Fufi sa nuotare" è valido, anche se la prima premessa è falsa.
:::

## Sillogismi validi

:::teorema{#schemi-validi titolo="Schemi validi più frequenti"}
I sillogismi seguenti sono validi per qualunque scelta delle categorie $A$, $B$ e $C$; il termine medio è $B$.

| prima premessa | seconda premessa | conclusione |
| --- | --- | --- |
| Tutti gli $A$ sono $B$ | Tutti i $B$ sono $C$ | Tutti gli $A$ sono $C$ |
| Tutti gli $A$ sono $B$ | Nessun $B$ è $C$ | Nessun $A$ è $C$ |
| Alcuni $A$ sono $B$ | Tutti i $B$ sono $C$ | Alcuni $A$ sono $C$ |
| Alcuni $A$ sono $B$ | Nessun $B$ è $C$ | Alcuni $A$ non sono $C$ |
| Tutti i $B$ sono $A$ | Alcuni $B$ sono $C$ | Alcuni $A$ sono $C$ |

Il primo schema vale perché se il cerchio di $A$ sta dentro quello di $B$ e il cerchio di $B$ sta dentro quello di $C$, allora il cerchio di $A$ sta dentro quello di $C$. Il secondo vale perché $A$ sta dentro $B$ e $B$ non ha elementi in comune con $C$, quindi neppure $A$ ha elementi in comune con $C$. Negli ultimi tre schemi si considera l'elemento di cui la premessa con "alcuni" garantisce l'esistenza, e le premesse dicono in quali categorie si trova.

::venn{tipo="tre" zone="abc,bc,c" nomi="A,B,C" titolo="Tutti gli $A$ sono $B$ e tutti i $B$ sono $C$: l'unica zona di $A$ che può contenere elementi sta dentro $C$"}

::venn{tipo="tre" zone="ab,b,c" nomi="A,B,C" titolo="Tutti gli $A$ sono $B$ e nessun $B$ è $C$: l'unica zona di $A$ che può contenere elementi sta fuori da $C$"}

:::

:::esempio{titolo="Una premessa con alcuni"}
Dalle premesse "Alcuni dipendenti dell'anagrafe sono iscritti al sindacato" e "Tutti gli iscritti al sindacato ricevono la newsletter" segue "Alcuni dipendenti dell'anagrafe ricevono la newsletter". Infatti esiste un dipendente dell'anagrafe iscritto al sindacato; poiché è iscritto al sindacato, riceve la newsletter. Quel dipendente è quindi un dipendente dell'anagrafe che riceve la newsletter. Non segue invece "Tutti i dipendenti dell'anagrafe ricevono la newsletter", perché i dipendenti non iscritti possono non riceverla.

::venn{tipo="tre" zone="a,ac,abc,bc,c" nomi="anagr.,sind.,newsletter" elementi="abc:×" titolo="La zona degli iscritti non raggiunti dalla newsletter è vuota, quindi il dipendente $\times$ iscritto al sindacato sta nella zona comune a tutte e tre le categorie"}

:::

:::teorema{#sillogismi-con-un-individuo titolo="Sillogismi con una persona"}
Quando una premessa riguarda una singola persona, valgono i due schemi seguenti.

- Se tutti gli $A$ sono $B$ e Anna è un $A$, allora Anna è un $B$.
- Se tutti gli $A$ sono $B$ e Anna non è un $B$, allora Anna non è un $A$.

Il secondo schema vale perché, se Anna fosse un $A$, sarebbe anche un $B$ per la prima premessa. Da "Tutti i dipendenti dell'ufficio vendite hanno l'auto aziendale" e "Paolo non ha l'auto aziendale" segue quindi "Paolo non lavora nell'ufficio vendite". Lo stesso vale con una premessa negativa: se nessun socio è minorenne e Giulia è minorenne, allora Giulia non è socia.
:::

## Verifica con i diagrammi e controesempi

:::definizione{#diagramma-delle-premesse titolo="Diagramma delle premesse"}
Per controllare un sillogismo si disegnano tre cerchi che si intersecano, uno per categoria, e si leggono le premesse una alla volta.

- Una premessa con "tutti" o "nessuno" dice quali zone sono *vuote*. "Tutti gli $A$ sono $B$" svuota le zone di $A$ fuori da $B$; "Nessun $A$ è $B$" svuota le zone comuni ad $A$ e $B$.
- Una premessa con "alcuni" dice in quale zona c'è *almeno un* elemento, e lo si segna con $\times$, dopo aver svuotato le zone indicate dalle premesse universali.

Nelle figure le zone vuote restano bianche e le altre sono colorate. La conclusione segue necessariamente se è già scritta nel diagramma. Per "Tutti gli $A$ sono $C$" ogni zona colorata di $A$ deve stare dentro $C$, e per "Alcuni $A$ sono $C$" un $\times$ deve stare dentro $A$ e dentro $C$. Il metodo funziona perché il diagramma mostra tutte le situazioni compatibili con le premesse.
:::

:::osservazione{#controesempio titolo="Ricerca di un controesempio"}
Per escludere una conclusione basta una situazione concreta in cui le premesse sono vere e la conclusione è falsa. Con le premesse "Tutti i gatti sono mammiferi" e "Tutti i cani sono mammiferi", la conclusione "Tutti i gatti sono cani" è falsa nel mondo reale, mentre le premesse sono vere; quindi lo schema "Tutti gli $A$ sono $B$, tutti i $C$ sono $B$, perciò tutti gli $A$ sono $C$" **non è valido**. Un controesempio si cerca sostituendo alle categorie del quiz categorie di cui si conosce bene la situazione, come animali, numeri o città.

::venn{tipo="tre" zone="ac,bc,c" nomi="gatti,cani,mammiferi" titolo="Controesempio: gatti e cani stanno entrambi dentro i mammiferi e non hanno elementi in comune"}

:::

:::osservazione{#schemi-non-validi titolo="Schemi non validi più frequenti"}
Gli schemi seguenti compaiono spesso nei quiz. Per ciascuno c'è un controesempio, quindi la conclusione indicata non segue dalle premesse.

- **Medio non distribuito**: da "Tutti gli $A$ sono $B$" e "Tutti i $C$ sono $B$" non segue "Tutti gli $A$ sono $C$". Il controesempio è quello di gatti, cani e mammiferi.
- **Due premesse particolari**: da "Alcuni $A$ sono $B$" e "Alcuni $B$ sono $C$" non segue "Alcuni $A$ sono $C$". Alcuni numeri pari sono multipli di $3$ e alcuni multipli di $3$ sono dispari, ma nessun numero pari è dispari.
- **Due premesse negative**: da "Nessun $A$ è $B$" e "Nessun $B$ è $C$" non segue "Nessun $A$ è $C$". Nessun gatto è un pesce e nessun pesce è un mammifero, ma tutti i gatti sono mammiferi.
- **Conseguente affermato**: da "Tutti gli $A$ sono $B$" e "Luca è un $B$" non segue "Luca è un $A$". Tutti i medici sono laureati e Luca è laureato, ma Luca può essere un ingegnere.
- **Antecedente negato**: da "Tutti gli $A$ sono $B$" e "Marco non è un $A$" non segue "Marco non è un $B$". Tutti i soci del circolo pagano una quota e Marco non è socio, ma Marco può pagare la quota riservata agli ospiti.

Gli ultimi due errori sono descritti anche nell'argomento sulle condizioni necessarie e sufficienti, dove la frase "Tutti gli $A$ sono $B$" corrisponde all'implicazione "se è un $A$, allora è un $B$".
:::

:::esempio{titolo="Una conclusione che non segue"}
Dalle premesse "Tutti i dipendenti del primo piano sono laureati" e "Tutti i dipendenti part-time sono laureati" non segue "Alcuni dipendenti del primo piano sono part-time". Nel diagramma la zona comune ai tre cerchi è colorata, quindi può contenere elementi; poiché nessuna premessa vi mette un $\times$, può anche essere vuota. Un ufficio in cui i dipendenti del primo piano lavorano tutti a tempo pieno rende vere le premesse e falsa la conclusione.

::venn{tipo="tre" zone="ab,abc,bc,b" nomi="1° p.,laureati,part-time" titolo="Le zone del primo piano e del part-time fuori dai laureati sono vuote; la zona comune alle tre categorie può essere piena oppure vuota"}

:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Strategie per le domande a risposta multipla"}
Le domande sui quantificatori si risolvono in fretta con alcune operazioni ricorrenti.

- **Riscrivere le premesse nelle quattro forme**: "solo i $B$ sono $A$" diventa "Tutti gli $A$ sono $B$", "non tutti" diventa "Alcuni … non". Dopo la traduzione si riconosce lo schema.
- **Negare con la tabella**: la negazione di una frase con "tutti" contiene "almeno uno … non", e la negazione di una frase con "alcuni" contiene "nessuno". Le opzioni che negano "tutti" con "nessuno" si scartano subito.
- **Disegnare tre cerchi a margine**: si svuotano le zone indicate da "tutti" e "nessuno", poi si segna $\times$ per "alcuni". Ogni opzione si confronta con il disegno.
- **Cercare un controesempio per ogni opzione**: un'opzione che è falsa in una situazione compatibile con le premesse non segue necessariamente e si elimina. Bastano categorie familiari, come animali o numeri.
- **Controllare il verso**: "Tutti gli $A$ sono $B$" non si rovescia in "Tutti i $B$ sono $A$", mentre "Nessun $A$ è $B$" e "Alcuni $A$ sono $B$" si leggono nei due versi.

Da due premesse particolari o da due premesse negative non segue nessuna frase che colleghi le due categorie esterne, perciò in questi casi la risposta corretta è un'opzione come "nessuna delle conclusioni proposte", se compare tra quelle offerte. Nelle domande "quale non può essere vera" si cerca invece l'opzione contraddittoria con una conclusione valida.
:::
