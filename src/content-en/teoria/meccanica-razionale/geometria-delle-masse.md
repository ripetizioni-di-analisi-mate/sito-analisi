---
titolo: "Geometry of masses: centers of mass and the inertia tensor"
sommario: How the center of mass of a material system is located and how the inertia tensor is built, with the Huygens-Steiner theorem, the principal axes and the moments of inertia of the standard homogeneous bodies.
---

## Material systems and density

:::definizione{#sistema-materiale titolo="Material system and density"}
A **material system** is a set of points carrying mass. Two models are distinguished.

A **discrete system** consists of $N$ points $P_1, \dots, P_N$ of masses $m_1, \dots, m_N$; the total mass is
$$
M = \sum_{i=1}^{N} m_i .
$$
A **continuous system** occupies a region $\mathcal{C}$ of space, of a surface or of a curve, and its mass is distributed with a **density**: the linear density $\lambda$ for a rod or a wire, the surface density $\sigma$ for a plate, the volume density $\rho$ for a three-dimensional body. The mass element is then written $dm = \lambda\,ds$, $dm = \sigma\,dA$ or $dm = \rho\,dV$, and the total mass is
$$
M = \int_{\mathcal{C}} dm .
$$
The system is **homogeneous** when the density is constant, and in that case the density is obtained from the mass and from the measure of the region occupied: for a plate of area $A$ one has $\sigma = \dfrac{M}{A}$.

Every sum written for discrete systems turns into the corresponding integral by replacing $m_i$ with $dm$ and the summation symbol with the integral symbol, therefore in what follows each quantity is defined in both forms.
:::

## Center of mass

:::definizione{#centro-di-massa titolo="Center of mass"}
The **center of mass**, also called the **centroid**, is the point $G$ defined by
$$
G - O = \frac{1}{M} \sum_{i=1}^{N} m_i\,(P_i - O)
\qquad \text{or} \qquad
G - O = \frac{1}{M} \int_{\mathcal{C}} (P - O)\,dm ,
$$
where $O$ is a point chosen as the origin. The position of $G$ does not depend on $O$: if another point $O'$ is chosen, from the relation $P_i - O' = (P_i - O) + (O - O')$ it follows that
$$
\frac{1}{M} \sum_i m_i\,(P_i - O') = (G - O) + (O - O') = G - O' ,
$$
hence the definition locates the same point $G$. In the frame $(O; x, y, z)$ the coordinates of $G$ are
$$
x_G = \frac{1}{M} \sum_i m_i\,x_i ,
\qquad
y_G = \frac{1}{M} \sum_i m_i\,y_i ,
\qquad
z_G = \frac{1}{M} \sum_i m_i\,z_i .
$$
The center of mass is the point at which the mass is thought to be concentrated when the translational motion of the system is studied, because the first cardinal equation of dynamics relates the resultant of the external forces to its acceleration. Three points of masses $m$, $m$ and $2m$ placed at $(0, 0)$, $(4\ell, 0)$ and $(2\ell, 3\ell)$ have total mass $4m$ and center of mass
$$
x_G = \frac{m \cdot 0 + m \cdot 4\ell + 2m \cdot 2\ell}{4m} = 2\ell ,
\qquad
y_G = \frac{2m \cdot 3\ell}{4m} = \frac{3}{2}\,\ell .
$$

::struttura{punti="0,0,P_1;4,0,P_2;2,3,P_3;2,1.5,G,baricentro" etichette="-0.55,0.35,m;4.3,0.35,m;1.65,3.4,2m" tratteggi="0,0 4,0;4,0 2,3;2,3 0,0" frecce="-1,0,5.2,0,x;0,-0.8,0,4,y" riferimento=0 titolo="Three material points of masses $m$, $m$ and $2m$ and their center of mass $G = \left(2\ell,\ \dfrac{3}{2}\ell\right)$"}

:::

::::teorema{#additivita titolo="Center of mass of a composite system"}
Let the system be divided into two disjoint parts, of masses $M_1$ and $M_2$ and centers of mass $G_1$ and $G_2$. Then the center of mass of the whole satisfies
$$
G - O = \frac{M_1\,(G_1 - O) + M_2\,(G_2 - O)}{M_1 + M_2} ,
$$
that is, it is obtained by treating the two parts as two material points placed at their respective centers of mass. In particular $G$ belongs to the segment $G_1 G_2$ and divides it into parts inversely proportional to the masses. The property extends to any finite number of parts, therefore the center of mass of a bracket of rods, of a composite plate or of a body with a hole is computed without integrating, once the centers of mass of the elementary pieces are known. Two homogeneous rods welded at a right angle, the first from $O$ to $A = (2\ell, 0)$ of mass $2m$ and the second from $A$ to $B = (2\ell, \ell)$ of mass $m$, have partial centers of mass $G_1 = (\ell, 0)$ and $G_2 = \left(2\ell, \dfrac{\ell}{2}\right)$, hence
$$
x_G = \frac{2m \cdot \ell + m \cdot 2\ell}{3m} = \frac{4}{3}\,\ell ,
\qquad
y_G = \frac{m \cdot \dfrac{\ell}{2}}{3m} = \frac{\ell}{6} .
$$

::struttura{nodi="O,0,0;A,2,0;B,2,1" aste="O-A;A-B" punti="1,0,G_1;2,0.5,G_2;1.333,0.167,G,baricentro" tratteggi="1,0 2,0.5" quote="O,A,2ℓ,-0.6;A,B,ℓ,0.75" riferimento=0 titolo="The center of mass of the bracket lies on the segment $G_1 G_2$, closer to $G_1$ because the rod $OA$ has the larger mass"}

:::dimostrazione
Let $\mathcal{C}_1$ and $\mathcal{C}_2$ be the two parts. Since the parts are disjoint, the sum over the whole system splits into the sum over the first part plus the sum over the second:
$$
\begin{aligned}
(M_1 + M_2)\,(G - O) &= \sum_{P_i \in \mathcal{C}_1} m_i\,(P_i - O) + \sum_{P_i \in \mathcal{C}_2} m_i\,(P_i - O) \\[6pt]
&= M_1\,(G_1 - O) + M_2\,(G_2 - O) ,
\end{aligned}
$$
where the last step applies the definition of center of mass to each part. Dividing by $M_1 + M_2$ gives the formula. Choosing then $O = G_1$ one obtains $G - G_1 = \dfrac{M_2}{M_1 + M_2}\,(G_2 - G_1)$, hence $G$ lies on the segment $G_1 G_2$ and its distance from $G_1$ is to the length of the segment as $M_2$ is to the total mass.
:::
::::

::::teorema{#simmetria-materiale titolo="Material symmetry and center of mass"}
A plane $\pi$ is a **plane of material symmetry** of the system when the reflection with respect to $\pi$ maps the system onto itself preserving the masses, that is, when to every point of mass $m$ there corresponds the reflected point with the same mass and, in the continuous case, the density takes equal values at reflected points. If $\pi$ is a plane of material symmetry, then $G \in \pi$. Consequently, if the system admits two planes of material symmetry, $G$ lies on their line of intersection, and if it admits three planes not belonging to one and the same pencil, $G$ is their common point. Symmetry is the quickest tool for locating the center of mass of the standard bodies: the center of mass of a homogeneous rectangular plate is the center of the rectangle, that of a homogeneous disk or sphere is the geometric center.

:::dimostrazione
Choose the frame with the origin $O$ on $\pi$ and with the plane $\pi$ coinciding with the plane $Oxy$, so that the reflection changes the sign of the third coordinate. The points of the system group into reflected pairs $(x_i, y_i, z_i)$ and $(x_i, y_i, -z_i)$ of equal mass, while the points that may belong to $\pi$ have $z_i = 0$. In the sum $\sum_i m_i z_i$ the two terms of each pair are opposite and the terms of the points of $\pi$ vanish, hence $\sum_i m_i z_i = 0$ and therefore $z_G = 0$, that is, $G \in \pi$.
:::
::::

## Centers of mass of rods, plates, arcs and solids of revolution

Symmetries suffice for the more regular bodies; for the triangle, the half-disk, the circular sector and the solids of revolution the center of mass is computed by integration.

:::richiamo{titolo="Double and triple integrals"}
For a continuous function $f$ on a measurable region $D$ of the plane, the double integral $\displaystyle\int_D f\,dA$ is computed by strips with the reduction formulas, and in polar coordinates with $dA = r\,dr\,d\vartheta$. For a region $E$ of space the triple integral is computed by slices or in cylindrical and spherical coordinates, with $dV = r\,dr\,d\vartheta\,dz$ and $dV = r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi$. See the topics on multiple integrals in Mathematical Analysis 2.
:::

::::teorema{#baricentri-lamine titolo="Centers of mass of standard plates and arcs"}
For homogeneous bodies the following results hold.

- Rod of length $\ell$: the center of mass is the midpoint.
- Triangular plate: the center of mass is the intersection of the medians, which is at a distance from each side equal to one third of the corresponding height. For the triangle with vertices $(0,0)$, $(b, 0)$ and $(0, h)$ one gets $G = \left(\dfrac{b}{3},\ \dfrac{h}{3}\right)$.
- Circular sector of radius $R$ and half-angle $\alpha$, with the bisector on the $x$ axis and the vertex at the origin: $x_G = \dfrac{2R\sin\alpha}{3\alpha}$. For $\alpha = \dfrac{\pi}{2}$ one obtains the half-disk, with $x_G = \dfrac{4R}{3\pi}$.
- Circular arc of radius $R$ and half-angle $\alpha$, in the same position: $x_G = \dfrac{R\sin\alpha}{\alpha}$. For the half-circumference $x_G = \dfrac{2R}{\pi}$.

These four results are the building blocks with which composite plates and frames of rods appearing in the exercises are handled by additivity.

::struttura{poligoni="0,0 3,0 0,4.5" punti="1,1.5,G,baricentro" linee="0,3 1,3" tratteggi="0,1.5 3.6,1.5" etichette="1.3,3.15,b(y);3.75,1.75,y_G" quote="0 0,3 0,b,0.75;0 4.5,0 0,h,0.9" frecce="-0.8,0,4.4,0,x;0,-0.8,0,5.4,y" riferimento=0 titolo="The strip at height $y$ has width $b(y) = b\left(1 - \dfrac{y}{h}\right)$, hence the center of mass of the triangle is at a distance $\dfrac{h}{3}$ from the base"}

:::dimostrazione
For the rod the material symmetry with respect to the plane orthogonal to the rod at its midpoint gives the result at once.

For the triangle with vertices $(0,0)$, $(b,0)$ and $(0,h)$ one integrates by horizontal strips. The strip at height $y$ has width $b(y) = b\left(1 - \dfrac{y}{h}\right)$ and area $b(y)\,dy$, and its center of mass has ordinate $y$, hence, with $A = \dfrac{bh}{2}$ and constant density $\sigma$,
$$
y_G = \frac{1}{A} \int_0^h y\,b\left(1 - \frac{y}{h}\right) dy = \frac{2}{bh} \cdot b\left(\frac{h^2}{2} - \frac{h^2}{3}\right) = \frac{h}{3} .
$$
Interchanging the roles of the axes one obtains $x_G = \dfrac{b}{3}$. Since the two distances from the legs are one third of the respective heights, $G$ is the point where the medians meet, and this description does not depend on the frame chosen.

For the circular sector polar coordinates are used. The area is $A = \alpha R^2$ and
$$
x_G = \frac{1}{\alpha R^2} \int_{-\alpha}^{\alpha} \int_0^R r\cos\vartheta \cdot r\,dr\,d\vartheta = \frac{1}{\alpha R^2} \cdot \frac{R^3}{3} \cdot 2\sin\alpha = \frac{2R\sin\alpha}{3\alpha} .
$$
The ordinate vanishes because the bisector is an axis of material symmetry.

For the circular arc the length is $L = 2\alpha R$ and the line element is $ds = R\,d\vartheta$, hence
$$
x_G = \frac{1}{2\alpha R} \int_{-\alpha}^{\alpha} R\cos\vartheta \cdot R\,d\vartheta = \frac{R\sin\alpha}{\alpha} .
$$
:::
::::

::::teorema{#baricentri-solidi titolo="Centers of mass of solids of revolution"}
For homogeneous solids of revolution the center of mass lies on the axis of revolution, because every plane containing the axis is a plane of material symmetry. With respect to the base, and with the axis of revolution as the $z$ axis, the following values hold.

- Solid right circular cone of height $h$: $z_G = \dfrac{h}{4}$ from the base, on the segment joining the center of the base to the vertex.
- Solid half-sphere of radius $R$: $z_G = \dfrac{3R}{8}$ from the center of the base circle.
- Half spherical surface of radius $R$: $z_G = \dfrac{R}{2}$.

:::dimostrazione
For the cone with the base in the plane $z = 0$ and the vertex at $z = h$, the slice at height $z$ is a disk of radius $R\left(1 - \dfrac{z}{h}\right)$, hence, with $V = \dfrac{\pi R^2 h}{3}$,
$$
z_G = \frac{3}{\pi R^2 h} \int_0^h \pi R^2 \left(1 - \frac{z}{h}\right)^2 z\,dz = \frac{3}{h} \cdot \frac{h^2}{12} = \frac{h}{4} .
$$
For the solid half-sphere $z \ge 0$ spherical coordinates are used, with $V = \dfrac{2\pi R^3}{3}$:
$$
z_G = \frac{3}{2\pi R^3} \int_0^{2\pi} \int_0^{\frac{\pi}{2}} \int_0^R r\cos\vartheta \cdot r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi = \frac{3}{2\pi R^3} \cdot 2\pi \cdot \frac{R^4}{4} \cdot \frac{1}{2} = \frac{3R}{8} .
$$
For the half spherical surface the area element is $dA = R^2 \sin\vartheta\,d\vartheta\,d\varphi$ and the total area is $2\pi R^2$, hence an analogous computation gives $z_G = \dfrac{R}{2}$.
:::
::::

## Moments of inertia, radius of gyration and products of inertia

The center of mass exhausts the description of the system as long as the motion is translational. As soon as the system rotates, *how* the mass is distributed about the axis of rotation also matters, and the quantity that measures it is the moment of inertia.

:::definizione{#momento-di-inerzia titolo="Moment of inertia about an axis and radius of gyration"}
Let $a$ be a line in space and let $d_i$ be the distance of the point $P_i$ from $a$. The **moment of inertia** of the system about the axis $a$ is
$$
I_a = \sum_{i=1}^{N} m_i\,d_i^2
\qquad \text{or} \qquad
I_a = \int_{\mathcal{C}} d^2\,dm ,
$$
and it is measured in $\mathrm{kg\,m^2}$. The **radius of gyration** about $a$ is the length $\rho_a$ defined by
$$
I_a = M\,\rho_a^2 ,
\qquad\text{that is}\qquad
\rho_a = \sqrt{\frac{I_a}{M}} ,
$$
and it represents the distance from the axis at which the whole mass should be placed in order to have the same moment of inertia. It is written with the subscript of the axis so as to distinguish it from the volume density.

The moment of inertia appears in the kinetic energy and in the angular momentum of a rotating body, therefore two bodies of equal mass but with mass distributed differently respond differently to the same applied torque. A homogeneous ring of mass $m$ and radius $R$ has all its points at distance $R$ from the axis orthogonal to its plane through the center, hence $I = mR^2$ and $\rho = R$; a homogeneous disk of equal mass and radius has instead $I = \dfrac{1}{2}\,mR^2$, because part of the mass lies closer to the axis.

::struttura{poligoni="1.2,0.4 4.4,0.2 5.2,2.6 3.4,4.2 1.5,3.4" punti="3.4,2.1,P,pieno;3.4,0,H" frecce="0,0,6,0,a" tratteggi="3.4,2.1 3.4,0" etichette="3.6,1.05,d" riferimento=0 titolo="In the moment of inertia about the axis $a$ each mass element is weighted by the square of its distance $d$ from $a$, measured along the perpendicular $PH$"}

:::

:::definizione{#prodotti-di-inerzia titolo="Products of inertia and moment of inertia about a point"}
In the frame $(O; x, y, z)$ the three **axial moments of inertia** about the coordinate axes are
$$
I_{xx} = \int (y^2 + z^2)\,dm ,
\qquad
I_{yy} = \int (x^2 + z^2)\,dm ,
\qquad
I_{zz} = \int (x^2 + y^2)\,dm ,
$$
because the distance of a point from the $x$ axis is $\sqrt{y^2 + z^2}$, and similarly for the other two axes. The three **products of inertia** are
$$
I_{xy} = \int xy\,dm ,
\qquad
I_{xz} = \int xz\,dm ,
\qquad
I_{yz} = \int yz\,dm .
$$
This is the convention adopted throughout the subject, and with it the products of inertia appear in the tensor with a minus sign. The products of inertia may be positive, negative or zero, unlike the axial moments, which are always positive for a system not entirely contained in the axis.

The **moment of inertia about the point** $O$, also called the polar moment of inertia, is
$$
I_O = \int |P - O|^2\,dm = \int (x^2 + y^2 + z^2)\,dm ,
$$
and adding the three expressions of the axial moments one obtains $I_{xx} + I_{yy} + I_{zz} = 2\,I_O$. The equality serves as a quick check on the computations, because it relates three quantities computed separately.
:::

## The inertia tensor

:::definizione{#tensore-di-inerzia titolo="Inertia tensor"}
The **inertia tensor** relative to the pole $O$ is the linear operator $\mathbb{I}_O$ whose matrix in the basis $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ is
$$
\mathbb{I}_O =
\begin{pmatrix}
I_{xx} & -I_{xy} & -I_{xz} \\
-I_{xy} & I_{yy} & -I_{yz} \\
-I_{xz} & -I_{yz} & I_{zz}
\end{pmatrix}
=
\begin{pmatrix}
\displaystyle\int (y^2 + z^2)\,dm & -\displaystyle\int xy\,dm & -\displaystyle\int xz\,dm \\[8pt]
-\displaystyle\int xy\,dm & \displaystyle\int (x^2 + z^2)\,dm & -\displaystyle\int yz\,dm \\[8pt]
-\displaystyle\int xz\,dm & -\displaystyle\int yz\,dm & \displaystyle\int (x^2 + y^2)\,dm
\end{pmatrix} .
$$
The matrix is symmetric and depends on the pole $O$ and on the frame chosen; its diagonal collects the moments of inertia about the three coordinate axes and the off-diagonal positions collect the products of inertia with their sign changed.

The inertia tensor sums up in nine numbers, six of which are independent, all the information on the distribution of mass that the dynamics of the rigid body needs: the angular momentum of a rigid body with a fixed point at $O$ is $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ and its kinetic energy is $T = \dfrac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_O\,\vec{\omega}$, as will be seen in the topics on the dynamics of systems and of the rigid body. For the system of three points of mass $m$ placed at $(\ell, \ell, 0)$, $(0, \ell, \ell)$ and $(\ell, 0, \ell)$ one obtains
$$
\mathbb{I}_O = m\ell^2
\begin{pmatrix}
4 & -1 & -1 \\
-1 & 4 & -1 \\
-1 & -1 & 4
\end{pmatrix} .
$$
:::

::::teorema{#momento-rispetto-a-un-asse titolo="Moment of inertia about an axis through the pole"}
Let $a$ be the line through $O$ with unit vector $\vec{u} = u_x\,\hat{\imath} + u_y\,\hat{\jmath} + u_z\,\hat{k}$. Then
$$
I_a = \vec{u} \cdot \mathbb{I}_O\,\vec{u}
= I_{xx}u_x^2 + I_{yy}u_y^2 + I_{zz}u_z^2 - 2\,I_{xy}u_xu_y - 2\,I_{xz}u_xu_z - 2\,I_{yz}u_yu_z .
$$
Once the tensor relative to a pole is known, the moment of inertia about every axis through that pole is therefore obtained by a multiplication, without recomputing any integral. The quadratic form $\vec{u} \mapsto \vec{u} \cdot \mathbb{I}_O\,\vec{u}$ is positive definite, except in the case in which the whole mass lies on a line through $O$, because it takes the value $I_a \ge 0$ and vanishes only if all the points have zero distance from the axis of unit vector $\vec{u}$.

:::dimostrazione
The distance of a point $P$ from the line through $O$ with unit vector $\vec{u}$ is the magnitude of the component of $P - O$ orthogonal to $\vec{u}$, hence, setting $\vec{r} = P - O$,
$$
d^2 = |\vec{r}|^2 - (\vec{r} \cdot \vec{u})^2 .
$$
Since $|\vec{u}| = 1$, one may write $|\vec{r}|^2 = |\vec{r}|^2 (u_x^2 + u_y^2 + u_z^2)$, and expanding the second summand as well one obtains
$$
\begin{aligned}
d^2 &= (x^2 + y^2 + z^2)(u_x^2 + u_y^2 + u_z^2) - (x u_x + y u_y + z u_z)^2 \\[6pt]
&= (y^2 + z^2)u_x^2 + (x^2 + z^2)u_y^2 + (x^2 + y^2)u_z^2 - 2xy\,u_xu_y - 2xz\,u_xu_z - 2yz\,u_yu_z .
\end{aligned}
$$
Multiplying by $dm$ and integrating over $\mathcal{C}$, the six integrals that appear are by definition $I_{xx}$, $I_{yy}$, $I_{zz}$, $I_{xy}$, $I_{xz}$ and $I_{yz}$, therefore one obtains the expression of the statement, which is exactly the product $\vec{u} \cdot \mathbb{I}_O\,\vec{u}$ written in components.
:::
::::

:::osservazione{#sistemi-piani titolo="Plane systems"}
If the whole mass lies in the plane $Oxy$, then $z = 0$ for every point, hence $I_{xz} = I_{yz} = 0$ and
$$
I_{zz} = I_{xx} + I_{yy} .
$$
The tensor is therefore block diagonal: the $z$ axis is automatically a principal axis and the problem reduces to the $2 \times 2$ matrix of the moments and of the product of inertia in the plane. This is the situation of almost every exam exercise, in which the system consists of coplanar rods, plates and disks. The relation $I_{zz} = I_{xx} + I_{yy}$ is also used as a check: for a homogeneous rectangular plate of sides $a$ and $b$ and mass $m$, from the values $I_{xx} = \dfrac{mb^2}{12}$ and $I_{yy} = \dfrac{ma^2}{12}$ about the central axes parallel to the sides it follows that $I_{zz} = \dfrac{m(a^2 + b^2)}{12}$.
:::

:::esempio{titolo="Inertia tensor of a rectangular plate at a vertex"}
Let the homogeneous plate of mass $m$ be the rectangle $[0, a] \times [0, b]$ of the plane $Oxy$, with density $\sigma = \dfrac{m}{ab}$. Then
$$
I_{xx} = \sigma \int_0^a \int_0^b y^2\,dy\,dx = \frac{m}{ab} \cdot a \cdot \frac{b^3}{3} = \frac{mb^2}{3} ,
\qquad
I_{yy} = \frac{ma^2}{3} ,
$$
$$
I_{xy} = \sigma \int_0^a \int_0^b xy\,dy\,dx = \frac{m}{ab} \cdot \frac{a^2}{2} \cdot \frac{b^2}{2} = \frac{mab}{4} ,
$$
hence, since $I_{zz} = I_{xx} + I_{yy}$,
$$
\mathbb{I}_O = \frac{m}{12}
\begin{pmatrix}
4b^2 & -3ab & 0 \\
-3ab & 4a^2 & 0 \\
0 & 0 & 4(a^2 + b^2)
\end{pmatrix} .
$$
The product of inertia is positive because the plate lies in the first quadrant, where $xy > 0$.
:::

## The Huygens-Steiner theorem

::::teorema{#huygens-steiner titolo="Huygens-Steiner theorem"}
Let $a$ be a line and $a_G$ the line parallel to $a$ through the center of mass $G$, and let $d$ be the distance between the two lines. Then
$$
I_a = I_{a_G} + M\,d^2 .
$$
Among all the lines of a given direction, the one through the center of mass therefore gives the smallest moment of inertia, and the moment of inertia about an arbitrary line is obtained from the one about the central line by adding the transport term $Md^2$. The theorem is the tool with which one passes from the tabulated values, always referred to central axes, to the axes that appear in the problem: a homogeneous rod of mass $m$ and length $\ell$ has $I_{a_G} = \dfrac{m\ell^2}{12}$ about the axis orthogonal to it through the midpoint, hence about the parallel axis through one end, which is at distance $d = \dfrac{\ell}{2}$, one gets
$$
I = \frac{m\ell^2}{12} + m\,\frac{\ell^2}{4} = \frac{m\ell^2}{3} .
$$

::struttura{poligoni="1.3,0.5 4.6,0.3 5.4,2.8 3.5,4.3 1.6,3.5" punti="3.3,2.2,G,baricentro" frecce="0,0,6.2,0,a" tratteggi="0,2.2 6.2,2.2;3.3,2.2 3.3,0" etichette="6.1,2.6,a_G;3.5,1.05,d" riferimento=0 titolo="The lines $a$ and $a_G$ are parallel and at distance $d$, hence $I_a = I_{a_G} + M d^2$"}

:::dimostrazione
Choose the frame with the origin at $G$, with the $z$ axis parallel to the two lines and with the $x$ axis directed from $G$ towards the line $a$, so that $a$ is the line of equations $x = d$, $y = 0$. The distance of a point $P = (x, y, z)$ from the line $a$ satisfies
$$
d_a^2 = (x - d)^2 + y^2 = (x^2 + y^2) - 2dx + d^2 ,
$$
while its distance from the $z$ axis, that is from $a_G$, satisfies $d_{a_G}^2 = x^2 + y^2$. Multiplying by $dm$ and integrating one obtains
$$
I_a = I_{a_G} - 2d \int x\,dm + M d^2 .
$$
The origin is the center of mass, hence $\displaystyle\int x\,dm = M x_G = 0$ and the middle term vanishes. It follows that $I_a = I_{a_G} + M d^2$.
:::
::::

:::teorema{#steiner-prodotti titolo="Transport of the products of inertia"}
Let $(G; x, y, z)$ and $(O; x, y, z)$ be two frames with parallel axes and with the origin respectively at the center of mass and at a point $O$, and let $x_G$, $y_G$, $z_G$ be the coordinates of $G$ in the frame with pole $O$. Then
$$
I_{xy}^{(O)} = I_{xy}^{(G)} + M\,x_G\,y_G ,
$$
and similarly for $I_{xz}$ and $I_{yz}$. The formula follows from the expansion $x^{(O)} = x^{(G)} + x_G$ and from the vanishing of the integrals $\displaystyle\int x^{(G)}\,dm$ and $\displaystyle\int y^{(G)}\,dm$, by the same step as in the previous proof. Together with the Huygens-Steiner theorem it allows the whole inertia tensor to be transported from the center of mass to any other pole. For the rectangular plate $[0,a] \times [0,b]$ the value already computed is checked in this way: from the central axes, where $I_{xy}^{(G)} = 0$ by symmetry, it follows that $I_{xy}^{(O)} = m \cdot \dfrac{a}{2} \cdot \dfrac{b}{2} = \dfrac{mab}{4}$.
:::

:::attenzione
The Huygens-Steiner theorem compares a line with the parallel line through the **center of mass**, and not two arbitrary parallel lines. For a homogeneous rod of mass $m$ and length $\ell$ the moment of inertia about the axis orthogonal to it through one end is $\dfrac{m\ell^2}{3}$; the parallel axis through the other end is at distance $\ell$ from the first one, but adding $m\ell^2$ would give $\dfrac{4m\ell^2}{3}$, whereas the true value is again $\dfrac{m\ell^2}{3}$ by symmetry. The transport is therefore carried out in two steps, first from the given axis to the central one and then from the central one to the axis sought.
:::

## Principal axes and principal moments of inertia

:::definizione{#assi-principali titolo="Principal axes and principal moments of inertia"}
A line through $O$ with unit vector $\vec{u}$ is a **principal axis of inertia** relative to the pole $O$ when $\vec{u}$ is an eigenvector of the tensor, that is when
$$
\mathbb{I}_O\,\vec{u} = I\,\vec{u}
$$
for some number $I$, which is called a **principal moment of inertia** and coincides with $I_a = \vec{u} \cdot \mathbb{I}_O\,\vec{u}$. An orthogonal triple of principal axes relative to $O$ is called a **principal frame of inertia**; if $O = G$ one speaks of a **central frame of inertia**. In the principal frame $\xi$, $\eta$, $\zeta$ the products of inertia vanish and the matrix is diagonal,
$$
\mathbb{I}_O =
\begin{pmatrix}
A & 0 & 0 \\
0 & B & 0 \\
0 & 0 & C
\end{pmatrix} ,
$$
with $A$, $B$, $C$ the principal moments. In a principal frame the angular momentum $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ has components $A\omega_\xi$, $B\omega_\eta$, $C\omega_\zeta$ and the rotational kinetic energy becomes a sum of three terms, therefore Euler's equations of rigid body dynamics are written in this frame.
:::

:::richiamo{titolo="Spectral theorem"}
A real symmetric $n \times n$ matrix has $n$ real eigenvalues, counted with multiplicity, and there exists an orthonormal basis of $\mathbb{R}^n$ formed by its eigenvectors; eigenvectors relative to distinct eigenvalues are orthogonal. See the topic on diagonalization in Linear algebra.
:::

::::teorema{#esistenza-terna-principale titolo="Existence of the principal frame of inertia"}
For every pole $O$ there exists an orthogonal triple of principal axes of inertia relative to $O$, and the three principal moments are real and non-negative. Consequently, for every material system and for every pole a frame can be chosen in which the tensor is diagonal, and in it the moment of inertia about the axis with unit vector $\vec{u} = (u_\xi, u_\eta, u_\zeta)$ reduces to
$$
I_a = A\,u_\xi^2 + B\,u_\eta^2 + C\,u_\zeta^2 .
$$

:::dimostrazione
The matrix of $\mathbb{I}_O$ is real and symmetric, since $I_{xy} = I_{yx}$ and similarly for the other products of inertia. By the spectral theorem there exists then an orthonormal basis $\vec{e}_1$, $\vec{e}_2$, $\vec{e}_3$ of eigenvectors, and the three lines through $O$ in those directions are principal axes by definition. Each eigenvalue equals $I_j = \vec{e}_j \cdot \mathbb{I}_O\,\vec{e}_j$, which is the moment of inertia about the corresponding axis, hence it is real and non-negative.
:::
::::

::::teorema{#assi-principali-per-simmetria titolo="Principal axes from material symmetry"}
Let $\pi$ be a plane of material symmetry of the system and let $O \in \pi$. Then the line through $O$ orthogonal to $\pi$ is a principal axis of inertia relative to $O$. In particular, if the system admits an axis of material symmetry, that line is principal with respect to each of its points, and for a plane system contained in $Oxy$ every line of the plane which is an axis of material symmetry is principal with respect to each of its points.

The theorem saves the whole computation of the eigenvectors: for the homogeneous rectangular plate the central axes parallel to the sides are principal, because the two planes orthogonal to the plate that contain them are planes of material symmetry, and for a homogeneous disk every diameter is principal with respect to the center.

::struttura{poligoni="-2.4,-1.6 2.4,-1.6 2.4,1.6 -2.4,1.6" punti="1.2,0.8,P;-1.2,0.8,P′" tratteggi="-1.2,0.8 1.2,0.8" frecce="-3.2,0,3.4,0,x;0,-2.3,0,2.5,y" riferimento=0 titolo="To every point $P = (x, y)$ there corresponds the reflected point $P' = (-x, y)$ with the same mass, hence $I_{xy} = 0$ and the axes $x$ and $y$ are principal"}

:::dimostrazione
Choose the frame with the origin at $O$ and with $\pi$ coinciding with the plane $Oxy$, so that the $z$ axis is orthogonal to $\pi$ and the reflection with respect to $\pi$ maps $(x, y, z)$ to $(x, y, -z)$. By the hypothesis of material symmetry the points group into reflected pairs of equal mass, and the terms $xz$ and $yz$ of the two masses of each pair are opposite, while they vanish for the points with $z = 0$. It follows that
$$
I_{xz} = \int xz\,dm = 0 ,
\qquad
I_{yz} = \int yz\,dm = 0 ,
$$
hence the third column of the matrix is $(0, 0, I_{zz})$ and therefore $\mathbb{I}_O\,\hat{k} = I_{zz}\,\hat{k}$. The unit vector $\hat{k}$ is then an eigenvector and the line through $O$ orthogonal to $\pi$ is a principal axis.
:::
::::

:::osservazione{#ellissoide-di-inerzia titolo="Ellipsoid of inertia"}
The locus of the points $P$ such that, setting $\vec{r} = P - O$, one has $\vec{r} \cdot \mathbb{I}_O\,\vec{r} = 1$ is a quadric called the **ellipsoid of inertia** relative to the pole $O$. Since the quadratic form is positive definite for a system not contained in a line through $O$, the quadric is an ellipsoid, and from the theorem on the existence of the principal frame it follows that its axes of symmetry are the principal axes of inertia, with semiaxes $\dfrac{1}{\sqrt{A}}$, $\dfrac{1}{\sqrt{B}}$, $\dfrac{1}{\sqrt{C}}$. The distance of the center $O$ from the point of the ellipsoid in the direction $\vec{u}$ equals $\dfrac{1}{\sqrt{I_a}}$, hence the ellipsoid represents the distribution of the moments of inertia about $O$: it is flattened in the directions of large moment of inertia and elongated in those of small moment of inertia.
:::

## Moments of inertia of the standard homogeneous bodies

::::teorema{#momenti-notevoli titolo="Moments of inertia of homogeneous bodies"}
For homogeneous bodies of mass $m$ the following values hold, referred to central axes except where another axis is indicated.

- Rod of length $\ell$, axis orthogonal to the rod: $I = \dfrac{m\ell^2}{12}$; about the orthogonal axis through one end, $I = \dfrac{m\ell^2}{3}$.
- Ring, that is a material circumference, of radius $R$: $I = mR^2$ about the axis orthogonal to the plane through the center, $I = \dfrac{mR^2}{2}$ about a diameter.
- Disk of radius $R$: $I = \dfrac{mR^2}{2}$ about the axis orthogonal to the plane through the center, $I = \dfrac{mR^2}{4}$ about a diameter.
- Rectangular plate of sides $a$ and $b$: $I = \dfrac{mb^2}{12}$ about the axis parallel to the side $a$, $I = \dfrac{m(a^2 + b^2)}{12}$ about the axis orthogonal to the plate.
- Solid sphere of radius $R$: $I = \dfrac{2mR^2}{5}$ about a diameter. Spherical surface of radius $R$: $I = \dfrac{2mR^2}{3}$.
- Solid cylinder of radius $R$ and height $h$: $I = \dfrac{mR^2}{2}$ about its own axis, $I = \dfrac{m(3R^2 + h^2)}{12}$ about the central axis orthogonal to that one.

These values, together with the Huygens-Steiner theorem and with additivity, cover all the systems of the exercises.

::struttura{poligoni="8.8,-0.12 11.2,-0.12 11.2,1.68 8.8,1.68" cerchi="3.4,0.8,1.2;6.6,0.8,1.2;6.6,0.8,0.95,foro;14.2,0.8,1.1" linee="-0.6,0.8 1.6,0.8" punti="0.5,0.8,G,baricentro;3.4,0.8,G,baricentro;6.6,0.8,G,baricentro;10,0.78,G,baricentro;14.2,0.8,G,baricentro" frecce="0.5,-0.9,0.5,2.5,z;3.4,-0.9,3.4,2.5,z;6.6,-0.9,6.6,2.5,z;10,-0.9,10,2.5,z;14.2,-0.9,14.2,2.5,z" etichette="0.3,-2.2,rod;3.2,-2.2,disk;6.4,-2.2,ring;9.8,-2.2,plate;14.1,-2.2,sphere" quote="-0.6 0.8,1.6 0.8,ℓ,0.75;3.4 0.8,4.6 0.8,R,1.65;8.8 -0.12,11.2 -0.12,a,0.6;11.2 -0.12,11.2 1.68,b,0.6" riferimento=0 titolo="The standard bodies with the central axis $z$ orthogonal to the page for the rod, the disk, the ring and the plate, and with a diameter for the sphere"}

:::dimostrazione
For the rod of density $\lambda = \dfrac{m}{\ell}$ placed on the $x$ axis between $-\dfrac{\ell}{2}$ and $\dfrac{\ell}{2}$, the moment about the $z$ axis through the midpoint is
$$
I = \int_{-\frac{\ell}{2}}^{\frac{\ell}{2}} \frac{m}{\ell}\,x^2\,dx = \frac{m}{\ell} \cdot \frac{\ell^3}{12} = \frac{m\ell^2}{12} ,
$$
and the value for the axis through one end follows from the Huygens-Steiner theorem with $d = \dfrac{\ell}{2}$.

For the disk of density $\sigma = \dfrac{m}{\pi R^2}$, in polar coordinates,
$$
I_{zz} = \int_0^{2\pi} \int_0^R \sigma\,r^2 \cdot r\,dr\,d\vartheta = \frac{m}{\pi R^2} \cdot 2\pi \cdot \frac{R^4}{4} = \frac{mR^2}{2} .
$$
The disk is a plane system with two orthogonal diameters that are axes of material symmetry, hence $I_{xx} = I_{yy}$; since $I_{zz} = I_{xx} + I_{yy}$, each moment about a diameter equals $\dfrac{mR^2}{4}$. For the ring all the points are at distance $R$ from the $z$ axis, therefore $I_{zz} = mR^2$ and by the same argument the moment about a diameter equals $\dfrac{mR^2}{2}$.

For the solid sphere of density $\rho = \dfrac{3m}{4\pi R^3}$, in spherical coordinates the distance from the $z$ axis is $r\sin\vartheta$, hence
$$
I_{zz} = \int_0^{2\pi} \int_0^{\pi} \int_0^R \rho\,(r\sin\vartheta)^2\,r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi = \frac{3m}{4\pi R^3} \cdot 2\pi \cdot \frac{R^5}{5} \cdot \frac{4}{3} = \frac{2mR^2}{5} .
$$
The values for the rectangular plate, for the cylinder and for the spherical surface are obtained with analogous integrals.
:::
::::

## Composite bodies and bodies with holes

:::osservazione{#corpi-con-fori titolo="Composite bodies and bodies with holes"}
The moment of inertia is additive, because it is a sum or an integral extended to the system: the moment of inertia of a system formed by several parts, about one and the same axis, is the sum of the moments of inertia of the parts about that axis. The same holds for the products of inertia and hence for the tensor, provided that all the parts are referred to the same pole and to the same frame.

A homogeneous body with a hole is treated as the difference of two solid bodies: the solid body that occupies the whole outer region, and the body that occupies the hole, both with the density of the given body. The masses of the two fictitious bodies are obtained from the density, and not from the mass $m$ of the body with the hole, therefore the first step is always the computation of $\sigma$ or $\rho$. For a homogeneous disk of radius $R$ and mass $m$ with a circular hole of radius $\dfrac{R}{2}$ centered at distance $\dfrac{R}{2}$ from the center $O$ one gets
$$
\sigma = \frac{m}{\pi R^2 - \pi \dfrac{R^2}{4}} = \frac{4m}{3\pi R^2} ,
\qquad
m_1 = \sigma\,\pi R^2 = \frac{4m}{3} ,
\qquad
m_2 = \sigma\,\pi \frac{R^2}{4} = \frac{m}{3} ,
$$
and the moment of inertia about the axis orthogonal to the plane through $O$ equals
$$
I_O = \frac{1}{2}\,m_1 R^2 - \left( \frac{1}{2}\,m_2 \frac{R^2}{4} + m_2 \frac{R^2}{4} \right) = \frac{2mR^2}{3} - \frac{mR^2}{8} = \frac{13\,mR^2}{24} ,
$$
where the moment of the missing disk has been transported from its center to $O$ with the Huygens-Steiner theorem.

::struttura{cerchi="0,0,2.2;1.1,0,1.1,foro" punti="0,0,O;1.1,0,C_2;-0.367,0,G,baricentro" quote="0 0,1.1 0,d,-1.4;0 0,2.2 0,R,-2.2" riferimento=0 titolo="Disk with a hole: the hole has radius $\dfrac{R}{2}$ and center $C_2$ at distance $d = \dfrac{R}{2}$ from $O$, hence the center of mass $G$ moves to the side opposite the hole"}

:::
