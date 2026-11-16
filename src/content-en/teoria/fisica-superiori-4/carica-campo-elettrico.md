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

:::esempio{titolo="How many electrons make a coulomb"}
The number of electrons carrying the charge $-1\,\mathrm C$ is found by dividing the charge by that of one electron:
$$
N=\frac{1\,\mathrm C}{1.60\cdot10^{-19}\,\mathrm C}=6.25\cdot10^{18}.
$$
An object with charge $1\,\mathrm{\mu C}$ instead has an excess of $6.25\cdot10^{12}$ electrons. With so many carriers, adding a single electron changes the charge by one part in $6.25\cdot10^{12}$, so in ordinary objects quantization is not noticeable.
:::

:::attenzione
An object with $3.2\cdot10^{12}$ *excess* electrons has negative charge, $-5.12\cdot10^{-7}\,\mathrm C$, because each additional electron carries $-e$. The same number of *missing* electrons would give $+5.12\cdot10^{-7}\,\mathrm C$. A charge of $4.0\cdot10^{-19}\,\mathrm C$ cannot be realized on an ordinary object, because $\dfrac{4.0\cdot10^{-19}}{1.60\cdot10^{-19}}=2.5$ is not an integer.
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

:::esempio{titolo="Distribution of the induced charge"}
A positive rod is held near the left end of an isolated neutral conductor. The conduction electrons move toward the rod, so the left end becomes negative and the right end, from which the electrons have moved away, becomes positive. The total charge of the conductor remains zero, so the two induced charges have the same magnitude: if $-0.30\,\mathrm{nC}$ accumulates at the left end, $+0.30\,\mathrm{nC}$ is found at the right end.

::grafico{assi=0 uguale=1 poligoni="-3.8,-0.6 -2,-0.6 -2,0.6 -3.8,0.6;-1,-0.8 3,-0.8 3,0.8 -1,0.8" etichette="-2.9,0,+ + +;-0.6,0,− − −;2.5,0,+ + +;-2.9,1.1,rod;1,1.3,conductor" xmin=-4.3 xmax=3.6 ymin=-1.5 ymax=1.8 titolo="Positive rod on the left and neutral conductor with the induced charges at its two ends"}
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

::grafico{f="539.4/x^2" punti="10,5.394,pieno,A;20,1.3485,pieno,B" xmin=7 xmax=26 ymin=0 ymax=10 nomi="r,F (µN)" titolo="Force between the two charges. The separation r is in centimeters"}
:::

:::esempio{titolo="Repulsion and attraction with the same charges"}
Two charges with magnitudes $1.0\,\mathrm{nC}$ and $4.0\,\mathrm{nC}$ are $10\,\mathrm{cm}$ apart. The magnitude of the force does not depend on the signs:
$$
F=(8.99\cdot10^9)\frac{(1.0\cdot10^{-9})(4.0\cdot10^{-9})}{(0.10)^2}\,\mathrm N\simeq3.60\cdot10^{-6}\,\mathrm N.
$$
If both charges are positive, the forces point outward. If the second is negative, the forces point inward. In every case the two forces have the same magnitude, even if the charges are different.

::grafico{assi=0 uguale=1 punti="0,1,pieno,+1 nC;4,1,pieno,+4 nC;0,-1,pieno,+1 nC;4,-1,pieno,−4 nC" vettori="0,1,-1.6,1;4,1,5.6,1;0,-1,1.6,-1;4,-1,2.4,-1" unicolore=1 xmin=-2.5 xmax=6.5 ymin=-2 ymax=2 titolo="At the top the forces are repulsive, at the bottom attractive. All four have magnitude $3.60\,\mathrm{\mu N}$."}
:::

:::esempio{titolo="Electric force and gravitational force"}
For a proton and an electron both forces decrease as $\dfrac{1}{r^2}$, so their ratio does not depend on the separation:
$$
\frac{F_{\mathrm{el}}}{F_{\mathrm{gr}}}=\frac{k_ee^2}{Gm_pm_e}
=\frac{(8.99\cdot10^9)(1.60\cdot10^{-19})^2}{(6.67\cdot10^{-11})(1.67\cdot10^{-27})(9.11\cdot10^{-31})}\simeq2.27\cdot10^{39}.
$$
At the atomic level the gravitational force is therefore negligible. Between macroscopic bodies the positive and negative charges almost cancel, so the net electric force is much smaller and gravitational attraction can prevail.
:::

:::esempio{titolo="Three collinear charges"}
The charges $q_1=+2.0\,\mathrm{nC}$, $q_2=-3.0\,\mathrm{nC}$, and $q_3=+1.0\,\mathrm{nC}$ lie on the $x$ axis at positions $0$, $0.10\,\mathrm m$, and $0.25\,\mathrm m$. The force on $q_2$ is the vector sum of the forces exerted by $q_1$ and $q_3$, each computed as if the other were absent. The charge $q_1$ attracts $q_2$ to the left, at distance $0.10\,\mathrm m$. The charge $q_3$ attracts $q_2$ to the right, at distance $0.15\,\mathrm m$. With the axis pointing right,
$$
\begin{aligned}
F_x&=-k_e\frac{|q_1q_2|}{(0.10)^2}+k_e\frac{|q_3q_2|}{(0.15)^2}\\[6pt]
&=(-5.39+1.20)\cdot10^{-6}\,\mathrm N\\[6pt]
&\simeq-4.2\cdot10^{-6}\,\mathrm N.
\end{aligned}
$$
The resultant force points left and has magnitude $4.2\,\mathrm{\mu N}$.
:::

:::osservazione{titolo="Attraction of a neutral insulator"}
A charged rod also attracts small pieces of paper, which are neutral insulators. In the molecules of the paper the charges shift slightly and each molecule becomes polarized: the charge of sign opposite to that of the rod lies on the side facing the rod. That charge is closer to the source than the other, so the attraction exceeds the repulsion. For a source $Q=+20\,\mathrm{nC}$, an induced charge of magnitude $1.0\,\mathrm{pC}$ at $5.0\,\mathrm{cm}$ and the other, equal and of opposite sign, $1.0\,\mathrm{mm}$ farther away, the attractive force is $7.19\cdot10^{-8}\,\mathrm N$ and the repulsive one $6.91\cdot10^{-8}\,\mathrm N$. The difference is a net attraction of about $2.8\cdot10^{-9}\,\mathrm N$.
:::

:::osservazione{titolo="The Coulomb constant and the permittivity"}
The Coulomb constant is also written $k_e=\dfrac{1}{4\pi\varepsilon_0}$, where $\varepsilon_0=8.85\cdot10^{-12}\,\mathrm{C^2/(N\,m^2)}$ is the electric permittivity of vacuum. The numerical calculation confirms the value given above:
$$
\frac{1}{4\pi\cdot8.85\cdot10^{-12}}\,\mathrm{N\,m^2/C^2}\simeq8.99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
The form with $\varepsilon_0$ is the one that appears in Gauss's theorem and in the capacitance of capacitors, treated in later topics.
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

:::esempio{titolo="How the field decreases with distance"}
For $Q=+2.0\,\mathrm{nC}$ the magnitude of the field is $E=\dfrac{k_eQ}{r^2}=\dfrac{17.98}{r^2}\,\mathrm{N/C}$, with $r$ in meters. We obtain $71.9\,\mathrm{N/C}$ at $0.50\,\mathrm m$, $18.0\,\mathrm{N/C}$ at $1.0\,\mathrm m$, and $4.5\,\mathrm{N/C}$ at $2.0\,\mathrm m$. Each time the distance doubles, the field becomes one fourth.

::grafico{f="17.98/x^2" punti="0.5,71.92,pieno,A;1,17.98,pieno,B;2,4.495,pieno,C" xmin=0 xmax=3 ymin=0 ymax=100 nomi="r,E (N/C)" titolo="Magnitude of the field of a $2.0\,\mathrm{nC}$ point source. The distance $r$ is in meters."}
:::

:::attenzione
The field at a point does not depend on the test charge. Where $E=300\,\mathrm{N/C}$, a charge $q_0=1.0\,\mathrm{nC}$ experiences $0.30\,\mathrm{\mu N}$ and a charge $q_0=2.0\,\mathrm{nC}$ experiences $0.60\,\mathrm{\mu N}$, but in both cases $\dfrac{F}{q_0}=300\,\mathrm{N/C}$. Moreover, a larger charge does not experience a larger force: with $q_1=1.0\,\mathrm{nC}$ and $q_2=4.0\,\mathrm{nC}$ at $10\,\mathrm{cm}$ the force has magnitude $3.60\,\mathrm{\mu N}$ on both. The field of $q_2$ at the position of $q_1$ is $3596\,\mathrm{N/C}$, that of $q_1$ at the position of $q_2$ is $899\,\mathrm{N/C}$, and the two products $q_1\cdot3596$ and $q_2\cdot899$ coincide.
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

::::teorema{#asse-coppia titolo="Field on the axis of a pair of equal charges"}
Two equal charges $Q$ are at the points $(-a,0)$ and $(a,0)$. At a point $(0,y)$ with $y>0$ the total field is parallel to the $y$ axis, points upward if $Q>0$ and downward if $Q<0$, and has magnitude
$$
E=\frac{2k_e|Q|\,y}{\left(y^2+a^2\right)^{\frac{3}{2}}}.
$$
For $y\gg a$ the magnitude tends to $\dfrac{2k_e|Q|}{y^2}$, that is, to the field of a single charge $2Q$ placed at the origin. The formula gives the field at every point of the axis in a single calculation, without resolving the two contributions each time.

:::dimostrazione
The point $P=(0,y)$ is at distance $r=\sqrt{y^2+a^2}$ from each charge, so the two contributions have the same magnitude $E_1=\dfrac{k_e|Q|}{r^2}$. For the vector sum we add the components. The field of each charge makes with the $y$ axis an angle $\alpha$ such that $\sin\alpha=\dfrac{a}{r}$ and $\cos\alpha=\dfrac{y}{r}$. The horizontal components, of magnitude $E_1\sin\alpha$, have opposite directions and cancel. The vertical components, of magnitude $E_1\cos\alpha$, have the same direction and add. The total field is therefore
$$
E=2E_1\cos\alpha=2\frac{k_e|Q|}{r^2}\cdot\frac{y}{r}=\frac{2k_e|Q|\,y}{r^3},
$$
which with $r=\left(y^2+a^2\right)^{\frac{1}{2}}$ is the stated formula. For $y\gg a$ we have $r\simeq y$, so $E\simeq\dfrac{2k_e|Q|}{y^2}$.
:::
::::

:::esempio{titolo="Field on the axis at two distances"}
With $Q=2.0\,\mathrm{nC}$ and $a=0.20\,\mathrm m$, at the point $y=0.15\,\mathrm m$ the distance from the charges is $r=\sqrt{0.15^2+0.20^2}\,\mathrm m=0.25\,\mathrm m$ and
$$
E=\frac{2(8.99\cdot10^9)(2.0\cdot10^{-9})(0.15)}{(0.25)^3}\,\mathrm{N/C}\simeq345\,\mathrm{N/C}.
$$
At $y=3.0\,\mathrm m$ the exact formula gives $3.97\,\mathrm{N/C}$ and the approximate one $\dfrac{2k_eQ}{y^2}$ gives $4.00\,\mathrm{N/C}$, a difference of about $0.7\%$.

::grafico{assi=0 uguale=1 punti="-2,0,pieno,+Q;2,0,pieno,+Q;0,1.5,pieno" etichette="-0.35,1.15,P;-1.25,0.45,r;-0.3,0.6,y;-1,-0.4,a" segmenti="-2,0,0,1.5;2,0,0,1.5;0,0,0,1.5" vettori="0,1.5,1.2,2.4,E1;0,1.5,-1.2,2.4,E2;0,1.5,0,3.3,E" xmin=-3.2 xmax=3.2 ymin=-1 ymax=3.8 titolo="With $a=0.20\,\mathrm m$ and $y=0.15\,\mathrm m$ the horizontal components of $\vec E_1$ and $\vec E_2$ cancel and the vertical ones remain."}
:::

## Field lines and electric dipoles

:::definizione{#linee titolo="Field representation and dipole moment"}
**Field lines** are tangent to the field at every point and point in the direction of the force on a positive charge. In electrostatics, they start at positive sources or at infinity and end at negative sources or at infinity. Lines do not cross where the field is defined and nonzero, because the vector has a unique direction there.

An **electric dipole** consists of charges $+q$ and $-q$ separated by distance $d$. The dipole moment $\vec p$ points from the negative charge to the positive one and has magnitude $p=qd$. In a uniform external field, the forces $+q\vec E$ and $-q\vec E$ sum to zero. They act at different points and can produce a rotation. If $\theta$ is the angle between $\vec p$ and $\vec E$, the torque magnitude is $M=pE\sin\theta$.

For $q=1.0\,\mathrm{nC}$, $d=2.0\,\mathrm{cm}$, and $E=1000\,\mathrm{N/C}$, the maximum torque is $2.0\cdot10^{-8}\,\mathrm{N\,m}$. It is reached at $90^\circ$, when the moment arm of the force couple is $d$. In parallel and antiparallel orientations the lines of action coincide and the torque is zero. The parallel orientation is stable because a small rotation produces a torque opposing the rotation.
:::

:::esempio{titolo="Field lines of two opposite charges"}
The lines leave the positive charge and end on the negative one. On the segment joining the charges the line is straight, the others curve. The field is stronger where the lines are closer together, that is, near the charges. At points equidistant from the two charges the field is parallel to the segment joining them and points from the positive to the negative charge, because the components perpendicular to the segment have opposite directions and cancel, while the parallel ones have the same direction.

::grafico{assi=0 uguale=1 linee="-0.91,0.05 -0.74,0.15 -0.56,0.24 -0.38,0.32 -0.18,0.37 0.01,0.39 0.21,0.36 0.40,0.31 0.59,0.23 0.77,0.13 0.94,0.04 0.94,0.04;-0.95,0.09 -0.85,0.26 -0.74,0.42 -0.61,0.58 -0.46,0.71 -0.29,0.82 -0.10,0.88 0.10,0.88 0.29,0.82 0.46,0.72 0.61,0.58 0.73,0.43 0.85,0.26 0.95,0.09 0.97,0.06;-1.00,0.10 -1.00,0.30 -0.99,0.50 -0.96,0.70 -0.92,0.89 -0.85,1.08 -0.76,1.26 -0.64,1.42 -0.50,1.56 -0.33,1.66 -0.14,1.72 0.06,1.73 0.26,1.69 0.44,1.60 0.59,1.48 0.72,1.33 0.82,1.15 0.89,0.97 0.95,0.78 0.98,0.58 0.99,0.38 1.00,0.18 1.00,0.10;-1.05,0.09 -1.15,0.26 -1.24,0.44 -1.33,0.62 -1.40,0.80 -1.47,0.99 -1.53,1.18 -1.57,1.38 -1.60,1.58 -1.62,1.78 -1.62,1.98 -1.61,2.18 -1.58,2.37 -1.53,2.57 -1.47,2.76 -1.41,2.90;-1.09,0.05 -1.26,0.15 -1.43,0.25 -1.60,0.36 -1.77,0.47 -1.93,0.58 -2.09,0.70 -2.25,0.82 -2.41,0.95 -2.56,1.08 -2.71,1.21 -2.86,1.34 -3.00,1.48 -3.15,1.62 -3.28,1.77 -3.42,1.92 -3.55,2.07 -3.68,2.22 -3.80,2.38 -3.92,2.54 -4.04,2.70 -4.15,2.86 -4.20,2.93;-1.10,0.01 -1.30,0.04 -1.49,0.07 -1.69,0.10 -1.89,0.13 -2.09,0.16 -2.29,0.20 -2.48,0.23 -2.68,0.27 -2.88,0.30 -3.07,0.34 -3.27,0.38 -3.46,0.42 -3.66,0.46 -3.86,0.50 -4.05,0.54 -4.21,0.58;-0.91,-0.05 -0.74,-0.15 -0.56,-0.24 -0.38,-0.32 -0.18,-0.37 0.01,-0.39 0.21,-0.36 0.40,-0.31 0.59,-0.23 0.77,-0.13 0.94,-0.04 0.94,-0.04;-0.95,-0.09 -0.85,-0.26 -0.74,-0.42 -0.61,-0.58 -0.46,-0.71 -0.29,-0.82 -0.10,-0.88 0.10,-0.88 0.29,-0.82 0.46,-0.72 0.61,-0.58 0.73,-0.43 0.85,-0.26 0.95,-0.09 0.97,-0.06;-1.00,-0.10 -1.00,-0.30 -0.99,-0.50 -0.96,-0.70 -0.92,-0.89 -0.85,-1.08 -0.76,-1.26 -0.64,-1.42 -0.50,-1.56 -0.33,-1.66 -0.14,-1.72 0.06,-1.73 0.26,-1.69 0.44,-1.60 0.59,-1.48 0.72,-1.33 0.82,-1.15 0.89,-0.97 0.95,-0.78 0.98,-0.58 0.99,-0.38 1.00,-0.18 1.00,-0.10;-1.05,-0.09 -1.15,-0.26 -1.24,-0.44 -1.33,-0.62 -1.40,-0.80 -1.47,-0.99 -1.53,-1.18 -1.57,-1.38 -1.60,-1.58 -1.62,-1.78 -1.62,-1.98 -1.61,-2.18 -1.58,-2.37 -1.53,-2.57 -1.47,-2.76 -1.41,-2.90;-1.09,-0.05 -1.26,-0.15 -1.43,-0.25 -1.60,-0.36 -1.77,-0.47 -1.93,-0.58 -2.09,-0.70 -2.25,-0.82 -2.41,-0.95 -2.56,-1.08 -2.71,-1.21 -2.86,-1.34 -3.00,-1.48 -3.15,-1.62 -3.28,-1.77 -3.42,-1.92 -3.55,-2.07 -3.68,-2.22 -3.80,-2.38 -3.92,-2.54 -4.04,-2.70 -4.15,-2.86 -4.20,-2.93;-1.10,-0.01 -1.30,-0.04 -1.49,-0.07 -1.69,-0.10 -1.89,-0.13 -2.09,-0.16 -2.29,-0.20 -2.48,-0.23 -2.68,-0.27 -2.88,-0.30 -3.07,-0.34 -3.27,-0.38 -3.46,-0.42 -3.66,-0.46 -3.86,-0.50 -4.05,-0.54 -4.21,-0.58;-0.9,0 0.9,0" vettori="-0.14,0.39,0.16,0.38;-0.13,0.89,0.17,0.88;-0.13,1.74,0.17,1.73;-1.56,1.31,-1.61,1.61;-2.72,1.21,-2.94,1.42;-2.53,0.24,-2.83,0.29;-0.14,-0.39,0.16,-0.38;-0.13,-0.89,0.17,-0.88;-0.13,-1.74,0.17,-1.73;-1.56,-1.31,-1.61,-1.61;-2.72,-1.21,-2.94,-1.42;-2.53,-0.24,-2.83,-0.29;-0.15,0,0.15,0" unicolore=1 punti="-1,0,pieno,+q;1,0,pieno,−q" xmin=-4.4 xmax=2.6 ymin=-3 ymax=3 titolo="Some field lines of a pair of equal and opposite charges. The direction is that of the force on a positive test charge."}
:::

:::richiamo{titolo="Force on a charge in a field"}
At a point where the field is $\vec E$, a charge $q$ experiences the force $\vec F=q\vec E$.
:::

:::richiamo{titolo="Moment of a force"}
A force of magnitude $F$ whose line of action is at distance $b$ from a point $O$ has, with respect to $O$, a moment of magnitude $Fb$.
:::

::::teorema{#momento-dipolo titolo="Torque on a dipole"}
A dipole of moment $\vec p$ is in a uniform electric field $\vec E$ and $\theta$ is the angle between $\vec p$ and $\vec E$. The total force on the dipole is zero and the magnitude of the moment of the forces about the center of the dipole is
$$
M=pE\sin\theta.
$$
The torque tends to rotate the dipole until it is aligned with $\vec E$. The formula gives the value of the couple in every orientation and identifies the equilibrium positions, $\theta=0$ and $\theta=180^\circ$, where $M=0$.

:::dimostrazione
The force $q\vec E$ acts on the charge $+q$ and $-q\vec E$ acts on the charge $-q$. Their sum is zero. Since the total force is zero, the total moment is the same about any point, and it is computed about the center $O$ of the dipole. The two charges are at distance $\dfrac{d}{2}$ from $O$ and the line of action of each force is parallel to $\vec E$, so it makes with the segment joining $O$ to the charge an angle $\theta$ or $180^\circ-\theta$. The moment arm of each force is therefore $b=\dfrac{d}{2}\sin\theta$. Each of the two forces has magnitude $qE$, so each moment has magnitude $qE\cdot\dfrac{d}{2}\sin\theta$. The two moments have the same sense of rotation, because the forces are opposite and applied at opposite points with respect to $O$. The total moment therefore has magnitude
$$
M=2\cdot qE\frac{d}{2}\sin\theta=qd\,E\sin\theta=pE\sin\theta.
$$
:::
::::

:::esempio{titolo="Molecular dipole in a field"}
A polar molecule has dipole moment $p=6.2\cdot10^{-30}\,\mathrm{C\,m}$ and is in a uniform field $E=1.0\cdot10^5\,\mathrm{N/C}$. The maximum moment, at $90^\circ$, is $pE=6.2\cdot10^{-25}\,\mathrm{N\,m}$. At $\theta=30^\circ$ the moment is half of it, because $\sin30^\circ=\dfrac{1}{2}$, that is, $3.1\cdot10^{-25}\,\mathrm{N\,m}$. For $\theta=0$ and for $\theta=180^\circ$ the moment is zero.

::grafico{assi=0 uguale=1 linee="-0.964,-1.149 0.964,1.149" segmenti="0,0,0,1.149;0,0,2,0" punti="0.964,1.149,pieno,+q;-0.964,-1.149,pieno,−q;0,0,pieno" vettori="0.964,1.149,2.8,1.149,qE;-0.964,-1.149,-2.8,-1.149,−qE;-3,2.5,-1.5,2.5,E" etichette="0.2,0.55,b;1.0,0.3,θ" xmin=-3.4 xmax=3.4 ymin=-1.9 ymax=3 titolo="The lines of action of the two forces are at distance $b=\dfrac{d}{2}\sin\theta$ from the center $O$ of the dipole."}
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

:::esempio{titolo="Proton at rest in a uniform field"}
A proton starts from rest in a uniform field $E=1.0\cdot10^3\,\mathrm{N/C}$. The acceleration points along the field and equals
$$
a=\frac{eE}{m_p}=\frac{(1.60\cdot10^{-19})(1.0\cdot10^3)}{1.67\cdot10^{-27}}\,\mathrm{m/s^2}\simeq9.58\cdot10^{10}\,\mathrm{m/s^2}.
$$
After $t=1.0\,\mathrm{\mu s}$, motion with constant acceleration gives $v=at\simeq9.58\cdot10^4\,\mathrm{m/s}$ and $s=\dfrac{1}{2}at^2\simeq4.79\cdot10^{-2}\,\mathrm m$. An electron in the same field has an acceleration about $1.8\cdot10^3$ times larger, because its mass is smaller by that ratio, and in the opposite direction.
:::

:::esempio{titolo="When weight can be neglected"}
On an electron in $E=100\,\mathrm{N/C}$ the electric force is $eE=1.6\cdot10^{-17}\,\mathrm N$ and the weight is $m_eg=8.9\cdot10^{-30}\,\mathrm N$, with $g=9.8\,\mathrm{m/s^2}$. The ratio is about $1.8\cdot10^{12}$, so the weight is negligible. For a small ball of mass $1.0\,\mathrm g$ with charge $10\,\mathrm{nC}$ in $E=500\,\mathrm{N/C}$ we have $qE=5.0\cdot10^{-6}\,\mathrm N$ against a weight of $9.8\cdot10^{-3}\,\mathrm N$. In this case the weight prevails and cannot be neglected.
:::

:::attenzione
Field lines are not trajectories. The force on a charge is tangent to the field line, but the velocity in general is not. An electron launched horizontally in a uniform vertical field follows a parabola, whereas the field lines are vertical straight lines.
:::

::::teorema{#deflessione titolo="Deflection in a uniform field"}
A particle of charge $q$ and mass $m$ enters with velocity $v_0$ perpendicular to a uniform field $E$ in a region of length $L$, measured along the direction of $v_0$. If other forces are negligible, at the exit the transverse displacement is $y_L=\dfrac{qEL^2}{2mv_0^2}$ and the angle $\theta$ between the final and initial velocities satisfies $\tan\theta=\dfrac{qEL}{mv_0^2}$. After the exit the particle moves in a straight line, and the backward extension of this line meets the initial direction at the midpoint of the region, at distance $\dfrac{L}{2}$ from the entrance. If $v_0$ is known, measuring $y_L$ gives the ratio $\dfrac{q}{m}$ of the particle.

:::dimostrazione
The force is perpendicular to $\vec v_0$, so the component of the velocity along the initial direction remains $v_0$ and the crossing time is $t_L=\dfrac{L}{v_0}$. In the direction of the field the acceleration is $a=\dfrac{qE}{m}$ and the initial velocity is zero. Therefore
$$
y_L=\frac{1}{2}at_L^2=\frac{qEL^2}{2mv_0^2},
\qquad
v_y=at_L=\frac{qEL}{mv_0}.
$$
The exit angle satisfies $\tan\theta=\dfrac{v_y}{v_0}=\dfrac{qEL}{mv_0^2}$. Comparing the two formulas gives $\tan\theta=\dfrac{2y_L}{L}$. Outside the region the force is zero, so the velocity stays constant and the motion is rectilinear with slope $\tan\theta$. Following the line backward from the exit point, the height $y_L$ vanishes after a horizontal distance $\dfrac{y_L}{\tan\theta}=\dfrac{L}{2}$.
:::
::::

:::esempio{titolo="Deflected electron"}
An electron with $v_0=3.0\cdot10^6\,\mathrm{m/s}$ crosses a region of length $L=2.0\,\mathrm{cm}$ with a uniform field $E=2.0\cdot10^3\,\mathrm{N/C}$ perpendicular to $\vec v_0$. The transverse displacement at the exit is
$$
y_L=\frac{(1.60\cdot10^{-19})(2.0\cdot10^3)(0.020)^2}{2(9.11\cdot10^{-31})(3.0\cdot10^6)^2}\,\mathrm m\simeq7.8\cdot10^{-3}\,\mathrm m
$$
and $\tan\theta=\dfrac{2y_L}{L}\simeq0.78$, that is, $\theta\simeq38^\circ$. If the field points downward, the force on the electron points upward and the electron deflects upward. The backward extension of the straight trajectory meets the initial direction at $1.0\,\mathrm{cm}$ from the entrance.

::grafico{f="x<=20?0.019515*x^2:7.806+0.7806*(x-20)" linee="0,14 20,14;0,-6 20,-6" segmenti="10,0,20,7.806" etichette="9,15.5,plate +;9,-8,plate −" xmin=0 xmax=35 ymin=-10 ymax=20 nomi="x,y (mm)" titolo="Trajectory of the electron: parabola between the plates and straight line after the exit. The dashed line extends the straight line to the $x$ axis, at $x=10\,\mathrm{mm}$."}
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

::::teorema{#annullamento-generale titolo="Zero-field point of two charges"}
Let $Q_1$ and $Q_2$ be two point charges separated by $d$. The total field does not vanish off the line joining them. On the line:
- if $Q_1$ and $Q_2$ have the same sign, the field vanishes at a single point, inside the segment, at distance $x=\dfrac{d\sqrt{|Q_1|}}{\sqrt{|Q_1|}+\sqrt{|Q_2|}}$ from $Q_1$;
- if they have opposite signs and $|Q_1|<|Q_2|$, the field vanishes at a single point, outside the segment on the side of $Q_1$, at distance $s=\dfrac{d\sqrt{|Q_1|}}{\sqrt{|Q_2|}-\sqrt{|Q_1|}}$ from $Q_1$;
- if they have opposite signs and $|Q_1|=|Q_2|$, the field vanishes at no point at finite distance.

The formula gives the position directly, without setting up the equality of the magnitudes each time.

:::dimostrazione
Off the line the two fields are not parallel, so their sum is not zero. On the line we distinguish the cases.

Charges of the same sign. Outside the segment the two fields have the same direction and do not cancel. Inside they have opposite directions, and if $x$ is the distance from $Q_1$, cancellation requires equal magnitudes
$$
\frac{k_e|Q_1|}{x^2}=\frac{k_e|Q_2|}{(d-x)^2}.
$$
The distances $x$ and $d-x$ are positive, so taking the square root gives $\dfrac{\sqrt{|Q_1|}}{x}=\dfrac{\sqrt{|Q_2|}}{d-x}$. Hence $\sqrt{|Q_1|}\,(d-x)=\sqrt{|Q_2|}\,x$ and
$$
x=\frac{d\sqrt{|Q_1|}}{\sqrt{|Q_1|}+\sqrt{|Q_2|}}.
$$
The equation has a single solution, so the point is unique.

Charges of opposite sign. Between the charges the two fields have the same direction and do not cancel. On the side of the charge of larger magnitude $Q_2$, every point is closer to $Q_2$ than to $Q_1$, so the field of $Q_2$ prevails. The side of $Q_1$ remains. If $s$ is the distance from $Q_1$, the distance from $Q_2$ is $s+d$ and equating the magnitudes gives $\dfrac{\sqrt{|Q_1|}}{s}=\dfrac{\sqrt{|Q_2|}}{s+d}$. Hence $\sqrt{|Q_1|}\,(s+d)=\sqrt{|Q_2|}\,s$ and
$$
s=\frac{d\sqrt{|Q_1|}}{\sqrt{|Q_2|}-\sqrt{|Q_1|}}.
$$
The result is positive if and only if $|Q_2|>|Q_1|$. For $|Q_1|=|Q_2|$ the equation becomes $d=0$, which is impossible.
:::
::::

:::esempio{titolo="Position of the zero-field point"}
For $Q_1=+2.0\,\mathrm{nC}$ and $Q_2=+18\,\mathrm{nC}$ at $d=0.40\,\mathrm m$ we have $\sqrt{|Q_1|}:\sqrt{|Q_2|}=1:3$, so $x=\dfrac{d}{1+3}=0.10\,\mathrm m$. At that point $\dfrac{2.0}{(0.10)^2}=\dfrac{18}{(0.30)^2}=200\,\mathrm{nC/m^2}$, so the two fields have the same magnitude $1.8\cdot10^3\,\mathrm{N/C}$. With $Q_2=-18\,\mathrm{nC}$ the point is outside, on the side of $Q_1$, at $s=\dfrac{d}{3-1}=0.20\,\mathrm m$ from $Q_1$ and $0.60\,\mathrm m$ from $Q_2$. Here too $\dfrac{2.0}{(0.20)^2}=\dfrac{18}{(0.60)^2}=50\,\mathrm{nC/m^2}$.

::grafico{f="1/x^2-9/(1-x)^2" punti="0.25,0,pieno,P" xmin=0 xmax=1 ymin=-30 ymax=30 nomi="x/d,E" titolo="Component $E_x$ between two positive charges with $Q_2=9Q_1$, in units of $\dfrac{k_eQ_1}{d^2}$, with $x$ measured from $Q_1$. It vanishes at $x=\dfrac{d}{4}$."}
:::

:::attenzione
A test charge at the point where the field is zero is in equilibrium, but not always a stable one. For two equal positive charges $Q=1.0\,\mathrm{nC}$ at $0.20\,\mathrm m$ apart and a test charge $q_0=+1.0\,\mathrm{nC}$ at the midpoint, a displacement of $y=1.0\,\mathrm{cm}$ perpendicular to the line of the sources produces the force $\dfrac{2k_eQq_0y}{\left(y^2+a^2\right)^{\frac{3}{2}}}\simeq1.8\cdot10^{-7}\,\mathrm N$, with $a=0.10\,\mathrm m$, pointing outward. The test charge moves away from the midpoint. For a displacement along the line of the sources the force instead points toward the midpoint.
:::
