---
titolo: "Probabilità e dati per il TOLC-S"
sommario: "Spazi campionari, conteggi, eventi, estrazioni, frequenze e interpretazione di tabelle e grafici."
---

## Insiemi ed esiti

:::definizione{#insiemi-ed-esiti titolo="Esperimento, esito ed evento"}
Un **esperimento aleatorio** è un'azione il cui risultato non si conosce prima di eseguirla, come il lancio di un dado. Ogni risultato possibile si chiama **esito**. L'insieme di tutti gli esiti è lo **spazio campionario**, o spazio degli esiti, e si indica con la lettera greca $\Omega$ («omega»). Nel lancio di un dado a sei facce
$$
\Omega=\{1,2,3,4,5,6\}.
$$

Un **evento** è un insieme formato da alcuni esiti, cioè un sottoinsieme di $\Omega$, e si indica con una lettera maiuscola. L'evento «esce un numero pari» è $A=\{2,4,6\}$. Un evento *si verifica* quando l'esito dell'esperimento è uno dei suoi elementi: se esce 4, l'evento $A$ si verifica; se esce 3, non si verifica.

L'**evento certo** contiene tutti gli esiti, quindi coincide con $\Omega$; per il dado è certo l'evento «esce un numero minore di 7». L'**evento impossibile** non contiene esiti ed è l'insieme vuoto, indicato con $\varnothing$; per il dado è impossibile l'evento «esce 7».

La **probabilità** di un evento $A$ è un numero compreso fra 0 e 1 che misura quanto ci si aspetta che $A$ si verifichi. Si indica con $P(A)$, «probabilità di $A$». L'evento certo ha probabilità $P(\Omega)=1$ e l'evento impossibile ha probabilità $P(\varnothing)=0$. Un risultato negativo o maggiore di 1 segnala quindi un errore nel calcolo.
:::

:::teorema{#equiprobabilita titolo="Quando si possono contare gli esiti"}
Gli esiti di un esperimento sono **equiprobabili** quando hanno tutti la stessa probabilità. In un dado **regolare**, cioè non truccato, ciascuna delle sei facce ha probabilità $\dfrac{1}{6}$.

Se $\Omega$ è formato da un numero finito di esiti equiprobabili, la probabilità di un evento $A$ è
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
Il simbolo $|A|$ indica il numero degli esiti che formano $A$, chiamati *casi favorevoli*. Il simbolo $|\Omega|$ indica il numero di tutti gli esiti, chiamati *casi possibili*. Per un dado regolare l'evento «esce un numero pari», $A=\{2,4,6\}$, ha 3 casi favorevoli su 6 casi possibili, quindi
$$
P(A)=\frac{3}{6}=\frac{1}{2}.
$$
La formula richiede esiti equiprobabili. In un dado truccato lo stesso evento contiene ancora 3 facce su 6, ma la sua probabilità è la somma delle probabilità delle tre facce e dipende da come il dado è truccato.

Si lanciano due monete regolari. La lettera $H$ indica testa (dall'inglese *head*) e la lettera $T$ indica croce (*tail*). Ogni esito è una coppia ordinata di lettere, una per moneta, quindi $HT$ e $TH$ sono esiti diversi. Gli esiti sono quattro,
$$
\Omega=\{HH,HT,TH,TT\},
$$
e sono equiprobabili, quindi ciascuno ha probabilità $\dfrac{1}{4}$. L'evento «esce esattamente una testa» è $\{HT,TH\}$. Ha 2 casi favorevoli su 4, quindi la sua probabilità è $\dfrac{2}{4}=\dfrac{1}{2}$.
:::

:::attenzione
Nel lancio di due monete, «nessuna testa», «una testa» e «due teste» sono tre risultati possibili ma non equiprobabili, perché hanno probabilità $\dfrac{1}{4}$, $\dfrac{1}{2}$ e $\dfrac{1}{4}$. Contandoli come 3 casi equiprobabili si otterrebbe per «una testa» il valore errato $\dfrac{1}{3}$.
:::

## Conteggi ordinati

:::teorema{#conteggi titolo="Scelte successive e principio del prodotto"}
Il **principio del prodotto** serve a contare i casi senza elencarli, anche in problemi in cui nulla è scelto a caso. Se una scelta si compie in due fasi, con $m$ possibilità nella prima e $n$ possibilità nella seconda qualunque sia stata la prima scelta, le scelte complessive sono $m\cdot n$. Con 3 magliette e 2 pantaloni, ogni maglietta si abbina a ciascuno dei 2 pantaloni, quindi gli abbinamenti sono $3\cdot2=6$. Con più di due fasi si moltiplicano le possibilità di tutte le fasi.

Si forma un codice di 3 lettere scelte fra le 4 lettere $A,B,C,D$. L'ordine conta, perché $ABC$ e $CBA$ sono codici diversi.

- **Lettere tutte diverse.** La prima posizione ha 4 possibilità. Una lettera è stata usata, quindi la seconda ne ha 3 e la terza ne ha 2. I codici sono $4\cdot3\cdot2=24$. Le sequenze ordinate di $k$ oggetti diversi scelti fra $n$ si chiamano **disposizioni semplici**.
- **Lettere ripetibili.** Ogni posizione ha 4 possibilità, quindi i codici sono $4\cdot4\cdot4=4^3=64$. Le sequenze ordinate con oggetti ripetibili si chiamano **disposizioni con ripetizione**; con $n$ oggetti e $k$ posizioni sono $n^k$.

Un vincolo su una posizione ne riduce le possibilità. In un numero di tre cifre la prima cifra è diversa da 0, quindi ha 9 possibilità, e le altre due ne hanno 10 ciascuna. I numeri di tre cifre sono $9\cdot10\cdot10=900$.
:::

:::definizione{#permutazioni titolo="Ordine e permutazioni"}
Una **permutazione** di $n$ oggetti distinti è un modo di metterli tutti in fila. Tre libri $A,B,C$ si dispongono su uno scaffale in 6 modi:
$$
ABC,\quad ACB,\quad BAC,\quad BCA,\quad CAB,\quad CBA.
$$
Il primo posto ha infatti 3 possibilità, il secondo ne ha 2 e il terzo ne ha 1, e $3\cdot2\cdot1=6$.

Il prodotto di tutti gli interi da 1 a $n$ si chiama **fattoriale** di $n$. Si scrive $n!$ e si legge «$n$ fattoriale»:
$$
n!=n\cdot(n-1)\cdot(n-2)\cdots2\cdot1.
$$
Per esempio $4!=4\cdot3\cdot2\cdot1=24$ e $5!=5\cdot4!=120$; per convenzione $0!=1$. Le permutazioni di $n$ oggetti distinti sono $n!$.

Se alcuni oggetti sono uguali fra loro, gli ordini che si distinguono sono meno di $n!$. La parola «mamma» ha 3 lettere $M$ e 2 lettere $A$. Se le 5 lettere fossero tutte diverse, i loro ordini sarebbero $5!=120$. Scambiando fra loro le 3 lettere $M$, in $3!=6$ modi, la parola non cambia, e lo stesso vale per i $2!=2$ scambi delle lettere $A$. Ogni parola è quindi contata $6\cdot2=12$ volte, e gli anagrammi, cioè le sequenze diverse delle 5 lettere, sono
$$
\frac{5!}{3!\cdot2!}=\frac{120}{12}=10.
$$

Per il **principio della somma**, se una scelta avviene in uno di due modi senza casi in comune, le possibilità dei due modi si sommano. Un menu offre 2 primi e 4 secondi. Chi ordina un solo piatto sceglie un primo *oppure* un secondo, quindi ha $2+4=6$ possibilità. Chi ordina un primo *e* un secondo compie due scelte successive, quindi ha $2\cdot4=8$ possibilità. Se sono ammessi sia il piatto unico sia la coppia di piatti, i due casi non hanno scelte in comune e le possibilità sono $6+8=14$.
:::

:::esempio{titolo="Due persone vicine in una fila"}
Cinque persone si mettono in fila, e Ada e Bruno stanno vicini. La coppia si considera come un solo blocco. Gli oggetti da ordinare sono allora 4, cioè il blocco e le altre 3 persone, e i loro ordini sono $4!=24$. Dentro il blocco gli ordini sono 2, perché Ada sta davanti a Bruno oppure dietro. Per il principio del prodotto le file sono $2\cdot24=48$.
:::

## Scelte senza ordine

:::definizione{#combinazioni titolo="Combinazioni e sovraconteggio"}
Una **combinazione** è un gruppo di $k$ oggetti scelti fra $n$ oggetti distinti, nel quale l'ordine non conta.

Fra 4 persone $A,B,C,D$ si scelgono 2 rappresentanti. Le coppie ordinate sono $4\cdot3=12$. In questo elenco ogni coppia compare 2 volte, per esempio come $AB$ e come $BA$, quindi le coppie senza ordine sono $\dfrac{12}{2}=6$:
$$
AB,\quad AC,\quad AD,\quad BC,\quad BD,\quad CD.
$$
Contare più volte lo stesso gruppo si chiama **sovraconteggio**, e la divisione per 2 lo elimina. In generale ogni gruppo di $k$ oggetti compare $k!$ volte fra le sequenze ordinate, perché $k!$ sono gli ordini dei suoi elementi. Il numero dei gruppi si indica con il **coefficiente binomiale** $\dbinom{n}{k}$, che si legge «$n$ su $k$», e vale
$$
\binom nk=\frac{n!}{k!(n-k)!},\qquad 0\le k\le n.
$$
Una commissione di 2 persone scelte fra 7 è un gruppo senza ordine, quindi le commissioni sono
$$
\binom72=\frac{7!}{2!\cdot5!}=\frac{7\cdot6\cdot5!}{2\cdot5!}=\frac{42}{2}=21.
$$
Un presidente e un segretario scelti fra 7 persone hanno ruoli diversi, quindi l'ordine conta e le scelte sono $7\cdot6=42$.

Con le combinazioni si contano anche le scelte di posizioni. Un percorso su una griglia formato da 3 passi verso destra e 2 verso l'alto è determinato dalle 2 posizioni, fra le 5, dei passi verso l'alto. I percorsi sono quindi $\dbinom{5}{2}=\dfrac{5!}{2!\cdot3!}=\dfrac{120}{12}=10$.
:::

:::esempio{titolo="Esattamente due elementi di una categoria"}
Un'urna, cioè un contenitore da cui si estrae senza guardare, contiene 3 palline rosse e 3 blu, numerate in modo che siano tutte distinguibili. Si estraggono 3 palline insieme, quindi l'ordine non conta e i gruppi di 3 palline sono equiprobabili. Si cerca la probabilità di ottenere esattamente 2 rosse.

I casi possibili sono i gruppi di 3 palline scelte fra 6, cioè $\dbinom{6}{3}=\dfrac{6!}{3!\cdot3!}=\dfrac{720}{36}=20$. Un gruppo con esattamente 2 rosse si forma scegliendo 2 rosse fra 3, in $\dbinom{3}{2}=3$ modi, e 1 blu fra 3, in $\dbinom{3}{1}=3$ modi. Per il principio del prodotto i casi favorevoli sono
$$
N=\binom32\binom31=3\cdot3=9.
$$
La probabilità richiesta è $\dfrac{9}{20}$.

La parola «esattamente» esclude i gruppi con 1 rossa e il gruppo con 3 rosse. Con «almeno 2 rosse» si aggiunge l'unico gruppo formato dalle 3 rosse, quindi i casi favorevoli diventano $9+1=10$ e la probabilità diventa $\dfrac{10}{20}=\dfrac{1}{2}$.
:::

## Unione e complemento

:::definizione{#unione-e-complemento titolo="Operazioni tra eventi"}
Si lancia un dado e si considerano due eventi: $A=\{2,4,6\}$, «esce un numero pari», e $B=\{4,5,6\}$, «esce un numero maggiore di 3». Da due eventi se ne costruiscono altri con tre operazioni.

- L'**unione** $A\cup B$, che si legge «$A$ unito $B$», è formata dagli esiti che appartengono ad almeno uno dei due eventi. Corrisponde a «$A$ oppure $B$». Qui $A\cup B=\{2,4,5,6\}$.
- L'**intersezione** $A\cap B$, che si legge «$A$ intersecato $B$», è formata dagli esiti che appartengono a entrambi gli eventi. Corrisponde a «$A$ e $B$». Qui $A\cap B=\{4,6\}$.
- Il **complementare** di $A$, detto anche complemento, si indica con $A^c$ e si legge «$A$ complementare». È formato dagli esiti di $\Omega$ che non appartengono ad $A$. Corrisponde a «non $A$». Qui $A^c=\{1,3,5\}$, cioè «esce un numero dispari».

Nei quesiti «$A$ oppure $B$» comprende anche il caso in cui si verificano entrambi. L'espressione «uno solo dei due» indica invece l'unione privata dell'intersezione, cioè $\{2,5\}$.

Due eventi sono **disgiunti**, o incompatibili, quando non hanno esiti in comune, cioè quando $A\cap B=\varnothing$. Gli eventi «esce 1» e «esce 2» sono disgiunti; $A$ e $B$ non lo sono, perché hanno in comune gli esiti 4 e 6.

Nella figura i due cerchi rappresentano $A$ e $B$, e la zona evidenziata è l'intersezione $A\cap B$.

::venn{tipo="due" zone="ab" titolo="L’intersezione contiene soltanto gli esiti comuni ai due eventi"}
:::

:::teorema{#regole-eventi titolo="Somma e complemento delle probabilità"}
Per ogni coppia di eventi $A$ e $B$ valgono due regole:
$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
**Regola del complementare.** Gli eventi $A$ e $A^c$ non hanno esiti in comune e insieme formano tutto $\Omega$, quindi le loro probabilità hanno somma 1. Per un dado regolare «esce 6» ha probabilità $\dfrac{1}{6}$, perciò «non esce 6» ha probabilità $1-\dfrac{1}{6}=\dfrac{5}{6}$.

Il complementare di «almeno uno» è «nessuno». Per due monete regolari «nessuna testa» è il solo esito $TT$, che ha probabilità $\dfrac{1}{4}$, quindi «almeno una testa» ha probabilità $1-\dfrac{1}{4}=\dfrac{3}{4}$.

**Regola dell'unione.** Nella somma $P(A)+P(B)$ gli esiti comuni sono contati due volte, e la sottrazione di $P(A\cap B)$ li riporta a una volta sola. Per $A=\{2,4,6\}$ e $B=\{4,5,6\}$ si ha $P(A)=\dfrac{3}{6}$, $P(B)=\dfrac{3}{6}$ e $P(A\cap B)=\dfrac{2}{6}$, quindi
$$
P(A\cup B)=\frac{3}{6}+\frac{3}{6}-\frac{2}{6}=\frac{4}{6}=\frac{2}{3}.
$$
Infatti $A\cup B=\{2,4,5,6\}$ ha 4 esiti su 6. Senza la sottrazione, gli eventi «esce un numero maggiore di 1» e «esce un numero pari» darebbero $\dfrac{5}{6}+\dfrac{3}{6}=\dfrac{8}{6}$, un valore maggiore di 1. Se $A$ e $B$ sono disgiunti, allora $P(A\cap B)=0$ e la regola si riduce a $P(A\cup B)=P(A)+P(B)$.

Per «uno solo dei due» l'intersezione si toglie da entrambi gli eventi, quindi si sottrae due volte: $P(A)+P(B)-2P(A\cap B)=\dfrac{3}{6}+\dfrac{3}{6}-\dfrac{4}{6}=\dfrac{1}{3}$, cioè 2 esiti su 6.

La scrittura $A\subseteq B$ si legge «$A$ è contenuto in $B$» e significa che ogni esito di $A$ appartiene anche a $B$. In questo caso $P(A)\le P(B)$, perché $B$ contiene tutti gli esiti di $A$. Per esempio «esce 6» è contenuto in «esce un numero pari», e infatti $\dfrac{1}{6}\le\dfrac{3}{6}$.
:::

## Indipendenza e condizionamento

:::definizione{#indipendenza-e-condizionamento titolo="Ridurre la popolazione di riferimento"}
Si lancia un dado regolare e si viene a sapere che è uscito un numero pari, senza sapere quale. Gli esiti ancora possibili sono 2, 4 e 6, tutti con la stessa probabilità. La probabilità che sia uscito 6 è quindi $\dfrac{1}{3}$, mentre prima dell'informazione era $\dfrac{1}{6}$.

La **probabilità condizionata** di $A$ dato $B$ è la probabilità di $A$ calcolata sapendo che $B$ si è verificato. Si indica con $P(A\mid B)$ e si legge «probabilità di $A$ dato $B$». A sinistra della barra verticale sta l'evento di cui si cerca la probabilità, a destra sta l'informazione nota. Se $P(B)>0$, si definisce
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
L'informazione riduce lo spazio degli esiti al solo evento $B$, e per questo $P(B)$ sta al denominatore. Di $A$ resta la parte contenuta in $B$, cioè $A\cap B$, che sta al numeratore. La condizione $P(B)>0$ evita la divisione per zero.

Per il dado, con $A=\{6\}$ e $B=\{2,4,6\}$, si ha $A\cap B=\{6\}$, $P(A\cap B)=\dfrac{1}{6}$ e $P(B)=\dfrac{3}{6}=\dfrac{1}{2}$. La formula dà
$$
P(A\mid B)=\frac{\frac{1}{6}}{\frac{1}{2}}=\frac{1}{6}\cdot2=\frac{2}{6}=\frac{1}{3},
$$
lo stesso valore trovato contando gli esiti rimasti. Nei quesiti la probabilità condizionata è introdotta da «sapendo che», «dato che», «fra quelli che».
:::

:::attenzione
$P(A\mid B)$ e $P(B\mid A)$ sono due probabilità diverse, perché l'informazione nota è diversa. La probabilità che sia uscito 6 sapendo che il numero è pari è $\dfrac{1}{3}$. La probabilità che il numero sia pari sapendo che è uscito 6 è 1, perché 6 è pari.
:::

:::definizione{#indipendenza titolo="Indipendenza e incompatibilità"}
Si lancia due volte una moneta regolare. Sapere che al primo lancio è uscita testa non cambia la probabilità di testa al secondo lancio, che resta $\dfrac{1}{2}$.

Due eventi $A$ e $B$ sono **indipendenti** quando la probabilità che si verifichino entrambi è il prodotto delle due probabilità:
$$
P(A\cap B)=P(A)P(B).
$$
Se $P(B)>0$, dividendo i due membri per $P(B)$ si ottiene $\dfrac{P(A\cap B)}{P(B)}=P(A)$, cioè $P(A\mid B)=P(A)$. Sapere che $B$ si è verificato non cambia quindi la probabilità di $A$.

Per i due lanci della moneta, l'evento $A$, «testa al primo lancio», è $\{HH,HT\}$ e ha probabilità $\dfrac{2}{4}=\dfrac{1}{2}$. L'evento $B$, «testa al secondo lancio», è $\{HH,TH\}$ e ha probabilità $\dfrac{1}{2}$. L'intersezione è $\{HH\}$, con probabilità $\dfrac{1}{4}$. Poiché $\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{1}{4}$, l'uguaglianza è verificata e i due eventi sono **indipendenti**. Per questo, anche dopo molte teste consecutive, la probabilità di testa al lancio seguente resta $\dfrac{1}{2}$.

Avere la stessa probabilità non rende due eventi indipendenti. Per un dado regolare gli eventi $A=\{2,4,6\}$ e $B=\{4,5,6\}$ hanno entrambi probabilità $\dfrac{1}{2}$, con prodotto $\dfrac{1}{4}$, mentre l'intersezione $\{4,6\}$ ha probabilità $\dfrac{2}{6}=\dfrac{1}{3}$, quindi **non sono indipendenti**.

Due eventi **incompatibili**, cioè disgiunti, con probabilità positive non sono indipendenti, perché la loro intersezione ha probabilità 0 mentre il prodotto $P(A)P(B)$ è positivo. Per un dado regolare «esce 1» e «esce 2» sono incompatibili, e il prodotto delle loro probabilità è $\dfrac{1}{6}\cdot\dfrac{1}{6}=\dfrac{1}{36}$, diverso da 0. Sapere che è uscito 1 esclude infatti che sia uscito 2.

Un'informazione aggiuntiva può far perdere l'indipendenza a due eventi. Nei due lanci della moneta, sapendo che è uscita almeno una testa restano i tre esiti $HH,HT,TH$, equiprobabili. Fra questi, $A$ e $B$ hanno ciascuno probabilità $\dfrac{2}{3}$ e l'intersezione $\{HH\}$ ha probabilità $\dfrac{1}{3}$. Poiché $\dfrac{2}{3}\cdot\dfrac{2}{3}=\dfrac{4}{9}\ne\dfrac{1}{3}$, con questa informazione $A$ e $B$ non sono più indipendenti.

Nei quesiti l'indipendenza è dichiarata dal testo («lanci indipendenti», «estrazioni con reinserimento», nelle quali l'oggetto estratto è rimesso al suo posto prima dell'estrazione successiva) oppure si verifica con l'uguaglianza del prodotto. Se $A$ e $B$ sono indipendenti, lo sono anche i complementari $A^c$ e $B^c$.
:::

:::esempio{titolo="Almeno uno di due dispositivi"}
Due dispositivi funzionano in modo indipendente, il primo con probabilità $\dfrac{4}{5}$ e il secondo con probabilità $\dfrac{3}{4}$. Si cerca la probabilità che almeno uno funzioni, il cui complementare è «nessuno dei due funziona». Il primo non funziona con probabilità $1-\dfrac{4}{5}=\dfrac{1}{5}$ e il secondo con probabilità $1-\dfrac{3}{4}=\dfrac{1}{4}$. Anche i complementari sono indipendenti, quindi nessuno dei due funziona con probabilità $\dfrac{1}{5}\cdot\dfrac{1}{4}=\dfrac{1}{20}$. La probabilità cercata è $1-\dfrac{1}{20}=\dfrac{19}{20}$. Se i due dispositivi avessero una causa di guasto comune, come la stessa alimentazione, i guasti non sarebbero indipendenti e il prodotto non si applicherebbe.
:::

:::esempio{titolo="Esattamente tre teste in quattro lanci"}
Si lancia 4 volte una moneta regolare, con lanci indipendenti. Ogni sequenza di 4 risultati ha probabilità $\dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{1}{16}$. Le sequenze con esattamente 3 teste sono 4, una per ogni posizione dell'unica croce: $HHHT,HHTH,HTHH,THHH$. La probabilità di esattamente 3 teste è quindi $4\cdot\dfrac{1}{16}=\dfrac{1}{4}$.

Se la moneta è truccata e dà testa con probabilità $p$ a ogni lancio, le sequenze con un numero diverso di teste non sono più equiprobabili. Ogni sequenza con 3 teste e 1 croce ha probabilità $p\cdot p\cdot p\cdot(1-p)=p^3(1-p)$, e la probabilità di esattamente 3 teste è $4p^3(1-p)$. Lo stesso vale per 4 prove indipendenti qualsiasi con probabilità di successo $p$.
:::

## Estrazioni e diagrammi ad albero

:::teorema{#estrazioni-e-diagrammi-ad-albero titolo="Probabilità lungo un percorso"}
Dalla definizione $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$, moltiplicando i due membri per $P(A)$, si ottiene la **regola del prodotto**, che vale quando $P(A)>0$:
$$
P(A\cap B)=P(A)P(B\mid A).
$$
La probabilità che si verifichino sia $A$ sia $B$ è la probabilità di $A$ per la probabilità di $B$ sapendo $A$. La regola vale anche quando $A$ e $B$ non si succedono nel tempo.

Da un'urna con 3 palline rosse e 2 blu se ne estraggono due, una dopo l'altra. Si cerca la probabilità che siano entrambe rosse. L'evento $A$ è «la prima è rossa» e l'evento $B$ è «la seconda è rossa».

- **Senza reinserimento**, cioè senza rimettere nell'urna la prima pallina estratta. Le rosse sono 3 su 5, quindi $P(A)=\dfrac{3}{5}$. Dopo una rossa restano 4 palline, di cui 2 rosse, quindi $P(B\mid A)=\dfrac{2}{4}$. La probabilità cercata è $\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}=\dfrac{3}{10}$.
- **Con reinserimento**, cioè rimettendo nell'urna la prima pallina. L'urna torna com'era, quindi $P(B\mid A)=\dfrac{3}{5}$ e le due estrazioni sono indipendenti. La probabilità cercata è $\dfrac{3}{5}\cdot\dfrac{3}{5}=\dfrac{9}{25}$.

Un **diagramma ad albero** rappresenta un esperimento in più fasi. Da un punto iniziale parte un ramo per ogni risultato della prima fase, e dalla fine di ogni ramo partono i rami della seconda fase. Su ogni ramo si scrive la probabilità di quel risultato, condizionata ai rami che lo precedono. Un **percorso** è una successione di rami dal punto iniziale all'ultima fase.

- Le probabilità dei rami che partono dallo stesso punto hanno somma 1.
- La probabilità di un percorso è il prodotto delle probabilità dei suoi rami, per la regola del prodotto.
- La probabilità di un evento è la somma delle probabilità dei percorsi che lo realizzano, perché percorsi diversi sono eventi disgiunti.
:::

:::esempio{titolo="L'albero di due estrazioni senza reinserimento"}
L'albero delle due estrazioni senza reinserimento dall'urna con 3 rosse e 2 blu ha quattro percorsi.

| Percorso | Prodotto dei due rami |
| --- | :---: |
| rossa, rossa | $\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}$ |
| rossa, blu | $\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}$ |
| blu, rossa | $\dfrac{2}{5}\cdot\dfrac{3}{4}=\dfrac{6}{20}$ |
| blu, blu | $\dfrac{2}{5}\cdot\dfrac{1}{4}=\dfrac{2}{20}$ |

Dopo una rossa restano 2 rosse e 2 blu; dopo una blu restano 3 rosse e 1 blu. La probabilità di una rossa alla seconda estrazione è quindi $\dfrac{2}{4}$ oppure $\dfrac{3}{4}$ secondo il colore della prima, e per questo senza reinserimento le due estrazioni non sono indipendenti. L'evento «due palline di colore diverso» è realizzato dai percorsi «rossa, blu» e «blu, rossa», quindi ha probabilità $\dfrac{6}{20}+\dfrac{6}{20}=\dfrac{12}{20}=\dfrac{3}{5}$.
:::

:::esempio{#probabilita-totale titolo="Somma di percorsi e informazione inversa"}
Si sceglie una di due urne con il lancio di una moneta regolare, quindi ciascuna urna ha probabilità $\dfrac{1}{2}$. L'urna $U_1$ contiene 3 palline rosse e 1 blu, l'urna $U_2$ contiene 1 rossa e 3 blu. Dall'urna scelta si estrae una pallina, e $R$ è l'evento «la pallina è rossa».

**Probabilità di una pallina rossa.** L'albero ha due percorsi che terminano con una rossa, uno per urna:
$$
P(U_1\cap R)=\frac12\cdot\frac34=\frac38,\qquad
P(U_2\cap R)=\frac12\cdot\frac14=\frac18.
$$
La loro somma è $P(R)=\dfrac{3}{8}+\dfrac{1}{8}=\dfrac{4}{8}=\dfrac{1}{2}$.

**Informazione inversa.** La pallina estratta è rossa e si cerca la probabilità che provenga da $U_1$, cioè $P(U_1\mid R)$. Per la definizione di probabilità condizionata
$$
P(U_1\mid R)=\frac{P(U_1\cap R)}{P(R)}=\frac{\frac{3}{8}}{\frac{1}{2}}=\frac{3}{8}\cdot2=\frac{6}{8}=\frac{3}{4}.
$$
Il numeratore è la probabilità del percorso che passa per $U_1$, e il denominatore è la somma delle probabilità dei percorsi che terminano con una rossa. Una pallina rossa esce da entrambe le urne, ma la sua estrazione porta la probabilità di $U_1$ da $\dfrac{1}{2}$ a $\dfrac{3}{4}$, perché $U_1$ contiene più rosse di $U_2$.
:::

## Variabili e frequenze

:::definizione{#variabili titolo="Che cosa viene osservato"}
Un'indagine statistica raccoglie dati su persone o oggetti, chiamati **unità**.

- La **popolazione** è l'insieme di tutte le unità che interessano l'indagine, per esempio gli studenti di una scuola.
- Il **campione** è la parte della popolazione effettivamente osservata, per esempio i 50 studenti intervistati.
- Una **variabile** è la caratteristica rilevata su ogni unità, per esempio il colore degli occhi o l'altezza.

Le variabili sono di due tipi.

- Una variabile **qualitativa** ha per valori delle categorie, come il colore degli occhi o la specie di una pianta.
- Una variabile **quantitativa** ha per valori dei numeri. È **discreta** quando i valori nascono da un conteggio, come il numero di libri presi in prestito. È **continua** quando i valori nascono da una misura e sono numeri qualsiasi di un intervallo, come una massa o una durata.

Una massa resta continua anche quando la bilancia la mostra arrotondata a $2{,}3\,\mathrm{kg}$. Una variabile qualitativa resta tale anche quando le categorie hanno codici numerici: se tre specie sono indicate con 1, 2 e 3, la media dei codici non ha significato, perché la media si calcola soltanto per le variabili quantitative.
:::

:::definizione{#frequenze titolo="Frequenze assolute, relative e cumulate"}
Si chiede a 16 studenti quanti libri hanno preso in prestito in un mese. La tabella riassume le risposte, e $N=16$ è il numero totale dei dati.

| Libri | Frequenza assoluta | Frequenza relativa | Frequenza cumulata |
| :---: | :---: | :---: | :---: |
| 0 | 5 | $\dfrac{5}{16}$ | 5 |
| 1 | 7 | $\dfrac{7}{16}$ | 12 |
| 2 | 3 | $\dfrac{3}{16}$ | 15 |
| 3 | 1 | $\dfrac{1}{16}$ | 16 |

- La **frequenza assoluta** di un valore è il numero di volte in cui il valore compare. Si indica con $n_i$, dove il pedice $i$ numera i valori: $n_1=5$, $n_2=7$ e così via. Le frequenze assolute hanno somma $N$, infatti $5+7+3+1=16$.
- La **frequenza relativa** di un valore è la frazione dei dati che hanno quel valore, cioè $f_i=\dfrac{n_i}{N}$. Il valore 1 ha frequenza relativa $\dfrac{7}{16}=0{,}4375$, cioè il $43{,}75\%$ dei dati. Le frequenze relative hanno somma 1.
- La **frequenza cumulata** fino a un valore è il numero dei dati minori o uguali a quel valore. Si ottiene sommando le frequenze assolute dalla prima riga fino alla riga del valore: $5$, poi $5+7=12$, poi $12+3=15$, poi $15+1=16$. Passando a un valore più grande la cumulata non diminuisce mai, e l'ultima è uguale a $N$.

La differenza fra due frequenze cumulate consecutive è una frequenza assoluta. Le cumulate fino a 2 e fino a 1 sono 15 e 12, quindi il valore 2 compare $15-12=3$ volte.

Le frequenze cumulate indicano quale valore occupa ogni posto dell'elenco dei dati in ordine crescente. Per la cumulata 5, i posti dal primo al quinto contengono il valore 0. Per la cumulata 12, i posti dal sesto al dodicesimo contengono il valore 1. I due posti centrali fra 16, l'ottavo e il nono, contengono quindi entrambi 1. Il valore del posto centrale si chiama mediana, e qui è 1.

Una frequenza assoluta si interpreta insieme al totale a cui si riferisce: 12 studenti su 30 sono il $40\%$, mentre 12 studenti su 60 sono il $20\%$.

Se un questionario ammette più risposte, la stessa persona è contata in più categorie e la somma delle frequenze supera il numero delle persone. Fra 10 persone, 7 indicano il cinema e 6 lo sport, con somma $7+6=13$.
:::

## Media, mediana e variabili

:::definizione{#media-mediana-e-variabili titolo="Media e pesi"}
La **media aritmetica** di $N$ dati numerici è la loro somma divisa per $N$. Si indica con $\bar x$, che si legge «$x$ medio». I quattro voti $6,7,8,7$ hanno media
$$
\bar x=\frac{6+7+8+7}{4}=\frac{28}{4}=7.
$$
Quando i dati sono riassunti in una tabella di frequenze, il valore $x_i$ compare $n_i$ volte, quindi contribuisce alla somma con il prodotto $n_ix_i$. La media è allora
$$
\bar x=\frac{\sum_i n_ix_i}{\sum_i n_i}.
$$
Il simbolo $\sum$, la lettera greca sigma maiuscola, si legge «somma». Il numeratore è la somma dei prodotti $n_ix_i$ per tutti i valori, e il denominatore è la somma delle frequenze, cioè $N$. Per i libri dei 16 studenti, con valori $0,1,2,3$ e frequenze $5,7,3,1$, si ottiene
$$
\bar x=\frac{5\cdot0+7\cdot1+3\cdot2+1\cdot3}{16}=\frac{0+7+6+3}{16}=\frac{16}{16}=1.
$$
In questa formula le frequenze si chiamano anche **pesi**, e la media si chiama **media pesata**.

La media ha la stessa unità di misura dei dati ed è compresa fra il dato minimo e il dato massimo. Dalla media e dal numero dei dati si ricava la somma dei dati, $N\cdot\bar x$: quattro voti di media 7 hanno somma $4\cdot7=28$. I singoli dati e la mediana, cioè il valore centrale dei dati ordinati, non si ricavano. Anche i dati $4,4,4,16$ hanno somma 28 e media 7, ma il loro valore centrale è 4, mentre quello dei voti ordinati $6,7,7,8$ è 7.
:::

:::esempio{titolo="La media di due gruppi riuniti"}
Un gruppo di 10 studenti ha media 18 e un gruppo di 30 studenti ha media 26. La somma dei punteggi del primo gruppo è $10\cdot18=180$ e quella del secondo è $30\cdot26=780$. La media dei 40 studenti è
$$
\bar x=\frac{180+780}{40}=\frac{960}{40}=24.
$$
Il risultato è più vicino a 26 che a 18, perché il secondo gruppo è più numeroso. La media delle due medie, $\dfrac{18+26}{2}=22$, è diversa da 24. I due valori coincidono soltanto per gruppi con lo stesso numero di dati, oppure con medie uguali.
:::

:::definizione{#mediana-moda titolo="Posizione centrale e dispersione"}
La **mediana** è il valore che occupa il posto centrale quando i dati sono scritti in ordine crescente, ripetizioni comprese.

- Se il numero $N$ dei dati è dispari, il posto centrale è il numero $\dfrac{N+1}{2}$. Per i 5 dati $3,5,5,8,9$ è il posto $\dfrac{5+1}{2}=3$, e la mediana è il terzo dato, cioè 5.
- Se $N$ è pari, i posti centrali sono $\dfrac{N}{2}$ e $\dfrac{N}{2}+1$, e la mediana è la media dei due dati che li occupano. Per i 4 dati $3,5,6,8$ sono il secondo e il terzo posto, e la mediana è $\dfrac{5+6}{2}=5{,}5$.

Almeno metà dei dati è minore o uguale alla mediana e almeno metà è maggiore o uguale. La mediana richiede soltanto che i dati si possano ordinare, quindi esiste anche per categorie ordinate come «basso», «medio», «alto».

Per i libri dei 16 studenti i posti centrali sono $\dfrac{16}{2}=8$ e $\dfrac{16}{2}+1=9$. Per le frequenze cumulate 5 e 12, entrambi contengono il valore 1, quindi la mediana è $\dfrac{1+1}{2}=1$.

La mediana di due gruppi riuniti si calcola sull'elenco completo dei dati, perché le due mediane non bastano a determinarla. I gruppi $1,2,9$ e $3,4,5$ hanno mediane 2 e 4, e riuniti hanno mediana $\dfrac{3+4}{2}=3{,}5$. Anche i gruppi $2,2,2$ e $4,4,4$ hanno mediane 2 e 4, ma riuniti hanno mediana $\dfrac{2+4}{2}=3$.

La **moda** è il valore con la frequenza più alta. Nei dati $3,5,5,8,9$ la moda è 5. Se più valori hanno la stessa frequenza massima, le mode sono più di una: nei dati $1,1,2,2,3$ sono 1 e 2.

Il **campo di variazione** è la differenza fra il dato massimo e il dato minimo e misura la **dispersione**, cioè quanto i dati sono lontani fra loro. Per i dati $3,5,5,8,9$ vale $9-3=6$.
:::

:::esempio{titolo="Un dato molto lontano dagli altri"}
I dati $1,2,3,4,100$ hanno mediana 3 e media $\dfrac{1+2+3+4+100}{5}=\dfrac{110}{5}=22$. Sostituendo 100 con 200, la mediana resta 3 e la media diventa $\dfrac{210}{5}=42$. Un dato molto lontano dagli altri sposta la media e lascia invariata la mediana, perché la media dipende dalla somma di tutti i dati e la mediana soltanto dal dato centrale.

Aggiungendo 10 a ogni dato si ottengono $11,12,13,14,110$. La mediana passa da 3 a 13 e la media da 22 a 32, cioè aumentano entrambe di 10, mentre il campo di variazione resta $110-11=99$.
:::

## Tabelle e percentuali

:::esempio{#tabelle-e-percentuali titolo="Cella, margine e denominatore"}
Una **tabella a doppia entrata** classifica le stesse unità secondo due variabili, una sulle righe e una sulle colonne. Qui i 40 iscritti a due corsi, A e B, sono classificati secondo la presenza a una lezione.

| Corso | Presenti | Assenti | Totale |
| --- | ---: | ---: | ---: |
| A | 12 | 8 | 20 |
| B | 9 | 11 | 20 |
| Totale | 21 | 19 | 40 |

Ogni **cella** interna conta le unità che hanno insieme la caratteristica della riga e quella della colonna: i presenti del corso B sono 9. I **totali marginali**, nell'ultima riga e nell'ultima colonna, contano le unità con una sola caratteristica: i presenti sono 21 e gli iscritti al corso B sono 20.

Si sceglie a caso un iscritto, con la stessa probabilità per tutti. Tre domande usano la stessa cella con tre denominatori diversi.

- La probabilità che l'iscritto sia del corso B *e* sia presente è $\dfrac{9}{40}$. Il denominatore è il totale generale, perché non si ha alcuna informazione.
- La probabilità che sia del corso B *sapendo che* è presente è $\dfrac{9}{21}=\dfrac{3}{7}$. Il denominatore è il totale dei presenti, perché l'informazione restringe la scelta ai 21 presenti.
- La probabilità che sia presente *sapendo che* è del corso B è $\dfrac{9}{20}$. Il denominatore è il totale dei 20 iscritti al corso B.
:::

:::osservazione{#percentuali-dati titolo="Percentuali, punti e arrotondamenti"}
Una **percentuale** è una frequenza relativa moltiplicata per 100. Il simbolo $\%$ si legge «per cento» e indica i centesimi. Nove presenti su 20 iscritti sono $\dfrac{9}{20}=0{,}45$, cioè il $45\%$.

La variazione di una percentuale si esprime in due modi. Si supponga che una quota passi dal $20\%$ al $25\%$.

- La differenza $25-20=5$ si misura in **punti percentuali**: la quota è aumentata di 5 punti percentuali.
- La **variazione relativa** confronta la differenza con il valore di partenza. Vale $\dfrac{25-20}{20}=\dfrac{5}{20}=0{,}25$, quindi la quota è aumentata del $25\%$.

Per riunire due gruppi si sommano i conteggi e poi si divide per il totale complessivo. Con 18 promossi su 20 in una classe ($90\%$) e 15 su 30 in un'altra ($50\%$), i promossi delle due classi sono $18+15=33$ su 50, cioè il $66\%$, e non il $70\%$ che si ottiene come media delle due percentuali.

Le percentuali pubblicate sono arrotondate, per esempio all'intero. Dieci persone su 30 sono $\dfrac{10}{30}=0{,}333\ldots$, cioè il $33{,}\overline3\%$, dove il trattino sopra la cifra 3 indica che la cifra si ripete senza fine. Arrotondata, la percentuale diventa $33\%$. Per questo $30\cdot0{,}33=9{,}9$ non è intero. Il conteggio è 10, l'unico intero che su 30 persone dà $33\%$ dopo l'arrotondamento.
:::

## Grafici e interpretazione

:::definizione{#grafici titolo="Barre, settori e istogrammi"}
Un grafico statistico rappresenta le frequenze con altezze, angoli o aree.

- Un **grafico a barre** ha una barra per ogni categoria o valore, con altezza uguale alla frequenza, che si legge sull'asse verticale. Le altezze sono proporzionali alle frequenze quando l'asse verticale parte da 0. Se l'asse parte da 40, due barre di frequenze 50 e 60 sono disegnate con altezze 10 e 20, quindi la seconda appare doppia della prima, mentre il rapporto fra le frequenze è $\dfrac{60}{50}=1{,}2$.
- Un **diagramma a settori**, o grafico a torta, divide un cerchio in settori, uno per categoria, con l'angolo proporzionale alla frequenza. L'intero cerchio misura $360^\circ$, quindi un settore di $\theta$ gradi (la lettera greca $\theta$ si legge «theta») rappresenta la frazione $\dfrac{\theta}{360}$ del totale. Un settore di $90^\circ$ rappresenta $\dfrac{90}{360}=\dfrac{1}{4}$ del totale, cioè il $25\%$.
- Un **istogramma** rappresenta una variabile quantitativa i cui valori sono raggruppati in intervalli, chiamati **classi**. Ogni classe è un rettangolo che ha per base l'intervallo della classe, e la frequenza della classe è l'**area** del rettangolo.

L'altezza di un rettangolo dell'istogramma si chiama **densità di frequenza** ed è la frequenza divisa per l'ampiezza della classe, cioè per la lunghezza del suo intervallo. Se tutte le classi hanno la stessa ampiezza, le altezze sono proporzionali alle frequenze.

Ogni dato appartiene a una sola classe. Nella scrittura $[0,2)$ il simbolo $[$ indica che l'estremo 0 appartiene alla classe e il simbolo $)$ indica che l'estremo 2 ne è escluso. Con le classi $[0,2)$ e $[2,5)$ il valore 2 appartiene soltanto alla seconda.

Nella figura l'asse orizzontale riporta la variabile $x$ e l'asse verticale la densità $d$. La classe da 0 a 2 ha ampiezza 2 e altezza 6, quindi frequenza $2\cdot6=12$. La classe da 2 a 5 ha ampiezza 3 e altezza 4, quindi frequenza $3\cdot4=12$. Le due classi contengono lo stesso numero di dati, anche se il primo rettangolo è più alto. La somma delle aree è il numero totale dei dati, $12+12=24$; se le aree rappresentano frequenze relative, la somma è 1. Un istogramma riporta quanti dati cadono in ogni classe e non conserva i singoli valori, quindi la loro media esatta richiede l'elenco dei dati.

::grafico{poligoni="0,0 2,0 2,6 0,6;2,0 5,0 5,4 2,4" xmin=-0.5 xmax=5.5 ymin=-0.5 ymax=7 nomi="x,d" titolo="Classi di ampiezza due e tre: aree uguali nonostante le altezze diverse"}
:::

:::osservazione{#campioni titolo="Che cosa permettono di concludere i dati"}
I calcoli su una tabella o su un grafico descrivono i dati raccolti. Le conclusioni che vanno oltre dipendono da come i dati sono stati ottenuti.

- **Frequenza osservata e probabilità.** Si supponga che una moneta regolare, lanciata 10 volte, dia 7 teste. La frequenza relativa osservata di testa è $\dfrac{7}{10}$. La probabilità di testa al lancio successivo resta $\dfrac{1}{2}$, perché la moneta è regolare e i lanci sono indipendenti. La frequenza osservata descrive i 10 lanci eseguiti.
- **Scelta del campione.** Il risultato di un campione si usa come stima per la popolazione quando il campione è scelto a caso, cioè quando ogni unità ha la stessa probabilità di farne parte. A un sondaggio sullo sport al quale risponde chi vuole partecipano soprattutto le persone interessate, quindi la quota di sportivi nel campione è più alta che nella popolazione, anche con molte risposte.
- **Risposte mancanti.** Si supponga che su 100 persone interpellate rispondano in 80 e che 50 siano favorevoli. Se le 20 che non hanno risposto fossero tutte contrarie, i favorevoli sarebbero 50 su 100. Se fossero tutte favorevoli, sarebbero $50+20=70$ su 100. La quota dei favorevoli fra le 100 persone è quindi compresa fra il $50\%$ e il $70\%$.
- **Relazione e causa.** Si supponga che nei mesi in cui si vendono più gelati si registrino più scottature solari. Le due variabili crescono insieme perché dipendono entrambe da una terza, il numero di giornate di sole. Una relazione fra due variabili, da sola, non prova che una sia la causa dell'altra.
- **Totali e sottogruppi.** Un confronto fra due percentuali può invertirsi quando si riuniscono sottogruppi di dimensioni molto diverse, perché il totale dipende anche dalle loro dimensioni.
:::

:::esempio{titolo="Un confronto che si inverte nel totale"}
Due metodi di studio, A e B, sono provati su quesiti facili e difficili. Ogni cella riporta i quesiti risolti su quelli affrontati (dati d'esercizio).

| Quesiti | Metodo A | Metodo B |
| --- | :---: | :---: |
| Facili | 9 su 10 ($90\%$) | 80 su 100 ($80\%$) |
| Difficili | 30 su 100 ($30\%$) | 2 su 10 ($20\%$) |
| Totale | 39 su 110 (circa $35\%$) | 82 su 110 (circa $75\%$) |

Il metodo A ha la percentuale più alta sia nei quesiti facili sia nei difficili, mentre nel totale prevale B. Il confronto si inverte perché con B sono stati affrontati quasi soltanto quesiti facili e con A quasi soltanto quesiti difficili.
:::
