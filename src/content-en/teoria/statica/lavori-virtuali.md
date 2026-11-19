---
titolo: "Principle of virtual work"
sommario: "How to express equilibrium of a rigid-body system through the work done by the loads during displacements compatible with its constraints, and how to use that condition to find a support reaction, a bending moment, shear or axial force at a section, or a load that balances a mechanism."
---

## Virtual displacements

The equilibrium equations use forces and usually involve several unknown reactions together. The principle of virtual work expresses the same equilibrium condition through the work of the loads during imagined displacements of the structure. A suitable displacement isolates a single unknown.

:::richiamo{titolo="Infinitesimal displacements of a planar rigid body"}
Assumptions: a rigid body in the plane undergoing an infinitesimal displacement specified by the displacement $(u_O, v_O)$ of a point $O$ and the rotation $\varphi$, positive counterclockwise.

Result: the displacement of point $P = (x, y)$ is
$$
u = u_O - \varphi\,(y - y_O) ,
\qquad
v = v_O + \varphi\,(x - x_O) ;
$$
and if $\varphi \neq 0$ there is a unique stationary point, the center of rotation $C = (x_C, y_C)$, with $u = -\varphi\,(y - y_C)$ and $v = \varphi\,(x - x_C)$. See the chapter on planar rigid-body kinematics.
:::

:::definizione{#spostamento-virtuale titolo="Virtual displacement"}
Consider a structure made up of rigid bodies. A **virtual displacement** consists of an infinitesimal rigid displacement of each body that satisfies all the constraints. The symbol is $\delta$: $\delta u$ and $\delta v$ denote the horizontal and vertical displacement components of a point, and $\delta\varphi$ denotes a body's rotation. A displacement satisfying the constraints is **compatible**. A fixed pin remains stationary, a roller moves parallel to its contact surface, a fixed support prevents both displacement and rotation at its point, and an internal hinge has the same displacement on each of the two bodies it joins.

The displacement is imagined with the loads held fixed at their current values and is used only to express an equilibrium condition. A statically determinate structure admits only the zero virtual displacement. Removing one scalar constraint from a statically determinate structure produces a mechanism with one degree of freedom. All its virtual displacements are multiples of a single displacement.
:::

:::esempio{titolo="Beam with two rollers"}
The beam shown has a roller at $A = (0, 0)$ that moves along a horizontal surface and a roller at $B = (6, 0)$ that moves along a surface inclined at $45^\circ$. It has three degrees of freedom before the two scalar constraints are applied, leaving one degree of freedom. The displacement of $A$ is horizontal, so the center $C$ is on the vertical through $A$. The displacement of $B$ is parallel to the inclined surface, so $C$ also lies on the normal to that surface through $B$. These lines intersect at $C = (0, 6)$, and every virtual displacement is a rotation $\delta\varphi$ about this point: $\delta u_A = 6\,\delta\varphi$, $\delta v_A = 0$, and $B$ moves by $(6\,\delta\varphi, 6\,\delta\varphi)$ parallel to the surface.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,carrello;B,carrello,315" tratteggi="0,0 0,6 6,0;0.72,0 6.72,0.72" punti="0,6,C,centro" titolo="The normals to the two roller surfaces meet at the center of rotation $C$. The dashed line shows the displaced configuration with the displacement exaggerated"}

:::

:::attenzione
Virtual displacements are infinitesimal. A point rotating about the center moves perpendicular to the radius, and its displacement is measured on that tangent rather than along the circular arc. For the beam $AB$ rotating through $\delta\varphi$ about $A = (0, 0)$, the point $B = (6, 0)$ has $\delta u_B = 0$ and $\delta v_B = 6\,\delta\varphi$. A finite rotation of $10^\circ$ would also move $B$ horizontally by $6\,(1 - \cos 10^\circ) \approx 0.09\,\mathrm{m}$. That term is second order in the angle and does not enter the virtual work.
:::

## Virtual work of forces and couples

During a virtual displacement each load does work, calculated in the same way as the work of a constant force over a small displacement.

:::definizione{#lavoro-virtuale titolo="Virtual work"}
The **virtual work** of a force $\vec{F} = (F_x, F_y)$ applied at $P$ during the virtual displacement $(\delta u_P, \delta v_P)$ of $P$ is
$$
\delta L = F_x\,\delta u_P + F_y\,\delta v_P .
$$
The virtual work of a couple $\mathcal{M}$ on a body rotating through $\delta\varphi$ is $\delta L = \mathcal{M}\,\delta\varphi$, with $\mathcal{M}$ and $\delta\varphi$ positive counterclockwise. Work is positive when the force and its point's displacement act in the same direction. A downward force of $10\,\mathrm{kN}$, with $F_y = -10\,\mathrm{kN}$, applied at a point with $\delta v = -3\,\mathrm{m} \cdot \delta\varphi$ does work $\delta L = (-10) \cdot (-3\,\delta\varphi) = 30\,\mathrm{kN\,m} \cdot \delta\varphi$ because the point moves down in the direction of the force when $\delta\varphi > 0$.
:::

::::teorema{#lavoro-corpo-rigido titolo="Virtual work on a rigid body"}
A system of forces and couples acting on a rigid body has resultant $(R_x, R_y)$ and resultant moment $M_O$ about point $O$. During the rigid displacement $(\delta u_O, \delta v_O, \delta\varphi)$, its total virtual work is
$$
\delta L = R_x\,\delta u_O + R_y\,\delta v_O + M_O\,\delta\varphi .
$$
In particular, if the body rotates about center $C$, then $\delta L = M_C\,\delta\varphi$: the work of all the loads equals their moment about the center times the rotation. This is the form used in calculations. For a beam rotating about $A$, a downward force of $12\,\mathrm{kN}$ acting $8\,\mathrm{m}$ from $A$ has moment $M_A = -96\,\mathrm{kN\,m}$ and does work $-96\,\mathrm{kN\,m} \cdot \delta\varphi$.

:::dimostrazione
Sum the work of the forces $\vec{F}_i$ applied at $(x_i, y_i)$ and of the couples $\mathcal{M}_k$, using the rigid-body displacement formulas:
$$
\begin{aligned}
\delta L &= \sum_i \big[ F_{x,i}\,\big(\delta u_O - \delta\varphi\,(y_i - y_O)\big) + F_{y,i}\,\big(\delta v_O + \delta\varphi\,(x_i - x_O)\big) \big] + \sum_k \mathcal{M}_k\,\delta\varphi \\[6pt]
&= \Big( \sum_i F_{x,i} \Big) \delta u_O + \Big( \sum_i F_{y,i} \Big) \delta v_O + \Big[ \sum_i \big( (x_i - x_O)\,F_{y,i} - (y_i - y_O)\,F_{x,i} \big) + \sum_k \mathcal{M}_k \Big] \delta\varphi .
\end{aligned}
$$
The first two coefficients are the components of the resultant. The third is the resultant moment about $O$ because $(x_i - x_O)\,F_{y,i} - (y_i - y_O)\,F_{x,i}$ is the moment of $\vec{F}_i$ about $O$, positive counterclockwise. If $O = C$ is the center of rotation, then $\delta u_C = \delta v_C = 0$, leaving $\delta L = M_C\,\delta\varphi$.
:::
::::

:::osservazione{#lavoro-carico-distribuito titolo="Work of a distributed load"}
A vertical load $q(x)$, positive downward and applied along part of a single rigid body, does work
$$
\delta L = -\int q(x)\,\delta v(x)\,dx .
$$
On that body $\delta v(x) = \delta\varphi\,(x - x_C)$ is a linear function, so the integral equals $-Q\,\delta v(x_Q)$, where $Q$ is the resultant of the distributed load and $x_Q$ is the horizontal coordinate of the centroid of its load diagram. Thus, as in the equilibrium equations, the load can be replaced by its resultant. This follows from the theorem on virtual work on a rigid body. A load extending over two bodies must be split into one part on each body because the bodies undergo different displacements. For $q = 4\,\mathrm{kN/m}$ over a segment of length $6\,\mathrm{m}$ rotating about one end, the resultant $Q = 24\,\mathrm{kN}$ acts at a distance $3\,\mathrm{m}$ from the center and $\delta L = -24 \cdot 3\,\delta\varphi = -72\,\mathrm{kN\,m} \cdot \delta\varphi$.
:::

## Principle of virtual work for a rigid body

We first prove the principle for a free body and then for a constrained body, where the reactions drop out.

::::teorema{#plv-corpo-libero titolo="Principle of virtual work for a free rigid body"}
Consider a planar rigid body under a system of forces and couples. The system satisfies the equations of static equilibrium if and only if its virtual work is zero for every infinitesimal rigid-body displacement $(\delta u_O, \delta v_O, \delta\varphi)$.

The three equilibrium equations and the three work conditions therefore express the same requirement. The displacement $\delta u_O = 1$, $\delta v_O = 0$, $\delta\varphi = 0$ is a horizontal translation and reproduces horizontal force balance. A rotation about $A$ reproduces moment balance about $A$.

:::dimostrazione
By the theorem on virtual work on a rigid body, $\delta L = R_x\,\delta u_O + R_y\,\delta v_O + M_O\,\delta\varphi$. If the equilibrium equations hold, then $R_x = R_y = M_O = 0$, so $\delta L = 0$ for every displacement. Conversely, suppose $\delta L = 0$ for every displacement. Choosing $(\delta u_O, \delta v_O, \delta\varphi) = (1, 0, 0)$ gives $R_x = 0$, choosing $(0, 1, 0)$ gives $R_y = 0$, and choosing $(0, 0, 1)$ gives $M_O = 0$. These three conditions are exactly the equilibrium equations.
:::
::::

:::definizione{#vincoli-lisci titolo="Frictionless bilateral constraints"}
A scalar constraint prevents a point $P$ from moving along a direction $\vec{n}$ or prevents rotation. It is **bilateral** if it restricts motion in both senses along $\vec{n}$ and **frictionless** if its reaction acts along $\vec{n}$, with no component in the direction in which the point is free to move. A roller is frictionless when its contact surface exerts no friction, in which case the reaction is normal to the surface. All constraints in this chapter are frictionless and bilateral.
:::

::::teorema{#lavoro-reazioni titolo="Work done by the reactions of frictionless constraints"}
Suppose the constraints are frictionless and bilateral. Their reactions then do zero work for every compatible virtual displacement.

The reactions therefore do not appear in the principle of virtual work. A work equation contains only the reactions at restraints that have been removed.

:::dimostrazione
Consider a scalar constraint preventing point $P$ from moving in direction $\vec{n}$. Its reaction is $r\,\vec{n}$ because the constraint is frictionless, and any compatible displacement satisfies $\vec{n} \cdot \delta\vec{s}_P = 0$ because the constraint is bilateral. The work of the reaction is therefore $r\,\vec{n} \cdot \delta\vec{s}_P = 0$. A restraint against rotation exerts a reaction couple $m$ and imposes $\delta\varphi = 0$, so its work $m\,\delta\varphi$ vanishes.
:::
::::

:::richiamo{titolo="Rows of a matrix and its null space"}
Assumptions: $C$ is a matrix with $m$ rows and $k$ columns, and $\vec{f}$ is a vector in $\mathbb{R}^k$.

Result: $\vec{f}$ is a linear combination of the rows of $C$ if and only if $\vec{f} \cdot \vec{q} = 0$ for every $\vec{q}$ satisfying $C\vec{q} = \vec{0}$. In other words, the row space is the orthogonal complement of the null space. See the Linear Algebra chapters on linear systems and rank, and on inner products and orthogonality.
:::

::::teorema{#plv-corpo-vincolato titolo="Principle of virtual work for a constrained rigid body"}
Consider a planar rigid body with frictionless bilateral constraints under specified forces and couples. It is in equilibrium, meaning that there exist reactions which, together with the loads, satisfy the equilibrium equations, if and only if the virtual work of the specified loads vanishes for every compatible virtual displacement:
$$
\delta L = 0 .
$$
The condition makes no reference to the reactions. For a statically determinate body the only compatible displacement is zero, so the condition always holds, consistent with the existence of support reactions for every load. The principle becomes a calculation method when a constraint is released and the resulting mechanism is examined.

:::dimostrazione
Collect the three displacement components in $\vec{q} = (\delta u_O, \delta v_O, \delta\varphi)$ and the resultant force and moment of the loads in $\vec{f} = (R_x, R_y, M_O)$. The theorem on virtual work on a rigid body then gives $\delta L = \vec{f} \cdot \vec{q}$. Scalar constraint $j$ prevents point $P_j$ from moving along $\vec{n}_j$. The displacement $\vec{n}_j \cdot \delta\vec{s}_{P_j}$ is a linear function of $\vec{q}$ and can be written $\vec{a}_j \cdot \vec{q}$. The vectors $\vec{a}_j$ are the rows of the constraint matrix $C$, and a displacement is compatible if and only if $C\vec{q} = \vec{0}$.

The reaction $r_j\,\vec{n}_j$ does work $r_j\,\vec{a}_j \cdot \vec{q}$ for any $\vec{q}$. By the theorem on virtual work on a rigid body this also equals the dot product of $\vec{q}$ with the vector consisting of the reaction's resultant force and moment. Since the products agree for every $\vec{q}$, that vector equals $r_j\,\vec{a}_j$. The equilibrium equations for the loads and reactions are therefore
$$
\vec{f} + \sum_j r_j\,\vec{a}_j = \vec{0} ,
$$
and have a solution if and only if $\vec{f}$ is a linear combination of the rows of $C$. By the row-space result this holds if and only if $\vec{f} \cdot \vec{q} = 0$ for every $\vec{q}$ satisfying $C\vec{q} = \vec{0}$, or equivalently if and only if $\delta L = 0$ for every compatible virtual displacement.
:::
::::

## Rigid-body systems and mechanisms

The structures encountered in exams consist of several bodies connected by internal hinges. The principle applies to these systems as well, and the forces transmitted at the hinges drop out.

::::teorema{#plv-sistemi titolo="Principle of virtual work for a system of rigid bodies"}
Consider a planar system of $n$ rigid bodies with frictionless bilateral external and internal constraints, acted on by specified forces and couples. The system is in equilibrium, meaning that external reactions and internal constraint forces exist that satisfy the equilibrium equations of each body, if and only if
$$
\delta L = 0
$$
for every virtual displacement compatible with all the constraints, where $\delta L$ is the virtual work of the specified loads alone.

:::dimostrazione
Repeat the proof for a constrained body using the vector $\vec{q}$ in $\mathbb{R}^{3n}$ containing the three displacement components of every body and the vector $\vec{f}$ containing the load resultants and moments for every body. Each scalar constraint, external or internal, imposes a linear condition $\vec{a}_j \cdot \vec{q} = 0$. For example, at the internal hinge $K$ between bodies $1$ and $2$, the condition on horizontal displacement is $\delta u_K^{(2)} - \delta u_K^{(1)} = 0$, and the transmitted forces are $X_K$ on body $2$ and $-X_K$ on body $1$. Their work $X_K\,(\delta u_K^{(2)} - \delta u_K^{(1)})$ is precisely $X_K\,\vec{a}_j \cdot \vec{q}$. As for a single body, the equilibrium equations of all the bodies take the form $\vec{f} + \sum_j r_j\,\vec{a}_j = \vec{0}$, and the row-space result proves the assertion.
:::
::::

:::osservazione{#forze-interne-cerniera titolo="Forces at internal hinges"}
The proof uses the fact that the action and reaction at an internal hinge do zero total work because the hinge has the same displacement on both bodies. The principle can therefore be applied to the entire structure without separating the bodies. The forces $X_K$ and $Y_K$ are needed only when they are the unknowns being sought, in which case they are released at the hinge in the same way as an external reaction.
:::

:::definizione{#meccanismo titolo="Mechanism and displacement diagram"}
A **mechanism** is an unstable structure with one degree of freedom. Its virtual displacements depend on a single parameter, usually the rotation $\delta\varphi_1$ of one body, and can be described using absolute centers of rotation $C_1$, $C_2$, … and relative centers $C_{12}$, $C_{23}$, …. The relative centers relate the rotations of the bodies. Point $C_{12}$ has the same displacement on both bodies, so for bodies on a horizontal line
$$
\delta\varphi_1\,(x_{C_{12}} - x_{C_1}) = \delta\varphi_2\,(x_{C_{12}} - x_{C_2}) .
$$
On body $k$ the vertical displacement is $\delta v = \delta\varphi_k\,(x - x_{C_k})$ and the horizontal displacement is $\delta u = -\delta\varphi_k\,(y - y_{C_k})$. The **vertical displacement diagram** is therefore piecewise linear, with one segment per body and zero displacement on the vertical through that body's center. The diagram gives the displacements at the points of application of the vertical loads and hence their work. The geometric constructions for finding the centers are discussed in the chapters on planar rigid-body kinematics and kinematic analysis.
:::

:::esempio{titolo="Centers of a three-hinged portal frame with one reaction component released"}
The frame shown has fixed pins $A = (0, 0)$ and $B = (8, 0)$ and internal hinge $C = (4, 4)$. Releasing horizontal displacement at $B$ replaces the pin with a roller and turns the structure into a mechanism. The center $C_1$ of the left body is $A$ and the relative center is the hinge $C$. The center $C_2$ lies on the vertical through $B$ and, by the first kinematic chain theorem, on the line $AC$ with equation $y = x$, so $C_2 = (8, 8)$. Point $C$ moves by $(-4\,\delta\varphi_1, 4\,\delta\varphi_1)$ on body $1$ and by $(4\,\delta\varphi_2, -4\,\delta\varphi_2)$ on body $2$, so $\delta\varphi_2 = -\delta\varphi_1$, giving $\delta u_B = -\delta\varphi_2\,(0 - 8) = -8\,\delta\varphi_1$. The work done by a horizontal reaction at $B$ is $H_B\,\delta u_B$.

::struttura{nodi="A,0,0;D,0,4;C,4,4;E,8,4;B,8,0" aste="A-D;D-C;C-E;E-B" cerniere="C" vincoli="A,cerniera;B,carrello" tratteggi="0,0 8,8;8,0 8,8" punti="8,8,C_2,centro" titolo="The center $C_2$ of body $CEB$ lies where the vertical through $B$ meets the line through $C_1 = A$ and $C_{12} = C$"}

:::

## Determining a support reaction

In a statically determinate structure each reaction can be found from one equation by releasing the constraint that exerts it.

:::definizione{#spostamento-coniugato titolo="Conjugate displacement"}
Let $X$ be a scalar reaction or an internal force or moment at a section. Release the constraint transmitting $X$ and apply $X$ as a load to the points or bodies on which it originally acted. The **conjugate displacement** $\delta_X$ is the kinematic quantity for which the virtual work of $X$ equals $X\,\delta_X$. For support reactions:

- for reaction $R_B$ of a roller or two-force link, remove the support and take $\delta_X$ as the displacement of $B$ in the positive direction of $R_B$. For a vertical reaction, $\delta_X = \delta v_B$;
- for component $V_A$ of a pin, replace the pin by a roller that moves vertically, giving $\delta_X = \delta v_A$. For $H_A$, use a roller that moves horizontally, giving $\delta_X = \delta u_A$;
- for moment $M_A$ of a fixed support, replace the fixed support with a pin. Then $\delta_X = \delta\varphi_1$, the rotation of the formerly fixed body;
- for component $V_A$ or $H_A$ of a fixed support, replace the support with parallel links allowing translation along the component. Then $\delta_X$ is the displacement of $A$ in that direction.
:::

::::teorema{#calcolo-reazione titolo="Support reaction from virtual work"}
Consider a statically determinate rigid-body structure with frictionless bilateral restraints, and let $X$ be a scalar support reaction. Release the restraint transmitting $X$ and choose a nonzero virtual displacement of the resulting mechanism. Then
$$
X\,\delta_X + \delta L = 0 ,
\qquad\text{therefore}\qquad
X = -\frac{\delta L}{\delta_X} ,
$$
where $\delta L$ is the work of the specified loads. The value of $X$ is independent of the chosen displacement because $\delta L$ and $\delta_X$ are proportional to the same parameter.

:::dimostrazione
The released structure, subjected to the applied loads and the force $X$ treated as a load, is in equilibrium under the reactions at the remaining supports. These reactions and $X$ were the reactions of the original structure. By the principle of virtual work for rigid-body systems, the total work of the applied loads and $X$ vanishes for every displacement compatible with the remaining constraints, that is, $X\,\delta_X + \delta L = 0$. The conjugate displacement is nonzero. Otherwise the mechanism's motion would also satisfy the released constraint and the original structure would be unstable. Division by $\delta_X$ is therefore valid.
:::
::::

:::esempio{titolo="Reactions of an overhanging beam"}
The beam shown has a pin at $A = (0, 0)$, a roller at $B = (6, 0)$ and an overhang $BC$ of length $2\,\mathrm{m}$, with $q = 4\,\mathrm{kN/m}$ on $AB$ and a downward load $F = 12\,\mathrm{kN}$ at $C$.

::struttura{nodi="A,0,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera;B,carrello" carichi="A,B,0.6,0.6,q" forze="C,0,-1.8,F" quote="A,B,6 m,1;B,C,2 m,1" titolo="Overhanging beam with $q = 4\,\mathrm{kN/m}$ on $AB$ and $F = 12\,\mathrm{kN}$ at $C$"}

To find $R_B$, release the roller. The beam rotates about $A$ through $\delta\varphi$, with $\delta v_B = 6\,\delta\varphi$ and $\delta v_C = 8\,\delta\varphi$. The distributed load has a resultant of $24\,\mathrm{kN}$ acting $3\,\mathrm{m}$ from $A$. Then
$$
R_B \cdot 6\,\delta\varphi - 24 \cdot 3\,\delta\varphi - 12 \cdot 8\,\delta\varphi = 0 ,
\qquad
R_B = \frac{72 + 96}{6} = 28\,\mathrm{kN} .
$$
To find $V_A$, replace the pin with a roller that moves vertically. The beam rotates about $B$, with $\delta v_A = -6\,\delta\varphi$ and $\delta v_C = 2\,\delta\varphi$, and the load centroid at $x = 3$ has $\delta v = -3\,\delta\varphi$. Thus $-6\,V_A\,\delta\varphi + 24 \cdot 3\,\delta\varphi - 12 \cdot 2\,\delta\varphi = 0$, giving $V_A = 8\,\mathrm{kN}$ upward. The reactions sum to $36\,\mathrm{kN}$, equal to the total load $24 + 12$ as required by vertical force balance.

::struttura{nodi="A,0,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera" reazioni="B,0,1.8,R_B" carichi="A,B,0.6,0.6,q" forze="C,0,-1.8,F" tratteggi="0,0 8,-1.6" titolo="With the roller released, the beam rotates about $A$: $\delta v_B = 6\,\delta\varphi$ and $\delta v_C = 8\,\delta\varphi$ (dashed configuration for $\delta\varphi < 0$)"}

:::

## Internal forces and moments at a section

The same procedure gives the bending moment, shear force or axial force at a section $S$. Instead of removing an external restraint, release the component of beam continuity that transmits the desired internal force or moment.

:::definizione{#sconnessioni titolo="Single releases"}
A **release** at section $S$ replaces beam continuity with an internal connection imposing two scalar constraints. It transmits two of the three internal actions and allows the relative motion conjugate to the third:

- a **hinge** at $S$ transmits $N$ and $T$ and allows relative rotation. It is used to find $M$;
- a **parallel-link connection** with links parallel to the beam axis transmits $N$ and $M$ and allows relative sliding perpendicular to the axis. It is used to find $T$;
- an **axial sliding connection**, implemented by links perpendicular to the beam axis, transmits $T$ and $M$ and allows relative sliding along the axis. It is used to find $N$.

Apply the unknown action as a pair of equal and opposite loads on the two faces of $S$, using the positive directions defined in the chapter on internal forces and moments: $N > 0$ is positive in tension, $T > 0$ when it tends to rotate the element clockwise, and $M > 0$ when it puts the lower fibers in tension. The indices $s$ and $d$ denote the segments to the left and right of $S$.
:::

::::teorema{#momento-flettente-plv titolo="Bending moment from virtual work"}
Let $S$ be a section of a statically determinate beam. Insert a hinge at $S$ and consider a virtual displacement of the mechanism with rotations $\delta\varphi_s$ and $\delta\varphi_d$ of the two segments. Then
$$
M\,\Delta\varphi + \delta L = 0 ,
\qquad
\Delta\varphi = \delta\varphi_s - \delta\varphi_d .
$$
When $\Delta\varphi < 0$, the right segment rotates counterclockwise relative to the left. The two segments form a downward-pointing corner at the hinge, corresponding to tension in the lower fibers. The moment at $S$ is therefore $M = -\dfrac{\delta L}{\Delta\varphi}$.

:::dimostrazione
A positive bending moment acts counterclockwise on the left segment and clockwise on the right, so its work is $M\,\delta\varphi_s - M\,\delta\varphi_d = M\,\Delta\varphi$. The hinged beam under the applied loads and the two couples $M$ is in equilibrium with the original beam's support reactions. By the principle of virtual work for rigid-body systems the total work is zero.
:::
::::

:::esempio{titolo="Midspan moment of the overhanging beam"}
For the overhanging beam in the reaction example, find $M$ at $S = (3, 0)$. With a hinge at $S$, segment $AS$ rotates about $A$ through $\delta\varphi_s$ and segment $SC$ about $B$ through $\delta\varphi_d$. Point $S$ has the same displacement on both segments, $3\,\delta\varphi_s = (3 - 6)\,\delta\varphi_d$, so $\delta\varphi_d = -\delta\varphi_s$ and $\Delta\varphi = 2\,\delta\varphi_s$. The load over $AS$ has resultant $12\,\mathrm{kN}$ at $x = 1.5$, with $\delta v = 1.5\,\delta\varphi_s$. The load over $SB$ has resultant $12\,\mathrm{kN}$ at $x = 4.5$, with $\delta v = -\delta\varphi_s\,(4.5 - 6) = 1.5\,\delta\varphi_s$. At $C$ we have $\delta v_C = -2\,\delta\varphi_s$. Therefore
$$
\delta L = -12 \cdot 1.5\,\delta\varphi_s - 12 \cdot 1.5\,\delta\varphi_s + 12 \cdot 2\,\delta\varphi_s = -12\,\delta\varphi_s ,
\qquad
M = -\frac{-12\,\delta\varphi_s}{2\,\delta\varphi_s} = 6\,\mathrm{kN\,m} ,
$$
and the lower fibers are in tension. Equilibrium of segment $AS$ gives the same result $M = V_A \cdot 3 - 12 \cdot 1.5 = 24 - 18 = 6\,\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;S,3,0;B,6,0;C,8,0" aste="A-C" cerniere="S" vincoli="A,cerniera;B,carrello" coppie="2 0,1,M;4 0,-1,M" tratteggi="0,0 3,-0.9 6,0 8,0.6" titolo="With a hinge at $S$, segment $AS$ rotates about $A$ and segment $SC$ about $B$, with $\delta\varphi_d = -\delta\varphi_s$ (dashed displacement for $\delta\varphi_s < 0$)"}

:::

::::teorema{#taglio-plv titolo="Shear force from virtual work"}
Let $S$ be a section of a horizontal statically determinate beam. Insert a parallel-link connection at $S$ with its links parallel to the beam axis. Both segments rotate through the same angle and undergo relative vertical displacement. Then
$$
T\,\Delta v + \delta L = 0 ,
\qquad
\Delta v = \delta v_d - \delta v_s ,
$$
where $\delta v_s$ and $\delta v_d$ are the vertical displacements of $S$ on the left and right segments, respectively.

:::dimostrazione
Positive shear acts downward on the face of the left segment and upward on the face of the right segment, so its work is $-T\,\delta v_s + T\,\delta v_d = T\,\Delta v$. The parallel-link connection prevents relative rotation and axial sliding. The other two internal actions transmitted by the connection therefore do no work. The result follows from the principle of virtual work for rigid-body systems.
:::
::::

:::esempio{titolo="Shear in the overhanging beam"}
For the same beam, find $T$ at $S = (3, 0)$. Segment $AS$ rotates about $A$ and segment $SC$ about $B$ through the same angle $\delta\varphi$. Thus $\delta v_s = 3\,\delta\varphi$ and $\delta v_d = (3 - 6)\,\delta\varphi = -3\,\delta\varphi$, giving $\Delta v = -6\,\delta\varphi$. At the centroid of the load over $AS$ the displacement is $\delta v = 1.5\,\delta\varphi$. For the load over $SB$ it is $\delta v = -1.5\,\delta\varphi$, and $\delta v_C = 2\,\delta\varphi$:
$$
\delta L = -12 \cdot 1.5\,\delta\varphi + 12 \cdot 1.5\,\delta\varphi - 12 \cdot 2\,\delta\varphi = -24\,\delta\varphi ,
\qquad
T = -\frac{-24\,\delta\varphi}{-6\,\delta\varphi} = -4\,\mathrm{kN} .
$$
Equilibrium of segment $AS$ gives the same result $T = V_A - 4 \cdot 3 = 8 - 12 = -4\,\mathrm{kN}$.

::struttura{nodi="A,0,0;S,3,0;B,6,0;C,8,0" aste="A-C" interni="S,doppio-pendolo,0" vincoli="A,cerniera;B,carrello" forze="2.75 0,0,-1.2,T;3.25 0,0,1.2,T" tratteggi="0,0 3,0.9;3,-0.9 6,0 8,0.6" titolo="With parallel links at $S$ the segments remain parallel and move apart by $\Delta v = -6\,\delta\varphi$ (dashed displacement for $\delta\varphi > 0$)"}

:::

::::teorema{#sforzo-normale-plv titolo="Axial force from virtual work"}
Let $S$ be a section of a statically determinate beam. Insert an axial sliding connection at $S$, allowing the two segments to move relative to each other along the beam axis. Then
$$
N\,\Delta w + \delta L = 0 ,
\qquad
\Delta w = \delta w_s - \delta w_d ,
$$
where $\delta w_s$ and $\delta w_d$ are the axial displacements of $S$ on the two segments, positive from left to right. Equivalently, $N = \dfrac{\delta L}{\delta w_d - \delta w_s}$, where $\delta w_d - \delta w_s$ denotes the beam's extension at $S$.

:::dimostrazione
A tensile axial force pulls the left segment to the right and the right segment to the left, so its work is $N\,\delta w_s - N\,\delta w_d = N\,\Delta w$. The axial sliding connection prevents relative rotation and relative transverse displacement. Thus $T$ and $M$ do no work, and the result follows from virtual work.
:::
::::

:::esempio{titolo="Axial force due to a horizontal load"}
The beam shown has a pin at $A = (0, 0)$ and a roller at $B = (6, 0)$. At $x = 3$ there is a vertical force $F = 10\,\mathrm{kN}$, and at $B$ a leftward horizontal force $H = 5\,\mathrm{kN}$. To find $N$ at $S = (2, 0)$, insert an axial sliding connection. It requires equal rotations and equal vertical displacements of the two segments at $S$, so $SB$ moves like $AS$ with an additional horizontal translation. A rotation $\delta\varphi$ of $AS$ about $A$ would give $B$ a vertical displacement $6\,\delta\varphi$, which the roller prevents. Therefore $\delta\varphi = 0$, segment $AS$ remains stationary and $SB$ translates horizontally by $\delta w_d$. Thus $\Delta w = -\delta w_d$, the force $F$ does no work, and $H$ does work $-5\,\delta w_d$. The principle of virtual work gives
$$
N \cdot (-\delta w_d) - 5\,\delta w_d = 0 ,
\qquad
N = -5\,\mathrm{kN} ,
$$
indicating a compressive axial force. Horizontal force balance for the whole beam gives $H_A = 5\,\mathrm{kN}$ to the right, and segment $AS$ is in equilibrium with $H_A + N = 0$.

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-B" interni="S,doppio-pendolo,90" vincoli="A,cerniera;B,carrello" forze="B,-1.2,0,H;3 0,0,-1.2,F" frecce="3.8,0.5,5,0.5,δw_d" titolo="With an axial sliding connection at $S$, segment $SB$ translates horizontally and only the force $H$ does work"}

:::

:::osservazione{#coppia-nella-sezione titolo="Couple applied at the section"}
If section $S$ carries a concentrated couple $\mathcal{M}$, the bending moment jumps by $\mathcal{M}$, so distinguish the sections immediately to its left and right. With a hinge at $S$, assign the couple to the right segment to find the moment on the left, and to the left segment to find the moment on the right. Its work is $\mathcal{M}\,\delta\varphi_d$ or $\mathcal{M}\,\delta\varphi_s$, respectively. The same distinction applies to a concentrated force at a section where the shear is sought.

For a unit conjugate displacement, $\Delta\varphi = 1$ or $\Delta v = 1$, the vertical displacement diagram of the mechanism becomes the influence line of the desired quantity. This is the Müller-Breslau theorem, discussed in the chapter on influence lines.
:::

## Equilibrium of unstable structures

An unstable structure admits nonzero virtual displacements even before a restraint is released. The principle then determines which loads allow equilibrium.

::::teorema{#equilibrio-labili titolo="Equilibrium of an unstable structure"}
Consider a rigid-body structure with frictionless bilateral constraints and degree of kinematic instability $l$. Let $\delta\vec{q}_1, \dots, \delta\vec{q}_l$ be linearly independent compatible virtual displacements. The structure is in equilibrium under the specified loads if and only if the work of the loads vanishes for each displacement:
$$
\delta L(\delta\vec{q}_1) = 0 , \quad \dots , \quad \delta L(\delta\vec{q}_l) = 0 .
$$
For a mechanism, $l = 1$, and the condition is a single equation relating the loads. A load satisfying this condition is called a **balancing load** of the mechanism.

:::dimostrazione
Every compatible displacement is a linear combination $\sum_k c_k\,\delta\vec{q}_k$, and work is linear in displacement, so $\delta L = \sum_k c_k\,\delta L(\delta\vec{q}_k)$. The work vanishes for every compatible displacement if and only if it vanishes for each $\delta\vec{q}_k$. The result follows from the principle of virtual work for rigid-body systems.
:::
::::

:::esempio{titolo="Force balancing a beam with an internal hinge"}
The beam shown has a fixed pin at $A = (0, 0)$, an internal hinge at $B = (4, 0)$ and a roller at $C = (6, 0)$. Its overhang ends at $D = (8, 0)$. There are $n = 2$ bodies and $s = 5$ scalar constraints, and the centers $C_1 = A$, $C_{12} = B$ and $C_2 = C$ are collinear, so the structure is a mechanism. At $x = 2$ the force $F_1 = 10\,\mathrm{kN}$ acts downward. Find the vertical force $F_2$ at $D$ required for equilibrium. Matching the displacement of $B$ on the two bodies gives $4\,\delta\varphi_1 = (4 - 6)\,\delta\varphi_2$, hence $\delta\varphi_2 = -2\,\delta\varphi_1$, $\delta v(2) = 2\,\delta\varphi_1$ and $\delta v_D = (8 - 6)\,\delta\varphi_2 = -4\,\delta\varphi_1$. Taking $F_2$ as positive downward gives
$$
-10 \cdot 2\,\delta\varphi_1 - F_2 \cdot (-4\,\delta\varphi_1) = 0 ,
\qquad
F_2 = 5\,\mathrm{kN} ,
$$
downward. With this value, body $BD$ is in equilibrium as it rotates about $C$. The force of $5\,\mathrm{kN}$ exerted at $B$ by body $AB$ has a moment arm $2\,\mathrm{m}$ about $C$, the same as $F_2$.

::struttura{nodi="A,0,0;B,4,0;C,6,0;D,8,0" aste="A-D" cerniere="B" vincoli="A,cerniera;C,carrello" forze="2 0,0,-1.6,F_1;D,0,-1.6,F_2" tratteggi="0,0 4,1.2 6,0 8,-1.2" quote="A,B,4 m,1;B,C,2 m,1;C,D,2 m,1" titolo="Mechanism with $C_1 = A$ and $C_2 = C$: for $\delta\varphi_1 > 0$ the hinge $B$ rises and the overhang moves down"}

:::

:::attenzione
Three collinear hinges form a mechanism for infinitesimal displacements. Equilibrium is impossible if a load does nonzero work during that displacement. For a beam with fixed pins $A = (0, 0)$ and $B = (8, 0)$ and internal hinge $C = (4, 0)$, the mechanism has $\delta v_C = 4\,\delta\varphi_1$. A downward force $P$ at $C$ does work $-4P\,\delta\varphi_1$, which is nonzero for $\delta\varphi_1 \neq 0$, so the structure is not in equilibrium. A static calculation gives the same conclusion. With $P$ applied to body $AC$, moment balance of $AC$ about $A$ requires that $C$ receive a vertical force $Y_C = P$ from body $CB$, whereas moment balance of $CB$ about $B$ requires $Y_C = 0$.
:::
