---
titolo: Fluid mechanics and models of circulation
sommario: Gauge and absolute pressures, equilibrium and buoyancy, conservation of mass and energy, viscosity and hydraulic networks, interfaces and capillarity.
---
:::osservazione{titolo="Three balances for fluids"}
A liquid in a manometer, a jet passing through a narrowing and a nearly spherical drop require different balances. The first involves equilibrium of forces; the second follows mass and energy; in the third the energy cost of the interface also matters. The first decision is therefore to identify the system and the regime before choosing a formula.
:::

## States of matter, density and pressure

:::osservazione{titolo="Solids, liquids and gases"}
A solid rubber object can deform under a tangential force and reach equilibrium; an ordinary fluid keeps flowing while that stress acts. Liquids and gases are both fluids, but a liquid approximately retains its volume, whereas a gas fills the available space. Incompressibility is an approximation concerning changes in density: it does not mean absence of motion or viscosity.
:::

:::definizione{#pressione-densita titolo="Density and pressure"}
The average density of a homogeneous body and the uniform pressure on a surface are
$$
\rho=\dfrac{m}{V},\qquad p=\dfrac{F_\perp}{A}.
$$
Locally, pressure describes normal force per unit area. In a fluid at rest it is a scalar: the direction of the force depends on the normal to the surface on which it acts. The SI units are $\mathrm{kg/m^3}$ for density and $\mathrm{Pa}=\mathrm{N/m^2}$ for pressure.
:::

:::osservazione{titolo="Force, reference and conversions"}
Pressure is not force. Doubling the area at uniform pressure doubles the force; if force is fixed instead, doubling the area halves the pressure. When pressure varies across a surface, the force is found by adding contributions from small areas, rather than multiplying the entire area by an arbitrarily chosen value.

**Absolute pressure** is referenced to a vacuum; **gauge pressure** is referenced to a specified external pressure, often atmospheric pressure:
$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}.
$$
A gauge can indicate negative gauge pressure without indicating negative absolute pressure. For example, $p_{\mathrm{atm}}=101\,\mathrm{kPa}$ and $p_{\mathrm{rel}}=-20\,\mathrm{kPa}$ correspond to $p_{\mathrm{ass}}=81\,\mathrm{kPa}$. The same reference cancels in differences between two pressures.

For conversions, $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$, $1\,\mathrm{mL}=10^{-6}\,\mathrm{m^3}$ and $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$. The conventional millimetre of mercury is about $133.3\,\mathrm{Pa}$; the standard atmosphere is exactly $101325\,\mathrm{Pa}$ and does not necessarily equal local atmospheric pressure.

![Scale showing an absolute pressure of 81 kPa, atmospheric pressure of 101 kPa and a gauge difference of minus 20 kPa.](/figure/fisica-semestre-filtro/fluidi/pressure-en.svg)
:::

## Hydrostatic equilibrium and manometers

:::osservazione{titolo="Balance for a stationary column"}
Consider a vertical column of liquid at rest, with area $A$ and height $h$. The upward force on the base must balance the column's weight and the downward force on the upper face. Thus $(p-p_0)A=\rho Ahg$: area cancels. Pressure depends on depth, not on the width or shape of the vessel.
:::

:::teorema{#stevino titolo="Hydrostatic law"}
With constant density and gravitational acceleration, at depth $h$ below a level at pressure $p_0$,
$$
p=p_0+\rho gh.
$$
Using instead an upward coordinate $z$, $\dfrac{dp}{dz}=-\rho g$. Two points at the same height in the same connected liquid at rest have the same pressure.
:::

:::osservazione{titolo="Vessels and manometer columns"}
This last conclusion requires the stated conditions: it does not automatically apply to different liquids separated by a wall, or to a flowing conduit. In a vessel that widens upwards, force on the base can differ from the liquid's weight: inclined walls also exert vertical force components.

In a U-tube manometer, start from a known pressure and follow the columns: add $\rho g\Delta h$ when moving down and subtract it when moving up. Pressure is continuous across a flat interface at equilibrium when capillary effects are neglected. With different liquids, change the density at the interface. For a gas of negligible density connected to one arm, with the other open to air, a lower liquid level on the gas side indicates gas pressure above atmospheric pressure.

In a **Torricelli barometer**, atmospheric pressure supports the column against the pressure above it:
$$
p_{\mathrm{atm}}-p_{\mathrm{top}}=\rho_{\mathrm{Hg}}gh.
$$
Neglecting $p_{\mathrm{top}}$ gives the usual formula; if vapour or residual gas is significant, this term must be retained. The height difference is vertical even when the tube is tilted.
:::

:::esempio{titolo="A difference in height"}
For a liquid of density $1060\,\mathrm{kg/m^3}$, two points separated vertically by $0.40\,\mathrm{m}$ at rest have
$$
\Delta p=1060\cdot9.81\cdot0.40\,\mathrm{Pa}
\simeq4.16\cdot10^3\,\mathrm{Pa}\simeq31.2\,\mathrm{mmHg}.
$$
The lower point has higher pressure. This hydrostatic contribution can be significant in models of circulation, but does not by itself determine flow around the circuit.
:::

:::osservazione{titolo="Reading the hydrostatic graph"}
![Gauge pressure in water at rest: a straight line from zero to 19.62 kPa between zero and two metres of depth.](/figure/fisica-semestre-filtro/fluidi/hydrostatic-en.svg)
:::

## Pascal's principle and buoyancy

:::osservazione{titolo="Pressure increments in a hydraulic press"}
Additional pressure applied to a confined liquid changes pressures far from the point of application. It does not eliminate the hydrostatic difference between different heights. In a hydraulic press, the forces considered are additional to the common external pressure, and piston friction and weight are neglected.
:::

:::teorema{#pascal-archimede titolo="Pressure transmission and buoyant force"}
According to **Pascal's principle**, a pressure change applied to a confined incompressible fluid is transmitted through the fluid at equilibrium. With pistons at the same height,
$$
\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}.
$$
According to **Archimedes' principle**, the resultant of pressure forces on a body immersed in a fluid at rest acts upwards and equals the weight of the displaced fluid:
$$
F_A=\rho_f gV_{\mathrm{sub}}.
$$
The formula with a single density assumes a homogeneous fluid and a submerged volume $V_{\mathrm{sub}}$ entirely surrounded by the fluid, apart from the free surface.
:::

:::osservazione{titolo="Floating and constraint forces"}
Buoyancy arises because pressure increases downwards: forces on the lower part outweigh those on the upper part. A body can sink despite receiving an upward buoyant force if its weight is greater. A body sealed against the bottom requires a specific balance: water does not act on the sealed face.

For a homogeneous floating body with no supports, neglecting air and surface tension, equilibrium $mg=F_A$ gives
$$
\dfrac{V_{\mathrm{sub}}}{V}=\dfrac{\rho_c}{\rho_f}.
$$
The fraction above the surface is one minus this value. For a rigid body fully submerged in an incompressible liquid, buoyancy does not increase further with depth: pressures increase, but their resultant stays the same. A support from above measures tension $T=mg-F_A$ only when this is non-negative; if buoyancy exceeds weight, a downward force is needed to hold the body stationary.

The press also conserves transferred volume: $A_1s_1=A_2s_2$. In the ideal model with negligible height differences, $F_1s_1=F_2s_2$: gaining force requires a longer stroke. A hydraulic machine does not produce energy for free.

![Forces on a floating cube: equal weight and buoyancy, with 60 per cent of its volume submerged.](/figure/fisica-semestre-filtro/fluidi/buoyancy-en.svg)
:::

## Flow rate and the continuity equation

:::osservazione{titolo="Speed and flow rate"}
Velocity concerns local motion; flow rate quantifies how much fluid crosses a section. A large collection of small vessels can have a large total cross-sectional area and low mean speed while carrying the same flow rate as a larger vessel.
:::

:::teorema{#continuita titolo="Conservation of mass"}
The average volumetric flow rate over an interval is $Q=\dfrac{\Delta V}{\Delta t}$. For a section crossed normally by the flow,
$$
Q=A\bar v,\qquad \dot m=\rho Q.
$$
$\bar v$ is the cross-sectional mean, not necessarily the speed on the axis. For steady flow through a conduit without leaks or branches,
$$
\rho_1A_1\bar v_1=\rho_2A_2\bar v_2.
$$
If density is constant, $A_1\bar v_1=A_2\bar v_2$.
:::

:::osservazione{titolo="Conservation, accumulation and areas"}
Mass conservation remains valid for viscous fluids: it is not exclusive to the ideal model. A gas with changing density can instead have different volumetric flow rates at the two sections while retaining the same mass flow rate. If a conduit stores fluid by expanding, inflow and outflow can differ during the transient.

For circular sections $A=\pi r^2$. Halving the radius along a steady incompressible conduit halves a length but reduces the area to one quarter: mean speed quadruples. At a junction without accumulation, flow rates are added with their directions; two outlets do not necessarily receive half the flow each, because that depends on the branch resistances.

![Two circular sections with diameters in a two-to-one ratio: areas in a four-to-one ratio and speeds in a one-to-four ratio.](/figure/fisica-semestre-filtro/fluidi/continuity-en.svg)
:::

## Bernoulli's equation and changes in cross section

:::osservazione{titolo="Pressure work"}
Upstream pressure does work to push a fluid volume; downstream the fluid does work on its surroundings. The difference can become kinetic or gravitational potential energy. Dividing the energy balance by volume yields terms with pressure units.
:::

:::teorema{#bernoulli titolo="Energy balance for an ideal fluid"}
Along the same streamline, for steady incompressible flow with negligible viscosity and no pumps or turbines between the points,
$$
p+\dfrac12\rho v^2+\rho gz=\text{constant}.
$$
Here $p$ is static pressure, $v$ local speed and $z$ height measured upwards. Simple conduit models assume uniform speed across each section. Automatically substituting the mean of a non-uniform viscous profile would require energy corrections.
:::

:::osservazione{titolo="Applications and limits of Bernoulli"}
At the same height, within the same ideal flow, increasing speed corresponds to decreasing static pressure. It does not follow that any faster point always has lower pressure: height, streamline or energy conditions may differ. Even in steady flow a particle can accelerate through a narrowing; it is the quantities at each fixed point that do not change with time.

For a large open reservoir with an outlet much smaller than its free surface, the downward speed of the surface is negligible. If the surface and jet have the same external pressure, Bernoulli gives Torricelli's outflow law
$$
v=\sqrt{2g\Delta h}.
$$
This is an ideal, quasi-steady estimate; jet contraction and dissipation can alter the actual flow rate. It should not be confused with Torricelli's barometer experiment.
:::

:::osservazione{#circolazione titolo="Stenosis, aneurysm and pressure recovery"}
At fixed flow rate a narrowing increases speed; in the horizontal ideal model it lowers static pressure. A widening slows the flow. If the original height and area are restored after a narrowing, the ideal model restores the original pressure. In a real vessel some mechanical energy is dissipated: recovery is incomplete and the heart supplies work to the circuit. Elasticity, pulsations, complex geometry and the behaviour of blood limit the model.
:::

:::osservazione{titolo="Comparing energy terms"}
![Ideal horizontal balance: increasing speed from 1 to 3 metres per second lowers static pressure by 4 kPa while the energy sum remains constant.](/figure/fisica-semestre-filtro/fluidi/bernoulli-en.svg)
:::

## Viscosity and flow regimes

:::osservazione{titolo="Origin of viscous stress"}
Between two plates, one stationary and one moving, fluid layers drag one another. A tangential force is required to sustain the motion: the mechanical energy supplied is dissipated. Viscosity concerns the velocity gradient, rather than simply the presence of high speed.
:::

:::definizione{#viscosita titolo="Newtonian fluids and flow regimes"}
For a Newtonian fluid in plane flow, the magnitude of shear stress is
$$
\tau=\eta\left|\dfrac{dv}{dy}\right|,
$$
where $\eta$ is dynamic viscosity, measured in $\mathrm{Pa\,s}$. The gradient has units of $\mathrm{s^{-1}}$. If stress and gradient are not linearly related with constant viscosity, the Newtonian model is insufficient.
:::

:::osservazione{titolo="Flow regimes and Reynolds number"}
**Steady** means that quantities at each fixed point do not change with time. **Laminar** means ordered motion without the irregular fluctuations and eddies of turbulent flow. These classifications are not opposites: laminar flow can be pulsating and therefore unsteady; turbulent flow can have a constant mean flow rate while fluctuating instantaneously. Molecular diffusion can still mix substances in laminar flow.

For a pipe of diameter $D$,
$$
\mathrm{Re}=\dfrac{\rho\bar vD}{\eta}
$$
is a dimensionless number comparing inertial and viscous effects. Small values favour laminar flow. Transition depends on geometry, inlet conditions and disturbances: an experimental threshold for a straight pipe is not a universal law for circulation. Blood contains cells and can have an apparent viscosity that depends on flow and vessel size.

![Normalised laminar parabolic profile: zero speed at the walls, maximum on the axis and mean speed equal to half the maximum.](/figure/fisica-semestre-filtro/fluidi/profile-en.svg)

In the graph, $x$ is the signed coordinate along a diameter, with its origin on the axis; radial distance is $s=|x|$.
:::

## Poiseuille's law and hydraulic resistance
:::teorema{#poiseuille titolo="Laminar flow in a cylindrical pipe"}
For an incompressible Newtonian fluid in steady, fully developed laminar flow through a rigid horizontal cylindrical pipe of radius $r$ and length $L$, with no slip at the wall,
$$
Q=\dfrac{\pi r^4}{8\eta L}\Delta p,\qquad
R_h=\dfrac{8\eta L}{\pi r^4},\qquad \Delta p=R_hQ.
$$
Set $\Delta p=p_{\mathrm{in}}-p_{\mathrm{out}}>0$ in the flow direction. If heights differ, the driving difference also includes the gravitational contribution: static pressure difference alone cannot automatically be used.
:::

:::osservazione{titolo="Developed profile and pressure losses"}
The developed profile does not change shape along the pipe; this assumption can fail near the inlet. At distance $s$ from the axis,
$$
v(s)=\dfrac{\Delta p}{4\eta L}(r^2-s^2),\qquad
v_{\max}=2\bar v.
$$
Speed is zero at the stationary wall because of no slip. The gradient is zero on the axis and greatest in magnitude at the wall: maximum speed does not mean maximum shear stress. Integrating the profile across the section gives Poiseuille's flow rate.

Resistance is measured in $\mathrm{Pa\,s/m^3}$ and depends on the system, whereas viscosity is a fluid property under the conditions considered. Halving the radius multiplies resistance by $16$. At fixed pressure difference, flow rate becomes one sixteenth; at fixed flow rate, a sixteenfold pressure difference is required. Both conditions cannot be imposed simultaneously without changing something else.
:::

:::teorema{#resistenze-idrauliche titolo="Series and parallel connections"}
In a steady network of linear elements, with no accumulation and with gravitational contributions absent or already included, elements in series carry the same flow rate and their pressure drops add:
$$
R_{\mathrm{eq}}=\sum_iR_i.
$$
Parallel branches share the two end nodes and therefore the same pressure difference; their flow rates add:
$$
\dfrac1{R_{\mathrm{eq}}}=\sum_i\dfrac1{R_i}.
$$
:::

:::osservazione{titolo="Networks and pump constraints"}
Two identical parallel branches halve the equivalent resistance. Closing one increases resistance: total flow decreases if pressure difference is held fixed, whereas more pressure is required if a pump maintains flow rate. For a horizontal dissipative element, mechanical power loss is $\mathcal P=\Delta p\,Q=R_hQ^2$, positive in the flow direction. These relationships allow comparisons with electrical circuits without equating the biological system to a set of perfectly rigid tubes.

![Series network with equal flow rate and parallel network with equal pressure difference; the combination laws are shown separately.](/figure/fisica-semestre-filtro/fluidi/network-en.svg)
:::

## Surface tension and Laplace's law

:::osservazione{titolo="Interface energy"}
Creating new surface requires energy. At fixed volume and when gravity is unimportant, surface tension therefore favours a shape with a small area: a free drop tends towards a sphere. Along a line bounding an interface, the force is tangent to the surface and perpendicular to the line. The number of surfaces also matters in the work balance.
:::

:::definizione{#laplace titolo="Flat and curved interfaces"}
Surface tension $\gamma$ is force per unit length, equivalently energy per unit area:
$$
[\gamma]=\mathrm{N/m}=\mathrm{J/m^2}.
$$
For a single interface at equilibrium, with uniform tension, the Young-Laplace equation gives
$$
\Delta p=\gamma\left(\dfrac1{R_1}+\dfrac1{R_2}\right).
$$
The principal radii are oriented according to a consistent convention. For a convex surface viewed from outside, we choose internal pressure minus external pressure as positive and take the radii as positive.
:::

:::osservazione{titolo="Curvatures and interface count"}
For a sphere both radii equal $r$: $\Delta p=\dfrac{2\gamma}{r}$. For a cylindrical interface one equals $r$ and the other is infinite: $\Delta p=\dfrac\gamma r$. For a flat interface both are infinite and the curvature pressure jump is zero. This does not prevent pressure from varying with height within the phases.

A gas bubble inside a liquid has a single interface. A thin soap bubble instead separates gas and liquid film at two surfaces of nearly the same radius; the jumps add and the difference between internal and external gas pressure is approximately $\dfrac{4\gamma}{r}$. Film thickness must be negligible compared with radius for this simple form.

In a spherical model of an alveolus, a smaller radius requires greater excess pressure at fixed tension. Surfactant changes tension and its relationship with area; walls and interactions between alveoli matter. Comparing two isolated spheres with identical tension does not by itself describe lung stability.

![Comparison of curvatures: plane, cylinder, sphere with one interface and soap bubble with two interfaces.](/figure/fisica-semestre-filtro/fluidi/laplace-en.svg)
:::

## Capillarity

:::osservazione{titolo="Meniscus geometry"}
In a capillary connected to a large reservoir, the meniscus can raise or lower the level relative to the external surface. Contact angle $\theta$ is measured **through the liquid**. The vertical component of tension around the contact circumference depends on $\cos\theta$ and can therefore change sign.
:::

:::teorema{#capillarita titolo="Capillary rise and depression"}
For a vertical circular tube of internal radius $r$ at equilibrium, with negligible gas density, equal gas pressure above the surfaces and negligible contribution from meniscus volume,
$$
2\pi r\gamma\cos\theta=\rho g\pi r^2h,
\qquad h=\dfrac{2\gamma\cos\theta}{\rho gr}.
$$
$h$ is positive above the reservoir level. The usual approximation treats the raised liquid as a cylindrical column and requires a meniscus small relative to the height considered.
:::

:::osservazione{titolo="Rise, depression and model limitations"}
A wetting liquid with $\theta<90^\circ$ rises; $\theta>90^\circ$ produces depression, whereas at $\theta=90^\circ$ the vertical capillary contribution is zero. Doubling radius halves the height magnitude only if tension, density and angle remain unchanged. If the wall surface also changes, the entire effect cannot be attributed to radius.

The same law can be read as a balance between the meniscus pressure jump and the column's hydrostatic pressure. At a concave wetting meniscus, liquid pressure just beneath the interface is lower than gas pressure. The rise stops at equilibrium: a passive capillary cannot maintain flow indefinitely without an energy source or a process changing the conditions, such as evaporation.

![Capillary height versus radius for water with zero contact angle: 5.87 cm at 0.25 mm, 2.94 cm at 0.50 mm and 1.47 cm at 1.00 mm.](/figure/fisica-semestre-filtro/fluidi/capillary-en.svg)
:::
