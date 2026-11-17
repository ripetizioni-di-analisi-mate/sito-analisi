---
titolo: Fluids in motion
sommario: Flow rate, continuity, Bernoulli, outflow and models of viscous flow.
---

## Flow rate and steady flow

:::definizione{#portata titolo="Volume crossing a section"}
The **mean volume flow rate** is the fluid volume crossing a section divided by elapsed time, $Q_m=\dfrac{\Delta V}{\Delta t}$. Its SI unit is $\mathrm{m^3/s}$. If velocity is uniform and normal to the section, the transported fluid during a short interval occupies a cylinder of area $A$ and length $v\Delta t$. Hence $Q=Av$. For a nonuniform profile, average the normal velocity over the whole section. A speed measured at the tube centre can exceed the average and should not be used directly in $Q=Av$.

A litre is $10^{-3}\,\mathrm{m^3}$. A flow of $6\,\mathrm{L/s}$ therefore equals $0.006\,\mathrm{m^3/s}$. The **mass flow rate** is $\dot m=\rho Q$ when density is uniform over the section; it measures mass per time. In steady flow, velocity, pressure and density at a fixed point do not change with time. They can vary from section to section. Velocity can therefore be steady while the same fluid particle accelerates into a constriction.
:::

:::esempio{titolo="Volume from a flow rate–time graph"}
A pump transfers $4\,\mathrm{L/s}$ for $10\,\mathrm s$, then $2\,\mathrm{L/s}$ for $5\,\mathrm s$. The volumes are $40\,\mathrm L$ and $10\,\mathrm L$, so $50\,\mathrm L$ passes in all. The mean over fifteen seconds is $50/15\,\mathrm{L/s}\simeq3.33\,\mathrm{L/s}$. The ordinary average of the two rates would give $3\,\mathrm{L/s}$ and would only be valid if the durations agreed.

::grafico{linee="0,4 10,4;10,2 15,2" area="4;0;0;10|2;0;10;15" xmin=0 xmax=17 ymin=0 ymax=5.3 nomi="t (s),Q (L/s)" titolo="The rectangular areas give the volumes transferred over the two intervals"}
:::

## Continuity

:::teorema{#continuita titolo="Conservation of mass"}
Consider the fluid between two sections. Its mass change is incoming mass minus outgoing mass. At steady state, with no leaks or branches, the two mass flow rates agree:
$$
\rho_1 A_1 v_1=\rho_2A_2v_2.
$$
For an incompressible liquid, $\rho_1=\rho_2$, so volume flow rate is conserved too and $A_1v_1=A_2v_2$. Halving a circular section's radius reduces its area to one quarter. At the same flow rate its mean speed quadruples. If density varies, as it may for a gas, mass flow rate is the constrained quantity.

At a branch, incoming mass flow rate equals the sum of outgoing mass flow rates as long as mass does not accumulate inside. With the same incompressible liquid in all branches, add volume flow rates instead. Continuity constrains flows but does not by itself determine how the total flow divides among branches. Pressure and resistance relations are also needed.
:::

:::esempio{titolo="A branching pipe"}
The incoming flow is $10\,\mathrm{L/s}$ and branch 2 discharges $6\,\mathrm{L/s}$. With no accumulation branch 3 receives $4\,\mathrm{L/s}$. If its normal area is $0.002\,\mathrm{m^2}$, its mean speed is $2\,\mathrm{m/s}$ because $4\,\mathrm{L/s}=0.004\,\mathrm{m^3/s}$. The two branches need not have equal exit speeds.

::grafico{assi=0 vettori="-3,0,-.4,0,10;.2,.3,2.7,1.4,6;.2,-.3,2.4,-1.3,4" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=2.5 titolo="Arrow labels give flow rates in litres per second"}
:::

## Bernoulli's equation

:::teorema{#bernoulli titolo="Energy along a streamline"}
For an incompressible ideal fluid in steady flow, with negligible friction and no pumps or turbines between two points on the same streamline,
$$
p_1+\frac12\rho v_1^2+\rho gy_1
=
p_2+\frac12\rho v_2^2+\rho gy_2 .
$$
All three terms have units of pascals, which are energy per unit volume. To obtain the equation, follow a volume $\Delta V$. Its surroundings supply work $p_1\Delta V$ at entry. At exit it must do work $p_2\Delta V$ against the downstream fluid. The balance changes the volume's kinetic and gravitational potential energies. Divide by $\Delta V$ to obtain the equation.

Absolute pressures or gauge pressures with the same reference can be used at both points because an added constant cancels. Increasing height lowers pressure if speed and other conditions stay fixed. Increasing speed at equal height lowers pressure in the ideal model. When height and speed both change, compute their two contributions separately with their signs.
:::

:::esempio{titolo="Terms of opposite signs"}
Water moves from height $y_1$ to $y_1+1\,\mathrm m$. Its speed decreases from $6$ to $2\,\mathrm{m/s}$. With $\rho=1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{m/s^2}$, slowing down contributes a $16000\,\mathrm{Pa}$ pressure increase, while rising contributes a $10000\,\mathrm{Pa}$ decrease. The net change $p_2-p_1=6000\,\mathrm{Pa}$ is positive. A higher section can therefore have higher pressure if the decrease in speed is large enough.
:::

## Venturi effect

:::osservazione{#venturi titolo="Constrictions and pressure"}
In a horizontal, ideal, incompressible flow, a constriction raises speed by continuity. Bernoulli's equation gives lower pressure at the throat. Substituting $v_2=(A_1/A_2)v_1$ into the balance gives
$$
p_1-p_2=\frac12\rho v_1^2\left[\left(\frac{A_1}{A_2}\right)^2-1\right].
$$
At fixed areas, the pressure drop grows with the square of inlet speed. Conversely, the pressure difference and area ratio give speed through a square root, after which $A_1v_1$ gives flow rate.

An expanding section can recover some static pressure. In a real fluid dissipation reduces the recovered pressure relative to the ideal model. Comparing speeds alone is insufficient if heights also differ, machinery is present, or the points belong to streamlines with different energies.
:::

:::esempio{titolo="Flow rate from a pressure difference"}
In an ideal horizontal Venturi the inlet area is twice the throat area. For water of density $1000\,\mathrm{kg/m^3}$ and $p_1-p_2=6000\,\mathrm{Pa}$, squared inlet speed is $2\cdot6000/(1000\cdot3)=4\,\mathrm{m^2/s^2}$. Thus $v_1=2\,\mathrm{m/s}$ and $v_2=4\,\mathrm{m/s}$. If $A_1=0.010\,\mathrm{m^2}$, the flow rate is $0.020\,\mathrm{m^3/s}$.

::grafico{assi=0 linee="-4,1.4 -1,1.4 1,1 4,1;-4,-1.4 -1,-1.4 1,-1 4,-1" vettori="-3.3,0,-1.9,0,v_1;1,0,3.8,0,v_2" xmin=-4.5 xmax=4.7 ymin=-2.2 ymax=2.3 titolo="The throat has half the area and twice the mean speed"}
:::

## Torricelli's law

:::teorema{#torricelli titolo="Exit speed from a reservoir"}
An open reservoir drains through a small hole at depth $h$ below the surface. Assume the surface is much larger than the hole and that the level changes slowly. Surface speed is then negligible relative to jet speed. Both the free surface and the emerging jet are at atmospheric pressure. Bernoulli's equation converts height difference to kinetic energy per volume:
$$
\rho gh=\frac12\rho v^2,\qquad v=\sqrt{2gh}.
$$
Under these assumptions the effective jet area gives $Q=Av$. A pressure difference between surface and exit would add $(p_{\mathrm s}-p_{\mathrm u})/\rho$ to the balance per unit mass. If the two areas were comparable, the surface speed would also enter through continuity.

As the tank drains the free surface falls. Speed and flow rate therefore decrease. Using initial flow throughout overestimates the discharged volume in a given time, or underestimates how long a given volume takes to leave. Jet contraction and other losses reduce actual flow below the product computed with the whole geometrical hole area.
:::

:::esempio{titolo="Changing outlet depth"}
With $g=10\,\mathrm{m/s^2}$, the ideal speed at depth $0.80\,\mathrm m$ is $4\,\mathrm{m/s}$. If the level falls until the hole is $0.20\,\mathrm m$ below it, depth becomes one quarter and speed halves. At fixed outlet area flow also halves. This is a square-root relation.

::grafico{f="sqrt(20*x)" punti=".2,2,pieno;0.8,4,pieno" xmin=0 xmax=1 ymin=0 ymax=5 nomi="h (m),v (m/s)" titolo="Depth sets the exit speed in the ideal model"}
:::

## Viscosity and real flow

:::osservazione{#viscosita titolo="Flow resistance and laminar motion"}
**Dynamic viscosity** $\eta$ measures resistance to relative sliding between layers, in $\mathrm{Pa\cdot s}$. For a Newtonian incompressible fluid with steady fully developed laminar flow in a long cylindrical tube, Poiseuille's law gives
$$
Q=\frac{\pi r^4\Delta p}{8\eta L}.
$$
A pressure difference is needed even at constant mean speed and height. It supplies energy dissipated in the flow. The axial velocity profile is parabolic, maximal at the centre and zero at the wall with no slip there. The maximum is twice the cross-sectional mean. At imposed pressure, doubling radius multiplies flow by sixteen if the regime stays laminar.

For a small sphere moving slowly in a Newtonian fluid far from walls, Stokes drag has magnitude $F_v=6\pi\eta rv$ and opposes sphere velocity relative to the fluid. This law requires a very small Reynolds number. Reynolds number compares inertial and viscous effects, $\mathrm{Re}=\rho vD/\eta$, using tube or sphere diameter as appropriate. A falling object's terminal speed occurs when drag and buoyancy balance weight. An object less dense than the fluid has upward terminal motion and drag opposing that rise.
:::

:::esempio{titolo="Same fluid in a longer tube"}
A tube is replaced by one of the same cross section and three times the length. At fixed viscosity and pressure difference, if Poiseuille flow still applies, flow rate drops to one third. Keeping the old flow rate instead requires three times the pressure drop. Radius changes have a stronger effect because radius is raised to the fourth power.

::grafico{curve="t,1-t^2,-1,1" punti="0,1,pieno;1,0,pieno;-1,0,pieno" xmin=-1.25 xmax=1.25 ymin=-.16 ymax=1.25 nomi="r/R,v/v_max" titolo="The normalised laminar velocity is zero at each wall"}
:::
