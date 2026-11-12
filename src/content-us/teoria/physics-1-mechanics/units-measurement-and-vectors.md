---
titolo: Units, measurement and vectors
sommario: How a physical quantity is measured in SI units, how significant figures and dimensional analysis check a formula and a result, and how vectors are added, resolved into components and multiplied by the scalar and the vector product.
---

## Physical quantities and units

:::definizione{#physical-quantity titolo="Physical quantity"}
A **physical quantity** is a property of a body or of a phenomenon that can be measured, that is, compared with a sample of the same kind chosen as the **unit**. The measure is the number of times the unit is contained in the quantity, so the value of a quantity is the product of that number and the unit:
$$
\ell = 2.5\,\mathrm{m}
\quad\text{means}\quad
\ell = 2.5 \cdot (1\,\mathrm{m}) .
$$
The number depends on the unit, since the same length is $2.5$ in meters and $250$ in centimeters. A numerical result in physics is therefore complete *only* when the unit is written next to it.
:::

:::definizione{#base-and-derived titolo="Base and derived quantities"}
The **base quantities** are a small set of quantities taken as independent, each with a unit defined on its own. A **derived quantity** is defined from the base ones by a mathematical relation, and its unit follows from that same relation. Average velocity is a displacement divided by a time interval, $v = \dfrac{\Delta x}{\Delta t}$, hence it is measured in meters per second, $\mathrm{m/s}$; the area of a rectangle is a product of two lengths, hence it is measured in $\mathrm{m^2}$.

This is what makes a unit predictable: once a formula is written, the unit of the quantity it defines is read off the formula itself.
:::

:::definizione{#si-units titolo="The International System of Units"}
The **International System** (SI) fixes seven base quantities and their units.

| Quantity | Unit | Symbol |
|---|---|---|
| length | meter | $\mathrm{m}$ |
| mass | kilogram | $\mathrm{kg}$ |
| time | second | $\mathrm{s}$ |
| electric current | ampere | $\mathrm{A}$ |
| thermodynamic temperature | kelvin | $\mathrm{K}$ |
| amount of substance | mole | $\mathrm{mol}$ |
| luminous intensity | candela | $\mathrm{cd}$ |

Since 2019 each base unit is defined by fixing the exact value of a constant of nature: the second by a transition frequency of the cesium-133 atom, the meter by the speed of light in vacuum, $c = 299\,792\,458\,\mathrm{m/s}$, and the kilogram by the Planck constant. Mechanics uses the meter, the kilogram and the second; the kelvin and the mole appear in thermodynamics.

Some derived units carry a name of their own: the newton for force, $1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2}$, the joule for work and energy, $1\,\mathrm{J} = 1\,\mathrm{N\cdot m}$, the watt for power, $1\,\mathrm{W} = 1\,\mathrm{J/s}$, and the pascal for pressure, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Each of them can be rewritten with base units alone, so that $1\,\mathrm{J} = 1\,\mathrm{kg\cdot m^2/s^2}$.
:::

:::definizione{#prefixes titolo="Prefixes"}
To write very large or very small values a **prefix** is placed before the symbol of the unit, and it multiplies the unit by a power of ten.

| Prefix | Symbol | Factor |
|---|---|---|
| giga | $\mathrm{G}$ | $10^{9}$ |
| mega | $\mathrm{M}$ | $10^{6}$ |
| kilo | $\mathrm{k}$ | $10^{3}$ |
| centi | $\mathrm{c}$ | $10^{-2}$ |
| milli | $\mathrm{m}$ | $10^{-3}$ |
| micro | $\mu$ | $10^{-6}$ |
| nano | $\mathrm{n}$ | $10^{-9}$ |

The prefix and the symbol form a single unit, therefore an exponent applies to the prefix as well: $1\,\mathrm{cm^2} = (10^{-2}\,\mathrm{m})^2 = 10^{-4}\,\mathrm{m^2}$, and $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$. For mass the prefixes apply to the gram, since the kilogram already contains the prefix kilo, hence $1\,\mathrm{mg} = 10^{-3}\,\mathrm{g} = 10^{-6}\,\mathrm{kg}$.
:::

:::osservazione{#unit-conversion titolo="Converting units"}
To change units, each unit is replaced by its value in the new unit and the expression is simplified as a product of numbers. For a speed of $60\,\mathrm{mi/h}$, since $1\,\mathrm{mi} = 1609\,\mathrm{m}$ and $1\,\mathrm{h} = 3600\,\mathrm{s}$,
$$
60\,\frac{\mathrm{mi}}{\mathrm{h}} = 60 \cdot \frac{1609\,\mathrm{m}}{3600\,\mathrm{s}} \approx 26.8\,\mathrm{m/s} .
$$
When a unit appears raised to a power, the conversion factor is raised to the same power. A density of $1\,\mathrm{g/cm^3}$ is therefore
$$
1\,\frac{\mathrm{g}}{\mathrm{cm^3}} = \frac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}} = 10^{3}\,\mathrm{kg/m^3} ,
$$
which is the density of water. The same method converts $1\,\mathrm{ft} = 0.3048\,\mathrm{m}$ and $1\,\mathrm{lb} = 0.4536\,\mathrm{kg}$, the two customary units that still appear in engineering problems.
:::

## Significant figures

:::definizione{#significant-figures titolo="Significant figures"}
The **significant figures** of a measured value are the digits known with confidence, together with the first uncertain one. They are counted from the leftmost nonzero digit: $0.00420\,\mathrm{m}$ has three significant figures, because the zeros on the left only place the decimal point, while the final zero is a measured digit.

Scientific notation removes every ambiguity, since the value is written as a number between $1$ and $10$ times a power of ten, and only the significant digits appear: $4.20 \times 10^{-3}\,\mathrm{m}$ has three significant figures, $4.2 \times 10^{-3}\,\mathrm{m}$ has two.
:::

:::teorema{#significant-figures-rules titolo="Significant figures in a calculation"}
Let a result be obtained from measured values. Then:

- in a product or a quotient, the result keeps as many significant figures as the factor with the fewest;
- in a sum or a difference, the result keeps as many decimal places as the term with the fewest.

The rules follow from the fact that a result cannot be known better than the data it comes from. A rectangle measuring $12.3\,\mathrm{cm}$ by $2.1\,\mathrm{cm}$ has area $25.83\,\mathrm{cm^2}$ on the calculator, and $2.1$ carries two significant figures, therefore the area is written $26\,\mathrm{cm^2}$.
:::

:::attenzione
Exact numbers carry no uncertainty and never limit the result. The $2$ in $K = \dfrac{1}{2}mv^2$ and the $12$ in "a dozen" are exact, so a kinetic energy computed from $m = 2.0\,\mathrm{kg}$ and $v = 3.0\,\mathrm{m/s}$ keeps two significant figures, not one.

Rounding is applied once, to the final result. Rounding $25.83$ to $25.8$ and then to $26$ is the same here, yet in a longer calculation intermediate rounding accumulates and shifts the last digit.
:::

## Dimensional analysis

:::definizione{#dimensions titolo="Dimensions of a quantity"}
The **dimensions** of a quantity express how it depends on the base quantities, regardless of the units chosen. In mechanics length is written $[L]$, mass $[M]$ and time $[T]$, and the dimensions of a quantity $G$ are written $[G] = [L^{a} M^{b} T^{c}]$, with exponents read from the definition of $G$:
$$
[v] = \frac{[L]}{[T]} = [L\,T^{-1}],
\qquad
[a] = [L\,T^{-2}],
\qquad
[F] = [m]\,[a] = [M\,L\,T^{-2}] .
$$
A quantity whose exponents are all zero is **dimensionless**, written $[1]$. Pure numbers such as $2$ and $\pi$ are dimensionless, and so is an angle in radians, since a radian is the ratio of an arc length to a radius.
:::

:::teorema{#dimensional-homogeneity titolo="Principle of dimensional homogeneity"}
Every correct physical relation satisfies the following conditions:

- the two sides of an equality have the same dimensions;
- only terms with the same dimensions are added or subtracted;
- the argument of $\sin$, $\cos$, $\exp$ and $\ln$ is dimensionless.

The principle is what makes a formula checkable before any number is substituted. It gives a necessary condition, therefore it can reject a wrong formula, and it cannot confirm a right one, since a missing factor of $\dfrac{1}{2}$ leaves the dimensions unchanged.
:::

:::esempio{#dimensional-check titolo="Checking a formula with dimensions"}
The position of a body in uniform acceleration is written $x = x_0 + v_0 t + \dfrac{1}{2} a t^2$. Each term is examined separately:
$$
[x_0] = [L],
\qquad
[v_0 t] = [L\,T^{-1}][T] = [L],
\qquad
[a t^2] = [L\,T^{-2}][T^2] = [L] .
$$
The three terms have the dimension of a length and the left side is a length, therefore the relation is homogeneous.

Writing $x = x_0 + v_0 t^2$ instead would give $[v_0 t^2] = [L\,T]$ for the last term, which differs from $[L]$, hence that relation is wrong and no substitution of numbers is needed to see it.
:::

## Vectors and vector addition

:::definizione{#vector titolo="Scalar and vector"}
A **scalar** is a quantity determined by a number and a unit, such as mass, time, temperature and energy. A **vector** is a quantity determined by a magnitude, a direction and a sense, such as displacement, velocity, acceleration and force. A vector is written $\vec{A}$, and its magnitude $A = |\vec{A}|$ is a non-negative scalar with the unit of the quantity.

Two vectors are equal when they have the same magnitude, direction and sense, regardless of where they are drawn, so a vector can be translated freely in the plane. This is what allows the tip-to-tail construction of the next definition.
:::

:::definizione{#vector-sum titolo="Sum of two vectors"}
The **sum** $\vec{A} + \vec{B}$ is built by drawing $\vec{B}$ from the tip of $\vec{A}$: the sum is the vector from the tail of $\vec{A}$ to the tip of $\vec{B}$. Drawing both vectors from the same point gives the same result as the diagonal of the parallelogram with sides $\vec{A}$ and $\vec{B}$, therefore the sum does not depend on the order, and $\vec{A} + \vec{B} = \vec{B} + \vec{A}$.

::grafico{vettori="0,0,4,1,A;4,1,5,4,B;0,0,5,4,A + B;0,0,1,3,B" segmenti="1,3,5,4" xmin=-0.6 xmax=5.8 ymin=-0.6 ymax=4.6 uguale=1 titolo="The displacement $\vec{A}$ followed by $\vec{B}$ equals $\vec{A} + \vec{B}$, which is also the diagonal of the parallelogram with sides $\vec{A}$ and $\vec{B}$"}

Two displacements performed one after the other add in this way, and so do two forces applied to the same body, whose sum is called the resultant.
:::

:::attenzione
Magnitudes do not add like the vectors themselves. For $A = 3\,\mathrm{m}$ and $B = 4\,\mathrm{m}$ the magnitude of the sum is $7\,\mathrm{m}$ only when the two vectors have the same sense, it is $1\,\mathrm{m}$ when they have opposite senses, and it is $5\,\mathrm{m}$ when they are perpendicular. In general $|\vec{A} + \vec{B}| \le A + B$, with equality in the first case alone.
:::

:::definizione{#vector-difference titolo="Scalar multiple and difference"}
The product of a number $k$ and a vector $\vec{A}$ is the vector $k\vec{A}$ of magnitude $|k|\,A$, with the direction of $\vec{A}$, the same sense when $k > 0$ and the opposite sense when $k < 0$. When $k$ is itself a physical quantity, the product also changes the unit: momentum $m\vec{v}$ has the direction and sense of the velocity and is measured in $\mathrm{kg\cdot m/s}$.

The **difference** is $\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$. Drawing both from the same point, $\vec{A} - \vec{B}$ runs from the tip of $\vec{B}$ to the tip of $\vec{A}$, therefore the displacement between the positions $\vec{r}_1$ and $\vec{r}_2$ is $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$.

::grafico{vettori="0,0,1,3,r₁;0,0,4,1,r₂;1,3,4,1,Δr" punti="1,3,pieno;4,1,pieno" xmin=-0.6 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="The displacement $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$ runs from the initial position to the final position"}

The same construction gives the change in velocity $\Delta\vec{v} = \vec{v}_2 - \vec{v}_1$, which is nonzero whenever the velocity changes direction, *even* when its magnitude stays the same. Uniform circular motion rests on this fact.
:::

## Components and unit vectors

:::definizione{#components titolo="Cartesian components"}
Fix an orthogonal frame $Oxyz$ and write $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ for the **unit vectors** of the axes, that is, the dimensionless vectors of magnitude $1$ pointing along the axes. Every vector is written in exactly one way as
$$
\vec{A} = A_x\,\hat{\imath} + A_y\,\hat{\jmath} + A_z\,\hat{k} ,
$$
and the numbers $A_x$, $A_y$, $A_z$, which carry the unit of $\vec{A}$, are its **components**; the notation $\vec{A} = (A_x, A_y, A_z)$ is also used. The component $A_x$ is the projection of $\vec{A}$ on the $x$ axis, positive when the projection agrees with the axis and negative when it opposes it.

By the Pythagorean theorem the magnitude of a vector in the plane is $A = \sqrt{A_x^2 + A_y^2}$, and if $\theta$ is the angle measured from the positive $x$ axis, then
$$
A_x = A\cos\theta,
\qquad
A_y = A\sin\theta,
\qquad
\tan\theta = \frac{A_y}{A_x} .
$$

::grafico{vettori="0,0,4,3,A" segmenti="4,0,4,3;0,3,4,3" etichette="0.9,0.25,θ;1.5,-0.5,A cos θ;4.1,1.5,A sin θ" xmin=-0.6 xmax=5.4 ymin=-0.8 ymax=3.6 uguale=1 titolo="$\vec{A}$ has magnitude $5$ and makes the angle $\theta$ with the $x$ axis, with $\cos\theta = \dfrac{4}{5}$, hence $A_x = 4$ and $A_y = 3$"}

Components turn a drawing into arithmetic, which is how every force problem in the following chapters is solved.
:::

:::teorema{#components-operations titolo="Operations in components"}
Let $\vec{A} = (A_x, A_y, A_z)$ and $\vec{B} = (B_x, B_y, B_z)$, and let $k$ be a real number. Then
$$
\vec{A} + \vec{B} = (A_x + B_x,\ A_y + B_y,\ A_z + B_z),
\qquad
k\vec{A} = (kA_x,\ kA_y,\ kA_z) .
$$

:::dimostrazione
Write both vectors with the unit vectors and collect $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$:
$$
\vec{A} + \vec{B} = (A_x + B_x)\hat{\imath} + (A_y + B_y)\hat{\jmath} + (A_z + B_z)\hat{k} .
$$
Since the decomposition on the unit vectors is unique, the components of the sum are those written above. The same collection applied to $k\vec{A}$ gives the second formula.
:::

Two vectors are equal exactly when their components are equal, therefore one vector equation in the plane is equivalent to two numerical equations, one per axis. The resultant of several forces is computed in this way: each force is resolved, the $x$ components are added and the $y$ components are added separately, and the magnitude and direction follow from the components of the sum.
:::

:::attenzione
The function $\arctan$ returns angles between $-90^\circ$ and $90^\circ$, so it gives the angle of $\vec{A}$ *only* when $A_x > 0$. For $\vec{A} = (-3, 4)$ it returns $\arctan\left(-\dfrac{4}{3}\right) \approx -53.1^\circ$, which is the angle of the opposite vector $(3, -4)$. Since $\vec{A}$ lies in the second quadrant, its angle is obtained by adding $180^\circ$, hence $\theta \approx 126.9^\circ$.

::grafico{vettori="0,0,-3,4,A;0,0,3,-4,−A" segmenti="-3,0,-3,4" xmin=-4 xmax=4 ymin=-4.6 ymax=4.6 uguale=1 titolo="$\vec{A} = (-3, 4)$ makes the angle $126.9^\circ$ with the $x$ axis; the angle $-53.1^\circ$ returned by the arctangent belongs to $-\vec{A}$"}
:::

## The scalar product

:::definizione{#scalar-product titolo="Scalar product"}
The **scalar product** of $\vec{A}$ and $\vec{B}$, written $\vec{A} \cdot \vec{B}$, is the number
$$
\vec{A} \cdot \vec{B} = A\,B\cos\varphi ,
$$
where $\varphi$ is the angle between the two vectors when they are drawn from the same point. The result is a scalar, and its unit is the product of the units of the two factors.

The sign of the scalar product is the sign of $\cos\varphi$: it is positive for $\varphi < 90^\circ$, zero for $\varphi = 90^\circ$ and negative for $\varphi > 90^\circ$. Two nonzero vectors are therefore perpendicular exactly when their scalar product vanishes, which is the quickest test for perpendicularity available.
:::

:::teorema{#scalar-product-components titolo="Scalar product in components"}
For $\vec{A} = (A_x, A_y, A_z)$ and $\vec{B} = (B_x, B_y, B_z)$,
$$
\vec{A} \cdot \vec{B} = A_xB_x + A_yB_y + A_zB_z .
$$

:::dimostrazione
The unit vectors are mutually perpendicular and have magnitude $1$, hence $\hat{\imath} \cdot \hat{\imath} = \hat{\jmath} \cdot \hat{\jmath} = \hat{k} \cdot \hat{k} = 1$ and every mixed product vanishes. Expanding the product of the two decompositions and using these values leaves only the three terms written above.
:::

The formula gives the angle between two vectors from their components, since $\cos\varphi = \dfrac{\vec{A} \cdot \vec{B}}{A\,B}$. For $\vec{A} = (1, 2)$ and $\vec{B} = (3, -1)$ the product is $3 - 2 = 1$, therefore $\cos\varphi = \dfrac{1}{\sqrt{5}\sqrt{10}} \approx 0.141$ and $\varphi \approx 81.9^\circ$.
:::

:::esempio{#work-as-scalar-product titolo="Work of a constant force"}
A constant force $\vec{F}$ acting on a body that undergoes the displacement $\vec{d}$ does the work
$$
W = \vec{F} \cdot \vec{d} = F\,d\cos\varphi .
$$
A force of $20\,\mathrm{N}$ pulling at $60^\circ$ above a horizontal displacement of $3.0\,\mathrm{m}$ does
$$
W = 20\,\mathrm{N} \cdot 3.0\,\mathrm{m} \cdot \cos 60^\circ = 30\,\mathrm{J} .
$$
A force perpendicular to the displacement does no work, since $\cos 90^\circ = 0$. This is why the normal force on a body sliding along a horizontal floor contributes nothing to the energy balance, as the chapter on work and kinetic energy develops.
:::

## The vector product

:::definizione{#vector-product titolo="Vector product"}
The **vector product** of $\vec{A}$ and $\vec{B}$, written $\vec{A} \times \vec{B}$, is the vector with magnitude
$$
|\vec{A} \times \vec{B}| = A\,B\sin\varphi ,
$$
perpendicular to the plane of $\vec{A}$ and $\vec{B}$, with the sense given by the right-hand rule: the fingers turn from $\vec{A}$ towards $\vec{B}$ through the angle $\varphi$, and the thumb points along the product.

The magnitude equals the area of the parallelogram with sides $\vec{A}$ and $\vec{B}$, and it vanishes exactly when the two vectors are parallel. Reversing the order reverses the sense, hence $\vec{B} \times \vec{A} = -\,\vec{A} \times \vec{B}$, and the order matters in every formula that uses this product.
:::

:::teorema{#vector-product-components titolo="Vector product in components"}
For $\vec{A} = (A_x, A_y, A_z)$ and $\vec{B} = (B_x, B_y, B_z)$,
$$
\vec{A} \times \vec{B} = (A_yB_z - A_zB_y)\,\hat{\imath} + (A_zB_x - A_xB_z)\,\hat{\jmath} + (A_xB_y - A_yB_x)\,\hat{k} .
$$

:::dimostrazione
The unit vectors satisfy $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$ and $\hat{k} \times \hat{\imath} = \hat{\jmath}$, while the product of a unit vector with itself is zero. Expanding the product of the two decompositions and replacing each mixed product with these values gives the three components written above.
:::

For two vectors in the $xy$ plane only the last component survives, so $\vec{A} \times \vec{B} = (A_xB_y - A_yB_x)\,\hat{k}$, and the product is perpendicular to the plane. The number $A_xB_y - A_yB_x$ is positive when the turn from $\vec{A}$ to $\vec{B}$ is counterclockwise.
:::

:::esempio{#torque-as-vector-product titolo="Torque of a force"}
The torque of a force $\vec{F}$ applied at the point located by $\vec{r}$ with respect to a chosen origin is
$$
\vec{\tau} = \vec{r} \times \vec{F} ,
$$
with magnitude $\tau = r\,F\sin\varphi$ measured in $\mathrm{N\cdot m}$. A force of $50\,\mathrm{N}$ applied perpendicular to a wrench $0.30\,\mathrm{m}$ long produces
$$
\tau = 0.30\,\mathrm{m} \cdot 50\,\mathrm{N} \cdot \sin 90^\circ = 15\,\mathrm{N\cdot m} .
$$
The same force applied along the wrench gives $\sin 0^\circ = 0$ and turns nothing. Torque governs the chapters on fixed-axis rotation and on static equilibrium.
:::
