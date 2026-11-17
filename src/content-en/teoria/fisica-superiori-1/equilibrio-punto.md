---
titolo: "Equilibrium of a particle"
sommario: "Free-body diagrams, component balances, inclined planes, friction, and constraints."
---

## Equilibrium conditions

:::teorema{#condizioni titolo="Zero resultant"}
A body that can be modelled as a **particle** is in static equilibrium if it remains at rest in an inertial frame. The model is suitable when its shape and possible rotations are irrelevant to the question. The equilibrium condition is that the resultant $\vec R$ of the external forces be the zero vector. In a plane, this is checked with two independent equations:
$$
\begin{cases}
R_x=\sum F_x=0,\\
R_y=\sum F_y=0.
\end{cases}
$$
The sum uses signed components along each axis. If a point is already at rest and the resultant remains zero, it stays at rest. If it is already moving, a zero resultant leaves its velocity unchanged.
:::

:::esempio{titolo="A ring in equilibrium on a guide"}
Two ropes pull a ring along the same line. A rightward force is $11\,\mathrm N$ and a leftward force is $6\,\mathrm N$. Taking rightward as positive gives $R_x=11-6=5\,\mathrm N$. A third rope must pull leftward with $5\,\mathrm N$ for the sum to become zero. The vertical equation is already satisfied if all forces act along the horizontal guide.
:::

:::osservazione{titolo="A zero net force can maintain different velocities"}
On a frictionless horizontal track, a $6\,\mathrm N$ force to the right and a $6\,\mathrm N$ force to the left act on the same cart. Weight and the reaction from the track balance vertically. If the cart starts at rest, it stays in its initial position. If it passes through the same point at $2\,\mathrm{m/s}$ to the right, it travels a further $6\,\mathrm m$ in the next $3\,\mathrm s$, as long as the force balance stays the same. The condition $\vec R=\vec 0$ tells us that velocity is maintained. The initial velocity is therefore needed to conclude that the cart remains at rest.

::grafico{f="2*x;0" nomi="t (s),x (m)" punti="3,6,pieno,A;3,0,pieno,B" legenda="\text{moving cart};\text{stationary cart}" xmin=0 xmax=4 ymin=-1 ymax=9 titolo="With the same force balance, the slope depends on the initial velocity."}
:::

## Drawing and projecting forces

:::osservazione{#componenti titolo="One body at a time"}
The **free-body diagram** displays external forces acting only on the body under study. For a suspended hook, draw its weight and the tension exerted by the rope on the hook. The force of the hook on the rope belongs to the rope's diagram.

Choose coordinate axes and resolve each force. The projection along an axis is positive if it points in the positive sense of that axis. A force balancing a group of forces is the opposite of their resultant. For $\vec R=(6;8)\,\mathrm N$, the balancing force is $\vec F=(-6;-8)\,\mathrm N$, with magnitude $\sqrt{6^2+8^2}\,\mathrm N=10\,\mathrm N$. Substitute both components into the sum to check the result.
:::

::grafico{assi=0 uguale=1 vettori="0,0,6,0,6 N;0,0,0,8,8 N;0,0,-6,-8" punti="0,0,pieno,O" etichette="-2.1,-5,F" xmin=-8 xmax=8 ymin=-10 ymax=10 titolo="Balancing force F on ring O. The components of the diagonal arrow oppose the two given forces"}

:::esempio{titolo="A rope with a prescribed direction"}
The forces already acting on a ring have a resultant $\vec R=(16;-18)\,\mathrm N$. A rope can be added, pointing up and to the left with a rise-to-horizontal-distance ratio of three to four. The magnitudes of the components of its tension $T$ are therefore $\dfrac45 T$ horizontally and $\dfrac35 T$ vertically. Horizontal equilibrium fixes $T=20\,\mathrm N$. At that tension the rope's vertical component is $12\,\mathrm N$, whereas equilibrium requires $18\,\mathrm N$. An additional vertical rope pulling upwards with $6\,\mathrm N$ is needed. The sum $\left(16-16;-18+12+6\right)\,\mathrm N=(0;0)\,\mathrm N$ confirms the choice.

Starting at the origin, draw the given resultant and then arrange the tensions head to tail. The inclined balancing segment returns the path to the vertical axis at $-6\,\mathrm N$. The vertical rope closes the path. Without it, the polygon remains open by $6\,\mathrm N$ and the resultant points downwards.

::grafico{uguale=1 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,16,-18,R;16,-18,0,-6,T;0,-6,0,0,Tᵥ" punti="16,-18,pieno;0,-6,pieno" xmin=-6 xmax=20 ymin=-21 ymax=7 titolo="Closing the force polygon requires the vertical segment of 6 N."}
:::

## Vertical cords

::::teorema{#corde titolo="Sharing a load"}
A taut ideal cord pulls a body along its length toward the support. If a body of weight $P$ is at rest and supported by one vertical cord, its tension is $T=P$. For two vertical cords from above, $T_1+T_2=P$.

:::dimostrazione
Taking upward as positive gives positive components for the tensions and a weight component of $-P$. The vertical sum is zero exactly when the tensions add up to the weight.
:::
::::

:::esempio{titolo="From the total to a single tension"}
Two cords support a ring weighing $84\,\mathrm N$, and the first is measured at $30\,\mathrm N$. The second must supply $84-30=54\,\mathrm N$. With only the weight known, several pairs would satisfy the balance. The value of $42\,\mathrm N$ for each cord follows if we additionally assume equal tensions.
:::

:::esempio{titolo="Supporting a load subject to two limits"}
A point weighing $90\,\mathrm N$ is supported by two vertical ropes. The first can carry up to $35\,\mathrm N$ and the second up to $60\,\mathrm N$. Their tensions must add to the weight. Since the second rope carries at most $60\,\mathrm N$, the first must carry at least $30\,\mathrm N$. These constraints give

$$
30\,\mathrm N\leq T_1\leq35\,\mathrm N,\qquad
55\,\mathrm N\leq T_2=90\,\mathrm N-T_1\leq60\,\mathrm N.
$$

The limits give the admissible load distributions, provided the ropes can be adjusted to achieve them. For example, $T_1=32\,\mathrm N$ and $T_2=58\,\mathrm N$ are both within their limits. An equal split would exceed the first rope's limit.

::grafico{f="90-x" nomi="T₁ (N),T₂ (N)" punti="30,60,pieno,A;35,55,pieno,B" segmenti="27,60,30,60;35,52,35,55" xmin=27 xmax=39 ymin=50 ymax=64 titolo="Equilibrium fixes the line. The ropes' mechanical limits restrict the options to the segment from A to B."}
:::

## Springs in equilibrium

:::teorema{#molla titolo="Deformation required by the load"}
A vertical spring suspending a stationary body in the linear elastic range exerts a restoring force that balances the weight. If its extension is $x\ge0$ and its spring constant is $k$, then $kx=P$. The ratio $\dfrac{P}{k}$ gives a length, since it divides newtons by newtons per metre.

With $P=16\,\mathrm N$ and $k=200\,\mathrm{N/m}$, the result is $x=0.08\,\mathrm m$. If the linear model was only tested up to $0.06\,\mathrm m$, the result is outside the tested interval. The spring must be described beyond that limit to calculate the actual deformation. The same balance applies horizontally when the spring force balances the other forces along its axis.
:::

::grafico{f="16" linee="0,0 6,12" segmenti="6,12,8,16" nomi="x (cm),F (N)" punti="6,12,pieno,B;8,16,vuoto,A" xmin=0 xmax=10 ymin=0 ymax=23 titolo="B marks the end of the verified range. The dashed extension meets the 16 N load line at A, at 8 cm."}

:::esempio{titolo="Equilibrium of a spring with a stop"}
A vertical spring of stiffness $k=250\,\mathrm{N/m}$ supports a weight that moves down a distance $x$ from its natural length. A rigid horizontal stop at $x_s=0.04\,\mathrm m$ can push upwards. Without contact, a weight of $18\,\mathrm N$ would require $x=\dfrac{18}{250}\,\mathrm m=0.072\,\mathrm m$, beyond the stop. When the weight reaches the stop, the spring supports $kx_s=10\,\mathrm N$ and the normal reaction supplies the other $8\,\mathrm N$.

In this model, contact begins at $P=kx_s$. For a smaller weight, $x=\dfrac Pk$ and $N=0$. For a larger weight, the position stays at $x_s$ and only the reaction of the stop increases. The balance changes when a different constraint comes into play. If the mass is slowly reduced starting from contact, the normal force returns to zero at $P=10\,\mathrm N$. Below this threshold, the weight lifts off the stop.

::grafico{linee="0,0 10,4 24,4" nomi="P (N),x (cm)" punti="10,4,pieno,C;18,4,pieno" xmin=0 xmax=24 ymin=0 ymax=6 titolo="At C the normal force is still zero. Beyond C the reaction increases while the extension stays at 4 cm."}
:::

## Inclined planes

::::teorema{#piano titolo="Axes parallel and perpendicular to the plane"}
Let $\alpha$ be the angle between the plane and the horizontal, with $0\leq\alpha<90^\circ$. The weight components have magnitudes $P_\parallel=P\sin\alpha$ down the plane and $P_\perp=P\cos\alpha$ into the plane. If the ramp triangle has height $h$, base $b$, and sloping side $\ell$, then $\sin\alpha=\dfrac{h}{\ell}$ and $\cos\alpha=\dfrac{b}{\ell}$.

:::dimostrazione
Rotate the plane and the horizontal by a right angle to obtain the direction normal to the plane and the vertical, respectively. Thus the angle from the weight to the inward normal is also $\alpha$. In the component triangle, the side adjacent to $\alpha$ is $P_\perp$ and the opposite side is $P_\parallel$.
:::
::::

:::esempio{titolo="Normal reaction and rope on a smooth ramp"}
For $P=60\,\mathrm N$ and $(h,b,\ell)=(3,4,5)\,\mathrm m$, the components are $36\,\mathrm N$ down the ramp and $48\,\mathrm N$ into the ramp. If a rope parallel to the ramp holds the body at rest, tension is $36\,\mathrm N$. The normal reaction, the only outward perpendicular force, is $48\,\mathrm N$. Resolving the weight lets us assign a different constraint force to each axis.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3" riferimento="2,1.5,36.87,1.5,x,y" vettori="2,1.5,2,-0.5,P" etichette="2.3,-0.3,4 m;4.4,1.5,3 m" xmin=-1 xmax=5.8 ymin=-1 ymax=4.4 titolo="Axes rotated with the ramp. The sloping side is 5 m and the weight arrow stays vertical"}

:::esempio{titolo="A horizontal push on a smooth slope"}
A slope is $3\,\mathrm m$ high, has a $4\,\mathrm m$ base and runs for $5\,\mathrm m$ along the incline. A block weighing $50\,\mathrm N$ is pushed horizontally towards the higher side with a force of $20\,\mathrm N$. A rope parallel to the slope holds it in equilibrium. The horizontal push has an uphill component of $20\cdot\dfrac45\,\mathrm N=16\,\mathrm N$ and a component into the slope of $20\cdot\dfrac35\,\mathrm N=12\,\mathrm N$. The weight contributes $30\,\mathrm N$ downhill and $40\,\mathrm N$ into the slope.

This gives $T=(30-16)\,\mathrm N=14\,\mathrm N$ for the rope and $N=(40+12)\,\mathrm N=52\,\mathrm N$ for the normal force. A horizontal force can therefore enter both balances when the axes are parallel and perpendicular to the slope.
:::

## Friction and admissible rest

:::teorema{#attrito-equilibrio titolo="Find the required force, then check the limit"}
For a body assumed to be at rest, first obtain the required friction vector from the balance equations. Compare its magnitude $f_{\mathrm{rich}}$ with $\mu_sN$. Rest is possible if $f_{\mathrm{rich}}\leq\mu_sN$ and contact is maintained. With no other forces along the ramp, the required friction balances the downslope component of weight, so it acts uphill.

If a rope pulls uphill with tension $T$, the sign reverses once $T$ exceeds $P_\parallel$. Taking uphill as positive gives $f_x=P_\parallel-T$. With $P_\parallel=12\,\mathrm N$ and $T=15\,\mathrm N$, the result is $-3\,\mathrm N$ and the required friction is downhill. If the limit is $4\,\mathrm N$, this direction and magnitude are admissible.
:::

:::osservazione{titolo="Maximum slope without a rope"}
On a slope with no other applied force, weight requires $P\sin\alpha$ of uphill friction and pushes the body into the slope with $N=P\cos\alpha$. For $0\leq\alpha<90^\circ$, the condition for rest simplifies to

$$
P\sin\alpha\leq\mu_s P\cos\alpha
\quad\Longleftrightarrow\quad
\tan\alpha\leq\mu_s.
$$

In the slope triangle, $\tan\alpha=\dfrac hb$. With $\mu_s=0.5$ and a base of $4\,\mathrm m$, the maximum height is therefore $2\,\mathrm m$. In the same model with the same coefficient, two blocks of different weight have the same limiting slope because weight multiplies both the required force and the available friction. An additional pull or push generally changes that comparison.

If one end of the slope is slowly raised and the block starts to slide at $h=1.8\,\mathrm m$ with a horizontal base of $4\,\mathrm m$ at that instant, the estimated $\mu_s$ is $0.45$. This measurement uses equality at the limit. A single test in which the block stays at rest, for example at $h=1.6\,\mathrm m$ with the same base, would give only $\mu_s\geq0.40$.

::grafico{f="x/4;0.5" nomi="h (m),f/N" punti="2,0.5,pieno,C" legenda="\text{required ratio};\mu_s" xmin=0 xmax=3 ymin=0 ymax=1 titolo="With a fixed base of 4 m and coefficient 0.5, the two curves meet at a height of 2 m."}
:::

## Symmetric inclined cords

::::teorema{#corde-inclinate titolo="Adding the vertical components"}
Two cords at the same angle $\alpha$ above the horizontal pull a ring with opposite horizontal components. With $0<\alpha\leq90^\circ$ and common tension magnitude $T$, the vertical balance for weight $P$ is
$$
2T\sin\alpha=P.
$$

:::dimostrazione
The horizontal tension components are equal and opposite. Each tension has an upward component of magnitude $T\sin\alpha$. The vertical sum must cancel the weight component $-P$.
:::
::::

:::esempio{titolo="A load supported by nearly horizontal cords"}
For $P=48\,\mathrm N$ and $\sin\alpha=\dfrac{3}{5}$, each cord needs $T=40\,\mathrm N$. At the same weight, reducing the angle reduces the vertical fraction. The tension must grow to supply the same vertical component. Perfectly horizontal cords cannot support the weight by themselves in this arrangement.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-4,3,T;0,0,4,3;0,0,0,-6,P" etichette="2.4,1.25,T" punti="0,0,pieno,O" xmin=-5 xmax=5 ymin=-7 ymax=4 titolo="Opposite horizontal components and upward vertical components. One drawing unit represents 8 N"}

:::esempio{titolo="Ropes at different angles"}
A ring weighing $50\,\mathrm N$ is supported by two ropes. On the left, the horizontal and vertical factors are $\dfrac45$ and $\dfrac35$, respectively. On the right they are $\dfrac35$ and $\dfrac45$. Using magnitudes $T_\mathrm s$ and $T_\mathrm d$ gives the equations

$$
\begin{cases}
4T_\mathrm s=3T_\mathrm d,\\[2pt]
\dfrac35T_\mathrm s+\dfrac45T_\mathrm d=50\,\mathrm N.
\end{cases}
$$

The first equation requires the right-hand tension to be greater. Substituting $T_\mathrm d=\dfrac43 T_\mathrm s$ in the second gives $T_\mathrm s=30\,\mathrm N$ and hence $T_\mathrm d=40\,\mathrm N$. The two horizontal components have magnitude $24\,\mathrm N$. The vertical components are $18\,\mathrm N$ and $32\,\mathrm N$ and support the entire weight.

::grafico{assi=0 uguale=1 vettori="0,0,-24,18,Tₛ;0,0,24,32;0,0,0,-50,P" etichette="14.5,15.5,Tᵈ" punti="0,0,pieno,O" xmin=-28 xmax=28 ymin=-55 ymax=36 titolo="The ropes have different tensions. The horizontal components cancel and the vertical components support 50 N."}
:::

## Contact with a surface

:::osservazione{#contatto titolo="Normal reaction and vertical forces"}
For a horizontal non-adhesive support, the normal reaction points upward. With a vertical cord to the ceiling, the condition is $N=P-T$, admissible for $0\leq T\leq P$. At $T=P$ the limiting value is $N=0$. For $T>P$ the balance would require a downward force from the support. Simple contact cannot provide that force.

The normal reaction is perpendicular to the local surface. If the surface is inclined, the normal reaction is tilted from vertical. An axis parallel to the plane excludes this force from the parallel balance.
:::

:::esempio{titolo="A downward normal force"}
A body weighing $26\,\mathrm N$ is pushed against a horizontal ceiling by an upward force of magnitude $S$. The normal force from the ceiling points downwards. Taking up as positive, equilibrium gives $S-P-N=0$. For $S=40\,\mathrm N$, the ceiling therefore exerts $14\,\mathrm N$ downwards. A support from below would exert its normal force in the opposite direction.

If the push falls to $20\,\mathrm N$, holding the body at rest would require the ceiling to pull it upwards with $6\,\mathrm N$. A nonadhesive contact cannot supply that force. At $S=26\,\mathrm N$ the contact is at its threshold and the reaction drops to zero.

::grafico{f="x-26" nomi="S (N),N (N)" punti="26,0,pieno,C;40,14,pieno,A" xmin=26 xmax=44 ymin=0 ymax=20 titolo="For a push against the ceiling, the equilibrium branch has a nonnegative normal force and begins at C."}
:::

## Bodies pressed against a wall

:::teorema{#parete titolo="Horizontal normal reaction and vertical friction"}
A stationary body pushed against a vertical wall by a horizontal force $S$ has normal reaction $N=S$ if there are no other horizontal forces. The required friction points vertically upward and has magnitude $P$ if weight is the only other vertical force. The wall supports the body provided $P\leq\mu_s S$.

For $P=15\,\mathrm N$ and $\mu_s=0.25$, the minimum push is $60\,\mathrm N$. Increasing the push to $72\,\mathrm N$ raises the threshold to $18\,\mathrm N$, while actual friction remains $15\,\mathrm N$. The two balance equations explain how a horizontal push makes a vertical friction force possible.
:::

:::esempio{titolo="Downward friction on a wall"}
A body weighs $18\,\mathrm N$ and is pushed with $S_x=32\,\mathrm N$ towards a wall and $S_y=24\,\mathrm N$ upwards. The wall exerts a normal force of $32\,\mathrm N$. The push exceeds the weight by $6\,\mathrm N$ vertically. Holding the body at rest therefore requires a static friction force of $6\,\mathrm N$ downwards. With $\mu_s=0.25$, the limit is $8\,\mathrm N$ and the setup is possible. To find the direction of friction, compare all the remaining components parallel to the contact surface. Looking at weight alone would give the wrong direction.
:::
