---
titolo: "Probabilità elementare"
sommario: "Modelli equiprobabili, eventi, conteggio con alberi e tabelle, probabilità condizionata e analisi di frequenze osservate."
---

## Esperimento, esiti ed eventi

:::definizione{#eventi titolo="Spazio degli esiti e scelta di che cosa registrare"}
Un **esperimento aleatorio** è una prova il cui risultato non si conosce prima di farla, come il lancio di un dado o l'estrazione di una pallina da un'urna. Ogni risultato possibile si chiama **esito**.

Lo **spazio degli esiti** è l'insieme di tutti gli esiti possibili e si indica con $\Omega$, la lettera greca omega maiuscola. Per un dado $\Omega=\{1,2,3,4,5,6\}$.

Un **evento** è un sottoinsieme di $\Omega$, cioè un gruppo di esiti, e si scrive $E\subseteq\Omega$ (il simbolo $\subseteq$ si legge «è contenuto in»). L'evento $E$ si verifica se l'esito uscito appartiene a $E$. Con il dado, «esce un numero pari» è l'evento $E=\{2,4,6\}$, e si verifica se esce $4$.

Due eventi particolari sono i seguenti.

- L'insieme vuoto $\varnothing$, che non contiene esiti, è l'**evento impossibile**.
- Tutto $\Omega$ è l'**evento certo**, perché qualunque esito gli appartiene.

Gli esiti dipendono da che cosa si sceglie di registrare. Lanciando una moneta due volte si può tenere l'ordine dei lanci. Con $T$ per testa e $C$ per croce, lo spazio è $\{TT,TC,CT,CC\}$, dove $TC$ significa testa al primo lancio e croce al secondo. L'evento «esattamente una testa» contiene due esiti, $TC$ e $CT$. Se invece si registra solo il numero di teste, i valori possibili sono tre, $0$, $1$ e $2$. Il valore $1$ raccoglie i due esiti $TC$ e $CT$ del modello precedente.
:::

:::esempio{titolo="Gli esiti che producono uno stesso conteggio"}
Il diagramma mette ogni esito ordinato in una casella. Il primo lancio fissa la riga e il secondo la colonna. L'evento «esattamente una testa» corrisponde alle due caselle fuori dalla diagonale, $TC$ e $CT$.

Con una moneta **regolare**, cioè con testa e croce ugualmente probabili, e con lanci che non si influenzano, le quattro caselle hanno lo stesso peso $\dfrac14$. Raggruppandole per numero di teste si ottengono quindi pesi diversi.

- $0$ teste: solo $CC$, peso $\dfrac14$.
- $1$ testa: $TC$ e $CT$, peso $\dfrac24=\dfrac12$.
- $2$ teste: solo $TT$, peso $\dfrac14$.

::grafico{assi=0 xmin=-0.75 xmax=3.2 ymin=-0.7 ymax=3.2 linee="0,0 2.6,0 2.6,2.6 0,2.6 0,0;1.3,0 1.3,2.6;0,1.3 2.6,1.3" etichette="0.65,1.95,TT;1.95,1.95,TC;0.65,0.65,CT;1.95,0.65,CC;0.65,2.92,T;1.95,2.92,C;-0.32,1.95,T;-0.32,0.65,C" titolo="Il primo lancio fissa la riga, il secondo la colonna"}
:::

## Probabilità classica e peso delle categorie

::::teorema{#classica titolo="Conteggio degli esiti equiprobabili"}
Gli esiti si dicono **equiprobabili** quando hanno tutti la stessa probabilità. Si sceglie **uniformemente** (o «a caso») quando ogni oggetto ha la stessa probabilità di essere scelto, come una pallina estratta da un'urna senza guardare.

Se $\Omega$ ha $N>0$ esiti equiprobabili e l'evento $E$ ne contiene $n$, la probabilità di $E$ è
$$
P(E)=\frac{n}{N}=\frac{\text{numero di casi favorevoli}}{\text{numero di casi possibili}}.
$$
Per esempio, con un dado **regolare**, cioè con le sei facce ugualmente probabili, l'evento «pari» contiene $3$ esiti su $6$, quindi $P(\text{pari})=\dfrac36=\dfrac12$. Il numero degli elementi di un evento si scrive anche $|E|$ oppure $\#E$, quindi $P(E)=\dfrac{|E|}{|\Omega|}$.

Poiché $0\le n\le N$, il rapporto è tra $0$ e $1$. Vale $0$ per l'evento impossibile, che ha $n=0$, e $1$ per l'evento certo, che ha $n=N$.

La stessa idea vale per una ruota che si ferma in un punto scelto uniformemente. Un settore circolare di ampiezza $\alpha$ gradi ($\alpha$ è la lettera greca alfa) ha probabilità $\dfrac{\alpha}{360}$. Un settore di $90^\circ$ ha quindi probabilità $\dfrac{90}{360}=\dfrac14$.

:::dimostrazione
Gli $N$ esiti sono **incompatibili** a due a due, cioè due esiti diversi non possono uscire insieme. Inoltre esauriscono tutte le possibilità. Quindi le loro probabilità sommano a $1$. Se hanno tutte lo stesso valore $p$, la somma è $Np=1$, perciò $p=\dfrac1N$. L'evento $E$ è formato da $n$ esiti incompatibili, ciascuno di probabilità $\dfrac1N$, quindi
$$
P(E)=n\cdot\frac1N=\frac nN.
$$
:::
::::

:::esempio{titolo="Colori diversi, singole tessere equiprobabili"}
Un sacchetto contiene quattro tessere arancioni e due viola, tutte identiche al tatto. Gli esiti equiprobabili sono le singole tessere. Numerando le tessere da $1$ a $6$ si vedono i sei esiti elementari. Quattro sono arancioni e due viola, perciò
$$
P(\text{arancione})=\frac46=\frac23,\qquad P(\text{viola})=\frac26=\frac13.
$$
I nomi dei colori sono soltanto due. Se si prendessero i due colori come casi possibili, ciascuno avrebbe probabilità $\dfrac12$, cioè lo stesso peso a categorie che contengono un numero diverso di tessere.

::grafico{assi=0 xmin=-0.1 xmax=3.55 ymin=-0.8 ymax=4.8 poligoni="0.48,0 1.34,0 1.34,4 0.48,4;2,0 2.86,0 2.86,2 2,2" linee="0.15,0 3.21,0" etichette="0.4,-0.42,Arancione;2.05,-0.42,Viola;0.83,4.37,4;2.35,2.37,2" titolo="L’altezza delle barre conta gli esiti elementari per colore"}
:::

:::esempio{titolo="Uno stesso dado, due modelli di probabilità"}
Un dado **truccato** assegna al $6$ un peso doppio rispetto a ciascuna delle altre facce, che hanno lo stesso peso fra loro. Il **peso** di una faccia è la sua probabilità. Se ciascuna delle facce da $1$ a $5$ pesa $p$, il $6$ pesa $2p$. La somma dei pesi delle sei facce vale $1$, quindi
$$
5p+2p=1,\qquad 7p=1,\qquad p=\frac17.
$$
L'evento «pari» contiene $2$, $4$ e $6$. In questo modello ha probabilità
$$
\frac17+\frac17+\frac27=\frac47.
$$

Con un dado regolare le stesse tre facce hanno invece probabilità complessiva $\dfrac36=\dfrac12$. I due modelli hanno lo stesso spazio degli esiti e pesi diversi. Quando gli esiti non sono equiprobabili, il rapporto $\dfrac nN$ non si applica, e la probabilità di un evento si trova sommando i pesi dei suoi esiti.
:::

## Complementare e richieste con almeno uno

::::teorema{#complementare titolo="Sottrarre dall’evento certo"}
Il **complementare** di $E$ è l'evento formato dagli esiti di $\Omega$ che non stanno in $E$. Si scrive $E^c=\Omega\setminus E$ (si legge «omega meno $E$») oppure $\overline E$, e si chiama anche **evento contrario**. Si verifica esattamente quando $E$ non si verifica. Vale
$$
P(E^c)=1-P(E).
$$
Con un dado regolare, il complementare di «esce $6$» è «esce un numero da $1$ a $5$», e ha probabilità $1-\dfrac16=\dfrac56$.

:::dimostrazione
Ogni esito sta in uno solo fra $E$ ed $E^c$, e insieme i due eventi formano tutto $\Omega$. Quindi $P(E)+P(E^c)=P(\Omega)=1$. Sottraendo $P(E)$ da entrambi i membri si ottiene $P(E^c)=1-P(E)$.
:::
::::

:::esempio{titolo="Almeno un sei in due lanci"}
Si lancia due volte un dado regolare. Gli esiti sono le $6\cdot6=36$ coppie ordinate $(\text{primo};\text{secondo})$, tutte equiprobabili. L'evento «almeno un sei» si verifica con il sei al primo lancio, al secondo oppure in entrambi. Sommando i casi «sei al primo» e «sei al secondo» la coppia $(6;6)$ verrebbe contata due volte.

Il complementare è più semplice da contare. Il complementare di «almeno un sei» è «nessun sei», e in quel caso ciascun lancio ha cinque valori ammessi, da $1$ a $5$. Le coppie del complementare sono quindi $5\cdot5=25$ su $36$, e
$$
P(\text{almeno un sei})=1-\frac{25}{36}=\frac{36-25}{36}=\frac{11}{36}.
$$
Nella griglia sono evidenziate la riga e la colonna che contengono un sei. Il punto $(6;6)$ è comune alle due file e rappresenta una sola coppia, quindi i punti sono $6+6-1=11$.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,6 6,1" punti="1,6;2,6;3,6;4,6;5,6;6,6;6,1;6,2;6,3;6,4;6,5" nomi="Primo,Secondo" titolo="Undici coppie ordinate hanno almeno una coordinata uguale a 6"}
:::

## Unione, intersezione e incompatibilità

::::teorema{#unione titolo="Somma di due eventi con intersezione"}
Dati due eventi $A$ e $B$, si usano tre operazioni già viste con gli insiemi.

- L'**unione** $A\cup B$ («$A$ oppure $B$») contiene gli esiti che stanno in almeno uno dei due eventi.
- L'**intersezione** $A\cap B$ («$A$ e $B$») contiene gli esiti che stanno in entrambi.
- La **differenza** $A\setminus B$ («$A$ ma non $B$») contiene gli esiti di $A$ che non stanno in $B$.

Vale
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Per esempio, con un dado regolare siano $A$ «pari» e $B$ «maggiore di $3$». Allora $A\cap B=\{4,6\}$ e $P(A\cup B)=\dfrac36+\dfrac36-\dfrac26=\dfrac46$, infatti $A\cup B=\{2,4,5,6\}$.

:::dimostrazione
L'unione si divide in tre regioni che non hanno esiti in comune, $A\setminus B$, $A\cap B$ e $B\setminus A$. Quindi $P(A\cup B)$ è la somma delle probabilità delle tre regioni. Nella somma $P(A)+P(B)$ la regione $A\setminus B$ compare una volta, dentro $P(A)$, e la regione $B\setminus A$ compare una volta, dentro $P(B)$. La regione centrale $A\cap B$ invece compare due volte, perché sta sia in $A$ sia in $B$. Sottraendo una volta $P(A\cap B)$ ogni regione resta contata una volta sola, e si ottiene $P(A\cup B)$.
:::
::::

:::esempio{titolo="Ricavare la parte comune dai tre totali"}
Su cento partecipanti, $56$ hanno scelto l'attività $A$, $38$ l'attività $B$ e $74$ almeno un'attività. Si sceglie una persona uniformemente, perciò ogni probabilità è il conteggio diviso per cento. La formula dell'unione vale anche per i conteggi, quindi le persone che hanno scelto entrambe le attività sono
$$
56+38-74=20.
$$
Da qui si ricavano le altre zone del diagramma.

- Solo $A$: $56-20=36$.
- Solo $B$: $38-20=18$.
- Nessuna delle due: $100-74=26$.

Le quattro zone sommano a $36+20+18+26=100$.

::venn{zone="ab" elementi="a:36;ab:20;b:18;u:26" nomi="A,B" universo=1 titolo="Il centro è il conteggio in comune ai due gruppi"}

Due eventi sono **incompatibili** quando non possono verificarsi insieme, cioè quando $A\cap B=\varnothing$. In questo caso $P(A\cap B)=0$ e la formula diventa $P(A\cup B)=P(A)+P(B)$, perché ogni esito è contato al più una volta. Nell'esempio il centro contiene venti persone, quindi la somma diretta $56+38=94$ supera di $20$ il numero $74$ delle persone dell'unione.
:::

:::esempio{titolo="Controllare se due probabilità possono stare nello stesso modello"}
Siano $P(A)=\dfrac34$ e $P(B)=\dfrac23$. La somma è $\dfrac34+\dfrac23=\dfrac{17}{12}$, maggiore di uno. Poiché $P(A\cup B)\le1$, dalla formula dell'unione segue
$$
P(A\cap B)=P(A)+P(B)-P(A\cup B)\ge\frac34+\frac23-1=\frac{9+8-12}{12}=\frac5{12}.
$$
Il valore più piccolo, $\dfrac5{12}$, si ottiene quando l'unione è tutto lo spazio, cioè quando nessun esito sta fuori da entrambi gli eventi. Un modello che lo realizza ha dodici esiti equiprobabili, distribuiti così.

- Cinque nel centro $A\cap B$.
- Quattro in solo $A$, così $|A|=4+5=9$ e $P(A)=\dfrac9{12}=\dfrac34$.
- Tre in solo $B$, così $|B|=3+5=8$ e $P(B)=\dfrac8{12}=\dfrac23$.

Le tre zone sommano a $5+4+3=12$.

Una proposta con intersezione $\dfrac13=\dfrac4{12}$ darebbe invece $P(A\cup B)=\dfrac{9+8-4}{12}=\dfrac{13}{12}$, maggiore di uno. È quindi incompatibile con i **marginali** dati, cioè con le probabilità $P(A)$ e $P(B)$ dei singoli eventi. Il conteggio delle zone esclude la proposta e mostra che il limite $\dfrac5{12}$ si può raggiungere.
:::

## Prove composte e uso dell’albero

:::definizione{#composti titolo="Percorsi e coppie ordinate"}
Un esperimento può essere formato da più prove una dopo l'altra, come due lanci di un dado. Un esito completo indica il risultato di ciascuna prova nell'ordine in cui avviene. Con due prove l'esito è una **coppia ordinata**, in cui conta l'ordine: $(1;6)$ e $(6;1)$ sono esiti diversi.

Un **diagramma ad albero** rappresenta queste prove.

- Ogni **nodo** (punto dell'albero) descrive la situazione raggiunta fino a quel momento.
- Ogni **ramo** (o arco) porta dal nodo al risultato della prova successiva e riporta la probabilità di quel risultato nella situazione del nodo.
- Un **percorso** va dall'inizio alla fine dell'albero e corrisponde a un esito completo.

La probabilità di un percorso si ottiene moltiplicando le probabilità dei rami che lo formano. Se un evento è formato da più percorsi, si sommano le loro probabilità, perché due esiti completi diversi sono incompatibili. Per esempio, lanciando due volte una moneta regolare il percorso «testa, poi croce» ha probabilità $\dfrac12\cdot\dfrac12=\dfrac14$, e l'evento «una testa e una croce» somma i due percorsi $TC$ e $CT$, quindi ha probabilità $\dfrac14+\dfrac14=\dfrac12$.
:::

:::esempio{titolo="Due totali al dado con pesi diversi"}
Si lancia due volte un dado regolare, con lanci indipendenti, cioè che non si influenzano. Le coppie ordinate sono $36$ ed equiprobabili.

- Il totale $7$ si ottiene dalle sei coppie $(1;6),(2;5),(3;4),(4;3),(5;2),(6;1)$, quindi ha probabilità $\dfrac6{36}=\dfrac16$.
- Il totale $8$ si ottiene dalle cinque coppie $(2;6),(3;5),(4;4),(5;3),(6;2)$, quindi ha probabilità $\dfrac5{36}$.

Passando da una coppia alla successiva il primo numero cresce di uno e il secondo cala di uno, perciò la somma resta la stessa e i punti stanno su una diagonale. Nel totale $8$ la coppia $(4;4)$ ha le due coordinate uguali e scambiandole si ottiene la stessa coppia, quindi si conta una volta sola.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,1;2,6 6,2" punti="1,6;2,5;3,4;4,3;5,2;6,1;2,6;3,5;4,4;5,3;6,2" nomi="Primo,Secondo" titolo="La diagonale del totale 7 ha sei punti. Quella del totale 8 ne ha cinque."}
:::

## Indipendenza

:::definizione{#indipendenza titolo="Verificare l’indipendenza con l’intersezione"}
Due eventi $A$ e $B$ sono **indipendenti** se
$$
P(A\cap B)=P(A)P(B).
$$
A parole, la probabilità che avvengano entrambi è il prodotto delle due probabilità. Per verificare l'indipendenza si calcolano i due membri e si confrontano. Se sono diversi, gli eventi si dicono **dipendenti**.

Un caso tipico sono le estrazioni **con reimmissione**, in cui la pallina estratta viene rimessa nell'urna prima dell'estrazione successiva. L'urna torna ogni volta com'era, quindi il risultato della prima estrazione non cambia le probabilità della seconda. Se l'urna ha due palline rosse su cinque, la probabilità che due estrazioni con reimmissione diano entrambe rosso è
$$
\frac25\cdot\frac25=\frac4{25}.
$$
:::

:::esempio{titolo="Due domande sullo stesso numero"}
Si estrae uniformemente un numero intero da $1$ a $8$. Sia $A$ l'evento «numero pari» e $B$ l'evento «numero maggiore di $4$». Entrambi contengono quattro esiti su otto, quindi $P(A)=P(B)=\dfrac12$. I numeri comuni sono $6$ e $8$, quindi
$$
\begin{aligned}
P(A\cap B)&=\frac28=\frac14,\\[6pt]
P(A)P(B)&=\frac12\cdot\frac12=\frac14.
\end{aligned}
$$
I due valori sono uguali, perciò $A$ e $B$ sono indipendenti. Il motivo è che la quota di pari è la stessa sotto e sopra $4$. Infatti fra $1,2,3,4$ i pari sono due su quattro, e fra $5,6,7,8$ sono ancora due su quattro. L'indipendenza si può quindi avere anche fra due eventi dello stesso esperimento.

::venn{zone="ab" elementi="a:2,4;ab:6,8;b:5,7;u:1,3" nomi="A,B" universo=1 titolo="La parte comune contiene due degli otto esiti"}

Due eventi incompatibili con probabilità positive non sono indipendenti. Infatti il prodotto $P(A)P(B)$ è positivo, mentre $P(A\cap B)=0$ perché l'intersezione è vuota. Con un dado, «esce $1$» ed «esce $2$» hanno prodotto $\dfrac16\cdot\dfrac16=\dfrac1{36}$ e intersezione di probabilità $0$.
:::

:::osservazione{titolo="Indipendenza e complementare di uno degli eventi"}
Siano $A$ e $B$ indipendenti. Gli esiti di $A$ si dividono in quelli che stanno anche in $B$ e quelli che stanno in $B^c$, quindi $P(A)=P(A\cap B)+P(A\cap B^c)$. Sottraendo $P(A\cap B)$ si ottiene
$$
\begin{aligned}
P(A\cap B^c)&=P(A)-P(A\cap B)\\[6pt]
&=P(A)-P(A)P(B)\\[6pt]
&=P(A)(1-P(B))=P(A)P(B^c).
\end{aligned}
$$
Nel secondo passaggio si è usata l'indipendenza, nel terzo si è raccolto $P(A)$ e si è usato $1-P(B)=P(B^c)$. Quindi anche $A$ e $B^c$ sono indipendenti.

Per esempio, due prove indipendenti riescono con probabilità $\dfrac23$ e $\dfrac14$. «Riuscire solo nella prima» significa riuscire nella prima e fallire nella seconda. Il fallimento della seconda ha probabilità $1-\dfrac14=\dfrac34$, quindi
$$
P(\text{solo la prima})=\frac23\cdot\frac34=\frac12.
$$
:::

## Estrazioni senza reimmissione

:::esempio{#dipendenza titolo="Aggiornare l’urna dopo il primo esito"}
Nelle estrazioni **senza reimmissione** la pallina estratta resta fuori dall'urna. Dopo ogni estrazione cambiano il numero totale delle palline e il numero delle palline del colore uscito.

In un'urna ci sono tre palline rosse $R$ e due blu $B$. Si fanno due estrazioni uniformi senza reimmissione.

- Se la prima è rossa, restano due rosse e due blu, cioè quattro palline.
- Se la prima è blu, restano tre rosse e una blu.

Le probabilità dei rami della seconda estrazione dipendono perciò dal primo esito. Nell'albero il primo nodo intermedio corrisponde all'urna con due rosse e due blu, il secondo all'urna con tre rosse e una blu.

::grafico{assi=0 xmin=-0.7 xmax=7.6 ymin=-4 ymax=4 linee="0,0 3,2 6,3;3,2 6,1;0,0 3,-2 6,-1;3,-2 6,-3" etichette="1.5,1.85,3/5;1.5,-1.85,2/5;4.5,3.1,2/4;4.5,0.9,2/4;4.5,-0.9,3/4;4.5,-3.1,1/4;6.6,3,RR;6.6,1,RB;6.6,-1,BR;6.6,-3,BB" titolo="I due nodi intermedi descrivono composizioni diverse dell’urna"}

La probabilità di ogni percorso è il prodotto dei suoi due rami.

| Percorso | Primo passo | Secondo passo | Probabilità del percorso |
|---|---|---|---|
| $RR$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $RB$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $BR$ | $\dfrac25$ | $\dfrac34$ | $\dfrac3{10}$ |
| $BB$ | $\dfrac25$ | $\dfrac14$ | $\dfrac1{10}$ |

L'evento «due colori diversi» è formato dai percorsi $RB$ e $BR$, quindi ha probabilità $\dfrac3{10}+\dfrac3{10}=\dfrac35$.

Lo stesso valore si ottiene con un conteggio diretto. Numerando le cinque palline, la prima estrazione ha $5$ scelte e la seconda $4$, quindi le coppie ordinate sono $5\cdot4=20$. Le coppie di colori diversi sono $3\cdot2=6$ con la rossa prima e $2\cdot3=6$ con la blu prima, in tutto $12$, e $\dfrac{12}{20}=\dfrac35$. La somma dei quattro pesi della tabella vale $1$, perché i percorsi esauriscono tutte le possibilità.
:::

:::esempio{titolo="Il secondo colore quando il primo rimane sconosciuto"}
Un'urna ha $r$ palline rosse e $b$ blu, con almeno una pallina per colore, e $n=r+b$ palline in tutto. Si fanno due estrazioni senza reimmissione e non si guarda la prima. La seconda è rossa lungo due percorsi.

- Prima rossa e poi rossa: dopo la prima restano $r-1$ rosse su $n-1$ palline.
- Prima blu e poi rossa: dopo la prima restano ancora $r$ rosse su $n-1$ palline.

Sommando i due percorsi e raccogliendo $r$ al numeratore,
$$
\frac rn\cdot\frac{r-1}{n-1}
+\frac bn\cdot\frac r{n-1}
=\frac{r(r-1)+br}{n(n-1)}
=\frac{r(r+b-1)}{n(n-1)}=\frac rn,
$$
dove nell'ultimo passaggio si è usato $r+b-1=n-1$. La probabilità che la seconda sia rossa, presa da sola, è quindi uguale a quella che la prima sia rossa.

Se invece si sa che la prima era rossa, resta un solo ramo, con probabilità $\dfrac{r-1}{n-1}$. Con cinque rosse e tre blu i due valori sono $\dfrac58$, senza informazioni, e $\dfrac47$, sapendo che la prima era rossa. Il risultato della prima estrazione cambia quindi il calcolo quando è noto.
:::

## Probabilità condizionata

::::teorema{#condizionata titolo="Restringere l’insieme dei casi al dato disponibile"}
La **probabilità condizionata** di $A$ dato $B$ è la probabilità di $A$ quando si sa che $B$ è avvenuto. Si scrive $P(A\mid B)$ e si legge «probabilità di $A$ dato $B$». Se $P(B)>0$, si calcola con
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Sapere che $B$ è avvenuto restringe i casi possibili a quelli di $B$. Per esempio, con un dado regolare, sapendo che è uscito un numero pari, la probabilità che sia uscito $6$ è
$$
P(\{6\}\mid\text{pari})=\frac{\frac16}{\frac36}=\frac13.
$$

:::dimostrazione
Si considera un modello finito con esiti equiprobabili. Siano $N$ il numero totale di esiti, $n_B$ il numero di esiti in $B$ e $n_{AB}$ il numero di esiti in $A\cap B$. Sapendo che $B$ è avvenuto, i casi possibili sono gli $n_B$ esiti di $B$ e i favorevoli sono gli $n_{AB}$ esiti che stanno anche in $A$, quindi $P(A\mid B)=\dfrac{n_{AB}}{n_B}$. Dividendo numeratore e denominatore per $N$ si ottiene
$$
\frac{n_{AB}}{n_B}=\frac{\frac{n_{AB}}{N}}{\frac{n_B}{N}}=\frac{P(A\cap B)}{P(B)}.
$$
Quando gli esiti hanno probabilità diverse, la stessa regola si applica con le somme dei pesi al posto dei conteggi.
:::
::::

:::esempio{titolo="Il dato stabilisce quale totale usare"}
Fra $80$ studenti, $50$ hanno fatto una simulazione (evento $B$) e $40$ hanno superato la prova (evento $A$). Entrambe le condizioni valgono per $30$ di loro. I conteggi si raccolgono in una **tabella a doppia entrata**, in cui ogni casella conta gli studenti che hanno la caratteristica della sua riga e quella della sua colonna. Le altre caselle si ricavano per differenza, per esempio $50-30=20$ studenti hanno fatto la simulazione senza superare la prova.

| | Prova superata | Prova non superata | Totale |
|---|---:|---:|---:|
| Simulazione svolta | 30 | 20 | 50 |
| Simulazione non svolta | 10 | 20 | 30 |
| Totale | 40 | 40 | 80 |

- Fra chi ha fatto la simulazione, la quota di promossi è $P(A\mid B)=\dfrac{30}{50}=\dfrac35$. Si legge la riga «Simulazione svolta».
- Fra chi ha superato la prova, la quota di chi ha fatto la simulazione è $P(B\mid A)=\dfrac{30}{40}=\dfrac34$. Si legge la colonna «Prova superata».

Il numeratore è lo stesso, $30$, mentre il denominatore è il totale del gruppo indicato dal dato.

::venn{zone="ab" elementi="a:10;ab:30;b:20;u:20" nomi="A,B" universo=1 titolo="Entrambi i condizionamenti usano il centro ma cambiano la regione di riferimento"}

Moltiplicando per $P(B)$ entrambi i membri della definizione si ottiene
$$
P(A\cap B)=P(B)P(A\mid B).
$$
È il prodotto che si usa lungo un ramo dell'albero quando la seconda probabilità dipende dal primo esito. Se $A$ e $B$ sono indipendenti e $P(B)>0$, sostituendo $P(A\cap B)=P(A)P(B)$ nella definizione si ottiene $P(A\mid B)=\dfrac{P(A)P(B)}{P(B)}=P(A)$, cioè sapere che $B$ è avvenuto non cambia la probabilità di $A$.
:::

## Frequenze relative e confronto con il modello

:::definizione{#frequenza titolo="Probabilità teorica e dati osservati"}
Si ripete un esperimento $N>0$ volte e si conta quante volte si verifica l'evento $E$. Se $E$ si verifica $n_E$ volte, la **frequenza relativa** di $E$ è
$$
f_E=\frac{n_E}{N}.
$$
In percentuale vale $100f_E\%$. Per esempio, $13$ teste in $20$ lanci danno $f=\dfrac{13}{20}=0{,}65$, cioè il $65\%$.

La probabilità e la frequenza relativa sono due numeri diversi. In un modello di moneta regolare la probabilità di testa è $\dfrac12$ ed è fissata dal modello. Il numero di teste osservate è invece un dato raccolto, che cambia da una serie di lanci all'altra.
:::

:::esempio{titolo="Frequenza cumulata dopo blocchi di venti lanci"}
Una sequenza di lanci di una moneta dà $13$ teste dopo $20$ lanci e $51$ dopo $100$. La **frequenza cumulata** dopo un certo numero di lanci è il numero di teste uscite dall'inizio fino a quel momento diviso per il numero di lanci fatti. La tabella e il grafico la riportano alla fine di ciascuno dei cinque blocchi da venti lanci.

| Lanci totali | Teste totali | Frequenza cumulata |
|---:|---:|---:|
| 20 | 13 | $0{,}650$ |
| 40 | 23 | $0{,}575$ |
| 60 | 32 | $\dfrac8{15}$ |
| 80 | 42 | $0{,}525$ |
| 100 | 51 | $0{,}510$ |

::grafico{assi=0 xmin=-12 xmax=117 ymin=0.427 ymax=0.725 linee="12,0.69 12,0.46 105,0.46;20,0.46 20,0.454;40,0.46 40,0.454;60,0.46 60,0.454;80,0.46 80,0.454;100,0.46 100,0.454" segmenti="12,0.5,105,0.5" punti="20,0.65;40,0.575;60,0.533333333;80,0.525;100,0.51" etichette="17,0.440,20;37,0.440,40;57,0.440,60;77,0.440,80;96,0.440,100;-1,0.497,0,50;-1,0.547,0,55;-1,0.597,0,60;-1,0.647,0,65;12,0.711,Frequenza;104,0.473,Lanci" titolo="Punti osservati e linea orizzontale della probabilità teorica 0,5"}

In questa sequenza le frequenze cumulate si avvicinano alla probabilità teorica $\dfrac12$. Dopo sessanta lanci la frequenza è $\dfrac8{15}\approx0{,}533$.

Il dato dopo $40$ lanci comprende già i primi venti. Le teste uscite soltanto nel secondo blocco si trovano sottraendo i conteggi cumulati, $23-13=10$. La frequenza del solo secondo blocco è quindi $\dfrac{10}{40-20}=\dfrac{10}{20}=\dfrac12$.
:::

:::esempio{titolo="Unire gruppi di numerosità diversa"}
Due classi lanciano la stessa moneta. La prima registra $8$ teste in $10$ lanci, con frequenza $0{,}8$, la seconda $18$ teste in $30$ lanci, con frequenza $0{,}6$. La frequenza complessiva si calcola sommando le teste e sommando i lanci:
$$
\frac{8+18}{10+30}=\frac{26}{40}=0{,}65.
$$
La media semplice dei due rapporti sarebbe $\dfrac{0{,}8+0{,}6}{2}=0{,}70$, un valore diverso. Nella frequenza complessiva ogni lancio conta allo stesso modo, quindi il gruppo di trenta lanci pesa il triplo del gruppo di dieci. Per questo $0{,}65$ è più vicino a $0{,}6$, il rapporto del gruppo più numeroso.
:::
