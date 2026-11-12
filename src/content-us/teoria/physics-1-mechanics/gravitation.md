---
titolo: Gravitation
sommario: How the law of universal gravitation gives the force between two masses, how the gravitational field and the acceleration $g$ change with position, and how energy, escape speed, circular orbits and Kepler's laws follow from the inverse-square law.
---

## The law of universal gravitation

:::teorema{#universal-gravitation titolo="Newton's law of universal gravitation"}
Let two particles of masses $m_1$ and $m_2$ be separated by the distance $r$. Then each one attracts the other along the line joining them with a force of magnitude
$$
F = G\,\frac{m_1 m_2}{r^2} ,
$$
where $G$ is a universal constant. The two forces form an action-reaction pair, therefore they have equal magnitudes and opposite senses, and the force on $m_1$ points from $m_1$ towards $m_2$.

This is an experimental law, established by comparing the acceleration of the Moon with the acceleration of a falling body, and confirmed since by direct measurement in the laboratory. It holds for *every* pair of masses, which is what the word universal records.

::grafico{assi=0 uguale=1 punti="0,0,pieno;6,0,pieno" vettori="0,0,2,0,F₁₂;6,0,4,0,F₂₁" segmenti="0,-0.9,6,-0.9;0,0,0,-0.9;6,0,6,-0.9" etichette="-0.15,0.5,m₁;5.9,0.5,m₂;2.9,-1.45,r" xmin=-1 xmax=7.2 ymin=-2 ymax=1.3 titolo="Each mass attracts the other along the line joining them, with forces of equal magnitude $F = G\,\dfrac{m_1 m_2}{r^2}$ and opposite senses"}
:::

:::definizione{#gravitational-constant titolo="The gravitational constant"}
The constant $G$ that appears in the law of universal gravitation has the measured value
$$
G = 6.674 \times 10^{-11}\,\mathrm{N\cdot m^2/kg^2} .
$$
Its unit follows from the law itself, since $F = G\,\dfrac{m_1m_2}{r^2}$ gives $G = \dfrac{F r^2}{m_1 m_2}$, hence $[G] = [M^{-1}L^{3}T^{-2}]$.

The constant is the same everywhere and for every pair of bodies, which distinguishes it from the acceleration $g$ at a planet's surface: $g$ depends on the mass and the radius of that planet, as the section on surface gravity shows.
:::

:::esempio{#how-weak-the-force-is titolo="How weak the force is"}
Two spheres of mass $m_1 = m_2 = 1.0\,\mathrm{kg}$ whose centers are $1.0\,\mathrm{m}$ apart attract each other with
$$
F = 6.674 \times 10^{-11}\,\mathrm{N\cdot m^2/kg^2} \cdot \frac{1.0\,\mathrm{kg} \cdot 1.0\,\mathrm{kg}}{(1.0\,\mathrm{m})^2}
= 6.7 \times 10^{-11}\,\mathrm{N} ,
$$
a force far smaller than the weight of a grain of sand. The attraction becomes appreciable only when one of the two masses is astronomical. For the Earth, with $M_E = 5.97 \times 10^{24}\,\mathrm{kg}$, and the Moon, with $M_M = 7.35 \times 10^{22}\,\mathrm{kg}$, separated by $d = 3.84 \times 10^{8}\,\mathrm{m}$,
$$
F = 6.674 \times 10^{-11} \cdot \frac{5.97 \times 10^{24} \cdot 7.35 \times 10^{22}}{(3.84 \times 10^{8})^2}\,\mathrm{N}
= 1.99 \times 10^{20}\,\mathrm{N} .
$$
:::

:::osservazione{#acceleration-of-the-moon titolo="The acceleration of the Moon"}
The same law accounts for the orbit of the Moon. Taking the Earth as the source, the acceleration of the Moon predicted by the law of universal gravitation is
$$
a = \frac{G M_E}{d^2} = \frac{3.984 \times 10^{14}\,\mathrm{m^3/s^2}}{(3.84 \times 10^{8}\,\mathrm{m})^2} = 2.70 \times 10^{-3}\,\mathrm{m/s^2} .
$$
The Moon completes one revolution in $T = 27.3\,\mathrm{d} = 2.36 \times 10^{6}\,\mathrm{s}$, hence its orbital speed is $v = \dfrac{2\pi d}{T} = 1.02 \times 10^{3}\,\mathrm{m/s}$ and its centripetal acceleration is
$$
a = \frac{v^2}{d} = 2.72 \times 10^{-3}\,\mathrm{m/s^2} .
$$
The two values agree, therefore the force that holds the Moon in orbit and the force that makes a stone fall are the same force.
:::

## Superposition and the gravitational field

:::teorema{#superposition titolo="Principle of superposition"}
Let a particle of mass $m$ be in the presence of the particles $m_1, m_2, \dots, m_n$. Then the resultant force on $m$ is the vector sum of the forces that each of the other particles would exert on it alone:
$$
\vec{F} = \sum_{k=1}^{n} \vec{F}_k .
$$
The presence of a third body changes neither the magnitude nor the direction of the force between the first two, which is an experimental fact and not a consequence of the law of universal gravitation.

The principle reduces every gravitational problem to a sum of two-body forces, and the sum is carried out in components, one axis at a time.

::grafico{assi=0 uguale=1 punti="0,0,pieno;4,0,pieno;0,3,pieno" vettori="0,0,2.2,0,F₂;0,0,0,1.5,F₃;0,0,2.2,1.5" segmenti="2.2,0,2.2,1.5;0,1.5,2.2,1.5" etichette="-0.55,-0.35,m;4.05,-0.35,m₂;-0.6,3.05,m₃;2.35,1.78,F" xmin=-1.2 xmax=4.8 ymin=-1 ymax=3.6 titolo="The force on $m$ is the vector sum of the attraction of $m_2$ and the attraction of $m_3$"}
:::

:::definizione{#gravitational-field titolo="Gravitational field"}
The **gravitational field** at a point is the force per unit mass that a particle placed at that point would experience:
$$
\vec{g} = \frac{\vec{F}}{m} ,
$$
a vector measured in $\mathrm{N/kg} = \mathrm{m/s^2}$. Since the force on a particle is $\vec{F} = m\vec{g}$ and Newton's second law gives $\vec{F} = m\vec{a}$, the field at a point equals the acceleration that a particle released at rest there would have, independently of its mass.

A single particle of mass $M$ produces at distance $r$ from itself a field of magnitude
$$
g = \frac{GM}{r^2} ,
$$
directed towards $M$. The field describes the source alone, so it can be computed once and then used for any test mass placed in it. Superposition applies to fields as well, since dividing a sum of forces by $m$ gives the sum of the corresponding fields.
:::

:::esempio{#field-between-two-masses titolo="A point where the field vanishes"}
Two particles of masses $M$ and $4M$ are held at the distance $d$. On the segment joining them, at the distance $x$ from $M$, the two fields have opposite senses, hence their magnitudes are equal when
$$
\frac{GM}{x^2} = \frac{G \cdot 4M}{(d-x)^2}
\quad\Longrightarrow\quad
(d-x)^2 = 4x^2
\quad\Longrightarrow\quad
d - x = 2x ,
$$
where the positive root is taken because $0 < x < d$. It follows that $x = \dfrac{d}{3}$, therefore the resultant field vanishes at one third of the distance, on the side of the smaller mass. A particle released at that point stays at rest, while a particle released anywhere else accelerates.
:::

## Spherical bodies and the variation of $g$

A planet is not a particle, so the law of universal gravitation does not apply to it directly. The shell theorem is what allows a planet to be treated as a particle anyway.

:::teorema{#shell-theorem titolo="Shell theorem"}
Let a body have spherical symmetry, that is, let its density depend only on the distance from its center. Then:

- at every point outside the body the field equals the field of a particle of the same total mass placed at the center;
- inside a uniform spherical shell the field is zero.

Both statements follow by adding the contributions of all the mass elements of the body with the principle of superposition, an integration that Newton carried out and that the Calculus course treats as an application of the integral in spherical coordinates.

The theorem is what gives meaning to the distance $r$ in every formula of this chapter, since for a planet and a satellite $r$ is measured from center to center and not from the surface.
:::

:::definizione{#surface-gravity titolo="Surface gravity"}
Let a planet of mass $M$ have spherical symmetry and radius $R$. Then the field at its surface has magnitude
$$
g_0 = \frac{GM}{R^2} ,
$$
and the weight of a body of mass $m$ resting on the surface is $P = m g_0$.

For the Earth, with $M_E = 5.97 \times 10^{24}\,\mathrm{kg}$ and $R_E = 6.37 \times 10^{6}\,\mathrm{m}$,
$$
g_0 = \frac{6.674 \times 10^{-11} \cdot 5.97 \times 10^{24}}{(6.37 \times 10^{6})^2}\,\mathrm{m/s^2} = 9.82\,\mathrm{m/s^2} ,
$$
which is the value used in every chapter on dynamics. For the Moon, with $M_M = 7.35 \times 10^{22}\,\mathrm{kg}$ and $R_M = 1.74 \times 10^{6}\,\mathrm{m}$, the same formula gives $g_0 = 1.62\,\mathrm{m/s^2}$, about one sixth of the terrestrial value. Measuring $g_0$ and $R$ therefore determines the mass of a planet.
:::

::::teorema{#g-with-altitude titolo="Variation of $g$ with altitude"}
Let a planet of mass $M$, radius $R$ and surface gravity $g_0$ have spherical symmetry. Then at the altitude $h$ above its surface the field has magnitude
$$
g(h) = \frac{GM}{(R+h)^2} = \frac{g_0}{\left(1 + \dfrac{h}{R}\right)^{2}} .
$$

:::dimostrazione
By the shell theorem the planet acts as a particle of mass $M$ at its center, and a point at altitude $h$ is at the distance $r = R + h$ from the center, hence $g = \dfrac{GM}{(R+h)^2}$. Dividing numerator and denominator by $R^2$ and using $g_0 = \dfrac{GM}{R^2}$ gives
$$
g = \frac{GM}{R^2}\cdot\frac{R^2}{(R+h)^2} = \frac{g_0}{\left(1 + \dfrac{h}{R}\right)^{2}} ,
$$
which is the thesis.
:::

The formula shows how slowly $g$ decreases over the altitudes reached by aircraft and satellites. At $h = 400\,\mathrm{km}$, the altitude of the International Space Station, $\dfrac{h}{R_E} = 0.0628$ and $g = 8.69\,\mathrm{m/s^2}$, which is $88.5\%$ of the surface value. Treating $g$ as constant is therefore legitimate in the problems of projectile motion, where $h$ is at most a few hundred meters.
::::

::::teorema{#inside-a-uniform-sphere titolo="Field inside a uniform sphere"}
Let a sphere of mass $M$ and radius $R$ have uniform density. Then at the distance $r \le R$ from its center the field has magnitude
$$
g(r) = \frac{GM}{R^3}\,r ,
$$
hence it grows in direct proportion to $r$ and vanishes at the center.

:::dimostrazione
Split the sphere into the inner sphere of radius $r$ and the shells of radius between $r$ and $R$. The point considered lies inside each of those shells, therefore by the shell theorem each shell contributes nothing, and the field is that of the inner sphere alone. The density is uniform and equal to $\rho = \dfrac{M}{\dfrac{4}{3}\pi R^3}$, hence the mass of the inner sphere is
$$
M(r) = \rho \cdot \frac{4}{3}\pi r^3 = M\,\frac{r^3}{R^3} .
$$
The inner sphere has spherical symmetry and the point is outside it, therefore by the shell theorem again
$$
g(r) = \frac{G\,M(r)}{r^2} = \frac{GM}{R^3}\,r ,
$$
which is the thesis.
:::

The two theorems together give the field at every distance from the center of a uniform planet, a result used in the chapter on oscillations, since a body dropped into a tunnel through the center is subject to a force proportional to the displacement and performs simple harmonic motion.

::grafico{curve="t,t,0,1;t,1/t^2,1,4" punti="1,1,pieno" segmenti="1,0,1,1;0,1,1,1" nomi="r,g" legenda=0 etichette="1.08,0.2,R;0.13,1.13,g₀;2.45,0.33,∝ r⁻²;0.32,0.66,∝ r" xmin=-0.35 xmax=4.4 ymin=-0.25 ymax=1.45 titolo="Field of a uniform sphere: it grows in proportion to $r$ inside and falls as $\dfrac{1}{r^2}$ outside, with the maximum $g_0 = \dfrac{GM}{R^2}$ at the surface"}
::::

:::osservazione{#g-and-rotation titolo="The measured value of $g$"}
Two effects make the measured value of $g$ at the surface depend on latitude. The Earth is not exactly spherical, since its polar radius is about $21\,\mathrm{km}$ smaller than its equatorial radius, and a frame fixed to the ground is not inertial, since it rotates. At the equator a body at rest on the ground travels a circle of radius $R_E$ in one day, hence it needs the centripetal acceleration $\omega^2 R_E = 3.4 \times 10^{-2}\,\mathrm{m/s^2}$, which the balance of weight and normal force must supply. The reading of a scale is reduced by that amount, and the measured value ranges from $9.78\,\mathrm{m/s^2}$ at the equator to $9.83\,\mathrm{m/s^2}$ at the poles. The conventional value $9.81\,\mathrm{m/s^2}$ corresponds to middle latitudes.
:::

## Gravitational potential energy

:::richiamo{titolo="Work of a variable force"}
A force whose magnitude changes along the path does the work
$$
W = \int_{A}^{B} \vec{F} \cdot d\vec{s} ,
$$
and a force is conservative when this work depends only on the endpoints $A$ and $B$. For a conservative force the potential energy $U$ is defined by $W = U_A - U_B$, as the chapter on potential energy and conservation of energy establishes.
:::

::::teorema{#gravitational-potential-energy titolo="Gravitational potential energy of two masses"}
Let a particle of mass $m$ move in the field of a particle of mass $M$ held fixed. Then the gravitational force is conservative and, with the potential energy taken to be zero at infinite distance, the potential energy at the distance $r$ is
$$
U(r) = -\,\frac{GMm}{r} .
$$

:::dimostrazione
Take the origin at $M$ and let the particle move from the distance $r_A$ to the distance $r_B$ along any path. The force is $\vec{F} = -\dfrac{GMm}{r^2}\hat{r}$, where $\hat{r}$ points away from $M$, and the displacement satisfies $\hat{r} \cdot d\vec{s} = dr$, since the component of the displacement along $\hat{r}$ is exactly the change in distance. Hence
$$
W = \int_{r_A}^{r_B} \left(-\frac{GMm}{r^2}\right) dr
= \left[\frac{GMm}{r}\right]_{r_A}^{r_B}
= \frac{GMm}{r_B} - \frac{GMm}{r_A} .
$$
The work depends on $r_A$ and $r_B$ alone, therefore the force is conservative. Comparing with $W = U_A - U_B$ gives $U_A = -\dfrac{GMm}{r_A}$ and $U_B = -\dfrac{GMm}{r_B}$ up to one additive constant, and the choice $U \to 0$ as $r \to \infty$ fixes that constant to zero, which is the thesis.
:::

The potential energy is negative at every finite distance and increases towards zero as $r$ grows, therefore separating two masses requires positive work from an external agent. Every energy balance in this chapter uses this expression together with the kinetic energy.

::grafico{curve="t,-1/t,0.22,5" nomi="r,U" legenda=0 etichette="3.85,-0.62,U → 0" xmin=-0.4 xmax=5.4 ymin=-4.6 ymax=0.8 titolo="The potential energy $U(r) = -\dfrac{GMm}{r}$ is negative, increases with $r$ and tends to zero at large distances"}
::::

:::osservazione{#recovering-mgh titolo="Recovering $U = mgh$ near the surface"}
Near the surface of a planet the expression $-\dfrac{GMm}{r}$ reduces to the familiar one. Let $h \ll R$ be the altitude, so that $r = R + h$. Then
$$
U = -\frac{GMm}{R+h} = -\frac{GMm}{R}\cdot\frac{1}{1 + \dfrac{h}{R}}
\approx -\frac{GMm}{R}\left(1 - \frac{h}{R}\right)
= -\frac{GMm}{R} + \frac{GMm}{R^2}\,h ,
$$
where the approximation $\dfrac{1}{1+x} \approx 1 - x$ for small $x$ has been used. The first term is a constant, and the second is $m g_0 h$ because $g_0 = \dfrac{GM}{R^2}$. Since a potential energy is defined up to an additive constant, the two expressions describe the same force, and $U = mgh$ is the form to use whenever the altitude is small compared with the radius of the planet.
:::

:::definizione{#gravitational-potential titolo="Gravitational potential"}
The **gravitational potential** at a point is the potential energy per unit mass of a particle placed there:
$$
V = \frac{U}{m} = -\,\frac{GM}{r} ,
$$
measured in $\mathrm{J/kg}$. The potential describes the source alone, as the field does, and it is a scalar, therefore the potential of several masses is obtained by adding numbers rather than vectors. Once $V$ is known, the energy of any particle placed in the field is $U = mV$.
:::

:::attenzione
The potential energy belongs to the pair of masses and not to one of them. For three masses $m_1$, $m_2$, $m_3$ the energy of the system is the sum over the pairs,
$$
U = -\,G\left(\frac{m_1m_2}{r_{12}} + \frac{m_1m_3}{r_{13}} + \frac{m_2m_3}{r_{23}}\right) ,
$$
with three terms and not three products of a mass by a potential, which would count each pair twice.
:::

## Escape speed

::::teorema{#escape-speed titolo="Escape speed"}
Let a body be launched from the surface of a planet of mass $M$ and radius $R$, and let air resistance and the attraction of every other body be negligible. Then the body moves arbitrarily far from the planet if and only if its initial speed satisfies
$$
v \ge v_f = \sqrt{\frac{2GM}{R}} = \sqrt{2 g_0 R} ,
$$
and $v_f$ is called the **escape speed**.

:::dimostrazione
Gravitation is the only force that does work, therefore the mechanical energy is conserved:
$$
\frac{1}{2}mv^2 - \frac{GMm}{R} = \frac{1}{2}mv_\infty^2 - \frac{GMm}{r_\infty} .
$$
The body reaches arbitrarily large distances exactly when the right-hand side stays non-negative in the limit $r_\infty \to \infty$, since the kinetic energy cannot be negative and the potential energy tends to zero. Hence the condition is
$$
\frac{1}{2}mv^2 - \frac{GMm}{R} \ge 0
\quad\Longleftrightarrow\quad
v^2 \ge \frac{2GM}{R} ,
$$
and taking the positive root gives the thesis. Substituting $GM = g_0R^2$ turns $\sqrt{\dfrac{2GM}{R}}$ into $\sqrt{2g_0R}$.
:::

The escape speed depends on the planet alone, not on the mass of the body, because $m$ cancels in the energy balance. For the Earth
$$
v_f = \sqrt{\frac{2 \cdot 6.674 \times 10^{-11} \cdot 5.97 \times 10^{24}}{6.37 \times 10^{6}}}\,\mathrm{m/s} = 1.12 \times 10^{4}\,\mathrm{m/s} = 11.2\,\mathrm{km/s} ,
$$
while for the Moon the same formula gives $2.37\,\mathrm{km/s}$. The small escape speed of the Moon is the reason it has retained no atmosphere, since at the temperature of its surface the fastest molecules of a gas exceed that speed and leave.
::::

:::definizione{#bound-and-unbound titolo="Bound and unbound motion"}
Let $E = \dfrac{1}{2}mv^2 - \dfrac{GMm}{r}$ be the mechanical energy of a body in the field of the mass $M$. Three cases occur:

$$
\begin{cases}
E < 0 & \text{bound motion: } r \le r_{\max} = -\dfrac{GMm}{E} \\[6pt]
E = 0 & \text{the body reaches infinity with zero speed} \\[6pt]
E > 0 & \text{the body reaches infinity with } v_\infty = \sqrt{\dfrac{2E}{m}}
\end{cases}
$$

The value $r_{\max}$ is obtained by setting the kinetic energy to zero in the energy balance, since the body stops moving outward where $U(r) = E$. A negative energy therefore confines the body to a bounded region, and the orbits of planets and satellites belong to this case.

::grafico{curve="t,-1/t,0.2,5" asintoti="y=-0.5;y=0.4" punti="2,-0.5,pieno" segmenti="2,-0.5,2,0" nomi="r,U" legenda=0 etichette="4.3,0.58,E > 0;4.3,-0.78,E < 0;2.12,0.22,rₘₐₓ" xmin=-0.4 xmax=5.4 ymin=-3.2 ymax=1 titolo="With $E < 0$ the body turns back at the distance $r_{\max}$ where $U(r) = E$; with $E > 0$ it reaches arbitrarily large distances with a residual speed"}
:::

## Circular orbits and satellites

::::teorema{#circular-orbit titolo="Speed and period of a circular orbit"}
Let a body of mass $m$ travel a circular orbit of radius $r$ around a body of mass $M \gg m$ held fixed, and let gravitation be the only force acting. Then the speed and the period of the orbit are
$$
v = \sqrt{\frac{GM}{r}} ,
\qquad
T = 2\pi\sqrt{\frac{r^3}{GM}} ,
$$
and both are determined by $r$ alone, independently of $m$.

:::dimostrazione
On a circular orbit the speed is constant and the acceleration is centripetal of magnitude $\dfrac{v^2}{r}$. Gravitation is the only force, hence it supplies that acceleration, and Newton's second law along the radius gives
$$
\frac{GMm}{r^2} = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
v^2 = \frac{GM}{r} .
$$
The mass $m$ cancels, therefore the speed depends on $r$ alone. The period is the time for one revolution, so $T = \dfrac{2\pi r}{v}$, and substituting $v$ gives
$$
T = 2\pi r \sqrt{\frac{r}{GM}} = 2\pi\sqrt{\frac{r^3}{GM}} ,
$$
which is the thesis.
:::

The two formulas answer every question about a satellite from its radius alone. A satellite at $h = 400\,\mathrm{km}$ has $r = 6.77 \times 10^{6}\,\mathrm{m}$, hence $v = 7.67\,\mathrm{km/s}$ and $T = 5.54 \times 10^{3}\,\mathrm{s} = 92.4\,\mathrm{min}$. A larger orbit is slower in both senses, since $v$ decreases and $T$ increases with $r$.

::grafico{assi=0 uguale=1 curve="3*cos(t),3*sin(t),0,6.29" punti="0,0,pieno;2.121,2.121,pieno" vettori="2.121,2.121,1.06,3.18,v;2.121,2.121,0.7,0.7" segmenti="0,0,-2.121,-2.121" etichette="0.1,-0.6,M;3.1,2.1,m;-1.45,-0.95,r;1.78,1.12,F" xmin=-3.8 xmax=4.2 ymin=-3.8 ymax=4 titolo="On a circular orbit the attraction $F = G\,\dfrac{Mm}{r^2}$ is directed towards the center and the velocity is tangent to the orbit"}
::::

:::esempio{#geostationary titolo="The geostationary orbit"}
A satellite is geostationary when it stays above the same point of the equator, which requires a circular equatorial orbit with the period of one sidereal day, $T = 8.616 \times 10^{4}\,\mathrm{s}$. Solving $T = 2\pi\sqrt{\dfrac{r^3}{GM_E}}$ for $r$,
$$
r = \left(\frac{G M_E T^2}{4\pi^2}\right)^{\frac{1}{3}}
= \left(\frac{3.984 \times 10^{14} \cdot (8.616 \times 10^{4})^2}{4\pi^2}\right)^{\frac{1}{3}}\,\mathrm{m}
= 4.22 \times 10^{7}\,\mathrm{m} .
$$
The altitude is therefore $r - R_E = 3.58 \times 10^{7}\,\mathrm{m}$, about $35\,800\,\mathrm{km}$, and the orbital speed is $3.07\,\mathrm{km/s}$. The radius is fixed by the period, hence every geostationary satellite occupies the same circle.
:::

:::osservazione{#weightlessness titolo="Apparent weightlessness in orbit"}
An astronaut in a satellite is not far from the Earth and gravitation acts on them with almost its surface value, since at $400\,\mathrm{km}$ the field is $8.69\,\mathrm{m/s^2}$. The astronaut and the satellite have the same acceleration, because both follow the same orbit and the orbital acceleration does not depend on mass, therefore the floor exerts no normal force on the astronaut. A scale in the satellite reads zero, and this is the sense in which the condition is called weightlessness.
:::

::::teorema{#orbital-energy titolo="Energy of a circular orbit"}
Let a body of mass $m$ travel a circular orbit of radius $r$ around a fixed mass $M$. Then its kinetic energy, potential energy and mechanical energy are
$$
K = \frac{GMm}{2r} ,
\qquad
U = -\frac{GMm}{r} ,
\qquad
E = K + U = -\frac{GMm}{2r} = -K .
$$

:::dimostrazione
The speed on the orbit satisfies $v^2 = \dfrac{GM}{r}$, hence
$$
K = \frac{1}{2}mv^2 = \frac{GMm}{2r} .
$$
The potential energy at the distance $r$ is $U = -\dfrac{GMm}{r}$, therefore
$$
E = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r} ,
$$
which is the thesis, and comparing with $K$ gives $E = -K$ and $U = 2E$.
:::

The energy is negative, in agreement with the fact that a circular orbit is a bound motion. A larger orbit has a larger energy, since $-\dfrac{GMm}{2r}$ increases towards zero as $r$ grows, so raising a satellite requires positive work even though the satellite ends up moving more slowly. For an elliptical orbit of semi-major axis $a$ the same expression holds with $a$ in place of $r$, therefore $E = -\dfrac{GMm}{2a}$, as the integration of the equation of motion shows.
::::

:::esempio{#raising-an-orbit titolo="Raising a satellite"}
A satellite of mass $m = 500\,\mathrm{kg}$ is to be moved from the circular orbit at $h_1 = 400\,\mathrm{km}$ to the circular orbit at $h_2 = 1000\,\mathrm{km}$, that is, from $r_1 = 6.77 \times 10^{6}\,\mathrm{m}$ to $r_2 = 7.37 \times 10^{6}\,\mathrm{m}$. The work of the engines equals the change in mechanical energy, hence
$$
W = E_2 - E_1 = \frac{GM_Em}{2}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)
= \frac{3.984 \times 10^{14} \cdot 500}{2}\left(\frac{1}{6.77 \times 10^{6}} - \frac{1}{7.37 \times 10^{6}}\right)\,\mathrm{J}
= 1.20 \times 10^{9}\,\mathrm{J} .
$$
The speed on the higher orbit is $7.35\,\mathrm{km/s}$ against $7.67\,\mathrm{km/s}$ on the lower one, therefore the kinetic energy decreases while the mechanical energy increases, because the potential energy increases by twice as much as the kinetic energy decreases.
:::

## Kepler's laws

:::teorema{#keplers-first-law titolo="Kepler's first law"}
Every planet travels an ellipse with the Sun at one focus. The same statement holds for a satellite around a planet, with the planet at one focus.

The law was obtained from the observations of planetary positions collected by Tycho Brahe, before any dynamical explanation was available. That the inverse-square law forces the orbit to be a conic section is proved by integrating the equation of motion in polar coordinates, a calculation that belongs to a course in analytical mechanics. A circle is the particular ellipse with the two foci coincident, hence the circular orbits of the preceding section are a special case.

::grafico{assi=0 uguale=1 curve="3*cos(t),2.236*sin(t),0,6.29" punti="2,0,pieno;-2,0,vuoto;1.621,1.882,pieno" vettori="2,0,1.621,1.882,r" segmenti="-3,0,3,0" etichette="1.95,-0.5,S;-2.2,-0.5,F′;1.65,2.05,P" xmin=-3.9 xmax=3.9 ymin=-2.9 ymax=2.9 titolo="The planet $P$ travels an ellipse of semi-major axis $a$ with the Sun $S$ at one focus; the other focus $F'$ is empty"}
:::

:::richiamo{titolo="Conservation of angular momentum"}
The angular momentum of a particle about a fixed point $O$ is $\vec{L} = \vec{r} \times m\vec{v}$, and it satisfies $\dfrac{d\vec{L}}{dt} = \vec{r} \times \vec{F}$. Hence $\vec{L}$ is constant whenever the force is parallel to $\vec{r}$, as the chapter on angular momentum and rolling establishes.
:::

::::teorema{#keplers-second-law titolo="Kepler's second law"}
The segment joining the Sun to a planet sweeps equal areas in equal times, that is, the quantity $\dfrac{dA}{dt}$ is constant along the orbit.

:::dimostrazione
Take the Sun as the origin. The gravitational force on the planet is directed along $\vec{r}$, therefore $\vec{r} \times \vec{F} = \vec{0}$ and the angular momentum $\vec{L} = \vec{r} \times m\vec{v}$ is constant. In the time $dt$ the planet undergoes the displacement $d\vec{r} = \vec{v}\,dt$, and the area swept is the area of the triangle with sides $\vec{r}$ and $d\vec{r}$, which is half the area of the parallelogram they span:
$$
dA = \frac{1}{2}\,|\vec{r} \times d\vec{r}| = \frac{1}{2}\,|\vec{r} \times \vec{v}|\,dt .
$$
Dividing by $dt$ and using $|\vec{L}| = m\,|\vec{r} \times \vec{v}|$ gives
$$
\frac{dA}{dt} = \frac{|\vec{L}|}{2m} ,
$$
and the right-hand side is constant because $\vec{L}$ is constant and $m$ does not change, which is the thesis.
:::

The law relates the speed to the distance along one orbit. The area swept near the Sun and the area swept far from it are equal in equal times, hence the planet moves faster at perihelion than at aphelion, and $r_p v_p = r_a v_a$ holds at the two points where the velocity is perpendicular to $\vec{r}$.

::grafico{assi=0 uguale=1 curve="3*cos(t),2.236*sin(t),0,6.29" poligoni="2,0 2.476,-1.263 2.701,-0.973 2.866,-0.661 2.966,-0.334 3,0 2.966,0.334 2.866,0.661 2.701,0.973 2.476,1.263;2,0 -2.973,0.299 -2.988,0.200 -2.997,0.100 -3,0 -2.997,-0.100 -2.988,-0.200 -2.973,-0.299" punti="2,0,pieno" etichette="1.8,-0.55,S" xmin=-3.9 xmax=3.9 ymin=-2.9 ymax=2.9 titolo="The two shaded regions have equal areas, therefore the planet covers the long arc near the Sun and the short arc far from it in the same time"}
::::

::::teorema{#keplers-third-law titolo="Kepler's third law"}
Let several bodies orbit the same central mass $M$. Then the square of the period is proportional to the cube of the semi-major axis, with a constant that depends on $M$ alone:
$$
\frac{T^2}{a^3} = \frac{4\pi^2}{GM} .
$$

:::dimostrazione
The law is proved here for circular orbits, where $a = r$. The period of a circular orbit of radius $r$ satisfies $T = 2\pi\sqrt{\dfrac{r^3}{GM}}$, hence squaring both sides gives
$$
T^2 = 4\pi^2\,\frac{r^3}{GM}
\quad\Longrightarrow\quad
\frac{T^2}{r^3} = \frac{4\pi^2}{GM} .
$$
The right-hand side contains neither $r$ nor the mass of the orbiting body, therefore the ratio is the same for every circular orbit around $M$, which is the thesis. For an elliptical orbit the same relation holds with $a$ in place of $r$, as the integration of the equation of motion shows.
:::

The law determines the mass of a central body from the orbit of one of its satellites, which is how the masses of the planets are measured. Io orbits Jupiter with $r = 4.22 \times 10^{8}\,\mathrm{m}$ and $T = 1.77\,\mathrm{d} = 1.529 \times 10^{5}\,\mathrm{s}$, therefore
$$
M = \frac{4\pi^2 r^3}{G T^2}
= \frac{4\pi^2 (4.22 \times 10^{8})^3}{6.674 \times 10^{-11} \cdot (1.529 \times 10^{5})^2}\,\mathrm{kg}
= 1.90 \times 10^{27}\,\mathrm{kg} ,
$$
the mass of Jupiter.
::::

:::osservazione{#kepler-in-astronomical-units titolo="The third law in astronomical units"}
For the planets of the solar system the law takes a form with no constants. Measuring $a$ in astronomical units, where $1\,\mathrm{AU} = 1.496 \times 10^{11}\,\mathrm{m}$ is the semi-major axis of the Earth's orbit, and $T$ in years, the Earth gives $\dfrac{T^2}{a^3} = 1$, hence
$$
T^2 = a^3
$$
for every planet, with $T$ in years and $a$ in astronomical units. Mars has $a = 1.524\,\mathrm{AU}$, therefore $T = 1.524^{\frac{3}{2}}\,\mathrm{yr} = 1.88\,\mathrm{yr}$, that is $687\,\mathrm{d}$.
:::

:::attenzione
The third law holds only for bodies orbiting the *same* central mass. The ratio $\dfrac{T^2}{a^3}$ for the Moon around the Earth is not the ratio for the planets around the Sun, since the two constants differ by the factor $\dfrac{M_S}{M_E} \approx 3.3 \times 10^{5}$. Comparing the period of the Moon with the period of a planet through $T^2 = a^3$ therefore gives a result wrong by several orders of magnitude.
:::
