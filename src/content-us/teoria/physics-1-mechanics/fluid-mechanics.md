---
titolo: Fluid mechanics
sommario: How pressure is defined in a fluid and how it varies with depth, how Pascal's and Archimedes' principles follow from it, and how the continuity equation and Bernoulli's equation describe the steady flow of an ideal fluid.
---

## Density and pressure

:::definizione{#density titolo="Density"}
The **density** of a homogeneous body of mass $m$ and volume $V$ is the ratio
$$
\rho = \frac{m}{V} ,
$$
measured in $\mathrm{kg/m^3}$. For a body that is not homogeneous the same ratio taken over a small region around a point defines the density at that point, and the mass of the body is recovered by adding the contributions of all its parts.

Density is what distinguishes one material from another in every problem of this chapter: fresh water has $\rho = 1.00 \times 10^{3}\,\mathrm{kg/m^3}$, sea water about $1.03 \times 10^{3}\,\mathrm{kg/m^3}$, mercury $1.36 \times 10^{4}\,\mathrm{kg/m^3}$, aluminum $2.70 \times 10^{3}\,\mathrm{kg/m^3}$ and air at room conditions $1.20\,\mathrm{kg/m^3}$. A **fluid** is a substance that cannot sustain a shear stress at rest, therefore it takes the shape of its container; liquids are treated as **incompressible**, which means that their density is taken as constant, while the density of a gas changes appreciably with pressure.
:::

:::definizione{#pressure titolo="Pressure"}
Let a fluid act on a flat surface of area $A$ with a force of magnitude $F$ perpendicular to the surface. The **pressure** exerted on that surface is
$$
p = \frac{F}{A} ,
$$
measured in pascals, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Pressure is a scalar, while the force it produces on a surface is a vector, directed along the inward normal of the surface and of magnitude $F = pA$ when the pressure is uniform over the surface.

In a fluid at rest the pressure at a point has the same value for every orientation of the surface used to measure it, since a fluid at rest sustains no shear stress. A force obtained from a pressure is therefore computed as soon as the pressure and the area are known, which is how the force on a dam, on a piston or on a submerged window is found.
:::

:::osservazione{#gauge-pressure titolo="Absolute and gauge pressure"}
Atmospheric pressure at sea level has the reference value
$$
p_{\mathrm{atm}} = 1.013 \times 10^{5}\,\mathrm{Pa} = 1\,\mathrm{atm} ,
$$
and other units still in use are the bar, $1\,\mathrm{bar} = 10^{5}\,\mathrm{Pa}$, and the pound per square inch, $1\,\mathrm{psi} = 6.895 \times 10^{3}\,\mathrm{Pa}$.

The **absolute pressure** $p$ is measured from zero, while the **gauge pressure** is the excess over the atmosphere,
$$
p_{\mathrm{gauge}} = p - p_{\mathrm{atm}} .
$$
A tire gauge reading $32\,\mathrm{psi}$ reports a gauge pressure, hence the absolute pressure inside the tire is about $3.2 \times 10^{5}\,\mathrm{Pa}$. The distinction decides which of the two values enters a formula: the net force on a wall with the atmosphere acting on its other side is computed from the gauge pressure, since the two atmospheric contributions cancel, while the absolute pressure is the quantity that appears in Bernoulli's equation and in the gas laws.
:::

## Variation of pressure with depth

:::richiamo{titolo="Definite integral"}
Let $f$ be continuous on $[a, b]$ and let $F$ satisfy $F'(x) = f(x)$. Then
$$
\int_a^b f(x)\,dx = F(b) - F(a) .
$$
The integral is used here to add the forces produced by a pressure that changes from point to point of a surface, and the chapter of Calculus on the definite integral establishes it.
:::

::::teorema{#pressure-depth titolo="Pressure as a function of depth"}
Let an incompressible fluid of density $\rho$ be at rest in a uniform gravitational field, and let the $y$ axis point upward. Then the pressure satisfies
$$
\frac{dp}{dy} = -\rho g ,
$$
hence two points of the same connected body of fluid, at depths $h_1$ and $h_2$ below the free surface, satisfy
$$
p_2 - p_1 = \rho g\,(h_2 - h_1) .
$$
In particular, if the free surface is exposed to the atmosphere, the pressure at depth $h$ is
$$
p = p_{\mathrm{atm}} + \rho g h .
$$

:::dimostrazione
Isolate a vertical column of fluid of cross-sectional area $A$, with its upper face at height $y + \Delta y$ and its lower face at height $y$. The column is at rest, therefore the resultant of the vertical forces acting on it vanishes. Those forces are the force $p(y)A$ exerted upward by the fluid below, the force $p(y + \Delta y)A$ exerted downward by the fluid above, and the weight $\rho g A \Delta y$ of the column, while the forces on the lateral surface are horizontal. The equilibrium condition is therefore
$$
p(y)A - p(y + \Delta y)A - \rho g A\,\Delta y = 0 ,
$$
and dividing by $A\,\Delta y$ gives
$$
\frac{p(y + \Delta y) - p(y)}{\Delta y} = -\rho g .
$$
Letting $\Delta y$ tend to zero yields $\dfrac{dp}{dy} = -\rho g$. Since $\rho$ and $g$ are constant, integrating from the free surface, where $y = 0$ and $p = p_{\mathrm{atm}}$, down to the depth $h$, where $y = -h$, gives $p = p_{\mathrm{atm}} + \rho g h$, and subtracting the values at two depths gives the second relation.

::grafico{assi=0 uguale=1 poligoni="0,0 7,0 7,5 0,5" linee="0,5.7 0,0 7,0 7,5.7;2,1.2 5,1.2 5,3.8 2,3.8 2,1.2" vettori="2.8,3.8,2.8,3.1,p₁A;4.0,1.2,4.0,1.9,p₂A;3.5,2.8,3.5,2.0,w" segmenti="5.9,5,5.9,1.2;1.35,1.2,1.35,3.8" etichette="6.05,3.1,h;1.47,2.4,Δy;0.15,5.25,free surface;2.75,0.75,area A" punti="3.5,2.8,pieno" xmin=-0.3 xmax=7.6 ymin=-0.4 ymax=6.1 titolo="A column of fluid at rest: the force from below, the force from above and the weight $w = \rho g A \Delta y$ balance, which gives $\dfrac{dp}{dy} = -\rho g$"}
:::

The relation shows that the pressure in a liquid at rest depends on the depth alone, and not on the shape of the container nor on the quantity of liquid present. It also fixes the order of magnitude of the effect: in water $\rho g = 9.81 \times 10^{3}\,\mathrm{Pa/m}$, therefore every $10.3\,\mathrm{m}$ of depth add one atmosphere.

::grafico{f="101.3+9.81*x" xmin=0 xmax=10 ymin=0 ymax=200 nomi="h,p" punti="0,101.3,pieno" titolo="Absolute pressure $p$ in $\mathrm{kPa}$ against depth $h$ in $\mathrm{m}$ for water: a straight line of intercept $p_{\mathrm{atm}}$ and slope $\rho g$"}
::::

:::attenzione
Two points at the same depth have the same pressure *only* when they belong to the same connected body of the same fluid. In a U-tube holding water in one arm and oil in the other the two free surfaces stand at different heights, and comparing the pressures requires starting from the interface, where the two liquids are in contact.

The quantity of liquid is irrelevant as well. Three communicating columns of different widths filled to the same level exert the same pressure on the bottom, although one of them holds several times the mass of another.

::grafico{assi=0 uguale=1 poligoni="1,0 8,0 8,0.6 1,0.6;1,0.6 1.8,0.6 1.8,4 1,4;3,0.6 5.4,0.6 5.4,4 3,4;6,0.6 8,0.6 8,4 6,4" linee="1,4.8 1,0 8,0 8,4.8;1.8,4.8 1.8,0.6 3,0.6 3,4.8;5.4,4.8 5.4,0.6 6,0.6 6,4.8" segmenti="0.5,4,8.6,4" punti="1.4,0.2,pieno,A;4.2,0.2,pieno,B;7,0.2,pieno,C" xmin=0 xmax=9.2 ymin=-0.5 ymax=5.3 titolo="The three columns hold different volumes of the same liquid at the same level, hence the gauge pressure at $A$, $B$ and $C$ has the same value $\rho g h$"}
:::

:::esempio{#force-on-a-vertical-wall titolo="Force on a vertical wall"}
A vertical rectangular gate of width $w$ holds water of depth $H$, with the free surface level with the top of the gate and the atmosphere acting on the other face. The gauge pressure at depth $y$ is $\rho g y$, and it acts on the horizontal strip of area $w\,dy$ at that depth, therefore the net force on the gate is
$$
F = \int_0^H \rho g y\,w\,dy = \frac{1}{2}\rho g H^2 w .
$$
For $H = 3.0\,\mathrm{m}$ and $w = 4.0\,\mathrm{m}$ this gives $F = 1.77 \times 10^{5}\,\mathrm{N}$.

The same integral weighted by the depth locates the line of action of the resultant. Taking torques about the free surface,
$$
y_{\mathrm{cp}} = \frac{\displaystyle\int_0^H \rho g y^2 w\,dy}{F} = \frac{\dfrac{1}{3}\rho g H^3 w}{\dfrac{1}{2}\rho g H^2 w} = \frac{2}{3}H ,
$$
hence the resultant is applied at two thirds of the depth, and not at the middle, since the deeper strips carry a larger pressure. The chapter on static equilibrium and elasticity uses this point to compute the reactions of the hinges of a gate.
:::

## Measuring pressure

:::esempio{#barometer titolo="Mercury barometer"}
A tube closed at one end is filled with mercury and inverted into a basin of mercury. The space above the column contains no gas, therefore the pressure at the top of the column is zero, and the pressure at the level of the free surface of the basin is the atmospheric pressure. Applying the law of pressure with depth along the mercury,
$$
p_{\mathrm{atm}} = \rho_{\mathrm{Hg}}\,g\,h
\qquad\Longrightarrow\qquad
h = \frac{p_{\mathrm{atm}}}{\rho_{\mathrm{Hg}}\,g} = \frac{1.013 \times 10^{5}\,\mathrm{Pa}}{1.36 \times 10^{4}\,\mathrm{kg/m^3} \cdot 9.81\,\mathrm{m/s^2}} = 0.759\,\mathrm{m} .
$$
This is the origin of the unit $1\,\mathrm{mmHg} = 133\,\mathrm{Pa}$, also called the torr, and of the statement that standard atmospheric pressure corresponds to $760\,\mathrm{mm}$ of mercury. The same instrument filled with water would need a column of $10.3\,\mathrm{m}$, since the density of water is smaller by the factor $13.6$.
:::

:::esempio{#manometer titolo="Open-tube manometer"}
A U-tube partly filled with a liquid of density $\rho$ has one arm connected to a vessel and the other open to the atmosphere. Let $h$ be the height of the liquid in the open arm above the level in the connected arm. The two levels are joined through the liquid, therefore the pressures at the lower of the two levels, computed along each arm, are equal:
$$
p = p_{\mathrm{atm}} + \rho g h
\qquad\Longrightarrow\qquad
p_{\mathrm{gauge}} = \rho g h .
$$
The reading of the instrument is the height difference, hence a manometer measures a gauge pressure directly. A mercury manometer with $h = 32\,\mathrm{cm}$ reports $p_{\mathrm{gauge}} = 4.27 \times 10^{4}\,\mathrm{Pa}$, while the same gauge pressure would lift water by $4.35\,\mathrm{m}$, which is why dense liquids are used for large pressures and light ones for small pressures.
:::

## Pascal's principle and hydraulic machines

:::teorema{#pascals-principle titolo="Pascal's principle"}
A change of pressure applied to an enclosed incompressible fluid at rest is transmitted undiminished to every point of the fluid and to the walls of the container.

The statement is an experimental law, and it also follows from the law of pressure with depth: that law fixes the difference $p_2 - p_1 = \rho g (h_2 - h_1)$ between any two points, a difference that depends on the geometry alone, therefore raising the pressure at one point by $\Delta p$ raises it by the same $\Delta p$ everywhere.

The principle turns a small force applied over a small area into a large force delivered over a large area, which is the working principle of every hydraulic machine.
:::

:::esempio{#hydraulic-press titolo="Hydraulic press"}
Two pistons of areas $A_1$ and $A_2$ close the two arms of a vessel filled with oil, and the two pistons are at the same height. A force $F_1$ on the small piston produces the pressure $\dfrac{F_1}{A_1}$, which by Pascal's principle is the pressure acting on the large piston, therefore
$$
\frac{F_1}{A_1} = \frac{F_2}{A_2}
\qquad\Longrightarrow\qquad
F_2 = \frac{A_2}{A_1}\,F_1 .
$$
With pistons of diameters $2.0\,\mathrm{cm}$ and $24\,\mathrm{cm}$ the area ratio is $144$, hence a load of $1200\,\mathrm{kg}$, whose weight is $1.18 \times 10^{4}\,\mathrm{N}$, is held by $F_1 = 81.8\,\mathrm{N}$.

The liquid is incompressible, therefore the volume leaving one cylinder equals the volume entering the other, $A_1 s_1 = A_2 s_2$, and the small piston travels the longer distance by the same factor $144$. Multiplying the two relations gives $F_1 s_1 = F_2 s_2$, so the work supplied equals the work delivered and no energy is created by the machine, in agreement with the work-energy theorem.

::grafico{assi=0 uguale=1 poligoni="0.8,0 8,0 8,0.8 0.8,0.8;0.8,0.8 1.8,0.8 1.8,1.4 0.8,1.4;5,0.8 8,0.8 8,1.4 5,1.4" linee="0.8,2.6 0.8,0 8,0 8,2.6;1.8,2.6 1.8,0.8 5,0.8 5,2.6;0.8,1.4 1.8,1.4 1.8,1.7 0.8,1.7 0.8,1.4;5,1.4 8,1.4 8,1.7 5,1.7 5,1.4" vettori="1.3,2.9,1.3,1.85,F₁;6.5,1.85,6.5,2.9,F₂" etichette="0.25,1.52,A₁;8.2,1.52,A₂" xmin=0 xmax=9.2 ymin=-0.4 ymax=3.4 titolo="Hydraulic press: the same pressure acts on both pistons, hence $F_2 = \dfrac{A_2}{A_1}F_1$"}
:::

## Archimedes' principle and buoyancy

::::teorema{#archimedes-principle titolo="Archimedes' principle"}
Let a body be wholly or partly immersed in a fluid of density $\rho_f$ at rest, and let $V_{\mathrm{sub}}$ be the volume of the immersed part. Then the resultant of the pressure forces exerted by the fluid on the body is a vertical force directed upward, called the **buoyant force**, of magnitude
$$
F_B = \rho_f\,g\,V_{\mathrm{sub}} ,
$$
equal to the weight of the displaced fluid, and applied at the centroid of the immersed volume.

:::dimostrazione
Consider first a rectangular block of horizontal cross-section $A$ and height $\ell$, fully submerged with its top face at depth $h_1$ and its bottom face at depth $h_2 = h_1 + \ell$. The forces on the lateral faces are horizontal and cancel in pairs, since opposite faces lie at the same depths. The top face is pushed down with the force $p_1 A$ and the bottom face is pushed up with the force $p_2 A$, therefore the resultant is directed upward and has magnitude
$$
F_B = (p_2 - p_1)A = \rho_f g (h_2 - h_1) A = \rho_f g\,\ell A = \rho_f\,g\,V .
$$

For a body of arbitrary shape, remove the body and let the fluid fill the region it occupied. That portion of fluid is at rest, hence the resultant of the pressure forces exerted on its boundary balances its weight $\rho_f g V_{\mathrm{sub}}$ and passes through its centroid. The pressure at each point of the boundary is fixed by the depth of that point alone, therefore replacing the fluid by the body leaves every pressure force unchanged. The resultant acting on the body is the same as the one acting on the fluid that was removed, and the stated result follows.

::grafico{assi=0 uguale=1 poligoni="0,0 7,0 7,5 0,5" linee="0,5.7 0,0 7,0 7,5.7;2.4,1.8 4.6,1.8 4.6,3 2.4,3 2.4,1.8" vettori="3,3,3,2.4,p₁A;4,1.8,4,2.4,p₂A" segmenti="1.6,5,1.6,3;0.8,5,0.8,1.8" etichette="1.75,4,h₁;0.95,2.6,h₂;0.15,5.25,free surface" xmin=-0.3 xmax=7.6 ymin=-0.4 ymax=6.1 titolo="The bottom face lies deeper than the top face, hence $p_2 > p_1$ and the resultant $(p_2 - p_1)A = \rho_f g V$ points upward"}
:::

The principle gives the weight of a body measured in a fluid. A spring scale attached to a submerged body reads the **apparent weight**
$$
W_{\mathrm{app}} = \rho_b g V - \rho_f g V = \left(1 - \frac{\rho_f}{\rho_b}\right) W ,
$$
smaller than the true weight $W$, and the two readings in air and in water determine the density of the body without measuring its volume geometrically.
::::

::::teorema{#floating-condition titolo="Condition for floating"}
Let a homogeneous body of density $\rho_b$ and volume $V$ be released in a fluid of density $\rho_f$, with only the weight and the buoyant force acting on it. Then:

- for $\rho_b > \rho_f$ the body sinks;
- for $\rho_b < \rho_f$ the body floats in equilibrium with the submerged fraction
$$
\frac{V_{\mathrm{sub}}}{V} = \frac{\rho_b}{\rho_f} ;
$$
- for $\rho_b = \rho_f$ the body stays in equilibrium at any depth.

:::dimostrazione
While the body is fully submerged the two forces acting on it are the weight $\rho_b g V$ downward and the buoyant force $\rho_f g V$ upward, hence Newton's second law along the vertical gives
$$
(\rho_f - \rho_b)\,g\,V = \rho_b V a .
$$
For $\rho_b > \rho_f$ the acceleration is negative and the body sinks, while for $\rho_b = \rho_f$ it vanishes and the body remains where it is. For $\rho_b < \rho_f$ the acceleration is positive, therefore the body rises until part of it leaves the fluid. From that moment the buoyant force is $\rho_f g V_{\mathrm{sub}}$, and equilibrium requires
$$
\rho_f\,g\,V_{\mathrm{sub}} = \rho_b\,g\,V ,
$$
which gives the stated fraction. The fraction is smaller than $1$ precisely because $\rho_b < \rho_f$, so the equilibrium position exists.

::grafico{assi=0 uguale=1 poligoni="0,0 7,0 7,3 0,3" linee="0,4.4 0,0 7,0 7,4.4;2.5,1.8 4.5,1.8 4.5,3.6 2.5,3.6 2.5,1.8" segmenti="0.5,3,6.8,3" vettori="3.5,2.7,3.5,1.3,weight;3.5,2.7,3.5,4.5,buoyant force" punti="3.5,2.7,pieno" etichette="0.9,2.3,submerged;1.35,3.3,above" xmin=-0.3 xmax=7.6 ymin=-0.4 ymax=4.8 titolo="A floating body at rest: $\rho_f g V_{\mathrm{sub}} = \rho_b g V$, hence $\dfrac{V_{\mathrm{sub}}}{V} = \dfrac{\rho_b}{\rho_f}$"}
:::

The fraction is what makes the principle usable as a measuring instrument. Ice has $\rho_b = 917\,\mathrm{kg/m^3}$ and sea water $\rho_f = 1025\,\mathrm{kg/m^3}$, therefore an iceberg floats with $89.5\%$ of its volume below the surface and only $10.5\%$ in sight. A hydrometer is a weighted tube whose submerged length is inversely proportional to the density of the liquid, and reading that length on a scale gives the density directly.
::::

## Fluid flow and the continuity equation

The preceding sections describe a fluid at rest, while a moving fluid requires a model of the motion, and the model used in this chapter rests on four hypotheses on the fluid and on its flow.

:::definizione{#ideal-fluid titolo="Ideal fluid and steady flow"}
An **ideal fluid** is incompressible and has no viscosity, which means that no tangential force is exerted between adjacent layers of fluid or between the fluid and the walls. A flow is **steady** when the velocity at each fixed point of space does not change with time, and it is **irrotational** when no element of fluid rotates about its own centre.

In a steady flow the path followed by an element of fluid is called a **streamline**, and the velocity at each point is tangent to the streamline through that point. Streamlines do not cross, since at a crossing point the velocity would have two values. A bundle of streamlines through a closed curve forms a **flow tube**, and no fluid enters or leaves a flow tube across its lateral surface.

The four hypotheses are what make the two laws of the following sections exact. Real flows satisfy them approximately, and the final section states how viscosity changes the conclusions.
:::

:::definizione{#volume-flow-rate titolo="Volume flow rate"}
Let a fluid cross a surface of area $A$ with velocity of magnitude $v$ perpendicular to the surface and uniform over it. In the time $dt$ the fluid occupying the cylinder of base $A$ and height $v\,dt$ crosses the surface, hence the volume per unit time, called the **volume flow rate**, is
$$
Q = \frac{dV}{dt} = A\,v ,
$$
measured in $\mathrm{m^3/s}$. The **mass flow rate** is $\dot{m} = \rho Q$, measured in $\mathrm{kg/s}$.

The flow rate is the quantity that a water meter records and that a pump is rated by, and the unit used in practice is the liter per second, $1\,\mathrm{L/s} = 10^{-3}\,\mathrm{m^3/s}$. A tap delivering $0.25\,\mathrm{L/s}$ through an opening of area $1.5\,\mathrm{cm^2}$ discharges water at $1.7\,\mathrm{m/s}$.
:::

::::teorema{#continuity-equation titolo="Continuity equation"}
Let an incompressible fluid flow steadily along a flow tube, and let $A_1$ and $A_2$ be the areas of two cross-sections of the tube, crossed with uniform speeds $v_1$ and $v_2$. Then
$$
A_1 v_1 = A_2 v_2 = Q = \text{constant} .
$$

:::dimostrazione
Consider the portion of fluid contained between the two cross-sections. In the time $dt$ the volume $A_1 v_1\,dt$ enters through the first section and the volume $A_2 v_2\,dt$ leaves through the second, while no fluid crosses the lateral surface of the flow tube. The flow is steady, therefore the volume of fluid contained between the two sections does not change, and the fluid is incompressible, therefore that volume cannot be stored by a change of density. The volume entering equals the volume leaving,
$$
A_1 v_1\,dt = A_2 v_2\,dt ,
$$
and dividing by $dt$ gives the stated equality.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 5.5,0.7 9,0.7 9,1.5 5.5,1.5 4,2.2 0,2.2" linee="0,2.2 4,2.2 5.5,1.5 9,1.5;0,0 4,0 5.5,0.7 9,0.7" vettori="1,1.1,2.2,1.1,v₁;6.6,1.1,8.6,1.1,v₂" segmenti="0.5,0,0.5,2.2;8.8,0.7,8.8,1.5" etichette="0.1,2.45,A₁;8.55,1.75,A₂" xmin=-0.4 xmax=9.6 ymin=-0.5 ymax=2.9 titolo="Narrowing the tube raises the speed, since $A_1 v_1 = A_2 v_2$"}
:::

The equation states that the speed of an incompressible fluid is inversely proportional to the area of the section it crosses, hence halving the diameter of a pipe multiplies the speed by four. It is the first of the two equations used for every flow problem, and it supplies the relation between $v_1$ and $v_2$ that Bernoulli's equation needs.
::::

## Bernoulli's equation

:::richiamo{titolo="Work-energy theorem"}
Let the resultant of the forces acting on a body of mass $m$ do the total work $W_{\mathrm{tot}}$ while the speed changes from $v_1$ to $v_2$. Then
$$
W_{\mathrm{tot}} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 .
$$
The chapter on work and kinetic energy establishes it, and the proof below applies it to the fluid contained in a flow tube.
:::

::::teorema{#bernoullis-equation titolo="Bernoulli's equation"}
Let an ideal fluid of density $\rho$ flow steadily along a flow tube. Then at every two sections of the tube, labelled by their height $y$ above a fixed reference level, their pressure $p$ and their speed $v$,
$$
p_1 + \rho g y_1 + \frac{1}{2}\rho v_1^2 = p_2 + \rho g y_2 + \frac{1}{2}\rho v_2^2 ,
$$
hence the quantity $p + \rho g y + \dfrac{1}{2}\rho v^2$ has the same value at every section.

:::dimostrazione
Take the portion of fluid between the two sections and follow it for the time $dt$. The volume entering at the first section is $dV = A_1 v_1\,dt$, the volume leaving at the second is $A_2 v_2\,dt$, and the continuity equation makes the two equal, hence the mass transferred is $dm = \rho\,dV$. The flow is steady, therefore the state of the fluid in the region between the sections is the same at the beginning and at the end of the interval, and the whole change amounts to moving the mass $dm$ from the first section to the second.

The fluid behind the first section pushes with the force $p_1 A_1$ along the displacement $v_1\,dt$, and the fluid ahead of the second section pushes back with the force $p_2 A_2$ along the displacement $v_2\,dt$, therefore the work of the pressure forces is
$$
W_p = p_1 A_1 v_1\,dt - p_2 A_2 v_2\,dt = (p_1 - p_2)\,dV .
$$
The lateral walls exert forces perpendicular to the velocity, hence they do no work, and the fluid has no viscosity, hence no internal tangential force does work either. The weight does the work
$$
W_g = -\,dm\,g\,(y_2 - y_1) = -\rho\,dV\,g\,(y_2 - y_1) ,
$$
and the kinetic energy changes by $\dfrac{1}{2}\rho\,dV\,(v_2^2 - v_1^2)$. The **work-energy theorem** applied to the mass $dm$ gives
$$
(p_1 - p_2)\,dV - \rho g\,dV\,(y_2 - y_1) = \frac{1}{2}\rho\,dV\,(v_2^2 - v_1^2) ,
$$
and dividing by $dV$ and collecting the quantities with the same index on the same side gives the stated equality.

::grafico{assi=0 uguale=1 poligoni="0,0.4 3.6,0.4 5.4,3.1 9,3.1 9,3.9 5.4,3.9 3,1.4 0,1.4" linee="0,1.4 3,1.4 5.4,3.9 9,3.9;0,0.4 3.6,0.4 5.4,3.1 9,3.1;-0.3,-0.6 9.3,-0.6" vettori="1.4,0.9,2.5,0.9,v₁;7.2,3.5,8.6,3.5,v₂" segmenti="1.4,0.9,1.4,-0.6;7.2,3.5,7.2,-0.6" punti="1.4,0.9,pieno,1;7.2,3.5,pieno,2" etichette="1.55,0.1,y₁;7.35,1.3,y₂;0.1,-1,reference level" xmin=-0.6 xmax=9.8 ymin=-1.3 ymax=4.5 titolo="Along a flow tube the sum $p + \rho g y + \dfrac{1}{2}\rho v^2$ takes the same value at the sections $1$ and $2$"}
:::

Each term of the sum is an energy per unit volume, since $\mathrm{Pa} = \dfrac{\mathrm{J}}{\mathrm{m^3}}$, therefore the equation is the conservation of mechanical energy written for a unit volume of flowing fluid, with the pressure accounting for the work done by the neighbouring fluid. Two consequences are read off at once: at constant height a larger speed goes with a smaller pressure, and at constant speed the pressure decreases with height according to the law of hydrostatics, which is recovered by setting $v_1 = v_2 = 0$.
::::

:::attenzione
The equation holds along one flow tube, between sections of the same tube, and under all four hypotheses on the fluid. A viscous fluid dissipates mechanical energy, therefore in a long pipe of constant section carrying a real liquid the pressure drops along the flow although the speed and the height stay the same, and the sum $p + \rho g y + \dfrac{1}{2}\rho v^2$ decreases.

Choosing two points on different flow tubes is not allowed either, unless the flow is also irrotational, in which case the sum takes the same value throughout the fluid.
:::

## Applications of Bernoulli's equation

::::teorema{#torricellis-theorem titolo="Torricelli's theorem"}
Let an open vessel of large cross-section contain a liquid, and let a small opening of area $a$ be made in its wall at depth $h$ below the free surface, with the atmosphere acting on both the free surface and the opening. Then the liquid leaves the opening with speed
$$
v = \sqrt{2gh} .
$$

:::dimostrazione
Apply Bernoulli's equation along the streamline that joins a point of the free surface, labelled $1$, to the opening, labelled $2$, and measure heights from the opening, so that $y_1 = h$ and $y_2 = 0$. Both points are in contact with the atmosphere, hence $p_1 = p_2 = p_{\mathrm{atm}}$. The cross-section of the vessel is much larger than $a$, hence the continuity equation gives a speed at the free surface much smaller than $v$, and $v_1$ is set to zero. The equation reduces to
$$
\rho g h = \frac{1}{2}\rho v^2 ,
$$
and solving for $v$ gives the stated value.

::grafico{assi=0 uguale=1 poligoni="0,0 3.5,0 3.5,4.5 0,4.5" linee="0,5.2 0,0 3.5,0 3.5,1.3;3.5,1.7 3.5,5.2" curve="3.5+2.449*t,1.5-0.5*t^2,0,1.732" vettori="3.5,1.5,5,1.5,v" segmenti="0.7,4.5,0.7,1.5;3.5,0,7.75,0" etichette="0.85,3,h;5.6,0.25,range" punti="7.74,0,pieno" xmin=-0.4 xmax=8.4 ymin=-0.6 ymax=5.7 titolo="Efflux from a small opening at depth $h$: the jet leaves horizontally with $v = \sqrt{2gh}$ and then falls as a projectile"}
:::

The speed is the one a body would reach in free fall from the height $h$, and it does not depend on the density of the liquid. The result also fixes the shape of the jet: the liquid leaves horizontally and then moves as a projectile, therefore the chapter on motion in two and three dimensions gives its range from the height of the opening above the ground.
::::

::::teorema{#venturi-effect titolo="Venturi meter"}
Let an ideal fluid of density $\rho$ flow steadily in a horizontal pipe whose section narrows from $A_1$ to $A_2$, and let $p_1$ and $p_2$ be the pressures at the two sections. Then $p_1 > p_2$ and
$$
v_1 = A_2\sqrt{\frac{2\,(p_1 - p_2)}{\rho\,(A_1^2 - A_2^2)}} ,
\qquad
Q = A_1 v_1 .
$$

:::dimostrazione
The pipe is horizontal, hence $y_1 = y_2$ and Bernoulli's equation reduces to
$$
p_1 + \frac{1}{2}\rho v_1^2 = p_2 + \frac{1}{2}\rho v_2^2 .
$$
The continuity equation gives $v_2 = \dfrac{A_1}{A_2}v_1$, and substituting it leaves
$$
p_1 - p_2 = \frac{1}{2}\rho v_1^2\left(\frac{A_1^2}{A_2^2} - 1\right) = \frac{1}{2}\rho v_1^2\,\frac{A_1^2 - A_2^2}{A_2^2} .
$$
The factor $A_1^2 - A_2^2$ is positive since $A_1 > A_2$, therefore $p_1 - p_2 > 0$, and solving for $v_1$ gives the stated formula.

::grafico{assi=0 uguale=1 poligoni="0,0 2.2,0 3.2,0.45 5,0.45 6,0 9,0 9,1.6 6,1.6 5,1.15 3.2,1.15 2.2,1.6 0,1.6;0.9,1.6 1.3,1.6 1.3,3.9 0.9,3.9;3.9,1.15 4.3,1.15 4.3,2.5 3.9,2.5" linee="0,1.6 2.2,1.6 3.2,1.15 5,1.15 6,1.6 9,1.6;0,0 2.2,0 3.2,0.45 5,0.45 6,0 9,0;0.9,4.3 0.9,1.6;1.3,4.3 1.3,1.6;3.9,4.3 3.9,1.15;4.3,4.3 4.3,1.15" vettori="0.1,0.8,0.85,0.8,v₁;3.4,0.8,4.7,0.8,v₂" segmenti="1.3,3.9,5.3,3.9;4.3,2.5,5.3,2.5;5.3,2.5,5.3,3.9" etichette="5.45,3.1,h;0.1,1.85,A₁;3.95,0.08,A₂" xmin=-0.4 xmax=9.5 ymin=-0.5 ymax=4.7 titolo="Venturi meter: the liquid stands higher over the wide section, and the height difference $h$ gives $p_1 - p_2 = \rho g h$"}
:::

The two pressures are read on two vertical tubes connected to the pipe, where the liquid rises to the heights $\dfrac{p_1}{\rho g}$ and $\dfrac{p_2}{\rho g}$, hence measuring the difference of the two levels measures the flow rate. The same effect explains why the pressure above a wing, where the air moves faster, is smaller than the pressure below it, and why two sheets of paper held close together are pushed towards each other when air is blown between them.
::::

## Viscosity and real fluids

:::definizione{#viscosity titolo="Coefficient of viscosity"}
Let a layer of fluid of area $A$ slide over a parallel layer at distance $dy$, with a difference of velocity $dv$ between them. The tangential force needed to maintain the motion is
$$
F = \eta\,A\,\frac{dv}{dy} ,
$$
and the constant $\eta$, which depends on the fluid and on its temperature, is the **coefficient of viscosity**, measured in $\mathrm{Pa\cdot s}$. Water at $20^\circ\mathrm{C}$ has $\eta = 1.0 \times 10^{-3}\,\mathrm{Pa\cdot s}$, olive oil about $8 \times 10^{-2}\,\mathrm{Pa\cdot s}$ and air $1.8 \times 10^{-5}\,\mathrm{Pa\cdot s}$.

Viscosity is the property set to zero by the hypothesis of an ideal fluid. A viscous fluid adheres to the walls of a pipe, therefore its speed is zero at the wall and largest on the axis, and the tangential forces between layers dissipate mechanical energy as internal energy.
:::

:::osservazione{#poiseuille titolo="Flow of a viscous liquid"}
For a liquid of viscosity $\eta$ in slow flow along a cylindrical pipe of radius $R$ and length $L$, the flow rate is proportional to the pressure difference between the ends,
$$
Q = \frac{\pi R^4}{8\eta L}\,(p_1 - p_2) ,
$$
a result known as Poiseuille's law. The pressure difference is what the viscous forces consume, therefore a pump is needed to keep a real liquid flowing in a long horizontal pipe of constant section, where Bernoulli's equation alone would predict a constant pressure.

The fourth power of the radius makes the flow rate extremely sensitive to the section: reducing the radius of a pipe by $20\%$ leaves only $41\%$ of the flow rate at the same pressure difference. The law holds while the flow is **laminar**, that is, while the streamlines stay parallel; above a threshold of speed the flow becomes **turbulent**, the velocity at a point fluctuates in time and the flow rate grows more slowly than the pressure difference.
:::

:::osservazione{#stokes-drag titolo="Viscous drag on a sphere"}
A sphere of radius $R$ moving slowly with speed $v$ in a fluid of viscosity $\eta$ experiences the drag force
$$
F_d = 6\pi\eta R v ,
$$
known as Stokes' law, opposite to the velocity. A sphere of density $\rho_b$ released in a fluid of density $\rho_f$ is therefore acted on by its weight, by the buoyant force and by a drag that grows with the speed, hence it reaches the terminal speed at which the three balance,
$$
v_t = \frac{2R^2 g\,(\rho_b - \rho_f)}{9\eta} .
$$
The chapter on applications of Newton's laws derives terminal speeds from this balance, and measuring $v_t$ for small spheres of known radius is a standard way of determining the viscosity of a liquid.
:::
