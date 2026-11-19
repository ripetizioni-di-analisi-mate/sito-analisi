---
titolo: "Compound structures: Gerber beams, frames, and three-hinged arches"
sommario: "How to find support reactions and the forces transmitted by internal connections in assemblies of rigid bodies, including Gerber beams, portal frames, frames with several rigid bodies, and three-hinged arches and their thrust."
---

## Compound structures and internal hinge forces

A single planar rigid body has three equilibrium equations. A structure made up of several bodies has more unknowns. The additional equations follow from the equilibrium of each body.

:::definizione{#struttura-composta titolo="Compound structure"}
A **compound structure** consists of $n \geq 2$ planar rigid bodies joined by internal connections (hinges, links, and parallel-link connections) and attached to the ground by external supports. The structures considered here are statically determinate. The number $s$ of independent scalar restraints equals $3n$, and the restraints are properly arranged. The chapter on constraints and kinematic analysis explains how to check their arrangement.

The bodies are assumed rigid, the constraints frictionless and bilateral, and self-weight negligible. Typical examples are the Gerber beam, which consists of straight, collinear beam segments connected by hinges, the three-hinged portal frame, and the three-hinged arch.
:::

:::definizione{#forze-nella-cerniera titolo="Forces transmitted by an internal hinge"}
An internal hinge $C$ connecting body $1$ to body $2$ prevents relative displacement of the two connected points while allowing relative rotation. The two bodies can therefore transmit a force in any direction at $C$, but no couple. Let $X_C$ and $Y_C$ denote the components of the force that body $1$ exerts on body $2$, taken as positive along the coordinate axes. By the **principle of action and reaction**, body $2$ exerts an equal and opposite force on body $1$ at the same point, with components $-X_C$ and $-Y_C$.

The two unknowns $X_C$ and $Y_C$ correspond to the two scalar constraints imposed by the hinge. A hinge joining $k$ bodies is equivalent to $k - 1$ simple hinges and introduces $2(k - 1)$ unknowns.
:::

:::definizione{#diagramma-di-corpo-libero-dei-corpi titolo="Separating the structure into bodies"}
To **separate the structure into bodies**, draw each body in isolation, showing its applied loads, the reactions at its external supports, and the forces at its internal connections. Each internal force acts in opposite directions on the two bodies it connects. The resulting free-body diagram for each body supplies its equilibrium equations.

::struttura{nodi="A,0,0;B,0,4;C,3,4,-;C2,6.2,4,-;D,9.2,4;E,9.2,0" aste="A-B;B-C;C2-D;D-E" vincoli="A,cerniera;E,cerniera" carichi="B,C,0.6,0.6,q;C2,D,0.6,0.6,q" reazioni="A,1.1,0,H_A;A,0,1.1,V_A;E,1.1,0,H_E;E,0,1.1,V_E;C,-0.9,0,X_C;C,0,-1.1,Y_C;C2,0.9,0,X_C;C2,0,1.1,Y_C" etichette="2.7,4.3,C;6.35,4.3,C" punti="3,4;6.2,4" titolo="Three-hinged portal frame separated into bodies $ABC$ and $CDE$. The forces at $C$ act in opposite directions on the two bodies"}

:::

::::teorema{#equilibrio-dei-corpi titolo="Equilibrium of a compound structure"}
A structure consisting of $n$ rigid bodies is in equilibrium if and only if each body, isolated with its applied loads, external reactions, and internal connection forces, satisfies the three planar equilibrium equations. This gives $3n$ scalar equations. The three equilibrium equations for the entire structure follow by adding those for the individual bodies, so they provide no additional independent equations.

For a statically determinate structure, the number of unknowns (external reactions and internal forces) is $s = 3n$, equal to the number of equations, and the system has a unique solution. A three-hinged portal frame has $n = 2$, four external reaction components, and two force components at $C$, giving six unknowns and six equations.

:::dimostrazione
A structure is in equilibrium when each of its bodies remains at rest. Isolating each rigid body with all the forces acting on it gives the situation studied in the chapter on the equilibrium equations of statics. A rigid body is in equilibrium if and only if both the resultant force and the resultant moment of the applied forces vanish. This proves the first statement.

To prove the second statement, add the equations for the individual bodies. At each internal connection, the two forces act at the same point in opposite directions, so their sum is zero and their moments about any point also sum to zero. Adding the force equilibrium equations therefore gives the force equilibrium equation for the entire structure, which contains only applied loads and external reactions. The same argument applies to the moment equations when moments are taken about the same point.
:::
::::

:::attenzione
The three equilibrium equations for the entire structure cannot determine more than three external reactions. For a three-hinged portal frame the external reactions are $H_A$, $V_A$, $H_E$, and $V_E$. Any further global equilibrium equation, even one that takes moments about a fourth point, is a combination of the other three. For example, if a vertical load $q$ on the crossbeam is the only load, global equilibrium gives $V_A$ and $V_E$, together with the single relation $H_A + H_E = 0$. Finding $H_A$ requires an equation for part of the structure.
:::

## Auxiliary equation at a hinge

Separating every body introduces the hinge forces as unknowns. If only the external reactions are needed, one can write an equation at each internal hinge that eliminates the internal forces.

::::teorema{#equazione-ausiliaria titolo="Zero-moment equation at an internal hinge"}
Let $C$ be an internal hinge that divides a structure in equilibrium into two parts joined only at $C$. The moments about $C$ of all external forces (applied loads and external support reactions) acting on either part then sum to zero:
$$
\sum M_C^{\text{part}} = 0 .
$$
For a structure with $k$ internal hinges of this kind, the three global equations and the $k$ auxiliary equations give a system involving only the external reactions. A three-hinged portal frame has four external reactions. The auxiliary equation at $C$ provides the fourth equation.

:::dimostrazione
Take moments for one of the two parts about the hinge itself. This part is a rigid body in equilibrium, so the resultant moment about $C$ of all the forces acting on it is zero. These forces include the force exerted by the other part at $C$. Its line of action passes through the moment center, so its moment about $C$ is zero. Only the external forces acting on the isolated part remain, and their moments about $C$ sum to zero.
:::
::::

:::esempio{titolo="Portal frame under a horizontal force"}
A portal frame has pin supports $A$ and $E$ at the same elevation, columns of height $3\,\mathrm{m}$, a crossbeam of length $6\,\mathrm{m}$, and an internal hinge $C$ at midspan. At joint $B$ at the top of the left column, a horizontal force $F = 12\,\mathrm{kN}$ acts to the right. Taking moments for the entire structure about $A$ and writing the auxiliary equation for part $CDE$ about $C$ gives
$$
\begin{cases}
6\,V_E - 3\,F = 0 \\[4pt]
3\,V_E + 3\,H_E = 0
\end{cases}
$$
so $V_E = 6\,\mathrm{kN}$ and $H_E = -6\,\mathrm{kN}$. Horizontal and vertical force equilibrium for the whole structure then give $H_A = -F - H_E = -6\,\mathrm{kN}$ and $V_A = -V_E = -6\,\mathrm{kN}$. Both pin supports push to the left with a force of $6\,\mathrm{kN}$ and thus share the load $F$.
:::

## Gerber beams

:::definizione{#trave-gerber titolo="Gerber beam"}
A **Gerber beam** is a straight beam made up of several segments joined by internal hinges and supported so that the structure is statically determinate. For $n$ segments, $3n$ scalar restraints are required. The $n - 1$ internal hinges supply $2(n - 1)$ of them, so the external supports must provide $n + 2$, one more than for a simple beam for each internal hinge.

A continuous beam over several supports is generally statically indeterminate. A Gerber beam is statically determinate, so its reactions follow from equilibrium alone.
:::

::struttura{nodi="A,0,0;C,4,0;B,8,0" aste="A-C;C-B" cerniere="C" vincoli="A,incastro,180;B,carrello" forze="6 0,0,-1.8,P" quote="A,C,4 m,0.8;C,6 0,2 m,0.8;6 0,B,2 m,0.8" titolo="Gerber beam with cantilever $AC$ fixed at $A$ and beam $CB$ supported at $C$ and $B$, carrying force $P = 20\,\mathrm{kN}$"}

:::definizione{#trave-portante-e-portata titolo="Supporting and suspended beam segments"}
A segment of a Gerber beam is a **supporting segment** if its external supports alone make it statically determinate. It is a **suspended segment** if it bears on another segment through an internal hinge. In the figure, the cantilever $AC$ is the supporting segment because its fixed support restrains it completely. Beam $CB$ is the suspended segment because without hinge $C$ its only remaining support would be the roller at $B$.

For the suspended span, hinge $C$ acts like an external pin support. Segment $CB$ can therefore be analyzed as a beam simply supported at $C$ and $B$.
:::

:::teorema{#ordine-di-calcolo titolo="Order of analysis for a Gerber beam"}
To find the reactions of a Gerber beam, start with those suspended segments that carry no other segment, then work back to the supporting segments. For each suspended segment, calculate its support reactions, including the hinge force. Apply this force in the opposite direction as a concentrated load at the end of the supporting segment. This procedure follows from the equilibrium theorem for a compound structure and the principle of action and reaction.
:::

:::esempio{titolo="Analysis of the Gerber beam in the figure"}
The suspended segment $CB$ carries force $P = 20\,\mathrm{kN}$ at midspan, so $V_B = Y_C = 10\,\mathrm{kN}$, where $Y_C$ is the force that the cantilever exerts on beam $CB$. Cantilever $AC$ therefore carries a downward force at $C$ of magnitude $10\,\mathrm{kN}$, and its equilibrium gives
$$
\begin{cases}
V_A - Y_C = 0 \\[4pt]
M_A - 4\,Y_C = 0
\end{cases}
\qquad\Longrightarrow\qquad
V_A = 10\,\mathrm{kN}, \quad M_A = 40\,\mathrm{kN\,m} .
$$
The reaction moment at the fixed support is counterclockwise. As a check, the resultant moment about $B$ of the forces acting on the whole beam is $M_A - 8\,V_A + 2\,P = 40 - 80 + 40 = 0$.

::struttura{nodi="A,0,0;C1,4,0,-;C2,5,1.6,-;B,9,1.6" aste="A-C1;C2-B" vincoli="A,incastro,180" forze="7 1.6,0,-1.8,P;C1,0,-1.1,Y_C" reazioni="C2,0,1.1,Y_C;B,0,1.1,V_B;A,0,1.1,V_A" coppie="A,1,M_A" etichette="3.9,0.35,C;4.75,1.95,C" punti="4,0;5,1.6" titolo="The suspended span $CB$, shown above, is analyzed first. Force $Y_C$ then acts on the cantilever $AC$ in the opposite direction"}

:::

:::attenzione
The suspended segment does not always exert a downward force on the supporting segment. If the suspended segment overhangs its outer support, it may tend to lift at the hinge. For example, let hinge $C$ be at $x = 2\,\mathrm{m}$ and roller $B$ at $x = 4\,\mathrm{m}$, with a downward force of $10\,\mathrm{kN}$ at the free end at $x = 5\,\mathrm{m}$. Taking moments for the suspended segment about $C$ gives $V_B = 15\,\mathrm{kN}$ and thus $Y_C = 10 - 15 = -5\,\mathrm{kN}$. The hinge holds the suspended segment down, while an upward force of $5\,\mathrm{kN}$ acts on the supporting segment.
:::

## Internal links and parallel-link connections

Hinges are one way to connect bodies. In general, an internal connection transmits the force and moment components associated with the relative motions it restrains.

:::definizione{#pendolo-interno titolo="Internal link"}
An **internal link** is a straight member pinned at both ends that joins two bodies. It restrains only the change in distance between its attachment points, so it imposes a single scalar constraint and transmits one force along its axis. The unknown is the axial force $N$ in the link, taken as positive in tension. One example is an arch **tie**, which joins the two springings and carries the thrust.
:::

::::teorema{#asta-scarica-incernierata titolo="Unloaded member pinned at both ends"}
Consider a rigid body joined to the rest of a structure only by hinges $P$ and $Q$ and carrying no applied loads. The forces exerted on it at the two hinges are equal and opposite and act along line $PQ$. The body therefore acts as a two-force member, even if its axis is curved, and introduces just one unknown.

:::dimostrazione
Only the two hinge forces act on the body. Moment equilibrium about $P$ requires the force applied at $Q$ to have zero moment about $P$, so its line of action passes through $P$ and coincides with line $PQ$. Force equilibrium then requires the force at $P$ to be opposite to the one at $Q$.
:::
::::

:::definizione{#doppio-pendolo-interno titolo="Internal parallel-link connection"}
An **internal parallel-link connection** joins two bodies through two parallel links. It restrains relative translation parallel to the links and relative rotation while allowing relative translation perpendicular to the links. It therefore imposes two scalar constraints and transmits a force parallel to the links and a couple. When the links are parallel to a beam's axis, the connection transmits axial force and bending moment, with no transverse force.

::struttura{nodi="A,0,0;C,4,0;B,7,0" aste="A-C;C-B" interni="C,doppio-pendolo,0" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.6,0.6,q" quote="A,C,4 m,0.8;C,B,3 m,0.8" titolo="Beam with an internal parallel-link connection at $C$ and links parallel to the beam axis. The two segments transmit a horizontal force and a couple"}

:::

::::teorema{#equazione-ausiliaria-doppio-pendolo titolo="Auxiliary equations for internal links and parallel-link connections"}
Consider a structure in equilibrium divided into two parts by a single internal connection. The following equations apply to the external forces (loads and reactions) acting on either part.

- If two parallel links run in direction $\vec{d}$, the components of the forces in the direction perpendicular to $\vec{d}$ sum to zero.
- If the connection is a single link with axis $r$, the sum of the moments about any point on $r$ is zero.

In the beam shown, the parallel links transmit no vertical force, so roller $B$ carries the entire load on segment $CB$, giving $V_B = q \cdot \overline{CB}$.

:::dimostrazione
For the first case, write force equilibrium for the isolated part in the direction perpendicular to the links. The force transmitted by the connection is parallel to $\vec{d}$, and its couple makes no contribution to force equilibrium. Only the external forces therefore enter the equation. For the second case, take moments about a point on $r$. The link force acts along $r$, so its moment about that point is zero.
:::
::::

## Portal frames and frames made up of several bodies

:::definizione{#portale-a-tre-cerniere titolo="Three-hinged portal frame"}
A **three-hinged portal frame** consists of two L-shaped bodies, each made up of a column and part of the crossbeam. They are pinned to the ground at bases $A$ and $E$ and connected by an internal hinge $C$ in the crossbeam. The frame has $n = 2$ and $s = 2 + 2 + 2 = 6$. It is statically determinate provided that hinges $A$, $C$, and $E$ do not lie on a straight line.

The three global equilibrium equations and the auxiliary equation at $C$ determine the four external reactions. The hinge forces then follow from equilibrium of either body.
:::

:::osservazione{#imposte-alla-stessa-quota}
When pin supports $A$ and $E$ are at the same elevation, horizontal reactions $H_A$ and $H_E$ have zero moment arm about both $A$ and $E$. Hence the moment equation about $A$ contains only $V_E$, and the one about $E$ contains only $V_A$. The vertical reactions can therefore be found as for a beam simply supported at $A$ and $E$. The auxiliary hinge equation at $C$ for either part then contains just one unknown horizontal reaction.

When the pin supports are at different elevations, the moment equation about $A$ also contains $H_E$, whose moment arm equals the difference in elevation. Solve this equation together with the auxiliary equation for the part containing $E$. The two unknowns are $H_E$ and $V_E$.
:::

:::definizione{#telaio-zoppo titolo="Portal frame with one pin-ended column"}
A **portal frame with one pin-ended column** has one column pinned both at its base and to the crossbeam. If this column carries no load, the theorem for an unloaded member pinned at both ends shows that it transmits only an axial force. The frame then reduces to an L-shaped body supported by a pin and a link, and its reactions follow from the three equilibrium equations for the L-shaped body.

::struttura{nodi="A,0,0;B,0,4;C,5,4;D,5,0" aste="A-B;B-C;C-D" cerniere="C" vincoli="A,cerniera;D,cerniera" forze="B,1.3,0,F" reazioni="A,1.1,0,H_A;A,0,1.1,V_A;D,0,1.1,V_D" quote="A,B,4 m,0.8;B,C,5 m,-0.6" titolo="Portal frame with a pin-ended column. Column $CD$ is pinned at $C$ and $D$ and carries no applied loads, so the reaction at $D$ is vertical"}

With $F = 10\,\mathrm{kN}$ at $B$, taking moments for the whole frame about $A$ gives $5\,V_D - 4\,F = 0$, or $V_D = 8\,\mathrm{kN}$ upward. The other reactions are $V_A = -8\,\mathrm{kN}$, or $8\,\mathrm{kN}$ downward, and $H_A = -10\,\mathrm{kN}$, or $10\,\mathrm{kN}$ to the left.
:::

:::attenzione
A pin-ended column acts as a two-force member only when it carries no applied load. With a load on the column, such as wind pressure, the hinge forces need no longer act along its axis. Column $CD$ in the figure, under a horizontal load of $3\,\mathrm{kN/m}$, transmits a horizontal force at $C$, so the frame must be separated into its two bodies.
:::

## Three-hinged arches and thrust

:::definizione{#arco-a-tre-cerniere titolo="Three-hinged arch"}
A **three-hinged arch** consists of two curved or piecewise-straight members pinned to the ground at the **springings** $A$ and $B$ and connected by an internal hinge $C$ at the **crown**. The horizontal distance between the springings is the **span** $L$. The elevation of the crown above the line joining the springings is the **rise** $f$.

Under vertical loads, the springings also exert horizontal forces directed inward. Their common magnitude $H$ is called the **thrust**. This thrust distinguishes an arch from a beam. The abutments must resist it, or a tie must carry it.
:::

::struttura{nodi="A,0,0;C,6,4;B,12,0" aste="0 0-1 1.222;1 1.222-2 2.222;2 2.222-3 3;3 3-4 3.556;4 3.556-5 3.889;5 3.889-6 4;6 4-7 3.889;7 3.889-8 3.556;8 3.556-9 3;9 3-10 2.222;10 2.222-11 1.222;11 1.222-12 0" cerniere="C" vincoli="A,cerniera;B,cerniera" carichi="0 4.6,12 4.6,0.9,0.9,q" reazioni="A,1.6,0,H;A,0,1.6,V_A;B,-1.6,0,H;B,0,1.6,V_B" quote="A,B,L,0.8;6 0,C,f,-0.6" titolo="Three-hinged parabolic arch under a load $q$ uniform over the horizontal projection. The springings exert an inward thrust $H$"}

::::teorema{#spinta-arco titolo="Support reactions and thrust of a three-hinged arch"}
Consider a three-hinged arch with springings $A$ and $B$ at the same elevation under vertical loads alone. Let $V_A^0$ and $V_B^0$ be the reactions and $M_C^0$ the bending moment at the section with coordinate $x_C$ in the **equivalent simply supported beam**, a beam of span $L$ carrying the same vertical loads at the same horizontal coordinates. Then
$$
V_A = V_A^0 ,
\qquad
V_B = V_B^0 ,
\qquad
H = \frac{M_C^0}{f} ,
$$
where $H$ is the thrust, with $H_A = H$ acting to the right and $H_B = -H$ acting to the left. If the load $q$ is uniform over the horizontal projection and the crown is at midspan, $M_C^0 = \dfrac{qL^2}{8}$, so
$$
H = \frac{qL^2}{8f} .
$$
For example, with $q = 10\,\mathrm{kN/m}$, $L = 16\,\mathrm{m}$, and $f = 4\,\mathrm{m}$, the results are $V_A = V_B = 80\,\mathrm{kN}$ and $H = \dfrac{10 \cdot 256}{32} = 80\,\mathrm{kN}$. Thrust is inversely proportional to rise, so a flatter arch develops greater thrust than a taller one.

:::dimostrazione
The horizontal reactions drop out of the equations for the vertical reactions, and the thrust follows from the auxiliary equation at $C$. Horizontal force equilibrium of the entire arch gives $H_A + H_B = 0$ because the applied loads are vertical. Write $H_A = H$ and $H_B = -H$. The springings are at the same elevation, so the horizontal reactions have zero moment arm about $A$ and $B$. The moment equations about $A$ and $B$ are therefore the same as for the equivalent simply supported beam. Hence $V_A = V_A^0$ and $V_B = V_B^0$.

Now write the auxiliary equation for part $AC$ about $C$, taking counterclockwise moments as positive. Reaction $V_A$ acts at $A$ a distance $x_C$ to the left of $C$ and has moment $-V_A\,x_C$. Reaction $H$ acts at $A$ a distance $f$ below $C$ and has moment $H f$. The vertical loads on part $AC$ have the same moment about $C$ as in the equivalent beam because their moment arms depend only on their horizontal coordinates. Adding this moment to $-V_A^0\,x_C$ gives the negative of bending moment $M_C^0$ in the equivalent beam. By definition, this bending moment is the moment about $C$ of the forces to the left of $C$, with tension in the lower fibers taken as positive. The auxiliary equation is therefore $H f - M_C^0 = 0$, which gives $H = \dfrac{M_C^0}{f}$. For the uniform load, $V_A^0 = \dfrac{qL}{2}$ and
$$
M_C^0 = \frac{qL}{2} \cdot \frac{L}{2} - \frac{qL}{2} \cdot \frac{L}{4} = \frac{qL^2}{8} .
$$
:::
::::

:::osservazione{#meta-scarica}
If one half of the arch is unloaded, the theorem for an unloaded member pinned at both ends implies that its springing reaction acts along the line joining the springing to the crown. Three forces then act on the other half: the resultant of the applied loads, its springing reaction, and the force transmitted at $C$. The lines of action of three nonparallel forces in equilibrium must meet at a point. The reaction at the springing of the loaded half therefore passes through the point $K$ where line $BC$ intersects the line of action of the load.

::struttura{nodi="A,0,0;C,6,4;B,12,0" aste="0 0-1 1.222;1 1.222-2 2.222;2 2.222-3 3;3 3-4 3.556;4 3.556-5 3.889;5 3.889-6 4;6 4-7 3.889;7 3.889-8 3.556;8 3.556-9 3;9 3-10 2.222;10 2.222-11 1.222;11 1.222-12 0" cerniere="C" vincoli="A,cerniera;B,cerniera" forze="3 3,0,-2,P" tratteggi="12,0 3,6;0,0 3,6;3,3 3,6" punti="3,6,K" quote="A,3 0,3 m,0.8;3 0,B,9 m,0.8" titolo="Half $CB$ is unloaded. The reaction at $B$ acts along $BC$, and the reaction at $A$ passes through point $K$"}

With $L = 12\,\mathrm{m}$, $f = 4\,\mathrm{m}$, and $P = 12\,\mathrm{kN}$ at $x = 3\,\mathrm{m}$, the equivalent beam gives $V_A = 9\,\mathrm{kN}$ and $V_B = 3\,\mathrm{kN}$. Line $BC$ rises by $4\,\mathrm{m}$ for every $6\,\mathrm{m}$ horizontally, so $H = \dfrac{6}{4}\,V_B = 4.5\,\mathrm{kN}$, in agreement with the formula $H = \dfrac{M_C^0}{f} = \dfrac{3 \cdot 6}{4}\,\mathrm{kN}$. Line $AK$ has slope $\dfrac{6}{3} = 2$, and indeed $\dfrac{V_A}{H_A} = \dfrac{9}{4.5} = 2$.
:::

## Loads applied at hinges

:::osservazione{#carico-nella-cerniera}
A force applied directly at an internal hinge must be assigned to one of the connected bodies, for example to the suspended span, to the end of the supporting span, or to the hinge pin treated as a separate body. The external reactions are independent of this choice because the force appears in the global equations at the same point whichever body receives it. The hinge forces do change, since the applied force is now included on one side of the connection or the other.

Consider a Gerber beam with the cantilever $AC$ fixed, hinge $C$ at $x = 2\,\mathrm{m}$, roller $B$ at $x = 6\,\mathrm{m}$, and force $P = 12\,\mathrm{kN}$ at $C$. Each assignment gives $V_B = 0$, $V_A = 12\,\mathrm{kN}$, and $M_A = 24\,\mathrm{kN\,m}$. If $P$ acts on segment $CB$, the hinge transmits $Y_C = 12\,\mathrm{kN}$. If it acts on the cantilever, $Y_C = 0$.

For an applied couple, its assignment is part of the problem data. A hinge transmits no couple, so a couple applied “at $C$” acts on just one of the two bodies, which must be specified.
:::

## Solution procedure and check

:::osservazione{#procedura-strutture-composte}
To analyze a statically determinate compound structure, proceed as follows.

- Identify the bodies and constraints, check that $s = 3n$, and verify that the restraints are properly arranged.
- Draw the free-body diagram of the entire structure with the external reactions positive along the coordinate axes. Replace each distributed load by its resultant, segment by segment. A load extending across a hinge must be split between the two bodies.
- Write the global equations and one auxiliary equation for each internal connection. Choose moment centers to reduce the number of unknowns per equation. Taking moments about a pin support eliminates its two reaction components.
- Separate the structure into bodies and determine the internal connection forces from the equilibrium of one body.
- State the direction of each reaction.
:::

:::osservazione{#verifica-globale}
Once all the unknowns have been determined, an equilibrium equation not used in the solution must give zero. A usual check is to take moments for the entire structure about a different point, or to check the equilibrium of the body that was not used to find the hinge forces. The second check also tests the directions assigned to the internal forces. On the second body the hinge forces must have the opposite signs to those assigned on the first.

For the portal frame with horizontal force $F = 12\,\mathrm{kN}$ in the example on the auxiliary equation, taking moments for the entire frame about $C$ gives
$$
-3\,V_A + 3\,H_A + 3\,V_E + 3\,H_E + 0 \cdot F = 18 - 18 + 18 - 18 = 0 ,
$$
because force $F$ acts at the elevation of $C$ and therefore has zero moment arm about $C$.
:::
