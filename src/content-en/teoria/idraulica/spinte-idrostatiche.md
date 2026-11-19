---
titolo: "Hydrostatic forces on plane and curved surfaces and buoyancy"
sommario: "Resultant pressure force on a plane surface, location of the center of pressure, and the pressure diagram. Applications include flat and hinged gates, force components on curved surfaces, retaining walls and dams, Archimedes’ principle, and the stability of floating bodies."
---

## Hydrostatic force on a plane surface

A liquid at rest exerts pressure on every wall that contains it. Pressure increases with depth and therefore varies over the wall. The resultant force is found by integration.

:::richiamo{#stevin titolo="Hydrostatic pressure law"}
Consider an incompressible liquid of specific weight $\gamma$ at rest under gravity. At a depth $h$ beneath the hydrostatic head plane, the gauge pressure is
$$
p = \gamma\,h .
$$
See the chapter on fluid properties and fluid statics. All pressures here are gauge pressures. The free surface is exposed to atmospheric pressure, so it coincides with the hydrostatic head plane.
:::

:::definizione{#spinta titolo="Resultant pressure force on a surface"}
Let $A$ be a surface in contact with a liquid at rest, and let $\hat{n}$ be the unit normal to $A$ pointing into the liquid. Pressure on each element $dA$ produces an elemental force $-p\,\hat{n}\,dA$ normal to the surface and directed toward the wall. The **hydrostatic force** is the resultant of these elemental forces,
$$
\vec{S} = -\int_A p\,\hat{n}\,dA ,
$$
and its point of application is called the **center of pressure**. On a plane surface the elemental forces are parallel. Their resultant is normal to the plane and has magnitude $S = \displaystyle\int_A p\,dA$. On a curved surface the normal varies from point to point, so the force components are calculated separately.
:::

::::teorema{#spinta-superficie-piana titolo="Resultant pressure force on a plane surface"}
Consider a plane surface $A$ of arbitrary shape in contact with a liquid of specific weight $\gamma$ at rest under gravity. Let $h_G$ be the depth of the centroid $G$ of $A$ beneath the hydrostatic head plane. The magnitude of the resultant is then
$$
S = \gamma\,h_G\,A ,
$$
the pressure at the centroid multiplied by the area. The force is normal to the surface and directed toward the wall.

This expression holds at any inclination. The same calculation applies to vertical, inclined, and horizontal gates once the centroid depth is known. For a rectangular gate of width $2\,\mathrm{m}$ and height $3\,\mathrm{m}$ with its upper edge at the free surface, $h_G = 1.5\,\mathrm{m}$ and $A = 6\,\mathrm{m}^2$, so $S = 9.81 \cdot 1.5 \cdot 6 = 88.3\,\mathrm{kN}$.

:::dimostrazione
Pressure varies linearly with depth, so its integral over the surface reduces to the first moment of $A$.

Let $\alpha$ be the angle between the surface and the horizontal. On the surface take axis $y$ along the steepest slope, with its origin on the line where the surface plane meets the hydrostatic head plane. A point with coordinate $y$ is at depth $h = y\,\sin\alpha$. The hydrostatic pressure law therefore gives pressure $p = \gamma\,y\,\sin\alpha$. Substituting into the definition of the resultant gives
$$
S = \int_A \gamma\,y\,\sin\alpha\,dA = \gamma\,\sin\alpha\int_A y\,dA .
$$
The remaining integral is the first moment of $A$ about the axis on which $y = 0$. By the definition of the centroid it equals $y_G\,A$. Thus $S = \gamma\,\sin\alpha\,y_G\,A$, and since $y_G \sin\alpha = h_G$, it follows that $S = \gamma\,h_G\,A$.
:::
::::

::schema{nodi="A,1.5,0.5,-;B,3.5,2.5,-" aste="A-B" acqua="0,0 6,0 6,4 0,4" solidi="-0.4,-0.7 6.4,-0.7 6.4,0 -0.4,0" pelo="0,6,4,p_g = 0" pressioni="A,B,1.4,0.6,p" punti="2.5,1.5,,baricentro" tratteggi="1.5,0.5 2.75,0.5" quote="2.5 1.5,2.5 4,h_G,1.4" etichette="2.05,0.72,α;2.9,1.12,G" riferimento=0 titolo="Plane surface inclined at $\alpha$ to the horizontal. The hydrostatic force depends on the centroid depth $h_G$ and on the surface area"}

:::osservazione{#fondo-orizzontale titolo="Horizontal surfaces and the hydrostatic paradox"}
Pressure on a horizontal surface at depth $h$ is uniform, so $S = \gamma\,h\,A$ and the center of pressure coincides with the centroid. The bottom force depends on the depth and bottom area, independently of the volume of liquid in the container. Containers with the same base and water level experience the same force on the bottom, even if one flares outward and the other is cylindrical. This is the **hydrostatic paradox**. The liquid exerts a vertical component of force on the inclined walls that balances the difference in weight.
:::

## The center of pressure

The resultant’s magnitude and direction are known. Taking moments for a gate also requires its line of action, which passes through the center of pressure.

:::richiamo{#momento-dinerzia titolo="Second moment of area of a plane figure"}
Let $A$ be a plane figure with centroid $G$ and second moment of area $I_G$ about a centroidal axis parallel to an axis $t$ a distance $d$ away. The parallel-axis theorem gives
$$
I_t = I_G + d^2 A .
$$
For a rectangle of base $b$ and height $\ell$ with the centroidal axis parallel to the base, $I_G = \dfrac{b\,\ell^3}{12}$. For a circle of diameter $D$, $I_G = \dfrac{\pi D^4}{64}$. For a triangle of base $b$ and height $\ell$, $I_G = \dfrac{b\,\ell^3}{36}$. See the treatment of geometric properties of areas in Statics.
:::

::::teorema{#centro-di-spinta titolo="Center of pressure of a plane surface"}
Let $A$ be a plane surface in contact with a liquid at rest under gravity, inclined at $\alpha$ to the horizontal. Measure coordinates $y$ along the surface from its intersection with the hydrostatic head plane. Let $y_G$ denote the centroid coordinate and $I_G$ the second moment of area of $A$ about the centroidal axis perpendicular to $y$. The coordinate of the center of pressure is
$$
y_C = y_G + \frac{I_G}{y_G\,A} .
$$

Since $I_G$, $y_G$, and $A$ are positive, $y_C > y_G$. The center of pressure lies below the centroid by the distance $\dfrac{I_G}{y_G A}$. For a circular gate of diameter $D$, $\dfrac{I_G}{y_G A} = \dfrac{D^2}{16\,y_G}$. A gate of diameter $0.80\,\mathrm{m}$ centered at depth $2.5\,\mathrm{m}$ in a vertical wall therefore has its center of pressure $16\,\mathrm{mm}$ below its center.

:::dimostrazione
Set the moment of the resultant about the line $y = 0$ equal to the moment of the elemental pressure forces. The resulting integral is the second moment of area.

Using the coordinates defined for the force on a plane surface, pressure at coordinate $y$ is $p = \gamma\,y\,\sin\alpha$. The moment of the elemental forces about $y = 0$ is therefore
$$
M = \int_A y\,p\,dA = \gamma\,\sin\alpha \int_A y^2\,dA = \gamma\,\sin\alpha\,I_t ,
$$
where $I_t$ is the second moment of area of $A$ about that line. The resultant acting at the center of pressure has moment $S\,y_C = \gamma\,\sin\alpha\,y_G\,A\,y_C$. Equating the two moments gives
$$
y_C = \frac{I_t}{y_G\,A} .
$$
The parallel-axis theorem gives $I_t = I_G + y_G^2 A$, so
$$
y_C = \frac{I_G + y_G^2 A}{y_G A} = y_G + \frac{I_G}{y_G A} .
$$
:::
::::

:::attenzione
Except on a horizontal surface, the center of pressure and the area centroid are distinct. For a vertical rectangular gate of height $3\,\mathrm{m}$ with its upper edge at the free surface, the centroid lies at depth $1.50\,\mathrm{m}$ and the center of pressure at $2.00\,\mathrm{m}$. Using the centroid as the moment arm about a top-edge hinge would underestimate the moment by one quarter.
:::

:::osservazione{#momento-rispetto-al-baricentro titolo="Moment of the pressure forces about the centroid"}
The moment of the elemental pressure forces about the centroidal axis of $A$ perpendicular to $y$ is
$$
M_G = S\,(y_C - y_G) = \gamma\,\sin\alpha\,y_G\,A\cdot\frac{I_G}{y_G A} = \gamma\,\sin\alpha\,I_G ,
$$
so it depends only on the inclination and shape of the surface, independently of its depth. A circular gate hinged along a horizontal diameter therefore requires the same holding moment at any depth. For a vertical gate of diameter $D = 1\,\mathrm{m}$ the moment is $\gamma\,I_G = 9.81 \cdot \dfrac{\pi}{64} = 0.482\,\mathrm{kN\,m}$.
:::

:::osservazione{#asse-di-simmetria titolo="Transverse position of the center of pressure"}
The second coordinate of the center of pressure follows in the same way. It is $x_C = x_G + \dfrac{I_{xy}}{y_G A}$, where $I_{xy}$ is the product of inertia about the centroidal axes. If the area has an axis of symmetry parallel to $y$, its product of inertia is zero and the center of pressure lies on that axis. Rectangles with horizontal and vertical sides, circles, and ellipses with horizontal and vertical axes have this symmetry. Only $y_C$ needs to be calculated.
:::

## The pressure diagram

For a surface of constant width, a pressure diagram gives the force directly without calculating a second moment of area.

:::definizione{#diagramma-delle-pressioni titolo="Pressure diagram"}
A **pressure diagram** is drawn by plotting the value of $p = \gamma h$ perpendicular to the surface at each point along its profile. The hydrostatic pressure law is linear. The diagram is triangular when the surface reaches the free surface and trapezoidal when its upper edge is submerged. For a surface of constant width $b$, the resultant is
$$
S = b \cdot (\text{area of the diagram}) ,
$$
and its line of action passes through the centroid of the diagram. Finding the center of pressure is thus a centroid calculation. A trapezoidal diagram can be split into a rectangle and a triangle.
:::

:::esempio{titolo="Fully submerged vertical gate"}
A rectangular gate of width $b = 1.50\,\mathrm{m}$ closes an opening extending from depth $1.20\,\mathrm{m}$ to $3.20\,\mathrm{m}$.

::schema{nodi="A,0,0;B,0,2" aste="A-B" acqua="0,0 5,0 5,3.2 0,3.2" solidi="-0.5,-0.6 5.4,-0.6 5.4,0 -0.5,0;-0.5,0 0,0 0,3.6 -0.5,3.6" pelo="0,5,3.2,p_g = 0" pressioni="B,A,0.6,1.6,γ·h" quote="0 0,0 2,2.00 m,-1.3" riferimento=0 titolo="Trapezoidal pressure diagram for a gate of height $2\,\mathrm{m}$"}

The pressures at the edges are $p_1 = 9.81 \cdot 1.20 = 11.77\,\mathrm{kPa}$ and $p_2 = 9.81 \cdot 3.20 = 31.39\,\mathrm{kPa}$. The trapezoid has area $\dfrac{11.77 + 31.39}{2}\cdot 2.00 = 43.16\,\mathrm{kN/m}$ and the resultant force is $S = 1.50 \cdot 43.16 = 64.7\,\mathrm{kN}$. The general formula gives the same result, since $h_G = 2.20\,\mathrm{m}$ and $A = 3.00\,\mathrm{m}^2$ give $S = 9.81 \cdot 2.20 \cdot 3.00 = 64.7\,\mathrm{kN}$. The center of pressure is at depth $y_C = 2.20 + \dfrac{1.00}{2.20 \cdot 3.00} = 2.35\,\mathrm{m}$, or $0.849\,\mathrm{m}$ above the lower edge.
:::

:::osservazione{#paratoia-rettangolare titolo="Rectangular gate with its upper edge at the free surface"}
If a rectangular gate of width $b$ and height $h$ has its upper edge at the free surface, the diagram is a triangle of base $\gamma h$ and height $h$. Thus
$$
S = \gamma\,\frac{b\,h^2}{2} ,
$$
and the center of pressure is at the triangle’s centroid, at depth $\dfrac{2h}{3}$ and a distance $\dfrac{h}{3}$ from the lower edge. This configuration occurs in most channel-gate diagrams, so its force and center-of-pressure location are retaining together.

::schema{nodi="A,0,0;B,0,3" aste="A-B" acqua="0,0 5,0 5,3 0,3" solidi="-0.5,-0.6 5.4,-0.6 5.4,0 -0.5,0" pelo="0,5,3,p_g = 0" pressioni="B,A,0,1.6,γ·h" punti="0,1,C,pieno" forze="0 1,-1.5,0,S" quote="0 0,0 3,h,-1.6" riferimento=0 titolo="Triangular pressure diagram. The resultant force is $\gamma\,\dfrac{b\,h^2}{2}$ and acts through point $C$, a distance $\dfrac{h}{3}$ above the bottom"}
:::

## Flat gates

Gate calculations use moment equilibrium about the hinge. Both the resultant magnitude and the location of the center of pressure are needed.

:::osservazione{#paratoia-incernierata titolo="Moment about the hinge of a gate"}
A gate hinged along one edge is held closed by an externally applied force or moment. Moment equilibrium about the hinge axis gives
$$
M = S\,d ,
$$
where $d$ is the distance from the hinge to the center of pressure measured along the gate. If the holding force $F$ acts at the opposite edge a distance $\ell$ from the hinge, $F = \dfrac{S\,d}{\ell}$. For a rectangular gate of width $2\,\mathrm{m}$ and height $3\,\mathrm{m}$ hinged at an upper edge on the free surface, $S = 88.3\,\mathrm{kN}$ and $d = 2.00\,\mathrm{m}$, giving $F = 58.9\,\mathrm{kN}$.

::schema{nodi="A,0,0;B,0,3" aste="A-B" cerniere="B" acqua="0,0 5,0 5,3 0,3" solidi="-0.6,-0.6 5.4,-0.6 5.4,0 -0.6,0" pelo="0,5,3,p_g = 0" pressioni="B,A,0,1.5,γ·h" punti="0,1,C,pieno" forze="0 1,-1.4,0,S" reazioni="0 0,1.4,0,F" riferimento=0 titolo="Gate hinged at its upper edge $B$ and held by the force $F$ at its lower edge"}
:::

:::osservazione{#spinta-netta titolo="Gate with liquid on both sides"}
For a gate separating water at different levels, calculate the two hydrostatic forces separately, each relative to its own hydrostatic head plane, then combine them. The net force is the difference in magnitude,
$$
S = S_1 - S_2 ,
$$
directed downstream from the upstream side. Find its line of action by taking moments about a chosen point, such as the channel bottom, using $S\,z = S_1 z_1 - S_2 z_2$. The difference between the pressure diagrams is piecewise linear, so its area provides a check.

::schema{nodi="A,0,0;B,0,2.5;D,0,1.5,-" aste="A-B" acqua="-2.6,0 0,0 0,4 -2.6,4;0,0 2.6,0 2.6,1.5 0,1.5" solidi="-3,-0.7 3,-0.7 3,0 -3,0" pelo="-2.6,-1.2,4,upstream;1.2,2.6,1.5,downstream" pressioni="A,B,1.5,0.56,γ·h_1;D,A,0,0.56,γ·h_2" quote="0 0,0 2.5,2.50 m,-2.3" riferimento=0 titolo="Water acts on both sides of the gate. The two pressure diagrams represent forces in opposite directions"}
:::

## Hydrostatic forces on curved surfaces

On a curved surface the elemental forces are not parallel. Resolve the resultant into components, each of which can be determined using a familiar calculation.

:::definizione{#volume-di-pressione titolo="Volume of fluid above a curved surface"}
The **overlying fluid volume** is bounded by the curved surface, the hydrostatic head plane, and vertical lines drawn through the boundary of the surface. If the liquid is above the surface, it occupies the volume, which is called real. If the liquid is below, the volume is the one it would otherwise occupy and is called imaginary. The distinction fixes the direction of the vertical force component. It acts downward in the first case and upward in the second.
:::

::::teorema{#spinta-superficie-curva titolo="Components of the force on a curved surface"}
Let $A$ be a curved surface in contact with a liquid of specific weight $\gamma$ at rest under gravity. The horizontal force component in a direction $x$ is
$$
S_x = \gamma\,h_G\,A_x ,
$$
where $A_x$ is the projection of $A$ onto the vertical plane normal to $x$ and $h_G$ is the depth of the centroid of that projection. The vertical component is
$$
S_z = \gamma\,V_p ,
$$
where $V_p$ is the overlying fluid volume. Its line of action goes through the centroid of $V_p$.

The calculation thus reduces to a force on a plane projection and the weight of a volume of liquid. The resultant magnitude is $S = \sqrt{S_x^2 + S_z^2}$. For a quarter-circular transition of radius $R$ between a vertical wall and the floor, with water depth $H$, the vertical projection is a rectangle of height $R$ and the overlying fluid volume per unit width is $R(H - R) + \dfrac{\pi R^2}{4}$.

:::dimostrazione
Apply equilibrium to a volume of liquid with the curved surface as one face. The forces on its other faces are known.

For the horizontal component, consider the volume between the curved surface $A$ and its projection $A_x$, bounded laterally by cylindrical surfaces generated by lines parallel to $x$. This volume is at rest, so the sum of its external forces is zero. Along $x$ act the force exerted by the curved surface on the liquid, with component $-S_x$, and the pressure force on the plane face $A_x$. The plane-surface theorem gives the latter as $\gamma h_G A_x$. The lateral surface normals are perpendicular to $x$, and weight is vertical. Neither contributes in this direction. Equilibrium therefore gives $S_x = \gamma h_G A_x$.

For the vertical component, consider the overlying fluid volume $V_p$ bounded below by the curved surface, above by the hydrostatic head plane, and laterally by the vertical cylindrical surface through the boundary of $A$. This volume is also at rest. The vertical forces are the downward weight $\gamma V_p$, the zero pressure force on the upper face where gauge pressure vanishes, and the reaction of the curved surface, equal and opposite to the vertical pressure force on it. The vertical sides contribute no vertical component. Consequently the liquid exerts a downward force component $S_z = \gamma V_p$ on the curved surface. If the liquid lies on the other side of the surface, applying the same argument to the imaginary volume above it gives a force of equal magnitude directed upward.
:::
::::

::schema{nodi="P0,0,1.5,-;P1,0.051,1.112,-;P2,0.201,0.75,-;P3,0.439,0.439,-;P4,0.75,0.201,-;P5,1.112,0.051,-;P6,1.5,0,-" aste="P0-P1;P1-P2;P2-P3;P3-P4;P4-P5;P5-P6" acqua="0,4 0,1.5 0.051,1.112 0.201,0.75 0.439,0.439 0.75,0.201 1.112,0.051 1.5,0 5.5,0 5.5,4" solidi="-0.8,-0.7 5.5,-0.7 5.5,0 1.5,0 1.112,0.051 0.75,0.201 0.439,0.439 0.201,0.75 0.051,1.112 0,1.5 0,4.4 -0.8,4.4" pelo="0,5.5,4,p_g = 0" tratteggi="0,4 1.5,4 1.5,0" forze="0.25 0.9,-1.3,0,S_x;0.9 0.25,0,-1.3,S_z" etichette="0.62,2.6,V_p" titolo="Cylindrical transition between the wall and the bottom. The horizontal force component is found from the vertical projection and the vertical component from the pressure volume $V_p$"}

:::osservazione{#superficie-cilindrica titolo="Cylindrical surfaces and radial gates"}
For a circular cylindrical surface each elemental pressure force is normal to the surface, so its line of action intersects the cylinder axis. All elemental forces pass through the axis. The resultant therefore also passes through it and has zero moment about it. This property is used in **radial gates**, which rotate about a pivot on the cylinder axis. The hydrostatic moment about the pivot is zero at every water level, so operation requires overcoming only weight and friction.

::schema{nodi="Q0,0,3,-;Q1,0.102,2.224,-;Q2,0.402,1.5,-;Q3,0.879,0.879,-;Q4,1.5,0.402,-;Q5,2.224,0.102,-;Q6,3,0,-" aste="Q0-Q1;Q1-Q2;Q2-Q3;Q3-Q4;Q4-Q5;Q5-Q6" acqua="-3,0 3,0 2.224,0.102 1.5,0.402 0.879,0.879 0.402,1.5 0.102,2.224 0,3 -3,3" solidi="-3.4,-0.7 4.6,-0.7 4.6,0 -3.4,0" pelo="-3,-0.3,3,p_g = 0" punti="3,3,O,centro" tratteggi="0.879,0.879 3,3" forze="3 3,1.2,1.885,S" titolo="Radial gate of radius $R$. The resultant force passes through the pivot $O$, so its moment about the pivot is zero"}
:::

## Equilibrium of retaining walls and dams

The hydrostatic forces calculated above act together with the weight of the retaining structure in its equilibrium equations.

:::definizione{#verifica-ribaltamento titolo="Stability against overturning"}
Analyze a unit length of the structure and take moments about the downstream toe of the base, the edge about which overturning would occur. The **factor of safety against overturning** is the ratio
$$
F_r = \frac{M_{\text{stabilizing}}}{M_{\text{overturning}}} ,
$$
The numerator includes the moments of the structure’s weight and of downward hydrostatic force components. The denominator includes the moments of the horizontal hydrostatic force and the uplift force. In practice the required condition is $F_r \geq 1.5$. For a vertical-faced wall of height $4.00\,\mathrm{m}$ and base width $2.20\,\mathrm{m}$ built of concrete of specific weight $24\,\mathrm{kN/m^3}$ and retaining water to depth $3.50\,\mathrm{m}$, $M_{\text{stabilizing}} = 232\,\mathrm{kN\,m/m}$ and $M_{\text{overturning}} = 70.1\,\mathrm{kN\,m/m}$ give $F_r = 3.31$.
:::

:::definizione{#verifica-scorrimento titolo="Stability against sliding"}
The **factor of safety against sliding** is the ratio of the maximum friction force available at the base to the horizontal force tending to slide the structure,
$$
F_s = \frac{f\,N}{S_x} ,
$$
where $f$ is the coefficient of friction between the base and the soil. $N$ is the vertical force actually transmitted to the foundation, equal to the structure’s weight plus downward hydrostatic components minus uplift. In practice the required condition is $F_s \geq 1.3$. Uplift has a marked effect on $N$, so sliding commonly governs the design of the base.
:::

:::osservazione{#sottospinta titolo="Uplift pressure force"}
Water seeping beneath the foundation exerts upward pressure on the base, called **uplift pressure**. Without drainage, take the pressure as $\gamma h$ at the upstream heel, falling to zero at the downstream toe. For a unit length, the resultant is $U = \dfrac{\gamma\,h\,B}{2}$ acting at $\dfrac{B}{3}$ from the heel, where $B$ is the base width. Uplift reduces both $N$ and the stabilizing moment, making sliding and overturning more critical. Drains near the heel lower the pressure distribution and reduce $U$.

::schema{nodi="T,0,0;K,1.5,5,-;P,3.5,0" aste="T-K;K-P;T-P" acqua="-3,0 0,0 1.2,4 -3,4" solidi="-3.4,-0.9 6,-0.9 6,0 -3.4,0" pelo="-3,-0.3,4,p_g = 0" pressioni="T,P,1.1,0,U,-1" forze="0.4 1.3333,1.5,0,S_x;0.4 1.3333,0,-1.2;1.6667 1.6667,0,-1.8" etichette="-0.05,2.8,S_z;1.33,2.95,W" quote="T,P,B = 3.50 m,1.5" riferimento=0 titolo="Gravity dam with a sloping upstream face, showing the hydrostatic force, the dam weight $W$, and the uplift force $U$"}
:::

:::osservazione{#terzo-medio titolo="Position of the resultant at the base"}
The line of action of all external forces intersects the foundation plane at coordinate $x_R$ measured from the upstream heel. Determine it by taking moments about the heel. If $e$ is the distance from this point to the center of the base, the bearing pressure remains compressive throughout the base when
$$
e \leq \frac{B}{6} ,
$$
that is, when the resultant lies in the middle third of the base. This check supplements the sliding and overturning checks. A resultant outside the middle third would require tensile stress at the heel, which the soil–foundation interface cannot transmit.
:::

## Archimedes’ principle and flotation

A fully submerged body experiences pressure forces over its entire surface. The same overlying-fluid-volume method gives their resultant.

::::teorema{#principio-di-archimede titolo="Archimedes’ principle"}
Consider a body of volume $V$ submerged in a liquid of specific weight $\gamma$ at rest under gravity. The resultant pressure force exerted by the liquid on the body is vertical, acts upward, and has magnitude
$$
S = \gamma\,V ,
$$
equal to the weight of the displaced liquid. Its line of action passes through the centroid of the displaced volume.

The principle allows the volume of a body to be measured by weighing it in water and gives the tension in a cable restraining a submerged body. A block of volume $0.015\,\mathrm{m}^3$ and density $7850\,\mathrm{kg/m^3}$ weighs $1155\,\mathrm{N}$ in air. It experiences buoyancy $147\,\mathrm{N}$, so the scale reads $1008\,\mathrm{N}$ in water.

:::dimostrazione
Separate the body surface into upper and lower parts, then apply the theorem for hydrostatic force components on a curved surface to each part.

The horizontal components cancel. The parts facing increasing $x$ and decreasing $x$ have the same projection on a vertical plane, and their forces are equal and opposite.

Consider the horizontal division between the upper part $A_1$ and lower part $A_2$ at the apparent outline of the body viewed from above. The liquid lies above $A_1$. The vertical component on $A_1$ therefore acts downward and equals $\gamma V_1$, where $V_1$ is the volume between $A_1$ and the hydrostatic head plane. The liquid lies below $A_2$. The vertical component on $A_2$ therefore acts upward and equals $\gamma V_2$, where $V_2$ is the volume between $A_2$ and the same plane. The volume $V_2$ contains $V_1$, and their difference is the body’s volume $V$. The resultant acts upward with magnitude
$$
S = \gamma V_2 - \gamma V_1 = \gamma V .
$$
To determine the line of action, replace the body with the same volume of liquid. The pressures on the boundary stay the same. That liquid is at rest under its weight and the buoyant force. These forces share a line of action through the centroid of $V$.
:::
::::

:::definizione{#carena titolo="Displaced volume and center of buoyancy"}
The **submerged volume** is the portion of a floating body below the waterplane. The **center of buoyancy**, $C$, is the centroid of that volume. The waterplane is the plane of the free surface. Its intersection with the body defines the waterplane area. By Archimedes’ principle the buoyant force acts upward at $C$. The body’s weight acts at its center of gravity $G$, generally a different point because its position also depends on the part above water and on the distribution of the loads on board.
:::

::::teorema{#galleggiamento titolo="Condition for flotation"}
Consider a body of weight $P$ floating at rest in a liquid of specific weight $\gamma$. The displaced volume $V_c$ satisfies
$$
\gamma\,V_c = P ,
$$
and the center of buoyancy $C$ lies on the same vertical line as the center of gravity $G$.

The first condition determines the draft. For a rectangular pontoon of length $8.00\,\mathrm{m}$, width $3.00\,\mathrm{m}$, and weight $120\,\mathrm{kN}$, the displaced volume is $V_c = \dfrac{120}{9.81} = 12.23\,\mathrm{m}^3$, giving a draft $\dfrac{12.23}{8 \cdot 3} = 0.510\,\mathrm{m}$.

:::dimostrazione
The floating body is at rest. Both the resultant force and the resultant moment of the external forces vanish. The external forces are the weight $P$ acting vertically downward at $G$ and the buoyant force of magnitude $\gamma V_c$ by Archimedes’ principle, acting vertically upward at $C$. Force equilibrium gives $\gamma V_c = P$. The two forces are equal and opposite. Their resultant moment is zero if and only if they share a vertical line of action through both $G$ and $C$.
:::
::::

:::osservazione{#immersione titolo="Draft of a prismatic body"}
For a prism of base area $A_f$, height $a$, and density $\rho_c$, flotation requires $\rho_c\,g\,A_f\,a = \rho\,g\,A_f\,d$. The draft is therefore
$$
d = \frac{\rho_c}{\rho}\,a .
$$
The submerged fraction equals the density ratio, and the body floats only if $\rho_c < \rho$. A wooden block of density $650\,\mathrm{kg/m^3}$ and height $0.50\,\mathrm{m}$ thus has draft $0.325\,\mathrm{m}$.

::schema{acqua="-3.2,0 3.2,0 3.2,2 -3.2,2" solidi="-3.6,-0.7 3.6,-0.7 3.6,0 -3.6,0" pelo="-3.2,-1.3,2,p_g = 0" poligoni="-1.1,1.3 1.1,1.3 1.1,2.7 -1.1,2.7" punti="0,2.05,G,baricentro;0,1.65,C,centro" forze="0 2.05,0,-1.2,P" reazioni="0 1.65,0,1.1,S" quote="-1.1 1.3,-1.1 2,d,-0.8" riferimento=0 titolo="Floating body at rest. Its weight $P$ acts at $G$ and the buoyant force $S$ acts at the center of buoyancy $C$, on the same vertical line"}
:::

## Stability of a floating body

A floating body can be in equilibrium at any height of its center of gravity. To determine stability, examine its response to a small rotation.

:::definizione{#metacentro titolo="Metacenter and metacentric radius"}
Take a floating body in equilibrium and rotate it through a small angle about an axis in the waterplane. The displaced volume changes shape, and its centroid moves to a new point $C'$. The **metacenter**, $M$, is the intersection of the vertical through $C'$ with the body’s symmetry axis. The **metacentric radius** is the distance
$$
r = \overline{CM} = \frac{I}{V_c} ,
$$
where $I$ is the second moment of the waterplane area about the rotation axis and $V_c$ is the displaced volume. Thus the shape of the waterplane determines the metacenter position. A broad waterplane has a large second moment of area and raises the metacenter.
:::

:::osservazione{#stabilita-galleggiante titolo="Stability criterion"}
After rotation, weight and buoyancy no longer share a line of action and therefore form a couple. If the metacenter is above the center of gravity, so that
$$
\overline{CM} > \overline{CG} ,
$$
the couple opposes the imposed rotation and restores the body to its initial position. The equilibrium is **stable**. If the metacenter lies below the center of gravity, the couple increases the rotation and the equilibrium is *unstable*. The distance $\overline{GM}$ is the metacentric height. It measures the degree of stability. Examine rotation about the axis for which $I$ is smallest, since this gives the smallest metacentric radius. For a rectangular pontoon it is the longitudinal axis.

::schema{acqua="-2.4,0 2.4,0 2.4,2 -2.4,2" solidi="-2.8,-0.7 2.8,-0.7 2.8,0 -2.8,0" pelo="1.5,2.4,2,p_g = 0" poligoni="-1.2,1.2 1.2,1.2 1.2,2.9 -1.2,2.9" tratteggi="0,1.2 0,3.7;-1.4,1.7 1.4,2.3" punti="0,1.6,C,centro;0,2.3,G,baricentro;0,3.2,M,pieno" quote="0 1.6,0 3.2,r,-1.6" etichette="1.6,2.35,θ" riferimento=0 titolo="The metacenter $M$ lies above the center of gravity $G$, so the weight and buoyant force form a restoring couple"}
:::

:::esempio{titolo="Stability of a rectangular pontoon"}
A pontoon of length $8.00\,\mathrm{m}$ and width $3.00\,\mathrm{m}$ has draft $0.80\,\mathrm{m}$ and a center of gravity $0.95\,\mathrm{m}$ above the keel. Its displaced volume is $V_c = 8 \cdot 3 \cdot 0.80 = 19.2\,\mathrm{m}^3$ and the waterplane’s second moment of area about the longitudinal axis is $I = \dfrac{8 \cdot 3^3}{12} = 18.0\,\mathrm{m}^4$, giving $r = \dfrac{18.0}{19.2} = 0.938\,\mathrm{m}$. The center of buoyancy is halfway down the draft, at $0.40\,\mathrm{m}$ above the keel. The metacenter is therefore at $0.40 + 0.938 = 1.338\,\mathrm{m}$. Since $1.338\,\mathrm{m} > 0.95\,\mathrm{m}$, the body is **stable**, with metacentric height $\overline{GM} = 0.388\,\mathrm{m}$.
:::
