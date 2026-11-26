---
titolo: Self-induction, RL circuits, and magnetic energy
sommario: What inductance means and how to calculate it for a solenoid, how the current in an RL circuit rises and decays, how much energy an inductor and a magnetic field store, and what mutual induction is between two circuits.
---

## Self-induction and inductance

:::osservazione{#esperimento-autoinduzione titolo="A light bulb that takes longer to light up"}
Two identical light bulbs are connected in parallel across the same power supply. The first is in series with a coil of many turns wound around an iron core. The second is in series with a resistor whose resistance is equal to that of the coil. When the switch closes, the second bulb lights up immediately. The first reaches the same brightness after a noticeable delay. In steady state the bulbs are equally bright because the two branches have the same resistance.

This shows that as the current increases, an electromotive force develops in the coil and opposes the increase. The current in the coil produces a magnetic field, and the flux of this field through the coil's own turns changes with the current. By Faraday's law of induction, an emf therefore arises in the very circuit that produces the field. This phenomenon is called **self-induction**.
:::

:::richiamo{titolo="Faraday's law of induction"}
If the magnetic flux $\Phi_B$ linking a circuit changes with time, an electromotive force $\mathcal{E} = -\dfrac{d\Phi_B}{dt}$ is induced in the circuit. The minus sign expresses Lenz's law. The induced current opposes the change in flux that produces it.
:::

:::definizione{#induttanza titolo="Inductance"}
A circuit carrying a current $i$ produces a magnetic field. The flux of this field through the circuit itself is called its **self-flux linkage**. In air, the field at each point is proportional to the current, as the field formulas for a wire, a loop, and a solenoid show. The self-flux linkage is therefore also proportional to $i$. The **inductance** of the circuit, also called its coefficient of self-induction, is the ratio
$$
L = \frac{\Phi_B}{i} .
$$
In air, the inductance depends only on the shape and dimensions of the circuit and is independent of the current. Its unit is the **henry**, with $1\,\mathrm{H} = 1\,\mathrm{Wb/A}$. For example, if a coil carrying $2.0\,\mathrm{A}$ has a self-flux linkage of $6.0 \cdot 10^{-3}\,\mathrm{Wb}$, its inductance is
$$
L = \frac{6.0 \cdot 10^{-3}\,\mathrm{Wb}}{2.0\,\mathrm{A}} = 3.0 \cdot 10^{-3}\,\mathrm{H} = 3.0\,\mathrm{mH} .
$$
The inductance can be used to calculate the self-induced emf, the duration of circuit transients, and the energy stored in a coil.
:::

::::teorema{#fem-autoindotta titolo="Self-induced emf"}
Let $L$ be the constant inductance of a circuit carrying a current $i(t)$. The **self-induced emf** in the circuit is then
$$
\mathcal{E}_L = -L\,\frac{di}{dt} .
$$
One henry times one ampere per second equals one volt because $1\,\mathrm{H \cdot A/s} = 1\,\mathrm{Wb/s} = 1\,\mathrm{V}$. If the current changes uniformly by $\Delta i$ over the time interval $\Delta t$, its derivative equals the ratio $\dfrac{\Delta i}{\Delta t}$ and $\mathcal{E}_L = -L\,\dfrac{\Delta i}{\Delta t}$. If the change is nonuniform, the same ratio gives the average self-induced emf when multiplied by the negative inductance. For example, if the current in a coil with $L = 0.20\,\mathrm{H}$ increases uniformly from $0$ to $3.0\,\mathrm{A}$ in $50\,\mathrm{ms}$, then
$$
\frac{\Delta i}{\Delta t} = \frac{3.0\,\mathrm{A}}{0.050\,\mathrm{s}} = 60\,\mathrm{A/s} ,
\qquad
\mathcal{E}_L = -0.20 \cdot 60\,\mathrm{V} = -12\,\mathrm{V} .
$$
The minus sign indicates that the self-induced emf acts in the direction opposite to the current in this example.

:::dimostrazione
By the definition of inductance, the self-flux linkage is $\Phi_B = L\,i$. Applying **Faraday's law of induction** and taking the constant $L$ outside the derivative gives
$$
\mathcal{E}_L = -\frac{d\Phi_B}{dt} = -\frac{d\,(L\,i)}{dt} = -L\,\frac{di}{dt} .
$$
:::
::::

:::osservazione{#verso-fem-autoindotta titolo="Direction of the self-induced emf"}
By Lenz's law, the self-induced emf opposes the *change* in current.

- If the current increases, $\dfrac{di}{dt} > 0$ and $\mathcal{E}_L < 0$, so the self-induced emf acts in the direction opposite to the current and slows its rise.
- If the current decreases, $\dfrac{di}{dt} < 0$ and $\mathcal{E}_L > 0$, so the self-induced emf acts in the same direction as the current and slows its decay.
- If the current is constant, the self-induced emf is zero.

In mechanics, the mass of a body resists changes in its velocity. Likewise, the inductance of a circuit resists changes in its current. This analogy explains why inductance is compared with mass.
:::

:::esempio{titolo="A current that rises, remains constant, and falls"}
In a coil with $L = 20\,\mathrm{mH}$, the current rises uniformly from $0$ to $3.0\,\mathrm{A}$ during the first $5.0\,\mathrm{ms}$, stays constant for another $5.0\,\mathrm{ms}$, and then decreases uniformly to $0$ in $10\,\mathrm{ms}$. On each interval, the derivative of the current is the slope of the corresponding line segment on the graph.

- For $0 < t < 5.0\,\mathrm{ms}$, we have $\dfrac{di}{dt} = \dfrac{3.0\,\mathrm{A}}{5.0 \cdot 10^{-3}\,\mathrm{s}} = 600\,\mathrm{A/s}$, so $\mathcal{E}_L = -0.020 \cdot 600\,\mathrm{V} = -12\,\mathrm{V}$.
- For $5.0\,\mathrm{ms} < t < 10\,\mathrm{ms}$, the current is constant, so $\mathcal{E}_L = 0$.
- For $10\,\mathrm{ms} < t < 20\,\mathrm{ms}$, we have $\dfrac{di}{dt} = \dfrac{-3.0\,\mathrm{A}}{1.0 \cdot 10^{-2}\,\mathrm{s}} = -300\,\mathrm{A/s}$, so $\mathcal{E}_L = -0.020 \cdot (-300)\,\mathrm{V} = 6.0\,\mathrm{V}$.

The emf is negative while the current rises and positive while it falls, as Lenz's law predicts. Its magnitude is greater over the first interval, where the current changes more rapidly.

::grafico{f="max(0,min(0.6*x,3,3-0.3*(x-10)))+0*sqrt(x)" segmenti="5,0,5,3;10,0,10,3" xmin=-3 xmax=24 ymin=-1 ymax=4 nomi="t,i" legenda=0 titolo="Coil current in amperes, with time in milliseconds. The self-induced emf is $-12\,\mathrm{V}$ on the rising segment, $0$ on the horizontal segment, and $6.0\,\mathrm{V}$ on the falling segment"}

:::

:::attenzione
The self-induced emf depends on how rapidly the current changes, *not* on the value of the current. In the example with $L = 20\,\mathrm{mH}$, the current is nearly zero just after the initial instant, yet the emf is $-12\,\mathrm{V}$. Between $5.0\,\mathrm{ms}$ and $10\,\mathrm{ms}$, the current is $3.0\,\mathrm{A}$ and the emf is zero.
:::

## Inductance of a solenoid

:::richiamo{titolo="Magnetic field of a solenoid"}
Consider an air-core solenoid of length $\ell$ with $N$ turns, carrying a current $i$. If the solenoid is long compared with the radius of its turns, its internal magnetic field is uniform, parallel to the axis, and has magnitude $B = \mu_0\,\dfrac{N}{\ell}\,i$. The field outside is negligible.
:::

::::teorema{#induttanza-solenoide titolo="Inductance of a solenoid"}
An air-core solenoid of length $\ell$ consists of $N$ turns of area $S$. Its length is large compared with the radius of the turns. Its inductance is then
$$
L = \frac{\mu_0 N^2 S}{\ell} .
$$
The inductance depends only on the geometry of the solenoid and is proportional to the *square* of the number of turns. For a solenoid of length $25\,\mathrm{cm}$ with $500$ turns of radius $1.0\,\mathrm{cm}$, the area of one turn is $S = \pi \cdot (0.010\,\mathrm{m})^2 = 3.14 \cdot 10^{-4}\,\mathrm{m^2}$ and
$$
L = \frac{4\pi \cdot 10^{-7} \cdot 500^2 \cdot 3.14 \cdot 10^{-4}}{0.25}\,\mathrm{H} = 3.95 \cdot 10^{-4}\,\mathrm{H} \approx 0.39\,\mathrm{mH} .
$$

::grafico{assi=0 linee="0,1.2 6,1.2;0,-1.2 6,-1.2" vettori="0.6,0.5,2.2,0.5,B;0.6,-0.5,2.2,-0.5;3.4,0.5,5.0,0.5;3.4,-0.5,5.0,-0.5" etichette="0.25,1.2,⊙;0.75,1.2,⊙;1.25,1.2,⊙;1.75,1.2,⊙;2.25,1.2,⊙;2.75,1.2,⊙;3.25,1.2,⊙;3.75,1.2,⊙;4.25,1.2,⊙;4.75,1.2,⊙;5.25,1.2,⊙;5.75,1.2,⊙;0.25,-1.2,⊗;0.75,-1.2,⊗;1.25,-1.2,⊗;1.75,-1.2,⊗;2.25,-1.2,⊗;2.75,-1.2,⊗;3.25,-1.2,⊗;3.75,-1.2,⊗;4.25,-1.2,⊗;4.75,-1.2,⊗;5.25,-1.2,⊗;5.75,-1.2,⊗;3,-2.05,ℓ" segmenti="0,-1.75,6,-1.75;0,-1.6,0,-1.9;6,-1.6,6,-1.9" unicolore=1 xmin=-0.5 xmax=6.5 ymin=-2.4 ymax=1.9 uguale=1 titolo="Cross section of a solenoid. The current flows out of the page at the top ($\odot$) and into the page at the bottom ($\otimes$). Inside, the field $\vec{B}$ is uniform and parallel to the axis, and passes through all $N$ turns"}

:::dimostrazione
To find the inductance, calculate the self-flux linkage and divide by the current. Let $i$ be the current in the solenoid. The field formula for a solenoid gives a uniform internal field of magnitude $B = \mu_0\,\dfrac{N}{\ell}\,i$. The field is perpendicular to the plane of each turn, so the flux through one turn is the product $B S$. There are $N$ turns, so the flux linkage of the entire solenoid is $N$ times the flux through one turn:
$$
\Phi_B = N B S = N \cdot \mu_0\,\frac{N}{\ell}\,i \cdot S = \frac{\mu_0 N^2 S}{\ell}\,i .
$$
The definition of inductance then gives
$$
L = \frac{\Phi_B}{i} = \frac{\mu_0 N^2 S}{\ell} .
$$
The number $N$ enters twice, first because the field is proportional to $N$ and again because the flux is summed over $N$ turns. This accounts for the factor $N^2$.
:::
::::

:::osservazione{#nucleo-ferromagnetico titolo="Solenoid with an iron core"}
Inserting a ferromagnetic core with relative magnetic permeability $\mu_r$ increases the internal field by a factor of $\mu_r$, as discussed in the chapter on sources of magnetic fields and Ampère's law. The self-flux linkage increases by the same factor, so the inductance increases as well:
$$
L = \frac{\mu_r \mu_0 N^2 S}{\ell} .
$$
With a core of relative permeability $\mu_r = 200$, the inductance of the $500$-turn solenoid increases from $0.39\,\mathrm{mH}$ to about $79\,\mathrm{mH}$. A core therefore makes it possible to obtain a large inductance with relatively few turns. In ferromagnetic materials $\mu_r$ depends on the field, so the formula gives only an estimate of the inductance.
:::

## The inductor and the RL circuit

:::definizione{#induttore titolo="Inductor"}
An **inductor** is a circuit component, usually a coil, designed to have an appreciable inductance. Its circuit symbol is a coiled line. An inductor is *ideal* if its resistance is zero. A real coil with inductance $L$ and resistance $R_b$ is represented by an ideal inductor $L$ in series with a resistor $R_b$. This model allows the circuit laws to be applied to real coils as well. Connecting wires and resistors have much smaller inductances than a coil, so their inductances are taken to be zero in these problems. For example, a coil with $L = 50\,\mathrm{mH}$ wound from wire of resistance $4.0\,\mathrm{\Omega}$ is equivalent to an ideal $50\,\mathrm{mH}$ inductor in series with a $4.0\,\mathrm{\Omega}$ resistor.
:::

:::osservazione{#equazione-circuito-rl titolo="The RL circuit equation"}
An **RL circuit** consists of an ideal source of constant emf $\mathcal{E}$, a resistor $R$, and an ideal inductor $L$ in series with a switch. If the coil has its own resistance, $R$ is the sum of the resistances in the circuit. When the current varies, two emfs act in the circuit, the source emf and the self-induced emf $-L\,\dfrac{di}{dt}$. By Kirchhoff's loop rule, the sum of the emfs equals the voltage drop $R\,i$ across the resistor, so
$$
\mathcal{E} - L\,\frac{di}{dt} = R\,i .
$$
This is the **RL circuit equation**. The unknown is the function $i(t)$. Its derivative also appears in the equation, so this is a differential equation. Written as $\mathcal{E} = R\,i + L\,\dfrac{di}{dt}$, the equation states that the source voltage is the sum of the voltage $R\,i$ across the resistor and the voltage $L\,\dfrac{di}{dt}$ across the inductor. For example, with $\mathcal{E} = 6.0\,\mathrm{V}$ and $R = 2.0\,\mathrm{\Omega}$, at the instant when the current is $1.0\,\mathrm{A}$ the voltage across the resistor is $2.0\,\mathrm{V}$, so the voltage across the inductor is $4.0\,\mathrm{V}$.

::grafico{assi=0 curve="5+0.35*abs(sin(t)),2.1-0.3*t/pi,0,12.566" linee="0,0 0,1.4;-0.22,1.4 0.22,1.4;-0.45,1.6 0.45,1.6;0,1.6 0,3 1.0,3;1.0,3 1.6,3.35;1.7,3 2.1,3 2.2,3.2 2.4,2.8 2.6,3.2 2.8,2.8 3.0,3.2 3.2,2.8 3.3,3 5,3 5,2.1;5,0.9 5,0 0,0" punti="1.0,3,pieno;1.7,3,pieno" vettori="3.2,-0.35,1.8,-0.35,i" etichette="0.75,1.5,ℰ;-0.7,1.8,+;-0.7,1.2,−;2.7,3.6,R;5.8,1.5,L;1.3,3.75,T" xmin=-1.2 xmax=6.6 ymin=-0.8 ymax=4.1 uguale=1 titolo="RL circuit with a source $\mathcal{E}$, switch $T$, resistor $R$, and inductor $L$ in series. When the switch is closed, current flows clockwise"}

:::

:::richiamo{titolo="Initial value problem for a linear equation with constant coefficients"}
Let $a \neq 0$, $b$, and $y_0$ be real numbers. The initial value problem
$$
\begin{cases}
y'(t) + a\,y(t) = b \\
y(0) = y_0
\end{cases}
$$
has exactly one solution, namely $y(t) = \dfrac{b}{a} + \left( y_0 - \dfrac{b}{a} \right) e^{-a t}$. See the chapter on differential equations in fifth-year high school mathematics.
:::

## Switching on an RL circuit

::::teorema{#chiusura-rl titolo="Current when an RL circuit is switched on"}
The switch in an RL circuit closes at time $t = 0$, when the current is zero. Then, for $t \geq 0$, the current is
$$
i(t) = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) ,
\qquad
\tau = \frac{L}{R} .
$$
The quantity $\tau$ is called the **time constant** of the circuit. The current starts at $0$ and rises toward the steady-state value $I = \dfrac{\mathcal{E}}{R}$, the current that would flow in the circuit without the inductor. For example, with $\mathcal{E} = 6.0\,\mathrm{V}$, $R = 2.0\,\mathrm{\Omega}$, and $L = 4.0\,\mathrm{mH}$, we obtain
$$
\tau = \frac{4.0 \cdot 10^{-3}\,\mathrm{H}}{2.0\,\mathrm{\Omega}} = 2.0 \cdot 10^{-3}\,\mathrm{s} ,
\qquad
I = \frac{6.0\,\mathrm{V}}{2.0\,\mathrm{\Omega}} = 3.0\,\mathrm{A} ,
$$
and at time $t = \tau = 2.0\,\mathrm{ms}$ the current is $3.0 \cdot \left( 1 - e^{-1} \right)\,\mathrm{A} = 1.9\,\mathrm{A}$.

::grafico{f="3*(1-exp(-x/2))+0*sqrt(x)" asintoti="y=3" segmenti="0,0,2,3;2,0,2,1.896" punti="2,1.896,pieno" xmin=-2 xmax=12 ymin=-1 ymax=4 nomi="t,i" legenda="i = 3.0 \left( 1 - e^{-\frac{t}{2.0}} \right)" titolo="Current after switching on, for $\tau = 2.0\,\mathrm{ms}$ and $I = 3.0\,\mathrm{A}$, with time in milliseconds. The tangent at the origin intersects the line $i = 3.0\,\mathrm{A}$ at time $t = \tau$, when the current is $1.9\,\mathrm{A}$"}

:::dimostrazione
We verify by substitution that the function $i(t)$ satisfies both the circuit equation and the initial condition, then use uniqueness for the initial value problem. Dividing by $L$ in the RL circuit equation, $\mathcal{E} - L\,\dfrac{di}{dt} = R\,i$, gives the problem
$$
\frac{di}{dt} + \frac{R}{L}\,i = \frac{\mathcal{E}}{L} , \qquad i(0) = 0 .
$$
The proposed solution can be written as $i(t) = \dfrac{\mathcal{E}}{R} - \dfrac{\mathcal{E}}{R}\,e^{-\frac{t}{\tau}}$. By the chain rule, and since $\dfrac{1}{\tau} = \dfrac{R}{L}$, its derivative is
$$
\frac{di}{dt} = -\frac{\mathcal{E}}{R} \cdot \left( -\frac{1}{\tau} \right) e^{-\frac{t}{\tau}} = \frac{\mathcal{E}}{R} \cdot \frac{R}{L}\,e^{-\frac{t}{\tau}} = \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} .
$$
Substituting $i(t)$ and its derivative into the left-hand side of the equation gives
$$
\begin{aligned}
\frac{di}{dt} + \frac{R}{L}\,i
&= \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} + \frac{R}{L} \cdot \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) \\[6pt]
&= \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} + \frac{\mathcal{E}}{L} - \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} \\[6pt]
&= \frac{\mathcal{E}}{L} .
\end{aligned}
$$
The function therefore satisfies the equation. Moreover, $i(0) = \dfrac{\mathcal{E}}{R} \left( 1 - e^{0} \right) = 0$, so it satisfies the initial condition as well. The equation is linear with constant coefficients, with $a = \dfrac{R}{L} \neq 0$ and $b = \dfrac{\mathcal{E}}{L}$. The **initial value problem** thus has a unique solution satisfying $i(0) = 0$. The circuit current is therefore precisely $i(t)$. The solution formula for the initial value problem gives the same function when we take $\dfrac{b}{a} = \dfrac{\mathcal{E}}{R}$ and $y_0 = 0$.
:::
::::

:::osservazione{#costante-di-tempo titolo="Meaning of the time constant"}
The time constant is measured in seconds because $1\,\mathrm{H} = 1\,\mathrm{V \cdot s/A}$ and $1\,\mathrm{\Omega} = 1\,\mathrm{V/A}$, so $1\,\mathrm{H/\Omega} = 1\,\mathrm{s}$. The time constant tells us three things about the current just after the switch closes and as the current rises.

- At time $t = 0$, the current is zero, so $R\,i = 0$ and the circuit equation gives $L\,\dfrac{di}{dt} = \mathcal{E}$. The current therefore starts rising at the rate $\dfrac{\mathcal{E}}{L}$, and the full source emf appears across the inductor.
- If the current continued to rise at its initial rate, it would reach its steady-state value at the time $t_1$ for which $\dfrac{\mathcal{E}}{L}\,t_1 = \dfrac{\mathcal{E}}{R}$, that is, $t_1 = \dfrac{L}{R} = \tau$. On the graph, the tangent at the origin therefore intersects the line $i = \dfrac{\mathcal{E}}{R}$ at the horizontal coordinate $\tau$.
- After a time $\tau$ the current has reached $63\,\%$ of its steady-state value because $1 - e^{-1} \approx 0.63$. After $5\tau$ it exceeds $99\,\%$ because $1 - e^{-5} \approx 0.993$. For this reason, after several time constants the circuit is considered to have reached steady state.

In the circuit with $\mathcal{E} = 6.0\,\mathrm{V}$ and $L = 4.0\,\mathrm{mH}$, the current initially rises at the rate $\dfrac{6.0\,\mathrm{V}}{4.0 \cdot 10^{-3}\,\mathrm{H}} = 1.5 \cdot 10^3\,\mathrm{A/s}$. After $5\tau = 10\,\mathrm{ms}$ it differs from its steady-state value by less than $1\,\%$.
:::

:::esempio{titolo="Voltages across the resistor and the inductor"}
After the switch closes, the voltage across the resistor is $V_R = R\,i = \mathcal{E} \left( 1 - e^{-\frac{t}{\tau}} \right)$. The voltage across the inductor is $V_L = L\,\dfrac{di}{dt}$, and since $\dfrac{di}{dt} = \dfrac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}}$, we obtain $V_L = \mathcal{E}\,e^{-\frac{t}{\tau}}$. The two voltages add up to $\mathcal{E}$ at every instant, as the circuit equation predicts. At first the full voltage appears across the inductor. In steady state it appears entirely across the resistor. The two voltages are equal when $e^{-\frac{t}{\tau}} = \dfrac{1}{2}$, or at time $t = \tau \ln 2$. With $\tau = 2.0\,\mathrm{ms}$, this occurs after $1.4\,\mathrm{ms}$.
:::

## Switching off an RL circuit

::::teorema{#apertura-rl titolo="Current when an RL circuit is switched off"}
An RL circuit carries a steady-state current $I_0$. At time $t = 0$ a changeover switch disconnects the source and connects the inductor across the resistor $R$, forming a closed loop. Then, for $t \geq 0$, the current is
$$
i(t) = I_0\,e^{-\frac{t}{\tau}} , \qquad \tau = \frac{L}{R} .
$$
The current does not drop to zero abruptly because the self-induced emf opposes the decrease. After a time $\tau$, the current has fallen to $37\,\%$ of its initial value since $e^{-1} \approx 0.37$. It falls to half its initial value in a time $\tau \ln 2$. In the circuit with $I_0 = 3.0\,\mathrm{A}$, $R = 2.0\,\mathrm{\Omega}$, and $L = 4.0\,\mathrm{mH}$, the current falls by half in $2.0 \cdot 0.693\,\mathrm{ms} = 1.4\,\mathrm{ms}$. After $4.0\,\mathrm{ms}$, or $2\tau$, it is
$$
i = 3.0 \cdot e^{-2}\,\mathrm{A} = 0.41\,\mathrm{A} .
$$

::grafico{f="3*exp(-x/2)+0*sqrt(x)" segmenti="0,3,2,0;2,0,2,1.104;4,0,4,0.406" punti="2,1.104,pieno;4,0.406,pieno" xmin=-2 xmax=12 ymin=-1 ymax=4 nomi="t,i" legenda="i = 3.0\,e^{-\frac{t}{2.0}}" titolo="Current after switching off, for $I_0 = 3.0\,\mathrm{A}$ and $\tau = 2.0\,\mathrm{ms}$, with time in milliseconds. The tangent at the start of the curve intersects the time axis at $t = \tau$, when the current is $1.1\,\mathrm{A}$. At $t = 2\tau$ the current is $0.41\,\mathrm{A}$"}

:::dimostrazione
After the source is disconnected, the only emf in the loop formed by the inductor and resistor is the self-induced emf. Kirchhoff's loop rule therefore gives
$$
-L\,\frac{di}{dt} = R\,i
\quad\Longrightarrow\quad
\frac{di}{dt} + \frac{R}{L}\,i = 0 .
$$
The initial condition is $i(0) = I_0$ because a jump in current would make its derivative $\dfrac{di}{dt}$ and hence the self-induced emf infinite. The derivative of the function $i(t) = I_0\,e^{-\frac{t}{\tau}}$ is $\dfrac{di}{dt} = -\dfrac{I_0}{\tau}\,e^{-\frac{t}{\tau}} = -\dfrac{R}{L}\,I_0\,e^{-\frac{t}{\tau}}$. Substitution into the equation gives
$$
\frac{di}{dt} + \frac{R}{L}\,i = -\frac{R}{L}\,I_0\,e^{-\frac{t}{\tau}} + \frac{R}{L}\,I_0\,e^{-\frac{t}{\tau}} = 0 ,
$$
and $i(0) = I_0\,e^{0} = I_0$ as well. The **initial value problem** with $a = \dfrac{R}{L}$ and $b = 0$ has a unique solution, so the current is $i(t) = I_0\,e^{-\frac{t}{\tau}}$.
:::
::::

:::osservazione{#extratensione titolo="Voltage spike at switch-off"}
At the instant the source is disconnected, the inductor current is still $I_0$ and flows through the resistor that now forms a closed loop with the inductor. If that resistor has resistance $R'$, the voltage across it is $R' I_0$, which can be much greater than the source emf. Consider the circuit with $L = 4.0\,\mathrm{mH}$ and $I_0 = 3.0\,\mathrm{A}$ supplied by $6.0\,\mathrm{V}$. If the inductor is switched across a $200\,\mathrm{\Omega}$ resistor, the initial voltage across the resistor is
$$
R' I_0 = 200 \cdot 3.0\,\mathrm{V} = 600\,\mathrm{V} ,
$$
one hundred times the source emf, and the new time constant is $\dfrac{L}{R'} = 2.0 \cdot 10^{-5}\,\mathrm{s}$. This voltage is called the **switch-off voltage spike**. If a circuit containing an inductor is opened without leaving a path for the current, the resistance between the separating contacts is very high. The resulting voltage can make the air between the contacts conductive, producing a visible spark.
:::

## Energy stored in an inductor

::::teorema{#energia-induttore titolo="Energy stored in an inductor"}
An inductor of inductance $L$ carrying a current $I$ stores the energy
$$
U = \frac{1}{2} L I^2 .
$$
This energy equals the work, denoted by $W$ because $L$ denotes inductance, that the source does against the self-induced emf to increase the current from $0$ to $I$. When the current returns to zero, the inductor returns this energy to the circuit. For the inductor with $L = 4.0\,\mathrm{mH}$ carrying $3.0\,\mathrm{A}$, we obtain
$$
U = \frac{1}{2} \cdot 4.0 \cdot 10^{-3} \cdot 3.0^2\,\mathrm{J} = 1.8 \cdot 10^{-2}\,\mathrm{J} = 18\,\mathrm{mJ} .
$$

::grafico{f="4*x+0*sqrt(x)" area="4*x;0;0;3" punti="3,12,pieno" segmenti="3,0,3,12;0,12,3,12" etichette="2.1,4,U" xmin=-1 xmax=5 ymin=-2 ymax=18 nomi="i,Φ" legenda="\Phi_B = 4.0\,i" titolo="Self-flux linkage $\Phi_B = L\,i$ in milliwebers as a function of current in amperes, for $L = 4.0\,\mathrm{mH}$. The area of the triangle up to $I = 3.0\,\mathrm{A}$ is $\dfrac{1}{2} \cdot 3.0 \cdot 12\,\mathrm{mJ} = 18\,\mathrm{mJ}$, that is, $\dfrac{1}{2} L I^2$"}

:::dimostrazione
We add the work done by the source against the self-induced emf over many small time intervals. Consider an interval $\Delta t$ during which the current is approximately $i$ and increases by $\Delta i$. In that interval a charge $\Delta q = i\,\Delta t$ passes through the circuit, and the magnitude of the self-induced emf is $L\,\dfrac{\Delta i}{\Delta t}$. The work done to move a charge against an emf equals the emf times the charge, so
$$
\Delta W = L\,\frac{\Delta i}{\Delta t} \cdot i\,\Delta t = L\,i\,\Delta i .
$$
On a graph of $L\,i$ with $i$ on the horizontal axis, the product $L\,i\,\Delta i$ is the area of a narrow rectangle of width $\Delta i$ and height $L\,i$. We add these contributions as the current increases from $0$ to $I$ and let the intervals approach zero. The sum then approaches the area under the graph, given by the definite integral
$$
W = \int_0^I L\,i\,di = L \left[ \frac{i^2}{2} \right]_0^I = \frac{1}{2} L I^2 .
$$
This is the area of a triangle of base $I$ and height $L I$. The source also supplies the energy that the resistor converts to heat by Joule heating and releases to the surroundings. The work done against the self-induced emf is stored in the inductor, so $U = W = \dfrac{1}{2} L I^2$.
:::
::::

:::osservazione{#bilancio-energetico-rl titolo="Energy balance in an RL circuit"}
Multiplying both sides of the circuit equation by $i$, with the equation written as $\mathcal{E} = R\,i + L\,\dfrac{di}{dt}$, gives
$$
\mathcal{E}\,i = R\,i^2 + L\,i\,\frac{di}{dt} .
$$
The left-hand side is the power supplied by the source. The term $R\,i^2$ is the power dissipated as heat in the resistor. By the chain rule, $L\,i\,\dfrac{di}{dt}$ is the derivative of $\dfrac{1}{2} L i^2$, so it gives the rate at which the energy stored in the inductor increases. After the switch closes, some of the energy supplied by the source is converted to heat and some is stored in the inductor. In steady state $\dfrac{di}{dt} = 0$, and all the power goes to the resistor.

When the source is disconnected, the energy stored in the inductor is converted to heat in the resistor. With $i(t) = I_0\,e^{-\frac{t}{\tau}}$, the energy dissipated is the improper integral
$$
\int_0^{+\infty} R\,I_0^2\,e^{-\frac{2t}{\tau}}\,dt = R\,I_0^2 \left[ -\frac{\tau}{2}\,e^{-\frac{2t}{\tau}} \right]_0^{+\infty} = R\,I_0^2\,\frac{\tau}{2} = \frac{1}{2} L I_0^2 ,
$$
where the last step uses $R\,\tau = L$. For $L = 4.0\,\mathrm{mH}$ and $I_0 = 3.0\,\mathrm{A}$, the resistor dissipates $18\,\mathrm{mJ}$, exactly the energy originally stored in the inductor.
:::

## Energy density of a magnetic field

::::teorema{#densita-energia-magnetica titolo="Energy density of a magnetic field"}
In a region of vacuum or air where the magnetic field has magnitude $B$, the energy per unit volume is
$$
u_B = \frac{B^2}{2\mu_0} .
$$
The energy of an inductor is therefore stored in the magnetic field produced by the current. We derive the formula for a solenoid and take it to hold for any magnetic field. If the field is uniform throughout a volume $V$, the energy in that volume is $u_B\,V$. The units are consistent because $\mathrm{T^2/(T \cdot m/A)} = \mathrm{T \cdot A/m}$ and $1\,\mathrm{T} = 1\,\mathrm{N/(A \cdot m)}$, giving $\mathrm{N/m^2} = \mathrm{J/m^3}$. For example, the energy density of a $0.50\,\mathrm{T}$ field is
$$
u_B = \frac{0.50^2}{2 \cdot 4\pi \cdot 10^{-7}}\,\mathrm{J/m^3} = 9.9 \cdot 10^4\,\mathrm{J/m^3} ,
$$
and the energy stored in one cubic centimeter, or $1.0 \cdot 10^{-6}\,\mathrm{m^3}$, is $9.9 \cdot 10^{-2}\,\mathrm{J}$.

:::dimostrazione
Consider a solenoid of length $\ell$ with $N$ turns of area $S$, carrying a current $I$. From the results for the **inductance of a solenoid** and the **energy stored in an inductor**,
$$
U = \frac{1}{2} L I^2 = \frac{1}{2} \cdot \frac{\mu_0 N^2 S}{\ell} \cdot I^2 .
$$
The internal field is $B = \mu_0\,\dfrac{N}{\ell}\,I$, so $N I = \dfrac{B \ell}{\mu_0}$ and $N^2 I^2 = \dfrac{B^2 \ell^2}{\mu_0^2}$. Substituting for $N^2 I^2$ gives
$$
U = \frac{1}{2} \cdot \frac{\mu_0 S}{\ell} \cdot \frac{B^2 \ell^2}{\mu_0^2} = \frac{B^2}{2\mu_0}\,S \ell .
$$
The field is uniform inside the solenoid, which has volume $S \ell$, and negligible outside. The energy is therefore distributed uniformly throughout the volume $S \ell$, and the energy per unit volume is $u_B = \dfrac{U}{S \ell} = \dfrac{B^2}{2\mu_0}$.
:::
::::

:::esempio{titolo="Energy in the 500-turn solenoid"}
The solenoid of length $25\,\mathrm{cm}$ has $500$ turns of radius $1.0\,\mathrm{cm}$, an inductance of $3.95 \cdot 10^{-4}\,\mathrm{H}$, and carries a current $I = 4.0\,\mathrm{A}$. The internal field and energy density are
$$
B = 4\pi \cdot 10^{-7} \cdot \frac{500}{0.25} \cdot 4.0\,\mathrm{T} = 1.0 \cdot 10^{-2}\,\mathrm{T} ,
\qquad
u_B = \frac{\left( 1.0 \cdot 10^{-2} \right)^2}{2 \cdot 4\pi \cdot 10^{-7}}\,\mathrm{J/m^3} = 40\,\mathrm{J/m^3} .
$$
The internal volume is $S \ell = 3.14 \cdot 10^{-4} \cdot 0.25\,\mathrm{m^3} = 7.9 \cdot 10^{-5}\,\mathrm{m^3}$, so the energy is $U = 40 \cdot 7.9 \cdot 10^{-5}\,\mathrm{J} = 3.2 \cdot 10^{-3}\,\mathrm{J}$. Using the inductance gives the same value, $U = \dfrac{1}{2} \cdot 3.95 \cdot 10^{-4} \cdot 4.0^2\,\mathrm{J} = 3.2 \cdot 10^{-3}\,\mathrm{J}$.
:::

:::osservazione{#confronto-energia-elettrica titolo="Comparison with electric field energy"}
As we saw in the study of capacitors, the energy density of an electric field is $u_E = \dfrac{1}{2} \varepsilon_0 E^2$. In an electric field of $1.0 \cdot 10^6\,\mathrm{V/m}$, below the value of about $3 \cdot 10^6\,\mathrm{V/m}$ at which air becomes conductive, the energy density is
$$
u_E = \frac{1}{2} \cdot 8.85 \cdot 10^{-12} \cdot \left( 1.0 \cdot 10^6 \right)^2\,\mathrm{J/m^3} = 4.4\,\mathrm{J/m^3} ,
$$
whereas a magnetic field of $0.50\,\mathrm{T}$, attainable with a laboratory electromagnet, has an energy density of $9.9 \cdot 10^4\,\mathrm{J/m^3}$. Both energy densities are used to calculate the energy carried by an electromagnetic wave, as discussed in the chapter on Maxwell's equations and electromagnetic waves.
:::

## Mutual induction

:::definizione{#mutua-induttanza titolo="Mutual inductance"}
Two stationary circuits are close together, and the first carries a current $i_1$. The magnetic field produced by $i_1$ passes through the second circuit as well. The flux $\Phi_{21}$ of this field linking the second circuit is proportional to $i_1$. The proportionality constant is the **mutual inductance** $M$ of the two circuits:
$$
\Phi_{21} = M\,i_1 .
$$
If $i_1$ changes, Faraday's law of induction gives the emf induced in the second circuit:
$$
\mathcal{E}_2 = -M\,\frac{di_1}{dt} .
$$
This phenomenon is called **mutual induction**. Mutual inductance is measured in henries and depends on the shape of the two circuits and their relative positions. It also has the property of *reciprocity*, which we accept without proof. This means that if the second circuit carries a current $i_2$, the flux linking the first circuit is $M\,i_2$, with the same constant $M$. For example, if $M = 2.0\,\mathrm{mH}$ and the current in the first circuit increases uniformly by $50\,\mathrm{A}$ each second, the magnitude of the emf induced in the second circuit is $2.0 \cdot 10^{-3} \cdot 50\,\mathrm{V} = 0.10\,\mathrm{V}$.
:::

::::teorema{#mutua-induttanza-solenoidi titolo="Mutual inductance of two coaxial solenoids"}
An air-core solenoid of length $\ell_1$ has $N_1$ turns and is long compared with its radius. Inside it, far from its ends, is a coaxial coil with $N_2$ turns of area $S_2$ each. The mutual inductance is then
$$
M = \frac{\mu_0 N_1 N_2 S_2}{\ell_1} .
$$
For example, if the outer solenoid has $2000$ turns per meter, so $\dfrac{N_1}{\ell_1} = 2000\,\mathrm{m^{-1}}$, and the inner coil has $100$ turns of radius $1.5\,\mathrm{cm}$, then
$$
M = 4\pi \cdot 10^{-7} \cdot 2000 \cdot 100 \cdot \pi \cdot 0.015^2\,\mathrm{H} = 1.8 \cdot 10^{-4}\,\mathrm{H} .
$$
If the current in the outer solenoid increases by $40\,\mathrm{A}$ each second, the magnitude of the emf induced in the inner coil is $1.78 \cdot 10^{-4} \cdot 40\,\mathrm{V} = 7.1 \cdot 10^{-3}\,\mathrm{V}$.

::grafico{assi=0 linee="0,1.4 7,1.4;0,-1.4 7,-1.4;2.5,0.6 4.5,0.6;2.5,-0.6 4.5,-0.6" vettori="0.3,0,2.1,0,B₁;4.9,0,6.7,0" etichette="0.25,1.4,⊙;0.75,1.4,⊙;1.25,1.4,⊙;1.75,1.4,⊙;2.25,1.4,⊙;2.75,1.4,⊙;3.25,1.4,⊙;3.75,1.4,⊙;4.25,1.4,⊙;4.75,1.4,⊙;5.25,1.4,⊙;5.75,1.4,⊙;6.25,1.4,⊙;6.75,1.4,⊙;0.25,-1.4,⊗;0.75,-1.4,⊗;1.25,-1.4,⊗;1.75,-1.4,⊗;2.25,-1.4,⊗;2.75,-1.4,⊗;3.25,-1.4,⊗;3.75,-1.4,⊗;4.25,-1.4,⊗;4.75,-1.4,⊗;5.25,-1.4,⊗;5.75,-1.4,⊗;6.25,-1.4,⊗;6.75,-1.4,⊗;7.4,1.4,1;3.5,0.15,2" unicolore=1 xmin=-0.5 xmax=7.9 ymin=-2 ymax=2 uguale=1 titolo="Cross section of two coaxial solenoids. The outer solenoid $1$ carries a current $i_1$ and produces a uniform field $\vec{B}_1$ that passes through every turn of the inner coil $2$"}

:::dimostrazione
The current $i_1$ in the outer solenoid produces a uniform internal field $B_1 = \mu_0\,\dfrac{N_1}{\ell_1}\,i_1$ parallel to the axis. The field is perpendicular to the plane of the turns of the inner coil, so the flux through each turn is $B_1 S_2$ and the flux linkage of its $N_2$ turns is
$$
\Phi_{21} = N_2 B_1 S_2 = \frac{\mu_0 N_1 N_2 S_2}{\ell_1}\,i_1 .
$$
The definition of mutual inductance gives $M = \dfrac{\Phi_{21}}{i_1} = \dfrac{\mu_0 N_1 N_2 S_2}{\ell_1}$.
:::
::::

:::osservazione{#verso-mutua-induzione titolo="Direction of the induced current and the transformer"}
If the inner coil forms a closed circuit, Lenz's law gives the direction of the induced current. When the current in the outer solenoid increases, the flux through the coil increases. The induced current therefore flows in the direction opposite to $i_1$, and its field opposes that increase. When $i_1$ decreases, the induced current flows in the same direction as $i_1$.

If the two coils are wound on the same tube and their turns have the same area, the same flux passes through each turn. The self-induced emf in the first coil and the emf induced in the second are then proportional to their respective numbers of turns, $\dfrac{\mathcal{E}_2}{\mathcal{E}_1} = \dfrac{N_2}{N_1}$. This is the operating principle of the transformer, discussed in the chapter on alternating current and transformers.
:::
