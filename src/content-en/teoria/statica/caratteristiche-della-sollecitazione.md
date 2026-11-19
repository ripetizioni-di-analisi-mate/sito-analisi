---
titolo: "Internal forces and moments: diagrams of N, T, and M"
sommario: "How to define axial force, shear force, and bending moment at a beam section, find them from equilibrium of either part, and draw their diagrams for beams, Gerber beams, frames, and three-hinged arches."
---

## Internal forces and moments in a beam

The support reactions found using the equilibrium equations of statics show how a structure transfers its loads to its supports. To size a beam, we need to know the forces its parts transmit across each section.

:::definizione{#trave-e-sezione titolo="Beam, axis, and cross section"}
A **beam** is a body with one dimension, its length, much greater than the other two. Its geometry is described by its **axis**, the line joining the centroids of its sections, and its **cross sections**, the plane regions perpendicular to that axis. The chapter on the geometry of masses covers centroids and section properties. In a plane structure the axis lies in the $xy$ plane and the loads act in that plane. For a straight horizontal beam, position is given by the coordinate $x$ of the section centroid. For an inclined or vertical member, the coordinate $s$ is measured along its axis.

The short segment between two nearby sections is called a **beam element**. It provides a way to define the positive directions of the internal forces and moments.
:::

:::definizione{#caratteristiche-della-sollecitazione titolo="Internal force and moment resultants"}
Consider a structure in equilibrium. A section $S$ divides its beam into a left and a right part, which exert distributed forces on each other across $S$. Reducing this system of forces to the centroid of the section gives an equivalent force and couple. Their components are the **internal force and moment resultants** at $S$:

- the **axial force** $N$, the force component along the beam axis;
- the **shear force** $T$, the force component perpendicular to the axis in the plane of the structure;
- the **bending moment** $M$, the moment of the couple about an axis perpendicular to that plane.

By the principle of action and reaction, the right part exerts forces and moments on the left part equal and opposite to those exerted by the left part on the right. Thus each internal resultant has a single value at the section and acts in opposite directions on the two faces. $N$ and $T$ are measured in $\mathrm{kN}$, and $M$ in $\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;B,8,0" aste="A-3 0;5 0-B" vincoli="A,cerniera;B,carrello" forze="3.7 0,0.7,0,N;4.3 0,-0.7,0,N;3.05 -0.9,0,-0.8,T;4.95 -0.1,0,0.8,T" coppie="3 0,1,M;5 0,-1,M" etichette="1.5,-0.9,left segment;6.5,-0.9,right segment;4,0.9,S" titolo="The two beam segments separated by section $S$ and the equal and opposite internal forces and moments they exert on each other"}

These resultants are used to assess stresses in the material: $N$ lengthens or shortens the beam, $T$ tends to slide one section past the next, and $M$ bends the beam. Strength checks, covered in Structural Mechanics, begin with the maximum values of these resultants.
:::

## Sign convention

The directions of $N$, $T$, and $M$ on the left face are opposite to those on the right face. Their signs are therefore defined by their effect on the beam element, which is the same for both faces.

:::definizione{#convenzione-di-segno titolo="Sign convention"}
For a horizontal beam oriented from left to right, with the reference fibers along the bottom, use the following signs:

- $N$ is positive in **tension**, when it tends to lengthen the element;
- $T$ is positive when it tends to rotate the element *clockwise*;
- $M$ is positive when it puts the *lower* fibers in tension, bending the element concave upward.

On the right face of the element, whose outward normal points in the direction of increasing $x$, positive $N$ acts to the right, $T$ downward, and $M$ counterclockwise. On the left face, positive $N$ acts to the left, $T$ upward, and $M$ clockwise.

::struttura{poligoni="0,0 1.2,0 1.2,0.8 0,0.8;3.2,0 4.4,0 4.4,0.8 3.2,0.8;6.4,0 7.6,0 7.6,0.8 6.4,0.8" tratteggi="0,0.12 1.2,0.12;3.2,0.12 4.4,0.12;6.4,0.12 7.6,0.12" forze="1.9 0.4,0.7,0,N;-0.7 0.4,-0.7,0,N;4.55 0.05,0,-0.7,T;3.05 0.75,0,0.7,T" coppie="7.75 0.4,1,M;6.25 0.4,-1,M" etichette="0.6,-0.6,N > 0;3.8,-0.6,T > 0;7,-0.6,M > 0" riferimento=0 titolo="Positive directions of $N$, $T$, and $M$ on the two faces of the element. The hatching identifies the lower fibers, which are in tension when $M$ is positive"}

With this convention, on a segment subject to a distributed load $q$ (positive downward), the relations $\dfrac{dT}{dx} = -q$ and $\dfrac{dM}{dx} = T$ hold. They are derived in the chapter on the differential equilibrium equations for a beam. A positive bending moment means that the beam sags, as in a simply supported beam loaded from above. A negative bending moment puts the upper fibers in tension, as at the fixed end of a cantilever.
:::

:::definizione{#diagrammi-delle-sollecitazioni titolo="Diagrams of N, T, and M"}
A **diagram** of an internal force or moment plots its value against position using the beam axis as the baseline. Use the following conventions:

- draw the diagram of $M$ on the side of the **fibers in tension**, below the axis where $M > 0$ and above where $M < 0$, without sign labels;
- draw the diagrams of $N$ and $T$ with positive values above the axis and label them with $+$ and $-$ signs;
- mark the values at the ends of each segment and at maxima and minima.

The diagrams identify the most highly loaded sections of the beam and the side in tension. This information determines, for example, where reinforcing steel is needed in a reinforced concrete beam.
:::

## Analysis by sections

Once the support reactions are known, the internal forces and moments can be found by taking a portion of the structure in equilibrium.

::::teorema{#calcolo-per-sezioni titolo="Finding internal forces and moments by sections"}
Consider a structure in equilibrium under its loads and support reactions, and let $S$ be a section through it. Then $N$, $T$, and $M$ at $S$ are the internal resultants that, applied to the cut face of the left-hand part, balance all external forces (loads and reactions) on that part. Taking the right-hand part in equilibrium gives the same values.

This result reduces the calculation of $N$, $T$, and $M$ at a section to three equilibrium equations with three unknowns, one per equation. The simpler part to analyze is the one with fewer forces. For a cantilever, choose the part containing the free end, since no support reactions act on it.

:::dimostrazione
Each part of a body in equilibrium is itself in equilibrium when the forces transmitted by the rest of the body are included. Let $R^{\mathrm{left}}_x$ and $R^{\mathrm{left}}_y$ be the components of the resultant external force on the left-hand part and $M^{\mathrm{left}}_S$ its moment about the centroid of $S$, positive counterclockwise. On the right face of the left-hand part, positive $N$ acts to the right, $T$ downward, and $M$ counterclockwise. Taking moments about the centroid of $S$ gives the following equilibrium equations for the left-hand part:
$$
\begin{cases}
R^{\mathrm{left}}_x + N = 0 \\[4pt]
R^{\mathrm{left}}_y - T = 0 \\[4pt]
M^{\mathrm{left}}_S + M = 0
\end{cases}
$$
and the moments of $N$ and $T$ about that point vanish because both lines of action pass through it. The system has a unique solution, so $N$, $T$, and $M$ are determined.

On the right-hand part, positive $N$ acts to the left, $T$ upward, and $M$ clockwise. The same equations give $N = R^{\mathrm{right}}_x$, $T = -R^{\mathrm{right}}_y$, and $M = M^{\mathrm{right}}_S$. The external forces on the two parts combine to give all the external forces on the structure, which are in equilibrium. Hence $R^{\mathrm{right}}_x = -R^{\mathrm{left}}_x$, $R^{\mathrm{right}}_y = -R^{\mathrm{left}}_y$, and $M^{\mathrm{right}}_S = -M^{\mathrm{left}}_S$. The two parts therefore give the same internal resultants.
:::
::::

:::osservazione{#regole-pratiche titolo="Working equations for a horizontal beam"}
The proof gives the formulas used in the exercises. Using the external forces acting to the left of section $S$ gives
$$
N = -R^{\mathrm{left}}_x ,
\qquad
T = R^{\mathrm{left}}_y ,
\qquad
M = -M^{\mathrm{left}}_S ;
$$
and using the external forces to its right gives
$$
N = R^{\mathrm{right}}_x ,
\qquad
T = -R^{\mathrm{right}}_y ,
\qquad
M = M^{\mathrm{right}}_S .
$$
In words, using the left-hand part, the shear equals the sum of the vertical force components, taken as positive upward. The bending moment equals the sum of their moments about $S$, taken as positive *clockwise*. For example, consider a simply supported beam with an upward reaction $V_A = 8\,\mathrm{kN}$ at $A$ and no load over the first $2\,\mathrm{m}$. At a distance $1.5\,\mathrm{m}$ from $A$, the resultants are $T = 8\,\mathrm{kN}$ and $M = 8 \cdot 1.5 = 12\,\mathrm{kN\,m}$ because $V_A$ produces a clockwise moment about the section.
:::

## Concentrated forces

Between two points where the loading changes, each internal force or moment is described by a single expression. These intervals are called **segments**, and the diagrams are constructed one segment at a time.

::::teorema{#andamento-nei-campi titolo="Variation along a uniformly loaded segment"}
Let $(a, b)$ be a segment of a horizontal beam carrying only a uniform downward load $q$, which may be zero. Let $N_a$, $T_a$, and $M_a$ be the values immediately to the right of $a$. Then for $a < x < b$,
$$
N(x) = N_a ,
\qquad
T(x) = T_a - q\,(x - a) ,
\qquad
M(x) = M_a + T_a\,(x - a) - \frac{q\,(x - a)^2}{2} .
$$
On unloaded segments, $T$ is constant and $M$ is linear. On uniformly loaded segments, $T$ is linear and $M$ is parabolic. Moreover, the derivative of $M$ is $T$, so at every point the slope of the $M$ diagram equals the shear force.

:::dimostrazione
The forces to the left of the section at $x$ are those to the left of $a$ together with the load on the segment from $a$ to $x$. Its resultant $q\,(x - a)$ acts downward through the midpoint of the segment. The horizontal resultant is unchanged, so the working equations give $N$ equal to $N_a$. The vertical resultant decreases by $q\,(x - a)$, so $T(x) = T_a - q\,(x - a)$. For moments, use the change-of-moment-center formula from the chapter on force systems. The moment about $x$ of the forces to the left of $a$ is $M^{\mathrm{left}}_a - (x - a)\,T_a$. The load on the segment has moment arm $\dfrac{x - a}{2}$ and counterclockwise moment $\dfrac{q\,(x - a)^2}{2}$. Reversing the sign according to the rule $M = -M^{\mathrm{left}}_S$ gives the expression for $M(x)$, and differentiation gives $T(x)$.
:::
::::

::::teorema{#salto-del-taglio titolo="Shear jump under a concentrated force"}
At coordinate $x_0$, suppose a concentrated force acts with components $F_x$ and $F_y$. Moving from left to right across $x_0$,
$$
N(x_0^+) - N(x_0^-) = -F_x ,
\qquad
T(x_0^+) - T(x_0^-) = F_y ,
$$
while $M$ is continuous. A downward vertical force $F$ therefore lowers the shear diagram by $F$. The $M$ diagram has a **corner** at $x_0$, since the two different shear values are the slopes immediately to the left and right.

:::dimostrazione
The forces to the left of a section just to the right of $x_0$ are those to the left of a section just to its left plus the force applied at $x_0$. By the working equations, $N$ changes by $-F_x$ and $T$ by $F_y$. The moment of the point force about a section approaching $x_0$ tends to zero because the moment arm tends to zero. Thus $M$ has no jump.
:::
::::

:::esempio{titolo="Simply supported beam under a point load"}
Beam $AB$ has length $6\,\mathrm{m}$ with a pin at $A$ and a roller at $B$. At $C$, a distance $2\,\mathrm{m}$ from $A$, it carries the downward force $F = 12\,\mathrm{kN}$. The reactions are $H_A = 0$, $V_A = 8\,\mathrm{kN}$, and $V_B = 4\,\mathrm{kN}$, with both vertical reactions upward. On segment $AC$ the only force to the left is $V_A$, giving $T = 8\,\mathrm{kN}$ and $M = 8x$. On segment $CB$ the right-hand part is simpler because it contains only $V_B$, giving $T = -4\,\mathrm{kN}$ and $M = 4\,(6 - x)$. At $C$ the shear drops by $12\,\mathrm{kN}$, that is, by $F$. The bending moment reaches its maximum $M_C = 16\,\mathrm{kN\,m}$, equal to $\dfrac{F a b}{L}$ with $a = 2\,\mathrm{m}$, $b = 4\,\mathrm{m}$, and $L = 6\,\mathrm{m}$.

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,8;2,0,6,0,-4" segni=1 titolo="Shear diagram $T$ ($\mathrm{kN}$)"}

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,8*s;2,0,6,0,-4*s+16" verso=-1 forze="C,0,-1.5,F" titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::

## Distributed loads

Under a distributed load the bending moment diagram is curved, and its maximum generally lies inside a segment.

:::esempio{titolo="Simply supported beam under a uniform load"}
Beam $AB$ of length $L = 6\,\mathrm{m}$ is simply supported at both ends and carries the uniform load $q = 4\,\mathrm{kN/m}$ over its entire span. By symmetry, $V_A = V_B = \dfrac{qL}{2} = 12\,\mathrm{kN}$. The part to the left of a section at coordinate $x$ carries reaction $V_A$ and load $q x$ with moment arm $\dfrac{x}{2}$, giving
$$
T(x) = 12 - 4x ,
\qquad
M(x) = 12x - 4x \cdot \frac{x}{2} = 12x - 2x^2 .
$$
The shear vanishes at midspan, where the bending moment is $M(3) = 18\,\mathrm{kN\,m}$, or $\dfrac{qL^2}{8}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,-2*s^2+12*s" verso=-1 carichi="A,B,0.6,0.6,q" titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::

:::osservazione{#momento-massimo titolo="Maximum moment where shear vanishes"}
By the result for a uniformly loaded segment, the derivative of $M$ is $T$. Thus, within a segment a bending moment extremum occurs at a section where the shear vanishes. An extremum can also occur at a segment boundary where the shear changes sign through a jump. To find the maximum moment inside a segment, solve $T(x) = 0$ and substitute the resulting coordinate into $M(x)$. The relation $\dfrac{dM}{dx} = T$ holds for any distributed load, as derived in the chapter on differential equilibrium equations for a beam.
:::

:::esempio{titolo="Cantilever under a triangular load"}
Cantilever $AB$, of length $L = 3\,\mathrm{m}$, is fixed at $A$. Its triangular load is $q_0 = 6\,\mathrm{kN/m}$ at $A$ and zero at the free end $B$. Consider the part to the right of the section at $x$, which carries no support reactions. The load on it forms a triangle of base $3 - x$ and height $2\,(3 - x)$. Its resultant $(3 - x)^2$ acts downward one-third of the base length from the section. The working equations give
$$
T(x) = (3 - x)^2 ,
\qquad
M(x) = -(3 - x)^2 \cdot \frac{3 - x}{3} = -\frac{(3 - x)^3}{3} .
$$
The shear is quadratic and the bending moment cubic. At the fixed support, $T = 9\,\mathrm{kN}$ and $M = -9\,\mathrm{kN\,m}$, with the upper fibers in tension. The corresponding reactions are $V_A = 9\,\mathrm{kN}$ upward and $M_A = 9\,\mathrm{kN\,m}$ counterclockwise.
:::

## Concentrated couples and overhangs

::::teorema{#salto-del-momento titolo="Moment jump at a concentrated couple"}
At the section with coordinate $x_0$, suppose a concentrated couple $\mathcal{M}$ acts, positive counterclockwise. Then
$$
M(x_0^+) - M(x_0^-) = -\mathcal{M} ,
$$
while $N$ and $T$ are continuous. A counterclockwise couple reduces the value of $M$ by $\mathcal{M}$, while a clockwise couple increases it. The slopes on either side agree because the shear is unchanged.

:::dimostrazione
The forces to the left of a section just to the right of $x_0$ are those just to its left plus the couple $\mathcal{M}$. The couple has zero resultant force, so $N$ and $T$ are unchanged. Its moment is $\mathcal{M}$ about any point. By the rule $M = -M^{\mathrm{left}}_S$ the bending moment therefore changes by $-\mathcal{M}$.
:::
::::

:::esempio{titolo="Simply supported beam under a couple"}
Beam $AB$ of length $6\,\mathrm{m}$ is simply supported at its ends. At $C$, a distance $2\,\mathrm{m}$ from $A$, it carries the counterclockwise couple $\mathcal{M} = 12\,\mathrm{kN\,m}$. Taking moments about $B$ gives $V_A = \dfrac{\mathcal{M}}{L} = 2\,\mathrm{kN}$ upward, and vertical force equilibrium gives $V_B = -2\,\mathrm{kN}$, or $2\,\mathrm{kN}$ downward. The shear is $2\,\mathrm{kN}$ throughout the beam. The bending moment is $M = 2x$ on segment $AC$ and $M = 2x - 12$ on segment $CB$. At $C$ it drops from $4\,\mathrm{kN\,m}$ to $-8\,\mathrm{kN\,m}$, and the two linear segments of the diagram are parallel.

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,2*s;2,0,6,0,2*s-8" verso=-1 coppie="C,1,ℳ" titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::

:::esempio{titolo="Overhanging beam"}
Beam $AC$, of length $6\,\mathrm{m}$, has a pin at $A$ and a roller at $B$ a distance $4\,\mathrm{m}$ from $A$. Segment $BC$ is an **overhang**. Uniform load $q = 3\,\mathrm{kN/m}$ acts on $AB$ and downward force $F = 4\,\mathrm{kN}$ acts at the free end $C$. Moment equilibrium about $A$ gives $4\,V_B - 12 \cdot 2 - 4 \cdot 6 = 0$, hence $V_B = 12\,\mathrm{kN}$, and vertical equilibrium gives $V_A = 4\,\mathrm{kN}$. Both reactions act upward. On segment $AB$,
$$
T(x) = 4 - 3x ,
\qquad
M(x) = 4x - \frac{3x^2}{2} ;
$$
while on the overhang, using the right-hand part gives $T = 4\,\mathrm{kN}$ and $M = -4\,(6 - x)$. At $B$ the shear rises by $12\,\mathrm{kN}$, or $V_B$, and the moment equals $-8\,\mathrm{kN\,m}$. The shear vanishes at $x = \dfrac{4}{3}\,\mathrm{m}$, where the positive moment reaches its maximum $\dfrac{8}{3}\,\mathrm{kN\,m} \approx 2.67\,\mathrm{kN\,m}$. The overhang makes the moment over the support negative and puts the upper fibers in tension.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,4,0,-1.5*s^2+4*s;4,0,6,0,4*s-8" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::

## Gerber beams

In a Gerber beam the reactions and internal hinge forces can be found by separating the beam into segments, as in the chapter on compound structures. Once the reactions are known, the beam can be analyzed as one continuous assembly.

:::osservazione{#cerniera-interna titolo="Zero bending moment at an internal hinge"}
An internal hinge transmits forces $X_C$ and $Y_C$ between the two segments, but no couple. The bending moment at the hinge is the moment transmitted between the segments, so it is zero, $M_C = 0$. If no concentrated forces act at the hinge, $N$ and $T$ are continuous, and the moment diagram passes through the hinge without a jump or a corner. The condition $M_C = 0$ also provides a numerical check.
:::

:::esempio{titolo="Gerber beam under a uniform load"}
Beam $AB$, of length $6\,\mathrm{m}$, is fixed at $A$, has an internal hinge at $C$ a distance $2\,\mathrm{m}$ from $A$, and rests on a roller at $B$. Uniform load $q = 2\,\mathrm{kN/m}$ acts over the entire beam. Segment $CB$, supported at $C$ and $B$, carries $8\,\mathrm{kN}$, so $V_B = 4\,\mathrm{kN}$ and segment $CB$ bears on segment $AC$ with a force of $4\,\mathrm{kN}$. For the whole beam, equilibrium gives $V_A = 8\,\mathrm{kN}$ upward and $M_A = 12\,\mathrm{kN\,m}$ counterclockwise. Using the part to the left of a section at $x$ gives
$$
T(x) = 8 - 2x ,
\qquad
M(x) = -12 + 8x - x^2 ,
$$
a single expression over the entire beam because the distributed load is the same throughout. The moment vanishes at hinge $C$ and reaches its positive maximum $4\,\mathrm{kN\,m}$ at $x = 4\,\mathrm{m}$, where $T = 0$.

::struttura{nodi="A,0,0;C,2,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,carrello" cerniere="C" diagramma="0,0,2,0,-s^2+8*s-12;2,0,6,0,-s^2+4*s" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::

## Frames with vertical and inclined members

The members of a frame run in different directions, so *left*, *right*, *above*, and *below* must be interpreted relative to the individual member.

:::definizione{#fibre-di-riferimento titolo="Member orientation and reference fibers"}
Choose an **orientation** for each frame member to define the coordinate $s$ along its axis. Hatch the **reference fibers** on the right when looking in that direction. Rotate the sketch until the member runs horizontally from left to right. The hatched fibers are then at the bottom, and the horizontal beam sign convention and working equations apply: $M > 0$ puts the hatched fibers in tension and $T > 0$ tends to rotate the element clockwise. The axial-force convention is independent of the orientation: $N > 0$ denotes tension.

For a portal frame the usual orientation follows the structure from one base to the other: up the left column, across the beam, and down the right column. The hatched fibers are then on the inside throughout the frame. As for a beam, the $M$ diagram is drawn on the tension side.
:::

:::osservazione{#aste-inclinate titolo="Components parallel and perpendicular to a member"}
Consider a member making an angle $\alpha$ with the $x$ axis, oriented along the unit vector $\hat{t} = (\cos\alpha, \sin\alpha)$. Let $\hat{n} = (-\sin\alpha, \cos\alpha)$ be the unit vector obtained by rotating that vector $90^\circ$ counterclockwise. The working equations become
$$
N = -\big( R^{\mathrm{left}}_x \cos\alpha + R^{\mathrm{left}}_y \sin\alpha \big) ,
\qquad
T = -R^{\mathrm{left}}_x \sin\alpha + R^{\mathrm{left}}_y \cos\alpha ,
\qquad
M = -M^{\mathrm{left}}_S ,
$$
where *left* denotes the portion preceding the section in the chosen direction. At $\alpha = 0$ we recover the horizontal beam equations. For a column oriented from bottom to top, with $\alpha = 90^\circ$, the relations are $N = -R^{\mathrm{left}}_y$ and $T = -R^{\mathrm{left}}_x$. A vertical force on an inclined member thus contributes to both axial force and shear.
:::

::::teorema{#nodo-rigido titolo="Moment continuity at a rigid joint"}
Consider a rigid joint connecting two members oriented in succession, with the reference fibers hatched to the right of that orientation on both members. Suppose at most a concentrated force acts at the joint. The bending moment at the end of the first member then equals that at the start of the second. If a counterclockwise couple $\mathcal{M}$ is also applied, the bending moment changes by $-\mathcal{M}$, just as in a straight beam.

For a portal frame oriented from one base to the other, the $M$ diagram therefore stays on the same side as it crosses from the column to the beam. If the inside fibers of the column are in tension, the inside fibers of the beam are also in tension.

:::dimostrazione
Isolate the portion between a section in the first member and one in the second, each a distance $\varepsilon$ from the joint. The first section is a left face in the chosen direction, with a clockwise moment $M_1$. The second is a right face, with a counterclockwise moment $M_2$. Moment equilibrium about the joint gives $M_2 - M_1$ plus the moments of the forces on the two faces and of any force applied at the joint, all equal to zero. These forces have moment arms of at most $\varepsilon$, so as $\varepsilon \to 0$ we obtain $M_2 = M_1$. With a couple $\mathcal{M}$ at the joint, the equation becomes $M_2 - M_1 + \mathcal{M} = 0$.
:::
::::

:::esempio{titolo="Portal frame under a horizontal force"}
Portal frame $ABCD$ has columns $AB$ and $DC$ of height $4\,\mathrm{m}$ and a crossbeam $BC$ of length $4\,\mathrm{m}$. It has a pin at $A$ and a roller at $D$ and carries at $B$ a horizontal force $F = 6\,\mathrm{kN}$ to the right. The reactions are $H_A = -6\,\mathrm{kN}$, or $6\,\mathrm{kN}$ to the left, $V_A = -6\,\mathrm{kN}$, or $6\,\mathrm{kN}$ downward, and $V_D = 6\,\mathrm{kN}$ upward. Orient the frame from $A$ to $D$, with the reference fibers hatched on the inside.

- Column $AB$, with $s$ measured from $A$. The portion preceding the section carries $H_A$ with moment arm $s$, giving $M = 6s$, a positive moment that puts the inside fibers in tension. The other resultants are $N = 6\,\mathrm{kN}$ in tension and $T = 6\,\mathrm{kN}$.
- Crossbeam $BC$, with $s$ measured from $B$. The portion following the section carries only $V_D$, giving $M = 6\,(4 - s)$, from $24\,\mathrm{kN\,m}$ at $B$ to zero at $C$. The other resultants are $T = -6\,\mathrm{kN}$ and $N = 0$.
- Column $CD$. The force $V_D$ acts along the axis, so $M = 0$, $T = 0$, and $N = -6\,\mathrm{kN}$, with the column in compression.

At $B$ the bending moment is $24\,\mathrm{kN\,m}$ both at the top of the column and at the start of the crossbeam. The inside fibers are in tension in both members, as required by the rigid-joint theorem.

::struttura{nodi="A,0,0;B,0,4;C,4,4;D,4,0" aste="A-B;B-C;C-D" vincoli="A,cerniera;D,carrello" diagramma="0,0,0,4,6*s;0,4,4,4,-6*s+24;4,4,4,0,0" verso=-1 scala=0.025 numeri=0 etichette="-0.35,3.7,24" titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::

## Three-hinged arch

A three-hinged arch with straight segments can be analyzed as a frame. The horizontal thrust found in the chapter on compound structures compresses the crossbeam and produces moments opposite in sign to those of a simply supported beam.

:::osservazione{#asta-tra-due-cerniere titolo="Unloaded member between two hinges"}
Consider a straight member pinned to the rest of the structure at both ends, with no loads along its length. The member is in equilibrium under the two hinge forces alone. These forces are therefore equal and opposite and act along the line joining the hinges, which coincides with the member axis. Thus at every section $T = 0$, $M = 0$, and $N$ is constant. The member acts as a two-force member. In a three-hinged arch made up of two such straight members with a single force applied at the crown, both members meet these conditions and carry only compression.
:::

:::esempio{titolo="Three-hinged portal frame under uniform load"}
The portal frame is pinned at bases $A$ and $B$. Columns $AD$ and $BE$ have height $4\,\mathrm{m}$, and crossbeam $DE$ of length $6\,\mathrm{m}$ has an internal hinge $C$ at midspan. Uniform load $q = 4\,\mathrm{kN/m}$ acts on the crossbeam. By symmetry, $V_A = V_B = 12\,\mathrm{kN}$. The zero-moment condition at $C$ for the left-hand part gives a rightward thrust $H_A = \dfrac{9}{2}\,\mathrm{kN}$, and horizontal force equilibrium gives $H_B = -\dfrac{9}{2}\,\mathrm{kN}$, directed to the left. Orient the frame from $A$ to $B$ with the inside fibers hatched.

- Column $AD$: $M = -\dfrac{9}{2}\,s$, so the outside fibers are in tension and at $D$ the moment is $M = -18\,\mathrm{kN\,m}$. The other resultants are $N = -12\,\mathrm{kN}$.
- Crossbeam $DE$, with $s$ measured from $D$: $M = -18 + 12s - 2s^2$, which vanishes at $C$ for $s = 3\,\mathrm{m}$ and returns to $-18\,\mathrm{kN\,m}$ at $E$. The axial force is $N = -\dfrac{9}{2}\,\mathrm{kN}$, so the thrust puts the crossbeam in compression.
- Column $EB$: by symmetry, $M$ varies from $-18\,\mathrm{kN\,m}$ at $E$ to zero at $B$.

Without the thrust, the crossbeam would act as a simply supported beam with maximum moment $\dfrac{qL^2}{8} = 18\,\mathrm{kN\,m}$ at midspan. The thrust shifts the diagram toward the outside fibers and reduces the moment to zero at hinge $C$.

::struttura{nodi="A,0,0;D,0,4;C,3,4;E,6,4;B,6,0" aste="A-D;D-E;E-B" vincoli="A,cerniera;B,cerniera" cerniere="C" diagramma="0,0,0,4,-4.5*s;0,4,3,4,-2*s^2+12*s-18;3,4,6,4,-2*s^2;6,4,6,0,4.5*s-18" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$)"}
:::
