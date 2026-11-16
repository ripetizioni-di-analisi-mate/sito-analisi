---
titolo: Electric circuits and Kirchhoff's laws
sommario: How to read a circuit diagram, set up currents and voltages, and identify what changes after switching an RC circuit.
---

## Nodes, branches, and ideal components

:::definizione{#nodi-rami titolo="Reading a circuit diagram"}
A **node** is the set of points joined by ideal wires with no components in between. Since the voltage drop across an ideal wire is zero, all points in the node have the same potential. A **branch** connects two nodes and can contain several components. A **loop** is a closed path along the branches.

To identify two resistors in parallel, follow the wires from both ends. If each terminal of the first resistor shares a node with the corresponding terminal of the second, the two resistors have the same potential difference across them. To identify series resistors, examine the connection between them. If only those two resistors meet at that point, all the current leaving the first enters the second.
:::

:::osservazione
An ideal source maintains a potential difference $\mathcal E$ across its terminals, called its **electromotive force**. It is measured in volts and represents the energy supplied per unit charge. The longer plate of the battery symbol marks its positive terminal. When the battery alone powers a resistive circuit, conventional current flows from its positive terminal to its negative terminal through the external circuit.

For a branch where the direction is uncertain, choose a reference arrow before writing the equations. A value such as $I=-0.40\,\mathrm A$ represents a current of magnitude $0.40\,\mathrm A$ flowing opposite to that arrow.
:::

:::attenzione
Two resistors with a common point are not in series when a third branch is connected at that point. If $3\,\mathrm A$ flows in the first resistor and $2\,\mathrm A$ leaves through the third branch, the second resistor carries $3\,\mathrm A-2\,\mathrm A=1\,\mathrm A$. The two currents are different, so the series rule does not apply.
:::

## Resistors in series

:::richiamo{titolo="Ohm's law"}
If a resistor of resistance $R$ carries the current $I$, the potential difference across it is $\Delta V=IR$. See the topic on current and Ohm's laws.
:::

::::teorema{#serie titolo="The current is common and the voltages add"}
Resistors in series carry the same current because no current leaves the intermediate connections through other branches. The **equivalent resistance** is the resistance of a single resistor that would draw the same current as the whole series combination at the same voltage.
$$
R_{\mathrm{eq}}=R_1+R_2+\cdots.
$$

:::dimostrazione
For two resistors, the voltage across the series combination is the sum of the two drops. Since the current is common, Ohm's law gives
$$
\begin{aligned}
\Delta V &= \Delta V_1+\Delta V_2 \\[6pt]
&= IR_1+IR_2 \\[6pt]
&= I(R_1+R_2).
\end{aligned}
$$
For a single resistor, the same relation is $\Delta V=IR_{\mathrm{eq}}$. The coefficient of $I$ is therefore $R_1+R_2$.
:::
::::

:::esempio{titolo="Voltage drops across a series combination"}
In the diagram, the battery maintains $12\,\mathrm V$ across the series combination. Since $R_{\mathrm{eq}}=4\,\Omega+8\,\Omega=12\,\Omega$, both resistors carry
$$
I=\frac{12\,\mathrm V}{12\,\Omega}=1\,\mathrm A.
$$
The drop across the first resistor is $1\,\mathrm A\cdot4\,\Omega=4\,\mathrm V$. Across the second it is $1\,\mathrm A\cdot8\,\Omega=8\,\mathrm V$. Starting from the negative terminal at $0\,\mathrm V$, the potential rises to $12\,\mathrm V$ across the battery, falls to $8\,\mathrm V$ between the resistors, and returns to $0\,\mathrm V$.

::schema{riferimento=0 linee="0,1.48 0,3 1.4,3;2.8,3 4.2,3;5.6,3 7,3 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;1.4,2.72 2.8,2.72 2.8,3.28 1.4,3.28 1.4,2.72;4.2,2.72 5.6,2.72 5.6,3.28 4.2,3.28 4.2,2.72" frecce="0.8,3.85,2.2,3.85,I" etichette="0.9,1.32,12 V;2.1,2.25,4 Ω;4.9,2.25,8 Ω" titolo="In the loop the current passes through both resistors"}
:::

:::esempio{titolo="Power absorbed by each resistor"}
In the $4\,\Omega$ and $8\,\Omega$ series combination carrying $1\,\mathrm A$, the power dissipated by a resistor is $P=I^2R$. The first absorbs $(1\,\mathrm A)^2\cdot4\,\Omega=4\,\mathrm W$ and the second $(1\,\mathrm A)^2\cdot8\,\Omega=8\,\mathrm W$. Since the current is the same, the power is proportional to the resistance. The sum $12\,\mathrm W$ equals the power supplied by the battery, $12\,\mathrm V\cdot1\,\mathrm A$.
:::

:::teorema{#partitore titolo="Voltage divider"}
Two series resistors connected across a voltage $\Delta V_{\mathrm{tot}}$ carry $I=\dfrac{\Delta V_{\mathrm{tot}}}{R_1+R_2}$. Substituting into $\Delta V_1=IR_1$ gives
$$
\Delta V_1=\Delta V_{\mathrm{tot}}\frac{R_1}{R_1+R_2}.
$$
The fraction of the voltage across $R_1$ equals its fraction of the total resistance. For $R_1=2\,\mathrm{k\Omega}$, $R_2=3\,\mathrm{k\Omega}$, and $\Delta V_{\mathrm{tot}}=10\,\mathrm V$, the result is $\Delta V_1=10\,\mathrm V\cdot\dfrac{2}{5}=4\,\mathrm V$.
:::

:::attenzione
A load connected across $R_1$ changes the divider. If the load is also $2\,\mathrm{k\Omega}$, the parallel combination has resistance $1\,\mathrm{k\Omega}$ and the voltage across that group drops to $10\,\mathrm V\cdot\dfrac{1}{1+3}=2.5\,\mathrm V$. The voltage across the load is therefore found using the equivalent resistance of the parallel combination.
:::

## Resistors in parallel

::::teorema{#parallelo titolo="The voltage is common and the currents add"}
Every branch of a parallel combination starts at the same node and ends at the same node. Since each node has a single potential, the resistors have the same voltage $\Delta V$ across them. At the node where the current splits, the total current is the sum of the branch currents.
$$
\frac{1}{R_{\mathrm{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots.
$$

:::dimostrazione
For two branches, Ohm's law gives
$$
I_{\mathrm{tot}}=\frac{\Delta V}{R_1}+\frac{\Delta V}{R_2}
=\Delta V\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
The single equivalent resistor carries the same current for a given $\Delta V$. The coefficient of $\Delta V$ is therefore $\dfrac{1}{R_{\mathrm{eq}}}$. For two resistors, this can also be written as $R_{\mathrm{eq}}=\dfrac{R_1R_2}{R_1+R_2}$.
:::
::::

:::esempio{titolo="How the current divides"}
In the parallel combination of $R_1=6\,\Omega$ and $R_2=3\,\Omega$, the battery maintains $V_A-V_B=12\,\mathrm V$ across both branches. The $6\,\Omega$ branch carries $2\,\mathrm A$, so the branch with half the resistance carries twice the current, $4\,\mathrm A$. The battery supplies $6\,\mathrm A$ in total, which gives $R_{\mathrm{eq}}=\dfrac{12\,\mathrm V}{6\,\mathrm A}=2\,\Omega$.

::schema{riferimento=0 linee="0,1.48 0,3 6,3 6,2.12;6,0.88 6,0 0,0 0,1.16;3,3 3,2.12;3,0.88 3,0;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;2.73,0.88 3.27,0.88 3.27,2.12 2.73,2.12 2.73,0.88;5.73,0.88 6.27,0.88 6.27,2.12 5.73,2.12 5.73,0.88" punti="3,3,A,pieno;3,0,B,pieno" frecce="3.92,2.16,3.92,0.83,I_1;6.95,2.16,6.95,0.83,I_2" etichette="0.9,1.32,12 V;2.13,1.51,6 Ω;5.06,1.51,3 Ω" titolo="Both resistors connect to the same nodes A and B"}
:::

:::osservazione
The equivalent resistance of a parallel combination of positive resistances is smaller than the smallest branch resistance. Adding a branch increases the total current at a fixed voltage. In a series-parallel circuit, an equivalent resistance can be used to find the supplied current, and then the original diagram is used again. For example, if the $2\,\Omega$ parallel combination is in series with a $4\,\Omega$ resistor across $18\,\mathrm V$, the series current is $3\,\mathrm A$. The voltage across the parallel combination is $3\,\mathrm A\cdot2\,\Omega=6\,\mathrm V$, so the $6\,\Omega$ and $3\,\Omega$ branches carry $1\,\mathrm A$ and $2\,\mathrm A$, respectively.
:::

::::teorema{#partitore-corrente titolo="Current divider"}
Two resistors $R_1$ and $R_2$ in parallel, carrying in total the current $I_{\mathrm{tot}}$, carry the currents
$$
I_1=I_{\mathrm{tot}}\frac{R_2}{R_1+R_2},
\qquad
I_2=I_{\mathrm{tot}}\frac{R_1}{R_1+R_2}.
$$
The branch with the smaller resistance carries the larger current. The formulas divide a known current without first computing the voltage of the parallel combination.

:::dimostrazione
The two branches have the same voltage $\Delta V$, and $\Delta V=I_{\mathrm{tot}}R_{\mathrm{eq}}$ with $R_{\mathrm{eq}}=\dfrac{R_1R_2}{R_1+R_2}$. Ohm's law applied to the first branch gives
$$
\begin{aligned}
I_1 &= \frac{\Delta V}{R_1} \\[6pt]
&= \frac{I_{\mathrm{tot}}}{R_1}\cdot\frac{R_1R_2}{R_1+R_2} \\[6pt]
&= I_{\mathrm{tot}}\frac{R_2}{R_1+R_2}.
\end{aligned}
$$
Exchanging $R_1$ and $R_2$ gives the current $I_2$.
:::
::::

:::esempio{titolo="A current divided between two branches"}
A current of $6\,\mathrm A$ arrives at a node and divides between $R_1=6\,\Omega$ and $R_2=3\,\Omega$. We have $I_1=6\,\mathrm A\cdot\dfrac{3}{9}=2\,\mathrm A$ and $I_2=6\,\mathrm A\cdot\dfrac{6}{9}=4\,\mathrm A$. The voltage across the parallel combination is $6\,\mathrm A\cdot2\,\Omega=12\,\mathrm V$, and $\dfrac{12\,\mathrm V}{6\,\Omega}=2\,\mathrm A$ confirms the first current.
:::

:::attenzione
After summing $\dfrac{1}{R_1}+\dfrac{1}{R_2}$, the result must still be inverted to obtain the equivalent resistance. For $6\,\Omega$ and $3\,\Omega$ we have $\dfrac{1}{6}+\dfrac{1}{3}=\dfrac{1}{2}\,\Omega^{-1}$, so $R_{\mathrm{eq}}=2\,\Omega$. The value $0.5$ obtained without inverting would be a conductance in siemens and not a resistance.
:::

## Kirchhoff's laws

:::teorema{#kirchhoff titolo="Conservation of charge and energy"}
**Kirchhoff's current law** expresses conservation of charge. At a node in the circuit model, where charge does not accumulate, the sum of the currents entering equals the sum of the currents leaving. If $2\,\mathrm A$ and $3\,\mathrm A$ enter and one branch carries $1\,\mathrm A$ out, the other branch carries $2\,\mathrm A+3\,\mathrm A-1\,\mathrm A=4\,\mathrm A$ out.

**Kirchhoff's voltage law** states that the algebraic sum of the potential changes around a closed path is zero for a lumped circuit that links no changing magnetic flux. When crossing a resistor in the reference direction of $I$, write $-RI$. In the opposite direction, write $+RI$. Crossing an ideal source from its negative terminal to its positive terminal contributes $+\mathcal E$. The reverse traversal contributes $-\mathcal E$.
:::

:::esempio{titolo="Two opposing sources"}
Take the traversal from the negative to the positive terminal of the $4\,\mathrm V$ source as positive. For opposing sources of $4\,\mathrm V$ and $12\,\mathrm V$ with a total resistance of $4\,\Omega$, the loop equation is
$$
4\,\mathrm V-12\,\mathrm V-(4\,\Omega)I=0
\quad\Longrightarrow\quad
I=-2\,\mathrm A.
$$
The sign shows that the current flows in the direction driven by the $12\,\mathrm V$ source. Following the actual current around the loop, the larger source supplies $12\,\mathrm J$ per coulomb. The smaller source absorbs $4\,\mathrm J$, and the resistance dissipates the remaining $8\,\mathrm J$.
:::

:::esempio{titolo="Three branches with two sources"}
Three branches connect nodes $A$ and $B$. The first contains an ideal $12\,\mathrm V$ battery in series with $R_1=6\,\Omega$. The second contains a $6\,\mathrm V$ battery with $R_2=3\,\Omega$. The third contains only $R_3=6\,\Omega$. Both batteries have their positive terminals on the $A$ side.

Let $V$ be the difference $V_A-V_B$ and take all the reference currents from $A$ to $B$. Applying Ohm's law to each branch gives
$$
\begin{aligned}
I_1 &= \frac{V-12\,\mathrm V}{6\,\Omega}, \qquad
I_2 = \frac{V-6\,\mathrm V}{3\,\Omega},\\[6pt]
I_3 &= \frac{V}{6\,\Omega}.
\end{aligned}
$$
Because all the arrows point away from $A$, the balance is $I_1+I_2+I_3=0$. Multiplying the equation by $6\,\Omega$ gives $4V-24\,\mathrm V=0$, so $V=6\,\mathrm V$. The first branch carries $1\,\mathrm A$ from $B$ to $A$. The second has $I_2=0$ because $V$ equals the voltage of its battery. The third carries $1\,\mathrm A$ from $A$ to $B$.

::schema{riferimento=0 linee="0,2.63 0,3.1;0,4.15 0,4.7 7,4.7 7,2.9;7,1.8 7,0 0,0 0,2.34;-0.4,2.63 0.4,2.63;-0.24,2.34 0.24,2.34;-0.26,3.1 0.26,3.1 0.26,4.15 -0.26,4.15 -0.26,3.1;3.5,4.7 3.5,4.15;3.5,3.1 3.5,2.63;3.5,2.34 3.5,0;3.1,2.63 3.9,2.63;3.26,2.34 3.74,2.34;3.24,3.1 3.76,3.1 3.76,4.15 3.24,4.15 3.24,3.1;6.74,1.8 7.26,1.8 7.26,2.9 6.74,2.9 6.74,1.8" punti="3.5,4.7,A,pieno;3.5,0,B,pieno" frecce="0.95,1.73,0.95,0.53,I_1;4.45,1.73,4.45,0.53,I_2;7.95,1.73,7.95,0.53,I_3" etichette="0.89,2.47,12 V;0.9,3.63,6 Ω;4.35,2.47,6 V;4.39,3.63,3 Ω;7.88,2.43,6 Ω" titolo="All reference arrows point from node A to node B"}
:::

:::osservazione
In the circuit with three branches there are two nodes, $A$ and $B$. The current law written at $A$ and the one written at $B$ contain the same information, because every current leaving $A$ enters $B$. In a circuit with $n$ nodes, $n-1$ node equations are therefore independent. The unknowns are the three branch currents, so one node equation and two loop equations are needed. Introducing the voltage $V=V_A-V_B$, Ohm's law written for each branch expresses the current as a function of $V$, and only the node equation at $A$ remains to be written.
:::

## A source with internal resistance

:::teorema{#generatore-reale titolo="Internal resistance and terminal voltage"}
A real source can be modeled as an ideal electromotive force $\mathcal E$ in series with an internal resistance $r$. When it powers an external resistor $R$, the same current flows through $R$ and $r$. It follows that
$$
I=\frac{\mathcal E}{R+r},
\qquad V_{\mathrm{term}}=\mathcal E-rI=IR.
$$
With the circuit open, an ideal voltmeter reads $\mathcal E$ because the current is zero. When a load closes the circuit, the internal drop $rI$ reduces the voltage available outside. In this model, an external short circuit would have $R=0$ and current $\dfrac{\mathcal E}{r}$, so all the power would be dissipated in the internal resistance.
:::

:::esempio{titolo="Battery with internal resistance on a load"}
A battery with $\mathcal E=12\,\mathrm V$ and $r=1\,\Omega$ powers a resistor $R=5\,\Omega$. The current is $I=\dfrac{12\,\mathrm V}{6\,\Omega}=2\,\mathrm A$. The terminal voltage is $V_{\mathrm{term}}=12\,\mathrm V-(1\,\Omega)(2\,\mathrm A)=10\,\mathrm V$, which equals $IR=(2\,\mathrm A)(5\,\Omega)$. In an external short circuit the current would be $\dfrac{12\,\mathrm V}{1\,\Omega}=12\,\mathrm A$, six times larger.

::schema{riferimento=0 linee="0,1.48 0,3 1.4,3;2.8,3 4.2,3;5.6,3 7,3 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;1.4,2.72 2.8,2.72 2.8,3.28 1.4,3.28 1.4,2.72;4.2,2.72 5.6,2.72 5.6,3.28 4.2,3.28 4.2,2.72" frecce="0.8,3.85,2.2,3.85,I" etichette="0.9,1.32,12 V;1.55,2.25,r = 1 Ω;4.35,2.25,R = 5 Ω" titolo="The internal resistance $r$ is in series with the electromotive force and with the load $R$"}
:::

:::esempio{titolo="Finding the parameters from two measurements"}
The terminal voltage is $11\,\mathrm V$ when the source supplies $1\,\mathrm A$ and $9\,\mathrm V$ when it supplies $3\,\mathrm A$. The voltage falls by $2\,\mathrm V$ for an increase of $2\,\mathrm A$, so
$$
r=\frac{11\,\mathrm V-9\,\mathrm V}{3\,\mathrm A-1\,\mathrm A}=1\,\Omega.
$$
At $1\,\mathrm A$ the internal drop is $1\,\mathrm V$, so the electromotive force is $11\,\mathrm V+1\,\mathrm V=12\,\mathrm V$. On the graph it is the voltage-axis intercept.

::grafico{f="12-x" xmin=0 xmax=5 ymin=0 ymax=14 nomi="I,V" punti="0,12,pieno;1,11,pieno;3,9,pieno" titolo="Terminal voltage in volts and current in amperes. The measurements determine the open-circuit voltage and internal resistance."}
:::

## Power balance

:::teorema{#potenze titolo="Supplied and dissipated power"}
For a real source powering a resistive load, the loop equation is $\mathcal E=I(R+r)$. Multiplying by $I$ turns a balance of energies per unit charge into a balance of energies per unit time.
$$
\mathcal E I=I^2R+I^2r.
$$
If a $12\,\mathrm V$ battery with $r=1\,\Omega$ powers a load $R=5\,\Omega$, the current is $2\,\mathrm A$. The battery supplies $24\,\mathrm W$. Of this, $20\,\mathrm W$ is delivered to the load and $4\,\mathrm W$ is dissipated internally. The useful fraction is $\dfrac{20}{24}\simeq83.3\%$.
:::

::::teorema{#massima-potenza titolo="Maximum power delivered to the load"}
A source with electromotive force $\mathcal E$ and internal resistance $r$ powers a load $R>0$. The power dissipated in the load is
$$
P=\frac{\mathcal E^2R}{(R+r)^2}
$$
and reaches the maximum $P_{\max}=\dfrac{\mathcal E^2}{4r}$ for $R=r$. In that case the supplied power is divided equally between the load and the internal resistance.

:::dimostrazione
From the current $I=\dfrac{\mathcal E}{R+r}$ it follows that $P=I^2R=\dfrac{\mathcal E^2R}{(R+r)^2}$. The identity $(R+r)^2-4Rr=(R-r)^2$ holds, and the right-hand side is nonnegative. Hence $(R+r)^2\ge4Rr$, and since $R>0$ we have
$$
P=\frac{\mathcal E^2R}{(R+r)^2}\le\frac{\mathcal E^2R}{4Rr}=\frac{\mathcal E^2}{4r}.
$$
Equality holds if and only if $(R-r)^2=0$, that is, for $R=r$. In that case the powers $I^2R$ and $I^2r$ are equal.
:::
::::

:::esempio{titolo="Power in the load as R varies"}
For $\mathcal E=12\,\mathrm V$ and $r=1\,\Omega$ the power in the load is $P=\dfrac{144\,R}{(R+1)^2}$ in watts, with $R$ in ohms. For $R=1\,\Omega$ we obtain $\dfrac{144}{4}\,\mathrm W=36\,\mathrm W$, that is, the maximum $\dfrac{\mathcal E^2}{4r}$. For $R=5\,\Omega$ we obtain $\dfrac{720}{36}\,\mathrm W=20\,\mathrm W$, as in the example of the $12\,\mathrm V$ battery. At the maximum the efficiency $\dfrac{R}{R+r}$ is $50\%$, so half of the $72\,\mathrm W$ supplied is dissipated internally.

::grafico{f="144*x/(1+x)^2" xmin=0 xmax=10 ymin=0 ymax=40 nomi="R,P" punti="1,36,pieno;5,20,pieno" titolo="Power in the load in watts as a function of $R$ in ohms, with $\mathcal E=12\,\mathrm V$ and $r=1\,\Omega$"}
:::

:::osservazione
When a battery is being charged, the current enters its positive terminal. Taking $I$ as the magnitude of that current, the terminal voltage is $\mathcal E+rI$. In the power balance, the ideal part of the battery absorbs $\mathcal E I$. The internal resistance still dissipates $I^2r$, which is positive in either direction.
:::

## Charging a capacitor through a resistor

:::richiamo{titolo="Derivative of an exponential"}
For a constant $a$, the function $e^{-at}$ has derivative $-a\,e^{-at}$ with respect to $t$. Current is the derivative of charge with respect to time, $I=\dfrac{dq}{dt}$.
:::

::::teorema{#carica-rc titolo="RC charging transient"}
An initially uncharged capacitor of capacitance $C$ is connected in series with a resistance $R$ and an ideal source $\mathcal E$. The voltage $V_C$ across its plates equals $\dfrac{q}{C}$, where $q$ is the charge on the plate connected to the positive side of the circuit. The loop equation is $\mathcal E=RI+V_C$. Just after the circuit closes, $V_C=0$ and the full source voltage is across the resistor. As $q$ increases, $V_C$ rises and the voltage available across the resistor falls.

In the ideal model, with $t$ measured from the instant the circuit closes,
$$
\begin{aligned}
\tau &= RC,\\[6pt]
V_C(t) &= \mathcal E(1-e^{-\frac{t}{\tau}}),\\[6pt]
q(t) &= CV_C(t),\\[6pt]
I(t) &= \frac{\mathcal E}{R}e^{-\frac{t}{\tau}}.
\end{aligned}
$$
The **time constant** $\tau$ is measured in seconds because $\Omega\cdot\mathrm F=\mathrm s$. The ratio $\dfrac{t}{\tau}$ is dimensionless.

:::dimostrazione
We verify by substitution that the given function satisfies the loop equation and the initial condition. Since $q=CV_C$, the current is $I=\dfrac{dq}{dt}=C\dfrac{dV_C}{dt}$, so the equation $\mathcal E=RI+V_C$ becomes
$$
\mathcal E=RC\frac{dV_C}{dt}+V_C=\tau\frac{dV_C}{dt}+V_C.
$$
For $V_C(t)=\mathcal E(1-e^{-\frac{t}{\tau}})$ the derivative is $\dfrac{dV_C}{dt}=\dfrac{\mathcal E}{\tau}e^{-\frac{t}{\tau}}$, and we obtain
$$
\begin{aligned}
\tau\frac{dV_C}{dt}+V_C &= \mathcal E e^{-\frac{t}{\tau}}+\mathcal E-\mathcal E e^{-\frac{t}{\tau}} \\[6pt]
&= \mathcal E.
\end{aligned}
$$
The loop equation is therefore satisfied at every instant. For $t=0$ we have $V_C(0)=\mathcal E(1-1)=0$, as required by the uncharged capacitor. The current follows from $I=C\dfrac{dV_C}{dt}=\dfrac{C\mathcal E}{\tau}e^{-\frac{t}{\tau}}=\dfrac{\mathcal E}{R}e^{-\frac{t}{\tau}}$.
:::
::::

:::esempio{titolo="Charging voltage and current after one time constant"}
With $R=10\,\mathrm{k\Omega}$, $C=100\,\mathrm{\mu F}$, and $\mathcal E=12\,\mathrm V$, the product in SI units gives $\tau=(10^4\,\Omega)(10^{-4}\,\mathrm F)=1\,\mathrm s$. At $t=\tau$ the capacitor voltage is $12\,\mathrm V(1-e^{-1})\simeq7.59\,\mathrm V$. This leaves $12\,\mathrm V-7.59\,\mathrm V=4.41\,\mathrm V$ across the resistor, so $I\simeq0.441\,\mathrm{mA}$. The capacitor has reached about $63.2\%$ of its final voltage, and the current has fallen to $36.8\%$ of its initial value.

::schema{riferimento=0 linee="0,1.48 0,3 2.2,3;4.2,3 7,3 7,1.64;7,1.34 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;2.2,2.72 4.2,2.72 4.2,3.28 2.2,3.28 2.2,2.72;6.55,1.64 7.45,1.64;6.55,1.34 7.45,1.34" frecce="3.8,3.9,5.6,3.9,I" etichette="1.0,1.32,12 V;2.9,2.2,10 kΩ;5.65,1.48,100 µF" titolo="The capacitor is in series with the resistor and the battery"}

::grafico{f="1-exp(-x);exp(-x)" xmin=0 xmax=5 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{\mathcal E};\dfrac{I}{I_0}" punti="1,0.63212,pieno;1,0.36788,pieno" titolo="The normalized capacitor voltage rises while the normalized current falls"}
:::

:::osservazione
At $t=0$ the current is $\dfrac{\mathcal E}{R}$ and the capacitor voltage grows at the rate $\dfrac{dV_C}{dt}=\dfrac{I}{C}=\dfrac{\mathcal E}{RC}=\dfrac{\mathcal E}{\tau}$. If growth continued at this rate, the voltage would reach $\mathcal E$ after the time $\tau$. For this reason $\tau$ is the instant at which the tangent at the origin meets the final value. At $t=\tau$ the voltage has instead reached $63.2\%$ of $\mathcal E$, and at $t=5\tau$ it has reached $99.3\%$, since $1-e^{-5}\simeq0.993$.

::grafico{f="1-exp(-x);x" xmin=0 xmax=4 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{\mathcal E};\text{tangent}" punti="1,1,vuoto" titolo="The tangent at the origin reaches $\mathcal E$ at $t=\tau$"}
:::

## Discharging and the continuity of voltage

:::teorema{#scarica-rc titolo="RC discharging transient"}
A capacitor at an initial voltage $V_0>0$ is disconnected from its battery and connected across a resistor $R$. The current through the resistor flows from the initially positive plate to the negative plate. Since the source has been removed, the voltage across the resistor has magnitude $V_C$.
$$
V_C(t)=V_0e^{-\frac{t}{\tau}},
\qquad q(t)=CV_C(t),
\qquad I_{\mathrm{mod}}(t)=\frac{V_C(t)}{R}.
$$
After $\tau$, $36.8\%$ of the initial voltage remains. To find the half-life, set $e^{-\frac{t}{\tau}}=\dfrac{1}{2}$. Taking the logarithm gives $t=\tau\ln 2$.
:::

:::esempio{titolo="Voltage and remaining energy"}
The stored energy is $U(t)=\dfrac{1}{2}CV_C(t)^2$. Substituting the discharge law gives
$$
\frac{U(t)}{U(0)}=e^{-\frac{2t}{\tau}}.
$$
At the instant when the voltage has halved, one-fourth of the energy remains. The other three-fourths have been dissipated by the resistor in the ideal model.

::grafico{f="exp(-x);exp(-2*x)" xmin=0 xmax=3 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{V_0};\dfrac{U}{U_0}" punti="0.693147,0.5,pieno;0.693147,0.25,pieno" titolo="During discharge, the remaining energy falls faster than the voltage"}
:::

:::esempio{titolo="Time to reduce the voltage to 1%"}
With $R=10\,\mathrm{k\Omega}$ and $C=100\,\mathrm{\mu F}$ we have $\tau=1\,\mathrm s$. The voltage falls to $1\%$ of its initial value when $e^{-\frac{t}{\tau}}=\dfrac{1}{100}$, that is, for $t=\tau\ln100\simeq4.61\,\mathrm s$. For $t=5\tau$ the voltage is $e^{-5}\simeq0.67\%$ of $V_0$, so a $12\,\mathrm V$ capacitor still has about $0.08\,\mathrm V$.
:::

:::attenzione
After one time constant the capacitor is not discharged. With $V_0=12\,\mathrm V$ and $\tau=1\,\mathrm s$, at $t=\tau$ the voltage is $12\,\mathrm V\cdot e^{-1}\simeq4.41\,\mathrm V$. The exponential vanishes only for $t\to\infty$, so in any finite time some charge always remains.
:::

:::osservazione
When a switch changes position, the starting point is the capacitor voltage just before switching. An instantaneous change in $V_C$ would require an instantaneous change in charge $q=CV_C$, which is impossible with a finite current. The current can change immediately because it is determined by the resistor connection after switching.
:::
