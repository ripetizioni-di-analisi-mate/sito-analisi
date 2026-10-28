---
titolo: Electric field
sommario: How the electric field is defined, how it is computed for point charges, for the dipole and for continuous distributions such as the wire, the ring, the disk and the plane, how field lines describe it and how a charge moves in a uniform field.
---

## Definition of the electric field

Throughout the topic the charges that produce the field are at rest in vacuum, in an inertial reference frame.

:::richiamo{titolo="Coulomb's law"}
Two point charges $q_1$ and $q_2$ placed at distance $r$ in vacuum exert on each other forces of magnitude $F = k\,\dfrac{|q_1 q_2|}{r^2}$, with $k = \dfrac{1}{4\pi\varepsilon_0} = 8.99 \cdot 10^{9}\,\mathrm{N\cdot m^2/C^2}$, directed along the joining line, repulsive between charges of the same sign and attractive between charges of opposite sign. The force due to several charges is the vector sum of the individual forces. We refer to the topic on electric charge and Coulomb's law.
:::

:::definizione{#campo-elettrico titolo="Electric field"}
Consider a set of charges at rest, called **source charges**, and place at the point $P$ a point charge $q_0$, called the *test charge*, small enough not to displace the source charges. If $\vec{F}$ is the force that the source charges exert on $q_0$, the **electric field** at $P$ is
$$
\vec{E}(P) = \frac{\vec{F}}{q_0} .
$$
By Coulomb's law the force is proportional to $q_0$, so the ratio does not depend on the test charge and describes a property of the point $P$. The electric field assigns a vector to each point of space, that is it is a vector field, for which we refer to the topic on vector fields in Mathematical Analysis 2. It is measured in $\mathrm{N/C}$, a unit that coincides with the $\mathrm{V/m}$, as will be seen in the topic on the electric potential.

For example, if a test charge $q_0 = 2.0\,\mathrm{nC}$ experiences at $P$ a force of magnitude $6.0 \cdot 10^{-5}\,\mathrm{N}$, the field at $P$ has magnitude $E = \dfrac{6.0 \cdot 10^{-5}}{2.0 \cdot 10^{-9}}\,\mathrm{N/C} = 3.0 \cdot 10^{4}\,\mathrm{N/C}$ and has the direction and orientation of the force.
:::

:::osservazione{#forza-in-un-campo titolo="Force on a charge placed in the field"}
If the field $\vec{E}$ at a point is known, the force on a point charge $q$ placed at that point is
$$
\vec{F} = q\,\vec{E} .
$$
If $q > 0$ the force has the same orientation as the field, if $q < 0$ it has the opposite orientation. The field therefore splits the problem into two parts: first the field produced by the sources is computed, then the force on any charge placed in the field. An electron in a field of $3.0 \cdot 10^{4}\,\mathrm{N/C}$ experiences the force of magnitude $eE = 1.60 \cdot 10^{-19} \cdot 3.0 \cdot 10^{4}\,\mathrm{N} = 4.8 \cdot 10^{-15}\,\mathrm{N}$, opposite to the field.
:::

## Field of point charges

::::teorema{#campo-carica-puntiforme titolo="Field of a point charge"}
The field produced by a point charge $q$ at rest in vacuum, at a point $P$ at distance $r$ from the charge, is
$$
\vec{E} = k\,\frac{q}{r^2}\,\hat{r} = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r^2}\,\hat{r} ,
$$
where $\hat{r}$ is the unit vector directed from the charge toward $P$. The field has magnitude $E = k\,\dfrac{|q|}{r^2}$ and is radial, outward from the charge if $q > 0$ and inward if $q < 0$. Since the magnitude is inversely proportional to the square of the distance, when the distance doubles the field becomes four times weaker. At $10\,\mathrm{cm}$ from a charge of $5.0\,\mathrm{nC}$ we have $E = \dfrac{8.99 \cdot 10^{9} \cdot 5.0 \cdot 10^{-9}}{0.10^2}\,\mathrm{N/C} \approx 4.5 \cdot 10^{3}\,\mathrm{N/C}$.

::grafico{assi=0 uguale=1 linee="__LINEE1__" punti="0,0,pieno,+q" xmin=-2.2 xmax=2.2 ymin=-2.2 ymax=2.2 titolo="Field of a positive point charge: the vectors point outward and, at twice the distance, their length becomes one quarter"}

:::dimostrazione
Place a test charge $q_0$ at $P$. By **Coulomb's law** the force that $q$ exerts on $q_0$ is $\vec{F} = k\,\dfrac{q\,q_0}{r^2}\,\hat{r}$, with $\hat{r}$ directed from $q$ toward $q_0$; the orientation is correct for every combination of signs, because the product $q\,q_0$ is positive between charges of the same sign, which repel each other, and negative between charges of opposite sign, which attract each other. Dividing by $q_0$, by the definition of electric field we obtain the claim.
:::
::::

:::teorema{#sovrapposizione-campi titolo="Superposition principle for the electric field"}
The field produced at a point $P$ by the point charges $q_1, \dots, q_n$ is the vector sum of the fields that each charge would produce alone:
$$
\vec{E}(P) = \sum_{i=1}^{n} k\,\frac{q_i}{r_i^2}\,\hat{r}_i ,
$$
where $r_i$ is the distance of $P$ from $q_i$ and $\hat{r}_i$ the unit vector directed from $q_i$ toward $P$. The principle follows from the superposition principle for electric forces, which is an experimental law, by dividing the total force on the test charge by $q_0$. In calculations each field is written in Cartesian components, the components are added, and only at the end are the magnitude and direction of the resultant field obtained.
:::

:::esempio{titolo="Field of two opposite charges"}
A charge $q = 4.0\,\mathrm{nC}$ is at $A = (-3.0\,\mathrm{cm},\, 0)$ and a charge $-q$ at $B = (3.0\,\mathrm{cm},\, 0)$. The point $P = (0,\, 4.0\,\mathrm{cm})$ is $5.0\,\mathrm{cm}$ from both, so the two fields have the same magnitude
$$
E_1 = E_2 = \frac{8.99 \cdot 10^{9} \cdot 4.0 \cdot 10^{-9}}{0.050^2}\,\mathrm{N/C} \approx 1.44 \cdot 10^{4}\,\mathrm{N/C} .
$$
The field $\vec{E}_1$ points outward from $A$ and has the direction of the unit vector $\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$; the field $\vec{E}_2$ is directed toward $B$, with unit vector $\left( \dfrac{3}{5}, -\dfrac{4}{5} \right)$. The $y$ components cancel and the $x$ components add up, therefore
$$
\vec{E} = 2 E_1 \cdot \frac{3}{5}\,\hat{\imath} \approx 1.7 \cdot 10^{4}\,\mathrm{N/C}\;\hat{\imath} ,
$$
that is the field at $P$ is parallel to the line $AB$ joining the charges and points toward the negative charge.

::grafico{assi=0 uguale=1 punti="-3,0,pieno,+q;3,0,pieno,−q;0,4,pieno,P" segmenti="-3,0,0,4;3,0,0,4;1.08,5.44,2.16,4;1.08,2.56,2.16,4" vettori="0,4,2.16,4,E;0,4,1.08,5.44,E₁;0,4,1.08,2.56,E₂" xmin=-3.8 xmax=3.8 ymin=-0.8 ymax=6 titolo="The field $\vec{E}_1$ of the positive charge points outward, the field $\vec{E}_2$ of the negative charge points inward; the sum $\vec{E}$ is parallel to the line joining the charges"}

:::

:::attenzione{#somma-vettoriale-dei-campi}
In general the magnitudes of the fields do *not* add up. In the previous example $E_1 + E_2 \approx 2.9 \cdot 10^{4}\,\mathrm{N/C}$, whereas the resultant field has magnitude $1.7 \cdot 10^{4}\,\mathrm{N/C}$, because the two vectors form an angle and their $y$ components cancel. The sum of the magnitudes gives the magnitude of the resultant field only when the fields are parallel and have the same orientation.
:::

## Field lines

:::definizione{#linee-di-campo titolo="Field lines"}
A **field line** is an oriented curve that at each of its points is tangent to the electric field and has the orientation of the field. The lines are drawn so that their number per unit area, on a perpendicular surface, is proportional to the magnitude of the field; therefore the lines are denser where the field is stronger. For a positive point charge the lines are rays pointing outward from the charge, and through a sphere of radius $r$ centered at the charge always the same number of lines passes, distributed over an area $4\pi r^2$; the density of the lines therefore decreases as $\dfrac{1}{r^2}$, like the magnitude of the field.
:::

:::osservazione{#proprieta-linee-di-campo titolo="Properties of field lines"}
For a field produced by charges at rest the following properties hold.

- The lines leave positive charges and enter negative charges, or come from infinity or go to it; the number of lines leaving a charge is proportional to the charge.
- Two field lines do *not* intersect at points where $\vec{E} \neq \vec{0}$, because at each point the field has only one direction.
- No line with a definite direction passes through points where the field is zero.

In the dipole, formed by two opposite charges, all the lines that leave the positive charge enter the negative charge, except those that go off to infinity; between two equal positive charges the lines repel each other and at the midpoint the field is zero.

::grafico{assi=0 uguale=1 linee="__LINEE2__" punti="1,0,pieno,+q;-1,0,pieno,−q" xmin=-3.3 xmax=3.3 ymin=-2.3 ymax=2.3 titolo="Field lines of two opposite charges $+q$ and $-q$: they leave the positive charge and enter the negative charge"}

::grafico{assi=0 uguale=1 linee="__LINEE3__" punti="1,0,pieno,+q;-1,0,pieno,+q" xmin=-3.3 xmax=3.3 ymin=-2.3 ymax=2.3 titolo="Field lines of two equal positive charges: at the midpoint the field is zero and the lines all go off toward infinity"}

:::

:::attenzione{#linee-e-traiettorie}
In general a field line is *not* the trajectory of a charge released in the field. The force gives the acceleration of the charge, which is tangent to the line, whereas the velocity can have another direction: an electron launched perpendicular to a uniform field, whose lines are parallel straight lines, describes an arc of a parabola. Field line and trajectory coincide only in particular cases, for example for a charge that starts from rest in a uniform field.
:::

## Electric dipole

:::definizione{#dipolo-elettrico titolo="Electric dipole and dipole moment"}
An **electric dipole** is a system of two point charges $+q$ and $-q$, with $q > 0$, placed at distance $d$. The **dipole moment** is the vector
$$
\vec{p} = q\,\vec{d} ,
$$
where $\vec{d}$ is the vector that goes from the negative charge to the positive charge; its magnitude is $p = q\,d$ and it is measured in $\mathrm{C\cdot m}$. The line through the two charges is called the *axis* of the dipole. Many molecules, such as the water molecule, have the centers of the positive and negative charges separated, and at large distances they behave as dipoles. Two charges of $2.0\,\mathrm{nC}$ at distance $4.0\,\mathrm{mm}$ form a dipole with $p = 2.0 \cdot 10^{-9} \cdot 4.0 \cdot 10^{-3}\,\mathrm{C\cdot m} = 8.0 \cdot 10^{-12}\,\mathrm{C\cdot m}$.
:::

:::richiamo{titolo="Superposition principle for the electric field"}
The field produced by several point charges is the vector sum of the fields produced by each charge, $\vec{E} = \displaystyle\sum_i k\,\frac{q_i}{r_i^2}\,\hat{r}_i$.
:::

::::teorema{#campo-dipolo-asse titolo="Field of the dipole on its axis"}
Consider a dipole with the charges at $x = \pm\dfrac{d}{2}$ on the $x$-axis, with $\vec{p} = p\,\hat{\imath}$, and a point $P$ of the axis at distance $r > \dfrac{d}{2}$ from the center of the dipole. The field at $P$ is parallel to $\vec{p}$, with the same orientation, and has magnitude
$$
E = \frac{2 k\,p\,r}{\left( r^2 - \dfrac{d^2}{4} \right)^2} .
$$
For $r \gg d$ we obtain the approximation
$$
\vec{E} \approx \frac{2 k\,\vec{p}}{r^3} .
$$
The field of the dipole at large distances decreases as $\dfrac{1}{r^3}$, faster than the field of a charge, because the fields of the two opposite charges nearly cancel; moreover it depends on the charges and on the distance only through the product $p = q\,d$. For the dipole with $p = 8.0 \cdot 10^{-12}\,\mathrm{C\cdot m}$ and $d = 4.0\,\mathrm{mm}$, at $r = 10\,\mathrm{cm}$ the approximate formula gives $E = \dfrac{2 \cdot 8.99 \cdot 10^{9} \cdot 8.0 \cdot 10^{-12}}{0.10^3}\,\mathrm{N/C} \approx 1.4 \cdot 10^{2}\,\mathrm{N/C}$, with a deviation of $0.08\,\%$ from the exact value.

:::dimostrazione
Consider $P$ on the side of the positive charge, at $x = r$. The charge $+q$ is at distance $r - \dfrac{d}{2}$ from $P$ and produces an outward field, directed as $\hat{\imath}$; the charge $-q$ is at distance $r + \dfrac{d}{2}$ and produces a field directed toward itself, that is as $-\hat{\imath}$. By the **superposition principle**
$$
\begin{aligned}
E_x &= k q \left[ \frac{1}{\left( r - \dfrac{d}{2} \right)^2} - \frac{1}{\left( r + \dfrac{d}{2} \right)^2} \right] \\[6pt]
&= k q\,\frac{\left( r + \dfrac{d}{2} \right)^2 - \left( r - \dfrac{d}{2} \right)^2}{\left( r^2 - \dfrac{d^2}{4} \right)^2} = \frac{2 k\,q\,d\,r}{\left( r^2 - \dfrac{d^2}{4} \right)^2} ,
\end{aligned}
$$
which is positive; since $q\,d = p$, we obtain the claim. On the side of the negative charge, at $x = -r$, the charge $-q$ is the closer one and produces a field directed toward itself, that is as $\hat{\imath}$, and it prevails over the field of $+q$, directed as $-\hat{\imath}$; the same calculation gives the same magnitude and the same orientation. If $r \gg d$, the term $\dfrac{d^2}{4}$ is negligible compared with $r^2$, so the denominator is approximately $r^4$ and $E \approx \dfrac{2kp}{r^3}$.
:::
::::

::::teorema{#campo-dipolo-asse-mediano titolo="Field of the dipole on its perpendicular bisector"}
Under the same hypotheses, let $P$ be a point of the perpendicular bisector of the segment joining the charges, that is of the line perpendicular to the axis of the dipole through its center, at distance $r$ from the center. The field at $P$ is opposite to $\vec{p}$ and has magnitude
$$
E = \frac{k\,p}{\left( r^2 + \dfrac{d^2}{4} \right)^{\frac{3}{2}}} ,
\qquad
\vec{E} \approx -\frac{k\,\vec{p}}{r^3} \quad \text{for } r \gg d .
$$
At equal distance the field on the perpendicular bisector is about half the field on the axis of the dipole. For the dipole with $p = 8.0 \cdot 10^{-12}\,\mathrm{C\cdot m}$, at $10\,\mathrm{cm}$ from the center on the perpendicular bisector we have $E \approx 72\,\mathrm{N/C}$.

:::dimostrazione
The two charges are both at distance $s = \sqrt{r^2 + \dfrac{d^2}{4}}$ from $P$, so the two fields have the same magnitude $k\,\dfrac{q}{s^2}$. The field of $+q$ points outward from $+q$ and that of $-q$ is directed toward $-q$; their components perpendicular to the axis of the dipole are opposite and cancel, while the components parallel to the axis are both opposite to $\vec{p}$ and each equals $k\,\dfrac{q}{s^2} \cdot \dfrac{d}{2s}$, where $\dfrac{d}{2s}$ is the cosine of the angle between each field and the axis. Adding gives
$$
E = 2\,k\,\frac{q}{s^2} \cdot \frac{d}{2 s} = \frac{k\,q\,d}{s^3} = \frac{k\,p}{\left( r^2 + \dfrac{d^2}{4} \right)^{\frac{3}{2}}} .
$$
:::
::::

::::teorema{#momento-dipolo-campo-uniforme titolo="Dipole in a uniform field"}
Consider a rigid dipole of moment $\vec{p}$ in a uniform electric field $\vec{E}$, and let $\theta$ be the angle between $\vec{p}$ and $\vec{E}$. The resultant of the forces on the dipole is zero, and the torque about any point is
$$
\vec{\tau} = \vec{p} \times \vec{E} , \qquad \tau = p\,E \sin\theta .
$$
The torque tends to rotate the dipole until $\vec{p}$ is aligned with $\vec{E}$. The equilibrium positions are $\theta = 0$, which is stable, and $\theta = \pi$, which is unstable; the torque is maximum for $\theta = \dfrac{\pi}{2}$. For the dipole with $p = 8.0 \cdot 10^{-12}\,\mathrm{C\cdot m}$ in a field of $5.0 \cdot 10^{4}\,\mathrm{N/C}$, with $\theta = 30^\circ$, we have $\tau = 8.0 \cdot 10^{-12} \cdot 5.0 \cdot 10^{4} \cdot 0.50\,\mathrm{N\cdot m} = 2.0 \cdot 10^{-7}\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 linee="-2.5,-1.75 2.5,-1.75;-1.76,-1.65 -1.6,-1.75 -1.76,-1.85;1.44,-1.65 1.6,-1.75 1.44,-1.85;-2.5,1.75 2.5,1.75;-1.76,1.85 -1.6,1.75 -1.76,1.65;1.44,1.85 1.6,1.75 1.44,1.65" punti="0.82,0.57,pieno,+q;-0.82,-0.57,pieno,−q" segmenti="0,0,1.4,0" vettori="-0.82,-0.57,0.82,0.57,p;0.82,0.57,1.92,0.57,F₊;-0.82,-0.57,-1.92,-0.57,F₋" etichette="0.5,0.08,θ;2.15,1.95,E" xmin=-2.6 xmax=2.6 ymin=-2.2 ymax=2.2 titolo="In a uniform field the forces $\vec{F}_{+} = q\vec{E}$ and $\vec{F}_{-} = -q\vec{E}$ have zero resultant and torque $\vec{p} \times \vec{E}$, which tends to align $\vec{p}$ with the field"}

:::dimostrazione
On the charge $+q$ acts the force $q\vec{E}$ and on the charge $-q$ the force $-q\vec{E}$, therefore the resultant is zero. Let $\vec{r}_{+}$ and $\vec{r}_{-}$ be the positions of the two charges with respect to a point $O$. The total torque about $O$ is
$$
\vec{\tau} = \vec{r}_{+} \times q\vec{E} + \vec{r}_{-} \times \left( -q\vec{E} \right) = q\left( \vec{r}_{+} - \vec{r}_{-} \right) \times \vec{E} = q\,\vec{d} \times \vec{E} = \vec{p} \times \vec{E} ,
$$
since $\vec{r}_{+} - \vec{r}_{-} = \vec{d}$ is the vector that goes from $-q$ to $+q$. The result does not depend on $O$, as happens for every system of forces with zero resultant. The magnitude of the cross product is $p\,E\sin\theta$.
:::
::::

:::osservazione{#energia-dipolo titolo="Work on the dipole and potential energy"}
In electromagnetism work is denoted by $W$, because the letter $L$ is reserved for inductance. When the dipole rotates from $\theta_1$ to $\theta_2$, the torque of the electric forces, which equals $-p\,E\sin\theta$ with the sign referred to the direction in which $\theta$ increases, does the work
$$
W = \int_{\theta_1}^{\theta_2} \left( -p\,E\sin\theta \right) d\theta = p\,E \left( \cos\theta_2 - \cos\theta_1 \right) .
$$
The work depends only on the initial and final positions, so the dipole is assigned the potential energy $U(\theta) = -p\,E\cos\theta = -\vec{p} \cdot \vec{E}$, which is minimum at the position of stable equilibrium. For the dipole of the previous example, which aligns with the field starting from $\theta = 30^\circ$, the field does the work $W = 4.0 \cdot 10^{-7} \cdot \left( 1 - \cos 30^\circ \right)\,\mathrm{J} \approx 5.4 \cdot 10^{-8}\,\mathrm{J}$. For electric potential energy we refer to the topic on the electric potential and electrostatic energy.
:::

## Continuous charge distributions

:::definizione{#densita-di-carica titolo="Charge density"}
When the charge is distributed over an extended body it is described by a density, defined as the ratio between the charge $dq$ of a small element and its measure:

- the **linear density** $\lambda = \dfrac{dq}{d\ell}$, in $\mathrm{C/m}$, for a wire or a thin rod;
- the **surface density** $\sigma = \dfrac{dq}{dA}$, in $\mathrm{C/m^2}$, for a slab or a surface;
- the *volume density* $\rho = \dfrac{dq}{dV}$, in $\mathrm{C/m^3}$, for a three-dimensional body.

If the distribution is uniform, the density is the ratio between the total charge and the length, the area or the volume; a rod $20\,\mathrm{cm}$ long with uniform charge $4.0\,\mathrm{nC}$ has $\lambda = \dfrac{4.0 \cdot 10^{-9}}{0.20}\,\mathrm{C/m} = 2.0 \cdot 10^{-8}\,\mathrm{C/m}$.
:::

:::richiamo{titolo="Line integrals and double integrals"}
The integral of a function along a curve is computed by parametrizing the curve and reducing it to an integral in one variable; the integral over a plane region is computed as a double integral, for example in polar coordinates, where the area element is $dA = s\,ds\,d\varphi$. The integral of a vector is computed component by component. We refer to the topics on curves and line integrals and on double and triple integrals in Mathematical Analysis 2.
:::

:::teorema{#campo-distribuzione-continua titolo="Field of a continuous distribution"}
The field produced at $P$ by a continuously distributed charge is
$$
\vec{E}(P) = \int k\,\frac{dq}{r^2}\,\hat{r} ,
$$
where $r$ is the distance of the element $dq$ from $P$ and $\hat{r}$ the unit vector directed from the element toward $P$, and the integral extends over the whole distribution. The formula follows from the **superposition principle**, by dividing the distribution into elements so small that they can be treated as point charges and passing to the limit of the sum. The calculation follows a fixed scheme:

- choose the element $dq$ and write it with the density, $dq = \lambda\,d\ell$, $dq = \sigma\,dA$ or $dq = \rho\,dV$;
- write the distance $r$ and the field $d\vec{E}$ of the element;
- use the symmetries to establish which components of $\vec{E}$ vanish;
- integrate the only remaining component.
:::

## Charged ring and wire

::::teorema{#campo-anello titolo="Field on the axis of a charged ring"}
Consider a thin ring of radius $R$ with charge $Q$ uniformly distributed, and let $z$ be the coordinate along the axis of the ring, with origin at the center. At the point of the axis with coordinate $z$ the field is directed along the axis and equals
$$
E_z = \frac{k\,Q\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}} .
$$
At the center the field is zero, because the contributions of opposite elements cancel; for $|z| \gg R$ we have $E_z \approx \dfrac{kQ}{z^2}$, that is the ring behaves as a point charge. The magnitude of the field is maximum for $|z| = \dfrac{R}{\sqrt{2}}$, where the derivative of $E_z$ with respect to $z$ vanishes. For $R = 3.0\,\mathrm{cm}$ and $Q = 1.0\,\mathrm{nC}$ the maximum is at $2.1\,\mathrm{cm}$ from the center and is about $3.8 \cdot 10^{3}\,\mathrm{N/C}$.

::grafico{assi=0 uguale=1 curve="0.6*cos(t),2*sin(t),0,6.29" linee="-1.2,0 6.8,0" punti="0,0,pieno,O;4,0,pieno,P;0,2,pieno,dq;0,-2,pieno,dq′" segmenti="0,2,4,0;0,-2,4,0;0,0,0,2" vettori="4,0,5.16,-0.58;4,0,5.16,0.58" etichette="0.12,0.95,R;2,-0.45,z;5.3,-0.9,dE;5.3,0.75,dE′" legenda=0 xmin=-1.4 xmax=7 ymin=-2.6 ymax=2.6 titolo="Opposite elements $dq$ and $dq'$ of the ring produce at $P$ fields whose components perpendicular to the axis cancel"}

::grafico{f="89.9*x/(x^2+9)^1.5" punti="2.12,3.84,pieno;-2.12,-3.84,pieno" segmenti="2.12,0,2.12,3.84;-2.12,0,-2.12,-3.84" nomi="z,E" legenda="E_z" xmin=-12 xmax=12 ymin=-4.6 ymax=4.6 titolo="Field on the axis of a ring with $R = 3.0\,\mathrm{cm}$ and $Q = 1.0\,\mathrm{nC}$, with $z$ in centimeters and $E_z$ in $\mathrm{kN/C}$: the magnitude is maximum for $|z| = \dfrac{R}{\sqrt{2}}$"}

:::dimostrazione
Divide the ring into elements of charge $dq$. Each element is at distance $r = \sqrt{z^2 + R^2}$ from the point $P$ and produces a field of magnitude $dE = k\,\dfrac{dq}{z^2 + R^2}$, which forms with the axis the angle $\alpha$ such that $\cos\alpha = \dfrac{z}{\sqrt{z^2 + R^2}}$. The diametrically opposite element produces a field with the same component along the axis and with opposite perpendicular component, so by symmetry the total field is directed along the axis. Adding the components along the axis, in which $z$ and $R$ are constant, we obtain
$$
E_z = \int k\,\frac{dq}{z^2 + R^2} \cdot \frac{z}{\sqrt{z^2 + R^2}} = \frac{k\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}} \int dq = \frac{k\,Q\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}} .
$$
:::
::::

::::teorema{#campo-filo titolo="Field of a straight wire"}
Consider a straight wire of length $2\ell$ with uniform linear density $\lambda$, and a point $P$ at distance $r$ from the wire on the perpendicular bisector of the wire itself, that is on the perpendicular through the midpoint. The field at $P$ is perpendicular to the wire and equals
$$
E = \frac{2 k\,\lambda\,\ell}{r\sqrt{r^2 + \ell^2}} .
$$
For an **infinite wire**, that is in the limit $\ell \to +\infty$, the field is radial with respect to the wire and at every point at distance $r$ equals
$$
E = \frac{2 k\,\lambda}{r} = \frac{\lambda}{2\pi\varepsilon_0\, r} .
$$
The field of the infinite wire decreases as $\dfrac{1}{r}$, more slowly than the field of a point charge. The infinite-wire approximation is adequate when $r$ is small compared with the length of the wire and the point is far from the ends. At $5.0\,\mathrm{cm}$ from a long wire with $\lambda = 2.0\,\mathrm{nC/m}$ we have $E = \dfrac{2 \cdot 8.99 \cdot 10^{9} \cdot 2.0 \cdot 10^{-9}}{0.050}\,\mathrm{N/C} \approx 7.2 \cdot 10^{2}\,\mathrm{N/C}$. The same result is obtained with Gauss's law, for which we refer to the topic on electric flux and Gauss's law.

::grafico{assi=0 uguale=1 linee="-3,0 3,0" punti="1.6,0,pieno,dq;-1.6,0,pieno,dq′;0,2.2,pieno,P" segmenti="1.6,0,0,2.2;-1.6,0,0,2.2;0,0,0,2.2" vettori="0,2.2,-0.71,3.17,dE;0,2.2,0.71,3.17,dE′" etichette="0.12,1,r;0.7,-0.45,x;-3.25,-0.45,−ℓ;2.9,-0.45,ℓ" xmin=-3.6 xmax=3.6 ymin=-0.9 ymax=3.6 titolo="The elements $dq$ and $dq'$, symmetric with respect to the midpoint of the wire, produce at $P$ fields with opposite components parallel to the wire: only the perpendicular component remains"}

:::dimostrazione
Place the wire on the $x$-axis, from $-\ell$ to $\ell$, and $P = (0, r)$. The element of wire between $x$ and $x + dx$ has charge $dq = \lambda\,dx$ and is at distance $\sqrt{x^2 + r^2}$ from $P$. By symmetry with respect to the $y$-axis the $x$ components of the fields of the elements at $x$ and at $-x$ cancel, so the $y$ component remains, in which the cosine of the angle with the $y$-axis is $\dfrac{r}{\sqrt{x^2 + r^2}}$:
$$
E_y = \int_{-\ell}^{\ell} k\,\frac{\lambda\,dx}{x^2 + r^2} \cdot \frac{r}{\sqrt{x^2 + r^2}} = k\,\lambda\,r \int_{-\ell}^{\ell} \frac{dx}{\left( x^2 + r^2 \right)^{\frac{3}{2}}} .
$$
An antiderivative of the integrand is $\dfrac{x}{r^2\sqrt{x^2 + r^2}}$, as can be verified by differentiating, hence
$$
E_y = k\,\lambda\,r \left[ \frac{x}{r^2\sqrt{x^2 + r^2}} \right]_{-\ell}^{\ell} = \frac{2 k\,\lambda\,\ell}{r\sqrt{r^2 + \ell^2}} .
$$
For $\ell \to +\infty$ we have $\dfrac{\ell}{\sqrt{r^2 + \ell^2}} \to 1$, therefore $E \to \dfrac{2k\lambda}{r}$; finally $2k = \dfrac{1}{2\pi\varepsilon_0}$.
:::
::::

## Disk and infinite plane

:::richiamo{titolo="Field on the axis of a charged ring"}
A thin ring of radius $R$ with uniform charge $Q$ produces at the point of the axis with coordinate $z$ the field $E_z = \dfrac{k\,Q\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}}$, directed along the axis.
:::

::::teorema{#campo-disco titolo="Field on the axis of a charged disk"}
Consider a thin disk of radius $R$ with uniform surface density $\sigma$. At the point of the axis at distance $z > 0$ from the center, on the side of positive $z$, the field is directed along the axis and equals
$$
E_z = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^2}} \right) .
$$
On the opposite side the field has the same magnitude and opposite orientation. The field is about $\dfrac{\sigma}{2\varepsilon_0}$ near the disk, that is for $z \ll R$, and decreases moving away; for $z \gg R$ the disk behaves as a point charge. For $\sigma = 3.0 \cdot 10^{-6}\,\mathrm{C/m^2}$ and $R = 10\,\mathrm{cm}$, at $z = 5.0\,\mathrm{cm}$ we have $E_z \approx 1.69 \cdot 10^{5} \cdot 0.553\,\mathrm{N/C} \approx 9.4 \cdot 10^{4}\,\mathrm{N/C}$.

:::dimostrazione
Divide the disk into concentric rings of radius $s$ and width $ds$, with $0 \leq s \leq R$. The ring has area $2\pi s\,ds$ and charge $dq = \sigma\,2\pi s\,ds$, so by the field on the axis of a charged ring it produces the field
$$
dE_z = \frac{k\,z\,\sigma\,2\pi s\,ds}{\left( z^2 + s^2 \right)^{\frac{3}{2}}} .
$$
All the contributions are directed along the axis, therefore they add up:
$$
\begin{aligned}
E_z &= 2\pi k\,\sigma\,z \int_0^R \frac{s\,ds}{\left( z^2 + s^2 \right)^{\frac{3}{2}}} = 2\pi k\,\sigma\,z \left[ -\frac{1}{\sqrt{z^2 + s^2}} \right]_0^R \\[6pt]
&= 2\pi k\,\sigma\,z \left( \frac{1}{z} - \frac{1}{\sqrt{z^2 + R^2}} \right) = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^2}} \right) ,
\end{aligned}
$$
where in the last step we used $2\pi k = \dfrac{1}{2\varepsilon_0}$.
:::
::::

::::teorema{#campo-piano-infinito titolo="Field of a charged infinite plane"}
An infinite plane with uniform surface density $\sigma$ produces a **uniform** field, perpendicular to the plane, of magnitude
$$
E = \frac{\sigma}{2\varepsilon_0} ,
$$
pointing away from the plane if $\sigma > 0$ and toward it if $\sigma < 0$, on both sides. The field does not depend on the distance from the plane. The model describes a finite charged slab at points whose distance from the slab is small compared with the dimensions of the slab and which are far from the edges. For $\sigma = 8.85\,\mathrm{nC/m^2}$ we obtain $E = \dfrac{8.85 \cdot 10^{-9}}{2 \cdot 8.85 \cdot 10^{-12}}\,\mathrm{N/C} = 500\,\mathrm{N/C}$.

::grafico{f="1-x/sqrt(x^2+1)+0*sqrt(x);1+0*sqrt(x)" nomi="z,E" legenda="E_{\text{disk}};E_{\text{plane}}" xmin=-0.4 xmax=4.5 ymin=-0.2 ymax=1.3 titolo="Field on the axis of a disk and field of the infinite plane with the same $\sigma$, with $z$ in units of $R$ and $E$ in units of $\dfrac{\sigma}{2\varepsilon_0}$: near the disk the two fields coincide"}

:::dimostrazione
Every point is on the axis of a disk of radius $R$ centered at its projection on the plane. By the field on the axis of a charged disk, at distance $z > 0$,
$$
E_z = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^2}} \right) ,
$$
and for $R \to +\infty$ the fraction $\dfrac{z}{\sqrt{z^2 + R^2}}$ tends to $0$, so $E_z \to \dfrac{\sigma}{2\varepsilon_0}$. The limit depends neither on $z$ nor on the point chosen on the plane.
:::
::::

:::osservazione{#piani-paralleli titolo="Two parallel planes with opposite charges"}
Consider two parallel infinite planes with densities $+\sigma$ and $-\sigma$. Each plane produces a field of magnitude $\dfrac{\sigma}{2\varepsilon_0}$; the field of the positive plane points away from it and that of the negative plane points toward it. Between the planes the two fields have the same orientation, from the positive plane to the negative plane, and by the superposition principle they add up; outside they have opposite orientations and cancel. Hence
$$
E =
\begin{cases}
\dfrac{\sigma}{\varepsilon_0} & \text{between the planes} \\[8pt]
0 & \text{outside}
\end{cases}
$$
and between the planes the field is uniform. With $\sigma = 8.85\,\mathrm{nC/m^2}$ the field between the planes is $1.00 \cdot 10^{3}\,\mathrm{N/C}$. This is the configuration of the parallel-plate capacitor, for which we refer to the topic on conductors, capacitors and dielectrics.
:::

## Motion of a charge in a uniform field

:::richiamo{titolo="Uniformly accelerated motion"}
A point particle with constant acceleration $\vec{a}$, initial position $\vec{r}_0$ and initial velocity $\vec{v}_0$ has $\vec{v}(t) = \vec{v}_0 + \vec{a}\,t$ and $\vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \dfrac{1}{2}\vec{a}\,t^2$; along a line parallel to $\vec{a}$ we also have $v^2 = v_0^2 + 2a\,\Delta x$. We refer to the topics on kinematics in one dimension and on motion in the plane.
:::

::::teorema{#moto-campo-uniforme titolo="Acceleration of a charge in a uniform field"}
Consider a particle of mass $m$ and charge $q$ in a uniform electric field $\vec{E}$, subject only to the electric force. Then the particle has constant acceleration
$$
\vec{a} = \frac{q\,\vec{E}}{m} ,
$$
and its motion is uniformly accelerated: rectilinear if the initial velocity is zero or parallel to the field, parabolic in the other cases. For electrons and protons the weight is negligible; for an electron in a field of $1.0 \cdot 10^{3}\,\mathrm{N/C}$ the ratio between the electric force and the weight is $\dfrac{eE}{m_e g} \approx 1.8 \cdot 10^{13}$. For the same field the acceleration is inversely proportional to the mass, therefore an electron accelerates about $1800$ times more than a proton.

:::dimostrazione
Only the force $q\vec{E}$ acts on the particle, so by **Newton's second law** $m\vec{a} = q\vec{E}$. Since $q$, $m$ and $\vec{E}$ are constant, the acceleration is constant, and the motion is that of a point with constant acceleration, rectilinear if $\vec{v}_0$ is zero or parallel to $\vec{a}$ and parabolic otherwise, like the motion of a projectile.
:::
::::

:::esempio{titolo="Electron accelerated from rest"}
An electron starts from rest in a uniform field of magnitude $E = 2.0 \cdot 10^{3}\,\mathrm{N/C}$ and moves in the direction opposite to the field, because it has negative charge. The acceleration has magnitude
$$
a = \frac{eE}{m_e} = \frac{1.60 \cdot 10^{-19} \cdot 2.0 \cdot 10^{3}}{9.11 \cdot 10^{-31}}\,\mathrm{m/s^2} \approx 3.5 \cdot 10^{14}\,\mathrm{m/s^2} .
$$
After a distance $\Delta x = 1.0\,\mathrm{cm}$, by $v^2 = 2a\,\Delta x$ the speed is $v = \sqrt{2 \cdot 3.51 \cdot 10^{14} \cdot 0.010}\,\mathrm{m/s} \approx 2.7 \cdot 10^{6}\,\mathrm{m/s}$, reached in about $7.5\,\mathrm{ns}$.
:::

::::teorema{#moto-perpendicolare-al-campo titolo="Deflection of a charge in a uniform field"}
A particle of mass $m$ and charge $q$ enters with velocity $\vec{v}_0$ perpendicular to the field a region of length $\ell$, measured in the direction of $\vec{v}_0$, where there is a uniform field $\vec{E}$, for example between two charged parallel plates. With the $x$-axis along $\vec{v}_0$ and the $y$-axis along the force, the trajectory in the region is the arc of parabola
$$
y = \frac{|q|\,E}{2 m v_0^2}\,x^2 .
$$
At the exit the particle is deflected by the displacement $y_u$ and its velocity forms with the initial direction the angle $\alpha$, where
$$
y_u = \frac{|q|\,E\,\ell^2}{2 m v_0^2} , \qquad \tan\alpha = \frac{|q|\,E\,\ell}{m v_0^2} .
$$
Beyond the region of the field the particle continues in a straight line. Cathode-ray oscilloscopes worked on this principle, in which the electron beam was deflected by plates at variable voltage. An electron with $v_0 = 2.0 \cdot 10^{7}\,\mathrm{m/s}$ that crosses a field of $5.0 \cdot 10^{3}\,\mathrm{N/C}$ over $\ell = 4.0\,\mathrm{cm}$ is deflected by $y_u \approx 1.8\,\mathrm{mm}$ and exits with $\alpha \approx 5.0^\circ$.

::grafico{assi=0 uguale=1 linee="0,1 6,1;0,-1 6,-1;1.2,0.9 1.2,-0.9;2.4,0.9 2.4,-0.9;3.6,0.9 3.6,-0.9;4.8,0.9 4.8,-0.9;1.28,-0.17 1.2,-0.3 1.12,-0.17;2.48,-0.17 2.4,-0.3 2.32,-0.17;3.68,-0.17 3.6,-0.3 3.52,-0.17;4.88,-0.17 4.8,-0.3 4.72,-0.17;-0.8,0 0,0;6,0.6 8.5,1.1" curve="t,0.6*(t/6)^2,0,6" segmenti="0,0,6.4,0;6.4,0,6.4,0.6;0,-1.7,6,-1.7" vettori="-2,0,-0.8,0,v₀;3,0.15,3,0.85,F" etichette="0.3,1.2,+  +  +  +  +  +  +  +;0.3,-1.45,−  −  −  −  −  −  −  −;5.05,-0.6,E;6.55,0.15,y;2.9,-2.1,ℓ" legenda=0 xmin=-2.3 xmax=8.8 ymin=-2.4 ymax=1.7 titolo="An electron enters between the plates with velocity $\vec{v}_0$ perpendicular to the field: the force $\vec{F} = -e\vec{E}$ deflects it toward the positive plate along an arc of parabola, then it continues in a straight line"}

:::dimostrazione
By the previous theorem the acceleration is constant, of magnitude $a = \dfrac{|q|\,E}{m}$, directed along $y$. Along $x$ there are no forces, so the motion is uniform; along $y$ the initial velocity is zero and the motion is uniformly accelerated:
$$
\begin{cases}
x = v_0\,t \\[4pt]
y = \dfrac{1}{2}\,a\,t^2
\end{cases}
$$
Obtaining $t = \dfrac{x}{v_0}$ from the first equation and substituting into the second gives $y = \dfrac{a}{2 v_0^2}\,x^2$, which is the trajectory. The particle leaves the region at the instant $t_u = \dfrac{\ell}{v_0}$, when $y_u = \dfrac{a\,\ell^2}{2 v_0^2}$; at that instant the components of the velocity are $v_x = v_0$ and $v_y = a\,t_u = \dfrac{a\,\ell}{v_0}$, hence $\tan\alpha = \dfrac{v_y}{v_x} = \dfrac{a\,\ell}{v_0^2}$. Substituting $a = \dfrac{|q|\,E}{m}$ gives the claim.
:::
::::
