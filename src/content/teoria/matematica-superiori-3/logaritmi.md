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
