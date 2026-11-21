---
titolo: "Reference frames and Galilean relativity"
sommario: "Relative positions, velocities and accelerations. Pursuits, navigating a current, and force balances in an accelerating carriage."
---

## Relative position

:::definizione{#posizioni-relative titolo="Two observers of the same motion"}
A **reference frame** is made of a point chosen as origin, one or more oriented axes (lines on which a positive direction and a unit of measurement are fixed) and a clock that records the instant of every event. The **coordinate** of a point is its position read on the axis: positive on the side of the positive direction, negative on the other side. Whoever uses a given frame to describe a motion is called an observer.

The same motion can be described from two different frames. The station is chosen as frame $S$ and the train as frame $S'$ (the prime $'$, read "prime", marks quantities measured in the train). From inside the carriage, the position of a point $P$ is measured from the door, chosen as origin $O'$. From the station, the same point is measured from a fixed marker $O$. A seated passenger two metres from $O'$ has a constant coordinate in $S'$. As the train moves forward, the passenger's coordinate in $S$ increases along with the door's coordinate.

The axes are chosen parallel and pointing in the same direction (*concordant* axes). The following names are used:
- $X(t)$ is the coordinate of $O'$ in $S$ at time $t$;
- $x'(t)$ is the coordinate of $P$ in $S'$;
- $x$ is the coordinate of $P$ in $S$.

To get from $O$ to $P$ one can go from $O$ to $O'$, then from $O'$ to $P$. Therefore, if the two measurements refer to the same instant, the lengths of the two segments add with their signs:
$$
x=X(t)+x', \qquad x'=x-X(t).
$$
The second equation follows from the first by subtracting $X(t)$ from both sides. For $X=15\,\mathrm m$ and $x'=2\,\mathrm m$, the result is $x=15+2=17\,\mathrm m$. A point with $x'=-2\,\mathrm m$ instead lies two metres behind the door, at the coordinate $x=15-2=13\,\mathrm m$. The sign of $x'$ therefore shows which side of the moving origin the point lies on.

In the position-time graph the two lines are the door and the passenger. At the same instant $t=3\,\mathrm s$ the door is at $15\,\mathrm m$ and the passenger at $17\,\mathrm m$, so the vertical segment between the two lines measures $x'=2\,\mathrm m$.
:::

::grafico{f="5*x;5*x+2" xmin=0 xmax=4 ymin=0 ymax=23 nomi="t (s),x (m)" punti="3,15,pieno;3,17,pieno" segmenti="3,15,3,17" etichette="2.78,14.25,O′;3.11,18.15,P" legenda="\text{moving origin};\text{passenger}" titolo="The vertical gap at the same time gives the passenger's coordinate in the carriage"}

:::esempio{#origine-e-orologio titolo="Origins separated at the initial instant"}
The **position equation** of a body is the formula that gives its coordinate as a function of time. If the moving origin travels along $x$ at constant velocity $u$, its position equation is
$$
X(t)=X_0+ut,
$$
where $X_0$ is the position of $O'$ at the instant chosen as zero ($X_0$ is the **intercept** of the line on the position-time graph, that is, its value at $t=0$). In classical physics, the physics of Galileo and Newton, the clocks of the two frames run at the same rate; if they start at the same instant, they show the same time, $t'=t$. Along the axes on which the moving origin does not move, the coordinates in the two frames agree if the two origins have the same initial value on those axes.

If the two clocks initially show different readings, with a difference $\tau$ (a Greek letter read "tau"), then $t'=t+\tau$. The duration $\Delta t$ of an interval is the same for both clocks, because the difference $\tau$ cancels when two readings are subtracted. A position equation takes the reading of the clock used to give its intercept and velocity. For example, with $t'=t+2\,\mathrm s$ and an equation written with the station time $t$, the reading $t'=7\,\mathrm s$ corresponds to $t=7-2=5\,\mathrm s$, and $5\,\mathrm s$ is the value to substitute.

The door starts at $X_0=9\,\mathrm m$ and travels at $u=3\,\mathrm{m/s}$. A fixed marker lies at $30\,\mathrm m$. After $4\,\mathrm s$ the door is at $9+3\cdot4=21\,\mathrm m$, so the passenger measures for the marker
$$
x'=30-21=9\,\mathrm m.
$$
The marker passes through the origin $O'$ when the door reaches its coordinate, that is, when $30=9+3t$. From $3t=30-9=21$ it follows that $t=7\,\mathrm s$. Before that instant the marker lies ahead of the door. After the passage its relative coordinate is negative, even though its station coordinate is still $30\,\mathrm m$. On the graph the passage is the point $I$ where the door's line meets the horizontal line of the marker.
:::

::grafico{f="9+3*x;30" xmin=0 xmax=9 ymin=0 ymax=39 nomi="t (s),x (m)" punti="7,30,pieno,I" legenda="\text{door};\text{marker}" titolo="Equal coordinates identify when the marker passes the door"}

:::esempio{#dati-due-riferimenti titolo="Two positions measured at the same instant"}
A camera fixed to the ground measures the position $X$ of the door and the position $x$ of a service trolley. The two motions are uniform, that is, at constant velocity. Each row uses two coordinates from the same camera frame to find the relative coordinate $x'=x-X$.

| $t$ (s) | $X$ (m) | $x$ (m) | $x'$ (m) |
| ---: | ---: | ---: | ---: |
| 0 | 8 | 14 | 6 |
| 2 | 12 | 12 | 0 |
| 4 | 16 | 10 | −6 |

The door moves $4\,\mathrm m$ forward every $2\,\mathrm s$ and the trolley moves $2\,\mathrm m$ backwards. The relative coordinate therefore decreases by $4+2=6\,\mathrm m$ in the same interval. The velocity of the trolley in the train is therefore
$$
v'=\frac{-6\,\mathrm m}{2\,\mathrm s}=-3\,\mathrm{m/s}.
$$
In the row $t=2\,\mathrm s$ the two ground coordinates agree ($12\,\mathrm m$) and $x'=0$, so at that instant the trolley passes the door.
:::

## Addition of velocities

:::teorema{#velocita-relative titolo="Galilean velocity addition"}
A frame **translates** when it moves without rotating, that is, with its axes staying parallel to themselves. When $S'$ translates at constant velocity $\vec u$ relative to $S$ and the axes are parallel and point the same way, the velocity of $P$ in $S$ is the sum of its velocity $\vec v'$ in $S'$ and the velocity $\vec u$ of $S'$:
$$
\vec v=\vec v'+\vec u.
$$
The arrow above the letter marks a **vector**, that is, a quantity with a magnitude (size), a direction and a sense.

The relation also holds for the **average velocity**, which is the displacement divided by the time taken. Start from the coordinates at two instants $t_1$ and $t_2$:
$$
x_1=X_1+x'_1,\qquad x_2=X_2+x'_2.
$$
Subtracting the first equation from the second gives $\Delta x=\Delta X+\Delta x'$, where $\Delta$ (read "delta") denotes the difference between final and initial value. Since the translation is uniform, $\Delta X=u\Delta t$. Dividing everything by $\Delta t$ gives
$$
\frac{\Delta x}{\Delta t}=u+\frac{\Delta x'}{\Delta t},
$$
that is, the average velocity in $S$ equals $u$ plus the average velocity in $S'$. For the instantaneous velocity, take a progressively shorter interval around the measurement time. The same reasoning applies to the other components (the **component** of a vector along an axis is its projection onto that axis, with sign).

If the origin accelerates with the axis directions fixed, the previous calculation still holds: add the average velocity of the origin over the same interval to the relative average velocity. The instantaneous relation uses the velocity $\vec u(t)$ of the origin at the same instant at which $\vec v'(t)$ is measured. Velocity addition therefore keeps the same form even when the origin accelerates; a correction is needed only for accelerations.

This is a **vector sum**. In a problem on a straight line, one positive direction is chosen once and for all and the signed components are added. A passenger walks towards the front at $1.5\,\mathrm{m/s}$ on a train travelling at $12\,\mathrm{m/s}$. With the train's direction positive, the station measures $12+1.5=13.5\,\mathrm{m/s}$. If the passenger walks towards the rear, $v'=-1.5\,\mathrm{m/s}$, so $v=12-1.5=10.5\,\mathrm{m/s}$. Both ground velocities are positive, so in both cases the ground observer sees the passenger move in the train's direction. The slope of a position-time line is the displacement divided by the time, that is, the velocity; therefore on the graph the three lines have slopes $12$, $13.5$ and $10.5$.

Velocities given in kilometres per hour are converted to metres per second by dividing by $3.6$, because
$$
1\,\mathrm{km/h}=\frac{1000\,\mathrm m}{3600\,\mathrm s}=\frac{1}{3.6}\,\mathrm{m/s};
$$
for example $54\,\mathrm{km/h}=\dfrac{54}{3.6}\,\mathrm{m/s}=15\,\mathrm{m/s}$. Velocities are added after all of them have been expressed in the same unit.
:::

::grafico{f="12*x;13.5*x;10.5*x" xmin=0 xmax=4 ymin=0 ymax=57 nomi="t (s),x (m)" legenda="\text{train};\text{towards the front};\text{towards the rear}" titolo="The slopes show the three velocities measured at the station"}

:::osservazione{#catena-riferimenti titolo="Subscripts and the inverse transformation"}
In the notation $\vec v_{P/S}$, read "velocity of $P$ relative to $S$", the subscript before the slash identifies the body and the one after the slash identifies the frame. With this notation the velocity law becomes a chain in which the intermediate frame $S'$ appears once after the slash and once before it:
$$
\vec v_{P/S}=\vec v_{P/S'}+\vec v_{S'/S}.
$$
To invert the relation, that is, to find the velocity in the carriage, subtract the carriage velocity: $\vec v_{P/S'}=\vec v_{P/S}-\vec v_{S'/S}$. If the ground measures $10.5\,\mathrm{m/s}$ and the train travels at $12\,\mathrm{m/s}$, the relative velocity is $10.5-12=-1.5\,\mathrm{m/s}$. Once the positive direction is fixed, the minus sign shows that the passenger walks towards the rear. If the order of the two frames is swapped, the velocity changes sign, that is, $\vec v_{S/S'}=-\vec v_{S'/S}$. For example, if the train moves at $+12\,\mathrm{m/s}$ relative to the station, the station moves at $-12\,\mathrm{m/s}$ relative to the train.

The chain gets longer when there are more than two frames. A rover measures a drone's velocity as $(1,2)\,\mathrm{m/s}$; the two numbers in brackets are the components along $x$ and along $y$. The rover is on a moving deck and travels relative to the deck at $(2,-1)\,\mathrm{m/s}$. The deck translates relative to the ground at $(-1,1)\,\mathrm{m/s}$. With parallel axes pointing the same way, the components are added axis by axis:
$$
\vec v_{\text{drone/ground}}=(1+2-1,\;2-1+1)\,\mathrm{m/s}=(2,2)\,\mathrm{m/s}.
$$

Galilean addition uses the same time in both frames. This assumption holds to an excellent approximation for trains, boats and laboratory objects, whose speeds are far below the speed of light ($3\cdot10^8\,\mathrm{m/s}$).
:::

## Meetings and pursuits

:::teorema{#incontri titolo="Closing velocity"}
Two bodies $A$ and $B$ move along the same axis. The two bodies meet when they have the same coordinate at the same instant:
$$
x_A(t)=x_B(t).
$$
For uniform motion, with $A$ starting at the origin and $B$ starting a distance $d$ ahead of $A$, the position equations are $x_A=v_At$ and $x_B=d+v_Bt$. The **signed separation** is the difference of the coordinates:
$$
x_B(t)-x_A(t)=d+(v_B-v_A)t.
$$
If $d>0$ and $v_A>v_B$, the separation decreases by $v_A-v_B$ every second; the difference $v_A-v_B$ is called the **closing velocity**. Setting the separation equal to zero gives $(v_A-v_B)t=d$, so
$$
t=\frac{d}{v_A-v_B}.
$$
The result is a time, since a distance is divided by a velocity. With $d=60\,\mathrm m$, $v_A=8\,\mathrm{m/s}$ and $v_B=5\,\mathrm{m/s}$ the separation drops by $8-5=3\,\mathrm m$ each second. Therefore it takes $\dfrac{60}{3}=20\,\mathrm s$. Substituting into the two position equations gives $x_A=8\cdot20=160\,\mathrm m$ and $x_B=60+5\cdot20=160\,\mathrm m$; on the graph this is the point $I$ where the two lines cross.

The same formula covers other cases.
- On the axis pointing from $A$ towards $B$, if the bodies move towards each other, then $v_A>0$ and $v_B<0$. In this case $v_A-v_B=\lvert v_A\rvert+\lvert v_B\rvert$, where $\lvert v\rvert$ is the absolute value, that is, the number without its sign. For example, at $4\,\mathrm{m/s}$ and $3\,\mathrm{m/s}$ in opposite directions the separation drops by $7\,\mathrm m$ each second.
- If $v_A=v_B$ and the initial separation is positive, the separation stays constant and the meeting does not happen.
- If the solution of the equation has $t<0$, the intersection of the lines lies before the chosen initial instant, so the meeting does not happen in the interval under study. Each position equation describes the actual motion only in the time interval in which the velocities are the given ones, so the solution is compared with that interval.
:::

::grafico{f="8*x;60+5*x" xmin=0 xmax=24 ymin=0 ymax=200 nomi="t (s),x (m)" punti="20,160,pieno,I" legenda="\text{A};\text{B}" titolo="The lines meet at 20 s and 160 m"}

:::esempio{#partenze-differite titolo="Model after a delayed start"}
Body $B$ starts at time $t=0$ from $8\,\mathrm m$ and travels at $2\,\mathrm{m/s}$. $A$ leaves the origin only at $t=3\,\mathrm s$, then travels at $4\,\mathrm{m/s}$. At time $t$ body $A$ has been moving for $t-3$ seconds, so its position equation is $x_A=4(t-3)$, valid for $t\geq3\,\mathrm s$. With coordinates in metres and time in seconds, the two equations are set equal:
$$
\begin{aligned}
4(t-3)&=8+2t\\[4pt]
4t-12&=8+2t\\[4pt]
2t&=20\\[4pt]
t&=10\,\mathrm s.
\end{aligned}
$$
The result is greater than $3\,\mathrm s$, so it falls in the interval in which the equation of $A$ is valid. Body $A$ has moved for $10-3=7\,\mathrm s$, and the common coordinate is $x_B=8+2\cdot10=28\,\mathrm m$.

The calculation can be repeated with the clock reset when $A$ starts. At that instant $B$ is already at $8+2\cdot3=14\,\mathrm m$. The separation decreases by $4-2=2\,\mathrm m$ each second and reaches zero after $\dfrac{14}{2}=7\,\mathrm s$ from the new time origin, that is, at $3+7=10\,\mathrm s$ on the original clock. The two calculations give the same instant because in each of them the two position equations use the same initial instant.
:::

::grafico{f="4*(x-3);8+2*x" xmin=3 xmax=12 ymin=0 ymax=38 nomi="t (s),x (m)" punti="10,28,pieno,I" legenda="\text{A};\text{B}" titolo="The lines are shown from the instant both bodies are moving"}

## Crossing a river

:::osservazione{#moto-fiume titolo="Vector addition and drift"}
A boat crossing a river has two natural frames: the water, which flows, and the bank, which is at rest. **Downstream** is the direction in which the current flows, **upstream** the opposite direction. The $x$ axis points downstream and the $y$ axis from one bank to the other. The velocities are:
- the velocity of the water relative to the bank, $(u,0)$, because the current is parallel to the banks;
- the velocity of the boat relative to the water, with components $(v'_x,v'_y)$;
- the velocity of the boat relative to the bank, which by the velocity law is $(u+v'_x,\;v'_y)$.

The transverse component $v'_y$ determines the time needed to cross the width $d$ of the river, $t=\dfrac{d}{v'_y}$, because the current does not change it. The component along the bank, multiplied by the same time, gives the downstream (or upstream) displacement between departure and landing; this displacement is called the **drift**.

If the boat points perpendicular to the banks, $(v'_x,v'_y)=(0,v_b)$, where $v_b$ is the velocity of the boat relative to the water. With $d=40\,\mathrm m$, $v_b=4\,\mathrm{m/s}$ and $u=3\,\mathrm{m/s}$, the time is
$$
t=\frac{d}{v_b}=\frac{40}{4}\,\mathrm s=10\,\mathrm s.
$$
The landing point is downstream of the departure point by $ut=3\cdot10=30\,\mathrm m$. The components of the ground velocity are $3\,\mathrm{m/s}$ and $4\,\mathrm{m/s}$ and form the legs of a right triangle, as in the diagram: the arrow $u$ is horizontal, the arrow $v'$ is vertical and the ground velocity $v$ is the hypotenuse. By Pythagoras' theorem the **magnitude** (the length of the vector) is
$$
v=\sqrt{3^2+4^2}\,\mathrm{m/s}=\sqrt{25}\,\mathrm{m/s}=5\,\mathrm{m/s}.
$$
As a check, the distance covered along the straight path is $\sqrt{30^2+40^2}=50\,\mathrm m$; dividing by $10\,\mathrm s$ gives $5\,\mathrm{m/s}$ again.
:::

::grafico{vettori="0,0,3,0,u;3,0,3,4,v′;0,0,3,4" etichette="1.24,2.2,v" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="The current changes only the component parallel to the banks"}

:::esempio{#rotta-attraversamento titolo="Landing directly opposite"}
To land directly opposite the departure point the drift must be zero, so the component of the ground velocity along the bank must be zero: $u+v'_x=0$. It follows that $v'_x=-u$, that is, the boat points partly upstream. The motor maintains a **speed** $v_b$ relative to the water (speed is the magnitude of the velocity, without direction). Since $v_b$ is the hypotenuse of the triangle with legs $\lvert v'_x\rvert=u$ and $v'_y$, by Pythagoras' theorem the component available for crossing is
$$
v'_y=\sqrt{v_b^2-u^2}.
$$
The square root is positive only if $v_b>u$, so this route is possible only with a boat faster than the current. At the limiting case $v_b=u$ the whole speed of the boat is used to oppose the current and the transverse component becomes zero, so the boat stays at rest relative to the bank.

With $v_b=5\,\mathrm{m/s}$ and $u=3\,\mathrm{m/s}$ the result is $v'_y=\sqrt{25-9}=\sqrt{16}=4\,\mathrm{m/s}$, and a river $40\,\mathrm m$ wide is crossed in $\dfrac{40}{4}=10\,\mathrm s$. In the diagram the arrow $v'$ points to the left and upwards, and the sum $v$ is vertical. If instead the same boat points perpendicular to the banks, it has $v'_y=5\,\mathrm{m/s}$ and crosses in $\dfrac{40}{5}=8\,\mathrm s$, with drift $3\cdot8=24\,\mathrm m$. The cross-stream component never exceeds $v_b$, so the perpendicular route gives the shortest crossing time, while the upstream route gives the landing directly opposite; the choice depends on which of the two conditions the problem fixes.
:::

::grafico{vettori="0,0,3,0,u;3,0,0,4,v′;0,0,0,4,v" xmin=-2 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="Pointing upstream cancels the ground-velocity component parallel to the bank"}

## Inertial frames

:::definizione{#inerziali titolo="Invariance of acceleration"}
A body is **isolated** when no forces act on it, or when the forces balance. An **inertial frame** is a frame in which an isolated body maintains its velocity (magnitude, direction and sense), including the case of rest; it is the frame in which Newton's first law holds. A frame that translates at constant velocity relative to an inertial frame is itself inertial.

The reason is that the **acceleration**, that is, the change of velocity divided by the time, is the same in both frames. If $\vec v=\vec v'+\vec u$ and $\vec u$ is constant, writing the relation at the start and at the end of an interval and subtracting gives
$$
\Delta\vec v=\Delta\vec v'+\Delta\vec u=\Delta\vec v',
$$
because $\Delta\vec u=\vec 0$. Dividing by the same elapsed time gives the same average acceleration. Taking short intervals gives $\vec a=\vec a'$ for the instantaneous acceleration. A quantity that has the same value in all frames is called **invariant**; acceleration is therefore invariant for frames in uniform translation.

Since velocity is a vector, the acceleration is non-zero even when only the direction of the velocity changes. For example, an origin moving round a circle at constant speed has an acceleration directed towards the centre, so a frame with its origin there is accelerating even if its axes stay parallel to those of the ground.

The shape of the trajectory, on the other hand, can change even with the same acceleration. A ball is released from rest relative to a train travelling at a constant velocity $u$. Neglecting air resistance:
- the carriage measures zero horizontal velocity and observes a vertical fall;
- the ground measures a constant horizontal component $u$ and the same fall along the vertical, so it observes a parabolic arc.

The ball keeps the horizontal velocity it had at release, equal to that of the train, so it stays above the same point of the carriage until it hits the floor. Both observers measure a downward vertical acceleration $g$ ($g=9.8\,\mathrm{m/s^2}$ is the acceleration due to gravity). In the diagram the ball starts at a height of $4.9\,\mathrm m$: with $\dfrac12gt^2=4.9\,\mathrm m$ the fall lasts $1\,\mathrm s$, and in that second the ball moves $6\,\mathrm m$ forward over the ground together with the carriage.
:::

::grafico{f="4.9-4.9*x^2/36" xmin=0 xmax=7.3 ymin=0 ymax=6 nomi="x (m),y (m)" punti="0,4.9,pieno,P;6,0,pieno,I" titolo="From the ground, a ball dropped from 4.9 m while the carriage travels at 6 m/s follows a parabolic arc with g = 9.8 m/s²"}

:::osservazione{#principio-relativita titolo="Laws in the same laboratory"}
The **principle of Galilean relativity** states that the laws of mechanics have the same form in every inertial frame. Newton's second law states that, for a body of constant mass $m$, the sum of the forces is $m\vec a$; since the acceleration is the same in both descriptions, this law is also the same in both frames. Therefore a measurement made entirely inside a closed carriage travelling at constant velocity, such as the fall time of an object between two markers fixed to the carriage, gives the same result as on the station floor for the same height. A measurement that uses the outside world, for example the time between passing two station markers, instead gives the velocity of the train relative to the station.

The same reasoning separates quantities that change from one frame to another from invariant ones. The velocities of the individual bodies change. The difference $\vec v_A-\vec v_B$ stays the same, because the same $\vec u$ is added to each velocity:
$$
(\vec v_A+\vec u)-(\vec v_B+\vec u)=\vec v_A-\vec v_B.
$$
For this reason two inertial observers calculate the same closing velocity and the same elapsed time before the meeting.
:::

## Accelerating frames

:::osservazione{#apparenti titolo="Apparent force in a translating frame"}
Consider a carriage accelerating relative to the ground while keeping its axes parallel. The moving origin has acceleration $\vec A$ and the body has ground acceleration $\vec a$. From the velocity law $\vec v=\vec v'+\vec u$, with $\vec u$ now variable, the values at the start and at the end of an interval are subtracted and the result is divided by the time; this gives $\vec a=\vec a'+\vec A$, that is,
$$
\vec a'=\vec a-\vec A.
$$
In the ground frame, which is inertial, $\sum\vec F=m\vec a$ holds, where $\sum\vec F$ (the symbol $\sum$, "sigma", denotes a sum) is the **resultant** of the real forces, that is, the vector sum of the forces exerted by other bodies. Substituting $\vec a=\vec a'+\vec A$ gives $\sum\vec F=m\vec a'+m\vec A$, so
$$
m\vec a'=\sum\vec F-m\vec A.
$$
In the balance written for the carriage, the term $-m\vec A$ is called the **apparent force**. It is not exerted by any body and is added to the real forces to account for the acceleration of the axes. It has the direction of $\vec A$ and the opposite sense; the signs of its components follow by projecting $-\vec A$ onto the chosen axes. Forces are measured in **newtons** (symbol $\mathrm N$): $1\,\mathrm N$ is the force that gives $1\,\mathrm{kg}$ an acceleration of $1\,\mathrm{m/s^2}$.

If the carriage accelerates to the right at $1.5\,\mathrm{m/s^2}$ and the mass is $2.0\,\mathrm{kg}$, with right positive the apparent term is
$$
-mA=-2.0\cdot1.5\,\mathrm N=-3.0\,\mathrm N.
$$
A body free to move horizontally (no real horizontal force) has $a=0$ in the ground frame, so $a'=0-1.5=-1.5\,\mathrm{m/s^2}$, and in the carriage the body moves backwards. In the diagram the carriage moves forward over the ground following $\dfrac12\cdot1.5\,t^2=0.75\,t^2$, while the object at rest on the ground follows the opposite law in the carriage, $-0.75\,t^2$. A person who remains at rest relative to the carriage instead has $a'=0$. A real horizontal force to the right acts on them, exerted for instance by the floor, with magnitude $mA$. In the carriage balance the real force $+mA$ and the apparent term $-mA$ cancel.

The same balance holds vertically, for example in a lift. With up positive, a person at rest relative to the lift is acted on by the weight $-mg$ and by the force $N$ of the scale (the **normal force**, perpendicular to the scale's plate); since $a'=0$,
$$
0=N-mg-mA,\qquad N=m(g+A).
$$
With $m=40\,\mathrm{kg}$, $g$ rounded to $10\,\mathrm{m/s^2}$ and the lift accelerating downwards, $A=-2\,\mathrm{m/s^2}$, the scale reads $N=40\cdot(10-2)=320\,\mathrm N$, less than the weight of $400\,\mathrm N$.

The formula derived here applies to axes in pure translation. Rotating axes require additional terms in the balance, which are not studied here.

A laboratory test uses a puck released on a horizontal surface with negligible friction. The puck starts over a mark on the carriage floor, with the same velocity as the carriage. If the carriage maintains constant velocity, the puck stays over the mark. If the carriage accelerates to the right at $0.80\,\mathrm{m/s^2}$, in the carriage the puck has $a'=-0.80\,\mathrm{m/s^2}$ and zero initial relative velocity, so its position relative to the mark is $x'=-\dfrac12 At^2$. After $2.0\,\mathrm s$:
$$
x'=-\frac12\cdot0.80\cdot2.0^2\,\mathrm m=-1.6\,\mathrm m,
$$
that is, the puck lies $1.6\,\mathrm m$ to the left of the mark.
:::

::grafico{f="0.75*x^2;-0.75*x^2" xmin=0 xmax=4.22 ymin=-15 ymax=15 nomi="t (s),position (m)" legenda="\text{carriage origin in the ground frame};\text{object in the carriage frame}" titolo="A free object at rest on the ground moves backwards in the frame of a carriage accelerating at 1.5 m/s²"}

:::esempio{#cabina-frenata titolo="Direction during braking"}
A carriage is moving to the right but slows down with acceleration $A=-2\,\mathrm{m/s^2}$; the acceleration is negative because the velocity, which is positive, decreases. With right positive, the apparent term on a $3\,\mathrm{kg}$ bag is
$$
-mA=-3\cdot(-2)\,\mathrm N=+6\,\mathrm N,
$$
that is, $6\,\mathrm N$ to the right. The floor is smooth and the bag initially has the same velocity as the vehicle, so over the ground no horizontal force slows it and the bag continues at constant velocity. In the carriage the bag has $a'=0-(-2)=+2\,\mathrm{m/s^2}$; it starts at rest and after $1\,\mathrm s$ it has a relative velocity of $+2\,\mathrm{m/s}$. Its motion in the carriage has the sense of the relative acceleration, which here points towards the front of the carriage.

The sense of the carriage velocity and the sense of its acceleration are therefore two separate pieces of information. On the velocity-time graph the latter is given by the sign of the slope. In the diagram the carriage line starts at $8\,\mathrm{m/s}$ and drops by $2\,\mathrm{m/s}$ every second, while the bag line stays at $8\,\mathrm{m/s}$. A positive velocity that decreases gives a negative slope and a positive apparent force.
:::

::grafico{f="8-2*x;8" xmin=0 xmax=3 ymin=0 ymax=10 nomi="t (s),v (m/s)" legenda="\text{carriage};\text{bag}" titolo="The initial velocity of 8 m/s is an example value. During braking the bag keeps that horizontal ground velocity."}

## Comparing two descriptions

:::esempio{#confronto-due-descrizioni titolo="Meeting the moving origin while slowing down"}
Consider a moving origin with position equation $X(t)=2+3t$ and a particle with ground-frame equation $x(t)=6+2t-\dfrac{1}{2}t^2$, with coordinates in metres and time in seconds. The axes are parallel and the clocks show the same time. The particle's equation is that of uniformly accelerated motion, $x=x_0+v_0t+\dfrac12at^2$, with $x_0=6\,\mathrm m$, $v_0=2\,\mathrm{m/s}$ and $a=-1\,\mathrm{m/s^2}$.

Initially the particle is $6-2=4\,\mathrm m$ ahead of the origin. Its initial ground velocity is positive, $2\,\mathrm{m/s}$, while its initial relative velocity is $2-3=-1\,\mathrm{m/s}$. Therefore over the ground the particle starts moving forwards, while in the carriage it moves backwards from the start of the measurement.

To find the meeting, either set $x(t)$ equal to $X(t)$ or set the relative coordinate to zero. The relative coordinate is
$$
x'(t)=x(t)-X(t)=6+2t-\dfrac{1}{2}t^2-2-3t=4-t-\dfrac{1}{2}t^2.
$$
Setting $x'=0$ and multiplying by $-2$ gives the quadratic equation
$$
t^2+2t-8=0,\qquad t=\frac{-2\pm\sqrt{4+32}}{2}=\frac{-2\pm6}{2},
$$
with roots $2$ and $-4$ in seconds. The stretch of motion under study begins at $t=0$, so the meeting happens after $2\,\mathrm s$. Substituting into the equation of the moving origin gives the common coordinate $2+3\cdot2=8\,\mathrm m$.

The particle's ground velocity is $v=2-t$, so at the meeting it is $2-2=0\,\mathrm{m/s}$; the relative velocity is $v'=v-3=-3\,\mathrm{m/s}$. Two bodies can therefore have the same position at one instant and different velocities, like the door passing a stationary marker. In both position equations the coefficient of $t^2$ remains $-\dfrac{1}{2}$, so the acceleration is $-1\,\mathrm{m/s^2}$ in both frames. The change of frame has changed only the intercept (from $6$ to $4$) and the coefficient of the term in $t$ (from $2$ to $-1$). On the graph, at the point $I$ the positions coincide and the slopes of the two curves differ.
:::

::grafico{f="2+3*x;6+2*x-0.5*x^2" xmin=0 xmax=4 ymin=0 ymax=15 nomi="t (s),x (m)" punti="2,8,pieno,I" legenda="\text{moving origin};\text{particle}" titolo="At the meeting the positions coincide and the slopes differ"}
