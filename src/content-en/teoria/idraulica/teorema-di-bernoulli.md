---
titolo: "Bernoulli’s equation and total head"
sommario: "The three components of total head, Bernoulli’s equation for an ideal fluid, and its extension to real flows with head loss. Hydraulic and energy grade lines are used to analyze piezometers, Pitot tubes, Venturi meters, tank discharge, and suction limits."
---

## The three components of total head

In a fluid at rest, the sum $z + \dfrac{p}{\gamma}$ has the same value at every point. When the fluid moves, this sum varies from point to point. To obtain a conserved quantity, we must add a third term that depends on velocity.

:::richiamo{#legge-di-stevin titolo="Hydrostatic pressure law"}
In an incompressible fluid of specific weight $\gamma$ at rest under gravity, pressure increases linearly with depth and the sum of elevation and pressure head is constant throughout the fluid:
$$
z + \frac{p}{\gamma} = \text{constant} .
$$
See the chapter on fluid properties and fluid statics.
:::

:::definizione{#carico-piezometrico titolo="Elevation, pressure head, and piezometric head"}
Choose a horizontal datum. The **elevation** $z$ of a point is its vertical distance from the datum, measured positive upward. The **pressure head** at the point is $\dfrac{p}{\gamma}$, the ratio of pressure to specific weight. It equals the height of a column of the fluid that produces pressure $p$. Their sum
$$
h = z + \frac{p}{\gamma}
$$
is the **piezometric head** at the point, measured in meters.

Pressures are measured relative to atmospheric pressure, so $\dfrac{p}{\gamma}$ is negative wherever the pressure is below atmospheric. Piezometric head depends on the elevation datum, but the difference in piezometric head between two points is independent of the datum.
:::

:::definizione{#carico-totale titolo="Velocity head and total head"}
Let $v$ be the speed of a fluid particle at the point under consideration. The quantity
$$
\frac{v^2}{2g}
$$
is the **velocity head**. It is the height through which an object must fall in a vacuum to reach speed $v$. The sum of the three heads
$$
H = z + \frac{p}{\gamma} + \frac{v^2}{2g}
$$
is the **total head** at the point, measured in meters.

Each of the three terms represents energy per unit weight of fluid. Elevation represents gravitational potential energy per unit weight. Pressure head represents the work done by pressure forces in moving a unit weight of fluid through the section. Velocity head represents kinetic energy per unit weight. Total head therefore measures the mechanical energy per unit weight of fluid passing through the point. Balancing this quantity is fundamental to the analysis of pressure flow. For a pipe with centerline elevation $z = 4.00\,\mathrm{m}$, gauge pressure $p = 150\,\mathrm{kPa}$, and speed $v = 1.91\,\mathrm{m/s}$, the three results are $\dfrac{p}{\gamma} = 15.29\,\mathrm{m}$, $\dfrac{v^2}{2g} = 0.186\,\mathrm{m}$, and $H = 19.48\,\mathrm{m}$.

::schema{nodi="M,2,3,-;N,11,3,-" condotte="M-N,0.7" linee="4,3.35 4,6.6;4.6,3.35 4.6,6.6;6.6,7.4 6.6,2.9 5.8,2.9;6,7.4 6,3.1 5.8,3.1;0.6,0 12,0" piezometrica="1.6,6.6 11.4,6.6" energia="1.6,7.4 11.4,7.4" quote="8 0,8 3,z,-0.8;8 3,8 6.6,p/γ,-0.8;8 6.6,8 7.4,v²/2g,-0.8;11.4 0,11.4 7.4,H,-1" etichette="2.6,6.9,hydraulic grade line;3.2,7.7,energy grade line;2,0.35,datum" riferimento=0 titolo="The three head components at a pipe section. The piezometer measures $\dfrac{p}{\gamma}$, and the Pitot tube adds $\dfrac{v^2}{2g}$"}
:::

## Bernoulli’s equation

A fluid particle’s total head generally changes as the particle moves. The following theorem gives the conditions under which total head is conserved.

:::richiamo{#continuita titolo="Continuity equation"}
In steady incompressible flow through a streamtube, the discharge is the same at every cross section:
$$
Q = A_1 v_1 = A_2 v_2 .
$$
See the chapter on fluid kinematics, flow rate, and the continuity equation.
:::

::::teorema{#teorema-di-bernoulli titolo="Bernoulli’s equation"}
Consider an ideal (inviscid), incompressible fluid of specific weight $\gamma$ in steady flow with gravity as the only body force. Total head is then constant along each pathline. For any two points $1$ and $2$ on the same pathline,
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} .
$$

The theorem relates elevation, pressure, and speed. Knowing two determines the third for a given total head. Combined with the continuity equation, which relates speeds to cross-sectional areas, it lets us find the pressure at one section from the pressure at another or determine discharge from a measured pressure difference. In steady flow, pathlines coincide with streamlines, so total head is constant along each streamline.

::schema{acqua="1,2.4 4,2.8 7.4,4.8 10,5.4 10,4.5 7.4,3.9 4,1.9 1,1.5" linee="1,2.4 4,2.8 7.4,4.8 10,5.4;1,1.5 4,1.9 7.4,3.9 10,4.5;0,0 11,0" tratteggi="1,1.95 10,4.95;2.2,2.67 2.2,1.67;8.5,5.15 8.5,4.2" frecce="1.3,1.95,2.9,2.2,v_1;8.8,4.67,9.9,4.8,v_2" etichette="0.75,1.2,1;2.35,1.45,1';8.25,3.6,2;10.2,4.2,2';2.2,0.35,datum" quote="1 0,1 1.95,z_1,-0.8;10 0,10 4.95,z_2,0.8" riferimento=0 titolo="Streamtube between sections $1$ and $2$. In time $dt$, the two sections advance to $1'$ and $2'$, sweeping out equal volumes"}

:::dimostrazione
We apply the work–energy theorem to the fluid in an elementary streamtube around the pathline. In steady flow, the net change is equivalent to transferring a small mass from the first section to the second.

Consider a streamtube centered on the pathline. At points $1$ and $2$, take sections normal to the pathline with areas $dA_1$ and $dA_2$, respectively. During the interval $dt$, the fluid at the first section moves a distance $v_1\,dt$ to $1'$, and the fluid at the second moves a distance $v_2\,dt$ to $2'$. The volumes swept out are $dV_1 = v_1\,dA_1\,dt$ and $dV_2 = v_2\,dA_2\,dt$. By the **continuity equation**, $v_1\,dA_1 = v_2\,dA_2$, so the volumes are equal. Denote their common value by $dV$. The corresponding mass is $dm = \rho\,dV$.

The region between $1'$ and $2$ belongs to both configurations. Because the flow is steady, its velocity and elevation distributions are the same before and after the displacement. The change in kinetic energy is therefore that of a mass $dm$ moving from the volume between $1$ and $1'$ to the volume between $2$ and $2'$:
$$
dE_c = \frac{1}{2}\,\rho\,dV\,(v_2^2 - v_1^2) .
$$

Now calculate the work done by the external forces. Upstream fluid exerts a force $p_1\,dA_1$ on section $1$ in the direction of flow, doing work $p_1\,dA_1\,v_1\,dt = p_1\,dV$. Downstream fluid exerts a force $p_2\,dA_2$ on section $2$ opposite to the flow, doing work $-p_2\,dV$. Along the side of the streamtube, velocity is tangent to the surface. For an ideal fluid, pressure provides the only surface force, and it acts normal to the surface. These forces therefore deliver zero power and do no work. Gravity does work equal to the weight $\gamma\,dV$ times the decrease in elevation, giving $-\gamma\,dV\,(z_2 - z_1)$.

By the work–energy theorem, the change in kinetic energy equals the total work, so
$$
\frac{1}{2}\,\rho\,dV\,(v_2^2 - v_1^2) = (p_1 - p_2)\,dV - \gamma\,dV\,(z_2 - z_1) .
$$
Divide by $\gamma\,dV$ and use $\gamma = \rho g$:
$$
\frac{v_2^2 - v_1^2}{2g} = \frac{p_1 - p_2}{\gamma} - (z_2 - z_1) .
$$
Collecting the terms with subscript $1$ on the left gives the stated result.
:::
::::

:::osservazione{#bernoulli-in-pressioni titolo="Alternative forms of Bernoulli’s equation"}
Multiplying total head by $\gamma$ gives energy per unit volume, and the relation becomes
$$
p_1 + \gamma z_1 + \frac{1}{2}\rho v_1^2 = p_2 + \gamma z_2 + \frac{1}{2}\rho v_2^2 ,
$$
the form used in Physics 1. Each term has the dimensions of pressure. The term $\dfrac{1}{2}\rho v^2$ is called *dynamic pressure*. In hydraulics, the head form is preferable because all three terms are lengths in meters. They can be read from a scale drawing and compared directly with elevation differences in the system. For a fluid at rest, $v_1 = v_2 = 0$, and the equation reduces to the **hydrostatic pressure law**.
:::

## Hydraulic and energy grade lines

Plotting piezometric head and total head along the pipe profile gives two lines that show the flow conditions at each section.

:::definizione{#piezometrica titolo="Hydraulic grade line"}
The elevation of the **hydraulic grade line** at any section is the local piezometric head $h = z + \dfrac{p}{\gamma}$. Its vertical distance from the pipe centerline is the pressure head $\dfrac{p}{\gamma}$. The line lies above the centerline where gauge pressure is positive and below it where gauge pressure is negative. In the supply reservoir, the hydraulic grade line coincides with the hydrostatic head plane, the horizontal plane through the free surface. Velocity is negligible there and gauge pressure at the surface is zero.
:::

:::definizione{#linea-dei-carichi-totali titolo="Energy grade line"}
The elevation of the **energy grade line** at each section is the total head $H$ of the flow. It lies above the hydraulic grade line by the vertical distance $\dfrac{v^2}{2g}$ because the velocity head is positive. Bernoulli’s equation gives a horizontal energy grade line for an ideal fluid.
:::

:::osservazione{#lettura-delle-linee titolo="Interpreting the two grade lines"}
The two lines provide a graphical alternative to tabulating the flow variables at each section.

- The vertical separation between the energy and hydraulic grade lines is $\dfrac{v^2}{2g}$, so closer lines indicate slower flow. In a constant-diameter pipe, the discharge is the same at every section. The velocity head is therefore constant and the two lines are parallel.
- The vertical distance between the hydraulic grade line and the pipe centerline is $\dfrac{p}{\gamma}$, measured in meters of water.
- The rate at which the energy grade line falls in the flow direction is the head loss per unit length.
- A change in pipe diameter changes the velocity head, producing a step in the hydraulic grade line. At a reduction in diameter, the line steps downward as the flow accelerates and part of the piezometric head becomes velocity head.

::schema{acqua="0.2,0.6 2.4,0.6 2.4,9 0.2,9;15,0.6 18.4,0.6 18.4,5.4 15,5.4" solidi="0,0 2.6,0 2.6,0.6 0,0.6;0,0 0.2,0 0.2,9.6 0,9.6;2.4,0.6 2.6,0.6 2.6,3.65 2.4,3.65;2.4,4.35 2.6,4.35 2.6,9.6 2.4,9.6;14.8,0 18.6,0 18.6,0.6 14.8,0.6;14.8,0.6 15,0.6 15,3.65 14.8,3.65;14.8,4.35 15,4.35 15,6 14.8,6;18.4,0 18.6,0 18.6,6 18.4,6" pelo="0.2,2.4,9;15,18.4,5.4" condotte="2.6 4-15 4,0.7" piezometrica="2.6,9 2.7,8.55 15,5.4" energia="2.6,9 2.7,8.85 15,5.7" quote="8 4,8 7.19,p/γ,0;12 6.17,12 6.47,v²/2g,1.2" etichette="6.2,8.6,energy grade line;5.6,7,hydraulic grade line;1.3,9.5,A;16.7,5.9,B" riferimento=0 titolo="In a pipe connecting two reservoirs the energy grade line falls in the flow direction. Its vertical separation from the hydraulic grade line equals the velocity head"}
:::

:::attenzione
Where the hydraulic grade line falls below the pipe centerline, gauge pressure is negative and the pipe operates below atmospheric pressure. Suppose a pipe crest lies $2.00\,\mathrm{m}$ above the upstream reservoir surface. If the head loss to the crest is $1.60\,\mathrm{m}$ and the velocity head there is $0.20\,\mathrm{m}$, the piezometric head relative to the reservoir surface is $-1.80\,\mathrm{m}$. This gives a gauge pressure head of $\dfrac{p}{\gamma} = -3.80\,\mathrm{m}$, or a gauge pressure of $-37.3\,\mathrm{kPa}$. The absolute pressure remains positive, but it must also be checked against the vapor pressure to establish whether the pipe can operate.
:::

## One-dimensional flow and its correction factor

Bernoulli’s equation applies along a pathline. In practice we often need to describe the entire flow through a cross section where speed varies from point to point.

:::richiamo{#coefficiente-di-ragguaglio titolo="Kinetic energy correction factor"}
Let $A$ be the cross-sectional area, $u$ the local speed, and $v = \dfrac{Q}{A}$ the mean speed. The coefficient
$$
\alpha = \frac{1}{A\,v^3}\int_A u^3\,dA
$$
equals $1$ for a uniform velocity profile and exceeds $1$ for any other profile. In circular pipes it ranges from $1.03$ to $1.10$ for turbulent flow and equals $2$ for fully developed laminar flow. See the chapter on fluid kinematics, flow rate, and the continuity equation.
:::

::::teorema{#bernoulli-per-correnti titolo="Bernoulli’s equation for one-dimensional flow"}
Consider the steady flow of an ideal incompressible fluid with straight, parallel streamlines or streamlines of negligible curvature. Pressure then varies hydrostatically across the section. The sum $z + \dfrac{p}{\gamma}$ has the same value $h$ at every point, and the total head of the flow, defined as the rate of energy transport divided by the weight flow rate,
$$
H = h + \alpha\,\frac{v^2}{2g} = z + \frac{p}{\gamma} + \alpha\,\frac{v^2}{2g} ,
$$
has the same value at any two sections.

We can evaluate $z + \dfrac{p}{\gamma}$ anywhere in the section, for instance at the pipe centerline or at the free surface of a channel, and obtain the same result. For a full pipe we take $\alpha = 1$. Departures from $1$ affect the velocity head, which usually represents a small fraction of the total head in pipe problems. Henceforth we write $H = z + \dfrac{p}{\gamma} + \dfrac{v^2}{2g}$, where $v$ is the mean velocity.

:::dimostrazione
The streamlines are straight and parallel, so acceleration normal to them is zero. In that direction, gravity and pressure forces are in equilibrium just as they are in a fluid at rest. By the **hydrostatic pressure law**, the sum $z + \dfrac{p}{\gamma}$ is constant across the section. Call this common value $h$.

The rate of energy transport through the section is the integral of local total head times the weight flow rate through the element $dA$, namely $\gamma\,u\,dA$:
$$
P = \int_A \gamma\left(h + \frac{u^2}{2g}\right) u\,dA
= \gamma\,h\int_A u\,dA + \frac{\gamma}{2g}\int_A u^3\,dA .
$$
The first integral is the discharge $Q = v A$. By the definition of the **correction factor**, the second is $\alpha\,v^3 A$, so
$$
P = \gamma\,Q\,h + \frac{\gamma}{2g}\,\alpha\,v^3 A = \gamma\,Q\left(h + \alpha\,\frac{v^2}{2g}\right) .
$$
Divide by the weight flow rate $\gamma Q$ to obtain the expression for $H$. For an ideal fluid, the **Bernoulli’s theorem** gives constant total head along each pathline. The power entering one section leaves through the other, so $H$ is the same at both.
:::
::::

## Real flows and head loss

In a real fluid, viscous shear stresses do negative work, converting mechanical energy to heat. Total head therefore decreases in the direction of flow.

:::definizione{#perdita-di-carico titolo="Head loss"}
Let $1$ and $2$ be two flow sections, with $2$ downstream of $1$. The difference
$$
\Delta H_{1,2} = H_1 - H_2
$$
is the **head loss** between the sections, measured in meters. It is the mechanical energy lost per unit weight of fluid along the path and converted to heat by viscous stresses. Resistance along the walls of a straight length of pipe produces a *distributed* head loss, written as $\Delta H = J L$. Here $L$ is pipe length and the dimensionless $J$ is the **hydraulic gradient**. A loss caused by a specific feature, such as an entrance, bend, or valve, is termed *local*. The chapter on distributed and local head losses explains how to calculate $J$ and the local loss coefficients.
:::

::::teorema{#bernoulli-fluidi-reali titolo="Bernoulli’s equation for real fluids"}
Consider steady, one-dimensional flow of a real incompressible fluid. Take two sections $1$ and $2$, with $2$ downstream of $1$. Then
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} + \Delta H_{1,2} ,
$$
with $\Delta H_{1,2} \geq 0$.

This equation and the continuity equation provide the basis for solving problems involving full pipes. Given the free-surface elevations of two reservoirs and the relation between head loss and discharge, the equation determines the discharge. Given the discharge, it determines the pressure at each section. For a pipe connecting two reservoirs with elevation difference $12.00\,\mathrm{m}$ and total head loss $40\,\dfrac{v^2}{2g}$, we have $\dfrac{v^2}{2g} = 0.30\,\mathrm{m}$, giving $v = 2.43\,\mathrm{m/s}$.

:::dimostrazione
Repeat the energy balance in the proof of the **Bernoulli’s theorem**, now including the work of viscous forces exerted on the lateral surface by the surrounding fluid and the walls. Let $L_a$ denote this work over the interval $dt$. The work–energy theorem now gives
$$
\gamma\,Q\,dt\,(H_2 - H_1) = L_a ,
$$
where $\gamma\,Q\,dt$ is the weight of fluid passing through. Setting $\Delta H_{1,2} = -\dfrac{L_a}{\gamma\,Q\,dt}$ yields the stated equation.

Viscous shear stresses oppose relative motion between fluid layers. Their power is therefore negative, so $L_a \leq 0$ and $\Delta H_{1,2} \geq 0$. Equality holds only for an ideal fluid.
:::
::::

:::attenzione
Always subtract head loss when proceeding downstream, regardless of pipe geometry. Even in a pipe that rises, total head decreases downstream, although piezometric head can rise or fall. Suppose the flow passes from $z_1 = 2.00\,\mathrm{m}$, where $\dfrac{p_1}{\gamma} = 28.542\,\mathrm{m}$ and $\dfrac{v_1^2}{2g} = 0.053\,\mathrm{m}$, to $z_2 = 6.50\,\mathrm{m}$, where $\dfrac{p_2}{\gamma} = 21.407\,\mathrm{m}$ and $\dfrac{v_2^2}{2g} = 0.408\,\mathrm{m}$. The total heads are $H_1 = 30.595\,\mathrm{m}$ and $H_2 = 28.315\,\mathrm{m}$, so the loss is $2.28\,\mathrm{m}$. Flow goes from section $1$ to section $2$ even though the elevation increases.
:::

## Piezometers and the Pitot tube

Two instruments measure the grade lines point by point. They differ in the orientation of the pressure opening relative to the flow.

:::definizione{#piezometro titolo="Piezometer"}
A **piezometer** is a transparent tube open to the atmosphere and connected perpendicular to the flow through a tapping flush with the inner pipe wall. Liquid rises until pressure at the base of the column equals the local flow pressure. The liquid level therefore marks the piezometric head $h = z + \dfrac{p}{\gamma}$ of the section. A piezometer thus directly locates a point on the hydraulic grade line. At high pressures the required column is impractically tall, so a pressure gauge is used. At negative gauge pressures a piezometer would draw in air, so a differential manometer is used.
:::

::::teorema{#tubo-di-pitot titolo="Pitot tube"}
Consider an open tube immersed in a flow of speed $v$, with its submerged opening facing upstream and the other end open to the atmosphere. The liquid in the tube is at rest. Fluid reaching the opening comes to rest at a point called the *stagnation point*. The liquid level in the tube therefore exceeds the piezometer level at the same section by
$$
\Delta = \frac{v^2}{2g} ,
\qquad\text{which gives}\qquad
v = \sqrt{2 g\,\Delta} .
$$

A Pitot tube thus measures local speed from a difference in height. A piezometer and Pitot tube together give simultaneous readings of piezometric head and total head. For pipe flow, the two are combined in a *Pitot-static tube*. Its front opening and side pressure taps connect to opposite limbs of a differential manometer. A difference of $\Delta = 0.22\,\mathrm{m}$ in water level gives $v = \sqrt{2 \cdot 9.81 \cdot 0.22} = 2.08\,\mathrm{m/s}$.

::schema{nodi="M,0.6,2,-;N,12.4,2,-" condotte="M-N,0.7" linee="4.6,2.35 4.6,5.1;5.2,2.35 5.2,5.1;8.2,6.1 8.2,1.9 7.2,1.9;7.6,6.1 7.6,2.1 7.2,2.1" frecce="1.2,2,2.8,2,v" quote="10.6 4.3,10.6 5.3,Δ,0.9" etichette="4.75,1.25,P;3.8,5.5,piezometer;8,6.5,Pitot" piezometrica="3.6,4.3 11.6,4.3" energia="3.6,5.3 11.6,5.3" riferimento=0 titolo="A piezometer and a Pitot tube at the same section. The difference between the two liquid levels is the velocity head"}

:::dimostrazione
Apply the **Bernoulli’s theorem** along the streamline ending at stagnation point $A$, from an upstream point $P$ far enough away for the flow to be undisturbed to point $A$ itself. The two points have the same elevation $z$. The speed at $P$ is $v$, while at $A$ it is zero, giving
$$
z + \frac{p_P}{\gamma} + \frac{v^2}{2g} = z + \frac{p_A}{\gamma} ,
$$
hence $\dfrac{p_A - p_P}{\gamma} = \dfrac{v^2}{2g}$. In both tubes the liquid is at rest, so by the **hydrostatic pressure law** the liquid surface in each tube is at the elevation $z + \dfrac{p}{\gamma}$ associated with its tap. The level difference is therefore $\dfrac{p_A - p_P}{\gamma}$, or $\dfrac{v^2}{2g}$. Solving for $v$ gives the stated result.
:::
::::

## Differential-pressure flowmeters

A constriction accelerates the flow and, by Bernoulli’s equation, lowers its piezometric head. The difference between the levels at two pressure taps can thus be used to measure discharge.

:::richiamo{#manometro-differenziale titolo="Differential manometer"}
A differential $U$-tube manometer connects two pressure taps in a liquid of specific weight $\gamma$. The manometer contains an immiscible liquid of specific weight $\gamma_m > \gamma$. If $\Delta$ is the difference in elevation of the two interfaces, the piezometric head difference between the taps is
$$
h_1 - h_2 = \Delta\left(\frac{\gamma_m}{\gamma} - 1\right) ,
$$
regardless of the pipe inclination or the elevations of the taps. For mercury, $\dfrac{\gamma_m}{\gamma} = 13.6$, so the factor is $12.6$. See the chapter on fluid properties and fluid statics.
:::

::::teorema{#tubo-di-venturi titolo="Venturi meter"}
Consider a meter installed in a pipe of cross-sectional area $A_1 > A_2$. It consists of a converging section, a throat of area $A_2$, and a diverging section, and carries steady flow of an ideal incompressible fluid. If $\Delta h = h_1 - h_2$ is the piezometric head difference between the upstream section and the throat, the discharge is
$$
Q = \frac{A_2}{\sqrt{1 - \left(\dfrac{A_2}{A_1}\right)^2}}\;\sqrt{2 g\,\Delta h} .
$$

The discharge follows from one measured level difference, using two piezometers when pressure permits or a differential manometer otherwise. The formula contains neither section elevation, so the Venturi meter works in horizontal, vertical, and inclined pipes alike. For $D_1 = 200\,\mathrm{mm}$, $D_2 = 100\,\mathrm{mm}$, and $\Delta h = 0.85\,\mathrm{m}$, we obtain $Q = 33.1\,\mathrm{L/s}$.

::schema{acqua="0,0.6 3,0.6 4.4,0.3 6,0.3 7.4,0.6 11,0.6 11,-0.6 7.4,-0.6 6,-0.3 4.4,-0.3 3,-0.6 0,-0.6" linee="0,0.6 3,0.6 4.4,0.3 6,0.3 7.4,0.6 11,0.6;0,-0.6 3,-0.6 4.4,-0.3 6,-0.3 7.4,-0.6 11,-0.6;1.5,0.6 1.5,3.6 2.1,3.6 2.1,0.6;5,0.3 5,2.9 5.6,2.9 5.6,0.3" tratteggi="1.5,0 1.5,0.6;5,0 5,0.3;0,0 11,0;2.1,3.6 7.4,3.6;5.6,2.9 7.4,2.9" etichette="1.2,-0.95,1;4.7,-0.95,2;1.1,1.6,D_1;4.6,1.3,D_2" quote="6.9 2.9,6.9 3.6,Δh,0.45" riferimento=0 titolo="In a Venturi meter the throat accelerates the flow and lowers the piezometric head by $\Delta h$"}

:::dimostrazione
By the **continuity equation**, $v_1 A_1 = v_2 A_2 = Q$, giving $v_1 = \dfrac{Q}{A_1}$ and $v_2 = \dfrac{Q}{A_2}$. The flow at both sections is one-dimensional, so apply the **Bernoulli’s theorem for one-dimensional flow** with $\alpha = 1$:
$$
h_1 + \frac{v_1^2}{2g} = h_2 + \frac{v_2^2}{2g} .
$$
Substituting the velocities gives
$$
\Delta h = h_1 - h_2 = \frac{Q^2}{2g}\left(\frac{1}{A_2^2} - \frac{1}{A_1^2}\right)
= \frac{Q^2}{2g\,A_2^2}\left(1 - \left(\frac{A_2}{A_1}\right)^2\right) .
$$
Since $A_2 < A_1$, the factor $1 - \left(\dfrac{A_2}{A_1}\right)^2$ is positive. Solving for $Q$ gives the result.
:::
::::

:::osservazione{#diaframma titolo="Orifice plate and discharge coefficient"}
An orifice plate is a perforated disk installed between two pipe flanges, with pressure taps upstream and downstream of the disk. It costs less than a Venturi meter but dissipates much more energy because the jet contracts beyond the orifice and then expands abruptly. The discharge formula has the same form as for a Venturi meter, multiplied by a **discharge coefficient** $C$ that accounts for jet contraction and dissipation:
$$
Q = C\,\frac{A_2}{\sqrt{1 - \left(\dfrac{A_2}{A_1}\right)^2}}\;\sqrt{2 g\,\Delta h} .
$$
The coefficient is determined experimentally and depends on the diameter ratio and the Reynolds number. Standards for differential-pressure flowmeters give coefficient values and their range of applicability. Typical values are about $0.98$ for a Venturi meter and $0.60$ for an orifice plate. When a problem gives no coefficient, take $C = 1$ and treat the meter as ideal.
:::

## Tank discharge and pipes connecting reservoirs

Bernoulli’s equation also applies when one section is the free surface of a reservoir, where gauge pressure is zero and velocity is negligible.

::::teorema{#efflusso-da-un-serbatoio titolo="Discharge from a constant-head tank"}
Consider a large reservoir open to the atmosphere with its level held constant. Liquid leaves through a short converging nozzle of area $A$ at a depth $h$ below the free surface. If head losses are negligible, the exit speed and discharge are
$$
v = \sqrt{2 g h} ,
\qquad
Q = A\,\sqrt{2 g h} .
$$

The exit speed equals the speed an object acquires falling through a height $h$ in a vacuum, independent of liquid density. Use this formula to find the discharge from a bottom outlet, the range of a jet, or the exit speed from a nozzle. For example, a converging nozzle of diameter $60\,\mathrm{mm}$ at depth $4.50\,\mathrm{m}$ delivers $26.6\,\mathrm{L/s}$. If the opening is cut in a thin wall, the jet contracts and actual discharge is lower, so a discharge coefficient is needed. See the chapter on orifice and weir flow.

::schema{acqua="0.2,0.5 5,0.5 5,7.5 0.2,7.5;5,1.1 6.1,1.1 6.1,1.7 5,1.7" solidi="0,0 5.2,0 5.2,0.5 0,0.5;0,0 0.2,0 0.2,8 0,8;5,0.5 5.2,0.5 5.2,1.1 5,1.1;5,1.7 5.2,1.7 5.2,8 5,8" pelo="0.2,5,7.5" linee="5.2,1.1 6.1,1.25 6.1,1.55 5.2,1.7" frecce="6.3,1.4,7.5,1.4,v" quote="2.6 1.4,2.6 7.5,h,0" etichette="2.6,8,free surface" riferimento=0 titolo="Discharge through a converging nozzle at depth $h$. The total head at the free surface is converted into velocity head"}

:::dimostrazione
Take the datum through the nozzle axis and apply the **Bernoulli’s theorem** between a point $S$ on the free surface and the outlet section $U$. At $S$ the elevation is $h$, gauge pressure is zero, and velocity is negligible. The reservoir cross section is much larger than the opening, so by the **continuity equation** the speed of the falling free surface is smaller in the same proportion. At $U$ the elevation is zero. The jet is exposed to the atmosphere, so gauge pressure is also zero. Thus
$$
h + 0 + 0 = 0 + 0 + \frac{v^2}{2g} ,
$$
hence $v = \sqrt{2 g h}$. The discharge follows from the definition $Q = A v$.
:::
::::

:::osservazione{#condotta-tra-due-serbatoi titolo="Pipe connecting two reservoirs"}
A pipe connects two constant-level reservoirs with a difference $\Delta z$ between their free-surface elevations. Apply Bernoulli’s equation for a real fluid between the two free surfaces. At both surfaces gauge pressure is zero and velocity is negligible. The total heads therefore equal the surface elevations, giving
$$
\Delta z = \Delta H_{1,2} .
$$
The entire elevation difference is consumed by head losses. Write the total loss as $\Delta H = K\,\dfrac{v^2}{2g}$, where $K$ is the sum of the distributed and local loss coefficients. Then $\dfrac{v^2}{2g} = \dfrac{\Delta z}{K}$, from which the speed and discharge follow. If the pipe discharges to the atmosphere, the velocity head at the outlet remains in the balance. The elevation difference between the free surface and the outlet centerline is then $\dfrac{v^2}{2g} + \Delta H$. The chapter on long pipelines and pumping systems covers the design of these pipes.
:::

## Cavitation and the suction limit

The hydraulic grade line can fall below the pipe centerline, but only to a point. Below a certain pressure, the liquid begins to vaporize.

:::definizione{#tensione-di-vapore titolo="Vapor pressure"}
A liquid’s **vapor pressure** $p_v$ is the absolute pressure at which its liquid and vapor phases are in equilibrium at the temperature in question. If the absolute pressure anywhere in the flow falls to $p_v$, liquid vaporizes and vapor bubbles form. For water at $20\,^\circ\mathrm{C}$, the vapor pressure is $p_v = 2.34\,\mathrm{kPa}$, equivalent to $\dfrac{p_v}{\gamma} = 0.24\,\mathrm{m}$ of water. Vapor pressure rises rapidly with temperature. Atmospheric pressure at sea level is $101.3\,\mathrm{kPa}$, equivalent to $10.33\,\mathrm{m}$ of water.
:::

:::osservazione{#cavitazione titolo="Cavitation"}
Bubbles formed in the low-pressure region travel with the flow and collapse rapidly when they reach a region of higher pressure. This process, called **cavitation**, causes noise, vibration, reduced discharge, and erosion of metal surfaces. Bubbles collapsing against a wall generate very high local pressures. Check the locations where the hydraulic grade line is lowest relative to the pipe centerline, such as the crest of a siphon, the inlet of a pump, or the throat of a Venturi meter.
:::

:::osservazione{#altezza-di-aspirazione titolo="Suction limit"}
For a pump at elevation $z_a$ above the free surface of its supply reservoir, the elevation rise and suction-line losses both reduce the head available at the inlet. Writing the energy balance in absolute pressures between the free surface and the pump inlet gives
$$
\frac{p_{\mathrm{abs}}}{\gamma} = \frac{p_{\mathrm{atm}}}{\gamma} - z_a - \frac{v^2}{2g} - \Delta H .
$$
The condition $\dfrac{p_{\mathrm{abs}}}{\gamma} > \dfrac{p_v}{\gamma}$ therefore gives
$$
z_a < \frac{p_{\mathrm{atm}}}{\gamma} - \frac{p_v}{\gamma} - \frac{v^2}{2g} - \Delta H ,
$$
and the theoretical limiting lift is $10.33 - 0.24 = 10.09\,\mathrm{m}$ for water at $20\,^\circ\mathrm{C}$ at sea level. Head loss, velocity head, and the margin specified by the pump manufacturer reduce the permissible lift to a few meters. The chapter on long pipelines and pumping systems discusses the margin required at the pump inlet, known as the required net positive suction head.

::schema{acqua="0.2,0.5 4.6,0.5 4.6,3 0.2,3" solidi="0,0 4.8,0 4.8,0.5 0,0.5;0,0 0.2,0 0.2,3.4 0,3.4;4.6,0 4.8,0 4.8,3.4 4.6,3.4" pelo="0.2,4.6,3" condotte="2.4 1.2-2.4 7.2-7.2 7.2,0.55" pompa="7.9,7.2,P" quote="1.2 3,1.2 7.2,z_a,0;6 2.45,6 7.2,p/γ,0" piezometrica="0.2,3 2.4,2.8 7.2,2.4" etichette="5.8,1.8,hydraulic grade line;4.6,7.9,suction pipe" riferimento=0 titolo="In the suction pipe the hydraulic grade line falls below the centerline. The pressure at the pump inlet is the lowest in the system"}
:::
