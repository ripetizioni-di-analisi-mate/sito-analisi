---
titolo: Connettivi, negazioni e implicazioni
sommario: Come si combinano le proposizioni con "non", "e", "o", "se … allora" e "se e solo se", come si negano le frasi composte, come si traducono le frasi italiane e come si riconoscono le frasi equivalenti nei quiz di logica.
---

## Proposizioni e valori di verità

:::definizione{#proposizione titolo="Proposizione"}
Una **proposizione** è una frase che è vera oppure falsa, senza una terza possibilità. Si dice che la proposizione ha **valore di verità** V (vero) oppure F (falso). Le proposizioni si indicano con lettere maiuscole $A$, $B$, $C$.

- "Torino è in Piemonte" è una proposizione vera.
- "Un anno ha $13$ mesi" è una proposizione falsa.
- "Chiudi la porta" e "Che ore sono?" non sono proposizioni, perché un ordine e una domanda non sono né veri né falsi.

Nei quiz di logica ogni frase del testo è una proposizione, e la domanda chiede quali altre frasi sono vere, o false, quando è vera la frase data.
:::

:::definizione{#proposizioni-composte titolo="Proposizioni composte e tavole di verità"}
Una proposizione **composta** si ottiene collegando proposizioni più semplici con le parole "non", "e", "o", "se … allora", "se e solo se", che si chiamano **connettivi**. Il valore di verità di una proposizione composta dipende soltanto dai valori di verità delle parti. La frase "Anna è in ufficio e Bruno è in ferie" è composta dalle proposizioni $A$ = "Anna è in ufficio" e $B$ = "Bruno è in ferie".

Con due proposizioni i casi possibili sono quattro, cioè VV, VF, FV e FF; con tre proposizioni sono otto. La tabella che elenca tutti i casi e, per ciascuno, il valore della proposizione composta si chiama **tavola di verità**. Le tavole di verità servono a stabilire quando una frase è vera e a confrontare due frasi riga per riga.
:::

## Negazione, congiunzione e disgiunzione

:::definizione{#negazione titolo="Negazione"}
La **negazione** di $A$, scritta $\lnot A$ e letta "non $A$", è vera quando $A$ è falsa ed è falsa quando $A$ è vera.

| $A$ | $\lnot A$ |
| --- | --- |
| V | F |
| F | V |

La negazione di "Il negozio è aperto" è "Il negozio non è aperto", che si può scrivere anche "Non è vero che il negozio è aperto". Di una frase e della sua negazione, esattamente una è vera. Negando due volte si torna alla frase di partenza, quindi "Non è vero che il negozio non è aperto" equivale a "Il negozio è aperto".
:::

:::attenzione
Il contrario estremo di una frase *non* è la sua negazione. La negazione di "Il caffè è caldo" è "Il caffè non è caldo". La frase "Il caffè è freddo" è diversa, perché un caffè tiepido rende false sia "Il caffè è caldo" sia "Il caffè è freddo". Una frase e la sua negazione hanno sempre valori di verità opposti, perciò "Il caffè è freddo" non è la negazione di "Il caffè è caldo".
:::

:::definizione{#congiunzione titolo="Congiunzione"}
La **congiunzione** di $A$ e $B$, scritta $A \land B$ e letta "$A$ e $B$", è vera quando $A$ e $B$ sono *entrambe* vere ed è falsa in tutti gli altri casi.

| $A$ | $B$ | $A \land B$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

La frase "Luca ha la patente e ha l'auto" è falsa se Luca ha la patente e non ha l'auto. In un bando i requisiti uniti da "e" devono essere posseduti tutti insieme.
:::

:::definizione{#disgiunzione-inclusiva titolo="Disgiunzione inclusiva"}
La **disgiunzione** di $A$ e $B$, scritta $A \lor B$ e letta "$A$ o $B$", è vera quando *almeno una* delle due è vera, compreso il caso in cui sono vere entrambe. È falsa solo quando $A$ e $B$ sono entrambe false.

| $A$ | $B$ | $A \lor B$ |
| --- | --- | --- |
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

Questa "o" si chiama **inclusiva**, ed è la "o" della logica quando il testo non dice altro. Un bando che ammette "chi ha la laurea o chi ha cinque anni di servizio" ammette anche chi ha entrambi i requisiti ed esclude soltanto chi non ne ha nessuno.
:::

:::definizione{#disgiunzione-esclusiva titolo="Disgiunzione esclusiva"}
La **disgiunzione esclusiva** "o $A$ o $B$, ma non entrambe" è vera quando *esattamente una* delle due proposizioni è vera. Rispetto alla "o" inclusiva cambia soltanto la prima riga, in cui $A$ e $B$ sono vere insieme.

| $A$ | $B$ | $A \lor B$ | o $A$ o $B$, ma non entrambe |
| --- | --- | --- | --- |
| V | V | V | F |
| V | F | V | V |
| F | V | V | V |
| F | F | F | F |

Nei quiz la "o" esclusiva è dichiarata con "ma non entrambi" o con espressioni come "uno solo dei due". La frase "Il premio va o a Giulia o a Marco, ma non a entrambi" esclude il caso in cui vincono tutti e due. Senza un'indicazione di questo tipo la "o" si legge inclusiva.
:::

## Frasi equivalenti e leggi di De Morgan

:::definizione{#equivalenza-logica titolo="Proposizioni equivalenti"}
Due proposizioni composte sono **equivalenti** se hanno lo stesso valore di verità in ogni caso, cioè se le loro tavole di verità coincidono riga per riga. Si scrive $P \equiv Q$. Due frasi equivalenti dicono la stessa cosa con parole diverse, quindi nei quiz "quale frase è equivalente a …" si cerca l'opzione che ha la stessa tavola di verità della frase data. Per la doppia negazione, per esempio, "Non è vero che Paolo non è in ufficio" è equivalente a "Paolo è in ufficio".
:::

:::teorema{#de-morgan titolo="Leggi di De Morgan"}
$$
\lnot (A \land B) \equiv \lnot A \lor \lnot B,
\qquad
\lnot (A \lor B) \equiv \lnot A \land \lnot B .
$$
La negazione di una congiunzione è la disgiunzione delle negazioni, e la negazione di una disgiunzione è la congiunzione delle negazioni. In entrambi i casi "e" diventa "o", "o" diventa "e" e ogni parte viene negata.

| $A$ | $B$ | $A \land B$ | $\lnot (A \land B)$ | $\lnot A \lor \lnot B$ |
| --- | --- | --- | --- | --- |
| V | V | V | F | F |
| V | F | F | V | V |
| F | V | F | V | V |
| F | F | F | V | V |

La congiunzione è falsa quando almeno una delle due parti è falsa, quindi la sua negazione afferma che almeno una parte è falsa, cioè $\lnot A \lor \lnot B$. Le ultime due colonne della tavola coincidono. La seconda legge si verifica allo stesso modo.
:::

:::esempio{titolo="Negare una congiunzione e una disgiunzione"}
- La negazione di "Marco parla inglese e parla tedesco" è "Marco non parla inglese oppure non parla tedesco". Basta che Marco non parli una delle due lingue perché la frase di partenza sia falsa.
- La negazione di "Stasera Ilaria va al cinema o va a teatro" è "Stasera Ilaria non va al cinema e non va a teatro", che si dice anche "Stasera Ilaria non va né al cinema né a teatro".
:::

:::attenzione
La negazione di "$A$ e $B$" *non* è "non $A$ e non $B$". Se Marco parla inglese e non parla tedesco, la frase "Marco parla inglese e parla tedesco" è falsa, e anche la frase "Marco non parla inglese e non parla tedesco" è falsa. Una frase e la sua negazione non sono mai false insieme, quindi la seconda frase non è la negazione della prima. Nei quiz l'opzione "non $A$ e non $B$" compare spesso proprio per questo errore.
:::

:::osservazione{#negazione-quantificatori titolo="Frasi con tutti, alcuni, nessuno"}
Le frasi con "tutti", "alcuni" e "nessuno" si negano con regole proprie, che si trovano nell'argomento sui sillogismi e quantificatori. Per esempio la negazione di "Tutti i dipendenti sono presenti" è "Almeno un dipendente non è presente". La frase "Nessun dipendente è presente" afferma molto di più, e sceglierla come negazione è un errore tipico.
:::

## Implicazione e doppia implicazione

:::definizione{#implicazione titolo="Implicazione"}
L'**implicazione** "se $A$ allora $B$", scritta $A \Rightarrow B$, è falsa in *un solo* caso, quando $A$ è vera e $B$ è falsa. La proposizione $A$ si chiama **antecedente** e la proposizione $B$ si chiama **conseguente**.

| $A$ | $B$ | $A \Rightarrow B$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

La promessa "Se domani c'è il sole, andiamo al mare" è smentita in un solo caso, quando domani c'è il sole e non si va al mare. Se domani non c'è il sole, la promessa riguarda un caso che non si è presentato e non è smentita, qualunque cosa si faccia; per questo le ultime due righe della tavola hanno V.
:::

:::osservazione{#lettura-implicazione titolo="Che cosa si ricava da un'implicazione"}
Sia vera la frase "Se Anna vince il concorso, si trasferisce a Roma".

- Se Anna vince il concorso, allora si trasferisce a Roma.
- Se Anna non si trasferisce a Roma, allora non ha vinto il concorso, perché altrimenti si sarebbe trasferita.
- Se Anna si trasferisce a Roma, sul concorso non si ricava nulla, perché Anna può trasferirsi per altri motivi.
- Se Anna non vince il concorso, sul trasferimento non si ricava nulla.

Le deduzioni valide e quelle non valide si studiano nell'argomento sulle condizioni necessarie e sufficienti.
:::

:::definizione{#doppia-implicazione titolo="Doppia implicazione"}
La **doppia implicazione** "$A$ se e solo se $B$", scritta $A \Leftrightarrow B$, è vera quando $A$ e $B$ hanno lo *stesso* valore di verità, cioè sono entrambe vere o entrambe false.

| $A$ | $B$ | $A \Leftrightarrow B$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

La doppia implicazione equivale alle due implicazioni $A \Rightarrow B$ e $B \Rightarrow A$ prese insieme. La frase "Il bonus è pagato se e solo se l'obiettivo è raggiunto" dice che con l'obiettivo raggiunto il bonus viene pagato e che senza obiettivo il bonus non viene pagato. In ogni riga la doppia implicazione ha il valore opposto a quello della "o" esclusiva, quindi la negazione di "o $A$ o $B$, ma non entrambe" è "$A$ se e solo se $B$".
:::

## Negazione dell'implicazione

:::teorema{#negazione-implicazione titolo="Negazione dell'implicazione"}
$$
\lnot (A \Rightarrow B) \equiv A \land \lnot B .
$$
L'implicazione è falsa soltanto quando $A$ è vera e $B$ è falsa, quindi negarla significa affermare proprio questo caso. La negazione di un'implicazione è perciò una **congiunzione**, senza "se" e senza "allora". La negazione di "Se piove, Carlo prende l'autobus" è "Piove e Carlo non prende l'autobus".
:::

:::attenzione
La negazione di "se $A$ allora $B$" *non* è "se $A$ allora non $B$". In un giorno senza pioggia le frasi "Se piove, Carlo prende l'autobus" e "Se piove, Carlo non prende l'autobus" sono vere entrambe, perché hanno l'antecedente falso. Una frase e la sua negazione non sono mai vere insieme, quindi la seconda frase non è la negazione della prima.
:::

:::teorema{#implicazione-come-disgiunzione titolo="L'implicazione come disgiunzione"}
$$
A \Rightarrow B \equiv \lnot A \lor B .
$$

| $A$ | $B$ | $A \Rightarrow B$ | $\lnot A$ | $\lnot A \lor B$ |
| --- | --- | --- | --- | --- |
| V | V | V | F | V |
| V | F | F | F | F |
| F | V | V | V | V |
| F | F | V | V | V |

Le due proposizioni sono false nello stesso, unico caso, con $A$ vera e $B$ falsa, perciò hanno la stessa tavola di verità. La frase "Se Mario esce, prende l'ombrello" equivale quindi a "Mario non esce oppure prende l'ombrello". Questa forma permette di riconoscere un'implicazione scritta senza "se" e di negarla con le leggi di De Morgan, perché $\lnot (\lnot A \lor B) \equiv A \land \lnot B$.
:::

## Inversa, contraria e contronominale

:::definizione{#inversa-contraria-contronominale titolo="Inversa, contraria e contronominale"}
Data l'implicazione $A \Rightarrow B$, si costruiscono tre implicazioni collegate.

- L'**inversa** $B \Rightarrow A$ scambia antecedente e conseguente.
- La **contraria** $\lnot A \Rightarrow \lnot B$ nega antecedente e conseguente.
- La **contronominale** $\lnot B \Rightarrow \lnot A$ li scambia e li nega.

Per la frase "Se Giorgio abita a Napoli, abita in Campania" l'inversa è "Se Giorgio abita in Campania, abita a Napoli", la contraria è "Se Giorgio non abita a Napoli, non abita in Campania" e la contronominale è "Se Giorgio non abita in Campania, non abita a Napoli". Nei quiz "quale frase è equivalente a …" queste tre implicazioni compaiono spesso tra le opzioni.
:::

:::teorema{#contronominale titolo="Equivalenza con la contronominale"}
Un'implicazione è equivalente alla sua contronominale,
$$
A \Rightarrow B \equiv \lnot B \Rightarrow \lnot A ,
$$
mentre l'inversa e la contraria sono equivalenti tra loro e *non* sono equivalenti all'implicazione di partenza.

| $A$ | $B$ | $A \Rightarrow B$ | inversa $B \Rightarrow A$ | contraria $\lnot A \Rightarrow \lnot B$ | contronominale $\lnot B \Rightarrow \lnot A$ |
| --- | --- | --- | --- | --- | --- |
| V | V | V | V | V | V |
| V | F | F | V | V | F |
| F | V | V | F | F | V |
| F | F | V | V | V | V |

Le colonne di $A \Rightarrow B$ e della contronominale coincidono, mentre l'inversa e la contraria differiscono da esse nella seconda e nella terza riga. La frase "Se Giorgio abita a Napoli, abita in Campania" è vera, e lo è anche la contronominale "Se Giorgio non abita in Campania, non abita a Napoli". L'inversa "Se Giorgio abita in Campania, abita a Napoli" è invece falsa quando Giorgio abita a Salerno.

::venn{tipo="incluso" zone="u" nomi="Campania,Napoli" universo=1 titolo="Napoli è contenuta nella Campania, quindi chi abita fuori dalla Campania, nella zona colorata, abita anche fuori da Napoli; chi abita in Campania può invece abitare fuori da Napoli"}

:::

## Dalle frasi italiane ai connettivi

:::osservazione{#solo-se titolo="Se, solo se, basta che, occorre che"}
La parola "se", usata da sola, introduce l'antecedente, anche quando sta in fondo alla frase. Perciò "Luca prende l'auto se piove" significa "se piove, allora Luca prende l'auto".

L'espressione "solo se" introduce invece il conseguente, quindi "$A$ solo se $B$" significa $A \Rightarrow B$. La frase "Elena entra nella sala server solo se ha il badge" significa "se Elena entra nella sala server, allora ha il badge". Avere il badge non garantisce che Elena entri, perciò la frase non dice "se Elena ha il badge, allora entra".

- "$B$ se $A$", "basta che $A$ perché $B$" ed "è sufficiente $A$ per $B$" significano $A \Rightarrow B$.
- "$A$ solo se $B$", "occorre $B$ perché $A$" ed "è necessario $B$ per $A$" significano $A \Rightarrow B$.

Il legame tra queste formule e le condizioni necessarie e sufficienti si studia nell'argomento sulle condizioni necessarie e sufficienti.
:::

:::osservazione{#a-meno-che titolo="A meno che"}
La frase "$A$, a meno che $B$" significa "se non $B$, allora $A$", cioè $\lnot B \Rightarrow A$, che per la regola dell'implicazione come disgiunzione equivale ad "$A$ o $B$". In italiano dopo "a meno che" si mette spesso un "non" che non ha valore di negazione. La frase "Il volo parte alle 18:00, a meno che non ci sia nebbia" significa "se non c'è nebbia, allora il volo parte alle 18:00". Per la contronominale, se il volo non parte alle 18:00, allora c'è nebbia.
:::

:::osservazione{#ne-ne-e-ma titolo="Né … né, ma, non è vero che"}
- "Né $A$ né $B$" significa "non $A$ e non $B$", cioè $\lnot A \land \lnot B$, che per le leggi di De Morgan è la negazione di "$A$ o $B$". La frase "Né Chiara né Enrico vengono alla cena" è vera solo se non viene nessuno dei due.
- "Ma", "però" e "mentre" hanno lo stesso valore di verità di "e". La frase "Sara ha studiato ma non ha superato l'esame" è la congiunzione $A \land \lnot B$, con $A$ = "Sara ha studiato" e $B$ = "Sara ha superato l'esame"; la parola "ma" segnala soltanto un contrasto tra le due parti.
- "Non è vero che …" nega tutta la frase che segue. La frase "Non è vero che Sara ha studiato ma non ha superato l'esame" è $\lnot (A \land \lnot B)$, che per le leggi di De Morgan equivale a $\lnot A \lor B$, cioè a "se Sara ha studiato, allora ha superato l'esame".
:::

:::esempio{titolo="Tradurre e poi negare"}
La frase "Il pacco arriva entro venerdì solo se è spedito oggi" significa "se il pacco arriva entro venerdì, allora è spedito oggi", perché "solo se" introduce il conseguente. Per la negazione dell'implicazione, la negazione della frase è "Il pacco arriva entro venerdì e non è spedito oggi".
:::

## Tautologie e contraddizioni

:::definizione{#tautologie-contraddizioni titolo="Tautologia e contraddizione"}
Una **tautologia** è una proposizione composta che è vera in ogni caso, qualunque sia il valore di verità delle proposizioni che la formano. Una **contraddizione** è una proposizione composta che è falsa in ogni caso. Nella colonna finale della tavola di verità una tautologia ha solo V e una contraddizione ha solo F.

| $A$ | $\lnot A$ | $A \lor \lnot A$ | $A \land \lnot A$ |
| --- | --- | --- | --- |
| V | F | V | F |
| F | V | V | F |

La frase "Domani piove oppure domani non piove" è vera qualunque tempo faccia, quindi è una tautologia. La frase "Domani piove e domani non piove" è una contraddizione. Una frase come "Domani piove", vera in alcuni casi e falsa in altri, non è né una tautologia né una contraddizione.
:::

:::esempio{titolo="Verifica con la tavola di verità"}
La proposizione $(A \land B) \Rightarrow A$ è una tautologia.

| $A$ | $B$ | $A \land B$ | $(A \land B) \Rightarrow A$ |
| --- | --- | --- | --- |
| V | V | V | V |
| V | F | F | V |
| F | V | F | V |
| F | F | F | V |

Un'implicazione è falsa solo con antecedente vero e conseguente falso. Quando $A \land B$ è vera, anche $A$ è vera, quindi questo caso non si presenta mai. La proposizione $(A \lor B) \Rightarrow A$ invece non è una tautologia, perché con $A$ falsa e $B$ vera l'antecedente è vero e il conseguente è falso.
:::

:::osservazione{#tautologie-ed-equivalenze titolo="Tautologie ed equivalenze"}
Due proposizioni $P$ e $Q$ sono equivalenti esattamente quando $P \Leftrightarrow Q$ è una tautologia, perché la doppia implicazione è vera solo nelle righe in cui $P$ e $Q$ hanno lo stesso valore. Per l'equivalenza con la contronominale, per esempio, la proposizione $(A \Rightarrow B) \Leftrightarrow (\lnot B \Rightarrow \lnot A)$ è una tautologia.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Metodi rapidi per i quiz"}
Molti quiz su connettivi e negazioni si risolvono senza scrivere la tavola di verità completa.

- **Schema a margine**. Si assegna una lettera a ogni frase semplice, per esempio $L$ = "Laura è in ferie", si traduce il testo in simboli, si applica la regola e si ritraduce in parole.
- **Caso falso**. La negazione di una frase descrive esattamente i casi in cui la frase è falsa. Un'implicazione è falsa solo con antecedente vero e conseguente falso, una congiunzione è falsa quando almeno una parte è falsa, una disgiunzione è falsa solo quando tutte le parti sono false.
- **Forma delle opzioni**. La negazione di un'implicazione è una congiunzione, quindi le opzioni che contengono "se" si escludono subito. Nei quiz di equivalenza l'implicazione $A \Rightarrow B$ è equivalente sia a $\lnot B \Rightarrow \lnot A$ sia a $\lnot A \lor B$; l'inversa e la contraria compaiono spesso tra le opzioni sbagliate.
- **Controesempio**. Un'opzione si scarta trovando un caso in cui la frase data è vera e l'opzione è falsa.

Le negazioni più frequenti sono riassunte in questa tabella.

| frase | negazione |
| --- | --- |
| $A$ e $B$ | non $A$ o non $B$ |
| $A$ o $B$ | né $A$ né $B$ |
| se $A$ allora $B$ | $A$ e non $B$ |
| $A$ se e solo se $B$ | o $A$ o $B$, ma non entrambe |
| o $A$ o $B$, ma non entrambe | $A$ se e solo se $B$ |
:::

:::esempio{titolo="Un quiz risolto con il caso falso"}
Si cerca la negazione di "Se Laura è in ferie, Piero la sostituisce" tra le opzioni "Laura non è in ferie e Piero la sostituisce", "Se Laura è in ferie, Piero non la sostituisce", "Laura è in ferie e Piero non la sostituisce", "Se Laura non è in ferie, Piero non la sostituisce" e "Laura è in ferie e Piero la sostituisce". Le due opzioni con "se" sono implicazioni, quindi si escludono subito. La frase di partenza è falsa solo quando Laura è in ferie e Piero non la sostituisce, perciò tra le tre congiunzioni rimaste la negazione è "Laura è in ferie e Piero non la sostituisce".
:::
