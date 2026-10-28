---
titolo: Electric current and direct-current circuits
sommario: What current and current density are, how Ohm's law and resistivity relate current and voltage, how much power a resistor dissipates, how to solve a circuit with real sources, resistors in series and in parallel and Kirchhoff's laws, and how capacitors charge and discharge in an RC circuit.
---

## Electric current and current density

Throughout this topic the conductors are metallic and homogeneous and the connecting wires have negligible resistance. The currents are steady, except in the RC circuit, where they vary slowly enough that the laws of the steady regime can be applied at every instant.

:::definizione{#corrente-elettrica titolo="Electric current"}
An ordered motion of charges is called an **electric current**. If the charge $\Delta q$ passes through a cross section of a conductor in the time interval $\Delta t$, the average current is $\dfrac{\Delta q}{\Delta t}$; the instantaneous **current** is
$$
i(t) = \frac{dq}{dt} ,
$$
and when it does not vary in time it is denoted by $I$. In the International System it is measured in amperes, $1\,\mathrm{A} = 1\,\mathrm{C/s}$. The conventional direction of the current is the one in which positive charges move; in metals the charge carriers are electrons, which move in the opposite direction.

From the definition it follows that the charge crossing the section between the instants $t_1$ and $t_2$ is $q = \displaystyle\int_{t_1}^{t_2} i(t)\,dt$, that is, the area under the graph of $i(t)$. A constant current of $3.0\,\mathrm{A}$ carries in one minute the charge $3.0 \cdot 60\,\mathrm{C} = 180\,\mathrm{C}$, equal to that of $\dfrac{180}{1.60 \cdot 10^{-19}} \approx 1.1 \cdot 10^{21}$ electrons.
:::

:::richiamo{titolo="Flux of a vector field"}
The flux of a vector field $\vec{J}$ through a surface $S$ oriented by the normal $\hat{n}$ is the surface integral $\displaystyle\iint_S \vec{J} \cdot \hat{n}\,dA$. See the topic on surfaces, fluxes and the theorems of Gauss and Stokes in Analysis 2.
:::

:::definizione{#densita-di-corrente titolo="Current density"}
The **current density** $\vec{J}$ is the vector that at every point of the conductor has the direction of motion of the positive charges and as magnitude the current per unit area through a small surface perpendicular to that direction. The current through a cross section $S$ is the flux of $\vec{J}$:
$$
I = \iint_S \vec{J} \cdot \hat{n}\,dA .
$$
If $\vec{J}$ is uniform and perpendicular to the cross section of area $A$, the flux reduces to $I = J A$. The unit is $\mathrm{A/m^2}$. The current describes the conductor as a whole, the current density describes the motion of the charges point by point; for example, a current of $2.0\,\mathrm{A}$ in a wire of cross section $1.0\,\mathrm{mm^2}$ has density $J = \dfrac{2.0}{1.0 \cdot 10^{-6}}\,\mathrm{A/m^2} = 2.0 \cdot 10^{6}\,\mathrm{A/m^2}$.
:::

::::teorema{#velocita-di-deriva titolo="Current density and drift velocity"}
Consider a conductor with $n$ charge carriers per unit volume, each with charge $q$, moving with average velocity $\vec{v}_d$, called the **drift velocity**. Then
$$
\vec{J} = n q\, \vec{v}_d .
$$
In metals $q = -e$, therefore $\vec{J}$ and $\vec{v}_d$ have opposite directions, and in a wire of cross section $A$ we have $v_d = \dfrac{I}{n e A}$. The drift velocity is very small: in a copper wire, with $n = 8.5 \cdot 10^{28}\,\mathrm{m^{-3}}$, cross section $1.0\,\mathrm{mm^2}$ and current $2.0\,\mathrm{A}$, it is
$$
v_d = \frac{2.0}{8.5 \cdot 10^{28} \cdot 1.60 \cdot 10^{-19} \cdot 1.0 \cdot 10^{-6}}\,\mathrm{m/s} \approx 1.5 \cdot 10^{-4}\,\mathrm{m/s} .
$$
A lamp nevertheless lights up as soon as the switch is closed, because the electric field is established along the whole wire in a very short time and sets the electrons of every stretch of the circuit in motion almost simultaneously.

::grafico{assi=0 uguale=1 poligoni="3,-1 4.6,-1 4.6,1 3,1" linee="0,1 7,1;0,-1 7,-1;0.35,0 0.343,0.195 0.323,0.383 0.291,0.556 0.247,0.707 0.194,0.831 0.134,0.924 0.068,0.981 0,1 -0.068,0.981 -0.134,0.924 -0.194,0.831 -0.247,0.707 -0.291,0.556 -0.323,0.383 -0.343,0.195 -0.35,0 -0.343,-0.195 -0.323,-0.383 -0.291,-0.556 -0.247,-0.707 -0.194,-0.831 -0.134,-0.924 -0.068,-0.981 0,-1 0.068,-0.981 0.134,-0.924 0.194,-0.831 0.247,-0.707 0.291,-0.556 0.323,-0.383 0.343,-0.195 0.35,0;3.35,0 3.343,0.195 3.323,0.383 3.291,0.556 3.247,0.707 3.194,0.831 3.134,0.924 3.068,0.981 3,1 2.932,0.981 2.866,0.924 2.806,0.831 2.753,0.707 2.709,0.556 2.677,0.383 2.657,0.195 2.65,0 2.657,-0.195 2.677,-0.383 2.709,-0.556 2.753,-0.707 2.806,-0.831 2.866,-0.924 2.932,-0.981 3,-1 3.068,-0.981 3.134,-0.924 3.194,-0.831 3.247,-0.707 3.291,-0.556 3.323,-0.383 3.343,-0.195 3.35,0;4.95,0 4.943,0.195 4.923,0.383 4.891,0.556 4.847,0.707 4.794,0.831 4.734,0.924 4.668,0.981 4.6,1 4.532,0.981 4.466,0.924 4.406,0.831 4.353,0.707 4.309,0.556 4.277,0.383 4.257,0.195 4.25,0 4.257,-0.195 4.277,-0.383 4.309,-0.556 4.353,-0.707 4.406,-0.831 4.466,-0.924 4.532,-0.981 4.6,-1 4.668,-0.981 4.734,-0.924 4.794,-0.831 4.847,-0.707 4.891,-0.556 4.923,-0.383 4.943,-0.195 4.95,0" punti="0.9,0.5,pieno;1.6,-0.4,pieno;2.3,0.3,pieno;3.5,-0.5,pieno;3.8,0.45,pieno;4.2,-0.1,pieno;5.3,0.55,pieno;5.9,-0.45,pieno;6.5,0.2,pieno;1.2,-0.7,pieno;2.6,-0.6,pieno" vettori="5.2,-1.6,6.8,-1.6" segmenti="3,-1.25,3,-1.75;4.6,-1.25,4.6,-1.75;3,-1.5,4.6,-1.5" etichette="2.6,1.35,dA" xmin=-0.6 xmax=7.6 ymin=-2.4 ymax=1.8 titolo="In the time $dt$ the carriers contained in the colored cylinder, of length $v_d\,dt$, cross the section $dA$; the arrow shows the direction of the drift velocity $\vec{v}_d$"}

:::dimostrazione
Consider a surface element $dA$ perpendicular to $\vec{v}_d$. In the time $dt$ each carrier advances by $v_d\,dt$, therefore the carriers contained in the cylinder of base $dA$ and height $v_d\,dt$ cross $dA$. The cylinder has volume $v_d\,dt\,dA$ and contains $n\,v_d\,dt\,dA$ carriers, hence the charge crossing $dA$ is $dq = n q\, v_d\,dt\,dA$. Dividing by $dt$ and by $dA$ gives the magnitude $|\vec{J}| = n\,|q|\,v_d$. If $q > 0$ the current has the direction of $\vec{v}_d$, if $q < 0$ it has the opposite direction; in both cases $\vec{J} = n q\, \vec{v}_d$.
:::
::::

:::osservazione{#corrente-stazionaria titolo="Steady current and conservation of charge"}
In the steady regime the charge distribution does not change in time, therefore as much charge enters each region of the conductor as leaves it. By **conservation of charge**, the flux of $\vec{J}$ through every closed surface is zero:
$$
\oiint \vec{J} \cdot \hat{n}\,dA = 0 .
$$
It follows that in a wire without branches the current is the same in every cross section, even if the cross section changes; where the wire narrows, the current density and the drift velocity increase. By the divergence theorem the relation is equivalent to the local form $\nabla \cdot \vec{J} = 0$.
:::

## Ohm's law and resistance

:::definizione{#resistenza titolo="Electrical resistance"}
Consider a conductor with two ends $A$ and $B$, carrying the current $I$ that enters at $A$ and leaves at $B$, and let $\Delta V = V_A - V_B$. The **resistance** of the conductor is
$$
R = \frac{\Delta V}{I} ,
$$
and it is measured in ohms, $1\,\Omega = 1\,\mathrm{V/A}$. In conductors the current goes from the point at higher potential to the point at lower potential, therefore $R > 0$. A component designed to have a known resistance is called a **resistor**.
:::

:::teorema{#legge-di-ohm titolo="Ohm's law"}
This is an experimental law: for a metallic conductor at constant temperature the current is proportional to the applied potential difference,
$$
\Delta V = R\, I ,
$$
with $R$ independent of $\Delta V$ and of $I$. Conductors that satisfy the law are called **ohmic**, and their characteristic curve, the graph of $I$ as a function of $\Delta V$, is a straight line through the origin with slope $\dfrac{1}{R}$. The law makes it possible to obtain one of the three quantities when the other two are known: a $20\,\Omega$ resistor connected to $12\,\mathrm{V}$ carries $I = \dfrac{12}{20}\,\mathrm{A} = 0.60\,\mathrm{A}$.

::grafico{f="x/2;x/4" xmin=-0.6 xmax=10.6 ymin=-0.6 ymax=5.8 nomi="ΔV,I" legenda="R_1 = 2\,\Omega;R_2 = 4\,\Omega" titolo="Characteristic curves of two ohmic resistors, with $\Delta V$ in volts and $I$ in amperes: they are straight lines through the origin with slope $\dfrac{1}{R}$, and for the same voltage the resistor with the smaller resistance carries a larger current"}

:::

:::attenzione{#componenti-non-ohmici}
The ratio $\dfrac{\Delta V}{I}$ can be computed for any component, but Ohm's law holds only if the ratio is constant. A semiconductor diode is a *non*-ohmic component: with the voltage applied in one direction it carries a negligible current, in the opposite direction the current grows very rapidly with the voltage, and its characteristic curve is not a straight line.
:::

:::teorema{#legge-di-ohm-locale titolo="Ohm's law in local form"}
This is an experimental law: in an ohmic homogeneous material the current density is proportional to the electric field,
$$
\vec{E} = \rho\, \vec{J} ,
$$
where $\rho$ is the **resistivity** of the material; in this topic $\rho$ always denotes resistivity, because the volume charge density does not appear. Resistivity is measured in $\Omega \cdot \mathrm{m}$, and its reciprocal $\sigma = \dfrac{1}{\rho}$ is called conductivity. Resistance is a property of the individual object, resistivity a property of the material. The law gives the electric field inside a wire carrying current: in copper, with $\rho = 1.7 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ and $J = 2.0 \cdot 10^{6}\,\mathrm{A/m^2}$, we have $E = 0.034\,\mathrm{V/m}$. The field is nonzero because the conductor is *not* in electrostatic equilibrium; for conductors in equilibrium see the topic on conductors, capacitors and dielectrics.
:::

::::teorema{#resistenza-di-un-filo titolo="Resistance of a wire"}
Consider a homogeneous cylindrical conductor of length $\ell$, cross-sectional area $A$ and resistivity $\rho$, carrying a steady current with uniform density parallel to the axis. Then
$$
R = \rho\, \frac{\ell}{A} .
$$
The resistance is proportional to the length and inversely proportional to the cross-sectional area. A copper wire $10\,\mathrm{m}$ long with a cross section of $1.0\,\mathrm{mm^2}$ has $R = 1.7 \cdot 10^{-8} \cdot \dfrac{10}{1.0 \cdot 10^{-6}}\,\Omega = 0.17\,\Omega$, a resistance negligible compared with that of almost all the appliances it supplies.

:::dimostrazione
The current density is uniform and perpendicular to the cross section, therefore $J = \dfrac{I}{A}$. By **Ohm's law in local form** the electric field is uniform, parallel to the axis and of magnitude $E = \rho J = \dfrac{\rho I}{A}$. The potential difference between the ends is the line integral of the field along the axis, and for a uniform field parallel to the path it is
$$
\Delta V = \int_0^{\ell} E\,dx = E\,\ell = \frac{\rho\,\ell}{A}\, I .
$$
Hence $R = \dfrac{\Delta V}{I} = \rho\,\dfrac{\ell}{A}$.
:::
::::

## Resistivity and temperature

:::osservazione{#valori-resistivita titolo="Conductors and insulators"}
Resistivity distinguishes materials by their ability to conduct. At $20\,^\circ\mathrm{C}$ metals have small resistivities: about $1.7 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ for copper, $2.8 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ for aluminum, $5.6 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ for tungsten. Alloys such as nichrome reach about $1.1 \cdot 10^{-6}\,\Omega \cdot \mathrm{m}$, and for this reason they are used in the heating elements of ovens and heaters. Insulators, such as glass, have resistivities of the order of $10^{10}$–$10^{14}\,\Omega \cdot \mathrm{m}$, while semiconductors have intermediate values, which depend strongly on temperature and impurities.
:::

:::teorema{#resistivita-e-temperatura titolo="Temperature dependence of resistivity"}
This is an empirical law: in a limited range of temperatures around $T_0$ the resistivity of a metal grows linearly with temperature,
$$
\rho(T) = \rho_0 \left[ 1 + \alpha\,(T - T_0) \right] ,
$$
where $\rho_0$ is the resistivity at $T_0$ and $\alpha$ is the **temperature coefficient**, which is measured in $\mathrm{K^{-1}}$ and for pure metals is a few thousandths. Neglecting thermal expansion, which changes $\ell$ and $A$ to a much smaller extent, the resistance of a wire follows the same law, $R(T) = R_0 \left[ 1 + \alpha\,(T - T_0) \right]$. Resistance thermometers are based on this property. A copper winding, with $\alpha = 3.9 \cdot 10^{-3}\,\mathrm{K^{-1}}$, that has $R_0 = 10.0\,\Omega$ at $20\,^\circ\mathrm{C}$, has $R = 10.0 \cdot (1 + 3.9 \cdot 10^{-3} \cdot 60)\,\Omega \approx 12.3\,\Omega$ at $80\,^\circ\mathrm{C}$. Carbon and semiconductors have $\alpha < 0$, that is, their resistivity decreases when the temperature increases.
:::

:::osservazione{#modello-microscopico titolo="Microscopic model of conduction"}
In the Drude model the conduction electrons are accelerated by the field, with acceleration of magnitude $\dfrac{eE}{m_e}$, and at each collision with the lattice they lose the velocity acquired. If $t_c$ is the mean time between two collisions, the drift velocity is $v_d = \dfrac{eE}{m_e}\,t_c$, and by the relation between current density and drift velocity
$$
J = n e\, v_d = \frac{n e^2 t_c}{m_e}\, E
\quad\Longrightarrow\quad
\rho = \frac{m_e}{n e^2 t_c} .
$$
The model explains Ohm's law, since $J$ turns out to be proportional to $E$, and explains the increase of resistivity with temperature: the lattice vibrations become larger, the collisions more frequent and $t_c$ decreases.
:::

## Power and the Joule effect

::::teorema{#potenza-elettrica titolo="Power absorbed by a component"}
Consider a component with two ends $A$ and $B$, carrying the steady current $I$ that enters at $A$ and leaves at $B$, and let $\Delta V = V_A - V_B$. The power the component receives from the electric field is
$$
P = \Delta V\, I .
$$
In this subject work is denoted by $W$, because the letter $L$ is reserved for inductance. If $P > 0$ the component absorbs energy, like a resistor or a battery being charged; if $P < 0$ it delivers energy, like a source supplying a circuit. A motor connected to $12\,\mathrm{V}$ and carrying $2.0\,\mathrm{A}$ absorbs $24\,\mathrm{W}$.

:::dimostrazione
In the time $dt$ the charge $dq = I\,dt$ enters at $A$ and an equal charge leaves from $B$, because the current is steady. The net result is the transport of the charge $dq$ from the potential $V_A$ to the potential $V_B$, during which the electric field does work equal to the decrease in potential energy,
$$
dW = dq\,(V_A - V_B) = \Delta V\, I\, dt .
$$
Dividing by $dt$ gives the power $P = \dfrac{dW}{dt} = \Delta V\, I$.
:::
::::

:::teorema{#effetto-joule titolo="Joule effect"}
In a resistor of resistance $R$ carrying the current $I$ the energy received from the electric field is converted into internal energy of the conductor, which heats up, and the dissipated power is
$$
P = R I^2 = \frac{\Delta V^2}{R} .
$$
The two expressions follow from the absorbed power $P = \Delta V\, I$ by substituting $\Delta V = RI$ or $I = \dfrac{\Delta V}{R}$. At fixed current the power grows with $R$, at fixed voltage it decreases with $R$. A $2.0\,\mathrm{kW}$ kettle supplied at $230\,\mathrm{V}$ carries $I = \dfrac{2000}{230}\,\mathrm{A} \approx 8.7\,\mathrm{A}$ and has resistance $R = \dfrac{230^2}{2000}\,\Omega \approx 26\,\Omega$; in three minutes it consumes $2.0\,\mathrm{kW} \cdot 0.050\,\mathrm{h} = 0.10\,\mathrm{kWh}$, that is, $3.6 \cdot 10^5\,\mathrm{J}$.
:::

## Sources and electromotive force

:::richiamo{titolo="Circulation of the electrostatic field"}
The electrostatic field is conservative: along every closed curve $\gamma$ we have $\displaystyle\oint_\gamma \vec{E} \cdot d\vec{\ell} = 0$, and the potential difference between two points does not depend on the path. See the topic on the electric potential and electrostatic energy, and for line integrals the topic on curves and line integrals in Analysis 2.
:::

:::definizione{#forza-elettromotrice titolo="Electromotive force"}
By the reminder on circulation, the electrostatic field does zero work on a charge that goes around a closed circuit, while resistors dissipate energy. To maintain a current a **source** is therefore needed, a device in which forces of non-electrostatic nature (chemical in a battery, magnetic in a dynamo) push the positive charges from the negative terminal to the positive terminal, against the electrostatic field. If these forces do the work $W$ on a charge $q$ crossing the source, the **electromotive force** is
$$
\mathcal{E} = \frac{W}{q} ,
$$
and it is measured in volts. Despite its name, $\mathcal{E}$ is a work per unit charge; a $1.5\,\mathrm{V}$ battery supplies $1.5\,\mathrm{J}$ to every coulomb that crosses it. A source is called **ideal** if the potential difference between its terminals equals $\mathcal{E}$ whatever the current delivered.
:::

::::teorema{#generatore-reale titolo="Real source and internal resistance"}
A real source is described as an ideal source of electromotive force $\mathcal{E}$ in series with an **internal resistance** $r$. If it supplies an external resistor of resistance $R$, the current and the terminal voltage are
$$
I = \frac{\mathcal{E}}{R + r} ,
\qquad
\Delta V = \mathcal{E} - r I = \frac{R}{R + r}\,\mathcal{E} .
$$
The terminal voltage is smaller than $\mathcal{E}$ when the source delivers current, and coincides with $\mathcal{E}$ in open circuit, when $I = 0$; with the terminals connected by a wire of negligible resistance the current is the short-circuit current, $\dfrac{\mathcal{E}}{r}$. A battery with $\mathcal{E} = 9.0\,\mathrm{V}$ and $r = 0.50\,\Omega$ connected to $R = 4.0\,\Omega$ delivers $I = 2.0\,\mathrm{A}$ with $\Delta V = 8.0\,\mathrm{V}$ at the terminals.

::grafico{assi=0 uguale=1 linee="0,0 0,1.41;0,1.59 0,3;-0.36,1.59 0.36,1.59;-0.19,1.41 0.19,1.41;0,3 0.5,3;0.5,3 1,3 1.083,3.17 1.25,2.83 1.417,3.17 1.583,2.83 1.75,3.17 1.917,2.83 2,3 2.5,3;2.5,3 5.5,3;5.5,3 5.5,2 5.67,1.917 5.33,1.75 5.67,1.583 5.33,1.417 5.67,1.25 5.33,1.083 5.5,1 5.5,0;5.5,0 0,0" vettori="4,3.35,5,3.35" punti="3.4,3,pieno,A;3.4,0,pieno,B" segmenti="-1.2,-0.45,2.9,-0.45;2.9,-0.45,2.9,3.8;2.9,3.8,-1.2,3.8;-1.2,3.8,-1.2,-0.45" etichette="0.45,1.69,+;0.45,1.09,−;-0.65,1.43,ℰ;1.28,3.38,r;5.8,1.43,R;4.38,3.57,I;3.55,1.4,ΔV" xmin=-1.6 xmax=6.6 ymin=-0.8 ymax=4.2 titolo="Real source (in the dashed box): electromotive force $\mathcal{E}$ in series with the internal resistance $r$; between the terminals $A$ and $B$ the voltage is $\Delta V = \mathcal{E} - rI$"}

:::dimostrazione
In the steady regime the current is the same throughout the circuit, which has no branches. In the time $dt$ the ideal source does the work $\mathcal{E} I\,dt$ on the charge $I\,dt$, while by the **Joule effect** the two resistances dissipate the energy $(R + r)\, I^2\,dt$. The electrostatic field does zero work along the closed circuit, and the energy of the system does not change, therefore
$$
\mathcal{E} I = R I^2 + r I^2
\quad\Longrightarrow\quad
I = \frac{\mathcal{E}}{R + r} .
$$
The terminal voltage is the voltage across $R$, that is, $\Delta V = R I = \mathcal{E} - r I$.
:::
::::

::::teorema{#massimo-trasferimento-di-potenza titolo="Maximum power transfer"}
Consider a real source with fixed $\mathcal{E}$ and $r$, connected to a resistor of variable resistance $R$. The power dissipated in $R$,
$$
P(R) = \frac{\mathcal{E}^2 R}{(R + r)^2} ,
$$
is maximum for $R = r$ and equals $P_{\max} = \dfrac{\mathcal{E}^2}{4 r}$. In that condition the efficiency, the ratio of the power in $R$ to the power $\mathcal{E} I$ delivered by the source, is $\dfrac{R}{R + r} = \dfrac{1}{2}$. The condition $R = r$ is sought when the power on the load matters, as between an amplifier and a loudspeaker; in energy distribution the efficiency matters, and one works with $R$ much larger than $r$. With $\mathcal{E} = 12\,\mathrm{V}$ and $r = 2.0\,\Omega$ the maximum power is $\dfrac{144}{8.0}\,\mathrm{W} = 18\,\mathrm{W}$.

::grafico{f="(x>=0?1:NaN)*144*x/(x+2)^2" punti="2,18,pieno" segmenti="2,0,2,18" xmin=-0.9 xmax=20.5 ymin=-0.9 ymax=21 nomi="R,P" titolo="Power on the load as a function of $R$ (in ohms) for $\mathcal{E} = 12\,\mathrm{V}$ and $r = 2.0\,\Omega$: the maximum, $18\,\mathrm{W}$, occurs for $R = r$"}

:::dimostrazione
For the real source $I = \dfrac{\mathcal{E}}{R + r}$, therefore by the Joule effect $P = R I^2 = \dfrac{\mathcal{E}^2 R}{(R + r)^2}$. The derivative with respect to $R$ is
$$
P'(R) = \mathcal{E}^2\, \frac{(R + r)^2 - 2R\,(R + r)}{(R + r)^4} = \mathcal{E}^2\, \frac{r - R}{(R + r)^3} ,
$$
positive for $0 \leq R < r$ and negative for $R > r$. Hence $P$ is increasing on $[0, r]$ and decreasing on $[r, +\infty)$, and $R = r$ is the absolute maximum point, with $P(r) = \dfrac{\mathcal{E}^2 r}{4 r^2} = \dfrac{\mathcal{E}^2}{4 r}$.
:::
::::

## Resistors in series and in parallel

::::teorema{#resistori-in-serie titolo="Resistors in series"}
Several resistors are said to be **in series** if they are connected one after the other without branches, so that they carry the same current. The resistors $R_1, \dots, R_n$ in series are equivalent to a single resistor of resistance
$$
R_{\text{eq}} = R_1 + R_2 + \dots + R_n .
$$
The equivalent resistance is larger than each of the resistances. Three resistors of $10\,\Omega$, $20\,\Omega$ and $30\,\Omega$ in series, connected to $12\,\mathrm{V}$, are equivalent to $60\,\Omega$ and carry $0.20\,\mathrm{A}$; the voltages across them are $2.0\,\mathrm{V}$, $4.0\,\mathrm{V}$ and $6.0\,\mathrm{V}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.21;0,1.39 0,2.6;-0.36,1.39 0.36,1.39;-0.19,1.21 0.19,1.21;0,2.6 0.7,2.6 0.783,2.77 0.95,2.43 1.117,2.77 1.283,2.43 1.45,2.77 1.617,2.43 1.7,2.6 2.4,2.6;2.4,2.6 3.1,2.6 3.183,2.77 3.35,2.43 3.517,2.77 3.683,2.43 3.85,2.77 4.017,2.43 4.1,2.6 4.8,2.6;4.8,2.6 5.5,2.6 5.583,2.77 5.75,2.43 5.917,2.77 6.083,2.43 6.25,2.77 6.417,2.43 6.5,2.6 7.2,2.6;7.2,2.6 7.2,0 0,0" vettori="7.55,1.8,7.55,0.8" etichette="0.45,1.49,+;0.45,0.89,−;-0.65,1.23,ℰ;0.98,2.98,R₁;3.38,2.98,R₂;5.78,2.98,R₃;7.69,1.23,I" xmin=-1.4 xmax=8.4 ymin=-0.6 ymax=3.4 titolo="Resistors in series: they carry the same current $I$, and the voltages across them add"}

:::dimostrazione
By conservation of charge in the steady regime, the current $I$ is the same in every resistor. Denoting by $A$ and $B$ the ends of the series and by $\Delta V_k$ the voltage across the $k$-th resistor, the potential difference $V_A - V_B$ is the sum of the potential differences between consecutive connection points, and by **Ohm's law** $\Delta V_k = R_k I$. Therefore
$$
V_A - V_B = \Delta V_1 + \dots + \Delta V_n = (R_1 + \dots + R_n)\, I ,
$$
that is, the series behaves like a resistor of resistance $R_1 + \dots + R_n$.
:::
::::

::::teorema{#resistori-in-parallelo titolo="Resistors in parallel"}
Several resistors are said to be **in parallel** if they are connected between the same two nodes, so that they have the same potential difference across them. The resistors $R_1, \dots, R_n$ in parallel are equivalent to a single resistor of resistance $R_{\text{eq}}$ such that
$$
\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n} .
$$
The equivalent resistance is smaller than the smallest of the resistances; for two resistors $R_{\text{eq}} = \dfrac{R_1 R_2}{R_1 + R_2}$. Two resistors of $6.0\,\Omega$ and $3.0\,\Omega$ in parallel are equivalent to $\dfrac{18}{9.0}\,\Omega = 2.0\,\Omega$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.41;0,1.59 0,3;-0.36,1.59 0.36,1.59;-0.19,1.41 0.19,1.41;0,3 6.5,3;0,0 6.5,0;2.5,3 2.5,2 2.67,1.917 2.33,1.75 2.67,1.583 2.33,1.417 2.67,1.25 2.33,1.083 2.5,1 2.5,0;4.5,3 4.5,2 4.67,1.917 4.33,1.75 4.67,1.583 4.33,1.417 4.67,1.25 4.33,1.083 4.5,1 4.5,0;6.5,3 6.5,2 6.67,1.917 6.33,1.75 6.67,1.583 6.33,1.417 6.67,1.25 6.33,1.083 6.5,1 6.5,0" vettori="2.1,2.7,2.1,2;4.1,2.7,4.1,2;6.1,2.7,6.1,2;0.7,3.35,1.7,3.35" punti="2.5,3,pieno;4.5,3,pieno;2.5,0,pieno;4.5,0,pieno" etichette="0.45,1.69,+;0.45,1.09,−;-0.65,1.43,ℰ;2.8,1.43,R₁;2.24,2.28,I₁;4.8,1.43,R₂;4.24,2.28,I₂;6.8,1.43,R₃;6.24,2.28,I₃;1.08,3.57,I" xmin=-1.4 xmax=7.6 ymin=-0.6 ymax=3.9 titolo="Resistors in parallel: they have the same voltage across them, and the current $I$ divides among the branches, $I = I_1 + I_2 + I_3$"}

:::dimostrazione
The resistors have the same voltage $\Delta V$ across them, therefore by **Ohm's law** the $k$-th resistor carries $I_k = \dfrac{\Delta V}{R_k}$. The current $I$ arriving at the node divides among the branches and, by conservation of charge, is the sum of the branch currents:
$$
I = I_1 + \dots + I_n = \left( \frac{1}{R_1} + \dots + \frac{1}{R_n} \right) \Delta V .
$$
The parallel combination therefore behaves like a resistor with $\dfrac{1}{R_{\text{eq}}} = \dfrac{1}{R_1} + \dots + \dfrac{1}{R_n}$.
:::
::::

:::osservazione{#partitori titolo="Voltage divider and current divider"}
In a series subjected to the voltage $\Delta V$ the voltage is shared in proportion to the resistances, $\Delta V_k = \dfrac{R_k}{R_{\text{eq}}}\,\Delta V$ (**voltage divider**). In a parallel combination of two resistors carrying the total current $I$, the current is shared in inverse proportion to the resistances, $I_1 = \dfrac{R_2}{R_1 + R_2}\, I$ and $I_2 = \dfrac{R_1}{R_1 + R_2}\, I$ (**current divider**). The two formulas follow from the proofs on series and parallel, and make it possible to find voltages and currents without rewriting Ohm's law every time.
:::

:::esempio{titolo="Reduction of a network"}
An ideal source with $\mathcal{E} = 16\,\mathrm{V}$ supplies a resistor $R_1 = 4.0\,\Omega$ in series with the parallel combination of $R_2 = 6.0\,\Omega$ and $R_3 = 12\,\Omega$. The parallel combination is equivalent to $\dfrac{6.0 \cdot 12}{18}\,\Omega = 4.0\,\Omega$, therefore the network is equivalent to $8.0\,\Omega$ and the current delivered is $I = 2.0\,\mathrm{A}$. Across the parallel combination the voltage is $4.0 \cdot 2.0\,\mathrm{V} = 8.0\,\mathrm{V}$, and the current divider gives
$$
I_2 = \frac{12}{18} \cdot 2.0\,\mathrm{A} \approx 1.33\,\mathrm{A} ,
\qquad
I_3 = \frac{6.0}{18} \cdot 2.0\,\mathrm{A} \approx 0.67\,\mathrm{A} .
$$
:::

## Kirchhoff's laws

:::definizione{#nodi-rami-maglie titolo="Nodes, branches and loops"}
In a circuit, a **node** is a point where at least three conductors meet, a **branch** is a stretch of circuit between two consecutive nodes, a **loop** is a closed path formed by branches. Along a branch the current is the same at every point, because there are no branchings. A circuit with sources on different branches in general cannot be reduced to series and parallel combinations, and it is solved with Kirchhoff's laws, which hold for any network.
:::

::::teorema{#leggi-di-kirchhoff titolo="Kirchhoff's laws"}
Consider a circuit in the steady regime made of sources and resistors, with the internal resistances of the sources treated as resistors.

- **Junction rule**: at every node the sum of the incoming currents equals the sum of the outgoing currents.
- **Loop rule**: going around a loop in a chosen direction, $\sum_k \pm\,\mathcal{E}_k = \sum_k \pm\,R_k I_k$, where $\mathcal{E}_k$ has the sign $+$ if the source is traversed from the negative terminal to the positive terminal, and $R_k I_k$ has the sign $+$ if the branch current has the direction of traversal.

The two laws give a system of linear equations in the branch currents, which is solved with the methods of linear algebra.

:::dimostrazione
Consider a closed surface enclosing a node. By conservation of charge in the steady regime, the flux of $\vec{J}$ through the surface is zero, and the flux is the sum of the outgoing currents minus the sum of the incoming currents; the **junction rule** follows.

For the loop, go around the closed path adding up the changes in potential. The electrostatic field has zero circulation, therefore the sum of the changes along the closed path is zero. Crossing a resistor in the direction of the current the potential decreases by $R I$, because the current goes from higher to lower potential; crossing it in the opposite direction it increases by $R I$. Crossing an ideal source from the negative terminal to the positive terminal the potential increases by $\mathcal{E}$, in the opposite direction it decreases by $\mathcal{E}$. Setting the sum equal to zero gives $\sum_k \pm\,\mathcal{E}_k - \sum_k \pm\,R_k I_k = 0$, that is, the **loop rule**.
:::
::::

:::osservazione{#metodo-kirchhoff titolo="Solving a multi-loop circuit"}
For a circuit with $n$ nodes and $b$ branches, an unknown current with an arbitrary direction is assigned to each branch. The junction rule gives $n - 1$ independent equations, because the equation of the last node is the sum of the others; the loop rules give $b - n + 1$ independent equations, choosing loops each of which contains at least one branch not used in the previous ones. This yields $b$ equations in the $b$ unknowns. A current with a negative value flows in the direction opposite to the one chosen. The result is checked with the power balance: the power delivered by the sources equals the sum of the powers dissipated in the resistors and absorbed by the sources being charged.
:::

:::esempio{titolo="Circuit with two sources"}
Two ideal sources with $\mathcal{E}_1 = 12\,\mathrm{V}$ and $\mathcal{E}_2 = 6.0\,\mathrm{V}$, in series with $R_1 = 2.0\,\Omega$ and $R_2 = 3.0\,\Omega$ respectively, are connected between the nodes $A$ and $B$ with the positive terminals toward $A$; $R_3 = 6.0\,\Omega$ is connected between the same nodes. The currents $I_1$ and $I_2$ are chosen directed toward $A$ in the branches of the sources and $I_3$ directed from $A$ to $B$ in $R_3$. The junction rule at node $A$ and the loop rules for the two loops containing $R_3$ give
$$
\begin{cases}
I_1 + I_2 = I_3 \\[4pt]
\mathcal{E}_1 = R_1 I_1 + R_3 I_3 \\[4pt]
\mathcal{E}_2 = R_2 I_2 + R_3 I_3
\end{cases}
\quad\Longrightarrow\quad
I_1 = 2.0\,\mathrm{A} , \quad
I_2 \approx -0.67\,\mathrm{A} , \quad
I_3 \approx 1.33\,\mathrm{A} .
$$
The current $I_2$ is negative, therefore in the branch of $\mathcal{E}_2$ the current flows from $A$ to $B$ and enters the source at the positive terminal: source 2 **absorbs** the power $\mathcal{E}_2\,|I_2| = 4.0\,\mathrm{W}$, like a battery being charged. Source 1 delivers $\mathcal{E}_1 I_1 = 24\,\mathrm{W}$, and the resistors dissipate $8.0\,\mathrm{W} + 1.3\,\mathrm{W} + 10.7\,\mathrm{W} = 20\,\mathrm{W}$, in agreement with the power balance.

::grafico{assi=0 uguale=1 linee="0,0 0,0.91;0,1.09 0,2;-0.36,1.09 0.36,1.09;-0.19,0.91 0.19,0.91;0,2 0,2.5 0.17,2.583 -0.17,2.75 0.17,2.917 -0.17,3.083 0.17,3.25 -0.17,3.417 0,3.5 0,4;3.5,0 3.5,1.5 3.67,1.583 3.33,1.75 3.67,1.917 3.33,2.083 3.67,2.25 3.33,2.417 3.5,2.5 3.5,4;7,0 7,0.91;7,1.09 7,2;6.64,1.09 7.36,1.09;6.81,0.91 7.19,0.91;7,2 7,2.5 7.17,2.583 6.83,2.75 7.17,2.917 6.83,3.083 7.17,3.25 6.83,3.417 7,3.5 7,4;0,4 7,4;0,0 7,0" vettori="0.8,4.35,1.9,4.35;6.2,4.35,5.1,4.35;3.05,3.6,3.05,2.8" punti="3.5,4,pieno,A;3.5,0,pieno,B" etichette="0.45,1.19,+;0.45,0.59,−;-0.8,0.93,ℰ₁;0.3,2.93,R₁;3.8,1.93,R₃;6.38,1.19,+;6.4,0.59,−;7.5,0.93,ℰ₂;6.44,2.93,R₂;1.23,4.57,I₁;5.53,4.57,I₂;3.19,3.13,I₃" xmin=-1.5 xmax=8.6 ymin=-0.6 ymax=5.0 titolo="Circuit with two sources: the currents $I_1$ and $I_2$ are chosen toward node $A$, the current $I_3$ from $A$ to $B$; the calculation gives $I_2 < 0$"}

:::

:::osservazione{#amperometro-voltmetro titolo="Ammeter and voltmeter"}
The **ammeter** measures the current in a branch and is inserted in series; for its presence not to change the current, its resistance must be small compared with that of the branch, and the ideal one has zero resistance. The **voltmeter** measures the voltage between two points and is connected in parallel; its resistance must be large compared with that of the stretch across which the measurement is made, and the ideal one has infinite resistance. A $10\,\mathrm{M\Omega}$ voltmeter connected across a $10\,\mathrm{k\Omega}$ resistor forms a $9.99\,\mathrm{k\Omega}$ parallel combination, and the measurement changes the resistance of the stretch by about one part in a thousand.
:::

## RC circuit: charging and discharging the capacitor

When there is a capacitor in the circuit the current varies in time; the quasi-steady regime is assumed, in which at every instant the current is the same throughout a branch and Kirchhoff's laws hold.

:::richiamo{titolo="Capacitance and energy of a capacitor"}
A capacitor of capacitance $C$ with charge $q$ on the plates has the voltage $\Delta V = \dfrac{q}{C}$ between the plates and stores the energy $U = \dfrac{q^2}{2C} = \dfrac{1}{2} C\, \Delta V^2$. See the topic on conductors, capacitors and dielectrics.
:::

:::richiamo{titolo="First-order linear differential equations"}
The equation $y'(t) + a\,y(t) = b$, with $a \neq 0$ and $b$ constants, has general solution $y(t) = \dfrac{b}{a} + K e^{-a t}$, with $K \in \mathbb{R}$ fixed by the initial condition. See the topic on differential equations in Analysis 1.
:::

::::teorema{#carica-condensatore titolo="Charging a capacitor"}
Consider a circuit made of an ideal source of electromotive force $\mathcal{E}$, a resistor $R$ and a capacitor $C$ in series, with the capacitor uncharged, and let $t = 0$ be the instant at which the switch is closed. Then for $t \geq 0$
$$
q(t) = C\mathcal{E} \left( 1 - e^{-\frac{t}{\tau}} \right) ,
\qquad
i(t) = \frac{\mathcal{E}}{R}\, e^{-\frac{t}{\tau}} ,
\qquad
\tau = R C .
$$
At the initial instant the current is $\dfrac{\mathcal{E}}{R}$, as if the capacitor were a wire; as time passes the current tends to zero and the voltage across the capacitor tends to $\mathcal{E}$. With $R = 10\,\mathrm{k\Omega}$, $C = 100\,\mu\mathrm{F}$ and $\mathcal{E} = 12\,\mathrm{V}$ we have $\tau = 1.0\,\mathrm{s}$, initial current $1.2\,\mathrm{mA}$ and final charge $1.2\,\mathrm{mC}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.41;0,1.59 0,3;-0.36,1.59 0.36,1.59;-0.19,1.41 0.19,1.41;0,3 0.8,3 1.32,3.32;1.4,3 2.2,3;2.2,3 3.3,3 3.383,3.17 3.55,2.83 3.717,3.17 3.883,2.83 4.05,3.17 4.217,2.83 4.3,3 5.4,3;5.4,3 5.6,3;5.6,3 5.6,1.6;5.6,1.4 5.6,0;5.28,1.4 5.92,1.4;5.28,1.6 5.92,1.6;5.6,0 0,0" vettori="5.95,2.7,5.95,2" punti="0.8,3,vuoto;1.4,3,vuoto" etichette="0.45,1.69,+;0.45,1.09,−;-0.65,1.43,ℰ;1,3.55,T;3.58,3.38,R;5,1.43,C;6.05,1.62,+q;6.05,1.12,−q;6.09,2.28,i" xmin=-1.4 xmax=7.0 ymin=-0.6 ymax=3.8 titolo="RC circuit: when the switch $T$ is closed the source charges the capacitor through the resistor"}

::grafico{f="(x>=0?1:NaN)*12*(1-exp(-x));(x>=0?1:NaN)*12*exp(-x)" asintoti="y=12" punti="1,7.585,pieno" segmenti="1,0,1,7.585" xmin=-0.4 xmax=5.6 ymin=-0.8 ymax=13.4 nomi="t,V" legenda="\Delta V_C = \mathcal{E}\,\big( 1 - e^{-\frac{t}{\tau}} \big);\Delta V_R = \mathcal{E}\, e^{-\frac{t}{\tau}}" titolo="Charging with $\mathcal{E} = 12\,\mathrm{V}$ and $\tau = 1.0\,\mathrm{s}$, time in seconds and voltages in volts: the voltage across the capacitor rises toward $\mathcal{E}$, the one across the resistor, proportional to the current, falls to zero; at $t = \tau$ the capacitor is at $63\,\%$"}

:::dimostrazione
At the instant $t$ the capacitor has charge $q$ on the plate connected to the resistor, and the current flowing in the circuit carries charge onto that plate, therefore $i = \dfrac{dq}{dt}$. Going around the loop, the **loop rule** gives
$$
\mathcal{E} = R\, i + \frac{q}{C}
\quad\Longrightarrow\quad
\frac{dq}{dt} + \frac{1}{RC}\, q = \frac{\mathcal{E}}{R} .
$$
This is a first-order linear equation with $a = \dfrac{1}{RC}$ and $b = \dfrac{\mathcal{E}}{R}$, therefore $q(t) = C\mathcal{E} + K e^{-\frac{t}{RC}}$. The capacitor is uncharged at $t = 0$, hence $K = -C\mathcal{E}$ and $q(t)$ is obtained. Differentiating, $i(t) = \dfrac{dq}{dt} = \dfrac{C\mathcal{E}}{RC}\, e^{-\frac{t}{\tau}} = \dfrac{\mathcal{E}}{R}\, e^{-\frac{t}{\tau}}$.
:::
::::

:::osservazione{#costante-di-tempo titolo="Time constant"}
The **time constant** $\tau = RC$ has the dimensions of a time, since $\Omega \cdot \mathrm{F} = \dfrac{\mathrm{V}}{\mathrm{A}} \cdot \dfrac{\mathrm{C}}{\mathrm{V}} = \dfrac{\mathrm{C}}{\mathrm{A}} = \mathrm{s}$. After a time $\tau$ the charge has reached the fraction $1 - e^{-1} \approx 0.63$ of the final value, and after $5\tau$ it differs from the final value by less than $1\,\%$, since $e^{-5} \approx 0.0067$. The time needed to reach the fraction $f$ of the final charge is obtained from $1 - e^{-\frac{t}{\tau}} = f$, and it is $t = -\tau \ln(1 - f)$. Increasing $R$ or $C$ makes the process slower.
:::

::::teorema{#scarica-condensatore titolo="Discharging a capacitor"}
Consider a capacitor of capacitance $C$ with initial charge $Q_0$, that is, with initial voltage $\Delta V_0 = \dfrac{Q_0}{C}$, which at the instant $t = 0$ is connected across a resistor $R$. Then for $t \geq 0$
$$
q(t) = Q_0\, e^{-\frac{t}{\tau}} ,
\qquad
i(t) = \frac{\Delta V_0}{R}\, e^{-\frac{t}{\tau}} ,
\qquad
\tau = R C ,
$$
where $i$ is the current leaving the positive plate. The charge and the current halve every $\tau \ln 2 \approx 0.69\,\tau$; a capacitor with $\tau = 2.0\,\mathrm{s}$ starting from $12\,\mathrm{V}$ is at $6.0\,\mathrm{V}$ after about $1.4\,\mathrm{s}$ and at $3.0\,\mathrm{V}$ after about $2.8\,\mathrm{s}$.

::grafico{f="(x>=0?1:NaN)*12*exp(-x/2)" punti="1.386,6,pieno;2.773,3,pieno" segmenti="1.386,0,1.386,6;2.773,0,2.773,3" xmin=-0.5 xmax=10.5 ymin=-0.8 ymax=13.4 nomi="t,V" legenda="\Delta V_C = \Delta V_0\, e^{-\frac{t}{\tau}}" titolo="Discharging with $\Delta V_0 = 12\,\mathrm{V}$ and $\tau = 2.0\,\mathrm{s}$: the voltage halves every $\tau \ln 2 \approx 1.4\,\mathrm{s}$"}

:::dimostrazione
The current leaving the positive plate decreases its charge, therefore $i = -\dfrac{dq}{dt}$. The loop contains only the capacitor and the resistor, hence the **loop rule** gives
$$
\frac{q}{C} = R\, i = -R\, \frac{dq}{dt}
\quad\Longrightarrow\quad
\frac{dq}{dt} + \frac{1}{RC}\, q = 0 .
$$
By the reminder on first-order linear equations, with $b = 0$, we have $q(t) = K e^{-\frac{t}{RC}}$, and the condition $q(0) = Q_0$ gives $K = Q_0$. Differentiating, $i(t) = -\dfrac{dq}{dt} = \dfrac{Q_0}{RC}\, e^{-\frac{t}{\tau}} = \dfrac{\Delta V_0}{R}\, e^{-\frac{t}{\tau}}$.
:::
::::

::::teorema{#bilancio-energetico-rc titolo="Energy balance in charging"}
In the complete charging of a capacitor through a resistor, under the hypotheses of the theorem on charging, the source delivers the energy $C\mathcal{E}^2$; half of it is stored in the capacitor, $\dfrac{1}{2} C\mathcal{E}^2$, and the other half is dissipated in the resistor by the Joule effect, whatever the value of $R$. With $C = 100\,\mu\mathrm{F}$ and $\mathcal{E} = 12\,\mathrm{V}$ the source delivers $14.4\,\mathrm{mJ}$, and the capacitor stores $7.2\,\mathrm{mJ}$ of it.

:::dimostrazione
The source carries the charge $dq = i\,dt$ through the electromotive force $\mathcal{E}$, and in the complete charging the total charge is $C\mathcal{E}$; therefore the energy delivered is
$$
W_{\text{gen}} = \int_0^{+\infty} \mathcal{E}\, i(t)\,dt = \mathcal{E} \cdot C\mathcal{E} = C\mathcal{E}^2 .
$$
The energy dissipated in the resistor is the integral of the power $R i^2$:
$$
\int_0^{+\infty} R\, \frac{\mathcal{E}^2}{R^2}\, e^{-\frac{2t}{\tau}}\,dt = \frac{\mathcal{E}^2}{R} \cdot \frac{\tau}{2} = \frac{1}{2} C\mathcal{E}^2 .
$$
By the reminder on the energy of the capacitor, the final charge $C\mathcal{E}$ corresponds to the stored energy $\dfrac{1}{2} C\mathcal{E}^2$, and the sum of the two parts equals $W_{\text{gen}}$.
:::
::::

:::osservazione{#condensatore-a-regime titolo="Capacitor in a circuit at steady state"}
When many time constants have elapsed, the charge of the capacitor no longer changes and the current in its branch is zero: at steady state the capacitor behaves like an open circuit, and its voltage is found by solving the rest of the circuit. At the instant the switch is closed, instead, an uncharged capacitor has zero voltage and behaves like a wire. For example, a source with $\mathcal{E} = 12\,\mathrm{V}$ supplies $R_1 = 2.0\,\mathrm{k\Omega}$ in series with $R_2 = 6.0\,\mathrm{k\Omega}$, and a $50\,\mu\mathrm{F}$ capacitor is connected in parallel with $R_2$. At steady state the current flows only through the two resistors, $I = \dfrac{12}{8.0 \cdot 10^3}\,\mathrm{A} = 1.5\,\mathrm{mA}$, therefore the capacitor has the voltage $R_2 I = 9.0\,\mathrm{V}$ and the charge $450\,\mu\mathrm{C}$.
:::
