---
titolo: "Physical quantities and units"
sommario: "SI measurements, conversion factors, scientific notation, and dimensional checks on formulas."
---

A measurement gives a number and a unit. Together they allow us to compare readings of the same object, combine different measurements, and check the formulas used to obtain a result.

## Quantities and the International System

:::definizione{#si titolo="Numerical value and unit"}
A **physical quantity** is a property that can be measured. To express a measurement, choose a unit and determine how many of those units fit into the quantity being measured. In $l=2.4\,\mathrm m$, the symbol $l$ denotes length, the number $2.4$ gives its value with the metre as the chosen unit, and $\mathrm m$ identifies the unit. The number $2.4$ on its own would be compatible with very different lengths, such as $2.4\,\mathrm{cm}$ or $2.4\,\mathrm{km}$.
:::

:::osservazione{#unita-base titolo="Base units and derived units"}
This course often uses three base units of the International System. They are the metre for length, the kilogram for mass, and the second for time. The other base units concern electric current, thermodynamic temperature, amount of substance, and luminous intensity. A **derived unit** is built by combining base units. For example, average speed over a section of a journey is measured in metres per second because the length of the section is divided by the time taken.
:::

:::esempio{titolo="Reading a scale"}
A reading of $0.350\,\mathrm{kg}$ describes the mass of an object. The kilogram is the base unit of mass, and the last digit displayed by the scale concerns the reading the instrument provides. If the object is moved to a planet with a different gravitational field, its mass stays the same and its weight changes. Weight is a force measured in newtons. The two quantities can therefore be distinguished by their units.
:::

:::osservazione{#simboli titolo="Writing unit symbols"}
In $7\,\mathrm{km}$ there is a space between the number and the unit symbol, and the letters of the symbol stay together. The symbol is the same for singular and plural values. Uppercase and lowercase letters matter. For instance, $\mathrm{mL}$ means millilitre, while the lowercase $\mathrm m$ means metre. A space or multiplication dot between unit symbols indicates a product. Thus $\mathrm{ms}$ means a millisecond and $\mathrm{m\,s}$ means a metre times a second as a unit product.
:::

## Prefixes and linear conversions

:::definizione{#prefissi titolo="Multiples and submultiples"}
A **prefix** represents a power of ten that multiplies the unit. Kilo ($\mathrm k$) means $10^3$, deci ($\mathrm d$) means $10^{-1}$, centi ($\mathrm c$) means $10^{-2}$, milli ($\mathrm m$) means $10^{-3}$, and micro ($\mathrm{\mu}$) means $10^{-6}$. Start by reading the whole symbol. For example, in $\mathrm{mm}$ the first letter represents milli and the second represents metre. A millimetre contains one thousandth of a metre.
:::

::::teorema{#fattore-conversione titolo="Converting with a unit ratio"}
If $1\,U=c\,W$, the numerical value of a quantity in $W$ is its value in $U$ multiplied by $c$. To go from $W$ to $U$, use the reciprocal factor $\dfrac{1}{c}$.

:::dimostrazione
The expressions $1\,U$ and $c\,W$ name the same quantity, so their ratio is one. Substituting $c\,W$ for $1\,U$ in $a\,U$ gives $a\cdot c\,W$. For the inverse conversion, divide both sides of $1\,U=c\,W$ by $c$. This gives the value of $1\,W$ expressed in $U$.
:::
::::

:::esempio{titolo="Measuring the same length on two scales"}
A strip of $250\,\mathrm{cm}$ measures $2.5\,\mathrm m$. To check the direction of the conversion, consider the scale. A metre is larger than a centimetre, so fewer units are needed to cover the same strip. Conversely, expressing it in millimetres increases the number to $2500$. The product $2.5\cdot1000$ gives millimetres from the value in metres.
:::

::grafico{f="0.01*x" xmin=0 xmax=300 ymin=0 ymax=3.1 punti="250,2.5,pieno,A" nomi="l (cm),l (m)" titolo="Readings of the same length in centimetres and metres"}

:::osservazione{#catena-unita titolo="Checking a conversion chain"}
The conversion factors can be checked before doing the arithmetic. For example, if a calliper measures $\ell=350\,\mathrm{\mu m}$ and the result belongs in a table in centimetres, apply two unit ratios in succession.
$$
\begin{aligned}
\ell
&=350\,\mathrm{\mu m}\cdot\dfrac{1\,\mathrm{mm}}{1000\,\mathrm{\mu m}}\\
&=0.350\,\mathrm{mm}\cdot\dfrac{1\,\mathrm{cm}}{10\,\mathrm{mm}}\\
&=0.0350\,\mathrm{cm}.
\end{aligned}
$$
At each step the incoming unit also appears in the denominator. The only unit left is the one requested. The calculation can be repeated in one step because a centimetre contains $10000$ micrometres. Dividing $350$ by that count gives the same result. If the table uses centimetres, the number must be smaller than in the micrometre column because the chosen unit is larger.

::grafico{assi=0 xmin=-1.2 xmax=22.4 ymin=-1.3 ymax=2.5 vettori="3.2,0,7.8,0,;12.3,0,17.0,0," punti="1,0,pieno;10,0,pieno;19.5,0,pieno" etichette="1,0.60,350 µm;10,0.60,0.350 mm;19.5,0.60,0.0350 cm;5.5,-0.60,÷ 1000;14.5,-0.60,÷ 10" titolo="The numerical value decreases as the chosen unit increases"}

In a lab notebook, the same quantity may appear in units suited to different instruments. Before copying a reading into the required column, identify whether its unit is a length unit, a square, a cube, or a ratio. The table applies that choice to measurements requiring different factors.

| Recorded value | Conversion step | Value in the destination column |
| --- | --- | --- |
| $350\,\mathrm{\mu m}$ | One centimetre contains $10000$ micrometres. | $0.0350\,\mathrm{cm}$ |
| $3\,\mathrm{cm}^2$ | One centimetre is $10^{-2}\,\mathrm m$ in each of the two directions. | $3\cdot10^{-4}\,\mathrm m^2$ |
| $40\,\mathrm{mL}$ | Each millilitre equals one cubic centimetre, or $10^{-6}\,\mathrm m^3$. | $4\cdot10^{-5}\,\mathrm m^3$ |
| $360\,\mathrm{m/min}$ | The same $360\,\mathrm m$ are covered in $60\,\mathrm s$. | $6\,\mathrm{m/s}$ |

In the last row the metre is already the required numerator unit. The conversion is applied to the minute in the denominator. The number gets smaller because only one of the sixty parts of a minute now serves as the reference interval.
:::

## Areas and volumes

::::teorema{#superfici-volumi titolo="Raising the conversion factor to a power"}
To obtain an area, multiply two lengths. To obtain a volume, multiply three. Since $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, it follows that $1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2$ and $1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3$.

:::dimostrazione
In $1\,\mathrm{cm}^2$, two one-centimetre sides are multiplied. Substituting $10^{-2}\,\mathrm m$ for each side gives $10^{-2}\cdot10^{-2}\,\mathrm m^2$. For the volume, repeat the operation with the third side. Powers of ten combine by adding exponents, so the final exponents are $-4$ and $-6$, respectively.
:::
::::

:::esempio{titolo="Two ways to calculate an area"}
A rectangular sheet measures $20\,\mathrm{cm}$ by $15\,\mathrm{cm}$. One method calculates $A=300\,\mathrm{cm}^2$ and uses the factor $10^{-4}$ to obtain $0.0300\,\mathrm m^2$. A second method converts the sides separately to $0.20\,\mathrm m$ and $0.15\,\mathrm m$. Their product gives the same value. The agreement verifies that the factor acted on both dimensions of the rectangle.
:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=24 ymin=-4 ymax=20 poligoni="0,0 20,0 20,15 0,15" etichette="10,-1.7,20 cm;22.1,7.5,15 cm;9.3,7.5,300 cm²" titolo="The area is the product of two sides measured in the same unit"}

:::definizione{#capacita titolo="Litres and cubic units"}
A **litre** equals one cubic decimetre. Since $1\,\mathrm{dm}=0.1\,\mathrm m$, it follows that $1\,\mathrm L=10^{-3}\,\mathrm m^3$. A millilitre is one thousandth of a litre and corresponds exactly to one cubic centimetre. Thus $250\,\mathrm{mL}=250\,\mathrm{cm}^3=0.250\,\mathrm L$. These equalities allow a capacity reading from a graduated container to be compared with the geometric volume of an object.
:::

::grafico{f="x" xmin=0 xmax=400 ymin=0 ymax=400 punti="250,250,pieno,A" nomi="V (mL),V (cm³)" titolo="The same volume has the same numerical value in millilitres and cubic centimetres"}

:::esempio{#capienza-gradini titolo="A tank with two cross-sections"}
A tank has a horizontal cross-sectional area of $300\,\mathrm{cm}^2$ for the first $5\,\mathrm{cm}$ of height and $500\,\mathrm{cm}^2$ above that level. It receives $2.5\,\mathrm L$ of water. To choose the area needed to find the water level, first calculate how much volume fills the lower section.
$$
\begin{aligned}
V_1 &= (300\,\mathrm{cm}^2)(5\,\mathrm{cm})=1500\,\mathrm{cm}^3,\\
V_2 &= 2500\,\mathrm{cm}^3-1500\,\mathrm{cm}^3=1000\,\mathrm{cm}^3,\\
h_2 &= \dfrac{1000\,\mathrm{cm}^3}{500\,\mathrm{cm}^2}=2\,\mathrm{cm}.
\end{aligned}
$$
The final level is therefore $h=5\,\mathrm{cm}+2\,\mathrm{cm}=7\,\mathrm{cm}$. The first volume is smaller than the volume poured, so the water really does reach the upper section. Multiplying a single area by the entire height would be valid only for a tank whose cross-section stays constant. If the total volume is below $1500\,\mathrm{cm}^3$, only the lower section's area enters the calculation.
:::

::grafico{linee="0,0 5,1.5 9,3.5" punti="5,1.5,pieno;7,2.5,pieno" xmin=0 xmax=10 ymin=0 ymax=4 nomi="h (cm),V (L)" titolo="The gradient changes after 5 cm because the tank's cross-section increases"}

## Time intervals

:::osservazione{#tempo titolo="Hours, minutes, and seconds"}
A minute contains $60\,\mathrm s$ and an hour contains $60\,\mathrm{min}$, so $1\,\mathrm h=3600\,\mathrm s$. If a duration contains hours and minutes, multiply the number of hours by $3600$ and the number of minutes by $60$. The two results are both in seconds and can be added. The prefix milli follows the decimal scale. Therefore $1\,\mathrm{ms}=10^{-3}\,\mathrm s$, and a second contains a thousand milliseconds.
:::

:::esempio{titolo="Fractions of an hour and clock readings"}
A time of $1.25\,\mathrm h$ contains one hour and a quarter of an hour. Since $0.25\cdot60=15$, the duration is one hour and fifteen minutes. A reading such as 1 h 25 min instead represents $60+25=85\,\mathrm{min}$. The part after the decimal point in $1.25\,\mathrm h$ measures a fraction of an hour, while a clock can display hours and minutes separately.
:::

::grafico{assi=0 xmin=-5 xmax=100 ymin=-1 ymax=2 segmenti="0,0,60,0;60,0,75,0;75,0,85,0" punti="0,0;60,0;75,0;85,0" etichette="30,0.4,1 hour;66.8,0.7,15 min;80.4,-0.42,10 min" titolo="A quarter of an hour brings the time to 75 minutes. Adding 25 minutes gives 85"}

:::esempio{#tempo-campioni titolo="Readings and the intervals between them"}
A sensor saves a reading at start-up and another one every $250\,\mathrm{ms}$. The last reading saved is the thirteenth. Let $n$ be the reading number. The first is at $t_1=0$, and a general reading is at $t_n=(n-1)\cdot250\,\mathrm{ms}$. The time from the first to the last is therefore
$$
t_{13}-t_1=12\cdot250\,\mathrm{ms}=3000\,\mathrm{ms}=3\,\mathrm s.
$$
Each interval separates two consecutive instants. This is why there is one fewer interval than readings. If the sensor waited one interval before saving its first reading, the thirteenth would occur $3250\,\mathrm{ms}$ after start-up. The time from the first to the last would still be $3000\,\mathrm{ms}$.

::grafico{segmenti="1,0,13,3" xmin=0 xmax=14 ymin=0 ymax=4 punti="1,0,pieno;2,.25,pieno;3,.5,pieno;13,3,pieno" nomi="n,t (s)" titolo="The first reading has index 1 at time zero. The thirteenth follows after 3 s"}
:::

## Scientific notation

:::definizione{#scientifica titolo="Separating the coefficient and the power of ten"}
A nonzero number in **normalized scientific notation** has the form $a\cdot10^n$, with $1\leq \lvert a\rvert<10$ and integer $n$. For example, $42000=4.2\cdot10^4$ and $0.00042=4.2\cdot10^{-4}$. The coefficient contains the significant digits retained in the expression, and the power of ten places the decimal point. For a negative number, the coefficient is negative and the power remains a positive multiplier.
:::

:::osservazione{#calcoli-decimali titolo="Products, ratios, and sums"}
To multiply two numbers in scientific notation, multiply the coefficients and add the exponents. To divide, divide the coefficients and subtract the exponents. If the new coefficient falls outside the normalized range, move the decimal point and compensate by adjusting the exponent. To add two numbers, first rewrite them with the same power of ten. Then the sum of the coefficients combines quantities expressed on the same scale.
:::

:::esempio{titolo="A common exponent"}
To add $3.4\cdot10^4$ and $8\cdot10^2$, express the second number as $0.08\cdot10^4$. The coefficients add to $3.4+0.08=3.48$, so the result is $3.48\cdot10^4$. The order of magnitude provides a check. The second term is much smaller than the first, and the result remains close to $3.4\cdot10^4$.
:::

:::esempio{#scarto-scientifico titolo="Subtracting nearly equal values"}
An entire strip and the part remaining after a cut measure $1.205\cdot10^4\,\mathrm{mm}$ and $1.197\cdot10^4\,\mathrm{mm}$. The difference between these readings is the length removed. Their common power of ten allows the coefficients to be subtracted directly.
$$
(1.205-1.197)\cdot10^4\,\mathrm{mm}
=0.008\cdot10^4\,\mathrm{mm}
=8\cdot10^1\,\mathrm{mm}.
$$
To compare the results, first round the coefficients to the nearest hundredth, choosing the higher one in a tie. This gives $1.21-1.20=0.01$, or $100\,\mathrm{mm}$. Rounding changes the individual measurements only slightly and has a larger effect on their much smaller difference. Postponing rounding until the final result preserves the digits during the subtraction.
:::

## Derived units and dimensions

:::definizione{#dimensioni titolo="Units follow operations"}
A **dimension** describes the type of a quantity independently of the choice of unit. Area has the dimension of length squared, whether expressed in square metres or square centimetres. Speed has the dimension of length divided by time, whether measured in metres per second or kilometres per hour. In the ratio of a mass in kilograms to a volume in cubic metres, the units give $\mathrm{kg/m^3}$. This is how to obtain the SI unit of density.
:::

:::esempio{#unit-composte titolo="Speed with a numerator and a denominator"}
To convert $72\,\mathrm{km/h}$, substitute $1000\,\mathrm m$ for one kilometre and $3600\,\mathrm s$ for one hour. This gives $\dfrac{72\cdot1000}{3600}\,\mathrm{m/s}=20\,\mathrm{m/s}$. The factor for the hour goes in the denominator because the hour originally appeared there. As a check, motion at $20\,\mathrm{m/s}$ covers $20\cdot3600=72000\,\mathrm m$ in one hour.
:::

:::attenzione{#test-dimensionale titolo="A necessary condition"}
A physical equality can hold only if the two sides have the same dimension. This rules out a formula such as $A=b+h$ for an area, where $b$ and $h$ are lengths. The formula $A=2bh$ does have the dimension of area, but it would give twice the correct value for a rectangle. Dimensional analysis exposes structural errors. The geometry or the physical law also establishes the numerical factor.
:::

:::osservazione{#termini-omogenei titolo="Units of coefficients in a sum"}
A model describes a length by $\ell=\ell_0+bt+ct^2$, where $t$ is time. Every term in the sum must have the dimension of length. The initial term $\ell_0$ is already a length. For $bt$ to be a length as well, $b$ must be in $\mathrm{m/s}$. For the same reason, $c$ is in $\mathrm{m/s^2}$.
$$
[\ell_0]=\mathrm m,\qquad
[bt]=\dfrac{\mathrm m}{\mathrm s}\cdot\mathrm s=\mathrm m,\qquad
[ct^2]=\dfrac{\mathrm m}{\mathrm s^2}\cdot\mathrm s^2=\mathrm m.
$$
The square brackets here denote the unit of each term. With $\ell_0=3\,\mathrm m$, $b=2\,\mathrm{m/s}$ and $c=1\,\mathrm{m/s^2}$, the three contributions after $2\,\mathrm s$ are $3\,\mathrm m$, $4\,\mathrm m$ and $4\,\mathrm m$. Their sum of $11\,\mathrm m$ is meaningful because all three terms are lengths. If the data sheet gave $c$ in $\mathrm{m/s}$, the last term would have the unit $\mathrm{m\,s}$, so the model and the data sheet would be inconsistent.

::grafico{f="3+2*x+x*x;2*x;x*x" xmin=0 xmax=3 ymin=0 ymax=19 linee="0,3 3,3" punti="2,11,pieno" nomi="t (s),l (m)" etichette="2.25,2.16,initial term 3 m" legenda="\text{sum};\text{linear term};\text{quadratic term}" titolo="Three contributions in metres add to 11 m at 2 s"}
:::

## Sums and comparisons

:::osservazione{#confronti titolo="Start with a common unit"}
Two measurements of the same quantity can be added or directly compared when they are expressed in the same unit. To add $35\,\mathrm{cm}$ to $2\,\mathrm m$, convert the centimetres to $0.35\,\mathrm m$. The sum is $2.35\,\mathrm m$. In ratios of quantities of the same kind, the units cancel after conversion. For example, $50\,\mathrm{cm}$ is a quarter of $2\,\mathrm m$ because the ratio in metres is $\dfrac{0.5}{2}$.
:::

:::esempio{titolo="From measurement to the fraction used"}
A roll is $3\,\mathrm m$ long. First $70\,\mathrm{cm}$ is cut off, then $800\,\mathrm{mm}$. Both cuts represent lengths. In metres they are $0.70$ and $0.80$, so the portion used is $1.50\,\mathrm m$. The part left is $1.50\,\mathrm m$, or half the roll. Dividing by the initial length gives a dimensionless fraction, and multiplying by one hundred expresses it as a percentage.
:::

::grafico{assi=0 xmin=-0.1 xmax=3.2 ymin=-0.8 ymax=2 segmenti="0,0,0.7,0;0.7,0,1.5,0;1.5,0,3,0" punti="0,0;0.7,0;1.5,0;3,0" etichette="0.37,0.38,70 cm;1.1,0.38,800 mm;2.24,0.38,1.50 m left" titolo="Two cuts and the remaining length, all shown on the metre scale"}

:::osservazione{#rapporto-percentuale titolo="Separating the fraction from the unit"}
A $750\,\mathrm{mL}$ bottle contains $0.45\,\mathrm L$. To calculate how full it is, express the volume present and the capacity in the same unit.
$$
f=\dfrac{450\,\mathrm{mL}}{750\,\mathrm{mL}}=0.60=60\%.
$$
The unit cancels in the ratio. Changing the unit in both the numerator and the denominator multiplies the two numerical values by the same factor, so the fraction is unchanged. The space available is the complementary fraction $1-0.60=0.40$. To turn $40\%$ into a volume, multiply the fraction by the capacity to obtain $300\,\mathrm{mL}$. The ratio describes the part still available, while the product gives the physical volume.

::grafico{assi=0 xmin=-2 xmax=13 ymin=-1 ymax=11 poligoni="0,0 6,0 6,10 0,10;0,0 6,0 6,6 0,6" segmenti="6,6,9,6;6,10,9,10" etichette="3,3,450 mL;3,8,300 mL;10,10,750 mL;10,6,450 mL" titolo="A constant-cross-section container holds 450 mL out of its 750 mL capacity"}
:::
