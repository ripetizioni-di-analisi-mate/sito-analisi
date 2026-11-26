---
titolo: Powers and roots
sommario: The properties of powers and why they hold, zero and negative exponents, scientific notation, square and cube roots and their properties, rationalization, irrational numbers and, finally, real numbers.
---

## Powers

:::definizione{#potenza titolo="Power"}
A power is a short way to write a product of equal factors. If $a$ is a number and $n$ is a natural number greater than $1$, the **power** $a^n$ is the product of $n$ factors equal to $a$.
$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ factors}} .
$$
The number $a$ is called the **base**, and $n$ is called the **exponent**. The exponent tells how many times the base appears as a factor. We also define $a^1 = a$. For example,
$$
2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32 ,
\qquad
10^3 = 10 \cdot 10 \cdot 10 = 1000 .
$$
A power with exponent $2$ is read “squared,” and one with exponent $3$ is read “cubed.” For example, the power in $7^2 = 49$ is read “seven squared.” The definition was introduced in the chapter on natural numbers. Here we study rules for calculating with powers without writing out every factor.
:::

:::esempio{titolo="Powers with negative or fractional bases"}
The base can be an integer or a fraction. By the rule of signs introduced in the chapter on integers, a power with a negative base is positive if the exponent is even and negative if the exponent is odd.
$$
(-3)^2 = (-3) \cdot (-3) = 9 ,
\qquad
(-2)^3 = (-2) \cdot (-2) \cdot (-2) = -8 .
$$
To multiply fractions, multiply their numerators together and their denominators together. Therefore, to raise a fraction to a power, raise its numerator and its denominator to that power.
$$
\left( \frac{2}{3} \right)^2 = \frac{2}{3} \cdot \frac{2}{3} = \frac{2 \cdot 2}{3 \cdot 3} = \frac{4}{9} .
$$
:::

## Properties of powers

::::teorema{#prodotto-stessa-base titolo="Product of powers with the same base"}
The product of two powers with the same base is a power with that base and an exponent equal to the *sum* of the exponents. For any number $a$ and any nonzero natural numbers $m$ and $n$, we have
$$
a^m \cdot a^n = a^{m+n} .
$$
For example, $2^3 \cdot 2^4 = 2^{3+4} = 2^7 = 128$. The rule gives the product without multiplying the factors one by one. Even a factor with no exponent written can be treated as a power because $5 = 5^1$, so $5^2 \cdot 5 = 5^{2+1} = 5^3 = 125$.

:::dimostrazione
The idea is to count the factors. The power $2^3$ contains three factors equal to $2$ and the power $2^4$ contains four, so
$$
2^3 \cdot 2^4 = (2 \cdot 2 \cdot 2) \cdot (2 \cdot 2 \cdot 2 \cdot 2) = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 .
$$
By the associative property of multiplication, the two products can be written as a single product. This product therefore contains $3 + 4 = 7$ factors equal to $2$ and equals $2^7$. With base $a$ and exponents $m$ and $n$ the reasoning is the same because the total number of factors equal to $a$ is $m + n$.
:::
::::

::::teorema{#quoziente-stessa-base titolo="Quotient of powers with the same base"}
The quotient of two powers with the same base is a power with that base and an exponent equal to the *difference* of the exponents. For any number $a \neq 0$ and any nonzero natural numbers $m$ and $n$ with $m > n$, we have
$$
\frac{a^m}{a^n} = a^{m-n} .
$$
For example, $\dfrac{3^5}{3^2} = 3^{5-2} = 3^3 = 27$. The condition $a \neq 0$ is necessary because the denominator of a fraction must be nonzero. The cases $m = n$ and $m < n$ lead to zero and negative exponents, respectively.

:::dimostrazione
The idea is to write out the factors and cancel. Each factor $3$ in the denominator cancels with a factor $3$ in the numerator because $\dfrac{3}{3} = 1$.
$$
\frac{3^5}{3^2} = \frac{3 \cdot 3 \cdot 3 \cdot 3 \cdot 3}{3 \cdot 3} = 3 \cdot 3 \cdot 3 = 3^3 .
$$
The numerator has $5 - 2 = 3$ factors left, so the quotient is $3^3$. With base $a$ and exponents $m > n$, cancel $n$ factors in the numerator with the $n$ factors in the denominator, leaving $m - n$ factors in the numerator.
:::
::::

::::teorema{#potenza-di-potenza titolo="Power of a power"}
Raising a power to another power gives a power with the same base and an exponent equal to the *product* of the exponents. For any number $a$ and any nonzero natural numbers $m$ and $n$, we have
$$
\left( a^m \right)^n = a^{m \cdot n} .
$$
For example, $\left( 2^3 \right)^2 = 2^{3 \cdot 2} = 2^6 = 64$. This rule can also be used to write a power with a smaller base. Since $8 = 2^3$, we have $8^4 = \left( 2^3 \right)^4 = 2^{12}$.

:::dimostrazione
Squaring $2^3$ means multiplying $2^3$ by itself. By the product rule for powers with the same base, we have
$$
\left( 2^3 \right)^2 = 2^3 \cdot 2^3 = 2^{3+3} = 2^6 .
$$
The exponent $3$ appears $2$ times in the sum, so the sum is $3 \cdot 2 = 6$. In general, $\left( a^m \right)^n$ is the product of $n$ factors equal to $a^m$, and the sum of $n$ exponents equal to $m$ is $m \cdot n$.
:::
::::

::::teorema{#potenza-prodotto-quoziente titolo="Power of a product and of a quotient"}
A power of a product equals the product of the powers of its factors, and a power of a quotient equals the quotient of the powers. For any two numbers $a$ and $b$ and any nonzero natural number $n$, we have
$$
(a \cdot b)^n = a^n \cdot b^n ,
\qquad
\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n} \quad \text{with } b \neq 0 .
$$
Read from right to left, these equalities say that two powers with the *same exponent* can be multiplied or divided by multiplying or dividing their bases. For example,
$$
2^3 \cdot 5^3 = (2 \cdot 5)^3 = 10^3 = 1000 ,
\qquad
\frac{15^2}{5^2} = \left( \frac{15}{5} \right)^2 = 3^2 = 9 .
$$

:::dimostrazione
For a power of a product, write out and rearrange the factors. By the commutative and associative properties of multiplication, we have
$$
\begin{aligned}
(2 \cdot 5)^3
&= (2 \cdot 5) \cdot (2 \cdot 5) \cdot (2 \cdot 5) \\[6pt]
&= (2 \cdot 2 \cdot 2) \cdot (5 \cdot 5 \cdot 5) \\[6pt]
&= 2^3 \cdot 5^3 .
\end{aligned}
$$
For a power of a quotient, multiply the fractions by multiplying their numerators together and their denominators together.
$$
\left( \frac{2}{5} \right)^3 = \frac{2}{5} \cdot \frac{2}{5} \cdot \frac{2}{5} = \frac{2 \cdot 2 \cdot 2}{5 \cdot 5 \cdot 5} = \frac{2^3}{5^3} .
$$
For any exponent $n$, the factors equal to $a$ and the factors equal to $b$ each occur $n$ times, and the same reasoning applies.
:::
::::

:::attenzione
The properties of powers apply to products and quotients. A power of a sum generally differs from the sum of the powers. For example, with $a = 1$ and $b = 2$,
$$
(1 + 2)^2 = 3^2 = 9 ,
\qquad
1^2 + 2^2 = 1 + 4 = 5 .
$$
Similarly, when adding powers with the same base, we do not add their exponents. For example, $2^3 + 2^4 = 8 + 16 = 24$, while $2^{3+4} = 2^7 = 128$.
:::

:::esempio{titolo="An expression using several properties"}
Evaluate $\dfrac{9^2 \cdot 3^5}{27^2}$. The bases $9$ and $27$ are powers of $3$ because $9 = 3^2$ and $27 = 3^3$. By the power-of-a-power rule, we therefore have $9^2 = 3^4$ and $27^2 = 3^6$, so
$$
\frac{9^2 \cdot 3^5}{27^2} = \frac{3^4 \cdot 3^5}{3^6} = \frac{3^9}{3^6} = 3^3 = 27 .
$$
First apply the product rule for powers with the same base in the numerator, then the quotient rule. The direct calculation $\dfrac{81 \cdot 243}{729}$ gives the same result but involves much longer multiplications.
:::

## Zero and negative exponents

:::definizione{#esponente-zero titolo="Zero exponent"}
For any number $a \neq 0$, we define
$$
a^0 = 1 .
$$
This choice keeps the quotient rule valid even when the two exponents are equal. A nonzero number divided by itself equals $1$, so $\dfrac{5^3}{5^3} = 1$. The quotient rule would give $5^{3-3} = 5^0$, so we define $5^0 = 1$. For example, $7^0 = 1$, $(-4)^0 = 1$ and $\left( \dfrac{2}{9} \right)^0 = 1$. The expression $0^0$ is undefined because the division $\dfrac{0^3}{0^3}$ cannot be performed.
:::

:::definizione{#esponente-negativo titolo="Negative exponent"}
For any number $a \neq 0$ and any natural number $n$, we define
$$
a^{-n} = \frac{1}{a^n} .
$$
In other words, a power with a negative exponent is the **reciprocal** of the power with the corresponding positive exponent. This choice also keeps the quotient rule valid. Canceling factors gives
$$
\frac{2^3}{2^5} = \frac{2 \cdot 2 \cdot 2}{2 \cdot 2 \cdot 2 \cdot 2 \cdot 2} = \frac{1}{2 \cdot 2} = \frac{1}{2^2} ,
$$
whereas the quotient rule would give $2^{3-5} = 2^{-2}$. Therefore we define $2^{-2} = \dfrac{1}{2^2} = \dfrac{1}{4}$. The reciprocal of a fraction is obtained by interchanging its numerator and denominator, so
$$
\left( \frac{2}{3} \right)^{-2} = \left( \frac{3}{2} \right)^2 = \frac{9}{4} .
$$
:::

:::esempio{titolo="Powers of 2 with integer exponents"}
When the exponent decreases by $1$, the power of $2$ is divided by $2$.
$$
2^3 = 8 , \quad 2^2 = 4 , \quad 2^1 = 2 , \quad 2^0 = 1 , \quad 2^{-1} = \frac{1}{2} , \quad 2^{-2} = \frac{1}{4} , \quad 2^{-3} = \frac{1}{8} .
$$
The halving rule also holds for zero and negative exponents, in agreement with the two definitions. All the powers in the list are positive, including those with a negative exponent.

::grafico{punti="-3,0.125,pieno;-2,0.25,pieno;-1,0.5,pieno;0,1,pieno;1,2,pieno;2,4,pieno;3,8,pieno" segmenti="1,0,1,2;2,0,2,4;3,0,3,8" etichette="-3.35,0.75,2⁻³;-2.35,0.9,2⁻²;-1.35,1.15,2⁻¹;0.15,1.35,2⁰;0.75,2.7,2¹;1.75,4.7,2²;2.75,8.6,2³" xmin=-4 xmax=4 ymin=-1 ymax=9 nomi="n,y" titolo="Powers $2^n$ with $n$ ranging from $-3$ to $3$. When the exponent decreases by $1$, the value is halved, and the powers $2^{-1} = \dfrac{1}{2}$, $2^{-2} = \dfrac{1}{4}$ and $2^{-3} = \dfrac{1}{8}$ are positive"}

:::

:::osservazione{#proprieta-esponenti-interi titolo="Properties for integer exponents"}
With the definitions of zero and negative exponents, all the properties of powers also hold for any integer exponents when the base is nonzero. For example,
$$
5^{-2} \cdot 5^3 = 5^{-2+3} = 5^1 = 5 ,
\qquad
\frac{3^2}{3^{-1}} = 3^{2-(-1)} = 3^3 = 27 .
$$
The first result agrees with the definition because $5^{-2} \cdot 5^3 = \dfrac{1}{25} \cdot 125 = \dfrac{125}{25} = 5$.
:::

:::attenzione
A negative exponent does not make the result negative. For example, $2^{-3} = \dfrac{1}{8}$ is positive, while $-2^3 = -8$. The minus sign in the exponent indicates a reciprocal. The sign of the power depends only on the sign of the base and on whether the exponent is even or odd.
:::

## Scientific notation and order of magnitude

:::osservazione{#potenze-di-dieci titolo="Powers of 10"}
The power $10^n$, where $n$ is a natural number, is written as the digit $1$ followed by $n$ zeros because each factor of $10$ adds a zero. For example, $10^3 = 1000$ and $10^6 = 1\,000\,000$. Since $10^{-n} = \dfrac{1}{10^n}$, a negative power is a decimal with the digit $1$ in position $n$ after the decimal point. For example, $10^{-1} = 0.1$, $10^{-2} = 0.01$ and $10^{-4} = 0.0001$.

Multiplying a number by $10^n$ moves the decimal point $n$ places to the right, and multiplying it by $10^{-n}$ moves the point $n$ places to the left. For example,
$$
3.7 \cdot 10^2 = 370 ,
\qquad
3.7 \cdot 10^{-2} = 0.037 .
$$
:::

:::definizione{#notazione-scientifica titolo="Scientific notation"}
A positive number is written in **scientific notation** when it has the form
$$
a \cdot 10^n ,
\qquad
\text{with } 1 \leq a < 10 \text{ and } n \text{ an integer} .
$$
In words, the number is written as a number with a single nonzero digit before the decimal point, multiplied by a power of $10$. This notation makes it possible to write very large or very small numbers compactly and compare them by looking at their exponents. For example,
$$
3\,400\,000 = 3.4 \cdot 10^6 ,
\qquad
0.00052 = 5.2 \cdot 10^{-4} .
$$
In the first number, move the decimal point $6$ places to the left to obtain $3.4$, so the exponent is $6$. In the second number, move the point $4$ places to the right to obtain $5.2$, so the exponent is $-4$. The average distance between Earth and the Sun, about $150\,000\,000$ km, is written as $1.5 \cdot 10^8$ km in scientific notation.
:::

:::esempio{titolo="Products and quotients in scientific notation"}
For a product, multiply the numbers in front of the powers of $10$. Then multiply the powers of $10$ using the product rule for powers with the same base.
$$
\begin{aligned}
\left( 2.5 \cdot 10^4 \right) \cdot \left( 6 \cdot 10^3 \right)
&= (2.5 \cdot 6) \cdot 10^{4+3} \\[6pt]
&= 15 \cdot 10^7 \\[6pt]
&= 1.5 \cdot 10^8 .
\end{aligned}
$$
The number $15$ is outside the range from $1$ to $10$. Since $15 = 1.5 \cdot 10$, we have $15 \cdot 10^7 = 1.5 \cdot 10^{8}$, which is in scientific notation. For a quotient, apply the quotient rule.
$$
\frac{8 \cdot 10^3}{2 \cdot 10^{-2}} = \frac{8}{2} \cdot 10^{3-(-2)} = 4 \cdot 10^5 .
$$
:::

:::definizione{#ordine-di-grandezza titolo="Order of magnitude"}
The **order of magnitude** of a positive number is the power of $10$ that approximates it. After writing the number as $a \cdot 10^n$ in scientific notation, apply the following convention.

- If $a < 5$, the order of magnitude is $10^n$.
- If $a \geq 5$, the order of magnitude is $10^{n+1}$.

For example, $320\,000 = 3.2 \cdot 10^5$ has order of magnitude $10^5$, while $780\,000 = 7.8 \cdot 10^5$ has order of magnitude $10^6$. Some texts use $3.16$ as the threshold instead of $5$. The order of magnitude can be used to estimate a result before calculating it and to recognize an error by a factor of $10$ in a calculation.

::grafico{assi=0 uguale=1 linee="0,0 10.6,0;1,-0.18 1,0.18;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.18 5,0.18;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.18 10,0.18" segmenti="5,-0.5,5,0.9" punti="3.2,0,pieno;7.8,0,pieno" etichette="0.75,-0.75,10⁵;4.4,-0.75,5 · 10⁵;9.75,-0.75,10⁶;2.45,0.45,320 000;7.05,0.45,780 000" xmin=-0.5 xmax=11 ymin=-1.3 ymax=1.3 titolo="The number $320\,000 = 3.2 \cdot 10^5$ falls below the threshold $5 \cdot 10^5$ and has order of magnitude $10^5$. The number $780\,000 = 7.8 \cdot 10^5$ lies above the threshold and has order of magnitude $10^6$"}

:::

## Square roots and perfect squares

:::definizione{#radice-quadrata titolo="Square root"}
Taking a square root is the inverse of squaring. It allows us to recover a number from its square. For a number $a \geq 0$, the **square root** $\sqrt{a}$ is the nonnegative number whose square is $a$.
$$
\sqrt{a} = b
\quad \text{means} \quad
b \geq 0 \ \text{ and } \ b^2 = a .
$$
The number $a$ is called the **radicand**, and the symbol $\sqrt{\ }$ is called the radical sign. For example, $\sqrt{49} = 7$ because $7 \geq 0$ and $7^2 = 49$. Also, $\sqrt{0} = 0$, $\sqrt{1} = 1$ and $\sqrt{\dfrac{9}{4}} = \dfrac{3}{2}$ because $\left( \dfrac{3}{2} \right)^2 = \dfrac{9}{4}$. In geometry, $\sqrt{a}$ is the side length of a square with area $a$.

::grafico{assi=0 uguale=1 poligoni="0,0 7,0 7,7 0,7" linee="0,0 7,0 7,7 0,7 0,0" segmenti="1,0,1,7;2,0,2,7;3,0,3,7;4,0,4,7;5,0,5,7;6,0,6,7;0,1,7,1;0,2,7,2;0,3,7,3;0,4,7,4;0,5,7,5;0,6,7,6" etichette="3.35,-0.8,7;7.35,3.35,7" xmin=-1 xmax=8.5 ymin=-1.4 ymax=7.6 titolo="A square made up of $49$ small squares with side length $1$ has area $49$ and side length $7$, so $\sqrt{49} = 7$"}

:::

:::attenzione
The radicand of a real square root must be nonnegative. The expression $\sqrt{-4}$ is undefined because the square of any real number is nonnegative. For example, $2^2 = 4$ and also $(-2)^2 = 4$. For the same reason, two numbers have a square equal to $49$, namely $7$ and $-7$, while the symbol $\sqrt{49}$ denotes only the positive number $7$. In particular, $\sqrt{(-5)^2} = \sqrt{25} = 5$.

::grafico{f="x^2" xmin=-4 xmax=4 ymin=-1 ymax=9 punti="-2,4,pieno;2,4,pieno" segmenti="-2,4,2,4" nomi="x,y" titolo="On the graph of $y = x^2$ there are two points with $y = 4$, one with $x = -2$ and the other with $x = 2$. No point has a negative value of $y$, so $\sqrt{-4}$ is undefined"}
:::

:::richiamo{titolo="Prime factorization"}
Every natural number greater than $1$ can be written as a product of primes, and this representation is unique up to the order of the factors. For example, $360 = 2^3 \cdot 3^2 \cdot 5$.
:::

:::definizione{#quadrati-perfetti titolo="Perfect squares"}
A natural number is a **perfect square** if it is the square of a natural number. In that case its square root is a natural number. The squares of the numbers from $1$ to $15$ are
$$
1 ,\ 4 ,\ 9 ,\ 16 ,\ 25 ,\ 36 ,\ 49 ,\ 64 ,\ 81 ,\ 100 ,\ 121 ,\ 144 ,\ 169 ,\ 196 ,\ 225 .
$$
A number is a perfect square if and *only if* every exponent in its prime factorization is even. Indeed, by the rules for a power of a product and a power of a power, the exponents in the factorization of $m^2$ are twice those in the factorization of $m$. For example, $\left( 2 \cdot 3^2 \right)^2 = 2^2 \cdot 3^4$. Conversely, if every exponent is even, halving the exponents gives a natural number whose square is the original number, that is, its square root.
$$
324 = 2^2 \cdot 3^4 ,
\qquad
\sqrt{324} = 2 \cdot 3^2 = 18 .
$$
The number $12 = 2^2 \cdot 3$ is not a perfect square because the factor $3$ has exponent $1$, which is odd.
:::

:::esempio{#stima-radice titolo="Estimating a square root"}
If the radicand is not a perfect square, we can locate the root between two nearby numbers by comparing squares. Of two positive numbers, the one with the larger square is larger. Since $4^2 = 16$ and $5^2 = 25$, we have $4^2 < 20 < 5^2$, so $4 < \sqrt{20} < 5$. To find the first decimal digit, try the intermediate value $4.5$. Since $4.5^2 = 20.25$ is greater than $20$, we have $\sqrt{20} < 4.5$. Further trials of the same kind give $\sqrt{20} \approx 4.47$.

::grafico{assi=0 uguale=1 linee="3.75,0 5.25,0;4,-0.05 4,0.05;4.5,-0.05 4.5,0.05;5,-0.05 5,0.05" punti="4.472,0,pieno" etichette="3.97,-0.17,4;4.43,-0.17,4.5;4.97,-0.17,5;3.88,0.12,16;4.36,0.12,20.25;4.88,0.12,25;4.36,0.24,√20 ≈ 4.47" xmin=3.7 xmax=5.3 ymin=-0.28 ymax=0.32 titolo="Below the line are the numbers $4$, $4.5$ and $5$, and above it are their squares $16$, $20.25$ and $25$. The number $\sqrt{20} \approx 4.47$ lies between $4$ and $4.5$ because $16 < 20 < 20.25$"}

:::

## Cube root

:::definizione{#radice-cubica titolo="Cube root"}
Taking a cube root is the inverse of cubing. The **cube root** of a number $a$ is the number whose cube is $a$ and is denoted by $\sqrt[3]{a}$.
$$
\sqrt[3]{a} = b
\quad \text{means} \quad
b^3 = a .
$$
The number $3$ written on the radical sign is called the **index**. For a square root the index is $2$ and is omitted. For example, $\sqrt[3]{8} = 2$ because $2^3 = 8$, and $\sqrt[3]{125} = 5$ because $5^3 = 125$. In geometry, $\sqrt[3]{a}$ is the edge length of a cube with volume $a$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,2 0,2" linee="0,0 2,0 2,2 0,2 0,0;0,2 0.9,2.6 2.9,2.6 2,2;2,0 2.9,0.6 2.9,2.6;1,0 1,2;0,1 2,1;0.45,2.3 2.45,2.3;1,2 1.9,2.6;2.45,0.3 2.45,2.3;2,1 2.9,1.6" segmenti="0,0,0.9,0.6;0.9,0.6,2.9,0.6;0.9,0.6,0.9,2.6" etichette="0.9,-0.4,2;-0.4,0.9,2;2.6,0.15,2" xmin=-0.8 xmax=3.6 ymin=-0.7 ymax=3 titolo="A cube made up of $8$ small cubes with edge length $1$ has volume $8$ and edge length $2$, so $\sqrt[3]{8} = 2$"}

:::

:::osservazione{#cubi-perfetti titolo="Cube roots of negative numbers and perfect cubes"}
Every number, even a negative one, has a cube root, because the cube of a negative number is negative. For example, $\sqrt[3]{-27} = -3$ since $(-3)^3 = (-3) \cdot (-3) \cdot (-3) = -27$. Every number is the cube of exactly one number, so the definition of the cube root does not require the condition $b \geq 0$ in the square root definition. The cubes of the numbers from $1$ to $10$ are
$$
1 ,\ 8 ,\ 27 ,\ 64 ,\ 125 ,\ 216 ,\ 343 ,\ 512 ,\ 729 ,\ 1000 .
$$
A natural number is a **perfect cube** if it is the cube of a natural number, that is, if every exponent in its prime factorization is a multiple of $3$. The cube root is then found by dividing the exponents by $3$. For example, $216 = 2^3 \cdot 3^3$, so $\sqrt[3]{216} = 2 \cdot 3 = 6$.

::grafico{f="x^3" xmin=-3 xmax=3 ymin=-28 ymax=28 punti="-3,-27,pieno;3,27,pieno" segmenti="-3,0,-3,-27;3,0,3,27" nomi="x,y" titolo="On the graph of $y = x^3$, each value of $y$, including negative values, corresponds to exactly one point. We have $27 = 3^3$ and $-27 = (-3)^3$, so $\sqrt[3]{27} = 3$ and $\sqrt[3]{-27} = -3$"}
:::

## Properties of roots

::::teorema{#prodotto-quoziente-radici titolo="Root of a product and of a quotient"}
For $a \geq 0$ and $b \geq 0$, we have
$$
\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b} ,
\qquad
\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad \text{with } b \neq 0 .
$$
In words, the root of a product is the product of the roots, and the root of a quotient is the quotient of the roots. For example, $\sqrt{4 \cdot 9} = \sqrt{36} = 6$ and also $\sqrt{4} \cdot \sqrt{9} = 2 \cdot 3 = 6$. Read from right to left, these equalities can be used to multiply two roots. For example, $\sqrt{2} \cdot \sqrt{8} = \sqrt{16} = 4$. The same rules hold for cube roots regardless of the signs of $a$ and $b$. For example, $\sqrt[3]{8 \cdot 27} = \sqrt[3]{8} \cdot \sqrt[3]{27} = 2 \cdot 3 = 6$.

:::dimostrazione
The idea is to show that $\sqrt{a} \cdot \sqrt{b}$ satisfies the two properties that define $\sqrt{a \cdot b}$. The number $\sqrt{a} \cdot \sqrt{b}$ is nonnegative because it is the product of two nonnegative numbers. By the power-of-a-product rule, its square is
$$
\left( \sqrt{a} \cdot \sqrt{b} \right)^2 = \left( \sqrt{a} \right)^2 \cdot \left( \sqrt{b} \right)^2 = a \cdot b .
$$
Therefore $\sqrt{a} \cdot \sqrt{b}$ is the nonnegative number whose square equals $a \cdot b$, so it is $\sqrt{a \cdot b}$. With $a = 4$ and $b = 9$ the calculation gives $(2 \cdot 3)^2 = 2^2 \cdot 3^2 = 4 \cdot 9 = 36$. The reasoning for the quotient is the same, using the power of a quotient in place of the power of a product.
:::
::::

:::attenzione
The root of a sum generally differs from the sum of the roots. For example,
$$
\sqrt{36 + 64} = \sqrt{100} = 10 ,
\qquad
\sqrt{36} + \sqrt{64} = 6 + 8 = 14 .
$$
Similarly, $\sqrt{2} + \sqrt{3}$ differs from $\sqrt{5}$ because $\sqrt{2} + \sqrt{3} \approx 3.15$ and $\sqrt{5} \approx 2.24$.
:::

:::teorema{#portare-fuori titolo="Taking a factor out of a radical"}
For $a \geq 0$ and $b \geq 0$, we have
$$
\sqrt{a^2 \cdot b} = a \sqrt{b} .
$$
The rule follows from the root of a product because $\sqrt{a^2 \cdot b} = \sqrt{a^2} \cdot \sqrt{b}$ and $\sqrt{a^2} = a$ for $a \geq 0$. The notation $a\sqrt{b}$ denotes the product $a \cdot \sqrt{b}$. This rule can be used to simplify a root. Write the radicand as the product of its largest perfect-square factor and another number, then take the square root of the perfect square outside the radical. For example,
$$
\sqrt{180} = \sqrt{36 \cdot 5} = \sqrt{36} \cdot \sqrt{5} = 6 \sqrt{5} .
$$
Prime factorization identifies the perfect square. Indeed, $180 = 2^2 \cdot 3^2 \cdot 5$ shows that the perfect-square factor is $2^2 \cdot 3^2 = 36$.
:::

:::definizione{#radicali-simili titolo="Like radicals"}
An expression such as $\sqrt{7}$ or $3\sqrt{2}$ is called a **radical**. Two radicals are **like** radicals if they have the same radicand, as in $2\sqrt{3}$ and $5\sqrt{3}$. By the distributive property, like radicals are added by adding their coefficients.
$$
2\sqrt{3} + 5\sqrt{3} = (2 + 5) \sqrt{3} = 7\sqrt{3} .
$$
Two radicals with different radicands can become like radicals after factors are taken out. For example, $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$ and $\sqrt{27} = \sqrt{9 \cdot 3} = 3\sqrt{3}$, so
$$
\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3} .
$$
If the radicands remain different, as in $\sqrt{2} + \sqrt{3}$, the sum cannot be simplified.
:::

## Rationalization

:::richiamo{titolo="Invariance of a fraction"}
Multiplying the numerator and denominator of a fraction by the same nonzero number gives an equivalent fraction, that is, $\dfrac{a}{b} = \dfrac{a \cdot c}{b \cdot c}$ for $b \neq 0$ and $c \neq 0$.
:::

:::definizione{#razionalizzazione titolo="Rationalization"}
To **rationalize** a fraction is to write it as an equivalent fraction whose denominator contains no roots. When the denominator is $\sqrt{a}$, with $a > 0$, multiply the numerator and denominator by $\sqrt{a}$ because $\sqrt{a} \cdot \sqrt{a} = a$.
$$
\frac{1}{\sqrt{2}} = \frac{1 \cdot \sqrt{2}}{\sqrt{2} \cdot \sqrt{2}} = \frac{\sqrt{2}}{2} .
$$
By the invariance of a fraction, the resulting fraction equals the original one. The rationalized form makes calculations by hand simpler. With $\sqrt{2} \approx 1.414$, the value of $\dfrac{\sqrt{2}}{2}$ is obtained by dividing by $2$ and is approximately $0.707$, while finding the value of $\dfrac{1}{\sqrt{2}}$ requires dividing $1$ by $1.414$. Rationalization can also reveal like radicals in a sum of fractions.
:::

:::esempio{titolo="Two rationalizations"}
For the fraction $\dfrac{10}{\sqrt{5}}$, multiply the numerator and denominator by $\sqrt{5}$. The denominator becomes $\sqrt{5} \cdot \sqrt{5} = 5$, which cancels with $10$.
$$
\frac{10}{\sqrt{5}} = \frac{10\sqrt{5}}{5} = 2\sqrt{5} .
$$
For the fraction $\dfrac{3}{2\sqrt{6}}$, the radical in the denominator is $\sqrt{6}$, so we need only multiply by $\sqrt{6}$. The denominator becomes $2 \cdot \sqrt{6} \cdot \sqrt{6} = 2 \cdot 6 = 12$, and the fraction can be reduced by dividing by $3$.
$$
\frac{3}{2\sqrt{6}} = \frac{3\sqrt{6}}{2 \cdot 6} = \frac{3\sqrt{6}}{12} = \frac{\sqrt{6}}{4} .
$$
:::

## Irrational numbers and real numbers

:::esempio{titolo="A square of area 2"}
A square with side length $2$ can be divided into four small squares of side length $1$. The segments joining the midpoints of the sides of the large square form a smaller square containing half of each small square. Its area is therefore $4 \cdot \dfrac{1}{2} = 2$. Its side length is thus the positive number whose square equals $2$, namely $\sqrt{2}$. It is also the diagonal of a small square of side length $1$. The value of $\sqrt{2}$ can be estimated by comparing squares, as for $\sqrt{20}$.
$$
1.4^2 = 1.96 , \qquad 1.5^2 = 2.25 , \qquad 1.41^2 = 1.9881 , \qquad 1.42^2 = 2.0164 .
$$
Since $1.41^2 < 2 < 1.42^2$, we have $1.41 < \sqrt{2} < 1.42$.

::grafico{assi=0 uguale=1 poligoni="1,0 2,1 1,2 0,1" linee="0,0 2,0 2,2 0,2 0,0" segmenti="1,0,1,2;0,1,2,1" etichette="0.45,-0.22,1;1.45,-0.22,1;1.55,0.35,√2" xmin=-0.4 xmax=2.4 ymin=-0.45 ymax=2.3 titolo="The shaded square contains half of each of the four small squares of side length $1$, so it has area $2$ and side length $\sqrt{2}$"}

:::

::::teorema{#radice-di-due-irrazionale titolo="Irrationality of the square root of 2"}
The number $\sqrt{2}$ cannot be written as a fraction $\dfrac{m}{n}$ with $m$ and $n$ natural numbers. Every terminating or repeating decimal can be written as a fraction, as shown in the chapter on decimals. Therefore $\sqrt{2} = 1.41421\ldots$ has infinitely many decimal digits with no repeating block.

:::dimostrazione
The idea is to count how many times the factor $2$ appears in a prime factorization. Suppose that $\sqrt{2} = \dfrac{m}{n}$, with $m$ and $n$ nonzero natural numbers. Squaring gives $2 = \dfrac{m^2}{n^2}$, that is,
$$
m^2 = 2 \cdot n^2 .
$$
In the factorization of a square, every prime factor occurs an even number of times because the exponents are doubled. A factor that is absent occurs zero times, and zero is even. Therefore the factor $2$ occurs an even number of times in $m^2$ and in $n^2$, and an *odd* number of times in $2 \cdot n^2$. For example, $6^2 = 36 = 2^2 \cdot 3^2$, while $2 \cdot 6^2 = 72 = 2^3 \cdot 3^2$. Since prime factorization is unique, the same number cannot contain the factor $2$ both an even and an odd number of times. Therefore the equality $m^2 = 2 \cdot n^2$ is impossible, and $\sqrt{2}$ cannot be written as a fraction. There are fractions close to $\sqrt{2}$, such as $\dfrac{7}{5} = 1.4$, for which $7^2 = 49$ is close to $2 \cdot 5^2 = 50$, but equality never holds.
:::
::::

:::definizione{#numeri-irrazionali titolo="Irrational numbers"}
A number whose decimal expansion is infinite and does not eventually repeat is called **irrational**. In words, an irrational number cannot be written as a fraction. The numbers $\sqrt{2} = 1.41421\ldots$, $\sqrt{3} = 1.73205\ldots$ and $\pi = 3.14159\ldots$ are irrational. The last is the ratio of a circle's circumference to its diameter. The reasoning used for $\sqrt{2}$ shows that the square root of a natural number is irrational whenever the number is not a perfect square. For example, $\sqrt{50} = 5\sqrt{2}$ is irrational, while $\sqrt{49} = 7$ is rational. In calculations, an irrational number can be left in radical form, as in $5\sqrt{2}$, or approximated with a decimal, as in $\sqrt{2} \approx 1.41$.
:::

:::definizione{#numeri-reali titolo="Real numbers"}
The rational numbers and the irrational numbers together form the set of **real numbers**, denoted by $\mathbb{R}$. Every point on the number line corresponds to a real number, and every real number corresponds to a point on the line. The point corresponding to $\sqrt{2}$ can be found using a square of side length $1$ placed on the line and a compass, as the figure shows.

The number sets are nested. Every natural number, that is, every member of $\mathbb{N}$, is an integer and therefore a member of $\mathbb{Z}$. Every integer is a rational number, a member of $\mathbb{Q}$, and every rational number is a real number. Among the real numbers, every positive number has a square root, while no rational number has a square equal to $2$.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.6,0 2.6,0;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;0,0 1,1" curve="sqrt(2)*cos(t),sqrt(2)*sin(t),0,0.7854" punti="1.4142,0,pieno" etichette="-0.05,-0.28,0;0.95,-0.28,1;1.95,-0.28,2;1.33,-0.28,√2;0.25,0.62,√2" legenda=0 xmin=-0.7 xmax=2.7 ymin=-0.5 ymax=1.3 titolo="The arc centered at $0$ with radius equal to the diagonal of the square of side length $1$ meets the number line at $\sqrt{2}$, between $1.41$ and $1.42$"}

:::
