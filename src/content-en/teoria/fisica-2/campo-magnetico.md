---
titolo: Magnetic field and Lorentz force
sommario: How a magnetic field acts on moving charges and on currents, from the Lorentz force to the circular and helical motion of particles, the velocity selector, the mass spectrometer and the Hall effect, up to the force on a wire and the torque on a loop, described by the magnetic moment.
---

## Magnetic field and field lines

Throughout this topic the magnetic field is given and constant in time, the reference frame is inertial, and the speeds of the particles are small compared with the speed of light. The currents that produce the field are treated in the topic on the sources of the magnetic field.

:::definizione{#campo-magnetico titolo="Magnetic field"}
There is a **magnetic field** in a region of space if a moving charge in it experiences, in addition to any electric force, a force that depends on its velocity. Experimentally, at each point there is a direction along which a moving charge does not experience this force; for a velocity perpendicular to that direction the force has its maximum magnitude $F_{\max}$, proportional to the charge $q$ and to the speed $v$. The magnetic field $\vec{B}$ is the vector that has that direction and magnitude
$$
B = \frac{F_{\max}}{|q|\,v} ,
$$
while its sense is fixed by the Lorentz force law. In the International System the magnetic field is measured in **teslas**, $1\,\mathrm{T} = 1\,\mathrm{N \cdot s/(C \cdot m)} = 1\,\mathrm{N/(A \cdot m)}$; the gauss is also used, $1\,\mathrm{G} = 10^{-4}\,\mathrm{T}$. The Earth's magnetic field has a magnitude of the order of $5 \cdot 10^{-5}\,\mathrm{T}$, a laboratory magnet produces fields of the order of $0.1\,\mathrm{T}$ near its poles, and magnets for magnetic resonance imaging reach a few teslas.
:::

:::definizione{#linee-di-campo-magnetico titolo="Magnetic field lines"}
The **magnetic field lines** are oriented curves tangent at each point to $\vec{B}$ and with the same sense; where the lines are denser the field is stronger. A small magnetic needle free to rotate aligns itself along the field line, and its north pole indicates the sense of the line. Outside a magnet the lines leave the north pole and enter the south pole, and inside they continue from the south pole to the north pole; the magnetic field lines are therefore **closed**.

The electrostatic field has lines that start on positive charges and end on negative ones. The closed lines of the magnetic field correspond instead to the absence of isolated magnetic charges; indeed, breaking a magnet yields two magnets, each with a north pole and a south pole. The quantitative form of this property, Gauss's law for the magnetic field, is treated in the topic on the sources of the magnetic field.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="-0.45,-1.3 0.45,-1.3 0.45,1.3 -0.45,1.3" linee="0.461,0.625 0.586,0.697 0.724,0.758 0.871,0.805 1.026,0.835 1.185,0.847 1.344,0.838 1.5,0.809 1.648,0.76 1.785,0.69 1.907,0.603 2.011,0.5 2.094,0.382 2.155,0.255 2.19,0.121 2.2,-0.017 2.184,-0.155 2.142,-0.288 2.076,-0.413 1.987,-0.527 1.878,-0.627 1.752,-0.71 1.612,-0.774 1.461,-0.818 1.304,-0.842 1.145,-0.846 0.987,-0.829 0.833,-0.795 0.688,-0.744 0.554,-0.68 0.461,-0.625;-0.461,0.625 -0.586,0.697 -0.724,0.758 -0.871,0.805 -1.026,0.835 -1.185,0.847 -1.344,0.838 -1.5,0.809 -1.648,0.76 -1.785,0.69 -1.907,0.603 -2.011,0.5 -2.094,0.382 -2.155,0.255 -2.19,0.121 -2.2,-0.017 -2.184,-0.155 -2.142,-0.288 -2.076,-0.413 -1.987,-0.527 -1.878,-0.627 -1.752,-0.71 -1.612,-0.774 -1.461,-0.818 -1.304,-0.842 -1.145,-0.846 -0.987,-0.829 -0.833,-0.795 -0.688,-0.744 -0.554,-0.68 -0.461,-0.625;0.467,0.775 0.625,0.904 0.807,1.023 1.01,1.127 1.231,1.211 1.465,1.271 1.708,1.304 1.954,1.306 2.198,1.277 2.434,1.216 2.655,1.124 2.856,1.003 3.031,0.855 3.177,0.684 3.288,0.494 3.362,0.291 3.397,0.08 3.392,-0.133 3.347,-0.343 3.263,-0.543 3.143,-0.729 2.99,-0.894 2.808,-1.036 2.601,-1.15 2.376,-1.234 2.138,-1.287 1.893,-1.308 1.647,-1.298 1.405,-1.259 1.174,-1.192 0.957,-1.103 0.759,-0.995 0.583,-0.873 0.467,-0.775;-0.467,0.775 -0.625,0.904 -0.807,1.023 -1.01,1.127 -1.231,1.211 -1.465,1.271 -1.708,1.304 -1.954,1.306 -2.198,1.277 -2.434,1.216 -2.655,1.124 -2.856,1.003 -3.031,0.855 -3.177,0.684 -3.288,0.494 -3.362,0.291 -3.397,0.08 -3.392,-0.133 -3.347,-0.343 -3.263,-0.543 -3.143,-0.729 -2.99,-0.894 -2.808,-1.036 -2.601,-1.15 -2.376,-1.234 -2.138,-1.287 -1.893,-1.308 -1.647,-1.298 -1.405,-1.259 -1.174,-1.192 -0.957,-1.103 -0.759,-0.995 -0.583,-0.873 -0.467,-0.775;0.468,0.918 0.66,1.115 0.888,1.307 1.151,1.484 1.446,1.64 1.768,1.768 2.11,1.86 2.467,1.913 2.829,1.923 3.189,1.886 3.537,1.802 3.865,1.673 4.165,1.499 4.428,1.286 4.647,1.039 4.818,0.763 4.934,0.466 4.993,0.157 4.993,-0.157 4.934,-0.466 4.818,-0.763 4.647,-1.039 4.428,-1.286 4.165,-1.499 3.865,-1.673 3.537,-1.802 3.189,-1.886 2.829,-1.923 2.467,-1.913 2.11,-1.86 1.768,-1.768 1.446,-1.64 1.151,-1.484 0.888,-1.307 0.66,-1.115 0.468,-0.918 0.468,-0.918;-0.468,0.918 -0.66,1.115 -0.888,1.307 -1.151,1.484 -1.446,1.64 -1.768,1.768 -2.11,1.86 -2.467,1.913 -2.829,1.923 -3.189,1.886 -3.537,1.802 -3.865,1.673 -4.165,1.499 -4.428,1.286 -4.647,1.039 -4.818,0.763 -4.934,0.466 -4.993,0.157 -4.993,-0.157 -4.934,-0.466 -4.818,-0.763 -4.647,-1.039 -4.428,-1.286 -4.165,-1.499 -3.865,-1.673 -3.537,-1.802 -3.189,-1.886 -2.829,-1.923 -2.467,-1.913 -2.11,-1.86 -1.768,-1.768 -1.446,-1.64 -1.151,-1.484 -0.888,-1.307 -0.66,-1.115 -0.468,-0.918 -0.468,-0.918;0,1.3 0,3;0,-3 0,-1.3" vettori="2.2,0.35,2.2,-0.35;-2.2,0.35,-2.2,-0.35;3.4,0.35,3.4,-0.35;-3.4,0.35,-3.4,-0.35;5,0.35,5,-0.35;-5,0.35,-5,-0.35;0,2.0,0,2.6;0,-2.6,0,-2.0" etichette="-0.17,0.55,N;-0.15,-0.85,S" xmin=-5.6 xmax=5.6 ymin=-3.1 ymax=3.1 titolo="Magnetic field lines of a bar magnet: they leave the north pole, enter the south pole and close inside the magnet"}

:::

:::osservazione{#campo-perpendicolare-al-foglio titolo="Field perpendicular to the page"}
In plane drawings a vector perpendicular to the page is represented by a symbol: $\otimes$ denotes a vector **into** the page, like the tail of an arrow moving away, and $\odot$ a vector **out of** the page, like the tip of an arrow approaching. A uniform field into the page is therefore drawn as a regular grid of $\otimes$ symbols. With the page in the $xy$ plane and the $z$ axis pointing toward the reader, a field into the page is $\vec{B} = -B\,\hat{k}$ and a field out of the page is $\vec{B} = B\,\hat{k}$.
:::

## Lorentz force

:::richiamo{titolo="Cross product"}
For two vectors $\vec{a}$ and $\vec{b}$ forming the angle $\varphi \in [0, \pi]$, the cross product $\vec{a} \times \vec{b}$ is perpendicular to both, has magnitude $a\,b\sin\varphi$ and sense given by the right-hand rule: with the thumb along $\vec{a}$ and the index finger along $\vec{b}$, the middle finger points along $\vec{a} \times \vec{b}$. We have $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$ and $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$. See the topic on physical quantities and vectors in Physics 1 and the topic on vectors in Linear Algebra.
:::

:::teorema{#forza-di-lorentz titolo="Lorentz force"}
A point charge $q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ experiences the force
$$
\vec{F} = q\,\vec{v} \times \vec{B} ,
\qquad
F = |q|\,v B \sin\varphi ,
$$
where $\varphi$ is the angle between $\vec{v}$ and $\vec{B}$. It is an experimental law, which completes the definition of the magnetic field by fixing the sense of $\vec{B}$. The force is perpendicular both to the velocity and to the field; it is zero for a charge at rest or moving parallel to $\vec{B}$, and it is maximum, $|q|\,vB$, for a velocity perpendicular to the field. The sense is found with the right-hand rule applied to $\vec{v} \times \vec{B}$, and it is reversed for a negative charge.

For example, a proton with velocity $\vec{v} = 2.0 \cdot 10^6\,\hat{\imath}\,\mathrm{m/s}$ in a field $\vec{B} = 0.50\,\hat{\jmath}\,\mathrm{T}$ experiences the force $\vec{F} = e v B\,(\hat{\imath} \times \hat{\jmath}) = 1.6 \cdot 10^{-13}\,\hat{k}\,\mathrm{N}$, while an electron with the same velocity experiences the opposite force.

::grafico{assi=0 uguale=1 poligoni="0,0 2.6,0 3.986,0.8 1.386,0.8" vettori="0,0,2.6,0,v;0,0,1.386,0.8,B;0,0,0,2.4,F" punti="0,0,pieno" etichette="0.6,0.13,φ;-0.5,0.12,+q" xmin=-0.8 xmax=4.4 ymin=-0.6 ymax=2.8 titolo="The force $\vec{F} = q\,\vec{v} \times \vec{B}$ on a positive charge is perpendicular to the plane of $\vec{v}$ and $\vec{B}$, with the sense given by the right-hand rule"}

:::

:::osservazione{#forza-elettrica-e-magnetica titolo="Electric force and magnetic force together"}
If there are an electric field $\vec{E}$ and a magnetic field $\vec{B}$ in the region, the force on a point charge is the sum of the electric force and the magnetic force,
$$
\vec{F} = q\,\left( \vec{E} + \vec{v} \times \vec{B} \right) ,
$$
and in many texts it is this sum that is called the Lorentz force. The electric part acts also on a charge at rest, while the magnetic part acts only on moving charges and depends on the velocity. Comparing the two terms makes it possible to separate particles according to their speed, as in the *velocity selector*.
:::

:::richiamo{titolo="Work-energy theorem"}
For a point particle of mass $m$ moving from $A$ to $B$ in an inertial frame, the total work of the forces acting on it equals the change in the kinetic energy $K = \dfrac{1}{2} m v^2$. See the topic on work and energy in Physics 1.
:::

::::teorema{#lavoro-forza-magnetica titolo="Work of the magnetic force"}
The magnetic force $q\,\vec{v} \times \vec{B}$ on a moving charge does zero work along any trajectory. Consequently, if only the magnetic force acts on the charge, the kinetic energy and the speed remain constant, and only the direction of the velocity changes. To change the energy of a charged particle an electric field is needed, as in the accelerator that precedes a mass spectrometer. In this subject work is denoted by $W$, because the letter $L$ denotes inductance.

:::dimostrazione
The power of the magnetic force is
$$
P = \vec{F} \cdot \vec{v} = q\,(\vec{v} \times \vec{B}) \cdot \vec{v} = 0 ,
$$
because the cross product $\vec{v} \times \vec{B}$ is perpendicular to $\vec{v}$. Hence the work in a time interval $[t_1, t_2]$ is $W = \displaystyle\int_{t_1}^{t_2} P\,dt = 0$. If the magnetic force is the only force, by the **work-energy theorem** we have $K_2 - K_1 = W = 0$, therefore $\dfrac{1}{2} m v^2$ is constant, and with it the speed $v$.
:::
::::

## Motion of a charge in a uniform magnetic field

:::richiamo{titolo="Uniform circular motion"}
A point particle moving along a circle of radius $r$ with constant speed $v$ has acceleration directed toward the center, of magnitude $\dfrac{v^2}{r}$, and period $T = \dfrac{2\pi r}{v}$. A point particle of mass $m$ moving in a plane, subject to a force lying in the plane, of constant magnitude $F$ and always perpendicular to the velocity, moves with constant speed along a circle of radius $r = \dfrac{m v^2}{F}$. See the topic on motion in the plane in Physics 1.
:::

::::teorema{#moto-circolare-campo-magnetico titolo="Circular motion in a uniform magnetic field"}
Consider a particle of mass $m$ and charge $q$ in a uniform magnetic field $\vec{B}$, subject only to the magnetic force, with initial velocity $\vec{v}$ perpendicular to $\vec{B}$. Then the particle moves with constant speed along a circle, in a plane perpendicular to $\vec{B}$, with radius and period
$$
r = \frac{m v}{|q|\,B} ,
\qquad
T = \frac{2\pi m}{|q|\,B} .
$$
The angular frequency $\omega = \dfrac{|q|\,B}{m}$ is called the **cyclotron angular frequency**, and $f = \dfrac{1}{T}$ the cyclotron frequency. The radius is proportional to the momentum $mv$, while the period does *not* depend on the speed; identical particles that are faster describe larger circles in the same time. In a field into the page a positive charge circulates counterclockwise and a negative charge clockwise, as one checks by applying the right-hand rule at a point of the trajectory.

For an electron with $v = 1.0 \cdot 10^7\,\mathrm{m/s}$ in a field of $1.0 \cdot 10^{-3}\,\mathrm{T}$ we have $r = \dfrac{9.11 \cdot 10^{-31} \cdot 1.0 \cdot 10^7}{1.60 \cdot 10^{-19} \cdot 1.0 \cdot 10^{-3}}\,\mathrm{m} \approx 5.7\,\mathrm{cm}$ and $T \approx 3.6 \cdot 10^{-8}\,\mathrm{s}$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="0,-2,1.6,-2,v;0,-2,0,-0.8,F;1.73,1,1.23,1.87" segmenti="0,0,-1.414,1.414" punti="0,-2,pieno;0,0,pieno,C" etichette="-0.6,-2.35,+q;-0.95,0.45,r;-3.17,-2.67,⊗;-3.17,-1.17,⊗;-3.17,0.33,⊗;-3.17,1.83,⊗;-1.67,-2.67,⊗;-1.67,-1.17,⊗;-1.67,0.33,⊗;-1.67,1.83,⊗;1.33,-2.67,⊗;1.33,-1.17,⊗;1.33,0.33,⊗;1.33,1.83,⊗;2.83,-2.67,⊗;2.83,-1.17,⊗;2.83,0.33,⊗;2.83,1.83,⊗;-0.17,2.43,⊗;-0.17,-3.27,⊗;-0.17,0.73,⊗" xmin=-3.6 xmax=3.6 ymin=-3.4 ymax=3 titolo="A positive charge in a uniform field into the page moves counterclockwise along a circle of radius $r = \dfrac{mv}{|q|\,B}$; the force is always directed toward the center $C$"}

:::dimostrazione
By the **work of the magnetic force**, the speed $v$ remains constant. The force $q\,\vec{v} \times \vec{B}$ is perpendicular to $\vec{B}$, so the component of the velocity parallel to the field, initially zero, remains zero; therefore the motion takes place in the plane perpendicular to $\vec{B}$ that contains the initial position. In that plane $\vec{v}$ is perpendicular to $\vec{B}$, so the force has constant magnitude $|q|\,vB$, lies in the plane and is always perpendicular to the velocity. By uniform circular motion the trajectory is a circle, and equating the force to the product of the mass and the centripetal acceleration we obtain
$$
|q|\,v B = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
r = \frac{m v}{|q|\,B} .
$$
The period is the time taken to travel around the circle, $T = \dfrac{2\pi r}{v} = \dfrac{2\pi m}{|q|\,B}$.
:::
::::

:::osservazione{#raggio-ed-energia titolo="Radius, momentum and energy"}
Since $r = \dfrac{m v}{|q|\,B}$, measuring the radius of the trajectory in a known field gives the momentum of the particle; particle detectors use this principle. If the particle has kinetic energy $K = \dfrac{1}{2} m v^2$, then $m v = \sqrt{2 m K}$ and
$$
r = \frac{\sqrt{2 m K}}{|q|\,B} .
$$
For a particle accelerated from rest through the potential difference $\Delta V$ we have $K = |q|\,\Delta V$; see the topic on electric potential and electrostatic energy. The energies of particles are often expressed in electronvolts, $1\,\mathrm{eV} = 1.60 \cdot 10^{-19}\,\mathrm{J}$.
:::

::::teorema{#moto-elicoidale titolo="Helical motion"}
Consider a particle of mass $m$ and charge $q$ subject only to the magnetic force in a uniform field $\vec{B}$, with initial velocity $\vec{v}$ forming with $\vec{B}$ an angle $\varphi$ different from $0$ and from $\pi$, and let
$$
v_\parallel = v\cos\varphi ,
\qquad
v_\perp = v\sin\varphi
$$
be the components of the velocity parallel and perpendicular to the field. Then the particle describes a **helix** with its axis parallel to $\vec{B}$, with period $T = \dfrac{2\pi m}{|q|\,B}$, radius and pitch
$$
r = \frac{m v_\perp}{|q|\,B} ,
\qquad
p = v_\parallel\,T = \frac{2\pi m\, v_\parallel}{|q|\,B} ,
$$
where the **pitch** $p$ is the displacement along the axis during one turn. Charged particles coming from space that reach the Earth's magnetic field wind around the field lines in this way, and near the poles they produce the auroras. A proton, of mass $m_p = 1.67 \cdot 10^{-27}\,\mathrm{kg}$, with $v = 1.0 \cdot 10^6\,\mathrm{m/s}$ at $30^\circ$ to a field of $0.20\,\mathrm{T}$ describes a helix with $r \approx 2.6\,\mathrm{cm}$, $T \approx 3.3 \cdot 10^{-7}\,\mathrm{s}$ and $p \approx 28\,\mathrm{cm}$.

::grafico{assi=0 uguale=1 linee="0,1 0.126,0.986 0.249,0.944 0.369,0.876 0.482,0.784 0.588,0.669 0.684,0.536 0.77,0.388 0.843,0.228 0.905,0.063 0.954,-0.105 0.991,-0.269 1.015,-0.426 1.028,-0.571 1.031,-0.7 1.025,-0.809 1.011,-0.896 0.991,-0.957 0.968,-0.992 0.944,-0.999 0.92,-0.978 0.898,-0.93 0.882,-0.855 0.871,-0.757 0.869,-0.637 0.877,-0.5 0.896,-0.349 0.926,-0.187 0.969,-0.021 1.024,0.146 1.092,0.309 1.172,0.463 1.263,0.605 1.364,0.729 1.474,0.833 1.59,0.914 1.712,0.969 1.837,0.996 1.963,0.996 2.088,0.969 2.21,0.914 2.326,0.833 2.436,0.729 2.537,0.605 2.628,0.463 2.708,0.309 2.776,0.146 2.831,-0.021 2.874,-0.187 2.904,-0.349 2.923,-0.5 2.931,-0.637 2.929,-0.757 2.918,-0.855 2.902,-0.93 2.88,-0.978 2.856,-0.999 2.832,-0.992 2.809,-0.957 2.789,-0.896 2.775,-0.809 2.769,-0.7 2.772,-0.571 2.785,-0.426 2.809,-0.269 2.846,-0.105 2.895,0.063 2.957,0.228 3.03,0.388 3.116,0.536 3.212,0.669 3.318,0.784 3.431,0.876 3.551,0.944 3.674,0.986 3.8,1 3.926,0.986 4.049,0.944 4.169,0.876 4.282,0.784 4.388,0.669 4.484,0.536 4.57,0.388 4.643,0.228 4.705,0.063 4.754,-0.105 4.791,-0.269 4.815,-0.426 4.828,-0.571 4.831,-0.7 4.825,-0.809 4.811,-0.896 4.791,-0.957 4.768,-0.992 4.744,-0.999 4.72,-0.978 4.698,-0.93 4.682,-0.855 4.671,-0.757 4.669,-0.637 4.677,-0.5 4.696,-0.349 4.726,-0.187 4.769,-0.021 4.824,0.146 4.892,0.309 4.972,0.463 5.063,0.605 5.164,0.729 5.274,0.833 5.39,0.914 5.512,0.969 5.637,0.996 5.763,0.996 5.888,0.969 6.01,0.914 6.126,0.833 6.236,0.729 6.337,0.605 6.428,0.463 6.508,0.309 6.508,0.309" segmenti="-0.4,0,6.8,0;0,1.25,1.9,1.25;0.95,0,0.95,-1" vettori="4.4,2.3,6.4,2.3,B" etichette="0.8,1.45,p;1.07,-0.6,r" xmin=-0.8 xmax=7 ymin=-1.6 ymax=2.8 titolo="With a velocity oblique to $\vec{B}$ the charge describes a helix of radius $r = \dfrac{m v_\perp}{|q|\,B}$ and pitch $p = v_\parallel T$, with its axis parallel to the field"}

:::dimostrazione
We choose the $z$ axis parallel to the field, $\vec{B} = B\,\hat{k}$. The force $q\,\vec{v} \times \vec{B}$ is perpendicular to $\hat{k}$, so the acceleration along $z$ is zero and $v_z = v_\parallel$ remains constant, hence the motion along the axis is uniform rectilinear motion. In the cross product the component $v_z\,\hat{k}$ gives zero contribution, because $\hat{k} \times \hat{k} = \vec{0}$; therefore the force depends only on the component of the velocity in the $xy$ plane, which has constant magnitude $v_\perp$, since both $v$ and $v_z$ are constant. The motion projected onto the $xy$ plane is therefore that of a particle with velocity $v_\perp$ perpendicular to the field, and by **circular motion in a uniform magnetic field** it is a uniform circular motion of radius $\dfrac{m v_\perp}{|q|\,B}$ and period $T$. The composition of a uniform circular motion in the $xy$ plane and a uniform rectilinear motion along $z$ is a helix, and in one period the particle advances along the axis by $v_\parallel\,T$.
:::
::::

## Velocity selector and mass spectrometer

::::teorema{#selettore-di-velocita titolo="Velocity selector"}
In a region there are a uniform electric field $\vec{E}$ and a uniform magnetic field $\vec{B}$ perpendicular to each other. A charged particle enters it with velocity $\vec{v}$ perpendicular to both fields, in the sense for which the electric force and the magnetic force are opposite, and the weight of the particle is negligible. Then the particle crosses the region in a straight line if and only if
$$
v = \frac{E}{B} .
$$
Faster particles are deflected in the sense of the magnetic force, slower ones in the sense of the electric force, and a slit at the exit lets through only the particles with speed $\dfrac{E}{B}$, whatever their mass and their charge. The electric field is usually obtained with two parallel plane plates at distance $d$ with the potential difference $\Delta V$ between them, so that $E = \dfrac{\Delta V}{d}$. With $E = 2.0 \cdot 10^4\,\mathrm{V/m}$ and $B = 0.10\,\mathrm{T}$ the particles with $v = 2.0 \cdot 10^5\,\mathrm{m/s}$ pass through.

::grafico{assi=0 uguale=1 linee="0,1.2 6,1.2;0,-1.2 6,-1.2" segmenti="-1.4,0,7.4,0" vettori="2.6,0,4.1,0,v;2.6,0,2.6,0.95,qvB;2.6,0,2.6,-0.95,qE" punti="2.6,0,pieno" etichette="0.6,1.45,+;1.8,1.45,+;3,1.45,+;4.2,1.45,+;5.4,1.45,+;0.6,-1.75,−;1.8,-1.75,−;3,-1.75,−;4.2,-1.75,−;5.4,-1.75,−;0.63,0.38,⊗;0.63,-0.77,⊗;3.43,0.38,⊗;3.43,-0.77,⊗;4.83,0.38,⊗;4.83,-0.77,⊗" xmin=-1.5 xmax=7.5 ymin=-2.1 ymax=1.9 titolo="In the velocity selector the electric force $q\vec{E}$ and the magnetic force $q\vec{v} \times \vec{B}$ are opposite: only the particle with $v = \dfrac{E}{B}$ continues in a straight line"}

:::dimostrazione
The force $\vec{F} = q\,(\vec{E} + \vec{v} \times \vec{B})$ acts on the particle. The vectors $\vec{v}$, $\vec{E}$ and $\vec{B}$ are pairwise perpendicular, so $\vec{v} \times \vec{B}$, perpendicular to $\vec{v}$ and to $\vec{B}$, is parallel to $\vec{E}$, and the magnetic force has magnitude $|q|\,vB$; by the choice of the sense of $\vec{v}$ it is opposite to the electric force, of magnitude $|q|\,E$. The particle continues in a straight line with constant velocity if and only if the total force is zero, that is
$$
|q|\,E = |q|\,v B
\quad\Longleftrightarrow\quad
v = \frac{E}{B} .
$$
If $v > \dfrac{E}{B}$ the magnetic force prevails, if $v < \dfrac{E}{B}$ the electric force prevails, and in both cases the trajectory bends.
:::
::::

::::teorema{#spettrometro-di-massa titolo="Mass spectrometer"}
Ions of charge $q$ and mass $m$, starting with negligible speed, are accelerated by the potential difference $\Delta V$ and enter through a slit a region of uniform magnetic field $\vec{B}$ perpendicular to their velocity. After half a turn they hit a detector plate placed in the plane of the slit, at distance $2r$ from the slit, with
$$
r = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} ,
\qquad
m = \frac{|q|\,B^2 r^2}{2\,\Delta V} .
$$
For equal charge, heavier ions describe larger semicircles; the spectrometer thus separates the **isotopes** of an element, which have the same charge and different masses. Atomic masses are expressed in atomic mass units, $1\,\mathrm{u} = 1.66 \cdot 10^{-27}\,\mathrm{kg}$. Ions $^{12}\mathrm{C}^+$ and $^{14}\mathrm{C}^+$ accelerated by $\Delta V = 2.0\,\mathrm{kV}$ in a field of $0.50\,\mathrm{T}$ describe semicircles of radii $4.46\,\mathrm{cm}$ and $4.82\,\mathrm{cm}$, and their points of impact are about $7.2\,\mathrm{mm}$ apart.

::grafico{assi=0 uguale=1 curve="-2.0+2.0*cos(t),2.0*sin(t),0,3.1416;-2.3+2.3*cos(t),2.3*sin(t),0,3.1416" linee="-5.6,0 -0.15,0;0.15,0 1.2,0" vettori="0,-1.6,0,-0.2,v" punti="-4.0,0,pieno,m₁;-4.6,0,pieno,m₂;0,0,vuoto,O" segmenti="-2.0,0,-2.0,2.0" etichette="-1.85,0.9,r₁;-5.57,0.53,⊗;-5.57,2.43,⊗;-3.57,0.53,⊗;-3.57,2.43,⊗;-1.37,0.53,⊗;-1.37,2.43,⊗;0.63,0.53,⊗;0.63,2.43,⊗;-2.47,0.93,⊗;0.3,-1.0,ions" xmin=-5.8 xmax=1.6 ymin=-1.8 ymax=3.0 titolo="Mass spectrometer: the ions enter through the slit at $O$ and, after half a turn, hit the plate at distance $2r$; the heavier ion, $m_2 > m_1$, describes the larger semicircle"}

:::dimostrazione
During the acceleration the electric field does the work $|q|\,\Delta V$ on the ion, so by the **work-energy theorem**, with zero initial speed,
$$
|q|\,\Delta V = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v = \sqrt{\frac{2\,|q|\,\Delta V}{m}} .
$$
In the magnetic field the velocity is perpendicular to $\vec{B}$, therefore by **circular motion in a uniform magnetic field** the ion moves along a circle of radius $r = \dfrac{m v}{|q|\,B}$. Substituting the speed we obtain
$$
r = \frac{m}{|q|\,B}\sqrt{\frac{2\,|q|\,\Delta V}{m}} = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} .
$$
After half a turn the ion returns to the plane of the slit at the diametrically opposite point, at distance $2r$. Squaring and solving for $m$ we obtain the second formula.
:::
::::

## Hall effect

:::richiamo{titolo="Current and drift velocity"}
In a conductor with $n$ charge carriers $q$ per unit volume, moving with drift velocity $\vec{v}_d$, the current density is $\vec{J} = n q\,\vec{v}_d$, and the current through a cross section of area $A$ perpendicular to the motion is $I = n\,|q|\,v_d A$. See the topic on electric current and direct-current circuits.
:::

::::teorema{#effetto-hall titolo="Hall effect"}
Consider a conducting strip of width $w$ and thickness $s$, with $n$ charge carriers $q$ per unit volume, carrying the current $I$ along its length and placed in a uniform magnetic field $\vec{B}$ perpendicular to its wide faces. In the steady state there is between the two edges of the strip the **Hall voltage**
$$
\Delta V_H = \frac{I B}{n\,|q|\,s} .
$$
The voltage is larger the smaller the carrier density, therefore it is small in metals and much larger in semiconductors. The effect is used in two ways: with a known material, measuring $\Delta V_H$ gives the field $B$, and this is the principle of *Hall probes*; with a known field, the measurement gives the density and the sign of the carriers. A copper strip, with $n = 8.5 \cdot 10^{28}\,\mathrm{m^{-3}}$ and $s = 0.10\,\mathrm{mm}$, carrying $5.0\,\mathrm{A}$ in a field of $1.0\,\mathrm{T}$, has $\Delta V_H \approx 3.7\,\mu\mathrm{V}$.

::grafico{assi=0 uguale=1 poligoni="0,-1.1 6.4,-1.1 6.4,1.1 0,1.1" linee="-1.4,0 0,0;6.4,0 7.6,0" vettori="-1.3,0.25,-0.2,0.25,I;3,0,4.2,0,v;3,0,3,-0.75,F;5,-0.55,5,0.4,E" punti="3,0,pieno" etichette="0.6,-0.95,+;1.6,-0.95,+;2.6,-0.95,+;3.6,-0.95,+;4.6,-0.95,+;5.6,-0.95,+;0.6,0.65,−;1.6,0.65,−;2.6,0.65,−;3.6,0.65,−;4.6,0.65,−;5.6,0.65,−;0.33,1.53,⊙;0.33,-1.87,⊙;1.83,1.53,⊙;1.83,-1.87,⊙;3.33,1.53,⊙;3.33,-1.87,⊙;4.83,1.53,⊙;4.83,-1.87,⊙;6.7,-1.0,w" xmin=-1.6 xmax=7.8 ymin=-2.1 ymax=2.1 titolo="Hall effect with positive carriers in a field out of the page: the magnetic force pushes the carriers toward the lower edge and the Hall field $\vec{E}_H$ forms"}

:::dimostrazione
The carriers move along the strip with drift velocity $\vec{v}_d$ perpendicular to $\vec{B}$, so they experience the magnetic force $q\,\vec{v}_d \times \vec{B}$, of magnitude $|q|\,v_d B$ and directed along the width of the strip. The carriers accumulate on one edge and leave on the opposite edge a charge of opposite sign; these charges produce an electric field $\vec{E}_H$ along the width, whose force is opposite to the magnetic force. The accumulation continues until the two forces balance, therefore in the steady state
$$
|q|\,E_H = |q|\,v_d B
\quad\Longrightarrow\quad
E_H = v_d B .
$$
Taking the field $E_H$ as uniform over the width $w$, we have $\Delta V_H = E_H\, w = v_d B w$. The cross section of the strip is $A = w s$, so by the relation between current and drift velocity $v_d = \dfrac{I}{n\,|q|\,w s}$, and substituting
$$
\Delta V_H = \frac{I}{n\,|q|\,w s}\, B\, w = \frac{I B}{n\,|q|\,s} .
$$
:::
::::

:::osservazione{#segno-dei-portatori titolo="Sign of the charge carriers"}
For a given current, positive carriers move in the sense of the current and negative ones in the opposite sense. In both cases the magnetic force $q\,\vec{v}_d \times \vec{B}$ has the *same* sense, because both $q$ and $\vec{v}_d$ change sign, so the carriers accumulate on the same edge. The sign of the charge accumulated on that edge coincides with the sign of the carriers, and it determines which edge is at the higher potential. In most metals the measurement indicates negative carriers, the electrons; in $p$-type semiconductors it indicates positive carriers, the holes.
:::

## Magnetic force on a current-carrying wire

::::teorema{#forza-su-un-filo titolo="Force on a straight wire"}
A straight wire of length $\ell$, carrying the current $I$ and placed in a uniform magnetic field $\vec{B}$, experiences the force
$$
\vec{F} = I\,\vec{\ell} \times \vec{B} ,
\qquad
F = I \ell B \sin\varphi ,
$$
where $\vec{\ell}$ is the vector of magnitude $\ell$ directed along the wire in the sense of the current and $\varphi$ is the angle between the wire and the field. The force is perpendicular to the wire and to the field, it is zero for a wire parallel to $\vec{B}$ and it is maximum, $I \ell B$, for a perpendicular wire. Electric motors and loudspeakers are based on this force; the force between two current-carrying wires, which is used to define the ampere, is treated in the topic on the sources of the magnetic field. A wire $0.50\,\mathrm{m}$ long, carrying $3.0\,\mathrm{A}$ and perpendicular to a field of $0.40\,\mathrm{T}$, experiences the force $F = 3.0 \cdot 0.50 \cdot 0.40\,\mathrm{N} = 0.60\,\mathrm{N}$.

:::dimostrazione
Let $A$ be the cross section of the wire, $n$ the carrier density, $q$ their charge and $\vec{v}_d$ the drift velocity. Each carrier experiences the force $q\,\vec{v}_d \times \vec{B}$, and there are $n A \ell$ carriers in the wire; the force they receive is transmitted to the lattice of the conductor, hence to the wire. The total force is therefore
$$
\vec{F} = n A \ell\; q\,\vec{v}_d \times \vec{B} .
$$
The vector $q\,\vec{v}_d$ has the sense of the current, both for positive carriers and for negative carriers, and magnitude $|q|\,v_d$, so $n A \ell\, q\,\vec{v}_d = n\,|q|\,v_d A\;\vec{\ell} = I\,\vec{\ell}$, where the last equality follows from the relation between current and drift velocity. Substituting we obtain $\vec{F} = I\,\vec{\ell} \times \vec{B}$.
:::
::::

:::richiamo{titolo="Line integral of a displacement"}
If a regular curve $\gamma$ is parametrized by $\vec{r}(t)$, with $t \in [t_1, t_2]$, the integral of the infinitesimal displacements $d\vec{\ell} = \vec{r}\,'(t)\,dt$ is computed component by component, and by the fundamental theorem of calculus $\displaystyle\int_\gamma d\vec{\ell} = \vec{r}(t_2) - \vec{r}(t_1)$. For line integrals see the topic on curves and line integrals in Mathematical Analysis 2.
:::

::::teorema{#forza-su-un-filo-curvo titolo="Force on a wire of arbitrary shape"}
A wire carrying the current $I$ in a magnetic field $\vec{B}$ experiences, on each of its infinitesimal segments $d\vec{\ell}$ oriented in the sense of the current, the force $d\vec{F} = I\,d\vec{\ell} \times \vec{B}$, and the total force is the integral along the wire $\gamma$,
$$
\vec{F} = I \int_\gamma d\vec{\ell} \times \vec{B} .
$$
If the field is **uniform** and the wire goes from the point $P$ to the point $Q$, then
$$
\vec{F} = I\,\overrightarrow{PQ} \times \vec{B} ,
$$
that is, the force coincides with the force on a straight wire from $P$ to $Q$ carrying the same current. In particular, a closed loop in a uniform field experiences **zero** total force, because $P = Q$. A semicircle of radius $R$, perpendicular to the field, receives the force of magnitude $2 I R B$, the same as the diameter joining its endpoints.

::grafico{assi=0 uguale=1 curve="4*t,-1.4*sin(pi*t)+0.4*sin(3*pi*t),0,1" segmenti="0,0,4,0" vettori="1.6,-1.8,2.4,-1.8,I;2,0.15,2,1.6,F" punti="0,0,pieno,P;4,0,pieno,Q" etichette="-0.97,-2.77,⊗;-0.97,-1.17,⊗;-0.97,0.73,⊗;-0.97,2.03,⊗;0.43,-2.77,⊗;0.43,-1.17,⊗;0.43,0.73,⊗;0.43,2.03,⊗;1.23,-2.77,⊗;1.23,-1.17,⊗;1.23,0.73,⊗;1.23,2.03,⊗;2.43,-2.77,⊗;2.43,-1.17,⊗;2.43,0.73,⊗;2.43,2.03,⊗;3.23,-2.77,⊗;3.23,-1.17,⊗;3.23,0.73,⊗;3.23,2.03,⊗;4.63,-2.77,⊗;4.63,-1.17,⊗;4.63,0.73,⊗;4.63,2.03,⊗" xmin=-1.2 xmax=5.2 ymin=-2.8 ymax=2.6 titolo="In a uniform field the curved wire from $P$ to $Q$ experiences the same force $\vec{F} = I\,\overrightarrow{PQ} \times \vec{B}$ as the dashed segment"}

:::dimostrazione
The segment $d\vec{\ell}$ is approximately straight, so by the force on a straight wire it receives $d\vec{F} = I\,d\vec{\ell} \times \vec{B}$, and the sum of the contributions is the integral. If $\vec{B}$ is constant, it can be taken out of the integral by the linearity of the cross product:
$$
\vec{F} = I \left( \int_\gamma d\vec{\ell} \right) \times \vec{B} = I\,\overrightarrow{PQ} \times \vec{B} ,
$$
because the integral of the infinitesimal displacements along a curve from $P$ to $Q$ is the total displacement $\overrightarrow{PQ}$. For a closed curve the total displacement is zero, so the force is zero as well.
:::
::::

## Torque on a loop

::::teorema{#momento-su-una-spira titolo="Torque on a rectangular loop"}
Consider a rigid rectangular loop with sides $a$ and $b$ and area $A = ab$, carrying the current $I$ and placed in a uniform magnetic field $\vec{B}$ perpendicular to the sides of length $a$. Let $\hat{n}$ be the unit vector normal to the plane of the loop oriented by the right-hand rule, that is with the fingers curled in the sense of the current and the thumb along $\hat{n}$, and let $\theta$ be the angle between $\hat{n}$ and $\vec{B}$. Then the total force on the loop is zero and the torque is
$$
\vec{\tau} = I A\,\hat{n} \times \vec{B} ,
\qquad
\tau = I A B \sin\theta .
$$
The torque tends to rotate the loop toward the position in which $\hat{n}$ is parallel to $\vec{B}$ and in the same sense; it is maximum when the field lies in the plane of the loop and zero when the field is perpendicular to the loop. A square loop of side $10\,\mathrm{cm}$, carrying $2.0\,\mathrm{A}$ in a field of $0.50\,\mathrm{T}$ parallel to its plane, experiences the torque $\tau = 2.0 \cdot 0.010 \cdot 0.50\,\mathrm{N\cdot m} = 1.0 \cdot 10^{-2}\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 unicolore=1 linee="1.149,-0.964 -1.149,0.964;-3.2,-2.6 3.2,-2.6;-3.2,2.6 3.2,2.6" vettori="-1.149,0.964,-1.149,2.264,F;1.149,-0.964,1.149,-2.264,−F;0,0,0.9,1.072,n̂;1.4,-2.6,3.1,-2.6,B;1.4,2.6,3.1,2.6" segmenti="0,0,2,0" punti="0,0,pieno" etichette="-1.769,0.814,⊙;1.399,-1.114,⊗;0.55,0.18,θ;-0.6,-0.45,O" xmin=-3.4 xmax=3.4 ymin=-2.9 ymax=2.9 titolo="Rectangular loop seen along the sides of length $a$: the forces $\vec{F}$ and $-\vec{F}$ form a couple with lever arm $b\sin\theta$, which rotates $\hat{n}$ toward $\vec{B}$"}

:::dimostrazione
We choose the frame with $\vec{B} = B\,\hat{\imath}$ and the $z$ axis parallel to the sides of length $a$, with the origin $O$ at the center of the loop; the unit vector $\hat{n}$ then lies in the $xy$ plane and forms the angle $\theta$ with the $x$ axis. By the force on a wire of arbitrary shape the total force on the closed loop is zero, so the torque does not depend on the reference point, and we compute it about $O$.

- The sides of length $b$ are perpendicular to the $z$ axis and carry opposite currents. The forces on them are parallel to the $z$ axis, opposite, and applied at the midpoints of the two sides, which both lie on the $z$ axis; hence they act along the same line and their total torque is zero.
- The sides of length $a$ are parallel to the $z$ axis and carry opposite currents, so by the force on a straight wire they receive the forces $I a B\,\hat{\jmath}$ and $-I a B\,\hat{\jmath}$, which form a couple. The lever arm of the couple is the distance between the two lines of action, that is the projection onto the $x$ axis of the side of length $b$; this side is perpendicular to $\hat{n}$, therefore the projection equals $b\sin\theta$.

The torque of the couple therefore has magnitude $I a B \cdot b\sin\theta = I A B \sin\theta$ and is directed along the $z$ axis. Applying the right-hand rule to the couple one checks that it rotates $\hat{n}$ toward $\vec{B}$, that is, that $\vec{\tau}$ has the sense of $\hat{n} \times \vec{B}$.
:::
::::

## Magnetic moment and energy of a loop

:::definizione{#momento-magnetico titolo="Magnetic moment"}
A plane loop of area $A$ carrying the current $I$ has **magnetic moment**
$$
\vec{\mu} = I A\,\hat{n} ,
$$
where $\hat{n}$ is the unit vector normal to the loop oriented by the right-hand rule with respect to the sense of the current; a coil of $N$ identical tightly wound turns has $\vec{\mu} = N I A\,\hat{n}$. The magnetic moment is measured in $\mathrm{A \cdot m^2}$. With this quantity the torque in a uniform field is written
$$
\vec{\tau} = \vec{\mu} \times \vec{B} ,
\qquad
\tau = \mu B \sin\theta ,
$$
and the formula holds for plane loops of arbitrary shape, because a loop can be approximated by many thin rectangular loops placed side by side, whose currents on the shared sides cancel. A coil of $50$ turns of $10\,\mathrm{cm} \times 5.0\,\mathrm{cm}$ carrying $2.0\,\mathrm{A}$ has $\mu = 50 \cdot 2.0 \cdot 5.0 \cdot 10^{-3}\,\mathrm{A\cdot m^2} = 0.50\,\mathrm{A\cdot m^2}$, and in a field of $0.30\,\mathrm{T}$ it experiences a maximum torque of $0.15\,\mathrm{N\cdot m}$. A magnetic needle also has a magnetic moment, directed from the south pole to the north pole, and in an external field it orients itself with $\vec{\mu}$ parallel to $\vec{B}$ and in the same sense.
:::

::::teorema{#energia-momento-magnetico titolo="Energy of a magnetic moment in a uniform field"}
A rigid loop with magnetic moment $\vec{\mu}$, free to rotate in a uniform magnetic field $\vec{B}$, has the potential energy
$$
U = -\vec{\mu} \cdot \vec{B} = -\mu B \cos\theta ,
$$
with the zero at the position $\theta = \dfrac{\pi}{2}$. The energy is minimum, $-\mu B$, for $\theta = 0$, which is a position of **stable equilibrium**, and it is maximum, $\mu B$, for $\theta = \pi$, which is a position of unstable equilibrium. The work that an external agent does to rotate the loop slowly from $\theta_1$ to $\theta_2$ is $W = U(\theta_2) - U(\theta_1)$. To turn over the coil with $\mu = 0.50\,\mathrm{A\cdot m^2}$ from $\theta = 0$ to $\theta = \pi$ in a field of $0.30\,\mathrm{T}$ the work $W = 2\mu B = 0.30\,\mathrm{J}$ is needed.

::grafico{f="-cos(x)" xmin=-0.4 xmax=6.8 ymin=-1.6 ymax=1.6 nomi="θ,U" legenda="U = -\mu B \cos\theta" punti="0,-1,pieno;3.1416,1,pieno;6.2832,-1,pieno" etichette="3.0,1.25,π;5.4,-1.4,stable;3.5,1.2,unstable;6.1,-0.75,2π" titolo="Energy $U = -\mu B\cos\theta$ of the loop, in units of $\mu B$: minimum at $\theta = 0$ (stable equilibrium), maximum at $\theta = \pi$ (unstable equilibrium)"}

:::dimostrazione
The torque of the magnetic forces is perpendicular to the plane of $\hat{n}$ and $\vec{B}$, hence directed along the axis of rotation, and its component along the axis, taken positive in the sense in which $\theta$ increases, is $\tau_\theta = -\mu B \sin\theta$, because the torque rotates $\hat{n}$ toward $\vec{B}$. In an infinitesimal rotation $d\theta$ the torque does the work $\tau_\theta\,d\theta$, as shown in the topic on rigid body dynamics, so from $\theta_1$ to $\theta_2$
$$
W_{\text{mag}} = \int_{\theta_1}^{\theta_2} (-\mu B \sin\theta)\,d\theta = \mu B \cos\theta_2 - \mu B \cos\theta_1 .
$$
The work depends only on the initial and final angles, therefore a potential energy $U$ with $W_{\text{mag}} = U(\theta_1) - U(\theta_2)$ is associated with the magnetic moment; the function $U(\theta) = -\mu B\cos\theta$ satisfies this equality and vanishes at $\theta = \dfrac{\pi}{2}$. We have $U'(\theta) = \mu B \sin\theta$, zero for $\theta = 0$ and $\theta = \pi$, and $U''(\theta) = \mu B\cos\theta$, positive at $0$ and negative at $\pi$; by the criterion for the stability of equilibrium, seen in the topic on work and energy in Physics 1, the first position is stable and the second unstable. Finally, in a slow rotation the kinetic energy does not change, so the work of the external agent is the opposite of the magnetic work, $W = -W_{\text{mag}} = U(\theta_2) - U(\theta_1)$.
:::
::::

:::esempio{titolo="Orbital magnetic moment of the electron"}
In the Bohr model of the hydrogen atom the electron moves along a circle of radius $r = 5.29 \cdot 10^{-11}\,\mathrm{m}$ with speed $v = 2.19 \cdot 10^6\,\mathrm{m/s}$. The motion is equivalent to a loop carrying the current $I = \dfrac{e}{T} = \dfrac{e v}{2\pi r}$, because in each period the charge $e$ passes once through each point of the orbit. The area of the loop is $\pi r^2$, so
$$
\mu = I\,\pi r^2 = \frac{e v r}{2} = \frac{1.60 \cdot 10^{-19} \cdot 2.19 \cdot 10^6 \cdot 5.29 \cdot 10^{-11}}{2}\,\mathrm{A\cdot m^2} \approx 9.27 \cdot 10^{-24}\,\mathrm{A\cdot m^2} .
$$
This value is the **Bohr magneton**, the natural unit of atomic magnetic moments. Since the charge of the electron is negative, the current circulates in the sense opposite to the motion, and the magnetic moment is opposite to the orbital angular momentum. Atomic magnetic moments are at the origin of the magnetic properties of materials, for which see the topic on the sources of the magnetic field.
:::

:::osservazione{#motore-e-galvanometro titolo="Electric motor and galvanometer"}
In a direct-current electric motor a coil rotates in a magnetic field under the action of the torque $\vec{\mu} \times \vec{B}$. With the current always in the same sense the coil would oscillate about the position of stable equilibrium; a commutator reverses the current every half turn, when $\vec{\mu}$ passes through the direction of $\vec{B}$, and in this way the torque keeps the same sense of rotation.

In the moving-coil **galvanometer** the field is radial, so the plane of the coil always contains the direction of the field and the torque of the magnetic forces equals $N I A B$ in every position. A spiral spring exerts a restoring torque $\kappa\,\phi$, proportional to the angle of rotation $\phi$; at equilibrium $N I A B = \kappa\,\phi$, therefore the angle $\phi = \dfrac{N A B}{\kappa}\, I$ is proportional to the current.
:::
