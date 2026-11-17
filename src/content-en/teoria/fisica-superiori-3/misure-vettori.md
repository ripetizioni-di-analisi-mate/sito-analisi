---
titolo: "Measurements, uncertainties and vectors"
sommario: "Unit conversions and density, dimensional checks, measurement intervals, components and vector products."
---

## Quantities and units

:::definizione{#unita titolo="Measuring a quantity"}
Measurement compares a reproducible property with a unit. The notation $\ell=2.40\,\mathrm{m}$ means $2.40$ times one metre. The same length is $240\,\mathrm{cm}$. The number changes, while the product of the number and the unit describes the same length.

The International System uses metres, kilograms and seconds for length, mass and time. For a compound quantity, the conversion factor applies to the individual units. A square centimetre is a square whose side measures $10^{-2}\,\mathrm{m}$, so its area is $(10^{-2})^2\,\mathrm{m^2}$. For a cubic centimetre the factor is cubed, giving $10^{-6}\,\mathrm{m^3}$.

A speed in kilometres per hour divides a length in kilometres by a time in hours. Use $1\,\mathrm{km}=1000\,\mathrm{m}$ in the numerator and $1\,\mathrm{h}=3600\,\mathrm{s}$ in the denominator. The ratio $\dfrac{1000}{3600}=\dfrac{5}{18}$ multiplies the value in $\mathrm{km/h}$. Its reciprocal converts from $\mathrm{m/s}$ to $\mathrm{km/h}$: travelling $20\,\mathrm{m}$ each second at a steady pace is equivalent to covering $72\,\mathrm{km}$ in an hour.
:::

:::esempio{#densita-grafico titolo="Density and the mass–volume graph"}
For a homogeneous material, mass $m$ increases in proportion to volume $V$. Density $\rho=\dfrac m V$ is the coefficient of proportionality. With $m=0.540\,\mathrm{kg}$ and $V=200\,\mathrm{cm^3}$, first obtain $V=2.00\cdot10^{-4}\,\mathrm{m^3}$ and then $\rho=2700\,\mathrm{kg/m^3}$. If mass is expressed in grams and volume in cubic centimetres, the same ratio is $2.70\,\mathrm{g/cm^3}$.

A graph with $V$ on the horizontal axis and $m$ on the vertical axis shows the masses of samples of different sizes. Its slope is $\rho$. If the balance also records the mass of a container, the intercept is the tare and the ratio $m/V$ at a single point includes the container. The slope between two points still gives the material's density because subtracting the two masses cancels the common tare.
:::

::grafico{f="2.7*x;2.7*x+100" xmin=0 xmax=210 ymin=0 ymax=720 nomi="V,m" punti="0,100,pieno;200,540,pieno;200,640,pieno" titolo="With V in cm³ and m in g, a tare of 100 g raises the line while leaving its slope unchanged"}

## Powers of ten and checking formulas

:::osservazione{#dimensioni titolo="Scientific notation and dimensions"}
Scientific notation expresses a nonzero number as $a\cdot10^n$, with $1\leq |a|<10$. To multiply two factors, multiply the coefficients and add the exponents. For example, $(2.0\cdot10^{-3})(3.0\cdot10^5)=6.0\cdot10^2$. For a sum, first write both terms with the same power before adding the coefficients.

Dimensions show which fundamental quantities a quantity depends on. If $L$, $M$ and $T$ represent length, mass and time, then $[v]=LT^{-1}$ and $[a]=LT^{-2}$. In the model $x=x_0+v_0t+\dfrac12 at^2$, every term has dimension $L$. The check applies to every term, including formulas with unknown parameters. If $x=kt^2$, then $[k]=LT^{-2}$, so the SI unit of $k$ is $\mathrm{m/s^2}$.

In a graph, dividing the units on the vertical axis by those on the horizontal axis gives the unit of the slope. A graph of $x$ as a function of $t$ has a slope in $\mathrm{m/s}$. A velocity–time graph has a slope in $\mathrm{m/s^2}$. The area under a velocity–time graph has unit $\mathrm{m}$ because it multiplies $\mathrm{m/s}$ by $\mathrm{s}$.
:::

:::attenzione{titolo="The limits of dimensional analysis"}
Dimensions rule out, for example, $x=x_0+v_0$ if $v_0$ is a velocity. The expression $x=x_0+at^2$ passes the dimensional check. For a start from rest with constant acceleration, the actual displacement is $\dfrac12at^2$. The units agree in both cases, so the numerical coefficient comes from the physical law.
:::

## Repeated measurements and uncertainty

:::definizione{#incertezze titolo="Measured value and interval"}
A length measurement $\ell=(12.4\pm0.1)\,\mathrm{cm}$ gives a central estimate and an interval from $12.3$ to $12.5\,\mathrm{cm}$. Absolute uncertainty $\Delta\ell$ is expressed in the same units as the length. Its value depends on the instrument's resolution, its calibration and the spread of readings. Resolution is the smallest detectable change, while uncertainty is the margin used when reporting the result.

For readings $x_1,\ldots,x_n$ of the same quantity, use the mean $\bar x=\dfrac{x_1+\cdots+x_n}{n}$. If the exercise uses the half-range, calculate $\dfrac{x_{\max}-x_{\min}}2$. The centre of the interval between the extremes is instead $\dfrac{x_{\max}+x_{\min}}2$. For $10.0$, $10.0$ and $10.6\,\mathrm{cm}$, the mean is $10.2\,\mathrm{cm}$ and the midpoint of the extremes is $10.3\,\mathrm{cm}$. The two estimates agree when the distribution of readings is symmetric.

Relative uncertainty $\varepsilon=\dfrac{\Delta x}{|\bar x|}$ is dimensionless and meaningful for a nonzero central estimate. For $(20.0\pm0.2)\,\mathrm{cm}$ it is $0.010$, or $1.0\%$. This fraction can compare measurements on different scales. The uncertainty is typically rounded to one or two significant figures. Report the central estimate to the same decimal place as the final digit of the uncertainty.
:::

:::esempio{#compatibilita titolo="Intervals with a common point"}
Two readings $(24.0\pm0.3)\,\mathrm{cm}$ and $(24.5\pm0.2)\,\mathrm{cm}$ share the value $24.3\,\mathrm{cm}$. They are therefore compatible in the interval model even though their centres differ. This is equivalent to comparing the separation of the centres, $0.5\,\mathrm{cm}$, with the sum of their uncertainties, also $0.5\,\mathrm{cm}$. Agreement indicates a common possible value. If the procedure introduces the same calibration offset in all readings, even two overlapping intervals may be shifted away from the true value.
:::

::grafico{segmenti="23.7,1,24.3,1;24.3,2,24.7,2;24.3,0,24.3,2.2" punti="23.7,1,pieno;24.3,1,pieno;24.3,2,pieno;24.7,2,pieno" xmin=23.55 xmax=24.85 ymin=-0.25 ymax=2.8 nomi="L,misura" titolo="The segments share the value 24.3 cm"}

## Propagation of uncertainty

:::teorema{#propagazione titolo="First-order worst-case estimate"}
When only the intervals of two measurements are known, a conservative margin can be calculated without assuming errors cancel. In the sum $z=x+y$, the largest variation from $x_0+y_0$ occurs for two errors of the same sign. In the difference $x-y$, the extreme instead uses opposite errors. In both cases the maximum margin is $\Delta x+\Delta y$. If measurements use the same calibration and the errors are correlated, knowledge of the correlation may reduce the effective margin.

For the product $A=xy$, write $x=x_0+\delta x$ and $y=y_0+\delta y$. Expansion gives $A=x_0y_0+y_0\delta x+x_0\delta y+\delta x\delta y$. Divide the change by $|x_0y_0|$ and neglect the second-order term to estimate the relative margin:
$$
\frac{\Delta A}{|A_0|}\simeq\frac{\Delta x}{|x_0|}+\frac{\Delta y}{|y_0|}.
$$
For a quotient $q=x/y$, provided $y_0$ is far from zero compared with $\Delta y$, the two relative contributions likewise add in the worst-case estimate. The ratio increases if the numerator increases or the denominator decreases.
:::

:::esempio{titolo="Estimating density from the extremes"}
Let $m=(200\pm2)\,\mathrm{g}$ and $V=(80\pm1)\,\mathrm{cm^3}$. Since all endpoints are positive, the minimum density is $\dfrac{198}{81}\,\mathrm{g/cm^3}$ and the maximum is $\dfrac{202}{79}\,\mathrm{g/cm^3}$. The interval is approximately $2.444$ to $2.557\,\mathrm{g/cm^3}$. The first-order worst-case estimate starts from the nominal value $2.50\,\mathrm{g/cm^3}$ and uses $1\%+1.25\%=2.25\%$, a margin of about $0.056\,\mathrm{g/cm^3}$. The exact endpoints reveal a slight asymmetry of the ratio that the first-order estimate neglects.
:::

## Components of a vector

:::definizione{#componenti titolo="Magnitude, direction and orientation"}
A mass or a time interval is a scalar. Displacement is a **vector** because the direction of motion matters. An arrow describes both the line along which the motion occurs and the sense along that line. With Cartesian axes fixed, the vector is specified by the two signed projections $A_x,A_y$. For a nonzero vector, the angle $\theta$ is measured anticlockwise from the positive $x$-axis.
$$
A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2}.
$$
The components have the same units as the magnitude. A negative component points opposite to the positive direction of its axis. If the components are $-3\,\mathrm{m}$ and $4\,\mathrm{m}$, the magnitude is $5\,\mathrm{m}$ and the vector points into the second quadrant. The acute reference angle satisfies $\tan\alpha=\dfrac43$. The angle from the positive $x$-axis is $180^\circ-\alpha$, about $126.9^\circ$.

Moving the tail of an arrow without changing its length and orientation leaves the components of a free vector unchanged. For a displacement from $P=(x_1,y_1)$ to $Q=(x_2,y_2)$, subtract each initial coordinate from the corresponding final coordinate. Reversing the displacement changes the signs of both components. The magnitude remains the same.
:::

::grafico{vettori="0,0,-3,4,A" segmenti="-3,0,-3,4;0,4,-3,4" xmin=-4 xmax=2 ymin=-2 ymax=5 uguale=1 titolo="The vector has a negative horizontal component and a positive vertical component"}

:::osservazione{#assi-ruotati titolo="Rotated axes"}
If the new $x'$-axis makes an angle $\phi$ with the original $x$-axis, the new horizontal component is found by projecting the vector onto $x'$. For example, the vector $(5,0)\,\mathrm{N}$ has components $(0,-5)\,\mathrm{N}$ after a $90^\circ$ anticlockwise rotation of the axes. Its magnitude stays $5\,\mathrm{N}$. For an inclined plane, this choice of axes simplifies the calculations because one component is parallel to the constraint.
:::

## Sums and products

:::teorema{#operazioni titolo="Operations on vectors"}
In head-to-tail addition, the second displacement starts where the first ends. The resultant runs from the starting tail to the final head and has components $R_x=A_x+B_x$ and $R_y=A_y+B_y$. For $\vec A=(3,1)\,\mathrm{m}$ and $\vec B=(-1,3)\,\mathrm{m}$, the result is $\vec R=(2,4)\,\mathrm{m}$, so $R=\sqrt{20}\,\mathrm{m}$. The magnitude of the resultant cannot exceed the sum of the magnitudes, which is the length of the path along the two segments.

The **dot product** of two vectors is a number. In an orthonormal plane,
$$
\vec A\cdot\vec B=A_x B_x+A_y B_y=AB\cos\theta.
$$
If $\vec B$ is nonzero, dividing by $B$ gives the signed projection of $\vec A$ along $\vec B$. The sign shows whether the angle with $\vec B$ is acute or obtuse. For two nonzero vectors, a zero dot product implies perpendicularity. The zero vector has a zero dot product with every vector, but has no direction.

In the $xy$ plane, the $z$-component of the **cross product** is $A_x B_y-A_y B_x$. The right-hand rule determines its orientation. Its magnitude is the area of the parallelogram spanned by the two vectors when they represent lengths because $B|\sin\theta|$ is the height above base $A$. The dot product compares projections along the same direction. The cross product describes the transverse part, which will be used in the torque of a force.
:::

::grafico{vettori="0,0,3,1,A;3,1,2,4,B;0,0,2,4,R" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="The resultant joins the origin to the final head"}

::grafico{vettori="0,0,-3,4,A;0,0,4,3,B" xmin=-5 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="The vectors are perpendicular because their dot product is zero"}

:::esempio{#proiezione-orientata titolo="Negative projection and work"}
A force $\vec F=(-2,5)\,\mathrm{N}$ acts during a displacement $\vec s=(3,0)\,\mathrm{m}$. Its projection along the displacement is $\dfrac{\vec F\cdot\vec s}{s}=-2\,\mathrm{N}$. The dot product is $-6\,\mathrm{J}$. The vertical component may affect other aspects of the motion, but contributes no work here because there is no vertical displacement. The negative sign indicates that the force has a projection opposite to the displacement.
:::
