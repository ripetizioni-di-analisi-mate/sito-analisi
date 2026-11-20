---
titolo: Fluid mechanics and models of circulation
sommario: Gauge and absolute pressures, equilibrium and buoyancy, conservation of mass and energy, viscosity and hydraulic networks, interfaces and capillarity.
---
:::osservazione{titolo="Three balances for fluids"}
A **fluid** is a substance that flows, that is, a liquid or a gas. The chapter has three parts. The first concerns fluids at rest, in which pressure depends on depth. The second concerns moving fluids, described by conservation of mass and energy and by internal friction, called viscosity. The third concerns the surface of liquids, which behaves like a stretched film. Most examples come from blood circulation and breathing.
:::

## States of matter, density and pressure

:::osservazione{titolo="Solids, liquids and gases"}
A solid has its own shape and volume. A fluid has no shape of its own and takes that of its container. Fluids are of two types.

- A **liquid** has its own volume. It is almost **incompressible**, that is, its density stays practically the same even if the pressure increases greatly.
- A **gas** has no volume of its own and occupies all the available space. It is compressible, that is, its density changes with pressure.
:::

:::definizione{#pressione-densita titolo="Density and pressure"}
Two quantities describe a fluid. **Density** $\rho$ is the mass contained in a unit of volume. **Pressure** $p$ is the force acting perpendicularly on a surface, divided by the area of the surface.
$$
\rho=\dfrac{m}{V},\qquad p=\dfrac{F_\perp}{A}.
$$
Density is measured in $\mathrm{kg/m^3}$. Water has a density of $1000\,\mathrm{kg/m^3}$ and blood about $1060\,\mathrm{kg/m^3}$. Pressure is measured in pascals, $\mathrm{Pa}=\mathrm{N/m^2}$. In a fluid at rest the pressure at a point is the same in all directions, so it is a scalar. The force the fluid exerts on a wall is always perpendicular to the wall.
:::

:::osservazione{titolo="Force, reference and conversions"}
From the definition it follows that $F=pA$. The same force on a smaller area produces a larger pressure. A person weighing $700\,\mathrm{N}$ standing on two shoes of total area $350\,\mathrm{cm^2}=0.035\,\mathrm{m^2}$ exerts on the floor a pressure of $\dfrac{700}{0.035}=2.0\cdot10^4\,\mathrm{Pa}$. On stiletto heels of total area $2\,\mathrm{cm^2}$ the pressure is 175 times greater.

Pressure is expressed in two ways, according to the value taken as zero.

- **Absolute pressure** is measured from vacuum. It is always positive.
- **Gauge pressure** is the difference between absolute pressure and atmospheric pressure. It is the one shown by almost all instruments, including the sphygmomanometer used to measure blood pressure.
$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}.
$$
A negative gauge pressure indicates an absolute pressure below atmospheric. With $p_{\mathrm{atm}}=101\,\mathrm{kPa}$, a gauge pressure of $-20\,\mathrm{kPa}$ corresponds to an absolute pressure of $101-20=81\,\mathrm{kPa}$, as in the figure. In the difference between two pressures atmospheric pressure cancels, so the difference is the same in both ways.

In medicine pressure is measured in millimetres of mercury, with $1\,\mathrm{mmHg}\simeq133.3\,\mathrm{Pa}$. The standard atmosphere is $1\,\mathrm{atm}=101325\,\mathrm{Pa}=760\,\mathrm{mmHg}$. A blood pressure of $120\,\mathrm{mmHg}$ is a gauge pressure and corresponds to $120\cdot133.3\simeq1.6\cdot10^4\,\mathrm{Pa}$. For volumes and areas the conversions $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$, $1\,\mathrm{mL}=10^{-6}\,\mathrm{m^3}$ and $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$ are needed.

![Scale showing an absolute pressure of 81 kPa, atmospheric pressure of 101 kPa and a gauge difference of minus 20 kPa.](/figure/fisica-semestre-filtro/fluidi/pressure-en.svg)
:::

## Hydrostatic equilibrium and manometers

:::osservazione{titolo="Balance for a stationary column"}
In a liquid at rest pressure increases with depth, because each layer supports the weight of the liquid above it. Consider a vertical column of liquid, of base area $A$ and height $h$. On the top face the pressure is $p_0$ and on the base it is $p$. The column is at rest, so the upward force on the base, $pA$, balances the downward force on the top face, $p_0A$, plus the weight of the column, $\rho Ahg$. From $pA=p_0A+\rho Ahg$, dividing by $A$, the following law is obtained.
:::

:::teorema{#stevino titolo="Hydrostatic law"}
In a liquid at rest of density $\rho$, the pressure at depth $h$ below a level where the pressure is $p_0$ is:
$$
p=p_0+\rho gh.
$$
The area $A$ does not appear. Pressure therefore depends only on depth and not on the shape or width of the container. It follows that two points at the same height, in the same liquid at rest with no interruption between them, have the same pressure. In water pressure increases by about $1\,\mathrm{atm}$ every $10\,\mathrm{m}$, because $1000\cdot9.81\cdot10\simeq9.8\cdot10^4\,\mathrm{Pa}$.
:::

:::osservazione{titolo="Vessels and manometer columns"}
Stevin's law is the working principle of instruments that measure pressure with a column of liquid.

The **U-tube manometer** is a U-shaped tube containing a liquid. One arm is connected to the gas whose pressure is to be measured and the other is open to the air. If the gas has a pressure above atmospheric, it pushes the liquid down in its own arm and makes it rise in the other. The difference in level $\Delta h$ between the two arms gives the gauge pressure of the gas, $p_{\mathrm{gas}}-p_{\mathrm{atm}}=\rho g\Delta h$. In general, along a tube containing liquids at rest, pressure increases by $\rho gh$ when one goes down by $h$ and decreases by the same amount when one goes up. If there is more than one liquid, in each stretch the density of the liquid present is used.

The **Torricelli barometer** measures atmospheric pressure. It is a tube full of mercury, closed at the top and inverted in a dish of mercury. The mercury falls until the column is about $760\,\mathrm{mm}$ high, and an almost empty space is left above it. Atmospheric pressure, acting on the dish, supports the column:
$$
p_{\mathrm{atm}}-p_{\mathrm{top}}=\rho_{\mathrm{Hg}}gh.
$$
The pressure $p_{\mathrm{top}}$ above the column is almost zero, so $p_{\mathrm{atm}}=\rho_{\mathrm{Hg}}gh$. With $\rho_{\mathrm{Hg}}=13600\,\mathrm{kg/m^3}$ and $h=0.760\,\mathrm{m}$ one obtains $13600\cdot9.81\cdot0.760\simeq1.01\cdot10^5\,\mathrm{Pa}$. The unit millimetre of mercury comes from this instrument. The height $h$ is measured vertically, even if the tube is tilted.
:::

:::esempio{titolo="A difference in height"}
In a standing person the heart and a point on the lowered arm are about $0.40\,\mathrm{m}$ apart vertically. Blood has a density of $1060\,\mathrm{kg/m^3}$. If the blood were at rest, the pressure difference between the two points would be:
$$
\Delta p=1060\cdot9.81\cdot0.40\,\mathrm{Pa}
\simeq4.16\cdot10^3\,\mathrm{Pa}\simeq31.2\,\mathrm{mmHg}.
$$
Pressure is greater at the lower point. For this reason blood pressure is measured on the arm held at the height of the heart: at a different height the instrument would show a value higher or lower by some tens of mmHg.
:::

:::osservazione{titolo="Reading the hydrostatic graph"}
![Gauge pressure in water at rest: a straight line from zero to 19.62 kPa between zero and two metres of depth.](/figure/fisica-semestre-filtro/fluidi/hydrostatic-en.svg)
:::

## Pascal's principle and buoyancy

:::osservazione{titolo="Pressure increments in a hydraulic press"}
A liquid enclosed in a container transmits changes in pressure. If a piston is pressed, pressure increases by the same amount at all points of the liquid. This is the basis of the **hydraulic press**, made of two connected cylinders of different area, full of liquid, each closed by a piston.
:::

:::teorema{#pascal-archimede titolo="Pressure transmission and buoyant force"}
**Pascal's principle** states that a change in pressure applied to an enclosed liquid is transmitted unchanged to all points of the liquid. In the hydraulic press the pressure under the two pistons is the same, so:
$$
\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}.
$$
A small force on the small piston produces a large force on the large piston. With $A_2=10A_1$ the force is ten times greater.

**Archimedes' principle** states that a body immersed in a fluid receives an upward force, called **buoyancy**, equal to the weight of the fluid the body displaces:
$$
F_A=\rho_f gV_{\mathrm{sub}}.
$$
In the formula $\rho_f$ is the density of the fluid, not that of the body, and $V_{\mathrm{sub}}$ is the volume of the immersed part. A body of volume $2\,\mathrm{L}=2\cdot10^{-3}\,\mathrm{m^3}$ fully immersed in water receives a buoyant force of $1000\cdot9.81\cdot2\cdot10^{-3}\simeq19.6\,\mathrm{N}$, whatever material it is made of.
:::

:::osservazione{titolo="Floating and constraint forces"}
Buoyancy exists because pressure increases with depth. The lower face of the body is deeper than the upper one, so the fluid pushes it upwards with a force greater than the one with which it pushes the upper face downwards. Two forces act on the body, weight downwards and buoyancy upwards, and the comparison between them determines what happens.

- If the density of the body is greater than that of the fluid, weight exceeds buoyancy and the body sinks.
- If it is smaller, buoyancy exceeds weight and the body rises until it floats, with part of it out of the fluid.

A floating body is in equilibrium, so the buoyancy on the immersed part equals the weight, $\rho_fgV_{\mathrm{sub}}=\rho_cgV$. The immersed fraction of the volume follows:
$$
\dfrac{V_{\mathrm{sub}}}{V}=\dfrac{\rho_c}{\rho_f}.
$$
Ice has a density of $917\,\mathrm{kg/m^3}$. In sea water, of density $1025\,\mathrm{kg/m^3}$, the immersed fraction is $\dfrac{917}{1025}\simeq0.89$. About 11% of an iceberg therefore emerges.

For a fully immersed body buoyancy does not depend on depth, because the displaced volume stays the same. A body denser than the fluid, hanging from a string and immersed, pulls the string with a force $T=mg-F_A$, less than its weight. Weighing a body in air and in water therefore gives its volume.

In the hydraulic press the liquid leaving one cylinder enters the other, so the volumes moved are equal, $A_1s_1=A_2s_2$, where $s$ is the displacement of each piston. The large piston moves less than the small one. The work is the same on both sides, $F_1s_1=F_2s_2$: the press multiplies force and not energy.

![Forces on a floating cube: equal weight and buoyancy, with 60 per cent of its volume submerged.](/figure/fisica-semestre-filtro/fluidi/buoyancy-en.svg)
:::

## Flow rate and the continuity equation

:::osservazione{titolo="Speed and flow rate"}
For a fluid flowing in a pipe two quantities are used. **Velocity** $v$ indicates how fast the fluid moves. **Flow rate** $Q$ indicates how much volume of fluid crosses a section of the pipe in one second. The heart of an adult at rest, for example, has a flow rate of about $5\,\mathrm{L/min}$.
:::

:::teorema{#continuita titolo="Conservation of mass"}
The **volume flow rate** is the volume crossing a section divided by the time, $Q=\dfrac{\Delta V}{\Delta t}$, and is measured in $\mathrm{m^3/s}$. It equals the area $A$ of the section multiplied by the mean velocity $\bar v$ of the fluid. In one second, in fact, a cylinder of fluid of base $A$ and height $\bar v$ crosses the section. The **mass flow rate** $\dot m$ is the mass crossing the section in one second.
$$
Q=A\bar v,\qquad \dot m=\rho Q.
$$
In a pipe without leaks or branches, in which the motion does not change over time (**steady** flow), the mass entering in one second equals the mass leaving. This is the **continuity equation**:
$$
\rho_1A_1\bar v_1=\rho_2A_2\bar v_2.
$$
For a liquid the density is constant and cancels, so $A_1\bar v_1=A_2\bar v_2$: the flow rate is the same at every section. Where the pipe narrows the liquid flows faster, and where it widens it flows more slowly.
:::

:::osservazione{titolo="Conservation, accumulation and areas"}
For a pipe of circular section $A=\pi r^2$, so the area depends on the square of the radius. If the radius halves the area becomes one quarter and the velocity quadruples.

The equation also holds when the pipe divides into several branches. At a junction the flow rate entering equals the sum of the flow rates leaving. In the circulation the aorta has a section of about $3\,\mathrm{cm^2}$ and blood flows in it at about $30\,\mathrm{cm/s}$. Capillaries are extremely thin but there are billions of them, and their total area is about $3000\,\mathrm{cm^2}$, a thousand times that of the aorta. The flow rate is the same, so in the capillaries the velocity is a thousand times smaller, about $0.3\,\mathrm{mm/s}$. This slowness gives the time needed for exchanges with the tissues.

The continuity equation expresses conservation of mass, so it also holds for viscous fluids. For a gas, whose density changes along the pipe, the mass flow rate is conserved and not the volume flow rate.

![Two circular sections with diameters in a two-to-one ratio: areas in a four-to-one ratio and speeds in a one-to-four ratio.](/figure/fisica-semestre-filtro/fluidi/continuity-en.svg)
:::

## Bernoulli's equation and changes in cross section

:::osservazione{titolo="Pressure work"}
Bernoulli's equation is conservation of energy applied to a flowing fluid. A volume of fluid has kinetic energy, because it moves, and potential energy, because it lies at a certain height. In addition the fluid behind it pushes it and does work on it, in proportion to the pressure. If there is no friction the sum of these three contributions stays constant along the pipe.
:::

:::teorema{#bernoulli titolo="Energy balance for an ideal fluid"}
For an **ideal fluid**, that is, incompressible and without viscosity, in steady flow, along the pipe:
$$
p+\dfrac12\rho v^2+\rho gz=\text{constant}.
$$
The three terms are energies per unit volume and have the unit of a pressure. The term $p$ is the pressure of the fluid. The term $\dfrac12\rho v^2$ is the kinetic energy per unit volume. The term $\rho gz$ is the potential energy per unit volume, with $z$ the height measured upwards. If one of the three increases, the sum of the other two decreases by the same amount.
:::

:::osservazione{titolo="Applications and limits of Bernoulli"}
In a horizontal pipe the height is constant and the equation reduces to $p+\dfrac12\rho v^2=\text{constant}$. Where the fluid is faster the pressure is lower. Together with the continuity equation it follows that in a constriction velocity increases and pressure decreases. In the figure further on, water goes from $1\,\mathrm{m/s}$ to $3\,\mathrm{m/s}$ and the pressure falls by $\dfrac12\cdot1000\cdot(3^2-1^2)=4000\,\mathrm{Pa}$.

A second case is the emptying of an open tank through a small hole, at a depth $\Delta h$ below the surface. At the surface and at the exit of the hole the pressure is atmospheric, and the surface falls so slowly that its velocity is neglected. Bernoulli's equation then gives $\rho g\Delta h=\dfrac12\rho v^2$, hence **Torricelli's law**:
$$
v=\sqrt{2g\Delta h}.
$$
It is the same speed as that of a body falling from rest from a height $\Delta h$. From a hole $0.80\,\mathrm{m}$ below the surface water comes out at $\sqrt{2\cdot9.81\cdot0.80}\simeq4.0\,\mathrm{m/s}$. The value is ideal, and in a real tank friction reduces it slightly.
:::

:::osservazione{#circolazione titolo="Stenosis, aneurysm and pressure recovery"}
The two equations describe two alterations of blood vessels. In a **stenosis**, that is, a narrowing of an artery, the section decreases. Blood flows faster there and its pressure on the wall is lower. In an **aneurysm**, that is, a dilation, the section increases. Blood slows down and the pressure on the wall is higher, which tends to widen the dilation further. The ideal model is a first approximation. In real blood friction dissipates energy, so downstream of a stenosis the pressure stays lower than upstream, and vessel walls are elastic.
:::

:::osservazione{titolo="Comparing energy terms"}
![Ideal horizontal balance: increasing speed from 1 to 3 metres per second lowers static pressure by 4 kPa while the energy sum remains constant.](/figure/fisica-semestre-filtro/fluidi/bernoulli-en.svg)
:::

## Viscosity and flow regimes

:::osservazione{titolo="Origin of viscous stress"}
Real fluids have internal friction, called **viscosity**. Honey is more viscous than water. The fluid is thought of as divided into thin layers sliding over one another. The layer in contact with a stationary wall is at rest, and layers further away are progressively faster. Each layer slows the faster one sliding next to it. A force is therefore needed to maintain the motion, and the energy spent becomes heat.
:::

:::definizione{#viscosita titolo="Newtonian fluids and flow regimes"}
The friction force between two layers, divided by the contact area, is called the **shear stress** $\tau$. In a **Newtonian fluid** it is proportional to how fast the velocity changes from one layer to the next, that is, to the velocity gradient $\dfrac{dv}{dy}$:
$$
\tau=\eta\left|\dfrac{dv}{dy}\right|,
$$
The constant $\eta$ is the **viscosity** of the fluid and is measured in $\mathrm{Pa\,s}$. Water at $20\,^\circ\mathrm{C}$ has a viscosity of $1.0\cdot10^{-3}\,\mathrm{Pa\,s}$ and blood about $3.5\cdot10^{-3}\,\mathrm{Pa\,s}$. Water is a Newtonian fluid. Blood is one only approximately, because it contains cells and its viscosity changes with velocity and with vessel diameter.
:::

:::osservazione{titolo="Flow regimes and Reynolds number"}
A viscous fluid flows in two regimes.

- In the **laminar regime** the layers slide in order over one another without mixing. The flow is silent.
- In the **turbulent regime** irregular vortices form and the layers mix. The flow dissipates more energy and produces noise.

Laminar and steady are different properties. Steady means that at every point the velocity does not change over time. Blood flow in arteries is laminar and not steady, because it pulses with each beat.

The regime is predicted with the **Reynolds number**. For a pipe of diameter $D$:
$$
\mathrm{Re}=\dfrac{\rho\bar vD}{\eta}
$$
It is a pure number. In a straight pipe the flow is laminar if $\mathrm{Re}$ is less than about 2000 and becomes turbulent for much larger values. The threshold value depends on the shape of the duct. In the aorta, with $\rho=1060\,\mathrm{kg/m^3}$, $\bar v=0.30\,\mathrm{m/s}$, $D=0.020\,\mathrm{m}$ and $\eta=3.5\cdot10^{-3}\,\mathrm{Pa\,s}$, one obtains $\mathrm{Re}\simeq1800$. The flow is laminar, close to the limit. In a stenosis the velocity increases, the flow becomes turbulent and produces a noise, called a murmur, which is heard with a stethoscope.

![Normalised laminar parabolic profile: zero speed at the walls, maximum on the axis and mean speed equal to half the maximum.](/figure/fisica-semestre-filtro/fluidi/profile-en.svg)

In laminar flow in a pipe the velocity is zero at the wall and greatest on the axis, and its profile is a parabola. In the graph $x$ is the position along a diameter, with the origin on the axis of the pipe.
:::

## Poiseuille's law and hydraulic resistance
:::teorema{#poiseuille titolo="Laminar flow in a cylindrical pipe"}
To make a viscous fluid flow in a pipe a pressure difference between the two ends is needed, which compensates for friction. **Poiseuille's law** gives the flow rate of a Newtonian fluid in laminar flow in a rigid cylindrical pipe of radius $r$ and length $L$:
$$
Q=\dfrac{\pi r^4}{8\eta L}\Delta p,\qquad
R_h=\dfrac{8\eta L}{\pi r^4},\qquad \Delta p=R_hQ.
$$
In the formula $\Delta p$ is the inlet pressure minus the outlet pressure. The quantity $R_h$ is the **hydraulic resistance** of the pipe. With it the law takes the form $\Delta p=R_hQ$, similar to Ohm's law of electric circuits: the pressure difference corresponds to voltage, the flow rate to current. Resistance increases with viscosity and with length, and depends on the fourth power of the radius.
:::

:::osservazione{titolo="Developed profile and pressure losses"}
The velocity of the fluid at distance $s$ from the axis of the pipe is:
$$
v(s)=\dfrac{\Delta p}{4\eta L}(r^2-s^2),\qquad
v_{\max}=2\bar v.
$$
The velocity is zero at the wall, where $s=r$, and greatest on the axis, where $s=0$. The maximum velocity is twice the mean velocity.

The dependence on the fourth power of the radius is the most important result. If the radius halves, the resistance becomes $2^4=16$ times larger. For the same pressure difference the flow rate falls to one sixteenth. To maintain the same flow rate a pressure difference 16 times larger is needed. A 16% reduction in radius is enough to halve the flow rate, because $0.84^4\simeq0.50$. The body regulates the distribution of blood in this way: small arteries change their radius slightly and the flow rate changes greatly.
:::

:::teorema{#resistenze-idrauliche titolo="Series and parallel connections"}
Several connected pipes are equivalent to a single pipe, with an equivalent resistance $R_{\mathrm{eq}}$. There are two types of connection. Pipes **in series** are connected one after another. The same flow rate passes through them and the pressure differences add, so the resistances add:
$$
R_{\mathrm{eq}}=\sum_iR_i.
$$
Pipes **in parallel** start from the same point and arrive at the same point. They have the same pressure difference and their flow rates add, so the reciprocals of the resistances add:
$$
\dfrac1{R_{\mathrm{eq}}}=\sum_i\dfrac1{R_i}.
$$
:::

:::osservazione{titolo="Networks and pump constraints"}
In series the equivalent resistance is larger than each resistance. In parallel it is smaller than the smallest. Two equal pipes in parallel, for example, have an equivalent resistance equal to half that of one alone. Capillaries are billions of vessels in parallel, and for this reason their overall resistance is moderate, even though each one has an enormous resistance.

The power dissipated by friction in a pipe is $\mathcal P=\Delta p\,Q=R_hQ^2$. The heart of an adult at rest pushes $Q=5\,\mathrm{L/min}\simeq8.3\cdot10^{-5}\,\mathrm{m^3/s}$ with a mean pressure difference of about $100\,\mathrm{mmHg}\simeq1.3\cdot10^4\,\mathrm{Pa}$, so it supplies the blood with a power of about $1.1\,\mathrm{W}$.

![Series network with equal flow rate and parallel network with equal pressure difference; the combination laws are shown separately.](/figure/fisica-semestre-filtro/fluidi/network-en.svg)
:::

## Surface tension and Laplace's law

:::osservazione{titolo="Interface energy"}
The surface of a liquid behaves like a stretched elastic film. Molecules inside the liquid are attracted by their neighbours in all directions. Those at the surface are attracted only inwards and sideways, so the surface tends to shrink as much as possible. For this reason a free drop is spherical, since the sphere is the shape with the smallest surface for a given volume, and some insects walk on water.
:::

:::definizione{#laplace titolo="Flat and curved interfaces"}
**Surface tension** $\gamma$ measures this effect. It is the force with which the surface pulls along one of its edges, divided by the length of the edge. It is also the energy needed to increase the surface by one unit of area. For water at $20\,^\circ\mathrm{C}$ it is $0.073\,\mathrm{N/m}$.
$$
[\gamma]=\mathrm{N/m}=\mathrm{J/m^2}.
$$
A curved surface, precisely because it is under tension, presses on the fluid it encloses. The pressure on the concave side is therefore greater than on the convex side. **Laplace's law** gives this pressure difference as a function of the two radii of curvature $R_1$ and $R_2$ of the surface, measured in two perpendicular directions:
$$
\Delta p=\gamma\left(\dfrac1{R_1}+\dfrac1{R_2}\right).
$$
The more curved the surface, that is, the smaller the radii, the larger the pressure difference.
:::

:::osservazione{titolo="Curvatures and interface count"}
There are four special cases.

- **Sphere** of radius $r$, for example a drop or an air bubble in a liquid. Both radii equal $r$, so $\Delta p=\dfrac{2\gamma}{r}$.
- **Cylinder** of radius $r$. One radius is $r$ and the other is infinite, so $\Delta p=\dfrac{\gamma}{r}$.
- **Flat surface**. Both radii are infinite, so $\Delta p=0$.
- **Soap bubble**. The wall is a film with two surfaces, an inner and an outer one, so the effect is double: $\Delta p=\dfrac{4\gamma}{r}$.

The **alveoli** of the lungs are small, almost spherical cavities, lined inside with a film of liquid. By Laplace's law a smaller alveolus requires a higher pressure to stay open. With the surface tension of water the small alveoli would collapse. The liquid, however, contains a substance, **surfactant**, which reduces surface tension, especially when the alveolus is small. Premature babies, who do not yet produce surfactant, have severe breathing difficulties for this reason.

![Comparison of curvatures: plane, cylinder, sphere with one interface and soap bubble with two interfaces.](/figure/fisica-semestre-filtro/fluidi/laplace-en.svg)
:::

## Capillarity

:::osservazione{titolo="Meniscus geometry"}
**Capillarity** is the rise, or fall, of a liquid in a very thin tube, called a capillary. It depends on the attraction between the liquid and the wall. Where the liquid surface touches the wall it forms an angle with it, called the **contact angle** $\theta$, measured on the liquid side. If the liquid is attracted to the wall more than to itself, like water on glass, the angle is less than $90^\circ$ and the surface in the tube, called the meniscus, is concave. The liquid is said to wet the wall. If the opposite happens, as for mercury on glass, the angle is greater than $90^\circ$ and the meniscus is convex.
:::

:::teorema{#capillarita titolo="Capillary rise and depression"}
In a vertical tube of radius $r$ dipped in a liquid, surface tension pulls the liquid upwards all along the contact circumference, of length $2\pi r$. The vertical component of this force is $2\pi r\gamma\cos\theta$. The liquid rises until this force equals the weight of the raised column, of volume $\pi r^2h$. The equality gives the height $h$, known as **Jurin's law**:
$$
2\pi r\gamma\cos\theta=\rho g\pi r^2h,
\qquad h=\dfrac{2\gamma\cos\theta}{\rho gr}.
$$
The height is inversely proportional to the radius: in a tube of half the radius the liquid rises twice as high. For water in a glass tube, with $\theta\simeq0$ and $r=0.50\,\mathrm{mm}$, one obtains $h=\dfrac{2\cdot0.072}{1000\cdot9.81\cdot5.0\cdot10^{-4}}\simeq2.9\,\mathrm{cm}$, as in the figure further on.
:::

:::osservazione{titolo="Rise, depression and model limitations"}
The sign of $h$ depends on $\cos\theta$.

- If $\theta<90^\circ$ the cosine is positive and the liquid rises in the tube. This is the case for water in glass.
- If $\theta>90^\circ$ the cosine is negative and the liquid in the tube falls below the outside level. This is the case for mercury in glass.
- If $\theta=90^\circ$ the level does not change.

The same law is obtained from Laplace's law. Under a concave meniscus the pressure of the liquid is lower than that of the air, by an amount $\dfrac{2\gamma\cos\theta}{r}$. The liquid rises until the pressure $\rho gh$ of the column compensates for this difference. Once equilibrium is reached the liquid stays at rest.

![Capillary height versus radius for water with zero contact angle: 5.87 cm at 0.25 mm, 2.94 cm at 0.50 mm and 1.47 cm at 1.00 mm.](/figure/fisica-semestre-filtro/fluidi/capillary-en.svg)
:::
