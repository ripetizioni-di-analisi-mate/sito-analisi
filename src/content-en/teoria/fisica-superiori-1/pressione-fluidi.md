---
titolo: "Pressure in fluids at rest"
sommario: "Pressure, the hydrostatic pressure law, hydraulic presses, communicating vessels, and manometers."
---

## Definition of pressure

:::definizione{#pressione titolo="Normal force per unit area"}
A **force** is a push or a pull. Its **magnitude** is the number that says how strong the force is, and it is measured in newtons, symbol $\mathrm N$. A force is **normal** to a surface when it is perpendicular to it, that is, when it makes a right angle with the surface. The symbol $F_\perp$ is read "F perpendicular" and stands for the magnitude of a normal force.

When sand is pressed with the palm of the hand and then, with the same force, with a single finger, the finger sinks deeper, because the same force acts on a smaller area. **Pressure** is the quantity that measures this effect, that is, the normal force acting on each unit of area. If a normal force of magnitude $F_\perp$ is uniformly distributed over a surface of area $A$, meaning that equal parts of the surface receive equal parts of the force, the pressure is

$$
p=\frac{F_\perp}{A}.
$$

Area is measured in square metres ($\mathrm m^2$), so pressure is measured in newtons per square metre. This unit is called the **pascal**, symbol $\mathrm{Pa}$, and $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$.

A force tilted with respect to the surface is split into two parts, called components, one perpendicular and one parallel to the surface. Only the perpendicular component contributes to pressure.

Spreading the same force over double the area gives half the pressure, because the denominator of $\dfrac{F_\perp}{A}$ doubles. The total force pressing on a surface is called the **load**. Knowing the load and knowing the pressure are therefore two different pieces of information.

A **fluid** is a substance that flows and takes the shape of its container, such as a liquid or a gas. In a fluid at rest, the pressure at a point is a **scalar** quantity, that is, it is described by a single number with its unit, with no direction. The force the fluid exerts on a small piece of wall, on the other hand, is perpendicular to the wall. The direction of this force therefore depends on how the wall is oriented.

For a flat wall at uniform pressure, that is, with the same value at every point, the magnitude of the total force is $pA$. If the pressure changes from one point of the wall to another, $\dfrac{F_\perp}{A}$ is the **average pressure**, that is, the uniform pressure that would give the same total force.
:::

:::esempio{titolo="One force, two surfaces"}
A force of $60\,\mathrm N$ is spread over $0.02\,\mathrm m^2$. The pressure is

$$
p_1=\frac{60\,\mathrm N}{0.02\,\mathrm m^2}=3000\,\mathrm{Pa}.
$$

The same load spread over $0.04\,\mathrm m^2$ gives

$$
p_2=\frac{60\,\mathrm N}{0.04\,\mathrm m^2}=1500\,\mathrm{Pa}.
$$

The force stays at sixty newtons. It is recovered from either pressure by multiplying by the corresponding area, so $3000\cdot0.02=1500\cdot0.04=60$ in SI units. The abbreviation SI stands for the International System of units, which includes the metre, the kilogram ($\mathrm{kg}$), the newton and the pascal.
:::

:::esempio{#pressione-media titolo="A surface under two pressures"}
The kilopascal, symbol $\mathrm{kPa}$, equals $1000\,\mathrm{Pa}$. A plate has two adjacent regions, that is, one next to the other. The first has area $0.030\,\mathrm m^2$ and pressure $2.0\,\mathrm{kPa}$. The second has area $0.020\,\mathrm m^2$ and pressure $5.0\,\mathrm{kPa}$. The forces act from the same side.

On each region the force is the pressure, in pascals, times the area of the region.

$$
\begin{aligned}
F_1&=2000\,\mathrm{Pa}\cdot0.030\,\mathrm m^2=60\,\mathrm N\\[6pt]
F_2&=5000\,\mathrm{Pa}\cdot0.020\,\mathrm m^2=100\,\mathrm N
\end{aligned}
$$

The total force is $60\,\mathrm N+100\,\mathrm N=160\,\mathrm N$ and the total area is $0.030\,\mathrm m^2+0.020\,\mathrm m^2=0.050\,\mathrm m^2$. Across the full area the mean pressure, written $\bar p$ and read "p bar", is

$$
\bar p=\frac{160\,\mathrm N}{0.050\,\mathrm m^2}=3200\,\mathrm{Pa}=3.2\,\mathrm{kPa}.
$$

The simple mean of the two pressures is $\dfrac{2.0+5.0}{2}\,\mathrm{kPa}=3.5\,\mathrm{kPa}$. Multiplied by the total area it would give $3500\cdot0.050\,\mathrm N=175\,\mathrm N$, which differs from the true force of $160\,\mathrm N$. With regions of unequal area, each pressure counts in proportion to the area over which it acts. The mean pressure gives the same total force, while the pressures of the single regions describe how that force is distributed.

In the graph the horizontal axis shows the area in square decimetres. A square decimetre ($\mathrm{dm^2}$) is a square of side $10\,\mathrm{cm}$ and equals $0.01\,\mathrm m^2$, so the two regions measure $3$ and $2\,\mathrm{dm^2}$.

::grafico{linee="0,2 3,2;3,5 5,5" asintoti="x=3;y=3.2" nomi="A (dm²),p (kPa)" xmin=0 xmax=5.5 ymin=0 ymax=6 titolo="The horizontal axis shows the area accumulated from one edge, in square decimetres. The wider region carries more weight in the dashed mean."}
:::

## Units of pressure

:::osservazione{#unita titolo="Pascals and area conversions"}
One pascal is one newton per square metre. The prefix "kilo" means one thousand, so $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$.

Many areas are given in square centimetres ($\mathrm{cm^2}$). A centimetre is one hundredth of a metre, that is, $1\,\mathrm{cm}=0.01\,\mathrm m=10^{-2}\,\mathrm m$. A square centimetre is a square of side $1\,\mathrm{cm}$, so its area is

$$
1\,\mathrm{cm^2}=0.01\,\mathrm m\cdot0.01\,\mathrm m=0.0001\,\mathrm m^2=10^{-4}\,\mathrm m^2.
$$

The exponent doubles, from $-2$ to $-4$, because area contains two length factors. It follows that

$$
1\,\mathrm{N/cm^2}=\frac{1\,\mathrm N}{10^{-4}\,\mathrm m^2}=10^4\,\mathrm{Pa}=10\,000\,\mathrm{Pa}.
$$

Example. A **piston** is a disc that slides inside a cylinder without letting the fluid pass. An **underpressure** is a pressure lower than the one taken for comparison. On a piston of $25\,\mathrm{cm^2}$, an underpressure of magnitude $8\,\mathrm{kPa}$ with respect to the other side corresponds to a net force, that is, a difference between the forces on the two faces, of $8000\cdot25\cdot10^{-4}\,\mathrm N=20\,\mathrm N$. In this calculation $8\,\mathrm{kPa}=8000\,\mathrm{Pa}$ and $25\,\mathrm{cm^2}=25\cdot10^{-4}\,\mathrm m^2$. Its direction is from the higher-pressure side toward the lower-pressure side.
:::

:::esempio{#taratura-pistone titolo="Calibrating a sensor with a known force"}
A pressure sensor is an instrument that measures pressure and displays its value, called the reading. Calibrating a sensor means comparing its readings with pressures of known value.

A piston of area $20\,\mathrm{cm^2}$ is connected to a sensor. The reading is zeroed before a load is added, that is, the instrument shows zero at the start, so after the load is added the reading is only the pressure increase, written $\Delta p$. The Greek letter $\Delta$ is read "delta" and stands for a change or a difference.

A load of $8\,\mathrm N$ acts on the area $20\,\mathrm{cm^2}=20\cdot10^{-4}\,\mathrm m^2=0.0020\,\mathrm m^2$, so it produces

$$
\Delta p=\frac{8\,\mathrm N}{0.0020\,\mathrm m^2}=4000\,\mathrm{Pa}.
$$

If a second instrument reads in $\mathrm{N/cm^2}$, it displays $\dfrac{8}{20}=0.40$. Both readings describe the same load spread over the same area.

With the piston unchanged the pressure increase is the load divided by a fixed area, so the graph of pressure increase against added load is a straight line through the origin, that is, through the point with zero load and zero increase. The **slope** of a straight line is the ratio between how much the line rises and how far it moves horizontally. In these units the slope is

$$
\frac{4000\,\mathrm{Pa}}{8\,\mathrm N}=500\,\mathrm{Pa/N}.
$$

The **intercept** is the value the line takes at zero load. In an ideal calibration, and with no uncounted initial load, the intercept is zero. A nonzero intercept indicates that the zero of the instrument is offset. In that case the slope is still found from the difference between two readings, divided by the difference between the two loads, because the offset of the zero is the same in both readings and cancels in the subtraction.

::grafico{f="0.5*x" punti="0,0,pieno;8,4,pieno" nomi="F (N),Δp (kPa)" xmin=0 xmax=10 ymin=0 ymax=6 titolo="A load of 8 N corresponds to 4 kPa. The slope in kPa/N is equivalent to 500 Pa/N."}
:::

## The hydrostatic pressure law

::::teorema{#stevino titolo="Pressure and depth"}
A swimmer who dives in a pool feels the pressure on the ears grow while going down. The hydrostatic pressure law, also called Stevin's law, says by how much. Four quantities appear in it.

- The **density** of a liquid is the mass contained in each unit of volume. It is written with the Greek letter $\rho$, read "rho", and is measured in kilograms per cubic metre ($\mathrm{kg/m^3}$). One cubic metre of water has a mass of $1000\,\mathrm{kg}$, so the density of water is $1000\,\mathrm{kg/m^3}$.
- The **gravitational field** $g$ is the weight, in newtons, of each kilogram of mass. Near the surface of the Earth it is about $9.8\,\mathrm{N/kg}$, and in the examples of this chapter it is rounded to $10\,\mathrm{N/kg}$.
- The **depth** $h$ is the distance, measured vertically, between the point and the liquid surface above it.
- $p_0$, read "p zero", is the pressure acting on the liquid surface, for example the pressure of the air.

In a liquid at rest of constant density $\rho$, with uniform gravitational field $g$, the pressure at vertical depth $h$ below a surface at pressure $p_0$ is
$$
p=p_0+\rho gh.
$$
The term $\rho gh$ is the pressure increase due to the liquid above the point.

To compare two points in the same liquid at depths $h_1$ and $h_2$, the law is written for each of them and the two are subtracted. The term $p_0$ is the same in both and cancels, so the result is $p_2-p_1=\rho g(h_2-h_1)$.

:::dimostrazione
Consider an imaginary vertical column of liquid that goes from the surface down to depth $h$, with base area $A$ and height $h$. These forces act on the column.

- At the bottom, the fluid underneath exerts the upward force $pA$, where $p$ is the pressure at depth $h$.
- At the top, the external pressure exerts the downward force $p_0A$.
- The weight of the column acts downward. The volume of the column is $Ah$, its mass is the density times the volume, that is $\rho Ah$, and its weight is the mass times $g$, that is $\rho Ahg$.
- The side forces are horizontal, because they are perpendicular to the vertical sides of the column. They therefore have no vertical component.

The column is at rest, so the sum of the vertical forces is zero. Counting upward forces as positive gives $pA-p_0A-\rho Ahg=0$, that is $pA=p_0A+\rho Ahg$. Both sides are divided by $A>0$, which cancels, and the result is $p=p_0+\rho gh$.
:::
::::

:::esempio{titolo="Pressures at two elevations"}
The **elevation** of a point is its height measured vertically. In water with $\rho=1000\,\mathrm{kg/m^3}$ and $g=10\,\mathrm{N/kg}$, the product $\rho g$ is

$$
\rho g=1000\cdot10\,\mathrm{Pa/m}=10\,000\,\mathrm{Pa/m}=10\,\mathrm{kPa/m},
$$

so pressure rises by $10\,\mathrm{kPa}$ for every metre of depth. This increase per metre, that is $\rho g$, is called the **gradient** in this chapter.

Two points $2$ and $5\,\mathrm m$ below the same surface have a difference in elevation of $3\,\mathrm m$. Their pressures differ by $10\,\mathrm{kPa/m}\cdot3\,\mathrm m=30\,\mathrm{kPa}$. A horizontal separation between the two points does not change that difference, because only the vertical depth difference $h_2-h_1$ appears in the law.
:::

::grafico{f="10*x" nomi="h (m),Δp (kPa)" punti="2,20,pieno,A;5,50,pieno,B" xmin=0 xmax=6 ymin=0 ymax=65 titolo="In water the slope is 10 kPa per metre. From A to B the depth difference is 3 m and pressure rises by 30 kPa"}

:::esempio{#densita-da-pressioni titolo="Inferring density and surface pressure"}
In a sealed vessel the liquid density and the surface pressure are unknown. Two absolute sensors, that is, sensors that measure pressure starting from the zero of a vacuum, read $104\,\mathrm{kPa}$ at a depth of $0.50\,\mathrm m$ and $120\,\mathrm{kPa}$ at $2.50\,\mathrm m$. The liquid is uniform, that is, it has the same density at every point, and $g=10\,\mathrm{N/kg}$.

The hydrostatic law written for the two points gives $104\,\mathrm{kPa}=p_0+\rho g\cdot0.50\,\mathrm m$ and $120\,\mathrm{kPa}=p_0+\rho g\cdot2.50\,\mathrm m$. Subtracting the first equality from the second eliminates the surface pressure $p_0$. Dividing then by the depth difference gives the gradient.

$$
\rho g=\frac{(120-104)\,\mathrm{kPa}}{(2.50-0.50)\,\mathrm m}
       =\frac{16\,\mathrm{kPa}}{2.00\,\mathrm m}
       =8.0\,\mathrm{kPa/m}.
$$

Dividing the gradient, $8000\,\mathrm{Pa/m}$, by the gravitational field gives the density.

$$
\rho=\frac{8000\,\mathrm{Pa/m}}{10\,\mathrm{N/kg}}=800\,\mathrm{kg/m^3}.
$$

Then one goes back up from either point to the surface. The first point is at a depth of $0.50\,\mathrm m$, so between the surface and that point the pressure rises by $8.0\cdot0.50=4.0\,\mathrm{kPa}$. Subtracting this increase from the reading gives $p_0=104\,\mathrm{kPa}-4.0\,\mathrm{kPa}=100\,\mathrm{kPa}$. From the second point, $8.0\cdot2.50=20\,\mathrm{kPa}$ is subtracted and the same value is found, $120\,\mathrm{kPa}-20\,\mathrm{kPa}=100\,\mathrm{kPa}$.

With one measurement, more than one pair of density and surface pressure fits it. The single reading of $104\,\mathrm{kPa}$ at $0.50\,\mathrm m$ is obtained with $\rho=800\,\mathrm{kg/m^3}$ and $p_0=100\,\mathrm{kPa}$, and it is also obtained with $\rho=1000\,\mathrm{kg/m^3}$ and $p_0=99\,\mathrm{kPa}$, because $99+10\cdot0.50=104$. The pair is unique when one of the two quantities is known or a second pressure is measured at another depth.

::grafico{f="100+8*x" punti="0,100,pieno;0.5,104,pieno,A;2.5,120,pieno,B" nomi="h (m),p (kPa)" xmin=0 xmax=3 ymin=94 ymax=127 titolo="The intercept is the surface pressure. Between A and B the pressure increases by 16 kPa over 2 m."}
:::

:::esempio{#spinta-su-parete titolo="Force on a vertical wall"}
A vertical rectangular plate, $0.30\,\mathrm m$ wide, is immersed in water. Its top edge is $0.20\,\mathrm m$ below the surface and its bottom edge is at $0.80\,\mathrm m$. The other face of the plate is exposed to the same atmosphere that presses on the water surface. The air therefore presses on both faces with the same pressure, and only the pressure difference $\Delta p=\rho gh$ due to the water counts on the plate.

With gradient $10\,\mathrm{kPa/m}$, the pressure difference at the top edge is $10\cdot0.20=2\,\mathrm{kPa}$ and at the bottom edge it is $10\cdot0.80=8\,\mathrm{kPa}$.

The pressure difference varies linearly, that is, it rises by the same amount for every centimetre of depth. The plate is a rectangle, so all horizontal strips of equal height have the same area. The middle height of the plate is at a depth of $0.50\,\mathrm m$, where the pressure difference is $5\,\mathrm{kPa}$. Strips equally far from the middle height are paired. The strips at $0.30$ and $0.70\,\mathrm m$ have $3$ and $7\,\mathrm{kPa}$, and their mean is $5\,\mathrm{kPa}$. The same holds for every pair, so the mean over the whole plate is

$$
\bar p=\frac{2\,\mathrm{kPa}+8\,\mathrm{kPa}}{2}=5\,\mathrm{kPa}.
$$

The height of the plate is $0.80-0.20=0.60\,\mathrm m$ and its area is $0.30\cdot0.60\,\mathrm m^2=0.18\,\mathrm m^2$. The force is the mean pressure times the area.

$$
F=5000\,\mathrm{Pa}\cdot0.30\cdot0.60\,\mathrm m^2=900\,\mathrm N.
$$

This calculation gives the magnitude of the total force. A uniform pressure of $5\,\mathrm{kPa}$ over the whole plate would give the same magnitude, while the forces on the single strips would be different.

::grafico{poligoni="0.2,0 0.8,0 0.8,8 0.2,2" linee="0.2,2 0.8,8" segmenti="0.2,5,0.8,5" punti="0.2,2,pieno;0.5,5,pieno;0.8,8,pieno" xmin=0 xmax=1 ymin=0 ymax=9 nomi="h (m),Δp (kPa)" titolo="From the top edge to the bottom edge the pressure rises from 2 to 8 kPa. The dashed line marks the 5 kPa mean."}
:::

## Absolute and gauge pressure

:::definizione{#assoluta titolo="Choosing the reference"}
A **vacuum** is a space without matter, in which the pressure is zero. **Absolute pressure** is the pressure measured starting from a vacuum and is written $p_{\mathrm{ass}}$. **Atmospheric pressure** is the pressure of the air surrounding the Earth. At sea level it is about $101\,\mathrm{kPa}$ absolute, and in the examples it is rounded to $100\,\mathrm{kPa}$.

Many instruments measure by how much a pressure exceeds another pressure, chosen as the reference and written $p_{\mathrm{rif}}$. The **gauge pressure**, or pressure relative to that reference, is the difference

$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{rif}}.
$$

For an open vessel the most common reference is atmospheric pressure, because the air presses on the liquid surface. In a sealed vessel, above the liquid there is a gas with a pressure of its own, which need not equal atmospheric pressure.

With an atmospheric pressure of $100\,\mathrm{kPa}$ and a gradient of $10\,\mathrm{kPa/m}$, in water at a depth of $1.5\,\mathrm m$ the increase due to the water is $10\cdot1.5=15\,\mathrm{kPa}$. The absolute pressure is $100+15=115\,\mathrm{kPa}$ and the gauge pressure relative to the atmosphere is $115-100=15\,\mathrm{kPa}$.

A membrane is a thin sheet that separates two spaces. If a flat membrane separates the atmosphere from a gas at $90\,\mathrm{kPa}$ absolute, the gauge pressure of the gas is $90-100=-10\,\mathrm{kPa}$. The minus sign shows that the pressure is below the reference. The forces on the two faces of the membrane have opposite directions, so the net force is the difference between the two forces and depends on the pressure difference.
:::

:::esempio{#tre-riferimenti titolo="Three readings for the same point"}
A sealed vessel contains water. The gas above the liquid is at an absolute pressure of $103\,\mathrm{kPa}$ and the surroundings are at an absolute pressure of $98\,\mathrm{kPa}$. With gradient $10\,\mathrm{kPa/m}$, the absolute pressure $1.5\,\mathrm m$ below the surface is $103+10\cdot1.5=118\,\mathrm{kPa}$.

A sensor referenced to the surroundings subtracts the outside pressure and therefore reads $118-98=20\,\mathrm{kPa}$. A sensor referenced to the gas inside the vessel subtracts the gas pressure and reads $118-103=15\,\mathrm{kPa}$.

| Position | Absolute | Relative to outside | Relative to gas |
| --- | ---: | ---: | ---: |
| Outside air | 98 kPa | 0 kPa | −5 kPa |
| Inside surface | 103 kPa | 5 kPa | 0 kPa |
| At 1.5 m depth | 118 kPa | 20 kPa | 15 kPa |

The difference between the pressures at two positions is the same in every column, because the two values share the same reference zero. For example, the increase between the inside surface and the submerged sensor is $118-103=15\,\mathrm{kPa}$ in absolute values and $20-5=15\,\mathrm{kPa}$ relative to the surroundings.

The force on a wall depends on the difference between the pressures that actually act on its two faces. Two readings are compared after both have been expressed in the same reference scale.

::grafico{f="5+10*x;10*x" legenda="\text{Outside reference};\text{Gas reference}" punti="1.5,20,pieno;1.5,15,pieno" nomi="h (m),p_rel (kPa)" xmin=0 xmax=2 ymin=0 ymax=28 titolo="The upper line is referenced to the outside air, and the other to the gas inside. Both have the same gradient."}
:::

## Pascal's principle

:::teorema{#pascal titolo="Transmitting a pressure change"}
A fluid is **incompressible** when its volume does not change even when it is pressed. Liquids are incompressible to a very good approximation. A fluid is confined when it is enclosed in a container from which it does not escape.

In a confined, resting, incompressible fluid, a pressure change imposed at one point is transmitted throughout the fluid. If the shape of the container and the depths do not change, the $\rho gh$ term of each point stays the same, and the same change imposed at the surface is added at every point.

A **hydraulic press** consists of two cylinders of different area, filled with liquid and connected to each other, each closed by a piston. It is ideal when friction and liquid losses are neglected. An added force $F_1$ on the piston of area $A_1$ raises the pressure by $\dfrac{F_1}{A_1}$. The same increase reaches the piston of area $A_2$, where it produces the added force $F_2$. In an ideal press with pistons at the same elevation and the same external pressure on both pistons, the added forces therefore satisfy

$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$

With $A_1=5\,\mathrm{cm^2}$, $A_2=25\,\mathrm{cm^2}$, and $F_1=16\,\mathrm N$, the pressure increase is $\dfrac{16\,\mathrm N}{5\,\mathrm{cm^2}}=3.2\,\mathrm{N/cm^2}$. The large piston develops $3.2\,\mathrm{N/cm^2}\cdot25\,\mathrm{cm^2}=80\,\mathrm N$.

If the small piston advances by $5\,\mathrm{cm}$ and the liquid is incompressible, the displaced volume is the area times the advance, that is $5\,\mathrm{cm^2}\cdot5\,\mathrm{cm}=25\,\mathrm{cm^3}$. The large piston moves out to make room for the same volume, so it moves by $\dfrac{25\,\mathrm{cm^3}}{25\,\mathrm{cm^2}}=1\,\mathrm{cm}$. The area ratio increases the force and reduces the displacement.

A circular piston of radius $r$ has area $\pi r^2$, where $\pi$ is read "pi" and is about $3.14$. The ratio of the areas of two circular pistons is therefore the square of the ratio of their radii. With radii of $8$ and $16\,\mathrm{cm}$ the ratio of the radii is $2$, and the ratio of the areas, and of the forces, is $2^2=4$.
:::

:::esempio{#corsa-e-lavoro titolo="A greater force over a shorter distance"}
The **travel** of a piston is the distance it moves. In an ideal press an added load of $16\,\mathrm N$ acts on a piston of $4\,\mathrm{cm^2}$. A second piston has area $12\,\mathrm{cm^2}$. The forces considered here are those due to the pressure change alone.

The pressure increase is $\dfrac{16\,\mathrm N}{4\,\mathrm{cm^2}}=4\,\mathrm{N/cm^2}$. The added output force is $4\,\mathrm{N/cm^2}\cdot12\,\mathrm{cm^2}=48\,\mathrm N$, three times the input force because the output area is three times larger.

In a small motion during which the pressure increase stays constant, the first piston moves in by $6\,\mathrm{cm}$ and displaces $4\,\mathrm{cm^2}\cdot6\,\mathrm{cm}=24\,\mathrm{cm^3}$ of liquid. The second piston moves out to accommodate that volume, so it moves by $\dfrac{24\,\mathrm{cm^3}}{12\,\mathrm{cm^2}}=2\,\mathrm{cm}$.

For a constant force acting in the direction of motion, the **work** is the force magnitude multiplied by the distance travelled. It is measured in joules, symbol $\mathrm J$, and one joule is one newton times one metre. The travels in metres are $6\,\mathrm{cm}=0.06\,\mathrm m$ and $2\,\mathrm{cm}=0.02\,\mathrm m$. The products of added force and corresponding travel, as magnitudes, are

$$
\begin{aligned}
16\,\mathrm N\cdot0.06\,\mathrm m&=0.96\,\mathrm J\\[6pt]
48\,\mathrm N\cdot0.02\,\mathrm m&=0.96\,\mathrm J
\end{aligned}
$$

The two amounts of work are equal. For each piston the added force is $\Delta p\cdot A$ and the displaced volume is $A$ times the travel, so the work is $\Delta p$ times the displaced volume, which is the same for the two pistons.

The equality concerns the added forces in the ideal press. If total loads are measured, or if the pistons are at different elevations, the pressures present before the load is added also enter the calculation, that is, the external pressure and the $\rho gh$ term.

::grafico{assi=0 uguale=1 linee="0,3 0,0 6,0 6,3;1,3 1,0.5 3,0.5 3,3;0,2.5 1,2.5;3,2.1 6,2.1" segmenti="0,1.3,1,1.3;3,1.7,6,1.7" vettori="0.5,2.35,0.5,1.4;4.5,1.76,4.5,2.06" etichette="0.1,2.9,4 cm²;3.8,2.6,12 cm²;-0.8,1.9,6 cm;4.9,1.95,2 cm" xmin=-1 xmax=6.4 ymin=-0.3 ymax=3.45 titolo="The smaller piston moves in by 6 cm. The piston with three times the area moves out by 2 cm."}
:::

## Communicating vessels

:::teorema{#vasi titolo="Equal pressure at the same elevation"}
**Communicating vessels** are two or more containers, called arms or branches, connected at the bottom so that the liquid passes from one to the other. A liquid is uniform when it has the same density at every point. The **free surface** is the surface of the liquid in contact with air or with a gas.

Two points at the same elevation in a resting, uniform, connected liquid are at equal pressure. If the pressures were different, the liquid would move from the point at higher pressure toward the point at lower pressure and would not be at rest.

If both arms are open to the same atmosphere and contain the same liquid, their free surfaces are therefore at the same elevation. Indeed, at two points of the bottom at the same elevation the pressure is $p_{\mathrm{atm}}+\rho gh$, where $p_{\mathrm{atm}}$ is atmospheric pressure and $h$ is the depth below the free surface of that arm. The two pressures are equal, so the two depths are equal. The result also holds when one arm is wider than the other. The wider arm holds more volume for each centimetre of height, and pressure depends only on depth.

Two liquids are immiscible when they do not mix, like oil and water. The surface that separates them is called the **interface**. For immiscible liquids, pressures are compared at the same elevation in the common liquid, that is, the one that fills the bottom and passes from one arm to the other.

One arm contains an oil column of density $800\,\mathrm{kg/m^3}$, $25\,\mathrm{cm}$ tall above the interface, with water of density $1000\,\mathrm{kg/m^3}$ below it. The opposite arm contains only water, which rises a height $h$ above the level of the interface. At that level the pressures in the two arms are equal.

$$
p_{\mathrm{atm}}+800\cdot g\cdot0.25=p_{\mathrm{atm}}+1000\cdot g\cdot h
$$

Air pressure is common to both sides and the factor $g$ cancels. This leaves $800\cdot0.25=1000\cdot h$, so the water rises above that level by $h=\dfrac{200}{1000}\,\mathrm m=0.20\,\mathrm m=20\,\mathrm{cm}$.
:::

:::esempio{#vasi-con-gas titolo="Two surfaces at different pressures"}
Two communicating branches, A and B, contain the same water. Each branch is closed by a gas. The pressure at surface A is $106\,\mathrm{kPa}$ and at surface B it is $101\,\mathrm{kPa}$. The gradient is $\rho g=10\,\mathrm{kPa/m}$.

The height of surface A is chosen as the comparison level in the liquid. In branch A the pressure at that level is directly $106\,\mathrm{kPa}$. In branch B the same level is reached by moving down from surface B by a depth $d$, and the pressure there is $101\,\mathrm{kPa}+10\,\mathrm{kPa/m}\cdot d$. The two pressures are at the same elevation in the same liquid, so they are equal.

$$
101\,\mathrm{kPa}+10\,\mathrm{kPa/m}\cdot d=106\,\mathrm{kPa}
$$

A hydrostatic increase, that is, an increase due to the weight of the liquid, of $106-101=5\,\mathrm{kPa}$ is required. This gives $d=\dfrac{5\,\mathrm{kPa}}{10\,\mathrm{kPa/m}}=0.50\,\mathrm m$, so surface B stands $0.50\,\mathrm m$ higher than surface A.

Finding how far each surface moved from a common initial level also requires a volume balance. The cross-section of a branch is the area of its horizontal cut. The volume of water that leaves branch A is the cross-section of A times the fall of A, and it equals the volume that enters B, that is, the cross-section of B times the rise of B. If the cross-section of A is twice that of B, B therefore rises twice as far as A falls.

The rise and the fall add up to the final level difference. If $x$ is the fall of A, the rise of B is $2x$ and

$$
\begin{aligned}
x+2x&=0.50\,\mathrm m\\[6pt]
3x&=0.50\,\mathrm m\\[6pt]
x&=\frac{0.50}{3}\,\mathrm m\approx0.17\,\mathrm m
\end{aligned}
$$

The symbol $\approx$ is read "approximately equal to". A therefore falls by about $0.17\,\mathrm m$ and B rises by about $0.33\,\mathrm m$.

::grafico{assi=0 uguale=1 poligoni="0,0.7 1.4,0.7 1.4,0.35 2.5,0.35 2.5,1.2 3.2,1.2 3.2,0 0,0" linee="0,1.8 0,0 3.2,0 3.2,1.8;1.4,1.8 1.4,0.35 2.5,0.35 2.5,1.8;0,0.7 1.4,0.7;2.5,1.2 3.2,1.2" segmenti="1.4,0.7,2.85,0.7;2.2,1.2,2.5,1.2;2.2,0.7,2.2,1.2" etichette="0.08,1.5,A 106 kPa;2.1,1.95,B 101 kPa;1.49,0.97,0.50 m" xmin=-0.35 xmax=3.8 ymin=-0.24 ymax=2.25 titolo="The higher pressure lowers surface A. In branch B the pressures are compared 0.50 m below its surface."}
:::

## Superposed layers

:::osservazione{#strati titolo="Adding hydrostatic contributions"}
When two immiscible liquids are in the same vessel, the less dense one stays on top and forms a layer. Each uniform layer, of density $\rho_i$ and thickness $h_i$, contributes $\rho_i g h_i$ to the pressure. The subscript $i$ is the number of the layer, $1$ for the first from the top, $2$ for the second. Starting at the surface and moving downward, the increases are added up to the required point.

A vessel holds $0.5\,\mathrm m$ of oil of density $800\,\mathrm{kg/m^3}$ above $1\,\mathrm m$ of water, with $g=10\,\mathrm{N/kg}$.

$$
\begin{aligned}
\text{oil}\quad &800\cdot10\cdot0.5\,\mathrm{Pa}=4000\,\mathrm{Pa}=4\,\mathrm{kPa}\\[6pt]
\text{water}\quad &1000\cdot10\cdot1\,\mathrm{Pa}=10\,000\,\mathrm{Pa}=10\,\mathrm{kPa}
\end{aligned}
$$

The bottom is therefore $4+10=14\,\mathrm{kPa}$ above the surface pressure, taken as the reference.

Surface tension is the resistance that the surface of a liquid offers to being deformed. At the flat interface between two resting liquids, neglecting surface tension, pressure is continuous, that is, it has the same value just above and just below the interface. In the example it is $4\,\mathrm{kPa}$ on both sides. The slope of the graph of pressure against depth changes instead, because pressure rises faster in the denser layer, with $8\,\mathrm{kPa/m}$ in oil and $10\,\mathrm{kPa/m}$ in water. The steeper section in the figure represents water.
:::

::grafico{linee="0,0 0.5,4 1.5,14" punti="0.5,4,pieno,I;1.5,14,pieno,B" nomi="h (m),Δp (kPa)" xmin=0 xmax=1.65 ymin=0 ymax=16 titolo="I is the interface between oil and water. Pressure is continuous and its slope increases in water"}

:::esempio{#spessori-da-pressione titolo="Finding two layer thicknesses from one reading"}
A vessel contains layers of oil and water with a total thickness of $1.50\,\mathrm m$. The pressure at the bottom exceeds the surface pressure by $13.2\,\mathrm{kPa}$. The gradient in oil is $8\,\mathrm{kPa/m}$ and that in water is $10\,\mathrm{kPa/m}$.

Let $x$ be the oil thickness in metres. The two thicknesses add up to $1.50\,\mathrm m$, so the water thickness is $1.50-x$. The contribution of the oil is $8x$ and that of the water is $10(1.50-x)$, both in kilopascals. Their sum is the measured increase.

$$
\begin{aligned}
8x+10(1.50-x)&=13.2\\
8x+15.0-10x&=13.2\\
15.0-2x&=13.2 \\
2x&=1.8\\
x&=0.90.
\end{aligned}
$$

The oil layer is $0.90\,\mathrm m$ thick and the water layer is $1.50-0.90=0.60\,\mathrm m$ thick. Their contributions are $8\cdot0.90=7.2\,\mathrm{kPa}$ and $10\cdot0.60=6.0\,\mathrm{kPa}$.

A vessel containing only oil would give $8\cdot1.50=12.0\,\mathrm{kPa}$, while one containing only water would give $10\cdot1.50=15.0\,\mathrm{kPa}$. The reading of $13.2\,\mathrm{kPa}$ lies between these two values, and this comparison is made before solving the equation. A reading below $12.0$ or above $15.0\,\mathrm{kPa}$ would not be obtained with two positive thicknesses. The two endpoint values correspond to the case in which one of the two layers is absent.

In the graph the two open circles are the values $12.0$ and $15.0\,\mathrm{kPa}$ of the single liquids.

::grafico{linee="0,0 0.9,7.2 1.5,13.2" f="8*x;10*x" legenda="\text{Oil only};\text{Water only}" xmin=0 xmax=1.6 ymin=0 ymax=16.5 nomi="h (m),Δp (kPa)" punti="0.9,7.2,pieno,I;1.5,12,vuoto;1.5,13.2,pieno;1.5,15,vuoto" titolo="The piecewise line initially follows the oil line and bends at I. At the bottom the result lies between the two single-liquid values."}
:::

## Manometers and barometers

:::osservazione{#manometri titolo="Columns that measure pressure"}
A **manometer** is an instrument that measures a pressure difference. The U-tube manometer is a tube bent into a U shape that contains a liquid. Each of the two arms is in contact with a gas. The level difference between the two liquid surfaces is written $\Delta h$.

If the liquid is uniform and the gas has negligible density, that is, so small that the weight of the gas does not count, the level difference between the surfaces gives the magnitude of the pressure difference, which is $\rho g\Delta h$. The side with the lower surface has the higher pressure. At the level of the lower surface, indeed, the pressures in the two arms are equal. In one arm there is only the pressure of the first gas, in the other the pressure of the second gas plus that of the liquid column of height $\Delta h$. The first gas therefore has a pressure greater by $\rho g\Delta h$.

With water, $g=10\,\mathrm{N/kg}$, and a level difference of $12\,\mathrm{cm}=0.12\,\mathrm m$, the magnitude is $1000\cdot10\cdot0.12\,\mathrm{Pa}=1200\,\mathrm{Pa}$.

A **barometer** is an instrument that measures atmospheric pressure. It is a tube closed at the top, filled with liquid and turned upside down in a reservoir of the same liquid. The liquid falls in the tube to a height $h$ above the reservoir surface, and an almost empty space remains above the column. In an ideal barometer, the pressure above the column is negligible compared with atmospheric pressure. By the hydrostatic law with $p_0=0$, the height $h$ then satisfies

$$
p_{\mathrm{atm}}=\rho gh.
$$

At equal pressure, a denser liquid requires a shorter column. With $p_{\mathrm{atm}}=100\,\mathrm{kPa}$ and $g=10\,\mathrm{N/kg}$, water gives a column of $10\,\mathrm m$. Mercury, a liquid metal of density $13\,600\,\mathrm{kg/m^3}$, gives $h=\dfrac{100\,000}{13\,600\cdot10}\,\mathrm m\approx0.74\,\mathrm m$.

A less dense fluid gives a larger level difference for the same pressure difference. In the manometer, the difference of $1200\,\mathrm{Pa}$ produces $12\,\mathrm{cm}$ with water and $\dfrac{1200}{800\cdot10}\,\mathrm m=0.15\,\mathrm m=15\,\mathrm{cm}$ with an oil of density $800\,\mathrm{kg/m^3}$. The measurement range of the instrument changes as a consequence, that is, the interval of pressures that a tube of given length is able to measure.
:::

:::esempio{#barometro-pressione-residua titolo="Residual pressure in a barometer"}
A barometer contains a liquid of density $12\,500\,\mathrm{kg/m^3}$, and $g=10\,\mathrm{N/kg}$ is used. Some gas, called residual gas, is left at the top of the column, with an absolute pressure of $3\,\mathrm{kPa}$. The column is $0.80\,\mathrm m$ high.

The calculation starts from the pressure at the top and moves down to the reservoir surface. The hydrostatic increase is

$$
\rho gh=12\,500\cdot10\cdot0.80\,\mathrm{Pa}=100\,000\,\mathrm{Pa}=100\,\mathrm{kPa}.
$$

At the level of the reservoir surface the pressure in the tube is therefore $3+100=103\,\mathrm{kPa}$. At the same level, outside the tube, the liquid is in contact with the atmosphere. The two pressures are at the same elevation in the same liquid, so they are equal, and the atmospheric pressure is $103\,\mathrm{kPa}$.

A calculation that assumed a vacuum at the top would use $p_{\mathrm{atm}}=\rho gh$ and would attribute to the atmosphere only the $100\,\mathrm{kPa}$ of the column, a value lower than the true one by $3\,\mathrm{kPa}$. At the same atmospheric pressure, indeed, the gas at the top pushes the column down and reduces the height of liquid that the atmosphere supports.

In the equation $h$ is the vertical height of the column, even if the tube is tilted. In very precise measurements, the pressure at the top is evaluated at the temperature at which the measurement is made, since the vapour of the liquid, that is, the part of the liquid that has become a gas, also contributes to that pressure.

::grafico{f="125*x;3+125*x" legenda="\text{Vacuum above};\text{Residual gas}" xmin=0 xmax=1 ymin=0 ymax=132 nomi="h (m),p (kPa)" punti="0.8,100,vuoto;0.8,103,pieno" segmenti="0.8,0,0.8,100;0.65,100,0.8,100;0.8,103,0.82,122" etichette="0.52,101,100 kPa;0.83,125,103 kPa" titolo="At 0.80 m the atmosphere is at 103 kPa with residual gas. The line starting at vacuum would give 100 kPa."}
:::
