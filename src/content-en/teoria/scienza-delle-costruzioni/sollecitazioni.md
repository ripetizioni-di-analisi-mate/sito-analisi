---
titolo: "Axial force, shear force, and bending moment"
sommario: "Section equilibrium gives the internal forces and moments and explains the slopes, jumps, extreme values, and sign changes in beam and frame diagrams."
---

## Internal forces and moments and their positive directions

:::definizione{#convenzione-ntm titolo="Sign convention for a horizontal beam"}
To examine the loading within a beam at a given point, introduce an imaginary cut. The removed portion exerted a distribution of forces on the remaining portion across the cut surface. Equilibrium of the isolated portion determines the resultant of those forces and their moment about the point where the beam axis crosses the section.

Consider a horizontal beam with the $x$ axis to the right and the $y$ axis upward. On the cut face of the left segment use the following positive directions.

- The **axial force** $N$ is positive to the right. On the two segments the positive arrows pull the faces apart, so $N>0$ signifies tension.
- The **shear force** $T$ is positive downward. On opposite faces of a beam element, the two positive arrows tend to rotate the element clockwise.
- The **bending moment** $M$ is positive counterclockwise. For bending of the horizontal beam about a principal axis, $M>0$ puts the bottom fibers in tension.

Reverse all the arrows on the right segment. The same internal force or moment therefore has the same sign whichever segment is isolated, provided the directions appropriate to the chosen face are used. Forces are expressed in kilonewtons and moments in kilonewton-meters.

::struttura{nodi="A,0,0;B,3,0;C,4,0;D,7,0" aste="A-B;C-D" nomi=0 reazioni="B,0.8,0,N;B,0,-0.8,T;C,-0.8,0,N;C,0,0.8,T" coppie="B,1,M;C,-1,M" titolo="Positive directions on both sides of a cut, shown separated"}
:::

:::esempio{titolo="Tension and compression on the right-hand face"}
Consider a straight member under two opposite forces along its axis. If the right end carries a rightward force of $8\,\mathrm{kN}$, the right segment requires a leftward force of $8\,\mathrm{kN}$ on the cut face. This is the positive direction on the left face of the right segment, so $N=8\,\mathrm{kN}$. If the external force at the right end instead points left, the cut face needs a rightward force and $N=-8\,\mathrm{kN}$. In both cases isolating the left segment gives the same value. Since the forces lie along the axis, shear and bending moment are zero.
:::

:::esempio{titolo="Longitudinal members beneath a bridge deck"}
The side view shows the steel members below the roadway. The structural model distinguishes the longitudinal members running along the bridge from the transverse members connecting them. To draw the diagrams for one beam, isolate the member, its supports, and the loads transferred from adjacent members. The cross-sectional shear force is made in this idealized structural model.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/travi-da-sotto.webp" alt="Side view of a steel bridge showing the structural members beneath the roadway" width="1280" height="720" loading="lazy" decoding="async"><figcaption>Longitudinal members beneath a bridge deck. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Steel_Bridge_Inspection_-_Going_underneath_the_bridge_to_take_a_look.jpg">Oregon Department of Transportation</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</figcaption></figure>
:::

## Method of sections

::::teorema{#metodo-sezione titolo="Equilibrium of a beam segment"}
Suppose the support reactions are known for a planar structure in equilibrium. Cut the beam at an interior section and isolate the portion to the left. Let $F_{x,\mathrm{left}}$ and $F_{y,\mathrm{left}}$ be the external force resultants, positive along the coordinate axes, and let $M_{\mathrm{left}}$ be the sum of external moments about the section, positive counterclockwise. Then
$$
N=-F_{x,\mathrm{left}},
\qquad
T=F_{y,\mathrm{left}},
\qquad
M=-M_{\mathrm{left}}.
$$
On the right segment the directions at the cut are reversed, so the corresponding external sums give $N=F_{x,\mathrm{right}}$, $T=-F_{y,\mathrm{right}}$, and $M=M_{\mathrm{right}}$. Taking moments about the cut eliminates the two unknown forces $N$ and $T$. The internal couple at the cut appears directly in the moment equation.

:::dimostrazione
The isolated segment must remain in equilibrium when the removed portion is replaced by the three section resultants. For the left segment the axial resultant is $F_{x,\mathrm{left}}+N$ and the vertical resultant is $F_{y,\mathrm{left}}-T$. The resultant moment about the shear force is $M_{\mathrm{left}}+M$. Each sum is zero, giving the stated expressions. Since the beam as a whole is in equilibrium, the external sums for the two segments are equal and opposite when taken about the same point. A calculation from the right therefore recovers the same three values.
:::
::::

:::esempio{titolo="Cutting a cantilever from the right"}
A cantilever of length $5\,\mathrm{m}$ carries a downward force $P=8\,\mathrm{kN}$ at the tip. Cut the beam at a distance $3\,\mathrm{m}$ from the fixed end and isolate the tip segment. Its only external force is the tip load, so $F_{y,\mathrm{right}}=-8\,\mathrm{kN}$ and $T=8\,\mathrm{kN}$. Its moment arm about the section is $2\,\mathrm{m}$, giving a clockwise external moment of $-16\,\mathrm{kN\,m}$. On the cut face of the right segment, a positive moment is clockwise, so equilibrium requires a negative value of $M$. This gives $M=-16\,\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;S,3,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="B,0,-0.9,P" quote="A,S,3 m;S,B,2 m" titolo="Cantilever with cut section S and a vertical tip load"}
:::

:::osservazione{titolo="Choosing which segment to isolate"}
If the cut lies near the free tip, the right segment may contain only a few known loads, making it unnecessary to find the support reactions. If only one known reaction acts on the left, the left segment gives a shorter expression. For a whole interval, retain the cut coordinate as a variable. Start a new expression whenever the isolated portion picks up a point force or couple, or when the cut reaches a region with a different load distribution.
:::

## Local equations and signed areas

::::teorema{#relazioni-diagrammi titolo="Relations among load, shear force, and bending moment"}
Let $q(x)$ be the distributed transverse load intensity, positive downward. Let $p(x)$ be the axial load per unit length, positive to the right. On an interval where these loads are continuous and there are no concentrated forces or couples,
$$
N'(x)=-p(x),
\qquad
T'(x)=-q(x),
\qquad
M'(x)=T(x).
$$
The slope of the $M$ diagram is therefore given by the values of $T$ over the same interval. If $q$ is uniform and nonzero, $T$ is linear and $M$ is a quadratic polynomial.

:::dimostrazione
Compare two sections a distance $h>0$ apart. Moving the cut from $x$ to $x+h$ adds the distributed axial load of intensity $p$ and the transverse load of intensity $q$ to the left segment. The differences in the internal forces satisfy
$$
\begin{aligned}
N(x+h)-N(x)&=-\int_x^{x+h}p(u)\,\mathrm du,\\[6pt]
T(x+h)-T(x)&=-\int_x^{x+h}q(u)\,\mathrm du.
\end{aligned}
$$
In the moment equation, the vertical forces already acting on the original segment each acquire an additional moment arm $h$. Their contribution to the change in $M$ is $hT(x)$. The newly included distributed load has a moment arm of $x+h-u$ at position $u$, giving
$$
M(x+h)-M(x)=hT(x)-\int_x^{x+h}(x+h-u)q(u)\,\mathrm du.
$$
The second term is of order $h^2$ because $q$ is bounded near $x$, the interval has length $h$, and the moment arm is at most $h$. Divide the three differences by $h$ and take the limit. The first two averages approach their respective load intensities, while the third balance leaves $T(x)$.
:::
::::

:::osservazione{#aree-ntm titolo="Changes over regular intervals"}
Between two sections with coordinates $a$ and $b$ joined by a regular interval, the change in shear force is the negative of the signed area under $q$. The change in moment is the signed area under $T$. For example, if $T$ varies linearly from $6\,\mathrm{kN}$ to $-2\,\mathrm{kN}$ over a length $4\,\mathrm{m}$, its algebraic mean is $2\,\mathrm{kN}$. The change in moment is therefore $8\,\mathrm{kN\,m}$, even though the moment decreases over part of the interval. The area relations provide a check on the values at each interval boundary.
:::

:::esempio{titolo="Resultant of a partially included triangular load"}
Over a length of $6\,\mathrm{m}$, the intensity increases linearly from zero to $6\,\mathrm{kN/m}$. For an interior cut at coordinate $x$, the part to the left of the cut reaches an intensity of $x$ in kilonewtons per meter. Its resultant is $\dfrac{x^2}{2}$ in kilonewtons and acts at a distance $\dfrac{2x}{3}$ from the start of the load. Its moment arm about the shear force is therefore $\dfrac{x}{3}$. If $V_A$ is the vertical reaction at the origin, then $T(x)=V_A-\dfrac{x^2}{2}$ and $M(x)=V_Ax-\dfrac{x^3}{6}$, with coordinates in meters and moment in kilonewton-meters. A linearly varying load therefore gives quadratic shear and cubic moment.

::struttura{nodi="A,0,0;S,3,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0,1,6 kN/m" quote="A,S,3 m;S,B,3 m" titolo="Triangular load and interior cut S"}
:::

## Jumps and one-sided limits

::::teorema{#salti-diagrammi titolo="Jumps in the diagrams"}
Consider an interior point of coordinate $a$ carrying an axial force $F_x$ positive to the right, a transverse force $P$ positive downward, and a couple $\mathcal M$ positive counterclockwise. The change in each section resultant from left to right is
$$
\begin{aligned}
N(a^+)-N(a^-)&=-F_x,\\[6pt]
T(a^+)-T(a^-)&=-P,\\[6pt]
M(a^+)-M(a^-)&=-\mathcal M.
\end{aligned}
$$
The symbols $a^-$ and $a^+$ denote sections immediately before and after the load application point. An upward support reaction enters the second formula with $P<0$ and therefore produces an upward jump in $T$.

:::dimostrazione
Isolate a short element containing section $a$ and consider force equilibrium. Its left face carries $-N(a^-)$ in the axial direction and $T(a^-)$ in the positive transverse direction. Its right face carries $N(a^+)$ and $-T(a^+)$. As the length of the element tends to zero, bounded distributed loads have zero resultant. Only the concentrated forces remain, giving the first two equalities. For moments about section $a$, the force moment arms tend to zero. The three terms that remain are $-M(a^-)$, $M(a^+)$, and $\mathcal M$. Moment equilibrium therefore gives the final equality.
:::
::::

:::esempio{titolo="Force and couple at the same section"}
Suppose that just to the left of a section $T=7\,\mathrm{kN}$ and $M=15\,\mathrm{kN\,m}$. If a downward force of $10\,\mathrm{kN}$ and a counterclockwise couple of $6\,\mathrm{kN\,m}$ act at the section, shear changes to $-3\,\mathrm{kN}$ and moment to $9\,\mathrm{kN\,m}$. Without the couple, the two one-sided limits of $M$ would both equal $15\,\mathrm{kN\,m}$, even though the slopes on either side have opposite signs. The point force produces a corner in the moment diagram, whereas the couple produces a discontinuity.
:::

## Reading the diagrams together

:::esempio{titolo="Simply supported beam with a point load within the span"}
A beam of length $5\,\mathrm{m}$ is simply supported at both ends and carries a downward force of $10\,\mathrm{kN}$ at a distance $2\,\mathrm{m}$ from the left support. Taking moments about the first support gives $V_B=4\,\mathrm{kN}$, and vertical equilibrium gives $V_A=6\,\mathrm{kN}$. Make a cut before the point load. Only the reaction $V_A$ acts on the left segment, so $T=6\,\mathrm{kN}$ and $M(x)=6x$, with $x$ in meters and moment in kilonewton-meters. Beyond the point load, the shear force is $-4\,\mathrm{kN}$ and the moment becomes $M(x)=6x-10(x-2)$.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="C,0,-0.95,10 kN" quote="A,C,2 m;C,B,3 m" titolo="Simply supported beam with a point load at C"}

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" diagramma="0,0,2,0,6;2,0,5,0,-4" segni=1 titolo="Shear force in kilonewtons, with a jump of −10 at C"}

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" diagramma="0,0,2,0,6*s;2,0,5,0,12-4*s" verso=-1 titolo="Bending moment in kilonewton-meters, plotted on the tension side"}

The change in moment over the first interval is $6\cdot2=12\,\mathrm{kN\,m}$ and over the second it is $-4\cdot3=-12\,\mathrm{kN\,m}$. Starting from zero at the left support, the diagram reaches $12\,\mathrm{kN\,m}$ under the load and returns to zero at the right support. The sum of the signed areas under the shear diagram checks that both end moments are zero. The positive moment is plotted below the beam axis because the bottom fibers are in tension. The position below the axis reflects the plotting convention. Read the sign using the tension side and the scale shown in the figure.
:::

:::osservazione{titolo="Global and local coordinates"}
An expression can use the global coordinate $x$ or a local coordinate $s$ measured from the start of the interval. At the first point of the second interval in the example, $x=2\,\mathrm{m}$ and $s=0$. Thus $M=12-4s$ when meters and kilonewton-meters are used. The coefficient of $s$ still equals $T$, while the constant term gives the moment at the start of the interval. An origin local to each interval is convenient when constructing a piecewise diagram from known boundary values.
:::

## Extrema, hinges, and end conditions

:::osservazione{#valori-ai-vincoli titolo="Boundary conditions"}
In the absence of an applied couple, the moment is zero at the pinned or simply supported end of a beam. At a free end with no applied force or couple, all three section resultants approach zero from inside the beam. At a fixed end the moment is generally nonzero because the support can exert a couple. An ideal internal hinge allows relative rotation and transmits a force with two components. If no couple acts directly at the end of a member meeting the hinge, that member has zero moment at the hinge.
:::

:::attenzione{titolo="Intermediate support on a continuous beam"}
A beam supported at $A$ and $B$ extends past $B$ as an overhang of length $2\,\mathrm{m}$. At tip $C$, a force $P=10\,\mathrm{kN}$ acts downward. For a cut just to the right of $B$, the moment of external loads on the tip segment about the cut tends to $-20\,\mathrm{kN\,m}$. Since the vertical reaction at $B$ is unaccompanied by a concentrated couple, the moment has the same limit from the left. The roller at $B$ allows rotation relative to the ground. The beam cross section is continuous and can therefore transmit moment through the support.

::struttura{nodi="A,0,0;B,5,0;C,7,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="C,0,-1.25,P" quote="A,B,5 m;B,C,2 m" titolo="Continuous beam with an intermediate roller and a load at the overhang tip"}

::struttura{nodi="A,0,0;B,5,0;C,7,0" aste="A-C" diagramma="0,0,5,0,-4*s;5,0,7,0,-20+10*s" verso=-1 titolo="Bending moment in kilonewton-meters. The value at B is −20"}
:::

:::osservazione{#estremi-momento titolo="Locating the most highly loaded sections"}
Within a regular interval a moment extremum can occur where $T=0$. The shear signs on either side distinguish a maximum, a minimum, and a stationary point with no extremum. A point load can change $T$ from positive to negative without a zero shear value at the load itself. If $M$ is continuous there, it still has a local maximum. At an applied couple, calculate the two one-sided limits of the moment separately. To find the maximum of $\lvert M\rvert$, compare the magnitudes of the one-sided values at interval boundaries and the interior values where monotonicity changes.
:::

## Local axes in frames

:::definizione{#assi-locali titolo="Coordinate system for an individual member"}
In a frame the members can point in different directions. For each member, take the local coordinate $s$ from its starting joint to its ending joint. Rotate the longitudinal unit vector counterclockwise by a quarter turn to obtain the positive transverse unit vector. On the segment preceding the cut, positive $N$ acts along $s$, positive $T$ acts opposite to the transverse unit vector, and positive $M$ is counterclockwise. For an upward-oriented column, the positive transverse unit vector points left. A vertical force that contributes to shear in a horizontal beam can contribute to axial force in the column.

::struttura{nodi="A,0,0;B,0,3;C,4,3" aste="A-B;B-C" vincoli="A,incastro" forze="C,0,-0.8,P" frecce="0,1,0,2,s_AB;0,1,-0.85,1,y_AB;2,3,3.1,3,s_BC;2,3,2,3.8,y_BC" quote="A,B,3 m;B,C,4 m,-1.25" titolo="Local axes of the column and beam in a cantilever frame"}
:::

:::esempio{titolo="Vertical force on a cantilever frame"}
Column $AB$ is $3\,\mathrm{m}$ high and beam $BC$ is $4\,\mathrm{m}$ long. At $C$, a force $P=12\,\mathrm{kN}$ acts downward. Orient the members from $A$ to $B$ and from $B$ to $C$, and isolate the portion beyond each cut. In the beam the entire force is transverse, so $T=12\,\mathrm{kN}$ and $N=0$. Its moment arm about the shear force is $4-s$, with $s$ in meters from $B$. The moment is therefore $M(s)=-12(4-s)$ in kilonewton-meters. In the column the force is entirely axial and acts opposite to the local direction, so $N=-12\,\mathrm{kN}$ and $T=0$. Its line of action remains a constant horizontal distance of $4\,\mathrm{m}$ from every column section. Thus $M=-48\,\mathrm{kN\,m}$ throughout that member.

::struttura{nodi="A,0,0;B,0,3;C,4,3" aste="A-B;B-C" diagramma="0,0,0,3,-48;0,3,4,3,-48+12*s" verso=-1 etichette="0,-0.5," titolo="Frame bending moment in kilonewton-meters, plotted on the tension sides"}

At rigid joint $B$, the moment at the end of $AB$ equals the moment at the start of $BC$. The actual moments exerted by the two members on the joint are opposite because they refer to end faces with opposite orientations. The axial and shear components can differ between the members because their local directions change.
:::

## Critical sections in the diagrams

:::esempio{titolo="Section of maximum moment under partial loading"}
Consider a simply supported beam of length $8\,\mathrm{m}$. A uniformly distributed load of $6\,\mathrm{kN/m}$ acts between coordinates $2\,\mathrm{m}$ and $6\,\mathrm{m}$. Its resultant is $24\,\mathrm{kN}$ and by symmetry acts at midspan. The support reactions are therefore $12\,\mathrm{kN}$ each. Before the load begins, the shear is $12\,\mathrm{kN}$ and the moment at $x=2\,\mathrm{m}$ is $24\,\mathrm{kN\,m}$. Under the load, let $s=x-2$ be the distance in meters from the start of the loaded segment. The shear and moment are
$$
T(s)=12-6s,
\qquad
M(s)=24+12s-3s^2,
$$
in kilonewtons and kilonewton-meters, respectively. The shear passes through zero when $s=2$, at coordinate $4\,\mathrm{m}$. It is positive before this section and negative after it. The moment therefore reaches its maximum value of $36\,\mathrm{kN\,m}$. At $s=4$ the moment returns to $M=24\,\mathrm{kN\,m}$ because the positive and negative areas under the shear diagram cancel. It then decreases linearly to the right support. At the boundaries of the loaded interval the loading changes and the shear is continuous with a change of slope. The moment and its derivative therefore remain continuous at both boundaries.
:::

:::esempio{titolo="Constant moment between two opposite couples"}
A simply supported beam of length $7\,\mathrm{m}$ carries a clockwise couple of $9\,\mathrm{kN\,m}$ at a distance $2\,\mathrm{m}$ from the origin and an equal counterclockwise couple at $5\,\mathrm{m}$ from the origin. The couples sum to zero and the loading includes no net force. Since the two supports are distinct, both vertical reactions are zero. The shear therefore vanishes everywhere. The moment is constant on each of the three intervals, but its value changes at each couple. Starting at zero at the left support, it rises to $9\,\mathrm{kN\,m}$ at the clockwise couple and returns to zero at the counterclockwise couple. Every section between the couples has the same maximum value of $M$. The example shows that a region can be in bending with zero shear at every section.
:::

## Equilibrium checks for the diagrams

:::osservazione{#controllo-diagrammi titolo="Equilibrium of the opposite segment"}
To check an internal value, calculate the same quantity by isolating the opposite segment. Consider the simply supported beam of length $5\,\mathrm{m}$ with a force of $10\,\mathrm{kN}$ at a distance $2\,\mathrm{m}$ from the left. At the section at $3\,\mathrm{m}$, analysis from the left gives $T=6-10=-4\,\mathrm{kN}$ and $M=6\cdot3-10\cdot1=8\,\mathrm{kN\,m}$. Only the upward reaction of $4\,\mathrm{kN}$ acts to the right of the section. The shear is the negative of this force, giving $-4\,\mathrm{kN}$. The bending moment equals the external moment of the right segment about the cut, which is $4\cdot2=8\,\mathrm{kN\,m}$. This check uses a balance involving different forces and can reveal sign errors missed by comparing formulas derived from the same equation.
:::

:::osservazione{titolo="Check at an internal hinge"}
For a beam with an internal hinge, its zero moment can be used before all support reactions are known. If the segment to the right also has a support at its right end, taking moments about the hinge eliminates both transmitted force components. This gives the right support reaction. Vertical equilibrium then gives the vertical hinge force, which acts on the left portion in the opposite direction. A cut approaching the hinge must subsequently give a moment tending to zero from both sides. The shear can be nonzero because the hinge transmits vertical force. If no external transverse force acts at the hinge, the shear has the same limit from both sides. The transmitted force is internal, so it can appear in the equilibrium of one segment without causing a jump in the overall diagram.
:::

:::osservazione{titolo="Local checks and closure of the diagram"}
On each interval, check that the slopes agree with the loading. Under a positive downward load the shear must decrease, and constant shear must give a linear moment. At each concentrated load compare the two one-sided limits with the applied force or couple. Finally, the end-to-end change in bending moment can be obtained by adding the signed areas under $T$ and the jumps in $M$. This checks the entire diagram independently of the check on a single value. The resulting diagrams provide the section resultants for stress calculations and, through bending moment, for finding the elastic curve.
:::
