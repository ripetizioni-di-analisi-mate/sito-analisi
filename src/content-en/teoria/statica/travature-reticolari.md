---
titolo: "Trusses: the method of joints and Ritter's method of sections"
sommario: "How to identify a statically determinate truss and find the forces in its members using joint equilibrium and Ritter's method of sections."
---

## The truss model

Trusses are lightweight structures made from slender members arranged in triangles. Examples include roof trusses, bridges, lattice towers, and cranes. The following model reduces their analysis to the equilibrium of individual points.

:::definizione{#travatura-reticolare titolo="Truss"}
A planar **truss** is an assembly of members connected at their ends at points called **joints**. The model makes the following assumptions.

- The members are straight. Their self-weight is negligible or has already been apportioned among the joints.
- The joints are ideal frictionless pins, so each member can rotate freely at its ends.
- External loads and support reactions act only at joints.

Let $n$ denote the number of joints, $a$ the number of members, and $v$ the number of external scalar restraints (a pin support counts as $2$, a roller or link as $1$). Actual trusses have welded or bolted joints. Even so, the pin-jointed model provides a good estimate of member forces when the members are slender and loads are applied at the joints, and it forms the basis for sizing the members.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;F-C;H-C" reticolare=1 vincoli="A,cerniera;E,carrello" forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;D,E,3 m,1.3;12 0,12 4,4 m,0.8" titolo="Truss with $n = 8$ joints, $a = 13$ members, and $v = 3$ external scalar restraints, loaded at the top-chord joints"}

:::

::::teorema{#aste-solo-sforzo-normale titolo="Truss members carry axial force only"}
Under the model assumptions, each member of a truss in equilibrium is subject to two equal and opposite forces. These act at its ends along its axis. The member is therefore in tension or compression, and the only internal force at any section is an axial force that is constant along the member. Such a member is called a **two-force member**. A single number thus describes its internal loading.

:::dimostrazione
A body in equilibrium under just two forces must have both forces on the same line of action. Isolate member $AB$. No loads act along it and its weight is negligible, so the only forces on it come from pins $A$ and $B$. Because the pins are frictionless, they transmit no couples. The two forces on the member are therefore $\vec{F}_A$ at $A$ and $\vec{F}_B$ at $B$. Force equilibrium gives $\vec{F}_B = -\vec{F}_A$. Taking moments about $A$ requires the moment of $\vec{F}_B$ about $A$ to be zero, so the line of action of $\vec{F}_B$ passes through $A$. Both forces therefore act along line $AB$, which is the axis of a straight member. If the member is cut at any section, equilibrium of either part requires an axial force equal to $|\vec{F}_A|$ at the cut. The axial force is therefore the same at every section.
:::
::::

:::definizione{#sforzo-nelle-aste titolo="Member force and sign convention"}
The **member force** $N_{AB}$ in member $AB$ is its constant axial force, positive in **tension** and negative in **compression**. At joint $A$ the member exerts the force
$$
\vec{N}_{AB} \text{ applied at } A = N_{AB}\,\hat{e}_{AB} ,
\qquad
\hat{e}_{AB} = \frac{\overrightarrow{AB}}{L_{AB}} ,
$$
where $\hat{e}_{AB}$ is the unit vector directed from $A$ toward $B$ and $L_{AB}$ is the length of the member. A tension member *pulls* its joints toward itself, whereas a compression member *pushes* them away. This convention lets us write the joint equations with all unknown member forces assumed tensile. The sign of each result then identifies tension or compression. For example, $N_{AB} = -20\,\mathrm{kN}$ means that member $AB$ carries a compressive force of magnitude $20\,\mathrm{kN}$.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" reticolare=1 forze="-1.3 0,-1.3,0,;5.3 0,1.3,0," etichette="-1.1,0.35,N_AB;4.6,0.35,N_AB" riferimento=0 titolo="Member in tension. The joints pull outward on its ends with forces of magnitude $N_{AB} > 0$. The member exerts an equal and opposite force on each joint, directed toward the member"}

:::

## Counting members and restraints

Before finding member forces, check whether the truss is statically determinate. The count follows from that for a system of rigid bodies.

:::richiamo{titolo="Counting restraints in a system of rigid bodies"}
A planar system of $c$ rigid bodies has $3c$ degrees of freedom before restraints are introduced. If $s$ is the number of scalar restraints, $l$ the degree of kinematic instability, and $i$ the degree of static indeterminacy, then $3c - s = l - i$. A pin connecting $k$ bodies provides the equivalent of $2(k - 1)$ scalar restraints. The chapter on constraints and kinematic analysis uses $n$ for the number of bodies. Here $n$ denotes the number of joints.
:::

::::teorema{#regola-2n titolo="The condition 2n = a + v"}
Consider a truss with $n$ joints, $a$ members, and $v$ external scalar restraints. Let $l$ and $i$ denote its degrees of kinematic instability and static indeterminacy. Then
$$
2n - (a + v) = l - i .
$$
The condition $2n = a + v$ is therefore *necessary* for the truss to be statically determinate ($l = i = 0$). If $2n > a + v$, the truss is unstable. If $2n < a + v$, it is statically indeterminate. For the Pratt truss of span $12\,\mathrm{m}$ carrying three forces $P$, $2n = 16$ and $a + v = 13 + 3 = 16$, so the condition holds.

:::dimostrazione
Treat each member as a rigid body. There are $c = a$ bodies and $3a$ degrees of freedom. Now count scalar restraints. At joint $j$, the $k_j$ members meet at a pin equivalent to $2(k_j - 1)$ scalar restraints. There are also $v$ external restraints. Each member has two ends, so $\sum_j k_j = 2a$, giving
$$
s = \sum_{j = 1}^{n} 2(k_j - 1) + v = 4a - 2n + v .
$$
Substitution into $3c - s = l - i$ gives $3a - 4a + 2n - v = l - i$, or $2n - (a + v) = l - i$. If $2n > a + v$, then $l - i > 0$ and hence $l \geq 1$. If $2n < a + v$, then $i \geq 1$.
:::
::::

:::attenzione
The condition $2n = a + v$ is not sufficient. The truss shown has $n = 6$, $a = 9$, and $v = 3$, giving $2n = a + v = 12$. The first panel has two diagonals and the second has none. The quadrilateral $BCGE$ can change shape as its members rotate at their joints, so the truss is unstable ($l = 1$). One member in the first panel is redundant, so the truss is also statically indeterminate ($i = 1$). The arrangement of the members and supports must be checked along with the count.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,0,3;E,3,3;G,6,3" aste="A-B;B-C;D-E;E-G;A-D;B-E;C-G;A-E;B-D" reticolare=1 vincoli="A,cerniera;C,carrello" quote="A,B,3 m,1.3;B,C,3 m,1.3" titolo="$2n = a + v$, but panel $BCGE$ is a pin-jointed quadrilateral. The truss has both a mechanism and a redundant restraint"}

:::

:::definizione{#travatura-semplice titolo="Simple truss"}
A **simple truss** is built by starting with three members forming a triangle and adding one joint at a time, connected to existing joints by two *noncollinear* members. The triangle has $3$ joints and $3$ members. Each step adds one joint and two members, so for a simple truss
$$
a = 2n - 3 .
$$
Pratt, Howe, and Warren trusses, including the truss of span $12\,\mathrm{m}$ carrying three forces $P$, are simple trusses. They can be built up starting from the triangle at one support and working toward the other.
:::

::::teorema{#travatura-semplice-isostatica titolo="Static determinacy of simple trusses"}
A simple truss acts as a single rigid body. It is statically determinate if it has $v = 3$ properly arranged external scalar restraints, meaning that the reaction lines of action are neither all parallel nor concurrent at one point. The condition $2n = a + v$ then holds because $a + v = 2n - 3 + 3$.

:::dimostrazione
The initial triangle is rigid because three fixed side lengths determine a triangle. Suppose the part already built is rigid, and add a joint $P$ connected to two of its joints $Q_1$ and $Q_2$ by noncollinear members. Any displacement of $P$ relative to the existing part that preserves the length of $PQ_1$ must be perpendicular to $PQ_1$. A displacement that preserves the length of $PQ_2$ must likewise be perpendicular to $PQ_2$. The members are noncollinear, so the two perpendicular directions differ. Only zero displacement satisfies both requirements. By induction the whole truss is rigid and therefore has three rigid-body degrees of freedom. Three properly arranged scalar restraints make it statically determinate, as for the rigid body in the chapter on kinematic analysis.
:::
::::

## Truss support reactions

A simple truss with statically determinate supports behaves as a rigid body. The support reactions can therefore be calculated before the member forces, using the equilibrium equations for the entire truss.

:::osservazione{#reazioni-travatura titolo="Equilibrium equations for the entire truss"}
If a truss is internally rigid and has three external scalar restraints, its three global equilibrium equations determine the three support reactions, just as for a beam. The chapter on equilibrium equations and support reactions discusses how to choose the equations and the points about which to take moments. Member forces are internal and do not appear in these equations. For the Pratt truss of span $12\,\mathrm{m}$, with $P = 20\,\mathrm{kN}$, a pin at $A$, and a roller at $E$,
$$
\begin{cases}
H_A = 0 \\[4pt]
12\,V_E - 20 \cdot 3 - 20 \cdot 6 - 20 \cdot 9 = 0 \\[4pt]
V_A + V_E - 3 \cdot 20 = 0
\end{cases}
$$
are the equations for horizontal force equilibrium, moment equilibrium about $A$, and vertical force equilibrium, respectively. The results are $V_E = 30\,\mathrm{kN}$ and $V_A = 30\,\mathrm{kN}$, both upward, as symmetry suggests.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;F-C;H-C" reticolare=1 forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" reazioni="A,1.5,0,H_A;A,0,1.5,V_A;E,0,1.5,V_E" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;D,E,3 m,1.3" titolo="Free-body diagram of the truss with the supports replaced by reactions $H_A$, $V_A$, and $V_E$"}

:::

## Method of joints

Once the reactions are known, each joint is a point in equilibrium under the forces from its connected members and any loads or reactions applied there.

::::teorema{#equilibrio-del-nodo titolo="Joint equilibrium"}
Let $A$ be a joint with coordinates $(x_A, y_A)$. Members $AB_1, \dots, AB_k$ meet there, and the applied loads and support reactions have resultant $(F_x, F_y)$. The member forces then satisfy the two equations
$$
\begin{cases}
\displaystyle\sum_{j = 1}^{k} N_{AB_j}\,\frac{x_{B_j} - x_A}{L_{AB_j}} + F_x = 0 \\[12pt]
\displaystyle\sum_{j = 1}^{k} N_{AB_j}\,\frac{y_{B_j} - y_A}{L_{AB_j}} + F_y = 0
\end{cases}
$$
for horizontal and vertical force equilibrium. The ratios $\dfrac{x_{B_j} - x_A}{L_{AB_j}}$ and $\dfrac{y_{B_j} - y_A}{L_{AB_j}}$ are the direction cosines of the member from $A$ toward $B_j$. For a member with projections $3\,\mathrm{m}$ and $4\,\mathrm{m}$ and length $5\,\mathrm{m}$, they are $\pm\dfrac{3}{5}$ and $\pm\dfrac{4}{5}$.

:::dimostrazione
Isolate the joint by cutting the members that meet there. The forces acting at the joint are the member forces, equal to $N_{AB_j}\,\hat{e}_{AB_j}$ by definition, and the loads and reactions applied at $A$. All these forces pass through $A$, so their moments about $A$ vanish and the moment equation holds identically. Resolving the two remaining force equilibrium equations along the axes gives the stated result.
:::
::::

:::osservazione{#metodo-dei-nodi titolo="Method of joints"}
The **method of joints** applies equilibrium at one joint after another. At each step, select a joint with at most two unknowns and, if two member forces are unknown, with the two members noncollinear. The two joint equations can then determine the two forces. A usual starting point is a supported joint after its reactions have been calculated, or a joint away from the supports where only two members meet. There are $2n$ joint equations and $a + v$ unknowns. For a statically determinate truss, if the $v = 3$ reactions have already been found from global equilibrium, three joint equations are left over as a **check**. This method is convenient when the forces in all members are needed.
:::

:::esempio{titolo="Triangular truss"}
The truss shown has a pin at $A$, a roller at $B$, and a downward force $P = 24\,\mathrm{kN}$ at $C$. Members $AC$ and $BC$ have length $5\,\mathrm{m}$. By symmetry, $H_A = 0$ and $V_A = V_B = 12\,\mathrm{kN}$. At joint $A$, member $AB$ has unit vector $(1, 0)$ and member $AC$ has unit vector $\left(\dfrac{4}{5}, \dfrac{3}{5}\right)$, so
$$
\begin{cases}
N_{AB} + \dfrac{4}{5}\,N_{AC} = 0 \\[8pt]
\dfrac{3}{5}\,N_{AC} + 12 = 0
\end{cases}
\qquad\Longrightarrow\qquad
N_{AC} = -20\,\mathrm{kN},
\quad
N_{AB} = 16\,\mathrm{kN} .
$$
Member $AC$ is in **compression** and chord $AB$ is in **tension**. By symmetry, $N_{BC} = -20\,\mathrm{kN}$. Joint $C$ has not been used, so its vertical equilibrium gives a check, $-\dfrac{3}{5}(-20) - \dfrac{3}{5}(-20) - 24 = 12 + 12 - 24 = 0$.

::struttura{nodi="A,0,0;B,8,0;C,4,3" aste="A-B;A-C;B-C" reticolare=1 vincoli="A,cerniera;B,carrello" forze="C,0,-1.6,P" quote="A,B,8 m,1;8 0,8 3,3 m,0.8" titolo="Triangular truss with force $P$ applied at vertex $C$"}

:::

## Zero-force members

In many trusses some members carry zero force under a particular loading condition. Identifying them before calculation reduces the number of unknowns.

::::teorema{#aste-scariche titolo="Zero-force members"}
Consider a joint $K$ with no applied loads or external supports.

- If only two noncollinear members meet at $K$, both are **zero-force members**, so $N = 0$.
- If three members meet at $K$ and two are collinear, the third carries zero force and the two collinear members carry the same axial force.
- If only two collinear members meet at $K$, they carry the same axial force.

The same conclusions apply if a load or support reaction at the joint acts along one of the members. Treat it as an additional member along that direction. For example, in the Pratt truss of span $12\,\mathrm{m}$, joints $B$ and $D$ each connect two collinear horizontal members and a vertical member, with no applied load. Verticals $BF$ and $DH$ therefore carry zero force.

:::dimostrazione
In the first case, resolve joint equilibrium perpendicular to the first member. Only the second member contributes, with coefficient $\sin\theta \neq 0$, where $\theta$ is the angle between the two members. Its force must therefore be zero. The same reasoning gives zero force in the first member. In the second case, project perpendicular to the two collinear members. Only the third member contributes, with a nonzero coefficient because it is not collinear with the others, so it too carries zero force. Projection along the two collinear members then gives $N_1 - N_2 = 0$. In the third case, simply project along the common member axis.
:::
::::

::struttura{nodi="K,0,0;A,-2.4,0;B,1.6,2.2;L,6,0;C,3.6,0;D,8.4,0;E,6,2.4" aste="K-A;K-B;L-C;L-D;L-E" reticolare=1 nomi=0 punti="0,0,K;6,0,K" etichette="-1.7,0.35,N_1 = 0;1.5,0.6,N_2 = 0;4.3,0.35,N_1;7.4,0.35,N_2 = N_1;6.4,1.6,N_3 = 0" riferimento=0 titolo="Unloaded joints. Two noncollinear members meet on the left. Three members, two of them collinear, meet on the right"}

:::osservazione{#aste-scariche-necessarie titolo="Role of zero-force members"}
A member that carries zero force under one loading condition can carry force under another. Also, removing a member from a statically determinate truss reduces $a + v$ to $2n - 1$. The condition $2n = a + v$ then shows that the truss is unstable. For example, in the Pratt truss of span $12\,\mathrm{m}$, removing vertical member $BF$ would leave joint $B$ attached only to two collinear members, allowing it to move vertically.
:::

## Ritter's method of sections

When only a few member forces are needed, it is convenient to find each from a single equation without solving the joints in sequence.

:::definizione{#sezione-di-ritter titolo="Ritter sections and moment centers"}
A **Ritter section** is a cut that divides a truss into two parts by intersecting three members whose lines of action are neither concurrent nor all parallel. The **Ritter point** of any one of the three members is the intersection of the lines of the other two. If those two are parallel, their intersection is a point at infinity. In the Pratt truss of span $12\,\mathrm{m}$, the vertical cut between $x = 3\,\mathrm{m}$ and $x = 6\,\mathrm{m}$ crosses members $FG$, $FC$, and $BC$. The Ritter point for $BC$ is $F$, the one for $FG$ is $C$, and for $FC$ it is the point at infinity in the horizontal direction.
:::

::::teorema{#metodo-di-ritter titolo="Ritter's method of sections"}
Consider a Ritter section and one of the two parts into which it divides the truss. The force $N_k$ in one of the cut members follows from a single moment equation for that part about the member's Ritter point $R_k$:
$$
M_{R_k}^{\text{est}} + M_{R_k}(N_k) = 0 ,
$$
where counterclockwise moments are positive, $M_{R_k}^{\text{est}}$ is the moment about $R_k$ of all loads and reactions acting on the isolated part, and $M_{R_k}(N_k)$ is the moment of the cut member force, assumed tensile and therefore directed from the isolated part toward the cut. Each equation contains just one unknown member force, so an error in one force does not propagate to the others.

:::dimostrazione
Choose a moment center about which the other two unknowns have zero moment arm. The isolated part is in equilibrium, so the equilibrium equations hold about any point. The forces are the loads and support reactions at its joints and the three forces exerted by the cut members, each acting along its own member. The lines of the two members other than $k$ pass through $R_k$, so their moments about $R_k$ vanish. Thus the moment equation about $R_k$ contains only the unknown $N_k$. Its moment arm is nonzero because its line of action does not pass through $R_k$.
:::
::::

:::osservazione{#ritter-aste-parallele titolo="Two parallel members at a cut"}
If two of the three cut members are parallel, the Ritter point of the third member is at infinity. Replace the moment equation by force equilibrium of the isolated part *perpendicular* to the two parallel members. Their forces drop out of this equation, leaving only the third. For trusses with horizontal chords, this is the vertical force equilibrium equation, which gives the diagonal force.
:::

:::esempio{titolo="Member forces in the second panel of the original truss"}
With $P = 20\,\mathrm{kN}$ and $V_A = 30\,\mathrm{kN}$, consider the part to the left of the cut, containing joints $A$, $B$, and $F$. Assuming tension, the cut member forces are $N_{FG}$ at $F$ directed to the right, $N_{FC}$ at $F$ directed toward $C$ with unit vector $\left(\dfrac{3}{5}, -\dfrac{4}{5}\right)$, and $N_{BC}$ at $B$ directed to the right. Taking counterclockwise moments as positive,
$$
\begin{cases}
-30 \cdot 3 + 4\,N_{BC} = 0 \\[6pt]
-30 \cdot 6 + 20 \cdot 3 - 4\,N_{FG} = 0 \\[6pt]
30 - 20 - \dfrac{4}{5}\,N_{FC} = 0
\end{cases}
$$
are the equations for moment equilibrium about $F$, moment equilibrium about $C$, and vertical force equilibrium, respectively. They give $N_{BC} = 22.5\,\mathrm{kN}$ (tension), $N_{FG} = -30\,\mathrm{kN}$ (compression), and $N_{FC} = 12.5\,\mathrm{kN}$ (tension).

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;F-C;H-C" reticolare=1 forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" reazioni="A,0,1.5,V_A;E,0,1.5,V_E" tratteggi="4.6,-0.9 4.6,5.4" etichette="4.75,5.3,s" punti="3,4,,centro;6,0,,centro" titolo="Section $s$ and its Ritter points: $F$ for member $BC$ and $C$ for member $FG$. The Ritter point for diagonal $FC$ is at infinity"}

:::

## Parallel-chord trusses

In parallel-chord trusses, the section equations take a form that immediately identifies which members are in tension and which are in compression.

::::teorema{#correnti-e-diagonali titolo="Chord and diagonal forces"}
Consider a truss under vertical loads with horizontal chords spaced $h$ apart. A vertical section cuts the top chord, the bottom chord, and a diagonal inclined at angle $\alpha$ to the horizontal. Let $V_s$ be the sum of the external vertical forces (loads and reactions) to the left of the cut, positive upward, and let $M_R$ be their moment about a point $R$, taken as positive *clockwise*. Then

- the bottom chord carries force $N_{\text{lower}} = \dfrac{M_{R_s}}{h}$, where $R_s$ is the top-chord joint of the cut diagonal;
- the top chord carries force $N_{\text{upper}} = -\dfrac{M_{R_i}}{h}$, where $R_i$ is the bottom-chord joint of the cut diagonal;
- the diagonal carries force $N_d = \dfrac{V_s}{\sin\alpha}$ if it slopes downward from left to right, and $N_d = -\dfrac{V_s}{\sin\alpha}$ if it slopes upward.

For a simply supported truss under downward loads, $M_R > 0$, so the bottom chord is in tension and the top chord is in compression. The quantity $M_R$ equals the bending moment in a simply supported beam having the same span and loads, at the section with coordinate $x_R$. As discussed in the chapter on internal forces and moments, the chords carry the bending moment as a force couple with moment arm $h$, and the diagonal carries the vertical forces. Clockwise is positive under that chapter's sign convention: positive bending moment puts the lower fibers in tension and equals the clockwise moment about the section of the forces acting to its left. Thus $M_R$ denotes a bending moment. The reaction moment at a fixed support is denoted by $M_A$ and an applied couple by $\mathcal{M}$.

:::dimostrazione
Apply Ritter's method of sections to the left-hand part. The Ritter point for the bottom chord is $R_s$, a height $h$ above that chord. The assumed tensile force in the bottom chord acts to the right on the left-hand part. About $R_s$ it produces a counterclockwise moment $h\,N_{\text{lower}}$, while the external forces have counterclockwise moment $-M_{R_s}$. Moment equilibrium gives $h\,N_{\text{lower}} - M_{R_s} = 0$. For the top chord, the Ritter point $R_i$ is a distance $h$ below the chord. Its rightward tensile force has counterclockwise moment $-h\,N_{\text{upper}}$, and the equation is $-h\,N_{\text{upper}} - M_{R_i} = 0$. For the diagonal, the chords are parallel, so use vertical force equilibrium. The assumed tensile force on the left-hand part acts along the diagonal toward the right-hand part. Its vertical component is $-N_d \sin\alpha$ if the diagonal slopes down and $N_d \sin\alpha$ if it slopes up. The corresponding equation, $V_s - N_d\sin\alpha = 0$ or $V_s + N_d\sin\alpha = 0$, gives the stated result.
:::
::::

:::esempio{titolo="Check on the original truss"}
At the section in the preceding example, $h = 4\,\mathrm{m}$, $R_s = F$, and $R_i = C$. The forces to the left give $M_{R_s} = 30 \cdot 3 = 90\,\mathrm{kN\,m}$, $M_{R_i} = 30 \cdot 6 - 20 \cdot 3 = 120\,\mathrm{kN\,m}$, and $V_s = 30 - 20 = 10\,\mathrm{kN}$. Diagonal $FC$ slopes downward to the right and $\sin\alpha = \dfrac{4}{5}$, so
$$
N_{BC} = \frac{90}{4} = 22.5\,\mathrm{kN},
\qquad
N_{FG} = -\frac{120}{4} = -30\,\mathrm{kN},
\qquad
N_{FC} = \frac{10}{\frac{4}{5}} = 12.5\,\mathrm{kN},
$$
in agreement with the example using Ritter's method.
:::

## Common truss configurations

The commonly used configurations differ in the arrangement of their diagonals. For each configuration, the chord and diagonal force relations identify which members carry tension.

:::definizione{#travature-tipo titolo="Pratt, Howe, Warren, and cantilever trusses"}
Consider parallel-chord trusses simply supported at their ends and carrying symmetric downward loads, such that $V_s > 0$ on the left half and $V_s < 0$ on the right. By the chord and diagonal force relations, an interior diagonal that slopes *down* toward midspan is in tension, and one that slopes *up* toward midspan is in compression.

- In a **Pratt** truss, the interior diagonals slope down toward midspan and are therefore in **tension**. The verticals are either in compression or carry zero force. This is the layout of the truss of span $12\,\mathrm{m}$ in the examples. Its inclined end members $AF$ and $EH$ are in compression.
- In a **Howe** truss, the interior diagonals slope up toward midspan and are therefore in **compression**. The verticals are either in tension or carry zero force.
- In a **Warren** truss, successive diagonals slope alternately up and down, usually without verticals. Moving from a support toward midspan, the diagonals alternate between compression and tension.
- A **cantilever** truss is attached to a wall at one end and free at the other. Under downward loads its top chord is in tension and its bottom chord is in compression.

The Pratt layout is well suited to steel because its longer members, the diagonals, carry tension and are therefore not susceptible to the buckling of compression members.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;B-G;D-G" reticolare=1 vincoli="A,cerniera;E,carrello" forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;D,E,3 m,1.3" titolo="Howe truss. Diagonals $BG$ and $DG$ slope up toward midspan"}

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,1.5,2;G,4.5,2;H,7.5,2" aste="A-B;B-C;C-D;E-G;G-H;A-E;E-B;B-G;G-C;C-H;H-D" reticolare=1 vincoli="A,cerniera;D,carrello" forze="E,0,-1.2,P;G,0,-1.2,P;H,0,-1.2,P" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;9 0,9 2,2 m,0.8" titolo="Warren truss with alternating diagonals and no verticals"}

::struttura{nodi="A,0,0;B,0,3;C,4,3;D,4,0;E,8,0" aste="A-B;B-C;C-E;A-D;D-E;C-D;A-C" reticolare=1 vincoli="A,cerniera,180;B,carrello,180" forze="E,0,-1.6,P" quote="A,D,4 m,1;D,E,4 m,1;0 0,0 3,3 m,-1.4" titolo="Cantilever truss attached to the wall by pin $A$ and roller $B$"}

:::

:::osservazione{#montanti titolo="Forces in the vertical members"}
The force in a vertical member follows from the vertical force equilibrium of its end joint where no diagonals meet. In the Pratt truss loaded on the top chord, vertical $CG$ meets joint $G$, where the two collinear members $FG$ and $GH$ and load $P$ also meet, so $N_{CG} = -P$. Verticals $BF$ and $DH$ carry zero force by the zero-force member rules. If the same loads act on the bottom chord, vertical $BF$ carries the load at joint $B$ and is in tension with $N_{BF} = P$.
:::
