---
titolo: Fluids at rest
sommario: Hydrostatic pressure, manometers, hydraulic presses and buoyancy.
---

## Pressure and density

:::definizione{#pressione titolo="Force distributed over a surface"}
In a fluid at rest, contact forces act perpendicular to surfaces. On a small face, **pressure** is normal force per unit area. If it is uniform over a flat area, $p=\dfrac{F_\perp}{A}$, measured in pascals, with $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. If pressure varies across the surface, $F_\perp/A$ is an average. Add contributions from small portions using each local pressure to find the total force. On a vertical flat area in a homogeneous liquid pressure depends linearly on height. The mean is then the pressure at the height of the area's centroid, although the force can act lower down.

Pressure is a scalar. At a point in a stationary fluid it has the same value for any orientation of the small face used to measure it, while the force on that face acts normal to it. **Density** $\rho=m/V$ is mass per unit volume. Fluids with the same local pressure can have different densities and hence different hydrostatic gradients.
:::

:::esempio{titolo="Converting a surface area"}
A $120\,\mathrm N$ force acts normally and uniformly over $30\,\mathrm{cm^2}$. Since $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$, this is an area of $0.003\,\mathrm{m^2}$ and the pressure is $4\cdot10^4\,\mathrm{Pa}$. With the same force, halving the area doubles pressure. Square the centimetre-to-metre factor when converting area.
:::

:::esempio{#risultante-parete titolo="Resultant force and torque on a gate"}
A rectangular gate of width $b$ extends from the free surface down to depth $H$. Outside air is at the same atmospheric pressure as the free surface. The pressure difference forms a triangle from $0$ to $\rho gH$. Its average is $\dfrac{\rho gH}{2}$, so the resultant has magnitude $F=\dfrac{\rho gbH^2}{2}$.

To find the torque about the upper edge, also find the depth where the resultant acts. The lower strips experience greater forces. The centroid of the pressure triangle lies $\dfrac{2H}{3}$ below the upper edge. The two results serve different purposes: $\dfrac{H}{2}$ gives the mean pressure, while $\dfrac{2H}{3}$ is the lever arm of the resultant about the upper edge.

::grafico{assi=0 linee="0,0 0,-3;0,0 1.8,0" poligoni="0,0 1.8,-3 0,-3" vettori=".36,-.6,0,-.6;.72,-1.2,0,-1.2;1.08,-1.8,0,-1.8;1.44,-2.4,0,-2.4" segmenti="-.57,-1.5,.9,-1.5;-.57,-2,1.2,-2" punti="0,-2,pieno" etichette="-1.05,-1.38,H/2;-1.05,-1.94,2H/3;.54,-3.22,ρgH" xmin=-1.65 xmax=2.1 ymin=-3.55 ymax=.45 titolo="The triangular pressure distribution increases with depth. The dot marks the depth where the resultant acts."}
:::

## Hydrostatic pressure

:::teorema{#stevino titolo="Pressure and depth"}
In a stationary liquid of constant density $\rho$ under uniform gravity, choose the height $z$ increasing upwards. For a column of area $A$ between $z_1$ and $z_2>z_1$ to be in equilibrium, the upward pressure force at the bottom balances the weight and the pressure force at the top, both directed downwards. Thus
$$
(p_1-p_2)A=\rho A(z_2-z_1)g,
\qquad p_1-p_2=\rho g(z_2-z_1).
$$
With surface pressure $p_0$, at depth $h$ positive downwards one has $p=p_0+\rho gh$. The increase per metre is $\rho g$, with units of $\mathrm{Pa/m}$. Two points at equal height in the same connected stationary liquid have equal pressure. Vessel shape can change the amount of liquid but the pressure difference at a given height follows from the local balance.

For several layers, follow a vertical path and add $\rho_j g h_j$ for the thickness traversed downwards in layer $j$. Pressure is continuous at a boundary between stationary immiscible liquids if surface tension effects are neglected. A pressure-versus-depth graph then contains linear segments with different slopes.
:::

:::esempio{titolo="Gauge pressure through two layers"}
A $0.50\,\mathrm m$ layer of oil of density $800\,\mathrm{kg/m^3}$ lies above $1\,\mathrm m$ of water of density $1000\,\mathrm{kg/m^3}$. With $g=10\,\mathrm{m/s^2}$, gauge pressure at the bottom of the oil is $4000\,\mathrm{Pa}$. Water adds $10000\,\mathrm{Pa}$ to give $14000\,\mathrm{Pa}$. Water gives a higher pressure rise per unit depth because its density is larger.

::grafico{linee="0,0 .5,4 1.5,14" punti="0,0,pieno;.5,4,pieno;1.5,14,pieno" xmin=0 xmax=1.8 ymin=0 ymax=16 nomi="h (m),Δp (kPa)" titolo="The slope increases at the oil–water boundary"}
:::

:::osservazione{#quota-colonna titolo="Tracking pressure along a path"}
With $h$ increasing downwards, add $\rho g\Delta h$ when moving down and subtract it when moving up. A horizontal segment contributes zero within the same liquid. The path between points A and B in the water can descend, cross the tube and rise by the same height. The vertical contributions cancel. Points C and D are at the same height in different liquids. To compare them, start at the common pressure at the interface and rise by the same distance in water and in oil. Pressure drops more in the denser water, so pressure at C in the oil is greater than at D in the water.

::grafico{assi=0 linee="0,2.8 0,0 3.8,0 3.8,2.8;1.3,2.8 1.3,.6 2.5,.6 2.5,2.8;0,2.4 1.3,2.4;2.5,2.67 3.8,2.67;2.5,1.32 3.8,1.32" segmenti=".62,1.06,.62,.32;.62,.32,3.12,.32;3.12,.32,3.12,1.06" punti=".62,1.06,pieno,A;3.12,1.06,pieno,B;.62,1.69,pieno,D;3.12,1.69,pieno,C" etichette=".3,2.09,water;2.78,1.91,oil" xmin=-.3 xmax=4.09 ymin=-.13 ymax=2.92 titolo="A and B are at the same height in water. To compare C and D, cross the water–oil interface."}
:::

## Absolute pressure and manometers

:::osservazione{#manometri titolo="Comparing pressures"}
**Absolute pressure** is referenced to vacuum. Gauge or relative pressure is $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}$, where $p_{\mathrm{atm}}$ is local atmospheric pressure. A zero gauge reading means the pressures inside and outside agree. A negative reading is possible when internal pressure is below atmospheric pressure. For the net force on a wall with fluid on both sides, use the pressure difference and the corresponding surface normals.

In a U-tube manometer filled with a homogeneous liquid, points at the same height in the same connected liquid have equal pressure. If the weight of gas above both surfaces is negligible, descending $\Delta h$ from the higher surface raises pressure by $\rho g\Delta h$. This matches the imposed pressure on the lower surface. The arm with lower liquid level is therefore connected to the greater pressure.
:::

:::esempio{titolo="A water manometer"}
The right liquid level is $0.20\,\mathrm m$ above the level in the left arm. With water of density $1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{m/s^2}$, the left gas pressure exceeds the right one by $2000\,\mathrm{Pa}$. If the right gas is at atmospheric pressure, the left gauge pressure is $+2\,\mathrm{kPa}$.

::grafico{assi=0 linee="0,.7 0,0 1,0 1,.7;.2,.7 .2,.2 .8,.2 .8,.7;0,.3 .2,.3;.8,.5 1,.5" segmenti=".2,.3,.8,.3" vettori=".1,.65,.1,.34,p_L;.9,.65,.9,.52,p_R" xmin=-.3 xmax=1.4 ymin=-.1 ymax=.85 titolo="The lower liquid level is in the left arm"}
:::

:::esempio{#riferimento-pressione titolo="Changing the reference and finding the force"}
With atmospheric pressure of $100\,\mathrm{kPa}$, adding this same value to each gauge reading gives the corresponding absolute pressure.

| Location | Gauge (kPa) | Absolute (kPa) |
| --- | ---: | ---: |
| Atmosphere | $0$ | $100$ |
| Pressurised chamber | $+12$ | $112$ |
| Partially evacuated chamber | $-18$ | $82$ |

On the evacuated chamber's lid, an outside pressure of $100\,\mathrm{kPa}$ and an inside pressure of $82\,\mathrm{kPa}$ give an outward pressure difference of $-18\,\mathrm{kPa}$. Over $0.20\,\mathrm{m^2}$ this produces a resultant of $3600\,\mathrm N$ into the chamber. The sign comes from the pressure difference, while both absolute pressures are positive.

::grafico{assi=0 linee="-.55,-1.2 0,-1.2 0,1.2 -.55,1.2" poligoni="0,-1.2 .21,-1.2 .21,1.2 0,1.2" vettori="-1.21,.38,0,.38;1.68561,.38,.21,.38" etichette="-1.19,.7,82 kPa;.78,.7,100 kPa;-1.15,-.86,inside;.71,-.86,outside" xmin=-1.71 xmax=2.08 ymin=-1.49 ymax=1.42 titolo="The outside pressure exerts the greater force. The resultant of the two pressure forces points into the chamber."}
:::

:::esempio{#manometro-due-liquidi titolo="A manometer with two liquids"}
An oil column $0.30\,\mathrm m$ high and of density $800\,\mathrm{kg/m^3}$ presses on the water in the left arm. Both free surfaces are open to the atmosphere. Moving down from the oil surface to interface I raises the pressure by $2.4\,\mathrm{kPa}$ with $g=10\,\mathrm{m/s^2}$. At the same height, water in the right arm must be at the same pressure as I. Its surface D is therefore $0.24\,\mathrm m$ above I and $0.06\,\mathrm m$ below the free surface of the oil. Equal surface pressures can produce different levels if the liquids differ.

::grafico{assi=0 linee="0,.76 0,0 1,0 1,.76;.22,.76 .22,.23 .78,.23 .78,.76;0,.40 .22,.40;0,.70 .22,.70;.78,.64 1,.64" segmenti=".11,.40,.89,.40;.89,.4,.89,.64" punti=".11,.40,pieno,I;.89,.64,pieno,D" etichette=".03,.58,oil;.49,.29,water" xmin=-.26 xmax=1.25 ymin=-.045 ymax=.87 titolo="The horizontal dashed line starts at interface I. Both free surfaces are at atmospheric pressure."}
:::

## Pascal's principle

:::teorema{#pascal titolo="Transmitting a pressure change"}
A pressure change imposed at the boundary of a confined liquid is transmitted throughout the stationary fluid when density and heights stay fixed. Absolute pressures at different points can still differ through hydrostatic effects. For an ideal hydraulic press with pistons at the same height, negligible piston masses and friction, and equal outside air pressures, the gauge pressures match:
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Here $F_j$ is the effective external load balancing the excess pressure force on piston $j$. The force gain at the larger piston is accompanied by a shorter travel. For small displacements in an incompressible liquid, $A_1s_1=A_2s_2$ with displacements $s_1$ and $s_2$ in opposite physical directions. Therefore $F_1s_1=F_2s_2$ for work magnitudes if losses and changes of height are negligible.

If piston heights differ, include a hydrostatic pressure difference. If the external pressures differ, calculate the difference between the internal pressure $p_{\mathrm{int},j}$ and the external pressure $p_{\mathrm{ext},j}$ for each piston. Multiplying by the area gives the effective load $F_j=A_j(p_{\mathrm{int},j}-p_{\mathrm{ext},j})$, with the direction towards the liquid taken as positive. An area ratio does not multiply energy.
:::

:::esempio{titolo="Available force and displacement"}
The larger area is five times the smaller. An $80\,\mathrm N$ push on the small piston balances $400\,\mathrm N$ on the large one. A $10\,\mathrm{cm}$ travel of the small piston gives $2\,\mathrm{cm}$ of travel at the large one. Converting both distances to metres gives $8\,\mathrm J$ for each force–distance product.
:::

:::esempio{#pistoni-quote-diverse titolo="Applying and supporting loads at different heights"}
In the liquid of a hydraulic press, if the large piston is higher by $\Delta z$, the internal pressure there is lower by $\rho g\Delta z$. For example, with oil of density $800\,\mathrm{kg/m^3}$, $g=10\,\mathrm{m/s^2}$ and $\Delta z=1.0\,\mathrm m$, a gauge pressure of $26\,\mathrm{kPa}$ under the lower piston becomes $18\,\mathrm{kPa}$ under the higher one. With equal air pressures above the pistons, the load on $0.030\,\mathrm{m^2}$ is therefore $540\,\mathrm N$. Comparing the piston work at different heights requires the change in potential energy of liquid transferred between the arms.

::grafico{assi=0 linee="0,1.1 0,-.65 4,-.65 4,2.05;.7,1.1 .7,-.18 2.12,-.18 2.12,2.05;0,.58 .7,.58;2.12,1.58 4,1.58" segmenti=".7,.58,2.12,.58;1.73,.58,1.73,1.58;1.73,1.58,2.12,1.58" vettori=".35,1.27,.35,.66,F₁;3.06,2.42,3.06,1.66,F₂" etichette="1.22,1.16,Δz;.03,.1,A₁;2.26,.96,A₂" xmin=-.35 xmax=4.3 ymin=-.78 ymax=2.62 titolo="The height of the upper piston causes a hydrostatic pressure drop between A₁ and A₂."}
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

:::osservazione{#spinta-stratificata titolo="Which fluid is displaced"}
An object crossing an interface displaces a different volume in each liquid. Let $V_o$ be the volume in oil and $V_a$ the volume in water. Then $F_A=g(\rho_oV_o+\rho_aV_a)$. An effective density would weight each liquid according to its displaced volume. This model requires fluid pressure around the object. If an object seals against the bottom, fluid cannot get beneath the supporting face and the upward force on that face is absent.

::grafico{assi=0 poligoni="-.63,-1.2 .63,-1.2 .63,.82 -.63,.82" linee="-2,1.25 2,1.25;-2,0 -.63,0;.63,0 2,0" segmenti="-.63,0,.63,0" etichette="-1.65,.69,oil;-1.65,-.67,water;-.14,.43,Vₒ;-.14,-.62,Vₐ" xmin=-2.22 xmax=2.22 ymin=-1.46 ymax=1.62 titolo="The object displaces oil above the interface and water below. Buoyancy equals the weight of the two displaced volumes."}
:::

:::osservazione{#recipiente-sulla-bilancia titolo="What the scale beneath a tank measures"}
A tank rests on a scale while an object is lowered into it from a separate support. The liquid pushes upwards on the object. By Newton's third law, the object pushes downwards on the liquid with the same force. The scale reading increases by $F_A$ if no liquid overflows and the object touches no part of the tank. The spring scale above the object reads $F_A$ less than it did in air if air buoyancy is neglected.

::grafico{assi=0 linee="-1.7,1.32 -1.7,-1.06 1.7,-1.06 1.7,1.32;-1.7,.83 1.7,.83;0,.38 0,1.72;-.79,1.72 .79,1.72" poligoni="-.43,-.46 .43,-.46 .43,.38 -.43,.38;-1.32,-1.4 1.32,-1.4 1.32,-1.06 -1.32,-1.06" vettori="-.25,-.27,-.25,.46,F_A;.83,-.2,.83,-.93,F_A" etichette="-1.13,-1.23,scale" xmin=-1.9 xmax=1.93 ymin=-1.62 ymax=1.89 titolo="The line has a separate support. The downward arrow represents the force the object exerts on the water."}
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

:::osservazione{#momento-raddrizzante titolo="Buoyancy and weight after a small tilt"}
Weight acts vertically through the centre of mass G. In a uniform liquid, buoyancy acts through the geometric centroid B of the displaced volume. When the vessel tilts, the immersed part changes shape and B moves. In the diagram, buoyancy lies to the right of G, so the couple turns the vessel anticlockwise and opposes the tilt shown. If a change in load shifts G so that the torque increases the tilt, the equilibrium is unstable.

::grafico{assi=0 uguale=1 poligoni="-1.4,.60 1.36,.03 1.09,-.62 -.54,-.29" linee="-2.03,-.14 -.684944,-.14;1.289385,-.14 1.98,-.14" vettori=".05,.19,.05,-.88,P;.46,-.308593,.46,.761407,F_A" punti=".05,.19,pieno,G;.46,-.308593,pieno,B" xmin=-2.08 xmax=2.13 ymin=-1.02 ymax=1.03 titolo="Equal buoyancy and weight act along different vertical lines. Their positions determine the direction of the couple."}
:::
