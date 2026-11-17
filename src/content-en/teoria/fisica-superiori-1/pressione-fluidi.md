---
titolo: "Pressure in fluids at rest"
sommario: "Pressure, the hydrostatic pressure law, hydraulic presses, communicating vessels, and manometers."
---

## Definition of pressure

:::definizione{#pressione titolo="Normal force per unit area"}
If a normal force of magnitude $F_\perp$ is uniformly distributed over a surface of area $A$, the **pressure** is $p=\dfrac{F_\perp}{A}$. Only the perpendicular component of a tilted force contributes to pressure. Spreading the same force over double the area halves the pressure. Fixing the total load and fixing the pressure therefore describe two different tests.

In a fluid at rest, pressure at a point is a **scalar**. The force the fluid exerts on a small wall element is perpendicular to that wall. Its direction therefore depends on the surface. For a flat wall at uniform pressure, the total magnitude is $pA$. If pressure varies over the wall, $F_\perp/A$ is the average pressure.
:::

:::esempio{titolo="One force, two surfaces"}
A force of $60\,\mathrm N$ over $0.02\,\mathrm m^2$ gives $3000\,\mathrm{Pa}$. Spreading the same load over $0.04\,\mathrm m^2$ gives $1500\,\mathrm{Pa}$. The force stays at sixty newtons. To recover it from either pressure, multiply by its area, so $3000\cdot0.02=1500\cdot0.04=60$ in SI units.
:::

## Units of pressure

:::osservazione{#unita titolo="Pascals and area conversions"}
One pascal is one newton per square metre. Also $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$. Since a centimetre is $10^{-2}\,\mathrm m$, a square centimetre is $10^{-4}\,\mathrm m^2$. The exponent doubles because area contains two length factors. Thus $1\,\mathrm{N/cm^2}=10^4\,\mathrm{Pa}$.

For example, a difference of $8\,\mathrm{kPa}$ across a piston of $25\,\mathrm{cm^2}$ corresponds to a net force of $8000\cdot25\cdot10^{-4}\,\mathrm N=20\,\mathrm N$. Its direction is from the higher-pressure side toward the lower-pressure side.
:::

## The hydrostatic pressure law

::::teorema{#stevino titolo="Pressure and depth"}
In a resting liquid of constant density $\rho$ with uniform gravitational field $g$, the pressure at vertical depth $h$ below a surface at pressure $p_0$ is
$$
p=p_0+\rho gh.
$$
For two points in the same liquid at depths $h_1$ and $h_2$, this gives $p_2-p_1=\rho g(h_2-h_1)$.

:::dimostrazione
Consider an imaginary vertical liquid column of area $A$ and height $h$. At the bottom, fluid underneath exerts upward force $pA$. At the top, the external pressure exerts downward force $p_0A$. The column's weight is also downward and equals $\rho Ahg$. The side forces have no vertical component. Zero vertical sum gives $pA-p_0A-\rho Ahg=0$. Divide by the positive area $A$, which cancels.
:::
::::

:::esempio{titolo="Pressures at two elevations"}
In water at $\rho=1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{N/kg}$, pressure rises by $10\,\mathrm{kPa}$ per metre. Two points $2$ and $5\,\mathrm m$ below the same surface differ by $30\,\mathrm{kPa}$. Horizontal separation does not affect that difference because the law uses only the vertical depth difference.
:::

::grafico{f="10*x" nomi="h (m),Δp (kPa)" punti="2,20,pieno,A;5,50,pieno,B" xmin=0 xmax=6 ymin=0 ymax=65 titolo="In water the slope is 10 kPa per metre. From A to B the depth difference is 3 m and pressure rises by 30 kPa"}

## Absolute and gauge pressure

:::definizione{#assoluta titolo="Choosing the reference"}
**Absolute pressure** is measured relative to a vacuum. **Gauge pressure** relative to reference $p_{\mathrm{rif}}$ is $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{rif}}$. Atmospheric pressure is often the reference for an open vessel. A sealed vessel may have a pressure at the liquid surface different from atmospheric pressure.

With atmospheric pressure $100\,\mathrm{kPa}$, water at depth $1.5\,\mathrm m$ has absolute pressure $115\,\mathrm{kPa}$ and gauge pressure $15\,\mathrm{kPa}$. If a flat membrane separates atmosphere from gas at $90\,\mathrm{kPa}$ absolute, the gas has gauge pressure $-10\,\mathrm{kPa}$. The sign shows that the pressure is below the reference. Forces on the two membrane faces oppose each other, so the net force depends on their pressure difference.
:::

## Pascal's principle

:::teorema{#pascal titolo="Transmitting a pressure change"}
In a confined, resting, incompressible fluid, an imposed pressure change is transmitted throughout the fluid. With geometry fixed the $\rho gh$ term is unchanged and each point gets the same surface pressure increase. In an ideal press with pistons at the same elevation, added forces satisfy $F_1/A_1=F_2/A_2$ under matching external conditions and negligible losses.

With $A_1=5\,\mathrm{cm^2}$, $A_2=25\,\mathrm{cm^2}$, and $F_1=16\,\mathrm N$, the large piston develops $80\,\mathrm N$. If the small piston advances by $5\,\mathrm{cm}$ and the liquid is incompressible, it displaces $25\,\mathrm{cm^3}$. The large piston moves back $1\,\mathrm{cm}$ to accommodate the same volume. The area ratio increases the force and reduces the displacement.
:::

## Communicating vessels

:::teorema{#vasi titolo="Equal pressure at the same elevation"}
Two points at the same elevation in a resting, uniform, connected liquid are at equal pressure. If both arms are open to the same atmosphere and contain the same liquid, their free surfaces are therefore at the same elevation. A wider arm holds more volume per unit height while keeping the same surface level.

For immiscible liquids, compare pressures at the same elevation in the common liquid. If an oil column of density $800\,\mathrm{kg/m^3}$ is $25\,\mathrm{cm}$ tall above the interface and the opposite arm contains water of density $1000\,\mathrm{kg/m^3}$, the water rises $20\,\mathrm{cm}$ above that level. Air pressure is common and the factor $g$ cancels.
:::

## Superposed layers

:::osservazione{#strati titolo="Adding hydrostatic contributions"}
Each uniform layer contributes $\rho_i g h_i$. Starting at the surface and moving downward, add the increases through the layers above the required point. In a vessel with $0.5\,\mathrm m$ of oil of density $800\,\mathrm{kg/m^3}$ above $1\,\mathrm m$ of water with $g=10\,\mathrm{N/kg}$, the oil adds $4\,\mathrm{kPa}$ and water adds $10\,\mathrm{kPa}$. The bottom is therefore $14\,\mathrm{kPa}$ above the surface pressure.

At the flat interface of resting liquids, neglecting surface tension, pressure is continuous. Its slope against depth changes because pressure rises faster in the denser layer. The steeper section in the figure represents water.
:::

::grafico{linee="0,0 0.5,4 1.5,14" punti="0.5,4,pieno,I;1.5,14,pieno,F" nomi="h (m),Δp (kPa)" xmin=0 xmax=1.65 ymin=0 ymax=16 titolo="I is the interface between oil and water. Pressure is continuous and its slope increases in water"}

## Manometers and barometers

:::osservazione{#manometri titolo="Columns that measure pressure"}
In a U-tube manometer with uniform liquid and gas of negligible density, the level difference gives magnitude $\rho g\Delta h$ for the pressure difference. The side with the lower surface has higher pressure, since more external pressure is needed to support the connected column. With water, $g=10\,\mathrm{N/kg}$, and a difference of $12\,\mathrm{cm}$, the magnitude is $1200\,\mathrm{Pa}$.

In an ideal barometer, pressure above the column is negligible compared with atmospheric pressure. Its height $h$ then satisfies $p_{\mathrm{atm}}=\rho gh$. A denser liquid gives a shorter column at equal pressure. A less dense fluid gives a larger level difference for the same pressure difference, with a different useful measurement range.
:::
