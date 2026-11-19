---
titolo: "Fluid kinematics, flow rate, and the continuity equation"
sommario: "Velocity fields, streamlines and streamtubes, flow rate and mean velocity, and the continuity equation for a streamtube or junction. The chapter also covers correction factors, the Reynolds number, and the local form of the continuity equation."
---

## The velocity field

In fluid statics the liquid is at rest and pressure depends only on elevation. In a moving fluid, velocity varies from point to point and generally also with time. Kinematics describes this variation without introducing the forces that produce it.

:::definizione{#campo-di-velocita titolo="Velocity field"}
Consider a fluid moving through a region of space. The **velocity field** assigns to each point $P = (x, y, z)$ in the region and each instant $t$ the velocity of the fluid particle occupying that point at that instant:
$$
\vec{v}(x, y, z, t) = v_x\,\hat{i} + v_y\,\hat{j} + v_z\,\hat{k} .
$$
This description is **Eulerian** because it fixes points in space and observes the fluid as it passes through them. The *Lagrangian* description follows individual particles over time. Hydraulics uses the first description because the quantities measured or specified in design, such as discharge, pressure, and head, refer to fixed sections of a pipe or channel. In a straight pipe carrying a constant discharge, the velocity at a fixed point does not change with time and depends only on that point’s distance from the axis.
:::

:::definizione{#traiettoria-e-linea-di-corrente titolo="Pathlines and streamlines"}
The **pathline** of a particle is the curve it traces over time, given by the solution of the initial-value problem
$$
\frac{d\vec{x}}{dt} = \vec{v}(\vec{x}, t), \qquad \vec{x}(t_0) = \vec{x}_0 .
$$
The **streamline** at time $t$, in contrast, is a curve tangent everywhere to the velocity at that instant. For plane flow the tangency condition is
$$
\frac{dx}{v_x} = \frac{dy}{v_y} ,
$$
or $\dfrac{dy}{dx} = \dfrac{v_y}{v_x}$, a first-order differential equation for $y(x)$ with $t$ held fixed as a parameter. A pathline follows one particle over a time interval. A streamline describes the field at a single instant. Streamlines can be visualized by seeding the fluid with floating particles and photographing them with a short exposure. Each particle leaves a short streak in its velocity direction. Dye injected at a fixed point traces the same curve only when the flow is steady.
:::

:::esempio{titolo="Streamlines of a specified velocity field"}
Consider the plane velocity field $\vec{v} = (k\,x,\,-k\,y)$ with $k = 0.5\,\mathrm{s^{-1}}$ and coordinates in meters. The streamlines satisfy
$$
\frac{dy}{dx} = \frac{-k\,y}{k\,x} = -\frac{y}{x} ,
$$
which is separable. Thus $\dfrac{dy}{y} = -\dfrac{dx}{x}$, and integration gives $\ln|y| = -\ln|x| + c$. The streamlines are therefore the hyperbolas $x\,y = \mathrm{constant}$. At $(2;\,1)$ the velocity components are $1.00\,\mathrm{m/s}$ and $-0.50\,\mathrm{m/s}$, giving magnitude $1.12\,\mathrm{m/s}$. The streamline through that point is $x\,y = 2$.
:::

## Steady, unsteady, and uniform flow

The following two classifications distinguish variation with time from variation along the flow. Both are used throughout the subsequent topics.

:::definizione{#moto-permanente titolo="Steady and unsteady flow"}
Flow is **steady**, or stationary, if velocity and pressure at each fixed point are independent of time:
$$
\frac{\partial \vec{v}}{\partial t} = \vec{0} .
$$
Otherwise the flow is **unsteady**. In steady flow a particle can change velocity as it moves because velocity depends on position. Measurements at a fixed cross section remain constant over time. Flow in a pipe supplied by a constant-head reservoir is steady. A draining tank, the operation of a gate valve, and a passing flood wave are examples of unsteady flow. Most pipe and channel calculations assume steady flow. This assumption must therefore be stated for each problem.
:::

:::osservazione{#traiettorie-nel-permanente titolo="Pathlines and streamlines in steady flow"}
In steady flow the field $\vec{v}$ is independent of $t$, so its streamlines are the same at every instant. A particle initially on a streamline has a velocity tangent to the line. Its velocity stays tangent as it moves, so the pathline follows the streamline. In unsteady flow the two families of curves generally differ because the streamline changes shape while the particle moves.
:::

:::definizione{#moto-uniforme titolo="Uniform and nonuniform flow"}
Choose a coordinate $s$ along the flow. The flow is **uniform** if velocity does not vary with $s$:
$$
\frac{\partial \vec{v}}{\partial s} = \vec{0} ,
$$
that is, if all cross sections have the same shape, area, and velocity distribution. Otherwise the flow is **nonuniform**. In a constant-diameter cylindrical pipe far from the entrance and bends, steady flow is also uniform and the streamlines are straight and parallel to the axis. In a channel with constant cross section and slope, uniform flow has constant depth along the channel, as discussed in the chapter on open-channel flow.
:::

## Streamtubes and one-dimensional flow

:::definizione{#tubo-di-flusso titolo="Streamtube"}
Let $\ell$ be a closed curve in the fluid transverse to the streamlines. The streamlines passing through the points of $\ell$ form a surface called the **lateral surface**. The fluid region it encloses is a **streamtube**. Velocity is tangent everywhere to the lateral surface. Its normal component is zero, so no fluid crosses the surface. A streamtube thus behaves like a duct with impermeable walls. All fluid entering one end leaves through the other. This property is used to derive the continuity equation. A pressurized pipe is a streamtube whose lateral surface is the pipe wall.

::schema{acqua="0,0.5 2,0.7 4,1.1 6,1.5 6,3.1 4,2.9 2,2.6 0,2.4" tratteggi="0,0.5 0,2.4;6,1.5 6,3.1" linee="0,1.1 2,1.3 4,1.7 6,2.1;0,1.8 2,2.0 4,2.3 6,2.6" frecce="0.2,1.2,1.4,1.3,v_1;5.0,2.4,6.3,2.5,v_2" etichette="-0.7,1.45,A_1;6.8,1.25,A_2" riferimento=0 titolo="Streamtube between cross sections of areas $A_1$ and $A_2$. No fluid crosses the lateral surface formed by streamlines"}
:::

:::definizione{#corrente-lineare titolo="One-dimensional flow and its cross section"}
Flow is called **one-dimensional**, or gradually varied, when the streamlines are straight and parallel or diverge only slightly and have a large radius of curvature. A plane surface perpendicular to the streamlines is called a **cross section**. In a circular pipe it is a circle of diameter $D$. In a channel it is the wetted cross section. In one-dimensional flow acceleration normal to the streamlines is negligible. Pressure across a section therefore varies hydrostatically with elevation, just as it does in a fluid at rest. Consequently the piezometric head $h = z + \dfrac{p}{\gamma}$ is constant across the section and Bernoulli’s equation can be applied to the flow, as discussed in the corresponding chapter. Where the streamlines curve sharply, as in an elbow or just downstream of an orifice, the flow is not one-dimensional and the pressure distribution across the section is not hydrostatic.

::schema{nodi="A,0,0,-;B,7,0,-" condotte="A-B,1.0" tratteggi="3.5,-0.5 3.5,0.5" frecce="1.0,0,2.2,0,v" etichette="3.5,0.82,A" riferimento=0 titolo="One-dimensional flow in a cylindrical pipe. The cross section of area $A$ is perpendicular to the streamlines"}
:::

## Flow rate and mean velocity

:::richiamo{titolo="Flux of a vector field through a surface"}
Let $A$ be a smooth surface oriented by the unit normal $\hat{n}$, and let $\vec{v}$ be a vector field continuous on $A$. The flux of $\vec{v}$ through $A$ is
$$
\Phi = \int_A \vec{v} \cdot \hat{n}\,dA .
$$
See the Mathematical Analysis 2 chapter on surfaces, flux, and the Gauss and Stokes theorems.
:::

:::definizione{#portata titolo="Volumetric flow rate"}
Let $A$ be a surface crossed by the fluid. Let $\hat{n}$ be the unit normal to $A$ pointing in the direction of flow. The volumetric **discharge** is the fluid volume crossing $A$ per unit time, or equivalently the flux of velocity through $A$:
$$
Q = \int_A \vec{v} \cdot \hat{n}\,dA ,
$$
measured in $\mathrm{m^3/s}$. Small flow rates are expressed in liters per second, with $1\,\mathrm{L/s} = 10^{-3}\,\mathrm{m^3/s}$. If $A$ is a cross section of a one-dimensional flow, velocity is normal to it at every point, so $\vec{v} \cdot \hat{n} = v$ and
$$
Q = \int_A v\,dA .
$$
The product $v\,dA$ is the volume crossing element $dA$ in one second. Particles starting at $dA$ travel a distance $v$ in that time, sweeping out a cylinder with base $dA$ and height $v$. Discharge is a design quantity for hydraulic works because it determines the required sizes of pipes and channels.
:::

:::definizione{#portata-massica titolo="Mass flow rate"}
The **mass flow rate** is the fluid mass crossing the surface $A$ per unit time:
$$
Q_m = \int_A \rho\,\vec{v} \cdot \hat{n}\,dA ,
$$
measured in $\mathrm{kg/s}$. If density is uniform over the section, $Q_m = \rho\,Q$. For water with $\rho = 1000\,\mathrm{kg/m^3}$, a discharge of $45\,\mathrm{L/s}$ corresponds to a mass flow rate of $45\,\mathrm{kg/s}$. Mass flow rate enters the mass balance for compressible fluids and the calculation of forces exerted by flowing fluids on walls in the chapter on the integral momentum equation.
:::

:::definizione{#velocita-media titolo="Mean velocity"}
At a section of area $A$, the **mean velocity** is the ratio
$$
v = \frac{Q}{A} = \frac{1}{A}\int_A v\,dA .
$$
It is the uniform velocity that would give the same discharge over the entire section. In pipe and channel calculations $v$ always denotes this mean velocity. When both velocities occur together, $u$ denotes the point velocity. Given the discharge, $Q = A\,v$ gives the velocity, or the area needed to carry that discharge at a specified velocity. For $Q = 120\,\mathrm{L/s}$ at a velocity of $1.50\,\mathrm{m/s}$ the area must be $A = 0.0800\,\mathrm{m^2}$, requiring a diameter of at least $0.319\,\mathrm{m}$.
:::

:::attenzione
The relation $Q = A\,v$ holds for a section normal to the streamlines. The same discharge passes through an oblique section because the fluid entering the normal section leaves through the oblique one. Multiplying the larger oblique area by the velocity magnitude, however, overestimates the discharge. In a pipe of diameter $200\,\mathrm{mm}$ with mean velocity $1.43\,\mathrm{m/s}$, the discharge is $0.0450\,\mathrm{m^3/s}$. A section inclined at $30^\circ$ to the normal section has area $\dfrac{0.0314}{\cos 30^\circ} = 0.0363\,\mathrm{m^2}$, and multiplying that area by the velocity gives $0.0519\,\mathrm{m^3/s}$. The flux through the section is still $0.0450\,\mathrm{m^3/s}$ because the velocity makes an angle $30^\circ$ with its normal and the dot product introduces the factor $\cos 30^\circ$.

::schema{nodi="A,0,0,-;B,7,0,-" condotte="A-B,1.0" tratteggi="2.6,-0.5 2.6,0.5;5.18,-0.5 4.6,0.5" frecce="1.0,0,2.0,0,v" etichette="2.6,0.82,A;5.0,0.82,A′" riferimento=0 titolo="The same flow rate passes through the normal section of area $A$ and the oblique section of area $A'$"}
:::

## The continuity equation

::::teorema{#equazione-di-continuita titolo="Continuity equation for a streamtube"}
Consider steady flow of an incompressible fluid in a streamtube. Let $A_1$ and $A_2$ be the areas of two cross sections with mean velocities $v_1$ and $v_2$. The discharges at the two sections are equal:
$$
Q = A_1 v_1 = A_2 v_2 .
$$
The mean velocities are therefore inversely proportional to the areas. Velocity increases in a contraction and decreases in an expansion. For a circular pipe with $A = \dfrac{\pi D^2}{4}$,
$$
\frac{v_2}{v_1} = \frac{A_1}{A_2} = \left(\frac{D_1}{D_2}\right)^{\!2} ,
$$
so halving the diameter quadruples the mean velocity. For a pipe of diameter $300\,\mathrm{mm}$ with mean velocity $0.700\,\mathrm{m/s}$, discharge is $0.0495\,\mathrm{m^3/s}$. In the section with diameter $150\,\mathrm{mm}$ the mean velocity becomes $2.80\,\mathrm{m/s}$.

:::dimostrazione
Compare the volumes entering and leaving the region between the two cross sections during $dt$. The volume of that region is constant.

Take as control volume the region $V$ bounded by the streamtube’s lateral surface and its two end sections. During $dt$ the volume crossing section $1$ is $A_1 v_1\,dt$ because the particles on that section travel a distance $v_1\,dt$. Similarly, the volume leaving section $2$ is $A_2 v_2\,dt$. No fluid crosses the lateral surface, since velocity is tangent to it at every point.

The fluid is incompressible, so density is constant and the mass in $V$ is proportional to the fluid volume in $V$. This volume is that of $V$ itself and is fixed in time. The flow is steady, so the mass in $V$ is independent of time. The volumes entering and leaving during the same interval $dt$ are therefore equal:
$$
A_1 v_1\,dt = A_2 v_2\,dt ,
$$
Dividing by $dt$ gives $A_1 v_1 = A_2 v_2$. The two cross sections were arbitrary, so discharge is the same at every section of the streamtube.
:::
::::

:::esempio{titolo="Flow through a pipe contraction"}
A pipe carrying $Q = 80\,\mathrm{L/s}$ has diameter $300\,\mathrm{mm}$ and terminates in a nozzle from which water exits at speed $8.00\,\mathrm{m/s}$. The mean velocity in the pipe is
$$
v_1 = \frac{Q}{A_1} = \frac{0.0800}{0.0707}\,\mathrm{m/s} = 1.13\,\mathrm{m/s} ,
$$
whereas the outlet area is $A_2 = \dfrac{Q}{v_2} = \dfrac{0.0800}{8.00} = 0.0100\,\mathrm{m^2}$, corresponding to a diameter of $0.113\,\mathrm{m}$. The discharge is $80\,\mathrm{L/s}$ at both sections, while the mean velocity increases sevenfold.

::schema{nodi="A,0,0,-;B,3,0,-;C,3.8,0,-;D,7,0,-" condotte="A-B,1.2,D_1;C-D,0.6,D_2" linee="3,0.6 3.8,0.3;3,-0.6 3.8,-0.3" frecce="1.7,0,2.9,0,v_1;4.9,0,6.1,0,v_2" tratteggi="0.6,-0.65 0.6,0.65;6.6,-0.35 6.6,0.35" etichette="0.6,0.92,1;6.6,0.62,2" riferimento=0 titolo="At a contraction the flow rate is the same at sections $1$ and $2$, so $A_1 v_1 = A_2 v_2$"}
:::

::::teorema{#continuita-piu-rami titolo="Continuity at a junction"}
Consider a junction at which several streamtubes meet. The fluid is incompressible, the flow is steady, and no fluid accumulates at the junction. The sum of the inflows therefore equals the sum of the outflows:
$$
\sum_i Q_{i,\,\mathrm{in}} = \sum_j Q_{j,\,\mathrm{out}} .
$$
Taking inflows as positive and outflows as negative gives $\sum_k Q_k = 0$. This junction equation and the equations for head losses around loops are the two sets of equations used to solve pipe networks, as discussed in the chapter on pipe systems. If a junction receives $120\,\mathrm{L/s}$ and sends $70\,\mathrm{L/s}$ into one branch, the other branch carries $50\,\mathrm{L/s}$.

::schema{nomi=0 nodi="N,0,0;A,-3.2,0;B,3,1.7;C,3,-1.7" condotte="A-N,0.7,D_1;N-B,0.5,D_2;N-C,0.45,D_3" frecce="-2.8,0,-1.6,0,Q_1;2.0,1.13,2.9,1.64,Q_2;2.0,-1.13,2.9,-1.64,Q_3" riferimento=0 titolo="Junction with one inlet and two outlets, giving $Q_1 = Q_2 + Q_3$"}

:::dimostrazione
Choose a control volume $V$ that encloses the junction and cuts each branch at a cross section. During $dt$ the volume entering $V$ through the inlets is $\sum_i A_i v_i\,dt$ and the volume leaving through the outlets is $\sum_j A_j v_j\,dt$. No fluid crosses the walls. For steady incompressible flow, the fluid volume within $V$ is independent of time. Thus the entering and leaving volumes are equal. Dividing by $dt$ and using $Q = A\,v$ gives equality of the sums of the flow rates.
:::
::::

:::osservazione{#continuita-comprimibile titolo="Compressible flow"}
If density varies between sections, use a mass balance in place of a volume balance. In a steady streamtube it is the mass flow rate that is conserved:
$$
Q_m = \rho_1 A_1 v_1 = \rho_2 A_2 v_2 .
$$
Volumetric flow rate $Q = A\,v$ varies from section to section because the same kilogram of fluid occupies different volumes at different densities. In an air duct whose diameter changes from $300\,\mathrm{mm}$ to $250\,\mathrm{mm}$, with $\rho_1 = 1.20\,\mathrm{kg/m^3}$, $v_1 = 12.0\,\mathrm{m/s}$, and $\rho_2 = 1.60\,\mathrm{kg/m^3}$, the mass flow rate is $1.02\,\mathrm{kg/s}$ and the velocity in the second section is $13.0\,\mathrm{m/s}$. Water density is treated as constant in hydraulic calculations, so the volumetric form is used. Use the mass form for gases and liquids undergoing large temperature changes.
:::

## Velocity distributions and correction factors

Mean velocity characterizes a section by one number. The expressions for energy and momentum depend on the cube and square of the local velocity. Their cross-sectional averages exceed the cube and square of the mean velocity for a nonuniform profile.

:::osservazione{#distribuzione-della-velocita titolo="Velocity distribution across a section"}
Because of viscosity, the fluid adheres to the walls. Velocity is zero at the boundary and greatest on a pipe’s axis or near the free surface of a channel. For laminar flow in a circular pipe the velocity profile is parabolic, with its maximum on the axis. In turbulent flow transverse mixing produces a much flatter profile. Velocity changes sharply in a thin layer near the wall and is nearly uniform in the core. A commonly used profile is $u = u_{\max}\left(1 - \dfrac{r}{r_0}\right)^{\frac{1}{n}}$, where $r_0$ is the pipe radius and $n$ lies between $6$ and $10$. Both profiles can be measured in the laboratory with Pitot tubes or anemometers. Only the laminar profile is obtained theoretically in the chapter on head loss.

::grafico{f="1-x^2;(1-abs(x))^(1/7)" xmin=-1 xmax=1 ymin=0 ymax=1.2 nomi="r/r₀,u/uₘₐₓ" titolo="Velocity distribution in a circular pipe. The laminar profile is parabolic (solid line) and the turbulent profile is flatter (dashed line)"}
:::

:::definizione{#coefficienti-di-ragguaglio titolo="Correction factors"}
Let $u$ be the local velocity at a point in a cross section of area $A$, and let $v = \dfrac{Q}{A}$ be the mean velocity. The two **correction factors** are the numbers
$$
\alpha = \frac{1}{A\,v^3}\int_A u^3\,dA ,
\qquad
\beta = \frac{1}{A\,v^2}\int_A u^2\,dA .
$$
The first enters the flow’s velocity head $\alpha\,\dfrac{v^2}{2g}$ and corrects the kinetic energy calculated from mean velocity. The second enters the momentum flux through the section, which is $\beta\,\rho\,Q\,v$. Both equal $1$ for a uniform velocity distribution and both exceed $1$ otherwise, by the inequality between the mean of a power and the power of the mean. Applying the same inequality to means of orders $2$ and $3$ gives $\alpha > \beta > 1$ for every nonuniform velocity profile. The factors allow Bernoulli’s equation and the integral momentum equation to be written for a real flow whose velocity varies across the section.
:::

:::esempio{titolo="Parabolic velocity profile in laminar flow"}
In laminar flow in a circular pipe of radius $r_0$, the velocity at distance $r$ from the axis is $u = u_{\max}\left(1 - \dfrac{r^2}{r_0^2}\right)$. Using the annular area element $dA = 2\pi r\,dr$, the discharge is
$$
Q = \int_0^{r_0} u_{\max}\left(1 - \frac{r^2}{r_0^2}\right) 2\pi r\,dr = 2\pi u_{\max}\left[\frac{r^2}{2} - \frac{r^4}{4 r_0^2}\right]_0^{r_0} = \frac{\pi r_0^2 u_{\max}}{2} ,
$$
so the mean velocity is $v = \dfrac{Q}{\pi r_0^2} = \dfrac{u_{\max}}{2}$. The same integrals give
$$
\alpha = 2 , \qquad \beta = \frac{4}{3} ,
$$
These values apply to all laminar flows in circular pipes since they depend on neither $r_0$ nor $u_{\max}$.
:::

:::osservazione{#valori-dei-coefficienti titolo="Correction factors in real flows"}
Measurements in turbulent pipes place $\alpha$ between $1.03$ and $1.10$, and $\beta$ between $1.02$ and $1.05$. The flat velocity profile is close to uniform. In channels with an irregular profile $\alpha$ can reach $1.3$. Accordingly, pressurized pipe calculations take $\alpha = \beta = 1$. This convention is used throughout the course unless a problem states otherwise. Laminar flow, with $\alpha = 2$, is the one case where the approximation produces a large error. It occurs in oils and small-diameter pipes.
:::

## Laminar and turbulent flow

:::osservazione{#esperienza-di-reynolds titolo="Reynolds’ experiment"}
In Reynolds’ experiment a constant-head tank supplies a horizontal glass tube. A needle injects a fine filament of dye at the inlet. An outlet valve regulates the discharge. At low flow rates the dye filament remains narrow and straight throughout the tube. Particles follow paths parallel to the axis and fluid layers slide past one another without mixing. The flow is **laminar**. As discharge rises beyond a certain value, the filament starts to oscillate and rapidly disperses throughout the section. Irregular fluctuations in all three directions are superimposed on the mean velocity. This is **turbulent** flow. The change of regime occurs at the same value of a dimensionless combination of velocity, diameter, and viscosity regardless of the fluid and tube used.

::schema{acqua="0,0.6 3,0.6 3,3.4 0,3.4" solidi="-0.25,0.35 0,0.35 0,3.6 -0.25,3.6;-0.25,0.35 3.25,0.35 3.25,0.6 -0.25,0.6;3,1.75 3.25,1.75 3.25,3.6 3,3.6;3,0.6 3.25,0.6 3.25,1.25 3,1.25" pelo="0,3,3.4" nodi="A,3,1.5,-;B,9,1.5,-" condotte="A-B,0.5" linee="1.2,4.1 1.2,1.56 9,1.56" frecce="6.3,1.36,7.6,1.36,v" etichette="1.2,4.45,dye;6.2,2.3,dye streak" riferimento=0 titolo="Reynolds apparatus. In laminar flow the dye filament remains straight throughout the tube"}
:::

:::definizione{#numero-di-reynolds titolo="Reynolds number"}
Consider a circular pipe of diameter $D$ carrying fluid of kinematic viscosity $\nu$ at mean velocity $v$. The **Reynolds number** is the dimensionless ratio
$$
Re = \frac{v\,D}{\nu} .
$$
It measures the relative importance of inertial and viscous forces. Viscosity governs at small values, while inertia predominates at large values. Since $v = \dfrac{4Q}{\pi D^2}$, the Reynolds number can also be calculated directly from discharge:
$$
Re = \frac{4\,Q}{\pi\,D\,\nu} .
$$
For water at $20\,^\circ\mathrm{C}$ with $\nu = 10^{-6}\,\mathrm{m^2/s}$, a pipe of diameter $200\,\mathrm{mm}$ carrying $45\,\mathrm{L/s}$ has mean velocity $1.43\,\mathrm{m/s}$ and $Re = 2.86 \cdot 10^5$.
:::

:::osservazione{#valori-critici titolo="Critical values of the Reynolds number"}
Measurements in circular pipes give the following ranges:

- $Re < 2000$: stable laminar flow.
- $2000 < Re < 4000$: transitional flow, in which the regime can change and is sensitive to inlet disturbances and vibration.
- $Re > 4000$: turbulent flow.

$2000$ is the lower limit above which disturbances can grow. In very smooth tubes with carefully designed inlets, laminar conditions have been maintained up to $Re$ of order $10^4$. The critical value therefore depends on experimental conditions, and the three ranges serve as practical guides. Water mains have $Re$ between $10^5$ and $10^6$ and consequently operate in turbulent flow. Laminar flow is encountered in oils, filters, and porous media. The regime determines which expression to use for head loss, as discussed in the chapter on head loss.
:::

:::osservazione{#diametro-equivalente titolo="Noncircular cross sections"}
For a noncircular cross section of area $A$ and wetted perimeter $C$, the hydraulic radius is $R = \dfrac{A}{C}$. In a full circular pipe it equals $\dfrac{D}{4}$. For noncircular sections the characteristic length is therefore the **hydraulic diameter**, $D_e = 4R$, and the Reynolds number becomes
$$
Re = \frac{v\,D_e}{\nu} = \frac{4\,v\,R}{\nu} .
$$
A rectangular duct with sides $0.600\,\mathrm{m}$ and $0.400\,\mathrm{m}$ has $A = 0.240\,\mathrm{m^2}$, $C = 2.00\,\mathrm{m}$, $R = 0.120\,\mathrm{m}$, and $D_e = 0.480\,\mathrm{m}$. Carrying $200\,\mathrm{L/s}$ of water, it has mean velocity $0.833\,\mathrm{m/s}$ and $Re = 4.00 \cdot 10^5$. Using $4R$ in place of the diameter is a practical approximation supported by measurements for compact cross sections. The approximation is less accurate for very elongated sections.
:::

## The local form of the continuity equation

The equation $A_1 v_1 = A_2 v_2$ relates two sections of a flow. The same conservation of volume can be stated as a condition on the velocity field at each point.

:::richiamo{titolo="Divergence theorem"}
Let $V$ be a regular domain in $\mathbb{R}^3$ with boundary $\partial V$ oriented by the outward normal $\hat{n}$. Let $\vec{v}$ be a vector field of class $C^1$ on $V$. Then
$$
\int_{\partial V} \vec{v} \cdot \hat{n}\,dA = \int_V \operatorname{div}\vec{v}\;dV ,
\qquad
\operatorname{div}\vec{v} = \frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} .
$$
See the Mathematical Analysis 2 chapter on surfaces, flux, and the Gauss and Stokes theorems.
:::

::::teorema{#continuita-locale titolo="Differential form of the continuity equation"}
Let $\vec{v}$ be the velocity field of an incompressible fluid, of class $C^1$ in a region $\Omega$. At each point of $\Omega$,
$$
\operatorname{div}\vec{v} = \frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0 .
$$
This condition also holds in unsteady flow because the volume of a parcel of incompressible fluid remains constant at every instant. It determines whether a given velocity field can represent incompressible flow and can be used to find one velocity component when the others are known.

:::dimostrazione
Write a volume balance for an arbitrary control volume, then derive a condition that holds at each point.

Let $V \subseteq \Omega$ be any regular domain fixed in space. Since the fluid is incompressible, the volume entering $V$ through its boundary during any interval equals the volume leaving it. The net outward velocity flux through the boundary is therefore zero:
$$
\int_{\partial V} \vec{v} \cdot \hat{n}\,dA = 0 .
$$
By the divergence theorem the surface integral equals $\displaystyle\int_V \operatorname{div}\vec{v}\;dV$, which must vanish for every regular domain $V$ contained in $\Omega$. Take any point $P$ in $\Omega$ and suppose $\operatorname{div}\vec{v}(P) > 0$. The function $\operatorname{div}\vec{v}$ is continuous because $\vec{v}$ is of class $C^1$. There is therefore a ball $B$ centered at $P$ on which $\operatorname{div}\vec{v} > 0$. The integral over that ball would be positive, contrary to the result just established. The same reasoning rules out $\operatorname{div}\vec{v}(P) < 0$. Therefore $\operatorname{div}\vec{v}(P) = 0$ at every point.
:::
::::

:::esempio{titolo="Checking a specified velocity field"}
Consider $\vec{v} = (2k\,x\,y,\;-k\,y^2)$ with $k = 0.100\,\mathrm{m^{-1}s^{-1}}$. This gives
$$
\operatorname{div}\vec{v} = \frac{\partial}{\partial x}(2k\,x\,y) + \frac{\partial}{\partial y}(-k\,y^2) = 2k\,y - 2k\,y = 0 ,
$$
so the field is compatible with incompressible flow. The streamlines follow from
$$
\frac{dy}{dx} = \frac{-k\,y^2}{2k\,x\,y} = -\frac{y}{2x} ,
$$
a separable equation with solution $y = \dfrac{c}{\sqrt{x}}$, giving the family of curves $x\,y^2 = \mathrm{constant}$. Since the field is independent of $t$, the flow is steady and its pathlines coincide with its streamlines.
:::
