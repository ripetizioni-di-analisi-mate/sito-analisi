---
titolo: Measurements, formulas, and graphs
sommario: Reading instruments, measurement uncertainty, the mean and half-range, rounding, rearranging formulas, proportionality, and plotting data.
---

## Measuring instruments

:::definizione{#strumenti titolo="Range and resolution"}
A measuring instrument compares a quantity with its unit of measurement. A ruler measures lengths, a balance measures masses, and a stopwatch measures time intervals. Each instrument can measure only within a certain range of values.

For an instrument with a scale that starts at zero, the **range** is the largest value it can measure. The **resolution** is the smallest change in the quantity that the instrument can distinguish. On a ruler marked in millimeters, the distance between consecutive marks is $1\,\mathrm{mm}$. On a digital balance that displays values in steps of $1\,\mathrm{g}$, the reading changes in increments of $1\,\mathrm{g}$.

For example, a balance with a range of $5\,\mathrm{kg}$ and a resolution of $1\,\mathrm{g}$ can display $352\,\mathrm{g}$, but a mass of $6\,\mathrm{kg}$ exceeds its measuring range. Range and resolution describe two distinct properties.
:::

:::esempio{titolo="Reading a scale"}
A graduated container has five equal intervals between the marks labeled $20\,\mathrm{mL}$ and $30\,\mathrm{mL}$. The value of one interval is
$$
r=\frac{30-20}{5}\,\mathrm{mL}=2\,\mathrm{mL}.
$$
The letter $r$ denotes the scale division. The third mark after $20\,\mathrm{mL}$ corresponds to $20+3\cdot2=26\,\mathrm{mL}$.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=5.7 ymin=-0.8 ymax=1.3 linee="0,0 5,0;0,-0.15 0,0.15;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.15 5,0.15" punti="3,0,pieno" etichette="0,-0.45,20;1,-0.45,22;2,-0.45,24;3,-0.45,26;4,-0.45,28;5,-0.45,30;3,0.65,reading;5.3,0.7,mL" titolo="The scale shows five intervals of $2\,\mathrm{mL}$ each."}
:::

:::attenzione{titolo="Resolution and accuracy"}
A small reading increment does not guarantee that the instrument reads close to the reference value. A balance that consistently adds $5\,\mathrm{g}$ can display $105\,\mathrm{g}$ for a standard mass of $100\,\mathrm{g}$, even if its resolution is $1\,\mathrm{g}$. **Accuracy** describes agreement with the reference value. Resolution describes the changes the instrument can distinguish.
:::

## Reporting a measurement

:::definizione{#incertezza titolo="Measured value and uncertainty"}
Both the instrument reading and the measurement procedure have limitations. To describe them, the measured value is reported with an **absolute uncertainty**, a positive quantity expressed in the same unit as the measured quantity.

The notation
$$
\ell=(12.4\pm0.1)\,\mathrm{cm}
$$
indicates a measured value of $12.4\,\mathrm{cm}$ and an absolute uncertainty of $0.1\,\mathrm{cm}$. The symbol $\pm$ is read “plus or minus.” Subtracting and adding the uncertainty gives the interval associated with the measurement, from $12.3\,\mathrm{cm}$ to $12.5\,\mathrm{cm}$.

The interval expresses the estimate used in the measurement procedure. Its meaning depends on how the uncertainty was evaluated. The $\pm$ notation alone does not guarantee that the interval contains the true value.
:::

:::osservazione{#stima-lettura titolo="Estimating reading uncertainty"}
An exercise may specify a rule for estimating uncertainty. For example, on an analog scale with equally spaced marks, half the smallest division can be used if only the uncertainty in reading between two marks is considered. For a smallest division of $2\,\mathrm{mL}$, this rule gives $1\,\mathrm{mL}$.

This choice applies to a simplified model. For a real instrument, other contributions to uncertainty can come from its calibration, how it is used, or the stability of the object being measured. The problems state which rule to use, so the calculation has a precise meaning.
:::

:::esempio{titolo="Endpoints of the associated interval"}
For a mass $m=(248\pm2)\,\mathrm{g}$, the central value is $248\,\mathrm{g}$. The endpoints of the associated interval are
$$
m_{\min}=(248-2)\,\mathrm{g}=246\,\mathrm{g},
\qquad
m_{\max}=(248+2)\,\mathrm{g}=250\,\mathrm{g}.
$$
The width of the interval is $4\,\mathrm{g}$, or twice the absolute uncertainty.
:::

## Repeated measurements

:::definizione{#media titolo="Arithmetic mean of the measurements"}
Repeating a measurement can give slightly different readings. A series of $n$ measurements, that is, a series containing $n$ values, can be summarized by the **arithmetic mean**, found by adding all the values and dividing by their number.

If $x_1$, $x_2$, through $x_n$ denote readings of the same quantity, the mean, denoted by $\overline{x}$, is
$$
\overline{x}=\frac{x_1+x_2+\cdots+x_n}{n}.
$$
The dots indicate that any intermediate values are also included in the sum. Three durations of $9.8\,\mathrm{s}$, $10.0\,\mathrm{s}$, and $10.2\,\mathrm{s}$ give a mean duration of $\dfrac{9.8+10.0+10.2}{3}\,\mathrm{s}=10.0\,\mathrm{s}$. The readings must refer to the same quantity under the same conditions and must be expressed in the same unit.
:::

:::definizione{#semidispersione titolo="Half-range"}
A simple way to describe the variation among readings is to use the **half-range**, which is half the difference between the largest and smallest readings:
$$
s=\frac{x_{\max}-x_{\min}}{2}.
$$
Here, $s$ denotes the half-range. For the durations $9.8\,\mathrm{s}$, $10.0\,\mathrm{s}$, and $10.2\,\mathrm{s}$, the result is $s=0.2\,\mathrm{s}$. In an introductory exercise that takes the half-range as the uncertainty, the result is written $(10.0\pm0.2)\,\mathrm{s}$.

The half-range describes only the range of the observed readings. Repeating a measurement can reveal variability, while a systematic error can affect all the readings in the same way. A full estimate of uncertainty also requires information about the instrument and the method.
:::

:::osservazione{titolo="Identical readings"}
Three readings that all equal $20.0\,\mathrm{g}$ have a half-range of zero. This result indicates that the recorded readings are identical. The balance still has its measurement limitations.

If a problem specifies using the larger of the half-range and an assigned instrumental uncertainty of $0.1\,\mathrm{g}$, the uncertainty is taken to be $0.1\,\mathrm{g}$ and the result is written $(20.0\pm0.1)\,\mathrm{g}$. The rule is stated explicitly because it is not a general rule for combining all types of uncertainty.
:::

## Comparing uncertainties

:::definizione{#incertezza-relativa titolo="Relative and percentage uncertainty"}
To compare measurements of positive quantities of different sizes, consider the uncertainty relative to the measured value. If $x>0$ is the measured value and $u$ its absolute uncertainty, the **relative uncertainty** is
$$
u_r=\frac{u}{x}.
$$
The symbol $u_r$ denotes the ratio. The units in the numerator and denominator are the same, so they cancel. To express the ratio as a percentage, multiply its numerical value by $100$ and add the $\%$ sign.

For $\ell=(50\pm1)\,\mathrm{cm}$, this gives $u_r=\dfrac{1}{50}=0.02$, or $2\%$. An uncertainty of one centimeter is two hundredths of the measured length.

The ratio stays the same when the unit changes. Expressed in meters, the same measurement is $(0.50\pm0.01)\,\mathrm{m}$ and again gives $u_r=\dfrac{0.01}{0.50}=0.02$. Both the measured value and its absolute uncertainty were divided by one hundred, so their ratio is unchanged.
:::

:::esempio{titolo="The same absolute uncertainty"}
The measurements $\ell_1=(20\pm1)\,\mathrm{cm}$ and $\ell_2=(100\pm1)\,\mathrm{cm}$ have the same absolute uncertainty. Their relative uncertainties, however, are
$$
u_{r,1}=\frac{1}{20}=0.05=5\%,
\qquad
u_{r,2}=\frac{1}{100}=0.01=1\%.
$$
The second measurement has a **smaller relative uncertainty** because the same one centimeter is a smaller fraction of the measured value. This comparison concerns the stated uncertainties and assumes that they were estimated using comparable rules.
:::

## Rounding

:::teorema{#arrotondamento titolo="Rounding a number"}
To round to a given decimal place, look at the digit immediately to its right. If that digit is less than $5$, the retained digit stays the same. If it is at least $5$, increase the retained digit by one. Drop the remaining digits. For values exactly halfway between two choices, the convention used here is to round positive numbers up.

For example, $3.246$ rounds to $3.25$ to the nearest hundredth because the third decimal digit is $6$. By contrast, $3.241$ rounds to $3.24$ because its third decimal digit is $1$. The symbol $\approx$ indicates that the two values are approximately equal.
:::

:::osservazione{#cifre-misura titolo="Digits in the measured value and its uncertainty"}
For the measurements in this course, uncertainty is usually reported with one significant digit, or with two when this avoids excessive rounding. **Significant digits** are the digits that express the precision with which a number is reported, starting with the first nonzero digit.

Round the measured value to the same decimal place as the reported uncertainty. If the calculation gives a mean length of $12.437\,\mathrm{cm}$ and the uncertainty is reported as $0.1\,\mathrm{cm}$, write $(12.4\pm0.1)\,\mathrm{cm}$. If the assigned uncertainty is $0.05\,\mathrm{cm}$, write $(12.44\pm0.05)\,\mathrm{cm}$ instead.

More digits can be kept in intermediate steps to prevent successive rounding from changing the final result. Exact conversions, such as the factor of $100$ between meters and centimeters, introduce no additional uncertainty.
:::

## Formulas and unknown quantities

:::definizione{#formula-inversa titolo="Rearranging a formula"}
A **formula** expresses a relationship between quantities using letters. Each letter represents a specified quantity. In the density formula, $\rho=\dfrac{m}{V}$, $m$ is the mass and $V$ is the volume.

A **rearranged formula** expresses the same relationship in a form that gives a different quantity. To find the mass, multiply both sides by the volume:
$$
\rho V=\frac{m}{V}V=m,
\qquad m=\rho V.
$$
To find the volume when the density is positive, divide both sides of $\rho V=m$ by $\rho$ to obtain
$$
V=\frac{m}{\rho}.
$$
These operations are valid because the volume and density in question are positive. This procedure allows a single relationship to determine any of the three quantities from the other two.
:::

:::esempio{titolo="Finding a height"}
The area of a rectangle is $A=bh$. If the area $A=18\,\mathrm{m^2}$ and the base $b=6\,\mathrm{m}$ are known, divide by the base, which is positive. This gives
$$
h=\frac{A}{b}=\frac{18\,\mathrm{m^2}}{6\,\mathrm{m}}=3\,\mathrm{m}.
$$
The units are $\mathrm{m^2}$ divided by $\mathrm{m}$, so the remaining unit is the meter. The result represents a length, as required. Substituting it into the original formula gives $6\cdot3=18\,\mathrm{m^2}$ again.
:::

## Proportionality

:::definizione{#proporzionalita-diretta titolo="Directly proportional quantities"}
Two positive quantities are **directly proportional** when their ratio remains constant. Denoting them by $x$ and $y$, we write
$$
y=kx,
\qquad k=\frac{y}{x},
$$
where $k$ is the constant of proportionality. If $x$ doubles, $y$ also doubles. If $x$ triples, $y$ also triples.

For a given homogeneous material under the same conditions, mass and volume are directly proportional. If the density is $2\,\mathrm{g/cm^3}$, volumes of $1$, $2$, and $3\,\mathrm{cm^3}$ correspond to masses of $2$, $4$, and $6\,\mathrm{g}$. The ratio of mass to volume remains $2\,\mathrm{g/cm^3}$.

::grafico{f="2*x" xmin=0 xmax=4 ymin=0 ymax=8 nomi="V,m" punti="1,2;2,4;3,6" legenda="m=\rho V" titolo="Mass in grams and volume in cubic centimeters for a density of $\rho=2\,\mathrm{g/cm^3}$."}
:::

:::definizione{#proporzionalita-inversa titolo="Inversely proportional quantities"}
Two positive quantities are **inversely proportional** when their product remains constant. We write
$$
xy=k,
\qquad y=\frac{k}{x}.
$$
If $x$ doubles, $y$ is halved because the product must stay the same. For rectangles with a fixed area $A=12\,\mathrm{cm^2}$, base and height are inversely proportional. The pairs $b=2\,\mathrm{cm}$, $h=6\,\mathrm{cm}$ and $b=4\,\mathrm{cm}$, $h=3\,\mathrm{cm}$ both give an area of $12\,\mathrm{cm^2}$.

::grafico{f="12/x" xmin=0 xmax=8 ymin=0 ymax=12 nomi="b,h" punti="2,6;4,3;6,2" legenda="h=\dfrac{A}{b}" titolo="Base and height in centimeters for rectangles with an area of $12\,\mathrm{cm^2}$."}
:::

## Tables and graphs

:::definizione{#grafici titolo="Plotting data on two axes"}
A table lists pairs of corresponding values. A **Cartesian graph** represents each pair as a point. The horizontal axis represents the first quantity and the vertical axis the second. To locate the point, move to the horizontal value and then to the vertical value.

For example, the pair $V=2\,\mathrm{cm^3}$, $m=4\,\mathrm{g}$ is represented by the point with coordinates $(2,4)$ when the axes use these units. The name of each quantity and its unit make the graph readable. The marks on the two axes may use different scales. On each scale, equal numerical increments correspond to equal intervals.
:::

:::osservazione{#retta-con-intercetta titolo="A straight line with an initial value"}
An empty container has a mass of $2\,\mathrm{g}$. A liquid with density $1\,\mathrm{g/cm^3}$ is added to it. If $V$ is the volume of the liquid in cubic centimeters, the total mass in grams increases according to $m=2+V$. The term $2$ represents the mass already present when the volume of liquid is zero.

The graph is a straight line that crosses the vertical axis at $2$. For $V=1$, the numerical ratio $\dfrac{m}{V}$ is $3$. For $V=2$, it is $2$. The ratios differ, so this relationship is not a direct proportionality. The increase in mass above the initial mass, however, is directly proportional to the volume added.

::grafico{f="x+2" xmin=0 xmax=6 ymin=0 ymax=8 nomi="V,m" punti="0,2;1,3;2,4;4,6" legenda="m=m_0+\rho V" titolo="Liquid volume in cubic centimeters and total mass in grams for a container of mass $m_0=2\,\mathrm{g}$."}
:::

:::osservazione{titolo="Measured points and a proposed relationship"}
Each measured point represents a pair of observed values. A line between the points represents either a choice of how to connect them or a proposed relationship that describes the data. Using the line for intermediate values requires the assumption that the relationship also holds between measurements.

The numerical pairs $(1,2)$, $(2,4)$, and $(3,6)$ are consistent with the relationship $y=2x$. Assuming it holds over the interval in question, $x=2.5$ corresponds to $y=5$. A limited set of points alone does not prove that the same law holds for all values outside the observed interval.
:::
