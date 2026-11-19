---
titolo: "Differential equilibrium equations for a beam"
sommario: "How equilibrium of an infinitesimal beam element relates axial force, shear force, and bending moment to distributed loading, and how these relations can be used to derive, draw, and check the diagrams."
---

## Distributed loads and the beam element

In the chapter on internal forces and moments, $N$, $T$, and $M$ were found section by section by taking one part of the beam in equilibrium. Here we apply equilibrium to an infinitesimal length of beam to obtain differential equations relating its internal forces and moments to its loads.

:::richiamo{titolo="Sign convention for N, T, and M"}
For a horizontal beam with the $x$ axis directed to the right, axial force $N$ is positive in tension, shear force $T$ is positive when it tends to rotate an element clockwise, and bending moment $M$ is positive when it puts the lower fibers in tension. On the right face of a beam segment the positive directions are therefore $N$ to the right, $T$ downward, and $M$ counterclockwise. On the left face they act in the opposite directions. See the chapter on internal forces and moments.
:::

:::definizione{#carichi-distribuiti titolo="Loads distributed along the axis"}
Three types of distributed loading can act on a straight beam. Each is specified as a function of position $x$:

- the **transverse load** $q(x)$, in $\mathrm{kN/m}$, perpendicular to the axis and positive downward;
- the **axial load** $p(x)$, in $\mathrm{kN/m}$, directed along the axis and positive to the right, that is, in the direction of increasing $x$;
- the **distributed couple** $m(x)$, in $\mathrm{kN\,m/m}$, positive counterclockwise.

On a segment of length $dx$ these give a downward force $q\,dx$, a rightward force $p\,dx$, and a couple $m\,dx$. The self-weight of a homogeneous beam is a uniform load $q$. A distributed couple arises when a load is applied off the beam axis. For example, an axial load $p$ distributed along the upper edge at a distance $e$ from the axis is equivalent to the same load applied along the axis together with the clockwise distributed couple $m = -p\,e$. In many problems $p$ and $m$ vanish, leaving only $q$.
:::

:::definizione{#concio titolo="Beam element"}
The **beam element** is the portion of the beam between the sections at coordinates $x$ and $x + dx$. It carries the distributed loads on that segment and the section forces and moments transmitted by adjacent portions of the beam: $N$, $T$, and $M$ on the left face and $N + dN$, $T + dT$, and $M + dM$ on the right face. The element is in equilibrium because the whole beam is in equilibrium. In the limit as $dx \to 0$, its equilibrium equations give the differential equilibrium equations.

::struttura{nodi="S,0,0,-;D,3,0,-" aste="S-D" carichi="S,D,0.55,0.55,q(x)" forze="-1 0,-0.9,0,;0 0,0,0.9,;4 0,0.9,0,;3 0,0,-0.9," coppie="0 0,-1,M;3 0,1,M+dM" etichette="-1.05,0.3,N;-0.35,-0.75,T;4.05,0.3,N+dN;3.6,0.75,T+dT" quote="S,D,dx,1.2" riferimento=0 titolo="Beam element between the sections at $x$ and $x+dx$, showing positive internal forces and moments"}

:::

## Differential equilibrium equations

Write the three planar equilibrium equations for the element and divide by its length.

::::teorema{#equazioni-indefinite titolo="Differential equilibrium equations"}
Consider a straight horizontal beam and an interval $[a, b]$ free of concentrated forces and couples, over which the distributed loads $p$, $q$, and $m$ are continuous. Then $N$, $T$, and $M$ are differentiable on $(a, b)$, with
$$
\frac{dN}{dx} = -p ,
\qquad
\frac{dT}{dx} = -q ,
\qquad
\frac{dM}{dx} = T - m .
$$
In the absence of distributed couples, the third equation becomes $\dfrac{dM}{dx} = T$. These are *differential equilibrium equations* because they hold at every point of the interval. They have two uses. Integrating the loads gives $N$, $T$, and $M$, and the equations provide checks on the slopes and curvatures of existing diagrams. For example, on a segment with $q = 4\,\mathrm{kN/m}$, shear decreases by $4\,\mathrm{kN}$ for every meter traveled to the right.

:::dimostrazione
Write equilibrium for the segment between $x$ and $x + \Delta x$, then let $\Delta x$ tend to zero. On the left face, $N(x)$ acts to the left, $T(x)$ upward, and $M(x)$ clockwise. On the right face, $N(x + \Delta x)$ acts to the right, $T(x + \Delta x)$ downward, and $M(x + \Delta x)$ counterclockwise. The equations for horizontal force equilibrium, vertical force equilibrium, and moment equilibrium about the centroid of the right face are
$$
\begin{cases}
N(x + \Delta x) - N(x) + \displaystyle\int_x^{x + \Delta x} p(t)\,dt = 0 \\[10pt]
T(x) - T(x + \Delta x) - \displaystyle\int_x^{x + \Delta x} q(t)\,dt = 0 \\[10pt]
M(x + \Delta x) - M(x) - T(x)\,\Delta x + \displaystyle\int_x^{x + \Delta x} q(t)\,(x + \Delta x - t)\,dt + \displaystyle\int_x^{x + \Delta x} m(t)\,dt = 0
\end{cases}
$$
In the third equation, $T(x)$ acts vertically at a distance $\Delta x$ from the moment center and produces a clockwise moment. The load $q(t)\,dt$ has a moment arm $x + \Delta x - t$ and produces a counterclockwise moment. The forces on the right face pass through the moment center and make no contribution.

Divide each equation by $\Delta x$. Since $p$, $q$, and $m$ are continuous, the mean value theorem for integrals shows that $\dfrac{1}{\Delta x}\displaystyle\int_x^{x + \Delta x} q(t)\,dt$ tends to $q(x)$ as $\Delta x \to 0$. The same argument applies to $p$ and $m$. The absolute value of the term containing the moment arm is at most $\max|q| \cdot \dfrac{\Delta x^2}{2}$, so dividing it by $\Delta x$ gives a quantity that tends to zero. The difference quotients of $N$, $T$, and $M$ therefore have limits, giving
$$
\frac{dN}{dx} + p = 0 ,
\qquad
-\frac{dT}{dx} - q = 0 ,
\qquad
\frac{dM}{dx} - T + m = 0 ,
$$
which are the three stated equations.
:::
::::

:::teorema{#equazione-del-momento titolo="Second-order equation for bending moment"}
Under the assumptions of the differential equilibrium equations, if the distributed couples vanish or are constant, then
$$
\frac{d^2M}{dx^2} = -q .
$$
This follows by differentiating $\dfrac{dM}{dx} = T - m$ and substituting $\dfrac{dT}{dx} = -q$. The bending moment can then be found from the load by integrating twice and imposing two conditions on $M$ to determine the two constants. If $q$ is constant, $M(x) = -\dfrac{q\,x^2}{2} + c_1 x + c_2$. For a beam simply supported at its ends, the conditions $M(0) = 0$ and $M(L) = 0$ give $c_2 = 0$ and $c_1 = \dfrac{qL}{2}$.
:::

:::richiamo{titolo="Fundamental theorem of calculus"}
Let $f$ be continuous on $[a, b]$, and let $G$ be a function such that $G' = f$ on $[a, b]$. Then
$$
\int_a^b f(x)\,dx = G(b) - G(a) .
$$
See the chapter on integrals in Mathematical Analysis 1.
:::

:::teorema{#forma-integrale titolo="Integral form of the differential equilibrium equations"}
Let $[a, b]$ be a beam segment free of concentrated forces and couples and of distributed couples. Then
$$
N(b) - N(a) = -\int_a^b p\,dx ,
\qquad
T(b) - T(a) = -\int_a^b q\,dx ,
\qquad
M(b) - M(a) = \int_a^b T\,dx .
$$
These relations follow from the differential equilibrium equations by the fundamental theorem of calculus. In words, the change in shear between two sections is the negative of the resultant load between them, while the change in bending moment is the signed area under the shear diagram. In a simply supported beam of span $L$ under uniform load $q$, the shear is $\dfrac{qL}{2}$ at the left support and zero at midspan. Since $M(0) = 0$, the midspan moment equals the area of the triangle, $\dfrac{1}{2} \cdot \dfrac{L}{2} \cdot \dfrac{qL}{2} = \dfrac{qL^2}{8}$.
:::

## Concentrated forces and couples

A concentrated force is the limit of a distributed load acting over a shrinking interval with a fixed resultant. The internal forces or moments may have a jump discontinuity at its point of application.

::::teorema{#salti titolo="Jumps at concentrated forces and couples"}
At the section with coordinate $x_0$, suppose a vertical force $F$ acts, positive downward like $q$, together with a horizontal force $F_x$, positive to the right, and a couple $\mathcal{M}$, positive counterclockwise. Denoting the left- and right-hand limits by $x_0^-$ and $x_0^+$, respectively, gives
$$
N(x_0^+) - N(x_0^-) = -F_x ,
\qquad
T(x_0^+) - T(x_0^-) = -F ,
\qquad
M(x_0^+) - M(x_0^-) = -\mathcal{M} .
$$
The internal forces or moments unaffected by a concentrated action remain continuous at $x_0$. At a vertical force the moment is continuous and the shear jumps. At a couple the shear is continuous and the moment jumps. Support reactions are concentrated forces or couples and cause jumps of the same type. At the left support of a simply supported beam the reaction $V_A$ acts upward, corresponding to $F = -V_A$, so the shear changes from $0$ to $T(0^+) = V_A$.

:::dimostrazione
Apply equilibrium to the segment between $x_0 - \varepsilon$ and $x_0 + \varepsilon$ as in the proof of the differential equilibrium equations, now including the concentrated loads at $x_0$. Vertical force equilibrium gives
$$
T(x_0 - \varepsilon) - T(x_0 + \varepsilon) - F - \int_{x_0 - \varepsilon}^{x_0 + \varepsilon} q\,dt = 0 .
$$
As $\varepsilon \to 0$, the integral tends to zero because $q$ is bounded, giving the jump in shear. Similarly, horizontal equilibrium gives the jump in $N$. Moment equilibrium about the centroid of the right face includes $M(x_0 + \varepsilon) - M(x_0 - \varepsilon)$, the couple $\mathcal{M}$, the moment of $T(x_0 - \varepsilon)$ with arm $2\varepsilon$, the moment of force $F$ with arm $\varepsilon$, and integrals of the distributed loads. Every term except the first two tends to zero, so $M(x_0^+) - M(x_0^-) + \mathcal{M} = 0$.
:::
::::

:::osservazione{#punto-angoloso titolo="Corner in the bending moment diagram at a point load"}
At a concentrated force $F$ the moment is continuous, but its derivative, the shear force, jumps by $-F$. The graph of $M$ therefore has a **corner**. For a downward $F$ its slope decreases by $F$. For a simply supported beam of span $5\,\mathrm{m}$ carrying $F = 10\,\mathrm{kN}$ at a distance $2\,\mathrm{m}$ from support $A$, the reactions are $V_A = 6\,\mathrm{kN}$ and $V_B = 4\,\mathrm{kN}$. The shear is $6\,\mathrm{kN}$ to the left of the force and $-4\,\mathrm{kN}$ to the right. The moment increases with slope $6\,\mathrm{kN}$ to $M = 12\,\mathrm{kN\,m}$ under the load, then decreases with slope $-4\,\mathrm{kN}$ to zero at $B$.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2 0,0,-1.2,F" diagramma="0,0,2,0,6*s;2,0,5,0,12-4*s" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$) for $F = 10\,\mathrm{kN}$, showing the corner at the load"}

:::

## Boundary conditions

Integrating the differential equilibrium equations on a segment introduces arbitrary constants. The constraints and concentrated loads provide the conditions that determine them.

:::teorema{#condizioni-al-contorno titolo="Boundary conditions at supports"}
The following conditions hold at beam ends and at internal hinges. They follow from the jump relations, taking the internal forces and moments outside the beam as zero.

- Unloaded **free end**: $N = 0$, $T = 0$, $M = 0$. If the right end $x = L$ carries a downward force $F$ and a counterclockwise couple $\mathcal{M}$, then $T(L^-) = F$ and $M(L^-) = \mathcal{M}$. At the left end $x = 0$ the corresponding conditions are $T(0^+) = -F$ and $M(0^+) = -\mathcal{M}$.
- **End support** (pin or roller): $M = 0$, or, if a couple is applied, $M = \mathcal{M}$ at the right end and $M = -\mathcal{M}$ at the left end. The shear at the support is unknown and corresponds to the reaction: $T(0^+) = V_A$ at the left, $T(L^-) = -V_B$ at the right. A roller with a vertical reaction transmits no horizontal force. If no horizontal load acts at that end, $N = 0$ also holds.
- **Fixed support**: there is no prescribed condition on the internal resultants, because the support can transmit any values of $N$, $T$, and $M$. Their values at the fixed end give the support reactions.
- Unloaded **internal hinge**: $M = 0$ because the hinge transmits no moment.

For a beam simply supported at $x = 0$ and $x = L$ with no applied couples at the supports, the moment conditions are
$$
\begin{cases}
M(0) = 0 \\
M(L) = 0
\end{cases}
$$
and they suffice to determine the two integration constants in $\dfrac{d^2M}{dx^2} = -q$. For a cantilever, the two conditions are imposed on the shear and moment at the free end.
:::

:::osservazione{#tratti-e-costanti titolo="Piecewise integration"}
When a beam carries concentrated forces or couples, or its distributed load changes form, divide it into **segments** whose boundaries coincide with those changes. On each segment, integrating $\dfrac{dT}{dx} = -q$ and $\dfrac{dM}{dx} = T$ introduces two constants. The conditions consist of the boundary conditions and the matching conditions at adjacent segments, which specify continuity or a known jump in $T$ and $M$. For a statically determinate beam, there are as many conditions as constants. The reactions can then be read from the jumps in shear at the supports. A simply supported beam with a midspan point load has two segments and four constants. The conditions are $M(0) = 0$, $M(L) = 0$, continuity of $M$ at the load, and the shear jump $-F$.
:::

:::esempio{titolo="Simply supported beam under uniform loading"}
Consider a beam of span $L = 6\,\mathrm{m}$ with a pin at $A$ ($x = 0$), a roller at $B$ ($x = 6\,\mathrm{m}$), and a uniform load $q = 4\,\mathrm{kN/m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.6,0.6,q" quote="A,B,6 m,1" titolo="Simply supported beam under uniform load $q = 4\,\mathrm{kN/m}$"}

Integrating $\dfrac{dT}{dx} = -4$ and $\dfrac{dM}{dx} = T$ gives
$$
T(x) = c_1 - 4x ,
\qquad
M(x) = c_2 + c_1 x - 2x^2 .
$$
The conditions $M(0) = 0$ and $M(6) = 0$ yield $c_2 = 0$ and $6c_1 - 72 = 0$, so $c_1 = 12\,\mathrm{kN}$ and
$$
T(x) = 12 - 4x ,
\qquad
M(x) = 12x - 2x^2 .
$$
The reactions are $V_A = T(0) = 12\,\mathrm{kN}$ and $V_B = -T(6) = 12\,\mathrm{kN}$, both upward. The shear vanishes at $x = 3\,\mathrm{m}$, where the bending moment reaches its maximum $M = 18\,\mathrm{kN\,m} = \dfrac{qL^2}{8}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,12-4*s" segni=1 titolo="Shear diagram $T$ ($\mathrm{kN}$), a straight line of slope $-q$"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,12*s-2*s^2" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$), a parabola with its maximum where $T = 0$"}

:::

## Uniform and triangular loads

When the load on a segment is a polynomial, it can be integrated by hand and the degree of each diagram is known in advance.

:::teorema{#grado-delle-curve titolo="Polynomial degree of the diagrams under polynomial loads"}
Let $[a, b]$ be a segment with no concentrated loads or distributed couples, on which $q$ is a polynomial of degree $n$. Then on $[a, b]$ the shear is a polynomial of degree $n + 1$ and the moment is a polynomial of degree $n + 2$. This follows from the differential equilibrium equations because integration raises the degree of a polynomial by one. Three cases occur frequently.

- Unloaded segment ($q = 0$): constant $T$ and linear $M$.
- Uniform load: linear $T$ and parabolic $M$.
- Triangular load: parabolic $T$ and cubic $M$.

The degrees of the diagrams provide an initial check on the calculation. For example, the calculated shear should be constant over an unloaded segment, and the moment should be parabolic under a uniform load.
:::

:::esempio{titolo="Cantilever under a triangular load"}
A cantilever of span $L$ is fixed at $A$ ($x = 0$) and free at $B$ ($x = L$). The load is $q_0$ at the fixed support and decreases linearly to zero at the free end, $q(x) = q_0\left(1 - \dfrac{x}{L}\right)$. There is no concentrated load at the free end, so the boundary conditions are $T(L) = 0$ and $M(L) = 0$. Integrating from $x$ to $L$ gives
$$
T(x) = \int_x^L q(t)\,dt = \frac{q_0\,(L - x)^2}{2L} ,
\qquad
M(x) = -\int_x^L T(t)\,dt = -\frac{q_0\,(L - x)^3}{6L} .
$$
The moment is negative, so the upper fibers are in tension. Its magnitude is greatest at the fixed end, $M(0) = -\dfrac{q_0 L^2}{6}$. With $q_0 = 6\,\mathrm{kN/m}$ and $L = 3\,\mathrm{m}$, the result is $M(0) = -9\,\mathrm{kN\,m}$. The reactions are $V_A = T(0) = \dfrac{q_0 L}{2} = 9\,\mathrm{kN}$ upward and a counterclockwise reaction moment $M_A = 9\,\mathrm{kN\,m}$, since the couple $M_A$ makes the moment jump from $0$ to $-M_A$.

::struttura{nodi="A,0,0;B,3,0" aste="A-B" vincoli="A,incastro,180" diagramma="0,0,3,0,-(3-s)^3/3" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$) for the cantilever with $q_0 = 6\,\mathrm{kN/m}$. The cubic curve is drawn above the beam on the tension side"}

:::

:::esempio{titolo="Simply supported beam under a triangular load"}
Consider a simply supported beam of span $L$ with load $q(x) = \dfrac{q_0\,x}{L}$, zero at $A$ and equal to $q_0$ at $B$. Integrating twice with $M(0) = 0$ gives
$$
T(x) = c_1 - \frac{q_0\,x^2}{2L} ,
\qquad
M(x) = c_1 x - \frac{q_0\,x^3}{6L} ,
$$
and the condition $M(L) = 0$ gives $c_1 = \dfrac{q_0 L}{6}$. The reactions are $V_A = \dfrac{q_0 L}{6}$ and $V_B = -T(L) = \dfrac{q_0 L}{3}$. The resultant $\dfrac{q_0 L}{2}$ is divided in the ratio $1 : 2$ because it acts two-thirds of the way along the span. The shear vanishes at $x = \dfrac{L}{\sqrt{3}} \approx 0.577\,L$, closer to the more heavily loaded end. With $q_0 = 6\,\mathrm{kN/m}$ and $L = 6\,\mathrm{m}$, the shear is $T(x) = 6 - \dfrac{x^2}{2}$, which vanishes at $x = 2\sqrt{3} \approx 3.46\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,6-s^2/2" segni=1 titolo="Shear diagram $T$ ($\mathrm{kN}$) under a triangular load, a parabola that crosses zero at $x = 2\sqrt{3}\,\mathrm{m}$"}

:::

## Trapezoidal, parabolic, and sinusoidal loads

The differential equilibrium equations are linear in the loads. The shear and moment produced by a sum of loads therefore equal the sums of the shear and moment produced by the individual loads.

:::esempio{titolo="Trapezoidal load"}
A trapezoidal load equal to $q_A$ at $A$ and $q_B$ at $B$ is given by
$$
q(x) = q_A + \left(q_B - q_A\right)\frac{x}{L} ,
$$
and is the sum of a uniform load $q_A$ and a triangular load that is zero at $A$ and equal to $q_B - q_A$ at $B$. For a simply supported beam the reactions are therefore
$$
V_A = \frac{q_A L}{2} + \frac{(q_B - q_A)\,L}{6} = \frac{(2q_A + q_B)\,L}{6} ,
\qquad
V_B = \frac{(q_A + 2q_B)\,L}{6} .
$$
The shear is a quadratic polynomial. It vanishes at the root of $V_A - q_A x - \dfrac{(q_B - q_A)\,x^2}{2L} = 0$ lying between $0$ and $L$. Setting $q_A = q_B$ recovers the uniform load.
:::

:::esempio{titolo="Parabolic load"}
The load $q(x) = \dfrac{4q_0\,x\,(L - x)}{L^2}$ is zero at the ends and reaches $q_0$ at midspan, with resultant $\dfrac{2}{3}\,q_0 L$. For a simply supported beam, integration with $M(0) = 0$ and $M(L) = 0$ gives
$$
T(x) = \frac{q_0 L}{3} - \frac{2q_0\,x^2}{L} + \frac{4q_0\,x^3}{3L^2} ,
\qquad
M(x) = \frac{q_0 L\,x}{3} - \frac{2q_0\,x^3}{3L} + \frac{q_0\,x^4}{3L^2} .
$$
The shear is cubic and the moment is quartic. By symmetry the shear vanishes at midspan, where the moment reaches its maximum value $\dfrac{5\,q_0 L^2}{48}$.
:::

:::esempio{titolo="Sinusoidal load"}
For a simply supported beam, the load $q(x) = q_0 \sin\dfrac{\pi x}{L}$ can be integrated using the antiderivatives of sine and cosine:
$$
T(x) = \frac{q_0 L}{\pi}\cos\frac{\pi x}{L} + c_1 ,
\qquad
M(x) = \frac{q_0 L^2}{\pi^2}\sin\frac{\pi x}{L} + c_1 x + c_2 .
$$
The conditions $M(0) = 0$ and $M(L) = 0$ give $c_2 = 0$ and $c_1 L = 0$, hence $c_1 = 0$. The moment has the same shape as the load, with a maximum of $\dfrac{q_0 L^2}{\pi^2}$ at midspan, and the support reactions are $\dfrac{q_0 L}{\pi}$. An arbitrary load on a simply supported beam can be expanded in a series of terms $\sin\dfrac{k\pi x}{L}$, each of which can be treated in the same way.
:::

## Maximum bending moment

Sizing a beam requires the maximum value of $|M|$. The differential equilibrium equations identify the sections to examine.

:::teorema{#momento-massimo titolo="Location of the maximum moment"}
Let $[a, b]$ be an interval free of concentrated loads and distributed couples. At interior points where $T = 0$ the moment is stationary. If $q > 0$ there, the moment has a local maximum because $\dfrac{d^2M}{dx^2} = -q < 0$. For the entire beam, the maximum and minimum of $M$ can therefore occur at three types of sections:

- interior points of the segments where $T = 0$;
- sections where the shear changes sign at a jump, at a point load or an intermediate support;
- the ends of the segments, including the beam ends and points where an applied couple causes a jump in moment.

The result follows from $\dfrac{dM}{dx} = T$ and the extreme value theorem applied to $M$ on each segment. With distributed couples, $\dfrac{dM}{dx} = T - m$, so the stationary points are those where $T = m$. To find the maximum value, substitute the coordinate into $M$, or use the integral form to evaluate the area under the shear diagram between an end and the point in question. For the simply supported beam under triangular load $q(x) = \dfrac{q_0\,x}{L}$, the shear vanishes at $x = \dfrac{L}{\sqrt{3}}$, where
$$
M_{\max} = \frac{q_0 L}{6} \cdot \frac{L}{\sqrt{3}} - \frac{q_0}{6L} \cdot \frac{L^3}{3\sqrt{3}} = \frac{q_0 L^2}{9\sqrt{3}} \approx 0.064\,q_0 L^2 .
$$
:::

:::attenzione
A point where shear vanishes can give a local maximum of the bending moment different from the maximum of $|M|$ on the beam. For a cantilever of span $L$ under uniform load $q$, fixed at $x = 0$, the shear is $T(x) = q\,(L - x)$. It vanishes only at the free end, where $M = 0$. The maximum value of $|M|$ is $\dfrac{qL^2}{2}$ and occurs at the fixed support, an endpoint of the segment. For a beam with overhangs, the negative support moment must be compared with the maximum positive moment in the span.
:::

## Drawing and checking the diagrams

The differential equilibrium equations can be used to sketch the diagrams from a few values and to check diagrams obtained by taking portions of the beam in equilibrium.

:::osservazione{#regole-dei-diagrammi titolo="Rules for drawing the T and M diagrams"}
When there are no distributed couples, the differential equilibrium equations, jump relations, and boundary conditions give the following properties.

- The slope of the shear diagram is $-q$, so on unloaded segments $T$ is constant. Under uniform downward loading, the diagram is a straight line sloping down to the right.
- The slope of the moment diagram is $T$. The moment therefore increases to the right where $T > 0$ and decreases where $T < 0$. Where $T = 0$, its tangent is horizontal.
- Since $\dfrac{d^2M}{dx^2} = -q$, the concavity of the moment depends on the load. For $q > 0$, the function $M$ is concave downward. The moment diagram is drawn on the tension side, however, with positive values below the axis. The plotted curve therefore bends upward, against the load.
- At a concentrated force, $T$ jumps by $-F$ and $M$ has a corner. At a counterclockwise couple $\mathcal{M}$, $M$ jumps by $-\mathcal{M}$ and $T$ is continuous.
- At unloaded free ends, end pin or roller supports, and internal hinges, the moment is zero unless a couple is applied there.
- The change in $M$ between two sections is the signed area under the shear diagram between them.
:::

:::esempio{titolo="Diagrams for an overhanging beam"}
A beam has a pin at $A$ ($x = 0$), a roller at $B$ ($x = 4\,\mathrm{m}$), and an overhang extending to the free end $C$ ($x = 6\,\mathrm{m}$), where a downward force $F = 4\,\mathrm{kN}$ acts.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="C,0,-1.5,F" quote="A,B,4 m,1;B,C,2 m,1" titolo="Overhanging beam with force $F = 4\,\mathrm{kN}$ at the free end"}

There are no distributed loads, so the shear is constant and the moment linear on each of the segments $AB$ and $BC$. At the free end, $T(6^-) = F = 4\,\mathrm{kN}$ and $M(6) = 0$. Working to the left with slope $4\,\mathrm{kN}$ gives a moment at $B$ of $M(4) = 0 - 4 \cdot 2 = -8\,\mathrm{kN\,m}$. The moment at $A$ is zero, so along $AB$ the moment is a straight line from $0$ to $-8\,\mathrm{kN\,m}$ with slope $T = -2\,\mathrm{kN}$. The jump in shear at $B$ is $4 - (-2) = 6\,\mathrm{kN}$, so $V_B = 6\,\mathrm{kN}$ upward, and $V_A = T(0^+) = -2\,\mathrm{kN}$, or $2\,\mathrm{kN}$ downward. Taking moments about $A$ confirms the result, $6 \cdot 4 - 4 \cdot 6 = 0$.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,4,0,-2;4,0,6,0,4" segni=1 titolo="Shear diagram $T$ ($\mathrm{kN}$), constant on each segment, with a jump of $6\,\mathrm{kN}$ at $B$"}

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,4,0,-2*s;4,0,6,0,-8+4*s" verso=-1 titolo="Bending moment diagram $M$ ($\mathrm{kN\,m}$), linear on each segment and plotted on the upper-fiber side"}

:::
