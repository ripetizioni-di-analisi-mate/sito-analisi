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

:::esempio{titolo="Energy of three charges"}
Three charges $+2.0\,\mathrm{nC}$, $-2.0\,\mathrm{nC}$, and $+2.0\,\mathrm{nC}$ occupy the vertices of an equilateral triangle of side $0.10\,\mathrm m$. The energy of the system is the sum of the energies of the three pairs, all at distance $r=0.10\,\mathrm m$:
$$
U=k_e\frac{q^2}{r}\,(-1+1-1)\simeq-3.60\cdot10^{-7}\,\mathrm J.
$$
This value is the work an external agent does to bring the three charges slowly from infinity to the vertices. It is negative because the two pairs of opposite sign weigh more than the pair of like sign.
:::

:::esempio{titolo="Energy as a function of distance"}
With $k_e\simeq9\cdot10^9\,\mathrm{N\,m^2/C^2}$, two charges of magnitude $4\,\mathrm{nC}$ and $2\,\mathrm{nC}$ have $|U|=\dfrac{k_e|Qq|}{r}=\dfrac{72\,\mathrm{nJ\,m}}{r}$, that is, $720\,\mathrm{nJ}$ at $10\,\mathrm{cm}$. For $Qq>0$ (like charges) $U$ is positive and decreases toward zero as $r$ grows. For $Qq<0$ (opposite charges) $U$ is negative and increases toward zero.

::grafico{f="7200/x;-7200/x" xmin=0 xmax=60 ymin=-1000 ymax=1000 punti="10,720,pieno,A;10,-720,pieno,B" nomi="r,U" legenda="Qq>0;Qq<0" titolo="Distance in centimeters and energy in nanojoules. Points A and B are at $r=10\,\mathrm{cm}$."}
:::

:::attenzione
The sign of $U$ does not coincide with the sign of the electric work. Two charges $+4\,\mathrm{nC}$ and $-2\,\mathrm{nC}$ approach each other from $0.20\,\mathrm m$ to $0.10\,\mathrm m$. The energy goes from $-360\,\mathrm{nJ}$ to $-720\,\mathrm{nJ}$ and stays negative, while the electric work $W=U_i-U_f=+360\,\mathrm{nJ}$ is positive, because the attractive force has the same direction as the displacement.
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
The potentials due to several sources **add algebraically**, while the fields add as vectors. The charges are $+2.0\,\mathrm{nC}$ and $-2.0\,\mathrm{nC}$ at a distance of $0.20\,\mathrm m$. The midpoint $P$ is $0.10\,\mathrm m$ from each. Each charge gives a field of magnitude $k_e\dfrac{Q}{r^2}\simeq1.80\cdot10^3\,\mathrm{N/C}$ and the two fields have the same direction, so $E_P\simeq3.60\cdot10^3\,\mathrm{N/C}$. The potential is $k_e\dfrac{Q}{r}-k_e\dfrac{Q}{r}=0$, even though the field is not zero. A test charge $+1.0\,\mathrm{nC}$ at $P$ experiences a force of $3.6\,\mathrm{\mu N}$ and has zero potential energy.

::grafico{assi=0 uguale=1 segmenti="1,2,5,2" vettori="3,2,4.4,2,E" punti="1,2,pieno,+Q;5,2,pieno,−Q;3,2,pieno,P" xmin=0 xmax=6 ymin=0.5 ymax=3.5 titolo="At the midpoint $P$ the field points toward the negative charge and the potential is zero."}
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

:::osservazione{titolo="The field as a variation of the potential"}
For a displacement along the field the formula gives $E=\dfrac{|\Delta V|}{d}$, so the field is also measured in $\mathrm{V/m}$ and $1\,\mathrm{V/m}=1\,\mathrm{N/C}$, since $\dfrac{\mathrm V}{\mathrm m}=\dfrac{\mathrm J}{\mathrm C\,\mathrm m}=\dfrac{\mathrm N}{\mathrm C}$. In a uniform field the potential is a linear function of the position along the field, with slope $-E$.
:::

:::esempio{titolo="Potential between two plates as a function of position"}
Two plates are $5.0\,\mathrm{cm}$ apart and have potentials $100\,\mathrm V$ and $0\,\mathrm V$. The field is $E=\dfrac{100\,\mathrm V}{0.050\,\mathrm m}=2000\,\mathrm{V/m}$. At distance $x$ from the first plate the potential is $V(x)=100\,\mathrm V-\left(20\,\mathrm{V/cm}\right)x$. At $x=3.0\,\mathrm{cm}$ we have $V=40\,\mathrm V$.

::grafico{f="100-20*x" xmin=0 xmax=5 ymin=0 ymax=120 punti="3,40,pieno,P" nomi="x,V" titolo="Distance from the first plate in centimeters and potential in volts. The slope is $-20\,\mathrm{V/cm}=-2000\,\mathrm{V/m}$."}
:::

:::attenzione
The theorem involves the projection of the displacement onto the field, not the distance between the points. In a field of $600\,\mathrm{V/m}$, a displacement of $3.0\,\mathrm{cm}$ along the field and $4.0\,\mathrm{cm}$ perpendicular to it leaves the two points $5.0\,\mathrm{cm}$ apart. The potential difference is $-600\cdot0.030\,\mathrm V=-18\,\mathrm V$. Using the $5.0\,\mathrm{cm}$ would give $-30\,\mathrm V$.
:::

:::definizione{#equipotenziali titolo="Surfaces of constant potential"}
An **equipotential surface** contains points at the same potential. Between two such points the potential difference is zero, so electric work is zero along any path. Where the field is nonzero, it is perpendicular to the surface. If it had a tangent component, it would do work even during a small displacement along the surface.

For a point source the equipotentials are concentric spheres. Between two ideal parallel plates they are planes parallel to the plates. A conductor in electrostatic equilibrium is equipotential throughout its material and on its surface because the field inside the conductor is zero. The conductor's potential can have any value relative to the chosen reference.
:::

:::esempio{titolo="Equipotentials of a point charge"}
Let $Q=+1.0\,\mathrm{nC}$, with $k_e\simeq9\cdot10^9\,\mathrm{N\,m^2/C^2}$. The surfaces at $90$, $60$, and $30\,\mathrm V$ are spheres of radius $10$, $15$, and $30\,\mathrm{cm}$, because $r=\dfrac{k_eQ}{V}$. Between successive surfaces the potential difference is the same, $30\,\mathrm V$, while the distances are $5.0\,\mathrm{cm}$ and $15\,\mathrm{cm}$. The average field in the two layers is therefore $\dfrac{30\,\mathrm V}{0.050\,\mathrm m}=600\,\mathrm{V/m}$ and $\dfrac{30\,\mathrm V}{0.15\,\mathrm m}=200\,\mathrm{V/m}$. The field is therefore stronger where the equipotentials are closer together.

::grafico{assi=0 uguale=1 curve="10*cos(t),10*sin(t),0,6.29;15*cos(t),15*sin(t),0,6.29;30*cos(t),30*sin(t),0,6.29" vettori="10,0,30,0,E" punti="0,0,pieno,+Q" etichette="0,11.5,90 V;0,16.5,60 V;0,31.5,30 V" xmin=-34 xmax=34 ymin=-34 ymax=34 titolo="Cross section of the equipotentials of $+1.0\,\mathrm{nC}$. Lengths are in centimeters and the field is radial, pointing outward."}
:::

:::esempio{titolo="Oblique displacement between plates"}
Two plates are $4.0\,\mathrm{cm}$ apart and their potentials are $120\,\mathrm{V}$ and $0\,\mathrm{V}$. Away from the edges, $E=\dfrac{120\,\mathrm{V}}{0.040\,\mathrm{m}}=3000\,\mathrm{V/m}$. A point halfway between the plates has $V=60\,\mathrm{V}$. All points on the same plane parallel to the plates have that potential. From $A$ to $B$ only the displacement perpendicular to the plates matters, equal to half the distance between the plates, so $V_B-V_A=-60\,\mathrm V$ whatever the displacement parallel to the plates.

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

:::esempio{titolo="Proton accelerated through 2.0 kV"}
A proton starts from rest and crosses a potential difference of $2.0\,\mathrm{kV}$ in the direction in which the electric force does positive work. Its kinetic energy is $2000\,\mathrm{eV}=3.20\cdot10^{-16}\,\mathrm J$. With $m_p=1.67\cdot10^{-27}\,\mathrm{kg}$ the speed is
$$
v=\sqrt{\frac{2K_f}{m_p}}\simeq6.19\cdot10^5\,\mathrm{m/s}.
$$
With the same voltage an electron would reach a speed about $43$ times greater, because at equal energy the speed is inversely proportional to the square root of the mass.
:::

:::esempio{titolo="Electron between two plates"}
An electron starts from the plate at $0\,\mathrm V$ and reaches the one at $100\,\mathrm V$. The field points toward the lower potential, that is, to the left in the figure. The electron has negative charge, so the force $\vec F=-e\vec E$ points to the right and its work is positive. The final kinetic energy is $100\,\mathrm{eV}$.

::grafico{assi=0 uguale=1 linee="1,0.8 1,4.2;5,0.8 5,4.2" vettori="4.6,3.5,1.4,3.5,E;2.2,2.2,3.8,2.2,F" punti="2.2,2.2,pieno,e⁻" etichette="1,4.6,0 V;5,4.6,100 V" xmin=0 xmax=6 ymin=0 ymax=5.2 titolo="The field $\vec E$ points toward the lower potential, the force $\vec F$ on the electron in the opposite direction."}
:::

:::attenzione
The classical formula requires $v\ll c$. An electron accelerated through $100\,\mathrm{kV}$ has $K_f=1.60\cdot10^{-14}\,\mathrm J$ and the formula would give $v\simeq1.87\cdot10^8\,\mathrm{m/s}$, that is, $62\%$ of the speed of light. At this speed the hypothesis is not satisfied and the classical result is not reliable.
:::

## Capacitance

:::definizione{#capacita titolo="Capacitor and capacitance"}
A **capacitor** consists of two conductors separated by an insulator, with opposite charges $+Q$ and $-Q$. Here $Q>0$ is the magnitude of the charge on one plate and $\Delta V=V_+-V_->0$ is the voltage between the plates. Capacitance is
$$
C=\frac{Q}{\Delta V},
$$
and is measured in farads, with $1\,\mathrm{F}=1\,\mathrm{C/V}$. A $2.0\,\mathrm{\mu F}$ capacitor at $12\,\mathrm{V}$ has charges $+24\,\mathrm{\mu C}$ and $-24\,\mathrm{\mu C}$. The net charge of the two plates is zero, while the definition uses the magnitude of the charge on just one plate.
:::

:::osservazione{titolo="Capacitance depends on geometry"}
Capacitance is a property of the capacitor. It depends on shape, size, separation, and dielectric, and not on the charge. A $2.0\,\mathrm{\mu F}$ capacitor with $Q=24\,\mathrm{\mu C}$ has $\Delta V=12\,\mathrm V$. With $Q=48\,\mathrm{\mu C}$ it has $\Delta V=24\,\mathrm V$ and the ratio $\dfrac{Q}{\Delta V}$ is still $2.0\,\mathrm{\mu F}$.
:::

:::richiamo{titolo="Field between opposite plates"}
Hypothesis: two infinite parallel planes in vacuum have surface charge densities $+\sigma_q$ and $-\sigma_q$. Thesis: in the gap the field is uniform, directed from the positive plane to the negative one, and its magnitude is $E=\dfrac{\sigma_q}{\varepsilon_0}$.
:::

::::teorema{#capacita-piano titolo="Capacitance of the parallel-plate capacitor in vacuum"}
An ideal parallel-plate capacitor has plates of area $A$ at distance $d$, much smaller than their dimensions, with vacuum between them. Then
$$
C=\varepsilon_0\frac{A}{d}.
$$
With a homogeneous linear dielectric of permittivity $\varepsilon=\varepsilon_r\varepsilon_0$ in place of vacuum, $\varepsilon_0$ becomes $\varepsilon$. With $A=0.010\,\mathrm{m^2}$ and $d=1.0\,\mathrm{mm}$ in vacuum the capacitance is $88.5\,\mathrm{pF}$. The result makes it possible to design an assigned capacitance. For $C=1.0\,\mathrm F$ with $d=1.0\,\mathrm{mm}$ we would need $A=\dfrac{Cd}{\varepsilon_0}\simeq1.13\cdot10^8\,\mathrm{m^2}$, a square about $10.6\,\mathrm{km}$ on a side. For this reason ordinary capacitors have capacitances of microfarads, nanofarads, or picofarads.

::grafico{assi=0 uguale=1 poligoni="1,3.5 5,3.5 5,3.8 1,3.8;1,0.2 5,0.2 5,0.5 1,0.5" vettori="2,3.4,2,0.6,E;3,3.4,3,0.6,E;4,3.4,4,0.6,E" segmenti="5.4,0.5,5.9,0.5;5.4,3.5,5.9,3.5;5.65,0.5,5.65,3.5" etichette="0.3,3.65,+Q;0.3,0.35,−Q;3,4.3,A;6.2,2,d" unicolore=1 xmin=0 xmax=6.8 ymin=0 ymax=4.8 titolo="Plates of area $A$ at distance $d$. Between them the field is uniform and goes from the positive plate to the negative one."}

:::dimostrazione
On a plate of charge $Q$ and area $A$ the surface density is $\sigma_q=\dfrac{Q}{A}$. For the field between opposite plates, $E=\dfrac{\sigma_q}{\varepsilon_0}=\dfrac{Q}{\varepsilon_0A}$. The field is uniform and parallel to the displacement from the positive plate to the negative one, so the potential difference in a uniform field gives $\Delta V=Ed=\dfrac{Qd}{\varepsilon_0A}$. Dividing $Q$ by $\Delta V$ gives $C=\dfrac{Q}{\Delta V}=\varepsilon_0\dfrac{A}{d}$, and the factor $Q$ cancels.
:::
::::

## Capacitors in parallel and in series

::::teorema{#associazioni titolo="Equivalent capacitance"}
Two capacitors connected to the same nodes are in **parallel**. They have the same voltage and the charges on the plates connected to one node add. Two capacitors connected in **series** share an intermediate node. If that node is isolated from the other branches and initially neutral, its two plates carry charges equal in magnitude and opposite in sign. Thus voltages add in series and charges add in parallel. For two capacitors this gives
$$
C_{\mathrm{eq,par}}=C_1+C_2,\qquad
\frac1{C_{\mathrm{eq,ser}}}=\frac1{C_1}+\frac1{C_2}.
$$

:::dimostrazione
In parallel, $Q_{\mathrm{tot}}=C_1\Delta V+C_2\Delta V$, so the ratio to the common voltage is $C_1+C_2$. In series, $Q$ is the common charge magnitude and $\Delta V_{\mathrm{tot}}=\dfrac Q{C_1}+\dfrac Q{C_2}$. Dividing by $Q$ gives the reciprocal of $C_{\mathrm{eq,ser}}$.
:::
::::

:::esempio{titolo="How a 10-volt potential difference divides"}
Two capacitors of $2$ and $3\,\mathrm{\mu F}$ connected in series have an equivalent capacitance of $1.2\,\mathrm{\mu F}$. At $10\,\mathrm V$, the series charge is $12\,\mathrm{\mu C}$, and the voltages are $\dfrac{12}{2}\,\mathrm V=6\,\mathrm V$ and $\dfrac{12}{3}\,\mathrm V=4\,\mathrm V$. For the same charge, the drop is greater across the smaller capacitance. If the same capacitors are connected in parallel, each has the source voltage and their charges are $20$ and $30\,\mathrm{\mu C}$, respectively. The equivalent capacitance is then $5\,\mathrm{\mu F}$.

::schema{riferimento=0 linee="0,1.48 0,3 2.65,3;3.05,3 4.3,3;4.7,3 7,3 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;2.65,2.5 2.65,3.5;3.05,2.5 3.05,3.5;4.3,2.5 4.3,3.5;4.7,2.5 4.7,3.5" etichette="0.9,1.32,10 V;2.85,3.9,2 μF;4.5,3.9,3 μF" titolo="The two capacitors in series are connected to a $10\,\mathrm V$ source"}
:::

:::attenzione
In series the voltage does not divide into equal parts. Two capacitors of $2\,\mathrm{\mu F}$ and $8\,\mathrm{\mu F}$ connected to $10\,\mathrm V$ have $C_{\mathrm{eq}}=1.6\,\mathrm{\mu F}$ and $Q=16\,\mathrm{\mu C}$. The voltages are $\dfrac{16}{2}\,\mathrm V=8\,\mathrm V$ and $\dfrac{16}{8}\,\mathrm V=2\,\mathrm V$, not $5\,\mathrm V$ each. In general $\Delta V_1=\Delta V\,\dfrac{C_2}{C_1+C_2}$.
:::

## Stored energy

:::teorema{#energia-condensatore titolo="Energy of the electric field"}
As an ideal capacitor is charged, the voltage grows as $\Delta V=\dfrac QC$. For a small additional charge $\Delta Q$, transferred quasistatically, the work of charging is $\Delta V\,\Delta Q$. The final energy is the area of the triangle under the straight line in the voltage-charge graph and equals
$$
U_C=\frac12Q\Delta V=\frac12C(\Delta V)^2=\frac{Q^2}{2C}.
$$

::grafico{f="0.5*x" area="0.5*x;0;0;24" punti="24,12,pieno,A" xmin=0 xmax=30 ymin=0 ymax=16 nomi="Q,ΔV" legenda="C=2\,\mathrm{\mu F}" titolo="Charge in microcoulombs and voltage in volts. The area of the triangle is $144\,\mathrm{\mu J}$."}

The factor $\dfrac12$ appears because the voltage starts at zero during charging and rises to its final value. For a parallel-plate capacitor in vacuum, substituting $C=\dfrac{\varepsilon_0 A}{d}$ and $\Delta V=Ed$ gives $U_C=\dfrac12\varepsilon_0E^2Ad$. Dividing by the volume $Ad$ gives the energy density $u_E=\dfrac12\varepsilon_0E^2$ in the region between the plates, where the field is uniform.
:::

:::esempio{titolo="Camera flash"}
A $100\,\mathrm{\mu F}$ capacitor is charged to $300\,\mathrm V$. The stored energy is
$$
U_C=\frac12\cdot100\cdot10^{-6}\cdot300^2\,\mathrm J=4.5\,\mathrm J.
$$
If it discharges in $1.0\,\mathrm{ms}$, the average power is $\dfrac{4.5\,\mathrm J}{1.0\cdot10^{-3}\,\mathrm s}=4.5\,\mathrm{kW}$. The capacitor accumulates the energy slowly and releases it in a short time, and for this reason the power is much greater than that of the source that charges it.
:::

:::osservazione{titolo="Energy density: two field values"}
With $\varepsilon_0=8.85\cdot10^{-12}\,\mathrm{F/m}$, a field of $3.0\cdot10^3\,\mathrm{V/m}$ has $u_E=\dfrac12\varepsilon_0E^2\simeq4.0\cdot10^{-5}\,\mathrm{J/m^3}$. In air a discharge starts at around $3\cdot10^6\,\mathrm{V/m}$, and at this field $u_E\simeq40\,\mathrm{J/m^3}$. The field is a thousand times greater and the energy density a million times greater, because $u_E$ depends on the square of $E$.
:::

## Inserting a dielectric

:::osservazione{#dielettrico titolo="Isolated capacitor or capacitor connected to a source"}
If the gap initially contains a vacuum and the geometry stays fixed, filling it with a homogeneous linear dielectric multiplies the capacitance by $\varepsilon_r$. If the capacitor is **isolated**, its charge stays constant, so voltage and energy decrease as $\dfrac1C$. If it remains connected to an **ideal voltage source**, the voltage stays constant, so charge and stored energy grow in proportion to $C$.
:::

:::osservazione{titolo="Why the dielectric reduces the field"}
Between the plates, the field polarizes the molecules of the dielectric. On the face near the positive plate a negative polarization charge appears, and on the face near the negative plate a positive one. These charges generate a field opposite to that of the plates. At constant charge $Q$ the internal field becomes $E=\dfrac{E_0}{\varepsilon_r}$, where $E_0$ is the field in vacuum. With $d$ fixed, $\Delta V=Ed$ is also divided by $\varepsilon_r$, in agreement with $C'=\varepsilon_rC$. For $\varepsilon_r=3$ the voltage goes from $12\,\mathrm V$ to $4\,\mathrm V$.

::grafico{assi=0 uguale=1 poligoni="1,0.5 5,0.5 5,3.5 1,3.5" linee="0.5,3.5 5.5,3.5;0.5,0.5 5.5,0.5" etichette="0.2,4,+Q;0.2,0,−Q;1.6,3.1,− − − −;1.6,0.75,+ + + +;3,2,E = E₀/εᵣ" xmin=0 xmax=6 ymin=-0.5 ymax=4.5 titolo="The dielectric between the plates carries polarization charges on its faces. The field decreases by a factor $\varepsilon_r$."}
:::

:::esempio{titolo="The same dielectric in two circuits"}
A $2\,\mathrm{\mu F}$ capacitor is initially at $12\,\mathrm V$, so it has $Q=24\,\mathrm{\mu C}$ and $U_C=144\,\mathrm{\mu J}$. A dielectric with $\varepsilon_r=3$ raises the capacitance to $6\,\mathrm{\mu F}$.

- If the capacitor is disconnected before insertion, $Q=24\,\mathrm{\mu C}$. The voltage drops to $4\,\mathrm V$ and the energy falls to $\dfrac12\cdot24\cdot4\,\mathrm{\mu J}=48\,\mathrm{\mu J}$. The difference of $96\,\mathrm{\mu J}$ can provide mechanical work or be dissipated.
- If the source remains connected, $\Delta V=12\,\mathrm V$. The charge increases to $72\,\mathrm{\mu C}$ and the energy rises to $432\,\mathrm{\mu J}$. The source moves $48\,\mathrm{\mu C}$ of charge through $12\,\mathrm V$, supplying $576\,\mathrm{\mu J}$. Of this, $288\,\mathrm{\mu J}$ increases the energy of the capacitor. The remaining $288\,\mathrm{\mu J}$ can be transferred as mechanical work or dissipated, depending on how the dielectric is inserted.
:::

## Spherical conductors

:::richiamo{titolo="Field of a charged conducting sphere"}
Hypothesis: a conducting sphere of radius $R$ is in electrostatic equilibrium and carries the total charge $Q$ on its surface. Thesis: the field is zero for $r<R$ and equals $E=k_e\dfrac{Q}{r^2}$ for $r>R$, as for a point charge $Q$ at the center.
:::

::::teorema{#sfera-conduttrice titolo="Potential and capacitance of a conducting sphere"}
For an isolated conducting sphere of radius $R$ and charge $Q$, with zero potential at infinity,
$$
V=\begin{cases}k_e\dfrac{Q}{r} & r\ge R,\\[8pt] k_e\dfrac{Q}{R} & r\le R.\end{cases}
$$
The sphere therefore has capacitance $C=\dfrac{Q}{V}=4\pi\varepsilon_0R$. The capacitance of an isolated conductor is measured relative to the reference at infinity.

::grafico{f="x<10?899:8990/x" xmin=0 xmax=60 ymin=0 ymax=1000 punti="10,899,pieno,R" nomi="r,V" titolo="Distance from the center in centimeters and potential in volts for $R=10\,\mathrm{cm}$ and $Q=10\,\mathrm{nC}$. Inside, the potential is constant."}

:::dimostrazione
Outside the sphere the field is the same as that of a point charge $Q$ at the center. Therefore the potential differences between two external points are the same and, with zero at infinity, the potential is $k_e\dfrac{Q}{r}$. On the surface it equals $k_e\dfrac{Q}{R}$. Inside the sphere the field is zero, so the potential difference between any two interior points is zero and the potential is constant, equal to the value on the surface. Finally, since $k_e=\dfrac{1}{4\pi\varepsilon_0}$, we obtain $C=\dfrac{Q}{k_eQ/R}=4\pi\varepsilon_0R$.
:::
::::

:::esempio{titolo="The Earth as a spherical conductor"}
With $R=6.37\cdot10^6\,\mathrm m$ the capacitance is $C=\dfrac{R}{k_e}\simeq7.09\cdot10^{-4}\,\mathrm F=709\,\mathrm{\mu F}$. A conducting sphere of radius $10\,\mathrm{cm}$ with $Q=10\,\mathrm{nC}$ has $V=\dfrac{8.99\cdot10^9\cdot10\cdot10^{-9}}{0.10}\,\mathrm V=899\,\mathrm V$, and its capacitance is $11.1\,\mathrm{pF}$.
:::

::::teorema{#sfere-collegate titolo="Connected conducting spheres"}
Two conducting spheres of radii $R_1$ and $R_2$, very far from each other, are connected by a thin conducting wire. They have the same potential, the charges are in the ratio $\dfrac{Q_1}{Q_2}=\dfrac{R_1}{R_2}$, and the surface densities are in the ratio $\dfrac{\sigma_1}{\sigma_2}=\dfrac{R_2}{R_1}$.

:::dimostrazione
The wire and the two spheres form a single conductor in equilibrium, so the potentials are equal, $k_e\dfrac{Q_1}{R_1}=k_e\dfrac{Q_2}{R_2}$. It follows that $\dfrac{Q_1}{Q_2}=\dfrac{R_1}{R_2}$. Since $\sigma=\dfrac{Q}{4\pi R^2}$, the ratio of the densities is
$$
\frac{\sigma_1}{\sigma_2}=\frac{Q_1}{Q_2}\cdot\frac{R_2^2}{R_1^2}=\frac{R_1}{R_2}\cdot\frac{R_2^2}{R_1^2}=\frac{R_2}{R_1}.
$$
:::
::::

:::esempio{titolo="Point effect"}
Two spheres of radius $10\,\mathrm{cm}$ and $2.0\,\mathrm{cm}$ are connected and together carry $12\,\mathrm{nC}$. The charges are in the ratio $5$, so $Q_1=10\,\mathrm{nC}$ and $Q_2=2.0\,\mathrm{nC}$, and the common potential is $899\,\mathrm V$. The fields just outside the surfaces, $E=k_e\dfrac{Q}{R^2}$, are $8.99\cdot10^3\,\mathrm{V/m}$ and $4.5\cdot10^4\,\mathrm{V/m}$. Where the radius of curvature is smaller, the charge density and the field are greater, and for this reason a discharge starts more easily from a point.
:::

::::teorema{#condensatore-sferico titolo="Spherical capacitor"}
A conducting sphere of radius $R_1$ with charge $+Q$ is surrounded by a concentric conducting spherical shell of radius $R_2>R_1$, with total charge $-Q$. The voltage and the capacitance are
$$
\Delta V=k_eQ\left(\frac{1}{R_1}-\frac{1}{R_2}\right),\qquad
C=4\pi\varepsilon_0\frac{R_1R_2}{R_2-R_1}.
$$

:::dimostrazione
For $R_1\le r\le R_2$ the potential is the sum of two contributions. The inner sphere gives $k_e\dfrac{Q}{r}$. The shell, with charge $-Q$ distributed on a spherical surface of radius $R_2$, gives a constant potential inside itself, equal to the value on the surface, that is, $-k_e\dfrac{Q}{R_2}$. Therefore $V(r)=k_eQ\left(\dfrac{1}{r}-\dfrac{1}{R_2}\right)$. On the outer plate $V(R_2)=0$ and on the inner one $V(R_1)=k_eQ\left(\dfrac{1}{R_1}-\dfrac{1}{R_2}\right)$, which is the voltage $\Delta V$. Dividing $Q$ by $\Delta V$ and recalling $k_e=\dfrac{1}{4\pi\varepsilon_0}$ we find $C=\dfrac{R_1R_2}{k_e(R_2-R_1)}$.
:::
::::

:::osservazione{titolo="Comparison with the parallel-plate capacitor"}
With $R_1=5.0\,\mathrm{cm}$ and $R_2=6.0\,\mathrm{cm}$ we have $C\simeq33.4\,\mathrm{pF}$. If the space between the plates is reduced to $d=1.0\,\mathrm{mm}$, with $R_1=5.0\,\mathrm{cm}$ and $R_2=5.1\,\mathrm{cm}$, the formula gives $283.6\,\mathrm{pF}$. The parallel-plate capacitor with $A=4\pi R_1^2$ and the same distance gives $\varepsilon_0\dfrac{A}{d}\simeq278.0\,\mathrm{pF}$, a difference of $2.0\%$. When $d\ll R_1$ the two formulas coincide, because $R_1R_2\simeq R_1^2$.
:::

## Connecting charged capacitors

::::teorema{#condensatori-collegati titolo="Final voltage and energy loss"}
Two capacitors of capacitance $C_1$ and $C_2$, with initial voltages $V_1$ and $V_2$, are disconnected from their sources and connected to each other, with the positive plates joined together and the negative plates joined together. The common final voltage is
$$
V=\frac{C_1V_1+C_2V_2}{C_1+C_2},
$$
and the stored energy decreases by
$$
\Delta U=\frac{1}{2}\,\frac{C_1C_2}{C_1+C_2}\,(V_1-V_2)^2\ge0.
$$

:::dimostrazione
The positive plates form an isolated system, so their total charge is conserved and equals $Q_1+Q_2=C_1V_1+C_2V_2$. After the connection the capacitors are in parallel with common voltage $V$, so the total charge is also $(C_1+C_2)V$. Equating gives the formula for $V$. The final energy is $U_f=\dfrac{1}{2}(C_1+C_2)V^2=\dfrac{(C_1V_1+C_2V_2)^2}{2(C_1+C_2)}$ and the initial one is $U_i=\dfrac{1}{2}C_1V_1^2+\dfrac{1}{2}C_2V_2^2$. The difference is
$$
\begin{aligned}
U_i-U_f&=\frac{(C_1+C_2)(C_1V_1^2+C_2V_2^2)-(C_1V_1+C_2V_2)^2}{2(C_1+C_2)} \\[6pt]
&=\frac{C_1C_2V_1^2+C_1C_2V_2^2-2C_1C_2V_1V_2}{2(C_1+C_2)} \\[6pt]
&=\frac{C_1C_2(V_1-V_2)^2}{2(C_1+C_2)}.
\end{aligned}
$$
The numerator is a square, so $U_i-U_f\ge0$.
:::
::::

:::esempio{titolo="A charged capacitor connected to an uncharged one"}
A $4.0\,\mathrm{\mu F}$ capacitor at $12\,\mathrm V$ is connected to an uncharged $2.0\,\mathrm{\mu F}$ one. The initial charge is $48\,\mathrm{\mu C}$, so $V=\dfrac{48}{6}\,\mathrm V=8.0\,\mathrm V$. The energy goes from $288\,\mathrm{\mu J}$ to $\dfrac{1}{2}\cdot6\cdot8^2\,\mathrm{\mu J}=192\,\mathrm{\mu J}$. A loss of $96\,\mathrm{\mu J}$ occurs, equal to $\dfrac{1}{2}\cdot\dfrac{8}{6}\cdot12^2\,\mathrm{\mu J}$. The missing energy is transformed into heat in the wires, into a possible spark, and into radiation.
:::

:::attenzione
If the plates are connected with opposite polarity, the voltage of the second capacitor enters with a negative sign. With $4.0\,\mathrm{\mu F}$ at $12\,\mathrm V$ and $2.0\,\mathrm{\mu F}$ at $6.0\,\mathrm V$ connected positive to negative, we set $V_2=-6.0\,\mathrm V$ and find $V=\dfrac{48-12}{6}\,\mathrm V=6.0\,\mathrm V$. Using $+6.0\,\mathrm V$ would add the charges $48$ and $12\,\mathrm{\mu C}$ and give $10\,\mathrm V$. In this case the energy goes from $324\,\mathrm{\mu J}$ to $108\,\mathrm{\mu J}$.
:::
