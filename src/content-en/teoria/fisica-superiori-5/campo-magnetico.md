---
titolo: Magnetic field and Lorentz force
sommario: What magnets and magnetic fields are, how to measure a field using the force on a current-carrying wire, how to use that force to derive the Lorentz force on a moving charge, why the Lorentz force does no work, and how the torque on a current loop explains the operation of an electric motor and a moving-coil ammeter.
---

## Magnets and field lines

:::definizione{#magneti-e-poli titolo="Magnets and magnetic poles"}
A **magnet** is an object that attracts iron, nickel, and cobalt. A bar magnet suspended from its center and free to rotate in a horizontal plane aligns itself along the geographic north–south direction. The end that points toward geographic north is the magnet's **north pole**. The other end is its **south pole**. Bringing two magnets close together shows that like poles repel and unlike poles attract.

The poles of a magnet cannot be separated. If a magnet is broken in half, each half has a north pole and a south pole. The same holds if the pieces are broken again. In this respect magnetic poles differ from electric charges, since a positive charge and a negative charge can be separated.
:::

:::definizione{#linee-di-campo titolo="Magnetic field and field lines"}
A **magnetic field** exists in the region around a magnet where another magnet experiences a force. At any point, the magnetic field is a vector $\vec{B}$. Its direction is the direction in which a small magnetic needle aligns, from the needle's south pole to its north pole. The magnitude of $\vec{B}$ is defined using the force on a current-carrying wire, as described in the operational definition of the magnetic field.

**Field lines** are directed curves whose tangent at each point points in the direction of $\vec{B}$. Iron filings make the lines visible because each filing acts like a tiny magnetic needle and aligns with the field. The field is stronger where the lines are closer together. Outside a magnet, the lines emerge from the north pole and enter the south pole. Inside the magnet, they continue from the south pole to the north pole. Magnetic field lines thus form **closed loops**, a property that corresponds to the fact that magnetic poles cannot be separated.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="-1,-0.25 1,-0.25 1,0.25 -1,0.25" linee="1.01,0.04 1.28,0.1 1.55,0.17 1.82,0.24 2.09,0.31 2.36,0.39 2.63,0.47 2.9,0.55 3.16,0.64 3.39,0.71;-3.39,0.71 -3.13,0.62 -2.86,0.54 -2.59,0.45 -2.32,0.37 -2.05,0.3 -1.78,0.23 -1.51,0.16 -1.24,0.1 -1.01,0.04;1.01,-0.04 1.28,-0.1 1.55,-0.17 1.82,-0.24 2.09,-0.31 2.36,-0.39 2.63,-0.47 2.9,-0.55 3.16,-0.64 3.39,-0.71;-3.39,-0.71 -3.13,-0.62 -2.86,-0.54 -2.59,-0.45 -2.32,-0.37 -2.05,-0.3 -1.78,-0.23 -1.51,-0.16 -1.24,-0.1 -1.01,-0.04;1.01,0.12 1.25,0.27 1.48,0.42 1.71,0.58 1.93,0.76 2.14,0.94 2.35,1.13 2.55,1.32 2.74,1.53 2.92,1.74 3.09,1.96 3.27,2.19;-3.27,2.19 -3.1,1.97 -2.93,1.75 -2.74,1.54 -2.55,1.33 -2.36,1.13 -2.15,0.94 -1.94,0.76 -1.72,0.59 -1.49,0.43 -1.25,0.27 -1.01,0.12;1.01,-0.12 1.25,-0.27 1.48,-0.42 1.71,-0.58 1.93,-0.76 2.14,-0.94 2.35,-1.13 2.55,-1.32 2.74,-1.53 2.92,-1.74 3.09,-1.96 3.27,-2.19;-3.27,-2.19 -3.1,-1.97 -2.93,-1.75 -2.74,-1.54 -2.55,-1.33 -2.36,-1.13 -2.15,-0.94 -1.94,-0.76 -1.72,-0.59 -1.49,-0.43 -1.25,-0.27 -1.01,-0.12;0.97,0.26 1.12,0.49 1.25,0.74 1.35,1 1.43,1.27 1.48,1.55 1.51,1.83 1.49,2.2;-1.49,2.2 -1.51,1.92 -1.49,1.64 -1.45,1.36 -1.38,1.09 -1.28,0.83 -1.16,0.57 -0.97,0.26;0.97,-0.26 1.12,-0.49 1.25,-0.74 1.35,-1 1.43,-1.27 1.48,-1.55 1.51,-1.83 1.49,-2.2;-1.49,-2.2 -1.51,-1.92 -1.49,-1.64 -1.45,-1.36 -1.38,-1.09 -1.28,-0.83 -1.16,-0.57 -0.97,-0.26;0.82,0.26 0.82,0.54 0.78,0.82 0.69,1.08 0.54,1.32 0.33,1.49 0.06,1.57 -0.22,1.54 -0.46,1.41 -0.64,1.2 -0.76,0.94 -0.82,0.67 -0.83,0.39 -0.82,0.26;0.82,-0.26 0.82,-0.54 0.78,-0.82 0.69,-1.08 0.54,-1.32 0.33,-1.49 0.06,-1.57 -0.22,-1.54 -0.46,-1.41 -0.64,-1.2 -0.76,-0.94 -0.82,-0.67 -0.83,-0.39 -0.82,-0.26;0.65,0.26 0.48,0.48 0.26,0.65 -0.01,0.71 -0.28,0.64 -0.5,0.46 -0.65,0.26;0.65,-0.26 0.48,-0.48 0.26,-0.65 -0.01,-0.71 -0.28,-0.64 -0.5,-0.46 -0.65,-0.26" vettori="2.09,0.31,2.43,0.41;-2.32,0.37,-1.98,0.28;2.25,1.03,2.5,1.27;-2.25,1.04,-1.99,0.81;1.4,1.14,1.48,1.48;-1.42,1.22,-1.32,0.89;0.06,1.57,-0.29,1.53;0.12,0.7,-0.23,0.69;2.09,-0.31,2.43,-0.41;-2.32,-0.37,-1.98,-0.28;2.25,-1.03,2.5,-1.27;-2.25,-1.04,-1.99,-0.81;1.4,-1.14,1.48,-1.48;-1.42,-1.22,-1.32,-0.89;0.06,-1.57,-0.29,-1.53;0.12,-0.7,-0.23,-0.69" etichette="0.6,-0.08,N;-0.8,-0.08,S" xmin=-3.4 xmax=3.4 ymin=-2.2 ymax=2.2 titolo="Field lines of a bar magnet. Outside the magnet, they run from the north pole $N$ to the south pole $S$ and are closer together near the poles, where the field is stronger"}

:::

:::osservazione{#campo-magnetico-terrestre titolo="Earth's magnetic field"}
Earth produces a magnetic field similar to that of a large bar magnet inside it. The north pole of a compass needle is attracted to a magnetic south pole, which is why the needle points toward geographic north. Earth's **magnetic south pole** therefore lies near its geographic North Pole. The magnetic axis is tilted by about $10^\circ$ relative to the axis of rotation, so a compass points only approximately toward geographic north.

At Earth's surface, the magnitude of the field ranges from about $2.5 \cdot 10^{-5}\,\mathrm{T}$ to $6.5 \cdot 10^{-5}\,\mathrm{T}$, where $\mathrm{T}$ is the symbol for the tesla, the unit of magnetic field. In Italy, the field is about $4.5 \cdot 10^{-5}\,\mathrm{T}$ and is not horizontal. It points northward and downward, making an angle of about $55^\circ$ with the horizontal plane. This angle is called the **magnetic inclination**. A compass aligns with the horizontal component of the field because its needle rotates only in a horizontal plane.

::grafico{assi=0 uguale=1 unicolore=1 curve="cos(t),sin(t),0,6.29" segmenti="0,-1.7,0,1.7" linee="0.78,0.64 0.99,0.65 1.19,0.62 1.37,0.54 1.52,0.42 1.63,0.27 1.69,0.1 1.7,-0.07 1.64,-0.25 1.54,-0.4 1.4,-0.52 1.22,-0.61 1.02,-0.65 0.78,-0.64;-0.78,0.64 -0.99,0.65 -1.19,0.62 -1.37,0.54 -1.52,0.42 -1.63,0.27 -1.69,0.1 -1.7,-0.07 -1.64,-0.25 -1.54,-0.4 -1.4,-0.52 -1.22,-0.61 -1.02,-0.65 -0.78,-0.64;0.63,0.79 0.9,0.91 1.19,0.98 1.51,1 1.81,0.94 2.09,0.82 2.33,0.65 2.49,0.42 2.59,0.16 2.59,-0.11 2.52,-0.38 2.36,-0.61 2.14,-0.8 1.86,-0.93 1.56,-0.99 1.25,-0.99 0.94,-0.93 0.63,-0.79;-0.63,0.79 -0.9,0.91 -1.19,0.98 -1.51,1 -1.81,0.94 -2.09,0.82 -2.33,0.65 -2.49,0.42 -2.59,0.16 -2.59,-0.11 -2.52,-0.38 -2.36,-0.61 -2.14,-0.8 -1.86,-0.93 -1.56,-0.99 -1.25,-0.99 -0.94,-0.93 -0.63,-0.79;0.52,0.86 0.83,1.1 1.21,1.29 1.63,1.42 2.09,1.46 2.54,1.41 2.96,1.26 3.32,1.02 3.59,0.7 3.76,0.33 3.8,-0.07 3.72,-0.46 3.52,-0.81 3.21,-1.11 2.83,-1.32 2.39,-1.44 1.94,-1.46 1.49,-1.39 1.07,-1.23 0.72,-1.02 0.52,-0.86;-0.52,0.86 -0.83,1.1 -1.21,1.29 -1.63,1.42 -2.09,1.46 -2.54,1.41 -2.96,1.26 -3.32,1.02 -3.59,0.7 -3.76,0.33 -3.8,-0.07 -3.72,-0.46 -3.52,-0.81 -3.21,-1.11 -2.83,-1.32 -2.39,-1.44 -1.94,-1.46 -1.49,-1.39 -1.07,-1.23 -0.72,-1.02 -0.52,-0.86" vettori="1.7,-0.3,1.7,0.3;-1.7,-0.3,-1.7,0.3;2.6,-0.3,2.6,0.3;-2.6,-0.3,-2.6,0.3;3.8,-0.3,3.8,0.3;-3.8,-0.3,-3.8,0.3" etichette="0.12,1.55,geographic north;0.12,-1.75,geographic south" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="Earth's magnetic field lines, with the magnetic axis drawn along the rotation axis. Outside Earth, the field extends from the Southern Hemisphere toward the Northern Hemisphere, where the magnetic south pole lies"}

:::

:::osservazione{#versi-perpendicolari-al-foglio titolo="Vectors perpendicular to the page"}
In a two-dimensional diagram, a symbol represents a vector perpendicular to the page. The symbol $\otimes$ denotes a vector pointing **into** the page and represents the tail of an arrow traveling away from the viewer. The symbol $\odot$ denotes a vector pointing **out of** the page and represents the tip of an approaching arrow. The same symbols indicate a current flowing into or out of the page. A uniform magnetic field directed into the page is therefore drawn as a regular grid of identical $\otimes$ symbols, since the field has the same magnitude and points in the same direction at every point.
:::

## The experiments of Oersted, Faraday, and Ampère

:::osservazione{#esperienza-oersted titolo="Oersted's experiment"}
In 1820, Oersted placed a straight wire above and parallel to a magnetic needle. When current flows in the wire, the needle turns and tends to align perpendicular to the wire. Reversing the current makes the needle turn in the opposite direction. When the current stops, the needle returns to the north–south direction. The experiment shows that **an electric current produces a magnetic field**. The field produced by currents is discussed in the chapter on sources of magnetic fields.
:::

:::osservazione{#esperienza-faraday titolo="Faraday's experiment"}
In 1821, Faraday observed the reverse effect. A current-carrying wire free to move near a magnet experiences a force. In his apparatus, the wire rotated continuously around one pole of a magnet. A wire stretched between the poles of a horseshoe magnet is pushed either outward or inward, depending on the direction of the current. The experiment shows that **a magnetic field exerts a force on a current-carrying wire**. Both the operational definition of the magnetic field and the operation of an electric motor rely on this force.
:::

:::osservazione{#esperienza-ampere titolo="Ampère's experiment"}
Also in 1820, Ampère studied two straight, parallel, current-carrying wires placed close together. The wires attract when the currents flow in the same direction and repel when the currents flow in opposite directions. If either wire carries no current, there is no force. This experiment shows that two currents interact even in the absence of magnets because each produces a magnetic field that acts on the other.

These three experiments show that magnetic phenomena are associated with moving electric charges. Ampère proposed that the field of a magnet is also produced by currents circulating within matter on a microscopic scale. The force between two parallel wires is calculated in the chapter on sources of magnetic fields, where it is used to explain the historical definition of the ampere.
:::

## Operational definition of the magnetic field

:::definizione{#campo-magnetico titolo="Operational definition of the magnetic field"}
Place a straight segment of wire of length $\ell$ carrying a current $I$ at a point in a magnetic field. Measure the force on the wire as its orientation changes. The measurements give the following results.

- There is a direction in which the force is zero. It is the direction indicated by a magnetic needle.
- When the wire is perpendicular to that direction, the magnitude of the force reaches its maximum $F_{\max}$, and $F_{\max}$ is directly proportional to both $I$ and $\ell$.

The ratio $\dfrac{F_{\max}}{I \ell}$ is therefore independent of the wire and measures the strength of the field at that point. The magnetic field $\vec{B}$ is the vector that points along the magnetic needle in the direction it indicates and has magnitude
$$
B = \frac{F_{\max}}{I \ell} .
$$
In the International System of Units, magnetic field is measured in **teslas**, $1\,\mathrm{T} = 1\,\mathrm{N/(A\cdot m)}$. A field of $1\,\mathrm{T}$ exerts a force of $1\,\mathrm{N}$ on a wire of length $1\,\mathrm{m}$ when the wire carries a current of $1\,\mathrm{A}$ and is perpendicular to the field. For example, a wire of length $20\,\mathrm{cm}$ carrying a current of $3.0\,\mathrm{A}$ perpendicular to the field experiences a force $0.36\,\mathrm{N}$. Therefore,
$$
B = \frac{0.36\,\mathrm{N}}{3.0\,\mathrm{A} \cdot 0.20\,\mathrm{m}} = 0.60\,\mathrm{T} .
$$
:::

:::esempio{titolo="Typical magnetic field strengths"}
The tesla is a large unit. Earth's field is about $5 \cdot 10^{-5}\,\mathrm{T}$, a laboratory magnet produces fields on the order of $0.1\,\mathrm{T}$ near its poles, and the magnets in magnetic resonance imaging scanners reach several teslas. A wire of length $1.0\,\mathrm{m}$ carrying a current of $10\,\mathrm{A}$ perpendicular to Earth's field therefore experiences a force
$$
F = B I \ell = 5 \cdot 10^{-5} \cdot 10 \cdot 1.0\,\mathrm{N} = 5 \cdot 10^{-4}\,\mathrm{N} ,
$$
equal to the weight of an object with a mass of about $0.05\,\mathrm{g}$. For this reason, laboratory experiments use magnets or coils that produce fields thousands of times stronger.
:::

## Force on a current-carrying wire

:::richiamo{titolo="Cross product"}
Let $\vec{a}$ and $\vec{b}$ be two vectors that make an angle $\alpha$, with $0 \leq \alpha \leq 180^\circ$. The cross product $\vec{a} \times \vec{b}$ is the vector perpendicular to both $\vec{a}$ and $\vec{b}$, with magnitude $a\,b \sin\alpha$ and direction given by the right-hand rule. Also, $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$, and the cross product is zero if the two vectors are parallel.
:::

:::teorema{#forza-su-un-filo titolo="Force on a straight wire"}
A straight wire of length $\ell$ carrying a current $I$ in a uniform magnetic field $\vec{B}$ experiences a force
$$
\vec{F} = I\,\vec{\ell} \times \vec{B} ,
\qquad
F = I \ell B \sin\alpha ,
$$
where $\vec{\ell}$ is the vector of magnitude $\ell$ pointing along the wire in the direction of the current, and $\alpha$ is the angle between the wire and the field. This experimental law extends the operational definition of the magnetic field to a wire in any orientation. The force is perpendicular to both the wire and the field. It is zero when the wire is parallel to $\vec{B}$ because $\sin 0^\circ = 0$, and it reaches its maximum, $I \ell B$, when the wire is perpendicular to $\vec{B}$.

This law gives the force on each straight segment of a circuit in a uniform field. For example, a wire of length $0.50\,\mathrm{m}$ carrying a current of $2.0\,\mathrm{A}$ at an angle of $30^\circ$ to a field of $0.20\,\mathrm{T}$ experiences a force
$$
F = 2.0 \cdot 0.50 \cdot 0.20 \cdot \sin 30^\circ\,\mathrm{N} = 0.10\,\mathrm{N} .
$$

::grafico{assi=0 uguale=1 linee="-3,0 3,0" vettori="-1.6,0.3,-0.2,0.3,I;0.6,0,0.6,1.6,F" etichette="-2.7,-1.9,⊗;-2.7,-0.9,⊗;-2.7,1.1,⊗;-2.7,2.1,⊗;-1.7,-1.9,⊗;-1.7,-0.9,⊗;-1.7,1.1,⊗;-1.7,2.1,⊗;-0.6,-1.9,⊗;-0.6,-0.9,⊗;-0.6,1.1,⊗;-0.6,2.1,⊗;0.4,-1.9,⊗;0.4,-0.9,⊗;1.4,-1.9,⊗;1.4,-0.9,⊗;1.4,1.1,⊗;1.4,2.1,⊗;2.4,-1.9,⊗;2.4,-0.9,⊗;2.4,1.1,⊗;2.4,2.1,⊗" xmin=-3.2 xmax=3.2 ymin=-2.2 ymax=2.4 titolo="Wire carrying current $I$ to the right in a uniform field directed into the page ($\otimes$). The force $\vec{F} = I\,\vec{\ell} \times \vec{B}$ is perpendicular to the wire and points upward"}

:::

:::osservazione{#regola-mano-destra titolo="Right-hand rule"}
To determine the direction of $\vec{\ell} \times \vec{B}$, open your right hand. Point your thumb in the direction of the current and your fingers in the direction of the field. The force points outward, perpendicular to your palm. In the diagram of the wire, the current flows to the right and the field points into the page. With your thumb pointing right and your fingers pointing into the page, your palm faces up, so the force points upward. Reversing either the current or the field reverses the force. Reversing both leaves the force unchanged.
:::

:::attenzione
The magnetic force on a wire is perpendicular to the field. This distinguishes it from the electric force on a positive charge, which points along the electric field. For example, a horizontal wire carrying an eastward current in a northward field experiences an upward vertical force and *no* force in the north–south direction.
:::

## Lorentz force

:::richiamo{titolo="Electric current"}
If a charge $\Delta q$ passes through a cross section of a conductor in a time interval $\Delta t$, the current is $I = \dfrac{\Delta q}{\Delta t}$. The direction of the current is the direction in which positive charges move, opposite to the motion of electrons.
:::

::::teorema{#forza-di-lorentz titolo="Lorentz force"}
A point charge $q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ experiences a force
$$
\vec{F} = q\,\vec{v} \times \vec{B} ,
\qquad
F = |q|\,v B \sin\alpha ,
$$
where $\alpha$ is the angle between $\vec{v}$ and $\vec{B}$. This force is called the **Lorentz force**. It is perpendicular to both the velocity and the field. It is zero for a charge at rest or moving parallel to $\vec{B}$. It reaches its maximum magnitude, $|q|\,vB$, when the velocity is perpendicular to the field. For a positive charge, the right-hand rule gives the direction, with the thumb pointing along $\vec{v}$. For a negative charge, the force points in the opposite direction.

The Lorentz force describes the motion of charged particles in magnetic fields, as discussed in the chapter on the motion of charges in electric and magnetic fields. For example, a proton traveling at $3.0 \cdot 10^5\,\mathrm{m/s}$ perpendicular to a field of $0.40\,\mathrm{T}$ experiences a force
$$
F = e v B = 1.60 \cdot 10^{-19} \cdot 3.0 \cdot 10^5 \cdot 0.40\,\mathrm{N} = 1.9 \cdot 10^{-14}\,\mathrm{N} ,
$$
with $e = 1.60 \cdot 10^{-19}\,\mathrm{C}$.

:::dimostrazione
The idea is to express the force on the wire as the sum of the forces on the charges moving through it. Consider a wire segment of length $\ell$ perpendicular to the field. It contains $N$ carriers of charge $q > 0$, all moving along the wire with velocity $v$.

A carrier takes a time $\Delta t = \dfrac{\ell}{v}$ to travel the length of the segment. During that time, all $N$ carriers in the segment pass through the cross section at its far end, so a charge $\Delta q = N q$ passes through. The definition of current therefore gives
$$
I = \frac{\Delta q}{\Delta t} = \frac{N q}{\dfrac{\ell}{v}} = \frac{N q v}{\ell} ,
\qquad
\text{that is}
\qquad
I \ell = N q v .
$$
By the law for the **force on a straight wire**, the segment experiences a force $F = I \ell B = N q v B$. This is the sum of the forces on the $N$ carriers. Since these forces are equal, each carrier experiences a force
$$
\frac{F}{N} = q v B .
$$
If the wire makes an angle $\alpha$ with the field, the same calculation with $F = I \ell B \sin\alpha$ gives $q v B \sin\alpha$. The directions also agree because the velocity of positive carriers points in the direction of the current. Therefore, $I\,\vec{\ell} = N q\,\vec{v}$, and the force on one carrier is $\dfrac{1}{N}\,I\,\vec{\ell} \times \vec{B} = q\,\vec{v} \times \vec{B}$.

Negative carriers, such as electrons in metals, move opposite to the current. The product $q\,\vec{v}$ then again points in the direction of the current, so the formula $\vec{F} = q\,\vec{v} \times \vec{B}$ applies to them as well.
:::
::::

:::esempio{titolo="Direction of the force on a proton and on an electron"}
A proton moves to the right in the plane of the page with velocity $v = 2.0 \cdot 10^6\,\mathrm{m/s}$ in a uniform field of $5.0\,\mathrm{mT}$ directed into the page. With the thumb pointing right and the fingers pointing into the page, the right palm faces up. The force on the proton therefore points upward and has magnitude
$$
F = e v B = 1.60 \cdot 10^{-19} \cdot 2.0 \cdot 10^6 \cdot 5.0 \cdot 10^{-3}\,\mathrm{N} = 1.6 \cdot 10^{-15}\,\mathrm{N} .
$$
An electron with the same velocity has charge $-e$, so it experiences a force of the same magnitude directed downward. The electron's mass is $m_e = 9.11 \cdot 10^{-31}\,\mathrm{kg}$, so its acceleration is $a = \dfrac{F}{m_e} \approx 1.8 \cdot 10^{15}\,\mathrm{m/s^2}$. Its weight, about $9 \cdot 10^{-30}\,\mathrm{N}$, is negligible compared with the magnetic force.

::grafico{assi=0 uguale=1 vettori="0,0,1.8,0,v;0,0,0,1.5,F" punti="0,0,pieno" etichette="-0.5,-0.4,+e;-2.4,-1.6,⊗;-2.4,-0.5,⊗;-2.4,0.9,⊗;-2.4,2,⊗;-1.3,-1.6,⊗;-1.3,-0.5,⊗;-1.3,0.9,⊗;-1.3,2,⊗;1,-1.6,⊗;1,0.9,⊗;1,2,⊗;2.3,-1.6,⊗;2.3,-0.5,⊗;2.3,0.9,⊗;2.3,2,⊗" xmin=-2.8 xmax=2.8 ymin=-2 ymax=2.4 titolo="Proton with velocity $\vec{v}$ directed to the right in a field pointing into the page ($\otimes$). The Lorentz force $\vec{F} = e\,\vec{v} \times \vec{B}$ is perpendicular to $\vec{v}$ and points upward"}

:::

:::attenzione
A magnetic field exerts no force on a stationary charge. For example, a charged bead suspended from an insulating thread between the poles of a magnet remains at rest in its equilibrium position because $v = 0$ and therefore $q\,\vec{v} \times \vec{B} = \vec{0}$. An electric field, however, exerts a force $q\vec{E}$ on a stationary charge.
:::

## Work done by the Lorentz force

:::richiamo{titolo="Work and the work–energy theorem"}
A constant force $\vec{F}$ acting on an object during a displacement $\Delta\vec{s}$ does work $W = F\,\Delta s \cos\theta$, where $\theta$ is the angle between the force and the displacement. The total work done by the forces on an object of mass $m$ equals the change in its kinetic energy $K = \dfrac{1}{2} m v^2$. Thus, $W = \Delta K$.
:::

::::teorema{#lavoro-forza-lorentz titolo="The Lorentz force does no work"}
The Lorentz force on a charge moving in a magnetic field does zero work along any path. Consequently, if the Lorentz force is the only force acting on the charge, its kinetic energy and speed remain constant. Only the direction of its velocity changes. In this chapter, work is denoted by $W$ because this course uses $L$ for inductance.

This theorem explains how a magnetic field can curve a charged particle's path without speeding it up or slowing it down. For example, an electron with speed $1.0 \cdot 10^7\,\mathrm{m/s}$ has kinetic energy
$$
K = \frac{1}{2} m_e v^2 = \frac{1}{2} \cdot 9.11 \cdot 10^{-31} \cdot \left( 1.0 \cdot 10^7 \right)^2\,\mathrm{J} \approx 4.6 \cdot 10^{-17}\,\mathrm{J} ,
$$
or about $285\,\mathrm{eV}$, with $1\,\mathrm{eV} = 1.60 \cdot 10^{-19}\,\mathrm{J}$. After passing through a magnetic field, the electron has the same kinetic energy and the same speed, but a different direction of motion. An electric field is needed to change the particle's energy.

:::dimostrazione
Divide the path into segments traversed during very short time intervals $\Delta t$. Over each interval, the velocity is nearly constant, so the displacement is $\Delta\vec{s} = \vec{v}\,\Delta t$ and points in the direction of the velocity.

By the definition of the cross product, the Lorentz force $q\,\vec{v} \times \vec{B}$ is perpendicular to $\vec{v}$, so it is also perpendicular to $\Delta\vec{s}$. The angle between the force and the displacement is therefore $\theta = 90^\circ$, and the work done along the segment is
$$
W = F\,\Delta s \cos 90^\circ = 0 .
$$
The work along the entire path is the sum of the work done along the individual segments, so it is zero. If the Lorentz force is the only force, the **work–energy theorem** gives $\Delta K = W = 0$. Therefore, $\dfrac{1}{2} m v^2$ remains constant, as does the speed $v$.
:::
::::

## Torque on a current loop

:::richiamo{titolo="Torque of a couple"}
Two forces of equal magnitude $F$ acting in opposite directions along parallel lines of action separated by a distance $d$ form a **couple**. The net force of the couple is zero, and its torque has magnitude $M = F d$, where $d$ is called the moment arm of the couple.
:::

::::teorema{#momento-su-una-spira titolo="Torque on a rectangular current loop"}
A rigid rectangular loop with sides $a$ and $b$ and area $S = ab$ carries a current $I$. It can rotate about an axis through its center parallel to the sides of length $a$. The loop is in a uniform magnetic field $\vec{B}$ perpendicular to the axis. Let $\hat{n}$ be the unit vector perpendicular to the plane of the loop, oriented by the right-hand rule. With your fingers curled in the direction of the current, your thumb points along $\hat{n}$. Let $\theta$ be the angle between $\hat{n}$ and $\vec{B}$. Then the total force on the loop is zero, and the torque $\vec{M}$ has magnitude
$$
M = I S B \sin\theta .
$$
The torque rotates the loop toward the position in which $\hat{n}$ points in the same direction as $\vec{B}$. Its magnitude is greatest, $I S B$, when the field is parallel to the plane of the loop ($\theta = 90^\circ$), and it is zero when the field is perpendicular to the loop ($\theta = 0^\circ$ or $\theta = 180^\circ$). Torque is denoted by $\vec{M}$ because this course uses $\tau$ for the time constant. Both an electric motor and a moving-coil ammeter operate by means of this torque. For example, a loop of area $10\,\mathrm{cm} \times 5.0\,\mathrm{cm}$ carrying a current of $2.0\,\mathrm{A}$ in a field of $0.40\,\mathrm{T}$ parallel to its plane experiences a torque
$$
M = 2.0 \cdot 0.10 \cdot 0.050 \cdot 0.40\,\mathrm{N\cdot m} = 4.0 \cdot 10^{-3}\,\mathrm{N\cdot m} .
$$

::grafico{assi=0 uguale=1 linee="-0.75,1.3 0.75,-1.3" vettori="-0.75,1.3,-0.75,2.3,F;0.75,-1.3,0.75,-2.3,−F;0,0,1.21,0.7,n̂;-2.6,-2.3,-1.2,-2.3,B" segmenti="0,0,1.6,0;-0.75,1.3,-0.75,-0.4;0.75,-1.3,0.75,0.4" punti="0,0,pieno" etichette="-1.25,1.2,⊙;0.95,-1.45,⊗;0.62,0.06,θ" xmin=-2.8 xmax=2.8 ymin=-2.6 ymax=2.6 titolo="Loop viewed along its axis of rotation. Current flows out of the page ($\odot$) on one side and into the page ($\otimes$) on the other. The forces $\vec{F}$ and $-\vec{F}$ form a couple with moment arm $b \sin\theta$ that rotates $\hat{n}$ toward $\vec{B}$"}

:::dimostrazione
The idea is to calculate the force on each of the four sides using the law for the **force on a straight wire**, then add their effects.

The two sides of length $b$ carry currents in opposite directions and therefore experience opposite forces. Each force is perpendicular to the side and to the field, so it is parallel to the axis of rotation. The two forces act at the midpoints of the sides, both of which lie on the axis, so they have the same line of action. Therefore, both their vector sum and their net torque are zero.

The two sides of length $a$ are parallel to the axis and hence perpendicular to the field. Each experiences a force of magnitude
$$
F = I a B ,
$$
perpendicular to the field. The currents in the two sides flow in opposite directions, so the forces point in opposite directions and form a couple, as the diagram shows. The net force on the loop is therefore zero.

The moment arm of the couple is the distance between the lines of action of the two forces, that is, the projection of the side of length $b$ onto the direction of $\vec{B}$. Side $b$ is perpendicular to $\hat{n}$, and $\hat{n}$ makes an angle $\theta$ with $\vec{B}$. Hence side $b$ makes an angle $90^\circ - \theta$ with $\vec{B}$, and its projection is $b \cos(90^\circ - \theta) = b \sin\theta$. The expression for the torque of a couple therefore gives
$$
M = F \cdot b \sin\theta = I a B \cdot b \sin\theta = I S B \sin\theta .
$$
:::
::::

:::definizione{#momento-magnetico titolo="Magnetic moment"}
The **magnetic moment** of a plane loop of area $S$ carrying a current $I$ is the vector
$$
\vec{\mu} = I S\,\hat{n} ,
$$
where $\hat{n}$ is the unit vector normal to the loop, oriented by the right-hand rule. A tightly wound coil of $N$ identical turns has magnetic moment $\vec{\mu} = N I S\,\hat{n}$ because the moments of the individual turns add. Magnetic moment is measured in $\mathrm{A\cdot m^2}$. In terms of the magnetic moment, the torque on a loop in a uniform field is
$$
\vec{M} = \vec{\mu} \times \vec{B} ,
\qquad
M = \mu B \sin\theta ,
$$
and this formula applies to plane loops of any shape, including circular loops. The magnetic moment combines in one vector the properties of the loop that determine its behavior in the field: current, area, number of turns, and orientation. For example, a coil of $50$ circular turns of radius $2.0\,\mathrm{cm}$ carrying a current of $0.50\,\mathrm{A}$ has
$$
\mu = N I \pi r^2 = 50 \cdot 0.50 \cdot \pi \cdot \left( 0.020 \right)^2\,\mathrm{A\cdot m^2} \approx 3.1 \cdot 10^{-2}\,\mathrm{A\cdot m^2} ,
$$
and in a field of $0.20\,\mathrm{T}$ it experiences a maximum torque of $\mu B \approx 6.3 \cdot 10^{-3}\,\mathrm{N\cdot m}$.
:::

:::osservazione{#equilibrio-spira titolo="Equilibrium positions and the magnetic needle"}
The torque vanishes at $\theta = 0^\circ$ and at $\theta = 180^\circ$, so the loop is in equilibrium in both positions. At $\theta = 0^\circ$, the magnetic moment points in the direction of the field. If the loop is rotated slightly, the torque brings it back because it always turns $\vec{\mu}$ toward $\vec{B}$. The equilibrium is therefore **stable**. At $\theta = 180^\circ$, the magnetic moment points opposite to the field. A small rotation takes the loop farther from that position, so the equilibrium is **unstable**. For example, the coil with $\mu = 3.1 \cdot 10^{-2}\,\mathrm{A\cdot m^2}$, rotated through $10^\circ$ from its stable position in a field of $0.20\,\mathrm{T}$, experiences a restoring torque $\mu B \sin 10^\circ \approx 1.1 \cdot 10^{-3}\,\mathrm{N\cdot m}$.

A magnetic needle also has a magnetic moment, directed from its south pole to its north pole. In an external field, the needle rotates to the stable equilibrium position, with $\vec{\mu}$ pointing in the direction of $\vec{B}$. This is why a compass needle indicates the direction in which the magnetic field points.
:::

## Electric motor and moving-coil ammeter

:::osservazione{#motore-elettrico titolo="Direct-current electric motor"}
A **direct-current electric motor** converts electrical energy into mechanical energy. It consists of a coil of $N$ turns that can rotate in a magnetic field produced by a fixed magnet, and a **commutator**. The commutator is a ring split into two halves, each soldered to one end of the coil. Two stationary contacts connected to the power supply slide against the ring.

If the current always flowed in the same direction, the coil would rotate to its stable equilibrium position and oscillate about it, because the torque reverses direction beyond that position. The commutator reverses the current in the coil every half turn, just as $\vec{\mu}$ passes through the direction of $\vec{B}$. Thus $\vec{\mu}$ also reverses direction, the torque continues to act in the same rotational direction, and its magnitude is $N I S B\,|\sin\theta|$.

For example, a coil of $100$ turns, each of area $20\,\mathrm{cm^2}$, carrying a current of $3.0\,\mathrm{A}$ in a field of $0.50\,\mathrm{T}$ experiences a maximum torque
$$
M_{\max} = N I S B = 100 \cdot 3.0 \cdot 20 \cdot 10^{-4} \cdot 0.50\,\mathrm{N\cdot m} = 0.30\,\mathrm{N\cdot m} .
$$
Real motors have several coils mounted at angles to one another so that the total torque remains nearly constant as the motor rotates.

::grafico{f="sin(x);abs(sin(x))" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 nomi="θ,M" legenda="M = \mu B \sin\theta;M = \mu B\,|\sin\theta|" etichette="3,-0.3,π;6.15,-0.3,2π" titolo="Torque on the coil as a function of angle, in units of $\mu B$. Without a commutator the torque changes sign every half turn. With a commutator it always acts in the same direction"}

:::

:::osservazione{#amperometro-bobina-mobile titolo="Moving-coil ammeter"}
In a **moving-coil ammeter**, a coil of $N$ turns, each of area $S$, rotates about an axis between the pole pieces of a magnet. The pole faces are concave cylindrical surfaces. A fixed iron cylinder sits inside the coil. Because of this geometry, the field in the gap through which the sides of the coil move is **radial**: it points along the radii of the cylinder and has the same magnitude $B$ at every position of the coil.

The radial field is always parallel to the plane of the coil, so $\theta = 90^\circ$ and the torque has its maximum value $N I S B$ at every angle of rotation. A pointer and a spiral spring are attached to the coil. The spring exerts a restoring torque proportional to the angle of rotation $\varphi$, with magnitude $k \varphi$, where $\varphi$ is in radians. The constant $k$ is called the torsion constant of the spring and is measured in $\mathrm{N\cdot m/rad}$. The pointer comes to rest when the two torques are equal, that is, when
$$
N I S B = k \varphi
\qquad
\Longrightarrow
\qquad
\varphi = \frac{N S B}{k}\,I .
$$
The angle of rotation is therefore directly proportional to the current, and the scale marks on the instrument are evenly spaced. For example, with $N = 100$, $S = 1.0\,\mathrm{cm^2}$, $B = 0.20\,\mathrm{T}$, and $k = 1.0 \cdot 10^{-6}\,\mathrm{N\cdot m/rad}$, a current of $0.20\,\mathrm{mA}$ deflects the pointer through an angle of
$$
\varphi = \frac{100 \cdot 1.0 \cdot 10^{-4} \cdot 0.20}{1.0 \cdot 10^{-6}} \cdot 2.0 \cdot 10^{-4}\,\mathrm{rad} = 0.40\,\mathrm{rad} \approx 23^\circ .
$$

::grafico{assi=0 uguale=1 unicolore=1 poligoni="0.85,0 0.83,0.19 0.77,0.37 0.66,0.53 0.53,0.66 0.37,0.77 0.19,0.83 0,0.85 -0.19,0.83 -0.37,0.77 -0.53,0.66 -0.66,0.53 -0.77,0.37 -0.83,0.19 -0.85,0 -0.83,-0.19 -0.77,-0.37 -0.66,-0.53 -0.53,-0.66 -0.37,-0.77 -0.19,-0.83 0,-0.85 0.19,-0.83 0.37,-0.77 0.53,-0.66 0.66,-0.53 0.77,-0.37 0.83,-0.19;-1,1.43 -1.24,1.24 -1.43,1 -1.59,0.74 -1.69,0.45 -1.74,0.15 -1.74,-0.15 -1.69,-0.45 -1.59,-0.74 -1.43,-1 -1.24,-1.24 -1,-1.43 -3,-1.45 -3,1.45;1,-1.43 1.24,-1.24 1.43,-1 1.59,-0.74 1.69,-0.45 1.74,-0.15 1.74,0.15 1.69,0.45 1.59,0.74 1.43,1 1.24,1.24 1,1.43 3,1.45 3,-1.45" vettori="-1.68,0.61,-0.92,0.34;-1.68,-0.61,-0.92,-0.34;0.92,-0.34,1.68,-0.61;0.92,0.34,1.68,0.61;-1.22,0.44,-1.02,1,F;1.22,-0.44,1.02,-1,F" segmenti="-1.22,0.44,1.22,-0.44" etichette="-2.5,-0.1,N;2.3,-0.1,S;-1.6,0.55,⊙;1.3,-0.3,⊗" xmin=-3 xmax=3 ymin=-1.8 ymax=1.8 titolo="Moving-coil ammeter viewed from above. Between pole pieces $N$ and $S$ and the iron cylinder, the field is radial and therefore always parallel to the plane of the coil (dashed). The torque is $N I S B$ at every position"}

:::
