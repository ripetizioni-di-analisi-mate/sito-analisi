---
titolo: "Elastic curves and beam deflections"
sommario: "How to determine the deflected shape, cross-section rotations, and deflections from bending moment diagrams, including piecewise loads and variable stiffness."
---

## Geometry of the deflected beam

:::definizione{#modello-eulero-bernoulli titolo="The Euler–Bernoulli beam"}
An initially straight beam bends when the longitudinal fibers on one side lengthen and those on the opposite side shorten. In the **Euler–Bernoulli** model, plane cross sections remain plane and perpendicular to the deflected axis. This assumption describes the bending of slender beams under small strains and gives the angle of each section directly from the shape of the axis. In a deep beam, or when shear contributes appreciably to the displacement, the section rotation may differ from the angle of the tangent to the deflected axis.

Take the $x$ axis to the right and let $v(x)$ denote transverse displacement, positive downward. The global $y$ axis still points upward, so the ordinate of the elastic curve is $y(x)=-v(x)$. For small slopes, the cross-section rotation, positive counterclockwise, is $\varphi(x)=-v'(x)$. For example, if $v$ increases to the right, the tangent slopes downward and $\varphi$ is negative. Slope is dimensionless, and the corresponding small angles are measured in radians.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" tratteggi="0,0 1,0 2,-0.1 3,-0.3 4,-0.62 5,-1.02 6,-1.48" frecce="4,0,4,-0.62,v;3.3,-0.38,4.75,-0.87,tangent" titolo="Displacement is positive downward and the tangent rotates clockwise"}

The **deflection** is the vertical displacement of a specified cross section. It is therefore necessary to identify the section when comparing values at midspan, beneath the load, or at the tip. The location of maximum deflection depends on the supports and the loading. With asymmetric loading, the lowest section of a beam may lie well away from both midspan and the load point.
:::

:::esempio{titolo="Finding rotation from measured elevations"}
Two sections a distance $0.5\,\mathrm m$ apart have deflections of $2\,\mathrm{mm}$ and $3\,\mathrm{mm}$. The average slope of $v$ between them is $\dfrac{0.001}{0.5}=0.002$. The corresponding mean rotation is approximately $-0.002\,\mathrm{rad}$. This is a local estimate of the rotation when the distance between sections is small compared with the length scale on which curvature varies. The model assumes that the measuring point follows the beam axis. A displacement measured near a connection may include support settlement or local deformation of the connection. It must then be distinguished from deflection due solely to bending of the member.
:::

:::esempio{titolo="From the physical beam to its elastic curve"}
The axis of each longitudinal beam provides the reference line for the model. The elastic curve describes the vertical displacement of that axis. Finding its shape requires the bending moment distribution and the displacement conditions at the supports.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/travi-da-sotto.webp" alt="Side view of the steel members beneath a bridge deck" width="1280" height="720" loading="lazy" decoding="async"><figcaption>From the physical beam to its elastic curve. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Steel_Bridge_Inspection_-_Going_underneath_the_bridge_to_take_a_look.jpg">Oregon Department of Transportation</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</figcaption></figure>
:::

## Curvature, moment, and stiffness

::::teorema{#linea-elastica titolo="The elastic curve equation"}
Let $E$ be Young’s modulus and $I$ the second moment of area about the bending axis. For a linearly elastic Euler–Bernoulli beam with small slopes and bending in a principal plane,
$$
EI(x)v''(x)=-M(x).
$$
The product $EI$ is the **flexural rigidity**. Under the same moment, a section with greater flexural rigidity has a smaller curvature magnitude. Positive moment places the lower fibers in tension and the upper fibers in compression. With this convention, the tangent to the elastic curve turns counterclockwise and $v''<0$.

:::dimostrazione
Consider a fiber at a distance $y$ from the neutral axis. If the geometric curvature $\kappa$ is positive, a fiber with $y>0$ shortens. Cross-section kinematics therefore give $\varepsilon_x=-y\kappa$. Hooke’s law gives $\sigma_x=-Ey\kappa$. With the adopted sign convention, positive moment is $-\int_A y\sigma_x\,\mathrm dA$, so $M=E\kappa\int_A y^2\,\mathrm dA=EI\kappa$. Since the ordinate of the deflected axis is $-v$, its first-order geometric curvature is $-v''$. It follows that $EI v''=-M$.
:::

::struttura{nodi="A,0,0;B,6,0" aste="A-B" tratteggi="0,0 1,-0.37 2,-0.60 3,-0.68 4,-0.60 5,-0.37 6,0" etichette="3,-1.12,positive M;3,0.35,original axis" titolo="With a positive bending moment the deflected beam is concave upward"}

In dimensional expressions, $M$ is measured in $\mathrm{kN\,m}$, and $EI$ in $\mathrm{kN\,m^2}$. The ratio has dimensions of inverse length. Integrating once gives a change in slope, and integrating twice gives a displacement.
::::

:::osservazione{titolo="Zero bending moment and a straight elastic curve"}
If the bending moment is identically zero over an interval and $EI>0$, then $v''=0$ throughout that interval. The deflected axis is a straight segment that may be inclined or displaced. For example, in the unloaded part of a cantilever beyond the last point load, deflection continues to vary if the slope where the two segments meet is nonzero. If $M$ vanishes at an isolated point, the curvature vanishes there. The elastic curve has an inflection point if $M$ changes sign across that point.
:::

:::esempio{titolo="Determining the sign of curvature without integration"}
A simply supported beam carries a downward point force at midspan. The moment is positive at every interior section, so the graph of the deflection function $v$ is concave downward. The physical elevation is $-v$, so the deflected beam itself is concave upward. For a cantilever with a downward tip force, the internal bending moment is negative and $v''$ is positive. The slope starts at zero at the fixed end and increases along the cantilever. These conclusions follow from the moment diagram and the support conditions before any integration constants are evaluated.
:::

## Conditions at supports and beam ends

:::definizione{#condizioni-vincolari titolo="Boundary conditions"}
Support conditions specify the displacements the beam can undergo. A **stationary fixed support** restrains both translation and rotation, imposing $v=0$ and $v'=0$. A stationary simple support prevents vertical displacement and permits rotation. If this support is at a beam end with no applied couple, then $M=0$ also holds. At an intermediate support, a beam that continues uninterrupted over the support can transmit moment. At a free end with no concentrated forces or couples, $M=0$ and $T=0$. If loads are applied at the end, the values of $M$ and $T$ immediately inside the beam follow from equilibrium of the end segment.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" forze="B,0,-0.87,P" quote="A,B,L" titolo="The fixed end prescribes displacement and rotation, and the tip force prescribes the end shear"}

Starting with a known $M(x)$, the equation $EI v''=-M$ requires two integration constants per segment. The kinematic and matching conditions determine these constants. Starting directly from the load instead gives a fourth-order equation, so a single-segment beam requires four boundary conditions in all. Prescribed values of $M$ and $T$ then also enter the equations for the constants. For a cantilever with no concentrated tip loads, two conditions are imposed at $A$ and two at $B$. For a beam simply supported at both ends with no applied end couples, impose $v=0$ and $M=0$ at each support.
:::

:::esempio{titolo="A support at a prescribed elevation"}
If a support settles downward by $\delta_B>0$, its condition becomes $v(B)=\delta_B$. For an unloaded simply supported beam whose left support remains stationary, a linear field $v(x)=\dfrac{\delta_B x}{L}$ can satisfy the restraints. The second derivative vanishes, so the beam moves without developing a bending moment. In a statically indeterminate beam, the displacement conditions may prevent rigid-body motion. Settlement alone can then induce reactions and internal forces.
:::

:::attenzione{titolo="Distinguishing intermediate supports from internal hinges"}
A continuous beam passing over an intermediate roller can have zero deflection and a nonzero moment at that section. The roller prevents vertical displacement, while the continuous material transmits moment from one segment to the next. An internal hinge, on the other hand, can have nonzero deflection if there is no external support at the hinge. The two segments then have the same elevation at the hinge but may have different slopes. For a multispan beam, the type of connection between segments determines whether to impose zero bending moment or continuous slope.
:::

## Continuity, hinges, and jumps

:::osservazione{#continuita titolo="Matching adjacent segments"}
Where the moment or stiffness law changes, define $v_1$ for the left segment and $v_2$ for the right. If section $x=a$ belongs to a continuous beam, displacement and rotation must each have a single value. Impose both $v_1(a)=v_2(a)$ and $v'_1(a)=v'_2(a)$. Curvature, however, can jump. In particular, if $EI$ changes while the moment stays continuous and nonzero, the ratio $-\dfrac{M}{EI}$ changes. Continuity applies to the tangent, whereas a change in curvature affects the rate at which the tangent turns.

::struttura{nodi="A,0,0;C,3,0;B,6,0" aste="A-C;C-B" vincoli="A,incastro,180" etichette="1.35,0.35,EI_1;4.6,0.35,EI_2" forze="B,0,-0.9,P" quote="A,C,a;C,B,b" titolo="Displacement and slope remain continuous at a change in cross section"}

At an **internal hinge**, the two segments share the displacement of their common point. The bending moment vanishes on both sides of the hinge if neither segment has an applied couple there. The two slopes may differ because the hinge permits relative rotation. Requiring equal slopes would add a condition appropriate to a rigid connection. The conditions must be counted on the actual structure because the hinge changes the number of independent displacements.
:::

::::teorema{#salti titolo="Jumps due to a point force or an applied couple"}
Let $[f]_a=f(a^+)-f(a^-)$ denote the jump from left to right. In a continuous beam, a downward point force $P$ produces $[T]_a=-P$. A concentrated counterclockwise couple $\mathcal M$ produces $[M]_a=-\mathcal M$. If $EI$ is constant across the section, it follows that
$$
[EI v''']_a=P,\qquad [EI v'']_a=\mathcal M.
$$
A point force therefore produces a jump in the derivative of curvature when $EI$ is constant. A couple produces a jump in the curvature itself. For an intact beam, $v$ and $v'$ remain continuous in both cases.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="C,0,-1.03,P" coppie="C,1,M_c" quote="A,C,a;C,B,b" titolo="Point force and concentrated couple at an interior section"}

:::dimostrazione
Isolate a small segment surrounding the section and write vertical force equilibrium. As the segment length tends to zero, the resultant of any bounded distributed load tends to zero. The point force and the shear forces on the two cut faces remain. With the adopted positive direction for $T$, this gives $T(a^-)-T(a^+)-P=0$. Moment equilibrium involves the two end moments, the applied couple, and terms proportional to the moment arms of the forces. The moment arms vanish in the limit, giving $M(a^+)-M(a^-)+\mathcal M=0$. Using $EI v''=-M$ and $(EI v'')'=-T$ gives the two relations for the deflection function.
:::
::::

:::esempio{titolo="What remains continuous when the load changes"}
Consider a uniform load acting only on the left part of the beam, up to section $x=a$. The load intensity $q$ jumps at $a$. Over an arbitrarily short interval surrounding $a$, the load resultant is proportional to the interval length. Its limit is zero, so it causes no jump in shear. The moment is also continuous because no concentrated couple acts there. For constant rigidity, the first three derivatives of $v$, as well as $v$ itself, must therefore match. It is the fourth derivative that changes value. If a point force also acts there, its contribution remains in the limit and the third derivative has the corresponding jump.
:::

## From load intensity to the deflected shape

::::teorema{#carichi-distribuiti titolo="The fourth-order beam equation"}
On segments with no concentrated loading, equilibrium gives $M'=T$ and $T'=-q$, with $q>0$ positive downward. Substituting $M=-EI v''$ gives
$$
\bigl(EI(x)v''(x)\bigr)''=q(x).
$$
For constant rigidity the equation becomes $EI\,v^{(4)}=q$. If the rigidity varies continuously, the derivatives act on the full product. When $M$ is available directly from equilibrium, starting with $v''=-\dfrac{M}{EI}$ often saves integration steps.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0,1.06,q_B" quote="A,B,L" titolo="Triangular load increasing toward the cantilever tip"}

:::dimostrazione
The derivative of $-EI v''$ equals the shear force. Differentiating once more gives $-(EI v'')''=T'$. The second equilibrium equation gives $T'=-q$, so the two minus signs cancel. A candidate function solves the problem if it satisfies the governing equation on each segment, the support conditions, and any matching conditions.
:::
::::

:::esempio{titolo="Triangular loading and polynomial degree"}
For a cantilever of constant rigidity loaded by $q(x)=kx$, the equation is $v^{(4)}(x)=\dfrac{kx}{EI}$. Integrating four times produces a fifth-degree term $\dfrac{kx^5}{120EI}$. The four constants follow from $v(0)=v'(0)=0$ and, in the absence of concentrated tip loads, $v''(L)=v'''(L)=0$. Applying the shear condition first gives $EI v'''(x)=\dfrac{kx^2}{2}-\dfrac{kL^2}{2}$. The moment condition then gives $EI v''(x)=\dfrac{kx^3}{6}-\dfrac{kL^2x}{2}+\dfrac{kL^3}{3}$. Two integrations with the conditions at $A$ give $v(L)=\dfrac{11kL^5}{120EI}$. Since the load intensity at the tip is $q_B=kL$, the deflection is proportional to $\dfrac{q_BL^4}{EI}$.
:::

:::osservazione{titolo="Constants with different physical dimensions"}
When $EI\,v(x)$ is written as a polynomial in $x$, each coefficient has units that depend on the power it multiplies. For example, the constant term has units of $\mathrm{kN\,m^3}$, whereas the coefficient of $x$ has units of $\mathrm{kN\,m^2}$. The same dimensional distinction applies to the system of boundary equations. A condition on deflection equates terms with dimensions of displacement. A condition on slope equates dimensionless quantities. Before substituting numbers, choose consistently whether to divide every expression by $EI$ or keep it on the left-hand side. This allows the dimensions of each term in the antiderivative to be checked.
:::

## Four common beam configurations

::::teorema{#frecce-notevoli titolo="Deflections of beams with constant flexural rigidity"}
The following deflections apply to prismatic beams of span $L$ with constant rigidity $EI$ and downward loads. Positive values denote downward displacement.

- Cantilever with a tip force $P$. At the tip, $v=\dfrac{PL^3}{3EI}$ and $v'=\dfrac{PL^2}{2EI}$.
- Cantilever with a uniform load $q$ over its full span. At the tip, $v=\dfrac{qL^4}{8EI}$ and $v'=\dfrac{qL^3}{6EI}$.
- Simply supported beam with a force $P$ at midspan. At midspan, $v=\dfrac{PL^3}{48EI}$.
- Simply supported beam with a uniform load $q$ over its full span. At midspan, $v=\dfrac{5qL^4}{384EI}$.

::struttura{nodi="A,0,0;C,2.5,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="C,0,-0.92,P" quote="A,C,half-span;C,B,half-span" titolo="The midspan force and supports produce a symmetric deflected shape"}

:::dimostrazione
For a cantilever with a tip force, take a cut at a distance $x$ from the fixed end. Equilibrium of the end segment gives $M=-P(L-x)$. Integrating the curvature with zero slope and displacement at the fixed end gives
$$
\begin{aligned}
EI\,v'(x)&=P\left(Lx-\frac{x^2}{2}\right),\\[6pt]
EI\,v(x)&=P\left(\frac{Lx^2}{2}-\frac{x^3}{6}\right).
\end{aligned}
$$
Substituting $x=L$ gives the two stated values. For a simply supported beam with a central point force, $M=\dfrac{Px}{2}$ on the left half-span. Integrate using $v(0)=0$ and $v'\left(\dfrac L2\right)=0$. For a uniform load, follow the same procedure using the quadratic moment function. For the cantilever this is $M=-\dfrac{q(L-x)^2}{2}$, while for the simply supported beam it is $M=\dfrac{qx(L-x)}{2}$.
:::
::::

:::osservazione{titolo="The role of span and the choice of units"}
Doubling the span while holding force and rigidity constant increases point-load deflections by a factor of eight for both beam configurations listed. With a fixed uniform load intensity $q$, the factor is sixteen. The difference arises because the total applied load also increases in the second case. With forces in $\mathrm{kN}$, lengths in $\mathrm m$, and rigidity in $\mathrm{kN\,m^2}$, the result is in meters. Multiply by one thousand to express the displacement in millimeters. Converting at the end keeps the powers of span consistent with the units of $EI$.
:::

:::esempio{titolo="Comparing loads with the same resultant"}
A midspan force and a uniform load on a simply supported beam can have the same resultant $P$. In this case, $q=\dfrac PL$. The ratio of the midspan deflection under the uniform load to that under the point force is $\dfrac{5\cdot48}{384}=\dfrac58$. The moment diagram explains the difference. The distributed load has the same overall line of action, but a cut inside the beam isolates only part of that load. The moment at the cut therefore differs from the moment due to a point force. This explains why a load may be replaced by its resultant when calculating support reactions, whereas deflection requires the moment diagram of the actual loading.
:::

## Variable flexural rigidity

::::teorema{#rigidezza-variabile titolo="Integration with variable rigidity"}
If $EI(x)>0$ and the moment is known, the first-order curvature is $-\dfrac{M(x)}{EI(x)}$. Integrating from a section $a$ with known displacement and slope gives
$$
\begin{aligned}
v'(x)&=v'(a)-\int_a^x\frac{M(s)}{EI(s)}\,\mathrm ds,\\[6pt]
v(x)&=v(a)+(x-a)v'(a)-\int_a^x(x-s)\frac{M(s)}{EI(s)}\,\mathrm ds.
\end{aligned}
$$
The variable $s$ identifies the section at which curvature is evaluated. The factor $x-s$ is the distance from that section to the point where deflection is sought. In a cantilever, a given local change in slope affects tip deflection more when it occurs closer to the fixed end.

::struttura{nodi="A,0,0;C,2.2,0;B,5.4,0" poligoni="0,-0.17 2.2,-0.17 2.2,0.17 0,0.17;2.2,-0.09 5.4,-0.09 5.4,0.09 2.2,0.09" vincoli="A,incastro,180" forze="B,0,-0.9,P" etichette="1.0,0.35,EI_1;3.45,0.35,EI_2" quote="A,C,a;C,B,b" titolo="Cantilever with two values of flexural rigidity and a tip force"}

:::dimostrazione
The first equality integrates $v''=-\dfrac{M}{EI}$ with initial value $v'(a)$. Differentiating the second equality recovers the first because the upper-limit contribution contains the factor $x-x=0$. Substituting $x=a$ recovers $v(a)$. The same check applies to finitely many step changes in rigidity when the integration is performed separately on each segment.
:::
::::

:::esempio{titolo="Unequal contributions from two segments"}
For a cantilever of length $4\,\mathrm m$ with $P=12\,\mathrm{kN}$ at the tip, the deflection is $P\int_0^4\dfrac{(4-s)^2}{EI(s)}\,\mathrm ds$. With $EI_1=12\,000\,\mathrm{kN\,m^2}$ between $0$ and $2\,\mathrm m$ and $EI_2=6\,000\,\mathrm{kN\,m^2}$ between $2$ and $4\,\mathrm m$, integrating the numerators alone gives $\dfrac{56}3$ and $\dfrac83$, respectively, in $\mathrm{m^3}$. The stiffer segment therefore makes the larger contribution because it is closer to the fixed end. Adding the two contributions gives a downward deflection of $24\,\mathrm{mm}$.
:::

:::esempio{titolo="Moving the stiff segment toward the fixed end"}
Two cantilevers have the same span, the same tip force, and two segments of equal length. The stiffer segment lies near the fixed end in one beam and near the tip in the other. The moment diagrams are identical because both structures are statically determinate. In the tip deflection integral, the weighting factor is proportional to $(L-s)^2$ and decreases toward the tip. Placing the greater value of $EI$ where the weight is greater produces a larger reduction in the integral. This conclusion applies to the tip load under consideration. For other structures or other measurement locations, a local stiffness change affects the displacement differently.
:::

## Superposition, symmetry, and the location of maximum deflection

:::esempio{#sovrapposizione titolo="Superposition of a midspan force and a uniform load"}
In the linear elastic range, the reference geometry, rigidity, and supports remain fixed. The deflection equations and their homogeneous boundary conditions can be superimposed. Thus, for a simply supported beam with a midspan force $P$ and a uniform downward load $q$,
$$
v\left(\frac L2\right)=\frac{PL^3}{48EI}+\frac{5qL^4}{384EI}.
$$
The geometry, stiffness, supports, and loads are symmetric, so $v(x)=v(L-x)$. Differentiating at midspan gives $v'\left(\dfrac L2\right)=-v'\left(\dfrac L2\right)$, and the slope vanishes. For a centrally loaded beam with different rigidities in its two halves, symmetry requires a further check. The reactions may still be equal because they follow from equilibrium, while the deflected shape may be asymmetric.

::struttura{nodi="A,0,0;C,3,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.58,0.58,q" forze="C,0,-1.12,P" quote="A,C,half-span;C,B,half-span" titolo="Two symmetric loads on the same simply supported beam"}

For a prescribed support settlement, the solution for the loads on stationary supports can be added to the solution for settlement alone. The first solution has zero support displacements, and the second has the prescribed support displacement. Their sum therefore satisfies the actual displacement condition. Boundary conditions must be superimposed along with the applied loads. If a support changes position between two models, their solutions generally cannot be added to solve a single support configuration.
:::

:::osservazione{titolo="Locating the lowest point of the beam"}
On each smooth interval, solve $v'(x)=0$ for interior stationary points. Compare the resulting displacements with those at the ends and at segment interfaces, including any hinges. Since $v$ is positive downward, its largest value gives the lowest section. For the greatest absolute displacement, upward displacements must also be considered. For a continuous beam with positive moment throughout its interior, $v''<0$. The slope decreases, so it can have at most one interior zero. An applied couple or a change in the sign of the moment can alter this behavior, so extrema must be found from the deflection function for the actual loading.

::grafico{curve="t,t*(4-t)*(16+4*t-t^2)/96,0,4" xmin=-0.4 xmax=4.4 ymin=-0.15 ymax=1.05 nomi="x,v" punti="0,0,pieno,A;2,0.833333,pieno,C;4,0,pieno,B" legenda="\text{symmetric deflected shape to scale}" titolo="Deflected shape with zero deflection at the supports and a horizontal tangent at midspan"}
:::
