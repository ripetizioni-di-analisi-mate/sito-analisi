---
titolo: Pressure and fluids in equilibrium
sommario: Pressure, liquids in equilibrium, Pascal's principle, the buoyant force, and the conditions for flotation, with the units and assumptions for each formula.
---

## Fluids and density

:::definizione{#fluidi titolo="Liquids and gases"}
Liquids and gases are called **fluids** because they can flow and take the shape of their container. A liquid maintains approximately the same volume. A gas fills the available space, and its volume can change considerably when the pressure changes.

A fluid is in **static equilibrium** when every part of it is at rest in the chosen frame of reference. In this chapter we study liquids at rest whose density is uniform and nearly constant. These conditions describe, for example, still water in a tank. Formulas for liquids in equilibrium do not necessarily apply to water flowing through a pipe.
:::

:::definizione{#densita titolo="Density"}
The **density** of a homogeneous body is the ratio of its mass $m$ to its volume $V$,
$$
\rho=\frac{m}{V}.
$$
The Greek letter $\rho$ is pronounced “roh.” In the International System of Units, density is measured in $\mathrm{kg/m^3}$. The formula can also be used to find the mass from a known volume, $m=\rho V$.

Introductory problems often assume $\rho=1000\,\mathrm{kg/m^3}$ for water. With this approximation, $2\,\mathrm{L}=0.002\,\mathrm{m^3}$ of water has a mass of $m=1000\cdot0.002=2\,\mathrm{kg}$. The actual density depends on temperature and composition. In the exercises, we will use the value given in the problem.
:::

## Force and contact area

:::definizione{#pressione titolo="Pressure"}
**Pressure** describes how concentrated a perpendicular force is on a surface. If a normal force of magnitude $F$ is distributed uniformly over an area $A$, the pressure is
$$
p=\frac{F}{A}.
$$
The word *normal* means perpendicular to the surface. The unit of pressure is the **pascal**, with symbol $\mathrm{Pa}$, and is defined by
$$
1\,\mathrm{Pa}=1\,\mathrm{N/m^2}.
$$
If the force is distributed unevenly, the ratio $\dfrac{F}{A}$ gives the average pressure on the surface. When the pressure is uniform, the force is given by $F=pA$.

A force of $200\,\mathrm{N}$ acting on an area of $0.10\,\mathrm{m^2}$ produces an average pressure of $2000\,\mathrm{Pa}$. Distributed over $0.20\,\mathrm{m^2}$, the same force produces a pressure of $1000\,\mathrm{Pa}$. For a given force, doubling the area halves the pressure.

::grafico{assi=0 uguale=1 linee="-0.5,0 6,0" poligoni="0,0 1,0 1,1 0,1;3,0 5,0 5,0.5 3,0.5" vettori="0.5,2,0.5,0.8,F;4,2,4,0.8,F" etichette="0.4,-0.5,A;4,-0.5,2A" xmin=-1 xmax=6 ymin=-1 ymax=2.8 titolo="Distributing the same force over twice the area halves the average pressure. The drawing shows a schematic comparison of the contact areas."}
:::

:::osservazione{titolo="Converting areas"}
One meter contains one hundred centimeters, so one square meter contains $100\cdot100=10000$ square centimeters. Therefore,
$$
1\,\mathrm{cm^2}=0.0001\,\mathrm{m^2}.
$$
For example, an area of $25\,\mathrm{cm^2}$ equals $0.0025\,\mathrm{m^2}$. Converting the area is necessary to obtain pressure in pascals when the force is expressed in newtons.
:::

## Pressure in a fluid at rest

:::teorema{#pressione-fluido titolo="Pressure forces"}
A fluid in equilibrium exerts a force on a wall in a direction perpendicular to its surface. At any given point, the pressure has the same value in all directions. This is a property of fluids in equilibrium.

Pressure is a scalar quantity. The directions of the forces it produces depend on the surfaces on which they act. Water in a tank exerts a downward force on the bottom and horizontal forces on the vertical walls.

For example, a uniform pressure of $3000\,\mathrm{Pa}$ on a small, flat surface of area $0.002\,\mathrm{m^2}$ produces a force of magnitude $6\,\mathrm{N}$ perpendicular to the surface. If another fluid is on the other side, its pressure also contributes to the net force.
:::

:::definizione{#pressione-assoluta-relativa titolo="Absolute and relative pressure"}
**Absolute pressure** is measured relative to a vacuum. **Relative pressure** is the difference between the absolute pressure $p$ and a reference pressure $p_0$, which is often atmospheric pressure,
$$
p_{\mathrm{rel}}=p-p_0.
$$
Atmospheric air also exerts pressure on the free surface of a liquid. In the calculations we will use the value of $p_0$ given in the problem. A common approximate value is $100000\,\mathrm{Pa}$.

If the absolute pressure inside a container is $130000\,\mathrm{Pa}$ while the atmospheric pressure outside is $100000\,\mathrm{Pa}$, the gauge pressure is $30000\,\mathrm{Pa}$. The two measurements describe the same state relative to different references.
:::

## Pressure and depth

::::teorema{#stevino titolo="Stevin's law of hydrostatic pressure"}
In a liquid at rest with uniform density $\rho$, the pressure increases with depth below the surface. If the surface pressure is $p_0$ and the vertical depth is $h$, then
$$
p=p_0+\rho gh.
$$
The symbol $g$ denotes the acceleration due to gravity, assumed constant. The term $\rho gh$ is the increase in pressure relative to the surface. Depth is measured vertically, regardless of the shape of the container.

:::dimostrazione
Consider an imaginary vertical column of liquid with cross-sectional area $A$ and height $h$. Its volume is $Ah$ and its mass is $\rho Ah$, so its weight is $\rho Ahg$. The force $pA$ acts upward on the base, while $p_0A$ acts downward on the top. Vertical equilibrium gives
$$
pA=p_0A+\rho Ahg.
$$
Dividing all terms by the area $A$ gives $p=p_0+\rho gh$.
:::
::::

:::esempio{titolo="Two meters below the surface"}
A tank holds water with a density of $1000\,\mathrm{kg/m^3}$ and a surface pressure of $p_0=100000\,\mathrm{Pa}$. At a depth of $2\,\mathrm{m}$, with $g=9.81\,\mathrm{m/s^2}$, we obtain
$$
\begin{aligned}
p_{\mathrm{rel}}&=1000\cdot9.81\cdot2\,\mathrm{Pa}\\[6pt]
&=19620\,\mathrm{Pa},\\[6pt]
p&=100000\,\mathrm{Pa}+19620\,\mathrm{Pa}\\[6pt]
&=119620\,\mathrm{Pa}.
\end{aligned}
$$
The pressure relative to the surface is proportional to depth. The graph of absolute pressure starts at $p_0$ when $h=0$.

::grafico{f="9.81*x" xmin=0 xmax=4 ymin=0 ymax=40 nomi="h,p" punti="2,19.62" legenda="p_{\mathrm{rel}}=9.81h" titolo="Pressure relative to the water surface, with $h$ in meters and $p_{\mathrm{rel}}$ in kilopascals, where $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$."}
:::

## Levels in communicating vessels

:::teorema{#vasi-comunicanti titolo="Levels in communicating vessels"}
When connected containers hold the same liquid at rest and their free surfaces are under the same pressure, the liquid reaches the same level in each container. This neglects surface tension effects, which can be significant in very narrow tubes.

This follows because the pressures at any two points at the same elevation in the connected liquid must be equal. By the hydrostatic pressure law, when $p_0$, $\rho$, and $g$ are the same, equal pressures require equal depths below the free surfaces.

The liquid in a wide container and a narrow tube connected at the base therefore reaches the same level even if they hold different volumes. For example, if one free surface is $20\,\mathrm{cm}$ above the connection, the other is also at the same height of $20\,\mathrm{cm}$ in equilibrium.

::grafico{assi=0 uguale=1 linee="0,3.2 0,0 5,0 5,3.2;2,3.2 2,1 4,1 4,3.2" poligoni="0,0 5,0 5,2.5 4,2.5 4,1 2,1 2,2.5 0,2.5" segmenti="0,2.5,5,2.5" etichette="0.8,2.9,p₀;4.5,2.9,p₀" xmin=-0.7 xmax=5.7 ymin=-0.5 ymax=3.7 titolo="The same liquid in communicating vessels reaches the same level when the pressure is the same on both surfaces."}
:::

:::osservazione{titolo="Comparing depths"}
Two points in the same liquid in equilibrium have the same pressure if they lie at the same depth below surfaces subject to the same pressure. Neither the shape of the wall nor the total amount of liquid appears in the hydrostatic pressure law.

For example, at $0.50\,\mathrm{m}$ below the surface of the water, the pressure increase is $4905\,\mathrm{Pa}$ in both a narrow and a wide container. This result concerns pressure. The force on the bottom also depends on its area.
:::

## Transmission of pressure

:::teorema{#pascal titolo="Pascal's principle"}
A pressure increase applied to a confined liquid in equilibrium is transmitted to every part of the liquid. This is **Pascal's principle**, an experimentally established property of liquids.

In an ideal hydraulic press, two pistons with areas $A_1$ and $A_2$ act on the same liquid. If the pistons are at the same elevation, their weights and friction are negligible, and the external atmospheric pressure is the same on both, then
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2},
\qquad F_2=F_1\frac{A_2}{A_1}.
$$
The quantities $F_1$ and $F_2$ are the magnitudes of the external forces transmitted by the pistons. The additional pressure is the same at both points, while the forces depend on the areas.

If the area of the second piston is five times that of the first, a force of $40\,\mathrm{N}$ on the first can balance $200\,\mathrm{N}$ on the second. In operation, the smaller piston must travel farther, so the increase in force is consistent with conservation of energy.
:::

## Buoyant force

::::teorema{#archimede titolo="Buoyant force"}
The pressure forces on a body immersed in a fluid at rest produce a net upward force. Its magnitude equals the weight of the displaced fluid. This force is the **buoyant force**,
$$
F_A=\rho_f gV_{\mathrm{imm}},
$$
where $\rho_f$ is the density of the fluid and $V_{\mathrm{imm}}$ is the volume of the immersed part of the body. If the body is completely submerged, this volume equals the total volume. The fluid is assumed to surround the immersed surface. If a body is stuck to the bottom, the forces actually acting on it must be examined.

:::dimostrazione
For a fully submerged parallelepiped with a horizontal base of area $A$ and height $H$, the horizontal forces on the side faces balance. The lower face is deeper, so the pressure on it exceeds that on the upper face by $\rho_f gH$.

The net vertical force due to pressure is therefore
$$
F_A=(p_{\mathrm{inf}}-p_{\mathrm{sup}})A
=\rho_f gHA
=\rho_f gV.
$$
The force on the lower face is greater and points upward, so the net force also points upward. The result also holds for bodies of other shapes.
:::
::::

:::esempio{titolo="Immersed volume"}
An object displaces $0.003\,\mathrm{m^3}$ of water with a density of $1000\,\mathrm{kg/m^3}$. The buoyant force is
$$
F_A=1000\cdot9.81\cdot0.003\,\mathrm{N}=29.43\,\mathrm{N}.
$$
The given volume refers to the immersed part. If only half of a body with a volume of $0.006\,\mathrm{m^3}$ is underwater, then the volume to use is $0.003\,\mathrm{m^3}$.
:::

## Flotation and apparent weight

:::teorema{#galleggiamento titolo="Equilibrium of a floating body"}
For a body floating at rest under the action of its weight and the buoyant force of the liquid alone,
$$
F_A=mg,
\qquad V_{\mathrm{imm}}=\frac{m}{\rho_f}.
$$
The buoyant force of the air is neglected. For a homogeneous body of density $\rho_c$ and total volume $V$, the mass is $m=\rho_c V$, so
$$
\frac{V_{\mathrm{imm}}}{V}=\frac{\rho_c}{\rho_f}.
$$
A body with a density of $600\,\mathrm{kg/m^3}$ floats in water of density $1000\,\mathrm{kg/m^3}$ with $60\%$ of its volume submerged. If the body is denser than the liquid, its weight exceeds the buoyant force even when it is fully submerged, so the body sinks if unsupported. If the densities are equal, the body can remain in equilibrium while fully submerged.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,2.2 0,2.2;1.2,1.4 2.8,1.4 2.8,2.8 1.2,2.8" linee="0,3 0,0 4,0 4,3;0,2.2 1.2,2.2;2.8,2.2 4,2.2" vettori="2,2.1,2,3.4,Fₐ;2,2.1,2,0.8,P" xmin=-0.5 xmax=4.5 ymin=-0.4 ymax=4 titolo="For a floating body in equilibrium, weight and buoyant force are equal in magnitude and opposite in direction. The diagram is qualitative."}
:::

:::definizione{#peso-apparente titolo="Apparent weight"}
Three forces act on a body denser than the liquid when it hangs at rest from a spring scale, fully submerged and clear of the bottom. Its weight acts downward. The tension $T$ in the support and the buoyant force act upward. Equilibrium therefore gives
$$
T+F_A=mg,
\qquad T=mg-F_A.
$$
The spring scale reading, called the **apparent weight**, equals $T$. The mass and the gravitational force remain the same, while the support needs to exert less force.

If the weight is $50\,\mathrm{N}$ and the buoyant force is $20\,\mathrm{N}$, the spring scale reads $30\,\mathrm{N}$. The buoyant force equals the difference between the scale reading in air, neglecting the buoyant force of the air, and the reading in the liquid.
:::
