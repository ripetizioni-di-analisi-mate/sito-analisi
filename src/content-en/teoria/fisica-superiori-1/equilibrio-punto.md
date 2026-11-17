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

## Drawing and projecting forces

:::osservazione{#componenti titolo="One body at a time"}
The **free-body diagram** displays external forces acting only on the body under study. For a suspended hook, draw its weight and the tension exerted by the rope on the hook. The force of the hook on the rope belongs to the rope's diagram.

Choose coordinate axes and resolve each force. The projection along an axis is positive if it points in the positive sense of that axis. A force balancing a group of forces is the opposite of their resultant. For $\vec R=(6;8)\,\mathrm N$, the balancing force is $\vec F=(-6;-8)\,\mathrm N$, with magnitude $\sqrt{6^2+8^2}\,\mathrm N=10\,\mathrm N$. Substitute both components into the sum to check the result.
:::

::grafico{assi=0 uguale=1 vettori="0,0,6,0,6 N;0,0,0,8,8 N;0,0,-6,-8,F" punti="0,0,pieno,O" xmin=-8 xmax=8 ymin=-10 ymax=10 titolo="Balancing force F on ring O. The components of the diagonal arrow oppose the two given forces"}

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

## Springs in equilibrium

:::teorema{#molla titolo="Deformation required by the load"}
A vertical spring suspending a stationary body in the linear elastic range exerts a restoring force that balances the weight. If its extension is $x\ge0$ and its spring constant is $k$, then $kx=P$. The ratio $P/k$ gives a length, since it divides newtons by newtons per metre.

With $P=16\,\mathrm N$ and $k=200\,\mathrm{N/m}$, the result is $x=0.08\,\mathrm m$. If the linear model was only tested up to $0.06\,\mathrm m$, the result is outside the tested interval. The spring must be described beyond that limit to calculate the actual deformation. The same balance applies horizontally when the spring force balances the other forces along its axis.
:::

::grafico{f="2*x;16" nomi="x (cm),F (N)" punti="8,16,pieno,A" xmin=0 xmax=10 ymin=0 ymax=23 titolo="For k equal to 200 N/m, the spring line meets the 16 N load at A, at 8 cm"}

## Inclined planes

::::teorema{#piano titolo="Axes parallel and perpendicular to the plane"}
Let $\alpha$ be the angle between the plane and the horizontal, with $0\leq\alpha<90^\circ$. The weight components have magnitudes $P_\parallel=P\sin\alpha$ down the plane and $P_\perp=P\cos\alpha$ into the plane. If the ramp triangle has height $h$, base $b$, and sloping side $\ell$, then $\sin\alpha=h/\ell$ and $\cos\alpha=b/\ell$.

:::dimostrazione
Rotate the plane and the horizontal by a right angle to obtain the direction normal to the plane and the vertical, respectively. Thus the angle from the weight to the inward normal is also $\alpha$. In the component triangle, the side adjacent to $\alpha$ is $P_\perp$ and the opposite side is $P_\parallel$.
:::
::::

:::esempio{titolo="Normal reaction and rope on a smooth ramp"}
For $P=60\,\mathrm N$ and $(h,b,\ell)=(3,4,5)\,\mathrm m$, the components are $36\,\mathrm N$ down the ramp and $48\,\mathrm N$ into the ramp. If a rope parallel to the ramp holds the body at rest, tension is $36\,\mathrm N$. The normal reaction, the only outward perpendicular force, is $48\,\mathrm N$. Resolving the weight lets us assign a different constraint force to each axis.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3" riferimento="2,1.5,36.87,1.5,x,y" vettori="2,1.5,2,-0.5,P" etichette="2.3,-0.3,4 m;4.4,1.5,3 m" xmin=-1 xmax=5.8 ymin=-1 ymax=4.4 titolo="Axes rotated with the ramp. The sloping side is 5 m and the weight arrow stays vertical"}

## Friction and admissible rest

:::teorema{#attrito-equilibrio titolo="Find the required force, then check the limit"}
For a body assumed to be at rest, first obtain the required friction vector from the balance equations. Compare its magnitude $f_{\mathrm{rich}}$ with $\mu_sN$. Rest is possible if $f_{\mathrm{rich}}\leq\mu_sN$ and contact is maintained. With no other forces along the ramp, the required friction balances the downslope component of weight, so it acts uphill.

If a rope pulls uphill with tension $T$, the sign reverses once $T$ exceeds $P_\parallel$. Taking uphill as positive gives $f_x=P_\parallel-T$. With $P_\parallel=12\,\mathrm N$ and $T=15\,\mathrm N$, the result is $-3\,\mathrm N$ and the required friction is downhill. If the limit is $4\,\mathrm N$, this direction and magnitude are admissible.
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
For $P=48\,\mathrm N$ and $\sin\alpha=3/5$, each cord needs $T=40\,\mathrm N$. At the same weight, reducing the angle reduces the vertical fraction. The tension must grow to supply the same vertical component. Perfectly horizontal cords cannot support the weight by themselves in this arrangement.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-4,3,T;0,0,4,3,T;0,0,0,-6,P" punti="0,0,pieno,O" xmin=-5 xmax=5 ymin=-7 ymax=4 titolo="Opposite horizontal components and upward vertical components. One drawing unit represents 8 N"}

## Contact with a surface

:::osservazione{#contatto titolo="Normal reaction and vertical forces"}
For a horizontal non-adhesive support, the normal reaction points upward. With a vertical cord to the ceiling, the condition is $N=P-T$, admissible for $0\leq T\leq P$. At $T=P$ the limiting value is $N=0$. For $T>P$ the balance would require a downward force from the support. Simple contact cannot provide that force.

The normal reaction is perpendicular to the local surface. If the surface is inclined, the normal reaction is tilted from vertical. An axis parallel to the plane excludes this force from the parallel balance.
:::

## Bodies pressed against a wall

:::teorema{#parete titolo="Horizontal normal reaction and vertical friction"}
A stationary body pushed against a vertical wall by a horizontal force $S$ has normal reaction $N=S$ if there are no other horizontal forces. The required friction points vertically upward and has magnitude $P$ if weight is the only other vertical force. The wall supports the body provided $P\leq\mu_s S$.

For $P=15\,\mathrm N$ and $\mu_s=0.25$, the minimum push is $60\,\mathrm N$. Increasing the push to $72\,\mathrm N$ raises the threshold to $18\,\mathrm N$, while actual friction remains $15\,\mathrm N$. The two balance equations explain how a horizontal push makes a vertical friction force possible.
:::
