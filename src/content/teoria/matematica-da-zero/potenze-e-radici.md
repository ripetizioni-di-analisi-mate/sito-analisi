---
titolo: Potenze e radici
sommario: Le proprietà delle potenze con la loro giustificazione, l'esponente zero e l'esponente negativo, la notazione scientifica, la radice quadrata e la radice cubica con le loro proprietà, la razionalizzazione e i numeri irrazionali, fino ai numeri reali.
---

## Potenze

:::definizione{#potenza titolo="Potenza"}
Una potenza è un modo breve di scrivere una moltiplicazione di fattori tutti uguali. Se $a$ è un numero e $n$ è un numero naturale maggiore di $1$, la **potenza** $a^n$ è il prodotto di $n$ fattori uguali ad $a$:
$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ fattori}} .
$$
Il numero $a$ si chiama **base** e il numero $n$ si chiama **esponente**. L'esponente indica quante volte la base compare come fattore. Si pone inoltre $a^1 = a$. Per esempio
$$
2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32 ,
\qquad
10^3 = 10 \cdot 10 \cdot 10 = 1000 .
$$
La potenza con esponente $2$ si legge "al quadrato" e quella con esponente $3$ si legge "al cubo"; per esempio $7^2 = 49$ si legge "sette al quadrato". La definizione è stata introdotta nell'argomento sui numeri naturali. Qui si studiano le regole che permettono di calcolare con le potenze senza scrivere tutti i fattori.
:::

:::esempio{titolo="Potenze con base negativa o con base frazione"}
La base può essere un numero relativo o una frazione. Per la regola dei segni, vista nell'argomento sui numeri relativi, una potenza con base negativa è positiva se l'esponente è pari ed è negativa se l'esponente è dispari:
$$
(-3)^2 = (-3) \cdot (-3) = 9 ,
\qquad
(-2)^3 = (-2) \cdot (-2) \cdot (-2) = -8 .
$$
Nel prodotto di frazioni si moltiplicano i numeratori tra loro e i denominatori tra loro. Perciò una frazione si eleva a potenza elevando il numeratore e il denominatore:
$$
\left( \frac{2}{3} \right)^2 = \frac{2}{3} \cdot \frac{2}{3} = \frac{2 \cdot 2}{3 \cdot 3} = \frac{4}{9} .
$$
:::

## Proprietà delle potenze

::::teorema{#prodotto-stessa-base titolo="Prodotto di potenze con la stessa base"}
Il prodotto di due potenze con la stessa base è una potenza che ha la stessa base e ha per esponente la *somma* degli esponenti. Per ogni numero $a$ e per ogni coppia di numeri naturali $m$ e $n$ diversi da zero vale
$$
a^m \cdot a^n = a^{m+n} .
$$
Per esempio $2^3 \cdot 2^4 = 2^{3+4} = 2^7 = 128$. La regola permette di calcolare il prodotto senza moltiplicare i fattori uno per uno. Anche un fattore senza esponente si tratta come una potenza, perché $5 = 5^1$; quindi $5^2 \cdot 5 = 5^{2+1} = 5^3 = 125$.

:::dimostrazione
L'idea è contare i fattori. La potenza $2^3$ contiene tre fattori uguali a $2$ e la potenza $2^4$ ne contiene quattro, quindi
$$
2^3 \cdot 2^4 = (2 \cdot 2 \cdot 2) \cdot (2 \cdot 2 \cdot 2 \cdot 2) = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 .
$$
Per la proprietà associativa della moltiplicazione i due prodotti si possono scrivere come un unico prodotto. Questo prodotto contiene perciò $3 + 4 = 7$ fattori uguali a $2$, ed è uguale a $2^7$. Con base $a$ ed esponenti $m$ e $n$ il ragionamento è lo stesso, perché i fattori uguali ad $a$ sono in tutto $m + n$.
:::
::::

::::teorema{#quoziente-stessa-base titolo="Quoziente di potenze con la stessa base"}
Il quoziente di due potenze con la stessa base è una potenza che ha la stessa base e ha per esponente la *differenza* degli esponenti. Per ogni numero $a \neq 0$ e per ogni coppia di numeri naturali $m$ e $n$ diversi da zero, con $m > n$, vale
$$
\frac{a^m}{a^n} = a^{m-n} .
$$
Per esempio $\dfrac{3^5}{3^2} = 3^{5-2} = 3^3 = 27$. La condizione $a \neq 0$ è necessaria perché il denominatore di una frazione è sempre diverso da zero. Il caso $m = n$ e il caso $m < n$ portano all'esponente zero e all'esponente negativo.

:::dimostrazione
L'idea è scrivere i fattori e semplificare. Ogni fattore $3$ del denominatore si semplifica con un fattore $3$ del numeratore, perché $\dfrac{3}{3} = 1$:
$$
\frac{3^5}{3^2} = \frac{3 \cdot 3 \cdot 3 \cdot 3 \cdot 3}{3 \cdot 3} = 3 \cdot 3 \cdot 3 = 3^3 .
$$
Al numeratore restano $5 - 2 = 3$ fattori, quindi il quoziente è $3^3$. Con base $a$ ed esponenti $m > n$ si semplificano $n$ fattori del numeratore con gli $n$ fattori del denominatore, e al numeratore ne restano $m - n$.
:::
::::

::::teorema{#potenza-di-potenza titolo="Potenza di una potenza"}
Una potenza elevata a un'altra potenza è una potenza che ha la stessa base e ha per esponente il *prodotto* degli esponenti. Per ogni numero $a$ e per ogni coppia di numeri naturali $m$ e $n$ diversi da zero vale
$$
\left( a^m \right)^n = a^{m \cdot n} .
$$
Per esempio $\left( 2^3 \right)^2 = 2^{3 \cdot 2} = 2^6 = 64$. La regola serve anche a scrivere una potenza con una base più piccola. Poiché $8 = 2^3$, si ha $8^4 = \left( 2^3 \right)^4 = 2^{12}$.

:::dimostrazione
Elevare $2^3$ al quadrato significa moltiplicare $2^3$ per se stesso. Per la regola del prodotto di potenze con la stessa base si ha
$$
\left( 2^3 \right)^2 = 2^3 \cdot 2^3 = 2^{3+3} = 2^6 .
$$
Gli esponenti uguali a $3$ che si sommano sono $2$, quindi la loro somma è $3 \cdot 2 = 6$. In generale $\left( a^m \right)^n$ è il prodotto di $n$ fattori uguali ad $a^m$, e la somma di $n$ esponenti uguali a $m$ è $m \cdot n$.
:::
::::

::::teorema{#potenza-prodotto-quoziente titolo="Potenza di un prodotto e di un quoziente"}
La potenza di un prodotto è il prodotto delle potenze dei fattori, e la potenza di un quoziente è il quoziente delle potenze. Per ogni coppia di numeri $a$ e $b$ e per ogni numero naturale $n$ diverso da zero valgono
$$
(a \cdot b)^n = a^n \cdot b^n ,
\qquad
\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n} \quad \text{con } b \neq 0 .
$$
Lette da destra a sinistra, le due uguaglianze dicono che due potenze con lo *stesso esponente* si moltiplicano, o si dividono, operando sulle basi. Per esempio
$$
2^3 \cdot 5^3 = (2 \cdot 5)^3 = 10^3 = 1000 ,
\qquad
\frac{15^2}{5^2} = \left( \frac{15}{5} \right)^2 = 3^2 = 9 .
$$

:::dimostrazione
Per la potenza di un prodotto si scrivono i fattori e si riordinano. Per le proprietà commutativa e associativa della moltiplicazione si ha
$$
\begin{aligned}
(2 \cdot 5)^3
&= (2 \cdot 5) \cdot (2 \cdot 5) \cdot (2 \cdot 5) \\[6pt]
&= (2 \cdot 2 \cdot 2) \cdot (5 \cdot 5 \cdot 5) \\[6pt]
&= 2^3 \cdot 5^3 .
\end{aligned}
$$
Per la potenza di un quoziente si moltiplicano le frazioni, cioè i numeratori tra loro e i denominatori tra loro:
$$
\left( \frac{2}{5} \right)^3 = \frac{2}{5} \cdot \frac{2}{5} \cdot \frac{2}{5} = \frac{2 \cdot 2 \cdot 2}{5 \cdot 5 \cdot 5} = \frac{2^3}{5^3} .
$$
Con un esponente $n$ qualsiasi i fattori uguali ad $a$ e i fattori uguali a $b$ sono $n$ ciascuno, e il ragionamento è lo stesso.
:::
::::

:::attenzione
Le proprietà delle potenze riguardano prodotti e quozienti. La potenza di una somma è in generale diversa dalla somma delle potenze. Per esempio, con $a = 1$ e $b = 2$,
$$
(1 + 2)^2 = 3^2 = 9 ,
\qquad
1^2 + 2^2 = 1 + 4 = 5 .
$$
Allo stesso modo, in una somma di potenze con la stessa base gli esponenti non si sommano. Per esempio $2^3 + 2^4 = 8 + 16 = 24$, mentre $2^{3+4} = 2^7 = 128$.
:::

:::esempio{titolo="Un'espressione con più proprietà"}
Si calcola $\dfrac{9^2 \cdot 3^5}{27^2}$. Le basi $9$ e $27$ sono potenze di $3$, perché $9 = 3^2$ e $27 = 3^3$. Per la potenza di una potenza si ha quindi $9^2 = 3^4$ e $27^2 = 3^6$, e
$$
\frac{9^2 \cdot 3^5}{27^2} = \frac{3^4 \cdot 3^5}{3^6} = \frac{3^9}{3^6} = 3^3 = 27 .
$$
Al numeratore si è applicata la regola del prodotto di potenze con la stessa base, poi la regola del quoziente. Il calcolo diretto $\dfrac{81 \cdot 243}{729}$ porta allo stesso risultato con moltiplicazioni molto più lunghe.
:::

## Esponente zero ed esponente negativo

:::definizione{#esponente-zero titolo="Esponente zero"}
Per ogni numero $a \neq 0$ si pone
$$
a^0 = 1 .
$$
Questa scelta rende valida la regola del quoziente anche quando i due esponenti sono uguali. Un numero diverso da zero diviso per se stesso dà $1$, quindi $\dfrac{5^3}{5^3} = 1$. La regola del quoziente darebbe $5^{3-3} = 5^0$, perciò si pone $5^0 = 1$. Per esempio $7^0 = 1$, $(-4)^0 = 1$ e $\left( \dfrac{2}{9} \right)^0 = 1$. La scrittura $0^0$ non ha significato, perché la divisione $\dfrac{0^3}{0^3}$ non si può eseguire.
:::

:::definizione{#esponente-negativo titolo="Esponente negativo"}
Per ogni numero $a \neq 0$ e per ogni numero naturale $n$ si pone
$$
a^{-n} = \frac{1}{a^n} .
$$
In altre parole, una potenza con esponente negativo è il **reciproco** della potenza con l'esponente positivo. Anche questa scelta rende valida la regola del quoziente. Semplificando i fattori si ottiene
$$
\frac{2^3}{2^5} = \frac{2 \cdot 2 \cdot 2}{2 \cdot 2 \cdot 2 \cdot 2 \cdot 2} = \frac{1}{2 \cdot 2} = \frac{1}{2^2} ,
$$
mentre la regola del quoziente darebbe $2^{3-5} = 2^{-2}$. Perciò si pone $2^{-2} = \dfrac{1}{2^2} = \dfrac{1}{4}$. Il reciproco di una frazione si ottiene scambiando il numeratore con il denominatore, quindi
$$
\left( \frac{2}{3} \right)^{-2} = \left( \frac{3}{2} \right)^2 = \frac{9}{4} .
$$
:::

:::esempio{titolo="Le potenze di 2 con esponente intero"}
Quando l'esponente diminuisce di $1$, la potenza di $2$ si divide per $2$:
$$
2^3 = 8 , \quad 2^2 = 4 , \quad 2^1 = 2 , \quad 2^0 = 1 , \quad 2^{-1} = \frac{1}{2} , \quad 2^{-2} = \frac{1}{4} , \quad 2^{-3} = \frac{1}{8} .
$$
La regola del dimezzamento vale anche per gli esponenti zero e negativi, e questo è coerente con le due definizioni. Tutte le potenze dell'elenco sono positive, comprese quelle con esponente negativo.

::grafico{punti="-3,0.125,pieno;-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;1,2,pieno;2,4,pieno;3,8,pieno" segmenti="1,0,1,2;2,0,2,4;3,0,3,8" etichette="-3.35,0.75,2⁻³;-2.35,0.9,2⁻²;-1.35,1.15,2⁻¹;0.15,1.35,2⁰;0.75,2.7,2¹;1.75,4.7,2²;2.75,8.6,2³" xmin=-4 xmax=4 ymin=-1 ymax=9 nomi="n,y" titolo="Le potenze $2^n$ con $n$ da $-3$ a $3$: quando l'esponente diminuisce di $1$ il valore si dimezza, e le potenze $2^{-1} = \dfrac{1}{2}$, $2^{-2} = \dfrac{1}{4}$, $2^{-3} = \dfrac{1}{8}$ sono positive"}

:::

:::osservazione{#proprieta-esponenti-interi titolo="Le proprietà con esponenti interi"}
Con le definizioni di esponente zero e di esponente negativo, tutte le proprietà delle potenze valgono anche per esponenti interi qualsiasi, con base diversa da zero. Per esempio
$$
5^{-2} \cdot 5^3 = 5^{-2+3} = 5^1 = 5 ,
\qquad
\frac{3^2}{3^{-1}} = 3^{2-(-1)} = 3^3 = 27 .
$$
Il primo risultato coincide con quello che si ottiene dalla definizione, perché $5^{-2} \cdot 5^3 = \dfrac{1}{25} \cdot 125 = \dfrac{125}{25} = 5$.
:::

:::attenzione
Un esponente negativo non rende negativo il risultato. Per esempio $2^{-3} = \dfrac{1}{8}$, che è un numero positivo, mentre $-2^3 = -8$. Il segno meno nell'esponente indica il reciproco, e il segno della potenza dipende soltanto dal segno della base e dalla parità dell'esponente.
:::

## Notazione scientifica e ordine di grandezza

:::osservazione{#potenze-di-dieci titolo="Potenze di 10"}
La potenza $10^n$, con $n$ naturale, si scrive con la cifra $1$ seguita da $n$ zeri, perché ogni fattore $10$ aggiunge uno zero. Per esempio $10^3 = 1000$ e $10^6 = 1\,000\,000$. Poiché $10^{-n} = \dfrac{1}{10^n}$, la potenza con esponente negativo è un numero decimale con la cifra $1$ al posto $n$ dopo la virgola; per esempio $10^{-1} = 0{,}1$, $10^{-2} = 0{,}01$ e $10^{-4} = 0{,}0001$.

Moltiplicare un numero per $10^n$ sposta la virgola di $n$ posti verso destra, e moltiplicarlo per $10^{-n}$ la sposta di $n$ posti verso sinistra. Per esempio
$$
3{,}7 \cdot 10^2 = 370 ,
\qquad
3{,}7 \cdot 10^{-2} = 0{,}037 .
$$
:::

:::definizione{#notazione-scientifica titolo="Notazione scientifica"}
Un numero positivo è scritto in **notazione scientifica** quando ha la forma
$$
a \cdot 10^n ,
\qquad
\text{con } 1 \leq a < 10 \text{ e } n \text{ intero} .
$$
In parole, il numero si scrive come un numero con una sola cifra diversa da zero prima della virgola, moltiplicato per una potenza di $10$. La notazione serve a scrivere in poco spazio numeri molto grandi o molto piccoli, e a confrontarli guardando gli esponenti. Per esempio
$$
3\,400\,000 = 3{,}4 \cdot 10^6 ,
\qquad
0{,}00052 = 5{,}2 \cdot 10^{-4} .
$$
Nel primo numero la virgola si sposta di $6$ posti verso sinistra per ottenere $3{,}4$, quindi l'esponente è $6$. Nel secondo numero la virgola si sposta di $4$ posti verso destra per ottenere $5{,}2$, quindi l'esponente è $-4$. La distanza media tra la Terra e il Sole, circa $150\,000\,000$ km, in notazione scientifica si scrive $1{,}5 \cdot 10^8$ km.
:::

:::esempio{titolo="Prodotti e quozienti in notazione scientifica"}
In un prodotto si moltiplicano tra loro i numeri davanti alle potenze di $10$, e le potenze di $10$ si moltiplicano con la regola del prodotto di potenze con la stessa base:
$$
\begin{aligned}
\left( 2{,}5 \cdot 10^4 \right) \cdot \left( 6 \cdot 10^3 \right)
&= (2{,}5 \cdot 6) \cdot 10^{4+3} \\[6pt]
&= 15 \cdot 10^7 \\[6pt]
&= 1{,}5 \cdot 10^8 .
\end{aligned}
$$
Il numero $15$ non è compreso tra $1$ e $10$. Poiché $15 = 1{,}5 \cdot 10$, si ha $15 \cdot 10^7 = 1{,}5 \cdot 10^{8}$, che è in notazione scientifica. Per un quoziente si usa la regola del quoziente:
$$
\frac{8 \cdot 10^3}{2 \cdot 10^{-2}} = \frac{8}{2} \cdot 10^{3-(-2)} = 4 \cdot 10^5 .
$$
:::

:::definizione{#ordine-di-grandezza titolo="Ordine di grandezza"}
L'**ordine di grandezza** di un numero positivo è la potenza di $10$ che lo approssima. Scritto il numero come $a \cdot 10^n$ in notazione scientifica, si usa la convenzione seguente.

- Se $a < 5$, l'ordine di grandezza è $10^n$.
- Se $a \geq 5$, l'ordine di grandezza è $10^{n+1}$.

Per esempio $320\,000 = 3{,}2 \cdot 10^5$ ha ordine di grandezza $10^5$, mentre $780\,000 = 7{,}8 \cdot 10^5$ ha ordine di grandezza $10^6$. Alcuni testi usano come soglia $3{,}16$ al posto di $5$. L'ordine di grandezza serve a stimare un risultato prima di calcolarlo e a riconoscere un errore di un fattore $10$ in un calcolo.

::grafico{assi=0 uguale=1 linee="0,0 10.6,0;1,-0.18 1,0.18;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.18 5,0.18;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.18 10,0.18" segmenti="5,-0.5,5,0.9" punti="3.2,0,pieno;7.8,0,pieno" etichette="0.75,-0.75,10⁵;4.4,-0.75,5 · 10⁵;9.75,-0.75,10⁶;2.45,0.45,320 000;7.05,0.45,780 000" xmin=-0.5 xmax=11 ymin=-1.3 ymax=1.3 titolo="Il numero $320\,000 = 3{,}2 \cdot 10^5$ sta prima della soglia $5 \cdot 10^5$ e ha ordine di grandezza $10^5$; il numero $780\,000 = 7{,}8 \cdot 10^5$ sta dopo la soglia e ha ordine di grandezza $10^6$"}

:::

## Radice quadrata e quadrati perfetti

:::definizione{#radice-quadrata titolo="Radice quadrata"}
La radice quadrata è l'operazione inversa dell'elevamento al quadrato, cioè permette di risalire a un numero conoscendo il suo quadrato. Per un numero $a \geq 0$, la **radice quadrata** $\sqrt{a}$ è il numero maggiore o uguale a zero che elevato al quadrato dà $a$:
$$
\sqrt{a} = b
\quad \text{significa} \quad
b \geq 0 \ \text{ e } \ b^2 = a .
$$
Il numero $a$ si chiama **radicando** e il simbolo $\sqrt{\ }$ si chiama segno di radice. Per esempio $\sqrt{49} = 7$, perché $7 \geq 0$ e $7^2 = 49$. Inoltre $\sqrt{0} = 0$, $\sqrt{1} = 1$ e $\sqrt{\dfrac{9}{4}} = \dfrac{3}{2}$, perché $\left( \dfrac{3}{2} \right)^2 = \dfrac{9}{4}$. In geometria $\sqrt{a}$ è la misura del lato di un quadrato che ha area $a$.

::grafico{assi=0 uguale=1 poligoni="0,0 7,0 7,7 0,7" linee="0,0 7,0 7,7 0,7 0,0" segmenti="1,0,1,7;2,0,2,7;3,0,3,7;4,0,4,7;5,0,5,7;6,0,6,7;0,1,7,1;0,2,7,2;0,3,7,3;0,4,7,4;0,5,7,5;0,6,7,6" etichette="3.35,-0.8,7;7.35,3.35,7" xmin=-1 xmax=8.5 ymin=-1.4 ymax=7.6 titolo="Un quadrato formato da $49$ quadratini di lato $1$ ha area $49$ e lato $7$, perciò $\sqrt{49} = 7$"}

:::

:::attenzione
Il radicando di una radice quadrata è maggiore o uguale a zero. La scrittura $\sqrt{-4}$ non ha significato, perché il quadrato di un numero qualsiasi è maggiore o uguale a zero; per esempio $2^2 = 4$ e anche $(-2)^2 = 4$. Per lo stesso motivo i numeri che elevati al quadrato danno $49$ sono due, $7$ e $-7$, mentre il simbolo $\sqrt{49}$ indica soltanto il numero positivo $7$. In particolare $\sqrt{(-5)^2} = \sqrt{25} = 5$.
:::

:::richiamo{titolo="Scomposizione in fattori primi"}
Ogni numero naturale maggiore di $1$ si scrive come prodotto di numeri primi, e questa scrittura è unica a meno dell'ordine dei fattori. Per esempio $360 = 2^3 \cdot 3^2 \cdot 5$.
:::

:::definizione{#quadrati-perfetti titolo="Quadrati perfetti"}
Un numero naturale è un **quadrato perfetto** se è il quadrato di un numero naturale. In questo caso la sua radice quadrata è un numero naturale. I quadrati dei numeri da $1$ a $15$ sono
$$
1 ,\ 4 ,\ 9 ,\ 16 ,\ 25 ,\ 36 ,\ 49 ,\ 64 ,\ 81 ,\ 100 ,\ 121 ,\ 144 ,\ 169 ,\ 196 ,\ 225 .
$$
Un numero è un quadrato perfetto se e *solo se* nella sua scomposizione in fattori primi ogni esponente è pari. Infatti, per la potenza di un prodotto e la potenza di una potenza, gli esponenti della scomposizione di $m^2$ sono il doppio di quelli della scomposizione di $m$; per esempio $\left( 2 \cdot 3^2 \right)^2 = 2^2 \cdot 3^4$. Viceversa, se ogni esponente è pari, dimezzando gli esponenti si ottiene un numero naturale che elevato al quadrato dà il numero di partenza, cioè la sua radice quadrata:
$$
324 = 2^2 \cdot 3^4 ,
\qquad
\sqrt{324} = 2 \cdot 3^2 = 18 .
$$
Il numero $12 = 2^2 \cdot 3$ non è un quadrato perfetto, perché il fattore $3$ ha esponente $1$, che è dispari.
:::

:::esempio{#stima-radice titolo="Stima di una radice quadrata"}
Se il radicando non è un quadrato perfetto, la radice si colloca tra due numeri vicini con l'aiuto dei quadrati. Tra due numeri positivi, quello che ha il quadrato più grande è il più grande. Poiché $4^2 = 16$ e $5^2 = 25$, si ha $4^2 < 20 < 5^2$, quindi $4 < \sqrt{20} < 5$. Per la prima cifra decimale si prova il valore intermedio $4{,}5$. Poiché $4{,}5^2 = 20{,}25$ è maggiore di $20$, si ha $\sqrt{20} < 4{,}5$. Con altri tentativi dello stesso tipo si trova $\sqrt{20} \approx 4{,}47$.

::grafico{assi=0 uguale=1 linee="3.75,0 5.25,0;4,-0.05 4,0.05;4.5,-0.05 4.5,0.05;5,-0.05 5,0.05" punti="4.472,0,pieno" etichette="3.97,-0.17,4;4.43,-0.17,4,5;4.97,-0.17,5;3.88,0.12,16;4.36,0.12,20,25;4.88,0.12,25;4.36,0.24,√20 ≈ 4,47" xmin=3.7 xmax=5.3 ymin=-0.28 ymax=0.32 titolo="Sotto la retta i numeri $4$, $4{,}5$ e $5$, sopra i loro quadrati $16$, $20{,}25$ e $25$: il numero $\sqrt{20} \approx 4{,}47$ è compreso tra $4$ e $4{,}5$, perché $16 < 20 < 20{,}25$"}

:::

## Radice cubica

:::definizione{#radice-cubica titolo="Radice cubica"}
La radice cubica è l'operazione inversa dell'elevamento al cubo. La **radice cubica** di un numero $a$ è il numero che elevato al cubo dà $a$, e si indica con $\sqrt[3]{a}$:
$$
\sqrt[3]{a} = b
\quad \text{significa} \quad
b^3 = a .
$$
Il numero $3$ scritto sul segno di radice si chiama **indice**. Nella radice quadrata l'indice è $2$ e non si scrive. Per esempio $\sqrt[3]{8} = 2$, perché $2^3 = 8$, e $\sqrt[3]{125} = 5$, perché $5^3 = 125$. In geometria $\sqrt[3]{a}$ è la misura dello spigolo di un cubo che ha volume $a$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,2 0,2" linee="0,0 2,0 2,2 0,2 0,0;0,2 0.9,2.6 2.9,2.6 2,2;2,0 2.9,0.6 2.9,2.6;1,0 1,2;0,1 2,1;0.45,2.3 2.45,2.3;1,2 1.9,2.6;2.45,0.3 2.45,2.3;2,1 2.9,1.6" segmenti="0,0,0.9,0.6;0.9,0.6,2.9,0.6;0.9,0.6,0.9,2.6" etichette="0.9,-0.4,2;-0.4,0.9,2;2.6,0.15,2" xmin=-0.8 xmax=3.6 ymin=-0.7 ymax=3 titolo="Un cubo formato da $8$ cubetti di spigolo $1$ ha volume $8$ e spigolo $2$, perciò $\sqrt[3]{8} = 2$"}

:::

:::osservazione{#cubi-perfetti titolo="Radice cubica di un numero negativo e cubi perfetti"}
La radice cubica esiste per ogni numero, anche negativo, perché il cubo di un numero negativo è negativo. Per esempio $\sqrt[3]{-27} = -3$, dato che $(-3)^3 = (-3) \cdot (-3) \cdot (-3) = -27$. Ogni numero è il cubo di un solo numero, perciò nella definizione della radice cubica non serve la condizione $b \geq 0$ che compare nella radice quadrata. I cubi dei numeri da $1$ a $10$ sono
$$
1 ,\ 8 ,\ 27 ,\ 64 ,\ 125 ,\ 216 ,\ 343 ,\ 512 ,\ 729 ,\ 1000 .
$$
Un numero naturale è un **cubo perfetto** se è il cubo di un numero naturale, cioè se nella sua scomposizione in fattori primi ogni esponente è un multiplo di $3$. La radice cubica si ottiene allora dividendo gli esponenti per $3$; per esempio $216 = 2^3 \cdot 3^3$, quindi $\sqrt[3]{216} = 2 \cdot 3 = 6$.
:::

## Proprietà delle radici

::::teorema{#prodotto-quoziente-radici titolo="Radice di un prodotto e di un quoziente"}
Per $a \geq 0$ e $b \geq 0$ valgono
$$
\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b} ,
\qquad
\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad \text{con } b \neq 0 .
$$
In parole, la radice di un prodotto è il prodotto delle radici, e la radice di un quoziente è il quoziente delle radici. Per esempio $\sqrt{4 \cdot 9} = \sqrt{36} = 6$ e anche $\sqrt{4} \cdot \sqrt{9} = 2 \cdot 3 = 6$. Lette da destra a sinistra, le uguaglianze permettono di moltiplicare due radici; per esempio $\sqrt{2} \cdot \sqrt{8} = \sqrt{16} = 4$. Le stesse regole valgono per la radice cubica, senza condizioni sul segno di $a$ e di $b$; per esempio $\sqrt[3]{8 \cdot 27} = \sqrt[3]{8} \cdot \sqrt[3]{27} = 2 \cdot 3 = 6$.

:::dimostrazione
L'idea è mostrare che il numero $\sqrt{a} \cdot \sqrt{b}$ ha le due proprietà che definiscono $\sqrt{a \cdot b}$. Il numero $\sqrt{a} \cdot \sqrt{b}$ è maggiore o uguale a zero, perché è il prodotto di due numeri maggiori o uguali a zero. Per la potenza di un prodotto il suo quadrato è
$$
\left( \sqrt{a} \cdot \sqrt{b} \right)^2 = \left( \sqrt{a} \right)^2 \cdot \left( \sqrt{b} \right)^2 = a \cdot b .
$$
Quindi $\sqrt{a} \cdot \sqrt{b}$ è il numero maggiore o uguale a zero che elevato al quadrato dà $a \cdot b$, cioè è $\sqrt{a \cdot b}$. Con $a = 4$ e $b = 9$ il conto è $(2 \cdot 3)^2 = 2^2 \cdot 3^2 = 4 \cdot 9 = 36$. Per il quoziente il ragionamento è lo stesso, con la potenza di un quoziente al posto della potenza di un prodotto.
:::
::::

:::attenzione
La radice di una somma è in generale diversa dalla somma delle radici. Per esempio
$$
\sqrt{36 + 64} = \sqrt{100} = 10 ,
\qquad
\sqrt{36} + \sqrt{64} = 6 + 8 = 14 .
$$
Allo stesso modo $\sqrt{2} + \sqrt{3}$ è diverso da $\sqrt{5}$, perché $\sqrt{2} + \sqrt{3} \approx 3{,}15$ e $\sqrt{5} \approx 2{,}24$.
:::

:::teorema{#portare-fuori titolo="Portare un fattore fuori dal segno di radice"}
Per $a \geq 0$ e $b \geq 0$ vale
$$
\sqrt{a^2 \cdot b} = a \sqrt{b} .
$$
La regola segue dalla radice di un prodotto, perché $\sqrt{a^2 \cdot b} = \sqrt{a^2} \cdot \sqrt{b}$ e $\sqrt{a^2} = a$ per $a \geq 0$. La scrittura $a\sqrt{b}$ indica il prodotto $a \cdot \sqrt{b}$. La regola serve a semplificare una radice. Il radicando si scrive come prodotto del più grande quadrato perfetto che lo divide per un altro numero, e la radice del quadrato perfetto si porta fuori. Per esempio
$$
\sqrt{180} = \sqrt{36 \cdot 5} = \sqrt{36} \cdot \sqrt{5} = 6 \sqrt{5} .
$$
Il quadrato perfetto si trova con la scomposizione in fattori primi. Da $180 = 2^2 \cdot 3^2 \cdot 5$ si legge infatti il quadrato perfetto $2^2 \cdot 3^2 = 36$.
:::

:::definizione{#radicali-simili titolo="Radicali simili"}
Un'espressione come $\sqrt{7}$ o $3\sqrt{2}$ si chiama **radicale**. Due radicali sono **simili** se hanno lo stesso radicando, come $2\sqrt{3}$ e $5\sqrt{3}$. Per la proprietà distributiva, radicali simili si sommano sommando i numeri che li moltiplicano:
$$
2\sqrt{3} + 5\sqrt{3} = (2 + 5) \sqrt{3} = 7\sqrt{3} .
$$
Due radicali con radicandi diversi possono diventare simili dopo aver portato fuori i fattori. Per esempio $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$ e $\sqrt{27} = \sqrt{9 \cdot 3} = 3\sqrt{3}$, quindi
$$
\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3} .
$$
Se i radicandi restano diversi, come in $\sqrt{2} + \sqrt{3}$, la somma non si semplifica.
:::

## Razionalizzazione

:::richiamo{titolo="Proprietà invariantiva delle frazioni"}
Se si moltiplicano il numeratore e il denominatore di una frazione per uno stesso numero diverso da zero, si ottiene una frazione equivalente, cioè $\dfrac{a}{b} = \dfrac{a \cdot c}{b \cdot c}$ per $b \neq 0$ e $c \neq 0$.
:::

:::definizione{#razionalizzazione titolo="Razionalizzazione"}
**Razionalizzare** una frazione significa scriverla come una frazione equivalente con il denominatore senza radici. Quando il denominatore è $\sqrt{a}$, con $a > 0$, si moltiplicano il numeratore e il denominatore per $\sqrt{a}$, perché $\sqrt{a} \cdot \sqrt{a} = a$:
$$
\frac{1}{\sqrt{2}} = \frac{1 \cdot \sqrt{2}}{\sqrt{2} \cdot \sqrt{2}} = \frac{\sqrt{2}}{2} .
$$
Per la proprietà invariantiva la frazione ottenuta è equivalente a quella di partenza. La forma razionalizzata rende più semplici i calcoli a mano. Con $\sqrt{2} \approx 1{,}414$, il valore di $\dfrac{\sqrt{2}}{2}$ si ottiene dividendo per $2$ ed è circa $0{,}707$, mentre il valore di $\dfrac{1}{\sqrt{2}}$ richiede di dividere $1$ per $1{,}414$. La razionalizzazione permette anche di riconoscere radicali simili in una somma di frazioni.
:::

:::esempio{titolo="Due razionalizzazioni"}
Nella frazione $\dfrac{10}{\sqrt{5}}$ si moltiplicano il numeratore e il denominatore per $\sqrt{5}$. Il denominatore diventa $\sqrt{5} \cdot \sqrt{5} = 5$, che si semplifica con $10$:
$$
\frac{10}{\sqrt{5}} = \frac{10\sqrt{5}}{5} = 2\sqrt{5} .
$$
Nella frazione $\dfrac{3}{2\sqrt{6}}$ la radice al denominatore è $\sqrt{6}$, quindi si moltiplica soltanto per $\sqrt{6}$. Il denominatore diventa $2 \cdot \sqrt{6} \cdot \sqrt{6} = 2 \cdot 6 = 12$, e la frazione si semplifica per $3$:
$$
\frac{3}{2\sqrt{6}} = \frac{3\sqrt{6}}{2 \cdot 6} = \frac{3\sqrt{6}}{12} = \frac{\sqrt{6}}{4} .
$$
:::

## Numeri irrazionali e numeri reali

:::esempio{titolo="Un quadrato di area 2"}
Un quadrato di lato $2$ si divide in quattro quadratini di lato $1$. I segmenti che uniscono i punti medi dei lati del quadrato grande formano un quadrato più piccolo, che contiene metà di ciascun quadratino. La sua area è quindi $4 \cdot \dfrac{1}{2} = 2$. Il lato di questo quadrato è perciò il numero positivo che elevato al quadrato dà $2$, cioè $\sqrt{2}$, ed è anche la diagonale di un quadratino di lato $1$. Il valore di $\sqrt{2}$ si stima con i quadrati, come per $\sqrt{20}$:
$$
1{,}4^2 = 1{,}96 , \qquad 1{,}5^2 = 2{,}25 , \qquad 1{,}41^2 = 1{,}9881 , \qquad 1{,}42^2 = 2{,}0164 .
$$
Poiché $1{,}41^2 < 2 < 1{,}42^2$, si ha $1{,}41 < \sqrt{2} < 1{,}42$.

::grafico{assi=0 uguale=1 poligoni="1,0 2,1 1,2 0,1" linee="0,0 2,0 2,2 0,2 0,0" segmenti="1,0,1,2;0,1,2,1" etichette="0.45,-0.22,1;1.45,-0.22,1;1.55,0.35,√2" xmin=-0.4 xmax=2.4 ymin=-0.45 ymax=2.3 titolo="Il quadrato colorato contiene metà di ciascuno dei quattro quadratini di lato $1$, quindi ha area $2$ e lato $\sqrt{2}$"}

:::

::::teorema{#radice-di-due-irrazionale titolo="Irrazionalità della radice quadrata di 2"}
Il numero $\sqrt{2}$ non si può scrivere come una frazione $\dfrac{m}{n}$ con $m$ e $n$ numeri naturali. Ogni numero decimale limitato o periodico si può scrivere come frazione, come si è visto nell'argomento sui numeri decimali; perciò le cifre decimali di $\sqrt{2} = 1{,}41421\ldots$ sono infinite e non si ripetono con un periodo.

:::dimostrazione
L'idea è contare quante volte il fattore $2$ compare nella scomposizione in fattori primi. Si supponga che $\sqrt{2} = \dfrac{m}{n}$, con $m$ e $n$ naturali diversi da zero. Elevando al quadrato si ottiene $2 = \dfrac{m^2}{n^2}$, cioè
$$
m^2 = 2 \cdot n^2 .
$$
Nella scomposizione di un quadrato ogni fattore primo compare un numero pari di volte, perché gli esponenti si raddoppiano; un fattore che non compare conta zero volte, e zero è pari. Quindi il fattore $2$ compare un numero pari di volte in $m^2$ e in $n^2$, e un numero *dispari* di volte in $2 \cdot n^2$. Per esempio $6^2 = 36 = 2^2 \cdot 3^2$, mentre $2 \cdot 6^2 = 72 = 2^3 \cdot 3^2$. Per la scomposizione in fattori primi, che è unica, uno stesso numero non può contenere il fattore $2$ sia un numero pari sia un numero dispari di volte. Perciò l'uguaglianza $m^2 = 2 \cdot n^2$ è impossibile, e $\sqrt{2}$ non è una frazione. Ci sono frazioni vicine a $\sqrt{2}$, come $\dfrac{7}{5} = 1{,}4$, per cui $7^2 = 49$ è vicino a $2 \cdot 5^2 = 50$, ma l'uguaglianza esatta non vale mai.
:::
::::

:::definizione{#numeri-irrazionali titolo="Numeri irrazionali"}
Un numero con infinite cifre decimali non periodiche si chiama **irrazionale**. In parole, un numero irrazionale è un numero che non si può scrivere come frazione. Sono irrazionali $\sqrt{2} = 1{,}41421\ldots$, $\sqrt{3} = 1{,}73205\ldots$ e il numero $\pi = 3{,}14159\ldots$, che è il rapporto tra la lunghezza di una circonferenza e il suo diametro. Con il ragionamento usato per $\sqrt{2}$ si dimostra che la radice quadrata di un numero naturale è irrazionale ogni volta che il numero non è un quadrato perfetto. Per esempio $\sqrt{50} = 5\sqrt{2}$ è irrazionale, mentre $\sqrt{49} = 7$ è razionale. Nei calcoli un numero irrazionale si lascia scritto con il segno di radice, come $5\sqrt{2}$, oppure si approssima con un numero decimale, come $\sqrt{2} \approx 1{,}41$.
:::

:::definizione{#numeri-reali titolo="Numeri reali"}
I numeri razionali e i numeri irrazionali formano insieme l'insieme dei **numeri reali**, che si indica con $\mathbb{R}$. A ogni punto della retta dei numeri corrisponde un numero reale, e a ogni numero reale corrisponde un punto della retta. Il punto che corrisponde a $\sqrt{2}$ si trova con un quadrato di lato $1$ appoggiato sulla retta e un compasso, come mostra la figura.

Gli insiemi numerici sono contenuti l'uno nell'altro. Ogni numero naturale, cioè ogni elemento di $\mathbb{N}$, è un numero intero, cioè un elemento di $\mathbb{Z}$; ogni intero è un numero razionale, elemento di $\mathbb{Q}$; ogni razionale è un numero reale. Nei numeri reali ogni numero positivo ha una radice quadrata, mentre tra i numeri razionali nessuno ha quadrato uguale a $2$.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.6,0 2.6,0;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;0,0 1,1" curve="sqrt(2)*cos(t),sqrt(2)*sin(t),0,0.7854" punti="1.4142,0,pieno" etichette="-0.05,-0.28,0;0.95,-0.28,1;1.95,-0.28,2;1.33,-0.28,√2;0.25,0.62,√2" legenda=0 xmin=-0.7 xmax=2.7 ymin=-0.5 ymax=1.3 titolo="L'arco di circonferenza con centro in $0$ e raggio uguale alla diagonale del quadrato di lato $1$ incontra la retta nel punto $\sqrt{2}$, compreso tra $1{,}41$ e $1{,}42$"}

:::
