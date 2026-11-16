---
titolo: "Aritmetica e algebra per il TOLC-I"
sommario: "Numeri, rapporti, potenze, equazioni e disequazioni con esempi, condizioni di esistenza e interpretazione dei risultati."
---

## Numeri razionali e calcolo esatto

:::definizione{#numeri-razionali titolo="Frazioni e rappresentazioni"}
Un **numero razionale** è un numero che si può scrivere come $\dfrac{a}{b}$, dove $a$ e $b$ sono interi e $b\ne0$. Il denominatore indica in quante parti uguali si divide l'unità; il numeratore indica quante di quelle parti si considerano. Moltiplicando numeratore e denominatore per uno stesso numero non nullo si ottiene una frazione equivalente. Per esempio, $\dfrac34=\dfrac{15}{20}=0{,}75$.

Una frazione è ridotta ai minimi termini quando numeratore e denominatore non hanno divisori comuni maggiori di uno. La riduzione conserva il valore del numero e rende più leggibile il confronto. Per confrontare $\dfrac58$ e $\dfrac7{12}$ si può usare il denominatore comune $24$; poiché $15>14$, segue $\dfrac58>\dfrac7{12}$. Con denominatori positivi, lo stesso confronto si ottiene confrontando i prodotti incrociati $5\cdot12$ e $7\cdot8$.
:::

:::teorema{#operazioni-frazioni titolo="Operazioni tra frazioni"}
Per sommare o sottrarre frazioni si esprimono le parti nella stessa unità frazionaria. Per moltiplicarle si moltiplicano numeratori e denominatori. Dividere per un numero non nullo equivale a moltiplicare per il suo reciproco. Con i denominatori indicati diversi da zero valgono
$$
\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab\cdot\frac cd=\frac{ac}{bd},\qquad
\frac ab\div\frac cd=\frac{ad}{bc}\quad(c\ne0).
$$
Nell'ultima formula compare anche la condizione $c\ne0$, perché il divisore deve essere diverso da zero. Le semplificazioni possono essere effettuate sui fattori di un prodotto prima di eseguire le moltiplicazioni.
:::

:::esempio{titolo="Priorità delle operazioni e stima"}
Nell'espressione $\left(2-\dfrac34\right)\div\dfrac56$ si calcola prima la differenza e poi la divisione:
$$
\left(2-\frac34\right)\div\frac56
=\frac54\cdot\frac65=\frac32.
$$
Il dividendo è $1{,}25$ e il divisore è positivo e minore di uno, quindi il quoziente deve superare $1{,}25$. Il risultato $1{,}5$ soddisfa questa proprietà. Una stima controlla la plausibilità del calcolo; il valore esatto resta quello ricavato con le frazioni.
:::

:::osservazione{#decimali titolo="Decimali finiti e periodici"}
Una frazione ridotta ha una rappresentazione decimale finita quando il suo denominatore contiene soltanto fattori primi $2$ e $5$. Infatti si può completare il denominatore fino a una potenza di dieci: $\dfrac7{40}=\dfrac{175}{1000}=0{,}175$. Se rimangono altri fattori primi, la divisione continua con un periodo. Per trasformare $z=0{,}\overline{27}$ in frazione, si sposta un periodo moltiplicando per $100$: $100z=27+z$, da cui $99z=27$ e $z=\dfrac3{11}$. Il decimale finito $0{,}27=\dfrac{27}{100}$ rappresenta invece un numero diverso.
:::

## Divisibilità, resti e approssimazioni

:::definizione{#divisibilita titolo="Divisori comuni e multipli comuni"}
Un intero positivo $d$ divide un intero $n$ quando $n=dq$ per qualche intero $q$. Il **massimo comune divisore**, indicato con $\operatorname{MCD}$, è il più grande divisore positivo comune. Il **minimo comune multiplo**, indicato con $\operatorname{mcm}$, è il più piccolo multiplo positivo comune di due interi positivi.

Nella scomposizione in fattori primi, il MCD contiene i fattori comuni con l'esponente minore; il mcm contiene tutti i fattori presenti con l'esponente maggiore. Per $12=2^2\cdot3$ e $18=2\cdot3^2$ si ottengono $\operatorname{MCD}(12,18)=6$ e $\operatorname{mcm}(12,18)=36$. Il MCD descrive suddivisioni identiche senza avanzi; il mcm descrive la prima coincidenza di ripetizioni che iniziano insieme.
:::

:::definizione{#divisione-resto titolo="Divisione euclidea"}
Per un intero $a$ e un intero positivo $b$, la divisione con resto è la scrittura
$$
a=bq+r,\qquad 0\le r<b.
$$
L'intero $q$ è il quoziente e $r$ è il resto. La condizione sul resto individua una sola coppia. Per esempio, $-26=7(-4)+2$, quindi il resto della divisione di $-26$ per $7$ è $2$. La scrittura $-26=7(-3)-5$ è un'uguaglianza vera, ma il termine $-5$ non è un resto euclideo perché è negativo.
:::

:::osservazione{#stime titolo="Stime e precisione"}
Arrotondare al decimo significa scegliere il multiplo di $0{,}1$ più vicino. Troncare verso zero significa eliminare le cifre successive conservando la parte rimasta. Per $-2{,}76$, arrotondamento al decimo e troncamento al decimo danno rispettivamente $-2{,}8$ e $-2{,}7$. Se una lunghezza positiva è compresa fra $4{,}9$ e $5{,}1$, il suo quadrato è compreso fra $24{,}01$ e $26{,}01$, perché elevare al quadrato conserva l'ordine fra numeri non negativi. Questa proprietà permette di delimitare un risultato senza conoscere tutte le cifre del dato.
:::

## Rapporti, proporzioni e percentuali

:::definizione{#rapporti titolo="Rapporto e quantità totale"}
Il **rapporto** tra due quantità omogenee confronta la prima con la seconda. Se due quote sono nel rapporto $5$ a $3$, si possono scrivere come $5k$ e $3k$, dove $k>0$ è il valore di una parte. Il totale è $8k$. Una somma di $96$ euro divisa in quel rapporto assegna quindi $60$ euro alla quota maggiore e $36$ euro alla minore.

Una proporzione $a:b=c:d$, con $b,d\ne0$, è l'uguaglianza $\dfrac ab=\dfrac cd$. Moltiplicando per $bd$ si ricava $ad=bc$. Nei problemi di scala le unità vanno rese omogenee prima del confronto: in scala $1$ a $250$, $7{,}2\,\mathrm{cm}$ rappresentano $1800\,\mathrm{cm}$, cioè $18\,\mathrm{m}$.
:::

:::teorema{#percentuali titolo="Variazioni percentuali"}
Il $r\%$ di una quantità $P$ è $P\dfrac r{100}$. Un aumento del $r\%$ moltiplica $P$ per $1+\dfrac r{100}$; una diminuzione del $r\%$ la moltiplica per $1-\dfrac r{100}$. La variazione percentuale fra un valore iniziale positivo $P$ e un valore finale $Q$ è
$$
\frac{Q-P}{P}\cdot100\%.
$$
Il denominatore è il valore rispetto al quale si misura il cambiamento. Per risalire al valore iniziale si divide il valore finale per il fattore di variazione. Un prezzo finale di $56$ euro dopo un aumento del $12\%$ corrisponde a $56\div1{,}12=50$ euro iniziali.
:::

:::esempio{titolo="Due variazioni successive"}
Un prezzo di $80$ euro aumenta del $20\%$ e poi diminuisce del $20\%$. Il primo cambiamento produce $80\cdot1{,}20=96$ euro; il secondo produce $96\cdot0{,}80=76{,}80$ euro. Il fattore complessivo è $0{,}96$, quindi la variazione finale è una diminuzione del $4\%$. Lo sconto si applica a $96$ euro, perciò vale $19{,}20$ euro, mentre l'aumento iniziale era di $16$ euro.
:::

## Potenze e notazione scientifica

:::teorema{#potenze titolo="Proprietà delle potenze"}
Una potenza con esponente intero positivo rappresenta un prodotto di fattori uguali. Per una base non nulla, l'esponente zero dà $1$ e un esponente negativo indica il reciproco. Per esponenti interi e basi ammissibili valgono
$$
a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn},\qquad
a^{-n}=\frac1{a^n}.
$$
La condizione $a\ne0$ è necessaria per le divisioni e per gli esponenti non positivi. Il segno di una base negativa dipende dalla parità dell'esponente: $(-2)^4=16$, mentre $(-2)^3=-8$. Nell'espressione $-2^4$ la potenza riguarda soltanto $2$, quindi il risultato è $-16$.
:::

:::definizione{#notazione-scientifica titolo="Ordine di grandezza e potenze di dieci"}
La **notazione scientifica** di un numero positivo è $c\cdot10^n$, con $1\le c<10$ e $n$ intero. Il numero $0{,}00012$ si scrive $1{,}2\cdot10^{-4}$. Nel prodotto si moltiplicano i coefficienti e si sommano gli esponenti, poi si riporta il coefficiente nell'intervallo richiesto. Per esempio,
$$
(4\cdot10^{-2})(3\cdot10^{-3})
=12\cdot10^{-5}=1{,}2\cdot10^{-4}.
$$
La scrittura separa la dimensione del numero dalle sue cifre iniziali. Quando due quantità sono espresse con la stessa potenza di dieci, il loro confronto dipende soltanto dai coefficienti. Se le potenze differiscono, riportarle allo stesso esponente evita di confrontare erroneamente le sole cifre iniziali.
:::

:::osservazione
Per $a>0$, la potenza $a^{\frac mn}$, con $m$ intero e $n$ intero positivo, è $\sqrt[n]{a^m}$. Si può calcolare prima la radice e poi la potenza. Perciò $16^{\frac34}=(\sqrt[4]{16})^3=2^3=8$. La base positiva permette di usare queste proprietà senza ambiguità nel campo reale. Se la base è negativa, l'esistenza delle radici dipende dalla parità dell'indice e richiede un controllo separato.
:::

## Radici e valore assoluto

:::definizione{#radici titolo="Radice principale"}
Per $a\ge0$, $\sqrt a$ è l'unico numero non negativo il cui quadrato è $a$. Da questa definizione segue $\sqrt{x^2}=|x|$ per ogni reale $x$. Il simbolo $\sqrt9$ indica $3$; l'equazione $x^2=9$ ha invece le due soluzioni $3$ e $-3$. Le radici di indice dispari esistono anche per radicandi negativi, per esempio $\sqrt[3]{-8}=-2$.

Per $a,b\ge0$ vale $\sqrt{ab}=\sqrt a\sqrt b$. Il riconoscimento di un fattore quadrato consente di semplificare: $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Due termini con la stessa radice si sommano come multipli della stessa quantità, quindi $6\sqrt2-3\sqrt2=3\sqrt2$.
:::

:::esempio{#razionalizzazione titolo="Razionalizzare un denominatore"}
Razionalizzare significa scrivere una frazione equivalente il cui denominatore non contiene radicali. Si moltiplicano numeratore e denominatore per una stessa quantità non nulla. Per esempio,
$$
\frac6{\sqrt3}=\frac{6\sqrt3}{3}=2\sqrt3.
$$
Se il denominatore contiene una differenza, il prodotto con la somma corrispondente usa la differenza di quadrati:
$$
\frac1{\sqrt5-2}
=\frac{\sqrt5+2}{(\sqrt5-2)(\sqrt5+2)}
=\frac{\sqrt5+2}{5-4}=\sqrt5+2.
$$
La somma $\sqrt5+2$ si chiama espressione coniugata di $\sqrt5-2$. Il prodotto vale $1$, quindi non si introducono divisioni per zero. Il procedimento cambia la forma della scrittura, conservandone il valore.
:::

:::definizione{#valore-assoluto titolo="Distanza sulla retta"}
Il **valore assoluto** $|x|$ è la distanza di $x$ da zero. Vale $x$ se $x\ge0$ e $-x$ se $x<0$. Più generalmente, $|x-a|$ misura la distanza tra $x$ e $a$. Per $r>0$,
$$
|x-a|<r\quad\Longleftrightarrow\quad a-r<x<a+r.
$$
La disuguaglianza $|x-a|>r$ descrive invece le due semirette $x<a-r$ oppure $x>a+r$. Se il confronto è largo, si includono gli estremi. L'equazione $|x-a|=r$ individua proprio i due estremi, mentre per $r=0$ individua soltanto $x=a$.
:::

:::esempio{titolo="Distanza da tre"}
La disequazione $|x-3|<2$ richiede $1<x<5$. Il grafico di $y=|x-3|$ si trova sotto la retta $y=2$ esattamente per queste ascisse.

::grafico{f="abs(x-3);2" xmin=-1 xmax=7 ymin=-0.5 ymax=5 punti="1,2,vuoto;5,2,vuoto" titolo="I punti di intersezione delimitano le ascisse con distanza da tre minore di due"}
:::

## Polinomi e scomposizioni

:::definizione{#polinomi titolo="Termini simili e grado"}
Un **polinomio** in $x$ è una somma finita di termini $a_kx^k$, con esponenti interi non negativi. I termini con lo stesso esponente sono simili e si sommano attraverso i coefficienti. Il grado di un polinomio non nullo è il maggiore esponente con coefficiente diverso da zero dopo la riduzione. Per esempio, $(x^2+1)(x^2-1)-x^4+5x=5x-1$ ha grado uno, perché i termini di quarto grado si cancellano.

Il termine noto si ottiene ponendo $x=0$. Il coefficiente di una potenza si ricava raccogliendo tutti i prodotti che generano quella potenza. In $(2x-3)(x+4)$ il coefficiente di $x$ è $8-3=5$.
:::

:::teorema{#scomposizioni titolo="Prodotti notevoli e fattori comuni"}
La proprietà distributiva permette sia di sviluppare sia di scomporre un polinomio. Le identità
$$
(a+b)^2=a^2+2ab+b^2,\qquad
a^2-b^2=(a-b)(a+b)
$$
valgono per ogni coppia di reali. Il termine $2ab$ del quadrato proviene dai due prodotti $ab$ e $ba$. Un fattore comune si raccoglie dividendo ciascun termine per quel fattore: $6x^2-15x=3x(2x-5)$.

Un trinomio monico $x^2+sx+p$ si fattorizza come $(x+u)(x+v)$ quando $u+v=s$ e $uv=p$. Per $x^2+x-20$ si scelgono $u=5$ e $v=-4$. La scomposizione serve a trovare zeri, studiare segni e semplificare espressioni razionali.
:::

:::teorema{#cubi-resto titolo="Cubi e resto di un polinomio"}
Le identità
$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3,\qquad
a^3-b^3=(a-b)(a^2+ab+b^2)
$$
si verificano distribuendo i fattori. Nel cubo del binomio, il termine $a^2b$ si ottiene scegliendo $b$ da uno dei tre fattori: le tre scelte spiegano il coefficiente $3$. Per esempio, $x^3-27=(x-3)(x^2+3x+9)$, quindi il quoziente della divisione per $x-3$ è $x^2+3x+9$ e il resto è zero.

Dividendo un polinomio $P(x)$ per $x-c$, si scrive $P(x)=(x-c)Q(x)+r$, dove il resto $r$ è costante. Sostituendo $x=c$ si ottiene $r=P(c)$. Il divisore $x-c$ è dunque un fattore di $P$ esattamente quando $P(c)=0$. Per $P(x)=x^3-x+2$ e $c=2$, il resto è $8-2+2=8$; il quoziente non occorre per trovare questo valore.
:::

:::attenzione{#frazioni-algebriche titolo="Semplificazione e dominio"}
La cancellazione riguarda fattori comuni diversi da zero. Per
$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3
$$
resta la condizione $x\ne3$ dell'espressione iniziale. La formula semplificata può essere valutata in $3$, ma quella frazione non è definita in $3$. Inoltre, in $\dfrac{x+3}{x}$ la lettera $x$ al numeratore è un addendo, quindi la cancellazione non è consentita; per $x=3$ il rapporto vale $2$.
:::

## Equazioni lineari e sistemi

:::teorema{#equazioni-lineari titolo="Trasformazioni equivalenti"}
Risolvere un'equazione significa trovare tutti i valori ammessi che rendono uguali i due membri. Sommare ai due membri la stessa espressione definita sull'intero dominio iniziale e moltiplicare entrambi per un numero non nullo conserva le soluzioni. L'equazione $ax+b=0$, con $a\ne0$, ha soluzione $x=-\dfrac ba$. Se $a=0$, si distingue fra $b=0$, quando ogni reale è soluzione, e $b\ne0$, quando non esistono soluzioni.

Un denominatore contenente l'incognita impone una restrizione prima delle trasformazioni. Per $\dfrac{x+2}{x-1}=3$ serve $x\ne1$; moltiplicando per $x-1$ si trova $x+2=3x-3$, quindi $x=\dfrac52$. Il valore trovato appartiene al dominio e soddisfa l'equazione iniziale.
:::

:::definizione{#sistemi titolo="Condizioni simultanee"}
Una soluzione di un sistema soddisfa tutte le equazioni contemporaneamente. Nel sistema
$$
\begin{cases}
x+y=7,\\
2x-y=5,
\end{cases}
$$
la somma membro a membro elimina $y$ e produce $3x=12$. Segue $x=4$; sostituendo nella prima equazione si trova $y=3$. La coppia $(4,3)$ soddisfa anche la seconda equazione, perché $8-3=5$.

Due equazioni lineari possono descrivere rette incidenti, coincidenti o parallele distinte. Nel primo caso c'è una soluzione, nel secondo infinite, nel terzo nessuna. Se i coefficienti delle incognite della seconda equazione sono il doppio di quelli della prima, anche il termine noto deve raddoppiare affinché le rette coincidano.
:::

:::esempio{titolo="Modello di un acquisto"}
Si acquistano $18$ oggetti di due tipi, da $2$ e da $4$ euro, spendendo $54$ euro. Indicando con $x$ il numero di oggetti da $4$ euro, quelli da $2$ euro sono $18-x$. L'equazione $4x+2(18-x)=54$ dà $2x=18$, quindi $x=9$. Il risultato è intero e compreso fra zero e diciotto, come richiede il significato dell'incognita.
:::

## Equazioni quadratiche e parametri

:::teorema{#equazioni-quadratiche titolo="Discriminante e radici"}
Per l'equazione $ax^2+bx+c=0$, con $a\ne0$, il **discriminante** è $\Delta=b^2-4ac$. Completando il quadrato si ricava la formula
$$
x=\frac{-b\pm\sqrt\Delta}{2a}.
$$
Se $\Delta>0$ ci sono due soluzioni reali distinte; se $\Delta=0$ c'è una radice doppia; se $\Delta<0$ non ci sono soluzioni reali. Quando il polinomio è già scomposto si può usare direttamente la legge di annullamento del prodotto: $(x-2)(x-3)=0$ dà $x=2$ oppure $x=3$.

Se le radici sono $x_1,x_2$, lo sviluppo di $a(x-x_1)(x-x_2)$ mostra che $x_1+x_2=-\dfrac ba$ e $x_1x_2=\dfrac ca$. Queste relazioni permettono di calcolare somme e prodotti delle radici senza ricavarle separatamente.
:::

:::esempio{titolo="Parametro e radice doppia"}
L'equazione $x^2-8x+k=0$ ha radice doppia quando $64-4k=0$, cioè per $k=16$. In quel caso il polinomio è $(x-4)^2$ e si annulla soltanto in $4$. Un parametro può anche annullare il coefficiente del termine di secondo grado; in quel caso l'equazione ha grado al più uno e si studiano anche gli eventuali casi in cui il coefficiente lineare si annulla.
:::

:::osservazione{#quadrato-completo titolo="Minimi e sostituzioni"}
Il completamento del quadrato mostra che $x^2-8x+21=(x-4)^2+5$. Il quadrato è non negativo e si annulla per $x=4$, quindi il minimo è $5$. Per un'equazione biquadratica come $x^4-5x^2+4=0$, la sostituzione $u=x^2$ dà $u^2-5u+4=0$. Le soluzioni $u=1$ e $u=4$ sono non negative e producono $x=\pm1$ e $x=\pm2$. Una soluzione negativa per $u$ non produrrebbe soluzioni reali per $x$.
:::

## Disequazioni e segni

:::teorema{#disequazioni titolo="Operazioni e ordine"}
Una disequazione richiede un confronto fra i membri. Sommare la stessa quantità conserva il verso; moltiplicare per un numero positivo lo conserva; moltiplicare per un numero negativo lo inverte. Da $-3x+6\le0$ si ricava $-3x\le-6$ e quindi $x\ge2$. Il punto $2$ è incluso perché rende uguali i membri.

Se il fattore contiene l'incognita, il suo segno deve essere conosciuto prima di moltiplicare. Per prodotti e rapporti, lo studio dei segni evita di assumere un segno non ancora dimostrato. I valori che annullano i fattori dividono la retta in intervalli nei quali ciascun fattore mantiene il proprio segno.
:::

:::esempio{#segni-prodotti titolo="Segno di un prodotto"}
Per risolvere $(x+3)(x-1)>0$ si individuano gli zeri $-3$ e $1$. Per $x<-3$ i fattori sono entrambi negativi; per $-3<x<1$ hanno segni opposti; per $x>1$ sono entrambi positivi. Il prodotto è quindi positivo per $x<-3$ oppure $x>1$. Gli zeri sono esclusi perché il confronto è stretto.

::grafico{f="(x+3)*(x-1)" xmin=-5 xmax=3 ymin=-5 ymax=10 punti="-3,0;1,0" titolo="Il prodotto è positivo dove il grafico si trova sopra l'asse orizzontale"}
:::

:::osservazione{#segni-frazioni titolo="Zeri, denominatori e intersezioni"}
Un rapporto è positivo quando numeratore e denominatore hanno lo stesso segno. Gli zeri del denominatore sono sempre esclusi. Per $\dfrac{x+1}{x-4}\le0$ il rapporto è negativo fra $-1$ e $4$, vale zero in $-1$ e non è definito in $4$, quindi la soluzione è $[-1,4)$.

Quando più condizioni devono valere insieme si prende l'intersezione degli insiemi soluzione. Per esempio, $(x-1)(x+3)\le0$ dà $[-3,1]$; aggiungendo $x>0$ resta $(0,1]$. Il punto zero viene escluso dalla seconda condizione, mentre il punto uno soddisfa entrambe.
:::

## Condizioni di esistenza ed equazioni irrazionali

:::definizione{#dominio titolo="Valori ammessi"}
Il **dominio** di un'espressione reale contiene i valori per cui ogni operazione indicata è definita. I denominatori devono essere diversi da zero e i radicandi delle radici di indice pari devono essere non negativi. Se il denominatore è una radice quadrata, il suo radicando deve essere strettamente positivo. Per $\dfrac1{\sqrt{(x-1)(x+2)}}$ si richiede quindi $(x-1)(x+2)>0$, che dà $x<-2$ oppure $x>1$.

Una semplificazione conserva le restrizioni iniziali. Anche un passaggio che eleva al quadrato deve essere accompagnato dal controllo dei segni: due numeri opposti hanno lo stesso quadrato, quindi l'uguaglianza dei quadrati da sola non garantisce l'uguaglianza dei numeri.
:::

:::esempio{#equazioni-irrazionali titolo="Eliminare una radice"}
Nell'equazione $\sqrt{x+1}=x-1$, la radice è non negativa, quindi serve $x\ge1$. Questa condizione rende positivo anche il radicando. Elevando al quadrato si ottiene
$$
x+1=(x-1)^2,\qquad x^2-3x=0,
$$
perciò i candidati sono $0$ e $3$. Il primo non soddisfa $x\ge1$; il secondo verifica $\sqrt{3+1}=3-1=2$. L'insieme soluzione è dunque $\{3\}$. Il grafico mostra l'unica intersezione delle due curve.

::grafico{f="sqrt(x+1);x-1" xmin=-1 xmax=5 ymin=-1 ymax=4 punti="3,2,pieno" titolo="La radice e la retta si incontrano soltanto nel punto di ascissa tre"}
:::

:::attenzione{titolo="Divisione per l'incognita"}
Nell'equazione $x(x-2)=0$, dividere subito per $x$ elimina la soluzione $x=0$. La legge di annullamento del prodotto conserva invece entrambi i casi, $x=0$ e $x=2$. Se una divisione è necessaria, il caso in cui il divisore si annulla va studiato separatamente. Questa distinzione serve anche nelle equazioni con parametri, perché un coefficiente apparentemente numerico può diventare zero per alcuni valori del parametro.
:::
