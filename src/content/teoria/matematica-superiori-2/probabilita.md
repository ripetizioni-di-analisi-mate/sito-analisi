---
titolo: "Probabilità elementare"
sommario: "Esiti ed eventi, probabilità classica, complementare, unione, prove successive, indipendenza e frequenze relative."
---

## Esperimenti ed eventi

:::definizione{#eventi titolo="Spazio degli esiti"}
Un **esperimento aleatorio** ha un risultato che non si conosce prima della prova. Lo **spazio degli esiti** $\Omega$ raccoglie tutti i risultati elementari possibili. Un **evento** è un insieme di tali esiti.

Nel lancio di un dado regolare, $\Omega=\{1,2,3,4,5,6\}$. L'evento «numero pari» è $\{2,4,6\}$. L'evento certo è tutto $\Omega$; quello impossibile è l'insieme vuoto.

Una probabilità è compresa fra zero e uno. Zero corrisponde all'evento impossibile e uno all'evento certo nel modello finito equiprobabile usato qui.
:::

## Probabilità classica

:::teorema{#classica titolo="Casi favorevoli e possibili"}
Se gli esiti sono in numero finito e tutti equiprobabili,
$$
P(E)=\frac{\text{numero di esiti favorevoli}}{\text{numero di esiti possibili}}.
$$
Per un dado regolare, la probabilità di un numero maggiore di quattro è $\dfrac26=\dfrac13$.

L'ipotesi di equiprobabilità va verificata nel modello. Una moneta truccata non assegna necessariamente probabilità uguali ai due lati. Un'urna con palline indistinguibili al tatto e scelta casuale uniforme è invece un modello in cui ogni singola pallina è equiprobabile.

I colori non sono equiprobabili se i numeri di palline dei due colori sono diversi.
:::

## Il complementare

:::teorema{#complementare titolo="L’evento che non si verifica"}
Il **complementare** $\overline E$ contiene tutti gli esiti che non appartengono a $E$. Poiché i due eventi sono disgiunti e insieme formano lo spazio degli esiti,
$$
P(\overline E)=1-P(E).
$$
Se una scatola contiene tre pezzi difettosi e diciassette integri, scegliendo uniformemente un pezzo la probabilità che sia integro è $1-\dfrac3{20}=\dfrac{17}{20}$.

Il complementare è utile per «almeno uno». In tre lanci indipendenti di una moneta regolare, la probabilità di almeno una testa è $1-\dfrac18=\dfrac78$, perché l'unico caso contrario è avere tre croci.
:::

## Unione e intersezione

:::teorema{#unione titolo="Conteggi senza doppioni"}
L'unione $A\cup B$ significa che si verifica almeno uno dei due eventi. L'intersezione $A\cap B$ significa che si verificano entrambi. Vale
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Il contributo dell'intersezione viene sottratto perché era stato sommato due volte. Se gli eventi sono **incompatibili**, l'intersezione è vuota e si sommano direttamente le probabilità.

Nel dado, «pari» e «maggiore di quattro» hanno intersezione $\{6\}$. L'unione è $\{2,4,5,6\}$ e ha probabilità $\dfrac46=\dfrac23$.

::venn{zone="a,ab,b" elementi="a:2,4;ab:6;b:5;u:1,3" nomi="Pari,>4" universo=1 titolo="L’unione comprende entrambi gli eventi e conta $6$ una sola volta"}
:::

## Esperimenti composti

:::teorema{#composti titolo="Coppie ordinate e alberi"}
In due lanci di un dado distinguibile, un esito è una coppia ordinata. Le coppie possibili sono $6\cdot6=36$ e sono equiprobabili se i dadi sono regolari e indipendenti.

La somma sette si ottiene con sei coppie, da $(1;6)$ a $(6;1)$, e ha probabilità $\dfrac16$. La somma due ha una sola coppia e probabilità $\dfrac1{36}$. Le undici somme possibili non sono quindi equiprobabili.

Un diagramma ad albero rappresenta ogni prova con un livello. Il prodotto delle probabilità lungo un percorso dà la probabilità di quel percorso; per eventi formati da percorsi distinti si sommano i risultati.
:::

## Indipendenza e reimmissione

:::definizione{#indipendenza titolo="Probabilità che restano uguali"}
Due eventi sono **indipendenti** quando conoscere l'esito di uno non modifica la probabilità dell'altro. In questo caso
$$
P(A\cap B)=P(A)P(B).
$$
Con un'urna contenente due rosse e tre blu, due estrazioni con reimmissione hanno probabilità di due rosse pari a $\dfrac25\cdot\dfrac25=\dfrac4{25}$.

Eventi incompatibili e indipendenti esprimono proprietà diverse. Due eventi incompatibili con probabilità positive non sono indipendenti, perché sapere che uno si verifica rende impossibile l'altro.
:::

## Senza reimmissione

:::teorema{#dipendenza titolo="Composizione aggiornata"}
Senza reimmissione il risultato della prima estrazione modifica l'urna. La probabilità della seconda estrazione va calcolata sui casi rimasti.

Con due rosse e tre blu, la probabilità di due rosse è
$$
\frac25\cdot\frac14=\frac1{10}.
$$
Dopo una prima rossa restano una rossa e tre blu. Per ottenere una rossa e una blu in qualsiasi ordine si sommano invece i percorsi rosso-blu e blu-rosso:
$$
\frac25\frac34+\frac35\frac24=\frac35.
$$
I due percorsi sono incompatibili e ciascuno usa la composizione corretta dopo la prima estrazione.
:::

## Frequenza e probabilità

:::definizione{#frequenza titolo="Dati sperimentali"}
Se un evento si verifica $n_E$ volte in $N>0$ prove, la sua **frequenza relativa** osservata è $f_E=\dfrac{n_E}{N}$. È un numero compreso tra zero e uno.

Se una moneta dà testa $47$ volte in $100$ prove, la frequenza è $0{,}47$. Nel modello di moneta regolare la probabilità teorica resta $0{,}5$. I dati di un numero finito di prove possono differire dal valore teorico.

La frequenza percentuale si ottiene moltiplicando per cento. Una frequenza di $0{,}35$ corrisponde al $35\%$. Nel descrivere un esperimento si distingue il modello teorico dalle osservazioni raccolte.
:::
