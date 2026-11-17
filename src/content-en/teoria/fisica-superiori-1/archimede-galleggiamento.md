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
Consider the volume of fluid present before the body is inserted. This fluid is stationary, so pressure forces on its boundary balance its weight. Replace it in thought with a body of equal immersed shape. Because the boundary pressures are the same, the resultant pressure force is the one that supported the replaced fluid. This shows why the fluid density enters the calculation.
:::
::::

:::esempio{titolo="Pressure difference across a prism"}
A vertical prism entirely in water of density $1000\,\mathrm{kg/m^3}$ has horizontal area $A=0.02\,\mathrm m^2$ and height $h=0.3\,\mathrm m$. With $g=10\,\mathrm{N/kg}$, pressure on the bottom is $3000\,\mathrm{Pa}$ higher than on top. Side forces are horizontal and balance. The vertical resultant is
$$
F_A=(3000\,\mathrm{Pa})(0.02\,\mathrm m^2)=60\,\mathrm N.
$$
The volume $Ah$ is $0.006\,\mathrm m^3$, or $6\,\mathrm L$. Six litres of water indeed weigh sixty newtons.
:::

::grafico{assi=0 uguale=1 linee="-2,2 4,2" poligoni="0,0 2,0 2,1.5 0,1.5" vettori="1,2.1,1,1.5,p₁ A;1,-1.35,1,0,p₂ A" etichette="2.8,0.75,h" xmin=-3 xmax=5 ymin=-2 ymax=3 titolo="Submerged prism. The force on the bottom face is larger. The arrows show only the vertical components"}

## Immersed volume and inverse problems

:::osservazione{#inverse titolo="Identify the volume that displaces fluid"}
For a rigid, watertight body that is fully submerged, the immersed part occupies its outer volume $V$. A partially submerged body has $V_i<V$. For a hollow sealed box, use the immersed external volume. If an opening allows water into part of the cavity, that part no longer excludes the liquid.

For a buoyant force of $72\,\mathrm N$ in oil of density $800\,\mathrm{kg/m^3}$ with $g=10\,\mathrm{N/kg}$, the displaced volume is $72/(800\cdot10)\,\mathrm m^3=0.009\,\mathrm m^3$. This is $9\,\mathrm L$, because $1\,\mathrm L=10^{-3}\,\mathrm m^3$. If part of the body protrudes, buoyancy alone does not determine the total volume.
:::

## Apparent weight

:::teorema{#apparente titolo="Tension measured by a spring scale"}
A body suspended from a spring scale above it, stationary and immersed with no other contacts, satisfies $T+F_A=P$. The reading is $T=P-F_A$ provided the line remains taut. The reading under these conditions is called **apparent weight**. Gravitational weight is unchanged because mass and field stay the same.

If a solid weighs $90\,\mathrm N$ with air buoyancy neglected and reads $60\,\mathrm N$ when fully submerged in water, buoyancy is $30\,\mathrm N$. The solid's weight and apparent loss are respectively $\rho_c Vg$ and $\rho_f Vg$. Dividing gives $\rho_c/\rho_f=P/(P-T)=3$. The common volume cancels because immersion is complete.
:::

## Free flotation

:::teorema{#galleggiamento titolo="Buoyancy equals weight"}
A body floating at rest under weight and buoyancy alone satisfies $F_A=P$. For part of the body to remain above water, its weight must be below the buoyancy for complete immersion. If weight exceeds that buoyancy, no admissible submerged volume balances it. If the two forces match exactly at complete immersion, the body can remain suspended in an ideal uniform fluid.

A boat weighing $5000\,\mathrm N$ receives $5000\,\mathrm N$ of buoyancy while floating. Denser water gives the same force for a smaller displaced volume. In this comparison the weight is fixed and the immersed volume adjusts.
:::

## Immersed fraction

::::teorema{#frazione titolo="The density ratio"}
For a body floating freely in a uniform liquid, the immersed fraction is
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f},
$$
where $\rho_c=m/V$ is the mean body density, based on the outer volume that would exclude liquid in complete immersion.

:::dimostrazione
Equilibrium sets buoyancy $\rho_f gV_i$ equal to weight $mg=\rho_c Vg$. Divide by the positive product $\rho_f gV$. The fraction above water is one minus the submerged fraction.
:::
::::

:::esempio{titolo="Submerged and exposed volumes"}
In water of density $1000\,\mathrm{kg/m^3}$ a block of density $600\,\mathrm{kg/m^3}$ submerges six tenths of its volume. If the total volume is $20\,\mathrm L$, then $12\,\mathrm L$ is submerged and $8\,\mathrm L$ is above water. For a vertical prism with constant cross-section the same fraction applies to heights. When the cross-section varies, use the volumes directly.
:::

::grafico{f="x" nomi="ρc / ρf,Vᵢ / V" punti="0.6,0.6,pieno,A;1,1,pieno,B" xmin=0 xmax=1 ymin=0 ymax=1.1 titolo="The submerged fraction grows with relative density. B marks the limit of complete immersion"}

## Loads on floats

:::teorema{#carichi titolo="Total mass and available volume"}
For a rigid float of mass $m_0$ carrying a load of mass $m_c$ kept above water, equilibrium gives $\rho_f V_i=m_0+m_c$. The extra volume required for an added mass $\Delta m$ is $\Delta V_i=\Delta m/\rho_f$. If the largest displaceable volume is $V_{\max}$, the limiting payload in the model is $\rho_f V_{\max}-m_0$.

With $V_{\max}=80\,\mathrm L$ in water of density $1\,\mathrm{kg/L}$ and a float mass of $24\,\mathrm{kg}$, the limiting payload is $56\,\mathrm{kg}$. If $10\,\mathrm L$ must remain above water, the maximum submerged volume becomes $70\,\mathrm L$ and the payload drops to $46\,\mathrm{kg}$.
:::

## Constrained bodies

:::osservazione{#vincoli titolo="A cord can pull upward or downward"}
For a body that would tend to sink, a cord anchored above adds upward tension. If the completely submerged body would tend to rise, a cord attached below can add downward tension. Set up the balance using the direction of the actual constraint. With $F_A=28\,\mathrm N$ and $P=19\,\mathrm N$, the required tension is $9\,\mathrm N$ downward. A cord attached above cannot provide it.
:::

## Comparing situations

:::osservazione{#confronti titolo="Identify what changes"}
For a rigid body fully immersed in a uniform liquid, away from walls and the bottom, different depths give the same $V_i$ and hence the same buoyancy. Absolute pressures can change while the difference between the upper and lower parts of the body stays fixed. If fluid density or submerged volume changes, the conclusion needs reconsidering.

At equal immersed volume in the same fluid, bodies of different mass get equal buoyancy. At equal weight in free flotation, two liquids of different density give equal buoyancy at different submerged volumes. Before comparing buoyancies, decide which quantity the experiment holds fixed.
:::
