---
titolo: "Fluid properties and fluid statics"
sommario: "Fluid properties, isotropy of pressure, the differential equation of hydrostatic equilibrium, and the hydrostatic pressure law. The chapter also covers the hydrostatic head plane, liquid-column manometers, and liquids at rest relative to moving containers."
---

## Fluid properties

A fluid has no fixed shape and continues to deform as long as a shear stress acts on it. This behavior distinguishes it from a solid. The following quantities characterize the fluid and occur throughout hydraulics.

:::definizione{#densita-e-peso-specifico titolo="Density and specific weight"}
Consider a homogeneous fluid of mass $m$ occupying a volume $V$. Its **density** is the ratio
$$
\rho = \frac{m}{V} ,
$$
measured in $\mathrm{kg/m^3}$, and its **specific weight** is its weight per unit volume,
$$
\gamma = \frac{m\,g}{V} = \rho\,g ,
$$
measured in $\mathrm{N/m^3}$ or $\mathrm{kN/m^3}$. The ratio of the fluid density to that of water is its *specific gravity*, $\delta$, a dimensionless number. For water at $20\,^\circ\mathrm{C}$ we use $\rho = 1000\,\mathrm{kg/m^3}$, which gives $\gamma = 9810\,\mathrm{N/m^3} = 9.81\,\mathrm{kN/m^3}$. For mercury, $\delta = 13.6$ gives $\gamma_{\mathrm{Hg}} = 13.6 \cdot 9.81 = 133.4\,\mathrm{kN/m^3}$. Specific weight enters the equations of fluid statics because the pressure at a point depends on the weight of liquid above it. An oil with $\delta = 0.88$ has $\gamma = 8.63\,\mathrm{kN/m^3}$ and therefore produces $88\%$ of the water pressure at the same depth.
:::

:::definizione{#comprimibilita titolo="Bulk modulus"}
Consider a volume $V$ of fluid that undergoes a volume change $\Delta V$ in response to an increase in pressure $\Delta p$. The pressure and volume changes have opposite signs, so a minus sign is included in the ratio:
$$
\varepsilon = -\frac{\Delta p}{\dfrac{\Delta V}{V}} ,
$$
where $\varepsilon$ is the **bulk modulus**, measured in $\mathrm{Pa}$. Laboratory measurements for water give $\varepsilon \simeq 2.1 \cdot 10^9\,\mathrm{Pa}$. A pressure increase of $1\,\mathrm{MPa}$, equivalent to a water column about $100\,\mathrm{m}$ high, reduces the volume by $0.048\%$. Water can therefore be treated as **incompressible**, with constant $\rho$, in hydrostatics and steady-flow problems. Compressibility matters when a calculation depends on the speed at which a pressure disturbance travels through the liquid,
$$
c = \sqrt{\frac{\varepsilon}{\rho}} = \sqrt{\frac{2.1 \cdot 10^9}{1000}} = 1449\,\mathrm{m/s} ,
$$
as in the analysis of water hammer in pipelines.
:::

:::esempio{titolo="Hydrostatic testing of a pipeline"}
A section of rigid pipe contains $0.50\,\mathrm{m^3}$ of water and is brought to a test pressure of $\Delta p = 20\,\mathrm{MPa}$. The fractional change in volume is
$$
\frac{\Delta V}{V} = -\frac{\Delta p}{\varepsilon} = -\frac{20 \cdot 10^6}{2.1 \cdot 10^9} = -9.52 \cdot 10^{-3} ,
$$
a decrease of $0.952\%$. Reaching the test pressure therefore requires adding
$$
0.00952 \cdot 500\,\mathrm{L} = 4.76\,\mathrm{L}
$$
of water to the pipe even though it is already full.
:::

## Viscosity

:::definizione{#viscosita titolo="Newton’s law of viscosity"}
Consider a fluid between two parallel plates a distance $s$ apart. The lower plate is stationary and the upper plate moves in its own plane at speed $V$. Laboratory measurements show that the fluid adheres to both plates, that the velocity varies linearly from $0$ to $V$, and that the tangential force required to maintain motion is proportional to $V$ and to the plate area $A$ and inversely proportional to $s$. The shear stress between adjacent fluid layers is therefore
$$
\tau = \mu\,\frac{dv}{dy} ,
$$
where $y$ is the distance from the stationary plate. This relation is called **Newton’s law of viscosity**. Fluids that satisfy it are *Newtonian*. Water and air are examples. The coefficient $\mu$ is the **dynamic viscosity**, measured in $\mathrm{Pa\,s}$, and the ratio
$$
\nu = \frac{\mu}{\rho}
$$
is the kinematic viscosity, measured in $\mathrm{m^2/s}$. For water at $20\,^\circ\mathrm{C}$, $\mu = 1.0 \cdot 10^{-3}\,\mathrm{Pa\,s}$ and $\nu = 10^{-6}\,\mathrm{m^2/s}$. Both values decrease as the temperature rises. Newton’s law gives the resisting force across thin fluid films, where the velocity gradient is large. Kinematic viscosity enters the Reynolds number, which distinguishes laminar from turbulent flow in fluid kinematics.

::schema{solidi="0,-0.35 6,-0.35 6,0 0,0;0,1.2 6,1.2 6,1.55 0,1.55" acqua="0,0 6,0 6,1.2 0,1.2" frecce="0.7,1.2,2.7,1.2,V;0.7,0.9,2.2,0.9;0.7,0.6,1.7,0.6;0.7,0.3,1.2,0.3" tratteggi="0.7,0 2.7,1.2" quote="0 0,0 1.2,s,-0.5" etichette="4.4,1.9,moving plate;4.4,-0.65,fixed plate;4.6,0.6,v(y)" riferimento=0 titolo="The velocity varies linearly between the two flat plates. The shear stress is $\tau = \mu\,\dfrac{V}{s}$ in every layer"}
:::

:::esempio{titolo="Force on a plate sliding over a thin oil film"}
A plate of area $A = 0.60\,\mathrm{m^2}$ slides at speed $V = 0.80\,\mathrm{m/s}$ over an oil film of thickness $s = 1.5\,\mathrm{mm}$ and viscosity $\mu = 0.20\,\mathrm{Pa\,s}$. The velocity gradient is constant and equal to $\dfrac{V}{s}$, so
$$
\tau = \mu\,\frac{V}{s} = 0.20 \cdot \frac{0.80}{0.0015} = 107\,\mathrm{Pa} ,
\qquad
F = \tau\,A = 106.7 \cdot 0.60 = 64.0\,\mathrm{N} .
$$
The same calculation gives the resisting torque in bearings and concentric-cylinder viscometers.
:::

:::osservazione{#fluido-perfetto titolo="Ideal fluids and fluids at rest"}
A fluid with $\mu = 0$ is called **ideal**. Its shear stress is zero under all conditions. In a real fluid at rest the velocity gradient vanishes, so Newton’s law gives zero shear stress everywhere. The results of fluid statics therefore apply equally to ideal and real fluids. Viscosity distinguishes the two in motion, where it produces the frictional and local head losses studied in the chapter on head loss.
:::

## Surface tension and capillarity

:::definizione{#tensione-superficiale titolo="Surface tension"}
At a liquid–gas interface the net attraction of neighboring molecules on a liquid molecule is directed inward. The interface therefore behaves like a membrane under tension. The force transmitted across a line on the interface, per unit length of that line, is the **surface tension**, $\sigma$, measured in $\mathrm{N/m}$. Measurements at the water–air interface at $20\,^\circ\mathrm{C}$ give $\sigma = 0.0728\,\mathrm{N/m}$. Surface tension matters on the millimeter scale, as in capillary tubes and droplets. In tanks and pipes, gravity and pressure forces are orders of magnitude larger.
:::

:::osservazione{#capillarita titolo="Capillary rise and Jurin’s law"}
Consider a glass tube of diameter $D$ immersed in water. Water wets glass, so the meniscus is concave. Surface tension acts around the contact circle at the contact angle $\theta$ to the vertical. Its vertical component is $\sigma\,\pi D \cos\theta$ and points upward. The liquid rises until the weight of the elevated column balances that component, giving
$$
\gamma\,\frac{\pi D^2}{4}\,h = \sigma\,\pi D \cos\theta ,
\qquad\text{which gives}\qquad
h = \frac{4\,\sigma\cos\theta}{\gamma\,D} .
$$
For water on clean glass we take $\theta = 0$. With $D = 1.2\,\mathrm{mm}$ the rise is $h = 24.7\,\mathrm{mm}$. With $D = 10\,\mathrm{mm}$ it falls to $3.0\,\mathrm{mm}$, which is why piezometers are made at least one centimeter in diameter. Mercury does not wet glass and has $\theta \simeq 130^\circ$, so $\cos\theta$ is negative and the liquid level in the tube falls.
:::

## Pressure in a fluid at rest

:::definizione{#pressione titolo="Pressure"}
Consider a fluid at rest and a surface element $\Delta A$ that either lies on a wall or is imagined inside the fluid. Let $\Delta \vec{F}$ be the force the fluid exerts on it. Shear stress vanishes at rest, so $\Delta \vec{F}$ is perpendicular to $\Delta A$ and points toward the surface. The **pressure** at the point is the limit
$$
p = \lim_{\Delta A \to 0} \frac{\Delta F}{\Delta A} ,
$$
measured in $\mathrm{Pa} = \mathrm{N/m^2}$. Practical units include $\mathrm{kPa}$ and $\mathrm{bar} = 10^5\,\mathrm{Pa}$. Pressure can also be expressed as the equivalent column height $\dfrac{p}{\gamma}$, in meters of water or millimeters of mercury. A one-meter water column corresponds to $9.81\,\mathrm{kPa}$.
:::

:::richiamo{titolo="Force and moment equilibrium"}
A body initially at rest, under external forces with resultant $\vec{R}$ and resultant moment $\vec{M}_O$ about point $O$, remains in equilibrium if and only if
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
See the chapter on equilibrium equations and support reactions in Statics.
:::

::::teorema{#isotropia-della-pressione titolo="Isotropy of pressure"}
Consider a fluid at rest. At any given point, pressure has the same value on surface elements of every orientation.

It follows that pressure is a scalar function of position, $p = p(x, y, z)$. The pressure on a wall of any inclination is the pressure calculated at that point. This result underlies the calculation of forces on plane and curved surfaces in the chapter on hydrostatic forces.

::schema{poligoni="0,0 2,0 0,1.5" forze="0 0.75,0.75,0,p_x;1 0,0,0.75,p_z;1 0.75,-0.55,-0.73,p_n" quote="0 0,2 0,dx,0.45;0 0,0 1.5,dz,-1.25" etichette="1.55,1.1,dl" riferimento=0 titolo="Pressure forces on the three faces of an elementary wedge of thickness $b$"}

:::dimostrazione
Write the equilibrium equations for a small fluid wedge and let its dimensions approach zero. The weight tends to zero faster than the pressure forces, so the three pressures must be equal in the limit.

Take a fluid wedge of thickness $b$ with its vertex at the point of interest. Its two legs are $dx$ and $dz$ and its hypotenuse has length $d\ell$. Let $p_x$ be the pressure on the face normal to axis $x$, of area $b\,dz$. Let $p_z$ be the pressure on the face normal to axis $z$, of area $b\,dx$, and $p_n$ the pressure on the inclined face of area $b\,d\ell$. The force on the inclined face is normal to that face and has magnitude $p_n\,b\,d\ell$. The areas of the two faces perpendicular to the axes are the projections of the inclined face. The force components are therefore $p_n\,b\,dz$ along $x$ and $p_n\,b\,dx$ along $z$, both directed into the wedge. The wedge weighs $\gamma\,b\,\dfrac{dx\,dz}{2}$ and its weight acts downward.

Force equilibrium along $x$ gives
$$
p_x\,b\,dz - p_n\,b\,dz = 0 ,
$$
hence $p_x = p_n$. Force equilibrium along $z$ gives
$$
p_z\,b\,dx - p_n\,b\,dx - \gamma\,b\,\frac{dx\,dz}{2} = 0 ,
$$
hence $p_z = p_n + \gamma\,\dfrac{dz}{2}$. As $dz$ approaches zero, the second term vanishes, leaving $p_z = p_n$. The face inclination was arbitrary, so the three pressures are equal for every orientation. Their common value is the pressure at the point.
:::
::::

## The hydrostatic equation and Stevin’s law

Isotropy gives a single pressure value at each point. It remains to determine how that value varies with position.

:::richiamo{titolo="Gradient of a function"}
Let $p(x, y, z)$ be a differentiable function on a connected open set. Its gradient is the vector
$$
\operatorname{grad} p = \left(\frac{\partial p}{\partial x},\; \frac{\partial p}{\partial y},\; \frac{\partial p}{\partial z}\right) ,
$$
and if the gradient vanishes everywhere, the function is constant. See the chapter on partial derivatives and differentiability in Mathematical Analysis 2.
:::

::::teorema{#equazione-indefinita titolo="Differential equation of hydrostatic equilibrium"}
Consider a fluid at rest of density $\rho$ under a body force $\vec{f}$ per unit mass. Then at every point in the fluid,
$$
\operatorname{grad} p = \rho\,\vec{f} .
$$
If gravity is the only body force and the vertical $z$ axis points upward, $\vec{f} = (0,\,0,\,-g)$, so
$$
\begin{cases}
\dfrac{\partial p}{\partial x} = 0 \\[6pt]
\dfrac{\partial p}{\partial y} = 0 \\[6pt]
\dfrac{\partial p}{\partial z} = -\gamma
\end{cases}
$$
Pressure increases in the direction of the body force, and surfaces of constant pressure are perpendicular to $\vec{f}$. The equation determines the pressure distribution in any fluid at rest, including a fluid in a moving container when inertial forces are added to gravity.

::schema{poligoni="0,0 1.2,0 1.2,1.2 0,1.2" forze="0.6 0,0,0.7,p;0.6 1.2,0,-0.7,p + dp" frecce="0.6,0.72,0.6,0.22,γ·dV" quote="0 0,1.2 0,dx,0.4;1.2 0,1.2 1.2,dz,0.4" riferimento=0 titolo="Vertical equilibrium of a fluid element. The pressure forces on its horizontal faces correspond to a pressure difference $dp = -\gamma\,dz$, and the element weighs $\gamma\,dx\,dy\,dz$"}

:::dimostrazione
Write the force balance for a small rectangular fluid element whose opposite faces are subject to infinitesimally different pressures.

Let the element have sides $dx$, $dy$, and $dz$ parallel to the coordinate axes. Let $p$ be the pressure at the center of the face normal to $x$ with the smaller coordinate. On the opposite face, a distance $dx$ away, the pressure is $p + \dfrac{\partial p}{\partial x}\,dx$ to first order. Both pressure forces point inward, so their sum in the $x$ direction is
$$
p\,dy\,dz - \left(p + \frac{\partial p}{\partial x}\,dx\right)dy\,dz = -\frac{\partial p}{\partial x}\,dx\,dy\,dz .
$$
The pressure forces on the other four faces are perpendicular to the $x$ axis and have no component along $x$. The element has mass $\rho\,dx\,dy\,dz$, so the $x$ component of the body force is $\rho\,f_x\,dx\,dy\,dz$. Force equilibrium along $x$ gives
$$
\left(-\frac{\partial p}{\partial x} + \rho\,f_x\right)dx\,dy\,dz = 0 ,
$$
The volume is nonzero, giving $\dfrac{\partial p}{\partial x} = \rho\,f_x$. Applying the same argument along $y$ and $z$ gives the other two components and hence $\operatorname{grad} p = \rho\,\vec{f}$.
:::
::::

::::teorema{#legge-di-stevin titolo="Hydrostatic pressure law"}
Consider an incompressible liquid of constant specific weight $\gamma$ at rest in a container under gravity. Let $z$ denote elevation above a horizontal datum, measured vertically upward. At every point in this body of liquid,
$$
z + \frac{p}{\gamma} = \text{constant} ,
$$
and at a point a depth $h$ below a free surface at zero pressure, the pressure is
$$
p = \gamma\,h .
$$
The **hydrostatic pressure law** reduces the pressure calculation to a difference in elevation, since the constant can be evaluated at any point where the pressure is known. In an open tank containing water to a depth of $3.00\,\mathrm{m}$, the bottom pressure is $9.81 \cdot 3.00 = 29.4\,\mathrm{kPa}$ whatever the shape of the tank.

:::dimostrazione
With gravity as the only body force, the differential equation gives $\dfrac{\partial p}{\partial x} = \dfrac{\partial p}{\partial y} = 0$. Pressure therefore depends only on $z$ and satisfies
$$
\frac{dp}{dz} = -\gamma .
$$
Since $\gamma$ is constant, integration gives $p = -\gamma\,z + C$ with constant $C$, or
$$
z + \frac{p}{\gamma} = \frac{C}{\gamma} ,
$$
which has the same value throughout the liquid. Now let $z_0$ be the elevation of the free surface, where $p = 0$. Substitution gives $C = \gamma\,z_0$, so at a point of elevation $z$,
$$
p = \gamma\,(z_0 - z) = \gamma\,h ,
$$
where $h = z_0 - z$ is the depth below the free surface.
:::
::::

:::definizione{#carico-piezometrico titolo="Piezometric head"}
The sum
$$
h = z + \frac{p}{\gamma}
$$
is the **piezometric head** at the point. The first term is the elevation above the horizontal datum specified in the problem. The second is the pressure head, the height of liquid column that produces the pressure $p$. Both are lengths, so piezometric head is measured in meters. Under the hydrostatic pressure law the piezometric head is the same throughout a body of liquid at rest. Given the head and the elevation of a point, its pressure follows from $p = \gamma\,(h - z)$. In a moving liquid, piezometric head varies between cross sections. Its variation provides a measure of head loss, as discussed in the chapter on Bernoulli’s equation.
:::

:::osservazione{#trasmissione-della-pressione titolo="Transmission of pressure"}
If a pressure $p_0$ acts on the free surface of a liquid at rest, the hydrostatic pressure law gives $p = p_0 + \gamma\,h$ at every point at depth $h$. An increase in $p_0$ therefore produces the same pressure increase throughout the liquid. This is **Pascal’s principle**, the basis of the hydraulic press discussed in the Physics 1 chapter on fluids.
:::

:::attenzione
Piezometric head is constant throughout *a single* continuous, homogeneous body of liquid. If a closed gate valve separates two reservoirs connected by a pipe, they contain separate bodies of liquid, so their piezometric heads generally differ. If the upstream free surface is at elevation $120.00\,\mathrm{m}$ and the downstream free surface is at $94.00\,\mathrm{m}$, their heads are $120.00\,\mathrm{m}$ and $94.00\,\mathrm{m}$. At the gate valve at elevation $90.00\,\mathrm{m}$ the pressure is therefore $9.81 \cdot 30 = 294\,\mathrm{kPa}$ on the upstream face and $9.81 \cdot 4 = 39.2\,\mathrm{kPa}$ on the downstream face.
:::

## Hydrostatic head plane

:::definizione{#piano-dei-carichi-idrostatici titolo="Hydrostatic head plane"}
Let $h$ be the piezometric head of a body of liquid at rest. The horizontal plane at elevation $z = h$ is called the **hydrostatic head plane**. The gauge pressure is zero on this plane. The hydrostatic pressure law gives the pressure at a point of elevation $z$ as
$$
p = \gamma\,(h - z) ,
$$
Gauge pressure is therefore positive below the head plane, zero on it, and negative above it. Its magnitude equals $\gamma$ times the vertical distance from the plane. The head plane coincides with the free surface when that surface is exposed to the atmosphere. In a closed tank where the gas above the liquid has gauge pressure $p_0$, the plane lies $\dfrac{p_0}{\gamma}$ above the free surface. It lies below the surface when $p_0$ is negative. A single elevation thus describes the pressure field throughout the liquid. This is why the head plane is drawn first in hydrostatics problems.
:::

:::esempio{titolo="Closed pressurized tank"}
A closed tank contains water to a depth of $3.20\,\mathrm{m}$, with air at gauge pressure $p_0 = 25\,\mathrm{kPa}$ above it. The pressure head corresponding to the air pressure is
$$
\frac{p_0}{\gamma} = \frac{25}{9.81} = 2.55\,\mathrm{m} ,
$$
so the hydrostatic head plane lies $2.55\,\mathrm{m}$ above the free surface. The bottom pressure is the product of $\gamma$ and the vertical distance from the bottom to this plane:
$$
p = 9.81 \cdot (3.20 + 2.55) = 56.4\,\mathrm{kPa} .
$$
Adding the air pressure to the contribution from the water column gives the same result, $25 + 9.81 \cdot 3.20 = 56.4\,\mathrm{kPa}$.

::schema{acqua="0,0 5,0 5,3.2 0,3.2" solidi="-0.35,-0.35 5.35,-0.35 5.35,0 -0.35,0;-0.35,0 0,0 0,4 -0.35,4;5,0 5.35,0 5.35,4 5,4;-0.35,4 5.35,4 5.35,4.35 -0.35,4.35" pelo="0,5,3.2" pressioni="0 0,0 3.2,1.9,0.84,γ·(h−z)" tratteggi="-1.2,5.75 6.2,5.75" etichette="2.5,3.7,air  p_0 = 25 kPa;4.4,6.05,hydrostatic head plane" quote="5.35 3.2,5.35 5.75,2.55 m,0.75;0 3.2,0 0,3.20 m,-1.1" riferimento=0 titolo="In the closed tank the hydrostatic head plane lies $2.55\,\mathrm{m}$ above the free surface, and the pressure on the wall varies linearly with depth"}
:::

:::osservazione{#diagramma-delle-pressioni titolo="Pressure diagram"}
Pressure on a vertical plane wall varies linearly with elevation. Its diagram is therefore a trapezoid, or a triangle when the wall extends to the head plane. Draw the line segments perpendicular to the wall with lengths proportional to $p$. In the chapter on hydrostatic forces, this diagram gives both the resultant force on the wall and the location of the center of pressure.
:::

## Absolute and gauge pressures

:::definizione{#pressioni-assolute-e-relative titolo="Absolute pressure and gauge pressure"}
Pressure measured relative to a vacuum is **absolute** pressure. Pressure measured relative to atmospheric pressure is **gauge** pressure, so
$$
p_{\mathrm{rel}} = p_{\mathrm{abs}} - p_{\mathrm{atm}} .
$$
At sea level we take $p_{\mathrm{atm}} = 101.3\,\mathrm{kPa}$, equivalent to a water column of $10.33\,\mathrm{m}$ or a mercury column of about $760\,\mathrm{mm}$. Gauge pressures are used in hydraulics because atmospheric pressure also acts on the outside of walls and containers. Its contribution therefore cancels in the resultant force. Absolute pressure is required wherever the actual pressure matters, as in checking for cavitation or calculating pump suction lift.
:::

:::osservazione{#limite-di-depressione titolo="Negative gauge pressure"}
Negative gauge pressure means that the absolute pressure is below atmospheric pressure. It occurs above the hydrostatic head plane. The lower limit on the absolute pressure of a liquid is its vapor pressure. For water at $20\,^\circ\mathrm{C}$ this is $p_v = 2.34\,\mathrm{kPa}$ absolute. The lowest permissible gauge pressure is therefore
$$
2.34 - 101.3 = -98.96\,\mathrm{kPa} ,
\qquad\text{i.e.}\qquad
-\frac{98.96}{9.81} = -10.09\,\mathrm{m}
$$
of water head. Suction can therefore lift a water column only about ten meters at most. Pipelines are designed to operate well below this suction limit. As the pressure approaches the vapor pressure, vapor bubbles form and the flow cavitates, as discussed in the chapters on Bernoulli’s equation and long pipelines.
:::

## Pressure measurement

:::osservazione{#piezometro titolo="Piezometer"}
A piezometer is a glass tube open to the atmosphere and connected to the wall of a tank or pipe. The liquid rises to the hydrostatic head plane because the gauge pressure at the meniscus is zero. The reading thus gives the piezometric head at the pressure tap directly, and the pressure follows from $p = \gamma\,(h - z)$. Piezometers are suitable for modest pressures, since a pressure of just $100\,\mathrm{kPa}$ already requires a water column $10.2\,\mathrm{m}$ high.
:::

:::osservazione{#manometro-semplice titolo="Simple liquid-column manometer"}
For higher pressures, a U-tube is connected to the tap and filled with a denser manometer liquid, usually mercury. The other limb is open to the atmosphere. Trace a path from one meniscus to the other using two rules. Within a given liquid at rest, pressure increases by $\gamma\,\Delta z$ when descending a distance $\Delta z$ and decreases by $\gamma\,\Delta z$ when ascending. Pressure is continuous across the interface because the two liquids are in contact. Let $A$ denote the tap, $z_1$ the elevation of the interface, and $z_2$ the elevation of the free mercury surface in the open limb. This gives
$$
p_A + \gamma\,(z_A - z_1) = \gamma_{\mathrm{Hg}}\,(z_2 - z_1) .
$$
Since $\gamma_{\mathrm{Hg}}$ is $13.6$ times $\gamma$, a mercury level difference of $0.50\,\mathrm{m}$ corresponds to a water column of $6.80\,\mathrm{m}$. The instrument can therefore remain compact.

::schema{nodi="A,0.6,0,-;B,5,0,-" condotte="A-B,0.5" acqua="1.4,0 1.6,0 1.6,3.4 1.4,3.4;4.4,0 4.6,0 4.6,-0.8 4.4,-0.8" poligoni="4.4,-0.8 4.4,-1.2 5.6,-1.2 5.6,0.5 5.4,0.5 5.4,-1.0 4.6,-1.0 4.6,-0.8" pelo="1.4,1.6,3.4;5.4,5.6,0.5" etichette="2.6,0.6,pipe;0.95,2.9,piezometer;5.0,-1.75,mercury" quote="1.5 0,1.5 3.4,3.40 m,-0.7;5.6 -0.8,5.6 0.5,z_2 − z_1,0.8" riferimento=0 titolo="A piezometer and a simple mercury manometer connected to the same pipe"}
:::

::::teorema{#manometro-differenziale titolo="Differential manometer"}
Let $A$ and $B$ be points in a liquid of specific weight $\gamma$, connected to the two limbs of a U-tube containing a manometer liquid of specific gravity $\delta$. Let $z_1$ be the elevation of the meniscus on the $A$ side and $z_2$ that on the $B$ side, and set $\Delta = z_2 - z_1$. The difference in piezometric head between the two points is then
$$
h_A - h_B = \Delta\,(\delta - 1) .
$$
The result does not depend on the elevations of $A$ and $B$. A differential manometer therefore measures piezometric head differences even between points at different elevations and can measure head losses between two pipe sections. For mercury, $\delta = 13.6$, a level difference of $1\,\mathrm{cm}$ corresponds to a head difference of $12.6\,\mathrm{cm}$. If an inverted U-tube above the two taps contains a liquid lighter than water, $\delta < 1$ and the head difference has the opposite sign to $\Delta$.

::schema{nodi="A,0,2.2,-;B,6,2.2,-" condotte="A-B,0.45" acqua="0.9,2.2 1.1,2.2 1.1,0.9 0.9,0.9;4.9,2.2 5.1,2.2 5.1,1.3 4.9,1.3" poligoni="0.9,0.9 0.9,0.4 5.1,0.4 5.1,1.3 4.9,1.3 4.9,0.6 1.1,0.6 1.1,0.9" tratteggi="1.1,0.9 2.7,0.9;4.9,1.3 2.3,1.3" punti="1,2.2,A;5,2.2,B" etichette="3.0,0.05,manometer fluid δ;0.45,1.55,water;5.55,1.55,water" quote="2.5 0.9,2.5 1.3,Δ,0.4" riferimento=0 titolo="Differential manometer connecting points $A$ and $B$. The difference $\Delta$ in meniscus levels gives $h_A - h_B = \Delta\,(\delta - 1)$"}

:::dimostrazione
Trace a path from $A$ to $B$, applying the hydrostatic pressure law to each of the three segments.

For the water column descending from $A$ to the first meniscus, the hydrostatic pressure law gives
$$
p_1 = p_A + \gamma\,(z_A - z_1) .
$$
In the manometer liquid of specific weight $\delta\gamma$, moving from the first meniscus to the second gives
$$
p_2 = p_1 + \delta\gamma\,(z_1 - z_2) .
$$
For the water column rising from the second meniscus to $B$, we obtain
$$
p_B = p_2 + \gamma\,(z_2 - z_B) .
$$
Substituting the first two relations into the third and dividing by $\gamma$ gives
$$
\frac{p_B}{\gamma} = \frac{p_A}{\gamma} + z_A - z_1 + \delta\,(z_1 - z_2) + z_2 - z_B ,
$$
therefore
$$
h_A - h_B = \left(z_A + \frac{p_A}{\gamma}\right) - \left(z_B + \frac{p_B}{\gamma}\right) = (z_2 - z_1)\,(\delta - 1) = \Delta\,(\delta - 1) .
$$
The elevations $z_A$ and $z_B$ cancel, leaving only the difference in meniscus elevations.
:::
::::

:::osservazione{#manometro-metallico titolo="Bourdon pressure gauge"}
A Bourdon pressure gauge measures the deformation of a coiled metal tube of elliptical cross section. Internal pressure tends to straighten the tube. Its free end moves a pointer along a graduated scale. The gauge is calibrated in the laboratory against a liquid-column manometer. It reads gauge pressure at its installation point, so the reading must be adjusted to the point of interest by adding the elevation correction $\gamma\,\Delta z$.
:::

:::osservazione{#barometro titolo="Torricelli’s barometer"}
If a tube closed at one end is filled with mercury and inverted in a basin, the mercury falls until it reaches equilibrium. The closed space above the meniscus contains only mercury vapor at negligible pressure. The free surface in the basin is at atmospheric pressure. Applying the hydrostatic pressure law to the mercury gives
$$
p_{\mathrm{atm}} = \gamma_{\mathrm{Hg}}\,h = 133.4 \cdot 0.760 = 101.4\,\mathrm{kPa} ,
$$
where $h$ is the difference in elevation between the meniscus in the tube and the free surface in the basin. This instrument is the origin of the practice of expressing $p_{\mathrm{atm}}$ in millimeters of mercury.
:::

## Layers of immiscible liquids

:::osservazione{#fluidi-sovrapposti titolo="Layers of immiscible liquids"}
Two immiscible liquids at rest settle with the denser one below. Their interface is horizontal because it is a surface of constant pressure, and such surfaces are horizontal in a liquid at rest under gravity. Apply the hydrostatic pressure law separately to each liquid using its own specific weight. Both calculations give the same pressure at the interface. For an upper layer of thickness $s_1$ and specific weight $\gamma_1$ above a liquid of specific weight $\gamma_2$, the pressure a depth $h_2$ below the interface is
$$
p = \gamma_1\,s_1 + \gamma_2\,h_2 .
$$
Each liquid has its own hydrostatic head plane. The plane for the lower liquid lies $\dfrac{\gamma_1 s_1}{\gamma_2}$ above the interface, below the free surface if the upper liquid is lighter. The quantity $\dfrac{\gamma_1 s_1}{\gamma_2}$ is the *equivalent height*, the depth of the lower liquid that would produce the same pressure as the upper layer.
:::

:::esempio{titolo="Oil above water in an open tank"}
An open tank contains oil of specific gravity $0.82$ and thickness $1.80\,\mathrm{m}$ above a layer of water of depth $2.50\,\mathrm{m}$. The pressure at the interface is
$$
p_i = 0.82 \cdot 9.81 \cdot 1.80 = 14.5\,\mathrm{kPa} ,
$$
and at the bottom it is
$$
p_f = 14.5 + 9.81 \cdot 2.50 = 39.0\,\mathrm{kPa} .
$$
The oil layer is equivalent to $0.82 \cdot 1.80 = 1.476\,\mathrm{m}$ of water. The hydrostatic head plane for the water therefore lies $2.50 + 1.476 = 3.976\,\mathrm{m}$ above the bottom, or $0.32\,\mathrm{m}$ below the oil surface. Water in a piezometer connected at the bottom rises to this elevation.

::schema{acqua="0,0 4,0 4,2.5 0,2.5" poligoni="0,2.5 4,2.5 4,4.3 0,4.3" solidi="-0.35,-0.35 4.35,-0.35 4.35,0 -0.35,0;-0.35,0 0,0 0,4.6 -0.35,4.6;4,0 4.35,0 4.35,4.6 4,4.6" linee="0,2.5 4,2.5" pelo="0,4,4.3" tratteggi="-0.9,3.976 4.9,3.976" etichette="2.0,3.4,oil δ = 0.82;2.0,1.25,water;2.6,4.85,hydrostatic head plane for water" quote="0 4.3,0 2.5,1.80 m,-0.8;0 2.5,0 0,2.50 m,-0.8" riferimento=0 titolo="Oil above water. The hydrostatic head plane for the water lies below the free surface of the oil"}
:::

## Liquids in rigid-body motion

A liquid can be at rest relative to its container even when the container is moving. Inertial forces then act in addition to gravity, and the differential equation of hydrostatics applies without modification.

::::teorema{#traslazione-rigida titolo="Liquid in rigid-body translation"}
Consider a container translating with constant horizontal acceleration $\vec{a} = (a,\,0,\,0)$ and holding a liquid at rest relative to it. The surfaces of constant pressure are parallel planes inclined at an angle
$$
\tan\theta = \frac{a}{g}
$$
to the horizontal. The level is lower in the direction of acceleration, and the pressure is
$$
p = p_0 - \rho\,a\,(x - x_0) - \gamma\,(z - z_0) ,
$$
where $p_0$ is the pressure at point $(x_0,\,z_0)$. The free surface is one of these planes. In an accelerating tanker truck it falls toward the front and rises toward the rear, with a level difference equal to $\tan\theta$ times the tank length.

::schema{acqua="0,0 4,0 4,0.8 0,1.6" solidi="-0.3,-0.3 4.3,-0.3 4.3,0 -0.3,0;-0.3,0 0,0 0,2 -0.3,2;4,0 4.3,0 4.3,2 4,2" linee="0,1.6 4,0.8" tratteggi="0,1.2 4,1.2" frecce="1.2,2.5,2.6,2.5,a" etichette="3.2,1.03,θ;1.6,1.65,free surface" quote="4 0.8,4 1.6,Δz,0.95" riferimento=0 titolo="Tank in rigid-body translation. The free surface is a plane with slope $\tan\theta = \dfrac{a}{g}$, and the dashed line marks the level at rest"}

:::dimostrazione
Write the equilibrium equations in the frame attached to the container, where the liquid is at rest and the inertial force must be included among the body forces.

For an observer moving with the container, the liquid is at rest. The body force per unit mass is the sum of the gravitational and inertial contributions, namely $\vec{f} = (-a,\,0,\,-g)$. The hydrostatic equation then gives
$$
\begin{cases}
\dfrac{\partial p}{\partial x} = -\rho\,a \\[6pt]
\dfrac{\partial p}{\partial z} = -\rho\,g
\end{cases}
$$
The two derivatives are constant, so integration gives
$$
p = p_0 - \rho\,a\,(x - x_0) - \rho\,g\,(z - z_0) .
$$
On a surface of constant pressure $dp = 0$, so $a\,dx + g\,dz = 0$, or
$$
\frac{dz}{dx} = -\frac{a}{g} .
$$
This ratio is constant. The constant-pressure surfaces are therefore planes with slope of magnitude $\dfrac{a}{g}$. The minus sign means that elevation decreases as $x$ increases, that is, in the direction of acceleration.
:::
::::

:::osservazione{#rotazione-rigida titolo="Liquid in rigid-body rotation"}
Consider a vertical cylindrical container of radius $R$ rotating at constant angular speed $\omega$, with the liquid in rigid-body rotation. In the rotating frame the inertial force per unit mass is $\omega^2 r$, directed outward. The hydrostatic equation then gives $\dfrac{\partial p}{\partial r} = \rho\,\omega^2 r$ and $\dfrac{\partial p}{\partial z} = -\gamma$, which integrate to
$$
p = p_0 + \rho\,\frac{\omega^2 r^2}{2} - \gamma\,(z - z_0) .
$$
The surfaces of constant pressure are therefore paraboloids of revolution,
$$
z = z_v + \frac{\omega^2 r^2}{2 g} ,
$$
where $z_v$ is the elevation of the vertex on the axis. The free surface is one such paraboloid, so the level at the rim exceeds that on the axis by $\dfrac{\omega^2 R^2}{2 g}$. The volume of liquid is unchanged, and the mean value of $r^2$ over a disk of radius $R$ is
$$
\frac{1}{\pi R^2}\int_0^R r^2\,2\pi r\,dr = \frac{R^2}{2} ,
$$
Thus the mean free-surface elevation equals the level at rest. The vertex falls by $\dfrac{\omega^2 R^2}{4 g}$ below the level at rest, and the rim rises by the same amount.

::schema{acqua="-1,0 1,0 1,0.8 0.8,0.62 0.6,0.48 0.4,0.38 0.2,0.32 0,0.3 -0.2,0.32 -0.4,0.38 -0.6,0.48 -0.8,0.62 -1,0.8" solidi="-1.12,-0.12 1.12,-0.12 1.12,0 -1.12,0;-1.12,0 -1,0 -1,1.05 -1.12,1.05;1,0 1.12,0 1.12,1.05 1,1.05" tratteggi="-1.3,0.55 1.3,0.55" frecce="0,1.75,0.55,1.75,ω" etichette="0,1.3,still-water level" quote="1.3 0.3,1.3 0.8,Δz,0.3" riferimento=0 titolo="In rigid-body rotation the free surface is a paraboloid. The edge rises by $\dfrac{\omega^2 R^2}{4g}$, and the vertex falls by the same amount"}
:::
