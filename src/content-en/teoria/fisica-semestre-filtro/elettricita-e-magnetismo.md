---
titolo: Electricity, circuits and magnetism
sommario: From charge signs to energy balances, from circuits to capacitors, and on to magnetic force and induction.
---

## Charge and interaction: choosing the system

:::osservazione
Rubbing two materials can transfer electrons: one acquires negative charge and the other loses the same amount of negative charge. Charge is not created from nothing. A neutral object contains charges of both signs whose sum is zero; it is not devoid of charged particles. Conservation concerns the **algebraic sum** of charges in an isolated system, even when their distribution within it changes.
:::

:::definizione{#coulomb titolo="Charge and Coulomb’s law"}
Charge is measured in coulombs, $1\,\mathrm C=1\,\mathrm{A\,s}$. In ordinary objects, net charge is an integer multiple of the elementary charge $e\simeq1.602\cdot10^{-19}\,\mathrm C$: the proton carries $+e$, the electron $-e$. For two stationary point charges in vacuum separated by $r$, the force magnitude is
$$
F=k_e\dfrac{|q_1q_2|}{r^2},\qquad k_e=\dfrac{1}{4\pi\varepsilon_0}\simeq8.99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
The force acts along the line joining them: repulsive for like signs, attractive for opposite signs.
:::

:::osservazione
First convert distances and charges, then calculate the magnitude, and finally assign the direction. A negative component indicates direction relative to the chosen axis: a magnitude cannot be negative. The mutual forces have equal magnitudes even for unequal charges. Doubling only one charge doubles the force; doubling the distance reduces it to one quarter.

![Two opposite charges and equal attractive forces; comparison of the force at distances r and 2r.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/coulomb-en.svg)

The point-charge model requires dimensions small compared with the separation, or a symmetry that justifies the reduction. Closely spaced conducting spheres redistribute their charge: automatically using their centre-to-centre distance can fail. With several sources, add **force vectors**, not all their magnitudes. For three collinear charges, a signed axis is sufficient; in a plane, add components separately. When identical conducting spheres are connected far from other sources, symmetry and equal potential lead to equal sharing of the total charge. This equality does not follow from conservation alone and does not automatically hold for different conductors.
:::

## Electric field: a property of space

:::osservazione
A source changes the behaviour of other charges without touching them. To describe this influence separately from the particle used to measure it, we introduce the field. The test charge must be small enough not to appreciably disturb the source distribution.
:::

:::definizione{#campo-elettrico titolo="Field, superposition and acceleration"}
The electric field is $\vec E=\dfrac{\vec F}{q}$, with the signed value of $q$; its direction is that of the force on a positive charge. For a point source $Q$ in vacuum:
$$
\vec E=k_e\dfrac{Q}{r^2}\hat r,\qquad \vec E_{\mathrm{tot}}=\sum_i\vec E_i,\qquad \vec a=\dfrac{q\vec E}{m}.
$$
The unit vector $\hat r$ points from the source to the observation point. Units are $\mathrm{N/C}$, equivalent to $\mathrm{V/m}$; the last relation assumes other forces are negligible.
:::

:::osservazione
Field lines are tangent to the field, leave positive charges and enter negative charges; greater line density qualitatively indicates a stronger field. They do not cross where the field has a defined direction. **They are not general particle trajectories**: force determines acceleration, whereas velocity also depends on initial conditions. A negative charge accelerates against the field but may initially move along it and slow down.

In a uniform field along $+y$, a particle enters with velocity $v_0$ along $+x$. With no other forces and in the nonrelativistic regime,
$$
x=v_0t,\qquad y=\dfrac{qE}{2m}t^2,\qquad y=\dfrac{qE}{2mv_0^2}x^2.
$$
The trajectory is parabolic while the particle remains in the uniform region; outside the plates this approximation does not describe fringing fields. The transit time through a region of length $L$ is $\dfrac{L}{v_0}$, not the curved path length divided by a constant speed.

![Uniform upward field; a positive charge enters to the right and follows a parabola, distinct from the vertical lines.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/campo-moto-en.svg)

At the midpoint between equal positive charges, the fields cancel. Between opposite charges of equal magnitude, both contributions instead point from the positive charge to the negative charge and add. Drawing the individual contributions first avoids confusing vector addition of fields with scalar addition of potentials.
:::

## Potential and energy: retaining the sign

:::osservazione
A voltmeter compares two points: the absolute value assigned to potential depends on a chosen reference, whereas the measurable difference does not change when the same constant is added everywhere. Potential describes the sources; potential energy also concerns the charge placed in the field.
:::

:::teorema{#potenziale titolo="Electrostatic work"}
For stationary sources, $\Delta U=q\Delta V$ and the electrical work from A to B is
$$
W_e=q(V_A-V_B)=-\Delta U,\qquad \Delta K=-q\Delta V+W_{\mathrm{ext}}.
$$
For point charges in vacuum with zero potential at infinity:
$$
V(P)=k_e\sum_i\dfrac{Q_i}{r_i},\qquad U_{\mathrm{sys}}=k_e\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}.
$$
In the distribution’s energy, each pair is counted once; the self-energies of point charges are excluded.
:::

:::osservazione
For a single pair, $U=\dfrac{k_eQq}{r}$. Potential does not include the test charge: doubling that charge doubles $U$ and the force, not $V$ or $\vec E$. The volt is $\mathrm{J/C}$; the electronvolt is instead energy, $1\,\mathrm{eV}=e\cdot1\,\mathrm V\simeq1.602\cdot10^{-19}\,\mathrm J$.

In a uniform field, $\Delta V=-\vec E\cdot\Delta\vec r$. Potential decreases along the field and remains unchanged along a perpendicular direction. In one dimension, $E_x=-\dfrac{dV}{dx}$: the **slope**, not the graph’s height, matters. A point at zero potential may have a nonzero field. On an equipotential surface, electrostatic work between two points is zero even if the path is not straight.

![Linearly decreasing potential and constant positive field; changing the reference does not change the slope.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/potenziale-en.svg)

If an electron spontaneously crosses a difference $\Delta V>0$, the product $q\Delta V$ is negative: it loses potential energy and, with no other work, gains kinetic energy. The statement “charges move towards lower potential” describes the initial tendency of a free positive charge, not every motion. To obtain speed, use $K=\dfrac{mv^2}{2}$ only if the result is much smaller than the speed of light. If $K_i-q\Delta V$ became negative, the particle could not reach that point under the forces being considered alone.
:::

## Conductors and dielectrics: two different responses

:::osservazione
When a positive rod approaches an isolated neutral conductor, mobile electrons move towards the near side. The far side has an electron deficit. Net charge remains zero, but the distribution changes; attraction can dominate because the opposite charges are closer.
:::

:::definizione{#materiali titolo="Equilibrium and polarization"}
In electrostatic equilibrium, the field inside the **conducting material** is zero and the conductor is equipotential. Electrostatic induction redistributes free charges. In a dielectric, displacement of bound charges and orientation of dipoles instead produce **polarization**, without free migration across the entire material.
:::

:::osservazione
If a field persisted inside the metal, mobile charges would accelerate and the state would not be equilibrium. This conclusion does not apply to a resistive wire carrying a steady current: a nonzero internal field is needed. Nor does “zero field” mean “zero potential”: a charged conductor can be equipotential at a nonzero value.

![Neutral conductor with separated charges and dielectric with dipoles oriented in the external field.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/materiali-en.svg)

Grounding allows charge exchange with a large reservoir. In charging by induction, the order must be specified: while the positive rod is nearby, grounding allows electrons to enter; disconnecting the ground first and then removing the rod leaves the object negative. If the ground remains connected during removal, the result may differ. Thus “induction” does not always mean acquiring net charge.

A closed conducting enclosure in equilibrium shields an empty charge-free cavity from an external electrostatic field. The conditions on the cavity are essential. For a linear homogeneous isotropic dielectric, write $\varepsilon=\varepsilon_r\varepsilon_0$. With fixed free charges on the plates, polarization reduces the field in a completely filled capacitor. At fixed voltage, the source instead supplies additional charge. Real materials may exhibit losses and dielectric breakdown: the linear model does not hold for arbitrarily strong fields.
:::

## Current and resistance: interpreting a measurement

:::osservazione
To describe current, choose a cross-section of the wire and count the charge crossing it. Conventional current follows positive-charge transport; electron drift in metals is opposite. In a solution, cations and anions moving in opposite directions can contribute to the same conventional current. Current is not carrier speed and is not consumed by a resistor.
:::

:::definizione{#ohm titolo="Current and Ohm’s laws"}
For constant current, $I=\dfrac{\Delta q}{\Delta t}$; in general, $I=\dfrac{dq}{dt}$. An ohmic resistor under fixed physical conditions obeys
$$
\Delta V=RI,\qquad R=\rho_e\dfrac{L}{A}.
$$
The second relation concerns a uniform conductor of length $L$ and cross-sectional area $A$. Resistance has units $\Omega=\mathrm{V/A}$ and resistivity $\rho_e$ has units $\Omega\,\mathrm m$.
:::

:::osservazione
Resistivity characterizes the material under the conditions considered; resistance also depends on geometry. Doubling a cylindrical wire’s radius quadruples its area, dividing $R$ by four. Heating the wire can change $\rho_e$: checking ohmic behaviour requires controlling temperature, not merely measuring two quantities.

![Voltage-current graph for two ohmic resistors; the slope of V plotted against I is resistance.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/ohm-en.svg)

On a graph of $\Delta V$ against $I$, the slope is $R$. Reversing the axes makes the slope $\dfrac{1}{R}$. A nonlinear curve still allows the ratio $\dfrac{\Delta V}{I}$ to be calculated at a point, but does not justify treating it as constant resistance at all voltages.

An ideal voltage source maintains its specified potential difference, not a preset current. Current depends on the connected circuit; delivered energy comes from the source’s internal process. Ideal circuit wires have negligible resistance, and directly connected points belong to the same node. An ideal ammeter is connected in series and has zero resistance; an ideal voltmeter is connected in parallel and has infinite resistance, so it does not alter the measured branch current. These are useful limits for interpreting real measurements.
:::

## Resistors, nodes and dissipation

:::osservazione
Two components are in series when they share the same current without an intervening branch. They are in parallel when their ends connect to the same two nodes. Their placement on paper does not determine the connection: follow the electrical continuity of the wires.
:::

:::teorema{#circuiti titolo="Resistive networks and Joule heating"}
In steady conditions, charge conservation requires the sum of currents entering a node to equal the sum leaving it. For ideal resistors:
$$
R_s=\sum_iR_i,\qquad \dfrac{1}{R_p}=\sum_i\dfrac{1}{R_i}.
$$
The power absorbed by an ohmic resistor is
$$
P=I\Delta V=RI^2=\dfrac{(\Delta V)^2}{R},\qquad E_{\mathrm{diss}}=Pt
$$
where the last formula assumes constant power.
:::

:::osservazione
In series, voltage drops add and $R_{\mathrm{eq}}$ exceeds each term. In parallel, currents add and $R_{\mathrm{eq}}$ is smaller than the least resistive branch. These checks immediately detect a reversal of the rules. In a mixed network, first reduce groups that truly are series or parallel, then return to the individual branches to find currents and voltages.

![12-volt circuit: a 2-ohm resistor in series with a 6- and 3-ohm parallel pair, showing nodes and currents.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/circuito-en.svg)

In the illustrated circuit, the parallel pair is $2\,\Omega$, total resistance is $4\,\Omega$ and total current is $3\,\mathrm A$. The initial resistor drops $6\,\mathrm V$; the parallel pair also has $6\,\mathrm V$, with currents of $1\,\mathrm A$ and $2\,\mathrm A$. The source delivers $36\,\mathrm W$, equal to the sum $18+6+12\,\mathrm W$ dissipated by the three resistors.

Joule heating transfers electrical energy into the material’s internal energy. At fixed current, a larger resistor dissipates more power; at fixed voltage it dissipates less. These statements are compatible because the constraints differ. An open circuit can have a voltage across its ends with zero current. An ideal short circuit across an ideal nonzero voltage source produces a model incompatible with finite current; in real devices, internal and connection resistances become essential.
:::

## Capacitors: geometry, charge and energy

:::osservazione
A capacitor separates equal and opposite charges on its plates. The pair’s total charge may be zero while field and energy exist. In the capacitance relation, $q$ denotes the **magnitude of charge on one plate**, and $\Delta V$ the magnitude of the voltage between plates.
:::

:::definizione{#condensatori titolo="Capacitance and storage"}
Capacitance $C=\dfrac{q}{\Delta V}$ is measured in farads, $\mathrm F=\mathrm{C/V}$. For parallel plates, with separation $d$ much smaller than their lateral dimensions and the gap completely filled by a linear homogeneous isotropic dielectric:
$$
C=\dfrac{\varepsilon A}{d},\qquad U_C=\dfrac12q\Delta V=\dfrac12C(\Delta V)^2=\dfrac{q^2}{2C}.
$$
Fringing effects and losses are neglected.
:::

:::osservazione
Energy is not $q\Delta V$ because during charging the voltage increases from zero to its final value. The work needed to transfer a small charge increases progressively: the area under the voltage-charge line is a triangle. At fixed geometry and material, doubling voltage doubles charge and quadruples energy, leaving capacitance unchanged.

![Parallel-plate capacitor and comparison of dielectric insertion at constant charge and constant voltage.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/condensatore-en.svg)

Fully inserting a dielectric with relative permittivity $\varepsilon_r$ multiplies $C$ by $\varepsilon_r$. If the capacitor is disconnected and does not leak charge, $q$ remains constant: voltage and energy fall to their previous values divided by $\varepsilon_r$. If it remains connected to an ideal source, $\Delta V$ is constant: charge and stored energy increase by the same factor. The energy comparison must also include mechanical work and exchange with the source; the whole system’s energy cannot be inferred from $U_C$ alone.

A lipid membrane separates conducting solutions and offers an analogy with a dielectric between plates. Membrane capacitance describes charge accumulation, whereas channels and transporters introduce other currents: the capacitor alone does not represent the entire membrane. A small charge separation can generate a voltage without requiring a large change in concentrations in the surrounding volumes.
:::

## Capacitor networks: reconstructing the constraints

:::osservazione
The formulas look like the resistor rules reversed, but follow by considering different quantities. In parallel, every capacitor has the source voltage; the source must supply the sum of positive charges accumulated.
:::

:::teorema{#reti-condensatori titolo="Ideal connections"}
For parallel capacitors:
$$
q_{\mathrm{tot}}=\sum_i C_i\Delta V,\qquad C_{\mathrm{eq}}=\sum_iC_i.
$$
For an ideal series connection with isolated, initially neutral intermediate nodes, all plates carry the same charge magnitude $q$ and
$$
\Delta V_{\mathrm{tot}}=\sum_i\dfrac{q}{C_i},\qquad \dfrac1{C_{\mathrm{eq}}}=\sum_i\dfrac1{C_i}.
$$
:::

:::osservazione
Initial neutrality of intermediate nodes explains the opposite charges on the two connected plates: if a node initially carried nonzero charge, equal magnitudes could not automatically be imposed on all capacitors. In series, the smaller capacitor receives the larger voltage because $\Delta V_i=\dfrac{q}{C_i}$. Voltage does not split equally unless the capacitances are equal.

![3- and 6-microfarad capacitors: comparison of series with equal charge and parallel with equal voltage.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/reti-capacita-en.svg)

With $3\,\mu\mathrm F$ and $6\,\mu\mathrm F$ in series across $12\,\mathrm V$, $C_{\mathrm{eq}}=2\,\mu\mathrm F$ and $q=24\,\mu\mathrm C$; the voltages are $8\,\mathrm V$ and $4\,\mathrm V$. In parallel, capacitance is $9\,\mu\mathrm F$ and charges are $36\,\mu\mathrm C$ and $72\,\mu\mathrm C$. The same pair of components can therefore store different energies depending on the connection.

In a DC-powered circuit, after the transient a fully charged ideal capacitor carries no conduction current through its dielectric. During charging, current instead flows in the wires as plate charges change. If two capacitors are then connected together without a source, charge on isolated nodes is conserved, but the sum of initial electrostatic energies is not necessarily conserved: redistribution involves dissipation and, in a fuller model, radiation. The final state alone does not describe the transient.
:::

## Magnetic field: direction without work on a charge

:::osservazione
In Oersted’s experiment, current in a wire deflects a compass needle; reversing current reverses the produced field. Around a long straight wire, magnetic lines form circles: the right-hand thumb follows conventional current and the fingers show the field direction. Magnetic lines do not start from electric charges and must not be confused with electric field lines.
:::

:::definizione{#lorentz titolo="Magnetic force and motion"}
Magnetic field is measured in teslas, $\mathrm T=\mathrm{N/(A\,m)}$. The full electromagnetic force is $\vec F=q(\vec E+\vec v\times\vec B)$. Its magnetic part is
$$
\vec F_B=q\vec v\times\vec B,\qquad F_B=|q|vB\sin\theta.
$$
For a straight wire in a uniform field, $\vec F=I\vec\ell\times\vec B$, where $\vec\ell$ follows conventional current.
:::

:::osservazione
The right hand gives $\vec v\times\vec B$; reverse the result for a negative charge. The symbol $\odot$ means out of the page and $\otimes$ into the page. A stationary charge or one moving parallel to the field experiences no magnetic force, even if $B$ is large.

![Positive charge moving right in an inward field: upward force and circular trajectory.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/lorentz-en.svg)

Because $\vec F_B$ is perpendicular to $\vec v$, its power on an individual particle is $\vec F_B\cdot\vec v=0$. In a static magnetic field alone, speed and kinetic energy remain constant. In the classical, nonrelativistic model with no other forces, an initial velocity perpendicular to a uniform field produces circular motion:
$$
|q|vB=\dfrac{mv^2}{r},\qquad r=\dfrac{mv}{|q|B},\qquad T=\dfrac{2\pi m}{|q|B}.
$$
If a parallel component is also present, it remains constant and the trajectory becomes helical; the radius depends on the perpendicular component. Here too, field lines are not the trajectory. A wire can experience a force and perform mechanical work as part of a circuit: the balance includes the source and electric fields. This does not contradict zero magnetic work on an individual charge.
:::

## Induction: opposing the change in flux

:::osservazione
A coil can show voltage without a battery when the field passing through it changes. What matters is the change in **linked flux**, not merely the presence of a magnet. Changing the loop’s area or rotating it in a constant field can also produce induction.
:::

:::teorema{#induzione titolo="Faraday–Neumann–Lenz law"}
For a planar loop in a uniform field, $\Phi_B=BA\cos\theta$, where $\theta$ is the angle between field and oriented surface normal. Flux is measured in webers, $\mathrm{Wb}=\mathrm{T\,m^2}$. For $N$ turns with the same flux per turn:
$$
\mathcal E=-N\dfrac{d\Phi_B}{dt},\qquad \mathcal E_{\mathrm m}=-N\dfrac{\Delta\Phi_B}{\Delta t}.
$$
The second value is an average. If flux changes linearly, emf is constant and equals this average throughout the interval; with nonlinear flux, the two values may coincide at particular instants.
:::

:::osservazione
Choose a normal and associate a positive direction around the loop using the right hand. The minus sign expresses Lenz’s law: the induced current’s field opposes the **change** in external flux. If an inward field increases, the current produces an outward field and is counterclockwise as viewed facing the page. If the same inward field decreases, current is clockwise, tending to sustain the inward flux being lost.

![Loop in an increasing inward field: counterclockwise current and outward induced field; the flux graph distinguishes slope from value.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/induzione-en.svg)

In a closed, predominantly resistive circuit with negligible self-inductance, use $|I|=\dfrac{|\mathcal E|}{R}$. An open circuit may have an emf without sustained current. The name “electromotive force” means energy transferred per unit charge, so it is measured in volts, not newtons. For a conductor moving through the field, forces on charges contribute to charge separation; a stationary loop in a varying field instead experiences a nonconservative induced electric field. Electrostatic potential cannot be extended to describe that entire field.

Lenz’s opposition expresses an energy balance: pushing a magnet towards a resistive loop requires mechanical work against the reaction force, also supplying Joule dissipation. When reading a flux graph, examine its slope: large but constant flux means zero emf; flux passing through zero with nonzero slope can produce a substantial emf.
:::
