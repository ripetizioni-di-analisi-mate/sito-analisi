---
titolo: "Units of measurement and conversions"
sommario: "Read units, convert measurements with simple and compound units, and check formulas in physics."
---

## Quantities, measurements, and units

:::definizione{#grandezze titolo="Physical quantity, numerical value, and unit"}
A **physical quantity** is a property that can be expressed by a measurement, such as the length of a test tube or the mass of a sample. A **unit** is the reference against which that property is compared. In the expression $\ell=2\,\mathrm{m}$, $\ell$ denotes the length, $2$ is the numerical value, and $\mathrm{m}$ is the symbol for the meter. The same length can be written as $200\,\mathrm{cm}$. A centimeter is one hundredth of a meter, so it takes one hundred times as many centimeters to represent the same length.

The **International System of Units** (SI) establishes common standards. In the exercises in this chapter we use the meter for length, the kilogram for mass, the second for time, and the mole for amount of substance. Other units are derived from these. The meter per second expresses a length divided by a time. The cubic meter expresses the product of three lengths.
:::

:::esempio{titolo="Adding lengths measured in different units"}
Two consecutive sections of a tube measure $1.8\,\mathrm{m}$ and $45\,\mathrm{cm}$. Find the total length in meters. Since a centimeter is one hundredth of a meter, the second section measures $0.45\,\mathrm{m}$.
$$
\begin{aligned}
45\,\mathrm{cm}&=45\cdot10^{-2}\,\mathrm{m}\\[6pt]
&=0.45\,\mathrm{m}\\[6pt]
\ell_{\mathrm{tot}}&=1.8\,\mathrm{m}+0.45\,\mathrm{m}\\[6pt]
&=2.25\,\mathrm{m}.
\end{aligned}
$$
The lengths can also be added in centimeters. The first section measures $180\,\mathrm{cm}$, so the total is $225\,\mathrm{cm}$. The two results are equivalent. Converting from one form to the other provides a check on the calculation.
:::

:::osservazione{titolo="Choosing a unit for a calculation"}
Before setting up a problem, identify the unit required for the result. To find the distance traveled at a speed expressed in meters per second, use a time in seconds to obtain meters directly. When calculating a concentration in moles per liter, it is convenient to express volume in liters. In each case the unit of the result follows from the operations performed on the units of the given quantities.

The notation is case-sensitive. The symbol $\mathrm{m}$ stands for the meter when used as a unit and for the prefix milli when it precedes a unit, as in $\mathrm{mL}$. The symbol $\mathrm{L}$ stands for the liter. In a formula the italic letter $m$ can represent mass. The context and the upright type used for the unit symbol distinguish it from the quantity symbol.
:::

:::esempio{titolo="Equal distances measured to different precisions"}
A ruler marked in centimeters gives $\ell=2.00\,\mathrm{m}$, a measurement expressed to the nearest centimeter. A second reading expressed as $2.0\,\mathrm{m}$ is given to the nearest decimeter. The central values agree, but the precisions differ. To report them in centimeters while preserving this distinction, write $2.00\cdot10^2\,\mathrm{cm}$ and $2.0\cdot10^2\,\mathrm{cm}$, respectively. The powers of ten show the change of unit, and the digits preceding the power retain the information about the measurement. In problems involving idealized data, when experimental precision is outside the scope of the problem, the numerical value can be treated as exact.
:::

## Prefixes and conversion factors

:::definizione{#prefissi titolo="Decimal prefixes"}
A **prefix** multiplies the unit to which it is attached by a power of ten. The prefix kilo, symbol $\mathrm{k}$, denotes $10^3$. The prefixes deci and centi, with symbols $\mathrm{d}$ and $\mathrm{c}$, denote $10^{-1}$ and $10^{-2}$, respectively. Milli, micro, and nano, with symbols $\mathrm{m}$, $\mu$, and $\mathrm{n}$, denote $10^{-3}$, $10^{-6}$, and $10^{-9}$. For example, $1\,\mu\mathrm{m}$ equals $10^{-6}\,\mathrm{m}$, and $1\,\mathrm{nm}$ equals $10^{-9}\,\mathrm{m}$. On the scale below, a difference of three in the exponent corresponds to a factor of one thousand.

::grafico{assi=0 uguale=1 xmin=-10.5 xmax=4.7 ymin=-1.6 ymax=1.6 vettori="-10,0,4,0" linee="-9,-0.2 -9,0.2;-6,-0.2 -6,0.2;-3,-0.2 -3,0.2;0,-0.2 0,0.2;3,-0.2 3,0.2" etichette="-9,0.7,nm;-6,0.7,µm;-3,0.7,mm;0,0.7,m;3,0.7,km;-9,-0.65,−9;-6,-0.65,−6;-3,-0.65,−3;0,-0.65,0;3,-0.65,3" titolo="The horizontal axis shows the exponent of the power of ten relative to the meter."}
:::

:::definizione{#fattori-conversione titolo="Ratio of equivalent measurements"}
A **conversion factor** is the ratio of two equivalent ways of expressing the same quantity. Since $1\,\mathrm{m}=100\,\mathrm{cm}$, both of the following ratios equal one.
$$
\frac{1\,\mathrm{m}}{100\,\mathrm{cm}}=1,
\qquad
\frac{100\,\mathrm{cm}}{1\,\mathrm{m}}=1.
$$
Multiplying a measurement by either ratio preserves its physical value. Which way to write the ratio depends on the starting unit. To convert a length expressed in centimeters, put centimeters in the denominator of the ratio so that they cancel the centimeters in the measurement. Meters remain in the numerator and are the unit of the result.
:::

:::esempio{titolo="From micrometers to nanometers"}
A fiber has diameter $2.4\,\mu\mathrm{m}$. Since the two prefixes correspond to $10^{-6}$ and $10^{-9}$, one micrometer equals $10^3$ nanometers.
$$
\begin{aligned}
d&=2.4\,\mu\mathrm{m}\cdot
\frac{10^3\,\mathrm{nm}}{1\,\mu\mathrm{m}}\\[6pt]
&=2400\,\mathrm{nm}.
\end{aligned}
$$
The nanometer is the smaller unit, so more nanometers are needed to express the diameter. This comparison provides a quick check on the direction of the conversion. Converting $2400\,\mathrm{nm}$ to meters gives $2.4\cdot10^{-6}\,\mathrm{m}$, the same value in meters as the original measurement.
:::

:::attenzione
The factors represented by prefixes are exact. The precision of a measurement is still determined by the instrument. A length measured as $2.4\,\mu\mathrm{m}$ retains two significant figures after conversion. Writing $2.4\cdot10^3\,\mathrm{nm}$ makes this explicit. The expression $2400\,\mathrm{nm}$ gives the same value, but its trailing zeros alone leave the precision ambiguous.
:::

:::osservazione{titolo="Conversions involving a shift of the zero point"}
Multiplicative factors apply to units that differ by a scale factor. In converting a temperature reading from degrees Celsius to kelvins, the zero point also changes. If $t_{\mathrm{C}}$ is the numerical value in degrees Celsius and $T_{\mathrm{K}}$ is the numerical value in kelvins, then $T_{\mathrm{K}}=t_{\mathrm{C}}+273.15$. For example, $20\,{}^\circ\mathrm{C}$ corresponds to $293.15\,\mathrm{K}$. For a temperature difference, the constant term cancels when the two readings are subtracted. Going from $20$ to $35\,{}^\circ\mathrm{C}$ gives a change of $15\,\mathrm{K}$. Gas problems use absolute temperature, so the value to substitute in those calculations is the one in kelvins.
:::

## Areas, volumes, and capacities

:::osservazione{#aree-volumi titolo="Squaring and cubing the linear conversion factor"}
The area of a rectangle is the product of its base and height. If both are expressed in centimeters, the result is in square centimeters. To convert to square meters, each length introduces a factor of $10^{-2}$. The overall factor is therefore $10^{-4}$. The volume of a rectangular box involves three lengths, so the overall factor is $10^{-6}$.
$$
\begin{aligned}
1\,\mathrm{cm^2}&=(10^{-2}\,\mathrm{m})^2
=10^{-4}\,\mathrm{m^2}\\[6pt]
1\,\mathrm{cm^3}&=(10^{-2}\,\mathrm{m})^3
=10^{-6}\,\mathrm{m^3}.
\end{aligned}
$$
The square in the figure has side length $1\,\mathrm{dm}$. Each side spans ten one-centimeter intervals, so the grid contains $10\cdot10$ small squares. A cube of the same side length contains ten such layers stacked on top of one another, each one centimeter thick. The cube therefore contains one thousand small cubes, each with a volume of one cubic centimeter.

::grafico{uguale=1 xmin=-1 xmax=12.5 ymin=-1 ymax=12.5 nomi="x,y (cm)" linee="0,0 10,0 10,10 0,10 0,0" segmenti="1,0,1,10;2,0,2,10;3,0,3,10;4,0,4,10;5,0,5,10;6,0,6,10;7,0,7,10;8,0,8,10;9,0,9,10;0,1,10,1;0,2,10,2;0,3,10,3;0,4,10,4;0,5,10,5;0,6,10,6;0,7,10,7;0,8,10,8;0,9,10,9" poligoni="0,0 1,0 1,1 0,1" titolo="Distances on both axes are in centimeters. The square of area $1\,\mathrm{dm^2}$ contains one hundred small squares of area $1\,\mathrm{cm^2}$ each."}

::grafico{assi=0 uguale=1 xmin=-0.9 xmax=6.6 ymin=-0.7 ymax=5.3 linee="0,0 4,0 4,4 0,4 0,0;4,0 5.2,0.8 5.2,4.8 1.2,4.8 0,4;4,4 5.2,4.8;0,0.4 4,0.4 5.2,1.2" poligoni="0,0 4,0 4,0.4 0,0.4;4,0 5.2,0.8 5.2,1.2 4,0.4" etichette="2,-0.35,10 cm;5.65,2.85,10 cm" titolo="The shaded band represents one layer of the cube. The layer has base area $100\,\mathrm{cm^2}$ and thickness $1\,\mathrm{cm}$."}
:::

:::definizione{#litri titolo="Liters, milliliters, and cubic units"}
A **liter** equals one cubic decimeter. Since one decimeter equals $10^{-1}\,\mathrm{m}$, one liter equals $10^{-3}\,\mathrm{m^3}$. A milliliter is one thousandth of a liter and equals $10^{-6}\,\mathrm{m^3}$. This is also the volume of one cubic centimeter.
$$
1\,\mathrm{L}=1\,\mathrm{dm^3}=10^{-3}\,\mathrm{m^3},
\qquad
1\,\mathrm{mL}=1\,\mathrm{cm^3}.
$$
The liter is accepted for use with the SI. It is convenient in the laboratory and in problems involving solutions. The cubic meter is convenient in formulas where lengths are expressed in meters.
:::

:::esempio{titolo="Volume of a container in milliliters"}
A rectangular container has internal dimensions $8\,\mathrm{cm}$, $5\,\mathrm{cm}$, and $3\,\mathrm{cm}$. Its internal volume is
$$
V=8\cdot5\cdot3\,\mathrm{cm^3}=120\,\mathrm{cm^3}.
$$
Each cubic centimeter corresponds to one milliliter, so the capacity is $120\,\mathrm{mL}$. In cubic meters the same volume is $1.20\cdot10^{-4}\,\mathrm{m^3}$. The internal dimensions are used because capacity refers to the space available for liquid. The thickness of the walls is excluded from the calculation.
:::

:::esempio{titolo="Area with sides measured in different units"}
A rectangular plate has base $0.4\,\mathrm{m}$ and height $50\,\mathrm{cm}$. To calculate the area in square meters, express both sides in meters. Since $50\,\mathrm{cm}=0.50\,\mathrm{m}$, the area is $0.20\,\mathrm{m^2}$. Alternatively, convert the first side to centimeters. The sides are then $40\,\mathrm{cm}$ and $50\,\mathrm{cm}$, and the area is $2000\,\mathrm{cm^2}$. Since one square meter contains ten thousand square centimeters, $2000\,\mathrm{cm^2}$ again equals $0.20\,\mathrm{m^2}$. These two methods illustrate the difference between converting each length and converting the area after calculating it.
:::

::::teorema{#potenze-unita titolo="Converting a unit raised to a power"}
Let $u$ and $u'$ be two units for the same quantity, related by $1\,u=k\,u'$ with $k>0$. Then, for every positive integer $n$,
$$
1\,u^n=k^n\,u'^n.
$$
The case $n=2$ applies to areas and $n=3$ to volumes. For example, since $1\,\mathrm{mm}=10^{-3}\,\mathrm{m}$, we have $1\,\mathrm{mm^3}=(10^{-3})^3\,\mathrm{m^3}=10^{-9}\,\mathrm{m^3}$. A drop of volume $50\,\mathrm{mm^3}$ therefore occupies $50\cdot10^{-9}\,\mathrm{m^3}=5\cdot10^{-8}\,\mathrm{m^3}$. With $n=3$ and $k=10$, we also obtain $1\,\mathrm{m^3}=10^3\,\mathrm{dm^3}=10^3\,\mathrm{L}$.

:::dimostrazione
The symbol $u^n$ denotes the product of $n$ factors, each equal to $u$. Substituting the equality $1\,u=k\,u'$ into each factor gives
$$
1\,u^n=\underbrace{(k\,u')\cdot(k\,u')\cdots(k\,u')}_{n\ \text{factors}}.
$$
Multiplication is commutative and associative, so the numerical factors and the units can be grouped separately. The product of the numbers is $k^n$ and the product of the units is $u'^n$, so $1\,u^n=k^n\,u'^n$.
:::
::::

## Speed, density, and flow rate

:::osservazione{#composte titolo="Converting a quotient of units"}
For motion in a single direction, the average speed is the displacement in that direction divided by the elapsed time. Average density is mass divided by the volume occupied. The average volumetric flow rate is the volume passing through a cross section divided by the time interval. In all three cases the unit has a numerator and a denominator.

When changing the unit in the denominator, write the factor so that the original denominator cancels. For a speed in kilometers per hour, multiply by $1000\,\mathrm{m}$ divided by $1\,\mathrm{km}$ and by $1\,\mathrm{h}$ divided by $3600\,\mathrm{s}$. The kilometers and hours then cancel.
$$
\begin{aligned}
36\,\mathrm{km/h}
&=36\,\frac{\mathrm{km}}{\mathrm{h}}\cdot
\frac{1000\,\mathrm{m}}{1\,\mathrm{km}}\cdot
\frac{1\,\mathrm{h}}{3600\,\mathrm{s}}\\[6pt]
&=10\,\mathrm{m/s}.
\end{aligned}
$$
At a given speed, the distance traveled in one hour is greater than the distance traveled in one second. Meters, however, are smaller than kilometers. The final numerical value depends on both factors, so comparing the time units alone is insufficient.
:::

:::esempio{titolo="Density with mass in grams and volume in milliliters"}
A homogeneous sample of volume $30\,\mathrm{mL}$ has mass $24\,\mathrm{g}$. First calculate its density in grams per cubic centimeter, since $30\,\mathrm{mL}=30\,\mathrm{cm^3}$.
$$
\begin{aligned}
\rho&=\frac{24\,\mathrm{g}}{30\,\mathrm{cm^3}}\\[6pt]
&=0.8\,\mathrm{g/cm^3}\\[6pt]
&=0.8\cdot\frac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}}
=800\,\mathrm{kg/m^3}.
\end{aligned}
$$
The ratio has the same meaning if the two measurements are expressed in kilograms and cubic meters from the outset. For samples of the same homogeneous substance under the same conditions, mass and volume are directly proportional. The slope in the figure is the ratio of mass in grams to volume in milliliters.

::grafico{f="0.8*x" xmin=0 xmax=51 ymin=0 ymax=46 nomi=",m (g)" punti="30,24" segmenti="0,24,30,24;30,0,30,24" etichette="48.9,-3.7,V;32,22,24 g" titolo="The volume $V$ is in milliliters. The point at $V=30\,\mathrm{mL}$ corresponds to a mass of $24\,\mathrm{g}$. The slope gives the density."}
:::

:::esempio{titolo="Average flow rate from the volume collected"}
In $20\,\mathrm{s}$ a container collects $500\,\mathrm{mL}$ of liquid. The average flow rate is calculated over the same collection interval.
$$
\begin{aligned}
Q&=\frac{500\cdot10^{-6}\,\mathrm{m^3}}{20\,\mathrm{s}}\\[6pt]
&=2.5\cdot10^{-5}\,\mathrm{m^3/s}.
\end{aligned}
$$
The total volume and the collection time are enough to find the average. To determine whether the flow rate was constant, we need to know how much liquid passed through during each subinterval. Converting the units preserves the meaning of the average even when the flow varies.
:::

:::osservazione{titolo="Quotients with different units of time"}
A value in meters per minute can be converted to centimeters per second by multiplying by one hundred and dividing by sixty. For example, motion at $3\,\mathrm{m/min}$ corresponds to $300\,\mathrm{cm}$ per minute, or $5\,\mathrm{cm/s}$. The same procedure applies to a flow rate in liters per minute. A flow rate of $6\,\mathrm{L/min}$ is equivalent to $0.1\,\mathrm{L/s}$, or $10^{-4}\,\mathrm{m^3/s}$. Keeping an intermediate step in liters per second helps distinguish the time conversion from the volume conversion.
:::

## Mass and molar concentrations

:::definizione{#concentrazione titolo="Solute per final volume of solution"}
A solution contains one or more solutes dispersed in a solvent. The **mass concentration** of a solute is the ratio of its mass $m_{\mathrm{s}}$ to the final volume $V$ of the solution. The **molar concentration** is the ratio of the amount of substance $n$ of the solute to that same volume. In these exercises we denote the two concentrations by $c_m$ and $c$.
$$
c_m=\frac{m_{\mathrm{s}}}{V},
\qquad
c=\frac{n}{V}.
$$
With mass in grams, amount of substance in moles, and volume in liters, the respective units are grams per liter and moles per liter. The volume refers to the entire solution after preparation. The initial volume of solvent is a different quantity and does not by itself determine the final volume.
:::

:::esempio{titolo="From grams of solute to moles per liter"}
A solution contains $6\,\mathrm{g}$ of a solute with molar mass $\mathcal{M}=60\,\mathrm{g/mol}$ and has a final volume of $500\,\mathrm{mL}$. Molar mass is the mass of one mole of a substance. Dividing the mass by $\mathcal{M}$ gives $n$. The volume must be expressed in liters to obtain the concentration in the required units.
$$
\begin{aligned}
n&=\frac{6\,\mathrm{g}}{60\,\mathrm{g/mol}}=0.10\,\mathrm{mol}\\[6pt]
V&=500\,\mathrm{mL}=0.50\,\mathrm{L}\\[6pt]
c&=\frac{0.10\,\mathrm{mol}}{0.50\,\mathrm{L}}
=0.20\,\mathrm{mol/L}\\[6pt]
c_m&=\frac{6\,\mathrm{g}}{0.50\,\mathrm{L}}=12\,\mathrm{g/L}.
\end{aligned}
$$
The calculation confirms the relation $c_m=\mathcal{M}c$. Multiplying the units $\mathrm{g/mol}$ and $\mathrm{mol/L}$ leaves $\mathrm{g/L}$. Therefore, at a given mass concentration, the molar concentration depends on the molar mass of the solute.
:::

:::osservazione{titolo="Mass concentration and solution density"}
Mass concentration and density can both be expressed in grams per liter. The numerator of the first contains only the mass of the solute in question. The numerator of the second contains the total mass of the solution. For example, if one liter of solution has mass $1020\,\mathrm{g}$ and contains $25\,\mathrm{g}$ of solute, its density is $1020\,\mathrm{g/L}$ and its mass concentration is $25\,\mathrm{g/L}$. The unit shows that both are ratios of mass to volume. To distinguish the two quantities, identify which mass was measured.
:::

## Dilutions and conservation of solute

:::osservazione{#diluizione titolo="Amount of solute before and after dilution"}
In a dilution, solvent is added to a sample. If all of the solute under consideration remains in solution and its amount of substance is conserved, the initial amount $n_1=c_1V_1$ equals the final amount $n_2=c_2V_2$. The symbols $c_1$ and $V_1$ denote the concentration and volume of the initial sample. The symbols $c_2$ and $V_2$ refer to the final solution.
$$
c_1V_1=c_2V_2,
\qquad
c_2=c_1\frac{V_1}{V_2}.
$$
The ratio of the volumes is dimensionless when both volumes are expressed in the same unit. If the initial concentration is given in moles per liter, this ratio can still be calculated with both volumes in milliliters. To find the amount of substance by multiplying concentration and volume, however, convert the volume to liters.

The figure shows a fixed amount of solute $n=0.040\,\mathrm{mol}$ at different volumes. Going from $0.10$ to $0.20\,\mathrm{L}$ halves the concentration because the volume doubles.

::grafico{curve="t,0.04/t,0.05,0.47" xmin=0 xmax=0.52 ymin=-0.07 ymax=0.9 nomi="V,c (mol/L)" punti="0.1,0.4;0.2,0.2" segmenti="0.1,0,0.1,0.4;0,0.4,0.1,0.4;0.2,0,0.2,0.2;0,0.2,0.2,0.2" etichette="0.075,-0.055,0.10;0.175,-0.055,0.20;0.108,0.437,0.40;0.211,0.233,0.20" titolo="The volume $V$ is in liters. For a fixed amount of solute, the product $cV$ remains equal to $0.040\,\mathrm{mol}$."}
:::

:::esempio{titolo="Two successive dilutions"}
Take $20\,\mathrm{mL}$ at a concentration of $0.80\,\mathrm{mol/L}$ and dilute to $80\,\mathrm{mL}$. Then take $15\,\mathrm{mL}$ of the resulting solution and dilute this second sample to $60\,\mathrm{mL}$. At each step the solute in the sample taken is conserved.
$$
\begin{aligned}
c_2&=0.80\,\mathrm{mol/L}\cdot\frac{20}{80}
=0.20\,\mathrm{mol/L}\\[6pt]
c_3&=0.20\,\mathrm{mol/L}\cdot\frac{15}{60}
=0.050\,\mathrm{mol/L}.
\end{aligned}
$$
Each dilution reduces the concentration to one-quarter of its previous value. The product of the two factors is one-sixteenth, so the final concentration is one-sixteenth of the original concentration. The second calculation uses the $15\,\mathrm{mL}$ actually taken as its initial volume. The $80\,\mathrm{mL}$ is used only to find the concentration of the first diluted solution.
:::

:::attenzione
The phrase “dilute to $100\,\mathrm{mL}$” specifies the final volume of the solution. A sample of $20\,\mathrm{mL}$ diluted to $100\,\mathrm{mL}$ has one-fifth of its initial concentration. If $100\,\mathrm{mL}$ of solvent is added instead and volumes are assumed to be additive, the final volume is $120\,\mathrm{mL}$ and the ratio becomes one-sixth. When volumes of liquids are added together, additivity must be an assumption of the model.
:::

## Dimensional analysis of formulas

:::osservazione{#dimensioni titolo="Dimensions in products, quotients, and sums"}
The dimension of a quantity describes its physical nature independently of the chosen unit. We write $M$ for the dimension of mass, $L$ for length, and $T$ for time. The symbol $[X]$ denotes the dimension of the quantity $X$. If $v$ is a velocity and $a$ an acceleration, the ratio of length to time gives $[v]=LT^{-1}$. The ratio of a change in velocity to a time interval gives $[a]=LT^{-2}$.

In a product, multiply the dimensions of the factors. In a quotient, divide the dimensions. Quantities can be added only if the terms have the same dimension. Before adding their numerical values, express them in compatible units. For example, a displacement of one meter can be added to a displacement of fifty centimeters after both have been expressed in the same unit.
:::

:::esempio{titolo="Checking the displacement formula"}
For motion along a straight line with constant acceleration, the displacement $s$ during a time interval $t$ is $s=v_0t+\dfrac12at^2$, where $v_0$ is the initial velocity. The number $\dfrac12$ is dimensionless. Check the terms separately.
$$
\begin{aligned}
[v_0t]&=LT^{-1}\cdot T=L\\[6pt]
\left[\frac12at^2\right]&=LT^{-2}\cdot T^2=L.
\end{aligned}
$$
Both terms are lengths. To see the role of the square, consider an object with $v_0=0$ and $a=2\,\mathrm{m/s^2}$. At $t=3\,\mathrm{s}$ the displacement is $9\,\mathrm{m}$. The quadratic relation means that doubling the time at the same acceleration quadruples the displacement.

::grafico{f="x^2" xmin=0 xmax=4.7 ymin=0 ymax=21 nomi="t,s (m)" punti="1,1;2,4;3,9;4,16" segmenti="2,0,2,4;4,0,4,16" titolo="The time $t$ is in seconds. Starting from rest with acceleration $2\,\mathrm{m/s^2}$, increasing the time from two to four seconds quadruples the displacement."}
:::

:::attenzione
Dimensional consistency is a necessary condition. Two formulas with different numerical coefficients can pass the same check. For example, the right-hand sides of $s=at^2$ and $s=\dfrac12at^2$ both have dimension $L$. For motion from rest at constant acceleration, the coefficient is $\dfrac12$. It follows from the equation of motion and cannot be determined by dimensional analysis alone.
:::

:::esempio{titolo="Dimension of a spring constant"}
In the linear model of a spring, the magnitude of the spring force $F$ and the magnitude of the extension $\ell$ satisfy $F=k\ell$. The quantity $k$ denotes the spring constant. Force has dimension $MLT^{-2}$ because it is the product of mass and acceleration. The equation gives
$$
[k]=\frac{[F]}{[\ell]}=\frac{MLT^{-2}}{L}=MT^{-2}.
$$
One unit for $k$ is the newton per meter. Since $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$, dividing a newton by a meter gives a kilogram per second squared. The calculation using SI units confirms the dimensional result.
:::

:::esempio{titolo="Pressure and force per unit area"}
A force of magnitude $F$ acts perpendicularly to a surface of area $A$. The average pressure is $p=\dfrac{F}{A}$. Since $[F]=MLT^{-2}$ and $[A]=L^2$, it follows that $[p]=ML^{-1}T^{-2}$. A pascal is therefore a newton per square meter. For example, a force of $12\,\mathrm{N}$ on an area of $6\,\mathrm{cm^2}$ exerts an average pressure of $20\,000\,\mathrm{Pa}$. This value is obtained by dividing $12$ by $6\cdot10^{-4}$ because the area conversion factor must be applied before division. The dimension of pressure also follows from $\rho gh$, with density $\rho$, acceleration $g$, and height difference $h$. Indeed, $ML^{-3}\cdot LT^{-2}\cdot L=ML^{-1}T^{-2}$. This equality explains why a hydrostatic pressure increase can be added to an initial pressure.
:::

## Intensive and extensive quantities

:::definizione{#intensive-estensive titolo="Effect of the amount of material"}
A quantity is **extensive** if it is additive over disjoint subsystems. When two portions of the same material are combined, the total mass is the sum of their masses. The amount of a particular solute is additive if the solute is conserved during mixing. A quantity is **intensive** if its value stays the same when a portion of the same homogeneous substance is taken under the same conditions. The density of a homogeneous sample in equilibrium at a fixed temperature is one example.

For a homogeneous sample of mass $m$ and volume $V$, a portion occupying a fraction $f$ of the volume has mass $fm$. The density of the portion is
$$
\rho_{\mathrm{porzione}}=\frac{fm}{fV}=\frac{m}{V}=\rho,
\qquad 0<f\leq 1.
$$
The mass and volume of the portion change in the same proportion. Their ratio retains its value. Concentration behaves in the same way when a portion of a homogeneous solution is taken.
:::

:::esempio{titolo="Taking a sample and comparing concentrations"}
A homogeneous solution of volume $300\,\mathrm{mL}$ contains $0.12\,\mathrm{mol}$ of solute. A sample of $75\,\mathrm{mL}$ represents one-quarter of the volume. Since the solute is distributed uniformly, the sample contains one-quarter of the initial amount, or $0.030\,\mathrm{mol}$.
$$
\begin{aligned}
c_{\mathrm{soluzione}}
&=\frac{0.12\,\mathrm{mol}}{0.300\,\mathrm{L}}
=0.40\,\mathrm{mol/L}\\[6pt]
c_{\mathrm{prelievo}}
&=\frac{0.030\,\mathrm{mol}}{0.075\,\mathrm{L}}
=0.40\,\mathrm{mol/L}.
\end{aligned}
$$
The points in the figure lie on the same straight line. The ratio of the vertical coordinate to the horizontal coordinate is the slope and represents the concentration in both portions.

::grafico{f="0.4*x" xmin=0 xmax=0.4 ymin=-0.014 ymax=0.17 nomi="V,n (mol)" punti="0.075,0.03;0.3,0.12" segmenti="0.075,0,0.075,0.03;0.3,0,0.3,0.12" etichette="0.052,-0.011,0.075;0.281,-0.011,0.300;0.083,0.023,0.030;0.307,0.109,0.120" titolo="The volume $V$ is in liters. When a sample is taken from a homogeneous solution, the volume and the amount of solute decrease in the same proportion."}
:::

:::osservazione{titolo="Mixing solutions and weighting by volume"}
When two solutions of the same solute are mixed and the final volume is known, find the final concentration by dividing the total amount of solute by that volume. If volumes are additive and the solute is conserved, the formula is
$$
c_{\mathrm{finale}}=\frac{c_1V_1+c_2V_2}{V_1+V_2}.
$$
This is a weighted average of the two concentrations. A larger portion therefore contributes more to the result. Mixing $100\,\mathrm{mL}$ at $0.20\,\mathrm{mol/L}$ with $300\,\mathrm{mL}$ at $0.60\,\mathrm{mol/L}$ gives $0.020\,\mathrm{mol}+0.180\,\mathrm{mol}=0.200\,\mathrm{mol}$ of solute. The final volume is $0.400\,\mathrm{L}$ and the concentration is $0.50\,\mathrm{mol/L}$. The value lies between the initial concentrations and is closer to the concentration of the larger portion.
:::

::::teorema{#miscela-compresa titolo="The concentration of a mixture lies between the initial concentrations"}
Two solutions of the same solute have volumes $V_1>0$ and $V_2>0$ and concentrations $c_1\leq c_2$. If the solutions are mixed, the volumes are additive, and the solute is conserved, the final concentration satisfies
$$
c_1\leq c_{\mathrm{finale}}\leq c_2,
\qquad
\frac{c_{\mathrm{finale}}-c_1}{c_2-c_{\mathrm{finale}}}=\frac{V_2}{V_1}\quad (c_1<c_2).
$$
This result provides a check on mixture calculations. A value outside the interval $[c_1,c_2]$ indicates an error in the amounts of solute or the volumes. Mixing $100\,\mathrm{mL}$ at $0.20\,\mathrm{mol/L}$ with $300\,\mathrm{mL}$ at $0.60\,\mathrm{mol/L}$ gives $0.50\,\mathrm{mol/L}$. The differences from the initial concentrations are $0.30$ and $0.10\,\mathrm{mol/L}$. Their ratio $3$ equals $\dfrac{300}{100}$.

:::dimostrazione
Subtract $c_1$ from the final concentration, expressing $c_1$ with denominator $V_1+V_2$.
$$
\begin{aligned}
c_{\mathrm{finale}}-c_1
&=\frac{c_1V_1+c_2V_2-c_1(V_1+V_2)}{V_1+V_2}\\[6pt]
&=\frac{V_2\,(c_2-c_1)}{V_1+V_2}.
\end{aligned}
$$
The volumes are positive and $c_2-c_1\geq0$, so the difference is greater than or equal to zero and $c_{\mathrm{finale}}\geq c_1$. The same procedure gives
$$
c_2-c_{\mathrm{finale}}=\frac{V_1\,(c_2-c_1)}{V_1+V_2}\geq0,
$$
so $c_{\mathrm{finale}}\leq c_2$. If $c_1<c_2$, the ratio of the two differences is $\dfrac{V_2}{V_1}$ because the factor $\dfrac{c_2-c_1}{V_1+V_2}$ cancels. It follows that the final concentration is closer to the concentration of the solution with the larger volume.
:::
::::
