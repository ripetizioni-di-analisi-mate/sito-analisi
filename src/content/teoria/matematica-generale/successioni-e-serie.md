---
titolo: Successioni, progressioni e serie
sommario: Come si descrivono le grandezze che cambiano a scadenze regolari con le successioni, come si calcolano termini e somme delle progressioni aritmetiche e geometriche, che cosa significa che una successione ha limite, e quando una somma di infiniti termini dà un numero finito.
---

## Successioni

:::definizione{#successione titolo="Successione"}
Una **successione** di numeri reali è una funzione $a : \mathbb{N} \to \mathbb{R}$ che associa a ogni naturale $n$ il numero $a_n$, detto **termine** di posto $n$. Si scrive $(a_n)$ oppure $a_1, a_2, a_3, \dots$; l'indice può partire da $0$ o da $1$ secondo il problema. Una successione si assegna in due modi:

- con il **termine generale**, una formula che dà $a_n$ in funzione di $n$, come $a_n = \dfrac{2n + 1}{n + 3}$, i cui primi termini sono $\dfrac{3}{4}$, $1$, $\dfrac{7}{6}$, $\dfrac{9}{7}$;
- **per ricorrenza**, dando il primo termine e la regola che ricava ogni termine dal precedente, come $a_1 = 2$ e $a_{n+1} = 3\,a_n - 1$, i cui primi termini sono $2$, $5$, $14$, $41$.

La formula per ricorrenza dà il passaggio da un termine al successivo; il termine generale permette di calcolare un termine lontano senza passare per tutti i precedenti.
:::

:::definizione{#successione-monotona titolo="Successioni monotone e limitate"}
Una successione è **crescente** se $a_{n+1} > a_n$ per ogni $n$, **decrescente** se $a_{n+1} < a_n$ per ogni $n$; con le disuguaglianze larghe si dice non decrescente e non crescente, e in tutti questi casi **monotona**. Per stabilirlo si studia il segno della differenza $a_{n+1} - a_n$, oppure, per termini positivi, si confronta il rapporto $\dfrac{a_{n+1}}{a_n}$ con $1$. La successione è **limitata** se esiste un numero $M$ tale che $|a_n| \leq M$ per ogni $n$. Per $a_n = \dfrac{2n + 1}{n + 3}$ si ha
$$
a_{n+1} - a_n = \frac{2n + 3}{n + 4} - \frac{2n + 1}{n + 3} = \frac{5}{(n + 3)(n + 4)} > 0 ,
$$
quindi la successione è crescente; inoltre $0 < a_n < 2$ per ogni $n$, perché $2n + 1 < 2n + 6$, perciò è limitata.
:::

## Progressioni aritmetiche

:::definizione{#progressione-aritmetica titolo="Progressione aritmetica"}
Una **progressione aritmetica** è una successione in cui ogni termine si ottiene dal precedente aggiungendo uno stesso numero $d$, detto **ragione**: $a_{n+1} = a_n + d$. Partendo da $a_1$ si aggiunge $d$ una volta per arrivare ad $a_2$, due volte per $a_3$, e in generale $n - 1$ volte per $a_n$, quindi
$$
a_n = a_1 + (n - 1)\,d .
$$
La progressione è crescente se $d > 0$ e decrescente se $d < 0$, e i suoi termini, disegnati in funzione di $n$, stanno su una retta di pendenza $d$. Per esempio, con $a_1 = 3$ e $d = 4$ si ottengono i termini $3$, $7$, $11$, $15$, $\dots$ e il termine generale è $a_n = 3 + 4\,(n - 1) = 4n - 1$.

::grafico{f="4*x-1" punti="1,3,pieno;2,7,pieno;3,11,pieno;4,15,pieno;5,19,pieno;6,23,pieno" xmin=-1 xmax=7 ymin=-3 ymax=27 nomi="n,aₙ" titolo="I termini della progressione aritmetica $a_n = 4n - 1$ stanno sulla retta $y = 4x - 1$, di pendenza uguale alla ragione $d = 4$"}

:::

::::teorema{#somma-aritmetica titolo="Somma dei termini di una progressione aritmetica"}
La somma dei primi $n$ termini di una progressione aritmetica è
$$
S_n = a_1 + a_2 + \dots + a_n = \frac{n\,(a_1 + a_n)}{2} ,
$$
cioè il numero dei termini per la media del primo e dell'ultimo. Per esempio, i primi $100$ numeri naturali formano una progressione aritmetica di ragione $1$, con $a_1 = 1$ e $a_{100} = 100$, quindi
$$
S_{100} = 1 + 2 + \dots + 100 = \frac{100\,(1 + 100)}{2} = 5050 .
$$

:::dimostrazione
L'idea è sommare la progressione con se stessa scritta al contrario. Si scrive
$$
\begin{aligned}
S_n &= a_1 + a_2 + \dots + a_{n-1} + a_n , \\[4pt]
S_n &= a_n + a_{n-1} + \dots + a_2 + a_1 .
\end{aligned}
$$
In ogni colonna la somma è la stessa, perché passando da una colonna alla successiva il termine in alto aumenta di $d$ e quello in basso diminuisce di $d$, quindi ogni colonna vale $a_1 + a_n$. Le colonne sono $n$, perciò sommando le due righe si ottiene $2 S_n = n\,(a_1 + a_n)$, e dividendo per $2$ si ha la tesi.
:::
::::

## Progressioni geometriche

:::definizione{#progressione-geometrica titolo="Progressione geometrica"}
Una **progressione geometrica** è una successione in cui ogni termine si ottiene dal precedente moltiplicando per uno stesso numero $q \neq 0$, detto **ragione**: $a_{n+1} = q\,a_n$. Partendo da $a_1$ si moltiplica per $q$ una volta per arrivare ad $a_2$ e $n - 1$ volte per arrivare ad $a_n$, quindi
$$
a_n = a_1\,q^{\,n - 1} .
$$
Il rapporto tra due termini consecutivi è sempre $q$; per $a_1 > 0$ la progressione è crescente se $q > 1$ e decrescente se $0 < q < 1$, mentre per $q < 0$ i termini cambiano segno a ogni passo. Per esempio, con $a_1 = 1$ e $q = 2$ si ottengono $1$, $2$, $4$, $8$ e così via, mentre con $a_1 = 16$ e $q = \dfrac{1}{2}$ si ottengono $16$, $8$, $4$, $2$ e così via. I valori di un capitale a interesse composto al tasso $i$ formano una progressione geometrica di ragione $1 + i$, come si vede nell'argomento sulla matematica finanziaria.

::grafico{punti="1,1,pieno;2,2,pieno;3,4,pieno;4,8,pieno;5,16,pieno;6,32,pieno" xmin=-1 xmax=7 ymin=-4 ymax=36 nomi="n,aₙ" titolo="Con $a_1 = 1$ e $q = 2 > 1$ ogni termine è il doppio del precedente e la progressione cresce sempre più rapidamente"}

::grafico{punti="1,16,pieno;2,8,pieno;3,4,pieno;4,2,pieno;5,1,pieno;6,0.5,pieno" xmin=-1 xmax=7 ymin=-2 ymax=18 nomi="n,aₙ" titolo="Con $a_1 = 16$ e $q = \dfrac{1}{2}$ ogni termine è la metà del precedente e la progressione decresce verso $0$"}

:::

::::teorema{#somma-geometrica titolo="Somma dei termini di una progressione geometrica"}
Se $q \neq 1$, la somma dei primi $n$ termini di una progressione geometrica è
$$
S_n = a_1 + a_1 q + \dots + a_1 q^{\,n-1} = a_1\,\frac{1 - q^{\,n}}{1 - q} .
$$
Se $q = 1$ tutti i termini sono uguali ad $a_1$ e $S_n = n\,a_1$. Per esempio, la somma delle prime dieci potenze di $2$ è la somma di $10$ termini con $a_1 = 1$ e $q = 2$, quindi
$$
1 + 2 + 4 + \dots + 2^{9} = \frac{1 - 2^{10}}{1 - 2} = 1023 .
$$

:::dimostrazione
L'idea è moltiplicare la somma per $q$ e sottrarre, perché quasi tutti i termini si cancellano. Si ha
$$
\begin{aligned}
S_n &= a_1 + a_1 q + a_1 q^2 + \dots + a_1 q^{\,n-1} , \\[4pt]
q\,S_n &= a_1 q + a_1 q^2 + \dots + a_1 q^{\,n-1} + a_1 q^{\,n} .
\end{aligned}
$$
Nella differenza $S_n - q\,S_n$ restano solo il primo termine della prima riga e l'ultimo della seconda, quindi $(1 - q)\,S_n = a_1\,(1 - q^{\,n})$. Poiché $q \neq 1$, si può dividere per $1 - q$ e si ottiene la tesi.
:::
::::

## Limite di una successione

:::definizione{#limite-successione titolo="Limite di una successione"}
La successione $(a_n)$ **converge** al numero $L$, e si scrive $\displaystyle\lim_{n \to +\infty} a_n = L$, se per ogni $\varepsilon > 0$ esiste un indice $N$ tale che
$$
n > N \implies |a_n - L| < \varepsilon .
$$
In altre parole, fissata una tolleranza $\varepsilon$ piccola a piacere, da un certo posto in poi tutti i termini distano da $L$ meno di $\varepsilon$. La successione **diverge** a $+\infty$ se per ogni $M$ esiste $N$ tale che $a_n > M$ per $n > N$, cioè se da un certo posto in poi supera qualunque soglia; allo stesso modo si definisce la divergenza a $-\infty$. Una successione che non converge e non diverge si dice **irregolare**, come $(-1)^n$, che vale alternativamente $-1$ e $1$. Per $a_n = \dfrac{1}{n}$ e $L = 0$, la condizione $\dfrac{1}{n} < \varepsilon$ vale per $n > \dfrac{1}{\varepsilon}$, quindi basta prendere $N \geq \dfrac{1}{\varepsilon}$, e $\dfrac{1}{n} \to 0$.

::grafico{punti="1,0.75,pieno;2,1,pieno;3,1.1667,pieno;4,1.2857,pieno;5,1.375,pieno;6,1.4444,pieno;7,1.5,pieno;8,1.5455,pieno;9,1.5833,pieno;10,1.6154,pieno;11,1.6429,pieno;12,1.6667,pieno;13,1.6875,pieno;14,1.7059,pieno;15,1.7222,pieno;16,1.7368,pieno;17,1.75,pieno;18,1.7619,pieno;19,1.7727,pieno" asintoti="y=2" xmin=-3 xmax=21 ymin=-0.2 ymax=2.2 nomi="n,aₙ" titolo="I termini di $a_n = \dfrac{2n + 1}{n + 3}$ crescono e si avvicinano a $2$ senza raggiungerlo"}

:::

:::teorema{#regole-limiti-successioni titolo="Regole di calcolo dei limiti"}
Se $a_n \to A$ e $b_n \to B$, con $A$ e $B$ numeri reali, allora
$$
a_n + b_n \to A + B,
\qquad
a_n\,b_n \to A\,B,
\qquad
\frac{a_n}{b_n} \to \frac{A}{B} \quad (B \neq 0) .
$$
Le stesse regole valgono con i limiti infiniti quando il risultato non è una forma indeterminata, cioè uno dei casi $+\infty - \infty$, $0 \cdot \infty$, $\dfrac{\infty}{\infty}$, $\dfrac{0}{0}$, che vanno risolti caso per caso; le dimostrazioni e le forme indeterminate sono trattate nell'argomento sui limiti e la continuità. Per un quoziente di polinomi in $n$ si raccoglie la potenza più alta; per esempio
$$
\frac{2n + 1}{n + 3} = \frac{n\left(2 + \dfrac{1}{n}\right)}{n\left(1 + \dfrac{3}{n}\right)} = \frac{2 + \dfrac{1}{n}}{1 + \dfrac{3}{n}} \to \frac{2}{1} = 2 ,
$$
poiché $\dfrac{1}{n}$ e $\dfrac{3}{n}$ tendono a $0$.
:::

:::teorema{#successioni-monotone titolo="Teorema sulle successioni monotone"}
Una successione monotona ha sempre limite. Se è crescente e limitata converge, se è crescente e non limitata diverge a $+\infty$; allo stesso modo, una successione decrescente converge se è limitata e diverge a $-\infty$ se non lo è. Il teorema segue dalla completezza dei numeri reali, per la quale si rimanda all'argomento sugli insiemi di Analisi 1. Serve a dimostrare che un limite esiste anche quando non si sa calcolarlo direttamente. Per esempio, la successione $a_n = \dfrac{2n + 1}{n + 3}$ è crescente e limitata, quindi converge, e per le regole di calcolo il suo limite è $2$.
:::

::::teorema{#limite-potenza titolo="Limite della successione geometrica"}
Per la successione $q^{\,n}$ vale
$$
\lim_{n \to +\infty} q^{\,n} =
\begin{cases}
+\infty & \text{se } q > 1 , \\[4pt]
1 & \text{se } q = 1 , \\[4pt]
0 & \text{se } -1 < q < 1 ,
\end{cases}
$$
e per $q \leq -1$ la successione è irregolare, perché i suoi termini cambiano segno a ogni passo e il loro valore assoluto non tende a $0$. Dal valore di $q$ dipende quindi il limite di una progressione geometrica $a_1 q^{\,n-1}$; per esempio $\left( \dfrac{3}{2} \right)^{n} \to +\infty$, mentre $\left( \dfrac{2}{3} \right)^{n} \to 0$.

::grafico{punti="1,-1,pieno;2,1,pieno;3,-1,pieno;4,1,pieno;5,-1,pieno;6,1,pieno;7,-1,pieno;8,1,pieno;9,-1,pieno;10,1,pieno" xmin=-2 xmax=12 ymin=-2 ymax=2 nomi="n,aₙ" titolo="Per $q = -1$ la successione $(-1)^n$ vale alternativamente $-1$ e $1$, quindi non ha limite"}

:::dimostrazione
Per $q > 1$ si scrive $q = 1 + h$ con $h > 0$. Per la disuguaglianza di Bernoulli, $(1 + h)^n \geq 1 + n h$ per ogni $n$, che si verifica sviluppando la potenza e trascurando i termini positivi oltre i primi due. Il secondo membro supera qualunque soglia al crescere di $n$, quindi anche $q^{\,n}$ diverge a $+\infty$. Per $0 < |q| < 1$ il numero $\dfrac{1}{|q|}$ è maggiore di $1$, quindi $\left( \dfrac{1}{|q|} \right)^{n} \to +\infty$ e il suo reciproco $|q|^{\,n}$ tende a $0$; poiché $|q^{\,n}| = |q|^{\,n}$, anche $q^{\,n} \to 0$. Per $q = 0$ e $q = 1$ la successione è costante.
:::
::::

## Serie numeriche

:::definizione{#serie titolo="Serie numerica"}
Data una successione $(a_k)$, la **serie** $\displaystyle\sum_{k=1}^{\infty} a_k$ è il limite, se esiste, della successione delle **somme parziali**
$$
S_n = a_1 + a_2 + \dots + a_n = \sum_{k=1}^{n} a_k .
$$
La serie **converge** e ha **somma** $S$ se $S_n \to S$ con $S$ reale; **diverge** se $S_n \to +\infty$ oppure $S_n \to -\infty$; è **irregolare** se $(S_n)$ non ha limite. La somma di infiniti termini positivi può essere un numero finito. Per esempio, la serie $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dots$ ha somme parziali $S_n = 1 - \dfrac{1}{2^n}$, che tendono a $1$, quindi la serie converge e ha somma $1$.

::grafico{punti="1,0.5,pieno;2,0.75,pieno;3,0.875,pieno;4,0.9375,pieno;5,0.96875,pieno;6,0.984375,pieno;7,0.9921875,pieno;8,0.99609375,pieno;9,0.998046875,pieno;10,0.9990234375,pieno" asintoti="y=1" xmin=-2 xmax=12 ymin=-0.1 ymax=1.2 nomi="n,Sₙ" titolo="Le somme parziali della serie $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dots$ sono $1 - \dfrac{1}{2^n}$ e si avvicinano a $1$"}

:::

::::teorema{#condizione-necessaria titolo="Condizione necessaria per la convergenza"}
Se la serie $\displaystyle\sum_{k=1}^{\infty} a_k$ converge, allora $a_k \to 0$.

La condizione si usa soprattutto per escludere la convergenza, perché se il termine generale non tende a $0$ la serie non converge. Per la serie $\displaystyle\sum_{k=1}^{\infty} \frac{k}{k + 1}$ il termine generale tende a $1$, quindi la serie non converge; poiché i termini sono positivi, le somme parziali crescono e la serie diverge a $+\infty$.

:::dimostrazione
Ogni termine è la differenza di due somme parziali consecutive, $a_n = S_n - S_{n-1}$. Se la serie converge a $S$, entrambe le somme parziali tendono a $S$, perché $S_{n-1}$ è la stessa successione spostata di un posto, quindi $a_n \to S - S = 0$.
:::
::::

:::attenzione
La condizione $a_k \to 0$ è *necessaria* ma *non sufficiente*. La serie armonica $\displaystyle\sum_{k=1}^{\infty} \frac{1}{k}$ ha il termine generale che tende a $0$, eppure diverge a $+\infty$. Raggruppando i termini a blocchi che terminano nelle potenze di $2$,
$$
1 + \frac{1}{2} + \left( \frac{1}{3} + \frac{1}{4} \right) + \left( \frac{1}{5} + \dots + \frac{1}{8} \right) + \dots
\;\geq\;
1 + \frac{1}{2} + \frac{1}{2} + \frac{1}{2} + \dots ,
$$
perché il blocco che termina in $\dfrac{1}{2^{m}}$ contiene $2^{m-1}$ termini, ciascuno non minore di $\dfrac{1}{2^{m}}$, quindi la sua somma è almeno $2^{m-1} \cdot \dfrac{1}{2^{m}} = \dfrac{1}{2}$; per esempio $\dfrac{1}{3} + \dfrac{1}{4} \geq \dfrac{2}{4}$. Le somme parziali superano quindi qualunque soglia, anche se crescono molto lentamente.

::grafico{punti="1,1.0000,pieno;2,1.5000,pieno;3,1.8333,pieno;4,2.0833,pieno;5,2.2833,pieno;6,2.4500,pieno;7,2.5929,pieno;8,2.7179,pieno;9,2.8290,pieno;10,2.9290,pieno;11,3.0199,pieno;12,3.1032,pieno;13,3.1801,pieno;14,3.2516,pieno;15,3.3182,pieno;16,3.3807,pieno;17,3.4396,pieno;18,3.4951,pieno;19,3.5477,pieno;20,3.5977,pieno;21,3.6454,pieno;22,3.6908,pieno;23,3.7343,pieno;24,3.7760,pieno;25,3.8160,pieno;26,3.8544,pieno;27,3.8915,pieno;28,3.9272,pieno;29,3.9617,pieno;30,3.9950,pieno" xmin=-4 xmax=32 ymin=-0.5 ymax=4.5 nomi="n,Sₙ" titolo="Le somme parziali della serie armonica crescono lentamente, per esempio $S_{30} \approx 3{,}99$, ma non hanno limite finito"}

:::

## Serie geometrica

::::teorema{#serie-geometrica titolo="Serie geometrica"}
La serie geometrica di primo termine $a \neq 0$ e ragione $q$,
$$
\sum_{k=0}^{\infty} a\,q^{\,k} = a + a q + a q^2 + \dots ,
$$
converge se e solo se $-1 < q < 1$, e in tal caso ha somma
$$
\sum_{k=0}^{\infty} a\,q^{\,k} = \frac{a}{1 - q} .
$$
Per $q \geq 1$ diverge (a $+\infty$ se $a > 0$, a $-\infty$ se $a < 0$), per $q \leq -1$ è irregolare. Il numero periodico $0{,}\overline{3} = \dfrac{3}{10} + \dfrac{3}{100} + \dots$ è la serie con $a = \dfrac{3}{10}$ e $q = \dfrac{1}{10}$, quindi vale $\dfrac{3}{10} \cdot \dfrac{1}{1 - \frac{1}{10}} = \dfrac{3}{10} \cdot \dfrac{10}{9} = \dfrac{1}{3}$.

:::dimostrazione
Per $q \neq 1$, la somma dei primi $n$ termini è la somma di una progressione geometrica, $S_n = a\,\dfrac{1 - q^{\,n}}{1 - q}$. Per $-1 < q < 1$ si ha $q^{\,n} \to 0$ per il limite della successione geometrica, quindi $S_n \to \dfrac{a}{1 - q}$. Per $q > 1$ si ha $q^{\,n} \to +\infty$ e $1 - q < 0$, quindi $S_n$ diverge con il segno di $a$; per $q = 1$ si ha $S_n = n\,a$, che diverge allo stesso modo. Per $q \leq -1$ la successione $q^{\,n}$ è irregolare, e con essa $S_n$.
:::
::::

:::esempio{titolo="Valore di una rendita perpetua"}
Una rendita perpetua paga $500$ euro alla fine di ogni anno, per sempre. Al tasso annuo del $5\%$, una somma disponibile tra $k$ anni vale oggi $500 \cdot 1{,}05^{-k}$, perché investendo oggi questa cifra al $5\%$ composto si ottengono $500$ euro tra $k$ anni. Il valore di oggi della rendita è la somma di tutti questi valori, cioè una serie geometrica con primo termine $a = \dfrac{500}{1{,}05}$ e ragione $q = \dfrac{1}{1{,}05} < 1$:
$$
\sum_{k=1}^{\infty} \frac{500}{1{,}05^{k}} = \frac{\dfrac{500}{1{,}05}}{1 - \dfrac{1}{1{,}05}} = \frac{500}{1{,}05 - 1} = \frac{500}{0{,}05} = 10\,000 \text{ euro} .
$$
In generale il valore attuale di una rendita perpetua di rata $R$ al tasso $i$ è $\dfrac{R}{i}$; le rendite sono trattate nell'argomento sulla matematica finanziaria.
:::

## Il numero e

:::teorema{#numero-e titolo="Il numero e"}
La successione $a_n = \left( 1 + \dfrac{1}{n} \right)^{n}$ è crescente e limitata, quindi converge. Il suo limite si indica con $e$:
$$
e = \lim_{n \to +\infty} \left( 1 + \frac{1}{n} \right)^{n} \approx 2{,}71828 .
$$
I primi valori sono $a_1 = 2$, $a_2 = 2{,}25$, $a_{10} \approx 2{,}5937$, $a_{100} \approx 2{,}7048$, $a_{1000} \approx 2{,}7169$. La monotonia e la limitatezza si dimostrano sviluppando la potenza con il binomio di Newton; qui si assumono. Il numero $e$ compare quando gli interessi si capitalizzano sempre più spesso. Al tasso annuo nominale del $12\%$ capitalizzato mensilmente si applica ogni mese il tasso dell'$1\%$, e $1000$ euro dopo un anno diventano $1000 \cdot 1{,}01^{12} \approx 1126{,}83$ euro; dividendo l'anno in $n$ periodi il capitale diventa $1000 \left( 1 + \dfrac{0{,}12}{n} \right)^{n}$, che al crescere di $n$ tende a $1000\,e^{0{,}12} \approx 1127{,}50$ euro. È la capitalizzazione continua, ripresa nell'argomento sulla matematica finanziaria.

::grafico{punti="1,2.0000,pieno;2,2.2500,pieno;3,2.3704,pieno;4,2.4414,pieno;5,2.4883,pieno;6,2.5216,pieno;7,2.5465,pieno;8,2.5658,pieno;9,2.5812,pieno;10,2.5937,pieno;11,2.6042,pieno;12,2.6130,pieno;13,2.6206,pieno;14,2.6272,pieno;15,2.6329,pieno;16,2.6379,pieno;17,2.6424,pieno;18,2.6464,pieno;19,2.6500,pieno;20,2.6533,pieno" asintoti="y=2.71828" xmin=-3 xmax=22 ymin=-0.3 ymax=3.2 nomi="n,aₙ" titolo="I termini di $\left( 1 + \dfrac{1}{n} \right)^{n}$ crescono a partire da $2$ e si avvicinano a $e \approx 2{,}718$"}

:::
