---
titolo: "The integral momentum equation and forces exerted by flowing fluids"
sommario: "Control volumes, momentum flux, and the steady-flow momentum equation, including pressure forces at the flow sections, fluid weight, and wall reactions. Applications include forces on elbows, reducers, nozzles, diffusers, vanes, plates, and gates."
---

## The control volume

Bernoulli’s theorem relates the heads at two sections and answers questions about the energy carried by a flow. Finding the force water exerts on an elbow, nozzle, or gate requires a force balance. We write it for a carefully chosen region occupied by the fluid.

:::definizione{#volume-di-controllo titolo="Control volume and control surface"}
A **control volume** is a fixed region of space occupied by fluid and chosen for a balance. Its boundary is the **control surface**. The control surface has two parts. Fluid enters and leaves through the **flow sections**. The **boundary surface** consists of solid walls and any free surfaces, with no flow across it.

Fluid particles pass through the control volume while the region itself remains fixed in space. For a pipe elbow, choose the fluid between two sections, one upstream of the bend and one downstream. The elbow wall forms the rest of the boundary.

::schema{nodi="A,0,1.2,-;B,6,1.2,-" condotte="A-B,1.6" tratteggi="0.9,0.25 0.9,2.15;5.1,0.25 5.1,2.15" frecce="1.5,1.2,2.5,1.2,v_1;3.5,1.2,4.5,1.2,v_2" etichette="0.9,2.45,1;5.1,2.45,2" riferimento=0 titolo="Control volume in a pipe segment. Flow crosses sections $1$ and $2$, and the wall forms the lateral boundary"}
:::

:::osservazione{#scelta-del-volume titolo="Choosing inlet and outlet sections"}
Select the flow sections where the flow is *one-dimensional*, with straight, parallel pathlines. At a section with one-dimensional flow, pressure varies hydrostatically. The force of the surrounding fluid on the section therefore follows from fluid statics. Where pathlines curve, as inside an elbow or at a weir crest, pressure does not vary hydrostatically and the section is unsuitable for this calculation.

For a pipe elbow, place the inlet and outlet sections in the straight runs on either side of the bend. Draw the control volume with a dashed boundary and numbered sections. Every term in the equation depends on the chosen volume.
:::

## Momentum flux

The force balance for a region with fluid flowing through it follows from applying the linear momentum theorem to the material occupying the control volume at a particular instant.

:::richiamo{titolo="Linear momentum theorem"}
For a material system with momentum $\vec{P} = \displaystyle\sum_i m_i \vec{v}_i$ subject to a resultant external force $\vec{R}^{(e)}$,
$$
\frac{d\vec{P}}{dt} = \vec{R}^{(e)} ,
$$
so the time derivative of the system’s momentum equals the vector sum of the external forces. See the Physics 1 chapter on momentum and collisions.
:::

:::definizione{#flusso-di-quantita-di-moto titolo="Momentum flux through a cross section"}
The **momentum flux** through a section is the linear momentum that fluid carries across the section per unit time. The mass flow rate through the area element $dA$ is $\rho\,v\,dA$, and the corresponding momentum flow rate $\rho\,v^2\,dA$ is directed along the velocity. Integrating over the section and taking the velocity normal to it gives
$$
\vec{M} = \rho \int_A v^2\,dA\;\hat{t} = \beta\,\rho\,Q\,v\;\hat{t} ,
$$
where $v = \dfrac{Q}{A}$ is the mean speed, $\hat{t}$ is the unit vector in the velocity direction, and $\beta$ is the momentum correction factor. For $\beta = 1$, the momentum flux is $\rho Q v$. Like a force, it is measured in newtons.

In a pipe of diameter $D = 200\,\mathrm{mm}$ carrying $Q = 50\,\mathrm{L/s}$, the mean speed is $v = 1.59\,\mathrm{m/s}$ and the momentum flux is $\rho Q v = 1000 \cdot 0.050 \cdot 1.59 = 79.6\,\mathrm{N}$.
:::

:::definizione{#coefficiente-beta titolo="Momentum correction factor"}
The **momentum correction factor** is the number
$$
\beta = \frac{1}{v^2 A}\int_A u^2\,dA ,
$$
where $u$ is the local speed and $v$ is the mean speed. It accounts for the effect of a nonuniform velocity profile on the momentum flux computed from mean speed. We have $\beta \ge 1$, with equality for a uniform velocity profile. Turbulent pipe flow has a relatively flat velocity profile, and $\beta$ ranges from $1.02$ to $1.05$. For laminar flow with a parabolic profile, $\beta = \dfrac{4}{3}$.

In routine applications we take $\beta = 1$, as we do for coefficient $\alpha$ in Bernoulli’s equation. The resulting momentum flux error is only a few percent, smaller than the uncertainty in the input data. Throughout this chapter we therefore take $\beta = 1$ unless stated otherwise.
:::

## The integral momentum equation

We first calculate the forces exerted on the flow sections by the surrounding fluid, since these forces enter the balance.

:::definizione{#spinta-sulle-sezioni titolo="Pressure forces at inlet and outlet sections"}
The **pressure force on a flow section** is the force that fluid outside the control volume exerts on a flow section through pressure:
$$
\vec{\Pi} = p_G\,A\;\hat{n} ,
$$
where $A$ is the section area, $p_G$ is the pressure at its centroid, and $\hat{n}$ is the unit normal to the section **pointing into** the control volume. At the inlet $\hat{n}$ points in the velocity direction, and at the outlet it points in the opposite direction.

This expression holds because the flow is one-dimensional at the section. Pressure varies hydrostatically, so the resultant pressure force on the plane area equals the pressure at the centroid times the area. For a pipe of diameter $D = 200\,\mathrm{mm}$ with centerline gauge pressure $p = 300\,\mathrm{kPa}$, the pressure force is $\Pi = 300 \cdot 0.0314 = 9.42\,\mathrm{kN}$, much greater than the momentum flux $79.6\,\mathrm{N}$ in the same pipe. See the chapter on hydrostatic forces on plane and curved surfaces.
:::

::::teorema{#equazione-globale titolo="Integral momentum equation"}
Consider steady incompressible flow in a control volume bounded by walls, an inlet $1$, and an outlet $2$. The flow is one-dimensional at both sections. Let $\vec{v}_1$ and $\vec{v}_2$ be the mean velocities, $Q$ the discharge, $\vec{\Pi}_1$ and $\vec{\Pi}_2$ the pressure forces on the sections, $\vec{G}$ the weight of fluid in the control volume, and $\vec{R}$ the resultant force of the walls on the fluid. Then
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} .
$$
The left side is the outgoing momentum flux minus the incoming momentum flux. The right side is the resultant external force on the fluid in the control volume.

This equation determines the force exchanged between the flow and the walls. Solving for $\vec{R}$ gives the force the walls exert on the fluid. By Newton’s third law, the fluid exerts the force $-\vec{R}$ on the walls. This force loads the anchors on an elbow, the bolts on a nozzle, or the lifting mechanism on a gate.

:::dimostrazione
Apply the linear momentum theorem to the fluid occupying the control volume at a particular instant. In steady flow the momentum inside the fixed control volume stays constant over time.

Let $W$ be the control volume and $\mathcal{M}$ the fluid mass occupying $W$ at time $t$. There are two contributions to the rate of change of the momentum of $\mathcal{M}$. One is the change in momentum within $W$. The other arises as $\mathcal{M}$ leaves $W$ through section $2$ and other fluid enters through section $1$. It follows that
$$
\frac{d\vec{P}}{dt} = \frac{\partial}{\partial t}\int_W \rho\,\vec{v}\,dW + \vec{M}_{\text{out}} - \vec{M}_{\text{in}} .
$$
Because the flow is steady, velocity is independent of time at every point of $W$ and the first term vanishes. No flow crosses the walls. The only momentum fluxes through the control surface are at the inlet and outlet. With $\beta = 1$, they are $\rho Q \vec{v}_2$ at the outlet and $\rho Q \vec{v}_1$ at the inlet. Thus
$$
\frac{d\vec{P}}{dt} = \rho\,Q\,(\vec{v}_2 - \vec{v}_1) .
$$
The external forces on $\mathcal{M}$ are the pressure forces $\vec{\Pi}_1$ and $\vec{\Pi}_2$ exerted by the surrounding fluid at the two sections, the weight $\vec{G}$ of the fluid in the volume, and the resultant wall force $\vec{R}$. The momentum theorem equates the left side to the sum of these forces, as required.
:::
::::

:::osservazione{#reazione-delle-pareti titolo="Components of the wall reaction"}
The vector $\vec{R}$ includes all forces the solid boundary exerts on the fluid, both pressure normal to the wall and viscous shear tangent to it. The integral momentum equation gives the resultant directly from the balance. This is especially useful inside an elbow, where the distribution of wall pressure is unknown.

The fluid exerts the force $-\vec{R}$ on the walls. In calculations, first solve the equation for $\vec{R}$, then reverse the signs of both components and state the direction of the force on the wall.
:::

:::osservazione{#peso-del-volume titolo="When fluid weight matters"}
The weight $\vec{G} = -\gamma\,W\,\hat{k}$ acts vertically downward, where $W$ is the volume of water in the control volume. For planar problems with the pipe axis in a horizontal plane, weight is perpendicular to the drawing and drops out of both component equations. Weight matters for elbows in a vertical plane, large-volume fittings, and open-channel flows, whose flow sections are vertical and whose vertical momentum balance includes the weight.

An elbow containing $0.020\,\mathrm{m^3}$ of water has a fluid weight $G = 9.81 \cdot 0.020 = 0.196\,\mathrm{kN}$, comparable to the momentum flux but much smaller than the pressure forces on the sections.
:::

:::attenzione
The forces $\vec{\Pi}$ are calculated using gauge pressures, so atmospheric pressure does not appear explicitly. The atmosphere also acts on the outside of the walls. The atmospheric contributions cancel when finding the net force the fitting transmits to its anchors.

A balance written with absolute pressures is equally valid if it includes the atmospheric force on the entire outside surface of the fitting. At the exit of a nozzle discharging to the atmosphere, gauge pressure is zero and the pressure force $\vec{\Pi}_2$ vanishes. Using the absolute pressure $p_2 = 101\,\mathrm{kPa}$ while omitting the outside atmosphere would introduce a fictitious force of several kilonewtons.
:::

## Resolving forces into components

The integral momentum equation is a vector equation. For a planar problem, it gives two scalar equations.

:::osservazione{#proiezione-sugli-assi titolo="The two scalar equations"}
Choose axes $x$ and $y$ in the plane of motion and resolve the momentum equation along each:
$$
\begin{cases}
\rho\,Q\,(v_{2x} - v_{1x}) = \Pi_{1x} + \Pi_{2x} + G_x + R_x \\[4pt]
\rho\,Q\,(v_{2y} - v_{1y}) = \Pi_{1y} + \Pi_{2y} + G_y + R_y
\end{cases}
$$
The two equations hold simultaneously for the unknown components $R_x$ and $R_y$.

Begin by drawing the control volume, numbering the sections, and choosing the axes. Find the velocities from continuity, $v_i = \dfrac{Q}{A_i}$, and the pressures from Bernoulli’s equation between the two sections. Resolve $\vec{\Pi}_1$ and $\vec{\Pi}_2$ into components, using inward-pointing unit normals. Include the appropriate weight component when the pipe axes do not lie in a horizontal plane. Solve for $R_x$ and $R_y$, then reverse their signs to find the force on the walls. Its magnitude is $\sqrt{R_x^2 + R_y^2}$. Specify its direction by an angle measured from a stated axis.
:::

:::richiamo{titolo="Bernoulli’s equation for real flow"}
For steady flow that is one-dimensional at sections $1$ and $2$, with $\alpha = 1$,
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} + \Delta H ,
$$
where $\Delta H \ge 0$ is the head loss between the two sections. See the chapter on Bernoulli’s theorem and total head.
:::

## Force on a pipe elbow

At an elbow the pressure forces at inlet and outlet act in different directions, giving a nonzero resultant. The anchors must balance the force the fluid exerts on the fitting.

::::teorema{#spinta-su-un-gomito titolo="Force on a pipe elbow"}
Consider an elbow of constant diameter $D$ in a horizontal plane, turning the flow through angle $\theta$. Let $Q$ be the discharge, $A$ the cross-sectional area, $v = \dfrac{Q}{A}$ the speed, and $p$ the pressure, which is the same at both sections when head losses in the elbow are neglected. The force the flow exerts on the elbow has magnitude
$$
F = 2\,(\rho\,Q\,v + p\,A)\,\sin\frac{\theta}{2}
$$
and acts outward from the bend along the bisector of the angle between the two cross-sectional planes.

The formula directly gives the force the elbow anchors must resist. For a $90^\circ$ elbow of diameter $D = 200\,\mathrm{mm}$ carrying $Q = 50\,\mathrm{L/s}$ at $p = 300\,\mathrm{kPa}$, we obtain $\rho Q v = 79.6\,\mathrm{N}$, $pA = 9.42\,\mathrm{kN}$, and a force $F = 2 \cdot 9.50 \cdot \sin 45^\circ = 13.4\,\mathrm{kN}$ at angle $45^\circ$ to the inlet axis.

::schema{nodi="A,0,0,-;B,3.2,0,-;C,3.2,3.2,-" condotte="A-B-C,0.6" tratteggi="0.9,-0.6 0.9,0.6;2.6,2.2 3.8,2.2" forze="0.9 0,1.1,0,Π_1;3.2 2.2,0,-1.1,Π_2;2.4 1,1.2,-1.2,F" etichette="0.72,0.95,1;3.98,2.2,2" riferimento=0 titolo="At the $90^\circ$ elbow the pressure forces at the inlet and outlet sections point into the control volume. The force $F$ on the elbow points toward the outside of the bend"}

:::dimostrazione
Choose the $x$-axis along the inlet velocity and orient the $y$-axis so that the outlet velocity has components $(v\cos\theta,\;v\sin\theta)$. The diameter is constant, so continuity gives the same speed $v$ at both sections.

The pressure forces point into the control volume, giving $\vec{\Pi}_1 = pA\,(1,\,0)$ and $\vec{\Pi}_2 = -pA\,(\cos\theta,\;\sin\theta)$. The elbow is in a horizontal plane, so weight drops out of the two component equations. Resolving the momentum equation gives
$$
\begin{cases}
\rho Q\,(v\cos\theta - v) = pA - pA\cos\theta + R_x \\[4pt]
\rho Q\,v\sin\theta = -pA\sin\theta + R_y
\end{cases}
$$
Setting $K = \rho Q v + pA$, the first equation gives $R_x = -K\,(1 - \cos\theta)$ and the second $R_y = K\sin\theta$. The force on the walls is $-\vec{R}$. Its components are $\big(K(1-\cos\theta),\;-K\sin\theta\big)$ and its magnitude is
$$
F = K\sqrt{(1-\cos\theta)^2 + \sin^2\theta} = K\sqrt{2 - 2\cos\theta} = 2K\sin\frac{\theta}{2} ,
$$
where the final step uses the identity $1 - \cos\theta = 2\sin^2\dfrac{\theta}{2}$. The ratio of its components is $\dfrac{-\sin\theta}{1-\cos\theta} = -\dfrac{1}{\tan\frac{\theta}{2}}$, so the force makes angle $-\left(90^\circ - \dfrac{\theta}{2}\right)$ with the $x$-axis. This is the outward bisector of the angle between the two section planes.
:::
::::

:::osservazione{#peso-relativo-dei-termini titolo="Which term dominates"}
In pressure pipes the term $pA$ is typically one or two orders of magnitude larger than $\rho Q v$, as the example values $9.42\,\mathrm{kN}$ and $79.6\,\mathrm{N}$ illustrate. The force on an elbow therefore depends primarily on operating pressure. An anchor block sized for momentum flux alone would be inadequate.

A free jet has zero gauge pressure along its boundary, leaving only the $\rho Q v$ term.
:::

:::osservazione{#curva-a-180 titolo="A 180° bend"}
For $\theta = 180^\circ$ the two end sections are parallel with opposing orientations, and the pressure forces $\vec{\Pi}_1$ and $\vec{\Pi}_2$ point in the same direction. If the head loss in the bend is significant, the two section pressures differ and the force on the bend is
$$
F = 2\,\rho\,Q\,v + (p_1 + p_2)\,A ,
$$
in the direction of the inlet velocity. Calculate the loss from the bend coefficient $\xi$ using $\Delta H = \xi\,\dfrac{v^2}{2g}$. Bernoulli’s equation then gives $p_2 = p_1 - \gamma\,\Delta H$ because diameter is constant and the two sections have the same elevation.
:::

## Reducers, nozzles, and diffusers

For a straight fitting with a change in diameter, the two sections are parallel and only the axial component of the momentum equation is needed.

::::teorema{#spinta-su-una-riduzione titolo="Force on a pipe reducer"}
Consider a straight horizontal pipe section whose area changes from $A_1$ to $A_2 < A_1$. The discharge is $Q$, the section pressures are $p_1$ and $p_2$, and the speeds are $v_1 = \dfrac{Q}{A_1}$ and $v_2 = \dfrac{Q}{A_2}$. The force the fluid exerts on the reducer acts in the direction of flow and has magnitude
$$
F = p_1 A_1 - p_2 A_2 - \rho\,Q\,(v_2 - v_1) .
$$

This is the force that tends to pull the reducer away from the pipe and must be carried by the joints. For a reduction from $300\,\mathrm{mm}$ to $200\,\mathrm{mm}$ with $Q = 150\,\mathrm{L/s}$ and $p_1 = 300\,\mathrm{kPa}$, Bernoulli’s equation gives $p_2 = 291\,\mathrm{kPa}$, and the force is $F = 11.7\,\mathrm{kN}$ downstream.

::schema{acqua="0,0.75 2.6,0.75 3.6,1.05 7,1.05 7,1.55 3.6,1.55 2.6,1.85 0,1.85" linee="0,0.75 2.6,0.75 3.6,1.05 7,1.05;0,1.85 2.6,1.85 3.6,1.55 7,1.55" frecce="0.9,1.3,2.1,1.3,v_1;5.1,1.3,6.5,1.3,v_2" tratteggi="1.6,0.5 1.6,2.1;5.8,0.8 5.8,1.8" etichette="1.6,2.4,1;5.8,2.1,2" riferimento=0 titolo="Control volume in a reducer, bounded by the upstream section $1$ and the downstream section $2$"}

:::dimostrazione
Choose the $x$-axis in the direction of flow. The pressure forces point into the control volume, so $\Pi_{1x} = p_1 A_1$ and $\Pi_{2x} = -p_2 A_2$. The pipe is horizontal, so weight has no component along $x$. The momentum equation gives
$$
\rho\,Q\,(v_2 - v_1) = p_1 A_1 - p_2 A_2 + R_x ,
$$
hence $R_x = \rho Q (v_2 - v_1) - p_1 A_1 + p_2 A_2$. The force on the walls is $-R_x$, giving the stated expression. Since $A_1 > A_2$ and the pressures are of similar magnitude, $p_1 A_1 - p_2 A_2$ is positive and larger than the momentum term. The force therefore acts downstream.
:::
::::

:::osservazione{#ugello titolo="Nozzle discharging to the atmosphere"}
A nozzle that discharges into air has zero outlet gauge pressure, so $\vec{\Pi}_2$ vanishes. The force on the nozzle is then
$$
F = p_1 A_1 - \rho\,Q\,(v_2 - v_1) ,
$$
acting downstream. The flange bolts must resist this force. First find the discharge from Bernoulli’s equation between the upstream pipe section and the outlet, where the head relative to the outlet datum consists only of velocity head.
:::

:::osservazione{#diffusore titolo="Diffuser"}
A diffuser has a gradually increasing cross section and converts velocity head to pressure head. As velocity decreases, Bernoulli’s equation predicts a downstream pressure rise. The local loss is $\Delta H = \xi\,\dfrac{(v_1 - v_2)^2}{2g}$, with $\xi$ determined experimentally as a function of the opening angle. For angles from $7^\circ$ to $10^\circ$, $\xi$ ranges from $0.15$ to $0.30$.

Both area and pressure increase in the diffuser, so $p_2 A_2$ exceeds $p_1 A_1$ and the force on the diffuser acts **upstream**, opposite to the force on a reducer.
:::

:::osservazione{#brusco-allargamento titolo="Sudden expansion"}
At an abrupt expansion from $A_1$ to $A_2$, flow separates at the edge and a recirculation zone occupies the annular area $A_2 - A_1$. Measurements indicate that pressure over this annulus is close to $p_1$. Under this assumption, the total pressure force at the upstream face of the control volume is $p_1 A_2$. The axial momentum equation becomes
$$
\rho\,Q\,(v_2 - v_1) = (p_1 - p_2)\,A_2 .
$$
The axial force on the annulus is therefore $p_1\,(A_2 - A_1)$, acting upstream. Combining this relation with Bernoulli’s equation gives the Borda–Carnot expansion loss, discussed in the chapter on distributed and local head losses.
:::

:::osservazione{#biforcazioni titolo="Junctions and flow splits"}
At a junction dividing discharge $Q_1$ between branches $Q_2$ and $Q_3$, the outgoing momentum flux is the sum of their contributions, so the integral momentum equation is
$$
\rho\,(Q_2\vec{v}_2 + Q_3\vec{v}_3) - \rho\,Q_1\vec{v}_1 = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{\Pi}_3 + \vec{G} + \vec{R} ,
$$
with one pressure force for each flow section, directed into the volume. This form applies to any number of sections, with junction continuity requiring $Q_1 = Q_2 + Q_3$.
:::

## Free jets

For a free jet in air, gauge pressure is zero on its boundary and at all sections. The pressure forces $\vec{\Pi}$ vanish and only momentum flux remains.

::::teorema{#getto-su-piastra-normale titolo="Force of a jet on a flat plate perpendicular to the flow"}
A free jet of area $A$, speed $v$, and discharge $Q = A\,v$ strikes a fixed flat plate perpendicular to its axis, splitting into sheets that flow along the plate. Neglecting the weight of fluid in the control volume, the force the jet exerts on the plate acts in the jet direction and is
$$
S = \rho\,Q\,v = \rho\,A\,v^2 .
$$

This expression gives the force on a deflector or vane struck normally by a jet and the force needed to hold the plate in place. For a jet of diameter $40\,\mathrm{mm}$ and speed $10\,\mathrm{m/s}$, we obtain $Q = 12.6\,\mathrm{L/s}$ and $S = 126\,\mathrm{N}$.

::schema{acqua="0,1.1 4.3,1.1 4.3,1.5 0,1.5;4.1,1.5 4.3,1.5 4.3,3 4.1,3;4.1,1.1 4.3,1.1 4.3,-0.4 4.1,-0.4" solidi="4.3,-0.6 4.7,-0.6 4.7,3.2 4.3,3.2" frecce="0.5,1.3,1.7,1.3,v" forze="6 1.3,1.3,0,S" riferimento=0 titolo="Jet striking a flat plate perpendicular to its axis. The force $S$ is $\rho Q v$"}

:::dimostrazione
Choose a control volume enclosing the end of the jet and the two sheets. Place the inlet section $1$ normal to the jet and the outlet sections across the sheets. Take the $x$-axis along the jet.

The entire boundary is in contact with air or with the plate. Gauge pressure at every flow section is zero, so the pressure forces $\vec{\Pi}$ vanish. The sheets leave parallel to the plate and perpendicular to $x$, so their momentum has no component along $x$. Weight is neglected by assumption. The momentum equation along $x$ gives
$$
0 - \rho\,Q\,v = R_x ,
$$
or $R_x = -\rho Q v$. The force the jet exerts on the plate is $-R_x = \rho Q v$, in the direction of the incoming jet.
:::
::::

::::teorema{#getto-su-piastra-inclinata titolo="Jet striking an inclined flat plate"}
A free jet of discharge $Q$ and speed $v$ strikes a fixed, smooth, flat plate at angle $\alpha$ to its plane, then splits into two sheets flowing in opposite directions along the plate. If plate friction and weight are negligible, both sheets retain the jet speed $v$. The force on the plate is normal to it and equals
$$
F = \rho\,Q\,v\,\sin\alpha ,
$$
and the two discharges are
$$
Q_1 = \frac{Q}{2}\,(1 + \cos\alpha) ,
\qquad
Q_2 = \frac{Q}{2}\,(1 - \cos\alpha) .
$$

The two discharges describe how the jet divides. They are easy to measure in the laboratory, providing an experimental check on the momentum balance. For $\alpha = 90^\circ$ we recover $F = \rho Q v$ and $Q_1 = Q_2 = \dfrac{Q}{2}$.

::schema{acqua="0,1 3.65,1 4.35,1.4 0,1.4;4.35,1.40 5.65,2.15 5.51,2.38 4.21,1.63;3.65,1.00 2.92,0.58 2.86,0.68 3.59,1.10" solidi="2.98,0.27 5.75,1.87 5.60,2.12 2.83,0.53" frecce="0.6,1.2,1.8,1.2,v" forze="5.65 0.08,0.75,-1.30,F" riferimento=0 titolo="Jet striking a plate inclined at $\alpha$ to the jet axis. The force is perpendicular to the plate"}

:::dimostrazione
Take the $\xi$-axis parallel to the plate, in the direction of the sheet carrying the greater discharge, and the $\eta$-axis normal to the plate. The control volume encloses the end of the jet and both sheets of water. The gauge pressure is zero everywhere on its boundary, so the pressure forces on the inlet and outlet sections vanish.

Because the plate is smooth, its force on the fluid is normal to the plate and has no component along $\xi$. The momentum equation along $\xi$ then gives
$$
\rho\,Q_1\,v - \rho\,Q_2\,v = \rho\,Q\,v\cos\alpha ,
$$
because the incoming velocity makes angle $\alpha$ with the plate. Canceling $\rho v$ gives $Q_1 - Q_2 = Q\cos\alpha$. Together with continuity, $Q_1 + Q_2 = Q$, this gives the system
$$
\begin{cases}
Q_1 + Q_2 = Q \\[4pt]
Q_1 - Q_2 = Q\cos\alpha
\end{cases}
$$
whose solution gives the stated discharges. Resolving along $\eta$ instead gives
$$
0 - \big(-\rho\,Q\,v\sin\alpha\big) = R_\eta ,
$$
because the outgoing sheets travel parallel to the plate, with no component along $\eta$, while the incoming velocity has component $-v\sin\alpha$. Thus $R_\eta = \rho Q v \sin\alpha$, and the force on the plate has magnitude $\rho Q v \sin\alpha$ and acts normal to the plate.
:::
::::

::::teorema{#getto-su-una-pala titolo="Jet deflected by a stationary vane"}
A free jet of discharge $Q$ and speed $v$ enters a fixed vane and leaves at angle $\theta$ to its inlet direction. If friction is negligible, the outlet speed remains $v$ and the force the jet exerts on the vane has components
$$
F_x = \rho\,Q\,v\,(1 - \cos\theta) ,
\qquad
F_y = \rho\,Q\,v\,\sin\theta ,
$$
and magnitude $F = 2\,\rho\,Q\,v\,\sin\dfrac{\theta}{2}$.

The greatest deflection occurs at $\theta = 180^\circ$ and gives $F = 2\rho Q v$, twice the force on a flat plate normal to the jet. This is why Pelton turbine buckets have a double-cup shape. To allow for friction, take $v_2 = k\,v$ with $k$ slightly below $1$. The resulting force is $F_x = \rho Q v\,(1 - k\cos\theta)$.

::schema{acqua="0,1 3.6,1 3.6,1.4 0,1.4;3.60,1.00 3.88,1.03 4.14,1.13 4.37,1.28 4.56,1.48 4.70,1.72 4.78,1.99 4.80,2.27 4.75,2.54 4.64,2.80 4.29,2.60 4.37,2.43 4.40,2.25 4.39,2.06 4.33,1.88 4.24,1.72 4.11,1.59 3.96,1.49 3.78,1.42 3.60,1.40" solidi="3.54,1.00 3.84,1.02 4.12,1.12 4.37,1.28 4.57,1.50 4.72,1.76 4.79,2.05 4.79,2.35 4.72,2.64 4.57,2.91 4.80,3.07 4.98,2.75 5.07,2.39 5.07,2.02 4.98,1.66 4.80,1.34 4.55,1.07 4.24,0.87 3.89,0.75 3.52,0.72" frecce="0.6,1.2,1.8,1.2,v_1;4.52,2.61,3.97,3.57,v_2" forze="5.5 0.1,1.3,-0.75,F" riferimento=0 titolo="Fixed vane deflecting a jet through $\theta$. The force follows from the change in momentum"}

:::dimostrazione
Take the $x$-axis in the direction of the incoming jet. Since the jet is free, gauge pressure at the control surface is zero. Neglecting weight, the momentum equation reduces to $\rho Q (\vec{v}_2 - \vec{v}_1) = \vec{R}$.

The inlet velocity is $\vec{v}_1 = v\,(1,\,0)$ and the outlet velocity is $\vec{v}_2 = v\,(\cos\theta,\;\sin\theta)$, so
$$
\begin{cases}
R_x = \rho\,Q\,v\,(\cos\theta - 1) \\[4pt]
R_y = \rho\,Q\,v\,\sin\theta
\end{cases}
$$
The force on the vane is $-\vec{R}$ and therefore has the stated components. Its magnitude is $\rho Q v \sqrt{(1-\cos\theta)^2 + \sin^2\theta} = 2\rho Q v \sin\dfrac{\theta}{2}$, by the same calculation as for the elbow.
:::
::::

## Force on a gate in open-channel flow

In open-channel flow, the flow sections here are vertical and their pressure distribution is hydrostatic. Thus $\vec{\Pi}$ are the hydrostatic forces at the two sections.

::::teorema{#spinta-su-una-paratoia titolo="Force on a flat gate in a rectangular channel"}
Consider a rectangular channel of width $b$ with a horizontal bed carrying discharge $Q$. A vertical flat gate changes the flow depth from $h_1$ upstream to $h_2 < h_1$ downstream. Let $v_1 = \dfrac{Q}{b\,h_1}$ and $v_2 = \dfrac{Q}{b\,h_2}$ be the mean velocities. Neglecting bed resistance over this reach, the force exerted by the flow on the gate acts downstream and equals
$$
S = \frac{\gamma\,b\,h_1^2}{2} - \frac{\gamma\,b\,h_2^2}{2} - \rho\,Q\,(v_2 - v_1) .
$$

The gate mechanism must resist this force. It is less than the upstream hydrostatic force alone because some of that force accelerates the flow. When discharge is unknown, find it from Bernoulli’s equation between the two sections, since head loss beneath the gate is small.

::schema{acqua="0,0 3,0 3,2.4 0,2.4;3,0 3.3,0 3.3,0.5 3,0.5;3.3,0 8,0 8,0.5 3.3,0.5" solidi="0,-0.5 8,-0.5 8,0 0,0;3,0.5 3.3,0.5 3.3,3.4 3,3.4" pelo="0,3,2.4,p_a;3.3,8,0.5" quote="0 0,0 2.4,h_1,-0.9" frecce="0.6,1.1,1.8,1.1,v_1;4.4,0.25,5.6,0.25,v_2" etichette="2,2.8,1;5.2,1.3,2;7.4,0.95,h_2" riferimento=0 titolo="Flat gate in a rectangular channel. The control volume extends from upstream section $1$ to downstream section $2$"}

:::dimostrazione
Choose the control volume between section $1$ upstream and section $2$ downstream of the gate, where flow is one-dimensional, and take the $x$-axis in the flow direction.

Pressure on section $1$ is hydrostatic. On a vertical rectangle of width $b$ and depth $h_1$ the resultant is $\Pi_1 = \gamma\,\dfrac{h_1}{2}\,b\,h_1 = \dfrac{\gamma b h_1^2}{2}$, directed downstream because the inward normal points downstream. Likewise the downstream force is $\Pi_2 = \dfrac{\gamma b h_2^2}{2}$, directed upstream.

The bed is horizontal and weight is vertical, so it has no component along $x$. Bed resistance is neglected, leaving the gate force $R_x$ on the fluid as the only wall force with a component along $x$. The momentum equation along $x$ gives
$$
\rho\,Q\,(v_2 - v_1) = \frac{\gamma b h_1^2}{2} - \frac{\gamma b h_2^2}{2} + R_x ,
$$
This gives a negative $R_x$, meaning the gate acts upstream on the fluid. The force $S = -R_x$ on the gate is the stated expression.
:::
::::

:::osservazione{#paratoia-e-spinta-idrostatica titolo="Comparison with the hydrostatic force"}
If the water were at rest on both sides, the net force would be the difference between the two hydrostatic forces, $\dfrac{\gamma b (h_1^2 - h_2^2)}{2}$. For flowing water subtract $\rho Q (v_2 - v_1)$. This term is positive because the flow accelerates, so the net force is smaller.

For a channel of width $3\,\mathrm{m}$ with $h_1 = 2.40\,\mathrm{m}$ and $h_2 = 0.50\,\mathrm{m}$, Bernoulli’s equation gives the discharge $Q = 9.36\,\mathrm{m^3/s}$. The hydrostatic forces differ by $81.1\,\mathrm{kN}$, and the momentum term is $46.3\,\mathrm{kN}$. The resulting force $34.8\,\mathrm{kN}$ on the gate is less than half the upstream hydrostatic force $84.8\,\mathrm{kN}$.
:::

## Energy and momentum

The two balance equations in hydraulics answer different questions and can be used together for the same flow.

:::osservazione{#energia-e-quantita-di-moto titolo="Two balances for the same control volume"}
Bernoulli’s equation is a scalar energy balance relating elevations, pressures, and speeds. Applying it between two sections requires the head loss $\Delta H$. The integral momentum equation is a vector force balance that also includes wall reaction and weight. It remains valid even with substantial dissipation because the momentum balance continues to hold when mechanical energy is lost.

The two balances are often applied in sequence. Bernoulli’s equation gives the required velocities and pressures, and the momentum balance then gives the force. For a nozzle, for example, Bernoulli’s equation gives the discharge from the pipe pressure, and the momentum balance gives the force on the flange bolts.
:::

:::attenzione
The momentum equation alone does not determine head loss, and Bernoulli’s equation alone does not determine the wall force. Each contains unknowns absent from the other.

At a sudden expansion, applying the two equations between the same sections illustrates the effect of neglecting a loss. The momentum equation with the assumed annular pressure gives $\dfrac{p_2 - p_1}{\gamma} = \dfrac{v_2\,(v_1 - v_2)}{g}$, whereas a lossless Bernoulli calculation would give $\dfrac{p_2 - p_1}{\gamma} = \dfrac{v_1^2 - v_2^2}{2g}$. The difference is the Borda–Carnot head loss $\dfrac{(v_1 - v_2)^2}{2g}$, which for an expansion from $200\,\mathrm{mm}$ to $300\,\mathrm{mm}$ with $Q = 90\,\mathrm{L/s}$ is $0.129\,\mathrm{m}$.
:::
