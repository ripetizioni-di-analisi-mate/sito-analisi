---
titolo: "Rigid-body equilibrium"
sommario: "Moments, levers, force couples, beam reactions, centres of gravity, and stability."
---

## Moment of a force

:::definizione{#momento titolo="Force and perpendicular distance"}
A **rigid body** is an object that does not change shape, that is, in which the distance between any two points always stays the same. A door and a spanner are treated as rigid bodies. The rigid body is a *model*, that is, a simplified description of the real object, which deforms slightly under load.

A rigid body rotates as well as moving from place to place, so its equilibrium also involves rotation. A door rotates about its hinges, and the same push opens it more easily when applied far from the hinges, near the handle. The direction of the push matters too. A force pointing along the door toward the hinges produces zero turning effect about them.

The **moment** of a force is the quantity that measures the turning effect of the force about a chosen point, called the reference point and denoted by $O$. Three terms are used to calculate it.

- The *magnitude* $F$ is the strength of the force. It is measured in newtons ($\mathrm N$), the unit of force of the International System (SI), the system of units used in physics.
- The **line of action** is the straight line that passes through the point where the force is applied and has the direction of the force.
- The **moment arm** $b$ is the perpendicular distance from the point $O$ to the line of action. *Perpendicular* means that it makes a right angle, that is, $90^\circ$, with the line of action.

The magnitude of the moment in the plane is $\lvert M_O\rvert=Fb$. The symbol $M_O$ is read "moment about $O$" and the vertical bars indicate the value without its sign. Since a force in newtons is multiplied by a distance in metres (symbol $\mathrm m$), the unit of moment is the newton metre, symbol $\mathrm{N\,m}$. A force of $25\,\mathrm N$ with moment arm $0.3\,\mathrm m$ has moment $25\,\mathrm N\cdot0.3\,\mathrm m=7.5\,\mathrm{N\,m}$.

Many problems give the distance $r$ from $O$ to the point of application of the force and the angle $\theta$ (the Greek letter *theta*) between the segment $r$ and the force. The segment $r$, the moment arm $b$ and a stretch of the line of action form a right-angled triangle. In this triangle $r$ is the hypotenuse, that is, the side facing the right angle, and $b$ is the side facing the angle $\theta$. The **sine** of the angle, written $\sin\theta$, is the ratio of the side facing the angle to the hypotenuse, that is, $\sin\theta=\dfrac br$. Then $b=r\lvert\sin\theta\rvert$, with the bars because the moment arm is a distance. The most common values are $\sin30^\circ=\dfrac12$, $\sin60^\circ=\dfrac{\sqrt3}{2}\approx0.87$ and $\sin90^\circ=1$.

The magnitude is also obtained by multiplying $r$ by the component of the force perpendicular to the segment. This *perpendicular component* equals $F_\perp=F\lvert\sin\theta\rvert$. The other part of the force points along the segment. Its line of action passes through $O$, so it has zero moment arm and zero moment.
:::

:::esempio{titolo="A spanner at an angle to the push"}
A force of $40\,\mathrm N$ acts on a $0.30\,\mathrm m$ spanner at $30^\circ$ to it. The reference point $O$ is the bolt, at one end of the spanner. The force is applied at the other end, so $r=0.30\,\mathrm m$.

The effective component, that is, the one perpendicular to the spanner, is $40\sin30^\circ\,\mathrm N=40\cdot\dfrac12\,\mathrm N=20\,\mathrm N$. Multiplying it by $0.30\,\mathrm m$ gives the moment, which is $6\,\mathrm{N\,m}$.

The moment arm is $b=0.30\,\mathrm m\cdot\dfrac12=0.15\,\mathrm m$. Using the full length as the moment arm would give $40\,\mathrm N\cdot0.30\,\mathrm m=12\,\mathrm{N\,m}$, that is, double the actual result.
:::

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,0 0.75,-1.3;0.75,-1.3 4.73,1" vettori="3,0,4.73,1,F" punti="0,0,pieno,O;3,0,pieno,A" etichette="1.6,0.35,r;0.2,-0.8,b" xmin=-1 xmax=5.4 ymin=-2 ymax=1.8 titolo="The moment arm b is perpendicular to the line of action. OA gives the distance from the bolt to the point of application"}

:::esempio{titolo="Using both components of the force"}
The **pivot** is the fixed point about which a body rotates. Here the pivot is at $O$. Point $A$, where the force is applied, lies $x=0.40\,\mathrm m$ to the right of $O$ and $y=0.30\,\mathrm m$ above it.

An oblique force is split into two components, as in the chapter on vectors. The horizontal component $F_x$ is positive to the right and the vertical component $F_y$ is positive upwards.

- The vertical component $F_y$ has a vertical line of action, at distance $x$ from $O$, so it has moment arm $x$ and tends to turn the body anticlockwise if $F_y>0$. Anticlockwise is opposite to the direction of a clock's hands.
- The horizontal component $F_x$ has a horizontal line of action, at distance $y$ from $O$, so it has moment arm $y$ and tends to turn the body clockwise, that is, like a clock's hands, if $F_x>0$.

Taking anticlockwise as positive,
$$
M_O=xF_y-yF_x.
$$
For $F_x=40\,\mathrm N$ and $F_y=30\,\mathrm N$ the products $0.40\cdot30$ and $0.30\cdot40$ are both $12\,\mathrm{N\,m}$, so the moment is zero. The diagram shows that here the line of action passes through $O$, so the moment arm is zero. This happens because the force has the same slope as the segment $OA$. Indeed $\dfrac{F_y}{F_x}=\dfrac{30}{40}=\dfrac34$ and $\dfrac yx=\dfrac{0.30}{0.40}=\dfrac34$.

If only $F_y$ is halved to $15\,\mathrm N$, the first product is $0.40\,\mathrm m\cdot15\,\mathrm N=6\,\mathrm{N\,m}$ and the second stays $12\,\mathrm{N\,m}$. The moment becomes $6-12=-6\,\mathrm{N\,m}$, so the clockwise tendency prevails.

::grafico{assi=0 uguale=1 linee="0,0 .4,0 .4,.3;0,0 .75,.5625" vettori=".4,.3,.75,.5625,F" punti="0,0,pieno,O;.4,.3,pieno,A" etichette=".2,-.06,0.40 m;.49,.13,0.30 m" xmin=-.12 xmax=.93 ymin=-.14 ymax=.69 titolo="The resultant of the components lies along OA when the force components are in the same ratio as the coordinates"}
:::

## Signs of moments

:::osservazione{#segni titolo="Clockwise and anticlockwise"}
A moment has a sign, which indicates the direction in which the force tends to turn the body. Looking at the plane from a fixed side, anticlockwise may be taken as positive and clockwise is then negative. To assign a sign, one considers which way the single force would turn the body about the chosen point if the other forces were absent. A downward push on the right of a pivot lowers the right-hand side, so it tends to turn the body clockwise and has negative moment. On the left the same push lowers the left-hand side, tends to turn the body anticlockwise and has positive moment.

A **beam** is a long, straight rigid rod. For a beam along the $x$ axis with pivot at the origin, that is, at $x=0$, and vertical forces only, the sign comes from the calculation by writing $M_O=xF_y$ with signed components. The coordinate $x$ of the point of application is positive to the right of the pivot and negative to the left. The component $F_y$ is positive upwards and negative downwards.

If a downward $12\,\mathrm N$ force acts at $x=-0.4\,\mathrm m$, then $F_y=-12\,\mathrm N$ and the product $(-0.4)(-12)$ gives $+4.8\,\mathrm{N\,m}$. A further downward $8\,\mathrm N$ force at $x=+0.3\,\mathrm m$ adds $(+0.3)(-8)=-2.4\,\mathrm{N\,m}$. The total moment is $+4.8-2.4=+2.4\,\mathrm{N\,m}$, positive, so the anticlockwise tendency prevails.
:::

:::esempio{titolo="The same system about two reference points"}
A downward force of $10\,\mathrm N$ acts on a rod at $x=-1\,\mathrm m$, and an upward force of $20\,\mathrm N$ acts at $x=2\,\mathrm m$.

Taking $O$ at $x=0$, the contributions are $(-1)(-10)=10$ and $(2)(20)=40$, in newton metres. They have the same sign because both forces tend to turn the rod anticlockwise about $O$, and the total moment is $50\,\mathrm{N\,m}$.

If the reference point is $O'$ at $x=1\,\mathrm m$, the coordinates of the points of application relative to $O'$ become $-1-1=-2$ and $2-1=1\,\mathrm m$. The contributions become $(-2)(-10)=20$ and $(1)(20)=20\,\mathrm{N\,m}$, with total $40\,\mathrm{N\,m}$.

Moving the reference point $1\,\mathrm m$ to the right has reduced the total moment by $50-40=10\,\mathrm{N\,m}$. The **resultant** is the sum of all the forces. Here the vertical resultant is $-10\,\mathrm N+20\,\mathrm N=10\,\mathrm N$ upwards. The amount subtracted equals the moment of the resultant with respect to that offset, that is, $10\,\mathrm N\cdot1\,\mathrm m=10\,\mathrm{N\,m}$.

::grafico{assi=0 uguale=1 linee="-1.7,0 2.7,0" vettori="-1,0,-1,-.8,10 N;2,0,2,1.6,20 N" punti="0,0,pieno,O;1,0,pieno,O′" etichette="-1,-1.1,x = −1 m;2,-.35,x = 2 m" xmin=-2 xmax=3.2 ymin=-1.4 ymax=2 titolo="Moving the reference point from O to O′ changes both lever arms and the total moment"}
:::

## Equilibrium of a rigid body

::::teorema{#equilibrio-rigido titolo="Forces and moments must sum to zero"}
A body is in **equilibrium** when it stays at rest. A rigid body at rest under forces in a plane stays in equilibrium if the resultant force and the sum of the moments about one point $O$ are both zero. The first condition concerns movement and the second rotation. The conditions are
$$
\sum F_x=0,\qquad \sum F_y=0,\qquad \sum M_O=0.
$$
The symbol $\sum$ is the capital Greek letter *sigma* and is read "sum of". $\sum F_x$ is the sum of the horizontal components of all the forces, $\sum F_y$ the sum of the vertical components and $\sum M_O$ the sum of the moments about $O$, each with its sign.

The choice of $O$ is free. A **reaction** is the force that a support, such as a rest or a pivot, exerts on the body. To simplify the calculations, a point on the line of action of an unknown reaction is often chosen. About that point the reaction has zero moment arm, so it is absent from the moment equation.

:::dimostrazione
It is shown that, when the resultant is zero, the sum of the moments has the same value about any point.

Consider a rod along the $x$ axis with vertical forces. Point $O$ is at the origin and point $O'$ lies a distance $d$ to the right of $O$. A force with component $F_y$ applied at the point with coordinate $x$ has moment $xF_y$ about $O$. Relative to $O'$ its coordinate is $x-d$, so the moment is
$$
(x-d)F_y=xF_y-dF_y.
$$
Moving the reference from $O$ to $O'$ therefore subtracts $dF_y$ from each moment. Adding over all the forces, the subtracted contributions give $d\sum F_y$. This product is the moment of the resultant calculated using the same displacement $d$. Hence
$$
\sum M_{O'}=\sum M_O-d\sum F_y.
$$
When the resultant is zero, this change is zero. Thus a zero total moment about $O$ is also zero about $O'$.

For forces in any direction the reasoning is the same, with the vector $\overrightarrow{OO'}$, the arrow from $O$ to $O'$, in place of $d$. From each moment one subtracts the contribution due to this vector and that single force.
:::
::::

:::attenzione
Two opposite forces with distinct lines of action have a zero resultant but a nonzero moment. For example, two forces of $10\,\mathrm N$, one upward and one downward, applied $0.5\,\mathrm m$ apart, have resultant $10\,\mathrm N-10\,\mathrm N=0$. About the point of application of the first, the moment has magnitude $10\,\mathrm N\cdot0.5\,\mathrm m=5\,\mathrm{N\,m}$.

A single force whose line passes through the pivot has zero moment about that pivot but a nonzero resultant. Each balance tests a distinct aspect of equilibrium.
:::

:::osservazione{titolo="Reading the two balance conditions separately"}
The table compares the resultant and the total moment about $O$. The two cases with opposite forces assume equal magnitudes. In each case all the **external forces** count, that is, the forces exerted on the body by other objects, reactions included.

| Force system | Resultant | Moment about $O$ |
| --- | --- | --- |
| Two opposite forces on one line | Zero | Zero |
| One force through $O$ | Nonzero | Zero |
| Two opposite forces on distinct lines | Zero | Nonzero |
| One force with a nonzero lever arm | Nonzero | Nonzero |

A reaction can cancel the resultant of a load and leave a moment if the lines of action are distinct, as in the third case of the table.

A **particle** is a body so small that it is treated as a point, so all the forces act at that point and rotation is excluded. When all forces are vertical, checking their sum is enough for a particle. Rigid-body equilibrium also requires the total moment to be zero.

If the diagram shows one horizontal force and the others are vertical, $\sum F_x$ has a single term and is not zero. Horizontal balance then requires another force with an opposite component, usually the reaction of a pivot. The moment equation alone does not determine that component, for example when it acts along the beam, because it then has zero moment arm. Its value follows from $\sum F_x=0$.
:::

:::esempio{titolo="A hinge and a cable with reactions along both axes"}
A **hinge** is a pivot fixed to the wall, which holds one point of the rod in place and lets it rotate, so its reaction generally has a horizontal and a vertical component. The **tension** is the force, along the cable, with which a taut cable pulls the object it is tied to.

A horizontal rod of negligible weight, $1.20\,\mathrm m$ long, is hinged to a wall at A. A $96\,\mathrm N$ load acts halfway along it, $0.60\,\mathrm m$ from A. A cable joins the free end B to a point on the wall which in the diagram is $0.90\,\mathrm m$ above A.

The rod, the wall and the cable form a right-angled triangle whose shorter sides are $1.20\,\mathrm m$ and $0.90\,\mathrm m$. By Pythagoras' theorem the cable, the hypotenuse, is
$$
\sqrt{1.20^2+0.90^2}\,\mathrm m=\sqrt{2.25}\,\mathrm m=1.50\,\mathrm m.
$$
The tension points from B towards the wall and upwards. Its components are to $T$ as the shorter sides are to the hypotenuse. Since $\dfrac{1.20}{1.50}=\dfrac45$ and $\dfrac{0.90}{1.50}=\dfrac35$, if the tension has magnitude $T$, its horizontal component is $-\dfrac45T$ and its vertical component is $\dfrac35T$. The minus sign means leftwards, towards the wall.

Taking moments about A removes the hinge reaction because it passes through A. The horizontal component of the tension also has zero moment arm, because it acts along the rod and passes through A. What remains is the anticlockwise moment of the vertical component of the tension, with arm $1.20\,\mathrm m$, and the clockwise moment of the load, with arm $0.60\,\mathrm m$. At equilibrium the two moments have the same magnitude.
$$
\dfrac35T\cdot1.20=96\cdot0.60
\qquad\Longrightarrow\qquad T=80\,\mathrm N.
$$
The left-hand side equals $0.72\,T$ and the right-hand side equals $57.6\,\mathrm{N\,m}$, so $T=\dfrac{57.6}{0.72}\,\mathrm N=80\,\mathrm N$.

The components of the tension are $-\dfrac45\cdot80=-64\,\mathrm N$ and $+\dfrac35\cdot80=+48\,\mathrm N$. The hinge reaction cancels the sums of the horizontal and vertical forces, so the balances give a reaction of $64\,\mathrm N$ to the right and $96-48=48\,\mathrm N$ upwards. The hinge and cable each support half the load vertically. The horizontal components cancel, that is, add to zero, because the cable pulls towards the wall and the hinge pushes away from it.

::grafico{assi=0 uguale=1 linee="0,-.21 0,1.03;0,0 1.2,0;0,.90 1.2,0" punti="0,0,pieno,A;1.2,0,pieno,B" vettori=".6,0,.6,-.42,96 N;1.2,0,.78,.315,T" etichette=".6,.12,0.60 m;1.13,-.13,1.20 m" xmin=-.24 xmax=1.43 ymin=-.5 ymax=1.12 titolo="The vertical component of T balances the moment of the load about hinge A"}
:::

## Levers

:::teorema{#leve titolo="Equal and opposite moments"}
A **lever** is a rigid rod that rotates about a pivot, called the **fulcrum**. A seesaw and a pair of scissors are levers. The lever is *ideal* when its weight is neglected and the pivot is frictionless.

In an ideal lever with a frictionless pivot, two forces tending to produce opposite rotations balance about the pivot if $F_1b_1=F_2b_2$, provided all other moments vanish or are already balanced. Here $b_1$ and $b_2$ are the moment arms of the two forces about the pivot. The two moments then have equal magnitude and opposite directions, so they sum to zero.

The **load force** is the one to be overcome, such as the weight of a load. The **effort force** is the one applied to balance it. The ratio of load force to effort force is the inverse ratio of their moment arms. If $F_1$ is the load force and $F_2$ the effort force, dividing both sides of $F_1b_1=F_2b_2$ by $F_2b_1$ gives
$$
\frac{F_1}{F_2}=\frac{b_2}{b_1}.
$$
This ratio is the **mechanical advantage** of the lever. If the moment arm of the effort force is twice that of the load force, the mechanical advantage is $2$ and the effort force is half the load force.

The pivot reaction is found separately, from the force balance.
:::

:::esempio{titolo="Equilibrium with a pivot supporting both forces"}
A $45\,\mathrm N$ downward force acts $0.2\,\mathrm m$ left of the pivot. At $0.6\,\mathrm m$ to the right, a downward force of $15\,\mathrm N$ acts. The first force tends to turn the lever anticlockwise and the second clockwise. Since $45\cdot0.2=9$ and $15\cdot0.6=9$, their moments are $+9$ and $-9\,\mathrm{N\,m}$, with zero sum. The two downward forces add to $60\,\mathrm N$, so the pivot supplies $60\,\mathrm N$ upward to cancel the vertical sum. Its line of action passes through the pivot, so it has zero moment arm and does not change the moment equation just used.
:::

::grafico{assi=0 uguale=1 linee="-1.8,0 3.8,0;-0.32,-0.55 0,0 0.32,-0.55 -0.32,-0.55" vettori="-1,0,-1,-1.8,45 N;3,0,3,-0.6,15 N;0,0,0,2.4,60 N" etichette="-0.5,0.45,0.2 m;1.65,0.45,0.6 m" xmin=-2.5 xmax=4.4 ymin=-2.3 ymax=3 titolo="Lever with opposite moments and an upward pivot reaction"}

:::esempio{titolo="Opposing forces on the same side of the pivot"}
A $60\,\mathrm N$ load acts downwards $0.30\,\mathrm m$ to the right of the pivot. A hand lifts the rod $0.90\,\mathrm m$ from the pivot on the same side, with an upward force $F$. Both points of application are right of the pivot and the forces act in opposite directions. The load lowers the right-hand side and has a clockwise, hence negative, moment. The hand raises the right-hand side, so its force has a positive moment.
$$
0.90F-0.30\cdot60=0,\qquad F=20\,\mathrm N.
$$
The calculation is $0.90\,F=18\,\mathrm{N\,m}$, so $F=\dfrac{18}{0.90}\,\mathrm N=20\,\mathrm N$.

In the vertical balance the hand lifts with $20\,\mathrm N$ and the load pushes down with $60\,\mathrm N$, so the pivot supplies the remaining $60\,\mathrm N-20\,\mathrm N=40\,\mathrm N$ upwards. The directions of the forces on that side give the moments opposite signs.

::grafico{assi=0 uguale=1 linee="-.26,0 1.05,0;-.06,-.1 0,0 .06,-.1 -.06,-.1" vettori=".3,0,.3,-.3,60 N;.9,0,.9,.1,20 N;0,0,0,.2,40 N" etichette=".3,.07,0.30 m;.85,-.09,0.90 m" xmin=-.35 xmax=1.2 ymin=-.39 ymax=.32 titolo="The load and the hand are on the same side of the pivot. Their vertical forces act in opposite directions."}
:::

## Force couples

::::teorema{#coppie titolo="Zero resultant and nonzero moment"}
A **force couple** consists of two parallel forces with common magnitude $F$, opposite directions, and distinct lines of action. Two hands turning a steering wheel, one pushing up and the other pushing down, exert a couple. Its resultant is zero, because the forces have equal magnitude and opposite directions. Its moment has magnitude $Fd$, where $d$ is the perpendicular distance between the lines.

:::dimostrazione
To calculate the moment, choose a reference point on the line of action of one force. That force has zero moment arm, so its moment is zero. The other has moment arm $d$, so the total moment has magnitude $Fd$.

By the proof given for rigid-body equilibrium, changing the reference point subtracts the moment of the resultant from the total moment. The couple's zero resultant therefore makes the result independent of the reference point.
:::
::::

::grafico{assi=0 uguale=1 linee="-2,-2 -2,2;2,-2 2,2" vettori="-2,0,-2,1.6,F;2,0,2,-1.6,F" etichette="0,0.2,d" xmin=-3 xmax=3 ymin=-2.4 ymax=2.4 titolo="Opposite vertical forces separated by d. Both tend to produce clockwise rotation about the central point"}

:::esempio{titolo="Adding couples in opposite directions"}
The first couple consists of vertical forces of magnitude $35\,\mathrm N$ separated by $0.40\,\mathrm m$. The force on the left is downward and the one on the right is upward, so the moment is anticlockwise and equals $+35\cdot0.40=+14\,\mathrm{N\,m}$. A second couple of $20\,\mathrm N$ forces separated by $0.30\,\mathrm m$ tends to turn the body clockwise. Its contribution is $-20\cdot0.30=-6\,\mathrm{N\,m}$. Each couple has zero resultant, so together they give a zero resultant and a moment of $+14-6=+8\,\mathrm{N\,m}$. A third couple of $8\,\mathrm{N\,m}$ clockwise would cancel the total moment.

::grafico{assi=0 uguale=1 linee="0,0 .4,0;.7,0 1,0" vettori="0,0,0,-.28,35 N;.4,0,.4,.28,35 N;.7,0,.7,.16,20 N;1,0,1,-.16,20 N" etichette=".2,.07,0.40 m;.85,-.08,0.30 m" xmin=-.13 xmax=1.14 ymin=-.37 ymax=.36 titolo="Anticlockwise couple on the left and clockwise couple on the right. The moments are added with their signs."}
:::

## Beams with two supports

:::osservazione{#travi titolo="Finding the support reactions"}
A **support** is a rest on which the beam is placed and which pushes it upwards with a vertical reaction. The reactions of two supports A and B are denoted by $R_A$ and $R_B$.

For a horizontal beam of length $L$ between two supports, a single weight $P$ at distance $a$ from A gives reaction $R_B=\dfrac{Pa}{L}$ at the other support if the beam's weight is negligible. The formula follows from moments about A, which eliminate $R_A$, because $R_A$ acts at A and has zero moment arm. The weight $P$ has arm $a$ and a clockwise moment, the reaction $R_B$ has arm $L$ and an anticlockwise moment. The sum of the moments is zero, so
$$
R_BL-Pa=0,\qquad R_B=\frac{Pa}{L}.
$$
Vertical balance $R_A+R_B-P=0$ then gives $R_A=P-R_B$.

For $L=4\,\mathrm m$, $a=1\,\mathrm m$, and $P=100\,\mathrm N$, we find
$$
R_B=\frac{100\,\mathrm N\cdot1\,\mathrm m}{4\,\mathrm m}=25\,\mathrm N,\qquad
R_A=100\,\mathrm N-25\,\mathrm N=75\,\mathrm N.
$$
If the beam has its own weight, it is added as a vertical force at its **centre of gravity**, the point where the weight of a body is considered to act. A beam is **uniform** when it is made of one material and has the same thickness all along. Its centre of gravity is then at the midpoint. A uniform beam weighing $40\,\mathrm N$ adds $20\,\mathrm N$ to each reaction, because its weight acts at the midpoint. The reactions become $R_B=45\,\mathrm N$ and $R_A=95\,\mathrm N$.

The same result is checked with moments about B, which give $R_A\cdot4=100\cdot3+40\cdot2=380$, in newton metres, so $R_A=95\,\mathrm N$.
:::

:::esempio{titolo="Loss of contact with a load beyond a support"}
A load is **overhanging** when it acts on a stretch of the beam beyond a support. A **simple support** only pushes upwards, because the beam rests on it without being fastened.

Supports A and B are $3\,\mathrm m$ apart. A beam of negligible weight extends to the right of B. A $90\,\mathrm N$ load is $4\,\mathrm m$ from A, hence $1\,\mathrm m$ beyond B. Taking moments about A requires $3R_B=90\cdot4$, so $R_B=\dfrac{360}{3}\,\mathrm N=120\,\mathrm N$. Vertical balance would give $R_A=90-120=-30\,\mathrm N$. A would need a downward force, which a simple support does not exert, so the beam lifts off A and rotates about B.

A **counterweight** is a weight added to balance another one. With a $60\,\mathrm N$ counterweight $0.50\,\mathrm m$ from A, the moments about A gain the term $60\cdot0.50$ and the total weight becomes $90\,\mathrm N+60\,\mathrm N=150\,\mathrm N$. Then
$$
R_B=\frac{90\cdot4+60\cdot0.50}{3}\,\mathrm N=130\,\mathrm N,\qquad
R_A=150\,\mathrm N-130\,\mathrm N=20\,\mathrm N.
$$
Both reactions now point upwards, so the supports can supply them.

An independent check takes moments about B, relative to which $R_A$ is $3\,\mathrm m$ to the left, the load $1\,\mathrm m$ to the right and the counterweight $2.50\,\mathrm m$ to the left. The sum is $-20\cdot3-90\cdot1+60\cdot2.50=-60-90+150=0$, in newton metres.

::grafico{assi=0 uguale=1 linee="-.25,0 4.32,0;-.16,-.28 0,0 .16,-.28 -.16,-.28;2.84,-.28 3,0 3.16,-.28 2.84,-.28" vettori=".5,0,.5,-.56,60 N;4,0,4,-.84,90 N" punti="0,0,pieno,A;3,0,pieno,B" etichette=".62,.24,0.50 m;2.75,.24,3 m;4.05,.24,4 m" xmin=-.55 xmax=4.7 ymin=-1.07 ymax=.55 titolo="With the 60 N counterweight in place, the load beyond B can be carried by both supports"}
:::

## Centre of gravity

:::definizione{#baricentro titolo="Position of the resultant weight"}
Every part of a body has its own weight. The **centre of gravity** $G$ is the point where the total weight is applied to obtain the same moment as all the weights of the parts.

The weight of a mass $m$ is $P=mg$. Mass is measured in kilograms, symbol $\mathrm{kg}$. The letter $g$ is the weight of each kilogram and at the Earth's surface is about $9.8\,\mathrm{N/kg}$. The gravitational field is *uniform* when $g$ is the same at every point of the body. The **centre of mass** is the point whose position is the mean of the positions of the masses, each position counting in proportion to its mass. In a uniform field the centre of gravity coincides with the centre of mass.

A mass of $1\,\mathrm{kg}$ is fixed at $x=0$ and one of $3\,\mathrm{kg}$ at $x=4\,\mathrm m$. The coordinate of the centre of gravity is found by multiplying each mass by its position, adding the products and dividing by the total mass.
$$
x_G=\frac{1\,\mathrm{kg}\cdot0\,\mathrm m+3\,\mathrm{kg}\cdot4\,\mathrm m}{1\,\mathrm{kg}+3\,\mathrm{kg}}=\frac{12\,\mathrm{kg\,m}}{4\,\mathrm{kg}}=3\,\mathrm m.
$$
The centre of gravity is closer to the larger mass.

With letters, the masses are numbered $m_1,m_2,\dots$ and their positions $x_1,x_2,\dots$ The symbol $m_i$ denotes any one of these masses and $x_i$ its position. For masses $m_i$ fixed along a line at positions $x_i$, the coordinate of the centre of gravity is $x_G=\dfrac{\sum m_i x_i}{\sum m_i}$. A mean calculated in this way is called a **weighted mean**.

The formula follows by requiring the total weight at $x_G$ to have the same moment as the sum of the individual weights. For two masses, with moments taken about the origin,
$$
(m_1+m_2)\,g\,x_G=m_1g\,x_1+m_2g\,x_2.
$$
The factor $g$ cancels, because it multiplies every term. Dividing by $m_1+m_2$ gives the formula.

The midpoint is the centre of gravity of a uniform rod of constant cross-section, that is, with the same thickness at every point, by symmetry. Indeed every stretch to the left of the midpoint is matched by an equal stretch to the right. Adding a mass to the right of the original centre of gravity shifts the weighted mean to the right. The new position lies between the old position and that of the added mass.
:::

:::esempio{titolo="Restoring the centre of mass to the midpoint"}
A uniform rod of mass $3\,\mathrm{kg}$ extends from $x=0$ to $x=2\,\mathrm m$. Its centre of gravity is at the midpoint, $1\,\mathrm m$. In the calculation the rod therefore counts as $3\,\mathrm{kg}$ at $x=1\,\mathrm m$. Adding $1\,\mathrm{kg}$ at the right-hand end, at $x=2\,\mathrm m$, gives
$$
x_G=\frac{3\cdot1+1\cdot2}{3+1}\,\mathrm m=1.25\,\mathrm m.
$$
The shift is $1.25\,\mathrm m-1\,\mathrm m=0.25\,\mathrm m=25\,\mathrm{cm}$ (centimetres), towards the added mass.

To bring the centre of gravity back to $x=1\,\mathrm m$, a mass can be added at $x=0$. About the midpoint, the rod's weight has zero moment arm and the two added weights have equal arms of $1\,\mathrm m$ on opposite sides. Their moments are opposite and cancel if the two weights are equal. Balance therefore requires another $1\,\mathrm{kg}$. The same result follows by setting the weighted mean equal to its initial value. Indeed $\dfrac{1\cdot0+3\cdot1+1\cdot2}{1+3+1}\,\mathrm m=\dfrac55\,\mathrm m=1\,\mathrm m$.

In the diagram $P_a$ is the weight of the rod, applied at the midpoint $C$, and $P_m$ is the weight of the mass added at $B$.

::grafico{assi=0 uguale=1 linee="-.12,0 2.12,0" vettori="1,0,1,-.45,P_a;2,0,2,-.15" punti="0,0,pieno,O;1,0,pieno,C;1.25,0,pieno,G;2,0,pieno,B" etichette=".94,.24,1 m;1.35,-.26,1.25 m;2,.22,2 m;2.07,-.19,P_m" xmin=-.25 xmax=2.43 ymin=-.6 ymax=.42 titolo="Before adding the counterweight, G lies between C, the midpoint of the rod, and the added mass at B"}
:::

## Stability and tipping

:::teorema{#stabilita titolo="The vertical through the centre of gravity"}
The **support base** is the part of the surface bounded by the points where a body touches it. For a box it is the bottom face. The *vertical through the centre of gravity* is the vertical line through that point, that is, the line of action of the weight.

With only the weight and the reactions of a horizontal support, equilibrium requires the vertical through the centre of gravity to meet the support base. When it reaches the edge, the system is at its **threshold**, the limiting case between equilibrium and tipping. When it lies beyond the edge, the weight has a moment that tends to tip the body over the edge, that is, the edge of the base about which the body rotates.

A horizontal push $F$ at height $h$ has moment $Fh$ about the edge towards which the body tends to rotate. The arm is $h$ because the push is horizontal and its line passes at height $h$ above the edge, which lies on the surface. If the weight is $P$ and its line of action is at distance $b$ from that edge, the weight has moment $Pb$ in the opposite direction, which keeps the body on its base. At the threshold $Fh=Pb$.

Friction must also be enough to prevent sliding before that threshold. **Static friction** is the force with which the surface opposes the sliding of a body at rest. Its maximum value is the product of the coefficient of static friction and the vertical reaction of the surface, as in the chapter on forces.
:::

:::esempio{titolo="Comparing sliding and tipping"}
A box weighing $200\,\mathrm N$ rests on a horizontal surface. The vertical through its centre of gravity is $0.20\,\mathrm m$ from the tipping edge. A horizontal push applied $0.80\,\mathrm m$ above the surface reaches the rotational threshold, given by $Fh=Pb$, at
$$
F_{\mathrm{rib}}=\frac{200\cdot0.20}{0.80}\,\mathrm N=50\,\mathrm N.
$$
The subscript "rib" abbreviates the Italian *ribaltamento*, tipping.

Before movement the vertical reaction is $200\,\mathrm N$, because it balances the weight. With a static friction coefficient of $0.20$ the maximum friction is $0.20\cdot200\,\mathrm N=40\,\mathrm N$. As the push slowly increases, it reaches $40\,\mathrm N$ before $50\,\mathrm N$, so the box begins to slide. With a coefficient of $0.40$, the sliding threshold rises to $0.40\cdot200\,\mathrm N=80\,\mathrm N$. Since $50\,\mathrm N$ is less than $80\,\mathrm N$, the tipping threshold is reached first and the box tips over. The moment equation identifies the possible rotation, while friction determines whether the box stays at rest long enough to reach it.

In the graph the curve $F=\dfrac{40}{h}$ is the tipping push as the height $h$ varies, and the two horizontal lines are the sliding thresholds.

::grafico{f="40/x;40;80" legenda="tipping;friction 0.20;friction 0.40" punti=".8,50,pieno,R;.8,40,pieno,S;.8,80,pieno,T" xmin=.45 xmax=1.1 ymin=30 ymax=96 nomi="h (m),F (N)" titolo="At 0.80 m the tipping threshold lies between the two sliding thresholds"}
:::

:::osservazione{titolo="Tilting the supporting surface"}
A slope is a plane at an angle $\theta$ to the horizontal. The *downhill* side is the lower one. For a box on a slope, $h$ is measured perpendicular to the base, from the plane to the centre of gravity, and $b$ along the plane, from the perpendicular projection of the centre of gravity to the downhill edge. The **perpendicular projection** of the centre of gravity is the point of the base reached by moving from it at a right angle to the plane.

The weight stays vertical, so when the plane is tilted by $\theta$ the vertical through the centre of gravity meets the base further downhill than the projection. The centre of gravity, its projection and the point where the vertical meets the base form a right-angled triangle. One of the shorter sides is $h$. The angle at the centre of gravity, between the perpendicular to the plane and the vertical, equals $\theta$. The **tangent** of an angle, written $\tan\theta$, is the ratio of the side facing the angle to the other shorter side. The side facing $\theta$, that is, the distance between the projection and the point where the vertical meets the base, therefore has length $h\tan\theta$.

The body is at its threshold when this distance equals $b$, because the vertical then reaches the edge, so the tipping threshold is $h\tan\theta=b$. With $h=0.30\,\mathrm m$ and $b=0.15\,\mathrm m$ it requires
$$
\tan\theta=\frac{b}{h}=\frac{0.15}{0.30}=0.50,
$$
which corresponds to an angle of about $27^\circ$.

On a slope, sliding begins when $\tan\theta$ reaches the coefficient of static friction, because $\tan\theta$ is the ratio of the part of the weight parallel to the plane to the part perpendicular to it. A static friction coefficient below $0.50$ would cause the box to slide first.
:::
