---
titolo: Sources of magnetic fields and Ampère’s law
sommario: How currents produce magnetic fields (straight wire, circular loop, and solenoid), the force between two parallel wires and the definition of the ampere, magnetic flux and Gauss’s law for magnetism, magnetic field circulation, Ampère’s law and its applications, and the magnetic properties of materials.
---

## Magnetic field of a straight wire

:::osservazione{#esperienza-biot-savart titolo="Biot and Savart’s measurements"}
Oersted’s experiment shows that a current-carrying wire turns a nearby magnetic needle, so the wire produces a magnetic field. In 1820, Biot and Savart measured this field around a long straight wire by counting the oscillations of a magnetic needle at different distances from the wire and for different currents. They concluded that the field is perpendicular both to the wire and to the radial line from the wire. Its magnitude is *directly* proportional to the current and *inversely* proportional to the distance.
:::

:::teorema{#legge-biot-savart titolo="Biot–Savart law"}
Consider a very long straight wire, modeled as an **infinitely long wire**, carrying current $I$. At a point a distance $r$ from the wire, the magnitude of the magnetic field is
$$
B = \frac{\mu_0 I}{2\pi r} ,
$$
where $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ is the **permeability of free space**. This is an experimental law that summarizes Biot and Savart’s measurements.

The field lines are circles centered on the wire in planes perpendicular to it. Their direction is given by the **right-hand rule**. Point your thumb in the direction of the current. Your curled fingers indicate the direction in which the field lines circle the wire. The law gives the field near wires and cables. For example, a wire carrying $5.0\,\mathrm{A}$ produces the following field at a distance of $2.0\,\mathrm{cm}$:
$$
B = \frac{4\pi \cdot 10^{-7} \cdot 5.0}{2\pi \cdot 0.020}\,\mathrm{T} = 5.0 \cdot 10^{-5}\,\mathrm{T} ,
$$
which is of the same order of magnitude as Earth’s magnetic field.

::grafico{assi=0 uguale=1 unicolore=1 punti="0,0,pieno" linee="0.160,0.000 0.148,0.061 0.113,0.113 0.061,0.148 0.000,0.160 -0.061,0.148 -0.113,0.113 -0.148,0.061 -0.160,0.000 -0.148,-0.061 -0.113,-0.113 -0.061,-0.148 -0.000,-0.160 0.061,-0.148 0.113,-0.113 0.148,-0.061 0.160,-0.000;1.000,0.000 0.991,0.131 0.966,0.259 0.924,0.383 0.866,0.500 0.793,0.609 0.707,0.707 0.609,0.793 0.500,0.866 0.383,0.924 0.259,0.966 0.131,0.991 0.000,1.000 -0.131,0.991 -0.259,0.966 -0.383,0.924 -0.500,0.866 -0.609,0.793 -0.707,0.707 -0.793,0.609 -0.866,0.500 -0.924,0.383 -0.966,0.259 -0.991,0.131 -1.000,0.000 -0.991,-0.131 -0.966,-0.259 -0.924,-0.383 -0.866,-0.500 -0.793,-0.609 -0.707,-0.707 -0.609,-0.793 -0.500,-0.866 -0.383,-0.924 -0.259,-0.966 -0.131,-0.991 -0.000,-1.000 0.131,-0.991 0.259,-0.966 0.383,-0.924 0.500,-0.866 0.609,-0.793 0.707,-0.707 0.793,-0.609 0.866,-0.500 0.924,-0.383 0.966,-0.259 0.991,-0.131 1.000,-0.000;2.000,0.000 1.983,0.261 1.932,0.518 1.848,0.765 1.732,1.000 1.587,1.218 1.414,1.414 1.218,1.587 1.000,1.732 0.765,1.848 0.518,1.932 0.261,1.983 0.000,2.000 -0.261,1.983 -0.518,1.932 -0.765,1.848 -1.000,1.732 -1.218,1.587 -1.414,1.414 -1.587,1.218 -1.732,1.000 -1.848,0.765 -1.932,0.518 -1.983,0.261 -2.000,0.000 -1.983,-0.261 -1.932,-0.518 -1.848,-0.765 -1.732,-1.000 -1.587,-1.218 -1.414,-1.414 -1.218,-1.587 -1.000,-1.732 -0.765,-1.848 -0.518,-1.932 -0.261,-1.983 -0.000,-2.000 0.261,-1.983 0.518,-1.932 0.765,-1.848 1.000,-1.732 1.218,-1.587 1.414,-1.414 1.587,-1.218 1.732,-1.000 1.848,-0.765 1.932,-0.518 1.983,-0.261 2.000,-0.000;3.000,0.000 2.974,0.392 2.898,0.776 2.772,1.148 2.598,1.500 2.380,1.826 2.121,2.121 1.826,2.380 1.500,2.598 1.148,2.772 0.776,2.898 0.392,2.974 0.000,3.000 -0.392,2.974 -0.776,2.898 -1.148,2.772 -1.500,2.598 -1.826,2.380 -2.121,2.121 -2.380,1.826 -2.598,1.500 -2.772,1.148 -2.898,0.776 -2.974,0.392 -3.000,0.000 -2.974,-0.392 -2.898,-0.776 -2.772,-1.148 -2.598,-1.500 -2.380,-1.826 -2.121,-2.121 -1.826,-2.380 -1.500,-2.598 -1.148,-2.772 -0.776,-2.898 -0.392,-2.974 -0.000,-3.000 0.392,-2.974 0.776,-2.898 1.148,-2.772 1.500,-2.598 1.826,-2.380 2.121,-2.121 2.380,-1.826 2.598,-1.500 2.772,-1.148 2.898,-0.776 2.974,-0.392 3.000,-0.000" vettori="1,0,1,0.8,B;0,2,-0.9,2;-3,0,-3,-0.9;0,-3,0.9,-3" segmenti="0,0,-1.414,1.414" etichette="0.25,0.3,I;-0.95,0.55,r" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Field lines around a straight wire carrying current $I$ out of the page ($\odot$). The lines are counterclockwise circles centered on the wire, and the field magnitude is $B = \dfrac{\mu_0 I}{2\pi r}$"}

:::

:::osservazione{#simboli-entrante-uscente titolo="Vectors perpendicular to the page"}
In the figures, $\odot$ represents a vector or current directed out of the page toward the reader, and $\otimes$ represents a vector or current directed into the page. The first symbol represents the tip of an arrow, the second its tail. If current flows out of the page, the right-hand rule gives counterclockwise field lines. If current flows into the page, the field lines run clockwise.
:::

:::esempio{#sovrapposizione-fili titolo="Field of two parallel wires"}
When several currents produce magnetic fields at the same point, the total field is the vector sum of the fields due to the individual currents. This property is called the **superposition principle**.

Two parallel wires are $10\,\mathrm{cm}$ apart and carry currents $I_1 = 4.0\,\mathrm{A}$ and $I_2 = 6.0\,\mathrm{A}$ in the same direction. The midpoint $M$ is a distance $r = 5.0\,\mathrm{cm}$ from each wire, so
$$
B_1 = \frac{\mu_0 I_1}{2\pi r} = \frac{2 \cdot 10^{-7} \cdot 4.0}{0.050}\,\mathrm{T} = 1.6 \cdot 10^{-5}\,\mathrm{T} ,
\qquad
B_2 = \frac{2 \cdot 10^{-7} \cdot 6.0}{0.050}\,\mathrm{T} = 2.4 \cdot 10^{-5}\,\mathrm{T} .
$$
The currents flow in the same direction and $M$ lies between the wires. The right-hand rule therefore gives opposite directions for the two fields at $M$. The total field thus has magnitude $B_2 - B_1 = 8.0 \cdot 10^{-6}\,\mathrm{T}$ and points in the direction of the field produced by wire $2$.
:::

## Field of a circular loop and a solenoid

:::teorema{#campo-spira titolo="Field at the center of a circular loop"}
A circular loop of radius $R$ carrying current $I$ produces a field at its center perpendicular to the plane of the loop, with magnitude
$$
B = \frac{\mu_0 I}{2R} .
$$
The direction follows from the right-hand rule. Curl the fingers of your right hand in the direction of the current around the loop. Your thumb points in the direction of the field at the center. A **flat coil** of $N$ superimposed turns produces a field greater by a factor of $N$, namely $B = \dfrac{\mu_0 N I}{2R}$. Adding the contributions from all parts of the loop gives this formula. The calculation is studied at the university level, so we use the formula here without proof.

For a loop of radius $5.0\,\mathrm{cm}$ carrying $4.0\,\mathrm{A}$, the field at the center is
$$
B = \frac{4\pi \cdot 10^{-7} \cdot 4.0}{2 \cdot 0.050}\,\mathrm{T} \approx 5.0 \cdot 10^{-5}\,\mathrm{T} ,
$$
and a coil with $50$ turns of the same dimensions produces $2.5 \cdot 10^{-3}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 punti="0,1.2,pieno;0,0,pieno,O" curve="0.45*cos(t),1.2*sin(t),0,6.29" legenda=0 linee="0.160,1.200 0.148,1.261 0.113,1.313 0.061,1.348 0.000,1.360 -0.061,1.348 -0.113,1.313 -0.148,1.261 -0.160,1.200 -0.148,1.139 -0.113,1.087 -0.061,1.052 -0.000,1.040 0.061,1.052 0.113,1.087 0.148,1.139 0.160,1.200;0.160,-1.200 0.148,-1.139 0.113,-1.087 0.061,-1.052 0.000,-1.040 -0.061,-1.052 -0.113,-1.087 -0.148,-1.139 -0.160,-1.200 -0.148,-1.261 -0.113,-1.313 -0.061,-1.348 -0.000,-1.360 0.061,-1.348 0.113,-1.313 0.148,-1.261 0.160,-1.200;-0.113,-1.313 0.113,-1.087;-0.113,-1.087 0.113,-1.313" segmenti="-2.2,0,2.6,0" vettori="0,0,1.6,0,B" etichette="0.3,1.55,I;0.3,-1.6,I;2.4,-0.3,axis" xmin=-2.4 xmax=3 ymin=-1.8 ymax=1.8 titolo="Loop seen edge-on. Current flows out of the page at the top ($\odot$) and into the page at the bottom ($\otimes$). At the center $O$, the field is perpendicular to the plane of the loop and has magnitude $B = \dfrac{\mu_0 I}{2R}$"}

:::

:::osservazione{#spira-come-magnete titolo="A current loop behaves like a small magnet"}
The field lines of a current loop enter one face and leave the other, as they do for a disk-shaped magnet. The face where the lines emerge acts as a north pole, and the other acts as a south pole. Two coaxial loops carrying currents in the same direction therefore attract, just as two magnets on the same axis attract when the north pole of one faces the south pole of the other. The magnetic moment of the loop, $\vec{\mu} = I S\,\hat{n}$, introduced in the chapter on magnetic fields and the Lorentz force, points in the same direction as the field at the center.
:::

:::definizione{#solenoide titolo="Solenoid"}
A **solenoid** consists of a wire wound helically around a cylinder, with closely spaced turns side by side. If the length $\ell$ of the solenoid is much greater than the radius of its turns, the field inside is **uniform** and parallel to the axis, while the field outside is negligible. For $N$ turns carrying current $I$, the field inside is
$$
B = \mu_0\,\frac{N}{\ell}\,I = \mu_0\, n I ,
$$
where $n = \dfrac{N}{\ell}$ is the number of turns per unit length. This formula follows from Ampère’s law. The direction of the internal field follows from the same rule as for the loop. Like a bar magnet, the solenoid has a north pole at one end and a south pole at the other.

A solenoid can produce a uniform magnetic field of known magnitude in the laboratory. For example, $400$ turns wound over a length of $20\,\mathrm{cm}$ give $n = 2.0 \cdot 10^{3}$ turns per meter. With $I = 2.5\,\mathrm{A}$, the field inside is $B = 4\pi \cdot 10^{-7} \cdot 2.0 \cdot 10^{3} \cdot 2.5\,\mathrm{T} \approx 6.3 \cdot 10^{-3}\,\mathrm{T}$.
:::

## Force between two parallel wires and the definition of the ampere

:::richiamo{titolo="Magnetic force on a straight wire"}
A straight wire of length $\ell$ carrying current $I$ in a uniform magnetic field $\vec{B}$ experiences the force $\vec{F} = I\,\vec{\ell} \times \vec{B}$, where $\vec{\ell}$ has magnitude $\ell$ and points in the direction of the current. If the wire is perpendicular to the field, the force has magnitude $F = I \ell B$.
:::

::::teorema{#forza-tra-fili titolo="Force between two parallel wires"}
Two infinitely long, straight, parallel wires a distance $d$ apart in a vacuum carry currents $I_1$ and $I_2$. A section of length $\ell$ of either wire experiences a force perpendicular to the wires, of magnitude
$$
F = \frac{\mu_0 I_1 I_2\,\ell}{2\pi d} .
$$
The force is **attractive** if the currents flow in the same direction and **repulsive** if they flow in opposite directions. The forces on the two wires have equal magnitudes and opposite directions, as required by Newton’s third law.

For example, two wires $5.0\,\mathrm{cm}$ apart carry currents $10\,\mathrm{A}$ and $20\,\mathrm{A}$. The force each wire exerts on a segment of length $2.0\,\mathrm{m}$ of the other is
$$
F = \frac{4\pi \cdot 10^{-7} \cdot 10 \cdot 20 \cdot 2.0}{2\pi \cdot 0.050}\,\mathrm{N} = 1.6 \cdot 10^{-3}\,\mathrm{N} .
$$

::grafico{assi=0 uguale=1 linee="3.680,3.000 3.670,3.050 3.642,3.092 3.600,3.120 3.550,3.130 3.500,3.120 3.458,3.092 3.430,3.050 3.420,3.000 3.430,2.950 3.458,2.908 3.500,2.880 3.550,2.870 3.600,2.880 3.642,2.908 3.670,2.950 3.680,3.000;3.458,2.908 3.642,3.092;3.458,3.092 3.642,2.908;0,0 0,4;3,0 3,4" vettori="0,0.4,0,1.4,I₁;3,0.4,3,1.4,I₂;0,2.2,0.9,2.2,F;3,2.2,2.1,2.2,F" segmenti="0,3.7,3,3.7" punti="0,2.2,pieno;3,2.2,pieno" etichette="1.42,3.85,d;3.8,3.25,B₁" xmin=-1 xmax=4.4 ymin=-0.3 ymax=4.2 titolo="Two parallel wires carrying current in the same direction. At the second wire, the field $\vec{B}_1$ of the first wire points into the page ($\otimes$), and the two forces are attractive"}

:::dimostrazione
First calculate the field of the first wire at the position of the second wire. Then apply the formula for the force on a straight wire to the second wire.

By the Biot–Savart law, at every point on wire $2$ the field produced by wire $1$ has magnitude
$$
B_1 = \frac{\mu_0 I_1}{2\pi d} .
$$
Every point on wire $2$ is the same distance $d$ from wire $1$, so the magnitude of $B_1$ is constant along wire $2$. The field lines of wire $1$ are circles centered on wire $1$. Hence $\vec{B}_1$ is perpendicular to wire $2$ and points in the same direction at every point along it. Wire $2$ is therefore in a uniform field perpendicular to it, and the force on a section of length $\ell$ has magnitude
$$
F = I_2\,\ell\,B_1 = I_2\,\ell\,\frac{\mu_0 I_1}{2\pi d} = \frac{\mu_0 I_1 I_2\,\ell}{2\pi d} .
$$
To find the direction, consider the figure, with both currents flowing upward. By the right-hand rule, the field of wire $1$ at wire $2$ points into the page. The cross product $\vec{\ell} \times \vec{B}_1$, with $\vec{\ell}$ upward and $\vec{B}_1$ into the page, points to the left, toward wire $1$, so the force is attractive. If $I_2$ flows in the opposite direction, vector $\vec{\ell}$ reverses, and so does the force, which becomes repulsive.
:::
::::

:::definizione{#definizione-ampere titolo="Definition of the ampere"}
Until 2019, the **ampere** was defined in terms of the force between two parallel wires. Under that definition, one ampere is the constant current that, if maintained in two infinitely long, straight, parallel wires of negligible cross section placed $1\,\mathrm{m}$ apart in a vacuum, produces a force of $2 \cdot 10^{-7}\,\mathrm{N}$ between the wires for every meter of length. The value can be checked using the formula for the force between wires:
$$
\frac{F}{\ell} = \frac{4\pi \cdot 10^{-7} \cdot 1 \cdot 1}{2\pi \cdot 1}\,\mathrm{N/m} = 2 \cdot 10^{-7}\,\mathrm{N/m} .
$$
This definition related the unit of current to mechanical measurements of force and length, and the coulomb was accordingly defined as $1\,\mathrm{A\cdot s}$. Since 2019, the International System of Units has assigned an exact value to the elementary charge $e$, and one ampere corresponds to the passage of approximately $6.24 \cdot 10^{18}$ elementary charges per second. The value of $\mu_0$ remains $4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ to within one part per billion.
:::

## Magnetic flux and Gauss’s law

:::definizione{#flusso-campo-magnetico titolo="Magnetic flux"}
Consider a surface $S$ and choose one of the two directions normal to it. Divide the surface into pieces so small that each can be treated as flat and the field over it as constant. For each piece of area $\Delta S$, define the vector $\Delta\vec{S} = \Delta S\,\hat{n}$, where $\hat{n}$ is the unit vector perpendicular to the piece and pointing in the chosen direction. The **magnetic flux** through $S$ is the sum of the dot products
$$
\Phi(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{S} = \sum B\,\Delta S \cos\theta ,
$$
where $\theta$ is the angle between $\vec{B}$ and $\hat{n}$ on each piece. The unit is the **weber**, $1\,\mathrm{Wb} = 1\,\mathrm{T\cdot m^2}$.

If the surface is flat, with area $S$, and the field is uniform, all terms in the sum have the same $\theta$, so
$$
\Phi(\vec{B}) = B S \cos\theta .
$$
The flux is greatest when the field is perpendicular to the surface ($\theta = 0^\circ$), zero when the field is parallel to the surface ($\theta = 90^\circ$), and negative when the field passes through the surface in the direction opposite to the normal. For a square of side $10\,\mathrm{cm}$ in a uniform field of $0.20\,\mathrm{T}$, with $\theta = 60^\circ$, the flux is $\Phi(\vec{B}) = 0.20 \cdot 0.010 \cdot \cos 60^\circ\,\mathrm{Wb} = 1.0 \cdot 10^{-3}\,\mathrm{Wb}$. Changes in flux give rise to induced currents, which are studied in the chapter on electromagnetic induction.

::grafico{assi=0 uguale=1 unicolore=1 linee="2.5,0.6 3.7,3.4" vettori="-0.5,0.6,1.3,0.6;-0.5,1.6,1.3,1.6,B;-0.5,2.6,1.3,2.6;-0.5,3.6,1.3,3.6;3.100,2.000,4.295,1.488,n̂" segmenti="3.100,2.000,4.7,2.000" punti="3.100,2.000,pieno" etichette="4.25,1.82,θ;2.2,3.2,S" xmin=-0.8 xmax=5 ymin=0.2 ymax=4 titolo="Flat surface $S$ seen edge-on in a uniform field $\vec{B}$. The flux is $\Phi(\vec{B}) = B S \cos\theta$, where $\theta$ is the angle between $\vec{B}$ and the unit normal $\hat{n}$"}

:::

:::attenzione
Flux and field are different quantities. The field is a vector defined at each point and measured in teslas. Flux is a number associated with a surface and measured in webers. Two loops in the same uniform field of $0.20\,\mathrm{T}$, perpendicular to the field and with areas $0.010\,\mathrm{m^2}$ and $0.040\,\mathrm{m^2}$, have different fluxes, $2.0 \cdot 10^{-3}\,\mathrm{Wb}$ and $8.0 \cdot 10^{-3}\,\mathrm{Wb}$. A loop parallel to the same field has zero flux even though the field at its points has magnitude $0.20\,\mathrm{T}$.
:::

:::teorema{#teorema-gauss-magnetismo titolo="Gauss’s law for magnetism"}
For a closed surface, the normal is chosen to point outward. The flux of the magnetic field through *any* closed surface is zero:
$$
\Phi_{S}(\vec{B}) = 0 .
$$
This is an experimental law and one of the principles of electromagnetism. For the electric field, Gauss’s law gives $\Phi(\vec{E}) = \dfrac{Q}{\varepsilon_0}$, where $Q$ is the charge enclosed by the surface. The law for the magnetic field has the same form with $0$ on the right-hand side. It therefore states that no closed surface encloses sources of magnetic field analogous to electric charges.

The law helps determine which magnetic fields are possible. For example, a cube of side $5.0\,\mathrm{cm}$ is placed in a uniform field of $0.30\,\mathrm{T}$ perpendicular to two of its faces. The flux through the face where the field enters is $-0.30 \cdot 0.050^2\,\mathrm{Wb} = -7.5 \cdot 10^{-4}\,\mathrm{Wb}$, and the flux through the opposite face is $+7.5 \cdot 10^{-4}\,\mathrm{Wb}$. The other four faces are parallel to the field, so the flux through them is zero. The sum is therefore zero, as the law predicts.
:::

:::osservazione{#assenza-monopoli titolo="Absence of magnetic monopoles"}
Electric field lines start on positive charges and end on negative charges. An isolated magnetic charge, a north or south pole on its own, would be called a **magnetic monopole**. The flux through a closed surface enclosing it would be nonzero. Gauss’s law for magnetism expresses the experimental fact that magnetic monopoles have never been observed. Consequently, magnetic field lines form **closed loops**. Every line that leaves a closed surface reenters it at another point. Breaking a bar magnet in two produces two magnets, each with its own north and south poles.
:::

## Magnetic field circulation and Ampère’s law

:::definizione{#circuitazione-campo-magnetico titolo="Circulation of the magnetic field"}
Consider a closed path $\gamma$ and choose a direction around it. Divide the path into segments so small that each can be treated as straight and the field along it as constant. Associate with each segment a displacement vector $\Delta\vec{\ell}$ tangent to the path and pointing in the chosen direction. The **circulation** of the magnetic field around $\gamma$ is the sum of the dot products
$$
\Gamma_\gamma(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{\ell} = \sum B\,\Delta\ell \cos\alpha ,
$$
where $\alpha$ is the angle between $\vec{B}$ and $\Delta\vec{\ell}$ on each segment. The unit is $\mathrm{T\cdot m}$.

Two simple cases allow a direct calculation. On segments where $\vec{B}$ is perpendicular to the path, the contribution is zero because $\cos 90^\circ = 0$. On segments where $\vec{B}$ is tangent to the path, points in the direction of traversal, and has constant magnitude, the contribution is $B$ times the length of the segment. For example, in a uniform field of $0.050\,\mathrm{T}$, consider a square of side $20\,\mathrm{cm}$ with two sides parallel to the field. The side traversed in the direction of the field contributes $0.050 \cdot 0.20\,\mathrm{T\cdot m} = 1.0 \cdot 10^{-2}\,\mathrm{T\cdot m}$, the opposite side contributes $-1.0 \cdot 10^{-2}\,\mathrm{T\cdot m}$, and the other two contribute zero. The circulation is therefore zero.
:::

:::definizione{#correnti-concatenate titolo="Enclosed currents"}
A current is **enclosed** by a closed path $\gamma$ if it crosses a surface bounded by $\gamma$. Currents that pass outside the path are not enclosed. The signs of the enclosed currents follow from the right-hand rule. With your fingers curled in the direction of traversal of $\gamma$, your thumb points in the direction of currents counted as positive. For a path in the plane of the page traversed counterclockwise, currents out of the page are positive and currents into the page are negative.

In the figure, $I_1 = 3.0\,\mathrm{A}$ flows out of the page, $I_2 = 5.0\,\mathrm{A}$ flows into the page, and $I_3$ lies outside the path. The sum of the enclosed currents is therefore $I_1 - I_2 = -2.0\,\mathrm{A}$.

::grafico{assi=0 uguale=1 punti="-1.2,0.4,pieno;4.4,1.5,pieno" curve="3*cos(t)+0.3*cos(2*t),2*sin(t)+0.2*sin(3*t),0,6.29" legenda=0 linee="-1.050,0.400 -1.061,0.457 -1.094,0.506 -1.143,0.539 -1.200,0.550 -1.257,0.539 -1.306,0.506 -1.339,0.457 -1.350,0.400 -1.339,0.343 -1.306,0.294 -1.257,0.261 -1.200,0.250 -1.143,0.261 -1.094,0.294 -1.061,0.343 -1.050,0.400;1.150,-0.500 1.139,-0.443 1.106,-0.394 1.057,-0.361 1.000,-0.350 0.943,-0.361 0.894,-0.394 0.861,-0.443 0.850,-0.500 0.861,-0.557 0.894,-0.606 0.943,-0.639 1.000,-0.650 1.057,-0.639 1.106,-0.606 1.139,-0.557 1.150,-0.500;0.894,-0.606 1.106,-0.394;0.894,-0.394 1.106,-0.606;4.550,1.500 4.539,1.557 4.506,1.606 4.457,1.639 4.400,1.650 4.343,1.639 4.294,1.606 4.261,1.557 4.250,1.500 4.261,1.443 4.294,1.394 4.343,1.361 4.400,1.350 4.457,1.361 4.506,1.394 4.539,1.443 4.550,1.500" vettori="0.4,1.82,-0.5,1.82" etichette="-0.95,0.62,I₁;1.25,-0.3,I₂;4.65,1.7,I₃;2.55,2.0,γ" xmin=-3.6 xmax=5.4 ymin=-2.5 ymax=2.5 titolo="Path $\gamma$ is traversed counterclockwise, so currents out of the page ($\odot$) are positive. The enclosed currents add up to $I_1 - I_2$, while $I_3$ is outside the path"}

:::

:::teorema{#teorema-di-ampere titolo="Ampère’s law"}
For currents that are constant in time, the circulation of the magnetic field around any closed path $\gamma$ equals $\mu_0$ times the sum of the currents enclosed by $\gamma$:
$$
\Gamma_\gamma(\vec{B}) = \mu_0 \sum I_{\text{enc}} .
$$
A general derivation from the Biot–Savart law uses tools studied at the university level. For a straight wire, the law can be verified by a direct calculation.

The law gives the circulation without requiring the field at each point. For a path enclosing currents $I_1 = 3.0\,\mathrm{A}$ out of the page and $I_2 = 5.0\,\mathrm{A}$ into the page, the result is
$$
\Gamma_\gamma(\vec{B}) = 4\pi \cdot 10^{-7} \cdot (3.0 - 5.0)\,\mathrm{T\cdot m} \approx -2.5 \cdot 10^{-6}\,\mathrm{T\cdot m} ,
$$
and current $I_3$ does not appear, although its field is nonzero at points on $\gamma$. When there is sufficient symmetry, the law also gives the field itself, as in a solenoid, a thick wire, or a toroid.
:::

::::teorema{#verifica-ampere-filo titolo="Circulation around a straight wire"}
Let $\gamma$ be a circle of radius $r$ centered on an infinitely long straight wire carrying current $I$. The plane of the circle is perpendicular to the wire. Traverse the circle in the direction given by the right-hand rule. Then
$$
\Gamma_\gamma(\vec{B}) = \mu_0 I ,
$$
for any radius $r$. This is the result predicted by Ampère’s law, because the circle encloses only current $I$, counted as positive. With $I = 10\,\mathrm{A}$, the circulation is $4\pi \cdot 10^{-7} \cdot 10\,\mathrm{T\cdot m} \approx 1.3 \cdot 10^{-5}\,\mathrm{T\cdot m}$ for both a circle of radius $1\,\mathrm{cm}$ and one of radius $1\,\mathrm{m}$.

::grafico{assi=0 uguale=1 punti="0,0,pieno" linee="0.150,0.000 0.139,0.057 0.106,0.106 0.057,0.139 0.000,0.150 -0.057,0.139 -0.106,0.106 -0.139,0.057 -0.150,0.000 -0.139,-0.057 -0.106,-0.106 -0.057,-0.139 -0.000,-0.150 0.057,-0.139 0.106,-0.106 0.139,-0.057 0.150,-0.000;2.000,0.000 1.983,0.261 1.932,0.518 1.848,0.765 1.732,1.000 1.587,1.218 1.414,1.414 1.218,1.587 1.000,1.732 0.765,1.848 0.518,1.932 0.261,1.983 0.000,2.000 -0.261,1.983 -0.518,1.932 -0.765,1.848 -1.000,1.732 -1.218,1.587 -1.414,1.414 -1.587,1.218 -1.732,1.000 -1.848,0.765 -1.932,0.518 -1.983,0.261 -2.000,0.000 -1.983,-0.261 -1.932,-0.518 -1.848,-0.765 -1.732,-1.000 -1.587,-1.218 -1.414,-1.414 -1.218,-1.587 -1.000,-1.732 -0.765,-1.848 -0.518,-1.932 -0.261,-1.983 -0.000,-2.000 0.261,-1.983 0.518,-1.932 0.765,-1.848 1.000,-1.732 1.218,-1.587 1.414,-1.414 1.587,-1.218 1.732,-1.000 1.848,-0.765 1.932,-0.518 1.983,-0.261 2.000,-0.000" segmenti="0,0,1.414,1.414" vettori="0,2,-1.1,2,B;-1.414,-1.414,-0.85,-1.98,Δℓ" etichette="0.25,-0.35,I;0.55,0.95,r" xmin=-2.8 xmax=2.8 ymin=-2.6 ymax=2.6 titolo="Circle of radius $r$ centered on the wire and traversed counterclockwise. At every point, $\vec{B}$ is tangent to the circle and points in the same direction as $\Delta\vec{\ell}$, so $\Gamma(\vec{B}) = B \cdot 2\pi r$"}

:::dimostrazione
The field is tangent to the circle everywhere and has the same magnitude all along it. The sum defining the circulation therefore reduces to a product.

By the Biot–Savart law, the field lines are circles centered on the wire. Thus at every point of $\gamma$, the field is tangent to $\gamma$. The circle is traversed in the direction of the field lines, so each $\Delta\vec{\ell}$ points in the same direction as $\vec{B}$ and $\cos\alpha = 1$. Every point on $\gamma$ is a distance $r$ from the wire, so the magnitude $B = \dfrac{\mu_0 I}{2\pi r}$ of the field is the same everywhere on the circle and can be factored out of the sum:
$$
\Gamma_\gamma(\vec{B}) = \sum B\,\Delta\ell = B \sum \Delta\ell = B \cdot 2\pi r .
$$
The lengths of the segments add up to the circumference, $2\pi r$. Substituting the value of $B$ gives
$$
\Gamma_\gamma(\vec{B}) = \frac{\mu_0 I}{2\pi r} \cdot 2\pi r = \mu_0 I .
$$
The radius $r$ cancels, so the circulation is independent of which circle is chosen.
:::
::::

:::osservazione{#campo-non-conservativo titolo="The magnetic field is nonconservative"}
The electrostatic field has zero circulation around every closed path. It is therefore conservative and has a potential. The magnetic field has nonzero circulation around paths enclosing a net current, as the calculation for the straight wire shows. Thus the magnetic field **is nonconservative**, and no potential energy can be defined for it in the way it can for the electrostatic field.
:::

## Applications of Ampère’s law

::::teorema{#campo-solenoide titolo="Field inside a solenoid"}
Consider a very long solenoid with $n$ turns per unit length carrying current $I$. As measurements show, far from the ends the field inside can be taken as uniform and parallel to the axis, and the field outside as negligible. The magnitude of the internal field is then
$$
B = \mu_0\, n I .
$$
The field is independent of the radius of the solenoid and of the position inside it.

::grafico{assi=0 uguale=1 punti="0.250,1.000,pieno;0.750,1.000,pieno;1.250,1.000,pieno;1.750,1.000,pieno;2.250,1.000,pieno;2.750,1.000,pieno;3.250,1.000,pieno;3.750,1.000,pieno" linee="0.380,1.000 0.370,1.050 0.342,1.092 0.300,1.120 0.250,1.130 0.200,1.120 0.158,1.092 0.130,1.050 0.120,1.000 0.130,0.950 0.158,0.908 0.200,0.880 0.250,0.870 0.300,0.880 0.342,0.908 0.370,0.950 0.380,1.000;0.380,-1.000 0.370,-0.950 0.342,-0.908 0.300,-0.880 0.250,-0.870 0.200,-0.880 0.158,-0.908 0.130,-0.950 0.120,-1.000 0.130,-1.050 0.158,-1.092 0.200,-1.120 0.250,-1.130 0.300,-1.120 0.342,-1.092 0.370,-1.050 0.380,-1.000;0.158,-1.092 0.342,-0.908;0.158,-0.908 0.342,-1.092;0.880,1.000 0.870,1.050 0.842,1.092 0.800,1.120 0.750,1.130 0.700,1.120 0.658,1.092 0.630,1.050 0.620,1.000 0.630,0.950 0.658,0.908 0.700,0.880 0.750,0.870 0.800,0.880 0.842,0.908 0.870,0.950 0.880,1.000;0.880,-1.000 0.870,-0.950 0.842,-0.908 0.800,-0.880 0.750,-0.870 0.700,-0.880 0.658,-0.908 0.630,-0.950 0.620,-1.000 0.630,-1.050 0.658,-1.092 0.700,-1.120 0.750,-1.130 0.800,-1.120 0.842,-1.092 0.870,-1.050 0.880,-1.000;0.658,-1.092 0.842,-0.908;0.658,-0.908 0.842,-1.092;1.380,1.000 1.370,1.050 1.342,1.092 1.300,1.120 1.250,1.130 1.200,1.120 1.158,1.092 1.130,1.050 1.120,1.000 1.130,0.950 1.158,0.908 1.200,0.880 1.250,0.870 1.300,0.880 1.342,0.908 1.370,0.950 1.380,1.000;1.380,-1.000 1.370,-0.950 1.342,-0.908 1.300,-0.880 1.250,-0.870 1.200,-0.880 1.158,-0.908 1.130,-0.950 1.120,-1.000 1.130,-1.050 1.158,-1.092 1.200,-1.120 1.250,-1.130 1.300,-1.120 1.342,-1.092 1.370,-1.050 1.380,-1.000;1.158,-1.092 1.342,-0.908;1.158,-0.908 1.342,-1.092;1.880,1.000 1.870,1.050 1.842,1.092 1.800,1.120 1.750,1.130 1.700,1.120 1.658,1.092 1.630,1.050 1.620,1.000 1.630,0.950 1.658,0.908 1.700,0.880 1.750,0.870 1.800,0.880 1.842,0.908 1.870,0.950 1.880,1.000;1.880,-1.000 1.870,-0.950 1.842,-0.908 1.800,-0.880 1.750,-0.870 1.700,-0.880 1.658,-0.908 1.630,-0.950 1.620,-1.000 1.630,-1.050 1.658,-1.092 1.700,-1.120 1.750,-1.130 1.800,-1.120 1.842,-1.092 1.870,-1.050 1.880,-1.000;1.658,-1.092 1.842,-0.908;1.658,-0.908 1.842,-1.092;2.380,1.000 2.370,1.050 2.342,1.092 2.300,1.120 2.250,1.130 2.200,1.120 2.158,1.092 2.130,1.050 2.120,1.000 2.130,0.950 2.158,0.908 2.200,0.880 2.250,0.870 2.300,0.880 2.342,0.908 2.370,0.950 2.380,1.000;2.380,-1.000 2.370,-0.950 2.342,-0.908 2.300,-0.880 2.250,-0.870 2.200,-0.880 2.158,-0.908 2.130,-0.950 2.120,-1.000 2.130,-1.050 2.158,-1.092 2.200,-1.120 2.250,-1.130 2.300,-1.120 2.342,-1.092 2.370,-1.050 2.380,-1.000;2.158,-1.092 2.342,-0.908;2.158,-0.908 2.342,-1.092;2.880,1.000 2.870,1.050 2.842,1.092 2.800,1.120 2.750,1.130 2.700,1.120 2.658,1.092 2.630,1.050 2.620,1.000 2.630,0.950 2.658,0.908 2.700,0.880 2.750,0.870 2.800,0.880 2.842,0.908 2.870,0.950 2.880,1.000;2.880,-1.000 2.870,-0.950 2.842,-0.908 2.800,-0.880 2.750,-0.870 2.700,-0.880 2.658,-0.908 2.630,-0.950 2.620,-1.000 2.630,-1.050 2.658,-1.092 2.700,-1.120 2.750,-1.130 2.800,-1.120 2.842,-1.092 2.870,-1.050 2.880,-1.000;2.658,-1.092 2.842,-0.908;2.658,-0.908 2.842,-1.092;3.380,1.000 3.370,1.050 3.342,1.092 3.300,1.120 3.250,1.130 3.200,1.120 3.158,1.092 3.130,1.050 3.120,1.000 3.130,0.950 3.158,0.908 3.200,0.880 3.250,0.870 3.300,0.880 3.342,0.908 3.370,0.950 3.380,1.000;3.380,-1.000 3.370,-0.950 3.342,-0.908 3.300,-0.880 3.250,-0.870 3.200,-0.880 3.158,-0.908 3.130,-0.950 3.120,-1.000 3.130,-1.050 3.158,-1.092 3.200,-1.120 3.250,-1.130 3.300,-1.120 3.342,-1.092 3.370,-1.050 3.380,-1.000;3.158,-1.092 3.342,-0.908;3.158,-0.908 3.342,-1.092;3.880,1.000 3.870,1.050 3.842,1.092 3.800,1.120 3.750,1.130 3.700,1.120 3.658,1.092 3.630,1.050 3.620,1.000 3.630,0.950 3.658,0.908 3.700,0.880 3.750,0.870 3.800,0.880 3.842,0.908 3.870,0.950 3.880,1.000;3.880,-1.000 3.870,-0.950 3.842,-0.908 3.800,-0.880 3.750,-0.870 3.700,-0.880 3.658,-0.908 3.630,-0.950 3.620,-1.000 3.630,-1.050 3.658,-1.092 3.700,-1.120 3.750,-1.130 3.800,-1.120 3.842,-1.092 3.870,-1.050 3.880,-1.000;3.658,-1.092 3.842,-0.908;3.658,-0.908 3.842,-1.092" segmenti="1,0.35,3,0.35;3,0.35,3,1.9;3,1.9,1,1.9;1,1.9,1,0.35" vettori="0.4,-0.45,3.6,-0.45,B" etichette="0.85,0.15,a;3.15,0.15,b;3.15,2.1,c;0.85,2.1,d;2.0,0.55,h" xmin=-0.3 xmax=4.3 ymin=-1.5 ymax=2.4 titolo="Cross section of a solenoid. The current in the turns flows out of the page at the top ($\odot$) and into the page at the bottom ($\otimes$). Around the rectangle $abcd$, only the side $ab$ inside the solenoid contributes to the circulation"}

:::dimostrazione
Apply Ampère’s law to a rectangle chosen so that only one side contributes to the circulation.

Consider the rectangle $abcd$ shown in the figure. Side $ab$, of length $h$, is inside the solenoid and parallel to the axis. Side $cd$ is outside, and sides $bc$ and $da$ are perpendicular to the axis. Traverse the rectangle in the direction $a \to b \to c \to d$, which follows the field along side $ab$. We calculate the four contributions.

- On side $ab$, the field is uniform and points in the same direction as $\Delta\vec{\ell}$, so the contribution is $B h$.
- On sides $bc$ and $da$, the field is perpendicular to $\Delta\vec{\ell}$ along the portions inside the solenoid and zero along the portions outside, so the contribution is zero.
- On side $cd$, the field is zero, so the contribution is zero.

The circulation is therefore $B h$. The turns within a length $h$ pass through the rectangle. There are $n h$ such turns, each carrying current $I$ out of the page. A current out of the page is positive for the chosen direction of traversal, so the sum of the enclosed currents is $n h I$. By Ampère’s law,
$$
B h = \mu_0\, n h I ,
$$
and dividing by $h$ gives $B = \mu_0\, n I$.
:::
::::

::::teorema{#campo-filo-spesso titolo="Field inside and outside a thick wire"}
An infinitely long straight wire with a circular cross section of radius $R$ carries a current $I$ distributed uniformly over the cross section. At a distance $r$ from the axis, the field is tangent to the circles centered on the axis and has magnitude
$$
B(r) =
\begin{cases}
\dfrac{\mu_0 I\, r}{2\pi R^2} & 0 \leq r \leq R \\[10pt]
\dfrac{\mu_0 I}{2\pi r} & r \geq R
\end{cases}
$$
Outside the wire, the field is the same as that of a thin wire along the axis. Inside the wire, the field is proportional to the distance from the axis. It is therefore zero on the axis and greatest at the surface. For a wire of radius $2.0\,\mathrm{mm}$ carrying $10\,\mathrm{A}$, the field at the surface is $\dfrac{2 \cdot 10^{-7} \cdot 10}{2.0 \cdot 10^{-3}}\,\mathrm{T} = 1.0 \cdot 10^{-3}\,\mathrm{T}$. At distances $1.0\,\mathrm{mm}$ and $4.0\,\mathrm{mm}$ from the axis, the magnitude is the same, $5.0 \cdot 10^{-4}\,\mathrm{T}$.

::grafico{f="min(x,1/x)" segmenti="1,0,1,1" punti="1,1,pieno" legenda="B(r)" nomi="r,B" xmin=0 xmax=4 ymin=0 ymax=1.3 titolo="Field of a thick wire as a function of distance from its axis, with $r$ in units of $R$ and $B$ in units of $\dfrac{\mu_0 I}{2\pi R}$. The field increases linearly inside the wire and decreases as $\dfrac{1}{r}$ outside"}

:::dimostrazione
By symmetry, the field of the wire is tangent to circles centered on the axis and has the same magnitude at all points on any one circle. Apply Ampère’s law to the circle of radius $r$, traversed in the direction of the field lines. As in the calculation for the straight wire, the circulation is $B \cdot 2\pi r$.

If $r \geq R$, the circle encloses the entire current $I$, so $B \cdot 2\pi r = \mu_0 I$ and $B = \dfrac{\mu_0 I}{2\pi r}$.

If $r < R$, the circle encloses only the current passing through the disk of radius $r$. The current is distributed uniformly, so the ratio of the enclosed current to the total current equals the ratio of area $\pi r^2$ to area $\pi R^2$:
$$
I_{\text{enc}} = I\,\frac{\pi r^2}{\pi R^2} = I\,\frac{r^2}{R^2} .
$$
Ampère’s law then gives
$$
B \cdot 2\pi r = \mu_0 I\,\frac{r^2}{R^2} ,
$$
and dividing by $2\pi r$ gives $B = \dfrac{\mu_0 I\, r}{2\pi R^2}$. For $r = R$, the two expressions give the same value, $\dfrac{\mu_0 I}{2\pi R}$.
:::
::::

::::teorema{#campo-toroide titolo="Field of a toroid"}
A **toroid** is a solenoid bent into a ring, with $N$ turns wound around the ring carrying current $I$. Within the ring, the field lines are circles centered on the axis of the toroid. At a distance $r$ from the axis, the field has magnitude
$$
B = \frac{\mu_0 N I}{2\pi r} ;
$$
outside the ring, the field is zero. The internal field is nonuniform because it decreases from the inner edge to the outer edge. For a toroid with $500$ turns carrying $3.0\,\mathrm{A}$, the field is $3.0 \cdot 10^{-3}\,\mathrm{T}$ at a distance $10\,\mathrm{cm}$ from the axis and $2.5 \cdot 10^{-3}\,\mathrm{T}$ at a distance $12\,\mathrm{cm}$. A toroid confines the field to a closed region, with no poles and no field outside.

::grafico{assi=0 uguale=1 punti="1.848,0.765,pieno;0.765,1.848,pieno;-0.765,1.848,pieno;-1.848,0.765,pieno;-1.848,-0.765,pieno;-0.765,-1.848,pieno;0.765,-1.848,pieno;1.848,-0.765,pieno" linee="1.750,0.000 1.742,0.172 1.716,0.341 1.675,0.508 1.617,0.670 1.543,0.825 1.455,0.972 1.353,1.110 1.237,1.237 1.110,1.353 0.972,1.455 0.825,1.543 0.670,1.617 0.508,1.675 0.341,1.716 0.172,1.742 0.000,1.750 -0.172,1.742 -0.341,1.716 -0.508,1.675 -0.670,1.617 -0.825,1.543 -0.972,1.455 -1.110,1.353 -1.237,1.237 -1.353,1.110 -1.455,0.972 -1.543,0.825 -1.617,0.670 -1.675,0.508 -1.716,0.341 -1.742,0.172 -1.750,0.000 -1.742,-0.172 -1.716,-0.341 -1.675,-0.508 -1.617,-0.670 -1.543,-0.825 -1.455,-0.972 -1.353,-1.110 -1.237,-1.237 -1.110,-1.353 -0.972,-1.455 -0.825,-1.543 -0.670,-1.617 -0.508,-1.675 -0.341,-1.716 -0.172,-1.742 -0.000,-1.750 0.172,-1.742 0.341,-1.716 0.508,-1.675 0.670,-1.617 0.825,-1.543 0.972,-1.455 1.110,-1.353 1.237,-1.237 1.353,-1.110 1.455,-0.972 1.543,-0.825 1.617,-0.670 1.675,-0.508 1.716,-0.341 1.742,-0.172 1.750,-0.000;3.250,0.000 3.234,0.319 3.188,0.634 3.110,0.943 3.003,1.244 2.866,1.532 2.702,1.806 2.512,2.062 2.298,2.298 2.062,2.512 1.806,2.702 1.532,2.866 1.244,3.003 0.943,3.110 0.634,3.188 0.319,3.234 0.000,3.250 -0.319,3.234 -0.634,3.188 -0.943,3.110 -1.244,3.003 -1.532,2.866 -1.806,2.702 -2.062,2.512 -2.298,2.298 -2.512,2.062 -2.702,1.806 -2.866,1.532 -3.003,1.244 -3.110,0.943 -3.188,0.634 -3.234,0.319 -3.250,0.000 -3.234,-0.319 -3.188,-0.634 -3.110,-0.943 -3.003,-1.244 -2.866,-1.532 -2.702,-1.806 -2.512,-2.062 -2.298,-2.298 -2.062,-2.512 -1.806,-2.702 -1.532,-2.866 -1.244,-3.003 -0.943,-3.110 -0.634,-3.188 -0.319,-3.234 -0.000,-3.250 0.319,-3.234 0.634,-3.188 0.943,-3.110 1.244,-3.003 1.532,-2.866 1.806,-2.702 2.062,-2.512 2.298,-2.298 2.512,-2.062 2.702,-1.806 2.866,-1.532 3.003,-1.244 3.110,-0.943 3.188,-0.634 3.234,-0.319 3.250,-0.000;1.968,0.765 1.959,0.811 1.933,0.850 1.894,0.876 1.848,0.885 1.802,0.876 1.763,0.850 1.737,0.811 1.728,0.765 1.737,0.719 1.763,0.681 1.802,0.655 1.848,0.645 1.894,0.655 1.933,0.681 1.959,0.719 1.968,0.765;2.892,1.148 2.883,1.194 2.856,1.233 2.818,1.259 2.772,1.268 2.726,1.259 2.687,1.233 2.661,1.194 2.652,1.148 2.661,1.102 2.687,1.063 2.726,1.037 2.772,1.028 2.818,1.037 2.856,1.063 2.883,1.102 2.892,1.148;2.687,1.063 2.856,1.233;2.687,1.233 2.856,1.063;0.885,1.848 0.876,1.894 0.850,1.933 0.811,1.959 0.765,1.968 0.719,1.959 0.681,1.933 0.655,1.894 0.645,1.848 0.655,1.802 0.681,1.763 0.719,1.737 0.765,1.728 0.811,1.737 0.850,1.763 0.876,1.802 0.885,1.848;1.268,2.772 1.259,2.818 1.233,2.856 1.194,2.883 1.148,2.892 1.102,2.883 1.063,2.856 1.037,2.818 1.028,2.772 1.037,2.726 1.063,2.687 1.102,2.661 1.148,2.652 1.194,2.661 1.233,2.687 1.259,2.726 1.268,2.772;1.063,2.687 1.233,2.856;1.063,2.856 1.233,2.687;-0.645,1.848 -0.655,1.894 -0.681,1.933 -0.719,1.959 -0.765,1.968 -0.811,1.959 -0.850,1.933 -0.876,1.894 -0.885,1.848 -0.876,1.802 -0.850,1.763 -0.811,1.737 -0.765,1.728 -0.719,1.737 -0.681,1.763 -0.655,1.802 -0.645,1.848;-1.028,2.772 -1.037,2.818 -1.063,2.856 -1.102,2.883 -1.148,2.892 -1.194,2.883 -1.233,2.856 -1.259,2.818 -1.268,2.772 -1.259,2.726 -1.233,2.687 -1.194,2.661 -1.148,2.652 -1.102,2.661 -1.063,2.687 -1.037,2.726 -1.028,2.772;-1.233,2.687 -1.063,2.856;-1.233,2.856 -1.063,2.687;-1.728,0.765 -1.737,0.811 -1.763,0.850 -1.802,0.876 -1.848,0.885 -1.894,0.876 -1.933,0.850 -1.959,0.811 -1.968,0.765 -1.959,0.719 -1.933,0.681 -1.894,0.655 -1.848,0.645 -1.802,0.655 -1.763,0.681 -1.737,0.719 -1.728,0.765;-2.652,1.148 -2.661,1.194 -2.687,1.233 -2.726,1.259 -2.772,1.268 -2.818,1.259 -2.856,1.233 -2.883,1.194 -2.892,1.148 -2.883,1.102 -2.856,1.063 -2.818,1.037 -2.772,1.028 -2.726,1.037 -2.687,1.063 -2.661,1.102 -2.652,1.148;-2.856,1.063 -2.687,1.233;-2.856,1.233 -2.687,1.063;-1.728,-0.765 -1.737,-0.719 -1.763,-0.681 -1.802,-0.655 -1.848,-0.645 -1.894,-0.655 -1.933,-0.681 -1.959,-0.719 -1.968,-0.765 -1.959,-0.811 -1.933,-0.850 -1.894,-0.876 -1.848,-0.885 -1.802,-0.876 -1.763,-0.850 -1.737,-0.811 -1.728,-0.765;-2.652,-1.148 -2.661,-1.102 -2.687,-1.063 -2.726,-1.037 -2.772,-1.028 -2.818,-1.037 -2.856,-1.063 -2.883,-1.102 -2.892,-1.148 -2.883,-1.194 -2.856,-1.233 -2.818,-1.259 -2.772,-1.268 -2.726,-1.259 -2.687,-1.233 -2.661,-1.194 -2.652,-1.148;-2.856,-1.233 -2.687,-1.063;-2.856,-1.063 -2.687,-1.233;-0.645,-1.848 -0.655,-1.802 -0.681,-1.763 -0.719,-1.737 -0.765,-1.728 -0.811,-1.737 -0.850,-1.763 -0.876,-1.802 -0.885,-1.848 -0.876,-1.894 -0.850,-1.933 -0.811,-1.959 -0.765,-1.968 -0.719,-1.959 -0.681,-1.933 -0.655,-1.894 -0.645,-1.848;-1.028,-2.772 -1.037,-2.726 -1.063,-2.687 -1.102,-2.661 -1.148,-2.652 -1.194,-2.661 -1.233,-2.687 -1.259,-2.726 -1.268,-2.772 -1.259,-2.818 -1.233,-2.856 -1.194,-2.883 -1.148,-2.892 -1.102,-2.883 -1.063,-2.856 -1.037,-2.818 -1.028,-2.772;-1.233,-2.856 -1.063,-2.687;-1.233,-2.687 -1.063,-2.856;0.885,-1.848 0.876,-1.802 0.850,-1.763 0.811,-1.737 0.765,-1.728 0.719,-1.737 0.681,-1.763 0.655,-1.802 0.645,-1.848 0.655,-1.894 0.681,-1.933 0.719,-1.959 0.765,-1.968 0.811,-1.959 0.850,-1.933 0.876,-1.894 0.885,-1.848;1.268,-2.772 1.259,-2.726 1.233,-2.687 1.194,-2.661 1.148,-2.652 1.102,-2.661 1.063,-2.687 1.037,-2.726 1.028,-2.772 1.037,-2.818 1.063,-2.856 1.102,-2.883 1.148,-2.892 1.194,-2.883 1.233,-2.856 1.259,-2.818 1.268,-2.772;1.063,-2.856 1.233,-2.687;1.063,-2.687 1.233,-2.856;1.968,-0.765 1.959,-0.719 1.933,-0.681 1.894,-0.655 1.848,-0.645 1.802,-0.655 1.763,-0.681 1.737,-0.719 1.728,-0.765 1.737,-0.811 1.763,-0.850 1.802,-0.876 1.848,-0.885 1.894,-0.876 1.933,-0.850 1.959,-0.811 1.968,-0.765;2.892,-1.148 2.883,-1.102 2.856,-1.063 2.818,-1.037 2.772,-1.028 2.726,-1.037 2.687,-1.063 2.661,-1.102 2.652,-1.148 2.661,-1.194 2.687,-1.233 2.726,-1.259 2.772,-1.268 2.818,-1.259 2.856,-1.233 2.883,-1.194 2.892,-1.148;2.687,-1.233 2.856,-1.063;2.687,-1.063 2.856,-1.233" curve="2.5*cos(t),2.5*sin(t),0,6.29" legenda=0 vettori="-2.5,0,-2.5,-1.1,B" segmenti="0,0,1.768,1.768" etichette="0.7,1.15,r" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Toroid viewed from above. Current in the turns flows out of the page at the inner edge ($\odot$) and into the page at the outer edge ($\otimes$). Each turn passes once through the area bounded by the colored circle of radius $r$"}

:::dimostrazione
By the symmetry of the toroid, the field has the same magnitude at every point on a circle centered on its axis. Apply Ampère’s law to the circle of radius $r$, traversed in the direction of the field lines. The circulation is $B \cdot 2\pi r$.

- If the circle lies within the ring, each turn passes once through the disk it bounds, at the inner edge, always in the same direction. The enclosed current is $N I$, so $B \cdot 2\pi r = \mu_0 N I$ and $B = \dfrac{\mu_0 N I}{2\pi r}$.
- If the circle lies in the central hole, no turn passes through the disk it bounds, so the enclosed current and the field are both zero.
- If the circle lies outside the ring, each turn passes through the disk twice in opposite directions, once at the inner edge and once at the outer edge. The enclosed current is $N I - N I = 0$, and the field is zero.
:::
::::

## Magnetic properties of materials

:::osservazione{#correnti-microscopiche titolo="Ampère’s hypothesis of microscopic currents"}
Ampère proposed that the magnetism of materials was due to tiny circular currents within matter. Today these currents are associated with the motion of electrons in atoms, which makes each atom a small magnetic dipole like a current loop. If the dipoles are randomly oriented, their fields cancel and the material produces no field. If an external field aligns them, their fields add and the material is said to be **magnetized**.
:::

:::definizione{#permeabilita-relativa titolo="Relative magnetic permeability"}
Fill a solenoid with a material. Let $B_0$ be the field its turns produce in a vacuum, and let $B$ be the field measured with the material inside. The **relative magnetic permeability** of the material is the ratio
$$
\mu_r = \frac{B}{B_0} .
$$
It is dimensionless and equals $1$ in a vacuum. The product $\mu = \mu_r \mu_0$ is called the absolute magnetic permeability of the material, and the field in the filled solenoid can be written as $B = \mu_r \mu_0\, n I$.

Relative permeability gives the factor by which a material increases or decreases the field produced by the currents. For example, a solenoid with $1000$ turns per meter carrying $0.40\,\mathrm{A}$ produces $B_0 = 4\pi \cdot 10^{-7} \cdot 1000 \cdot 0.40\,\mathrm{T} \approx 5.0 \cdot 10^{-4}\,\mathrm{T}$ in a vacuum. For an iron core under these conditions, $\mu_r = 1000$. The field then increases to approximately $0.50\,\mathrm{T}$. Electromagnets operate on this principle.
:::

:::definizione{#classi-materiali titolo="Diamagnetic, paramagnetic, and ferromagnetic materials"}
Materials fall into three classes according to the value of $\mu_r$.

- For **diamagnetic** materials, $\mu_r$ is slightly less than $1$. The field inside is slightly weaker than $B_0$, and a nearby magnet weakly repels the material. Diamagnetic materials include copper, with $\mu_r \approx 0.99999$, as well as water and bismuth.
- For **paramagnetic** materials, $\mu_r$ is slightly greater than $1$. The atomic dipoles partly align with the field, although thermal motion opposes this alignment. A nearby magnet weakly attracts the material. Aluminum, with $\mu_r \approx 1.00002$, and oxygen are paramagnetic.
- For **ferromagnetic** materials, $\mu_r$ is much greater than $1$, ranging from a few hundred to several tens of thousands. A magnet attracts them strongly. Iron, nickel, cobalt, and many of their alloys are ferromagnetic.

In diamagnetic and paramagnetic materials, $\mu_r$ is so close to $1$ that calculations use $\mu_0$, as in a vacuum. For example, in a solenoid with $B_0 = 5.0 \cdot 10^{-4}\,\mathrm{T}$, an aluminum core changes the field to $5.0001 \cdot 10^{-4}\,\mathrm{T}$, a difference that cannot be distinguished to two significant figures.
:::

:::osservazione{#domini-temperatura-curie titolo="Magnetic domains and the Curie temperature"}
In a ferromagnetic material, atomic dipoles align spontaneously within small regions called **magnetic domains**. Without an external field, the domains are randomly oriented and the material has no net magnetization. An applied field causes the domains aligned with it to grow, so the material becomes much more strongly magnetized than a paramagnetic material.

Above a characteristic temperature, the **Curie temperature**, thermal motion destroys the spontaneous alignment of dipoles within the domains and the material becomes paramagnetic. The Curie temperature is about $770\,^\circ\mathrm{C}$ for iron and about $360\,^\circ\mathrm{C}$ for nickel. An iron magnet heated above $770\,^\circ\mathrm{C}$ therefore loses its magnetization.
:::

:::osservazione{#ciclo-isteresi titolo="Hysteresis loop"}
In ferromagnetic materials, $\mu_r$ is not constant because the field $B$ within the material depends both on $B_0$ and on the material’s history. If $B_0$ is increased and then brought back to zero, the field inside the material does not return to zero. A **remanent field** $B_r$ remains. An external field in the opposite direction is needed to bring it to zero. As $B_0$ is varied back and forth, the graph of $B$ versus $B_0$ traces out a closed curve called the hysteresis loop.

Materials with a wide loop and a large remanent field, such as steel, are used for permanent magnets. Materials with a narrow loop, such as soft iron, are easily magnetized and demagnetized. They are used for the cores of electromagnets and of transformers, which are studied in the chapter on alternating current.

::grafico{f="tanh(1.4*(x-1));tanh(1.4*(x+1))" punti="0,0.885,pieno,Bᵣ;-1,0,pieno" nomi="B₀,B" legenda="B_0 \text{ increasing};B_0 \text{ decreasing}" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="Hysteresis loop for a ferromagnetic material, in arbitrary units. When $B_0$ returns to zero, a remanent field $B_r$ remains. Only an external field in the opposite direction can bring it to zero"}

:::
