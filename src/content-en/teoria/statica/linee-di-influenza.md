---
titolo: "Influence lines"
sommario: "How a support reaction, shear force, or bending moment changes as a load moves along a beam, how to construct its influence line using equilibrium or the Müller-Breslau principle, and how to use it to find the maximum and minimum effects of moving loads."
---

## Moving unit load and influence line

The loads in earlier chapters had fixed positions. Here the load moves, and we study how a specified response changes with its position.

:::definizione{#carico-unitario-viaggiante titolo="Moving unit load"}
Consider a downward vertical force of magnitude $1$ at coordinate $\xi$ on a horizontal beam. The coordinate $\xi$ is measured along the beam's $x$ axis and can take any value between its ends, hence the name **moving unit load**. It represents a load that changes position, such as a vehicle on a bridge, a crane trolley moving along its runway, or a crowd on a footbridge.

Treat the unit load as dimensionless. Its response is then dimensionless for forces (reactions and shears) and has dimensions of length, in $\mathrm{m}$, for moments. Multiplying by an actual load magnitude in $\mathrm{kN}$ gives $\mathrm{kN}$ and $\mathrm{kN\,m}$, respectively.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2.5 0,0,-1.5,1" quote="A,2.5 0,ξ,1;A,B,L,1.6" titolo="Simply supported beam of span $L$ with the moving unit load at $\xi$"}
:::

:::definizione{#linea-di-influenza titolo="Influence line"}
Let $X$ be a response of a statically determinate structure, such as a support reaction, shear force $T$, or bending moment $M$ at a fixed section $S$. The **influence line** for $X$ is the function
$$
\eta_X(\xi) = \text{value of } X \text{ when only the unit load acts on the structure at } \xi .
$$
Its graph, also called the influence line, is drawn along the beam axis, with positive ordinates above the axis and negative ones below. The ordinate $\eta_X(\xi)$ gives the value of $X$ when the unit load is at $\xi$. Thus a point load $P$ at $\xi$ produces the response $P\,\eta_X(\xi)$, as follows from the theorem for evaluating a response from its influence line.

For the simply supported beam shown, with a pin at $A$ and a roller at $B$, taking moments about $A$ with the load at $\xi$ gives $V_B\,L - 1 \cdot \xi = 0$, so
$$
\eta_{V_B}(\xi) = \frac{\xi}{L} .
$$
The roller reaction is zero when the load is directly over the pin. It increases linearly and reaches $1$ when the load is over the roller.
:::

:::attenzione
An influence line and an internal force or moment diagram describe different functions. In the diagram, the load stays fixed and the section varies. In the influence line, the section stays fixed and the load moves. For the simply supported beam with $L = 6\,\mathrm{m}$ and section $S$ at $x = 2\,\mathrm{m}$, the influence line for shear at $S$ has the value at $\xi = 4\,\mathrm{m}$ given by
$$
\eta_{T}(4) = \frac{1}{3} ,
$$
whereas the shear diagram produced by a unit load fixed at $x = 2\,\mathrm{m}$, evaluated at section $x = 4\,\mathrm{m}$, gives $-\dfrac{1}{3}$.
:::

## Equilibrium method

The most direct way to obtain an influence line is to apply equilibrium with the load at a general position, leaving $\xi$ as a parameter.

::::teorema{#linee-lineari-a-tratti titolo="Influence lines for statically determinate beams"}
Consider a statically determinate horizontal beam made up of one or more rigid bodies joined by hinges, with frictionless bilateral constraints. Let $X$ be a support reaction or the internal resultant $M$ or $T$ at a section $S$ with coordinate $s$. Then

- $\eta_X$ is linear on every interval over which the load remains on the same body and on the same side of $S$;
- $\eta_X$ is continuous, except for $\eta_T$, which has a jump at $\xi = s$ of magnitude $1$:
$$
\lim_{\xi \to s^+} \eta_T(\xi) - \lim_{\xi \to s^-} \eta_T(\xi) = 1 .
$$

An influence line is therefore piecewise linear. To draw it, it is sufficient to find the ordinates where its slope changes: the ends, supports, internal hinges, and section $S$.

:::dimostrazione
The load position enters the equilibrium equations only as a linear term.

Write equilibrium for each body with the unit load at $\xi$ on body $k$. The unknowns are the support reactions and internal hinge forces. Their coefficients depend only on the geometry, and the system matrix is invertible because the structure is statically determinate. The right-hand sides vanish except for those for body $k$: $-1$ in vertical force equilibrium and $-(\xi - x_k)$ in moment equilibrium about a point $x_k$ on that body. The right-hand side vector is therefore an affine function of $\xi$ while the load remains on body $k$, so the solution is affine as well.

When the load acts at an internal hinge, the external force system on the entire structure is the same whether the load is assigned to the left body or to the right body. The support reactions therefore agree, so their influence lines are continuous even at hinges.

Find the moment and shear at $S$ from equilibrium of the portion to the left of $S$. They include the reactions on that portion, which are affine functions of $\xi$, and a load contribution only for $\xi < s$: $-(s - \xi)$ to the moment and $-1$ to the shear. The term $-(s - \xi)$ vanishes for $\xi = s$, so $\eta_M$ is continuous. The term $-1$ is present for $\xi < s$ and absent for $\xi > s$, so $\eta_T$ has an upward jump at $S$ of magnitude $1$.
:::
::::

:::esempio{titolo="Reactions of a simply supported beam"}
For a simply supported beam of span $L$ with a pin at $A$ and a roller at $B$, the unit load at $\xi$ acts vertically, so $H_A = 0$. The equations for vertical force equilibrium and moment equilibrium about $A$ are
$$
\begin{cases}
V_A + V_B - 1 = 0 \\
V_B\,L - 1 \cdot \xi = 0
\end{cases}
$$
and give
$$
\eta_{V_A}(\xi) = \frac{L - \xi}{L} ,
\qquad
\eta_{V_B}(\xi) = \frac{\xi}{L} .
$$
Both lines are straight segments: $\eta_{V_A}$ decreases from $1$ at $A$ to $0$ at $B$, while $\eta_{V_B}$ increases from $0$ to $1$. At every load position their sum is $1$, as required by vertical force equilibrium.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,(1/6)*s" segni=1 titolo="Influence line for $V_B$ on a simply supported beam with $L = 6\,\mathrm{m}$, given by $\eta_{V_B}(\xi) = \dfrac{\xi}{6}$"}
:::

## Moment and shear at a section of a simply supported beam

Use the sign convention from the chapter on internal forces and moments: $M > 0$ when the lower fibers are in tension, and $T > 0$ when the shear tends to rotate the beam element clockwise.

::::teorema{#linee-trave-appoggiata titolo="Influence lines for M and T in a simply supported beam"}
Consider a simply supported beam of span $L$ with a pin at $A$ ($x = 0$) and a roller at $B$ ($x = L$). Let $S$ be the section at coordinate $a$, with $0 < a < L$ and $b = L - a$. Then
$$
\eta_M(\xi) =
\begin{cases}
\dfrac{b}{L}\,\xi & \text{if } 0 \le \xi \le a \\[8pt]
\dfrac{a}{L}\,(L - \xi) & \text{if } a \le \xi \le L
\end{cases}
\qquad
\eta_T(\xi) =
\begin{cases}
-\dfrac{\xi}{L} & \text{if } 0 \le \xi < a \\[8pt]
\dfrac{L - \xi}{L} & \text{if } a < \xi \le L
\end{cases}
$$
The moment influence line is a triangle with its peak at the section and maximum ordinate $\eta_M(a) = \dfrac{ab}{L}$. The shear influence line consists of two parallel segments of slope $-\dfrac{1}{L}$, with ordinates changing from $-\dfrac{a}{L}$ to $\dfrac{b}{L}$ through a jump of $1$ at $S$. For $L = 6\,\mathrm{m}$ and $a = 2\,\mathrm{m}$ the peak ordinate of $\eta_M$ is $\dfrac{2 \cdot 4}{6} = \dfrac{4}{3}\,\mathrm{m}$, and $\eta_T$ jumps from $-\dfrac{1}{3}$ to $\dfrac{2}{3}$.

:::dimostrazione
Take the portion that does *not* contain the load in equilibrium, since it carries just one support reaction.

If the load is to the right of $S$ ($\xi > a$), the only forces and moments on portion $AS$ are the reaction $V_A = \dfrac{L - \xi}{L}$ and the internal resultants at $S$. Taking moments about $S$ and summing vertical forces gives
$$
M = V_A\,a = \frac{a}{L}\,(L - \xi) ,
\qquad
T = V_A = \frac{L - \xi}{L} ,
$$
since positive shear acts downward on the left-hand portion. If the load is to the left of $S$ ($\xi < a$), consider portion $SB$, carrying only $V_B = \dfrac{\xi}{L}$ and the internal resultants at $S$. On the right-hand portion positive shear acts upward, so
$$
M = V_B\,b = \frac{b}{L}\,\xi ,
\qquad
T + V_B = 0 \;\Longrightarrow\; T = -\frac{\xi}{L} .
$$
At $\xi = a$, both expressions for the moment give $\dfrac{ab}{L}$, whereas the shear expressions differ by $\dfrac{L - a}{L} + \dfrac{a}{L} = 1$.
:::
::::

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,(2/3)*s;2,0,6,0,4/3+(-1/3)*s" segni=1 titolo="Moment influence line at $S$ ($\mathrm{m}$), with $L = 6\,\mathrm{m}$ and $a = 2\,\mathrm{m}$. The peak ordinate is $\dfrac{ab}{L} = \dfrac{4}{3}$"}

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,(-1/6)*s;2,0,6,0,2/3+(-1/6)*s" segni=1 titolo="Shear influence line at $S$, with $L = 6\,\mathrm{m}$ and $a = 2\,\mathrm{m}$. The jump of $1$ takes the ordinate from $-\dfrac{1}{3}$ to $\dfrac{2}{3}$"}

:::osservazione{#costruzione-grafica titolo="Graphical construction of the M and T influence lines"}
Extend the right branch of $\eta_M$ to the vertical through $A$. It meets this vertical at ordinate $a$. Similarly, extending the left branch to the vertical through $B$ gives ordinate $b$. To draw the moment influence line, mark ordinate $a$ on the vertical through $A$ and ordinate $b$ on the vertical through $B$. Join each point to the opposite support and retain the part of each segment up to the vertical through $S$. The segments meet at the peak, of ordinate $\dfrac{ab}{L}$. Likewise, the two branches of $\eta_T$ lie on the lines $\eta = -\dfrac{\xi}{L}$ and $\eta = \dfrac{L - \xi}{L}$, passing through the supports, with ordinates $-1$ at $B$ and $1$ at $A$.
:::

## Beams with overhangs and cantilevers

:::osservazione{#travi-con-sbalzi titolo="Beams with overhangs"}
In a beam with one or two overhangs, a load on an overhang acts on the same rigid body as a load within the span. By the theorem for statically determinate beams, the expressions found for $\xi$ between the supports apply on the overhangs as well. The influence lines for the reactions and for $M$ and $T$ at a section within the span therefore extend in straight lines beyond the supports.

Consider a beam with a pin at $A$ ($x = 0$), a roller at $B$ ($x = 6\,\mathrm{m}$), and an overhang $BC$ of length $2\,\mathrm{m}$. The ordinate of $\eta_{V_A} = \dfrac{6 - \xi}{6}$ is $-\dfrac{1}{3}$ with the load at $C$, and that of $\eta_{V_B} = \dfrac{\xi}{6}$ is $\dfrac{4}{3}$. A load on the overhang tends to lift the beam at $A$, so that support must also restrain upward movement. This is why bilateral restraints are assumed.

::struttura{nodi="A,0,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,1+(-1/6)*s;6,0,8,0,(-1/6)*s" segni=1 titolo="Influence line for $V_A$ on an overhanging beam. The ordinate is negative, $-\dfrac{1}{3}$, when the load is at $C$"}
:::

:::teorema{#sezione-sullo-sbalzo titolo="Section on an overhang or cantilever"}
Let $S$ be a section at coordinate $s$ on a right-hand overhang or a cantilever fixed at the left, with the right end free. Then
$$
\eta_M(\xi) =
\begin{cases}
0 & \text{if } \xi < s \\
-(\xi - s) & \text{if } \xi > s
\end{cases}
\qquad
\eta_T(\xi) =
\begin{cases}
0 & \text{if } \xi < s \\
1 & \text{if } \xi > s
\end{cases}
$$
This follows from equilibrium of the free portion to the right of $S$. If the load lies outside this portion, the internal resultants at $S$ are zero. If the load is at $\xi > s$ on the portion, moment equilibrium about $S$ gives $M = -1 \cdot (\xi - s)$ and vertical equilibrium gives $T - 1 = 0$. For the overhanging beam just considered, section $D$ at $x = 7\,\mathrm{m}$ gives $\eta_M = -1\,\mathrm{m}$ when the load is at $C$. Loads in span $AB$ do not affect the internal resultants on the overhang.
:::

:::esempio{titolo="Cantilever"}
For a cantilever of length $L$, fixed at $A$ ($x = 0$) and free at the right, equilibrium with the load at $\xi$ gives
$$
\begin{cases}
V_A - 1 = 0 \\
M_A - 1 \cdot \xi = 0
\end{cases}
$$
so $\eta_{V_A}(\xi) = 1$ and $\eta_{M_A}(\xi) = \xi$, with $M_A$ counterclockwise. The fixed-end reaction moment increases linearly with distance from the load to the support. For section $S$ at $x = 1.5\,\mathrm{m}$ in a cantilever of length $4\,\mathrm{m}$, the result for a section on an overhang gives the line shown, with ordinate $-2.5\,\mathrm{m}$ at the free end.

::struttura{nodi="A,0,0;S,1.5,0;B,4,0" aste="A-B" vincoli="A,incastro,180" diagramma="0,0,1.5,0,0;1.5,0,4,0,(-1)*s" segni=1 titolo="Moment influence line at $S$ for a cantilever of length $4\,\mathrm{m}$, with $S$ at a distance $1.5\,\mathrm{m}$ from the fixed support ($\mathrm{m}$)"}
:::

## Kinematic method: the Müller-Breslau principle

The equilibrium method requires an equation for each segment. The principle of virtual work gives the shape of the entire influence line in a single construction.

:::richiamo{titolo="Principle of virtual work"}
Assumptions: a system of rigid bodies with frictionless bilateral constraints and infinitesimal virtual displacements compatible with the constraints.

Statement: the system is in equilibrium if and only if the applied forces do zero virtual work for every compatible virtual displacement. See the chapter on the principle of virtual work.
:::

:::definizione{#sconnessione-e-spostamento-coniugato titolo="Releasing a restraint and its conjugate displacement"}
To determine $X$ by virtual work, release the restraint that provides $X$ and treat $X$ as an applied generalized force. The **conjugate displacement** $\delta_X$ is the kinematic quantity for which the virtual work of $X$ is $X\,\delta_X$.

- For the vertical reaction $V$ at a support, remove the vertical restraint. Then $\delta_X$ is the vertical displacement of the point, positive upward.
- For the reaction moment $M_A$ at a fixed support, replace the support with a pin. Then $\delta_X$ is the rotation $\varphi$ of the body at $A$, positive counterclockwise.
- For the bending moment $M$ at $S$, introduce a hinge at $S$. Then $\delta_X = \Delta\varphi = \varphi_s - \varphi_d$, the rotation of the left segment minus the rotation of the right segment.
- For the shear $T$ at $S$, introduce at $S$ a parallel-link connection with its links parallel to the beam axis. This permits only relative vertical sliding. Then $\delta_X = \Delta v = v_d - v_s$, the vertical displacement of the right segment minus that of the left segment.

The signs follow from the conventions for $M$ and $T$. A positive moment acts counterclockwise on the left segment and clockwise on the right, so its work is $M\,\varphi_s - M\,\varphi_d$. Positive shear acts downward on the left segment and upward on the right, so its work is $-T\,v_s + T\,v_d$.
:::

::::teorema{#teorema-di-muller-breslau titolo="Müller-Breslau principle"}
Let $X$ be a support reaction or the value of $M$ or $T$ at a section $S$ of a statically determinate beam made up of rigid bodies with frictionless bilateral constraints. Make the release corresponding to $X$ and consider the infinitesimal motion of the resulting mechanism for which the conjugate displacement is $\delta_X = 1$. Then
$$
\eta_X(\xi) = v(\xi) ,
$$
where $v(\xi)$ is the vertical displacement, positive upward, of the point on the beam at coordinate $\xi$. In other words, the influence line for $X$ is the vertical displacement diagram of the mechanism under a unit conjugate displacement.

:::dimostrazione
Apply the principle of virtual work to the released structure, taking the infinitesimal motion of the mechanism as its virtual displacement.

Since the structure is statically determinate, removing the scalar restraint that provides $X$ gives a mechanism with one degree of freedom. Its possible infinitesimal motions are all proportional. Choose the one for which $\delta_X = 1$. With the unit load at $\xi$, the original structure is in equilibrium. If the released structure carries the load and generalized force $X$ as an applied force, it remains in equilibrium with the same reactions at the remaining restraints. Its motion is compatible with these frictionless restraints, so their reactions do no work. The unit load is directed downward and therefore does work $-1 \cdot v(\xi)$. By the principle of virtual work,
$$
X \cdot 1 - 1 \cdot v(\xi) = 0 ,
$$
hence $X = v(\xi)$. By definition, the value of $X$ with the unit load at $\xi$ is $\eta_X(\xi)$, so $\eta_X(\xi) = v(\xi)$.
:::
::::

:::osservazione{#forma-della-linea-di-influenza titolo="Shape of the influence line from the mechanism"}
Each body of the mechanism rotates about its instantaneous center relative to the ground, so its vertical displacement is $v = \varphi\,(x - x_C)$, where $x_C$ is the horizontal coordinate of that center. The following properties allow the influence line to be sketched directly:

- on each rigid body the line is straight, with slope equal to its rotation $\varphi$;
- the line is zero at the remaining fixed pins and rollers, which serve as centers of rotation, and has zero slope along the fixed segment;
- at the section where $M$ is sought, the line has a corner, with a slope difference of $1$;
- at the section where $T$ is sought, the two branches are parallel because the parallel-link connection prevents relative rotation, and the line jumps by $1$.

The ordinates can be found from the rotations of the bodies, or by applying the equilibrium method at one point on each segment.
:::

:::esempio{titolo="Moment at a section of a simply supported beam"}
To obtain the moment at $S$ ($x = a$) in the simply supported beam, introduce a hinge at $S$. Segment $AS$ rotates about $A$ through $\varphi_1$, while segment $SB$ rotates about $B$ through $\varphi_2$. The displacements of the two segments must agree at $S$. The conditions to be satisfied together are
$$
\begin{cases}
\varphi_1\,a = \varphi_2\,(a - L) \\
\varphi_1 - \varphi_2 = 1
\end{cases}
$$
giving $\varphi_1 = \dfrac{b}{L}$ and $\varphi_2 = -\dfrac{a}{L}$. The displacement of $S$ is $v(a) = \varphi_1\,a = \dfrac{ab}{L}$, in agreement with the ordinate found by equilibrium. The figure shows the mechanism for $L = 6\,\mathrm{m}$ and $a = 2\,\mathrm{m}$. The displaced configuration, drawn dashed, coincides with the moment influence line at $S$.

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-S;S-B" cerniere="S" vincoli="A,cerniera;B,carrello" tratteggi="0,0 2,1.3333 6,0" punti="2,1.3333,S',pieno" etichette="0.9,1.05,φ_1;4.3,1.05,φ_2" titolo="Mechanism with a hinge at $S$ and relative rotation $\varphi_1 - \varphi_2 = 1$. The displacement of $S$ is $\dfrac{ab}{L} = \dfrac{4}{3}\,\mathrm{m}$"}
:::

## Gerber beams

The bodies in a Gerber beam are arranged in sequence. The supporting segment is connected to the ground by statically determinate supports, and the suspended segment rests on it at an internal hinge. The Müller-Breslau principle gives the shape of their influence lines directly.

:::teorema{#linee-trave-gerber titolo="Influence lines for Gerber beams"}
Consider a Gerber beam made up of a supporting span and a suspended span joined at internal hinge $C$. Then

- the influence line for a response of the suspended span (one of its reactions, or $M$ or $T$ at one of its sections) is zero throughout the supporting span;
- over the suspended span, the influence line for a response of the supporting span is the straight segment from the ordinate at $C$ to zero at the ground support of the suspended span.

This follows from the Müller-Breslau principle. A release in the suspended span leaves the supporting span on its statically determinate supports, so it remains at rest and the influence line is zero over it. A release in the supporting span leaves the suspended span hinged at $C$ and supported on the ground. The suspended span therefore rotates about its ground support, and its influence line is straight and reaches zero there.
:::

:::esempio{titolo="Gerber beam with a suspended span"}
In the beam shown, supporting span $AC$ has a pin at $A$, a roller at $B$, and overhang $BC$. Suspended span $CD$ is connected at $C$ and rests on a roller at $D$.

::struttura{nodi="A,0,0;B,6,0;C,8,0;D,12,0" aste="A-C;C-D" cerniere="C" vincoli="A,cerniera;B,carrello;D,carrello" quote="A,B,6 m;B,C,2 m;C,D,4 m" titolo="Gerber beam with overhanging supporting span $AC$ and suspended span $CD$"}

Reaction $V_D$ belongs to the suspended span. Removing the roller at $D$ leaves $AC$ stationary, while $CD$ rotates about $C$. With $v(D) = 1$, the result is $\eta_{V_D} = 0$ on $AC$ and $\eta_{V_D} = \dfrac{\xi - 8}{4}$ on $CD$.

The bending moment at $B$ belongs to the supporting span. When a hinge is introduced at $B$, segment $AB$ remains stationary because it has a pin at $A$ and a roller at $B$. Segment $BC$ rotates about $B$ through $\varphi_d = -1$ because $\varphi_s - \varphi_d = 1$ and $\varphi_s = 0$. Span $CD$ rotates about $D$. The displacement of $C$ is $v(C) = -1 \cdot 2 = -2\,\mathrm{m}$, so
$$
\eta_{M_B}(\xi) =
\begin{cases}
0 & \text{if } 0 \le \xi \le 6 \\
-(\xi - 6) & \text{if } 6 \le \xi \le 8 \\
-\dfrac{12 - \xi}{2} & \text{if } 8 \le \xi \le 12
\end{cases}
$$
An equilibrium check with the load at $C$ is direct. The load acts on the overhang at a distance $2\,\mathrm{m}$ from $B$, giving $M_B = -2\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0;C,8,0;D,12,0" aste="A-C;C-D" cerniere="C" vincoli="A,cerniera;B,carrello;D,carrello" diagramma="0,0,6,0,0;6,0,8,0,(-1)*s;8,0,12,0,-2+(1/2)*s" segni=1 titolo="Moment influence line at $B$ ($\mathrm{m}$), zero on $AB$ and at its minimum at $C$, with ordinate $-2$"}
:::

## Evaluating responses to specified loads using influence lines

:::richiamo{titolo="Definite integral"}
Assumption: $f$ is piecewise continuous on $[c, d]$.

Statement: the integral $\displaystyle\int_c^d f(\xi)\,d\xi$ equals the signed area between the graph of $f$ and the axis, positive where $f > 0$ and negative where $f < 0$. See the chapter on definite integrals in Mathematical Analysis 1.
:::

::::teorema{#valore-con-la-linea-di-influenza titolo="Evaluating a response from its influence line"}
Let $\eta_X$ be the influence line for a response $X$ of a statically determinate beam. If downward point loads $P_1, \dots, P_n$ act at coordinates $\xi_1, \dots, \xi_n$ and a downward distributed load $q(\xi)$ acts over the interval $[c, d]$, then
$$
X = \sum_{i=1}^{n} P_i\,\eta_X(\xi_i) + \int_c^d q(\xi)\,\eta_X(\xi)\,d\xi .
$$
For a uniform load $q$, the integral is $q\,\mathcal{A}$, where $\mathcal{A}$ is the signed area under the influence line over the loaded interval. A counterclockwise couple $\mathcal{M}$ applied at $\xi_0$ contributes $-\mathcal{M}\,\eta_X'(\xi_0)$, where $\eta_X'$ is the slope of the influence line at $\xi_0$.

:::dimostrazione
Apply virtual work to the mechanism in the Müller-Breslau principle, with $\delta_X = 1$ and displacements $v(\xi) = \eta_X(\xi)$. The downward force $P_i$ does work $-P_i\,\eta_X(\xi_i)$. The distributed load consists of elementary forces $q(\xi)\,d\xi$, whose total work is $-\displaystyle\int_c^d q(\xi)\,\eta_X(\xi)\,d\xi$. The couple does work $\mathcal{M}\,\varphi(\xi_0)$, where the rotation of the body on which it acts is the slope $\varphi(\xi_0) = \eta_X'(\xi_0)$. The total work is zero, so
$$
X - \sum_{i=1}^{n} P_i\,\eta_X(\xi_i) - \int_c^d q(\xi)\,\eta_X(\xi)\,d\xi + \mathcal{M}\,\eta_X'(\xi_0) = 0 ,
$$
as required.
:::
::::

:::esempio{titolo="Moment at a section under a point load and a uniform load"}
A simply supported beam with $L = 6\,\mathrm{m}$ carries a point load $P = 12\,\mathrm{kN}$ at $\xi = 4\,\mathrm{m}$ and a uniform load $q = 3\,\mathrm{kN/m}$ over the entire span. For section $S$ at $x = 2\,\mathrm{m}$, the moment influence line has a peak $\dfrac{4}{3}\,\mathrm{m}$, an ordinate $\eta_M(4) = \dfrac{2}{6}\,(6 - 4) = \dfrac{2}{3}\,\mathrm{m}$, and area $\mathcal{A} = \dfrac{1}{2} \cdot 6 \cdot \dfrac{4}{3} = 4\,\mathrm{m^2}$. Therefore
$$
M_S = 12 \cdot \frac{2}{3} + 3 \cdot 4 = 8 + 12 = 20\,\mathrm{kN\,m} .
$$
Direct equilibrium gives $V_A = 12 \cdot \dfrac{2}{6} + 3 \cdot 3 = 13\,\mathrm{kN}$ and $M_S = 13 \cdot 2 - 3 \cdot 2 \cdot 1 = 20\,\mathrm{kN\,m}$, the same result.
:::

## Critical positions of moving loads

Designing a bridge or a crane runway beam requires the greatest and least values of a response as the loads move. Influence lines determine them without testing every possible load position.

:::teorema{#posizione-piu-sfavorevole titolo="Point load and distributed load of variable length"}
Let $\eta_X$ be the influence line for $X$, with maximum $\eta_{\max}$ and minimum $\eta_{\min}$.

- A moving force $P$ produces the maximum response $P\,\eta_{\max}$ at the maximum ordinate and the minimum response $P\,\eta_{\min}$ at the minimum ordinate.
- A uniform load $q$ of variable length may cover any combination of beam segments. It produces the maximum $q\,\mathcal{A}^+$ when it occupies precisely the portions where $\eta_X > 0$ and the minimum $q\,\mathcal{A}^-$ when it occupies precisely those where $\eta_X < 0$. The quantities $\mathcal{A}^+$ and $\mathcal{A}^-$ are the positive and negative signed areas under the influence line.

This follows from the formula for the response using an influence line. Each loaded portion contributes to $X$ an amount $q\displaystyle\int \eta_X\,d\xi$, positive where $\eta_X > 0$ and negative where $\eta_X < 0$. A load of variable length models crowds or snow, which can cover any part of a structure. For an overhanging beam with section $S$ in the main span, loading the span alone maximizes the moment, while loading only the overhang minimizes it.
:::

:::richiamo{titolo="Fundamental theorem of calculus"}
Assumptions: $f$ is continuous on an interval $I$, and $c \in I$.

Statement: the function $F(z) = \displaystyle\int_c^z f(\xi)\,d\xi$ is differentiable on $I$ and $F'(z) = f(z)$. See the chapter on definite integrals in Mathematical Analysis 1.
:::

::::teorema{#carico-di-lunghezza-assegnata titolo="Distributed load of specified length"}
Let $\eta_X$ be continuous. A uniform load $q$ of prescribed length $c$ covers the interval $[z, z + c]$ and moves along the beam as $z$ varies. The response
$$
X(z) = q \int_z^{z + c} \eta_X(\xi)\,d\xi
$$
is stationary when the influence-line ordinates at the two ends of the load are equal, $\eta_X(z) = \eta_X(z + c)$. If the influence line is triangular and $c$ is less than the length of its base, the maximum occurs at the unique position giving equal end ordinates, with the loaded interval straddling the peak.

:::dimostrazione
Write $X(z) = q\,\big(F(z + c) - F(z)\big)$, where $F$ is an antiderivative of $\eta_X$. By the fundamental theorem of calculus,
$$
X'(z) = q\,\big(\eta_X(z + c) - \eta_X(z)\big) ,
$$
which vanishes if and only if the ordinates at the ends are equal. For a triangular line, while the load lies entirely on the rising branch, $\eta_X(z + c) > \eta_X(z)$ and $X$ increases. When it lies entirely on the falling branch, $X$ decreases. When the load straddles the peak, $\eta_X(z)$ increases and $\eta_X(z + c)$ decreases as $z$ increases. Thus $X'$ changes sign just once, from positive to negative, and the stationary point is the maximum.
:::
::::

:::esempio{titolo="Load of specified length on a simply supported beam"}
A simply supported beam with $L = 10\,\mathrm{m}$ carries a load $q = 8\,\mathrm{kN/m}$ of length $c = 5\,\mathrm{m}$. For section $S$ at $x = 4\,\mathrm{m}$, the moment influence line has branches $\eta = 0.6\,\xi$ and $\eta = 0.4\,(10 - \xi)$ and a peak $2.4\,\mathrm{m}$. Equating the end ordinates gives
$$
0.6\,z = 0.4\,(10 - z - 5) \quad\Longrightarrow\quad z = 2\,\mathrm{m} ,
$$
so the loaded interval runs from $2\,\mathrm{m}$ to $7\,\mathrm{m}$, with equal end ordinates $1.2\,\mathrm{m}$. A vertical through $S$ divides the trapezoidal area under the influence line over that interval:
$$
\mathcal{A} = \frac{1.2 + 2.4}{2} \cdot 2 + \frac{2.4 + 1.2}{2} \cdot 3 = 3.6 + 5.4 = 9\,\mathrm{m^2} ,
$$
therefore $M_{S,\max} = 8 \cdot 9 = 72\,\mathrm{kN\,m}$. Centering the load on the section, from $1.5\,\mathrm{m}$ to $6.5\,\mathrm{m}$, would give $71\,\mathrm{kN\,m}$.

::grafico{f="min(0.6*x,0.4*(10-x))+0*sqrt(x*(10-x))" xmin=-0.5 xmax=10.8 ymin=-0.4 ymax=3 area="min(0.6*x,0.4*(10-x));0;2;7" segmenti="2,0,2,1.2;7,0,7,1.2;4,0,4,2.4" punti="4,2.4,pieno" etichette="4,2.7,2.4;2,1.5,1.2;7,1.5,1.2" nomi="ξ,η" titolo="Moment influence line at $S$ and position of the load of length $5\,\mathrm{m}$ that maximizes $M_S$. The ordinates are equal at the load ends"}
:::

:::osservazione{#convoglio-di-carichi titolo="Train of moving loads"}
A **load train** consists of point forces $P_1, \dots, P_n$ at fixed spacings, as for the axles of a vehicle. If $z$ is the position of the first force and $d_i$ the distance from the first to the $i$th force, the response is
$$
X(z) = \sum_{i=1}^{n} P_i\,\eta_X(z + d_i) .
$$
Each term is piecewise linear in $z$, so $X(z)$ is also piecewise linear. Its maximum occurs at an endpoint of one of the linear segments, when a force is at a corner of the influence line or enters or leaves the beam. For a triangular line, test each force in turn at the peak. Two forces of $10\,\mathrm{kN}$ spaced $3\,\mathrm{m}$ apart on the simply supported beam in the previous example give $10 \cdot 2.4 + 10 \cdot 1.2 = 36\,\mathrm{kN\,m}$ when the first force is at $S$ and the second at $x = 7\,\mathrm{m}$, and $10 \cdot 0.6 + 10 \cdot 2.4 = 30\,\mathrm{kN\,m}$ when the second is at $S$ and the first at $x = 1\,\mathrm{m}$. The maximum is therefore $36\,\mathrm{kN\,m}$.
:::
