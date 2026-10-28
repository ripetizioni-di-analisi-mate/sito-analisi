---
titolo: Electric charge and Coulomb's law
sommario: What electric charge is and what properties it has, how conductors and insulators are charged, how Coulomb's law and the superposition principle give the force between point charges in one and two dimensions, and when a system of charges is in equilibrium.
---

## Electric charge

Throughout the topic the charges are at rest in an inertial reference frame and are in vacuum, except where stated otherwise.

:::definizione{#carica-elettrica titolo="Electric charge"}
**Electric charge** is the scalar quantity that measures the ability of a body to exert and experience electric forces. There are two kinds of charge, conventionally called positive and negative; two bodies with charges of the same sign repel each other, two bodies with charges of opposite sign attract each other. The charge of a body is the algebraic sum of the charges of its constituents, and a body with zero total charge is called **neutral**.

Ordinary matter is made of atoms, with a nucleus of protons and neutrons surrounded by electrons. The proton has charge $+e$, the electron has charge $-e$ and the neutron is neutral, with
$$
e = 1.60 \cdot 10^{-19}\,\mathrm{C} .
$$
A body is negatively charged if it has more electrons than protons, positively charged if it has fewer. The unit in the International System is the **coulomb**, related to the ampere, the unit of current, by $1\,\mathrm{C} = 1\,\mathrm{A \cdot s}$; for current we refer to the topic on electric current and direct-current circuits. The charges of laboratory bodies are much smaller than one coulomb, and the submultiples $1\,\mu\mathrm{C} = 10^{-6}\,\mathrm{C}$ and $1\,\mathrm{nC} = 10^{-9}\,\mathrm{C}$ are used.
:::

:::teorema{#quantizzazione-della-carica titolo="Quantization of charge"}
It is an experimental fact, first measured accurately by Robert Millikan with the oil-drop experiment, that the charge of every isolated body is an integer multiple of the elementary charge:
$$
q = n\,e , \qquad n \in \mathbb{Z} .
$$
Quarks, the constituents of protons and neutrons, have charges $\pm\dfrac{1}{3}\,e$ and $\pm\dfrac{2}{3}\,e$, and are not observed in isolation; therefore measurable charges are multiples of $e$.

The law makes it possible to count the elementary charges transferred in a charging process. A body with charge $q = -3.2\,\mathrm{nC}$ has
$$
n = \frac{|q|}{e} = \frac{3.2 \cdot 10^{-9}}{1.60 \cdot 10^{-19}} = 2.0 \cdot 10^{10}
$$
excess electrons. Since $e$ is very small, in macroscopic bodies $n$ is enormous, and charge is treated as a quantity that varies continuously.
:::

:::teorema{#conservazione-della-carica titolo="Conservation of charge"}
It is an experimental principle, verified in all known processes, including reactions between elementary particles, according to which in an isolated system the algebraic sum of the charges remains constant in time,
$$
\sum_i q_i = \text{constant} .
$$
Charge moves from one body to another and its algebraic sum stays the same; new charges appear only in pairs of opposite sign, as in the creation of an electron and a positron from a high-energy photon.

The principle fixes the total charge in contact and rubbing problems. If two bodies with charges $+5.0\,\mathrm{nC}$ and $-1.0\,\mathrm{nC}$ touch and are then separated, the sum of their final charges is $+4.0\,\mathrm{nC}$, whatever the distribution.
:::

## Conductors and insulators

:::definizione{#conduttori-e-isolanti titolo="Conductors and insulators"}
A **conductor** is a material in which some of the charges, called conduction charges, move freely within it; in metals they are the outermost electrons of the atoms, not bound to a single nucleus. An **insulator**, or dielectric, is a material in which every electron remains bound to its own atom or molecule. Metals, graphite, salt solutions and the human body are conductors; glass, plastic, rubber, ceramic and dry air are insulators. Semiconductors, such as silicon, have an intermediate behavior, which depends on temperature and impurities.

The distinction determines where the charge of a charged body is located. On an insulator the charge remains in the region where it was deposited. On a conductor the excess charges repel each other and move until they reach an equilibrium configuration, in which they lie on the outer surface; for the properties of conductors in equilibrium we refer to the topic on conductors, capacitors and dielectrics.
:::

:::osservazione{#messa-a-terra titolo="Grounding"}
The Earth is a very large conductor, which can give up or absorb electrons without its electrical state changing appreciably. Connecting a conductor to ground with a metal wire allows the conduction charges to pass between the conductor and the Earth; therefore a grounded conductor, far from other charged bodies, discharges. Grounding is used in charging by induction, and in electrical installations it prevents the metal casings of appliances from remaining charged.
:::

## Charging

:::definizione{#elettrizzazione-per-strofinio titolo="Charging by rubbing"}
When two neutral bodies of different materials are rubbed together, some of the electrons pass from one body to the other. The body that gains electrons becomes negatively charged and the one that gives them up becomes positively charged, with charges equal in absolute value by **conservation of charge**. A glass rod rubbed with a silk cloth becomes positively charged; a plastic rod rubbed with a wool cloth becomes negatively charged. Which of the two materials gives up electrons depends on the pair of materials.

Charging by rubbing is the simplest way to charge an insulator, and it explains the shock felt when touching a metal door handle after walking on a synthetic carpet.
:::

:::definizione{#elettrizzazione-per-contatto titolo="Charging by contact"}
If a charged conductor touches a neutral conductor, some of the conduction charges pass from one to the other, and after separation both have charge of the same sign. The distribution depends on the shape and size of the two conductors, while the sum of the charges remains the initial one. Touching a conductor with a charged insulator transfers only the charge of the contact region.
:::

:::osservazione{#contatto-sfere-uguali titolo="Contact between two identical conducting spheres"}
If two identical conducting spheres, with charges $q_A$ and $q_B$, touch and are then separated and moved apart, each has the charge
$$
q_A' = q_B' = \frac{q_A + q_B}{2} .
$$
Indeed the sum of the charges is conserved, and the two spheres are identical, so by symmetry the charge divides into equal parts. The formula also holds with initial charges of opposite sign. With $q_A = +5.0\,\mathrm{nC}$ and $q_B = -1.0\,\mathrm{nC}$ each sphere ends up with $+2.0\,\mathrm{nC}$; therefore sphere $B$ has given sphere $A$ electrons amounting to a charge of $3.0\,\mathrm{nC}$, that is $\dfrac{3.0 \cdot 10^{-9}}{1.60 \cdot 10^{-19}} \approx 1.9 \cdot 10^{10}$ electrons.
:::

:::definizione{#induzione-elettrostatica titolo="Electrostatic induction"}
If a charged body is brought near an isolated neutral conductor, without touching it, the conduction charges of the conductor move. With a positively charged body the electrons accumulate on the near side, and on the far side a positive charge equal in absolute value remains. This separation of charge is called **electrostatic induction**; the total charge of the conductor remains zero, and if the charged body is moved away the charges return to the initial distribution.

::grafico{assi=0 uguale=1 poligoni="0,-0.22 2,-0.22 2,0.22 0,0.22" curve="4+1.3*cos(t),1.3*sin(t),0,6.29" etichette="0.25,-0.09,+;0.75,-0.09,+;1.25,-0.09,+;1.7,-0.09,+;3.0,0.5,−;2.85,-0.1,−;3.0,-0.7,−;4.85,0.5,+;5.05,-0.1,+;4.85,-0.7,+;0,0.45,rod;3.3,1.5,conductor" xmin=-0.4 xmax=6 ymin=-1.7 ymax=1.85 legenda=0 titolo="Electrostatic induction: the positively charged rod attracts the conduction electrons to the near side of the conducting sphere, and on the opposite side a positive charge of the same absolute value remains"}

For **charging by induction** the conductor is grounded while the positively charged body is nearby. The electrons attracted by the charged body come up from the Earth and neutralize the positive charge on the far side; the connection is then broken and only afterwards is the charged body moved away. The conductor remains negatively charged, that is with charge of sign opposite to that of the inducing body, and the inducing body keeps its own charge.
:::

:::osservazione{#polarizzazione-isolanti titolo="Polarization of insulators"}
In an insulator the electrons remain bound to the molecules. A nearby charged body slightly displaces the electron cloud of each molecule relative to the nuclei, or orients the molecules that already have a separation of charge, such as those of water. On the surface of the insulator facing the charged body a charge of opposite sign appears, and on the far surface a charge of the same sign. Since the electric force decreases with distance, the attraction on the near charge exceeds the repulsion on the far charge, and the total force is attractive. This is why a charged comb attracts neutral bits of paper.

It follows that a charged body also attracts neutral bodies. Hence an attraction between two bodies is *not* enough to establish that both are charged, whereas a repulsion establishes it. For dielectrics we refer to the topic on conductors, capacitors and dielectrics.
:::

## Coulomb's law

:::definizione{#carica-puntiforme titolo="Point charge"}
A **point charge** is a charged body whose dimensions are negligible compared with the distances from the other charged bodies considered, and which is therefore described by its position and the value of its charge alone. It is the electrical analogue of the point particle of mechanics. Two small charged spheres of radius $1\,\mathrm{mm}$ placed $30\,\mathrm{cm}$ apart are treated as point charges.
:::

:::teorema{#legge-di-coulomb titolo="Coulomb's law"}
It is an experimental law, established by Charles-Augustin de Coulomb in 1785 with a torsion balance. Consider two point charges $q_1$ and $q_2$, at rest in vacuum at the positions $\vec{r}_1$ and $\vec{r}_2$, at distance $r = |\vec{r}_2 - \vec{r}_1|$. The force that $q_1$ exerts on $q_2$ is
$$
\vec{F}_{12} = k\,\frac{q_1 q_2}{r^2}\,\hat{r}_{12} , \qquad \hat{r}_{12} = \frac{\vec{r}_2 - \vec{r}_1}{r} ,
$$
where $\hat{r}_{12}$ is the unit vector directed from $q_1$ toward $q_2$ and
$$
k = \frac{1}{4\pi\varepsilon_0} = 8.99 \cdot 10^{9}\,\mathrm{N\cdot m^2/C^2} , \qquad \varepsilon_0 = 8.85 \cdot 10^{-12}\,\mathrm{C^2/(N\cdot m^2)} .
$$
The constant $\varepsilon_0$ is called the **vacuum permittivity**. The force has the direction of the line joining the two charges and magnitude
$$
F = k\,\frac{|q_1|\,|q_2|}{r^2} .
$$
If $q_1 q_2 > 0$ the force on $q_2$ has the orientation of $\hat{r}_{12}$ and the charges repel each other; if $q_1 q_2 < 0$ it has the opposite orientation and the charges attract each other. When the positions are given in coordinates, the equivalent form
$$
\vec{F}_{12} = k\,\frac{q_1 q_2}{|\vec{r}_2 - \vec{r}_1|^3}\,(\vec{r}_2 - \vec{r}_1)
$$
gives the components directly, with the sign already included. For example, two charges of $+2.0\,\mu\mathrm{C}$ and $-3.0\,\mu\mathrm{C}$ placed $0.20\,\mathrm{m}$ apart attract each other with a force of magnitude $F = 8.99 \cdot 10^{9} \cdot \dfrac{2.0 \cdot 10^{-6} \cdot 3.0 \cdot 10^{-6}}{0.20^2}\,\mathrm{N} \approx 1.3\,\mathrm{N}$.

::grafico{assi=0 uguale=1 punti="0,1.6,pieno;4,1.6,pieno;0,0,pieno;4,0,pieno" vettori="0,1.6,-1.4,1.6,F₂₁;4,1.6,5.4,1.6,F₁₂;0,0,1.4,0,F₂₁;4,0,2.6,0,F₁₂" segmenti="0,-0.9,4,-0.9" etichette="-0.25,1.15,+q₁;3.75,1.15,+q₂;-0.25,-0.45,+q₁;3.75,-0.45,−q₂;1.95,-1.25,r" xmin=-1.9 xmax=5.9 ymin=-1.5 ymax=2.2 titolo="Charges of the same sign repel each other (top), charges of opposite sign attract each other (bottom); in both cases $\vec{F}_{21} = -\vec{F}_{12}$ and the magnitude is $k\,\dfrac{|q_1|\,|q_2|}{r^2}$"}

:::

:::osservazione{#azione-e-reazione titolo="Action and reaction between two charges"}
Exchanging the indices gives $\hat{r}_{21} = -\hat{r}_{12}$, hence
$$
\vec{F}_{21} = -\vec{F}_{12} .
$$
The forces that two charges at rest exert on each other have the same magnitude, the same line of action and opposite orientations, as required by Newton's third law. This holds even for very different charges, for example $1\,\mathrm{nC}$ and $1\,\mu\mathrm{C}$; if the masses are different, the accelerations are different. For the forces between moving charges we refer to the topic on the magnetic field and the Lorentz force.
:::

:::osservazione{#inverso-del-quadrato titolo="Dependence on distance"}
The magnitude of the force is inversely proportional to the square of the distance, as in the law of universal gravitation. If the distance doubles the force becomes one quarter, if it triples it becomes one ninth; if instead one of the charges doubles, the force doubles. The comparison between two situations is therefore made with a ratio, without computing $k$:
$$
\frac{F'}{F} = \frac{|q_1'|\,|q_2'|}{|q_1|\,|q_2|} \cdot \frac{r^2}{r'^2} .
$$

::grafico{f="1/x^2" punti="1,1,pieno;2,0.25,pieno;3,0.1111,pieno" segmenti="1,0,1,1;0,1,1,1;2,0,2,0.25;3,0,3,0.1111" xmin=0 xmax=4.2 ymin=0 ymax=4.4 nomi="r,F" legenda="F = \dfrac{k\,|q_1|\,|q_2|}{r^2}" titolo="Magnitude of the Coulomb force as a function of distance, in units in which $F = 1$ for $r = 1$: at twice the distance the force is $\dfrac{1}{4}$, at three times the distance $\dfrac{1}{9}$"}

The law holds for point charges. For a sphere with uniformly distributed charge it also holds outside the sphere, with $r$ equal to the distance from the center, and we refer to the topic on electric flux and Gauss's law.
:::

:::osservazione{#confronto-con-la-gravita titolo="Comparison with the gravitational force"}
In the hydrogen atom the electron and the proton are on average about $r = 5.3 \cdot 10^{-11}\,\mathrm{m}$ apart. The magnitude of the electric force is
$$
F_e = k\,\frac{e^2}{r^2} = 8.99 \cdot 10^{9} \cdot \frac{\left(1.60 \cdot 10^{-19}\right)^2}{\left(5.3 \cdot 10^{-11}\right)^2}\,\mathrm{N} \approx 8.2 \cdot 10^{-8}\,\mathrm{N} ,
$$
whereas the gravitational force, with $G = 6.67 \cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}$, $m_e = 9.11 \cdot 10^{-31}\,\mathrm{kg}$ and proton mass $m_p = 1.67 \cdot 10^{-27}\,\mathrm{kg}$, is $F_g = G\,\dfrac{m_e m_p}{r^2} \approx 3.6 \cdot 10^{-47}\,\mathrm{N}$. Both forces depend on $\dfrac{1}{r^2}$, so their ratio $\dfrac{F_e}{F_g} \approx 2.3 \cdot 10^{39}$ does not depend on the distance. In atomic and molecular phenomena gravity is therefore negligible. On the astronomical scale gravity prevails instead, because celestial bodies are nearly neutral and the electric forces of the positive and negative charges cancel each other; for gravitation we refer to the topic on gravitation in Physics 1.
:::

:::osservazione{#coulomb-nella-materia titolo="Charges in an insulating medium"}
If the charges are in a homogeneous insulator that fills space, the force between them is reduced by a factor $\varepsilon_r \geq 1$, the **relative permittivity** of the medium:
$$
F = \frac{1}{4\pi\varepsilon_0\,\varepsilon_r}\,\frac{|q_1|\,|q_2|}{r^2} .
$$
For air $\varepsilon_r \approx 1.0006$, so in air the vacuum law is used; for water at room temperature $\varepsilon_r \approx 80$, and this explains why salts dissolve in water, where the attraction between the ions is much weaker. The reduction is due to the polarization of the medium, and we refer to the topic on conductors, capacitors and dielectrics.
:::

## Superposition principle

:::teorema{#principio-di-sovrapposizione titolo="Superposition principle"}
It is an experimental principle. If the point charges $q_1, \dots, q_n$ act on the point charge $q_0$, the total force on $q_0$ is the vector sum of the forces that each charge would exert on $q_0$ if it were present alone:
$$
\vec{F} = \sum_{i=1}^{n} \vec{F}_{i0} = \sum_{i=1}^{n} k\,\frac{q_i q_0}{r_{i0}^2}\,\hat{r}_{i0} ,
$$
where $r_{i0}$ is the distance between $q_i$ and $q_0$ and $\hat{r}_{i0}$ is the unit vector directed from $q_i$ toward $q_0$. In particular the force between two charges does *not* change because of the presence of other charges.

The principle reduces every problem with several point charges to a sum of forces between pairs, each given by **Coulomb's law**. Together with Coulomb's law it makes it possible to compute the force exerted by any set of charges at rest in vacuum, even continuously distributed ones, for which the sum becomes an integral; we refer to the topic on the electric field.
:::

:::richiamo{titolo="Adding vectors by components"}
If $\vec{F}_i = F_{ix}\,\hat{\imath} + F_{iy}\,\hat{\jmath}$, the sum $\vec{F} = \sum_i \vec{F}_i$ has components $F_x = \sum_i F_{ix}$ and $F_y = \sum_i F_{iy}$, magnitude $F = \sqrt{F_x^2 + F_y^2}$ and forms with the $x$-axis the angle $\varphi$ such that $\tan\varphi = \dfrac{F_y}{F_x}$, chosen in the quadrant indicated by the signs of the components. We refer to the topic on physical quantities and vectors in Physics 1.
:::

:::osservazione{#metodo-delle-componenti titolo="Computing the resultant force"}
The total force on a charge $q_0$ is computed in four steps.

1. Choose a system of axes and write the positions of the charges.
2. For each charge $q_i$ compute the magnitude $F_{i0} = k\,\dfrac{|q_i|\,|q_0|}{r_{i0}^2}$ and determine the orientation: along the joining line, away from $q_i$ if the charges have the same sign, toward $q_i$ if they have opposite signs.
3. Resolve each force along the axes, using the angle that the joining line forms with the $x$-axis.
4. Add the components and obtain the magnitude and direction of the resultant.

Alternatively, apply the vector form of Coulomb's law with the coordinates, which gives the components with the correct sign. If the configuration is symmetric with respect to a line through $q_0$, the components perpendicular to that line cancel in pairs, and it suffices to add the parallel components.
:::

## Forces on collinear charges

:::osservazione{#cariche-allineate titolo="Charges on a line"}
If all the charges lie on the $x$-axis, every force is directed along the axis, and the total force on $q_0$, placed at $x_0$, has only the component
$$
F_x = \sum_{i} k\,\frac{q_i q_0}{(x_0 - x_i)^2}\,\operatorname{sgn}(x_0 - x_i) ,
$$
where $\operatorname{sgn}(x_0 - x_i)$ equals $+1$ if $q_0$ is to the right of $q_i$ and $-1$ if it is to the left. The formula expresses the sign rule, according to which the contribution of $q_i$ is positive if it pushes $q_0$ to the right. The problem thus reduces to a sum of signed numbers, and the sign of $F_x$ gives the orientation of the total force.
:::

:::esempio{titolo="Charge outside two charges of opposite sign"}
On the $x$-axis there are $q_1 = +1.0\,\mu\mathrm{C}$ at $x = 0$ and $q_2 = -2.0\,\mu\mathrm{C}$ at $x = 0.20\,\mathrm{m}$, and the charge $q_0 = +1.0\,\mu\mathrm{C}$ at $x = 0.30\,\mathrm{m}$. The charge $q_1$ repels $q_0$ to the right and $q_2$ attracts it to the left, hence
$$
\begin{aligned}
F_x &= k\,\frac{q_1 q_0}{0.30^2} - k\,\frac{|q_2|\,q_0}{0.10^2} \\[6pt]
&= 8.99 \cdot 10^{9} \cdot \left( \frac{1.0 \cdot 1.0}{0.090} - \frac{2.0 \cdot 1.0}{0.010} \right) \cdot 10^{-12}\,\mathrm{N} \\[6pt]
&\approx (0.10 - 1.80)\,\mathrm{N} \approx -1.7\,\mathrm{N} .
\end{aligned}
$$
The total force is directed to the left. The charge $q_2$ is closer to $q_0$ and has twice the absolute value, therefore its contribution is $18$ times that of $q_1$.
:::

:::osservazione{#somma-forze-interne titolo="Sum of the internal forces"}
In a system of charges the forces that the charges exert on one another come in pairs $\vec{F}_{ij} = -\vec{F}_{ji}$, by action and reaction between two charges. Therefore the sum of the electric forces on *all* the charges of the system is zero. The result serves as a check on calculations: if the forces on each of three charges are computed, their sum must be zero. It also serves to shorten calculations, because if two of three charges are in equilibrium under their mutual forces alone, the force on the third is zero.
:::

## Forces on charges in the plane

:::esempio{titolo="Two charges arranged at a right angle"}
The charge $q_0 = +1.0\,\mu\mathrm{C}$ is at the origin, $q_1 = +4.0\,\mu\mathrm{C}$ at the point $(-0.20\,\mathrm{m};\,0)$ and $q_2 = -3.0\,\mu\mathrm{C}$ at the point $(0;\,0.30\,\mathrm{m})$. The charge $q_1$ repels $q_0$ in the positive direction of the $x$-axis, and $q_2$ attracts it in the positive direction of the $y$-axis, with magnitudes
$$
F_1 = 8.99 \cdot 10^{9} \cdot \frac{4.0 \cdot 10^{-12}}{0.20^2}\,\mathrm{N} \approx 0.899\,\mathrm{N} ,
\qquad
F_2 = 8.99 \cdot 10^{9} \cdot \frac{3.0 \cdot 10^{-12}}{0.30^2}\,\mathrm{N} \approx 0.300\,\mathrm{N} .
$$
The two forces are perpendicular, so the resultant has magnitude $F = \sqrt{F_1^2 + F_2^2} \approx 0.95\,\mathrm{N}$ and forms with the $x$-axis the angle $\varphi$ with $\tan\varphi = \dfrac{F_2}{F_1} \approx 0.33$, that is $\varphi \approx 18^\circ$.

::grafico{assi=0 uguale=1 punti="0,0,pieno;-2,0,pieno,q₁;0,3,pieno,q₂" vettori="0,0,2.7,0,F₁;0,0,0,0.9,F₂;0,0,2.7,0.9,F" segmenti="2.7,0,2.7,0.9;0,0.9,2.7,0.9" etichette="-0.45,-0.45,q₀" xmin=-2.6 xmax=3.4 ymin=-0.7 ymax=3.4 titolo="Forces on $q_0$: $\vec{F}_1$ due to $q_1 = +4.0\,\mu\mathrm{C}$, $\vec{F}_2$ due to $q_2 = -3.0\,\mu\mathrm{C}$ and the resultant $\vec{F}$, diagonal of the rectangle constructed on the two forces"}

:::

::::teorema{#forza-asse-due-cariche titolo="Force on the axis of two equal charges"}
Two equal point charges $Q$ are fixed at the points $(-a, 0)$ and $(a, 0)$, with $a > 0$, and the charge $q_0$ is at the point $(0, y)$ of the perpendicular bisector of the segment joining them. The total force on $q_0$ is
$$
\vec{F} = \frac{2kQq_0\,y}{\left(a^2 + y^2\right)^{\frac{3}{2}}}\,\hat{\jmath} .
$$
The force is directed along the axis, and the formula holds for every sign of $Q$, of $q_0$ and of $y$. At the midpoint $y = 0$ the force is zero. For $y \gg a$ we have $\left(a^2 + y^2\right)^{\frac{3}{2}} \approx y^3$, hence $F_y \approx k\,\dfrac{2Q\,q_0}{y^2}$, and from far away the two charges act as a single charge $2Q$ placed at the origin. The result is used in all symmetric configurations, for example in squares and isosceles triangles of charges.

::grafico{assi=0 uguale=1 punti="-3,0,pieno,Q;3,0,pieno,Q;0,2.5,pieno" vettori="0,2.5,1.152,3.46,F₁;0,2.5,-1.152,3.46,F₂;0,2.5,0,4.42,F" segmenti="-3,0,0,2.5;3,0,0,2.5;-3,0,3,0;0,0,0,2.5" etichette="1.4,-0.5,a;0.15,1.2,y;0.25,2.05,q₀" xmin=-4 xmax=4 ymin=-0.8 ymax=4.8 titolo="Two equal charges $Q$ at distance $2a$: on the perpendicular bisector of the segment the horizontal components of the forces on $q_0$ cancel and the resultant is directed along the axis"}

:::dimostrazione
The charge $q_0$ is at the same distance $r = \sqrt{a^2 + y^2}$ from the two charges. The vector from the charge at $(-a, 0)$ to $q_0$ is $a\,\hat{\imath} + y\,\hat{\jmath}$, and the vector from the charge at $(a, 0)$ to $q_0$ is $-a\,\hat{\imath} + y\,\hat{\jmath}$. By the vector form of **Coulomb's law** the two forces are
$$
\vec{F}_1 = \frac{kQq_0}{r^3}\,\left( a\,\hat{\imath} + y\,\hat{\jmath} \right) ,
\qquad
\vec{F}_2 = \frac{kQq_0}{r^3}\,\left( -a\,\hat{\imath} + y\,\hat{\jmath} \right) .
$$
By the **superposition principle** the total force is the sum; the components along $\hat{\imath}$ are opposite and cancel, while those along $\hat{\jmath}$ are equal, hence
$$
\vec{F} = \vec{F}_1 + \vec{F}_2 = \frac{2kQq_0\,y}{r^3}\,\hat{\jmath} = \frac{2kQq_0\,y}{\left(a^2 + y^2\right)^{\frac{3}{2}}}\,\hat{\jmath} .
$$
The signs of $Q$, $q_0$ and $y$ are contained in the formulas, therefore the result holds in every case.
:::
::::

:::osservazione{#forza-massima-sull-asse titolo="Maximum force on the axis"}
For $Q q_0 > 0$ and $y > 0$ the function $F_y(y)$ is zero at $y = 0$, tends to zero as $y \to +\infty$ and therefore has a maximum. Setting the derivative equal to zero, one finds that the maximum is at
$$
y = \frac{a}{\sqrt{2}} ,
$$
where $F_y = \dfrac{4kQq_0}{3\sqrt{3}\,a^2}$. For the study of the function we refer to the topic on derivatives in Mathematical Analysis 1.

::grafico{f="2*x/(1+x^2)^1.5;2/x^2" punti="0.7071,0.7698,pieno" segmenti="0.7071,0,0.7071,0.7698" xmin=-0.3 xmax=4.2 ymin=-0.15 ymax=1.1 nomi="y,F" legenda="F_y;\dfrac{2}{y^2}" titolo="Component $F_y$ on the axis, with $y$ in units of $a$ and $F_y$ in units of $\dfrac{kQq_0}{a^2}$: it is zero at the midpoint, maximum for $y = \dfrac{a}{\sqrt{2}}$, and for $y \gg a$ it approaches the dashed curve of a charge $2Q$ placed at the origin"}

:::

:::osservazione{#coppia-di-cariche-opposte titolo="Two opposite charges"}
If the charges are $+Q$ at $(-a, 0)$ and $-Q$ at $(a, 0)$, the same calculation as for the force on the axis of two equal charges gives, for the charge $q_0$ at $(0, y)$,
$$
\vec{F} = \frac{2kQq_0\,a}{\left(a^2 + y^2\right)^{\frac{3}{2}}}\,\hat{\imath} .
$$
Now the components along the $y$-axis cancel and those along $\hat{\imath}$ remain, so the force is parallel to the segment joining the charges. For $y \gg a$ the magnitude is about $\dfrac{2kQ|q_0|\,a}{|y|^3}$ and decreases as $\dfrac{1}{|y|^3}$, faster than the force of a single charge, because the contributions of the two charges nearly cancel. This pair of charges is the electric dipole, for which we refer to the topic on the electric field.
:::

## Equilibrium of charges

:::definizione{#equilibrio-di-una-carica titolo="Equilibrium of a charge"}
A point charge at rest is in **equilibrium** if the resultant of all the forces acting on it, electric and otherwise, is zero. In the plane the condition $\vec{F} = \vec{0}$ is equivalent to the system
$$
\begin{cases}
F_x = 0 \\[4pt]
F_y = 0
\end{cases}
$$
For example, a small sphere of mass $m$ and charge $q$ remains suspended at height $h$ above a fixed charge $Q$ of the same sign if the electric repulsion balances the weight, that is if $k\,\dfrac{Qq}{h^2} = mg$, from which $h = \sqrt{\dfrac{kQq}{mg}}$. As in mechanics, the equilibrium is **stable** if, when the charge is displaced slightly, the force tends to bring it back to the equilibrium position, and *unstable* if it tends to move it away; we refer to the topic on work and energy in Physics 1.
:::

::::teorema{#equilibrio-tra-due-cariche titolo="Equilibrium position between two fixed charges"}
Two point charges $q_1$ and $q_2$ of the same sign are fixed at $x = 0$ and at $x = d$. A third charge $q_0$, subject only to the electric forces of $q_1$ and $q_2$, is in equilibrium only at the point of the axis
$$
x_0 = \frac{\sqrt{|q_1|}}{\sqrt{|q_1|} + \sqrt{|q_2|}}\,d .
$$
The point lies between the two charges, closer to the charge of smaller absolute value, and depends neither on the value nor on the sign of $q_0$. With $q_1 = 1.0\,\mu\mathrm{C}$, $q_2 = 4.0\,\mu\mathrm{C}$ and $d = 0.30\,\mathrm{m}$ we get $x_0 = \dfrac{1}{1 + 2} \cdot 0.30\,\mathrm{m} = 0.10\,\mathrm{m}$.

::grafico{assi=0 uguale=1 punti="0,0,pieno;3,0,pieno,q₂;1,0,pieno" vettori="1,0,1.72,0,F₁;1,0,0.28,0,F₂" segmenti="0,-0.8,1,-0.8;1,-0.8,3,-0.8" etichette="-0.2,0.3,q₁;0.85,-0.45,q₀;0.4,-1.15,x₀;1.75,-1.15,d − x₀" xmin=-0.6 xmax=3.6 ymin=-1.4 ymax=0.8 titolo="The charge $q_0$ is in equilibrium where the forces of $q_1$ and $q_2$, of the same sign, have equal magnitude; with $q_2 = 4\,q_1$ the point is half as far from $q_1$ as from $q_2$"}

:::dimostrazione
Off the axis the forces of $q_1$ and $q_2$ on $q_0$ have the directions of the lines joining $q_0$ with $q_1$ and with $q_2$, which are different; two nonzero vectors with different directions have a nonzero sum, so off the axis there is no equilibrium. On the axis, for $x_0 < 0$ the unit vectors directed from $q_1$ and from $q_2$ toward $q_0$ coincide, and since $q_1 q_0$ and $q_2 q_0$ have the same sign the two forces have the same orientation and do not cancel; for $x_0 > d$ the argument is identical. For $0 < x_0 < d$ the two forces have opposite orientations, and the total force is zero if and only if the magnitudes are equal:
$$
k\,\frac{|q_1|\,|q_0|}{x_0^2} = k\,\frac{|q_2|\,|q_0|}{(d - x_0)^2}
\quad\Longleftrightarrow\quad
\frac{d - x_0}{x_0} = \sqrt{\frac{|q_2|}{|q_1|}} ,
$$
where the positive root has been taken because $x_0$ and $d - x_0$ are positive. Solving for $x_0$ gives $x_0 = \dfrac{\sqrt{|q_1|}}{\sqrt{|q_1|} + \sqrt{|q_2|}}\,d$. The factor $k\,|q_0|$ cancels, so the result does not depend on $q_0$.
:::
::::

:::osservazione{#equilibrio-cariche-opposte titolo="Equilibrium near two charges of opposite sign"}
If $q_1$ and $q_2$ have opposite signs, between the two charges the forces on $q_0$ have the same orientation, because one charge repels $q_0$ and the other attracts it toward itself, so there is no equilibrium there. Equilibrium occurs on the axis, outside the segment, on the side of the charge of smaller absolute value: in that region the forces have opposite orientations, and the smaller charge is closer and can balance the larger one. If $|q_2| < |q_1|$, the equilibrium point lies beyond $q_2$, at a distance $s$ from $q_2$ given by
$$
\frac{|q_1|}{(d + s)^2} = \frac{|q_2|}{s^2}
\quad\Longrightarrow\quad
s = \frac{\sqrt{|q_2|}}{\sqrt{|q_1|} - \sqrt{|q_2|}}\,d .
$$
If $|q_1| = |q_2|$ the denominator vanishes and there is *no* equilibrium position.
:::

::::teorema{#equilibrio-tre-cariche titolo="Equilibrium of three collinear charges"}
Two positive point charges $q_1$ and $q_2$ are at $x = 0$ and at $x = d$, and are free to move. The three charges $q_1$, $q_2$ and $q_3$ are all in equilibrium under their mutual forces alone if and only if $q_3$ is at the equilibrium position between two charges $x_0 = \dfrac{\sqrt{q_1}}{\sqrt{q_1} + \sqrt{q_2}}\,d$ and
$$
q_3 = -\frac{q_1 q_2}{\left( \sqrt{q_1} + \sqrt{q_2} \right)^2} .
$$
The charge $q_3$ is negative and its absolute value is smaller than those of $q_1$ and $q_2$. If $q_1$ and $q_2$ are negative all the signs are changed, because the forces depend on the products of the charges taken two at a time. With $q_1 = 1.0\,\mu\mathrm{C}$, $q_2 = 4.0\,\mu\mathrm{C}$ and $d = 0.30\,\mathrm{m}$ we obtain $q_3 = -\dfrac{4.0}{9.0}\,\mu\mathrm{C} \approx -0.44\,\mu\mathrm{C}$ at $x_0 = 0.10\,\mathrm{m}$.

:::dimostrazione
By the equilibrium position between two charges, the charge $q_3$ is in equilibrium only at $x_0$, whatever its value. The charge $q_1$ is repelled by $q_2$ to the left; to be in equilibrium it must be attracted to the right by $q_3$, so $q_3 < 0$, and the magnitudes of the two forces must be equal:
$$
k\,\frac{q_1 q_2}{d^2} = k\,\frac{q_1\,|q_3|}{x_0^2}
\quad\Longrightarrow\quad
|q_3| = q_2\,\frac{x_0^2}{d^2} = \frac{q_1 q_2}{\left( \sqrt{q_1} + \sqrt{q_2} \right)^2} .
$$
Finally, by the sum of the internal forces the sum of the forces on the three charges is zero; since the forces on $q_1$ and on $q_3$ are zero, the force on $q_2$ is also zero.
:::
::::

:::richiamo{titolo="Sum of the internal forces"}
In a system of point charges the sum of the electric forces that the charges exert on one another is zero, because $\vec{F}_{ij} = -\vec{F}_{ji}$ for every pair.
:::

:::osservazione{#stabilita-equilibrio-cariche titolo="Stability of electrostatic equilibrium"}
Consider the equilibrium position between two fixed positive charges. If $q_0$ is also positive, a displacement along the axis brings $q_0$ closer to one of the charges, which repels it more than the other and pushes it back, so along the axis the equilibrium is stable. A displacement perpendicular to the axis instead gives both forces a component that moves $q_0$ away from the axis, so in that direction the equilibrium is unstable. With $q_0$ negative the two behaviors are exchanged.

In every case there is at least one direction of instability. **Earnshaw's theorem** states that a charge subject only to the electrostatic forces of fixed charges has no positions of stable equilibrium in all directions; the proof uses Gauss's law, for which we refer to the topic on electric flux and Gauss's law. The equilibrium of three collinear charges is also unstable. Stable configurations are obtained by adding forces of a different nature, such as weight and the tension of a string.
:::

::::teorema{#pendolini-carichi titolo="Equilibrium of two charged pendulums"}
Two identical small spheres of mass $m$, with the same charge $q$, hang from the same point on two inextensible insulating strings of length $\ell$ and negligible mass. At equilibrium each string forms with the vertical the angle $\theta$ such that
$$
\tan\theta = \frac{F}{mg} , \qquad F = k\,\frac{q^2}{r^2} , \qquad r = 2\ell\sin\theta .
$$
If the angle is small, $\tan\theta \approx \sin\theta = \dfrac{r}{2\ell}$, and the distance between the spheres is
$$
r \approx \left( \frac{2kq^2\ell}{mg} \right)^{\frac{1}{3}} .
$$
The formulas give the charge from the measurement of the angle, and leaf electroscopes work on this principle, in which the opening of the leaves increases with the charge.

::grafico{assi=0 uguale=1 linee="-1.3,3 1.3,3;0,3 -0.776,0.102;0,3 0.776,0.102" punti="-0.776,0.102,pieno;0.776,0.102,pieno" vettori="0.776,0.102,0.776,-1.098,P;0.776,0.102,1.098,0.102,F;0.776,0.102,0.455,1.302,T;-0.776,0.102,-0.776,-1.098;-0.776,0.102,-1.098,0.102;-0.776,0.102,-0.455,1.302" segmenti="0,3,0,0.102;-0.776,0.102,0.776,0.102" etichette="0.05,2.35,θ;0.5,1.9,ℓ;-0.08,-0.22,r" xmin=-3.4 xmax=3.4 ymin=-1.4 ymax=3.3 titolo="Two pendulums with the same charge: on each sphere act the weight $\vec{P}$, the tension $\vec{T}$ of the string and the electric force $\vec{F}$, and at equilibrium $\tan\theta = \dfrac{F}{mg}$"}

:::dimostrazione
On the right-hand sphere act the weight $mg$ downward, the tension $T$ along the string and the electric force $F$ of the other sphere, horizontal and directed outward because the charges repel each other. The sphere is in equilibrium, so the sum of the horizontal components and that of the vertical components are zero:
$$
\begin{cases}
F - T\sin\theta = 0 \\[4pt]
T\cos\theta - mg = 0
\end{cases}
\quad\Longrightarrow\quad
\tan\theta = \frac{T\sin\theta}{T\cos\theta} = \frac{F}{mg} .
$$
The spheres are $r = 2\ell\sin\theta$ apart, because each is at distance $\ell\sin\theta$ from the vertical through the point of suspension, and by **Coulomb's law** $F = k\,\dfrac{q^2}{r^2}$. For small angles $\tan\theta \approx \sin\theta = \dfrac{r}{2\ell}$, hence
$$
k\,\frac{q^2}{r^2} = mg\,\frac{r}{2\ell}
\quad\Longrightarrow\quad
r^3 = \frac{2kq^2\ell}{mg} ,
$$
which is the claim.
:::
::::
