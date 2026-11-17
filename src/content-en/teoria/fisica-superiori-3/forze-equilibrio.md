---
titolo: "Forces and equilibrium"
sommario: "Constraint reactions, springs, friction, inclined planes, strings and torques."
---

## Normal force and tension

:::definizione{#vincoli titolo="Forces exerted by constraints"}
A **constraint** limits the possible motion of a body. Its reaction is a force that follows from the equation of motion and the imposed condition. In a contact model, a flat surface exerts a normal force perpendicular to the surface. Friction may add a tangential component. A taut string pulls along itself towards its other end.

On a horizontal surface, with zero vertical acceleration and weight and normal force alone, $N=mg$. If a string also pulls upwards with component $T_y>0$, the equation becomes $N+T_y-mg=0$ and the normal force decreases. Pressing down on the body instead increases it. In both cases its value follows from balancing the normal components, without automatically identifying it with weight.

A nonadhesive surface can push but cannot pull the body. If the balance requires $N<0$, the assumed contact is inconsistent with the forces. When contact is lost, the normal force vanishes and motion must be studied using the remaining forces.
:::

::grafico{assi=0 uguale=1 poligoni="-0.7,0 0.7,0 0.7,0.8 -0.7,0.8" segmenti="-2,0,2,0" vettori="0,0.4,0,-1.5,P;0,0.4,0,1.4,N;0,0.4,1.8,1.3,T" xmin=-2.2 xmax=2.2 ymin=-1.8 ymax=1.9 titolo="The vertical component of tension enters the normal balance"}

:::osservazione{#confine-equilibrio titolo="Choose the boundary before writing equations"}
Suppose a crate weighing $50\,\mathrm N$ holds a load weighing $20\,\mathrm N$, resting on its base. Both are at rest on a horizontal floor. To find the floor force, draw a single boundary around the crate and load. Their mutual contact forces are internal. The remaining forces are two weights and one external reaction, so the floor normal force is $70\,\mathrm N$.

To find the force the load exerts on the base, separate it from the crate. For the isolated load, the normal force from the base balances its weight and is $20\,\mathrm N$. Finding where the floor applies the resultant of the contact also requires the position of the load. That question needs a rigid-body model with points of application.
:::

::grafico{assi=0 uguale=1 linee="-3.25,0 3.25,0" poligoni="-2.55,0 -0.55,0 -0.55,0.6 -2.55,0.6;0.55,0 2.55,0 2.55,0.6 0.55,0.6;-1.98,0.6 -1.13,0.6 -1.13,1.24 -1.98,1.24;1.12,0.6 1.97,0.6 1.97,1.24 1.12,1.24" segmenti="-2.82,-0.15, -0.27,-0.15;-0.27,-0.15,-0.27,1.47;-0.27,1.47,-2.82,1.47;-2.82,1.47,-2.82,-0.15;0.97,0.53,2.12,0.53;2.12,0.53,2.12,1.39;2.12,1.39,0.97,1.39;0.97,1.39,0.97,0.53" etichette="-2.64,1.76,crate and load;0.88,1.76,load alone" xmin=-3.35 xmax=3.35 ymin=-0.4 ymax=2.17 titolo="On the left the boundary encloses the contact. On the right the contact separates the system from the crate's base."}

## Elastic force

:::teorema{#hooke titolo="Hooke's law"}
For an ideal spring, $x$ is the signed change in length from its natural state. If extension is positive, the spring's force component on the moving end is $F_e=-kx$ with $k>0$. This sign means that the force tends to return the end to its natural position. The unit of $k$ is $\mathrm{N/m}$, because $kx$ is a force.

The law is a linear model valid within the device's elastic range. Test it by measuring the external force that keeps the spring at rest at several values of $x$. That force balances $F_e$, so a graph of applied force against extension has slope $+k$. A graph of the spring's force against $x$ has the opposite slope, $-k$.

For an ideal vertical spring, a stationary hanging mass produces extension $x=mg/k$. With $m=0.40\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ and $k=100\,\mathrm{N/m}$, the restoring force must be $4\,\mathrm N$, so $x=0.040\,\mathrm m$. Add $0.20\,\mathrm{kg}$ and the extension becomes $0.060\,\mathrm m$. The two-centimetre difference depends only on the added weight while the spring is within its linear range.
:::

::grafico{f="100*x" punti="0.04,4,pieno;0.06,6,pieno" xmin=0 xmax=0.08 ymin=0 ymax=8.5 nomi="x (m),F (N)" titolo="The applied-force graph gives k equal to 100 N/m"}

:::esempio{#calibrazione-molla titolo="Finding spring stiffness and natural length"}
Suppose you measure total spring length $\ell$ without knowing its natural length $\ell_0$. Holding it extended to $14\,\mathrm{cm}$ takes a pull of $4\,\mathrm N$, and at $18\,\mathrm{cm}$ the pull is $12\,\mathrm N$. Comparing the two readings eliminates $\ell_0$ from the relation $F=k(\ell-\ell_0)$.

The slope is $\dfrac{12-4}{0.18-0.14}\,\mathrm{N/m}=200\,\mathrm{N/m}$. The first reading is at an extension from the natural length of $4/200\,\mathrm m=0.02\,\mathrm m$, so $\ell_0=12\,\mathrm{cm}$. On a graph of force against total length, the line crosses the horizontal axis at $12\,\mathrm{cm}$. Dividing the force by the total length in a single reading would give the wrong slope.
:::

::grafico{curve="t,2*(t-12),12,21" punti="12,0,pieno;14,4,pieno;18,12,pieno" xmin=10 xmax=22 ymin=0 ymax=19 nomi="ℓ (cm),F (N)" titolo="The horizontal intercept gives natural length. Each extra centimetre of extension takes another 2 N."}

## Static and kinetic friction

:::teorema{#attrito titolo="Model of sliding and static friction"}
**Static friction** opposes the sliding that other forces would tend to cause. Its magnitude can vary from zero to $\mu_s N$. For a stationary body, first find the friction needed for equilibrium. If this magnitude is at most $\mu_sN$, contact can maintain rest. At the limit we have $f_s=\mu_sN$.

With normal force $50\,\mathrm N$ and $\mu_s=0.40$, the limit is $20\,\mathrm N$. A horizontal pull of $12\,\mathrm N$ is balanced by twelve newtons of static friction in the opposite direction. Assigning twenty newtons of friction in every case would predict an acceleration opposite the pull, contrary to initial rest.

When the body slides, the kinetic friction model gives magnitude $f_d=\mu_d N$ and a direction opposite to relative sliding. If the body slows to rest, check the static limit again before continuing the calculation. On a moving belt, friction can point along the body's velocity relative to the ground if the body slides the other way relative to the belt.
:::

::grafico{curve="t,t,0,20;t,15,0,27" punti="12,12,pieno;20,20,pieno" xmin=0 xmax=27 ymin=0 ymax=22 nomi="F (N),f (N)" titolo="Static friction matches the pull up to 20 N. While sliding it is 15 N here"}

:::esempio{#trazione-obliqua titolo="When a pull also changes the static limit"}
A crate weighs $60\,\mathrm N$ and sits on a horizontal surface with $\mu_s=0.40$. A force $F$ pulls to the right and upwards, with $\cos\alpha=0.80$ and $\sin\alpha=0.60$. At rest the required friction is $F\cos\alpha$, while the normal force is $60\,\mathrm N-F\sin\alpha$. Pulling harder increases the demand on friction and reduces the amount available.

At the threshold, set $F\cos\alpha=\mu_s(60\,\mathrm N-F\sin\alpha)$. This gives $F=\dfrac{24}{0.80+0.40\cdot0.60}\,\mathrm N\simeq23.1\,\mathrm N$. The normal force is still positive at that value. With a horizontal pull of the same magnitude, the normal force would still equal the weight and the static limit would be $24\,\mathrm N$. Before substituting $f_d=\mu_dN$, establish whether the crate is already sliding or whether the demand exceeds the static limit.
:::

::grafico{f="0.8*x;24-0.24*x" punti="23.076923,18.461538,pieno,A" etichette="26.7,27,required;28.5,13.5,available" xmin=0 xmax=41 ymin=0 ymax=33 nomi="F (N),f (N)" titolo="At A, friction needed to keep the crate at rest reaches the available limit."}

:::osservazione{#attriti-piu-contatti titolo="Sharing load between different contacts"}
If two runners sit on different materials, use the coefficient for each normal force. With $N_A=30\,\mathrm N$, $N_B=50\,\mathrm N$, $\mu_{s,A}=0.30$ and $\mu_{s,B}=0.50$, the static limits are $9\,\mathrm N$ and $25\,\mathrm N$. Their sum, $34\,\mathrm N$, is an upper bound on total friction in the direction in which the sled is being pulled.

For an extended sled, this check concerns translation alone. Friction at different sides can produce torques, and equilibrium may require a particular distribution. Before treating the total maximum as attainable, check that the torques can cancel too.
:::

## Inclined plane

:::teorema{#piano-inclinato titolo="Resolving weight into components"}
Let $\theta$ be the angle of the plane to horizontal. Choose one axis down the slope and another normal to the plane, pointing outwards. Weight has component $mg\sin\theta$ down the plane. Its normal component points into the plane with magnitude $mg\cos\theta$. The angle $\theta$ is also the angle between weight and the inward normal, because both directions are right-angle rotations of the horizontal and the line along the slope.

If no other normal forces act and the body stays on the slope, $N=mg\cos\theta$. Without friction, acceleration down the slope is $g\sin\theta$. When the body already slides down against kinetic friction, $ma=mg\sin\theta-\mu_dmg\cos\theta$ gives
$$
a=g(\sin\theta-\mu_d\cos\theta).
$$
If it instead slides upslope, friction points down the slope and adds to the component of weight.

For a start from rest, the static criterion is $mg\sin\theta\leq\mu_smg\cos\theta$. For $0\leq\theta<90^\circ$ this is $\tan\theta\leq\mu_s$. Check it before using the kinetic equation. If the kinetic result is negative for a body already sliding down, its downslope speed decreases. It does not automatically reverse after stopping: the static balance must be checked again.
:::

:::esempio{#distacco-piano titolo="Weight projection and normal reaction are different results"}
A sled weighing $60\,\mathrm N$ slides in contact with a $60^\circ$ ramp. An extra force $F$ is perpendicular to the surface and points outwards. Weight has a normal component of magnitude $60\cos60^\circ=30\,\mathrm N$ pointing into the ramp. While the constraint holds and perpendicular acceleration is zero, the normal force is $N=30\,\mathrm N-F$.

For $F=18\,\mathrm N$ the ramp still exerts $12\,\mathrm N$. The threshold for release is $F=30\,\mathrm N$, when the normal force vanishes. A larger $F$ would require the contact to pull inwards, so contact no longer holds. While contact remains, the extra force has no projection along the ramp. It can still affect the tangential force through friction if the surface is rough.
:::

::grafico{assi=0 uguale=1 linee="-1.0,-2.14705 1.49,2.16576" vettori="0,0,0,-2,P;0,0,-0.519615,0.3;0,0,-0.34641,0.2" segmenti="0,-2,-0.866025,-1.5;0,0,-0.866025,-1.5" punti="0,0,pieno" etichette="-.65,.39,F;-.30,.38,N" xmin=-1.76 xmax=1.72 ymin=-2.37 ymax=2.46 titolo="Along the normal, F and N together balance the inward projection of weight."}

## Equilibrium of a particle

:::teorema{#equilibrio titolo="Zero resultant"}
For a particle, translational equilibrium means $\sum F_x=0$ and $\sum F_y=0$. These conditions imply zero acceleration. Static equilibrium additionally requires initial rest. If the particle represents an ideal knot in several strings, each string pulls along its own outgoing direction.

A weight $P$ is supported by two symmetric strings at angle $\theta$ above horizontal. By symmetry the horizontal components cancel. From $2T\sin\theta=P$, we obtain $T=P/(2\sin\theta)$. At $\theta=30^\circ$, each tension equals $P$. As the strings become nearly horizontal the sine decreases, so much larger tensions provide the same vertical support.

With unequal angles, solve both equations. For $\theta_L=30^\circ$ and $\theta_R=60^\circ$, these are $T_L\cos30^\circ=T_R\cos60^\circ$ and $T_L\sin30^\circ+T_R\sin60^\circ=P$. The first gives $T_R=\sqrt3\,T_L$. Substitution into the second yields $T_L=P/2$ and $T_R=\sqrt3 P/2$. The more nearly vertical string holds the greater tension in this example.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-0.8660,0.5,T_L;0,0,0.8660,1.5,T_R;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.2 ymax=1.9 titolo="Horizontal projections have equal magnitudes even though the tensions differ"}

:::esempio{#portata-funi titolo="Which string reaches its limit first?"}
For the junction with inclinations of $30^\circ$ on the left and $60^\circ$ on the right, suppose the maximum allowable tensions are $32\,\mathrm N$ and $36\,\mathrm N$. Force balance gives $T_L=P/2$ and $T_R=\sqrt3 P/2$. The first string therefore permits $P\leq64\,\mathrm N$, while the second permits $P\leq72/\sqrt3\,\mathrm N\simeq41.6\,\mathrm N$. For equilibrium with both strings within their limits, the weight must satisfy the smaller of these two bounds. Here the right string determines the allowed weight even though its tensile limit is greater.
:::

## Torque and equilibrium of extended bodies

:::definizione{#momento-equilibrio titolo="Moment arm of a force"}
The **moment arm** $b$ is the perpendicular distance from the pivot to the force's line of action. In the plane, torque magnitude is $M=bF=rF|\sin\theta|$, where $r$ is the distance from pivot to the point of application and $\theta$ is the angle between position and force. Torque is measured in $\mathrm{N\cdot m}$. Anticlockwise rotation is usually taken as positive.

Two equal forces can have different torques about one pivot because their lines of action matter. If the line passes through the pivot, the moment arm is zero. A $20\,\mathrm N$ force applied $0.40\,\mathrm m$ from the pivot at an angle of $30^\circ$ has moment arm $0.20\,\mathrm m$ and torque magnitude $4\,\mathrm{N\cdot m}$. It would be twice as large with the force perpendicular to the radius.

For a free beam in a plane, static equilibrium requires both resultant force and total torque to vanish. A pair of equal opposing forces along distinct parallel lines gives zero resultant, but their torques add. For a pivoted lever, calculate torques about the pivot because its reaction has zero moment arm. Then use the force balance to calculate that reaction. Ignoring the lever's own weight is appropriate only when it is negligible or when its torque about the pivot is zero, depending on the quantity sought.
:::

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,0,1,-1.73205;1,-1.73205,4,0" vettori="4,0,5.73205,1,F" punti="0,0,pieno,O;1,-1.73205,pieno,H" xmin=-0.4 xmax=6.2 ymin=-2.1 ymax=1.5 titolo="OH is perpendicular to the line of action, so it is the moment arm"}

:::esempio{#momento-coordinate titolo="Finding torque from signed components"}
With the pivot at the origin, axes pointing right and up, and anticlockwise positive, a force at $(x;y)$ has torque $M_O=xF_y-yF_x$. The first product is the contribution from the vertical component, whose horizontal lever arm depends on $x$. The second comes from the horizontal component. A rightward force above the pivot turns clockwise, which gives the minus sign.

For $\vec r=(0.20;0.10)\,\mathrm m$ and $\vec F=(-4;6)\,\mathrm N$ both contributions are positive. The torque is $(0.20\cdot6-0.10(-4))\,\mathrm{N\cdot m}=+1.6\,\mathrm{N\cdot m}$. Reversing one force component changes the sign of its contribution.
:::

:::esempio{#coppia-forze titolo="A couple keeps the same torque about a different point"}
A downward force of $10\,\mathrm N$ acts at coordinate $x=0$, and an equal upward force acts at $x=0.60\,\mathrm m$. The resultant is zero. About the first point, only the force on the right contributes, giving a torque of $+6\,\mathrm{N\cdot m}$. About the midpoint, each force has a lever arm of $0.30\,\mathrm m$ and contributes $+3\,\mathrm{N\cdot m}$. The sum stays the same.

Changing the reference point subtracts the same displacement from both positions. The change in total torque is proportional to the resultant, so it vanishes when the resultant is zero. With only one of the two forces, changing the reference point can change the torque.
:::

::grafico{assi=0 uguale=1 linee="-0.32,0 2.02,0" vettori="0,0,0,-0.9,F;1.8,0,1.8,0.9,F" punti="0,0,pieno;0.9,0,pieno;1.8,0,pieno" etichette="-.14,.24,O;.81,.27,C;1.68,-.27,B" xmin=-.55 xmax=2.34 ymin=-1.14 ymax=1.16 titolo="The forces point in opposite directions. About C, both produce anticlockwise rotation."}

:::esempio{#appoggi-limite titolo="Check that both supports can supply their reactions"}
A uniform plank of length $3\,\mathrm m$ and weight $60\,\mathrm N$ is supported at $x=0$ and $x=2\,\mathrm m$. An extra load $Q$ hangs at $x=3\,\mathrm m$. Taking moments about the first support gives $2N_B=60\cdot1.5+3Q$ when distances and forces are expressed in SI units. Vertical force balance gives $N_A=60\,\mathrm N+Q-N_B$.

| End load (N) | Reaction A (N) | Reaction B (N) |
| ---: | ---: | ---: |
| 0 | 15 | 45 |
| 20 | 5 | 75 |
| 30 | 0 | 90 |

The extra load reduces the force at support A even as the total weight increases. For $Q>30\,\mathrm N$ the equations would give $N_A<0$. That would require a downward force a simple support cannot supply. The contact at A opens and the plank can rotate about B.
:::

::grafico{assi=0 uguale=1 linee="-0.16,0 3.26,0" poligoni="-0.18,-.32 0,0 .18,-.32;1.82,-.32 2,0 2.18,-.32" vettori="0,0,0,.32,N_A;2,0,2,1.92,N_B;1.5,0,1.5,-1.92,P;3,0,3,-.32,Q" punti="0,0,pieno;1.5,0,pieno;2,0,pieno;3,0,pieno" etichette="-.13,-.53,A;1.88,-.53,B" xmin=-.58 xmax=3.56 ymin=-2.26 ymax=2.24 titolo="For Q = 10 N, A exerts 10 N and B exerts 60 N. The plank's weight acts at its centre."}
