---
titolo: Linear momentum and collisions
sommario: How linear momentum and impulse restate Newton's second law, why the total momentum of an isolated system is constant, how one- and two-dimensional collisions are solved, and how the center of mass of a system moves.
---

## Linear momentum and impulse

:::definizione{#linear-momentum titolo="Linear momentum"}
The **linear momentum** of a particle of mass $m$ moving with velocity $\vec{v}$ is the vector
$$
\vec{p} = m\vec{v} ,
$$
measured in $\mathrm{kg\cdot m/s}$. Since $m > 0$, the momentum has the direction and the sense of the velocity, and its magnitude is $p = mv$.

The momentum of a system of particles is the vector sum of the momenta of its parts,
$$
\vec{P} = \sum_{i} m_i \vec{v}_i .
$$
Two bodies with the same velocity carry different momenta when their masses differ, and two bodies with the same kinetic energy carry different momenta as well, since $p = \sqrt{2mK}$. Momentum is therefore a measure of motion distinct from kinetic energy, and the following sections show that it obeys a conservation law of its own.
:::

::::teorema{#second-law-momentum titolo="Newton's second law in momentum form"}
Let $\vec{F}_{\text{net}}$ be the resultant of the forces acting on a particle. Then
$$
\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt} .
$$

:::dimostrazione
The mass of a particle is constant, hence the derivative of $\vec{p} = m\vec{v}$ is
$$
\frac{d\vec{p}}{dt} = m\,\frac{d\vec{v}}{dt} = m\vec{a} .
$$
By Newton's second law the right-hand side equals $\vec{F}_{\text{net}}$, therefore the two expressions coincide.
:::

The form $\vec{F}_{\text{net}} = m\vec{a}$ requires a constant mass. The form written above holds for any system of fixed composition, therefore it applies to a rocket taken together with the fuel it carries and expels, and the final section of this chapter treats that system in this way.
::::

:::richiamo{titolo="Derivative of a vector function"}
If $\vec{p}(t) = p_x(t)\,\hat{\imath} + p_y(t)\,\hat{\jmath} + p_z(t)\,\hat{k}$, then
$$
\frac{d\vec{p}}{dt} = \frac{dp_x}{dt}\,\hat{\imath} + \frac{dp_y}{dt}\,\hat{\jmath} + \frac{dp_z}{dt}\,\hat{k} ,
$$
so one vector derivative is three ordinary derivatives, one per component. The rules of differentiation are those established in the calculus course.
:::

:::definizione{#impulse titolo="Impulse of a force"}
The **impulse** of a force $\vec{F}$ acting between the instants $t_1$ and $t_2$ is the vector
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}\,dt ,
$$
measured in $\mathrm{N\cdot s}$, which is the same unit as $\mathrm{kg\cdot m/s}$. For a force constant in magnitude, direction and sense the integral reduces to the product
$$
\vec{J} = \vec{F}\,\Delta t ,
\qquad \Delta t = t_2 - t_1 .
$$
The impulse measures the whole effect of a force over an interval of time, whereas the force measures its effect at one instant. A force of $10\,\mathrm{N}$ applied for $3.0\,\mathrm{s}$ and a force of $30\,\mathrm{N}$ applied for $1.0\,\mathrm{s}$ have the same impulse $30\,\mathrm{N\cdot s}$.
:::

::::teorema{#impulse-momentum-theorem titolo="Impulse-momentum theorem"}
Let a particle be acted upon by a resultant force $\vec{F}_{\text{net}}$ between the instants $t_1$ and $t_2$, and let $\vec{p}_1$ and $\vec{p}_2$ be its momenta at those instants. Then
$$
\vec{J}_{\text{net}} = \vec{p}_2 - \vec{p}_1 = \Delta\vec{p} .
$$

:::dimostrazione
Newton's second law in momentum form gives $d\vec{p} = \vec{F}_{\text{net}}\,dt$. Integrating both sides between $t_1$ and $t_2$,
$$
\int_{t_1}^{t_2} \vec{F}_{\text{net}}\,dt = \int_{\vec{p}_1}^{\vec{p}_2} d\vec{p} = \vec{p}_2 - \vec{p}_1 ,
$$
and the left-hand side is the impulse of the resultant force by definition.
:::

The theorem replaces the detailed force law by one vector equation between the initial and the final state, therefore it solves problems in which the force varies in an unknown way during a short interaction. A bat striking a ball exerts a force that rises and falls in a few milliseconds, and the change of momentum of the ball is obtained from its velocities alone, without any knowledge of the shape of that force.
::::

:::definizione{#average-force titolo="Average force"}
The **average force** over the interval $[t_1, t_2]$ is the constant force with the same impulse as the actual force,
$$
\vec{F}_{\text{av}} = \frac{1}{\Delta t}\int_{t_1}^{t_2} \vec{F}\,dt = \frac{\Delta\vec{p}}{\Delta t} .
$$
In a graph of one component of the force against time, the impulse is the area between the curve and the time axis, and the average force is the height of the rectangle with the same base and the same area.

::grafico{f="40*exp(-(x-3)^2/2)" area="40*exp(-(x-3)^2/2);0;0.6;5.4" asintoti="y=20.5" nomi="t,F" etichette="0.55,-3,t₁;5.4,-3,t₂;5.5,23.5,F av" xmin=-0.5 xmax=6.4 ymin=-5 ymax=46 titolo="The shaded area is the impulse of the force between $t_1$ and $t_2$; the dashed line marks the average force $F_\mathrm{av} = \dfrac{J}{\Delta t}$, whose rectangle has the same area"}

The average force is what makes a short interaction comparable with an ordinary force. The same change of momentum spread over a longer time requires a smaller average force, which is the principle behind airbags and crash barriers.
:::

:::esempio{#impulse-example titolo="Impulse and average force on a struck ball"}
A ball of mass $m = 0.145\,\mathrm{kg}$ arrives horizontally at $38.0\,\mathrm{m/s}$ and leaves in the opposite sense at $45.0\,\mathrm{m/s}$, the contact lasting $\Delta t = 1.20\,\mathrm{ms}$. Taking the $x$ axis along the initial velocity,
$$
J_x = \Delta p_x = m\,(v_{2x} - v_{1x}) = 0.145\,\mathrm{kg} \cdot (-45.0 - 38.0)\,\mathrm{m/s} = -12.0\,\mathrm{N\cdot s} ,
$$
$$
F_{\text{av},x} = \frac{\Delta p_x}{\Delta t} = \frac{-12.0\,\mathrm{N\cdot s}}{1.20 \cdot 10^{-3}\,\mathrm{s}} = -1.00 \cdot 10^{4}\,\mathrm{N} .
$$
The weight of the ball is $1.42\,\mathrm{N}$, which is smaller than the average contact force by a factor of about $7000$. During the impact the weight contributes a negligible part of the total impulse, and this is the property that makes the next sections applicable to collisions.
:::

## Conservation of linear momentum

:::definizione{#internal-and-external-forces titolo="Internal and external forces"}
Consider a **system** consisting of a chosen set of bodies. A force exerted on one body of the system by another body of the system is **internal**; a force exerted by a body outside the system is **external**. The system is **isolated** when the resultant of the external forces vanishes.

The same pair of bodies can be internal or external depending on the choice of system, hence the first step of every momentum problem is the statement of which bodies belong to the system.
:::

::::teorema{#conservation-of-momentum titolo="Conservation of linear momentum"}
Let a system of particles have vanishing resultant external force. Then its total momentum is constant in time,
$$
\vec{P} = \sum_i m_i\vec{v}_i = \text{constant} ,
$$
hence $\vec{P}_{\text{initial}} = \vec{P}_{\text{final}}$ for any two instants.

:::dimostrazione
By Newton's second law in momentum form applied to the particle $i$,
$$
\frac{d\vec{p}_i}{dt} = \vec{F}_i^{\text{ext}} + \sum_{j \ne i} \vec{F}_{ij} ,
$$
where $\vec{F}_{ij}$ is the force exerted on $i$ by $j$. Summing over all the particles,
$$
\frac{d\vec{P}}{dt} = \sum_i \vec{F}_i^{\text{ext}} + \sum_i \sum_{j \ne i} \vec{F}_{ij} .
$$
In the double sum the terms appear in pairs $\vec{F}_{ij} + \vec{F}_{ji}$, and by Newton's third law each pair vanishes, therefore the internal forces contribute nothing. The resultant external force vanishes by hypothesis, hence $\dfrac{d\vec{P}}{dt} = \vec{0}$ and $\vec{P}$ is constant.
:::

The theorem is the main tool of this chapter. It relates the state before an interaction to the state after it without any description of the interaction itself, therefore it applies to collisions, to explosions and to recoil, where the internal forces are large and unknown.
::::

:::osservazione{#momentum-components titolo="Conservation along one axis"}
A vector equation is equivalent to one scalar equation per axis, so conservation of momentum reads
$$
\begin{cases}
P_x = \text{constant} \\[4pt]
P_y = \text{constant} \\[4pt]
P_z = \text{constant}
\end{cases}
$$
Each component is conserved separately, hence a component of $\vec{P}$ is constant whenever the corresponding component of the external resultant vanishes, *even* when the other components do not.

A shell exploding in flight is subject to its weight, so $P_y$ changes; no external force acts horizontally, therefore $P_x$ stays constant. Two blocks colliding on a table exchange large horizontal forces while the vertical forces balance, so the horizontal momentum of the pair is conserved.
:::

:::esempio{#recoil titolo="Recoil of a rifle"}
A rifle of mass $M = 3.0\,\mathrm{kg}$ fires a bullet of mass $m = 15\,\mathrm{g}$ with muzzle speed $v = 700\,\mathrm{m/s}$. The system rifle and bullet is isolated along the horizontal direction, and its initial momentum is zero, therefore
$$
0 = m v + M V
\quad\Longrightarrow\quad
V = -\frac{m}{M}\,v = -\frac{0.015\,\mathrm{kg}}{3.0\,\mathrm{kg}} \cdot 700\,\mathrm{m/s} = -3.5\,\mathrm{m/s} .
$$
The negative sign states that the rifle moves opposite to the bullet. The two momenta have equal magnitude while the kinetic energies do not, since $K = \dfrac{p^2}{2m}$ and the masses differ by a factor of $200$, hence the bullet carries $200$ times the kinetic energy of the rifle.
:::

## Collisions

:::definizione{#collision titolo="Collision"}
A **collision** is an interaction between two bodies that lasts a short time and during which the forces they exert on each other are much larger than the external forces. The velocities before and after the interaction are the data of the problem, and the forces during the contact are not described.

Because the external impulse over such a short interval is negligible, the two colliding bodies form a system that is isolated for practical purposes, therefore the total momentum immediately before the collision equals the total momentum immediately after it.
:::

:::definizione{#collision-types titolo="Elastic, inelastic and perfectly inelastic collisions"}
The total momentum is conserved in every collision, whereas the total kinetic energy need not be. Collisions are classified by what happens to the total kinetic energy $K$:

- **elastic**: $K$ is the same before and after;
- **inelastic**: $K$ decreases, the difference appearing as internal energy and deformation;
- **perfectly inelastic**: the two bodies move together after the collision, and the decrease of $K$ is the largest compatible with conservation of momentum.

Collisions between hard steel spheres and between atomic nuclei are nearly elastic; collisions between vehicles and between bodies of putty are inelastic. The classification fixes the second equation of the problem, since conservation of momentum alone gives one equation for two unknown final velocities.
:::

:::definizione{#coefficient-of-restitution titolo="Coefficient of restitution"}
For a collision along one line, the **coefficient of restitution** is the ratio
$$
e = \frac{|v_{2}' - v_{1}'|}{|v_{2} - v_{1}|} ,
$$
that is, the magnitude of the relative velocity after the collision divided by its value before. The value $e = 1$ holds for an elastic collision, $e = 0$ for a perfectly inelastic one, and $0 < e < 1$ for every intermediate case.

A ball dropped from the height $h_1$ that rebounds to the height $h_2$ meets the floor with speed $\sqrt{2gh_1}$ and leaves it with speed $\sqrt{2gh_2}$, hence
$$
e = \sqrt{\frac{h_2}{h_1}} ,
$$
which is how the coefficient is measured in the laboratory.
:::

:::attenzione
Kinetic energy is not conserved in a collision unless the collision is elastic, therefore writing both conservation laws in an inelastic problem produces a contradiction. Two railroad cars of $12\,000\,\mathrm{kg}$ and $8\,000\,\mathrm{kg}$ that couple after the first arrives at $3.0\,\mathrm{m/s}$ move together at $1.8\,\mathrm{m/s}$, and the kinetic energy drops from $54\,\mathrm{kJ}$ to $32.4\,\mathrm{kJ}$. The missing $21.6\,\mathrm{kJ}$ deformed the couplers and warmed them.
:::

## Collisions in one dimension

::::teorema{#perfectly-inelastic-1d titolo="Perfectly inelastic collision in one dimension"}
Let two bodies of masses $m_1$ and $m_2$ move along the same line with velocity components $v_1$ and $v_2$, and let them move together after the collision with the common component $V$. Then
$$
V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} ,
\qquad
\Delta K = -\,\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2 .
$$

:::dimostrazione
Conservation of momentum along the line of motion gives $m_1 v_1 + m_2 v_2 = (m_1 + m_2)V$, and dividing by the total mass yields the first formula. For the second, the change of kinetic energy is
$$
\Delta K = \frac{1}{2}(m_1 + m_2)V^2 - \frac{1}{2}m_1v_1^2 - \frac{1}{2}m_2v_2^2 .
$$
Substituting $V$ and reducing the expression over the common denominator $2(m_1 + m_2)$ leaves
$$
\Delta K = -\,\frac{m_1 m_2}{2(m_1 + m_2)}\,(v_1 - v_2)^2 ,
$$
which is the stated result.
:::

The loss of kinetic energy depends on the relative velocity alone, hence it vanishes exactly when the two bodies already move together, and it is maximal for a head-on approach. The combination $\dfrac{m_1m_2}{m_1+m_2}$ is the reduced mass of the pair.

::grafico{assi=0 uguale=1 linee="-0.3,2 9.8,2;-0.3,0 9.8,0" poligoni="1,2 2,2 2,3 1,3;5,2 6,2 6,3 5,3;4.6,0 6.6,0 6.6,1 4.6,1" vettori="2.15,2.5,3.7,2.5,v₁;6.7,0.5,7.7,0.5,V" etichette="1.5,3.3,m₁;5.5,3.3,m₂;5.6,1.3,m₁ + m₂;-0.2,3.9,before;-0.2,1.5,after;6.2,2.5,at rest" xmin=-0.6 xmax=10 ymin=-0.5 ymax=4.4 titolo="In a perfectly inelastic collision the two bodies leave the contact with one common velocity $V = \dfrac{m_1v_1 + m_2v_2}{m_1 + m_2}$"}
::::

::::teorema{#elastic-1d titolo="Elastic collision in one dimension"}
Let two bodies of masses $m_1$ and $m_2$ collide along one line with velocity components $v_1 \ne v_2$ before the collision, and let the collision be elastic. Then the components after the collision are
$$
v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1 + \frac{2m_2}{m_1 + m_2}\,v_2 ,
\qquad
v_2' = \frac{m_2 - m_1}{m_1 + m_2}\,v_2 + \frac{2m_1}{m_1 + m_2}\,v_1 .
$$

:::dimostrazione
The two conservation laws are
$$
\begin{cases}
m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \\[4pt]
\dfrac{1}{2}m_1 v_1^2 + \dfrac{1}{2}m_2 v_2^2 = \dfrac{1}{2}m_1 v_1'^2 + \dfrac{1}{2}m_2 v_2'^2
\end{cases}
$$
Collecting the terms of each body on one side gives
$$
m_1(v_1 - v_1') = m_2(v_2' - v_2),
\qquad
m_1(v_1^2 - v_1'^2) = m_2(v_2'^2 - v_2^2) .
$$
The two bodies exchange a nonzero impulse during the contact, therefore each of them changes velocity and the two differences $v_1 - v_1'$ and $v_2' - v_2$ are nonzero. Dividing the second relation by the first and factoring each difference of squares,
$$
v_1 + v_1' = v_2' + v_2 ,
$$
hence $v_1 - v_2 = -(v_1' - v_2')$. This linear relation together with conservation of momentum forms a system of two linear equations in $v_1'$ and $v_2'$, whose solution is the pair written above.
:::

The formulas give both final velocities from the data, therefore every elastic head-on collision is solved by substitution. Their derivation also produced a relation worth stating on its own.
::::

:::osservazione{#relative-velocity-reversal titolo="Reversal of the relative velocity"}
In an elastic collision along one line the relative velocity changes sign and keeps its magnitude,
$$
v_1' - v_2' = -\,(v_1 - v_2) .
$$
The two bodies separate as fast as they approached, which is the statement $e = 1$ for the coefficient of restitution. Replacing the energy equation by this linear relation turns an elastic collision problem into a linear system, and the substitution is always available because the two statements are equivalent for a one-dimensional elastic collision.
:::

:::esempio{#special-cases titolo="Three special cases of the elastic collision"}
Take the target at rest, $v_2 = 0$, so that $v_1' = \dfrac{m_1 - m_2}{m_1 + m_2}\,v_1$ and $v_2' = \dfrac{2m_1}{m_1 + m_2}\,v_1$.

- Equal masses, $m_2 = m_1$: then $v_1' = 0$ and $v_2' = v_1$. The projectile stops and the target leaves with the whole velocity, as the cue ball does in a head-on shot.
- Light projectile, $m_1 \ll m_2$: then $v_1' \approx -v_1$ and $v_2' \approx 0$. The projectile bounces back with nearly its initial speed and the target barely moves, as a ball rebounding from a wall.
- Heavy projectile, $m_1 \gg m_2$: then $v_1' \approx v_1$ and $v_2' \approx 2v_1$. The projectile keeps its velocity and the target is thrown forward at twice that velocity.

The fraction of kinetic energy transferred to the target is
$$
\frac{K_2'}{K_1} = \frac{4m_1m_2}{(m_1 + m_2)^2} ,
$$
which equals $1$ for equal masses and decreases when the masses differ. Nuclear reactors use this result, since a neutron loses energy fastest against nuclei of comparable mass, which is why hydrogen and carbon are used as moderators.
:::

## Collisions in two dimensions

:::osservazione{#two-dimensional-collisions titolo="Momentum conservation in components"}
When the velocities do not lie on one line, conservation of momentum is written as two scalar equations,
$$
\begin{cases}
m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}' \\[4pt]
m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}'
\end{cases}
$$
and the axes are usually chosen with $x$ along the initial velocity of the projectile, so that the initial $y$ momentum vanishes.

Two equations cannot determine the four unknown final components, therefore a two-dimensional collision needs two further data, such as the two final directions, or one final direction together with the condition that the collision is elastic. A perfectly inelastic collision is determined at once, since the final velocity is the same for both bodies and has only two components.
:::

:::esempio{#glancing-example titolo="A glancing collision"}
A body of mass $m_1 = 0.40\,\mathrm{kg}$ moving at $v_1 = 5.00\,\mathrm{m/s}$ along the $x$ axis strikes a body of mass $m_2 = 0.60\,\mathrm{kg}$ at rest. After the collision the first body moves at $37.0^\circ$ above the $x$ axis and the second at $30.0^\circ$ below it. The two conservation equations are
$$
\begin{cases}
m_1 v_1 = m_1 v_1'\cos 37.0^\circ + m_2 v_2'\cos 30.0^\circ \\[4pt]
0 = m_1 v_1'\sin 37.0^\circ - m_2 v_2'\sin 30.0^\circ
\end{cases}
$$
The second equation gives $v_2' = \dfrac{m_1 \sin 37.0^\circ}{m_2 \sin 30.0^\circ}\,v_1' = 0.802\,v_1'$, and substituting into the first,
$$
v_1' = 2.72\,\mathrm{m/s},
\qquad
v_2' = 2.18\,\mathrm{m/s} .
$$
The kinetic energy falls from $5.00\,\mathrm{J}$ to $2.90\,\mathrm{J}$, hence this collision is inelastic.

::grafico{uguale=1 nomi="x,y" vettori="0,0,5,0,v₁;0,0,2.17,1.64,v₁′;0,0,1.89,-1.09,v₂′" punti="0,0,pieno" etichette="1.35,0.42,37°;1.75,-0.45,30°" xmin=-0.8 xmax=5.8 ymin=-2.2 ymax=2.4 titolo="The projectile arrives with $\vec{v}_1$ and the two bodies leave with $\vec{v}_1\,'$ and $\vec{v}_2\,'$; the sum $m_1\vec{v}_1\,' + m_2\vec{v}_2\,'$ equals $m_1\vec{v}_1$"}
:::

::::teorema{#equal-mass-elastic-2d titolo="Equal masses in an elastic collision"}
Let two bodies of the same mass $m$ collide elastically, with the second at rest before the collision, and let both move after the collision. Then their final velocities are perpendicular,
$$
\vec{v}_1\,' \cdot \vec{v}_2\,' = 0 .
$$

:::dimostrazione
Conservation of momentum with equal masses gives $\vec{v}_1 = \vec{v}_1\,' + \vec{v}_2\,'$, and conservation of kinetic energy gives $v_1^2 = v_1'^2 + v_2'^2$. Taking the scalar product of the first relation with itself,
$$
v_1^2 = v_1'^2 + 2\,\vec{v}_1\,'\cdot\vec{v}_2\,' + v_2'^2 .
$$
Comparing with the energy relation leaves $2\,\vec{v}_1\,'\cdot\vec{v}_2\,' = 0$, and since both final velocities are nonzero, the two vectors are perpendicular.
:::

The result turns one measured deflection angle into the complete solution, because when the projectile leaves at the angle $\theta$ from its original direction, the target leaves at $90^\circ - \theta$ on the other side, with speeds $v_1\cos\theta$ and $v_1\sin\theta$. Photographs of colliding billiard balls and of nuclear tracks in a cloud chamber show this right angle.

::grafico{uguale=1 nomi="x,y" vettori="0,0,4,0,v₁;0,0,2.684,1.879,v₁′;0,0,1.316,-1.879,v₂′" segmenti="2.684,1.879,4,0" etichette="1.65,0.45,35°;1.2,-0.62,55°" xmin=-0.7 xmax=4.8 ymin=-2.4 ymax=2.4 titolo="Equal masses, elastic collision with the target at rest: the angle between $\vec{v}_1\,'$ and $\vec{v}_2\,'$ is $90^\circ$, and the two final vectors close the triangle on $\vec{v}_1$"}
::::

## Center of mass

:::definizione{#center-of-mass titolo="Center of mass of a system of particles"}
Let a system consist of the particles of masses $m_i$ at the positions $\vec{r}_i$, and let $M = \sum_i m_i$ be its total mass. The **center of mass** is the point located by
$$
\vec{r}_{\text{cm}} = \frac{1}{M}\sum_i m_i \vec{r}_i ,
$$
that is, by the components
$$
x_{\text{cm}} = \frac{\sum_i m_i x_i}{M},
\qquad
y_{\text{cm}} = \frac{\sum_i m_i y_i}{M},
\qquad
z_{\text{cm}} = \frac{\sum_i m_i z_i}{M} .
$$
The center of mass is a weighted average of the positions, each weighted by its mass, hence it lies closer to the heavier particles. For two particles it lies on the segment joining them, at distances from each in inverse ratio to the masses.

::grafico{uguale=1 nomi="x,y" punti="1,1,pieno,m₁;5,1,pieno,m₂;3,4,pieno,m₃;3.2,2.5,vuoto,C" segmenti="1,1,5,1;5,1,3,4;3,4,1,1" xmin=-0.8 xmax=6.4 ymin=-0.8 ymax=5 titolo="Center of mass $C$ of three particles of masses $2.0\,\mathrm{kg}$ at $(1, 1)$, $3.0\,\mathrm{kg}$ at $(5, 1)$ and $5.0\,\mathrm{kg}$ at $(3, 4)$, with $x_\mathrm{cm} = 3.2$ and $y_\mathrm{cm} = 2.5$"}
:::

:::definizione{#center-of-mass-continuous titolo="Center of mass of a continuous body"}
For a body whose mass is distributed continuously, the sums become integrals over the body,
$$
\vec{r}_{\text{cm}} = \frac{1}{M}\int \vec{r}\,dm ,
\qquad
M = \int dm ,
$$
where $dm = \rho\,dV$ for a volume of density $\rho$, $dm = \sigma\,dA$ for a surface of surface density $\sigma$ and $dm = \lambda\,d\ell$ for a wire of linear density $\lambda$.

For a uniform thin rod of length $L$ and mass $M$ along the $x$ axis with one end at the origin, $\lambda = \dfrac{M}{L}$ and
$$
x_{\text{cm}} = \frac{1}{M}\int_0^L x\,\lambda\,dx = \frac{\lambda}{M}\,\frac{L^2}{2} = \frac{L}{2} ,
$$
so the center of mass is at the midpoint.
:::

:::richiamo{titolo="Integral of a function over an interval"}
The integral $\displaystyle\int_a^b f(x)\,dx$ is computed from an antiderivative $F$ of $f$ by $F(b) - F(a)$, as the calculus course establishes. In the formulas of this section the variable of integration runs over the body, and the density turns a geometric integral into a mass-weighted one.
:::

:::osservazione{#symmetry-and-composite titolo="Symmetry and composite bodies"}
A uniform body with a center of symmetry has its center of mass at that center, since the contributions of the symmetric pairs of mass elements cancel. The center of a uniform sphere, of a uniform cube and of a uniform disk is therefore its center of mass, and the center of mass of a uniform body need not lie inside the material, as the center of a ring shows.

A body made of parts whose centers of mass are known is treated as a system of particles, one per part,
$$
x_{\text{cm}} = \frac{\sum_k M_k\,x_{\text{cm},k}}{\sum_k M_k} ,
$$
and a hole is accounted for as a part of negative mass. This is the method used for L-shaped plates and for drilled disks.
:::

## Motion of the center of mass

::::teorema{#total-momentum titolo="Total momentum and the velocity of the center of mass"}
Let a system of particles have total mass $M$ and center of mass $\vec{r}_{\text{cm}}$, and let $\vec{v}_{\text{cm}} = \dfrac{d\vec{r}_{\text{cm}}}{dt}$. Then
$$
\vec{P} = M\vec{v}_{\text{cm}} .
$$

:::dimostrazione
Multiply the definition of the center of mass by $M$ and differentiate with respect to time:
$$
M\vec{r}_{\text{cm}} = \sum_i m_i\vec{r}_i
\quad\Longrightarrow\quad
M\vec{v}_{\text{cm}} = \sum_i m_i\vec{v}_i = \vec{P} ,
$$
since each mass is constant.
:::

The total momentum of a system is therefore the momentum of a single particle of mass $M$ moving with the center of mass. Conservation of momentum then says that the velocity of the center of mass of an isolated system is constant, which is how the problems of a person walking on a boat and of a cart on frictionless rails are solved.
::::

::::teorema{#second-law-for-a-system titolo="Newton's second law for a system of particles"}
Let $\vec{F}^{\text{ext}}$ be the resultant of the external forces acting on a system of total mass $M$. Then
$$
\vec{F}^{\text{ext}} = M\vec{a}_{\text{cm}} ,
\qquad
\vec{a}_{\text{cm}} = \frac{d\vec{v}_{\text{cm}}}{dt} .
$$

:::dimostrazione
Differentiating $\vec{P} = M\vec{v}_{\text{cm}}$ gives $\dfrac{d\vec{P}}{dt} = M\vec{a}_{\text{cm}}$. The proof of the conservation theorem showed that the internal forces cancel in pairs and that $\dfrac{d\vec{P}}{dt}$ equals the resultant of the external forces, therefore the two expressions are equal.
:::

The center of mass of a system moves as a particle of mass $M$ acted upon by the external forces alone, however complicated the internal motion is. A wrench thrown spinning across a frictionless table has a center of mass that travels in a straight line at constant speed, and a diver who rotates in the air has a center of mass on a parabola. The chapters on fixed-axis rotation and on rolling use this separation between the motion of the center of mass and the motion about it.
::::

:::esempio{#exploding-projectile titolo="An exploding projectile"}
A shell is launched and explodes into two equal fragments at the top of its path. One fragment is left at rest by the explosion and falls vertically, landing at the point $x_1$ below the top. The explosion is internal, hence it does not change the external force, which is the weight, therefore the center of mass continues on the original parabola and lands at the point $x_{\text{C}}$ that the whole shell would have reached. From $x_{\text{C}} = \dfrac{x_1 + x_2}{2}$ it follows that the second fragment lands at
$$
x_2 = 2x_{\text{C}} - x_1 .
$$

::grafico{curve="t,1.6*t-0.16*t^2,0,10;5,4-4*t^2,0,1;5+10*t,4-4*t^2,0,1" punti="5,4,pieno;5,0,pieno;10,0,vuoto;15,0,pieno" nomi="x,y" legenda="\text{center of mass};\text{fragment left at rest};\text{other fragment}" etichette="4.6,-0.6,x₁;9.6,-0.6,xC;14.6,-0.6,x₂" xmin=-0.8 xmax=16.5 ymin=-1.1 ymax=5 titolo="The explosion is internal, hence the center of mass keeps the parabola of the whole shell and reaches $x_\mathrm{C} = \dfrac{x_1 + x_2}{2}$"}

Taking the top of the path at $x = 5$ in the units of the figure and the original landing point at $x = 10$, the fragment at rest lands at $x_1 = 5$ and the other at $x_2 = 15$.
:::

::::teorema{#konigs-theorem titolo="König's theorem"}
Let a system of particles have total mass $M$, center of mass velocity $\vec{v}_{\text{cm}}$ and velocities $\vec{u}_i = \vec{v}_i - \vec{v}_{\text{cm}}$ relative to the center of mass. Then the total kinetic energy splits as
$$
K = \frac{1}{2}Mv_{\text{cm}}^2 + \sum_i \frac{1}{2}m_i u_i^2 .
$$

:::dimostrazione
Write $\vec{v}_i = \vec{v}_{\text{cm}} + \vec{u}_i$ and expand the square in each term:
$$
K = \sum_i \frac{1}{2}m_i\left(v_{\text{cm}}^2 + 2\,\vec{v}_{\text{cm}}\cdot\vec{u}_i + u_i^2\right) .
$$
The first term sums to $\dfrac{1}{2}Mv_{\text{cm}}^2$. In the middle term the factor $\vec{v}_{\text{cm}}$ is common, and $\sum_i m_i\vec{u}_i = \vec{P} - M\vec{v}_{\text{cm}} = \vec{0}$ by the theorem on the total momentum, therefore the middle term vanishes and the third term remains as written.
:::

The first term depends on the motion of the system as a whole and the second on the motion of its parts relative to the center of mass. Momentum conservation fixes $\vec{v}_{\text{cm}}$, hence the first term cannot change in a collision, and the energy a collision can dissipate is at most the second term. A perfectly inelastic collision removes all of it, which is why it dissipates the largest amount compatible with conservation of momentum.
::::

## Systems of varying mass: the rocket

::::teorema{#rocket-equation titolo="Rocket equation"}
Let a rocket of instantaneous mass $m$ and velocity $v$ expel fuel with speed $u$ relative to itself, in the direction opposite to its motion, and let no external force act. Then
$$
m\,\frac{dv}{dt} = u\left|\frac{dm}{dt}\right| ,
\qquad
v_f - v_i = u\ln\frac{m_i}{m_f} .
$$

:::dimostrazione
Consider the system formed by the rocket and the fuel it will expel in the interval $dt$, and work along the direction of motion with one axis. At the instant $t$ the system has mass $m$ and velocity $v$, so its momentum is $mv$. At the instant $t + dt$ the rocket has mass $m + dm$, with $dm < 0$, and velocity $v + dv$, while the expelled fuel has mass $-dm$ and velocity $v - u$. The system is isolated, therefore
$$
mv = (m + dm)(v + dv) + (-dm)(v - u) .
$$
Expanding and cancelling $mv$ leaves $0 = m\,dv + u\,dm + dm\,dv$, and the product of two infinitesimals is negligible, hence
$$
m\,dv = -u\,dm .
$$
Dividing by $dt$ gives the first formula, since $dm < 0$. Dividing instead by $m$ and integrating from the initial to the final state,
$$
\int_{v_i}^{v_f} dv = -u\int_{m_i}^{m_f}\frac{dm}{m}
\quad\Longrightarrow\quad
v_f - v_i = u\ln\frac{m_i}{m_f} ,
$$
which is the second formula.
:::

The equation states that the gain in speed depends on the exhaust speed and on the ratio of the initial to the final mass, not on the rate at which the fuel is burned. A rocket with $u = 2.6\,\mathrm{km/s}$ that burns four fifths of its initial mass gains $2.6\,\mathrm{km/s} \cdot \ln 5 = 4.2\,\mathrm{km/s}$.
::::

:::osservazione{#thrust titolo="Thrust"}
The quantity
$$
F_{\text{thrust}} = u\left|\frac{dm}{dt}\right|
$$
has the dimensions of a force and acts on the rocket as an external force would, so a rocket that burns $45\,\mathrm{kg/s}$ with $u = 2.6\,\mathrm{km/s}$ develops a thrust of $1.2 \cdot 10^{5}\,\mathrm{N}$. On a launch pad the rocket lifts off only when the thrust exceeds its weight, and the acceleration follows from Newton's second law applied with the weight included,
$$
a = \frac{F_{\text{thrust}} - mg}{m} .
$$
The acceleration grows as the fuel is consumed, since the thrust stays constant while the mass decreases.
:::
