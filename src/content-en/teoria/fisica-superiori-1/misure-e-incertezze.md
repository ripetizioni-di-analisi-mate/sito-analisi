---
titolo: "Measurements, instruments, and uncertainties"
sommario: "Readings, repeated measurements, intervals, and propagation of uncertainty under explicit rules."
---

The result of a measurement is written with a number, an uncertainty and a unit, as in $l=(12.0\pm0.2)\,\mathrm{cm}$, which stands for a length between $11.8$ and $12.2$ centimetres. This chapter shows how to read an instrument, obtain the uncertainty from one or more readings, and calculate the uncertainty of a sum, product or quotient of measurements.

## Instruments and resolution

:::definizione{#strumenti titolo="Range, divisions, and readings"}
A quantity is a property expressed by a number and a unit, such as a length of $12\,\mathrm{cm}$ (the centimetre has the symbol $\mathrm{cm}$), a mass or a force. The value read on the instrument is called the **reading**.

Many instruments have a scale: a row of small lines, called marks, some of them numbered. The position on the scale is shown by a pointer, for example a needle. An instrument with a scale, such as a ruler, is called analogue; the part on which the scale is drawn is also called the dial. An instrument that shows digits on a display is called digital.

- The **range** is the set of values that the instrument measures. On a scale starting at zero it is stated as the largest value on the scale, the largest that can be measured: a ruler with a scale from $0$ to $30\,\mathrm{cm}$ has a range of $30\,\mathrm{cm}$.
- The **division**, also called the step of the scale, is the value of the space between two consecutive marks.
- The **resolution** is the smallest change in the quantity that the instrument distinguishes. On an analogue scale it normally equals one division.

A force meter is the instrument that measures forces, whose unit is the newton (symbol $\mathrm N$). On a force meter's scale, the marks numbered $2\,\mathrm N$ and $6\,\mathrm N$ are separated by eight equal spaces. Each space is therefore worth
$$
\frac{6\,\mathrm N-2\,\mathrm N}{8}=\frac{4\,\mathrm N}{8}=0.5\,\mathrm N.
$$
The division, and with it the resolution, is $0.5\,\mathrm N$. The count uses the spaces between the marks, which are one fewer than the marks: eight spaces are bounded by nine marks.
:::

:::osservazione{#criterio-lettura titolo="Resolution and assigned uncertainty"}
The pointer usually falls between two marks and its position is estimated by eye, so a reading is approximate. The **uncertainty** of a measurement states how far, at most, the value of the quantity lies from the reading. The part due to the instrument is called the **instrumental uncertainty**, or reading uncertainty.

Resolution is a property of the instrument. The instrumental uncertainty also depends on the rule chosen for the experiment; the set of these rules is called the **protocol**. Three rules are the most common.

- **Half a division**, the usual rule at school for analogue scales. On the scale in the figure, which has divisions of $0.5\,\mathrm N$, the uncertainty is $\dfrac{0.5\,\mathrm N}{2}=0.25\,\mathrm N$.
- **A full division.** On the same scale the uncertainty is $0.5\,\mathrm N$.
- **The value stated by the manufacturer** in the instrument's instructions. It also includes causes of uncertainty other than reading the scale.

For a digital instrument the resolution is one unit of the last digit on the display. A stopwatch that shows hundredths of a second (the second has the symbol $\mathrm s$) changes its reading in steps of $0.01\,\mathrm s$, so its resolution is $0.01\,\mathrm s$. The distance between the reading and the reference value is a different piece of information. If the manufacturer states an uncertainty of $0.03\,\mathrm s$, the uncertainty of the reading is $0.03\,\mathrm s$.

Calculations use the rule stated for the experiment.
:::

::grafico{assi=0 xmin=1.6 xmax=6.4 ymin=-0.8 ymax=1.1 linee="2,0 6,0;2,-0.12 2,0.12;2.5,-0.08 2.5,0.08;3,-0.12 3,0.12;3.5,-0.08 3.5,0.08;4,-0.12 4,0.12;4.5,-0.08 4.5,0.08;5,-0.12 5,0.12;5.5,-0.08 5.5,0.08;6,-0.12 6,0.12" etichette="2,0.35,2 N;4,0.35,4 N;6,0.35,6 N;2.25,-0.31,0.5 N" titolo="Eight equal intervals separate 2 N and 6 N"}

:::esempio{titolo="Reading without moving the zero"}
The length of a segment is the difference between the positions of its endpoints on the ruler, so it is measured starting from any mark. If the starting point is at the $1.2\,\mathrm{cm}$ mark and the endpoint at the $5.8\,\mathrm{cm}$ mark, the length is
$$
5.8\,\mathrm{cm}-1.2\,\mathrm{cm}=4.6\,\mathrm{cm}.
$$
Suppose now that the zero of the ruler is shifted: every position read exceeds the true one by the same amount, for example $0.1\,\mathrm{cm}$. A shift that is the same for all readings is called an **offset**. The true positions of the two endpoints are then $1.1$ and $5.7\,\mathrm{cm}$, and their difference is still $5.7-1.1=4.6\,\mathrm{cm}$. The offset is the same in both readings, so it cancels in the difference. This holds when both endpoints are read on the same ruler, kept still between the two readings.
:::

:::esempio{#scelta-strumento titolo="Choosing an instrument before taking a reading"}
A force expected to be between $8$ and $12\,\mathrm N$ is measured, with a reading uncertainty of at most $0.25\,\mathrm N$. The protocol assigns half a division. Two force meters are available.

| Force meter | Range | Division | Uncertainty (half a division) |
| --- | ---: | ---: | ---: |
| First | $10\,\mathrm N$ | $0.2\,\mathrm N$ | $0.1\,\mathrm N$ |
| Second | $20\,\mathrm N$ | $0.5\,\mathrm N$ | $0.25\,\mathrm N$ |

The two requirements, on the range and on the uncertainty, are independent. The range is checked first. The first force meter measures up to $10\,\mathrm N$, so forces between $10$ and $12\,\mathrm N$ are off its scale, even though its uncertainty is the smaller one. The second measures up to $20\,\mathrm N$ and covers all values between $8$ and $12\,\mathrm N$, as the figure shows.

The uncertainty is then compared with the required limit. The second force meter has an uncertainty of $0.25\,\mathrm N$, equal to the limit, so the requirement is met. The suitable instrument is the **second**.

::grafico{assi=0 xmin=-1 xmax=23 ymin=-0.7 ymax=3.2 linee="8,2.5 12,2.5;0,1.5 10,1.5;0,.5 20,.5" punti="8,2.5,pieno;12,2.5,pieno;10,1.5,pieno;20,.5,pieno" etichette="10,2.95,Expected values from 8 to 12 N;5,1.95,Scale 1 up to 10 N;10,.95,Scale 2 up to 20 N" titolo="Only the second scale covers the whole interval from 8 to 12 N"}
:::

## Repeated measurements

:::definizione{#ripetute titolo="Mean and half-range"}
When the same quantity is measured several times with the same instrument in the same way, the readings usually differ slightly. Consider three readings of a length, $9.8$, $10.0$ and $10.2\,\mathrm{cm}$.

The **arithmetic mean** is the sum of the readings divided by their number:
$$
\frac{9.8+10.0+10.2}{3}\,\mathrm{cm}=\frac{30.0}{3}\,\mathrm{cm}=10.0\,\mathrm{cm}.
$$
The **half-range** is half the difference between the largest reading and the smallest:
$$
\frac{10.2-9.8}{2}\,\mathrm{cm}=\frac{0.4}{2}\,\mathrm{cm}=0.2\,\mathrm{cm}.
$$
The mean is taken as the result of the series. The half-range is used as its uncertainty; only the two extreme readings enter its calculation.

In letters, the $n$ readings are written $x_1,x_2,\ldots,x_n$: the subscript, the number written below, gives the place of the reading in the series. The mean is written $\bar x$, read "x bar". The largest and smallest readings are written $x_{\max}$ and $x_{\min}$, and the half-range $s$:
$$
\bar x=\frac{x_1+\cdots+x_n}{n},\qquad s=\frac{x_{\max}-x_{\min}}2.
$$
:::

:::esempio{titolo="The mean and the midpoint of the extremes"}
The readings of a length are $8$, $8$ and $14\,\mathrm{cm}$. The mean is
$$
\frac{8+8+14}{3}\,\mathrm{cm}=\frac{30}{3}\,\mathrm{cm}=10\,\mathrm{cm}.
$$
The **midpoint** of the extremes is the value halfway between the smallest reading and the largest:
$$
\frac{8+14}{2}\,\mathrm{cm}=11\,\mathrm{cm}.
$$
In the mean, the reading $8$ appears twice and the reading $14$ once. The mean is therefore closer to $8$ than the midpoint is. The half-range is $\dfrac{14-8}{2}\,\mathrm{cm}=3\,\mathrm{cm}$.

An **interval** is the set of all values between two numbers, called its endpoints. The notation $[7;13]$ stands for the values from $7$ to $13$, endpoints included. The value in the middle of the interval is its centre, and half its width is its **radius**. The interval with centre the mean, $10\,\mathrm{cm}$, and radius the half-range, $3\,\mathrm{cm}$, is
$$
[10-3;\,10+3]\,\mathrm{cm}=[7;13]\,\mathrm{cm}
$$
and the reading $14\,\mathrm{cm}$ lies outside it. This happens when the readings are asymmetric about the mean. The interval containing all the readings is the one between the two extremes, $[8;14]\,\mathrm{cm}$. The figure marks the midpoint of the extremes.
:::

::grafico{assi=0 xmin=6.5 xmax=15 ymin=-0.8 ymax=2 linee="8,0 14,0" punti="8,0,pieno;10,0,pieno;11,0,pieno;14,0,pieno" etichette="8,0.34,8 twice;10,-0.34,mean 10;11,0.60,midpoint 11;14,0.34,14" titolo="Sample mean and midpoint of the extremes in centimetres"}

:::osservazione{#dispersione-strumentale titolo="When the readings coincide"}
If all the readings in a series are equal, the largest and the smallest coincide and the half-range is zero. The measurement still has an uncertainty, because the instrument distinguishes only changes at least as large as its resolution. Many protocols therefore assign the **larger** of the instrumental uncertainty and the half-range. The two values are compared in the same unit.

A series has a half-range of $0.05\,\mathrm{cm}$ and the reading uncertainty is $1\,\mathrm{mm}$. The symbol $\mathrm{mm}$ stands for the millimetre and $1\,\mathrm{cm}=10\,\mathrm{mm}$, so
$$
0.05\,\mathrm{cm}=0.05\cdot10\,\mathrm{mm}=0.5\,\mathrm{mm}.
$$
Since $0.5\,\mathrm{mm}<1\,\mathrm{mm}$, the assigned uncertainty is $1\,\mathrm{mm}$. The larger of two values is written $\max$ and the smaller $\min$: here $\max(0.5\,\mathrm{mm};\,1\,\mathrm{mm})=1\,\mathrm{mm}$.
:::

:::osservazione{#intervallo-osservato titolo="Describing the readings and enclosing the data"}
A series of readings is summarised in two ways, depending on the question.

- The average position of the readings is given by the mean, which uses all the readings.
- The smallest interval enclosing all the readings needs only the two extreme readings.

Consider the readings $3$, $4$, $5$ and $10\,\mathrm{mm}$. An interval containing all the readings contains $3$ and $10$, hence every value between $3$ and $10\,\mathrm{mm}$. The smallest one is $[3;10]\,\mathrm{mm}$, whose centre and radius are
$$
\frac{3+10}{2}\,\mathrm{mm}=6.5\,\mathrm{mm},\qquad \frac{10-3}{2}\,\mathrm{mm}=3.5\,\mathrm{mm}.
$$
The mean of the series is
$$
\frac{3+4+5+10}{4}\,\mathrm{mm}=\frac{22}{4}\,\mathrm{mm}=5.5\,\mathrm{mm}.
$$
An interval centred at the mean contains all the readings once it reaches the farthest one. The reading $10$ is $10-5.5=4.5\,\mathrm{mm}$ from the mean and the reading $3$ is $5.5-3=2.5\,\mathrm{mm}$ from it, so a radius of $4.5\,\mathrm{mm}$ is needed, larger than $3.5\,\mathrm{mm}$. The midpoint of the extremes therefore gives the narrowest interval.

The **median** of a series with an odd number of readings is the reading in the central place, once the readings are ordered from smallest to largest. Series A and B in the table contain five masses in grams (the gram has the symbol $\mathrm g$), already in order, and differ only in the last reading.

| Reading | A (g) | B (g) |
| --- | ---: | ---: |
| 1 | 4 | 4 |
| 2 | 4 | 4 |
| 3 | 5 | 5 |
| 4 | 11 | 11 |
| 5 | 16 | 36 |

The means are
$$
\frac{4+4+5+11+16}{5}\,\mathrm g=\frac{40}{5}\,\mathrm g=8\,\mathrm g,\qquad
\frac{4+4+5+11+36}{5}\,\mathrm g=\frac{60}{5}\,\mathrm g=12\,\mathrm g.
$$
The last reading of B exceeds that of A by $20\,\mathrm g$. The sum therefore increases by $20\,\mathrm g$ and the mean increases by $\dfrac{20}{5}\,\mathrm g=4\,\mathrm g$. In both series the reading in third place, the central one, is $5\,\mathrm g$, so the median is $5\,\mathrm g$ for both. An extreme reading very different from the others shifts the mean and leaves the median unchanged. The figure shows the two series.

The numbers alone do not establish whether the $36\,\mathrm g$ reading is usable. Deciding requires the conditions in which it was obtained.

::grafico{linee="1,4 2,4 3,5 4,11 5,16;1,4 2,4 3,5 4,11 5,36" xmin=0 xmax=6 ymin=0 ymax=40 punti="3,5,pieno;5,16,pieno;5,36,pieno" nomi="rank,m (g)" etichette="3.9,6,5 g;5,19,16 g;4.3,36,36 g" titolo="Changing the final ordered reading leaves the third value at 5 g"}
:::

## Reporting a result and its interval

:::definizione{#intervalli titolo="Central value and absolute uncertainty"}
The result of a measurement is written with two numbers and a unit, for example $l=(12.0\pm0.2)\,\mathrm{cm}$. The symbol $\pm$ is read "plus or minus".

- $12.0\,\mathrm{cm}$ is the **central value**: the reading, or the mean of several readings.
- $0.2\,\mathrm{cm}$ is the **absolute uncertainty**, also called the absolute error: the uncertainty expressed in the same unit as the measurement.

The notation stands for the interval obtained by subtracting and adding the uncertainty:
$$
12.0-0.2=11.8\,\mathrm{cm},\qquad 12.0+0.2=12.2\,\mathrm{cm}.
$$
The interval is symmetric about the central value. Its width is $12.2-11.8=0.4\,\mathrm{cm}$, twice the uncertainty. The absolute uncertainty is therefore the radius of the interval, and the symbol $\pm$ combines the central value with both endpoints.

In letters the result is written $x=(x_m\pm\Delta x)$. The symbol $x_m$ stands for the central value. The Greek letter $\Delta$ (capital delta) written before $x$ forms a single symbol, $\Delta x$, read "delta x": the absolute uncertainty of $x$. It satisfies $\Delta x\geq 0$, where $\geq$ is read "greater than or equal to". The central value and the uncertainty have the same unit.

A statistical meaning for the interval, such as the probability that the value falls inside it, requires knowing the method used to assign the uncertainty.
:::

:::osservazione{#compatibilita titolo="Compatibility by overlap"}
Two measurements of the same quantity are checked for agreement by comparing their intervals. Under the **overlap rule**, two measurements are **compatible** if their intervals have at least one value in common.

Measurement A is $(12.0\pm0.2)\,\mathrm{cm}$ and its interval is $[11.8;12.2]\,\mathrm{cm}$. Measurement B is $(12.3\pm0.2)\,\mathrm{cm}$ and its interval is $[12.1;12.5]\,\mathrm{cm}$. The values between $12.1$ and $12.2\,\mathrm{cm}$ belong to both intervals, as the figure shows. Measurements A and B are therefore compatible.

The intervals include their endpoints: they are closed intervals. Two intervals that touch at an endpoint, such as $[11.8;12.2]$ and $[12.2;12.6]$, have the value $12.2$ in common. These measurements are also compatible under the rule.

Two compatible measurements, with their uncertainties, allow one and the same value of the quantity. Assessing the quality of the method also requires information about the reading and the calibration of the instrument, its check against objects of known value.
:::

::grafico{assi=0 xmin=11.7 xmax=12.6 ymin=-0.3 ymax=1.5 linee="11.8,0.83 12.2,0.83;12.1,0.38 12.5,0.38" punti="11.8,0.83;12.2,0.83;12.1,0.38;12.5,0.38" segmenti="12.1,0.25,12.1,0.95;12.2,0.25,12.2,0.95" etichette="11.94,1.05,reading A;12.36,0.15,reading B" titolo="The intervals in centimetres share the segment from 12.1 to 12.2"}

:::esempio{#intervallo-tolleranza titolo="Checking an acceptance limit"}
A part is accepted if its length is between $49$ and $53\,\mathrm{mm}$, endpoints included. The interval of accepted values is called the **specification**, or tolerance interval. The measurement of the part is $(50\pm2)\,\mathrm{mm}$ and its interval is $[48;52]\,\mathrm{mm}$.

A rule is called **conservative** when it considers the least favourable case. Here the conservative rule treats every value in the measurement's interval as possible.

- The upper endpoint of the measurement, $52\,\mathrm{mm}$, is less than $53\,\mathrm{mm}$, so it is allowed.
- The lower endpoint of the measurement, $48\,\mathrm{mm}$, is less than $49\,\mathrm{mm}$, so it is below the threshold.

The two intervals share the values from $49$ to $52\,\mathrm{mm}$, so the measurement is compatible with the specification. For the part to meet it at every value in the measurement's interval, both endpoints would have to be allowed. Here the values between $48$ and $49\,\mathrm{mm}$ lie outside, as the figure shows.

With the same central value of $50\,\mathrm{mm}$, the margin downwards is $50-49=1\,\mathrm{mm}$ and the margin upwards is $53-50=3\,\mathrm{mm}$. The same uncertainty is subtracted and added, so it is at most the smaller margin:
$$
\Delta_{\max}=\min(1\,\mathrm{mm};\,3\,\mathrm{mm})=1\,\mathrm{mm}.
$$

::grafico{assi=0 xmin=46.8 xmax=54.2 ymin=-0.1 ymax=2.65 linee="49,1.8 53,1.8;48,.7 52,.7" punti="49,1.8,pieno;53,1.8,pieno;48,.7,pieno;52,.7,pieno" segmenti="49,.55,49,1.93;52,.55,52,1.93" etichette="51,2.15,Specification from 49 to 53 mm;50,.28,Reading from 48 to 52 mm" titolo="Part of the measurement overlaps the specification, and its 48 mm endpoint lies outside"}
:::

## Relative and percentage uncertainty

:::definizione{#relativa titolo="Comparing uncertainty with the measurement"}
An uncertainty of $1\,\mathrm g$ is small for a mass of $1000\,\mathrm g$ and large for a mass of $5\,\mathrm g$. The **relative uncertainty** is the ratio (the quotient) of the absolute uncertainty to the central value. It is written with the Greek letter $\varepsilon$ (epsilon) and is defined for a positive central value:
$$
\varepsilon=\frac{\Delta x}{x_m}.
$$
For the mass $m=(50\pm1)\,\mathrm g$ this gives
$$
\varepsilon=\frac{1\,\mathrm g}{50\,\mathrm g}=0.02.
$$
Numerator and denominator are in the same unit, so the unit cancels and the result is a number without a unit. Such a number is called **dimensionless**. If the units differ, they are brought to the same unit before dividing.

The **percentage uncertainty** is the relative uncertainty multiplied by one hundred, $100\,\varepsilon$, written with the symbol $\%$, read "per cent". For the mass in the example it is $0.02\cdot100=2\%$.

Conversely, the absolute uncertainty is the percentage divided by one hundred and multiplied by the central value. For a mass of $50\,\mathrm g$ with an uncertainty of $2\%$ this gives
$$
\Delta m=\frac{2}{100}\cdot50\,\mathrm g=1\,\mathrm g.
$$
:::

:::esempio{titolo="Comparing relative resolutions"}
Two instruments measure the lengths $(10\pm1)\,\mathrm{mm}$ and $(100\pm1)\,\mathrm{mm}$. The absolute uncertainty is the same and the intervals, $[9;11]$ and $[99;101]\,\mathrm{mm}$, both have a width of $2\,\mathrm{mm}$. The relative uncertainties are
$$
\frac{1\,\mathrm{mm}}{10\,\mathrm{mm}}=0.1=10\%,\qquad
\frac{1\,\mathrm{mm}}{100\,\mathrm{mm}}=0.01=1\%.
$$
Of two measurements, the more **precise** is the one with the smaller relative uncertainty, here the second.

If the central value is zero, the division $\dfrac{\Delta x}{0}$ has no meaning and the relative uncertainty is undefined. The measurement is still written with its absolute uncertainty, for example $(0.0\pm0.1)\,\mathrm{mm}$.
:::

## Propagation of uncertainty

::::teorema{#propagazione titolo="Conservative estimates and linear approximations"}
A quantity calculated from measured quantities also has an uncertainty. Calculating it from the uncertainties of the data, also called inputs, is called **propagation of uncertainty**.

The rules that follow are conservative. Each input has a symmetric interval, $a=(a_m\pm\Delta a)$ and $b=(b_m\pm\Delta b)$, and is free to take any value in its own interval, whatever the value of the other. The largest distance of the result from its central value is sought.

- **Sum and difference.** The absolute uncertainty of $a+b$ and of $a-b$ is the sum of the absolute uncertainties, $\Delta a+\Delta b$. For $a=(12.0\pm0.2)\,\mathrm{cm}$ and $b=(5.0\pm0.1)\,\mathrm{cm}$ the sum is $(17.0\pm0.3)\,\mathrm{cm}$ and the difference is $(7.0\pm0.3)\,\mathrm{cm}$.
- **Product and quotient** of positive quantities with small relative uncertainties. The relative uncertainty of the result is approximately the sum of the relative uncertainties, $\varepsilon\simeq\varepsilon_a+\varepsilon_b$. The symbol $\simeq$ is read "approximately equal to". If the base of a rectangle has an uncertainty of $2\%$ and the height of $3\%$, the area has an uncertainty of about $5\%$.
- **Power.** For $z=x^n$ with $x>0$, $\varepsilon_z\simeq\lvert n\rvert\,\varepsilon_x$. The notation $\lvert n\rvert$ stands for the absolute value of $n$: $n$ without its sign. For the area of a square, which is the side raised to the second power, $n=2$.

The rules for product, quotient and power are **first-order** approximations, also called linear, because they neglect the products of two relative uncertainties: with $0.02$ and $0.03$ the neglected term is $0.02\cdot0.03=0.0006$.

:::dimostrazione
*Sum.* The sum is largest when both inputs are at the upper endpoint of their own interval:
$$
(a_m+\Delta a)+(b_m+\Delta b)=(a_m+b_m)+(\Delta a+\Delta b).
$$
It is smallest when both are at the lower endpoint, and equals $(a_m+b_m)-(\Delta a+\Delta b)$. In both cases the distance from the central value $a_m+b_m$ is $\Delta a+\Delta b$.

*Difference.* The difference is largest when $a$ is at its upper endpoint and $b$ at its lower endpoint:
$$
(a_m+\Delta a)-(b_m-\Delta b)=(a_m-b_m)+(\Delta a+\Delta b).
$$
Here too the distance from the central value is $\Delta a+\Delta b$.

*Product.* From the definition $\varepsilon_a=\dfrac{\Delta a}{a_m}$ it follows that $\Delta a=\varepsilon_a\,a_m$, so the upper endpoint of $a$ is $a_m+\varepsilon_a a_m=a_m(1+\varepsilon_a)$. In the same way the upper endpoint of $b$ is $b_m(1+\varepsilon_b)$. The product of the two upper endpoints is
$$
a_m(1+\varepsilon_a)\cdot b_m(1+\varepsilon_b)=a_mb_m\,(1+\varepsilon_a+\varepsilon_b+\varepsilon_a\varepsilon_b).
$$
The relative increase with respect to the central value $a_mb_m$ is $\varepsilon_a+\varepsilon_b+\varepsilon_a\varepsilon_b$. The first-order approximation retains the two linear terms $\varepsilon_a+\varepsilon_b$ and neglects the product $\varepsilon_a\varepsilon_b$.

*Quotient.* The quotient is largest with the largest numerator and the smallest denominator:
$$
\frac{a_m(1+\varepsilon_a)}{b_m(1-\varepsilon_b)}.
$$
If $\varepsilon_b$ is small, the reciprocal of $1-\varepsilon_b$ is approximately $1+\varepsilon_b$. Indeed $(1-\varepsilon_b)(1+\varepsilon_b)=1-\varepsilon_b^2$, which differs from $1$ only by the term $\varepsilon_b^2$, negligible to first order. The largest quotient is therefore approximately $\dfrac{a_m}{b_m}(1+\varepsilon_a)(1+\varepsilon_b)$ and, as for the product, the relative increase is approximately $\varepsilon_a+\varepsilon_b$.

*Power.* The square $x^2$ is the product $x\cdot x$, so by the product rule its relative uncertainty is approximately $\varepsilon_x+\varepsilon_x=2\varepsilon_x$. With $n$ equal factors the result is $n\,\varepsilon_x$. For a negative exponent, as in $x^{-1}=\dfrac1x$, the quotient rule applies, and for this reason $\lvert n\rvert$ appears in the formula.
:::
::::

:::esempio{#limiti-esatti titolo="Exact bounds from input intervals"}
The side of a square is $l=(10\pm1)\,\mathrm{cm}$. The value $10\,\mathrm{cm}$ is the **nominal** value: the stated central value. The side lies between $9$ and $11\,\mathrm{cm}$. The area is the square of the side and increases with it, so its endpoints come from the endpoints of the side:
$$
9^2=81\,\mathrm{cm}^2,\qquad 11^2=121\,\mathrm{cm}^2.
$$
The symbol $\mathrm{cm}^2$ stands for the square centimetre, a unit of area. The nominal value of the area is $10^2=100\,\mathrm{cm}^2$.

The linear estimate uses the power rule. The relative uncertainty of the side is $\dfrac{1}{10}=10\%$, so that of the area is about $2\cdot10\%=20\%$. The absolute uncertainty of the area is then $\dfrac{20}{100}\cdot100\,\mathrm{cm}^2=20\,\mathrm{cm}^2$ and the approximate interval runs from $80$ to $120\,\mathrm{cm}^2$.

The exact endpoints exceed those of the linear estimate by $1\,\mathrm{cm}^2$. The difference is the neglected quadratic term:
$$
(10+1)^2=10^2+2\cdot10\cdot1+1^2=100+20+1.
$$
The term $20$ is linear and the term $1$ is quadratic. When an upper bound guaranteed by the intervals of the data is needed, the exact one, $121\,\mathrm{cm}^2$, is used.
:::

:::attenzione{titolo="Dependence between the inputs"}
The sum of the absolute uncertainties holds for inputs that are each free to deviate on their own. When the same reading appears twice in a formula, its two deviations are the same deviation. For $a=(5.0\pm0.1)\,\mathrm{cm}$ the difference $a-a$ equals $0$ whatever the value of $a$, so its uncertainty is zero. The sum rule would instead give $0.1+0.1=0.2\,\mathrm{cm}$, because it treats two opposite deviations as possible. The rule is therefore chosen from what is known about the inputs.

For a quotient, the interval of the denominator must also stay away from zero. With a denominator of $(1\pm1)\,\mathrm{cm}$ the interval runs from $0$ to $2\,\mathrm{cm}$ and contains zero, for which division has no meaning.
:::

:::esempio{#rapporto-asimmetrico titolo="A quotient with different deviations on either side"}
The **density** of a body is the ratio of its mass to its volume. It is written with the Greek letter $\rho$ (rho): $\rho=\dfrac mV$. A mass $m=(50\pm2)\,\mathrm g$ and a volume $V=(10\pm1)\,\mathrm{cm}^3$ are measured, where $\mathrm{cm}^3$ is the cubic centimetre, a unit of volume. All combinations of values from the two intervals are taken as allowed. The nominal density is
$$
\rho=\frac{50\,\mathrm g}{10\,\mathrm{cm}^3}=5\,\mathrm{g/cm^3},
$$
read "five grams per cubic centimetre".

At fixed volume, density increases as mass increases. At fixed mass, it decreases as volume increases, because the volume is in the denominator. The smallest density is therefore obtained with the smaller mass, $48\,\mathrm g$, and the larger volume, $11\,\mathrm{cm}^3$. The largest is obtained with the opposite pair, $52\,\mathrm g$ and $9\,\mathrm{cm}^3$.
$$
\rho_{\min}=\dfrac{48}{11}\,\mathrm{g/cm^3}\simeq4.36\,\mathrm{g/cm^3},
\qquad
\rho_{\max}=\dfrac{52}{9}\,\mathrm{g/cm^3}\simeq5.78\,\mathrm{g/cm^3}.
$$
The deviation is the difference from the nominal value. Downwards it is $5-4.36=0.64\,\mathrm{g/cm^3}$ and upwards $5.78-5=0.78\,\mathrm{g/cm^3}$.

The linear estimate adds the relative uncertainties:
$$
\varepsilon_m=\frac{2}{50}=4\%,\qquad \varepsilon_V=\frac{1}{10}=10\%,\qquad \varepsilon_\rho\simeq4\%+10\%=14\%.
$$
The corresponding deviation is $\dfrac{14}{100}\cdot5\,\mathrm{g/cm^3}=0.70\,\mathrm{g/cm^3}$, the same on both sides, and the approximate interval runs from $4.30$ to $5.70\,\mathrm{g/cm^3}$. This estimate is quick to calculate, and its upper endpoint is smaller than the exact one. If the result must enclose every value allowed by the intervals of the data, the exact upper bound, $5.78\,\mathrm{g/cm^3}$, is retained.
:::

:::esempio{#ingressi-vincolati titolo="A constraint between measurements changes the extremes"}
A rectangle has sides $a$ and $b$ linked by the relation $a+b=10\,\mathrm{cm}$. A relation that links two quantities is called a **constraint**. From the constraint it follows that $b=10-a$. If $a$ is between $4$ and $6\,\mathrm{cm}$, so is $b$, but as one side grows the other shrinks: for $a=4$ the result is $b=6$, and for $a=6$ it is $b=4$.

The area is the product of the sides. Using the numerical values in centimetres, it is written
$$
A=a(10-a)=25-(a-5)^2.
$$
The second equality is checked by expanding the square: $25-(a-5)^2=25-(a^2-10a+25)=10a-a^2$, which is exactly $a(10-a)$. The square $(a-5)^2$ is positive or zero, and it is zero only for $a=5$. The maximum area is therefore $25\,\mathrm{cm}^2$, reached for $a=b=5\,\mathrm{cm}$. At the endpoints $a=4$ and $a=6$ the area is $25-1=24\,\mathrm{cm}^2$, as the figure shows.

Two sides both of $6\,\mathrm{cm}$ would have a sum of $12\,\mathrm{cm}$, against the constraint. If instead the two measurements were independent and had the same interval, the pair $(6;6)$ would be allowed and would give the maximum area $6\cdot6=36\,\mathrm{cm}^2$. Before seeking the endpoints of a result, one therefore establishes which combinations of the data are physically possible.

::grafico{f="25-(x-5)^2" xmin=4 xmax=6 ymin=23 ymax=26 punti="4,24,pieno;5,25,pieno;6,24,pieno" nomi="a (cm),A (cm²)" titolo="With the sum of the sides fixed, the curve reaches 25 cm² at the middle of the interval"}
:::

## Rounding without adding precision

:::osservazione{#cifre titolo="Useful digits in the result"}
**Rounding** a number means replacing it with the nearest number that has fewer digits. In a result the central value and the uncertainty are written to the same decimal place, because digits of the central value smaller than the uncertainty carry no information.

If the final uncertainty is $0.2\,\mathrm{cm}$, which goes down to tenths, and the calculation gives the central value $12.347\,\mathrm{cm}$, the central value is rounded to the nearest tenth. The number $12.347$ lies between $12.3$ and $12.4$ and is closer to $12.3$. The result is written $(12.3\pm0.2)\,\mathrm{cm}$.

Extra digits are kept through the intermediate steps, because intermediate rounding errors add up or are amplified in later calculations.

When the uncertainty is a bound that has to stay conservative, the protocol sometimes requires rounding it upward. An uncertainty of $0.23\,\mathrm{cm}$ then becomes $0.3\,\mathrm{cm}$.
:::

:::esempio{titolo="Rounding to a tenth"}
Rounding to a tenth means keeping a single digit after the decimal point. The first digit discarded, the one in the hundredths place, is examined.

- In $12.44$ the hundredths digit is four. The number is closer to $12.4$ than to $12.5$, so the result is $12.4$.
- In $12.45$ the hundredths digit is five. The number is $0.05$ away from both $12.4$ and $12.5$, halfway between the two. This case is called a tie. With the convention that rounds a tie upward, the result is $12.5$.

Some protocols handle ties in a different way, so the rule used is stated together with the result.
:::

:::esempio{#arrotondamento-intervallo titolo="Rounding while preserving coverage"}
An estimate gives for a length the interval from $3.17$ to $3.57\,\mathrm{cm}$. The exact centre and radius are
$$
\frac{3.17+3.57}{2}\,\mathrm{cm}=3.37\,\mathrm{cm},\qquad
\frac{3.57-3.17}{2}\,\mathrm{cm}=0.20\,\mathrm{cm}.
$$
The protocol calls for a symmetric form, centre $\pm$ radius, with numbers to the nearest tenth, that contains the whole interval of the estimate. This property is called coverage.

The centre rounded to a tenth is $3.4\,\mathrm{cm}$. From the new centre the distances to the two endpoints of the estimate are calculated:
$$
3.40-3.17=0.23\,\mathrm{cm},\qquad 3.57-3.40=0.17\,\mathrm{cm}.
$$
To preserve coverage the radius is at least the larger of the two distances, $0.23\,\mathrm{cm}$. With a radius of $0.2\,\mathrm{cm}$ the interval would be $[3.2;3.6]\,\mathrm{cm}$ and the values between $3.17$ and $3.2\,\mathrm{cm}$ would lie outside. The smallest radius in tenths that is at least $0.23\,\mathrm{cm}$ is $0.3\,\mathrm{cm}$, which gives the interval $[3.1;3.7]\,\mathrm{cm}$. The result is written $(3.4\pm0.3)\,\mathrm{cm}$.

::grafico{assi=0 xmin=3.02 xmax=3.76 ymin=0 ymax=3.1 linee="3.17,2.3 3.57,2.3;3.2,1.4 3.6,1.4;3.1,.5 3.7,.5" punti="3.17,2.3,pieno;3.57,2.3,pieno;3.2,1.4,pieno;3.6,1.4,pieno;3.1,.5,pieno;3.7,.5,pieno" segmenti="3.17,.35,3.17,2.45" etichette="3.37,2.7,Original estimate;3.42,1.79,Radius 0.2 cm;3.42,.91,Radius 0.3 cm" titolo="A radius of 0.2 cm misses the original endpoint at 3.17 cm"}
:::

## Random and systematic errors

:::definizione{#errori titolo="Spread and calibration"}
**Random errors** change from one reading to the next, sometimes upward and sometimes downward. They appear as differences between repeated readings of the same object: the spread.

A **systematic offset**, or systematic error, shifts all the readings in the same direction and repeats unchanged at every reading of the same object. The **deviation** of a reading is the difference between the reading and the reference value. A balance that, over the mass range in use, always shows $3\,\mathrm g$ too much has a positive systematic offset of $3\,\mathrm g$: for a mass of $6\,\mathrm g$ it reads $9\,\mathrm g$, as points A and B in the figure show.

A **reference sample** is an object whose value is already known, for example a $100\,\mathrm g$ mass guaranteed by the manufacturer. Repeating the measurement on the same object describes the spread. To identify a systematic offset, a comparison with a reference sample is needed instead, because all the readings are shifted together. A comparison with several reference samples of different values shows whether the offset is constant along the scale or changes with the measured value. Checking an instrument against known reference samples is called **calibration**.

On analogue instruments a frequent deviation is the **parallax** one. The pointer sits slightly in front of the plane of the scale, so seen from the side it looks shifted against the marks. The deviation is reduced by reading with the eye directly in front of the pointer, along the direction perpendicular to the plane of the scale, the one at a right angle to it.
:::

::grafico{f="x;x+3" xmin=0 xmax=12 ymin=0 ymax=15 nomi="reference mass (g),reading (g)" legenda="\text{ideal reading};\text{reading with offset}" punti="6,6,pieno,A;6,9,pieno,B" titolo="A 3 g offset gives a line parallel to the ideal reading"}

:::esempio{titolo="Close readings and a distant reference"}
On a $100\,\mathrm g$ reference sample, a balance reads $105.0$, $104.9$ and $105.1\,\mathrm g$. The mean and the half-range are
$$
\frac{105.0+104.9+105.1}{3}\,\mathrm g=105.0\,\mathrm g,\qquad
\frac{105.1-104.9}{2}\,\mathrm g=0.1\,\mathrm g.
$$
The readings are close together, so the random errors are small. The mean is $105.0-100=5.0\,\mathrm g$ away from the value of the sample, so the balance has a systematic offset of about $5\,\mathrm g$.

With more readings the mean becomes more stable and the offset is estimated better. The offset remains even when the effect of random fluctuations is reduced, because it is present in every reading. The correction of $5\,\mathrm g$ is extended to other masses only after checking, with other reference samples, that the offset is the same over their range as well.
:::

:::esempio{#taratura-due-punti titolo="Calibration of sensitivity and zero"}
Within the test range, the reading $r$ of a balance is linked to the mass $m$ of the reference sample by the relation $r=am+b$, with $r$ and $m$ in grams.

- The number $b$ is the offset: the reading for $m=0$, the deviation of the zero.
- The number $a$ is the **sensitivity**: it states by how many grams the reading increases when the mass increases by one gram. For a balance without deviations, $a=1$ and $b=0$.

The balance reads $52\,\mathrm g$ for a $50\,\mathrm g$ sample and $154\,\mathrm g$ for a $150\,\mathrm g$ sample. The two conditions hold together:
$$
\begin{cases}
52=a\cdot50+b\\
154=a\cdot150+b
\end{cases}
$$
Subtracting the first equality from the second eliminates the offset $b$ and leaves $154-52=a\,(150-50)$, from which
$$
a=\frac{154-52}{150-50}=\frac{102}{100}=1.02.
$$
Substituting $a$ into the first equality gives $b=52-1.02\cdot50=52-51=1\,\mathrm g$.

To correct a reading, $m$ is obtained from $r=am+b$: $b$ is subtracted, then one divides by $a$. A reading of $r=103\,\mathrm g$ therefore corresponds to
$$
m=\dfrac{r-b}{a}=\dfrac{103-1}{1.02}\,\mathrm g=100\,\mathrm g.
$$
The deviation $r-m=0.02\,m+1$ grows with the mass, because $a$ is different from one: it is $2\,\mathrm g$ for $m=50\,\mathrm g$ and $4\,\mathrm g$ for $m=150\,\mathrm g$. In the figure the deviation is a sloping line, whereas a constant offset would give a horizontal line. Subtracting from every reading the $2\,\mathrm g$ observed at $50\,\mathrm g$ would therefore correct only that sample: for the $150\,\mathrm g$ sample it would give $154-2=152\,\mathrm g$.

A third reference sample in the working range checks whether the reconstructed relation is adequate.

::grafico{f=".02*x+1;2" xmin=0 xmax=160 ymin=0 ymax=5 punti="50,2,pieno;150,4,pieno" nomi="m (g),r−m (g)" legenda="\text{observed offset};\text{constant offset}" titolo="The deviation rises from 2 g to 4 g. A constant offset would give a horizontal line"}
:::
