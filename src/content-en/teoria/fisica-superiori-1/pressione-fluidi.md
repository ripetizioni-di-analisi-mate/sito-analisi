---
titolo: "Pressure in fluids at rest"
sommario: "Pressure, the hydrostatic pressure law, hydraulic presses, communicating vessels, and manometers."
---

## Definition of pressure

:::definizione{#pressione titolo="Normal force per unit area"}
If a normal force of magnitude $F_\perp$ is uniformly distributed over a surface of area $A$, the **pressure** is $p=\dfrac{F_\perp}{A}$. Only the perpendicular component of a tilted force contributes to pressure. Spreading the same force over double the area halves the pressure. Fixing the total load and fixing the pressure therefore describe two different tests.

In a fluid at rest, pressure at a point is a **scalar**. The force the fluid exerts on a small wall element is perpendicular to that wall. Its direction therefore depends on the surface. For a flat wall at uniform pressure, the total magnitude is $pA$. If pressure varies over the wall, $\dfrac{F_\perp}{A}$ is the average pressure.
:::

:::esempio{titolo="One force, two surfaces"}
A force of $60\,\mathrm N$ over $0.02\,\mathrm m^2$ gives $3000\,\mathrm{Pa}$. Spreading the same load over $0.04\,\mathrm m^2$ gives $1500\,\mathrm{Pa}$. The force stays at sixty newtons. To recover it from either pressure, multiply by its area, so $3000\cdot0.02=1500\cdot0.04=60$ in SI units.
:::

:::esempio{#pressione-media titolo="A surface under two pressures"}
A plate has two adjacent regions. The first has area $0.030\,\mathrm m^2$ and pressure $2.0\,\mathrm{kPa}$. The second has area $0.020\,\mathrm m^2$ and pressure $5.0\,\mathrm{kPa}$. The forces act from the same side. The first region contributes $60\,\mathrm N$ and the second contributes $100\,\mathrm N$, found by multiplying each pressure by its own area.

The total force is $160\,\mathrm N$, so the mean pressure across the full area is

$$
\bar p=\frac{160\,\mathrm N}{0.050\,\mathrm m^2}=3.2\,\mathrm{kPa}.
$$

The simple mean of the readings would be $3.5\,\mathrm{kPa}$, which would give $175\,\mathrm N$ when multiplied by the area. With unequal areas, each pressure is weighted by the area over which it acts. The mean pressure gives the same total force, while the local pressures describe how that force is distributed.

::grafico{linee="0,2 3,2;3,5 5,5" asintoti="x=3;y=3.2" nomi="A (dm²),p (kPa)" xmin=0 xmax=5.5 ymin=0 ymax=6 titolo="The horizontal axis shows the area accumulated from one edge, in square decimetres. The wider region carries more weight in the dashed mean."}
:::

## Units of pressure

:::osservazione{#unita titolo="Pascals and area conversions"}
One pascal is one newton per square metre. Also $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$. Since a centimetre is $10^{-2}\,\mathrm m$, a square centimetre is $10^{-4}\,\mathrm m^2$. The exponent doubles because area contains two length factors. Thus $1\,\mathrm{N/cm^2}=10^4\,\mathrm{Pa}$.

For example, on a piston of $25\,\mathrm{cm^2}$, a difference of $8\,\mathrm{kPa}$ corresponds to a net force of $8000\cdot25\cdot10^{-4}\,\mathrm N=20\,\mathrm N$. Its direction is from the higher-pressure side toward the lower-pressure side.
:::

:::esempio{#taratura-pistone titolo="Calibrating a sensor with a known force"}
A piston of area $20\,\mathrm{cm^2}$ is connected to a sensor. Its reading is zeroed before a load is added and measures only the pressure increase. A load of $8\,\mathrm N$ produces $4000\,\mathrm{Pa}$ because $20\,\mathrm{cm^2}=0.0020\,\mathrm m^2$. If a second instrument reads in $\mathrm{N/cm^2}$, it should display $0.40$, equal to $\dfrac{8}{20}$. Both readings describe the same load spread over the same area.

With the piston unchanged, the graph of pressure increase against added load passes through the origin. In these units its slope is $500\,\mathrm{Pa/N}$. A nonzero intercept, under ideal calibration conditions with the initial load excluded, indicates a possible offset in the zero reading. In that case the difference between two readings still gives the slope.

::grafico{f="0.5*x" punti="0,0,pieno;8,4,pieno" nomi="F (N),Δp (kPa)" xmin=0 xmax=10 ymin=0 ymax=6 titolo="A load of 8 N corresponds to 4 kPa. The slope in kPa/N is equivalent to 500 Pa/N."}
:::

## The hydrostatic pressure law

::::teorema{#stevino titolo="Pressure and depth"}
In a resting liquid of constant density $\rho$ with uniform gravitational field $g$, the pressure at vertical depth $h$ below a surface at pressure $p_0$ is
$$
p=p_0+\rho gh.
$$
For two points in the same liquid at depths $h_1$ and $h_2$, this gives $p_2-p_1=\rho g(h_2-h_1)$.

:::dimostrazione
Consider an imaginary vertical liquid column of area $A$ and height $h$. At the bottom, fluid underneath exerts upward force $pA$. At the top, the external pressure exerts downward force $p_0A$. The column's weight is also downward and equals $\rho Ahg$. The side forces have no vertical component. Zero vertical sum gives $pA-p_0A-\rho Ahg=0$. Divide by $A>0$, which cancels.
:::
::::

:::esempio{titolo="Pressures at two elevations"}
In water at $\rho=1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{N/kg}$, pressure rises by $10\,\mathrm{kPa}$ per metre. Two points $2$ and $5\,\mathrm m$ below the same surface differ by $30\,\mathrm{kPa}$. Horizontal separation does not affect that difference because the law uses only the vertical depth difference.
:::

::grafico{f="10*x" nomi="h (m),Δp (kPa)" punti="2,20,pieno,A;5,50,pieno,B" xmin=0 xmax=6 ymin=0 ymax=65 titolo="In water the slope is 10 kPa per metre. From A to B the depth difference is 3 m and pressure rises by 30 kPa"}

:::esempio{#densita-da-pressioni titolo="Inferring density and surface pressure"}
In a sealed vessel the liquid density and surface pressure are unknown. Two absolute sensors read $104\,\mathrm{kPa}$ at $0.50\,\mathrm m$ and $120\,\mathrm{kPa}$ at $2.50\,\mathrm m$. The liquid is uniform and $g=10\,\mathrm{N/kg}$. Taking the difference between the readings eliminates the surface pressure.

$$
\rho g=\frac{(120-104)\,\mathrm{kPa}}{(2.50-0.50)\,\mathrm m}
       =8.0\,\mathrm{kPa/m}.
$$

Dividing $8000\,\mathrm{Pa/m}$ by the gravitational field strength gives $\rho=800\,\mathrm{kg/m^3}$. Then work upwards from either point to the surface. Subtract $8.0\cdot0.50=4.0\,\mathrm{kPa}$ from the first reading to obtain $p_0=100\,\mathrm{kPa}$. Subtracting $20\,\mathrm{kPa}$ from the second gives the same intercept. With one measurement, more than one pair of density and surface pressure can fit the data. A unique pair can be found when one of these quantities is known or a second pressure is measured at another depth.

::grafico{f="100+8*x" punti="0,100,pieno;0.5,104,pieno,A;2.5,120,pieno,B" nomi="h (m),p (kPa)" xmin=0 xmax=3 ymin=94 ymax=127 titolo="The intercept is the surface pressure. Between A and B the pressure increases by 16 kPa over 2 m."}
:::

:::esempio{#spinta-su-parete titolo="Force on a vertical wall"}
A rectangular plate $0.30\,\mathrm m$ wide extends from $0.20$ to $0.80\,\mathrm m$ below the water surface. The other face is exposed to the same atmosphere acting on the surface. With gradient $10\,\mathrm{kPa/m}$, the pressure differences at the edges are $2$ and $8\,\mathrm{kPa}$.

The pressure difference varies linearly and all horizontal strips of equal height have the same area. Pairing strips equally far from the middle height gives a mean of $5\,\mathrm{kPa}$ for every pair. The mean over the whole plate is therefore $5\,\mathrm{kPa}$. The force is $5000\,\mathrm{Pa}\cdot0.30\cdot0.60\,\mathrm m^2=900\,\mathrm N$. This gives the total magnitude. Spreading the same force uniformly over the plate preserves that magnitude while changing the individual contributions.

::grafico{poligoni="0.2,0 0.8,0 0.8,8 0.2,2" linee="0.2,2 0.8,8" segmenti="0.2,5,0.8,5" punti="0.2,2,pieno;0.5,5,pieno;0.8,8,pieno" xmin=0 xmax=1 ymin=0 ymax=9 nomi="h (m),Δp (kPa)" titolo="From the top edge to the bottom edge the pressure rises from 2 to 8 kPa. The dashed line marks the 5 kPa mean."}
:::

## Absolute and gauge pressure

:::definizione{#assoluta titolo="Choosing the reference"}
**Absolute pressure** is measured relative to a vacuum. **Gauge pressure** relative to reference $p_{\mathrm{rif}}$ is $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{rif}}$. Atmospheric pressure is often the reference for an open vessel. A sealed vessel may have a pressure at the liquid surface different from atmospheric pressure.

With an atmospheric pressure of $100\,\mathrm{kPa}$ and a gradient of $10\,\mathrm{kPa/m}$, water at a depth of $1.5\,\mathrm m$ has absolute pressure $115\,\mathrm{kPa}$ and gauge pressure $15\,\mathrm{kPa}$. If a flat membrane separates atmosphere from gas at $90\,\mathrm{kPa}$ absolute, the gas has gauge pressure $-10\,\mathrm{kPa}$. The sign shows that the pressure is below the reference. Forces on the two membrane faces oppose each other, so the net force depends on their pressure difference.
:::

:::esempio{#tre-riferimenti titolo="Three readings for the same point"}
A vessel contains water. The gas above the liquid is at an absolute pressure of $103\,\mathrm{kPa}$ and the surroundings are at an absolute pressure of $98\,\mathrm{kPa}$. With gradient $10\,\mathrm{kPa/m}$, the absolute pressure $1.5\,\mathrm m$ below the surface is $118\,\mathrm{kPa}$. A sensor referenced to the surroundings therefore reads $20\,\mathrm{kPa}$. A sensor referenced to the gas inside the vessel reads $15\,\mathrm{kPa}$.

| Position | Absolute | Relative to outside | Relative to gas |
| --- | ---: | ---: | ---: |
| Outside air | 98 kPa | 0 kPa | −5 kPa |
| Inside surface | 103 kPa | 5 kPa | 0 kPa |
| At 1.5 m depth | 118 kPa | 20 kPa | 15 kPa |

Subtracting any two readings with the same reference zero gives the same difference. For example, the increase between the inside surface and the submerged sensor is $15\,\mathrm{kPa}$ both in absolute values and relative to the surroundings. The force on a wall depends on the difference between the actual pressures on its two faces. To compare readings, first express both in the same reference scale.

::grafico{f="5+10*x;10*x" legenda="\text{Outside reference};\text{Gas reference}" punti="1.5,20,pieno;1.5,15,pieno" nomi="h (m),p_rel (kPa)" xmin=0 xmax=2 ymin=0 ymax=28 titolo="The upper line is referenced to the outside air, and the other to the gas inside. Both have the same gradient."}
:::

## Pascal's principle

:::teorema{#pascal titolo="Transmitting a pressure change"}
In a confined, resting, incompressible fluid, an imposed pressure change is transmitted throughout the fluid. With the geometry fixed, the $\rho gh$ term remains constant, so the pressure at each point changes by the same amount as at the surface. In an ideal press with pistons at the same elevation, added forces satisfy $\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}$ under matching external conditions and negligible losses.

With $A_1=5\,\mathrm{cm^2}$, $A_2=25\,\mathrm{cm^2}$, and $F_1=16\,\mathrm N$, the large piston develops $80\,\mathrm N$. If the small piston advances by $5\,\mathrm{cm}$ and the liquid is incompressible, it displaces $25\,\mathrm{cm^3}$. The large piston moves out by $1\,\mathrm{cm}$ to accommodate the same volume. The area ratio increases the force and reduces the displacement.
:::

:::esempio{#corsa-e-lavoro titolo="A greater force over a shorter distance"}
In an ideal press an added load of $16\,\mathrm N$ acts on $4\,\mathrm{cm^2}$. The second piston has area $12\,\mathrm{cm^2}$. The forces considered here are those due to the pressure increase alone. Since the output area is three times larger, the added output force is $48\,\mathrm N$. For a small motion during which the added pressure stays constant, the first piston moves in by $6\,\mathrm{cm}$, displacing $24\,\mathrm{cm^3}$ of liquid. The second piston must move out by $2\,\mathrm{cm}$ to accommodate that volume.

For a constant force acting in the direction of motion, the work is the force magnitude multiplied by the distance travelled. The products of added force and travel, as magnitudes, are $16\cdot0.06\,\mathrm J$ and $48\cdot0.02\,\mathrm J$. Both are $0.96\,\mathrm J$. In general their common value is the pressure increase multiplied by the displaced volume. The equality concerns the added contribution in the ideal model. When measuring total loads at different heights, also account for the original pressures.

::grafico{assi=0 uguale=1 linee="0,3 0,0 6,0 6,3;1,3 1,0.5 3,0.5 3,3;0,2.5 1,2.5;3,2.1 6,2.1" segmenti="0,1.3,1,1.3;3,1.7,6,1.7" vettori="0.5,2.35,0.5,1.4;4.5,1.76,4.5,2.06" etichette="0.1,2.9,4 cm²;3.8,2.6,12 cm²;-0.8,1.9,6 cm;4.9,1.95,2 cm" xmin=-1 xmax=6.4 ymin=-0.3 ymax=3.45 titolo="The smaller piston moves in by 6 cm. The piston with three times the area moves out by 2 cm."}
:::

## Communicating vessels

:::teorema{#vasi titolo="Equal pressure at the same elevation"}
Two points at the same elevation in a resting, uniform, connected liquid are at equal pressure. If both arms are open to the same atmosphere and contain the same liquid, their free surfaces are therefore at the same elevation. A wider arm holds more volume per unit height while keeping the same surface level.

For immiscible liquids, compare pressures at the same elevation in the common liquid. If an oil column of density $800\,\mathrm{kg/m^3}$ is $25\,\mathrm{cm}$ tall above the interface and the opposite arm contains water of density $1000\,\mathrm{kg/m^3}$, the water rises $20\,\mathrm{cm}$ above that level. Air pressure is common and the factor $g$ cancels.
:::

:::esempio{#vasi-con-gas titolo="Two surfaces at different pressures"}
Two communicating branches contain the same water. The pressure at surface A is $106\,\mathrm{kPa}$ and at surface B it is $101\,\mathrm{kPa}$. With $\rho g=10\,\mathrm{kPa/m}$, use the height of surface A as the comparison level in the liquid. In branch A the pressure there is directly $106\,\mathrm{kPa}$. In branch B move down from its surface to the height of A. This requires a hydrostatic increase of $5\,\mathrm{kPa}$, so surface B stands $0.50\,\mathrm m$ higher.

To find how far each branch moved from a common initial level, also balance volumes. If the area of A is twice that of B, and the liquid volume stays constant, B rises twice as far as A falls. The rise and fall add up to the final level difference. If $x$ is the fall in A, then $x+2x=0.50\,\mathrm m$. A therefore falls by about $0.17\,\mathrm m$ and B rises by about $0.33\,\mathrm m$.

::grafico{assi=0 uguale=1 poligoni="0,0.7 1.4,0.7 1.4,0.35 2.5,0.35 2.5,1.2 3.2,1.2 3.2,0 0,0" linee="0,1.8 0,0 3.2,0 3.2,1.8;1.4,1.8 1.4,0.35 2.5,0.35 2.5,1.8;0,0.7 1.4,0.7;2.5,1.2 3.2,1.2" segmenti="1.4,0.7,2.85,0.7;2.2,1.2,2.5,1.2;2.2,0.7,2.2,1.2" etichette="0.08,1.5,A 106 kPa;2.1,1.95,B 101 kPa;1.49,0.97,0.50 m" xmin=-0.35 xmax=3.8 ymin=-0.24 ymax=2.25 titolo="The higher pressure lowers surface A. In branch B the pressures are compared 0.50 m below its surface."}
:::

## Superposed layers

:::osservazione{#strati titolo="Adding hydrostatic contributions"}
Each uniform layer contributes $\rho_i g h_i$. Starting at the surface and moving downward, add the increases through the layers above the required point. In a vessel with $0.5\,\mathrm m$ of oil of density $800\,\mathrm{kg/m^3}$ above $1\,\mathrm m$ of water with $g=10\,\mathrm{N/kg}$, the oil adds $4\,\mathrm{kPa}$ and water adds $10\,\mathrm{kPa}$. The bottom is therefore $14\,\mathrm{kPa}$ above the surface pressure.

At the flat interface of resting liquids, neglecting surface tension, pressure is continuous. Its slope against depth changes because pressure rises faster in the denser layer. The steeper section in the figure represents water.
:::

::grafico{linee="0,0 0.5,4 1.5,14" punti="0.5,4,pieno,I;1.5,14,pieno,B" nomi="h (m),Δp (kPa)" xmin=0 xmax=1.65 ymin=0 ymax=16 titolo="I is the interface between oil and water. Pressure is continuous and its slope increases in water"}

:::esempio{#spessori-da-pressione titolo="Finding two layer thicknesses from one reading"}
A vessel contains layers of oil and water with a total thickness of $1.50\,\mathrm m$. The pressure at the bottom exceeds the surface pressure by $13.2\,\mathrm{kPa}$. The gradient in oil is $8\,\mathrm{kPa/m}$ and that in water is $10\,\mathrm{kPa/m}$. Let $x$ be the oil thickness in metres. The same data give a water thickness of $1.50-x$.

$$
\begin{aligned}
8x+10(1.50-x)&=13.2\\
15.0-2x&=13.2 \\
x&=0.90.
\end{aligned}
$$

The oil layer is $0.90\,\mathrm m$ thick and the water layer is $0.60\,\mathrm m$ thick. Their contributions are $7.2\,\mathrm{kPa}$ and $6.0\,\mathrm{kPa}$. A vessel containing only oil would give $12.0\,\mathrm{kPa}$, while one containing only water would give $15.0\,\mathrm{kPa}$. This comparison checks whether the reading is feasible before solving. A value outside this range would be incompatible with two positive thicknesses. At either endpoint, one layer is absent.

::grafico{linee="0,0 0.9,7.2 1.5,13.2" f="8*x;10*x" legenda="\text{Oil only};\text{Water only}" xmin=0 xmax=1.6 ymin=0 ymax=16.5 nomi="h (m),Δp (kPa)" punti="0.9,7.2,pieno,I;1.5,12,vuoto;1.5,13.2,pieno;1.5,15,vuoto" titolo="The piecewise line initially follows the oil line and bends at I. At the bottom the result lies between the two single-liquid values."}
:::

## Manometers and barometers

:::osservazione{#manometri titolo="Columns that measure pressure"}
In a U-tube manometer with uniform liquid and gas of negligible density, the level difference gives magnitude $\rho g\Delta h$ for the pressure difference. The side with the lower surface has higher pressure, since more external pressure is needed to support the connected column. With water, $g=10\,\mathrm{N/kg}$, and a difference of $12\,\mathrm{cm}$, the magnitude is $1200\,\mathrm{Pa}$.

In an ideal barometer, pressure above the column is negligible compared with atmospheric pressure. Its height $h$ then satisfies $p_{\mathrm{atm}}=\rho gh$. A denser liquid gives a shorter column at equal pressure. A less dense fluid gives a larger level difference for the same pressure difference, with a different useful measurement range.
:::

:::esempio{#barometro-pressione-residua titolo="Residual pressure in a barometer"}
A barometer contains a liquid of density $12500\,\mathrm{kg/m^3}$, and $g=10\,\mathrm{N/kg}$ is used. Gas at the top of the column has an absolute pressure of $3\,\mathrm{kPa}$. The column is $0.80\,\mathrm m$ high. Starting from the gas pressure and moving down to the reservoir, the hydrostatic increase is $100\,\mathrm{kPa}$. At the level of the reservoir surface the liquid is also in contact with the atmosphere. The external pressure is therefore $103\,\mathrm{kPa}$.

A calculation calibrated for a vacuum would attribute the whole reading to the column and underestimate atmospheric pressure by $3\,\mathrm{kPa}$. At the same atmospheric pressure, the gas reduces the weight of liquid that can be supported. The equation uses the vertical height even if the tube is tilted. In precise measurements the pressure at the top must be known at the measurement temperature, since vapour from the liquid can also contribute.

::grafico{f="125*x;3+125*x" legenda="\text{Vacuum above};\text{Residual gas}" xmin=0 xmax=1 ymin=0 ymax=132 nomi="h (m),p (kPa)" punti="0.8,100,vuoto;0.8,103,pieno" segmenti="0.8,0,0.8,100;0.65,100,0.8,100;0.8,103,0.82,122" etichette="0.52,101,100 kPa;0.83,125,103 kPa" titolo="At 0.80 m the atmosphere is at 103 kPa with residual gas. The line starting at vacuum would give 100 kPa."}
:::
