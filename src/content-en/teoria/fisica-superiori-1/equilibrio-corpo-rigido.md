---
titolo: "Rigid-body equilibrium"
sommario: "Moments, levers, force couples, beam reactions, centres of gravity, and stability."
---

## Moment of a force

:::definizione{#momento titolo="Force and perpendicular distance"}
A **rigid body** is a model in which the distances between its points remain fixed. Understanding equilibrium also requires considering rotation. The same force opens a door more effectively when applied far from its hinges. Direction matters too. A force pointing along the door toward the hinges produces zero turning effect about them.

The **moment arm** $b$ is the perpendicular distance from the reference point $O$ to the force's line of action. The magnitude of its planar moment is $\lvert M_O\rvert=Fb$, in newton metres. If $r$ is the distance from $O$ to the point of application and $\theta$ the angle between the segment $r$ and the force, then $b=r\lvert\sin\theta\rvert$. Equivalently, multiply $r$ by the component of force perpendicular to the segment.
:::

:::esempio{titolo="A spanner at an angle to the push"}
A force of $40\,\mathrm N$ acts on a $0.30\,\mathrm m$ spanner at $30^\circ$ to the spanner. Its effective component is $40\sin30^\circ\,\mathrm N=20\,\mathrm N$. Multiplying by $0.30\,\mathrm m$ gives $6\,\mathrm{N\,m}$. The moment arm is $0.15\,\mathrm m$. Using the full length as the moment arm would double the actual result.
:::

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,0 0.75,-1.3;0.75,-1.3 4.73,1" vettori="3,0,4.73,1,F" punti="0,0,pieno,O;3,0,pieno,A" etichette="1.6,0.35,r;0.2,-0.8,b" xmin=-1 xmax=5.4 ymin=-2 ymax=1.8 titolo="The moment arm b is perpendicular to the line of action. OA gives the distance from the bolt to the point of application"}

## Signs of moments

:::osservazione{#segni titolo="Clockwise and anticlockwise"}
Looking at the plane from a fixed side, one may take anticlockwise as positive. To assign a sign, consider which way the individual force tends to turn the object about the chosen point. A downward force on the right of a pivot tends to rotate it clockwise and has negative moment. On the left, the same push has positive moment.

For a beam along the $x$ axis with pivot at the origin and vertical forces only, write $M_O=xF_y$ using signed components. If a downward $12\,\mathrm N$ force acts at $x=-0.4\,\mathrm m$, the product $(-0.4)(-12)$ gives $+4.8\,\mathrm{N\,m}$. A further downward $8\,\mathrm N$ force at $x=+0.3\,\mathrm m$ adds $-2.4\,\mathrm{N\,m}$. The total is $+2.4\,\mathrm{N\,m}$.
:::

## Equilibrium of a rigid body

::::teorema{#equilibrio-rigido titolo="Forces and moments must sum to zero"}
A rigid body initially at rest under coplanar forces remains in equilibrium if both the resultant force and the sum of the moments about a common point $O$ are zero. The conditions are
$$
\sum F_x=0,\qquad \sum F_y=0,\qquad \sum M_O=0.
$$
The choice of $O$ is free. To simplify the calculations, one often chooses a point on the line of action of an unknown reaction.

:::dimostrazione
Moving the reference from $O$ to $O'$ subtracts from each moment the contribution due to the displacement vector $\overrightarrow{OO'}$ and that individual force. Those subtractions add to the moment of the resultant calculated using the same displacement vector. When the resultant is zero, the change is zero. Thus a zero total moment about $O$ is also zero about $O'$.
:::
::::

:::attenzione
Two opposite forces with distinct lines of action have a zero resultant but a nonzero moment. A single force whose line passes through the pivot has zero moment about that pivot but a nonzero resultant. Each balance tests a distinct aspect of equilibrium.
:::

## Levers

:::teorema{#leve titolo="Equal and opposite moments"}
In an ideal lever with a frictionless pivot, two forces tending to produce opposite rotations balance about the pivot if $F_1b_1=F_2b_2$, provided all other moments vanish or are already balanced. The ratio of load force to effort force is the inverse ratio of their moment arms. Obtain the pivot reaction separately from the force balance.
:::

:::esempio{titolo="Equilibrium with a pivot supporting both forces"}
A $45\,\mathrm N$ downward force acts $0.2\,\mathrm m$ left of the pivot. A $15\,\mathrm N$ downward force acts $0.6\,\mathrm m$ right of it. Their moments are $+9$ and $-9\,\mathrm{N\,m}$. The pivot supplies $60\,\mathrm N$ upward to cancel the vertical sum. Its line of action passes through the pivot, so it contributes nothing to the moment equation just used.
:::

::grafico{assi=0 uguale=1 linee="-1.8,0 3.8,0;-0.32,-0.55 0,0 0.32,-0.55 -0.32,-0.55" vettori="-1,0,-1,-1.8,45 N;3,0,3,-0.6,15 N;0,0,0,2.4,60 N" etichette="-0.5,0.45,0.2 m;1.65,0.45,0.6 m" xmin=-2.5 xmax=4.4 ymin=-2.3 ymax=3 titolo="Lever with opposite moments and an upward pivot reaction"}

## Force couples

::::teorema{#coppie titolo="Zero resultant and nonzero moment"}
A **force couple** consists of two parallel forces with common magnitude $F$, opposite directions, and distinct lines of action. Its resultant is zero, while its moment has magnitude $Fd$, where $d$ is the perpendicular separation of the lines.

:::dimostrazione
Choose a reference point on the line of action of one force. That force has zero moment arm, and the other has arm $d$. The couple's zero resultant makes the result independent of the reference point.
:::
::::

::grafico{assi=0 uguale=1 linee="-2,-2 -2,2;2,-2 2,2" vettori="-2,0,-2,1.6,F;2,0,2,-1.6,F" etichette="0,0.2,d" xmin=-3 xmax=3 ymin=-2.4 ymax=2.4 titolo="Opposite vertical forces separated by d. Both tend to produce clockwise rotation about the central point"}

## Beams with two supports

:::osservazione{#travi titolo="Finding the support reactions"}
For a horizontal beam of length $L$ between two supports, one weight $P$ applied at distance $a$ from A gives reaction $R_B=Pa/L$ at the other support if the beam's weight can be neglected. Moments about A eliminate $R_A$. Vertical balance then gives $R_A=P-R_B$. If the beam has its own weight, include it as a vertical force acting at its centre of gravity.

For $L=4\,\mathrm m$, $a=1\,\mathrm m$, and $P=100\,\mathrm N$, we find $R_B=25\,\mathrm N$ and $R_A=75\,\mathrm N$. A uniform beam weighing $40\,\mathrm N$ adds $20\,\mathrm N$ to each reaction, because its own weight acts at the midpoint. Taking moments about B provides another check.
:::

## Centre of gravity

:::definizione{#baricentro titolo="Position of the resultant weight"}
In a uniform field the **centre of gravity** coincides with the centre of mass. For masses $m_i$ fixed along a line at positions $x_i$, its coordinate is $x_G=\dfrac{\sum m_i x_i}{\sum m_i}$. This follows by requiring the total weight at $x_G$ to produce the same moment as the sum of individual weights. The factor $g$ cancels.

The midpoint is the centre of gravity of a uniform rod of constant cross-section, by symmetry. Adding a mass to the right of the original centre shifts the weighted mean to the right. The new position lies between the old position and that of the added mass.
:::

## Stability and tipping

:::teorema{#stabilita titolo="The vertical through the centre of gravity"}
With only weight and the reactions of a flat support, equilibrium requires the vertical through the centre of gravity to intersect the support base. The system is at its tipping threshold when this line reaches the edge. When the line lies beyond the edge, weight has a moment about the edge that tends to overturn the body.

A horizontal force $F$ acting at height $h$ has moment $Fh$ about the edge toward which the body tends to rotate. If weight is $P$ and its line of action is at distance $b$ from that edge, the threshold satisfies $Fh=Pb$. Available friction must also be sufficient to prevent sliding before that threshold is reached.
:::
