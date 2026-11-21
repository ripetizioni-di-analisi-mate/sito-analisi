---
titolo: "Forces and equilibrium"
sommario: "Constraint reactions, springs, friction, inclined planes, strings and torques."
---

## Normal force and tension

:::definizione{#vincoli titolo="Forces exerted by constraints"}
A **constraint** is an object that prevents some motions of a body, such as a floor under a crate or a cord holding up a lamp. The force the constraint exerts on the body is called the **constraint reaction**. Its value is not known in advance and follows from Newton's second law, $\vec F_R=m\vec a$ (the resultant of the forces equals mass times acceleration), together with the condition imposed by the constraint, for example "the body stays on the floor".

A flat surface exerts a **normal force** $\vec N$, a force perpendicular to the surface ("normal" in geometry means perpendicular). The italic letter $N$ denotes the magnitude of this force, while the upright $\mathrm N$ is the newton, the unit of force. If there is friction, the surface also exerts a **tangential** component, parallel to the surface. A taut string exerts a force called **tension** $\vec T$, directed along the string and pointing towards its other end.

On a horizontal surface, if the body does not accelerate vertically and only the weight $mg$ downwards and the normal force upwards act, the sum of the vertical components is $N-mg=0$, so $N=mg$. If a string also pulls upwards with vertical component $T_y>0$ (the subscript $y$ denotes the component along the vertical axis), the same sum becomes $N+T_y-mg=0$. Therefore $N=mg-T_y$ and the normal force decreases. If instead a hand presses the body down, its force adds to the weight and the normal force increases. In every case the normal force follows from the sum of the components perpendicular to the surface, and it equals the weight only in the first case.

A surface without **adhesion** (no glue or suction cups) can push the body but cannot pull it, so its normal force always satisfies $N\geq0$. If the sum of the forces gives $N<0$, the assumption that the body stays in contact with the surface is false. At **separation** the normal force vanishes and the subsequent motion is studied with the remaining forces alone.
:::

::grafico{assi=0 uguale=1 poligoni="-0.7,0 0.7,0 0.7,0.8 -0.7,0.8" segmenti="-2,0,2,0" vettori="0,0.4,0,-1.5,P;0,0.4,0,1.4,N;0,0.4,1.8,1.3,T" xmin=-2.2 xmax=2.2 ymin=-1.8 ymax=1.9 titolo="The vertical component of tension enters the normal balance"}

:::osservazione{#confine-equilibrio titolo="Choose the boundary before writing equations"}
The **system** is the set of bodies being studied, and its boundary is the closed line separating it from the rest. Forces between bodies inside the boundary are called **internal**, those exerted by bodies outside it are called **external**. Only external forces enter the balance of the system. Indeed every internal force appears together with its opposite (Newton's third law), and the two cancel in the sum.

Suppose a crate weighing $50\,\mathrm N$ holds a load weighing $20\,\mathrm N$, resting on its base, and both are at rest on a horizontal floor. To find the force of the floor, crate and load are enclosed in the same boundary (left figure). The contact forces between crate and load are internal. Two weights downwards and one external reaction upwards remain, so the normal force of the floor is $(50+20)\,\mathrm N=70\,\mathrm N$.

To find the force with which the load presses on the base, the load is isolated (right figure). Now the boundary runs between load and base, so the normal force of the base is an external force. For the isolated load, the normal force of the base balances its weight, so it is $20\,\mathrm N$. Knowing *where* the floor applies the resultant of the contact also requires the position of the load. That question requires the **rigid body** model, an extended body that does not deform and for which the points of application of the forces matter (studied in the last section).
:::

::grafico{assi=0 uguale=1 linee="-3.25,0 3.25,0" poligoni="-2.55,0 -0.55,0 -0.55,0.6 -2.55,0.6;0.55,0 2.55,0 2.55,0.6 0.55,0.6;-1.98,0.6 -1.13,0.6 -1.13,1.24 -1.98,1.24;1.12,0.6 1.97,0.6 1.97,1.24 1.12,1.24" segmenti="-2.82,-0.15, -0.27,-0.15;-0.27,-0.15,-0.27,1.47;-0.27,1.47,-2.82,1.47;-2.82,1.47,-2.82,-0.15;0.97,0.53,2.12,0.53;2.12,0.53,2.12,1.39;2.12,1.39,0.97,1.39;0.97,1.39,0.97,0.53" etichette="-2.64,1.76,crate and load;0.88,1.76,load alone" xmin=-3.35 xmax=3.35 ymin=-0.4 ymax=2.17 titolo="On the left the boundary encloses the contact. On the right the contact separates the system from the crate's base."}

## Elastic force

:::teorema{#hooke titolo="Hooke's law"}
An **ideal spring** is a spring of negligible mass whose force depends only on how much it is deformed. Its **natural length** $\ell_0$ (italic letter "ell") is its length when nothing pulls or compresses it. Let $x$ be the change in length from $\ell_0$, with sign: $x>0$ if the spring is extended, $x<0$ if it is compressed. The component of the spring's force on the moving end is
$$
F_e=-kx,\qquad k>0.
$$
The number $k$ is the **spring constant** and tells how many newtons are needed for each metre of deformation. It is measured in $\mathrm{N/m}$, because the product $kx$ must be a force. The minus sign means that the force points opposite to the deformation. An extended spring pulls the end back ($F_e<0$) and a compressed spring pushes it out ($F_e>0$), so in both cases the force returns the end towards the natural length. For this reason it is also called a **restoring force**.

Hooke's law is a **linear** model, that is, the force is directly proportional to the deformation: doubling $x$ doubles the force. It holds within the spring's **elastic range**, the interval of deformations from which the spring, once released, returns to its natural length. To test it, the external force that holds the spring at rest is measured for several values of $x$. This force balances $F_e$, so it equals $+kx$. The graph of applied force against extension is therefore a straight line through the origin with **slope** $+k$, where the slope is the increase in force divided by the increase in $x$. The graph of the spring's force against $x$ has the opposite slope, $-k$.

A mass $m$ hanging at rest from an ideal vertical spring feels an upward spring force of magnitude $kx$ and its weight $mg$ downwards. Rest requires $kx=mg$, so the extension is
$$
x=\frac{mg}{k}.
$$
With $m=0.40\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ and $k=100\,\mathrm{N/m}$ the weight is $0.40\cdot10\,\mathrm N=4\,\mathrm N$, so $x=\dfrac{4}{100}\,\mathrm m=0.040\,\mathrm m$. If a mass of $0.20\,\mathrm{kg}$ is added, the weight becomes $6\,\mathrm N$ and the new extension is $\dfrac{6}{100}\,\mathrm m=0.060\,\mathrm m$. The two-centimetre difference is $\dfrac{2\,\mathrm N}{100\,\mathrm{N/m}}$, so it depends only on the added weight, as long as the spring stays in its linear range.

Two springs are **in series** if they are connected one after the other, and in that case each transmits the whole force and the extensions add. They are **in parallel** if they sit side by side with their ends joined, so they have the same extension and their forces add. With two springs of $100\,\mathrm{N/m}$ and a force of $10\,\mathrm N$, in series the total extension is $(0.10+0.10)\,\mathrm m=0.20\,\mathrm m$; in parallel each carries $5\,\mathrm N$ and the extension is $0.05\,\mathrm m$. The **equivalent constant**, the force divided by the total extension, is therefore $50\,\mathrm{N/m}$ in series and $200\,\mathrm{N/m}$ in parallel.
:::

::grafico{f="100*x" punti="0.04,4,pieno;0.06,6,pieno" xmin=0 xmax=0.08 ymin=0 ymax=8.5 nomi="x (m),F (N)" titolo="The applied-force graph gives k equal to 100 N/m"}

:::esempio{#calibrazione-molla titolo="Finding spring stiffness and natural length"}
Suppose the total length $\ell$ of the spring is measured without knowing its natural length $\ell_0$. The deformation is then $\ell-\ell_0$ and the applied force is $F=k(\ell-\ell_0)$. Holding the spring extended to $14\,\mathrm{cm}$ takes a pull of $4\,\mathrm N$, while at $18\,\mathrm{cm}$ it takes a pull of $12\,\mathrm N$. Subtracting the relation for the first reading from that for the second eliminates $\ell_0$:
$$
(12-4)\,\mathrm N=k(0.18\,\mathrm m-\ell_0)-k(0.14\,\mathrm m-\ell_0)=k\,(0.18-0.14)\,\mathrm m.
$$
So the constant is the slope
$$
k=\frac{12-4}{0.18-0.14}\,\mathrm{N/m}=\frac{8}{0.04}\,\mathrm{N/m}=200\,\mathrm{N/m}.
$$
In the first reading the deformation is $\dfrac{4}{200}\,\mathrm m=0.02\,\mathrm m=2\,\mathrm{cm}$, so $\ell_0=(14-2)\,\mathrm{cm}=12\,\mathrm{cm}$. On the graph of force against total length the line crosses the horizontal axis, where $F=0$, exactly at $12\,\mathrm{cm}$. This point is called the horizontal **intercept**.

Dividing the force by the total length in a single reading would give a wrong slope, because $0.14\,\mathrm m$ is the length of the spring and not its deformation.
:::

::grafico{curve="t,2*(t-12),12,21" punti="12,0,pieno;14,4,pieno;18,12,pieno" xmin=10 xmax=22 ymin=0 ymax=19 nomi="ℓ (cm),F (N)" titolo="The horizontal intercept gives natural length. Each extra centimetre of extension takes another 2 N."}

## Static and kinetic friction

:::teorema{#attrito titolo="Model of sliding and static friction"}
**Sliding friction** is the tangential force that a surface exerts on a body resting on it that slides, or tends to slide, over it. This model is also called the **Coulomb model**.

**Static friction** $f_s$ opposes the sliding that the other forces would tend to cause. Its magnitude takes whatever value is needed for rest, from zero up to the maximum
$$
f_{s,\max}=\mu_sN.
$$
The letter $\mu$ is read "mu". The **coefficient of static friction** $\mu_s$ is a pure number (no unit) that depends on the two materials in contact. For a stationary body, the friction needed for equilibrium is calculated first. If the required magnitude is at most $\mu_sN$, the contact maintains rest. At the limit, called the **threshold** of sliding, $f_s=\mu_sN$ is reached.

With a normal force of $50\,\mathrm N$ and $\mu_s=0.40$ the limit is $0.40\cdot50\,\mathrm N=20\,\mathrm N$. A horizontal pull of $12\,\mathrm N$ is less than $20\,\mathrm N$, so it is balanced by $12\,\mathrm N$ of static friction in the opposite direction. Always assigning $20\,\mathrm N$ of friction would give a resultant of $(12-20)\,\mathrm N=-8\,\mathrm N$, an acceleration opposite to the pull, contrary to the initial rest.

When the body slides, **kinetic friction** acts, with magnitude $f_d=\mu_dN$ and direction opposite to the sliding relative to the surface. The pure number $\mu_d$ is the **coefficient of kinetic friction**. In the graph, with the same normal force of $50\,\mathrm N$, static friction matches the pull up to $20\,\mathrm N$. While sliding, friction is $15\,\mathrm N$, so $\mu_d=\dfrac{15\,\mathrm N}{50\,\mathrm N}=0.30$. If the body slows down to rest, from that instant the static case applies again, so the limit $\mu_sN$ is checked again before continuing the calculation. A parcel placed at rest on a conveyor **belt** moving to the right slides to the left relative to the belt, so friction on the parcel points to the right, in the direction in which the parcel moves relative to the ground.
:::

::grafico{curve="t,t,0,20;t,15,0,27" punti="12,12,pieno;20,20,pieno" xmin=0 xmax=27 ymin=0 ymax=22 nomi="F (N),f (N)" titolo="Static friction matches the pull up to 20 N. While sliding it is 15 N here"}

:::esempio{#trazione-obliqua titolo="When a pull also changes the static limit"}
A crate weighs $60\,\mathrm N$ and sits on a horizontal surface with $\mu_s=0.40$. The force $F$ pulls to the right and upwards and makes an angle $\alpha$ (letter "alpha") with the horizontal, with $\cos\alpha=0.80$ and $\sin\alpha=0.60$. In the right triangle with $F$ as hypotenuse, the horizontal component is the side adjacent to $\alpha$, $F\cos\alpha$, and the vertical component is the opposite side, $F\sin\alpha$. At rest:
- horizontally friction balances $F\cos\alpha$, so the required friction is $F\cos\alpha$;
- vertically $N+F\sin\alpha-60\,\mathrm N=0$, so $N=60\,\mathrm N-F\sin\alpha$ and the available friction is $\mu_s(60\,\mathrm N-F\sin\alpha)$.

As $F$ grows, the required friction increases and the available friction decreases. At the threshold the two values are equal:
$$
\begin{aligned}
F\cos\alpha&=\mu_s(60\,\mathrm N-F\sin\alpha),\\
0.80\,F&=0.40\cdot60\,\mathrm N-0.40\cdot0.60\,F,\\
(0.80+0.24)\,F&=24\,\mathrm N,\\
F&=\frac{24}{1.04}\,\mathrm N\simeq23.1\,\mathrm N.
\end{aligned}
$$
In the second line $\mu_s$ multiplies both terms, in the third the terms containing $F$ are moved to the left. At that value the normal force is $60\,\mathrm N-0.60\,F\simeq46.2\,\mathrm N$, still positive.

With a horizontal pull of the same magnitude, the normal force would still equal the weight and the static limit would be $0.40\cdot60\,\mathrm N=24\,\mathrm N$. Before substituting $f_d=\mu_dN$, it is established whether the crate is already sliding or whether the demand exceeds the static limit.
:::

::grafico{f="0.8*x;24-0.24*x" punti="23.076923,18.461538,pieno,A" etichette="26.7,27,required;28.5,13.5,available" xmin=0 xmax=41 ymin=0 ymax=33 nomi="F (N),f (N)" titolo="At A, friction needed to keep the crate at rest reaches the available limit."}

:::osservazione{#attriti-piu-contatti titolo="Sharing load between different contacts"}
If the two runners of a sled rest on different materials, each runner has its own normal force and its own coefficient. With $N_A=30\,\mathrm N$, $N_B=50\,\mathrm N$, $\mu_{s,A}=0.30$ and $\mu_{s,B}=0.50$ the two static limits are
$$
0.30\cdot30\,\mathrm N=9\,\mathrm N,\qquad 0.50\cdot50\,\mathrm N=25\,\mathrm N.
$$
Their sum, $34\,\mathrm N$, is an upper bound on the total friction in the direction in which one tries to drag the sled.

This check concerns **translation** alone, the motion in which all parts of the sled move in the same way, without rotating. The friction forces on the two runners act at different points, so they also produce torques, which tend to rotate the sled, and equilibrium may impose on the two frictions values different from their maxima. Before treating the total maximum as attainable, one therefore checks that the torques can cancel too.
:::

## Inclined plane

:::teorema{#piano-inclinato titolo="Resolving weight into components"}
An **inclined plane** is a flat surface that makes an angle $\theta$ (letter "theta") with the horizontal. One axis is chosen along the plane, positive down the slope, and one perpendicular to the plane, positive outwards (**outward normal** axis). The weight is resolved along these two axes:
- the component (or projection) along the plane is $P_\parallel=mg\sin\theta$ and points down the slope;
- the perpendicular component pushes the body into the plane and has magnitude $P_\perp=mg\cos\theta$.

The weight is the hypotenuse of the right triangle formed by the two components. The angle between the weight and the inward normal equals $\theta$, because the weight is perpendicular to the horizontal, the normal is perpendicular to the plane, and two directions both rotated by a right angle form the same angle as before. Therefore the perpendicular component, adjacent to $\theta$, contains the cosine, and the component along the plane, opposite $\theta$, contains the sine.

If no other perpendicular forces act and the body stays on the plane, the sum of the perpendicular components is $N-mg\cos\theta=0$, so $N=mg\cos\theta$. Without friction the only force along the plane is $mg\sin\theta$, so $ma=mg\sin\theta$ and the acceleration down the slope is $g\sin\theta$, the same for every mass. If the body is sliding down with kinetic friction, the friction $\mu_dN=\mu_dmg\cos\theta$ points up the slope, so $ma=mg\sin\theta-\mu_dmg\cos\theta$. Dividing by $m$ gives
$$
a=g(\sin\theta-\mu_d\cos\theta).
$$
If instead it is sliding up, friction points down the plane and adds to the component of the weight, so with downhill positive $a=g(\sin\theta+\mu_d\cos\theta)$.

For a start from rest, rest is possible if the weight component along the plane does not exceed the maximum static friction, i.e. if $mg\sin\theta\leq\mu_smg\cos\theta$. For $0\leq\theta<90^\circ$ the product $mg\cos\theta$ is positive, so dividing by it the condition is equivalent to $\tan\theta\leq\mu_s$, where the **tangent** is $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$. This check is made before using the kinetic formula. If for a body already sliding down the kinetic formula gives a negative result, the acceleration points up the slope, so the downhill **speed** (the magnitude of the velocity) decreases. After stopping, kinetic friction no longer acts, so one returns to the static balance, which decides whether the body stays at rest. The body does not automatically reverse.
:::

:::esempio{#distacco-piano titolo="Weight projection and normal reaction are different results"}
A sled weighing $60\,\mathrm N$ slides down a $60^\circ$ ramp while staying in contact. An extra force $F$ is perpendicular to the surface and points outwards. The weight has a normal component of magnitude $60\cos60^\circ\,\mathrm N=60\cdot0.5\,\mathrm N=30\,\mathrm N$ pointing inwards. While the constraint holds, the acceleration perpendicular to the plane is zero, so the sum of the perpendicular components is $N+F-30\,\mathrm N=0$ and
$$
N=30\,\mathrm N-F.
$$
For $F=18\,\mathrm N$ the ramp still exerts $(30-18)\,\mathrm N=12\,\mathrm N$. Separation occurs at the limit $F=30\,\mathrm N$, where the normal force vanishes. With a larger $F$ the formula would give $N<0$, a pull of the ramp inwards, so the contact assumption is no longer satisfied. The weight projection stays $30\,\mathrm N$ for every value of $F$, while the normal force changes with $F$.

During contact the extra force is perpendicular to the ramp and has no projection along it. If the surface is rough, $F$ still changes the tangential force, because it changes the normal force and hence the friction $\mu_dN$.
:::

::grafico{assi=0 uguale=1 linee="-1.0,-2.14705 1.49,2.16576" vettori="0,0,0,-2,P;0,0,-0.519615,0.3;0,0,-0.34641,0.2" segmenti="0,-2,-0.866025,-1.5;0,0,-0.866025,-1.5" punti="0,0,pieno" etichette="-.65,.39,F;-.30,.38,N" xmin=-1.76 xmax=1.72 ymin=-2.37 ymax=2.46 titolo="Along the normal, F and N together balance the inward projection of weight."}

## Equilibrium of a particle

:::teorema{#equilibrio titolo="Zero resultant"}
A **particle** is a body whose size is neglected, represented by a single point. A particle is in **translational equilibrium** when the sum of the force components is zero along both axes:
$$
\sum F_x=0,\qquad \sum F_y=0.
$$
The symbol $\sum$ (capital sigma) denotes the sum over all the forces. By the second law these conditions imply zero acceleration. **Static equilibrium** additionally requires the particle to be initially at rest. A **knot** where several ideal strings meet is treated as a particle, and each string pulls the knot along its own direction, away from the knot.

A weight $P$ is supported by two symmetric strings at angle $\theta$ above the horizontal, with the same tension $T$. Each string has horizontal component $T\cos\theta$ and vertical component $T\sin\theta$. By symmetry the horizontal components point in opposite directions and cancel. Vertically the two components support the weight, so
$$
2T\sin\theta=P,\qquad T=\frac{P}{2\sin\theta}.
$$
At $\theta=30^\circ$ we have $\sin30^\circ=\dfrac12$, so $T=\dfrac{P}{2\cdot\frac12}=P$ and each tension equals the whole weight. As the strings become nearly horizontal the sine approaches zero, so very large tensions are needed for the same vertical support.

With unequal angles the tensions are different and both equations are solved. The subscripts $L$ and $R$ denote the left and right strings. For $\theta_L=30^\circ$ and $\theta_R=60^\circ$ the relations are
$$
\begin{aligned}
&\text{horizontal:}\quad T_L\cos30^\circ=T_R\cos60^\circ,\\
&\text{vertical:}\quad T_L\sin30^\circ+T_R\sin60^\circ=P.
\end{aligned}
$$
Since $\cos30^\circ=\dfrac{\sqrt3}{2}$ and $\cos60^\circ=\dfrac12$, the first becomes $\dfrac{\sqrt3}{2}T_L=\dfrac12T_R$, so $T_R=\sqrt3\,T_L$. Substituting into the second, with $\sin30^\circ=\dfrac12$ and $\sin60^\circ=\dfrac{\sqrt3}{2}$, gives
$$
\frac12T_L+\sqrt3\,T_L\cdot\frac{\sqrt3}{2}=\frac12T_L+\frac32T_L=2T_L=P,
$$
so $T_L=\dfrac P2$ and $T_R=\dfrac{\sqrt3}{2}P$. The more nearly vertical string holds the greater tension in this example.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-0.8660,0.5,T_L;0,0,0.8660,1.5,T_R;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.2 ymax=1.9 titolo="Horizontal projections have equal magnitudes even though the tensions differ"}

:::esempio{#portata-funi titolo="Which string reaches its limit first?"}
For the knot with inclinations of $30^\circ$ on the left and $60^\circ$ on the right, suppose the maximum allowable tensions are $32\,\mathrm N$ for the left string and $36\,\mathrm N$ for the right. Force balance gives $T_L=\dfrac P2$ and $T_R=\dfrac{\sqrt3}{2}P$. Each limit therefore gives a condition on the weight:
$$
\begin{aligned}
\frac P2\leq32\,\mathrm N\quad&\Longrightarrow\quad P\leq64\,\mathrm N,\\
\frac{\sqrt3}{2}P\leq36\,\mathrm N\quad&\Longrightarrow\quad P\leq\frac{72}{\sqrt3}\,\mathrm N\simeq41.6\,\mathrm N.
\end{aligned}
$$
For the knot to stay in equilibrium with both strings within their limits, the two conditions hold together, so the allowed weight is the smaller of the two maxima, $41.6\,\mathrm N$. In this example it is the right string, even though its tensile limit is greater, that determines the allowed weight, because its tension grows faster with the weight.
:::

## Torque and equilibrium of extended bodies

:::definizione{#momento-equilibrio titolo="Moment arm of a force"}
A body that can rotate about a fixed point, the **pivot**, is set rotating by the applied forces. The **line of action** of a force is the line on which its arrow lies. The **moment arm** $b$ is the perpendicular distance from the pivot to the force's line of action. In the plane, the **torque** of the force about the pivot has magnitude
$$
M=bF=rF|\sin\theta|,
$$
where $r$ is the distance from the pivot to the point of application and $\theta$ is the angle between the position (the segment from the pivot to the point of application) and the force. The two expressions agree, because in the right triangle with hypotenuse $r$ the moment arm is the side opposite $\theta$, so $b=r|\sin\theta|$. Torque is measured in $\mathrm{N\cdot m}$ (newton metres). Torque also has a sign, which indicates the direction of rotation, and **anticlockwise**, opposite to the hands of a clock, is usually taken as positive.

Two equal forces can have different torques about the same pivot, because torque depends on the line of action. If the line passes through the pivot, the moment arm is zero and so is the torque. A $20\,\mathrm N$ force applied $0.40\,\mathrm m$ from the pivot at an angle of $30^\circ$ has moment arm $0.40\cdot\sin30^\circ\,\mathrm m=0.20\,\mathrm m$ and torque magnitude $0.20\cdot20\,\mathrm{N\cdot m}=4\,\mathrm{N\cdot m}$. If the force were perpendicular to the radius, the moment arm would be $0.40\,\mathrm m$ and the torque twice as large, $8\,\mathrm{N\cdot m}$.

A beam is an extended body, which can rotate as well as translate. For a free beam in the plane, static equilibrium requires both the resultant and the total torque (the sum of the signed torques) to vanish. With zero total torque the beam is in **rotational equilibrium**. A **couple** consists of two equal and opposite forces along distinct parallel lines. A couple gives zero resultant, but its two torques have the same sign and add.

A **lever** is a rigid bar that rotates about a pivot, also called the **fulcrum**. The pivot exerts a reaction on the lever, usually unknown. When torques are calculated about the pivot, this reaction has zero moment arm and does not appear in the torque equation. The force balance is then used to calculate that reaction. A **hinge** is a fixed pivot that lets the attached beam rotate, and its reaction generally has a horizontal and a vertical component. The weight of an extended body acts at its **centre of gravity**, which for a **uniform** bar, with its mass spread evenly along its whole length, is the midpoint. The lever's own weight can be ignored when it is negligible compared with the other forces, or, for the torque equation about the pivot, when its line of action passes through the pivot. In the second case the weight still enters the force balance and hence the pivot reaction.
:::

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,0,1,-1.73205;1,-1.73205,4,0" vettori="4,0,5.73205,1,F" punti="0,0,pieno,O;1,-1.73205,pieno,H" xmin=-0.4 xmax=6.2 ymin=-2.1 ymax=1.5 titolo="OH is perpendicular to the line of action, so it is the moment arm"}

:::esempio{#momento-coordinate titolo="Finding torque from signed components"}
The **reference point** is the point about which torques are calculated (for a lever it is usually the pivot). With the reference point at the origin, axes pointing right and up, and anticlockwise positive, a force with components $(F_x;F_y)$ applied at the point $(x;y)$ has torque
$$
M_O=xF_y-yF_x.
$$
The first product is the contribution of the vertical component, whose moment arm is the horizontal distance $x$. For $x>0$ and $F_y>0$ the rotation is anticlockwise and the contribution is positive. The second product comes from the horizontal component, whose moment arm is $y$. A positive horizontal force applied above the reference point tends to turn clockwise, which gives the minus sign.

For $\vec r=(0.20;0.10)\,\mathrm m$, the position of the point of application, and $\vec F=(-4;6)\,\mathrm N$ both contributions are positive:
$$
M_O=\bigl(0.20\cdot6-0.10\cdot(-4)\bigr)\,\mathrm{N\cdot m}=(1.2+0.4)\,\mathrm{N\cdot m}=+1.6\,\mathrm{N\cdot m}.
$$
Changing the sign of one force component changes the sign of the corresponding contribution.
:::

:::esempio{#coppia-forze titolo="A couple keeps the same torque about a different point"}
A downward force of $10\,\mathrm N$ acts at point $O$ at coordinate $x=0$, and an equal upward force acts at point $B$ at $x=0.60\,\mathrm m$. The resultant is $(-10+10)\,\mathrm N=0$.
- If the reference point is $O$, the force at $O$ has zero moment arm. Only the force at $B$ contributes, upwards to the right of the reference point, and the torque is $+10\cdot0.60\,\mathrm{N\cdot m}=+6\,\mathrm{N\cdot m}$.
- If the reference point is the midpoint $C$, each force has a moment arm of $0.30\,\mathrm m$. The force at $O$ points down to the left of $C$ and the one at $B$ points up to the right of $C$, so both turn anticlockwise and contribute $+10\cdot0.30\,\mathrm{N\cdot m}=+3\,\mathrm{N\cdot m}$. The sum stays $+6\,\mathrm{N\cdot m}$.

Moving the reference point a distance $d$ to the right, the coordinate of every point relative to the new reference point becomes $x-d$. Each torque $xF_y$ therefore becomes $(x-d)F_y=xF_y-dF_y$, and the total torque changes by $-d\sum F_y$. The change is proportional to the resultant and vanishes when the resultant is zero. If instead only one of the two forces is kept, the resultant is not zero and changing the reference point changes the torque.
:::

::grafico{assi=0 uguale=1 linee="-0.32,0 2.02,0" vettori="0,0,0,-0.9,F;1.8,0,1.8,0.9,F" punti="0,0,pieno;0.9,0,pieno;1.8,0,pieno" etichette="-.14,.24,O;.81,.27,C;1.68,-.27,B" xmin=-.55 xmax=2.34 ymin=-1.14 ymax=1.16 titolo="The forces point in opposite directions. About C, both produce anticlockwise rotation."}

:::esempio{#appoggi-limite titolo="Check that both supports can supply their reactions"}
A uniform plank of length $3\,\mathrm m$ and weight $60\,\mathrm N$ rests on point A at $x=0$ and on point B at $x=2\,\mathrm m$. A **simple support** pushes the plank upwards but does not hold it down, like the normal force of a surface. Since the plank is uniform, its weight acts at its midpoint, at $x=1.5\,\mathrm m$. An extra load $Q$ is applied at $x=3\,\mathrm m$.

Torques are calculated about the first support, because the reaction $N_A$ has zero moment arm. Distances and forces are expressed in International System (SI) units, metres and newtons. $N_B$ upwards at $2\,\mathrm m$ gives $+2N_B$, the weight at $1.5\,\mathrm m$ gives $-60\cdot1.5$ and $Q$ at $3\,\mathrm m$ gives $-3Q$. The total torque is zero, so
$$
2N_B=60\cdot1.5+3Q,\qquad N_B=\frac{90+3Q}{2}.
$$
The vertical balance gives $N_A+N_B-60\,\mathrm N-Q=0$, so $N_A=60\,\mathrm N+Q-N_B$.

| End load (N) | Reaction A (N) | Reaction B (N) |
| ---: | ---: | ---: |
| 0 | 15 | 45 |
| 20 | 5 | 75 |
| 30 | 0 | 90 |

The extra load unloads support A (it reduces $N_A$) even though the total weight increases. The reason is that $Q$ lies beyond B and tends to rotate the plank about B, lifting the end at A. For $Q>30\,\mathrm N$ the two equations would give $N_A<0$, a downward force, which a simple support cannot supply. So the contact at A opens and the plank can rotate about B.
:::

::grafico{assi=0 uguale=1 linee="-0.16,0 3.26,0" poligoni="-0.18,-.32 0,0 .18,-.32;1.82,-.32 2,0 2.18,-.32" vettori="0,0,0,.32,N_A;2,0,2,1.92,N_B;1.5,0,1.5,-1.92,P;3,0,3,-.32,Q" punti="0,0,pieno;1.5,0,pieno;2,0,pieno;3,0,pieno" etichette="-.13,-.53,A;1.88,-.53,B" xmin=-.58 xmax=3.56 ymin=-2.26 ymax=2.24 titolo="For Q = 10 N, A exerts 10 N and B exerts 60 N. The plank's weight acts at its centre."}
