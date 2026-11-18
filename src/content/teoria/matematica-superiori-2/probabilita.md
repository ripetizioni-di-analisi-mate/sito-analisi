---
titolo: "Probabilità elementare"
sommario: "Modelli equiprobabili, eventi, conteggio con alberi e tabelle, probabilità condizionata e analisi di frequenze osservate."
---

## Esperimento, esiti ed eventi

:::definizione{#eventi titolo="Spazio degli esiti e scelta di che cosa registrare"}
L’**esperimento aleatorio** ha esito incerto prima della prova. Lo **spazio degli esiti** $\Omega$ raccoglie tutti i risultati elementari previsti dal modello. Un **evento** $E\subseteq\Omega$ si verifica se l’esito osservato appartiene a $E$. L’insieme vuoto è l’evento impossibile. Tutto $\Omega$ è l’evento certo.

L’esito dipende da che cosa registriamo. Lanciando una moneta due volte possiamo tenere l’ordine dei lanci. Con $T$ per testa e $C$ per croce, lo spazio è $\{TT,TC,CT,CC\}$. L’evento «esattamente una testa» contiene due esiti, $TC$ e $CT$. Se registriamo solo il numero di teste otteniamo invece tre valori possibili, $0$, $1$ e $2$. Il valore $1$ raccoglie due esiti del modello iniziale.
:::

:::esempio{titolo="Gli esiti che producono uno stesso conteggio"}
Il diagramma colloca ogni esito ordinato in una casella. Una testa equivale a prendere le due caselle fuori dalla diagonale. Con lanci indipendenti di una moneta regolare, le quattro caselle hanno lo stesso peso. Raggrupparle in base al numero di teste produce quindi pesi diversi per i tre gruppi.

::grafico{assi=0 xmin=-0.75 xmax=3.2 ymin=-0.7 ymax=3.2 linee="0,0 2.6,0 2.6,2.6 0,2.6 0,0;1.3,0 1.3,2.6;0,1.3 2.6,1.3" etichette="0.65,1.95,TT;1.95,1.95,TC;0.65,0.65,CT;1.95,0.65,CC;0.65,2.92,T;1.95,2.92,C;-0.32,1.95,T;-0.32,0.65,C" titolo="Il primo lancio fissa la riga, il secondo la colonna"}
:::

## Probabilità classica e peso delle categorie

::::teorema{#classica titolo="Conteggio degli esiti equiprobabili"}
Se $\Omega$ ha $N>0$ esiti equiprobabili ed $E$ ne contiene $n$, si ha
$$
P(E)=\frac{n}{N}.
$$
Il rapporto è tra $0$ e $1$. Si ottengono $0$ per l’evento vuoto e $1$ per tutto lo spazio.

:::dimostrazione
Gli $N$ esiti elementari sono incompatibili a due a due e insieme esauriscono le possibilità. Le loro probabilità sommano a $1$. Se hanno tutte il medesimo valore $p$, allora $Np=1$ e $p=\dfrac1N$. L’evento $E$ raccoglie $n$ esiti incompatibili, quindi i loro contributi sommano a $\dfrac nN$.
:::
::::

:::esempio{titolo="Colori diversi, singole tessere equiprobabili"}
Un sacchetto contiene quattro tessere arancioni e due viola, tutte identiche al tatto. Numerare le tessere rende espliciti i sei esiti elementari equiprobabili. La probabilità di arancione è $\dfrac46=\dfrac23$. Il colore viola ha peso $\dfrac26=\dfrac13$. Contare semplicemente i due nomi dei colori darebbe un peso uguale a categorie che raggruppano numeri diversi di tessere.

::grafico{assi=0 xmin=-0.1 xmax=3.55 ymin=-0.8 ymax=4.8 poligoni="0.48,0 1.34,0 1.34,4 0.48,4;2,0 2.86,0 2.86,2 2,2" linee="0.15,0 3.21,0" etichette="0.4,-0.42,Arancione;2.05,-0.42,Viola;0.83,4.37,4;2.35,2.37,2" titolo="L’altezza delle barre conta gli esiti elementari per colore"}
:::

:::esempio{titolo="Uno stesso dado, due modelli di probabilità"}
Un dado assegna al $6$ peso doppio rispetto a ciascuna delle altre facce, che hanno lo stesso peso fra loro. Se il peso di ciascuna di queste è $p$, la somma dei pesi delle sei facce è $5p+2p=1$, quindi $p=\dfrac17$. L’evento «pari» contiene $2$, $4$ e $6$. Nel modello dato ha probabilità $\dfrac17+\dfrac17+\dfrac27=\dfrac47$.

Nel modello di dado regolare, le stesse tre facce hanno invece probabilità complessiva $\dfrac12$. Cambiando il modello si è conservato lo spazio degli esiti e si sono cambiati i pesi. La probabilità di un evento si può trovare sommando i pesi delle singole facce anche quando il semplice rapporto fra i due conteggi non si applica.
:::

## Complementare e richieste con almeno uno

::::teorema{#complementare titolo="Sottrarre dall’evento certo"}
Il **complementare** $E^c=\Omega\setminus E$ comprende gli esiti in cui $E$ non si verifica. Vale
$$
P(E^c)=1-P(E).
$$

:::dimostrazione
Ogni esito sta in uno solo fra $E$ ed $E^c$. Sommando le due probabilità otteniamo $P(\Omega)=1$, da cui si ricava la formula.
:::
::::

:::esempio{titolo="Almeno un sei in due lanci"}
Lanciando due volte un dado regolare, almeno un sei può comparire al primo lancio, al secondo, oppure in entrambi. Il caso «entrambi» farebbe doppia presenza sommando senza correzioni le due possibilità. Il complementare ha una forma più semplice. Nessuno dei due dadi mostra $6$, quindi si usano cinque valori ammessi per ciascuna coordinata. Le coppie favorevoli al complementare sono $5\cdot5=25$ su $36$ equiprobabili. Pertanto
$$
P(\text{almeno un sei})=1-\frac{25}{36}=\frac{11}{36}.
$$
Nella griglia, sono evidenziate la riga e la colonna che contengono un sei. Il punto $(6,6)$ è comune alle due file e rappresenta una sola coppia.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,6 6,1" punti="1,6;2,6;3,6;4,6;5,6;6,6;6,1;6,2;6,3;6,4;6,5" nomi="Primo,Secondo" titolo="Undici coppie ordinate hanno almeno una coordinata uguale a 6"}
:::

## Unione, intersezione e incompatibilità

::::teorema{#unione titolo="Somma di due eventi con intersezione"}
L’unione $A\cup B$ si verifica quando accade almeno uno degli eventi. L’intersezione $A\cap B$ richiede entrambi. Vale
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

:::dimostrazione
Le tre regioni $A\setminus B$, $A\cap B$ e $B\setminus A$ sono incompatibili. La loro somma di probabilità dà l’unione. Nella somma $P(A)+P(B)$ la prima e l’ultima regione contribuiscono una volta. Il centro contribuisce due volte. Sottrarre una copia del centro dà la probabilità dell’unione.
:::
::::

:::esempio{titolo="Ricavare la parte comune dai tre totali"}
Su cento partecipanti, $56$ hanno scelto $A$, $38$ hanno scelto $B$ e $74$ hanno scelto almeno un’attività. Per una scelta uniforme, le probabilità si leggono dividendo i conteggi per cento. La stessa relazione sui conteggi dà $56+38-74=20$ persone che hanno scelto entrambe. Restano $36$ solo in $A$, $18$ solo in $B$ e $26$ fuori da entrambe. Le quattro zone sommano a cento.

::venn{zone="ab" elementi="a:36;ab:20;b:18;u:26" nomi="A,B" universo=1 titolo="Il centro è il conteggio in comune ai due gruppi"}

Gli eventi sono **incompatibili** quando $A\cap B=\varnothing$. In tal caso ciascun esito contribuisce al più una volta e l’addizione diretta è corretta. Nell’esempio il centro contiene venti persone, quindi sommare $56+38$ produrrebbe un conteggio superiore a quello dell’unione.
:::

:::esempio{titolo="Controllare se due probabilità possono stare nello stesso modello"}
Se $P(A)=\dfrac34$ e $P(B)=\dfrac23$, la loro somma supera uno. L’intersezione deve avere probabilità almeno $\dfrac34+\dfrac23-1=\dfrac5{12}$ per mantenere $P(A\cup B)\le1$. Il valore più piccolo è possibile quando il complementare dell’unione è vuoto. Per costruirlo, si prendono dodici casi equiprobabili e si assegnano cinque al centro, quattro alla parte di solo $A$ e tre alla parte di solo $B$.

Una proposta con intersezione $\dfrac13$ darebbe invece probabilità di unione $\dfrac{13}{12}$. È quindi incompatibile con quei marginali. Contare le zone consente sia di respingere la proposta sia di mostrare che il limite trovato può verificarsi.
:::

## Prove composte e uso dell’albero

:::definizione{#composti titolo="Percorsi e coppie ordinate"}
In un esperimento a più prove, un esito completo specifica il risultato di ciascuna prova nell’ordine in cui avviene. Nel diagramma ad albero, ogni nodo descrive la situazione raggiunta. Un arco porta al risultato successivo e reca la probabilità di quel passo nella situazione indicata dal nodo. Si moltiplica lungo un percorso. Se più percorsi completi formano l’evento, si sommano i loro pesi perché gli esiti completi sono incompatibili.
:::

:::esempio{titolo="Due totali al dado con pesi diversi"}
Per due lanci indipendenti di un dado regolare, si hanno $36$ coppie equiprobabili. Il totale $7$ si ottiene dalle sei coppie $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$. Il totale $8$ parte da $(2,6)$ e termina in $(6,2)$, per cinque coppie. Le probabilità sono rispettivamente $\dfrac16$ e $\dfrac5{36}$. In un totale pari è possibile che le due coordinate coincidano, come in $(4,4)$, che rappresenta una sola coppia.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,1;2,6 6,2" punti="1,6;2,5;3,4;4,3;5,2;6,1;2,6;3,5;4,4;5,3;6,2" nomi="Primo,Secondo" titolo="La diagonale del totale 7 ha sei punti. Quella del totale 8 ne ha cinque."}
:::

## Indipendenza

:::definizione{#indipendenza titolo="Verificare l’indipendenza con l’intersezione"}
Due eventi $A$ e $B$ sono indipendenti se
$$
P(A\cap B)=P(A)P(B).
$$
Nelle estrazioni uniformi da un’urna con reimmissione la composizione viene ripristinata dopo ogni estrazione. Se l’urna ha due rosse su cinque, la probabilità che siano rosse entrambe è $\dfrac25\cdot\dfrac25=\dfrac4{25}$.
:::

:::esempio{titolo="Due domande sullo stesso numero"}
Si estrae uniformemente un numero intero da $1$ a $8$. Sia $A$ «numero pari» e $B$ «numero maggiore di $4$». Entrambi comprendono quattro esiti su otto. I valori comuni sono $6$ e $8$, quindi
$$
\begin{aligned}
P(A\cap B)&=\frac28=\frac14,\\[6pt]
P(A)P(B)&=\frac12\cdot\frac12=\frac14.
\end{aligned}
$$
La stessa proporzione di pari compare sotto e sopra $4$. L’indipendenza si può avere anche quando i due eventi provengono dal medesimo esperimento.

::venn{zone="ab" elementi="a:2,4;ab:6,8;b:5,7;u:1,3" nomi="A,B" universo=1 titolo="La parte comune contiene due degli otto esiti"}

Se due eventi incompatibili hanno probabilità positive, il loro prodotto è positivo mentre l’intersezione ha probabilità zero. L’equazione dell’indipendenza in quel caso non può valere.
:::

:::osservazione{titolo="Indipendenza e complementare di uno degli eventi"}
Quando $A$ e $B$ sono indipendenti, si può separare $A$ negli esiti con $B$ e in quelli con $B^c$. Sottraendo i primi si ottiene
$$
\begin{aligned}
P(A\cap B^c)&=P(A)-P(A\cap B)\\[6pt]
&=P(A)-P(A)P(B)\\[6pt]
&=P(A)(1-P(B))=P(A)P(B^c).
\end{aligned}
$$
Quindi anche $A$ e $B^c$ sono indipendenti. Per esempio, se le probabilità di successo di due prove indipendenti sono $\dfrac23$ e $\dfrac14$, la probabilità di riuscire solo nella prima è $\dfrac23\cdot\dfrac34=\dfrac12$. La formula aggiunge il fallimento della seconda come condizione, con peso complementare a quello del suo successo.
:::

## Estrazioni senza reimmissione

:::esempio{#dipendenza titolo="Aggiornare l’urna dopo il primo esito"}
In un’urna ci sono tre palline rosse $R$ e due blu $B$. Si fanno due estrazioni uniformi senza reimmissione. Dopo una prima rossa, restano due rosse e due blu. Dopo una prima blu, restano tre rosse e una blu. I pesi dei rami della seconda estrazione dipendono perciò dal primo esito.

::grafico{assi=0 xmin=-0.7 xmax=7.6 ymin=-4 ymax=4 linee="0,0 3,2 6,3;3,2 6,1;0,0 3,-2 6,-1;3,-2 6,-3" etichette="1.5,1.85,3/5;1.5,-1.85,2/5;4.5,3.1,2/4;4.5,0.9,2/4;4.5,-0.9,3/4;4.5,-3.1,1/4;6.6,3,RR;6.6,1,RB;6.6,-1,BR;6.6,-3,BB" titolo="I due nodi intermedi descrivono composizioni diverse dell’urna"}

| Percorso | Primo passo | Secondo passo | Probabilità del percorso |
|---|---|---|---|
| $RR$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $RB$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $BR$ | $\dfrac25$ | $\dfrac34$ | $\dfrac3{10}$ |
| $BB$ | $\dfrac25$ | $\dfrac14$ | $\dfrac1{10}$ |

Per l’evento «due colori diversi» si sommano $RB$ e $BR$, ottenendo $\dfrac35$. C’è anche un conteggio diretto. Numerando le cinque palline, le coppie ordinate possibili sono $5\cdot4=20$. Le coppie di colori diversi sono $3\cdot2+2\cdot3=12$. I due metodi concordano. La somma dei quattro pesi nella tabella vale $1$, perché i percorsi esauriscono tutte le possibilità.
:::

:::esempio{titolo="Il secondo colore quando il primo rimane sconosciuto"}
Siano $r$ le rosse e $b$ le blu, con almeno una pallina per colore e $n=r+b$. Prima di conoscere il primo colore, la probabilità della seconda rossa somma due rami, prima rossa e prima blu.
$$
\frac rn\cdot\frac{r-1}{n-1}
+\frac bn\cdot\frac r{n-1}
=\frac{r(r+b-1)}{n(n-1)}=\frac rn.
$$
La probabilità della seconda rossa presa da sola è uguale a quella della prima. Se invece si viene a sapere che la prima era rossa, resta il solo ramo con probabilità condizionata $\dfrac{r-1}{n-1}$. Con cinque rosse e tre blu, i due valori sono $\dfrac58$ e $\dfrac47$. Il risultato della prima estrazione incide quindi sul calcolo quando viene reso noto.
:::

## Probabilità condizionata

::::teorema{#condizionata titolo="Restringere l’insieme dei casi al dato disponibile"}
Se $P(B)>0$, la probabilità di $A$ sapendo che è avvenuto $B$ si chiama **condizionata** e si calcola con
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

:::dimostrazione
Nel modello finito equiprobabile, indichiamo con $N$ il numero totale di esiti, con $n_B$ gli esiti in $B$ e con $n_{AB}$ quelli in $A\cap B$. Il dato restringe il denominatore a $n_B$ e i favorevoli sono $n_{AB}$. Dividendo entrambi i termini del rapporto $\dfrac{n_{AB}}{n_B}$ per $N$ otteniamo il quoziente delle due probabilità. La stessa regola usa le somme dei pesi al posto dei conteggi quando gli esiti hanno probabilità diverse.
:::
::::

:::esempio{titolo="Il dato stabilisce quale totale usare"}
Fra $80$ studenti, $50$ hanno fatto una simulazione ($B$) e $40$ hanno superato la prova ($A$). Entrambe le condizioni valgono per $30$ di loro. Raccogliamo i conteggi in una tabella a doppia entrata.

| | Prova superata | Prova non superata | Totale |
|---|---:|---:|---:|
| Simulazione svolta | 30 | 20 | 50 |
| Simulazione non svolta | 10 | 20 | 30 |
| Totale | 40 | 40 | 80 |

Fra chi ha fatto la simulazione, la quota di promossi è $P(A\mid B)=\dfrac{30}{50}=\dfrac35$. Fra chi ha superato la prova, la quota di chi ha fatto la simulazione è $P(B\mid A)=\dfrac{30}{40}=\dfrac34$. Il numeratore è lo stesso, ma nel primo calcolo si legge una riga, nel secondo una colonna.

::venn{zone="ab" elementi="a:10;ab:30;b:20;u:20" nomi="A,B" universo=1 titolo="Entrambi i condizionamenti usano il centro ma cambiano la regione di riferimento"}

Dalla definizione si ricava $P(A\cap B)=P(B)P(A\mid B)$, il prodotto che si usa lungo un ramo quando la seconda probabilità dipende dal primo esito. Se $A$ e $B$ sono indipendenti e $P(B)>0$, si ottiene $P(A\mid B)=P(A)$.
:::

## Frequenze relative e confronto con il modello

:::definizione{#frequenza titolo="Probabilità teorica e dati osservati"}
Se $E$ si verifica $n_E$ volte in $N>0$ prove, la frequenza relativa osservata è $f_E=\dfrac{n_E}{N}$. Per esprimerla in percentuale si calcola $100f_E\%$. In un modello di moneta regolare la probabilità di testa è $\dfrac12$. Il numero di teste osservate è invece un dato che può variare ogni volta che si ripete l’esperimento.
:::

:::esempio{titolo="Frequenza cumulata dopo blocchi di venti lanci"}
Una sequenza di lanci dà $13$ teste dopo $20$ lanci e $51$ dopo $100$. Il grafico riporta i rapporti cumulati dopo cinque blocchi.

| Lanci totali | Teste totali | Frequenza cumulata |
|---:|---:|---:|
| 20 | 13 | $0{,}650$ |
| 40 | 23 | $0{,}575$ |
| 60 | 32 | $\dfrac8{15}$ |
| 80 | 42 | $0{,}525$ |
| 100 | 51 | $0{,}510$ |

::grafico{assi=0 xmin=-12 xmax=117 ymin=0.427 ymax=0.725 linee="12,0.69 12,0.46 105,0.46;20,0.46 20,0.454;40,0.46 40,0.454;60,0.46 60,0.454;80,0.46 80,0.454;100,0.46 100,0.454" segmenti="12,0.5,105,0.5" punti="20,0.65;40,0.575;60,0.533333333;80,0.525;100,0.51" etichette="17,0.440,20;37,0.440,40;57,0.440,60;77,0.440,80;96,0.440,100;-1,0.497,0,50;-1,0.547,0,55;-1,0.597,0,60;-1,0.647,0,65;12,0.711,Frequenza;104,0.473,Lanci" titolo="Punti osservati e linea orizzontale della probabilità teorica 0,5"}

I rapporti si avvicinano a $\dfrac12$ in questa sequenza. Il dato dopo $40$ prove include già i primi venti lanci. Per sapere quante teste sono uscite soltanto nel secondo blocco si sottraggono i conteggi cumulati, $23-13=10$. La frequenza del solo secondo blocco è quindi $\dfrac{10}{20}=\dfrac12$.
:::

:::esempio{titolo="Unire gruppi di numerosità diversa"}
Due classi lanciano la stessa moneta. La prima registra $8$ teste in $10$ lanci, la seconda $18$ in $30$. La frequenza complessiva è
$$
\frac{8+18}{10+30}=\frac{26}{40}=0{,}65.
$$
La media dei due rapporti con peso uguale sarebbe $0{,}70$. Ogni lancio deve pesare allo stesso modo, quindi il campione di trenta lanci pesa il triplo di quello da dieci. La frequenza complessiva è più vicina al rapporto del gruppo più numeroso.
:::
