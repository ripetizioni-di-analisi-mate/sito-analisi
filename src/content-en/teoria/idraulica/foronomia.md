---
titolo: "Discharge through orifices and over weirs"
sommario: "Discharge through a sharp-edged orifice, the vena contracta, flow coefficients, and large orifices. Applications include flow beneath a gate, submerged outlets, tanks draining under falling head, sharp-crested and broad-crested weirs, nozzles, and jet power."
---

## Orifices and the vena contracta

Discharge through an opening in the wall of a tank or channel can be determined with the upstream head as the only hydraulic input.

:::definizione{#luce titolo="Orifice"}
An **opening** in the side or bottom of a container allows liquid to discharge into the atmosphere or into another container. The opening acts as *an orifice under head* when its entire perimeter lies below the upstream free surface. It acts as *a weir* when the free surface intersects the opening, so the flowing liquid has a free surface exposed to the atmosphere. A wall is *thin* when its thickness is less than about half the smaller opening dimension. In this case the liquid touches only the upstream edge. The wall is *thick* if it is thicker, allowing the jet to reattach to the wall. Discharge from an orifice is *free* if it issues into the atmosphere and *submerged* if it enters a second container below its free surface.
:::

:::definizione{#vena-contratta titolo="Vena contracta"}
Fluid approaches the orifice from different directions. The paths are not parallel to its axis, so the jet continues to contract after it leaves the wall. The cross section where contraction ends and the paths become parallel is called the **vena contracta**. Measurements place it about half the smaller orifice dimension downstream of the wall. At this section the paths are straight and parallel, so the pressure distribution across it is hydrostatic. Because the surrounding medium is the atmosphere, gauge pressure is taken as zero throughout the vena contracta. These two properties are used to calculate discharge.

::schema{solidi="-0.3,-0.4 5.3,-0.4 5.3,0 -0.3,0;-0.3,0 0,0 0,4.2 -0.3,4.2;5,0 5.3,0 5.3,1.15 5,1.15;5,1.65 5.3,1.65 5.3,4.2 5,4.2" acqua="0,0 5,0 5,3.8 0,3.8;5,1.15 5.6,1.24 7,1.2 7,1.5 5.6,1.56 5,1.65" pelo="0,5,3.8,free surface" tratteggi="5.6,0.9 5.6,1.9" frecce="6.1,1.37,6.9,1.37,v_c" quote="5 1.4,5 3.8,h,-0.7" etichette="6.5,2.1,vena contracta" titolo="Sharp-edged orifice below the free surface. The jet contracts to its narrowest section about half an orifice dimension downstream of the wall, where the gauge pressure is zero"}
:::

:::definizione{#coefficienti-di-efflusso titolo="Contraction, velocity, and discharge coefficients"}
Let $A$ denote the orifice area, $A_c$ the area at the vena contracta, $v_c$ the mean velocity there, and $h$ the head at the orifice centroid, measured down from the upstream free surface. The **coefficient of contraction**, **velocity coefficient**, and **discharge coefficient** are defined by
$$
C_c = \frac{A_c}{A} ,
\qquad
C_v = \frac{v_c}{\sqrt{2 g h}} ,
\qquad
\mu = C_c\,C_v .
$$
The first measures contraction of the jet, the second the reduction in speed due to energy dissipation at the inlet, and the third combines both effects. For a sharp-edged orifice in a thin wall all three are less than $1$ and are determined by laboratory measurements. The coefficients satisfy $\mu = C_c C_v$, so two determine the third. A test measuring the discharge and the diameter of the vena contracta therefore also determines $C_v$.
:::

## Discharge through a small orifice

:::richiamo{titolo="Bernoulli’s equation for a real fluid"}
For steady flow of an incompressible fluid between two sections with straight, parallel streamlines and correction factor $\alpha = 1$,
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} + \Delta H ,
$$
where $\Delta H \geq 0$ is the head loss between the upstream and downstream sections. See the chapter on Bernoulli’s equation and total head.
:::

::::teorema{#portata-di-una-luce titolo="Discharge through a small orifice under head"}
Consider an orifice of area $A$ in the thin vertical wall of a constant-head tank, discharging into the atmosphere. Let $h$ be the head at the orifice centroid and assume that its vertical dimension is small compared with $h$. The discharge is then
$$
Q = \mu\,A\,\sqrt{2 g h} .
$$
With $\mu$ taken from a table, the formula gives the discharge for a given orifice. Conversely, a measured discharge gives the coefficient of the orifice under test. For a circular orifice of diameter $D = 50\,\mathrm{mm}$ with $h = 1.80\,\mathrm{m}$ and $\mu = 0.61$, the results are $A = 1.96 \cdot 10^{-3}\,\mathrm{m^2}$, $\sqrt{2gh} = 5.94\,\mathrm{m/s}$, and $Q = 7.12\,\mathrm{L/s}$.

:::dimostrazione
Apply Bernoulli’s equation between the free surface and the vena contracta, where gauge pressure is zero. Then use the two coefficients to convert velocity into discharge.

Choose the horizontal plane through the orifice centroid as the elevation datum. Take section $1$ at the tank free surface and section $2$ at the vena contracta. At section $1$, $z_1 = h$. Also $p_1 = 0$ because the surface is exposed to the atmosphere, and $v_1 = 0$ because the level is constant and the tank area is much larger than the orifice area. The total upstream head is therefore $H_1 = h$. At the vena contracta the gauge pressure is zero. Since the orifice is small, take $z_2 = 0$ throughout this section and use the mean velocity $v_c$ at every point. It follows that $H_2 = \dfrac{v_c^2}{2g}$.

Bernoulli’s equation between the two sections gives
$$
h = \frac{v_c^2}{2g} + \Delta H .
$$
Write the loss as a fraction of the head by setting $\Delta H = \left(1 - C_v^2\right) h$ with $0 < C_v < 1$, since $0 \leq \Delta H < h$. Substitution gives $\dfrac{v_c^2}{2g} = C_v^2\,h$, or
$$
v_c = C_v\sqrt{2 g h} ,
$$
which is the definition of the velocity coefficient. At the vena contracta the velocity is uniform and normal to the section, so the discharge equals the section area times the velocity:
$$
Q = A_c\,v_c = C_c A \cdot C_v \sqrt{2 g h} = \mu\,A\,\sqrt{2 g h} .
$$
:::
::::

:::osservazione{#valori-dei-coefficienti titolo="Experimental values of the coefficients"}
The three coefficients are measured experimentally. They depend on orifice shape, the ratio of head to orifice size, and the Reynolds number. For a sharp-edged circular orifice in a thin wall under a head of several diameters, measurements put $C_c$ between $0.61$ and $0.64$ and $C_v$ between $0.96$ and $0.99$. Thus $\mu$ lies between $0.59$ and $0.63$. Unless otherwise specified, use $\mu = 0.61$ in calculations. A rounded inlet suppresses contraction, giving $C_c = 1$ and $\mu = C_v \approx 0.97$. A tube projecting into the tank increases contraction and brings $\mu$ to about $0.50$. The coefficients remain essentially constant while the jet is turbulent, corresponding to Reynolds numbers above about $10^4$ at the vena contracta.
:::

:::osservazione{#traiettoria-del-getto titolo="Jet trajectory and measurement of the velocity coefficient"}
Beyond the vena contracta the jet is acted on only by gravity if air resistance is neglected, so its particles follow parabolas. Place the origin at the center of the vena contracta, with $x$ horizontal and $y$ pointing down. Each particle moves like a projectile launched horizontally at speed $v_c$:
$$
\begin{cases}
x = v_c\,t \\[4pt]
y = \dfrac{1}{2}\,g\,t^2
\end{cases}
$$
Eliminating time gives $y = \dfrac{g\,x^2}{2\,v_c^2}$, so
$$
v_c = x\,\sqrt{\frac{g}{2\,y}} .
$$
Measuring the coordinates of a point on the jet thus gives $v_c$. If the head is known, it also gives the velocity coefficient $C_v = \dfrac{v_c}{\sqrt{2gh}}$. This is the simplest laboratory determination of $C_v$ because the diameter of the vena contracta need not be measured.
:::

## Large orifices

When the orifice height is comparable to the head, the theoretical velocity $\sqrt{2gy}$ changes appreciably between its top and bottom. Discharge must therefore be integrated over the height.

::::teorema{#luce-di-grandi-dimensioni titolo="Discharge through a large rectangular orifice"}
Consider a sharp-edged rectangular orifice of width $b$ in a thin vertical wall. Its upper and lower edges lie at depths $h_1$ and $h_2$ below the upstream free surface. Let $\mu$ be its discharge coefficient. Then
$$
Q = \frac{2}{3}\,\mu\,b\,\sqrt{2g}\,\left(h_2^{\frac{3}{2}} - h_1^{\frac{3}{2}}\right) .
$$
The formula applies to bottom gates and tall openings in dams, for which the small-orifice approximation is insufficiently accurate. For $b = 1.00\,\mathrm{m}$, $h_1 = 0.50\,\mathrm{m}$, $h_2 = 1.50\,\mathrm{m}$, and $\mu = 0.62$ the result is $Q = 2.72\,\mathrm{m^3/s}$, compared with $2.75\,\mathrm{m^3/s}$ from the small-orifice formula.

::schema{solidi="-3.3,-0.4 0.3,-0.4 0.3,0 -3.3,0;-3.3,0 -3,0 -3,4.4 -3.3,4.4;0,0 0.3,0 0.3,1 0,1;0,3 0.3,3 0.3,4.4 0,4.4" acqua="-3,0 0,0 0,4 -3,4" pelo="-3,0,4,free surface" frecce="0,3,0.6,3,;0,2.5,0.74,2.5,;0,2,0.85,2,;0,1.5,0.95,1.5,;0,1,1.04,1,√(2gy)" quote="0 3,0 4,h_1,-0.5;0 1,0 4,h_2,-1.4" titolo="Large orifice. The theoretical velocity $\sqrt{2 g y}$ increases with depth $y$, so the discharge is found by adding the contributions of horizontal strips"}

:::dimostrazione
Divide the opening into horizontal strips thin enough to treat as small orifices, then add their contributions.

The strip between depths $y$ and $y + dy$ has area $b\,dy$. To first order its centroid head is $y$, so the flow through it is
$$
dQ = \mu\,b\,\sqrt{2 g y}\;dy .
$$
Use the same $\mu$ for all strips because contraction depends on the shape of the edge rather than on its depth. Integrating between the depths of the two edges gives
$$
Q = \int_{h_1}^{h_2} \mu\,b\,\sqrt{2 g y}\;dy
= \mu\,b\,\sqrt{2g}\,\left[\frac{2}{3}\,y^{\frac{3}{2}}\right]_{h_1}^{h_2}
= \frac{2}{3}\,\mu\,b\,\sqrt{2g}\,\left(h_2^{\frac{3}{2}} - h_1^{\frac{3}{2}}\right) .
$$
:::
::::

:::osservazione{#errore-luce-piccola titolo="When an orifice can be treated as small"}
Let $a = h_2 - h_1$ be the orifice height, $h_G = \dfrac{h_1 + h_2}{2}$ the centroid head, and $\varepsilon = \dfrac{a}{2\,h_G}$. The ratio of the exact discharge to that given by the small-orifice approximation is
$$
\frac{Q}{\mu\,b\,a\,\sqrt{2 g h_G}}
= \frac{(1 + \varepsilon)^{\frac{3}{2}} - (1 - \varepsilon)^{\frac{3}{2}}}{3\,\varepsilon}
= 1 - \frac{\varepsilon^2}{24} - \frac{\varepsilon^4}{128} - \dots
$$
so the small-orifice formula overestimates the discharge by about $\dfrac{\varepsilon^2}{24}$. If the height is half the centroid head, $\varepsilon = 0.25$ and the discrepancy is $0.26\%$. If the height is one and a half times the head, $\varepsilon = 0.75$ and the discrepancy exceeds $2\%$. For heights below the centroid head, the discrepancy stays near one percent and the simpler formula is used.
:::

## Flow under a gate and through submerged orifices

:::definizione{#efflusso-sotto-paratoia titolo="Flow under a flat sluice gate"}
A vertical flat gate raised $a$ above the bottom of a rectangular channel of width $b$ leaves an opening of area $A = b\,a$. When the downstream free surface stays below the lower edge of the gate, discharge is **free** and is given by
$$
Q = \mu\,b\,a\,\sqrt{2 g h} ,
$$
where $h$ is the upstream depth measured from the channel bottom. The gate discharge coefficient $\mu$ lies between $0.55$ and $0.60$ for $\dfrac{a}{h}$ less than $\dfrac{1}{3}$. The jet contracts vertically downstream of the gate to a depth $a_c = C_c\,a$, with $C_c$ about $0.61$. At that section the Froude number exceeds one, so the flow is supercritical and connects to the downstream flow through a hydraulic jump. See the chapter on steady-flow profiles and the hydraulic jump.

::schema{solidi="0,-0.35 6,-0.35 6,0 0,0;2.9,0.5 3.1,0.5 3.1,2.9 2.9,2.9" acqua="0,0 2.9,0 2.9,2.2 0,2.2;2.9,0 3.1,0.5 3.5,0.33 6,0.28 6,0 3.1,0" pelo="0,2.9,2.2,;3.9,5.1,0.28," tratteggi="3.5,0 3.5,0.75" frecce="3.9,0.14,4.8,0.14,v_c" etichette="5.3,0.6,a_c" quote="3 0,3 0.5,a,-0.45;0 0,0 2.2,h,-0.5" titolo="Free discharge beneath a flat gate. The jet contracts to a depth $a_c = C_c\,a$"}
:::

::::teorema{#luce-rigurgitata titolo="Discharge through a submerged orifice"}
Consider an orifice of area $A$ and discharge coefficient $\mu$ in the wall separating two containers. It is submerged on both sides. Let $\Delta h$ be the difference between the free-surface elevations. Then
$$
Q = \mu\,A\,\sqrt{2 g\,\Delta h} .
$$
The expression has the same form as for free discharge, with the difference in free-surface elevations replacing the head at the centroid. It applies to openings between tanks, submerged sluice gates, and passages connecting basins.

::schema{solidi="-0.35,-0.4 9.35,-0.4 9.35,0 -0.35,0;-0.35,0 0,0 0,3.6 -0.35,3.6;9,0 9.35,0 9.35,3.6 9,3.6;4.4,0 4.6,0 4.6,0.8 4.4,0.8;4.4,1.2 4.6,1.2 4.6,3.6 4.4,3.6" acqua="0,0 4.4,0 4.4,3 0,3;4.6,0 9,0 9,1.8 4.6,1.8;4.4,0.8 4.6,0.8 4.6,1.2 4.4,1.2" pelo="0,4.4,3,;4.6,9,1.8," tratteggi="4.6,3 7.6,3" frecce="4.1,1,5.2,1,v_c" quote="7 1.8,7 3,Δh,0.6" titolo="Discharge through a submerged orifice depends on the difference $\Delta h$ between the two free-surface elevations"}

:::dimostrazione
Apply Bernoulli’s equation between point $1$ on the upstream free surface and the vena contracta $2$ just downstream of the opening. Use the horizontal plane through the orifice centroid as datum.

The paths at the vena contracta are straight and parallel, so the pressure distribution across this section is hydrostatic. The jet enters downstream liquid that is nearly at rest near the orifice, so pressure at the vena contracta is the downstream hydrostatic pressure. If $h_v$ is the downstream free-surface elevation above the orifice centroid, then $\dfrac{p_2}{\gamma} = h_v$ and $z_2 = 0$. Let $h_m$ be the upstream free-surface head. Following the same steps as for free discharge, Bernoulli’s equation gives
$$
h_m = h_v + \frac{v_c^2}{2g} + \Delta H .
$$
Set $\Delta h = h_m - h_v$ and write the loss as $\Delta H = \left(1 - C_v^2\right)\Delta h$. This gives $v_c = C_v\sqrt{2 g\,\Delta h}$ and hence
$$
Q = A_c\,v_c = \mu\,A\,\sqrt{2 g\,\Delta h} .
$$
:::
::::

:::attenzione
For a submerged orifice the driving head is the *difference in elevation* between the two free surfaces. The depth below the upstream surface alone does not give the head.

If the free surfaces are $4.00\,\mathrm{m}$ and $2.50\,\mathrm{m}$ above the centroid of an orifice of area $A = 0.0314\,\mathrm{m^2}$ and coefficient $\mu = 0.60$, the results are $\Delta h = 1.50\,\mathrm{m}$ and $Q = 102\,\mathrm{L/s}$. Using $4.00\,\mathrm{m}$ would give $167\,\mathrm{L/s}$, the discharge that the same orifice would deliver into the atmosphere.
:::

## Draining a tank with a falling water level

:::richiamo{titolo="Separable differential equations"}
Consider $\dfrac{dh}{dt} = f(h)$ with $f$ continuous and nonzero on the interval of interest. Separate the variables and integrate from the initial instant at level $h_0$ to time $t$ at level $h$ to obtain
$$
t = \int_{h_0}^{h} \frac{ds}{f(s)} .
$$
See the chapter on differential equations in Mathematical Analysis 1.
:::

::::teorema{#svuotamento titolo="Time to drain a prismatic tank"}
Consider a prismatic tank of constant plan area $\Omega$ with no inflow. A bottom or side orifice has area $A$ and discharge coefficient $\mu$. Let $h$ be the head above its centroid. The time for the head to fall from $h_0$ to $h_1$, with $0 \leq h_1 < h_0$, is
$$
t = \frac{2\,\Omega\left(\sqrt{h_0} - \sqrt{h_1}\right)}{\mu\,A\,\sqrt{2g}} .
$$
Drain time varies directly with tank plan area and inversely with orifice area. For complete draining, set $h_1 = 0$, which gives $t = \dfrac{2\,\Omega\sqrt{h_0}}{\mu A \sqrt{2g}}$.

::schema{solidi="-0.3,0 0,0 0,4 -0.3,4;3,0 3.3,0 3.3,4 3,4;-0.3,-0.3 1.3,-0.3 1.3,0 -0.3,0;1.7,-0.3 3.3,-0.3 3.3,0 1.7,0" acqua="0,0 3,0 3,2.6 0,2.6;1.3,0 1.7,0 1.64,-1.4 1.36,-1.4" pelo="0,3,2.6," tratteggi="0,3.4 3,3.4" quote="3 0,3 2.6,h(t),0.6" etichette="1.5,3.6,h_0;1.5,-1.75,Q = μA√(2gh)" titolo="As the tank drains, the head on the orifice decreases with time, reducing the discharge"}

:::dimostrazione
Since the water level falls slowly, treat the flow as steady at each instant and write a volume balance for the tank.

The flow is *quasi-steady*. At any instant the orifice formula uses the instantaneous head $h$, so the discharge is $Q = \mu A \sqrt{2 g h}$. This assumption holds when the orifice area is much smaller than the tank plan area. The rate of fall of the free surface is then negligible compared with the orifice velocity, so the upstream velocity head remains negligible as in a constant-head tank.

During $dt$ a volume $Q\,dt$ leaves the orifice and the level drops by $-dh$, with $dh < 0$. The discharge volume equals the volume lost from the tank, so
$$
\Omega\,(-dh) = \mu\,A\,\sqrt{2 g h}\;dt .
$$
Separating variables and integrating between the two heads gives
$$
t = \frac{\Omega}{\mu A \sqrt{2g}}\int_{h_1}^{h_0} \frac{dh}{\sqrt{h}}
= \frac{\Omega}{\mu A \sqrt{2g}}\Big[\,2\sqrt{h}\,\Big]_{h_1}^{h_0}
= \frac{2\,\Omega\left(\sqrt{h_0} - \sqrt{h_1}\right)}{\mu A \sqrt{2g}} .
$$
:::
::::

:::osservazione{#portata-media-svuotamento titolo="Mean discharge while a tank drains"}
It follows that the mean discharge over the draining interval is the arithmetic mean of the initial and final discharges:
$$
Q_m = \frac{\Omega\left(h_0 - h_1\right)}{t}
= \frac{\mu A \sqrt{2g}\left(h_0 - h_1\right)}{2\left(\sqrt{h_0} - \sqrt{h_1}\right)}
= \frac{\mu A \sqrt{2g}\left(\sqrt{h_0} + \sqrt{h_1}\right)}{2}
= \frac{Q_0 + Q_1}{2} ,
$$
where $h_0 - h_1 = \left(\sqrt{h_0} - \sqrt{h_1}\right)\left(\sqrt{h_0} + \sqrt{h_1}\right)$ has been used. For complete draining $Q_m = \dfrac{Q_0}{2}$, so the time is twice the time required if discharge stayed at its initial value. This relation checks a drain-time calculation. The volume discharged divided by the time must equal the mean of the two end discharges.
:::

:::esempio{titolo="Draining a tank"}
A prismatic tank of plan area $\Omega = 10.0\,\mathrm{m^2}$ has a circular bottom orifice of diameter $D = 100\,\mathrm{mm}$ with $\mu = 0.60$. The initial water level is $h_0 = 2.50\,\mathrm{m}$ above the orifice centroid. This gives $A = 7.85 \cdot 10^{-3}\,\mathrm{m^2}$ and $\mu A \sqrt{2g} = 0.0209\,\mathrm{m^{5/2}/s}$, so
$$
t = \frac{2 \cdot 10.0 \cdot \sqrt{2.50}}{0.0209}\,\mathrm{s} = 1515\,\mathrm{s} \approx 25\,\mathrm{min} .
$$
The initial discharge is $Q_0 = 0.0209 \cdot \sqrt{2.50} = 33.0\,\mathrm{L/s}$ and the mean discharge is $16.5\,\mathrm{L/s}$, also obtained by dividing the volume $25.0\,\mathrm{m^3}$ by $1515\,\mathrm{s}$.
:::

:::osservazione{#travaso titolo="Transfer between two tanks"}
Consider two prismatic tanks of plan areas $\Omega_1$ and $\Omega_2$ connected by a submerged orifice of area $A$ and coefficient $\mu$. The difference $\Delta$ between the water levels decreases as the first level falls and the second rises. Over the interval $dt$,
$$
-d\Delta = \frac{Q\,dt}{\Omega_1} + \frac{Q\,dt}{\Omega_2} ,
\qquad
Q = \mu A \sqrt{2 g\,\Delta} .
$$
Separating variables and integrating gives
$$
t = \frac{2\left(\sqrt{\Delta_0} - \sqrt{\Delta_1}\right)}{\mu A \sqrt{2g}\left(\dfrac{1}{\Omega_1} + \dfrac{1}{\Omega_2}\right)} ,
$$
which reduces to the drain-time formula when the second tank is so large that its level stays constant, that is, for $\Omega_2 \to \infty$. The volume transferred as the difference in level falls from $\Delta_0$ to $\Delta_1$ is $V = \dfrac{\Omega_1\,\Omega_2}{\Omega_1 + \Omega_2}\left(\Delta_0 - \Delta_1\right)$. The first level drops by $\dfrac{V}{\Omega_1}$ and the second rises by $\dfrac{V}{\Omega_2}$. These changes add to the reduction in level difference.
:::

## Sharp-crested weirs

:::definizione{#stramazzo titolo="Weir"}
A **weir** is an opening with no upper boundary, or equivalently a sill over which liquid flows with its free surface exposed to the atmosphere. The upper edge of the sill is the *crest*, and the sheet of water flowing over it is the *nappe*. The **head over the weir**, $h$, is the height of the upstream free surface above the crest. It is measured several head lengths upstream, where the surface has not yet been drawn down by the flow. A weir is *sharp-crested* if the nappe touches the sill only at its upstream edge. The discharge then depends only on head, so a sharp-crested weir can measure flow in channels and laboratories.
:::

::::teorema{#stramazzo-rettangolare titolo="Discharge over a sharp-crested rectangular weir"}
Consider a rectangular sharp-crested weir in a thin vertical plate with a horizontal crest of width $b$, head $h$, and a ventilated nappe, so air can enter beneath the sheet of water. Then
$$
Q = \mu\,b\,h\,\sqrt{2 g h} ,
$$
where $\mu$ is the weir discharge coefficient, of order $0.42$. This is **Bazin’s formula**. It gives the discharge over a specified crest and is used in laboratories to measure flow from a single head reading. For $b = 1.00\,\mathrm{m}$, $h = 0.20\,\mathrm{m}$, and $\mu = 0.42$ it gives $Q = 0.166\,\mathrm{m^3/s}$.

::schema{solidi="0,-0.35 6,-0.35 6,0 0,0;2.9,0 3.1,0 3.1,1.5 2.9,1.5" acqua="0,0 2.9,0 2.9,2.1 0,2.1;2.9,2.1 3.3,2.0 3.7,1.6 3.95,1.05 4.1,0.35 4.15,0 3.65,0 3.6,0.55 3.4,1.1 3.2,1.42 3.1,1.5" pelo="0,2.9,2.1," tratteggi="2.0,2.1 4.6,2.1;2.0,1.5 4.6,1.5" quote="3 1.5,3 2.1,h,-0.55;3 0,3 1.5,p,-1.15" etichette="5.1,1.2,nappe" titolo="Sharp-crested rectangular weir. The head $h$ above the crest of height $p$ is measured upstream of the drawdown"}

:::dimostrazione
Repeat the large-orifice derivation, taking the top edge at the free surface, so $h_1 = 0$ and $h_2 = h$.

The strip between depths $y$ and $y + dy$ beneath the free surface contributes $dQ = \mu'\,b\,\sqrt{2 g y}\;dy$, hence
$$
Q = \mu'\,b\,\sqrt{2g}\int_0^{h} \sqrt{y}\;dy
= \frac{2}{3}\,\mu'\,b\,\sqrt{2g}\;h^{\frac{3}{2}}
= \frac{2}{3}\,\mu'\,b\,h\,\sqrt{2 g h} ,
$$
Setting $\mu = \dfrac{2}{3}\,\mu'$ gives the stated expression. The derivation explains the form of the expression, specifically its dependence on the $\dfrac{3}{2}$ power of the head. $\mu$ is measured because the nappe streamlines curve and the pressure distribution is not hydrostatic.
:::
::::

:::osservazione{#coefficiente-bazin titolo="Discharge coefficient for rectangular weirs"}
The coefficient $\mu$ is obtained from laboratory measurements. Bazin represented his measurements by
$$
\mu = 0.405 + \frac{0.003}{h} ,
$$
with $h$ in meters, heads between $0.05$ and $0.60\,\mathrm{m}$, and a high crest relative to the head. A second correction accounts for the crest height $p$ above the channel bed. For $h = 0.20\,\mathrm{m}$ the formula yields $\mu = 0.420$. If the weir is narrower than the channel, the nappe also contracts at the sides. Use Francis’s reduced width $b - 0.2\,h$ or a smaller tabulated coefficient.
:::

::::teorema{#stramazzo-triangolare titolo="Discharge over a triangular weir"}
Consider a sharp-crested triangular weir with its vertex downward, a vertical centerline, notch angle $\theta$, and head $h$ measured from the vertex. Then
$$
Q = \frac{8}{15}\,\mu\,\tan\frac{\theta}{2}\,\sqrt{2g}\;h^{\frac{5}{2}} .
$$
This is **Thomson’s formula**. For $\theta = 90^\circ$, that is, $\tan\dfrac{\theta}{2} = 1$, and $\mu = 0.60$, the usual expression is $Q = 1.42\,h^{\frac{5}{2}}$ with $Q$ in $\mathrm{m^3/s}$ and $h$ in meters. For $h = 0.15\,\mathrm{m}$ this gives $Q = 12.4\,\mathrm{L/s}$.

::schema{solidi="0,0 3,0 3,0.6 0.6,3 0,3;3,0 6,0 6,3 5.4,3 3,0.6" acqua="3,0.6 4.8,2.4 1.2,2.4" pelo="1.2,4.8,2.4," tratteggi="-0.5,0.6 3,0.6;-0.5,2.4 1.2,2.4" quote="0 0.6,0 2.4,h,-0.55" etichette="3,1.05,θ" titolo="Thomson V-notch weir viewed from downstream. The head $h$ is measured above the vertex, and the width of the opening increases with elevation"}

:::dimostrazione
At a depth $y$ below the surface, the opening has width $2\,(h - y)\tan\dfrac{\theta}{2}$ because the triangle sides start at the vertex at depth $h$. The strip between $y$ and $y + dy$ contributes
$$
dQ = 2\,\mu\,(h - y)\,\tan\frac{\theta}{2}\,\sqrt{2 g y}\;dy ,
$$
Integrating between $0$ and $h$ with $\displaystyle\int_0^h (h - y)\sqrt{y}\;dy = \frac{2}{3}h^{\frac{5}{2}} - \frac{2}{5}h^{\frac{5}{2}} = \frac{4}{15}h^{\frac{5}{2}}$ gives
$$
Q = 2\,\mu\,\tan\frac{\theta}{2}\,\sqrt{2g}\cdot\frac{4}{15}h^{\frac{5}{2}}
= \frac{8}{15}\,\mu\,\tan\frac{\theta}{2}\,\sqrt{2g}\;h^{\frac{5}{2}} .
$$
:::
::::

## Using weirs to measure discharge

:::osservazione{#sensibilita-stramazzi titolo="Weir selection and measurement sensitivity"}
Both formulas have the form $Q = k\,h^{n}$, with $n = \dfrac{3}{2}$ for the rectangular weir and $n = \dfrac{5}{2}$ for the triangular weir. Differentiation gives
$$
\frac{dQ}{Q} = n\,\frac{dh}{h} ,
$$
so a given error $dh$ in the head reading produces a smaller relative discharge error at a larger head. At the same discharge the triangular weir operates under a greater head, offsetting its larger exponent. At $Q = 85\,\mathrm{L/s}$ a Bazin weir with $b = 0.80\,\mathrm{m}$ and $\mu = 0.42$ requires $h = 0.148\,\mathrm{m}$, whereas a Thomson weir with $\theta = 90^\circ$ requires $h = 0.324\,\mathrm{m}$. A reading error of $1\,\mathrm{mm}$ therefore produces a discharge error of $1.0\%$ in the first case and $0.77\%$ in the second. This is why triangular weirs are preferred for small flows.

::grafico{f="1.860368*x^1.5;0.01417423*x^2.5" xmin=0 xmax=42 ymin=0 ymax=500 nomi="h,Q" punti="30,305.7,pieno;30,69.9,pieno" titolo="Rating curves with head $h$ in centimeters and discharge $Q$ in liters per second. The colored curve is for a rectangular weir with $b = 1.00\,\mathrm{m}$ and $\mu = 0.42$. The dashed curve is for a triangular weir with $\theta = 90^\circ$ and $\mu = 0.60$. At $h = 30\,\mathrm{cm}$ the discharges are $306\,\mathrm{L/s}$ and $69.9\,\mathrm{L/s}$"}
:::

:::attenzione
Measure the head upstream at a distance from the crest of at least four times the head. At the crest the flow has already drawn the surface down. A reading too close to the crest therefore underestimates the head.

For a Bazin weir with $b = 1.00\,\mathrm{m}$ and actual head $0.20\,\mathrm{m}$, the discharge is $0.166\,\mathrm{m^3/s}$. A reading of $0.17\,\mathrm{m}$ would give $0.130\,\mathrm{m^3/s}$, an error of $22\%$.
:::

## Broad-crested weirs and sills

:::richiamo{titolo="Critical depth"}
In a rectangular channel of width $b$ carrying discharge $Q$, the specific energy $E = h + \dfrac{Q^2}{2 g b^2 h^2}$ reaches a minimum at the critical depth
$$
h_c = \sqrt[3]{\frac{Q^2}{g\,b^2}} ,
$$
where the Froude number is $1$, the velocity is $\sqrt{g\,h_c}$, and $E_{\min} = \dfrac{3}{2}\,h_c$. See the chapter on open-channel flow and specific energy.
:::

::::teorema{#stramazzo-parete-grossa titolo="Discharge over a broad-crested weir"}
Consider a horizontal sill of width $b$ and crest length greater than about three times the head. The upstream free surface is $H$ above the crest and the approach velocity is negligible. If losses are negligible and the flow reaches critical depth at the crest, the discharge is
$$
Q = \left(\frac{2}{3}\right)^{\frac{3}{2}} b\,\sqrt{g}\;H^{\frac{3}{2}} = 0.385\,b\,H\,\sqrt{2 g H} .
$$
The coefficient $0.385$ matches the measured value for a sharp-edged sill. The empirical form $Q = \mu\,b\,H\sqrt{2 g H}$ is therefore also used, with $\mu$ between $0.35$ and $0.40$ depending on the shape of the crest edge. For $b = 1.50\,\mathrm{m}$ and $H = 0.40\,\mathrm{m}$, the results are $Q = 0.647\,\mathrm{m^3/s}$ and $h_c = 0.267\,\mathrm{m}$.

:::dimostrazione
The nappe reattaches to the crest, so the streamlines are straight and parallel and the flow has a rectangular section of width $b$ and depth $h$. With negligible losses and upstream velocity head, the specific energy relative to the crest is conserved and equals $E = H$.

The flow changes from subcritical to supercritical as it crosses the sill. The critical state, at which specific energy is least, therefore occurs at the outlet section. From $E_{\min} = \dfrac{3}{2}h_c$ and $E = H$ it follows that $h_c = \dfrac{2}{3}H$. At critical depth the velocity equals $\sqrt{g\,h_c}$, so
$$
Q = b\,h_c\sqrt{g\,h_c} = b\,\sqrt{g}\left(\frac{2}{3}H\right)^{\frac{3}{2}} .
$$
Comparison with $\mu\,b\,H\sqrt{2 g H}$ gives $\mu = \dfrac{1}{\sqrt{2}}\left(\dfrac{2}{3}\right)^{\frac{3}{2}} = 0.385$.
:::
::::

:::osservazione{#soglie titolo="Sills and low-head dams"}
A broad-crested sill spanning the full channel width sets the discharge from the upstream level alone, provided the downstream level is low enough for the sill to discharge freely. Such sills can therefore act as control sections in channels and as flowmeters in installations. Crest shape affects the coefficient. Sharp edges give $\mu \approx 0.385$, while a rounded entry reduces dissipation and brings $\mu$ closer to $0.40$. Shaped river weir profiles give still higher values. When the downstream level rises above the crest, the sill is *submerged*. The discharge then depends on the downstream level as well, so the sill ceases to act as a control.
:::

## Nozzles and jet power

::::teorema{#potenza-del-getto titolo="Power of a jet"}
Consider a jet of discharge $Q$ and uniform velocity $v$ at zero gauge pressure. Take the elevation datum through the jet axis. The flow power, the energy crossing a section per unit time, is
$$
P = \gamma\,Q\,\frac{v^2}{2g} = \frac{1}{2}\,\rho\,Q\,v^2 .
$$
Jet power is the maximum power that an impulse turbine or other hydraulic machine can receive from the jet. It is used to size hose nozzles and other nozzles in hydraulic installations.

:::dimostrazione
In the interval $dt$ a volume $Q\,dt$ of weight $\gamma\,Q\,dt$ passes through the section. Each unit weight carries energy equal to the total head, which for this jet is
$$
H = 0 + 0 + \frac{v^2}{2g} ,
$$
because the chosen datum gives zero elevation and the gauge pressure vanishes throughout the section. The energy crossing the section during $dt$ is therefore $\gamma\,Q\,dt\,\dfrac{v^2}{2g}$. Dividing by $dt$ gives the power. Equality with $\dfrac{1}{2}\rho\,Q\,v^2$ follows from $\gamma = \rho\,g$.
:::
::::

:::definizione{#ugello titolo="Nozzle"}
A **nozzle** is a converging fitting attached to the end of a pipe and shaped so the jet stays in contact with the wall up to the outlet. Contraction is suppressed, so $C_c = 1$ and the discharge coefficient equals the velocity coefficient $\mu = C_v$, which ranges from $0.96$ to $0.98$. If $H$ is the total head immediately upstream of the nozzle, measured relative to its outlet axis, the jet velocity and discharge are
$$
v = C_v\sqrt{2 g H} ,
\qquad
Q = C_v\,A\,\sqrt{2 g H} ,
$$
where $A$ is the outlet area. The ratio of jet power to available power $\gamma Q H$ is $C_v^2$. Thus a nozzle with $C_v = 0.97$ delivers $94\%$ of the flow power. Neglecting air resistance, an upward jet rises to a height $\dfrac{v^2}{2g} = C_v^2\,H$.

::schema{nodi="A,0,1.5;B,4,1.5" condotte="A-B,0.6,D" acqua="4.7,1.37 8,1.37 8,1.63 4.7,1.63" linee="4,1.8 4.7,1.63;4,1.2 4.7,1.37" energia="0,3.2 4,3.2 4.7,3.05 8,3.05" frecce="5.3,1.5,6.5,1.5,v" quote="4 1.5,4 3.2,H,-0.5" tratteggi="7.4,1.5 7.4,3.05" etichette="2,3.45,energy grade line;6.0,2.45,velocity head" riferimento=0 titolo="Nozzle at the end of a pipe. The total head $H$ becomes jet velocity head after the nozzle loss is deducted"}
:::

:::esempio{titolo="Power of a jet"}
A nozzle with outlet diameter $d = 30\,\mathrm{mm}$ and $C_v = 0.97$ receives flow with total head $H = 25.0\,\mathrm{m}$ relative to its axis. This gives
$$
v = 0.97\,\sqrt{2 \cdot 9.81 \cdot 25.0} = 21.5\,\mathrm{m/s} ,
\qquad
A = 7.07 \cdot 10^{-4}\,\mathrm{m^2} ,
\qquad
Q = 15.2\,\mathrm{L/s} ,
$$
and the jet power is
$$
P = \gamma\,Q\,\frac{v^2}{2g} = 9810 \cdot 0.0152 \cdot 23.5\,\mathrm{W} = 3.50\,\mathrm{kW} ,
$$
compared with the available power $3.72\,\mathrm{kW}$ given by $\gamma Q H$.
:::

:::osservazione{#ugello-su-condotta titolo="Nozzle downstream of a pipe with head loss"}
For a nozzle at the end of a long pipe, the total head $H$ just upstream of the nozzle is less than the elevation difference $H_0$ between the reservoir and the nozzle because part of that head is lost in the pipe. Let $v_t$ be the velocity in a pipe of diameter $D$ and length $L$. The unknowns $Q$ and $H$ satisfy
$$
\begin{cases}
H = H_0 - \lambda\,\dfrac{L}{D}\,\dfrac{v_t^2}{2g} \\[8pt]
Q = C_v\,A\,\sqrt{2 g H}
\end{cases}
$$
where $v_t = \dfrac{Q}{A_t}$ and $A_t$ is the pipe area. Substituting the first relation into the second gives an equation in $Q$ alone. An explicit solution is possible because both losses vary as the square of the discharge. A smaller nozzle diameter raises the jet speed and reduces discharge. Consequently there is a diameter at which jet power is greatest.
:::
