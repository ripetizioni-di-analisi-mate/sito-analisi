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
A spanner is $0.30\,\mathrm m$ long. A force of $40\,\mathrm N$ acts at $30^\circ$ to the spanner. Its effective component is $40\sin30^\circ\,\mathrm N=20\,\mathrm N$. Multiplying by $0.30\,\mathrm m$ gives $6\,\mathrm{N\,m}$. The moment arm is $0.15\,\mathrm m$. Using the full length as the moment arm would double the actual result.
:::

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,0 0.75,-1.3;0.75,-1.3 4.73,1" vettori="3,0,4.73,1,F" punti="0,0,pieno,O;3,0,pieno,A" etichette="1.6,0.35,r;0.2,-0.8,b" xmin=-1 xmax=5.4 ymin=-2 ymax=1.8 titolo="The moment arm b is perpendicular to the line of action. OA gives the distance from the bolt to the point of application"}

:::esempio{titolo="Using both components of the force"}
The pivot is at $O$. Point $A$ lies $x=0.40\,\mathrm m$ to the right and $y=0.30\,\mathrm m$ above it. For an oblique force, the vertical component $F_y$ has lever arm $x$ and tends to turn the body anticlockwise if $F_y>0$. The horizontal component $F_x$ has lever arm $y$ and tends to turn it clockwise if $F_x>0$. With this choice of positive direction,
$$
M_O=xF_y-yF_x.
$$
For $F_x=40\,\mathrm N$ and $F_y=30\,\mathrm N$, both products are $12\,\mathrm{N\,m}$, so the moment is zero. The diagram shows that the line of action passes through $O$ in this case. If only $F_y$ is halved, the first product becomes $6\,\mathrm{N\,m}$ while the second stays at $12\,\mathrm{N\,m}$. The moment is now $-6\,\mathrm{N\,m}$, so the clockwise tendency prevails.

::grafico{assi=0 uguale=1 linee="0,0 .4,0 .4,.3;0,0 .75,.5625" vettori=".4,.3,.75,.5625,F" punti="0,0,pieno,O;.4,.3,pieno,A" etichette=".2,-.06,0.40 m;.49,.13,0.30 m" xmin=-.12 xmax=.93 ymin=-.14 ymax=.69 titolo="The resultant of the components lies along OA when the force components are in the same ratio as the coordinates"}
:::

## Signs of moments

:::osservazione{#segni titolo="Clockwise and anticlockwise"}
Looking at the plane from a fixed side, one may take anticlockwise as positive. To assign a sign, consider which way the individual force tends to turn the object about the chosen point. A downward force on the right of a pivot tends to rotate it clockwise and has negative moment. On the left, the same push has positive moment.

For a beam along the $x$ axis with pivot at the origin and vertical forces only, write $M_O=xF_y$ using signed components. If a downward $12\,\mathrm N$ force acts at $x=-0.4\,\mathrm m$, the product $(-0.4)(-12)$ gives $+4.8\,\mathrm{N\,m}$. A further downward $8\,\mathrm N$ force at $x=+0.3\,\mathrm m$ adds $-2.4\,\mathrm{N\,m}$. The total is $+2.4\,\mathrm{N\,m}$.
:::

:::esempio{titolo="The same system about two reference points"}
A downward force of $10\,\mathrm N$ acts on a rod at $x=-1\,\mathrm m$, and an upward force of $20\,\mathrm N$ acts at $x=2\,\mathrm m$. Taking $O$ at $x=0$, the contributions are $(-1)(-10)=10$ and $(2)(20)=40$, in newton metres. They have the same sign because both forces tend to turn the rod anticlockwise about $O$. If the reference point is $O'$ at $x=1\,\mathrm m$, the coordinates of the points of application relative to $O'$ become $-2$ and $1\,\mathrm m$. The contributions become $20$ and $20\,\mathrm{N\,m}$. Moving the reference point $1\,\mathrm m$ to the right has reduced the total moment by $10\,\mathrm{N\,m}$, the moment of the $10\,\mathrm N$ vertical resultant with respect to that offset.

::grafico{assi=0 uguale=1 linee="-1.7,0 2.7,0" vettori="-1,0,-1,-.8,10 N;2,0,2,1.6,20 N" punti="0,0,pieno,O;1,0,pieno,O′" etichette="-1,-1.1,x = −1 m;2,-.35,x = 2 m" xmin=-2 xmax=3.2 ymin=-1.4 ymax=2 titolo="Moving the reference point from O to O′ changes both lever arms and the total moment"}
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

:::osservazione{titolo="Reading the two balance conditions separately"}
The table compares the resultant and the total moment about $O$. Both cases with opposite forces assume that the forces have equal magnitude. In each case every external force counts, including any reactions. A reaction can cancel the resultant of a load and still leave a moment if the lines of action are distinct. When all forces are vertical, checking their sum is sufficient for a particle. Rigid-body equilibrium also requires the total moment to be zero.

| Force system | Resultant | Moment about $O$ |
| --- | --- | --- |
| Two opposite forces on one line | Zero | Zero |
| One force through $O$ | Nonzero | Zero |
| Two opposite forces on distinct lines | Zero | Nonzero |
| One force with a nonzero lever arm | Nonzero | Nonzero |

If the diagram shows a horizontal force and all the others are vertical, horizontal balance requires another force with an opposite component. The moment equation on its own does not determine that component, for example when its line of action is along the beam.
:::

:::esempio{titolo="A hinge and a cable with reactions along both axes"}
A horizontal rod of negligible weight is $1.20\,\mathrm m$ long and is hinged to a wall at A. A $96\,\mathrm N$ load acts halfway along the rod. A cable joins the free end to a higher point on the wall. If its tension has magnitude $T$, its horizontal component is $-\dfrac45T$ and its vertical component is $\dfrac35T$. Taking moments about A removes the hinge reaction because it passes through A. The horizontal component of the tension also has a zero lever arm.
$$
\dfrac35T\cdot1.20=96\cdot0.60
\qquad\Longrightarrow\qquad T=80\,\mathrm N.
$$
The components of the tension are $-64$ and $+48\,\mathrm N$. Horizontal and vertical balance therefore give a reaction of $64\,\mathrm N$ to the right and $96-48=48\,\mathrm N$ upwards. The hinge and cable each support half the load vertically. Their horizontal components cancel because the cable pulls towards the wall and the hinge pushes away from it.

::grafico{assi=0 uguale=1 linee="0,-.21 0,1.03;0,0 1.2,0;0,.90 1.2,0" punti="0,0,pieno,A;1.2,0,pieno,B" vettori=".6,0,.6,-.42,96 N;1.2,0,.78,.315,T" etichette=".6,.12,0.60 m;1.13,-.13,1.20 m" xmin=-.24 xmax=1.43 ymin=-.5 ymax=1.12 titolo="The vertical component of T balances the moment of the load about hinge A"}
:::

## Levers

:::teorema{#leve titolo="Equal and opposite moments"}
In an ideal lever with a frictionless pivot, two forces tending to produce opposite rotations balance about the pivot if $F_1b_1=F_2b_2$, provided all other moments vanish or are already balanced. The ratio of load force to effort force is the inverse ratio of their moment arms. Obtain the pivot reaction separately from the force balance.
:::

:::esempio{titolo="Equilibrium with a pivot supporting both forces"}
A $45\,\mathrm N$ downward force acts $0.2\,\mathrm m$ left of the pivot. At $0.6\,\mathrm m$ to the right, a downward force of $15\,\mathrm N$ acts. Their moments are $+9$ and $-9\,\mathrm{N\,m}$. The pivot supplies $60\,\mathrm N$ upward to cancel the vertical sum. Its line of action passes through the pivot, so it contributes nothing to the moment equation just used.
:::

::grafico{assi=0 uguale=1 linee="-1.8,0 3.8,0;-0.32,-0.55 0,0 0.32,-0.55 -0.32,-0.55" vettori="-1,0,-1,-1.8,45 N;3,0,3,-0.6,15 N;0,0,0,2.4,60 N" etichette="-0.5,0.45,0.2 m;1.65,0.45,0.6 m" xmin=-2.5 xmax=4.4 ymin=-2.3 ymax=3 titolo="Lever with opposite moments and an upward pivot reaction"}

:::esempio{titolo="Opposing forces on the same side of the pivot"}
A $60\,\mathrm N$ load acts downwards $0.30\,\mathrm m$ to the right of the pivot. A hand lifts the rod $0.90\,\mathrm m$ from the pivot on the same side. Both forces act to the right of the pivot and their directions are opposite. The hand's force therefore has a positive moment in the rotational balance.
$$
0.90F-0.30\cdot60=0,\qquad F=20\,\mathrm N.
$$
Checking the vertical forces, the hand lifts with $20\,\mathrm N$ while the load pushes down with $60\,\mathrm N$. The pivot must supply the remaining $40\,\mathrm N$ upwards. The directions of the forces on that side give the moments opposite signs.

::grafico{assi=0 uguale=1 linee="-.26,0 1.05,0;-.06,-.1 0,0 .06,-.1 -.06,-.1" vettori=".3,0,.3,-.3,60 N;.9,0,.9,.1,20 N;0,0,0,.2,40 N" etichette=".3,.07,0.30 m;.85,-.09,0.90 m" xmin=-.35 xmax=1.2 ymin=-.39 ymax=.32 titolo="The load and the hand are on the same side of the pivot. Their vertical forces act in opposite directions."}
:::

## Force couples

::::teorema{#coppie titolo="Zero resultant and nonzero moment"}
A **force couple** consists of two parallel forces with common magnitude $F$, opposite directions, and distinct lines of action. Its resultant is zero, while its moment has magnitude $Fd$, where $d$ is the perpendicular separation of the lines.

:::dimostrazione
Choose a reference point on the line of action of one force. That force has zero moment arm, and the other has arm $d$. The couple's zero resultant makes the result independent of the reference point.
:::
::::

::grafico{assi=0 uguale=1 linee="-2,-2 -2,2;2,-2 2,2" vettori="-2,0,-2,1.6,F;2,0,2,-1.6,F" etichette="0,0.2,d" xmin=-3 xmax=3 ymin=-2.4 ymax=2.4 titolo="Opposite vertical forces separated by d. Both tend to produce clockwise rotation about the central point"}

:::esempio{titolo="Adding couples in opposite directions"}
The first couple consists of vertical forces of magnitude $35\,\mathrm N$ separated by $0.40\,\mathrm m$. The force on the left is downward and the one on the right is upward, so the moment is anticlockwise and equals $+14\,\mathrm{N\,m}$. A second couple of $20\,\mathrm N$ forces separated by $0.30\,\mathrm m$ tends to turn the body clockwise. Its contribution is $-6\,\mathrm{N\,m}$. Together they give a zero resultant and a moment of $+8\,\mathrm{N\,m}$. A third couple of $8\,\mathrm{N\,m}$ clockwise would cancel the total moment.

::grafico{assi=0 uguale=1 linee="0,0 .4,0;.7,0 1,0" vettori="0,0,0,-.28,35 N;.4,0,.4,.28,35 N;.7,0,.7,.16,20 N;1,0,1,-.16,20 N" etichette=".2,.07,0.40 m;.85,-.08,0.30 m" xmin=-.13 xmax=1.14 ymin=-.37 ymax=.36 titolo="Anticlockwise couple on the left and clockwise couple on the right. The moments are added with their signs."}
:::

## Beams with two supports

:::osservazione{#travi titolo="Finding the support reactions"}
For a horizontal beam of length $L$ between two supports, one weight $P$ applied at distance $a$ from A gives reaction $R_B=\dfrac{Pa}{L}$ at the other support if the beam's weight can be neglected. Moments about A eliminate $R_A$. Vertical balance then gives $R_A=P-R_B$. If the beam has its own weight, include it as a vertical force acting at its centre of gravity.

For $L=4\,\mathrm m$, $a=1\,\mathrm m$, and $P=100\,\mathrm N$, we find $R_B=25\,\mathrm N$ and $R_A=75\,\mathrm N$. A uniform beam weighing $40\,\mathrm N$ adds $20\,\mathrm N$ to each reaction, because its own weight acts at the midpoint. Taking moments about B provides another check.
:::

:::esempio{titolo="Loss of contact with a load beyond a support"}
Supports A and B are $3\,\mathrm m$ apart. A beam of negligible weight extends to the right of B. A $90\,\mathrm N$ load is $4\,\mathrm m$ from A. Taking moments about A requires $3R_B=90\cdot4$, so $R_B=120\,\mathrm N$. Vertical balance would give $R_A=90-120=-30\,\mathrm N$. A downward force would be needed at A, so a simple support loses contact. With a $60\,\mathrm N$ counterweight $0.50\,\mathrm m$ from A, the reactions are instead
$$
R_B=\frac{90\cdot4+60\cdot0.50}{3}\,\mathrm N=130\,\mathrm N,\qquad
R_A=150\,\mathrm N-130\,\mathrm N=20\,\mathrm N.
$$
Both reactions now point upwards, so the supports can supply them. An independent check is to take moments about B. The sum is $-20\cdot3-90\cdot1+60\cdot2.50=0$ in newton metres.

::grafico{assi=0 uguale=1 linee="-.25,0 4.32,0;-.16,-.28 0,0 .16,-.28 -.16,-.28;2.84,-.28 3,0 3.16,-.28 2.84,-.28" vettori=".5,0,.5,-.56,60 N;4,0,4,-.84,90 N" punti="0,0,pieno,A;3,0,pieno,B" etichette=".62,.24,0.50 m;2.75,.24,3 m;4.05,.24,4 m" xmin=-.55 xmax=4.7 ymin=-1.07 ymax=.55 titolo="With the 60 N counterweight in place, the load beyond B can be carried by both supports"}
:::

## Centre of gravity

:::definizione{#baricentro titolo="Position of the resultant weight"}
In a uniform field the **centre of gravity** coincides with the centre of mass. For masses $m_i$ fixed along a line at positions $x_i$, its coordinate is $x_G=\dfrac{\sum m_i x_i}{\sum m_i}$. This follows by requiring the total weight at $x_G$ to produce the same moment as the sum of individual weights. The factor $g$ cancels.

The midpoint is the centre of gravity of a uniform rod of constant cross-section, by symmetry. Adding a mass to the right of the original centre shifts the weighted mean to the right. The new position lies between the old position and that of the added mass.
:::

:::esempio{titolo="Restoring the centre of mass to the midpoint"}
A uniform rod of mass $3\,\mathrm{kg}$ extends from $x=0$ to $x=2\,\mathrm m$. Its centre of mass is at the midpoint, $1\,\mathrm m$. Adding $1\,\mathrm{kg}$ at the right-hand end gives
$$
x_G=\frac{3\cdot1+1\cdot2}{3+1}\,\mathrm m=1.25\,\mathrm m.
$$
The centre of mass moves $25\,\mathrm{cm}$ towards the added mass. To bring it back to $x=1\,\mathrm m$, a mass can be added at $x=0$. Taking moments about the midpoint, the rod's weight has a zero lever arm and the two added weights have equal lever arms on opposite sides. Balance therefore requires another $1\,\mathrm{kg}$. The same result follows by setting the weighted mean equal to its initial value.

::grafico{assi=0 uguale=1 linee="-.12,0 2.12,0" vettori="1,0,1,-.45,P_a;2,0,2,-.15" punti="0,0,pieno,O;1,0,pieno,C;1.25,0,pieno,G;2,0,pieno,B" etichette=".94,.24,1 m;1.35,-.26,1.25 m;2,.22,2 m;2.07,-.19,P_m" xmin=-.25 xmax=2.43 ymin=-.6 ymax=.42 titolo="Before adding the counterweight, G lies between C, the midpoint of the rod, and the added mass at B"}
:::

## Stability and tipping

:::teorema{#stabilita titolo="The vertical through the centre of gravity"}
With only weight and the reactions of a horizontal support, equilibrium requires the vertical through the centre of gravity to intersect the support base. The system is at its tipping threshold when this line reaches the edge. When the line lies beyond the edge, weight produces a moment about the edge that tends to overturn the body.

A horizontal force $F$ acting at height $h$ has moment $Fh$ about the edge toward which the body tends to rotate. If weight is $P$ and its line of action is at distance $b$ from that edge, the threshold satisfies $Fh=Pb$. Available friction must also be sufficient to prevent sliding before that threshold is reached.
:::

:::esempio{titolo="Comparing sliding and tipping"}
A box weighing $200\,\mathrm N$ rests on a horizontal surface. The vertical line through its centre of mass is $0.20\,\mathrm m$ from the tipping edge. A horizontal push applied $0.80\,\mathrm m$ above the surface reaches the rotational threshold at
$$
F_{\mathrm{rib}}=\frac{200\cdot0.20}{0.80}\,\mathrm N=50\,\mathrm N.
$$
Before movement the vertical reaction is $200\,\mathrm N$. For a static friction coefficient of $0.20$, the maximum friction is $40\,\mathrm N$. As the push gradually increases, that threshold is reached first and the box begins to slide. With a coefficient of $0.40$, the sliding threshold rises to $80\,\mathrm N$ and the box reaches the tipping threshold first. The moment equation identifies when the box can tip. Friction determines whether it remains at rest long enough to reach that threshold.

::grafico{f="40/x;40;80" legenda="tipping;friction 0.20;friction 0.40" punti=".8,50,pieno,R;.8,40,pieno,S;.8,80,pieno,T" xmin=.45 xmax=1.1 ymin=30 ymax=96 nomi="h (m),F (N)" titolo="At 0.80 m the tipping threshold lies between the two sliding thresholds"}
:::

:::osservazione{titolo="Tilting the supporting surface"}
For a box on a slope, let $h$ be the perpendicular height of the centre of mass above the plane and $b$ the distance along the plane from its perpendicular projection to the downhill edge. When the plane is tilted by $\theta$, the vertical weight line meets the base further downhill, a distance $h\tan\theta$ from the perpendicular projection. Tipping therefore begins at $h\tan\theta=b$. With $h=0.30\,\mathrm m$ and $b=0.15\,\mathrm m$, this threshold requires $\tan\theta=0.50$. A static friction coefficient below $0.50$ would cause the box to slide first.
:::
