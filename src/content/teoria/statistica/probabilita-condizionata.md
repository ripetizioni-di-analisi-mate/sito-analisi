---
titolo: "Probabilità condizionata, indipendenza e Bayes"
sommario: "Si calcolano probabilità quando è nota un'informazione, si riconosce l'indipendenza e si aggiornano le probabilità con la formula di Bayes."
---

Questo capitolo calcola probabilità quando si conosce già un'informazione. Un esempio è il controllo di qualità di un reparto in cui il $2\%$ dei pezzi è difettoso. Un controllo automatico segnala il $90\%$ dei pezzi difettosi e, per errore, anche il $5\%$ dei pezzi regolari. Se un pezzo viene segnalato, la probabilità che sia davvero difettoso è circa $0{,}27$, quindi poco più di un pezzo segnalato su quattro è difettoso. Il numero $0{,}90$ risponde a un'altra domanda, cioè quale quota dei pezzi difettosi viene segnalata. Il capitolo mostra come tenere distinte le due domande e come passare dall'una all'altra.

Gli strumenti sono cinque. La probabilità condizionata è la probabilità calcolata dentro un gruppo, per esempio fra i soli pezzi segnalati. La regola del prodotto dà la probabilità di un esperimento in più fasi, come due estrazioni successive da un'urna. La formula della probabilità totale ricava la quota di scarti di tutta la produzione dalle quote di scarto delle singole linee. La formula di Bayes inverte il condizionamento, cioè passa dalla quota di difettosi segnalati, $0{,}90$, alla quota di difettosi fra i segnalati, $0{,}27$. Due eventi sono indipendenti quando sapere che uno si è verificato lascia invariata la probabilità dell'altro, come nei lanci di una moneta.

Il capitolo usa gli eventi, le probabilità e le partizioni del capitolo 3, e riprende con le probabilità le frequenze condizionate delle tabelle a doppia entrata del capitolo 1. Insieme ai capitoli dal 5 al 7 completa la parte di probabilità del corso, che serve a misurare l'errore che si commette quando dal campione si passa alla popolazione. L'indipendenza torna nel capitolo 5, dove il numero di successi in prove indipendenti dà la legge binomiale, nel capitolo 7 per le variabili aleatorie indipendenti e nel capitolo 8, dove un campione è formato da osservazioni indipendenti; su questo si basa l'inferenza dei capitoli dall'8 al 12.

## Il gruppo di riferimento

:::definizione{#condizionata titolo="Probabilità condizionata"}
Si lancia un dado equo. La faccia $6$ esce con probabilità $\dfrac16$. Se si sa che è uscito un numero pari, i risultati ancora possibili sono $2$, $4$ e $6$, tutti con la stessa probabilità, e il $6$ è uno dei tre. Sapendo che il risultato è pari, la probabilità del $6$ diventa quindi $\dfrac13$. L'informazione ha ristretto i risultati possibili a un gruppo più piccolo, e la nuova probabilità si calcola dentro quel gruppo.

Con le lettere, $\Omega$ (si legge omega) è lo spazio campionario del capitolo 3, cioè l'insieme di tutti gli esiti possibili, e un evento è un sottoinsieme di $\Omega$. Siano $A$ e $B$ eventi con $P(B)>0$. Quando si sa che si è verificato $B$, gli esiti ancora possibili sono quelli di $B$. Tra questi, gli esiti per cui si verifica anche $A$ formano l'intersezione $A\cap B$. La **probabilità condizionata di $A$ dato $B$** si indica con $P(A\mid B)$, che si legge «probabilità di $A$ dato $B$», ed è

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

Nel dado $A=\{6\}$ e $B=\{2,4,6\}$, quindi $A\cap B=\{6\}$ e $P(A\mid B)=\dfrac{\frac16}{\frac12}=\dfrac13$, come nel conto fatto contando i casi.

Dividere per $P(B)$ fa sì che gli esiti di $B$ abbiano probabilità totale uno. Nel dado, infatti, ciascuna delle facce $2$, $4$ e $6$ ha probabilità condizionata $\dfrac13$, e la somma è $1$. Poiché $A\cap B\subseteq B$, per la monotonia della probabilità (capitolo 3) vale $P(A\cap B)\le P(B)$, quindi il rapporto è compreso fra zero e uno.

La probabilità condizionata risponde alle domande che contengono «sapendo che» oppure «fra i…». Nel controllo dell'introduzione, la probabilità che un pezzo segnalato sia difettoso è la probabilità condizionata di «difettoso» dato «segnalato». È la stessa idea della frequenza condizionata del capitolo 1, con le probabilità al posto delle frequenze.
:::

:::esempio{titolo="Due domande sulla stessa tabella"}
Su $200$ iscritti, $50$ sono pendolari. Tra i pendolari, $20$ viaggiano in treno. Tra i $150$ iscritti residenti, $10$ viaggiano in treno. Siano $B$ l'evento «l'iscritto è pendolare» e $A$ l'evento «l'iscritto viaggia in treno». Si sceglie un iscritto a caso, quindi ogni iscritto ha probabilità $\dfrac1{200}$ e la probabilità di un evento è il numero di iscritti corrispondenti diviso per $200$.

| Gruppo | In treno | Con altro mezzo | Totale |
| --- | ---: | ---: | ---: |
| Pendolari | 20 | 30 | 50 |
| Residenti | 10 | 140 | 150 |
| Totale | 30 | 170 | 200 |

La probabilità di usare il treno dato che l'iscritto è pendolare si calcola fra i $50$ pendolari, quindi si divide per il totale della prima riga. La probabilità di essere pendolare dato che l'iscritto usa il treno si calcola fra i $30$ iscritti che usano il treno, quindi si divide per il totale della prima colonna. Il numeratore è lo stesso nei due calcoli, perché conta gli stessi $20$ iscritti, pendolari e in treno.

$$
P(A\mid B)=\frac{20}{50}=\frac{2}{5},
\qquad
P(B\mid A)=\frac{20}{30}=\frac{2}{3}.
$$

::venn{nomi="A,B" ambiente="Ω" zone="ab" elementi="a:10;ab:20;b:30;u:140" titolo="A indica gli iscritti che usano il treno e B indica i pendolari. Il gruppo B comprende 20 iscritti nell'intersezione e 30 fuori da A."}
:::

:::osservazione
Se gli esiti di $\Omega$ sono finiti ed equiprobabili, la definizione si riduce al rapporto fra due conteggi, $\dfrac{|A\cap B|}{|B|}$. Il simbolo $|\cdot|$ indica il numero di elementi dell'insieme. Infatti $P(A\cap B)=\dfrac{|A\cap B|}{|\Omega|}$ e $P(B)=\dfrac{|B|}{|\Omega|}$, quindi nel rapporto il fattore comune $\dfrac{1}{|\Omega|}$ si semplifica.

Se gli esiti hanno pesi diversi, al posto dei conteggi si sommano i pesi degli esiti. Per esempio, un dado ha probabilità $\dfrac{1}{4}$ sulla faccia $6$ e probabilità $\dfrac{3}{20}$ su ciascuna delle altre cinque facce. Sapendo che il risultato è pari, l'evento noto comprende le facce $2$, $4$ e $6$, con peso totale $\dfrac3{20}+\dfrac3{20}+\dfrac14=\dfrac{11}{20}$. La probabilità condizionata della faccia $6$ è quindi $\dfrac{\frac14}{\frac{11}{20}}=\dfrac{5}{11}$.
:::

:::attenzione
Per applicare la definizione occorre $P(B)>0$. Se si lancia un dado ordinario e $B$ è l'evento «esce $7$», si ottengono $P(B)=0$ e $P(A\cap B)=0$ per ogni $A$. Il rapporto diventa $\dfrac00$, che non è un numero, quindi la probabilità condizionata a $B$ non è definita. In una tabella di conteggi la stessa difficoltà compare quando il gruppo su cui si vuole condizionare è vuoto, cioè quando la sua riga o la sua colonna ha totale zero.
:::

## Complementari e vincoli sulle probabilità

:::teorema{#complementi titolo="Complementare entro la condizione"}
Fra gli iscritti del turno serale, il $70\%$ supera una prova. Allora il $30\%$ degli iscritti *di quello stesso turno* non la supera, perché ogni iscritto del turno o supera la prova o non la supera. Con le probabilità condizionate vale la stessa regola.

Siano $A$ e $B$ eventi con $P(B)>0$, e sia $A^c$ il complementare di $A$, cioè l'evento «$A$ non si verifica» (capitolo 3). Allora

$$
P(A^c\mid B)=1-P(A\mid B).
$$

Infatti gli eventi $A\cap B$ e $A^c\cap B$ sono disgiunti, cioè non hanno esiti in comune, e la loro unione è $B$. Per l'additività della probabilità (capitolo 3) vale $P(A\cap B)+P(A^c\cap B)=P(B)$. Dividendo per $P(B)$ si ottiene $P(A\mid B)+P(A^c\mid B)=1$.
:::

:::esempio{titolo="Si cambia il gruppo di riferimento"}
Su $100$ ricevute, $40$ riguardano ordini online. Sono state rettificate $12$ ricevute online e $6$ ricevute degli altri ordini. Sia $A$ l'evento «la ricevuta è stata rettificata» e $B$ l'evento «l'ordine è online», quindi $B^c$ è l'evento «l'ordine non è online». Il passaggio da $B$ a $B^c$ porta il denominatore da $40$ a $100-40=60$. Si ha

$$
P(A\mid B)=\frac{12}{40}=\frac{3}{10},
\qquad
P(A\mid B^c)=\frac{6}{60}=\frac{1}{10}.
$$

Il complementare della prima probabilità è $P(A^c\mid B)=1-\dfrac3{10}=\dfrac{7}{10}$ e resta riferito alle ricevute online. Infatti fra le $40$ ricevute online le non rettificate sono $40-12=28$, e $\dfrac{28}{40}=\dfrac7{10}$. La probabilità $P(A\mid B^c)=\dfrac{1}{10}$ riguarda invece le ricevute degli altri ordini, quindi non si ricava da $P(A\mid B)$ ed è diversa da $1-P(A\mid B)=\dfrac{7}{10}$.
:::

:::osservazione
Siano $P(A)=0{,}7$ e $P(B)=0{,}6$. La probabilità dell'intersezione non può superare $0{,}6$, perché $A\cap B$ è contenuto in $B$. Non può nemmeno scendere sotto $0{,}3$. Se fosse $P(A\cap B)=0{,}2$, per la formula di inclusione ed esclusione del capitolo 3 l'unione avrebbe probabilità $0{,}7+0{,}6-0{,}2=1{,}1$, mentre nessuna probabilità supera uno. Perciò $P(A\cap B)$ può valere soltanto un numero fra $0{,}3$ e $0{,}6$.

Per due eventi qualsiasi, $A$ e $B$ dividono $\Omega$ in quattro regioni: $A\cap B$, la parte di $A$ fuori da $B$, la parte di $B$ fuori da $A$ e la parte esterna a entrambi. Posto $x=P(A\cap B)$, le quattro regioni hanno probabilità

$$
x,\qquad P(A)-x,\qquad P(B)-x,\qquad 1-P(A)-P(B)+x.
$$

L'ultimo valore si ottiene sottraendo da uno le altre tre probabilità. Ogni probabilità è non negativa. Dalla prima e dall'ultima segue $x\ge0$ e $x\ge P(A)+P(B)-1$; dalla seconda e dalla terza segue $x\le P(A)$ e $x\le P(B)$. Perciò

$$
\max\{0,P(A)+P(B)-1\}\le x\le\min\{P(A),P(B)\}.
$$

Questi limiti servono a stabilire se un valore assegnato a $P(A\cap B)$ è possibile.
:::

:::esempio{titolo="Tabella ricostruita da tre probabilità"}
Siano $A$ l'evento «una richiesta è urgente» e $B$ l'evento «la richiesta arriva online». Ogni richiesta che non arriva online arriva allo sportello, quindi «sportello» è l'evento $B^c$. Si hanno $P(A)=0{,}4$, $P(B)=0{,}6$ e $P(A\cap B)=0{,}3$.

Le richieste urgenti pesano $0{,}4$ e quelle urgenti e online pesano $0{,}3$, quindi le richieste urgenti arrivate allo sportello pesano $0{,}4-0{,}3=0{,}1$. Questo valore è una quota di tutte le richieste. Allo stesso modo le richieste online e non urgenti pesano $0{,}6-0{,}3=0{,}3$. Resta un peso $1-0{,}3-0{,}1-0{,}3=0{,}3$ per le richieste allo sportello e non urgenti. La tabella completa è quindi

| Canale | Urgente | Non urgente | Totale |
| --- | ---: | ---: | ---: |
| Online | $0{,}3$ | $0{,}3$ | $0{,}6$ |
| Sportello | $0{,}1$ | $0{,}3$ | $0{,}4$ |
| Totale | $0{,}4$ | $0{,}6$ | $1$ |

Ogni cella della tabella contiene la probabilità che due eventi si verifichino insieme, calcolata su tutte le richieste. Una probabilità di questo tipo si chiama probabilità congiunta, come la frequenza congiunta del capitolo 1. Le probabilità condizionate si ottengono dividendo una cella per il totale della sua riga o della sua colonna. Sapendo che una richiesta è allo sportello, la probabilità che sia urgente è $\dfrac{0{,}1}{0{,}4}=\dfrac14$, diversa dalla probabilità congiunta $0{,}1$. Sapendo che una richiesta è online, la probabilità che sia urgente è $\dfrac{0{,}3}{0{,}6}=\dfrac12$.

::grafico{assi=0 xmin=-0.6 xmax=10.6 ymin=-1.4 ymax=10.6 poligoni="0,0 6,0 6,5 0,5;6,0 10,0 10,2.5 6,2.5" linee="0,0 10,0 10,10 0,10 0,0;6,0 6,10;0,5 6,5;6,2.5 10,2.5" etichette="1.3,2.3,urgenti 0,3;1,7.3,non urgenti 0,3;6.6,1,urgenti 0,1;6.4,6,non urgenti 0,3;2.2,-0.9,Online;7,-0.9,Sportello" titolo="Le basi delle due colonne sono $P(B)=0{,}6$ e $P(B^c)=0{,}4$. Le parti colorate hanno altezze $P(A\mid B)=\dfrac{1}{2}$ e $P(A\mid B^c)=\dfrac{1}{4}$, quindi l’area di ogni rettangolo è la probabilità congiunta scritta al suo interno."}
:::

## Regola del prodotto e alberi

::::teorema{#prodotto titolo="Regola del prodotto"}
Nella tabella delle richieste, il $60\%$ arriva online e, fra le richieste online, la metà è urgente. Le richieste online e urgenti sono quindi la metà del $60\%$, cioè $0{,}6\cdot\dfrac12=0{,}3$, il valore della tabella.

Se $P(A)>0$, la probabilità che si verifichino entrambi gli eventi $A$ e $B$ è

$$
P(A\cap B)=P(A)P(B\mid A).
$$

Per tre eventi, se $P(A)>0$ e $P(A\cap B)>0$, vale

$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$

Ogni fattore dopo il primo è condizionato a tutti gli eventi che lo precedono, quindi il terzo fattore ha come condizione $A\cap B$. Per esempio, da un'urna con tre palline rosse e due blu si estraggono tre palline senza rimetterle nell'urna. La prima è rossa con probabilità $\dfrac35$. Dopo una rossa restano due rosse su quattro palline, e dopo due rosse resta una rossa su tre palline. Le tre palline sono tutte rosse con probabilità $\dfrac35\cdot\dfrac24\cdot\dfrac13=\dfrac1{10}$.

La regola serve per gli esperimenti in più fasi, come estrazioni successive o controlli in sequenza, in cui ogni fase dipende da quelle precedenti.

:::dimostrazione
Per due eventi, la definizione di probabilità condizionata dà $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$. Poiché $P(A)>0$, si moltiplicano i due membri per $P(A)$ e si ottiene la formula.

Per tre eventi si applica la formula appena ottenuta con $A\cap B$ al posto di $A$ e $C$ al posto di $B$. Poiché $P(A\cap B)>0$, si ha $P(A\cap B\cap C)=P(A\cap B)P(C\mid A\cap B)$. Infine si sostituisce $P(A\cap B)$ con $P(A)P(B\mid A)$.
:::
::::

:::esempio{titolo="Albero di due estrazioni"}
In un'urna ci sono tre palline rosse e due blu. Si estrae due volte senza reinserimento, cioè senza rimettere nell'urna la prima pallina. Si indicano con $R_i$ e $B_i$ gli eventi «rossa alla prova $i$» e «blu alla prova $i$».

Un esperimento in più fasi si disegna con un albero. Da ogni punto, detto nodo, escono i rami dei risultati possibili della fase successiva, e su ogni ramo si scrive la probabilità di quel risultato dato il percorso già fatto. Il nodo in cui termina un percorso completo si chiama foglia, e ogni foglia corrisponde a un solo percorso dal nodo iniziale. Al primo livello dell'albero i rami hanno probabilità $\dfrac{3}{5}$ e $\dfrac{2}{5}$. Al secondo livello la composizione dell'urna dipende dal ramo già seguito. Dopo una prima rossa rimangono due rosse e due blu, quindi i due rami uscenti hanno probabilità $\dfrac24=\dfrac12$ ciascuno. Dopo una prima blu rimangono tre rosse e una blu, quindi il ramo verso la rossa ha probabilità $\dfrac34$ e quello verso la blu $\dfrac14$.

::grafico{assi=0 xmin=-0.8 xmax=12 ymin=-0.6 ymax=6.5 linee="0,3 4,4.7;0,3 4,1.3;4,4.7 8,5.9;4,4.7 8,3.8;4,1.3 8,2.1;4,1.3 8,0.1" punti="0,3,pieno;4,4.7,pieno;4,1.3,pieno;8,5.9,pieno;8,3.8,pieno;8,2.1,pieno;8,0.1,pieno" etichette="1.45,4.08,⅗;1.45,1.62,⅖;5.55,5.68,½;5.55,3.65,½;5.55,2.33,¾;5.55,0.05,¼;8.2,5.9,rossa rossa;8.2,3.8,rossa blu;8.2,2.1,blu rossa;8.2,0.1,blu blu" titolo="Probabilità dei rami nelle due estrazioni senza reinserimento. Le quattro foglie identificano gli ordini possibili."}

La probabilità di ciascuna foglia si ottiene con la regola del prodotto, moltiplicando le probabilità dei rami del percorso. Le foglie «rossa, blu» e «blu, rossa» sono disgiunte, quindi per trovare la probabilità di due colori diversi si sommano i due percorsi.

$$
\begin{aligned}
P(R_1\cap B_2)&=\frac{3}{5}\cdot\frac{2}{4}=\frac{3}{10},\\[6pt]
P(B_1\cap R_2)&=\frac{2}{5}\cdot\frac{3}{4}=\frac{3}{10},\\[6pt]
P(\text{due colori diversi})&=\frac{3}{10}+\frac{3}{10}=\frac{3}{5}.
\end{aligned}
$$
:::

:::osservazione
Dal nodo «prima rossa» escono i rami «seconda rossa» e «seconda blu», con probabilità $\dfrac12$ e $\dfrac12$, e la somma è uno. Infatti, dopo una prima rossa, la seconda pallina è rossa oppure blu, e non può essere entrambe le cose. Lo stesso vale per ogni nodo raggiunto con probabilità positiva, perché i rami che ne escono corrispondono a risultati che si escludono a vicenda e coprono tutti i casi ancora possibili, cioè formano una partizione nel senso del capitolo 3.

Se un evento riguarda una fase intermedia, la sua probabilità è la somma delle foglie che passano per quella fase. Nell'urna, per esempio, la probabilità di una prima blu si ritrova sommando le due foglie che cominciano con una blu:

$$
\frac{2}{5}\cdot\frac{3}{4}+\frac{2}{5}\cdot\frac{1}{4}=\frac{3}{10}+\frac{1}{10}=\frac{2}{5}.
$$

Il risultato è la probabilità del ramo «prima blu», perché i due rami che ne escono sommano a uno.
:::

:::esempio{titolo="Probabilità marginale della seconda estrazione"}
Si riprende l'urna con tre palline rosse e due blu. Si chiede la probabilità che la seconda pallina sia rossa senza sapere il colore della prima. Questa probabilità senza condizioni si chiama probabilità marginale di $R_2$, come le frequenze marginali del capitolo 1. Per ottenere una seconda rossa ci sono i due percorsi «rossa, rossa» e «blu, rossa». Sono disgiunti, quindi si sommano:

$$
P(R_2)=\frac35\cdot\frac24+\frac25\cdot\frac34=\frac3{10}+\frac3{10}=\frac35.
$$

Il valore coincide con la quota iniziale di rosse. Infatti una pallina fissata viene estratta per seconda con probabilità $\dfrac45\cdot\dfrac14=\dfrac15$, perché non deve uscire alla prima estrazione, il che accade con probabilità $\dfrac45$, e poi deve essere scelta fra le quattro rimaste. Il conto vale per ogni pallina e le rosse sono tre, quindi $P(R_2)=3\cdot\dfrac15=\dfrac35$.

Dato il primo colore, invece, la probabilità di una seconda rossa vale $\dfrac24$ dopo una rossa e $\dfrac34$ dopo una blu. Si distinguono così due domande sulla seconda estrazione. Se il primo esito non è noto, si sommano entrambi i percorsi. Se il primo esito è noto, si legge la probabilità sul ramo che parte da quel nodo.
:::

## Indipendenza di due eventi

:::definizione{#indipendenza titolo="Eventi indipendenti"}
Nella tabella dei pendolari, la probabilità di usare il treno è $\dfrac{30}{200}=0{,}15$ fra tutti gli iscritti e $\dfrac{20}{50}=0{,}4$ fra i pendolari. Sapere che l'iscritto è pendolare cambia quindi la probabilità che usi il treno. Quando invece l'informazione $B$ lascia invariata la probabilità di $A$, cioè $P(A\mid B)=P(A)$, gli eventi si dicono indipendenti. Moltiplicando per $P(B)$ e usando la regola del prodotto, la condizione diventa $P(A\cap B)=P(A)P(B)$.

Gli eventi $A$ e $B$ sono **indipendenti** se

$$
P(A\cap B)=P(A)P(B).
$$

Due eventi che non sono indipendenti si dicono dipendenti. Nella tabella dei pendolari $P(A\cap B)=\dfrac{20}{200}=0{,}1$, mentre $P(A)P(B)=0{,}15\cdot0{,}25=0{,}0375$, quindi «treno» e «pendolare» sono dipendenti.

Rispetto a $P(A\mid B)=P(A)$, la forma con il prodotto ha due vantaggi. È simmetrica, quindi dice anche che $P(B\mid A)=P(B)$ quando $P(A)>0$. Si applica anche quando una delle probabilità è zero. Se $P(B)=0$, allora $P(A\cap B)=0$ perché $A\cap B\subseteq B$, e anche il prodotto $P(A)P(B)$ vale zero, quindi un evento di probabilità zero è indipendente da ogni evento.

Quando due eventi sono indipendenti, la probabilità che si verifichino entrambi è il prodotto delle due probabilità. È il caso delle prove ripetute, come i lanci di una moneta, da cui nel capitolo 5 si ricava la legge binomiale.
:::

:::esempio{titolo="Verifica sulle facce di un dado"}
Si lancia un dado equo. Siano $A=\{2,4,6\}$ l'evento «esce un numero pari» e $B=\{3,6\}$ l'evento «esce un multiplo di tre». L'unica faccia comune è $6$, quindi

$$
P(A\cap B)=\frac{1}{6}
=\frac{1}{2}\cdot\frac{1}{3}
=P(A)P(B).
$$

L'indipendenza vale anche se i due eventi riguardano lo stesso lancio. Sapere che è uscito un multiplo di tre lascia due casi equiprobabili, $3$ e $6$, uno dispari e uno pari. Perciò $P(A\mid B)=\dfrac12$, uguale a $P(A)$.
:::

::::teorema{#indipendenza-complementari titolo="Indipendenza e complementari"}
Nel dado dell'esempio, $A^c=\{1,3,5\}$ è l'evento «esce un numero dispari» e $A^c\cap B=\{3\}$ ha probabilità $\dfrac16$. Anche il prodotto vale $P(A^c)P(B)=\dfrac12\cdot\dfrac13=\dfrac16$, quindi anche $A^c$ e $B$ sono indipendenti.

Se $A$ e $B$ sono indipendenti, sono indipendenti anche le coppie $(A^c,B)$, $(A,B^c)$ e $(A^c,B^c)$.

Il teorema serve quando l'indipendenza è nota per i funzionamenti e la domanda riguarda i guasti. Per esempio, se due dispositivi funzionano in modo indipendente con probabilità $0{,}9$ e $0{,}8$, il primo funziona e il secondo è guasto con probabilità $0{,}9\cdot0{,}2=0{,}18$, e i due sono guasti insieme con probabilità $0{,}1\cdot0{,}2=0{,}02$.

::grafico{assi=0 xmin=-1.4 xmax=6.4 ymin=-1 ymax=6.4 poligoni="0,0 3,0 3,2 0,2" linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;0,2 6,2" etichette="0.6,0.9,A∩B  ⅙;3.5,0.9,Aᶜ∩B  ⅙;0.6,3.9,A∩Bᶜ  ⅓;3.5,3.9,Aᶜ∩Bᶜ  ⅓;1.3,-0.6,A  ½;4.3,-0.6,Aᶜ  ½;-1.2,0.9,B  ⅓;-1.2,3.9,Bᶜ  ⅔" titolo="Rettangolo di area $1$ per il lancio di un dado, con $A=\{2,4,6\}$ e $B=\{3,6\}$. Le basi sono $P(A)$ e $P(A^c)$, le altezze sono $P(B)$ e $P(B^c)$. Poiché $A$ e $B$ sono indipendenti, ogni rettangolo ha area uguale al prodotto della sua base per la sua altezza."}

:::dimostrazione
Gli eventi $A\cap B$ e $A^c\cap B$ sono disgiunti e la loro unione è $B$, quindi $P(A^c\cap B)=P(B)-P(A\cap B)$. Poiché $A$ e $B$ sono indipendenti, $P(A\cap B)=P(A)P(B)$, e perciò

$$
\begin{aligned}
P(A^c\cap B)&=P(B)-P(A)P(B)\\[6pt]
&=P(B)\bigl(1-P(A)\bigr)=P(B)P(A^c).
\end{aligned}
$$

Lo stesso conto con i ruoli di $A$ e $B$ scambiati mostra che $A$ e $B^c$ sono indipendenti. Si applica poi il primo conto alla coppia indipendente $(A,B^c)$, con $B^c$ al posto di $B$, e si ottiene che $A^c$ e $B^c$ sono indipendenti.
:::
::::

:::attenzione
Due eventi disgiunti con probabilità positiva sono dipendenti, perché se si sa che uno si è verificato l'altro diventa impossibile. In un solo lancio di dado gli eventi «esce $1$» ed «esce $2$» hanno intersezione vuota, quindi l'intersezione ha probabilità zero. Il prodotto delle due probabilità vale invece $\dfrac16\cdot\dfrac16=\dfrac{1}{36}$.
:::

## Partizioni e probabilità totale

::::teorema{#totale titolo="Formula della probabilità totale"}
Nell'urna con tre palline rosse e due blu, la probabilità di una seconda rossa si è ottenuta sommando due percorsi:

$$
P(R_2)=P(R_2\mid R_1)P(R_1)+P(R_2\mid B_1)P(B_1)=\frac24\cdot\frac35+\frac34\cdot\frac25=\frac35.
$$

Le due condizioni $R_1$ e $B_1$ si escludono a vicenda e coprono tutti i casi. La formula seguente estende questo conto a un numero qualsiasi di gruppi.

Come nel capitolo 3, una **partizione** dello spazio campionario è una famiglia di eventi a due a due disgiunti, cioè incompatibili, la cui unione è $\Omega$. Siano $B_1,\ldots,B_r$ gli eventi di una partizione, con $P(B_i)>0$ per ogni indice $i$. Per ogni evento $A$ vale

$$
P(A)=\sum_{i=1}^{r} P(A\mid B_i)P(B_i).
$$

Il numero $P(B_i)$ è la quota del gruppo $B_i$ e il numero $P(A\mid B_i)$ è la probabilità di $A$ dentro quel gruppo. La formula è quindi una media ponderata delle probabilità condizionate, con pesi uguali alle quote dei gruppi. È la stessa regola che nel capitolo 1 dà la frequenza relativa di gruppi riuniti.

:::dimostrazione
Ogni esito di $A$ si trova in un solo gruppo $B_i$. Perciò gli eventi $A\cap B_i$ sono a due a due disgiunti e la loro unione è $A$. Per l'additività, $P(A)$ è la somma delle probabilità $P(A\cap B_i)$. Poiché tutti i $P(B_i)$ sono positivi, la regola del prodotto dà $P(A\cap B_i)=P(B_i)P(A\mid B_i)$ per ogni $i$, e sostituendo si ottiene la formula.
:::
::::

:::esempio{titolo="Tre linee con produzioni diverse"}
Le linee $B_1$, $B_2$ e $B_3$ forniscono rispettivamente il $50\%$, il $30\%$ e il $20\%$ dei pezzi. Le quote di scarto sono rispettivamente il $2\%$, il $5\%$ e il $10\%$: per esempio, il $2\%$ dei pezzi della prima linea viene scartato. Si seleziona un pezzo a caso e si indica con $S$ l'evento «il pezzo è scartato», quindi $P(S\mid B_1)=0{,}02$, $P(S\mid B_2)=0{,}05$ e $P(S\mid B_3)=0{,}10$. Ogni pezzo è prodotto da una sola linea, quindi le tre linee formano una partizione e la probabilità totale vale

$$
\begin{aligned}
P(S)&=0{,}50\cdot0{,}02+0{,}30\cdot0{,}05+0{,}20\cdot0{,}10\\[6pt]
&=0{,}010+0{,}015+0{,}020=0{,}045.
\end{aligned}
$$

La figura riporta gli stessi conti su $1000$ pezzi. La prima linea produce $500$ pezzi e ne scarta il $2\%$, cioè $10$; allo stesso modo $300\cdot0{,}05=15$ e $200\cdot0{,}10=20$. Questi numeri si chiamano scarti attesi, perché sono i conteggi che corrispondono esattamente alle probabilità; in $1000$ pezzi reali gli scarti di ogni linea possono risultare qualcuno in più o in meno. Il capitolo 5 dà a questi numeri il nome generale di valore atteso.

::grafico{xmin=-0.28 xmax=3.7 ymin=0 ymax=24 nomi="i,n" poligoni="0.72,0 1.28,0 1.28,10 0.72,10;1.72,0 2.28,0 2.28,15 1.72,15;2.72,0 3.28,0 3.28,20 2.72,20" etichette="0.94,11,10;1.94,16,15;2.94,21,20" titolo="Pezzi scartati attesi su 1000 pezzi prodotti. L’asse i indica la linea e n il numero di scarti. Le altezze sommano a 45."}

La prima linea produce più pezzi della terza, quindi il suo tasso di scarto pesa di più nel totale. Il valore $0{,}045$ è compreso tra il tasso più basso, $0{,}02$, e quello più alto, $0{,}10$, perché una media ponderata con pesi positivi sta sempre fra il valore più piccolo e il più grande.
:::

:::osservazione
Una partizione può contenere un gruppo di probabilità zero, per esempio una quarta linea ferma per manutenzione. Per quel gruppo la probabilità condizionata non è definita, ma la sua intersezione con $A$ ha probabilità zero, perché è contenuta in un evento di probabilità zero. Il suo contributo alla probabilità totale è quindi zero. Basta quindi usare la formula con le sole categorie a peso positivo.
:::

:::osservazione
Con due gruppi $B$ e $B^c$, la formula serve anche a ricavare una probabilità condizionata mancante. Nelle tre linee, sia $B=B_1$ la prima linea. Si conoscono $P(S)=0{,}045$, $P(B)=0{,}5$ e $P(S\mid B)=0{,}02$, e si vuole il tasso di scarto dei pezzi delle altre due linee, cioè $P(S\mid B^c)$. La formula con due gruppi dà $0{,}045=0{,}02\cdot0{,}5+P(S\mid B^c)\cdot0{,}5$, quindi $P(S\mid B^c)=\dfrac{0{,}045-0{,}010}{0{,}5}=0{,}07$.

Con un evento $B$ qualsiasi, se $0<P(B)<1$ e sono noti $P(A)$, $P(B)$ e $P(A\mid B)$, la formula $P(A)=P(A\mid B)P(B)+P(A\mid B^c)\bigl(1-P(B)\bigr)$ si risolve rispetto a $P(A\mid B^c)$:

$$
P(A\mid B^c)=\frac{P(A)-P(A\mid B)P(B)}{1-P(B)}.
$$

Il numeratore è la probabilità di $A\cap B^c$, cioè una quota di tutta la popolazione (nelle linee, $0{,}015+0{,}020=0{,}035$). La divisione per $P(B^c)=1-P(B)$ esprime quella quota rispetto al solo gruppo esterno a $B$.
:::

## Inversione del condizionamento

::::teorema{#bayes titolo="Formula di Bayes"}
Nelle tre linee la formula della probabilità totale parte dai tassi di scarto $P(S\mid B_i)$ e dà $P(S)=0{,}045$. La domanda opposta parte da un pezzo scartato e chiede da quale linea viene, cioè chiede $P(B_i\mid S)$. Per la terza linea la risposta è il rapporto fra il suo contributo agli scarti, $0{,}020$, e la probabilità totale di scarto, $0{,}045$, cioè $\dfrac49$. La formula di Bayes scrive questo rapporto in generale.

Siano $B_1,\ldots,B_r$ gli eventi di una partizione con probabilità positive e sia $A$ un evento con $P(A)>0$. Dopo avere osservato $A$, la probabilità del gruppo $B_j$ è

$$
P(B_j\mid A)
=\frac{P(A\mid B_j)P(B_j)}
       {\displaystyle\sum_{i=1}^{r}P(A\mid B_i)P(B_i)}.
$$

La quantità $P(B_j)$ è la probabilità **a priori** del gruppo, cioè la sua probabilità prima dell'osservazione. La quantità $P(B_j\mid A)$ è la probabilità **a posteriori**, calcolata dopo avere appreso che si è verificato $A$. La formula dà la probabilità di una causa (la linea di provenienza, il difetto di un pezzo) dopo averne osservato un effetto (lo scarto, la segnalazione di un controllo).

:::dimostrazione
Per la definizione di probabilità condizionata, $P(B_j\mid A)=\dfrac{P(B_j\cap A)}{P(A)}$. Per la regola del prodotto applicata al gruppo $B_j$, il numeratore è $P(B_j\cap A)=P(B_j)P(A\mid B_j)$. Per la formula della probabilità totale, il denominatore è $P(A)=\sum_{i=1}^{r}P(A\mid B_i)P(B_i)$.
:::
::::

:::esempio{titolo="Provenienza di un pezzo scartato"}
Nelle tre linee il contributo della terza agli scarti è $P(S\cap B_3)=0{,}20\cdot0{,}10=0{,}020$, quindi tra i pezzi scartati la quota proveniente dalla terza linea è

$$
P(B_3\mid S)=\frac{0{,}020}{0{,}045}=\frac{4}{9}.
$$

Allo stesso modo $P(B_1\mid S)=\dfrac{0{,}010}{0{,}045}=\dfrac29$ e $P(B_2\mid S)=\dfrac{0{,}015}{0{,}045}=\dfrac13$. La terza linea fornisce il $20\%$ della produzione, ma il suo tasso di scarto, $0{,}10$, supera il tasso complessivo $0{,}045$. Per questo la sua quota tra gli scarti, $\dfrac{4}{9}\approx0{,}44$, supera la sua quota di produzione.

::grafico{xmin=-0.2 xmax=3.8 ymin=0 ymax=50 nomi="i,%" poligoni="0.6,0 0.95,0 0.95,50 0.6,50;1.6,0 1.95,0 1.95,30 1.6,30;2.6,0 2.95,0 2.95,20 2.6,20" linee="1.05,0 1.05,22.22 1.4,22.22 1.4,0;2.05,0 2.05,33.33 2.4,33.33 2.4,0;3.05,0 3.05,44.44 3.4,44.44 3.4,0" etichette="0.6,46,50;1.06,24,22;1.6,32,30;2.06,35,33;2.6,22,20;3.06,46,44" titolo="Per ogni linea $i$ la barra colorata è la quota di produzione $P(B_i)$ e la barra vuota è la quota tra gli scarti $P(B_i\mid S)$, entrambe in percentuale. Le quote a posteriori sono $\dfrac{2}{9}$, $\dfrac{1}{3}$ e $\dfrac{4}{9}$."}
:::

:::osservazione
Due linee hanno quote di produzione $0{,}9$ e $0{,}1$ e tassi di scarto $0{,}02$ e $0{,}10$. I prodotti $P(S\mid B_i)P(B_i)$ valgono $0{,}02\cdot0{,}9=0{,}018$ e $0{,}10\cdot0{,}1=0{,}010$. Un pezzo scartato proviene quindi più probabilmente dalla prima linea, anche se la seconda ha il tasso di scarto più alto.

Per ordinare le probabilità a posteriori di più gruppi dato lo stesso evento $A$ basta confrontare i prodotti $P(A\mid B_i)P(B_i)$. Infatti tutte le probabilità a posteriori hanno lo stesso denominatore positivo $P(A)$.
:::

:::esempio{titolo="Aggiornamento dopo due osservazioni"}
Si sceglie con uguale probabilità una tra due urne. La prima contiene tre palline rosse e una blu, la seconda una rossa e tre blu. Qui $B_1$ e $B_2$ indicano la scelta della prima e della seconda urna, e $R_1$ e $R_2$ gli eventi «rossa alla prima estrazione» e «rossa alla seconda estrazione». Dall'urna scelta si estraggono due palline con reinserimento, cioè rimettendo nell'urna la prima pallina prima della seconda estrazione.

Una volta scelta l'urna, il reinserimento ripristina la composizione, quindi la seconda estrazione ha la stessa probabilità di rossa qualunque sia stato il colore della prima. Perciò

$$
P(R_1\cap R_2\mid B_1)=\frac34\cdot\frac34=\frac9{16},
\qquad
P(R_1\cap R_2\mid B_2)=\frac14\cdot\frac14=\frac1{16}.
$$

La formula di Bayes dà

$$
P(B_1\mid R_1\cap R_2)
=\frac{\tfrac12\cdot\tfrac9{16}}
       {\tfrac12\cdot\tfrac9{16}+\tfrac12\cdot\tfrac1{16}}
=\frac9{10}.
$$

Dopo una sola rossa, i prodotti $P(R_1\mid B_i)P(B_i)$ valgono $\dfrac12\cdot\dfrac34=\dfrac38$ per la prima urna e $\dfrac12\cdot\dfrac14=\dfrac18$ per la seconda, quindi stanno nel rapporto $3$ a $1$ e la prima urna ha probabilità a posteriori $\dfrac{\frac38}{\frac38+\frac18}=\dfrac34$. La seconda rossa porta il rapporto a $9$ a $1$, e la probabilità della prima urna sale a $\dfrac9{10}$.

Senza sapere quale urna è stata scelta, invece, le due estrazioni sono dipendenti. Per la probabilità totale $P(R_2)=\dfrac12\cdot\dfrac34+\dfrac12\cdot\dfrac14=\dfrac12$ e $P(R_1\cap R_2)=\dfrac12\cdot\dfrac9{16}+\dfrac12\cdot\dfrac1{16}=\dfrac5{16}$. Perciò $P(R_2\mid R_1)=\dfrac{\frac5{16}}{\frac12}=\dfrac58$, che è diverso da $P(R_2)=\dfrac12$. Una prima rossa rende più probabile l'urna con più rosse, e quindi anche una seconda rossa.

Dopo $n$ rosse consecutive il rapporto tra i prodotti delle due urne è $\left(\dfrac34\right)^n$ a $\left(\dfrac14\right)^n$, cioè $3^n$ a $1$. La probabilità a posteriori della prima urna è perciò $\dfrac{3^n}{3^n+1}$.

::grafico{xmin=-0.3 xmax=4.6 ymin=0 ymax=100 nomi="n,%" punti="0,50;1,75;2,90;3,96.43;4,98.78" segmenti="1,0,1,75;2,0,2,90;3,0,3,96.43;4,0,4,98.78" etichette="0.15,45,50%;1.15,70,75%;2.15,85,90%" titolo="Probabilità a posteriori della prima urna, in percentuale, dopo $n$ rosse consecutive. I valori sono $\dfrac{3^n}{3^n+1}$ per $n=0,1,2,3,4$."}
:::

## Classificatori e probabilità di base

:::definizione{#classificatori titolo="Sensibilità, specificità e valori predittivi"}
Un controllo automatico esamina ogni pezzo e lo segnala come difettoso oppure no. Su $100$ pezzi difettosi ne segnala $90$ e ne lascia passare $10$; su $100$ pezzi regolari ne segnala $5$ per errore e ne lascia passare $95$. Un procedimento che assegna ogni unità a una di due classi, qui «segnalato» e «non segnalato», si chiama classificatore. La probabilità che un pezzo sia difettoso prima del controllo si chiama probabilità di base, o prevalenza.

Sia $D$ l'evento «il pezzo è difettoso» e sia $T$ l'evento «il controllo segnala il pezzo». Quando i gruppi di riferimento hanno probabilità positiva, si definiscono le seguenti quantità.

- La **sensibilità** è $P(T\mid D)$, cioè la probabilità di segnalazione fra i pezzi difettosi. Nell'esempio vale $\dfrac{90}{100}=0{,}90$.
- La **specificità** è $P(T^c\mid D^c)$, cioè la probabilità di non segnalazione fra i pezzi regolari. Nell'esempio vale $\dfrac{95}{100}=0{,}95$.
- I **valori predittivi** sono due. Il valore predittivo positivo è $P(D\mid T)$, la probabilità che un pezzo segnalato sia difettoso. Il valore predittivo negativo è $P(D^c\mid T^c)$, la probabilità che un pezzo non segnalato sia regolare.

Sensibilità e specificità hanno come gruppo di riferimento lo stato vero del pezzo, difettoso o regolare. I valori predittivi hanno come gruppo di riferimento l'esito del controllo, segnalato o non segnalato, e dipendono anche dalla prevalenza.

Un pezzo difettoso segnalato è un vero positivo e un pezzo regolare segnalato è un falso positivo; un pezzo difettoso non segnalato è un falso negativo. La probabilità di falso positivo è $P(T\mid D^c)=1-P(T^c\mid D^c)$, nell'esempio $1-0{,}95=0{,}05$. La probabilità di falso negativo è $P(T^c\mid D)=1-P(T\mid D)$, nell'esempio $1-0{,}90=0{,}10$. Entrambe si ottengono con il complementare entro la condizione.
:::

:::esempio{titolo="Un difetto raro e molte segnalazioni regolari"}
Si supponga che la prevalenza sia $P(D)=0{,}02$ e che il controllo abbia sensibilità $0{,}90$ e specificità $0{,}95$. Si applicano queste probabilità a $10\,000$ pezzi. I difettosi sono $10\,000\cdot0{,}02=200$, e il controllo ne segnala $0{,}90\cdot200=180$. I regolari sono $9800$, e il controllo ne segnala $0{,}05\cdot9800=490$. Come per gli scarti delle tre linee, sono conteggi attesi.

| Stato | Segnalati | Non segnalati | Totale |
| --- | ---: | ---: | ---: |
| Difettosi | 180 | 20 | 200 |
| Regolari | 490 | 9310 | 9800 |
| Totale | 670 | 9330 | 10000 |

Tra i segnalati la quota difettosa, cioè il valore predittivo positivo, è $\dfrac{180}{670}=\dfrac{18}{67}\approx0{,}269$. Tra i non segnalati la quota regolare, cioè il valore predittivo negativo, è $\dfrac{9310}{9330}=\dfrac{931}{933}\approx0{,}998$. Fra i $670$ segnalati, i falsi positivi sono $490$ e i veri positivi $180$. I falsi positivi sono di più perché i regolari sono $49$ volte i difettosi, e il $5\%$ di $9800$ pezzi supera il $90\%$ di $200$ pezzi.
:::

:::osservazione
Siano $p=P(D)$ la prevalenza, $s=P(T\mid D)$ la sensibilità e $f=P(T\mid D^c)$ la probabilità di falso positivo. Per la regola del prodotto i veri positivi hanno probabilità $P(D\cap T)=sp$ e i falsi positivi $P(D^c\cap T)=f(1-p)$; la loro somma è $P(T)$. Per $0<p<1$ e $P(T)>0$, la formula di Bayes dà allora il valore predittivo positivo, indicato con VPP nella figura:

$$
P(D\mid T)=\frac{sp}{sp+f(1-p)}.
$$

Con $s=0{,}9$ e $f=0{,}05$, alla prevalenza del $2\%$ il numeratore vale $0{,}018$ e il denominatore $0{,}018+0{,}049=0{,}067$, quindi il valore predittivo positivo è circa $0{,}27$, come nell'esempio. Se la prevalenza sale al $10\%$, il numeratore sale a $0{,}09$ e il denominatore vale $0{,}09+0{,}045=0{,}135$, quindi il valore predittivo positivo raggiunge $\dfrac{2}{3}$. Lo stesso controllo ha quindi valori predittivi diversi su produzioni con prevalenze diverse.

::grafico{f="0.9*x/(0.05+0.0085*x)" xmin=0 xmax=20 ymin=0 ymax=90 nomi="p,VPP" legenda=0 punti="2,26.865672;10,66.666667" segmenti="2,0,2,26.865672;10,0,10,66.666667" etichette="2.7,25,27%;10.8,63,67%" titolo="Valore predittivo positivo VPP in funzione della quota difettosa p, entrambi in percentuale. Il tasso di falso positivo è 5% e la sensibilità è 90%."}

:::

:::esempio{titolo="Quota difettosa necessaria per metà di segnalazioni corrette"}
Un controllo segnala $\dfrac45$ dei pezzi difettosi e $\dfrac15$ dei pezzi regolari. Si cerca la prevalenza $p$ per cui, tra i segnalati, i difettosi sono esattamente la metà. Questo accade quando veri e falsi positivi hanno la stessa probabilità. Per la regola del prodotto i veri positivi hanno probabilità $\dfrac45p$ e i falsi positivi $\dfrac15(1-p)$, quindi la condizione si scrive

$$
\frac45p=\frac15(1-p).
$$

Moltiplicando per $5$ si ottiene $4p=1-p$, quindi $5p=1$ e $p=\dfrac15$.

Per verificare il risultato, su $100$ pezzi se ne contano $20$ difettosi e $80$ regolari. Il controllo segnala $\dfrac45\cdot20=16$ difettosi e $\dfrac15\cdot80=16$ regolari, quindi la metà dei segnalati è difettosa. Se la prevalenza scende sotto $\dfrac15$, i veri positivi diminuiscono e i falsi positivi aumentano, quindi il valore predittivo positivo scende sotto $\dfrac12$.
:::

## Più eventi e indipendenza mutua

:::definizione{#mutua titolo="Indipendenza mutua"}
Si lancia tre volte una moneta equa. Ciascuna delle $8$ sequenze di teste e croci ha probabilità $\dfrac18$, quindi la probabilità di tre teste è $\dfrac18=\dfrac12\cdot\dfrac12\cdot\dfrac12$. Anche per ogni coppia di lanci la probabilità di due teste è $\dfrac14=\dfrac12\cdot\dfrac12$. L'indipendenza di più di due eventi richiede che il prodotto delle probabilità valga per ogni gruppo di eventi, come accade per i tre lanci.

Gli eventi $A_1,\ldots,A_n$ sono **mutuamente indipendenti** se, per ogni sottoinsieme $I$ di almeno due indici, la probabilità dell'intersezione degli eventi scelti è il prodotto delle loro probabilità:

$$
P\left(\bigcap_{i\in I} A_i\right)=\prod_{i\in I}P(A_i).
$$

Il simbolo $\bigcap_{i\in I}A_i$ indica l'intersezione degli eventi $A_i$ con indice in $I$, e il simbolo $\prod$ (si legge produttoria) indica il prodotto dei fattori, come $\sum$ indica la somma. Per tre eventi $A$, $B$ e $C$ si devono quindi verificare quattro identità, una per ogni coppia e una per la tripla:

- $P(A\cap B)=P(A)P(B)$;
- $P(A\cap C)=P(A)P(C)$;
- $P(B\cap C)=P(B)P(C)$;
- $P(A\cap B\cap C)=P(A)P(B)P(C)$.

Come per due eventi, se $A_1,\ldots,A_n$ sono mutuamente indipendenti, lo sono anche gli eventi che si ottengono sostituendo alcuni di essi con il loro complementare. Si dimostra ripetendo il conto del teorema **Indipendenza e complementari** un evento alla volta.

Con prove mutuamente indipendenti, la probabilità che riescano tutte è il prodotto delle probabilità di successo delle singole prove. Lo stesso calcolo dà la probabilità che funzionino tutti i componenti di un impianto.
:::

:::attenzione{titolo="Coppie indipendenti e tripla dipendente"}
Si lanciano due monete eque indipendenti. Siano $A$ l'evento «la prima moneta dà testa», $B$ l'evento «la seconda moneta dà testa» e $C$ l'evento «i due esiti coincidono». Ogni evento ha probabilità $\dfrac{1}{2}$. Ogni intersezione a coppie contiene il solo esito testa-testa e ha quindi probabilità $\dfrac{1}{4}$, uguale al prodotto delle rispettive probabilità.

Anche l'intersezione tripla contiene soltanto testa-testa, quindi ha probabilità $\dfrac{1}{4}$, mentre il prodotto delle tre probabilità è $\dfrac{1}{8}$. Le coppie sono indipendenti, ma i tre eventi insieme non sono mutuamente indipendenti. Infatti, se si sa che entrambe le monete danno testa, gli esiti coincidono di sicuro, quindi $P(C\mid A\cap B)=1$, mentre $P(C)=\dfrac12$.
:::

:::esempio{titolo="Componenti in serie e in parallelo"}
L'**affidabilità** di un sistema è la probabilità che il sistema funzioni. Tre componenti funzionano in modo mutuamente indipendente con probabilità $p_1$, $p_2$ e $p_3$; il componente $i$ è guasto con probabilità $1-p_i$.

- In serie il sistema funziona solo quando funzionano tutti e tre i componenti. Per l'indipendenza mutua l'affidabilità è $p_1p_2p_3$.
- In parallelo basta un componente funzionante, quindi il sistema si guasta solo quando si guastano tutti e tre. I tre guasti sono mutuamente indipendenti, perché sono i complementari di eventi mutuamente indipendenti. Perciò la probabilità che si guastino tutti e tre è il prodotto $(1-p_1)(1-p_2)(1-p_3)$, e per la regola del complementare l'affidabilità è $1-(1-p_1)(1-p_2)(1-p_3)$.

Con $p_1=0{,}9$, $p_2=0{,}8$ e $p_3=0{,}7$, la configurazione in serie ha affidabilità $0{,}9\cdot0{,}8\cdot0{,}7=0{,}504$. Nella configurazione in parallelo la probabilità di guasto totale è $0{,}1\cdot0{,}2\cdot0{,}3=0{,}006$, quindi l'affidabilità è $1-0{,}006=0{,}994$.

::grafico{assi=0 xmin=-0.4 xmax=9 ymin=-0.3 ymax=6.6 poligoni="1.4,5.2 3,5.2 3,6 1.4,6;3.8,5.2 5.4,5.2 5.4,6 3.8,6;6.2,5.2 7.8,5.2 7.8,6 6.2,6;3.4,0 5,0 5,0.8 3.4,0.8;3.4,1.4 5,1.4 5,2.2 3.4,2.2;3.4,2.8 5,2.8 5,3.6 3.4,3.6" linee="0.6,5.6 1.4,5.6;3,5.6 3.8,5.6;5.4,5.6 6.2,5.6;7.8,5.6 8.6,5.6;0.6,1.8 2.2,1.8;2.2,0.4 2.2,3.2;2.2,0.4 3.4,0.4;2.2,1.8 3.4,1.8;2.2,3.2 3.4,3.2;5,0.4 6.2,0.4;5,1.8 6.2,1.8;5,3.2 6.2,3.2;6.2,0.4 6.2,3.2;6.2,1.8 7.8,1.8" etichette="1.65,5.5,C₁ · 0,9;4.05,5.5,C₂ · 0,8;6.45,5.5,C₃ · 0,7;3.65,3.1,C₁ · 0,9;3.65,1.7,C₂ · 0,8;3.65,0.3,C₃ · 0,7;0.6,6.25,in serie;0.6,4.1,in parallelo" titolo="Gli stessi tre componenti collegati in serie, in alto, e in parallelo, in basso. Accanto al nome è indicata la probabilità di funzionamento. Le affidabilità sono $0{,}504$ e $0{,}994$."}
:::

:::esempio{titolo="Esattamente due componenti operativi"}
Tre componenti funzionano in modo mutuamente indipendente con probabilità $\dfrac12$, $\dfrac23$ e $\dfrac34$. Sia $F_i$ l'evento «il componente $i$ funziona», quindi $F_i^c$ è l'evento «il componente $i$ è guasto». Esattamente due componenti sono operativi quando si guasta il primo, il secondo oppure il terzo, con gli altri due funzionanti. Ogni configurazione ha un solo guasto, in una posizione diversa, quindi i tre casi sono disgiunti. Poiché funzionamenti e guasti sono mutuamente indipendenti, la probabilità di ogni configurazione è il prodotto delle probabilità dei singoli componenti:

$$
\begin{aligned}
P(F_1^c\cap F_2\cap F_3)&=\frac12\cdot\frac23\cdot\frac34=\frac14,\\[6pt]
P(F_1\cap F_2^c\cap F_3)&=\frac12\cdot\frac13\cdot\frac34=\frac18,\\[6pt]
P(F_1\cap F_2\cap F_3^c)&=\frac12\cdot\frac23\cdot\frac14=\frac1{12}.
\end{aligned}
$$

La somma è $\dfrac14+\dfrac18+\dfrac1{12}=\dfrac{11}{24}$. Se il sistema richiede *almeno* due componenti operativi, si aggiunge la configurazione in cui funzionano tutti e tre. La sua probabilità è $\dfrac12\cdot\dfrac23\cdot\dfrac34=\dfrac14$, quindi l'affidabilità del sistema è $\dfrac{11}{24}+\dfrac{6}{24}=\dfrac{17}{24}$. Il passaggio da «esattamente» ad «almeno» cambia l'evento richiesto, mentre la probabilità di ogni configurazione resta la stessa.
:::
