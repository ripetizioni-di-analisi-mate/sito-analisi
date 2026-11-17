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

## Elastic force

:::teorema{#hooke titolo="Hooke's law"}
For an ideal spring, $x$ is the signed change in length from its natural state. If extension is positive, the spring's force component on the moving end is $F_e=-kx$ with $k>0$. This sign means that the force tends to return the end to its natural position. The unit of $k$ is $\mathrm{N/m}$, because $kx$ is a force.

The law is a linear model valid within the device's elastic range. Test it by measuring the external force that keeps the spring at rest at several extensions. That force balances $F_e$, so a graph of applied force against extension has slope $+k$. A graph of the spring's force against $x$ has the opposite slope, $-k$.

For an ideal vertical spring, a stationary hanging mass produces extension $x=mg/k$. With $m=0.40\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ and $k=100\,\mathrm{N/m}$, the restoring force must be $4\,\mathrm N$, so $x=0.040\,\mathrm m$. Add $0.20\,\mathrm{kg}$ and the extension becomes $0.060\,\mathrm m$. The two-centimetre difference depends only on the added weight while the spring is within its linear range.
:::

::grafico{f="100*x" punti="0.04,4,pieno;0.06,6,pieno" xmin=0 xmax=0.08 ymin=0 ymax=8.5 nomi="x,F" titolo="The applied-force graph gives k equal to 100 N/m"}

## Static and kinetic friction

:::teorema{#attrito titolo="Model of sliding and static friction"}
**Static friction** opposes the sliding that other forces would tend to cause. Its magnitude can vary from zero to $\mu_s N$. For a stationary body, first find the friction needed for equilibrium. If this magnitude is at most $\mu_sN$, contact can maintain rest. At the limit we have $f_s=\mu_sN$.

With normal force $50\,\mathrm N$ and $\mu_s=0.40$, the limit is $20\,\mathrm N$. A horizontal pull of $12\,\mathrm N$ is balanced by twelve newtons of static friction in the opposite direction. Assigning twenty newtons of friction in every case would predict an acceleration opposite the pull, contrary to initial rest.

When the body slides, the kinetic friction model gives magnitude $f_d=\mu_d N$ and a direction opposite to relative sliding. If the body slows to rest, check the static limit again before continuing the calculation. On a moving belt, friction can point along the body's velocity relative to the ground if the body slides the other way relative to the belt.
:::

::grafico{segmenti="0,0,20,20;20,15,27,15" punti="12,12,pieno;20,20,pieno" xmin=0 xmax=27 ymin=0 ymax=22 nomi="F,f" titolo="Static friction matches the pull up to 20 N. While sliding it is 15 N here"}

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

## Equilibrium of a particle

:::teorema{#equilibrio titolo="Zero resultant"}
For a particle, translational equilibrium means $\sum F_x=0$ and $\sum F_y=0$. These conditions imply zero acceleration. Static equilibrium additionally requires initial rest. If the particle represents an ideal knot in several strings, each string pulls along its own outgoing direction.

A weight $P$ is supported by two symmetric strings at angle $\theta$ above horizontal. By symmetry the horizontal components cancel. From $2T\sin\theta=P$, we obtain $T=P/(2\sin\theta)$. At $\theta=30^\circ$, each tension equals $P$. As the strings become nearly horizontal the sine decreases, so much larger tensions provide the same vertical support.

With unequal angles, solve both equations. For $\theta_L=30^\circ$ and $\theta_R=60^\circ$, these are $T_L\cos30^\circ=T_R\cos60^\circ$ and $T_L\sin30^\circ+T_R\sin60^\circ=P$. The first gives $T_R=\sqrt3\,T_L$. Substitution into the second yields $T_L=P/2$ and $T_R=\sqrt3 P/2$. The more nearly vertical string holds the greater tension in this example.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-0.8660,0.5,T_L;0,0,0.8660,1.5,T_R;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.2 ymax=1.9 titolo="Horizontal projections have equal magnitudes even though the tensions differ"}

## Torque and equilibrium of extended bodies

:::definizione{#momento-equilibrio titolo="Moment arm of a force"}
The **moment arm** $b$ is the perpendicular distance from the pivot to the force's line of action. In the plane, torque magnitude is $M=bF=rF|\sin\theta|$, where $r$ is the distance from pivot to the point of application and $\theta$ is the angle between position and force. Torque is measured in $\mathrm{N\cdot m}$. Anticlockwise rotation is usually taken as positive.

Two equal forces can have different torques about one pivot because their lines of action matter. If the line passes through the pivot, the moment arm is zero. A $20\,\mathrm N$ force applied $0.40\,\mathrm m$ from the pivot at an angle of $30^\circ$ has moment arm $0.20\,\mathrm m$ and torque magnitude $4\,\mathrm{N\cdot m}$. It would be twice as large with the force perpendicular to the radius.

For a free beam in a plane, static equilibrium requires both resultant force and total torque to vanish. A pair of equal opposing forces along distinct parallel lines gives zero resultant, but their torques add. For a pivoted lever, calculate torques about the pivot because its reaction has zero moment arm. Then use the force balance to calculate that reaction. Ignoring the lever's own weight is appropriate only when it is negligible or when its torque about the pivot is zero, depending on the quantity sought.
:::

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,0,1,-1.73205;1,-1.73205,4,0" vettori="4,0,5.73205,1,F" punti="0,0,pieno,O;1,-1.73205,pieno,H" xmin=-0.4 xmax=6.2 ymin=-2.1 ymax=1.5 titolo="OH is perpendicular to the line of action, so it is the moment arm"}
