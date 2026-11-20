---
titolo: "Physics methods, quantities and vectors"
sommario: "From units to graphs: conversions, estimates, dimensional checks, trigonometry and vector operations for constructing and checking physical reasoning."
---
:::osservazione{#programma titolo="Reference syllabus"}
This chapter develops unit 1 of the [MUR Physics syllabus for 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf). A physical result needs a number, a unit and a meaning: the following tools preserve all three through each step.
:::
## 1. Measuring a quantity and choosing a unit

:::esempio{titolo="Number, unit and quantity"}
Measuring a length means comparing it with a length chosen as a reference, called a unit. The number "2.4" alone does not describe the thickness of a sample, because it does not say whether it means millimetres or centimetres. The expression $\ell=2.4\,\mathrm{cm}$ contains three pieces of information: the quantity measured, $\ell$, the numerical value, $2.4$, and the unit, the centimetre. The same length expressed in metres is $0.024\,\mathrm{m}$. The sample is the same. The unit has changed, so the number has changed.
:::

:::definizione{#grandezze titolo="Physical quantities and the International System"}
A **physical quantity** is a property of an object or a phenomenon that can be measured, that is, expressed with a number and a unit. Length, mass and time are physical quantities. The **International System** (SI) is the set of units used throughout the world. It has seven base units.

| Base quantity | Unit | Symbol |
| --- | --- | --- |
| Length | metre | $\mathrm{m}$ |
| Mass | kilogram | $\mathrm{kg}$ |
| Time | second | $\mathrm{s}$ |
| Electric current | ampere | $\mathrm{A}$ |
| Thermodynamic temperature | kelvin | $\mathrm{K}$ |
| Amount of substance | mole | $\mathrm{mol}$ |
| Luminous intensity | candela | $\mathrm{cd}$ |

All other units are obtained by multiplying and dividing the base units, and are called **derived units**. Speed is a length divided by a time, so it is measured in $\mathrm{m/s}$. Some derived units have a name of their own: the newton for force, $\mathrm{N}=\mathrm{kg\,m/s^2}$, the joule for energy, $\mathrm{J}=\mathrm{N\,m}$, and the pascal for pressure, $\mathrm{Pa}=\mathrm{N/m^2}$.
:::

:::osservazione{titolo="Definitions, measurements and symbol meanings"}
Every measurement has an **uncertainty**, which depends on the instrument. A stopwatch that shows thousandths of a second, operated by hand, does not measure with a precision of one thousandth, because the reaction time of the person operating it is about two tenths of a second. The number of digits shown and the quality of the measurement are therefore two different things.

Three points about symbols and quantities.

- Capital and lower-case letters have different meanings. The symbol $\mathrm{m}$ denotes the metre and also the prefix milli, while $\mathrm{M}$ denotes the prefix mega.
- The base unit of mass is the kilogram and not the gram.
- Mass and weight are different quantities. Mass is the amount of matter in a body and is measured in kilograms. Weight is the force with which the Earth attracts the body and is measured in newtons.
:::

## 2. Conversions, scientific notation and estimates
:::definizione{#conversioni titolo="Changing the unit without changing the quantity"}
To change units the quantity is multiplied by a **conversion factor**, that is, a fraction with the same amount written in two different units in the numerator and the denominator. The fraction $\dfrac{1000\,\mathrm{m}}{1\,\mathrm{km}}$ equals 1, because 1000 metres and 1 kilometre are the same length. Multiplying by 1 does not change the quantity. Converting $108\,\mathrm{km/h}$ into metres per second requires two factors, one for length and one for time.
$$
108\,\dfrac{\mathrm{km}}{\mathrm{h}}
\dfrac{1000\,\mathrm{m}}{1\,\mathrm{km}}
\dfrac{1\,\mathrm{h}}{3600\,\mathrm{s}}
=30\,\mathrm{m/s}.
$$
The factor is written so that the unit to be removed cancels. Kilometres are in the numerator of the datum, so they go in the denominator of the factor. Hours are in the denominator of the datum, so they go in the numerator of the factor. Metres remain on top and seconds below, and the calculation is $\dfrac{108\cdot1000}{3600}=30$.
:::

:::esempio{titolo="Prefixes, powers and flow rates"}
A **prefix** in front of a unit multiplies it by a power of ten. The most common are kilo (k, $10^3$), centi (c, $10^{-2}$), milli (m, $10^{-3}$), micro (μ, $10^{-6}$) and nano (n, $10^{-9}$). When a unit with a prefix is raised to a power, the prefix is raised to the power too. A square centimetre is the area of a square of side $1\,\mathrm{cm}=10^{-2}\,\mathrm{m}$, so:
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}.
$$
The litre is used for volumes of liquids. One litre is one cubic decimetre, that is, $10^{-3}\,\mathrm{m^3}$, and one millilitre is one cubic centimetre. A **flow rate** is a volume divided by a time, so it requires two conversions. For $4.8\,\mathrm{L/min}$ one substitutes $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$ and $1\,\mathrm{min}=60\,\mathrm{s}$, and obtains $\dfrac{4.8\cdot10^{-3}\,\mathrm{m^3}}{60\,\mathrm{s}}=8.0\cdot10^{-5}\,\mathrm{m^3/s}$.
:::

![One centimetre along each edge gives a factor of ten to the minus six for volume in cubic metres.](/figure/fisica-semestre-filtro/metodi-della-fisica/volume-en.svg)

:::osservazione{titolo="Converting density"}
**Density** is mass divided by volume, so both units are converted. For $1.05\,\mathrm{g/cm^3}$ one substitutes $1\,\mathrm{g}=10^{-3}\,\mathrm{kg}$ and $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$. The result is $1.05\cdot\dfrac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}}=1.05\cdot10^{3}\,\mathrm{kg/m^3}=1050\,\mathrm{kg/m^3}$. The number increases a thousandfold, because a cubic metre contains a million cubic centimetres and a kilogram contains a thousand grams.
:::

:::definizione{#notazione titolo="Scientific notation and order of magnitude"}
**Scientific notation** writes a number as a product $a\cdot10^n$, where $a$ lies between 1 and 10 ($1\le a<10$) and $n$ is an integer. The number $0.00012$, for example, is written $1.2\cdot10^{-4}$. It serves to write very large or very small numbers in little space and to calculate faster. In a product the numbers $a$ are multiplied and the exponents are added. In a sum the two terms are first brought to the same power of ten.
$$
(3\cdot10^{-6})(4\cdot10^3)=1.2\cdot10^{-2},\qquad
3\cdot10^{-6}+4\cdot10^{-5}=4.3\cdot10^{-5}.
$$
In the second calculation $3\cdot10^{-6}$ was rewritten as $0.3\cdot10^{-5}$, and $0.3+4=4.3$.

The **order of magnitude** of a number is the power of ten closest to it. To find it the number is written as $a\cdot10^n$. If $a$ is less than $\sqrt{10}\simeq3.16$ the order of magnitude is $10^n$, otherwise it is $10^{n+1}$. The threshold is $\sqrt{10}$ because it is the number lying halfway between 1 and 10 when one proceeds by multiplication: $1\cdot\sqrt{10}=\sqrt{10}$ and $\sqrt{10}\cdot\sqrt{10}=10$. Some texts use 5 as the threshold, so in exercises the criterion is stated.
:::
![On the scale from 10⁻⁶ to 10⁻⁵ metres, the point at 2 · 10⁻⁶ lies to the left of the threshold and the point at 6 · 10⁻⁶ lies to its right.](/figure/fisica-semestre-filtro/metodi-della-fisica/orders-en.svg "On a logarithmic scale, equal distances correspond to equal ratios. The threshold, expressed in metres, is the geometric mean $\sqrt{10^{-6}\cdot10^{-5}}=\sqrt{10}\cdot10^{-6}$.")

:::osservazione{titolo="Estimates and significant figures"}
The length $6\cdot10^{-6}\,\mathrm{m}$ has order of magnitude $10^{-5}\,\mathrm{m}$, because $6>3.16$. The length $2\cdot10^{-6}\,\mathrm{m}$ has order of magnitude $10^{-6}\,\mathrm{m}$, because $2<3.16$. Estimating the order of magnitude of a result before calculating makes it possible to spot an error of a factor of a thousand, such as a forgotten conversion.

The **significant figures** of a datum are the digits known with certainty plus the first uncertain one. The datum $2.40\,\mathrm{g}$ has three, the datum $0.050\,\mathrm{g}$ has two, because the leading zeros only indicate the position of the decimal point. The result of a multiplication or a division is written with as many significant figures as the datum that has fewest. In intermediate steps one extra digit is kept and rounding is done only at the end.
:::

:::esempio{titolo="Changing units does not improve a measurement"}
A balance gives $m=(2.40\pm0.05)\,\mathrm{g}$. The number after the $\pm$ sign is the **absolute uncertainty**, and the expression means that the mass lies between $2.35\,\mathrm{g}$ and $2.45\,\mathrm{g}$. To change to kilograms both the value and the uncertainty are multiplied by $10^{-3}$.
$$
m=(2.40\cdot10^{-3}\pm5\cdot10^{-5})\,\mathrm{kg}.
$$
The **relative uncertainty** is the ratio of the uncertainty to the value, $\dfrac{0.05}{2.40}\simeq0.021$, that is, about 2%. It is the same in both units, because numerator and denominator were multiplied by the same factor. Changing units therefore does not make a measurement more precise. To compare two measurements expressed in different units, both the values and the uncertainties are brought to the same unit.
:::

## 3. Dimensions: checking a formula before inserting numbers

:::osservazione{titolo="Dimension and unit are different"}
The **dimension** of a quantity indicates what kind of quantity it is, independently of the unit chosen. A distance in metres and one in kilometres have different units and the same dimension, length. The base dimensions of mechanics are three and are written with the letters $M$ (mass), $L$ (length) and $T$ (time). The dimension of a quantity is written by putting its symbol in square brackets. A velocity is a length divided by a time, so $[v]=LT^{-1}$.
:::

:::osservazione{#dimensioni titolo="Dimensional homogeneity"}
A physical formula is correct only if it is **homogeneous**, that is, if it meets two conditions: the two sides of the equality have the same dimension, and all the terms of a sum have the same dimension. Adding a length and a time has no meaning. The check is made by replacing each quantity with its dimension. Density $\rho$ is a mass divided by a volume, so $[\rho]=ML^{-3}$, and pressure $p$ is a force divided by an area, so $[p]=ML^{-1}T^{-2}$. The product $\rho v^2$ has the dimension of a pressure:
$$
[v]=LT^{-1},\qquad [a]=LT^{-2},\qquad
[\rho v^2]=(ML^{-3})(L^2T^{-2})=ML^{-1}T^{-2}=[p].
$$
The check reveals errors. In the formula $x=v_0t+at$ the term $v_0t$ has dimension $LT^{-1}\cdot T=L$, that is, it is a length. The term $at$ has dimension $LT^{-2}\cdot T=LT^{-1}$, that is, it is a velocity. The two terms have different dimensions, so the formula is wrong. With $at^2$ in place of $at$ the second term has dimension $LT^{-2}\cdot T^2=L$ and the formula is homogeneous.
:::

:::osservazione{titolo="Limits of dimensional checks"}
A homogeneous formula is not necessarily correct, because dimensions do not see numerical coefficients. The formulas $x=v_0t+at^2$ and $x=v_0t+\dfrac{at^2}{2}$ are both homogeneous, and only the second describes motion with constant acceleration. The dimensional check therefore allows a wrong formula to be discarded and does not prove that a formula is right.

The same method gives the unit of a constant. If a force is proportional to velocity, $F=bv$, the constant is isolated, $b=\dfrac Fv$, and one obtains $[b]=\dfrac{MLT^{-2}}{LT^{-1}}=MT^{-1}$. The unit of $b$ is therefore $\mathrm{kg/s}$.

The argument of an exponential, a logarithm or a trigonometric function is always a pure number, that is, dimensionless. In the function $\exp\!\left(-\dfrac{t}{\tau}\right)$ the time $t$ is divided by another time $\tau$, and the ratio is a pure number. In sine and cosine the argument is an angle, and one must know whether the formula requires it in degrees or in radians.
:::

:::esempio{titolo="Finding exponents without inventing a coefficient"}
Dimensions also make it possible to find the form of a formula. One wants to know how the oscillation time $t_c$ of a pendulum depends on its length $\ell$ and on the acceleration of gravity $g$. One assumes $t_c=C\,\ell^\alpha g^\beta$, with $C$ a pure number and $\alpha$, $\beta$ exponents to be found. The dimension of $\ell^\alpha g^\beta$ is $L^\alpha\cdot(LT^{-2})^\beta=L^{\alpha+\beta}T^{-2\beta}$. It must equal that of a time, $T$, that is, $L^0T^1$. Equating the exponents of $L$ and of $T$ gives:
$$
\alpha+\beta=0,\qquad-2\beta=1,
\qquad\alpha=\dfrac12,\quad\beta=-\dfrac12.
$$
The formula is therefore $t_c=C\sqrt{\dfrac\ell g}$. A pendulum four times longer has double the oscillation time, because $\sqrt4=2$. The value of $C$ cannot be obtained from dimensions. It is obtained from the laws of mechanics, which for small oscillations give $C=2\pi$, or from a measurement. The result also holds only if the time really depends on $\ell$ and $g$ alone.
:::

## 4. Parts of a system: extensive and intensive quantities
:::definizione{#estensive-intensive titolo="How a quantity changes when a specimen is divided"}
The quantities describing a sample of matter fall into two types, according to what happens when a larger amount of the same material is considered.

- An **extensive** quantity depends on the amount of matter. If two samples are joined, their values add. Mass, volume and energy are extensive.
- An **intensive** quantity does not depend on the amount of matter. Temperature, pressure and density are intensive. A glass of water and a swimming pool at the same temperature have different masses and the same temperature.
:::

:::esempio{titolo="Dividing a homogeneous specimen"}
A homogeneous block of mass $m$ and volume $V$ is cut into four equal parts. Each part has mass $\dfrac m4$ and volume $\dfrac V4$, so mass and volume are extensive. The density of each part is $\rho=\dfrac{\dfrac m4}{\dfrac V4}=\dfrac mV$, equal to that of the whole block, so density is intensive. The factor 4 appears in the numerator and the denominator and cancels. For the same reason the ratio of two extensive quantities is always an intensive quantity.
:::

![For the same homogeneous material, mass and volume increase together with a constant slope equal to density.](/figure/fisica-semestre-filtro/metodi-della-fisica/density-en.svg)

:::osservazione{titolo="Material state and mixing"}
When two equal samples at the same temperature are joined, the mass doubles and the temperature stays the same. When two samples at different temperatures are joined, the final temperature is intermediate and is calculated with an energy balance, described in the unit on thermodynamics. An intensive quantity is therefore a quantity that does not depend on the amount, and its value still changes if the state of the system changes.

The density of a mixture is calculated by dividing the total mass by the total volume. For example, $100\,\mathrm{g}$ of a liquid with volume $100\,\mathrm{cm^3}$ are mixed with $80\,\mathrm{g}$ of another liquid with volume $100\,\mathrm{cm^3}$. If the volumes add, the density of the mixture is $\dfrac{180\,\mathrm{g}}{200\,\mathrm{cm^3}}=0.90\,\mathrm{g/cm^3}$. In this case it coincides with the mean of the two densities only because the two volumes are equal. For some pairs of liquids, such as water and alcohol, the volume of the mixture is slightly less than the sum of the volumes. In exercises the volumes are assumed to add, and this assumption is stated.
:::

## 5. Rearranging formulas, slopes and areas
:::osservazione{#grafici titolo="A physical relation must preserve units"}
An **inverse formula** is obtained by isolating another quantity of the same formula. From density $\rho=\dfrac mV$ the mass is found by multiplying both sides by $V$, that is, $m=\rho V$, and then the volume by dividing by $\rho$, that is, $V=\dfrac m\rho$. The quantity is first isolated with letters and numbers are substituted only at the end, with mutually consistent units.

Many physical laws have the form $y=kx+b$, whose graph is a straight line. The number $k$ is the **slope** and indicates how much $y$ changes when $x$ increases by one unit. It is calculated from two points of the line with $k=\dfrac{\Delta y}{\Delta x}$, where the symbol $\Delta$ denotes a difference between final and initial value. The number $b$ is the **intercept**, that is, the value of $y$ when $x=0$.
:::

:::esempio{titolo="Quantity equations and numerical values"}
A point moves according to the law $x(t)=(2\,\mathrm{m/s})\,t+1\,\mathrm{m}$. The slope is $2\,\mathrm{m/s}$ and is the velocity. The intercept is $1\,\mathrm{m}$ and is the position at time $t=0$. After $1\,\mathrm{s}$ the position is $3\,\mathrm{m}$ and after $2\,\mathrm{s}$ it is $5\,\mathrm{m}$. The time has doubled and the position has not, so $x$ and $t$ are not directly proportional. Two quantities are **directly proportional** only if the line passes through the origin, that is, if $b=0$. The coefficients of the law have a unit, which must be written: the form $x=2t+1$ without units does not say whether times are in seconds or minutes.
:::

![Two points on the position–time line give a six-metre change in three seconds; the intercept is one metre.](/figure/fisica-semestre-filtro/metodi-della-fisica/position-en.svg)

:::osservazione{titolo="Distinguishing slope and area"}
Two different pieces of information are read from a graph, the slope and the area.

The **slope** is calculated with the differences between two points, $\dfrac{\Delta y}{\Delta x}$, and not with the ratio $\dfrac yx$ of the coordinates of a single point. In the previous figure the points $(0\,\mathrm{s};1\,\mathrm{m})$ and $(3\,\mathrm{s};7\,\mathrm{m})$ give $\dfrac{7-1}{3-0}=2\,\mathrm{m/s}$. If the graph is a curve, the ratio of the differences gives the average slope over the interval, and the slope at a point is that of the tangent line at that point.

The **area** between the graph and the horizontal axis has as its unit the product of the units of the two axes. In a velocity-time graph the slope has unit $\dfrac{\mathrm{m/s}}{\mathrm{s}}=\mathrm{m/s^2}$ and is the acceleration. The area has unit $\mathrm{m/s}\cdot\mathrm{s}=\mathrm{m}$ and is the displacement. It is calculated with rectangles where the velocity is constant and with triangles or trapezia where it varies linearly. An area lying below the time axis corresponds to a negative velocity and is counted with a minus sign.
:::

![Positive velocity for two seconds followed by negative velocity for two seconds gives areas with opposite signs.](/figure/fisica-semestre-filtro/metodi-della-fisica/signed-area-en.svg)

:::esempio{titolo="Displacement, distance and duration"}
A point moves at $3\,\mathrm{m/s}$ for $2\,\mathrm{s}$ and then at $-1\,\mathrm{m/s}$ for another $2\,\mathrm{s}$, that is, it goes back. The two areas are $3\cdot2=6\,\mathrm{m}$ and $-1\cdot2=-2\,\mathrm{m}$. The **displacement** is the sum with signs, $6\,\mathrm{m}-2\,\mathrm{m}=4\,\mathrm{m}$, and indicates how far the point is from the start. The **distance travelled** is the sum without signs, $6\,\mathrm{m}+2\,\mathrm{m}=8\,\mathrm{m}$. The average velocity is the displacement divided by the total time, $\dfrac{4\,\mathrm{m}}{4\,\mathrm{s}}=1\,\mathrm{m/s}$.
:::

:::esempio{titolo="Inverting a power preserves geometric meaning"}
The volume of a sphere of radius $r$ is $V=\dfrac43\pi r^3$. To find the radius from the volume, $r^3$ is first isolated, by multiplying both sides by 3 and dividing by $4\pi$, and then the cube root is taken.
$$
r^3=\dfrac{3V}{4\pi},\qquad r=\sqrt[3]{\dfrac{3V}{4\pi}}.
$$
The dimensional check confirms the result, because the cube root of a volume, $L^3$, is a length, $L$. Since volume depends on the cube of the radius, if the radius doubles the volume becomes $2^3=8$ times larger, and if the radius halves the volume becomes one eighth. A 10% increase in radius therefore increases the volume by about 33%, because $1.1^3\simeq1.33$.
:::

## 6. Angles and trigonometric functions
:::definizione{#trigonometria titolo="Sine, cosine, tangent and radians"}
In a right-angled triangle one of the two acute angles, $\theta$, is considered. The side facing the right angle is the hypotenuse. Of the other two sides, one faces $\theta$ (opposite side) and the other is a side of $\theta$ (adjacent side). Three ratios are defined.

- The **sine** is the opposite side divided by the hypotenuse.
- The **cosine** is the adjacent side divided by the hypotenuse.
- The **tangent** is the opposite side divided by the adjacent side.

For angles greater than $90^\circ$ the **unit circle** is used, that is, the circle of radius 1 centred at the origin. The angle $\theta$ is measured from the positive $x$ semi-axis, anticlockwise. The point of the circle corresponding to $\theta$ has $\cos\theta$ as abscissa and $\sin\theta$ as ordinate. Two relations hold.
$$
\sin^2\theta+\cos^2\theta=1,\qquad
\tan\theta=\dfrac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).
$$
Angles are measured in degrees or in **radians**. The measure in radians is the length $s$ of the arc divided by the radius $r$, that is, $\theta=\dfrac sr$. The whole circumference is $2\pi r$ long, so a full turn equals $\dfrac{2\pi r}{r}=2\pi\,\mathrm{rad}$, which corresponds to $360^\circ$.
:::
![Unit circle with a one-hundred-and-twenty-degree angle: negative cosine and positive sine.](/figure/fisica-semestre-filtro/metodi-della-fisica/circle-en.svg)

:::osservazione{titolo="Converting angles and checking signs"}
Since $360^\circ=2\pi\,\mathrm{rad}$, to go from degrees to radians one multiplies by $\dfrac{\pi}{180}$, and for the reverse one multiplies by $\dfrac{180}{\pi}$. For example $60^\circ=60\cdot\dfrac{\pi}{180}=\dfrac{\pi}{3}\,\mathrm{rad}$. The radian is a ratio of two lengths, so it is a pure number. The calculator has two modes, degrees and radians, and the one set must correspond to the datum entered.

The values to remember are the following.

| Angle | Sine | Cosine |
| --- | --- | --- |
| $30^\circ$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ |
| $45^\circ$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ |
| $60^\circ$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ |

The sign of sine and cosine depends on the quadrant in which the angle falls, because they are the coordinates of a point. Between $90^\circ$ and $180^\circ$ the point has negative abscissa and positive ordinate, so the cosine is negative and the sine positive, as in the figure. Between $180^\circ$ and $270^\circ$ both are negative. The tangent has the same value for two angles differing by $180^\circ$. When an angle is found from its tangent, the quadrant is therefore checked from the signs of sine and cosine.
:::

## 7. Vectors, components and addition
:::definizione{#componenti titolo="A scalar and a vector describe different information"}
Physical quantities are of two types.

- A **scalar** is completely described by a number with its unit. Mass, time and temperature are scalars.
- A **vector** is described by three pieces of information: the **magnitude**, that is, the intensity, the **direction**, that is, the line along which it acts, and the **sense**, that is, one of the two ways along that line. Displacement, velocity and force are vectors. It is drawn as an arrow and written as a letter with an arrow above, $\vec a$. Its magnitude is written $a$.

Saying that a force of $10\,\mathrm{N}$ acts on a body is not enough, because the effect depends on where the force points.

For calculations a vector is resolved into **components** along two perpendicular axes, $x$ and $y$. The component $a_x$ is the projection of the vector on the $x$ axis and the component $a_y$ is the projection on the $y$ axis. If $\theta$ is the angle between the vector and the positive $x$ semi-axis, measured anticlockwise, the vector is the hypotenuse of a right-angled triangle whose other two sides are the components. So:
$$
a_x=a\cos\theta,\qquad a_y=a\sin\theta,\qquad
a=\sqrt{a_x^2+a_y^2}.
$$
The third formula is Pythagoras' theorem. A vector of magnitude $10\,\mathrm{N}$ with $\theta=30^\circ$, for example, has components $a_x=10\cdot\dfrac{\sqrt3}{2}\simeq8.7\,\mathrm{N}$ and $a_y=10\cdot\dfrac12=5.0\,\mathrm{N}$. The components have the same unit as the vector. A component is negative when the vector points in the negative sense of that axis. The magnitude is always positive or zero.
:::

:::osservazione{titolo="Choosing coordinate axes"}
The formulas with cosine for $x$ and sine for $y$ hold when the angle is measured from the $x$ axis. If the problem gives the angle relative to the $y$ axis, the roles are swapped: the $y$ component is the side adjacent to the angle and is obtained with the cosine, the $x$ component is the opposite side and is obtained with the sine. A drawing shows which of the two cases applies. If the axes are rotated the components change, while the vector and its magnitude stay the same.
:::

:::definizione{#operazioni-vettori titolo="Addition, subtraction and multiplication by a scalar"}
Two vectors of the same quantity, for example two forces, are added by adding the components along the same axis. The difference is calculated in the same way, with a minus sign.
$$
(\vec{a}\pm\vec{b})_x=a_x\pm b_x,\qquad
(\vec{a}\pm\vec{b})_y=a_y\pm b_y.
$$
On a drawing the sum is constructed with the **tip-to-tail** method. The first vector is drawn, then the second is made to start from the tip of the first. The sum vector, called the **resultant**, goes from the tail of the first to the tip of the second. The difference $\vec{a}-\vec{b}$ is the sum of $\vec{a}$ and the vector opposite to $\vec{b}$, which has the same magnitude and direction as $\vec b$ and the opposite sense.
:::
![Head-to-tail addition of two displacements and the resultant vector, using common coordinates and scales.](/figure/fisica-semestre-filtro/metodi-della-fisica/addition-en.svg)

:::esempio{titolo="Magnitudes, directions and permissible operations"}
Given $\vec{a}=(3;2)\,\mathrm{m}$ and $\vec{b}=(-1;4)\,\mathrm{m}$, the sum has components $3+(-1)=2$ and $2+4=6$, that is, $\vec a+\vec b=(2;6)\,\mathrm{m}$. Its magnitude is $\sqrt{2^2+6^2}=\sqrt{40}\simeq6.3\,\mathrm{m}$. The magnitudes of the two vectors are $\sqrt{13}\simeq3.6\,\mathrm{m}$ and $\sqrt{17}\simeq4.1\,\mathrm{m}$, and their sum is $7.7\,\mathrm{m}$, which differs from $6.3\,\mathrm{m}$. The magnitude of the sum equals the sum of the magnitudes only if the two vectors have the same direction and sense. If they have opposite senses it equals the difference of the magnitudes, and in the other cases it has an intermediate value. If the two vectors are perpendicular, the magnitude of the sum is calculated with Pythagoras' theorem applied to the two magnitudes.

Multiplying a vector by a number $c$ means multiplying all its components by $c$. The magnitude is multiplied by the absolute value of $c$, the direction stays the same and the sense is reversed if $c$ is negative. If the factor is a quantity with a unit, the unit of the result changes too. Mass multiplied by acceleration, for example, gives a force. The sum of two vectors has meaning only between quantities of the same type, so a force is not added to a displacement.
:::

## 8. Two products with different meanings
:::definizione{#prodotti-vettori titolo="Dot product and cross product"}
Two vectors are multiplied together in two different ways, which give results of different types.

The **scalar product** gives a number as its result. It is written with a dot and calculated by multiplying the two magnitudes by the cosine of the angle $\theta$ between the vectors. The factor $b\cos\theta$ is the projection of $\vec b$ along $\vec a$, so the scalar product measures how much one vector points along the other. With components it is calculated by adding the products of corresponding components.
$$
\vec{a}\cdot\vec{b}=ab\cos\theta=a_xb_x+a_yb_y+a_zb_z.
$$
The **vector product** gives a vector as its result. It is written with the symbol $\times$ and has the following properties.

- Its magnitude is $ab\sin\theta$, equal to the area of the parallelogram whose sides are the two vectors.
- Its direction is perpendicular to the plane containing the two vectors.
- Its sense is given by the **right-hand rule**. The thumb points along $\vec a$ and the other fingers along $\vec b$. The product $\vec a\times\vec b$ comes out of the palm.

With components it is calculated as follows:
$$
\vec{a}\times\vec{b}=(a_yb_z-a_zb_y;\ a_zb_x-a_xb_z;\ a_xb_y-a_yb_x).
$$
:::
![The dot product measures a projection; cross-product magnitude equals parallelogram area.](/figure/fisica-semestre-filtro/metodi-della-fisica/products-en.svg)

:::osservazione{titolo="Signs, work and torque"}
The sign of the scalar product depends on the cosine. It is positive if the angle between the vectors is less than $90^\circ$, zero if the vectors are perpendicular and negative if the angle is greater than $90^\circ$. The main application is the **work** of a constant force, $W=\vec{F}\cdot\Delta\vec{r}=F\,\Delta r\cos\theta$, where $\Delta\vec r$ is the displacement. A force perpendicular to the displacement does zero work, because $\cos90^\circ=0$. The scalar product also gives the angle between two vectors, with $\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{ab}$.

The vector product is zero if the vectors are parallel, because $\sin0^\circ=0$, and is greatest if they are perpendicular. The order of the factors matters: swapping them reverses the sense, $\vec{b}\times\vec{a}=-\vec{a}\times\vec{b}$. In the scalar product the order makes no difference. For two vectors in the $xy$ plane the vector product points along the $z$ axis and equals $a_xb_y-a_yb_x$. If this number is positive the vector comes out of the page towards the viewer, with $x$ to the right and $y$ upwards.

The main application is the **moment of a force** (torque), $\vec\tau=\vec{r}\times\vec{F}$, which measures the ability of the force to make a body rotate about a point. The vector $\vec r$ goes from the point of rotation to the point where the force is applied. The magnitude is $rF\sin\theta=Fb$, where $b$ is the **lever arm**, that is, the distance between the point of rotation and the line along which the force acts. A door is pushed far from the hinges, because with a longer lever arm the same force produces a larger moment.

Work and moment are both the product of a force and a length and are different quantities. Work is a scalar and is measured in joules. Moment is a vector and is measured in $\mathrm{N\,m}$.
:::
