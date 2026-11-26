---
titolo: "Calculations, proportions, and percentages"
sommario: "Using fractions, ratios, proportions, and percent changes to compare quantities, measurements, and concentrations."
---

## Fractions and the reference whole

:::definizione{#frazioni titolo="Fraction"}
For two integers $a$ and $b$ with $b>0$, the **fraction** $\dfrac{a}{b}$ represents the quotient of $a$ and $b$. The denominator $b$ determines how many equal parts make up one whole. The numerator $a$ tells how many of those parts are taken and gives their sign. For example, $\dfrac{3}{8}$ represents three one-eighth parts, while $-\dfrac{3}{8}$ represents the opposite number.

The whole may be a liter, a time interval, or an entire sample. If the sample has a mass of $240\,\mathrm{g}$, each eighth has a mass of $30\,\mathrm{g}$. Consequently, three-eighths of the sample has a mass of $90\,\mathrm{g}$. The fraction itself has no units. Multiplying it by the mass of the sample gives the mass of the portion.
:::

:::definizione{#equivalenza-frazioni titolo="Equivalent fractions"}
Two fractions are **equivalent** if they represent the same number. Multiplying the numerator and denominator by the same positive integer $k$ gives
$$
\frac{a}{b}=\frac{ka}{kb}.
$$
Each part is then smaller by a factor of $k$, and the number of parts taken is larger by a factor of $k$. The number of parts times the size of each part stays the same. The same equality allows us to simplify a fraction by dividing its numerator and denominator by a common positive divisor.

For example, $\dfrac{8}{12}=\dfrac{2}{3}$, since $8=4\cdot2$ and $12=4\cdot3$. The second fraction is in lowest terms because the only positive divisor common to $2$ and $3$ is $1$. A fraction in lowest terms is easier to compare with a familiar fraction.
:::

:::esempio{titolo="Two-thirds and four-sixths of the same volume"}
A graduated container has a capacity of $600\,\mathrm{mL}$. Filling it two-thirds full means taking two portions of $200\,\mathrm{mL}$. If we divide the capacity into sixths, each portion is $100\,\mathrm{mL}$. It then takes four portions to reach the same level.
$$
2\cdot200\,\mathrm{mL}=4\cdot100\,\mathrm{mL}=400\,\mathrm{mL}.
$$

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=6.8 ymin=-0.3 ymax=3.4 poligoni="0,2 4,2 4,2.6 0,2.6;0,0.5 4,0.5 4,1.1 0,1.1" linee="0,2 6,2 6,2.6 0,2.6 0,2;2,2 2,2.6;4,2 4,2.6;0,0.5 6,0.5 6,1.1 0,1.1 0,0.5;1,0.5 1,1.1;2,0.5 2,1.1;3,0.5 3,1.1;4,0.5 4,1.1;5,0.5 5,1.1" etichette="2,3,Two-thirds;2,1.45,Four-sixths" titolo="The same portion of a container of capacity $600\,\mathrm{mL}$ is shown using thirds and then sixths."}
:::

## Comparing fractions

::::teorema{#confronto-frazioni titolo="Comparing fractions with positive denominators"}
Let $\dfrac{a}{b}$ and $\dfrac{c}{d}$ be two fractions with $b,d>0$. Then
$$
\frac{a}{b}<\frac{c}{d}
\quad\Longleftrightarrow\quad
ad<bc.
$$
The same equivalence holds with the signs $=$ and $>$. Comparing the products lets us order the fractions using only integers.

:::dimostrazione
Rewrite the fractions with the common denominator $bd$. The first becomes $\dfrac{ad}{bd}$ and the second $\dfrac{bc}{bd}$. Since $bd$ is positive, multiplying both sides of the inequality by $bd$ preserves their order. The inverse operation divides both sides by $bd$, which is also positive. This establishes the equivalence.
:::
::::

:::esempio{titolo="Seven-tenths and two-thirds"}
To compare $\dfrac{7}{10}$ with $\dfrac{2}{3}$, we can express both in thirtieths. Seven-tenths equals twenty-one thirtieths, while two-thirds equals twenty thirtieths. Since twenty-one is greater than twenty,
$$
\frac{7}{10}=\frac{21}{30}>\frac{20}{30}=\frac{2}{3}.
$$
The two fractions differ by one-thirtieth. If they refer to two samples of $300\,\mathrm{g}$ each, the corresponding portions differ by $10\,\mathrm{g}$.
:::

:::esempio{titolo="Signed fractions"}
Numbers increase to the right on the number line. Since $\dfrac{5}{6}>\dfrac{2}{3}$, taking the opposites reverses the order. We can check the same comparison by writing $-\dfrac{2}{3}=-\dfrac{4}{6}$ and comparing the numerators $-5$ and $-4$. The result is
$$
-\frac{5}{6}<-\frac{2}{3}<0<\frac{2}{3}<\frac{5}{6}.
$$
This ordering is useful, for example, when a position is expressed as a negative coordinate relative to an origin.

::grafico{assi=0 uguale=1 xmin=-1.23 xmax=1.42 ymin=-0.32 ymax=0.34 vettori="-1.13,0,1.21,0,x" punti="-0.833333333333,0;-0.666666666667,0;0,0;0.666666666667,0;0.833333333333,0" etichette="-0.88,0.14,A;-0.61,-0.16,B;0,-0.16,0;0.60,0.14,C;0.88,-0.16,D" titolo="The points $A$, $B$, $C$, and $D$ represent $-\dfrac{5}{6}$, $-\dfrac{2}{3}$, $\dfrac{2}{3}$, and $\dfrac{5}{6}$ on the number line."}
:::

:::attenzione{titolo="How the reference whole affects a comparison"}
Comparing two fractions is insufficient to compare the quantities they represent if the reference whole changes. For example, $\dfrac{3}{4}$ of a $80\,\mathrm{g}$ sample equals $60\,\mathrm{g}$, whereas $\dfrac{2}{3}$ of a $120\,\mathrm{g}$ sample equals $80\,\mathrm{g}$. Thus the first fraction is greater than the second, yet it represents the smaller quantity in these samples.
:::

:::esempio{titolo="Comparing a fraction with a decimal"}
Sample A has a mass fraction of $\dfrac{3}{20}$ and sample B a mass fraction of $0.16$. Since $0.16$ is sixteen hundredths, we can write both fractions with a denominator of one hundred. This gives $\dfrac{3}{20}=\dfrac{15}{100}<\dfrac{16}{100}$. Sample B has the greater mass fraction.

The difference between the two fractions is $\dfrac{1}{100}$. Two samples of $500\,\mathrm{g}$ each, one of each composition, therefore contain masses of the component that differ by $5\,\mathrm{g}$. If the samples have different masses, first multiply each fraction by its own sample mass and then find the difference between the component masses.
:::

## Sums and differences

:::definizione{#somma-frazioni titolo="Common denominator"}
To add or subtract fractions, we must count parts of equal size. For fractions with positive denominators $b$ and $d$, one common denominator is $bd$. Rewriting both fractions with this denominator gives
$$
\begin{aligned}
\frac{a}{b}+\frac{c}{d}&=\frac{ad+bc}{bd},\\[6pt]
\frac{a}{b}-\frac{c}{d}&=\frac{ad-bc}{bd}.
\end{aligned}
$$
Any common multiple of the denominators gives the same result. The least common multiple often reduces the number of steps by keeping the intermediate numerators smaller.
:::

:::esempio{titolo="One-half plus one-third"}
The two portions refer to the same whole. Since the least common multiple of $2$ and $3$ is $6$, one-half equals three-sixths and one-third equals two-sixths. Therefore,
$$
\begin{aligned}
\frac{1}{2}+\frac{1}{3}
&=\frac{3}{6}+\frac{2}{6}\\[6pt]
&=\frac{5}{6}.
\end{aligned}
$$
If the whole is one liter, adding one-third of a liter to half a liter gives five-sixths of a liter. The sum is less than one liter because the sixth portion remains empty.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=6.7 ymin=-0.5 ymax=1.9 poligoni="0,0 3,0 3,0.7 0,0.7;3,0 5,0 5,0.7 3,0.7" linee="0,0 6,0 6,0.7 0,0.7 0,0;1,0 1,0.7;2,0 2,0.7;3,0 3,0.7;4,0 4,0.7;5,0 5,0.7" etichette="1.4,1.05,One-half;3.95,1.05,One-third;5.5,-0.25,Empty" titolo="Three-sixths and two-sixths together occupy five of the six equal parts."}
:::

:::esempio{titolo="Signed displacements"}
A slider moves $\dfrac{7}{10}\,\mathrm{m}$ along a straight track in the positive direction and then $\dfrac{3}{4}\,\mathrm{m}$ in the opposite direction. The net displacement is the signed sum. The common denominator is $20$, so
$$
\begin{aligned}
\Delta x
&=\left(\frac{7}{10}-\frac{3}{4}\right)\,\mathrm{m}\\[6pt]
&=\left(\frac{14}{20}-\frac{15}{20}\right)\,\mathrm{m}\\[6pt]
&=-\frac{1}{20}\,\mathrm{m}.
\end{aligned}
$$
The negative sign indicates the direction of the net displacement. To find the distance traveled, add the lengths of the two segments. In this example the distance is $\dfrac{29}{20}\,\mathrm{m}$.
:::

:::osservazione{titolo="Exact simplification and rounding"}
Simplifying a fraction preserves its value. Rounding a decimal generally changes its value. For example, $\dfrac{5}{12}$ is exactly equal to $\dfrac{10}{24}$, while $0.42$ is an approximation. In a multistep calculation, we can keep the exact value until the last line. The rounding error then affects only the result expressed with the required number of digits.
:::

:::attenzione{titolo="Adding parts and finding the overall fraction"}
Adding numerators and denominators separately does not give the sum of two fractions. For example, $\dfrac{1}{2}+\dfrac{1}{3}$ equals $\dfrac{5}{6}$, whereas $\dfrac{1+1}{2+3}=\dfrac{2}{5}$. The second expression answers a different question. If we take one ball from a group of two and one from a group of three, we select two balls out of five in all. In that case we compare the total number selected with the total number available. To add one-half and one-third of the same whole, we express both portions using the same subdivision of the whole.
:::

## Products and quotients

:::definizione{#operazioni titolo="Product and quotient of fractions"}
For $b,d>0$, the product is
$$
\frac{a}{b}\cdot\frac{c}{d}=\frac{ac}{bd}.
$$
If $c\ne0$ also holds, the quotient is
$$
\frac{a}{b}:\frac{c}{d}=\frac{a}{b}\cdot\frac{d}{c}=\frac{ad}{bc}.
$$
The **reciprocal** of $\dfrac{c}{d}$ is $\dfrac{d}{c}$, since their product is $1$. Division asks which number, when multiplied by the divisor, gives the dividend. Multiplying the dividend by the reciprocal gives precisely that number.
:::

:::esempio{titolo="A fraction of a portion"}
A rectangular tray has an area of $240\,\mathrm{cm^2}$. A strip occupies three-quarters of its width. Two-thirds of the height of this strip is covered. Since the width and height of the covered rectangle are the indicated fractions of the original dimensions, its area is
$$
\begin{aligned}
A
&=\frac{3}{4}\cdot\frac{2}{3}\cdot240\,\mathrm{cm^2}\\[6pt]
&=\frac{1}{2}\cdot240\,\mathrm{cm^2}
=120\,\mathrm{cm^2}.
\end{aligned}
$$

::grafico{assi=0 uguale=1 xmin=-0.45 xmax=4.85 ymin=-0.45 ymax=3.65 poligoni="0,0 3,0 3,2 0,2" linee="0,0 4,0 4,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;0,1 4,1;0,2 4,2" etichette="1.45,3.28,Three of four columns;1.44,0.45,Covered portion" titolo="The covered portion contains six of the twelve rectangles of equal area."}
:::

:::esempio{titolo="Whole portions and the remainder"}
A container holds $\dfrac{3}{4}\,\mathrm{L}$. Each portion requires $\dfrac{1}{5}\,\mathrm{L}$. Dividing the available volume by the volume per portion gives
$$
\begin{aligned}
\frac{\frac{3}{4}\,\mathrm{L}}{\frac{1}{5}\,\mathrm{L}}
&=\frac{3}{4}\cdot5
=\frac{15}{4}.
\end{aligned}
$$
The value lies between $3$ and $4$, so there are three whole portions. To find the remainder, subtract the volume of the three portions from the initial volume.
$$
\begin{aligned}
V_{\mathrm{avanzo}}
&=\left(\frac{3}{4}-3\cdot\frac{1}{5}\right)\,\mathrm{L}\\[6pt]
&=\left(\frac{15}{20}-\frac{12}{20}\right)\,\mathrm{L}
=\frac{3}{20}\,\mathrm{L}.
\end{aligned}
$$
The initial ratio is dimensionless. The remainder is a volume, so it is expressed in liters.
:::

:::osservazione{titolo="Common factors in products"}
In a product of fractions, a factor common to a numerator and a denominator can be canceled, even if they belong to different fractions. For example,
$$
\begin{aligned}
\frac{14}{15}\cdot\frac{25}{21}
&=\frac{2\cdot7\cdot5\cdot5}{3\cdot5\cdot3\cdot7}\\[6pt]
&=\frac{2\cdot5}{3\cdot3}
=\frac{10}{9}.
\end{aligned}
$$
Cancellation is possible because the product can be written as a single fraction. In this form, both numerator and denominator are products. Factoring also helps us check the result by estimation. Here the first factor is slightly less than $1$ and the second is close to $1.2$. As expected, the calculated product lies between $1$ and $1.2$.
:::

## Ratios and proportions

:::definizione{#rapporto-unitario titolo="Ratio and rate per unit"}
The **ratio** of a quantity $a$ to a nonzero quantity $b$ is written $\dfrac{a}{b}$. If both have the same unit and are expressed in that unit, it cancels. For example, $\dfrac{50\,\mathrm{mL}}{200\,\mathrm{mL}}=\dfrac{1}{4}$ tells us that $50\,\mathrm{mL}$ is one-quarter of $200\,\mathrm{mL}$.

If the quantities are of different kinds, the ratio retains a compound unit. An object moving uniformly over $18\,\mathrm{m}$ in $6\,\mathrm{s}$ has speed $3\,\mathrm{m/s}$. The number $3$ gives the meters traveled in one second. Since the speed is constant, multiplying this distance per unit time by the duration gives the distance traveled over the interval.
:::

::::teorema{#proporzioni titolo="Cross-product property of proportions"}
For real numbers $a,b,c,d$ with $b,d\ne0$, the **proportion** $\dfrac{a}{b}=\dfrac{c}{d}$ is equivalent to the equality $ad=bc$. This property allows us to find an unknown when two ratios describe the same relationship.

:::dimostrazione
Multiplying both sides of the proportion by $bd$ gives $ad$ on the left and $bc$ on the right. Since $b,d\ne0$, we can also divide both sides of $ad=bc$ by $bd$ to recover the proportion. The two conditions are therefore equivalent.
:::
::::

:::esempio{titolo="Two samples from the same solution"}
A homogeneous solution contains $4\,\mathrm{g}$ of solute in $200\,\mathrm{mL}$. Homogeneity ensures that the ratio of solute mass to volume is the same in every sample. Let $m$ denote the mass of solute in $50\,\mathrm{mL}$. Then
$$
\begin{aligned}
\frac{m}{50\,\mathrm{mL}}&=\frac{4\,\mathrm{g}}{200\,\mathrm{mL}},\\[6pt]
m&=4\,\mathrm{g}\cdot\frac{50\,\mathrm{mL}}{200\,\mathrm{mL}}
=1\,\mathrm{g}.
\end{aligned}
$$
The sample has one-quarter of the stated volume, so it contains one-quarter of the mass of solute. The point with horizontal coordinate $50$ and vertical coordinate $1$ lies on the same line as the point with horizontal coordinate $200$ and vertical coordinate $4$.

::grafico{f="x/50" xmin=0 xmax=249.9 ymin=0 ymax=5.2 nomi="V,m" punti="50,1;200,4" segmenti="50,0,50,1;0,1,50,1;200,0,200,4;0,4,200,4" etichette="57,0.81,(50, 1);153,4.16,(200, 4)" legenda="m=\dfrac{V}{50}" titolo="Solute mass in grams as a function of solution volume in milliliters."}
:::

:::attenzione{titolo="A changing ratio requires a different model"}
A ratio measured in a single case does not establish that two quantities are directly proportional. For example, a sensor records $5\,\mathrm{cm}$ at $t=0\,\mathrm{s}$ and $11\,\mathrm{cm}$ at $t=3\,\mathrm{s}$. If position increases uniformly, the increase is $2\,\mathrm{cm}$ per second. When the time doubles from $3$ to $6\,\mathrm{s}$, the position reaches $17\,\mathrm{cm}$ rather than $22\,\mathrm{cm}$. It is the change in position relative to $5\,\mathrm{cm}$ that doubles.
:::

:::esempio{titolo="Direct and inverse proportion"}
A liquid occupies a volume of $12\,\mathrm{L}$. If we divide it among six identical containers and fill them to the same level, each holds $2\,\mathrm{L}$. With eight containers, the volume per container is $\dfrac{12}{8}\,\mathrm{L}=1.5\,\mathrm{L}$. The number of containers times the volume per container remains constant. The ratio of these quantities changes, so the relationship is inverse.

Conversely, if each container must always hold $2\,\mathrm{L}$, increasing the number of containers increases the total volume. The ratio of total volume to number of containers is then always $2\,\mathrm{L}$ per container. Before setting up a proportion, identify which quantity the problem holds fixed.
:::

## Percentages and reference values

:::definizione{#percentuali titolo="Percentage and fraction of the base"}
The **percentage** $p\%$ is the number $\dfrac{p}{100}$. Given a base $B>0$, the corresponding part is $A=\dfrac{p}{100}B$. Conversely, if the part and the base are known, divide the former by the latter and express the ratio in hundredths. The base is the quantity that represents the reference total.

In a mixture, the mass percentage compares the mass of a component with the mass of the entire mixture. In a solution containing only one solute and one solvent, the total mass is the sum of their masses. Therefore, if the masses are given separately, add them before calculating the ratio.
:::

:::esempio{titolo="The same solute mass with two different totals"}
A $100\,\mathrm{g}$ solution and a $25\,\mathrm{g}$ solution each contain $5\,\mathrm{g}$ of solute. Their mass fractions are
$$
\frac{5\,\mathrm{g}}{100\,\mathrm{g}}=\frac{5}{100}=5\%,
\qquad
\frac{5\,\mathrm{g}}{25\,\mathrm{g}}=\frac{20}{100}=20\%.
$$
The solute has the same mass in both cases. The second solution has one-quarter of the total mass, so its mass fraction is four times as large.

::grafico{assi=0 uguale=1 xmin=-5 xmax=106 ymin=-6 ymax=46 poligoni="0,28 5,28 5,34 0,34;0,8 5,8 5,14 0,14" linee="0,28 100,28 100,34 0,34 0,28;5,28 5,34;0,8 25,8 25,14 0,14 0,8;5,8 5,14" etichette="24,38,Total 100 g;27,11,Total 25 g;8,3,Shaded: 5 g of solute" titolo="On a common scale, the shaded portions have equal lengths, while the two totals have different lengths."}
:::

:::esempio{titolo="Finding the base from the part"}
In a solution, $18\,\mathrm{g}$ of solute accounts for $12\%$ by mass. Let $B$ be the total mass. The given percentage means that twelve hundredths of $B$ equals $18\,\mathrm{g}$. The factor $\dfrac{12}{100}$ is positive, so we can divide by it.
$$
\begin{aligned}
\frac{12}{100}B&=18\,\mathrm{g},\\[6pt]
B&=18\,\mathrm{g}\cdot\frac{100}{12}=150\,\mathrm{g}.
\end{aligned}
$$
The mass of the solvent is $150\,\mathrm{g}-18\,\mathrm{g}=132\,\mathrm{g}$ if the solution contains only the solute and the solvent. This subtraction therefore starts from the total mass just calculated.
:::

::::teorema{#frazione-dal-rapporto titolo="Fraction of the total from the ratio of two components"}
A binary mixture contains two components with masses $a>0$ and $b>0$, whose ratio is $\dfrac{a}{b}=\dfrac{h}{k}$ with $h,k>0$. The mass fraction of the first component is then
$$
\frac{a}{a+b}=\frac{h}{h+k}.
$$
This result applies when a problem gives the ratio of solute to solvent in place of the composition. For example, if the ratio of solute to solvent is $\dfrac{3}{17}$, the solute makes up $\dfrac{3}{3+17}=\dfrac{3}{20}$ of the total mass, or $15\%$.

:::dimostrazione
Express the total mass in terms of $b$. The proportion gives $a=\dfrac{h}{k}\,b$, so $a+b=\dfrac{h}{k}\,b+b=\dfrac{h+k}{k}\,b$. The total is positive, so dividing $a$ by $a+b$ gives
$$
\frac{a}{a+b}=\frac{\frac{h}{k}\,b}{\frac{h+k}{k}\,b}=\frac{h}{h+k}.
$$
In the last step, the factors $b$ and $\dfrac{1}{k}$ were canceled. Both are nonzero.
:::
::::

:::attenzione{titolo="Ratio of the components and fraction of the total"}
If the ratio of solute mass to solvent mass in a binary mixture is $\dfrac{2}{3}$, the total mass corresponds to five parts. The solute therefore represents $\dfrac{2}{5}=40\%$ of the total. The denominator of the fraction $\dfrac{2}{3}$ is the mass of the solvent alone.
:::

:::osservazione{titolo="Complementary percentages and percentages greater than one hundred"}
If a material consists of just two substances, their mass fractions add up to $1$. Consequently, if the first substance accounts for $37\%$ of the total mass, the second accounts for $63\%$. We can add the percentages because their denominator is the same total mass.

A percentage can exceed one hundred if the quantity being compared is greater than its base. For example, a $120\,\mathrm{g}$ sample has a mass equal to $150\%$ of the mass of a $80\,\mathrm{g}$ sample. Here we compare the masses of two different objects. When we compare a component with its own mixture, the mass of the part is less than or equal to the total, so the percentage lies between zero and one hundred.
:::

## Percent changes

:::definizione{#variazioni titolo="Relative change and multiplicative factor"}
If $x_0>0$ is the initial value and $x_1$ the final value in the same unit, the **relative change** is $r=\dfrac{x_1-x_0}{x_0}$. Expressed as a percentage, it is $(100r)\%$. A positive sign indicates an increase and a negative sign a decrease. The identity $x_1-x_0=rx_0$ gives $x_1=x_0(1+r)$. The number $1+r$ is the multiplicative factor for the change.

An increase of $p\%$ corresponds to a factor of $1+\dfrac{p}{100}$. A decrease of $p\%$ corresponds to a factor of $1-\dfrac{p}{100}$. These factors multiply the full starting value. To obtain the change alone, in the units of the quantity, multiply the starting value by $r$.
:::

:::esempio{titolo="Changes calculated from successive base values"}
A tank holds $100\,\mathrm{L}$. The volume increases by $20\%$ and then decreases by $20\%$ of the value reached. The first factor is $\dfrac{6}{5}$ and the second is $\dfrac{4}{5}$. Since the second factor applies to the intermediate value, the result is
$$
\begin{aligned}
V_1&=100\,\mathrm{L}\cdot\frac{6}{5}=120\,\mathrm{L},\\[6pt]
V_2&=120\,\mathrm{L}\cdot\frac{4}{5}=96\,\mathrm{L}.
\end{aligned}
$$
The second step subtracts $24\,\mathrm{L}$ because its reference value is $120\,\mathrm{L}$. The overall change is $\dfrac{96-100}{100}=-\dfrac{4}{100}$, so the final volume is $4\%$ lower than the initial volume.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=3.55 ymin=-0.4 ymax=4.75 vettori="-0.2,0,3.35,0;-0.2,0,-0.2,4.55" unicolore=1 punti="0,2;1.4,4;2.8,1.6" linee="0,2 1.4,4 2.8,1.6" segmenti="-0.2,1,3.1,1;-0.2,2,3.1,2;-0.2,3,3.1,3;-0.2,4,3.1,4" etichette="-0.58,0,80;-0.58,1,90;-0.62,2,100;-0.62,3,110;-0.62,4,120;-0.18,4.61,V (L);-0.10,-0.27,Start;1.27,-0.27,Increase;2.52,-0.27,Decrease;2.94,1.58,96 L" titolo="The vertical scale starts at $80\,\mathrm{L}$. The segments connect the three calculated volumes."}
:::

::::teorema{#variazioni-successive titolo="Combining two percent changes"}
An initial value $x_0>0$ undergoes a relative change $r_1$, with $r_1>-1$, and then a relative change $r_2$ based on the value reached. The assumption $r_1>-1$ ensures that the intermediate value is positive and can serve as the base. The final value is $x_2=x_0(1+r_1)(1+r_2)$, and the overall relative change is
$$
r=r_1+r_2+r_1r_2.
$$
This formula gives the overall change without requiring the initial value. For example, an increase of $20\%$ followed by a decrease of $20\%$ gives $r=\dfrac{1}{5}-\dfrac{1}{5}-\dfrac{1}{25}=-\dfrac{4}{100}$, a decrease of $4\%$ for any initial value. When $r_1$ and $r_2$ are both nonzero, the term $r_1r_2$ is nonzero, so the overall change differs from the sum $r_1+r_2$.

:::dimostrazione
Apply the definition of the multiplicative factor twice. The first step gives $x_1=x_0(1+r_1)$, which is positive because $x_0>0$ and $1+r_1>0$. The second step uses $x_1$ as its base, so $x_2=x_1(1+r_2)=x_0(1+r_1)(1+r_2)$. Since $x_0>0$, dividing by $x_0$ gives
$$
\begin{aligned}
r&=\frac{x_2-x_0}{x_0}=(1+r_1)(1+r_2)-1\\[6pt]
&=1+r_1+r_2+r_1r_2-1\\[6pt]
&=r_1+r_2+r_1r_2.
\end{aligned}
$$
:::
::::

:::esempio{titolo="A decrease that reverses an increase"}
A measurement rises from $40$ to $50$. The relative increase is $\dfrac{50-40}{40}=\dfrac{1}{4}$, so the percent increase is $25\%$. To return to $40$, we must subtract $10$ starting from $50$. The relative decrease is therefore $\dfrac{10}{50}=\dfrac{1}{5}$, or $20\%$. In terms of factors, $\dfrac{5}{4}\cdot\dfrac{4}{5}=1$. To reverse a change with a positive factor, the next factor must be its reciprocal.
:::

:::osservazione{titolo="Percentage points and relative change"}
If the mass percentage rises from $10\%$ to $12\%$, the difference is two **percentage points**. Relative to the initial value, however, the change in the mass fraction is $\dfrac{12-10}{10}=\dfrac{1}{5}$, or $20\%$. Percentage points express the difference between the two levels. Percent change expresses the difference as a fraction of the first level.
:::

:::esempio{titolo="Finding the value before a decrease"}
After a loss of $15\%$, a mass is $68\,\mathrm{g}$. Since the final value is $85\%$ of the initial value, the multiplicative factor is $\dfrac{85}{100}$. The initial mass is
$$
\begin{aligned}
m_0
&=68\,\mathrm{g}\cdot\frac{100}{85}\\[6pt]
&=80\,\mathrm{g}.
\end{aligned}
$$
To check, use the original base. Taking $15\%$ of $80\,\mathrm{g}$ gives $12\,\mathrm{g}$, and subtracting this from $80\,\mathrm{g}$ gives $68\,\mathrm{g}$. Adding $15\%$ to $68\,\mathrm{g}$ would instead give $78.2\,\mathrm{g}$ because it would use the final value as the base.
:::

## Weighted averages and composition

:::definizione{#media titolo="Weighted average"}
For two values $x_1,x_2$ given in the same unit and two positive weights $w_1,w_2$ that share a common unit, the **weighted average** is
$$
\overline{x}=\frac{w_1x_1+w_2x_2}{w_1+w_2}.
$$
The weight determines how much each value contributes to the result. If the weights are equal, the result is the arithmetic mean. If one value has three times the weight of the other, it contributes three-quarters of the weight in the average. The average has the same unit as the values because the common unit of the weights cancels.
:::

:::esempio{titolo="Mixing two solutions"}
Mix $100\,\mathrm{mL}$ of a solution at $2\,\mathrm{g/L}$ with $300\,\mathrm{mL}$ of a solution of the same solute at $6\,\mathrm{g/L}$. Assume the volumes are additive and the solute is conserved. The volume ratio is $1$ to $3$. Therefore the first sample accounts for one-quarter of the final volume and the second for three-quarters.
$$
\begin{aligned}
c_f
&=\frac{1}{4}\cdot2\,\mathrm{g/L}
  +\frac{3}{4}\cdot6\,\mathrm{g/L}\\[6pt]
&=5\,\mathrm{g/L}.
\end{aligned}
$$
The final concentration is closer to $6\,\mathrm{g/L}$ because that sample has the greater volume. We can also add the solute masses in the two samples. Their volumes in liters are $0.1\,\mathrm{L}$ and $0.3\,\mathrm{L}$, so the solute masses are $0.2\,\mathrm{g}$ and $1.8\,\mathrm{g}$, respectively. The ratio of $2\,\mathrm{g}$ to $0.4\,\mathrm{L}$ confirms the result.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=4.5 ymin=-0.6 ymax=2.15 poligoni="1,0 4,0 4,0.8 1,0.8" linee="0,0 4,0 4,0.8 0,0.8 0,0;1,0 1,0.8" etichette="0.48,1.17,100 mL;2.50,1.17,300 mL;0.48,0.39,2 g/L;2.50,0.39,6 g/L" titolo="The widths represent the volumes. The higher concentration has three times the weight."}
:::

:::esempio{titolo="Finding the volume fraction from one sample"}
We want $200\,\mathrm{mL}$ of a mixture at $7\,\mathrm{g/L}$, starting from two solutions of the same solute at $4\,\mathrm{g/L}$ and $9\,\mathrm{g/L}$. Assume additive volumes and conservation of solute. Let $q$ be the fraction of the final volume supplied by the solution at $9\,\mathrm{g/L}$. The remaining fraction is $1-q$. Expressing the concentrations in grams per liter, the weighted average gives
$$
\begin{aligned}
7&=4(1-q)+9q\\[6pt]
 &=4+5q,\\[6pt]
q&=\frac{7-4}{9-4}=\frac{3}{5}.
\end{aligned}
$$
We therefore need $\dfrac{3}{5}\cdot200\,\mathrm{mL}=120\,\mathrm{mL}$ of the second solution and $80\,\mathrm{mL}$ of the first. The fraction can also be read from the concentration scale. The target is three units above the lower concentration in an interval five units wide.
:::

::::teorema{#intervallo-medie titolo="Range of a weighted average"}
Let $x_1\le x_2$ be two values and $w_1,w_2$ two positive weights. The weighted average lies in the interval from $x_1$ to $x_2$. If $x_1<x_2$, the average lies strictly between the two endpoints. This property rules out results incompatible with the mixture data.

:::dimostrazione
Let $q=\dfrac{w_2}{w_1+w_2}$ denote the relative weight of the second value. Since both weights are positive, $0<q<1$. We can write $\overline{x}=x_1+q(x_2-x_1)$. The difference $x_2-x_1$ is nonnegative, so multiplying it by $q$ gives a value between zero and the difference itself. Adding $x_1$ gives the stated interval, with strict inequalities if the difference is positive.
:::
::::

:::osservazione{titolo="Checking the required concentration"}
Given two solutions at $2\,\mathrm{g/L}$ and $7\,\mathrm{g/L}$, respectively, a mixture containing a positive volume of each has a concentration greater than $2\,\mathrm{g/L}$ and less than $7\,\mathrm{g/L}$ under the assumptions of the model. To obtain exactly $7\,\mathrm{g/L}$, we must use only the second sample. The total volume determines how much of each sample is needed, while the target concentration determines their ratio.
:::

:::attenzione{titolo="The weights depend on the conserved quantity"}
Calculate the mass percentage in a mixture by weighting the samples by mass. Calculate the mass concentration, expressed as mass per unit volume, by weighting the samples by volume if the volumes are additive and the solute mass is conserved. The arithmetic mean of the two concentrations in the example would be $4\,\mathrm{g/L}$, giving a value different from $5\,\mathrm{g/L}$. That calculation would assign the same weight to samples of different volumes.
:::
