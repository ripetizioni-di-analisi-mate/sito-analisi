---
titolo: Conjuntos, inducción matemática y funciones elementales
sommario: Conjuntos y sistemas numéricos de N a R, principio de inducción y binomio de Newton. El capítulo termina con las funciones elementales y sus gráficas.
---

## El lenguaje de los conjuntos

:::definizione{#insiemi titolo="Conjunto, pertenencia e inclusión"}
Un **conjunto** es una colección de objetos, llamados **elementos**. La notación $x \in A$ indica que $x$ es un elemento de $A$, mientras que $x \notin A$ indica que no lo es. Podemos definir un conjunto enumerando sus elementos, como en $\{1, 2, 3\}$, o indicando la propiedad que los caracteriza. Así, $\{x \in E : P(x)\}$ es el conjunto de elementos de $E$ para los que $P(x)$ es verdadera. El conjunto vacío $\emptyset$ carece de elementos.

$A \subseteq B$ ($A$ está contenido en $B$, o $A$ es un **subconjunto** de $B$) significa que *todo* elemento de $A$ pertenece también a $B$. La igualdad de conjuntos equivale a la **doble inclusión**.
$$
A = B \iff
\begin{cases}
A \subseteq B \\[2pt]
B \subseteq A
\end{cases}
$$
Para demostrar que dos conjuntos son iguales por doble inclusión, se comprueba cada inclusión por separado.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="$A \subseteq B$. Todo elemento de $A$ pertenece también a $B$"}

:::

:::esempio
$A = \{x \in \mathbb{R} : x^2 < 4\}$. Se cumple $1 \in A$ porque $1^2 = 1 < 4$, mientras que $3 \notin A$ porque $3^2 = 9 \geq 4$. Además, $\{0, 1\} \subseteq A$, ya que ambos elementos satisfacen $x^2 < 4$.
:::

:::attenzione
Los símbolos $\in$ y $\subseteq$ tienen significados **distintos**. El símbolo $\in$ relaciona un elemento con un conjunto, mientras que $\subseteq$ relaciona dos conjuntos. Si $A = \{1, 2\}$, son correctas $1 \in A$ y $\{1\} \subseteq A$. En cambio, $1 \subseteq A$ y $\{1\} \in A$ son **falsas**, porque $1$ no es un conjunto y $\{1\}$ no es uno de los dos elementos de $A$.
:::

## Operaciones con conjuntos

:::definizione{#operazioni-tra-insiemi titolo="Unión, intersección, diferencia y complemento"}
Sean $A$ y $B$ subconjuntos de un conjunto universal $E$. Definimos
$$
\begin{gathered}
A \cup B = \{x : x \in A \text{ o } x \in B\}, \qquad
A \cap B = \{x : x \in A \text{ y } x \in B\}, \\[6pt]
A \setminus B = \{x : x \in A \text{ y } x \notin B\}, \qquad
A^{c} = E \setminus A .
\end{gathered}
$$
La «o» de la unión es inclusiva, por lo que los elementos comunes a $A$ y $B$ también pertenecen a la unión. Si $A \cap B = \emptyset$, los conjuntos se llaman **disjuntos**. El complemento depende del conjunto universal $E$. Para subconjuntos de $\mathbb{R}$, tomaremos $\mathbb{R}$ como universo salvo que se indique lo contrario. Estas operaciones corresponden a conectores lógicos. Por eso, para resolver un sistema de inecuaciones se toma la **intersección** de las soluciones de cada inecuación. Al resolver una inecuación por casos, se toma la **unión** de las soluciones de los distintos casos.

::venn{tipo="disgiunti" titolo="Conjuntos disjuntos, $A \cap B = \emptyset$"}

::venn{ambiente="E" zone="u" universo=1 titolo="Ley de De Morgan $(A \cup B)^{c} = A^{c} \cap B^{c}$. Los elementos que no están en la unión no pertenecen ni a $A$ ni a $B$"}

::venn{ambiente="E" zone="a,b,u" universo=1 titolo="Ley de De Morgan $(A \cap B)^{c} = A^{c} \cup B^{c}$. Los elementos que no están en la intersección no pertenecen a $A$ o no pertenecen a $B$"}

::venn{tipo="tre" zone="ab,ac,abc" titolo="Propiedad distributiva $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$"}

::venn{tipo="tre" zone="a,ab,ac,abc,bc" titolo="Propiedad distributiva $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$"}

:::

:::esempio
Sean $A = \{1, 2, 3, 4\}$ y $B = \{3, 4, 5\}$, con conjunto universal $E = \{1, 2, 3, 4, 5, 6\}$. Entonces
$$
A \cup B = \{1, 2, 3, 4, 5\}, \quad A \cap B = \{3, 4\}, \quad A \setminus B = \{1, 2\}, \quad B \setminus A = \{5\}, \quad A^{c} = \{5, 6\} .
$$

::venn{ambiente="E" zone="a,ab,b" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \cup B = \{1, 2, 3, 4, 5\}$"}

::venn{ambiente="E" zone="ab" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \cap B = \{3, 4\}$"}

::venn{ambiente="E" zone="a" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \setminus B = \{1, 2\}$"}

::venn{ambiente="E" zone="a,b" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$(A \setminus B) \cup (B \setminus A) = \{1, 2, 5\}$. Los elementos que pertenecen a uno solo de los conjuntos forman la diferencia simétrica $A \,\triangle\, B$"}

::venn{ambiente="E" zone="b,u" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A^{c} = E \setminus A = \{5, 6\}$"}

:::

:::definizione{#prodotto-cartesiano titolo="Producto cartesiano"}
El **producto cartesiano** de $A$ y $B$ es el conjunto de pares ordenados
$$
A \times B = \{(a, b) : a \in A,\ b \in B\} .
$$
En un par ordenado importa el orden. En general, $A \times B \neq B \times A$. Por ejemplo, si $A = \{1, 2\}$ y $B = \{0\}$, se obtiene $A \times B = \{(1, 0), (2, 0)\}$ y $B \times A = \{(0, 1), (0, 2)\}$. El conjunto $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ es el **plano cartesiano**, del que son subconjuntos las gráficas de las funciones.
:::

## Los conjuntos numéricos

:::definizione{#insiemi-numerici titolo="Los conjuntos numéricos N, Z, Q y R"}
$$
\mathbb{N} = \{0, 1, 2, 3, \dots\}, \qquad
\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}, \qquad
\mathbb{Q} = \left\{ \frac{m}{n} : m \in \mathbb{Z},\ n \in \mathbb{N},\ n \geq 1 \right\} .
$$
$\mathbb{R}$ es el conjunto de los números reales, que admiten una representación decimal finita o infinita. Los racionales son exactamente los que tienen un desarrollo decimal finito o periódico. Se cumplen las inclusiones estrictas $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Cada ampliación permite resolver ecuaciones que antes carecían de solución. Así, $x + 3 = 1$ no tiene solución en $\mathbb{N}$ y sí en $\mathbb{Z}$, y $2x = 1$ no tiene solución en $\mathbb{Z}$ y sí en $\mathbb{Q}$. Del mismo modo, $x^2 = 2$ no tiene solución en $\mathbb{Q}$, como prueba la irracionalidad de $\sqrt{2}$, y sí en $\mathbb{R}$. Los números reales que no son racionales se llaman **irracionales**. El conjunto $\mathbb{Q}$ es **denso** en $\mathbb{R}$. Entre dos números reales distintos siempre hay un racional y también un irracional.
:::

::::teorema{#radice-di-due titolo="Irracionalidad de la raíz cuadrada de 2"}
No existe ningún racional $x$ tal que $x^2 = 2$. Por tanto, $\sqrt{2}$ es **irracional**. Esto muestra que $\mathbb{Q}$ tiene huecos. La propia geometría elemental da la longitud $\sqrt{2}$ como diagonal de un cuadrado de lado $1$. El mismo argumento por contradicción prueba que $\sqrt{3}$, $\sqrt{5}$, $\sqrt{6}$ y, en general, $\sqrt{p}$ son irracionales cuando $p$ es primo.

:::dimostrazione
Supongamos, **por contradicción**, que existe un racional cuyo cuadrado es $2$. Lo escribimos como fracción irreducible $x = \dfrac{m}{n}$, con enteros coprimos $m$ y $n$, y $n \geq 1$. De $\dfrac{m^2}{n^2} = 2$ se deduce $m^2 = 2n^2$, así que $m^2$ es par. Como el cuadrado de un impar es impar, $m$ es par. Escribimos $m = 2k$, con $k$ entero. Al sustituir, obtenemos $4k^2 = 2n^2$, es decir, $n^2 = 2k^2$. Entonces $n^2$ es par y, por el mismo motivo, $n$ también lo es. Así, $m$ y $n$ tienen el divisor común $2$, lo que **contradice** que la fracción sea irreducible. Por tanto, ese racional no existe.
:::
::::

## Intervalos

:::definizione{#intervalli titolo="Intervalos y su notación"}
Un **intervalo** es un subconjunto $I \subseteq \mathbb{R}$ que contiene todos los números reales situados entre dos cualesquiera de sus puntos. Si elegimos dos puntos de $I$, todo real entre ellos pertenece a $I$. Para $a < b$ reales, usamos las siguientes notaciones.
$$
\begin{gathered}
(a, b) = \{x : a < x < b\}, \qquad [a, b] = \{x : a \leq x \leq b\}, \\[6pt]
[a, b) = \{x : a \leq x < b\}, \qquad (a, b] = \{x : a < x \leq b\}, \\[6pt]
(a, +\infty) = \{x : x > a\}, \qquad (-\infty, b] = \{x : x \leq b\}, \qquad (-\infty, +\infty) = \mathbb{R} .
\end{gathered}
$$
El paréntesis excluye el extremo y el corchete lo incluye. Junto a $+\infty$ y $-\infty$ siempre se usa paréntesis, pues no son números reales. Se dice que $[a, b]$ es un **intervalo cerrado y acotado** y que $(a, b)$ es un **intervalo abierto**. Los dominios de las funciones elementales y las soluciones de las inecuaciones suelen expresarse como intervalos o uniones de intervalos.
:::

:::esempio{titolo="Operaciones con intervalos"}
Sean $A = [0, 4)$ y $B = (2, 6]$. Entonces
$$
A \cup B = [0, 6], \qquad A \cap B = (2, 4), \qquad A \setminus B = [0, 2], \qquad A^{c} = (-\infty, 0) \cup [4, +\infty) .
$$
El punto $2$ pertenece a $A \setminus B$ porque $2 \in A$, pero $2 \notin B$, ya que $B$ excluye su extremo izquierdo.
:::

## Cotas superiores e inferiores, máximo y mínimo

:::definizione{#maggioranti-minoranti titolo="Cota superior, cota inferior y conjunto acotado"}
Sea $A \subseteq \mathbb{R}$ no vacío. Un número $M \in \mathbb{R}$ es una **cota superior** de $A$ si $a \leq M$ para todo $a \in A$. Un número $m \in \mathbb{R}$ es una **cota inferior** si $m \leq a$ para todo $a \in A$. El conjunto $A$ está acotado superiormente si tiene al menos una cota superior, acotado inferiormente si tiene al menos una cota inferior y **acotado** si tiene ambas. Una cota superior puede quedar fuera del conjunto. Por ejemplo, las cotas superiores de $(0, 1)$ son todos los números de $[1, +\infty)$, y ninguno de ellos pertenece a $(0, 1)$. Si $M$ es una cota superior, cualquier número mayor que $M$ también lo es. La menor de las cotas superiores, si existe, es el supremo.
:::

:::definizione{#massimo-minimo titolo="Máximo y mínimo"}
El **máximo** de $A$ es una cota superior que pertenece al conjunto.
$$
M = \max A \iff
\begin{cases}
M \in A \\[2pt]
a \leq M \quad \text{para todo } a \in A
\end{cases}
$$
El **mínimo** se define de forma análoga con las cotas inferiores. El máximo, si existe, es **único**. Si $M_1$ y $M_2$ son ambos máximos, entonces $M_1 \leq M_2$, porque $M_2$ es una cota superior y $M_1 \in A$. Por el mismo motivo, $M_2 \leq M_1$, y por tanto $M_1 = M_2$.
:::

:::esempio
El conjunto $[0, 1]$ tiene mínimo $0$ y máximo $1$. El intervalo $(0, 1)$ **no tiene máximo**. En efecto, para cada $x \in (0, 1)$, el punto $\dfrac{x + 1}{2}$ pertenece a $(0, 1)$ y es mayor que $x$, de modo que ningún elemento del intervalo es cota superior. Por un razonamiento análogo, $(0, 1)$ **no tiene mínimo**.
:::

## Supremo e ínfimo

:::definizione{#sup-inf titolo="Supremo e ínfimo"}
Sea $A \subseteq \mathbb{R}$ no vacío. El **supremo** de $A$, denotado por $\sup A$, es la menor de las cotas superiores de $A$. El **ínfimo** $\inf A$ es la mayor de las cotas inferiores. Si $A$ no está acotado superiormente, se toma $\sup A = +\infty$. Si no está acotado inferiormente, se toma $\inf A = -\infty$. Si existe el máximo, $\sup A = \max A$. Recíprocamente, si $\sup A \in A$, entonces $\sup A$ es el máximo de $A$. El supremo puede existir aunque no haya máximo. Por ejemplo, $\sup\,(0, 1) = 1$ y $\inf\,(0, 1) = 0$, y ninguno de los dos pertenece al intervalo. El supremo y el ínfimo se utilizan para describir la acotación de conjuntos y, en capítulos posteriores, de funciones y sucesiones.
:::

::::teorema{#caratterizzazione-sup titolo="Caracterización del supremo y del ínfimo con épsilon"}
Sean $A \subseteq \mathbb{R}$ no vacío y $L \in \mathbb{R}$. Entonces $L = \sup A$ si y solo si se cumplen las dos condiciones siguientes.
$$
\begin{cases}
a \leq L \quad \text{para todo } a \in A \\[4pt]
\text{para todo } \varepsilon > 0 \ \text{existe } a \in A \ \text{tal que } a > L - \varepsilon
\end{cases}
$$
Análogamente, $\ell = \inf A$ si y solo si $\ell \leq a$ para todo $a \in A$ y, para cada $\varepsilon > 0$, existe $a \in A$ tal que $a < \ell + \varepsilon$. En la caracterización del supremo, la primera condición afirma que $L$ es una **cota superior**. La segunda afirma que, si bajamos de $L$ una cantidad $\varepsilon$ arbitraria, siempre hay un elemento del conjunto mayor que $L - \varepsilon$. Al comprobarla, esta condición se traduce en una inecuación en la variable que describe los elementos de $A$.

:::dimostrazione
La segunda condición afirma que, para todo $\varepsilon > 0$, el número $L - \varepsilon$ no es cota superior de $A$. Como cada número menor que $L$ se escribe $L - \varepsilon$ para algún $\varepsilon > 0$, las dos condiciones juntas dicen que $L$ es una cota superior de $A$ y que ningún número menor que $L$ lo es. Por tanto, $L$ es la **menor cota superior**, es decir, $L = \sup A$. Para el ínfimo se procede del mismo modo con las cotas inferiores.
:::
::::

:::osservazione
Para los conjuntos no acotados, la caracterización toma otra forma. La igualdad $\sup A = +\infty$ equivale a decir que para todo $M > 0$ existe $a \in A$ con $a > M$. En particular, $\sup \mathbb{N} = +\infty$, porque para cada real $M$ existe un natural mayor que $M$. Esta es la **propiedad arquimediana** de los reales. Se usa en muchas comprobaciones con $\varepsilon$ para garantizar que existe un natural $n > \dfrac{1}{\varepsilon}$.
:::

:::esempio{titolo="Comprobación mediante la caracterización"}
Consideremos $A = \left\{ \dfrac{1}{n} : n \in \mathbb{N},\ n \geq 1 \right\}$. El supremo es $1$. En efecto, $1 \in A$ y $\dfrac{1}{n} \leq 1$ para todo $n \geq 1$, de modo que $1$ es el máximo y coincide con el supremo. El ínfimo es $0$. Como $\dfrac{1}{n} > 0$ para todo $n$, el número $0$ es una cota inferior. Fijado $\varepsilon > 0$, la **propiedad arquimediana** garantiza que existe un natural $n > \dfrac{1}{\varepsilon}$. Para ese $n$ se cumple $\dfrac{1}{n} < \varepsilon$. Se verifican las dos condiciones, así que $\inf A = 0$. Como $0 \notin A$, el conjunto **no tiene mínimo**.
:::

## La completitud de R

:::teorema{#completezza titolo="Completitud de R"}
Todo subconjunto de $\mathbb{R}$ no vacío y acotado superiormente tiene **supremo** en $\mathbb{R}$. Todo subconjunto no vacío y acotado inferiormente tiene ínfimo. Esta propiedad se llama **completitud** y se adopta como axioma de los reales. Distingue $\mathbb{R}$ de $\mathbb{Q}$ y sirve para demostrar teoremas de existencia en análisis. Por ejemplo, la demostración del teorema de Bolzano, en el capítulo de límites y continuidad, construye el cero como supremo de un conjunto.
:::

:::osservazione
En $\mathbb{Q}$ no se cumple la completitud. Sea $A = \{x \in \mathbb{Q} : x \geq 0,\ x^2 < 2\}$. El conjunto no está vacío, pues $1 \in A$, y está acotado superiormente, pues de $x \geq 2$ se sigue $x^2 \geq 4 > 2$, así que $2$ es una cota superior. En $\mathbb{R}$ su supremo es $\sqrt{2}$, que no es racional. Si nos restringimos a los racionales, $A$ carece de supremo. Toda cota superior racional $L$ cumple $L > \sqrt{2}$. Si se diera $L < \sqrt{2}$, por la **densidad** de $\mathbb{Q}$ habría un racional $q$ con $L < q < \sqrt{2}$ que pertenecería a $A$. Ese racional es positivo, pues $q > L \geq 1$, ya que $L$ es una cota superior y $1 \in A$, y su cuadrado es menor que $2$. Esto contradice que $L$ sea una cota superior. La igualdad $L = \sqrt{2}$ queda excluida porque $\sqrt{2} \notin \mathbb{Q}$. De nuevo por densidad, existe un racional $q'$ con $\sqrt{2} < q' < L$. Entonces $q'$ es una cota superior de $A$ menor que $L$, ya que cada $x \in A$ cumple $x < \sqrt{2} < q'$. Así, ninguna cota superior racional es la menor de todas y, dentro de $\mathbb{Q}$, el conjunto $A$ **no tiene supremo**.
:::

## El principio de inducción

:::teorema{#induzione titolo="Principio de inducción"}
Sea $P(n)$ una proposición que depende de un natural $n$ y sea $n_0 \in \mathbb{N}$. Si se cumplen las dos condiciones
$$
\begin{cases}
P(n_0) \ \text{es verdadera} \\[4pt]
\text{para todo } n \geq n_0, \ \text{si } P(n) \ \text{es verdadera, entonces } P(n+1) \ \text{es verdadera}
\end{cases}
$$
entonces $P(n)$ es verdadera para todo $n \geq n_0$. La primera condición es el **caso base** y la segunda, el **paso inductivo**. En este último, la proposición $P(n)$ que se supone verdadera se llama **hipótesis de inducción**. El principio se adopta como propiedad de $\mathbb{N}$. Sirve para demostrar identidades, desigualdades y propiedades de divisibilidad que dependen de un índice natural. La demostración consta de dos partes, el caso base y el paso inductivo. Las primeras aplicaciones serán la suma de los primeros $n$ naturales y la desigualdad de Bernoulli.
:::

:::attenzione
El paso inductivo necesita un caso base. Para la proposición $P(n)$ «$n \geq n + 1$», el paso se cumple porque, al sumar $1$ a ambos miembros de $n \geq n + 1$, se obtiene $n + 1 \geq n + 2$. Sin embargo, el caso base es falso para cualquier elección de $n_0$. De hecho, ninguna $P(n)$ es verdadera.
:::

## La suma de los primeros n naturales

::::teorema{#somma-dei-primi-n titolo="Suma de los primeros n naturales"}
Para todo $n \geq 1$ se cumple
$$
1 + 2 + \cdots + n = \sum_{k=1}^{n} k = \frac{n(n+1)}{2} .
$$
Es el primer ejemplo de **demostración por inducción**. La fórmula vuelve a aparecer al calcular sumas y al estudiar series. Por ejemplo, la suma de los primeros $100$ naturales es $\dfrac{100 \cdot 101}{2} = 5050$.

:::dimostrazione
En el caso base ($n = 1$), el primer miembro vale $1$ y el segundo $\dfrac{1 \cdot 2}{2} = 1$, de modo que $P(1)$ es verdadera. Para el paso inductivo, supongamos que $P(n)$ es verdadera, es decir, que $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Entonces
$$
\sum_{k=1}^{n+1} k
= \sum_{k=1}^{n} k + (n+1)
= \frac{n(n+1)}{2} + (n+1)
= (n+1)\left( \frac{n}{2} + 1 \right)
= \frac{(n+1)(n+2)}{2} ,
$$
que es la fórmula con $n + 1$ en lugar de $n$. Así, $P(n)$ implica $P(n+1)$ y, por el **principio de inducción**, la fórmula es válida para todo $n \geq 1$.
:::
::::

## La desigualdad de Bernoulli

::::teorema{#bernoulli titolo="Desigualdad de Bernoulli"}
Para todo real $x \geq -1$ y todo $n \in \mathbb{N}$ se cumple
$$
(1 + x)^n \geq 1 + nx .
$$
Esta desigualdad da una cota inferior para una potencia mediante una expresión de primer grado en $n$. Si tomamos $x = 1$, obtenemos $2^n \geq 1 + n$ para todo $n$. Se usa al estudiar la sucesión geométrica y al construir el número $e$. Ambas aplicaciones se relacionan con el repaso de sucesiones del capítulo de series.

:::dimostrazione
Procedemos por **inducción** sobre $n$ con $x \geq -1$ fijo. En el caso base ($n = 0$), $(1 + x)^0 = 1$ y $1 + 0 \cdot x = 1$, así que se da la igualdad. Para el paso inductivo, supongamos $(1 + x)^n \geq 1 + nx$. Como $x \geq -1$, el factor $1 + x$ es **no negativo**. Al multiplicar ambos miembros de la hipótesis por $1 + x$, se conserva el sentido de la desigualdad.
$$
(1 + x)^{n+1}
= (1 + x)^n (1 + x)
\geq (1 + nx)(1 + x)
= 1 + (n+1)x + nx^2
\geq 1 + (n+1)x ,
$$
ya que $nx^2 \geq 0$. Por el **principio de inducción**, la desigualdad vale para todo $n$. La hipótesis $x \geq -1$ se utiliza en el paso inductivo para garantizar que al multiplicar por $1 + x$ no se invierte la desigualdad.
:::
::::

## El factorial

:::definizione{#fattoriale titolo="Factorial"}
Para $n \geq 1$, el **factorial** de $n$ es el producto de los naturales de $1$ a $n$.
$$
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1 .
$$
La **fórmula recursiva** $(n+1)! = (n+1) \cdot n!$ también vale para $n = 0$ si se adopta la convención $0! = 1$. Esa convención permite aplicar las fórmulas de los coeficientes binomiales en los extremos. Los primeros valores son $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$ y $5! = 120$. El factorial cuenta las formas de ordenar $n$ objetos distintos y crece muy deprisa. Por ejemplo, $10! = 3628800$. Para simplificar cocientes de factoriales se usa la fórmula recursiva, como en $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

## Los coeficientes binomiales

:::definizione{#coefficiente-binomiale titolo="Coeficiente binomial"}
Para $n, k \in \mathbb{N}$ con $0 \leq k \leq n$, se define
$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} .
$$
El coeficiente binomial **cuenta los subconjuntos** de $k$ elementos que se pueden formar con $n$ elementos. Por eso siempre es un número natural. En los cálculos conviene simplificar los factoriales antes de multiplicar.
$$
\binom{5}{2} = \frac{5!}{2!\,3!} = \frac{5 \cdot 4}{2} = 10 .
$$
:::

:::teorema{#proprieta-binomiali titolo="Propiedades de los coeficientes binomiales"}
Para $0 \leq k \leq n$ se cumplen las siguientes propiedades.
$$
\binom{n}{0} = \binom{n}{n} = 1, \qquad
\binom{n}{k} = \binom{n}{n-k}, \qquad
\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad (k \leq n - 1).
$$
Las dos primeras propiedades se deducen de la definición. En la segunda, al intercambiar $k$ y $n - k$, el denominador $k!\,(n-k)!$ queda igual. La tercera es la **identidad de Pascal** y se verifica reduciendo ambas fracciones al denominador común $(k+1)!\,(n-k)!$. Esta identidad genera el **triángulo de Pascal**. Cada coeficiente es la suma de los dos situados encima y la relación interviene en el paso inductivo de la demostración del binomio de Newton. Por ejemplo, $\dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10 = \dbinom{5}{2}$.
:::

## El binomio de Newton

:::teorema{#binomio-di-newton titolo="Fórmula del binomio de Newton"}
Para todo par de reales $a$ y $b$ y todo $n \in \mathbb{N}$, se cumple
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k}\, b^{\,k}
= a^n + n\,a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \cdots + n\,a\,b^{n-1} + b^n .
$$
Para $n = 2$ y $n = 3$, la fórmula da el cuadrado y el cubo de un binomio. La demostración procede por **inducción** sobre $n$. En el paso inductivo se multiplica el desarrollo de $(a+b)^n$ por $a + b$ y se agrupan los términos semejantes mediante la **identidad de Pascal**. La fórmula también permite hallar un término sin calcular los demás. El término que contiene $b^k$ es $\dbinom{n}{k} a^{\,n-k} b^{\,k}$.
:::

:::esempio{titolo="Desarrollo de una potencia"}
$$
(x + 2)^4
= \sum_{k=0}^{4} \binom{4}{k} x^{\,4-k}\, 2^{\,k}
= x^4 + 4 \cdot 2\,x^3 + 6 \cdot 4\,x^2 + 4 \cdot 8\,x + 16
= x^4 + 8x^3 + 24x^2 + 32x + 16 .
$$
Los coeficientes binomiales $1, 4, 6, 4, 1$ forman la fila $n = 4$ del **triángulo de Pascal**. Cada coeficiente se multiplica por la potencia correspondiente de $2$.
:::

:::osservazione
Al aplicar la fórmula con $a = b = 1$ se obtiene
$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n ,
$$
Por tanto, un conjunto de $n$ elementos tiene $2^n$ **subconjuntos** en total, ya que $\dbinom{n}{k}$ cuenta los de $k$ elementos. Si tomamos $a = 1$ y $b = -1$, obtenemos $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ para todo $n \geq 1$.
:::

## Funciones, dominio e imagen

:::definizione{#funzione titolo="Función, dominio, codominio e imagen"}
Una función $f : A \to B$ asigna a cada elemento $x \in A$ uno y solo un elemento $f(x) \in B$. El conjunto $A$ es el **dominio** y $B$ es el **codominio**. La **imagen** es el conjunto de los valores que toma la función.
$$
f(A) = \{ y \in B : y = f(x) \ \text{para algún}\ x \in A \} \subseteq B .
$$
La **gráfica** de $f$ es el conjunto de los puntos $(x, f(x))$ del plano al variar $x \in A$. Como a cada $x$ le corresponde un único valor, toda recta vertical $x = c$ con $c \in A$ corta la gráfica en exactamente un punto. En este curso, $A$ y $B$ son subconjuntos de $\mathbb{R}$. Los límites, las derivadas y las integrales se definen para funciones de este tipo. De ahí que el dominio, la imagen y la gráfica sean el punto de partida de los capítulos siguientes.
:::

:::esempio{titolo="Dominio e imagen de x²"}
Sea $f(x) = x^2$ con dominio $\mathbb{R}$. Todo valor de la función cumple $x^2 \geq 0$. Recíprocamente, se alcanza cada $y \geq 0$ porque $f(\sqrt{y}) = y$. Por tanto, la imagen es $[0, +\infty)$. La gráfica es una **parábola** con vértice en el origen.

::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="$y = x^2$ tiene dominio $\mathbb{R}$ e imagen $[0, +\infty)$"}

:::

## Inyectividad, función inversa y composición

:::definizione{#iniettiva-suriettiva titolo="Función inyectiva, sobreyectiva y biyectiva"}
La función $f : A \to B$ se clasifica así.

- Es **inyectiva** si elementos distintos tienen imágenes distintas, es decir, si de $f(x_1) = f(x_2)$ se deduce $x_1 = x_2$.
- Es **sobreyectiva** si la imagen coincide con el codominio, es decir, si cada $y \in B$ es de la forma $f(x)$ para algún $x \in A$.
- Es **biyectiva** si es inyectiva y sobreyectiva, es decir, si cada $y \in B$ proviene de uno y solo un $x \in A$.

En la gráfica, la inyectividad se comprueba con **rectas horizontales**. La función $f$ es inyectiva si cada recta $y = c$ corta la gráfica a lo sumo en un punto. La función $f(x) = x^2$ en $\mathbb{R}$ toma el mismo valor en $1$ y en $-1$. Por eso, en $\mathbb{R}$ la recta $y = 1$ corta la gráfica en dos puntos. La restricción a $[0, +\infty)$ sí es inyectiva. La inyectividad permite definir la **función inversa** sobre la imagen.

::grafico{f="x^2;1" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="-1,1,pieno;1,1,pieno" titolo="La recta discontinua $y = 1$ corta la parábola $y = x^2$ en dos puntos de abscisas $-1$ y $1$. En $\mathbb{R}$, la función $x^2$ no es inyectiva"}

::grafico{f="x^2+0*sqrt(x);1" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="1,1,pieno" titolo="Restringida a $[0, +\infty)$, la función $x^2$ es inyectiva. La recta discontinua $y = 1$ corta la gráfica solo en $(1, 1)$"}

:::

:::definizione{#funzione-inversa titolo="Función inversa"}
Si $f : A \to B$ es biyectiva, para cada $y \in B$ existe un único $x \in A$ con $f(x) = y$. La **función inversa** $f^{-1} : B \to A$ asigna a $y$ ese $x$. Se cumplen las siguientes igualdades.
$$
f^{-1}(f(x)) = x \ \text{para todo}\ x \in A, \qquad f(f^{-1}(y)) = y \ \text{para todo}\ y \in B .
$$
El punto $(a, b)$ pertenece a la gráfica de $f$ si y solo si $(b, a)$ pertenece a la de $f^{-1}$. Por tanto, la gráfica de $f^{-1}$ es la reflexión de la gráfica de $f$ respecto de la recta $y = x$. Si $f$ es inyectiva y el codominio es mayor que la imagen, se **restringe el codominio** a la imagen y se invierte la función resultante. Así se definen las raíces, el logaritmo y las funciones trigonométricas inversas de este capítulo.
:::

:::esempio{titolo="Inversa de una función afín"}
Sea $f(x) = 2x - 3$, de $\mathbb{R}$ en $\mathbb{R}$. La ecuación $y = 2x - 3$ tiene una única solución $x = \dfrac{y + 3}{2}$ para todo $y$. Por tanto, $f$ es **biyectiva** y $f^{-1}(y) = \dfrac{y + 3}{2}$. Se comprueba con $f^{-1}(f(x)) = \dfrac{(2x - 3) + 3}{2} = x$.

::grafico{f="2*x-3;(x+3)/2;x" xmin=-5 xmax=6 ymin=-5 ymax=6 uguale=1 punti="0,-3,pieno,P;-3,0,pieno,P′" titolo="$y = 2x - 3$ y su inversa $y = \dfrac{x + 3}{2}$, en línea discontinua, son simétricas respecto de la recta roja $y = x$. Los puntos $P = (0, -3)$ y $P' = (-3, 0)$ tienen las coordenadas intercambiadas"}

:::

:::definizione{#composizione titolo="Función compuesta"}
Dadas $f : A \to \mathbb{R}$ y $g : B \to \mathbb{R}$, la **función compuesta** $g \circ f$ se define por $(g \circ f)(x) = g(f(x))$, con dominio
$$
\{ x \in A : f(x) \in B \} .
$$
La composición permite descomponer una función en **funciones elementales aplicadas sucesivamente**. Por ejemplo, $h(x) = \sqrt{x^2 + 1}$ es la composición de $f(x) = x^2 + 1$ con $g(y) = \sqrt{y}$. Esto facilita calcular el dominio natural y, en el capítulo de derivadas, aplicar la regla de la cadena.
:::

:::attenzione
La composición depende del **orden**. Con $f(x) = x + 1$ y $g(x) = x^2$, tenemos $(g \circ f)(x) = (x + 1)^2$ y $(f \circ g)(x) = x^2 + 1$. En $x = 1$, los valores respectivos son $4$ y $2$, por lo que $g \circ f \neq f \circ g$.
:::

## Simetría, periodicidad, monotonía y acotación

:::definizione{#pari-dispari titolo="Función par y función impar"}
Sea $A$ simétrico respecto del origen, es decir, $-x \in A$ para todo $x \in A$. Clasificamos $f : A \to \mathbb{R}$ así.

- Es **par** si $f(-x) = f(x)$ para todo $x \in A$. Su gráfica es simétrica respecto del eje $y$.
- Es **impar** si $f(-x) = -f(x)$ para todo $x \in A$. Su gráfica es simétrica respecto del origen.

Son pares $x^2$, $x^4$, $|x|$ y $\cos x$. Son impares $x$, $x^3$, $\sin x$ y $\tan x$. Gracias a la simetría basta con estudiar $f$ para $x \geq 0$ y reflejar la gráfica.

::grafico{f="x^2;x^3" xmin=-2.5 xmax=2.5 ymin=-4 ymax=5 punti="-1.5,2.25;1.5,2.25;-1.5,-3.375;1.5,3.375" segmenti="-1.5,2.25,1.5,2.25;-1.5,-3.375,1.5,3.375" titolo="$y = x^2$ es par y su gráfica es simétrica respecto del eje $y$. $y = x^3$, en línea discontinua, es impar y su gráfica es simétrica respecto del origen"}

:::

:::definizione{#periodica titolo="Función periódica"}
$f$ es **periódica** de período $T > 0$ si para cada $x$ del dominio también $x + T$ pertenece al dominio y se cumple $f(x + T) = f(x)$. El menor período positivo, si existe, es el **período fundamental**. $\sin x$ y $\cos x$ tienen período fundamental $2\pi$. El de $\tan x$ es $\pi$. La gráfica se repite al trasladarla horizontalmente $T$, así que basta con estudiar la función en un intervalo de longitud $T$. Cuando una ecuación trigonométrica periódica tiene solución, tiene **infinitas soluciones**, que se expresan mediante un entero $k$.
:::

:::definizione{#monotona titolo="Función monótona"}
$f$ es **creciente** en un subconjunto $I$ del dominio si de $x_1 < x_2$ se deduce $f(x_1) \leq f(x_2)$, y **estrictamente creciente** si se deduce $f(x_1) < f(x_2)$. Las funciones decrecientes y estrictamente decrecientes se definen con las desigualdades opuestas. Una función estrictamente monótona es **inyectiva** porque de $x_1 < x_2$ se sigue $f(x_1) < f(x_2)$ o $f(x_1) > f(x_2)$, según el sentido de la monotonía, y en ambos casos $f(x_1) \neq f(x_2)$. Por tanto, es invertible sobre su imagen y su inversa es estrictamente monótona en el mismo sentido. Al aplicar una función estrictamente creciente a ambos miembros de una desigualdad, se conserva su sentido. Si la función es estrictamente decreciente, el sentido se invierte. Esto permite resolver las inecuaciones exponenciales y logarítmicas del capítulo.
:::

:::definizione{#limitata titolo="Función acotada"}
$f$ está **acotada superiormente** si existe $M \in \mathbb{R}$ tal que $f(x) \leq M$ para todo $x$ del dominio. Está **acotada inferiormente** si existe $m \in \mathbb{R}$ tal que $f(x) \geq m$. Es **acotada** si se cumplen ambas condiciones, es decir, si $|f(x)| \leq C$ para alguna constante $C$. $\sin x$ y $\cos x$ están acotadas y toman valores en $[-1, 1]$. $x^2$ está acotada inferiormente, pero no superiormente. La acotación se comprueba en la imagen y vuelve a aparecer en los límites del producto de una función acotada por una que tiende a cero y en el teorema de Weierstrass.
:::

## Transformaciones de la gráfica

:::teorema{#trasformazioni-del-grafico titolo="Transformaciones de la gráfica"}
A partir de la gráfica de $f$, para $k > 0$ y $a > 1$, se obtienen las siguientes transformaciones.

- $f(x) + k$ traslada la gráfica $k$ hacia arriba. $f(x) - k$ la traslada hacia abajo.
- $f(x - k)$ traslada la gráfica $k$ hacia la derecha. $f(x + k)$ la traslada hacia la izquierda.
- $a\,f(x)$ estira la gráfica verticalmente por un factor $a$. $\dfrac{f(x)}{a}$ la comprime verticalmente.
- $f(a x)$ comprime la gráfica horizontalmente por un factor $a$. $f\!\left(\dfrac{x}{a}\right)$ la estira horizontalmente.
- $-f(x)$ refleja la gráfica respecto del eje $x$. $f(-x)$ la refleja respecto del eje $y$.
- En $|f(x)|$, el tramo con $f(x) \geq 0$ queda en su sitio y el tramo con $f(x) < 0$ se refleja hacia arriba respecto del eje $x$.
- En $f(|x|)$, el tramo con $x \geq 0$ queda en su sitio y se refleja también a la izquierda del eje $y$. La función resultante es **par**.

Las reglas se deducen de la **definición de gráfica**. Por ejemplo, $(x_0, y_0)$ pertenece a la gráfica de $f$ si y solo si $(x_0 + k, y_0)$ pertenece a la gráfica de $f(x - k)$. Estas reglas permiten dibujar muchas funciones a partir de **gráficas elementales** sin realizar un estudio completo.

::grafico{f="x^2;(x-2)^2;x^2+1" xmin=-3 xmax=5 ymin=-1 ymax=7 titolo="A partir de $y = x^2$, la gráfica discontinua $y = (x - 2)^2$ se desplaza $2$ a la derecha y la gráfica roja $y = x^2 + 1$ se desplaza $1$ hacia arriba"}

::grafico{f="exp(x);exp(-x);-exp(x)" xmin=-3 xmax=3 ymin=-5 ymax=5 titolo="A partir de $y = e^x$, la gráfica discontinua $y = e^{-x}$ es la reflexión respecto del eje $y$ y la gráfica roja $y = -e^x$ es la reflexión respecto del eje $x$"}

::grafico{f="x^2-2*abs(x);x^2-2*x" xmin=-3.5 xmax=3.5 ymin=-2 ymax=5 titolo="$y = x^2 - 2|x|$ se obtiene a partir de $y = x^2 - 2x$, en línea discontinua, conservando el tramo con $x \geq 0$ y reflejándolo respecto del eje $y$"}

:::

:::esempio{titolo="De la gráfica de x² a la de |x² − 1|"}
Para pasar de $x^2$ a $x^2 - 1$, se aplica una **traslación vertical** de $1$ hacia abajo. Como $x^2 - 1 < 0$ para $-1 < x < 1$, el **valor absoluto** refleja por encima del eje $x$ el arco comprendido entre $-1$ y $1$. El resto de la gráfica se conserva.

::grafico{f="abs(x^2-1)" xmin=-3 xmax=3 ymin=-1 ymax=4 titolo="En $y = |x^2 - 1|$, el arco con $-1 < x < 1$ se refleja por encima del eje $x$"}

:::

## Potencias y raíces

:::definizione{#potenze titolo="Potencias con exponente natural y entero negativo"}
Para $n \in \mathbb{N}$, $n \geq 1$, la potencia $f(x) = x^n$ tiene dominio $\mathbb{R}$.

- Si $n$ es par, la función es **par**, su imagen es $[0, +\infty)$ y es estrictamente decreciente en $(-\infty, 0]$ y estrictamente creciente en $[0, +\infty)$.
- Si $n$ es impar, la función es **impar**, su imagen es $\mathbb{R}$ y es estrictamente creciente en $\mathbb{R}$.

Para un exponente entero negativo, se define $x^{-n} = \dfrac{1}{x^n}$ con dominio $\mathbb{R} \setminus \{0\}$. El ejemplo básico es $x^{-1} = \dfrac{1}{x}$, una función impar y estrictamente decreciente en $(-\infty, 0)$ y en $(0, +\infty)$, con imagen $\mathbb{R} \setminus \{0\}$. Los polinomios y las funciones racionales se construyen con sumas y cocientes de potencias, por lo que estas gráficas aparecen en todo el curso.

::grafico{f="x^3" xmin=-2.5 xmax=2.5 ymin=-6 ymax=6 titolo="$y = x^3$ es impar y estrictamente creciente, con imagen $\mathbb{R}$"}

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0;y=0" titolo="La gráfica de $y = \dfrac{1}{x}$ se acerca a las rectas $x = 0$ y $y = 0$"}

:::

:::definizione{#radici titolo="Raíces y potencias con exponente racional"}
Para $n$ par, la potencia $x^n$ restringida a $[0, +\infty)$ es estrictamente creciente y tiene imagen $[0, +\infty)$. Por tanto, es invertible. Su inversa es la **raíz de índice** $n$, $\sqrt[n]{x} : [0, +\infty) \to [0, +\infty)$, también estrictamente creciente. Para $n$ impar, la potencia $x^n$ es estrictamente creciente en todo $\mathbb{R}$. Así, la raíz de índice $n$ se define en $\mathbb{R}$. Por ejemplo, $\sqrt[3]{-8} = -2$. Para $x > 0$, $m \in \mathbb{Z}$ y $n \geq 1$, se define
$$
x^{\frac{m}{n}} = \sqrt[n]{x^m} ,
$$
de acuerdo con las propiedades de las potencias. La gráfica de $\sqrt{x}$ es la reflexión respecto de la recta $y = x$ de la rama con $x \geq 0$ de la parábola $y = x^2$, pues las dos funciones son inversas entre sí.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="$y = \sqrt{x}$ tiene dominio e imagen $[0, +\infty)$"}

:::

:::attenzione
Con índice par, la raíz de una potencia devuelve el **valor absoluto** de la base, $\sqrt{x^2} = |x|$. Para $x = -3$, se obtiene $\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|$, mientras que la base vale $-3$.
:::

## Exponencial y logaritmo

:::definizione{#esponenziale titolo="Función exponencial"}
Para $a > 0$, $a \neq 1$, la **función exponencial** $f(x) = a^x$ tiene dominio $\mathbb{R}$ e imagen $(0, +\infty)$. En particular, $a^x > 0$ para todo $x$. Se cumplen las propiedades de las potencias.
$$
a^{x+y} = a^x\, a^y, \qquad a^{x-y} = \frac{a^x}{a^y}, \qquad (a^x)^y = a^{x y}, \qquad a^0 = 1 .
$$
Si $a > 1$, la función es **estrictamente creciente**. Si $0 < a < 1$, es **estrictamente decreciente**. Como $a^x = \left(\dfrac{1}{a}\right)^{-x}$, las gráficas de bases recíprocas son simétricas respecto del eje $y$. La base más usada en análisis es el número $e = 2{,}71828\ldots$. El capítulo de límites estudia el comportamiento de la exponencial en los extremos del dominio y los límites notables con $e$.

::grafico{f="exp(x)" xmin=-3 xmax=3 ymin=-1 ymax=8 asintoti="y=0" titolo="$y = e^x$ es estrictamente creciente y tiene imagen $(0, +\infty)$"}

:::

:::definizione{#logaritmo titolo="Logaritmo y cambio de base"}
Para $a > 0$, $a \neq 1$, la exponencial $a^x$ es estrictamente monótona y tiene imagen $(0, +\infty)$. Por tanto, es invertible. Su inversa es el **logaritmo** en base $a$.
$$
y = \log_a x \iff a^y = x \qquad (x > 0) .
$$
El logaritmo tiene dominio $(0, +\infty)$ e imagen $\mathbb{R}$. Es estrictamente creciente si $a > 1$ y estrictamente decreciente si $0 < a < 1$. De las propiedades de la exponencial se deducen las siguientes igualdades para $x, y > 0$ y $\alpha \in \mathbb{R}$.
$$
\log_a (x y) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \qquad \log_a x^{\alpha} = \alpha \log_a x ,
$$
Aquí $\log_a 1 = 0$ y $\log_a a = 1$. Para $b > 0$, $b \neq 1$, el **cambio de base** viene dado por
$$
\log_a x = \frac{\log_b x}{\log_b a} ,
$$
y se obtiene al aplicar $\log_b$ a la identidad $a^{\log_a x} = x$, ya que $\log_b\!\left(a^{\log_a x}\right) = \log_a x \cdot \log_b a$. El logaritmo en base $e$ se denota por $\ln x$. La fórmula de cambio de base permite expresar cualquier logaritmo en términos de este. La gráfica de $\log_a x$ es la reflexión de la de $a^x$ respecto de la recta $y = x$.

::grafico{f="log(x)" xmin=-1 xmax=8 ymin=-3 ymax=3 asintoti="x=0" titolo="$y = \ln x$ tiene dominio $(0, +\infty)$ e imagen $\mathbb{R}$"}

:::

:::attenzione
La identidad $\log_a x^{\alpha} = \alpha \log_a x$ exige $x > 0$. Con exponente par y base negativa, la identidad correcta usa el **valor absoluto**, $\log_a x^2 = 2 \log_a |x|$ para $x \neq 0$. Con $x = -2$ se obtiene $\log_2 x^2 = \log_2 4 = 2$, mientras que $\log_2(-2)$ no está definido.
:::

## Funciones trigonométricas y sus inversas

:::definizione{#trigonometriche titolo="Seno, coseno y tangente"}
En la circunferencia con centro en el origen y radio $1$, giramos un ángulo $x$ en sentido antihorario, medido en radianes a partir de $(1, 0)$. El punto obtenido tiene coordenadas $(\cos x, \sin x)$. Las dos funciones tienen dominio $\mathbb{R}$, imagen $[-1, 1]$ y período fundamental $2\pi$. $\sin x$ es **impar** y $\cos x$ es **par**. La **tangente** se define por
$$
\tan x = \frac{\sin x}{\cos x} ,
$$
con dominio $x \neq \dfrac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$), imagen $\mathbb{R}$ y período fundamental $\pi$. Es impar. Estos son sus valores notables y los del seno y el coseno.
$$
\begin{array}{c|ccccc}
x & 0 & \dfrac{\pi}{6} & \dfrac{\pi}{4} & \dfrac{\pi}{3} & \dfrac{\pi}{2} \\[8pt]
\hline
\sin x & 0 & \dfrac{1}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{\sqrt{3}}{2} & 1 \\[10pt]
\cos x & 1 & \dfrac{\sqrt{3}}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{1}{2} & 0 \\[10pt]
\tan x & 0 & \dfrac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{no definida}
\end{array}
$$
Estos valores, junto con las simetrías y la periodicidad, permiten escribir las soluciones de las ecuaciones trigonométricas de los ejercicios.

::grafico{f="sin(x)" xmin=-7 xmax=7 ymin=-1.5 ymax=1.5 titolo="$y = \sin x$ es periódica, con período $2\pi$ e imagen $[-1, 1]$"}

:::

:::teorema{#identita-trigonometriche titolo="Identidades principales"}
Para todo $x, y \in \mathbb{R}$, se cumple
$$
\sin^2 x + \cos^2 x = 1 ,
$$
que es el **teorema de Pitágoras** aplicado a la circunferencia unitaria. Las **fórmulas de adición** son
$$
\sin(x + y) = \sin x \cos y + \cos x \sin y, \qquad
\cos(x + y) = \cos x \cos y - \sin x \sin y .
$$
Si $y = x$, obtenemos las **fórmulas del ángulo doble**.
$$
\sin 2x = 2 \sin x \cos x, \qquad
\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x .
$$
La identidad fundamental y las fórmulas del ángulo doble permiten reducir muchas ecuaciones trigonométricas a una sola función incógnita, como en los ejercicios resueltos de este tema.
:::

:::definizione{#inverse-trigonometriche titolo="Arcoseno, arcocoseno y arcotangente"}
Las funciones trigonométricas son periódicas. Para invertirlas se **restringen** a un intervalo en el que sean estrictamente monótonas.

- $\sin x$, restringido a $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, es estrictamente creciente y tiene imagen $[-1, 1]$. Su inversa es $\arcsin : [-1, 1] \to \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, estrictamente creciente e impar.
- $\cos x$, restringido a $[0, \pi]$, es estrictamente decreciente y tiene imagen $[-1, 1]$. Su inversa es $\arccos : [-1, 1] \to [0, \pi]$, estrictamente decreciente.
- $\tan x$, restringida a $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, es estrictamente creciente y tiene imagen $\mathbb{R}$. Su inversa es $\arctan : \mathbb{R} \to \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, estrictamente creciente e impar.

Por definición, $\arcsin m$ es el **único** ángulo de $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ cuyo seno vale $m$. Estos ángulos permiten expresar las soluciones de las ecuaciones trigonométricas. La arcotangente, acotada y definida en todo $\mathbb{R}$, aparece en los ejemplos de límites y derivadas.

::grafico{f="atan(x)" xmin=-6 xmax=6 ymin=-2 ymax=2 asintoti="y=1.5708;y=-1.5708" titolo="La gráfica de $y = \arctan x$ se acerca a las rectas $y = \dfrac{\pi}{2}$ y $y = -\dfrac{\pi}{2}$"}

:::

:::definizione{#iperboliche titolo="Funciones hiperbólicas"}
El seno y el coseno hiperbólicos se definen a partir de la exponencial.
$$
\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}, \qquad \tanh x = \frac{\sinh x}{\cosh x} .
$$
Las tres funciones tienen dominio $\mathbb{R}$. $\sinh x$ es **impar**, estrictamente creciente y tiene imagen $\mathbb{R}$. $\cosh x$ es **par**, tiene imagen $[1, +\infty)$ y su mínimo es $\cosh 0 = 1$. Se cumple la siguiente identidad fundamental.
$$
\cosh^2 x - \sinh^2 x = 1 ,
$$
que se verifica al desarrollar los cuadrados, $\cosh^2 x - \sinh^2 x = \dfrac{e^{2x} + 2 + e^{-2x}}{4} - \dfrac{e^{2x} - 2 + e^{-2x}}{4} = 1$. El punto $(\cosh t, \sinh t)$ pertenece por tanto a la **hipérbola** $x^2 - y^2 = 1$, de donde viene el nombre. Las funciones hiperbólicas aparecen en las primitivas de algunas funciones irracionales, en el capítulo de integrales.

::grafico{f="(exp(x)+exp(-x))/2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="$y = \cosh x$ es par y tiene imagen $[1, +\infty)$"}

:::

## Dominio natural

:::definizione{#dominio-naturale titolo="Dominio natural"}
Si una función se da mediante una sola expresión, su **dominio natural** es el conjunto de reales para los que están definidas todas sus operaciones. Estas son las condiciones que se imponen.

- El denominador debe ser distinto de $0$.
- El radicando de una raíz de índice par debe ser mayor o igual que $0$.
- El argumento de un logaritmo debe ser mayor que $0$.
- El argumento de la tangente debe ser distinto de $\dfrac{\pi}{2} + k\pi$.
- El argumento de $\arcsin$ y el de $\arccos$ deben pertenecer a $[-1, 1]$.
- En $f(x)^{g(x)}$, la base $f(x)$ debe ser mayor que $0$.

Todas las condiciones han de cumplirse a la vez. Se reúnen en un **sistema** y el dominio es su conjunto de soluciones. Hallar el dominio natural es el **primer paso** al estudiar una función o calcular un límite.
:::

:::esempio{titolo="Dominio con un logaritmo y una raíz"}
Consideremos $f(x) = \dfrac{\ln(x - 1)}{\sqrt{4 - x^2}}$. El argumento del logaritmo debe ser positivo. Como la raíz está en el denominador, el radicando debe ser **estrictamente mayor** que $0$.
$$
\begin{cases}
x - 1 > 0 \\[4pt]
4 - x^2 > 0
\end{cases}
\qquad\text{es decir}\qquad
\begin{cases}
x > 1 \\[4pt]
-2 < x < 2
\end{cases}
$$
de modo que $D = (1, 2)$.
:::

## Ecuaciones e inecuaciones elementales

:::teorema{#equazioni-esponenziali-logaritmiche titolo="Ecuaciones e inecuaciones exponenciales y logarítmicas"}
Para $a > 0$, $a \neq 1$, la ecuación $a^x = b$ tiene solución si y solo si $b > 0$, porque la imagen de la exponencial es $(0, +\infty)$. En ese caso, la **única solución** es $x = \log_a b$, por la **inyectividad**. Para resolver inecuaciones se usa la **monotonía estricta**.

- Si $a > 1$, entonces $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$.
- Si $0 < a < 1$, entonces $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$.

En las inecuaciones logarítmicas, además de comparar los argumentos, hay que imponer las **condiciones de existencia**. Se reúnen en un **sistema**. Para $a > 1$, tenemos
$$
\log_a f(x) > \log_a g(x)
\iff
\begin{cases}
f(x) > g(x) \\[4pt]
g(x) > 0
\end{cases}
$$
donde la condición $f(x) > 0$ se deduce de las otras dos. Para $0 < a < 1$, se **invierte** el sentido de la comparación entre los argumentos. En este caso, basta imponer la condición de existencia sobre $f$.
$$
\log_a f(x) > \log_a g(x)
\iff
\begin{cases}
f(x) < g(x) \\[4pt]
f(x) > 0
\end{cases}
$$
Aquí $g(x) > 0$ se deduce de las otras dos condiciones. Estos criterios reducen las inecuaciones exponenciales y logarítmicas elementales a inecuaciones algebraicas.
:::

:::esempio
Consideremos $2^x \geq 8$. Como $8 = 2^3$ y la base $2$ es mayor que $1$, la inecuación equivale a $x \geq 3$. Con una base menor que $1$, el sentido se invierte. Así, de $\left(\dfrac{1}{2}\right)^{x} \geq 8 = \left(\dfrac{1}{2}\right)^{-3}$, al ser la base menor que $1$, se deduce $x \leq -3$.
:::

:::teorema{#equazioni-trigonometriche titolo="Ecuaciones trigonométricas elementales"}
Las ecuaciones $\sin x = m$ y $\cos x = m$ solo tienen solución para $m \in [-1, 1]$, ya que la imagen del seno y del coseno es $[-1, 1]$. En ese caso, con $k \in \mathbb{Z}$, se obtienen las siguientes soluciones.

- Para $\sin x = m$, las soluciones son $x = \arcsin m + 2k\pi$ o $x = \pi - \arcsin m + 2k\pi$.
- Para $\cos x = m$, las soluciones son $x = \arccos m + 2k\pi$ o $x = -\arccos m + 2k\pi$.
- Para $\tan x = m$ y cualquier $m \in \mathbb{R}$, las soluciones son $x = \arctan m + k\pi$.

Las fórmulas se deducen de las **simetrías** y la **periodicidad**. En la circunferencia unitaria, los puntos de ordenada $m$ tienen ángulos $\arcsin m$ y $\pi - \arcsin m$, que pueden coincidir módulo una vuelta. Los puntos de abscisa $m$ tienen ángulos **opuestos**. Las identidades principales permiten reducir ecuaciones más generales a estas formas, como en los ejercicios resueltos.
:::

:::esempio
Consideremos $\cos x = \dfrac{1}{2}$. Como $\arccos \dfrac{1}{2} = \dfrac{\pi}{3}$, las soluciones son $x = \dfrac{\pi}{3} + 2k\pi$ o $x = -\dfrac{\pi}{3} + 2k\pi$, con $k \in \mathbb{Z}$.
:::
