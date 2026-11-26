---
titolo: Ratios, proportions, and percentages
sommario: Learn to calculate ratios and proportions, recognize direct and inverse variation, divide an amount proportionally, and solve problems involving percentages, discounts, increases, value-added tax, and successive changes.
---

## Ratios

:::definizione{#rapporto titolo="Ratio of two numbers"}
The **ratio** of two numbers $a$ and $b$, with $b \neq 0$, is the quotient $\dfrac{a}{b}$. It can also be written $a : b$ and read “$a$ to $b$.” The ratio tells how many times $a$ contains $b$, or what fraction of $b$ is represented by $a$. Multiplying or dividing both terms by the same nonzero number preserves the ratio, so it can be expressed in simplest form. In a group of $12$ men and $18$ women, the ratio of men to women is
$$
\frac{12}{18} = \frac{2}{3},
$$
so there are $2$ men for every $3$ women. The ratio of men to the total number of people is $\dfrac{12}{30} = \dfrac{2}{5}$. The two ratios differ, so the answer depends on which quantities are being compared.

::grafico{assi=0 uguale=1 poligoni="0,0 12,0 12,2 0,2" linee="0,0 30,0 30,2 0,2 0,0;12,0 12,2" etichette="6,0.8,12 men;21,0.8,18 women;15,3.2,30 people" xmin=-1 xmax=31 ymin=-1 ymax=4.5 titolo="In a group of $30$ people, the ratio of men to women is $\dfrac{12}{18} = \dfrac{2}{3}$, and the ratio of men to the total number of people is $\dfrac{12}{30} = \dfrac{2}{5}$"}

:::

:::esempio{titolo="Map scale"}
The **scale** of a map is the ratio of a distance on the map to the corresponding distance on the ground. On a map with scale $1 : 25\,000$, each centimeter on the map represents $25\,000$ centimeters on the ground, or $250$ meters. Two points $4$ cm apart on the map are therefore this far apart on the ground.
$$
4 \cdot 25\,000\ \text{cm} = 100\,000\ \text{cm} = 1\ \text{km} .
$$
To convert centimeters to kilometers, divide by $100\,000$ because $1$ km $= 1000$ m $= 100\,000$ cm.
:::

## Proportions

::::teorema{#proprieta-fondamentale titolo="Cross-product property"}
A **proportion** states that two ratios are equal,
$$
a : b = c : d ,
$$
where $a$ and $d$ are the **extremes** and $b$ and $c$ are the **means**. In every proportion, the product of the means equals the product of the extremes.
$$
a : b = c : d \iff a \cdot d = b \cdot c .
$$
This property can be used to find a missing term. In the proportion $3 : 4 = 15 : x$, we have $3 \cdot x = 4 \cdot 15$, so
$$
x = \frac{4 \cdot 15}{3} = 20 .
$$
To find a missing mean, multiply the extremes and divide by the other mean. To find a missing extreme, multiply the means and divide by the other extreme.

:::dimostrazione
The proportion states that $\dfrac{a}{b} = \dfrac{c}{d}$. Multiplying both sides by $b \cdot d$, which is nonzero, gives $a \cdot d = c \cdot b$. Conversely, if $a \cdot d = b \cdot c$, dividing both sides by $b \cdot d$ gives $\dfrac{a}{b} = \dfrac{c}{d}$.
:::
::::

:::teorema{#proprieta-del-comporre titolo="Addition property of proportions"}
If $a : b = c : d$, where $a$ and $c$ are nonzero, then
$$
(a + b) : a = (c + d) : c
\qquad\text{and}\qquad
(a + b) : b = (c + d) : d .
$$
Expanding the cross products proves this property. It helps when the ratio of two quantities and their sum are known. To divide $120$ into two shares $x$ and $y$ with $x : y = 3 : 5$, write $(x + y) : x = (3 + 5) : 3$, or $120 : x = 8 : 3$. This gives $x = \dfrac{120 \cdot 3}{8} = 45$, so $y = 120 - 45 = 75$. Counting equal parts gives the same result. Divide $120$ into $3 + 5 = 8$ equal parts of $15$ each. The share $x$ gets $3$ parts, and $y$ gets $5$.
:::

## Direct and inverse variation

:::definizione{#grandezze-direttamente-proporzionali titolo="Directly proportional quantities"}
Two quantities are **directly proportional** if their ratio is constant. Doubling one doubles the other, and tripling one triples the other. If $x$ and $y$ are directly proportional, then $y = k\,x$ for some constant $k$, and the graph of $y$ as a function of $x$ is a line through the origin. Examples include the weight of goods and their total price at a fixed price per unit, and distance and time at a constant speed. If $3$ kg of apples cost $7.50$ euros, one kilogram costs $2.50$ euros and $5$ kg cost $12.50$ euros.

::grafico{f="2.5*x+0*sqrt(x)" punti="3,7.5,pieno;5,12.5,pieno" segmenti="3,0,3,7.5;5,0,5,12.5" xmin=-1 xmax=7 ymin=-2 ymax=18 nomi="kg,€" legenda="y = 2.5\,x" titolo="Price as a function of weight at $2.50$ euros per kilogram. The graph is a line through the origin because the two quantities are directly proportional"}

:::

:::definizione{#grandezze-inversamente-proporzionali titolo="Inversely proportional quantities"}
Two quantities are **inversely proportional** if their product is constant. Doubling one halves the other. If $x$ and $y$ are inversely proportional, then $x \cdot y = k$ for some constant $k$, or $y = \dfrac{k}{x}$, and the graph is one branch of a hyperbola. Examples include the number of workers and the time needed to complete a fixed job at the same rate per worker, and speed and travel time over a fixed distance. If $6$ workers take $10$ days, the job requires $6 \cdot 10 = 60$ worker-days, so $4$ workers take $\dfrac{60}{4} = 15$ days.

::grafico{f="60/x+0*sqrt(x)" punti="4,15,pieno;6,10,pieno;10,6,pieno" xmin=-2 xmax=18 ymin=-4 ymax=36 nomi="x,y" legenda="y = \dfrac{60}{x}" titolo="Days of work $y$ as a function of the number of workers $x$ for a job requiring $60$ worker-days. The product of the two quantities is constant"}

:::

:::osservazione{#regola-del-tre titolo="The rule of three"}
When two quantities vary proportionally, three known values determine a fourth through a proportion. This method is called the **rule of three**.

- If the quantities are directly proportional, corresponding values have the same ratio. If $5$ notebooks cost $7.50$ euros, then $12$ notebooks cost $x$, where $5 : 7.50 = 12 : x$, giving $x = 18$ euros.
- If the quantities are inversely proportional, set the products equal. If $4$ identical faucets fill a tank in $6$ hours, then $3$ faucets fill it in $x$ hours, where $4 \cdot 6 = 3 \cdot x$, giving $x = 8$ hours.

Before calculating, decide which relationship applies by asking whether increasing one quantity increases or decreases the other. More faucets mean less time, so the result must be less than $6$ hours with more faucets and greater with fewer.
:::

## Proportional division

:::definizione{#ripartizione-diretta titolo="Dividing an amount in direct proportion"}
Dividing a quantity $S$ into shares **directly proportional** to the numbers $a$, $b$, and $c$ means splitting it into three shares $x$, $y$, and $z$ such that
$$
x : a = y : b = z : c
\qquad\text{and}\qquad
x + y + z = S .
$$
Divide $S$ by the sum $a + b + c$ to find the value of one part. Multiply by each number to get $x = \dfrac{S}{a + b + c} \cdot a$ and use the same method for $y$ and $z$. To divide $900$ euros in proportion to $2$, $3$, and $4$, calculate $\dfrac{900}{9} = 100$. The shares are $200$, $300$, and $400$ euros. To check, the shares must add up to $S$.

::grafico{assi=0 uguale=1 poligoni="2,0 5,0 5,2 2,2" linee="0,0 9,0 9,2 0,2 0,0;2,0 2,2;5,0 5,2" etichette="1,0.8,200 €;3.5,0.8,300 €;7,0.8,400 €;1,2.8,2 parts;3.5,2.8,3 parts;7,2.8,4 parts" xmin=-1 xmax=10 ymin=-1 ymax=4 titolo="$900$ euros divided in direct proportion to $2$, $3$, and $4$, using nine equal parts worth $100$ euros each"}

:::

:::definizione{#ripartizione-inversa titolo="Dividing an amount in inverse proportion"}
Dividing $S$ into shares **inversely proportional** to $a$, $b$, and $c$ means dividing it in direct proportion to the reciprocals $\dfrac{1}{a}$, $\dfrac{1}{b}$, and $\dfrac{1}{c}$. To avoid calculating with fractions, write the reciprocals with a common denominator and use their numerators. To divide $600$ euros in inverse proportion to $2$, $3$, and $6$, write the reciprocals with denominator $6$.
$$
\frac{1}{2} = \frac{3}{6},
\qquad
\frac{1}{3} = \frac{2}{6},
\qquad
\frac{1}{6} = \frac{1}{6},
$$
The shares are therefore directly proportional to $3$, $2$, and $1$. Since $\dfrac{600}{6} = 100$, the shares are $300$, $200$, and $100$ euros. The smallest of the original numbers gets the largest share.

::grafico{assi=0 uguale=1 poligoni="6,0 10,0 10,2 6,2" linee="0,0 12,0 12,2 0,2 0,0;6,0 6,2;10,0 10,2" etichette="3,0.8,300 €;8,0.8,200 €;10.3,0.8,100 €;3,2.6,number 2;8,2.6,number 3;10.5,2.6,number 6" xmin=-1 xmax=13 ymin=-1 ymax=4 titolo="$600$ euros divided in inverse proportion to $2$, $3$, and $6$. Of the six equal parts worth $100$ euros each, three go to $2$, two to $3$, and one to $6$"}

:::

## Percentages

:::definizione{#percentuale titolo="Percentage"}
A **percentage** is a ratio with denominator $100$. The notation $p\%$ means $\dfrac{p}{100}$. Thus $p\%$ of a number $N$ is
$$
\frac{p}{100} \cdot N .
$$
Given two of the three quantities $p$, $N$, and the part $P = \dfrac{p}{100} \cdot N$, a percentage problem asks for the third.

- $15\%$ of $80$ is $\dfrac{15}{100} \cdot 80 = 12$.
- $18$ is $p\%$ of $72$, where $p = \dfrac{18}{72} \cdot 100 = 25$, giving $25\%$.
- $30$ is $12\%$ of $N = \dfrac{30 \cdot 100}{12} = 250$.

All three formulas come from the proportion $P : N = p : 100$, solved for a different unknown each time.

::grafico{assi=0 uguale=1 poligoni="0,0 12,0 12,2 0,2" linee="0,0 80,0 80,2 0,2 0,0" etichette="6,3.2,12;40,0.8,80 (100%);6,-1.2,15%" xmin=-5 xmax=85 ymin=-2.5 ymax=4.5 titolo="$15\%$ of $80$ is the shaded part, $\dfrac{15}{100} \cdot 80 = 12$"}

:::

:::osservazione{#percentuali-e-frazioni titolo="Percentages and fractions"}
Recognizing the simple fractions that correspond to common percentages can shorten many calculations.
$$
50\% = \frac{1}{2},
\qquad
25\% = \frac{1}{4},
\qquad
20\% = \frac{1}{5},
\qquad
10\% = \frac{1}{10},
\qquad
12.5\% = \frac{1}{8},
\qquad
75\% = \frac{3}{4} .
$$
Thus $25\%$ of $360$ is $\dfrac{360}{4} = 90$. To find $10\%$ of a number, move the decimal point one place to the left. For $1\%$, move it two places. For example, $10\%$ of $345$ is $34.5$, and $1\%$ is $3.45$. Other percentages follow from these. For instance, $15\%$ is $10\%$ plus half as much again.
:::

## Increases, discounts, and VAT

:::teorema{#aumenti-e-sconti titolo="Percentage increases and discounts"}
An increase of $p\%$ multiplies a value by $1 + \dfrac{p}{100}$. A discount of $p\%$ multiplies it by $1 - \dfrac{p}{100}$.
$$
V_{\text{new}} = V \cdot \left( 1 + \frac{p}{100} \right),
\qquad
V_{\text{discounted}} = V \cdot \left( 1 - \frac{p}{100} \right) .
$$
Increasing $V$ by $p\%$ means adding to $V$ the amount $\dfrac{p}{100} \cdot V$. Factoring out $V$ gives the first formula. For a discount, subtract that amount. A price of $80$ euros increased by $15\%$ becomes $80 \cdot 1.15 = 92$ euros. A price of $45$ euros discounted by $20\%$ becomes $45 \cdot 0.8 = 36$ euros. The number you multiply by, such as $1.15$ or $0.8$, is the **multiplier**.

::grafico{f="1.2*x+0*sqrt(x);0.8*x+0*sqrt(x)" punti="50,60,pieno;50,40,pieno" segmenti="50,0,50,60" xmin=-10 xmax=90 ymin=-10 ymax=90 nomi="x,y" legenda="y = 1.2\,x;y = 0.8\,x" titolo="An increase of $20\%$ multiplies the price $x$ by $1.2$. A discount of $20\%$ multiplies it by $0.8$. A price of $50$ euros becomes $60$ euros or $40$ euros, respectively"}

:::

:::esempio{titolo="Adding and removing VAT"}
Value-added tax (VAT) is a percentage added to the price before tax, called the **taxable amount**. At a rate of $22\%$, a taxable amount of $150$ euros becomes
$$
150 \cdot 1.22 = 183 \text{ euros} .
$$
The reverse calculation, **removing VAT**, starts with the price including VAT and divides by the multiplier to find the taxable amount. A price of $244$ euros including VAT has a taxable amount of $\dfrac{244}{1.22} = 200$ euros and VAT of $44$ euros. Subtracting $22\%$ of the final price would give the wrong taxable amount because the $22\%$ rate applies to the price before tax. Subtracting $22\%$ of $244$ euros would give $190.32$ euros, which is incorrect.

::grafico{assi=0 uguale=1 poligoni="200,0 244,0 244,2 200,2" linee="0,0 244,0 244,2 0,2 0,0;200,0 200,2" etichette="100,0.8,taxable amount 200;222,3.2,VAT 44;122,-1.2,price including VAT 244" xmin=-10 xmax=254 ymin=-2.5 ymax=4.5 titolo="A price of $244$ euros including VAT at $22\%$. The taxable amount is $\dfrac{244}{1.22} = 200$ euros, and VAT calculated on that amount is $44$ euros"}

:::

## Percentage changes

:::definizione{#variazione-percentuale titolo="Percentage change"}
When a quantity changes from $V_1 > 0$ to $V_2$, its **percentage change** is
$$
\frac{V_2 - V_1}{V_1} \cdot 100\% .
$$
Always divide by the *initial* value. The percentage change is positive for an increase and negative for a decrease. A subscription that rises from $40$ to $46$ euros increases by $\dfrac{6}{40} \cdot 100\% = 15\%$. A price that falls from $64$ to $48$ euros decreases by $\dfrac{16}{64} \cdot 100\% = 25\%$.
:::

:::teorema{#variazioni-successive titolo="Successive percentage changes"}
When a value undergoes two successive percentage changes, multiply by both multipliers to find the final value.
$$
V_{\text{final}} = V \cdot \left( 1 \pm \frac{p}{100} \right) \cdot \left( 1 \pm \frac{q}{100} \right) .
$$
The second change applies to the value after the first change, so multiply the factors. Adding the percentages would use the wrong base. Successive discounts of $10\%$ and $20\%$ give the multiplier $0.9 \cdot 0.8 = 0.72$, for an overall discount of $28\%$ rather than $30\%$. A population that grows by $5\%$ for two consecutive years is multiplied by $1.05^{2} = 1.1025$, so its overall growth is $10.25\%$.
:::

:::attenzione
An increase and a decrease by the same percentage do *not* cancel each other out. A price of $100$ euros increased by $20\%$ becomes $120$ euros. A subsequent decrease of $20\%$ brings it to $120 \cdot 0.8 = 96$ euros because the second $20\%$ applies to $120$ instead of $100$. The overall multiplier is $1.2 \cdot 0.8 = 0.96$, so the final price is $4\%$ below the original price.

::grafico{assi=0 uguale=1 poligoni="0,4 100,4 100,5.4 0,5.4;0,2 120,2 120,3.4 0,3.4;0,0 96,0 96,1.4 0,1.4" etichette="50,4.5,100 euros (initial price);60,2.5,120 euros (after +20%);48,0.5,96 euros (after −20%)" xmin=-5 xmax=130 ymin=-1 ymax=6.5 titolo="A price of $100$ euros after an increase of $20\%$ followed by a decrease of $20\%$ is $100 \cdot 1.2 \cdot 0.8 = 96$ euros"}

:::

:::osservazione{#punti-percentuali titolo="Percentage points"}
When the quantity that changes is itself a percentage, such as an interest rate or an unemployment rate, distinguish the difference in **percentage points** from the percentage change. If the unemployment rate rises from $8\%$ to $10\%$, the difference is $2$ percentage points, while the percentage change is $\dfrac{10 - 8}{8} \cdot 100\% = 25\%$. Multiple-choice questions often include both figures as answer choices.
:::

## Shortcuts for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Calculating percentages mentally"}
On timed tests, three techniques can help you do many calculations mentally.

- **Break the percentage down** into easy parts. To find $15\%$ of $360$, split it into $10\%$ and $5\%$ of the same number. These are $36$ and $18$, which add to $54$.
- **Switch the numbers.** The value of $p\%$ of $q$ equals $q\%$ of $p$ because both equal $\dfrac{p \cdot q}{100}$. Thus $16\%$ of $25$ is $25\%$ of $16$, or $4$.
- **Estimate** before calculating. The value of $19.8\%$ of $4012$ is close to $20\%$ of $4000$, or $800$. Usually only one answer choice is close to the estimate. The others may be off by a factor of $10$ or reflect a common error, such as applying a discount to the wrong amount.

Check whether the result changes in the expected direction. A discounted price is below the initial price, a taxable amount is below the price including VAT, and more workers need less time to do the same job.
:::
