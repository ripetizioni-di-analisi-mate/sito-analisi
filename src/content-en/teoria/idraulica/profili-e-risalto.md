---
titolo: "Steady-flow profiles and hydraulic jumps"
sommario: "The gradually varied flow equation, profile classification on mild and steep slopes, control sections, hydraulic jumps and their sequent depths and energy losses, and stepwise computation of water-surface profiles."
---

## Steady gradually varied flow

In uniform flow, water depth is the same at every section of the channel. Real channels have entrances and exits, sluice gates, sills, and slope changes. Near these features the depth varies from section to section.

:::richiamo{#richiamo-correnti titolo="Uniform flow, critical depth, and the Froude number"}
In a prismatic channel of slope $i > 0$, uniform flow has energy slope $J = i$ and depth $h_0$, which follows from the Gauckler–Strickler equation
$$
Q = k_s\,A\,R^{\frac{2}{3}}\,\sqrt{i} .
$$
At the critical depth $h_c$, the derivative of specific energy $E = h + \dfrac{Q^2}{2 g A^2}$ vanishes and $Fr = 1$. For a rectangular section of width $b$,
$$
h_c = \sqrt[3]{\frac{Q^2}{g\,b^2}} .
$$
The flow is *subcritical* if $Fr < 1$, or equivalently $h > h_c$, and *supercritical* if $Fr > 1$, or equivalently $h < h_c$. The critical slope $i_c$ is the slope for which $h_0 = h_c$. See the chapter on open-channel flow.
:::

:::definizione{#moto-gradualmente-vario titolo="Steady gradually varied flow"}
Open-channel flow is **steady and gradually varied** when the discharge is constant in time and depth varies so slowly along the channel that pressure remains hydrostatic at each section and the head loss per unit length can be calculated from the uniform-flow resistance equation at the local depth:
$$
J = \frac{v^2}{k_s^2\,R^{\frac{4}{3}}} ,
\qquad
v = \frac{Q}{A} .
$$
Both assumptions hold while the streamlines remain nearly parallel to the bed. Over a distance of a few water depths, the change in $h$ must be small compared with $h$ itself.

These assumptions give a differential equation for $h(x)$ that can be used to trace the water surface. They do not hold in a hydraulic jump, where the depth may double over a few meters. The integral momentum equation is used there.

::schema{solidi="0,1.00 8,0.40 8,0.00 0,0.60" acqua="0,1.00 2,0.85 4,0.70 6,0.55 8,0.40 8,1.66 6,1.93 4,2.17 2,2.39 0,2.60" linee="0,2.60 2,2.39 4,2.17 6,1.93 8,1.66" energia="0,2.72 2,2.52 4,2.31 6,2.09 8,1.85" tratteggi="0,-0.60 8,-0.60" quote="4 -0.60,4 0.70,z,0.8;4 0.70,4 2.17,h,0.8" etichette="6.8,-0.15,i;0.8,2.88,J;2.0,-0.82,datum" riferimento=0 titolo="Gradually varied flow: the bed descends at slope $i$ and the energy grade line at slope $J$"}
:::

:::osservazione{#piezometrica-pelo-libero titolo="The hydraulic grade line coincides with the free surface"}
Gauge pressure is zero on the free surface, so the piezometric head at a surface point is $h_p = z + h$. Since the pressure distribution is hydrostatic, every point in the section has the same piezometric head. The free surface **is** therefore the hydraulic grade line. The energy grade line lies a velocity head $\dfrac{v^2}{2g}$ above it.
:::

## The profile equation

::::teorema{#equazione-del-profilo titolo="Gradually varied flow equation"}
Consider steady gradually varied flow of constant discharge $Q$ in a prismatic channel of bed slope $i$, with kinetic energy correction factor $\alpha = 1$. Let $h(x)$ be water depth at coordinate $x$, measured downstream along the channel. Then
$$
\frac{dh}{dx} = \frac{i - J}{1 - Fr^2} ,
$$
where $J$ is the energy slope and $Fr$ is the Froude number, both evaluated at depth $h(x)$.

This equation determines the shape of the profile. The sign of the derivative indicates whether flow depth increases or decreases downstream. The two values $h_0$ and $h_c$, where the numerator and denominator vanish respectively, separate the possible cases.

:::dimostrazione
Differentiate total head with respect to $x$ and identify the Froude number in the velocity term.

The total head at coordinate $x$ is
$$
H = z + h + \frac{Q^2}{2 g A^2} ,
$$
where $z$ is the bed elevation and $A = A(h)$ is the flow area. The bed descends at slope $i$, so $\dfrac{dz}{dx} = -i$. The total head decreases in the flow direction at slope $J$, so $\dfrac{dH}{dx} = -J$. Differentiating $H$ gives
$$
-J = -i + \frac{dh}{dx} - \frac{Q^2}{g A^3}\,\frac{dA}{dh}\,\frac{dh}{dx} .
$$
The rate at which area increases with depth is the top width, so $\dfrac{dA}{dh} = B$. The Froude number is $Fr = \dfrac{v}{\sqrt{g\,h_m}}$ with $h_m = \dfrac{A}{B}$. It follows that
$$
Fr^2 = \frac{Q^2}{A^2}\,\frac{B}{g A} = \frac{Q^2 B}{g A^3} .
$$
Substitution gives $-J = -i + \left(1 - Fr^2\right)\dfrac{dh}{dx}$. Consequently, since $Fr \neq 1$,
$$
\frac{dh}{dx} = \frac{i - J}{1 - Fr^2} .
$$
:::
::::

:::osservazione{#lettura-equazione titolo="Signs of the numerator and denominator"}
The numerator and denominator change sign at $h_0$ and $h_c$, respectively.

- The energy slope decreases as depth increases because the flow area and hydraulic radius increase. Since $J = i$ when $h = h_0$, we have $J < i$ for $h > h_0$ and $J > i$ for $h < h_0$. The numerator is therefore positive above normal depth and negative below it.
- The Froude number equals $1$ when $h = h_c$ and decreases as $h$ increases. The denominator is therefore positive for $h > h_c$ (subcritical flow) and negative for $h < h_c$ (supercritical flow).

The two signs together determine whether flow depth increases or decreases downstream. In a mild channel with $h_c < h < h_0$, the numerator is negative and the denominator positive, so $\dfrac{dh}{dx} < 0$ and the flow becomes shallower downstream.
:::

:::osservazione{#asintoti titolo="Behavior near $h_0$ and $h_c$"}
As $h \to h_0$, the numerator approaches zero and the denominator remains nonzero, so $\dfrac{dh}{dx} \to 0$. The free surface becomes parallel to the bed. Normal depth is an asymptote reached only at infinite distance.

As $h \to h_c$, the denominator approaches zero while the numerator remains nonzero, so $\left|\dfrac{dh}{dx}\right| \to \infty$. The calculated free surface approaches a direction perpendicular to the bed. The gradual-variation assumption breaks down. Near critical depth the equation therefore gives only the trend of the flow, while the actual transition occurs over a short distance.
:::

## Classification of profiles

:::definizione{#regioni titolo="Zones 1, 2, and 3"}
The lines parallel to the bed at heights $h_0$ and $h_c$ divide the space above the bed into three zones, numbered from top to bottom:

- **zone 1**: $h$ is greater than both $h_0$ and $h_c$;
- **zone 2**: $h$ lies between $h_0$ and $h_c$;
- **zone 3**: $h$ is less than both $h_0$ and $h_c$.

The profile designation combines a slope letter with the zone number: $M$ for a mild slope ($i < i_c$ denotes *mild*), $S$ for a steep slope ($i > i_c$ denotes *steep*), $C$ for critical slope, $H$ for a horizontal channel, and $A$ for an adverse slope. A profile stays in its starting zone. To leave it, the profile would have to cross $h_0$, where the derivative vanishes, or $h_c$, where the assumptions fail.
:::

:::osservazione{#profili-debole titolo="Mild slope: M1, M2, and M3"}
On a mild slope $h_0 > h_c$ and uniform flow is subcritical.

- **M1** ($h > h_0$): both numerator and denominator are positive, so $\dfrac{dh}{dx} > 0$. Depth increases downstream. The profile approaches $h_0$ upstream and the water surface becomes horizontal downstream because $J$ and $Fr$ tend to zero as $h$ increases. This is the backwater profile upstream of a sill, dam, or contraction.
- **M2** ($h_c < h < h_0$): the numerator is negative and the denominator positive, so $\dfrac{dh}{dx} < 0$. Depth decreases downstream from $h_0$ to $h_c$. This drawdown profile develops upstream of a bed drop or a transition into a steep reach.
- **M3** ($h < h_c$): numerator and denominator are both negative, so $\dfrac{dh}{dx} > 0$. Depth increases downstream from an imposed value toward $h_c$, and the profile terminates in a hydraulic jump. This profile commonly follows the outflow beneath a sluice gate.

::schema{solidi="0,0.70 12,0.40 12,-0.02 0,0.28" tratteggi="0,2.15 12,1.85;0,1.40 12,1.10" linee="0.40,0.99 0.61,1.00 0.83,1.02 1.04,1.03 1.26,1.05 1.47,1.06 1.69,1.08 1.90,1.09 2.11,1.11 2.33,1.13 2.54,1.15 2.76,1.17 2.97,1.20 3.19,1.23 3.40,1.28;4.30,2.03 4.54,2.03 4.77,2.02 5.01,2.01 5.24,2.00 5.48,1.98 5.71,1.97 5.95,1.95 6.19,1.93 6.42,1.91 6.66,1.87 6.89,1.83 7.13,1.76 7.36,1.65 7.60,1.25;8.50,1.95 8.72,1.95 8.94,1.96 9.16,1.96 9.39,1.97 9.61,1.99 9.83,2.02 10.05,2.05 10.27,2.10 10.49,2.15 10.71,2.22 10.94,2.30 11.16,2.39 11.38,2.49 11.60,2.60" etichette="2.0,0.92,M3;5.4,1.80,M2;10.0,2.21,M1;12.6,1.85,h_0;12.6,1.10,h_c" riferimento=0 titolo="The three zones of a mild-slope channel and the profile in each zone"}
:::

:::osservazione{#profili-forte titolo="Steep slope: S1, S2, and S3"}
On a steep slope $h_0 < h_c$ and uniform flow is supercritical. The normal-depth and critical-depth lines exchange positions, changing the signs in the profile equation.

- **S1** ($h > h_c$): both numerator and denominator are positive, so $\dfrac{dh}{dx} > 0$. The profile starts downstream of a hydraulic jump and rises until the water surface becomes horizontal, for example upstream of a dam on a steep channel.
- **S2** ($h_0 < h < h_c$): the numerator is positive and the denominator negative, so $\dfrac{dh}{dx} < 0$. Depth decreases from $h_c$ toward $h_0$. This profile forms immediately downstream of a transition from a mild reach to a steep reach.
- **S3** ($h < h_0$): numerator and denominator are both negative, so $\dfrac{dh}{dx} > 0$. The depth increases from an imposed value, such as that set by a sluice gate opening, toward $h_0$.

::schema{solidi="0,0.95 12,0.05 12,-0.37 0,0.53" tratteggi="0,1.90 12,1.00;0,2.31 12,1.41" linee="0.40,1.21 0.61,1.29 0.83,1.36 1.04,1.42 1.26,1.48 1.47,1.53 1.69,1.57 1.90,1.60 2.11,1.63 2.33,1.64 2.54,1.65 2.76,1.65 2.97,1.65 3.19,1.64 3.40,1.63;4.30,1.97 4.54,1.78 4.77,1.71 5.01,1.66 5.24,1.61 5.48,1.58 5.71,1.55 5.95,1.52 6.19,1.49 6.42,1.46 6.66,1.44 6.89,1.41 7.13,1.39 7.36,1.37 7.60,1.35;8.50,1.71 8.72,1.98 8.94,2.14 9.16,2.27 9.39,2.39 9.61,2.50 9.83,2.61 10.05,2.72 10.27,2.83 10.49,2.93 10.71,3.03 10.94,3.13 11.16,3.23 11.38,3.33 11.60,3.42" etichette="2.0,1.38,S3;5.9,1.70,S2;10.3,2.86,S1;12.6,1.00,h_0;12.6,1.41,h_c" riferimento=0 titolo="The three zones of a steep channel and the profile in each zone"}
:::

:::osservazione{#profili-limite titolo="Horizontal, critical, and adverse slopes"}
In these limiting cases, normal depth either does not exist or coincides with critical depth. One of the two reference lines is therefore lost and only two zones remain.

- **Horizontal channel** ($i = 0$): the numerator is $-J < 0$ for every depth. Zone 1 does not exist because $h_0$ may be regarded as infinite. The **H2** profile lies between $h_c$ and infinity and decreases in depth downstream. The **H3** profile lies below $h_c$ and increases in depth downstream.
- **Critical-slope channel** ($i = i_c$, that is, $h_0 = h_c$): the two reference lines coincide. The remaining profiles are **C1** above and **C3** below. Both free surfaces are nearly horizontal because the numerator and denominator vanish together at the critical depth.
- **Adverse-slope channel** ($i < 0$): the numerator is $i - J < 0$ at every depth and there is no normal depth. The remaining profiles are **A2** and **A3**, with shapes analogous to H2 and H3.

Once $h_0$ and $h_c$ are known, the signs of the numerator and denominator identify each profile.
:::

:::attenzione
A gradually varied profile does *not* cross critical depth. On a mild slope with $h_0 = 1.26\,\mathrm{m}$ and $h_c = 0.61\,\mathrm{m}$, flow of depth $0.25\,\mathrm{m}$ downstream of a sluice gate follows an M3 profile and deepens downstream. After approaching $h_c$ it does not continue as an M2 profile, since an M2 profile becomes shallower downstream. The transition from supercritical to subcritical flow takes place through a hydraulic jump, a rapidly varied flow.
:::

## Control sections and direction of profile calculation

:::definizione{#sezione-di-controllo titolo="Control section"}
A **control section** is a section where a structure or the channel geometry fixes the water depth independently of what happens in neighboring sections. Examples include

- the section downstream of a sluice gate, where gate opening and the contraction coefficient set the depth;
- the outlet at a bed drop or the start of a steep reach, where $h = h_c$ is established;
- the section immediately upstream of a sill or weir, where the structure’s rating curve relates depth to discharge;
- the section where the channel enters a reservoir or a downstream channel, where the receiving water level sets the depth.

A control section supplies the initial condition for the differential equation and serves as the starting point for calculating the profile.
:::

:::osservazione{#direzione-tracciamento titolo="Upstream calculation for subcritical flow and downstream calculation for supercritical flow"}
Small disturbances travel at speed $\sqrt{g\,h_m}$ relative to the water. In subcritical flow $v < \sqrt{g\,h_m}$, so a disturbance can travel upstream, and downstream conditions determine the depth at sections upstream. A subcritical profile is therefore calculated **from downstream to upstream**, starting at the downstream control. In supercritical flow $v > \sqrt{g\,h_m}$, so no disturbance can travel upstream and depth at a section depends only on upstream conditions. A supercritical profile is therefore calculated **from upstream to downstream**, starting at the upstream control.

This gives a procedure for long channels. Calculate $h_0$ and $h_c$ in each reach, identify the controls, determine whether each reach has subcritical or supercritical flow, and trace each profile in the corresponding direction until it meets another profile or a jump.
:::

:::esempio{titolo="Change from a mild to a steep slope"}
A rectangular channel of width $4\,\mathrm{m}$ carries $Q = 6\,\mathrm{m^3/s}$ with $k_s = 50\,\mathrm{m^{1/3}/s}$. The upstream reach has $i_1 = 0.0008$ and the downstream reach $i_2 = 0.020$. We obtain $h_c = 0.612\,\mathrm{m}$ and $i_c = 0.00660$, hence $h_{01} = 1.26\,\mathrm{m}$ with $i_1 < i_c$ and $h_{02} = 0.426\,\mathrm{m}$ with $i_2 > i_c$.

The flow changes from subcritical to supercritical, so $h = h_c$ occurs at the slope break, which is the control section. The upstream flow is subcritical and its profile is computed upstream from the control. Starting at $h_c$ gives an M2 profile tending to $h_{01}$. The downstream flow is supercritical and its profile is computed downstream from the control. Starting at $h_c$ gives an S2 profile tending to $h_{02}$.

::schema{solidi="0,1.60 6,1.30 12,0.40 12,0.00 0,1.20" tratteggi="0,2.06 6,1.76;6,1.76 12,0.86;0,2.55 6,2.25;6,1.62 12,0.72" linee="0.00,2.55 0.50,2.52 1.00,2.49 1.50,2.47 2.00,2.44 2.50,2.41 3.00,2.38 3.50,2.34 4.00,2.30 4.50,2.25 5.00,2.19 5.50,2.10 6.00,1.77;6.00,1.76 6.50,1.61 7.00,1.52 7.50,1.43 8.00,1.35 8.50,1.27 9.00,1.19 9.50,1.11 10.00,1.03 10.50,0.95 11.00,0.88 11.50,0.80 12.00,0.73" etichette="3.5,2.17,M2;7.3,1.63,S2;13.0,1.12,h_c;13.0,0.42,h_0;2.0,2.72,i_1 < i_c;10.6,1.98,i_2 > i_c" riferimento=0 titolo="Transition from a mild to a steep slope: the control section is at the slope break, with $h = h_c$"}
:::

## The hydraulic jump

:::definizione{#risalto titolo="Hydraulic jump"}
A **hydraulic jump** is an abrupt transition from supercritical to subcritical flow over a reach a few meters long, with intense turbulence, a wavy surface, and air entrainment. The depth increases from $h_1 < h_c$ to $h_2 > h_c$. The two depths are called **sequent depths**.

In a jump the streamlines are not parallel and energy dissipation is concentrated, so the gradually varied flow equation does not apply. The energy balance contains the unknown loss $\Delta E$. The momentum balance does not contain this loss because the forces on the control volume are the pressure forces on the end sections, the weight, and the wall reaction. The jump is therefore analyzed with the integral momentum equation.

::schema{solidi="0,0 12,0 12,-0.45 0,-0.45" acqua="0,0 12,0 12,1.60 10.2,1.60 9.0,1.55 7.8,1.42 6.6,1.20 5.4,0.92 4.2,0.63 3,0.40 0,0.40" linee="0,0.40 3,0.40 4.2,0.63 5.4,0.92 6.6,1.20 7.8,1.42 9.0,1.55 10.2,1.60 12,1.60" energia="0,2.39 3,2.39;10.2,1.72 12,1.72" tratteggi="3,1.72 10.2,1.72" quote="2.2 0,2.2 0.40,h_1,0.55;11.2 0,11.2 1.60,h_2,-0.6;5 1.72,5 2.39,ΔE,0.6" etichette="1.1,0.72,supercritical flow;7.8,0.70,subcritical flow" riferimento=0 titolo="Hydraulic jump: total head falls by $\Delta E$ between the two end sections"}
:::

:::richiamo{#richiamo-equazione-globale titolo="Integral momentum equation for steady flow"}
For a control volume carrying steady discharge $Q$ with one inlet and one outlet, each in a region of one-dimensional flow,
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} ,
$$
where $\vec{\Pi}_i = p_i A_i \hat{n}_i$ are the pressure forces on the sections directed into the control volume, $\vec{G}$ is the weight of fluid in the volume, and $\vec{R}$ is the force exerted by the walls on the fluid. See the chapter on the integral momentum equation.
:::

:::definizione{#spinta-totale titolo="Hydrostatic force plus momentum flux"}
The **momentum function in force units** at a section of depth $h$ is the sum of the hydrostatic force on that section and the flux of momentum through it. For a rectangular channel of width $b$,
$$
S(h) = \frac{\gamma\,b\,h^2}{2} + \rho\,Q\,v = \frac{\gamma\,b\,h^2}{2} + \frac{\rho\,Q^2}{b\,h} .
$$
The first term increases as $h^2$ and the second decreases as $\dfrac{1}{h}$, so $S(h)$ has a minimum. Setting its derivative equal to zero gives
$$
\gamma\,b\,h - \frac{\rho\,Q^2}{b\,h^2} = 0
\quad\Longrightarrow\quad
h^3 = \frac{Q^2}{g\,b^2} ,
$$
so the minimum occurs at $h = h_c$. For every value of $S$ above the minimum, two depths give the same value. One lies below and one above $h_c$. These are sequent depths.

::grafico{f="19.62*x^2+25/x" xmin=0.15 xmax=2.2 ymin=0 ymax=130 punti="0.4,65.6,pieno;1.596,65.6,pieno;0.86,43.6,vuoto" segmenti="0.4,0,0.4,65.6;1.596,0,1.596,65.6;0.86,0,0.86,43.6" nomi="h,S" etichette="0.45,78,h₁;1.66,78,h₂;1.0,34,hc" titolo="Momentum function $S(h)$ in $\mathrm{kN}$ for $Q = 10\,\mathrm{m^3/s}$ and $b = 4\,\mathrm{m}$: the two sequent depths give the same force, and the minimum occurs at $h_c$"}
:::

::::teorema{#altezze-coniugate titolo="Sequent depths of a hydraulic jump"}
Consider a hydraulic jump in a rectangular channel of width $b$ with a horizontal bed and discharge $Q$. Assume hydrostatic pressure distributions at both end sections and negligible bed resistance over the length of the jump. Let $h_1$ and $h_2$ be the upstream and downstream depths and $Fr_1 = \dfrac{v_1}{\sqrt{g\,h_1}}$ the Froude number of the supercritical flow. Then
$$
\frac{h_2}{h_1} = \frac{1}{2}\left(\sqrt{1 + 8\,Fr_1^2} - 1\right) .
$$

This relation determines the sequent depths from upstream conditions and can therefore predict the water level downstream of a sluice gate or at the toe of a spillway. Written in terms of downstream conditions, the same relation gives $h_1$ in terms of $h_2$ and $Fr_2$.

:::dimostrazione
Apply the integral momentum equation to the volume of water between the end sections. The unknown energy dissipation does not enter this force balance.

Take the reach from section $1$ to section $2$ as the control volume and project the momentum equation onto the horizontal downstream axis $x$. Weight acts vertically, so its component along $x$ is zero. The bed is horizontal and its resistance is neglected, so $R_x$ also vanishes. The two end-section pressure forces point into the volume, giving
$$
\Pi_{1x} = +\frac{\gamma\,b\,h_1^2}{2} ,
\qquad
\Pi_{2x} = -\frac{\gamma\,b\,h_2^2}{2} ,
$$
because the hydrostatic force on a vertical rectangular section is $\gamma\,h_G\,A = \gamma\,\dfrac{h}{2}\,b\,h$. The momentum equation projected onto $x$ becomes
$$
\rho\,Q\,(v_2 - v_1) = \frac{\gamma\,b\,h_1^2}{2} - \frac{\gamma\,b\,h_2^2}{2} ,
$$
or $S(h_1) = S(h_2)$. The momentum function is therefore conserved across the jump.

Divide by $b$ and introduce the discharge per unit width $q = \dfrac{Q}{b}$, with $v = \dfrac{q}{h}$:
$$
\frac{\gamma}{2}\left(h_1^2 - h_2^2\right) = \rho\,q^2\left(\frac{1}{h_2} - \frac{1}{h_1}\right)
= \rho\,q^2\,\frac{h_1 - h_2}{h_1 h_2} .
$$
The depths differ, so division by $h_1 - h_2$ is permissible. With $\rho = \dfrac{\gamma}{g}$, this gives
$$
\frac{h_1 + h_2}{2} = \frac{q^2}{g\,h_1 h_2}
\quad\Longrightarrow\quad
h_1 h_2 (h_1 + h_2) = \frac{2 q^2}{g} .
$$
Since $Fr_1^2 = \dfrac{q^2}{g\,h_1^3}$, we obtain $\dfrac{2q^2}{g} = 2\,h_1^3\,Fr_1^2$, and division by $h_1$ gives
$$
h_2^2 + h_1 h_2 - 2\,h_1^2\,Fr_1^2 = 0 .
$$
This quadratic in $h_2$ has only one positive root,
$$
h_2 = \frac{-h_1 + \sqrt{h_1^2 + 8\,h_1^2\,Fr_1^2}}{2}
= \frac{h_1}{2}\left(\sqrt{1 + 8\,Fr_1^2} - 1\right) .
$$
:::
::::

:::esempio{titolo="Sequent depths and the momentum function"}
A rectangular channel of width $b = 4\,\mathrm{m}$ carries $Q = 10\,\mathrm{m^3/s}$. Just downstream of a sluice gate, the depth is $h_1 = 0.40\,\mathrm{m}$. Thus
$$
v_1 = \frac{10}{4 \cdot 0.40} = 6.25\,\mathrm{m/s} ,
\qquad
Fr_1 = \frac{6.25}{\sqrt{9.81 \cdot 0.40}} = 3.16 ,
$$
so the flow is supercritical and
$$
h_2 = \frac{0.40}{2}\left(\sqrt{1 + 8 \cdot 3.16^2} - 1\right) = 1.60\,\mathrm{m} .
$$
Check the momentum function at the two sections: $S(h_1) = \dfrac{9.81 \cdot 4 \cdot 0.40^2}{2} + \dfrac{1000 \cdot 10^2}{4 \cdot 0.40 \cdot 1000} = 3.14 + 62.5 = 65.6\,\mathrm{kN}$ and $S(h_2) = 50.2 + 15.6 = 65.8\,\mathrm{kN}$, equal within rounding.
:::

::::teorema{#perdita-nel-risalto titolo="Energy loss in a hydraulic jump"}
Under the same assumptions used for the sequent-depth relation, the total head loss across the jump is
$$
\Delta E = E_1 - E_2 = \frac{(h_2 - h_1)^3}{4\,h_1 h_2} .
$$

The loss depends on the cube of the depth increase, so a jump with a large difference between sequent depths dissipates a great deal of energy. This is why hydraulic jumps are used at the toes of dam spillways. The dissipated power is $P = \gamma\,Q\,\Delta E$.

:::dimostrazione
Calculate the difference in specific energies and use the relation already derived between the sequent depths.

The bed is horizontal, so the difference in total heads equals the difference in specific energies:
$$
\Delta E = \left(h_1 + \frac{q^2}{2 g h_1^2}\right) - \left(h_2 + \frac{q^2}{2 g h_2^2}\right)
= (h_1 - h_2) + \frac{q^2}{2g}\,\frac{h_2^2 - h_1^2}{h_1^2 h_2^2} .
$$
The derivation of the sequent-depth relation gives $\dfrac{q^2}{g} = \dfrac{h_1 h_2 (h_1 + h_2)}{2}$, hence $\dfrac{q^2}{2g} = \dfrac{h_1 h_2 (h_1 + h_2)}{4}$. Substitution and cancellation of $h_1 h_2$ give
$$
\Delta E = (h_1 - h_2) + \frac{(h_1 + h_2)(h_2 - h_1)(h_2 + h_1)}{4\,h_1 h_2}
= (h_2 - h_1)\left[\frac{(h_1 + h_2)^2}{4 h_1 h_2} - 1\right] .
$$
Since $(h_1 + h_2)^2 - 4 h_1 h_2 = (h_2 - h_1)^2$, it follows that
$$
\Delta E = \frac{(h_2 - h_1)^3}{4\,h_1 h_2} .
$$
Both depths are positive and $h_2 > h_1$, so $\Delta E > 0$ and total head decreases downstream.
:::
::::

:::osservazione{#lunghezza-del-risalto titolo="Length of a hydraulic jump"}
The balance equations do not determine jump length because it depends on the turbulent structure. Formulas based on laboratory measurements in rectangular channels are used, including Smetana’s expression,
$$
L \simeq 6\,(h_2 - h_1) ,
$$
which gives reliable values for $2 < Fr_1 < 10$. Measurements by the United States Bureau of Reclamation give $L$ between $4.5\,h_2$ and $6\,h_2$ for a stable jump. In the preceding example the jump length is $L \simeq 6\,(1.60 - 0.40) = 7.2\,\mathrm{m}$.
:::

:::osservazione{#tipi-di-risalto titolo="Jump type as a function of $Fr_1$"}
Laboratory tests show that the appearance of the jump and the fraction of energy it dissipates depend on the upstream Froude number. The usual classification is

- $1 < Fr_1 < 1.7$: undular jump, with a succession of surface waves and very little energy dissipation;
- $1.7 < Fr_1 < 2.5$: weak jump, with a slightly disturbed surface;
- $2.5 < Fr_1 < 4.5$: oscillating jump, with a jet shifting between bed and surface and generating waves that travel downstream;
- $4.5 < Fr_1 < 9$: stable jump, with a position relatively insensitive to downstream conditions and dissipation of $45\%$ to $70\%$ of the upstream energy;
- $Fr_1 > 9$: strong jump, with intense turbulence, high energy dissipation, and an irregular downstream surface.

Stilling basins are sized to operate in the stable-jump range.
:::

## Location of a hydraulic jump

:::osservazione{#posizione-del-risalto titolo="Where the jump forms"}
The jump forms where the supercritical and subcritical depths are sequent depths. For a sluice gate on a mild channel, let $h_1$ be the depth at the gate outlet and $h_0$ the downstream depth. Compare the sequent depth corresponding to $h_1$ with $h_0$.

- If the sequent depth corresponding to $h_1$ equals $h_0$, the jump starts immediately downstream of the gate.
- If the sequent depth corresponding to $h_1$ exceeds $h_0$, the tailwater is too shallow to hold the jump at the gate. The supercritical flow continues along an M3 profile, increasing in depth downstream. The jump forms where the M3 depth is conjugate to $h_0$. This is a **swept-out jump**. Its distance from the gate can be calculated by the direct-step method.
- If the sequent depth corresponding to $h_1$ is less than $h_0$, the tailwater is too deep. The jump is forced back against the gate, partially submerging it. This is a **submerged jump**, and the free-jump sequent-depth formula no longer applies in this form.

::schema{solidi="0,0 18,0 18,-0.5 0,-0.5;5.95,0.30 6.15,0.30 6.15,2.90 5.95,2.90" acqua="0,0 5.95,0 5.95,2.50 0,2.50;6.15,0 18,0 18,1.45 16.2,1.45 14.5,1.40 12.8,1.25 11.1,1.00 9.4,0.32 6.15,0.30" linee="0,2.50 5.95,2.50;6.15,0.30 9.4,0.32 11.1,1.00 12.8,1.25 14.5,1.40 16.2,1.45 18,1.45" tratteggi="6.15,1.45 18,1.45;6.15,0.74 18,0.74" etichette="7.9,0.54,M3;12.5,1.78,hydraulic jump;18.8,1.45,h_0;18.8,0.74,h_c;2.8,1.30,gate" riferimento=0 titolo="Swept-out jump: the M3 profile connects the gate to the section where the depth is conjugate to $h_0$"}
:::

:::esempio{titolo="Hydraulic jump downstream of a sluice gate"}
A rectangular channel of width $b = 4\,\mathrm{m}$, with $k_s = 55\,\mathrm{m^{1/3}/s}$ and $i = 0.0008$, carries $Q = 8\,\mathrm{m^3/s}$. The reference depths are $h_0 = 1.45\,\mathrm{m}$ and $h_c = 0.742\,\mathrm{m}$, so the slope is mild. At the gate outlet the depth is $h_1 = 0.30\,\mathrm{m}$, with $v_1 = 6.67\,\mathrm{m/s}$ and $Fr_1 = 3.89$. Its sequent depth is $1.51\,\mathrm{m}$.

The sequent depth exceeds $h_0 = 1.45\,\mathrm{m}$, so the jump is swept downstream. At the jump the M3 profile must reach the upstream sequent depth corresponding to $h_0$, namely $0.320\,\mathrm{m}$. The M3 profile requires a length of $3.2\,\mathrm{m}$ to increase from $0.300\,\mathrm{m}$ to $0.320\,\mathrm{m}$.
:::

:::osservazione{#vasche-di-dissipazione titolo="Stilling basins"}
Flow at the toe of a spillway is supercritical. It must be returned to subcritical flow before reaching the natural channel to avoid bed erosion. A **stilling basin** is a lined channel reach with its floor below the downstream bed and sufficient length to contain the jump. Lowering the basin floor increases the tailwater depth available and keeps the jump in the basin even when the downstream channel level provides less than $h_2$. The basin length is set to $L$ plus a margin, and an end sill stabilizes the jump location. Full basin design is covered in hydraulic structures courses.

::schema{solidi="0,0.60 4,0.60 4,0 13,0 13,0.60 17,0.60 17,-0.60 0,-0.60" acqua="0,0.60 4,0.60 4,0 13,0 13,0.60 17,0.60 17,2.00 13,2.00 11.4,1.95 9.8,1.80 8.2,1.50 6.6,1.10 5.0,0.90 4,0.90 0,0.90" linee="0,0.90 5.0,0.90 6.6,1.10 8.2,1.50 9.8,1.80 11.4,1.95 13,2.00 17,2.00" etichette="2.2,1.20,supercritical flow;9.0,2.22,hydraulic jump;15.0,1.25,downstream channel;13.45,0.28,d" riferimento=0 titolo="Stilling basin: lowering the floor by $d$ increases the available depth and holds the jump in the basin"}
:::

## Stepwise profile calculations

:::definizione{#metodo-passo-a-passo titolo="Direct-step method"}
The **direct-step method** calculates the distance between two sections from their specified depths. Write the profile equation in the form relating specific energy to slope,
$$
\frac{dE}{dx} = i - J ,
\qquad
E = h + \frac{Q^2}{2 g A^2} ,
$$
which follows from total head $H = z + E$ with $\dfrac{dz}{dx} = -i$ and $\dfrac{dH}{dx} = -J$. Between nearby sections of depths $h_j$ and $h_{j+1}$, replace the energy slope by its mean to obtain
$$
\Delta x = \frac{E_{j+1} - E_j}{i - \bar{J}} ,
\qquad
\bar{J} = \frac{J_j + J_{j+1}}{2} .
$$
Starting at the control section, choose a sequence of depths from the initial to the target depth and sum the $\Delta x$ values for the individual steps. The error decreases with step size, so check the result by repeating the calculation with steps half as large.
:::

:::esempio{titolo="Two steps along an M3 profile"}
For the channel in the previous example ($b = 4\,\mathrm{m}$, $Q = 8\,\mathrm{m^3/s}$, $k_s = 55\,\mathrm{m^{1/3}/s}$, $i = 0.0008$), calculate the distance from the section where $h = 0.300\,\mathrm{m}$ to the section where $h = 0.310\,\mathrm{m}$, with an intermediate step at $0.305\,\mathrm{m}$.

| $h$ ($\mathrm{m}$) | $v$ ($\mathrm{m/s}$) | $R$ ($\mathrm{m}$) | $E$ ($\mathrm{m}$) | $J$ | $\bar{J}$ | $\Delta x$ ($\mathrm{m}$) |
|---|---|---|---|---|---|---|
| 0,300 | 6,667 | 0,2609 | 2,5653 | 0,08814 |  |  |
| 0,305 | 6,557 | 0,2646 | 2,4966 | 0,08366 | 0,08590 | 0,807 |
| 0,310 | 6,452 | 0,2684 | 2,4315 | 0,07948 | 0,08157 | 0,806 |

The total distance is $0.807 + 0.806 = 1.61\,\mathrm{m}$. Depth increases downstream, as expected for an M3 profile, while specific energy decreases because the friction slope is much greater than the bed slope.
:::
