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

## Field and weight

:::definizione{#campo-gravitazionale titolo="Force per unit test mass"}
The **gravitational field** is the force per unit test mass. Outside a spherically symmetric body of mass $M$, its magnitude is $g(r)=GM/r^2$ and it points towards the centre. The unit $\mathrm{N/kg}$ equals $\mathrm{m/s^2}$. A body of mass $m$ has weight of magnitude $mg(r)$. Unlike weight, the field depends on the source and point and is independent of the mass used to measure it.

From the surface to distance $2R$, the value drops to one quarter. From the surface to *altitude* $2R$, the distance is $3R$ and the value drops to one ninth. Where several sources act, add their fields as vectors. Along an axis between two masses, the components can cancel even though neither is zero. Outside the intervening segment they point the same way.
:::

:::esempio{titolo="Field one radius above the surface"}
For a planet with surface field $g_0=12\,\mathrm{m/s^2}$, at altitude $R$ the field is $g_0/4=3\,\mathrm{m/s^2}$. A $2\,\mathrm{kg}$ object weighs $24\,\mathrm N$ at the surface and $6\,\mathrm N$ at that altitude. Its mass stays fixed, and the ratio of weights equals the ratio of local fields.

::grafico{f="12/x^2" punti="1,12,pieno,A;2,3,pieno,B" xmin=.85 xmax=4 ymin=0 ymax=16 nomi="r/R,g (m/s²)" titolo="A is the surface and B is twice as far from the centre"}
:::

## Gravitational energy

:::teorema{#energia-gravitazionale titolo="Energy zero at infinity"}
For mass $m$ outside a spherical source $M$, taking zero at infinite separation gives $U(r)=-GMm/r$. Bringing the body closer makes $U$ more negative; moving it away raises $U$ towards zero. From $r_i$ to $r_f$, gravity does work
$$
W_g=-\Delta U=GMm\left(\frac1{r_f}-\frac1{r_i}\right).
$$
Work is negative when distance increases. The potential alone cannot determine whether the body escapes. Its kinetic energy must also be added.

For an ascent of height $h$ from radius $R$, the exact difference is $GMmh/[R(R+h)]$. If $h\ll R$, the denominator is nearly $R^2$ and the difference is approximately $m g_0 h$. The ratio of the constant-gravity estimate to the exact difference is $1+h/R$. Relative error is small for low altitudes. If $h$ is comparable with $R$, the approximation overestimates the difference. Taking a local zero at ground level does not affect this comparison of differences.
:::

:::esempio{titolo="A transfer between two radii"}
When $r$ goes from $R$ to $2R$, energy changes from $-GMm/R$ to $-GMm/(2R)$. Moving the body out requires an energy input: its potential rises by $GMm/(2R)$. Keeping gravity equal to its surface value would estimate $mg_0R=GMm/R$, twice the exact difference.

::grafico{f="-1/x" punti="1,-1,pieno,A;2,-.5,pieno,B" xmin=.8 xmax=4 ymin=-1.5 ymax=.25 nomi="r/R,normalised U" titolo="The potential rises towards zero as r increases"}
:::

## Circular orbits

:::teorema{#orbite titolo="Gravity supplies centripetal acceleration"}
For a satellite much less massive than $M$, write $\mu=GM$ for the source's **gravitational parameter**. In a circular orbit of radius $r$, the field $\mu/r^2$ supplies exactly the centripetal acceleration $v^2/r$. Hence
$$
v=\sqrt{\frac\mu r},\qquad
T=\frac{2\pi r}{v}=2\pi\sqrt{\frac{r^3}{\mu}}.
$$
The two dependencies differ. Force falls as inverse radius squared, while circular speed decreases only as the inverse square root of radius. Period grows because a longer circumference is travelled at a lower speed.

The calculation assumes that gravity is the only significant force and that velocity is tangent to the circle. A different speed at that same position, or a radial component, generally yields a different trajectory. Apparent weightlessness in an orbiting vehicle comes from shared free fall. Vehicle and astronaut have nearly identical gravitational accelerations, so there is often no support force.
:::

:::esempio{titolo="Increasing orbital radius"}
Two circular orbits around the same planet have radii $r$ and $4r$. The wider orbit has half the speed and four times the path length. Its time per revolution is therefore eight times greater. The satellites' masses cancel before the comparison.
:::

## Kepler's laws

:::teorema{#keplero titolo="Orbital shape, areas and periods"}
In the two-body model with a dominant source, bound orbits are ellipses with the source at a focus. A circle is the case of coinciding foci. The force's line of action passes through the focus, so torque about it is zero. Angular momentum conservation makes the radius vector sweep equal areas in equal times. Near periapsis the smaller distance requires a larger angular motion to sweep the same area. At the two distance extremes velocity is tangent to the path and $rv$ has the same value.

The ratio $T^2/a^3=4\pi^2/(GM)$ uses semimajor axis $a$. For an ellipse, $a$ is half the sum of the least and greatest distances from a focus. For two orbits around the same source, $T_2/T_1=(a_2/a_1)^{3/2}$. For different sources the constant changes, and the comparison must include both gravitational parameters.
:::

:::esempio{titolo="Extreme radii and semimajor axis"}
A satellite ranges from the minimum distance $2R$ to the maximum $6R$. Its semimajor axis is $4R$. Its period agrees with a circular orbit of radius $4R$ around the same source. Instantaneous speeds differ: conserving $rv$ at the extremes gives a periapsis speed three times its apoapsis speed.

::grafico{uguale=1 assi=0 curve="4*cos(t),3.464102*sin(t),0,6.283185" punti="2,0,pieno,F;4,0,pieno,A;-4,0,pieno,B" linee="-4,0 4,0" xmin=-5 xmax=5 ymin=-4 ymax=4 titolo="Endpoints A and B are respectively 2R and 6R from focus F"}
:::

## Orbital energy and escape

:::teorema{#fuga titolo="Bound systems and escape speed"}
In a circular orbit $K=GMm/(2r)$ and $U=-GMm/r$. Total mechanical energy is therefore $E=-GMm/(2r)$, negative relative to zero at infinity. The **escape speed** is the minimum speed for a body directed outwards to approach infinity with speed tending to zero, neglecting atmosphere, obstacles and further thrust. Setting $E=0$ gives
$$
v_{\mathrm{fuga}}=\sqrt{\frac{2GM}{r}}.
$$
At a given radius escape speed is $\sqrt2$ times circular speed, since it needs twice the circular kinetic energy. For positive initial energy, speed at infinity tends to a nonzero value. With negative energy the body cannot reach infinite distance under the model.

A geostationary orbit is circular, equatorial and prograde, with a period of one sidereal day. An inclined orbit of the same period is insufficient to stay above the same point on the surface. Inclination would cause its latitude as seen from the ground to vary.
:::

:::esempio{titolo="Energy to add to a satellite"}
A satellite in circular orbit has $K=4\,\mathrm{MJ}$ and $U=-8\,\mathrm{MJ}$. Its total is $-4\,\mathrm{MJ}$. An ideal thrust at that same distance must add at least $4\,\mathrm{MJ}$ of mechanical energy to reach the threshold $E=0$. Kinetic energy then goes from $4$ to $8\,\mathrm{MJ}$ and speed increases by a factor of $\sqrt2$.
:::
