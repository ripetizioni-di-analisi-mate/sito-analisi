---
titolo: Logaritmi, equazioni e disequazioni
sommario: Dalla definizione di logaritmo alla risoluzione di equazioni, disequazioni e problemi sulle soglie.
---

## Definizione e valori esatti

:::definizione{#definizione titolo="L'esponente richiesto"}
Una potenza calcola il numero che si ottiene dalla base e dall'esponente. Quando si conoscono la base e il risultato della potenza, il **logaritmo** restituisce l'esponente. Siano $a>0$, $a\ne1$ e $b>0$. La scrittura $\log_a b$ indica l'unico numero reale $x$ tale che
$$
\log_a b=x \quad\Longleftrightarrow\quad a^x=b.
$$
Qui $a$ è la **base** e $b$ è l'**argomento** del logaritmo. La funzione esponenziale con base $a$ assume ogni valore strettamente positivo una volta sola, perciò l'esponente richiesto esiste ed è unico. Per esempio $2^3=8$, quindi $\log_2 8=3$.
:::

:::esempio{titolo="Reciproci e radici"}
Si cerca l'esponente di $3$ che produce $\dfrac{1}{9}$. Poiché $9=3^2$, il reciproco equivale a cambiare segno all'esponente. Con una radice si usa invece un esponente frazionario.
$$
\begin{aligned}
3^{-2}&=\frac{1}{9} &
&\Longrightarrow \log_3\dfrac{1}{9}=-2,\\[6pt]
16^{\frac34}&=\left(\sqrt[4]{16}\right)^3=8 &
&\Longrightarrow \log_{16}8=\frac34.
\end{aligned}
$$
Se la base è minore di $1$, una potenza con esponente positivo può dare un argomento minore di $1$. Per esempio $\left(\dfrac13\right)^{2}=\dfrac19$, quindi $\log_{\frac13}\dfrac19=2$.
:::

:::osservazione{titolo="Valori notevoli"}
Da $a^0=1$ e $a^1=a$ seguono $\log_a1=0$ e $\log_a a=1$. Se la base è $e$ si scrive $\ln$, mentre per la base dieci si può scrivere $\log_{10}$. In base dieci, $0{,}001=10^{-3}$ e quindi $\log_{10}(0{,}001)=-3$.
:::

:::esempio{titolo="Un valore compreso tra due esponenti interi"}
Per capire l'ordine di grandezza di $\log_3 20$ si cercano due potenze consecutive di $3$ che contengano l'argomento. Si ha $3^2=9$ e $3^3=27$, quindi
$$
3^2<20<3^3
\quad\Longleftrightarrow\quad
2<\log_3 20<3.
$$
Il passaggio conserva il verso perché la base è maggiore di $1$. Se la base è $\dfrac13$, il valore cercato diventa $-\log_3 20$ e si trova fra $-3$ e $-2$. Infatti $\left(\dfrac13\right)^{-3}=27$ e $\left(\dfrac13\right)^{-2}=9$. Il confronto individua l'intervallo anche quando nessuno degli esponenti interi produce esattamente l'argomento.

::grafico{f="3^x;20" xmin=0 xmax=3.3 ymin=-1 ymax=33 punti="2,9;2.72683303,20,pieno,P;3,27" segmenti="2,0,2,9;3,0,3,27" legenda="3^x;20" titolo="L'ascissa di $P$ si trova fra $2$ e $3$, perché $20$ è fra le quote $9$ e $27$"}

:::

## Proprietà delle operazioni

::::teorema{#proprieta titolo="Prodotto, quoziente e potenza"}
Siano $a>0$, $a\ne1$, $u>0$, $v>0$ e $r\in\mathbb R$. Valgono le relazioni
$$
\begin{aligned}
\log_a(uv)&=\log_a u+\log_a v,\\[4pt]
\log_a\dfrac uv&=\log_a u-\log_a v,\\[4pt]
\log_a(u^r)&=r\log_a u.
\end{aligned}
$$
Le formule permettono di trattare in un solo logaritmo somme e differenze di logaritmi con la stessa base.

:::dimostrazione
Si scrivano $u=a^s$ e $v=a^t$, con $s=\log_a u$ e $t=\log_a v$. Per calcolare i tre logaritmi basta trovare l'esponente nella base $a$ delle rispettive espressioni.
$$
uv=a^{s+t},\qquad
\frac{u}{v}=a^{s-t},\qquad
u^r=(a^s)^r=a^{sr}.
$$
La definizione restituisce rispettivamente $s+t$, $s-t$ e $sr$.
:::
::::

:::esempio{titolo="Scegliere come raggruppare i termini"}
In $\log_2 6+\log_2 12-\log_2 9$ tutti gli argomenti sono positivi e la base è la stessa. Si possono quindi combinare prima i due addendi e poi sottrarre il terzo.
$$
\begin{aligned}
\log_2 6+\log_2 12-\log_2 9
&=\log_2(6\cdot12)-\log_2 9\\[4pt]
&=\log_2\frac{72}{9}\\[4pt]
&=\log_2(2^3)=3.
\end{aligned}
$$
Calcolare prima ciascun logaritmo richiederebbe approssimazioni, mentre il quoziente si riconosce come potenza esatta.
:::

:::attenzione{titolo="La somma degli argomenti"}
La proprietà del prodotto richiede un prodotto dentro il logaritmo. Per esempio $\log_2(2+6)=\log_2 8=3$, mentre $\log_2 2+\log_2 6=\log_2 12$. I valori sono diversi perché $8$ e $12$ sono distinti e la funzione è iniettiva.
:::

:::esempio{titolo="Separare i fattori mantenendo il dominio"}
Si consideri $\ln\bigl((x-2)^2\bigr)$ per $x\ne2$. Il quadrato è positivo anche quando $x-2<0$. Per usare la proprietà della potenza su tutto il dominio si scrive quindi $(x-2)^2=|x-2|^2$.
$$
\ln\bigl((x-2)^2\bigr)=\ln\bigl(|x-2|^2\bigr)=2\ln|x-2|.
$$
Il valore assoluto rende positiva la base della potenza dentro il logaritmo. A $x=1$ si ottiene $2\ln1=0$. Il termine $\ln(x-2)$, preso da solo, in quello stesso punto sarebbe indefinito.
:::

:::esempio{titolo="Uno spostamento verticale prodotto da un fattore"}
Per $x>0$, passare dall'argomento $x$ all'argomento $4x$ aggiunge la stessa quantità al logaritmo in base $2$, qualunque sia $x$. Infatti $4$ è una potenza della base e
$$
\log_2(4x)=\log_2 4+\log_2 x=2+\log_2 x.
$$
La seconda curva passa per $(1,2)$ perché il grafico di partenza passa per $(1,0)$. A $x=2$ le ordinate sono $1$ e $3$. La distanza verticale vale sempre $2$. Se si usa invece l'argomento $x+4$, l'incremento è $\log_2\left(1+\dfrac4x\right)$ e dipende dall'ascissa. Il fattore costante è la condizione che rende costante l'incremento.

::grafico{f="log(x)/log(2);log(4*x)/log(2)" xmin=-0.35 xmax=5 ymin=-3.2 ymax=4.5 punti="1,0;1,2;2,1;2,3" segmenti="1,0,1,2;2,1,2,3" legenda="\log_2x;\log_2(4x)" titolo="I segmenti alle ascisse $1$ e $2$ hanno entrambi altezza $2$"}

:::

## Cambio di base

::::teorema{#base titolo="Rapporto di logaritmi nella stessa base"}
Siano $a,c>0$, $a\ne1$, $c\ne1$ e $b>0$. Il **cambio di base** esprime un logaritmo tramite due logaritmi nella base $c$.
$$
\log_a b = \frac{\log_c b}{\log_c a}.
$$

:::dimostrazione
Posto $x=\log_a b$, vale $a^x=b$. Poiché entrambi i membri sono positivi, se ne può prendere il logaritmo in base $c$. La proprietà della potenza dà $x\log_c a=\log_c b$. Siccome $a\ne1$, il fattore $\log_c a$ è diverso da zero e si può dividere.
:::
::::

:::esempio{titolo="Cambiare base senza usare la calcolatrice"}
Poiché $4$ e $8$ sono potenze di $2$, scegliere $c=2$ rende interi sia il numeratore sia il denominatore.
$$
\log_4 8=\frac{\log_2 8}{\log_2 4}=\frac32.
$$
Per verificare il valore si può tornare alla definizione. Infatti $4^{\frac32}=(\sqrt4)^3=8$. Quando non c'è una base comune evidente, il rapporto $\dfrac{\ln b}{\ln a}$ consente un'approssimazione con la calcolatrice.
:::

:::esempio{titolo="Confronto fra basi differenti"}
A parità di argomento, cambiare base modifica il denominatore nella formula del cambio di base. Per esempio, per confrontare $\log_2 7$ e $\log_3 7$ si scrivono i due rapporti
$$
\frac{\ln7}{\ln2}
\qquad\text{e}\qquad
\frac{\ln7}{\ln3}.
$$
Poiché $0<\ln2<\ln3$ e il numeratore è positivo, il primo rapporto è maggiore. Se si conserva la coppia di basi e si usa un argomento tra $0$ e $1$, il numeratore diventa negativo e l'ordine dei rapporti si inverte. Questo spiega perché l'ordine delle basi, da solo, non determina quello dei logaritmi.
:::

## Dominio

:::teorema{#dominio titolo="Positività dell'argomento"}
Per una base fissata $a>0$ con $a\ne1$, l'espressione $\log_a f(x)$ è definita nei punti in cui esiste $f(x)$ e vale $f(x)>0$. Quando compare più di un logaritmo, le condizioni devono valere contemporaneamente. Se anche la base $a(x)$ dipende da $x$, si aggiungono i vincoli $a(x)>0$ e $a(x)\ne1$. La condizione di positività riguarda l'argomento del logaritmo, anche quando questo è un quoziente o un prodotto.
:::

:::esempio{titolo="Dominio con un argomento fratto"}
Per $\ln\dfrac{x-1}{x+2}$ si studia il segno del quoziente. Il numeratore si annulla in $1$ e il denominatore in $-2$, quindi i segni si mantengono costanti nei tre intervalli della tabella.

| Intervallo | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
|---|---|---|---|
| $x-1$ | $-$ | $-$ | $+$ |
| $x+2$ | $-$ | $+$ | $+$ |
| $\dfrac{x-1}{x+2}$ | $+$ | $-$ | $+$ |

I due intervalli con segno positivo formano il dominio. Si esclude $-2$ perché lì il quoziente è indefinito, mentre si esclude $1$ perché lì l'argomento è zero. Il dominio è quindi $(-\infty,-2)\cup(1,+\infty)$.
:::

:::attenzione{titolo="Il dominio prima di raccogliere i logaritmi"}
In $\ln(x-1)+\ln(x+1)$ le due condizioni richiedono $x>1$. L'espressione $\ln(x^2-1)$ è invece definita anche per $x<-1$, perché due fattori negativi danno un prodotto positivo. L'identità vale per $x>1$, dove ciascun logaritmo dell'espressione iniziale è definito.
:::

:::esempio{titolo="Logaritmo al denominatore"}
Nel dominio di $g(x)=\dfrac1{\log_2(x-3)}$ si impongono due condizioni. Perché esista il logaritmo, $x-3$ deve essere positivo. Poiché il logaritmo è anche un denominatore, deve essere diverso da zero.
$$
\begin{cases}
x-3>0,\\
\log_2(x-3)\ne0
\end{cases}
\Longleftrightarrow
\begin{cases}
x>3,\\
x-3\ne1.
\end{cases}
$$
Si ottiene $(3,4)\cup(4,+\infty)$. I due punti esclusi hanno motivi diversi. In $x=3$ il logaritmo ha argomento zero. In $x=4$ il logaritmo è definito e vale zero, quindi è il quoziente a essere indefinito.
:::

:::esempio{titolo="Composizione di due logaritmi"}
In $\log_2(\log_3 x)$, l'argomento esterno è il valore del logaritmo interno. Si parte da $x>0$, dove $\log_3 x$ esiste. Il logaritmo esterno chiede inoltre $\log_3 x>0$. Dato che quello interno cresce e si annulla in $1$, il dominio è $(1,+\infty)$. Per controllarlo basta confrontare due valori. In $x=\dfrac13$ il logaritmo interno vale $-1$ e quello esterno è indefinito. In $x=9$ il logaritmo interno vale $2$ e l'espressione composta vale $\log_2 2=1$.
:::

:::esempio{titolo="La base attraversa il valore uno"}
Nell'espressione $\log_{x-1}(4-x)$ si controllano separatamente la positività di $x-1$, la sua differenza da $1$ e la positività di $4-x$. L'insieme risultante è $(1,2)\cup(2,4)$. Le prime e le ultime ascisse sono determinate dagli zeri delle espressioni lineari. Il punto interno $2$ è escluso anche se entrambe sono positive.
$$
\left.
\begin{aligned}
x-1=1\\
4-x=2
\end{aligned}
\right\}
\quad (x=2).
$$
Si giustifica l'esclusione perché qualunque esponente di base $1$ dà $1$, mentre qui l'argomento vale $2$. In $x=3$ le condizioni sono invece soddisfatte e il valore è $\log_2 1=0$. L'argomento deve essere positivo, mentre il valore del logaritmo può essere zero.

::grafico{f="x-1;4-x;1" xmin=0 xmax=4.5 ymin=-0.6 ymax=4.2 punti="1,0;2,1,vuoto;4,0" segmenti="2,0,2,1" legenda="x-1;4-x;1" titolo="La base $x-1$ raggiunge la quota esclusa $1$ in $x=2$"}

:::

## Grafico e funzione inversa

:::definizione{#funzione titolo="Inversa dell'esponenziale"}
Per $a>0$ e $a\ne1$, la funzione $y=\log_a x$ ha dominio $(0,+\infty)$ e immagine $\mathbb R$. Invertendo la relazione $a^u=v$ si ottiene $\log_a v=u$, quindi il grafico si ricava scambiando le coordinate dei punti di $y=a^x$. Questo scambio è una simmetria rispetto alla retta $y=x$. Per la base $2$, a $(1,2)$ sul grafico dell'esponenziale corrisponde $(2,1)$ sul grafico del logaritmo.

::grafico{f="2^x;log(x)/log(2);x" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 punti="1,2,pieno,P;2,1,pieno,Q" legenda="2^x;\log_2 x;x" titolo="I punti $P(1,2)$ e $Q(2,1)$ sono simmetrici rispetto a $y=x$"}

:::

:::osservazione{titolo="Monotonia, segno e asintoto"}
Il logaritmo è crescente se $a>1$ e decrescente se $0<a<1$. Per ricavarne il segno si confronta l'argomento con $1$, poiché $\log_a1=0$. Valgono dunque i segni in tabella.

| Base | $0<x<1$ | $x=1$ | $x>1$ |
|---|---|---|---|
| $a>1$ | $-$ | $0$ | $+$ |
| $0<a<1$ | $+$ | $0$ | $-$ |

L'asse $y$ è un **asintoto verticale**. Infatti, quando $x$ si avvicina a zero da destra, $\log_a x$ scende senza limite per $a>1$ e sale senza limite per $0<a<1$. Per la base $2$ si può seguire la sequenza di argomenti $\dfrac12,\dfrac14,\dfrac18,\ldots$, cui corrispondono i valori $-1,-2,-3,\ldots$.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=-0.5 xmax=5 ymin=-3.5 ymax=3.5 punti="1,0" legenda="\log_2 x;\log_{\frac12}x" titolo="I due grafici attraversano $(1,0)$ e hanno verso di variazione opposto"}

:::

:::osservazione{titolo="Riflessione rispetto all'asse delle ascisse"}
Le basi $a$ e $\dfrac1a$ hanno lo stesso insieme di argomenti. Il cambio di base mostra che i valori sono opposti, perché $\ln(\frac1a)=-\ln a$.
$$
\log_{\frac1a}x=\frac{\ln x}{-\ln a}=-\log_a x .
$$
Si ottiene quindi il grafico del logaritmo in base reciproca cambiando il segno delle ordinate. L'unico punto comune è $(1,0)$, al quale corrisponde il valore identico al proprio opposto. Per $x>1$, fra le basi $2$ e $\dfrac12$ è il logaritmo crescente a stare sopra l'asse delle ascisse. Per $0<x<1$ è il decrescente.
:::

:::esempio{titolo="Traslazione e intercetta"}
In $y=\log_2(x-2)-1$ l'argomento è positivo per $x>2$, quindi la retta di asintoto si sposta da $x=0$ a $x=2$. Il punto $(1,0)$ si sposta di due unità a destra e di una unità in basso, fino a $(3,-1)$. L'intersezione con l'asse $x$ si ottiene ponendo $y=0$.
$$
\log_2(x-2)=1 \quad\Longleftrightarrow\quad x-2=2^1 \quad\Longleftrightarrow\quad x=4.
$$

::grafico{f="log(x-2)/log(2)-1" xmin=0 xmax=8 ymin=-4 ymax=2.5 asintoti="x=2" punti="3,-1;4,0" titolo="L'asintoto è $x=2$ e l'intercetta orizzontale è $(4,0)$"}

:::

::::teorema{titolo="Perché il logaritmo conserva la monotonia dell'esponenziale"}
Siano $0<u<v$ e $a>0$ con $a\ne1$. Se $a>1$, allora $\log_a u<\log_a v$. Se $0<a<1$, allora $\log_a u>\log_a v$.

:::dimostrazione
Si scrivano $u=a^p$ e $v=a^q$. Per $a>1$, la condizione $p\geq q$ darebbe $a^p\geq a^q$, in contrasto con $u<v$, quindi $p<q$. Per $0<a<1$, la condizione $p\leq q$ darebbe $a^p\geq a^q$ perché l'esponenziale è decrescente. Dunque $p>q$. I numeri $p$ e $q$ sono proprio $\log_a u$ e $\log_a v$.
:::
::::

:::esempio{titolo="Verso di variazione con argomento decrescente"}
Si studi $g(x)=\log_{\frac12}(4-x)$ per $x<4$. Sia $x_1<x_2<4$. Sottraendo le ascisse da $4$ si ottiene $4-x_1>4-x_2>0$. Il logaritmo con base $\dfrac12$ inverte ancora il confronto, quindi
$$
\log_{\frac12}(4-x_1)<\log_{\frac12}(4-x_2).
$$
La funzione composta è dunque crescente. Il suo zero è in $x=3$, poiché $4-3=1$. Quando $x$ si avvicina a $4$ da sinistra, l'argomento si avvicina a zero da valori positivi e il logaritmo cresce senza limite. L'asintoto si trova quindi a destra del dominio, sulla retta $x=4$.

::grafico{f="log(4-x)/log(0.5)" xmin=-0.5 xmax=4.8 ymin=-3 ymax=3.8 asintoti="x=4" punti="2,-1;3,0,pieno,P;3.5,1" legenda="\log_{\frac12}(4-x)" titolo="La curva cresce sul dominio e si avvicina alla retta $x=4$ da sinistra"}

:::

## Equazioni

:::teorema{#equazioni titolo="Uguaglianza nel dominio comune"}
Sia $a>0$ con $a\ne1$. Poiché il logaritmo è **iniettivo**, su ogni punto in cui $f(x)$ e $g(x)$ sono positivi, $\log_a f(x)=\log_a g(x)$ equivale a $f(x)=g(x)$. Quando il secondo membro è un numero reale $k$, lo si può esprimere come $k=\log_a(a^k)$ oppure applicare direttamente la definizione. In entrambi i casi si ricava $f(x)=a^k$ e l'argomento deve appartenere al dominio.
:::

:::esempio{titolo="Due candidati, una soluzione"}
Si consideri $\ln(x-1)+\ln(x+1)=\ln8$. Le condizioni $x-1>0$ e $x+1>0$ danno $x>1$. In questo intervallo si può applicare la proprietà del prodotto.
$$
\begin{aligned}
\ln\bigl((x-1)(x+1)\bigr)&=\ln8\\[4pt]
(x-1)(x+1)&=8\\[4pt]
x^2&=9.
\end{aligned}
$$
Le radici dell'ultima equazione sono $-3$ e $3$. Il primo valore cade fuori dal dominio perché rende negativi entrambi gli argomenti. Per $x=3$ gli argomenti sono $2$ e $4$, con prodotto $8$, quindi la soluzione è $3$.
:::

:::esempio{titolo="Un'equazione quadratica nel logaritmo"}
In $(\log_2 x)^2-\log_2 x-2=0$ l'incognita compare attraverso la stessa espressione $\log_2 x$. Per $x>0$ si pone $u=\log_2 x$. Poiché l'immagine del logaritmo è $\mathbb R$, ogni radice reale trovata per $u$ corrisponde a un valore ammissibile di $x$.
$$
\begin{aligned}
u^2-u-2&=(u-2)(u+1)=0,\\[4pt]
u=2 &\Longrightarrow x=2^2=4,\\[4pt]
u=-1 &\Longrightarrow x=2^{-1}=\frac12.
\end{aligned}
$$
I due valori di $x$ sono entrambi positivi. Con la base $2$, le radici negative di $u$ corrispondono ad argomenti compresi tra $0$ e $1$.
:::

:::esempio{titolo="Equazione con basi diverse"}
Nell'equazione $\log_9x+\log_3x=3$ il dominio è $x>0$. Poiché $9=3^2$, è comodo esprimere il primo logaritmo nella base del secondo.
$$
\begin{aligned}
\log_9 x&=\frac{\log_3 x}{\log_3 9}=\frac12\log_3x,\\[4pt]
\frac12\log_3x+\log_3x&=\frac32\log_3x=3,\\[4pt]
\log_3x&=2,\qquad x=9 .
\end{aligned}
$$
I due addendi iniziali valgono $\log_9 9=1$ e $\log_3 9=2$. Quindi la loro somma verifica l'equazione. La formula di prodotto dei logaritmi si applica solo dopo aver scritto gli addendi nella stessa base.
:::

:::esempio{titolo="Un parametro determina il numero delle soluzioni"}
Nell'equazione $\ln(x^2+1)=k$ l'argomento è positivo per ogni $x$. Il secondo membro rappresenta l'ordinata della retta orizzontale da confrontare con il grafico. Passando alla forma esponenziale,
$$
x^2+1=e^k
\quad\Longleftrightarrow\quad
x^2=e^k-1 .
$$
- Se $k<0$, il secondo membro è negativo, quindi la retta si trova sotto il grafico e l'equazione è impossibile.
- Se $k=0$, il secondo membro vale zero e si ottiene la sola soluzione $x=0$.
- Se $k>0$, si ottengono le due soluzioni opposte $-\sqrt{e^k-1}$ e $\sqrt{e^k-1}$.

Ad esempio, per $k=\ln 2$ il secondo membro è $1$ e la quota richiesta si incontra nelle ascisse $-1$ e $1$. La simmetria segue da $( -x)^2=x^2$.

::grafico{f="log(x^2+1);log(2)" xmin=-3 xmax=3 ymin=-0.45 ymax=2.6 punti="-1,0.69314718;0,0;1,0.69314718" legenda="\ln(x^2+1);\ln 2" titolo="La retta di quota $\ln 2$ incontra la curva nelle ascisse opposte $-1$ e $1$"}

:::

## Disequazioni

:::teorema{#disequazioni titolo="Il verso dipende dalla base"}
Nel **dominio comune** si confrontano gli argomenti usando la monotonia del logaritmo.

- Se $a>1$, da $\log_a f(x)<\log_a g(x)$ segue $f(x)<g(x)$ e vale anche l'implicazione inversa.
- Se $0<a<1$, da $\log_a f(x)<\log_a g(x)$ segue $f(x)>g(x)$ e vale anche l'implicazione inversa.

Lo stesso ragionamento si applica a $\leq$, $\geq$ e $>$. Con un secondo membro costante $k$, il confronto avviene con l'argomento $a^k$.
:::

:::esempio{titolo="Base crescente e dominio"}
In $\log_2(x-1)\leq3$ si scrive $3=\log_2 8$. Poiché il logaritmo in base $2$ è crescente, $x-1$ deve essere al più $8$. Si unisce questa condizione alla positività dell'argomento.
$$
\begin{cases}
x-1>0,\\
x-1\leq8
\end{cases}
\Longleftrightarrow
1<x\leq9.
$$
L'estremo $9$ è incluso per l'uguaglianza ammessa. A $x=1$ l'argomento si annulla, quindi l'estremo sinistro è escluso.
:::

:::esempio{titolo="Base decrescente e confronto di due argomenti"}
Sia $\log_{\frac12}(x+1)<\log_{\frac12}(2x-1)$. Dal dominio comune si ricava $x>\dfrac12$. La base è compresa tra $0$ e $1$, quindi il minore valore del logaritmo corrisponde al maggiore argomento.
$$
\begin{aligned}
x+1 &> 2x-1\\
x &<2.
\end{aligned}
$$
Si trova $\dfrac12<x<2$. Il grafico conferma che la prima curva è sotto la seconda fino al punto di intersezione $(2,\log_{\frac12}3)$.

::grafico{f="log(x+1)/log(0.5);log(2*x-1)/log(0.5)" xmin=0 xmax=4 ymin=-3.5 ymax=3 asintoti="x=0.5" punti="2,-1.5849625,pieno,P" legenda="\log_{\frac12}(x+1);\log_{\frac12}(2x-1)" titolo="A sinistra di $P$ la curva di $\log_{\frac12}(x+1)$ è più in basso nel dominio comune"}

:::

:::esempio{titolo="Il verso cambia ai due lati della base uno"}
Nella disequazione $\log_{x+1}4\geq2$ la base dipende da $x$. Per esistere deve soddisfare $x+1>0$ e $x+1\ne1$, quindi $x>-1$ e $x\ne0$. In questi intervalli vale $2=\log_{x+1}\bigl((x+1)^2\bigr)$. La direzione del confronto fra $4$ e $(x+1)^2$ dipende dalla base.

- Per $x>0$ la base è maggiore di $1$ e il confronto dà $4\geq(x+1)^2$. Siccome $x+1>0$, si ottiene $x+1\leq2$, dunque $0<x\leq1$.
- Per $-1<x<0$ la base è minore di $1$ e il confronto dà $4\leq(x+1)^2$. In tutto questo intervallo $(x+1)^2<1$, quindi non ci sono soluzioni.

L'insieme delle soluzioni è $(0,1]$. In $x=1$ la base è $2$ e vale $\log_2 4=2$, perciò l'ultimo estremo è incluso.
:::

:::esempio{titolo="Risolvere una disequazione con due limiti di livello"}
Per trovare dove $-1\leq\log_2(x+2)<2$, si esprimono i livelli come $\log_2(\frac12)$ e $\log_2 4$. Poiché il logaritmo è crescente, i confronti sugli argomenti conservano lo stesso verso.
$$
\frac12\leq x+2<4
\quad\Longleftrightarrow\quad
-\frac32\leq x<2.
$$
L'argomento è positivo su tutto l'intervallo ottenuto, dato che è almeno $\dfrac12$. Il punto all'estremo sinistro soddisfa l'uguaglianza con il limite inferiore. Il punto all'estremo destro ha quota $2$ e rimane escluso. In presenza di un limite inferiore positivo sull'argomento, la condizione del dominio può quindi essere già soddisfatta dal risultato.

::grafico{f="log(x+2)/log(2);-1;2" xmin=-2.5 xmax=4 ymin=-3 ymax=3 punti="-1.5,-1,pieno,A;2,2,vuoto,B" segmenti="-1.5,-1,-1.5,0;2,0,2,2" asintoti="x=-2" legenda="\log_2(x+2);-1;2" titolo="Il tratto fra $A$ incluso e $B$ escluso ha quota fra i due livelli richiesti"}

:::

## Soglie e scale logaritmiche

:::esempio{#modelli titolo="Tempo reale e prima osservazione"}
Una popolazione è descritta da $N(t)=100\cdot2^t$ per $t\ge0$, dove $t$ è il tempo in ore. Il tempo esatto in cui la popolazione raggiunge $500$ si ricava dopo aver diviso per il valore iniziale $100$.
$$
\begin{aligned}
2^t&=5,\\[4pt]
t&=\log_2 5=\frac{\ln 5}{\ln 2}\approx 2{,}322.
\end{aligned}
$$
Se le osservazioni avvengono soltanto alle ore intere, si cerca il più piccolo intero per cui $100\cdot2^t\ge500$. Poiché $N(2)=400$ e $N(3)=800$, la prima osservazione che raggiunge o supera la soglia è dopo $3$ ore. Il confronto può essere fatto anche senza approssimare il logaritmo, perché $2^2<5<2^3$.
:::

:::esempio{titolo="Una differenza su una scala logaritmica"}
Su una scala descritta da $L=10\log_{10}\dfrac{I}{I_0}$, il valore $I>0$ è l'intensità misurata e $I_0>0$ è la stessa intensità di riferimento per tutte le misure. Se le intensità sono $I_1$ e $I_2$, la differenza fra i livelli dipende dal loro rapporto.
$$
\begin{aligned}
L_2-L_1
 &=10\left(\log_{10}\frac{I_2}{I_0}
           -\log_{10}\frac{I_1}{I_0}\right)\\[6pt]
 &=10\log_{10}\frac{I_2}{I_1}.
\end{aligned}
$$
Quando l'intensità viene moltiplicata per $100$, il livello cresce di $10\log_{10}100=20$. Invertendo il ragionamento, una diminuzione di $10$ unità nel livello corrisponde a un fattore $10^{-1}=\dfrac1{10}$ nell'intensità.
:::

:::osservazione{titolo="Una soglia in un modello decrescente"}
Per una quantità che si dimezza a ogni ora, il modello $Q(t)=80\left(\dfrac12\right)^t$ passa esattamente per $10$ a $t=3$. La condizione $Q(t)<10$ richiede invece $t>3$. La base è minore di $1$, perciò le quantità sotto la soglia si ottengono ai tempi maggiori. Se si osserva la quantità a ore intere, l'ora $3$ produce ancora $10$ e la prima osservazione utile è alla quarta ora.
:::

:::esempio{titolo="Tempo di attesa con valore di fondo"}
Un display parte da una luminosità di $50$ unità. Il modello $L(t)=2+48\left(\dfrac12\right)^{\frac t4}$, con $t$ in ore, descrive una parte variabile che si dimezza ogni quattro ore e una luminosità di fondo pari a $2$. Si cerca il primo istante in cui il valore è al più $8$. Si sottrae il fondo prima di dividere per il valore iniziale della parte variabile.
$$
\begin{aligned}
L(t)\leq 8
 &\quad\Longleftrightarrow\quad
 \left(\frac12\right)^{\frac t4}\leq \frac{8-2}{48} \\[4pt]
 &\quad\Longleftrightarrow\quad
 \left(\frac12\right)^{\frac t4}\leq \left(\frac12\right)^3\\[4pt]
 &\quad\Longleftrightarrow\quad t\geq 12.
\end{aligned}
$$
L'ultimo confronto inverte il verso perché la base è minore di $1$. Il valore in $t=12$ è $2+48\cdot\dfrac18=8$, quindi il primo istante richiesto è la dodicesima ora. Una soglia uguale al fondo $2$ richiederebbe invece che l'esponenziale fosse zero. Il modello si avvicina a quel livello e rimane sempre al di sopra per ogni tempo finito.

::grafico{f="2+48*0.5^(x/4);8" xmin=-0.5 xmax=22 ymin=-1 ymax=53 nomi="t,L" asintoti="y=2" punti="0,50;8,14;12,8,pieno,P;16,5" segmenti="12,0,12,8" legenda="2+48\left(\frac12\right)^{\frac{t}{4}};8" titolo="Il valore raggiunge la soglia $8$ in $P$ e si avvicina al fondo $2$"}

:::

::::teorema{titolo="Prima osservazione intera di una soglia crescente"}
Siano $N_0>0$, $a>1$ e $S>N_0$. Per il modello $N(t)=N_0a^t$ con $t\geq0$, il tempo esatto per raggiungere $S$ è $\tau=\log_a\dfrac{S}{N_0}$. Se si osserva ai soli tempi interi, il primo con $N(t)\geq S$ è $\lceil\tau\rceil$, cioè il più piccolo intero maggiore o uguale a $\tau$. Il primo con $N(t)>S$ è invece $\lfloor\tau\rfloor+1$, dove $\lfloor\tau\rfloor$ è il più grande intero minore o uguale a $\tau$.

:::dimostrazione
Poiché la base $a$ supera $1$, dal confronto $N_0a^t\geq S$ si ricava $t\geq\tau$ applicando il logaritmo al rapporto. Con il confronto stretto si ottiene invece $t>\tau$. Nei due casi si sceglie il primo intero ammesso. Se $\tau$ è intero, la prima disuguaglianza ammette proprio $\tau$, mentre la seconda richiede l'intero successivo. Se $\tau$ non è intero, entrambe danno lo stesso primo istante.
:::
::::
