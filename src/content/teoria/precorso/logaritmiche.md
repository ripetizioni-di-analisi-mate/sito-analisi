---
titolo: Equazioni e disequazioni logaritmiche
sommario: Il logaritmo come esponente, le sue proprietà e la sua funzione, e i metodi per risolvere equazioni e disequazioni logaritmiche a partire dalle condizioni di esistenza.
---

## Il logaritmo

:::definizione{#definizione-logaritmo titolo="Logaritmo"}
Per $a > 0$, $a \neq 1$ e $b > 0$, il **logaritmo** in base $a$ di $b$ è l'**esponente** da dare ad $a$ per ottenere $b$:
$$
\log_a b = c \iff a^{c} = b .
$$
Il logaritmo esiste *solo* per argomenti **positivi**, perché $a^{c} > 0$ per ogni $c$. Dalla definizione seguono le due identità
$$
\log_a (a^{x}) = x \quad (x \in \mathbb{R}), \qquad
a^{\log_a x} = x \quad (x > 0),
$$
con cui si passa dalla forma esponenziale alla forma logaritmica e viceversa; su queste identità si fondano le equazioni dei tipi $\log_a A = k$ e $a^{A} = k$.

::grafico{f="2^x;x;log(x)/log(2)" uguale=1 xmin=-4 xmax=6 ymin=-4 ymax=6 punti="1,2,pieno;2,1,pieno" etichette="0.2,4.6,y = 2ˣ;4.2,1.4,y = log₂ x" titolo="I grafici di $y = 2^{x}$ e di $y = \log_2 x$, in rosso, sono simmetrici rispetto alla retta $y = x$: al punto $(1, 2)$ del primo corrisponde il punto $(2, 1)$ del secondo"}
:::

:::esempio
$\log_2 8 = 3$ perché $2^{3} = 8$; $\log_3 \dfrac{1}{9} = -2$ perché $3^{-2} = \dfrac{1}{9}$; $\log_5 1 = 0$ perché $5^{0} = 1$.
:::

:::esempio{titolo="Argomenti con radici e basi frazionarie"}
Quando la base e l'argomento sono potenze dello stesso numero, si scrivono entrambi come potenze di quel numero e si confrontano gli esponenti.
$$
\begin{gathered}
\log_2 \sqrt{8} = \frac{3}{2} \quad \text{perché} \quad \sqrt{8} = 2^{\frac{3}{2}}, \\[6pt]
\log_9 27 = \frac{3}{2} \quad \text{perché} \quad 9^{\frac{3}{2}} = \left(3^{2}\right)^{\frac{3}{2}} = 3^{3} = 27, \\[6pt]
\log_{\frac{1}{2}} 8 = -3 \quad \text{perché} \quad \left(\frac{1}{2}\right)^{-3} = 2^{3} = 8 .
\end{gathered}
$$
Nel secondo caso l'esponente $c$ soddisfa $3^{2c} = 3^{3}$, quindi $2c = 3$ e $c = \dfrac{3}{2}$.
:::

:::osservazione
Due basi hanno un simbolo proprio. Il **logaritmo naturale** è il logaritmo in base $e \approx 2{,}718$ e si indica con $\ln x$; il logaritmo in base $10$ si indica spesso con $\operatorname{Log} x$ o con $\log x$. Nei corsi di Analisi la scrittura $\log x$ indica invece il logaritmo naturale, quindi il significato di $\log x$ senza base dipende dal testo. Per esempio $\ln e^{3} = 3$, $\ln 1 = 0$ e $\log_{10} 1000 = 3$.
:::

## Le proprietà dei logaritmi

::::teorema{#proprieta-logaritmi titolo="Proprietà dei logaritmi"}
Per $a > 0$, $a \neq 1$ e $x > 0$, $y > 0$:
$$
\begin{gathered}
\log_a (x y) = \log_a x + \log_a y, \qquad
\log_a \frac{x}{y} = \log_a x - \log_a y, \\[6pt]
\log_a (x^{p}) = p \log_a x \quad (p \in \mathbb{R}).
\end{gathered}
$$
Le tre formule valgono quando gli argomenti $x$ e $y$ sono positivi, perciò prima di applicarle a espressioni con l'incognita vanno scritte le **condizioni di esistenza**. Nelle equazioni e nelle disequazioni servono a riunire più logaritmi in un **logaritmo solo**.

:::dimostrazione
L'idea è scrivere $x$ e $y$ come potenze di $a$ e usare le proprietà delle potenze. Siano $m = \log_a x$ e $n = \log_a y$; per la definizione di logaritmo si ha $x = a^{m}$ e $y = a^{n}$.

- Per la regola del prodotto di potenze con la stessa base, $x y = a^{m} \cdot a^{n} = a^{m + n}$. Quindi l'esponente da dare ad $a$ per ottenere $xy$ è $m + n$, cioè $\log_a (xy) = \log_a x + \log_a y$.
- Per la regola del quoziente, $\dfrac{x}{y} = \dfrac{a^{m}}{a^{n}} = a^{m - n}$, perciò $\log_a \dfrac{x}{y} = m - n = \log_a x - \log_a y$.
- Per la regola della potenza di una potenza, $x^{p} = \left(a^{m}\right)^{p} = a^{p m}$, perciò $\log_a (x^{p}) = p m = p \log_a x$.
:::
::::

:::esempio{titolo="Un esempio per ciascuna proprietà"}
$$
\begin{gathered}
\log_6 2 + \log_6 3 = \log_6 6 = 1, \qquad
\log_2 40 - \log_2 5 = \log_2 8 = 3, \\[6pt]
\log_3 (9^{5}) = 5 \log_3 9 = 10 .
\end{gathered}
$$
In ogni caso gli argomenti sono numeri positivi, quindi le proprietà **si applicano**.
:::

:::attenzione
Il logaritmo di una somma *non* è la somma dei logaritmi, e il quadrato di un logaritmo *non* è il logaritmo del quadrato. Con la base $2$:
$$
\begin{gathered}
\log_2 (4 + 4) = \log_2 8 = 3, \qquad \log_2 4 + \log_2 4 = 2 + 2 = 4, \\[6pt]
(\log_2 8)^{2} = 3^{2} = 9, \qquad \log_2 (8^{2}) = 2 \log_2 8 = 6 .
\end{gathered}
$$
La scrittura $(\log_a x)^{2}$, che si trova anche come $\log_a^{2} x$, indica il quadrato del numero $\log_a x$ e compare nelle equazioni con sostituzione.
:::

:::attenzione
Con l'incognita nell'argomento, la formula $\log_a (x^{p}) = p \log_a x$ richiede $x > 0$, mentre $x^{2}$ è positivo anche per $x < 0$. Per questo, con un esponente pari, si scrive $\log_a (x^{2}) = 2 \log_a |x|$, valida per ogni $x \neq 0$. L'equazione $\log_3 (x^{2}) = 2$ equivale a $x^{2} = 9$ e ha le soluzioni $x = 3$ e $x = -3$; la scrittura $2 \log_3 x = 2$ richiede $x > 0$ e porta a $x = 3$ soltanto, quindi la soluzione $x = -3$ non viene trovata.
:::

::::teorema{#cambio-di-base titolo="Cambio di base"}
Per $a, b > 0$ entrambi diversi da $1$ e $x > 0$:
$$
\log_a x = \frac{\log_b x}{\log_b a} .
$$
Permette di esprimere *ogni* logaritmo in una base scelta, per esempio nella base $e$ oppure nella base $10$ disponibili sulla calcolatrice. Per esempio $\log_4 8 = \dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$.

:::dimostrazione
L'idea è applicare $\log_b$ ai due membri dell'uguaglianza che definisce $\log_a x$. Sia $c = \log_a x$; per la definizione di logaritmo si ha $a^{c} = x$. I due membri sono positivi e uguali, quindi hanno lo stesso logaritmo in base $b$:
$$
\log_b \left(a^{c}\right) = \log_b x .
$$
Per la proprietà del logaritmo di una potenza il primo membro vale $c \log_b a$, perciò $c \log_b a = \log_b x$. Poiché $a \neq 1$, si ha $\log_b a \neq 0$, e dividendo per $\log_b a$ si ottiene $c = \dfrac{\log_b x}{\log_b a}$.
:::
::::

:::esempio{titolo="Calcolo con la calcolatrice e basi reciproche"}
Il numero $10$ non è una potenza intera di $2$, quindi $\log_2 10$ si calcola passando al logaritmo naturale:
$$
\log_2 10 = \frac{\ln 10}{\ln 2} \approx \frac{2{,}3026}{0{,}6931} \approx 3{,}322 .
$$
Con $x = b$ la formula dà $\log_a b = \dfrac{1}{\log_b a}$; per esempio $\log_4 2 = \dfrac{1}{\log_2 4} = \dfrac{1}{2}$. Per un logaritmo in base $a^{n}$, con $a$ come base nuova, si ottiene $\log_{a^{n}} x = \dfrac{1}{n} \log_a x$, che serve per riportare alla stessa base logaritmi come $\log_4 x$ e $\log_2 x$: infatti $\log_4 x = \dfrac{\log_2 x}{\log_2 4} = \dfrac{1}{2} \log_2 x$.
:::

## La funzione logaritmica

:::definizione{#funzione-logaritmica titolo="Funzione logaritmica"}
Per $a > 0$, $a \neq 1$, la funzione $\log_a x$ è definita per $x > 0$. Proprietà:

- il grafico passa per il punto $(1, 0)$, perché $\log_a 1 = 0$;
- la retta $x = 0$ è asintoto verticale;
- la funzione è **iniettiva**: argomenti diversi danno logaritmi diversi;
- per $a > 1$ la funzione è strettamente **crescente**; per $0 < a < 1$ è strettamente **decrescente**.

Come per la funzione esponenziale, l'iniettività giustifica il passaggio dai logaritmi agli argomenti nelle equazioni e la monotonia governa il verso nelle disequazioni.
:::

:::esempio{titolo="I due grafici di base"}
Per $a = 2$ la funzione cresce; per $a = \dfrac{1}{2}$ decresce.

::grafico{f="log(x)/log(2)" xmin=-1 xmax=8 ymin=-4 ymax=4 asintoti="x=0" titolo="$y = \log_2 x$: base maggiore di $1$, funzione crescente"}

::grafico{f="log(x)/log(0.5)" xmin=-1 xmax=8 ymin=-4 ymax=4 asintoti="x=0" titolo="$y = \log_{\frac{1}{2}} x$: base tra $0$ e $1$, funzione decrescente"}
:::

## Condizioni di esistenza

:::definizione{#condizioni-di-esistenza titolo="Condizioni di esistenza"}
Prima di risolvere un'equazione o una disequazione logaritmica si impone che *tutti* gli argomenti dei logaritmi siano **positivi**. Le condizioni vanno soddisfatte insieme, quindi formano un **sistema**; le soluzioni trovate che non soddisfano il sistema vanno scartate. Per l'espressione $\log_2 (x - 1) + \log_2 (x + 3)$:
$$
\begin{cases}
x - 1 > 0 \\
x + 3 > 0
\end{cases}
\iff
\begin{cases}
x > 1 \\
x > -3
\end{cases}
\iff x > 1 .
$$
:::

:::attenzione
Risolvere senza le condizioni di esistenza produce **soluzioni estranee**. L'equazione $\log_{10} x + \log_{10} (x - 3) = 1$ porta a $x(x - 3) = 10$, cioè $x = 5$ oppure $x = -2$; per $x = -2$ gli argomenti $x$ e $x - 3$ sono negativi, quindi i logaritmi dell'equazione data non esistono e $x = -2$ **va scartata**. L'unica soluzione è $x = 5$.

::grafico{f="log(x)/log(10)+log(x-3)/log(10);1;log(x*(x-3))/log(10)+0*sqrt(-x)" xmin=-4 xmax=8 ymin=-2 ymax=2 asintoti="x=3" punti="5,1,pieno;-2,1,vuoto" titolo="$y = \log_{10} x + \log_{10} (x - 3)$ incontra la retta $y = 1$ solo in $x = 5$; la curva rossa, $y = \log_{10} \bigl(x(x - 3)\bigr)$ per $x < 0$, incontra la retta in $x = -2$"}
:::

## Equazioni logaritmiche

:::teorema{#equazioni-logaritmiche titolo="Uguaglianza di logaritmi con la stessa base"}
Per $a > 0$, $a \neq 1$, l'equazione $\log_a A = \log_a B$ equivale al sistema
$$
\begin{cases}
A = B \\
A > 0
\end{cases}
$$
dove la condizione $B > 0$ *non* compare perché segue da $A = B$ e $A > 0$. L'equivalenza tra $\log_a A = \log_a B$ e $A = B$, sugli argomenti positivi, vale perché la funzione logaritmica è **iniettiva**.
:::

:::esempio
$$
\log_3 (2x - 1) = \log_3 (x + 4) \iff
\begin{cases}
2x - 1 = x + 4 \\
2x - 1 > 0
\end{cases}
\iff
\begin{cases}
x = 5 \\
x > \dfrac{1}{2}
\end{cases}
\iff x = 5
$$
Il valore $x = 5$ soddisfa la condizione di esistenza, quindi **è la soluzione**.
:::

:::teorema{#logaritmo-uguale-k titolo="Logaritmo uguale a un numero"}
Per $a > 0$, $a \neq 1$ e $k \in \mathbb{R}$, per la definizione di logaritmo
$$
\log_a A = k \iff A = a^{k} .
$$
La condizione di esistenza $A > 0$ è **automaticamente soddisfatta**, perché $a^{k} > 0$. L'equazione sull'argomento è un'equazione algebrica e si risolve con i metodi ordinari.
:::

:::esempio
$$
\log_2 (x - 3) = 4 \iff x - 3 = 2^{4} = 16 \iff x = 19
$$
La condizione di esistenza $x - 3 > 0$ è **soddisfatta**, poiché $x - 3 = 16 > 0$.
:::

## Equazioni con sostituzione

:::teorema{#sostituzione-logaritmica titolo="Metodo di sostituzione"}
Se nell'equazione compaiono $(\log_a x)^{2}$ e $\log_a x$, la sostituzione $t = \log_a x$ la trasforma in un'equazione algebrica in $t$. A differenza della sostituzione esponenziale, $t$ può assumere *qualunque* valore reale, quindi **nessuna soluzione** in $t$ va scartata per il segno; resta la condizione di esistenza $x > 0$. Da ogni valore di $t$ si ricava $x = a^{t}$, per la definizione di logaritmo.
:::

:::esempio
$$
(\log_2 x)^{2} - 3 \log_2 x + 2 = 0
$$
La condizione di esistenza è $x > 0$. Con $t = \log_2 x$ l'equazione diventa $t^{2} - 3t + 2 = 0$, con soluzioni $t = 1$ e $t = 2$; quindi $x = 2^{1} = 2$ oppure $x = 2^{2} = 4$, entrambe positive e quindi **accettabili**.
:::

## Disequazioni logaritmiche

:::teorema{#disequazioni-logaritmiche titolo="Disequazioni con la stessa base"}
Per $a > 0$, $a \neq 1$, la disequazione $\log_a A > \log_a B$ equivale a un sistema che contiene la condizione di esistenza:

- se $a > 1$ il verso **si mantiene**, perché la funzione logaritmica è strettamente crescente:
$$
\begin{cases}
A > B \\
B > 0
\end{cases}
$$
- se $0 < a < 1$ il verso **si rovescia**, perché la funzione è strettamente decrescente:
$$
\begin{cases}
A < B \\
A > 0
\end{cases}
$$

In ciascun sistema compare la condizione sull'**argomento minore**, perché la positività dell'altro argomento segue dalla prima disuguaglianza. Le stesse regole valgono con i simboli $\geq$, $<$, $\leq$.
:::

:::esempio{titolo="Base maggiore di 1"}
$$
\log_2 (3x - 2) > \log_2 (x + 4) \iff
\begin{cases}
3x - 2 > x + 4 \\
x + 4 > 0
\end{cases}
\iff
\begin{cases}
x > 3 \\
x > -4
\end{cases}
\iff x > 3
$$
La base $2$ è maggiore di $1$, quindi il verso **si mantiene** nel passaggio agli argomenti.

::grafico{f="log(3*x-2)/log(2);log(x+4)/log(2)" xmin=-4.5 xmax=8.5 ymin=-3 ymax=5 area="log(3*x-2)/log(2);log(x+4)/log(2);3;8.5" punti="3,2.807,vuoto" titolo="Il grafico di $y = \log_2 (3x - 2)$ sta sopra quello di $y = \log_2 (x + 4)$, tratteggiato, per $x > 3$"}
:::

:::esempio{titolo="Base tra 0 e 1"}
$$
\log_{\frac{1}{3}} (x + 1) > \log_{\frac{1}{3}} (5 - x) \iff
\begin{cases}
x + 1 < 5 - x \\
x + 1 > 0
\end{cases}
\iff
\begin{cases}
x < 2 \\
x > -1
\end{cases}
\iff -1 < x < 2
$$
La base $\dfrac{1}{3}$ è compresa tra $0$ e $1$, quindi il verso **si rovescia** nel passaggio agli argomenti.

::grafico{f="log(x+1)/log(1/3);log(5-x)/log(1/3)" xmin=-2 xmax=6 ymin=-3 ymax=3 area="log(x+1)/log(1/3);log(5-x)/log(1/3);-0.99;2" punti="2,-1,vuoto" legenda="y = \log_{\frac{1}{3}} (x + 1);y = \log_{\frac{1}{3}} (5 - x)" titolo="Con base $\dfrac{1}{3}$ i grafici scendono: $y = \log_{\frac{1}{3}} (x + 1)$ sta sopra $y = \log_{\frac{1}{3}} (5 - x)$, tratteggiato, per $-1 < x < 2$"}
:::

:::teorema{#disequazioni-logaritmo-numero titolo="Disequazione con un numero al secondo membro"}
La disequazione $\log_a A > k$ si riconduce al **confronto tra logaritmi** scrivendo $k = \log_a (a^{k})$:

- se $a > 1$, equivale ad $A > a^{k}$, e la condizione di esistenza $A > 0$ segue da $A > a^{k} > 0$;
- se $0 < a < 1$, equivale al sistema
$$
\begin{cases}
A < a^{k} \\
A > 0
\end{cases}
$$

Per la disequazione $\log_a A < k$ i due casi si scambiano: se $0 < a < 1$ equivale ad $A > a^{k}$, e la condizione di esistenza segue da $A > a^{k} > 0$; se $a > 1$ equivale al sistema
$$
\begin{cases}
A < a^{k} \\
A > 0
\end{cases}
$$

Per esempio, con base maggiore di $1$: $\log_3 (x - 1) > 2$ equivale a $x - 1 > 3^{2} = 9$, cioè $x > 10$.

::grafico{f="log(x-1)/log(3);2" xmin=-0.5 xmax=14 ymin=-3 ymax=4 area="log(x-1)/log(3);2;10;14" asintoti="x=1" punti="10,2,vuoto" titolo="Il grafico di $y = \log_3 (x - 1)$ sta sopra la retta $y = 2$ per $x > 10$"}
:::
