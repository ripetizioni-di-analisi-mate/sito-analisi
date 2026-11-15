---
titolo: "Physics methods, quantities and vectors"
sommario: "From units to graphs: conversions, estimates, dimensional checks, trigonometry and vector operations for constructing and checking physical reasoning."
---
:::osservazione{#programma titolo="Reference syllabus"}
This chapter develops unit 1 of the [MUR Physics syllabus for 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf). A physical result needs a number, a unit and a meaning: the following tools preserve all three through each step.
:::
## 1. Measuring a quantity and choosing a unit

:::esempio{titolo="Number, unit and quantity"}
Measuring length means comparing it with a reference length. The inscription “2.4” alone does not describe a specimen’s thickness: it could mean millimetres, centimetres or a unitless ratio. Writing $\ell=2.4\,\mathrm{cm}$ instead separates the quantity $\ell$, its numerical value and its unit. In metres, the same length becomes $0.024\,\mathrm{m}$: the specimen is unchanged, but the number describing it changes.
:::

:::definizione{#grandezze titolo="Physical quantities and the International System"}
A **physical quantity** is a property that can be described quantitatively by comparison. The International System, SI, establishes shared units; its seven base units are:

| Base quantity | Unit | Symbol |
| --- | --- | --- |
| Length | metre | $\mathrm{m}$ |
| Mass | kilogram | $\mathrm{kg}$ |
| Time | second | $\mathrm{s}$ |
| Electric current | ampere | $\mathrm{A}$ |
| Thermodynamic temperature | kelvin | $\mathrm{K}$ |
| Amount of substance | mole | $\mathrm{mol}$ |
| Luminous intensity | candela | $\mathrm{cd}$ |

Derived units combine base units: $\mathrm{m/s}$ for velocity, $\mathrm{N}=\mathrm{kg\,m/s^2}$ for force, $\mathrm{J}=\mathrm{N\,m}$ for energy and $\mathrm{Pa}=\mathrm{N/m^2}$ for pressure.
:::

:::osservazione{titolo="Definitions, measurements and symbol meanings"}
Modern SI definitions fix values of reference constants; experimental **realization** of a unit remains a measurement with uncertainty. A stopwatch displaying many decimal places does not automatically guarantee matching accuracy. Memorising every defining constant is unnecessary here: distinguish the agreed unit from the quality of the instrument realizing it.

Symbols are case-sensitive: $\mathrm{m}$ is the metre, whereas the mega prefix is $\mathrm{M}$. The kilogram, not the gram, is the base mass unit; mass is not weight, which is a force expressed in newtons. A negative value does not make a quantity a vector: Celsius temperature can be negative while remaining scalar. Permissible operations depend on the quantity’s nature, not merely its notation.
:::

## 2. Conversions, scientific notation and estimates
:::definizione{#conversioni titolo="Changing the unit without changing the quantity"}
A conversion factor is a ratio equal to one, formed by two expressions of the same quantity. For example:
$$
108\,\dfrac{\mathrm{km}}{\mathrm{h}}
\dfrac{1000\,\mathrm{m}}{1\,\mathrm{km}}
\dfrac{1\,\mathrm{h}}{3600\,\mathrm{s}}
=30\,\mathrm{m/s}.
$$
Units to be eliminated must appear once in the numerator and once in the denominator. Cancellation determines whether to multiply or divide, without relying on a half-remembered rule.
:::

:::esempio{titolo="Prefixes, powers and flow rates"}
Common prefixes include kilo $10^3$, centi $10^{-2}$, milli $10^{-3}$, micro $10^{-6}$ and nano $10^{-9}$. The prefix belongs to the unit raised to a power:
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}.
$$
A millilitre is one cubic centimetre, whereas a litre is $10^{-3}\,\mathrm{m^3}$. The litre is a non-SI unit equal to the cubic decimetre; the coherent SI volume unit is the cubic metre. Flow rate needs two conversions: $4.8\,\mathrm{L/min}=8.0\cdot10^{-5}\,\mathrm{m^3/s}$. The minute is in the denominator: increasing the number of seconds in the time unit decreases the numerical flow-rate value.
:::

![One centimetre along each edge gives a factor of ten to the minus six for volume in cubic metres.](/figure/fisica-semestre-filtro/metodi-della-fisica/volume-en.svg)

:::osservazione{titolo="Converting density"}
For density, convert both numerator and denominator: $1.05\,\mathrm{g/cm^3}=1050\,\mathrm{kg/m^3}$. The numerical value increases even though grams become kilograms, because the volume unit also changes. Checking only the mass prefix would produce the opposite prediction.
:::

:::definizione{#notazione titolo="Scientific notation and order of magnitude"}
For a positive number, normalized notation is $a\cdot10^n$ with $1\le a<10$ and integer $n$. In products, add exponents; in sums, first express terms with the same power of ten. For example:
$$
(3\cdot10^{-6})(4\cdot10^3)=1.2\cdot10^{-2},\qquad
3\cdot10^{-6}+4\cdot10^{-5}=4.3\cdot10^{-5}.
$$
For **order of magnitude**, we use the nearest power of ten on a logarithmic scale: choose $10^n$ when $a<\sqrt{10}$ and $10^{n+1}$ when $a\ge\sqrt{10}$. State this criterion because different teaching conventions exist.
:::
![The boundary between consecutive orders of magnitude is their geometric mean rather than their arithmetic mean.](/figure/fisica-semestre-filtro/metodi-della-fisica/orders-en.svg)

:::osservazione{titolo="Estimates and significant figures"}
Thus $6\cdot10^{-6}\,\mathrm{m}$ has order $10^{-5}\,\mathrm{m}$, whereas $2\cdot10^{-6}\,\mathrm{m}$ has order $10^{-6}\,\mathrm{m}$. Estimates catch factor-of-one-thousand errors before precise calculation. Exact conversions add no uncertainty; measured data do. For simple products and quotients, retaining the least precise input’s significant figures is a practical rounding rule, not a replacement for uncertainty analysis. Keep guard digits during calculation and round at the end.
:::

:::esempio{titolo="Changing units does not improve a measurement"}
A balance gives $m=(2.40\pm0.05)\,\mathrm{g}$, where the term after the plus-or-minus sign is the stated absolute uncertainty. Changing to kilograms multiplies both numbers by the same factor:
$$
m=(2.40\cdot10^{-3}\pm5\cdot10^{-5})\,\mathrm{kg}.
$$
Converting only the central value would change the interval’s physical meaning. The ratio of uncertainty to central value remains $\dfrac{0.05}{2.40}\simeq0.021$, about two percent. Adding zeros to the display also provides no new information about mass. Comparing measurements in different units therefore requires converting both values and uncertainties to the same unit. This distinction separates an exact change in how a result is written from the experimental quality of the data.
:::

## 3. Dimensions: checking a formula before inserting numbers

:::osservazione{titolo="Dimension and unit are different"}
Two lengths can have different units but the same dimension. Length and time have different dimensions even when their numerical values coincide. We use $M$, $L$ and $T$ for mass, length and time dimensions, without confusing them with unit symbols or the problem’s quantities.
:::

:::osservazione{#dimensioni titolo="Dimensional homogeneity"}
All terms in a physical sum must have the same dimension; both sides of an equality must also be homogeneous. For example:
$$
[v]=LT^{-1},\qquad [a]=LT^{-2},\qquad
[\rho v^2]=(ML^{-3})(L^2T^{-2})=ML^{-1}T^{-2}=[p].
$$
The relation $x=v_0t+at$ is inconsistent: the first term is a length, the second a velocity. Replacing $at$ with a term proportional to $at^2$ restores homogeneity but does not determine the correct numerical coefficient.
:::

:::osservazione{titolo="Limits of dimensional checks"}
Dimensional analysis can rule out a law, not prove it. Both $x=v_0t+at^2$ and $x=v_0t+\dfrac{at^2}{2}$ are homogeneous; only the second describes constant-acceleration motion with zero initial position. Model limits and initial conditions must also be checked.

To obtain a constant’s unit, isolate it first. If $F=bv$, then $[b]=\dfrac{[F]}{[v]}=MT^{-1}$ and its unit is $\mathrm{kg/s}$. Not all constants are pure numbers. Exponential and logarithmic arguments must also be dimensionless: $\exp\!\left(-\dfrac{t}{\tau}\right)$ makes sense when $t$ and $\tau$ are times, whereas $\exp(-t)$ requires a declared normalized numerical time. A sine needs an angle expressed using a consistent convention; inserting degrees into a formula expecting its value in radians changes the result.
:::

:::esempio{titolo="Finding exponents without inventing a coefficient"}
Suppose a characteristic time depends only on a length $\ell$ and an acceleration $g$, in the form $t_c=C\ell^\alpha g^\beta$, with dimensionless $C$. The right side has dimensions $L^{\alpha+\beta}T^{-2\beta}$. To obtain a time, we need:
$$
\alpha+\beta=0,\qquad-2\beta=1,
\qquad\alpha=\dfrac12,\quad\beta=-\dfrac12.
$$
The compatible form is therefore $t_c=C\sqrt{\dfrac\ell g}$. Dimensions do not determine $C$, prove that the dependence is a power law, or exclude dimensionless parameters that were not considered. The coefficient’s value and the model’s suitability require a physical law or experimental data. The conclusion is conditional on the assumed dependencies: omitting a relevant variable can make a dimensionally consistent result incomplete.
:::

## 4. Parts of a system: extensive and intensive quantities
:::definizione{#estensive-intensive titolo="How a quantity changes when a specimen is divided"}
An **extensive** quantity is additive over parts under the stated conditions: mass, volume and internal energy are usual examples. An **intensive** quantity, such as temperature, pressure or density, does not increase merely because more material in the same state is present.
:::

:::esempio{titolo="Dividing a homogeneous specimen"}
Imagine dividing a homogeneous specimen into four equal parts without changing temperature or composition. Each part has one quarter of the original mass and volume; density remains $\rho=\dfrac{\dfrac m4}{\dfrac V4}=\dfrac mV$. This comparison concerns division of the same material, not arbitrary different objects. A larger body can have different density because it is made of another material, without making density extensive.
:::

![For the same homogeneous material, mass and volume increase together with a constant slope equal to density.](/figure/fisica-semestre-filtro/metodi-della-fisica/density-en.svg)

:::osservazione{titolo="Material state and mixing"}
When two identical portions in the same state are combined, mass and internal energy add, whereas temperature stays equal if no work, energy exchange or transformation occurs. Samples at different temperatures instead require an energy balance: “intensive” does not mean “unchanging in every process”. Likewise, mixture density is generally not the arithmetic mean of initial densities; calculate it from total mass and final volume.

Volume additivity must respect the problem’s conditions. Mixing different substances can change total volume relative to the sum of initial volumes because the mixture’s physical state changes. Exercises adding volumes during mixing must declare this approximation. In the additive model at a fixed state, the ratio of two extensive quantities, with a nonzero denominator, is intensive: both scale by the same factor, which cancels. This applies to $\dfrac mV$. Mass squared, however, is not extensive because it quadruples when the amount of system doubles: ratios containing powers require a new scaling check.
:::

## 5. Rearranging formulas, slopes and areas
:::osservazione{#grafici titolo="A physical relation must preserve units"}
From $\rho=\dfrac mV$ follow $m=\rho V$ and $V=\dfrac m\rho$. Manipulate symbols first, then substitute quantities in compatible units. In a linear relation $y=kx+b$, slope is $k=\dfrac{\Delta y}{\Delta x}$ and intercept $b$ has the unit of $y$.
:::

:::esempio{titolo="Quantity equations and numerical values"}
A linear dependence is not necessarily direct proportionality: that also requires $b=0$. For $x(t)=(2\,\mathrm{m/s})t+1\,\mathrm{m}$, doubling $t$ does not double $x$ because initial position is nonzero. The quantity equation includes coefficient units. The numerical form $\dfrac{x}{\mathrm{m}}=2\dfrac{t}{\mathrm{s}}+1$ expresses the same relation using dimensionless variables. Writing only $x=2t+1$ without specifying units leaves the numbers’ meaning ambiguous.
:::

![Two points on the position–time line give a six-metre change in three seconds; the intercept is one metre.](/figure/fisica-semestre-filtro/metodi-della-fisica/position-en.svg)

:::osservazione{titolo="Distinguishing slope and area"}
Slope is not generally $\dfrac yx$: use differences between two points. On a curve, a difference ratio is an average slope over an interval; a tangent describes a local rate. A line’s visual angle also depends on both axis scales: changing the drawing’s scale changes its apparent inclination without changing physical velocity.

Area has a different meaning from slope. In a velocity–time graph, slope has unit $\mathrm{m/s^2}$ and represents acceleration; area has unit $(\mathrm{m/s})\mathrm{s}=\mathrm{m}$ and represents displacement. Constant segments give rectangles; linear segments give triangles or trapezoids. Area below the axis contributes negatively to displacement.
:::

![Positive velocity for two seconds followed by negative velocity for two seconds gives areas with opposite signs.](/figure/fisica-semestre-filtro/metodi-della-fisica/signed-area-en.svg)

:::esempio{titolo="Displacement, distance and duration"}
If a point travels at $3\,\mathrm{m/s}$ for two seconds and $-1\,\mathrm{m/s}$ for another two, displacement is $6\,\mathrm{m}-2\,\mathrm{m}=4\,\mathrm{m}$, whereas distance travelled is $6\,\mathrm{m}+2\,\mathrm{m}=8\,\mathrm{m}$. Average velocity must be weighted by duration: a simple arithmetic mean applies only to equal intervals. These checks allow graph reading without confusing height, slope and area.
:::

:::esempio{titolo="Inverting a power preserves geometric meaning"}
For a sphere, $V=\dfrac43\pi r^3$. Finding radius from volume requires more than dividing by the coefficient: first isolate the cube, then take the cube root:
$$
r^3=\dfrac{3V}{4\pi},\qquad r=\sqrt[3]{\dfrac{3V}{4\pi}}.
$$
The cube root of a volume has the dimension of length; a square root would have dimension $L^{\dfrac32}$ and reveal an error. If volume increases eightfold, radius doubles. Conversely, halving the radius reduces volume to one eighth. This scaling check identifies incorrect rearrangements without inserting numerical data and explains why a percentage change in length does not transfer unchanged to volume.
:::

## 6. Angles and trigonometric functions
:::definizione{#trigonometria titolo="Sine, cosine, tangent and radians"}
In a right triangle, sine is the ratio of the opposite leg to the hypotenuse, cosine of the adjacent leg to the hypotenuse, and tangent of the opposite leg to the adjacent leg. To extend these definitions to any angle, use the unit circle: the point specified by $\theta$ has coordinates $(\cos\theta,\sin\theta)$.
$$
\sin^2\theta+\cos^2\theta=1,\qquad
\tan\theta=\dfrac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).
$$
An angle in radians is arc length divided by radius: $\theta=\dfrac sr$. A complete turn is $2\pi\,\mathrm{rad}=360^\circ$.
:::
![Unit circle with a one-hundred-and-twenty-degree angle: negative cosine and positive sine.](/figure/fisica-semestre-filtro/metodi-della-fisica/circle-en.svg)

:::osservazione{titolo="Converting angles and checking signs"}
The radian is an SI derived unit of dimension one because it is a length ratio. The symbol $\mathrm{rad}$ remains useful to identify a number as an angle. “Dimensionless” does not mean that one radian and one degree have equal values: the conversion factor is $\dfrac{\pi}{180}$. For example, $60^\circ=\dfrac{\pi}{3}\,\mathrm{rad}$.

At $30^\circ$, sine is $\dfrac12$ and cosine is $\dfrac{\sqrt3}{2}$; at $45^\circ$, both are $\dfrac{\sqrt2}{2}$. In the second quadrant cosine is negative and sine positive; in the third both are negative. Predict these signs before calculating. Tangent alone cannot distinguish directions separated by $180^\circ$: inversion using arctangent requires checking the quadrant. The calculator’s degree/radian mode must also match the entered data.
:::

## 7. Vectors, components and addition
:::definizione{#componenti titolo="A scalar and a vector describe different information"}
A **scalar** is specified by value and unit; a **vector** also needs magnitude and direction, including its sense. A $10\,\mathrm{N}$ force is not fully determined without orientation. Choose perpendicular axes and measure $\theta$ anticlockwise from positive $x$:
$$
a_x=a\cos\theta,\qquad a_y=a\sin\theta,\qquad
a=\sqrt{a_x^2+a_y^2}.
$$
Components have the same unit as the vector and can be negative; magnitude is nonnegative.
:::

:::osservazione{titolo="Choosing coordinate axes"}
If the angle is measured from $y$, sine and cosine exchange roles: automatically associating “x” with “cosine” is insufficient. A sketch shows which side is adjacent to the angle. Each component’s absolute value cannot exceed vector magnitude. Rotating axes changes components but leaves the physical vector and its magnitude unchanged. The zero vector has zero components and no defined direction.
:::

:::definizione{#operazioni-vettori titolo="Addition, subtraction and multiplication by a scalar"}
Add corresponding components of compatible quantities:
$$
(\vec{a}\pm\vec{b})_x=a_x\pm b_x,\qquad
(\vec{a}\pm\vec{b})_y=a_y\pm b_y.
$$
Geometrically, place the second vector’s tail at the first vector’s head; the resultant runs from the first tail to the last head. The difference $\vec{a}-\vec{b}$ is the sum of $\vec{a}$ and the opposite of $\vec{b}$.
:::
![Head-to-tail addition of two displacements and the resultant vector, using common coordinates and scales.](/figure/fisica-semestre-filtro/metodi-della-fisica/addition-en.svg)

:::esempio{titolo="Magnitudes, directions and permissible operations"}
For $\vec{a}=(3;2)\,\mathrm{m}$ and $\vec{b}=(-1;4)\,\mathrm{m}$, the sum is $(2;6)\,\mathrm{m}$. Magnitudes do not generally add: $|\vec{a}+\vec{b}|$ lies between $|a-b|$ and $a+b$, with extremes for opposite and matching directions. Applying Pythagoras to the two magnitudes works only for perpendicular vectors. An equilibrant force is the opposite of the resultant, not a vector with the same components.

Multiplication by a pure number $c$ multiplies every component by $c$ and magnitude by $|c|$; if $c<0$, direction reverses. If the scalar has a unit, the product’s unit changes too: mass times acceleration gives force. Adding force and displacement is physically undefined, even though one could formally add their numerical pairs.
:::

## 8. Two products with different meanings
:::definizione{#prodotti-vettori titolo="Dot product and cross product"}
The **dot product** returns a scalar and selects one vector’s projection onto the other:
$$
\vec{a}\cdot\vec{b}=ab\cos\theta=a_xb_x+a_yb_y+a_zb_z.
$$
The **cross product** returns a vector perpendicular to both factors, with magnitude $ab\sin\theta$ for $0\le\theta\le\pi$ and direction given by the right-hand rule. In right-handed Cartesian coordinates:
$$
\vec{a}\times\vec{b}=(a_yb_z-a_zb_y;\ a_zb_x-a_xb_z;\ a_xb_y-a_yb_x).
$$
:::
![The dot product measures a projection; cross-product magnitude equals parallelogram area.](/figure/fisica-semestre-filtro/metodi-della-fisica/products-en.svg)

:::osservazione{titolo="Signs, work and torque"}
The dot product is positive for an acute angle, negative for an obtuse angle and zero for perpendicular vectors; if one factor is zero, no angle can be inferred. Work by a constant force is $W=\vec{F}\cdot\Delta\vec{r}$: a force perpendicular to displacement does no work. The dot product also gives $\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{ab}$ for nonzero vectors.

The cross product vanishes for parallel factors and reaches maximum magnitude at $90^\circ$. Order matters: $\vec{b}\times\vec{a}=-\vec{a}\times\vec{b}$, whereas the dot product is commutative. In the $xy$ plane, the $z$ component is $a_xb_y-a_yb_x$: positive means towards $+z$, out of the page when $x$ points right and $y$ up.

Torque about a point is $\vec\tau=\vec{r}\times\vec{F}$, with $\vec{r}$ from the reference point to the point of application. Magnitude is $rF\sin\theta=Fb$, where $b$ is the perpendicular distance to the force’s line of action. Torque and work both have dimensions of force times length but are different quantities: torque is expressed in $\mathrm{N\,m}$ and work in joules. This demonstrates why dimensions alone cannot fully identify a physical quantity.
:::
