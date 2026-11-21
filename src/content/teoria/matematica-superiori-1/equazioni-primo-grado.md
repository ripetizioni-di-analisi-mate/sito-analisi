---
titolo: "Equazioni di primo grado"
sommario: "Principi di equivalenza, forma normale, dominio e scelta dell’incognita nei problemi."
---

## Incognita, dominio e principi di equivalenza

:::definizione{titolo="Equazione e insieme delle soluzioni"}
Un’**equazione** è un’uguaglianza fra due espressioni nella quale compare una lettera, di solito $x$, che indica un numero da trovare. Questa lettera si chiama **incognita**. L’espressione a sinistra del segno $=$ è il primo **membro**, quella a destra è il secondo membro. In $2x+3=11$ il primo membro è $2x+3$ e il secondo è $11$. La scrittura $2x$ indica il prodotto $2\cdot x$.

Una **soluzione** è un numero che, sostituito a $x$, dà lo stesso valore ai due membri. Il numero $4$ è una soluzione di $2x+3=11$, perché $2\cdot4+3=11$. Risolvere un’equazione significa trovare tutte le sue soluzioni. Esse formano l’**insieme delle soluzioni**, che si indica con $S$. Per l’equazione precedente si scrive $S=\{4\}$. Se nessun numero è soluzione si scrive $S=\varnothing$, dove $\varnothing$ è il simbolo dell’insieme vuoto.

Un’equazione è di **primo grado** quando, svolti i calcoli, l’incognita compare soltanto moltiplicata per un numero, come in $2x+3=11$. In un’equazione di primo grado non compare $x^2$.

Prima di risolvere si stabilisce il **dominio** $D$, cioè l’insieme dei valori nei quali si cerca una soluzione e per i quali i due membri sono definiti, cioè si riescono a calcolare. La scrittura $x\in D$ si legge «$x$ appartiene a $D$». Il simbolo $\mathbb R$ indica l’insieme dei numeri reali, cioè tutti i numeri che hanno un posto sulla retta numerica: gli interi, le frazioni e i numeri come $\sqrt2$. Per esempio, con $D=\mathbb R$ il valore $\dfrac52$ risolve $2x=5$, perché $2\cdot\dfrac52=5$. Se si richiedono solo soluzioni intere, la stessa equazione non ne ha, perché $\dfrac52=2{,}5$ non è un numero intero.
:::

::::teorema{#equivalenza titolo="Trasformazioni reversibili"}
Due equazioni sono **equivalenti** se hanno lo stesso insieme di soluzioni. Per esempio $2x+3=11$ e $2x=8$ sono equivalenti, perché ciascuna ha come unica soluzione il numero $4$. Si scrive $2x+3=11\iff2x=8$, dove il simbolo $\iff$ si legge «se e solo se».

In un dominio fissato, un’equazione si trasforma in un’equazione equivalente in due modi, detti **principi di equivalenza**.

- Primo principio: si aggiunge a entrambi i membri la stessa espressione, purché sia definita in quel dominio. Sottrarre un’espressione equivale ad aggiungere la sua opposta, cioè la stessa espressione con il segno cambiato: l’opposto di $3$ è $-3$.
- Secondo principio: si moltiplicano entrambi i membri per uno stesso numero diverso da zero. Dividere per $2$ equivale a moltiplicare per $\dfrac12$.
:::dimostrazione
Si indica con $H(x)$ l’espressione che si aggiunge e con $c$ il numero per cui si moltiplica, con $c\ne0$. Per ogni $x\in D$, aggiungendo $H(x)$ a due numeri uguali si ottengono due numeri uguali, quindi aggiungere $H(x)$ a entrambi i membri conserva l’uguaglianza. Il passaggio inverso consiste nel sottrarre $H(x)$. Analogamente, moltiplicare entrambi i membri per $c\ne0$ conserva l’uguaglianza e si torna indietro dividendo per $c$.

Ciascuna trasformazione vale nei due versi. Se per un certo $x$ i membri fossero uguali dopo la trasformazione, il passaggio inverso li renderebbe uguali anche prima. Quindi la trasformazione conserva anche i valori per i quali i membri sono diversi, e le due equazioni hanno le stesse soluzioni.
:::
::::

:::esempio{titolo="Lo stesso cambiamento sui due piatti"}
Una bilancia a due piatti è in equilibrio quando i pesi sui due piatti sono uguali. Nella figura il piatto sinistro porta due scatole uguali, indicate insieme con $2x$, e un peso di tre unità. Il piatto destro porta undici unità. Il peso $x$ di una scatola soddisfa quindi $2x+3=11$.

Si rimuovono tre unità da ciascun piatto. Rimangono due scatole da un lato e otto unità dall’altro, cioè $2x=8$. Dividendo entrambi i pesi per due si trova $x=4$, e infatti $2\cdot4+3=11$.

Sottraendo tre unità da un solo piatto si perderebbe l’equilibrio, perché a sinistra resterebbero $8$ unità e a destra $11$.

::grafico{xmin=-5.2 xmax=5.2 ymin=-0.45 ymax=3.75 assi=0 uguale=1 poligoni="0,1.48 -0.75,0 0.75,0;-4.2,1.28 -1.1,1.28 -1.28,1.04 -4.02,1.04;1.1,1.28 4.2,1.28 4.02,1.04 1.28,1.04;-3.92,1.28 -2.37,1.28 -2.37,2.01 -3.92,2.01;-2.16,1.28 -1.42,1.28 -1.42,1.82 -2.16,1.82;2.04,1.28 3.33,1.28 3.33,2.15 2.04,2.15" linee="-2.65,2.85 2.65,2.85;-2.65,2.85 -4.2,1.28;-2.65,2.85 -1.1,1.28;2.65,2.85 1.1,1.28;2.65,2.85 4.2,1.28;0,1.48 0,2.85" etichette="-3.35,1.54,2x;-1.98,1.46,3;2.48,1.57,11" titolo="La bilancia rappresenta l’equazione 2x + 3 = 11"}
:::

:::attenzione{titolo="Un passaggio che perde soluzioni"}
Un prodotto vale zero quando almeno uno dei suoi fattori vale zero. L’equazione $x(x-2)=0$ ha quindi due soluzioni: $x=0$, che annulla il primo fattore, e $x=2$, che annulla il secondo.

In $x(x-2)=0$ si può dividere per $x$ solo quando $x\ne0$, perché la divisione per zero non è definita. Dopo la divisione resterebbe $x-2=0$, che dà soltanto $x=2$. L’equazione iniziale ha anche la soluzione $x=0$. Per recuperarla si esamina il caso escluso prima della divisione.

Analogamente, moltiplicare un’equazione per zero produce $0=0$ qualunque fossero i suoi membri. Da $2x=5$ e da $2x=7$ si arriva alla stessa uguaglianza $0=0$, quindi il passaggio non permette di tornare indietro.
:::

:::osservazione{titolo="Il dominio fa parte dell’equazione"}
L’unica soluzione di $x=0$ è il numero $0$. Aggiungendo $\dfrac1x$ a entrambi i membri si ottiene

$$
x+\frac1x=\frac1x.
$$

La frazione $\dfrac1x$ non è definita per $x=0$, perché non si divide per zero. La nuova uguaglianza è quindi definita solo per $x\ne0$, e il valore che prima risolveva l’equazione ora è escluso. Le due equazioni non sono equivalenti.

Con un’espressione definita in tutto il dominio, come $x-1$, il problema non si presenta. Aggiungendo $x-1$ a entrambi i membri di $x=0$ si ottiene $2x-1=x-1$, e sottraendo $x-1$ si torna a $x=0$.
:::

## Forma normale e lettura grafica

::::teorema{#lineari titolo="Riduzione alla forma ax = b"}
In $5x+1$ il numero $5$, che moltiplica l’incognita, è il **coefficiente** di $x$. Il numero $1$, che non è moltiplicato per $x$, è il **termine noto**, detto anche termine fisso. Un’espressione di questo tipo si chiama **lineare**.

Nell’equazione $5x+1=2x+7$ si sottraggono $2x$ e $1$ da entrambi i membri e si ottiene $3x=6$. Qui $3=5-2$ e $6=7-1$. Dividendo per $3$ si trova $x=2$, e infatti $5\cdot2+1=11$ e $2\cdot2+7=11$.

Con le lettere, i quattro numeri si indicano con $\alpha$, $\beta$, $\gamma$, $\delta$ (lettere greche che si leggono alfa, beta, gamma, delta). Un’equazione con membri $\alpha x+\beta$ e $\gamma x+\delta$ si riduce ad $ax=b$, dove $a=\alpha-\gamma$ e $b=\delta-\beta$. La scrittura $ax=b$ è la **forma normale** dell’equazione. Se $a\ne0$, l’unico candidato è $x=\dfrac ba$. Si chiama candidato il valore ottenuto dai calcoli prima di aver controllato il dominio. È soluzione se appartiene al dominio.
:::dimostrazione
Si sottraggono $\gamma x$ e $\beta$ da entrambi i membri.

$$
\begin{aligned}
\alpha x+\beta&=\gamma x+\delta\\[6pt]
\alpha x-\gamma x+\beta&=\delta\\[6pt]
\alpha x-\gamma x&=\delta-\beta\\[6pt]
(\alpha-\gamma)x&=\delta-\beta.
\end{aligned}
$$

Nell’ultima riga si è raccolto $x$, e si ottiene $ax=b$. Quando $a\ne0$, la divisione per $a$ è ammessa dal secondo principio di equivalenza e produce una sola uguaglianza $x=\dfrac ba$. Tutti i passaggi sono equivalenti. La formula copre anche $b=0$, che dà $x=0$ se il coefficiente è diverso da zero.
:::
::::

:::esempio{titolo="La stessa ordinata all’incrocio delle rette"}
Si consideri $3x-2=x+4$. Sottraendo $x$ da entrambi i membri resta $2x-2=4$. Aggiungendo $2$ a entrambi i membri resta $2x=6$, da cui $x=3$. Verificando nel problema di partenza si trova $3\cdot3-2=7$ e $3+4=7$.

Nel piano cartesiano ogni punto ha due coordinate: l’**ascissa** $x$, che si legge sull’asse orizzontale, e l’**ordinata** $y$, che si legge sull’asse verticale. I grafici di $y=3x-2$ e $y=x+4$ sono due rette. Ogni punto di ciascuna ha per ordinata il valore del membro corrispondente calcolato nell’ascissa.

Le due rette si incontrano nel punto $P$ di coordinate $(3,7)$. L’ascissa $3$ è la soluzione, mentre l’ordinata $7$ è il valore comune dei due membri. Nella figura i due segmenti che partono da $P$ arrivano sugli assi in corrispondenza di $3$ e di $7$.

::grafico{f="3*x-2;x+4" xmin=-1 xmax=6 ymin=-4 ymax=15 punti="3,7,pieno,P" segmenti="3,0,3,7;0,7,3,7" titolo="In P l’ascissa è la soluzione e l’ordinata è il valore comune"}
:::

## Parentesi e segni

:::esempio{#parentesi titolo="Sviluppare il membro con coefficiente negativo"}
Per la proprietà distributiva, un numero che moltiplica una somma moltiplica ciascun termine della somma: $2(x+1)=2\cdot x+2\cdot1=2x+2$.

Per risolvere $-3(2x-5)+4=2(x+1)+1$, il fattore $-3$ si distribuisce su $2x$ e su $-5$. Il prodotto con $-5$ è positivo, perché il prodotto di due numeri negativi è positivo: $(-3)\cdot(-5)=+15$. Nel membro destro si combina il $2$ dello sviluppo con il termine fisso $1$.

$$
\begin{aligned}
-3(2x-5)+4&=2(x+1)+1\\[6pt]
-6x+15+4&=2x+2+1\\[6pt]
-6x+19&=2x+3\\[6pt]
16&=8x\\[6pt]
x&=2.
\end{aligned}
$$

Nella quarta riga sono stati aggiunti $6x$ e sottratti $3$ in entrambi i membri.

Nella sostituzione iniziale, con $x=2$ l’espressione $2x-5$ vale $-1$ e il membro sinistro vale $-3\cdot(-1)+4=7$. A destra $x+1$ vale $3$ e si trova $2\cdot3+1=7$.

Nel grafico di $y=-6x+19$ e di $y=2x+3$ il coefficiente di $x$ si chiama **pendenza** della retta. Con pendenza positiva l’ordinata aumenta quando $x$ aumenta, con pendenza negativa diminuisce. Prima dell’incrocio la retta del membro sinistro è più in alto, perché la sua pendenza è negativa e quella dell’altra retta è positiva. Per esempio, per $x=0$ i membri valgono $19$ e $3$. Dopo l’incrocio l’ordine si scambia, e per $x=3$ valgono $1$ e $9$.

::grafico{f="-6*x+19;2*x+3" xmin=-0.2 xmax=4.2 ymin=-6 ymax=20 punti="2,7,pieno" titolo="I membri coincidono a x = 2 e cambiano ordine attraversando quel punto"}
:::

:::osservazione{titolo="Lasciare intera una parentesi"}
In $4(x-3)=2(x-3)+10$ l’espressione $x-3$ compare in entrambi i membri, e si tratta come un unico gruppo. Sottraendo $2(x-3)$ da entrambi i membri rimane $2(x-3)=10$, perché quattro gruppi meno due gruppi danno due gruppi. Dividendo per $2$ si ha $x-3=5$, e aggiungendo $3$ si ha $x=8$.

Sviluppare entrambi i prodotti conduce allo stesso risultato, perché da $4x-12=2x-6+10$ si ricava $2x=16$. Nella prima via non compaiono i prodotti $4\cdot(-3)$ e $2\cdot(-3)$, quindi non ci sono due segni negativi da controllare nello sviluppo.
:::

:::esempio{titolo="Sottrarre l’intero valore di un gruppo"}
In $11-[2(x+1)-3(x-2)]=17$ le parentesi quadre racchiudono un gruppo che viene sottratto tutto intero da $11$. Si chiama $G$ il valore di questo gruppo. L’equazione diventa $11-G=17$. Sottraendo $11$ da entrambi i membri si ha $-G=6$, e moltiplicando per $-1$ segue $G=-6$.

Sviluppando il gruppo si ha

$$
G=2x+2-3x+6=8-x,
$$

dove $+6$ è il prodotto $(-3)\cdot(-2)$. Quindi $8-x=-6$. Sottraendo $8$ si ha $-x=-14$, e moltiplicando per $-1$ si ha $x=14$.

Nella verifica, $2(x+1)$ vale $2\cdot15=30$ e $3(x-2)$ vale $3\cdot12=36$. Il gruppo vale $30-36=-6$, quindi è negativo. Sottrarre un numero negativo equivale ad aggiungere il suo opposto: $11-(-6)=11+6=17$. Sottrarre il gruppo fa quindi aumentare il valore iniziale $11$ fino a $17$. Avendo scritto prima $G=-6$, il segno del gruppo è noto prima di calcolare $x$.
:::

## Denominatori e condizioni di esistenza

::::teorema{#frazioni titolo="Eliminazione dei denominatori"}
In una frazione il **numeratore** è il numero, o l’espressione, sopra la linea, e il **denominatore** è quello sotto la linea. In $\dfrac{x-1}{4}$ il numeratore è $x-1$ e il denominatore è $4$. Un **multiplo comune** di due denominatori è un numero divisibile per entrambi: $12$ e $24$ sono multipli comuni di $4$ e $6$. Il più piccolo, qui $12$, è il **minimo comune multiplo**, abbreviato in mcm.

Si può moltiplicare entrambi i membri per un multiplo comune dei denominatori quando esso è definito e diverso da zero per ogni $x$ del dominio iniziale. Così si ottiene un’equazione equivalente nello stesso dominio, nella quale le frazioni non compaiono più.

Un’equazione con l’incognita in un denominatore si chiama **fratta**. Una frazione con denominatore zero non è definita. Per questo, in un’equazione fratta, i valori di $x$ che annullano un denominatore si escludono dal dominio. Le condizioni che li escludono, come $x\ne-1$, sono le **condizioni di esistenza**. Il dominio formato da tutti i reali tranne $-1$ si scrive $D=\mathbb R\setminus\{-1\}$.
:::dimostrazione
Si indica il multiplo con $M(x)$. Per ogni valore ammesso $M(x)$ è un numero diverso da zero. Il prodotto per $M(x)$ è quindi invertibile mediante la divisione per $M(x)$, come nel secondo principio di equivalenza. Per i denominatori numerici basta scegliere un multiplo comune positivo. Per quelli letterali, cioè quelli che contengono l’incognita, si escludono prima i valori che li annullano e si conserva quell’esclusione anche se dopo la moltiplicazione le frazioni scompaiono.
:::
::::

:::esempio{titolo="Moltiplicare tutti i termini"}
In $\dfrac{x-1}{4}-\dfrac{x+2}{6}=1$ i denominatori sono $4$ e $6$ e il loro minimo comune multiplo è $12$. Il fattore $12$ moltiplica tutti i termini dell’equazione, anche il termine $1$ del secondo membro.

Poiché $12:4=3$ e $12:6=2$, le due frazioni diventano $3(x-1)$ e $2(x+2)$.

$$
\begin{aligned}
3(x-1)-2(x+2)&=12\\[6pt]
3x-3-2x-4&=12\\[6pt]
x-7&=12\\[6pt]
x&=19.
\end{aligned}
$$

Il segno meno davanti alla seconda frazione si è applicato a entrambi i termini di $2(x+2)$.

Controllando l’equazione iniziale con $x=19$ si trova $\dfrac{18}{4}-\dfrac{21}{6}=\dfrac92-\dfrac72=\dfrac22=1$.
:::

:::esempio{titolo="Candidato ammesso e valore escluso"}
In $\dfrac{x-3}{x+1}=\dfrac13$ il denominatore $x+1$ vale zero per $x=-1$. Si esclude subito $x=-1$, quindi il dominio è $D=\mathbb R\setminus\{-1\}$. Moltiplicando per il multiplo comune $3(x+1)$, a sinistra si semplifica $x+1$ e a destra si semplifica $3$.

$$
\begin{aligned}
3(x-3)&=x+1\\[6pt]
3x-9&=x+1\\[6pt]
2x&=10\\[6pt]
x&=5.
\end{aligned}
$$

Nella terza riga si è sottratto $x$ e aggiunto $9$ in entrambi i membri. Il candidato $5$ è diverso da $-1$, quindi appartiene al dominio, e la sostituzione restituisce $\dfrac{5-3}{5+1}=\dfrac26=\dfrac13$. La figura riporta i due valori sulla retta dei numeri.

::grafico{xmin=-3 xmax=7 ymin=-0.7 ymax=0.75 uguale=1 assi=0 vettori="-2.75,0,6.61,0" punti="-1,0,vuoto;5,0,pieno" etichette="-1.15,-0.34,−1;4.88,-0.34,5;6.7,0.13,x" titolo="Il cerchio vuoto marca il valore escluso, il punto pieno la soluzione"}
:::

:::attenzione{titolo="La semplificazione conserva il dominio iniziale"}
In $\dfrac{x-3}{x-3}=0$ il denominatore vale zero per $x=3$, quindi il dominio esclude $x=3$. Per ogni altro valore la frazione divide un numero diverso da zero per se stesso, quindi vale $1$ per ogni $x$ ammesso. Poiché $1\ne0$, nessun valore del dominio rende uguali i due membri. L’equazione non ha quindi soluzioni e $S=\varnothing$. Un’equazione senza soluzioni si dice **impossibile**.

Moltiplicando per $x-3$ nella stessa equazione si ottiene $x-3=0$ e si trova il candidato $x=3$, escluso dal dominio.

La figura mostra il membro sinistro, cioè la retta orizzontale $y=1$ con un punto mancante in $x=3$, e il membro destro sulla retta $y=0$.

::grafico{f="1;0" xmin=-1 xmax=6 ymin=-0.75 ymax=1.85 punti="3,1,vuoto" titolo="Il membro sinistro vale 1 fuori da x = 3 e non raggiunge mai quota zero"}
:::

:::esempio{titolo="I prodotti incrociati in una proporzione"}
Una **proporzione** è un’uguaglianza fra due rapporti, cioè fra due frazioni. La scrittura $x:4=8:2$ ha lo stesso significato di $\dfrac x4=\dfrac82$.

In $\dfrac{x}{x+2}=\dfrac34$ il denominatore variabile impone $x\ne-2$. Moltiplicare i due membri per $4(x+2)$ produce $4x=3(x+2)$, perché a sinistra si semplifica $x+2$ e a destra si semplifica $4$. Sviluppando si ha $4x=3x+6$, e sottraendo $3x$ si ha $x=6$. Il passaggio si può invertire nel dominio ammesso, perciò $x=6$ è l’unico candidato. Il controllo $\dfrac6{6+2}=\dfrac68=\dfrac34$ verifica sia la definizione, perché il denominatore $8$ è diverso da zero, sia l’uguaglianza.

L’espressione «prodotti incrociati» descrive il risultato di quella moltiplicazione, nella quale il numeratore di ciascuna frazione è moltiplicato per il denominatore dell’altra. Il passaggio è giustificato dopo aver escluso gli zeri dei denominatori, perché solo allora il fattore $4(x+2)$ è diverso da zero.
:::

## Equazione determinata, impossibile e identità

::::teorema{#classificazione titolo="I tre esiti della riduzione"}
Tre equazioni già ridotte mostrano i tre esiti.

- $2x=6$ ha la sola soluzione $x=3$. Un’equazione con una sola soluzione si dice **determinata**.
- $0x=5$ non ha soluzioni, perché $0x$ vale zero per ogni $x$ e $0\ne5$. Un’equazione senza soluzioni si dice **impossibile**.
- $0x=0$ è vera per ogni $x$. Un’uguaglianza vera per ogni valore del dominio si dice **identità**.

In generale, dopo trasformazioni equivalenti nel dominio $D$, la forma $ax=b$ ha al massimo una soluzione se $a\ne0$. Se $a=0$ e $b\ne0$ la soluzione non esiste. Se $a=b=0$, ogni elemento di $D$ è soluzione e si ha un’identità in $D$.
:::dimostrazione
Nel primo caso rimane il solo candidato $\dfrac ba$, che è soluzione se appartiene a $D$. Se non appartiene a $D$ non ci sono soluzioni. Quando $a=0$ il prodotto a sinistra vale zero per ogni $x$. L’uguaglianza $0=b$ è quindi sempre falsa se $b\ne0$, sempre vera se $b=0$. L’equivalenza riporta questi esiti all’equazione iniziale, che ha le stesse soluzioni della forma ridotta.
:::
::::

:::esempio{titolo="Rette parallele oppure coincidenti"}
In $2(x+1)=2x+3$ lo sviluppo del primo membro è $2x+2$. I due membri hanno coefficiente $2$ ma termini noti diversi. Sottraendo $2x$ rimane $2=3$, che è falsa, quindi l’equazione è impossibile. Le rette corrispondenti $y=2x+2$ e $y=2x+3$ hanno la stessa pendenza e sono parallele. Esse restano separate da una distanza verticale di un’unità, perché $(2x+3)-(2x+2)=1$ per ogni $x$. Nella prima figura i punti segnati hanno ascissa $0$, dove i membri valgono $2$ e $3$.

In $2(x+1)=2x+2$, invece, il secondo membro coincide con lo sviluppo del primo. Sottraendo $2x+2$ rimane $0=0$, quindi l’equazione è un’identità. Le rette sono sovrapposte, quindi per ogni ascissa i due membri hanno la stessa ordinata. Nella seconda figura sono segnati i punti di ascissa $-1$, $0$ e $1$, dove entrambi i membri valgono $0$, $2$ e $4$.

::grafico{f="2*x+2;2*x+3" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="0,2,pieno;0,3,pieno" titolo="I membri di un’equazione impossibile descrivono due rette parallele"}

::grafico{f="2*x+2" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="-1,0,pieno;0,2,pieno;1,4,pieno" titolo="Per un’identità, un’unica retta rappresenta entrambi i membri"}
:::

:::osservazione{titolo="Due soluzioni distinte per membri lineari"}
Si supponga che un’uguaglianza fra due membri lineari valga per due $x$ diversi. La differenza fra il primo e il secondo membro è della forma $ax-b$, e l’uguaglianza vale esattamente quando questa differenza è zero. La differenza si annulla quindi in due punti. Il caso $a\ne0$ ammetterebbe un solo zero, cioè $x=\dfrac ba$. Quindi $a=0$. La differenza si riduce allora a $-b$, e poiché esiste almeno una soluzione deve valere anche $b=0$. L’uguaglianza è un’identità nel dominio.

L’ipotesi che i membri siano lineari è necessaria. L’equazione $x^2=x$ contiene $x^2$ e vale per $x=0$ e $x=1$, perché $0^2=0$ e $1^2=1$. Essa non è un’identità, perché in $x=2$ si ottiene $4\ne2$.
:::

## Equazioni con un parametro

:::esempio{#parametri titolo="Studiare prima il valore che annulla il coefficiente"}
Un **parametro** è una lettera che indica un numero fissato ma non precisato.

Nel problema $mx+4=2x+1$, l’incognita è $x$ e $m$ è un numero fissato di cui si vuole studiare l’effetto. Sottraendo $2x$ e $4$ da entrambi i membri si ha $mx-2x=-3$. Raccogliendo $x$ si ottiene la forma ridotta $(m-2)x=-3$. Il coefficiente di $x$ è $m-2$ e vale zero per $m=2$.

- Per $m=2$ si ottiene $0x=-3$, senza soluzioni.
- Per $m\ne2$ si divide per $m-2$ e l’unica soluzione è $x=\dfrac{-3}{m-2}$.

Per esempio, se $m=1$, il coefficiente è $-1$ e da $-x=-3$ si trova $x=3$. I membri iniziali valgono $1\cdot3+4=7$ e $2\cdot3+1=7$. Dividere subito per $m-2$ eliminerebbe la possibilità di classificare il caso $m=2$, perché la divisione è ammessa solo quando $m\ne2$.
:::

:::esempio{titolo="Un caso particolare con tutte le soluzioni"}
Nell’equazione $(m-2)x=m-2$, sia il coefficiente sia il termine fisso si annullano per $m=2$. Per quel valore si ha $0x=0$ e ogni reale risolve l’equazione. Per $m\ne2$ si può dividere per $m-2$ e resta $x=1$. Sostituire $1$ restituisce $m-2$ in entrambi i membri per ogni $m$, quindi $x=1$ è una soluzione per qualunque valore del parametro. L’unicità vale solo per $m\ne2$.
:::

:::esempio{titolo="Scegliere il parametro che produce una soluzione assegnata"}
Si cerchi $m$ affinché $x=2$ risolva $(m+1)x=3m-1$. Sostituendo il valore assegnato, il primo membro diventa $(m+1)\cdot2=2m+2$. L’equazione da risolvere diventa $2m+2=3m-1$, nella quale la lettera da trovare è $m$. Sottraendo $2m$ e aggiungendo $1$ a entrambi i membri si ha $3=m$, cioè $m=3$.

Con quel parametro l’equazione iniziale è $4x=8$, che ha come unica soluzione $x=2$. Per il parametro $m=-1$ si avrebbe $0x=-4$, senza soluzioni.

In ogni passaggio una sola lettera è da trovare. Nella prima sostituzione il valore noto è $x$ e si cerca $m$. Nell’ultima verifica il valore noto è $m$ e si cerca $x$.
:::

## Modelli e verifica delle condizioni del problema

:::esempio{#problemi titolo="Una soluzione algebrica deve essere un valore possibile"}
Il **modello** di un problema è l’equazione che ne traduce i dati.

Un laboratorio richiede $8$ euro di iscrizione e $3$ euro per ogni attività. Se $n$ è il numero di attività, il costo è $8+3n$ euro. Il numero di attività è $0$, $1$, $2$, $3$ e così via, quindi il dominio del problema è quello degli interi non negativi. Con un totale di $26$ euro l’equazione è $8+3n=26$. Sottraendo $8$ si ottiene $3n=18$ e quindi $n=6$. Il controllo è $8+3\cdot6=26$.

Con un totale di $25$ euro la stessa formula darebbe $3n=17$, cioè $n=\dfrac{17}{3}$. Questo valore è fra $5$ e $6$, perché $3\cdot5=15$ e $3\cdot6=18$, mentre si possono acquistare solo attività intere. Cinque attività costano $8+15=23$ euro e sei ne costano $26$, quindi il totale di $25$ euro non è ottenibile.

Nella figura l’asse orizzontale riporta $n$ e quello verticale il costo $C$. I punti pieni sono i costi di $4$, $5$, $6$ e $7$ attività. Il segmento a quota $25$ incontra la retta nel punto vuoto, di ascissa $\dfrac{17}{3}$.

::grafico{xmin=3.25 xmax=7.55 ymin=17.2 ymax=32 assi=0 linee="3.65,18.25 7.3,18.25;3.65,18.25 3.65,31.25;3.65,18.95 7.25,29.75;4,18.12 4,18.38;5,18.12 5,18.38;6,18.12 6,18.38;7,18.12 7,18.38" segmenti="3.65,25,7.25,25" punti="4,20,pieno;5,23,pieno;6,26,pieno;7,29,pieno;5.666666667,25,vuoto" etichette="3.32,24.91,25;3.52,31.36,C;7.36,18.3,n;3.94,17.62,4;4.94,17.62,5;5.94,17.62,6;6.94,17.62,7" titolo="La retta del modello incontra quota 25 tra due conteggi ammessi"}
:::

:::esempio{titolo="Numeri consecutivi e parità"}
Due interi sono consecutivi quando il secondo si ottiene dal primo aggiungendo $1$, come $9$ e $10$. Se $n$ è il minore di due interi consecutivi, l’altro è $n+1$ e la loro somma è $n+(n+1)=2n+1$. Richiedendo somma $19$ si ricava $2n+1=19$, quindi $2n=18$ e $n=9$. I numeri sono $9$ e $10$.

Una somma di $20$ darebbe invece $2n=19$, cioè $n=\dfrac{19}{2}$, che non è intero. Più in generale, per $n$ intero il numero $2n$ è pari, perché è il doppio di un intero. Aggiungendo $1$ a un numero pari si ottiene un numero dispari, quindi $2n+1$ è sempre dispari. La richiesta di una somma pari si esclude quindi anche prima di risolvere.
:::

:::esempio{titolo="La media in un’equazione"}
La **media** di più numeri è la loro somma divisa per quanti sono. La media di tre numeri è $8$ e i primi due sono $5$ e $9$. Se $x$ è il terzo, l’equazione è $\dfrac{5+9+x}{3}=8$. Moltiplicando per $3$ si ha $14+x=24$, quindi $x=10$. Il controllo è $\dfrac{5+9+10}{3}=\dfrac{24}{3}=8$.
:::

:::esempio{titolo="Verificare quando un modello è valido"}
Due recipienti contengono inizialmente $3$ e $15$ litri. Il primo riceve $2$ litri al minuto e il secondo ne perde $1$ al minuto. Finché i due flussi restano attivi, dopo $t$ minuti i volumi sono $3+2t$ e $15-t$. I volumi sono uguali quando $3+2t=15-t$. Aggiungendo $t$ e sottraendo $3$ si ha $3t=12$, quindi $t=4$. I due volumi sono $3+2\cdot4=11$ litri e $15-4=11$ litri.

Se il primo recipiente ha capacità $10$ litri, esso è pieno quando $3+2t=10$, cioè per $t=\dfrac72$. Il suo flusso si ferma a quell’istante e da lì in poi l’espressione $3+2t$ non dà più il suo volume. In tal caso $t=4$ non appartiene all’intervallo in cui valgono entrambe le espressioni, perché $4>\dfrac72$.
:::

## Formule inverse

:::esempio{#formule titolo="Ricavare un lato dal perimetro"}
Una **formula inversa** si ottiene da una formula nota isolando una lettera diversa, con gli stessi passaggi usati per risolvere un’equazione.

Il perimetro $P$ di un rettangolo con base $b$ e altezza $h$ soddisfa $P=2b+2h$. Se sono noti $P$ e $b$, l’incognita è $h$. Si sottrae $2b$ da entrambi i membri e si divide per $2$.

$$
2h=P-2b,\qquad h=\frac P2-b.
$$

La metà del perimetro, $\dfrac P2$, si chiama semiperimetro ed è la somma di una base e di un’altezza. Con $P=30\,\mathrm{cm}$ e $b=6\,\mathrm{cm}$ il semiperimetro è $15\,\mathrm{cm}$ e si trova $h=15-6=9\,\mathrm{cm}$. Il perimetro calcolato con i due lati è $2(6+9)=30$ centimetri.

Il modello richiede $b>0$ e $P>2b$, perché l’altezza deve essere positiva. Per $P=2b$ la formula darebbe altezza zero, che non descrive un rettangolo.

::grafico{xmin=-1.5 xmax=7.45 ymin=-1.03 ymax=10.28 uguale=1 assi=0 poligoni="0,0 6,0 6,9 0,9" etichette="2.8,-0.58,b;-0.75,4.4,h;2.29,9.45,6 cm;6.3,4.4,9 cm" titolo="Il semiperimetro somma la base e l’altezza"}
:::

:::esempio{titolo="Ricavare il tempo da una misura"}
Una vasca contiene $V_0$ litri quando si apre un rubinetto. Il simbolo $V_0$ si legge «V con zero» e indica il volume iniziale. La **portata** $q$ è il numero di litri che entrano ogni minuto. Mentre la portata costante $q$ rimane attiva, in $t$ minuti entrano $qt$ litri e il volume al tempo $t$ è $V=V_0+qt$, con $t$ in minuti e $q$ in litri al minuto. La differenza $V-V_0$ misura l’acqua aggiunta. Sottraendo $V_0$ da entrambi i membri si ha $V-V_0=qt$. Se $q>0$, si divide per $q$ e il tempo necessario per raggiungere il volume $V$ è

$$
t=\frac{V-V_0}{q}.
$$

Per $V_0=5$, $q=3$ e $V=17$, l’acqua aggiunta è $17-5=12$ litri. Si ottiene $t=\dfrac{12}{3}=4$ minuti e la verifica è $5+3\cdot4=17$. Dividere il solo volume finale per la portata darebbe invece $\dfrac{17}{3}$ minuti, cioè il tempo per riempire la vasca a partire da zero.

Se $q=0$, il volume resta $V_0$ in ogni istante. Un volume diverso da $V_0$ è irraggiungibile, mentre il volume $V_0$ si ha in ogni istante e quindi non permette di ricavare un tempo unico.
:::

:::osservazione{titolo="Proporzione per le variazioni"}
Con $V=V_0+qt$ il rapporto $\dfrac Vt$ dipende da $t$ se $V_0\ne0$. Con $V_0=5$ e $q=3$, per $t=1$ il rapporto vale $8$ e per $t=2$ vale $\dfrac{11}{2}$. Si usa invece la differenza tra due misure $V_1$ e $V_2$ prese ai tempi $t_1$ e $t_2$. Le due formule sono $V_1=V_0+qt_1$ e $V_2=V_0+qt_2$. Sottraendo la prima dalla seconda, il termine $V_0$ si elimina e si ottiene $V_2-V_1=q(t_2-t_1)$. Se i tempi sono distinti, si divide per $t_2-t_1$ e il quoziente tra differenza di volume e differenza di tempo dà la portata $q$. Per esempio, un aumento di $9$ litri in $3$ minuti indica $\dfrac93=3$ litri al minuto, qualunque fosse il volume iniziale. La variazione di volume è quindi direttamente proporzionale al tempo trascorso, cioè il loro rapporto è costante.

Una volta trovata la portata, una delle misure consente di ricavare $V_0=V_1-qt_1$.
:::
