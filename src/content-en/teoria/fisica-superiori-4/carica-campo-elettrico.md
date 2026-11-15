---
titolo: Electric charge, Coulomb's law, and electric fields
sommario: Charge conservation, Coulomb force, vector addition of fields, dipoles, and the motion of charged particles.
---

## Charge and the structure of matter

:::definizione{#carica titolo="Electric charge and quantization"}
**Electric charge** is measured in coulombs, symbol $\mathrm C$. Like charges repel and opposite charges attract. A proton has charge $+e$ and an electron has charge $-e$, with $e\simeq1.60\cdot10^{-19}\,\mathrm C$. When ordinary objects are charged, their net charge is an integer multiple of $e$. An excess of $N$ electrons gives $q=-Ne$. A deficit of $N$ electrons gives $q=+Ne$. A neutral object has positive and negative charges that cancel in the total.

The total charge of an isolated system is conserved. For example, if two initially neutral objects are rubbed together and one acquires $-2.0\,\mathrm{\mu C}$, the other acquires $+2.0\,\mathrm{\mu C}$. In SI units, $1\,\mathrm{\mu C}=10^{-6}\,\mathrm C$ and $1\,\mathrm{nC}=10^{-9}\,\mathrm C$.
:::

:::esempio{titolo="Sign and number of electrons transferred"}
An initially neutral object loses $5.0\cdot10^{12}$ electrons. Since each electron removed takes away negative charge, the object is left with positive charge of magnitude
$$
|q|=(5.0\cdot10^{12})(1.60\cdot10^{-19})\,\mathrm C
=8.0\cdot10^{-7}\,\mathrm C.
$$
Its final charge is therefore $+0.80\,\mathrm{\mu C}$. If the initially neutral object gained the same number of electrons, the magnitude would be the same and the sign would be negative.
:::

## Conductors, insulators, and induction

:::definizione{#conduttori titolo="Mobility of charges"}
In a **conductor**, some charge carriers can move through the material. In metals, they are electrons. In an **insulator**, charges stay more tightly bound to the atomic structure. They can still shift over microscopic distances and produce polarization.

Bring a positively charged rod near an isolated neutral conductor. Electrons gather in the part nearest the rod, leaving a deficit of electrons farther away. The total charge of the conductor stays zero. The near side is attracted and the far side is repelled. Since the interaction is stronger at smaller distances, the conductor can be attracted toward the rod.
:::

:::esempio{titolo="Charging by induction"}
While the positive rod is still nearby, connect the conductor to ground. The connection allows electrons to enter the conductor. If the ground connection is removed while the rod is still present, the added charge remains on the isolated conductor. When the rod is moved away, the excess electrons redistribute. The conductor is left with a negative net charge.

Two identical conducting spheres with initial charges $+6.0$ and $-2.0\,\mathrm{nC}$, brought into contact and then separated under symmetric conditions, split the total charge of $+4.0\,\mathrm{nC}$. Each retains $+2.0\,\mathrm{nC}$. Equal sharing follows from symmetry. In general, conductors in contact reach the same potential.
:::

## Coulomb's law

:::teorema{#coulomb titolo="Force between two point charges"}
Let $q_1$ and $q_2$ be two stationary point charges in vacuum, and let $r>0$ be their separation. The unit vector $\hat r_{12}$ lies along the line joining them and points from $q_1$ to $q_2$. The force exerted by the first charge on the second is
$$
\vec F_{1\to2}=k_e\frac{q_1q_2}{r^2}\hat r_{12},
\qquad
k_e=8.99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
Its **magnitude** is $F=k_e\dfrac{|q_1q_2|}{r^2}$. If $q_1q_2>0$, the force on the second charge points along $\hat r_{12}$ and the charges repel. If $q_1q_2<0$, the force points the other way and the charges attract. The force on the first charge has equal magnitude and opposite direction. The forces act on different bodies.

The point-charge model is appropriate when the dimensions of the bodies are small compared with the separation. In a homogeneous dielectric, use the constant corresponding to the permittivity of the material under the conditions in which the model applies.
:::

:::esempio{titolo="Finding magnitude and direction from the separation"}
The charges $q_1=+2.0\,\mathrm{nC}$ and $q_2=-3.0\,\mathrm{nC}$ are $10\,\mathrm{cm}$ apart, with $q_1$ on the left. Express the charges and separation in SI units:
$$
F=(8.99\cdot10^9)\frac{(2.0\cdot10^{-9})(3.0\cdot10^{-9})}{(0.10)^2}\,\mathrm N
\simeq5.39\cdot10^{-6}\,\mathrm N.
$$
The product of the charges is negative, so the force on $q_2$ points left toward $q_1$. At $20\,\mathrm{cm}$ the same product is divided by a square four times as large, so the magnitude falls to about $1.35\,\mathrm{\mu N}$.

::grafico{f="539.4/x^2" punti="10,5.394,pieno,A;20,1.3485,pieno,B" xmin=7 xmax=26 ymin=0 ymax=10 nomi="r,F (µN)" titolo="Force between the charges. The separation r is in centimeters"}
:::

## Electric field

:::definizione{#campo titolo="Force per unit test charge"}
The **electric field** at a point is the force per unit positive test charge. Use a charge $q_0$ small enough that it does not appreciably alter the source distribution:
$$
\vec E=\frac{\vec F}{q_0}.
$$
The field is measured in $\mathrm{N/C}$ and depends on the sources and the observation point. A charge $q$ placed there experiences $\vec F=q\vec E$. For $q>0$ the force points along the field. For $q<0$ it points the other way. For example, $q=-2.0\,\mathrm{nC}$ in a field of $300\,\mathrm{N/C}$ pointing to the right experiences a force of magnitude $6.0\cdot10^{-7}\,\mathrm N$ pointing to the left.

For a point source $Q$, let $\hat r$ be the unit vector pointing from the source to the observation point. The Coulomb force on $q_0$ contains the product $Qq_0$. Dividing by $q_0$ gives
$$
\vec E_Q=k_e\frac Q{r^2}\hat r.
$$
A positive source produces a radially outward field. A negative source produces a radially inward field. The field direction depends on the sign of $Q$, while the direction of the force on the test charge also depends on its own sign.

The point-charge model applies for $r>0$. It is singular at the source position, so exclude that point when looking for locations where the total field vanishes.
:::

:::esempio{titolo="The field reverses across the source"}
If $Q=-4\,\mathrm{nC}$ is at the origin, the field on the right points left and the field on the left points right. Two points equally distant from $Q$ have fields of equal magnitude and opposite direction.

::grafico{assi=0 uguale=1 punti="0,0,pieno,−4 nC" vettori="2,0,0.6,0;-2,0,-0.6,0;0,2,0,0.6;0,-2,0,-0.6;1.5,1.5,0.5,0.5;-1.5,1.5,-0.5,0.5" unicolore=1 xmin=-3 xmax=3 ymin=-2.5 ymax=2.5 titolo="Arrows show the field direction around a negative source"}
:::

## Superposition of electric fields

:::teorema{#sovrapposizione titolo="Vector addition"}
The field produced by several sources is the vector sum of the fields each would produce on its own at the point:
$$
\vec E_{\mathrm{tot}}=\vec E_1+\vec E_2+\cdots.
$$
On a line, choose a positive direction and add the signed components. In a plane, add horizontal and vertical components separately. If $E_x$ and $E_y$ are the components of the sum, its magnitude is $\sqrt{E_x^2+E_y^2}$. The signs of the components determine the quadrant of the vector.

At the midpoint of two equal positive sources, the two arrows point in opposite directions and the fields cancel. At the midpoint of a pair with opposite signs, both contributions point from the positive source toward the negative one. They therefore add even when the source magnitudes are equal.
:::

:::esempio{titolo="Two perpendicular contributions"}
A charge $Q_1=+3.0\,\mathrm{nC}$ is $30\,\mathrm{cm}$ to the left of $P$. A charge $Q_2=-4.0\,\mathrm{nC}$ is $30\,\mathrm{cm}$ above $P$. Choose axes to the right and upward and approximate $k_e$ as $9.0\cdot10^9\,\mathrm{N\,m^2/C^2}$. At $P$, the first field points *away* from $Q_1$, to the right. The second points toward $Q_2$, upward. Thus
$$
\begin{aligned}
E_x&=\frac{9.0\cdot10^9\cdot3.0\cdot10^{-9}}{0.30^2}\,\mathrm{N/C}=300\,\mathrm{N/C},\\
E_y&=\frac{9.0\cdot10^9\cdot4.0\cdot10^{-9}}{0.30^2}\,\mathrm{N/C}=400\,\mathrm{N/C},\\
E_{\mathrm{tot}}&=\sqrt{300^2+400^2}\,\mathrm{N/C}=500\,\mathrm{N/C}.
\end{aligned}
$$
The field is in the first quadrant and makes an angle $\arctan(\dfrac{400}{300})\simeq53^\circ$ with the horizontal axis.

::grafico{assi=0 uguale=1 punti="-3,0,pieno,+3 nC;0,3,pieno,−4 nC;0,0,pieno" etichette="-0.48,-0.20,P" vettori="0,0,1.2,0,E1;0,0,0,1.6,E2;0,0,1.2,1.6,E" segmenti="1.2,0,1.2,1.6;0,1.6,1.2,1.6" xmin=-4.5 xmax=3.5 ymin=-1 ymax=4.0 titolo="The two perpendicular contributions and their resultant at P"}
:::

## Field lines and electric dipoles

:::definizione{#linee titolo="Field representation and dipole moment"}
**Field lines** are tangent to the field at every point and point in the direction of the force on a positive charge. In electrostatics, they start at positive sources or at infinity and end at negative sources or at infinity. Lines do not cross where the field is defined and nonzero, because the vector has a unique direction there.

An **electric dipole** consists of charges $+q$ and $-q$ separated by distance $d$. The dipole moment $\vec p$ points from the negative charge to the positive one and has magnitude $p=qd$. In a uniform external field, the forces $+q\vec E$ and $-q\vec E$ sum to zero. They act at different points and can produce a rotation. If $\theta$ is the angle between $\vec p$ and $\vec E$, the torque magnitude is $M=pE\sin\theta$.

For $q=1.0\,\mathrm{nC}$, $d=2.0\,\mathrm{cm}$, and $E=1000\,\mathrm{N/C}$, the maximum torque is $2.0\cdot10^{-8}\,\mathrm{N\,m}$. It is reached at $90^\circ$, when the moment arm of the force couple is $d$. In parallel and antiparallel orientations the lines of action coincide and the torque is zero. The parallel orientation is stable because a small rotation produces a torque opposing the rotation.
:::

## Motion in a uniform field

:::teorema{#moto-campo titolo="Acceleration in an electric field"}
If the field is uniform and other forces are negligible, the electric force is constant. A particle of mass $m$ and charge $q$ therefore has acceleration
$$
\vec a=\frac qm\vec E.
$$
The sign of the charge determines whether the acceleration points along the field or opposite it. A particle released from rest begins to move in the direction of acceleration. Its initial velocity may instead be opposite that vector, in which case the particle slows to a stop before reversing, if it stays in the field long enough.
:::

:::esempio{titolo="Entering perpendicular to the field"}
Take $x$ horizontal and $y$ along the field. A particle starts at the origin with horizontal velocity $v_0>0$. Since $a_x=0$, motion along $x$ is uniform. Since $a_y=qE/m$ and $v_y(0)=0$, motion along $y$ has constant acceleration:
$$
x=v_0t,
\qquad y=\frac{qE}{2m}t^2
=\frac{qE}{2mv_0^2}x^2.
$$
The path is parabolic. For a negative charge, $y<0$ at $t>0$. The result applies while the particle is in the uniform-field region and its speeds remain small relative to the speed of light.
:::

## Equilibrium and choosing the point

:::osservazione{#equilibrio titolo="Zero field and zero force"}
A nonzero test charge experiences zero electric force where the total field vanishes. For two point sources to cancel, their contributions must lie in the same direction and point in opposite senses. Away from the line through the sources, the two radial vectors are not collinear. On that line, find the regions where the fields are opposite and equate the magnitudes only in those regions.

For positive charges $Q$ and $4Q$ separated by $d$, the cancellation point lies between the sources. If $x$ is the distance from $Q$ with $0<x<d$, then
$$
\frac{k_eQ}{x^2}=\frac{4k_eQ}{(d-x)^2}
\quad\Longrightarrow\quad d-x=2x
\quad\Longrightarrow\quad x=\frac d3.
$$
Take the positive square root because $x$ and $d-x$ are positive distances. The point is closer to $Q$, which needs a shorter distance to match the contribution from the stronger source.
:::

:::esempio{titolo="Cancellation outside two opposite charges"}
Place $+Q$ at the origin and $-4Q$ at coordinate $d>0$. Between the sources, both fields point to the right. To the right of the second source, the contribution from $-4Q$ is greater because that source has a larger magnitude and is closer. That leaves the region to the left of $+Q$. Let $s>0$ be the distance from $+Q$. The contribution from $+Q$ points left and the contribution from $-4Q$ points right. Equating the magnitudes gives
$$
\frac{Q}{s^2}=\frac{4Q}{(d+s)^2}
\quad\Longrightarrow\quad d+s=2s
\quad\Longrightarrow\quad s=d.
$$
The point has coordinate $-d$. If the two sources had equal magnitude and opposite signs, the outside contributions could match only at equal distances from the sources. On the line that only happens at the midpoint, where both fields point in the same direction. In that case there is no cancellation point at any finite distance.
:::
