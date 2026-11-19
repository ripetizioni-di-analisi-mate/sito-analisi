---
titolo: "Equations of static equilibrium and support reactions"
sommario: "The equilibrium conditions for a planar rigid body, the choice of equations and moment centers, free-body diagrams, and the calculation of reactions for simply supported beams, cantilevers, overhanging beams, inclined supports and bent beams."
---

## Equations of static equilibrium

Two types of force act on a structure: the specified loads and the unknown reactions at its supports. The equations of static equilibrium relate the loads to the reactions and allow the reactions to be calculated.

:::richiamo{titolo="Changing the reference point for moments"}
Consider a system of forces $\vec{F}_i$ acting at points $P_i$ with resultant $\vec{R} = \sum_i \vec{F}_i$. The resultant moments about two points $O$ and $O'$ are related by
$$
\vec{M}_{O'} = \vec{M}_O + (O - O') \times \vec{R} .
$$
See the chapter on applied vectors, moments and equivalent force systems.
:::

:::richiamo{titolo="Equations of motion"}
For a system of particles with total mass $m$ and center of mass $G$, whose internal forces act in pairs along the lines joining the particles,
$$
m\,\vec{a}_G = \vec{R}^{(e)} ,
\qquad
\frac{d\vec{L}_G}{dt} = \vec{M}_G^{(e)} ,
$$
where $\vec{L}_G$ is the angular momentum about $G$ and the superscript $(e)$ denotes external forces only. For a rigid body in planar motion, $\vec{L}_G = I_G\,\vec{\omega}$, where $I_G > 0$ is its mass moment of inertia about the axis through $G$ perpendicular to the plane. See the chapter on rigid-body dynamics in Physics 1.
:::

::::teorema{#equazioni-cardinali titolo="Equations of static equilibrium"}
Consider a rigid body initially at rest. The external forces acting on it, including applied loads and support reactions, have resultant $\vec{R}$ and resultant moment $\vec{M}_O$ about a point $O$. The body remains in equilibrium if and only if
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
For a planar body loaded in its own plane $xy$, the resultant force has only the components $R_x$ and $R_y$, and the moment has only a component along $z$, positive counterclockwise. The system therefore reduces to three **scalar equations of equilibrium**:
$$
\begin{cases}
\sum F_x = 0 \\[4pt]
\sum F_y = 0 \\[4pt]
\sum M_O = 0
\end{cases}
$$
corresponding to horizontal force balance, vertical force balance and moment balance about $O$. The equations are linear in the forces, so with three unknown reactions they form a system of three linear equations in three unknowns. For a beam of length $L$ supported at ends $A$ and $B$ and carrying a vertical midspan force $F$, moment balance about $A$ gives $V_B\,L - F\,\dfrac{L}{2} = 0$, hence $V_B = \dfrac{F}{2}$. Vertical force balance gives $V_A = F - V_B = \dfrac{F}{2}$.

:::dimostrazione
The internal forces cancel in pairs, so equilibrium depends only on the external forces.

Suppose the body remains at rest. Then $\vec{a}_G = \vec{0}$ and $\vec{L}_G = \vec{0}$ at every instant, so $\dfrac{d\vec{L}_G}{dt} = \vec{0}$ also holds. The equations of motion give $\vec{R} = \vec{0}$ and $\vec{M}_G = \vec{0}$. Changing the reference point gives $\vec{M}_O = \vec{M}_G + (G - O) \times \vec{R} = \vec{0}$.

Conversely, suppose $\vec{R} = \vec{0}$ and $\vec{M}_O = \vec{0}$. Changing the reference point gives $\vec{M}_G = \vec{M}_O + (O - G) \times \vec{R} = \vec{0}$. The first equation of motion yields $\vec{a}_G = \vec{0}$. Since $G$ is initially at rest, it remains at rest. By the second equation, $\vec{L}_G$ is constant and initially zero because the body starts from rest. Hence $I_G\,\vec{\omega} = \vec{0}$ at every instant, and since $I_G > 0$, $\vec{\omega} = \vec{0}$. The velocity of any point $P$ of the rigid body is $\vec{v}_P = \vec{v}_G + \vec{\omega} \times (P - G)$, so every point has zero velocity and the body remains at rest.
:::
::::

:::osservazione{#indipendenza-dal-polo titolo="Choice of the moment center"}
If $\vec{R} = \vec{0}$, the change-of-reference-point formula gives $\vec{M}_{O'} = \vec{M}_O$ for every point $O'$. The moment balance can therefore be written about any point in the plane, even outside the body. The solution is the same, but the choice determines how many unknowns appear in the equation. For the simply supported beam, the reactions $H_A$ and $V_A$ act through $A$ and therefore drop out of the moment balance about $A$.
:::

## Equivalent forms of the equilibrium equations

The two force-balance equations can be replaced by moment balances about different points.

::::teorema{#forme-equivalenti titolo="Equivalent forms of the equilibrium equations"}
A planar force system has zero resultant force and zero resultant moment if and only if any one of the following three systems is satisfied:

- two force-balance equations along nonparallel directions and a moment balance about an arbitrary point;
- a force balance along direction $r$ and two moment balances about points $A$ and $B$, with the line $AB$ not perpendicular to $r$;
- three moment balances about three noncollinear points $A$, $B$ and $C$:
$$
\begin{cases}
\sum M_A = 0 \\[4pt]
\sum M_B = 0 \\[4pt]
\sum M_C = 0
\end{cases}
$$

Using more than one moment balance makes it possible to choose the moment centers so that each equation contains a single unknown. For the simply supported beam with a vertical midspan load $F$, the moment balance about $A$ contains only $V_B$ and the moment balance about $B$ contains only $V_A$.

:::dimostrazione
Two moment balances, together with the change-of-reference-point formula, require the resultant force to be parallel to the line joining the moment centers.

The conditions are necessary because if $\vec{R} = \vec{0}$ and $\vec{M}_O = \vec{0}$, all components of $\vec{R}$ vanish and, by freedom of choice of the reference point, so do the moments about every point.

In the first case the components of $\vec{R}$ in two nonparallel directions are zero, giving $\vec{R} = \vec{0}$, and the moment about the chosen point is zero.

In the second case the change-of-reference-point formula gives $\vec{M}_B = \vec{M}_A + (A - B) \times \vec{R}$. Since $\vec{M}_A = \vec{M}_B = \vec{0}$, we have $(A - B) \times \vec{R} = \vec{0}$, so $\vec{R}$ is either zero or parallel to $AB$. The component of $\vec{R}$ along $r$ vanishes, meaning that $\vec{R}$ is either zero or perpendicular to $r$. A nonzero resultant would have to be both parallel to $AB$ and perpendicular to $r$, contrary to the hypothesis. Therefore $\vec{R} = \vec{0}$ and $\vec{M}_A = \vec{0}$.

In the third case, as in the second, $\vec{M}_A = \vec{M}_B = \vec{0}$ requires $\vec{R}$ to be zero or parallel to $AB$, and $\vec{M}_A = \vec{M}_C = \vec{0}$ requires it to be zero or parallel to $AC$. Since the three points are not collinear, the lines $AB$ and $AC$ are not parallel, so $\vec{R} = \vec{0}$.
:::
::::

## Support reactions and free-body diagrams

:::definizione{#reazione-vincolare titolo="Support reaction"}
A support restrains certain displacements of the body to which it is attached. It exerts a force or couple on the body, called the **support reaction**, to prevent these displacements. We assume *frictionless* and *bilateral* supports, the latter meaning that displacement is restrained in either sense. The bodies are rigid and the displacements infinitesimal. A support then exerts one component of force in each direction in which it restrains translation and a couple if it restrains rotation. The number of unknown components is its *multiplicity*. A roller on a horizontal surface restrains only vertical displacement of the supported point and therefore exerts only a vertical force.
:::

:::richiamo{#reazioni-dei-vincoli titolo="Reactions at external supports"}
- **Roller** (sliding support): a force normal to the contact surface through the supported point, with one unknown, $R_B$, or $V_B$ if the surface is horizontal.
- **Two-force link** (a bar pinned at both ends): a force along the link axis, with one unknown.
- **Pin**: a force in an arbitrary direction through the supported point, with two unknown components $H_A$ and $V_A$.
- **Parallel-link support** (two parallel links): a force parallel to the links along an arbitrary line of action, equivalent to a force through the supported point plus a couple. There are two unknowns.
- **Fixed support**: a force of arbitrary direction and line of action, represented at the supported point by two force components and a couple. There are three unknowns, $H_A$, $V_A$ and $M_A$.

Supports are classified in the chapter on constraints and kinematic analysis.

:::

:::definizione{#diagramma-di-corpo-libero titolo="Free-body diagram"}
A **free-body diagram** shows the body with each support replaced by its reactions and all applied loads included. Draw the reactions in the assumed positive directions: $H$ to the right, $V$ upward, $M_A$ counterclockwise and $R_B$ in the chosen direction along its line of action. The body is now free of supports, so the equilibrium equations apply to the forces shown. Distributed loads may be replaced by their resultants.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" reazioni="A,1.3,0,H_A;A,0,1.3,V_A;B,0,1.3,V_B" forze="3 0,0,-1.5,qL" quote="A,3 0,3 m;3 0,B,3 m" titolo="Free-body diagram of a simply supported beam of length $6\,\mathrm{m}$ under a uniform load $q$, replaced by its resultant $qL$ at midspan"}
:::

## Choosing equations and moment centers

:::osservazione{#scelta-dei-poli titolo="One unknown per equation"}
The three equations can be solved as a simultaneous system. An appropriate choice of equations and moment centers, however, can leave only one unknown in each equation.

- Only the third unknown reaction appears in a moment balance about the intersection of the lines of action of the other two. Both components of a pin reaction pass through the pin, so take moments about that point.
- Only the third unknown reaction appears in a force balance perpendicular to two parallel unknown reactions. With two vertical reactions, use horizontal force balance.

First solve an equation containing one unknown, then substitute the result into the remaining equations.
:::

:::esempio{titolo="Simply supported beam under an inclined force"}
The beam $AB$ of length $5\,\mathrm{m}$ has a pin at $A$ and a roller on a horizontal surface at $B$. A distance $2\,\mathrm{m}$ from $A$, a force $F = 20\,\mathrm{kN}$ acts down and to the right, with horizontal component $12\,\mathrm{kN}$ and vertical component $16\,\mathrm{kN}$.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2 0,0.9,-1.2,F" quote="A,2 0,2 m;2 0,B,3 m" titolo="Simply supported beam under the inclined force $F = 20\,\mathrm{kN}$"}

::struttura{nodi="A,0,0;B,5,0" aste="A-B" reazioni="A,1.1,0,H_A;A,0,1.1,V_A;B,0,1.1,V_B" forze="2 0,1.2,0,12 kN;2 0,0,-1.6,16 kN" quote="A,2 0,2 m;2 0,B,3 m" titolo="Free-body diagram with the force resolved into its components"}

The roller at $B$ exerts only a vertical reaction $V_B$, so horizontal force balance contains only $H_A$. Moment balance about $A$ contains only $V_B$:
$$
\begin{cases}
H_A + 12 = 0 \\[4pt]
V_A + V_B - 16 = 0 \\[4pt]
5\,V_B - 16 \cdot 2 = 0
\end{cases}
$$
The third equation gives $V_B = \dfrac{32}{5} = 6.4\,\mathrm{kN}$, the second $V_A = 16 - 6.4 = 9.6\,\mathrm{kN}$ and the first $H_A = -12\,\mathrm{kN}$. The vertical reactions point upward. The horizontal reaction $H_A$ has magnitude $12\,\mathrm{kN}$ and points to the left, opposing the horizontal component of the load.
:::

## Distributed loads and concentrated couples

:::richiamo{#risultante-carico-distribuito titolo="Resultant of a distributed load"}
A load $q(x)$ distributed over the interval $a \leq x \leq b$ has a resultant equal to the area of the load diagram, with a line of action through the centroid of that diagram:
$$
Q = \int_a^b q(x)\,dx ,
\qquad
x_Q = \frac{1}{Q}\int_a^b x\,q(x)\,dx .
$$
A uniform load $q$ over length $\ell$ has resultant $q\ell$ at the midpoint. A triangular load with maximum intensity $q_0$ has resultant $\dfrac{q_0\ell}{2}$ at a distance $\dfrac{\ell}{3}$ from the end where the load is $q_0$. A trapezoidal load can be split into a rectangle and a triangle. The distributed load and its resultant are equivalent systems, so the resultant can replace the distributed load in the equilibrium equations of the body carrying it. See the chapter on applied vectors, moments and equivalent force systems.
:::

:::attenzione
Apply the resultant at the centroid of the load diagram over the *loaded segment*. For a simply supported beam of length $6\,\mathrm{m}$ with $q = 3\,\mathrm{kN/m}$ over the first $4\,\mathrm{m}$, the resultant is $Q = 12\,\mathrm{kN}$ at a distance $2\,\mathrm{m}$ from $A$. Taking moments about $A$ gives $6\,V_B - 12 \cdot 2 = 0$, hence $V_B = 4\,\mathrm{kN}$ and $V_A = 8\,\mathrm{kN}$. Placing the resultant at midspan would give $V_A = V_B = 6\,\mathrm{kN}$, which corresponds to a different loading.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,4 0,0.6,0.6,q" forze="2 0,0,-1.5,Q" quote="A,2 0,2 m;2 0,4 0,2 m;4 0,B,2 m" titolo="The resultant $Q = 12\,\mathrm{kN}$ of the load over the first $4\,\mathrm{m}$ acts through the midpoint of the loaded segment"}
:::

:::osservazione{#coppie-concentrate titolo="Concentrated couples"}
A concentrated couple $\mathcal{M}$ has zero resultant force and therefore does not appear in force-balance equations. Its moment is the same about every point, so it enters every moment balance as $\mathcal{M}$, positive counterclockwise, regardless of its location. For a simply supported beam of length $6\,\mathrm{m}$ under a clockwise couple $\mathcal{M} = 12\,\mathrm{kN\,m}$, moment balance about $A$ gives $6\,V_B - 12 = 0$, so the reaction is $V_B = 2\,\mathrm{kN}$ upward. Vertical force balance gives $V_A = -2\,\mathrm{kN}$, or $2\,\mathrm{kN}$ downward. The reactions form a counterclockwise couple with arm $6\,\mathrm{m}$ and moment $12\,\mathrm{kN\,m}$, balancing the applied couple. Their values are independent of the position of $\mathcal{M}$ along the beam.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" coppie="2 0,-1,ℳ" reazioni="A,0,-1.2,V_A;B,0,1.2,V_B" quote="A,2 0,2 m;2 0,B,4 m" titolo="The clockwise couple $\mathcal{M}$ is balanced by the couple formed by reactions $V_A$ and $V_B$, shown in their actual directions"}
:::

## Cantilevers and overhanging beams

:::esempio{titolo="Cantilever with a uniform load and a couple"}
The cantilever $AB$ of length $3\,\mathrm{m}$ is fixed at $A$ and carries a uniform load $q = 4\,\mathrm{kN/m}$ and a counterclockwise couple $\mathcal{M} = 6\,\mathrm{kN\,m}$ at its free end $B$.

::struttura{nodi="A,0,0;B,3,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.3,0.3,q" coppie="B,1,ℳ" quote="A,B,3 m" titolo="Cantilever with a uniform load $q$ and a couple $\mathcal{M}$ at the free end"}

The fixed support exerts $H_A$, $V_A$ and $M_A$. The resultant of the distributed load is $q \cdot 3 = 12\,\mathrm{kN}$ at a distance $1.5\,\mathrm{m}$ from $A$. All reactions act at $A$, so the moment balance about $A$ contains only $M_A$:
$$
\begin{cases}
H_A = 0 \\[4pt]
V_A - 12 = 0 \\[4pt]
M_A - 12 \cdot 1.5 + 6 = 0
\end{cases}
$$
The results are $V_A = 12\,\mathrm{kN}$ upward and $M_A = 12\,\mathrm{kN\,m}$ counterclockwise. The applied couple reduces the moment the fixed support must supply to balance the load.
:::

:::osservazione{#segno-delle-reazioni titolo="Signs of the reactions"}
In the equations the reactions are assumed positive along the coordinate axes, so the sign of each result gives its actual direction. A negative value indicates a direction opposite to that assumed. The equations need not be rewritten. State the actual direction in words with the result. Negative reactions are common in **overhanging beams**, where a load beyond one support tends to lift the beam at the opposite support. A bilateral support can exert a downward reaction to hold the beam in place.
:::

:::esempio{titolo="Overhanging beam"}
The beam $AC$ has a pin at $A$ and a roller at $B$, a distance $4\,\mathrm{m}$ from $A$. The overhang $BC$ has length $2\,\mathrm{m}$ and carries a vertical force $F = 12\,\mathrm{kN}$ at $C$.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="C,0,-1.5,F" quote="A,B,4 m;B,C,2 m" titolo="Overhanging beam loaded at its free end $C$"}

Moment balance about $A$ gives $4\,V_B - 12 \cdot 6 = 0$, so the reaction is $V_B = 18\,\mathrm{kN}$ upward. Vertical force balance gives $V_A = 12 - 18 = -6\,\mathrm{kN}$, or $6\,\mathrm{kN}$ downward. The overhang load tends to rotate the beam about $B$ and lift it at $A$, so the pin holds it down. The reaction at $B$ exceeds the load because it also balances $V_A$.
:::

## Inclined supports and bent beams

:::osservazione{#appoggio-inclinato titolo="Roller on an inclined surface"}
A roller on a surface inclined at angle $\alpha$ to the horizontal exerts a reaction $R_B$ normal to that surface and hence inclined at $\alpha$ to the vertical. Its horizontal and vertical components are $R_B\sin\alpha$ and $R_B\cos\alpha$. There is still only one unknown. With a pin at the opposite end, the moment balance about the pin contains only $R_B$, and the horizontal component of $R_B$ produces a horizontal reaction at the pin even if all applied loads are vertical.
:::

:::esempio{titolo="Beam with an inclined roller support"}
The beam $AB$ of length $4\,\mathrm{m}$ has a pin at $A$ and, at $B$, a roller on a surface inclined at $\tan\alpha = \dfrac{3}{4}$, with $\sin\alpha = 0.6$ and $\cos\alpha = 0.8$. A vertical force $F = 10\,\mathrm{kN}$ acts at midspan. The reaction $R_B$ is normal to the support surface and points up and to the left.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,cerniera;B,carrello,306.87" forze="2 0,0,-1,F" reazioni="B,-0.6,0.8,R_B" quote="A,2 0,2 m;2 0,B,2 m" titolo="Roller on an inclined surface: $R_B$ makes an angle $\alpha$ with the vertical"}

$$
\begin{cases}
H_A - 0.6\,R_B = 0 \\[4pt]
V_A + 0.8\,R_B - 10 = 0 \\[4pt]
0.8\,R_B \cdot 4 - 10 \cdot 2 = 0
\end{cases}
$$
The third equation gives $R_B = \dfrac{20}{3.2} = 6.25\,\mathrm{kN}$, then $H_A = 3.75\,\mathrm{kN}$ to the right and $V_A = 10 - 5 = 5\,\mathrm{kN}$ upward. In the moment balance about $A$ the horizontal component of $R_B$ drops out because its line of action passes through $A$.
:::

:::osservazione{#trave-ad-asse-spezzato titolo="Elbow-shaped beams and beams with changes in direction"}
A beam with a change in direction, such as an L-shaped beam or a portal frame made of welded segments, is one rigid body. Its equilibrium equations are therefore the same as for a straight beam. Calculate the moment of each force using its moment arm, the perpendicular distance from the reference point to its line of action. For a horizontal force the moment arm is the difference in elevation between the reference point and the point of application.
:::

:::esempio{titolo="L-shaped beam under a horizontal force"}
The beam $ACB$ consists of column $AC$ of height $3\,\mathrm{m}$ and crossbeam $CB$ of length $4\,\mathrm{m}$. It has a pin at the base $A$ and a roller on a horizontal surface at $B$. At $C$ a horizontal force $F = 6\,\mathrm{kN}$ acts to the right.

::struttura{nodi="A,0,0;C,0,3;B,4,3" aste="A-C;C-B" vincoli="A,cerniera;B,carrello" forze="C,1.2,0,F" quote="A,C,3 m,0.8;C,B,4 m,-0.8" titolo="L-shaped beam with horizontal force $F$ at joint $C$"}

The line of action of $F$ is horizontal at elevation $3\,\mathrm{m}$. Its moment arm about $A$ is therefore $3\,\mathrm{m}$, and its moment is clockwise:
$$
\begin{cases}
H_A + 6 = 0 \\[4pt]
V_A + V_B = 0 \\[4pt]
4\,V_B - 6 \cdot 3 = 0
\end{cases}
$$
The results are $V_B = 4.5\,\mathrm{kN}$ upward, $V_A = -4.5\,\mathrm{kN}$ or $4.5\,\mathrm{kN}$ downward, and $H_A = -6\,\mathrm{kN}$ or $6\,\mathrm{kN}$ to the left. A horizontal load can therefore produce vertical reactions. The couple formed by these reactions balances the moment of $F$.
:::

:::osservazione{#carichi-su-aste-inclinate titolo="Distributed loads on an inclined member"}
For a member of length $\ell$ inclined at angle $\alpha$ to the horizontal, distinguish three types of uniform load.

- Self-weight $g$, specified per unit member length, is vertical and has resultant $g\,\ell$.
- A load $q$ specified per unit horizontal projection, such as snow on a sloping roof, is vertical and has resultant $q\,\ell\cos\alpha$ because the member's horizontal projection is $\ell\cos\alpha$ long.
- A load $p$ perpendicular to the member and specified per unit member length, such as wind pressure, has resultant $p\,\ell$ perpendicular to the member.

In each case the resultant passes through the member's midpoint. For a member from $(0, 0)$ to $(4, 3)$ of length $5\,\mathrm{m}$ with $\cos\alpha = 0.8$, a self-weight of $2\,\mathrm{kN/m}$ gives $10\,\mathrm{kN}$ and a load of $2\,\mathrm{kN/m}$ per unit horizontal projection gives $8\,\mathrm{kN}$.
:::

## Checking equilibrium

:::osservazione{#verifica-equilibrio titolo="Independent equilibrium check"}
Once the reactions have been found from three independent equations, a fourth equilibrium equation, such as a moment balance about another point, follows from the first three by the equivalent forms of the equilibrium equations. With the correct reactions it must give $0$. A nonzero result indicates an error in the arithmetic, a moment arm or a sign. For the simply supported beam under the inclined force, moment balance about $B$ gives
$$
-5\,V_A + 16 \cdot 3 = -5 \cdot 9.6 + 48 = 0 ,
$$
where $H_A$ and the horizontal component of the load drop out because their lines of action coincide with the beam axis through $B$. For the overhanging beam, taking moments about $C$ gives $-6\,V_A - 2\,V_B = -6 \cdot (-6) - 2 \cdot 18 = 0$.
:::

## Unstable and statically indeterminate structures

The structures considered so far have three scalar constraints arranged so that three equations determine the reactions. Insufficient, improperly arranged or redundant constraints change this result.

:::richiamo{titolo="Rouché–Capelli theorem"}
The linear system $A\,\mathbf{r} = \mathbf{b}$, where $A$ is an $3 \times s$ matrix, has solutions if and only if $\operatorname{rank} A = \operatorname{rank}\,(A \mid \mathbf{b})$. When solutions exist, they depend on $s - \operatorname{rank} A$ parameters. See the chapter on linear systems and rank in Linear Algebra.
:::

::::teorema{#reazioni-determinate titolo="Determination of the reactions"}
Consider a planar rigid body with $s$ scalar reaction components $r_1, \dots, r_s$. The three equilibrium equations form the linear system $A\,\mathbf{r} = \mathbf{b}$, where the matrix $A$ is of size $3 \times s$ and depends only on the locations and directions of the supports and the vector $\mathbf{b}$ depends only on the loads.

- If $s = 3$ and $\det A \neq 0$, a unique set of reactions exists for every load. The structure is **statically determinate**.
- If $\operatorname{rank} A < 3$, some load systems have no solution. The structure is **unstable** and is in equilibrium only under particular loads.
- If $s > 3$ and $\operatorname{rank} A = 3$, reactions exist for every load and depend on $s - 3$ parameters. The structure is *statically indeterminate*, and statics alone cannot determine the reactions.

:::dimostrazione
Apply the Rouché–Capelli theorem. If $s = 3$ and $\det A \neq 0$, then $\operatorname{rank} A = 3 = \operatorname{rank}\,(A \mid \mathbf{b})$ for every $\mathbf{b}$, so there is a unique solution because it depends on $3 - 3 = 0$ parameters. If $\operatorname{rank} A < 3$, the columns of $A$ span a proper subspace of $\mathbb{R}^3$. For a load vector $\mathbf{b}$ outside this subspace, $\operatorname{rank}\,(A \mid \mathbf{b}) > \operatorname{rank} A$, so there is no solution. If $\operatorname{rank} A = 3$, the augmented matrix, which has three rows, also has rank $3$. Thus a solution exists for every $\mathbf{b}$ and depends on $s - 3$ parameters.
:::
::::

:::osservazione{#caso-labile titolo="Unstable structure"}
The beam $AB$ resting on two rollers with horizontal travel directions has two vertical reactions, $V_A$ and $V_B$. Horizontal force balance contains no unknowns and reduces to the load condition $\sum F_x = 0$. Equilibrium therefore requires the resultant load to be vertical. No reaction balances a horizontal force $H$ applied to the beam, so it translates. In the system $A\,\mathbf{r} = \mathbf{b}$ the row of $A$ corresponding to horizontal force balance is zero, so $\operatorname{rank} A < 3$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,carrello;B,carrello" forze="2 0,0,-1.5,F;B,1.5,0,H" quote="A,2 0,2 m;2 0,B,4 m" titolo="Beam on two rollers: no support reaction balances the horizontal force $H$"}
:::

:::osservazione{#caso-iperstatico titolo="Statically indeterminate structure"}
The beam $AB$ of length $4\,\mathrm{m}$, fixed at $A$ and supported on a roller at $B$, carries a vertical midspan force $F = 10\,\mathrm{kN}$ and has four unknown reactions. The equilibrium equations are
$$
\begin{cases}
H_A = 0 \\[4pt]
V_A + V_B - 10 = 0 \\[4pt]
M_A + 4\,V_B - 10 \cdot 2 = 0
\end{cases}
$$
and for any chosen $V_B$ they give $V_A = 10 - V_B$ and $M_A = 20 - 4\,V_B$. The actual value of $V_B$ depends on the deformation of the beam and is calculated in Mechanics of Materials. The relationship between the number and arrangement of constraints and structural instability is discussed in the chapter on constraints and kinematic analysis.
:::
