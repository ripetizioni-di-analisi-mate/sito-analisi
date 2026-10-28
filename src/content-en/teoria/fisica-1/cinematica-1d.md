---
titolo: Kinematics in one dimension
sommario: How the motion of a point along a straight line is described with the equation of motion, velocity and acceleration, how uniform motion, uniformly accelerated motion and free fall are solved, and how the position is obtained from graphs and from the acceleration.
---

## Reference frame and equation of motion

:::definizione{#punto-materiale titolo="Point particle"}
A body is described as a **point particle** when its dimensions are negligible compared with the distances traveled, so that its position is specified by a single point. A car that travels $100\,\mathrm{km}$ of highway is a point particle; the same car maneuvering in a parking lot a few meters wide is not. **Kinematics** describes the motion of the point particle through position, velocity and acceleration, without dealing with the causes of motion, which are the subject of dynamics (we refer to the topic on Newton's laws).
:::

:::definizione{#sistema-di-riferimento titolo="Reference frame"}
A motion is **rectilinear** if the point moves along a straight line. To describe it, one fixes a **reference frame** consisting of

- an $x$-axis superimposed on the line of motion, with an origin $O$, a positive orientation and a unit of length, the meter;
- a clock that measures the time $t$ in seconds starting from a chosen initial instant.

The position of the point at the instant $t$ is its coordinate $x$ on the axis, positive or negative depending on the side of $O$ on which it lies. The origin, the orientation and the initial instant are chosen freely, and a suitable choice simplifies the calculations: for a falling stone the axis can be oriented upward with the origin at the ground, or downward with the origin at the starting point. Position, displacement, velocity and acceleration are vectors, and in rectilinear motion they all have the direction of the axis; therefore each of them is described by its component along the axis alone, a signed number. For vectors in the plane we refer to the topic on motion in the plane.
:::

:::definizione{#legge-oraria titolo="Equation of motion"}
The **equation of motion** is the function $t \mapsto x(t)$ that assigns to each instant the position of the point. Its graph in the $(t, x)$ plane, with time on the horizontal axis and position on the vertical axis, is the **position–time graph**. The position–time graph is different from the trajectory, which in rectilinear motion is a segment of the $x$-axis; the graph additionally shows *when* the point occupies each position. For example the law $x(t) = 4t - t^2$, with $x$ in meters and $t$ in seconds, describes a point that starts from the origin, advances to $x = 4\,\mathrm{m}$ at the instant $t = 2\,\mathrm{s}$ and then turns back, passing through the origin again at the instant $t = 4\,\mathrm{s}$. In a law written with numbers only, the coefficients have the units that make the terms homogeneous; here $4\,\mathrm{m/s}$ and $1\,\mathrm{m/s^2}$.

::grafico{f="4*x-x^2+0*sqrt(x*(5-x))" punti="0,0,pieno;2,4,pieno;5,-5,pieno" segmenti="2,0,2,4;5,0,5,-5" xmin=-1 xmax=6 ymin=-6 ymax=5 nomi="t,x" titolo="Position–time graph of $x(t) = 4t - t^2$, with $x$ in meters and $t$ in seconds: the point advances to $x = 4\,\mathrm{m}$, is at rest at the instant $t = 2\,\mathrm{s}$ and then turns back to $x = -5\,\mathrm{m}$"}

:::

:::definizione{#spostamento titolo="Displacement and distance traveled"}
The **displacement** of the point between the instants $t_1$ and $t_2$ is the difference of the positions
$$
\Delta x = x(t_2) - x(t_1) .
$$
It is positive if the final position lies on the positive side of the axis relative to the initial one, negative in the opposite case, and it depends only on the two extreme positions. The **distance traveled** is the total length of the path, and it coincides with $|\Delta x|$ only if the point never reverses the orientation of its motion between $t_1$ and $t_2$. For the law $x(t) = 4t - t^2$ between $0$ and $5\,\mathrm{s}$ the displacement is $x(5) - x(0) = -5\,\mathrm{m}$, whereas the distance traveled is $4\,\mathrm{m}$ on the way out plus $9\,\mathrm{m}$ on the way back, that is, $13\,\mathrm{m}$.
:::

## Average velocity and instantaneous velocity

:::definizione{#velocita-media titolo="Average velocity"}
The **average velocity** between the instants $t_1$ and $t_2 > t_1$ is the ratio of the displacement to the time interval:
$$
v_m = \frac{\Delta x}{\Delta t} = \frac{x(t_2) - x(t_1)}{t_2 - t_1} .
$$
It is measured in $\mathrm{m/s}$; to go from $\mathrm{km/h}$ to $\mathrm{m/s}$ one divides by $3.6$, since $1\,\mathrm{km/h} = \dfrac{1000\,\mathrm{m}}{3600\,\mathrm{s}}$. The sign of $v_m$ indicates the orientation of the overall displacement, and in the position–time graph $v_m$ is the slope of the secant line through the points $(t_1, x(t_1))$ and $(t_2, x(t_2))$. The ratio of the distance traveled to the time taken is called the **average speed** and is always positive. For the law $x(t) = 4t - t^2$ between $0$ and $5\,\mathrm{s}$ one has $v_m = \dfrac{-5\,\mathrm{m}}{5\,\mathrm{s}} = -1\,\mathrm{m/s}$, whereas the average speed is $\dfrac{13\,\mathrm{m}}{5\,\mathrm{s}} = 2.6\,\mathrm{m/s}$.
:::

:::richiamo{titolo="Derivative"}
A function $f$ is differentiable at $t_0$ if the limit of the difference quotient
$$
f'(t_0) = \lim_{h \to 0} \frac{f(t_0 + h) - f(t_0)}{h}
$$
exists and is finite; it is the slope of the tangent line to the graph at the point $(t_0, f(t_0))$. For the differentiation rules we refer to the topic on differential calculus in Mathematical Analysis 1.
:::

:::definizione{#velocita-istantanea titolo="Instantaneous velocity"}
The **instantaneous velocity** at the instant $t$ is the limit of the average velocity over shorter and shorter time intervals starting at $t$:
$$
v(t) = \lim_{\Delta t \to 0} \frac{x(t + \Delta t) - x(t)}{\Delta t} = \frac{dx}{dt} ,
$$
that is, the derivative of the equation of motion. In the position–time graph $v(t)$ is the slope of the tangent line. Therefore the point moves in the positive orientation of the axis where $x(t)$ increases ($v > 0$), in the negative orientation where $x(t)$ decreases ($v < 0$), and is momentarily at rest where the tangent is horizontal ($v = 0$). The absolute value $|v|$ measures how fast the point moves, and it is the value shown by the speedometer. For $x(t) = 4t - t^2$ one has $v(t) = 4 - 2t$, so $v(0) = 4\,\mathrm{m/s}$, $v(2) = 0$ and $v(5) = -6\,\mathrm{m/s}$; at the instant $t = 2\,\mathrm{s}$ the point **reverses the orientation** of its motion.

::grafico{f="x^2+0*sqrt(x);4*x-4;5*x-6" punti="2,4,pieno;3,9,pieno" etichette="2.12,3.1,P;3.12,8.1,Q" xmin=-1 xmax=4 ymin=-2 ymax=12 nomi="t,x" titolo="For $x(t) = t^2$ the secant through $P$ and $Q$, in red, has slope $5$, the average velocity between $t = 2$ and $t = 3$; the tangent at $P$, dashed, has slope $4$, the instantaneous velocity $v(2)$"}

:::

## Acceleration

:::definizione{#accelerazione-media titolo="Average acceleration"}
The **average acceleration** between the instants $t_1$ and $t_2 > t_1$ is the ratio of the change in velocity to the time interval:
$$
a_m = \frac{\Delta v}{\Delta t} = \frac{v(t_2) - v(t_1)}{t_2 - t_1} .
$$
It is measured in $\mathrm{m/s^2}$, and a constant acceleration of $1\,\mathrm{m/s^2}$ corresponds to a change in velocity of $1\,\mathrm{m/s}$ every second. A car that goes from rest to $100\,\mathrm{km/h}$, that is, to $27.8\,\mathrm{m/s}$, in $10\,\mathrm{s}$ has an average acceleration of $2.78\,\mathrm{m/s^2}$.
:::

:::definizione{#accelerazione-istantanea titolo="Instantaneous acceleration"}
The **instantaneous acceleration** is the derivative of the velocity with respect to time, and therefore the second derivative of the equation of motion:
$$
a(t) = \frac{dv}{dt} = \frac{d^2 x}{dt^2} .
$$
In the graph of $v(t)$ the acceleration is the slope of the tangent; in the position–time graph the sign of $a$ gives the concavity, upward where $a > 0$ and downward where $a < 0$. For $x(t) = 4t - t^2$ one has $v(t) = 4 - 2t$ and $a(t) = -2\,\mathrm{m/s^2}$ for every $t$, and indeed the position–time graph is a parabola concave downward.
:::

:::osservazione{#segno-accelerazione titolo="Speeding up and slowing down"}
The sign of the acceleration depends on the orientation chosen for the axis; to establish whether the point is getting faster or slower, the signs of $v$ and $a$ are compared. Since
$$
\frac{d}{dt}\left(v^2\right) = 2\,v\,a ,
$$
the magnitude of the velocity increases where $v$ and $a$ have the same sign, and the motion is called **accelerated**, and decreases where they have opposite signs, and the motion is called **decelerated**. For $x(t) = 4t - t^2$, in the interval $0 < t < 2\,\mathrm{s}$ one has $v > 0$ and $a < 0$, so the point slows down until it stops; for $t > 2\,\mathrm{s}$ velocity and acceleration are both negative, so the point moves back faster and faster.
:::

## Uniform rectilinear motion

:::richiamo{titolo="Functions with zero derivative"}
If $f$ is differentiable on an interval and $f'(t) = 0$ for every $t$ in the interval, then $f$ is constant on that interval.
:::

:::definizione{#moto-rettilineo-uniforme titolo="Uniform rectilinear motion"}
A rectilinear motion is **uniform** if the velocity is constant, $v(t) = v$ for every $t$, and hence the acceleration is zero. If at the instant $t_0$ the point is at $x_0$, the equation of motion is
$$
x(t) = x_0 + v\,(t - t_0) ,
$$
which for $t_0 = 0$ becomes $x(t) = x_0 + v\,t$. The formula follows from the fact that the function $x(t) - v\,t$ has derivative $v - v = 0$, so it is constant, and its constant value is $x_0 - v\,t_0$. The position–time graph is a straight line of slope $v$ through the point $(t_0, x_0)$, and a displacement $\Delta x$ requires the time $\Delta t = \dfrac{\Delta x}{v}$. Uniform rectilinear motion describes a car at cruising speed, a conveyor belt, the propagation of sound in still air.
:::

:::osservazione{#problemi-di-incontro titolo="Meeting problems"}
When two points move on the same line, both are described in the *same* reference frame, with equations of motion $x_A(t)$ and $x_B(t)$. The two points meet at the instants at which they occupy the same position, that is, at the solutions of the equation
$$
x_A(t) = x_B(t) ,
$$
and the position of the meeting is obtained by substituting the instant found into one of the two laws. A point moving in the negative orientation of the axis has negative velocity, and a point that starts with a delay $t_0$ has a law that contains $t - t_0$ and holds for $t \geq t_0$. For example, with $x$ in meters and $t$ in seconds, car $A$ starts from $x = 0$ at $10\,\mathrm{m/s}$ and at the same instant car $B$ starts from $x = 300\,\mathrm{m}$ toward $A$ at $5\,\mathrm{m/s}$. Then $x_A(t) = 10\,t$ and $x_B(t) = 300 - 5\,t$; the equation $10\,t = 300 - 5\,t$ has the solution $t = 20\,\mathrm{s}$, and the meeting takes place at $x = 200\,\mathrm{m}$.

::grafico{f="10*x+0*sqrt(x);300-5*x+0*sqrt(x)" punti="20,200,pieno" segmenti="20,0,20,200" xmin=-5 xmax=45 ymin=-50 ymax=450 nomi="t,x" titolo="Equations of motion $x_A(t) = 10\,t$ and $x_B(t) = 300 - 5\,t$: the two lines intersect at the point $(20, 200)$, so the meeting takes place after $20\,\mathrm{s}$ at the position $x = 200\,\mathrm{m}$"}

:::

## Uniformly accelerated motion

:::definizione{#moto-uniformemente-accelerato titolo="Uniformly accelerated motion"}
A rectilinear motion is **uniformly accelerated** if the acceleration is constant, $a(t) = a$ for every $t$. In this case the velocity changes by the same amount in equal time intervals, and the average acceleration over every interval coincides with $a$. Uniformly accelerated motion describes to a good approximation the starting and braking of a vehicle, the fall of a stone when air resistance is negligible and the descent of a body along a smooth inclined plane; for the forces that produce a constant acceleration we refer to the topic on Newton's laws.
:::

::::teorema{#leggi-del-moto-uniformemente-accelerato titolo="Laws of uniformly accelerated motion"}
Let $a$ be constant and let $x_0$ and $v_0$ be the position and the velocity at the instant $t = 0$. Then for every $t$
$$
v(t) = v_0 + a\,t ,
\qquad
x(t) = x_0 + v_0\,t + \frac{1}{2}\,a\,t^2 .
$$
The graph of the velocity is a straight line of slope $a$, the position–time graph is a parabola concave upward if $a > 0$ and concave downward if $a < 0$. With the two laws one answers every question about the motion, by writing the required quantity as a function of $t$ and imposing the required condition. A car traveling at $v_0 = 20\,\mathrm{m/s}$ that brakes with $a = -5.0\,\mathrm{m/s^2}$ stops when $v(t) = 0$, that is, after $t = \dfrac{v_0}{|a|} = 4.0\,\mathrm{s}$, and in that time it travels $v_0\,t + \dfrac{1}{2}\,a\,t^2 = 80\,\mathrm{m} - 40\,\mathrm{m} = 40\,\mathrm{m}$.

::grafico{f="20*x-2.5*x^2+0*sqrt(x*(4-x))" punti="4,40,pieno" segmenti="0,40,4,40;4,0,4,40" xmin=-1 xmax=6 ymin=-5 ymax=45 nomi="t,x" titolo="Position–time graph of the braking, $x(t) = 20\,t - 2.5\,t^2$: the parabola has a horizontal tangent at the stopping instant $t = 4\,\mathrm{s}$, at the position $x = 40\,\mathrm{m}$"}

:::dimostrazione
The function $v(t) - a\,t$ has derivative $a - a = 0$, so it is constant; since at $t = 0$ it equals $v_0$, one has $v(t) = v_0 + a\,t$. In the same way the function
$$
x(t) - v_0\,t - \frac{1}{2}\,a\,t^2
$$
has derivative $v(t) - v_0 - a\,t = 0$, so it is constant and equal to its value at $t = 0$, namely $x_0$. Therefore $x(t) = x_0 + v_0\,t + \dfrac{1}{2}\,a\,t^2$.
:::
::::

::::teorema{#relazione-velocita-spazio titolo="Relation between velocity and displacement"}
In uniformly accelerated motion, with the notation of the laws of motion, at every instant
$$
v^2 = v_0^2 + 2\,a\,(x - x_0) ,
$$
where $x$ and $v$ are the position and the velocity at the same instant. Moreover, the average velocity between the instant $0$ and the instant $t$ is the arithmetic mean of the initial and final velocities, $v_m = \dfrac{v_0 + v}{2}$. The first formula does not contain time, and it is used when time is neither a datum nor an unknown of the problem. For example an airplane that starts from rest with acceleration $2.0\,\mathrm{m/s^2}$ and takes off at $80\,\mathrm{m/s}$ needs a runway with a length of at least
$$
\frac{v^2}{2a} = \frac{(80\,\mathrm{m/s})^2}{2 \cdot 2.0\,\mathrm{m/s^2}} = 1600\,\mathrm{m} .
$$

:::dimostrazione
If $a = 0$ the velocity is constant and the formula reduces to $v^2 = v_0^2$. If $a \neq 0$, the velocity law gives $t = \dfrac{v - v_0}{a}$, and substituting into the equation of motion gives
$$
\begin{aligned}
x - x_0 &= v_0\,\frac{v - v_0}{a} + \frac{1}{2}\,a\,\frac{(v - v_0)^2}{a^2} \\[6pt]
&= \frac{2 v_0 (v - v_0) + (v - v_0)^2}{2a} \\[6pt]
&= \frac{(v - v_0)(v + v_0)}{2a} = \frac{v^2 - v_0^2}{2a} ;
\end{aligned}
$$
multiplying by $2a$ gives the first claim. For the second, the equation of motion gives $\dfrac{x - x_0}{t} = v_0 + \dfrac{1}{2}\,a\,t$, and since $a\,t = v - v_0$ this average velocity equals $v_0 + \dfrac{v - v_0}{2} = \dfrac{v_0 + v}{2}$.
:::
::::

## Free fall and vertical launch

:::teorema{#legge-caduta-dei-gravi titolo="Law of falling bodies"}
It is an experimental law, established by Galileo: near the Earth's surface and when air resistance is negligible, all bodies fall with the same constant acceleration, directed downward, of magnitude
$$
g = 9.81\,\mathrm{m/s^2} .
$$
The vertical motion of a body that is dropped or thrown upward is therefore uniformly accelerated, and the laws of uniformly accelerated motion apply with $a = -g$ if the axis is oriented upward, with $a = +g$ if it is oriented downward. The acceleration is the same for every mass, therefore a stone and a lead sphere dropped together reach the ground together, as long as air resistance is negligible. The value of $g$ varies slightly with latitude and altitude, and for its origin we refer to the topic on gravitation. A body dropped from rest from a height $h = 20\,\mathrm{m}$ hits the ground after $t = \sqrt{\dfrac{2h}{g}} = 2.0\,\mathrm{s}$, with a speed of $\sqrt{2gh} = 19.8\,\mathrm{m/s}$.
:::

:::teorema{#lancio-verticale titolo="Laws of vertical launch"}
Orient the $y$-axis along the vertical, upward. A body that at the instant $t = 0$ is at height $y_0$ with velocity $v_0$, positive if it is thrown upward and negative if it is thrown downward, moves with
$$
v(t) = v_0 - g\,t ,
\qquad
y(t) = y_0 + v_0\,t - \frac{1}{2}\,g\,t^2 ,
$$
until the instant it hits the ground. The two laws are the laws of uniformly accelerated motion with $a = -g$, and the case $v_0 = 0$ is the fall from rest. The instant of arrival at the ground is the positive solution of the quadratic equation $y(t) = 0$, and the arrival velocity can also be obtained without the time from the relation $v^2 = v_0^2 + 2g\,y_0$.
:::

::::teorema{#altezza-massima titolo="Rise time and maximum height"}
A body thrown upward from height $y_0$ with velocity $v_0 > 0$, with negligible air resistance, reaches the highest point at the instant $t_s$ and at the height $h_{\max}$ given by
$$
t_s = \frac{v_0}{g} ,
\qquad
h_{\max} = y_0 + \frac{v_0^2}{2g} .
$$
The motion is symmetric, that is, the body passes through the starting height again at the instant $2\,t_s$ with velocity $-v_0$, and it passes through every intermediate height twice, with opposite velocities. For $v_0 = 15\,\mathrm{m/s}$ one has $t_s = 1.53\,\mathrm{s}$, and the body rises $\dfrac{v_0^2}{2g} = 11.5\,\mathrm{m}$ above the launch point.

::grafico{f="15*x-4.905*x^2+0*sqrt(x*(3.0581-x))" punti="1.529,11.47,pieno" segmenti="1.529,0,1.529,11.47" xmin=-1 xmax=4 ymin=-2 ymax=14 nomi="t,y" titolo="Launch from the ground with $v_0 = 15\,\mathrm{m/s}$: the height $y(t) = v_0\,t - \dfrac{1}{2}\,g\,t^2$ is maximum, $11.5\,\mathrm{m}$, at the instant $t_s = 1.53\,\mathrm{s}$, and the graph is symmetric with respect to the line $t = t_s$"}

:::dimostrazione
At the highest point the velocity goes from positive to negative, so it vanishes, and the equation $v_0 - g\,t_s = 0$ gives $t_s = \dfrac{v_0}{g}$. Substituting into the equation of motion gives
$$
y(t_s) = y_0 + v_0\,\frac{v_0}{g} - \frac{1}{2}\,g\,\frac{v_0^2}{g^2} = y_0 + \frac{v_0^2}{2g} .
$$
Completing the square, the equation of motion can be written $y(t) = h_{\max} - \dfrac{1}{2}\,g\,(t - t_s)^2$, so the heights at the instants $t_s - \tau$ and $t_s + \tau$ coincide, while the velocities $v(t) = -g\,(t - t_s)$ at those instants are opposite. With $\tau = t_s$ one obtains the return to height $y_0$ at the instant $2\,t_s$ with velocity $-g\,t_s = -v_0$.
:::
::::

## Motion graphs and areas

:::osservazione{#grafici-orari titolo="Reading motion graphs"}
The graphs $x(t)$, $v(t)$ and $a(t)$ of the same motion are related by derivatives. The slope of the graph of $x(t)$ is the velocity, and the slope of the graph of $v(t)$ is the acceleration. In uniform motion the graph of $x(t)$ is a straight line, that of $v(t)$ a horizontal line and that of $a(t)$ coincides with the time axis; in uniformly accelerated motion $x(t)$ is a parabola, $v(t)$ a sloping line and $a(t)$ a horizontal line. From the velocity graph one therefore reads the instants at which the point is at rest ($v = 0$), those at which it reverses its motion ($v$ changes sign) and the phases at constant velocity (horizontal segments). The inverse step, from the velocity graph to the position, is done with areas.
:::

:::richiamo{titolo="Fundamental theorem of calculus"}
If $f$ is continuous on $[a, b]$ and $F$ is an antiderivative of $f$, then $\displaystyle\int_a^b f(t)\,dt = F(b) - F(a)$. For a positive function the integral is the area of the region between the graph and the horizontal axis; for the computation of integrals we refer to the topic on integral calculus in Mathematical Analysis 1.
:::

::::teorema{#area-sotto-il-grafico-della-velocita titolo="Displacement as the area under the velocity graph"}
Let $v(t)$ be continuous on the interval $[t_1, t_2]$, with a finite number of sign changes. Then the displacement and the distance traveled between $t_1$ and $t_2$ are
$$
\Delta x = \int_{t_1}^{t_2} v(t)\,dt ,
\qquad
d = \int_{t_1}^{t_2} |v(t)|\,dt .
$$
In the velocity graph the displacement is the signed area between the graph and the time axis, in which the parts above the axis count positively and those below negatively; the distance traveled is the sum of the areas all taken with positive sign. In the same way the change in velocity is the signed area under the acceleration graph, $\Delta v = \displaystyle\int_{t_1}^{t_2} a(t)\,dt$. When the graph of $v(t)$ consists of straight segments, the areas are triangles, rectangles and trapezoids, and they are computed with elementary geometry. For the law $x(t) = 4t - t^2$, whose velocity is $v(t) = 4 - 2t$, between $0$ and $3\,\mathrm{s}$ one obtains $\Delta x = 3\,\mathrm{m}$ and $d = 5\,\mathrm{m}$, in agreement with $x(3) - x(0) = 3\,\mathrm{m}$.

::grafico{f="4-2*x+0*sqrt(x*(3-x))" area="4-2*x;0;0;2|0;4-2*x;2;3" xmin=-1 xmax=4 ymin=-3 ymax=5 nomi="t,v" titolo="For $v(t) = 4 - 2t$ between $0$ and $3\,\mathrm{s}$ the triangle above the axis has area $4$ and the one below has area $1$: the displacement is $4 - 1 = 3\,\mathrm{m}$, the distance traveled $4 + 1 = 5\,\mathrm{m}$"}

:::dimostrazione
Since $\dfrac{dx}{dt} = v$, the equation of motion is an antiderivative of the velocity, and by the **fundamental theorem of calculus** $\displaystyle\int_{t_1}^{t_2} v(t)\,dt = x(t_2) - x(t_1) = \Delta x$. For the distance, $[t_1, t_2]$ is divided into the intervals in which $v$ does not change sign. In each of them the point does not reverse its motion, so the distance traveled is the absolute value of the displacement, that is, $\left|\displaystyle\int v\,dt\right| = \displaystyle\int |v|\,dt$; summing over the intervals gives the second formula. The formula for $\Delta v$ is proved in the same way, because $v$ is an antiderivative of $a$.
:::
::::

:::esempio{titolo="Distance traveled by an elevator"}
An elevator starts from rest, accelerates uniformly for $2.0\,\mathrm{s}$ up to $3.0\,\mathrm{m/s}$, rises at constant velocity for $6.0\,\mathrm{s}$ and then slows down uniformly until it stops in $2.0\,\mathrm{s}$. The velocity graph bounds a trapezoid with the time axis, and the distance traveled is its area: $3.0\,\mathrm{m}$ in the first phase (triangle), $18\,\mathrm{m}$ in the second (rectangle) and $3.0\,\mathrm{m}$ in the third, $24\,\mathrm{m}$ in total. The accelerations of the three phases are the slopes of the three segments, namely $1.5\,\mathrm{m/s^2}$, $0$ and $-1.5\,\mathrm{m/s^2}$.

::grafico{f="min(1.5*x,3,1.5*(10-x))+0*sqrt(x*(10-x))" area="min(1.5*x,3,1.5*(10-x));0;0;10" xmin=-2 xmax=12 ymin=-1 ymax=4 nomi="t,v" titolo="Velocity of the elevator in $\mathrm{m/s}$ as a function of time in seconds: the area of the trapezoid, $3 + 18 + 3 = 24$, is the distance traveled in meters"}

:::

## From acceleration to the equation of motion

::::teorema{#integrazione-della-legge-oraria titolo="Equation of motion from the acceleration"}
Let $a(t)$ be continuous and let $x_0$ and $v_0$ be the position and the velocity at the instant $t_0$. Then the motion is uniquely determined, and for every $t$
$$
v(t) = v_0 + \int_{t_0}^{t} a(s)\,ds ,
\qquad
x(t) = x_0 + \int_{t_0}^{t} v(s)\,ds .
$$
One integrates twice, first the acceleration to obtain the velocity and then the velocity to obtain the equation of motion, and at each integration the constant is fixed by the corresponding initial condition. For example, with $a(t) = 2t$ ($a$ in $\mathrm{m/s^2}$, $t$ in seconds), $v_0 = 1\,\mathrm{m/s}$ and $x_0 = 0$ at the instant $t_0 = 0$, one obtains
$$
v(t) = 1 + t^2 ,
\qquad
x(t) = t + \frac{t^3}{3} ,
$$
so at the instant $t = 3\,\mathrm{s}$ the point is at $x = 12\,\mathrm{m}$ with velocity $10\,\mathrm{m/s}$. The laws of uniformly accelerated motion are the special case of constant $a$.

:::dimostrazione
The function $w(t) = v_0 + \displaystyle\int_{t_0}^{t} a(s)\,ds$ has derivative $a(t)$ by the **fundamental theorem of calculus** and equals $v_0$ at $t_0$. The difference $v(t) - w(t)$ therefore has zero derivative and is zero at $t_0$, so it is identically zero and $v = w$. The same reasoning applied to the equation of motion, which has derivative $v$ and equals $x_0$ at $t_0$, gives the second formula. In particular two motions with the same acceleration and the same initial conditions coincide.
:::
::::

:::osservazione{#condizioni-iniziali titolo="Initial conditions"}
Two points with the same acceleration can start from different positions with different velocities, and then they have different equations of motion. To determine the equation of motion, therefore, two data are needed in addition to the acceleration: the position $x_0$ and the velocity $v_0$ at an instant $t_0$, called **initial conditions**. In dynamics the acceleration is determined by the forces through Newton's second law, and the motion is obtained by integrating with the initial conditions (we refer to the topic on Newton's laws). When the acceleration is known as a function of time, two definite integrals suffice; when it depends on the velocity or on the position, differential equations are used.
:::

## Velocity-dependent acceleration

:::richiamo{titolo="Separable differential equations"}
If $f$ is continuous and $f(v_0) \neq 0$, the solution of the equation $\dfrac{dv}{dt} = f(v)$ with $v(t_0) = v_0$ satisfies, as long as $f(v)$ does not vanish, the equality $\displaystyle\int_{v_0}^{v} \frac{du}{f(u)} = t - t_0$. For the theory we refer to the topic on differential equations in Mathematical Analysis 1.
:::

::::teorema{#accelerazione-proporzionale-alla-velocita titolo="Motion with acceleration proportional to velocity"}
Let $a = -k\,v$ with $k > 0$ constant, and let $x_0$ and $v_0$ be the position and the velocity at the instant $t = 0$. Then
$$
v(t) = v_0\,e^{-k t} ,
\qquad
x(t) = x_0 + \frac{v_0}{k}\left(1 - e^{-k t}\right) .
$$
It is the model of a body slowed by a viscous resistance, like a boat with its engine off or a small sphere moving slowly in a liquid; the constant $k$ is measured in $\mathrm{s^{-1}}$. The velocity decreases exponentially and halves every $\dfrac{\ln 2}{k}$ seconds, while the position tends to $x_0 + \dfrac{v_0}{k}$; therefore the body travels in total the finite distance $\dfrac{v_0}{k}$. For a boat with $v_0 = 5.0\,\mathrm{m/s}$ and $k = 0.50\,\mathrm{s^{-1}}$ the velocity halves every $1.4\,\mathrm{s}$ and the total distance traveled is $10\,\mathrm{m}$.

::grafico{f="5*exp(-0.5*x)+0*sqrt(x)" area="5*exp(-0.5*x);0;0;9" xmin=-1 xmax=9 ymin=-1 ymax=6 nomi="t,v" titolo="Velocity of the boat, $v(t) = 5\,e^{-0.5\,t}$: the region under the graph, extended to all positive times, has area $\dfrac{v_0}{k} = 10\,\mathrm{m}$, the total distance traveled"}

:::dimostrazione
If $v_0 = 0$ the constant function $v = 0$ solves the equation $\dfrac{dv}{dt} = -k\,v$ with the initial condition, and the point remains at rest. If $v_0 \neq 0$, by the uniqueness of the solution of the Cauchy problem the velocity never vanishes and keeps the sign of $v_0$, so the variables can be separated:
$$
\int_{v_0}^{v} \frac{du}{u} = -\int_0^t k\,ds
\quad\Longrightarrow\quad
\ln\frac{v}{v_0} = -k\,t
\quad\Longrightarrow\quad
v(t) = v_0\,e^{-k t} .
$$
Integrating the velocity with the condition $x(0) = x_0$ gives
$$
x(t) = x_0 + \int_0^t v_0\,e^{-k s}\,ds = x_0 + \frac{v_0}{k}\left(1 - e^{-k t}\right) .
$$
:::
::::

:::osservazione{#velocita-limite titolo="Terminal velocity"}
If a constant acceleration $A > 0$ is added to the viscous resistance, as for a body falling in a fluid, the acceleration is $a = A - k\,v$. Starting from rest, separation of variables gives $\displaystyle\int_0^{v} \frac{du}{A - k\,u} = t$, that is, $-\dfrac{1}{k}\ln\dfrac{A - k\,v}{A} = t$, and hence
$$
v(t) = \frac{A}{k}\left(1 - e^{-k t}\right) .
$$
The velocity increases and tends to the **terminal velocity** $v_L = \dfrac{A}{k}$, the value at which the acceleration vanishes; after a time equal to a few times $\dfrac{1}{k}$ the motion is practically uniform. For $A = 8.0\,\mathrm{m/s^2}$ and $k = 2.0\,\mathrm{s^{-1}}$ the terminal velocity is $4.0\,\mathrm{m/s}$, and after $1.5\,\mathrm{s}$ the velocity has reached $95\%$ of it.

::grafico{f="4*(1-exp(-2*x))+0*sqrt(x)" asintoti="y=4" segmenti="1.5,0,1.5,3.8" xmin=-1 xmax=4 ymin=-1 ymax=5 nomi="t,v" titolo="With $a = A - k\,v$ and starting from rest the velocity tends to the terminal velocity $v_L = \dfrac{A}{k}$; for $A = 8\,\mathrm{m/s^2}$ and $k = 2\,\mathrm{s^{-1}}$ one has $v_L = 4\,\mathrm{m/s}$"}

:::

:::osservazione{#accelerazione-funzione-della-posizione titolo="Acceleration as a function of position"}
When the acceleration is given as a function of position, $a = a(x)$, or the velocity is needed as a function of position, the chain rule is used. If the point does not reverse its motion, the velocity can be regarded as a function of $x$, and
$$
a = \frac{dv}{dt} = \frac{dv}{dx}\,\frac{dx}{dt} = v\,\frac{dv}{dx} = \frac{d}{dx}\left(\frac{1}{2}\,v^2\right) .
$$
Integrating between $x_0$ and $x$ gives
$$
\frac{1}{2}\,v^2 - \frac{1}{2}\,v_0^2 = \int_{x_0}^{x} a(\xi)\,d\xi ,
$$
which for constant $a$ is the relation $v^2 = v_0^2 + 2a\,(x - x_0)$ of uniformly accelerated motion. Multiplied by the mass, the same equality is the work–kinetic energy theorem, for which we refer to the topic on work and energy. With $a = -c\,v^2$ and $v > 0$ one obtains $v\,\dfrac{dv}{dx} = -c\,v^2$, that is, $\dfrac{dv}{dx} = -c\,v$, and hence $v = v_0\,e^{-c\,(x - x_0)}$.
:::
