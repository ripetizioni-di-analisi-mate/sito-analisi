---
titolo: Fluids in motion
sommario: Flow rate, continuity, Bernoulli, outflow and models of viscous flow.
---

## Flow rate and steady flow

:::definizione{#portata titolo="Volume crossing a section"}
A **fluid** is a liquid or a gas. A **section** is the surface that cuts across a pipe.

The **mean volume flow rate** is the volume of fluid crossing a section divided by the time taken:
$$
Q_m=\frac{\Delta V}{\Delta t}.
$$
The symbol $\Delta$ (capital *delta*) denotes a change; $\Delta V$ is the volume that has passed and $\Delta t$ the time interval. In the International System (SI) volume is measured in cubic metres and time in seconds, so flow rate is measured in $\mathrm{m^3/s}$.

Suppose the velocity $v$ is the same at every point of the section (**uniform** velocity) and perpendicular to the section. In a short interval $\Delta t$ every particle moves forward by $v\Delta t$, so the fluid that crossed fills a cylinder with base $A$, the area of the section, and height $v\Delta t$. Its volume is $\Delta V=Av\Delta t$. Dividing by $\Delta t$ gives
$$
Q=Av.
$$
If the velocity changes from point to point of the section (**nonuniform** profile), $Q=Av$ uses the section average of the **normal** component of velocity, its part perpendicular to the section. If the section is divided into parts with different speeds, the flow rate is the sum of area times speed over the parts. When the fluid at the centre of the pipe moves faster than near the walls, the speed measured at the centre is greater than the average and, substituted into $Q=Av$, gives too large a flow rate.

A litre ($\mathrm L$) is one thousandth of a cubic metre, $1\,\mathrm L=10^{-3}\,\mathrm{m^3}$. A flow rate of $6\,\mathrm{L/s}$ is therefore $0.006\,\mathrm{m^3/s}$.

**Density** $\rho$ (Greek letter *rho*) is the mass contained in one cubic metre, in $\mathrm{kg/m^3}$. The **mass flow rate** is the mass crossing the section in one second, in $\mathrm{kg/s}$. If density is the same over the whole section, the mass flow rate is $\dot m=\rho Q$ (read "m dot").

Flow is **steady** when velocity, pressure and density measured at a fixed point do not change with time. These values can differ from one section to another. *Upstream* is the part of the pipe the fluid crosses first, *downstream* the part it crosses later. In a **constriction**, a stretch where the pipe narrows, the speed is greater than upstream. A fixed meter upstream and one in the constriction therefore read two different speeds, each constant in time. The same fluid particle accelerates as it moves from the first to the second, even though the flow is steady.
:::

:::esempio{titolo="Volume from a flow rate–time graph"}
A pump transfers $4\,\mathrm{L/s}$ for $10\,\mathrm s$, then $2\,\mathrm{L/s}$ for $5\,\mathrm s$. At constant flow rate the volume is flow rate times duration, which on the flow rate–time graph is the area of a rectangle:
$$
\Delta V_1=(4\cdot10)\,\mathrm L=40\,\mathrm L,\qquad \Delta V_2=(2\cdot5)\,\mathrm L=10\,\mathrm L.
$$
In all $50\,\mathrm L$ passes in $15\,\mathrm s$, so the mean flow rate over the fifteen seconds is
$$
Q_m=\frac{50\,\mathrm L}{15\,\mathrm s}\simeq3.33\,\mathrm{L/s}.
$$
The symbol $\simeq$ means "approximately equal to". The ordinary average of the two values, $\dfrac{4+2}{2}\,\mathrm{L/s}=3\,\mathrm{L/s}$, would only be valid if the two durations were equal.

Even when the flow rate changes with time, the volume transferred is the area between the graph and the time axis. If the flow rate has a sign, for example positive when fluid enters a tank and negative when it leaves, the area below the time axis is counted with a minus sign. The sum of the areas with their signs is the net volume that has entered.

::grafico{linee="0,4 10,4;10,2 15,2" area="4;0;0;10|2;0;10;15" xmin=0 xmax=17 ymin=0 ymax=5.3 nomi="t (s),Q (L/s)" titolo="The rectangular areas give the volumes transferred over the two intervals"}
:::

:::esempio{titolo="Which component crosses the surface?"}
Velocity is a vector: it has a magnitude (how large it is), a direction and a sense. The **normal** to a surface is the direction perpendicular to the surface. To give the flow rate a sign, a sense is chosen along the normal, and the flow rate is positive if the fluid crosses the surface in that sense.

If the velocity is uniform and makes an angle $\theta$ (Greek letter *theta*) with the normal, its component along the normal is $v\cos\theta$. The cosine $\cos\theta$ is the factor that turns the magnitude of a vector into its component along a line inclined at $\theta$; for example $\cos60^\circ=0.5$ and $\cos90^\circ=0$. The component parallel to the surface carries fluid along it without crossing it. The signed volume crossing the surface in one second is therefore
$$
Q=Av\cos\theta.
$$
With $A=0.015\,\mathrm{m^2}$, $v=4\,\mathrm{m/s}$ and $\theta=60^\circ$, the normal component is $(4\cdot0.5)\,\mathrm{m/s}=2\,\mathrm{m/s}$ and
$$
Q=(0.015\cdot2)\,\mathrm{m^3/s}=0.030\,\mathrm{m^3/s}.
$$
With the same speed, a flow parallel to the surface has $\theta=90^\circ$ and $\cos90^\circ=0$, hence zero flow rate. Reversing the chosen sense of the normal reverses the sign of the result.

::grafico{assi=0 uguale=1 linee="0,-.85 0,4.2" vettori="-2,0,0,0,v_n;-2,0,0,3.4641,v" curve="-2+.78*cos(t),.78*sin(t),0,1.047198" etichette="-0.91,0.62,60°;0.25,2.6,section" xmin=-2.8 xmax=2.0 ymin=-.9 ymax=4.4 titolo="The horizontal arrow is the normal component that determines the flow rate."}
:::

## Continuity

:::teorema{#continuita titolo="Conservation of mass"}
One considers the fluid contained in the stretch of pipe between two sections. Over a time interval its mass changes by the mass entering minus the mass leaving. In steady flow the mass in the stretch stays the same. If the pipe has no losses (leaks) and no branches, the mass entering in one second therefore equals the mass leaving, so the two mass flow rates are equal. Since $\dot m=\rho Q=\rho Av$,
$$
\rho_1 A_1 v_1=\rho_2A_2v_2,
$$
where the subscripts 1 and 2 label the two sections.

A fluid is **incompressible** when its density does not change; liquids are treated as incompressible. For an incompressible liquid $\rho_1=\rho_2$, so density cancels and the volume flow rate is conserved too:
$$
A_1v_1=A_2v_2.
$$
Where the section is smaller, the mean speed is therefore greater. A circular section of radius $r$ has area $A=\pi r^2$. Halving the radius makes the area $\pi\left(\dfrac r2\right)^2=\dfrac{\pi r^2}{4}$, one quarter. At the same flow rate the mean speed quadruples. The density of a gas, by contrast, can change from one section to another; in that case the relation constrains the mass flow rate and the volume flow rate changes.

At a **branch** (or junction) a pipe divides into several branches. If the stretch does not accumulate mass, the incoming mass flow rate equals the sum of the outgoing mass flow rates. With the same incompressible liquid in all branches, volume flow rates are added directly, for example $Q_1=Q_2+Q_3$ with one incoming and two outgoing branches. Continuity fixes only the sum of the outgoing flow rates. How the flow divides among the branches depends on the pressures and on the resistance each pipe offers to the flow.
:::

:::esempio{titolo="A branching pipe"}
The incoming flow is $10\,\mathrm{L/s}$ and branch 2 discharges $6\,\mathrm{L/s}$. With no accumulation, the third branch receives $(10-6)\,\mathrm{L/s}=4\,\mathrm{L/s}=0.004\,\mathrm{m^3/s}$. If its section perpendicular to the flow is $0.002\,\mathrm{m^2}$, the mean speed in branch 3 is
$$
v_3=\frac{Q_3}{A_3}=\frac{0.004}{0.002}\,\mathrm{m/s}=2\,\mathrm{m/s}.
$$
The speeds in branches 2 and 3 can be different, because the calculation uses only the data for branch 3.

::grafico{assi=0 vettori="-3,0,-.4,0,10;.2,.3,2.7,1.4,6;.2,-.3,2.4,-1.3,4" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=2.5 titolo="Arrow labels give flow rates in litres per second"}
:::

:::esempio{titolo="Density changes in a gas pipe"}
A gas crosses a pipe with no branches at constant mass flow rate. Upstream, $8\,\mathrm{L/s}$ passes at a density of $1.20\,\mathrm{kg/m^3}$, so the mass carried is
$$
\dot m=\rho_1Q_1=(1.20\cdot0.008)\,\mathrm{kg/s}=0.0096\,\mathrm{kg/s}.
$$
The measured density downstream is $0.96\,\mathrm{kg/m^3}$. The same mass per second then takes up
$$
Q_2=\frac{\dot m}{\rho_2}=\frac{0.0096}{0.96}\,\mathrm{m^3/s}=0.010\,\mathrm{m^3/s}=10\,\mathrm{L/s},
$$
$25\%$ more. In a pipe of uniform cross section, with the same area everywhere, the mean speed increases by the same percentage, because $v=\dfrac QA$. Comparing volume rates alone suggests gas entering. One first multiplies the volume rates by their respective densities. On the graph, for $\dfrac{\rho_2}{\rho_1}=0.8$ one reads $\dfrac{Q_2}{Q_1}=1.25$.

::grafico{f="1/x" punti=".8,1.25,pieno;1,1,pieno" segmenti=".8,0,.8,1.25;0.54,1.25,.8,1.25" etichette=".80,.13,0.8;.70,1.42,1.25" xmin=.54 xmax=1.31 ymin=0 ymax=2.15 nomi="ρ₂/ρ₁,Q₂/Q₁" titolo="At constant mass flow rate the volume flow rate rises as density falls."}
:::

## Bernoulli's equation

:::teorema{#bernoulli titolo="Energy along a streamline"}
In steady flow all fluid particles passing through the same point follow the same path, called a **streamline**. A fluid is **ideal** when friction, within the fluid and with the walls, is negligible. **Pressure** $p$ is the force the fluid exerts on each square metre of surface; it is measured in pascals (Pa), and $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$. The letter $y$ denotes the **height** of the point above a level chosen as zero, and $g\simeq9.81\,\mathrm{m/s^2}$ is the acceleration due to gravity.

For an incompressible ideal fluid in steady flow, with no pumps or turbines between two points on the same streamline,
$$
p_1+\frac12\rho v_1^2+\rho gy_1
=
p_2+\frac12\rho v_2^2+\rho gy_2 .
$$
Each term is an energy per unit volume, referred to one cubic metre of fluid:
- $\dfrac12\rho v^2$ is the kinetic energy per unit volume, because a volume $V$ has mass $\rho V$ and kinetic energy $\dfrac12\rho Vv^2$;
- $\rho gy$ is the gravitational potential energy per unit volume, $mgy=\rho Vgy$ divided by $V$;
- $p$ is measured in pascals, and $1\,\mathrm{Pa}=1\,\dfrac{\mathrm N}{\mathrm{m^2}}=1\,\dfrac{\mathrm{N\cdot m}}{\mathrm{m^3}}=1\,\dfrac{\mathrm J}{\mathrm{m^3}}$, one joule per cubic metre.

To obtain the equation, one follows a small volume $\Delta V$ of fluid along the streamline. At entry the fluid behind it pushes it and does work $p_1\Delta V$ on it. At exit the volume pushes the downstream fluid and does work $p_2\Delta V$. The net work $(p_1-p_2)\Delta V$ equals the change in kinetic energy plus the change in gravitational potential energy of the volume:
$$
(p_1-p_2)\Delta V=\frac12\rho\Delta V\,(v_2^2-v_1^2)+\rho\Delta V\,g(y_2-y_1).
$$
Dividing by $\Delta V$ and collecting on each side the terms for the same point gives the equation.

**Absolute** pressure is measured relative to vacuum. **Gauge** pressure is absolute pressure minus atmospheric pressure, about $101\,\mathrm{kPa}$, and is what a pressure gauge reads. Absolute or gauge pressures can be used in the equation, provided they are used in the same way at both points, because atmospheric pressure then appears on both sides and cancels.

Two simple cases follow from the equation:
- at equal speed, an increase in height lowers the pressure;
- at equal height, an increase in speed lowers the pressure in the ideal model.

The product $\rho g$ is called the **specific weight**. For water, with $\rho=1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{m/s^2}$, it is $10\,\mathrm{kPa/m}$, so each metre of rise removes $10\,\mathrm{kPa}$ from the pressure. When height and speed both change, the two contributions are computed separately, each with its sign, and then added. A pump supplies energy to the fluid and a turbine extracts it, so with either machine between the two points the theorem does not apply.
:::

:::esempio{titolo="Terms of opposite signs"}
Water moves from height $y_1$ to $y_1+1\,\mathrm m$. Its speed decreases from $6$ to $2\,\mathrm{m/s}$. With $\rho=1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{m/s^2}$ the two contributions are
$$
\frac12\rho(v_1^2-v_2^2)=\frac12\cdot1000\cdot(36-4)\,\mathrm{Pa}=16000\,\mathrm{Pa},
$$
$$
\rho g(y_2-y_1)=1000\cdot10\cdot1\,\mathrm{Pa}=10000\,\mathrm{Pa}.
$$
Slowing down raises the pressure by $16000\,\mathrm{Pa}$, while rising lowers it by $10000\,\mathrm{Pa}$. Therefore
$$
p_2-p_1=(16000-10000)\,\mathrm{Pa}=6000\,\mathrm{Pa}.
$$
Since the net change is positive, a higher section can have higher pressure if the decrease in speed is large enough.
:::

:::osservazione{titolo="Work out each contribution before adding"}
The first section is taken as the height datum, so its gravitational term is zero. The second section has a gravitational term of $(1000\cdot10\cdot1)\,\mathrm{Pa}=10\,\mathrm{kPa}$. The kinetic terms are $\dfrac12\cdot1000\cdot6^2\,\mathrm{Pa}=18\,\mathrm{kPa}$ and $\dfrac12\cdot1000\cdot2^2\,\mathrm{Pa}=2\,\mathrm{kPa}$. The pressure change is the balance between the $(18-2)\,\mathrm{kPa}=16\,\mathrm{kPa}$ released by slowing down and the $10\,\mathrm{kPa}$ needed for the rise, as the three bars of the graph show. At equal speeds the law of pressure in a fluid at rest (Stevin's law) would remain, $p_1-p_2=\rho g(y_2-y_1)$. With equal pressures at both points, instead, the decrease in the kinetic term would equal the increase in the gravitational term.

::grafico{assi=0 linee=".22,0 3.8,0" poligoni=".62,0 1.38,0 1.38,16 .62,16;1.62,0 2.38,0 2.38,-10 1.62,-10;2.62,0 3.38,0 3.38,6 2.62,6" etichette=".72,18,+16 kPa;1.72,-12.2,−10 kPa;2.72,8,+6 kPa;.58,-2.5,speed;1.76,2.6,height;2.64,-2.5,net" xmin=.1 xmax=3.85 ymin=-14.5 ymax=21 titolo="The speed decrease and height increase contribute opposite pressure changes."}
:::

:::esempio{titolo="Comparing two pressure taps"}
A **pressure tap** is a hole connected to a pressure gauge. A side tap, flush with the wall, measures the **static pressure** $p$, that is, the pressure of the moving fluid. A small tube facing the oncoming flow brings the fluid to rest at its opening, at the **stagnation** point, where the pressure is $p_0$.

In a straight reach, where the streamlines are nearly parallel, the side tap gives the static pressure at the sampled point at the same height. If losses between that point and the stagnation point are negligible, Bernoulli's equation with final speed zero and equal heights gives
$$
p_0-p=\frac12\rho v^2.
$$
For water of density $1000\,\mathrm{kg/m^3}$ and a difference of $8\,\mathrm{kPa}$,
$$
v=\sqrt{\frac{2(p_0-p)}{\rho}}=\sqrt{\frac{2\cdot8000}{1000}}\,\mathrm{m/s}=4\,\mathrm{m/s}.
$$
Finding the flow rate also requires the area of the section and the mean speed, which can be different. In laminar flow in a pipe, for example, the speed at the centre is twice the mean.
:::

## Venturi effect

:::osservazione{#venturi titolo="Constrictions and pressure"}
A **Venturi tube** is a pipe with a constriction, called the **throat**. One considers a horizontal pipe carrying an ideal, incompressible fluid. At the throat the area is smaller, so by continuity the speed is greater. The heights are equal, so by Bernoulli's equation the pressure at the throat is lower. From continuity $A_1v_1=A_2v_2$ one obtains $v_2=\dfrac{A_1}{A_2}v_1$. Substituting into the balance $p_1-p_2=\dfrac12\rho\left(v_2^2-v_1^2\right)$ and factoring out $v_1^2$ gives
$$
p_1-p_2=\frac12\rho v_1^2\left[\left(\frac{A_1}{A_2}\right)^2-1\right].
$$
If the areas are fixed, the pressure drop $p_1-p_2$ is proportional to the square of the inlet speed; for example, if $v_1$ doubles, the drop becomes four times as large. Conversely, from the pressure difference and the area ratio one finds $v_1^2$, then $v_1$ by a square root and finally the flow rate $Q=A_1v_1$.

Beyond the throat the pipe widens again, the speed decreases and the static pressure rises; the pressure is said to be **recovered**. In a real fluid part of the mechanical energy is turned into heat by friction (**dissipation**), so the recovered pressure is lower than the ideal model predicts. Comparing two speeds is not enough to decide which pressure is greater if:
- the heights of the points differ;
- there is a machine, such as a pump, between the two points;
- the points lie on streamlines with different energies.
:::

:::esempio{titolo="Flow rate from a pressure difference"}
In an ideal horizontal Venturi the inlet area is twice the throat area, so $\dfrac{A_1}{A_2}=2$ and the formula gives
$$
p_1-p_2=\frac12\rho v_1^2\left(2^2-1\right)=\frac32\rho v_1^2.
$$
For water of density $1000\,\mathrm{kg/m^3}$ and $p_1-p_2=6000\,\mathrm{Pa}$, the squared inlet speed is
$$
v_1^2=\frac{2\cdot6000}{1000\cdot3}\,\mathrm{m^2/s^2}=4\,\mathrm{m^2/s^2}.
$$
Thus $v_1=2\,\mathrm{m/s}$ and, since the throat has half the area, $v_2=4\,\mathrm{m/s}$. If $A_1=0.010\,\mathrm{m^2}$, the flow rate is $Q=A_1v_1=(0.010\cdot2)\,\mathrm{m^3/s}=0.020\,\mathrm{m^3/s}$.

::grafico{assi=0 linee="-4,1.4 -1,1.4 1,1 4,1;-4,-1.4 -1,-1.4 1,-1 4,-1" vettori="-3.3,0,-1.9,0,v_1;1,0,3.8,0,v_2" xmin=-4.5 xmax=4.7 ymin=-2.2 ymax=2.3 titolo="The throat has half the area and twice the mean speed"}
:::

:::esempio{titolo="Read a Venturi calibration"}
A **calibration** is the table relating the instrument reading, here the pressure difference, to the quantity sought. For the geometry in the previous example $\Delta p=\dfrac32\rho v_1^2$, $v_2=2v_1$ and $Q=A_1v_1$.

| $\Delta p$ (kPa) | $v_1$ (m/s) | $v_2$ (m/s) | $Q$ (L/s) |
| ---: | ---: | ---: | ---: |
| 1.5 | 1 | 2 | 10 |
| 6 | 2 | 4 | 20 |
| 13.5 | 3 | 6 | 30 |

When the reading rises from $1.5$ to $6\,\mathrm{kPa}$ the difference quadruples and the flow rate doubles, because $\Delta p$ is proportional to the square of $Q$. A reading of $13.5\,\mathrm{kPa}$, nine times the first, instead indicates three times the first flow rate. The parabola on the graph starts at the origin because, in the ideal horizontal model, at rest the two pressures at the same height are equal.

A second comparison uses two pressure taps at the same height and in two sections of equal area, one upstream of the contraction and one beyond the expansion. In steady flow, by continuity, the mean speeds in the two sections are equal. With no pumps, the remaining pressure difference between the taps therefore measures the loss of mechanical energy per unit volume.

::grafico{f=".015*x^2" punti="10,1.5,pieno;20,6,pieno;30,13.5,pieno" segmenti="20,0,20,6;0,6,20,6;30,0,30,13.5;0,13.5,30,13.5" xmin=0 xmax=33 ymin=0 ymax=16.5 nomi="Q (L/s),Δp (kPa)" titolo="At fixed areas and density the pressure difference varies with the square of the flow rate."}
:::

## Torricelli's law

:::teorema{#torricelli titolo="Exit speed from a reservoir"}
An open reservoir, in contact with the air, drains through a small hole at depth $h$ below the free surface of the liquid. **Outflow** is the exit of liquid through the hole, and the **jet** is the liquid that has just left. The assumptions are:
- the surface is much larger than the hole and the level falls slowly, so the surface speed is negligible compared with the jet speed;
- the surface and the emerging jet are both at atmospheric pressure.

Bernoulli's equation is applied between a point on the surface, with speed zero and height $h$ above the hole, and a point in the jet, with speed $v$ and height zero. The pressures are equal and cancel, so what remains is
$$
\rho gh=\frac12\rho v^2,\qquad v=\sqrt{2gh}.
$$
Under these assumptions the flow rate is $Q=Av$, where $A$ is the **effective area** of the jet, its cross-sectional area just outside the hole. If the pressure at the surface $p_{\mathrm s}$ differs from the pressure at the outlet $p_{\mathrm u}$, the term $\dfrac{p_{\mathrm s}-p_{\mathrm u}}{\rho}$ is added to the balance per unit mass:
$$
\frac{v^2}{2}=gh+\frac{p_{\mathrm s}-p_{\mathrm u}}{\rho}.
$$
If the two areas were comparable, the surface speed would also have to be included in the balance, found from continuity $A_{\mathrm s}v_{\mathrm s}=Av$.

As the tank drains, the level falls and the depth of the hole decreases. It follows that speed and flow rate decrease. Using the initial flow rate throughout gives too large a discharged volume in a given time, or too short a time for a given volume to leave. In practice the jet narrows just after leaving (**contraction** of the jet) and friction dissipates energy. For these reasons the flow rate is less than the product of ideal speed and geometrical area of the hole; one then uses the effective area or a **discharge coefficient**, a number less than 1 that multiplies the ideal flow rate.
:::

:::esempio{titolo="Changing outlet depth"}
With $g=10\,\mathrm{m/s^2}$, the ideal speed at depth $0.80\,\mathrm m$ is
$$
v=\sqrt{2\cdot10\cdot0.80}\,\mathrm{m/s}=\sqrt{16}\,\mathrm{m/s}=4\,\mathrm{m/s}.
$$
If the level falls until the hole is $0.20\,\mathrm m$ below it, the depth becomes one quarter. The speed becomes $\sqrt{2\cdot10\cdot0.20}\,\mathrm{m/s}=\sqrt4\,\mathrm{m/s}=2\,\mathrm{m/s}$, half, because $\sqrt{\dfrac14}=\dfrac12$. At fixed outlet area the flow rate also halves. The speed is proportional to the square root of the depth, so the graph is a curve that rises more and more slowly.

::grafico{f="sqrt(20*x)" punti=".2,2,pieno;0.8,4,pieno" xmin=0 xmax=1 ymin=0 ymax=5 nomi="h (m),v (m/s)" titolo="Depth sets the exit speed in the ideal model"}
:::

:::esempio{titolo="A closed tank discharges into air"}
In a closed tank the gas above the liquid can have a pressure $p_{\mathrm s}$ different from the atmospheric pressure $p_{\mathrm u}$ acting on the jet. When the free surface is much wider than the hole, the balance multiplied by two gives
$$
v^2=2gh+\frac{2(p_{\mathrm s}-p_{\mathrm u})}{\rho}.
$$
For water with $\rho=1000\,\mathrm{kg/m^3}$, $h=0.45\,\mathrm m$ and $g=10\,\mathrm{m/s^2}$, at equal pressures $v^2=(2\cdot10\cdot0.45)\,\mathrm{m^2/s^2}=9\,\mathrm{m^2/s^2}$, so the outlet speed would be $3\,\mathrm{m/s}$. An overpressure of $3500\,\mathrm{Pa}$ at the surface, a pressure $3500\,\mathrm{Pa}$ above that at the outlet, adds $\dfrac{2\cdot3500}{1000}\,\mathrm{m^2/s^2}=7\,\mathrm{m^2/s^2}$ to the $9\,\mathrm{m^2/s^2}$ provided by the depth. In all $v^2=16\,\mathrm{m^2/s^2}$, and the speed rises to $4\,\mathrm{m/s}$. If the pressure at the surface were lower than at the outlet, its contribution would be negative. Liquid flows out through the hole in that direction only if the calculated value of $v^2$ is positive.

::grafico{assi=0 linee="-2,0 -2,3.6 1.5,3.6 1.5,.8;-2,0 1.5,0 1.5,.42;-2,2.37 1.5,2.37" poligoni="-2,0 1.5,0 1.5,2.37 -2,2.37" segmenti="1.5,2.37,2.12,2.37;1.5,.61,2.12,.61;2.06,2.37,2.06,.61" vettori="1.53,.61,3.26,.61,v" etichette="-.40,2.88,pₛ;2.67,1.0,pᵤ;2.19,1.52,h" xmin=-2.3 xmax=3.5 ymin=-.36 ymax=3.91 titolo="Outlet speed depends on the hole depth and the pressures at the free surface and jet."}
:::

## Viscosity and real flow

:::osservazione{#viscosita titolo="Flow resistance and laminar motion"}
**Viscosity** is the internal friction of a fluid, by which two neighbouring layers moving at different speeds slow each other down. **Dynamic viscosity** $\eta$ (Greek letter *eta*) measures the resistance to relative sliding between layers of the fluid and is measured in pascal seconds, $\mathrm{Pa\cdot s}$. A fluid is **Newtonian** when its viscosity does not depend on how fast the layers slide, as for water, oil and air. Flow is **laminar** when the fluid moves in orderly layers, without eddies, and **turbulent** when eddies form and the motion becomes irregular.

One considers a Newtonian incompressible fluid in steady laminar flow in a long cylindrical tube, long enough to have the same velocity profile at every section (**fully developed** flow). Under these assumptions **Poiseuille's law** holds,
$$
Q=\frac{\pi r^4\Delta p}{8\eta L},
$$
where $r$ is the tube radius, $L$ its length and $\Delta p$ the pressure difference between its ends.

A pressure difference is needed even at constant mean speed and height, because it supplies the energy that viscosity dissipates, turning it into heat. The velocity profile along the tube axis is a parabola, maximal at the centre and zero at the wall, because the fluid sticks to the stationary wall and does not slip on it. The maximum speed is twice the mean speed over the section. At fixed pressure difference, doubling the radius makes the flow rate $2^4=16$ times larger, if the flow stays laminar.

A small sphere of radius $r$ moves slowly in a Newtonian fluid, far from walls. The **relative velocity** is the velocity of the sphere minus that of the fluid; for example, a sphere moving right at $0.020\,\mathrm{m/s}$ in a liquid moving right at $0.005\,\mathrm{m/s}$ has a relative velocity of $0.015\,\mathrm{m/s}$ to the right. The resistance of the fluid, called **Stokes drag**, has magnitude
$$
F_v=6\pi\eta rv,
$$
where $v$ is the magnitude of the relative velocity, and it points opposite to the velocity of the sphere relative to the fluid.

This law requires a very small Reynolds number. The **Reynolds number** compares the inertia of the fluid with its viscosity:
$$
\mathrm{Re}=\frac{\rho vD}{\eta},
$$
where $D$ is the tube diameter, with the mean speed, or the sphere diameter, as appropriate. It is a pure number, with no unit. In a straight pipe the flow is laminar for values of $\mathrm{Re}$ up to about $2000$; for much larger values it becomes turbulent.

The **terminal velocity** $v_\ell$ of a falling sphere is the constant speed reached when the sum of the drag and the buoyant force, the upward force equal to the weight of the displaced fluid, equals the weight. From then on the resultant force is zero and the acceleration is zero. For a sphere of density $\rho_{\mathrm s}$ and volume $\dfrac43\pi r^3$, in a fluid of density $\rho$, the equality
$$
6\pi\eta rv_\ell=(\rho_{\mathrm s}-\rho)\frac43\pi r^3g
$$
gives $v_\ell=\dfrac{2(\rho_{\mathrm s}-\rho)gr^2}{9\eta}$. An object less dense than the fluid rises, so its terminal velocity is upward and the drag is downward, opposing the rise.
:::

:::esempio{titolo="Same fluid in a longer tube"}
A tube is replaced by one of the same cross section and three times the length. In Poiseuille's law $L$ is in the denominator, so the flow rate is inversely proportional to the length. At fixed viscosity and pressure difference, if Poiseuille flow still applies, the flow rate drops to one third. Keeping the old flow rate instead requires three times the pressure drop. Changing the radius would have a stronger effect, because the radius is raised to the fourth power.

The graph shows the laminar profile: horizontally, the distance from the axis divided by the tube radius $R$, vertically the speed divided by the maximum speed; the value is 1 on the axis and zero at the walls.

::grafico{curve="t,1-t^2,-1,1" punti="0,1,pieno;1,0,pieno;-1,0,pieno" xmin=-1.25 xmax=1.25 ymin=-.16 ymax=1.25 nomi="r/R,v/v_max" titolo="The normalised laminar velocity is zero at each wall"}
:::

:::esempio{titolo="Keeping the flow rate in a narrower pipe"}
From Poiseuille's law, $\Delta p=\dfrac{8\eta LQ}{\pi r^4}$. At fixed flow rate, viscosity and length, the required pressure drop is therefore proportional to $\dfrac1{r^4}$. If the new radius is $0.80$ times the initial one, the pressure drop must be
$$
\frac{1}{0.80^4}=\frac{1}{0.4096}\simeq2.44
$$
times the original value. At the original pressure drop, the fraction $0.80^4\simeq0.41$ would pass instead, about $41\%$ of the previous flow rate. Raising the pressure difference to maintain the flow rate increases the mean speed, because $v=\dfrac{Q}{\pi r^2}$ is proportional to $\dfrac1{r^2}$. In the Reynolds number $\dfrac{\rho vD}{\eta}$ the speed is proportional to $\dfrac1{r^2}$ and the diameter $D=2r$ is proportional to $r$, so $\mathrm{Re}$ is proportional to $\dfrac1r$. Since $\dfrac1{0.80}=1.25$, the Reynolds number increases by $25\%$. Before using the law for the new pipe, one therefore checks that the flow remains laminar.

Two stretches of pipe are **in series** when they are connected one after the other, so the same flow rate passes through both. Their pressure drops add. With the same radius and viscosity, each stretch's share of the pressure drop is proportional to its length.

::grafico{f="1/x^4" punti=".8,2.441406,pieno;1,1,pieno" segmenti=".8,0,.8,2.441406;.6,2.441406,.8,2.441406" etichette=".80,2.95,2.44" xmin=.6 xmax=1.42 ymin=0 ymax=8.2 nomi="r/r₀,Δp/Δp₀" titolo="Maintaining the flow rate requires a rapidly growing pressure difference as radius decreases."}
:::
