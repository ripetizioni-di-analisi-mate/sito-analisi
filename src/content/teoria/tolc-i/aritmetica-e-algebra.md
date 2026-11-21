---
titolo: "Aritmetica e algebra per il TOLC-I"
sommario: "Numeri, rapporti, potenze, equazioni e disequazioni con esempi, condizioni di esistenza e interpretazione dei risultati."
---

## Numeri razionali e calcolo esatto

:::definizione{#numeri-razionali titolo="Frazioni e rappresentazioni"}
I **numeri interi** sono $0,1,2,3,\dots$ e i loro opposti $-1,-2,-3,\dots$ Una **frazione** $\dfrac ab$ indica la divisione fra due interi: $a$ è il **numeratore** e $b$ è il **denominatore**, che è diverso da zero (in simboli, $b\ne0$). Il denominatore indica in quante parti uguali si divide l'unità; il numeratore indica quante di quelle parti si prendono. Un'ora divisa in $4$ parti uguali dà parti da $15$ minuti, quindi $\dfrac34$ di ora sono $3\cdot15=45$ minuti. Un **numero razionale** è un numero che si può scrivere come frazione.

Moltiplicando o dividendo numeratore e denominatore per uno stesso numero diverso da zero si ottiene una frazione **equivalente**, che rappresenta lo stesso numero:
$$
\frac34=\frac{3\cdot5}{4\cdot5}=\frac{15}{20},\qquad
\frac{18}{24}=\frac{18\div6}{24\div6}=\frac34.
$$
Una frazione è **ridotta ai minimi termini** quando numeratore e denominatore non sono più divisibili per uno stesso intero maggiore di uno, come accade per $\dfrac34$. Eseguendo la divisione si ottiene la scrittura decimale: $3\div4=0{,}75$.

Due frazioni si confrontano dopo averle scritte con lo stesso denominatore positivo, perché allora è maggiore quella con il numeratore maggiore. Per $\dfrac58$ e $\dfrac7{12}$ un denominatore comune è $24$:
$$
\frac58=\frac{5\cdot3}{8\cdot3}=\frac{15}{24},\qquad
\frac7{12}=\frac{7\cdot2}{12\cdot2}=\frac{14}{24}.
$$
Poiché $15>14$, risulta $\dfrac58>\dfrac7{12}$. Se i denominatori sono positivi, lo stesso confronto si legge dai **prodotti incrociati** $5\cdot12=60$ e $7\cdot8=56$, che sono i numeratori delle due frazioni scritte con denominatore $8\cdot12=96$.
:::

:::teorema{#operazioni-frazioni titolo="Operazioni tra frazioni"}
- **Somma e differenza.** Con lo stesso denominatore si sommano i numeratori: $\dfrac27+\dfrac37=\dfrac57$. Se i denominatori sono diversi, si passa prima a frazioni equivalenti con lo stesso denominatore.
- **Prodotto.** Si moltiplicano fra loro i numeratori e fra loro i denominatori.
- **Quoziente**, cioè il risultato di una divisione. Il **reciproco** di una frazione diversa da zero si ottiene scambiando numeratore e denominatore: il reciproco di $\dfrac45$ è $\dfrac54$. Dividere per una frazione equivale a moltiplicare per il suo reciproco.

Per esempio,
$$
\begin{aligned}
\frac12+\frac13&=\frac{1\cdot3}{2\cdot3}+\frac{1\cdot2}{3\cdot2}=\frac36+\frac26=\frac56,\\[6pt]
\frac23\cdot\frac45&=\frac{2\cdot4}{3\cdot5}=\frac8{15},\\[6pt]
\frac23\div\frac45&=\frac23\cdot\frac54=\frac{10}{12}=\frac56.
\end{aligned}
$$
Con le lettere, per $b\ne0$ e $d\ne0$, le stesse regole si scrivono
$$
\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab\cdot\frac cd=\frac{ac}{bd},\qquad
\frac ab\div\frac cd=\frac{ad}{bc}\quad(c\ne0).
$$
Nell'ultima formula serve anche $c\ne0$, perché la frazione $\dfrac cd$ per cui si divide è diversa da zero soltanto se lo è il suo numeratore. In un prodotto un numeratore e un denominatore con un divisore comune si semplificano prima di moltiplicare: in $\dfrac49\cdot\dfrac38$ si dividono $4$ e $8$ per $4$, poi $3$ e $9$ per $3$, e resta $\dfrac13\cdot\dfrac12=\dfrac16$.
:::

:::esempio{titolo="Priorità delle operazioni e stima"}
Si eseguono prima le operazioni racchiuse fra parentesi, poi moltiplicazioni e divisioni, infine addizioni e sottrazioni. In $\left(2-\dfrac34\right)\div\dfrac56$ si calcola quindi prima la differenza, scrivendo $2$ come $\dfrac84$:
$$
\begin{aligned}
\left(2-\frac34\right)\div\frac56
&=\left(\frac84-\frac34\right)\div\frac56\\[6pt]
&=\frac54\div\frac56\\[6pt]
&=\frac54\cdot\frac65\\[6pt]
&=\frac{30}{20}=\frac32.
\end{aligned}
$$
Il numero $\dfrac56$ per cui si divide è positivo e minore di uno, quindi il quoziente supera $\dfrac54=1{,}25$, come accade per $\dfrac32=1{,}5$. Questa stima controlla che il risultato sia plausibile; il valore esatto resta quello calcolato con le frazioni.
:::

:::osservazione{#decimali titolo="Decimali finiti e periodici"}
Un **numero primo** è un intero maggiore di uno divisibile soltanto per uno e per sé stesso: $2,3,5,7,11,\dots$ Ogni intero maggiore di uno è un prodotto di numeri primi, i suoi **fattori primi**: $40=2\cdot2\cdot2\cdot5$.

La scrittura decimale di una frazione ridotta ai minimi termini è **finita**, cioè ha un numero finito di cifre dopo la virgola, quando il denominatore ha soltanto i fattori primi $2$ e $5$. In questo caso una frazione equivalente ha per denominatore $10$, $100$, $1000$ o un'altra potenza di dieci. Il denominatore $40$, moltiplicato per $25=5\cdot5$, dà $1000$:
$$
\frac7{40}=\frac{7\cdot25}{40\cdot25}=\frac{175}{1000}=0{,}175.
$$
Se il denominatore ha un fattore primo diverso da $2$ e da $5$, la divisione non termina e un gruppo di cifre, il **periodo**, si ripete senza fine. Il periodo si indica con una barra: $\dfrac13=0{,}333\dots=0{,}\overline3$.

Per passare da un decimale periodico alla frazione si moltiplica per la potenza di dieci che sposta la virgola di un periodo. In $z=0{,}\overline{27}=0{,}272727\dots$ il periodo ha due cifre, quindi si moltiplica per $100$:
$$
\begin{aligned}
100z&=27{,}272727\dots=27+z\\
100z-z&=27\\
99z&=27\\
z&=\frac{27}{99}=\frac3{11}.
\end{aligned}
$$
Il decimale finito $0{,}27=\dfrac{27}{100}$ è un numero diverso da $0{,}\overline{27}$.
:::

## Divisibilità, resti e approssimazioni

:::definizione{#divisibilita titolo="Divisori comuni e multipli comuni"}
Poiché $12=3\cdot4$, il numero $3$ è un **divisore** di $12$ e $12$ è un **multiplo** di $3$. Un intero positivo $d$ divide un intero $n$ quando $n=d\cdot q$ per qualche intero $q$, cioè quando la divisione di $n$ per $d$ non lascia resto.

- Il **massimo comune divisore** (MCD) di due interi positivi è il più grande intero che li divide entrambi. I divisori comuni di $12$ e $18$ sono $1,2,3,6$, quindi il loro MCD è $6$.
- Il **minimo comune multiplo** (mcm) è il più piccolo intero positivo multiplo di entrambi. I multipli di $18$ sono $18,36,54,\dots$ e il primo che è anche multiplo di $12$ è $36$.

Con numeri grandi si usa la scomposizione in fattori primi, scrivendo i fattori ripetuti come potenze, nelle quali l'esponente conta le ripetizioni: $12=2\cdot2\cdot3=2^2\cdot3$ e $18=2\cdot3\cdot3=2\cdot3^2$. Il MCD è il prodotto dei fattori primi comuni, ciascuno con l'esponente minore. Il mcm è il prodotto di tutti i fattori primi presenti, ciascuno con l'esponente maggiore:
$$
\operatorname{MCD}(12,18)=2\cdot3=6,\qquad
\operatorname{mcm}(12,18)=2^2\cdot3^2=36.
$$
Il MCD serve nelle suddivisioni in gruppi uguali senza avanzi: $12$ penne rosse e $18$ blu riempiono al massimo $6$ confezioni identiche. Il mcm serve nelle coincidenze: due autobus che passano ogni $12$ e ogni $18$ minuti, partiti insieme, ripartono insieme dopo $36$ minuti.
:::

:::definizione{#divisione-resto titolo="Divisione euclidea"}
Il $7$ sta $3$ volte nel $26$ e avanzano $5$ unità, quindi $26=7\cdot3+5$. Il numero $3$ è il **quoziente** e $5$ è il **resto**. La divisione con resto di un intero $a$ per un intero positivo $b$ è la scrittura
$$
a=bq+r,\qquad 0\le r<b,
$$
dove $q$ e $r$ sono interi e il simbolo $\le$ si legge «minore o uguale». Il resto è dunque positivo o nullo ed è minore del divisore; con questa condizione quoziente e resto sono determinati in un solo modo.

Per dividere $-26$ per $7$ si cerca il più grande multiplo di $7$ che non supera $-26$, cioè $-28=7\cdot(-4)$. Poiché $-26=-28+2$, il quoziente è $-4$ e il resto è $2$.
:::

:::attenzione
Anche l'uguaglianza $-26=7\cdot(-3)-5$ è vera, ma $-5$ è negativo e non soddisfa $0\le r<7$, quindi non è il resto.
:::

:::osservazione{#stime titolo="Stime e precisione"}
**Arrotondare al decimo** un numero significa sostituirlo con il multiplo di $0{,}1$ più vicino, cioè con il più vicino numero con una sola cifra decimale. **Troncare al decimo** verso zero significa cancellare le cifre che seguono la prima cifra decimale. Il numero $-2{,}76$ è compreso fra $-2{,}8$ e $-2{,}7$; dista $0{,}04$ dal primo e $0{,}06$ dal secondo, quindi l'arrotondamento al decimo è $-2{,}8$. Il troncamento cancella la cifra $6$ e dà $-2{,}7$.

Si supponga che il lato di un quadrato misuri fra $4{,}9$ e $5{,}1$ centimetri. Fra due numeri positivi, quello maggiore ha il quadrato maggiore, quindi l'area è compresa fra
$$
4{,}9^2=24{,}01\qquad\text{e}\qquad5{,}1^2=26{,}01
$$
centimetri quadrati. In questo modo si delimita un risultato senza conoscere tutte le cifre del dato.
:::

## Rapporti, proporzioni e percentuali

:::definizione{#rapporti titolo="Rapporto e quantità totale"}
Il **rapporto** fra due quantità dello stesso tipo è il quoziente della prima per la seconda. Se due quote sono nel rapporto $5$ a $3$, la prima contiene $5$ parti uguali e la seconda $3$. Indicando con $k>0$ il valore di una parte, le quote sono $5k$ e $3k$ e il totale è $8k$. Per dividere $96$ euro in questo rapporto si ricava prima $k$:
$$
8k=96,\qquad k=\frac{96}8=12,\qquad 5k=60,\qquad 3k=36.
$$

Una **proporzione** è l'uguaglianza di due rapporti. Si scrive $a:b=c:d$ e significa $\dfrac ab=\dfrac cd$, con $b$ e $d$ diversi da zero. Per esempio $6:4=9:6$, perché entrambi i rapporti valgono $1{,}5$. Le espressioni a sinistra e a destra del segno $=$ si chiamano **membri** dell'uguaglianza. Moltiplicando entrambi i membri per $bd$ si ottiene $ad=bc$, cioè il prodotto degli estremi $a$ e $d$ è uguale al prodotto dei medi $b$ e $c$ (nell'esempio, $6\cdot6=4\cdot9=36$).

In una mappa in scala $1$ a $250$, $1\,\mathrm{cm}$ sul disegno corrisponde a $250\,\mathrm{cm}$ reali. Per un segmento di $7{,}2\,\mathrm{cm}$ sul disegno, la lunghezza reale $x$ soddisfa $1:250=7{,}2:x$, cioè $1\cdot x=250\cdot7{,}2$, quindi
$$
x=250\cdot7{,}2\,\mathrm{cm}=1800\,\mathrm{cm}=18\,\mathrm{m}.
$$
In un problema di scala le due lunghezze si esprimono nella stessa unità.
:::

:::teorema{#percentuali titolo="Variazioni percentuali"}
Il simbolo $\%$ si legge «per cento» e significa «diviso cento»: $12\%=\dfrac{12}{100}=0{,}12$. Il $12\%$ di $50$ è $50\cdot\dfrac{12}{100}=6$. Il $r\%$ di una quantità $P$ è $P\cdot\dfrac r{100}$.

Se $50$ euro aumentano del $12\%$, il nuovo valore è
$$
50+50\cdot0{,}12=50\cdot(1+0{,}12)=50\cdot1{,}12=56 .
$$
Un aumento del $r\%$ moltiplica quindi la quantità $P$ per $1+\dfrac r{100}$, e una diminuzione del $r\%$ la moltiplica per $1-\dfrac r{100}$. Il numero per cui si moltiplica è il **fattore di variazione**. Per risalire dal valore finale a quello iniziale si divide per il fattore: $56$ euro dopo un aumento del $12\%$ corrispondono a $56\div1{,}12=50$ euro iniziali.

La **variazione percentuale** da un valore iniziale positivo $P$ a un valore finale $Q$ è
$$
\frac{Q-P}{P}\cdot100\%.
$$
Al denominatore c'è il valore iniziale, perché la variazione si misura rispetto a esso. Da $50$ a $56$ euro la variazione è $\dfrac{56-50}{50}\cdot100\%=12\%$.
:::

:::esempio{titolo="Due variazioni successive"}
Un prezzo di $80$ euro aumenta del $20\%$ e poi diminuisce del $20\%$. La seconda variazione si applica al valore già aumentato:
$$
\begin{aligned}
80\cdot1{,}20&=96,\\
96\cdot0{,}80&=76{,}80.
\end{aligned}
$$
Il prezzo finale è minore di $80$ euro, perché l'aumento è il $20\%$ di $80$ euro, cioè $16$ euro, e lo sconto è il $20\%$ di $96$ euro, cioè $19{,}20$ euro. Il fattore complessivo è $1{,}20\cdot0{,}80=0{,}96=1-\dfrac4{100}$, quindi le due variazioni insieme equivalgono a una diminuzione del $4\%$.
:::

## Potenze e notazione scientifica

:::teorema{#potenze titolo="Proprietà delle potenze"}
La **potenza** $a^n$, con $n$ intero positivo, è il prodotto di $n$ fattori uguali ad $a$. Il numero $a$ è la **base** e $n$ è l'**esponente**. Per esempio $2^3=2\cdot2\cdot2=8$. Contando i fattori si ricavano tre regole:
$$
\begin{aligned}
2^3\cdot2^2&=(2\cdot2\cdot2)\cdot(2\cdot2)=2^5,\\[4pt]
\frac{2^5}{2^2}&=\frac{2\cdot2\cdot2\cdot2\cdot2}{2\cdot2}=2^3,\\[4pt]
(2^3)^2&=2^3\cdot2^3=2^6.
\end{aligned}
$$
Nel prodotto di potenze con la stessa base gli esponenti si sommano, nel quoziente si sottraggono, nella potenza di una potenza si moltiplicano.

Per una base $a\ne0$ si pone $a^0=1$ e $a^{-n}=\dfrac1{a^n}$, in modo che la regola del quoziente valga per ogni coppia di esponenti: $\dfrac{2^3}{2^3}=1=2^{3-3}$ e $\dfrac{2^2}{2^5}=\dfrac1{2^3}=2^{2-5}$. La condizione $a\ne0$ è necessaria nei quozienti e con gli esponenti nulli o negativi, perché in quei casi si divide per $a$. Per esponenti interi $m$, $n$ e base $a\ne0$ valgono dunque
$$
a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn},\qquad
a^{-n}=\frac1{a^n}.
$$
Una base negativa elevata a un esponente pari dà un risultato positivo, perché i segni meno si eliminano a coppie. Con un esponente dispari il risultato è negativo:
$$
(-2)^4=(-2)(-2)(-2)(-2)=16,\qquad(-2)^3=(-2)(-2)(-2)=-8.
$$
:::

:::attenzione
Nella scrittura $-2^4$ l'esponente si applica soltanto a $2$, quindi $-2^4=-(2\cdot2\cdot2\cdot2)=-16$. Il risultato $16$ si ottiene da $(-2)^4$, dove la base è $-2$.
:::

:::definizione{#notazione-scientifica titolo="Ordine di grandezza e potenze di dieci"}
La **notazione scientifica** di un numero positivo è la scrittura $c\cdot10^n$, con $1\le c<10$ e $n$ intero. Il fattore $c$ contiene le cifre del numero; la potenza $10^n$ ne indica l'**ordine di grandezza**:
$$
5300=5{,}3\cdot10^3,\qquad 0{,}00012=1{,}2\cdot10^{-4}.
$$
Moltiplicando $5{,}3$ per $10^3=1000$ la virgola si sposta di tre posti verso destra; moltiplicando $1{,}2$ per $10^{-4}=\dfrac1{10000}$ si sposta di quattro posti verso sinistra.

Nel prodotto si moltiplicano i fattori numerici e si sommano gli esponenti; se il fattore ottenuto non è compreso fra $1$ e $10$, lo si riscrive:
$$
\begin{aligned}
(4\cdot10^{-2})(3\cdot10^{-3})
&=(4\cdot3)\cdot10^{-2+(-3)}\\
&=12\cdot10^{-5}\\
&=1{,}2\cdot10\cdot10^{-5}\\
&=1{,}2\cdot10^{-4}.
\end{aligned}
$$
Due numeri con la stessa potenza di dieci si confrontano attraverso i fattori numerici: $3\cdot10^5<7\cdot10^5$. Se le potenze sono diverse, si riporta un numero all'esponente dell'altro: $2\cdot10^6=20\cdot10^5$, quindi $2\cdot10^6>9\cdot10^5$, anche se $2<9$.
:::

:::osservazione
La **radice** $n$-esima di un numero positivo $a$, indicata con $\sqrt[n]{a}$, è il numero positivo che elevato a $n$ dà $a$; il numero $n$ è l'**indice** della radice. Per esempio $\sqrt[4]{16}=2$, perché $2^4=16$. Per $n=2$ si scrive $\sqrt a$.

Un esponente frazionario indica una radice. Per $a>0$ si pone $a^{\frac1n}=\sqrt[n]{a}$, in modo che la regola della potenza di una potenza continui a valere: $\left(9^{\frac12}\right)^2=9^{\frac12\cdot2}=9$, e infatti $9^{\frac12}=\sqrt9=3$. Per $m$ intero e $n$ intero positivo,
$$
a^{\frac mn}=\left(\sqrt[n]{a}\right)^m=\sqrt[n]{a^m}\qquad(a>0).
$$
Per esempio, calcolando prima la radice,
$$
16^{\frac34}=\left(\sqrt[4]{16}\right)^3=2^3=8.
$$
Con una base positiva tutte le radici esistono e le regole delle potenze valgono. Con una base negativa l'esistenza della radice dipende dalla parità dell'indice, quindi ogni caso si controlla a parte.
:::

## Radici e valore assoluto

:::definizione{#radici titolo="Radice principale"}
La **radice quadrata** di un numero $a\ge0$, indicata con $\sqrt a$, è il numero positivo o nullo il cui quadrato è $a$. Il simbolo $\ge$ si legge «maggiore o uguale» e il numero $a$ sotto il segno di radice è il **radicando**. I numeri con quadrato $9$ sono due, $3$ e $-3$, perché $3^2=9$ e $(-3)^2=9$. Il simbolo $\sqrt9$ indica soltanto $3$.

Per questo $\sqrt{(-3)^2}=\sqrt9=3$. Per ogni $x$ vale $\sqrt{x^2}=|x|$, dove il valore assoluto $|x|$ è $x$ stesso se $x\ge0$ ed è $-x$ se $x<0$.

Con indice dispari la radice esiste anche per un radicando negativo: $\sqrt[3]{-8}=-2$, perché $(-2)^3=-8$. Con indice pari il radicando è positivo o nullo, perché una potenza con esponente pari non è mai negativa.

Per $a,b\ge0$ la radice di un prodotto è il prodotto delle radici, $\sqrt{ab}=\sqrt a\,\sqrt b$. Con questa regola si semplifica una radice quando il radicando contiene un fattore che è un quadrato:
$$
\sqrt{72}=\sqrt{36\cdot2}=\sqrt{36}\cdot\sqrt2=6\sqrt2.
$$
Due termini con la stessa radice si sommano come multipli della stessa quantità: $6\sqrt2-3\sqrt2=(6-3)\sqrt2=3\sqrt2$.
:::

:::attenzione
La regola del prodotto non ha un'analoga per la somma. Infatti $\sqrt{9+16}=\sqrt{25}=5$, mentre $\sqrt9+\sqrt{16}=3+4=7$.
:::

:::esempio{#razionalizzazione titolo="Razionalizzare un denominatore"}
**Razionalizzare** una frazione significa scriverne una equivalente senza radici al denominatore. Si moltiplicano numeratore e denominatore per uno stesso numero diverso da zero, quindi cambia la forma della frazione e il suo valore resta uguale. Se il denominatore è $\sqrt3$ si moltiplica per $\sqrt3$, perché $\sqrt3\cdot\sqrt3=3$:
$$
\frac6{\sqrt3}=\frac{6\cdot\sqrt3}{\sqrt3\cdot\sqrt3}=\frac{6\sqrt3}3=2\sqrt3.
$$
Se il denominatore è la differenza $\sqrt5-2$, si moltiplica per la somma $\sqrt5+2$, detta **espressione coniugata**, perché nel prodotto di una differenza per la somma degli stessi termini restano soltanto i quadrati:
$$
\begin{aligned}
\frac1{\sqrt5-2}
&=\frac{1\cdot(\sqrt5+2)}{(\sqrt5-2)(\sqrt5+2)}\\[6pt]
&=\frac{\sqrt5+2}{\sqrt5\cdot\sqrt5+2\sqrt5-2\sqrt5-2\cdot2}\\[6pt]
&=\frac{\sqrt5+2}{5-4}\\[6pt]
&=\sqrt5+2.
\end{aligned}
$$
:::

:::definizione{#valore-assoluto titolo="Distanza sulla retta"}
I **numeri reali**, il cui insieme si indica con $\mathbb R$, sono i razionali insieme ai numeri con infinite cifre decimali senza periodo, come $\sqrt2=1{,}41421\dots$; si rappresentano come punti di una retta. Il **valore assoluto** di un numero reale $x$, indicato con $|x|$, è la distanza dallo zero del punto che rappresenta $x$. I punti $5$ e $-5$ distano entrambi $5$ dallo zero, quindi $|5|=5$ e $|-5|=5$. In formula, $|x|=x$ se $x\ge0$ e $|x|=-x$ se $x<0$; per esempio $|-5|=-(-5)=5$.

Allo stesso modo, $|x-a|$ è la distanza fra i punti $x$ e $a$: fra $1$ e $3$ la distanza è $|1-3|=|-2|=2$. Per $r>0$ i punti a distanza minore di $r$ da $a$ sono quelli compresi fra $a-r$ e $a+r$:
$$
|x-a|<r\quad\Longleftrightarrow\quad a-r<x<a+r.
$$
Il simbolo $\Longleftrightarrow$ si legge «se e solo se» e indica che le due scritture sono vere per gli stessi valori di $x$. Gli altri due casi sono i seguenti.

- L'uguaglianza $|x-a|=r$ vale per i due punti a distanza $r$ da $a$, cioè $x=a-r$ e $x=a+r$.
- La disuguaglianza $|x-a|>r$ vale per i punti a distanza maggiore di $r$, cioè per $x<a-r$ oppure $x>a+r$.

Con $\le$ e $\ge$ al posto di $<$ e $>$ si includono anche gli estremi $a-r$ e $a+r$. Per $r=0$ l'uguaglianza $|x-a|=0$ è vera soltanto per $x=a$.
:::

:::esempio{titolo="Distanza da tre"}
La scrittura $|x-3|<2$ chiede i numeri che distano da $3$ meno di $2$. Con $a=3$ e $r=2$ essi soddisfano
$$
3-2<x<3+2,\qquad\text{cioè}\qquad 1<x<5.
$$

Nella figura il grafico di $y=|x-3|$, una linea spezzata, sta sotto la retta orizzontale $y=2$ per le ascisse comprese fra $1$ e $5$; l'**ascissa** di un punto è il suo valore di $x$. I cerchietti vuoti segnano i due estremi, che sono esclusi.

::grafico{f="abs(x-3);2" xmin=-1 xmax=7 ymin=-0.5 ymax=5 punti="1,2,vuoto;5,2,vuoto" titolo="I punti di intersezione delimitano le ascisse con distanza da tre minore di due"}
:::

## Polinomi e scomposizioni

:::definizione{#polinomi titolo="Termini simili e grado"}
Un **monomio** in $x$ è il prodotto di un numero per una potenza di $x$ con esponente intero positivo o nullo, come $5x^2$, $-3x$ e $7=7x^0$. Il numero è il **coefficiente** del monomio e l'esponente di $x$ è il suo grado. Un **polinomio** è una somma di monomi, come $2x^3-5x+1$. Un polinomio con due monomi si chiama binomio, uno con tre monomi trinomio.

Due monomi con lo stesso esponente sono **termini simili** e si sommano sommando i coefficienti: $3x^2+5x^2=8x^2$. Il **grado** di un polinomio è l'esponente più alto fra quelli dei suoi monomi con coefficiente diverso da zero, dopo aver sommato i termini simili. Il **termine noto** è il monomio di grado zero, cioè il valore del polinomio per $x=0$.

Nel prodotto di due polinomi ogni termine del primo si moltiplica per ogni termine del secondo (proprietà distributiva), poi si sommano i termini simili.
$$
\begin{aligned}
(2x-3)(x+4)&=2x\cdot x+2x\cdot4-3\cdot x-3\cdot4\\
&=2x^2+8x-3x-12\\
&=2x^2+5x-12.
\end{aligned}
$$
Il risultato ha grado $2$ e termine noto $-12$. Il coefficiente di $x$ si ottiene raccogliendo i prodotti che contengono $x$, cioè $8x$ e $-3x$, e vale $8-3=5$.

Nell'esempio seguente i termini di quarto grado si eliminano, quindi il polinomio ha grado $1$:
$$
\begin{aligned}
(x^2+1)(x^2-1)-x^4+5x&=x^4-x^2+x^2-1-x^4+5x\\
&=5x-1.
\end{aligned}
$$
:::

:::teorema{#scomposizioni titolo="Prodotti notevoli e fattori comuni"}
**Scomporre** un polinomio significa scriverlo come prodotto di polinomi di grado minore. Serve a trovare i valori di $x$ in cui il polinomio vale zero, a studiarne il segno e a semplificare le frazioni. Gli strumenti sono tre.

Il primo è il **raccoglimento** di un fattore comune a tutti i termini. In $6x^2-15x$ entrambi i termini contengono $3x$, perché $6x^2=3x\cdot2x$ e $15x=3x\cdot5$. Perciò $6x^2-15x=3x(2x-5)$.

Il secondo sono i **prodotti notevoli**, due identità, cioè uguaglianze vere per ogni coppia di numeri reali $a$, $b$, che si ricavano con la proprietà distributiva:
$$
\begin{aligned}
(a+b)^2&=(a+b)(a+b)=a^2+ab+ba+b^2=a^2+2ab+b^2,\\
(a-b)(a+b)&=a^2+ab-ba-b^2=a^2-b^2.
\end{aligned}
$$
Il termine $2ab$ del quadrato proviene dai due prodotti uguali $ab$ e $ba$. Sui numeri, $13^2=(10+3)^2=100+2\cdot30+9=169$ e $13\cdot7=(10+3)(10-3)=100-9=91$. Lette da destra verso sinistra, le due identità danno la scomposizione di un polinomio: $x^2+6x+9=(x+3)^2$ e $x^2-9=(x-3)(x+3)$.

Il terzo riguarda il trinomio $x^2+sx+p$, detto **monico** perché il coefficiente di $x^2$ è $1$. Poiché
$$
(x+u)(x+v)=x^2+(u+v)x+uv,
$$
il trinomio si scompone in $(x+u)(x+v)$ quando si trovano due numeri $u$ e $v$ con somma $s$ e prodotto $p$. Per $x^2+x-20$ i numeri sono $5$ e $-4$, perché $5+(-4)=1$ e $5\cdot(-4)=-20$. Quindi $x^2+x-20=(x+5)(x-4)$.
:::

:::teorema{#cubi-resto titolo="Cubi e resto di un polinomio"}
Il cubo di un binomio si ricava moltiplicando il quadrato per un altro fattore $a+b$:
$$
\begin{aligned}
(a+b)^3&=(a+b)(a^2+2ab+b^2)\\
&=a^3+2a^2b+ab^2+a^2b+2ab^2+b^3\\
&=a^3+3a^2b+3ab^2+b^3.
\end{aligned}
$$
Il coefficiente $3$ di $a^2b$ conta i tre modi di scegliere $b$ da uno solo dei tre fattori $a+b$. Per esempio $11^3=(10+1)^3=1000+300+30+1=1331$. La differenza di due cubi si scompone con
$$
a^3-b^3=(a-b)(a^2+ab+b^2),
$$
che si verifica sviluppando il secondo membro: $a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3$. Con $a=x$ e $b=3$ si ottiene $x^3-27=(x-3)(x^2+3x+9)$.

Come fra interi, la divisione di un polinomio $P(x)$ per il binomio $x-c$, dove $c$ è un numero, ha un quoziente $Q(x)$ e un resto $r$, che è un numero:
$$
P(x)=(x-c)\,Q(x)+r.
$$
Per $x=c$ il fattore $x-c$ vale zero, quindi $P(c)=0\cdot Q(c)+r=r$. Il resto è dunque $P(c)$, cioè il valore del polinomio per $x=c$, e si calcola senza eseguire la divisione. Per $P(x)=x^3-x+2$ e $c=2$ il resto è $P(2)=2^3-2+2=8$.

Ne segue che $x-c$ è un fattore di $P(x)$ esattamente quando $P(c)=0$. Per $P(x)=x^3-27$ si ha $P(3)=27-27=0$, e infatti nella divisione di $x^3-27$ per $x-3$ il quoziente è $x^2+3x+9$ e il resto è zero.
:::

:::attenzione{#frazioni-algebriche titolo="Semplificazione e dominio"}
Una frazione si semplifica dividendo numeratore e denominatore per un **fattore** comune, cioè per un'espressione che moltiplica tutto il numeratore e tutto il denominatore. Gli addendi, cioè i termini di una somma, non si semplificano. Sui numeri, $\dfrac{6\cdot5}{6\cdot7}=\dfrac57$, mentre $\dfrac{6+5}{6+7}=\dfrac{11}{13}$.

Nella frazione
$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3
$$
il fattore comune è $x-3$. Per $x=3$ il denominatore iniziale vale zero e la frazione non è definita, quindi l'uguaglianza vale per $x\ne3$ e questa condizione si scrive accanto al risultato. L'espressione $x+3$ si calcola anche per $x=3$, dove vale $6$, mentre la frazione iniziale in quel punto non è definita.

Nella frazione $\dfrac{x+3}x$ la lettera $x$ del numeratore è un addendo, quindi non si semplifica. Per $x=3$ la frazione vale $\dfrac{3+3}3=2$; cancellando le due $x$ si otterrebbe invece $3$.
:::

## Equazioni lineari e sistemi

:::teorema{#equazioni-lineari titolo="Trasformazioni equivalenti"}
Un'**equazione** è un'uguaglianza che contiene una lettera di valore sconosciuto, l'**incognita**, indicata di solito con $x$. Una **soluzione** è un valore dell'incognita che rende uguali i due membri; risolvere l'equazione significa trovarle tutte. In $2x+3=11$ il valore $x=4$ è una soluzione, perché $2\cdot4+3=11$.

Due operazioni trasformano un'equazione in un'altra con le stesse soluzioni, e servono a isolare l'incognita:

- sommare o sottrarre ai due membri lo stesso numero, o la stessa espressione definita per tutti i valori ammessi dell'incognita;
- moltiplicare o dividere i due membri per lo stesso numero diverso da zero.

$$
\begin{aligned}
2x+3&=11\\
2x+3-3&=11-3\\
2x&=8\\
x&=\frac82=4.
\end{aligned}
$$
Un'equazione **lineare**, o di primo grado, ha la forma $ax+b=0$, dove $a$ e $b$ sono numeri assegnati. Se $a\ne0$, sottraendo $b$ e dividendo per $a$ si ottiene l'unica soluzione $x=-\dfrac ba$. Se $a=0$ l'equazione si riduce a $b=0$, che non contiene l'incognita. Quando $b=0$ ogni numero reale è soluzione; quando $b\ne0$ l'equazione non ha soluzioni.

Se l'incognita compare in un denominatore, si scrive prima la **condizione di esistenza**, che esclude i valori in cui il denominatore vale zero. Nell'equazione $\dfrac{x+2}{x-1}=3$ la condizione è $x\ne1$. Moltiplicando i due membri per $x-1$ si ottiene
$$
\begin{aligned}
x+2&=3(x-1)\\
x+2&=3x-3\\
2+3&=3x-x\\
5&=2x\\
x&=\frac52.
\end{aligned}
$$
Si sviluppa il prodotto, si sottrae $x$ e si somma $3$ ai due membri, infine si divide per $2$. Il valore $\dfrac52$ è diverso da $1$, quindi è accettabile, e soddisfa l'equazione iniziale: il numeratore vale $\dfrac92$, il denominatore $\dfrac32$ e $\dfrac92\cdot\dfrac23=3$.
:::

:::definizione{#sistemi titolo="Condizioni simultanee"}
Un **sistema** è un insieme di equazioni che devono essere vere insieme; si scrive con una graffa. Una soluzione di un sistema nelle incognite $x$ e $y$ è una coppia di numeri $(x,y)$ che soddisfa tutte le equazioni. Nel sistema
$$
\begin{cases}
x+y=7,\\
2x-y=5,
\end{cases}
$$
l'incognita $y$ ha coefficienti opposti, $1$ e $-1$. Sommando i primi membri fra loro e i secondi membri fra loro, $y$ si elimina:
$$
\begin{aligned}
(x+y)+(2x-y)&=7+5\\
3x&=12\\
x&=4.
\end{aligned}
$$
Sostituendo $x=4$ nella prima equazione si ottiene $4+y=7$, quindi $y=3$. La soluzione è la coppia $(4,3)$, che soddisfa anche la seconda equazione, perché $2\cdot4-3=5$.

Un'equazione lineare in $x$ e $y$ rappresenta una retta del piano, e le soluzioni del sistema sono i punti comuni alle due rette. I casi sono tre.

- Le rette si incontrano in un punto e la soluzione è una, come nell'esempio.
- Le rette sono parallele e distinte e il sistema non ha soluzioni, come per $x+y=7$ e $2x+2y=10$, dove i coefficienti delle incognite sono raddoppiati e il termine noto no, quindi la seconda equazione equivale a $x+y=5$.
- Le rette coincidono e le soluzioni sono infinite, come per $x+y=7$ e $2x+2y=14$, dove è raddoppiato anche il termine noto.
:::

:::esempio{titolo="Modello di un acquisto"}
Si acquistano $18$ oggetti di due tipi, alcuni da $2$ euro e gli altri da $4$ euro, spendendo in tutto $54$ euro. Sia $x$ il numero di oggetti da $4$ euro. Gli oggetti da $2$ euro sono allora $18-x$. La spesa è $4x$ euro per i primi e $2(18-x)$ euro per i secondi, quindi
$$
\begin{aligned}
4x+2(18-x)&=54\\
4x+36-2x&=54\\
2x+36&=54\\
2x&=18\\
x&=9.
\end{aligned}
$$
Gli oggetti sono $9$ per tipo e la spesa è $9\cdot4+9\cdot2=54$ euro. L'incognita è un numero di oggetti, quindi si accetta soltanto un intero compreso fra $0$ e $18$, come $9$.
:::

## Equazioni quadratiche e parametri

:::teorema{#equazioni-quadratiche titolo="Discriminante e radici"}
Un'equazione **quadratica**, o di secondo grado, ha la forma $ax^2+bx+c=0$, dove i coefficienti $a$, $b$, $c$ sono numeri assegnati e $a\ne0$. Le sue soluzioni si chiamano anche **radici**.

Se il primo membro è scomposto in fattori si usa la **legge di annullamento del prodotto**: un prodotto vale zero esattamente quando almeno uno dei fattori vale zero. Da $(x-2)(x-3)=0$ segue quindi $x-2=0$ oppure $x-3=0$, cioè $x=2$ oppure $x=3$.

Negli altri casi si calcola il **discriminante**, indicato con la lettera greca $\Delta$ (delta):
$$
\Delta=b^2-4ac,\qquad x=\frac{-b\pm\sqrt\Delta}{2a}.
$$
La formula si ricava completando il quadrato. Il simbolo $\pm$ si legge «più o meno» e indica due valori, uno per ciascun segno. Il numero delle soluzioni dipende dal segno di $\Delta$.

- Se $\Delta>0$ l'equazione ha due soluzioni reali distinte.
- Se $\Delta=0$ i due valori coincidono e la soluzione è una sola, detta radice doppia.
- Se $\Delta<0$ l'equazione non ha soluzioni reali, perché la radice quadrata di un numero negativo non esiste.

Per $x^2-5x+6=0$ i coefficienti sono $a=1$, $b=-5$, $c=6$:
$$
\begin{aligned}
\Delta&=(-5)^2-4\cdot1\cdot6=25-24=1,\\[4pt]
x&=\frac{-(-5)\pm\sqrt1}{2\cdot1}=\frac{5\pm1}2,\\[4pt]
x_1&=\frac{5-1}2=2,\qquad x_2=\frac{5+1}2=3.
\end{aligned}
$$
Se le radici sono $x_1$ e $x_2$, il polinomio si scompone in $a(x-x_1)(x-x_2)=ax^2-a(x_1+x_2)x+ax_1x_2$. Confrontando con $ax^2+bx+c$ si ricavano la somma e il prodotto delle radici, senza calcolarle:
$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
$$
Nell'esempio, $2+3=5$ e $2\cdot3=6$.
:::

:::esempio{titolo="Parametro e radice doppia"}
Un **parametro** è una lettera, diversa dall'incognita, che indica un numero fissato ma non specificato. Nell'equazione $x^2-8x+k=0$ il parametro è $k$ e i coefficienti sono $a=1$, $b=-8$, $c=k$. Il discriminante è
$$
\Delta=(-8)^2-4\cdot1\cdot k=64-4k.
$$
L'equazione ha una radice doppia quando $\Delta=0$, cioè quando $64-4k=0$, da cui $4k=64$ e $k=16$. Per $k=16$ l'equazione è $x^2-8x+16=0$, ossia $(x-4)^2=0$, e l'unica soluzione è $x=4$.

Quando il parametro compare nel coefficiente di $x^2$, per i valori del parametro che rendono nullo quel coefficiente l'equazione ha grado al più uno. Per $k=0$ l'equazione $kx^2-8x+16=0$ diventa $-8x+16=0$, con soluzione $x=2$. La formula con il discriminante richiede $a\ne0$, quindi questi valori si esaminano a parte, insieme agli eventuali valori del parametro che rendono nullo anche il coefficiente di $x$.
:::

:::osservazione{#quadrato-completo titolo="Minimi e sostituzioni"}
**Completare il quadrato** significa riscrivere un trinomio come quadrato di un binomio più un numero. In $x^2-8x+21$ i termini $x^2-8x$ sono i primi due dello sviluppo $(x-4)^2=x^2-8x+16$, dove $4$ è la metà di $8$. Perciò
$$
\begin{aligned}
x^2-8x+21&=(x^2-8x+16)+5\\
&=(x-4)^2+5.
\end{aligned}
$$
Il quadrato $(x-4)^2$ è positivo o nullo e vale zero soltanto per $x=4$. Il valore **minimo** del trinomio è quindi $5$, assunto per $x=4$.

Un'equazione **biquadratica** contiene soltanto $x^4$, $x^2$ e il termine noto, come $x^4-5x^2+4=0$. Ponendo $u=x^2$ si ha $x^4=u^2$, e l'equazione diventa di secondo grado nell'incognita $u$:
$$
\begin{aligned}
u^2-5u+4&=0\\
\Delta&=25-16=9\\
u&=\frac{5\pm3}2,\quad\text{cioè}\quad u=1\ \text{oppure}\ u=4.
\end{aligned}
$$
Da $x^2=1$ si ricava $x=\pm1$ e da $x^2=4$ si ricava $x=\pm2$, quindi le soluzioni sono quattro. Un valore negativo di $u$ non dà soluzioni reali, perché $x^2$ non è mai negativo.
:::

## Disequazioni e segni

:::teorema{#disequazioni titolo="Operazioni e ordine"}
Una **disequazione** è una disuguaglianza che contiene un'incognita, con i due membri separati da uno dei simboli $<$, $>$, $\le$, $\ge$. Le sue soluzioni sono i valori dell'incognita che rendono vera la disuguaglianza. Il **verso** è la direzione del simbolo.

Dalla disuguaglianza vera $2<5$, sommando $3$ ai due membri si ottiene $5<8$ e moltiplicando per $3$ si ottiene $6<15$, entrambe vere. Moltiplicando per $-1$ si ottengono $-2$ e $-5$, per i quali vale $-2>-5$, con il verso opposto. Quindi:

- sommare o sottrarre lo stesso numero ai due membri conserva il verso;
- moltiplicare o dividere per un numero positivo conserva il verso;
- moltiplicare o dividere per un numero negativo inverte il verso.

Nella disequazione $-3x+6\le0$ si sottrae $6$ e poi si divide per $-3$, invertendo il verso:
$$
\begin{aligned}
-3x+6&\le0\\
-3x&\le-6\\
x&\ge2.
\end{aligned}
$$
Il valore $x=2$ è incluso, perché il simbolo $\le$ ammette l'uguaglianza.

Un'espressione con l'incognita, come $x-4$, è positiva per alcuni valori di $x$ e negativa per altri, quindi moltiplicando per essa non si sa se il verso si conserva. Le disequazioni con prodotti e quozienti si risolvono perciò studiando il segno di ciascun fattore. I valori in cui i fattori valgono zero dividono la retta in tratti, e in ciascun tratto ogni fattore conserva lo stesso segno.
:::

:::esempio{#segni-prodotti titolo="Segno di un prodotto"}
Si risolve $(x+3)(x-1)>0$. Il prodotto di due numeri è positivo se essi hanno lo stesso segno ed è negativo se hanno segni opposti. Il fattore $x+3$ vale zero per $x=-3$, che è il suo **zero**, ed è positivo per $x>-3$. Il fattore $x-1$ ha lo zero $x=1$ ed è positivo per $x>1$. I due zeri dividono la retta in tre tratti, detti **intervalli**. La tabella ha una colonna per ogni intervallo e una riga per ogni fattore; l'ultima riga contiene il segno del prodotto, ricavato dalle due precedenti.

| |$x<-3$|$-3<x<1$|$x>1$|
|---|:---:|:---:|:---:|
|$x+3$|$-$|$+$|$+$|
|$x-1$|$-$|$-$|$+$|
|$(x+3)(x-1)$|$+$|$-$|$+$|

Il prodotto è positivo per $x<-3$ oppure $x>1$. I valori $-3$ e $1$ sono esclusi, perché in essi il prodotto vale zero e il simbolo $>$ non ammette l'uguaglianza.

Nella figura le soluzioni sono le ascisse dei punti in cui il grafico di $y=(x+3)(x-1)$ si trova sopra l'asse orizzontale.

::grafico{f="(x+3)*(x-1)" xmin=-5 xmax=3 ymin=-5 ymax=10 punti="-3,0;1,0" titolo="Il prodotto è positivo dove il grafico si trova sopra l'asse orizzontale"}
:::

:::osservazione{#segni-frazioni titolo="Zeri, denominatori e intersezioni"}
Un quoziente è positivo quando numeratore e denominatore hanno lo stesso segno, come un prodotto. I valori in cui il denominatore vale zero sono sempre esclusi, perché in essi il quoziente non è definito. Per $\dfrac{x+1}{x-4}\le0$ il numeratore vale zero in $-1$ e il denominatore in $4$.

| |$x<-1$|$-1<x<4$|$x>4$|
|---|:---:|:---:|:---:|
|$x+1$|$-$|$+$|$+$|
|$x-4$|$-$|$-$|$+$|
|quoziente|$+$|$-$|$+$|

Il quoziente è negativo fra $-1$ e $4$. In $x=-1$ vale zero, e il simbolo $\le$ ammette questo valore. In $x=4$ non è definito. Le soluzioni sono quindi i numeri con $-1\le x<4$. Questo insieme si scrive $[-1,4)$, dove una parentesi quadra indica che l'estremo è incluso e una tonda che è escluso.

Un insieme senza un estremo si scrive con il simbolo $\infty$ (infinito) e una parentesi tonda: $x\ge2$ corrisponde a $[2,+\infty)$ e $x<-3$ a $(-\infty,-3)$. Il simbolo $\in$ si legge «appartiene a» e $\cup$ indica l'**unione** di due insiemi. Le soluzioni $x<-3$ oppure $x>1$ dell'esempio precedente si scrivono $x\in(-\infty,-3)\cup(1,+\infty)$. L'**insieme vuoto**, senza elementi, si indica con $\varnothing$.

Quando più condizioni devono valere insieme, le soluzioni sono i numeri che le soddisfano tutte, cioè l'**intersezione** degli insiemi di soluzioni, indicata con $\cap$. Il prodotto $(x-1)(x+3)$ è negativo fra $-3$ e $1$ e vale zero agli estremi, quindi $(x-1)(x+3)\le0$ ha per soluzioni l'intervallo $[-3,1]$. Con la condizione $x>0$ restano i numeri con $0<x\le1$, cioè $[-3,1]\cap(0,+\infty)=(0,1]$. Lo zero non soddisfa $x>0$, mentre $1$ soddisfa entrambe le condizioni.
:::

## Condizioni di esistenza ed equazioni irrazionali

:::definizione{#dominio titolo="Valori ammessi"}
Il **dominio** di un'espressione che contiene $x$ è l'insieme dei numeri reali $x$ per i quali tutte le operazioni indicate si possono eseguire. Lo individuano le **condizioni di esistenza**, di cui le più frequenti sono due.

- Un denominatore è diverso da zero. Per $\dfrac1{x-2}$ la condizione è $x\ne2$ e il dominio si scrive $\mathbb R\setminus\{2\}$, cioè tutti i numeri reali tranne $2$.
- Il radicando di una radice di indice pari è positivo o nullo. Per $\sqrt{x-2}$ la condizione è $x\ge2$.

Per una radice quadrata al denominatore valgono entrambe, quindi il radicando è maggiore di zero. Per $\dfrac1{\sqrt{(x-1)(x+2)}}$ si richiede $(x-1)(x+2)>0$. Il prodotto è positivo quando i due fattori hanno lo stesso segno, cioè per $x<-2$ oppure $x>1$.

Una semplificazione conserva le condizioni di esistenza dell'espressione iniziale, come accade per $\dfrac{x^2-9}{x-3}=x+3$ con $x\ne3$. I numeri $3$ e $-3$ sono diversi e hanno lo stesso quadrato, quindi dall'uguaglianza dei quadrati $A^2=B^2$ non segue $A=B$. Dopo aver elevato al quadrato i due membri di un'equazione si controlla perciò, per ogni valore trovato, che i due membri iniziali abbiano lo stesso segno.
:::

:::esempio{#equazioni-irrazionali titolo="Eliminare una radice"}
Un'equazione **irrazionale** ha l'incognita sotto il segno di radice, come $\sqrt{x+1}=x-1$. Le condizioni sono due. Il radicando è positivo o nullo. Anche il secondo membro è positivo o nullo, perché è uguale al primo, che è una radice quadrata:
$$
\begin{cases}
x+1\ge0,\\
x-1\ge0.
\end{cases}
$$
Le due condizioni, $x\ge-1$ e $x\ge1$, valgono insieme per $x\ge1$. Elevando al quadrato i due membri si elimina la radice:
$$
\begin{aligned}
x+1&=(x-1)^2\\
x+1&=x^2-2x+1\\
0&=x^2-3x\\
0&=x(x-3).
\end{aligned}
$$
Si sviluppa il quadrato, si sottrae $x+1$ ai due membri e si raccoglie $x$. Per la legge di annullamento del prodotto i valori trovati sono $x=0$ e $x=3$. Il valore $0$ non soddisfa $x\ge1$, e infatti dà $\sqrt1=1$ al primo membro e $-1$ al secondo. Il valore $3$ soddisfa la condizione e dà $\sqrt{3+1}=2$ e $3-1=2$. L'unica soluzione è $x=3$, e l'insieme delle soluzioni si scrive $\{3\}$.

Nella figura la curva è il grafico di $y=\sqrt{x+1}$ e la retta è $y=x-1$. Si incontrano soltanto nel punto di ascissa $3$.

::grafico{f="sqrt(x+1);x-1" xmin=-1 xmax=5 ymin=-1 ymax=4 punti="3,2,pieno" titolo="La radice e la retta si incontrano soltanto nel punto di ascissa tre"}
:::

:::attenzione{titolo="Divisione per l'incognita"}
Dividendo per $x$ i due membri dell'equazione $x(x-2)=0$ si ottiene $x-2=0$, che ha la sola soluzione $x=2$. Anche $x=0$ è però una soluzione dell'equazione iniziale, perché $0\cdot(0-2)=0$. La divisione per $x$ richiede $x\ne0$, quindi quel valore è rimasto escluso. La legge di annullamento del prodotto dà entrambe le soluzioni, $x=0$ e $x=2$. Quando una divisione è necessaria, il caso in cui il divisore vale zero si studia a parte.

Lo stesso accade nelle equazioni con un parametro, nelle quali un coefficiente vale zero per alcuni valori del parametro. Nell'equazione $kx=3$ la divisione per $k$ richiede $k\ne0$ e dà $x=\dfrac3k$; per $k=0$ l'equazione diventa $0=3$ e non ha soluzioni.
:::
