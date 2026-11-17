---
titolo: "Archimedes' principle and flotation"
sommario: "Immersed volume, apparent weight, density, load capacity, and constrained bodies."
---

## Archimedes' principle

::::teorema{#archimede titolo="The weight of displaced fluid"}
A body immersed in a resting fluid and exposed to fluid pressure over its immersed surface experiences an upward resultant known as **buoyancy**. Its magnitude equals the weight of the fluid that would occupy the space replaced by the immersed part. For uniform fluid density $\rho_f$ and gravitational field $g$,
$$
F_A=\rho_f gV_i,
$$
where $V_i$ is the immersed volume excluding the fluid. The air buoyancy on the exposed part can be neglected when it is small compared with the liquid buoyancy.

:::dimostrazione
Consider the volume of fluid present before the body is inserted. This fluid is stationary, so pressure forces on its boundary balance its weight. If the volume reaches the free surface, use pressure relative to atmospheric pressure. The gauge pressure at the free surface is zero. In thought, replace the fluid with a body of the same submerged shape. Because the pressures on the wetted surface are the same, the resultant pressure force is the one that supported the replaced fluid. This shows why the fluid density enters the calculation.
:::
::::

:::esempio{titolo="Pressure difference across a prism"}
A vertical prism entirely in water of density $1000\,\mathrm{kg/m^3}$ has horizontal area $A=0.02\,\mathrm m^2$ and height $h=0.3\,\mathrm m$. With $g=10\,\mathrm{N/kg}$, pressure on the bottom is $3000\,\mathrm{Pa}$ higher than on top. Side forces are horizontal and balance. The vertical resultant is
$$
F_A=(3000\,\mathrm{Pa})(0.02\,\mathrm m^2)=60\,\mathrm N.
$$
The volume $Ah$ is $0.006\,\mathrm m^3$, or $6\,\mathrm L$. Six litres of water indeed weigh sixty newtons.
:::

::grafico{assi=0 uguale=1 linee="-2,2 4,2" poligoni="0,0 2,0 2,1.5 0,1.5" vettori="1,1.9,1,1.5,;1,-1.35,1,0,p₂ A" etichette="2.8,0.75,h;1.25,1.7,p₁ A" xmin=-3 xmax=5 ymin=-2 ymax=3 titolo="Submerged prism. The force on the bottom face is larger. The arrows show only the vertical components"}

:::esempio{titolo="Lowering a prism without turning it"}
In the example of the prism, the two horizontal faces might lie at depths of $0.15\,\mathrm m$ and $0.45\,\mathrm m$. Their pressures above the surface pressure are $1500\,\mathrm{Pa}$ and $4500\,\mathrm{Pa}$, respectively. Lowering the prism by $0.20\,\mathrm m$ adds $2000\,\mathrm{Pa}$ to both readings.
$$
\begin{aligned}
\Delta p_1&=4500\,\mathrm{Pa}-1500\,\mathrm{Pa}=3000\,\mathrm{Pa},\\
\Delta p_2&=6500\,\mathrm{Pa}-3500\,\mathrm{Pa}=3000\,\mathrm{Pa}.
\end{aligned}
$$
Pressure increases at the same rate throughout the liquid. As long as the whole object remains wetted, the pressures at the upper and lower faces therefore increase by the same amount and their net vertical force keeps the same magnitude. This reasoning relies on the uniform liquid density and the rigidity of the prism. If the body compresses, both the distance between the faces and the submerged volume can change.

::grafico{f="10*x" punti="0.15,1.5,pieno,A;0.45,4.5,pieno,B;0.35,3.5,pieno,C;0.65,6.5,pieno,D" xmin=0 xmax=0.78 ymin=0 ymax=8 nomi="depth (m),p_rel (kPa)" titolo="The faces start at A and B. After lowering, they are at C and D. The pressure difference remains 3 kPa."}
:::

## Immersed volume and inverse problems

:::osservazione{#inverse titolo="Identify the volume that displaces fluid"}
For a rigid, watertight body that is fully submerged, the immersed part occupies its outer volume $V$. A partially submerged body has $V_i<V$. For a hollow sealed box, use the immersed external volume. If an opening allows water into part of the cavity, that part no longer excludes the liquid.

For a buoyant force of $72\,\mathrm N$ in oil of density $800\,\mathrm{kg/m^3}$ with $g=10\,\mathrm{N/kg}$, the displaced volume is $\dfrac{72}{800\cdot10}\,\mathrm m^3=0.009\,\mathrm m^3$. This is $9\,\mathrm L$, because $1\,\mathrm L=10^{-3}\,\mathrm m^3$. If part of the body protrudes, buoyancy alone does not determine the total volume.

In an overflow-vessel experiment, the volume collected equals the volume displaced if the liquid is already at the outlet before immersion. If the initial level is lower, some of the displacement raises the liquid to the outlet. To find the submerged volume, add the volume needed to reach the outlet and the volume collected.
:::

:::esempio{titolo="A sealed cavity and a flooded cavity"}
Two shells of the same type have an external volume of $5\,\mathrm L$ and a cavity of $3\,\mathrm L$. They are fully submerged in water, with $\rho_f=1\,\mathrm{kg/L}$ and $g=10\,\mathrm{N/kg}$. The sealed shell excludes all $5\,\mathrm L$. The second shell has openings, and at equilibrium its cavity is full of water connected to the surrounding liquid. Buoyancy on that shell thus comes from the $2\,\mathrm L$ occupied by the shell material. The two buoyant forces are $50\,\mathrm N$ and $20\,\mathrm N$, respectively.

The result for the open shell assumes that the water inside remains part of the surrounding liquid. If a system is defined to include both the shell and the water inside it, the boundary used for calculating forces changes and the internal water contributes to the weight of the system. A consistent balance is still possible, provided the weight and the contact surface refer to the same system.

::grafico{assi=0 uguale=1 linee="-0.5,3 7.5,3;0,0 3,0 3,2 0,2 0,0;5.32,2 4,2 4,0 7,0 7,2 5.68,2;5.32,2 5.32,1.58 4.4,1.58 4.4,0.42 6.6,0.42 6.6,1.58 5.68,1.58 5.68,2" poligoni="0.4,0.42 2.6,0.42 2.6,1.58 0.4,1.58" etichette="1.5,1,air;5.5,1,water;5.5,2.35,opening" xmin=-0.65 xmax=7.63 ymin=-0.55 ymax=3.3 titolo="The cavities have the same volume. The open cavity is connected to the surrounding liquid."}
:::

## Apparent weight

:::teorema{#apparente titolo="Tension measured by a spring scale"}
A body suspended from a spring scale above it, stationary and immersed with no other contacts, satisfies $T+F_A=P$. The reading is $T=P-F_A$ provided the line remains taut. The reading under these conditions is called **apparent weight**. Gravitational weight is unchanged because mass and field stay the same.

If a solid weighs $90\,\mathrm N$ with air buoyancy neglected and the spring scale reads $60\,\mathrm N$ when the solid is fully submerged in water, buoyancy is $30\,\mathrm N$. The solid's weight and apparent loss are respectively $\rho_c Vg$ and $\rho_f Vg$. Dividing gives $\dfrac{\rho_c}{\rho_f}=\dfrac{P}{P-T}=3$. The common volume cancels because immersion is complete.
:::

:::osservazione{#reazione-bilancia titolo="The force passed on to the vessel"}
A vessel containing water sits on a scale. A body held still by an independent support is immersed without touching the vessel or spilling water. The water pushes up on the body. By Newton's third law, the body exerts an equal downward force on the water. The scale therefore measures a force that is $F_A$ higher than its reading with the body out of the liquid.

If the scale displays mass, the reading increases by $\Delta m=\dfrac{F_A}{g}$. The weight of the water and vessel has stayed the same. The external support bears the part of the body's weight that buoyancy does not balance.
:::

:::esempio{titolo="Reading a spring scale until its string goes slack"}
A body weighs $45\,\mathrm N$ and has an external volume of $5\,\mathrm L$. It is gradually submerged in water, with $\rho_f=1\,\mathrm{kg/L}$ and $g=10\,\mathrm{N/kg}$. The spring scale reading drops by $10\,\mathrm N$ for each additional litre under water. It reaches zero when the buoyant force is $45\,\mathrm N$, which occurs at $V_i=4.5\,\mathrm L$.

Applying the same formula at $5\,\mathrm L$ would give $-5\,\mathrm N$. The sign shows that complete submersion requires a downward force of $5\,\mathrm N$ to maintain equilibrium. A spring scale above the body can pull only upwards and its string goes slack. A different restraint is needed to hold the body any farther under water.

::grafico{linee="0,45 4.5,0" punti="0,45,pieno,A;4.5,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=52 nomi="Vᵢ (L),tension (N)" titolo="The line ends at 4.5 L, where the string goes slack. At larger submerged volumes it cannot maintain equilibrium."}
:::

:::osservazione{titolo="When buoyancy from air also matters"}
When a stationary body is weighed in air, the scale reads $T_\mathrm{aria}=P-\rho_\mathrm{aria} Vg$. In water, with the body fully submerged and free of contacts, it reads $T_\mathrm{acqua}=P-\rho_\mathrm{acqua}Vg$. The difference between the readings is therefore
$$
T_\mathrm{aria}-T_\mathrm{acqua}=(\rho_\mathrm{acqua}-\rho_\mathrm{aria})Vg.
$$
For a body of volume $0.005\,\mathrm m^3$, with $g=10\,\mathrm{N/kg}$ and water and air densities of $1000$ and $1.2\,\mathrm{kg/m^3}$, respectively, the difference is $49.94\,\mathrm N$. Buoyancy from water alone is $50\,\mathrm N$. A scale with a resolution of $1\,\mathrm N$ cannot distinguish the $0.06\,\mathrm N$ discrepancy. A reading to the nearest hundredth of a newton would show the discrepancy if the whole difference were attributed to buoyancy from the water.
:::

## Free flotation

:::teorema{#galleggiamento titolo="Buoyancy equals weight"}
A body floating at rest under weight and buoyancy alone satisfies $F_A=P$. For part of the body to remain above water, its weight must be below the buoyancy for complete immersion. If weight exceeds that buoyancy, no admissible submerged volume balances it. If the two forces match exactly at complete immersion, the body can remain suspended in an ideal uniform fluid.

A boat weighing $5000\,\mathrm N$ receives $5000\,\mathrm N$ of buoyancy while floating. Denser water gives the same force for a smaller displaced volume. In this comparison the weight is fixed and the immersed volume adjusts.
:::

:::esempio{titolo="Three blocks of the same volume"}
Three rigid blocks of volume $3\,\mathrm L$ are released from rest while fully submerged in water, away from the bottom and with no strings attached. Air above the surface has negligible effects. With $g=10\,\mathrm{N/kg}$, the initial buoyant force is $30\,\mathrm N$ for each block. The outcomes differ according to how their weights compare with those $30\,\mathrm N$.

| Mass | Weight | Outcome in the ideal model |
| --- | --- | --- |
| $2.1\,\mathrm{kg}$ | $21\,\mathrm N$ | Rises and can float at the surface. |
| $3.0\,\mathrm{kg}$ | $30\,\mathrm N$ | Remains in equilibrium while submerged. |
| $3.6\,\mathrm{kg}$ | $36\,\mathrm N$ | Sinks. |

For the first block, buoyancy initially exceeds weight. As it reaches the surface, it can displace less water. The buoyant force is exactly $21\,\mathrm N$ when its submerged volume drops to $2.1\,\mathrm L$. The second block needs no contact force to remain submerged. For the third block the buoyant force is already at its maximum, leaving a further $6\,\mathrm N$ of upward force needed to balance its weight.

::grafico{linee="0,0 3,30;0,21 3,21;0,30 3,30;0,36 3,36" punti="2.1,21,pieno,A;3,30,pieno,B" etichette="0.7,38,P = 36 N" xmin=0 xmax=3.3 ymin=0 ymax=41 nomi="submerged volume (L),force (N)" titolo="The horizontal lines show the three weights. The rising line meets them only at A and B."}
:::

:::osservazione{titolo="Small vertical displacements from equilibrium"}
With the free surface held at a fixed level, lower a float by $\Delta h$. It has vertical walls and a horizontal cross-sectional area $A$. The float remains partially submerged. Its weight remains constant, while its buoyant force increases by $\rho_f g A\Delta h$. On release the initial net force points upwards because the two forces balanced before the displacement. Raising the float reduces buoyancy and gives a downward net force.

For $A=0.04\,\mathrm m^2$ and a $2\,\mathrm{cm}$ displacement downwards in water, the float displaces an extra $0.0008\,\mathrm m^3$. On release the net force is $8\,\mathrm N$ upwards with $g=10\,\mathrm{N/kg}$. The equilibrium is stable in this model for small vertical displacements. Stability against rotations also depends on where the weight and buoyant force act.
:::

## Immersed fraction

::::teorema{#frazione titolo="The density ratio"}
For a body floating freely in a uniform liquid, the immersed fraction is
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f},
$$
where $\rho_c=\dfrac{m}{V}$ is the mean body density, based on the outer volume that would exclude liquid in complete immersion.

:::dimostrazione
Equilibrium sets buoyancy $\rho_f gV_i$ equal to weight $mg=\rho_c Vg$. Divide by the positive product $\rho_f gV$. The fraction above water is one minus the submerged fraction.
:::
::::

:::esempio{titolo="Submerged and exposed volumes"}
In water of density $1000\,\mathrm{kg/m^3}$ a block of density $600\,\mathrm{kg/m^3}$ submerges six tenths of its volume. If the total volume is $20\,\mathrm L$, then $12\,\mathrm L$ is submerged and $8\,\mathrm L$ is above water. For a vertical prism with constant cross-section the same fraction applies to heights. When the cross-section varies, use the volumes directly.
:::

::grafico{f="x" nomi="ρc / ρf,Vᵢ / V" punti="0.6,0.6,pieno,A;1,1,pieno,B" xmin=0 xmax=1 ymin=0 ymax=1.1 titolo="The submerged fraction grows with relative density. B marks the limit of complete immersion"}

:::esempio{titolo="Cross-sectional area and submerged fraction"}
An upright float consists of two sections stacked one above the other. The lower $10\,\mathrm{cm}$ have a horizontal cross-sectional area of $100\,\mathrm{cm^2}$ and the upper $10\,\mathrm{cm}$ have an area of $200\,\mathrm{cm^2}$. Their volumes are therefore $1\,\mathrm L$ and $2\,\mathrm L$. If the float has a mass of $2\,\mathrm{kg}$, it displaces $2\,\mathrm L$ to stay afloat in water.

Reaching that volume takes the entire lower section, which provides the first litre. A further litre must come from the upper section. Each centimetre in that section accounts for $200\,\mathrm{cm^3}=0.2\,\mathrm L$, so another $5\,\mathrm{cm}$ is needed. The submerged height is $15\,\mathrm{cm}$ out of $20\,\mathrm{cm}$, or three quarters. The submerged volume is two thirds of the total. The slope doubles at the change in cross-sectional area on the graph.

::grafico{linee="0,0 10,1 20,3" punti="10,1,pieno;15,2,pieno,A;20,3,pieno" xmin=0 xmax=22 ymin=0 ymax=3.6 nomi="submerged height (cm),submerged volume (L)" titolo="Each submerged centimetre accounts for 0.1 L in the lower section and 0.2 L in the upper section."}
:::

## Loads on floats

:::teorema{#carichi titolo="Total mass and available volume"}
For a rigid float of mass $m_0$ carrying a load of mass $m_c$ kept above water, equilibrium gives $\rho_f V_i=m_0+m_c$. The extra volume required for an added mass $\Delta m$ is $\Delta V_i=\dfrac{\Delta m}{\rho_f}$. If the largest displaceable volume is $V_{\max}$, the limiting payload in the model is $\rho_f V_{\max}-m_0$.

With $V_{\max}=80\,\mathrm L$ in water of density $1\,\mathrm{kg/L}$ and a float mass of $24\,\mathrm{kg}$, the limiting payload is $56\,\mathrm{kg}$. If $10\,\mathrm L$ must remain above water, the maximum submerged volume becomes $70\,\mathrm L$ and the payload drops to $46\,\mathrm{kg}$.
:::

:::esempio{titolo="The weight and buoyancy of a load"}
A watertight platform has an external volume of $24\,\mathrm L$ and a mass of $12\,\mathrm{kg}$, and carries an $8\,\mathrm{kg}$ load. The system as a whole displaces $20\,\mathrm L$ of water. If the load stays dry, the platform provides all $20\,\mathrm L$ of displacement and has $4\,\mathrm L$ above the surface. To keep $5\,\mathrm L$ above the surface, the dry load must be reduced to $7\,\mathrm{kg}$.

Suppose the original $8\,\mathrm{kg}$ load is suspended from the platform and displaces $1\,\mathrm L$ of water while fully submerged. The system still has the same total mass. The load provides one litre of displacement. The platform therefore displaces $19\,\mathrm L$ and keeps $5\,\mathrm L$ above the surface. The weight of the load is the same. What changes is the share of the total buoyant force acting directly on the load.

::grafico{linee="0,12 12,0" punti="7,5,pieno,A;8,4,pieno,B" xmin=0 xmax=15.5 ymin=0 ymax=13.5 nomi="dry load (kg),volume above water (L)" titolo="With a dry load, A satisfies the 5 L margin. The load at B leaves one litre less above the surface."}

::grafico{assi=0 linee="-0.4,0 7,0;5.4,-1.3 5.4,-2" poligoni="0,-1.4 2.25,-1.4 2.25,0.5 0,0.5;1,0.5 1.8,0.5 1.8,1.1 1,1.1;4.3,-1.3 6.55,-1.3 6.55,0.6 4.3,0.6;5,-2.48 5.8,-2.48 5.8,-2 5,-2" etichette="1.13,0.25,4 L;5.42,0.3,5 L" xmin=-0.65 xmax=7.2 ymin=-2.85 ymax=1.45 titolo="On the left, the platform displaces all the water. On the right, the load contributes 1 L of displacement."}
:::

## Constrained bodies

:::osservazione{#vincoli titolo="A cord can pull upward or downward"}
For a body that would tend to sink, a cord anchored above adds upward tension. If the completely submerged body would tend to rise, a cord attached below can add downward tension. Set up the balance using the direction of the actual constraint. With $F_A=28\,\mathrm N$ and $P=19\,\mathrm N$, the required tension is $9\,\mathrm N$ downward. A cord attached above cannot provide it.
:::

:::esempio{titolo="Finding the net force before choosing a restraint"}
A fully submerged block experiences a buoyant force of $32\,\mathrm N$ and weighs $22\,\mathrm N$. Take upwards as positive. Before attaching a restraint, the contributions have opposite signs and sum to $+10\,\mathrm N$. The restraint must supply $-10\,\mathrm N$ to bring the total back to zero.

A string attached below the block pulls in the required direction. If the block were attached to two strings, one above and one below, the equations would give only that the lower string must pull with $10\,\mathrm N$ more force than the upper one. Finding the two tensions separately would require another piece of information, such as a spring scale reading on one of the strings.

::grafico{assi=0 uguale=1 linee="-2,-2.8 4,-2.8;2,-2.8 2,0" poligoni="-0.7,-0.45 2.4,-0.45 2.4,0.45 -0.7,0.45" vettori="0,0,0,3.2,F_A;0.8,0,0.8,-2.2,P;2,0,2,-1,T" xmin=-2.2 xmax=4.3 ymin=-3 ymax=3.7 titolo="The buoyant force is 32 N upwards. Weight and lower-string tension are 22 N and 10 N downwards."}
:::

## Comparing situations

:::osservazione{#confronti titolo="Identify what changes"}
For a rigid body fully immersed in a uniform liquid, away from walls and the bottom, different depths give the same $V_i$ and hence the same buoyancy. Absolute pressures can change while the difference between the upper and lower parts of the body stays fixed. If fluid density or submerged volume changes, the conclusion needs reconsidering.

At equal immersed volume in the same fluid, bodies of different mass get equal buoyancy. At equal weight in free flotation, two liquids of different density give equal buoyancy at different submerged volumes. Before comparing buoyancies, decide which quantity the experiment holds fixed.
:::

:::esempio{titolo="Crossing the boundary between two liquids at rest"}
A watertight body is fully submerged across the boundary between oil of density $0.8\,\mathrm{kg/L}$ and water of density $1\,\mathrm{kg/L}$. Its external volume is $5\,\mathrm L$. If it excludes $2\,\mathrm L$ of water, it excludes $3\,\mathrm L$ of oil. With surface tension neglected, the weight of displaced liquid is the sum of the weights of the two displaced portions. With $g=10\,\mathrm{N/kg}$, the buoyant force is
$$
F_A=(2\cdot1+3\cdot0.8)\cdot10\,\mathrm N=44\,\mathrm N.
$$
Transferring one litre of displacement from the oil to the water increases buoyancy by $2\,\mathrm N$. The total buoyant force can therefore change as the body moves vertically across the interface, even at constant total submerged volume. If a single density is used, it must be the average weighted by the displaced volumes in the two liquids.

::grafico{linee="0,40 5,50" punti="0,40,pieno;2,44,pieno,A;5,50,pieno" xmin=0 xmax=5.5 ymin=36 ymax=53 nomi="volume in water (L),buoyant force (N)" titolo="The body always displaces 5 L. Replacing a litre of oil with a litre of water increases buoyancy."}
:::
