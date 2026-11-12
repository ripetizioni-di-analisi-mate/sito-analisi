---
titolo: "Probabilità e calcolo combinatorio"
sommario: "Dagli eventi e dagli assiomi della probabilità ai conteggi con vincoli e alle estrazioni da una popolazione finita."
---

## Esiti, eventi e operazioni

:::definizione{#eventi titolo="Spazio campionario ed eventi"}
Un esperimento aleatorio ammette più esiti possibili. Lo **spazio campionario** $\Omega$ è l'insieme degli esiti elementari scelti per rappresentare l'esperimento. Il singolo esito si indica con $\omega$. Nel caso finito, ogni sottoinsieme $A\subseteq\Omega$ è un **evento**. L'evento si verifica se l'esito osservato appartiene ad $A$.

Nella registrazione di due lanci, l'esito $(T,C)$ descrive una testa al primo lancio e una croce al secondo. L'evento «esattamente una testa» raccoglie entrambi gli esiti $(T,C)$ e $(C,T)$. I due esiti appartengono allo stesso evento, anche se descrivono sequenze diverse.
:::

:::definizione{#operazioni-eventi titolo="Unione, intersezione e differenza"}
Siano $A$ e $B$ eventi definiti sullo stesso spazio campionario.

- L'intersezione $A\cap B$ raccoglie gli esiti comuni, quindi corrisponde a «si verificano entrambi».
- L'unione $A\cup B$ raccoglie gli esiti che appartengono ad almeno uno dei due eventi.
- La differenza $A\setminus B$ raccoglie gli esiti di $A$ esterni a $B$.
- Il complementare $A^c=\Omega\setminus A$ raccoglie tutti gli esiti per i quali $A$ non si verifica.

Gli eventi $A$ e $B$ sono **incompatibili** quando $A\cap B=\varnothing$, dove $\varnothing$ è l'insieme vuoto. Il simbolo $A\subseteq B$ indica invece che ogni esito di $A$ appartiene a $B$, quindi il verificarsi di $A$ implica quello di $B$.
:::

:::esempio{titolo="Eventi su un dado"}
Nel lancio di un dado a sei facce, sia $A=\{2,4,6\}$ l'evento «esce un numero pari» e sia $B=\{4,5,6\}$ l'evento «esce almeno $4$». L'esito $6$ soddisfa entrambe le condizioni. L'esito $5$ soddisfa solo la seconda, quindi appartiene a $B\setminus A$. L'esito $2$ appartiene solo ad $A$, mentre $1$ e $3$ sono esterni a entrambi.

$$
A\cap B=\{4,6\},\qquad A\cup B=\{2,4,5,6\}.
$$

Il diagramma evidenzia gli esiti che soddisfano entrambe le condizioni. L'unione comprende anche le due regioni laterali.

::venn{zone="ab" nomi="A,B" elementi="a:2;ab:4,6;b:5;u:1,3" universo=1 ambiente="Ω" titolo="Pari e almeno quattro"}

:::

:::osservazione
La definizione di esito dipende dall'informazione richiesta. Se si osserva soltanto il numero di teste in tre lanci, gli esiti della registrazione sono $0,1,2,3$. Lo spazio delle sequenze ordinate conserva anche le posizioni delle teste. Il numero $1$ corrisponde allora a tre sequenze, mentre il numero $0$ corrisponde a una sola. La scelta dello spazio determina quali informazioni si possono ricostruire da un esito e quali probabilità vanno attribuite agli esiti elementari.
:::

## Assiomi e assegnazione delle probabilità

:::definizione{#assiomi titolo="Assiomi della probabilità"}
Sullo spazio campionario finito $\Omega$, una **probabilità** $P$ assegna a ogni evento un numero reale. Valgono le seguenti proprietà.

- $P(A)\ge 0$ per ogni evento $A$.
- $P(\Omega)=1$.
- Se $A_1,\ldots,A_m$ sono eventi a due a due incompatibili, allora
  $$
  P\left(\bigcup_{i=1}^{m} A_i\right)=\sum_{i=1}^{m}P(A_i).
  $$

La terza proprietà è l'additività sugli eventi incompatibili. Su uno spazio generale si specifica la famiglia degli eventi su cui è definita $P$ e si richiede l'additività anche per successioni numerabili di eventi a due a due incompatibili. Nei conteggi del capitolo lo spazio è sempre finito.
:::

::::teorema{#masse-elementari titolo="Probabilità degli esiti elementari"}
Sia $\Omega=\{\omega_1,\ldots,\omega_N\}$ con $N\ge 1$. Per ogni indice $i$, sia $p_i\ge 0$ un numero con $\sum_{i=1}^N p_i=1$. Allora la funzione
$$
P(A)=\sum_{\omega_i\in A}p_i
$$
definisce una probabilità su $\Omega$. Viceversa, ogni probabilità su questo spazio si ottiene ponendo $p_i=P(\{\omega_i\})$. Questa caratterizzazione permette di calcolare la probabilità di un evento quando si conoscono le probabilità dei singoli esiti.

:::dimostrazione
L'idea consiste nello scomporre ogni evento nei suoi esiti elementari. Per la funzione definita dalla somma, i termini sono non negativi e la somma su tutto lo spazio vale $1$. Quando gli eventi sono incompatibili, ciascun esito appartiene al più a uno di essi, quindi la somma sull'unione coincide con la somma dei contributi dei singoli eventi. Viceversa, se $P$ soddisfa gli assiomi, ogni evento è unione disgiunta dei suoi singoletti. Per additività $P(A)$ è la somma delle loro probabilità.
:::
::::

:::esempio{titolo="Tre esiti con probabilità diverse"}
Una ruota ha tre settori $R,S,T$ con probabilità rispettivamente $\dfrac{1}{2}$, $\dfrac{1}{3}$ e $\dfrac{1}{6}$. I pesi sommano a $1$. L'evento $A=\{R,T\}$ ha probabilità
$$
P(A)=\frac{1}{2}+\frac{1}{6}=\frac{2}{3}.
$$
L'evento contiene due esiti su tre, ma qui il risultato numerico coincide con quel rapporto solo per i pesi specifici di $R$ e $T$. Per esempio, l'evento $\{S,T\}$ contiene anch'esso due esiti e ha probabilità $\dfrac{1}{2}$.
:::

::::teorema{#complementare titolo="Complementare e monotonia"}
Per ogni evento $A$ vale $P(A^c)=1-P(A)$. Se $A\subseteq B$, allora $P(A)\le P(B)$. In particolare, $P(\varnothing)=0$ e $0\le P(A)\le 1$. Il complementare è utile quando l'assenza di una proprietà si conta con meno casi della sua presenza.

:::dimostrazione
L'evento $A$ e il suo complementare sono incompatibili e la loro unione è $\Omega$. Per additività $P(A)+P(A^c)=1$, da cui segue la formula. Per $A\subseteq B$, gli eventi $A$ e $B\setminus A$ sono incompatibili e la loro unione è $B$. Perciò $P(B)=P(A)+P(B\setminus A)\ge P(A)$. Infine $\varnothing=\Omega^c$ e ogni evento è incluso in $\Omega$.
:::
::::

:::esempio{titolo="Almeno un esito favorevole"}
Nei quattro lanci indipendenti di una moneta regolare, l'unico esito privo di teste è $(C,C,C,C)$. Le $2^4=16$ sequenze sono equiprobabili, quindi la probabilità di quell'esito è $\dfrac{1}{16}$. Per la formula del complementare, la probabilità di almeno una testa è $\dfrac{15}{16}$. La stessa strategia si applica all'evento «almeno un oggetto difettoso» in un campione. In quel caso la probabilità del complementare dipende da come è stato estratto il campione.
:::

:::definizione{#partizione titolo="Partizione dello spazio campionario"}
Una **partizione** di $\Omega$ è una famiglia di eventi non vuoti a due a due incompatibili la cui unione è $\Omega$. Ogni esito appartiene a uno e un solo evento della famiglia. Se si conoscono le probabilità delle parti, la probabilità di un evento che comprende alcune parti intere si ottiene sommando i loro pesi. Questa struttura sarà usata nel capitolo sulla probabilità condizionata per distinguere le possibili origini di uno stesso risultato.
:::

:::esempio{titolo="Classi di esito incompatibili"}
Un lotto può essere accettato, riesaminato oppure respinto. Se il procedimento assegna uno solo di questi tre esiti, le tre categorie formano una partizione. Con probabilità di riesame $0{,}12$ e di rifiuto $0{,}08$, la probabilità che il lotto non venga accettato al primo controllo è $0{,}12+0{,}08=0{,}20$. La somma è giustificata dal fatto che nessun esito è classificato contemporaneamente in entrambe le categorie.
:::

:::osservazione
Se si ripete una prova $n$ volte con esiti indipendenti e probabilità di successo costante $p$, l'assenza di successi ha probabilità $(1-p)^n$. Infatti ciascuna prova deve dare un insuccesso e, per indipendenza, le probabilità degli insuccessi si moltiplicano. Il complementare fornisce quindi
$$
P(\text{almeno un successo})=1-(1-p)^n.
$$
L'indipendenza riguarda le probabilità degli esiti delle prove. Il principio del prodotto dei conteggi riguarda invece il numero di modi in cui si costruisce un esito. Nei lanci di una moneta regolare entrambi i ragionamenti conducono allo stesso calcolo, perché tutte le sequenze ordinate sono equiprobabili.
:::

## Unioni di eventi sovrapposti

::::teorema{#inclusione-esclusione titolo="Formula di inclusione ed esclusione"}
Per due eventi $A,B$ sullo stesso spazio vale
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
La formula si usa anche quando si conosce la probabilità dell'unione e si vuole ricavare quella dell'intersezione.

:::dimostrazione
L'idea è isolare la parte comune. Gli eventi $A\setminus B$, $A\cap B$ e $B\setminus A$ sono a due a due incompatibili e la loro unione è $A\cup B$. La somma $P(A)+P(B)$ contiene una volta le probabilità delle due regioni esterne e due volte quella dell'intersezione. Sottraendo una volta $P(A\cap B)$ si ottiene quindi la probabilità dell'unione.
:::
::::

:::esempio{titolo="Due controlli sullo stesso componente"}
Da un lotto si seleziona un componente. La probabilità che superi il limite di massa è $0{,}08$, quella che superi il limite di diametro è $0{,}10$ e quella che superi entrambi è $0{,}03$. L'evento «supera almeno un limite» è l'unione dei due eventi, quindi ha probabilità
$$
0{,}08+0{,}10-0{,}03=0{,}15.
$$
La probabilità di superare un solo limite è $0{,}15-0{,}03=0{,}12$, perché l'unione comprende anche chi li supera entrambi. La probabilità di restare entro entrambi i limiti è $1-0{,}15=0{,}85$.
:::

:::osservazione
Per tre eventi $A,B,C$ la formula diventa
$$
\begin{aligned}
P(A\cup B\cup C)={}&P(A)+P(B)+P(C)\\[6pt]
&-P(A\cap B)-P(A\cap C)-P(B\cap C)\\[6pt]
&+P(A\cap B\cap C).
\end{aligned}
$$
Un esito comune a tutti e tre è contato tre volte nelle probabilità singole e tre volte nelle intersezioni a coppie. L'ultimo termine gli restituisce il contributo che gli spetta. Un esito comune a due soli eventi è contato due volte nel primo gruppo e una volta nel secondo, perciò contribuisce una volta.

La stessa scomposizione vale per le cardinalità. Tra $40$ iscritti, $18$ seguono un laboratorio, $13$ un seminario e $9$ un corso integrativo. Se le intersezioni a coppie hanno rispettivamente $5$, $4$ e $3$ iscritti e $2$ seguono tutte le attività, quelli che ne seguono almeno una sono $18+13+9-5-4-3+2=30$.
:::

## Equiprobabilità e scelta degli esiti

:::definizione{#equiprobabilita titolo="Modello finito equiprobabile"}
Sia $\Omega$ uno spazio finito con $N\ge 1$ esiti, ciascuno con la stessa probabilità. Poiché le probabilità degli esiti elementari sommano a $1$, ogni esito ha probabilità $\dfrac{1}{N}$. La probabilità di un evento $A$ è dunque
$$
P(A)=\frac{|A|}{|\Omega|},
$$
dove $|A|$ è il numero di esiti di $A$. Il numeratore e il denominatore si riferiscono allo stesso spazio campionario e usano la stessa convenzione per l'ordine e per le eventuali ripetizioni.
:::

:::esempio{titolo="Somme di due dadi"}
Si lanciano due dadi regolari e indipendenti. Un esito è la coppia ordinata $(i,j)$ dei valori, con $i$ sul primo dado e $j$ sul secondo. Le $36$ coppie sono equiprobabili. La somma $7$ si realizza con le sei coppie $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, quindi ha probabilità $\dfrac{6}{36}=\dfrac{1}{6}$. Per la somma $11$ le coppie possibili sono $(5,6)$ e $(6,5)$, quindi la probabilità è $\dfrac{1}{18}$.
:::

:::attenzione{titolo="Esiti raggruppati con pesi diversi"}
Le undici somme possibili di due dadi regolari non sono equiprobabili. La somma $2$ ha una sola coppia favorevole, mentre la somma $3$ ne ha due. Se si registrano direttamente le somme, occorre quindi attribuire a ciascuna la probabilità totale delle coppie che la producono. Lo stesso problema si presenta se si raggruppano le coppie senza ordine. La coppia di valori diversi $\{2,5\}$ corrisponde a due coppie ordinate, mentre il doppio $2$ ne ha una sola.
:::

:::osservazione
Negli esperimenti con oggetti dello stesso colore, l'equiprobabilità si stabilisce di solito sui singoli oggetti. Da un'urna con tre sfere rosse e una blu si estrae una sfera uniformemente. Esistono due colori possibili, ma le sfere rosse corrispondono a tre dei quattro esiti elementari. Perciò il colore rosso ha probabilità $\dfrac{3}{4}$. Dare un nome a ciascuna sfera consente di contare gli esiti anche quando il dato osservato è solo il colore.
:::

## Scelte per stadi e permutazioni

::::teorema{#principio-prodotto titolo="Principio del prodotto"}
Un esito si costruisce in $k$ stadi successivi. Per ogni scelta già effettuata, al passo $i$ ci sono esattamente $a_i$ continuazioni ammesse. Il numero degli esiti completi è $a_1a_2\cdots a_k$. Le continuazioni possono cambiare da un ramo all'altro, a condizione che il loro numero nello stesso stadio sia costante.

:::dimostrazione
Dopo il primo stadio ci sono $a_1$ esiti parziali. Ciascuno ammette $a_2$ continuazioni, quindi dopo due stadi gli esiti parziali sono $a_1a_2$. Ogni esito di lunghezza due ammette $a_3$ continuazioni. Ripetendo l'argomento fino allo stadio $k$ si ottiene il prodotto indicato.
:::
::::

:::esempio{titolo="Un codice con cifre distinte"}
Un codice ha tre cifre distinte e la prima deve essere diversa da zero. Per il primo posto ci sono $9$ scelte. Al secondo posto si può usare anche lo zero, ma si esclude la cifra già scelta, perciò ci sono ancora $9$ possibilità. Al terzo posto restano $8$ cifre. Il totale è $9\cdot9\cdot8=648$. Il numero di continuazioni resta costante anche se cambiano le cifre a disposizione.
:::

:::definizione{#permutazioni titolo="Permutazioni di oggetti distinti"}
Una **permutazione** di $n$ oggetti distinti è un ordinamento che usa tutti gli oggetti una volta. La prima posizione ammette $n$ scelte, la seconda $n-1$ e così via fino all'ultima, perciò il numero di permutazioni è
$$
n!=n(n-1)\cdots 2\cdot 1.
$$
Il simbolo $n!$ si legge «$n$ fattoriale». Si pone $0!=1$ perché esiste un solo ordinamento dell'insieme vuoto, quello che non occupa alcuna posizione.
:::

:::esempio{titolo="Una coppia di oggetti consecutivi"}
Cinque libri distinti vanno ordinati su uno scaffale. Due volumi della stessa collana devono stare vicini. Trattando i due volumi come un unico blocco, si ordinano quattro unità in $4!$ modi. Il blocco ammette due ordini interni, quindi gli ordinamenti richiesti sono $4!\cdot 2=48$. Ogni ordinamento ammesso determina un solo ordine delle quattro unità e un solo ordine interno della coppia.
:::

::::teorema{#permutazioni-ripetute titolo="Permutazioni con oggetti indistinguibili"}
Si ordinano $n$ oggetti divisi in $r$ gruppi. Nel gruppo $i$ vi sono $n_i$ oggetti indistinguibili e $n_1+\cdots+n_r=n$. Il numero di ordinamenti distinguibili è
$$
\frac{n!}{n_1!\cdots n_r!}.
$$
Per esempio, le lettere di MAMMA danno $\dfrac{5!}{3!\,2!}=10$ parole distinte.

:::dimostrazione
Si assegna provvisoriamente un'etichetta diversa a ciascun oggetto. Si ottengono $n!$ ordinamenti. Fissato un ordinamento senza etichette, le posizioni occupate dal gruppo $i$ sono determinate, ma le sue $n_i$ etichette possono essere disposte in $n_i!$ modi. Le scelte delle etichette per gruppi diversi si combinano, quindi ogni ordinamento senza etichette ha esattamente $n_1!\cdots n_r!$ rappresentanti etichettati. La divisione elimina questo fattore di molteplicità.
:::
::::

## Disposizioni e combinazioni

:::definizione{#disposizioni titolo="Disposizioni di lunghezza fissata"}
Una **disposizione** di lunghezza $k$ è una sequenza di $k$ elementi scelti da un insieme di $n\ge 1$ elementi. Se si ammette la ripetizione, ogni posto dispone di $n$ opzioni e il numero delle disposizioni è $n^k$. Se gli elementi devono essere distinti, occorre $0\le k\le n$ e il numero è
$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$
Con $k=0$ entrambe le convenzioni danno una sola sequenza vuota. Per esempio, assegnare tre ruoli distinti a candidati diversi fra sette persone dà $7\cdot6\cdot5=210$ disposizioni.
:::

::::teorema{#combinazioni titolo="Combinazioni senza ripetizione"}
Per $0\le k\le n$, il numero di sottoinsiemi di $k$ elementi di un insieme di $n$ elementi è
$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
$$
Il simbolo $\binom{n}{k}$ è il **coefficiente binomiale**. Conta le selezioni di oggetti distinti nelle quali conta soltanto quali elementi sono scelti. Una commissione di tre membri senza incarichi, formata fra otto candidati, si può scegliere in $\binom{8}{3}=56$ modi.

:::dimostrazione
Si contano prima le sequenze di $k$ elementi distinti. Per ogni sottoinsieme di $k$ elementi esistono $k!$ sequenze che ne usano tutti gli elementi, una per ogni ordine. I gruppi di sequenze associati a sottoinsiemi diversi sono disgiunti e hanno la stessa numerosità. Dividendo $D_{n,k}$ per $k!$ si ottiene la formula.
:::
::::

:::osservazione
Scegliere $k$ elementi determina anche quali $n-k$ si lasciano fuori, quindi $\binom{n}{k}=\binom{n}{n-k}$. Inoltre si può contare separatamente a seconda che venga scelto un elemento fissato. Nel primo caso restano $k-1$ scelte tra gli altri $n-1$ elementi. Nel secondo caso si scelgono tutti i $k$ elementi tra gli altri $n-1$. Per $1\le k<n$ si ha pertanto
$$
\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}.
$$
Con $n=6$ e $k=2$ si ottengono $5$ coppie che contengono l'elemento fissato e $10$ coppie che lo escludono.
:::

:::esempio{titolo="Posizioni di un simbolo in una sequenza"}
Una stringa di sette simboli contiene esattamente tre A e quattro B. Basta scegliere i tre posti occupati dalle A, perché tutti i posti rimanenti contengono B. Le posizioni delle A sono un sottoinsieme dei sette posti, quindi ci sono $\binom{7}{3}=35$ stringhe. Le stringhe sono ordinate, ma il sottoinsieme che ne specifica i posti viene contato senza ordine. Questo è lo stesso conteggio che si ottiene dividendo le $7!$ permutazioni etichettate per $3!\,4!$.
:::

## Conteggi con restrizioni

:::osservazione
Quando il numero delle continuazioni cambia da un ramo all'altro, il totale si ricava contando separatamente casi incompatibili. I casi devono coprire ogni configurazione richiesta. Per esempio, per contare le commissioni con almeno due tecnici si possono distinguere quelle con esattamente due tecnici da quelle con tre o più tecnici. Se è più breve contare le commissioni con meno di due tecnici, si può sottrarre quel numero dal totale delle commissioni senza vincoli.
:::

:::esempio{titolo="Cifra finale pari e prima cifra non nulla"}
Si formano numeri di tre cifre distinte usando $0,1,2,3,4$. Per ottenere un numero pari, l'ultima cifra è $0$, $2$ oppure $4$. Se l'ultima è $0$, la prima ha $4$ scelte e la seconda ne ha $3$. Se l'ultima è $2$ o $4$, la prima può essere solo una delle altre tre cifre non nulle e la seconda ha $3$ scelte. I due casi sono disgiunti, quindi il totale è
$$
4\cdot3+2\cdot3\cdot3=30.
$$
La distinzione tra zero e cifra pari non nulla è necessaria perché la scelta finale cambia quante cifre possono occupare il primo posto.
:::

:::esempio{titolo="Una commissione con due profili"}
Tra cinque tecnici e quattro amministrativi si scelgono quattro persone con almeno un rappresentante di ciascun profilo. Le selezioni possibili senza vincoli sono $\binom{9}{4}=126$. Tra queste, $\binom{5}{4}=5$ usano soltanto tecnici e $\binom{4}{4}=1$ usa soltanto amministrativi. I due casi da escludere sono incompatibili, quindi il numero richiesto è $126-5-1=120$. Si può ottenere lo stesso totale contando le composizioni con uno, due o tre tecnici, purché si scelgano ogni volta anche i membri dell'altro profilo.
:::

## Estrazioni senza reinserimento

::::teorema{#estrazioni titolo="Campioni uniformi senza reinserimento"}
In una popolazione di $N$ oggetti distinti, $R$ possiedono una certa caratteristica e $N-R$ ne sono privi. Si estraggono $n$ oggetti senza reinserimento, con $0\le n\le N$, scegliendo uniformemente tra i rimanenti a ogni passo. Sia $K$ il numero di oggetti estratti con la caratteristica. Per ogni intero $k$ compreso tra $\max(0,n-N+R)$ e $\min(n,R)$ vale
$$
P(K=k)=\frac{\binom{R}{k}\binom{N-R}{n-k}}{\binom{N}{n}}.
$$
Il limite inferiore assicura che si possano scegliere $n-k$ oggetti privi della caratteristica. Il limite superiore garantisce che il numero $k$ sia compatibile sia con la composizione della popolazione sia con la dimensione del campione. Fuori da questo intervallo l'evento è impossibile. La formula anticipa la distribuzione ipergeometrica, studiata tra le distribuzioni discrete.

:::dimostrazione
Le sequenze di $n$ estrazioni uniformi senza reinserimento sono equiprobabili. Ogni sottoinsieme di $n$ oggetti distinti compare in $n!$ sequenze, quindi anche i sottoinsiemi sono equiprobabili. I campioni possibili sono $\binom{N}{n}$. Un campione favorevole è determinato dalla scelta di $k$ oggetti tra i $R$ con la caratteristica e di $n-k$ oggetti tra i $N-R$ che ne sono privi. Le due scelte si combinano, quindi il numeratore è il prodotto dei corrispondenti coefficienti binomiali.
:::
::::

:::esempio{titolo="Tre pezzi da un lotto"}
Un lotto contiene otto pezzi identificabili, di cui tre difettosi. Si estraggono tre pezzi uniformemente senza reinserimento. Per avere un solo difettoso occorre scegliere un pezzo fra i tre difettosi e due fra i cinque integri, quindi
$$
P(K=1)=\frac{\binom{3}{1}\binom{5}{2}}{\binom{8}{3}}
=\frac{30}{56}=\frac{15}{28}.
$$
Per avere almeno un difettoso basta escludere i campioni formati solo da pezzi integri. La probabilità è $1-\dfrac{\binom{5}{3}}{\binom{8}{3}}=\dfrac{23}{28}$. I due eventi richiesti hanno probabilità diverse perché il secondo comprende anche i campioni con due o tre pezzi difettosi.
:::

:::attenzione{titolo="Reinserimento e probabilità del complementare"}
In un'urna con due sfere rosse e due blu si estraggono due sfere senza reinserimento. I campioni di due sfere sono $\binom{4}{2}=6$ e uno solo contiene entrambe le blu. La probabilità di nessuna rossa è quindi $\dfrac{1}{6}$. Con due estrazioni uniformi indipendenti e reinserimento, la probabilità di ottenere due blu è $\left(\dfrac{1}{2}\right)^2=\dfrac{1}{4}$. Senza reinserimento, la prima estrazione cambia la composizione dell'urna. Il capitolo sulla probabilità condizionata formalizza il calcolo per sequenze la cui probabilità cambia in funzione degli esiti precedenti.
:::
