---
titolo: "Special relativity: space and time"
sommario: What Einstein’s postulates state and how they lead to the relativity of simultaneity, time dilation, length contraction, the Lorentz transformations, the relativistic velocity-addition law, and the invariant interval, with Minkowski diagrams and the twin paradox.
---

## Galilean relativity

:::definizione{#sistema-inerziale titolo="Events and inertial frames of reference"}
An **event** is something that happens at one point in space and one instant in time, such as a firecracker exploding or a light ray reaching a mirror. To describe it, we need three spatial coordinates $x$, $y$, $z$, and the time $t$, measured by an observer using rulers and clocks at rest relative to that observer. This collection of rulers and clocks is called a **frame of reference**. A frame of reference is **inertial** if the law of inertia holds in it: an object subject to zero net force remains at rest or moves in a straight line at constant speed.

A frame moving in a straight line at constant speed relative to an inertial frame is also inertial. For example, a station platform and a train moving at constant speed along a straight track are both inertial to a good approximation. A train that is braking is *not* inertial: an object resting on its smooth floor slides forward even though no force pushes it forward.
:::

:::definizione{#trasformazioni-galileo titolo="Galilean transformations"}
Consider two inertial frames $S$ and $S'$ with parallel axes. Frame $S'$ moves relative to $S$ at constant velocity $v$ in the positive direction of the $x$-axis, and the origins $O$ and $O'$ coincide at $t = t' = 0$. The two frames have this orientation throughout the chapter. If time passes at the same rate in both frames, an event in $S$ with coordinates $(x, y, z, t)$ has the following coordinates in $S'$:
$$
\begin{cases}
x' = x - v t \\
y' = y \\
z' = z \\
t' = t
\end{cases}
$$
These relations are called the **Galilean transformations**. The first says that by time $t$, the origin $O'$ has moved through $vt$, so the displacement of the event from $O'$ is $x - vt$. The last expresses the assumption of **absolute time**, according to which all observers measure the same time. For example, if a train $S'$ travels at $v = 20\,\mathrm{m/s}$ and, at time $t = 3.0\,\mathrm{s}$, a firecracker explodes at point $x = 100\,\mathrm{m}$ on the platform, the explosion occurs at $x' = 100\,\mathrm{m} - 20 \cdot 3.0\,\mathrm{m} = 40\,\mathrm{m}$ in the train frame.

::grafico{assi=0 uguale=1 unicolore=1 vettori="0,0,8.6,0;0,0,0,3.4;3,0.35,8.6,0.35;3,0.35,3,3.4;4.2,3.0,5.6,3.0" punti="6.5,2.2,pieno,P" segmenti="6.5,2.2,6.5,0;0,-0.45,3,-0.45;3,-0.85,6.5,-0.85" etichette="8.7,-0.25,x;-0.35,3.4,y;8.7,0.55,x′;3.15,3.4,y′;-0.35,-0.3,O;2.55,0.65,O′;1.25,-0.75,vt;4.5,-1.15,x′;4.75,3.3,v" xmin=-0.8 xmax=9.3 ymin=-1.5 ymax=3.8 titolo="Frame $S'$ moves relative to $S$ at velocity $v$ along the $x$-axis. At time $t$, the origin $O'$ is a distance $vt$ from $O$, so the horizontal coordinate of event $P$ is $x' = x - vt$"}

:::

:::osservazione{#composizione-galileiana titolo="Galilean addition of velocities"}
An object moves along the $x$-axis. During a time interval $\Delta t$, its displacement in $S$ is $\Delta x$. The Galilean transformations give $\Delta x' = \Delta x - v\,\Delta t$ and $\Delta t' = \Delta t$. Dividing the displacements by the corresponding time intervals relates the velocity $u = \dfrac{\Delta x}{\Delta t}$ in $S$ to the velocity $u' = \dfrac{\Delta x'}{\Delta t'}$ in $S'$:
$$
u = u' + v .
$$
A passenger walking at $u' = 1.5\,\mathrm{m/s}$ toward the front of a train traveling at $v = 20\,\mathrm{m/s}$ has velocity $u = 21.5\,\mathrm{m/s}$ relative to the platform. Applied to light, the same law would predict different speeds of light in the two frames: a ray emitted forward from the train would have speed $c + v$ relative to the platform.
:::

:::teorema{#principio-relativita-galileiana titolo="Galilean principle of relativity"}
The laws of mechanics have the same form in all inertial frames of reference. Galileo stated this principle on the basis of experiment. It follows that no mechanical experiment performed inside an inertial frame can reveal whether the frame is at rest or moving in a straight line at constant speed. For example, a small ball dropped from a height of $1.0\,\mathrm{m}$ in a train moving at constant velocity hits the floor after $\sqrt{\dfrac{2 \cdot 1.0}{9.8}}\,\mathrm{s} \approx 0.45\,\mathrm{s}$, directly beneath the release point, just as it would in a stationary train.
:::

## The speed of light and Einstein’s postulates

:::osservazione{#michelson-morley titolo="The Michelson–Morley experiment"}
In the nineteenth century it was thought that light traveled through a medium called the ether, and that $c$ was its speed relative to the ether. Earth moves around the Sun at about $3 \cdot 10^{4}\,\mathrm{m/s}$, so Galilean velocity addition predicted that light would travel at different speeds in different directions relative to Earth.

In 1887 Michelson and Morley used an interferometer to compare the times light took to travel along two perpendicular arms of equal length. A difference in travel times would shift the interference fringes when the apparatus was rotated. No such shift was observed within the precision of the instrument. Later experiments of increasing precision confirmed the result. The conclusion is that the speed of light is the same in every direction for an observer on Earth, contrary to the prediction of Galilean velocity addition.
:::

:::teorema{#postulati-einstein titolo="Einstein’s postulates"}
In 1905 Einstein based **special relativity** on two postulates.

- **Principle of relativity**: all laws of physics, including the laws of mechanics and electromagnetism, have the same form in all inertial frames of reference.
- **Invariance of the speed of light**: light travels through a vacuum at the same speed $c = 3.00 \cdot 10^{8}\,\mathrm{m/s}$ in all inertial frames, regardless of the motion of the source.

These postulates are assumptions rather than results derived by proof. Their consequences have been confirmed by every experimental test. The second postulate is incompatible with the Galilean addition law $u = u' + v$, so the Galilean transformations and the assumption of absolute time must be replaced. For example, light emitted forward by the headlights of a train traveling at $20\,\mathrm{m/s}$ has speed $c$ relative to both the train and the platform, rather than $c + 20\,\mathrm{m/s}$.
:::

## Relativity of simultaneity

:::definizione{#eventi-simultanei titolo="Simultaneous events and synchronized clocks"}
Two events occurring at different points in an inertial frame are **simultaneous** in that frame if clocks at rest at the two points show the same time. The clocks must be **synchronized**. Light is used to synchronize them because, by the second postulate, it travels at speed $c$ in every direction. A lamp midway between two clocks emits a flash, and each clock is started when the flash reaches it. The flash reaches the clocks at the same instant because it travels equal distances at the same speed. For example, if the clocks are $600\,\mathrm{m}$ apart, each receives the flash $\dfrac{300}{3.00 \cdot 10^{8}}\,\mathrm{s} = 1.00\,\mu\mathrm{s}$ after it was emitted at the midpoint.
:::

:::esempio{#treno-di-einstein titolo="Einstein’s train car"}
A train car moves at velocity $v = 0.60\,c$ relative to the platform. A lamp at the center of the car emits a flash toward both ends, the rear $A$ and the front $B$. In the car’s frame $S'$, the lamp is equally distant from $A$ and $B$, and the light has speed $c$ in both directions. It thus reaches $A$ and $B$ at the same instant: the arrivals are **simultaneous** in $S'$.

In the platform frame $S$, light still travels at speed $c$ in both directions, but the rear $A$ moves toward the light while the front $B$ moves away from it. If in $S$ the car has length $48\,\mathrm{m}$, each end is initially a distance $24\,\mathrm{m}$ from the lamp. The separation between the light and the rear decreases at a rate $c + v$ as measured in $S$, while the separation between the light and the front decreases at a rate $c - v$. Thus in $S$,
$$
t_A = \frac{24\,\mathrm{m}}{c + v} = \frac{24}{1.60 \cdot 3.00 \cdot 10^{8}}\,\mathrm{s} = 5.0 \cdot 10^{-8}\,\mathrm{s} ,
\qquad
t_B = \frac{24\,\mathrm{m}}{c - v} = \frac{24}{0.40 \cdot 3.00 \cdot 10^{8}}\,\mathrm{s} = 2.0 \cdot 10^{-7}\,\mathrm{s} .
$$
In the platform frame the flash reaches the rear first and the front $1.5 \cdot 10^{-7}\,\mathrm{s}$ later. The arrivals are therefore *not* simultaneous in $S$.

::grafico{assi=0 uguale=1 poligoni="0,0 8,0 8,1.6 0,1.6" punti="4,0.8,pieno" vettori="3.6,0.8,0.4,0.8;4.4,0.8,7.6,0.8;5,2.3,7,2.3" linee="-1,-0.25 9.5,-0.25" etichette="-0.45,0.65,A;8.2,0.65,B;1.9,1.05,c;5.9,1.05,c;5.85,2.55,v" xmin=-1.2 xmax=9.7 ymin=-0.6 ymax=2.9 titolo="The flash emitted at the center of the car reaches the rear $A$ and the front $B$ at the same time in the car frame. In the platform frame, where the car has velocity $v$, the light first reaches $A$, which is moving toward it"}

:::

:::osservazione{#relativita-simultaneita titolo="Relativity of simultaneity"}
Two events at different positions that are simultaneous in one inertial frame are *not* simultaneous in another inertial frame moving relative to the first along the line joining their positions. Simultaneity thus depends on the frame of reference. The time difference can be calculated using the Lorentz transformations and becomes appreciable only when $v$ is close to $c$. For example, for Einstein’s train car with $v = 20\,\mathrm{m/s}$, the arrivals in $S$ would be separated by about $10^{-14}\,\mathrm{s}$.
:::

## Time dilation

:::definizione{#fattore-di-lorentz titolo="Lorentz factor"}
For a frame moving at speed $v$ less than $c$, define
$$
\beta = \frac{v}{c} ,
\qquad
\gamma = \frac{1}{\sqrt{1 - \dfrac{v^2}{c^2}}} = \frac{1}{\sqrt{1 - \beta^2}} .
$$
The number $\gamma$ is called the **Lorentz factor**. It is dimensionless, equals $1$ for $v = 0$, is always greater than $1$ for $0 < v < c$, and increases without bound as $v$ approaches $c$. Some of its values are
$$
\beta = 0.60 \;\Rightarrow\; \gamma = 1.25 ,
\qquad
\beta = 0.80 \;\Rightarrow\; \gamma \approx 1.67 ,
\qquad
\beta = 0.99 \;\Rightarrow\; \gamma \approx 7.09 .
$$
For example, with $\beta = 0.80$ we have $1 - \beta^2 = 1 - 0.64 = 0.36$, so $\gamma = \dfrac{1}{\sqrt{0.36}} = \dfrac{1}{0.60} \approx 1.67$.

::grafico{f="1/sqrt(1-x^2)" punti="0.6,1.25,pieno;0.8,1.667,pieno" asintoti="x=1" xmin=0 xmax=1.2 ymin=0 ymax=8 nomi="β,γ" legenda=0 titolo="Lorentz factor $\gamma = \dfrac{1}{\sqrt{1 - \beta^2}}$ as a function of $\beta = \dfrac{v}{c}$. It remains close to $1$ up to $\beta \approx 0.3$ and approaches $+\infty$ as $\beta \to 1$"}

:::

:::definizione{#tempo-proprio titolo="Proper time"}
Consider two events occurring *at the same point* in an inertial frame, for example, two ticks of a clock at rest in that frame. The time interval between the events as measured in that frame is called the **proper time**, denoted by $\Delta t_0$. Proper time is measured with a single clock. In every other inertial frame moving relative to it, the events occur at different places and the time interval is measured using two synchronized clocks. For example, an hour recorded by an astronaut’s clock at rest aboard the spacecraft is a proper time interval for the spacecraft.
:::

::::teorema{#dilatazione-tempi titolo="Time dilation"}
Suppose two events occur at the same point in an inertial frame $S'$ and are separated by a proper time $\Delta t_0$. In an inertial frame $S$, relative to which $S'$ moves at speed $v$, the time interval between the events is
$$
\Delta t = \gamma\, \Delta t_0 .
$$
Since $\gamma > 1$, the interval measured in $S$ is longer than the proper time. Thus, for an observer in $S$, the moving clock runs more slowly. For example, if a spacecraft travels at $v = 0.80\,c$ relative to Earth, an hour recorded by the onboard clock lasts $\Delta t = 1.67 \cdot 60\,\mathrm{min} \approx 100\,\mathrm{min}$ for observers on Earth.

::grafico{assi=0 uguale=1 linee="-0.6,0 0.6,0;-0.6,3 0.6,3;2.4,0 3.6,0;4.4,3 5.6,3;6.4,0 7.6,0" vettori="0,0.05,0,2.95;3,0.05,4.97,2.95;5.03,2.95,7,0.05;3.4,-0.75,6.6,-0.75" segmenti="5,0,5,3" etichette="0.2,1.4,d;5.15,1.4,d;3.4,1.75,ℓ;6.2,1.75,ℓ;4.75,-1.2,vΔt" xmin=-1 xmax=8 ymin=-1.5 ymax=3.5 legenda=0 titolo="A light clock at rest in $S'$ (left) and the same clock observed in $S$, relative to which it moves at speed $v$ (right). In $S$ the light travels along the two sloping sides, each of length $\ell = \dfrac{c\,\Delta t}{2}$"}

:::dimostrazione
Measure the same interval using a **light clock** made of two parallel mirrors a distance $d$ apart, at rest in $S'$, with the line joining the mirrors perpendicular to the velocity $v$. A light pulse travels from one mirror to the other and back. The two events are the departure of the pulse from the lower mirror and its return to that same mirror.

In $S'$ the pulse travels a distance $2d$ at speed $c$, so
$$
\Delta t_0 = \frac{2d}{c} .
$$
In $S$ the clock moves at speed $v$. While the pulse makes its round trip, the lower mirror advances by $v\,\Delta t$, so the pulse travels along the two sloping sides in the figure, each of length $\ell$. By the second postulate, in $S$ light also travels at speed $c$, so $2\ell = c\,\Delta t$, or $\ell = \dfrac{c\,\Delta t}{2}$. The separation $d$ between the mirrors is perpendicular to the motion and is the same in both frames. Each sloping side is the hypotenuse of a right triangle with legs $d$ and $\dfrac{v\,\Delta t}{2}$. By the **Pythagorean theorem**,
$$
\left( \frac{c\,\Delta t}{2} \right)^2 = d^2 + \left( \frac{v\,\Delta t}{2} \right)^2 .
$$
Multiply both sides by $4$ and substitute $4d^2 = c^2 \Delta t_0^2$, which follows from $2d = c\,\Delta t_0$, to obtain
$$
c^2 \Delta t^2 = c^2 \Delta t_0^2 + v^2 \Delta t^2 .
$$
Move the term containing $\Delta t^2$ to the left and divide by $c^2$ to obtain
$$
\Delta t^2 \left( 1 - \frac{v^2}{c^2} \right) = \Delta t_0^2 .
$$
Divide by $1 - \dfrac{v^2}{c^2}$, which is positive because $v < c$, and take the square root. Since $\Delta t$ and $\Delta t_0$ are positive,
$$
\Delta t = \frac{\Delta t_0}{\sqrt{1 - \dfrac{v^2}{c^2}}} = \gamma\, \Delta t_0 .
$$
By the principle of relativity, every clock at rest in $S'$ must slow down in the same way, regardless of how it works. Otherwise comparing two different kinds of clocks would reveal the motion of $S'$.
:::
::::

:::attenzione
Time dilation is reciprocal. A clock at rest in $S$ also runs more slowly for an observer in $S'$, because in that observer’s frame it is the clock in $S$ that moves at velocity $v$. In each case, proper time is measured in the frame in which the two events occur at the same point. For the hour recorded by the spacecraft clock, the proper time is $60\,\mathrm{min}$, measured on board, and $100\,\mathrm{min}$ is the interval measured on Earth.
:::

## Length contraction

:::definizione{#lunghezza-propria titolo="Proper length"}
The **proper length** $L_0$ of an object is its length measured in the inertial frame in which it is at rest. In a frame in which the object is moving, its length is measured by recording the positions of its two ends *at the same instant* in that frame. Because of the relativity of simultaneity, this measurement gives a result different from $L_0$. For example, a spacecraft of length $L_0 = 100\,\mathrm{m}$ as measured by its crew is only $60\,\mathrm{m}$ long for observers on Earth if it travels relative to them at $v = 0.80\,c$, as stated by the length-contraction theorem.
:::

::::teorema{#contrazione-lunghezze titolo="Length contraction"}
An object of proper length $L_0$ moves at speed $v$ relative to an inertial frame $S$ in the direction of its length. Its length measured in $S$ is
$$
L = \frac{L_0}{\gamma} = L_0 \sqrt{1 - \frac{v^2}{c^2}} .
$$
Since $\gamma > 1$, the length measured in $S$ is less than the proper length. Dimensions perpendicular to the velocity do *not* change. With $L_0 = 100\,\mathrm{m}$ and $v = 0.80\,c$, we have $\sqrt{1 - 0.64} = 0.60$, so $L = 60\,\mathrm{m}$.

:::dimostrazione
Measure, in both frames, how long the object takes to pass a fixed point $P$ in $S$. The events are the front of the object passing $P$ and the rear passing $P$.

In $S$ the two events occur at the same point $P$, so the interval between them is a proper time $\Delta t_0$. During this interval, the object, whose length is $L$ in $S$, advances by its own length, so
$$
L = v\, \Delta t_0 .
$$
In the object’s frame $S'$, the point $P$ moves at speed $v$ in the opposite direction and covers the full proper length $L_0$, from front to rear. The two events occur at different points in $S'$ and are separated by the time interval $\Delta t$, so
$$
L_0 = v\, \Delta t .
$$
By **time dilation**, $\Delta t = \gamma\, \Delta t_0$. Dividing one equation by the other gives
$$
\frac{L}{L_0} = \frac{v\, \Delta t_0}{v\, \gamma\, \Delta t_0} = \frac{1}{\gamma} ,
$$
that is, $L = \dfrac{L_0}{\gamma}$.
:::
::::

:::esempio{#muoni titolo="Cosmic-ray muons"}
**Muons** are unstable particles produced in the upper atmosphere when cosmic rays collide with air molecules. A muon at rest decays with a **mean lifetime** $\tau = 2.2\,\mu\mathrm{s}$. The experimentally determined decay law states that, of an initial group of muons at rest, after a time $t$ the surviving fraction is $e^{-\frac{t}{\tau}}$. Consider muons produced at an altitude of $h = 6.0\,\mathrm{km}$ and traveling vertically downward at $v = 0.995\,c$, for which $\gamma \approx 10.0$.

- In Earth’s frame the trip takes $\Delta t = \dfrac{h}{v} = \dfrac{6000}{0.995 \cdot 3.00 \cdot 10^{8}}\,\mathrm{s} \approx 20\,\mu\mathrm{s}$, about $9$ mean lifetimes. Without time dilation the fraction of muons reaching the ground would be $e^{-9.1} \approx 1 \cdot 10^{-4}$, approximately one in ten thousand.
- By **time dilation** the proper time the muons experience on the trip is $\Delta t_0 = \dfrac{\Delta t}{\gamma} \approx 2.0\,\mu\mathrm{s}$, less than one mean lifetime, so the fraction that reaches the ground is $e^{-\frac{2.0}{2.2}} \approx 0.40$.
- In the muon frame, Earth approaches at speed $v$, and the thickness of atmosphere to be crossed is contracted to $\dfrac{h}{\gamma} \approx 600\,\mathrm{m}$. Earth’s surface covers this distance in $\dfrac{600\,\mathrm{m}}{v} \approx 2.0\,\mu\mathrm{s}$. **Length contraction** therefore gives the same result.

The muon flux measured at sea level is indeed much greater than would be predicted without relativity. Comparing the counts at high altitude with those at ground level provides an experimental test of time dilation.
:::

## Lorentz transformations

:::teorema{#trasformazioni-lorentz titolo="Lorentz transformations"}
With frames $S$ and $S'$ arranged as for the Galilean transformations, an event in $S$ with coordinates $(x, y, z, t)$ has the following coordinates in $S'$:
$$
\begin{cases}
x' = \gamma \left( x - v t \right) \\[4pt]
y' = y \\[4pt]
z' = z \\[4pt]
t' = \gamma \left( t - \dfrac{v\, x}{c^2} \right)
\end{cases}
$$
These relations are called the **Lorentz transformations**. They are the unique linear transformations compatible with Einstein’s two postulates and can be derived from them. The proof is omitted here. To obtain the inverse transformations, interchange the primed and unprimed coordinates and change the sign of $v$, because $S$ moves relative to $S'$ with velocity $-v$. For example, $x = \gamma \left( x' + v t' \right)$.

The transformations convert the coordinates of any event from one frame to another. Time dilation, length contraction, and the relativity of simultaneity all follow from them. For example, with $v = 0.60\,c$ and $\gamma = 1.25$, an event with $x = 3000\,\mathrm{m}$ and $t = 10\,\mu\mathrm{s}$ has the following coordinates in $S'$:
$$
x' = 1.25 \left( 3000 - 1.80 \cdot 10^{8} \cdot 1.0 \cdot 10^{-5} \right) \mathrm{m} = 1.25 \cdot 1200\,\mathrm{m} = 1500\,\mathrm{m} ,
$$
$$
t' = 1.25 \left( 1.0 \cdot 10^{-5} - \frac{0.60 \cdot 3000}{3.00 \cdot 10^{8}} \right) \mathrm{s} = 1.25 \cdot 4.0 \cdot 10^{-6}\,\mathrm{s} = 5.0\,\mu\mathrm{s} .
$$
:::

:::osservazione{#lorentz-intervalli titolo="Transforming coordinate differences"}
Because the Lorentz transformations are linear, they also apply to coordinate differences between two events, giving $\Delta x' = \gamma \left( \Delta x - v\, \Delta t \right)$ and $\Delta t' = \gamma \left( \Delta t - \dfrac{v\, \Delta x}{c^2} \right)$. These formulas reproduce the relativity of simultaneity and time dilation.

- If two events are **simultaneous** in $S$, so that $\Delta t = 0$, and are a distance $\Delta x \neq 0$ apart, in $S'$ they are separated by a time interval $\Delta t' = -\gamma\, \dfrac{v\, \Delta x}{c^2} \neq 0$ and are therefore not simultaneous. With $v > 0$ and $\Delta x > 0$ we obtain $\Delta t' < 0$. Thus, in $S'$ the event farther along the $x$-axis occurs first.
- By the inverse transformation $\Delta t = \gamma \left( \Delta t' + \dfrac{v\, \Delta x'}{c^2} \right)$, if two events in $S'$ occur at the same place, $\Delta x' = 0$, they are separated in $S$ by the time interval $\Delta t = \gamma\, \Delta t'$. This is time dilation.

In Einstein’s train-car example, the proper length is $L_0 = \gamma \cdot 48\,\mathrm{m} = 60\,\mathrm{m}$. The two arrivals of the flash are simultaneous in $S'$ and separated in $S$ by $\Delta t = \gamma\, \dfrac{v\, L_0}{c^2} = 1.25 \cdot \dfrac{0.60 \cdot 60}{3.00 \cdot 10^{8}}\,\mathrm{s} = 1.5 \cdot 10^{-7}\,\mathrm{s}$, the same interval found using the closing speeds.
:::

:::osservazione{#limite-classico titolo="Classical limit"}
When $v \ll c$, that is, when $v$ is much smaller than $c$, the factor $\gamma$ is nearly equal to $1$ and the term $\dfrac{v\, x}{c^2}$ is negligible. The Lorentz transformations then reduce to the Galilean transformations $x' = x - vt$ and $t' = t$. Classical mechanics is therefore a limiting case of special relativity, valid for speeds small compared with the speed of light. For an airplane with $v = 300\,\mathrm{m/s}$ we have $\gamma - 1 \approx 5 \cdot 10^{-13}$, and for an event at $x = 3000\,\mathrm{m}$ the term $\dfrac{v\, x}{c^2}$ equals $\dfrac{300 \cdot 3000}{9.00 \cdot 10^{16}}\,\mathrm{s} = 1.0 \cdot 10^{-11}\,\mathrm{s}$. No ordinary stopwatch can detect such small corrections.
:::

## Relativistic addition of velocities

:::teorema{#composizione-velocita titolo="Relativistic addition of velocities"}
An object moves along the $x$-axis at velocity $u'$ relative to frame $S'$, which itself moves at velocity $v$ relative to $S$. The object’s velocity relative to $S$ is
$$
u = \frac{u' + v}{1 + \dfrac{u'\, v}{c^2}} .
$$
To derive the formula from the inverse Lorentz transformations, divide $\Delta x = \gamma \left( \Delta x' + v\, \Delta t' \right)$ by $\Delta t = \gamma \left( \Delta t' + \dfrac{v\, \Delta x'}{c^2} \right)$ and then divide the numerator and denominator by $\Delta t'$. The velocities $u'$ and $v$ are signed and are positive in the direction of the $x$-axis. When $u' \ll c$ or $v \ll c$, the denominator is nearly $1$, and the formula reduces to the Galilean addition law $u = u' + v$.

For example, a spacecraft moving away from Earth at $v = 0.60\,c$ launches a probe forward with velocity $u' = 0.80\,c$ relative to the spacecraft. Relative to Earth, the probe’s velocity is
$$
u = \frac{0.60\,c + 0.80\,c}{1 + 0.60 \cdot 0.80} = \frac{1.40\,c}{1.48} \approx 0.95\,c ,
$$
whereas Galilean addition would give $1.40\,c$, a speed greater than that of light.

::grafico{f="(x+0.5)/(1+0.5*x);x+0.5" asintoti="y=1;y=-1" xmin=-1 xmax=1 ymin=-1 ymax=1.6 uguale=1 nomi="u′,u" legenda="u = \dfrac{u' + 0.5\,c}{1 + 0.5\,\frac{u'}{c}};u = u' + 0.5\,c" titolo="Velocity $u$ relative to $S$ as a function of velocity $u'$ relative to $S'$, both in units of $c$, for $v = 0.5\,c$. Relativistic addition stays between $-c$ and $c$, while Galilean addition exceeds $c$"}

:::

:::osservazione{#velocita-luce-composta titolo="Combining the speed of light with another velocity"}
If a light ray travels in $S'$ with $u' = c$, the velocity-addition formula gives
$$
u = \frac{c + v}{1 + \dfrac{c\, v}{c^2}} = \frac{c + v}{1 + \dfrac{v}{c}} = \frac{c + v}{\dfrac{c + v}{c}} = c ,
$$
regardless of $v$. The addition law is thus consistent with the second postulate, according to which light has speed $c$ in all inertial frames. Moreover, if $u'$ and $v$ are smaller than $c$ in magnitude, then $u$ is also smaller than $c$ in magnitude. Thus $c$ is the limiting speed for material objects, as discussed in the chapter on relativistic dynamics. For example, combining two velocities of $0.90\,c$ in the same direction gives $\dfrac{1.80\,c}{1.81} \approx 0.994\,c$.
:::

## Invariant interval and Minkowski diagrams

:::teorema{#intervallo-invariante titolo="Invariant interval"}
In $S$, two events are separated by a time interval $\Delta t$ and a distance $\Delta x$ along the $x$-axis, with $\Delta y = \Delta z = 0$. The quantity
$$
(\Delta s)^2 = (c\, \Delta t)^2 - (\Delta x)^2
$$
is called the **interval** between the events and has the same value in all inertial frames, that is, $(c\, \Delta t')^2 - (\Delta x')^2 = (c\, \Delta t)^2 - (\Delta x)^2$. This equality can be verified by substituting the Lorentz transformations for the coordinate differences. If the displacement also has components along $y$ and $z$, subtract $(\Delta y)^2$ and $(\Delta z)^2$ as well.

The interval provides a way to compare measurements made by different observers without writing out the transformations. For example, two events with $\Delta x = 1200\,\mathrm{m}$ and $\Delta t = 5.0\,\mu\mathrm{s}$, so that $c\, \Delta t = 1500\,\mathrm{m}$, have $(\Delta s)^2 = \left( 1500^2 - 1200^2 \right) \mathrm{m^2} = 8.1 \cdot 10^{5}\,\mathrm{m^2}$. In a frame $S'$ with $v = 0.60\,c$, the transformations give $\Delta x' = 375\,\mathrm{m}$ and $c\, \Delta t' = 975\,\mathrm{m}$, and indeed $975^2 - 375^2 = 8.1 \cdot 10^{5}$.
:::

:::definizione{#tipi-di-intervallo titolo="Timelike, spacelike, and lightlike intervals"}
The sign of the interval distinguishes three cases.

- **Timelike**, $(\Delta s)^2 > 0$. An object moving more slowly than light can be present at both events. There is a frame in which the two events occur at the same point, and their time separation in that frame is the proper time $\Delta t_0 = \dfrac{\Delta s}{c}$.
- **Lightlike**, $(\Delta s)^2 = 0$. A light signal emitted at the first event arrives at exactly the place and time of the second.
- **Spacelike**, $(\Delta s)^2 < 0$. Even light cannot travel from one event to the other. There is a frame in which the events are simultaneous, and in that frame their spatial separation is $\sqrt{(\Delta x)^2 - (c\, \Delta t)^2}$.

The type of interval is the same in all inertial frames because $(\Delta s)^2$ is invariant. In the example with $\Delta x = 1200\,\mathrm{m}$ and $c\, \Delta t = 1500\,\mathrm{m}$, the interval is timelike, with $\Delta s = 900\,\mathrm{m}$, so there is a frame in which the two events occur at the same point a time $\Delta t_0 = \dfrac{900}{3.00 \cdot 10^{8}}\,\mathrm{s} = 3.0\,\mu\mathrm{s}$ apart.
:::

:::definizione{#diagramma-minkowski titolo="Minkowski diagrams and worldlines"}
A **Minkowski diagram** represents events in a frame $S$ as points in a plane, with the coordinate $x$ plotted horizontally and the quantity $ct$ plotted vertically, both measured in the same units. The sequence of events that make up an object’s history forms a line called its **worldline**.

- An object at rest in $S$ has a vertical straight line as its worldline.
- An object with constant velocity $v$ has a straight worldline satisfying $ct = \dfrac{c}{v}\, x + \text{constant}$. Its angle with the $ct$-axis is $\alpha$, where $\tan \alpha = \beta$.
- A light ray has a straight worldline inclined at $45^\circ$, because $\beta = 1$.

The axes of the frame $S'$ can also be drawn on the diagram. The $ct'$-axis is the worldline of the origin $O'$, that is, the line $ct = \dfrac{x}{\beta}$. The $x'$-axis consists of the events for which $t' = 0$, that is, $t = \dfrac{v\, x}{c^2}$, and is the line $ct = \beta x$. The two axes are symmetric about the light ray’s worldline. For example, at $\beta = 0.5$, the angle between the $ct'$-axis and the $ct$-axis is about $27^\circ$ because $\tan \alpha = 0.5$. Lines parallel to the $x'$-axis connect events that are simultaneous in $S'$ but occur at different times in $S$. The diagram thus illustrates the relativity of simultaneity.

::grafico{f="2*x;0.5*x" segmenti="0,0,4,4" punti="2,4,pieno,A" xmin=0 xmax=5 ymin=0 ymax=5 uguale=1 nomi="x,ct" etichette="2.15,4.8,ct′;4.3,1.8,x′;3.5,3.85,light" legenda="ct = 2x;ct = 0.5\,x" titolo="Minkowski diagram in frame $S$ showing the axes of frame $S'$ for $\beta = 0.5$. The dotted line at $45^\circ$ is the worldline of a light ray, and event $A$ lies on the $ct'$-axis"}

:::

:::definizione{#cono-di-luce titolo="Light cones and causality"}
The two lines $ct = x$ and $ct = -x$ through an event $O$ are the worldlines of the light rays passing through $O$. They divide the diagram into three regions. When the $y$- and $z$-directions are also considered, these lines generate a conical surface called the **light cone** of event $O$.

- Events satisfying $ct > |x|$ form the **future** of $O$. They are separated from $O$ by a timelike interval and follow $O$ in every inertial frame.
- Events satisfying $ct < -|x|$ form the **past** of $O$ and precede $O$ in every inertial frame.
- Events satisfying $|ct| < |x|$ form the **elsewhere** region. They are separated from $O$ by a spacelike interval, and their time order relative to $O$ depends on the frame of reference.

One event can cause another only if the second is in the future of the first or on its light cone, because a signal cannot travel faster than light. The order of cause and effect is therefore the same for all observers. For example, event $B$ with $x = 3\,\mathrm{m}$ and $ct = 1\,\mathrm{m}$ is in the elsewhere region of the origin because $1 < 3$. No signal emitted at the origin can reach it.

::grafico{f="x;-x" area="4;abs(x);-4;4|-abs(x);-4;-4;4" punti="1,3,pieno,A;3,1,pieno,B;2,2,pieno,C" etichette="-1.1,3.5,future;-1.1,-3.5,past;-3.9,0.4,elsewhere;2.3,-0.6,elsewhere" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 nomi="x,ct" legenda="ct = x;ct = -x" titolo="Light cone of the origin. Event $A$ is in the future (timelike interval), event $B$ is in the elsewhere region (spacelike), and event $C$ is on the cone (lightlike)"}

:::

## Twin paradox

:::osservazione{#paradosso-gemelli titolo="Twin paradox"}
Two twins are the same age. One stays on Earth. The other takes a spacecraft to a star $4.0$ light-years away, where a **light-year** is the distance light travels in one year. The traveler moves at $v = 0.80\,c$ and, on reaching the star, immediately returns at the same speed. The time and speed of the journey are measured from Earth, which is treated as an inertial frame.

- For the twin on Earth, the journey lasts $\Delta t = \dfrac{2 \cdot 4.0\,\text{light-years}}{0.80\,c} = 10$ years.
- The traveling twin is present at departure, turnaround, and return, so the traveler’s clock measures the proper time for each leg. By time dilation the total time for the traveler is $\Delta t_0 = \dfrac{10\ \text{years}}{\gamma} = 10 \cdot 0.60\ \text{years} = 6.0$ years.

On returning, the traveling twin is therefore younger by $4.0$ years. The **paradox** arises from the reverse argument: from the traveler’s point of view it is Earth that moves, so the twin on Earth might be expected to age less.
:::

:::osservazione{#gemelli-spiegazione titolo="Explanation in terms of a change of frame"}
The twins’ situations are asymmetric. The twin on Earth remains in the same inertial frame throughout the journey. The traveling twin uses two different inertial frames, one on the outward leg and one on the return leg. At turnaround, the traveler changes frames and experiences a detectable acceleration. The time-dilation formula applies to measurements made in an inertial frame, so the calculation performed in Earth’s frame gives the correct result.

A Minkowski diagram in Earth’s frame, with $x$ and $ct$ in light-years, shows what happens. The numerical value of $ct$ in light-years equals that of $t$ in years. The dashed lines connect the turnaround to the events on Earth that the traveler considers simultaneous with it. In the outbound frame the line has slope $\beta$ and intersects the $ct$-axis at $ct = 5.0 - 0.80 \cdot 4.0 = 1.8$ light-years, corresponding to an Earth time of $t = 1.8$ years. In the return frame it has slope $-\beta$ and intersects the axis at $t = 5.0 + 3.2 = 8.2$ years. Each leg lasts $3.0$ years for the traveler. During each leg, the traveler considers the Earth clock to be running slowly and calculates that it advances by $\dfrac{3.0\ \text{years}}{\gamma} = 1.8$ years. When the traveler changes frames, however, the Earth time considered simultaneous with turnaround changes from $1.8$ to $8.2$ years. Adding these contributions, $1.8 + 6.4 + 1.8 = 10$ years, the traveler obtains the same elapsed time as measured on Earth.

::grafico{linee="0,0 4,5 0,10" segmenti="4,5,0,1.8;4,5,0,8.2" punti="4,5,pieno,G;0,1.8,pieno;0,8.2,pieno;0,10,pieno" etichette="0.2,1.4,1.8;0.2,7.7,8.2;2.35,2.2,outbound;2.35,7.9,return" xmin=-1 xmax=5 ymin=0 ymax=11 nomi="x,ct" legenda=0 titolo="The twin’s journey in Earth’s frame, with $x$ and $ct$ in light-years. The two axes use different scales (one light-year on the $ct$-axis is drawn shorter than on the $x$-axis), so the worldlines of light do not appear at $45^\circ$. Earth’s worldline is the $ct$-axis. From turnaround $G$, the dashed lines reach the events on Earth simultaneous with $G$ in the traveler’s outbound and return frames"}

The effect has been verified with atomic clocks flown on airplanes and compared after their return with clocks that remained on the ground, and with unstable particles following closed orbits in accelerators.
:::
