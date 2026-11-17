---
titolo: "Reference frames and Galilean relativity"
sommario: "Relative positions, velocities and accelerations. Pursuits, navigating a current, and force balances in an accelerating carriage."
---

## Relative position

:::definizione{#posizioni-relative titolo="Two observers of the same motion"}
A **reference frame** assigns an origin and oriented axes to positions and a clock reading to events. The station can be frame $S$ and the train frame $S'$. To describe a point $P$ from inside the carriage, measure its position from the door chosen as origin $O'$. To describe the same point from the station, measure from a fixed marker $O$. A seated passenger two metres from $O'$ has a constant coordinate in $S'$. As the train moves forward, the passenger's coordinate in $S$ increases along with the door's coordinate.

Choose parallel axes pointing in the same direction. Denote the coordinate of $O'$ in $S$ by $X(t)$ and the coordinate of $P$ in $S'$ by $x'(t)$. To get from $O$ to $P$, go from $O$ to $O'$, then from $O'$ to $P$. The two measurements refer to the same instant, so
$$
x=X(t)+x', \qquad x'=x-X(t).
$$
For $X=15\,\mathrm m$ and $x'=2\,\mathrm m$, the result is $x=17\,\mathrm m$. A point with $x'=-2\,\mathrm m$ lies two metres behind the door, at $x=13\,\mathrm m$. The sign of $x'$ shows which side of the moving origin the point lies on.
:::

::grafico{f="5*x;5*x+2" xmin=0 xmax=4 ymin=0 ymax=23 nomi="t (s),x (m)" punti="3,15,pieno;3,17,pieno" segmenti="3,15,3,17" etichette="2.78,14.25,O′;3.11,18.15,P" legenda="\text{moving origin};\text{passenger}" titolo="The vertical gap at the same time gives the passenger's coordinate in the carriage"}

:::esempio{#origine-e-orologio titolo="Origins separated at the initial instant"}
For constant velocity $u$ along the $x$ axis, $X(t)=X_0+ut$. Read $X_0$ at the instant chosen as time zero. When the classical clocks start at the same instant, $t'=t$. Along axes where the moving origin has no motion, coordinates agree if the origins started at the same coordinate on those axes.

If the initial clock readings differ by $\tau$, then $t'=t+\tau$. The elapsed interval $\Delta t$ stays the same. Before using a position equation, express the reading on the clock used to specify its intercept and other parameters.

The door starts at $X_0=9\,\mathrm m$ and travels at $u=3\,\mathrm{m/s}$. A fixed marker lies at $30\,\mathrm m$. After $4\,\mathrm s$ the passenger measures $x'=30-(9+3\cdot4)=9\,\mathrm m$ for the marker. The marker passes through origin $O'$ when $30=9+3t$, after $7\,\mathrm s$. It lies ahead of the door before that instant. Its relative coordinate is negative after the passage, while its station coordinate remains $30\,\mathrm m$.
:::

::grafico{f="9+3*x;30" xmin=0 xmax=9 ymin=0 ymax=39 nomi="t (s),x (m)" punti="7,30,pieno,I" legenda="\text{door};\text{marker}" titolo="Equal coordinates identify when the marker passes the door"}

:::esempio{#dati-due-riferimenti titolo="Two positions measured at the same instant"}
A ground camera measures the door position $X$ and the position $x$ of a service trolley. Both velocities are constant. Each row uses two coordinates from the same camera frame to find the relative coordinate $x'=x-X$.

| $t$ (s) | $X$ (m) | $x$ (m) | $x'$ (m) |
| ---: | ---: | ---: | ---: |
| 0 | 8 | 14 | 6 |
| 2 | 12 | 12 | 0 |
| 4 | 16 | 10 | −6 |

The door moves $4\,\mathrm m$ forward every $2\,\mathrm s$ and the trolley moves $2\,\mathrm m$ backwards. The relative coordinate therefore decreases by $6\,\mathrm m$ in the same interval, giving $v'=-3\,\mathrm{m/s}$. The row in which the ground coordinates agree marks the trolley's passage past the door.
:::

## Addition of velocities

:::teorema{#velocita-relative titolo="Galilean velocity addition"}
When $S'$ translates at constant velocity $\vec u$ relative to $S$ and the axes are parallel and point the same way, the velocity of $P$ in $S$ is
$$
\vec v=\vec v'+\vec u.
$$
The relation also holds for average velocities over the same interval. Start from the coordinates at two instants $t_1$ and $t_2$. Subtracting gives $\Delta x=\Delta x'+\Delta X$. Uniform translation gives $\Delta X=u\Delta t$. Dividing by $\Delta t$ turns the displacement components into average velocities and gives $u$ for the origin's component. For instantaneous velocity, take a progressively shorter interval around the measurement time. The same reasoning applies to the other components.

If the origin accelerates with the axis directions fixed, add the mean velocity of the origin over the same interval to the relative mean velocity. The instantaneous relation uses $\vec u(t)$ evaluated at the same instant as $\vec v'(t)$. The acceleration transformation then requires a correction, while velocity addition keeps the same form.

This is a **vector sum**. On a straight line, choose one positive direction and add the signed components. If a passenger walks towards the front at $1.5\,\mathrm{m/s}$ on a train travelling at $12\,\mathrm{m/s}$, the station measures $13.5\,\mathrm{m/s}$. If the passenger walks towards the rear, $v'=-1.5\,\mathrm{m/s}$ and $v=10.5\,\mathrm{m/s}$. In both cases, the ground observer sees the passenger move in the train's direction.
:::

::grafico{f="12*x;13.5*x;10.5*x" xmin=0 xmax=4 ymin=0 ymax=57 nomi="t (s),x (m)" legenda="\text{train};\text{towards the front};\text{towards the rear}" titolo="The slopes show the three velocities measured at the station"}

:::osservazione{#catena-riferimenti titolo="Subscripts and the inverse transformation"}
In $\vec v_{P/S}$, the subscript after the slash identifies the frame and the one before it identifies the body. A readable chain is
$$
\vec v_{P/S}=\vec v_{P/S'}+\vec v_{S'/S}.
$$
Subtract the carriage velocity to invert the relation. When the ground measures $10.5\,\mathrm{m/s}$ and the train travels at $12\,\mathrm{m/s}$, the relative result is $10.5-12=-1.5\,\mathrm{m/s}$. Once the positive direction is fixed, the sign gives the walking direction in the carriage. Reversing the order of the frames gives $\vec v_{S/S'}=-\vec v_{S'/S}$.

A rover measures a drone's velocity as $(1,2)\,\mathrm{m/s}$. The rover is on a moving deck and travels relative to the deck at $(2,-1)\,\mathrm{m/s}$. The deck translates relative to the ground at $(-1,1)\,\mathrm{m/s}$. With parallel axes pointing the same way, adding along each axis gives $(2,2)\,\mathrm{m/s}$ for the drone relative to the ground.

Galilean addition uses the same time in both frames. It applies to the speeds of trains, boats and laboratory objects, which are far below the speed of light.
:::

## Meetings and pursuits

:::teorema{#incontri titolo="Closing velocity"}
Put two bodies $A$ and $B$ on the same axis and write their positions at a common instant. Meeting requires $x_A(t)=x_B(t)$. For uniform motion, with $A$ initially behind $B$, the signed separation is
$$
x_B(t)-x_A(t)=d+(v_B-v_A)t.
$$
If $d>0$ and $v_A>v_B$, setting the separation to zero yields $t=\dfrac d{v_A-v_B}$. The unit is the second, since a distance is divided by a speed. With $d=60\,\mathrm m$, $v_A=8\,\mathrm{m/s}$ and $v_B=5\,\mathrm{m/s}$, the separation drops by $3\,\mathrm m$ each second. The catch-up therefore takes $20\,\mathrm s$. Substitution into the two position equations gives $x_A=8\cdot20=160\,\mathrm m$ and $x_B=60+5\cdot20=160\,\mathrm m$.

Choose the axis pointing from $A$ to $B$. If the bodies move towards each other, then $v_A>0$ and $v_B<0$. In this case $v_A-v_B=\lvert v_A\rvert+\lvert v_B\rvert$. If $v_A=v_B$ and the initial separation is positive, the separation stays constant. An algebraic solution with $t<0$ places the intersection before the chosen initial instant. Check the interval on which each position equation describes the actual motion.
:::

::grafico{f="8*x;60+5*x" xmin=0 xmax=24 ymin=0 ymax=200 nomi="t (s),x (m)" punti="20,160,pieno,I" legenda="\text{A};\text{B}" titolo="The lines meet at 20 s and 160 m"}

:::esempio{#partenze-differite titolo="Model after a delayed start"}
Body $B$ starts at time $t=0$ from $8\,\mathrm m$ and travels at $2\,\mathrm{m/s}$. $A$ leaves the origin only at $t=3\,\mathrm s$, then travels at $4\,\mathrm{m/s}$. For $t\geq3\,\mathrm s$, the equations to set equal are $x_B=8+2t$ and $x_A=4(t-3)$, with coordinates in metres and time in seconds. The equation $4(t-3)=8+2t$ gives $t=10\,\mathrm s$. Body $A$ has moved for $10-3=7\,\mathrm s$, and the common coordinate is $28\,\mathrm m$.

Repeat the calculation with the clock reset when $A$ starts. At that instant, $B$ is already at $8+2\cdot3=14\,\mathrm m$. The separation decreases at $4-2=2\,\mathrm{m/s}$, reaching zero after $\dfrac{14}{2}=7\,\mathrm s$ from the new time origin. The two calculations agree because each uses a common initial instant.
:::

::grafico{f="4*(x-3);8+2*x" xmin=3 xmax=12 ymin=0 ymax=38 nomi="t (s),x (m)" punti="10,28,pieno,I" legenda="\text{A};\text{B}" titolo="The lines are shown from the instant both bodies are moving"}

## Crossing a river

:::osservazione{#moto-fiume titolo="Vector addition and drift"}
Point the $x$ axis downstream and the $y$ axis from one bank to the other. The water velocity relative to the bank is $(u,0)$. The boat velocity relative to the water has components $(v'_x,v'_y)$. Relative to the bank, these become $(u+v'_x,v'_y)$. The transverse component determines the time needed to cross the width $d$. The longitudinal component multiplied by the same time gives the downstream or upstream displacement.

If the boat points perpendicular to the banks, $(v'_x,v'_y)=(0,v_b)$. With $d=40\,\mathrm m$, $v_b=4\,\mathrm{m/s}$ and $u=3\,\mathrm{m/s}$, the time is $\dfrac d{v_b}=10\,\mathrm s$. The landing point is displaced by $ut=30\,\mathrm m$ along the bank. The components of the ground velocity are $3\,\mathrm{m/s}$ and $4\,\mathrm{m/s}$, so the magnitude is $5\,\mathrm{m/s}$. To check this, the distance covered on the straight path is $\sqrt{30^2+40^2}=50\,\mathrm m$. Dividing by $10\,\mathrm s$ gives $5\,\mathrm{m/s}$ again.
:::

::grafico{vettori="0,0,3,0,u;3,0,3,4,v′;0,0,3,4" etichette="1.24,2.2,v" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="The current changes only the component parallel to the banks"}

:::esempio{#rotta-attraversamento titolo="Landing directly opposite"}
To land directly opposite the departure point, impose $u+v'_x=0$. The boat points partly upstream, so $v'_x=-u$. If its motor maintains a speed $v_b$ relative to the water, the component available for crossing is $v'_y=\sqrt{v_b^2-u^2}$. This route requires $v_b>u$. At the limiting case $v_b=u$, the entire available magnitude is used to oppose the current and the transverse component becomes zero.

With $v_b=5\,\mathrm{m/s}$ and $u=3\,\mathrm{m/s}$, the result is $v'_y=\sqrt{25-9}=4\,\mathrm{m/s}$. A $40\,\mathrm m$ river takes $10\,\mathrm s$ to cross. If the same boat points perpendicular to the banks, it achieves $v'_y=5\,\mathrm{m/s}$ and crosses in $8\,\mathrm s$, drifting $24\,\mathrm m$. The route depends on which condition the problem fixes, the crossing time or the landing point.
:::

::grafico{vettori="0,0,3,0,u;3,0,0,4,v′;0,0,0,4,v" xmin=-2 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="Pointing upstream cancels the ground-velocity component parallel to the bank"}

## Inertial frames

:::definizione{#inerziali titolo="Invariance of acceleration"}
In an **inertial frame**, an isolated body maintains its velocity vector, including the case of rest. A frame that translates at constant velocity relative to an inertial frame is itself inertial. If $\vec v=\vec v'+\vec u$ and $\vec u$ is constant, subtracting the velocities at the ends of an interval gives $\Delta\vec v=\Delta\vec v'$. Dividing by the same elapsed time gives the same average acceleration. Taking short intervals gives $\vec a=\vec a'$ for the instantaneous acceleration.

The description of a trajectory can change even when acceleration agrees. A ball is released from rest relative to a train travelling at a constant velocity $u$. Neglecting air resistance, the carriage measures zero horizontal velocity and observes a vertical fall. The ground measures the constant horizontal component $u$ and observes the same vertical fall. The ball retains the horizontal velocity it had at release and stays above the same point in the carriage until impact. Both observers measure a downward vertical acceleration $g$.
:::

::grafico{f="4.9-4.9*x^2/36" xmin=0 xmax=7.3 ymin=0 ymax=6 nomi="x (m),y (m)" punti="0,4.9,pieno,P;6,0,pieno,I" titolo="From the ground, a ball dropped from 4.9 m while the carriage travels at 6 m/s follows a parabolic arc with g = 9.8 m/s²"}

:::osservazione{#principio-relativita titolo="Laws in the same laboratory"}
The laws of mechanics have the same form in every inertial frame. For a body of constant mass the sum of the forces is $m\vec a$, and both descriptions give the same acceleration. An internal measurement on a closed carriage travelling at constant velocity, such as the fall time between two markers fixed to the carriage, gives the same result as on the station floor for the same height. A measurement involving the outside world, such as the time between passing two station markers, can be used to infer the relative velocity.

This reasoning separates frame-dependent quantities from those preserved under the transformation. Individual body velocities change. The difference $\vec v_A-\vec v_B$ is the same, because the same $\vec u$ is added to both velocities. Consequently, two inertial observers calculate the same closing velocity and the same elapsed time before the meeting.
:::

## Accelerating frames

:::osservazione{#apparenti titolo="Apparent force in a translating frame"}
Consider a carriage accelerating relative to the ground while keeping its axes parallel. If the moving origin has acceleration $\vec A$ and the body has ground acceleration $\vec a$, the change in relative velocity gives $\vec a'=\vec a-\vec A$. Thus, using $\sum\vec F=m\vec a$ in the inertial frame and $\vec a=\vec a'+\vec A$, we obtain
$$
m\vec a'=\sum\vec F-m\vec A.
$$
In the balance written for the carriage, the term $-m\vec A$ is called the **apparent force**. It accounts for the effects of the accelerating axes. Its direction and sense follow by projecting $-\vec A$ onto the chosen axes.

If the carriage accelerates to the right at $1.5\,\mathrm{m/s^2}$ and the mass is $2.0\,\mathrm{kg}$, the apparent term in the carriage is $-3.0\,\mathrm N$ when right is positive. A body free to move horizontally has $a=0$ relative to the ground, so $a'=-1.5\,\mathrm{m/s^2}$. A person who remains at rest relative to the carriage instead has $a'=0$. A real horizontal force acts on them to the right, provided for instance by the floor, with magnitude $mA$. In the carriage balance the two terms cancel. The formula derived here applies to axes in pure translation. Rotating axes require additional terms in the balance.

A laboratory test uses a puck released on a horizontal surface with negligible friction. The puck starts over a floor mark with the same velocity as the carriage. If the carriage maintains constant velocity, the puck stays over the mark. If the carriage accelerates to the right at $0.80\,\mathrm{m/s^2}$, after $2.0\,\mathrm s$ the puck lies $1.6\,\mathrm m$ to the left of the mark. The calculation uses $x'=-\dfrac12 At^2$ because the initial relative velocity is zero.
:::

::grafico{f="0.75*x^2;-0.75*x^2" xmin=0 xmax=4.22 ymin=-15 ymax=15 nomi="t (s),position (m)" legenda="\text{carriage origin in the ground frame};\text{object in the carriage frame}" titolo="A free object at rest on the ground moves backwards in the frame of a carriage accelerating at 1.5 m/s²"}

:::esempio{#cabina-frenata titolo="Direction during braking"}
A carriage is moving right but slows with acceleration $A=-2\,\mathrm{m/s^2}$. The apparent term for a $3\,\mathrm{kg}$ bag is $-mA=+6\,\mathrm N$, directed to the right. If the floor is smooth and the bag initially shares the vehicle velocity, the bag continues at constant velocity in the ground frame. In the carriage, it starts at rest and gains a relative velocity of $+2\,\mathrm{m/s}$ after $1\,\mathrm s$. The direction is that of the relative acceleration, which here points towards the front of the carriage.

Distinguish the direction of the carriage velocity from that of its acceleration. The sign of the slope on a velocity-time graph gives the latter direction. A positive velocity that decreases gives a negative slope and a positive apparent force.
:::

::grafico{f="8-2*x;8" xmin=0 xmax=3 ymin=0 ymax=10 nomi="t (s),v (m/s)" legenda="\text{carriage};\text{bag}" titolo="The initial velocity of 8 m/s is an example value. During braking the bag keeps that horizontal ground velocity."}

## Comparing two descriptions

:::esempio{#confronto-due-descrizioni titolo="Meeting the moving origin while slowing down"}
Consider a moving origin following $X(t)=2+3t$ and a particle following the ground-frame law $x(t)=6+2t-\dfrac{1}{2}t^2$, using metres and seconds. The axes are parallel and the clocks read the same time. Initially the particle is $6-2=4\,\mathrm m$ ahead of the origin. Its initial ground velocity is positive, $2\,\mathrm{m/s}$, while its initial relative velocity is $2-3=-1\,\mathrm{m/s}$. It starts moving forwards on the ground and is already moving backwards in the carriage frame when measurement begins.

To describe the meeting, either set $x(t)$ equal to $X(t)$ or set the relative coordinate to zero,
$$
x'(t)=4-t-\dfrac{1}{2}t^2.
$$
Setting it to zero gives $t^2+2t-8=0$, with roots $2$ and $-4$ in seconds. The leg under study begins at $t=0$, so the meeting happens after $2\,\mathrm s$. Substituting into the moving origin's position equation gives the common coordinate $2+3\cdot2=8\,\mathrm m$.

At the meeting the particle's ground velocity is $2-2=0\,\mathrm{m/s}$ and its relative velocity is $-3\,\mathrm{m/s}$. Sharing a position at one instant is compatible with different velocities, just as a door passes a stationary marker. The coefficient of $t^2$ remains $-\dfrac{1}{2}$ in both position equations, and the acceleration is $-1\,\mathrm{m/s^2}$ in both frames. The transformation has changed only the intercept and the coefficient of the linear term.
:::

::grafico{f="2+3*x;6+2*x-0.5*x^2" xmin=0 xmax=4 ymin=0 ymax=15 nomi="t (s),x (m)" punti="2,8,pieno,I" legenda="\text{moving origin};\text{particle}" titolo="At the meeting the positions coincide and the slopes differ"}
