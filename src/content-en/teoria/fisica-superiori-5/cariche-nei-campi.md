---
titolo: Motion of charged particles in electric and magnetic fields
sommario: How a charged particle moves in a uniform electric field and in a uniform magnetic field (acceleration, parabolic deflection, circular and helical motion), and how these types of motion are used in the velocity selector, Thomson’s experiment, the mass spectrometer, the cyclotron, and the Hall effect.
---

## Motion in a uniform electric field

:::richiamo{titolo="Electric field between two plates"}
Between two parallel flat plates separated by a distance $d$ with a potential difference $\Delta V$, the electric field is uniform and perpendicular to the plates. It points from the positive plate to the negative plate and has magnitude $E = \dfrac{\Delta V}{d}$. A charge $q$ in the field experiences a force $\vec{F} = q\,\vec{E}$. As the charge moves from one plate to the other, the field does work $W = q\,\Delta V$ on it. Work is denoted by $W$.
:::

:::richiamo{titolo="Work–energy theorem"}
The total work done by the forces acting on an object of mass $m$ equals the change in its kinetic energy $K = \dfrac{1}{2} m v^2$.
:::

::::teorema{#accelerazione-tra-armature titolo="Particle accelerated between two plates"}
A particle of mass $m$ and charge $q$ starts from rest near one plate and moves through a potential difference $\Delta V$ in the direction in which the electric force accelerates it. If the electric force is the only force, the particle moves in a straight line with constant acceleration. Its acceleration and final speed are
$$
a = \frac{|q|\,E}{m} = \frac{|q|\,\Delta V}{m\,d} ,
\qquad
v = \sqrt{\frac{2\,|q|\,\Delta V}{m}} .
$$
Plates with a small hole are used to produce beams of particles with a known speed, as in a cathode-ray tube. An electron accelerated from rest through $\Delta V = 100\,\mathrm{V}$ reaches a speed of
$$
v = \sqrt{\frac{2 \cdot 1.60 \cdot 10^{-19} \cdot 100}{9.11 \cdot 10^{-31}}}\,\mathrm{m/s} \approx 5.9 \cdot 10^6\,\mathrm{m/s} ,
$$
which is about $2\,\%$ of the speed of light.

::grafico{assi=0 uguale=1 linee="0,-1.5 0,1.5;3,-1.5 3,-0.15;3,0.15 3,1.5" vettori="0.6,1.0,2.4,1.0,E;0.6,-1.0,2.4,-1.0,E;0.3,0,1.3,0,F;3.2,0,4.4,0,v" punti="0.3,0,pieno" etichette="-0.45,1.1,+;-0.45,0.1,+;-0.45,-0.9,+;3.2,1.1,−;3.2,-0.9,−;0.15,-0.45,+q" xmin=-0.8 xmax=4.8 ymin=-1.8 ymax=1.8 titolo="A positive charge released from rest near the positive plate experiences a force $q\vec{E}$, accelerates toward the negative plate, and exits through the hole at speed $v = \sqrt{\dfrac{2\,|q|\,\Delta V}{m}}$"}

:::dimostrazione
The electric force $q\,\vec{E}$ is constant because the field is uniform. By Newton’s second law, the acceleration is therefore constant and has magnitude $a = \dfrac{|q|\,E}{m}$. The particle starts from rest, and the force acts along the field line, so the particle moves in a straight line with constant acceleration. Substituting $E = \dfrac{\Delta V}{d}$ gives the first formula.

To find the final speed, use the work–energy theorem. The field does work $W = |q|\,\Delta V$, and the initial kinetic energy is zero, so
$$
|q|\,\Delta V = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v^2 = \frac{2\,|q|\,\Delta V}{m}
\quad\Longrightarrow\quad
v = \sqrt{\frac{2\,|q|\,\Delta V}{m}} .
$$
:::
::::

:::definizione{#elettronvolt titolo="Electronvolt"}
An **electronvolt** is the energy gained by a particle with charge $e$ when it moves through a potential difference of $1\,\mathrm{V}$:
$$
1\,\mathrm{eV} = 1.60 \cdot 10^{-19}\,\mathrm{C} \cdot 1\,\mathrm{V} = 1.60 \cdot 10^{-19}\,\mathrm{J} .
$$
The multiples $1\,\mathrm{keV} = 10^3\,\mathrm{eV}$ and $1\,\mathrm{MeV} = 10^6\,\mathrm{eV}$ are also used. Particle energies are very small numbers in joules but take more convenient numerical values in electronvolts. Moreover, a particle with charge $e$ accelerated from rest through $\Delta V$ volts has a kinetic energy of $\Delta V$ electronvolts. For example, a proton accelerated through $5.0\,\mathrm{kV}$ has $K = 5.0\,\mathrm{keV} = 5.0 \cdot 10^3 \cdot 1.60 \cdot 10^{-19}\,\mathrm{J} = 8.0 \cdot 10^{-16}\,\mathrm{J}$, whereas an alpha particle with charge $2e$ accelerated through the same potential difference has $K = 10\,\mathrm{keV}$.
:::

:::osservazione{#peso-trascurabile titolo="Negligible weight and speeds small compared with c"}
The weight of the particles is neglected throughout this chapter. For an electron in a field of $6.0 \cdot 10^3\,\mathrm{V/m}$, the electric force has magnitude $e E = 1.60 \cdot 10^{-19} \cdot 6.0 \cdot 10^3\,\mathrm{N} = 9.6 \cdot 10^{-16}\,\mathrm{N}$, while the electron’s weight is $m_e\,g = 9.11 \cdot 10^{-31} \cdot 9.8\,\mathrm{N} \approx 8.9 \cdot 10^{-30}\,\mathrm{N}$, smaller by a factor of about $10^{14}$. We also assume that the speeds are small compared with $c = 3.00 \cdot 10^8\,\mathrm{m/s}$, so that the laws of classical mechanics apply. When $v$ exceeds a few tenths of $c$, the formulas of relativity are needed. See the chapter on dynamics and energy in special relativity.
:::

## Deflection in an electric field

::::teorema{#deflessione-campo-elettrico titolo="Deflection in a uniform electric field"}
A particle of mass $m$ and charge $q$ moves at speed $v_0$ into the space between two plates of length $L$. Its velocity is parallel to the plates and therefore perpendicular to the uniform field $\vec{E}$. Choose the $x$-axis in the direction of $\vec{v}_0$ and the $y$-axis in the direction of the electric force. The particle then follows an arc of a **parabola** with equation
$$
y = \frac{|q|\,E}{2 m v_0^2}\, x^2 ,
$$
At the end of the plates, where $x = L$, its displacement is $y_L$, and its velocity makes an angle $\theta$ with its initial direction, where
$$
y_L = \frac{|q|\,E\,L^2}{2 m v_0^2} ,
\qquad
\tan\theta = \frac{|q|\,E\,L}{m v_0^2} .
$$
This is the same motion as that of a projectile launched horizontally, with the electric force taking the place of gravity. An electron enters at $v_0 = 2.0 \cdot 10^7\,\mathrm{m/s}$ between plates of length $5.0\,\mathrm{cm}$, separated by $1.5\,\mathrm{cm}$, with $\Delta V = 90\,\mathrm{V}$. The field has magnitude $E = \dfrac{90}{0.015}\,\mathrm{V/m} = 6.0 \cdot 10^3\,\mathrm{V/m}$, so
$$
y_L = \frac{1.60 \cdot 10^{-19} \cdot 6.0 \cdot 10^3 \cdot (0.050)^2}{2 \cdot 9.11 \cdot 10^{-31} \cdot (2.0 \cdot 10^7)^2}\,\mathrm{m} \approx 3.3 \cdot 10^{-3}\,\mathrm{m} ,
\qquad
\tan\theta \approx 0.13 ,
$$
that is, $\theta \approx 7.5^\circ$. The displacement of $3.3\,\mathrm{mm}$ is less than half the distance between the plates, so the electron, which entered midway between them, leaves without striking either one.

::grafico{assi=0 uguale=1 linee="0,1 4,1;0,-1 4,-1;-1.4,0 0,0;7,-1.4 7,2.2" curve="t,0.0375*t^2,0,4;4+t,0.6+0.3*t,0,3" legenda=0 vettori="0,0,1,0,v₀;1.5,-0.25,1.5,-0.85,E;3,-0.25,3,-0.85;2.2,0.18,2.2,0.85,F" segmenti="0,0,7,0;4,0,4,0.6" punti="0,0,pieno" etichette="0.5,1.15,+;1.5,1.15,+;2.5,1.15,+;3.5,1.15,+;0.5,-1.4,−;1.5,-1.4,−;2.5,-1.4,−;3.5,-1.4,−;4.15,0.25,yₗ;1.9,-1.75,L;7.2,1.6,screen;-0.6,0.3,e⁻" xmin=-1.6 xmax=8.2 ymin=-2 ymax=2.4 titolo="An electron enters between the plates with velocity $\vec{v}_0$ perpendicular to $\vec{E}$. The force points opposite to the field, the path is a parabolic arc, and beyond the plates the electron continues in a straight line to the screen"}

:::dimostrazione
The electric force has constant magnitude $|q|\,E$ and points along the $y$-axis. No force acts along the $x$-axis, so the motion in the $x$-direction is at constant velocity:
$$
x = v_0\, t .
$$
Along the $y$-axis, the acceleration is constant, $a = \dfrac{|q|\,E}{m}$, and the initial velocity component is zero. The motion in the $y$-direction therefore has constant acceleration:
$$
y = \frac{1}{2}\, a\, t^2 = \frac{|q|\,E}{2m}\, t^2 ,
\qquad
v_y = a\, t = \frac{|q|\,E}{m}\, t .
$$
The first equation gives $t = \dfrac{x}{v_0}$. Substituting this into the second equation gives $y = \dfrac{|q|\,E}{2 m v_0^2}\, x^2$, the equation of a parabola with its vertex at the point of entry.

The particle leaves the plates at time $t_L = \dfrac{L}{v_0}$. Substituting $x = L$ into the equation of the parabola gives $y_L$. At that instant the velocity component along $y$ is $v_y = \dfrac{|q|\,E\,L}{m v_0}$, while the component along $x$ is still $v_0$, so
$$
\tan\theta = \frac{v_y}{v_0} = \frac{|q|\,E\,L}{m v_0^2} .
$$
:::
::::

:::osservazione{#moto-dopo-le-armature titolo="Motion beyond the plates and displacement on the screen"}
Beyond the plates, the field is zero, so the particle continues at constant speed in a straight line in the direction it was moving as it left the plates. On a screen a distance $D$ from the end of the plates, the total displacement is therefore
$$
Y = y_L + D \tan\theta .
$$
In the electron example, with $D = 20\,\mathrm{cm}$, we obtain $Y \approx 3.3 \cdot 10^{-3}\,\mathrm{m} + 0.20 \cdot 0.132\,\mathrm{m} \approx 3.0 \cdot 10^{-2}\,\mathrm{m}$. The displacement on the screen is proportional to $E$ and therefore to the voltage across the plates. Cathode-ray oscilloscopes operated on this principle: the position of the light spot on the screen tracked the voltage being measured.
:::

## Motion in a uniform magnetic field

:::richiamo{titolo="Lorentz force"}
A charge $q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ experiences a force $\vec{F} = q\,\vec{v} \times \vec{B}$ of magnitude $F = |q|\,v B \sin\varphi$, where $\varphi$ is the angle between $\vec{v}$ and $\vec{B}$. The force is perpendicular to both $\vec{v}$ and $\vec{B}$. For a positive charge its direction is given by the right-hand rule, and for a negative charge it points in the opposite direction. It does no work, so if the Lorentz force acts alone, the speed remains constant. See the chapter on the magnetic field and the Lorentz force.
:::

:::osservazione{#velocita-parallela titolo="Velocity parallel to the field"}
If the velocity is parallel or antiparallel to $\vec{B}$, the angle $\varphi$ is $0$ or $180^\circ$, and $\sin\varphi = 0$. The Lorentz force is therefore zero, and the particle continues in a straight line at constant speed as if there were no field. A proton moving along the field lines of a uniform $0.50\,\mathrm{T}$ field with $v = 1.0 \cdot 10^6\,\mathrm{m/s}$ maintains the same speed and direction.
:::

:::richiamo{titolo="Uniform circular motion"}
An object of mass $m$ moving along a circle of radius $r$ at constant speed $v$ has centripetal acceleration of magnitude $\dfrac{v^2}{r}$ directed toward the center, and its period is $T = \dfrac{2\pi r}{v}$. If an object experiences a force of constant magnitude that always lies in a single plane and is perpendicular to its velocity, the object undergoes uniform circular motion in that plane.
:::

::::teorema{#moto-circolare-campo-magnetico titolo="Circular motion in a uniform magnetic field"}
A particle of mass $m$ and charge $q$ moves with velocity $\vec{v}$ into a uniform magnetic field $\vec{B}$, with $\vec{v}$ perpendicular to $\vec{B}$. The only force acting on it is the Lorentz force. The particle then moves at constant speed in a plane perpendicular to $\vec{B}$, along a circle of radius
$$
r = \frac{m v}{|q|\,B} .
$$
The radius is proportional to the speed and mass and inversely proportional to the magnitude of the charge and the magnetic field strength. For an electron with $v = 1.0 \cdot 10^7\,\mathrm{m/s}$ in a field of $2.0 \cdot 10^{-3}\,\mathrm{T}$, we have
$$
r = \frac{9.11 \cdot 10^{-31} \cdot 1.0 \cdot 10^7}{1.60 \cdot 10^{-19} \cdot 2.0 \cdot 10^{-3}}\,\mathrm{m} \approx 2.8 \cdot 10^{-2}\,\mathrm{m} .
$$

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" legenda=0 vettori="0,-2,-1.4,-2,v;0,-2,0,-0.9,F;-1.73,1,-1.48,1.43" segmenti="0,0,1.414,1.414" punti="0,-2,pieno;0,0,pieno,C" etichette="0.3,-2.45,+q;0.85,0.5,r;-3.17,-3.17,⊙;-3.17,-1.67,⊙;-3.17,-0.17,⊙;-3.17,1.33,⊙;-3.17,2.53,⊙;-1.67,-0.17,⊙;-1.67,2.53,⊙;-0.17,-3.17,⊙;-0.17,1.33,⊙;-0.17,2.53,⊙;1.33,-3.17,⊙;1.33,-0.17,⊙;1.33,2.53,⊙;2.83,-3.17,⊙;2.83,-1.67,⊙;2.83,-0.17,⊙;2.83,1.33,⊙;2.83,2.53,⊙" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3 titolo="In a uniform field directed out of the page ($\odot$), a positive charge travels clockwise around a circle of radius $r = \dfrac{mv}{|q|\,B}$. The Lorentz force always points toward the center $C$"}

:::dimostrazione
The Lorentz force is perpendicular to $\vec{B}$ and therefore has no component along the field. The initial velocity has no component along $\vec{B}$, so this component remains zero and the particle moves in the plane perpendicular to $\vec{B}$.

The Lorentz force does no work, so the speed $v$ remains constant. At every instant $\vec{v}$ is perpendicular to $\vec{B}$, so $\sin\varphi = 1$ and the force has constant magnitude $|q|\,vB$. The force is also always perpendicular to the velocity. By the result for uniform circular motion recalled above, the particle therefore follows a circle, and the Lorentz force is the centripetal force. By Newton’s second law,
$$
|q|\,v B = m\,\frac{v^2}{r} .
$$
Dividing both sides by $v$ and solving for $r$ gives
$$
|q|\,B = \frac{m v}{r}
\quad\Longrightarrow\quad
r = \frac{m v}{|q|\,B} .
$$
:::
::::

::::teorema{#periodo-frequenza-ciclotrone titolo="Period and frequency of circular motion"}
Under the conditions for circular motion in a uniform magnetic field, the period and frequency are
$$
T = \frac{2\pi m}{|q|\,B} ,
\qquad
f = \frac{1}{T} = \frac{|q|\,B}{2\pi m} .
$$
The frequency $f$ is called the **cyclotron frequency**. The period and frequency depend only on the particle and the field. They do *not* depend on the speed. A faster particle follows a larger circle but takes the same time to complete a revolution. The cyclotron relies on this property. For the electron in the preceding example,
$$
T = \frac{2\pi \cdot 9.11 \cdot 10^{-31}}{1.60 \cdot 10^{-19} \cdot 2.0 \cdot 10^{-3}}\,\mathrm{s} \approx 1.8 \cdot 10^{-8}\,\mathrm{s} ,
\qquad
f \approx 5.6 \cdot 10^7\,\mathrm{Hz} .
$$

:::dimostrazione
The motion is uniform and circular, so the period is the time needed to travel around the circumference, $T = \dfrac{2\pi r}{v}$. Substituting the radius $r = \dfrac{m v}{|q|\,B}$ gives
$$
T = \frac{2\pi}{v} \cdot \frac{m v}{|q|\,B} = \frac{2\pi m}{|q|\,B} .
$$
The speed $v$ appears in both the numerator and the denominator and cancels. The frequency is the reciprocal of the period.
:::
::::

:::osservazione{#verso-di-rotazione titolo="Direction of rotation"}
To find the direction of rotation, apply the right-hand rule at a point on the path, requiring that the force point toward the center. As viewed on the page, the following directions result:

- in a field directed **into the page** ($\otimes$), a positive charge rotates counterclockwise and a negative charge clockwise;
- in a field directed **out of the page** ($\odot$), a positive charge rotates clockwise and a negative charge counterclockwise.

In the circular-motion diagram, the positive charge moves to the left at the lowest point. With the right thumb along $\vec{v}$ and the fingers pointing toward the reader along $\vec{B}$, the palm faces the center, so the charge rotates clockwise. An electron at the same position with the same velocity would experience a downward force and rotate counterclockwise.
:::

:::esempio{#raggio-ed-energia titolo="Orbital radius of an accelerated particle"}
A particle often enters the magnetic field after being accelerated from rest through a potential difference $\Delta V$. Its speed is then $v = \sqrt{\dfrac{2\,|q|\,\Delta V}{m}}$. Substitution into the radius formula gives
$$
r = \frac{m}{|q|\,B}\sqrt{\frac{2\,|q|\,\Delta V}{m}} = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} ,
$$
where, in the last step, $m$ and $|q|$ were taken under the square root as $m^2$ and $q^2$. An electron accelerated through $100\,\mathrm{V}$ in a field of $1.0 \cdot 10^{-3}\,\mathrm{T}$ follows a circle of radius
$$
r = \frac{1}{1.0 \cdot 10^{-3}}\sqrt{\frac{2 \cdot 9.11 \cdot 10^{-31} \cdot 100}{1.60 \cdot 10^{-19}}}\,\mathrm{m} \approx 3.4 \cdot 10^{-2}\,\mathrm{m} .
$$
:::

## Helical motion

::::teorema{#moto-elicoidale titolo="Helical motion"}
A particle of mass $m$ and charge $q$ enters a uniform magnetic field $\vec{B}$ with velocity $\vec{v}$. The angle between its velocity and $\vec{B}$ is $\varphi$, different from $0$ and $180^\circ$. The Lorentz force is the only force acting on it. Resolve the velocity into components parallel and perpendicular to the field:
$$
v_\parallel = v \cos\varphi ,
\qquad
v_\perp = v \sin\varphi .
$$
The particle then follows a **helix** with its axis parallel to $\vec{B}$. Its radius $r$, period $T$, and pitch $p$ are given by
$$
r = \frac{m v_\perp}{|q|\,B} ,
\qquad
T = \frac{2\pi m}{|q|\,B} ,
\qquad
p = v_\parallel\, T = \frac{2\pi m\, v_\parallel}{|q|\,B} .
$$
The **pitch** of a helix is the distance traveled along its axis in one revolution. For a proton with $v = 2.0 \cdot 10^6\,\mathrm{m/s}$ at an angle of $60^\circ$ to a field of $0.20\,\mathrm{T}$, we have $v_\perp = 1.73 \cdot 10^6\,\mathrm{m/s}$ and $v_\parallel = 1.0 \cdot 10^6\,\mathrm{m/s}$, so
$$
r = \frac{1.67 \cdot 10^{-27} \cdot 1.73 \cdot 10^6}{1.60 \cdot 10^{-19} \cdot 0.20}\,\mathrm{m} \approx 9.0\,\mathrm{cm} ,
\qquad
T \approx 3.3 \cdot 10^{-7}\,\mathrm{s} ,
\qquad
p \approx 33\,\mathrm{cm} .
$$

::grafico{assi=0 uguale=1 linee="0.000,1.000 0.129,0.991 0.256,0.966 0.380,0.924 0.500,0.866 0.614,0.793 0.720,0.707 0.818,0.609 0.906,0.500 0.984,0.383 1.051,0.259 1.107,0.131 1.150,0.000 1.182,-0.131 1.201,-0.259 1.209,-0.383 1.206,-0.500 1.193,-0.609 1.170,-0.707 1.139,-0.793 1.100,-0.866 1.055,-0.924 1.006,-0.966 0.954,-0.991 0.900,-1.000 0.846,-0.991 0.794,-0.966 0.745,-0.924 0.700,-0.866 0.661,-0.793 0.630,-0.707 0.607,-0.609 0.594,-0.500 0.591,-0.383 0.599,-0.259 0.618,-0.131 0.650,-0.000 0.693,0.131 0.749,0.259 0.816,0.383 0.894,0.500 0.982,0.609 1.080,0.707 1.186,0.793 1.300,0.866 1.420,0.924 1.544,0.966 1.671,0.991 1.800,1.000 1.929,0.991 2.056,0.966 2.180,0.924 2.300,0.866 2.414,0.793 2.520,0.707 2.618,0.609 2.706,0.500 2.784,0.383 2.851,0.259 2.907,0.131 2.950,0.000 2.982,-0.131 3.001,-0.259 3.009,-0.383 3.006,-0.500 2.993,-0.609 2.970,-0.707 2.939,-0.793 2.900,-0.866 2.855,-0.924 2.806,-0.966 2.754,-0.991 2.700,-1.000 2.646,-0.991 2.594,-0.966 2.545,-0.924 2.500,-0.866 2.461,-0.793 2.430,-0.707 2.407,-0.609 2.394,-0.500 2.391,-0.383 2.399,-0.259 2.418,-0.131 2.450,-0.000 2.493,0.131 2.549,0.259 2.616,0.383 2.694,0.500 2.782,0.609 2.880,0.707 2.986,0.793 3.100,0.866 3.220,0.924 3.344,0.966 3.471,0.991 3.600,1.000 3.729,0.991 3.856,0.966 3.980,0.924 4.100,0.866 4.214,0.793 4.320,0.707 4.418,0.609 4.506,0.500 4.584,0.383 4.651,0.259 4.707,0.131 4.750,0.000 4.782,-0.131 4.801,-0.259 4.809,-0.383 4.806,-0.500 4.793,-0.609 4.770,-0.707 4.739,-0.793 4.700,-0.866 4.655,-0.924 4.606,-0.966 4.554,-0.991 4.500,-1.000 4.446,-0.991 4.394,-0.966 4.345,-0.924 4.300,-0.866 4.261,-0.793 4.230,-0.707 4.207,-0.609 4.194,-0.500 4.191,-0.383 4.199,-0.259 4.218,-0.131 4.250,0.000 4.293,0.131 4.349,0.259 4.416,0.383 4.494,0.500 4.582,0.609 4.680,0.707 4.786,0.793 4.900,0.866 5.020,0.924 5.144,0.966 5.271,0.991 5.400,1.000" segmenti="-0.6,0,6.4,0;0,1.3,1.8,1.3;0.9,0,0.9,-1" vettori="3.4,1.9,5.4,1.9,B" etichette="0.75,1.45,p;1.05,-0.55,r" xmin=-1 xmax=6.6 ymin=-1.6 ymax=2.4 titolo="When the velocity is at an oblique angle to $\vec{B}$, the particle follows a helix with its axis parallel to the field, radius $r = \dfrac{m v_\perp}{|q|\,B}$, and pitch $p = v_\parallel\, T$"}

:::dimostrazione
Consider the motion along the field separately from the motion in the plane perpendicular to it. The velocity is the sum $\vec{v} = \vec{v}_\parallel + \vec{v}_\perp$, so the Lorentz force is
$$
\vec{F} = q\,\vec{v}_\parallel \times \vec{B} + q\,\vec{v}_\perp \times \vec{B} = q\,\vec{v}_\perp \times \vec{B} ,
$$
because $\vec{v}_\parallel$ is parallel to $\vec{B}$ and its cross product with $\vec{B}$ is zero.

- The force is perpendicular to $\vec{B}$, so there is no acceleration along the field. Consequently, $v_\parallel$ remains constant and motion along the axis is at constant velocity.
- The speed $v$ remains constant because the Lorentz force does no work, and $v_\parallel$ is also constant. Since $v_\perp^2 = v^2 - v_\parallel^2$, $v_\perp$ is constant as well. In the plane perpendicular to the field, the motion is therefore that of a particle with velocity $v_\perp$ perpendicular to $\vec{B}$: uniform circular motion of radius $\dfrac{m v_\perp}{|q|\,B}$ and period $\dfrac{2\pi m}{|q|\,B}$.

Combining uniform circular motion in the plane perpendicular to $\vec{B}$ with motion at constant velocity along $\vec{B}$ produces a helix. In one period $T$, the particle advances along the axis by $v_\parallel\,T$, the pitch of the helix.
:::
::::

:::osservazione{#fasce-van-allen-aurore titolo="Van Allen belts and polar auroras"}
Charged particles arriving from the Sun, mainly electrons and protons, enter Earth’s magnetic field with velocities at oblique angles to the field lines, so they spiral around those lines. For an electron of energy $1.0\,\mathrm{keV}$, with $v \approx 1.9 \cdot 10^7\,\mathrm{m/s}$, in a field of $5.0 \cdot 10^{-5}\,\mathrm{T}$, the radius is at most
$$
r = \frac{m_e v}{e B} = \frac{9.11 \cdot 10^{-31} \cdot 1.87 \cdot 10^7}{1.60 \cdot 10^{-19} \cdot 5.0 \cdot 10^{-5}}\,\mathrm{m} \approx 2.1\,\mathrm{m} ,
$$
which is very small compared with the size of Earth, so the electron closely follows the field line. Some particles are trapped in the **Van Allen belts**, two doughnut-shaped regions surrounding Earth. There they spiral back and forth between regions near the poles, where the field is stronger. Other particles follow field lines down toward the polar regions, reach the upper atmosphere, and collide with oxygen and nitrogen atoms, exciting them. The atoms emit light, producing the **polar auroras**.
:::

## Velocity selector

::::teorema{#selettore-di-velocita titolo="Velocity selector"}
A region contains a uniform electric field $\vec{E}$ and a uniform magnetic field $\vec{B}$ perpendicular to each other (**crossed fields**). A charged particle enters the region with velocity $\vec{v}$ perpendicular to both fields, moving in the direction for which the electric and magnetic forces oppose one another. The particle then crosses the region in a straight line without deflection if and only if
$$
v = \frac{E}{B} .
$$
A slit at the exit admits only particles traveling at speed $\dfrac{E}{B}$, regardless of their mass or charge. For plates separated by $1.5\,\mathrm{cm}$ with $\Delta V = 300\,\mathrm{V}$, the electric field is $E = \dfrac{300}{0.015}\,\mathrm{V/m} = 2.0 \cdot 10^4\,\mathrm{V/m}$. With $B = 0.050\,\mathrm{T}$, the particles that pass through have
$$
v = \frac{2.0 \cdot 10^4}{0.050}\,\mathrm{m/s} = 4.0 \cdot 10^5\,\mathrm{m/s} .
$$

::grafico{assi=0 uguale=1 linee="0,1.2 6,1.2;0,-1.2 6,-1.2;7,-1.5 7,-0.15;7,0.15 7,1.5" curve="t,0.03*t^2,0,6;t,-0.03*t^2,0,6" legenda=0 segmenti="-1.4,0,8,0" vettori="-1.2,0,0,0,v;3,0,3,0.9,qvB;3,0,3,-0.9,qE" punti="3,0,pieno" etichette="0.6,1.4,+;1.8,1.4,+;3,1.4,+;4.2,1.4,+;5.4,1.4,+;0.6,-1.7,−;1.8,-1.7,−;3,-1.7,−;4.2,-1.7,−;5.4,-1.7,−;0.63,0.48,⊗;0.63,-0.82,⊗;1.73,0.48,⊗;1.73,-0.82,⊗;5.23,0.18,⊗;5.23,-0.52,⊗;7.2,1.2,slit" xmin=-1.6 xmax=8.4 ymin=-2.1 ymax=1.9 titolo="In the velocity selector the electric force $q\vec{E}$ and the magnetic Lorentz force $q\vec{v} \times \vec{B}$ point in opposite directions. Only a particle with $v = \dfrac{E}{B}$ travels straight through the slit. Faster particles curve upward, and slower particles curve downward"}

:::dimostrazione
The vectors $\vec{v}$, $\vec{E}$, and $\vec{B}$ are mutually perpendicular. The magnetic Lorentz force, perpendicular to $\vec{v}$ and $\vec{B}$, therefore acts along the same line as $\vec{E}$ and has magnitude $|q|\,vB$, while the electric force has magnitude $|q|\,E$. Because of the chosen direction of $\vec{v}$, the two forces point in opposite directions. The particle continues in a straight line at constant speed if and only if the net force is zero, that is,
$$
|q|\,E = |q|\,v B
\quad\Longleftrightarrow\quad
v = \frac{E}{B} .
$$
The charge $|q|$ cancels, and the mass does not appear, so the condition is the same for all particles. If $v > \dfrac{E}{B}$, the magnetic force is greater than the electric force, and the particle curves in the direction of the magnetic force. If $v < \dfrac{E}{B}$, the opposite occurs.
:::
::::

:::osservazione{#selettore-segno-carica titolo="The selector and the sign of the charge"}
In the diagram of the selector, for a proton moving to the right in a magnetic field directed into the page, the right-hand rule gives an upward magnetic force. The electric field points downward from the positive plate to the negative plate, so the electric force points downward. For an electron with the same velocity, both forces reverse direction and still oppose each other, so the electron also travels straight through the selector if $v = \dfrac{E}{B}$.
:::

## Thomson’s experiment and the charge-to-mass ratio

:::osservazione{#esperimento-thomson titolo="Thomson’s experiment"}
In 1897 J. J. Thomson studied **cathode rays**, the beams that emerge from the cathode of an evacuated glass tube when a high potential difference is applied between the cathode and the anode. The beam, accelerated toward the anode, passed between two plates and through a region where the magnetic field was perpendicular to the electric field, and struck a fluorescent screen.

With this apparatus Thomson measured the charge-to-mass ratio of the particles in the beam. He found the same value with cathodes made of different metals and with different gases in the tube. The ratio was more than a thousand times that of the hydrogen ion. He concluded that cathode rays consist of negatively charged particles much lighter than atoms and present in all atoms. These particles are **electrons**.
:::

::::teorema{#misura-e-su-m titolo="Measuring the electron’s charge-to-mass ratio"}
An electron beam crosses a region of length $L$ with crossed fields $\vec{E}$ and $\vec{B}$. The fields are adjusted so the beam is undeflected. The magnetic field is then switched off, and the displacement $y$ of the beam at the exit is measured. Then
$$
\frac{e}{m_e} = \frac{2\, y\, E}{B^2 L^2} .
$$
With $E = 1.0 \cdot 10^4\,\mathrm{V/m}$, $B = 5.0 \cdot 10^{-4}\,\mathrm{T}$, $L = 5.0\,\mathrm{cm}$, and $y = 5.5\,\mathrm{mm}$, we obtain
$$
\frac{e}{m_e} = \frac{2 \cdot 5.5 \cdot 10^{-3} \cdot 1.0 \cdot 10^4}{(5.0 \cdot 10^{-4})^2 \cdot (0.050)^2}\,\mathrm{C/kg} \approx 1.76 \cdot 10^{11}\,\mathrm{C/kg} ,
$$
in agreement with the value $\dfrac{1.60 \cdot 10^{-19}}{9.11 \cdot 10^{-31}}\,\mathrm{C/kg} \approx 1.76 \cdot 10^{11}\,\mathrm{C/kg}$ obtained from current physical constants.

:::dimostrazione
When the beam is undeflected, the crossed fields act as a velocity selector, so the speed of the electrons is $v = \dfrac{E}{B}$.

With the electric field alone, the electrons enter perpendicular to the field. From the expression for deflection in a uniform electric field, their displacement at the exit is
$$
y = \frac{e\,E\,L^2}{2 m_e v^2} .
$$
Substituting $v^2 = \dfrac{E^2}{B^2}$ gives
$$
y = \frac{e\,E\,L^2}{2 m_e} \cdot \frac{B^2}{E^2} = \frac{e}{m_e} \cdot \frac{B^2 L^2}{2E} .
$$
Multiplying both sides by $\dfrac{2E}{B^2 L^2}$ gives the formula for $\dfrac{e}{m_e}$.
:::
::::

:::esempio{#e-su-m-con-il-raggio titolo="Charge-to-mass ratio from the orbital radius"}
Alternatively, the electric field can be switched off, leaving only the magnetic field on. The electrons, traveling at speed $v = \dfrac{E}{B}$, then follow a circle of radius $r = \dfrac{m_e v}{e B}$. Substituting the speed gives
$$
r = \frac{m_e E}{e B^2}
\quad\Longrightarrow\quad
\frac{e}{m_e} = \frac{E}{B^2 r} .
$$
With the fields in the preceding example, the measurement gives $r \approx 22.8\,\mathrm{cm}$, yielding $\dfrac{e}{m_e} = \dfrac{1.0 \cdot 10^4}{(5.0 \cdot 10^{-4})^2 \cdot 0.228}\,\mathrm{C/kg} \approx 1.75 \cdot 10^{11}\,\mathrm{C/kg}$. For a proton the ratio is $\dfrac{e}{m_p} \approx 9.58 \cdot 10^{7}\,\mathrm{C/kg}$, smaller by a factor of about $1800$ because $\dfrac{m_p}{m_e} \approx 1833$. Millikan’s later measurement of the charge $e$ made it possible to determine the electron mass from this ratio.
:::

## Mass spectrometer and isotopes

::::teorema{#spettrometro-di-massa titolo="Mass spectrometer"}
Ions of mass $m$ and charge $q$, initially moving at negligible speed, are accelerated through a potential difference $\Delta V$. They pass through a slit into a uniform magnetic field $\vec{B}$ perpendicular to their velocity. After half a revolution, the ions strike a plate in the same plane as the slit at a distance $D = 2r$ from it, where
$$
r = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} ,
\qquad
m = \frac{|q|\,B^2 D^2}{8\,\Delta V} .
$$
A **mass spectrometer** thus determines the mass of an ion from where it strikes the plate. For a given charge, heavier ions follow larger semicircles, so ions of different masses strike the plate at different points.

::grafico{assi=0 uguale=1 curve="1.8-1.8*cos(t),1.8*sin(t),0,3.1416;2.2-2.2*cos(t),2.2*sin(t),0,3.1416" legenda=0 linee="-1.2,0 -0.15,0;0.15,0 5.2,0;-0.8,-1.8 0.8,-1.8;-0.8,-0.9 -0.15,-0.9;0.15,-0.9 0.8,-0.9" vettori="0,-0.75,0,-0.1,v" punti="3.6,0,pieno,m₁;4.4,0,pieno,m₂;0,0,vuoto,O" segmenti="1.8,0,1.8,1.8" etichette="1.9,0.9,r₁;1,-1.45,ΔV;-0.97,0.33,⊙;-0.97,1.63,⊙;0.83,0.43,⊙;2.83,0.43,⊙;1.83,2.53,⊙;4.63,0.43,⊙;4.63,1.63,⊙;3.53,2.53,⊙;4.6,-0.5,plate" xmin=-1.4 xmax=5.4 ymin=-2.1 ymax=3 titolo="Mass spectrometer with the field directed out of the page ($\odot$). Positive ions accelerated through $\Delta V$ enter at $O$ and strike the plate after half a revolution at a distance $2r$ from the slit. The heavier ion, $m_2 > m_1$, follows the larger semicircle"}

:::dimostrazione
From the result for a particle accelerated between two plates, the ion enters the magnetic field with speed $v = \sqrt{\dfrac{2\,|q|\,\Delta V}{m}}$. Its velocity is perpendicular to $\vec{B}$, so the result for circular motion in a uniform magnetic field gives a circle of radius $r = \dfrac{m v}{|q|\,B}$. Substituting the speed, as in the example on the orbital radius of an accelerated particle, gives
$$
r = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} .
$$
After half a revolution the ion is at the point diametrically opposite the slit, a distance $D = 2r$ away. To find the mass, square $r = \dfrac{D}{2}$:
$$
\frac{D^2}{4} = \frac{2 m\,\Delta V}{|q|\,B^2}
\quad\Longrightarrow\quad
m = \frac{|q|\,B^2 D^2}{8\,\Delta V} .
$$
:::
::::

:::definizione{#isotopi titolo="Isotopes"}
**Isotopes** of an element are atoms with the same number of protons in the nucleus but different numbers of neutrons. They have the same chemical properties because they have the same number of electrons, but their masses differ. The total number of protons and neutrons is called the mass number $A$, and the mass of an atom is approximately $A$ times the **atomic mass unit**, $1\,\mathrm{u} = 1.66 \cdot 10^{-27}\,\mathrm{kg}$. For example, natural neon consists mainly of neon-20 and neon-22, with masses of about $20\,\mathrm{u}$ and $22\,\mathrm{u}$. A mass spectrometer separates isotopes because the radius of the path depends on the mass.
:::

:::esempio{#separazione-isotopi titolo="Separating neon isotopes"}
Ions $^{20}\mathrm{Ne}^+$ and $^{22}\mathrm{Ne}^+$, each with charge $e$, are accelerated through $\Delta V = 1.0\,\mathrm{kV}$ and enter a field of $0.20\,\mathrm{T}$. For neon-20, with $m = 20 \cdot 1.66 \cdot 10^{-27}\,\mathrm{kg} = 3.32 \cdot 10^{-26}\,\mathrm{kg}$,
$$
r_{20} = \frac{1}{0.20}\sqrt{\frac{2 \cdot 3.32 \cdot 10^{-26} \cdot 1.0 \cdot 10^3}{1.60 \cdot 10^{-19}}}\,\mathrm{m} \approx 10.19\,\mathrm{cm} ,
$$
and similarly $r_{22} \approx 10.68\,\mathrm{cm}$. The impact points are $2\,(r_{22} - r_{20}) \approx 9.9\,\mathrm{mm}$ apart. The radius is proportional to $\sqrt{m}$, so the ratio of the radii is $\sqrt{\dfrac{22}{20}} \approx 1.05$.
:::

:::osservazione{#spettrometro-con-selettore titolo="Mass spectrometer with a velocity selector"}
If the ions first pass through a velocity selector, they all have $v = \dfrac{E}{B}$ as they enter the second magnetic field $B'$. The radius $r = \dfrac{m v}{|q|\,B'}$ is then *directly* proportional to the mass. With $v = 2.0 \cdot 10^5\,\mathrm{m/s}$ and $B' = 0.40\,\mathrm{T}$, the ions $^{16}\mathrm{O}^+$ and $^{18}\mathrm{O}^+$ have radii of $8.30\,\mathrm{cm}$ and $9.34\,\mathrm{cm}$, and the impact points are $2.1\,\mathrm{cm}$ apart.
:::

## Cyclotron

:::definizione{#ciclotrone titolo="Cyclotron"}
A **cyclotron** is a particle accelerator consisting of two hollow D-shaped electrodes, called *dees*, facing each other across a narrow gap along their common diameter. They are placed in a uniform magnetic field $\vec{B}$ perpendicular to their plane. An alternating potential difference $\Delta V$ is applied between the electrodes. The ions start at a source near the center.

- Inside each electrode the electric field is zero, so the ion follows a semicircle in the magnetic field alone.
- Each time it crosses the gap, the ion is accelerated by the electric field and gains energy $|q|\,\Delta V$, so the next semicircle has a larger radius.

From the period and frequency of circular motion, the time for half a revolution is the same at every radius. If the alternating voltage oscillates at the cyclotron frequency $f = \dfrac{|q|\,B}{2\pi m}$, the field in the gap therefore points in the direction that accelerates the ion at each crossing. The path is a spiral consisting of semicircles of increasing radius. For protons in a field of $1.0\,\mathrm{T}$, the voltage must oscillate at $f = \dfrac{1.60 \cdot 10^{-19} \cdot 1.0}{2\pi \cdot 1.67 \cdot 10^{-27}}\,\mathrm{Hz} \approx 1.5 \cdot 10^{7}\,\mathrm{Hz}$, a radio frequency.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="0.150,2.100 0.315,2.094 0.479,2.074 0.640,2.042 0.799,1.997 0.954,1.940 1.103,1.871 1.247,1.791 1.384,1.699 1.514,1.597 1.635,1.485 1.747,1.364 1.849,1.234 1.941,1.097 2.021,0.953 2.090,0.804 2.147,0.649 2.192,0.490 2.224,0.329 2.244,0.165 2.250,0.000 2.244,-0.165 2.224,-0.329 2.192,-0.490 2.147,-0.649 2.090,-0.804 2.021,-0.953 1.941,-1.097 1.849,-1.234 1.747,-1.364 1.635,-1.485 1.514,-1.597 1.384,-1.699 1.247,-1.791 1.103,-1.871 0.954,-1.940 0.799,-1.997 0.640,-2.042 0.479,-2.074 0.315,-2.094 0.150,-2.100;-0.150,2.100 -0.315,2.094 -0.479,2.074 -0.640,2.042 -0.799,1.997 -0.954,1.940 -1.103,1.871 -1.247,1.791 -1.384,1.699 -1.514,1.597 -1.635,1.485 -1.747,1.364 -1.849,1.234 -1.941,1.097 -2.021,0.953 -2.090,0.804 -2.147,0.649 -2.192,0.490 -2.224,0.329 -2.244,0.165 -2.250,0.000 -2.244,-0.165 -2.224,-0.329 -2.192,-0.490 -2.147,-0.649 -2.090,-0.804 -2.021,-0.953 -1.941,-1.097 -1.849,-1.234 -1.747,-1.364 -1.635,-1.485 -1.514,-1.597 -1.384,-1.699 -1.247,-1.791 -1.103,-1.871 -0.954,-1.940 -0.799,-1.997 -0.640,-2.042 -0.479,-2.074 -0.315,-2.094 -0.150,-2.100" linee="0.150,0.620 0.231,0.615 0.310,0.599 0.387,0.573 0.460,0.537 0.527,0.492 0.588,0.438 0.642,0.377 0.687,0.310 0.723,0.237 0.749,0.160 0.765,0.081 0.770,0.000 0.765,-0.081 0.749,-0.160 0.723,-0.237 0.687,-0.310 0.642,-0.377 0.588,-0.438 0.527,-0.492 0.460,-0.537 0.387,-0.573 0.310,-0.599 0.231,-0.615 0.150,-0.620 -0.150,-0.620 -0.264,-0.612 -0.377,-0.590 -0.486,-0.553 -0.588,-0.503 -0.684,-0.439 -0.770,-0.363 -0.846,-0.277 -0.909,-0.182 -0.960,-0.079 -0.997,0.030 -1.019,0.142 -1.027,0.257 -1.019,0.371 -0.997,0.484 -0.960,0.592 -0.909,0.695 -0.846,0.791 -0.770,0.877 -0.684,0.952 -0.588,1.016 -0.486,1.067 -0.377,1.104 -0.264,1.126 -0.150,1.134 0.150,1.134 0.290,1.124 0.428,1.097 0.561,1.052 0.687,0.990 0.804,0.912 0.909,0.819 1.002,0.713 1.080,0.597 1.142,0.471 1.187,0.338 1.215,0.200 1.224,0.060 1.215,-0.080 1.187,-0.218 1.142,-0.351 1.080,-0.477 1.002,-0.594 0.909,-0.700 0.804,-0.792 0.687,-0.870 0.561,-0.932 0.428,-0.978 0.290,-1.005 0.150,-1.014 -0.150,-1.014 -0.312,-1.004 -0.471,-0.972 -0.625,-0.920 -0.770,-0.848 -0.905,-0.758 -1.027,-0.651 -1.134,-0.529 -1.224,-0.394 -1.296,-0.249 -1.348,-0.095 -1.379,0.064 -1.390,0.226 -1.379,0.388 -1.348,0.547 -1.296,0.700 -1.224,0.846 -1.134,0.981 -1.027,1.103 -0.905,1.210 -0.770,1.300 -0.625,1.371 -0.471,1.424 -0.312,1.455 -0.150,1.466 0.150,1.466 0.331,1.454 0.509,1.419 0.681,1.360 0.843,1.280 0.994,1.179 1.130,1.060 1.250,0.923 1.351,0.773 1.431,0.610 1.489,0.438 1.525,0.260 1.536,0.080 1.525,-0.101 1.489,-0.279 1.431,-0.451 1.351,-0.614 1.250,-0.764 1.130,-0.901 0.994,-1.020 0.843,-1.121 0.681,-1.201 0.509,-1.260 0.331,-1.295 0.150,-1.307 -0.150,-1.307 -0.348,-1.294 -0.543,-1.255 -0.731,-1.191 -0.909,-1.103 -1.075,-0.993 -1.224,-0.862 -1.355,-0.713 -1.465,-0.548 -1.553,-0.369 -1.617,-0.181 -1.656,0.014 -1.669,0.212 -1.656,0.410 -1.617,0.605 -1.553,0.793 -1.465,0.971 -1.355,1.136 -1.224,1.286 -1.075,1.417 -0.909,1.527 -0.731,1.615 -0.543,1.679 -0.348,1.718 -0.150,1.731 0.150,1.731 0.364,1.716 0.575,1.675 0.778,1.606 0.970,1.511 1.149,1.392 1.310,1.250 1.451,1.089 1.571,0.910 1.666,0.718 1.734,0.515 1.776,0.304 1.790,0.090 1.776,-0.124 1.734,-0.334 1.666,-0.538 1.571,-0.730 1.451,-0.908 1.310,-1.070 1.149,-1.211 0.970,-1.330 0.778,-1.425 0.575,-1.494 0.364,-1.536 0.150,-1.550 -0.150,-1.550" vettori="-0.150,-1.550,-1.3,-1.550,v" punti="0,0.62,pieno,S" etichette="1.6,1.8,D₁;-2.0,1.8,D₂;-0.35,2.35,ΔV" xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.6 titolo="Top view of a cyclotron, with $\vec{B}$ perpendicular to the page. The ion starts at $S$, accelerates each time it crosses the gap between the electrodes, and follows semicircles of increasing radius, each in the same time $\dfrac{T}{2}$"}

:::

::::teorema{#energia-massima-ciclotrone titolo="Maximum energy in a cyclotron"}
In a cyclotron of radius $R$ with a magnetic field $B$, an ion of mass $m$ and charge $q$ exits with speed and kinetic energy
$$
v_{\max} = \frac{|q|\,B R}{m} ,
\qquad
K_{\max} = \frac{q^2 B^2 R^2}{2m} ,
$$
which are independent of the voltage $\Delta V$. In one revolution the ion gains $2\,|q|\,\Delta V$, so the number of revolutions needed to reach $K_{\max}$ is $\dfrac{K_{\max}}{2\,|q|\,\Delta V}$. For protons with $B = 1.0\,\mathrm{T}$ and $R = 0.30\,\mathrm{m}$, this gives
$$
v_{\max} = \frac{1.60 \cdot 10^{-19} \cdot 1.0 \cdot 0.30}{1.67 \cdot 10^{-27}}\,\mathrm{m/s} \approx 2.9 \cdot 10^7\,\mathrm{m/s} ,
\qquad
K_{\max} \approx 6.9 \cdot 10^{-13}\,\mathrm{J} \approx 4.3\,\mathrm{MeV} .
$$
With $\Delta V = 20\,\mathrm{kV}$, each revolution provides $40\,\mathrm{keV}$, so approximately $108$ revolutions are needed.

:::dimostrazione
The final semicircle before the ion exits has the cyclotron radius $R$. For circular motion in a uniform magnetic field, $R = \dfrac{m v_{\max}}{|q|\,B}$, so $v_{\max} = \dfrac{|q|\,B R}{m}$. The corresponding kinetic energy is
$$
K_{\max} = \frac{1}{2}\, m\, v_{\max}^2 = \frac{1}{2}\, m \cdot \frac{q^2 B^2 R^2}{m^2} = \frac{q^2 B^2 R^2}{2m} .
$$
The ion crosses the gap twice per revolution. From the result for a particle accelerated between two plates, each crossing supplies energy $|q|\,\Delta V$, so a full revolution supplies $2\,|q|\,\Delta V$.
:::
::::

:::osservazione{#limite-ciclotrone titolo="Relativistic limit of the cyclotron"}
In the example, the proton exits with $v \approx 0.096\,c$, so classical mechanics applies. At higher energies, the orbital period increases with energy, as predicted by relativity, and the ion arrives at the gap out of phase with the voltage. This limits a cyclotron to proton energies of at most a few tens of megaelectronvolts. Cyclotrons are used in hospitals to produce radioactive isotopes and for proton-beam cancer therapy.
:::

## Hall effect

:::richiamo{titolo="Current and drift speed"}
In a conductor containing $n$ charge carriers per unit volume, each with charge of magnitude $e$ and moving at drift speed $v_d$, the current through a cross section of area $A$ is $I = n\, e\, v_d\, A$.
:::

::::teorema{#tensione-di-hall titolo="Hall effect"}
A conducting strip of width $w$ and thickness $s$ has $n$ charge carriers per unit volume, each with charge of magnitude $e$. A current $I$ flows along the strip, and a uniform magnetic field $\vec{B}$ is applied perpendicular to its surface. A potential difference called the **Hall voltage** then develops between the two edges of the strip:
$$
\Delta V_H = \frac{I B}{n\, e\, s} .
$$
This phenomenon is called the **Hall effect**. The voltage is small in metals, where $n$ is very large, and much larger in semiconductors. For a copper strip with $n = 8.5 \cdot 10^{28}\,\mathrm{m^{-3}}$ and $s = 0.20\,\mathrm{mm}$ carrying a current $10\,\mathrm{A}$ in a field of $0.80\,\mathrm{T}$, the Hall voltage is
$$
\Delta V_H = \frac{10 \cdot 0.80}{8.5 \cdot 10^{28} \cdot 1.60 \cdot 10^{-19} \cdot 2.0 \cdot 10^{-4}}\,\mathrm{V} \approx 2.9 \cdot 10^{-6}\,\mathrm{V} .
$$
For a known material, measuring $\Delta V_H$ gives the value of $B$. **Hall probes** use this principle to measure magnetic fields.

::grafico{assi=0 uguale=1 poligoni="0,-1.1 6.4,-1.1 6.4,1.1 0,1.1" linee="-1.4,0 0,0;6.4,0 7.6,0" vettori="-1.3,0.25,-0.2,0.25,I;3,0,4.2,0,v;3,0,3,0.8,F;5,0.6,5,-0.4,Eₕ" punti="3,0,pieno" etichette="0.6,0.75,+;1.6,0.75,+;2.6,0.75,+;3.6,0.75,+;4.6,0.75,+;5.6,0.75,+;0.6,-0.95,−;1.6,-0.95,−;2.6,-0.95,−;3.6,-0.95,−;4.6,-0.95,−;5.6,-0.95,−;0.33,1.43,⊗;0.33,-1.77,⊗;1.83,1.43,⊗;1.83,-1.77,⊗;3.33,1.43,⊗;3.33,-1.77,⊗;4.83,1.43,⊗;4.83,-1.77,⊗;6.6,-0.6,w" xmin=-1.6 xmax=7.8 ymin=-2.1 ymax=2.1 titolo="Hall effect with positive carriers in a field directed into the page ($\otimes$). The Lorentz force drives the carriers toward the top edge, which becomes positively charged, and a downward Hall field $\vec{E}_H$ develops"}

:::dimostrazione
The carriers move along the strip at drift speed $v_d$, perpendicular to $\vec{B}$, so they experience a magnetic Lorentz force of magnitude $e\, v_d B$ directed across the width of the strip. The carriers therefore accumulate along one edge, leaving a charge of the opposite sign along the other edge. These charges produce an electric field $\vec{E}_H$ between the edges, the **Hall field**, which exerts a force on the carriers opposite to the magnetic force. Charge continues to accumulate until the two forces are equal in magnitude, so at equilibrium
$$
e\, E_H = e\, v_d B
\quad\Longrightarrow\quad
E_H = v_d B .
$$
The Hall field is uniform across the width $w$, so the voltage between the edges is $\Delta V_H = E_H\, w = v_d B w$. The cross-sectional area of the strip is $A = w s$, so the relation for drift speed gives $v_d = \dfrac{I}{n\, e\, w s}$. Substitution yields
$$
\Delta V_H = \frac{I}{n\, e\, w s} \cdot B w = \frac{I B}{n\, e\, s} .
$$
:::
::::

:::osservazione{#segno-dei-portatori titolo="Sign of the charge carriers"}
For the same current, positive carriers move in the direction of the current and negative carriers move in the opposite direction. In the Lorentz force $q\,\vec{v}_d \times \vec{B}$, both $q$ and $\vec{v}_d$ change sign, so the force points in the *same* direction in both cases, and the carriers accumulate on the same edge. The sign of the charge on that edge is the sign of the carriers. In the Hall-effect diagram, if the carriers are positive, the top edge is positive and at higher potential. If the carriers are negative, the top edge is negative and at lower potential. The sign of the Hall voltage therefore reveals the sign of the carriers. In metals such as copper, measurements indicate negative carriers, the electrons. In $p$-type semiconductors, they indicate positive carriers called *holes*.
:::
