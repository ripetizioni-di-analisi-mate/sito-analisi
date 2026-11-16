---
titolo: "Probabilità e dati per il TOLC-S"
sommario: "Spazi campionari, conteggi, eventi, estrazioni, frequenze e interpretazione di tabelle e grafici."
---

## Insiemi ed esiti

:::definizione{#insiemi-ed-esiti titolo="Esperimento, esito ed evento"}
Un esperimento aleatorio ha un risultato che non è conosciuto prima dell'esecuzione. Lo **spazio campionario** $\Omega$ raccoglie gli esiti possibili, descritti con il dettaglio necessario alla domanda. Un **evento** è un sottoinsieme di $\Omega$: si verifica quando l'esito osservato appartiene a quel sottoinsieme. Nel lancio di un dado, $\Omega=\{1,2,3,4,5,6\}$; l'evento «numero pari» è $\{2,4,6\}$. L'evento impossibile è l'insieme vuoto, mentre l'evento certo coincide con tutto lo spazio.

La probabilità assegna a ogni evento un numero fra zero e uno. Vale $P(\Omega)=1$ e $P(\varnothing)=0$. Un valore maggiore di uno non rappresenta una probabilità: può derivare, per esempio, dal conteggio ripetuto di esiti sovrapposti. Dire che un risultato è possibile non implica che sia probabile quanto gli altri.
:::

:::teorema{#equiprobabilita titolo="Quando si possono contare gli esiti"}
Se lo spazio contiene un numero finito di esiti **equiprobabili**, allora
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
Il simbolo $|A|$ indica il numero degli esiti appartenenti ad $A$. Per un dado regolare la probabilità di un numero pari è $\dfrac36=\dfrac12$. L'ipotesi di regolarità giustifica l'equiprobabilità delle facce; senza questa informazione il solo numero delle facce favorevoli non basta.

Anche la scelta degli esiti conta. Con due monete regolari indipendenti gli esiti ordinati sono $HH,HT,TH,TT$, dove $H$ significa testa e $T$ croce. Le quattro sequenze sono equiprobabili. I tre possibili numeri di teste, zero, uno e due, hanno invece probabilità $\dfrac14,\dfrac12,\dfrac14$: raggruppare esiti può produrre categorie con pesi differenti.
:::

## Conteggi ordinati

:::teorema{#conteggi titolo="Scelte successive e principio del prodotto"}
Se una scelta si compie in due fasi, con $m$ possibilità nella prima e $n$ nella seconda per ciascuna scelta iniziale, il numero complessivo è $mn$. Tre magliette e due pantaloni formano sei abbinamenti. Se le fasi sono più di due, si moltiplicano tutti i numeri di possibilità. Il principio conta oggetti o sequenze; non richiede che le scelte siano casuali.

Occorre controllare se una scelta modifica quelle successive. Un codice di tre lettere distinte scelte fra quattro lettere ha $4\cdot3\cdot2=24$ possibilità. Se le ripetizioni sono consentite, diventano $4^3=64$. In un numero di tre cifre, inoltre, la prima cifra non può essere zero: quel vincolo riguarda la prima posizione e va applicato prima della moltiplicazione.
:::

:::definizione{#permutazioni titolo="Ordine e permutazioni"}
Il fattoriale $n!$ è il prodotto degli interi positivi fino a $n$; per convenzione $0!=1$. Disporre in fila $n$ oggetti distinti dà $n!$ ordini. Se alcuni oggetti sono indistinguibili, le permutazioni interne fra copie identiche non generano disposizioni nuove. La parola MAMMA contiene tre M e due A: le sequenze diverse sono $\dfrac{5!}{3!2!}=10$.

Un vincolo di vicinanza può suggerire di trattare due persone come un blocco. Cinque persone in fila, con Ada e Bruno vicini, si ordinano disponendo quattro oggetti, il blocco e le altre tre persone. Gli ordini interni del blocco sono due, quindi si ottengono $2\cdot4!=48$ file. Il fattore due è necessario perché Ada può precedere oppure seguire Bruno.

Quando le possibilità appartengono a casi alternativi disgiunti, i conteggi si sommano. Un menu offre due primi e quattro secondi: scegliendo un solo piatto ci sono sei possibilità; scegliendo un primo e un secondo ce ne sono otto. Se è consentito scegliere un solo piatto oppure una coppia di piatti, le possibilità complessive sono quattordici. Prima di sommare si controlla che nessuna scelta appartenga a entrambi i casi. Prima di moltiplicare si controlla invece che siano necessarie tutte le fasi della scelta.
:::

## Scelte senza ordine

:::definizione{#combinazioni titolo="Combinazioni e sovraconteggio"}
Scegliere $k$ oggetti distinti fra $n$, senza assegnare ruoli e senza considerare l'ordine, dà
$$
\binom nk=\frac{n!}{k!(n-k)!},\qquad 0\le k\le n.
$$
Per scegliere due campioni fra sette, il conteggio ordinato $7\cdot6$ conta ogni coppia due volte. Dividendo per $2!$ si ottiene $\binom72=21$. Il denominatore $k!$ elimina in generale le diverse disposizioni dello stesso gruppo. Una commissione è normalmente un gruppo senza ordine; presidente e segretario sono invece ruoli distinti.

Le combinazioni servono anche a scegliere posizioni. Un percorso con tre passi verso destra e due verso l'alto ha cinque passi: scegliere le due posizioni dei passi verso l'alto determina tutto il percorso. I percorsi sono quindi $\binom52=10$. La rappresentazione tramite posizioni rende possibile il conteggio senza disegnare ogni itinerario.
:::

:::esempio{titolo="Esattamente due elementi di una categoria"}
Da tre oggetti rossi e tre blu, tutti distinti, si scelgono tre oggetti senza ordine. Per ottenerne esattamente due rossi si scelgono due dei tre rossi e uno dei tre blu:
$$
N=\binom32\binom31=3\cdot3=9.
$$
Il numero totale dei gruppi è $\binom63=20$. Se tutti i gruppi sono equiprobabili, la probabilità richiesta è $\dfrac9{20}$. La parola «esattamente» esclude sia un solo rosso sia tre rossi. In un conteggio con «almeno due» si dovrebbe aggiungere anche il gruppo formato da tutti i rossi.

Per quattro prove indipendenti con probabilità di successo $p$, ogni sequenza con tre successi e un insuccesso ha probabilità $p^3(1-p)$. Le posizioni possibili dell'insuccesso sono quattro, quindi la probabilità di esattamente tre successi è $4p^3(1-p)$. Se $p=\dfrac12$, diventa $\dfrac14$. Il conteggio delle posizioni non sostituisce il peso del singolo percorso: con una moneta non regolare le sequenze con numeri diversi di teste non hanno tutte la stessa probabilità.
:::

## Unione e complemento

:::definizione{#unione-e-complemento titolo="Operazioni tra eventi"}
L'unione $A\cup B$ comprende gli esiti che appartengono ad almeno uno dei due eventi. L'intersezione $A\cap B$ comprende quelli appartenenti a entrambi. Il complemento $A^c$ comprende gli esiti dello spazio campionario che non appartengono ad $A$. Nel linguaggio dei problemi, «A oppure B» è normalmente inclusivo: comprende anche il caso in cui accadono entrambi. «Uno solo dei due» esclude invece l'intersezione.

Due eventi sono **disgiunti** quando $A\cap B=\varnothing$. Nel lancio singolo di un dado, ottenere uno e ottenere due sono disgiunti; ottenere un numero pari e ottenere un numero maggiore di tre non lo sono, perché quattro e sei appartengono a entrambi.

::venn{tipo="due" zone="ab" titolo="L’intersezione contiene soltanto gli esiti comuni ai due eventi"}
:::

:::teorema{#regole-eventi titolo="Somma e complemento delle probabilità"}
Per ogni coppia di eventi valgono
$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Nella somma $P(A)+P(B)$ l'intersezione è contata due volte; sottrarla una volta restituisce il peso corretto. Per eventi disgiunti il termine sottratto è zero. La probabilità di «uno solo dei due» è invece $P(A)+P(B)-2P(A\cap B)$, perché bisogna eliminare completamente la parte comune.

Se $A\subseteq B$, la parte $B\setminus A$ ha probabilità non negativa, quindi $P(A)\le P(B)$. L’inclusione fra eventi impone così un confronto fra le loro probabilità.

Il complemento è utile per «almeno uno». Con due monete regolari indipendenti, l'unica sequenza senza teste è $TT$, con probabilità $\dfrac14$. La probabilità di almeno una testa è quindi $1-\dfrac14=\dfrac34$. Questo metodo considera insieme una e due teste senza duplicarle.
:::

## Indipendenza e condizionamento

:::definizione{#indipendenza-e-condizionamento titolo="Ridurre la popolazione di riferimento"}
La probabilità condizionata $P(A\mid B)$ risponde alla domanda: quanto è probabile $A$, sapendo che $B$ si è verificato? Se $P(B)>0$,
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Si conserva soltanto la parte dello spazio appartenente a $B$ e si ridimensionano i suoi pesi fino a un totale di uno. Sapendo che il risultato di un dado regolare è pari, restano $2,4,6$, ancora equiprobabili. La probabilità condizionata di sei è dunque $\dfrac13$. Il denominatore non è più il numero complessivo di facce.

Se $P(B)=0$, questa formula non definisce la probabilità condizionata: non si può dividere per zero. Inoltre $P(A\mid B)$ e $P(B\mid A)$ hanno denominatori diversi e non sono generalmente uguali. Leggere con precisione l'informazione introdotta da «sapendo che» determina quale evento va al denominatore.
:::

:::definizione{#indipendenza titolo="Indipendenza e incompatibilità"}
Gli eventi $A$ e $B$ sono indipendenti quando
$$
P(A\cap B)=P(A)P(B).
$$
Se $P(B)>0$, ciò equivale a $P(A\mid B)=P(A)$: conoscere $B$ non cambia la probabilità di $A$. L'indipendenza va data dal modello oppure verificata attraverso i dati. Avere la stessa probabilità non rende due eventi indipendenti.

Eventi disgiunti con probabilità positive non sono indipendenti. La loro intersezione ha probabilità zero, mentre il prodotto delle probabilità è positivo. Sapere che uno è accaduto esclude l'altro. Per due lanci indipendenti di una moneta, invece, il risultato del primo non cambia la distribuzione del secondo. Anche dopo molte teste consecutive la probabilità della prossima testa resta un mezzo nel modello di moneta regolare e lanci indipendenti.

Condizionare su un terzo evento può invece modificare l’indipendenza: nei lanci di due monete, selezionare soltanto i casi con almeno una testa elimina TT e cambia le relazioni fra i risultati delle due posizioni.

L'indipendenza si conserva passando ai complementi. Se due dispositivi funzionano indipendentemente con probabilità $\dfrac45$ e $\dfrac34$, la probabilità che entrambi non funzionino è $\dfrac15\cdot\dfrac14=\dfrac1{20}$. La probabilità che almeno uno funzioni è perciò $\dfrac{19}{20}$. Se invece i dispositivi condividono una causa di guasto e non è data l'indipendenza, moltiplicare le due probabilità di guasto non è giustificato. Il calcolo dipende dalle relazioni fra gli eventi, oltre che dalle loro singole probabilità.
:::

## Estrazioni e diagrammi ad albero

:::teorema{#estrazioni-e-diagrammi-ad-albero titolo="Probabilità lungo un percorso"}
Dalla definizione di condizionamento segue
$$
P(A\cap B)=P(A)P(B\mid A),
$$
quando $P(A)>0$. Il prodotto descrive il verificarsi di entrambe le condizioni, anche senza un ordine temporale fra esse. Un diagramma ad albero organizza queste possibilità: ogni nodo rappresenta ciò che è già noto e i rami successivi riportano probabilità condizionate a quella storia. Le probabilità dei rami uscenti da uno stesso nodo sommano a uno. Si moltiplica lungo ciascun percorso e si sommano percorsi alternativi disgiunti che realizzano l'evento richiesto.

Con tre palline rosse e due blu, estrarre due rosse senza reinserimento ha probabilità $\dfrac35\cdot\dfrac24=\dfrac3{10}$. La prima pallina rossa lascia due rosse fra quattro palline. Reinserendo e mescolando ogni volta, con estrazioni indipendenti uniformi, la probabilità diventa $\dfrac35\cdot\dfrac35=\dfrac9{25}$. Il reinserimento modifica il modello, quindi cambia il secondo fattore.
:::

:::esempio{#probabilita-totale titolo="Somma di percorsi e informazione inversa"}
Si sceglie con uguale probabilità una di due urne: la prima contiene tre rosse e una blu, la seconda una rossa e tre blu. Poi si estrae uniformemente una pallina dall'urna scelta. I due percorsi che producono il rosso hanno probabilità
$$
P(U_1\cap R)=\frac12\cdot\frac34=\frac38,\qquad
P(U_2\cap R)=\frac12\cdot\frac14=\frac18.
$$
Quindi $P(R)=\dfrac38+\dfrac18=\dfrac12$. Se si osserva una pallina rossa, la probabilità che provenga dalla prima urna è $\dfrac{\frac38}{\frac12}=\dfrac34$. Il rosso è compatibile con entrambe le urne, ma rende più probabile la prima. La divisione confronta il percorso desiderato con tutti i percorsi che producono l'osservazione.
:::

## Variabili e frequenze

:::definizione{#variabili titolo="Che cosa viene osservato"}
Una variabile qualitativa descrive una categoria, come il colore o la specie. Una variabile quantitativa descrive una quantità. È discreta quando i valori derivano da un conteggio, come il numero di libri presi in prestito; è continua nel modello di una misura, come massa o durata. Lo strumento può arrotondare una misura senza trasformare la grandezza fisica in un conteggio.

Un codice numerico assegnato a una specie resta un’etichetta qualitativa. Per categorie ordinate, come basso, medio e alto, si può individuare una mediana; una media aritmetica richiede invece valori quantitativi, non codici arbitrari.

La popolazione è l'insieme delle unità a cui si riferisce l'indagine; il campione è il gruppo effettivamente osservato. Ogni frequenza va associata a questa base. «Dodici studenti» è un conteggio, mentre «il quaranta per cento» è una proporzione che richiede di conoscere quanti studenti siano stati considerati.
:::

:::definizione{#frequenze titolo="Frequenze assolute, relative e cumulate"}
La frequenza assoluta $n_i$ conta quante volte compare un valore o una categoria. Se il totale è $N>0$, la frequenza relativa è $f_i=\dfrac{n_i}{N}$. Per categorie disgiunte che coprono tutte le osservazioni, le frequenze assolute sommano a $N$ e quelle relative a uno. Con risposte multiple allo stesso questionario, una persona può appartenere a più categorie: la somma dei conteggi può allora superare il numero dei rispondenti.

Per dati ordinati, la frequenza cumulata fino a un valore conta tutte le osservazioni non superiori a quel valore. Se i cumulati fino a due e fino a tre sono rispettivamente undici e diciannove, la frequenza del valore tre è $19-11=8$. Un cumulato non può diminuire quando la soglia aumenta. L'ultimo cumulato coincide con il totale, se comprende tutti i valori osservati.

Le frequenze permettono di individuare posizioni senza espandere tutta la lista. Con frequenze cinque, sette, tre e uno per i valori zero, uno, due e tre, ci sono sedici osservazioni. Le posizioni ottava e nona determinano la mediana. Le prime cinque osservazioni valgono zero e quelle dalla sesta alla dodicesima valgono uno, quindi entrambe le posizioni centrali contengono uno. La mediana è uno, benché la media non coincida necessariamente con questo valore. Le frequenze cumulate indicano precisamente in quale gruppo cade ogni posizione.
:::

## Media, mediana e variabili

:::definizione{#media-mediana-e-variabili titolo="Media e pesi"}
La media aritmetica di $N$ dati è la loro somma divisa per $N$. Se i valori $x_i$ hanno frequenze $n_i$,
$$
\bar x=\frac{\sum_i n_ix_i}{\sum_i n_i}.
$$
La frequenza indica quante volte ciascun valore contribuisce alla somma. Per unire due gruppi si pesano quindi le medie con le dimensioni dei gruppi: dieci risultati di media diciotto e trenta di media ventisei danno $\dfrac{10\cdot18+30\cdot26}{40}=24$. La media semplice delle due medie è garantita corretta per gruppi della stessa numerosità. Lo è anche, indipendentemente dalle numerosità, se le due medie coincidono.

La media conserva l'unità dei dati e deve stare fra il minimo e il massimo. Conoscere la media e il numero dei dati permette di ricostruire la somma, ma non i singoli valori né, in generale, la mediana. Distribuzioni differenti possono avere la stessa media.
:::

:::definizione{#mediana-moda titolo="Posizione centrale e dispersione"}
Per trovare la mediana si ordinano tutti i dati, comprese le ripetizioni. Se $N$ è dispari, si prende il dato in posizione $\dfrac{N+1}{2}$; se è pari, si fa la media dei dati in posizione $\dfrac N2$ e $\dfrac N2+1$. La moda è un valore con frequenza massima e può non essere unica. Il campo di variazione è la differenza fra massimo e minimo e descrive una semplice misura di dispersione.

Almeno metà delle osservazioni ha valore non superiore alla mediana e almeno metà ha valore non inferiore. Le mediane dei singoli gruppi non determinano, in generale, la mediana della loro unione.

Nei dati $1,2,3,4,100$, la mediana è tre e la media è ventidue. Sostituendo cento con duecento, la mediana resta tre mentre la media aumenta di venti. Un valore estremo modifica fortemente la somma, ma può lasciare immutata la posizione centrale. Aggiungere una costante a ogni dato aumenta media e mediana della stessa costante, lasciando invariato il campo di variazione.
:::

## Tabelle e percentuali

:::esempio{#tabelle-e-percentuali titolo="Cella, margine e denominatore"}
Una tabella registra quaranta iscritti a due corsi.

| Corso | Presenti | Assenti | Totale |
| --- | ---: | ---: | ---: |
| A | 12 | 8 | 20 |
| B | 9 | 11 | 20 |
| Totale | 21 | 19 | 40 |

Scegliendo uniformemente un iscritto, la probabilità di essere presente e appartenere a B è $\dfrac9{40}$. Sapendo che è presente, la probabilità di B è $\dfrac9{21}=\dfrac37$. Sapendo invece che appartiene a B, la probabilità di essere presente è $\dfrac9{20}$. Il numeratore resta nove, mentre il riferimento cambia con la domanda. I totali marginali riuniscono una riga o una colonna senza imporre l'altra caratteristica.
:::

:::osservazione{#percentuali-dati titolo="Percentuali, punti e arrotondamenti"}
Una frequenza relativa si trasforma in percentuale moltiplicandola per cento. Passare dal venti al venticinque per cento significa aumentare di cinque **punti percentuali**; l'aumento relativo è invece $\dfrac{25-20}{20}=25\%$. Le due misure rispondono a domande differenti.

Se si riuniscono gruppi di diversa dimensione, si sommano prima i conteggi e poi si divide per il totale complessivo. Inoltre una percentuale pubblicata può essere arrotondata. Dieci persone su trenta sono il $33{,}\overline3\%$, che arrotondato all'intero diventa $33\%$: non occorre che il prodotto $30\cdot0{,}33$ sia intero. La precisione dichiarata determina quali conteggi siano compatibili con il dato.
:::

## Grafici e interpretazione

:::definizione{#grafici titolo="Barre, settori e istogrammi"}
In un grafico a barre le altezze rappresentano frequenze o altre quantità indicate sull'asse verticale. La scala e l'origine dell'asse vanno lette prima di confrontare visivamente le barre. Un diagramma a settori rappresenta parti di un totale: un settore di ampiezza $\theta$ gradi corrisponde alla frazione $\dfrac{\theta}{360}$ del totale.

In un istogramma con classi di ampiezza diversa, la frequenza è rappresentata dall'area del rettangolo. L'altezza è una densità: occorre moltiplicarla per l'ampiezza della classe. Due rettangoli con basi due e tre e altezze sei e quattro hanno entrambi area dodici e quindi la stessa frequenza. Confrontare soltanto le altezze darebbe una conclusione errata.

Le classi devono anche specificare l'inclusione degli estremi. Negli intervalli $[0,2)$ e $[2,5)$, il valore due appartiene soltanto alla seconda classe: ogni osservazione viene contata una volta. Se le aree rappresentano frequenze relative, la loro somma è uno; se rappresentano frequenze assolute, la somma è il numero delle osservazioni. Un grafico che raggruppa i dati in intervalli perde il dettaglio dei valori interni: può permettere di contare quante osservazioni cadono in una classe, senza determinare la loro media esatta.

::grafico{poligoni="0,0 2,0 2,6 0,6;2,0 5,0 5,4 2,4" xmin=-0.5 xmax=5.5 ymin=-0.5 ymax=7 nomi="x,d" titolo="Classi di ampiezza due e tre: aree uguali nonostante le altezze diverse"}
:::

:::osservazione{#campioni titolo="Che cosa permettono di concludere i dati"}
Una frequenza osservata descrive il campione raccolto. Non coincide necessariamente con la probabilità teorica del modello e non garantisce la frequenza della prossima prova. Sette teste in dieci lanci non rendono la probabilità della prossima testa uguale a sette decimi se il modello specifica lanci regolari indipendenti.

Per estendere un risultato alla popolazione serve considerare come è stato scelto il campione. Un sondaggio a partecipazione volontaria può attirare soprattutto persone già interessate all'argomento; aumentare il numero di risposte non elimina automaticamente questo sbilanciamento. Se mancano alcune risposte, la quota sull’intera popolazione può avere soltanto limiti: si considerano i casi estremi in cui tutti i non rispondenti sono contrari oppure favorevoli. Inoltre un confronto fra tassi può invertirsi aggregando sottogruppi di dimensioni molto diverse; il totale incorpora anche questi pesi. Infine una relazione osservata tra due variabili non dimostra da sola che una causi l'altra: potrebbero intervenire altre caratteristiche comuni. Questi limiti riguardano l'interpretazione dei dati, anche quando i calcoli numerici sono corretti.
:::
