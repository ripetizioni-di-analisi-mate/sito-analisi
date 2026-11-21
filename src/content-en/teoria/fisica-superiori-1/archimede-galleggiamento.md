---
titolo: "Archimedes' principle and flotation"
sommario: "Immersed volume, apparent weight, density, load capacity, and constrained bodies."
---

## Archimedes' principle

:::osservazione{titolo="Quantities and units used in this chapter"}
A **fluid** is a substance that flows and takes the shape of the vessel that holds it. Liquids, such as water and oil, and gases, such as air, are fluids. A fluid is *at rest* when it is not moving. The **free surface** of a liquid is its surface in contact with the air.

- A **force** is a push or a pull and is measured in newtons, symbol $\mathrm N$. The **weight** of a body is the force with which the Earth pulls it downwards, and it is written $P$.
- The letter $g$ gives how many newtons each kilogram weighs. Near the Earth's surface it is about $9.8\,\mathrm{N/kg}$, and the examples in this chapter round it to $10\,\mathrm{N/kg}$. A body of mass $m$ has weight $P=mg$, so a body of $3\,\mathrm{kg}$ weighs $30\,\mathrm N$.
- The litre, symbol $\mathrm L$, is a unit of volume. One litre is one cubic decimetre, that is $1000\,\mathrm{cm^3}$, and $1\,\mathrm L=0.001\,\mathrm m^3$.
- The **density** of a substance is its mass divided by its volume. It is written with the Greek letter $\rho$, read «rho». Water has a density of $1000\,\mathrm{kg/m^3}$, that is $1\,\mathrm{kg/L}$. One litre of water therefore has a mass of $1\,\mathrm{kg}$ and weighs $10\,\mathrm N$.
- **Pressure** is force divided by the area on which the force presses. It is measured in pascals, symbol $\mathrm{Pa}$, and $1\,\mathrm{Pa}$ is the pressure of $1\,\mathrm N$ on $1\,\mathrm m^2$. One thousand pascals are one kilopascal, $\mathrm{kPa}$. In a liquid at rest of density $\rho$, pressure increases with depth. Going down by a distance $h$ it increases by $\rho g h$ (chapter on pressure in fluids). In water each extra metre adds $1000\cdot10\cdot1\,\mathrm{Pa}=10000\,\mathrm{Pa}$.
:::

::::teorema{#archimede titolo="The weight of displaced fluid"}
A body immersed in a fluid at rest receives from the fluid an upward force, which is called **buoyancy**, or buoyant force, and is written $F_A$.

Buoyancy comes from pressure. The fluid presses on the whole immersed part of the body's surface. Because pressure increases with depth, the fluid presses harder on the lower parts of the body than on the upper parts. The sum of all these pressure forces is called the **resultant**, and it therefore points upwards.

**Archimedes' principle** states that the magnitude of the buoyant force, that is its value without the direction, equals the weight of the displaced fluid. The displaced fluid is the fluid that would occupy the space where the immersed part of the body now is.

The volume of the immersed part is called the **immersed volume** and is written $V_i$. It is the volume from which the body excludes the fluid. The density of the fluid is written $\rho_f$, where the small letter $f$ stands for «fluid». The displaced fluid has mass $\rho_f V_i$ and weight $\rho_f V_i\,g$. If the fluid density and $g$ are uniform, that is they have the same value at every point, the buoyant force is therefore
$$
F_A=\rho_f gV_i.
$$
The air buoyancy on the exposed part, that is the part of the body outside the liquid, is neglected when it is small compared with the liquid buoyancy. One litre of air weighs about $0.012\,\mathrm N$, while one litre of water weighs $10\,\mathrm N$.

:::dimostrazione
Before the body is inserted, the space that the immersed part will occupy is full of fluid. Two things act on this portion of fluid: its weight, which points downwards, and the pressure forces of the surrounding fluid. This fluid is stationary, so the pressure forces on its surface balance its weight. Their resultant therefore points upwards and has a magnitude equal to the weight of the portion.

If the volume reaches the free surface, pressure relative to atmospheric pressure is used, that is pressure measured starting from the pressure of the air above the liquid. This relative pressure is zero at the free surface, so there is no force to count on that side.

In thought, the portion of fluid is now replaced with a body whose immersed part has the same shape. The pressure at a point of the surrounding fluid depends on the depth of the point, which has stayed the same. Because the pressures on the wetted surface are the same, the resultant pressure force is the one that supported the replaced fluid. The buoyant force on the body therefore equals the weight of that fluid.

This shows why the fluid density enters the calculation. The material the body is made of does not appear in the formula.
:::
::::

:::esempio{titolo="Pressure difference across a prism"}
A prism is a solid with two equal, parallel faces, called bases, like a box. A vertical prism entirely in water of density $1000\,\mathrm{kg/m^3}$ has its two horizontal bases of area $A=0.02\,\mathrm m^2$ and height $h=0.3\,\mathrm m$. Take $g=10\,\mathrm{N/kg}$.

The bottom base lies $0.3\,\mathrm m$ deeper than the top one. The pressure $p_2$ on the bottom base is therefore higher than the pressure $p_1$ on the top face by
$$
p_2-p_1=\rho_f g h=1000\cdot10\cdot0.3\,\mathrm{Pa}=3000\,\mathrm{Pa}.
$$
The water pushes the bottom base upwards with the force $p_2A$ and the top base downwards with the force $p_1A$. The forces on the side faces are horizontal and balance, because at each depth the water presses with the same pressure from all sides.
$$
F_A=p_2A-p_1A=(p_2-p_1)A=(3000\,\mathrm{Pa})(0.02\,\mathrm m^2)=60\,\mathrm N.
$$
The volume of the prism is $Ah=0.02\,\mathrm m^2\cdot0.3\,\mathrm m=0.006\,\mathrm m^3$, or $6\,\mathrm L$. Six litres of water indeed weigh sixty newtons, as Archimedes' principle states.

In the figure the horizontal line is the water surface and the two arrows are the forces $p_1A$ and $p_2A$ on the bases.
:::

::grafico{assi=0 uguale=1 linee="-2,2 4,2" poligoni="0,0 2,0 2,1.5 0,1.5" vettori="1,1.9,1,1.5,;1,-1.35,1,0,p₂ A" etichette="2.8,0.75,h;1.25,1.7,p₁ A" xmin=-3 xmax=5 ymin=-2 ymax=3 titolo="Submerged prism. The force on the bottom face is larger. The arrows show only the vertical components"}

:::esempio{titolo="Lowering a prism without turning it"}
Translating a body means moving it without turning it. In the example of the prism of height $0.3\,\mathrm m$, the two horizontal faces lie, for instance, at depths of $0.15\,\mathrm m$ and $0.45\,\mathrm m$. Above the pressure at the free surface, the increases $\rho_f g h$ are $1000\cdot10\cdot0.15\,\mathrm{Pa}=1500\,\mathrm{Pa}$ and $1000\cdot10\cdot0.45\,\mathrm{Pa}=4500\,\mathrm{Pa}$, respectively.

Lowering the prism by $0.20\,\mathrm m$ brings the faces to depths of $0.35\,\mathrm m$ and $0.65\,\mathrm m$. The lowering adds $1000\cdot10\cdot0.20\,\mathrm{Pa}=2000\,\mathrm{Pa}$ to both readings, which become $3500\,\mathrm{Pa}$ and $6500\,\mathrm{Pa}$. The pressure difference between the two faces is $\Delta p_1$ before the lowering and $\Delta p_2$ after it. The Greek letter $\Delta$, delta, denotes a difference.
$$
\begin{aligned}
\Delta p_1&=4500\,\mathrm{Pa}-1500\,\mathrm{Pa}=3000\,\mathrm{Pa},\\
\Delta p_2&=6500\,\mathrm{Pa}-3500\,\mathrm{Pa}=3000\,\mathrm{Pa}.
\end{aligned}
$$
Pressure increases at the same rate throughout the liquid, that is each extra metre of depth always adds $10000\,\mathrm{Pa}$. As long as the whole object remains wetted, the pressures at the upper and lower faces therefore increase by the same amount and their net vertical force keeps the same magnitude.

This reasoning relies on the uniform liquid density and the rigidity of the prism. A body is rigid when it changes neither its shape nor its volume. For a body that compresses, the distance between the faces and the submerged volume decrease on the way down, and the buoyant force with them.

In the graph the straight line gives the gauge pressure, in kilopascals, at each depth. The points A, B, C and D are the four faces.

::grafico{f="10*x" punti="0.15,1.5,pieno,A;0.45,4.5,pieno,B;0.35,3.5,pieno,C;0.65,6.5,pieno,D" xmin=0 xmax=0.78 ymin=0 ymax=8 nomi="depth (m),p_rel (kPa)" titolo="The faces start at A and B. After lowering, they are at C and D. The pressure difference remains 3 kPa."}
:::

## Immersed volume and inverse problems

:::osservazione{#inverse titolo="Identify the volume that displaces fluid"}
The outer volume $V$ of a body is the space enclosed by its outer surface, including any cavities. A body is watertight when the liquid cannot get into it.

- For a rigid, watertight body that is fully submerged, the immersed part occupies its outer volume, so $V_i=V$.
- A partially submerged body has $V_i<V$.
- A hollow box, that is one that is empty inside, is sealed when it is closed so that the water stays out. For a hollow sealed box, the immersed external volume is used, cavity included, because the liquid is excluded from the cavity too.
- If an opening allows water into part of the cavity, the liquid that enters is no longer excluded from that volume.

An inverse problem gives the buoyant force and asks for the immersed volume or for the fluid density. From the formula $F_A=\rho_f gV_i$, dividing both sides by $\rho_f g$ gives
$$
V_i=\frac{F_A}{\rho_f g}.
$$
For a buoyant force of $72\,\mathrm N$ in oil of density $800\,\mathrm{kg/m^3}$ with $g=10\,\mathrm{N/kg}$, the displaced volume is $\dfrac{72}{800\cdot10}\,\mathrm m^3=0.009\,\mathrm m^3$. This is $9\,\mathrm L$, because $1\,\mathrm L=10^{-3}\,\mathrm m^3$. If part of the body protrudes, buoyancy alone does not determine the total volume.

When the buoyant force and the immersed volume are known, dividing by $gV_i$ instead gives the fluid density. With the same data
$$
\rho_f=\frac{F_A}{gV_i}=\frac{72}{10\cdot0.009}\,\mathrm{kg/m^3}=800\,\mathrm{kg/m^3}.
$$

An overflow vessel has an outlet hole in its side. When a body is immersed the level rises, and the liquid above the outlet flows out and is collected in a second vessel. The volume collected equals the volume displaced if the liquid is already at the outlet before immersion. If the initial level is lower, some of the displaced volume fills the space up to the outlet. To find the submerged volume, the volume needed to reach the outlet and the water collected are added.
:::

:::esempio{titolo="A sealed cavity and a flooded cavity"}
Two shells of the same type have an external volume of $5\,\mathrm L$ and a cavity of $3\,\mathrm L$. The shell material, that is the material each shell is made of, therefore occupies $5\,\mathrm L-3\,\mathrm L=2\,\mathrm L$. They are fully submerged in water, with $\rho_f=1\,\mathrm{kg/L}$ and $g=10\,\mathrm{N/kg}$.

The sealed shell has its cavity full of air and excludes all $5\,\mathrm L$. The second shell has openings, and at equilibrium its cavity is full of water connected to the surrounding liquid. Buoyancy on that shell thus comes from the $2\,\mathrm L$ occupied by the shell material. Each litre excluded gives $10\,\mathrm N$ of buoyancy. The two buoyant forces are $50\,\mathrm N$ and $20\,\mathrm N$, respectively.

The result for the open shell assumes that the water inside remains part of the surrounding liquid. In physics, a system is the set of bodies whose forces are added up. If a system is defined to include both the shell and the water inside it, the surface on which the pressure forces are calculated changes and the weight of the internal water is added to the weight of the system. The balance stays consistent, provided the weight and the contact surface refer to the same system.

::grafico{assi=0 uguale=1 linee="-0.5,3 7.5,3;0,0 3,0 3,2 0,2 0,0;5.32,2 4,2 4,0 7,0 7,2 5.68,2;5.32,2 5.32,1.58 4.4,1.58 4.4,0.42 6.6,0.42 6.6,1.58 5.68,1.58 5.68,2" poligoni="0.4,0.42 2.6,0.42 2.6,1.58 0.4,1.58" etichette="1.5,1,air;5.5,1,water;5.5,2.35,opening" xmin=-0.65 xmax=7.63 ymin=-0.55 ymax=3.3 titolo="The cavities have the same volume. The open cavity is connected to the surrounding liquid."}
:::

## Apparent weight

:::teorema{#apparente titolo="Tension measured by a spring scale"}
A spring scale is an instrument with a spring that measures a force in newtons. A body hanging from a spring scale by a string is pulled upwards by the string with a force $T$, called tension, and the spring scale shows the value of $T$.

Consider a body suspended from a spring scale above it, stationary and immersed with no other contacts. Three forces act on the body.

- The weight $P$ points downwards.
- The tension $T$ of the string points upwards.
- The buoyant force $F_A$ points upwards.

The body is stationary, so the upward forces and the downward force balance and $T+F_A=P$. The reading is $T=P-F_A$, provided the string remains taut. The reading under these conditions is called **apparent weight**. The gravitational weight $P$ is unchanged because the mass of the body and $g$ are the same inside and outside the liquid.

If a solid weighs $90\,\mathrm N$ with air buoyancy neglected and the spring scale reads $60\,\mathrm N$ when the solid is fully submerged in water, buoyancy is $F_A=P-T=90\,\mathrm N-60\,\mathrm N=30\,\mathrm N$. The difference $P-T$ is also called the apparent loss of weight.

The two readings give the density of the solid. Let $\rho_c$ be the density of the body, where the letter $c$ stands for «corpo», Italian for body, and let $V$ be its volume. The mass of the solid is $\rho_cV$. The solid's weight and apparent loss are respectively $\rho_c Vg$ and $\rho_f Vg$. Dividing the first by the second gives
$$
\frac{P}{P-T}=\frac{\rho_c Vg}{\rho_f Vg}=\frac{\rho_c}{\rho_f},
\qquad
\frac{\rho_c}{\rho_f}=\frac{90}{30}=3.
$$
The solid has three times the density of water, that is $3000\,\mathrm{kg/m^3}$. The same volume $V$ appears in the weight and in the buoyant force and cancels because immersion is complete, and so $V_i=V$.
:::

:::osservazione{#reazione-bilancia titolo="The force passed on to the vessel"}
A vessel containing water sits on a scale. A body held still by an independent support is immersed without touching the vessel or spilling water. The water pushes up on the body with the force $F_A$. Newton's third law, the principle of action and reaction, states that if one body exerts a force on a second body, the second exerts on the first a force of equal magnitude and opposite direction. By this law, the body exerts an equal downward force on the water. The scale therefore measures a force that is $F_A$ higher than its reading with the body out of the liquid.

If the scale displays mass, the reading increases by $\Delta m=\dfrac{F_A}{g}$. With a buoyant force of $3\,\mathrm N$ and $g=10\,\mathrm{N/kg}$ the reading rises by $\dfrac{3}{10}\,\mathrm{kg}=0.3\,\mathrm{kg}$. The weight of the water and vessel has stayed the same. The external support bears the part of the body's weight that buoyancy does not balance, that is $P-F_A$.
:::

:::esempio{titolo="Reading a spring scale until its string goes slack"}
A body weighs $45\,\mathrm N$ and has an external volume of $5\,\mathrm L$. It is gradually submerged in water, with $\rho_f=1\,\mathrm{kg/L}$ and $g=10\,\mathrm{N/kg}$. Each litre under water displaces $1\,\mathrm{kg}$ of water and adds $10\,\mathrm N$ of buoyancy. The spring scale reading $T=P-F_A$ therefore drops by $10\,\mathrm N$ for each additional litre under water.

The reading reaches zero when the buoyant force is $45\,\mathrm N$, which occurs at $V_i=4.5\,\mathrm L$. In the graph, point A is the body entirely out of the water and point B is the body with $4.5\,\mathrm L$ submerged.

Applying the same formula at $5\,\mathrm L$ would give $45\,\mathrm N-50\,\mathrm N=-5\,\mathrm N$. The negative sign shows that complete submersion requires a downward force of $5\,\mathrm N$ to maintain equilibrium. A spring scale above the body pulls only upwards, so its string goes slack. A different restraint, for example a string fixed to the bottom, is needed to hold the body any farther under water.

::grafico{linee="0,45 4.5,0" punti="0,45,pieno,A;4.5,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=52 nomi="Vᵢ (L),tension (N)" titolo="The line ends at 4.5 L, where the string goes slack. At larger submerged volumes it cannot maintain equilibrium."}
:::

:::osservazione{titolo="When buoyancy from air also matters"}
When a stationary body of volume $V$ is weighed in air, the scale reads $T_\mathrm{aria}=P-\rho_\mathrm{aria} Vg$. In water, with the body fully submerged and free of contacts, it reads $T_\mathrm{acqua}=P-\rho_\mathrm{acqua}Vg$. The subscripts «aria» and «acqua» are the Italian words for air and water. Subtracting the second reading from the first cancels the weight $P$. The difference between the readings is therefore
$$
T_\mathrm{aria}-T_\mathrm{acqua}=(\rho_\mathrm{acqua}-\rho_\mathrm{aria})Vg.
$$
For a body of volume $0.005\,\mathrm m^3$, with $g=10\,\mathrm{N/kg}$ and water and air densities of $1000$ and $1.2\,\mathrm{kg/m^3}$, respectively, the difference is
$$
(1000-1.2)\cdot0.005\cdot10\,\mathrm N=49.94\,\mathrm N.
$$
Buoyancy from water alone is $1000\cdot0.005\cdot10\,\mathrm N=50\,\mathrm N$. The $0.06\,\mathrm N$ discrepancy between the two values is the buoyancy from air, $1.2\cdot0.005\cdot10\,\mathrm N$.

The resolution of an instrument is the smallest difference that the instrument distinguishes. A scale with a resolution of $1\,\mathrm N$ cannot distinguish the $0.06\,\mathrm N$ discrepancy. In a measurement that distinguishes hundredths of a newton, attributing the whole difference to buoyancy from the water instead introduces a visible discrepancy.
:::

## Free flotation

:::teorema{#galleggiamento titolo="Buoyancy equals weight"}
A body floats freely when it is at rest in the liquid with no strings and no supports. A body floating at rest under its weight, downwards, and buoyancy, upwards, alone satisfies
$$
F_A=P.
$$
Buoyancy grows with the immersed volume and reaches its largest value $\rho_f gV$ when the whole volume $V$ of the body is immersed. Comparing the weight with this maximum buoyancy gives three cases.

- If the weight is below the buoyancy for complete immersion, the body floats with part of it above the surface. The immersed volume is the one for which buoyancy equals weight.
- If the weight exceeds the maximum buoyancy, no immersed volume balances the body, because $V_i$ is at most $V$. The body sinks.
- If the two forces match exactly at complete immersion, the body remains suspended, at rest and fully immersed, in an ideal uniform fluid, that is a fluid with the same density at every depth.

A boat weighing $5000\,\mathrm N$ receives $5000\,\mathrm N$ of buoyancy while floating. In fresh water of density $1000\,\mathrm{kg/m^3}$ the immersed volume is $\dfrac{5000}{1000\cdot10}\,\mathrm m^3=0.5\,\mathrm m^3$. Denser water gives the same force for a smaller displaced volume. In sea water, which has a density of about $1025\,\mathrm{kg/m^3}$, the immersed volume is $\dfrac{5000}{1025\cdot10}\,\mathrm m^3\approx0.49\,\mathrm m^3$. In this comparison the weight is fixed and the immersed volume adjusts.
:::

:::esempio{titolo="Three blocks of the same volume"}
Three rigid blocks of volume $3\,\mathrm L$ are released from rest while fully submerged in water, away from the bottom and with no strings attached. Air above the surface has negligible effects. Each block displaces $3\,\mathrm L$ of water, that is $3\,\mathrm{kg}$. With $g=10\,\mathrm{N/kg}$, the initial buoyant force is $30\,\mathrm N$ for each block. The outcomes differ according to how their weights $P=mg$ compare with those $30\,\mathrm N$.

| Mass | Weight | Outcome in the ideal model |
| --- | --- | --- |
| $2.1\,\mathrm{kg}$ | $21\,\mathrm N$ | Rises and floats at the surface. |
| $3.0\,\mathrm{kg}$ | $30\,\mathrm N$ | Remains in equilibrium while submerged. |
| $3.6\,\mathrm{kg}$ | $36\,\mathrm N$ | Sinks. |

For the first block, buoyancy initially exceeds weight, so the block rises. When it reaches the surface it starts to emerge and excludes less water, so buoyancy decreases. The buoyant force is exactly $21\,\mathrm N$ when its submerged volume drops to $2.1\,\mathrm L$, and there the block floats with $0.9\,\mathrm L$ out of the water.

The second block has a weight equal to the buoyant force and needs no contact force to remain submerged.

For the third block the buoyant force is already at its maximum, leaving a further $36\,\mathrm N-30\,\mathrm N=6\,\mathrm N$ of upward force needed to balance its weight. The block goes down to the bottom.

In the graph the sloping line is the buoyant force up to $3\,\mathrm L$ submerged. Points A and B are the equilibria of the first and second blocks.

::grafico{linee="0,0 3,30;0,21 3,21;0,30 3,30;0,36 3,36" punti="2.1,21,pieno,A;3,30,pieno,B" etichette="0.7,38,P = 36 N" xmin=0 xmax=3.3 ymin=0 ymax=41 nomi="submerged volume (L),force (N)" titolo="The horizontal lines show the three weights. The rising line meets them only at A and B."}
:::

:::osservazione{titolo="Small vertical displacements from equilibrium"}
The horizontal cross-section of a body is the figure obtained by cutting it with a horizontal plane. A float with vertical walls has the same cross-section, of area $A$, at every height.

With the liquid level fixed, lower the float by $\Delta h$. The float remains partially submerged. The immersed volume increases by $A\,\Delta h$. Its weight remains constant, while its buoyant force increases by $\rho_f g A\Delta h$. On release the initial net force points upwards because the two forces balanced before the displacement and buoyancy now exceeds weight. Raising the float reduces buoyancy and gives a downward net force.

For $A=0.04\,\mathrm m^2$ and a displacement of $2\,\mathrm{cm}=0.02\,\mathrm m$ downwards in water, the float displaces an extra $0.04\,\mathrm m^2\cdot0.02\,\mathrm m=0.0008\,\mathrm m^3$. On release the net force is $1000\cdot10\cdot0.0008\,\mathrm N=8\,\mathrm N$ upwards with $g=10\,\mathrm{N/kg}$.

An equilibrium is **stable** when, after a small displacement, the forces bring the body back towards its starting position. The equilibrium is stable in this model for small vertical displacements. Stability against rotations also depends on where the weight and buoyant force act.
:::

## Immersed fraction

::::teorema{#frazione titolo="The density ratio"}
The **immersed fraction** is the ratio $\dfrac{V_i}{V}$ of the immersed volume to the total volume of the body. An immersed fraction of $0.9$ means that $90\%$ of the volume is under water and $10\%$ is above it.

For a body floating freely in a uniform liquid, the immersed fraction is
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f},
$$
where $\rho_c=\dfrac{m}{V}$ is the mean body density, based on the outer volume that would exclude liquid in complete immersion.

A body is homogeneous when it is made of a single material with no cavities, and then the mean density is the density of the material. For a hollow body the outer volume includes the cavity, so the mean density is lower than that of the material. A sealed box of mass $2\,\mathrm{kg}$ and outer volume $5\,\mathrm L$ has a mean density of $\dfrac{2\,\mathrm{kg}}{5\,\mathrm L}=0.4\,\mathrm{kg/L}$, whatever the material of its walls.

The ratio $\dfrac{\rho_c}{\rho_f}$ is called the relative density of the body with respect to the liquid. The two densities are in the same unit, so the relative density is a number without a unit.

:::dimostrazione
Equilibrium sets buoyancy $\rho_f gV_i$ equal to weight $mg=\rho_c Vg$, where $m=\rho_cV$ has been used.
$$
\rho_f gV_i=\rho_c Vg
$$
Divide by the positive product $\rho_f gV$. On the left $\rho_f$ and $g$ cancel, on the right $V$ and $g$ cancel.
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f}
$$
The fraction above water is one minus the submerged fraction, that is $1-\dfrac{V_i}{V}$.
:::
::::

:::esempio{titolo="Submerged and exposed volumes"}
In water of density $1000\,\mathrm{kg/m^3}$ a block of density $600\,\mathrm{kg/m^3}$ has an immersed fraction of $\dfrac{600}{1000}=0.6$, so it submerges six tenths of its volume, that is $60\%$. If the total volume is $20\,\mathrm L$, then $0.6\cdot20\,\mathrm L=12\,\mathrm L$ is submerged and $20\,\mathrm L-12\,\mathrm L=8\,\mathrm L$ is above water.

For a vertical prism with constant cross-section the same fraction applies to heights, because the immersed volume is the cross-sectional area times the immersed height and the total volume is the same area times the total height. When the cross-section varies, the volumes are used directly.

The graph shows the immersed fraction as a function of the relative density. Point A is the block of this example. Point B is a body with the same density as the liquid, which is entirely immersed.
:::

::grafico{f="x" nomi="ρc / ρf,Vᵢ / V" punti="0.6,0.6,pieno,A;1,1,pieno,B" xmin=0 xmax=1 ymin=0 ymax=1.1 titolo="The submerged fraction grows with relative density. B marks the limit of complete immersion"}

:::esempio{titolo="Cross-sectional area and submerged fraction"}
An upright float consists of two sections stacked one above the other. The lower $10\,\mathrm{cm}$ have a horizontal cross-sectional area of $100\,\mathrm{cm^2}$ and the upper $10\,\mathrm{cm}$ have an area of $200\,\mathrm{cm^2}$. The volume of each section is its area times its height, that is $100\,\mathrm{cm^2}\cdot10\,\mathrm{cm}=1000\,\mathrm{cm^3}$ for the first and $2000\,\mathrm{cm^3}$ for the second. Their volumes are therefore $1\,\mathrm L$ and $2\,\mathrm L$, and the total volume is $3\,\mathrm L$. If the float has a mass of $2\,\mathrm{kg}$, it displaces $2\,\mathrm{kg}$ of water, that is $2\,\mathrm L$, to stay afloat in water.

Reaching that volume takes the entire lower section, which provides the first litre. A further litre must come from the upper section. Each centimetre in that section accounts for $200\,\mathrm{cm^2}\cdot1\,\mathrm{cm}=200\,\mathrm{cm^3}=0.2\,\mathrm L$, so another $\dfrac{1}{0.2}\,\mathrm{cm}=5\,\mathrm{cm}$ is needed.

The submerged height is $10\,\mathrm{cm}+5\,\mathrm{cm}=15\,\mathrm{cm}$ out of $20\,\mathrm{cm}$, or three quarters. The submerged volume is instead $2\,\mathrm L$ out of $3\,\mathrm L$, or two thirds of the total.

In the graph point A is the floating position and the change in cross-sectional area is the point where the slope doubles, from $0.1\,\mathrm L$ to $0.2\,\mathrm L$ per centimetre.

::grafico{linee="0,0 10,1 20,3" punti="10,1,pieno;15,2,pieno,A;20,3,pieno" xmin=0 xmax=22 ymin=0 ymax=3.6 nomi="submerged height (cm),submerged volume (L)" titolo="Each submerged centimetre accounts for 0.1 L in the lower section and 0.2 L in the upper section."}
:::

## Loads on floats

:::teorema{#carichi titolo="Total mass and available volume"}
A float with a load on it floats as a single body, whose weight is the sum of the two weights. Consider a rigid float of mass $m_0$ carrying a load of mass $m_c$ kept above water. The buoyant force $\rho_f gV_i$ equals the total weight $(m_0+m_c)g$. Dividing both sides by $g$, equilibrium gives
$$
\rho_f V_i=m_0+m_c.
$$
In water, with $\rho_f=1\,\mathrm{kg/L}$, the litres displaced are as many as the total kilograms.

The extra volume required for an added mass $\Delta m$ is $\Delta V_i=\dfrac{\Delta m}{\rho_f}$. In water, $3\,\mathrm{kg}$ of extra load submerges another $3\,\mathrm L$.

The **payload** is the largest mass of the load. If the largest displaceable volume is $V_{\max}$, the limiting payload is $\rho_f V_{\max}-m_0$.

With $V_{\max}=80\,\mathrm L$ in water of density $1\,\mathrm{kg/L}$ and a float mass of $24\,\mathrm{kg}$, the limiting payload is $1\cdot80\,\mathrm{kg}-24\,\mathrm{kg}=56\,\mathrm{kg}$. The volume that stays out of the water is called the reserve above water. If $10\,\mathrm L$ must remain above water, the maximum submerged volume becomes $80\,\mathrm L-10\,\mathrm L=70\,\mathrm L$ and the payload drops to $70\,\mathrm{kg}-24\,\mathrm{kg}=46\,\mathrm{kg}$.
:::

:::esempio{titolo="The weight and buoyancy of a load"}
A watertight platform has an external volume of $24\,\mathrm L$ and a mass of $12\,\mathrm{kg}$, and carries an $8\,\mathrm{kg}$ load. The total mass is $12\,\mathrm{kg}+8\,\mathrm{kg}=20\,\mathrm{kg}$. In water, where each litre displaced supports one kilogram, the system as a whole displaces $20\,\mathrm L$.

If the load stays dry, the platform provides all $20\,\mathrm L$ of displacement and has $24\,\mathrm L-20\,\mathrm L=4\,\mathrm L$ above the surface. To keep a reserve of $5\,\mathrm L$ above the surface, the platform submerges at most $24\,\mathrm L-5\,\mathrm L=19\,\mathrm L$ and supports $19\,\mathrm{kg}$ in all. The dry load therefore drops to $19\,\mathrm{kg}-12\,\mathrm{kg}=7\,\mathrm{kg}$.

In the first graph the line gives the volume above water for each dry load, which in litres is $12$ minus the kilograms of the load. Point A is the $7\,\mathrm{kg}$ load and point B the $8\,\mathrm{kg}$ load.

Suppose instead that the original $8\,\mathrm{kg}$ load is suspended below the platform and displaces $1\,\mathrm L$ of water while fully submerged. The system still has the same total mass and still displaces $20\,\mathrm L$. The load provides one litre of displacement. The platform therefore displaces $20\,\mathrm L-1\,\mathrm L=19\,\mathrm L$ and keeps $24\,\mathrm L-19\,\mathrm L=5\,\mathrm L$ above the surface.

The weight of the load is the same in the two cases. What changes is the share of the total buoyant force acting directly on the load. In the second figure the load is on top of the platform on the left and suspended below it on the right.

::grafico{linee="0,12 12,0" punti="7,5,pieno,A;8,4,pieno,B" xmin=0 xmax=15.5 ymin=0 ymax=13.5 nomi="dry load (kg),volume above water (L)" titolo="With a dry load, A satisfies the 5 L margin. The load at B leaves one litre less above the surface."}

::grafico{assi=0 linee="-0.4,0 7,0;5.4,-1.3 5.4,-2" poligoni="0,-1.4 2.25,-1.4 2.25,0.5 0,0.5;1,0.5 1.8,0.5 1.8,1.1 1,1.1;4.3,-1.3 6.55,-1.3 6.55,0.6 4.3,0.6;5,-2.48 5.8,-2.48 5.8,-2 5,-2" etichette="1.13,0.25,4 L;5.42,0.3,5 L" xmin=-0.65 xmax=7.2 ymin=-2.85 ymax=1.45 titolo="On the left, the platform displaces all the water. On the right, the load contributes 1 L of displacement."}
:::

## Constrained bodies

:::osservazione{#vincoli titolo="A cord can pull upward or downward"}
A constraint is an object that prevents a body from moving freely, such as a cord, a string or the bottom of the vessel. A taut cord pulls the body towards the point where it is anchored.

- For a body that would tend to sink, that is with $P>F_A$, a cord anchored above adds upward tension. The upward forces balance the weight, so $T+F_A=P$ and $T=P-F_A$.
- If the completely submerged body would tend to rise, that is if $F_A>P$, a cord anchored below, for example to the bottom, adds downward tension. Buoyancy balances the two downward forces, so $F_A=P+T$ and $T=F_A-P$.

The balance is set up using the direction of the actual constraint. With $F_A=28\,\mathrm N$ and $P=19\,\mathrm N$ buoyancy exceeds weight, so the required tension is $28\,\mathrm N-19\,\mathrm N=9\,\mathrm N$ downward. A cord attached above cannot provide it, because it pulls only upwards.
:::

:::esempio{titolo="Finding the net force before choosing a restraint"}
A fully submerged block experiences a buoyant force of $32\,\mathrm N$ and weighs $22\,\mathrm N$. Take upwards as positive, that is write upward forces with a plus sign and downward forces with a minus sign. Before attaching a restraint, the two contributions enter the net force with opposite signs and give
$$
+32\,\mathrm N-22\,\mathrm N=+10\,\mathrm N.
$$
The net force is positive, so the free block would rise. The restraint must supply $-10\,\mathrm N$, that is $10\,\mathrm N$ downwards, to bring the total back to zero.

A string fixed to the bottom pulls in exactly the required direction, with tension $T=10\,\mathrm N$. In the figure the block is held by this string.

If the block were attached to two strings, one above and one below, the equations would give only that the lower string must pull with $10\,\mathrm N$ more force than the upper one. Finding the two tensions separately would require another piece of information, such as a spring scale reading on one of the strings.

::grafico{assi=0 uguale=1 linee="-2,-2.8 4,-2.8;2,-2.8 2,0" poligoni="-0.7,-0.45 2.4,-0.45 2.4,0.45 -0.7,0.45" vettori="0,0,0,3.2,F_A;0.8,0,0.8,-2.2,P;2,0,2,-1,T" xmin=-2.2 xmax=4.3 ymin=-3 ymax=3.7 titolo="The buoyant force is 32 N upwards. Weight and lower-string tension are 22 N and 10 N downwards."}
:::

## Comparing situations

:::osservazione{#confronti titolo="Identify what changes"}
The buoyant force $F_A=\rho_f gV_i$ depends only on the fluid density, on $g$ and on the immersed volume.

For a rigid body fully immersed in a uniform liquid, away from walls and the bottom, different depths give the same $V_i$ and hence the same buoyancy. A body of $5\,\mathrm L$ fully immersed in water receives $50\,\mathrm N$ both at a depth of $1\,\mathrm m$ and at $3\,\mathrm m$. The absolute pressure, that is the total pressure including that of the air, is higher at $3\,\mathrm m$. Absolute pressures change while their difference between the upper and lower parts of the body stays fixed. If the fluid density or the submerged volume changes with depth, as for a body that compresses, the buoyant force changes too.

At equal immersed volume in the same fluid, two bodies of different mass get equal buoyancy. The same holds for two bodies of different shape. Two bodies of $8\,\mathrm L$ fully immersed in water both receive $80\,\mathrm N$, whatever their mass and shape.

At equal weight in free flotation, two liquids of different density give equal buoyancy at different submerged volumes.

Before buoyancies are compared, it is established which quantity the experiment holds fixed. In the first two comparisons the immersed volume is fixed, in the third the weight is fixed.
:::

:::esempio{titolo="Crossing the boundary between two liquids at rest"}
A watertight body is fully submerged across the boundary between oil of density $0.8\,\mathrm{kg/L}$ and water of density $1\,\mathrm{kg/L}$. Its external volume is $5\,\mathrm L$. If it excludes $2\,\mathrm L$ of water, it excludes $5\,\mathrm L-2\,\mathrm L=3\,\mathrm L$ of oil.

Surface tension is a force that acts along the surface separating two fluids, and here it is much smaller than the buoyant force. With surface tension neglected, the weight of displaced liquid is the sum of the weights of the two displaced portions. With $g=10\,\mathrm{N/kg}$, the buoyant force is
$$
F_A=(2\cdot1+3\cdot0.8)\cdot10\,\mathrm N=44\,\mathrm N.
$$
A litre that passes from the oil to the water displaces $10\,\mathrm N$ of water in place of $8\,\mathrm N$ of oil, so it increases buoyancy by $2\,\mathrm N$. The total buoyant force therefore changes as the body moves vertically across the boundary, even at constant total submerged volume. In the graph the buoyant force goes from $40\,\mathrm N$, with the body entirely in oil, to $50\,\mathrm N$, with the body entirely in water, and point A is the position of this example.

If a single density is used, it must be the average weighted by the displaced volumes in the two liquids.
$$
\rho_\mathrm{media}=\frac{2\cdot1+3\cdot0.8}{5}\,\mathrm{kg/L}=0.88\,\mathrm{kg/L}.
$$

::grafico{linee="0,40 5,50" punti="0,40,pieno;2,44,pieno,A;5,50,pieno" xmin=0 xmax=5.5 ymin=36 ymax=53 nomi="volume in water (L),buoyant force (N)" titolo="The body always displaces 5 L. Replacing a litre of oil with a litre of water increases buoyancy."}
:::
