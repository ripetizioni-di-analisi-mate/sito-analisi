---
titolo: "Electric charge and circuits"
sommario: "Electric charge, the meaning of current and voltage, Ohm's law, series and parallel connections, and how to calculate power and energy in circuits."
---

## Electric charge

:::definizione{#carica-elettrica titolo="Electric charge"}
**Electric charge** is a property of the particles that make up matter. It is denoted by $q$ and measured in coulombs, with the symbol $\mathrm{C}$. Charge can be positive or negative. Under the electrostatic conditions considered here, two bodies with charges of the same sign repel each other, and two bodies with charges of opposite signs attract each other.

Electrons have a negative charge, and protons have a positive charge. A body is **electrically neutral** when its charges add up to zero. It can therefore contain many charged particles and still have zero total charge. For example, a positive charge of $3\,\mathrm{\mu C}$ and a negative charge of $-3\,\mathrm{\mu C}$ add up to zero. The prefix micro means one millionth, so $1\,\mathrm{\mu C}=10^{-6}\,\mathrm{C}$.

An initially neutral body that gains electrons acquires a net negative charge. An initially neutral body that loses electrons acquires a net positive charge. The sign indicates the type of charge, while the absolute value gives its magnitude.
:::

:::teorema{#conservazione-carica titolo="Conservation of charge"}
The total electric charge of a system that cannot exchange charge with its surroundings remains constant. This law is based on experiments. Charge can move from one body to another while the sum of the charges in the system stays the same.

Two initially neutral bodies have zero total charge. If the first body has charge $+2\,\mathrm{\mu C}$ after a transfer and the second is the only other body involved, the second must have charge $-2\,\mathrm{\mu C}$, because
$$
+2\,\mathrm{\mu C}-2\,\mathrm{\mu C}=0.
$$
The law allows us to calculate a final charge even without knowing the details of the transfer.
:::

## Conductors and circuits

:::definizione{#circuito-elettrico titolo="Electric circuit"}
A **conductor** contains charges that can move through the material. In metals, these charges are electrons. An **insulator** impedes this movement over long distances. Copper is a conductor, while the plastic coating of a wire acts as an insulator.

An **electric circuit** is a set of components connected by conductors. A source such as a battery can transfer energy to the charges. A load such as a resistor receives electrical energy. A **resistor** is a component designed to have a particular electrical resistance, a quantity that will be defined in the discussion of Ohm's law.

In a simple direct-current circuit, the conducting path must be closed for a steady current to flow. An open switch breaks the path, and a closed switch completes it. For example, in the model with a battery and a resistor, opening the only switch makes the steady current zero throughout the circuit.

In the exercises, wires and closed switches have negligible resistance, and the source is ideal and maintains the stated voltage across its terminals. With these assumptions, only the stated resistances need to be included in the calculations.

::grafico{assi=0 uguale=1 linee="0,0 0,1.3;0,1.7 0,3 2,3;3,3 5,3 5,0 0,0;-0.4,1.7 0.4,1.7;-0.2,1.3 0.2,1.3;2,2.7 3,2.7 3,3.3 2,3.3 2,2.7" vettori="3.5,3.65,4.5,3.65" etichette="-0.8,1.7,+;-0.8,1.2,−;0.35,1.45,V;2.3,3.8,R;4,4.05,I" xmin=-1.3 xmax=5.8 ymin=-0.6 ymax=4.5 titolo="An ideal source and a resistor form a closed path. The arrow shows the direction of conventional current in the external circuit"}
:::

:::osservazione{titolo="Steady state"}
A circuit is in a **steady state** when the currents and voltages under consideration remain constant over time. The model excludes the brief changes that occur just after a switch is closed. For example, in a circuit with an ideal constant-voltage source and a resistor of constant resistance, the model describes the state that is established after the switch closes. This assumption lets us compare currents and voltages using a single value for each quantity.
:::

## Current in a circuit

:::definizione{#corrente-elettrica titolo="Electric current"}
**Electric current** describes a directed flow of charge. To measure it, consider a cross section of the conductor and determine how much charge passes through it during a time interval.

If a net charge $\Delta q$ passes through the cross section in the chosen direction during the interval $\Delta t>0$, the average current is
$$
I=\frac{\Delta q}{\Delta t}.
$$
Current is measured in amperes, with the symbol $\mathrm{A}$, and $1\,\mathrm{A}=1\,\mathrm{C/s}$. In the exercises, we will consider constant currents and use $q$ for the positive amount of charge that passes in the conventional direction. In this case, $q=I\Delta t$.

The **conventional direction** of current is the direction in which positive charges move. In metal wires, electrons move in the opposite direction. In the external circuit of a battery powering a resistor, conventional current flows from the positive terminal to the negative terminal.
:::

:::esempio{titolo="Charge passing through a wire"}
In $4\,\mathrm{s}$, a charge of $12\,\mathrm{C}$ passes through a cross section of a wire. The average current is
$$
I=\frac{12\,\mathrm{C}}{4\,\mathrm{s}}=3\,\mathrm{A}.
$$
If the current is constant, $3\,\mathrm{C}$ passes through the cross section every second. The graph of the charge that has passed as a function of time is then a straight line through the origin.

::grafico{f="3*x" xmin=0 xmax=6 ymin=0 ymax=20 nomi="t,q" legenda=0 punti="4,12,pieno" titolo="At a constant current of $3\,\mathrm{A}$, the charge $q$, measured in coulombs, increases by $3\,\mathrm{C}$ each second"}
:::

:::osservazione{titolo="Charge and energy in a circuit"}
In the steady state, the amount of charge entering a load during a time interval equals the amount leaving it during the same interval. The total charge of the load therefore remains constant. The electrical energy transferred can change into other forms, such as the internal energy of a resistor. In a section with no branches, the current therefore has the same value on either side of the component, even though the component has received energy.
:::

## Voltage between two points

:::definizione{#tensione-elettrica titolo="Potential difference"}
The **voltage**, or potential difference, between two points gives the energy that can be transferred per unit charge as charge moves between those points. In this chapter, $V$ denotes the positive voltage drop across a load in the direction of the current through it.

If the electric field transfers energy $W$ to the load as a positive charge $q$ passes through it, then
$$
V=\frac{W}{q},
\qquad
W=qV.
$$
The unit is the volt, with the symbol $\mathrm{V}$, and $1\,\mathrm{V}=1\,\mathrm{J/C}$. For example, a voltage of $6\,\mathrm{V}$ corresponds to $6\,\mathrm{J}$ per coulomb. A charge of $2\,\mathrm{C}$ passing through the load therefore transfers $12\,\mathrm{J}$.

Voltage is measured between *two points*. An ideal battery can maintain a voltage across its terminals even when the circuit is open. In that case, there is no closed path, and the steady current is zero. Voltage and current therefore measure two distinct aspects of a circuit.
:::

## Resistance and Ohm's law

:::definizione{#resistenza titolo="Electrical resistance"}
The **electrical resistance** $R$ of a component, under the conditions considered and for a nonzero current, is the ratio of the voltage across it to the current through it:
$$
R=\frac{V}{I}.
$$
Resistance is measured in ohms, with the symbol $\Omega$, and $1\,\Omega=1\,\mathrm{V/A}$. A component with a measured voltage of $6\,\mathrm{V}$ across it and a current of $2\,\mathrm{A}$ through it has a resistance of $3\,\Omega$ under those conditions.
:::

:::teorema{#legge-ohm titolo="Ohm's first law"}
For an **ohmic conductor** held at constant temperature over the operating range considered, voltage and current are directly proportional:
$$
V=RI.
$$
The resistance $R$ remains constant as the voltage changes. The law is based on experiments and gives the current as $I=\dfrac{V}{R}$ when $R>0$.

For a resistor of $4\,\Omega$, a voltage of $4\,\mathrm{V}$ produces a current of $1\,\mathrm{A}$, and a voltage of $8\,\mathrm{V}$ produces a current of $2\,\mathrm{A}$. Doubling the voltage therefore doubles the current. The graph of $V$ as a function of $I$ is a straight line through the origin.

::grafico{f="4*x" xmin=0 xmax=3 ymin=0 ymax=12 nomi="I,V" legenda=0 punti="1,4,pieno;2,8,pieno" titolo="For an ohmic resistor of $4\,\Omega$, the voltage $V$ in volts is proportional to the current $I$ in amperes"}
:::

:::attenzione
This proportionality holds for only some components. For example, if a component draws $1\,\mathrm{A}$ at $2\,\mathrm{V}$ and $1.5\,\mathrm{A}$ at $4\,\mathrm{V}$, the ratios are $2\,\Omega$ and about $2.67\,\Omega$. Since they differ, the data do not describe a constant resistance.
:::

:::osservazione{titolo="Reading a graph of Ohm's law"}
On a graph with current on the horizontal axis and voltage on the vertical axis, each point represents a pair of measurements on the component. For a nonzero current, dividing the vertical coordinate by the horizontal coordinate gives the resistance. At the same current, a resistor with a larger resistance requires a higher voltage, so its line is steeper relative to the horizontal axis. This comparison assumes the same axes and scales.
:::

## Resistors in series

::::teorema{#resistori-serie titolo="Series connection"}
Two resistors are **in series** when they carry the same current and there are no branches between them. The total voltage is the sum of the voltages across the two resistors. The **equivalent resistance** is the resistance of a single resistor that would draw the same total current if connected across the same terminals.

For two resistors in series,
$$
R_{\mathrm{eq}}=R_1+R_2.
$$
The relation extends to more resistors by adding all their resistances. For example, $2\,\Omega$ and $4\,\Omega$ in series are equivalent to $6\,\Omega$. With an ideal $12\,\mathrm{V}$ source, the current is $2\,\mathrm{A}$. The voltages are $4\,\mathrm{V}$ and $8\,\mathrm{V}$, and their sum is $12\,\mathrm{V}$.

:::dimostrazione
The current $I$ is the same in both resistors. Applying Ohm's law to each and adding the voltages gives
$$
V=R_1I+R_2I=(R_1+R_2)I.
$$
Comparing this relation with $V=R_{\mathrm{eq}}I$ gives the sum of the resistances.
:::
::::

:::esempio{titolo="Diagram of two resistors in series"}
In the diagram, the path between terminals $A$ and $B$ contains two resistors and has no branches. In the steady state, the same amount of charge passes through each resistor in a given one-second interval, so the currents are equal.

::grafico{assi=0 uguale=1 linee="0,0 1,0;2,0 3,0;4,0 5,0;1,-0.3 2,-0.3 2,0.3 1,0.3 1,-0.3;3,-0.3 4,-0.3 4,0.3 3,0.3 3,-0.3" punti="0,0,pieno,A;5,0,pieno,B" vettori="0.3,0.8,1.1,0.8;3.8,0.8,4.6,0.8" etichette="1.3,-0.9,R₁;3.3,-0.9,R₂;0.6,1.15,I;4.1,1.15,I" xmin=-0.6 xmax=5.6 ymin=-1.4 ymax=1.6 titolo="Two resistors in series between terminals $A$ and $B$ carry the same current"}
:::

## Resistors in parallel

::::teorema{#resistori-parallelo titolo="Parallel connection"}
Two resistors are **in parallel** when their ends connect to the same pair of points. They therefore have the same voltage across them. The total current splits between the branches according to $I=I_1+I_2$ because, in the steady state, charge does not accumulate at the junction, called a node.

For positive resistances,
$$
\frac{1}{R_{\mathrm{eq}}}=\frac{1}{R_1}+\frac{1}{R_2},
\qquad
R_{\mathrm{eq}}=\frac{R_1R_2}{R_1+R_2}.
$$
The last formula applies to two resistors. For example, $6\,\Omega$ and $3\,\Omega$ in parallel are equivalent to $2\,\Omega$. With $6\,\mathrm{V}$ across the combination, the branch currents are $1\,\mathrm{A}$ and $2\,\mathrm{A}$, and the total current is $3\,\mathrm{A}$.

:::dimostrazione
Apply Ohm's law to each branch, then add the currents:
$$
I=\frac{V}{R_1}+\frac{V}{R_2}
=V\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
Since the equivalent resistor satisfies $I=\dfrac{V}{R_{\mathrm{eq}}}$, we obtain the relation between the reciprocals. Putting the fractions over a common denominator gives the second expression.
:::
::::

:::osservazione
The equivalent resistance of the parallel combination is less than either individual resistance. This is because adding a branch gives the current another path, so the total current increases at the same voltage. This conclusion applies to the ideal source and constant resistances used in the model.

::grafico{assi=0 uguale=1 linee="0,0 1,0 1,1.5 2,1.5;3,1.5 4,1.5 4,0 5,0;1,0 1,-1.5 2,-1.5;3,-1.5 4,-1.5 4,0;2,1.2 3,1.2 3,1.8 2,1.8 2,1.2;2,-1.8 3,-1.8 3,-1.2 2,-1.2 2,-1.8" punti="0,0,pieno,A;5,0,pieno,B;1,0,pieno;4,0,pieno" vettori="1.4,2.2,2.2,2.2;1.4,-2.2,2.2,-2.2" etichette="2.25,0.75,R₁;2.25,-0.85,R₂;1.5,2.65,I₁;1.5,-2.7,I₂" xmin=-0.5 xmax=5.5 ymin=-3.1 ymax=3.1 titolo="Two resistors in parallel. Each branch connects the same terminals $A$ and $B$, so both have the same voltage across them"}
:::

:::osservazione{titolo="Identifying connections"}
The type of connection depends on the points to which the components are connected. The size and shape of the drawing can change while the circuit stays the same. The voltage between two points on the same stretch of ideal wire is zero, so those points have the same potential. For example, both branches of the parallel combination shown have their ends connected to $A$ and $B$. Each branch has the voltage between $A$ and $B$ across it, whatever the length of the ideal wires in the diagram.
:::

## Electrical power and energy

::::teorema{#potenza-elettrica titolo="Power absorbed"}
**Electrical power** $P_e$ is the energy received per unit time. For constant voltage and current, using the sign convention already introduced for the load,
$$
P_e=VI.
$$
Power is measured in watts, with the symbol $\mathrm{W}$. For an ohmic resistor, we can also write $P_e=RI^2$ or $P_e=\dfrac{V^2}{R}$. In the resistor, electrical energy is converted to internal energy. This process is called **Joule heating**.

A load supplied with $12\,\mathrm{V}$ and carrying $0.50\,\mathrm{A}$ absorbs $6\,\mathrm{W}$. It therefore receives $6\,\mathrm{J}$ every second.

:::dimostrazione
During a time interval $\Delta t$, a charge $q=I\Delta t$ passes through the load. The energy transferred is $W=qV=VI\Delta t$. Dividing by $\Delta t$ gives $P_e=VI$.
:::
::::

:::definizione{#energia-elettrica titolo="Energy and the kilowatt-hour"}
At constant power, the energy received during a time interval is
$$
E=P_e\Delta t.
$$
If power is in watts and time in seconds, energy is in joules. For the $6\,\mathrm{W}$ load, in $10\,\mathrm{s}$ we have $E=60\,\mathrm{J}$.

The **kilowatt-hour**, with the symbol $\mathrm{kWh}$, is the energy corresponding to a power of one kilowatt maintained for one hour. Since $1\,\mathrm{kW}=1000\,\mathrm{W}$ and $1\,\mathrm{h}=3600\,\mathrm{s}$,
$$
1\,\mathrm{kWh}=3\,600\,000\,\mathrm{J}.
$$
For example, a $24\,\mathrm{W}$ device that runs for $2\,\mathrm{h}$ absorbs $48\,\mathrm{Wh}=0.048\,\mathrm{kWh}$. The watt measures power. The watt-hour and the kilowatt-hour measure energy because they also account for the operating time.
:::
