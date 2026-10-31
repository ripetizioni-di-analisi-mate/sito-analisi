---
titolo: Monomi, polinomi e prodotti notevoli
sommario: Come si usano le lettere al posto dei numeri, che cosa sono monomi e polinomi, come si sommano, si moltiplicano e si dividono, e quali sono i prodotti notevoli, con il loro significato come somme di aree.
---

## Lettere al posto dei numeri

:::definizione{#espressione-letterale titolo="Espressione letterale"}
Un'**espressione letterale** è un'espressione in cui alcuni numeri sono indicati con lettere, per esempio $2a + 2b$ oppure $x^2 - 3x$. In altre parole, ogni lettera tiene il posto di un numero che non si è ancora scelto. Il calcolo con le espressioni letterali si chiama **calcolo letterale**.

Un rettangolo con i lati lunghi $a$ e $b$ ha due lati lunghi $a$ e due lati lunghi $b$. Il suo perimetro è quindi $2p = 2a + 2b$, e questa formula vale per *ogni* rettangolo. Con le lettere si scrive una volta sola un calcolo che si ripete con numeri diversi.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,3 0,3" linee="0,0 5,0 5,3 0,3 0,0" etichette="2.4,-0.55,a;2.4,3.25,a;-0.55,1.4,b;5.2,1.4,b" xmin=-1 xmax=6 ymin=-1 ymax=4 titolo="Un rettangolo di lati $a$ e $b$ ha perimetro $2p = 2a + 2b$; con $a = 5$ cm e $b = 3$ cm il perimetro è $2p = 16$ cm"}

:::

:::definizione{#valore-di-un-espressione titolo="Valore di un'espressione letterale"}
Quando al posto di ogni lettera si mette un numero, l'espressione letterale diventa un'espressione numerica. Il suo risultato si chiama **valore** dell'espressione per quei numeri. Nel perimetro del rettangolo, con $a = 5$ cm e $b = 3$ cm, si ottiene
$$
2p = 2 \cdot 5 + 2 \cdot 3 = 10 + 6 = 16 \text{ cm} .
$$
Tra un numero e una lettera, e tra due lettere, il segno di moltiplicazione di solito non si scrive. Quindi $2a$ indica $2 \cdot a$ e $ab$ indica $a \cdot b$. Quando si sostituiscono i numeri, il punto $\cdot$ si scrive di nuovo.
:::

:::esempio{titolo="Valore con un numero negativo"}
Si calcola il valore di $3x^2 - x$ per $x = -2$. Il numero negativo si scrive fra parentesi tonde, così il segno meno resta dentro la potenza:
$$
\begin{aligned}
3 \cdot (-2)^2 - (-2) &= 3 \cdot 4 + 2 \\[6pt]
&= 12 + 2 = 14 .
\end{aligned}
$$
La potenza si calcola prima della moltiplicazione, come nell'ordine delle operazioni. Il quadrato $(-2)^2$ vale $4$, perché il prodotto di due numeri negativi è positivo, e $-(-2)$ vale $+2$, perché l'opposto di $-2$ è $2$.
:::

:::attenzione
Per $x = -2$ il valore di $x^2$ è $(-2)^2 = 4$. Scrivendo il numero senza parentesi si ottiene invece $-2^2$, che vale $-4$, perché la potenza si calcola prima del segno meno.
:::

:::osservazione{#lettere-al-denominatore titolo="Lettere al denominatore"}
Una divisione per zero non ha significato. Perciò, quando una lettera compare al denominatore di una frazione, si escludono i valori che rendono nullo il denominatore. Per $\dfrac{5}{x - 3}$ si richiede $x - 3 \neq 0$, cioè $x \neq 3$. Per $x = 4$ l'espressione vale $\dfrac{5}{4 - 3} = \dfrac{5}{1} = 5$, mentre per $x = 3$ l'espressione non ha valore.
:::

## Monomi

:::definizione{#monomio titolo="Monomio"}
Un **monomio** è un'espressione letterale formata soltanto da moltiplicazioni tra numeri e lettere, in cui le lettere hanno per esponente numeri naturali. Sono monomi $5x$, $-3a^2b$ e $\dfrac{1}{2}xy^3$. In altre parole, in un monomio compaiono solo prodotti e potenze delle lettere, senza somme, sottrazioni o lettere al denominatore. Per questo motivo $x + y$ e $\dfrac{3}{x}$ sono espressioni letterali che non sono monomi.

I polinomi, che si studiano dopo i monomi, sono somme di monomi. Il monomio $4a$, per esempio, è il perimetro di un quadrato di lato $a$, e per $a = 6$ cm vale $24$ cm.
:::

:::definizione{#forma-normale titolo="Forma normale, coefficiente e parte letterale"}
Un monomio è in **forma normale** quando contiene un solo numero, scritto davanti, e ogni lettera compare una volta sola. Il numero si chiama **coefficiente** e il prodotto delle lettere si chiama **parte letterale**. Per esempio il monomio $2a \cdot 3ab$ in forma normale è $6a^2b$, perché $2 \cdot 3 = 6$ e $a \cdot a = a^2$. Il coefficiente di $6a^2b$ è $6$ e la parte letterale è $a^2b$.

Il monomio $x$ ha coefficiente $1$ e il monomio $-x$ ha coefficiente $-1$. Un numero da solo, come $7$, è un monomio senza parte letterale. Un monomio con coefficiente $0$ vale $0$ per ogni valore delle lettere e si chiama monomio nullo.
:::

:::definizione{#grado-di-un-monomio titolo="Grado di un monomio"}
Il grado di un monomio rispetto a una lettera è l'esponente di quella lettera. Il **grado** del monomio, detto anche grado complessivo, è la somma degli esponenti di tutte le sue lettere. In altre parole, il grado è il numero delle lettere che si moltiplicano nel monomio, contate con le ripetizioni. Per $4x^3y^2$:

- il grado rispetto a $x$ è $3$;
- il grado rispetto a $y$ è $2$;
- il grado complessivo è $3 + 2 = 5$, perché $x^3y^2 = x \cdot x \cdot x \cdot y \cdot y$ contiene cinque lettere.

Una lettera scritta senza esponente ha esponente $1$, quindi $7ab$ ha grado $2$. Un numero diverso da zero, come $9$, è un monomio di grado $0$. Il grado serve a ordinare i termini di un polinomio e a distinguere i tipi di equazione, come si vede nell'argomento sulle equazioni di primo grado.
:::

:::definizione{#monomi-simili titolo="Monomi simili"}
Due monomi in forma normale sono **simili** se hanno la stessa parte letterale. I monomi $3x^2y$, $-x^2y$ e $\dfrac{2}{5}x^2y$ sono simili, perché la parte letterale è sempre $x^2y$. I monomi $3x^2y$ e $3xy^2$ hanno lo stesso coefficiente e lo stesso grado, eppure non sono simili, perché nel primo è al quadrato la lettera $x$ e nel secondo la lettera $y$.

Due monomi simili si dicono **opposti** se hanno coefficienti opposti, come $5ab$ e $-5ab$. La somma di due monomi si scrive come un solo monomio *solo se* i monomi sono simili, per la regola della somma di monomi.
:::

## Operazioni con i monomi

:::richiamo{titolo="Proprietà delle potenze"}
Per ogni coppia di numeri $a$ e $b$ e per esponenti naturali $m$ e $n$ valgono
$$
a^m \cdot a^n = a^{m + n} , \qquad \left( a^m \right)^n = a^{m \cdot n} , \qquad (a \cdot b)^n = a^n \cdot b^n .
$$
Se $a \neq 0$ e $m \geq n$, valgono inoltre
$$
\frac{a^m}{a^n} = a^{m - n} , \qquad a^0 = 1 .
$$
:::

:::richiamo{titolo="Proprietà distributiva"}
Per ogni terna di numeri $a$, $b$ e $c$ vale
$$
a \cdot (b + c) = a \cdot b + a \cdot c .
$$
:::

:::teorema{#somma-di-monomi titolo="Somma di monomi simili"}
La somma di due o più monomi simili è un monomio simile a loro, che ha per coefficiente la somma dei coefficienti. Per esempio
$$
3x^2 + 5x^2 = 8x^2 , \qquad 7ab - 9ab = -2ab .
$$
La regola segue dalla **proprietà distributiva**, perché $3x^2 + 5x^2 = (3 + 5) \cdot x^2$. In altre parole, $3$ volte un numero più $5$ volte lo stesso numero fanno $8$ volte quel numero. Con $x = 2$ si ha infatti $3 \cdot 4 + 5 \cdot 4 = 12 + 20 = 32$ e $8 \cdot 4 = 32$.

La somma di due monomi non simili, come $3x^2$ e $5x$, resta indicata come $3x^2 + 5x$. La somma di due monomi opposti è $0$; per esempio $4y - 4y = 0$.
:::

:::teorema{#prodotto-di-monomi titolo="Prodotto di monomi"}
Il prodotto di due monomi è un monomio che ha per coefficiente il prodotto dei coefficienti e in cui ogni lettera ha per esponente la somma dei suoi esponenti nei due fattori. Per esempio
$$
\begin{aligned}
\left( 2a^2b \right) \cdot \left( -3ab^4 \right) &= 2 \cdot (-3) \cdot a^2 \cdot a \cdot b \cdot b^4 \\[6pt]
&= -6a^3b^5 .
\end{aligned}
$$
Le proprietà commutativa e associativa della moltiplicazione permettono di scrivere vicini i numeri e le lettere uguali. Poi la prima proprietà delle potenze dà $a^2 \cdot a = a^{2 + 1} = a^3$ e $b \cdot b^4 = b^{1 + 4} = b^5$, e il segno del coefficiente si determina con la regola dei segni. Il grado del prodotto è la somma dei gradi dei fattori; nell'esempio i fattori hanno grado $3$ e $5$, e il prodotto ha grado $8$.

Il prodotto di due monomi si può leggere come l'area di un rettangolo. Un rettangolo di lati $3x$ e $2x$ si divide in quadrati di lato $x$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,4 0,4" linee="0,0 6,0 6,4 0,4 0,0;2,0 2,4;4,0 4,4;0,2 6,2" etichette="0.8,0.85,x²;2.8,0.85,x²;4.8,0.85,x²;0.8,2.85,x²;2.8,2.85,x²;4.8,2.85,x²;0.9,-0.55,x;2.9,-0.55,x;4.9,-0.55,x;-0.55,0.85,x;-0.55,2.85,x" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="Il rettangolo di lati $3x$ e $2x$ è formato da $6$ quadrati di lato $x$, quindi la sua area è $3x \cdot 2x = 6x^2$"}

:::

:::teorema{#potenza-di-un-monomio titolo="Potenza di un monomio"}
La potenza di un monomio si ottiene elevando a quella potenza il coefficiente e moltiplicando per l'esponente della potenza l'esponente di ogni lettera. Per esempio
$$
\left( -2x^3y \right)^2 = (-2)^2 \cdot \left( x^3 \right)^2 \cdot y^2 = 4x^6y^2 .
$$
La regola segue dalle proprietà delle potenze $(a \cdot b)^n = a^n \cdot b^n$ e $\left( a^m \right)^n = a^{m \cdot n}$. Lo stesso risultato si trova scrivendo il prodotto per esteso, perché $\left( -2x^3y \right) \cdot \left( -2x^3y \right) = 4x^6y^2$ per la regola del prodotto di monomi. Con esponente dispari il segno meno del coefficiente resta, quindi $\left( -a^2 \right)^3 = -a^6$.
:::

:::teorema{#quoziente-di-monomi titolo="Quoziente di monomi"}
Sia $B$ un monomio diverso da zero, con le lettere diverse da zero. Se ogni lettera di $B$ compare anche nel monomio $A$, con esponente maggiore o uguale, allora il quoziente $\dfrac{A}{B}$ è un monomio. Il suo coefficiente è il quoziente dei coefficienti, e ogni lettera ha per esponente la differenza dei suoi esponenti. Per esempio, per $x \neq 0$ e $y \neq 0$,
$$
\frac{12x^5y^3}{4x^2y} = \frac{12}{4} \cdot x^{5 - 2} \cdot y^{3 - 1} = 3x^3y^2 .
$$
Una lettera che ha lo stesso esponente nei due monomi non compare nel quoziente, perché $\dfrac{a^2}{a^2} = a^0 = 1$; per esempio $\dfrac{6a^2b}{2a^2} = 3b$ per $a \neq 0$. La divisione è l'operazione inversa della moltiplicazione, e infatti $3x^3y^2 \cdot 4x^2y = 12x^5y^3$. Quando una lettera del divisore ha esponente più alto, come in $\dfrac{x^2}{x^5}$, il quoziente è una frazione algebrica, studiata nell'argomento sulla scomposizione in fattori.
:::

:::esempio{titolo="Un'espressione con i monomi"}
Si semplifica, per $x \neq 0$ e $y \neq 0$, l'espressione $\dfrac{\left( 2x^2y \right)^3}{4x^4y} - 3x^2y^2$.
$$
\begin{aligned}
\frac{\left( 2x^2y \right)^3}{4x^4y} - 3x^2y^2 &= \frac{8x^6y^3}{4x^4y} - 3x^2y^2 \\[6pt]
&= 2x^2y^2 - 3x^2y^2 \\[6pt]
&= -x^2y^2 .
\end{aligned}
$$
Come nelle espressioni numeriche, prima si calcola la potenza, poi la divisione e infine la sottrazione. I monomi $2x^2y^2$ e $3x^2y^2$ sono simili, quindi la loro differenza è il monomio con coefficiente $2 - 3 = -1$.
:::

## Polinomi

:::definizione{#polinomio titolo="Polinomio"}
Un **polinomio** è una somma di monomi, che si chiamano **termini** del polinomio. I segni meno fanno parte dei coefficienti, quindi $2x^2 - 3x + 1$ è la somma dei monomi $2x^2$, $-3x$ e $1$. Un polinomio con due termini si chiama binomio, con tre termini trinomio, con quattro termini quadrinomio. Anche un monomio si considera un polinomio, con un solo termine.

Il valore di un polinomio si calcola come quello di ogni espressione letterale. Per $x = 2$ il trinomio $2x^2 - 3x + 1$ vale $2 \cdot 4 - 3 \cdot 2 + 1 = 8 - 6 + 1 = 3$.
:::

:::definizione{#riduzione-dei-termini-simili titolo="Riduzione dei termini simili"}
Un polinomio è **ridotto** quando non contiene termini simili. Per ridurlo si sommano tra loro i termini simili, e l'operazione si chiama **riduzione dei termini simili**. Per esempio
$$
\begin{aligned}
4x^2 + 3x - x^2 + 5 - 7x &= \left( 4x^2 - x^2 \right) + (3x - 7x) + 5 \\[6pt]
&= 3x^2 - 4x + 5 .
\end{aligned}
$$
Prima della riduzione il polinomio ha cinque termini, dopo ne ha tre. I due polinomi hanno lo stesso valore per ogni valore di $x$, e il polinomio ridotto richiede meno calcoli. Per $x = 1$, infatti, il primo vale $4 + 3 - 1 + 5 - 7 = 4$ e il secondo vale $3 - 4 + 5 = 4$.
:::

:::definizione{#grado-di-un-polinomio titolo="Grado di un polinomio"}
Il **grado** di un polinomio ridotto è il grado più alto tra quelli dei suoi termini. Il grado rispetto a una lettera è l'esponente più alto con cui compare quella lettera. Per $x^3y + 5x^2y^3 - 2y$ i termini hanno grado $4$, $5$ e $1$, quindi il polinomio ha grado $5$. Il grado rispetto a $x$ è $3$, e anche il grado rispetto a $y$ è $3$.

Il grado si calcola dopo la riduzione. In $x^2 + 3x - x^2$ i termini $x^2$ e $-x^2$ sono opposti e hanno somma $0$, quindi il polinomio ridotto è $3x$ e ha grado $1$.
:::

:::definizione{#polinomio-ordinato titolo="Polinomio ordinato e completo"}
Un polinomio in una sola lettera è **ordinato** secondo le potenze decrescenti se i termini sono scritti dal grado più alto al grado più basso. È **completo** se contiene tutte le potenze della lettera, dal grado del polinomio fino al grado $0$. Il termine di grado $0$, cioè il numero senza lettere, si chiama **termine noto**.

- Il polinomio $5x^3 - 2x^2 + x - 4$ è ordinato e completo, con termine noto $-4$.
- Il polinomio $x^4 + 3x^2 - 1$ è ordinato e non è completo, perché non contiene termini con $x^3$ e con $x$.

In un polinomio ordinato il grado si legge nel primo termine e il termine noto è l'ultimo. Per questo motivo i risultati dei calcoli con i polinomi si scrivono di solito in forma ordinata.
:::

## Somma e prodotto di polinomi

:::teorema{#somma-di-polinomi titolo="Somma e differenza di polinomi"}
Per sommare due polinomi si scrivono tutti i loro termini uno dopo l'altro e si riducono i termini simili. Per sottrarre un polinomio si cambia il segno di *ogni* suo termine e poi si somma. In altre parole, un segno più davanti a un'espressione fra parentesi lascia i segni dei termini come sono, e un segno meno li cambia tutti. Con $A = 3x^2 - 2x + 1$ e $B = x^2 + 5x - 4$ si ha
$$
\begin{aligned}
A + B &= 3x^2 - 2x + 1 + x^2 + 5x - 4 \\[6pt]
&= 4x^2 + 3x - 3 ,
\end{aligned}
$$
$$
\begin{aligned}
A - B &= 3x^2 - 2x + 1 - x^2 - 5x + 4 \\[6pt]
&= 2x^2 - 7x + 5 .
\end{aligned}
$$
Un segno meno davanti a un'espressione equivale a una moltiplicazione per $-1$. Quindi, per la proprietà distributiva, il segno meno cambia il segno di ciascun termine dell'espressione.
:::

:::attenzione
In $10 - (x - 4)$ il segno meno cambia il segno di *entrambi* i termini $x$ e $-4$, e si ottiene $10 - x + 4 = 14 - x$. Cambiando solo il segno di $x$ si scriverebbe $10 - x - 4 = 6 - x$, che è un'espressione diversa. Per $x = 2$, infatti, $10 - (2 - 4) = 10 + 2 = 12$, mentre $6 - 2 = 4$.
:::

:::teorema{#monomio-per-polinomio titolo="Prodotto di un monomio per un polinomio"}
Per moltiplicare un monomio per un polinomio si moltiplica il monomio per *ogni* termine del polinomio e si sommano i prodotti ottenuti. La regola è la **proprietà distributiva**. Per esempio
$$
\begin{aligned}
3x \left( 2x^2 - x + 4 \right) &= 3x \cdot 2x^2 + 3x \cdot (-x) + 3x \cdot 4 \\[6pt]
&= 6x^3 - 3x^2 + 12x .
\end{aligned}
$$
Ogni prodotto si calcola con la regola del prodotto di monomi. La proprietà distributiva ha anche un significato geometrico, perché un rettangolo di lati $a$ e $b + c$ si divide in due rettangoli di lati $a$ e $b$ e di lati $a$ e $c$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" linee="0,0 6,0 6,3 0,3 0,0;4,0 4,3" etichette="1.7,1.35,ab;4.75,1.35,ac;1.9,-0.55,b;4.9,-0.55,c;-0.55,1.35,a" xmin=-1 xmax=7 ymin=-1 ymax=4 titolo="Il rettangolo di lati $a$ e $b + c$ è formato da due rettangoli di aree $ab$ e $ac$, quindi $a(b + c) = ab + ac$; con $a = 3$, $b = 4$ e $c = 2$ si ha $3 \cdot 6 = 12 + 6 = 18$"}

:::

:::teorema{#prodotto-di-polinomi titolo="Prodotto di polinomi"}
Per moltiplicare due polinomi si moltiplica *ogni* termine del primo per *ogni* termine del secondo, poi si sommano i prodotti e si riducono i termini simili. Per esempio
$$
\begin{aligned}
(x + 2)(3x - 5) &= x \cdot 3x + x \cdot (-5) + 2 \cdot 3x + 2 \cdot (-5) \\[6pt]
&= 3x^2 - 5x + 6x - 10 \\[6pt]
&= 3x^2 + x - 10 .
\end{aligned}
$$
La regola si ottiene applicando due volte la proprietà distributiva, perché $(x + 2)(3x - 5) = x\,(3x - 5) + 2\,(3x - 5)$ e ciascuno dei due addendi è il prodotto di un monomio per un polinomio. Un binomio per un binomio dà quattro prodotti, e un binomio per un trinomio ne dà sei. Per $x = 1$ il prodotto di partenza vale $3 \cdot (-2) = -6$, e anche il risultato vale $3 + 1 - 10 = -6$.

Nella figura i quattro prodotti di $(x + 2)(x + 3)$ sono le aree di quattro rettangoli.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4" linee="0,0 7,0 7,6 0,6 0,0;4,0 4,6;0,4 7,4" etichette="1.65,1.85,x²;5.15,1.85,3x;1.65,4.85,2x;5.3,4.85,6;1.9,-0.55,x;5.4,-0.55,3;-0.55,1.85,x;-0.55,4.85,2" xmin=-1 xmax=8 ymin=-1 ymax=7 titolo="Il rettangolo di lati $x + 3$ e $x + 2$ è formato da quattro parti, quindi $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$"}

:::

:::osservazione{#grado-del-prodotto titolo="Grado del prodotto"}
Per polinomi in una sola lettera, il grado del prodotto è la somma dei gradi dei fattori, perché il termine di grado più alto del prodotto è il prodotto dei due termini di grado più alto. Per esempio $(x - 1)\left( x^2 + x + 1 \right)$ ha grado $1 + 2 = 3$, e infatti
$$
\begin{aligned}
(x - 1)\left( x^2 + x + 1 \right) &= x^3 + x^2 + x - x^2 - x - 1 \\[6pt]
&= x^3 - 1 .
\end{aligned}
$$
In questo prodotto i termini $x^2$ e $-x^2$, e poi $x$ e $-x$, sono opposti, quindi restano soltanto $x^3$ e $-1$.
:::

## Quadrato di un binomio e somma per differenza

:::definizione{#prodotti-notevoli titolo="Prodotti notevoli"}
Alcuni prodotti di polinomi compaiono così spesso che il loro risultato si scrive con una formula già pronta. Questi prodotti si chiamano **prodotti notevoli**. Le formule valgono per ogni valore delle lettere, e al posto delle lettere si possono mettere numeri, monomi o altri polinomi. Con le formule si sviluppa un prodotto senza scrivere uno per uno i prodotti dei termini. Lette da destra verso sinistra, le stesse formule servono a scrivere un polinomio come prodotto, come si vede nell'argomento sulla scomposizione in fattori.
:::

::::teorema{#quadrato-di-un-binomio titolo="Quadrato di un binomio"}
Per ogni valore di $a$ e di $b$ valgono
$$
(a + b)^2 = a^2 + 2ab + b^2 , \qquad (a - b)^2 = a^2 - 2ab + b^2 .
$$
In altre parole, il quadrato di un binomio è la somma del quadrato del primo termine, del **doppio prodotto** dei due termini e del quadrato del secondo termine. Il doppio prodotto ha il segno meno quando i due termini hanno segni opposti. Per esempio
$$
(x + 3)^2 = x^2 + 6x + 9 , \qquad (2y - 5)^2 = 4y^2 - 20y + 25 ,
$$
dove $6x = 2 \cdot x \cdot 3$ e $-20y = 2 \cdot 2y \cdot (-5)$. Nella figura il quadrato di lato $a + b$ è diviso in quattro parti.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,4 0,4;4,4 6,4 6,6 4,6" linee="0,0 6,0 6,6 0,6 0,0;4,0 4,6;0,4 6,4" etichette="1.65,1.85,a²;4.75,1.85,ab;1.65,4.85,ab;4.75,4.85,b²;1.9,-0.55,a;4.9,-0.55,b;-0.55,1.85,a;-0.55,4.85,b" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="Il quadrato di lato $a + b$ è formato dai quadrati $a^2$ e $b^2$ e da due rettangoli di area $ab$, quindi $(a + b)^2 = a^2 + 2ab + b^2$; con $a = 4$ e $b = 2$ le parti valgono $16$, $8$, $8$ e $4$, e la loro somma è $36 = 6^2$"}

:::dimostrazione
Il quadrato di un binomio è il prodotto del binomio per sé stesso, quindi si applica la regola del prodotto di polinomi:
$$
\begin{aligned}
(a + b)^2 &= (a + b)(a + b) \\[6pt]
&= a^2 + ab + ba + b^2 \\[6pt]
&= a^2 + 2ab + b^2 .
\end{aligned}
$$
I termini $ab$ e $ba$ sono uguali per la proprietà commutativa, perciò la loro somma è $2ab$. Per $(a - b)^2$ si ripete il calcolo con $-b$ al posto di $b$. I due prodotti misti diventano $-ab$ e $-ba$, mentre il quadrato del secondo termine resta $(-b)^2 = b^2$. Si ottiene quindi $a^2 - 2ab + b^2$.
:::
::::

:::attenzione
Il quadrato di una somma è diverso dalla somma dei quadrati. Con $a = 1$ e $b = 2$ si ha $(1 + 2)^2 = 3^2 = 9$, mentre $1^2 + 2^2 = 1 + 4 = 5$. La differenza tra i due risultati è $4$, cioè il doppio prodotto $2 \cdot 1 \cdot 2$.
:::

::::teorema{#somma-per-differenza titolo="Somma per differenza"}
Per ogni valore di $a$ e di $b$ vale
$$
(a + b)(a - b) = a^2 - b^2 .
$$
In altre parole, il prodotto della somma di due termini per la loro differenza è uguale alla **differenza dei quadrati** dei due termini. Per esempio
$$
(x + 4)(x - 4) = x^2 - 16 , \qquad (3a - 2b)(3a + 2b) = 9a^2 - 4b^2 .
$$
Con la stessa formula alcuni prodotti tra numeri si calcolano a mente. Per esempio $21 \cdot 19 = (20 + 1)(20 - 1) = 400 - 1 = 399$.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,3 3,3 3,5 0,5;7,0 14,0 14,3 7,3" linee="0,0 5,0 5,3 3,3 3,5 0,5 0,0;0,3 3,3;7,0 14,0 14,3 7,3 7,0;12,0 12,3" segmenti="3,5,5,5;5,5,5,3" etichette="2.3,1.3,I;1.2,3.85,II;3.75,3.85,b²;2.4,-0.6,a;-0.6,3.85,b;1.1,5.3,a − b;5.2,1.4,a − b;9.3,1.3,I;12.75,1.3,II;9.4,-0.6,a;12.9,-0.6,b;14.2,1.4,a − b" xmin=-1 xmax=16 ymin=-1 ymax=6 titolo="La figura a sinistra è un quadrato di lato $a$ senza il quadrato di lato $b$, e ha area $a^2 - b^2$; ruotando la parte II e mettendola accanto alla parte I si ottiene un rettangolo di lati $a + b$ e $a - b$. Con $a = 5$ e $b = 2$ si ha $25 - 4 = 7 \cdot 3 = 21$"}

:::dimostrazione
Si moltiplica ogni termine del primo binomio per ogni termine del secondo:
$$
\begin{aligned}
(a + b)(a - b) &= a^2 - ab + ba - b^2 \\[6pt]
&= a^2 - b^2 .
\end{aligned}
$$
I termini $-ab$ e $ba$ sono opposti, quindi la loro somma è $0$ e restano soltanto i due quadrati.
:::
::::

## Quadrato di un trinomio e cubo di un binomio

::::teorema{#quadrato-di-un-trinomio titolo="Quadrato di un trinomio"}
Per ogni valore di $a$, $b$ e $c$ vale
$$
(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc .
$$
In altre parole, il quadrato di un trinomio è la somma dei quadrati dei tre termini e dei doppi prodotti di ogni coppia di termini. I doppi prodotti sono tre, perché con tre termini si formano tre coppie: $a$ e $b$, $a$ e $c$, $b$ e $c$. Il segno di ogni doppio prodotto si determina con la regola dei segni. Per esempio
$$
(x + y - 2)^2 = x^2 + y^2 + 4 + 2xy - 4x - 4y ,
$$
dove $2 \cdot x \cdot (-2) = -4x$ e $2 \cdot y \cdot (-2) = -4y$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5;5,5 6,5 6,6 5,6" linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;5,0 5,6;0,3 6,3;0,5 6,5" etichette="1.2,1.3,a²;3.7,1.3,ab;5.15,1.3,ac;1.2,3.85,ab;3.7,3.85,b²;5.15,3.85,bc;1.2,5.35,ac;3.7,5.35,bc;5.2,5.35,c²;1.4,-0.6,a;3.9,-0.6,b;5.4,-0.6,c;-0.6,1.3,a;-0.6,3.85,b;-0.6,5.35,c" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="Il quadrato di lato $a + b + c$ è formato dai tre quadrati $a^2$, $b^2$, $c^2$ e da sei rettangoli, uguali a due a due; con $a = 3$, $b = 2$ e $c = 1$ si ha $9 + 4 + 1 + 12 + 6 + 4 = 36 = 6^2$"}

:::dimostrazione
Si moltiplica il trinomio per sé stesso, ogni termine per ogni termine:
$$
\begin{aligned}
(a + b + c)(a + b + c) &= a^2 + ab + ac \\[6pt]
&\quad + ba + b^2 + bc \\[6pt]
&\quad + ca + cb + c^2 \\[6pt]
&= a^2 + b^2 + c^2 + 2ab + 2ac + 2bc .
\end{aligned}
$$
I nove prodotti sono i tre quadrati e sei prodotti misti. Per la proprietà commutativa i prodotti misti sono uguali a due a due, perciò formano i tre doppi prodotti $2ab$, $2ac$ e $2bc$.
:::
::::

::::teorema{#cubo-di-un-binomio titolo="Cubo di un binomio"}
Per ogni valore di $a$ e di $b$ valgono
$$
\begin{aligned}
(a + b)^3 &= a^3 + 3a^2b + 3ab^2 + b^3 , \\[6pt]
(a - b)^3 &= a^3 - 3a^2b + 3ab^2 - b^3 .
\end{aligned}
$$
In altre parole, il cubo di un binomio è la somma di quattro termini: il cubo del primo termine, il triplo prodotto del quadrato del primo per il secondo, il triplo prodotto del primo per il quadrato del secondo e il cubo del secondo termine. Per esempio
$$
\begin{aligned}
(x + 2)^3 &= x^3 + 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 + 2^3 \\[6pt]
&= x^3 + 6x^2 + 12x + 8 .
\end{aligned}
$$
Con la stessa formula si calcola $11^3 = (10 + 1)^3 = 1000 + 300 + 30 + 1 = 1331$.

:::dimostrazione
Il cubo del binomio è il suo quadrato moltiplicato ancora una volta per il binomio. Si usa quindi la formula del quadrato di un binomio e poi la regola del prodotto di polinomi:
$$
\begin{aligned}
(a + b)^3 &= (a + b)^2 (a + b) \\[6pt]
&= \left( a^2 + 2ab + b^2 \right)(a + b) \\[6pt]
&= a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3 \\[6pt]
&= a^3 + 3a^2b + 3ab^2 + b^3 .
\end{aligned}
$$
Per $(a - b)^3$ si mette $-b$ al posto di $b$. I termini $3a^2b$ e $b^3$ cambiano segno, perché contengono $b$ con esponente dispari, mentre $3ab^2$ resta positivo, perché $(-b)^2 = b^2$.
:::
::::

:::attenzione
Il cubo di una somma è diverso dalla somma dei cubi. Con $a = 1$ e $b = 2$ si ha $(1 + 2)^3 = 3^3 = 27$, mentre $1^3 + 2^3 = 1 + 8 = 9$. La differenza $18$ è la somma dei due tripli prodotti, perché $3 \cdot 1^2 \cdot 2 + 3 \cdot 1 \cdot 2^2 = 6 + 12 = 18$.
:::

## Divisione di un polinomio per un monomio

:::teorema{#divisione-polinomio-monomio titolo="Divisione di un polinomio per un monomio"}
Sia $M$ un monomio diverso da zero. Per dividere un polinomio per $M$ si divide *ogni* termine del polinomio per $M$ e si sommano i quozienti. Il risultato è un polinomio quando ogni termine è divisibile per $M$, cioè quando ogni lettera di $M$ compare in ogni termine con esponente maggiore o uguale. Per esempio, per $x \neq 0$,
$$
\begin{aligned}
\frac{6x^3 - 9x^2 + 3x}{3x} &= \frac{6x^3}{3x} - \frac{9x^2}{3x} + \frac{3x}{3x} \\[6pt]
&= 2x^2 - 3x + 1 .
\end{aligned}
$$
Dividere per $3x$ equivale a moltiplicare per $\dfrac{1}{3x}$, quindi la regola è la **proprietà distributiva** applicata alla divisione. Con i numeri vale la stessa regola, per esempio $\dfrac{12 + 18}{6} = \dfrac{12}{6} + \dfrac{18}{6} = 2 + 3 = 5$, e infatti $\dfrac{30}{6} = 5$.
:::

:::esempio{titolo="Divisione con due lettere"}
Per $a \neq 0$ e $b \neq 0$ si divide $8a^3b^2 - 12a^2b^3 + 4a^2b^2$ per $4a^2b$.
$$
\begin{aligned}
\frac{8a^3b^2 - 12a^2b^3 + 4a^2b^2}{4a^2b} &= \frac{8a^3b^2}{4a^2b} - \frac{12a^2b^3}{4a^2b} + \frac{4a^2b^2}{4a^2b} \\[6pt]
&= 2ab - 3b^2 + b .
\end{aligned}
$$
Ogni quoziente si calcola con la regola del quoziente di monomi; nel primo, per esempio, $\dfrac{8}{4} = 2$, $a^{3 - 2} = a$ e $b^{2 - 1} = b$. La moltiplicazione è l'operazione inversa della divisione, quindi il prodotto del quoziente per il divisore è il polinomio di partenza, e infatti $4a^2b\,\left( 2ab - 3b^2 + b \right) = 8a^3b^2 - 12a^2b^3 + 4a^2b^2$.
:::

:::attenzione
Nella divisione per un monomio si divide *ogni* termine del polinomio. Con $x = 2$ si ha $\dfrac{6x^3 - 9x^2 + 3x}{3x} = \dfrac{48 - 36 + 6}{6} = \dfrac{18}{6} = 3$, e infatti $2x^2 - 3x + 1$ vale $8 - 6 + 1 = 3$. Dividendo soltanto il primo termine si scriverebbe invece $2x^2 - 9x^2 + 3x$, che per $x = 2$ vale $8 - 36 + 6 = -22$.
:::
