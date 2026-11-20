---
titolo: Electricity, circuits and magnetism
sommario: From charge signs to energy balances, from circuits to capacitors, and on to magnetic force and induction.
---

## Charge and interaction: choosing the system

:::osservazione
**Electric charge** is a property of the particles that make up matter. It exists in two types, positive and negative. Protons, in the nucleus of the atom, have positive charge and electrons, around the nucleus, have negative charge. A body is **neutral** when it contains as many positive as negative charges. When two materials are rubbed, some electrons pass from one to the other. The one receiving them becomes negative and the one losing them becomes positive, with charges equal in value. Charge is neither created nor destroyed: in an isolated system the sum of all charges, taken with their sign, stays constant. This is the **principle of conservation of charge**.
:::

:::definizione{#coulomb titolo="Charge and Coulomb’s law"}
Charge is measured in coulombs (C). The smallest charge existing free is the **elementary charge**, $e\simeq1.602\cdot10^{-19}\,\mathrm C$. The proton has charge $+e$ and the electron $-e$, and the charge of every body is a whole multiple of $e$. Two charges exert a force on each other. **Coulomb’s law** gives the magnitude of this force for two point charges $q_1$ and $q_2$ at rest, at distance $r$ in a vacuum:
$$
F=k_e\dfrac{|q_1q_2|}{r^2},\qquad k_e=\dfrac{1}{4\pi\varepsilon_0}\simeq8.99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
The force is directed along the line joining the two charges. Charges of the same sign repel and charges of opposite sign attract.
:::

:::osservazione
The force is proportional to the product of the charges and inversely proportional to the square of the distance. If one charge doubles, the force doubles. If the distance doubles, the force becomes one quarter. By Newton’s third law the two charges experience equal and opposite forces, even if the charges are different. Two charges of $2.0\,\mu\mathrm C$ and $3.0\,\mu\mathrm C$ at a distance of $0.30\,\mathrm m$ repel with a force $F=8.99\cdot10^9\cdot\dfrac{2.0\cdot10^{-6}\cdot3.0\cdot10^{-6}}{0.30^2}\simeq0.60\,\mathrm N$. In the calculation charges go in coulombs and distances in metres. The formula gives the magnitude, and the sense is established from the signs of the charges.

![Two opposite charges and equal attractive forces; comparison of the force at distances r and 2r.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/coulomb-en.svg)

If several charges act on a charge, the total force is the vector sum of the forces exerted by each. Each force is calculated with Coulomb’s law and then the components are added. With charges in a line one axis is enough, and each force has the sign of its sense.

The law holds for point charges, that is, charges small compared with the distance separating them, and for spheres with uniformly distributed charge, using the distance between the centres. If two identical small conducting spheres with different charges are brought into contact, the total charge divides equally between the two.
:::

## Electric field: a property of space

:::osservazione
A charge exerts forces on other charges even at a distance. To describe this effect the charge is said to create around itself an **electric field**, present at every point of space even if nothing is at that point. To measure it a small charge, called a test charge, is placed at the point and the force it experiences is measured.
:::

:::definizione{#campo-elettrico titolo="Field, superposition and acceleration"}
The electric field at a point is the force acting on a charge placed at that point, divided by the charge itself, $\vec E=\dfrac{\vec F}{q}$. It is a vector. It has the sense of the force on a positive charge, and a negative charge experiences a force in the opposite sense. Knowing the field gives the force on any charge, $\vec F=q\vec E$. For a point charge $Q$:
$$
\vec E=k_e\dfrac{Q}{r^2}\hat r,\qquad \vec E_{\mathrm{tot}}=\sum_i\vec E_i,\qquad \vec a=\dfrac{q\vec E}{m}.
$$
The first formula says that the field of a point charge decreases with the square of the distance. It is directed along the line through the charge, outwards if $Q$ is positive and inwards if it is negative. The second is the **superposition principle**: the field of several charges is the vector sum of the fields of each. The third gives the acceleration of a particle of mass $m$ and charge $q$ in the field. The field is measured in $\mathrm{N/C}$, a unit equivalent to $\mathrm{V/m}$.
:::

:::osservazione
The field is represented by **field lines**, which follow three rules.

- At every point the line is tangent to the field.
- Lines leave positive charges and enter negative ones.
- Where the lines are denser the field is stronger.

Field lines indicate the direction of the force and not the trajectory of a charge. The force determines the acceleration, and the path also depends on the initial velocity.

A **uniform field** has the same value and direction at all points. It is found between two parallel flat plates with opposite charges. A particle of charge $q$ enters with velocity $v_0$ in the $x$ direction into a uniform field directed along $y$. Along $x$ there is no force and the motion is uniform. Along $y$ the force $qE$ is constant and the motion is uniformly accelerated:
$$
x=v_0t,\qquad y=\dfrac{qE}{2m}t^2,\qquad y=\dfrac{qE}{2mv_0^2}x^2.
$$
The trajectory is a parabola, like that of a body thrown horizontally in the gravitational field, with $\dfrac{qE}{m}$ in place of $g$. The time the particle takes to cross a zone of length $L$ depends only on the motion along $x$ and is $\dfrac{L}{v_0}$.

![Uniform upward field; a positive charge enters to the right and follows a parabola, distinct from the vertical lines.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/campo-moto-en.svg)

Two examples show the sum of fields. At the midpoint between two equal positive charges, the two fields have the same magnitude and opposite senses, so the total field is zero. At the midpoint between two equal charges of opposite sign, both fields point towards the negative charge, so the total field is twice that of a single charge.
:::

## Potential and energy: retaining the sign

:::osservazione
A charge in an electric field has a potential energy, like a mass in the gravitational field. The **electric potential energy** $U$ depends on the charge and on the point where it is. The **electric potential** $V$ at a point is the potential energy of a charge placed at that point, divided by the charge, $V=\dfrac Uq$. It depends only on the charges creating the field. It is measured in volts, $1\,\mathrm V=1\,\mathrm{J/C}$. Only the potential difference between two points matters, also called **voltage**, which is what a voltmeter measures. The point at zero potential is chosen freely.
:::

:::teorema{#potenziale titolo="Electrostatic work"}
When a charge $q$ moves between two points with potential difference $\Delta V$, its potential energy changes by $\Delta U=q\,\Delta V$. The work done by the electric force in moving from A to B, and the change in kinetic energy, are:
$$
W_e=q(V_A-V_B)=-\Delta U,\qquad \Delta K=-q\Delta V+W_{\mathrm{ext}}.
$$
The term $W_{\mathrm{ext}}$ is the work of any other forces. If only the electric force acts, the kinetic energy the charge gains equals the potential energy it loses. For point charges, with zero potential at infinite distance, the potential at a point P and the energy of a system of charges are:
$$
V(P)=k_e\sum_i\dfrac{Q_i}{r_i},\qquad U_{\mathrm{sys}}=k_e\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}.
$$
Potential is a scalar, so the contributions of the charges add as numbers, each with the sign of its charge. In the energy of the system each pair of charges appears only once.
:::

:::osservazione
An electron accelerated by a potential difference of $1\,\mathrm V$ gains an energy of $1.602\cdot10^{-19}\,\mathrm J$. This amount is a unit of energy, the **electronvolt**, $1\,\mathrm{eV}\simeq1.602\cdot10^{-19}\,\mathrm J$, used for atoms and radiation. The volt measures a potential and the electronvolt an energy.

In a uniform field the potential decreases in the sense of the field, and between two points a distance $d$ apart along the field the potential difference is $Ed$. Between two plates $2.0\,\mathrm{cm}$ apart with a voltage of $100\,\mathrm V$ the field is $\dfrac{100}{0.020}=5000\,\mathrm{V/m}$. In general the field is the slope of the graph of potential against position, with the sign changed, $E_x=-\dfrac{dV}{dx}$. The field therefore depends on how fast the potential varies and not on its value. An **equipotential surface** consists of points at the same potential. The field is perpendicular to it, and moving a charge along it requires no work.

![Linearly decreasing potential and constant positive field; changing the reference does not change the slope.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/potenziale-en.svg)

A free positive charge moves spontaneously towards points at lower potential. A negative charge, such as an electron, moves towards points at higher potential. In both cases the charge loses potential energy and gains kinetic energy. An electron starting from rest and crossing a potential difference of $100\,\mathrm V$ gains $100\,\mathrm{eV}=1.6\cdot10^{-17}\,\mathrm J$. From $K=\dfrac{mv^2}{2}$, with $m=9.11\cdot10^{-31}\,\mathrm{kg}$, its speed is $v=\sqrt{\dfrac{2K}{m}}\simeq5.9\cdot10^6\,\mathrm{m/s}$. This formula for kinetic energy holds as long as the speed is much lower than that of light.
:::

## Conductors and dielectrics: two different responses

:::osservazione
Materials fall into two groups according to the behaviour of their charges. In **conductors**, such as metals, some of the electrons are free to move throughout the material. In **insulators**, also called **dielectrics**, such as glass and plastic, the electrons stay bound to their atoms. If a positively charged rod is brought near a neutral conductor, the free electrons are attracted and move to the side near the rod. The near side becomes negative and the far side positive, while the total charge stays zero. This phenomenon is called **electrostatic induction**. The conductor is attracted to the rod, because the negative charges are closer than the positive ones.
:::

:::definizione{#materiali titolo="Equilibrium and polarization"}
In a conductor in **electrostatic equilibrium**, that is, with charges at rest, three properties hold.

- The electric field inside the conductor is zero.
- All points of the conductor are at the same potential.
- Excess charge lies on the surface.

In a dielectric charges do not move through the material. In an electric field, however, in each molecule the positive charges shift slightly in one sense and the negative ones in the opposite sense. This phenomenon is called **polarisation**.
:::

:::osservazione
The first property is explained as follows. If there were a field inside the conductor, the free electrons would experience a force and move, and the charges would not be at rest. The properties hold only at equilibrium. In a wire carrying a current the charges move, and there is an electric field in the wire. Zero field, moreover, does not mean zero potential: the potential of the conductor is uniform and generally has a non-zero value.

![Neutral conductor with separated charges and dielectric with dipoles oriented in the external field.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/materiali-en.svg)

**Earthing** is the connection of a conductor to the ground, which can give up or receive electrons in practically unlimited amounts. With it a conductor is charged by induction, in three steps.

1. A positive rod is brought near the neutral conductor.
2. The conductor is connected to earth. Electrons come up from the ground, attracted by the rod.
3. The earth connection is removed and then the rod is taken away. The conductor is left with excess electrons, so it is negatively charged.

A closed conducting enclosure protects its interior from external electric fields. This effect is called **shielding** and the enclosure is called a Faraday cage.

In a polarised dielectric the shifted charges create a field opposite to the external one, so the field inside the material is smaller. The reduction is measured by the **relative permittivity** $\varepsilon_r$, a number greater than 1 that depends on the material. It is about 1 for air and about 80 for water. In formulas $\varepsilon=\varepsilon_r\varepsilon_0$ is used in place of $\varepsilon_0$.
:::

## Current and resistance: interpreting a measurement

:::osservazione
**Electric current** is an ordered movement of charges. In metals electrons move. In solutions, such as the fluids of the body, positive and negative ions move. By convention the direction of the current is the one in which positive charges would move, so in metals it is opposite to the direction in which the electrons move. In a circuit current is not used up: the current entering a component equals the current leaving it. What the component absorbs is energy.
:::

:::definizione{#ohm titolo="Current and Ohm’s laws"}
The **current** $I$ is the charge crossing a section of the wire in one second, $I=\dfrac{\Delta q}{\Delta t}$. It is measured in amperes, $1\,\mathrm A=1\,\mathrm{C/s}$. To make a current flow in a conductor a potential difference across its ends is needed. For many conductors **Ohm’s first law** holds: the potential difference is proportional to the current. The constant of proportionality is the **resistance** $R$, which measures how much the conductor opposes the flow of current. **Ohm’s second law** gives the resistance of a wire:
$$
\Delta V=RI,\qquad R=\rho_e\dfrac{L}{A}.
$$
Resistance is measured in ohms, $1\,\Omega=1\,\mathrm{V/A}$. In the second law $L$ is the length of the wire, $A$ the area of its section and $\rho_e$ the **resistivity** of the material, in $\Omega\,\mathrm m$. A longer wire has more resistance and a thicker wire has less. A $100\,\Omega$ resistor connected to a $9\,\mathrm V$ battery carries a current $I=\dfrac{9}{100}=0.09\,\mathrm A$.
:::

:::osservazione
Resistivity is a property of the material: it is low in metals and extremely high in insulators. Resistance is a property of the single object, because it also depends on its shape. If the radius of a wire doubles, the area of the section quadruples and the resistance becomes one quarter. The resistivity of metals increases with temperature.

![Voltage-current graph for two ohmic resistors; the slope of V plotted against I is resistance.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/ohm-en.svg)

A conductor that follows Ohm’s first law is called **ohmic**. Its graph of voltage against current is a straight line through the origin, and the slope of the line is the resistance. If the axes are swapped, with current against voltage, the slope is $\dfrac1R$. For a non-ohmic component, such as a diode, the graph is a curve and the resistance changes with voltage.

A circuit needs a **generator**, such as a battery, which maintains a potential difference between its two terminals. An ideal generator always maintains the same voltage, and the current depends on what is connected to it. Two instruments are used for measurements.

- The **ammeter** measures current. It is inserted in series with the component, so that the current passes through it, and has almost zero resistance.
- The **voltmeter** measures potential difference. It is connected in parallel, across the two ends of the component, and has a very large resistance.
:::

## Resistors, nodes and dissipation

:::osservazione
The components of a circuit are connected in two ways.

- Two components are **in series** if they are connected one after another on the same wire, with no branches between them. The same current passes through them.
- Two components are **in parallel** if their ends are connected to the same two points. They have the same potential difference.

A point where three or more wires meet is called a **node**. The type of connection is recognised by following the wires, and not from the position of the components in the drawing.
:::

:::teorema{#circuiti titolo="Resistive networks and Joule heating"}
At a node the sum of the currents entering equals the sum of those leaving, because charge is conserved. Several connected resistors are equivalent to a single resistor, whose **equivalent resistance** is $R_s$ for resistors in series and $R_p$ for those in parallel:
$$
R_s=\sum_iR_i,\qquad \dfrac{1}{R_p}=\sum_i\dfrac{1}{R_i}.
$$
A resistor carrying a current heats up. This phenomenon is called the **Joule effect**. The electrical energy that becomes heat in one second is the power:
$$
P=I\Delta V=RI^2=\dfrac{(\Delta V)^2}{R},\qquad E_{\mathrm{diss}}=Pt
$$
The three forms of the power are equivalent and one passes from one to another with Ohm’s law. In a time $t$ the energy dissipated is $Pt$. A $230\,\mathrm V$, $1000\,\mathrm W$ heater carries $I=\dfrac{P}{\Delta V}\simeq4.3\,\mathrm A$ and in one hour consumes $1000\cdot3600=3.6\cdot10^6\,\mathrm J$, that is, one kilowatt-hour.
:::

:::osservazione
In series the equivalent resistance is the sum of the resistances, so it is larger than each one. The generator voltage divides among the resistors, in proportion to the resistances. In parallel the equivalent resistance is smaller than the smallest, because the current has more paths. The generator current divides among the branches, and the larger current passes through the branch with less resistance. A circuit with both types of connection is solved in steps: each series or parallel group is replaced by its equivalent resistance until a single resistor is obtained, the total current is calculated and then one works back to find the voltage and current of each resistor.

![12-volt circuit: a 2-ohm resistor in series with a 6- and 3-ohm parallel pair, showing nodes and currents.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/circuito-en.svg)

In the circuit in the figure a $2\,\Omega$ resistor is in series with two resistors of $6\,\Omega$ and $3\,\Omega$ in parallel with each other, and the generator is $12\,\mathrm V$. The calculation proceeds in four steps.

1. The parallel pair gives $\dfrac{1}{R_p}=\dfrac16+\dfrac13=\dfrac12$, so $R_p=2\,\Omega$.
2. The total resistance is $2+2=4\,\Omega$ and the total current is $\dfrac{12}{4}=3\,\mathrm A$.
3. Across the $2\,\Omega$ resistor the voltage is $2\cdot3=6\,\mathrm V$. Across the parallel pair $12-6=6\,\mathrm V$ remain.
4. Through the $6\,\Omega$ resistor $\dfrac66=1\,\mathrm A$ flows and through the $3\,\Omega$ one $\dfrac63=2\,\mathrm A$. The sum is $3\,\mathrm A$, like the total current.

The powers dissipated are $2\cdot3^2=18\,\mathrm W$, $6\cdot1^2=6\,\mathrm W$ and $3\cdot2^2=12\,\mathrm W$. The sum, $36\,\mathrm W$, equals the power delivered by the generator, $12\cdot3=36\,\mathrm W$.

Which resistor dissipates more depends on the connection. In series the current is the same, and by $P=RI^2$ the larger resistance dissipates more. In parallel the voltage is the same, and by $P=\dfrac{(\Delta V)^2}{R}$ the smaller resistance dissipates more. In an open circuit, that is, a broken one, the current is zero and the whole generator voltage appears across the break. In a **short circuit** the two terminals of the generator are joined by a wire of almost zero resistance. The current becomes very large, and only the small internal resistance of the generator limits it.
:::

## Capacitors: geometry, charge and energy

:::osservazione
A **capacitor** is a device that stores charge and energy. It consists of two nearby conductors, called **plates**, separated by an insulator. When it is connected to a generator, one plate acquires a charge $+q$ and the other a charge $-q$. An electric field forms between the plates. The charge of the capacitor means $q$, the value of the charge on one of the two plates.
:::

:::definizione{#condensatori titolo="Capacitance and storage"}
The charge stored is proportional to the voltage between the plates. The **capacitance** $C=\dfrac{q}{\Delta V}$ is the charge stored per volt of voltage. It is measured in farads, $1\,\mathrm F=1\,\mathrm{C/V}$. The farad is a very large unit and in practice microfarads and picofarads are used. For a parallel-plate capacitor, made of two parallel plates of area $A$ a distance $d$ apart, the capacitance and the energy stored are:
$$
C=\dfrac{\varepsilon A}{d},\qquad U_C=\dfrac12q\Delta V=\dfrac12C(\Delta V)^2=\dfrac{q^2}{2C}.
$$
Capacitance depends only on the shape of the capacitor and on the material between the plates. It is larger with larger and closer plates. A $10\,\mu\mathrm F$ capacitor charged to $12\,\mathrm V$ stores a charge $q=C\Delta V=120\,\mu\mathrm C$ and an energy $\dfrac12\cdot10\cdot10^{-6}\cdot12^2=7.2\cdot10^{-4}\,\mathrm J$.
:::

:::osservazione
The factor $\dfrac12$ appears in the energy because during charging the voltage is not constant: it grows from zero to the final value $\Delta V$. The first charges are transferred almost without work and the last ones against the full voltage, so on average each charge is transferred at voltage $\dfrac{\Delta V}{2}$. The energy depends on the square of the voltage, so with double the voltage it is four times larger.

![Parallel-plate capacitor and comparison of dielectric insertion at constant charge and constant voltage.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/condensatore-en.svg)

If the space between the plates is filled with a dielectric of permittivity $\varepsilon_r$, the capacitance becomes $\varepsilon_r$ times larger. The effect on the other quantities depends on how the capacitor is connected.

- **Capacitor disconnected from the generator.** The charge cannot change. The capacitance increases, so the voltage $\Delta V=\dfrac qC$ and the energy $\dfrac{q^2}{2C}$ become $\varepsilon_r$ times smaller.
- **Capacitor connected to the generator.** The voltage cannot change. The capacitance increases, so the charge $q=C\Delta V$ and the energy $\dfrac12C(\Delta V)^2$ become $\varepsilon_r$ times larger. The extra charge is supplied by the generator.

The **cell membrane** behaves like a capacitor. The lipid bilayer is a thin insulator, and the fluids on its two sides are conductors. Opposite charges accumulate on the two faces, producing the membrane potential, of about $70\,\mathrm{mV}$. The membrane is very thin, so very few charges are enough to produce this voltage, and the composition of the fluids on the two sides stays practically unchanged.
:::

## Capacitor networks: reconstructing the constraints

:::osservazione
Capacitors too are connected in series and in parallel, and are replaced by an equivalent capacitor. The rules are swapped compared with those for resistors: capacitances add in parallel, and in series their reciprocals add.
:::

:::teorema{#reti-condensatori titolo="Ideal connections"}
In parallel all capacitors have the same voltage $\Delta V$, and the total charge is the sum of the charges of each:
$$
q_{\mathrm{tot}}=\sum_i C_i\Delta V,\qquad C_{\mathrm{eq}}=\sum_iC_i.
$$
In series all capacitors have the same charge $q$, and the total voltage is the sum of the voltages of each:
$$
\Delta V_{\mathrm{tot}}=\sum_i\dfrac{q}{C_i},\qquad \dfrac1{C_{\mathrm{eq}}}=\sum_i\dfrac1{C_i}.
$$
:::

:::osservazione
In series the charge is the same for the following reason. The two plates connected to each other, one of one capacitor and one of the next, form an isolated conductor, initially neutral. If the charge $-q$ appears on one, $+q$ appears on the other. Since $\Delta V_i=\dfrac{q}{C_i}$, in series the capacitor with the smaller capacitance has the larger voltage.

![3- and 6-microfarad capacitors: comparison of series with equal charge and parallel with equal voltage.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/reti-capacita-en.svg)

Two capacitors of $3\,\mu\mathrm F$ and $6\,\mu\mathrm F$ are connected to a $12\,\mathrm V$ generator.

- **In series.** $\dfrac{1}{C_{\mathrm{eq}}}=\dfrac13+\dfrac16=\dfrac12$, so $C_{\mathrm{eq}}=2\,\mu\mathrm F$. The charge is $q=2\cdot12=24\,\mu\mathrm C$ for both. The voltages are $\dfrac{24}{3}=8\,\mathrm V$ and $\dfrac{24}{6}=4\,\mathrm V$, with sum $12\,\mathrm V$.
- **In parallel.** $C_{\mathrm{eq}}=3+6=9\,\mu\mathrm F$. Both have $12\,\mathrm V$. The charges are $3\cdot12=36\,\mu\mathrm C$ and $6\cdot12=72\,\mu\mathrm C$.

In a circuit with a battery, current flows in the wires only while the capacitor is charging. When it is charged the current falls to zero, because there is an insulator between the plates. In direct current a charged capacitor is therefore equivalent to a break in the circuit.
:::

## Magnetic field: direction without work on a charge

:::osservazione
The **magnetic field** is the field created by magnets and by electric currents. It is written $\vec B$. Oersted’s experiment showed the link between electricity and magnetism: a compass needle near a wire moves when a current flows in the wire. Around a straight wire the magnetic field lines are circles centred on the wire. The sense is found with the right hand. The thumb points in the direction of the current, and the other fingers, curled, indicate the sense of the lines. Magnetic field lines are always closed, because isolated magnetic charges do not exist.
:::

:::definizione{#lorentz titolo="Magnetic force and motion"}
The magnetic field is measured in teslas (T). It exerts a force on moving charges, called the **Lorentz force**. The total force on a charge in the presence of an electric and a magnetic field is $\vec F=q(\vec E+\vec v\times\vec B)$. The magnetic part is:
$$
\vec F_B=q\vec v\times\vec B,\qquad F_B=|q|vB\sin\theta.
$$
In the formula $\theta$ is the angle between the velocity and the field. The force is perpendicular both to the velocity and to the field. It is greatest when the charge moves perpendicular to the field and zero when it moves parallel to the field or is at rest. On a straight wire of length $\ell$ carrying a current $I$ the force is $\vec F=I\vec\ell\times\vec B$, with $\vec\ell$ in the direction of the current.
:::

:::osservazione
The sense of the force on a positive charge is found with the right hand. The thumb points along the velocity and the other fingers along the field. The force comes out of the palm. For a negative charge the sense is opposite. In drawings a vector perpendicular to the page is shown as $\odot$ if it comes out of the page towards the viewer and as $\otimes$ if it goes into the page.

![Positive charge moving right in an inward field: upward force and circular trajectory.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/lorentz-en.svg)

The magnetic force is always perpendicular to the velocity, so it does no work. It changes the direction of the velocity and not its magnitude, and the kinetic energy of the particle stays constant. A particle entering a uniform field with velocity perpendicular to the field therefore travels round a circle at constant speed. The magnetic force is the centripetal force:
$$
|q|vB=\dfrac{mv^2}{r},\qquad r=\dfrac{mv}{|q|B},\qquad T=\dfrac{2\pi m}{|q|B}.
$$
The radius $r$ is larger for heavier and faster particles, and smaller in a stronger field. The period $T$ does not depend on velocity. A proton ($m=1.67\cdot10^{-27}\,\mathrm{kg}$) with speed $1.0\cdot10^6\,\mathrm{m/s}$ in a field of $0.50\,\mathrm T$ travels round a circle of radius $r=\dfrac{1.67\cdot10^{-27}\cdot1.0\cdot10^6}{1.602\cdot10^{-19}\cdot0.50}\simeq0.021\,\mathrm m$. If the velocity also has a component parallel to the field, this component does not change and the trajectory is a helix.
:::

## Induction: opposing the change in flux

:::osservazione
A magnetic field changing over time produces a current in a circuit, even without a battery. This phenomenon is called **electromagnetic induction**. If a magnet is brought near a coil connected to an ammeter, the instrument shows a current while the magnet is moving. When the magnet is at rest the current is zero, even if the magnet is close. The current therefore appears when the field through the coil changes.
:::

:::teorema{#induzione titolo="Faraday–Neumann–Lenz law"}
The quantity that matters is the **magnetic flux** $\Phi_B$ through the circuit, which measures how much field crosses its surface. For a flat loop of area $A$ in a uniform field it equals $\Phi_B=BA\cos\theta$, where $\theta$ is the angle between the field and the perpendicular to the loop. It is measured in webers, $1\,\mathrm{Wb}=1\,\mathrm{T\,m^2}$. The flux changes if the field changes, if the area changes or if the loop rotates. The **Faraday-Neumann-Lenz law** states that the change in flux produces in the circuit an **electromotive force** $\mathcal E$, that is, a voltage, equal to the rate at which the flux changes. For a coil of $N$ turns:
$$
\mathcal E=-N\dfrac{d\Phi_B}{dt},\qquad \mathcal E_{\mathrm m}=-N\dfrac{\Delta\Phi_B}{\Delta t}.
$$
The first formula gives the value at an instant and the second the average value over an interval $\Delta t$. A coil of 100 turns, in which the flux per turn increases by $2.0\cdot10^{-3}\,\mathrm{Wb}$ in $0.10\,\mathrm s$, has an average electromotive force of magnitude $100\cdot\dfrac{2.0\cdot10^{-3}}{0.10}=2.0\,\mathrm V$. The electromotive force, despite its name, is a voltage and is measured in volts.
:::

:::osservazione
The minus sign in the formula is **Lenz’s law**, which gives the direction of the induced current: the induced current creates a magnetic field that opposes the change in flux that produced it. It opposes the change, not the field. The two cases are as follows.

- If the flux increases, the field of the induced current is opposite to the external field.
- If the flux decreases, the field of the induced current has the same sense as the external field.

A loop, for example, lies in a field going into the page that is increasing. The induced current creates a field coming out of the page, and by the right-hand rule it circulates anticlockwise. If the same field is decreasing, the induced current creates a field going into the page and circulates clockwise.

![Loop in an increasing inward field: counterclockwise current and outward induced field; the flux graph distinguishes slope from value.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/induzione-en.svg)

If the circuit is closed and has resistance $R$, the induced current is $I=\dfrac{|\mathcal E|}{R}$. If the circuit is open the electromotive force is still there and no current flows.

Lenz’s law is a consequence of conservation of energy. When a magnet is brought near a loop, the induced current repels the magnet. Work must therefore be done to bring it closer, and this work becomes the electrical energy of the current, which is dissipated as heat in the loop.

In a graph of flux against time the electromotive force is the slope, with the sign changed. A large constant flux gives zero electromotive force. A rapidly changing flux gives a large electromotive force, even at the instant when the flux is zero.
:::
