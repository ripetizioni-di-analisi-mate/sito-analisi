---
titolo: "Open-channel flow: uniform flow and specific energy"
sommario: "Channel cross-section geometry, uniform flow according to Chézy and Gauckler–Strickler, rating curves, the most efficient channel section, specific energy and critical depth, subcritical and supercritical flow, critical slope, and the speed of small surface disturbances."
---

## Channels and open-channel flow

In a pressurized pipe the wall fixes the cross section occupied by the fluid. In a channel the upper surface of the flow is free to move. The wetted cross section therefore depends on the water depth, which is itself an unknown.

:::definizione{#corrente-a-pelo-libero titolo="Open-channel flow"}
**Open-channel flow** is one-dimensional flow with an upper surface, the *free surface*, in contact with the atmosphere. The gauge pressure at this surface is zero. If pressure varies hydrostatically across the section, every point in the section has the same piezometric head,
$$
h_{\text{piez}} = z_f + h ,
$$
where $z_f$ is the bed elevation and $h$ is the vertical water depth. The free surface therefore coincides with the *hydraulic grade line*, and the energy grade line lies a velocity head $\dfrac{v^2}{2g}$ above it.

This property explains the use of water depth in channel analysis. For a given discharge, knowing $h$ at a section determines the pressure throughout that section.
:::

:::definizione{#elementi-geometrici titolo="Geometric properties of a channel section"}
Given the cross-sectional shape of a channel and the water depth $h$, define

- the **flow area** $A(h)$, the cross-sectional area occupied by water;
- the **wetted perimeter** $C(h)$, the length of the line of contact between water and channel wall in the section, *excluding* the free surface;
- the **hydraulic radius** $R = \dfrac{A}{C}$;
- the **top width** $B(h)$;
- the **hydraulic depth** $h_m = \dfrac{A}{B}$.

By continuity the mean velocity is $v = \dfrac{Q}{A}$. The hydraulic radius appears in resistance equations because it expresses flow area per unit of wetted perimeter. The hydraulic depth appears in the Froude number. For a rectangular section of width $b$, we have $A = b h$, $C = b + 2h$, $B = b$, and $h_m = h$, so the hydraulic depth equals the water depth.

::schema{nodi="S,-2.1,1.4;T,5.1,1.4" nomi=0 acqua="0,0 3,0 5.1,1.4 -2.1,1.4" solidi="-4.5,1.9 -2.85,1.9 0,0 3,0 5.85,1.9 7.5,1.9 7.5,-0.7 -4.5,-0.7" pelo="-2.1,5.1,1.4,p_a = 0" quote="1.5 0,1.5 1.4,1.40 m,0;0 -0.7,3 -0.7,3.00 m,0.5;S,T,B,-0.5" riferimento=0 titolo="Trapezoidal section with $b = 3\,\mathrm{m}$, water depth $h = 1.40\,\mathrm{m}$, and side slope $m = 1.5$: $A = 7.14\,\mathrm{m^2}$, $C = 8.05\,\mathrm{m}$, $R = 0.887\,\mathrm{m}$, $B = 7.20\,\mathrm{m}$"}
:::

:::osservazione{#sezioni-usuali titolo="Common cross sections"}
For the three most common section shapes, the geometric properties can be written as functions of water depth.

- **Rectangular** section of width $b$:
$$
A = b\,h ,
\qquad
C = b + 2h ,
\qquad
B = b .
$$
- **Trapezoidal** section of bottom width $b$ and side slope $m$, meaning that the banks extend $m$ horizontally per meter vertically:
$$
A = (b + m\,h)\,h ,
\qquad
C = b + 2h\sqrt{1 + m^2} ,
\qquad
B = b + 2m\,h .
$$
- Partly full **circular** section of diameter $D$, with $\theta$ the central angle subtended by the free surface:
$$
A = \frac{D^2}{8}\,(\theta - \sin\theta) ,
\qquad
C = \frac{D\,\theta}{2} ,
\qquad
B = D\sin\frac{\theta}{2} ,
\qquad
\cos\frac{\theta}{2} = 1 - \frac{2h}{D} .
$$

For the trapezoidal section, the wetted perimeter includes the two sloping sides, each of length $h\sqrt{1+m^2}$, and the bottom width once. For the circular section, first find the angle $\theta$ from the depth relation above and substitute it into the first three formulas. For $D = 1.20\,\mathrm{m}$ and $h = 0.65\,\mathrm{m}$, we obtain $\theta = 3.308\,\mathrm{rad}$, hence $A = 0.625\,\mathrm{m^2}$ and $R = 0.315\,\mathrm{m}$.

::schema{nodi="P,-0.598,0.05;Q,0.598,0.05" nomi=0 cerchi="0,0,0.6" acqua="-0.598,0.050 -0.593,-0.091 -0.555,-0.228 -0.486,-0.351 -0.391,-0.455 -0.273,-0.534 -0.140,-0.583 0.000,-0.600 0.140,-0.583 0.273,-0.534 0.391,-0.455 0.486,-0.351 0.555,-0.228 0.593,-0.091 0.598,0.050" linee="-0.598,0.05 0.598,0.05" quote="0 -0.6,0 0.05,0.65 m,-0.9;P,Q,B,-0.85" etichette="0.02,-0.2,θ" frecce="0,0,-0.58,0.1,;0,0,0.58,0.1," riferimento=0 titolo="Partly full circular section of diameter $D = 1.20\,\mathrm{m}$: the central angle $\theta$ subtended by the free surface defines the flow area"}
:::

## Uniform flow

In a straight channel of constant cross section and slope, the water depth becomes the same at every section if the channel is long enough for entrance and exit effects to die out.

:::definizione{#moto-uniforme titolo="Uniform flow in a channel"}
An open-channel flow is in **uniform flow** when the discharge is steady and water depth is the same at every section. The corresponding depth, denoted by $h_0$, is the *normal depth*. Since $A$ and therefore $v = \dfrac{Q}{A}$ do not change along the channel, the free surface, bed, and energy grade line are three parallel straight lines.

Flow in a long regular channel tends toward uniform conditions. The depth $h_0$ is therefore a reference in channel design. It is calculated from the design discharge and compared with the height of the banks.

::schema{nodi="M,0,1.6;N,10,1.0" nomi=0 acqua="0,0.6 10,0 10,1.0 0,1.6" solidi="0,0.6 10,0 10,-0.8 0,-0.8" linee="0,1.6 10,1.0" piezometrica="0,1.6 10,1.0" energia="0,2.2 10,1.6" quote="5.5 0.27,5.5 1.27,h_0,0.45;7.5 1.15,7.5 1.75,,0.35" etichette="2.4,2.4,energy grade line;2.1,1.15,free surface and hydraulic grade line;8.3,1.25,velocity head;6.6,-0.5,bed slope i" riferimento=0 titolo="Uniform flow: the bed, free surface, and energy grade line are parallel, so the energy slope $J$ equals the bed slope $i$"}
:::

:::richiamo{titolo="Integral momentum equation for steady flow"}
For a control volume carrying steady discharge $Q$, with inflow at section $1$ and outflow at section $2$,
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} ,
$$
where $\vec{\Pi}_i = p_i A_i \hat{n}_i$ are the pressure forces on the sections, directed into the volume, $\vec{G}$ is the weight of fluid in the volume, and $\vec{R}$ is the force the walls exert on the fluid. See the chapter on the integral momentum equation.
:::

::::teorema{#cadente-uguale-pendenza titolo="Energy slope in uniform flow"}
Consider uniform open-channel flow in a channel with bed slope $i$ and constant cross section, flow area $A$, wetted perimeter $C$, and hydraulic radius $R$. The energy slope equals the bed slope,
$$
J = i ,
$$
and the mean boundary shear stress is
$$
\tau_0 = \gamma\,R\,i .
$$

The first equality makes the head loss per unit length a geometric quantity known as soon as the bed slope is known. The second relates the slope to the shear stress exerted by the water on the lining, which can be used to check the bed for erosion. For $R = 0.75\,\mathrm{m}$ and $i = 0.001$, the stress is $\tau_0 = 9810 \cdot 0.75 \cdot 0.001\,\mathrm{Pa} = 7.36\,\mathrm{Pa}$.

:::dimostrazione
First apply the energy balance between two sections to obtain the energy slope. Then apply the momentum balance to the same reach to find the boundary shear stress.

Let $1$ and $2$ be two sections a distance $L$ apart along the channel, with $2$ downstream. The total head of open-channel flow is $H = z_f + h + \dfrac{v^2}{2g}$. In uniform flow $h$ and $v$ have the same values at the two sections, so
$$
H_1 - H_2 = z_{f1} - z_{f2} = i\,L ,
$$
because $i$ is the bed slope. By definition of the energy slope $H_1 - H_2 = J\,L$, so $J\,L = i\,L$ and hence $J = i$.

Take the reach between the two sections as a control volume and project the integral momentum equation onto the downstream direction. The velocities at the two sections have the same magnitude and direction, so the left-hand side vanishes. The sections have equal areas and pressure distributions. Thus the pressure forces $\vec{\Pi}_1$ and $\vec{\Pi}_2$ are equal and opposite and cancel. The weight of water in the reach is $G = \gamma A L$. Typical channel slopes are small, so the sine of the bed angle can be approximated by its tangent, $i$. The downstream component of weight is therefore $\gamma A L i$. The boundary force has component $-\tau_0\,C\,L$ because the shear stress opposes the flow and acts over area $C L$. The projected momentum equation is then
$$
0 = \gamma\,A\,L\,i - \tau_0\,C\,L ,
$$
which gives $\tau_0 = \gamma\,\dfrac{A}{C}\,i = \gamma\,R\,i$.

::schema{nodi="A,2,2.0;B,6,1.4" nomi=0 acqua="0,1.0 8,0.2 8,1.4 0,2.2" solidi="0,1.0 8,0.2 8,-0.5 0,-0.5" linee="0,2.2 8,1.4" tratteggi="2,0.8 2,2.0;6,0.2 6,1.4" forze="4 1.25,0,-0.8,G" reazioni="4 0.72,-1.1,0.11,τ_0 C L;2 1.45,0.9,-0.09,Π_1;6 0.85,-0.9,0.09,Π_2" quote="2 -0.5,6 -0.5,L,0.5" riferimento=0 titolo="Control volume of length $L$ in uniform flow: the section pressure forces cancel and the downstream component of weight balances boundary shear"}
:::
::::

:::osservazione{#chezy-strickler titolo="Chézy and Gauckler–Strickler equations"}
Channel flow resistance is described by power-law formulas obtained from laboratory and field measurements. The **Chézy equation** gives mean velocity as
$$
v = \chi\sqrt{R\,J} ,
$$
where $\chi$ is the Chézy coefficient in $\mathrm{m^{1/2}/s}$. The **Gauckler–Strickler equation** gives $\chi = k_s R^{\frac{1}{6}}$ and, for uniform flow where $J = i$, yields
$$
v = k_s\,R^{\frac{2}{3}}\,i^{\frac{1}{2}} ,
\qquad
Q = k_s\,A\,R^{\frac{2}{3}}\,i^{\frac{1}{2}} ,
$$
with $k_s$ in $\mathrm{m^{1/3}/s}$. The coefficient $n = \dfrac{1}{k_s}$ is Manning’s coefficient. Typical values are $k_s = 80 \div 90$ for smooth concrete, $70 \div 75$ for cast-in-place concrete, $50 \div 60$ for masonry, $30 \div 40$ for an earth channel, and $20 \div 30$ for a vegetated natural channel.

Both formulas are empirical, so they do not follow from a theoretical derivation. They apply in the fully rough turbulent regime, where the friction factor is independent of Reynolds number. This condition is usually satisfied in channels because hydraulic radii are large and velocities are of the order of a meter per second. See the chapter on friction and minor head losses for the relation between $k_s$ and boundary roughness.
:::

:::esempio{titolo="Discharge in uniform flow"}
A rectangular channel of width $b = 4\,\mathrm{m}$, slope $i = 0.001$, and $k_s = 60\,\mathrm{m^{1/3}/s}$ carries water at a depth of $h_0 = 1.20\,\mathrm{m}$. Its geometric properties are
$$
A = 4 \cdot 1.20 = 4.80\,\mathrm{m^2} ,
\qquad
C = 4 + 2 \cdot 1.20 = 6.40\,\mathrm{m} ,
\qquad
R = \frac{4.80}{6.40} = 0.750\,\mathrm{m} ,
$$
so
$$
v = 60 \cdot 0.750^{\frac{2}{3}} \cdot 0.001^{\frac{1}{2}} = 60 \cdot 0.825 \cdot 0.0316 = 1.57\,\mathrm{m/s} ,
\qquad
Q = 4.80 \cdot 1.57 = 7.52\,\mathrm{m^3/s} .
$$
The velocity is of the order of a meter per second, as expected for an artificial channel of this slope.
:::

## Rating curve and normal depth

The Gauckler–Strickler equation gives discharge for a known depth. The inverse problem encountered in channel design is to find depth from discharge.

:::definizione{#scala-delle-portate titolo="Rating curve"}
For a specified cross section, slope $i$, and coefficient $k_s$, the function
$$
Q(h) = k_s\,A(h)\,R(h)^{\frac{2}{3}}\,i^{\frac{1}{2}}
$$
is the channel’s **rating curve**. It is strictly increasing where both the flow area and hydraulic radius increase with $h$. Each discharge in this range therefore corresponds to a single normal depth.

For a given channel the rating curve need be plotted only once. It can then be read to find $h_0$ from $Q$ or vice versa. In a closed section such as a circular conduit, the increasing relation holds only up to the filling level at which the wetted perimeter grows sufficiently rapidly relative to the area that discharge ceases to increase.

::grafico{f="60*4*x*(4*x/(4+2*x))^(2/3)*0.0316228" xmin=0 xmax=2 ymin=0 ymax=16 nomi="h,Q" punti="1.2,7.52,pieno" segmenti="1.2,0,1.2,7.52;0,7.52,1.2,7.52" legenda="Q(h) = k_s\,A(h)\,R(h)^{\frac{2}{3}}\,i^{\frac{1}{2}}" titolo="Rating curve of a rectangular channel with $b = 4\,\mathrm{m}$, $i = 0.001$, and $k_s = 60\,\mathrm{m^{1/3}/s}$: the discharge $Q = 7.52\,\mathrm{m^3/s}$ corresponds to $h_0 = 1.20\,\mathrm{m}$"}
:::

:::osservazione{#altezza-di-moto-uniforme titolo="Calculating normal depth"}
The equation $Q(h_0) = Q$ has no general closed-form solution because $h_0$ appears in both flow area and hydraulic radius with different exponents. Choose trial values of $h$, calculate $Q(h)$, and narrow the interval containing the solution until the calculated discharge differs from the specified discharge by less than the chosen tolerance.

For a rectangular channel the formula can be rearranged to give an iteration that converges in a few steps. From $Q = k_s\,b\,h\left(\dfrac{b\,h}{b + 2h}\right)^{\frac{2}{3}} i^{\frac{1}{2}}$, we obtain
$$
h = \left(\frac{Q}{k_s\,b\,i^{\frac{1}{2}}}\right)^{\frac{3}{5}}\left(\frac{b + 2h}{b}\right)^{\frac{2}{5}} ,
$$
with the previous estimate substituted on the right. An initial estimate follows from the very wide channel approximation $R \simeq h$, which gives $h \simeq \left(\dfrac{Q}{k_s\,b\,i^{\frac{1}{2}}}\right)^{\frac{3}{5}}$.
:::

:::esempio{titolo="Finding normal depth by iteration"}
A rectangular channel of width $b = 4\,\mathrm{m}$, with $i = 0.0005$ and $k_s = 75\,\mathrm{m^{1/3}/s}$, must carry $Q = 6\,\mathrm{m^3/s}$. We obtain
$$
\frac{Q}{k_s\,b\,i^{\frac{1}{2}}} = \frac{6}{75 \cdot 4 \cdot 0.02236} = 0.894 ,
$$
so the first estimate is $h = 0.894^{\frac{3}{5}} = 0.935\,\mathrm{m}$. Successive estimates are $1.090\,\mathrm{m}$, $1.113\,\mathrm{m}$, $1.116\,\mathrm{m}$, and $1.117\,\mathrm{m}$. A tolerance of one millimeter is satisfied at this step. Direct substitution gives
$$
A = 4.47\,\mathrm{m^2} ,
\qquad
R = 0.717\,\mathrm{m} ,
\qquad
Q = 75 \cdot 4.47 \cdot 0.717^{\frac{2}{3}} \cdot 0.02236 = 6.00\,\mathrm{m^3/s} ,
$$
hence $h_0 = 1.12\,\mathrm{m}$ and the mean velocity is $v = 1.34\,\mathrm{m/s}$.
:::

## The most efficient channel section

Among sections of a given shape and area, one carries more discharge than the others. Since excavation costs depend mainly on the volume removed and hence on cross-sectional area, this shape is also the most economical in terms of excavation.

:::richiamo{titolo="Minima of a differentiable function"}
Let $f$ be twice differentiable on an open interval, and let $x_0$ be an interior point with $f'(x_0) = 0$ and $f''(x_0) > 0$. Then $x_0$ is a local minimum of $f$. If in addition $f'$ is negative to the left of $x_0$ and positive to its right, the minimum is absolute on the interval. See the chapter on maxima and minima in Mathematical Analysis 1.
:::

::::teorema{#massima-efficienza titolo="Most efficient rectangular section"}
Among rectangular sections with specified flow area $A$, slope $i$, and coefficient $k_s$, the uniform-flow discharge is greatest when
$$
b = 2h ,
\qquad
R = \frac{h}{2} .
$$

The condition $b = 2h$ is the design rule for lined rectangular channels. At a given discharge, setting the bottom width equal to twice the design depth minimizes the excavated area. For $Q = 5\,\mathrm{m^3/s}$, $i = 0.001$, and $k_s = 70\,\mathrm{m^{1/3}/s}$, the most efficient section has $h = 1.24\,\mathrm{m}$ and $b = 2.49\,\mathrm{m}$.

:::dimostrazione
At fixed area, discharge depends only on wetted perimeter. Maximizing discharge is therefore equivalent to minimizing the wetted perimeter.

From the Gauckler–Strickler equation, using $R = \dfrac{A}{C}$,
$$
Q = k_s\,A\left(\frac{A}{C}\right)^{\frac{2}{3}} i^{\frac{1}{2}} = k_s\,A^{\frac{5}{3}}\,C^{-2/3}\,i^{\frac{1}{2}} .
$$
Since $A$, $k_s$, and $i$ are specified, $Q$ decreases with $C$. Thus $Q$ is greatest when $C$ is smallest.

For a rectangular section $A = b h$, so $b = \dfrac{A}{h}$ and
$$
C(h) = b + 2h = \frac{A}{h} + 2h ,
\qquad h > 0 .
$$
The derivative is $C'(h) = -\dfrac{A}{h^2} + 2$, which vanishes for $h = \sqrt{\dfrac{A}{2}}$. It is negative for $h$ below this value and positive for $h$ above it. The second derivative is $C''(h) = \dfrac{2A}{h^3} > 0$, so this point is an absolute minimum. With $A = 2h^2$, we obtain $b = \dfrac{A}{h} = 2h$ and
$$
R = \frac{A}{C} = \frac{2h^2}{4h} = \frac{h}{2} .
$$
:::
::::

:::osservazione{#sezione-trapezia-ottima titolo="Most efficient trapezoidal section"}
The same procedure for a trapezoidal section with specified side slope $m$ gives
$$
b = 2h\left(\sqrt{1 + m^2} - m\right) ,
\qquad
R = \frac{h}{2} ,
$$
and the hydraulic radius equals half the water depth, as in the rectangular case. If the side slope can also vary, the wetted perimeter is minimized at $m = \dfrac{1}{\sqrt{3}}$, corresponding to banks inclined at $60^\circ$ to the horizontal. The section is then half a regular hexagon and has $b = 1.155\,h$. In an earth channel the side slope depends on the soil’s angle of friction, so the formula must use the value of $m$ required for bank stability.
:::

:::attenzione
The most efficient hydraulic section minimizes the flow area required, but other costs also contribute to the project. A rectangular channel $2.49\,\mathrm{m}$ wide and $1.24\,\mathrm{m}$ deep has area $3.10\,\mathrm{m^2}$ and perimeter $4.98\,\mathrm{m}$. A section $4.00\,\mathrm{m}$ wide carrying the same discharge requires a wider excavation but has lower banks and can use thinner walls. The final choice weighs excavation costs against lining costs and the space available.
:::

## Specific energy

At transitions such as a bed step or contraction, it is convenient to measure total head relative to the channel bed rather than a horizontal datum.

:::definizione{#energia-specifica titolo="Specific energy"}
The **specific energy** of open-channel flow is the total head measured relative to the channel bed:
$$
E = h + \frac{v^2}{2g} = h + \frac{Q^2}{2\,g\,A(h)^2} .
$$

Specific energy differs from total head by the bed elevation, so $H = z_f + E$. At fixed discharge $E$ depends only on water depth. The relation between two nearby sections can therefore be read from a two-dimensional curve. For $Q = 10\,\mathrm{m^3/s}$ in a rectangular channel of width $5\,\mathrm{m}$ with $h = 1.50\,\mathrm{m}$, we obtain $v = 1.33\,\mathrm{m/s}$ and $E = 1.50 + 0.091 = 1.59\,\mathrm{m}$.
:::

:::definizione{#numero-di-froude titolo="Froude number"}
The **Froude number** of an open-channel flow is the dimensionless quantity
$$
Fr = \frac{v}{\sqrt{g\,h_m}} ,
\qquad
h_m = \frac{A}{B} .
$$
Substitution of $v = \dfrac{Q}{A}$ and $h_m = \dfrac{A}{B}$ gives the equivalent expression
$$
Fr^2 = \frac{Q^2\,B}{g\,A^3} ,
$$
which is convenient for nonrectangular sections. The Froude number compares the flow velocity with the speed of small free-surface disturbances. Whether it lies above or below $1$ determines which end of the channel controls the flow.
:::

:::attenzione
The Froude number uses hydraulic depth $h_m = \dfrac{A}{B}$. In a nonrectangular section that widens upward, this is smaller than the water depth. In a trapezoidal channel with $b = 1.00\,\mathrm{m}$, side slope $m = 2$, $h = 1.00\,\mathrm{m}$, and $Q = 8.40\,\mathrm{m^3/s}$, we obtain $A = 3.00\,\mathrm{m^2}$, $B = 5.00\,\mathrm{m}$, $h_m = 0.600\,\mathrm{m}$, and $v = 2.80\,\mathrm{m/s}$, so
$$
Fr = \frac{2.80}{\sqrt{9.81 \cdot 0.600}} = 1.15 ,
$$
and the flow is supercritical. Using water depth in place of hydraulic depth would give $0.894$ and incorrectly classify the flow.
:::

::::teorema{#stato-critico titolo="Minimum specific energy and critical flow"}
Let the discharge $Q$ be specified in a channel of arbitrary cross section, with $A(h)$ differentiable and increasing and $\dfrac{dA}{dh} = B(h)$. Then
$$
\frac{dE}{dh} = 1 - \frac{Q^2 B}{g\,A^3} = 1 - Fr^2 ,
$$
and the function $E(h)$ has a minimum at the depth $h_c$ for which $Fr = 1$. The depth $h_c$ is the **critical depth**, and the corresponding state is *critical flow*.

The minimum of the specific-energy curve and the condition $Fr = 1$ describe the same state. Critical depth can therefore be found from $Q^2 B = g A^3$ without differentiating the curve. This determines whether a transition is possible. Where the available specific energy drops below $E(h_c)$, the section cannot pass the specified discharge.

:::dimostrazione
Differentiate the specific energy with respect to depth, holding discharge constant:
$$
\frac{dE}{dh} = \frac{d}{dh}\left(h + \frac{Q^2}{2\,g\,A^2}\right) = 1 - \frac{Q^2}{g\,A^3}\,\frac{dA}{dh} .
$$
An increase $dh$ in depth adds a strip of width $B$ and height $dh$ to the flow area, so $\dfrac{dA}{dh} = B$ and
$$
\frac{dE}{dh} = 1 - \frac{Q^2 B}{g\,A^3} = 1 - Fr^2 ,
$$
by the preceding expression for the Froude number. The derivative vanishes if and only if $Fr = 1$.

To see that this point is a minimum, consider the ratio $\dfrac{A^3}{B}$. It increases because $A$ increases and, for the channel sections considered here, grows faster than $B^{\frac{1}{3}}$. Therefore $Fr^2 = \dfrac{Q^2 B}{g A^3}$ decreases and $\dfrac{dE}{dh} = 1 - Fr^2$ increases. The derivative is negative for $h < h_c$ and positive for $h > h_c$, so $h_c$ is an absolute minimum. Moreover, $E \to +\infty$ both as $h \to 0^+$, because $A \to 0$ and the kinetic term diverges, and as $h \to +\infty$, because the depth term diverges. The minimum is thus interior.
:::
::::

::::teorema{#altezza-critica-rettangolare titolo="Critical depth in a rectangular section"}
Consider a rectangular channel of width $b$ carrying discharge $Q$, and let $q = \dfrac{Q}{b}$ be the discharge per unit width. Then
$$
h_c = \sqrt[3]{\frac{Q^2}{g\,b^2}} = \sqrt[3]{\frac{q^2}{g}} ,
\qquad
E_{\min} = \frac{3}{2}\,h_c .
$$

These two formulas solve most examination problems on rectangular channels. The first gives critical depth from discharge per unit width alone. The second gives the minimum specific energy needed to pass that discharge. For $b = 3\,\mathrm{m}$ and $Q = 6\,\mathrm{m^3/s}$ we obtain $q = 2\,\mathrm{m^2/s}$, hence $h_c = 0.742\,\mathrm{m}$ and $E_{\min} = 1.11\,\mathrm{m}$.

:::dimostrazione
For a rectangular section $A = b h$ and $B = b$, so the condition $Q^2 B = g A^3$ becomes
$$
Q^2 b = g\,b^3 h_c^3 ,
$$
from which $h_c^3 = \dfrac{Q^2}{g\,b^2}$, giving the first formula. Dividing numerator and denominator by $b^2$ gives $h_c^3 = \dfrac{q^2}{g}$, or $q^2 = g\,h_c^3$.

The specific energy at critical flow is
$$
E_{\min} = h_c + \frac{q^2}{2\,g\,h_c^2} = h_c + \frac{g\,h_c^3}{2\,g\,h_c^2} = h_c + \frac{h_c}{2} = \frac{3}{2}\,h_c ,
$$
using $q^2 = g h_c^3$. Thus at critical flow the velocity head equals half the water depth.
:::
::::

## Subcritical and supercritical flow

The sign of $\dfrac{dE}{dh}$ divides water depths into two ranges that behave differently through transitions.

:::definizione{#correnti-lente-e-veloci titolo="Subcritical and supercritical flow"}
Open-channel flow is classified as

- **subcritical** (tranquil) if $Fr < 1$, equivalently $h > h_c$;
- **supercritical** (rapid) if $Fr > 1$, equivalently $h < h_c$;
- critical if $Fr = 1$, equivalently $h = h_c$.

The equivalence of these conditions follows from the monotonic dependence of $Fr$ on depth established in the proof of the specific-energy minimum. In subcritical flow an increase in specific energy raises the water surface because $\dfrac{dE}{dh} > 0$. In supercritical flow it lowers the surface. This sign difference explains why an upward bed step lowers the water surface in subcritical flow and raises it in supercritical flow.
:::

:::osservazione{#altezze-alternate titolo="Alternate depths"}
For a given discharge and any $E > E_{\min}$, the equation $E(h) = E$ has exactly two solutions. One lies below $h_c$ and corresponds to supercritical flow. The other lies above $h_c$ and corresponds to subcritical flow. They are called **alternate depths** and represent the two ways in which the same discharge can carry the same specific energy.

The two solutions follow from the shape of the curve. The function $E$ is strictly decreasing on $(0, h_c)$, strictly increasing on $(h_c, +\infty)$, and tends to $+\infty$ at both extremes. For a rectangular section the two depths are found by solving
$$
h^3 - E\,h^2 + \frac{q^2}{2g} = 0 ,
$$
which follows by multiplying $E = h + \dfrac{q^2}{2 g h^2}$ by $h^2$. The equation has three real roots; the negative root is discarded.

::grafico{curve="t+0.203874/t^2,t,0.25,2.3;t,t,0,2.3" xmin=0 xmax=2.6 ymin=0 ymax=2.3 nomi="E,h" punti="1.1123,0.7415,pieno;1.6,1.5107,pieno;1.6,0.4147,pieno" segmenti="1.6,0.4147,1.6,1.5107;0,0.7415,1.1123,0.7415" etichette="1.72,1.52,subcritical flow;1.72,0.42,supercritical flow;0.1,0.86,critical depth" legenda="E(h) = h + \dfrac{q^2}{2\,g\,h^2};E = h" titolo="Specific-energy curve for $q = 2\,\mathrm{m^2/s}$: the energy $E = 1.60\,\mathrm{m}$ corresponds to alternate depths $1.51\,\mathrm{m}$ and $0.415\,\mathrm{m}$, and the minimum $E_{\min} = 1.11\,\mathrm{m}$ occurs at $h_c = 0.742\,\mathrm{m}$"}
:::

:::esempio{titolo="Alternate depth in a rectangular channel"}
A rectangular channel of width $b = 4\,\mathrm{m}$ carries $Q = 10\,\mathrm{m^3/s}$ at $h = 2.00\,\mathrm{m}$. We obtain $q = 2.50\,\mathrm{m^2/s}$, $v = 1.25\,\mathrm{m/s}$, and
$$
Fr = \frac{1.25}{\sqrt{9.81 \cdot 2.00}} = 0.282 ,
$$
so the flow is **subcritical**. The specific energy is $E = 2.00 + 0.0797 = 2.08\,\mathrm{m}$ and the second positive root of $h^3 - 2.08\,h^2 + 0.319 = 0$ is $h' = 0.441\,\mathrm{m}$. At this depth the velocity would be $v' = 5.67\,\mathrm{m/s}$ and the Froude number $2.73$. The alternate depth therefore corresponds to supercritical flow, as expected because it is smaller than $h_c = 0.860\,\mathrm{m}$.
:::

:::osservazione{#portata-a-energia-costante titolo="Discharge at fixed specific energy"}
If specific energy is fixed instead of discharge, its definition gives
$$
Q(h) = A(h)\sqrt{2g\,(E - h)} ,
\qquad 0 < h < E .
$$
Discharge vanishes at $h = 0$, where the flow area is zero, and at $h = E$, where the velocity head is zero. It reaches a maximum between the two limits. For a rectangular section $Q = b\,h\sqrt{2g(E-h)}$, and the maximum occurs at $h = \dfrac{2}{3}E$, the critical depth for that discharge. Critical flow is therefore the only state at which the discharge cannot be increased without increasing the specified specific energy.
:::

## Critical slope and channel classification

Normal depth depends on bed slope and roughness. Critical depth depends only on discharge and cross-sectional geometry. Comparing the two classifies the channel.

:::definizione{#pendenza-critica titolo="Critical slope"}
The **critical slope** $i_c$ is the bed slope at which normal depth equals critical depth. It follows from the Gauckler–Strickler equation applied at critical flow:
$$
i_c = \frac{Q^2}{k_s^2\,A_c^2\,R_c^{\frac{4}{3}}} = \frac{v_c^2}{k_s^2\,R_c^{\frac{4}{3}}} ,
$$
where $A_c$, $R_c$, and $v_c$ are the flow area, hydraulic radius, and mean velocity calculated at critical depth.

Critical slope depends on discharge because $h_c$ depends on discharge. The same channel can therefore have a mild slope for one discharge and a steep slope for another. For a rectangular channel of width $3\,\mathrm{m}$, with $Q = 6\,\mathrm{m^3/s}$ and $k_s = 70\,\mathrm{m^{1/3}/s}$, we obtain $h_c = 0.742\,\mathrm{m}$, $R_c = 0.496\,\mathrm{m}$, $v_c = 2.70\,\mathrm{m/s}$, and $i_c = 0.00378$.
:::

:::osservazione{#alvei-debole-forte titolo="Mild and steep channels"}
Comparing bed slope with critical slope is equivalent to comparing normal and critical depth:
$$
\begin{cases}
i < i_c & \Longrightarrow \quad h_0 > h_c \\[4pt]
i = i_c & \Longrightarrow \quad h_0 = h_c \\[4pt]
i > i_c & \Longrightarrow \quad h_0 < h_c
\end{cases}
$$
In the first case the channel has a **mild slope**, and uniform flow is subcritical. In the third case the channel has a **steep slope**, and uniform flow is supercritical. This follows because $Q(h)$ increases. When the slope drops below $i_c$, carrying the specified discharge requires a larger flow area and hence a depth greater than $h_c$.

The distinction determines how steady-flow profiles are constructed and where control sections occur. See the chapter on steady-flow profiles and hydraulic jumps.
:::

:::esempio{titolo="Classifying a channel"}
A rectangular channel of width $b = 2.50\,\mathrm{m}$, with $k_s = 60\,\mathrm{m^{1/3}/s}$ and bed slope $i = 0.010$, carries $Q = 5\,\mathrm{m^3/s}$. The critical depth is $h_c = 0.742\,\mathrm{m}$, giving $A_c = 1.85\,\mathrm{m^2}$, $R_c = 0.465\,\mathrm{m}$, $v_c = 2.70\,\mathrm{m/s}$, and
$$
i_c = \frac{2.70^2}{60^2 \cdot 0.465^{\frac{4}{3}}} = 0.00560 .
$$
Since $i = 0.010 > i_c$, the channel has a **steep slope**. Calculating the normal depth confirms this result: $h_0 = 0.606\,\mathrm{m} < h_c$ and $Fr = 1.35$, so uniform flow is supercritical.
:::

## Celerity of small surface disturbances

The Froude number was introduced as the ratio of the flow velocity to a characteristic velocity. This velocity can now be calculated.

::::teorema{#celerita-delle-perturbazioni titolo="Celerity of small surface disturbances"}
In a rectangular channel containing still water of depth $h$, a free-surface disturbance with amplitude $\delta h$ small compared with $h$ travels with celerity
$$
c = \sqrt{g\,h} .
$$
For a general section the same formula uses hydraulic depth, giving $c = \sqrt{g\,h_m}$.

Since $Fr = \dfrac{v}{c}$, this relation explains the physical meaning of the Froude number and distinguishes the two regimes. In subcritical flow a disturbance travels upstream at speed $c - v > 0$. In supercritical flow it is carried downstream. For $h = 1.20\,\mathrm{m}$ the celerity is $c = 3.43\,\mathrm{m/s}$.

:::dimostrazione
Observe the flow in a frame moving with the disturbance. In that frame the flow is steady, so continuity and the integral momentum equation apply.

Use a frame fixed to the wave front. Undisturbed water approaches at velocity $c$ and depth $h$. It crosses the front and leaves at depth $h + \delta h$ and velocity $c - \delta v$, where $\delta v$ is the velocity imparted to the water in the stationary frame. Let $b$ be the channel width. Continuity gives
$$
c\,h = (c - \delta v)(h + \delta h) = c\,h + c\,\delta h - \delta v\,h - \delta v\,\delta h .
$$
Neglecting the second-order product $\delta v\,\delta h$ gives $c\,\delta h = h\,\delta v$, so
$$
\delta v = \frac{c\,\delta h}{h} .
$$
Apply the integral momentum equation to a control volume enclosing the wave front and project it onto the flow direction. The hydrostatic pressure forces on the two sections are $\gamma\,\dfrac{b\,h^2}{2}$ and $\gamma\,\dfrac{b\,(h + \delta h)^2}{2}$, directed into the volume. The component of weight and the boundary resistance are negligible over this short distance. The balance is
$$
\rho\,b\,c\,h\,\big[(c - \delta v) - c\big] = \gamma\,\frac{b\,h^2}{2} - \gamma\,\frac{b\,(h + \delta h)^2}{2} .
$$
Expanding the square and neglecting $\delta h^2$ gives $(h+\delta h)^2 - h^2 \simeq 2 h\,\delta h$, so
$$
-\rho\,c\,h\,\delta v = -\gamma\,h\,\delta h ,
$$
that is, $\rho\,c\,\delta v = \gamma\,\delta h$ and hence $\delta v = \dfrac{g\,\delta h}{c}$, since $\gamma = \rho g$. Equating the two expressions for $\delta v$ gives
$$
\frac{c\,\delta h}{h} = \frac{g\,\delta h}{c} ,
$$
from which $c^2 = g\,h$ and therefore $c = \sqrt{g\,h}$.
:::
::::

:::osservazione{#significato-di-froude titolo="Meaning of the Froude number"}
If the water moves with mean velocity $v$, the two waves generated at one point have propagation velocities $c - v$ for the upstream wave and $c + v$ for the downstream wave. The sign of the first depends on the Froude number:

- In **subcritical** flow $v < c$, so $Fr < 1$ and the disturbance travels upstream. A change imposed downstream, such as moving a sluice gate, can therefore affect the flow upstream.
- In **supercritical** flow $v > c$, so $Fr > 1$ and both disturbances travel downstream. Conditions upstream therefore control the flow.

For a flow of depth $1.30\,\mathrm{m}$, hydraulic depth $0.969\,\mathrm{m}$, and velocity $1.82\,\mathrm{m/s}$, we obtain $c = 3.08\,\mathrm{m/s}$ and $Fr = 0.591$. A disturbance travels upstream at speed $1.26\,\mathrm{m/s}$ and downstream at speed $4.90\,\mathrm{m/s}$.

::schema{nodi="P,5,1.2" nomi=0 acqua="0,0 10,0 10,1.2 0,1.2" solidi="0,-0.7 10,-0.7 10,0 0,0" pelo="0,10,1.2,p_a = 0" frecce="4.2,0.6,5.8,0.6,v;4.4,1.65,2.9,1.65,c − v;5.6,1.65,7.1,1.65,c + v" etichette="5.0,2.2,disturbance" riferimento=0 titolo="The two disturbances originating at one point travel with velocities $c - v$ in the upstream direction and $c + v$ in the downstream direction"}
:::
