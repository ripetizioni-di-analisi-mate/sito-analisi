---
titolo: "Physical quantities and units"
sommario: "SI measurements, conversion factors, scientific notation, and dimensional checks on formulas."
---

A measurement is made of a number and a unit, as in $2.4\,\mathrm m$. This chapter shows how a measurement is written, how to go from one unit to another (for example from $250\,\mathrm{cm}$ to $2.5\,\mathrm m$) and how units are used to check a formula.

## Quantities and the International System

:::definizione{#si titolo="Numerical value and unit"}
A **physical quantity** is a property of an object or of a phenomenon that can be measured. The length of a table and the duration of a lesson are physical quantities. **Measuring** means comparing the quantity with a **unit of measurement**, that is, with a reference amount that is the same for everyone, and counting how many times the unit fits into the quantity. A table is $2.4$ metres long when the metre fits into its length two whole times, plus four tenths of a metre.

The result is written $l=2.4\,\mathrm m$. In this expression:

- $l$ is the letter chosen to denote the length;
- $2.4$ is the **numerical value**, that is, how many times the unit fits into the quantity;
- $\mathrm m$ is the symbol of the unit, which here is the metre.

The number $2.4$ on its own leaves the length undetermined, because $2.4\,\mathrm{cm}$ and $2.4\,\mathrm{km}$ are very different lengths. Changing the unit changes the numerical value, while the length stays the same.
:::

:::osservazione{#unita-base titolo="Base units and derived units"}
The **International System** (abbreviated **SI**) is the set of units of measurement adopted in science and in almost every country. The SI fixes seven **base units**, one for each of seven quantities. This course often uses three of them:

- the metre (symbol $\mathrm m$) for length;
- the kilogram (symbol $\mathrm{kg}$) for mass, that is, for the amount of matter in a body;
- the second (symbol $\mathrm s$) for time.

The other four base units concern electric current (ampere), thermodynamic temperature, that is, temperature measured in kelvin, amount of substance (mole), and luminous intensity (candela).

A **derived unit** is built by multiplying or dividing base units. For example, the average speed over a stretch of road is the length of the stretch divided by the time taken to cover it. With $100\,\mathrm m$ covered in $20\,\mathrm s$ the calculation is
$$
\frac{100\,\mathrm m}{20\,\mathrm s}=5\,\mathrm{m/s}.
$$
The unit $\mathrm{m/s}$ is read "metres per second" and is a derived unit, because it is the metre divided by the second.
:::

:::esempio{titolo="Reading a scale"}
A scale shows $0.350\,\mathrm{kg}$. This reading is the **mass** of the object, and the kilogram is the base unit of mass. The last digit displayed by the scale is the digit of the thousandths of a kilogram, that is, of the grams.

The **weight** of the object is the force with which a planet pulls it towards the planet's centre, and it is measured in **newtons** (symbol $\mathrm N$). The **gravitational field** of a planet indicates how strongly the planet pulls each kilogram of mass. If the object is moved to a planet with a different gravitational field, its mass is still $0.350\,\mathrm{kg}$ and its weight changes. The two quantities can therefore be distinguished by their units as well.
:::

:::osservazione{#simboli titolo="Writing unit symbols"}
A measurement is written with the number, a space and the unit symbol, as in $7\,\mathrm{km}$. The letters of one symbol stay together. The symbol is the same for singular and plural values, so both $1\,\mathrm{km}$ and $7\,\mathrm{km}$ are written with it.

Uppercase and lowercase letters mean different things. In $\mathrm{mL}$, which means millilitre, the uppercase L stands for the litre, while the lowercase letter in $\mathrm m$ stands for the metre.

A space or a multiplication dot between two symbols indicates a product of units. Thus $\mathrm{ms}$ means a millisecond, that is, one thousandth of a second, and $\mathrm{m\,s}$ means the product of a metre and a second.
:::

## Prefixes and linear conversions

:::definizione{#prefissi titolo="Multiples and submultiples"}
A **power of ten** is a product of factors all equal to $10$. The **exponent**, written at the top right, tells how many factors there are. For example, $10^3=10\cdot10\cdot10=1000$. With a negative exponent, $1$ is divided by the power with the positive exponent, so $10^{-2}=\dfrac{1}{10^2}=\dfrac{1}{100}=0.01$.

A **prefix** is a part of a word placed in front of the name of a unit. The prefix represents a power of ten that multiplies the unit. The result is a **multiple** when the new unit is larger than the starting one and a **submultiple** when it is smaller.

| Prefix | Symbol | Value | Example with the metre |
| --- | --- | --- | --- |
| kilo | $\mathrm k$ | $10^3=1000$ | $1\,\mathrm{km}=1000\,\mathrm m$ |
| deci | $\mathrm d$ | $10^{-1}=0.1$ | $1\,\mathrm{dm}=0.1\,\mathrm m$ |
| centi | $\mathrm c$ | $10^{-2}=0.01$ | $1\,\mathrm{cm}=0.01\,\mathrm m$ |
| milli | $\mathrm m$ | $10^{-3}=0.001$ | $1\,\mathrm{mm}=0.001\,\mathrm m$ |
| micro | $\mathrm{\mu}$ | $10^{-6}=0.000001$ | $1\,\mathrm{\mu m}=0.000001\,\mathrm m$ |

The symbol $\mathrm{\mu}$ is the Greek letter "mu". A symbol is read as a whole. The first letter is the prefix and the rest is the unit. For example, in $\mathrm{mm}$ the first letter represents milli and the second represents metre. A millimetre contains one thousandth of a metre.

The same prefix applies to every unit. In front of the gram (symbol $\mathrm g$) the prefix kilo gives the kilogram, so $1\,\mathrm{kg}=1000\,\mathrm g$. A mass of $700\,\mathrm g$ is therefore $\dfrac{700}{1000}\,\mathrm{kg}=0.7\,\mathrm{kg}$.
:::

::::teorema{#fattore-conversione titolo="Converting with a unit ratio"}
A metre contains one hundred centimetres, that is, $1\,\mathrm m=100\,\mathrm{cm}$. A length of $2.5\,\mathrm m$ is made of $2.5$ pieces of $100\,\mathrm{cm}$, so it equals $2.5\cdot100\,\mathrm{cm}=250\,\mathrm{cm}$. In the opposite direction the value is divided by $100$.

Let $U$ and $W$ be two units of the same quantity, and let $c$ be the number of units $W$ contained in one unit $U$. If $1\,U=c\,W$, the numerical value of a quantity in $W$ is its value in $U$ multiplied by $c$. To go from $W$ to $U$, the **reciprocal** factor $\dfrac{1}{c}$ is used, that is, the value is divided by $c$. The number $c$ is the **conversion factor**. In the example $U$ is the metre, $W$ is the centimetre and $c=100$.

A **ratio** is the result of a division. The fraction $\dfrac{100\,\mathrm{cm}}{1\,\mathrm m}$ has the same length in the numerator and in the denominator, so it equals one and is called a **unit ratio**. Multiplying a measurement by a unit ratio leaves the quantity the same and changes the unit in which it is written.
$$
2.5\,\mathrm m\cdot\frac{100\,\mathrm{cm}}{1\,\mathrm m}=250\,\mathrm{cm}.
$$
The metre cancels and the centimetre is left.

:::dimostrazione
The expressions $1\,U$ and $c\,W$ name the same quantity, so their ratio is one. A measurement $a\,U$ is made of $a$ units $U$. Substituting $c\,W$ for $1\,U$ in $a\,U$ gives $a\cdot c\,W$, so the numerical value in $W$ is $a\cdot c$. For the inverse conversion, both **sides** of the equality $1\,U=c\,W$, that is, the two expressions to the left and to the right of the equals sign, are divided by $c$. This gives $1\,W=\dfrac{1}{c}\,U$, which is the value of $1\,W$ expressed in $U$.
:::
::::

:::esempio{titolo="Measuring the same length on two scales"}
A strip of $250\,\mathrm{cm}$ measures $2.5\,\mathrm m$, because $250\cdot\dfrac{1}{100}=2.5$. The direction of the conversion is checked by comparing the two units. A metre is larger than a centimetre, so fewer metres than centimetres are needed to cover the same strip, and the number decreases.

A millimetre, instead, is smaller than a metre. A metre contains $1000\,\mathrm{mm}$, so the product $2.5\cdot1000$ gives millimetres from the value in metres. The strip measures $2500\,\mathrm{mm}$ and the number increases. In the graph, point A represents the strip.
:::

::grafico{f="0.01*x" xmin=0 xmax=300 ymin=0 ymax=3.1 punti="250,2.5,pieno,A" nomi="l (cm),l (m)" titolo="Readings of the same length in centimetres and metres"}

:::osservazione{#catena-unita titolo="Checking a conversion chain"}
A **conversion chain** is a conversion carried out in several steps, with one unit ratio for each step. The choice of the factors is checked on the units, before doing the arithmetic. For example, a calliper, that is, an instrument for measuring small thicknesses, gives $\ell=350\,\mathrm{\mu m}$. The symbol $\ell$ is a cursive letter l and denotes a length. The result belongs in a table in centimetres. Two unit ratios are applied in succession, obtained from $1\,\mathrm{mm}=1000\,\mathrm{\mu m}$ and from $1\,\mathrm{cm}=10\,\mathrm{mm}$.
$$
\begin{aligned}
\ell
&=350\,\mathrm{\mu m}\cdot\dfrac{1\,\mathrm{mm}}{1000\,\mathrm{\mu m}}\\
&=0.350\,\mathrm{mm}\cdot\dfrac{1\,\mathrm{cm}}{10\,\mathrm{mm}}\\
&=0.0350\,\mathrm{cm}.
\end{aligned}
$$
At each step the incoming unit also appears in the denominator, so it cancels. In the end only the centimetre is left, which is the unit requested.

The calculation can be repeated in one step because a centimetre contains $10\cdot1000=10000$ micrometres. Dividing $350$ by $10000$ gives $0.0350$ again. A centimetre is larger than a micrometre, so in the table in centimetres the number is smaller than in the micrometre column. The diagram shows the three values and the two divisions.

::grafico{assi=0 xmin=-1.2 xmax=22.4 ymin=-1.3 ymax=2.5 vettori="3.2,0,7.8,0,;12.3,0,17.0,0," punti="1,0,pieno;10,0,pieno;19.5,0,pieno" etichette="1,0.60,350 µm;10,0.60,0.350 mm;19.5,0.60,0.0350 cm;5.5,-0.60,÷ 1000;14.5,-0.60,÷ 10" titolo="The numerical value decreases as the chosen unit increases"}

In the notebook of a laboratory test, the same quantity appears in units suited to different instruments. Before copying a reading into the required column, the type of unit is identified, because the factor depends on it:

- a **linear** unit measures a length, such as $\mathrm{cm}$;
- a **square** unit measures an area, such as $\mathrm{cm}^2$ (square centimetre);
- a **cubic** unit measures a volume, such as $\mathrm{cm}^3$ (cubic centimetre);
- a unit is a **ratio** when it is a division between two units, such as $\mathrm{m/min}$ (metres per minute).

The table applies that choice to four measurements requiring different factors.

| Recorded value | Conversion step | Value in the destination column |
| --- | --- | --- |
| $350\,\mathrm{\mu m}$ | One centimetre contains $10000$ micrometres. | $0.0350\,\mathrm{cm}$ |
| $3\,\mathrm{cm}^2$ | One centimetre is $10^{-2}\,\mathrm m$ in each of the two directions. | $3\cdot10^{-4}\,\mathrm m^2$ |
| $40\,\mathrm{mL}$ | Each millilitre equals one cubic centimetre, or $10^{-6}\,\mathrm m^3$. | $4\cdot10^{-5}\,\mathrm m^3$ |
| $360\,\mathrm{m/min}$ | The same $360\,\mathrm m$ are covered in $60\,\mathrm s$. | $6\,\mathrm{m/s}$ |

In the last row the metre is already the required numerator unit. The conversion is applied to the minute in the denominator. A minute is made of sixty seconds, so in one second the distance covered is one sixtieth of the $360\,\mathrm m$, that is, $\dfrac{360}{60}=6$ metres. The number gets smaller because the reference interval is now only one of the sixty parts of a minute.
:::

## Areas and volumes

::::teorema{#superfici-volumi titolo="Raising the conversion factor to a power"}
An area is obtained by multiplying two lengths, and a volume by multiplying three. Since $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, it follows that $1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2$ and $1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3$.

The square centimetre $\mathrm{cm}^2$ is the area of a square with a side of one centimetre. The cubic centimetre $\mathrm{cm}^3$ is the volume of a cube with an edge of one centimetre. For example, a card of $50\,\mathrm{cm}^2$ has area
$$
50\cdot10^{-4}\,\mathrm m^2=\frac{50}{10000}\,\mathrm m^2=0.005\,\mathrm m^2.
$$
In the opposite direction, $1\,\mathrm m^2=100\cdot100\,\mathrm{cm}^2=10000\,\mathrm{cm}^2$.

:::dimostrazione
In $1\,\mathrm{cm}^2$ two one-centimetre sides are multiplied. Substituting $10^{-2}\,\mathrm m$ for each side gives $10^{-2}\cdot10^{-2}\,\mathrm m^2$. Powers of ten are multiplied by adding their exponents, so $10^{-2}\cdot10^{-2}=10^{-2-2}=10^{-4}$. For the volume, the same operation is repeated with the third side, which gives $10^{-2}\cdot10^{-2}\cdot10^{-2}=10^{-6}$. The final exponents are therefore $-4$ and $-6$, respectively.
:::
::::

:::esempio{titolo="Two ways to calculate an area"}
A rectangular sheet measures $20\,\mathrm{cm}$ by $15\,\mathrm{cm}$. Its area in square metres is calculated in two ways.

- One method calculates the area in square centimetres, $A=20\,\mathrm{cm}\cdot15\,\mathrm{cm}=300\,\mathrm{cm}^2$, and uses the factor $10^{-4}$ to obtain $300\cdot10^{-4}\,\mathrm m^2=0.0300\,\mathrm m^2$.
- A second method converts the sides separately to $0.20\,\mathrm m$ and $0.15\,\mathrm m$. Their product is $0.20\cdot0.15=0.0300$, so it gives the same value in square metres.

The agreement between the two results verifies that the factor acted on both sides of the rectangle.
:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=24 ymin=-4 ymax=20 poligoni="0,0 20,0 20,15 0,15" etichette="10,-1.7,20 cm;22.1,7.5,15 cm;9.3,7.5,300 cm²" titolo="The area is the product of two sides measured in the same unit"}

:::definizione{#capacita titolo="Litres and cubic units"}
The **capacity** of a container is the volume the container holds when it is full. A **litre** (symbol $\mathrm L$) equals one cubic decimetre, that is, the volume of a cube with an edge of one decimetre. Since $1\,\mathrm{dm}=0.1\,\mathrm m$, a cubic decimetre equals $0.1\cdot0.1\cdot0.1\,\mathrm m^3=0.001\,\mathrm m^3$. It follows that $1\,\mathrm L=10^{-3}\,\mathrm m^3$ and that a cubic metre contains $1000$ litres.

A **millilitre** (symbol $\mathrm{mL}$) is one thousandth of a litre. A decimetre contains $10\,\mathrm{cm}$, so a litre equals $10\cdot10\cdot10\,\mathrm{cm}^3=1000\,\mathrm{cm}^3$. A millilitre is one thousandth of this volume, so it corresponds exactly to one cubic centimetre. Thus $250\,\mathrm{mL}=250\,\mathrm{cm}^3=0.250\,\mathrm L$.

These equalities are used to compare a capacity reading from a graduated container, that is, a container with millilitre marks, with the geometric volume of an object, calculated from its measurements. In the graph, point A has the same value on the two axes.
:::

::grafico{f="x" xmin=0 xmax=400 ymin=0 ymax=400 punti="250,250,pieno,A" nomi="V (mL),V (cm³)" titolo="The same volume has the same numerical value in millilitres and cubic centimetres"}

:::esempio{#capienza-gradini titolo="A tank with two cross-sections"}
The horizontal **cross-section** of the tank is the shape obtained by cutting it with a horizontal plane. The **level** is the height measured from the bottom. The cross-sectional area is $300\,\mathrm{cm}^2$ for the first $5\,\mathrm{cm}$ of height and $500\,\mathrm{cm}^2$ above that level. The tank receives $2.5\,\mathrm L$ of water, that is, $2500\,\mathrm{cm}^3$, and the level $h$ reached by the water is required.

In a section where the cross-section is the same at every level, the volume is the cross-sectional area multiplied by the height of the section. To choose the area needed to find the water level, the volume $V_1$ that fills the lower section is calculated first. The remaining volume $V_2$ occupies the upper section up to a height $h_2$, which is obtained by dividing $V_2$ by the upper area.
$$
\begin{aligned}
V_1 &= (300\,\mathrm{cm}^2)(5\,\mathrm{cm})=1500\,\mathrm{cm}^3,\\
V_2 &= 2500\,\mathrm{cm}^3-1500\,\mathrm{cm}^3=1000\,\mathrm{cm}^3,\\
h_2 &= \dfrac{1000\,\mathrm{cm}^3}{500\,\mathrm{cm}^2}=2\,\mathrm{cm}.
\end{aligned}
$$
The final level is therefore $h=5\,\mathrm{cm}+2\,\mathrm{cm}=7\,\mathrm{cm}$. The first volume is smaller than the volume poured, so the water really does reach the upper section.

Multiplying a single area by the entire height would be valid only for a tank whose cross-section is the same at every level. The check changes if the total volume is below $1500\,\mathrm{cm}^3$, because in that case only the lower section's area enters the calculation.

The graph shows the volume held, in litres, for each level. Up to $5\,\mathrm{cm}$ every centimetre of level corresponds to $0.3\,\mathrm L$, and above that to $0.5\,\mathrm L$, so the line rises faster, that is, it has a larger **gradient**.
:::

::grafico{linee="0,0 5,1.5 9,3.5" punti="5,1.5,pieno;7,2.5,pieno" xmin=0 xmax=10 ymin=0 ymax=4 nomi="h (cm),V (L)" titolo="The gradient changes after 5 cm because the tank's cross-section increases"}

## Time intervals

:::osservazione{#tempo titolo="Hours, minutes, and seconds"}
The symbols of the hour, the minute and the second are $\mathrm h$, $\mathrm{min}$ and $\mathrm s$. A minute contains $60\,\mathrm s$ and an hour contains $60\,\mathrm{min}$, so $1\,\mathrm h=60\cdot60\,\mathrm s=3600\,\mathrm s$.

When a duration contains hours and minutes, the number of hours is multiplied by $3600$ and the number of minutes by $60$. The two results are both in seconds and are added. For example, a duration of 2 hours and 15 minutes equals
$$
2\cdot3600\,\mathrm s+15\cdot60\,\mathrm s=7200\,\mathrm s+900\,\mathrm s=8100\,\mathrm s.
$$
Hours and minutes go up in sixties, while prefixes follow the decimal scale, that is, the powers of ten. Therefore $1\,\mathrm{ms}=10^{-3}\,\mathrm s$, and a second contains a thousand milliseconds.
:::

:::esempio{titolo="Fractions of an hour and clock readings"}
A time of $1.25\,\mathrm h$ contains one hour and $0.25$ hours. The number $0.25$ equals $\dfrac{25}{100}=\dfrac14$, so $0.25$ hours are a quarter of an hour. Since $0.25\cdot60=15$, the duration is one hour and fifteen minutes, that is, $60+15=75\,\mathrm{min}$.

A reading such as 1 h 25 min instead represents $60+25=85\,\mathrm{min}$. The part after the decimal point in $1.25\,\mathrm h$ measures a fraction of an hour in hundredths, while a clock displays hours and minutes separately and each minute is one sixtieth of an hour.
:::

::grafico{assi=0 xmin=-5 xmax=100 ymin=-1 ymax=2 segmenti="0,0,60,0;60,0,75,0;75,0,85,0" punti="0,0;60,0;75,0;85,0" etichette="30,0.4,1 hour;66.8,0.7,15 min;80.4,-0.42,10 min" titolo="A quarter of an hour brings the time to 75 minutes. Adding 25 minutes gives 85"}

:::esempio{#tempo-campioni titolo="Readings and the intervals between them"}
A sensor is an instrument that records measurements automatically. The sensor saves a reading at start-up and another one every $250\,\mathrm{ms}$. The last reading saved is the thirteenth.

Let $n$ be the reading number and $t_n$ the instant at which that reading is saved, counted from start-up. The first is at $t_1=0$, the second at $t_2=250\,\mathrm{ms}$ and the third at $t_3=500\,\mathrm{ms}$. Each reading follows the previous one after one interval, so $n-1$ intervals have passed before reading number $n$, and a general reading is at $t_n=(n-1)\cdot250\,\mathrm{ms}$. The time from the first to the last is therefore
$$
t_{13}-t_1=12\cdot250\,\mathrm{ms}=3000\,\mathrm{ms}=3\,\mathrm s.
$$
Each interval separates two consecutive instants. This is why there is one fewer interval than readings.

If the sensor waited one interval before saving its first reading, every reading would be shifted by $250\,\mathrm{ms}$. The first would occur at $250\,\mathrm{ms}$ and the thirteenth at $13\cdot250\,\mathrm{ms}=3250\,\mathrm{ms}$ after start-up. The time from the first to the last would still be $3250\,\mathrm{ms}-250\,\mathrm{ms}=3000\,\mathrm{ms}$. The graph marks the first three readings and the thirteenth.

::grafico{segmenti="1,0,13,3" xmin=0 xmax=14 ymin=0 ymax=4 punti="1,0,pieno;2,.25,pieno;3,.5,pieno;13,3,pieno" nomi="n,t (s)" titolo="The first reading has index 1 at time zero. The thirteenth follows after 3 s"}
:::

## Scientific notation

:::definizione{#scientifica titolo="Separating the coefficient and the power of ten"}
**Scientific notation** is the writing of a number as a product of two factors. The first is a number $a$, called the **coefficient**, and the second is a power of ten $10^n$. For example,
$$
42000=4.2\cdot10000=4.2\cdot10^4,\qquad
0.00042=\frac{4.2}{10000}=4.2\cdot10^{-4}.
$$
The exponent counts how many places the decimal point moves in going from the number to the coefficient. In $42000$ the decimal point moves four places to the left and the exponent is $4$. In $0.00042$ it moves four places to the right and the exponent is $-4$.

A nonzero number in **normalized scientific notation** has the form $a\cdot10^n$, with $1\leq \lvert a\rvert<10$ and integer $n$. The symbol $\lvert a\rvert$ is the absolute value of $a$, that is, the number $a$ written without its sign. An integer is a number with no digits after the decimal point, such as $-4$, $0$ or $4$. The condition therefore requires the coefficient to have a single digit before the decimal point, and that digit to be different from zero.

The **significant figures** of a measurement are the digits that carry information about its value. The coefficient contains the significant figures retained in the expression, and the power of ten places the decimal point. For a negative number, the coefficient is negative and the power remains a positive multiplier. For example, $-42000=-4.2\cdot10^4$.
:::

:::osservazione{#calcoli-decimali titolo="Products, ratios, and sums"}
- **Product.** To multiply two numbers in scientific notation, the coefficients are multiplied and the exponents are added. For example, $(2\cdot10^3)(4\cdot10^2)=(2\cdot4)\cdot10^{3+2}=8\cdot10^5$.
- **Ratio.** To divide them, the coefficients are divided and the exponents are subtracted. For example, $\dfrac{8\cdot10^5}{2\cdot10^3}=\dfrac82\cdot10^{5-3}=4\cdot10^2$.
- **Normalization.** If the coefficient falls outside the normalized range, that is, it is less than $1$ or at least $10$, the decimal point is moved and the exponent is adjusted to compensate. For example, $(5\cdot10^3)(6\cdot10^2)=30\cdot10^5$. Moving the decimal point one place to the left turns the coefficient $30$ into $3$, that is, divides it by ten. Increasing the exponent by one multiplies the power by ten, so $30\cdot10^5=3\cdot10^6$.
- **Sum.** To add two numbers, they are first rewritten with the same power of ten. Then the sum of the coefficients combines quantities expressed on the same scale.
:::

:::esempio{titolo="A common exponent"}
The numbers $3.4\cdot10^4$ and $8\cdot10^2$, that is, $34000$ and $800$, are added. The **terms** of the sum, that is, the numbers to be added, have different powers of ten. The second number is expressed as $0.08\cdot10^4$, moving the decimal point two places to the left and increasing the exponent by two. The coefficients add to $3.4+0.08=3.48$, so the result is $3.48\cdot10^4$, that is, $34800$.

The **order of magnitude** of a number is the power of ten in its normalized scientific notation. The second term has order of magnitude $10^2$, one hundred times smaller than that of the first, which is $10^4$. The result therefore remains close to $3.4\cdot10^4$.
:::

:::esempio{#scarto-scientifico titolo="Subtracting nearly equal values"}
An entire strip measures $1.205\cdot10^4\,\mathrm{mm}$. After a piece has been cut off, the part remaining measures $1.197\cdot10^4\,\mathrm{mm}$. The **difference** between the two readings is here the length removed. A difference between two values of a quantity is written with the Greek letter $\Delta$ (capital "delta") in front of the symbol of the quantity. For example, if $s$ is a thickness, $\Delta s$ is the difference between two thicknesses. The two readings have the same power of ten, so the coefficients are subtracted directly.
$$
(1.205-1.197)\cdot10^4\,\mathrm{mm}
=0.008\cdot10^4\,\mathrm{mm}
=8\cdot10^1\,\mathrm{mm}.
$$
The piece cut off is $80\,\mathrm{mm}$ long.

**Rounding** a number to the nearest hundredth means replacing it with the closest number that has two decimal digits. In a tie the higher one is chosen. The previous result is compared with the one obtained by rounding the coefficients first. The coefficient $1.205$ is halfway between $1.20$ and $1.21$ and becomes $1.21$, while $1.197$ becomes $1.20$. This gives $1.21-1.20=0.01$, that is, $0.01\cdot10^4\,\mathrm{mm}=100\,\mathrm{mm}$.

Rounding shifts the two measurements by $50\,\mathrm{mm}$ and by $30\,\mathrm{mm}$, which are small compared with about $12000\,\mathrm{mm}$. The difference is much smaller than the measurements, so the $20\,\mathrm{mm}$ gap between the two shifts changes it from $80\,\mathrm{mm}$ to $100\,\mathrm{mm}$. When rounding is postponed until the final result, the subtraction is carried out with all the digits of the readings.
:::

## Derived units and dimensions

:::definizione{#dimensioni titolo="Units follow operations"}
The **dimension** of a quantity is its type (length, mass, time or a combination of them), independently of the choice of unit. Area has the dimension of length squared, whether expressed in square metres or square centimetres. Speed has the dimension of length divided by time, whether measured in metres per second or kilometres per hour.

Units follow the same operations as the numbers they are written next to. The **density** of a body is its mass divided by its volume. For a body of mass $10\,\mathrm{kg}$ and volume $2\,\mathrm m^3$ the calculation is
$$
\frac{10\,\mathrm{kg}}{2\,\mathrm m^3}=5\,\mathrm{kg/m^3}.
$$
In the ratio of a mass in kilograms to a volume in cubic metres, the units give $\mathrm{kg/m^3}$, which is read "kilograms per cubic metre". This is how to obtain the SI unit of density.

The **frequency** is the number of events that occur in one second. It is measured in **hertz** (symbol $\mathrm{Hz}$), and $1\,\mathrm{Hz}$ corresponds to one event per second. For example, $12$ beats in $4\,\mathrm s$ give $\dfrac{12}{4}=3\,\mathrm{Hz}$.

The **flow rate** is the volume of liquid collected in one second, that is, the volume divided by the time. For example, $6\,\mathrm L$ collected in $3\,\mathrm s$ give $\dfrac{6\,\mathrm L}{3\,\mathrm s}=2\,\mathrm{L/s}$. In the SI, flow rate is measured in $\mathrm{m^3/s}$.

A number that counts objects or repetitions has no unit and is called **dimensionless**. For example, with $5$ turns of a wire, each $2\,\mathrm m$ long, the total length is $5\cdot2\,\mathrm m=10\,\mathrm m$. The unit of the result comes from the metres of one turn.
:::

:::esempio{#unit-composte titolo="Speed with a numerator and a denominator"}
A speed of $72\,\mathrm{km/h}$ corresponds to $72\,\mathrm{km}$ covered in one hour. To convert it to metres per second, $1000\,\mathrm m$ is substituted for one kilometre and $3600\,\mathrm s$ for one hour.
$$
72\,\frac{\mathrm{km}}{\mathrm h}
=\frac{72\cdot1000\,\mathrm m}{3600\,\mathrm s}
=\frac{72000}{3600}\,\mathrm{m/s}
=20\,\mathrm{m/s}.
$$
The factor for the hour goes in the denominator because the hour originally appeared there. As a check, motion at $20\,\mathrm{m/s}$ covers $20\cdot3600=72000\,\mathrm m$ in one hour, that is, $72\,\mathrm{km}$.
:::

:::attenzione{#test-dimensionale titolo="A necessary condition"}
A physical equality holds only if the two sides have the same dimension. The **dimensional check** of a formula consists in verifying this property.

Let $b$ be the base and $h$ the height of a rectangle, which are two lengths. For the area $A$, a formula such as $A=b+h$ is ruled out, because the sum of two lengths is a length, in metres, while an area is measured in square metres.

The formula $A=2bh$ does have the dimension of an area, because the product of two lengths is in square metres and the number $2$ has no unit. For a rectangle, however, it would give twice the correct value. With $b=3\,\mathrm m$ and $h=2\,\mathrm m$ it would give $12\,\mathrm m^2$, while the area is $3\,\mathrm m\cdot2\,\mathrm m=6\,\mathrm m^2$.

Having the same dimension on the two sides is therefore a *necessary* condition. Every correct formula satisfies it, and so do some wrong formulas. The dimensional check points out errors in the structure of a formula, such as a sum in place of a product. The numerical factor is established by the geometry or by the physical law.
:::

:::osservazione{#termini-omogenei titolo="Units of coefficients in a sum"}
Two quantities are **of the same kind** when they are of the same type, such as two lengths or two times. In a sum, all the **terms**, that is, the quantities being added, are of the same kind.

A model, that is, a formula describing how a quantity varies, expresses a length by $\ell=\ell_0+bt+ct^2$, where $t$ is time. The symbol $\ell_0$ is read "l nought" and denotes the length at the instant $t=0$. The letters $b$ and $c$ are the **coefficients**, that is, fixed numbers that multiply $t$ and $t^2$. The expressions $bt$ and $ct^2$ denote the products $b\cdot t$ and $c\cdot t^2$.

Every term in the sum must have the dimension of length. The initial term $\ell_0$ is already a length. In the term $bt$ the unit of $b$ is multiplied by seconds and the result must be in metres. For this to happen, $b$ must be in $\mathrm{m/s}$. For the same reason, $c$ is in $\mathrm{m/s^2}$, that is, metres divided by seconds squared.
$$
[\ell_0]=\mathrm m,\qquad
[bt]=\dfrac{\mathrm m}{\mathrm s}\cdot\mathrm s=\mathrm m,\qquad
[ct^2]=\dfrac{\mathrm m}{\mathrm s^2}\cdot\mathrm s^2=\mathrm m.
$$
The square brackets here denote the unit of each term. With $\ell_0=3\,\mathrm m$, $b=2\,\mathrm{m/s}$ and $c=1\,\mathrm{m/s^2}$, the three contributions after $2\,\mathrm s$ are $3\,\mathrm m$, $2\,\mathrm{m/s}\cdot2\,\mathrm s=4\,\mathrm m$ and $1\,\mathrm{m/s^2}\cdot4\,\mathrm s^2=4\,\mathrm m$. Their sum of $11\,\mathrm m$ is meaningful because all three terms are lengths. If the data sheet gave $c$ in $\mathrm{m/s}$, the last term would have the unit $\dfrac{\mathrm m}{\mathrm s}\cdot\mathrm s^2=\mathrm{m\,s}$, which is different from the metre. The model and the data sheet would therefore be inconsistent.

The graph shows the three terms and their sum.

::grafico{f="3+2*x+x*x;2*x;x*x" xmin=0 xmax=3 ymin=0 ymax=19 linee="0,3 3,3" punti="2,11,pieno" nomi="t (s),l (m)" etichette="2.25,2.16,initial term 3 m" legenda="\text{sum};\text{linear term};\text{quadratic term}" titolo="Three contributions in metres add to 11 m at 2 s"}
:::

## Sums and comparisons

:::osservazione{#confronti titolo="Start with a common unit"}
Two measurements of the same quantity are added or directly compared when they are expressed in the same unit. To add $35\,\mathrm{cm}$ to $2\,\mathrm m$, the centimetres are converted to $0.35\,\mathrm m$. The sum is $2\,\mathrm m+0.35\,\mathrm m=2.35\,\mathrm m$. In the same way, $0.8\,\mathrm m$ is greater than $75\,\mathrm{cm}$, because it equals $80\,\mathrm{cm}$.

In ratios of quantities of the same kind, the units cancel after conversion and a dimensionless number is left. For example, $50\,\mathrm{cm}$ is a quarter of $2\,\mathrm m$ because the ratio in metres is $\dfrac{0.5}{2}=0.25=\dfrac14$.
:::

:::esempio{titolo="From measurement to the fraction used"}
A roll is $3\,\mathrm m$ long. First $70\,\mathrm{cm}$ is cut off, then $800\,\mathrm{mm}$. Both cuts represent lengths. In metres they are $0.70$ and $0.80$, so the portion used is $0.70\,\mathrm m+0.80\,\mathrm m=1.50\,\mathrm m$. The part left is $3\,\mathrm m-1.50\,\mathrm m=1.50\,\mathrm m$, or half the roll.

Dividing by the initial length gives a dimensionless fraction, because the metres cancel, and it equals $\dfrac{1.50}{3}=0.50$. A **percentage** is a fraction with denominator one hundred. Multiplying by one hundred expresses the fraction as a percentage, so $0.50=\dfrac{50}{100}=50\%$.
:::

::grafico{assi=0 xmin=-0.1 xmax=3.2 ymin=-0.8 ymax=2 segmenti="0,0,0.7,0;0.7,0,1.5,0;1.5,0,3,0" punti="0,0;0.7,0;1.5,0;3,0" etichette="0.37,0.38,70 cm;1.1,0.38,800 mm;2.24,0.38,1.50 m left" titolo="Two cuts and the remaining length, all shown on the metre scale"}

:::osservazione{#rapporto-percentuale titolo="Separating the fraction from the unit"}
A $750\,\mathrm{mL}$ bottle contains $0.45\,\mathrm L$. The fraction filled, $f$, is the volume present divided by the capacity. To calculate it, the volume present and the capacity are expressed in the same unit, so $0.45\,\mathrm L$ is written as $450\,\mathrm{mL}$.
$$
f=\dfrac{450\,\mathrm{mL}}{750\,\mathrm{mL}}=0.60=60\%.
$$
The unit cancels in the ratio. Changing the unit in both the numerator and the denominator multiplies the two numerical values by the same factor, so the fraction is unchanged.

The space available corresponds to the complementary fraction, that is, to what is missing to reach $1$, which is $1-0.60=0.40$. To turn $40\%$ into a volume, this fraction is multiplied by the capacity, which gives $0.40\cdot750\,\mathrm{mL}=300\,\mathrm{mL}$. The ratio describes the part still available and is a dimensionless number, while the product gives the physical volume, in millilitres.

::grafico{assi=0 xmin=-2 xmax=13 ymin=-1 ymax=11 poligoni="0,0 6,0 6,10 0,10;0,0 6,0 6,6 0,6" segmenti="6,6,9,6;6,10,9,10" etichette="3,3,450 mL;3,8,300 mL;10,10,750 mL;10,6,450 mL" titolo="A constant-cross-section container holds 450 mL out of its 750 mL capacity"}
:::
