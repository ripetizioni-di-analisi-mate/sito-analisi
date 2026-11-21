---
titolo: Gravitation and orbits
sommario: Gravitational field, energies, orbital speeds and periods, Kepler's laws and escape.
---

## The law of gravitation

:::teorema{#legge-gravitazione titolo="Attraction between masses"}
A mass is called a **point mass** when the size of the body is negligible compared with its distance from the other bodies. Two point masses $m_1$ and $m_2$ separated by $r$ attract each other with two forces of equal **magnitude**, that is, of equal strength:
$$
F=G\frac{m_1m_2}{r^2},\qquad G=6.67\cdot10^{-11}\,\mathrm{N\cdot m^2/kg^2}.
$$
$G$ is the **universal gravitational constant** and has the same value for any pair of bodies. Its unit, newton times square metre divided by square kilogram, is the one that makes $F$ a force in newtons ($\mathrm N$). For example, two masses of $1000\,\mathrm{kg}$ at $1\,\mathrm m$ attract with $F=6.67\cdot10^{-11}\cdot10^6\,\mathrm N=6.67\cdot10^{-5}\,\mathrm N$.

Each force points towards the other mass. The two forces form an action–reaction pair (Newton's third law) and act on different bodies.

A body has a **spherically symmetric mass distribution** when its mass is arranged in the same way in every direction around the centre, like a sphere made of concentric layers. Outside a body of this kind, its field (the force exerted on each kilogram of attracted mass, defined in the section "Field and weight") equals the field of a point of the same mass at its centre. In particular, for two spherical bodies of this kind that are disjoint (that is, they do not overlap), the distance in the formula is the distance between centres. Inside a solid sphere only the mass enclosed within the point's distance from the centre counts; for a uniform sphere the field is zero at the centre and grows up to the surface.

Above the surface of a planet of radius $R$, altitude $h$ gives distance $r=R+h$ from the centre. For gravity *at the ground*, $r=R$. If the zero altitude were put in the denominator instead of $R$, the denominator would be zero and the formula would give no value.

The force is directly proportional to the product $m_1m_2$. Doubling one mass at a fixed separation therefore doubles the force on both bodies. Their accelerations, however, also depend on their respective masses, because by Newton's second law $a=\dfrac Fm$. At fixed masses, tripling the separation multiplies $r^2$ by $9$ and reduces the magnitude to one ninth. When several quantities change, one calculates the ratio of the new force to the initial one, in which $G$ cancels.
:::

:::esempio{titolo="Directions of the gravitational pair"}
For two masses on a line, $m_1$ lies to the left and $m_2$ to the right. The force on $m_1$ points right and the force on $m_2$ points left, with the same magnitude $F$. If $m_2=3m_1$, the accelerations are $a_1=\dfrac F{m_1}$ and $a_2=\dfrac F{3m_1}$, so the second body has one third the first body's acceleration magnitude. **Momentum** is the product $mv$ of mass and velocity, and over an interval $\Delta t$ (the Greek letter delta, $\Delta$, denotes a change) it changes by $F\Delta t$. Since the two forces have the same magnitude and opposite directions, the two changes in momentum have the same magnitude and opposite directions.

::grafico{assi=0 vettori="0,0,1,0,F_1;4,0,3,0,F_2" punti="0,0,pieno,m_1;4,0,pieno,m_2" xmin=-1 xmax=5 ymin=-1 ymax=1 titolo="The two forces act on different bodies"}
:::

:::esempio{titolo="Checking the model with relative measurements"}
An apparatus measures the force between two masses that are small compared with the separation of their centres, in three positions. At distances $r_1$, $2r_1$ and $3r_1$ the law predicts $F_1$, $\dfrac{F_1}{4}$ and $\dfrac{F_1}{9}$. The product $Fr^2$ is therefore always $F_1r_1^2$:
$$
F_1r_1^2,\qquad \frac{F_1}{4}\,(2r_1)^2=F_1r_1^2,\qquad \frac{F_1}{9}\,(3r_1)^2=F_1r_1^2.
$$
For this reason comparing the three products tests the law even if the sensor is not precisely calibrated in newtons, provided the calibration is the same for the three readings. In an actual measurement the differences between the products are compared with the uncertainty, that is, the possible error, in distance and force. In the product the distance appears squared, so a relative error of $1\%$ in $r$ gives about $2\%$ in $r^2$, because $1.01^2\simeq1.02$.

::grafico{f="100/x^2" punti="1,100,pieno;2,25,pieno;3,11.111111,pieno" xmin=.9 xmax=3.45 ymin=0 ymax=115 nomi="r/r_1,100 F/F_1" titolo="Doubling and tripling the distance lowers the force to 25% and about 11% of its initial value"}
:::

## Field and weight

:::definizione{#campo-gravitazionale titolo="Force per unit test mass"}
A **test mass** is a small mass placed at a point to measure the attraction of the other masses (the **sources**) without moving them. The **gravitational field** at a point is the force on the test mass divided by the test mass, that is, the force per kilogram. Outside a spherically symmetric body of mass $M$, dividing $F=G\dfrac{Mm}{r^2}$ by $m$ gives the magnitude
$$
g(r)=\frac{GM}{r^2},
$$
and the vector points towards the centre. The unit $\mathrm{N/kg}$ is equivalent to $\mathrm{m/s^2}$, because $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. A body of mass $m$ has a **weight** of magnitude $mg(r)$. The field depends on the source and the point and does not depend on the mass of the body that measures it, whereas weight is proportional to that mass.

At distance $2R$ from the centre, $r^2$ is four times $R^2$, so the field is one quarter of its surface value. At *altitude* $2R$ above the surface the distance from the centre is $R+2R=3R$, so the field drops to one ninth. Where several sources act at a point, their fields add as vectors:
- if two fields have the same direction and sense, the total magnitude is the sum of the magnitudes;
- if they point in opposite directions, the total magnitude is the difference of the magnitudes;
- if they are perpendicular, the two fields are the legs of a right triangle and the total magnitude follows from Pythagoras' theorem: with magnitudes $3$ and $4\,\mathrm{m/s^2}$ one obtains $\sqrt{3^2+4^2}=5\,\mathrm{m/s^2}$.

Along an axis between two masses the components of the two fields point in opposite directions and can cancel even though neither is zero. Outside the segment joining the masses, the two components point the same way.
:::

:::esempio{titolo="Field one radius above the surface"}
For a planet with surface field $g_0=12\,\mathrm{m/s^2}$, at altitude $R$ the distance from the centre is $2R$ and the field is
$$
g=\frac{g_0}{4}=3\,\mathrm{m/s^2}.
$$
A $2\,\mathrm{kg}$ object weighs $2\cdot12=24\,\mathrm N$ at the surface and $2\cdot3=6\,\mathrm N$ at that altitude. Its mass stays the same, so the ratio of weights equals the ratio of fields.

::grafico{f="12/x^2" punti="1,12,pieno,A;2,3,pieno,B" xmin=1 xmax=4 ymin=0 ymax=16 nomi="r/R,g (m/s²)" titolo="A is the surface and B is twice as far from the centre"}
:::

:::esempio{titolo="Where the fields of two sources cancel"}
Two point sources of masses $4M$ and $M$ are separated by $6\,\mathrm{km}$. On the line joining them, $x$ denotes the distance in kilometres from the larger source; the distance from the smaller one is then $6-x$. Between the sources the two fields point in opposite directions, so the total field is zero where the magnitudes are equal. One writes the equality of magnitudes, cancels $GM$ and takes the square root of both sides:
$$
\frac{4}{x^2}=\frac{1}{(6-x)^2},
\qquad
\frac{2}{x}=\frac{1}{6-x}.
$$
Since both distances are positive, the positive root has been taken. Cross-multiplying gives $2(6-x)=x$, that is, $12=3x$, and the result is $x=4\,\mathrm{km}$. The point is closer to the smaller mass, because the smaller distance compensates for the smaller mass. A test mass placed there experiences zero total field at that instant, even though each of the two sources exerts a force on it.

::grafico{assi=0 linee="0,0 6,0" punti="0,0,pieno,A;6,0,pieno,B;4,0,pieno,P" vettori="4,.52,2.5,.52,g_A;4,.52,5.5,.52,g_B" etichette="-.09,-.33,4M;5.88,-.33,M" xmin=-.65 xmax=6.65 ymin=-.72 ymax=1.15 titolo="At P, 4 km from A and 2 km from B, the two fields have equal magnitudes"}
:::

## Gravitational energy

:::teorema{#energia-gravitazionale titolo="Energy zero at infinity"}
For gravitational potential energy the zero is chosen as the situation in which the two bodies are *infinitely far apart*, that is, so distant that the attraction is negligible. For a mass $m$ outside a spherical source of mass $M$, at distance $r$ from the centre, the potential energy is
$$
U(r)=-\frac{GMm}{r}.
$$
The value is negative, because when the body is brought closer starting from infinity gravity does positive work and the potential energy falls below zero. Bringing the body closer therefore makes $U$ more negative; moving it away raises $U$ towards zero.

If the body moves from distance $r_i$ (initial) to distance $r_f$ (final), the change is $\Delta U=U(r_f)-U(r_i)$ and gravity does work
$$
W_g=-\Delta U=GMm\left(\frac1{r_f}-\frac1{r_i}\right).
$$
If the distance increases, $\dfrac1{r_f}$ is smaller than $\dfrac1{r_i}$ and the work is negative. The work depends only on the initial and final distances, not on the path; on a closed path, which returns to the starting point, the work of gravity is therefore zero. If several sources act on the same body, the potential energies, which are numbers and not vectors, add with their signs: two contributions of $-18\,\mathrm{MJ}$ and $-7\,\mathrm{MJ}$ give $-25\,\mathrm{MJ}$ (one megajoule, $\mathrm{MJ}$, equals $10^6\,\mathrm J$).

To decide whether the body can move away without limit, the kinetic energy $K=\dfrac12mv^2$ is added to the potential energy. The velocity must be measured relative to the **dominant source**, that is, the mass much larger than the others. This frame is approximately **inertial** (a frame in which Newton's first law holds) when the body's mass is negligible compared with the source. A velocity measured relative to a moving vehicle would give a different kinetic energy and a wrong balance.

Potential energy $U$ is expressed in joules and also depends on the mass $m$. The **gravitational potential** is instead $\Phi=\dfrac Um$ (the Greek letter phi), expressed in joules per kilogram. At a fixed source and position, doubling the test mass doubles $U$ and leaves $\Phi$ unchanged.

For an ascent of height $h$ starting from the surface, of radius $R$, the exact difference is
$$
\begin{aligned}
U(R+h)-U(R)&=GMm\left(\frac1R-\frac1{R+h}\right)\\[6pt]
&=GMm\,\frac{(R+h)-R}{R(R+h)}=\frac{GMmh}{R(R+h)}.
\end{aligned}
$$
If $h\ll R$ (read "$h$ much less than $R$"), the denominator is nearly $R\cdot R=R^2$. Since $g_0=\dfrac{GM}{R^2}$ is the field at the surface, the difference is approximately $m g_0 h$, the formula for potential energy with constant gravity. The ratio of the estimate to the exact value is
$$
\frac{mg_0h}{\dfrac{GMmh}{R(R+h)}}=\frac{GMmh}{R^2}\cdot\frac{R(R+h)}{GMmh}=\frac{R+h}{R}=1+\frac hR.
$$
For low altitudes the relative error $\dfrac hR$ is therefore small; if $h$ is comparable with $R$, the estimate greatly exceeds the exact difference. The formula $mg_0h$ is usually used with the zero at ground level; this choice does not change the comparison, which concerns only differences of energy.
:::

:::esempio{titolo="A transfer between two radii"}
When $r$ goes from $R$ to $2R$, the potential energy goes from $-\dfrac{GMm}{R}$ to $-\dfrac{GMm}{2R}$. The change is
$$
\Delta U=-\frac{GMm}{2R}-\left(-\frac{GMm}{R}\right)=\frac{GMm}{2R},
$$
which is positive, so energy must be supplied to move the body away. The constant-gravity estimate with $h=R$ is $mg_0R=m\dfrac{GM}{R^2}R=\dfrac{GMm}{R}$, twice the exact difference.

::grafico{f="-1/x" punti="1,-1,pieno,A;2,-.5,pieno,B" xmin=1 xmax=4 ymin=-1.5 ymax=.25 nomi="r/R,U/(GMm/R)" titolo="Potential energy rises towards zero as r increases"}
:::

:::esempio{titolo="Choosing a height for the approximation"}
The rise in potential energy is to be estimated with the surface field, with a relative error of at most $5\%$ against the exact value. The estimate exceeds the exact value by the fraction $\dfrac hR$ of that value, so one requires $\dfrac hR\le0.05$. The height can therefore be at most $0.05R$. With $R=6400\,\mathrm{km}$ the limit is $0.05\cdot6400=320\,\mathrm{km}$. The field at that height is $\dfrac{g_0}{1.05^2}\simeq0.91\,g_0$, about $91\%$ of the surface field. The two percentages measure different quantities, because energy depends on the work over the whole interval, along which the field varies between its value at the surface and its value at the final height.

::grafico{f="100*x/(1+x);100*x" punti="1,50,pieno;1,100,pieno" xmin=0 xmax=1.15 ymin=0 ymax=120 nomi="h/R,100 ΔU/(mg₀R)" legenda="100\,\dfrac{x}{1+x};100x" titolo="The curve gives the exact change. The straight line uses the constant field g₀."}
:::

## Circular orbits

:::teorema{#orbite titolo="Gravity supplies centripetal acceleration"}
A **satellite** is a body that revolves around a source of mass $M$ much larger than its own. The product $\mu=GM$ (the Greek letter mu) is called the **gravitational parameter** of the source and is measured in $\mathrm{m^3/s^2}$. A body travelling round a circle of radius $r$ at constant speed $v$ has a **centripetal acceleration**, directed towards the centre, of magnitude $\dfrac{v^2}{r}$. In a circular orbit this acceleration is produced by gravity alone, so the field $\dfrac{\mu}{r^2}$ equals $\dfrac{v^2}{r}$. Multiplying by $r$ gives $v^2=\dfrac\mu r$. The **period** $T$ is the time for one revolution, that is, the circumference $2\pi r$ divided by the speed; substituting $v$ gives
$$
v=\sqrt{\frac\mu r},\qquad
T=\frac{2\pi r}{v}=2\pi r\sqrt{\frac r\mu}=2\pi\sqrt{\frac{r^3}{\mu}}.
$$
The **angular velocity** $\omega=\dfrac{2\pi}{T}$ (the Greek letter omega) is the angle in radians covered each second, and $v=\omega r$.

Force falls as the inverse square of the radius, while circular speed falls only as the inverse square root of the radius: at four times the radius the field is one sixteenth and the speed is one half. The period, instead, grows with the radius, because a longer circumference is travelled at a lower speed.

The calculation assumes that gravity is the only significant force and that the velocity is tangent to the circle, that is, perpendicular to the radius. At the same position a velocity of different magnitude, or with a component along the radius, leads to a trajectory other than the circle. Along a circular orbit gravity, which is radial, is always perpendicular to the velocity, so it does no work. An astronaut in an orbiting vehicle does not feel their own weight because vehicle and astronaut fall together, with nearly identical gravitational accelerations; the floor therefore exerts no support force on the astronaut, even though the field is not zero.
:::

:::esempio{titolo="Estimating a central mass from an orbit"}
A satellite completes a circle of radius $8.0\cdot10^6\,\mathrm m$ in $7200\,\mathrm s$. Dividing the length of one revolution by the period gives
$$
v=\frac{2\pi\cdot8.0\cdot10^6\,\mathrm m}{7200\,\mathrm s}\simeq6.98\cdot10^3\,\mathrm{m/s}.
$$
The attraction supplies the centripetal acceleration that changes the direction of that velocity, so $v^2=\dfrac\mu r$ and
$$
\mu=v^2r\simeq(6.98\cdot10^3)^2\cdot8.0\cdot10^6\,\mathrm{m^3/s^2}\simeq3.90\cdot10^{14}\,\mathrm{m^3/s^2}.
$$
Dividing by $G$ estimates the central mass, $M=\dfrac\mu G\simeq5.8\cdot10^{24}\,\mathrm{kg}$. Repeating the calculation for another orbit around the same planet must give the same parameter, within the uncertainty of the measurements. The product $v^2r$ uses the radius measured from the centre and the velocity in the frame in which the source is approximately at rest.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" punti="0,0,pieno,O;2,0,pieno,S" vettori="2,0,2,1.33,v;2,0,.9,0,g" xmin=-2.35 xmax=2.9 ymin=-2.35 ymax=2.35 titolo="At S the velocity is tangent to the orbit and the field points towards the centre O"}
:::

:::esempio{titolo="Increasing orbital radius"}
Two circular orbits around the same planet have radii $r$ and $4r$. Since $v$ is proportional to $\dfrac1{\sqrt r}$, the wider orbit has speed $\dfrac{v}{\sqrt4}=\dfrac v2$, half the other. Its path is four times longer. The time per revolution therefore becomes $4\cdot2=8$ times greater. The satellites' mass does not appear in $v$ and $T$, so it plays no part in the comparison.
:::

:::osservazione{titolo="Using the period to measure the radius"}
For the same source, the formula for $T$ gives $\dfrac{T_2}{T_1}=\left(\dfrac{r_2}{r_1}\right)^{\frac32}$, and therefore $\dfrac{r_2}{r_1}=\left(\dfrac{T_2}{T_1}\right)^{\frac23}$: the ratio of periods gives the ratio of radii. A period twice as long corresponds to a radius multiplied by $2^{\frac23}\simeq1.59$. The radius therefore grows less than the period. For an elliptical orbit the same calculation gives the **semimajor axis**, that is, half the longest axis of the ellipse. To find the minimum and maximum distances from the source, the shape of the orbit must also be known.

::grafico{f="x^(3/2)" punti="1,1,pieno;1.587401,2,pieno;4,8,pieno" segmenti="0,2,1.587401,2;1.587401,0,1.587401,2" xmin=0 xmax=4.35 ymin=0 ymax=10 nomi="r/r_1,T/T_1" titolo="Twice the period corresponds to about 1.59 times the reference radius"}
:::

## Kepler's laws

:::teorema{#keplero titolo="Orbital shape, areas and periods"}
An **ellipse** is the closed curve formed by the points for which the sum of the distances from two fixed points, the **foci**, is always the same. An orbit is **bound** when the body stays at a limited distance from the source. The **angular momentum** of a body revolving about a point is $L=mrv_\perp$, where $v_\perp$ is the component of the velocity perpendicular to the radius. The model considered is the two-body model, in which a dominant source attracts a much lighter body. Kepler's three laws are the following.
- **First law.** Bound orbits with nonzero angular momentum are ellipses with the source at a focus. The circle is the case in which the two foci coincide with the centre.
- **Second law.** The segment from the source to the body, called the **radius vector**, sweeps equal areas in equal times.
- **Third law.** The ratio of the square of the period to the cube of the semimajor axis $a$ is the same for all orbits around the same source.

The second law follows from conservation of angular momentum. The torque of a force about a point is the product of the force and the **lever arm**, the distance between the point and the line along which the force acts. The line of the gravitational force passes through the focus, so the lever arm is zero and the torque about the focus is zero; angular momentum therefore stays constant. **Periapsis** is the point of the orbit closest to the source and **apoapsis** is the farthest. Near periapsis the distance is smaller, so to sweep the same area the radius vector must turn through a larger angle. At the two extreme points the velocity is perpendicular to the radius, so $v_\perp=v$ and the product $rv$ has the same value: $r_pv_p=r_av_a$.

By the third law,
$$
\frac{T^2}{a^3}=\frac{4\pi^2}{GM}.
$$
For an ellipse, $a$ is half the sum of the least and greatest distances from the focus. For two orbits around the same source, $\dfrac{T_2}{T_1}=\left(\dfrac{a_2}{a_1}\right)^{\frac32}$. Around different sources the constant changes, because it depends on $GM=\mu$; the comparison must then include the two gravitational parameters:
$$
\frac{T_2}{T_1}=\left(\frac{a_2}{a_1}\right)^{\frac32}\sqrt{\frac{\mu_1}{\mu_2}}.
$$
For example, with the same semimajor axis and $\mu_2=9\mu_1$ the second period is $\sqrt{\dfrac19}=\dfrac13$ of the first.
:::

:::osservazione{titolo="Eccentricity and swept area"}
Let $c$ be the distance from the centre of the ellipse to a focus. The **eccentricity** is $e=\dfrac ca$. It is $0$ for a circle and approaches $1$ for a very elongated ellipse. Along the major axis periapsis is $a$ from the centre and the focus is $c$ from the centre, so $r_p=a-c=a(1-e)$; in the same way $r_a=a+c=a(1+e)$. Periapsis and apoapsis are the points at which the component of the velocity along the radius is zero, because there the distance stops decreasing or increasing.

Over a short interval $\Delta t$, the swept area is approximately that of a triangle with base $r$ and height $v_\perp\Delta t$, that is, $\dfrac12 rv_\perp\Delta t$. The product $mrv_\perp$ is the angular momentum and stays constant, so $\dfrac12rv_\perp$, the area swept in one second, also stays the same along the entire orbit.
:::

:::esempio{titolo="Extreme radii and semimajor axis"}
A satellite ranges from the minimum distance $2R$ to the maximum $6R$. Its semimajor axis is $\dfrac{2R+6R}{2}=4R$. Its period is the same as that of a satellite in a circular orbit of radius $4R$ around the same source. The instantaneous speeds, however, differ. From $r_pv_p=r_av_a$ one gets $v_p=\dfrac{6R}{2R}v_a=3v_a$, so the periapsis speed is three times the apoapsis speed.

::grafico{uguale=1 assi=0 curve="4*cos(t),3.464102*sin(t),0,6.283185" punti="2,0,pieno,F;4,0,pieno,P;-4,0,pieno,A" linee="-4,0 4,0" xmin=-5 xmax=5 ymin=-4 ymax=4 titolo="The apsides P and A are respectively 2R and 6R from focus F"}
:::

:::esempio{titolo="Speed along an elliptical orbit"}
Let $r_p,r_a$ be the periapsis and apoapsis distances and $v_p,v_a$ the magnitudes of the velocities. Conservation of angular momentum gives $v_a=\dfrac{r_p}{r_a}v_p$. Mechanical energy is also conserved, and per unit mass it equals $\dfrac12v^2-\dfrac\mu r$ at every point. One equates the values at the two ends, substitutes $v_a$ and collects terms:
$$
\begin{aligned}
\frac12v_p^2-\frac{\mu}{r_p}&=\frac12\,\frac{r_p^2}{r_a^2}\,v_p^2-\frac{\mu}{r_a}\\[6pt]
v_p^2\,\frac{(r_a-r_p)(r_a+r_p)}{r_a^2}&=2\mu\,\frac{r_a-r_p}{r_pr_a}\\[6pt]
v_p^2&=\frac{2\mu r_a}{r_p(r_p+r_a)}.
\end{aligned}
$$
The second step uses $1-\dfrac{r_p^2}{r_a^2}=\dfrac{r_a^2-r_p^2}{r_a^2}$ and $\dfrac1{r_p}-\dfrac1{r_a}=\dfrac{r_a-r_p}{r_pr_a}$; the third divides by $r_a-r_p$. Substituting $v_p^2$ into the energy at periapsis gives
$$
\frac Em=\frac{\mu r_a}{r_p(r_p+r_a)}-\frac{\mu}{r_p}=-\frac{\mu}{r_p+r_a}=-\frac{\mu}{2a}.
$$
The term $\dfrac Em$ is the mechanical energy per unit mass. Since it remains constant, at every distance $\dfrac12v^2-\dfrac\mu r=-\dfrac\mu{2a}$, that is, $v^2=\mu\left(\dfrac2r-\dfrac1a\right)$. In the ellipse with $a=4R$ the speed varies between the two endpoints shown in the graph. The field, directed towards the source, increases the speed while the satellite approaches and decreases it while it moves away, because in the two legs the component of the velocity along the radius has opposite directions.

::grafico{curve="t,sqrt(24/t-3),2,6" punti="2,3,pieno,P;6,1,pieno,A" xmin=1.85 xmax=6.45 ymin=0 ymax=4 nomi="r/R,v/v_A" titolo="In the ellipse with semimajor axis 4R, v/v_A decreases from three to one between the nearest and farthest points"}
:::

## Orbital energy and escape

:::teorema{#fuga titolo="Bound systems and escape speed"}
In a circular orbit $v^2=\dfrac{GM}{r}$, so the kinetic energy is $K=\dfrac12mv^2=\dfrac{GMm}{2r}$, while the potential energy is $U=-\dfrac{GMm}{r}$. The kinetic energy is therefore half the magnitude of the potential energy, and the total mechanical energy is
$$
E=K+U=\frac{GMm}{2r}-\frac{GMm}{r}=-\frac{GMm}{2r},
$$
negative relative to zero at infinity. The system is called **bound**.

The **minimum escape speed** is the minimum speed with which a body directed outwards can reach infinite distance, where its speed tends to zero. Atmosphere, obstacles and further thrust are neglected. At infinity $U=0$ and $K=0$, so one sets $E=0$, that is, $\dfrac12mv^2=\dfrac{GMm}{r}$, which gives
$$
v_{\mathrm{fuga}}=\sqrt{\frac{2GM}{r}}.
$$
At a given radius escape speed is $\sqrt2$ times circular speed, because it requires twice the kinetic energy of circular motion. With positive initial energy, a kinetic energy equal to $E$ remains at infinity and the speed tends to a nonzero value $v_\infty$; from $\dfrac12mv^2-\dfrac{GMm}{r}=\dfrac12mv_\infty^2$ one obtains $v^2=v_{\mathrm{fuga}}^2+v_\infty^2$. For example, with $v_{\mathrm{fuga}}=8\,\mathrm{km/s}$ and $v_\infty=6\,\mathrm{km/s}$ the required speed is $v=\sqrt{64+36}\,\mathrm{km/s}=10\,\mathrm{km/s}$. With negative energy the body cannot reach infinite distance.

A **geostationary** orbit is an orbit that keeps the satellite always above the same point of the Earth's surface. For this reason the orbit is:
- circular;
- equatorial, that is, in the plane of the equator;
- travelled in the same direction as the Earth's rotation;
- with a period equal to one **sidereal day**, the time of one rotation of the Earth relative to the stars (about $23\,\mathrm h\;56\,\mathrm{min}$).

An orbit inclined to the equator, with the same period, carries the satellite alternately north and south of the equator, so as seen from the ground its latitude changes and the satellite does not stay above the same point.
:::

:::esempio{titolo="Energy to add to a satellite"}
A satellite in circular orbit has $K=4\,\mathrm{MJ}$ and $U=-8\,\mathrm{MJ}$. Its total is $4-8=-4\,\mathrm{MJ}$. An ideal engine thrust, delivered at the same distance, must add at least $4\,\mathrm{MJ}$ of mechanical energy to reach the threshold $E=0$. The potential energy does not change, because the distance is the same, so the kinetic energy goes from $4$ to $8\,\mathrm{MJ}$. The kinetic energy doubles and the speed increases by a factor of $\sqrt2$.
:::

:::osservazione{titolo="The threshold and residual speed"}
The energy per unit mass is $\varepsilon=\dfrac12v^2-\dfrac{\mu}{r}$ (the Greek letter epsilon). The table describes the two-body model with nonzero angular momentum. It assumes that the body can continue without hitting the surface of the source or other obstacles. Parabola and hyperbola are open curves, which do not close up.

| $\varepsilon$ | Ideal trajectory | Behaviour |
| --- | --- | --- |
| Negative | Ellipse or circle | Bounded distance |
| Zero | Parabola | Escape with $v_\infty=0$ |
| Positive | Hyperbola | Escape with $v_\infty>0$ |

At a given starting position, the condition $\varepsilon=0$ sets the minimum escape speed. At every finite distance this speed is still positive. As the body rises, the potential energy tends to zero and the kinetic energy decreases without jumps. For $\varepsilon>0$, instead, the kinetic energy $m\varepsilon$ remains at infinity. If another zero is chosen for the potential energy, the escape threshold is the value assigned to $U(\infty)$, because the physical comparison uses the difference between the initial energy and the energy at infinity.

::grafico{f="sqrt(2/x);sqrt(2+2/x)" punti="1,1.414214,pieno;1,2,pieno" asintoti="y=1.414214" xmin=1 xmax=10 ymin=0 ymax=2.35 nomi="r/R,v/v_c(R)" legenda="\sqrt{2/x};\sqrt{2+2/x}" titolo="At the escape threshold the speed tends to zero. With positive initial energy the speed tends to a nonzero limit."}
:::
