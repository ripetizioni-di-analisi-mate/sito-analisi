---
titolo: Probabilità
sommario: Come si calcola la probabilità di un evento con dadi, monete, carte e urne, come si usano l'evento contrario, le regole della somma e del prodotto, le estrazioni con e senza reimmissione, la probabilità condizionata e il calcolo combinatorio, e come si collegano probabilità, frequenza relativa e percentuali.
---

## Esperimenti aleatori ed eventi

:::definizione{#esperimento-aleatorio titolo="Esperimento aleatorio e spazio degli eventi"}
Un **esperimento aleatorio** è un'azione il cui risultato non si può prevedere con certezza prima di compierla, come il lancio di un dado, il lancio di una moneta o l'estrazione di una pallina da un'urna. L'insieme di tutti i risultati possibili si chiama **spazio degli eventi**, o spazio campionario, e si indica con $\Omega$. Nel lancio di un dado a sei facce
$$
\Omega = \{1, 2, 3, 4, 5, 6\},
$$
mentre nel lancio di una moneta $\Omega = \{T, C\}$, dove $T$ indica testa e $C$ croce. Gli elementi dello spazio degli eventi sono i casi possibili, sui quali si calcola la probabilità.
:::

:::definizione{#evento titolo="Evento"}
Un **evento** è un'affermazione sul risultato dell'esperimento che, a esperimento concluso, risulta vera oppure falsa. A ogni evento corrisponde l'insieme dei risultati per cui l'affermazione è vera, cioè un sottoinsieme di $\Omega$. Nel lancio di un dado l'evento "esce un numero pari" corrisponde all'insieme $\{2, 4, 6\}$. Un risultato per cui l'evento è vero si dice **favorevole** all'evento.

- L'evento **certo** è vero per ogni risultato e coincide con $\Omega$; per esempio "esce un numero minore di $7$".
- L'evento **impossibile** non ha risultati favorevoli e corrisponde all'insieme vuoto $\emptyset$; per esempio "esce $8$".
:::

:::esempio{titolo="Lancio di due dadi"}
Nel lancio di due dadi un risultato è una coppia ordinata $(a, b)$, dove $a$ è il numero del primo dado e $b$ quello del secondo. Ogni dado ha $6$ risultati, quindi per il principio di moltiplicazione, che si trova nell'argomento sul calcolo combinatorio, le coppie sono $6 \cdot 6 = 36$. L'evento "la somma è $7$" ha $6$ risultati favorevoli:
$$
(1, 6),\quad (2, 5),\quad (3, 4),\quad (4, 3),\quad (5, 2),\quad (6, 1) .
$$
Le coppie $(1, 6)$ e $(6, 1)$ sono risultati distinti, perché il primo dado e il secondo si distinguono anche quando sono uguali nell'aspetto, come se fossero di due colori diversi.

::grafico{punti="1,1,vuoto;1,2,vuoto;1,3,vuoto;1,4,vuoto;1,5,vuoto;1,6,pieno;2,1,vuoto;2,2,vuoto;2,3,vuoto;2,4,vuoto;2,5,pieno;2,6,vuoto;3,1,vuoto;3,2,vuoto;3,3,vuoto;3,4,pieno;3,5,vuoto;3,6,vuoto;4,1,vuoto;4,2,vuoto;4,3,pieno;4,4,vuoto;4,5,vuoto;4,6,vuoto;5,1,vuoto;5,2,pieno;5,3,vuoto;5,4,vuoto;5,5,vuoto;5,6,vuoto;6,1,pieno;6,2,vuoto;6,3,vuoto;6,4,vuoto;6,5,vuoto;6,6,vuoto" segmenti="1,6,6,1" xmin=0 xmax=6.8 ymin=0 ymax=6.8 uguale=1 nomi="a,b" titolo="I $36$ risultati del lancio di due dadi: $a$ è il numero del primo dado, $b$ quello del secondo. I punti pieni sono i $6$ risultati con somma $7$"}

:::

## Definizione classica di probabilità

:::definizione{#probabilita-classica titolo="Probabilità classica"}
Si consideri un esperimento con un numero finito di risultati, tutti **equiprobabili**, cioè con la stessa possibilità di verificarsi: un dado non truccato, una moneta regolare, palline uguali al tatto. La **probabilità** di un evento $E$ è il rapporto tra il numero dei casi favorevoli e il numero dei casi possibili:
$$
P(E) = \frac{\text{casi favorevoli}}{\text{casi possibili}} .
$$
La definizione riduce il calcolo di una probabilità a due conteggi. Lanciando un dado, la probabilità di ottenere un numero pari è $\dfrac{3}{6} = \dfrac{1}{2}$, perché i casi favorevoli sono $2$, $4$ e $6$ e i casi possibili sono $6$. Lanciando due dadi, la probabilità che la somma sia $7$ è $\dfrac{6}{36} = \dfrac{1}{6}$.
:::

:::teorema{#proprieta-della-probabilita titolo="Valori della probabilità"}
Per ogni evento $E$ vale
$$
0 \leq P(E) \leq 1 .
$$
Infatti i casi favorevoli sono almeno $0$ e al massimo quanti i casi possibili. L'evento impossibile ha probabilità $0$ e l'evento certo ha probabilità $1$. La proprietà offre un primo controllo sui risultati, perché un valore maggiore di $1$, come $\dfrac{7}{6}$, oppure negativo indica un errore nel conteggio.
:::

:::attenzione
La definizione classica si applica *solo* se i casi possibili sono equiprobabili. Nel lancio di due dadi le somme possibili sono gli $11$ numeri da $2$ a $12$, ma la probabilità di ottenere somma $7$ *non* è $\dfrac{1}{11}$. La somma $2$ si ottiene soltanto con la coppia $(1, 1)$, mentre la somma $7$ si ottiene con sei coppie, quindi le somme non sono equiprobabili. I casi equiprobabili sono le $36$ coppie ordinate, ed è su queste che si contano i casi favorevoli.

::grafico{poligoni="1.6,0 2.4,0 2.4,1 1.6,1;2.6,0 3.4,0 3.4,2 2.6,2;3.6,0 4.4,0 4.4,3 3.6,3;4.6,0 5.4,0 5.4,4 4.6,4;5.6,0 6.4,0 6.4,5 5.6,5;6.6,0 7.4,0 7.4,6 6.6,6;7.6,0 8.4,0 8.4,5 7.6,5;8.6,0 9.4,0 9.4,4 8.6,4;9.6,0 10.4,0 10.4,3 9.6,3;10.6,0 11.4,0 11.4,2 10.6,2;11.6,0 12.4,0 12.4,1 11.6,1" xmin=0 xmax=13 ymin=0 ymax=7 nomi="s,casi" titolo="Numero di coppie ordinate, su $36$, che danno ciascuna somma $s$ da $2$ a $12$ nel lancio di due dadi: la somma $7$ ha $6$ casi favorevoli, le somme $2$ e $12$ uno solo"}

:::

## Monete, dadi, carte e urne

:::osservazione{#lancio-di-monete-e-dadi titolo="Monete e dadi"}
In una moneta regolare testa e croce hanno probabilità $\dfrac{1}{2}$ ciascuna; in un dado non truccato a sei facce ogni faccia ha probabilità $\dfrac{1}{6}$. Quando si lancia più volte, un risultato è la sequenza ordinata degli esiti. Per il principio di moltiplicazione $n$ lanci di una moneta hanno $2^n$ risultati e $n$ lanci di un dado ne hanno $6^n$. Lanciare due monete insieme equivale a lanciarne una due volte, perché le due monete si possono distinguere.

Con tre lanci di una moneta i risultati sono $2^3 = 8$:
$$
TTT,\quad TTC,\quad TCT,\quad CTT,\quad TCC,\quad CTC,\quad CCT,\quad CCC .
$$
L'evento "esattamente due teste" ha i $3$ casi favorevoli $TTC$, $TCT$ e $CTT$, quindi ha probabilità $\dfrac{3}{8}$.
:::

:::definizione{#mazzi-di-carte titolo="Mazzi di carte"}
I quesiti usano due tipi di mazzo, e il testo dichiara quale.

- Il mazzo di $40$ **carte italiane** ha $4$ semi (coppe, denari, bastoni e spade) di $10$ carte ciascuno: asso, $2$, $3$, $4$, $5$, $6$, $7$, fante, cavallo e re. Le **figure** sono fante, cavallo e re, quindi sono $3$ per seme e $12$ in tutto.
- Il mazzo di $52$ **carte francesi** ha $4$ semi (cuori e quadri, di colore rosso; fiori e picche, di colore nero) di $13$ carte ciascuno: asso, i numeri da $2$ a $10$, jack, donna e re. Le figure sono jack, donna e re, quindi sono $12$ in tutto, e le carte rosse sono $26$.

Si suppone sempre che il mazzo sia ben mescolato, quindi ogni carta ha la stessa probabilità di essere estratta. La probabilità di estrarre un re è $\dfrac{4}{40} = \dfrac{1}{10}$ con il mazzo italiano e $\dfrac{4}{52} = \dfrac{1}{13}$ con quello francese; la probabilità di estrarre una carta di cuori dal mazzo francese è $\dfrac{13}{52} = \dfrac{1}{4}$.
:::

:::definizione{#urne titolo="Urne e sorteggi"}
Un'**urna** è un contenitore di palline uguali per forma e peso, che differiscono solo per il colore o per il numero scritto sopra. Estraendo una pallina senza guardare, ogni pallina ha la stessa probabilità di uscire, quindi i casi possibili sono il numero totale delle palline. In un'urna con $3$ palline rosse, $5$ bianche e $2$ verdi la probabilità di estrarre una pallina bianca è $\dfrac{5}{10} = \dfrac{1}{2}$, e quella di estrarre una verde è $\dfrac{2}{10} = \dfrac{1}{5}$.

Molti quesiti dei concorsi descrivono un sorteggio tra persone, come la scelta a caso di un dipendente tra i $40$ di un ufficio. Il calcolo è lo stesso di un'urna in cui ogni persona corrisponde a una pallina.
:::

## Evento contrario ed eventi incompatibili

:::teorema{#evento-contrario titolo="Probabilità dell'evento contrario"}
L'**evento contrario** di $E$, indicato con $\overline{E}$, è vero quando $E$ è falso. I suoi casi favorevoli sono i casi possibili che non sono favorevoli a $E$, quindi
$$
P(\overline{E}) = 1 - P(E) .
$$
Infatti, se i casi possibili sono $n$ e quelli favorevoli a $E$ sono $f$, i casi favorevoli a $\overline{E}$ sono $n - f$, e $\dfrac{n - f}{n} = 1 - \dfrac{f}{n}$. Lanciando un dado, la probabilità di *non* ottenere $6$ è $1 - \dfrac{1}{6} = \dfrac{5}{6}$.

La regola si usa soprattutto per gli eventi del tipo "almeno uno". L'evento contrario di "almeno un $6$ in due lanci di un dado" è "nessun $6$ in due lanci", che ha $5 \cdot 5 = 25$ casi favorevoli su $36$. Perciò
$$
P(\text{almeno un } 6) = 1 - \frac{25}{36} = \frac{11}{36} .
$$
Il conteggio diretto richiederebbe di distinguere i casi con un solo $6$ da quello con due $6$, mentre per l'evento contrario basta un solo prodotto.
:::

:::definizione{#eventi-incompatibili titolo="Eventi incompatibili"}
L'evento "$A$ oppure $B$", indicato con $A \cup B$, è vero quando almeno uno dei due eventi è vero; l'evento "$A$ e $B$", indicato con $A \cap B$, è vero quando sono veri entrambi. Due eventi $A$ e $B$ sono **incompatibili** se non possono essere veri insieme, cioè se non hanno casi favorevoli in comune. Nel lancio di un dado gli eventi "esce $1$" ed "esce un numero pari" sono incompatibili. Gli eventi "esce un numero pari" ed "esce un numero maggiore di $3$" sono invece compatibili, perché i risultati $4$ e $6$ sono favorevoli a entrambi.

::venn{tipo="disgiunti" zone="a,b" nomi="A,B" universo=1 ambiente="Ω" titolo="Due eventi incompatibili: gli insiemi dei casi favorevoli ad $A$ e a $B$ non hanno elementi in comune"}

:::

:::teorema{#regola-della-somma titolo="Regola della somma per eventi incompatibili"}
Se $A$ e $B$ sono incompatibili, allora
$$
P(A \cup B) = P(A) + P(B) .
$$
Infatti i casi favorevoli ad $A \cup B$ sono quelli favorevoli ad $A$ più quelli favorevoli a $B$, e nessuno è contato due volte. Dal mazzo di $40$ carte italiane la probabilità di estrarre un asso oppure un re è
$$
\frac{4}{40} + \frac{4}{40} = \frac{8}{40} = \frac{1}{5} .
$$
La regola vale anche per più di due eventi, purché siano incompatibili a due a due.
:::

:::teorema{#somma-eventi-compatibili titolo="Regola della somma per eventi qualsiasi"}
Per due eventi qualsiasi $A$ e $B$ vale
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$
Sommando i casi favorevoli ad $A$ e quelli favorevoli a $B$, i casi favorevoli a entrambi sono contati due volte, perciò si sottraggono una volta. Dal mazzo di $52$ carte francesi la probabilità di estrarre un re oppure una carta di cuori è
$$
\frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13},
$$
perché il re di cuori è favorevole a entrambi gli eventi. Se gli eventi sono incompatibili, $P(A \cap B) = 0$ e si ritrova la regola precedente.

::venn{zone="a,ab,b" nomi="re,cuori" elementi="a:3;ab:1;b:12" titolo="Re e carte di cuori nel mazzo francese: $3$ re non di cuori, il re di cuori nella parte comune, $12$ cuori che non sono re. In tutto le carte favorevoli sono $16$"}

:::

## Eventi indipendenti

:::definizione{#eventi-indipendenti titolo="Eventi indipendenti"}
Due eventi sono **indipendenti** se il verificarsi di uno non cambia la probabilità dell'altro. Sono indipendenti i risultati di lanci diversi di una moneta o di un dado, perché le condizioni di ogni lancio sono le stesse qualunque sia stato il risultato dei lanci precedenti. Sono indipendenti anche gli eventi che riguardano esperimenti separati, come il lancio di una moneta e il lancio di un dado, oppure il ritardo di due autobus di linee diverse quando il testo lo dichiara.
:::

:::teorema{#regola-del-prodotto titolo="Regola del prodotto per eventi indipendenti"}
Se $A$ e $B$ sono indipendenti, allora
$$
P(A \cap B) = P(A) \cdot P(B) .
$$
Lanciando una moneta e un dado i casi possibili sono le $2 \cdot 6 = 12$ coppie, e l'evento "testa e $6$" ha $1 \cdot 1 = 1$ caso favorevole. Il numero dei casi è un prodotto sia al numeratore sia al denominatore, quindi
$$
P(T \text{ e } 6) = \frac{1}{12} = \frac{1}{2} \cdot \frac{1}{6} .
$$
La regola vale anche per più eventi indipendenti; la probabilità di ottenere tre teste in tre lanci di una moneta è $\left( \dfrac{1}{2} \right)^{3} = \dfrac{1}{8}$.
:::

:::esempio{titolo="Nessuno, entrambi, almeno uno, esattamente uno"}
Due lampade si guastano entro un anno con probabilità $0{,}1$ e $0{,}2$, in modo indipendente. Le probabilità che restano accese sono $0{,}9$ e $0{,}8$.

- Si guastano entrambe con probabilità $0{,}1 \cdot 0{,}2 = 0{,}02$.
- Non se ne guasta nessuna con probabilità $0{,}9 \cdot 0{,}8 = 0{,}72$.
- Se ne guasta almeno una con probabilità $1 - 0{,}72 = 0{,}28$, per la regola dell'evento contrario.
- Se ne guasta esattamente una con probabilità $0{,}1 \cdot 0{,}8 + 0{,}9 \cdot 0{,}2 = 0{,}08 + 0{,}18 = 0{,}26$, perché i casi "si guasta solo la prima" e "si guasta solo la seconda" sono incompatibili e le loro probabilità si sommano.

Come controllo, $0{,}02 + 0{,}26 + 0{,}72 = 1$, poiché i tre casi "entrambe", "esattamente una" e "nessuna" sono incompatibili e coprono tutte le possibilità.
:::

:::attenzione
Due eventi incompatibili, entrambi con probabilità maggiore di zero, *non* sono indipendenti. Nel lancio di un dado gli eventi "esce $1$" ed "esce $2$" sono incompatibili. Se esce $1$, l'uscita di $2$ diventa impossibile, quindi il verificarsi del primo evento cambia la probabilità del secondo da $\dfrac{1}{6}$ a $0$. Per l'evento "$A$ oppure $B$" con eventi incompatibili le probabilità si sommano; per l'evento "$A$ e $B$" con eventi indipendenti si moltiplicano.
:::

## Estrazioni e probabilità condizionata

:::definizione{#estrazioni-con-reimmissione titolo="Estrazioni con reimmissione"}
Nelle estrazioni **con reimmissione** la pallina estratta si rimette nell'urna prima dell'estrazione successiva. La composizione dell'urna resta la stessa, quindi le estrazioni sono indipendenti e si applica la regola del prodotto. Da un'urna con $3$ palline rosse e $2$ bianche, la probabilità di estrarre due rosse con reimmissione è
$$
\frac{3}{5} \cdot \frac{3}{5} = \frac{9}{25} .
$$
:::

:::definizione{#estrazioni-senza-reimmissione titolo="Estrazioni senza reimmissione"}
Nelle estrazioni **senza reimmissione** la pallina estratta resta fuori dall'urna. La composizione dell'urna cambia dopo ogni estrazione, perciò la probabilità di un colore alla seconda estrazione dipende dal risultato della prima. Con la stessa urna di $3$ rosse e $2$ bianche, la prima pallina è rossa con probabilità $\dfrac{3}{5}$; se è rossa, nell'urna restano $2$ rosse su $4$ palline, quindi la seconda è rossa con probabilità $\dfrac{2}{4}$. Perciò
$$
P(\text{due rosse}) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} .
$$
Estrarre più palline insieme, "contemporaneamente", equivale a estrarle una dopo l'altra senza reimmissione. Le estrazioni si rappresentano con un **diagramma ad albero**: su ogni ramo si scrive la probabilità di quel risultato, e la probabilità di un percorso è il prodotto delle probabilità dei suoi rami.

::grafico{assi=0 uguale=1 linee="0,0 2.7,1.4;0,0 2.7,-1.4;3.5,1.5 6,2.25;3.5,1.5 6,0.75;3.5,-1.5 6,-0.75;3.5,-1.5 6,-2.25" punti="0,0,pieno" etichette="2.85,1.35,R;2.85,-1.65,B;6.15,2.1,P(RR) = 0,3;6.15,0.6,P(RB) = 0,3;6.15,-0.9,P(BR) = 0,3;6.15,-2.4,P(BB) = 0,1;0.9,1.0,0,6;0.9,-1.35,0,4;4.3,2.25,0,5;4.3,0.55,0,5;4.3,-0.75,0,75;4.3,-2.4,0,25" xmin=-0.5 xmax=9 ymin=-2.9 ymax=2.9 titolo="Due estrazioni senza reimmissione da un'urna con $3$ palline rosse (R) e $2$ bianche (B). Sui rami del primo livello ci sono $\dfrac{3}{5} = 0{,}6$ e $\dfrac{2}{5} = 0{,}4$; sui rami del secondo livello ci sono le probabilità calcolate con le $4$ palline rimaste, per esempio $\dfrac{2}{4} = 0{,}5$. In fondo a ogni percorso c'è il prodotto delle probabilità dei suoi rami"}

:::

:::definizione{#probabilita-condizionata titolo="Probabilità condizionata"}
La **probabilità condizionata** di $A$ dato $B$, indicata con $P(A \mid B)$, è la probabilità di $A$ sapendo che $B$ si è verificato. Con casi equiprobabili si calcola restringendo i casi possibili a quelli favorevoli a $B$:
$$
P(A \mid B) = \frac{\text{casi favorevoli ad } A \text{ e a } B}{\text{casi favorevoli a } B} = \frac{P(A \cap B)}{P(B)},
\qquad P(B) > 0 .
$$
Lanciando un dado, la probabilità che sia uscito $6$ sapendo che è uscito un numero pari è $\dfrac{1}{3}$, perché i casi possibili si riducono a $2$, $4$ e $6$. Nell'albero delle estrazioni senza reimmissione le probabilità sui rami del secondo livello sono probabilità condizionate.
:::

:::teorema{#regola-del-prodotto-generale titolo="Regola del prodotto per eventi qualsiasi"}
Per due eventi qualsiasi $A$ e $B$, con $P(A) > 0$, vale
$$
P(A \cap B) = P(A) \cdot P(B \mid A) .
$$
La formula si ottiene dalla definizione di probabilità condizionata, scritta scambiando $A$ e $B$ e moltiplicata per $P(A)$. Se $A$ e $B$ sono indipendenti, allora $P(B \mid A) = P(B)$ e si ritrova la regola del prodotto per eventi indipendenti. In un ufficio di $20$ persone, di cui $12$ donne, si sorteggiano due persone per un turno; la probabilità che siano entrambe donne è
$$
\frac{12}{20} \cdot \frac{11}{19} = \frac{132}{380} = \frac{33}{95},
$$
perché dopo la prima donna sorteggiata ne restano $11$ su $19$ persone.
:::

:::esempio{titolo="Probabilità condizionata da una tabella"}
In un ufficio lavorano $50$ dipendenti, divisi come nella tabella.

| | part-time | tempo pieno | totale |
| --- | --- | --- | --- |
| uomini | $5$ | $15$ | $20$ |
| donne | $12$ | $18$ | $30$ |
| totale | $17$ | $33$ | $50$ |

Si sceglie a caso un dipendente tra quelli part-time. I casi possibili sono i $17$ dipendenti part-time, e $12$ di loro sono donne, quindi
$$
P(\text{donna} \mid \text{part-time}) = \frac{12}{17} .
$$
Le altre probabilità che si leggono nella tabella rispondono a domande diverse. La probabilità che un dipendente scelto tra tutti sia una donna part-time è $\dfrac{12}{50}$, e la probabilità che una dipendente scelta tra le donne sia part-time è $\dfrac{12}{30} = \dfrac{2}{5}$.
:::

## Probabilità e calcolo combinatorio

:::teorema{#probabilita-e-combinatoria titolo="Casi possibili e favorevoli con il calcolo combinatorio"}
Quando i casi sono troppi per elencarli, si contano con le formule dell'argomento sul calcolo combinatorio. Se si estraggono insieme $k$ oggetti da $n$, l'ordine non conta, quindi i casi possibili sono le combinazioni
$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
Da un'urna con $r$ palline rosse e $b$ bianche, estraendone $k$ insieme, la probabilità che siano tutte rosse è
$$
P = \frac{C_{r,k}}{C_{r+b,k}} .
$$
Con $4$ rosse e $6$ bianche, estraendo due palline insieme si ha
$$
P(\text{due rosse}) = \frac{C_{4,2}}{C_{10,2}} = \frac{6}{45} = \frac{2}{15} .
$$
Lo stesso risultato si ottiene con la regola del prodotto, perché $\dfrac{4}{10} \cdot \dfrac{3}{9} = \dfrac{12}{90} = \dfrac{2}{15}$. Il metodo delle combinazioni è più rapido quando il gruppo estratto deve contenere oggetti di tipi diversi.
:::

:::esempio{titolo="Gruppi con composizione assegnata"}
Da $5$ uomini e $4$ donne si sorteggia una commissione di $3$ persone. I casi possibili sono $C_{9,3} = 84$. Per avere esattamente una donna si scelgono $2$ uomini tra $5$, in $C_{5,2} = 10$ modi, e $1$ donna tra $4$, in $C_{4,1} = 4$ modi; per il principio di moltiplicazione i casi favorevoli sono $10 \cdot 4 = 40$. Perciò
$$
P(\text{esattamente una donna}) = \frac{40}{84} = \frac{10}{21} .
$$
:::

:::esempio{titolo="Ordinamenti"}
Quando conta l'ordine, i casi si contano con le permutazioni o con le disposizioni. Si sceglie a caso uno degli anagrammi della parola LIBRO, che ha $5$ lettere distinte, quindi i casi possibili sono $P_5 = 5! = 120$. Gli anagrammi che iniziano e finiscono con una vocale hanno al primo posto I oppure O, all'ultimo posto l'altra vocale e in mezzo le $3$ consonanti in un ordine qualsiasi, perciò sono $2 \cdot 1 \cdot 3! = 12$. La probabilità è $\dfrac{12}{120} = \dfrac{1}{10}$.
:::

## Frequenza relativa e probabilità in percentuale

:::definizione{#frequenza-relativa titolo="Frequenza relativa"}
Se un esperimento si ripete $n$ volte nelle stesse condizioni e un evento si verifica $k$ volte, la **frequenza relativa** dell'evento è
$$
f = \frac{k}{n} .
$$
Su un numero grande di prove la frequenza relativa assume valori vicini alla probabilità; questo fatto si chiama **legge empirica del caso**. Lanciando un dado $600$ volte, il $6$ esce in genere un numero di volte vicino a $\dfrac{600}{6} = 100$.

La frequenza relativa serve anche nel verso opposto. Quando i casi non sono equiprobabili, come per il ritardo di un treno o per un pezzo difettoso, la probabilità si stima con la frequenza osservata. Un treno arrivato in ritardo $30$ volte in $200$ giorni ha una probabilità di ritardo stimata in $\dfrac{30}{200} = 0{,}15$.
:::

:::osservazione{#probabilita-in-percentuale titolo="Probabilità in percentuale e numero atteso"}
Una probabilità è un numero compreso tra $0$ e $1$, quindi si può scrivere come frazione, come numero decimale o come percentuale:
$$
\frac{1}{4} = 0{,}25 = 25\%,
\qquad
\frac{3}{8} = 0{,}375 = 37{,}5\% .
$$
Per passare da un numero decimale alla percentuale si moltiplica per $100$; per il passaggio inverso si divide per $100$. Il calcolo delle percentuali si trova nell'argomento su rapporti, proporzioni e percentuali.

Se un evento ha probabilità $p$ e l'esperimento si ripete $n$ volte, il numero di volte in cui ci si aspetta che l'evento si verifichi è circa $n \cdot p$. Se un pezzo è difettoso con probabilità del $3\%$, in un lotto di $2000$ pezzi ci si aspettano circa $2000 \cdot 0{,}03 = 60$ pezzi difettosi.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Controlli e scorciatoie"}
Molte opzioni sbagliate si riconoscono prima di fare il calcolo completo.

- **Controllo dei valori**: una probabilità è compresa tra $0$ e $1$. La probabilità di "$A$ e $B$" non supera né $P(A)$ né $P(B)$, e la probabilità di "$A$ oppure $B$" non è minore di nessuna delle due.
- **Evento contrario**: per "almeno uno", "non tutti" e "nessuno" si calcola $1 - P(\overline{E})$, che di solito richiede un solo prodotto.
- **Simmetria**: senza reimmissione, la probabilità che la *seconda* pallina sia rossa è uguale alla probabilità che lo sia la prima, perché ogni pallina ha la stessa probabilità di trovarsi in qualunque posizione dell'ordine di estrazione. Con $3$ rosse e $2$ bianche si ha infatti $\dfrac{3}{5} \cdot \dfrac{2}{4} + \dfrac{2}{5} \cdot \dfrac{3}{4} = \dfrac{12}{20} = \dfrac{3}{5}$.
- Le opzioni sbagliate nascono di solito da **errori tipici**, come la somma di probabilità che andavano moltiplicate, il risultato con reimmissione quando le estrazioni sono senza reimmissione, le coppie di dadi contate senza ordine e il caso "entrambi" al posto di "almeno uno".

Le opzioni possono presentare lo stesso valore in forme diverse, come $\dfrac{3}{20}$, $0{,}15$ e $15\%$. Il confronto si fa dopo averle scritte nella stessa forma.
:::

:::esempio{titolo="Un quiz risolto con l'evento contrario"}
Lanciando $5$ volte una moneta, la probabilità di ottenere almeno una testa è da scegliere tra $\dfrac{5}{32}$, $\dfrac{1}{2}$, $\dfrac{31}{32}$, $\dfrac{1}{32}$ e $\dfrac{5}{2}$. L'opzione $\dfrac{5}{2}$ è maggiore di $1$, quindi si esclude. L'evento contrario "nessuna testa" ha il solo caso favorevole $CCCCC$ su $2^5 = 32$, perciò la probabilità cercata è $1 - \dfrac{1}{32} = \dfrac{31}{32}$.
:::
