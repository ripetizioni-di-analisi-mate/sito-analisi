---
titolo: "Constraints and kinematic analysis: instability and static determinacy"
sommario: "How to classify planar constraints by the displacements they prevent and the reactions they exert, and how to use constraint counting, the kinematic matrix and centers of rotation to distinguish unstable, statically determinate and statically indeterminate structures."
---

## External supports

The chapter on planar rigid-body kinematics considered constraints through their effect on the center of rotation. Here we classify and count constraints and use them to determine whether a structure can move.

:::definizione{#vincolo titolo="Constraints, scalar constraints and multiplicity"}
A **constraint** is a device that prevents certain displacements of a rigid body. An *external* constraint restricts displacement relative to the ground, whereas an *internal* constraint restricts displacement relative to another body. A **scalar constraint** prevents one displacement component: either a point's displacement in a specified direction or a rotation. The **multiplicity** of a constraint is the number of equivalent scalar constraints, that is, the number of independent conditions it imposes on displacements.

We assume frictionless, bilateral constraints and infinitesimal displacements. Under these assumptions a constraint exerts a reaction component for each displacement component that it prevents: a force in the direction of the restrained displacement or a moment if rotation is restrained. A constraint of multiplicity $m$ therefore introduces $m$ unknown reactions into the equilibrium equations.
:::

:::definizione{#vincoli-esterni titolo="External supports in the plane"}
- **Roller** (or sliding support) at $A$: point $A$ can move along the contact surface and the body can rotate about $A$, but $A$ cannot move normal to the surface. The multiplicity is $1$. The reaction $R_A$ is normal to the surface and its line of action passes through $A$.
- **Two-force link** at $A$: an unloaded rigid bar pinned to the body at $A$ and to the ground at its other end. It prevents $A$ from moving along the link axis. Its multiplicity is $1$ and its reaction acts along that axis. For infinitesimal displacements the link is equivalent to a roller whose travel direction is perpendicular to the link.
- **Pin** at $A$: both displacement components of $A$ are restrained, while rotation is free. The multiplicity is $2$. The reaction passes through $A$ and may act in any direction, with components $H_A$ and $V_A$.
- **Parallel-link support** at $A$: two parallel pin-ended links prevent rotation and translation parallel to the links while allowing translation perpendicular to them. The multiplicity is $2$. The reaction can be represented by a force parallel to the links along an unspecified line of action or, equivalently, by a parallel force at $A$ and a moment.
- **Fixed support** at $A$: all displacements of the body are restrained. Its multiplicity is $3$, with reaction components $H_A$ and $V_A$ and moment $M_A$.

Thus the support symbol identifies the unknown reactions. A beam with a pin at $A$ and a roller at $B$ on a horizontal surface receives the components $H_A$ and $V_A$ and the vertical reaction $R_B$ from the ground, for a total of three unknowns.

::struttura{nodi="A,0,0,-;A2,1.4,0,-;B,2.6,0,-;B2,4,0,-;C,5.2,0,-;C2,6.6,0,-;D,7.8,0,-;D2,9.2,0,-;E,10.4,0,-;E2,11.8,0,-" aste="A-A2;B-B2;C-C2;D-D2;E-E2" vincoli="A,carrello;B,pendolo;C,cerniera;D,doppio-pendolo;E,incastro,180" etichette="0.7,-1.5,roller support;3.3,-1.5,two-force link;5.9,-1.5,pin support;8.5,-1.5,parallel-link support;11.1,-1.5,fixed support" riferimento=0 titolo="External supports: roller and two-force link (multiplicity $1$), pin and parallel-link support (multiplicity $2$), fixed support (multiplicity $3$)"}

:::

## Internal constraints

:::definizione{#vincoli-interni titolo="Internal constraints"}
An internal constraint connects two bodies and prevents some of their *relative* displacements.
- **Internal hinge** at $C$: the displacement of $C$ is the same whether it is considered part of the first or the second body, while relative rotation is free. The multiplicity is $2$. At $C$ each body exerts on the other an equal and opposite force of arbitrary direction, with components $X_C$ and $Y_C$.
- **Internal two-force link**: an unloaded bar pinned to point $P_1$ of the first body and point $P_2$ of the second. It prevents the distance between $P_1$ and $P_2$ from changing, so relative displacement along the link axis is zero. The multiplicity is $1$, and the transmitted force acts along the axis.
- **Internal parallel-link connection**: two parallel links between the bodies prevent relative rotation and relative displacement along the links, while permitting relative sliding perpendicular to them. The multiplicity is $2$.
- **Rigid connection**: it prevents all relative displacement, so the two members act as one body. The multiplicity is $3$. Two members welded at a rigid joint, such as the crossbeam and column of a frame, belong to the same body.

::struttura{nodi="P,0,0,-;C,2,0,-;Q,4,0,-;P1,0,-1.6,-;R,2,-1.6,-;Q1,4,-1.6,-;P3,0,-3.2,-;S,2,-3.2,-;Q3,4,-3.2,-" aste="P-C;C-Q;P1-R;R-Q1;P3-S;S-Q3" cerniere="C" interni="R,pendolo,0;S,doppio-pendolo,0" etichette="2,0.55,internal hinge;2,-1.05,internal link;2,-2.55,internal parallel-link connection" riferimento=0 titolo="Internal constraints between two beam segments: internal hinge (multiplicity $2$), internal two-force link (multiplicity $1$) and internal parallel-link connection with horizontal links (multiplicity $2$)"}

:::

::::teorema{#cerniera-tra-piu-corpi titolo="Hinge joining several bodies"}
An internal hinge joining $k$ bodies is equivalent to $k - 1$ simple hinges and therefore has multiplicity $2(k - 1)$. A fixed pin joining $k$ bodies has multiplicity $2k$.

A typical example is a frame or truss joint where several pin-connected members meet. Three bars meeting at a common hinge give $s = 2 \cdot (3 - 1) = 4$ scalar constraints, and two bars connected to the same fixed pin give $s = 4$.

:::dimostrazione
The common point $P$ has a displacement as a point of each of the $k$ bodies. The hinge requires all these displacements to be equal. Take the first body as reference and require the displacement of $P$ on each of the other $k - 1$ bodies to equal that on the first. This gives $k - 1$ vector equalities or $2(k - 1)$ scalar conditions. The conditions are independent because each pair of equalities contains the parameters of a different body. The rotations remain free, so the multiplicity is $2(k - 1)$. If the pin is fixed, the displacement of $P$ on each of the $k$ bodies must vanish, giving $k$ vector equalities or $2k$ scalar conditions.
:::
::::

## Counting constraints and classifying structures

:::definizione{#gradi-di-liberta titolo="Degrees of freedom and scalar constraints of a structure"}
A rigid body in the plane has $3$ degrees of freedom. Its displacement is determined by the two components $u_O$ and $v_O$ at a reference point $O$ and by its rotation $\varphi$. A structure comprising $n$ rigid bodies therefore has $3n$ degrees of freedom before constraints are imposed. Let $s$ denote the number of scalar constraints, the sum of the multiplicities of all external and internal constraints.

Count the bodies by separating the structure at every internal connection other than a rigid joint. Members joined rigidly belong to the same body. A portal frame with two columns rigidly connected to a crossbeam, fixed at the base of the left column and supported on a roller at the base of the right column, is one body with $s = 3 + 1 = 4$.
:::

:::definizione{#grado-di-labilita titolo="Degrees of kinematic instability and static indeterminacy"}
The **degree of kinematic instability** $l$ is the number of independent parameters needed to describe the infinitesimal displacements compatible with the constraints. If $l = 0$, the only compatible displacement is zero. The **degree of static indeterminacy** $i$ is the number of independent systems of support or connection reactions that are in equilibrium in the absence of loads. If $i > 0$, equilibrium does not uniquely determine the reactions: any multiple of a self-equilibrated system can be added to a solution.

Thus $l$ counts the independent motions permitted by the constraints, and $i$ counts redundant scalar constraints. A cantilever with a roller at its free end has $l = 0$ because the fixed support alone prevents every displacement. It has $i = 1$ because the roller reaction and the fixed-end reactions that balance it form a system in equilibrium without any applied load.
:::

:::definizione{#classificazione-strutture titolo="Unstable, statically determinate and statically indeterminate structures"}
A structure is
- **unstable** if $l > 0$: the constraints permit at least one motion, and equilibrium is possible only for particular loads;
- **statically determinate** if $l = 0$ and $i = 0$: no motion is possible and the equilibrium equations give a unique set of reactions for any load;
- **statically indeterminate** if $l = 0$ and $i > 0$: no motion is possible, but the equilibrium equations alone do not determine the reactions.

An unstable structure can also have $i > 0$ and is then both unstable and statically indeterminate. The reactions of statically determinate structures are calculated in the chapter on static equilibrium.
:::

## Kinematic matrix and the relation between instability and static indeterminacy

Each scalar constraint imposes one linear equation on the displacement parameters. Taken together, these equations determine the kinematic behavior of the structure.

:::definizione{#matrice-cinematica titolo="Kinematic matrix"}
For body $j$, choose a reference point $O_j$ and take its displacement components $u_j$ and $v_j$ and the rotation $\varphi_j$ as parameters. From the kinematics of planar rigid-body systems, the displacement of point $P$ of body $j$ is
$$
u_P = u_j - \varphi_j\,(y_P - y_{O_j}) ,
\qquad
v_P = v_j + \varphi_j\,(x_P - x_{O_j}) .
$$
A roller or two-force link at $P$ with reaction directed along the unit vector $\hat n = (n_x, n_y)$ imposes $n_x u_P + n_y v_P = 0$. A restraint against rotation imposes $\varphi_j = 0$. An internal constraint imposes the corresponding conditions on the relative displacement of the two bodies. This gives $s$ homogeneous linear equations in the $3n$ parameters, written $A\,\mathbf{q} = \mathbf{0}$. The matrix $A$, with $s$ rows and $3n$ columns, is the **kinematic matrix** of the structure.

For a beam $AB$ of span $L$ with a pin at $A$, a roller at $B$ on a horizontal surface and reference point at $A$, the conditions are $u_A = 0$, $v_A = 0$ and $v_B = v_A + \varphi L = 0$. Thus
$$
A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & L \end{pmatrix} ,
\qquad
\det A = L \neq 0 ,
$$
and the system has only the zero solution, so the beam cannot move.
:::

:::richiamo{titolo="Rank and homogeneous linear systems"}
Let $A$ be a matrix with $m$ rows, $k$ columns and rank $r$. The solutions of $A\,\mathbf{q} = \mathbf{0}$ form a subspace of dimension $k - r$, and the transpose $A^{T}$ has the same rank $r$. See the chapter on linear systems and rank in Linear Algebra.
:::

::::teorema{#relazione-labilita-iperstaticita titolo="Relation between degrees of freedom, constraints, instability and static indeterminacy"}
Consider a planar structure comprising $n$ rigid bodies with $s$ frictionless, bilateral scalar constraints, and let $r$ be the rank of its kinematic matrix $A$. Then
$$
l = 3n - r ,
\qquad
i = s - r ,
$$
and therefore
$$
3n - s = l - i .
$$
In particular, the structure is statically determinate if and only if $s = 3n$ and $\det A \neq 0$.

This relation gives either degree when the other is known. A beam with a fixed support at $A$ and a pin at $B$ has $3n - s = 3 - 5 = -2$. The fixed support alone prevents every displacement, so $l = 0$ and hence $i = 2$.

:::dimostrazione
The proof uses the fact that the coefficient matrix of the equilibrium equations is the transpose of $A$.

Displacements compatible with the constraints are the solutions of $A\,\mathbf{q} = \mathbf{0}$, which form a subspace of dimension $3n - r$. Therefore $l = 3n - r$.

Consider the reaction $R$ of a roller at point $P$ of body $j$ directed along $\hat n$. In the equilibrium equations of body $j$, namely horizontal force balance, vertical force balance and moment balance about the reference point $O_j$, the reaction has coefficients
$$
n_x ,
\qquad
n_y ,
\qquad
n_y\,(x_P - x_{O_j}) - n_x\,(y_P - y_{O_j}) ,
$$
where the third coefficient is the signed moment arm of the force about the reference point. The kinematic condition for the same roller is
$$
n_x u_P + n_y v_P = n_x u_j + n_y v_j + \big[\, n_y\,(x_P - x_{O_j}) - n_x\,(y_P - y_{O_j}) \,\big]\,\varphi_j = 0 ,
$$
so the corresponding row of $A$ has the same coefficients in the columns for $u_j$, $v_j$ and $\varphi_j$, and zeros elsewhere. The same argument applies to a restraint against rotation, whose reaction moment appears only in the moment equation, and to an internal constraint. Its row has opposite coefficients for the two bodies, just as its reaction acts in opposite directions on them. Let $\mathbf{R}$ denote the vector of $s$ reactions and $\mathbf{f}$ the vector of load resultants and moments. The $3n$ equilibrium equations can then be written
$$
A^{T}\,\mathbf{R} + \mathbf{f} = \mathbf{0} .
$$
Self-equilibrated reaction systems with no applied loads are the solutions of $A^{T}\mathbf{R} = \mathbf{0}$. The matrix $A^{T}$ has $s$ columns and rank $r$, so its solution space has dimension $s - r$ and $i = s - r$. Subtracting the two equalities gives $l - i = 3n - s$.

If the structure is statically determinate, then $l = i = 0$, so $r = 3n = s$ and $A$ is square with nonzero determinant. Conversely, if $s = 3n$ and $\det A \neq 0$, then $r = 3n$ and hence $l = i = 0$.
:::
::::

:::osservazione{#condizione-necessaria titolo="Constraint counting gives a necessary condition"}
Since $l \ge 0$ and $i \ge 0$, the relation $3n - s = l - i$ implies $l \ge 3n - s$ and $i \ge s - 3n$. There are three cases.
- If $s < 3n$, the structure is unstable, with $l \ge 3n - s$.
- If $s > 3n$, the structure has $i \ge s - 3n$ and is either statically indeterminate or both unstable and statically indeterminate.
- If $s = 3n$, then $l = i$. The structure is statically determinate if $l = 0$ and both unstable and statically indeterminate if $l > 0$.

Thus $s = 3n$ is *necessary* for static determinacy but not *sufficient*. To reach a conclusion, we must verify $l = 0$ from the rank of the kinematic matrix or by the method of centers.
:::

:::attenzione
The count $s = 3n$ alone does not establish static determinacy. A beam on three rollers with horizontal travel directions has $n = 1$ and $s = 3 = 3n$, yet it can translate horizontally because none of the rollers restrains horizontal displacement. Thus $l = 1$ and, from the relation above, $i = 1$. The three vertical reactions appear in only two effective equilibrium equations, vertical force balance and moment balance. A horizontal force applied to the beam cannot be balanced.
:::

## Center of rotation imposed by the constraints

The kinematic matrix grows as the number of bodies increases. The method of centers reaches the same conclusion by geometric construction, starting from the locations permitted for the center of rotation by each constraint.

:::richiamo{titolo="Center of rotation and the effect of constraints"}
An infinitesimal rigid-body displacement with $\varphi \neq 0$ is a rotation about a unique point $C$, the center of rotation. The displacement of any point $P$ is perpendicular to $CP$. A translation is a rotation about the point at infinity in the direction perpendicular to the displacements. For a body undergoing a nonzero displacement:
- a pin at $A$ requires the center to be $A$;
- a roller or two-force link at $A$ requires the center to lie on the line of action of its reaction, possibly at the point at infinity on that line;
- a parallel-link support permits only translation perpendicular to the links, so the center is the point at infinity in the direction of the links;
- a fixed support permits no nonzero displacement.

See the chapter on planar rigid-body kinematics.
:::

::::teorema{#corpo-con-due-centri titolo="Body with two distinct centers"}
If the constraints require the center of rotation of a rigid body to coincide with two distinct points, either finite or at infinity, then the body is stationary.

A beam with a pin at $A$ and a roller at $B$ on a horizontal surface is stationary. Its center would have to be $A$ and lie on the vertical through $B$, which does not pass through $A$.

:::dimostrazione
A nonzero displacement has only one center. If $\varphi \neq 0$, the center is the unique point with zero displacement. If $\varphi = 0$, the body translates by $\vec{t} \neq \vec{0}$ and the center is the unique point at infinity in the direction perpendicular to $\vec{t}$. Two distinct centers are therefore possible only when the displacement is zero.
:::
::::

::::teorema{#tre-vincoli-semplici titolo="Body with three scalar constraints"}
A rigid body restrained by three rollers or two-force links, with reaction lines of action $r_1$, $r_2$ and $r_3$, is statically determinate if and only if the three lines have no common point, finite or at infinity. Equivalently, they must neither be concurrent nor all be parallel.

A pin is equivalent to two links in different directions whose axes pass through the pin, and a parallel-link support is equivalent to two parallel links. Two common cases follow:
- a body with a pin at $A$ and a roller at $B$ is statically determinate if and only if the roller's reaction line does not pass through $A$;
- a body with a parallel-link support and a roller is statically determinate if and only if the roller reaction is not parallel to the links.

:::dimostrazione
If the three lines pass through a finite point $C$, rotation about $C$ displaces each constrained point perpendicular to the line joining it to $C$, hence along its permitted travel direction. Rotation is therefore compatible with all three constraints and the body is unstable. If the three lines are parallel, translation perpendicular to them is compatible with all three constraints and the body is again unstable.

Conversely, suppose the three lines have no common point and the body undergoes a nonzero displacement. The center of rotation would then have to lie on $r_1$, $r_2$ and $r_3$ because of the constraints imposed by the rollers and links. This would give a point common to all three lines, contrary to the assumption. Therefore $l = 0$, and since $s = 3 = 3n$, the relation $3n - s = l - i$ gives $i = 0$.
:::
::::

## Improperly arranged constraints

:::definizione{#vincoli-mal-disposti titolo="Improperly arranged constraints"}
Constraints are **improperly arranged** when their number is sufficient, with $s \ge 3n$, but they still allow a nonzero displacement. The kinematic matrix then has rank $r < 3n$. For $s = 3n$ we have $\det A = 0$, and the structure is both unstable and statically indeterminate, with $l = i \ge 1$. For a single body, the typical arrangements follow from the theorem for three scalar constraints:
- three rollers or two-force links with parallel reaction lines;
- three rollers or two-force links with reaction lines concurrent at a point;
- a pin and a roller whose reaction line passes through the pin;
- a parallel-link support and a roller whose reaction is parallel to the links.

For a multibody structure a typical example is an arch with three collinear hinges.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello,0" tratteggi="0,0 5,0.9;-0.6,0 5.8,0" frecce="5,0,5,0.85,v_B" titolo="Pin at $A$ and roller at $B$ with horizontal reaction acting through $A$. The beam can rotate about $A$ because $B$ can move vertically along its support surface"}

::struttura{nodi="A,0,0;D,4,0;B,8,0" aste="A-D;D-B" vincoli="A,pendolo,225;B,pendolo,315;D,carrello" tratteggi="0,0 4,4;8,0 4,4;4,0 4,4" punti="4,4,C,centro" titolo="Three scalar constraints with reaction lines concurrent at $C$. The beam can rotate about $C$"}

:::

## Chains of rigid bodies and the method of centers

:::richiamo{titolo="Kinematic chain theorems"}
If two bodies $1$ and $2$ undergo displacements with rotations that are not both zero, their absolute centers $C_1$ and $C_2$ and relative center $C_{12}$ are collinear. With finite absolute centers, $\varphi_1\,\overrightarrow{C_1 C_{12}} = \varphi_2\,\overrightarrow{C_2 C_{12}}$ holds (first theorem). For three bodies $1$, $2$ and $3$, the relative centers $C_{12}$, $C_{23}$ and $C_{13}$ are collinear (second theorem). See the chapter on planar rigid-body kinematics.
:::

:::teorema{#centri-relativi titolo="Relative center imposed by an internal constraint"}
Let $1$ and $2$ be two bodies undergoing a nonzero relative displacement.
- If they are connected by an internal hinge at $C$, their relative center is $C_{12} = C$.
- If they are connected by an internal two-force link, $C_{12}$ lies on the link axis.
- If they are connected by an internal parallel-link connection, $C_{12}$ is the point at infinity in the direction of the links because their relative displacement is a translation perpendicular to those links.

This follows by applying the conditions that external supports impose on a center of rotation to the relative displacement of the two bodies.
:::

::::teorema{#metodo-dei-centri titolo="Method of centers"}
Suppose a multibody structure can move. Determine its absolute centers from the external supports and its relative centers from the internal constraints. If these conditions, together with the kinematic chain theorems, require each body to have two distinct centers, every body is stationary and the structure is kinematically stable.

In practice, list the possible locations of the center for each body: specified points, lines or lines through known centers. A body is stationary if these possible locations have no point in common.

:::dimostrazione
By the theorem on a body with two distinct centers, the displacement of every body is zero. The only displacement compatible with the constraints is therefore zero, so $l = 0$.
:::
::::

:::osservazione{#corpo-fermo-come-suolo titolo="A stationary body can be treated as ground"}
Once a body is known to be stationary, its internal connections to other bodies act as external supports for those bodies. An internal hinge attached to a stationary body becomes a fixed pin for the other body, and an internal parallel-link connection becomes an external parallel-link support. The analysis can therefore proceed in stages. Identify a part of the structure attached to ground in a statically determinate manner and hence stationary, treat it as part of the ground, then examine the bodies connected to it.

If a set of centers compatible with all the constraints can be found for a motion, the structure is unstable, and the first kinematic chain theorem relates the rotations of the bodies.
:::

:::esempio{titolo="Two-body Gerber beam"}
The beam shown comprises cantilever $AC$, fixed at $A = (0, 0)$, and beam $CD$, connected to the cantilever by the internal hinge $C = (3, 0)$ and supported at $D = (7, 0)$ by a roller with horizontal travel. We have $n = 2$ and $s = 3 + 2 + 1 = 6 = 3n$. The cantilever is stationary because of its fixed support. Point $C$ is therefore stationary, so the internal hinge acts as a fixed pin for body $CD$. The center of $CD$ would have to be $C$ and lie on the vertical through $D$, which does not pass through $C$. Thus $CD$ is also stationary, $l = 0$ and, from $3n - s = l - i$, $i = 0$. The beam is therefore **statically determinate**.

::struttura{nodi="A,0,0;C,3,0;D,7,0" aste="A-C;C-D" vincoli="A,incastro,180;D,carrello" cerniere="C" quote="A,C,3 m;C,D,4 m" titolo="Gerber beam comprising fixed cantilever $AC$ and supported beam $CD$"}

:::

## Three-hinged arches, Gerber beams and portal frames

::::teorema{#arco-a-tre-cerniere titolo="Three-hinged arch"}
Let two rigid bodies $1$ and $2$ be pinned to the ground at $A$ and $B$ and joined by an internal hinge at $C$. The structure is statically determinate if and only if $A$, $B$ and $C$ are not collinear. If they are collinear, the structure is both unstable and statically indeterminate, with $l = i = 1$.

The shape of the two bodies does not affect this result, so the theorem applies to arches, three-hinged portal frames and inclined beams.

::struttura{nodi="A,0,0;D,0,4;C,3,4;E,6,4;B,6,0" aste="A-D;D-C;C-E;E-B" vincoli="A,cerniera;B,cerniera" cerniere="C" tratteggi="0,0 3,4 6,0" quote="A,B,6 m,0.9;B,E,4 m" titolo="Three-hinged frame: $A$, $B$ and $C$ are not collinear, so the frame is statically determinate"}

::struttura{nodi="A,0,0;C,4,0;B,8,0" aste="A-C;C-B" vincoli="A,cerniera;B,cerniera" cerniere="C" tratteggi="0,0 4,1.2 8,0" frecce="4,0,4,1.15,v_C" quote="A,C,4 m;C,B,4 m" titolo="Three collinear hinges: with $\varphi_2 = -\varphi_1$ the two segments move into the dashed configuration, so the beam is unstable"}


:::dimostrazione
Here $n = 2$ and $s = 2 + 2 + 2 = 6 = 3n$, so it suffices to determine whether $l = 0$. Suppose there is a nonzero displacement. If body $1$ is stationary, point $C$ is stationary and body $2$ has two distinct centers, $B$ and $C$. Thus body $2$ is also stationary. The same argument applies with the bodies interchanged. If both bodies move, their absolute centers are $C_1 = A$ and $C_2 = B$ and the relative center is $C_{12} = C$. By the first kinematic chain theorem the three points must be collinear. Thus if $A$, $B$ and $C$ are not collinear, the only displacement is zero and the structure is statically determinate.

If instead $A$, $B$ and $C$ lie on a line $r$, rotate the bodies about $A$ and $B$ through $\varphi_1$ and $\varphi_2$. Viewed as a point on either body, $C$ moves perpendicular to $r$. Let $a$ and $b$ be the signed coordinates of $C$ along $r$, measured from $A$ and $B$. The displacement of $C$ is $\varphi_1 a$ as a point of body $1$ and $\varphi_2 b$ as a point of body $2$. Taking $\varphi_2 = \dfrac{a}{b}\,\varphi_1$ makes the two displacements equal, so there is a nonzero displacement depending on the single parameter $\varphi_1$. Therefore $l = 1$ and, from the relation $3n - s = l - i$, $i = 1$.
:::
::::

:::definizione{#trave-gerber titolo="Gerber beam"}
A **Gerber beam** is a straight beam on multiple supports made statically determinate by internal hinges. A continuous beam with one pin and $k - 1$ rollers, for a total of $k$ supports, is one body with $s = k + 1$ and is statically indeterminate to degree $i = k - 2$. Each internal hinge adds one body and two scalar constraints, increasing $3n - s$ by one. To reach $3n - s = 0$ we therefore need $k - 2$ internal hinges.

The hinge count gives only a necessary condition. The hinges must be placed so that the beam can be analyzed in stages, starting with a *supporting beam* attached to the ground in a statically determinate manner, then proceeding to the *supported spans* that rest on it. For example, a beam on four supports with a fixed pin at the left end and both internal hinges in the first span is unstable.
:::

:::osservazione{#maglia-chiusa titolo="Frames with closed loops"}
The count assumes that no body contains a closed loop. A closed frame with rigid joints can be opened by cutting any cross section. The cut removes a rigid connection, equivalent to three scalar constraints, and leaves one open body. The two cut faces belong to the same rigid body. The three constraints of the connection therefore remove no further motion and increase the degree of static indeterminacy by three. A closed four-sided frame with a pin and a roller consequently has $l = 0$ and $i = 3$. Each hinge inserted into the loop reduces $i$ by one. With three noncollinear hinges the loop is internally statically determinate, like a triangle made of three pin-connected bars.

::struttura{nodi="A,0,0;B,5,0;C,5,3;D,0,3" aste="A-B;B-C;C-D;D-A" vincoli="A,cerniera;B,carrello" quote="A,B,5 m,0.9;B,C,3 m" titolo="Closed frame with rigid joints: $n = 1$, $s = 3$ external constraints and $3$ constraints from the rigid connection closing the loop, giving $l = 0$ and $i = 3$"}

:::
