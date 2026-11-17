---
titolo: Momentum and collisions
sommario: Impulse, centre of mass and conservation laws in elastic and inelastic collisions.
---

## Momentum

:::definizione{#quantita-moto titolo="Momentum vector"}
In an inertial frame a body of mass $m$ and velocity $\vec v$ has **momentum** $\vec p=m\vec v$. Mass is positive, so $\vec p$ points in the same direction as $\vec v$. Its unit is $\mathrm{kg\cdot m/s}$. In one dimension choose a positive axis and use the signed component $p_x=mv_x$. Using the same axis for every body allows opposite components to subtract from one another when calculating the total.

The momentum of a system is the vector sum $\vec P=\sum_jm_j\vec v_j$. Two bodies can move while their total $\vec P$ is zero, provided their momenta are opposite. Each kinetic energy is then positive, so their sum stays positive. The quantities contain different information: momentum records the direction as well as the size of motion, while kinetic energy sums non-negative scalar contributions.

Momentum depends on the frame because it depends on measured velocity. Use a single frame, usually the laboratory, when comparing all the bodies. Even when inertial observers assign different values to $\vec P$, they measure the same change in $\vec P$ for a closed system between two instants.
:::

:::esempio{titolo="Spheres along perpendicular axes"}
A $2\,\mathrm{kg}$ sphere travels east at $3\,\mathrm{m/s}$ and a $1\,\mathrm{kg}$ sphere travels north at $8\,\mathrm{m/s}$. The total momentum components are $(6,8)\,\mathrm{kg\cdot m/s}$. Since the axes are perpendicular, the total magnitude is $\sqrt{6^2+8^2}\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}$. Adding the magnitudes would give $14\,\mathrm{kg\cdot m/s}$, which describes two contributions that point in the same direction.

::grafico{uguale=1 vettori="0,0,6,0,p_1;6,0,6,8,p_2;0,0,6,8,P" xmin=-2 xmax=9 ymin=-2 ymax=10 nomi="p_x,p_y" titolo="Add the northward vector to the tip of the eastward vector"}
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
During a collision lasting $0.010\,\mathrm s$, one cart receives an impulse of magnitude $3\,\mathrm{N\cdot s}$ from another. If the total external resistance is at most $2\,\mathrm N$, its impulse on the system is at most $0.020\,\mathrm{N\cdot s}$. This bound is less than one percent of the internal impulse. At percent-level precision it is reasonable to treat the total momentum as conserved. Over a much longer interval the bound increases and must be checked again.
:::

## Centre of mass

:::definizione{#centro-massa titolo="Coordinates and mass-weighted motion"}
For a system of total mass $M=\sum_jm_j$, the **centre of mass** is at $\vec r_{CM}=\dfrac{\sum_jm_j\vec r_j}{M}$. The masses serve as the weights of the average. In one dimension the coordinate lies between the minimum and maximum coordinates. With two bodies it is closer to the more massive body.

Taking changes in centre-of-mass position over time gives $\vec v_{CM}=\dfrac{\sum_jm_j\vec v_j}{M}=\dfrac{\vec P}{M}$. Hence, if total mass is constant and external impulse is zero, the centre-of-mass velocity is conserved. Even when individual velocities change during a collision, the centre of mass continues with the same velocity. In its frame the total momentum is zero, a useful fact when analysing elastic collisions.
:::

:::esempio{titolo="A mass-weighted average"}
A $2\,\mathrm{kg}$ mass is at $x=0$ and a $6\,\mathrm{kg}$ mass is at $x=4\,\mathrm m$. The centre-of-mass coordinate is $(2\cdot0+6\cdot4)/8\,\mathrm m=3\,\mathrm m$, one metre from the larger mass. If the origin is moved three metres to the right, the coordinates become $-3\,\mathrm m$ and $1\,\mathrm m$. The centre of mass now has coordinate zero. The physical point stays the same: its coordinates change.

::grafico{linee="0,0 4,0" punti="0,0,pieno,m_1;3,0,pieno,CM;4,0,pieno,m_2" xmin=-1 xmax=5 ymin=-1 ymax=1 nomi="x (m)," titolo="The centre of mass is closer to the larger mass"}
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
