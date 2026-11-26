---
titolo: Fractions
sommario: What fractions represent, when they are equivalent, how to simplify and compare them, how to perform the four operations and find a fraction of a quantity, and how to evaluate expressions with rational numbers.
---

## What is a fraction?

:::definizione{#frazione titolo="Fraction"}
A fraction describes part of a whole, such as a cake, a rectangle, or an hour. The **fraction** $\dfrac{a}{b}$, with $b \neq 0$, indicates that the whole is divided into $b$ equal parts and that $a$ of them are taken. The number below the fraction bar, $b$, is called the **denominator** and tells us how many parts the whole is divided into. The number above the bar, $a$, is called the **numerator** and tells us how many parts are taken.

For example, to find $\dfrac{3}{5}$ of a rectangle, we divide the rectangle into $5$ equal parts and take $3$ of them.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,1.5 0,1.5" linee="0,0 5,0 5,1.5 0,1.5 0,0;1,0 1,1.5;2,0 2,1.5;3,0 3,1.5;4,0 4,1.5" xmin=-0.3 xmax=5.3 ymin=-0.3 ymax=1.8 titolo="The rectangle is divided into $5$ equal parts, and $3$ of them are shaded, so the shaded region is $\dfrac{3}{5}$ of the rectangle"}

Each part by itself is $\dfrac{1}{5}$ of the rectangle. A fraction with numerator $1$ is called a **unit fraction**, and the fraction $\dfrac{3}{5}$ consists of three parts of size $\dfrac{1}{5}$.
:::

:::esempio{titolo="Everyday fractions"}
A quarter of an hour is $\dfrac{1}{4}$ of an hour. An hour has $60$ minutes, and dividing it into $4$ equal parts gives parts of $15$ minutes each, so a quarter of an hour lasts $15$ minutes. Three quarters of an hour is $\dfrac{3}{4}$ of an hour, or $3$ parts of $15$ minutes each, for a total of $45$ minutes.

A pizza is cut into $8$ equal slices. Each slice is $\dfrac{1}{8}$ of the pizza, and $5$ slices make up $\dfrac{5}{8}$ of the pizza.
:::

:::definizione{#frazione-come-quoziente titolo="A fraction as a quotient"}
A fraction also represents division. The fraction $\dfrac{a}{b}$ is the result of $a : b$, so the fraction bar has the same meaning as the sign $:$. For example, $\dfrac{12}{4} = 12 : 4 = 3$. A division can be written as a fraction even when the result is not an integer, so $3 : 4$ can be written as $\dfrac{3}{4}$.

Both interpretations give the same quantity. If $3$ identical pizzas are shared among $4$ people, each person receives $3 : 4 = \dfrac{3}{4}$ of a pizza. The same result is obtained by cutting each pizza into $4$ slices. This way each person receives one slice from each of the $3$ pizzas, that is, $3$ slices of $\dfrac{1}{4}$ of a pizza each. From here on, division of two numbers is usually written as a fraction.
:::

:::attenzione
The denominator of a fraction is always nonzero. The expression $\dfrac{5}{0}$ is undefined because no number multiplied by $0$ gives $5$. The numerator, however, can be $0$, in which case the fraction equals $0$. For example, $\dfrac{0}{7} = 0$ because $0 \cdot 7 = 0$.
:::

## Proper fractions, improper fractions, and fractions equal to an integer

:::definizione{#tipi-di-frazioni titolo="Proper fractions, improper fractions, and fractions equal to an integer"}
Fractions are classified by comparing the numerator with the denominator.

- A fraction is **proper** if its numerator is less than its denominator, as in $\dfrac{3}{5}$. Fewer parts are taken than make up the whole, so the fraction is less than $1$.
- A fraction is **improper** if its numerator is greater than its denominator, as in $\dfrac{7}{4}$. More parts are taken than make up the whole, so the fraction is greater than $1$.
- A fraction **equals an integer** if its numerator is a multiple of its denominator, as in $\dfrac{8}{4}$ or $\dfrac{5}{5}$. The division has no remainder, so the value of the fraction is an integer. For example, $\dfrac{8}{4} = 2$ and $\dfrac{5}{5} = 1$.

A fraction that equals an integer and has a numerator greater than its denominator is also improper. The classification tells us immediately whether a fraction is less than $1$, greater than $1$, or equal to an integer.
:::

:::esempio{titolo="An improper fraction as an integer plus a proper fraction"}
The fraction $\dfrac{7}{4}$ consists of $7$ parts of size $\dfrac{1}{4}$. Four of these parts make one whole, so
$$
\frac{7}{4} = \frac{4}{4} + \frac{3}{4} = 1 + \frac{3}{4} .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,1 0,1;5,0 8,0 8,1 5,1" linee="0,0 4,0 4,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1;5,0 9,0 9,1 5,1 5,0;6,0 6,1;7,0 7,1;8,0 8,1" etichette="1.2,-0.5,4 fourths;6.2,-0.5,3 fourths" xmin=-0.3 xmax=9.3 ymin=-0.9 ymax=1.3 titolo="Seven fourths make one whole rectangle, that is, $\dfrac{4}{4}$, plus $\dfrac{3}{4}$ of a second rectangle of the same size"}

We can calculate this by dividing with a remainder. The division $7 : 4$ has quotient $1$ and remainder $3$. The quotient gives the number of wholes and the remainder is the numerator of the proper fraction left over. Similarly, $23 : 5$ has quotient $4$ and remainder $3$, so $\dfrac{23}{5} = 4 + \dfrac{3}{5}$, and the number $\dfrac{23}{5}$ lies between $4$ and $5$.
:::

:::osservazione{#frazioni-sulla-retta titolo="Fractions on the number line"}
On the number line, the segment from $0$ to $1$ represents one whole. To mark $\dfrac{3}{4}$, we divide this segment into $4$ equal parts and count $3$ parts starting at $0$. To mark $\dfrac{7}{4}$, we continue counting parts of size $\dfrac{1}{4}$ beyond $1$ until we reach $7$ parts.

::grafico{assi=0 uguale=1 linee="-0.2,0 2.32,0;2.24,0.05 2.32,0 2.24,-0.05;0,-0.08 0,0.08;0.25,-0.045 0.25,0.045;0.5,-0.045 0.5,0.045;0.75,-0.045 0.75,0.045;1,-0.08 1,0.08;1.25,-0.045 1.25,0.045;1.5,-0.045 1.5,0.045;1.75,-0.045 1.75,0.045;2,-0.08 2,0.08" punti="0.75,0,pieno,A;1.75,0,pieno,B;2,0,pieno,C" etichette="-0.025,-0.24,0;0.975,-0.24,1;1.975,-0.24,2" xmin=-0.3 xmax=2.4 ymin=-0.35 ymax=0.3 titolo="On the number line marked in fourths, $A = \dfrac{3}{4}$ lies between $0$ and $1$, $B = \dfrac{7}{4}$ lies between $1$ and $2$, and $C = \dfrac{8}{4} = 2$ is also marked"}

Proper fractions therefore lie between $0$ and $1$, improper fractions to the right of $1$, and fractions equal to integers at the integer tick marks.
:::

## Equivalent fractions and simplification

:::definizione{#frazioni-equivalenti titolo="Equivalent fractions"}
Two fractions are **equivalent** if they represent the same quantity, that is, if they have the same value. An equals sign is written between equivalent fractions. For example, half a pizza is the same amount as two slices of a pizza cut into four equal slices, so $\dfrac{1}{2} = \dfrac{2}{4}$.

Equivalent fractions allow us to change the denominator of a fraction without changing its value. This is the basis for comparing, adding, and subtracting fractions.
:::

::::teorema{#proprieta-invariantiva titolo="Invariance property"}
Multiplying the numerator and the denominator of a fraction by the same nonzero number gives an equivalent fraction. The same holds if we divide the numerator and denominator by the same common divisor. For $b \neq 0$ and $n \neq 0$ we have
$$
\frac{a}{b} = \frac{a \cdot n}{b \cdot n} .
$$
For example,
$$
\frac{2}{3} = \frac{2 \cdot 2}{3 \cdot 2} = \frac{4}{6} ,
\qquad
\frac{10}{15} = \frac{10 : 5}{15 : 5} = \frac{2}{3} .
$$
By multiplying by $2$, by $3$, by $4$, and so on, we can obtain as many equivalent fractions as we want, as in $\dfrac{2}{3} = \dfrac{4}{6} = \dfrac{6}{9} = \dfrac{8}{12}$.

:::dimostrazione
We divide a rectangle into $3$ equal parts and shade $2$ of them, so the shaded region is $\dfrac{2}{3}$ of the rectangle. Then we cut each part in half. There are now $3 \cdot 2 = 6$ parts, of which $2 \cdot 2 = 4$ are shaded, but the shaded region stays the same. Therefore $\dfrac{2}{3} = \dfrac{4}{6}$.

::grafico{assi=0 uguale=1 poligoni="0,1.6 4,1.6 4,2.6 0,2.6;0,0 4,0 4,1 0,1" linee="0,1.6 6,1.6 6,2.6 0,2.6 0,1.6;2,1.6 2,2.6;4,1.6 4,2.6;0,0 6,0 6,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1;4,0 4,1;5,0 5,1" etichette="6.3,2.0,2 parts out of 3;6.3,0.4,4 parts out of 6" xmin=-0.3 xmax=9.2 ymin=-0.3 ymax=2.9 titolo="Cutting each third in half changes $\dfrac{2}{3}$ of the rectangle into $\dfrac{4}{6}$, and the shaded region stays the same"}

If each part is cut into $n$ equal pieces, both the number of parts and the number of shaded parts are multiplied by $n$, while the shaded region stays the same. Dividing the numerator and denominator by the same number reverses this reasoning by combining the parts into equal groups.
:::
::::

:::definizione{#minimi-termini titolo="Simplification and fractions in lowest terms"}
To **simplify** a fraction means to divide the numerator and the denominator by a common divisor greater than $1$. By the invariance property, the resulting fraction is equivalent to the original one and uses smaller numbers. A fraction is **in lowest terms** when the only common divisor of its numerator and denominator is $1$, that is, when they are coprime.

For example,
$$
\frac{18}{24} = \frac{18 : 2}{24 : 2} = \frac{9}{12} = \frac{9 : 3}{12 : 3} = \frac{3}{4} .
$$
The only common divisor of $3$ and $4$ is $1$, so $\dfrac{3}{4}$ is in lowest terms. The fraction in lowest terms is the simplest way to write that value, and calculations with it are shorter.
:::

:::richiamo{titolo="Greatest common divisor"}
The greatest common divisor $\operatorname{MCD}(a, b)$ is the largest number that divides both $a$ and $b$. To find it, we factor $a$ and $b$ into primes and multiply the common prime factors, each raised to the smaller exponent.
:::

:::teorema{#semplificazione titolo="Reducing to lowest terms using the GCD"}
Dividing the numerator and denominator by their greatest common divisor reduces the fraction to lowest terms in a single step. No common prime factor remains after division because all common factors are included in the GCD.

For example, $84 = 2^2 \cdot 3 \cdot 7$ and $126 = 2 \cdot 3^2 \cdot 7$, so $\operatorname{MCD}(84, 126) = 2 \cdot 3 \cdot 7 = 42$ and
$$
\frac{84}{126} = \frac{84 : 42}{126 : 42} = \frac{2}{3} .
$$
This method is useful when the numbers are large and their common divisors are not immediately apparent. With small numbers, we can get the same result by dividing several times in succession, as with $\dfrac{18}{24}$.
:::

:::attenzione
Only factors, the numbers being multiplied, can be canceled. A number that occurs as an addend both above and below the fraction bar cannot be removed. For example, $\dfrac{2 + 3}{2 + 5} = \dfrac{5}{7}$, whereas removing the two $2$ terms would give $\dfrac{3}{5}$, a different value.
:::

## Comparing fractions

:::teorema{#confronto-stesso-denominatore titolo="Comparing fractions with the same denominator or the same numerator"}
Of two fractions with the same denominator, the one with the greater numerator is greater. The parts are the same size, so the fraction that takes more of them is greater. For example, $\dfrac{5}{8} > \dfrac{3}{8}$.

Of two fractions with the same numerator, the one with the smaller denominator is greater. In this case the whole is divided into fewer parts, so each part is larger. For example, $\dfrac{2}{3} > \dfrac{2}{5}$ because one third of a pizza is larger than one fifth.
:::

:::richiamo{titolo="Least common multiple"}
The least common multiple $\operatorname{mcm}(a, b)$ is the smallest nonzero number that is a multiple of both $a$ and $b$. To find it, we multiply all the prime factors that occur in $a$ or $b$, whether shared or not, each raised to the greater exponent.
:::

:::definizione{#minimo-comune-denominatore titolo="Least common denominator"}
To compare, add, or subtract fractions with different denominators, we rewrite them as equivalent fractions that all have the same denominator. The smallest denominator we can use is the least common multiple of the denominators and is called the **least common denominator**.

We use the invariance property to rewrite each fraction. We divide the common denominator by the denominator of the fraction and then multiply its numerator and denominator by the quotient. For $\dfrac{5}{6}$ and $\dfrac{3}{4}$ we have $\operatorname{mcm}(6, 4) = 12$. Since $12 : 6 = 2$ and $12 : 4 = 3$, we obtain
$$
\frac{5}{6} = \frac{5 \cdot 2}{6 \cdot 2} = \frac{10}{12} ,
\qquad
\frac{3}{4} = \frac{3 \cdot 3}{4 \cdot 3} = \frac{9}{12} .
$$
:::

:::teorema{#confronto-frazioni titolo="Comparing fractions with different denominators"}
To compare two fractions with different denominators, we rewrite them with their least common denominator and compare the numerators. The fractions $\dfrac{5}{6}$ and $\dfrac{3}{4}$ become $\dfrac{10}{12}$ and $\dfrac{9}{12}$, and $10 > 9$, so $\dfrac{5}{6} > \dfrac{3}{4}$. The greater fraction lies farther to the right on the number line.

::grafico{assi=0 uguale=1 poligoni="0,1.6 10,1.6 10,2.6 0,2.6;0,0 9,0 9,1 0,1" linee="0,1.6 12,1.6 12,2.6 0,2.6 0,1.6;2,1.6 2,2.6;4,1.6 4,2.6;6,1.6 6,2.6;8,1.6 8,2.6;10,1.6 10,2.6;0,0 12,0 12,1 0,1 0,0;3,0 3,1;6,0 6,1;9,0 9,1" etichette="12.6,2.1,5 sixths = 10 out of 12;12.6,0.5,3 fourths = 9 out of 12" xmin=-0.3 xmax=22 ymin=-0.3 ymax=2.9 titolo="With the same whole divided into $12$ parts, $\dfrac{5}{6}$ takes up $10$ parts and $\dfrac{3}{4}$ takes up $9$"}

With positive denominators we can also compare the **cross products**: $\dfrac{a}{b} > \dfrac{c}{d}$ when $a \cdot d > b \cdot c$. The rule follows by comparing the fractions with the common denominator $b \cdot d$, because $\dfrac{a}{b} = \dfrac{a \cdot d}{b \cdot d}$ and $\dfrac{c}{d} = \dfrac{b \cdot c}{b \cdot d}$. For example, $\dfrac{4}{7} > \dfrac{5}{9}$ because $4 \cdot 9 = 36$ is greater than $7 \cdot 5 = 35$.
:::

## Addition and subtraction

:::teorema{#addizione-sottrazione titolo="Adding and subtracting fractions"}
To add or subtract two fractions with the same denominator, we perform the operation on the numerators and keep the denominator:
$$
\frac{a}{b} + \frac{c}{b} = \frac{a + c}{b} ,
\qquad
\frac{a}{b} - \frac{c}{b} = \frac{a - c}{b} .
$$
For example, $\dfrac{2}{7} + \dfrac{3}{7} = \dfrac{5}{7}$ because two parts of size one seventh plus three parts of size one seventh give five parts of size one seventh.

If the denominators are different, we first rewrite the fractions with their least common denominator. The parts are then the same size and can be counted together. For example,
$$
\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6} ,
\qquad
\frac{3}{4} - \frac{1}{6} = \frac{9}{12} - \frac{2}{12} = \frac{7}{12} .
$$

::grafico{assi=0 uguale=1 poligoni="0,2.4 3,2.4 3,3.2 0,3.2;0,1.2 2,1.2 2,2 0,2;0,0 5,0 5,0.8 0,0.8" linee="0,2.4 6,2.4 6,3.2 0,3.2 0,2.4;3,2.4 3,3.2;0,1.2 6,1.2 6,2 0,2 0,1.2;2,1.2 2,2;4,1.2 4,2;0,0 6,0 6,0.8 0,0.8 0,0;1,0 1,0.8;2,0 2,0.8;3,0 3,0.8;4,0 4,0.8;5,0 5,0.8" etichette="6.3,2.65,one half;6.3,1.45,one third;6.3,0.25,five sixths" xmin=-0.3 xmax=9.3 ymin=-0.3 ymax=3.5 titolo="One half of the rectangle is $3$ sixths and one third is $2$ sixths, so $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{5}{6}$"}

An integer can be written as a fraction with denominator $1$. For example, $2 = \dfrac{2}{1} = \dfrac{10}{5}$, and therefore $2 - \dfrac{3}{5} = \dfrac{10}{5} - \dfrac{3}{5} = \dfrac{7}{5}$. We then reduce the result to lowest terms if possible.
:::

:::attenzione
Adding two fractions does not mean adding their numerators and their denominators separately. For example, $\dfrac{1}{3} + \dfrac{1}{3} = \dfrac{2}{3}$, whereas adding the numerators and denominators separately would give $\dfrac{2}{6} = \dfrac{1}{3}$, which equals just one of the two addends.
:::

:::richiamo{titolo="Rule of signs for division"}
The quotient of two nonzero integers is positive if they have the same sign and negative if they have different signs.
:::

:::teorema{#segno-frazione titolo="The sign of a fraction"}
A fraction is the quotient of its numerator and denominator, so its sign follows the rule of signs. If the numerator and denominator have different signs, the fraction is negative. If they have the same sign, it is positive. The sign is written in front of the fraction:
$$
\frac{-3}{4} = \frac{3}{-4} = -\frac{3}{4} ,
\qquad
\frac{-3}{-4} = \frac{3}{4} .
$$
We add and subtract signed fractions as we do integers, after rewriting them with their least common denominator. For example,
$$
-\frac{3}{4} + \frac{5}{6} = -\frac{9}{12} + \frac{10}{12} = \frac{1}{12} .
$$
:::

## Multiplication, division, and powers

::::teorema{#moltiplicazione-frazioni titolo="Multiplying fractions"}
For $b \neq 0$ and $d \neq 0$, the product of two fractions is the fraction whose numerator is the product of the numerators and whose denominator is the product of the denominators:
$$
\frac{a}{b} \cdot \frac{c}{d} = \frac{a \cdot c}{b \cdot d} .
$$
Multiplying by a fraction means taking that fraction of a quantity, so $\dfrac{2}{3} \cdot \dfrac{3}{4}$ is $\dfrac{2}{3}$ of $\dfrac{3}{4}$. Before multiplying, we can cancel a common factor from the numerator of one fraction and the denominator of the other because the product is a single fraction with all these factors above and below the bar. This operation is called **cross-cancellation**. For example, $6$ and $9$ are divisible by $3$, and $10$ and $25$ are divisible by $5$, so
$$
\frac{6}{25} \cdot \frac{10}{9} = \frac{2 \cdot 2}{5 \cdot 3} = \frac{4}{15} .
$$
To multiply an integer by a fraction, we write the integer with denominator $1$. For example, $3 \cdot \dfrac{2}{7} = \dfrac{3}{1} \cdot \dfrac{2}{7} = \dfrac{6}{7}$.

:::dimostrazione
We divide a rectangle into $4$ equal columns and take $3$ of them, that is, $\dfrac{3}{4}$ of the rectangle. Then we divide the rectangle into $3$ equal rows and shade $2$ rows within the selected columns. The shaded region is therefore $\dfrac{2}{3}$ of $\dfrac{3}{4}$ of the rectangle.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,2 0,2" linee="0,0 4,0 4,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;0,1 4,1;0,2 4,2" xmin=-0.3 xmax=4.3 ymin=-0.3 ymax=3.3 titolo="Taking $\dfrac{2}{3}$ of $\dfrac{3}{4}$ of the rectangle gives $2 \cdot 3 = 6$ small squares out of $3 \cdot 4 = 12$, or $\dfrac{6}{12} = \dfrac{1}{2}$ of the rectangle"}

The rectangle consists of $3 \cdot 4 = 12$ equal squares, the product of the denominators. The shaded region contains $2 \cdot 3 = 6$ squares, the product of the numerators. Therefore $\dfrac{2}{3} \cdot \dfrac{3}{4} = \dfrac{6}{12} = \dfrac{1}{2}$.
:::
::::

:::definizione{#reciproco titolo="Reciprocal of a fraction"}
The **reciprocal** of a fraction $\dfrac{a}{b}$, with $a \neq 0$ and $b \neq 0$, is the fraction $\dfrac{b}{a}$, obtained by interchanging the numerator and the denominator. The product of a fraction and its reciprocal equals $1$ because $\dfrac{a}{b} \cdot \dfrac{b}{a} = \dfrac{a \cdot b}{b \cdot a}$ has the same numerator and denominator.

For example, the reciprocal of $\dfrac{2}{5}$ is $\dfrac{5}{2}$, and the reciprocal of $3 = \dfrac{3}{1}$ is $\dfrac{1}{3}$. The reciprocal of a negative number is negative. For example, the reciprocal of $-\dfrac{4}{7}$ is $-\dfrac{7}{4}$. The number $0$ has no reciprocal because $\dfrac{1}{0}$ is undefined. The reciprocal is used in dividing fractions.
:::

::::teorema{#divisione-frazioni titolo="Dividing fractions"}
The quotient of two fractions is found by multiplying the first fraction by the reciprocal of the second. For $b \neq 0$, $c \neq 0$, and $d \neq 0$ we have
$$
\frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c} .
$$
For example,
$$
\frac{3}{4} : \frac{3}{8} = \frac{3}{4} \cdot \frac{8}{3} = 2 ,
\qquad
5 : \frac{1}{3} = 5 \cdot \frac{3}{1} = 15 .
$$
The first result tells us that three quarters of a pizza contains $2$ portions of three eighths each. The second tells us that $5$ pizzas contain $15$ thirds of a pizza.

:::dimostrazione
The quotient is the number that, when multiplied by the divisor, gives the dividend. For example, $12 : 4 = 3$ because $3 \cdot 4 = 12$. The number $\dfrac{a}{b} \cdot \dfrac{d}{c}$ has this property because multiplying it by the divisor $\dfrac{c}{d}$ gives
$$
\left( \frac{a}{b} \cdot \frac{d}{c} \right) \cdot \frac{c}{d} = \frac{a}{b} \cdot \left( \frac{d}{c} \cdot \frac{c}{d} \right) = \frac{a}{b} \cdot 1 = \frac{a}{b} .
$$
The first step uses the associative property of multiplication. The second uses the fact that the product of a fraction and its reciprocal equals $1$. With the numbers in the example we have $2 \cdot \dfrac{3}{8} = \dfrac{6}{8} = \dfrac{3}{4}$, so $\dfrac{3}{4} : \dfrac{3}{8} = 2$.
:::
::::

:::definizione{#potenza-di-una-frazione titolo="Power of a fraction"}
For $b \neq 0$ and a natural number $n \geq 1$, the power $\left( \dfrac{a}{b} \right)^n$ is the product of $n$ factors equal to $\dfrac{a}{b}$, just as for natural numbers. By the multiplication rule, we multiply $n$ numerators equal to $a$ and $n$ denominators equal to $b$, so
$$
\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n} .
$$
For example, $\left( \dfrac{2}{3} \right)^2 = \dfrac{2}{3} \cdot \dfrac{2}{3} = \dfrac{4}{9}$. For a negative fraction the rule for powers of integers applies, so $\left( -\dfrac{1}{2} \right)^3 = -\dfrac{1}{8}$ because the exponent is odd, and $\left( -\dfrac{1}{2} \right)^2 = \dfrac{1}{4}$ because the exponent is even. The other properties of powers are given in the chapter on powers and roots.
:::

:::attenzione
When an exponent applies to the entire fraction, we enclose the fraction in parentheses. Without parentheses, the exponent applies only to the number it is written on. For example, $\left( \dfrac{2}{3} \right)^2 = \dfrac{4}{9}$, while $\dfrac{2^2}{3} = \dfrac{4}{3}$.
:::

## A fraction of a quantity

:::definizione{#frazione-di-un-numero titolo="A fraction of a quantity"}
Finding $\dfrac{a}{b}$ of a quantity $N$ means dividing $N$ into $b$ equal parts and taking $a$ of them. The result is the product $\dfrac{a}{b} \cdot N$, which we calculate in two steps. The division $\dfrac{N}{b}$ gives the value of one part, and multiplying that value by $a$ gives the desired quantity.

For example, we can find $\dfrac{2}{5}$ of $350$ euros as follows. One part is worth $\dfrac{350}{5} = 70$ euros, and two parts are worth $70 \cdot 2 = 140$ euros. A proper fraction of a quantity is smaller than that quantity, and an improper fraction is larger.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1" linee="0,0 5,0 5,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1;4,0 4,1" etichette="0.1,-0.55,2 parts = 140 euros;0.1,-1.15,5 parts = 350 euros" xmin=-0.3 xmax=11 ymin=-1.5 ymax=1.4 titolo="The $5$ parts are worth $350$ euros in all, and each part is worth $70$ euros, so the $2$ shaded parts are worth $140$ euros"}
:::

:::esempio{titolo="A discount expressed as a fraction"}
A pair of shoes costs $80$ euros and is discounted by $\dfrac{1}{5}$ of its price. The discount is $\dfrac{80}{5} = 16$ euros, so the amount paid is $80 - 16 = 64$ euros.

The same result follows by observing that the portion of the price that is paid is the remaining fraction, $1 - \dfrac{1}{5} = \dfrac{4}{5}$. One fifth of $80$ euros is worth $16$ euros, so $\dfrac{4}{5}$ is worth $16 \cdot 4 = 64$ euros.
:::

:::teorema{#problema-inverso titolo="Finding the whole from a part"}
If we know the part and want to find the whole, we reverse the operations. Dividing the part by the numerator gives the value of one part of size $\dfrac{1}{b}$. We then multiply this value by the denominator. This calculation is equivalent to dividing the part by the fraction.

For example, $\dfrac{2}{7}$ of a route measures $18$ km. One seventh of the route measures $\dfrac{18}{2} = 9$ km, so the entire route measures $9 \cdot 7 = 63$ km. Dividing by the fraction gives the same number because $18 : \dfrac{2}{7} = 18 \cdot \dfrac{7}{2} = 63$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1" linee="0,0 7,0 7,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1;4,0 4,1;5,0 5,1;6,0 6,1" etichette="0.2,-0.55,2 parts = 18 km;0.2,-1.15,7 parts = 63 km" xmin=-0.3 xmax=14 ymin=-1.5 ymax=1.4 titolo="The $2$ shaded parts measure $18$ km, so each part measures $9$ km and the route of $7$ parts measures $63$ km"}
:::

:::esempio{titolo="A fraction of what remains"}
From a sack containing $30$ kg of potatoes, $\dfrac{1}{3}$ is used, and then $\dfrac{1}{4}$ of what remains is used. After the first portion is taken out, $\dfrac{2}{3}$ of the sack remains, that is, $\dfrac{30}{3} \cdot 2 = 20$ kg. The second portion is $\dfrac{1}{4}$ of $20$ kg, or $5$ kg, so $20 - 5 = 15$ kg remains at the end.

The calculation is the same using fractions. After the second portion is taken out, $\dfrac{3}{4}$ of $\dfrac{2}{3}$ of the sack remains, and $\dfrac{3}{4} \cdot \dfrac{2}{3} = \dfrac{6}{12} = \dfrac{1}{2}$. Half of $30$ kg is $15$ kg.
:::

:::attenzione
In the potato example, the second fraction refers to what remains rather than to the entire sack, so the two fractions cannot be added. Adding them would give $\dfrac{1}{3} + \dfrac{1}{4} = \dfrac{7}{12}$ of the sack, or $17.5$ kg used and $12.5$ kg left, whereas the actual amount left is $15$ kg.
:::

## Rational numbers and expressions

:::definizione{#numeri-razionali titolo="Rational numbers"}
A **rational number** is a number that can be written as a fraction $\dfrac{a}{b}$, where $a$ and $b$ are integers and $b \neq 0$. The set of rational numbers is denoted by $\mathbb{Q}$. Equivalent fractions represent the same rational number, so $\dfrac{1}{2}$, $\dfrac{2}{4}$, and $\dfrac{-3}{-6}$ are three ways of writing the same number.

Every integer is rational, since, for example, $5 = \dfrac{5}{1}$ and $-2 = \dfrac{-2}{1}$. Therefore the set $\mathbb{Q}$ contains the set $\mathbb{Z}$ of integers, which in turn contains the set $\mathbb{N}$ of natural numbers. In $\mathbb{Q}$, division by a nonzero number always gives a rational number, whereas in $\mathbb{Z}$, the division $3 : 4$ does not give an integer.

Every rational number corresponds to a point on the number line. Negative numbers lie to the left of $0$, and of two numbers the greater one is farther to the right.

::grafico{assi=0 uguale=1 linee="-2.4,0 2.5,0;2.42,0.06 2.5,0 2.42,-0.06;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1" punti="-1.5,0,pieno,A;-0.6667,0,pieno,B;1.25,0,pieno,C" etichette="-2.08,-0.36,−2;-1.08,-0.36,−1;-0.03,-0.36,0;0.97,-0.36,1;1.97,-0.36,2" xmin=-2.6 xmax=2.6 ymin=-0.55 ymax=0.45 titolo="The rational numbers $A = -\dfrac{3}{2}$, $B = -\dfrac{2}{3}$, and $C = \dfrac{5}{4}$ on the number line, so $-\dfrac{3}{2} < -\dfrac{2}{3} < \dfrac{5}{4}$"}

:::

:::teorema{#espressioni-con-frazioni titolo="Expressions with fractions"}
Expressions with fractions follow the same order of operations as expressions with integers. We first evaluate expressions inside parentheses, then inside brackets, and finally inside braces. In an expression without grouping symbols, we evaluate powers first, then multiply and divide in the order in which the operations appear, and finally add and subtract. We reduce each intermediate result to lowest terms to keep the numbers small.

For example,
$$
\begin{aligned}
\left( \frac{1}{2} + \frac{1}{4} \right) \cdot \frac{8}{9} - \frac{1}{3}
&= \frac{3}{4} \cdot \frac{8}{9} - \frac{1}{3} \\[6pt]
&= \frac{2}{3} - \frac{1}{3} \\[6pt]
&= \frac{1}{3} .
\end{aligned}
$$
The sum in parentheses is $\dfrac{2}{4} + \dfrac{1}{4} = \dfrac{3}{4}$. In the product $\dfrac{3}{4} \cdot \dfrac{8}{9}$, we can cross-cancel $3$ with $9$ and $4$ with $8$, giving $\dfrac{1 \cdot 2}{1 \cdot 3} = \dfrac{2}{3}$.
:::

:::esempio{titolo="An expression with powers and brackets"}
$$
\begin{aligned}
\left[ \left( \frac{2}{3} \right)^2 \cdot \frac{3}{2} - \frac{1}{6} \right] : \frac{5}{4}
&= \left[ \frac{4}{9} \cdot \frac{3}{2} - \frac{1}{6} \right] : \frac{5}{4} \\[6pt]
&= \left[ \frac{2}{3} - \frac{1}{6} \right] : \frac{5}{4} \\[6pt]
&= \frac{1}{2} : \frac{5}{4} \\[6pt]
&= \frac{1}{2} \cdot \frac{4}{5} = \frac{2}{5} .
\end{aligned}
$$
Inside the brackets, we first evaluate the power, $\left( \dfrac{2}{3} \right)^2 = \dfrac{4}{9}$, then the product $\dfrac{4}{9} \cdot \dfrac{3}{2} = \dfrac{12}{18} = \dfrac{2}{3}$, and finally the difference $\dfrac{4}{6} - \dfrac{1}{6} = \dfrac{3}{6} = \dfrac{1}{2}$. Dividing by $\dfrac{5}{4}$ becomes multiplying by its reciprocal $\dfrac{4}{5}$.
:::

:::attenzione
We perform consecutive divisions from left to right. Changing the order changes the result. For example,
$$
\frac{1}{2} : \frac{1}{4} : 2 = 2 : 2 = 1 ,
$$
whereas performing the second division first would give $\dfrac{1}{2} : \dfrac{1}{8} = 4$.
:::
