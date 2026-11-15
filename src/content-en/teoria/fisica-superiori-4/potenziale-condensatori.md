---
titolo: Electric potential and capacitors
sommario: Work by the electric force, potential energy, voltage, equipotentials, capacitance, and energy balances for capacitors.
---

## Potential energy and work

:::definizione{#energia-potenziale titolo="Electric energy of two charges"}
The electrostatic force is conservative, so the work between two points depends only on the endpoints. For two point charges $Q$ and $q$ in vacuum, with zero energy at infinite separation, the potential energy is
$$
U=k_e\frac{Qq}{r}.
$$
Here $r$ is the separation and $k_e\simeq8.99\cdot10^9\,\mathrm{N\,m^2/C^2}$. The product $Qq$ includes both signs. Thus like charges have $U>0$, while opposite charges have $U<0$. With $Q=+2.0\,\mathrm{nC}$, $q=-1.0\,\mathrm{nC}$, and $r=0.10\,\mathrm{m}$, the result is $U\simeq-1.80\cdot10^{-7}\,\mathrm{J}$.

The **work done by the electric force** is $W_{A\to B}=U_A-U_B=-\Delta U$. If only the electric force acts, mechanical energy $K+U$ is conserved, so any decrease in $U$ accompanies an equal increase in $K$. If an external agent moves the charge slowly, with negligible change in kinetic energy, external work is $W_{\mathrm{est}}=\Delta U$. Separating the two charges in the example requires raising $U$ from a negative value to zero, so the external agent must supply energy.
:::

## Potential and potential difference

:::definizione{#potenziale titolo="Potential energy per unit charge"}
The **electric potential** $V$ at a point is electric potential energy per unit test charge, $V=\dfrac{U}{q}$, with $q\ne0$. For a point source $Q$ and zero potential at infinity,
$$
V=k_e\frac{Q}{r}.
$$
The potential depends on the source and the position. When a test charge is introduced, its potential energy is $U=qV$ and also depends on its sign. At $0.10\,\mathrm{m}$ from $Q=+1.0\,\mathrm{nC}$ the potential is $89.9\,\mathrm{V}$. At the same point, two test charges $+2.0\,\mathrm{nC}$ and $-2.0\,\mathrm{nC}$ have opposite energies. Potential is measured in volts, with $1\,\mathrm{V}=1\,\mathrm{J/C}$, while $U$ is measured in joules.

Between two points define $\Delta V=V_B-V_A$. Therefore
$$
\Delta U=q(V_B-V_A),\qquad W_{A\to B}=-q(V_B-V_A).
$$
Moving the zero reference adds the same number to $V_A$ and $V_B$. That number cancels in the difference, so the work is independent of the reference.
:::

:::esempio{titolo="Zero potential with a nonzero field"}
The potentials due to several sources **add algebraically**. At the midpoint between $+Q$ and $-Q$, the distances are equal and the two contributions cancel. The two electric field vectors both point toward the negative charge. Their magnitudes add. In this example the potential is zero relative to infinity, while the field exerts a force on a test charge.
:::

:::esempio{titolo="Potential of a single source"}
The curves represent two separate cases, with source $+1.0\,\mathrm{nC}$ or $-1.0\,\mathrm{nC}$. At larger distances, the magnitude of the potential decreases as $\dfrac1r$, and the potential approaches zero from opposite sides.

::grafico{f="899/x;-899/x" xmin=0 xmax=60 ymin=-130 ymax=130 punti="10,89.9,pieno,A;10,-89.9,pieno,B" nomi="r,V" legenda="Q=+1\,\mathrm{nC};Q=-1\,\mathrm{nC}" titolo="Distance in centimeters and potential in volts. Points A and B are at $r=10\,\mathrm{cm}$."}
:::

## Uniform field and equipotentials

::::teorema{#campo-potenziale titolo="Potential difference in a uniform field"}
Let $\vec E$ be a uniform field of magnitude $E$. If the displacement from $A$ to $B$ makes an angle $\theta$ with the field, then
$$
V_B-V_A=-E\,d\cos\theta,
$$
where $d$ is the magnitude of the displacement. Potential decreases in the direction of the field and remains constant when the displacement is perpendicular to the field.

:::dimostrazione
The force on the test charge is $q\vec E$. Its work along displacement $\vec d$ is $q\vec E\cdot\vec d=qEd\cos\theta$. Equating this to $-q(V_B-V_A)$ and dividing by $q\ne0$ gives the formula. The projection of the displacement onto the field is sufficient because the perpendicular component gives a zero dot product.
:::
::::

:::definizione{#equipotenziali titolo="Surfaces of constant potential"}
An **equipotential surface** contains points at the same potential. Between two such points the potential difference is zero, so electric work is zero along any path. Where the field is nonzero, it is perpendicular to the surface. If it had a tangent component, it would do work even during a small displacement along the surface.

For a point source the equipotentials are concentric spheres. Between two ideal parallel plates they are planes parallel to the plates. A conductor in electrostatic equilibrium is equipotential throughout its material and on its surface because the field inside the conductor is zero. The conductor's potential can have any value relative to the chosen reference.
:::

:::esempio{titolo="Oblique displacement between plates"}
Two plates are $4.0\,\mathrm{cm}$ apart and their potentials are $120\,\mathrm{V}$ and $0\,\mathrm{V}$. Away from the edges, $E=\dfrac{120\,\mathrm{V}}{0.040\,\mathrm{m}}=3000\,\mathrm{V/m}$. A point halfway between the plates has $V=60\,\mathrm{V}$. All points on the same plane parallel to the plates have that potential. The work from $A$ to $B$ therefore depends on the horizontal displacement, equal to half the distance between the plates.

::grafico{linee="1,1 1,5;3,1 3,5;5,1 5,5" vettori="1.25,2,2.75,2,E;3.25,2,4.75,2,E" punti="1,3.15,pieno,A;3,4.1,pieno,B" segmenti="1,3.15,3,4.1" etichette="1,5.35,120 V;3,5.35,60 V;5,5.35,0 V" xmin=0 xmax=6 ymin=0 ymax=6 assi=0 titolo="The field points toward the plate at lower potential. The dashed line indicates the displacement from A to B."}
:::

## Acceleration through a voltage

:::teorema{#accelerazione-tensione titolo="Kinetic energy gained"}
If only the electric force acts, $K_f-K_i=q(V_i-V_f)$. If the particle starts at rest,
$$
K_f=q(V_i-V_f)=\frac12mv^2.
$$
To gain kinetic energy, a positive charge moves toward lower potential. An electron, which has $q=-e$, increases its kinetic energy when it moves toward higher potential. The velocity formula is classical and applies when $v$ is much less than the speed of light.

The **electronvolt** is the energy acquired by a particle with charge magnitude $e$ when accelerated through a potential difference of magnitude $1\,\mathrm V$. It equals $1\,\mathrm{eV}\simeq1.60\cdot10^{-19}\,\mathrm{J}$. An electron accelerated through $100\,\mathrm{V}$ gains $100\,\mathrm{eV}$, or $1.60\cdot10^{-17}\,\mathrm{J}$. With $m_e=9.11\cdot10^{-31}\,\mathrm{kg}$, its classical speed is $\sqrt{\dfrac{2K_f}{m_e}}\simeq5.93\cdot10^6\,\mathrm{m/s}$.
:::

## Capacitance

:::definizione{#capacita titolo="Capacitor and capacitance"}
A **capacitor** consists of two conductors separated by an insulator, with opposite charges $+Q$ and $-Q$. Here $Q>0$ is the magnitude of the charge on one plate and $\Delta V=V_+-V_->0$ is the voltage between the plates. Capacitance is
$$
C=\frac{Q}{\Delta V},
$$
and is measured in farads, with $1\,\mathrm{F}=1\,\mathrm{C/V}$. A $2.0\,\mathrm{\mu F}$ capacitor at $12\,\mathrm{V}$ has charges $+24\,\mathrm{\mu C}$ and $-24\,\mathrm{\mu C}$. The net charge of the two plates is zero, while the definition uses the magnitude of the charge on just one plate.

In an ideal parallel-plate capacitor of area $A$ and separation $d$, filled with a homogeneous linear dielectric of permittivity $\varepsilon=\varepsilon_r\varepsilon_0$, the internal field away from the edges is $E=\dfrac{Q}{\varepsilon A}$. Since $\Delta V=Ed$, it follows that
$$
C=\varepsilon\frac Ad.
$$
A larger area allows more charge to be stored at the same voltage. A larger separation requires a higher voltage to maintain the same field and charge. In vacuum, with $A=0.010\,\mathrm{m^2}$ and $d=1.0\,\mathrm{mm}$, the capacitance is $88.5\,\mathrm{pF}$.
:::

## Capacitors in parallel and in series

::::teorema{#associazioni titolo="Equivalent capacitance"}
Two capacitors connected to the same nodes are in **parallel**. They have the same voltage and the charges on the plates connected to one node add. Two capacitors connected in **series** share an intermediate node. If that node is isolated from the other branches and initially neutral, its two plates carry charges equal in magnitude and opposite in sign. Thus voltages add in series and charges add in parallel. For two capacitors this gives
$$
C_{\mathrm{eq,par}}=C_1+C_2,\qquad
\frac1{C_{\mathrm{eq,ser}}}=\frac1{C_1}+\frac1{C_2}.
$$

:::dimostrazione
In parallel, $Q_{\mathrm{tot}}=C_1\Delta V+C_2\Delta V$, so the ratio to the common voltage is $C_1+C_2$. In series, $Q$ is the common charge magnitude and $\Delta V_{\mathrm{tot}}=\dfrac Q{C_1}+\dfrac Q{C_2}$. Dividing by $Q$ gives the reciprocal of $C_{\mathrm{eq,ser}}$. In a network, groups that meet the node criteria can be reduced to a single capacitor.
:::
::::

:::esempio{titolo="How a 10-volt potential difference divides"}
Two capacitors of $2$ and $3\,\mathrm{\mu F}$ connected in series have an equivalent capacitance of $1.2\,\mathrm{\mu F}$. At $10\,\mathrm V$, the series charge is $12\,\mathrm{\mu C}$, and the voltages are $\dfrac{12}{2}\,\mathrm V=6\,\mathrm V$ and $\dfrac{12}{3}\,\mathrm V=4\,\mathrm V$. For the same charge, the drop is greater across the smaller capacitance. If the same capacitors are connected in parallel, each has the source voltage and their charges are $20$ and $30\,\mathrm{\mu C}$, respectively. The equivalent capacitance is then $5\,\mathrm{\mu F}$.
:::

## Stored energy

:::teorema{#energia-condensatore titolo="Energy of the electric field"}
As an ideal capacitor is charged, the voltage grows as $\Delta V=\dfrac QC$. For a small additional charge $dQ$, transferred quasistatically, the work of charging is $\Delta V\,dQ$. The final energy is the area of the triangle under the straight line in the voltage-charge graph and equals
$$
U_C=\frac12Q\Delta V=\frac12C(\Delta V)^2=\frac{Q^2}{2C}.
$$

::grafico{f="0.5*x" area="0.5*x;0;0;24" punti="24,12,pieno,A" xmin=0 xmax=30 ymin=0 ymax=16 nomi="Q,ΔV" legenda="C=2\,\mathrm{\mu F}" titolo="Charge in microcoulombs and voltage in volts. The area of the triangle is $144\,\mathrm{\mu J}$."}

The factor $\dfrac12$ appears because the voltage starts at zero during charging and rises to its final value. For a parallel-plate capacitor in vacuum, substituting $C=\dfrac{\varepsilon_0 A}{d}$ and $\Delta V=Ed$ gives $U_C=\dfrac12\varepsilon_0E^2Ad$. Dividing by the volume $Ad$ gives the energy density $u_E=\dfrac12\varepsilon_0E^2$ in the region between the plates, where the field is uniform.
:::

## Inserting a dielectric

:::osservazione{#dielettrico titolo="Isolated capacitor or capacitor connected to a source"}
If the gap initially contains a vacuum and the geometry stays fixed, filling it with a homogeneous linear dielectric multiplies the capacitance by $\varepsilon_r$. If the capacitor is **isolated**, its charge stays constant, so voltage and energy decrease as $\dfrac1C$. If it remains connected to an **ideal voltage source**, the voltage stays constant, so charge and stored energy grow in proportion to $C$.
:::

:::esempio{titolo="The same dielectric in two circuits"}
A $2\,\mathrm{\mu F}$ capacitor is initially at $12\,\mathrm V$, so it has $Q=24\,\mathrm{\mu C}$ and $U_C=144\,\mathrm{\mu J}$. A dielectric with $\varepsilon_r=3$ raises the capacitance to $6\,\mathrm{\mu F}$.

- If the capacitor is disconnected before insertion, $Q=24\,\mathrm{\mu C}$. The voltage drops to $4\,\mathrm V$ and the energy falls to $\dfrac12\cdot24\cdot4\,\mathrm{\mu J}=48\,\mathrm{\mu J}$. The difference of $96\,\mathrm{\mu J}$ can provide mechanical work or be dissipated.
- If the source remains connected, $\Delta V=12\,\mathrm V$. The charge increases to $72\,\mathrm{\mu C}$ and the energy rises to $432\,\mathrm{\mu J}$. The source moves $48\,\mathrm{\mu C}$ of charge through $12\,\mathrm V$, supplying $576\,\mathrm{\mu J}$. Of this, $288\,\mathrm{\mu J}$ increases the energy of the capacitor. The remaining $288\,\mathrm{\mu J}$ can be transferred as mechanical work or dissipated, depending on how the dielectric is inserted.
:::
