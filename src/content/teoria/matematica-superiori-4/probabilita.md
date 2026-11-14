---
titolo: Probabilità e probabilità condizionata
sommario: Esperimenti aleatori ed eventi, definizioni classica, frequentista, soggettiva e assiomatica della probabilità, teoremi della somma e del prodotto, probabilità condizionata ed eventi indipendenti, estrazioni con il calcolo combinatorio, probabilità totale, teorema di Bayes e prove ripetute.
---

## Esperimenti aleatori ed eventi

:::definizione{#esperimento-aleatorio titolo="Esperimento aleatorio e spazio campionario"}
Un **esperimento aleatorio** è un esperimento di cui si conoscono tutti i risultati possibili, ma di cui non si può prevedere con certezza il risultato prima di eseguirlo. Il lancio di un dado, l'estrazione di una carta da un mazzo e il lancio di una moneta sono esperimenti aleatori. Ogni risultato possibile si chiama **esito**.

L'insieme di tutti gli esiti si chiama **spazio campionario** e si indica con $\Omega$. Nel lancio di un dado lo spazio campionario è
$$
\Omega = \{ 1, 2, 3, 4, 5, 6 \} .
$$
Nel lancio di due monete gli esiti sono le coppie ordinate di risultati, quindi $\Omega = \{ TT, TC, CT, CC \}$, dove $T$ indica testa e $C$ indica croce. Lo spazio campionario è il punto di partenza di ogni calcolo, perché le probabilità si assegnano ai suoi elementi.
:::

:::esempio{titolo="Lo spazio campionario del lancio di due dadi"}
Si lanciano un dado rosso e un dado blu. Ogni esito è una coppia ordinata $(a, b)$, dove $a$ è il numero del dado rosso e $b$ quello del dado blu. Il primo numero si può scegliere in $6$ modi e il secondo in $6$ modi, quindi lo spazio campionario ha $6 \cdot 6 = 36$ elementi. Le coppie $(1, 2)$ e $(2, 1)$ sono esiti distinti, perché nel primo caso il $2$ è sul dado blu e nel secondo sul dado rosso.

::grafico{punti="1,1;1,2;1,3;1,4;1,5;1,6;2,1;2,2;2,3;2,4;2,5;2,6;3,1;3,2;3,3;3,4;3,5;3,6;4,1;4,2;4,3;4,4;4,5;4,6;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5;6,6" f="7-x" xmin=0 xmax=7 ymin=0 ymax=7 uguale=1 nomi="a,b" titolo="I $36$ esiti del lancio di due dadi come punti $(a, b)$ del piano. I $6$ punti sulla retta $a + b = 7$ sono gli esiti con somma $7$"}

:::

:::definizione{#eventi titolo="Eventi"}
Un **evento** è un sottoinsieme dello spazio campionario. Si dice che un evento si verifica quando l'esito dell'esperimento appartiene a quel sottoinsieme. Nel lancio di un dado l'evento "esce un numero pari" è $A = \{ 2, 4, 6 \}$, e si verifica se esce $2$, $4$ oppure $6$.

- Un evento formato da un solo esito si chiama **evento elementare**, per esempio $\{ 5 \}$.
- Lo spazio campionario $\Omega$ è l'**evento certo**, perché si verifica sempre.
- L'insieme vuoto $\varnothing$ è l'**evento impossibile**, perché non si verifica mai. Nel lancio di un dado "esce $7$" è l'evento impossibile.

Scrivere gli eventi come insiemi permette di usare le operazioni tra insiemi per descrivere eventi composti, come "esce un numero pari *oppure* maggiore di $4$".
:::

## Operazioni tra eventi

:::definizione{#operazioni-eventi titolo="Unione, intersezione ed evento contrario"}
Siano $A$ e $B$ due eventi dello stesso spazio campionario $\Omega$.

- L'**unione** $A \cup B$ è l'evento che si verifica quando si verifica *almeno uno* dei due eventi. Corrisponde alla congiunzione "oppure".
- L'**intersezione** $A \cap B$ è l'evento che si verifica quando si verificano *entrambi* gli eventi. Corrisponde alla congiunzione "e".
- L'**evento contrario** di $A$, indicato con $\overline{A}$, è l'insieme degli esiti di $\Omega$ che non appartengono ad $A$. Si verifica esattamente quando $A$ non si verifica.

Nel lancio di un dado siano $A = \{ 2, 4, 6 \}$, "esce un numero pari", e $B = \{ 5, 6 \}$, "esce un numero maggiore di $4$". Allora
$$
A \cup B = \{ 2, 4, 5, 6 \} ,
\qquad
A \cap B = \{ 6 \} ,
\qquad
\overline{A} = \{ 1, 3, 5 \} .
$$

::venn{zone="a,ab,b" nomi="A,B" universo=1 ambiente="Ω" elementi="a:2,4;ab:6;b:5;u:1,3" titolo="L'unione $A \cup B$ è la parte colorata e contiene gli esiti che stanno in almeno uno dei due eventi, cioè $2$, $4$, $5$ e $6$"}

:::

:::esempio{titolo="Intersezione ed evento contrario nel diagramma di Venn"}
Con gli stessi eventi $A = \{ 2, 4, 6 \}$ e $B = \{ 5, 6 \}$, l'intersezione è la zona comune ai due cerchi, e contiene il solo esito $6$. L'evento contrario di $A$ è tutto ciò che sta fuori dal cerchio di $A$, quindi contiene $1$, $3$ e $5$.

::venn{zone="ab" nomi="A,B" universo=1 ambiente="Ω" elementi="a:2,4;ab:6;b:5;u:1,3" titolo="L'intersezione $A \cap B = \{ 6 \}$ è la zona comune ai due eventi"}

::venn{zone="b,u" nomi="A,B" universo=1 ambiente="Ω" elementi="a:2,4;ab:6;b:5;u:1,3" titolo="L'evento contrario $\overline{A} = \{ 1, 3, 5 \}$ è la parte di $\Omega$ esterna ad $A$"}

Un evento e il suo contrario non hanno esiti in comune e insieme formano tutto lo spazio campionario, quindi
$$
A \cap \overline{A} = \varnothing ,
\qquad
A \cup \overline{A} = \Omega .
$$
:::

:::definizione{#eventi-incompatibili titolo="Eventi incompatibili"}
Due eventi $A$ e $B$ si dicono **incompatibili** se non possono verificarsi insieme, cioè se
$$
A \cap B = \varnothing .
$$
In caso contrario si dicono compatibili. Nel lancio di un dado gli eventi $A = \{ 1, 2 \}$, "esce un numero minore di $3$", e $B = \{ 5, 6 \}$, "esce un numero maggiore di $4$", sono incompatibili. Gli eventi "esce un numero pari" ed "esce un multiplo di $3$" sono compatibili, perché hanno in comune l'esito $6$. Un evento e il suo contrario sono sempre incompatibili. Per gli eventi incompatibili la probabilità dell'unione si calcola con una semplice somma, come si vede nel teorema della somma.

::venn{tipo="disgiunti" zone="a,b" nomi="A,B" universo=1 ambiente="Ω" elementi="a:1,2;b:5,6;u:3,4" titolo="Gli eventi $A = \{ 1, 2 \}$ e $B = \{ 5, 6 \}$ sono incompatibili, perché i due insiemi non hanno esiti in comune"}

:::

## Definizioni di probabilità

:::definizione{#probabilita-classica titolo="Definizione classica"}
La probabilità di un evento è un numero tra $0$ e $1$ che misura quanto è possibile che l'evento si verifichi. La prima definizione vale quando lo spazio campionario è finito e gli esiti sono **equiprobabili**, cioè hanno tutti la stessa possibilità di verificarsi, come le facce di un dado regolare. In questo caso la probabilità di un evento $E$ è il rapporto tra il numero dei casi favorevoli e il numero dei casi possibili:
$$
P(E) = \frac{\text{numero dei casi favorevoli a } E}{\text{numero dei casi possibili}} .
$$
Nel lancio di un dado regolare l'evento "esce un numero pari" ha $3$ casi favorevoli su $6$ possibili, quindi $P(\text{pari}) = \dfrac{3}{6} = \dfrac{1}{2}$. Nel lancio di due dadi la somma $7$ si ottiene con le $6$ coppie $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$, quindi $P(\text{somma } 7) = \dfrac{6}{36} = \dfrac{1}{6}$.

Dalla definizione segue che $0 \leq P(E) \leq 1$, perché i casi favorevoli sono al più tutti quelli possibili. L'evento impossibile ha probabilità $0$ e l'evento certo ha probabilità $1$.
:::

:::attenzione
La definizione classica si applica *solo* agli esiti equiprobabili. Nel lancio di due dadi le somme possibili sono gli undici numeri da $2$ a $12$, ma la probabilità della somma $2$ è diversa da $\dfrac{1}{11}$. Infatti la somma $2$ si ottiene con la sola coppia $(1, 1)$, quindi $P(\text{somma } 2) = \dfrac{1}{36}$, mentre la somma $7$ ha probabilità $\dfrac{6}{36}$. Gli esiti equiprobabili sono le $36$ coppie ordinate, e su di esse si contano i casi.
:::

:::definizione{#probabilita-frequentista titolo="Definizione frequentista"}
Molti esperimenti non hanno esiti equiprobabili. Per esempio, una puntina da disegno lanciata sul tavolo può cadere con la punta in su oppure appoggiata sul fianco, e non c'è motivo di pensare che i due esiti abbiano la stessa probabilità. In questi casi si ripete l'esperimento molte volte, nelle stesse condizioni. Se in $n$ prove l'evento $E$ si verifica $k$ volte, la **frequenza relativa** di $E$ è
$$
f(E) = \frac{k}{n} .
$$
La **legge empirica del caso** afferma che, quando $n$ è grande, la frequenza relativa assume valori vicini alla probabilità dell'evento, e che di solito l'approssimazione migliora al crescere di $n$. La **definizione frequentista** prende come probabilità di $E$ la frequenza relativa calcolata su un numero grande di prove. Per esempio, se una puntina lanciata $500$ volte cade con la punta in su $310$ volte, si stima
$$
P(\text{punta in su}) \approx \frac{310}{500} = 0{,}62 .
$$
Questa definizione si usa per gli eventi che si possono ripetere, come la percentuale di pezzi difettosi prodotti da una macchina.
:::

:::definizione{#probabilita-soggettiva titolo="Definizione soggettiva"}
Alcuni eventi non si possono ripetere, come la vittoria di una squadra in una certa partita. La **definizione soggettiva** misura il grado di fiducia di una persona nel verificarsi dell'evento attraverso una scommessa. La probabilità di $E$ è il rapporto tra la somma $S$ che la persona è disposta a pagare e la somma $V$ che riceve se l'evento si verifica:
$$
P(E) = \frac{S}{V} .
$$
La scommessa deve essere **coerente**, cioè la persona deve essere disposta ad accettarla anche a parti invertite, nel ruolo di chi riceve $S$ e paga $V$. Se Luca è disposto a pagare $3$ euro per ricevere $5$ euro in caso di vittoria della sua squadra, per lui la probabilità della vittoria è $\dfrac{3}{5}$.
:::

## Impostazione assiomatica

:::definizione{#assiomi-probabilita titolo="Assiomi della probabilità"}
Le tre definizioni precedenti hanno in comune alcune proprietà. L'**impostazione assiomatica** prende queste proprietà come punto di partenza e chiama probabilità ogni funzione che le soddisfa. Sia $\Omega$ uno spazio campionario finito. Una **probabilità** è una funzione $P$ che a ogni evento $E$ associa un numero reale $P(E)$ in modo che valgano i tre assiomi seguenti.

1. $P(E) \geq 0$ per ogni evento $E$.
2. $P(\Omega) = 1$.
3. Se $A$ e $B$ sono incompatibili, allora $P(A \cup B) = P(A) + P(B)$.

Per uno spazio finito basta assegnare a ogni esito un numero non negativo, in modo che la somma di tutti i numeri sia $1$. La probabilità di un evento è allora la somma delle probabilità dei suoi esiti. La definizione classica è il caso in cui tutti gli esiti hanno la stessa probabilità $\dfrac{1}{n}$, dove $n$ è il numero degli esiti.
:::

:::esempio{titolo="Un dado truccato"}
Un dado è truccato in modo che la faccia $6$ esca con probabilità $\dfrac{1}{4}$, mentre le altre cinque facce sono equiprobabili. Per il secondo assioma la somma delle probabilità delle sei facce è $1$, quindi le cinque facce da $1$ a $5$ hanno in tutto probabilità $1 - \dfrac{1}{4} = \dfrac{3}{4}$, e ciascuna ha probabilità
$$
\frac{3}{4} \cdot \frac{1}{5} = \frac{3}{20} .
$$
La probabilità che esca un numero pari è la somma delle probabilità delle facce $2$, $4$ e $6$:
$$
P(\text{pari}) = \frac{3}{20} + \frac{3}{20} + \frac{1}{4} = \frac{3 + 3 + 5}{20} = \frac{11}{20} .
$$
In questo caso la definizione classica non si applica, perché gli esiti non sono equiprobabili, mentre gli assiomi permettono di calcolare la probabilità di ogni evento.
:::

::::teorema{#evento-contrario titolo="Probabilità dell'evento contrario"}
Per ogni evento $E$ vale
$$
P\left( \overline{E} \right) = 1 - P(E) .
$$
Il teorema serve quando l'evento contrario è più semplice da contare. Per esempio, nel lancio di tre monete l'evento "esce almeno una testa" comprende sette esiti, mentre il contrario "escono tre croci" contiene solo $CCC$. Gli esiti sono $2^3 = 8$ e sono equiprobabili, quindi
$$
P(\text{almeno una testa}) = 1 - P(CCC) = 1 - \frac{1}{8} = \frac{7}{8} .
$$

:::dimostrazione
L'idea è scrivere l'evento certo come unione di due eventi incompatibili. Gli eventi $E$ ed $\overline{E}$ sono incompatibili e la loro unione è $\Omega$. Per il terzo assioma si ha quindi $P(\Omega) = P(E) + P\left( \overline{E} \right)$. Per il secondo assioma $P(\Omega) = 1$, perciò
$$
P(E) + P\left( \overline{E} \right) = 1 ,
$$
da cui segue la tesi.
:::
::::

::::teorema{#proprieta-probabilita titolo="Conseguenze degli assiomi"}
Per ogni probabilità $P$ valgono le proprietà seguenti.

- $P(\varnothing) = 0$.
- Se $A \subseteq B$, allora $P(A) \leq P(B)$.
- $0 \leq P(E) \leq 1$ per ogni evento $E$.

La seconda proprietà dice che un evento che comprende un altro ha probabilità maggiore o uguale. Per esempio, nel lancio di un dado l'evento "esce $6$" è contenuto nell'evento "esce un numero pari", e infatti $\dfrac{1}{6} \leq \dfrac{1}{2}$.

:::dimostrazione
Il vuoto è il contrario dell'evento certo, quindi per il teorema dell'evento contrario $P(\varnothing) = 1 - P(\Omega) = 1 - 1 = 0$.

Sia $A \subseteq B$. L'evento $B$ è l'unione di $A$ e di $B \cap \overline{A}$, cioè degli esiti di $B$ che non stanno in $A$. I due eventi sono incompatibili, quindi per il terzo assioma
$$
P(B) = P(A) + P\left( B \cap \overline{A} \right) .
$$
Il secondo addendo è maggiore o uguale a $0$ per il primo assioma, perciò $P(B) \geq P(A)$.

Infine ogni evento $E$ è contenuto in $\Omega$. Per la proprietà appena dimostrata si ha $P(E) \leq P(\Omega) = 1$, e $P(E) \geq 0$ per il primo assioma.
:::
::::

## Teorema della somma

:::teorema{#somma-incompatibili titolo="Somma di eventi incompatibili"}
Se $E_1, E_2, \ldots, E_n$ sono eventi incompatibili a due a due, cioè se nessuna coppia di essi ha esiti in comune, allora
$$
P(E_1 \cup E_2 \cup \ldots \cup E_n) = P(E_1) + P(E_2) + \ldots + P(E_n) .
$$
Per $n = 2$ è il terzo assioma; per $n$ eventi si ottiene applicando il terzo assioma più volte, aggiungendo un evento alla volta. Il teorema serve quando un evento si divide in casi che si escludono a vicenda. Per esempio, nel lancio di due dadi la somma è minore di $5$ se è $2$, $3$ oppure $4$. I tre casi sono incompatibili e hanno $1$, $2$ e $3$ coppie favorevoli, quindi
$$
P(\text{somma} < 5) = \frac{1}{36} + \frac{2}{36} + \frac{3}{36} = \frac{6}{36} = \frac{1}{6} .
$$
:::

::::teorema{#teorema-somma titolo="Teorema della somma per eventi qualsiasi"}
Per due eventi qualsiasi $A$ e $B$ vale
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$
Nella somma $P(A) + P(B)$ gli esiti dell'intersezione sono contati due volte, una in $A$ e una in $B$, e la formula li sottrae una volta. Se $A$ e $B$ sono incompatibili si ha $P(A \cap B) = 0$ e si ritrova la somma di eventi incompatibili.

::venn{zone="a,ab,b" nomi="A,B" universo=1 ambiente="Ω" elementi="a:A ∩ B̅;ab:A ∩ B;b:A̅ ∩ B" titolo="L'unione $A \cup B$ è formata da tre parti incompatibili, cioè gli esiti solo di $A$, quelli comuni e quelli solo di $B$"}

:::dimostrazione
L'idea è dividere l'unione in tre parti incompatibili, come nel diagramma di Venn. Si ha
$$
A \cup B = \left( A \cap \overline{B} \right) \cup (A \cap B) \cup \left( \overline{A} \cap B \right) ,
$$
e le tre parti sono incompatibili a due a due. Per la somma di eventi incompatibili
$$
P(A \cup B) = P\left( A \cap \overline{B} \right) + P(A \cap B) + P\left( \overline{A} \cap B \right) .
$$
L'evento $A$ è l'unione delle due parti incompatibili $A \cap \overline{B}$ e $A \cap B$, quindi $P\left( A \cap \overline{B} \right) = P(A) - P(A \cap B)$. Allo stesso modo $P\left( \overline{A} \cap B \right) = P(B) - P(A \cap B)$. Sostituendo le due espressioni si ottiene
$$
\begin{aligned}
P(A \cup B) &= P(A) - P(A \cap B) + P(A \cap B) + P(B) - P(A \cap B) \\[6pt]
&= P(A) + P(B) - P(A \cap B) .
\end{aligned}
$$
:::
::::

:::esempio{titolo="Un re oppure una carta di denari"}
Da un mazzo di $40$ carte napoletane, con quattro semi (coppe, denari, bastoni e spade) di $10$ carte ciascuno, si estrae una carta. Siano $A$ l'evento "esce un re" e $B$ l'evento "esce una carta di denari". I re sono $4$, le carte di denari sono $10$ e il re di denari appartiene a entrambi gli eventi. Per il teorema della somma
$$
P(A \cup B) = \frac{4}{40} + \frac{10}{40} - \frac{1}{40} = \frac{13}{40} .
$$
Il conteggio diretto dà lo stesso risultato. Le carte favorevoli sono i $3$ re che non sono di denari, il re di denari e le $9$ carte di denari che non sono re, cioè $13$ carte.

::venn{zone="a,ab,b" nomi="re,denari" elementi="a:3;ab:1;b:9" titolo="Nel mazzo di $40$ carte ci sono $3$ re non di denari, il re di denari e $9$ carte di denari diverse dal re, quindi le carte favorevoli all'unione sono $13$"}

:::

:::osservazione{#somma-tre-eventi titolo="Teorema della somma per tre eventi"}
Per tre eventi $A$, $B$ e $C$ il ragionamento è simile. Si sommano le tre probabilità, si sottraggono quelle delle tre intersezioni a due a due e si aggiunge quella dell'intersezione dei tre eventi, che altrimenti non sarebbe contata:
$$
P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C) .
$$
Si sceglie a caso un numero tra $1$ e $30$ e si calcola la probabilità che sia divisibile per $2$, per $3$ oppure per $5$. I multipli di $2$ sono $15$, quelli di $3$ sono $10$ e quelli di $5$ sono $6$. I multipli comuni a due numeri sono i multipli di $6$, di $10$ e di $15$, cioè $5$, $3$ e $2$ numeri; i multipli di $30$ sono $1$. Quindi
$$
P = \frac{15 + 10 + 6 - 5 - 3 - 2 + 1}{30} = \frac{22}{30} = \frac{11}{15} .
$$

::venn{tipo="tre" zone="a,b,c,ab,ac,bc,abc" nomi="mult. 2,mult. 3,mult. 5" elementi="a:8;b:4;c:2;ab:4;ac:2;bc:1;abc:1" titolo="I numeri da $1$ a $30$ divisibili per $2$, per $3$ o per $5$: in ogni zona c'è il numero dei suoi elementi, e la somma delle sette zone colorate è $22$"}

:::

## Probabilità condizionata e teorema del prodotto

:::definizione{#probabilita-condizionata titolo="Probabilità condizionata"}
Spesso si conosce un'informazione parziale sull'esito di un esperimento. Si lancia un dado e si sa che è uscito un numero pari, quindi gli esiti possibili si riducono a $2$, $4$ e $6$. La probabilità di un evento $A$ calcolata sapendo che si è verificato l'evento $B$ si chiama **probabilità condizionata** di $A$ dato $B$, si indica con $P(A \mid B)$ e, se $P(B) > 0$, si definisce come
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$
L'evento $B$ diventa il nuovo spazio campionario, e di $A$ conta solo la parte che sta in $B$. Siano $A = \{ 4, 5, 6 \}$, "esce un numero maggiore di $3$", e $B = \{ 2, 4, 6 \}$, "esce un numero pari". Si ha $A \cap B = \{ 4, 6 \}$, quindi
$$
P(A \mid B) = \frac{\frac{2}{6}}{\frac{3}{6}} = \frac{2}{3} .
$$
Senza l'informazione la probabilità di $A$ è $\dfrac{1}{2}$, mentre sapendo che il numero è pari la probabilità di $A$ è $\dfrac{2}{3}$.

::venn{zone="ab" nomi="A,B" universo=1 ambiente="Ω" elementi="a:5;ab:4,6;b:2;u:1,3" titolo="Sapendo che si è verificato $B$, gli esiti possibili sono i $3$ di $B$ e quelli favorevoli ad $A$ sono i $2$ dell'intersezione, quindi $P(A \mid B) = \dfrac{2}{3}$"}

:::

:::osservazione{#condizionata-equiprobabili titolo="Probabilità condizionata con esiti equiprobabili"}
Quando gli esiti sono equiprobabili, la formula della probabilità condizionata si legge sui conteggi. Dividendo numeratore e denominatore per il numero degli esiti di $\Omega$ si ottiene
$$
P(A \mid B) = \frac{\text{numero degli esiti di } A \cap B}{\text{numero degli esiti di } B} .
$$
In una classe di $30$ studenti ci sono $16$ ragazze e $14$ ragazzi; portano gli occhiali $6$ ragazze e $4$ ragazzi. Si sceglie a caso uno studente. Sapendo che è una ragazza, la probabilità che porti gli occhiali è $\dfrac{6}{16} = \dfrac{3}{8}$, perché le ragazze sono $16$ e di esse $6$ portano gli occhiali.

| | occhiali | senza occhiali | totale |
| --- | --- | --- | --- |
| ragazze | $6$ | $10$ | $16$ |
| ragazzi | $4$ | $10$ | $14$ |
| totale | $10$ | $20$ | $30$ |
:::

:::attenzione
In generale $P(A \mid B)$ è diversa da $P(B \mid A)$. Nella classe precedente, sia $A$ l'evento "lo studente porta gli occhiali" e $B$ l'evento "lo studente è una ragazza". Allora
$$
P(A \mid B) = \frac{6}{16} = \frac{3}{8} ,
\qquad
P(B \mid A) = \frac{6}{10} = \frac{3}{5} ,
$$
perché nel primo caso si divide per il numero delle ragazze e nel secondo per il numero degli studenti con gli occhiali.
:::

:::teorema{#teorema-prodotto titolo="Teorema del prodotto"}
Siano $A$ e $B$ due eventi con $P(A) > 0$. Allora
$$
P(A \cap B) = P(A) \cdot P(B \mid A) .
$$
La formula segue moltiplicando per $P(A)$ entrambi i membri della definizione $P(B \mid A) = \dfrac{P(A \cap B)}{P(A)}$. Serve per calcolare la probabilità che due eventi si verifichino uno dopo l'altro, quando la probabilità del secondo dipende dal primo. Per tre eventi, con $P(A \cap B) > 0$, la formula diventa
$$
P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B) .
$$
Un'urna contiene $3$ palline rosse e $2$ blu, e se ne estraggono due senza rimettere nell'urna la prima. Siano $R_1$ e $R_2$ gli eventi "la prima è rossa" e "la seconda è rossa". Si ha $P(R_1) = \dfrac{3}{5}$. Se la prima è rossa, restano $2$ rosse su $4$ palline, quindi $P(R_2 \mid R_1) = \dfrac{2}{4}$. Per il teorema del prodotto
$$
P(R_1 \cap R_2) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} .
$$
:::

:::esempio{titolo="Il diagramma ad albero"}
Le estrazioni successive si rappresentano con un **diagramma ad albero**. Ogni ramo porta la probabilità di un esito, calcolata sapendo ciò che è successo nei rami precedenti. Per il teorema del prodotto la probabilità di un percorso completo è il prodotto delle probabilità dei suoi rami. Nell'urna con $3$ rosse e $2$ blu, con due estrazioni senza reimmissione, si ottiene
$$
P(RR) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} ,
\quad
P(RB) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} ,
\quad
P(BR) = \frac{2}{5} \cdot \frac{3}{4} = \frac{3}{10} ,
\quad
P(BB) = \frac{2}{5} \cdot \frac{1}{4} = \frac{1}{10} .
$$
I quattro percorsi sono incompatibili e la somma delle loro probabilità è $1$. La probabilità di estrarre una pallina rossa e una blu, in un ordine qualsiasi, è quindi $P(RB) + P(BR) = \dfrac{3}{5}$.

::grafico{assi=0 uguale=1 linee="0,0 3,1.6;0,0 3,-1.6;3,1.6 6,2.4;3,1.6 6,0.8;3,-1.6 6,-0.8;3,-1.6 6,-2.4" punti="0,0,pieno;3,1.6,pieno;3,-1.6,pieno;6,2.4,pieno;6,0.8,pieno;6,-0.8,pieno;6,-2.4,pieno" etichette="3.1,1.95,R;3.1,-1.25,B;6.2,2.4,RR;6.2,0.8,RB;6.2,-0.8,BR;6.2,-2.4,BB;1.2,1.15,⅗;1.2,-1.25,⅖;4.4,2.35,½;4.4,0.85,½;4.4,-0.85,¾;4.4,-2.35,¼" xmin=-0.5 xmax=7.5 ymin=-3 ymax=3 titolo="Due estrazioni senza reimmissione da un'urna con $3$ palline rosse e $2$ blu. Sui rami del secondo livello ci sono le probabilità condizionate, calcolate con le $4$ palline rimaste"}

:::

## Eventi indipendenti

:::definizione{#eventi-indipendenti titolo="Eventi indipendenti"}
Può accadere che l'informazione "si è verificato $B$" non cambi la probabilità di $A$. Due eventi $A$ e $B$ si dicono **indipendenti** se
$$
P(A \cap B) = P(A) \cdot P(B) .
$$
Se $P(B) > 0$, la condizione equivale a $P(A \mid B) = P(A)$, perché basta dividere per $P(B)$ entrambi i membri. Due eventi che non sono indipendenti si dicono **dipendenti**.

Nel lancio di un dado siano $A = \{ 2, 4, 6 \}$ e $B = \{ 1, 2 \}$. Si ha $A \cap B = \{ 2 \}$, e
$$
P(A \cap B) = \frac{1}{6} ,
\qquad
P(A) \cdot P(B) = \frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6} ,
$$
quindi $A$ e $B$ sono **indipendenti**. Con $C = \{ 1, 2, 3 \}$ si ha invece $A \cap C = \{ 2 \}$ e $P(A) \cdot P(C) = \dfrac{1}{4}$, diverso da $\dfrac{1}{6}$, perciò $A$ e $C$ sono dipendenti.
:::

:::osservazione{#prove-indipendenti titolo="Prove indipendenti"}
L'indipendenza si verifica con la definizione, oppure si assume quando gli eventi riguardano esperimenti che non si influenzano, come lanci diversi di una moneta o di un dado, estrazioni con reimmissione, tiri di persone diverse. In questi casi la probabilità che si verifichino tutti gli eventi è il prodotto delle probabilità. Tre eventi $A$, $B$ e $C$ si dicono indipendenti se ciascuna coppia è formata da eventi indipendenti e se inoltre
$$
P(A \cap B \cap C) = P(A) \cdot P(B) \cdot P(C) .
$$
Per esempio, la probabilità di ottenere tre teste in tre lanci di una moneta regolare è $\dfrac{1}{2} \cdot \dfrac{1}{2} \cdot \dfrac{1}{2} = \dfrac{1}{8}$.
:::

::::teorema{#indipendenza-contrari titolo="Indipendenza degli eventi contrari"}
Se $A$ e $B$ sono indipendenti, allora sono indipendenti anche $A$ e $\overline{B}$, $\overline{A}$ e $B$, $\overline{A}$ e $\overline{B}$.

Il teorema serve nei problemi del tipo "almeno uno". Tre arcieri colpiscono il bersaglio, indipendentemente l'uno dall'altro, con probabilità $\dfrac{1}{2}$, $\dfrac{2}{3}$ e $\dfrac{3}{4}$. Per il teorema anche i tre errori sono indipendenti, con probabilità $\dfrac{1}{2}$, $\dfrac{1}{3}$ e $\dfrac{1}{4}$. Il bersaglio non viene colpito se sbagliano tutti e tre, quindi
$$
P(\text{almeno un centro}) = 1 - \frac{1}{2} \cdot \frac{1}{3} \cdot \frac{1}{4} = 1 - \frac{1}{24} = \frac{23}{24} .
$$

:::dimostrazione
Si dimostra il primo caso; gli altri seguono applicandolo più volte. L'evento $A$ è l'unione dei due eventi incompatibili $A \cap B$ e $A \cap \overline{B}$, quindi
$$
P\left( A \cap \overline{B} \right) = P(A) - P(A \cap B) .
$$
Poiché $A$ e $B$ sono indipendenti, si ha $P(A \cap B) = P(A) \cdot P(B)$, perciò
$$
P\left( A \cap \overline{B} \right) = P(A) - P(A) \cdot P(B) = P(A) \cdot \big( 1 - P(B) \big) = P(A) \cdot P\left( \overline{B} \right) ,
$$
dove nell'ultimo passaggio si è usato il teorema dell'evento contrario. Quindi $A$ e $\overline{B}$ sono indipendenti.
:::
::::

:::attenzione
Eventi incompatibili ed eventi indipendenti sono concetti diversi. Se $A$ e $B$ sono incompatibili e hanno probabilità positiva, allora $P(A \cap B) = 0$, mentre $P(A) \cdot P(B) > 0$, quindi $A$ e $B$ sono *dipendenti*. Nel lancio di un dado gli eventi "esce $1$" ed "esce $2$" sono incompatibili. Se si sa che è uscito $1$, la probabilità che sia uscito $2$ è $0$, mentre senza questa informazione è $\dfrac{1}{6}$.
:::

:::esempio{titolo="Almeno un sei in quattro lanci"}
Si lancia un dado quattro volte e si calcola la probabilità di ottenere almeno un $6$. L'evento contrario è "nessun $6$ nei quattro lanci". In ogni lancio la probabilità di non ottenere $6$ è $\dfrac{5}{6}$, e i lanci sono indipendenti, quindi
$$
P(\text{nessun } 6) = \left( \frac{5}{6} \right)^4 = \frac{625}{1296} ,
\qquad
P(\text{almeno un } 6) = 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0{,}518 .
$$
La probabilità è di poco superiore a $\dfrac{1}{2}$.
:::

## Estrazioni e calcolo combinatorio

:::richiamo{titolo="Combinazioni semplici"}
Il numero dei sottoinsiemi di $k$ elementi di un insieme di $n$ elementi, con $0 \leq k \leq n$, è
$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
:::

:::teorema{#estrazioni-senza-reimmissione titolo="Estrazioni senza reimmissione"}
Un'urna contiene $N$ palline, di cui $r$ rosse e $N - r$ blu, e se ne estraggono $n$ senza reimmissione, cioè senza rimettere nell'urna le palline estratte. La probabilità di estrarre esattamente $k$ palline rosse è
$$
P = \frac{\dbinom{r}{k} \dbinom{N - r}{n - k}}{\dbinom{N}{n}} .
$$
Estrarre $n$ palline una dopo l'altra senza reimmissione equivale a estrarle tutte insieme, quindi i casi possibili sono i gruppi di $n$ palline, cioè $\dbinom{N}{n}$, e sono equiprobabili. I casi favorevoli si ottengono scegliendo $k$ palline tra le $r$ rosse e $n - k$ tra le $N - r$ blu, e per il principio fondamentale del conteggio sono il prodotto dei due coefficienti binomiali.

Un'urna contiene $6$ palline rosse e $4$ blu, e se ne estraggono $3$. La probabilità di ottenere $2$ rosse e $1$ blu è
$$
P = \frac{\dbinom{6}{2} \dbinom{4}{1}}{\dbinom{10}{3}} = \frac{15 \cdot 4}{120} = \frac{1}{2} .
$$
:::

:::esempio{titolo="Lo stesso risultato con il teorema del prodotto"}
Nell'urna con $6$ rosse e $4$ blu, la sequenza ordinata rossa, rossa, blu ha probabilità
$$
\frac{6}{10} \cdot \frac{5}{9} \cdot \frac{4}{8} = \frac{120}{720} = \frac{1}{6} .
$$
Le sequenze con $2$ rosse e $1$ blu sono $RRB$, $RBR$ e $BRR$, cioè tante quante le posizioni possibili della pallina blu. Ciascuna ha probabilità $\dfrac{1}{6}$, perché nei tre prodotti cambia solo l'ordine dei numeratori. Le tre sequenze sono incompatibili, quindi la probabilità cercata è $3 \cdot \dfrac{1}{6} = \dfrac{1}{2}$, come con le combinazioni.
:::

:::teorema{#estrazioni-con-reimmissione titolo="Estrazioni con reimmissione"}
Se dopo ogni estrazione la pallina viene rimessa nell'urna, la composizione dell'urna resta la stessa e le estrazioni sono indipendenti. Con $r$ palline rosse su $N$, ogni estrazione dà una rossa con probabilità $\dfrac{r}{N}$, e la probabilità di una sequenza fissata è il prodotto delle probabilità dei suoi esiti.

Nell'urna con $6$ rosse e $4$ blu si eseguono $3$ estrazioni con reimmissione. La sequenza $RRB$ ha probabilità $\dfrac{6}{10} \cdot \dfrac{6}{10} \cdot \dfrac{4}{10} = \dfrac{18}{125}$, e lo stesso vale per $RBR$ e $BRR$. Quindi la probabilità di ottenere esattamente $2$ rosse è
$$
3 \cdot \frac{18}{125} = \frac{54}{125} .
$$
Il risultato è diverso da quello senza reimmissione, perché nelle estrazioni senza reimmissione la composizione dell'urna cambia a ogni estrazione.
:::

:::esempio{titolo="Carte e dadi"}
Da un mazzo di $40$ carte napoletane se ne estraggono $2$ insieme. Gli assi sono $4$ e le altre carte sono $36$. La probabilità di non estrarre assi è $\dbinom{36}{2} \Big/ \dbinom{40}{2}$, quindi per il teorema dell'evento contrario
$$
P(\text{almeno un asso}) = 1 - \frac{\dbinom{36}{2}}{\dbinom{40}{2}} = 1 - \frac{630}{780} = \frac{150}{780} = \frac{5}{26} .
$$
Si lanciano tre dadi e si calcola la probabilità che i tre numeri siano tutti diversi. I casi possibili sono le terne ordinate, cioè $6^3 = 216$, e quelli favorevoli sono le disposizioni semplici di $6$ numeri a $3$ a $3$, cioè $D_{6,3} = 6 \cdot 5 \cdot 4 = 120$. Quindi
$$
P(\text{numeri diversi}) = \frac{120}{216} = \frac{5}{9} .
$$
:::

## Probabilità totale e teorema di Bayes

:::definizione{#partizione titolo="Partizione dello spazio campionario"}
Gli eventi $B_1, B_2, \ldots, B_n$ formano una **partizione** di $\Omega$ se hanno probabilità positiva, sono incompatibili a due a due e la loro unione è $\Omega$. In altre parole, in ogni esecuzione dell'esperimento si verifica uno e uno solo di essi. Nel lancio di un dado gli eventi $\{ 1, 2 \}$, $\{ 3, 4 \}$ e $\{ 5, 6 \}$ formano una partizione. Un evento $B$ con $0 < P(B) < 1$ e il suo contrario $\overline{B}$ formano sempre una partizione.

Le partizioni descrivono i casi in cui si divide un problema, come l'urna da cui si estrae, la macchina che ha prodotto un pezzo, il gruppo a cui appartiene una persona.
:::

::::teorema{#probabilita-totale titolo="Formula della probabilità totale"}
Sia $B_1, B_2, \ldots, B_n$ una partizione di $\Omega$ e sia $A$ un evento. Allora
$$
P(A) = P(B_1) \cdot P(A \mid B_1) + P(B_2) \cdot P(A \mid B_2) + \ldots + P(B_n) \cdot P(A \mid B_n) .
$$
La formula calcola la probabilità di $A$ caso per caso. Per ogni caso $B_i$ si moltiplica la probabilità del caso per la probabilità di $A$ in quel caso, e poi si sommano i risultati. Nel diagramma ad albero corrisponde alla somma dei percorsi che terminano con $A$.

Un'azienda ha due macchine. La macchina $M_1$ produce il $60\%$ dei pezzi, e di essi il $5\%$ è difettoso; la macchina $M_2$ produce il restante $40\%$, e di essi il $10\%$ è difettoso. Si sceglie a caso un pezzo e si indica con $D$ l'evento "il pezzo è difettoso". Gli eventi $M_1$ e $M_2$ formano una partizione, quindi
$$
P(D) = 0{,}6 \cdot 0{,}05 + 0{,}4 \cdot 0{,}1 = 0{,}03 + 0{,}04 = 0{,}07 .
$$

::grafico{assi=0 uguale=1 linee="0,0 3,1.6;0,0 3,-1.6;3,1.6 6,2.4;3,1.6 6,0.8;3,-1.6 6,-0.8;3,-1.6 6,-2.4" punti="0,0,pieno;3,1.6,pieno;3,-1.6,pieno;6,2.4,pieno;6,0.8,pieno;6,-0.8,pieno;6,-2.4,pieno" etichette="3.1,1.95,M₁;3.1,-1.25,M₂;6.2,2.4,D;6.2,0.8,D̅;6.2,-0.8,D;6.2,-2.4,D̅;0.9,1.2,0,6;0.9,-1.3,0,4;4.1,2.4,0,05;4.1,0.8,0,95;4.1,-0.8,0,1;4.1,-2.4,0,9" xmin=-0.5 xmax=7.5 ymin=-3 ymax=3 titolo="Albero del problema delle due macchine. I percorsi che terminano con $D$ hanno probabilità $0{,}6 \cdot 0{,}05 = 0{,}03$ e $0{,}4 \cdot 0{,}1 = 0{,}04$, e la loro somma è $P(D) = 0{,}07$"}

:::dimostrazione
L'idea è dividere $A$ secondo i casi della partizione. Poiché gli eventi $B_i$ sono incompatibili e la loro unione è $\Omega$, si ha
$$
A = (A \cap B_1) \cup (A \cap B_2) \cup \ldots \cup (A \cap B_n) ,
$$
e gli eventi $A \cap B_i$ sono incompatibili a due a due. Per la somma di eventi incompatibili
$$
P(A) = P(A \cap B_1) + P(A \cap B_2) + \ldots + P(A \cap B_n) .
$$
Ogni $B_i$ ha probabilità positiva, quindi per il teorema del prodotto $P(A \cap B_i) = P(B_i) \cdot P(A \mid B_i)$. Sostituendo si ottiene la tesi.
:::
::::

::::teorema{#teorema-bayes titolo="Teorema di Bayes"}
Sia $B_1, B_2, \ldots, B_n$ una partizione di $\Omega$ e sia $A$ un evento con $P(A) > 0$. Allora, per ogni $i$,
$$
P(B_i \mid A) = \frac{P(B_i) \cdot P(A \mid B_i)}{P(B_1) \cdot P(A \mid B_1) + \ldots + P(B_n) \cdot P(A \mid B_n)} .
$$
Il teorema risponde alla domanda inversa rispetto alla probabilità totale. Si sa che si è verificato $A$ e si calcola la probabilità di ciascuno dei casi che potevano produrlo. Le probabilità $P(B_i)$ si chiamano probabilità **a priori**, perché sono note prima dell'esperimento; le probabilità $P(B_i \mid A)$ si chiamano probabilità **a posteriori**.

Nel problema delle due macchine si trova un pezzo difettoso. La probabilità che sia stato prodotto dalla macchina $M_1$ è
$$
P(M_1 \mid D) = \frac{0{,}6 \cdot 0{,}05}{0{,}07} = \frac{0{,}03}{0{,}07} = \frac{3}{7} .
$$
Prima del controllo la probabilità di $M_1$ è $0{,}6$, mentre sapendo che il pezzo è difettoso è $\dfrac{3}{7} \approx 0{,}43$. Il valore è minore perché la percentuale di pezzi difettosi della macchina $M_1$ è più bassa di quella di $M_2$.

:::dimostrazione
Per la definizione di probabilità condizionata si ha $P(B_i \mid A) = \dfrac{P(B_i \cap A)}{P(A)}$. Per il teorema del prodotto il numeratore è $P(B_i) \cdot P(A \mid B_i)$. Per la formula della probabilità totale il denominatore è la somma $P(B_1) \cdot P(A \mid B_1) + \ldots + P(B_n) \cdot P(A \mid B_n)$. Sostituendo le due espressioni si ottiene la tesi.
:::
::::

:::esempio{titolo="Tre urne"}
Si lancia un dado. Se esce $1$ si estrae una pallina dall'urna $U_1$, che contiene $2$ rosse e $2$ blu; se esce $2$ o $3$ si estrae dall'urna $U_2$, con $1$ rossa e $3$ blu; se esce $4$, $5$ o $6$ si estrae dall'urna $U_3$, con $3$ rosse e $1$ blu. Le probabilità a priori delle urne sono $\dfrac{1}{6}$, $\dfrac{2}{6}$ e $\dfrac{3}{6}$. Per la formula della probabilità totale
$$
P(R) = \frac{1}{6} \cdot \frac{2}{4} + \frac{2}{6} \cdot \frac{1}{4} + \frac{3}{6} \cdot \frac{3}{4} = \frac{2 + 2 + 9}{24} = \frac{13}{24} .
$$
Sapendo che la pallina estratta è rossa, per il teorema di Bayes la probabilità che provenga dall'urna $U_3$ è
$$
P(U_3 \mid R) = \frac{\frac{9}{24}}{\frac{13}{24}} = \frac{9}{13} .
$$
:::

## Prove ripetute e schema di Bernoulli

::::teorema{#schema-bernoulli titolo="Schema delle prove ripetute"}
Un esperimento con due soli esiti, detti **successo** e **insuccesso**, viene ripetuto $n$ volte in modo che le prove siano indipendenti e che in ogni prova il successo abbia la stessa probabilità $p$. La probabilità di ottenere esattamente $k$ successi, con $0 \leq k \leq n$, è
$$
P(k \text{ successi su } n) = \binom{n}{k} \, p^k \, (1 - p)^{n - k} .
$$
Questo modello si chiama **schema di Bernoulli**. Si lancia un dado $4$ volte e si considera successo l'uscita del $6$, quindi $p = \dfrac{1}{6}$. La probabilità di ottenere esattamente due $6$ è
$$
\binom{4}{2} \left( \frac{1}{6} \right)^2 \left( \frac{5}{6} \right)^2 = 6 \cdot \frac{1}{36} \cdot \frac{25}{36} = \frac{150}{1296} = \frac{25}{216} .
$$

:::dimostrazione
L'idea è contare le sequenze di esiti con $k$ successi e calcolare la probabilità di ciascuna. Una sequenza fissata con $k$ successi e $n - k$ insuccessi, per esempio con i successi nelle prime $k$ prove, ha probabilità $p^k (1 - p)^{n - k}$, perché le prove sono indipendenti e la probabilità dell'insuccesso è $1 - p$ per il teorema dell'evento contrario. Ogni altra sequenza con $k$ successi ha la stessa probabilità, perché contiene gli stessi fattori in un ordine diverso.

Una sequenza con $k$ successi è determinata dalle posizioni dei successi, cioè da un sottoinsieme di $k$ prove tra le $n$. Le sequenze sono quindi $\dbinom{n}{k}$, e sono incompatibili a due a due. Per la somma di eventi incompatibili la probabilità cercata è $\dbinom{n}{k} \, p^k (1 - p)^{n - k}$.
:::
::::

:::esempio{titolo="Due teste in tre lanci"}
Si lancia tre volte una moneta regolare. Le sequenze con esattamente due teste sono $TTC$, $TCT$ e $CTT$, cioè $\dbinom{3}{2} = 3$, e ciascuna ha probabilità $\left( \dfrac{1}{2} \right)^3 = \dfrac{1}{8}$. Quindi la probabilità di due teste è $\dfrac{3}{8}$. La probabilità di *almeno* due teste comprende anche il caso di tre teste, ed è $\dfrac{3}{8} + \dfrac{1}{8} = \dfrac{1}{2}$.

::grafico{assi=0 uguale=1 linee="0,0 2,2;0,0 2,-2;2,2 4,3;2,2 4,1;2,-2 4,-1;2,-2 4,-3;4,3 6,3.5;4,3 6,2.5;4,1 6,1.5;4,1 6,0.5;4,-1 6,-0.5;4,-1 6,-1.5;4,-3 6,-2.5;4,-3 6,-3.5" punti="0,0,pieno" etichette="6.2,3.5,TTT;6.2,2.5,TTC;6.2,1.5,TCT;6.2,0.5,TCC;6.2,-0.5,CTT;6.2,-1.5,CTC;6.2,-2.5,CCT;6.2,-3.5,CCC;1.7,2.4,T;1.7,-2.5,C" xmin=-0.5 xmax=8 ymin=-4 ymax=4 titolo="Le $8$ sequenze di tre lanci di una moneta. Ogni ramo ha probabilità $\dfrac{1}{2}$; le sequenze con due teste sono $TTC$, $TCT$ e $CTT$"}

:::

:::osservazione{#bernoulli-almeno-uno titolo="Probabilità di almeno un successo"}
Nello schema di Bernoulli la probabilità di nessun successo è $\dbinom{n}{0} p^0 (1 - p)^n = (1 - p)^n$. Per il teorema dell'evento contrario la probabilità di almeno un successo è
$$
P(\text{almeno un successo}) = 1 - (1 - p)^n .
$$
Un tiratore colpisce il bersaglio con probabilità $\dfrac{1}{3}$ in ogni tiro e tira $3$ volte. La probabilità di almeno un centro è $1 - \left( \dfrac{2}{3} \right)^3 = 1 - \dfrac{8}{27} = \dfrac{19}{27}$. Lo studio del numero dei successi come variabile aleatoria, con la distribuzione binomiale, il valore medio e la varianza, si trova nell'argomento del 5° anno su probabilità e distribuzioni.
:::
