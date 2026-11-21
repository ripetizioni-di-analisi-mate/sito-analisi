---
titolo: Fluids at rest
sommario: Hydrostatic pressure, manometers, hydraulic presses and buoyancy.
---

## Pressure and density

:::definizione{#pressione titolo="Force distributed over a surface"}
A **fluid** is a liquid or a gas: a substance that flows and takes the shape of its container. A fluid at rest pushes on the surfaces it touches with forces perpendicular to them. The **pressure** on a small face is the perpendicular force acting on each square metre of the face. If the pressure is uniform (equal at every point of a flat surface), then
$$
p=\frac{F_\perp}{A},
$$
where $A$ is the area and $F_\perp$ (read "F perpendicular") is the component of the force perpendicular to the surface. If the force $F$ makes an angle $\theta$ with the perpendicular, then $F_\perp=F\cos\theta$. The unit is the **pascal**, $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$; also $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$.

If the pressure varies from point to point, the ratio $\dfrac{F_\perp}{A}$ is the **average pressure**, the uniform pressure that would give the same total force. In this case the total force is found by dividing the surface into small portions, multiplying the area of each by the pressure there and adding the results. A liquid is **homogeneous** if every cubic metre of it has the same mass, that is, the same density, at every point. On a flat vertical surface immersed in a homogeneous liquid, pressure varies linearly with height: it increases by the same amount for each centimetre of descent. The average pressure is then the pressure at the height of the geometric centroid (centre) of the area. The point where the resultant (the total force) acts can instead lie lower down (gate example).

Pressure is a **scalar**, a quantity described by a number with its unit, with no direction. At a point in a stationary fluid it has the same value whatever the orientation of the small face used to measure it, while the force on that face is perpendicular to it. **Density** is the mass contained in each cubic metre:
$$
\rho=\frac{m}{V},
$$
where $\rho$ is the Greek letter *rho*; it is measured in $\mathrm{kg/m^3}$. Water has a density of about $1000\,\mathrm{kg/m^3}$. One litre is $1\,\mathrm L=10^{-3}\,\mathrm{m^3}$. The **hydrostatic gradient** is the pressure increase for each metre of descent; the hydrostatic pressure law shows that it equals $\rho g$. Two fluids with the same pressure at a point can have different densities and hence different hydrostatic gradients.
:::

:::esempio{titolo="Converting a surface area"}
A $120\,\mathrm N$ force acts perpendicularly and uniformly over $30\,\mathrm{cm^2}$. Since $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, one square centimetre is $10^{-2}\cdot10^{-2}\,\mathrm{m^2}=10^{-4}\,\mathrm{m^2}$. The area is therefore $30\cdot10^{-4}\,\mathrm{m^2}=0.003\,\mathrm{m^2}$ and the pressure is
$$
p=\frac{120}{0.003}\,\mathrm{Pa}=4\cdot10^4\,\mathrm{Pa}.
$$
With the same force, half this area gives double the pressure. When converting areas, the centimetre-to-metre factor is therefore squared.
:::

:::esempio{#risultante-parete titolo="Resultant force and torque on a gate"}
A **gate** is a flat wall, often movable, that closes a tank or a channel. A vertical rectangular gate of width $b$ extends from the free surface (the water surface in contact with the air) down to depth $H$. On the other side there is air at the same atmospheric pressure that acts on the water surface. Atmospheric pressure therefore pushes on both sides and the two forces cancel. What remains is the pressure difference due to the water, which by the hydrostatic pressure law (next section) equals $\rho gh$ at depth $h$. This difference is $0$ at the upper edge and $\rho gH$ at the lower edge and increases linearly, so its graph along the gate is a triangle. Hence the average is half the sum of the two end values:
$$
\overline{\Delta p}=\frac{0+\rho gH}{2}=\frac{\rho gH}{2}.
$$
The resultant is obtained by multiplying the average pressure by the area $bH$:
$$
F=\frac{\rho gH}{2}\cdot bH=\frac{\rho gbH^2}{2}.
$$

The **torque** (moment) of a force about a point is the product of the force and the lever arm, the distance between the point and the line along which the force acts. To find the torque about the upper edge, the depth of the point where the resultant acts is also needed. The lower horizontal strips receive greater forces, so this point lies below the middle of the gate. The resultant acts at the depth of the centroid of the pressure triangle, which lies $\dfrac{2H}{3}$ below the upper edge. The torque about the upper edge is therefore
$$
M=F\cdot\frac{2H}{3}=\frac{\rho gbH^3}{3}.
$$
The two results serve different purposes: $\dfrac{H}{2}$ is the depth at which the pressure equals the average, while $\dfrac{2H}{3}$ is the lever arm of the resultant about the upper edge.

::grafico{assi=0 linee="0,0 0,-3;0,0 1.8,0" poligoni="0,0 1.8,-3 0,-3" vettori=".36,-.6,0,-.6;.72,-1.2,0,-1.2;1.08,-1.8,0,-1.8;1.44,-2.4,0,-2.4" segmenti="-.57,-1.5,.9,-1.5;-.57,-2,1.2,-2" punti="0,-2,pieno" etichette="-1.05,-1.38,H/2;-1.05,-1.94,2H/3;.54,-3.22,ρgH" xmin=-1.65 xmax=2.1 ymin=-3.55 ymax=.45 titolo="The triangular pressure distribution increases with depth. The dot marks the depth where the resultant acts."}
:::

## Hydrostatic pressure

:::teorema{#stevino titolo="Pressure and depth"}
A stationary liquid has constant density $\rho$ and is in **uniform gravity**, with the same gravitational acceleration $g$ at every point. The **height** $z$ of a point is measured upwards from a chosen level. Consider a column of liquid, an imaginary vertical cylinder with horizontal bases of area $A$, between heights $z_1$ and $z_2>z_1$. Three vertical forces act on the column:
- the pressure force on the base, $p_1A$, directed upwards;
- the pressure force on the top, $p_2A$, directed downwards;
- the weight of the liquid, directed downwards, equal to $mg=\rho Vg=\rho A(z_2-z_1)g$.

The column is at rest, so the upward force equals the sum of the two downward forces:
$$
p_1A=p_2A+\rho A(z_2-z_1)g.
$$
Subtracting $p_2A$ and then dividing by $A$ gives
$$
(p_1-p_2)A=\rho A(z_2-z_1)g,
\qquad p_1-p_2=\rho g(z_2-z_1).
$$
Let $p_0$ be the pressure at the surface of the liquid and $h$ the **depth**, that is, the distance of a point below the surface, positive downwards. Then the **hydrostatic pressure law** (Stevin's law) holds:
$$
p=p_0+\rho gh.
$$
The **gauge pressure** $\Delta p=p-p_0=\rho gh$ is the extra pressure relative to the surface (the Greek letter $\Delta$, *delta*, denotes a difference). The increase for each metre of descent is $\rho g$, with units of $\mathrm{Pa/m}$; for water with $g=10\,\mathrm{m/s^2}$ it is $1000\cdot10\,\mathrm{Pa/m}=10000\,\mathrm{Pa/m}$. A liquid is **connected** if any two points can be joined without leaving the liquid. Two points at the same height in the same stationary connected liquid have equal pressure. Vessel shape changes the amount of liquid, while by the column balance the pressure difference between two heights depends only on $\rho$, $g$ and the height difference. Therefore two vessels of different shapes, filled with the same liquid to the same height and open to the same air, have the same pressure at the bottom.

Two liquids are **immiscible** if they do not mix, like oil and water, and in a vessel they form layers one above the other. The layers are numbered with an index $j$ and one moves vertically downwards. For each layer crossed downwards one adds $\rho_j g h_j$, where $\rho_j$ and $h_j$ are the density and thickness of layer $j$. At the **interface**, the surface separating two stationary liquids, the pressure is the same on both sides. This holds if **surface tension**, the effect that makes the surface of a liquid behave like a stretched film, is neglected. The graph of pressure against depth then consists of straight segments; the **slope** of each segment, that is, the pressure increase per metre, is $\rho_j g$ and differs from one layer to another.
:::

:::esempio{titolo="Gauge pressure through two layers"}
A layer of oil $0.50\,\mathrm m$ thick, of density $800\,\mathrm{kg/m^3}$, lies above a layer of water $1\,\mathrm m$ thick, of density $1000\,\mathrm{kg/m^3}$. Take $g=10\,\mathrm{m/s^2}$. At the bottom of the oil the gauge pressure is
$$
800\cdot10\cdot0.50\,\mathrm{Pa}=4000\,\mathrm{Pa}.
$$
The water adds $1000\cdot10\cdot1\,\mathrm{Pa}=10000\,\mathrm{Pa}$, so at the bottom it reaches $4000\,\mathrm{Pa}+10000\,\mathrm{Pa}=14000\,\mathrm{Pa}$. Water gives a greater increase for each metre of depth, because its density is greater.

::grafico{linee="0,0 .5,4 1.5,14" punti="0,0,pieno;.5,4,pieno;1.5,14,pieno" xmin=0 xmax=1.8 ymin=0 ymax=16 nomi="h (m),Δp (kPa)" titolo="The slope increases at the oil–water boundary"}
:::

:::osservazione{#quota-colonna titolo="Tracking pressure along a path"}
To compare the pressures at two points, follow a path joining them inside the liquids, with $h$ increasing downwards. Along the path:
- on a downward segment of $\Delta h$ one adds $\rho g\Delta h$;
- on an upward segment of $\Delta h$ one subtracts $\rho g\Delta h$;
- a horizontal segment within the same liquid contributes zero.

In the diagram the left arm contains water and the right arm oil above water; the two arms are connected at the bottom. The path between points A and B, both in the water, descends some distance, crosses the horizontal tube and rises by the same height. The contributions of the descent and the rise are equal and opposite, so they cancel and A and B have the same pressure. Points C and D are instead at the same height but in different liquids, C in the oil and D in the water. To compare them, one starts from the water–oil interface in the right arm; at its height the water in the left arm has the same pressure, because the water is connected. From that height one rises the same distance in water, up to D, and in oil, up to C. The pressure drop is greater in water, because water is denser, so C in the oil has a greater pressure than D in the water.

::grafico{assi=0 linee="0,2.8 0,0 3.8,0 3.8,2.8;1.3,2.8 1.3,.6 2.5,.6 2.5,2.8;0,2.4 1.3,2.4;2.5,2.67 3.8,2.67;2.5,1.32 3.8,1.32" segmenti=".62,1.06,.62,.32;.62,.32,3.12,.32;3.12,.32,3.12,1.06" punti=".62,1.06,pieno,A;3.12,1.06,pieno,B;.62,1.69,pieno,D;3.12,1.69,pieno,C" etichette=".3,2.09,water;2.78,1.91,oil" xmin=-.3 xmax=4.09 ymin=-.13 ymax=2.92 titolo="A and B are at the same height in water. To compare C and D, cross the water–oil interface."}
:::

## Absolute pressure and manometers

:::osservazione{#manometri titolo="Comparing pressures"}
**Absolute pressure** $p_{\mathrm{ass}}$ is measured from vacuum, where the pressure is zero; for this reason it is always positive. **Relative pressure**, also called **gauge pressure**, is the difference between the absolute pressure and the local atmospheric pressure $p_{\mathrm{atm}}$:
$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}.
$$
A zero gauge reading means that the pressure is the same inside and outside. A negative reading means that the internal pressure is below atmospheric pressure. A wall with fluid on both sides receives two opposite forces, each perpendicular to the wall; the resultant is calculated by multiplying the area by the difference between the two pressures.

A **U-tube manometer** is a tube bent into a U that contains a liquid, with each arm connected to a gas. If the liquid is homogeneous, two points at the same height in the same connected liquid have equal pressure. The weight of the gas above the two surfaces is neglected. Descending $\Delta h$ from the higher surface to the height of the lower surface, the pressure increases by $\rho g\Delta h$. At that height the liquid in the two arms has the same pressure, which in the lower arm is the pressure of the gas pressing on its surface. Therefore the pressure on the lower surface exceeds that on the higher surface by $\rho g\Delta h$. The arm with the lower liquid level is thus connected to the greater pressure. With the same pressure on both arms the surfaces are at the same height.
:::

:::esempio{titolo="A water manometer"}
In the manometer in the diagram the subscripts $L$ and $R$ denote the left arm and the right arm. The liquid level in the right arm is $0.20\,\mathrm m$ higher than in the left arm. The manometer contains water of density $1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{m/s^2}$. The pressure difference is
$$
p_L-p_R=\rho g\Delta h=1000\cdot10\cdot0.20\,\mathrm{Pa}=2000\,\mathrm{Pa},
$$
so the gas pressure on the left exceeds that on the right by $2000\,\mathrm{Pa}$. If the right arm is open to the atmosphere, the gauge pressure on the left is $+2\,\mathrm{kPa}$.

::grafico{assi=0 linee="0,.7 0,0 1,0 1,.7;.2,.7 .2,.2 .8,.2 .8,.7;0,.3 .2,.3;.8,.5 1,.5" segmenti=".2,.3,.8,.3" vettori=".1,.65,.1,.34,p_L;.9,.65,.9,.52,p_R" xmin=-.3 xmax=1.4 ymin=-.1 ymax=.85 titolo="The lower liquid level is in the left arm"}
:::

:::esempio{#riferimento-pressione titolo="Changing the reference and finding the force"}
The atmosphere is at $100\,\mathrm{kPa}$. Adding $100\,\mathrm{kPa}$ to each gauge reading gives the corresponding absolute pressure.

| Location | Gauge (kPa) | Absolute (kPa) |
| --- | ---: | ---: |
| Atmosphere | $0$ | $100$ |
| Pressurised chamber | $+12$ | $112$ |
| Partially evacuated chamber | $-18$ | $82$ |

A chamber is **partially evacuated** when its pressure is below atmospheric pressure. The lid of this chamber is pressed by the outside air at $100\,\mathrm{kPa}$ and by the gas inside at $82\,\mathrm{kPa}$. The direction from inside to outside is taken as positive. The difference between inside and outside pressure is
$$
p_{\mathrm{int}}-p_{\mathrm{est}}=(82-100)\,\mathrm{kPa}=-18\,\mathrm{kPa},
$$
that is, the gauge reading. On a lid of $0.20\,\mathrm{m^2}$ the resultant is $-18000\cdot0.20\,\mathrm N=-3600\,\mathrm N$; the minus sign shows that the $3600\,\mathrm N$ force points into the chamber. Both absolute pressures are positive; the negative sign comes from their difference.

::grafico{assi=0 linee="-.55,-1.2 0,-1.2 0,1.2 -.55,1.2" poligoni="0,-1.2 .21,-1.2 .21,1.2 0,1.2" vettori="-1.21,.38,0,.38;1.68561,.38,.21,.38" etichette="-1.19,.7,82 kPa;.78,.7,100 kPa;-1.15,-.86,inside;.71,-.86,outside" xmin=-1.71 xmax=2.08 ymin=-1.49 ymax=1.42 titolo="The outside pressure exerts the greater force. The resultant of the two pressure forces points into the chamber."}
:::

:::esempio{#manometro-due-liquidi titolo="A manometer with two liquids"}
In the left arm of a U-tube an oil column $0.30\,\mathrm m$ high, of density $800\,\mathrm{kg/m^3}$, lies above the water. The right arm contains only water. Both free surfaces are open to the atmosphere and $g=10\,\mathrm{m/s^2}$. Starting from the oil surface and moving down to the oil–water interface I, the pressure increases by
$$
800\cdot10\cdot0.30\,\mathrm{Pa}=2400\,\mathrm{Pa}=2.4\,\mathrm{kPa}.
$$
At the height of I, the water in the right arm has the same pressure as I, because the water is connected. Above that point there must therefore be a water column producing the same $2400\,\mathrm{Pa}$, that is, of height
$$
\frac{2400}{1000\cdot10}\,\mathrm m=0.24\,\mathrm m.
$$
The water surface D is therefore $0.24\,\mathrm m$ above I, that is, $0.30\,\mathrm m-0.24\,\mathrm m=0.06\,\mathrm m$ below the free surface of the oil. The two free surfaces are at the same pressure and at different heights, because the two liquids have different densities.

::grafico{assi=0 linee="0,.76 0,0 1,0 1,.76;.22,.76 .22,.23 .78,.23 .78,.76;0,.40 .22,.40;0,.70 .22,.70;.78,.64 1,.64" segmenti=".11,.40,.89,.40;.89,.4,.89,.64" punti=".11,.40,pieno,I;.89,.64,pieno,D" etichette=".03,.58,oil;.49,.29,water" xmin=-.26 xmax=1.25 ymin=-.045 ymax=.87 titolo="The horizontal dashed line starts at interface I. Both free surfaces are at atmospheric pressure."}
:::

## Pascal's principle

:::teorema{#pascal titolo="Transmitting a pressure change"}
A liquid is **confined** if it is enclosed in a container. **Pascal's principle** states that a pressure change applied at the boundary of a confined, stationary liquid is transmitted unchanged to every point of the liquid, if density and heights stay the same. The absolute pressure at different points can still differ, because of the depth effect described by the hydrostatic pressure law.

A **hydraulic press** consists of two cylinders of different cross-section, connected and filled with liquid, closed by two **pistons**, discs that slide in the cylinders with a tight seal. The press is ideal if three conditions hold:
- the pistons are at the same height;
- piston masses and friction are negligible;
- the outside air presses with the same pressure on both pistons.

Under these conditions the pressure above that of the outside air, called the **excess pressure**, is the same under both pistons:
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Here $F_j$, with $j=1$ or $2$, is the effective external force balancing the push of the liquid on piston $j$ and $A_j$ is the area of that piston. It follows that $F_2=F_1\dfrac{A_2}{A_1}$, so the ratio $\dfrac{F_2}{F_1}$, called the **force gain**, equals the ratio of the areas. For circular pistons the area is $\pi r^2$, so with three times the radius the area and the force become $3^2=9$ times larger.

The force gain at the larger piston is accompanied by a shorter **travel** (piston displacement). A liquid is **incompressible** if its volume does not change when it is pressed. For small displacements $s_1$ and $s_2$ the volume leaving one cylinder enters the other, so $A_1s_1=A_2s_2$; the pistons move in opposite directions. The **work** of a force parallel to the displacement is the product of the force and the displacement. With $p$ the common excess pressure,
$$
F_1s_1=pA_1s_1=pA_2s_2=F_2s_2.
$$
Therefore the input and output work have the same magnitude, if losses (for example piston friction) and changes of height are neglected. With friction the output work is less than the input work.

If the piston heights differ, the term $\rho g\Delta z$ of the hydrostatic pressure law is added to the relation between the liquid pressures, where $\Delta z$ is the height difference between the pistons. If the external pressures differ, for each piston one calculates the difference between the internal pressure $p_{\mathrm{int},j}$ (in the liquid, under the piston) and the external pressure $p_{\mathrm{ext},j}$ (above the piston). Multiplying by the area gives the effective load
$$
F_j=A_j(p_{\mathrm{int},j}-p_{\mathrm{ext},j}),
$$
with the direction towards the liquid taken as positive. The ratio of the areas multiplies the force and not the energy.
:::

:::esempio{titolo="Available force and displacement"}
The larger area is five times the smaller. An $80\,\mathrm N$ push on the small piston balances $80\cdot5\,\mathrm N=400\,\mathrm N$ on the large one. A $10\,\mathrm{cm}$ travel of the small piston gives $\dfrac{10}{5}\,\mathrm{cm}=2\,\mathrm{cm}$ of travel at the large one. Converting the travels to metres, the two force–travel products are
$$
80\cdot0.10\,\mathrm J=8\,\mathrm J,
\qquad 400\cdot0.020\,\mathrm J=8\,\mathrm J.
$$
:::

:::esempio{#pistoni-quote-diverse titolo="Applying and supporting loads at different heights"}
In the liquid of a hydraulic press the large piston is higher by $\Delta z$. By the hydrostatic pressure law, the internal pressure under the higher piston is lower by an amount $\rho g\Delta z$ than under the lower piston. For example, with oil of density $800\,\mathrm{kg/m^3}$, $g=10\,\mathrm{m/s^2}$ and $\Delta z=1.0\,\mathrm m$,
$$
\rho g\Delta z=800\cdot10\cdot1.0\,\mathrm{Pa}=8000\,\mathrm{Pa}=8\,\mathrm{kPa}.
$$
A gauge pressure of $26\,\mathrm{kPa}$ under the lower piston therefore becomes $26\,\mathrm{kPa}-8\,\mathrm{kPa}=18\,\mathrm{kPa}$ under the higher one. Above both pistons there is air at the same pressure, so the load on the higher piston, of area $0.030\,\mathrm{m^2}$, is
$$
F_2=18000\cdot0.030\,\mathrm N=540\,\mathrm N.
$$
The liquid passing from one arm to the other changes height and hence potential energy; so comparing the work of the two pistons also involves this change.

::grafico{assi=0 linee="0,1.1 0,-.65 4,-.65 4,2.05;.7,1.1 .7,-.18 2.12,-.18 2.12,2.05;0,.58 .7,.58;2.12,1.58 4,1.58" segmenti=".7,.58,2.12,.58;1.73,.58,1.73,1.58;1.73,1.58,2.12,1.58" vettori=".35,1.27,.35,.66,F₁;3.06,2.42,3.06,1.66,F₂" etichette="1.22,1.16,Δz;.03,.1,A₁;2.26,.96,A₂" xmin=-.35 xmax=4.3 ymin=-.78 ymax=2.62 titolo="The height of the upper piston causes a hydrostatic pressure drop between A₁ and A₂."}
:::

## Archimedes' principle

:::teorema{#archimede titolo="Fluid buoyancy"}
**Archimedes' principle** states that an object immersed in a stationary fluid receives an upward force, called the **buoyant force** or Archimedes' thrust, equal to the weight of the displaced fluid. The displaced fluid is the fluid that would occupy the space of the immersed part of the object. If the density of the fluid is constant,
$$
F_A=\rho_f gV_{\mathrm{imm}},
$$
where $\rho_f$ is the density of the fluid and $V_{\mathrm{imm}}$ the immersed volume of the object.

Replace the object for a moment with the fluid that would occupy the same space. This volume of fluid stays at rest, so the fluid pressures around it balance its weight. When the object is put back, the surrounding pressures are the same, so they exert on the object the same resultant force, equal to the weight of the displaced fluid and directed upwards.

The same result follows for an immersed prism, with two horizontal faces of area $A$ and height $h$. The pressures on the side faces give horizontal forces that cancel in pairs. By the hydrostatic pressure law the pressure on the lower face exceeds that on the upper face by $\rho_f gh$. The upward force on the lower face therefore exceeds the downward force on the upper face by $\rho_f gh\cdot A=\rho_f gAh$. Since $Ah$ is the volume of the prism, $\rho_f gAh$ is the weight of the displaced liquid.

A **spring scale** is a spring instrument that measures a force. If the object hangs from a taut line above it, is at rest, and only its weight, the buoyant force and the tension $T$ of the line act on it, vertical equilibrium gives $T+F_A-mg=0$, that is,
$$
T=mg-F_A.
$$
The tension read on the spring scale is called the **apparent weight**. A line can only pull, so a negative tension shows that a line from above cannot hold the object in the assumed position. When buoyancy exceeds weight, holding the object fully immersed requires a downward force, for example a line fixed below it. If the object accelerates, by Newton's second law the sum of the vertical forces, each with its sign, equals $ma$.
:::

:::esempio{titolo="Apparent weight of a block"}
A $4\,\mathrm{kg}$ block of volume $10^{-3}\,\mathrm{m^3}$ is fully submerged in water and hangs at rest from a spring scale. With $g=10\,\mathrm{m/s^2}$ its weight is $4\cdot10\,\mathrm N=40\,\mathrm N$ and the buoyant force is $1000\cdot10\cdot10^{-3}\,\mathrm N=10\,\mathrm N$. The spring scale reads $40\,\mathrm N-10\,\mathrm N=30\,\mathrm N$. The volume and weight of the block are the same before and after immersion.

::grafico{assi=0 poligoni="-.75,-.6 .75,-.6 .75,.6 -.75,.6" linee="-2,1 2,1;0,.6 0,2.6" vettori="-.35,0,-.35,.5,F_A;0,0,0,-2,P;.37,0,.37,1.5,T" xmin=-2 xmax=2 ymin=-2.5 ymax=2.8 titolo="Upward buoyancy and tension balance downward weight"}
:::

:::osservazione{#spinta-stratificata titolo="Which fluid is displaced"}
An object straddling the interface between two liquids displaces a volume of each. Let $V_o$ be the volume immersed in oil and $V_a$ the volume immersed in water. The buoyant force is the sum of the weights of the two displaced liquids:
$$
F_A=g(\rho_oV_o+\rho_aV_a).
$$
The **effective density** of the displaced fluid is the average density of the two liquids, in which each counts in proportion to its displaced volume:
$$
\rho_{\mathrm{eff}}=\frac{\rho_oV_o+\rho_aV_a}{V_o+V_a}.
$$
This calculation holds if the liquid presses on all the immersed faces of the object. An object **seals** against the bottom when it adheres to it without letting liquid through. In that case the liquid cannot get beneath the supporting face, so the upward force on that face is absent.

::grafico{assi=0 poligoni="-.63,-1.2 .63,-1.2 .63,.82 -.63,.82" linee="-2,1.25 2,1.25;-2,0 -.63,0;.63,0 2,0" segmenti="-.63,0,.63,0" etichette="-1.65,.69,oil;-1.65,-.67,water;-.14,.43,Vₒ;-.14,-.62,Vₐ" xmin=-2.22 xmax=2.22 ymin=-1.46 ymax=1.62 titolo="The object displaces oil above the interface and water below. Buoyancy equals the weight of the two displaced volumes."}
:::

:::osservazione{#recipiente-sulla-bilancia titolo="What the scale beneath a tank measures"}
A tank of water rests on a scale and an object, hanging from a spring scale on a separate support, is lowered into the water. The liquid pushes the object upwards with the force $F_A$. By Newton's third law (every action has an equal and opposite reaction), the object pushes down on the liquid with the same force. If no water overflows and the object does not touch the tank, the scale reading therefore increases by $F_A$. The spring scale above the object instead reads $F_A$ less than in air, if air buoyancy is neglected.

::grafico{assi=0 linee="-1.7,1.32 -1.7,-1.06 1.7,-1.06 1.7,1.32;-1.7,.83 1.7,.83;0,.38 0,1.72;-.79,1.72 .79,1.72" poligoni="-.43,-.46 .43,-.46 .43,.38 -.43,.38;-1.32,-1.4 1.32,-1.4 1.32,-1.06 -1.32,-1.06" vettori="-.25,-.27,-.25,.46,F_A;.83,-.2,.83,-.93,F_A" etichette="-1.13,-1.23,scale" xmin=-1.9 xmax=1.93 ymin=-1.62 ymax=1.89 titolo="The line has a separate support. The downward arrow represents the force the object exerts on the water."}
:::

## Floating

:::teorema{#galleggiamento titolo="Submerged fraction"}
A free body floats in equilibrium and only its weight and the buoyant force act on it. The two forces are equal:
$$
\rho_f gV_{\mathrm{imm}}=mg.
$$
The **mean density** of the body is $\rho_c=\dfrac{m}{V_{\mathrm{tot}}}$, where $V_{\mathrm{tot}}$ is the exterior volume of the body; hence $m=\rho_cV_{\mathrm{tot}}$. Substituting gives $\rho_f gV_{\mathrm{imm}}=\rho_cV_{\mathrm{tot}}g$ and, dividing by $\rho_f gV_{\mathrm{tot}}$,
$$
\frac{V_{\mathrm{imm}}}{V_{\mathrm{tot}}}=\frac{\rho_c}{\rho_f}.
$$
In a denser liquid the same body has a smaller submerged fraction. The value of the ratio distinguishes three cases:
- if it is less than one, part of the body stays out of the liquid;
- if it equals one, the body is in equilibrium completely submerged, in the ideal model;
- if it is greater than one, even with the whole body submerged the displaced liquid is not enough to support it, and the body sinks.

For a hollow body, such as a box or a ship, one uses the total mass (walls, air and contents) and the exterior volume that keeps the liquid out. Adding a load increases the submerged volume needed to float. The balance of vertical forces gives the depth of immersion at equilibrium. To find whether the body returns upright after a small tilt, one studies instead how the point where the buoyant force acts and the torques of the forces change (next observation).
:::

:::esempio{titolo="Additional immersion under load"}
A platform floats in water; its horizontal cross-section has a constant area of $0.50\,\mathrm{m^2}$. A $25\,\mathrm{kg}$ load is added. Supporting it requires displacing another $25\,\mathrm{kg}$ of water, that is, a volume of $\dfrac{25}{1000}\,\mathrm{m^3}=0.025\,\mathrm{m^3}$. Dividing by the area gives a lowering of
$$
\frac{0.025}{0.50}\,\mathrm m=0.050\,\mathrm m.
$$
The calculation holds if the upper edge of the platform stays above the water level. If the cross-sectional area changes with depth, the extra volume is calculated layer by layer, adding area times thickness for each layer.
:::

:::osservazione{#momento-raddrizzante titolo="Buoyancy and weight after a small tilt"}
Weight acts along the vertical line through the centre of mass G of the vessel. In a homogeneous liquid, buoyancy acts along the vertical line through the geometric centroid B of the immersed volume, called the **centre of buoyancy**. When the vessel tilts, the immersed part changes shape and B moves. Weight and buoyancy have the same magnitude and opposite directions but act along different lines; they therefore form a **couple**, which makes the body rotate. In the diagram the vessel is tilted clockwise and the buoyant force acts to the right of G. The couple therefore turns the vessel anticlockwise, that is, opposite to the tilt, and brings it back upright. There are two cases:
- if the couple opposes the tilt, the equilibrium is stable;
- if a change in load shifts G so that the couple increases the tilt, the equilibrium is unstable.

::grafico{assi=0 uguale=1 poligoni="-1.4,.60 1.36,.03 1.09,-.62 -.54,-.29" linee="-2.03,-.14 -.684944,-.14;1.289385,-.14 1.98,-.14" vettori=".05,.19,.05,-.88,P;.46,-.308593,.46,.761407,F_A" punti=".05,.19,pieno,G;.46,-.308593,pieno,B" xmin=-2.08 xmax=2.13 ymin=-1.02 ymax=1.03 titolo="Equal buoyancy and weight act along different vertical lines. Their positions determine the direction of the couple."}
:::
