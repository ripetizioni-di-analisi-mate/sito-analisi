---
titolo: "Friction and minor head losses"
sommario: "Flow resistance in pressurized pipes, the relation between wall shear stress and the energy gradient, the Darcy–Weisbach equation, laminar flow and the Hagen–Poiseuille law, the Colebrook–White equation and the Moody diagram, power-law formulas, and minor losses, including the Borda–Carnot loss."
---

## Head loss in pressurized pipes

A real fluid flowing through a pipe loses total head because viscosity and contact with the wall produce shear stresses that dissipate mechanical energy. This section defines the quantities used to measure this loss.

:::richiamo{#bernoulli-fluido-reale titolo="Bernoulli’s equation for real fluid flow"}
Let $1$ and $2$ be two sections of a steady, one-dimensional flow of an incompressible fluid, with section $2$ downstream of section $1$. Taking $\alpha = 1$, the total heads at the two sections are
$$
H_1 = z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} ,
\qquad
H_2 = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} ,
$$
and $H_1 = H_2 + \Delta H$, where $\Delta H \geq 0$ is the head loss between the sections. See the chapter on Bernoulli’s equation and total head.
:::

:::definizione{#perdita-di-carico titolo="Friction head loss and the energy gradient"}
**Friction head loss** (or distributed head loss) is the loss of total head along a straight pipe of constant cross section due to shear stress acting over the entire wall. For a pipe length $L$, write
$$
\Delta H = J\,L ,
$$
where $J$ is the **energy gradient**, the head loss per unit pipe length. The gradient is dimensionless because it is a ratio of two lengths.

In a pipe of constant cross section, the mean velocity is the same at every section. The velocity head $\dfrac{v^2}{2g}$ is therefore constant, and the energy grade line and hydraulic grade line are parallel. The energy gradient gives the slope of both lines. For a pipe of length $800\,\mathrm{m}$ with $J = 0.022$, the head loss is $\Delta H = 17.6\,\mathrm{m}$.

::schema{nodi="A,0,2;B,14,2" condotte="A-B,0.6" piezometrica="0,4.6 14,3.2" energia="0,5.1 14,3.7" tratteggi="0,4.6 14,4.6" linee="0,-0.6 14,-0.6" etichette="2.6,5.4,energy grade line;8.0,2.95,hydraulic grade line;6.8,1.3,D;5.4,-0.3,datum" quote="14 3.2,14 4.6,ΔH,0.9;A,B,L,1.3" riferimento=0 titolo="Constant-area pipe showing the head loss $\Delta H$ between the two sections and the energy gradient $J = \dfrac{\Delta H}{L}$"}
:::

:::osservazione{#perdite-continue-e-localizzate titolo="Friction losses and minor losses"}
Head loss in a piping system arises in two ways.

- In straight pipe of constant cross section, the flow is uniform, and the loss increases in proportion to the distance traveled. This is the friction loss $\Delta H = J L$.
- At an entrance, a change of cross section, a bend, or a control valve, the flow changes shape, separates from the wall, and generates eddies that dissipate energy over a short distance. This **minor loss** is assigned to a single section.

The total loss between two sections is the sum of the friction losses in the pipe lengths and the minor losses at the fittings between them.
:::

## Wall shear stress

The energy gradient measures the energy dissipated per unit weight and unit length. Shear stress measures the tangential force the wall exerts per unit area of fluid in contact with it. The integral momentum equation relates the two quantities.

:::richiamo{#equazione-globale-richiamo titolo="Integral momentum equation for steady flow"}
Consider a control volume with one inlet and one outlet carrying a steady discharge $Q$. Then
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} ,
$$
where $\vec{\Pi}_i = p_i A_i \hat{n}_i$ are the pressure forces on the two cross sections, directed into the control volume, $\vec{G}$ is the weight of the fluid within it, and $\vec{R}$ is the force the walls exert on the fluid. See the chapter on the integral momentum equation.
:::

::::teorema{#sforzo-alla-parete titolo="Wall shear stress and the energy gradient"}
Consider uniform flow in a conduit with cross-sectional area $A$, wetted perimeter $C$, and hydraulic radius $R = \dfrac{A}{C}$. Let $\tau_0$ denote the shear stress exerted by the wall on the fluid, assumed constant around the perimeter. Then
$$
\tau_0 = \gamma\,R\,J .
$$
For a full circular pipe of diameter $D$, we have $R = \dfrac{D}{4}$, so $\tau_0 = \dfrac{\gamma D J}{4}$.

This relation connects the gradient, which can be measured from the hydraulic grade line, to the force the flow exerts on the pipe. For a pipe with $D = 0.25\,\mathrm{m}$ and $J = 0.0088$, it gives $\tau_0 = 9810 \cdot 0.0625 \cdot 0.0088 = 5.40\,\mathrm{Pa}$.

::schema{nodi="A,0,1;B,8,3" condotte="A-B,1.2" pressioni="-0.146 1.582,0.146 0.418,0.7,0.7,p_1;7.854 3.582,8.146 2.418,0.7,0.7,p_2,-1" frecce="2.654,2.282,1.684,2.040,τ_0;2.946,1.118,1.976,0.875,;5.854,3.082,4.884,2.840,;6.146,1.918,5.176,1.675,;2.4,1.6,3.6,1.9,v" forze="5 2.25,0,-1.7,G" etichette="0.25,2.3,1;7.3,1.45,2" linee="-1,-0.7 9.4,-0.7" quote="0.146 0.418,0.146 -0.7,z_1,0.9;8.146 2.418,8.146 -0.7,z_2,-0.9" titolo="Fluid between sections $1$ and $2$, showing the pressures on the two sections, the weight $G$, and the wall shear stress $\tau_0$"}

:::dimostrazione
In uniform flow the incoming and outgoing momentum fluxes are equal. The resultant force on the fluid between the sections must therefore be zero.

Take as the control volume the fluid between two sections a distance $\Delta s$ apart along the pipe axis, which is inclined at angle $\theta$ to the horizontal. Project the integral momentum equation onto the axis, taking the flow direction as positive. Both sections have the same area $A$ and mean velocity $v$, so $\vec{v}_2 - \vec{v}_1 = \vec{0}$ and the left-hand side vanishes.

The inward pressure forces on the sections have axial components $p_1 A$ and $-p_2 A$. The weight $G = \gamma A \Delta s$ acts vertically, so its axial component is $-\gamma A \Delta s \sin\theta$, negative because the flow moves uphill. The wall exerts shear stress $\tau_0$ over area $C \Delta s$ in the direction opposite the flow, giving a force contribution $-\tau_0 C \Delta s$. The axial momentum equation becomes
$$
0 = p_1 A - p_2 A - \gamma A \Delta s \sin\theta - \tau_0\,C\,\Delta s .
$$

Since $\Delta s \sin\theta = z_2 - z_1$, factoring $\gamma A$ out of the first three terms gives
$$
\gamma A \left[ \left( z_1 + \frac{p_1}{\gamma} \right) - \left( z_2 + \frac{p_2}{\gamma} \right) \right] = \tau_0\,C\,\Delta s .
$$

The two velocity heads are equal. The difference in piezometric heads therefore equals the difference in total heads, namely the loss $\Delta H = J \Delta s$. Substitution gives $\gamma A J \Delta s = \tau_0 C \Delta s$, and division by $C \Delta s$ yields $\tau_0 = \gamma \dfrac{A}{C} J = \gamma R J$.
:::
::::

:::osservazione{#distribuzione-dello-sforzo titolo="Shear stress across the pipe"}
Apply the same force balance to the fluid inside a coaxial cylinder of radius $r$ to find the shear stress on its lateral surface. The cylinder has cross-sectional area $\pi r^2$ and perimeter $2\pi r$, hence hydraulic radius $\dfrac{r}{2}$. Thus
$$
\tau(r) = \gamma\,\frac{r}{2}\,J = \tau_0\,\frac{2r}{D} .
$$
The stress increases linearly from zero at the centerline to $\tau_0$ at the wall. This distribution holds for both laminar and turbulent flow because the derivation made no assumption about the relation between stress and velocity.
:::

## The Darcy–Weisbach equation

The relation $\tau_0 = \gamma R J$ alone does not determine the energy gradient, because $\tau_0$ is unknown. Laboratory measurements show that wall shear stress in a pipe is proportional to the kinetic energy per unit volume. This observation leads to the equation commonly used in practice.

:::definizione{#indice-di-resistenza titolo="Darcy friction factor"}
The **Darcy friction factor** $\lambda$ is the dimensionless coefficient defined by
$$
\tau_0 = \frac{\lambda}{8}\,\rho\,v^2 ,
$$
where $v$ is the mean velocity across the section. The factor $\dfrac{1}{8}$ is a convention chosen so that the Darcy–Weisbach equation has no numerical prefactor. Measurements show that $\lambda$ depends on the Reynolds number and the relative roughness of the wall.
:::

:::richiamo{#numero-di-reynolds titolo="Reynolds number"}
For flow in a circular pipe of diameter $D$ with mean velocity $v$ and fluid kinematic viscosity $\nu$,
$$
Re = \frac{v\,D}{\nu} .
$$
Flow is laminar for $Re < 2000$ and turbulent for $Re > 4000$. The transition range lies between these values. See the chapter on fluid kinematics and the continuity equation.
:::

::::teorema{#darcy-weisbach titolo="Darcy–Weisbach equation"}
Consider uniform flow in a full circular pipe of diameter $D$ with mean velocity $v$ and Darcy friction factor $\lambda$. The energy gradient is
$$
J = \lambda\,\frac{1}{D}\,\frac{v^2}{2g} ,
$$
and the friction head loss over a length $L$ is
$$
\Delta H = \lambda\,\frac{L}{D}\,\frac{v^2}{2g} .
$$

Three factors determine the loss: the relative length $\dfrac{L}{D}$, the velocity head $\dfrac{v^2}{2g}$, and the friction factor $\lambda$, which accounts for the flow regime and wall properties. With $D = 0.20\,\mathrm{m}$, $L = 800\,\mathrm{m}$, $v = 1.91\,\mathrm{m/s}$, and $\lambda = 0.0239$, the result is $\Delta H = 0.0239 \cdot 4000 \cdot 0.186 = 17.8\,\mathrm{m}$.

:::dimostrazione
Equate the two expressions for wall shear stress. The wall shear relation gives $\tau_0 = \gamma R J$. For a full circular pipe $R = \dfrac{D}{4}$, so $\tau_0 = \gamma \dfrac{D}{4} J$. The definition of the friction factor gives $\tau_0 = \dfrac{\lambda}{8}\rho v^2$. Equating these expressions gives
$$
\gamma\,\frac{D}{4}\,J = \frac{\lambda}{8}\,\rho\,v^2 .
$$
Divide by $\gamma \dfrac{D}{4}$ and use $\gamma = \rho g$ to obtain
$$
J = \frac{\lambda\,\rho\,v^2}{8}\cdot\frac{4}{\rho g D} = \lambda\,\frac{1}{D}\,\frac{v^2}{2g} .
$$
Multiplying by $L$ gives the head loss over a length $L$ because $\Delta H = J L$.
:::
::::

:::osservazione{#dipendenza-di-lambda titolo="What determines the friction factor?"}
Nikuradse systematically tested pipes that had been artificially roughened by gluing sand grains to their inner walls. His results showed that $\lambda$ depends on just two dimensionless groups,
$$
\lambda = \lambda\!\left( Re,\ \frac{\varepsilon}{D} \right) ,
$$
where $\varepsilon$ is the mean height of the wall roughness elements. In laminar flow $\lambda$ depends only on the Reynolds number. In turbulent flow it depends on both groups, but at sufficiently high Reynolds numbers it depends only on the relative roughness.
:::

## Laminar flow

In laminar flow Newton’s law relates stress to velocity. The velocity distribution and friction factor can therefore be derived theoretically without empirical coefficients.

:::richiamo{#legge-di-newton titolo="Newton’s law of viscosity"}
For laminar flow of a Newtonian fluid, the shear stress between adjacent layers is proportional to the velocity gradient normal to the flow,
$$
\tau = \mu\,\left|\frac{dv}{dr}\right| ,
$$
where $\mu = \rho\,\nu$ is the dynamic viscosity. See the chapter on fluid properties and fluid statics.
:::

::::teorema{#hagen-poiseuille titolo="Velocity distribution and the Hagen–Poiseuille law"}
Consider steady uniform laminar flow in a full circular pipe of radius $r_0 = \dfrac{D}{2}$ with energy gradient $J$ and fluid dynamic viscosity $\mu$. At distance $r$ from the centerline, the velocity is
$$
v(r) = \frac{\gamma\,J}{4\mu}\left( r_0^2 - r^2 \right) ,
$$
The profile is therefore parabolic, with maximum velocity on the centerline and zero velocity at the wall. The discharge and mean velocity are
$$
Q = \frac{\pi\,\gamma\,J\,D^4}{128\,\mu} ,
\qquad
v = \frac{\gamma\,J\,D^2}{32\,\mu} = \frac{v_{\max}}{2} .
$$

The **Hagen–Poiseuille law** states that in laminar flow the discharge is proportional to the energy gradient and the fourth power of the diameter. In turbulent flow the discharge increases approximately as the square root of the gradient. Solving for the gradient gives $J = \dfrac{32\,\nu\,v}{g\,D^2}$, which can be used to find the head loss for oil flowing through a pipe.

::grafico{curve="2*(1-t^2),t,-1,1" linee="0,1 3.2,1;0,-1 3.2,-1" vettori="0,0,2,0,v max;0,0.5,1.5,0.5;0,-0.5,1.5,-0.5;0,0.85,0.555,0.85;0,-0.85,0.555,-0.85" unicolore=1 assi=0 uguale=1 xmin=-0.9 xmax=3.4 ymin=-1.5 ymax=1.5 etichette="2.4,1.15,wall;-0.85,0.95,r = r₀;-0.85,0,r = 0;-0.85,-1.05,r = r₀" titolo="Laminar flow with a parabolic velocity profile, $v_{\max}$ at the centerline, and zero velocity at the wall"}

:::dimostrazione
Write the shear stress in two ways, using first the distribution derived from force equilibrium and then Newton’s law of viscosity. Integrate the resulting differential equation.

From the cross-sectional stress distribution, the shear stress on a coaxial cylinder of radius $r$ is $\tau(r) = \dfrac{\gamma J r}{2}$. Velocity decreases as $r$ increases, so $\dfrac{dv}{dr} \leq 0$ and Newton’s law becomes $\tau = -\mu\dfrac{dv}{dr}$. Equating the two expressions gives
$$
-\mu\,\frac{dv}{dr} = \frac{\gamma\,J\,r}{2}
\qquad\Longrightarrow\qquad
\frac{dv}{dr} = -\frac{\gamma\,J}{2\mu}\,r .
$$

The variables separate, so direct integration gives
$$
v(r) = -\frac{\gamma\,J}{4\mu}\,r^2 + c .
$$
The no-slip condition at the wall gives $v(r_0) = 0$, hence $c = \dfrac{\gamma J r_0^2}{4\mu}$. Substitution yields the required parabolic profile, with its vertex on the centerline and $v_{\max} = \dfrac{\gamma J r_0^2}{4\mu}$.

Integrate the velocity over the cross section to obtain the discharge. A circular ring of radius $r$ and thickness $dr$ has area $2\pi r\,dr$, so
$$
Q = \int_0^{r_0} \frac{\gamma J}{4\mu}\left( r_0^2 - r^2 \right) 2\pi r\,dr
= \frac{\pi\gamma J}{2\mu}\left[ \frac{r_0^2 r^2}{2} - \frac{r^4}{4} \right]_0^{r_0}
= \frac{\pi\,\gamma\,J\,r_0^4}{8\mu} .
$$
Since $r_0 = \dfrac{D}{2}$, we have $r_0^4 = \dfrac{D^4}{16}$ and therefore $Q = \dfrac{\pi \gamma J D^4}{128\mu}$. Dividing by the area $\dfrac{\pi D^2}{4}$ gives $v = \dfrac{\gamma J D^2}{32\mu}$, half of $v_{\max}$.
:::
::::

::::teorema{#lambda-laminare titolo="Friction factor in laminar flow"}
Consider uniform laminar flow in a full circular pipe. Then
$$
\lambda = \frac{64}{Re} .
$$
In laminar flow the friction factor depends only on the Reynolds number. The roughness elements remain submerged in fluid immediately adjacent to the wall, so wall roughness has no effect. For $Re = 1061$, the friction factor is $\lambda = 0.0603$, much larger than typical turbulent-flow values.

:::dimostrazione
Compare the two expressions for the energy gradient. Write the Hagen–Poiseuille law in terms of $J$ and use $\mu = \rho\nu$ and $\gamma = \rho g$ to obtain
$$
J = \frac{32\,\nu\,v}{g\,D^2} .
$$
The Darcy–Weisbach equation gives $J = \lambda\dfrac{1}{D}\dfrac{v^2}{2g}$. Equating the two expressions and solving for $\lambda$ yields
$$
\lambda = \frac{2\,g\,D\,J}{v^2} = \frac{2\,g\,D}{v^2}\cdot\frac{32\,\nu\,v}{g\,D^2} = \frac{64\,\nu}{v\,D} = \frac{64}{Re} .
$$
:::
::::

## Turbulent flow, roughness, the Colebrook–White equation, and the Moody diagram

In turbulent flow, mixing transports momentum. Newton’s law of viscosity alone therefore cannot determine $\lambda$, and correlations based on measurements are used.

:::definizione{#scabrezza titolo="Absolute and relative roughness"}
The **absolute roughness** $\varepsilon$ is the mean height of the roughness elements on the inner wall, measured in millimeters. The **relative roughness** is the dimensionless ratio $\dfrac{\varepsilon}{D}$. Typical values measured in pipes in service are $0.002$–$0.02\,\mathrm{mm}$ for glass and plastics, $0.05$–$0.10\,\mathrm{mm}$ for new steel, $0.25$–$0.50\,\mathrm{mm}$ for new cast iron, $1$–$3\,\mathrm{mm}$ for heavily encrusted cast iron, and $0.3$–$3\,\mathrm{mm}$ for concrete. A cast-iron pipe with $\varepsilon = 0.4\,\mathrm{mm}$ and $D = 200\,\mathrm{mm}$ has relative roughness $0.002$.
:::

:::osservazione{#colebrook-white titolo="Colebrook–White equation"}
Colebrook and White fitted measurements on commercial pipes with the equation
$$
\frac{1}{\sqrt{\lambda}} = -2\,\log_{10}\!\left( \frac{2.51}{Re\,\sqrt{\lambda}} + \frac{\varepsilon}{3.71\,D} \right) ,
$$
which applies throughout the turbulent range, that is, for $Re > 4000$. This is an empirical relation derived from measurements. It reproduces them within a few percent.

The unknown $\lambda$ appears on both sides of the equation, so it is found by iteration. Choose a starting value such as $\lambda = 0.025$, evaluate the right-hand side, solve for the new value, and repeat until successive values differ by less than the specified tolerance. Three or four iterations suffice.
:::

:::osservazione{#tubi-lisci titolo="Hydraulically smooth pipes"}
When the roughness elements are small compared with the thickness of the fluid layer adjacent to the wall, roughness does not affect resistance and the pipe is **hydraulically smooth**. In this range the second term in the Colebrook–White equation is negligible compared with the first, giving the Prandtl smooth-pipe relation,
$$
\frac{1}{\sqrt{\lambda}} = 2\,\log_{10}\!\left( Re\,\sqrt{\lambda} \right) - 0.8 ,
$$
in which $\lambda$ depends only on the Reynolds number. Compare the two terms using the actual flow data. If $\dfrac{\varepsilon}{3.71 D}$ is less than one tenth of $\dfrac{2.51}{Re\sqrt{\lambda}}$, the pipe behaves as hydraulically smooth.
:::

:::osservazione{#assolutamente-turbolento titolo="Fully rough turbulent flow"}
As the Reynolds number increases, the term $\dfrac{2.51}{Re\sqrt{\lambda}}$ becomes negligible compared with $\dfrac{\varepsilon}{3.71 D}$ and the Colebrook–White equation reduces to the Prandtl–Nikuradse law,
$$
\frac{1}{\sqrt{\lambda}} = 2\,\log_{10}\!\left( \frac{3.71\,D}{\varepsilon} \right) ,
$$
in which $\lambda$ depends only on relative roughness. In this **fully rough turbulent regime**, the energy gradient is proportional to the square of velocity. The group $\dfrac{u_*\varepsilon}{\nu}$, with $u_* = \sqrt{\dfrac{\tau_0}{\rho}} = v\sqrt{\dfrac{\lambda}{8}}$, identifies the regime. The flow is fully rough for $\dfrac{u_*\varepsilon}{\nu} > 70$, or approximately $Re\sqrt{\lambda}\,\dfrac{\varepsilon}{D} > 200$. Cast-iron and concrete water mains almost always operate in this regime at their normal velocities, which justifies using power-law formulas.
:::

:::osservazione{#abaco-di-moody titolo="Reading the Moody diagram"}
The **Moody diagram** plots $\lambda$ against $Re$ on logarithmic axes, with relative roughness $\dfrac{\varepsilon}{D}$ as a parameter. Three regions can be distinguished. The straight line for laminar flow follows $\lambda = \dfrac{64}{Re}$ up to $Re = 2000$. The family of curves for transitionally rough turbulent flow starts at the smooth-pipe curve and separates from it as $Re$ increases. In the fully rough regime the lines are horizontal, one for each relative roughness.

Calculate $Re$ and $\dfrac{\varepsilon}{D}$. Start at $Re$ on the horizontal axis, go up to the curve for the given relative roughness, and read $\lambda$ from the vertical axis. The value agrees with an iterative solution of the Colebrook–White equation because the diagram plots that equation.

::grafico{f="1/(1.8*log(6.9/10^x)/log(10))^2;1/(1.8*log(6.9/10^x+0.00023573)/log(10))^2;1/(1.8*log(6.9/10^x+0.000018290)/log(10))^2" xmin=3 xmax=8 ymin=0 ymax=0.07 nomi=",λ" etichette="6.2,0.0265,ε/D = 0.002;6.2,0.0158,ε/D = 0.0002;6.2,0.0075,smooth pipe;6.9,0.0035,log₁₀ Re" titolo="Qualitative variation of turbulent friction factor $\lambda$ with $Re$ and relative roughness $\dfrac{\varepsilon}{D}$"}
:::

:::attenzione
The fully rough turbulent relation applies only where $Re\sqrt{\lambda}\,\dfrac{\varepsilon}{D} > 200$ holds.

For a plastic pipe with $D = 250\,\mathrm{mm}$, $\varepsilon = 0.02\,\mathrm{mm}$, and $Q = 90\,\mathrm{L/s}$, we obtain $v = 1.83\,\mathrm{m/s}$, $Re = 4.58 \cdot 10^5$, and $\dfrac{\varepsilon}{D} = 8 \cdot 10^{-5}$. The Colebrook–White equation gives $\lambda = 0.0144$, whereas the Prandtl–Nikuradse law would give $\lambda = 0.0115$, an error of $20\,\%$ in the head loss. The regime indicator is $4.4$, far below $200$, so the pipe operates in the transitionally rough range.
:::

## Power-law formulas for engineering calculations

In the fully rough regime, $\lambda$ no longer depends on the Reynolds number. The energy gradient can therefore be represented by single-term power laws that simplify design calculations.

:::definizione{#chezy titolo="Chézy equation"}
The **Chézy equation** gives the mean velocity of uniform flow as
$$
v = \chi\,\sqrt{R\,J} ,
$$
where $R$ is the hydraulic radius and $\chi$ is the Chézy coefficient, which has dimensions of $\mathrm{m^{1/2}/s}$ and increases as the wall becomes smoother. Because the equation uses hydraulic radius rather than diameter, it applies both to pressurized pipes and to open channels.
:::

:::definizione{#gauckler-strickler titolo="Gauckler–Strickler equation"}
The **Gauckler–Strickler equation** specifies how the Chézy coefficient depends on the hydraulic radius,
$$
v = k_s\,R^{\frac{2}{3}}\,J^{\frac{1}{2}} ,
$$
where $k_s$, measured in $\mathrm{m^{1/3}/s}$, is the roughness coefficient. Its value increases as the wall becomes smoother. Typical measured values for pipes and channels in service are $120$ for plastics, $100$–$110$ for steel, $90$–$100$ for new cast iron, $70$–$80$ for cast iron after years in service, $75$–$85$ for finished concrete, and $60$–$70$ for rough concrete. Manning’s coefficient $n$, commonly used in English-language references, is the reciprocal of $k_s$.

Solving for the energy gradient gives the usual form
$$
J = \frac{v^2}{k_s^2\,R^{\frac{4}{3}}} ,
$$
which gives the loss directly without iteration. For a concrete pipe with $D = 0.40\,\mathrm{m}$, $k_s = 80\,\mathrm{m^{1/3}/s}$, and $Q = 120\,\mathrm{L/s}$, the results are $v = 0.955\,\mathrm{m/s}$, $R = 0.10\,\mathrm{m}$, and $J = 0.00307$.
:::

:::osservazione{#legame-monomie-lambda titolo="Relation to the Darcy friction factor"}
The power-law and Darcy–Weisbach equations describe the same energy gradient, so their coefficients are related. Equating $v = \chi\sqrt{RJ}$ and $J = \lambda\dfrac{1}{4R}\dfrac{v^2}{2g}$, with the latter expressed using $D = 4R$, gives
$$
\chi = \sqrt{\frac{8g}{\lambda}} ,
\qquad
\chi = k_s\,R^{\frac{1}{6}} .
$$
This comparison establishes where the power laws apply. The coefficient $\chi$ depends only on roughness, so the formulas apply where $\lambda$ is independent of the Reynolds number, namely in fully rough turbulent flow. In the preceding example $\lambda = 0.0264$ gives $\chi = 54.5\,\mathrm{m^{1/2}/s}$, and $k_s R^{\frac{1}{6}} = 80 \cdot 0.681 = 54.5\,\mathrm{m^{1/2}/s}$.
:::

## Minor losses

Where the flow changes direction or cross-sectional area, separation from the wall generates eddies that dissipate energy over a short distance. The resulting head loss is expressed as a fraction of velocity head.

:::definizione{#perdita-localizzata titolo="Minor-loss coefficient"}
The **minor loss** due to a fitting is written
$$
\Delta H_{\mathrm{loc}} = \xi\,\frac{v^2}{2g} ,
$$
where $\xi$ is a dimensionless coefficient determined by the fitting geometry and $v$ is the velocity at a specified section, usually downstream of the fitting. The value of $v$ to which $\xi$ refers must be stated because the product $\xi\dfrac{v^2}{2g}$ changes if the reference section changes.
:::

::::teorema{#borda titolo="Borda–Carnot loss at a sudden expansion"}
Consider a horizontal pipe that expands abruptly from area $A_1$ to area $A_2 > A_1$ and carries discharge $Q$ with mean velocities $v_1 = \dfrac{Q}{A_1}$ and $v_2 = \dfrac{Q}{A_2}$. Assume a hydrostatic pressure distribution at the entrance to the enlarged section, with the value $p_1$ acting over the full area $A_2$. The head loss is then
$$
\Delta H = \frac{(v_1 - v_2)^2}{2g} .
$$

In terms of upstream velocity, the **Borda–Carnot loss** has coefficient $\xi = \left( 1 - \dfrac{A_1}{A_2} \right)^2$. For $A_2 \to \infty$, corresponding to a pipe discharging into a reservoir, $\xi = 1$. The entire velocity head is lost.

::schema{nodi="A,0,2,-;B,4,2,-;C,10,2,-" condotte="A-B,1;B-C,2" tratteggi="4.2,0.9 4.2,3.1;8.6,0.9 8.6,3.1" pressioni="4.2 1,4.2 3,0.8,0.8,p_1;8.6 3,8.6 1,0.8,0.8,p_2" frecce="1.0,2,2.2,2,v_1;6.0,2,7.2,2,v_2" etichette="4.2,3.45,1;8.6,3.45,2;5.9,2.72,recirculation" riferimento=0 titolo="Sudden expansion with a control volume extending from section $1$, immediately downstream of the step, to section $2$, where the flow has reattached to the wall"}

:::dimostrazione
Use the integral momentum equation to obtain the pressure difference, which Bernoulli’s equation alone cannot determine in the presence of friction. Then substitute this pressure difference into the head balance.

Take the pipe between section $1$, immediately downstream of the step, and section $2$, where the flow has reattached, as the control volume. Project the momentum equation onto the axis in the flow direction. Weight acts vertically and has no axial component. The wall is parallel to the axis and the reach is short, so wall shear is neglected. The pressure forces on the sections are $p_1 A_2$ and $-p_2 A_2$ because the assumed pressure $p_1$ acts over the full area $A_2$. This gives
$$
\rho\,Q\,(v_2 - v_1) = p_1 A_2 - p_2 A_2 .
$$

Substitute $Q = A_2 v_2$ and divide by $A_2$ to obtain
$$
\rho\,v_2\,(v_2 - v_1) = p_1 - p_2
\qquad\Longrightarrow\qquad
\frac{p_1 - p_2}{\gamma} = \frac{v_2\,(v_2 - v_1)}{g} .
$$

Applying Bernoulli’s equation for real flow between the same two sections of the horizontal pipe gives
$$
\Delta H = \frac{p_1 - p_2}{\gamma} + \frac{v_1^2 - v_2^2}{2g} .
$$

Substitute the pressure difference just found and put the terms over a common denominator:
$$
\Delta H = \frac{2\,v_2^2 - 2\,v_1 v_2 + v_1^2 - v_2^2}{2g} = \frac{v_1^2 - 2\,v_1 v_2 + v_2^2}{2g} = \frac{(v_1 - v_2)^2}{2g} .
$$

The result is positive for $v_1 \neq v_2$, as required by the second law of thermodynamics.
:::
::::

:::osservazione{#restringimento titolo="Sudden contraction and the vena contracta"}
When a pipe contracts, the flow does not immediately fill the smaller downstream pipe. It separates at the edge and contracts to section $c$, of area $A_c = C_c A_2$, where $C_c \approx 0.6$–$0.65$ is the contraction coefficient. The flow accelerates upstream of the contracted section and dissipates little energy there. The loss occurs during the subsequent expansion from section $A_c$ to section $A_2$. Applying the Borda–Carnot loss between those sections with $v_c = \dfrac{v_2}{C_c}$ gives
$$
\Delta H = \frac{(v_c - v_2)^2}{2g} = \left( \frac{1}{C_c} - 1 \right)^2 \frac{v_2^2}{2g} ,
$$
or $\xi \approx 0.3$–$0.45$ based on the downstream velocity.

::schema{nodi="A,0,2,-;B,5,2,-;C,11,2,-" condotte="A-B,2;B-C,1" tratteggi="5,2.5 5.9,2.39 7.0,2.39 8.3,2.5;5,1.5 5.9,1.61 7.0,1.61 8.3,1.5" frecce="1.6,2,2.8,2,v_1;9.2,2,10.4,2,v_2" etichette="6.5,3.25,vena contracta;6.45,1.15,c" riferimento=0 titolo="Sudden contraction: the flow contracts to section $c$ and then expands, losing head during the expansion"}
:::

:::osservazione{#imbocco-e-sbocco titolo="Pipe entrances and exits"}
A pipe entrance from a reservoir is a sudden contraction from the reservoir area to the pipe area. Measurements give $\xi = 0.5$ for a sharp edge and $\xi \approx 0.05$ for a rounded entrance, where the flow remains attached. An exit into a reservoir is a sudden expansion with $A_2 \to \infty$, so $\xi = 1$ based on the pipe velocity. For two reservoirs at elevations $z_m$ and $z_v$, Bernoulli’s equation between the free surfaces gives
$$
z_m - z_v = \left( \lambda\,\frac{L}{D} + \sum_i \xi_i \right)\frac{v^2}{2g} ,
$$
because the velocity in each reservoir is zero and both free surfaces have zero gauge pressure.

::schema{nodi="A,1,5.2,-;B,1,1,-;C,10,1,-;D,10,3.2,-" condotte="A-B-C-D,0.4" acqua="-1.6,4.6 1.6,4.6 1.6,6.8 -1.6,6.8;8.6,2.8 11.8,2.8 11.8,4.4 8.6,4.4" pelo="-1.6,1.6,6.8,;8.6,11.8,4.4," solidi="-2.4,0.0 12.6,0.0 12.6,0.4 -2.4,0.4" linee="-1.6,7.2 -1.6,4.6 1.6,4.6 1.6,7.2;8.6,4.8 8.6,2.8 11.8,2.8 11.8,4.8" etichette="3.0,4.9,inlet;2.1,1.5,bend;8.1,1.5,bend;5.2,1.5,gate valve;7.2,3.3,outlet" riferimento=0 titolo="Pipe between two reservoirs showing friction losses in straight lengths and minor losses at the entrance, two bends, the gate valve, and the exit"}
:::

:::osservazione{#coefficienti-xi titolo="Typical minor-loss coefficients"}
Fitting loss coefficients are measured in the laboratory and depend on the geometry and manufacture of each fitting. Manufacturers’ catalogs give values for commercial fittings. Typical values based on the pipe velocity are

- sharp-edged entrance $0.5$, rounded entrance $0.05$, reentrant entrance $1.0$;
- exit into a reservoir $1.0$;
- long-radius $90^\circ$ bend $0.15$–$0.25$, short-radius $90^\circ$ bend $0.30$–$0.40$, sharp elbow $1.1$;
- fully open gate valve $0.1$–$0.2$, half-open gate valve $5$–$6$;
- fully open butterfly valve $0.3$, check valve $2$–$3$;
- tee, flow through the side branch $1.0$.

The gate valve illustrates flow regulation. Closing it increases $\xi$ and thus the head loss, so the discharge decreases for the same available head.
:::

## Equivalent length and the relative contribution of losses

To compare friction and minor losses, express them in the same units.

:::definizione{#lunghezza-equivalente titolo="Equivalent length"}
The **equivalent length** of a fitting is the length of straight pipe of the same diameter that produces the same head loss. Setting $\xi\dfrac{v^2}{2g} = \lambda\dfrac{L_{\mathrm{eq}}}{D}\dfrac{v^2}{2g}$ gives
$$
L_{\mathrm{eq}} = \xi\,\frac{D}{\lambda} .
$$
Adding the equivalent lengths of all fittings to the physical pipe length gives a straight pipe with the same head loss as the actual system. The Darcy–Weisbach equation then suffices for the calculation. For $D = 0.20\,\mathrm{m}$, $\lambda = 0.022$, and a gate valve with $\xi = 0.2$, the equivalent length is $L_{\mathrm{eq}} = 1.82\,\mathrm{m}$, about $9$ pipe diameters.
:::

:::osservazione{#peso-delle-perdite titolo="Relative contributions of friction and minor losses"}
The expression $\left( \lambda\dfrac{L}{D} + \sum_i \xi_i \right)\dfrac{v^2}{2g}$ gives the ratio between the two types of loss. The friction contribution scales with $\lambda\dfrac{L}{D}$ and the minor-loss contribution with $\sum_i \xi_i$, so their relative importance depends only on $\dfrac{L}{D}$.

For a pipe with $D = 0.15\,\mathrm{m}$, $\lambda = 0.024$, and $\sum \xi_i = 2.2$, the ratio is $\lambda\dfrac{L}{D} = 3.2$ for $L = 20\,\mathrm{m}$, and minor losses account for $41\,\%$ of the total. For the ratio $\lambda\dfrac{L}{D} = 80$ at $L = 500\,\mathrm{m}$, their share falls to $2.7\,\%$. In transmission mains thousands of diameters long, minor losses are neglected and the pipes are treated as *long pipelines*. In building pipework, pumping stations, and power plants, the two types of loss are of comparable magnitude and both must be calculated. See the chapter on long pipelines and pumping systems for the long-pipeline model.

::schema{nodi="A,0,1,-;B,13,1,-" condotte="A-B,0.5" energia="0,5.4 2,5.06 2,4.46 7,3.61 7,3.26 13,2.24" piezometrica="0,4.9 2,4.56 2,3.96 7,3.11 7,2.76 13,1.74" tratteggi="2,1.3 2,3.9;7,1.3 7,2.7" etichette="3.4,5.55,energy grade line;10.4,1.55,hydraulic grade line;2.0,0.35,bend;7.0,0.35,gate valve" riferimento=0 titolo="Grade lines along a constant-diameter pipe: friction losses produce slopes and minor losses produce vertical drops"}
:::

:::esempio{titolo="Comparing the two types of loss in a short pipe"}
A cast-iron pipe with $D = 150\,\mathrm{mm}$ and length $60\,\mathrm{m}$ carries $Q = 30\,\mathrm{L/s}$. It has a sharp-edged entrance, two $90^\circ$ bends with $\xi = 0.25$, an open gate valve with $\xi = 0.15$, and an exit into a reservoir. The velocity is $v = \dfrac{0.030}{0.01767} = 1.70\,\mathrm{m/s}$ and the velocity head is $\dfrac{v^2}{2g} = 0.147\,\mathrm{m}$.

The loss coefficients sum to $\sum \xi_i = 0.5 + 0.25 + 0.25 + 0.15 + 1 = 2.15$, so $\Delta H_{\mathrm{loc}} = 2.15 \cdot 0.147 = 0.316\,\mathrm{m}$. With $\varepsilon = 0.1\,\mathrm{mm}$, we obtain $Re = 2.55 \cdot 10^5$ and $\lambda = 0.0193$, hence $\Delta H_{\mathrm{cont}} = 0.0193 \cdot 400 \cdot 0.147 = 1.13\,\mathrm{m}$. The total head loss is $1.45\,\mathrm{m}$, of which minor losses account for $22\,\%$. In a pipe four hundred diameters long, neglecting them would change the result by more than one fifth.
:::
