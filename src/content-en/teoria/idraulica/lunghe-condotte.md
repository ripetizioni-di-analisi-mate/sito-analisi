---
titolo: "Long pipelines and pumping systems"
sommario: "The long-pipeline model, capacity and design calculations for two reservoirs, construction of the hydraulic grade line, pressure checks along the pipe profile, pump head and power, the operating point, and maximum suction lift."
---

## The long-pipeline model

A pressurized pipe connecting two reservoirs dissipates energy through friction along its length, through local resistance at bends, control devices, and the ends of the pipe, and through the velocity head carried away by the water at the outlet. When the pipe is very long compared with its diameter, the first contribution dominates and the calculation simplifies.

:::definizione{#lunga-condotta titolo="Long pipeline"}
A pressurized pipe is treated as a **long pipeline** when only friction head loss is retained in the head balance and minor losses and velocity heads are neglected. Under this assumption the total and piezometric heads coincide at every section,
$$
H = z + \frac{p}{\gamma} + \frac{v^2}{2g} \simeq z + \frac{p}{\gamma} = h ,
$$
so the energy grade line and hydraulic grade line coincide along a straight line of slope $J$. The model uses just two variables, discharge $Q$ and diameter $D$, to analyze water mains, transmission pipelines, and pump discharge lines that extend for hundreds or thousands of meters.

::schema{acqua="0,4.4 1.8,4.4 1.8,2.6 0,2.6;10.2,1.4 12,1.4 12,-0.2 10.2,-0.2" solidi="0,2.3 1.8,2.3 1.8,2.6 0,2.6;10.2,-0.5 12,-0.5 12,-0.2 10.2,-0.2" nodi="A,1.8,3,-;U,10.2,0.6,-" condotte="A-U,0.18,D" pelo="0,1.8,4.4,upstream;10.2,12,1.4,downstream" piezometrica="1.8,4.4 10.2,1.4" tratteggi="1.8,4.4 13,4.4;10.2,1.4 13,1.4" quote="13 4.4,13 1.4,Δz" etichette="5.3,3.75,hydraulic grade line;6,0.95,L" titolo="Long pipeline between two reservoirs: the hydraulic grade line joins the free surfaces and its slope is the energy gradient $J$"}
:::

:::osservazione{#quando-vale-lo-schema titolo="When the model applies"}
Compare the two groups of terms by examining the coefficients multiplying the velocity head. The friction loss is $\lambda\,\dfrac{L}{D}\,\dfrac{v^2}{2g}$ and the sum of the minor losses along the route is $\left(\sum \xi\right)\dfrac{v^2}{2g}$, so the model is applicable when
$$
\lambda\,\frac{L}{D} \gg \sum \xi + 1 ,
$$
where $\sum \xi$ includes the entrance, bends, and control devices, and the term $1$ allows for the velocity head lost at the outlet. With $\lambda \simeq 0.02$, the left-hand side is $20$ for $\dfrac{L}{D} = 1000$ and $200$ for $\dfrac{L}{D} = 10\,000$, while the right-hand side remains of order unity. For a pipe of length $800\,\mathrm{m}$ with $D = 400\,\mathrm{mm}$, $\lambda = 0.023$, an entrance, two bends, and an exit, we obtain $\lambda\,\dfrac{L}{D} = 46$ and $\sum \xi + 1 = 2.1$. The long-pipeline model then predicts a discharge about $2\,\%$ higher than the full balance.
:::

:::attenzione
The model does not apply to short pipes. For a length of $25\,\mathrm{m}$ with $D = 300\,\mathrm{mm}$ and $\lambda = 0.025$, we obtain $\lambda\,\dfrac{L}{D} = 2.08$, whereas the entrance, two bends, a fully open gate valve, and the exit give $\sum \xi + 1 = 2.3$. Minor losses exceed friction losses, so each must be included. Short connections between tanks and pump suction lines always require the full balance.
:::

## Flow resistance relations

Long-pipeline calculations use the resistance laws for pressurized pipes. The required forms are given here.

:::richiamo{#darcy-weisbach titolo="Darcy–Weisbach equation"}
For a circular pipe of diameter $D$ carrying flow at mean velocity $v$, the energy gradient is
$$
J = \lambda\,\frac{1}{D}\,\frac{v^2}{2g} ,
$$
where the friction factor $\lambda$ is obtained from the Colebrook–White equation,
$$
\frac{1}{\sqrt{\lambda}} = -2\log_{10}\!\left(\frac{2.51}{Re\sqrt{\lambda}} + \frac{\varepsilon}{3.71\,D}\right) ,
$$
with $Re = \dfrac{v D}{\nu}$ and absolute wall roughness $\varepsilon$. See the chapter on friction and minor head losses.
:::

:::richiamo{#formule-monomie titolo="Gauckler–Strickler equation"}
In fully rough turbulent flow, the energy gradient can also be calculated from the power law
$$
v = k_s\,R^{\frac{2}{3}}\,J^{\frac{1}{2}} ,
$$
where $R$ is the hydraulic radius and $k_s$ is the roughness coefficient in $\mathrm{m^{1/3}/s}$, which depends only on the wall material. See the chapter on friction and minor head losses.
:::

## The long-pipeline equation

::::teorema{#equazione-della-lunga-condotta titolo="Long-pipeline equation"}
Let two large reservoirs, with free surfaces at elevations $z_1$ and $z_2$ where $z_1 > z_2$, be connected by a pipeline of length $L$ and constant diameter $D$. For steady incompressible flow under the long-pipeline assumptions,
$$
z_1 - z_2 = J\,L .
$$
The entire difference in free-surface elevations is therefore dissipated by friction, so the energy gradient is known before the discharge has been determined:
$$
J = \frac{z_1 - z_2}{L} .
$$

:::dimostrazione
Write the total head balance between the two free surfaces, where all terms except the head loss are known.

Take section $1$ at the free surface of the upstream reservoir and section $2$ at that of the downstream reservoir, measuring elevations from a horizontal datum. Gauge pressures are used, so $p_1 = p_2 = 0$ at both free surfaces. The reservoirs have large surface areas, so the velocities at which the surfaces fall or rise are negligible and $v_1 = v_2 = 0$. The total heads are consequently $H_1 = z_1$ and $H_2 = z_2$.

Between the two sections, Bernoulli’s equation for real flow gives $H_1 = H_2 + \Delta H$, where $\Delta H$ is the total head loss. In the long-pipeline model the total loss consists of friction alone, so $\Delta H = J L$. Substituting the three values gives $z_1 = z_2 + J L$, hence $z_1 - z_2 = J L$.
:::
::::

:::definizione{#resistenza-della-condotta titolo="Hydraulic resistance of a pipe"}
Substituting $v = \dfrac{4Q}{\pi D^2}$ into the Darcy–Weisbach equation gives
$$
J = \frac{\lambda}{D}\,\frac{1}{2g}\,\frac{16\,Q^2}{\pi^2 D^4} = \frac{8\,\lambda\,Q^2}{\pi^2 g\,D^5} ,
$$
so the loss along the entire pipe can be written as $\Delta H = r\,Q^2$, with
$$
r = \frac{8\,\lambda\,L}{g\,\pi^2 D^5} ,
$$
called the **hydraulic resistance** of the pipe and measured in $\mathrm{s^2/m^5}$. The form $\Delta H = r Q^2$ is used for pipe systems and pump operating points because it combines length, diameter, and roughness in one quantity. With the Gauckler–Strickler formula the resistance is $r = \dfrac{10.29\,L}{k_s^2\,D^{\frac{16}{3}}}$. Use this form when wall roughness is specified by $k_s$. For $L = 1000\,\mathrm{m}$, $D = 250\,\mathrm{mm}$, and $\lambda = 0.025$, we obtain $r = 2115\,\mathrm{s^2/m^5}$, so a discharge of $Q = 90\,\mathrm{L/s}$ requires a head of $\Delta H = 2115 \cdot 0.090^2 = 17.1\,\mathrm{m}$.
:::

:::osservazione{#dipendenza-dal-diametro titolo="The influence of diameter"}
The resistance $r$ is proportional to $D^{-5}$, so at fixed discharge head loss is very sensitive to diameter. Increasing the diameter from $250\,\mathrm{mm}$ to $300\,\mathrm{mm}$, an increase in $D$ of $20\,\%$, changes the loss by a factor of $\left(\dfrac{250}{300}\right)^5 = 0.40$, reducing it to less than half its original value. This dependence explains both the choice of an economical pipe diameter and the effect of encrustation, which reduces $D$ and increases $\varepsilon$ at the same time.
:::

## Capacity analysis: finding the discharge

In a capacity calculation the pipe properties $L$, $D$, and $\varepsilon$ are known, as is the elevation difference. The unknown is the discharge the pipe will carry.

:::osservazione{#verifica titolo="Capacity calculation"}
The elevation difference immediately gives $J = \dfrac{z_1 - z_2}{L}$. If the friction factor $\lambda$ is specified, solve the Darcy–Weisbach equation directly for the velocity,
$$
v = \sqrt{\frac{2 g D J}{\lambda}} ,
\qquad
Q = v\,\frac{\pi D^2}{4} ,
$$
and then calculate the Reynolds number $Re = \dfrac{v D}{\nu}$ to check the assumed regime. If instead $\lambda$ must be obtained from Colebrook–White, the two unknowns $v$ and $\lambda$ satisfy two simultaneous equations:
$$
\begin{cases}
v = \sqrt{\dfrac{2 g D J}{\lambda}} \\[8pt]
\dfrac{1}{\sqrt{\lambda}} = -2\log_{10}\!\left(\dfrac{2.51}{Re\sqrt{\lambda}} + \dfrac{\varepsilon}{3.71\,D}\right)
\end{cases}
$$
:::

::::teorema{#verifica-diretta titolo="Direct solution for pipe capacity"}
Suppose $D$, $J$, $\varepsilon$, and $\nu$ are known. The product $Re\sqrt{\lambda}$ can then be found without first finding the discharge:
$$
Re\,\sqrt{\lambda} = \frac{D}{\nu}\,\sqrt{2 g D J} ,
$$
The Colebrook–White equation therefore gives $\lambda$ in a single step, and the velocity follows from $v = \sqrt{\dfrac{2 g D J}{\lambda}}$.

:::dimostrazione
Solving the Darcy–Weisbach equation for velocity gives $v\sqrt{\lambda} = \sqrt{2 g D J}$. Multiplying both sides by $\dfrac{D}{\nu}$ gives
$$
Re\,\sqrt{\lambda} = \frac{v D}{\nu}\,\sqrt{\lambda} = \frac{D}{\nu}\,\sqrt{2 g D J} ,
$$
where the right-hand side consists entirely of known quantities. In the Colebrook–White equation, the unknown $\lambda$ occurs on the left and appears on the right only in the product $Re\sqrt{\lambda}$. The right-hand side is therefore known, so $\dfrac{1}{\sqrt{\lambda}}$ can be calculated directly.
:::
::::

:::esempio{titolo="Discharge through a specified pipe"}
Two reservoirs with an elevation difference $18\,\mathrm{m}$ are connected by a pipe with $1200\,\mathrm{m}$, $D = 300\,\mathrm{mm}$, and $\varepsilon = 0.25\,\mathrm{mm}$. The energy gradient is $J = \dfrac{18}{1200} = 0.015$. Then
$$
Re\sqrt{\lambda} = \frac{0.300}{10^{-6}}\sqrt{2 \cdot 9.81 \cdot 0.300 \cdot 0.015} = 3 \cdot 10^{5} \cdot 0.2971 = 8.91 \cdot 10^{4} ,
$$
$$
\frac{1}{\sqrt{\lambda}} = -2\log_{10}\!\left(2.82\cdot 10^{-5} + 2.25\cdot 10^{-4}\right) = 7.19 ,
\qquad
\lambda = 0.0193 .
$$
Thus $v = \sqrt{\dfrac{0.0883}{0.0193}} = 2.14\,\mathrm{m/s}$ and $Q = 2.14 \cdot 0.0707 = 0.151\,\mathrm{m^3/s}$, or $151\,\mathrm{L/s}$. The Reynolds number is $6.4 \cdot 10^{5}$, confirming turbulent flow as required by the Colebrook–White equation.
:::

:::osservazione{#iterazione-su-lambda titolo="When iteration is necessary"}
If discharge and diameter are specified, the Reynolds number is known, but $\lambda$ appears on both sides of the Colebrook–White equation. Use successive approximations: start with $\lambda_0 = 0.02$, evaluate the right-hand side, obtain $\lambda_1$, and repeat. Because of the logarithm, the dependence on $\lambda$ is weak and the procedure converges in three or four steps. Stop when successive values differ by less than $10^{-4}$.
:::

## Design: selecting a pipe diameter

In a design calculation the required discharge, available elevation difference, and pipe length are specified. The unknown is the diameter.

::::teorema{#progetto-del-diametro titolo="Design diameter"}
Let $Q$, $L$, and the available head $\Delta H = z_1 - z_2$ be given. From the Darcy–Weisbach equation the diameter is
$$
D = \left(\frac{8\,\lambda\,L\,Q^2}{\pi^2 g\,\Delta H}\right)^{\frac{1}{5}} ,
$$
and from the Gauckler–Strickler equation, since $J = \dfrac{\Delta H}{L}$,
$$
D = \left(\frac{10.29\;Q^2}{k_s^2\,J}\right)^{\frac{3}{16}} .
$$

:::dimostrazione
The first expression follows by solving for $D$ in the relation $\Delta H = \dfrac{8\lambda L Q^2}{\pi^2 g D^5}$.

For the second, start from $v = k_s R^{\frac{2}{3}} J^{\frac{1}{2}}$ with $R = \dfrac{D}{4}$ for a full circular pipe, giving $J = \dfrac{v^2}{k_s^2}\left(\dfrac{4}{D}\right)^{\frac{4}{3}}$. Substitution of $v = \dfrac{4Q}{\pi D^2}$ gives
$$
J = \frac{16\,Q^2}{\pi^2 D^4\,k_s^2}\cdot\frac{4^{\frac{4}{3}}}{D^{\frac{4}{3}}} = \frac{16 \cdot 4^{\frac{4}{3}}}{\pi^2}\;\frac{Q^2}{k_s^2\,D^{\frac{16}{3}}} ,
$$
and since $\dfrac{16 \cdot 4^{\frac{4}{3}}}{\pi^2} = 10.29$, we have $J = \dfrac{10.29\,Q^2}{k_s^2\,D^{\frac{16}{3}}}$. Solving for $D$ gives the exponent $\dfrac{3}{16}$.
:::
::::

:::osservazione{#diametri-commerciali titolo="Standard diameter and residual head"}
The calculated design diameter generally falls between sizes in production. Select the **next larger standard pipe diameter** from the series $100$, $150$, $200$, $250$, $300$, $400$, $500\,\mathrm{mm}$. At the larger diameter the actual loss is less than the available head. The **residual head** $\Delta H_{\mathrm{avail}} - \Delta H_{\mathrm{eff}}$ can be dissipated in a control valve at the downstream end or accepted as a higher delivery pressure. With the next smaller diameter, the required head would exceed the elevation difference, so the pipe would not carry the specified discharge. Wall thickness is then chosen for the maximum operating pressure and the material, as discussed in courses on hydraulic design.
:::

:::esempio{titolo="Design using a power law"}
A lined cast-iron pipe with $k_s = 90\,\mathrm{m^{1/3}/s}$ must carry $Q = 80\,\mathrm{L/s}$ over $L = 2000\,\mathrm{m}$ with an elevation difference of $30\,\mathrm{m}$. We obtain $J = 0.015$ and
$$
D = \left(\frac{10.29 \cdot 0.080^2}{90^2 \cdot 0.015}\right)^{\frac{3}{16}} = \left(5.42\cdot10^{-4}\right)^{\frac{3}{16}} = 0.244\,\mathrm{m} .
$$
The selected diameter is therefore $D = 250\,\mathrm{mm}$. This reduces the gradient to $J = 0.0132$ and the actual head loss to $26.4\,\mathrm{m}$, leaving $3.6\,\mathrm{m}$ to dissipate in a downstream gate valve. The velocity is $1.63\,\mathrm{m/s}$, within the usual range for water mains.
:::

## Hydraulic grade line and pressure along the route

Once the discharge is known, check whether the pipeline will operate satisfactorily at every section. Compare the hydraulic grade line with the elevation profile of the pipe centerline.

::::teorema{#pressione-lungo-il-profilo titolo="Pressure at a pipe section"}
Consider a long pipeline of gradient $J$ starting at a reservoir whose free surface is at elevation $z_1$. Let $x$ be distance along the pipe from its entrance and $z(x)$ the pipe centerline elevation. The piezometric head and gauge pressure at distance $x$ are
$$
h(x) = z_1 - J\,x ,
\qquad
\frac{p(x)}{\gamma} = z_1 - J\,x - z(x) .
$$
The pressure head at a section is therefore the vertical distance between the hydraulic grade line and the pipe centerline at that section.

:::dimostrazione
Apply the head balance between the reservoir surface and the section at distance $x$. The total head at the free surface is $z_1$ because the gauge pressure is zero and the velocity is negligible. In the long-pipeline model the total and piezometric heads coincide, and the loss between the sections is $J x$, so $h(x) = z_1 - J x$. The definition of piezometric head, $h(x) = z(x) + \dfrac{p(x)}{\gamma}$, gives $\dfrac{p(x)}{\gamma} = h(x) - z(x)$, as stated.
:::
::::

:::osservazione{#lettura-del-disegno titolo="Reading a pipeline profile"}
The hydraulic grade line is straight. It extends from the upstream free surface to the downstream free surface, or to the pipe centerline at the outlet when the pipe discharges to the atmosphere, since the gauge pressure there is zero. Where the grade line lies above the pipe centerline, gauge pressure is positive. Where it lies below the centerline, the pipe operates below atmospheric pressure. The pipe profile follows the terrain and may rise and fall several times, so the vertical separation varies along the pipe.

::schema{nodi="A,1.6,4.2,-;C,5,5,-;E,8.2,2.2,-;U,11.4,1,-" acqua="0,5.8 1.6,5.8 1.6,3.9 0,3.9;11.4,1 13,1 13,-0.6 11.4,-0.6" solidi="0,3.6 1.6,3.6 1.6,3.9 0,3.9;11.4,-0.9 13,-0.9 13,-0.6 11.4,-0.6" condotte="A-C-E-U,0.16,D" pelo="0,1.6,5.8,upstream;11.4,13,1,downstream" piezometrica="1.6,5.8 11.4,1" etichette="7.6,4.6,hydraulic grade line;5,5.6,p<0;8.7,1.45,p>0" titolo="Gauge pressure is negative where the pipe profile rises above the hydraulic grade line"}
:::

## Critical points and pipelines near the available head level

:::definizione{#punto-critico titolo="Critical point of a long pipeline"}
The **critical point** is the section with the lowest gauge pressure. Since
$$
\frac{p(x)}{\gamma} = z_1 - \big(z(x) + J\,x\big) ,
$$
pressure is lowest where $z(x) + J x$ is largest. The critical point is thus the highest point of the profile relative to the hydraulic grade line. It need not be the highest point of the route: a lower section much farther from the entrance can have a larger $z + J x$ because the accumulated loss $J x$ is greater.
:::

:::esempio{titolo="Finding the critical point"}
A pipe of length $2800\,\mathrm{m}$ connects reservoir free-surface elevations $92\,\mathrm{m}$ and $62\,\mathrm{m}$ with gradient $J = \dfrac{30}{2800} = 0.0107$. The route passes through points $(1400\,\mathrm{m};\,84\,\mathrm{m})$ and $(2100\,\mathrm{m};\,78\,\mathrm{m})$. Evaluate $z + J x$ at each section:
$$
84 + 0.0107 \cdot 1400 = 99.0\,\mathrm{m} ,
\qquad
78 + 0.0107 \cdot 2100 = 100.5\,\mathrm{m} .
$$
The maximum occurs at the second section, so the critical point is at $2100\,\mathrm{m}$, where the pressure is equivalent to $92 - 100.5 = -8.5\,\mathrm{m}$ of water, compared with $-7.0\,\mathrm{m}$ at the highest point of the route.
:::

:::attenzione
The gauge pressure in a liquid-filled pipe cannot fall below the value at which the liquid reaches its vapor pressure. For water at $20\,^\circ\mathrm{C}$, the vapor pressure is $2.34\,\mathrm{kPa}$, so the minimum absolute pressure is $\dfrac{2.34}{9.81} = 0.24\,\mathrm{m}$. At atmospheric pressure $101.3\,\mathrm{kPa}$, the corresponding gauge pressure is $0.24 - 10.33 = -10.09\,\mathrm{m}$. In practice a margin is required and suction is limited to $-7\,\mathrm{m}$, because at lower pressures dissolved air comes out of solution and forms pockets that reduce the effective flow area. At the critical point in the previous example, $-8.5\,\mathrm{m}$ exceeds the allowable suction. The discharge must therefore be reduced or the pipe laid lower.
:::

:::osservazione{#regolazione-con-saracinesca titolo="Reducing discharge with a gate valve"}
Reducing discharge reduces the energy gradient, so the hydraulic grade line falls less steeply and the pressure at the critical point rises. Given a minimum permissible value $\dfrac{p_{\min}}{\gamma}$ in the critical section at distance $x_c$ and elevation $z_c$, the maximum allowable gradient is
$$
J_{\mathrm{allow}} = \frac{z_1 - z_c - \dfrac{p_{\min}}{\gamma}}{x_c} ,
$$
and this determines the discharge. The head remaining after friction losses, $(z_1 - z_2) - J_{\mathrm{allow}} L$, must be dissipated by a gate valve with coefficient $\xi$ placed **downstream of the critical point**, because a localized loss lowers the grade line only beyond the fitting.

::schema{nodi="A,1.6,4.5,-;C,5,5.1,-;U,11.6,1.3,-" acqua="0,5.9 1.6,5.9 1.6,4.2 0,4.2;11.6,1.3 13,1.3 13,-0.3 11.6,-0.3" solidi="0,3.9 1.6,3.9 1.6,4.2 0,4.2;11.6,-0.6 13,-0.6 13,-0.3 11.6,-0.3" condotte="A-C-U,0.16,D" pelo="0,1.6,5.9,upstream;11.6,13,1.3,downstream" piezometrica="1.6,5.9 11.6,3.3;11.6,3.3 11.6,1.3" etichette="7.4,4.9,hydraulic grade line;12.2,2.6,gate valve;4.3,5.7,critical point" titolo="The downstream gate valve produces a local drop in the grade line only beyond the valve, allowing pressure upstream to rise"}
:::

## Pumping systems: head and power

When the delivery reservoir is higher than the supply reservoir, a pump in the pipeline must overcome both the static lift and the head losses.

::::teorema{#prevalenza titolo="Pump head"}
Consider two reservoirs with free-surface elevations $z_1$ and $z_2$, with $z_2 > z_1$, connected by a pipe of resistance $r$ containing a pump. To deliver discharge $Q$, the pump must supply the fluid with the **pump head**
$$
H_p = (z_2 - z_1) + r\,Q^2 ,
$$
which is the static lift plus the total pipe head loss.

:::dimostrazione
The pump transfers energy per unit weight $H_p$ to the fluid passing through it, increasing the total head across the pump by $H_p$.

Include this increase in the total head balance between the reservoir surfaces:
$$
H_1 + H_p = H_2 + \Delta H .
$$
At both free surfaces the gauge pressure is zero and velocity is negligible, so $H_1 = z_1$ and $H_2 = z_2$. The long-pipeline model gives the total loss as $\Delta H = r Q^2$. Substituting gives $z_1 + H_p = z_2 + r Q^2$, hence $H_p = (z_2 - z_1) + r Q^2$.
:::
::::

:::definizione{#potenza-della-pompa titolo="Hydraulic output power and input power"}
The **hydraulic output power** delivered by the pump equals the weight of fluid lifted per unit time multiplied by the pump head,
$$
P_u = \gamma\,Q\,H_p .
$$
The pump consumes more power than it delivers because of mechanical and hydraulic losses. Let $\eta$ be the overall efficiency of the unit, with $0 < \eta < 1$. The **input power** is
$$
P = \frac{\gamma\,Q\,H_p}{\eta} .
$$
With $\gamma$ in $\mathrm{kN/m^3}$, $Q$ in $\mathrm{m^3/s}$, and $H_p$ in $\mathrm{m}$, the resulting power is in $\mathrm{kW}$. For $Q = 40\,\mathrm{L/s}$, $H_p = 50.6\,\mathrm{m}$, and $\eta = 0.72$, it is $P = \dfrac{9.81 \cdot 0.040 \cdot 50.6}{0.72} = 27.6\,\mathrm{kW}$. Input power multiplied by annual operating hours gives annual energy consumption, the principal operating cost of a pumping system.

::schema{nodi="A,1.6,1.2,-;P,4,1.2,-;C,7,4.4,-;U,10.4,4.4,-" acqua="0,1.5 1.6,1.5 1.6,-0.2 0,-0.2;10.4,5.6 12,5.6 12,4 10.4,4" solidi="0,-0.5 1.6,-0.5 1.6,-0.2 0,-0.2;10.4,3.7 12,3.7 12,4 10.4,4" condotte="A-P-C-U,0.16,D" pompa="4,1.2,P" pelo="0,1.6,1.5,upstream;10.4,12,5.6,downstream" piezometrica="1.6,1.5 4,1.5;4,7.2 10.4,5.6" quote="4.6 1.5,4.6 7.2,H_p,-0.8" etichette="7.5,6.9,hydraulic grade line" titolo="The pump raises the hydraulic grade line by $H_p$. Downstream, the line falls at the energy gradient to the delivery reservoir surface"}
:::

## Characteristic curves and the operating point

The required head increases with discharge, while the head the pump can deliver decreases. The actual discharge is the value at which the two heads coincide.

:::definizione{#curve-caratteristiche titolo="System curve and pump curve"}
The **system curve** plots the required head against discharge,
$$
H_c(Q) = \Delta z_g + r\,Q^2 ,
$$
a parabola whose vertex lies on the vertical axis at the static lift $\Delta z_g$. The **pump curve** plots the head delivered by the pump against discharge. It is obtained from the manufacturer’s performance tests and is often fitted by the expression
$$
H_p(Q) = H_0 - a\,Q^2 ,
$$
where $H_0$ is the shutoff head. The curves predict how changes affect the system. Partially closing a gate valve increases $r$ and makes the system curve steeper. Filling the delivery reservoir increases $\Delta z_g$ and shifts the curve upward.
:::

:::richiamo{titolo="Intermediate value theorem for a zero"}
Let $f$ be continuous on $[a, b]$, with $f(a)\,f(b) < 0$. There is at least one point $c \in (a, b)$ such that $f(c) = 0$. If $f$ is also strictly monotone on $[a, b]$, this point is unique. See the chapter on continuous functions in Mathematical Analysis 1.
:::

::::teorema{#punto-di-funzionamento titolo="Operating point"}
Let $H_p$ be strictly decreasing and continuous on $[0, +\infty)$, with $H_p(0) = H_0 > \Delta z_g$ and $H_p(Q) \to -\infty$ as $Q \to +\infty$, and let $H_c(Q) = \Delta z_g + r Q^2$ with $r > 0$. There is exactly one discharge $Q_F > 0$ at which $H_p(Q_F) = H_c(Q_F)$. This is the discharge actually delivered by the system, and the common value $H_F = H_c(Q_F)$ is the operating head.

:::dimostrazione
Define $f(Q) = H_p(Q) - H_c(Q)$, a function continuous on $[0, +\infty)$ as the difference of two continuous functions.

By hypothesis $f(0) = H_0 - \Delta z_g > 0$, whereas for sufficiently large $Q$ we have $f(Q) < 0$, because $H_p$ tends to $-\infty$ and $H_c$ increases. The intermediate value theorem therefore gives a point $Q_F > 0$ at which $f$ vanishes.

Moreover, $H_p$ is strictly decreasing and $H_c$ is strictly increasing on $[0, +\infty)$. Thus $f$ is strictly decreasing and its zero is unique.
:::
::::

:::esempio{titolo="Calculating the operating point"}
A pump with curve $H_p = 55 - 900\,Q^2$, with $Q$ in $\mathrm{m^3/s}$ and $H_p$ in $\mathrm{m}$, lifts water through a vertical distance $30\,\mathrm{m}$ along a pipe with $L = 1000\,\mathrm{m}$, $D = 250\,\mathrm{mm}$, and $\lambda = 0.025$, giving $r = 2115\,\mathrm{s^2/m^5}$. Equating the available and required heads gives
$$
55 - 900\,Q^2 = 30 + 2115\,Q^2 ,
\qquad
Q^2 = \frac{25}{3015} = 8.29 \cdot 10^{-3} ,
$$
hence $Q_F = 0.0911\,\mathrm{m^3/s}$, or $91.1\,\mathrm{L/s}$, and $H_F = 30 + 2115 \cdot 8.29\cdot10^{-3} = 47.5\,\mathrm{m}$.

::grafico{f="30+2115*x^2;55-900*x^2" xmin=0 xmax=0.14 ymin=20 ymax=60 punti="0.0911,47.5,pieno,F" nomi="Q,H" etichette="0.1,32,pipe;0.03,52,pump" titolo="Operating point $F$, with $Q$ in $\mathrm{m^3/s}$ and $H$ in $\mathrm{m}$"}
:::

## Suction, cavitation, and economical pipe diameter

:::definizione{#npsh titolo="Net positive suction head"}
The **net positive suction head available**, denoted by $\mathrm{NPSH}_d$, is the absolute head at the pump inlet less the head corresponding to the vapor pressure. For a pump located at elevation $z_a$ above the suction reservoir surface, with head loss $\Delta H_a$ in the suction line,
$$
\mathrm{NPSH}_d = \frac{p_{\mathrm{atm}} - p_v}{\gamma} - z_a - \Delta H_a .
$$
The manufacturer specifies the required value $\mathrm{NPSH}_r$ at each discharge, determined on a test stand and dependent on the impeller geometry. The pump operates normally when $\mathrm{NPSH}_d \geq \mathrm{NPSH}_r$. Below that level, vapor bubbles form in the impeller and collapse in regions of higher pressure, eroding the blades.
:::

:::osservazione{#altezza-di-aspirazione titolo="Maximum suction lift"}
The condition $\mathrm{NPSH}_d \geq \mathrm{NPSH}_r$ gives the maximum height at which the pump can be installed above the free surface:
$$
z_a \leq \frac{p_{\mathrm{atm}} - p_v}{\gamma} - \Delta H_a - \mathrm{NPSH}_r .
$$
For water at $20\,^\circ\mathrm{C}$, the first term is $\dfrac{101.3 - 2.34}{9.81} = 10.09\,\mathrm{m}$. The usable lift is reduced by both the loss in the suction line and the suction head required by the pump. With $\Delta H_a = 0.38\,\mathrm{m}$ and $\mathrm{NPSH}_r = 3.5\,\mathrm{m}$, it is $z_a \leq 6.21\,\mathrm{m}$. The suction line should therefore be short, with a large diameter and few bends, and its head balance always includes all minor losses.

::schema{nodi="S,1.6,0.4,-;G,1.6,2.6,-;P,5.2,3.4,-" acqua="0,1.6 3,1.6 3,-0.8 0,-0.8" solidi="0,-1.1 3,-1.1 3,-0.8 0,-0.8" condotte="S-G-P,0.14,D_a" pompa="5.2,3.4,P" pelo="0,3,1.6,suction" tratteggi="1.6,1.6 6.6,1.6;5.2,3.4 6.6,3.4" quote="6.4 1.6,6.4 3.4,z_a,-0.7" etichette="2.3,3.7,suction pipe" titolo="Pump above a reservoir surface: atmospheric pressure and required suction head limit the elevation $z_a$"}
:::

:::osservazione{#diametro-economico titolo="Economical pipe diameter"}
In a pumping system the elevation difference does not fix the diameter because the pump supplies the required head. Instead, the diameter is chosen by comparing two costs that change in opposite directions. Pipe cost increases with diameter, approximately in proportion to $D$. Annual energy cost is proportional to pump head and therefore contains the term $r Q^2$, proportional to $D^{-5}$. The sum of annual energy cost and annualized pipe cost has a minimum. The corresponding size is the **economical pipe diameter**.

For $Q = 100\,\mathrm{L/s}$, $L = 2000\,\mathrm{m}$, static lift $20\,\mathrm{m}$, $\lambda = 0.02$, $\eta = 0.75$, $4000$ operating hours per year, energy at $0.20\,\text{€/kWh}$, pipe cost of $800\,\text{€/m}$ per meter of diameter, and depreciation over $25$ years, the total annual cost in thousands of euros is
$$
C(D) = 20.93 + \frac{0.0346}{D^5} + 64\,D ,
$$
with $D$ in meters. The minimum occurs at $D = 0.373\,\mathrm{m}$, corresponding to standard pipe size $400\,\mathrm{mm}$.

::grafico{f="20.93+0.0346/x^5;64*x;20.93+0.0346/x^5+64*x" xmin=0.2 xmax=0.6 ymin=0 ymax=90 punti="0.373,49.6,pieno" nomi="D,C" etichette="0.52,17,energy;0.5,37,pipe;0.44,60,total" titolo="Annual cost in thousands of euros versus diameter $D$ in meters, with a minimum at $D = 0.373\,\mathrm{m}$"}
:::
