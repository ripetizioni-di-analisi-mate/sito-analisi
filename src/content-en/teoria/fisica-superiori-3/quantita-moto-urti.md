---
titolo: Momentum and collisions
sommario: Impulse, centre of mass and conservation laws in elastic and inelastic collisions.
---

## Momentum

:::definizione{#quantita-moto titolo="Momentum vector"}
In an inertial frame a body of mass $m$ and velocity $\vec v$ has **momentum** $\vec p=m\vec v$. Mass is positive, so $\vec p$ points in the same direction as $\vec v$. Its unit is $\mathrm{kg\cdot m/s}$. In one dimension choose a positive axis and use the signed component $p_x=mv_x$. Using the same axis for every body allows opposite components to subtract from one another when calculating the total.

The momentum of a system is the vector sum $\vec P=\sum_jm_j\vec v_j$. Two bodies can move while their total is $\vec P=0$, provided their momenta are opposite. Each kinetic energy is then positive, so their sum stays positive. The quantities contain different information: momentum records the direction as well as the size of motion, while kinetic energy sums non-negative scalar contributions.

Momentum depends on the frame because it depends on measured velocity. Use a single frame, usually the laboratory, when comparing all the bodies. Even when inertial observers assign different values to $\vec P$, they measure the same change in $\vec P$ for a closed system between two instants.
:::

:::esempio{titolo="Spheres along perpendicular axes"}
A $2\,\mathrm{kg}$ sphere travels east at $3\,\mathrm{m/s}$ and a $1\,\mathrm{kg}$ sphere travels north at $8\,\mathrm{m/s}$. The total momentum components are $(6,8)\,\mathrm{kg\cdot m/s}$. Since the axes are perpendicular, the total magnitude is $\sqrt{6^2+8^2}\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}$. Adding the magnitudes would give $14\,\mathrm{kg\cdot m/s}$, which describes two contributions that point in the same direction.

::grafico{uguale=1 vettori="0,0,6,0,p_1;6,0,6,8,p_2;0,0,6,8,P" xmin=-2 xmax=9 ymin=-2 ymax=10 nomi="pₓ (kg·m/s),pᵧ (kg·m/s)" titolo="Add the northward vector to the tip of the eastward vector"}
:::

:::esempio{titolo="Impulse when only the direction changes"}
A $0.50\,\mathrm{kg}$ ball enters a bend at $6\,\mathrm{m/s}$ heading east and leaves at the same speed heading north. Taking east and north as positive directions gives
$$
\vec p_i=(3,0)\,\mathrm{kg\cdot m/s},\qquad
\vec p_f=(0,3)\,\mathrm{kg\cdot m/s}.
$$
The change is $(-3,3)\,\mathrm{kg\cdot m/s}$ and points north-west. Its magnitude is $3\sqrt 2\,\mathrm{kg\cdot m/s}$. Kinetic energy is $9\,\mathrm J$ at both endpoints. This is why finding the change in momentum requires subtracting vector components. A comparison of magnitudes alone misses the change in direction.

::grafico{vettori="0,0,3,0,p_i;0,0,0,3,p_f;3,0,0,3,J" uguale=1 xmin=-1 xmax=4 ymin=-1 ymax=4 nomi="pₓ,pᵧ" titolo="Impulse points from the tip of the initial momentum vector to the tip of the final one. Units in kg·m/s."}
:::

## Impulse

:::teorema{#impulso titolo="Impulse and change in momentum"}
For a body of constant mass, the **impulse** of the net force between two instants equals the change in momentum. With a constant net force, Newton's law gives
$$
\vec J=\vec F_{\mathrm{tot}}\Delta t
      =m\vec a\,\Delta t=m(\vec v_f-\vec v_i).
$$
For a varying force, sum the contributions of short time intervals. In one dimension this gives the signed area under the force graph $F_x(t)$. Regions above and below the time axis contribute opposite signs. The unit $\mathrm{N\cdot s}$ equals $\mathrm{kg\cdot m/s}$. An impulse inferred from $\Delta\vec p$ includes all forces, so more information is required to isolate the contribution of an individual force.

The vector average force is $\vec F_m=\dfrac{\Delta\vec p}{\Delta t}$. For a fixed change in momentum, taking longer reduces the magnitude of the average net force. This explains the use of shock absorbers and deformable surfaces. The average depends on the endpoints and duration, while the peak depends on how the force varies over time.
:::

:::esempio{titolo="Rebound and stop"}
Take the incoming direction as positive. A $0.20\,\mathrm{kg}$ ball arrives at $5\,\mathrm{m/s}$ and rebounds at $3\,\mathrm{m/s}$ in the opposite direction. The final component is $v_f=-3\,\mathrm{m/s}$. Thus $J_x=0.20\cdot(-3-5)\,\mathrm{N\cdot s}=-1.6\,\mathrm{N\cdot s}$. If the ball had merely stopped, the final component would be zero and the impulse would be $-1\,\mathrm{N\cdot s}$. A rebound requires a larger change because it pushes the velocity beyond zero into the negative direction.

::grafico{assi=0 vettori="0,1,5,1,v_i;0,0,-3,0,v_f" xmin=-4 xmax=6 ymin=-.8 ymax=2 titolo="Right is positive. The lengths depict the two speeds"}
:::

:::esempio{titolo="Separating contact impulse from the impulse of weight"}
In vertical motion a $0.20\,\mathrm{kg}$ ball reaches the floor at $v_i=-4\,\mathrm{m/s}$ and leaves at $v_f=+3\,\mathrm{m/s}$. The positive axis points upwards. Contact lasts $0.020\,\mathrm s$, air resistance is negligible and $g=10\,\mathrm{m/s^2}$. The change in momentum is $1.4\,\mathrm{N\cdot s}$. To find the impulse from the floor, subtract the contribution of weight from the total impulse.
$$
J_{\mathrm{pav}}=\Delta p-(-mg\,\Delta t)
                 =1.4+0.04=1.44\,\mathrm{N\cdot s}.
$$
Weight always acts downwards. The floor must therefore provide a positive impulse slightly greater than the measured change.
:::

:::esempio{titolo="Impulse from four sensor readings"}
A sensor records the component of the net force along a track. Approximate the force between readings by the straight segment joining them. The full interval lasts $0.20\,\mathrm s$.

| $t$ (s) | $F_x$ (N) | Following interval |
| ---: | ---: | :--- |
| 0 | 0 | rising |
| 0.05 | 24 | falling to zero |
| 0.15 | 0 | negative correction |
| 0.20 | −8 | end of measurement |

::grafico{linee="0,0 50,24 150,0 200,-8" area=".48*x;0;0;50|36-.24*x;0;50;150|0;24-.16*x;150;200" punti="50,24,pieno;150,0,pieno;200,-8,pieno" xmin=0 xmax=250 ymin=-12 ymax=28 nomi="t (ms),Fₓ (N)" titolo="The graph uses milliseconds. The negative segment begins at 150 ms."}

The first two areas are $0.60$ and $1.20\,\mathrm{N\cdot s}$, while the third contributes $-0.20\,\mathrm{N\cdot s}$. The total is $1.60\,\mathrm{N\cdot s}$. The average force in this model is $8\,\mathrm N$, below the largest reading of $24\,\mathrm N$. A peak between readings could change the estimate. Shorter sampling intervals would help detect it.
:::

## Isolated systems

:::teorema{#conservazione-moto titolo="Total momentum balance"}
For a closed system choose which bodies to include and distinguish internal from external forces. The internal forces between bodies come in equal and opposite pairs. Their impulses cancel when the individual equations are added, so
$$
\vec P_f-\vec P_i=\vec J_{\mathrm{est}} .
$$
If the total external impulse is zero, the total momentum is conserved. The same principle can be applied to a single component. On a horizontal laboratory track, the impulses from gravity and the normal force are generally vertical. Along the track, neglecting friction conserves momentum even though vertical forces act on the carts.

During very short collisions it is often possible to neglect external impulse compared with the internal exchange. Check force multiplied by time, rather than force magnitude alone. During contact the individual momenta change. Conservation applies to their sum once every interacting body is included and the components with negligible external impulse are identified.
:::

:::esempio{titolo="Testing the isolation assumption"}
During a collision lasting $0.010\,\mathrm s$, one cart receives an impulse of magnitude $3\,\mathrm{N\cdot s}$ from another. If the total external resistance is at most $2\,\mathrm N$, its impulse on the system is at most $0.020\,\mathrm{N\cdot s}$. Setting the total momenta equal therefore gives an error below one per cent on the scale of the exchange between carts. If the total is near zero, the error relative to that total can be much larger. For the same precision in a collision of a different duration with the same $3\,\mathrm{N\cdot s}$ internal impulse, the drag impulse must stay within $0.03\,\mathrm{N\cdot s}$. With the $2\,\mathrm N$ force bound, the contact may last up to $15\,\mathrm{ms}$.

::grafico{linee="0,0 25,50;0,30 25,30" punti="10,20,pieno,A;15,30,pieno,B" xmin=0 xmax=30 ymin=0 ymax=55 nomi="t (ms),J (mN·s)" titolo="The rising line is the external bound. It reaches the 30 mN·s threshold, equal to 0.03 N·s, at 15 ms."}
:::

:::esempio{titolo="Putting a wall inside the system boundary"}
A $2\,\mathrm{kg}$ cart approaches a wall at $3\,\mathrm{m/s}$ and rebounds at $2\,\mathrm{m/s}$ in the opposite direction. If the system contains only the cart, contact with the wall is external. Taking positive towards the wall gives $\Delta p=2(-2-3)\,\mathrm{kg\cdot m/s}=-10\,\mathrm{N\cdot s}$. When the system includes the wall and the Earth to which it is fixed, the same contact impulse becomes internal. The wall–Earth system receives $+10\,\mathrm{N\cdot s}$ in the opposite direction. Its enormous mass makes its speed change tiny, while its momentum change offsets the cart's.

::grafico{assi=0 vettori="0,1,-3,1,J₁;0,0,3,0,J₂" linee="0,-.5 0,1.5" xmin=-5 xmax=5 ymin=-.8 ymax=1.8 titolo="Cart–wall interaction. The two contact impulses have equal magnitudes and opposite directions."}
:::

## Centre of mass

:::definizione{#centro-massa titolo="Coordinates and mass-weighted motion"}
For a system of total mass $M=\sum_jm_j$, the **centre of mass** is at $\vec r_{CM}=\dfrac{\sum_jm_j\vec r_j}{M}$. The masses serve as the weights of the average. In one dimension the coordinate lies between the minimum and maximum coordinates. With two bodies it is closer to the more massive body.

Taking changes in centre-of-mass position over time gives $\vec v_{CM}=\dfrac{\sum_jm_j\vec v_j}{M}=\dfrac{\vec P}{M}$. Hence, if total mass is constant and external impulse is zero, the centre-of-mass velocity is conserved. Even when individual velocities change during a collision, the centre of mass continues with the same velocity. In its frame the total momentum is zero, a useful fact when analysing elastic collisions.
:::

:::esempio{titolo="A mass-weighted average"}
A $2\,\mathrm{kg}$ mass is at $x=0$ and a $6\,\mathrm{kg}$ mass is at $x=4\,\mathrm m$. The centre-of-mass coordinate is $(2\cdot0+6\cdot4)/8\,\mathrm m=3\,\mathrm m$, one metre from the larger mass. If the origin is moved three metres to the right, the coordinates become $-3\,\mathrm m$ and $1\,\mathrm m$. The centre of mass now has coordinate zero. The physical point stays the same: its coordinates change.

::grafico{assi=0 linee="-0.4,0 4.58,0;0,-.14 0,.14;3,-.14 3,.14;4,-.14 4,.14" vettori="4.58,0,4.99,0" punti="0,0,pieno;3,0,pieno;4,0,pieno" etichette="-.08,.42,m₁;2.86,.42,CM;3.91,.42,m₂;-.03,-.38,0;2.95,-.38,3;3.95,-.38,4;4.5,.42,x (m)" xmin=-.65 xmax=5.25 ymin=-.65 ymax=.77 titolo="The centre of mass is closer to the larger mass"}
:::

:::esempio{titolo="Internal displacement on a free platform"}
A $60\,\mathrm{kg}$ person and a $40\,\mathrm{kg}$ platform are initially at rest. The floor is frictionless, and the person walks $2\,\mathrm m$ relative to the platform. Let $d$ be the signed displacement of the platform relative to the floor. The person's displacement relative to the floor is $d+2\,\mathrm m$, with $d$ expressed in metres. With no external horizontal force, the centre of mass remains in the same position.
$$
60(d+2)+40d=0,\qquad d=-1.2\,\mathrm m.
$$
The platform moves backwards and the person's displacement relative to the floor is $+0.8\,\mathrm m$. The two displacements, weighted by their masses, exactly offset each other.

::grafico{assi=0 linee="-1.55,-.33 1.34,-.33;-1.2,-.42 -1.2,-.24;0,-.42 0,-.24;.8,-.42 .8,-.24;-1.2,0 0,0;0,.9 .8,.9" vettori="0,.25,-1.2,.25,d;0,1.15,.8,1.15,Δx;1.34,-.33,1.6,-.33" etichette="-1.35,-.65,−1.2;-.03,-.65,0;.71,-.65,0.8;1.16,-.66,x (m)" xmin=-1.75 xmax=1.85 ymin=-.92 ymax=1.67 titolo="The platform and the person move −1.2 m and +0.8 m, respectively, relative to the floor."}
:::

:::osservazione{titolo="Using the centre of mass of an extended body"}
To combine a uniform rod with a point load, collect the rod's mass at its mean coordinate, which is its geometric midpoint. This substitution preserves the numerator of the weighted average. If the rod is $4\,\mathrm m$ long and runs from zero to four metres, use its mass at $x=2\,\mathrm m$. A rod that is denser at one end requires finding or measuring the position of its own centre of mass first.
:::

## Perfectly inelastic collision and recoil

:::teorema{#anelastico titolo="Bodies that stick or separate"}
If two bodies stick together during a collision, they share the final velocity $\vec v_f$. The collision is **perfectly inelastic**. Neglecting external impulse during the collision,
$$
\vec v_f=\frac{m_1\vec v_{1i}+m_2\vec v_{2i}}{m_1+m_2}.
$$
The final velocity equals the initial centre-of-mass velocity. Initial kinetic energy also includes motion relative to the centre of mass. That relative part disappears when the bodies stick, and the difference becomes deformation, heat or other energy transfers. Conserving kinetic energy along with momentum would only be appropriate if the initial relative velocity were already zero and there were no collision in the model.

When two initially stationary bodies separate with zero external impulse, the total must stay zero. Hence $m_1\vec v_1=-m_2\vec v_2$. The lighter body acquires the greater speed. Final kinetic energy can be positive because internal energy changes form, for instance when a compressed spring is released between the bodies.
:::

:::esempio{titolo="Sticking with opposing motion"}
A $3\,\mathrm{kg}$ cart moves to the right at $4\,\mathrm{m/s}$ and a $2\,\mathrm{kg}$ cart moves left at $1\,\mathrm{m/s}$. The total before contact is $3\cdot4-2\cdot1=10$ in $\mathrm{kg\cdot m/s}$. After sticking, five kilograms with that momentum move right at $2\,\mathrm{m/s}$. The initial energy is $24\,\mathrm J+1\,\mathrm J=25\,\mathrm J$ and the final energy is $10\,\mathrm J$. Thus $15\,\mathrm J$ of kinetic energy is lost, while the momentum vector satisfies the balance.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-1,1,u₂;0,0,2,0,v" xmin=-2 xmax=5 ymin=-.7 ymax=2.1 titolo="The carts approach in opposite directions. The initial velocities appear above the common final velocity."}
:::

:::osservazione{titolo="How much kinetic energy can disappear when bodies stick"}
Let $u_1$ and $u_2$ be the signed velocities before the collision and $V$ the velocity of the centre of mass. Rewriting each velocity as $u_j=V+(u_j-V)$ and expanding the squares gives
$$
K_i=\frac{1}{2}(m_1+m_2)V^2+
    \frac{1}{2}m_1(u_1-V)^2+\frac{1}{2}m_2(u_2-V)^2.
$$
The cross terms cancel because $m_1(u_1-V)+m_2(u_2-V)=0$. If the system is isolated, $V$ stays constant. The two squared terms for the relative motion vanish when the masses stick. The remaining kinetic energy is that of their common motion. For example, if both bodies already had the same velocity, both relative terms were zero even before contact.

For two bodies with $M=m_1+m_2$, the velocities relative to the centre of mass are $m_2(u_1-u_2)/M$ and $-m_1(u_1-u_2)/M$. The loss when they stick is therefore $\Delta K_{\mathrm{lost}}=\tfrac12\tfrac{m_1m_2}{M}(u_1-u_2)^2$. For the two carts in the example, the coefficient is $0.60\,\mathrm{kg}$ and the approach speed is $5\,\mathrm{m/s}$.

::grafico{f="0.6*x^2" legenda=0 xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno;5,15,pieno,A" nomi="Δv (m/s),ΔK (J)" titolo="With the same masses and different relative speeds, the 15 J from the example lies at point A."}
:::

## Elastic collisions

:::teorema{#elastico titolo="Two conservation laws and relative velocity"}
An isolated elastic collision conserves both total momentum and total kinetic energy. In one dimension write $u_1,u_2$ for the initial velocities and $v_1,v_2$ for the final velocities. Then
$$
m_1(u_1-v_1)=m_2(v_2-u_2),\qquad
m_1(u_1^2-v_1^2)=m_2(v_2^2-u_2^2).
$$
For an actual collision with momentum exchange, divide the second equation by the first. Factoring the differences of squares gives $u_1+v_1=v_2+u_2$, or $v_2-v_1=u_1-u_2$. Relative velocity reverses. When the second body is initially at rest, the solution is
$$
v_1=\frac{m_1-m_2}{m_1+m_2}u_1,\qquad
v_2=\frac{2m_1}{m_1+m_2}u_1.
$$
When $m_1=m_2$ the velocities exchange. When $m_1<m_2$ the first body rebounds because its coefficient is negative. In higher dimensions the momentum components and the total kinetic energy are conserved, but additional geometric data may be needed to determine the exit directions.
:::

:::esempio{titolo="Rebound of the lighter mass"}
With $m_1=1\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$, $u_1=4\,\mathrm{m/s}$ and $u_2=0$, the results are $v_1=-2\,\mathrm{m/s}$ and $v_2=2\,\mathrm{m/s}$. Final momentum is $(-2+6)\,\mathrm{kg\cdot m/s}=4\,\mathrm{kg\cdot m/s}$. Final kinetic energy is $2\,\mathrm J+6\,\mathrm J=8\,\mathrm J$, equal to the initial energy. Both checks together verify the elastic outcome.
:::

:::esempio{titolo="An elastic collision in the centre-of-mass frame"}
On a line, a $1\,\mathrm{kg}$ mass travelling at $6\,\mathrm{m/s}$ collides elastically with a stationary $2\,\mathrm{kg}$ mass. The centre of mass moves at $2\,\mathrm{m/s}$. In that frame the initial velocities are $+4$ and $-2\,\mathrm{m/s}$. In a one-dimensional elastic collision with nonzero momentum exchange, both bodies reverse their velocities in this frame. The resulting velocities are $-4$ and $+2\,\mathrm{m/s}$. Adding $2\,\mathrm{m/s}$ gives laboratory velocities of $-2$ and $+4\,\mathrm{m/s}$. Before and after the collision, momentum is $6\,\mathrm{kg\cdot m/s}$ and kinetic energy is $18\,\mathrm J$.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-2,1,u₂;0,0,-4,0,v₁;0,-.5,2,-.5,v₂" linee="0,-1 0,2" xmin=-5.2 xmax=5.2 ymin=-1.2 ymax=2.2 titolo="Above, approaching velocities in the centre-of-mass frame. Below, the reversal after the collision."}
:::

:::osservazione{titolo="Outgoing directions for equal masses in a plane"}
Two equal-mass pucks collide elastically on a plane with negligible external impulse. One starts at rest. Write $\vec u$ for the sole initial velocity and $\vec v_1,\vec v_2$ for the final velocities. The balance equations reduce to $\vec u=\vec v_1+\vec v_2$ and $u^2=v_1^2+v_2^2$. Expand the squared magnitude in the first equation and compare with the second. The remaining term is $2\vec v_1\cdot\vec v_2=0$. If both pucks move after contact, their outgoing directions are perpendicular. If one stops, the dot product vanishes without a defined angle.
:::
