---
titolo: Fluids at rest
sommario: Hydrostatic pressure, manometers, hydraulic presses and buoyancy.
---

## Pressure and density

:::definizione{#pressione titolo="Force distributed over a surface"}
In a fluid at rest, contact forces act perpendicular to surfaces. **Pressure** is normal force magnitude per unit area. For uniform pressure across a flat area, $p=\dfrac{F_\perp}{A}$, measured in pascals, with $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. If pressure varies across the surface, $F_\perp/A$ is an average. Add contributions from small portions using each local pressure to find the total force. On a vertical flat area in a homogeneous liquid pressure depends linearly on height. The mean is then the pressure at the height of the area's centroid, although the force can act lower down.

Pressure is a scalar. At a point in a stationary fluid it has the same value for any orientation of the small face used to measure it, while the force on that face acts normal to it. **Density** $\rho=m/V$ is mass per unit volume. Fluids with the same local pressure can have different densities and hence different hydrostatic gradients.
:::

:::esempio{titolo="Converting a surface area"}
A $120\,\mathrm N$ force acts normally and uniformly over $30\,\mathrm{cm^2}$. Since $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$, this is an area of $0.003\,\mathrm{m^2}$ and the pressure is $4\cdot10^4\,\mathrm{Pa}$. With the same force, halving the area doubles pressure. Square the centimetre-to-metre factor when converting area.
:::

## Hydrostatic pressure

:::teorema{#stevino titolo="Pressure and depth"}
In a stationary liquid of constant density $\rho$ under uniform gravity, choose the height $z$ increasing upwards. Balance a column of area $A$ between $z_1$ and $z_2>z_1$. Upward force due to pressure at the bottom balances pressure at the top and weight. Thus
$$
(p_1-p_2)A=\rho A(z_2-z_1)g,
\qquad p_1-p_2=\rho g(z_2-z_1).
$$
With surface pressure $p_0$, at depth $h$ positive downwards one has $p=p_0+\rho gh$. The increase per metre is $\rho g$, with units of $\mathrm{Pa/m}$. Two points at equal height in the same connected stationary liquid have equal pressure. Vessel shape can change the amount of liquid but the pressure difference at a given height follows from the local balance.

For several layers, follow a vertical path and add $\rho_jgh_j$ for the thickness traversed downwards in layer $j$. Pressure is continuous at a boundary between stationary immiscible liquids if surface tension effects are neglected. A pressure-versus-depth graph then contains linear segments with different slopes.
:::

:::esempio{titolo="Gauge pressure through two layers"}
A $0.50\,\mathrm m$ layer of oil of density $800\,\mathrm{kg/m^3}$ lies above $1\,\mathrm m$ of water of density $1000\,\mathrm{kg/m^3}$. With $g=10\,\mathrm{m/s^2}$, gauge pressure at the bottom of the oil is $4000\,\mathrm{Pa}$. Water adds $10000\,\mathrm{Pa}$ to give $14000\,\mathrm{Pa}$. Water gives a higher pressure rise per unit depth because its density is larger.

::grafico{linee="0,0 .5,4 1.5,14" punti="0,0,pieno;.5,4,pieno;1.5,14,pieno" xmin=0 xmax=1.8 ymin=0 ymax=16 nomi="h (m),p_gauge (kPa)" titolo="The slope increases at the oil–water boundary"}
:::

## Absolute pressure and manometers

:::osservazione{#manometri titolo="Comparing pressures"}
**Absolute pressure** is referenced to vacuum. Gauge or relative pressure is $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}$, where $p_{\mathrm{atm}}$ is local atmospheric pressure. A zero gauge reading means the pressures inside and outside agree. A negative reading is possible when internal pressure is below atmospheric pressure. For the net force on a wall with fluid on both sides, use the pressure difference and the corresponding surface normals.

In a U-tube manometer filled with a homogeneous liquid, points at the same height in the same connected liquid have equal pressure. If the weight of gas above both surfaces is negligible, descending $\Delta h$ from the higher surface raises pressure by $\rho g\Delta h$. This matches the imposed pressure on the lower surface. The arm with lower liquid level is therefore connected to the greater pressure.
:::

:::esempio{titolo="A water manometer"}
The right liquid level is $0.20\,\mathrm m$ above the level in the left arm. With water of density $1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{m/s^2}$, the left gas pressure exceeds the right one by $2000\,\mathrm{Pa}$. If the right gas is at atmospheric pressure, the left gauge pressure is $+2\,\mathrm{kPa}$.

::grafico{assi=0 linee="0,.7 0,0 1,0 1,.7;.2,.7 .2,.2 .8,.2 .8,.7;0,.3 .2,.3;.8,.5 1,.5;.2,.3 .8,.3" vettori=".1,.65,.1,.34,p_L;.9,.65,.9,.52,p_R" xmin=-.3 xmax=1.4 ymin=-.1 ymax=.85 titolo="The lower liquid level is in the left arm"}
:::

## Pascal's principle

:::teorema{#pascal titolo="Transmitting a pressure change"}
A pressure change imposed at the boundary of a confined liquid is transmitted throughout the stationary fluid when density and heights stay fixed. Absolute pressures at different points can still differ through hydrostatic effects. For an ideal hydraulic press with pistons at the same height, negligible piston masses and friction, and equal outside air pressures, the gauge pressures match:
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Here $F_j$ is the effective external load balancing the excess pressure force on piston $j$. The force gain at the larger piston is accompanied by a shorter travel. Incompressible-liquid volume conservation gives $A_1s_1=A_2s_2$ with opposite physical directions of motion for the two displacements. Therefore $F_1s_1=F_2s_2$ for work magnitudes if there are no losses.

If piston heights differ, include a hydrostatic pressure difference. If the air pressures outside differ, subtract each separately from its internal pressure to get the effective force. An area ratio does not multiply energy.
:::

:::esempio{titolo="Available force and displacement"}
The larger area is five times the smaller. An $80\,\mathrm N$ push on the small piston balances $400\,\mathrm N$ on the large one. A $10\,\mathrm{cm}$ travel of the small piston gives $2\,\mathrm{cm}$ of travel at the large one. Converting both distances to metres gives $8\,\mathrm J$ for each force–distance product.
:::

## Archimedes' principle

:::teorema{#archimede titolo="Fluid buoyancy"}
An object immersed in a stationary fluid experiences an upward **buoyant force** equal to the weight of displaced fluid. At constant density, $F_A=\rho_f gV_{\mathrm{imm}}$. Think of temporarily replacing the object with fluid occupying exactly the same space. External pressures on that volume would balance its weight. Putting the object back makes those pressures exert the same net force. For an immersed prism, the pressure difference between horizontal faces is $\rho_f gh$. Multiply by the area to obtain $\rho_f gAh$, the displaced fluid weight.

If a stationary object hangs from a taut line above it and weight and buoyancy are the only other vertical forces, $T=mg-F_A$. A negative tension would show that a line from above cannot hold the object as assumed. Holding it fully immersed when buoyancy exceeds weight can require a downward force. If the object accelerates, the signed sum of vertical forces equals $ma$.
:::

:::esempio{titolo="Apparent weight of a block"}
A $4\,\mathrm{kg}$ block of volume $10^{-3}\,\mathrm{m^3}$ hangs fully submerged in water. With $g=10\,\mathrm{m/s^2}$, its weight is $40\,\mathrm N$ and buoyancy is $10\,\mathrm N$. The spring scale reads $30\,\mathrm N$. The volume and gravitational weight of the block stay the same before and after immersion.

::grafico{assi=0 poligoni="-.75,-.6 .75,-.6 .75,.6 -.75,.6" linee="-2,1 2,1;0,.6 0,2.6" vettori="-.35,0,-.35,.5,F_A;0,0,0,-2,P;.37,0,.37,1.5,T" xmin=-2 xmax=2 ymin=-2.5 ymax=2.8 titolo="Upward buoyancy and tension balance downward weight"}
:::

## Floating

:::teorema{#galleggiamento titolo="Submerged fraction"}
For a body floating freely at equilibrium under weight and buoyancy alone, $\rho_f gV_{\mathrm{imm}}=mg$. Write mass as mean density times exterior volume to find
$$
\frac{V_{\mathrm{imm}}}{V_{\mathrm{tot}}}=\frac{\rho_c}{\rho_f}.
$$
A fraction below one permits some of the volume to emerge. A fraction of one describes completely submerged equilibrium in the ideal model. If the ratio exceeds one, even complete immersion cannot displace enough fluid to support the body.

For a hollow object, use total mass and the exterior volume that actually excludes liquid. Extra load increases the required displacement volume. Vertical force balance determines the depth at equilibrium. To decide whether a small tilt is corrected, examine changes in the centre of buoyancy and the torques.
:::

:::esempio{titolo="Additional immersion under load"}
A platform floats in water with constant horizontal area $0.50\,\mathrm{m^2}$. Adding a $25\,\mathrm{kg}$ load requires another $0.025\,\mathrm{m^3}$ of displaced water. Dividing by the area gives an additional immersion of $0.050\,\mathrm m$. This assumes its upper edge stays above water.
:::
