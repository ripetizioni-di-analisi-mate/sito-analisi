---
titolo: Gravitation and orbits
sommario: Gravitational field, energies, orbital speeds and periods, Kepler's laws and escape.
---

## The law of gravitation

:::teorema{#legge-gravitazione titolo="Attraction between masses"}
Two point masses $m_1,m_2$ separated by $r$ attract with equal force magnitude
$$
F=G\frac{m_1m_2}{r^2},\qquad G=6.67\cdot10^{-11}\,\mathrm{N\cdot m^2/kg^2}.
$$
Each force points towards the other mass. They form an action–reaction pair and act on different bodies. Outside a body with a spherically symmetric mass distribution, its field equals that of a point of the same mass at its centre. Thus for two nonoverlapping spheres of this kind the distance in the formula is the distance between centres. Above a planet of radius $R$, altitude $h$ gives distance $r=R+h$ from its centre. *At the ground*, $r=R$; inserting the zero altitude in the denominator would make the formula diverge.

The product $m_1m_2$ enters linearly. Doubling one mass at a fixed separation doubles the forces on both bodies. Their accelerations also depend on their respective inertias. At fixed masses, tripling the separation reduces the force to one ninth. When several quantities change, take the ratio of the new force to the initial one so that $G$ cancels.
:::

:::esempio{titolo="Directions of the gravitational pair"}
For two masses on a line, $m_1$ lies to the left and $m_2$ to the right. The force on $m_1$ points right and the force on $m_2$ points left, with equal magnitudes. If $m_2=3m_1$, the second body has one third the first body's acceleration magnitude. In the momentum balance the changes instead have equal magnitude and opposite direction.

::grafico{assi=0 vettori="0,0,1,0,F_1;4,0,3,0,F_2" punti="0,0,pieno,m_1;4,0,pieno,m_2" xmin=-1 xmax=5 ymin=-1 ymax=1 titolo="The two forces act on different bodies"}
:::

:::esempio{titolo="Checking the model with relative measurements"}
An apparatus uses two masses whose dimensions are small compared with the separation of their centres. It records the force magnitude in three configurations. At distances $r_1$, $2r_1$ and $3r_1$, the model predicts $F_1$, $\dfrac{F_1}{4}$ and $\dfrac{F_1}{9}$. The product $Fr^2$ should therefore stay constant. Comparing those products tests the law without a precise absolute sensor calibration, provided the calibration is the same for all three readings. An actual measurement compares any differences with the uncertainties in distance and force. To first order, the $r^2$ term doubles the relative effect of uncertainty in $r$ on the product.

::grafico{f="100/x^2" punti="1,100,pieno;2,25,pieno;3,11.111111,pieno" xmin=.9 xmax=3.45 ymin=0 ymax=115 nomi="r/r_1,100 F/F_1" titolo="Doubling and tripling the distance lowers the force to 25% and about 11% of its initial value"}
:::

## Field and weight

:::definizione{#campo-gravitazionale titolo="Force per unit test mass"}
The **gravitational field** is the force per unit test mass. Outside a spherically symmetric body of mass $M$, its magnitude is $g(r)=\dfrac{GM}{r^2}$ and it points towards the centre. The unit $\mathrm{N/kg}$ equals $\mathrm{m/s^2}$. A body of mass $m$ has weight of magnitude $mg(r)$. Unlike weight, the field depends on the source and point and is independent of the mass used to measure it.

From the surface to distance $2R$, the value drops to one quarter. From the surface to *altitude* $2R$, the distance is $3R$ and the value drops to one ninth. Where several sources act, add their fields as vectors. Along an axis between two masses, the components can cancel even though neither is zero. Outside the intervening segment they point the same way.
:::

:::esempio{titolo="Field one radius above the surface"}
For a planet with surface field $g_0=12\,\mathrm{m/s^2}$, at altitude $R$ the field is $g_0/4=3\,\mathrm{m/s^2}$. A $2\,\mathrm{kg}$ object weighs $24\,\mathrm N$ at the surface and $6\,\mathrm N$ at that altitude. Its mass stays fixed, and the ratio of weights equals the ratio of local fields.

::grafico{f="12/x^2" punti="1,12,pieno,A;2,3,pieno,B" xmin=1 xmax=4 ymin=0 ymax=16 nomi="r/R,g (m/s²)" titolo="A is the surface and B is twice as far from the centre"}
:::

:::esempio{titolo="Where the fields of two sources cancel"}
Two point sources of masses $4M$ and $M$ are separated by $6\,\mathrm{km}$. Along the line joining them, measure $x$ in kilometres from the larger source. Between the sources the two contributions point in opposite directions, so we set their magnitudes equal.
$$
\frac{4}{x^2}=\frac{1}{(6-x)^2},
\qquad
\frac{2}{x}=\frac{1}{6-x}.
$$
Both distances are positive, so we take positive square roots. The result is $x=4\,\mathrm{km}$. The point is closer to the smaller mass, so the smaller distance offsets the difference in mass. A test mass placed there experiences zero net field at that instant. Each source still exerts a force.

::grafico{assi=0 linee="0,0 6,0" punti="0,0,pieno,A;6,0,pieno,B;4,0,pieno,P" vettori="4,.52,2.5,.52,g_A;4,.52,5.5,.52,g_B" etichette="-.09,-.33,4M;5.88,-.33,M" xmin=-.65 xmax=6.65 ymin=-.72 ymax=1.15 titolo="At P, 4 km from A and 2 km from B, the two fields have equal magnitudes"}
:::

## Gravitational energy

:::teorema{#energia-gravitazionale titolo="Energy zero at infinity"}
For mass $m$ outside a spherical source $M$, taking zero at infinite separation gives $U(r)=-\dfrac{GMm}{r}$. Bringing the body closer makes $U$ more negative; moving it away raises $U$ towards zero. From $r_i$ to $r_f$, gravity does work
$$
W_g=-\Delta U=GMm\left(\frac1{r_f}-\frac1{r_i}\right).
$$
Work is negative when distance increases. To decide whether the body can escape, add its kinetic energy to the potential energy. Measure the velocity in the frame of the dominant source, which is approximately inertial when the body’s mass is negligible. A velocity measured relative to a moving vehicle would change the kinetic energy used in the balance.

Potential energy $U$ is expressed in joules and also depends on the mass $m$. The **gravitational potential** is $\Phi=\dfrac Um$, expressed in joules per kilogram. At a fixed source and position, changing the test mass changes $U$ by the same factor and leaves $\Phi$ unchanged.

For an ascent of height $h$ from radius $R$, the exact difference is $\dfrac{GMmh}{R(R+h)}$. If $h\ll R$, the denominator is nearly $R^2$ and the difference is approximately $m g_0 h$. The ratio of the constant-gravity estimate to the exact difference is $1+\dfrac{h}{R}$. Relative error is small for low altitudes. If $h$ is comparable with $R$, the approximation overestimates the difference. Taking a local zero at ground level does not affect this comparison of differences.
:::

:::esempio{titolo="A transfer between two radii"}
When $r$ goes from $R$ to $2R$, energy changes from $-\dfrac{GMm}{R}$ to $-\dfrac{GMm}{2R}$. Moving the body out requires an energy input: its potential rises by $\dfrac{GMm}{2R}$. Keeping gravity equal to its surface value would give an estimate $mg_0R$ of $\dfrac{GMm}{R}$, twice the exact difference.

::grafico{f="-1/x" punti="1,-1,pieno,A;2,-.5,pieno,B" xmin=1 xmax=4 ymin=-1.5 ymax=.25 nomi="r/R,U/(GMm/R)" titolo="Potential energy rises towards zero as r increases"}
:::

:::esempio{titolo="Choosing a height for the approximation"}
Suppose the rise in potential energy is estimated using the surface field, with a relative error of at most $5\%$ against the exact value. The estimate exceeds the exact difference by a fraction $\dfrac{h}{R}$ of that difference. The height can therefore be at most $0.05R$. With $R=6400\,\mathrm{km}$, the limit for that accuracy is $320\,\mathrm{km}$. The local field there is about $91\%$ of the surface field. The two percentages measure different quantities because energy depends on work along the whole interval, while the field changes between its endpoint values.

::grafico{f="100*x/(1+x);100*x" punti="1,50,pieno;1,100,pieno" xmin=0 xmax=1.15 ymin=0 ymax=120 nomi="h/R,100 ΔU/(mg₀R)" legenda="100\,\dfrac{x}{1+x};100x" titolo="The curve gives the exact change. The straight line uses the constant field g₀."}
:::

## Circular orbits

:::teorema{#orbite titolo="Gravity supplies centripetal acceleration"}
For a satellite much less massive than $M$, write $\mu=GM$ for the source's **gravitational parameter**. In a circular orbit of radius $r$, the field $\dfrac{\mu}{r^2}$ supplies exactly the centripetal acceleration $\dfrac{v^2}{r}$. Hence
$$
v=\sqrt{\frac\mu r},\qquad
T=\frac{2\pi r}{v}=2\pi\sqrt{\frac{r^3}{\mu}}.
$$
The two dependencies differ. Force falls as inverse radius squared, while circular speed decreases only as the inverse square root of radius. Period grows because a longer circumference is travelled at a lower speed.

The calculation assumes that gravity is the only significant force and that velocity is tangent to the circle. A different speed at that same position, or a radial component, generally yields a different trajectory. Apparent weightlessness in an orbiting vehicle comes from shared free fall. Vehicle and astronaut have nearly identical gravitational accelerations, so there is often no support force.
:::

:::esempio{titolo="Estimating a central mass from an orbit"}
Suppose a satellite completes a circle of radius $8.0\cdot10^6\,\mathrm m$ in $7200\,\mathrm s$. Dividing the circumference by the period gives $v\simeq6.98\cdot10^3\,\mathrm{m/s}$. The attraction must supply the acceleration that changes the direction of that velocity. Therefore $\mu=v^2r\simeq3.90\cdot10^{14}\,\mathrm{m^3/s^2}$. Dividing by $G$ estimates the central mass. Repeating the calculation for another orbit around the same planet should give the same parameter within measurement uncertainty. The product $v^2r$ uses the distance from the centre and the velocity in the frame in which the source is approximately at rest.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" punti="0,0,pieno,O;2,0,pieno,S" vettori="2,0,2,1.33,v;2,0,.9,0,g" xmin=-2.35 xmax=2.9 ymin=-2.35 ymax=2.35 titolo="At S the velocity is tangent to the orbit and the field points towards the centre O"}
:::

:::esempio{titolo="Increasing orbital radius"}
Two circular orbits around the same planet have radii $r$ and $4r$. The wider orbit has half the speed and four times the path length. Its time per revolution is therefore eight times greater. The satellites' masses cancel before the comparison.
:::

:::osservazione{titolo="Using the period to measure the radius"}
For the same source, the ratio of periods determines the ratio of circular radii. A period twice as long gives a radius multiplied by $2^{\frac23}\simeq1.59$. The radius therefore grows less than in direct proportion to the period. For an elliptical orbit the inversion instead gives the semimajor axis. The shape of the orbit supplies the remaining information needed to determine the two extreme distances.

::grafico{f="x^(3/2)" punti="1,1,pieno;1.587401,2,pieno;4,8,pieno" segmenti="0,2,1.587401,2;1.587401,0,1.587401,2" xmin=0 xmax=4.35 ymin=0 ymax=10 nomi="r/r_1,T/T_1" titolo="Twice the period corresponds to about 1.59 times the reference radius"}
:::

## Kepler's laws

:::teorema{#keplero titolo="Orbital shape, areas and periods"}
In the two-body model with a dominant source, bound orbits with nonzero angular momentum are ellipses with the source at a focus. A circle is the case of coinciding foci. The force's line of action passes through the focus, so torque about it is zero. Angular momentum conservation makes the radius vector sweep equal areas in equal times. Near periapsis the smaller distance requires a larger angular motion to sweep the same area. At the two distance extremes velocity is perpendicular to the radius and $rv$ has the same value.

The ratio $\dfrac{T^2}{a^3}=\dfrac{4\pi^2}{GM}$ uses semimajor axis $a$. For an ellipse, $a$ is half the sum of the least and greatest distances from a focus. For two orbits around the same source, $T_2/T_1=(a_2/a_1)^{3/2}$. For different sources the constant changes, and the comparison must include both gravitational parameters.
:::

:::osservazione{titolo="Eccentricity and swept area"}
Let $c$ be the distance from the centre of the ellipse to a focus. The **eccentricity** is $e=\dfrac ca$, so the geometry of the major axis gives $r_p=a(1-e)$ and $r_a=a(1+e)$. Periapsis and apoapsis are the points at which the radial velocity component vanishes.

Over a short interval $\Delta t$, the swept area is approximately $\dfrac12 rv_\perp\Delta t$, where $v_\perp$ is the transverse velocity component. The product $mrv_\perp$ is angular momentum and stays constant. Taking the limit for small intervals gives the same swept area per unit time along the entire orbit.
:::

:::esempio{titolo="Extreme radii and semimajor axis"}
A satellite ranges from the minimum distance $2R$ to the maximum $6R$. Its semimajor axis is $4R$. Its period agrees with a circular orbit of radius $4R$ around the same source. Instantaneous speeds differ: conserving $rv$ at the extremes gives a periapsis speed three times its apoapsis speed.

::grafico{uguale=1 assi=0 curve="4*cos(t),3.464102*sin(t),0,6.283185" punti="2,0,pieno,F;4,0,pieno,P;-4,0,pieno,A" linee="-4,0 4,0" xmin=-5 xmax=5 ymin=-4 ymax=4 titolo="The apsides P and A are respectively 2R and 6R from focus F"}
:::

:::esempio{titolo="Speed along an elliptical orbit"}
Let $r_p,r_a$ be the periapsis and apoapsis distances and $v_p,v_a$ the corresponding speeds. Conservation of angular momentum gives $v_a=\dfrac{r_p}{r_a}v_p$. Substituting this value into the equality of energies at the two ends gives
$$
\begin{aligned}
v_p^2&=\frac{2\mu r_a}{r_p(r_p+r_a)},\\[6pt]
\frac Em&=-\frac{\mu}{r_p+r_a}=-\frac{\mu}{2a}.
\end{aligned}
$$
The term $\dfrac Em$ is mechanical energy per unit mass. Since it remains constant, the speed at each distance satisfies $v^2=\mu\left(\dfrac2r-\dfrac1a\right)$. In the ellipse with $a=4R$, the speed varies between the two plotted endpoints. The central field speeds up the satellite on its inward leg and slows it down on its outward leg because the radial velocity component changes sign.

::grafico{curve="t,sqrt(24/t-3),2,6" punti="2,3,pieno,P;6,1,pieno,A" xmin=1.85 xmax=6.45 ymin=0 ymax=4 nomi="r/R,v/v_A" titolo="In the ellipse with semimajor axis 4R, v/v_A decreases from three to one between the nearest and farthest points"}
:::

## Orbital energy and escape

:::teorema{#fuga titolo="Bound systems and escape speed"}
In a circular orbit $K=\dfrac{GMm}{2r}$ and $U=-\dfrac{GMm}{r}$. Total mechanical energy is therefore $E=-\dfrac{GMm}{2r}$, negative relative to zero at infinity. The **escape speed** is the minimum speed for a body directed outwards to approach infinity with speed tending to zero, neglecting atmosphere, obstacles and further thrust. Setting $E=0$ gives
$$
v_{\mathrm{fuga}}=\sqrt{\frac{2GM}{r}}.
$$
At a given radius escape speed is $\sqrt2$ times circular speed, since it needs twice the circular kinetic energy. For positive initial energy, speed at infinity tends to a nonzero value. With negative energy the body cannot reach infinite distance under the model.

A geostationary orbit is circular, equatorial and prograde, with a period of one sidereal day. An inclined orbit of the same period is insufficient to stay above the same point on the surface. Inclination would cause its latitude as seen from the ground to vary.
:::

:::esempio{titolo="Energy to add to a satellite"}
A satellite in circular orbit has $K=4\,\mathrm{MJ}$ and $U=-8\,\mathrm{MJ}$. Its total is $-4\,\mathrm{MJ}$. An ideal thrust at that same distance must add at least $4\,\mathrm{MJ}$ of mechanical energy to reach the threshold $E=0$. Kinetic energy then goes from $4$ to $8\,\mathrm{MJ}$ and speed increases by a factor of $\sqrt2$.
:::

:::osservazione{titolo="The threshold and residual speed"}
The energy per unit mass is $\varepsilon=\dfrac12v^2-\dfrac{\mu}{r}$. The table describes the two-body model with nonzero angular momentum. It assumes that the body can continue without hitting the central surface or any other obstruction.

| $\varepsilon$ | Ideal trajectory | Behaviour |
| --- | --- | --- |
| Negative | Ellipse or circle | Bounded distance |
| Zero | Parabola | Escape with $v_\infty=0$ |
| Positive | Hyperbola | Escape with $v_\infty>0$ |

At a given starting position, $\varepsilon=0$ sets the minimum escape speed. At every finite distance the speed is still positive. As the body moves outwards, the potential energy approaches zero and kinetic energy decreases continuously. For $\varepsilon>0$, residual kinetic energy $m\varepsilon$ remains. With a different zero of potential energy, the threshold is the assigned value of $U(\infty)$, because the physical comparison uses the difference between initial and final energy.

::grafico{f="sqrt(2/x);sqrt(2+2/x)" punti="1,1.414214,pieno;1,2,pieno" asintoti="y=1.414214" xmin=1 xmax=10 ymin=0 ymax=2.35 nomi="r/R,v/v_c(R)" legenda="\sqrt{2/x};\sqrt{2+2/x}" titolo="At the escape threshold the speed tends to zero. With positive initial energy the speed tends to a nonzero limit."}
:::
