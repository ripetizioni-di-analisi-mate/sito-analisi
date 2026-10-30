---
titolo: Condizioni necessarie e sufficienti
sommario: Che cosa significano condizione sufficiente, condizione necessaria e condizione necessaria e sufficiente, come si traduce ogni formulazione in un'implicazione con il verso giusto, quali deduzioni sono valide e come si risolvono i quesiti su catene di implicazioni, regolamenti e bandi.
---

## Condizione sufficiente

:::definizione{#condizione-sufficiente titolo="Condizione sufficiente"}
Un'**affermazione**, o proposizione, è una frase che è vera oppure falsa, come "oggi piove" o "Marco ha la patente". Date due affermazioni $A$ e $B$, si dice che $A$ è **condizione sufficiente** per $B$ quando, ogni volta che $A$ è vera, anche $B$ è vera. Il legame si esprime con la frase "se $A$, allora $B$", che si chiama **implicazione**; $A$ è l'*antecedente* e $B$ il *conseguente*. Nei testi dei concorsi la stessa implicazione compare in più forme:

- "se $A$, allora $B$", oppure "se $A$, $B$";
- "basta che $A$ perché $B$", oppure "è sufficiente che $A$ perché $B$";
- "ogni volta che $A$, $B$", oppure "quando $A$, $B$".

Nella frase «Se un pacco pesa più di $20$ kg, si paga un supplemento» pesare più di $20$ kg è condizione sufficiente per pagare il supplemento. Saputo che un pacco pesa $25$ kg, si conclude che per quel pacco si paga il supplemento, senza bisogno di altre informazioni.
:::

:::teorema{#quando-e-falsa titolo="Quando un'implicazione è falsa"}
L'implicazione "se $A$, allora $B$" è falsa in un solo caso, quando $A$ è vera e $B$ è falsa. Negli altri tre casi è vera.

| $A$ | $B$ | se $A$, allora $B$ |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

La frase «Se piove, Luca prende l'autobus» parla soltanto dei giorni di pioggia, perciò è smentita solo da un giorno in cui piove e Luca non prende l'autobus. In un giorno senza pioggia Luca può prendere l'autobus oppure andare a piedi, e in entrambi i casi la frase resta vera. Con la tabella si risolvono i quesiti che chiedono quale situazione *non può* verificarsi, perché l'unica situazione esclusa da "se $A$, allora $B$" è quella con $A$ vera e $B$ falsa.
:::

:::osservazione{#implicazione-e-inclusione titolo="Lettura con gli insiemi"}
Quando $A$ e $B$ descrivono proprietà di persone, animali o numeri, la frase "se un elemento ha la proprietà $A$, allora ha la proprietà $B$" significa che l'insieme degli elementi con la proprietà $A$ è contenuto nell'insieme degli elementi con la proprietà $B$. La frase «Se un animale è un gatto, allora è un mammifero» dice che l'insieme dei gatti sta dentro l'insieme dei mammiferi.

::venn{tipo="incluso" zone="ab" nomi="mammiferi,gatti" titolo="L'insieme dei gatti è contenuto nell'insieme dei mammiferi, quindi essere un gatto è condizione sufficiente per essere un mammifero"}

Un elemento del cerchio piccolo sta anche nel cerchio grande, quindi essere un gatto basta per essere un mammifero. Un elemento del cerchio grande può stare fuori da quello piccolo, come un cane, quindi essere un mammifero non basta per essere un gatto.
:::

## Condizione necessaria

:::definizione{#condizione-necessaria titolo="Condizione necessaria"}
Si dice che $B$ è **condizione necessaria** per $A$ quando $A$ non può essere vera se $B$ è falsa. Le formulazioni più frequenti sono:

- "$A$ solo se $B$", oppure "$A$ soltanto se $B$";
- "per $A$ è necessario che $B$", "occorre che $B$", "bisogna che $B$";
- "senza $B$ non si ha $A$";
- "$B$ è indispensabile per $A$".

Nella frase «Si entra in aula solo se si mostra un documento» mostrare il documento è condizione necessaria per entrare. Quindi chi è entrato in aula ha mostrato il documento, e chi non lo ha mostrato non è entrato. La frase non garantisce l'ingresso a chi mostra il documento, perché un candidato con il documento può essere escluso per un altro motivo, per esempio perché è arrivato in ritardo.
:::

:::teorema{#necessaria-e-implicazione titolo="Due letture della stessa implicazione"}
$B$ è condizione *necessaria* per $A$ se e solo se vale l'implicazione "se $A$, allora $B$". Perciò le due frasi

- "$A$ è condizione sufficiente per $B$",
- "$B$ è condizione necessaria per $A$"

hanno lo stesso significato. Ogni implicazione si legge in due modi, e l'antecedente è sufficiente per il conseguente, mentre il conseguente è necessario per l'antecedente. La regola vale perché "$B$ è necessaria per $A$" esclude soltanto il caso in cui $A$ è vera e $B$ è falsa, che è l'unico caso in cui "se $A$, allora $B$" è falsa.

Per un numero intero $n$ vale «se $n$ è multiplo di $4$, allora $n$ è pari». Quindi essere multiplo di $4$ è sufficiente per essere pari, ed essere pari è necessario per essere multiplo di $4$, perché un numero dispari non è mai multiplo di $4$.
:::

:::attenzione{#solo-se titolo="«Solo se» e «se»"}
La frase "$A$ solo se $B$" *non* equivale a "$A$ se $B$". La frase «Il cancello si apre solo se si inserisce il badge» si traduce con "se il cancello si apre, allora il badge è stato inserito". Inserire il badge è necessario, e la frase non dice che basti. Se con un badge scaduto il cancello resta chiuso, la frase è comunque vera. La frase «Il cancello si apre se si inserisce il badge» si traduce invece con "se si inserisce il badge, allora il cancello si apre", che è l'implicazione nel verso opposto.
:::

## Condizione necessaria e sufficiente

:::definizione{#condizione-necessaria-e-sufficiente titolo="Condizione necessaria e sufficiente"}
$A$ è **condizione necessaria e sufficiente** per $B$ quando valgono insieme le due implicazioni "se $A$, allora $B$" e "se $B$, allora $A$". In questo caso $A$ e $B$ sono entrambe vere oppure entrambe false, e si scrive "$A$ *se e solo se* $B$". Altre formulazioni sono "se e soltanto se" e "tutti e soli".

La frase «Ricevono la tessera tutti e soli i soci che hanno pagato la quota» contiene due implicazioni. La parola *tutti* dice che ogni socio che ha pagato riceve la tessera; la parola *soli* dice che chi riceve la tessera ha pagato. Quindi un socio che non ha ricevuto la tessera non ha pagato la quota, e un socio che non ha pagato non riceve la tessera.
:::

:::esempio{titolo="Multipli di 6"}
Per un numero intero positivo $n$, essere multiplo di $6$ è condizione necessaria e sufficiente per essere multiplo sia di $2$ sia di $3$. Se $n$ è multiplo di $6$, cioè $n = 6k$ con $k$ intero, allora $n = 2 \cdot 3k$ e $n = 3 \cdot 2k$, quindi $n$ è multiplo di $2$ e di $3$. Viceversa, se $n$ è multiplo di $2$ e di $3$, la scomposizione di $n$ in fattori primi contiene sia $2$ sia $3$, perciò $n$ è multiplo di $2 \cdot 3 = 6$.
:::

:::osservazione{#quattro-casi titolo="I quattro casi possibili"}
Per stabilire che tipo di condizione è $A$ rispetto a $B$ si controllano le due implicazioni, una alla volta.

| se $A$, allora $B$ | se $B$, allora $A$ | $A$ rispetto a $B$ è condizione |
| --- | --- | --- |
| vale | non vale | sufficiente ma non necessaria |
| non vale | vale | necessaria ma non sufficiente |
| vale | vale | necessaria e sufficiente |
| non vale | non vale | né necessaria né sufficiente |

Per mostrare che un'implicazione non vale basta un **controesempio**, cioè un caso in cui l'antecedente è vero e il conseguente è falso. Per $n$ intero, "$n$ è multiplo di $4$" rispetto a "$n$ è pari" è condizione sufficiente ma non necessaria, perché ogni multiplo di $4$ è pari, mentre $6$ è pari e non è multiplo di $4$. Invece "$n$ è multiplo di $3$" rispetto a "$n$ è pari" è condizione né necessaria né sufficiente, perché $3$ è multiplo di $3$ ed è dispari, e $2$ è pari e non è multiplo di $3$.

::venn{tipo="incluso" zone="ab" nomi="pari,multipli di 4" elementi="a:2,6,10;ab:4,8,12" titolo="I multipli di $4$ sono contenuti nei numeri pari, mentre $2$, $6$ e $10$ sono pari e non sono multipli di $4$"}

:::

## Tradurre le frasi in implicazioni

:::teorema{#tabella-delle-formulazioni titolo="Tabella delle formulazioni"}
Le frasi della tabella si traducono in implicazioni. Nella colonna di destra la freccia abbrevia "se …, allora …", come nell'argomento sui connettivi, negazioni e implicazioni, e va dalla condizione sufficiente alla condizione necessaria.

| frase del testo | implicazione |
| --- | --- |
| se $A$, allora $B$ | $A \Rightarrow B$ |
| basta che $A$ perché $B$ | $A \Rightarrow B$ |
| ogni volta che $A$, $B$ | $A \Rightarrow B$ |
| $A$ solo se $B$ | $A \Rightarrow B$ |
| per $A$ è necessario che $B$ | $A \Rightarrow B$ |
| senza $B$ non si ha $A$ | $A \Rightarrow B$ |
| $A$ se $B$ | $B \Rightarrow A$ |
| $A$, a meno che $B$ | non $B \Rightarrow A$ |
| $A$ se e solo se $B$ | $A \Rightarrow B$ e $B \Rightarrow A$ |

La regola per orientare la freccia è una sola. Ciò che è introdotto da "se", "basta che" o "ogni volta che" sta all'inizio della freccia, mentre ciò che è introdotto da "solo se", "è necessario che" o "occorre che" sta alla fine. La frase «Il rimborso viene erogato solo se si presenta la ricevuta» diventa quindi "rimborso erogato" seguito dalla freccia e da "ricevuta presentata".
:::

:::osservazione{#a-meno-che titolo="«A meno che»"}
Nei quiz di logica la frase "$A$, a meno che $B$" si traduce con "se non $B$, allora $A$". La frase «Il treno parte in orario, a meno che non ci sia uno sciopero» significa "se non c'è uno sciopero, il treno parte in orario". La frase non dice che cosa accade quando c'è lo sciopero, perché in quel caso il treno può partire in ritardo oppure in orario. Il "non" che segue "a meno che" è pleonastico, cioè non ha valore di negazione.
:::

:::teorema{#contronominale titolo="Implicazione contronominale"}
L'implicazione "se $A$, allora $B$" è equivalente alla sua **contronominale** "se non $B$, allora non $A$", cioè le due frasi sono vere e false negli stessi casi. Le due implicazioni sono infatti false nello stesso unico caso, quello in cui $A$ è vera e $B$ è falsa. Con la frase «Se un candidato supera lo scritto, è ammesso all'orale» la contronominale è «Se un candidato non è ammesso all'orale, non ha superato lo scritto».

Le altre due implicazioni associate a "se $A$, allora $B$", cioè l'*inversa* "se $B$, allora $A$" e la *contraria* "se non $A$, allora non $B$", non sono equivalenti all'implicazione di partenza. Sono invece equivalenti tra loro, perché la contraria è la contronominale dell'inversa. Le tavole di verità complete si trovano nell'argomento sui connettivi, negazioni e implicazioni.
:::

## Deduzioni valide

:::teorema{#modus-ponens titolo="Modus ponens"}
Se sono vere le due premesse "se $A$, allora $B$" e "$A$", allora è vera anche $B$. La regola è la definizione stessa di condizione sufficiente. Dalle premesse «Se un candidato supera lo scritto, è ammesso all'orale» e «Giorgio ha superato lo scritto» segue che Giorgio è ammesso all'orale.
:::

::::teorema{#modus-tollens titolo="Modus tollens"}
Se sono vere le due premesse "se $A$, allora $B$" e "non $B$", allora è vera "non $A$". Dalle premesse «Se un candidato supera lo scritto, è ammesso all'orale» e «Giorgio non è ammesso all'orale» segue che Giorgio non ha superato lo scritto. La regola serve nei quesiti in cui il dato noto è la negazione del conseguente.

:::dimostrazione
Se $A$ fosse vera, per il modus ponens sarebbe vera anche $B$, mentre la seconda premessa dice che $B$ è falsa. Quindi $A$ è falsa.
:::
::::

:::osservazione{#schema-delle-deduzioni titolo="Le quattro deduzioni a confronto"}
Con la premessa "se $A$, allora $B$" e una seconda premessa su una sola delle due affermazioni si hanno quattro casi.

| premesse | conclusione | la deduzione è |
| --- | --- | --- |
| $A \Rightarrow B$ e $A$ | $B$ | valida (modus ponens) |
| $A \Rightarrow B$ e non $B$ | non $A$ | valida (modus tollens) |
| $A \Rightarrow B$ e $B$ | $A$ | non valida (affermazione del conseguente) |
| $A \Rightarrow B$ e non $A$ | non $B$ | non valida (negazione dell'antecedente) |

Le deduzioni valide partono dall'antecedente vero oppure dal conseguente falso. Quando invece si sa che l'antecedente è falso oppure che il conseguente è vero, dell'altra affermazione non si può dire nulla.
:::

## Deduzioni non valide

:::attenzione{#affermazione-del-conseguente titolo="Affermazione del conseguente"}
Dalle premesse "se $A$, allora $B$" e "$B$" *non* segue $A$. Con le premesse «Se piove, la strada è bagnata» e «La strada è bagnata» non si può concludere che piova, perché la strada può essere stata lavata dal servizio di pulizia. Nella tavola di verità dell'implicazione le righe in cui $B$ è vera sono due, una con $A$ vera e una con $A$ falsa, e in entrambe l'implicazione è vera.
:::

:::attenzione{#negazione-dell-antecedente titolo="Negazione dell'antecedente"}
Dalle premesse "se $A$, allora $B$" e "non $A$" *non* segue "non $B$". Con le premesse «Se piove, la strada è bagnata» e «Oggi non piove» non si può concludere che la strada sia asciutta, per lo stesso motivo del lavaggio. Chi commette questo errore usa la contraria "se non $A$, allora non $B$", che non è equivalente all'implicazione data.
:::

:::osservazione{#non-si-puo-stabilire titolo="L'opzione «non si può stabilire»"}
Molti quesiti propongono tra le opzioni "non si può stabilire". Questa è la risposta corretta quando esistono due situazioni, entrambe in accordo con tutte le premesse, in cui l'affermazione richiesta è vera nella prima e falsa nella seconda. Con le premesse «Se nevica, la scuola è chiusa» e «Oggi la scuola è chiusa» vanno bene sia un giorno di neve sia un giorno senza neve in cui la scuola è chiusa per le elezioni. Quindi non si può stabilire se oggi nevichi.
:::

## Catene di implicazioni

:::teorema{#proprieta-transitiva titolo="Proprietà transitiva"}
Se valgono "se $A$, allora $B$" e "se $B$, allora $C$", allora vale anche "se $A$, allora $C$". Infatti, quando $A$ è vera, per la prima implicazione è vera $B$, e allora per la seconda è vera $C$. Dalle premesse «Se Franco va in ferie, Maria lo sostituisce» e «Se Maria sostituisce Franco, Carlo lavora anche il sabato» segue che, se Franco va in ferie, Carlo lavora anche il sabato. Le catene possono avere più anelli, e la regola si applica un anello alla volta.
:::

:::osservazione{#catene-all-indietro titolo="Percorrere una catena all'indietro"}
Sostituendo ogni anello con la sua contronominale, la catena si percorre in verso opposto con le affermazioni negate.

| catena in avanti | catena all'indietro |
| --- | --- |
| $A \Rightarrow B \Rightarrow C$ | non $C \Rightarrow$ non $B \Rightarrow$ non $A$ |

Se un dipendente che partecipa al progetto frequenta il corso, e chi frequenta il corso ottiene il certificato, allora un dipendente senza certificato non ha frequentato il corso, e quindi non partecipa al progetto. Nei quesiti il dato noto è spesso la negazione dell'ultimo anello, e la catena all'indietro porta alla risposta con un modus tollens ripetuto.
:::

:::attenzione{#catene-spezzate titolo="Frecce che non si collegano"}
Due implicazioni formano una catena solo se il conseguente della prima coincide con l'antecedente della seconda. Dalle premesse «Se c'è uno sciopero, Paola lavora da casa» e «Se nevica, Paola lavora da casa» non segue alcun legame tra lo sciopero e la neve. Le due frecce arrivano entrambe a "Paola lavora da casa", perciò sapere che Paola lavora da casa non dice quale delle due cause si sia verificata, e può darsi che non si sia verificata nessuna delle due.
:::

## Regolamenti e bandi

:::esempio{#requisiti-necessari titolo="«Può partecipare solo chi …»"}
Il bando dice: «Possono partecipare al concorso solo i candidati in possesso del diploma e della patente B». La frase si traduce con "se un candidato partecipa, allora ha il diploma e ha la patente B", quindi ogni requisito è una condizione *necessaria*.

- Chi partecipa ha il diploma e ha la patente, per il modus ponens.
- Chi non ha il diploma, oppure non ha la patente, non partecipa, per il modus tollens. Basta che manchi un solo requisito.
- Di un candidato che ha entrambi i requisiti non si sa se partecipi, perché il bando non dice che i requisiti bastano.

La negazione di "ha il diploma e ha la patente" è "non ha il diploma oppure non ha la patente", come stabiliscono le leggi di De Morgan viste nell'argomento sui connettivi.
:::

:::esempio{#requisiti-sufficienti titolo="Requisiti sufficienti e «tutti e soli»"}
Due regolamenti trattano in modo diverso un candidato con $18$ punti allo scritto.

- «Ottenere almeno $21$ punti allo scritto è sufficiente per essere ammessi all'orale.» La regola parla solo di chi ha almeno $21$ punti, quindi del candidato con $18$ punti non si può stabilire se sia ammesso.
- «Sono ammessi all'orale tutti e soli i candidati con almeno $21$ punti allo scritto.» Avere almeno $21$ punti è necessario e sufficiente, perciò il candidato con $18$ punti non è ammesso.
:::

:::osservazione{#necessariamente-vera titolo="«Necessariamente vera», «può essere vera», «non può essere vera»"}
Le domande dei quiz chiedono di classificare un'affermazione rispetto alle premesse, che si suppongono vere.

- Un'affermazione è **necessariamente vera** se è vera in ogni situazione in accordo con le premesse.
- Un'affermazione **non può essere vera** se è falsa in ogni situazione in accordo con le premesse.
- Un'affermazione *può essere vera* se esiste almeno una situazione in accordo con le premesse in cui è vera.

Con la premessa «Se piove, Luca prende l'autobus» l'affermazione "piove e Luca non prende l'autobus" non può essere vera, perché è l'unico caso in cui l'implicazione è falsa. L'affermazione "non piove e Luca prende l'autobus" può essere vera, e l'affermazione "se Luca non prende l'autobus, allora non piove" è necessariamente vera, perché è la contronominale della premessa.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Schema a margine ed eliminazione delle opzioni"}
I quesiti su condizioni e implicazioni si risolvono con poche operazioni scritte a margine.

- **Freccia a margine**: si scrive la premessa come freccia, con le iniziali delle affermazioni. "Se", "basta che" e "ogni volta che" stanno all'inizio della freccia; "solo se", "occorre che" ed "è necessario che" stanno alla fine.
- **Una sola equivalente**: tra l'inversa, la contraria e la contronominale, l'unica equivalente all'implicazione data è la contronominale. Le opzioni con l'inversa o con la contraria si eliminano, e poiché inversa e contraria sono equivalenti tra loro, due opzioni che dicono la stessa cosa in forme diverse sono entrambe sbagliate quando la risposta corretta è una sola.
- **Il caso proibito**: data la premessa "se $A$, allora $B$", l'unica situazione impossibile è "$A$ e non $B$". Nei quesiti "non può essere vera" si cerca l'opzione che afferma l'antecedente e nega il conseguente.
- **Controesempio**: per scartare un'opzione basta una situazione in accordo con le premesse in cui l'opzione è falsa.
- **Catene**: le frecce si dispongono in fila; se il dato noto nega l'ultimo anello, la catena si percorre all'indietro negando ogni anello.
:::
