---
titolo: "Physics for the TOLC-I"
sommario: "Measurements, motion, forces, energy, fluids, heat, waves, optics and electromagnetism through models, examples and graphs."
---

## Measurements, units and vectors

:::definizione{#misure titolo="Physical quantity and measurement unit"}
A **physical quantity** is a property that can be measured, such as a length, a mass or a duration. Measuring it means comparing it with a standard, the **unit of measurement**: the measurement $2\,\mathrm{m}$ states that the length contains the metre twice. The units used in physics are those of the **International System** (SI). Needed here are the metre ($\mathrm{m}$) for length, the kilogram ($\mathrm{kg}$) for mass, the second ($\mathrm{s}$) for time, the kelvin ($\mathrm{K}$) for temperature and the ampere ($\mathrm{A}$) for electric current. The other units are products and ratios of these, such as the metre per second for velocity.

A **prefix** multiplies the unit by a power of ten: kilo ($\mathrm{k}$) by $10^{3}$, centi ($\mathrm{c}$) by $10^{-2}$, milli ($\mathrm{m}$) by $10^{-3}$. A **conversion** changes the number and the unit together and leaves the quantity unchanged, as in $1.5\,\mathrm{km}=1500\,\mathrm{m}$. In an area or a volume the unit is squared or cubed, and so is the conversion factor:
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=(10^{-2}\,\mathrm{m})^3=10^{-6}\,\mathrm{m^3}.
$$
One litre is $1\,\mathrm{L}=1000\,\mathrm{cm^3}=10^{-3}\,\mathrm{m^3}$, so half a litre occupies $5\cdot10^{-4}\,\mathrm{m^3}$.
:::

:::esempio{titolo="A speed conversion"}
A car travels at $72\,\mathrm{km/h}$. One kilometre is $1000\,\mathrm{m}$ and one hour is $3600\,\mathrm{s}$, so
$$
72\,\frac{\mathrm{km}}{\mathrm{h}}
=72\,\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}
=20\,\mathrm{m/s}.
$$
The ratio of a length to a time has the unit of a velocity. A correct formula is **dimensionally consistent**: it adds and equates only quantities with the same unit, so a velocity and a distance cannot be added.
:::

:::definizione{#vettori titolo="Scalars and vectors"}
A **scalar** quantity is fully described by a number with its unit: mass, temperature and energy are scalars. A **vector**, such as displacement, velocity or force, has three elements.

- The **magnitude** is the value with its unit, positive or zero.
- The **direction** is the straight line along which the vector lies.
- The **sense** is one of the two ways of travelling along that line.

A vector is drawn as an arrow and written $\vec F$; the letter without the arrow, $F$, denotes the magnitude.

An **oriented axis** is a straight line with a positive sense. The **component** along the axis of a vector parallel to it is its magnitude with sign $+$ if the vector points along the axis and $-$ if it points the opposite way. Vectors on the same line are added by adding their components: a displacement of $10\,\mathrm{m}$ east and one of $4\,\mathrm{m}$ west are equivalent to $10\,\mathrm{m}-4\,\mathrm{m}=6\,\mathrm{m}$ east. Two perpendicular vectors of magnitudes $F_x$ and $F_y$ are the legs of a right-angled triangle and their sum is the hypotenuse, of magnitude $\sqrt{F_x^2+F_y^2}$: $3\,\mathrm{m}$ east and $4\,\mathrm{m}$ north lead to $\sqrt{3^2+4^2}\,\mathrm{m}=5\,\mathrm{m}$ from the starting point.

The **dot product** is the number $\vec F\cdot\vec s=Fs\cos\theta$, where $\theta$ (theta) is the angle between the two vectors and $F\cos\theta$ is the component of $\vec F$ along $\vec s$. It is used to define work.
:::

:::osservazione
Every measurement has an **uncertainty**. The notation $L=(12.0\pm0.2)\,\mathrm{cm}$, where $\pm$ is read "plus or minus", denotes a length between $11.8\,\mathrm{cm}$ and $12.2\,\mathrm{cm}$. The **relative uncertainty** is the ratio of the uncertainty to the measured value, $\dfrac{0.2\,\mathrm{cm}}{12.0\,\mathrm{cm}}\approx0.017$, about $1.7\%$; $\approx$ is read "approximately equal to". The digits written show the precision: $12.0\,\mathrm{cm}$ is a reading to the tenth of a centimetre, and writing $12.00\,\mathrm{cm}$ would claim a precision to the hundredth that the measurement does not have.

**Random errors** shift repeated readings sometimes upwards and sometimes downwards, so averaging reduces their effect. A **systematic error**, such as that of a badly calibrated balance, shifts all readings the same way and remains in the average.
:::

## Position, velocity and acceleration

:::definizione{#cinematica titolo="Displacement and average velocity"}
Motion along a straight line is described by fixing an oriented axis and an **origin** on it. The **position** $x$ is the distance of the body from the origin, in metres, with the sign $+$ on the side towards which the axis points and $-$ on the other; $x(t)$ is the position at time $t$.

The letter $\Delta$ (delta) in front of a quantity denotes its change: final value minus initial value. The **displacement** is $\Delta x=x_f-x_i$, positive if the body has moved in the sense of the axis and negative otherwise. The **distance travelled** is the length of the whole path and is positive or zero. The **average velocity** is the displacement divided by the time interval $\Delta t$ in which it occurs,
$$
v_m=\frac{\Delta x}{\Delta t},
$$
and is measured in metres per second. The velocity at an instant is the average velocity over a very short interval around that instant.

A body that starts from $2\,\mathrm{m}$, reaches $10\,\mathrm{m}$ and returns to $6\,\mathrm{m}$ in $4\,\mathrm{s}$ has displacement $6\,\mathrm{m}-2\,\mathrm{m}=4\,\mathrm{m}$, distance travelled $8\,\mathrm{m}+4\,\mathrm{m}=12\,\mathrm{m}$ and average velocity $\dfrac{4\,\mathrm{m}}{4\,\mathrm{s}}=1\,\mathrm{m/s}$. A full lap back to the start gives zero displacement, though the distance travelled is positive.

On a **position-time graph**, with $t$ horizontal and $x$ vertical, the average velocity between two instants is the slope of the segment joining the two points. A rising line represents a constant positive velocity (**uniform rectilinear motion**); a horizontal line represents a body at rest. Where the graphs of two bodies meet, the bodies have the same position at the same instant.
:::

:::teorema{#moto-uniformemente-accelerato titolo="Motion with constant acceleration"}
**Acceleration** is the change in velocity divided by the time interval in which it occurs, $a=\dfrac{\Delta v}{\Delta t}$. It is measured in $\mathrm{m/s^2}$: with $a=2\,\mathrm{m/s^2}$ the velocity increases by $2\,\mathrm{m/s}$ every second. If $a$ is constant and $x_0$, $v_0$ are the position and velocity at time $t=0$, then
$$
v=v_0+at,\qquad x=x_0+v_0t+\frac12at^2.
$$
Eliminating time between the two laws gives $v^2-v_0^2=2a(x-x_0)$. The quantities are components along the same axis, so they have a sign. If velocity and acceleration have the same sign the body speeds up; if they have opposite signs it slows down until it stops and then, if the acceleration persists, moves off in the opposite sense.

A car travelling at $v_0=20\,\mathrm{m/s}$ and braking with $a=-4\,\mathrm{m/s^2}$ stops ($v=0$) after $t=\dfrac{20\,\mathrm{m/s}}{4\,\mathrm{m/s^2}}=5\,\mathrm{s}$. While braking it covers $x-x_0=\dfrac{0-(20\,\mathrm{m/s})^2}{2\cdot(-4\,\mathrm{m/s^2})}=50\,\mathrm{m}$.
:::

:::esempio{titolo="From a velocity-time graph to distance"}
A body starts from rest, so $v_0=0$, and has acceleration $2\,\mathrm{m/s^2}$ for $3\,\mathrm{s}$. The final velocity is $2\,\mathrm{m/s^2}\cdot3\,\mathrm{s}=6\,\mathrm{m/s}$ and the displacement is $\dfrac12\cdot2\,\mathrm{m/s^2}\cdot(3\,\mathrm{s})^2=9\,\mathrm{m}$. On a velocity-time graph the displacement is the area between the graph and the time axis, here a triangle of base $3\,\mathrm{s}$ and height $6\,\mathrm{m/s}$, of area $\dfrac12\cdot3\,\mathrm{s}\cdot6\,\mathrm{m/s}=9\,\mathrm{m}$. The product of the final velocity and the time, $18\,\mathrm{m}$, is twice the displacement, because the body reaches $6\,\mathrm{m/s}$ only at the end.

::grafico{f="2*x" xmin=0 xmax=3.5 ymin=0 ymax=7 nomi="t,v" area="2*x;0;0;3" punti="3,6,pieno" legenda="v=2t" titolo="Time in seconds, velocity in m/s: the area is the displacement of 9 m"}
:::

:::osservazione
Near the Earth's surface, if air resistance is negligible, all bodies fall with the same acceleration, directed downwards. This is the **acceleration due to gravity** $g\approx9.8\,\mathrm{m/s^2}$; in quick calculations $10\,\mathrm{m/s^2}$ is used. With the vertical axis pointing upwards, $a=-g$ both while the body rises and while it falls.

A stone thrown upwards at $20\,\mathrm{m/s}$ has $v=20\,\mathrm{m/s}-10\,\mathrm{m/s^2}\cdot t$, so it stops after $2\,\mathrm{s}$, at the height $20\,\mathrm{m/s}\cdot2\,\mathrm{s}-\dfrac12\cdot10\,\mathrm{m/s^2}\cdot(2\,\mathrm{s})^2=20\,\mathrm{m}$. At the highest point the velocity is zero for an instant, whereas the acceleration is still $-g$.
:::

## Forces, equilibrium and circular motion

:::teorema{#dinamica titolo="Newton's laws"}
A **force** is an action, such as a push or a pull, that one body exerts on another and that changes its velocity or deforms it. It is a vector, measured in newtons ($\mathrm{N}$). The **mass** $m$, in kilograms, measures how much a body resists changes in velocity. The **resultant** $\sum\vec F$ is the vector sum of all the forces applied to a body; $\sum$ is read "sum of". Newton's laws hold for a non-accelerating observer, called an **inertial reference frame**; an observer at rest relative to the ground is one to a good approximation.

- **First law.** If the resultant is zero, the velocity of the body stays constant, that is, the body stays at rest or continues in a straight line at the same velocity.
- **Second law.** For a body of constant mass $\sum\vec F=m\vec a$, so the acceleration has the direction and sense of the resultant. The law is written separately along each axis. It follows that $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$.
- **Third law.** If a body A exerts a force on a body B, then B exerts on A a force of equal magnitude and opposite sense. The two forces, called action and reaction, act on different bodies.

A $4\,\mathrm{kg}$ crate pulled to the right with $18\,\mathrm{N}$ and slowed by a friction force of $6\,\mathrm{N}$, opposite to the motion, has resultant $18\,\mathrm{N}-6\,\mathrm{N}=12\,\mathrm{N}$, not $18\,\mathrm{N}$, and acceleration $\dfrac{12\,\mathrm{N}}{4\,\mathrm{kg}}=3\,\mathrm{m/s^2}$ to the right. A book at rest on a table is acted on by its weight and the table's force, which balance; the reaction to the weight is instead the book's pull on the Earth.
:::

:::definizione{#forze-usuali titolo="Weight, elasticity and friction"}
- **Weight** is the force with which the Earth attracts a body, directed downwards and of magnitude $P=mg$. A $2\,\mathrm{kg}$ body weighs $2\,\mathrm{kg}\cdot10\,\mathrm{m/s^2}=20\,\mathrm{N}$ on the Earth; on the Moon, where $g\approx1.6\,\mathrm{m/s^2}$, it has the same mass and weighs $3.2\,\mathrm{N}$.
- The **elastic force** of a spring stretched or compressed by $x$ is directed towards the rest position and has magnitude $k|x|$. The bars denote the absolute value and $k$ is the **spring constant**, in $\mathrm{N/m}$: with $k=200\,\mathrm{N/m}$ and $x=0.05\,\mathrm{m}$ the force is $200\,\mathrm{N/m}\cdot0.05\,\mathrm{m}=10\,\mathrm{N}$.
- The **normal reaction** $N$ is the force, perpendicular to the surface, with which a plane supports the body resting on it. On a horizontal plane, with no other vertical forces, $N=mg$.
- **Friction** is the force parallel to the contact surface that opposes sliding. On a body at rest, static friction equals the force tending to move it, up to the maximum $\mu_sN$: $F_s\leq\mu_sN$. On a sliding body, kinetic friction is $F_d=\mu_dN$ and is opposite to the velocity. The coefficients $\mu_s$ and $\mu_d$ (mu) are numbers without units.

A $5\,\mathrm{kg}$ crate on a floor with $\mu_s=0.4$ has $N=5\,\mathrm{kg}\cdot10\,\mathrm{m/s^2}=50\,\mathrm{N}$ and maximum static friction $0.4\cdot50\,\mathrm{N}=20\,\mathrm{N}$. Pushed with $8\,\mathrm{N}$ it stays at rest, and the friction is $8\,\mathrm{N}$.

The **moment** of a force about a point measures its turning effect and has magnitude $Fb$, where the arm $b$ is the distance of the point from the force's line of action. An extended body is in equilibrium if the resultant and the sum of the moments are both zero, moments producing opposite rotations taking opposite signs. On a see-saw, $300\,\mathrm{N}$ at $2\,\mathrm{m}$ from the pivot balance $400\,\mathrm{N}$ at $1.5\,\mathrm{m}$ on the other side, because $300\,\mathrm{N}\cdot2\,\mathrm{m}=400\,\mathrm{N}\cdot1.5\,\mathrm{m}=600\,\mathrm{N\,m}$.
:::

:::definizione{#moto-circolare titolo="Centripetal acceleration"}
In **uniform circular motion** a body moves round a circle of radius $r$ at constant speed $v$. The **period** $T$ is the time for one revolution; the **frequency** $f$ is the number of revolutions per second, in hertz ($1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$). The velocity is tangent to the circle and changes direction continuously, so the body has an acceleration, directed towards the centre and called **centripetal acceleration** $a_c$. Then
$$
v=\frac{2\pi r}{T},\qquad f=\frac1T,\qquad a_c=\frac{v^2}{r}.
$$
By Newton's second law the resultant points towards the centre and equals $\dfrac{mv^2}{r}$: it is the **centripetal force**, supplied, for example, by string tension, friction on a bend or gravitation. A $0.5\,\mathrm{kg}$ stone travelling in $4\,\mathrm{s}$ round a circle of radius $2\,\mathrm{m}$ has $f=\dfrac1{4\,\mathrm{s}}=0.25\,\mathrm{Hz}$, $v=\dfrac{2\pi\cdot2\,\mathrm{m}}{4\,\mathrm{s}}\approx3.14\,\mathrm{m/s}$ and $a_c=\dfrac{(3.14\,\mathrm{m/s})^2}{2\,\mathrm{m}}\approx4.9\,\mathrm{m/s^2}$; the string exerts the force $0.5\,\mathrm{kg}\cdot4.9\,\mathrm{m/s^2}\approx2.5\,\mathrm{N}$.

On the graph, at point P, the velocity $v$ and the acceleration $a$ are perpendicular.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185" xmin=-3 xmax=4 ymin=-3 ymax=4 uguale=1 vettori="2,0,2,2,v;2,0,0.5,0,a" punti="2,0,pieno,P" legenda="x^2+y^2=4" titolo="At point P velocity v is tangential and acceleration a is centripetal"}
:::

## Work, energy and momentum

:::definizione{#energia titolo="Work and kinetic energy"}
The **work** done by a constant force $\vec F$ on a body that moves through $\vec s$ is
$$
W=Fs\cos\theta,
$$
where $\theta$ is the angle between the force and the displacement. It is the product of the displacement and the component $F\cos\theta$ of the force along it, measured in joules, $1\,\mathrm{J}=1\,\mathrm{N\,m}$. Work is positive if the force points the same way as the displacement ($\cos0^\circ=1$), zero if it is perpendicular ($\cos90^\circ=0$), negative if it is opposite ($\cos180^\circ=-1$), as for friction. A force of $10\,\mathrm{N}$ at $60^\circ$ to a displacement of $4\,\mathrm{m}$ does $10\,\mathrm{N}\cdot4\,\mathrm{m}\cdot\cos60^\circ=40\,\mathrm{J}\cdot\dfrac12=20\,\mathrm{J}$, because the component along the displacement is $5\,\mathrm{N}$.

**Energy** is the capacity to do work, measured in joules. **Kinetic energy** is the energy of a moving body, $K=\dfrac12mv^2$: a $2\,\mathrm{kg}$ body at $3\,\mathrm{m/s}$ has $K=\dfrac12\cdot2\,\mathrm{kg}\cdot(3\,\mathrm{m/s})^2=9\,\mathrm{J}$. The total work (that of the resultant) equals the change in kinetic energy, $W_{\mathrm{tot}}=K_f-K_i$. Negative total work reduces the kinetic energy, which still stays positive or zero. If the resultant does $16\,\mathrm{J}$ on the previous body, starting from rest, the final velocity is $\sqrt{\dfrac{2\cdot16\,\mathrm{J}}{2\,\mathrm{kg}}}=4\,\mathrm{m/s}$. **Power** is the work done per unit time, $P=\dfrac W{\Delta t}$, in watts ($1\,\mathrm{W}=1\,\mathrm{J/s}$): an engine that does $600\,\mathrm{J}$ in $3\,\mathrm{s}$ has power $\dfrac{600\,\mathrm{J}}{3\,\mathrm{s}}=200\,\mathrm{W}$.
:::

:::teorema{#conservazione-energia titolo="Mechanical energy"}
**Potential energy** is the energy a body has because of its position. A body of mass $m$ at height $h$ above a reference level has gravitational potential energy $U_g=mgh$; a spring of constant $k$ deformed by $x$ has elastic potential energy $U_e=\dfrac12kx^2$. **Mechanical energy** is the sum $K+U$ of the kinetic and potential energies. Weight and the elastic force are **conservative** forces, that is, forces whose work depends only on the initial and final positions and equals $-\Delta U$; friction is non-conservative. If the non-conservative forces do zero work, mechanical energy is conserved. For a body that starts from rest and descends without friction through a vertical drop $h$, therefore,
$$
mgh=\frac12mv^2,\qquad v=\sqrt{2gh}.
$$
The mass cancels and the velocity depends on the vertical drop, not on the length of the slope. With friction, the change in mechanical energy equals the work of the non-conservative forces, which for friction is negative.

From a slide $1.8\,\mathrm{m}$ high, with $g=10\,\mathrm{m/s^2}$, the bottom is reached at $\sqrt{2\cdot10\,\mathrm{m/s^2}\cdot1.8\,\mathrm{m}}=6\,\mathrm{m/s}$. For a $30\,\mathrm{kg}$ child the initial energy is $30\,\mathrm{kg}\cdot10\,\mathrm{m/s^2}\cdot1.8\,\mathrm{m}=540\,\mathrm{J}$. If friction does $-300\,\mathrm{J}$, at the bottom $240\,\mathrm{J}$ of kinetic energy remain and the velocity is $\sqrt{\dfrac{2\cdot240\,\mathrm{J}}{30\,\mathrm{kg}}}=4\,\mathrm{m/s}$.
:::

:::definizione{#quantita-di-moto titolo="Impulse and collisions"}
**Momentum** is the vector $\vec p=m\vec v$, in $\mathrm{kg\,m/s}$. The **impulse** of a constant force is $\vec J=\vec F\Delta t$, in $\mathrm{N\,s}$; the impulse of the resultant equals the change in momentum. A force of $10\,\mathrm{N}$ acting for $0.5\,\mathrm{s}$ on a $2\,\mathrm{kg}$ body at rest gives it $p=10\,\mathrm{N}\cdot0.5\,\mathrm{s}=5\,\mathrm{kg\,m/s}$, a velocity of $\dfrac{5\,\mathrm{kg\,m/s}}{2\,\mathrm{kg}}=2.5\,\mathrm{m/s}$.

A **system** is the set of bodies being studied. If the impulse of external forces is negligible, the vector sum of the momenta is conserved. This is the case in a **collision**: the two bodies exert equal and opposite forces on each other by the third law, so the momentum lost by one is gained by the other. In an **elastic** collision kinetic energy is also conserved; in an **inelastic** collision part of it is converted into deformation and heat. If the bodies stick together, the collision is completely inelastic and the common velocity $v_f$ satisfies $m_1v_1+m_2v_2=(m_1+m_2)v_f$, with signed velocities.

A $2\,\mathrm{kg}$ trolley at $3\,\mathrm{m/s}$ couples to a $1\,\mathrm{kg}$ trolley at rest, so $v_f=\dfrac{2\,\mathrm{kg}\cdot3\,\mathrm{m/s}+0}{3\,\mathrm{kg}}=2\,\mathrm{m/s}$. The kinetic energy goes from $\dfrac12\cdot2\,\mathrm{kg}\cdot(3\,\mathrm{m/s})^2=9\,\mathrm{J}$ to $\dfrac12\cdot3\,\mathrm{kg}\cdot(2\,\mathrm{m/s})^2=6\,\mathrm{J}$, whereas the momentum remains $6\,\mathrm{kg\,m/s}$.
:::

## Fluids at rest and in motion

:::definizione{#fluidi titolo="Density and pressure"}
A **fluid** is a substance with no shape of its own: a liquid or a gas. **Density** is the ratio of mass to volume, $\rho=\dfrac mV$ ($\rho$ is read rho), in $\mathrm{kg/m^3}$. Water has $\rho=1000\,\mathrm{kg/m^3}$, so one litre of water has mass $1\,\mathrm{kg}$. **Pressure** is the ratio of the force pressing perpendicularly on a surface to its area, $p=\dfrac{F_\perp}{A}$, in pascals ($1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$); $\perp$ is read "perpendicular". For the same force the pressure is greater on a smaller area: $600\,\mathrm{N}$ on $0.03\,\mathrm{m^2}$ give $\dfrac{600\,\mathrm{N}}{0.03\,\mathrm{m^2}}=20000\,\mathrm{Pa}$. This is why a sharp point, which has a very small area, penetrates with a modest force.

In a liquid at rest of uniform density the pressure increases with depth, because each layer supports the weight of the liquid above it. The **hydrostatic pressure law** (Stevin's law) gives the pressure at depth $h$ below the surface:
$$
p=p_0+\rho gh,
$$
where $p_0$ is the pressure on the surface. For a liquid in the open, $p_0$ is atmospheric pressure, exerted by the air, about $10^5\,\mathrm{Pa}$. For the same liquid and the same $p_0$ the pressure depends on depth and not on the shape of the container. This is why in communicating vessels, containers connected at the bottom and open to the same pressure, the same liquid reaches the same height.
:::

:::esempio{titolo="Absolute pressure and pressure increase"}
In water, with $g=10\,\mathrm{m/s^2}$, at a depth of $2\,\mathrm{m}$ the pressure increase relative to the surface is
$$
\rho gh=1000\,\mathrm{kg/m^3}\cdot10\,\mathrm{m/s^2}\cdot2\,\mathrm{m}=20000\,\mathrm{Pa}=20\,\mathrm{kPa}.
$$
With $p_0=100000\,\mathrm{Pa}$ the overall pressure, called **absolute**, is $100000\,\mathrm{Pa}+20000\,\mathrm{Pa}=120000\,\mathrm{Pa}$. The graph shows the increase $\Delta p=p-p_0$ as a function of $h$: it is a straight line through the origin, rising by $10\,\mathrm{kPa}$ every metre; the marked point corresponds to $2\,\mathrm{m}$ and $20\,\mathrm{kPa}$.

::grafico{f="10*x" xmin=0 xmax=4 ymin=0 ymax=45 nomi="h,Δp" punti="2,20,pieno" legenda="p-p_0=10h" titolo="Depth h in meters and pressure increase Δp in kPa: Δp is the difference from surface pressure"}
:::

:::teorema{#archimede titolo="Buoyant force"}
A body immersed in a fluid receives an upward thrust, because the pressure is greater on its deeper, lower face. **Archimedes' principle** states that the thrust equals the weight of the displaced fluid:
$$
F_A=\rho_fgV_{\mathrm{imm}},
$$
where $\rho_f$ is the fluid's density and $V_{\mathrm{imm}}$ is the immersed volume. A stone of $2\cdot10^{-3}\,\mathrm{m^3}$ immersed in water receives $1000\,\mathrm{kg/m^3}\cdot10\,\mathrm{m/s^2}\cdot2\cdot10^{-3}\,\mathrm{m^3}=20\,\mathrm{N}$.

A body of volume $V$ and average density $\rho_c$ greater than $\rho_f$ sinks; if $\rho_c$ is less than $\rho_f$ it floats. For a body floating in equilibrium, with no other vertical forces, the thrust equals the weight, $\rho_fgV_{\mathrm{imm}}=\rho_cgV$, so $\dfrac{V_{\mathrm{imm}}}{V}=\dfrac{\rho_c}{\rho_f}$. Ice, of density about $920\,\mathrm{kg/m^3}$, floats in water with the fraction $\dfrac{920\,\mathrm{kg/m^3}}{1000\,\mathrm{kg/m^3}}=0.92$ of its volume immersed, or $92\%$; a body with half the density of the liquid floats half immersed.
:::

:::definizione{#continuita titolo="Volume flow rate and continuity"}
The **flow rate** is the volume of fluid crossing a section of a pipe per unit time, $q_v=\dfrac{\Delta V}{\Delta t}$, in $\mathrm{m^3/s}$. If the section has area $A$ and the fluid has average velocity $v$, then $q_v=Av$: with $A=4\cdot10^{-4}\,\mathrm{m^2}$ and $v=2\,\mathrm{m/s}$ the flow rate is $8\cdot10^{-4}\,\mathrm{m^3/s}$. A liquid is **incompressible**: it keeps its volume. In a pipe without leaks or branches, in **steady** flow (constant in time), the flow rate is therefore the same at every section. This is the **continuity equation** $A_1v_1=A_2v_2$, which expresses conservation of mass and does not contain the pressure. Where the pipe narrows the liquid is faster: if the section goes from $4\,\mathrm{cm^2}$ to $1\,\mathrm{cm^2}$, the velocity goes from $2\,\mathrm{m/s}$ to $2\,\mathrm{m/s}\cdot\dfrac{4\,\mathrm{cm^2}}{1\,\mathrm{cm^2}}=8\,\mathrm{m/s}$. The flow is **laminar** if the fluid moves in ordered layers, **turbulent** if eddies form and the layers mix.

**Pascal's principle** states that a pressure increase produced at one point of a liquid enclosed in a container is transmitted to all its points. In a hydraulic press two pistons of areas $A_1$ and $A_2$, at the same height, enclose the same liquid, so $\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}$. With $A_2=10A_1$, a force of $50\,\mathrm{N}$ on the small piston balances $10\cdot50\,\mathrm{N}=500\,\mathrm{N}$ on the large piston.
:::

## Temperature, heat and gases

:::definizione{#calore titolo="Temperature and energy transfer"}
**Temperature** is the quantity that tells how hot a body is. The kelvin scale has degrees of the same size as the Celsius scale and starts from absolute zero, the lowest possible temperature, $-273.15\,{}^\circ\mathrm{C}$. The **absolute temperature** is therefore $T=t_C+273.15$, with $T$ in kelvin and $t_C$ in degrees Celsius: $20\,{}^\circ\mathrm{C}$ correspond to $(20+273.15)\,\mathrm{K}=293.15\,\mathrm{K}$. A temperature difference has the same value on the two scales, because the constant cancels in the subtraction: an increase of $20\,{}^\circ\mathrm{C}$ is an increase of $20\,\mathrm{K}$. In ratios of temperatures, which appear in the gas laws, the absolute temperature is used.

**Heat** is the energy that passes from one body to another because of a temperature difference, measured in joules. It passes spontaneously from the hotter body to the colder one, until the two have the same temperature: this is **thermal equilibrium**. Heat is transferred in three ways.

- By **conduction** it crosses a material without any movement of matter.
- By **convection** it is carried by a moving fluid.
- By **radiation** it is carried by electromagnetic waves, such as light, even through a vacuum.
:::

:::teorema{#calorimetria titolo="Specific heat capacity and phase changes"}
The **specific heat capacity** $c$ of a substance is the energy needed to raise the temperature of one kilogram of it by one kelvin, in $\mathrm{J/(kg\,K)}$; for water it is about $4200\,\mathrm{J/(kg\,K)}$. If no phase changes occur and $c$ is constant, the heat exchanged by a mass $m$ whose temperature changes by $\Delta T$ is
$$
Q=mc\Delta T,
$$
positive if the body absorbs heat and negative if it gives it out. Heating $0.5\,\mathrm{kg}$ of water by $3\,\mathrm{K}$ takes $0.5\,\mathrm{kg}\cdot4200\,\mathrm{J/(kg\,K)}\cdot3\,\mathrm{K}=6300\,\mathrm{J}$.

A **phase change** is the passage between the solid, liquid and gaseous states, such as melting. While it takes place, at constant pressure, the temperature stays constant and the heat exchanged is $Q=mL$, where the **specific latent heat** $L$ is the energy needed for one kilogram, in $\mathrm{J/kg}$. For ice $L\approx334000\,\mathrm{J/kg}$, so melting $0.2\,\mathrm{kg}$ requires $0.2\,\mathrm{kg}\cdot334000\,\mathrm{J/kg}=66800\,\mathrm{J}$. During melting, at atmospheric pressure, the heat absorbed changes the amounts of water and ice, which stay at $0\,{}^\circ\mathrm{C}$.

For small temperature changes a solid bar of length $\ell_0$, heated by $\Delta T$, lengthens by $\Delta\ell=\alpha\ell_0\Delta T$, where $\alpha$ (alpha) is the coefficient of linear expansion, in $\mathrm{K^{-1}}$. For steel $\alpha\approx1.2\cdot10^{-5}\,\mathrm{K^{-1}}$: a $10\,\mathrm{m}$ rail heated by $30\,\mathrm{K}$ lengthens by $1.2\cdot10^{-5}\,\mathrm{K^{-1}}\cdot10\,\mathrm{m}\cdot30\,\mathrm{K}=3.6\cdot10^{-3}\,\mathrm{m}$, or $3.6\,\mathrm{mm}$.
:::

:::teorema{#gas-ideali titolo="Ideal-gas equation"}
The state of a gas is described by its absolute pressure $p$, its volume $V$ and its absolute temperature $T$. The amount of gas is measured in moles: one mole contains about $6.02\cdot10^{23}$ particles, and $n$ is the number of moles. An **ideal gas** is a gas whose particles have negligible size and interact only in collisions; air has these properties to a good approximation. For an ideal gas
$$
pV=nRT,
$$
with $R=8.31\,\mathrm{J/(mol\,K)}$. For a fixed amount of gas the ratio $\dfrac{pV}{T}$ is constant, so two states satisfy $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. In three **processes** (passages from one state to another) one quantity stays constant.

- **Isothermal**, at constant temperature: $p_1V_1=p_2V_2$.
- **Isochoric**, at constant volume, as in a rigid container: $\dfrac{p_1}{T_1}=\dfrac{p_2}{T_2}$.
- **Isobaric**, at constant pressure, as under a piston free to move: $\dfrac{V_1}{T_1}=\dfrac{V_2}{T_2}$.
:::

:::esempio{titolo="A heated cylinder"}
A rigid cylinder contains gas at $2\cdot10^5\,\mathrm{Pa}$ and $27\,{}^\circ\mathrm{C}$, and is heated to $177\,{}^\circ\mathrm{C}$. The volume is constant, so the process is isochoric. The absolute temperatures are $T_1=(27+273)\,\mathrm{K}=300\,\mathrm{K}$ and $T_2=(177+273)\,\mathrm{K}=450\,\mathrm{K}$, hence
$$
p_2=p_1\frac{T_2}{T_1}=2\cdot10^5\,\mathrm{Pa}\cdot\frac{450\,\mathrm{K}}{300\,\mathrm{K}}=3\cdot10^5\,\mathrm{Pa}.
$$
:::

:::attenzione
In the gas laws the temperature is in kelvin. In the example the ratio of the Celsius temperatures, $\dfrac{177}{27}\approx6.6$, would give a pressure more than four times the correct one.
:::

## Thermodynamic energy balances

:::teorema{#termodinamica titolo="First law"}
Here the system is a body, for example a gas in a cylinder with a piston; everything else is the **surroundings**. The **internal energy** $U$ is the sum of the energies of the particles of the system, in joules. The system exchanges energy with the surroundings as heat $Q$ and as work $W$. The heat $Q$ is positive if the system absorbs it. The work $W$ is positive if the system does it on the surroundings, like an expanding gas, and negative if the system receives it, like a compressed gas. The **first law** states that
$$
\Delta U=Q-W,
$$
that is, energy that entered as heat and did not leave as work stays in the system. A gas that absorbs $500\,\mathrm{J}$ and does $200\,\mathrm{J}$ of work has $\Delta U=500\,\mathrm{J}-200\,\mathrm{J}=300\,\mathrm{J}$. A gas compressed with $200\,\mathrm{J}$ of work, with no heat exchange, has $W=-200\,\mathrm{J}$ and $\Delta U=0-(-200\,\mathrm{J})=200\,\mathrm{J}$. Internal energy is a property of the system's state; heat and work are energies exchanged during a process.
:::

:::esempio{titolo="Recognising processes from constraints"}
- In a rigid container the gas does not expand, so $W=0$ and $\Delta U=Q$.
- In an **adiabatic** process (no heat exchange) $Q=0$ and $\Delta U=-W$.
- In an isothermal process of an ideal gas the internal energy, which depends only on temperature, stays constant, so $\Delta U=0$ and $Q=W$.

A gas that expands by $\Delta V$ against a constant external pressure does work $W=p_{\mathrm{est}}\Delta V$. With $p_{\mathrm{est}}=2\cdot10^5\,\mathrm{Pa}$ and $\Delta V=10^{-3}\,\mathrm{m^3}$ this gives $W=2\cdot10^5\,\mathrm{Pa}\cdot10^{-3}\,\mathrm{m^3}=200\,\mathrm{J}$. On a pressure-volume graph the work is the area under the curve of a quasistatic process, one so slow that the gas always has a definite pressure. The area counts as positive towards increasing volumes (expansion) and negative in the opposite sense (compression).
:::

:::definizione{#rendimento titolo="Heat engines and efficiency"}
A **heat engine**, such as a motor, converts heat into work by repeating a **cycle**, a sequence of processes returning the system to its initial state. In each cycle it absorbs heat $Q_h$ from a hot reservoir, does work $W$ and gives out heat $Q_c$ to a cold reservoir; here $Q_h$ and $Q_c$ are positive quantities. Over a cycle $\Delta U=0$, so by the first law $W=Q_h-Q_c$. The **efficiency** $\eta$ (eta) is the fraction of the absorbed heat that becomes work:
$$
\eta=\frac W{Q_h}=1-\frac{Q_c}{Q_h}.
$$
With $Q_h=500\,\mathrm{J}$ and $Q_c=350\,\mathrm{J}$ the work is $500\,\mathrm{J}-350\,\mathrm{J}=150\,\mathrm{J}$ and the efficiency is $\dfrac{150\,\mathrm{J}}{500\,\mathrm{J}}=0.30$, or $30\%$. The **second law** states that no cyclic engine converts into work all the heat absorbed from a single reservoir, so $Q_c>0$ and $\eta<1$. A refrigerator transfers heat from a cold environment to a hot one by using work supplied from outside.
:::

## Oscillations, waves and sound

:::definizione{#onde titolo="Period, frequency and wavelength"}
An **oscillation** is a motion that repeats back and forth about an equilibrium position, like that of a pendulum. The **period** $T$ is the time for one complete oscillation; the **frequency** $f=\dfrac1T$ is the number of oscillations per second, in hertz; the **amplitude** $A$ is the greatest distance from the equilibrium position. A pendulum that makes $10$ oscillations in $20\,\mathrm{s}$ has $T=2\,\mathrm{s}$ and $f=0.5\,\mathrm{Hz}$.

In **harmonic motion**, which is that of a mass attached to a spring, the position is $x=A\cos(\omega t+\varphi)$ and varies between $-A$ and $A$. The angular frequency $\omega$ (omega) is $2\pi f$, in radians per second, and the initial phase $\varphi$ (phi) fixes the position at time $t=0$: with $\varphi=0$ the body starts from $x=A$. A simple pendulum of length $\ell$, for small oscillations, has period $T=2\pi\sqrt{\dfrac{\ell}{g}}$, independent of the mass; with $\ell=1\,\mathrm{m}$ this gives $T=2\pi\sqrt{\dfrac{1\,\mathrm{m}}{9.8\,\mathrm{m/s^2}}}\approx2.0\,\mathrm{s}$. A periodic force with a frequency close to the natural frequency of a system gives it energy at every cycle and increases its amplitude: this is **resonance**, as in a swing pushed in time with its oscillations.

A **wave** is a disturbance that propagates and carries energy without carrying matter. It is **transverse** if the points of the medium (the material in which it propagates) oscillate perpendicularly to the direction of propagation, as in a string, and **longitudinal** if they oscillate along it. The **wavelength** $\lambda$ (lambda) is the distance between two successive crests, that is, between two points of maximum displacement. In one period the wave advances by one wavelength, so the propagation speed is
$$
v=\frac{\lambda}{T}=\lambda f.
$$
**Sound** is a longitudinal wave. It propagates in a material medium and not in a vacuum, and in air its speed is about $340\,\mathrm{m/s}$. Light is an electromagnetic wave and also propagates in a vacuum.
:::

:::esempio{titolo="Reading a wave profile"}
The graph shows a wave at a fixed instant: horizontally the position in metres, vertically the displacement of the points of the medium in centimetres. Two successive crests are at $x=1\,\mathrm{m}$ and at $x=5\,\mathrm{m}$, so $\lambda=5\,\mathrm{m}-1\,\mathrm{m}=4\,\mathrm{m}$; the maximum displacement, $1\,\mathrm{cm}$, is the amplitude. The profile contains no information about time, so the frequency is an additional datum. With $f=3\,\mathrm{Hz}$ the speed is $v=\lambda f=4\,\mathrm{m}\cdot3\,\mathrm{Hz}=12\,\mathrm{m/s}$.

::grafico{f="sin(pi*x/2)" xmin=0 xmax=8 ymin=-1.5 ymax=1.5 nomi="x,y" legenda="y=\sin(\pi x/2)" punti="1,1,pieno;5,1,pieno" titolo="Horizontal coordinates in meters and vertical coordinates in cm: crests are 4 m apart and amplitude is 1 cm"}
:::

:::osservazione
- A wave passing from one medium to another keeps its frequency, fixed by the source. If the speed changes, $\lambda=\dfrac vf$ changes in proportion: a sound of $340\,\mathrm{Hz}$ has $\lambda=\dfrac{340\,\mathrm{m/s}}{340\,\mathrm{Hz}}=1\,\mathrm{m}$ in air and, at about $1500\,\mathrm{m/s}$, $\lambda=\dfrac{1500\,\mathrm{m/s}}{340\,\mathrm{Hz}}\approx4.4\,\mathrm{m}$ in water.
- Where two waves meet, the displacements add: this is **superposition**. Waves in phase, with crests on crests, reinforce each other; waves in opposite phase, with crests on troughs, weaken each other and, for equal amplitudes, cancel.
- **Diffraction** is the spreading of a wave beyond an opening or an obstacle; it is marked if the size of the opening is close to the wavelength.
- By the **Doppler effect**, if a sound source approaches a stationary observer the crests reach the observer closer together and the perceived frequency is greater than the emitted one; if it moves away it is lower.
- An **echo** is the sound reflected by a wall. For a wall at distance $d$ the sound travels $2d$, so, with speed $v$ and delay $\Delta t$, $d=\dfrac{v\Delta t}{2}$.
:::

## Reflection, refraction and lenses

:::teorema{#ottica titolo="Reflection and Snell's law"}
A **ray** is the straight path of light in a homogeneous medium, that is, a medium with the same properties at every point. At the surface between two media, part of the light goes back (**reflection**) and part passes through, changing direction (**refraction**). Angles are measured from the **normal**, the perpendicular to the surface at the point of incidence. In reflection the reflected angle equals the incident angle. A plane mirror forms behind itself, at the same distance as the object, a **virtual** image, from which the rays seem to come without passing through it. Someone standing $1.5\,\mathrm{m}$ from the mirror sees their own image $1.5\,\mathrm{m}+1.5\,\mathrm{m}=3\,\mathrm{m}$ away.

The **refractive index** of a medium is $n=\dfrac cv$, the ratio of the speed of light in a vacuum, $c=3.0\cdot10^8\,\mathrm{m/s}$, to its speed in the medium; it is about $1$ for air, $1.33$ for water and $1.5$ for glass, in which light has speed $\dfrac{3.0\cdot10^8\,\mathrm{m/s}}{1.5}=2.0\cdot10^8\,\mathrm{m/s}$. **Snell's law** relates the angle of incidence $\theta_1$ and the angle of refraction $\theta_2$:
$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$
On entering a medium of higher index an oblique ray bends towards the normal. From air, with $n_1=1$, into a liquid with $n_2=1.41$, for $\theta_1=45^\circ$, $\sin\theta_2=\dfrac{1\cdot\sin45^\circ}{1.41}=\dfrac{0.707}{1.41}\approx0.50$, so $\theta_2\approx30^\circ$. In the passage the frequency stays unchanged, whereas the speed and the wavelength change.
:::

:::definizione{#riflessione-totale titolo="Critical angle and dispersion"}
When light passes into a medium of lower index ($n_2<n_1$) the refracted ray bends away from the normal. As the angle of incidence increases, the angle of refraction reaches $90^\circ$. The angle of incidence for which this happens is the **critical angle** $\theta_c$; since $\sin90^\circ=1$, Snell's law gives
$$
\sin\theta_c=\frac{n_2}{n_1}.
$$
For angles of incidence greater than $\theta_c$ there is no refracted ray and all the light is reflected: this is **total internal reflection**. From a medium of index $2$ into air $\sin\theta_c=\dfrac12$, so $\theta_c=30^\circ$.

**Dispersion** is the dependence of the refractive index on wavelength, hence on colour. This is why a prism deflects colours by different angles and separates white light.
:::

:::teorema{#lenti titolo="Thin lenses"}
A **lens** deflects light rays by refraction. A **converging** lens brings together at one point, the **focus**, rays arriving parallel to its axis, the line perpendicular to the lens through its centre; a **diverging** lens spreads them out. The **focal length** $f$ is the distance of the focus from the lens, taken as positive for converging lenses and negative for diverging ones. Let $p$ be the distance of the object from the lens and $q$ that of the image. For a thin lens (thickness negligible compared with $f$) and rays only slightly inclined to the axis (paraxial approximation),
$$
\frac1f=\frac1p+\frac1q,\qquad M=-\frac qp.
$$
The **magnification** $M$ is the ratio of the height of the image to that of the object. For an object placed in front of the lens $p$ is positive, and the signs of $q$ and $M$ describe the image.

- If $q>0$ the image is **real**: it forms beyond the lens and can be caught on a screen. If $q<0$ it is **virtual** and lies on the object's side.
- If $M<0$ the image is inverted; if $M>0$ it is upright.

With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$, $\dfrac1q=\dfrac1{10\,\mathrm{cm}}-\dfrac1{30\,\mathrm{cm}}=\dfrac{3-1}{30\,\mathrm{cm}}=\dfrac1{15\,\mathrm{cm}}$, so $q=15\,\mathrm{cm}$ and $M=-\dfrac{15\,\mathrm{cm}}{30\,\mathrm{cm}}=-\dfrac12$; the image is therefore real, inverted and half as tall as the object. With the object between the focus and the lens, at $p=5\,\mathrm{cm}$, $\dfrac1q=\dfrac1{10\,\mathrm{cm}}-\dfrac1{5\,\mathrm{cm}}=-\dfrac1{10\,\mathrm{cm}}$, so $q=-10\,\mathrm{cm}$ and $M=-\dfrac{-10\,\mathrm{cm}}{5\,\mathrm{cm}}=2$; the image is therefore virtual, upright and twice as tall. A diverging lens gives a virtual, upright and reduced image of an object.
:::

## Charges, circuits and magnetism

:::teorema{#campo-elettrico titolo="Electric force and potential"}
**Electric charge** is a property of matter, positive or negative, measured in coulombs ($\mathrm{C}$). In atoms, protons have positive charge and electrons negative charge, with the same absolute value $1.6\cdot10^{-19}\,\mathrm{C}$, called the elementary charge. Charges of the same sign repel, charges of opposite sign attract. In **conductors**, such as metals, some of the electrons are free to move; in **insulators** the electrons stay bound to the atoms. Rubbing and contact transfer electrons from one body to another, and in an isolated system the total charge is conserved. Two identical conducting spheres with charges $6\cdot10^{-6}\,\mathrm{C}$ and $-2\cdot10^{-6}\,\mathrm{C}$, brought into contact far from other bodies, share equally, by symmetry, the total charge $4\cdot10^{-6}\,\mathrm{C}$, so each has $2\cdot10^{-6}\,\mathrm{C}$.

By **Coulomb's law**, two point charges $q_1$ and $q_2$ (of negligible size compared with their separation $r$) at rest in a vacuum exert on each other a force directed along the line joining them, of magnitude
$$
F=k\frac{|q_1q_2|}{r^2},
$$
with $k=9.0\cdot10^9\,\mathrm{N\,m^2/C^2}$. Two charges of $2\cdot10^{-6}\,\mathrm{C}$ at $0.3\,\mathrm{m}$ repel with $9.0\cdot10^9\,\mathrm{N\,m^2/C^2}\cdot\dfrac{(2\cdot10^{-6}\,\mathrm{C})^2}{(0.3\,\mathrm{m})^2}=0.4\,\mathrm{N}$.

The **electric field** at a point is the force acting on a positive charge $q$ placed there, divided by $q$: $\vec E=\dfrac{\vec F}{q}$, in $\mathrm{N/C}$. A charge in the field experiences the force $q\vec E$, in the same sense as the field if it is positive and opposite if it is negative: in a field of $500\,\mathrm{N/C}$ a charge of $2\cdot10^{-6}\,\mathrm{C}$ experiences $2\cdot10^{-6}\,\mathrm{C}\cdot500\,\mathrm{N/C}=10^{-3}\,\mathrm{N}$. The fields of several charges add as vectors. Inside a conductor whose charges are at rest (electrostatic equilibrium) the field is zero.

The **electric potential** $V$ at a point is the potential energy per unit charge, in volts ($1\,\mathrm{V}=1\,\mathrm{J/C}$). The **potential difference** $\Delta V$ between two points, also called **voltage**, gives the change in potential energy of a charge $q$ passing from one to the other, $\Delta U=q\Delta V$; the work done by the field is $-\Delta U$. A charge of $2\,\mathrm{C}$ crossing $1.5\,\mathrm{V}$ changes its energy by $2\,\mathrm{C}\cdot1.5\,\mathrm{V}=3\,\mathrm{J}$. A **capacitor** consists of two conducting plates with opposite charges of magnitude $Q=C\Delta V$; the **capacitance** $C$ is measured in farads ($1\,\mathrm{F}=1\,\mathrm{C/V}$). With $C=2\cdot10^{-6}\,\mathrm{F}$ and $\Delta V=10\,\mathrm{V}$, $Q=2\cdot10^{-5}\,\mathrm{C}$.
:::

:::definizione{#circuiti titolo="Current and resistance"}
**Electric current** is an ordered motion of charges. The **current intensity** is the charge crossing a section of the conductor per unit time, $I=\dfrac{\Delta Q}{\Delta t}$, in amperes ($1\,\mathrm{A}=1\,\mathrm{C/s}$): if $5\,\mathrm{C}$ pass in $10\,\mathrm{s}$, the current is $\dfrac{5\,\mathrm{C}}{10\,\mathrm{s}}=0.5\,\mathrm{A}$. Conventional current flows the way positive charges would move. A **source**, such as a battery, maintains a voltage $V$ between its terminals; a **circuit** is a closed path of conductors connecting the two terminals. The **resistance** $R$ of a conductor is the ratio of the voltage across it to the current through it, in ohms ($1\,\Omega=1\,\mathrm{V/A}$). For a metallic conductor at constant temperature $R$ does not depend on the current, and **Ohm's law** $V=RI$ holds. A resistor (a component of fixed resistance) of $20\,\Omega$ at $10\,\mathrm{V}$ carries $\dfrac{10\,\mathrm{V}}{20\,\Omega}=0.5\,\mathrm{A}$.

The **power** absorbed is $P=VI=I^2R=\dfrac{V^2}{R}$, in watts, and in a resistor it becomes heat; at constant power the energy in the time $\Delta t$ is $P\Delta t$. The previous resistor absorbs $10\,\mathrm{V}\cdot0.5\,\mathrm{A}=5\,\mathrm{W}$, or $5\,\mathrm{W}\cdot60\,\mathrm{s}=300\,\mathrm{J}$ in one minute.

- **In series** the resistors carry the same current and $R_{\mathrm{eq}}=R_1+R_2$.
- **In parallel** they have the same voltage and $\dfrac1{R_{\mathrm{eq}}}=\dfrac1{R_1}+\dfrac1{R_2}$.

The equivalent resistance $R_{\mathrm{eq}}$ is that of a single resistor that replaces the two while leaving the same current in the source. With $20\,\Omega$ and $30\,\Omega$ one obtains $50\,\Omega$ in series and, since $\dfrac1{20\,\Omega}+\dfrac1{30\,\Omega}=\dfrac{3+2}{60\,\Omega}=\dfrac1{12\,\Omega}$, $12\,\Omega$ in parallel. At a junction (a point where three or more wires meet) the sum of the incoming currents equals that of the outgoing ones, because charge is conserved. An open switch stops the current in its own branch, that is, in the stretch of circuit in which it is inserted. An ideal source keeps the same voltage whatever current it delivers, so the other branches of a parallel connection fed by an ideal source stay at the same voltage.

An ammeter measures current, is connected in series and ideally has zero resistance. A voltmeter measures voltage, is connected in parallel and ideally has infinite resistance. The **electromotive force** $\mathcal E$ is the voltage of a source that is not delivering current. If the source has internal resistance $r$ and delivers current $I$, the voltage at its terminals is $V=\mathcal E-Ir$: with $9\,\mathrm{V}$, $1\,\Omega$ and $0.5\,\mathrm{A}$ it is $9\,\mathrm{V}-0.5\,\mathrm{A}\cdot1\,\Omega=8.5\,\mathrm{V}$.
:::

:::definizione{#magnetismo titolo="Magnetic field and Lorentz force"}
A **magnet** has two poles, north and south: like poles repel and unlike poles attract. Each piece of a broken magnet again has two poles. Around a magnet there is a **magnetic field** $\vec B$, a vector measured in teslas ($\mathrm{T}$) which at every point has the direction of a compass needle. In ferromagnetic materials, such as iron, small magnetised regions called domains line up in the same sense and the material becomes a magnet. A current also generates a magnetic field: around a straight wire the field lines, which at every point have the direction of the field, are circles centred on the wire.

A charge $q$ moving with velocity $v$ is acted on by the **Lorentz force**, perpendicular to the velocity and to the field, of magnitude $F=|q|vB\sin\theta$, where $\theta$ is the angle between the velocity and the field. It is zero if the velocity is parallel to the field and greatest if it is perpendicular. A proton, of charge $1.6\cdot10^{-19}\,\mathrm{C}$, moving at $2\cdot10^5\,\mathrm{m/s}$ perpendicularly to a field of $0.5\,\mathrm{T}$ experiences $1.6\cdot10^{-19}\,\mathrm{C}\cdot2\cdot10^5\,\mathrm{m/s}\cdot0.5\,\mathrm{T}=1.6\cdot10^{-14}\,\mathrm{N}$. Since it is perpendicular to the velocity, the force does zero work and changes only the direction of motion. In a uniform field, with the velocity perpendicular to the field and no other forces, the motion is uniform circular motion.

The **magnetic flux** through a circuit measures how much field crosses the surface bounded by it; for a uniform field perpendicular to a surface of area $A$ it equals $BA$. When the flux changes, an electromotive force is induced in the circuit: this is **electromagnetic induction**. By Lenz's law the induced current generates a field that opposes the change in flux that produced it.

Varying electric and magnetic fields generate each other and propagate together as **electromagnetic waves**. In a vacuum they all have the speed $c$, so $c=\lambda f$: at $10^8\,\mathrm{Hz}$ the wavelength is $\dfrac{3.0\cdot10^8\,\mathrm{m/s}}{10^8\,\mathrm{Hz}}=3\,\mathrm{m}$. In order of increasing frequency, and of decreasing wavelength, the spectrum, the set of all these waves, comprises radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays.
:::
