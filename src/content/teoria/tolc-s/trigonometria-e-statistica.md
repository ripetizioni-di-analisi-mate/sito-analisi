---
titolo: Trigonometria, statistica e combinatoria
sommario: Angoli e triangoli, identità ed equazioni goniometriche, frequenze e indicatori statistici, conteggi con e senza ordine.
---

## Angoli, radianti e circonferenza

:::definizione{#radianti titolo="Misura di un angolo in radianti"}
La misura in **radianti** di un angolo al centro è il rapporto fra la lunghezza dell'arco che esso individua e il raggio della circonferenza. Se l'arco misura $s$ e il raggio misura $r>0$, allora $\theta=\dfrac sr$. Le due lunghezze devono essere espresse nella stessa unità. Un giro completo ha arco $2\pi r$, quindi misura $2\pi$ radianti; mezzo giro misura $\pi$ radianti.

La conversione fra gradi e radianti deriva da $180^\circ=\pi$ radianti. Per convertire una misura in gradi si moltiplica il suo valore per $\dfrac{\pi}{180}$; nella conversione inversa si moltiplica per $\dfrac{180}{\pi}$. Ad esempio $150^\circ=\dfrac{5\pi}{6}$ radianti. Un radiante non coincide con un grado: le due misure usano unità diverse per descrivere la stessa apertura.
:::

:::esempio{titolo="Arco e rotazione"}
Un arco di raggio $6\,\mathrm{cm}$ che sottende $\dfrac{2\pi}{3}$ radianti ha lunghezza $s=r\theta=4\pi\,\mathrm{cm}$. Se si conoscono invece arco e raggio, si usa il rapporto $\dfrac sr$. La formula $s=r\theta$ richiede la misura in radianti; inserire il numero dei gradi senza conversione produrrebbe un risultato diverso.

La stessa frazione di giro determina l’area del settore: $\mathcal A=\dfrac{\theta}{2\pi}\pi r^2=\dfrac12r^2\theta$, per $0\le\theta\le2\pi$, con l’angolo misurato in radianti. Questa area è diversa dalla lunghezza dell’arco e ha unità al quadrato.

Gli angoli orientati si misurano positivamente in senso antiorario. Due angoli che differiscono di un multiplo intero di $2\pi$ hanno lo stesso lato finale. Per esempio $-\dfrac{5\pi}{4}$ e $\dfrac{3\pi}{4}$ individuano lo stesso punto sulla circonferenza, perché differiscono di un giro. La rotazione compiuta può essere diversa pur essendo uguale la posizione finale.
:::

:::definizione{#circonferenza-goniometrica titolo="Coordinate sulla circonferenza unitaria"}
Sulla circonferenza di centro nell'origine e raggio $1$, l'angolo $\theta$ individua il punto $P=(\cos\theta,\sin\theta)$. Il coseno è quindi l'ascissa, il seno l'ordinata. Entrambi sono compresi fra $-1$ e $1$. Questa rappresentazione estende le definizioni del triangolo rettangolo a qualunque angolo orientato.

::grafico{curve="cos(t),sin(t),0,6.2831853072" legenda=0 uguale=1 xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 punti="0.5,0.8660254038,pieno,P" segmenti="0,0,0.5,0.8660254038;0.5,0,0.5,0.8660254038;0,0.8660254038,0.5,0.8660254038" titolo="Le proiezioni del punto P forniscono coseno e seno dell'angolo."}
:::

## Valori notevoli, segni e simmetrie

:::teorema{#valori-notevoli titolo="Valori degli angoli notevoli"}
I triangoli rettangoli isosceli e quelli ottenuti dividendo a metà un triangolo equilatero forniscono i valori seguenti.

| Angolo | Seno | Coseno | Tangente |
| --- | --- | --- | --- |
| $0$ | $0$ | $1$ | $0$ |
| $\dfrac\pi6$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt3}{3}$ |
| $\dfrac\pi4$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $\dfrac\pi3$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |
| $\dfrac\pi2$ | $1$ | $0$ | non definita |

Nel triangolo isoscele con cateti unitari l'ipotenusa è $\sqrt2$, quindi seno e coseno di $\dfrac\pi4$ valgono $\dfrac1{\sqrt2}=\dfrac{\sqrt2}{2}$. Nel triangolo equilatero di lato $2$, l'altezza vale $\sqrt3$ e il semilato vale $1$; dividendo per l'ipotenusa $2$ si ricavano i valori di $30^\circ$ e $60^\circ$.
:::

:::definizione{#tangente titolo="Tangente e quadranti"}
La tangente è $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$ ed è definita quando $\cos\theta\ne0$, cioè per $\theta\ne\dfrac\pi2+k\pi$, con $k\in\mathbb Z$. Nel primo quadrante seno e coseno sono positivi; nel secondo il seno è positivo e il coseno negativo; nel terzo entrambi sono negativi; nel quarto il seno è negativo e il coseno positivo. La tangente è positiva nei quadranti primo e terzo, perché le due coordinate hanno lo stesso segno.

Un angolo nel secondo quadrante con angolo di riferimento $\dfrac\pi6$ è $\dfrac{5\pi}{6}$. Il seno vale $\dfrac12$, mentre il coseno vale $-\dfrac{\sqrt3}{2}$. Il riferimento determina il valore assoluto, e il quadrante determina il segno.
:::

:::teorema{#simmetrie titolo="Angoli associati"}
Le simmetrie della circonferenza danno $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, $\sin(\pi-x)=\sin x$ e $\cos(\pi-x)=-\cos x$. Il seno di un angolo coincide inoltre con il coseno del suo complementare: $\sin x=\cos\left(\dfrac\pi2-x\right)$. Le identità consentono di ricondurre angoli diversi a valori già noti, preservando il segno corretto.
:::

## Identità e formule di addizione

::::teorema{#identita-fondamentale titolo="Identità fondamentale"}
Per ogni reale $x$ vale
$$
\sin^2x+\cos^2x=1.
$$
:::dimostrazione
Il punto di coordinate $(\cos x,\sin x)$ appartiene alla circonferenza unitaria. La sua equazione è $X^2+Y^2=1$, quindi la sostituzione delle coordinate fornisce l'identità. Essa esprime il teorema di Pitagora per le due proiezioni del raggio.
:::
::::

:::esempio{titolo="Ricavare il coseno scegliendo il segno"}
Se $\sin\alpha=\dfrac35$, l'identità dà $\cos^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$. Si ottiene quindi $\cos\alpha=\pm\dfrac45$. Se $\alpha$ è nel secondo quadrante, il coseno è negativo e vale $-\dfrac45$. Il dato sul seno, senza quadrante o altra restrizione, non basta a scegliere uno dei due segni.

Dividendo l'identità fondamentale per $\cos^2x$, quando $\cos x\ne0$, si ottiene $1+\tan^2x=\dfrac1{\cos^2x}$. La condizione sul denominatore va mantenuta anche dopo una semplificazione. Ad esempio $\tan x\cos x=\sin x$ è valida soltanto dove la tangente iniziale esiste.
:::

:::teorema{#addizione-duplicazione titolo="Addizione, differenza e duplicazione"}
Per ogni coppia di angoli valgono
$$
\sin(a+b)=\sin a\cos b+\cos a\sin b,
$$
$$
\cos(a+b)=\cos a\cos b-\sin a\sin b.
$$
Sostituendo $-b$ a $b$ si ricavano le formule della differenza. Ponendo $a=b=x$ si ottiene
$$
\sin(2x)=2\sin x\cos x,
$$
$$
\cos(2x)=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1.
$$
Queste relazioni derivano dalla composizione di due rotazioni della circonferenza. Permettono, per esempio, di calcolare $\cos15^\circ$ scrivendo $15^\circ=45^\circ-30^\circ$. Il risultato è $\dfrac{\sqrt6+\sqrt2}{4}$.

Dalla duplicazione si ricavano anche $\sin^2x=\dfrac{1-\cos2x}{2}$ e $\cos^2x=\dfrac{1+\cos2x}{2}$. Per passare dai quadrati ai valori di seno e coseno serve ancora il segno determinato dall'angolo.
:::

## Grafici, periodicità ed equazioni

:::definizione{#periodicita titolo="Periodo e ampiezza"}
Una funzione è periodica se esiste $T>0$ tale che $f(x+T)=f(x)$ per ogni argomento del dominio, con il dominio conservato dalla traslazione. Il più piccolo di questi numeri, quando esiste, è il **periodo fondamentale**. Seno e coseno hanno periodo fondamentale $2\pi$, la tangente ha periodo $\pi$.

Per $A\ne0$ e $b\ne0$, la funzione $A\sin(bx)+c$ ha periodo $\dfrac{2\pi}{|b|}$ e immagine $[c-|A|,c+|A|]$. Il numero $|A|$ è l'ampiezza dell'oscillazione rispetto al livello $c$. La moltiplicazione dell'argomento cambia il periodo, mentre una traslazione verticale cambia il livello medio senza alterarlo.

::grafico{f="sin(x);cos(x)" xmin=-1 xmax=7 ymin=-1.5 ymax=1.5 titolo="Seno e coseno oscillano fra -1 e 1 e ripetono i valori dopo un giro."}
:::

:::esempio{#equazioni-goniometriche titolo="Equazioni su un intervallo"}
L'equazione $\sin x=\dfrac12$ ha, in un giro, le soluzioni $\dfrac\pi6$ e $\dfrac{5\pi}{6}$. Tutte le soluzioni reali si scrivono $x=\dfrac\pi6+2k\pi$ oppure $x=\dfrac{5\pi}{6}+2k\pi$, con $k\in\mathbb Z$. Un intervallo assegnato seleziona quali valori mantenere.

Per $\sin(2x)=0$ su $[0,\pi)$ si ha $0\le2x<2\pi$. Gli zeri ammessi dell'argomento sono $0$ e $\pi$, quindi $x=0$ oppure $x=\dfrac\pi2$. L'estremo $x=\pi$ è escluso dal testo anche se annullerebbe il seno. Trasformare correttamente l'intervallo evita di perdere o aggiungere soluzioni.
:::

:::esempio{#disequazioni-goniometriche titolo="Confronti attraverso la circonferenza"}
Su $[0,\pi]$, la condizione $\sin x\ge\dfrac{\sqrt2}{2}$ chiede che l'ordinata del punto goniometrico sia almeno quella soglia. L'uguaglianza si verifica in $\dfrac\pi4$ e $\dfrac{3\pi}{4}$; l'arco superiore fra i due punti soddisfa il confronto. L'insieme completo è $\left[\dfrac\pi4,\dfrac{3\pi}{4}\right]$. Con un confronto stretto si escluderebbero i due estremi.
:::

## Triangoli e misure indirette

:::definizione{#triangolo-rettangolo titolo="Rapporti nel triangolo rettangolo"}
Per un angolo acuto $\alpha$, il seno è il rapporto fra cateto opposto e ipotenusa, il coseno è il rapporto fra cateto adiacente e ipotenusa, la tangente è il rapporto fra cateto opposto e cateto adiacente. I nomi opposto e adiacente dipendono dall'angolo scelto, mentre l'ipotenusa è sempre il lato opposto all'angolo retto.

Una rampa lunga $8\,\mathrm m$ e inclinata di $30^\circ$ rispetto all'orizzontale supera un dislivello di $8\sin30^\circ=4\,\mathrm m$. La lunghezza lungo la pendenza è l'ipotenusa; la distanza orizzontale è invece $8\cos30^\circ=4\sqrt3\,\mathrm m$. Distinguere queste due misure determina quale rapporto usare.

::grafico{linee="0,0 6.9282032303,0 6.9282032303,4 0,0" assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 etichette="3.2,-0.5,orizzontale;7.3,2,4 m;2.9,2.7,8 m;1.2,0.35,30°" titolo="Rampa, distanza orizzontale e dislivello formano un triangolo rettangolo."}
:::

:::teorema{#teoremi-triangoli titolo="Teoremi dei seni e del coseno"}
In un triangolo qualsiasi, siano $a,b,c$ i lati opposti agli angoli $\alpha,\beta,\gamma$. Valgono
$$
\frac a{\sin\alpha}=\frac b{\sin\beta}=\frac c{\sin\gamma},
\qquad c^2=a^2+b^2-2ab\cos\gamma.
$$
Il teorema dei seni collega lati e angoli opposti; quello del coseno usa due lati e l'angolo *compreso* fra essi. Le formule si ricavano tracciando un'altezza e applicando i rapporti del triangolo rettangolo e Pitagora. Quando $\gamma=90^\circ$, il coseno è zero e si ritrova $c^2=a^2+b^2$.

Con due lati e un angolo non compreso, il teorema dei seni può produrre due angoli supplementari. Ciascuno è ammissibile soltanto se, sommato all’angolo già noto, lascia un terzo angolo positivo. I dati non garantiscono quindi sempre un unico triangolo.

L'area vale inoltre $\dfrac12ab\sin\gamma$, perché l'altezza relativa alla base $a$ è $b\sin\gamma$. Con lati $6$ e $8$ e angolo compreso di $30^\circ$, l'area è $12$. Le unità dell'area sono il quadrato di quelle usate per le lunghezze.
:::

## Dati, frequenze e rappresentazioni

:::definizione{#frequenze titolo="Variabili e frequenze"}
Una variabile qualitativa descrive categorie, come il tipo di mezzo usato; una variabile quantitativa descrive un conteggio o una misura. Un conteggio è quantitativo discreto, mentre una misura come una durata è normalmente trattata come quantitativa continua. La **frequenza assoluta** $n_i$ conta quante osservazioni appartengono alla modalità $i$. La frequenza relativa è $f_i=\dfrac{n_i}{N}$, dove $N$ è il totale.

Se le modalità esauriscono i casi e non si sovrappongono, le frequenze assolute sommano a $N$ e quelle relative sommano a $1$. La frequenza percentuale è $100f_i\%$. Con $12$ difettosi su $80$ oggetti, $f=\dfrac{12}{80}=0{,}15$, quindi la percentuale è $15\%$. Il denominatore deve corrispondere al gruppo cui si riferisce il quesito.
:::

:::definizione{#frequenze-cumulative titolo="Frequenze cumulative"}
Per valori ordinabili, la frequenza cumulativa fino a un valore conta le osservazioni non superiori a quel valore. Se le cumulative fino a $2$ e fino a $3$ sono $13$ e $18$, i dati uguali a $3$ sono $18-13=5$. Una cumulativa è non decrescente, perché aggiungere modalità non può ridurre il conteggio. L'ultima cumulativa coincide con il totale.
:::

:::definizione{#istogrammi titolo="Diagrammi e istogrammi"}
In un diagramma a torta, una modalità di frequenza relativa $f$ occupa un angolo di $360f$ gradi. Nei diagrammi a barre di categorie, le altezze rappresentano le frequenze. In un istogramma con classi di ampiezze diverse, la frequenza è invece rappresentata dall'**area** del rettangolo. L'altezza è una densità, pari alla frequenza divisa per l'ampiezza della classe.

Una classe larga $2$ con densità $8$ contiene $16$ osservazioni; una classe larga $5$ con densità $4$ ne contiene $20$. Il rettangolo più alto può quindi rappresentare meno osservazioni. Le convenzioni sugli estremi, come $[0,10)$ e $[10,20)$, assegnano ogni dato a una sola classe: il valore $10$ appartiene alla seconda.

::grafico{poligoni="0,0 2,0 2,8 0,8;2,0 7,0 7,4 2,4;7,0 11,0 11,3 7,3" xmin=-1 xmax=12 ymin=-1 ymax=9 nomi="x,d" titolo="Le aree dei rettangoli sono 16, 20 e 12; le altezze sono densità."}
:::

:::esempio{titolo="Informazioni esatte e dati raggruppati"}
Una tabella con classi $[0,10)$ e $[10,20)$, di frequenze $4$ e $6$, permette di sapere che $4$ dati sono minori di $10$. Non permette invece di stabilire quanti siano minori di $5$: potrebbero esserlo tutti i primi quattro, nessuno o soltanto alcuni. Usare il punto medio di ogni classe per calcolare una media fornisce una stima, perché i singoli valori non sono noti. La distinzione fra dato esatto e stima dipende dall'informazione conservata dalla tabella.
:::

## Media, mediana e moda

:::definizione{#media titolo="Media aritmetica e media ponderata"}
La **media aritmetica** di $N$ valori è $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. Il prodotto $N\bar x$ restituisce la somma dei dati. Se ogni valore $v_i$ compare $n_i$ volte, la media è $\bar x=\dfrac{\sum_i n_iv_i}{\sum_i n_i}$. Le frequenze costituiscono i pesi, perché un valore ripetuto contribuisce più volte alla somma.

Per unire gruppi di numerosità diverse si pesano allo stesso modo le loro medie. Un gruppo di $20$ persone con media $24$ e uno di $10$ con media $27$ hanno somma complessiva $20\cdot24+10\cdot27=750$ e numerosità $30$, quindi media $25$. La media semplice delle due medie darebbe lo stesso risultato soltanto con gruppi ugualmente numerosi, salvo coincidenze particolari.
:::

:::definizione{#mediana-moda titolo="Mediana e moda"}
La **mediana** si calcola ordinando i dati. Con un numero dispari di osservazioni è il valore centrale; con un numero pari è la media aritmetica dei due valori centrali. Per $4,7,2,13,6,8$, l'ordine è $2,4,6,7,8,13$ e la mediana è $\dfrac{6+7}{2}=6{,}5$. La posizione centrale non si individua nell'elenco disordinato.

La moda è il valore con la frequenza più alta e può non essere unica. Nella tabella con valori $0,1,2,3$ e frequenze $4,7,5,3$, la moda è $1$, mentre $7$ è la sua frequenza. La media usa tutti i valori; la mediana dipende dall'ordine; la moda dipende dalle frequenze. Una modifica di un dato estremo può alterare molto la media lasciando invariata la mediana.
:::

:::esempio{titolo="Un dato mancante o eliminato"}
Cinque misure con media $18$ sommano a $90$. Se viene eliminata una misura di valore $26$, le quattro rimaste sommano a $64$ e hanno media $16$. Il nuovo divisore è $4$, perché il numero dei dati è cambiato. Se invece si aggiunge un valore, aumenta sia la somma sia la numerosità: entrambe le variazioni devono essere considerate.
:::

## Dispersione e trasformazione dei dati

:::definizione{#varianza titolo="Varianza descrittiva e deviazione standard"}
La **varianza descrittiva**, con divisore $N$, è
$$
\sigma^2=\frac1N\sum_{i=1}^N(x_i-\bar x)^2.
$$
Essa media i quadrati degli scarti, quindi è sempre non negativa. La somma degli scarti semplici è invece zero e non misura la dispersione. La deviazione standard è $\sigma=\sqrt{\sigma^2}$ e ha le stesse unità dei dati; la varianza ha le unità al quadrato. Per $N>1$, un’altra quantità usa il divisore $N-1$: il quesito deve specificare quale convenzione richiede.

Per i dati $2,4,6$, la media è $4$, gli scarti sono $-2,0,2$ e la varianza descrittiva è $\dfrac{4+0+4}{3}=\dfrac83$. Sviluppando i quadrati e usando $\sum_i x_i=N\bar x$, si ricava anche $\sigma^2=\dfrac{\sum_i x_i^2}{N}-\bar x^2$: media dei quadrati meno quadrato della media. Le due formule descrivono la stessa quantità.

Il campo di variazione è invece massimo meno minimo, cioè $6-2=4$, e usa soltanto i due valori estremi.
:::

:::teorema{#trasformazioni-dati titolo="Effetto di una trasformazione affine"}
Se ogni dato viene trasformato con $y_i=ax_i+b$, la nuova media è $\bar y=a\bar x+b$, la nuova varianza è $\sigma_y^2=a^2\sigma_x^2$ e la deviazione standard è $\sigma_y=|a|\sigma_x$. Infatti $y_i-\bar y=a(x_i-\bar x)$: la traslazione si cancella negli scarti e la moltiplicazione si eleva al quadrato nella varianza.

Aggiungere $3$ a tutti i dati aumenta la media di $3$ senza cambiare la dispersione. Raddoppiare tutti i dati raddoppia la deviazione standard e quadruplica la varianza. Replicare ogni osservazione lo stesso numero di volte lascia invariati media e varianza descrittiva, perché numeratore e divisore vengono moltiplicati per lo stesso fattore. Unire gruppi con varianze nulle può invece produrre varianza positiva se i loro valori comuni sono diversi: la dispersione va misurata rispetto alla nuova media complessiva.

Una varianza nulla implica che tutti gli scarti quadratici sono nulli, quindi tutti i dati coincidono con la media.
:::

## Conteggi, ordine e ripetizioni

:::definizione{#principi-conteggio titolo="Principio del prodotto e scelta fra casi"}
Se una scelta si compie in fasi e a ogni esito della prima corrispondono $m$ possibilità della seconda, il numero totale si ottiene moltiplicando. Con $3$ primi, $5$ secondi e $2$ dolci, scegliere un piatto per categoria produce $3\cdot5\cdot2=30$ pasti. Se invece si sceglie un solo piatto fra secondi e dolci, le alternative sono $5+2=7$.

La somma si usa per casi alternativi disgiunti; il prodotto per fasi successive. Se i casi si sovrappongono, si sottrae il conteggio dell'intersezione. Fra gli interi da $1$ a $20$, i multipli di $2$ sono $10$, quelli di $5$ sono $4$ e quelli di entrambi sono $2$, quindi il totale distinto è $12$.
:::

:::definizione{#permutazioni-combinazioni titolo="Disposizioni, permutazioni e combinazioni"}
Il fattoriale $n!$ è il prodotto $n(n-1)\cdots1$ per $n\ge1$, con la convenzione $0!=1$. Nei conteggi seguenti $n$ e $k$ sono interi con $0\le k\le n$. Ordinare $n$ oggetti distinti dà $n!$ possibilità. Sceglierne $k$ con ruoli o posizioni diverse, senza ripetizione, dà $n(n-1)\cdots(n-k+1)$. Se l'ordine non conta, ogni gruppo è stato contato $k!$ volte, quindi le combinazioni sono $\binom nk=\dfrac{n!}{k!(n-k)!}$. Una coppia fra cinque persone si sceglie in $10$ modi; presidente e segretario fra le stesse persone si assegnano in $20$ modi.

Con ripetizioni indipendenti, $k$ posizioni e $n$ simboli danno $n^k$ sequenze. Per lettere ripetute in una parola si divide invece $n!$ per i fattoriali delle molteplicità: MAMMA ha $\dfrac{5!}{3!2!}=10$ anagrammi distinti. Vincoli come «almeno uno» si possono trattare contando il totale e sottraendo i casi esclusi. I conteggi descrivono possibilità; trasformarli in probabilità richiede ulteriori ipotesi sul modello casuale.
:::


:::esempio{titolo="Vincoli sul primo posto e su posizioni vicine"}
Con le cifre $0,1,2,3,4$, i numeri di tre cifre tutte diverse sono $4\cdot4\cdot3=48$. La prima cifra ha quattro possibilità perché non può essere zero; la seconda ne ha quattro perché può includere lo zero ma esclude la prima; la terza ne ha tre. Le restrizioni dipendono dunque dalla posizione.

Se cinque persone distinte devono disporsi in fila e due persone fissate devono stare vicine, le due si considerano inizialmente come un unico blocco. Si ordinano quattro elementi in $4!$ modi; all'interno del blocco sono possibili due ordini. Il totale è $2\cdot4!=48$. Non basta togliere una posizione al numero di persone: si deve conservare anche l'ordine interno.
:::
