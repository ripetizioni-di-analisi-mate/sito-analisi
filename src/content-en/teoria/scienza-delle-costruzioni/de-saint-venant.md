---
titolo: "The Saint-Venant problem"
sommario: "Stresses in prismatic beams under axial force, bending, shear, and torsion, including solid, hollow, and thin-walled sections."
---

## From internal forces and moments to stresses

:::definizione{#sezione-prismatica titolo="Prismatic beams and section resultants"}
In a prismatic beam the cross sections have identical shapes and the same orientation along the beam axis. Let $x$ be the longitudinal coordinate. In the cross-sectional plane take $y$ upward and $z$ out of the page, with the origin at the centroid $G$. These axes form a right-handed system. In the cross-sectional views the arrows show the coordinate directions directly.

On the face with positive normal $x$, the traction vector has a normal component $\sigma_x$ and two shear components $\tau_{xy}$ and $\tau_{xz}$, directed along $y$ and $z$, respectively. Integrating each component over the area $A$ gives the resultant force. Since the position vector of each elementary force starts at $G$, the resultant moment is the integral of the cross product of that position vector with the force.

$$
\begin{aligned}
N &= \int_A \sigma_x\,\mathrm dA,\\[4pt]
M_z &= -\int_A y\,\sigma_x\,\mathrm dA,\\[4pt]
M_y &= \int_A z\,\sigma_x\,\mathrm dA,\\[4pt]
M_t &= \int_A(y\tau_{xz}-z\tau_{xy})\,\mathrm dA.
\end{aligned}
$$

The axial force $N$ is positive in tension. The bending moment $M_z$ is positive when it puts the bottom fibers in tension. The torque $M_t$ is positive by the right-hand rule about $x$. These relations can also be used to check a stress field. If the field is correct, integrating its stresses recovers the specified internal forces and moments.
:::

:::osservazione{#principio-saint-venant titolo="Saint-Venant's principle"}
Consider a homogeneous, linearly elastic prism with a traction-free lateral surface and loads applied to its ends. Two load distributions on the same end are statically equivalent if they have the same resultant force and the same resultant moment about a point. Their difference is therefore a self-equilibrated load. The stress field caused by that difference decays with distance from the loaded region. The distance required depends on the geometry and on how the load is transmitted.

::struttura{nodi="A,0,0,-;B,7,0,-" poligoni="0,-0.65 7,-0.65 7,0.65 0,0.65" tratteggi="1.2,-0.65 1.2,0.65;5.8,-0.65 5.8,0.65" forze="0 0.35,-0.45,0;0 0,-0.45,0;0 -0.35,-0.45,0;7 0,1.35,0,N" etichette="3.5,1.05,away from the ends" titolo="End loads and the region in which the stress distribution is examined"}

A tie held in a grip receives load through concentrated contact regions. An identical tie with a traction distributed over its entire end receives the same resultant in a different way. The stresses in the two models differ near the grip. Far from the end, a uniform distribution represents the tie in concentric tension.

Holes, notches, and abrupt changes in cross section also cause local disturbances. The nominal beam stress provides the reference for assessing the effect of a detail. At the detail itself a model that represents its geometry is needed.
:::

:::esempio{titolo="Cross section of a steel member"}
In this type of cross section the flanges and web have different widths when shown at the same scale. In the Jourawski shear formula the local width is the width of the element intersected by the cut. The first moment of area is calculated for the part of the cross section separated by that cut.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/profilo-h.webp" alt="End view of a steel section showing its flanges and web" width="1211" height="1024" loading="lazy" decoding="async"><figcaption>Cross section of a steel member. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Balk6.jpg">Anders Lagerås</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a>.</figcaption></figure>
:::

## Concentric tension and compression

::::teorema{#sforzo-normale-centrato titolo="Axial stress and strain"}
For a homogeneous, isotropic, linearly elastic prism with a free lateral surface, subjected only to a concentric axial force $N$, the normal stress away from the ends is $\sigma_x=\dfrac{N}{A}$. If $E$ is Young's modulus and $L$ the length of the segment, the longitudinal strain is $\varepsilon_x=\dfrac{N}{EA}$ and the change in length is $\Delta L=\dfrac{NL}{EA}$, provided $N$, $E$, and $A$ are constant.

:::dimostrazione
The uniform distribution satisfies local equilibrium because all of its derivatives vanish. The lateral surface is traction-free because both shear and transverse normal stresses vanish. The resultant force is $\sigma_x A$. The resultant moments vanish because the first moments of area about the centroidal axes are zero. Hooke's law then gives $\varepsilon_x=\dfrac{\sigma_x}{E}$. Integrating the constant strain along the segment gives $\Delta L$.
:::
::::

:::esempio{titolo="Elongation and lateral contraction"}
A tie of rectangular cross section with sides $30\,\mathrm{mm}$ and $40\,\mathrm{mm}$ and length $1\,200\,\mathrm{mm}$ carries a tensile force of $48\,\mathrm{kN}$. Young's modulus is $200\,000\,\mathrm{MPa}$ and Poisson's ratio is $\nu=0.30$. The stress is $\dfrac{48\,000}{1\,200}\,\mathrm{MPa}=40\,\mathrm{MPa}$ and the axial strain is $2\cdot10^{-4}$. The change in length is therefore $0.24\,\mathrm{mm}$.

::struttura{nodi="A,0,0,-;B,8,0,-" poligoni="0,-0.5 8,-0.5 8,0.5 0,0.5" forze="A,-1.45,0,N;B,1.45,0,N" quote="A,B,1 200 mm,0.95" titolo="Prismatic tie in concentric tension"}

Since the transverse stresses are zero, isotropic Hooke's law gives $\varepsilon_y=\varepsilon_z=-\nu\varepsilon_x$. The side originally measuring $40\,\mathrm{mm}$ shortens by $0.0024\,\mathrm{mm}$. The lateral change is therefore small compared with the axial elongation, although it is part of the three-dimensional strain state.

The same calculation applies to concentric compression with $N<0$. If the member is slender, its straight configuration becomes unstable at a load that depends on its flexural rigidity and end restraints. This condition is addressed in elastic stability analysis.
:::

## Bending about a principal axis and the flexure formula

::::teorema{#navier titolo="Navier's flexure formula"}
Consider a homogeneous, linearly elastic prismatic beam. The axes $y$ and $z$ are principal centroidal axes. If only $N$ and $M_z$ act, the stress is

$$
\sigma_x(y)=\frac{N}{A}-\frac{M_z y}{I_z},
\qquad
I_z=\int_A y^2\,\mathrm dA.
$$

:::dimostrazione
Start from the longitudinal strain of the fibers. In pure bending the cross sections can rotate while remaining plane, and axial strain varies linearly with $y$. Under the sign convention used here, a positive moment shortens fibers at positive heights. Let $\varepsilon_0$ be the axial strain at the centroid and $\kappa$ the coefficient specifying the strain gradient. Then $\varepsilon_x=\varepsilon_0-\kappa y$. Since the material is homogeneous and linearly elastic, the stress is $E(\varepsilon_0-\kappa y)$.

The integral of the term linear in $y$ vanishes because the axis is centroidal. Hence $N=EA\varepsilon_0$. In the moment about $z$, the constant term makes no contribution and the linear term gives $M_z=EI_z\kappa$. Substituting these two expressions gives the formula.
:::

If $N=0$ and $M_z\ne0$, the neutral axis is $y=0$. For $M_z>0$, the top fiber is in compression and the bottom fiber in tension. In a cross section without symmetry about $z$, stress magnitudes at the two extreme fibers can differ because their distances from $z$ differ.
::::

:::esempio{titolo="Extreme fiber stresses in a rectangular section"}
A cross section of width $60\,\mathrm{mm}$ and depth $100\,\mathrm{mm}$ has $I_z=\dfrac{60\cdot100^3}{12}\,\mathrm{mm^4}=5\cdot10^6\,\mathrm{mm^4}$. The section modulus equals $I_z$ divided by the distance to the extreme fiber, here $W_z=100\,000\,\mathrm{mm^3}$. With $M_z=2\,\mathrm{kN\,m}$, the top stress is $-20\,\mathrm{MPa}$ and the bottom stress is $20\,\mathrm{MPa}$.

::grafico{curve="t,-0.4*t,-50,50" xmin=-55 xmax=55 ymin=-25 ymax=25 nomi="y,σ" legenda="\sigma_x=-0.4y\quad(y\ \text{in mm},\ \sigma_x\ \text{in MPa})" punti="-50,20;0,0;50,-20" titolo="Normal stress distribution in a rectangular section"}

Adding a concentric compressive force of $30\,\mathrm{kN}$ to the same section gives a contribution $\dfrac{N}{A}$ equal to $-5\,\mathrm{MPa}$. The slope of the stress diagram is unchanged, but every ordinate decreases by $5\,\mathrm{MPa}$. The neutral axis moves to height $-12.5\,\mathrm{mm}$. More than half the section depth is now in compression.
:::

## Unsymmetrical bending and eccentric compression

:::teorema{#flessione-deviata titolo="Bending about two principal axes"}
When bending about the two principal centroidal axes $y$ and $z$ is superposed, the normal stress is an affine function of the cross-sectional coordinates:

$$
\sigma_x(y,z)=\frac{N}{A}-\frac{M_z y}{I_z}+\frac{M_y z}{I_y},
\qquad
I_y=\int_A z^2\,\mathrm dA.
$$

The sign of the term in $z$ follows from the definition $M_y=\int_A z\sigma_x\,\mathrm dA$. Since the axes are principal, $\int_A yz\,\mathrm dA=0$. Each bending term therefore produces only its own moment. Set $\sigma_x=0$ to find the neutral axis. This line may lie outside the section if the uniform contribution is sufficiently large that all stresses have the same sign.

::struttura{poligoni="-20,-30 20,-30 20,30 -20,30" tratteggi="-20,-20 20,20" frecce="-25,0,25,0,z;0,-35,0,35,y" punti="20,15,P" quote="-20 -30,20 -30,40 mm,5;20 -30,20 30,60 mm,13" riferimento=0 titolo="Inclined neutral axis and point P in the section"}

For example, with $N=0$, $I_z=720\,000\,\mathrm{mm^4}$, $I_y=320\,000\,\mathrm{mm^4}$, $M_z=1.44\,\mathrm{kN\,m}$, and $M_y=0.64\,\mathrm{kN\,m}$, the two coefficients have equal magnitudes. The neutral axis is therefore $y=z$. At point $P$ with $y=15\,\mathrm{mm}$ and $z=20\,\mathrm{mm}$, the stress is $-30\,\mathrm{MPa}+40\,\mathrm{MPa}=10\,\mathrm{MPa}$. For a polygonal section the extrema of this affine function occur at the vertices because the stress varies linearly on every line segment joining two points.
:::

:::osservazione{titolo="Calculations about nonprincipal centroidal axes"}
For an angle section, centroidal axes parallel to the legs generally have a nonzero product of inertia. One approach is to rotate to the principal axes and resolve the moment in that coordinate system. Alternatively, write $\sigma_x=\dfrac{N}{A}+a y+b z$ directly and determine the coefficients $a$ and $b$ together. If $I_{yz}=\int_A yz\,\mathrm dA$, the moment conditions become

$$
\begin{cases}
a I_z+b I_{yz}=-M_z,\\
a I_{yz}+b I_y=M_y.
\end{cases}
$$

The term $I_{yz}$ couples the two equations. For a cross section of positive area extending in two directions, the Cauchy–Schwarz inequality gives $I_y I_z>I_{yz}^2$. The system therefore has a unique solution. For principal axes, $I_{yz}=0$, so the coefficients can be found separately and the unsymmetrical bending formula is recovered. The coordinates at which the stress is evaluated must refer to the same axes as the moments and second moments of area.
:::

:::esempio{#nocciolo titolo="Eccentric compression and the kern"}
A compressive force of magnitude $P$ has a line of action through $y=e_y$, $z=e_z$. The axial resultant is $N=-P$. Transferring the force to the centroid preserves the moments $M_z=Pe_y$ and $M_y=-Pe_z$. For a rectangle with depth $h$ along $y$ and width $b$ along $z$, the maximum stress occurs at the corner opposite the point of application. Substituting $I_z=\dfrac{Ah^2}{12}$ and $I_y=\dfrac{Ab^2}{12}$ gives

$$
\sigma_{\max}=\frac{P}{A}
\left(-1+\frac{6|e_y|}{h}+\frac{6|e_z|}{b}\right).
$$

::struttura{poligoni="-60,-90 60,-90 60,90 -60,90" linee="0,30 20,0 0,-30 -20,0 0,30" frecce="-75,0,75,0,z;0,-103,0,103,y" punti="10,15,P" riferimento=0 titolo="Kern of a rectangle with sides of 120 mm and 180 mm"}

The **kern** is the set of points at which a compressive force can be applied while maintaining compression throughout the section. For a rectangle it is the rhombus defined by $\dfrac{6|e_y|}{h}+\dfrac{6|e_z|}{b}\le1$. If the eccentricity is purely vertical, the condition reduces to $|e_y|\le\dfrac{h}{6}$. If the load passes through an edge of the rhombus, at least one corner has zero stress. A section with no tensile strength may require a partial-contact model if the line of action lies outside the kern.
:::

## Transverse shear and the Jourawski formula

::::teorema{#jourawski titolo="Shear flow and average shear stress"}
Consider a slender prismatic beam symmetric about $y$ and subject to vertical shear. Let $V_y$ denote the shear resultant on the face with positive normal $x$. With the sign convention used in this course for the shear-force diagram, $V_y=-T$. At height $y$, let $b(y)$ be the width of the material along a horizontal strip and $S_z(y)$ be the first moment, about $z$, of the area above the strip. The average shear stress across the strip is

$$
\overline{\tau}_{xy}(y)=\frac{V_y S_z(y)}{I_z b(y)}.
$$

:::dimostrazione
In the area above the strip, the bending stress produces an axial resultant $-\dfrac{M_z S_z}{I_z}$. Between two sections a distance $\mathrm dx$ apart, this resultant changes by $-\dfrac{T S_z}{I_z}\,\mathrm dx$, since $M_z'=T$. For the upper element to be in equilibrium, its lower face must carry a longitudinal force opposite to this change. The lower face has normal $-y$. By symmetry of the shear stresses, the longitudinal traction on that face has the sign opposite to $\tau_{xy}$. Dividing the force by $b\,\mathrm dx$ and using $V_y=-T$ gives the formula.
:::

The product $q_V=b\overline{\tau}_{xy}$ is the **shear flow**, measured in $\mathrm{N/mm}$. Dividing by the local width gives an average stress in $\mathrm{MPa}$. The formula determines how much longitudinal force a connection along the beam must transmit.
::::

:::esempio{titolo="Shear in a rectangular section"}
In a rectangle of width $b$ and depth $h$, the area above height $y$ is a rectangle of height $\dfrac h2-y$. Its centroid is at $\dfrac{\frac h2+y}{2}$, so $S_z(y)=\dfrac b2(\dfrac{h^2}{4}-y^2)$. Substituting $I_z=\dfrac{bh^3}{12}$ gives

$$
\overline{\tau}_{xy}(y)=\frac{3V_y}{2A}
\left(1-\frac{4y^2}{h^2}\right).
$$

::grafico{curve="t,1.875*(1-t^2/120^2),-120,120" xmin=-130 xmax=130 ymin=-0.15 ymax=2.3 nomi="y,τ" legenda="|\tau_{xy}|=1.875\left(1-\dfrac{y^2}{120^2}\right)\quad(y\ \text{in mm},\ \tau_{xy}\ \text{in MPa})" punti="-120,0;0,1.875;60,1.40625;120,0" titolo="Average shear stress for a 120 × 240 mm section under a 36 kN force"}

The parabola is zero at both extreme fibers and reaches its maximum at middepth. The average over the entire cross section is $\dfrac{V_y}{A}$, while the value at the centroid is one and a half times that average. For $b=120\,\mathrm{mm}$, $h=240\,\mathrm{mm}$, and $|V_y|=36\,\mathrm{kN}$, the magnitudes at the centroid and at $60\,\mathrm{mm}$ are $1.875\,\mathrm{MPa}$ and $1.40625\,\mathrm{MPa}$, respectively.
:::

:::osservazione{titolo="Shear in the flange and web"}
In an I-section the first moment of area approaches the same value from either side of the upper flange–web junction. The width changes from the flange width to the web thickness, so shear flow remains continuous in the model while average shear stress changes. For example, with flange width $100\,\mathrm{mm}$ and web thickness $8\,\mathrm{mm}$, the ratio of the two average stress magnitudes is $12.5$, with the higher stress in the web.

::struttura{poligoni="-50,-50 50,-50 50,-38 4,-38 4,38 50,38 50,50 -50,50 -50,38 -4,38 -4,-38 -50,-38" tratteggi="-50,38 50,38" frecce="-61,0,61,0,z;0,-58,0,58,y" etichette="37,24,upper connection" riferimento=0 titolo="Change in local width at the flange–web junction"}

The model gives averages over two different strips. In a real section the fillet has its own geometry and the local field is three-dimensional. The ratio of the averages therefore compares flange and web, while the stress at an individual point in the fillet requires a local model.
:::

## Torsion of circular sections

::::teorema{#torsione-circolare titolo="Torsion of a circular section"}
In a homogeneous, isotropic shaft of solid or annular circular section, cross sections rotate as rigid bodies under pure torsion. Let $R$ be the outer radius, $r$ the inner radius, $\rho$ the distance from the axis, $G$ the shear modulus, and $\vartheta(x)$ the angle of twist of the cross section about $x$. For a segment with constant torsional rigidity,

$$
\begin{aligned}
J&=\frac{\pi}{2}(R^4-r^4),\\[4pt]
|\tau(\rho)|&=\frac{|M_t|\rho}{J},\\[4pt]
\vartheta'(x)&=\frac{M_t}{GJ}.
\end{aligned}
$$

:::dimostrazione
A point a distance $\rho$ from the axis moves through $\rho\,\mathrm d\vartheta$ between adjacent cross sections. Dividing by their separation $\mathrm dx$ gives the shear strain $\gamma=\rho\vartheta'$. The elastic law gives $\tau=G\rho\vartheta'$. Each shear stress acts tangentially to a circle and therefore has a moment arm $\rho$ about the axis. Integration gives $M_t=G\vartheta'\int_A\rho^2\,\mathrm dA$. For an annulus the area element integrated around the circumference is $2\pi\rho\,\mathrm d\rho$. Hence $J=\int_r^R2\pi\rho^3\,\mathrm d\rho=\dfrac{\pi}{2}(R^4-r^4)$.
:::

The stress in the material increases linearly with radius. In a solid shaft it vanishes at the axis, while the inner wall of a hollow shaft already lies at radius $r$. The maximum is at the outer surface. The relative twist of the ends of a segment of length $L$ is $\varphi=\dfrac{M_t L}{GJ}$, the product of torque and length divided by torsional rigidity.
::::

:::esempio{titolo="Tube under torque"}
A tube of radii $30\,\mathrm{mm}$ and $20\,\mathrm{mm}$ has $J=325\,000\pi\,\mathrm{mm^4}$. Under $M_t=260\,\mathrm{N\,m}$ the shear stress at the outer surface has magnitude $\dfrac{24}{\pi}\,\mathrm{MPa}$. Over a length $400\,\mathrm{mm}$ with $G=80\,000\,\mathrm{MPa}$, the relative twist is $\dfrac{0.004}{\pi}\,\mathrm{rad}$.

::struttura{cerchi="0,0,30;0,0,20,foro" frecce="-38,0,43,0,z;0,-38,0,38,y" punti="20,0,P_i;30,0,P_e" riferimento=0 titolo="Points on the inner and outer surfaces of the circular tube"}

At the inner surface the magnitude is two thirds of the outer value because the inner radius is two thirds of the outer radius. The hole reduces the torsional rigidity compared with a solid shaft. The reduction is obtained by subtracting the fourth-power contribution of the inner radius, because material farther from the axis contributes more to transmitting torque.
:::

## Closed thin-walled sections

::::teorema{#bredt titolo="Bredt's formula for a closed cell"}
A thin wall has thickness $t(s)$ small compared with the dimensions of the cross section. The coordinate $s$ measures distance along the wall centerline, and $A_m$ is the area enclosed by that line. For the pure torsion of a single closed cell of homogeneous material, the shear flow $q_t$ and torsion constant $J_t$ are

$$
q_t=\frac{M_t}{2A_m},
\qquad
\overline{\tau}_t(s)=\frac{q_t}{t(s)},
\qquad
J_t=\frac{4A_m^2}{\displaystyle\oint\frac{\mathrm ds}{t(s)}}.
$$

:::dimostrazione
Longitudinal equilibrium of a wall element without external shear forces requires the flows on adjacent sections of the contour to be equal. Thus $q_t$ is constant. The elementary force of magnitude $q_t\,\mathrm ds$ is tangent to the wall centerline. Its moment about $x$ is $q_t(y\,\mathrm dz-z\,\mathrm dy)$. Integrating around the oriented contour gives a geometric integral equal to $2A_m$. It follows that $M_t=2A_m q_t$.

The elastic energy per unit length is $\oint\dfrac{q_t^2}{2Gt(s)}\,\mathrm ds$, since the average shear stress is $\dfrac{q_t}{t(s)}$ and the area element is $t(s)\,\mathrm ds$. Substituting the shear flow just found and comparing with $\dfrac{M_t^2}{2GJ_t}$ gives the torsion constant.
:::
::::

:::esempio{titolo="Walls of different thicknesses"}
For a cell with a rectangular centerline of sides $80\,\mathrm{mm}$ and $60\,\mathrm{mm}$, the enclosed area is $4\,800\,\mathrm{mm^2}$. If the torque is $480\,\mathrm{N\,m}$, the shear flow is $50\,\mathrm{N/mm}$. The vertical walls of thickness $2\,\mathrm{mm}$ have average shear stress $25\,\mathrm{MPa}$. The horizontal walls of thickness $4\,\mathrm{mm}$ have stress $12.5\,\mathrm{MPa}$. The difference follows from the local thickness, while the shear flow is the same.

::struttura{poligoni="-41,-32 41,-32 41,32 -41,32" fori="-39,-28 39,-28 39,28 -39,28" tratteggi="-40,-30 40,-30 40,30 -40,30 -40,-30" frecce="-52,0,52,0,z;0,-40,0,40,y" quote="-40 -30,40 -30,80 mm,7;40 -30,40 30,60 mm,23" riferimento=0 titolo="Closed cell with dimensions measured along the dashed wall centerline"}

Evaluate the integral $\oint\dfrac{\mathrm ds}{t(s)}$ by summing each wall's length divided by its thickness. In the example this gives $\dfrac{2\cdot80}{4}+\dfrac{2\cdot60}{2}=100$, hence $J_t=921\,600\,\mathrm{mm^4}$. For a multicell section, introduce a circulating shear flow in each cell and require equal twist per unit length.
:::

## Open thin-walled sections

:::teorema{#torsione-aperta titolo="Torsion constant of an open section"}
An open thin-walled section can be approximated by strips of centerline length $b_i$ and thickness $t_i$, with $t_i$ small relative to $b_i$. For uniform torsion with free warping, the section's torsion constant is

$$
J_t\simeq\sum_i\frac{b_i t_i^3}{3}.
$$

**Warping** is the longitudinal displacement that carries the deformed cross section out of its plane. In a thin strip, away from the short edges and junctions, the magnitude of the shear stress increases with the distance $|n|$ from the wall centerline. The model gives $|\tau(n)|\simeq2G|\vartheta'||n|$. At the two faces of the wall the shear stresses point in opposite directions, and the maximum magnitude is $G|\vartheta'|t_i=\dfrac{|M_t|t_i}{J_t}$.

To obtain $J_t$, integrate the elastic energy density $\dfrac{\tau^2}{2G}$ through the thickness. The strip contributes $\dfrac{G\vartheta'^2 b_i t_i^3}{6}$ per unit length. Summing the contributions gives $\dfrac{GJ_t\vartheta'^2}{2}$. Torsional rigidity therefore grows with the cube of the thickness. A very thin wall contributes little even when its centerline is long.
:::

:::esempio{titolo="A closed cell and the same section with a slit"}
Consider a closed rectangle with centerline sides $80\,\mathrm{mm}$ and $60\,\mathrm{mm}$ and uniform thickness $2\,\mathrm{mm}$. The centerline perimeter is $280\,\mathrm{mm}$, and Bredt's formula gives $J_t\simeq658\,286\,\mathrm{mm^4}$. Now introduce a narrow longitudinal slit that breaks the continuity of one wall. The total strip length remains approximately $280\,\mathrm{mm}$, and the open-section formula gives $J_t\simeq747\,\mathrm{mm^4}$.

::struttura{linee="-40,-30 40,-30 40,30 5,30;-5,30 -40,30 -40,-30" frecce="-49,0,49,0,z;0,-39,0,39,y" etichette="28,42,longitudinal cut" riferimento=0 titolo="Wall centerline of the section opened by a longitudinal slit"}

The ratio of the two constants is approximately $882$. For the same torque and material, twist per unit length is inversely proportional to $J_t$, so the open section twists more by the same factor in the model. This comparison explains why sections of similar weight can differ greatly in torsional rigidity. Additional longitudinal stresses can develop near a fixed end that restrains warping. The uniform-torsion formulas apply in regions where this effect is negligible.
:::

## Combining stresses at a point

:::teorema{#von-mises-flessione-torsione titolo="Von Mises stress for one normal and two shear components"}
Since the elastic problem is linear, stresses due to individual internal forces and moments add component by component. For a state with only $\sigma_x$, $\tau_{xy}$, and $\tau_{xz}$ nonzero, the von Mises equivalent stress is

$$
\sigma_{\mathrm{eq}}=
\sqrt{\sigma_x^2+3(\tau_{xy}^2+\tau_{xz}^2)}.
$$

The two shear components form a vector in the plane of the cross section. Rotating the axes about $x$ can align one axis with that vector and reduce the other component to zero. The vector magnitude is $\sqrt{\tau_{xy}^2+\tau_{xz}^2}$, and the von Mises criterion is invariant under axis rotation. This gives the plane stress formula with a single equivalent shear component.

Add the stresses **at the same point**. When a beam carries both vertical shear and torque, the torsional contribution can act with or against the contribution of transverse shear, depending on the point. Add the signed components first, then calculate the equivalent stress.
:::

:::esempio{titolo="Bending and shear in a rectangle"}
In a rectangle under bending and vertical shear only, the bending stress has its largest magnitude at the extreme fibers, where the Jourawski shear stress vanishes. At the centroid the normal stress vanishes and the shear stress reaches its maximum. Suppose the extreme fiber stresses are $\pm30\,\mathrm{MPa}$ and the maximum shear stress is $12\,\mathrm{MPa}$. At the extreme fibers the equivalent stress is $30\,\mathrm{MPa}$. At the centroid it is $12\sqrt3\,\mathrm{MPa}$.

Setting $\eta=\dfrac{2y}{h}$ gives the squared equivalent stress as $900\eta^2+432(1-\eta^2)^2$ in $\mathrm{MPa^2}$. Expansion yields $432+36\eta^2+432\eta^4$. Since all nonconstant coefficients are positive, the expression increases with $|\eta|$ and reaches its maximum at the extreme fibers. Combining the maximum normal stress and maximum shear stress at one point would instead give $\sqrt{1\,332}\,\mathrm{MPa}$, a value never attained in this section.
:::
