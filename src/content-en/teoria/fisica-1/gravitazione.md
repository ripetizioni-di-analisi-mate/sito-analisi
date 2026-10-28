---
titolo: Gravitation
sommario: The law of universal gravitation, the gravitational field and potential energy, the variation of g with altitude, circular orbits of satellites, escape velocity and Kepler's laws derived from dynamics.
---

## Law of universal gravitation

:::teorema{#legge-di-gravitazione-universale titolo="Law of universal gravitation"}
Two point masses $m_1$ and $m_2$, at distance $r$ from each other, attract each other with forces directed along the line joining them, of magnitude
$$
F = G\,\frac{m_1 m_2}{r^2} ,
$$
where $G = 6.67 \cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}$ is the **universal gravitational constant**. In vector form, with $\hat{u}_r$ the unit vector pointing from $m_1$ toward $m_2$, the force that $m_1$ exerts on $m_2$ is
$$
\vec{F}_{12} = -\,G\,\frac{m_1 m_2}{r^2}\,\hat{u}_r ,
$$
and the force that $m_2$ exerts on $m_1$ is $\vec{F}_{21} = -\vec{F}_{12}$, in agreement with Newton's third law.

It is an experimental law, formulated by Newton and verified in the laboratory by Cavendish with the torsion balance, with which the value of $G$ was measured for the first time. It is used to compute the force between two bodies when their sizes are small compared with their distance, and, by superposition, the force between extended bodies. Two people of $70\,\mathrm{kg}$ and $60\,\mathrm{kg}$ at a distance of $1.0\,\mathrm{m}$ attract each other with a force of $6.67 \cdot 10^{-11} \cdot \dfrac{70 \cdot 60}{1.0^2}\,\mathrm{N} = 2.8 \cdot 10^{-7}\,\mathrm{N}$, less than a billionth of the weight of each; gravitation becomes relevant *only* when at least one of the masses is astronomical.
:::

:::osservazione{#accelerazione-della-luna titolo="Acceleration of the Moon"}
The $\dfrac{1}{r^2}$ dependence can be checked with the motion of the Moon. The Moon travels around the Earth on a nearly circular orbit of radius $d = 3.84 \cdot 10^8\,\mathrm{m}$ in $T = 27.3$ days, so its centripetal acceleration is
$$
a_L = \frac{4\pi^2 d}{T^2} = 2.72 \cdot 10^{-3}\,\mathrm{m/s^2} .
$$
The Earth-Moon distance is about $60$ times the Earth's radius $R_T = 6.37 \cdot 10^6\,\mathrm{m}$; if the Earth's attraction decreases as $\dfrac{1}{r^2}$, at the distance of the Moon the gravitational acceleration is $g_0 \left( \dfrac{R_T}{d} \right)^2 = 2.70 \cdot 10^{-3}\,\mathrm{m/s^2}$, where $g_0 = 9.81\,\mathrm{m/s^2}$ is the value at the Earth's surface. The two values differ by about $1\%$, therefore the same force that makes bodies fall on the Earth keeps the Moon in orbit.
:::

:::teorema{#principio-di-sovrapposizione titolo="Superposition principle"}
If a point mass $m$ interacts with the point masses $m_1, \dots, m_n$, the total gravitational force on $m$ is the vector sum of the forces that each mass would exert alone:
$$
\vec{F} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n .
$$
It is an experimental fact: the presence of the other masses does not change the force exerted by each one. The principle makes it possible to compute the force due to several bodies and, by dividing an extended body into small parts, the force due to an extended body. Forces add as vectors, so in a planar problem the components $F_x$ and $F_y$ are added separately.

::grafico{vettori="0,0,1.94,0.485,F₁;0,0,0.6,1.8,F₂;0,0,2.54,2.29,F" segmenti="1.94,0.485,2.54,2.29;0.6,1.8,2.54,2.29" punti="0,0,pieno,m;4,1,pieno,m₁;1,3,pieno,m₂" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=3.4 uguale=1 titolo="The total force on $m$ is the vector sum of the forces $\vec{F}_1$ and $\vec{F}_2$, directed toward $m_1$ and toward $m_2$"}

:::

:::esempio{titolo="Forces that cancel"}
A body of mass $m = 1.0\,\mathrm{kg}$ is at the origin of an $x$ axis; a mass of $3.0\,\mathrm{kg}$ is at $x = 0.30\,\mathrm{m}$ and one of $12\,\mathrm{kg}$ at $x = -0.60\,\mathrm{m}$. The two forces have magnitudes
$$
F_1 = G\,\frac{3.0 \cdot 1.0}{0.30^2}\,\mathrm{N} = 2.2 \cdot 10^{-9}\,\mathrm{N},
\qquad
F_2 = G\,\frac{12 \cdot 1.0}{0.60^2}\,\mathrm{N} = 2.2 \cdot 10^{-9}\,\mathrm{N},
$$
since $\dfrac{3.0}{0.09} = \dfrac{12}{0.36}$, and opposite directions, so the total force on the body is **zero**. The larger mass, being at twice the distance, exerts the same force as the smaller mass.
:::

## Gravitational field

:::definizione{#campo-gravitazionale titolo="Gravitational field"}
Let $\vec{F}$ be the gravitational force that a system of masses exerts on a point mass $m$ placed at $P$. The **gravitational field** of the system at the point $P$ is
$$
\vec{g}(P) = \frac{\vec{F}}{m} .
$$
The field does not depend on $m$, because the force is proportional to $m$; it depends only on the masses that generate it and on the position of $P$. It is measured in $\mathrm{N/kg}$, a unit that coincides with $\mathrm{m/s^2}$. Once the field is known, the force on any mass placed at $P$ is $\vec{F} = m\,\vec{g}(P)$, and if it is the only force acting, the acceleration of the mass is exactly $\vec{g}(P)$.
:::

:::osservazione{#campo-di-una-massa-puntiforme titolo="Field of a point mass"}
From the law of gravitation, the field generated by a point mass $M$ at distance $r$ is
$$
\vec{g} = -\,\frac{GM}{r^2}\,\hat{u}_r , \qquad g = \frac{GM}{r^2} ,
$$
where $\hat{u}_r$ is the unit vector pointing from $M$ toward the point considered. The field is directed toward the mass that generates it and its magnitude is reduced to one quarter when the distance doubles. By the **superposition principle** the field of several masses is the vector sum of the fields of each, $\vec{g} = \vec{g}_1 + \dots + \vec{g}_n$.

::grafico{curve="0.4*cos(t),0.4*sin(t),0,6.29" vettori="1.478,0.612,0.554,0.230;0.612,1.478,0.230,0.554;-0.612,1.478,-0.230,0.554;-1.478,0.612,-0.554,0.230;-1.478,-0.612,-0.554,-0.230;-0.612,-1.478,-0.230,-0.554;0.612,-1.478,0.230,-0.554;1.478,-0.612,0.554,-0.230;2.956,1.225,2.725,1.129;1.225,2.956,1.129,2.725;-1.225,2.956,-1.129,2.725;-2.956,1.225,-2.725,1.129;-2.956,-1.225,-2.725,-1.129;-1.225,-2.956,-1.129,-2.725;1.225,-2.956,1.129,-2.725;2.956,-1.225,2.725,-1.129" etichette="0.35,0.4,M" xmin=-3.6 xmax=3.6 ymin=-3.6 ymax=3.6 uguale=1 titolo="The field of a mass $M$ points toward $M$; at twice the distance the magnitude is $\dfrac{1}{4}$, as the length of the arrows shows"}

:::

:::esempio{titolo="Point of zero field between the Earth and the Moon"}
With $M_T = 5.97 \cdot 10^{24}\,\mathrm{kg}$, $M_L = 7.35 \cdot 10^{22}\,\mathrm{kg}$ and distance $d = 3.84 \cdot 10^8\,\mathrm{m}$ between the centers, we look for the point of the Earth-Moon segment, at distance $x$ from the Earth, where the two fields have the same magnitude. Since the two fields have opposite directions, the total field is zero if
$$
\frac{G M_T}{x^2} = \frac{G M_L}{(d - x)^2}
\quad\Longleftrightarrow\quad
\frac{x}{d - x} = \sqrt{\frac{M_T}{M_L}} = 9.01 ,
$$
where the square root of two positive quantities has been taken. We obtain $x = \dfrac{9.01}{10.01}\,d = 3.46 \cdot 10^8\,\mathrm{m}$, that is, the point lies at about $90\%$ of the distance, close to the Moon.
:::

## Gravitational potential energy

:::richiamo{titolo="Conservative force and potential energy"}
A force is conservative if its work between two points $A$ and $B$ depends only on $A$ and $B$. In that case there exists a function $U$, the potential energy, such that the work is $L_{A \to B} = U(A) - U(B)$, defined up to a constant (see the topic on work and energy).
:::

:::richiamo{titolo="Integral of a power"}
For $0 < a < b$ we have $\displaystyle\int_a^b \frac{dx}{x^2} = \frac{1}{a} - \frac{1}{b}$, because $-\dfrac{1}{x}$ is an antiderivative of $\dfrac{1}{x^2}$ (see the topic on integrals in Mathematical Analysis 1).
:::

::::teorema{#energia-potenziale-gravitazionale titolo="Gravitational potential energy"}
Let $M$ be a point mass placed at the origin and let $m$ be a point mass at distance $r$ from it. The gravitational force of $M$ on $m$ is conservative and its potential energy, chosen to be zero at infinite distance, is
$$
U(r) = -\,\frac{G M m}{r} .
$$
The potential energy is negative at every finite distance and increases toward $0$ as $r$ increases: to move $m$ away, energy must be supplied. The formula also holds when $M$ is a spherically symmetric sphere, for points outside the sphere, with $r$ the distance from its center, as follows from the shell theorem. For example, to bring a body of $1\,\mathrm{kg}$ from the Earth's surface to infinite distance the work $\dfrac{G M_T m}{R_T} = 6.25 \cdot 10^7\,\mathrm{J}$ is required.

:::dimostrazione
We compute the work of the force along an arbitrary path from a point $A$ at distance $r_A$ to a point $B$ at distance $r_B$. An infinitesimal displacement $d\vec{s}$ is decomposed into a part along $\hat{u}_r$, of length $dr$, and a part perpendicular to $\hat{u}_r$. The force $\vec{F} = -\dfrac{GMm}{r^2}\,\hat{u}_r$ is radial, so the perpendicular part gives no contribution and $\vec{F} \cdot d\vec{s} = -\dfrac{GMm}{r^2}\,dr$. Therefore
$$
L_{A \to B} = \int_{r_A}^{r_B} \left( -\frac{GMm}{r^2} \right) dr = G M m \left( \frac{1}{r_B} - \frac{1}{r_A} \right) .
$$
The work depends only on $r_A$ and $r_B$, so the force is **conservative**. The result is written $L_{A \to B} = U(r_A) - U(r_B)$ with $U(r) = -\dfrac{GMm}{r} + c$, and the choice $U(\infty) = 0$ forces $c = 0$.
:::
::::

:::definizione{#potenziale-gravitazionale titolo="Gravitational potential"}
The **gravitational potential** at a point $P$ is the potential energy per unit mass, $V(P) = \dfrac{U}{m}$; for a point mass $M$ at distance $r$ it is
$$
V(r) = -\,\frac{GM}{r} ,
$$
and it is measured in $\mathrm{J/kg}$. The potential is a scalar quantity, so the potential of several masses is the sum of the potentials of each, with no components to compute. For example, at the midpoint between two equal masses $M$ placed at distance $2a$ the field is zero, while the potential is $-\dfrac{2GM}{a}$.
:::

:::osservazione{#energia-di-un-sistema-di-masse titolo="Potential energy of a system of masses"}
For a system of point masses the gravitational potential energy is the sum of the contributions of all pairs, each counted once:
$$
U = -\sum_{i < j} \frac{G m_i m_j}{r_{ij}} ,
$$
where $r_{ij}$ is the distance between $m_i$ and $m_j$. The number $-U$ is the work needed to separate all the masses, bringing them to infinite distance from one another. For three equal masses $m$ at the vertices of an equilateral triangle of side $\ell$ there are three pairs, so $U = -\dfrac{3Gm^2}{\ell}$.
:::

:::osservazione{#forza-ed-energia-potenziale titolo="Force and potential energy"}
The radial component of the force is obtained by differentiating the potential energy:
$$
F_r = -\,\frac{dU}{dr} = -\,\frac{d}{dr}\left( -\frac{GMm}{r} \right) = -\,\frac{GMm}{r^2} .
$$
The negative sign indicates that the force is directed toward decreasing $r$, that is, toward $M$. In the same way the field is obtained from the potential with $g_r = -\dfrac{dV}{dr}$; for the derivative we refer to the topic on derivatives in Mathematical Analysis 1. The relation makes it possible to go from the potential, which is a scalar, to the force.
:::

:::osservazione{#energia-potenziale-vicino-alla-superficie titolo="Potential energy near the surface"}
For a body that rises from the Earth's surface, at distance $R_T$ from the center, to the altitude $h$, the change in potential energy is
$$
\Delta U = G M_T m \left( \frac{1}{R_T} - \frac{1}{R_T + h} \right) = \frac{G M_T m\,h}{R_T (R_T + h)} .
$$
If $h$ is small compared with $R_T$, the denominator is about $R_T^2$, and since $\dfrac{G M_T}{R_T^2} = g_0$ we obtain $\Delta U \approx m g_0 h$, the potential energy of the weight used near the ground. The approximation overestimates $\Delta U$ by the factor $1 + \dfrac{h}{R_T}$: the error is $0.016\%$ for $h = 1\,\mathrm{km}$ and $16\%$ for $h = 1000\,\mathrm{km}$.

::grafico{f="x>=1 ? -1/x : NaN;x-2" punti="1,-1,pieno" xmin=0 xmax=6 ymin=-1.3 ymax=1.2 nomi="r,U" etichette="4.2,-0.5,U = −GMm/r;0.15,0.6,tangent line" titolo="$U(r)$ for $r \geq R$, with $R = 1$ and $\dfrac{GMm}{R} = 1$; the tangent line at $r = R$ has slope $mg_0$ and corresponds to $U \approx mg_0 h$"}

:::

## Spherically symmetric bodies

::::teorema{#teorema-del-guscio-sferico titolo="Shell theorem"}
Consider a thin spherical shell with center $O$, radius $R$ and mass $M$ uniformly distributed, and let $P$ be a point at distance $r$ from $O$. Then
$$
V(r) =
\begin{cases}
-\,\dfrac{GM}{r} & \text{if } r > R \\[10pt]
-\,\dfrac{GM}{R} & \text{if } r < R
\end{cases}
\qquad
g(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{if } r > R \\[10pt]
0 & \text{if } r < R
\end{cases}
$$
Outside, the shell attracts as if all its mass were concentrated at the center; inside, the field is zero. The theorem justifies using the distance from the center in the law of gravitation when the bodies are spheres, such as the planets, even if their sizes are not small compared with the distance.

:::dimostrazione
We divide the shell into thin rings with axis $OP$. The ring identified by the angle $\theta$ between $OP$ and the radius, of width $d\theta$, has area $2\pi R^2 \sin\theta\,d\theta$; the surface of the shell is $4\pi R^2$, so the mass of the ring is $dM = \dfrac{M}{2} \sin\theta\,d\theta$. All points of the ring have the same distance $s$ from $P$, and by the law of cosines
$$
s^2 = R^2 + r^2 - 2Rr\cos\theta .
$$
The potential is a scalar, therefore the contribution of the ring is $dV = -\dfrac{G\,dM}{s}$. Differentiating the previous relation gives $2s\,ds = 2Rr\sin\theta\,d\theta$, so $\sin\theta\,d\theta = \dfrac{s\,ds}{Rr}$ and
$$
dV = -\,\frac{GM}{2s} \cdot \frac{s\,ds}{Rr} = -\,\frac{GM}{2Rr}\,ds .
$$
As $\theta$ goes from $0$ to $\pi$, the distance $s$ goes from $|r - R|$ to $r + R$. If $r > R$, the interval of integration has length $(r + R) - (r - R) = 2R$, so $V = -\dfrac{GM}{2Rr} \cdot 2R = -\dfrac{GM}{r}$. If $r < R$, the interval goes from $R - r$ to $R + r$ and has length $2r$, so $V = -\dfrac{GM}{2Rr} \cdot 2r = -\dfrac{GM}{R}$, a constant. The field is $g_r = -\dfrac{dV}{dr}$: outside it equals $-\dfrac{GM}{r^2}$, that is, it has magnitude $\dfrac{GM}{r^2}$ and is directed toward $O$, while inside the potential is constant and the field is zero.
:::
::::

::::teorema{#campo-di-una-sfera-omogenea titolo="Field of a homogeneous sphere"}
Consider a solid sphere of radius $R$ and mass $M$ with uniform density, and let $r$ be the distance from the center. The magnitude of the gravitational field is
$$
g(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{if } r \geq R \\[10pt]
\dfrac{GM}{R^3}\,r & \text{if } r \leq R
\end{cases}
$$
Outside, the sphere behaves like a point mass placed at the center; inside, the field grows linearly with $r$ and is zero at the center. The external result holds for every sphere whose density depends only on the distance from the center, so it applies to a good approximation to the Earth and the planets. For example, in the homogeneous model, halfway between the surface and the center of the Earth the field is $\dfrac{g_0}{2} = 4.9\,\mathrm{m/s^2}$.

::grafico{f="min(x,1/x^2)" segmenti="1,0,1,1" punti="1,1,pieno" etichette="1.1,1.15,r = R" xmin=0 xmax=4 ymin=0 ymax=1.3 nomi="r,g" titolo="Magnitude of the field of a homogeneous sphere with $R = 1$ and $\dfrac{GM}{R^2} = 1$: it grows linearly inside and decreases as $\dfrac{1}{r^2}$ outside"}

:::dimostrazione
We divide the sphere into thin concentric shells and apply the **shell theorem** to each. If $r \geq R$, the point is outside all the shells, and each one attracts like a point mass placed at the center; adding up, the sphere attracts like the mass $M$ placed at the center. If $r < R$, the shells of radius greater than $r$ give zero field, while those of radius less than $r$ form a sphere of radius $r$. Since the density is uniform, the mass of this sphere is proportional to the volume, that is, $M(r) = M\,\dfrac{r^3}{R^3}$. Hence
$$
g(r) = \frac{G M(r)}{r^2} = \frac{G M r^3}{R^3 r^2} = \frac{GM}{R^3}\,r .
$$
:::
::::

## Gravitational acceleration and altitude

:::definizione{#accelerazione-di-gravita-alla-superficie titolo="Gravitational acceleration at the surface"}
For a spherical planet of mass $M$ and radius $R$, the **gravitational acceleration at the surface** is the magnitude of the field at the surface,
$$
g_0 = \frac{GM}{R^2} .
$$
With $M_T = 5.97 \cdot 10^{24}\,\mathrm{kg}$ and $R_T = 6.37 \cdot 10^6\,\mathrm{m}$ we obtain $g_0 = 9.81\,\mathrm{m/s^2}$; the measured value varies slightly with latitude, because of the rotation and the flattening of the Earth, effects that are neglected here. The relation $GM = g_0 R^2$ makes it possible to replace the product $GM$ with quantities measurable at the surface. Read the other way around, it gives the mass of the Earth from $g_0$, $R_T$ and $G$: $M_T = \dfrac{g_0 R_T^2}{G} = 5.97 \cdot 10^{24}\,\mathrm{kg}$.
:::

:::richiamo{titolo="First-order approximation"}
For small $|x|$ we have $(1 + x)^{\alpha} \approx 1 + \alpha x$, which is the first-order Taylor formula of the function $(1 + x)^{\alpha}$ at $x = 0$ (see the topic on derivatives in Mathematical Analysis 1).
:::

::::teorema{#variazione-di-g-con-la-quota titolo="Variation of g with altitude"}
Let $g_0$ be the gravitational acceleration at the surface of a spherical planet of radius $R$. At the altitude $h$ above the surface the gravitational acceleration is
$$
g(h) = g_0\,\frac{R^2}{(R + h)^2} ,
$$
and for $h$ small compared with $R$ the following approximation holds:
$$
g(h) \approx g_0 \left( 1 - \frac{2h}{R} \right) .
$$
The first formula gives the exact value at any altitude; the second shows that near the surface $g$ decreases by about $0.03\%$ for every kilometer of altitude, since $\dfrac{2}{6370} \approx 3 \cdot 10^{-4}$. For $h = 300\,\mathrm{km}$ the exact formula gives $g = 8.95\,\mathrm{m/s^2}$ and the approximate one $8.89\,\mathrm{m/s^2}$; at the altitude $h = R$ the field is one quarter of the surface value.

:::dimostrazione
At the altitude $h$ the distance from the center is $R + h$, so by the **field of a homogeneous sphere** outside, $g(h) = \dfrac{GM}{(R + h)^2}$. Substituting $GM = g_0 R^2$ gives the first formula. Writing $\dfrac{R^2}{(R + h)^2} = \left( 1 + \dfrac{h}{R} \right)^{-2}$ and applying the first-order approximation with $x = \dfrac{h}{R}$ and $\alpha = -2$ gives the second.
:::
::::

:::osservazione{#variazione-di-g-con-la-profondita titolo="Variation of g with depth"}
In the homogeneous Earth model, at depth $d$ below the surface the distance from the center is $R_T - d$, so by the **field of a homogeneous sphere** inside
$$
g(d) = \frac{G M_T}{R_T^3}\,(R_T - d) = g_0 \left( 1 - \frac{d}{R_T} \right) .
$$
Near the surface $g$ decreases with depth at a rate equal to half the rate at which it decreases with altitude. In the real Earth the density increases toward the center, therefore this formula describes the behavior qualitatively and is used in exercises that state the hypothesis of uniform density.
:::

## Circular orbits and satellites

:::richiamo{titolo="Uniform circular motion"}
A point that travels along a circle of radius $r$ with speed of constant magnitude $v$ has an acceleration directed toward the center of magnitude $a_c = \dfrac{v^2}{r}$, and the period is $T = \dfrac{2\pi r}{v}$ (see the topic on motion in the plane).
:::

::::teorema{#orbita-circolare titolo="Speed and period in a circular orbit"}
A satellite of mass $m$ travels on a circular orbit of radius $r$ around a spherical body of mass $M \gg m$, whose center is considered at rest, and is subject to the gravitational force alone. Then the motion is uniform and
$$
v = \sqrt{\frac{GM}{r}} , \qquad T = 2\pi\,\sqrt{\frac{r^3}{GM}} .
$$
Speed and period depend only on the mass of the central body and on the radius of the orbit, so satellites of different mass on the same orbit move together; moreover the speed decreases as $r$ increases. For an orbit grazing the Earth's surface, $r = R_T$, we have $v = \sqrt{g_0 R_T} = 7.91\,\mathrm{km/s}$ and $T = 5.06 \cdot 10^3\,\mathrm{s}$, about $84$ minutes.

::grafico{curve="3*cos(t),3*sin(t),0,6.29;0.5*cos(t),0.5*sin(t),0,6.29" vettori="2.298,1.928,1.270,3.154,v;2.298,1.928,1.379,1.157,a" segmenti="0,0,2.298,1.928" punti="2.298,1.928,pieno,m" etichette="0.1,-0.85,M;1.25,0.5,r" xmin=-4 xmax=4 ymin=-3.8 ymax=3.8 uguale=1 titolo="In a circular orbit the velocity $\vec{v}$ is tangent to the orbit and the acceleration $\vec{a}$, due to gravity, is directed toward the center"}

:::dimostrazione
The only force on the satellite is the gravitational attraction, directed toward the center of the orbit and of constant magnitude $\dfrac{GMm}{r^2}$. By Newton's second law the acceleration is directed toward the center and has no tangential component, so the magnitude of the velocity is constant and the motion is uniform circular. The acceleration is then the centripetal one $\dfrac{v^2}{r}$, and the second law gives
$$
\frac{GMm}{r^2} = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
v = \sqrt{\frac{GM}{r}} .
$$
The period is the time to travel the circumference, $T = \dfrac{2\pi r}{v} = 2\pi r \sqrt{\dfrac{r}{GM}} = 2\pi \sqrt{\dfrac{r^3}{GM}}$.
:::
::::

:::osservazione{#satellite-geostazionario titolo="Geostationary satellite"}
A **geostationary** satellite travels on a circular orbit in the equatorial plane, in the same direction as the Earth's rotation, with period equal to the Earth's rotation period, the sidereal day $T = 86\,164\,\mathrm{s}$; for this reason it always stays above the same point of the equator. From the formula for the period
$$
r = \sqrt[3]{\frac{G M_T T^2}{4\pi^2}} = 4.21 \cdot 10^7\,\mathrm{m} ,
$$
that is, about $36\,000\,\mathrm{km}$ of altitude. Antennas pointed at these satellites stay fixed, which is why they are used for telecommunications.
:::

:::osservazione{#assenza-di-peso-in-orbita titolo="Weightlessness in orbit"}
At the altitude of the International Space Station, about $400\,\mathrm{km}$, the **variation of g with altitude** gives $g = 8.69\,\mathrm{m/s^2}$, about $89\%$ of the value at the ground. Astronauts float because the station and their bodies have the same acceleration $\vec{g}$: they are in free fall together, so the floor exerts no normal force. What is perceived as weight is the constraint reaction, therefore in free fall the apparent weight is zero even though the gravitational force is present.
:::

::::teorema{#energia-di-un-satellite titolo="Energy of a satellite in a circular orbit"}
Under the hypotheses of the **speed and period in a circular orbit**, the satellite has kinetic energy, potential energy and mechanical energy
$$
K = \frac{GMm}{2r}, \qquad U = -\,\frac{GMm}{r}, \qquad E = K + U = -\,\frac{GMm}{2r} .
$$
Hence $E = -K$ and $U = 2E$. The mechanical energy is negative and increases, approaching $0$, as $r$ increases: to bring a satellite to a higher orbit the work $E_2 - E_1 > 0$ must be supplied, even though in the new orbit its kinetic energy is *smaller*. A satellite of $1000\,\mathrm{kg}$ in a circular orbit at distance $2R_T$ from the center of the Earth has $E = -\dfrac{G M_T \cdot 1000}{4R_T} = -1.56 \cdot 10^{10}\,\mathrm{J}$.

:::dimostrazione
From the orbital speed $v^2 = \dfrac{GM}{r}$ it follows that $K = \dfrac{1}{2} m v^2 = \dfrac{GMm}{2r}$. The potential energy is the one given by the **gravitational potential energy**, $U = -\dfrac{GMm}{r}$. Adding, we get $E = \dfrac{GMm}{2r} - \dfrac{GMm}{r} = -\dfrac{GMm}{2r}$, which is the opposite of $K$.
:::
::::

## Escape velocity and unbound motion

:::richiamo{titolo="Conservation of mechanical energy"}
If only conservative forces do work on the system, the mechanical energy $E = K + U$ remains constant during the motion (see the topic on work and energy).
:::

::::teorema{#velocita-di-fuga titolo="Escape velocity"}
A body is launched outward from the surface of a spherical planet of mass $M$ and radius $R$, without atmosphere, and the rotation of the planet and the attraction of other bodies are neglected. The body moves away indefinitely, whatever the direction of launch, if and only if the initial speed $v_0$ satisfies $v_0 \geq v_f$, where
$$
v_f = \sqrt{\frac{2GM}{R}} = \sqrt{2 g_0 R}
$$
is the **escape velocity**. For the Earth $v_f = 11.2\,\mathrm{km/s}$, for the Moon $2.37\,\mathrm{km/s}$. The escape velocity does not depend on the mass of the launched body, and at the same distance from the center it is $\sqrt{2}$ times the speed of the circular orbit, since $\sqrt{\dfrac{2GM}{r}} = \sqrt{2}\,\sqrt{\dfrac{GM}{r}}$.

:::dimostrazione
The only force is gravity, which is conservative, so the mechanical energy is conserved:
$$
E = \frac{1}{2} m v^2 - \frac{GMm}{r} = \frac{1}{2} m v_0^2 - \frac{GMm}{R} .
$$
If $E < 0$, since $K \geq 0$ we have $\dfrac{GMm}{r} = K - E \geq |E|$, that is, $r \leq \dfrac{GMm}{|E|}$, and the body does not go beyond this distance. If $E \geq 0$, for every $r$ we have $\dfrac{1}{2} m v^2 = E + \dfrac{GMm}{r} > 0$, so the speed never vanishes and the energy places no limit on the distance; in a vertical launch the body always rises and $r$ grows without bound, while for the other directions the conclusion follows from the shape of the trajectories described in bound and unbound motion. Therefore the body escapes if and only if $E \geq 0$, that is, $\dfrac{1}{2} m v_0^2 \geq \dfrac{GMm}{R}$, which is equivalent to $v_0 \geq \sqrt{\dfrac{2GM}{R}}$. With $GM = g_0 R^2$ we obtain the second form.
:::
::::

:::definizione{#moti-legati-e-non-legati titolo="Bound and unbound motion"}
The motion of a body in the field of a mass $M$ is **bound** if the mechanical energy $E = \dfrac{1}{2} m v^2 - \dfrac{GMm}{r}$ is negative, **unbound** if $E \geq 0$. In bound motion the distance from the center does not exceed
$$
r_{\max} = \frac{GMm}{|E|} ,
$$
the value at which $U(r) = E$ and the kinetic energy vanishes. In unbound motion the body reaches infinite distance with kinetic energy $E$, hence with speed $v_{\infty} = \sqrt{\dfrac{2E}{m}}$. It can also be shown that the trajectories are conics with a focus at the center of $M$: ellipses (or circles) for $E < 0$, parabolas for $E = 0$, branches of hyperbolas for $E > 0$; the proof is beyond the scope of the course.

::grafico{f="x>=1 ? -1/x : NaN" segmenti="1,-0.5,2,-0.5;2,-0.5,2,0;1,0.3,6,0.3" punti="2,-0.5,pieno,r max" etichette="3.3,-0.5,E < 0 : bound motion;3.3,0.45,E > 0 : unbound motion;4.3,-0.13,U(r)" xmin=0 xmax=6 ymin=-1.2 ymax=0.8 nomi="r,U" titolo="With $E < 0$ the body stays where $U(r) \leq E$, that is, up to $r_{\max}$; with $E > 0$ the condition $U(r) \leq E$ holds at every distance"}

:::

:::esempio{titolo="Maximum height of a vertical launch"}
A body is launched vertically from the Earth's surface with $v_0 = 4.0\,\mathrm{km/s}$, less than the escape velocity, neglecting the atmosphere. At the highest point the velocity is zero, so conservation of energy gives
$$
\frac{1}{2} v_0^2 - \frac{G M_T}{R_T} = -\,\frac{G M_T}{r_{\max}}
\quad\Longrightarrow\quad
\frac{1}{r_{\max}} = \frac{1}{R_T} - \frac{v_0^2}{2 G M_T} ,
$$
from which $r_{\max} = 7.30 \cdot 10^6\,\mathrm{m}$ and a maximum altitude of $9.3 \cdot 10^5\,\mathrm{m}$. The formula for uniformly accelerated motion, $\dfrac{v_0^2}{2g_0} = 8.2 \cdot 10^5\,\mathrm{m}$, underestimates the altitude, because it does not take into account the decrease of $g$ during the ascent.
:::

## Kepler's laws

:::teorema{#leggi-di-keplero titolo="Kepler's laws"}
The motion of the planets around the Sun satisfies three laws.

- First law: each planet travels on an ellipse, and the Sun occupies one of the two foci.
- Second law: the segment joining the Sun to the planet sweeps out equal areas in equal times.
- Third law: the square of the period of revolution is proportional to the cube of the semi-major axis $a$ of the orbit, $\dfrac{T^2}{a^3} = k$, with the same constant $k$ for all planets.

They are experimental laws, derived by Kepler from the observations of Tycho Brahe and published between $1609$ and $1619$. Newton deduced them from the law of gravitation and the laws of dynamics; the second follows from conservation of angular momentum, the third, in the case of circular orbits, from the formula for the period in a circular orbit. The same laws hold for moons around a planet and for artificial satellites, with the planet in place of the Sun and a different constant $k$.

::grafico{curve="4*cos(t),3*sin(t),0,6.29" area="0.926*(x-2.646);-0.926*(x-2.646);2.646;3.757|3*sqrt(1-(x/4)^2);-3*sqrt(1-(x/4)^2);3.757;4|0.03346*(2.646-x);-0.03346*(2.646-x);-3.989;2.646|3*sqrt(1-(x/4)^2);-3*sqrt(1-(x/4)^2);-4;-3.989" punti="2.646,0,pieno,S;-2.646,0,vuoto" etichette="3.6,1.6,perihelion;-5,1.0,aphelion" xmin=-5 xmax=5 ymin=-3.6 ymax=3.6 uguale=1 titolo="The two colored regions have the same area and are swept out in the same time: near perihelion the planet is faster than near aphelion"}

:::

:::richiamo{titolo="Cross product"}
For two vectors $\vec{u}$ and $\vec{v}$ forming the angle $\theta$ we have $|\vec{u} \times \vec{v}| = |\vec{u}|\,|\vec{v}|\sin\theta$, which is the area of the parallelogram with sides $\vec{u}$ and $\vec{v}$; if $\vec{u}$ and $\vec{v}$ are parallel, $\vec{u} \times \vec{v} = \vec{0}$. The derivative of a cross product is computed with the product rule, keeping the order of the factors (see the topic on vectors in Linear Algebra).
:::

::::teorema{#seconda-legge-di-keplero titolo="Kepler's second law"}
Let $m$ be a point mass subject only to the gravitational force of a mass $M$ at rest at the origin. Then the **angular momentum** $\vec{L} = \vec{r} \times m\vec{v}$ about the origin is constant, the motion takes place in the plane through the origin perpendicular to $\vec{L}$, and the area $A$ swept out by the position vector satisfies
$$
\frac{dA}{dt} = \frac{|\vec{L}|}{2m} = \text{constant} .
$$
The quantity $\dfrac{dA}{dt}$ is the **areal velocity**. At the points of the orbit where the velocity is perpendicular to the position vector, perihelion and aphelion, we have $|\vec{L}| = m r v$, so
$$
r_p v_p = r_a v_a ,
$$
and the planet is faster where it is closer to the Sun. The Earth has perihelion $1.471 \cdot 10^{11}\,\mathrm{m}$ and aphelion $1.521 \cdot 10^{11}\,\mathrm{m}$, therefore at perihelion it is faster than at aphelion by $3.4\%$.

:::dimostrazione
Differentiating the cross product with the product rule we obtain
$$
\frac{d\vec{L}}{dt} = \frac{d\vec{r}}{dt} \times m\vec{v} + \vec{r} \times m\frac{d\vec{v}}{dt} = \vec{v} \times m\vec{v} + \vec{r} \times \vec{F} .
$$
The first term is zero because $\vec{v}$ and $m\vec{v}$ are parallel; the second is zero because the gravitational force is directed along $\vec{r}$. Hence $\vec{L}$ is constant. Since $\vec{L}$ is perpendicular to both $\vec{r}$ and $\vec{v}$, the position remains in the plane through the origin perpendicular to $\vec{L}$. In the time $dt$ the position vector goes from $\vec{r}$ to $\vec{r} + \vec{v}\,dt$ and sweeps out the triangle with sides $\vec{r}$ and $\vec{v}\,dt$, whose area is half that of the corresponding parallelogram:
$$
dA = \frac{1}{2}\,|\vec{r} \times \vec{v}\,dt| = \frac{|\vec{L}|}{2m}\,dt .
$$
Dividing by $dt$ we obtain the claim.
:::
::::

::::teorema{#terza-legge-di-keplero titolo="Kepler's third law for circular orbits"}
For bodies in circular orbit around the same central mass $M$, under the hypotheses of the **speed and period in a circular orbit**, we have
$$
\frac{T^2}{r^3} = \frac{4\pi^2}{GM} ,
$$
with the same constant for all bodies. For two orbits around the same body we therefore have $\dfrac{T_1^2}{T_2^2} = \dfrac{r_1^3}{r_2^3}$, and for elliptical orbits the relation holds with the semi-major axis $a$ in place of $r$. The law makes it possible to measure the mass of the central body from the motion of one of its satellites: from the orbit of the Earth, with $r = 1.50 \cdot 10^{11}\,\mathrm{m}$ and $T = 3.156 \cdot 10^7\,\mathrm{s}$, we obtain $M_S = \dfrac{4\pi^2 r^3}{G T^2} = 2.0 \cdot 10^{30}\,\mathrm{kg}$.

::grafico{f="x" punti="0.058,0.058,pieno;0.378,0.378,pieno,Venus;1,1,pieno,Earth;3.54,3.538,pieno,Mars" etichette="0.25,0.0,Mercury" xmin=0 xmax=4 ymin=0 ymax=4 uguale=1 nomi="a³,T²" titolo="With $a$ in astronomical units and $T$ in years, the four inner planets lie on the line $T^2 = a^3$"}

:::dimostrazione
From the formula for the period in a circular orbit, $T = 2\pi \sqrt{\dfrac{r^3}{GM}}$, squaring we obtain $T^2 = \dfrac{4\pi^2}{GM}\,r^3$. Dividing by $r^3$ we find the claim; the constant $\dfrac{4\pi^2}{GM}$ depends only on the central mass. The ratio between two orbits is obtained by dividing side by side the relations $T_1^2 = \dfrac{4\pi^2}{GM}\,r_1^3$ and $T_2^2 = \dfrac{4\pi^2}{GM}\,r_2^3$.
:::
::::
