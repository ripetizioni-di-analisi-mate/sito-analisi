---
titolo: Fluid mechanics
sommario: How density and pressure describe a fluid, how Stevin's law, Pascal's principle and Archimedes' principle explain liquids at rest and flotation, and how the continuity equation and Bernoulli's theorem describe fluids in motion.
---

## Density and pressure

:::definizione{#fluido titolo="Fluid"}
A **fluid** is a system that has no shape of its own and that, at rest, cannot withstand shear stresses: a force tangent to one of its surfaces, however small, sets it in motion. Liquids and gases are fluids. A liquid has a volume of its own and a free surface; a gas occupies the whole volume available. A fluid is called **incompressible** if its density is the same at every point and does not change with pressure. Liquids almost always behave as incompressible fluids, because reducing their volume by a small fraction requires very high pressures, and throughout this topic liquids are treated as incompressible.
:::

:::definizione{#densita titolo="Density"}
The **density** of a homogeneous body of mass $m$ and volume $V$ is
$$
\rho = \frac{m}{V} ,
$$
and it is measured in $\mathrm{kg/m^3}$. Typical values are $1.00 \cdot 10^3\,\mathrm{kg/m^3}$ for fresh water, about $1.03 \cdot 10^3\,\mathrm{kg/m^3}$ for seawater, $13.6 \cdot 10^3\,\mathrm{kg/m^3}$ for mercury and about $1.2\,\mathrm{kg/m^3}$ for air at room temperature. Density makes it possible to go from volume to mass and hence to weight: a block of aluminum ($\rho = 2.70 \cdot 10^3\,\mathrm{kg/m^3}$) of volume $0.20\,\mathrm{dm^3} = 2.0 \cdot 10^{-4}\,\mathrm{m^3}$ has mass $0.54\,\mathrm{kg}$.
:::

:::definizione{#pressione titolo="Pressure"}
Let $\vec{F}$ be the force that a fluid exerts on a flat surface of area $A$. The **pressure** is the ratio between the component of $\vec{F}$ perpendicular to the surface and the area:
$$
p = \frac{F_\perp}{A} .
$$
If the force is not uniform, the pressure at a point is the limit of $\dfrac{\Delta F_\perp}{\Delta A}$ over smaller and smaller surfaces around the point. Pressure is a scalar and is measured in **pascals**, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. A fluid at rest exerts only perpendicular forces on every surface, because a tangential component would set the fluid itself in motion; moreover, at a point the pressure has the same value whatever the orientation of the surface on which it is measured. Therefore the pressure force on a small surface of area $\Delta A$ has magnitude $p\,\Delta A$ and is directed toward the surface, perpendicular to it. The same force produces very different pressures depending on the area: a person of weight $600\,\mathrm{N}$ standing on $0.040\,\mathrm{m^2}$ exerts $1.5 \cdot 10^4\,\mathrm{Pa}$ on the floor, and resting on a heel of $1.0\,\mathrm{cm^2}$ exerts $6.0 \cdot 10^6\,\mathrm{Pa}$.
:::

:::osservazione{#unita-di-pressione titolo="Other units of pressure"}
Besides the pascal, the following units are used: the **bar**, $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$, the **atmosphere**, $1\,\mathrm{atm} = 1.013 \cdot 10^5\,\mathrm{Pa}$, which is the average air pressure at sea level, and the **millimeter of mercury**, $1\,\mathrm{mmHg} \approx 133\,\mathrm{Pa}$, so that $1\,\mathrm{atm} = 760\,\mathrm{mmHg}$. In the exercises $p_0 = 1.013 \cdot 10^5\,\mathrm{Pa}$ denotes atmospheric pressure, and every value must be converted to pascals before being used in the formulas.
:::

## Stevin's law

::::teorema{#legge-di-stevino titolo="Stevin's law"}
Consider an incompressible fluid of density $\rho$ at rest in the uniform gravitational field $g$, and let $y$ be the height measured along the vertical, upward. For two points of the fluid at heights $y_1$ and $y_2$ we have
$$
p_2 = p_1 + \rho g\,(y_1 - y_2) .
$$
In particular, all points at the same height have the same pressure and, if the free surface is in contact with air at pressure $p_0$, at depth $h$ below the surface the pressure is
$$
p = p_0 + \rho g h .
$$
The law states that the pressure in a liquid depends *only* on depth, and grows linearly with it, independently of the shape of the container. In water $\rho g = 9.81 \cdot 10^3\,\mathrm{Pa/m}$, so at a depth of $10\,\mathrm{m}$ the pressure is $1.013 \cdot 10^5 + 0.981 \cdot 10^5 \approx 1.99 \cdot 10^5\,\mathrm{Pa}$, about twice atmospheric pressure.

::grafico{f="1.013+0.0981*x" xmin=0 xmax=20 ymin=0 ymax=3.4 nomi="h,p" punti="0,1.013,pieno;10,1.994,pieno" segmenti="10,0,10,1.994;0,1.994,10,1.994" titolo="Absolute pressure $p$ (in $10^5\,\mathrm{Pa}$) at depth $h$ (in meters) in water: the line $p = p_0 + \rho g h$ rises by about $0.98 \cdot 10^5\,\mathrm{Pa}$ every $10\,\mathrm{m}$"}

:::dimostrazione
Inside the fluid, consider an imaginary cylinder with vertical axis, bases of area $A$ at heights $y_2 < y_1$ and height $y_1 - y_2$. The liquid contained in the cylinder is at rest, so the resultant of the forces acting on it is zero. The pressure forces on the lateral surface are horizontal and, since the fluid is in equilibrium in the horizontal direction as well, their resultant is zero. Along the vertical three forces act: the force $p_1 A$ downward on the upper base, the force $p_2 A$ upward on the lower base and the weight $mg = \rho A\,(y_1 - y_2)\,g$, where we have used the fact that the density is uniform. Equilibrium along the vertical gives
$$
p_2 A - p_1 A - \rho g A\,(y_1 - y_2) = 0 ,
$$
and dividing by $A$ we obtain the claim. With a horizontal cylinder the weight has no component along the axis, therefore the pressures on the two bases are equal, so points at the same height have the same pressure. Finally, taking point $1$ on the free surface, where $p_1 = p_0$, and setting $h = y_1 - y_2$, we obtain $p = p_0 + \rho g h$.

::grafico{assi=0 uguale=1 linee="1,4.6 1,0 7,0 7,4.6" poligoni="1,0 7,0 7,4 1,4;3.5,1 4.5,1 4.5,2.5 3.5,2.5" segmenti="3.5,1,4.5,1;4.5,1,4.5,2.5;4.5,2.5,3.5,2.5;3.5,2.5,3.5,1;0.4,1,3.5,1;0.4,2.5,3.5,2.5" vettori="4,3.3,4,2.5,p₁A;4,0.2,4,1,p₂A;4,1.75,4,1.2,mg" etichette="0,1.12,y₂;0,2.62,y₁" xmin=-0.2 xmax=8 ymin=-0.2 ymax=4.8 titolo="The cylinder of liquid between the heights $y_2$ and $y_1$ is in equilibrium under its weight and the pressure forces on the two bases"}

:::
::::

:::definizione{#pressione-assoluta-e-relativa titolo="Absolute pressure and gauge pressure"}
The pressure $p$ that appears in Stevin's law is the **absolute pressure**. The difference $p - p_0$ between the absolute pressure and atmospheric pressure is called **gauge pressure** (or relative pressure): it is the quantity measured by manometers and by tire pressure gauges, which read zero in open air. In a liquid with its free surface in contact with the atmosphere, the gauge pressure at depth $h$ is $\rho g h$. The distinction matters in the calculation of forces: on a wall that has the liquid on one side and air on the other, atmospheric pressure acts on both faces, so the resultant force is computed with the gauge pressure alone.
:::

:::osservazione{#vasi-comunicanti titolo="Communicating vessels and U-tube"}
In communicating vessels containing the same liquid at rest, the free surfaces, all at pressure $p_0$, lie at the same height, whatever the shape of the vessels. This is a direct consequence of **Stevin's law**, because points of the same liquid at the same pressure have the same height. If a U-tube contains two immiscible liquids, of densities $\rho_1$ and $\rho_2$, we choose the height of the interface: the points $A$ and $B$ at that height in the two arms lie in the same connected liquid, so they have the same pressure. Denoting by $h_1$ and $h_2$ the heights of the liquid columns above that level, we have $p_0 + \rho_1 g h_1 = p_0 + \rho_2 g h_2$, that is,
$$
\rho_1 h_1 = \rho_2 h_2 .
$$
The heights are inversely proportional to the densities, and comparing the columns makes it possible to measure the density of a liquid relative to that of water.

::grafico{assi=0 uguale=1 linee="1,5.2 1,0 5,0 5,5.2;2,5.2 2,1 4,1 4,5.2" poligoni="1,0 5,0 5,4 4,4 4,1 2,1 2,2 1,2;1,0 5,0 5,4 4,4 4,1 2,1 2,2 1,2;1,2 2,2 2,4.5 1,4.5" segmenti="0.4,2,5.6,2;0.6,2,0.6,4.5;5.4,2,5.4,4" punti="1.5,2,pieno,A;4.5,2,pieno,B" etichette="0.15,3.3,h₁;5.55,3.1,h₂;1.15,3.6,oil;4.1,3.3,water" xmin=0 xmax=6.2 ymin=-0.2 ymax=5.3 titolo="U-tube with oil and water: the points $A$ and $B$ lie at the same height in the same liquid, so $\rho_1 g h_1 = \rho_2 g h_2$"}

:::

:::osservazione{#barometro titolo="Torricelli's barometer"}
A tube about one meter long, closed at one end and filled with mercury, is turned upside down into a dish of mercury. The mercury falls to a height $h$ above the surface of the dish and above it there remains a volume in which the pressure is negligible. The point of the tube at the level of the surface of the dish has the same pressure $p_0$ as the air, and by **Stevin's law** $p_0 = 0 + \rho_{\mathrm{Hg}}\, g h$. The barometer therefore measures atmospheric pressure through a height: with $h = 760\,\mathrm{mm}$ we obtain $p_0 = 13.6 \cdot 10^3 \cdot 9.81 \cdot 0.760 \approx 1.01 \cdot 10^5\,\mathrm{Pa}$. With water, which is $13.6$ times less dense, the equivalent column is $\dfrac{p_0}{\rho g} \approx 10.3\,\mathrm{m}$ high.
:::

:::richiamo{titolo="Definite integral"}
If a quantity is distributed along an interval $[a, b]$ with contribution $f(y)\,dy$ on each piece of length $dy$, the total is $\displaystyle\int_a^b f(y)\,dy$. For the calculation we refer to the topic on definite integrals in Mathematical Analysis 1.
:::

::::teorema{#forza-su-una-parete titolo="Force on a vertical wall"}
A liquid of density $\rho$ at rest, with its free surface in contact with air, wets a rectangular vertical wall of width $w$ up to the height $H$, and on the other side of the wall there is air at pressure $p_0$. Then the resultant force that the liquid exerts on the wall is perpendicular to the wall and has magnitude
$$
F = \frac{1}{2}\,\rho g w H^2 .
$$
The force grows with the square of the depth, which is why dams have a base thicker than their top. For a gate $4.0\,\mathrm{m}$ wide with water $3.0\,\mathrm{m}$ deep we have $F = \dfrac{1}{2} \cdot 1000 \cdot 9.81 \cdot 4.0 \cdot 9.0 \approx 1.77 \cdot 10^5\,\mathrm{N}$.

:::dimostrazione
The pressure is not uniform on the wall, so we divide it into horizontal strips of height $dz$, at depth $z$, on each of which the pressure can be considered constant. On the strip, of area $w\,dz$, the gauge pressure is $\rho g z$, because atmospheric pressure acts on both faces of the wall and its contribution cancels. The forces on the strips are all perpendicular to the wall, so they add as numbers and the total force is the integral
$$
F = \int_0^H \rho g z\, w\, dz = \rho g w \left[ \frac{z^2}{2} \right]_0^H = \frac{1}{2}\,\rho g w H^2 .
$$
The same result can be written $F = \rho g\,\dfrac{H}{2}\,(wH)$: it is the wetted area multiplied by the gauge pressure at half height, which is the average pressure because the pressure grows linearly with depth.
:::
::::

## Pascal's principle and the hydraulic press

:::teorema{#principio-di-pascal titolo="Pascal's principle"}
A change in pressure produced at a point of an incompressible fluid at rest, contained in a closed vessel, is transmitted unchanged to every point of the fluid and to the walls of the vessel. It is an experimental principle formulated by Pascal; for liquids it is also a consequence of **Stevin's law**, because the relation $p_2 = p_1 + \rho g\,(y_1 - y_2)$ states that, if $p_1$ increases by $\Delta p$, then $p_2$ also increases by $\Delta p$. The principle is used to multiply forces in hydraulic devices: car brakes, lifts, presses. For example, if a piston of area $2.0\,\mathrm{cm^2}$ pushes with a force of $10\,\mathrm{N}$ on the liquid of a closed circuit, the pressure at every point of the circuit increases by $\dfrac{10}{2.0 \cdot 10^{-4}} = 5.0 \cdot 10^4\,\mathrm{Pa}$.
:::

::::teorema{#torchio-idraulico titolo="Hydraulic press"}
Two vertical cylinders of cross sections $A_1 < A_2$, closed by pistons of negligible mass at the same height, are connected by a duct full of incompressible liquid. If the force $F_1$ acts on the small piston, the large piston is in equilibrium with the force
$$
F_2 = \frac{A_2}{A_1}\, F_1 ,
$$
and if the small piston moves down by $s_1$, the large piston rises by $s_2 = \dfrac{A_1}{A_2}\, s_1$. The press multiplies the force by the ratio of the areas and divides the displacement by the same ratio, therefore the work $F_1 s_1 = F_2 s_2$ is the same on the two pistons. With $A_2 = 100\,A_1$ a force of $50\,\mathrm{N}$ supports a load of $5000\,\mathrm{N}$, but to raise it by $1\,\mathrm{cm}$ the small piston must move down by $1\,\mathrm{m}$.

::grafico{assi=0 uguale=1 linee="1,4 1,0 6,0 6,4;1.6,4 1.6,0.8 3,0.8 3,4;1,2.5 1.6,2.5 1.6,2.7 1,2.7 1,2.5;3,2.5 6,2.5 6,2.7 3,2.7 3,2.5" poligoni="1,0 6,0 6,2.5 3,2.5 3,0.8 1.6,0.8 1.6,2.5 1,2.5" vettori="1.3,3.6,1.3,2.75,F₁;4.5,2.75,4.5,4,F₂" etichette="1.75,2.6,A₁;5.2,2.1,A₂" xmin=0.4 xmax=7 ymin=-0.2 ymax=4.2 titolo="Hydraulic press: the pressure $\dfrac{F_1}{A_1}$ is transmitted to the large piston, which receives the force $F_2 = \dfrac{A_2}{A_1}\,F_1$"}

:::dimostrazione
The force $F_1$ produces under the small piston the pressure $\dfrac{F_1}{A_1}$ in addition to that due to the liquid alone. The two pistons are at the same height, so by **Pascal's principle** the same change in pressure acts on the large piston, which receives the force $F_2 = \dfrac{F_1}{A_1}\, A_2$. The liquid is incompressible, therefore the volume $A_1 s_1$ that leaves the small cylinder enters the large cylinder, so from $A_1 s_1 = A_2 s_2$ follows the relation between the displacements. Multiplying the two relations side by side we obtain $F_2 s_2 = F_1 s_1$.
:::
::::

## Archimedes' principle

::::teorema{#principio-di-archimede titolo="Archimedes' principle"}
A body immersed, wholly or partly, in a fluid at rest of density $\rho_f$ receives from the fluid a vertical upward force, called the **buoyant force**, of magnitude equal to the weight of the displaced fluid:
$$
S = \rho_f\, V_{\mathrm{imm}}\, g ,
$$
where $V_{\mathrm{imm}}$ is the volume of the immersed part of the body. The buoyant force is applied at the center of mass of the displaced fluid, called the center of buoyancy. The name of principle is historical, because the result is derived from **Stevin's law**. The buoyant force depends on the density of the fluid and on the immersed volume, and it is used to compute the apparent weight of immersed bodies and the conditions for flotation; for example, a body of volume $2.0\,\mathrm{dm^3}$ completely immersed in water receives the buoyant force $1000 \cdot 2.0 \cdot 10^{-3} \cdot 9.81 \approx 19.6\,\mathrm{N}$, whatever the material it is made of.

::grafico{assi=0 uguale=1 linee="1,5.6 1,0 7,0 7,5.6;3,1.5 5,1.5 5,3 3,3 3,1.5" poligoni="1,0 4,0 4,1.5 3,1.5 3,3 5,3 5,1.5 4,1.5 4,0 7,0 7,5 1,5" vettori="4,3.85,4,3.05,F₁;4,0.15,4,1.45,F₂;2.2,2.25,2.95,2.25;5.8,2.25,5.05,2.25" xmin=0.4 xmax=7.6 ymin=-0.2 ymax=5.7 titolo="The lateral pressure forces cancel; on the lower base, which is deeper, the force is larger, and the difference $F_2 - F_1$ is the buoyant force"}

:::dimostrazione
We first consider an immersed rectangular box, with horizontal bases of area $A$ at heights $y_2 < y_1$. The pressure forces on the lateral faces cancel in pairs, because on opposite faces equal pressures act at the same depth with opposite directions. On the upper base the force $F_1 = p_1 A$ acts downward, on the lower base the force $F_2 = p_2 A$ acts upward. By **Stevin's law** $p_2 - p_1 = \rho_f g\,(y_1 - y_2)$, so the resultant is directed upward and equals
$$
F_2 - F_1 = \rho_f g\,(y_1 - y_2)\,A = \rho_f\, V g .
$$
For a body of arbitrary shape we argue by substitution. Imagine removing the body and filling the region it occupied with the same fluid that surrounds it. This fluid is in equilibrium, so the resultant of the pressure forces on its surface is opposite to its weight: it is vertical, upward, of magnitude $\rho_f V_{\mathrm{imm}}\, g$, and its line of action passes through the center of mass of the substituted fluid. The pressure forces depend only on the external fluid and on the shape of the surface, not on what the surface encloses; therefore the same resultant acts on the body. If the body is only partly immersed, atmospheric pressure $p_0$ acts on the emerged part, uniform because the weight of the air is neglected. A uniform pressure on the whole closed surface of the body has zero resultant, so only the gauge pressure on the immersed part remains, and the substitution argument applies to the region occupied by the immersed part.
:::
::::

:::osservazione{#peso-apparente titolo="Apparent weight"}
A body of weight $P$ hanging from a spring scale and completely immersed in a liquid of density $\rho_f$ is in equilibrium under its weight, the buoyant force $S$ and the force of the spring scale. The spring scale therefore reads the **apparent weight**
$$
P_{\mathrm{app}} = P - S = (\rho_c - \rho_f)\, V g ,
$$
where $\rho_c$ is the density of the body and $V$ its volume. The apparent weight makes it possible to measure the volume and the density of an irregularly shaped body: the difference $P - P_{\mathrm{app}} = \rho_f V g$ gives the volume, and the ratio
$$
\frac{P}{P - P_{\mathrm{app}}} = \frac{\rho_c}{\rho_f}
$$
gives the density relative to that of the liquid.
:::

## Flotation

::::teorema{#condizione-di-galleggiamento titolo="Condition for flotation"}
Consider a homogeneous body of density $\rho_c$ and volume $V$ in a liquid of density $\rho_f$, and neglect the forces due to air. Then:

- if $\rho_c < \rho_f$, the body floats, in equilibrium with the immersed volume fraction
$$
\frac{V_{\mathrm{imm}}}{V} = \frac{\rho_c}{\rho_f} ;
$$
- if $\rho_c = \rho_f$, the completely immersed body is in equilibrium at any depth;
- if $\rho_c > \rho_f$, the body sinks.

The behavior of the body therefore depends only on the comparison between the densities, and the immersed fraction is computed without knowing the dimensions. For a non-homogeneous body, or for a hollow body such as a ship, the average density $\dfrac{m}{V}$ is used, where $V$ also includes the closed cavities.

::grafico{assi=0 uguale=1 linee="1,4.4 1,0 7,0 7,4.4;3,1.8 5,1.8 5,3.8 3,3.8 3,1.8" poligoni="1,0 7,0 7,3 5,3 5,1.8 3,1.8 3,3 1,3" vettori="3.85,2.8,3.85,1.6,P;4.15,2.4,4.15,3.6,S" xmin=0.4 xmax=7.6 ymin=-0.2 ymax=4.5 titolo="A block with density equal to $0.6$ times that of water floats with $0.6$ of its volume immersed: the weight $P$ and the buoyant force $S$ are equal and opposite"}

:::dimostrazione
The completely immersed body receives the buoyant force $\rho_f V g$ and has weight $\rho_c V g$, so the vertical resultant, positive upward, is $(\rho_f - \rho_c)\,V g$. If $\rho_c > \rho_f$ the resultant is directed downward and the body sinks; if $\rho_c = \rho_f$ it is zero in every position. If $\rho_c < \rho_f$ the resultant is directed upward, so the body rises and partly emerges; as it emerges the immersed volume decreases and with it the buoyant force, until the buoyant force equals the weight. At equilibrium we therefore have $\rho_f V_{\mathrm{imm}}\, g = \rho_c V g$, from which the immersed fraction follows.
:::
::::

:::esempio{titolo="Iceberg"}
Ice has density $917\,\mathrm{kg/m^3}$ and seawater $1025\,\mathrm{kg/m^3}$, so a block of ice floats with the immersed fraction $\dfrac{917}{1025} \approx 0.895$. About $10.5\,\%$ of the volume emerges, and the visible part of an iceberg is a small fraction of the total.
:::

:::attenzione
The buoyant force is computed with the density of the *fluid* and with the *immersed* volume; the density of the body enters only into the weight. An iron cube and a wooden cube of side $10\,\mathrm{cm}$, both held completely under water, receive the same buoyant force $1000 \cdot 10^{-3} \cdot 9.81 \approx 9.8\,\mathrm{N}$; the wooden cube, when released, rises, because its weight is less than $9.8\,\mathrm{N}$.
:::

## Fluids in motion: flow rate and continuity equation

:::definizione{#fluido-ideale titolo="Ideal fluid and steady flow"}
The flow of a fluid is **steady** if at every fixed point of space the velocity and the pressure of the fluid do not change with time, even though each individual particle changes velocity as it moves. In steady flow the trajectories of the particles are the **streamlines**, tangent at every point to the velocity, and the set of streamlines crossing the boundary of a small surface forms a *flow tube*, through whose walls no fluid leaves. An **ideal fluid** is an incompressible fluid without internal friction (zero viscosity), in steady flow. It is the model in which the continuity equation and Bernoulli's theorem hold, and it describes well water flowing in ducts that are not too long and at moderate speeds.
:::

:::definizione{#portata titolo="Flow rate"}
Let $A$ be the area of a cross section of a duct, perpendicular to the flow, and let $v$ be the velocity of the fluid through it, assumed uniform over the section. The **flow rate** is the volume of fluid crossing the section per unit time:
$$
Q = \frac{dV}{dt} = A v ,
$$
and it is measured in $\mathrm{m^3/s}$; liters per second are often used, with $1\,\mathrm{L/s} = 10^{-3}\,\mathrm{m^3/s}$. The relation $Q = Av$ is obtained by observing that in an interval $dt$ the fluid contained in a cylinder of base $A$ and height $v\,dt$ crosses the section. The **mass flow rate** is $\rho Q$, in $\mathrm{kg/s}$. A pipe with a cross section of $2.0\,\mathrm{cm^2}$ in which water flows at $1.5\,\mathrm{m/s}$ has flow rate $3.0 \cdot 10^{-4}\,\mathrm{m^3/s}$, that is, $0.30\,\mathrm{L/s}$.
:::

::::teorema{#equazione-di-continuita titolo="Continuity equation"}
In a duct, or in a flow tube, through which an incompressible fluid flows steadily, the flow rate is the same at every section: for two sections of areas $A_1$ and $A_2$, with velocities $v_1$ and $v_2$,
$$
A_1 v_1 = A_2 v_2 .
$$
The velocity is inversely proportional to the area of the section, so where the duct narrows the fluid accelerates. If a circular pipe halves its diameter, the area becomes one quarter and the velocity quadruples.

::grafico{assi=0 uguale=1 linee="0,1.2 3,1.2 5,0.85 8,0.85;0,-1.2 3,-1.2 5,-0.85 8,-0.85" poligoni="0,1.2 3,1.2 5,0.85 8,0.85 8,-0.85 5,-0.85 3,-1.2 0,-1.2" segmenti="1.5,-1.2,1.5,1.2;6.5,-0.85,6.5,0.85" vettori="0.3,0.5,1.1,0.5,v₁;5.4,0.4,7,0.4,v₂" etichette="1.65,-0.95,A₁;6.65,-0.65,A₂" xmin=0 xmax=8 ymin=-1.6 ymax=1.6 titolo="Where the section is halved the velocity doubles, because the flow rate $Q = A_1 v_1 = A_2 v_2$ is the same at every section"}

:::dimostrazione
Consider the fluid between the sections $A_1$ and $A_2$. In a time interval $dt$ the mass $\rho A_1 v_1\, dt$ enters through the first section and the mass $\rho A_2 v_2\, dt$ leaves through the second, while no fluid passes through the lateral walls. Since the flow is steady, the mass contained between the two sections does not change with time, so the mass that entered equals the mass that left: $\rho A_1 v_1\, dt = \rho A_2 v_2\, dt$. The fluid is incompressible, therefore the density is the same at the two sections and cancels together with $dt$, giving $A_1 v_1 = A_2 v_2$.
:::
::::

## Bernoulli's theorem

:::richiamo{titolo="Work-kinetic energy theorem"}
The change in kinetic energy of a system equals the total work of the forces acting on it: $\Delta K = L_{\mathrm{tot}}$. See the topic on work and energy.
:::

::::teorema{#teorema-di-bernoulli titolo="Bernoulli's theorem"}
Consider an ideal fluid of density $\rho$ flowing in a duct. For any two sections of the duct, at heights $y_1$ and $y_2$, with pressures $p_1$ and $p_2$ and velocities $v_1$ and $v_2$, we have
$$
p_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = p_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2 ,
$$
that is, the quantity $p + \dfrac{1}{2}\rho v^2 + \rho g y$ is constant along the duct. Each term is an energy per unit volume: $\dfrac{1}{2}\rho v^2$ is the kinetic energy, $\rho g y$ the gravitational potential energy, $p$ the work that the pressure forces do to push a unit volume of fluid. The theorem expresses conservation of energy for a fluid without friction, and together with the continuity equation it makes it possible to compute velocities and pressures. In a horizontal duct where the velocity goes from $1.0$ to $3.0\,\mathrm{m/s}$, the pressure of the water decreases by $\dfrac{1}{2} \cdot 1000 \cdot (9.0 - 1.0) = 4.0 \cdot 10^3\,\mathrm{Pa}$.

::grafico{assi=0 uguale=1 linee="0,1.6 3,1.6 5,3.4 8,3.4;0,0.4 3,0.4 5,2.6 8,2.6" poligoni="0,1.6 3,1.6 5,3.4 8,3.4 8,2.6 5,2.6 3,0.4 0,0.4" segmenti="1.5,0.4,1.5,1.6;6.5,2.6,6.5,3.4;-0.3,1,1.5,1;-0.3,3,6.5,3" vettori="0.3,1.3,1.1,1.3,v₁;6.7,2.85,7.9,2.85,v₂" etichette="-0.3,1.15,y₁;-0.3,3.15,y₂;1.6,0.55,A₁;6.6,2.7,A₂" xmin=-0.4 xmax=8.4 ymin=0 ymax=3.8 titolo="The fluid between the sections $A_1$ and $A_2$ rises from height $y_1$ to height $y_2$ and accelerates from $v_1$ to $v_2$"}

:::dimostrazione
Consider the fluid that, at the instant $t$, lies between the sections $A_1$ and $A_2$. In the interval $dt$ the rear section advances by $v_1\, dt$ and the front section by $v_2\, dt$. By the **continuity equation** the two swept volumes are equal, $dV = A_1 v_1\, dt = A_2 v_2\, dt$, and contain the same mass $dm = \rho\, dV$.

We compute the work of the forces on the fluid considered. The fluid behind pushes the rear section with the force $p_1 A_1$ in the direction of motion, which does the work $p_1 A_1 v_1\, dt = p_1\, dV$; the fluid ahead acts on the front section with the force $p_2 A_2$ opposite to the motion, which does the work $-p_2\, dV$. The walls of the duct exert forces perpendicular to the velocity, because the fluid has no friction, so they do no work. The flow is steady, therefore the portion of fluid between the two intermediate positions has the same distribution of velocities and heights before and after: the overall effect of the displacement is that the mass $dm$ goes from height $y_1$ with velocity $v_1$ to height $y_2$ with velocity $v_2$. The work of the weight is therefore $-dm\, g\,(y_2 - y_1)$ and the change in kinetic energy is $\dfrac{1}{2}\, dm\,(v_2^2 - v_1^2)$.

By the **work-kinetic energy theorem**
$$
\frac{1}{2}\,\rho\, dV\,(v_2^2 - v_1^2) = (p_1 - p_2)\, dV - \rho\, dV\, g\,(y_2 - y_1) ,
$$
and dividing by $dV$ and moving the terms with index $1$ to the left-hand side we obtain the claim.
:::
::::

:::osservazione{#bernoulli-e-stevino titolo="Bernoulli for a fluid at rest"}
If the fluid is at rest, $v_1 = v_2 = 0$ and Bernoulli's theorem reduces to $p_2 = p_1 + \rho g\,(y_1 - y_2)$, that is, to **Stevin's law**. If instead the duct is horizontal, $y_1 = y_2$ and what remains is $p_1 + \dfrac{1}{2}\rho v_1^2 = p_2 + \dfrac{1}{2}\rho v_2^2$, so where the velocity is greater the pressure is lower. The Venturi tube is based on this relation.
:::

## Applications: Torricelli and Venturi

::::teorema{#teorema-di-torricelli titolo="Torricelli's theorem"}
An open tank contains an ideal liquid, and in its wall there is a hole of area $a$ much smaller than the area $A$ of the free surface, at a depth $h$ below the free surface. Then the liquid flows out of the hole with speed
$$
v = \sqrt{2 g h} .
$$
It is the same speed that a body acquires in free fall from a height $h$. The theorem gives the flow rate through the hole, $Q = a\sqrt{2gh}$, and, together with the laws of projectile motion, the trajectory of the jet; from a hole $1.25\,\mathrm{m}$ below the surface the water flows out at $\sqrt{2 \cdot 9.81 \cdot 1.25} \approx 4.95\,\mathrm{m/s}$.

::grafico{assi=0 uguale=1 curve="2.5+t,0.4-t^2/8.4,0,1.833" linee="0.5,3.2 0.5,0 2.5,0 2.5,0.3;2.5,0.5 2.5,3.2;2.5,0 4.6,0" poligoni="0.5,0 2.5,0 2.5,2.5 0.5,2.5" vettori="2.5,0.4,3.2,0.4,v" segmenti="2.2,0.4,2.2,2.5" etichette="1.95,1.4,h" xmin=0 xmax=4.8 ymin=-0.2 ymax=3.3 titolo="From the hole at depth $h$ below the free surface the liquid flows out with speed $v = \sqrt{2 g h}$ and follows an arc of a parabola"}

:::dimostrazione
We apply **Bernoulli's theorem** between a point of the free surface and a point of the jet just outside the hole, taking the height of the hole as zero. Both points are in contact with air, so they have pressure $p_0$. By the **continuity equation** the free surface descends with speed $\dfrac{a}{A}\, v$, which is neglected because $a \ll A$. Then
$$
p_0 + 0 + \rho g h = p_0 + \frac{1}{2}\rho v^2 + 0 ,
$$
and solving for $v$ we obtain $v = \sqrt{2gh}$. If the area of the hole is not negligible, the same calculation with the speed of the surface gives $v = \sqrt{\dfrac{2gh}{1 - \left( \dfrac{a}{A} \right)^2}}$.
:::
::::

::::teorema{#tubo-di-venturi titolo="Venturi tube"}
A horizontal duct of cross section $A_1$ has a constriction of cross section $A_2 < A_1$ and an ideal fluid of density $\rho$ flows through it. If the pressure difference between the wide section and the constriction is $\Delta p = p_1 - p_2$, the velocity in the wide section is
$$
v_1 = \sqrt{\frac{2\,\Delta p}{\rho\left( \dfrac{A_1^2}{A_2^2} - 1 \right)}} ,
$$
and the flow rate is $Q = A_1 v_1$. The Venturi tube is therefore a flow meter that requires only the measurement of a pressure difference. When the pressure is read with two open vertical tubes, connected to the two sections and filled with the same liquid that flows in the duct, **Stevin's law** applied in the tubes gives $\Delta p = \rho g\, \Delta h$, where $\Delta h$ is the difference in level between the columns.

::grafico{assi=0 uguale=1 linee="0,1 1.3,1 1.3,3.6;1.7,3.6 1.7,1 2.5,1 3.5,0.5 3.8,0.5 3.8,3.6;4.2,3.6 4.2,0.5 4.5,0.5 5.5,1 8,1;0,-1 2.5,-1 3.5,-0.5 4.5,-0.5 5.5,-1 8,-1" poligoni="0,1 1.3,1 1.3,3 1.7,3 1.7,1 2.5,1 3.5,0.5 3.8,0.5 3.8,1.8 4.2,1.8 4.2,0.5 4.5,0.5 5.5,1 8,1 8,-1 5.5,-1 4.5,-0.5 3.5,-0.5 2.5,-1 0,-1" segmenti="1.7,3,4.8,3;4.2,1.8,4.8,1.8;4.8,1.8,4.8,3" etichette="4.95,2.35,Δh;0.95,-0.75,A₁;3.6,-0.3,A₂" vettori="0.3,0.4,0.7,0.4,v₁;3.2,0.2,4.8,0.2,v₂" xmin=0 xmax=8 ymin=-1.4 ymax=3.8 titolo="Venturi tube: in the constriction the velocity is greater and the pressure lower, and the difference in level $\Delta h$ in the vertical tubes measures $p_1 - p_2$"}

:::dimostrazione
By the **continuity equation** $v_2 = \dfrac{A_1}{A_2}\, v_1$. The duct is horizontal, so **Bernoulli's theorem** between the two sections gives
$$
p_1 - p_2 = \frac{1}{2}\rho\,(v_2^2 - v_1^2) = \frac{1}{2}\rho\, v_1^2 \left( \frac{A_1^2}{A_2^2} - 1 \right) .
$$
Since $A_1 > A_2$, the factor $\dfrac{A_1^2}{A_2^2} - 1$ is positive, so $p_1 > p_2$ and we can solve for $v_1$, obtaining the formula in the statement.
:::
::::

## Viscosity

:::definizione{#viscosita titolo="Viscosity"}
In a real fluid, layers flowing at different velocities exchange tangential forces, like an internal friction. Consider two parallel flat plates of area $A$, at distance $d$, with the fluid between them: one plate is at rest and the other moves with velocity $v$. For many fluids, called Newtonian, the force needed to maintain the motion is
$$
F = \eta\, A\, \frac{v}{d} ,
$$
where $\eta$ is the **viscosity** of the fluid, measured in $\mathrm{Pa \cdot s}$. At $20\,^{\circ}\mathrm{C}$ water has $\eta \approx 1.0 \cdot 10^{-3}\,\mathrm{Pa \cdot s}$ and air $\eta \approx 1.8 \cdot 10^{-5}\,\mathrm{Pa \cdot s}$; in liquids the viscosity decreases as the temperature increases. Viscosity is the cause of energy dissipation in ducts, which Bernoulli's theorem does not take into account.
:::

:::teorema{#legge-di-poiseuille titolo="Poiseuille's law"}
In a horizontal cylindrical pipe of radius $R$ and length $L$, a Newtonian fluid of viscosity $\eta$ in steady laminar flow has flow rate
$$
Q = \frac{\pi R^4\, \Delta p}{8\, \eta L} ,
$$
where $\Delta p$ is the pressure difference between the ends. The law is derived by imposing equilibrium between the pressure forces and the viscous forces on each cylindrical layer of fluid; the result is a parabolic velocity profile, maximum on the axis and zero at the wall, whose integration over the cross section gives $Q$. The calculation is omitted. For the same $\Delta p$, the flow rate is proportional to the fourth power of the radius, therefore halving the radius of a pipe makes the flow rate $\dfrac{1}{16}$ of the initial one.
:::

:::osservazione{#numero-di-reynolds titolo="Laminar and turbulent flow"}
The flow of a fluid in a pipe is **laminar** when the layers slide in an orderly way one beside the other, **turbulent** when vortices form that mix the fluid. The regime depends on the **Reynolds number**
$$
\mathrm{Re} = \frac{\rho\, v D}{\eta} ,
$$
where $v$ is the average velocity and $D$ the diameter of the pipe; $\mathrm{Re}$ is a pure number. In cylindrical pipes the flow is laminar for $\mathrm{Re}$ less than about $2000$, and only in that case does Poiseuille's law hold. For water at $0.10\,\mathrm{m/s}$ in a pipe of diameter $1.0\,\mathrm{cm}$ we have $\mathrm{Re} = \dfrac{1000 \cdot 0.10 \cdot 0.010}{1.0 \cdot 10^{-3}} = 1000$, so the flow is laminar.
:::
