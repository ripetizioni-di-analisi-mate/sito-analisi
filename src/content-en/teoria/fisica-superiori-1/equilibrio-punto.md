---
titolo: "Equilibrium of a particle"
sommario: "Free-body diagrams, component balances, inclined planes, friction, and constraints."
---

## Equilibrium conditions

:::teorema{#condizioni titolo="Zero resultant"}
A **force** is a push or a pull that one body exerts on another. Its unit is the **newton**, symbol $\mathrm N$. An object with a mass of $100$ grams weighs about $1\,\mathrm N$.

A **particle** is a body treated as if it were a single point. This model is suitable when the shape and the rotations of the body do not matter for the question. For a ring pulled by three ropes the only thing of interest is whether it moves, so the ring is treated as a point.

A particle is in **static equilibrium** if it remains at rest relative to an **inertial frame**, that is, a setting for observation in which a body with no forces acting on it stays at rest or moves at constant velocity. In this chapter the frame is the classroom floor, which is taken to be inertial.

The **resultant** is the vector sum of all the external forces, that is, the forces that other bodies exert on the particle. It is written $\vec R$, where the arrow marks a vector, that is, a quantity with a magnitude (here the strength of the force, in newtons), a direction and a sense. The equilibrium condition is that the resultant be the **zero vector** $\vec 0$, that is, the vector of magnitude zero.

To calculate the resultant, two perpendicular axes $x$ and $y$ are fixed, each with a positive sense. The **component** of a force along an axis is the part of the force that acts along that axis. It has the sign $+$ if it points in the positive sense and the sign $-$ if it points the opposite way. With the $x$ axis positive to the right, a force of $6\,\mathrm N$ to the left has component $F_x=-6\,\mathrm N$. In a plane the condition $\vec R=\vec 0$ is equivalent to two independent equations, to be satisfied together:
$$
\begin{cases}
R_x=\sum F_x=0,\\
R_y=\sum F_y=0.
\end{cases}
$$
The symbol $\sum$ is the Greek capital letter sigma and is read "sum of". The expression $\sum F_x$ denotes the sum of the components along $x$ of all the forces, each with its sign, and $R_x$ is the component of the resultant along $x$.

If the particle is already at rest and the resultant remains zero, the particle stays at rest. If it is already moving, a zero resultant maintains its velocity.
:::

:::esempio{titolo="A ring in equilibrium on a guide"}
A ring is threaded on a horizontal guide, that is, a rod along which it slides. Two ropes pull it along the guide. The first exerts a force of $11\,\mathrm N$ to the right and the second a force of $6\,\mathrm N$ to the left. Rightward is taken as positive, so the first force has component $+11\,\mathrm N$ and the second $-6\,\mathrm N$. Their sum is
$$
R_x=11\,\mathrm N-6\,\mathrm N=5\,\mathrm N.
$$
A third rope brings the sum to zero if its component $F_{3x}$ satisfies $5\,\mathrm N+F_{3x}=0$, so $F_{3x}=-5\,\mathrm N$. The third rope therefore exerts $5\,\mathrm N$ to the left.

All the forces act along the horizontal guide, so none of them has a vertical component and the equation $R_y=0$ is already satisfied.
:::

:::osservazione{titolo="A zero net force can maintain different velocities"}
A cart is on a horizontal track without **friction**, that is, without the contact force that hinders sliding. A force of $6\,\mathrm N$ to the right and one of $6\,\mathrm N$ to the left act on the cart, so $R_x=6\,\mathrm N-6\,\mathrm N=0$. Vertically the weight is balanced by the reaction of the track, that is, the force with which the track supports the cart. The resultant is therefore zero.

If the cart starts at rest, it stays in its initial position. If instead it passes through that point with a velocity of $2\,\mathrm{m/s}$ to the right, it keeps that velocity as long as the force balance stays the same. In the next $3\,\mathrm s$ it therefore travels
$$
2\,\mathrm{m/s}\cdot3\,\mathrm s=6\,\mathrm m.
$$
The condition $\vec R=\vec 0$ establishes that the velocity is maintained. To conclude that the cart remains at rest it is therefore also necessary to know that its initial velocity is zero.

::grafico{f="2*x;0" nomi="t (s),x (m)" punti="3,6,pieno,A;3,0,pieno,B" legenda="\text{moving cart};\text{stationary cart}" xmin=0 xmax=4 ymin=-1 ymax=9 titolo="With the same force balance, the slope depends on the initial velocity."}
:::

## Drawing and projecting forces

:::osservazione{#componenti titolo="One body at a time"}
The **free-body diagram** is the drawing of a single body, isolated from the others, with one arrow for each external force acting on it. For a hook hanging from a rope there are two arrows. The first is the **weight**, that is, the force with which the Earth attracts the hook, vertical and downwards. The second is the **tension**, that is, the force with which the taut rope pulls the hook. The force that the hook exerts on the rope acts on the rope, so it belongs to the rope's diagram.

Once the axes are chosen, each force is resolved, that is, its two components are calculated. The component along an axis is also called the **projection** and is positive if it points in the positive sense of the axis. The expression $\vec R=(6;8)\,\mathrm N$ means $R_x=6\,\mathrm N$ and $R_y=8\,\mathrm N$.

The force that balances a group of forces is called the **balancing force** and is the opposite of their resultant, that is, it has the same components with the sign changed. For $\vec R=(6;8)\,\mathrm N$ the balancing force is $\vec F=(-6;-8)\,\mathrm N$. The two components are the legs of a right-angled triangle and the arrow of the force is the hypotenuse. By Pythagoras' theorem the magnitude is
$$
F=\sqrt{6^2+8^2}\,\mathrm N=\sqrt{36+64}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$
The result is checked by substituting both components into the sum, which gives $6\,\mathrm N-6\,\mathrm N=0$ along $x$ and $8\,\mathrm N-8\,\mathrm N=0$ along $y$.
:::

::grafico{assi=0 uguale=1 vettori="0,0,6,0,6 N;0,0,0,8,8 N;0,0,-6,-8" punti="0,0,pieno,O" etichette="-2.1,-5,F" xmin=-8 xmax=8 ymin=-10 ymax=10 titolo="Balancing force F on ring O. The components of the diagonal arrow oppose the two given forces"}

:::esempio{titolo="A rope with a prescribed direction"}
The forces already acting on a ring have resultant $\vec R=(16;-18)\,\mathrm N$, meaning $16\,\mathrm N$ to the right and $18\,\mathrm N$ downwards. A rope is added, pointing up and to the left, which rises $3$ units for every $4$ units of horizontal distance.

A stretch of rope that advances $4$ horizontally and rises $3$ has length $\sqrt{4^2+3^2}=\sqrt{25}=5$, by Pythagoras' theorem. The tension $T$ is directed along the rope, so its components are to $T$ as the sides $4$ and $3$ are to the length $5$. The magnitudes of the components are $\dfrac45 T$ horizontally and $\dfrac35 T$ vertically.

The horizontal balance, with rightward positive, is
$$
16\,\mathrm N-\frac45T=0
\quad\Longrightarrow\quad
T=16\,\mathrm N\cdot\frac54=20\,\mathrm N.
$$
The arrow $\Longrightarrow$ is read "therefore". At that tension the rope's vertical component is $\dfrac35\cdot20\,\mathrm N=12\,\mathrm N$ upwards, whereas equilibrium requires $18\,\mathrm N$ upwards. The shortfall is $18\,\mathrm N-12\,\mathrm N=6\,\mathrm N$. A **tie** is therefore added, that is, a second rope that works by pulling, vertical and with $6\,\mathrm N$ upwards. The sum of all the forces is
$$
\left(16-16;\,-18+12+6\right)\,\mathrm N=(0;0)\,\mathrm N,
$$
so the ring is in equilibrium.

In the drawing the forces are arranged **head to tail**, that is, each arrow starts from the tip of the previous one. The resultant is zero when the arrows form a closed polygon. Starting at the origin, the given resultant is drawn. The inclined tension $T$, with components $(-16;12)\,\mathrm N$, then returns the path to the vertical axis, at $-6\,\mathrm N$. The vertical tie $T_v$ closes the path at the origin. Without that tie, the polygon remains open by $6\,\mathrm N$ and the resultant points downwards.

::grafico{uguale=1 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,16,-18,R;16,-18,0,-6,T;0,-6,0,0,Tᵥ" punti="16,-18,pieno;0,-6,pieno" xmin=-6 xmax=20 ymin=-21 ymax=7 titolo="Closing the force polygon requires the vertical segment of 6 N."}
:::

## Vertical cords

::::teorema{#corde titolo="Sharing a load"}
An **ideal cord** is a cord of negligible mass that does not stretch. When it is taut it pulls the body it is tied to along its own direction, towards the point of suspension. The magnitude of this force is the tension $T$.

If a body of weight $P$ at rest is supported by a single vertical cord, the tension is $T=P$. With two vertical cords supporting it from above, $T_1+T_2=P$, where $T_1$ and $T_2$ are the tensions of the two cords.

When the problem gives the mass $m$ in kilograms ($\mathrm{kg}$), the weight is calculated with $P=mg$. The number $g$ is the weight of one kilogram and is measured in newtons per kilogram ($\mathrm{N/kg}$). On Earth it is about $9.8\,\mathrm{N/kg}$, rounded to $10\,\mathrm{N/kg}$ in many exercises. With this value a body of mass $9\,\mathrm{kg}$ weighs $9\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=90\,\mathrm N$.

:::dimostrazione
Upward is taken as positive. The tensions then have components $+T_1$ and $+T_2$ and the weight has component $-P$. The equilibrium condition $R_y=0$ becomes $T_1+T_2-P=0$, so $T_1+T_2=P$. With a single cord the same equation is $T-P=0$, so $T=P$.
:::
::::

:::esempio{titolo="From the total to a single tension"}
Two vertical cords support a ring weighing $84\,\mathrm N$. The tension measured in the first cord is $30\,\mathrm N$. The relation $T_1+T_2=P$ gives the second:
$$
T_2=P-T_1=84\,\mathrm N-30\,\mathrm N=54\,\mathrm N.
$$
If only the weight were known, the relation would have several pairs of solutions, such as $40\,\mathrm N$ and $44\,\mathrm N$. The value of $\dfrac{84}{2}\,\mathrm N=42\,\mathrm N$ for each cord is obtained by adding the assumption that the two tensions are equal.
:::

:::esempio{titolo="Supporting a load subject to two limits"}
A point weighing $90\,\mathrm N$ is supported by two vertical ropes. The first withstands a tension of $35\,\mathrm N$ at most and the second $60\,\mathrm N$ at most. The two tensions add up to the weight, so $T_1+T_2=90\,\mathrm N$ and $T_2=90\,\mathrm N-T_1$.

The second rope carries at most $60\,\mathrm N$, so the first carries at least $90\,\mathrm N-60\,\mathrm N=30\,\mathrm N$. The first carries at most $35\,\mathrm N$, so the second carries at least $90\,\mathrm N-35\,\mathrm N=55\,\mathrm N$. The symbol $\leq$ is read "less than or equal to". The two tensions satisfy

$$
30\,\mathrm N\leq T_1\leq35\,\mathrm N,\qquad
55\,\mathrm N\leq T_2=90\,\mathrm N-T_1\leq60\,\mathrm N.
$$

These intervals contain the admissible load distributions, that is, those within both limits. One of these is chosen if the adjustment of the ropes allows it. The pair $T_1=32\,\mathrm N$ and $T_2=58\,\mathrm N$ adds up to $90\,\mathrm N$ and is within both limits. An equal split would give $45\,\mathrm N$ to each rope and would exceed the first rope's limit of $35\,\mathrm N$.

::grafico{f="90-x" nomi="T₁ (N),T₂ (N)" punti="30,60,pieno,A;35,55,pieno,B" segmenti="27,60,30,60;35,52,35,55" xmin=27 xmax=39 ymin=50 ymax=64 titolo="Equilibrium fixes the line. The ropes' mechanical limits restrict the options to the segment from A to B."}
:::

## Springs in equilibrium

:::teorema{#molla titolo="Deformation required by the load"}
A spring with no load has a length of its own, called the **natural length**. The **extension** $x$ is the difference between the length of the stretched spring and the natural length. A stretched spring pulls the suspended body with a force called the **spring force** or restoring force. In the **linear elastic range**, that is, as long as the force is directly proportional to the extension (if the extension doubles, the force doubles too), the magnitude of the spring force is $kx$. The number $k$ is the **spring constant**, also called stiffness. It is measured in newtons per metre ($\mathrm{N/m}$) and gives the number of newtons needed to stretch the spring by one metre.

A body of weight $P$ hanging from a vertical spring is at rest when the upward spring force balances the downward weight. With $x\ge0$ (the symbol $\ge$ is read "greater than or equal to") this gives
$$
kx=P
\quad\Longrightarrow\quad
x=\frac Pk.
$$
The ratio $\dfrac{P}{k}$ is a length, since newtons are divided by newtons per metre and metres remain.

With $P=16\,\mathrm N$ and $k=200\,\mathrm{N/m}$ the result is
$$
x=\frac{16\,\mathrm N}{200\,\mathrm{N/m}}=0.08\,\mathrm m=8\,\mathrm{cm}.
$$
If for this spring the proportionality has been verified by measurement only up to $0.06\,\mathrm m$, that is, up to a force of $200\,\mathrm{N/m}\cdot0.06\,\mathrm m=12\,\mathrm N$, the result of $8\,\mathrm{cm}$ is outside the verified interval. A description of the spring beyond that limit is needed to know the actual deformation.

The same balance applies horizontally, when the spring force balances the other forces along the axis of the spring. It also holds for a compressed spring, that is, one shortened relative to its natural length. In that case $x$ is the shortening and the spring pushes. Two vertical springs side by side, with the same natural length, supporting the same body have the same extension $x$, and their forces add. With constants $100\,\mathrm{N/m}$ and $300\,\mathrm{N/m}$ and a weight of $24\,\mathrm N$, $(100+300)\,\mathrm{N/m}\cdot x=24\,\mathrm N$, so $x=0.06\,\mathrm m$.
:::

::grafico{f="16" linee="0,0 6,12" segmenti="6,12,8,16" nomi="x (cm),F (N)" punti="6,12,pieno,B;8,16,vuoto,A" xmin=0 xmax=10 ymin=0 ymax=23 titolo="B marks the end of the verified range. The dashed extension meets the 16 N load line at A, at 8 cm."}

:::esempio{titolo="Equilibrium of a spring with a stop"}
A vertical spring of stiffness $k=250\,\mathrm{N/m}$ supports a weight, which moves down a distance $x$ from the natural length of the spring. Below the weight there is a stop, that is, a rigid horizontal surface that halts its descent, at the distance $x_s=0.04\,\mathrm m=4\,\mathrm{cm}$. The stop pushes the weight upwards only. This push is a **normal reaction**, that is, a contact force perpendicular to the supporting surface. Its magnitude is written $N$ in italics, whereas the upright $\mathrm N$ is the symbol of the newton.

Without the stop, a weight of $18\,\mathrm N$ would be in equilibrium with
$$
x=\frac{18}{250}\,\mathrm m=0.072\,\mathrm m=7.2\,\mathrm{cm},
$$
which is beyond the position of the stop. The weight therefore comes to rest at $x_s$. In that position the spring exerts $kx_s=250\,\mathrm{N/m}\cdot0.04\,\mathrm m=10\,\mathrm N$ upwards. The vertical balance $10\,\mathrm N+N-18\,\mathrm N=0$ gives $N=8\,\mathrm N$.

Contact begins when the weight is $P=kx_s=10\,\mathrm N$. The two cases are as follows.

- For a weight smaller than $10\,\mathrm N$ the body stays above the stop, so $x=\dfrac Pk$ and $N=0$.
- For a weight larger than $10\,\mathrm N$ the position stays at $x_s$ and the spring always exerts $10\,\mathrm N$. Only the reaction of the stop increases, and it is $N=P-10\,\mathrm N$.

The equilibrium equation changes when the active **constraint** changes, that is, the object that limits the motion of the body (here the stop). If the weight is in contact and its mass is slowly reduced, the reaction returns to zero at $P=10\,\mathrm N$. Below this threshold the weight lifts off the stop.

::grafico{linee="0,0 10,4 24,4" nomi="P (N),x (cm)" punti="10,4,pieno,C;18,4,pieno" xmin=0 xmax=24 ymin=0 ymax=6 titolo="At C the normal force is still zero. Beyond C the reaction increases while the extension stays at 4 cm."}
:::

## Inclined planes

::::teorema{#piano titolo="Axes parallel and perpendicular to the plane"}
An **inclined plane** is a flat sloping surface, such as a ramp. Seen from the side, the ramp is a right-angled triangle with height $h$, horizontal base $b$ and sloping side $\ell$ (the letter l), which is the hypotenuse. The angle between the plane and the horizontal is written with the Greek letter $\alpha$ (alpha), with $0\leq\alpha<90^\circ$.

In a right-angled triangle the **sine** of an acute angle, written $\sin\alpha$, is the ratio of the side opposite the angle to the hypotenuse. The **cosine**, written $\cos\alpha$, is the ratio of the side adjacent to the angle to the hypotenuse. In the ramp triangle the side opposite $\alpha$ is the height and the adjacent side is the base, so
$$
\sin\alpha=\frac{h}{\ell},\qquad\cos\alpha=\frac{b}{\ell}.
$$
For a ramp with $h=3\,\mathrm m$, $b=4\,\mathrm m$ and $\ell=5\,\mathrm m$, $\sin\alpha=\dfrac35$ and $\cos\alpha=\dfrac45$. For an angle of $30^\circ$, $\sin30^\circ=\dfrac12$. For an angle of $45^\circ$ the two legs are equal, so sine and cosine are equal.

On an inclined plane one axis is chosen parallel to the plane and one perpendicular to it. The weight $P$, which is vertical, is resolved along these two axes. The component parallel to the plane is written $P_\parallel$, points down the plane and has magnitude $P_\parallel=P\sin\alpha$. The perpendicular component is written $P_\perp$, points into the plane and has magnitude $P_\perp=P\cos\alpha$.

:::dimostrazione
The vertical is obtained by rotating the horizontal through a right angle. The direction perpendicular to the plane is obtained by rotating the ramp through a right angle, in the same sense. Two lines rotated through the same angle form the same angle with each other as before. The ramp and the horizontal form the angle $\alpha$, so the perpendicular to the plane and the vertical also form the angle $\alpha$. The weight is vertical, so the angle between the weight and the direction into the plane is $\alpha$.

The two components and the weight form a right-angled triangle, in which the weight $P$ is the hypotenuse. The side adjacent to $\alpha$ is $P_\perp$, so $\cos\alpha=\dfrac{P_\perp}{P}$ and $P_\perp=P\cos\alpha$. The side opposite $\alpha$ is $P_\parallel$, so $\sin\alpha=\dfrac{P_\parallel}{P}$ and $P_\parallel=P\sin\alpha$.
:::
::::

:::esempio{titolo="Normal reaction and rope on a smooth ramp"}
A **smooth** ramp, that is, one without friction, has $(h,b,\ell)=(3,4,5)\,\mathrm m$ and supports a body of weight $P=60\,\mathrm N$. The components of the weight are
$$
P_\parallel=60\,\mathrm N\cdot\frac35=36\,\mathrm N,\qquad
P_\perp=60\,\mathrm N\cdot\frac45=48\,\mathrm N.
$$
A rope parallel to the ramp holds the body at rest. Along the parallel axis only the tension, up the ramp, and $P_\parallel$, down the ramp, act, so $T=36\,\mathrm N$. Along the perpendicular axis only the normal reaction, which points out of the plane, and $P_\perp$ act, so $N=48\,\mathrm N$. With the resolution each of the two unknown forces appears in one equation only.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3" riferimento="2,1.5,36.87,1.5,x,y" vettori="2,1.5,2,-0.5,P" etichette="2.3,-0.3,4 m;4.4,1.5,3 m" xmin=-1 xmax=5.8 ymin=-1 ymax=4.4 titolo="Axes rotated with the ramp. The sloping side is 5 m and the weight arrow stays vertical"}

:::esempio{titolo="A horizontal push on a smooth slope"}
A smooth slope is $3\,\mathrm m$ high, has a $4\,\mathrm m$ base and a sloping side of $5\,\mathrm m$. A block weighing $50\,\mathrm N$ is pushed with a horizontal force of $20\,\mathrm N$, directed towards the higher side of the slope. A rope parallel to the slope holds it in equilibrium.

The push is horizontal and the slope forms the angle $\alpha$ with the horizontal, so the angle between the push and the slope is $\alpha$. The components of the push are
$$
20\,\mathrm N\cdot\frac45=16\,\mathrm N\ \text{uphill},\qquad
20\,\mathrm N\cdot\frac35=12\,\mathrm N\ \text{into the slope}.
$$
The components of the weight are
$$
50\,\mathrm N\cdot\frac35=30\,\mathrm N\ \text{downhill},\qquad
50\,\mathrm N\cdot\frac45=40\,\mathrm N\ \text{into the slope}.
$$
Along the slope, with uphill positive, the balance is $T+16\,\mathrm N-30\,\mathrm N=0$, so the rope exerts $T=(30-16)\,\mathrm N=14\,\mathrm N$. Along the perpendicular axis, with the positive sense pointing out of the slope, the balance is $N-40\,\mathrm N-12\,\mathrm N=0$, so the normal force is $N=(40+12)\,\mathrm N=52\,\mathrm N$.

With the axes parallel and perpendicular to the slope, the horizontal force therefore appears in both equations.
:::

## Friction and admissible rest

:::teorema{#attrito-equilibrio titolo="Find the required force, then check the limit"}
**Static friction** is the force, parallel to the contact surface, with which a rough surface holds a body at rest. Its magnitude has a maximum value, which is the product $\mu_s N$. Here $N$ is the magnitude of the normal reaction and $\mu_s$ (the Greek letter mu, with the $s$ of static) is the **coefficient of static friction**, a number without units that depends on the two surfaces. With $\mu_s=0.4$ and $N=40\,\mathrm N$ the maximum is $0.4\cdot40\,\mathrm N=16\,\mathrm N$.

For a body assumed to be at rest, the required friction, with its direction, is first obtained from the equilibrium equations. Its magnitude, written $f_{\mathrm{rich}}$ (required friction), is then compared with $\mu_s N$. Rest is admissible, that is, the body really stays at rest, if $f_{\mathrm{rich}}\leq\mu_sN$ and the body stays in contact with the surface. On a ramp with no other forces parallel to the plane, the required friction balances the downslope component of the weight, so it acts uphill and equals $P_\parallel$.

If a rope pulls uphill with tension $T$, the balance along the ramp, with uphill positive, is $T+f_x-P_\parallel=0$, where $f_x$ is the component of the friction. This gives $f_x=P_\parallel-T$. The sign of $f_x$ changes once $T$ exceeds $P_\parallel$. With $P_\parallel=12\,\mathrm N$ and $T=15\,\mathrm N$ the result is
$$
f_x=12\,\mathrm N-15\,\mathrm N=-3\,\mathrm N.
$$
The negative sign means that the required friction acts downhill, and its magnitude is $3\,\mathrm N$. If the limit $\mu_sN$ is $4\,\mathrm N$, rest is admissible because $3\,\mathrm N\leq4\,\mathrm N$. With the same data rest is admissible for all tensions between $12\,\mathrm N-4\,\mathrm N=8\,\mathrm N$ and $12\,\mathrm N+4\,\mathrm N=16\,\mathrm N$.
:::

:::osservazione{titolo="Maximum slope without a rope"}
On a slope where only weight, normal reaction and friction act, the required friction is $P\sin\alpha$ uphill. The weight presses the body onto the slope and the normal reaction is $N=P\cos\alpha$, so the maximum friction is $\mu_sP\cos\alpha$. For $0\leq\alpha<90^\circ$ the number $P\cos\alpha$ is positive, so both sides are divided by $P\cos\alpha$ without changing the direction of the inequality. The ratio $\dfrac{\sin\alpha}{\cos\alpha}$ is called the **tangent** of the angle and is written $\tan\alpha$. The symbol $\Longleftrightarrow$ means that the two conditions are equivalent.

$$
P\sin\alpha\leq\mu_s P\cos\alpha
\quad\Longleftrightarrow\quad
\tan\alpha\leq\mu_s.
$$

In the slope triangle the tangent is the ratio of height to base, because $\tan\alpha=\dfrac{h}{\ell}\cdot\dfrac{\ell}{b}=\dfrac hb$. With $\mu_s=0.5$ and a base of $4\,\mathrm m$ the condition is $\dfrac{h}{4\,\mathrm m}\leq0.5$, so the maximum height is $0.5\cdot4\,\mathrm m=2\,\mathrm m$.

The weight $P$ does not appear in the final condition. Two blocks of different weight, with the same coefficient, therefore have the same limiting slope, because the weight multiplies both the required friction and the maximum friction. With an additional pull or push the two quantities change differently and the full balance is used in place of $\tan\alpha\leq\mu_s$.

The same relation is used to measure $\mu_s$. One end of the slope is slowly raised until the block starts to slide. If this happens at $h=1.8\,\mathrm m$, with a horizontal base of $4\,\mathrm m$ measured at that instant, the estimate is
$$
\mu_s=\frac{1.8\,\mathrm m}{4\,\mathrm m}=0.45,
$$
because at the instant sliding begins the required friction equals the maximum. A single test in which the block stays at rest, for example at $h=1.6\,\mathrm m$ with the same base, gives only $\mu_s\geq\dfrac{1.6}{4}=0.40$.

In the graph the sloping line is the ratio $\dfrac fN=\dfrac{h}{4\,\mathrm m}$ of required friction to normal reaction.

::grafico{f="x/4;0.5" nomi="h (m),f/N" punti="2,0.5,pieno,C" legenda="\text{required ratio};\mu_s" xmin=0 xmax=3 ymin=0 ymax=1 titolo="With a fixed base of 4 m and coefficient 0.5, the two curves meet at a height of 2 m."}
:::

## Symmetric inclined cords

::::teorema{#corde-inclinate titolo="Adding the vertical components"}
A ring of weight $P$ hangs from two cords, one rising to the left and one rising to the right. The two cords are at the same angle $\alpha$ above the horizontal, with $0<\alpha\leq90^\circ$, and pull the ring in opposite horizontal senses. If the two tensions have the same magnitude $T$, the vertical equilibrium condition is
$$
2T\sin\alpha=P.
$$
:::dimostrazione
Each tension is the hypotenuse of a right-angled triangle whose legs are the horizontal and the vertical component. The side opposite the angle $\alpha$ is the vertical component, which therefore has magnitude $T\sin\alpha$ and points upwards.

The horizontal components of the two tensions are equal in magnitude and opposite in sense, so their sum is zero. Vertically, with upward positive, the two tensions give $T\sin\alpha+T\sin\alpha$ and the weight gives $-P$. The condition $R_y=0$ is $2T\sin\alpha-P=0$.
:::
::::

:::esempio{titolo="A load supported by nearly horizontal cords"}
For $P=48\,\mathrm N$ and $\sin\alpha=\dfrac{3}{5}$ the condition $2T\sin\alpha=P$ becomes
$$
2T\cdot\frac35=48\,\mathrm N
\quad\Longrightarrow\quad
T=48\,\mathrm N\cdot\frac56=40\,\mathrm N.
$$
The vertical component of each cord is $40\,\mathrm N\cdot\dfrac35=24\,\mathrm N$.

If the angle is reduced at the same weight, $\sin\alpha$ decreases, that is, the fraction of the tension acting vertically decreases. The tension then grows to supply the same vertical component of $24\,\mathrm N$. For perfectly horizontal cords $\sin\alpha=0$, the vertical component is zero for any tension and supporting the weight is impossible with this arrangement alone.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-4,3,T;0,0,4,3;0,0,0,-6,P" etichette="2.4,1.25,T" punti="0,0,pieno,O" xmin=-5 xmax=5 ymin=-7 ymax=4 titolo="Opposite horizontal components and upward vertical components. One drawing unit represents 8 N"}

:::esempio{titolo="Ropes at different angles"}
A ring weighing $50\,\mathrm N$ is supported by two ropes at different angles. The tensions are written $T_\mathrm s$ for the left-hand rope and $T_\mathrm d$ for the right-hand one. The left-hand rope has horizontal component $\dfrac45T_\mathrm s$ and vertical component $\dfrac35T_\mathrm s$. The right-hand rope has horizontal component $\dfrac35T_\mathrm d$ and vertical component $\dfrac45T_\mathrm d$.

Horizontally the two components are opposite, so they are equal in magnitude and $\dfrac45T_\mathrm s=\dfrac35T_\mathrm d$, that is, $4T_\mathrm s=3T_\mathrm d$ after multiplying by $5$. Vertically the two components point upwards and their sum is the weight. The two equations hold together:

$$
\begin{cases}
4T_\mathrm s=3T_\mathrm d,\\[2pt]
\dfrac35T_\mathrm s+\dfrac45T_\mathrm d=50\,\mathrm N.
\end{cases}
$$

The first equation gives $T_\mathrm d=\dfrac43 T_\mathrm s$, so the right-hand tension is greater than the left-hand one. Substituting in the second:
$$
\begin{aligned}
\frac35T_\mathrm s+\frac45\cdot\frac43T_\mathrm s&=50\,\mathrm N\\[6pt]
\frac{9}{15}T_\mathrm s+\frac{16}{15}T_\mathrm s&=50\,\mathrm N\\[6pt]
\frac53T_\mathrm s&=50\,\mathrm N\\[6pt]
T_\mathrm s&=50\,\mathrm N\cdot\frac35=30\,\mathrm N.
\end{aligned}
$$
Hence $T_\mathrm d=\dfrac43\cdot30\,\mathrm N=40\,\mathrm N$. The horizontal components are $\dfrac45\cdot30\,\mathrm N=24\,\mathrm N$ and $\dfrac35\cdot40\,\mathrm N=24\,\mathrm N$, equal in magnitude. The vertical components are $\dfrac35\cdot30\,\mathrm N=18\,\mathrm N$ and $\dfrac45\cdot40\,\mathrm N=32\,\mathrm N$, and their sum is $50\,\mathrm N$, that is, the entire weight.

::grafico{assi=0 uguale=1 vettori="0,0,-24,18,Tₛ;0,0,24,32;0,0,0,-50,P" etichette="14.5,15.5,Tᵈ" punti="0,0,pieno,O" xmin=-28 xmax=28 ymin=-55 ymax=36 titolo="The ropes have different tensions. The horizontal components cancel and the vertical components support 50 N."}
:::

## Contact with a surface

:::osservazione{#contatto titolo="Normal reaction and vertical forces"}
A **non-adhesive** support is a surface to which the body is neither glued nor hooked. A surface of this kind pushes the body and does not hold it back. For a horizontal non-adhesive support, such as a table, the normal reaction therefore points upwards and its magnitude is $N\geq0$.

A body of weight $P$ rests on a table and a vertical cord fixed to the ceiling pulls it upwards with tension $T$. With upward positive the balance is $N+T-P=0$, so $N=P-T$. With $P=60\,\mathrm N$ and $T=25\,\mathrm N$ the normal reaction is $35\,\mathrm N$. The formula gives $N\geq0$ only for $0\leq T\leq P$. At $T=P$ the limiting case $N=0$ is found. For $T>P$ the formula would give a negative normal reaction, that is, a downward force from the table. Simple contact does not exert a force of this kind, so for $T>P$ the body does not stay at rest on the table.

The normal reaction is perpendicular to the surface at the point of contact. If the surface is inclined, the normal reaction is tilted from the vertical. The normal reaction has no component along an axis parallel to the plane, so it does not appear in the equilibrium equation written along that axis.
:::

:::esempio{titolo="A downward normal force"}
A body of weight $P=26\,\mathrm N$ is pushed against a horizontal ceiling by an upward force of magnitude $S$. The ceiling is above the body and pushes it away from itself, so the normal force from the ceiling points downwards. Taking up as positive, the balance is $S-P-N=0$, so $N=S-P$. For $S=40\,\mathrm N$ this gives
$$
N=40\,\mathrm N-26\,\mathrm N=14\,\mathrm N,
$$
so the ceiling exerts $14\,\mathrm N$ downwards. A support placed below the body would exert its normal force in the opposite sense, upwards.

If the push falls to $20\,\mathrm N$, the formula gives $N=20\,\mathrm N-26\,\mathrm N=-6\,\mathrm N$. To keep the body at rest the ceiling would have to pull it upwards with $6\,\mathrm N$. A non-adhesive contact does not supply that force, so the body comes away from the ceiling. For $S=26\,\mathrm N$ the contact is at its threshold and the reaction is zero.

::grafico{f="x-26" nomi="S (N),N (N)" punti="26,0,pieno,C;40,14,pieno,A" xmin=26 xmax=44 ymin=0 ymax=20 titolo="For a push against the ceiling, the equilibrium branch has a nonnegative normal force and begins at C."}
:::

## Bodies pressed against a wall

:::teorema{#parete titolo="Horizontal normal reaction and vertical friction"}
A body of weight $P$ is held at rest against a vertical wall by a horizontal force of magnitude $S$, like a book pressed against the wall with a hand. The wall is vertical, so its normal reaction is horizontal. If no other horizontal forces act, horizontal equilibrium gives $N=S$. Friction is parallel to the wall, so it is vertical. If the weight is the only other vertical force, the required friction points upwards and equals $P$. The maximum static friction is $\mu_sN=\mu_sS$, so the wall supports the body provided
$$
P\leq\mu_s S.
$$
For $P=15\,\mathrm N$ and $\mu_s=0.25$ the condition is $15\,\mathrm N\leq0.25\cdot S$, so the minimum push is
$$
S=\frac{15\,\mathrm N}{0.25}=60\,\mathrm N.
$$
If the push increases to $72\,\mathrm N$, the maximum friction rises to $0.25\cdot72\,\mathrm N=18\,\mathrm N$, while the actual friction remains $15\,\mathrm N$, because it is fixed by the weight. The horizontal push increases the normal reaction, and with the normal reaction the maximum vertical friction increases.
:::

:::esempio{titolo="Downward friction on a wall"}
A body weighs $18\,\mathrm N$ and receives an oblique push, with component $S_x=32\,\mathrm N$ towards the wall and component $S_y=24\,\mathrm N$ upwards. Horizontally the wall reacts with a normal force of $32\,\mathrm N$. Vertically, without friction, the sum is $24\,\mathrm N-18\,\mathrm N=6\,\mathrm N$ upwards. Holding the body at rest therefore requires a static friction force of magnitude $6\,\mathrm N$ downwards. With $\mu_s=0.25$ the maximum is $0.25\cdot32\,\mathrm N=8\,\mathrm N$. Since $6\,\mathrm N\leq8\,\mathrm N$, the setup is possible.

The direction of friction is found by adding all the other **tangential** components, that is, those parallel to the contact surface. Here they are the weight and $S_y$. With the weight alone the friction would point upwards. Since $S_y$ exceeds the weight, the friction points downwards.
:::
