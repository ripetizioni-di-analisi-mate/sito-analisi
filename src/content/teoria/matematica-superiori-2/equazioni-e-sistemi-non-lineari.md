---
titolo: "Equazioni e sistemi non lineari"
sommario: "Scomposizioni, biquadratiche, equazioni irrazionali e con valore assoluto, sistemi di secondo grado, somma e prodotto."
---

## Il prodotto nullo

:::teorema{#fattorizzazione titolo="Equazioni di grado superiore"}
Se un prodotto di numeri reali è zero, almeno un fattore è zero. Questa proprietà permette di risolvere alcune equazioni di grado superiore al secondo mediante fattorizzazione.

Per $x^3-9x=0$ si raccoglie $x$ e si scompone la differenza di quadrati. Si ottiene $x(x-3)(x+3)=0$, quindi $x=-3,0,3$.

Una fattorizzazione si controlla sviluppando il prodotto. Dividere per un fattore contenente l'incognita richiede invece di studiare separatamente il caso in cui quel fattore è nullo; altrimenti si possono perdere radici.
:::

## Le equazioni biquadratiche

:::definizione{#biquadratiche titolo="Sostituzione del quadrato"}
Una **biquadratica** ha la forma $ax^4+bx^2+c=0$ con $a\ne0$. Ponendo $t=x^2$ si ottiene $at^2+bt+c=0$, con il vincolo $t\ge0$.

Ogni radice $t>0$ dà due radici $x=\pm\sqrt t$. La radice $t=0$ dà solo $x=0$. Le radici $t<0$ non producono soluzioni reali.

Per $x^4-5x^2+4=0$ si ha $t^2-5t+4=0$, quindi $t=1,4$ e $x=\pm1,\pm2$. Per $x^4+x^2-2=0$ le radici in $t$ sono $1$ e $-2$; resta soltanto $x=\pm1$.
:::

## Le equazioni irrazionali

:::teorema{#irrazionali titolo="Condizioni prima del quadrato"}
L'equazione $\sqrt{A(x)}=B(x)$ è equivalente al sistema
$$
\begin{cases}A(x)\ge0\\B(x)\ge0\\A(x)=B(x)^2.\end{cases}
$$
Il primo vincolo garantisce il dominio e il secondo il segno del membro uguale alla radice. Il terzo esprime l'uguaglianza dei quadrati.

Per $\sqrt{x+6}=x$ si richiede $x\ge0$. Dal quadrato segue $x^2-x-6=0$, con candidate $3$ e $-2$. Solo $3$ soddisfa il vincolo e verifica $\sqrt9=3$.

Elevare al quadrato può introdurre soluzioni estranee quando non si conserva la condizione di segno. Per esempio $\sqrt4=-2$ è falsa, anche se i quadrati dei due membri coincidono.
:::

## Più radicali

:::teorema{#due-radicali titolo="Isolamento e verifica"}
Quando ci sono due radicali, si isola uno di essi e si controlla il segno del membro opposto prima di elevare al quadrato. Se rimane un radicale si ripete il procedimento.

Per $\sqrt{x+1}+\sqrt x=3$ il dominio è $x\ge0$. Dopo aver isolato la prima radice e fatto il quadrato segue $1=9-6\sqrt x$, quindi $\sqrt x=\dfrac43$ e $x=\dfrac{16}{9}$. Sostituendo, le due radici valgono $\dfrac53$ e $\dfrac43$ e la somma vale $3$.

La verifica finale si esegue nella relazione iniziale. Il solo fatto di risolvere l'ultima equazione trasformata non controlla tutte le condizioni introdotte nei passaggi.
:::

## Valore assoluto

:::teorema{#assoluto titolo="Distanza e casi"}
Per $c>0$, $|A(x)|=c$ equivale ad $A(x)=c$ oppure $A(x)=-c$. Per $c=0$ equivale ad $A(x)=0$; per $c<0$ è impossibile.

Per $|x-2|=3$ si trovano $x=5$ e $x=-1$. Entrambi distano $3$ dal punto $2$ sulla retta.

Se il secondo membro dipende da $x$, si richiede prima che sia non negativo. Per $|x-1|=x+1$ il vincolo è $x\ge-1$. Studiando i due casi $x\ge1$ e $x<1$ si ottiene soltanto $x=0$.

::grafico{f="abs(x-2);3" punti="-1,3,pieno,A;5,3,pieno,B" xmin=-3 xmax=7 ymin=-1 ymax=7 titolo="Le due soluzioni di $|x-2|=3$"}
:::

## Sistemi di secondo grado

:::teorema{#sistemi titolo="Sostituzione di una relazione lineare"}
Un sistema con un'equazione lineare e una quadratica può essere risolto ricavando un'incognita dalla relazione lineare e sostituendola nell'altra.

Per $\begin{cases}x+y=5\\x^2+y^2=13\end{cases}$ si pone $y=5-x$. Si ottiene $x^2+(5-x)^2=13$, quindi $x^2-5x+6=0$. Le coppie sono $(2;3)$ e $(3;2)$.

I valori di $x$ e $y$ devono essere accoppiati attraverso la relazione usata. Non si possono combinare arbitrariamente le radici ottenute. Graficamente, i punti rappresentano le intersezioni delle curve del sistema.

::grafico{f="5-x" curve="sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.283185307" punti="2,3,pieno,P;3,2,pieno,Q" xmin=0 xmax=5 ymin=0 ymax=5 uguale=1 titolo="Le coppie $(2;3)$ e $(3;2)$ risolvono il sistema"}
:::

## Somma e prodotto

:::teorema{#somma-prodotto titolo="Sistemi simmetrici"}
Per $\begin{cases}x+y=s\\xy=p\end{cases}$ le incognite sono le radici di $t^2-st+p=0$. Se le radici sono distinte, il sistema ha le due coppie ordinate ottenute scambiandole.

Per $s=7$ e $p=10$ le radici sono $2$ e $5$. Le soluzioni sono $(2;5)$ e $(5;2)$. Se il problema chiede due numeri senza ordine, si descrive la sola coppia di valori.

La relazione $x^2+y^2=(x+y)^2-2xy$ permette di passare fra una somma di quadrati e un prodotto. Con somma $7$ e prodotto $10$, la somma dei quadrati è $49-20=29$.
:::

## Dominio e problemi

:::osservazione{#dominio titolo="Frazioni e vincoli"}
Le scomposizioni e le sostituzioni mantengono le condizioni del problema iniziale. Per $\dfrac{x(x-2)(x+2)}{x-2}=0$ si esclude $x=2$ e restano $x=0,-2$.

Se le incognite rappresentano lati di un rettangolo, devono essere positive. Per un triangolo, ciascun lato deve anche essere minore della somma degli altri due. Le radici che violano tali vincoli non corrispondono a una figura del problema.

Un sistema impossibile può avere una spiegazione geometrica. Se due numeri reali hanno somma $2$, il loro prodotto non può superare $1$, perché $(x-y)^2=(x+y)^2-4xy\ge0$.
:::
