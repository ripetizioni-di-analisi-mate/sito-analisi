---
titolo: Physical quantities, units of measurement and vectors
sommario: How a physical quantity is measured in the International System, how formulas and results are checked with dimensional analysis and significant figures, and how to operate with the vectors that describe displacements, forces, work and torques.
---

## Physical quantities and measurement

:::definizione{#grandezza-fisica titolo="Physical quantity"}
A **physical quantity** is a property of a body or of a phenomenon that can be measured, that is, compared with a standard of the same kind chosen as the **unit of measurement**. The measure is the number that expresses how many times the unit is contained in the quantity, and the value of the quantity is written as the product of that number and the unit:
$$
\ell = 2.5\,\mathrm{m}
\quad\text{means}\quad
\ell = 2.5 \cdot (1\,\mathrm{m}) .
$$
The number depends on the chosen unit, because the same length is $2.5$ in meters and $250$ in centimeters. For this reason a numerical result in physics is complete *only* when it is accompanied by its unit of measurement.
:::

:::definizione{#grandezze-fondamentali-e-derivate titolo="Base and derived quantities"}
The **base quantities** (or fundamental quantities) are a small set of quantities chosen as independent, each with its own unit defined autonomously. The **derived quantities** are defined from the base quantities through a mathematical relation, and their unit is obtained from the same relation. The average velocity is the ratio of a displacement to a time interval, $v = \dfrac{\Delta x}{\Delta t}$, so it is measured in meters per second, $\mathrm{m/s}$; the area of a rectangle is the product of two lengths, so it is measured in $\mathrm{m^2}$.
:::

## The International System

:::definizione{#sistema-internazionale titolo="International System of Units"}
The **International System** (SI) fixes seven base quantities and the corresponding units.

| Quantity | Unit | Symbol |
|---|---|---|
| length | meter | $\mathrm{m}$ |
| mass | kilogram | $\mathrm{kg}$ |
| time | second | $\mathrm{s}$ |
| electric current | ampere | $\mathrm{A}$ |
| thermodynamic temperature | kelvin | $\mathrm{K}$ |
| amount of substance | mole | $\mathrm{mol}$ |
| luminous intensity | candela | $\mathrm{cd}$ |

Since 2019 every base unit has been defined by fixing the exact value of a constant of nature: the second by the frequency of a transition of the cesium-133 atom, the meter by the speed of light in vacuum, $c = 299\,792\,458\,\mathrm{m/s}$, the kilogram by the Planck constant. In mechanics the meter, the kilogram and the second are sufficient; the kelvin and the mole appear in thermodynamics.

Some derived units have a name of their own: the newton for force, $1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2}$, the joule for work and energy, $1\,\mathrm{J} = 1\,\mathrm{N\cdot m}$, the watt for power, $1\,\mathrm{W} = 1\,\mathrm{J/s}$, and the pascal for pressure, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Each of them can always be rewritten in terms of base units; for example $1\,\mathrm{J} = 1\,\mathrm{kg\cdot m^2/s^2}$.
:::

:::definizione{#multipli-e-sottomultipli titolo="Multiples and submultiples"}
To express very large or very small values, a **prefix** is placed in front of the unit symbol; the prefix multiplies the unit by a power of ten.

| Prefix | Symbol | Factor |
|---|---|---|
| tera | $\mathrm{T}$ | $10^{12}$ |
| giga | $\mathrm{G}$ | $10^{9}$ |
| mega | $\mathrm{M}$ | $10^{6}$ |
| kilo | $\mathrm{k}$ | $10^{3}$ |
| centi | $\mathrm{c}$ | $10^{-2}$ |
| milli | $\mathrm{m}$ | $10^{-3}$ |
| micro | $\mu$ | $10^{-6}$ |
| nano | $\mathrm{n}$ | $10^{-9}$ |
| pico | $\mathrm{p}$ | $10^{-12}$ |

The prefix forms a single unit with the symbol, so an exponent also applies to the prefix: $1\,\mathrm{cm^2} = (10^{-2}\,\mathrm{m})^2 = 10^{-4}\,\mathrm{m^2}$ and $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$. For mass the prefixes are applied to the gram, since the kilogram already contains the prefix kilo: $1\,\mathrm{mg} = 10^{-3}\,\mathrm{g} = 10^{-6}\,\mathrm{kg}$.
:::

:::osservazione{#conversione-di-unita titolo="Unit conversion"}
To change units, each unit is replaced by its value in the new unit and the expression is simplified as a product of numbers. For a speed of $90\,\mathrm{km/h}$, since $1\,\mathrm{km} = 1000\,\mathrm{m}$ and $1\,\mathrm{h} = 3600\,\mathrm{s}$, one obtains
$$
90\,\frac{\mathrm{km}}{\mathrm{h}} = 90 \cdot \frac{1000\,\mathrm{m}}{3600\,\mathrm{s}} = 25\,\mathrm{m/s} .
$$
The ratio $\dfrac{3600}{1000}$ equals $3.6$, therefore one goes from $\mathrm{km/h}$ to $\mathrm{m/s}$ by dividing by $3.6$, and in the opposite direction by multiplying by $3.6$. When a unit appears raised to a power, the conversion factor must be raised to the same power; a density of $1\,\mathrm{g/cm^3}$ is therefore
$$
1\,\frac{\mathrm{g}}{\mathrm{cm^3}} = \frac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}} = 10^{3}\,\mathrm{kg/m^3} .
$$
:::

## Dimensional analysis

:::definizione{#dimensioni titolo="Dimensions of a quantity"}
The **dimensions** of a quantity indicate how it depends on the base quantities, independently of the chosen units. In mechanics length is denoted by $[L]$, mass by $[M]$ and time by $[T]$, and the dimensions of a quantity $G$ are written $[G] = [L^{a} M^{b} T^{c}]$, with exponents obtained from the definition of $G$. For example
$$
[v] = \frac{[L]}{[T]} = [L\,T^{-1}],
\qquad
[a] = [L\,T^{-2}],
\qquad
[F] = [m]\,[a] = [M\,L\,T^{-2}] .
$$
A quantity with all exponents equal to zero is called **dimensionless**, and one writes $[1]$. Pure numbers, such as $2$ or $\pi$, are dimensionless, and so are angles in radians, because an angle in radians is the ratio of the length of an arc to the radius.
:::

:::teorema{#omogeneita-dimensionale titolo="Principle of dimensional homogeneity"}
This is the principle that every correct physical relation must satisfy:

- the two sides of an equality have the same dimensions;
- only terms with the same dimensions are added or subtracted;
- the argument of functions such as $\sin$, $\cos$, $\exp$ and $\ln$ is dimensionless.

The principle follows from the definition of measure, because an equality between quantities remains true under a change of units *only if* every term transforms by the same factor. The argument of $\exp$ must be dimensionless because $e^{x} = 1 + x + \dfrac{x^2}{2} + \dots$ adds different powers of $x$. The principle is used to check a formula before using it. A formula that is not homogeneous is certainly wrong, whereas a homogeneous formula can still contain a wrong numerical coefficient. In the equation of motion $x = x_0 + v_0 t + \dfrac{1}{2} a t^2$ every term has dimension $[L]$, since $[v_0 t] = [L\,T^{-1}]\,[T] = [L]$ and $[a t^2] = [L\,T^{-2}]\,[T^2] = [L]$.
:::

:::esempio{titolo="Period of the pendulum from dimensional analysis"}
Assume that the period $T$ of the small oscillations of a pendulum depends only on the length $\ell$ of the string, on the mass $m$ and on $g$, in the form $T = k\,\ell^{\alpha} m^{\beta} g^{\gamma}$ with $k$ dimensionless. The dimensions of the two sides are
$$
[T] = [L]^{\alpha}\,[M]^{\beta}\,[L\,T^{-2}]^{\gamma} = [L^{\alpha + \gamma}\, M^{\beta}\, T^{-2\gamma}] ,
$$
and equating the exponents of $[L]$, $[M]$ and $[T]$ gives the system
$$
\begin{cases}
\alpha + \gamma = 0 \\[4pt]
\beta = 0 \\[4pt]
-2\gamma = 1
\end{cases}
$$
hence $\gamma = -\dfrac{1}{2}$, $\alpha = \dfrac{1}{2}$, $\beta = 0$ and
$$
T = k\,\sqrt{\frac{\ell}{g}} .
$$
The period **does not depend on the mass**. Dimensional analysis does not provide the constant $k$, which equals $2\pi$, as is derived in the topic on oscillations and harmonic motion.
:::

## Scientific notation and significant figures

:::definizione{#notazione-scientifica titolo="Scientific notation"}
A number is written in **scientific notation** when it has the form $a \cdot 10^{n}$, with $1 \leq |a| < 10$ and $n$ an integer. The mass of the Earth is about $5.97 \cdot 10^{24}\,\mathrm{kg}$, the radius of the hydrogen atom in the Bohr model about $5.3 \cdot 10^{-11}\,\mathrm{m}$. In this form products and quotients are computed by separating the coefficients from the powers of ten:
$$
(3.0 \cdot 10^{8}) \cdot (2.0 \cdot 10^{-3}) = 6.0 \cdot 10^{5},
\qquad
\frac{6.0 \cdot 10^{5}}{1.5 \cdot 10^{2}} = 4.0 \cdot 10^{3} .
$$
:::

:::definizione{#cifre-significative titolo="Significant figures"}
Every measurement has an uncertainty, and the number of digits with which a value is written declares its precision. The **significant figures** of a number are all the digits starting from the first nonzero digit from the left; the leading zeros only indicate the position of the decimal point. Therefore $0.00470$ has three significant figures, namely $4$, $7$ and the final zero, and $2.50\,\mathrm{kg}$ declares a precision to the hundredth of a kilogram, whereas $2.5\,\mathrm{kg}$ to the tenth. Scientific notation removes the ambiguity of trailing zeros in integers: $1.20 \cdot 10^{3}\,\mathrm{m}$ has three significant figures, $1.2 \cdot 10^{3}\,\mathrm{m}$ has two.
:::

:::osservazione{#cifre-nei-calcoli titolo="Significant figures in calculations"}
A calculated result has at most the precision of the data, and two practical rules are used to round it.

- In products and quotients the result has as many significant figures as the datum with the fewest.
- In sums and differences the result has as many decimal places as the datum with the fewest.

If a car covers $125\,\mathrm{m}$ in $4.8\,\mathrm{s}$, the average speed is $\dfrac{125\,\mathrm{m}}{4.8\,\mathrm{s}} = 26.04\ldots\,\mathrm{m/s}$, and since $4.8$ has two significant figures the result is written $26\,\mathrm{m/s}$. In intermediate steps at least one extra digit is kept and only the final result is rounded, so that rounding errors do not accumulate.
:::

:::definizione{#ordine-di-grandezza titolo="Order of magnitude"}
The **order of magnitude** of a positive number is the power of ten closest to the number on the logarithmic scale. Once the number is written as $a \cdot 10^{n}$ with $1 \leq a < 10$, the order of magnitude is $10^{n}$ if $a < \sqrt{10} \approx 3.16$ and $10^{n+1}$ if $a \geq \sqrt{10}$. A day lasts $24 \cdot 3600\,\mathrm{s} = 8.64 \cdot 10^{4}\,\mathrm{s}$, and since $8.64 > 3.16$ the order of magnitude is $10^{5}\,\mathrm{s}$. Order-of-magnitude estimates are used to check results, because a value that differs from the estimate by several orders of magnitude signals an error in the calculation or in the units.
:::

## Scalar and vector quantities

:::definizione{#scalari-e-vettori titolo="Scalar and vector quantities"}
A **scalar** quantity is specified by a number with its unit, like mass, time, temperature and energy. A **vector** quantity also requires a direction and an orientation, and it is represented by a vector, that is, by an arrow whose length, on a fixed scale, is the intensity of the quantity. Displacement, velocity, acceleration and force are vector quantities. One writes $\vec{F}$ for the vector and $F$ or $|\vec{F}|$ for its **magnitude**, which is a nonnegative number with the unit of the quantity. For some quantities the point of application also matters: a force applied to an extended body has different rotational effects depending on the point, and these effects are described by the torque of the force. For the geometric theory of vectors we refer to the topic on vectors in the plane and in space in Linear Algebra.
:::

:::definizione{#somma-di-vettori titolo="Sum of vectors"}
The **sum** $\vec{A} + \vec{B}$ is constructed with the tip-to-tail rule: $\vec{B}$ is drawn with its tail at the tip of $\vec{A}$, and the sum goes from the tail of $\vec{A}$ to the tip of $\vec{B}$. If the two vectors are applied at the same point, the sum is the diagonal of the parallelogram that has them as sides. In physics the sum has a direct meaning: two successive displacements are equivalent to their sum displacement, and several forces applied to the same point particle are equivalent to their **resultant**, which is their vector sum. The magnitude of the sum satisfies $|\vec{A} + \vec{B}| \leq A + B$, with equality *only* for vectors with the same direction and the same orientation; two perpendicular forces of $3\,\mathrm{N}$ and $4\,\mathrm{N}$ have a resultant of $5\,\mathrm{N}$.

::grafico{vettori="0,0,4,1,A;4,1,5,4,B;0,0,5,4,A + B;0,0,1,3,B" segmenti="1,3,5,4" xmin=-0.6 xmax=5.8 ymin=-0.6 ymax=4.6 uguale=1 titolo="The displacement $\vec{A}$ followed by $\vec{B}$ is equivalent to $\vec{A} + \vec{B}$, which is also the diagonal of the parallelogram with sides $\vec{A}$ and $\vec{B}$"}

:::

:::definizione{#differenza-di-vettori titolo="Product by a scalar and difference"}
The product of a number $k$ and a vector $\vec{A}$ is the vector $k\vec{A}$ with magnitude $|k|\,A$, with the direction of $\vec{A}$, the same orientation if $k > 0$ and the opposite orientation if $k < 0$. When $k$ is a physical quantity the product also changes the unit; the momentum $m\vec{v}$ has the direction and the orientation of the velocity and is measured in $\mathrm{kg\cdot m/s}$. The **difference** is $\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$, and with the two vectors applied at the same point, $\vec{A} - \vec{B}$ goes from the tip of $\vec{B}$ to the tip of $\vec{A}$. For this reason the displacement between the positions $\vec{r}_1$ and $\vec{r}_2$ is $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$. In the same way the change in velocity $\Delta\vec{v} = \vec{v}_2 - \vec{v}_1$ is nonzero whenever the velocity changes direction, *even* if its magnitude stays the same.

::grafico{vettori="0,0,1,3,r₁;0,0,4,1,r₂;1,3,4,1,Δr" punti="1,3,pieno;4,1,pieno" xmin=-0.6 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="The displacement $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$ goes from the initial position to the final position"}

:::

## Cartesian and polar components

:::definizione{#componenti-cartesiane titolo="Cartesian components"}
Fix an orthogonal Cartesian reference frame $Oxyz$ and denote by $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ the **unit vectors** of the axes, that is, the dimensionless vectors of magnitude $1$ oriented like the axes. Every vector can be written in exactly one way as
$$
\vec{A} = A_x\,\hat{\imath} + A_y\,\hat{\jmath} + A_z\,\hat{k} ,
$$
and the numbers $A_x$, $A_y$, $A_z$, which have the unit of $\vec{A}$, are its **Cartesian components**; one also writes $\vec{A} = (A_x, A_y, A_z)$. The component $A_x$ is the projection of $\vec{A}$ onto the $x$-axis, with positive sign if the projection has the same orientation as the axis and negative sign if it has the opposite orientation. By the Pythagorean theorem the magnitude is
$$
A = \sqrt{A_x^2 + A_y^2 + A_z^2} .
$$
The unit vector of a nonzero vector is $\hat{u}_A = \dfrac{\vec{A}}{A}$, which has magnitude $1$ and the direction and orientation of $\vec{A}$, and makes it possible to write $\vec{A} = A\,\hat{u}_A$, separating the intensity from the direction.
:::

:::teorema{#componenti-polari titolo="Cartesian components and polar coordinates"}
Let $\vec{A}$ be a vector in the $xy$-plane with magnitude $A$, and let $\theta$ be the angle it forms with the positive $x$-semiaxis, measured counterclockwise. Then
$$
A_x = A\cos\theta,
\qquad
A_y = A\sin\theta ,
$$
and conversely
$$
A = \sqrt{A_x^2 + A_y^2},
\qquad
\tan\theta = \frac{A_y}{A_x} \quad (A_x \neq 0) .
$$
The first two formulas follow from the definition of sine and cosine on the unit circle, since the tip of $\vec{A}$ applied at the origin lies on the circle of radius $A$; they therefore hold for every $\theta$, including non-acute ones. The pair $(A, \theta)$ is the **polar** description of the vector, convenient when the data are an intensity and an angle; the Cartesian components are convenient for adding. For $A = 5$ and $\cos\theta = \dfrac{4}{5}$, $\sin\theta = \dfrac{3}{5}$ one obtains $\vec{A} = (4, 3)$.

::grafico{vettori="0,0,4,3,A" segmenti="4,0,4,3;0,3,4,3" etichette="0.9,0.25,θ;1.5,-0.5,A cos θ;4.1,1.5,A sin θ" xmin=-0.6 xmax=5.4 ymin=-0.8 ymax=3.6 uguale=1 titolo="$\vec{A}$ has magnitude $5$ and forms with the $x$-axis the angle $\theta$ with $\cos\theta = \dfrac{4}{5}$, so $A_x = 4$ and $A_y = 3$"}

:::

:::attenzione
The function $\arctan$ returns angles between $-90^\circ$ and $90^\circ$, so it gives the angle of $\vec{A}$ *only* when $A_x > 0$. For $\vec{A} = (-3, 4)$ one obtains $\arctan\left(-\dfrac{4}{3}\right) \approx -53.1^\circ$, which is the angle of the opposite vector $(3, -4)$. Since $\vec{A}$ lies in the second quadrant, its angle is obtained by adding $180^\circ$, that is, $\theta \approx 126.9^\circ$.

::grafico{vettori="0,0,-3,4,A;0,0,3,-4,−A" segmenti="-3,0,-3,4" xmin=-4 xmax=4 ymin=-4.6 ymax=4.6 uguale=1 titolo="$\vec{A} = (-3, 4)$ forms with the $x$-axis the angle $126.9^\circ$; the angle $-53.1^\circ$ given by the arctangent is that of $-\vec{A}$"}

:::

:::teorema{#operazioni-in-componenti titolo="Operations in components"}
Let $\vec{A} = (A_x, A_y, A_z)$, $\vec{B} = (B_x, B_y, B_z)$ and let $k$ be a real number. Then
$$
\vec{A} + \vec{B} = (A_x + B_x,\ A_y + B_y,\ A_z + B_z),
\qquad
k\vec{A} = (kA_x,\ kA_y,\ kA_z) .
$$
The formulas follow by writing the vectors in terms of the unit vectors and collecting $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$. Two vectors are equal if and only if they have the same components, so an equality between vectors in the plane is equivalent to two equalities between numbers, one per axis. The calculation of the resultant of several forces is based on this: each force is resolved into components, the $x$ components and the $y$ components are added separately, and the magnitude and direction are obtained from the components of the sum.
:::

:::esempio{titolo="Resultant of two forces"}
A point is acted on by $\vec{F}_1$ of magnitude $10\,\mathrm{N}$ at $30^\circ$ and $\vec{F}_2$ of magnitude $6.0\,\mathrm{N}$ at $120^\circ$. The components are $\vec{F}_1 = (8.66,\ 5.00)\,\mathrm{N}$ and $\vec{F}_2 = (-3.00,\ 5.20)\,\mathrm{N}$, hence
$$
\vec{R} = \vec{F}_1 + \vec{F}_2 = (5.66,\ 10.20)\,\mathrm{N},
\qquad
R = \sqrt{5.66^2 + 10.20^2}\,\mathrm{N} \approx 11.7\,\mathrm{N} .
$$
Since $R_x > 0$, the angle is $\theta = \arctan\dfrac{10.20}{5.66} \approx 61.0^\circ$. The two forces are perpendicular, and indeed $R = \sqrt{10^2 + 6.0^2}\,\mathrm{N}$.

::grafico{vettori="0,0,8.66,5,F₁;0,0,-3,5.196,F₂;0,0,5.66,10.196,R" segmenti="8.66,5,5.66,10.196;-3,5.196,5.66,10.196" xmin=-4 xmax=10 ymin=-1 ymax=11 uguale=1 titolo="The resultant $\vec{R}$ of $\vec{F}_1$ and $\vec{F}_2$ is the diagonal of the parallelogram constructed on the two forces"}

:::

## Dot product and work

:::definizione{#prodotto-scalare titolo="Dot product"}
The **dot product** of two vectors $\vec{A}$ and $\vec{B}$ is the number
$$
\vec{A} \cdot \vec{B} = A B \cos\theta ,
$$
where $\theta \in [0^\circ, 180^\circ]$ is the angle between the two vectors applied at the same point. In components
$$
\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z ,
$$
a formula that follows from the law of cosines and for whose proof we refer to the topic on vectors in the plane and in space in Linear Algebra. The dot product is positive for acute angles, zero for perpendicular vectors and negative for obtuse angles; moreover $\vec{A} \cdot \vec{A} = A^2$. Comparing the two expressions gives the angle between two vectors given in components, $\cos\theta = \dfrac{\vec{A} \cdot \vec{B}}{A B}$. The unit of the product is the product of the units, so the dot product of a force in $\mathrm{N}$ and a displacement in $\mathrm{m}$ is measured in $\mathrm{N\cdot m} = \mathrm{J}$.
:::

:::osservazione{#componente-lungo-una-direzione titolo="Component along a direction"}
If $\hat{u}$ is a unit vector and $\theta$ is the angle between $\vec{A}$ and $\hat{u}$, the number $\vec{A} \cdot \hat{u} = A\cos\theta$ is the **component** of $\vec{A}$ along the direction and orientation of $\hat{u}$; in particular $A_x = \vec{A} \cdot \hat{\imath}$. The axes along which a vector is resolved can be chosen freely, provided they are perpendicular, and the choice suited to the problem simplifies the calculations. On a plane inclined at an angle $\alpha$ it is convenient to take one axis parallel to the plane and one perpendicular to it; the weight of magnitude $mg$ then has a component $mg\sin\alpha$ parallel to the plane, directed downward, and a component $mg\cos\alpha$ perpendicular to the plane. The use of this decomposition in dynamics is treated in the topic on Newton's laws.

::grafico{curve="t,0.57735*t,0,6.5" vettori="3,2.5,3,0.1,P;3,2.5,1.961,1.9;3,2.5,4.039,0.7,P⊥" segmenti="0,0,6.5,0;1.961,1.9,3,0.1;4.039,0.7,3,0.1" etichette="1.1,0.2,α;1.55,2.2,P∥" xmin=-0.5 xmax=6.8 ymin=-0.6 ymax=4.2 uguale=1 titolo="On the plane inclined at $\alpha = 30^\circ$ the weight $\vec{P}$ is resolved into $P_{\parallel} = mg\sin\alpha$ along the plane and $P_{\perp} = mg\cos\alpha$ perpendicular to the plane"}

:::

:::definizione{#lavoro-di-una-forza-costante titolo="Work of a constant force"}
If a body undergoes a straight-line displacement $\vec{s}$ while a constant force $\vec{F}$ acts on it, the **work** of the force is
$$
L = \vec{F} \cdot \vec{s} = F s \cos\theta .
$$
The work depends only on the component of the force along the displacement, $F\cos\theta$, while the component perpendicular to the displacement does zero work. The work is positive (driving) for $\theta < 90^\circ$, zero for $\theta = 90^\circ$, negative (resistive) for $\theta > 90^\circ$. For this reason the normal force of the floor on a crate sliding horizontally does zero work. If the crate is dragged for $5.0\,\mathrm{m}$ with a force of $40\,\mathrm{N}$ inclined at $60^\circ$ to the horizontal, the force does the work $L = 40 \cdot 5.0 \cdot \cos 60^\circ\,\mathrm{J} = 1.0 \cdot 10^{2}\,\mathrm{J}$. The work of variable forces and its connection with energy are treated in the topic on work and energy.

::grafico{vettori="0,0,5,0,s;0,0,2,3.464,F" segmenti="2,3.464,2,0" etichette="0.35,0.3,θ;1.2,-0.45,F cos θ" xmin=-0.6 xmax=5.8 ymin=-0.8 ymax=4 uguale=1 titolo="Only the component $F\cos\theta$ of the force, parallel to the displacement $\vec{s}$, does work"}

:::

## Cross product and torque

:::definizione{#prodotto-vettoriale titolo="Cross product"}
The **cross product** $\vec{A} \times \vec{B}$ of two vectors in space is the vector that has:

- magnitude $A B \sin\theta$, with $\theta \in [0^\circ, 180^\circ]$ the angle between the two vectors, equal to the area of the parallelogram with sides $\vec{A}$ and $\vec{B}$;
- direction perpendicular to the plane containing $\vec{A}$ and $\vec{B}$;
- orientation given by the **right-hand rule**: with the thumb along $\vec{A}$ and the index finger along $\vec{B}$, the middle finger points along $\vec{A} \times \vec{B}$.

In components the product is computed as a symbolic determinant:
$$
\begin{aligned}
\vec{A} \times \vec{B}
&= \begin{vmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} \\[6pt]
&= (A_y B_z - A_z B_y)\,\hat{\imath} + (A_z B_x - A_x B_z)\,\hat{\jmath} + (A_x B_y - A_y B_x)\,\hat{k} .
\end{aligned}
$$
From the formula follow the properties $\vec{B} \times \vec{A} = -\,\vec{A} \times \vec{B}$, $\vec{A} \times \vec{A} = \vec{0}$ and $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$; for the equivalence between the formula and the geometric description we refer to the topic on vectors in the plane and in space in Linear Algebra. The order of the factors matters, because swapping them reverses the orientation of the product. The product is zero for parallel vectors and has maximum magnitude, $AB$, for perpendicular vectors.
:::

:::definizione{#momento-di-una-forza titolo="Torque of a force"}
Let $\vec{F}$ be a force applied at the point $P$ and let $O$ be a fixed point, called the **pole**. The **torque** of $\vec{F}$ about $O$ is the vector
$$
\vec{\tau} = \vec{r} \times \vec{F},
\qquad
\vec{r} = \overrightarrow{OP} .
$$
Its magnitude is $\tau = r F \sin\theta = F\,b$, where $b = r\sin\theta$ is the lever arm, that is, the distance of $O$ from the line of action of the force. The torque measures the rotational effect of the force about an axis through $O$ perpendicular to the plane of $\vec{r}$ and $\vec{F}$. Since $\tau = F\,b$, a force whose line of action passes through $O$ has zero torque, and for the same force the effect increases with the lever arm, as one experiences when opening a door by pushing close to the hinges or far from them. Torque is measured in $\mathrm{N\cdot m}$; the unit coincides with that of work, but the name joule is avoided for torque, because torque is a vector and work is a scalar. The dynamics of rotations is treated in the topic on rigid body dynamics.

::grafico{vettori="0,0,4,0,r;4,0,5.5,2.598,F" segmenti="2.2,-3.118,5.8,3.118;0,0,3,-1.732" punti="0,0,pieno;4,0,pieno,P" etichette="1.1,-1.3,b;4.35,0.25,θ" xmin=-0.6 xmax=6.2 ymin=-3.4 ymax=3.4 uguale=1 titolo="The lever arm $b$ is the distance of the pole $O$ from the line of action of $\vec{F}$, so $\tau = F\,b = r F \sin\theta$"}

:::

:::esempio{titolo="Torque in components"}
A force $\vec{F} = (2.0\,\hat{\imath} + 3.0\,\hat{\jmath})\,\mathrm{N}$ is applied at the point with position $\vec{r} = (0.50\,\hat{\imath} - 0.20\,\hat{\jmath})\,\mathrm{m}$ relative to the pole. The two vectors lie in the $xy$-plane, so the cross product has only the $z$ component:
$$
\tau_z = x F_y - y F_x = 0.50 \cdot 3.0 - (-0.20) \cdot 2.0 = 1.9\,\mathrm{N\cdot m} .
$$
Therefore $\vec{\tau} = 1.9\,\hat{k}\,\mathrm{N\cdot m}$. The positive sign indicates that the force tends to rotate the body counterclockwise, as seen from the positive $z$-semiaxis.
:::

## Derivative of a vector

:::richiamo{titolo="Derivative"}
The derivative of a function $f$ at the instant $t$ is the limit of the difference quotient, $\dfrac{df}{dt} = \displaystyle\lim_{\Delta t \to 0} \frac{f(t + \Delta t) - f(t)}{\Delta t}$, when it exists and is finite. For the differentiation rules we refer to the topic on differential calculus in Mathematical Analysis 1.
:::

:::definizione{#derivata-di-un-vettore titolo="Derivative of a vector"}
Let $\vec{A}(t) = A_x(t)\,\hat{\imath} + A_y(t)\,\hat{\jmath} + A_z(t)\,\hat{k}$ be a time-dependent vector. The **derivative** of $\vec{A}$ is
$$
\frac{d\vec{A}}{dt}
= \lim_{\Delta t \to 0} \frac{\vec{A}(t + \Delta t) - \vec{A}(t)}{\Delta t}
= \frac{dA_x}{dt}\,\hat{\imath} + \frac{dA_y}{dt}\,\hat{\jmath} + \frac{dA_z}{dt}\,\hat{k} .
$$
The second equality holds because the unit vectors of a fixed reference frame are constant, so the limit is computed component by component. The derivative has the unit of $\vec{A}$ divided by the second. The main application is kinematics: if $\vec{r}(t)$ is the position of a point, the velocity is $\vec{v} = \dfrac{d\vec{r}}{dt}$ and the acceleration is $\vec{a} = \dfrac{d\vec{v}}{dt}$, as seen in the topics on one-dimensional kinematics and on motion in the plane. The vector $\Delta\vec{r} = \vec{r}(t + \Delta t) - \vec{r}(t)$ is a chord of the trajectory, and as $\Delta t$ tends to zero its direction tends to that of the tangent line. Therefore the velocity is **tangent to the trajectory**.

::grafico{f="2*x - x^2/4" vettori="0,0,2,3,r(t);2,3,4,4,Δr;2,3,4,5,v" punti="2,3,pieno;4,4,pieno" xmin=-0.6 xmax=8.6 ymin=-0.6 ymax=5.6 uguale=1 titolo="The chord $\Delta\vec{r}$ between the positions at the instants $t$ and $t + \Delta t$ tends to the direction of the tangent, so $\vec{v}$ is tangent to the trajectory"}

:::

::::teorema{#regole-di-derivazione-vettori titolo="Differentiation rules for vectors"}
Let $\vec{A}(t)$ and $\vec{B}(t)$ be vectors and $f(t)$ a scalar function, all differentiable. Then

- $\dfrac{d}{dt}\big(\vec{A} + \vec{B}\big) = \dfrac{d\vec{A}}{dt} + \dfrac{d\vec{B}}{dt}$;
- $\dfrac{d}{dt}\big(f\vec{A}\big) = \dfrac{df}{dt}\,\vec{A} + f\,\dfrac{d\vec{A}}{dt}$;
- $\dfrac{d}{dt}\big(\vec{A} \cdot \vec{B}\big) = \dfrac{d\vec{A}}{dt} \cdot \vec{B} + \vec{A} \cdot \dfrac{d\vec{B}}{dt}$;
- $\dfrac{d}{dt}\big(\vec{A} \times \vec{B}\big) = \dfrac{d\vec{A}}{dt} \times \vec{B} + \vec{A} \times \dfrac{d\vec{B}}{dt}$, keeping the order of the factors.

They are the analogues of the product rule. They are used to differentiate quantities defined as products: the momentum $m\vec{v}$, the kinetic energy $\dfrac{1}{2} m\,\vec{v} \cdot \vec{v}$, the angular momentum $\vec{r} \times m\vec{v}$. For example, at constant mass, $\dfrac{d}{dt}\left(\dfrac{1}{2} m\,\vec{v} \cdot \vec{v}\right) = m\,\vec{v} \cdot \vec{a}$.

:::dimostrazione
The first two rules follow by applying to each component the sum and product rules for scalar functions. For the dot product, $\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$, and differentiating each term with the product rule gives
$$
\begin{aligned}
\frac{d}{dt}\big(\vec{A} \cdot \vec{B}\big)
&= \frac{dA_x}{dt} B_x + \frac{dA_y}{dt} B_y + \frac{dA_z}{dt} B_z + A_x \frac{dB_x}{dt} + A_y \frac{dB_y}{dt} + A_z \frac{dB_z}{dt} \\[6pt]
&= \frac{d\vec{A}}{dt} \cdot \vec{B} + \vec{A} \cdot \frac{d\vec{B}}{dt} .
\end{aligned}
$$
For the cross product the reasoning is the same: each component, for example $A_y B_z - A_z B_y$, is a difference of products, and differentiating it gives the corresponding component of $\dfrac{d\vec{A}}{dt} \times \vec{B} + \vec{A} \times \dfrac{d\vec{B}}{dt}$.
:::
::::

::::teorema{#vettore-di-modulo-costante titolo="Derivative of a vector of constant magnitude"}
Let $\vec{A}(t)$ be a differentiable vector of constant magnitude. Then at every instant
$$
\vec{A} \cdot \frac{d\vec{A}}{dt} = 0 ,
$$
that is, the derivative is perpendicular to $\vec{A}$ or zero. A vector of constant magnitude can only change direction, and its instantaneous change is perpendicular to it. For the unit vector $\hat{u}(\theta) = \cos\theta\,\hat{\imath} + \sin\theta\,\hat{\jmath}$ one has $\dfrac{d\hat{u}}{d\theta} = -\sin\theta\,\hat{\imath} + \cos\theta\,\hat{\jmath}$, which is perpendicular to $\hat{u}$. In motion on a circle the position vector relative to the center has constant magnitude, so the velocity is perpendicular to the radius; in uniform circular motion the velocity also has constant magnitude, so the acceleration is perpendicular to the velocity, as seen in the topic on motion in the plane.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="0,0,1.732,1,r;1.732,1,0.982,2.299,v" punti="0,0,pieno" xmin=-2.6 xmax=2.6 ymin=-2.6 ymax=2.6 uguale=1 titolo="On the circle the position vector $\vec{r}$ has constant magnitude, so $\vec{v} = \dfrac{d\vec{r}}{dt}$ is perpendicular to $\vec{r}$"}

:::dimostrazione
Since the magnitude is constant, $\vec{A} \cdot \vec{A} = A^2$ is constant and its derivative is zero. By the differentiation rule for the dot product
$$
0 = \frac{d}{dt}\big(\vec{A} \cdot \vec{A}\big) = \frac{d\vec{A}}{dt} \cdot \vec{A} + \vec{A} \cdot \frac{d\vec{A}}{dt} = 2\,\vec{A} \cdot \frac{d\vec{A}}{dt} ,
$$
hence $\vec{A} \cdot \dfrac{d\vec{A}}{dt} = 0$.
:::
::::
