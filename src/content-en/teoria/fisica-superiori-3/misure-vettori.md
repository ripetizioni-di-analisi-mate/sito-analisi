---
titolo: "Measurements, uncertainties and vectors"
sommario: "Unit conversions and density, dimensional checks, measurement intervals, components and vector products."
---

## Quantities and units

:::definizione{#unita titolo="Measuring a quantity"}
A **physical quantity** is a reproducible property of a body, that is, one that can be measured again with the same result, such as a length, a mass or a time. Measuring it means comparing it with a **unit of measurement**, a quantity of the same kind chosen as a reference. The notation $\ell=2.40\,\mathrm{m}$ means that the length $\ell$ is $2.40$ times one metre. The same length is $240\,\mathrm{cm}$, because one metre contains $100$ centimetres. The number changes, while the product of the number and the unit describes the same length.

In the **International System** (SI), adopted throughout the scientific world, the units of length, mass and time are the metre ($\mathrm m$), the kilogram ($\mathrm{kg}$) and the second ($\mathrm s$). A quantity is **compound** when its unit is formed by combining other units, such as area in $\mathrm{m^2}$ or speed in $\mathrm{m/s}$. To change its unit, the **conversion factor**, that is, the number by which one multiplies, is applied to each unit it contains. A square centimetre is the area of a square with side $1\,\mathrm{cm}=10^{-2}\,\mathrm m$. Area is side times side, so the factor appears twice.
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm m)^2=10^{-4}\,\mathrm{m^2}.
$$
For the cubic centimetre the side appears three times, so a third power is used, giving $1\,\mathrm{cm^3}=(10^{-2})^3\,\mathrm{m^3}=10^{-6}\,\mathrm{m^3}$. The **litre** is the volume of a cube with side $1\,\mathrm{dm}=10\,\mathrm{cm}$, so $1\,\mathrm L=10^3\,\mathrm{cm^3}$.

A speed in kilometres per hour ($\mathrm{km/h}$) is a length in kilometres divided by a time in hours. To convert to metres per second, $1\,\mathrm{km}=1000\,\mathrm{m}$ is substituted in the numerator and $1\,\mathrm{h}=3600\,\mathrm{s}$ in the denominator.
$$
1\,\mathrm{km/h}=\frac{1000\,\mathrm m}{3600\,\mathrm s}=\frac{5}{18}\,\mathrm{m/s}.
$$
So the value in $\mathrm{km/h}$ is multiplied by $\dfrac{5}{18}$. To go back from $\mathrm{m/s}$ to $\mathrm{km/h}$, one multiplies by the **reciprocal** $\dfrac{18}{5}=3.6$. For example $20\,\mathrm{m/s}=20\cdot3.6\,\mathrm{km/h}=72\,\mathrm{km/h}$, because $20\,\mathrm m$ every second is equivalent to $72\,\mathrm{km}$ in one hour.
:::

:::esempio{#densita-grafico titolo="Density and the mass–volume graph"}
A material is **homogeneous** when it has the same composition in every part. For a homogeneous material the mass $m$ is **directly proportional** to the volume $V$, that is, doubling the volume also doubles the mass, and the ratio $\dfrac mV$ stays constant. This constant ratio, the **coefficient of proportionality**, is the **density** $\rho$ (the Greek letter "rho").
$$
\rho=\frac mV.
$$
With $m=0.540\,\mathrm{kg}$ and $V=200\,\mathrm{cm^3}$, the volume is first converted to cubic metres, $V=200\cdot10^{-6}\,\mathrm{m^3}=2.00\cdot10^{-4}\,\mathrm{m^3}$, and then the division is carried out.
$$
\rho=\frac{0.540\,\mathrm{kg}}{2.00\cdot10^{-4}\,\mathrm{m^3}}=2700\,\mathrm{kg/m^3}.
$$
If mass is expressed in grams and volume in cubic centimetres, the same ratio is $\dfrac{540\,\mathrm g}{200\,\mathrm{cm^3}}=2.70\,\mathrm{g/cm^3}$. The two units differ by a factor of $1000$, because $1\,\mathrm{g/cm^3}=\dfrac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}}=1000\,\mathrm{kg/m^3}$.

In the graph the volume $V$ is on the horizontal axis and the mass $m$ on the vertical axis, and each point is a sample of the material. The **slope** of the line is the increase in $m$ divided by the corresponding increase in $V$, so it is exactly $\rho$, which in the figure is $2.7\,\mathrm{g/cm^3}$. If the balance weighs the material inside a container, it also records the mass of the container, called the **tare**, and the line no longer starts at the origin. The **intercept**, that is, the value of $m$ at $V=0$, is the tare, which in the figure is $100\,\mathrm g$. At a single point the ratio $\dfrac mV$ also includes the container, as at $200\,\mathrm{cm^3}$, where $\dfrac{640}{200}=3.2\,\mathrm{g/cm^3}$. The slope between two points still gives the material's density, because subtracting the two masses cancels the common tare, and $\dfrac{640-100}{200-0}=2.7\,\mathrm{g/cm^3}$.
:::

::grafico{f="2.7*x;2.7*x+100" xmin=0 xmax=220 ymin=0 ymax=720 nomi="V (cm³),m (g)" punti="0,100,pieno;200,540,pieno;200,640,pieno" legenda="\mathrm{sample};\mathrm{sample+container}" titolo="The 100 g tare shifts the line upwards while leaving its slope unchanged."}

:::esempio{titolo="Density of a mixture of two liquids"}
We pour $80\,\mathrm{cm^3}$ of a liquid with density $0.8\,\mathrm{g/cm^3}$ and $20\,\mathrm{cm^3}$ of a liquid with density $1.2\,\mathrm{g/cm^3}$. Suppose no mass is lost and the final volume is the sum of the volumes poured. The masses are obtained from $m=\rho V$ and are $0.8\cdot80\,\mathrm g=64\,\mathrm g$ and $1.2\cdot20\,\mathrm g=24\,\mathrm g$. The mixture therefore has mass $m=88\,\mathrm g$ and volume $V=100\,\mathrm{cm^3}$, which gives
$$
\rho=\frac{88\,\mathrm g}{100\,\mathrm{cm^3}}=0.88\,\mathrm{g/cm^3}.
$$
This value is a **weighted mean** of the two densities, in which each one counts in proportion to its volume. The first liquid occupies $\dfrac{80}{100}=\dfrac45$ of the volume, so the final density is closer to its density than to that of the second liquid. If the two volumes were equal, the result would be their **arithmetic mean** $\dfrac{0.8+1.2}{2}=1.0\,\mathrm{g/cm^3}$. An intermediate value alone cannot distinguish a mixture from a single liquid of the same density.
:::

## Powers of ten and checking formulas

:::osservazione{#dimensioni titolo="Scientific notation and dimensions"}
**Scientific notation** writes a nonzero number in the form $a\cdot10^n$, where the **coefficient** $a$ satisfies $1\leq |a|<10$ and the **exponent** $n$ is an integer. For example $0.002=2\cdot10^{-3}$. To multiply two factors, the coefficients are multiplied and the exponents added, because $10^p\cdot10^q=10^{p+q}$.
$$
(2.0\cdot10^{-3})(3.0\cdot10^5)=(2.0\cdot3.0)\cdot10^{-3+5}=6.0\cdot10^2.
$$
In a division the coefficients are divided and the exponents subtracted. For a sum, instead, both terms are first written with the same power before adding the coefficients.

The **dimensions** of a quantity show which **fundamental quantities** it depends on. Here these are length, mass and time, denoted by $L$, $M$ and $T$, and square brackets are read "dimension of". A velocity is a length divided by a time and an acceleration is a velocity divided by a time, so
$$
[v]=\frac{L}{T}=LT^{-1},\qquad [a]=\frac{LT^{-1}}{T}=LT^{-2}.
$$
The **dimensional check** uses the fact that only quantities with the same dimension can be added. In the model $x=x_0+v_0t+\dfrac12 at^2$, $x$ is the position, $x_0$ the initial position, $v_0$ the initial velocity (the subscript $0$ denotes the initial instant) and $a$ the acceleration. Every **term** of the sum has dimension $L$, as the calculations $[v_0t]=LT^{-1}\cdot T=L$ and $[at^2]=LT^{-2}\cdot T^2=L$ show. The check also works when the formula contains unknown parameters. If $x=kt^2$, the product $kt^2$ is a length, so $[k]=LT^{-2}$, which means the SI unit of $k$ is $\mathrm{m/s^2}$.

The slope of a graph is a vertical increase divided by a horizontal increase, so its unit is the unit of the vertical axis divided by that of the horizontal axis. A graph of $x$ as a function of $t$ has a slope in $\mathrm{m/s}$, that is, a velocity. A velocity–time graph instead has a slope in $\dfrac{\mathrm{m/s}}{\mathrm s}=\mathrm{m/s^2}$, that is, an acceleration. The area under a velocity–time graph is calculated as height times base, so its unit is $\mathrm{m/s}\cdot\mathrm{s}=\mathrm{m}$ and it is a length.
:::

:::attenzione{titolo="The limits of dimensional analysis"}
Dimensions rule out, for example, $x=x_0+v_0$ if $v_0$ is a velocity, because that formula adds a length and a velocity. The expression $x=x_0+at^2$, on the other hand, passes the dimensional check, because $at^2$ is a length. For a start from rest with constant acceleration, however, the actual displacement is $\dfrac12at^2$. The units agree in both cases, so the numerical coefficient, $1$ or $\dfrac12$, does not follow from the dimensions and is determined by the physical law.
:::

:::esempio{titolo="Signed area and displacement"}
In one-dimensional motion the velocity drops from $4\,\mathrm{m/s}$ to zero during the first $2\,\mathrm s$, then reaches $-2\,\mathrm{m/s}$ at $3\,\mathrm s$. The minus sign indicates motion in the opposite direction. The constant slope is $\dfrac{-2-4}{3}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$. The **displacement** is the change in position, final position minus initial position, and it equals the area between the graph and the time axis, with a plus sign above the axis and a minus sign below. The two triangles give
$$
\frac{2\cdot4}{2}\,\mathrm m=+4\,\mathrm m,\qquad -\frac{1\cdot2}{2}\,\mathrm m=-1\,\mathrm m.
$$
Adding them with their signs gives the displacement $(4-1)\,\mathrm m=3\,\mathrm m$. The final position is the initial position plus the displacement. The **distance travelled** is the length of the whole path, forwards and backwards, so the magnitudes of the areas, that is, their values without sign, are added, giving $(4+1)\,\mathrm m=5\,\mathrm m$.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|0;4-2*x;2;3" segmenti="3,0,3,-2" punti="0,4,pieno;2,0,pieno;3,-2,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="The section below the axis contributes −1 m to the displacement."}
:::

## Repeated measurements and uncertainty

:::definizione{#incertezze titolo="Measured value and interval"}
The notation $\ell=(12.4\pm0.1)\,\mathrm{cm}$ (read "plus or minus") gives a **central estimate** of $12.4\,\mathrm{cm}$ and an interval of possible values from $12.4-0.1=12.3$ to $12.4+0.1=12.5\,\mathrm{cm}$. The number $0.1\,\mathrm{cm}$ is the **absolute uncertainty** $\Delta\ell$ (the Greek letter $\Delta$ is read "delta") and is expressed in the same units as the length. Its value depends on three elements.
- The **resolution** of the instrument, that is, the smallest readable change.
- The **calibration**, that is, how the instrument is adjusted with respect to a known reference.
- The **spread** of the measurements, that is, how much repeated readings differ from one another.

The uncertainty is the margin used when reporting the result, and it can be larger than the resolution.

For readings $x_1,x_2,\ldots,x_n$ of the same quantity, where the **subscript** numbers the $n$ readings, the central estimate is the **arithmetic mean** $\bar x$ (read "x bar"), that is, the sum of the readings divided by their number.
$$
\bar x=\frac{x_1+x_2+\cdots+x_n}{n}.
$$
If the exercise uses the **half-range**, half the distance between the largest reading $x_{\max}$ and the smallest $x_{\min}$ is calculated, that is, $\dfrac{x_{\max}-x_{\min}}2$. The centre of the interval between the extremes, the **midpoint**, is instead $\dfrac{x_{\max}+x_{\min}}2$. For the readings $10.0$, $10.0$ and $10.6\,\mathrm{cm}$,
$$
\bar x=\frac{10.0+10.0+10.6}{3}\,\mathrm{cm}=\frac{30.6}{3}\,\mathrm{cm}=10.2\,\mathrm{cm},\qquad \frac{10.6+10.0}{2}\,\mathrm{cm}=10.3\,\mathrm{cm}.
$$
The two estimates agree when the distribution of readings is **symmetric**, that is, when the readings are arranged in the same way above and below the centre.

To cover every reading with a symmetric interval centred on the mean, the larger of the two distances from the mean to the extremes is used. In the example these distances are $10.2-10.0=0.2\,\mathrm{cm}$ and $10.6-10.2=0.4\,\mathrm{cm}$, so the margin is $0.4\,\mathrm{cm}$. The half-range $\dfrac{10.6-10.0}{2}\,\mathrm{cm}=0.3\,\mathrm{cm}$ covers every reading when centred on the midpoint of the extremes, because the interval $(10.3\pm0.3)\,\mathrm{cm}$ runs from $10.0$ to $10.6\,\mathrm{cm}$. The figure shows the same readings in millimetres, with the mean and the midpoint in the two top rows.

::grafico{punti="100,1,pieno;100,2,pieno;106,1,pieno;102,3,pieno;103,4,pieno" etichette="102.16,3.1,Mean;103.16,4.1,Midpoint" xmin=99 xmax=107 ymin=0 ymax=5 nomi="ℓ (mm),row" titolo="The two points at 100 mm represent two equal readings. The two estimates differ by 1 mm."}

The **relative uncertainty** $\varepsilon$ (the Greek letter "epsilon") is the absolute uncertainty divided by the absolute value of the central estimate.
$$
\varepsilon=\frac{\Delta x}{|\bar x|}.
$$
It is **dimensionless**, that is, a pure number with no unit, because numerator and denominator have the same unit. It is meaningful for a nonzero central estimate, because division by zero is not possible. For a measurement $(20.0\pm0.2)\,\mathrm{cm}$ it is $\dfrac{0.2}{20.0}=0.010$, or, multiplying by $100$, $1.0\%$ (**percentage uncertainty**). This fraction is used to compare measurements on different scales. The uncertainty is typically rounded to one or two **significant figures**, counted from the first nonzero digit ($0.16$ has two). The central estimate is written to the same decimal place as the final digit of the uncertainty, as in $(18.00\pm0.16)\,\mathrm{cm}$ or $(18.0\pm0.2)\,\mathrm{cm}$.
:::

:::esempio{#compatibilita titolo="Intervals with a common point"}
Two measurements are **compatible** when their intervals have at least one value in common. The readings $(24.0\pm0.3)\,\mathrm{cm}$ and $(24.5\pm0.2)\,\mathrm{cm}$ have the intervals $[23.7;\,24.3]\,\mathrm{cm}$ and $[24.3;\,24.7]\,\mathrm{cm}$, where the square brackets indicate that the endpoints are included. The two intervals share the value $24.3\,\mathrm{cm}$. In the interval model the two measurements are therefore compatible, even though their centres differ. The criterion is equivalent to comparing the separation of the centres, $24.5-24.0=0.5\,\mathrm{cm}$, with the sum of the uncertainties, $0.3+0.2=0.5\,\mathrm{cm}$, because the intervals touch or overlap when the separation does not exceed the sum. If the procedure introduces the same calibration error in all readings, even two overlapping intervals may be shifted away from the true value.
:::

::grafico{linee="23.7,1 24.3,1;24.3,2 24.7,2" segmenti="24.3,0,24.3,2" punti="23.7,1,pieno;24.3,1,pieno;24.3,2,pieno;24.7,2,pieno" etichette="23.66,0.57,23.7;24.26,0.57,24.3;24.64,0.57,24.7" xmin=23.55 xmax=24.85 ymin=-0.25 ymax=2.8 nomi="ℓ (cm),reading" titolo="The segments share a single value, 24.3 cm."}

:::esempio{titolo="A zero-load reading reveals the offset"}
A stationary scale with no load reads $3\,\mathrm g$ instead of zero. This **offset** is a **systematic** error, the same in every weighing. The same scale reads $83\,\mathrm g$ for one sample and $115\,\mathrm g$ for a second sample. Suppose the offset is **additive**, that is, it adds to the true mass, and constant over this load range. To estimate the individual masses, $3\,\mathrm g$ is subtracted from each reading.
$$
(83-3)\,\mathrm g=80\,\mathrm g,\qquad (115-3)\,\mathrm g=112\,\mathrm g.
$$
The mass difference is still $32\,\mathrm g$ when the readings are used directly, $(115-83)\,\mathrm g=32\,\mathrm g$, because the common calibration term appears in both and cancels in the subtraction. Repeating the weighing many times may refine the estimate of the spread, while the mean still contains the offset. Estimating the common offset requires comparing the reading with a known reference mass, here zero.
:::

## Propagation of uncertainty

:::teorema{#propagazione titolo="First-order worst-case estimate"}
When only the intervals of two measurements $x=x_0\pm\Delta x$ and $y=y_0\pm\Delta y$ are known, with central values $x_0$ and $y_0$, a conservative margin, that is, the worst-case margin, can be calculated without assuming that the errors cancel.

In the sum $z=x+y$, the largest variation from $x_0+y_0$ occurs for two errors of the same sign, because the largest value is $(x_0+\Delta x)+(y_0+\Delta y)=(x_0+y_0)+(\Delta x+\Delta y)$. In the difference $x-y$, the extreme case instead uses opposite errors, because the largest value is $(x_0+\Delta x)-(y_0-\Delta y)=(x_0-y_0)+(\Delta x+\Delta y)$. In both cases the maximum margin is $\Delta x+\Delta y$, so the absolute uncertainties add. If the measurements use the same calibration and have **correlated** errors, that is, errors linked to each other, knowing this link may reduce the effective margin. For example, an offset common to both measurements cancels in the difference.

For a product $A=xy$, each measurement is written as central value plus an error, $x=x_0+\delta x$ and $y=y_0+\delta y$. The letter $\delta$ (lowercase "delta") denotes the actual error, whose absolute value does not exceed $\Delta x$ or $\Delta y$. Expanding the product gives
$$
A=x_0y_0+y_0\,\delta x+x_0\,\delta y+\delta x\,\delta y.
$$
The term $\delta x\,\delta y$ is the product of two small errors, so it is much smaller than the others. It is called a **second-order** term and is neglected, which is why the estimate is called **first-order**. Dividing the change $A-x_0y_0$ by $|x_0y_0|$, the estimated relative margin is
$$
\frac{\Delta A}{|A_0|}\simeq\frac{\Delta x}{|x_0|}+\frac{\Delta y}{|y_0|},
$$
where $A_0=x_0y_0$ and the symbol $\simeq$ is read "approximately equal to". In a product, therefore, the relative uncertainties add.

For a quotient $q=\dfrac{x}{y}$, with $x_0\ne0$ and $|y_0|\gg\Delta y$ (the symbol $\gg$ is read "much greater than"), the two relative contributions add in the first-order worst-case estimate. For positive values, the ratio increases if the numerator increases or the denominator decreases, so the worst case combines the largest numerator with the smallest denominator. If the denominator's interval includes zero, the ratio can become as large as one likes and this rule cannot give a finite interval.
:::

:::esempio{titolo="Estimating density from the extremes"}
Let $m=(200\pm2)\,\mathrm{g}$ and $V=(80\pm1)\,\mathrm{cm^3}$. Since all endpoints are positive, the density is smallest with the smallest mass and the largest volume, and largest with the largest mass and the smallest volume.
$$
\rho_{\min}=\frac{198}{81}\,\mathrm{g/cm^3}\simeq2.444\,\mathrm{g/cm^3},\qquad \rho_{\max}=\frac{202}{79}\,\mathrm{g/cm^3}\simeq2.557\,\mathrm{g/cm^3}.
$$
The interval is approximately $2.444$ to $2.557\,\mathrm{g/cm^3}$. The first-order worst-case estimate starts from the **nominal** value, that is, the one calculated from the central values, $\dfrac{200}{80}\,\mathrm{g/cm^3}=2.50\,\mathrm{g/cm^3}$, and adds the relative uncertainties.
$$
\frac{2}{200}+\frac{1}{80}=1\%+1.25\%=2.25\%.
$$
The margin is therefore $2.25\%$ of $2.50\,\mathrm{g/cm^3}$, about $0.056\,\mathrm{g/cm^3}$. The exact endpoints lie $0.056$ below and $0.057\,\mathrm{g/cm^3}$ above the nominal value, a slight asymmetry that the first-order estimate neglects.

| Case | Mass (g) | Volume (cm³) | Density (g/cm³) |
| --- | --- | --- | --- |
| Minimum | 198 | 81 | 2.444 |
| Nominal | 200 | 80 | 2.500 |
| Maximum | 202 | 79 | 2.557 |

In the figure the rectangle contains all possible pairs of volume and mass.

::grafico{poligoni="79,198 81,198 81,202 79,202" punti="81,198,pieno;80,200,pieno;79,202,pieno" etichette="79.09,202.22,Maximum;80.46,197.58,Minimum" xmin=78.5 xmax=82 ymin=197 ymax=203 nomi="V (cm³),m (g)" titolo="The density extremes occur at opposite corners of the measurement rectangle."}
:::

:::esempio{titolo="A small difference between two lengths"}
Two marks have coordinates along an axis $(50.2\pm0.2)\,\mathrm{cm}$ and $(49.9\pm0.2)\,\mathrm{cm}$. To estimate the **signed distance**, that is, the distance with a sign showing which mark comes first, the second coordinate is subtracted from the first. The central value is $(50.2-49.9)\,\mathrm{cm}=0.3\,\mathrm{cm}$. If only the two intervals are known, the smallest possible result comes from the smallest first coordinate and the largest second one, and the largest result from the largest first coordinate and the smallest second one.
$$
d_{\min}=(50.0-50.1)\,\mathrm{cm}=-0.1\,\mathrm{cm},\qquad d_{\max}=(50.4-49.7)\,\mathrm{cm}=0.7\,\mathrm{cm}.
$$
The interval contains zero, so the measurements do not establish the order of the marks along the axis. Each relative uncertainty is less than $1\%$, because $\dfrac{0.2}{49.9}\simeq0.4\%$. The difference $0.3\,\mathrm{cm}$, however, is comparable to the sum of the absolute uncertainties, $0.4\,\mathrm{cm}$. If the two coordinates share the same additive origin error, that error cancels in the subtraction before the remaining margin is estimated.
:::

## Components of a vector

:::definizione{#componenti titolo="Magnitude, direction and orientation"}
A **scalar** quantity is described by a single number with its unit, such as a mass or a time interval. Displacement is a **vector** because the direction of motion matters, and $5\,\mathrm m$ north lead to a different point from $5\,\mathrm m$ east. A vector is represented by an arrow.
- The **magnitude** is the length of the arrow and is written with the letter without the arrow, $A$ for the vector $\vec A$.
- The **direction** is the line along which the motion occurs.
- The **sense** is the side towards which the arrow points along that line.

With fixed Cartesian axes perpendicular to each other, the vector is specified by its two **components** $A_x$ and $A_y$, that is, by its **signed projections** onto the axes. The projection onto an axis is the segment between the feet of the perpendiculars to the axis drawn from the tail and from the head, with a plus sign if it points in the positive direction of the axis and a minus sign otherwise. For a nonzero vector, the angle $\theta$ (the Greek letter "theta") is measured from the positive $x$-axis **anticlockwise**, that is, opposite to the hands of a clock. The components are the legs of a right triangle with hypotenuse $A$. The cosine of an acute angle is the adjacent leg divided by the hypotenuse and the sine is the opposite leg divided by the hypotenuse, so the first two formulas hold; the third is Pythagoras' theorem.
$$
A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2}.
$$
Beyond $90^\circ$ sine and cosine can be negative and give the sign of the components, as in $\cos120^\circ=-\dfrac12$.

The components have the same units as the magnitude. A negative component points opposite to the positive direction of its axis. The signs of the components show which of the four **quadrants** the arrow points into, numbered anticlockwise starting from the top right. If the components are $-3\,\mathrm{m}$ and $4\,\mathrm{m}$, the magnitude is $\sqrt{(-3)^2+4^2}\,\mathrm m=\sqrt{25}\,\mathrm m=5\,\mathrm{m}$ and the vector points into the second quadrant. The acute reference angle $\alpha$ ("alpha") between the arrow and the $x$-axis satisfies $\tan\alpha=\dfrac43$, where the tangent is the opposite leg divided by the adjacent leg, so $\alpha\simeq53.1^\circ$. The arrow points to the left, so the angle from the positive $x$-axis is $180^\circ-\alpha$, about $126.9^\circ$.

A **free** vector is specified only by magnitude, direction and sense, so moving the tail of its arrow without changing its length and orientation leaves the components unchanged. For a displacement from $P=(x_1,y_1)$ to $Q=(x_2,y_2)$, the coordinates are subtracted in the order final minus initial, giving $\overrightarrow{PQ}=(x_2-x_1,\;y_2-y_1)$. The reverse displacement changes the signs of both components. The magnitude remains the same.
:::

::grafico{vettori="0,0,-3,4,A" segmenti="-3,0,-3,4;0,4,-3,4" xmin=-5 xmax=4 ymin=-1 ymax=5.5 nomi="x (m),y (m)" uguale=1 titolo="The vector has a negative horizontal component and a positive vertical component."}

:::osservazione{#assi-ruotati titolo="Rotated axes"}
If the new $x'$-axis (read "x prime") makes an angle $\phi$ (the Greek letter "phi") with the original $x$-axis, measured anticlockwise, the new horizontal component is found by projecting the vector onto $x'$. For example, the vector $(5,0)\,\mathrm{N}$, where $\mathrm N$ is the newton, the unit of force, has components $(0,-5)\,\mathrm{N}$ after a $90^\circ$ anticlockwise rotation of the axes. Indeed $x'$ points along the old $y$, perpendicular to the vector, and $y'$ points opposite to the old $x$. Its magnitude stays $5\,\mathrm{N}$. For an inclined plane the $x'$-axis is chosen parallel to the plane, because then one component is parallel to the **constraint**, that is, the surface on which the body moves, and the calculations become simpler.

A **unit vector** is a vector of magnitude $1$, which indicates only a direction and a sense. The unit vectors of the new axes have components $(\cos\phi,\sin\phi)$ and $(-\sin\phi,\cos\phi)$ in the original axes. The new projection is the **dot product** of the vector with the unit vector, that is, the sum of the products of corresponding components.

$$
\begin{aligned}
A_{x'}&=A_x\cos\phi+A_y\sin\phi\\[6pt]
A_{y'}&=-A_x\sin\phi+A_y\cos\phi.
\end{aligned}
$$

A **clockwise** rotation of the axes corresponds to a negative angle $\phi$. For $\phi=-90^\circ$ we have $\cos\phi=0$ and $\sin\phi=-1$, so $A_{x'}=-A_y$ and $A_{y'}=A_x$. For example, the vector $(5,-12)\,\mathrm N$ becomes $(12,5)\,\mathrm N$.

For $\vec A=(0,5)\,\mathrm m$ and a rotation of the axes with $\cos\phi=\dfrac45$ and $\sin\phi=\dfrac35$, that is, $\phi\simeq36.9^\circ$, the formulas give
$$
A_{x'}=0\cdot\frac45+5\cdot\frac35=3\,\mathrm m,\qquad A_{y'}=-0\cdot\frac35+5\cdot\frac45=4\,\mathrm m.
$$
The figure shows the two projections onto the tilted axes.

::grafico{vettori="0,0,0,5,A" segmenti="0,5,2.4,1.8;0,5,-2.4,3.2" punti="2.4,1.8,pieno;-2.4,3.2,pieno" riferimento="0,0,36.8699,4.6,x′,y′" xmin=-4 xmax=5 ymin=-1 ymax=6 nomi="x (m),y (m)" uguale=1 titolo="The dashed guides are perpendicular to their respective rotated axes."}
:::

:::esempio{titolo="Changing axes in the plane"}
A vector $\vec A=(6,8)\,\mathrm m$ has magnitude $\sqrt{6^2+8^2}\,\mathrm m=\sqrt{100}\,\mathrm m=10\,\mathrm m$. The axes are rotated $90^\circ$ anticlockwise. The new positive $x'$ direction points along the old $y$ direction, so $A_{x'}=8\,\mathrm m$. The new positive $y'$ direction points opposite to the old $x$ direction, so $A_{y'}=-6\,\mathrm m$. The absolute values of the projections are swapped, while the signs depend on the directions of the new axes. To check the result one calculates $\sqrt{8^2+(-6)^2}\,\mathrm m=10\,\mathrm m$. Rotating the arrow by $90^\circ$ anticlockwise with the axes fixed would instead give components $(-8,6)\,\mathrm m$. The two operations describe different geometric situations, because in the first the axes change and in the second the vector changes.
:::

## Sums and products

:::teorema{#operazioni titolo="Operations on vectors"}
In **head-to-tail** addition, the second displacement starts where the first ends. The **resultant** $\vec R=\vec A+\vec B$ runs from the starting tail to the final head, and its components are found by adding axis by axis.
$$
R_x=A_x+B_x,\qquad R_y=A_y+B_y.
$$
For $\vec A=(3,1)\,\mathrm{m}$ and $\vec B=(-1,3)\,\mathrm{m}$, the result is $\vec R=(3-1,\;1+3)\,\mathrm m=(2,4)\,\mathrm{m}$, so $R=\sqrt{2^2+4^2}\,\mathrm{m}=\sqrt{20}\,\mathrm{m}\simeq4.47\,\mathrm m$. The magnitude of the resultant cannot exceed the sum of the magnitudes, which is the length of the path along the two segments. The magnitude equals $A+B$ when the vectors are parallel with the same sense (**in the same direction**), and it is smallest, equal to the difference of the magnitudes, when they are parallel with opposite senses (**in opposite directions**).

The **dot product** of two vectors is a number. In an **orthonormal** plane, that is, with perpendicular axes and the same unit on both, it is calculated by multiplying the components on the same axis and adding the products, and it also equals the product of the magnitudes and the cosine of the angle $\theta$ between the two vectors.
$$
\vec A\cdot\vec B=A_x B_x+A_y B_y=AB\cos\theta.
$$
For example the vectors $(-3,4)$ and $(4,3)$ in the second figure have dot product $(-3)\cdot4+4\cdot3=0$. If $\vec B$ is nonzero, dividing by $B$ gives the signed projection of $\vec A$ along $\vec B$, that is, $A\cos\theta$. For nonzero vectors the magnitudes are positive, so the sign of the product is that of $\cos\theta$. The product is positive if the included angle is less than $90^\circ$, zero at a right angle (perpendicular vectors) and negative if the angle is greater than $90^\circ$. The zero vector also has zero dot product with every vector, but its angle with another direction is undefined. The dot product also gives the magnitude of the resultant, because $R^2=\vec R\cdot\vec R=A^2+B^2+2\vec A\cdot\vec B=A^2+B^2+2AB\cos\theta$. For perpendicular vectors the last term is zero and Pythagoras' theorem is recovered.

In a **right-handed** system, with $x$ to the right and $y$ upwards, the $z$-axis comes out of the page towards the viewer. In the $xy$ plane the **cross product** $\vec A\times\vec B$ is a vector along $z$, with component
$$
(\vec A\times\vec B)_z=A_x B_y-A_y B_x.
$$
The **right-hand rule** determines its orientation. If the fingers of the right hand curl from $\vec A$ towards $\vec B$, the thumb points along the product, so the component is positive when the turn from $\vec A$ to $\vec B$ is anticlockwise. The magnitude of the product is $AB|\sin\theta|$. If the two vectors represent lengths, it is the area of the parallelogram that has the two vectors as sides. This follows because $B|\sin\theta|$ is the height above base $A$. The dot product uses the parallel projection $B\cos\theta$. The transverse component $B\sin\theta$ appears in the cross product and in the calculation of **torque**, which measures the turning effect of the force. Two parallel vectors have zero cross product, because for them $\sin\theta=0$.
:::

::grafico{vettori="0,0,3,1,A;3,1,2,4,B;0,0,2,4,R" xmin=-1 xmax=5 ymin=-1 ymax=5 nomi="x (m),y (m)" uguale=1 titolo="The resultant joins the origin to the final head"}

::grafico{vettori="0,0,-3,4,A;0,0,4,3,B" xmin=-5 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="The vectors are perpendicular because their dot product is zero"}

:::esempio{#proiezione-orientata titolo="Negative projection and work"}
The **work** $W$ done by a constant force during a displacement is the dot product $W=\vec F\cdot\vec s$. It is measured in joules, with $1\,\mathrm J=1\,\mathrm N\cdot\mathrm m$. A force $\vec F=(-2,5)\,\mathrm{N}$ acts during a displacement $\vec s=(3,0)\,\mathrm{m}$. The dot product is
$$
\vec F\cdot\vec s=(-2)\cdot3+5\cdot0=-6\,\mathrm{J}.
$$
Since $s=3\,\mathrm m$, the projection of the force along the displacement is $\dfrac{\vec F\cdot\vec s}{s}=\dfrac{-6}{3}\,\mathrm N=-2\,\mathrm{N}$. The vertical component may affect other aspects of the motion, but contributes no work here because there is no vertical displacement. The negative sign indicates that the force has a projection opposite to the displacement.

::grafico{vettori="0,0,-2,5,F;0,0,-2,0,Fₓ" segmenti="-2,0,-2,5" etichette="0.42,0.6,direction of s →" xmin=-3 xmax=4 ymin=-1 ymax=6 nomi="Fₓ (N),Fᵧ (N)" uguale=1 titolo="The positive horizontal axis points along s. The force projection points to the left."}
:::

:::esempio{titolo="Area and vector order"}
For $\vec A=(3,0)\,\mathrm m$ and $\vec B=(1,2)\,\mathrm m$,
$$
(\vec A\times\vec B)_z=(3\cdot2-0\cdot1)\,\mathrm{m^2}=+6\,\mathrm{m^2}.
$$
The component is positive because the turn from $\vec A$ to $\vec B$ is anticlockwise. Reversing the order changes the component to $(\vec B\times\vec A)_z=(1\cdot0-2\cdot3)\,\mathrm{m^2}=-6\,\mathrm{m^2}$. The geometric area remains $6\,\mathrm{m^2}$, because it uses the magnitude, and equals the base $3\,\mathrm m$ times the height $2\,\mathrm m$ in the figure.

::grafico{poligoni="0,0 3,0 4,2 1,2" vettori="0,0,3,0,A;0,0,1,2,B" segmenti="1,0,1,2" xmin=-1 xmax=5 ymin=-1 ymax=3.8 nomi="x (m),y (m)" uguale=1 titolo="The base of 3 m and height of 2 m give an area of 6 m²."}
:::
