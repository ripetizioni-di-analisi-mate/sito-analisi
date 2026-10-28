---
titolo: Sources of the magnetic field
sommario: How currents produce the magnetic field, from the Biot-Savart law to the fields of wires, loops and arcs, the force between parallel wires and the definition of the ampere, up to Ampère's law with its applications to a wire, a coaxial cable, a solenoid and a toroid, the flux of the magnetic field and a brief look at magnetic materials.
---

## Biot-Savart law

Throughout this topic the currents are steady, the conductors are in vacuum, except where magnetic materials are treated, and the wires are thin, that is with a cross section negligible compared with the distances involved.

:::richiamo{titolo="Cross product"}
The cross product $\vec{a} \times \vec{b}$ is the vector of magnitude $a\,b\sin\varphi$, where $\varphi \in [0, \pi]$ is the angle between the two vectors, perpendicular both to $\vec{a}$ and to $\vec{b}$ and oriented by the right-hand rule; in particular $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$. See the topic on vectors in Linear Algebra.
:::

:::teorema{#legge-di-biot-savart titolo="Biot-Savart law"}
Consider a thin circuit carrying the steady current $I$. An infinitesimal segment of the wire, represented by the vector $d\vec{l}$ tangent to the wire and oriented in the sense of the current, produces at the point $P$ the magnetic field
$$
d\vec{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec{l} \times \hat{r}}{r^2} ,
$$
where $\vec{r}$ is the vector that goes from the segment to the point $P$, $r$ is its magnitude and $\hat{r}$ its unit vector. The field of the whole circuit is the sum of all the contributions:
$$
\vec{B}(P) = \frac{\mu_0 I}{4\pi} \oint \frac{d\vec{l} \times \hat{r}}{r^2} .
$$
The constant $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ is the **magnetic permeability of vacuum**. The Biot-Savart law is an experimental law, obtained in 1820 from measurements of the field produced by wires of various shapes, and it gives the magnetic field of currents as Coulomb's law gives the electric field of charges.

The magnitude of the contribution is $dB = \dfrac{\mu_0}{4\pi}\,\dfrac{I\,dl\,\sin\varphi}{r^2}$, with $\varphi$ the angle between $d\vec{l}$ and $\vec{r}$, and it is zero at the points aligned with the segment. For example, a segment $1.0\,\mathrm{mm}$ long of a wire carrying $10\,\mathrm{A}$ produces, at a point $5.0\,\mathrm{cm}$ away in the direction perpendicular to the wire, the contribution $dB = 10^{-7} \cdot \dfrac{10 \cdot 1.0 \cdot 10^{-3}}{(5.0 \cdot 10^{-2})^2}\,\mathrm{T} = 4.0 \cdot 10^{-7}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 linee="4.200,3.000 4.192,3.038 4.170,3.070 4.138,3.092 4.100,3.100 4.062,3.092 4.030,3.070 4.008,3.038 4.000,3.000 4.008,2.962 4.030,2.930 4.062,2.908 4.100,2.900 4.138,2.908 4.170,2.930 4.192,2.962 4.200,3.000;4.030,2.930 4.170,3.070;4.030,3.070 4.170,2.930;0,-0.6 0,4.6" vettori="0,1.4,0,2.3;0,1.85,3.4,3.6,r" punti="3.4,3.6,pieno,P" etichette="-0.85,1.75,I dl;0.25,2.55,φ;4.35,2.85,dB" xmin=-1 xmax=5.2 ymin=-0.8 ymax=4.6 titolo="The segment $d\vec{l}$ of the wire produces at $P$ the contribution $d\vec{B}$, perpendicular both to $d\vec{l}$ and to $\vec{r}$: here it points into the page"}

:::

:::osservazione{#regola-mano-destra titolo="Direction and sense of the field"}
The contribution $d\vec{B}$ is perpendicular to the plane containing $d\vec{l}$ and $\vec{r}$, and its sense is found with the **right-hand rule**: with the thumb in the sense of the current, the curled fingers indicate the sense in which the field circulates around the wire. In the figures the symbol $\odot$ denotes a vector out of the page and the symbol $\otimes$ a vector into the page.

A steady current flows in a closed circuit, so only the integral extended to the whole circuit has a measurable meaning; the contribution of a part, for example of a straight segment, must be added to that of the rest of the circuit, or neglected if the rest is far away.
:::

## Field of a straight wire

::::teorema{#campo-segmento-rettilineo titolo="Field of a straight segment"}
Consider a straight segment of a circuit, carrying the current $I$, and a point $P$ at distance $d$ from the line of the segment. Let $H$ be the foot of the perpendicular drawn from $P$ to the line, and let $s$ be the coordinate along the line with origin at $H$, oriented in the sense of the current; the segment goes from $s_1$ to $s_2$, with $s_1 < s_2$. The contribution of the segment to the field at $P$ is perpendicular to the plane containing the wire and $P$, and has magnitude
$$
B = \frac{\mu_0 I}{4\pi d} \left( \frac{s_2}{\sqrt{s_2^2 + d^2}} - \frac{s_1}{\sqrt{s_1^2 + d^2}} \right) = \frac{\mu_0 I}{4\pi d}\,(\sin\theta_2 - \sin\theta_1) ,
$$
where $\theta_1$ and $\theta_2$ are the angles between $PH$ and the lines joining $P$ to the endpoints, taken positive on the side toward which the current flows and negative on the opposite side.

The formula is used for circuits made of straight segments, such as a square or rectangular loop: the field at a point is the vector sum of the contributions of the sides. For a segment $30\,\mathrm{cm}$ long carrying $5.0\,\mathrm{A}$, at a point at $d = 10\,\mathrm{cm}$ from its midpoint we have $s_2 = -s_1 = 0.15\,\mathrm{m}$, so $B = \dfrac{10^{-7} \cdot 5.0}{0.10} \cdot 2 \cdot \dfrac{0.15}{\sqrt{0.15^2 + 0.10^2}}\,\mathrm{T} \approx 8.3 \cdot 10^{-6}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 linee="0.853,2.200 0.845,2.239 0.823,2.273 0.789,2.295 0.750,2.303 0.711,2.295 0.677,2.273 0.655,2.239 0.647,2.200 0.655,2.161 0.677,2.127 0.711,2.105 0.750,2.097 0.789,2.105 0.823,2.127 0.845,2.161 0.853,2.200;-1.5,0 3.5,0" vettori="1.1,0,2.3,0,I" segmenti="0,2.2,-1.5,0;0,2.2,3.5,0;0,2.2,0,0" punti="0.750,2.200,pieno;0,2.2,pieno,P;0,0,pieno,H;-1.5,0,pieno;3.5,0,pieno" etichette="-0.62,1.3,θ₁;0.32,1.45,θ₂;-0.38,0.75,d;-1.75,-0.5,s₁;3.35,-0.5,s₂;0.95,2.05,B" xmin=-2.2 xmax=4.2 ymin=-0.9 ymax=2.8 titolo="Straight segment from $s_1$ to $s_2$ and point $P$ at distance $d$; with the current to the right the field at $P$ points out of the page"}

:::dimostrazione
We choose the $x$ axis along the wire, with origin at $H$ and oriented like the current, and the $y$ axis toward $P$, so that $P = (0, d)$. The infinitesimal segment at position $s$ is $d\vec{l} = ds\,\hat{\imath}$, and the vector going from the segment to $P$ is $\vec{r} = -s\,\hat{\imath} + d\,\hat{\jmath}$, of magnitude $\sqrt{s^2 + d^2}$. Since $\hat{\imath} \times \hat{\imath} = \vec{0}$ and $\hat{\imath} \times \hat{\jmath} = \hat{k}$,
$$
d\vec{l} \times \vec{r} = d\,ds\,\hat{k} ,
\qquad
d\vec{B} = \frac{\mu_0 I}{4\pi}\,\frac{d\vec{l} \times \vec{r}}{r^3} = \frac{\mu_0 I}{4\pi}\,\frac{d\,ds}{(s^2 + d^2)^{\frac{3}{2}}}\,\hat{k} .
$$
All the contributions therefore have the direction and sense of $\hat{k}$, and their magnitudes add up. With the substitution $s = d\tan u$ we have $ds = \dfrac{d}{\cos^2 u}\,du$ and $(s^2 + d^2)^{\frac{3}{2}} = \dfrac{d^3}{\cos^3 u}$, therefore
$$
\int \frac{d\,ds}{(s^2 + d^2)^{\frac{3}{2}}} = \frac{1}{d} \int \cos u\,du = \frac{\sin u}{d} = \frac{s}{d\sqrt{s^2 + d^2}} + c .
$$
Evaluating the antiderivative between $s_1$ and $s_2$ we obtain the claim; finally $\dfrac{s_i}{\sqrt{s_i^2 + d^2}} = \sin\theta_i$, because $s_i$ is the leg opposite $\theta_i$ in the right triangle with leg $PH = d$.
:::
::::

::::teorema{#campo-filo-rettilineo titolo="Field of an infinite straight wire"}
An infinite straight wire carrying the current $I$ produces, at distance $d$ from the wire, a field of magnitude
$$
B = \frac{\mu_0 I}{2\pi d} .
$$
The field lines are circles centered on the wire, in planes perpendicular to the wire, traversed in the sense given by the right-hand rule. A **semi-infinite** wire ending at the foot $H$ of the perpendicular drawn from $P$ produces at $P$ a field of magnitude $\dfrac{\mu_0 I}{4\pi d}$, half of the previous one.

The infinite wire is the model of a long straight wire, at points whose distance from the wire is small compared with the distance from the ends and from the rest of the circuit. A wire carrying $10\,\mathrm{A}$ produces at $2.0\,\mathrm{cm}$ the field $B = \dfrac{4\pi \cdot 10^{-7} \cdot 10}{2\pi \cdot 0.020}\,\mathrm{T} = 1.0 \cdot 10^{-4}\,\mathrm{T}$, of the same order of magnitude as the Earth's magnetic field, which is a few times $10^{-5}\,\mathrm{T}$.

::grafico{punti="0.000,0.000,pieno" assi=0 uguale=1 unicolore=1 linee="0.116,0.000 0.107,0.044 0.082,0.082 0.044,0.107 0.000,0.116 -0.044,0.107 -0.082,0.082 -0.107,0.044 -0.116,0.000 -0.107,-0.044 -0.082,-0.082 -0.044,-0.107 -0.000,-0.116 0.044,-0.107 0.082,-0.082 0.107,-0.044 0.116,-0.000;1.00,0.00 0.98,0.17 0.94,0.34 0.87,0.50 0.77,0.64 0.64,0.77 0.50,0.87 0.34,0.94 0.17,0.98 0.00,1.00 -0.17,0.98 -0.34,0.94 -0.50,0.87 -0.64,0.77 -0.77,0.64 -0.87,0.50 -0.94,0.34 -0.98,0.17 -1.00,0.00 -0.98,-0.17 -0.94,-0.34 -0.87,-0.50 -0.77,-0.64 -0.64,-0.77 -0.50,-0.87 -0.34,-0.94 -0.17,-0.98 -0.00,-1.00 0.17,-0.98 0.34,-0.94 0.50,-0.87 0.64,-0.77 0.77,-0.64 0.87,-0.50 0.94,-0.34 0.98,-0.17 1.00,-0.00;2.00,0.00 1.97,0.35 1.88,0.68 1.73,1.00 1.53,1.29 1.29,1.53 1.00,1.73 0.68,1.88 0.35,1.97 0.00,2.00 -0.35,1.97 -0.68,1.88 -1.00,1.73 -1.29,1.53 -1.53,1.29 -1.73,1.00 -1.88,0.68 -1.97,0.35 -2.00,0.00 -1.97,-0.35 -1.88,-0.68 -1.73,-1.00 -1.53,-1.29 -1.29,-1.53 -1.00,-1.73 -0.68,-1.88 -0.35,-1.97 -0.00,-2.00 0.35,-1.97 0.68,-1.88 1.00,-1.73 1.29,-1.53 1.53,-1.29 1.73,-1.00 1.88,-0.68 1.97,-0.35 2.00,-0.00;3.00,0.00 2.95,0.52 2.82,1.03 2.60,1.50 2.30,1.93 1.93,2.30 1.50,2.60 1.03,2.82 0.52,2.95 0.00,3.00 -0.52,2.95 -1.03,2.82 -1.50,2.60 -1.93,2.30 -2.30,1.93 -2.60,1.50 -2.82,1.03 -2.95,0.52 -3.00,0.00 -2.95,-0.52 -2.82,-1.03 -2.60,-1.50 -2.30,-1.93 -1.93,-2.30 -1.50,-2.60 -1.03,-2.82 -0.52,-2.95 -0.00,-3.00 0.52,-2.95 1.03,-2.82 1.50,-2.60 1.93,-2.30 2.30,-1.93 2.60,-1.50 2.82,-1.03 2.95,-0.52 3.00,-0.00" vettori="2,0,2,1.15,B;0,3,-1.15,3;-1,0,-1,-0.75;0,-2,1.15,-2" segmenti="0,0,2,0" etichette="0.22,0.3,I;0.95,-0.42,d" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Field lines of an infinite wire carrying the current $I$ out of the page: concentric circles traversed counterclockwise, with $B = \dfrac{\mu_0 I}{2\pi d}$"}

:::dimostrazione
We apply the theorem on the field of a straight segment. For the infinite wire $s_1 \to -\infty$ and $s_2 \to +\infty$, so $\sin\theta_1 \to -1$ and $\sin\theta_2 \to 1$, and
$$
B = \frac{\mu_0 I}{4\pi d}\,\bigl(1 - (-1)\bigr) = \frac{\mu_0 I}{2\pi d} .
$$
For the semi-infinite wire ending at $H$ we have $s_1 = 0$ and $s_2 \to +\infty$, or $s_1 \to -\infty$ and $s_2 = 0$; in both cases the difference of the sines equals $1$ and $B = \dfrac{\mu_0 I}{4\pi d}$.
:::
::::

## Field of a loop and of an arc

::::teorema{#campo-spira-asse titolo="Field of a circular loop on its axis"}
Consider a circular loop of radius $R$ carrying the current $I$, and a point $P$ on its axis at distance $z$ from the center. The field at $P$ is directed along the axis and has magnitude
$$
B = \frac{\mu_0 I R^2}{2\,(R^2 + z^2)^{\frac{3}{2}}} ,
$$
with the sense given by the right-hand rule: with the fingers curled in the sense of the current, the thumb indicates the sense of the field. At the center of the loop, that is for $z = 0$, the field equals
$$
B = \frac{\mu_0 I}{2R} .
$$
A flat coil of $N$ superposed turns produces a field $N$ times larger. For a loop of radius $10\,\mathrm{cm}$ carrying $5.0\,\mathrm{A}$ the field at the center is $\dfrac{4\pi \cdot 10^{-7} \cdot 5.0}{2 \cdot 0.10}\,\mathrm{T} \approx 3.1 \cdot 10^{-5}\,\mathrm{T}$; at the point on the axis with $z = R$ the denominator increases by the factor $2^{\frac{3}{2}} \approx 2.83$, and the field drops to about $1.1 \cdot 10^{-5}\,\mathrm{T}$.

::grafico{linee="0.129,2.300 0.119,2.349 0.091,2.391 0.049,2.419 0.000,2.429 -0.049,2.419 -0.091,2.391 -0.119,2.349 -0.129,2.300 -0.119,2.251 -0.091,2.209 -0.049,2.181 -0.000,2.171 0.049,2.181 0.091,2.209 0.119,2.251 0.129,2.300;0.129,-2.300 0.119,-2.251 0.091,-2.209 0.049,-2.181 0.000,-2.171 -0.049,-2.181 -0.091,-2.209 -0.119,-2.251 -0.129,-2.300 -0.119,-2.349 -0.091,-2.391 -0.049,-2.419 -0.000,-2.429 0.049,-2.419 0.091,-2.391 0.119,-2.349 0.129,-2.300;-0.091,-2.391 0.091,-2.209;-0.091,-2.209 0.091,-2.391" assi=0 uguale=1 curve="0.45*cos(t),2*sin(t),0,6.29" segmenti="-1.2,0,5.9,0;0,0,0,2" vettori="0,2,4,0,r;4,0,4.6,1.2,dB;4,0,5.2,0,B;4,0,4.6,-1.2,dB" punti="0.000,2.300,pieno;4,0,pieno,P;0,0,pieno" etichette="-0.45,1.0,R;1.9,-0.45,z;5.95,-0.4,axis" xmin=-1.4 xmax=6.6 ymin=-2.7 ymax=2.7 titolo="Loop seen edge-on: the contributions $d\vec{B}$ of two opposite segments have opposite components perpendicular to the axis, and the component along the axis remains"}

:::dimostrazione
We take the $z$ axis along the axis of the loop. Each segment $d\vec{l}$ of the loop is tangent to the circle, hence perpendicular to the vector $\vec{r}$ going from the segment to $P$, which has magnitude $r = \sqrt{R^2 + z^2}$. The contribution therefore has magnitude
$$
dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl}{R^2 + z^2}
$$
and is perpendicular to $\vec{r}$, in the plane containing the axis and the segment. The diametrically opposite segment gives a contribution of the same magnitude, with the opposite component perpendicular to the axis; hence the components perpendicular to the axis cancel in pairs, and the component along the axis remains. Since $d\vec{B}$ is perpendicular to $\vec{r}$, the angle between $d\vec{B}$ and the axis equals the angle between $\vec{r}$ and the radius of the loop, whose cosine is $\dfrac{R}{r}$. Summing over the whole circle, of length $2\pi R$,
$$
B = \oint \frac{\mu_0 I\,dl}{4\pi\,r^2}\,\frac{R}{r} = \frac{\mu_0 I R}{4\pi\,(R^2 + z^2)^{\frac{3}{2}}}\,2\pi R = \frac{\mu_0 I R^2}{2\,(R^2 + z^2)^{\frac{3}{2}}} .
$$
:::
::::

::::teorema{#campo-arco titolo="Field at the center of a circular arc"}
A circular arc of radius $R$ and angle $\varphi$, measured in radians, carrying the current $I$, produces at the center $C$ of the circle a field perpendicular to the plane of the arc, of magnitude
$$
B = \frac{\mu_0 I \varphi}{4\pi R} .
$$
For $\varphi = 2\pi$ we recover the field at the center of the loop. The radial straight segments, that is those aligned with the center, do not contribute to the field at $C$, because for them $d\vec{l}$ is parallel to $\vec{r}$ and the cross product is zero. The theorem therefore gives the field at the center of circuits made of arcs and radii: a circuit in the shape of a quarter circle, of radius $4.0\,\mathrm{cm}$ and carrying $6.0\,\mathrm{A}$, produces at the center the field of the arc, $B = \dfrac{\mu_0 I}{8R} = \dfrac{4\pi \cdot 10^{-7} \cdot 6.0}{8 \cdot 0.040}\,\mathrm{T} \approx 2.4 \cdot 10^{-5}\,\mathrm{T}$.

:::dimostrazione
For each segment of the arc the vector $\vec{r}$ going from the segment to $C$ is directed along the radius and has magnitude $R$, while $d\vec{l}$ is tangent; hence $|d\vec{l} \times \hat{r}| = dl$, and all the contributions are perpendicular to the plane of the arc with the same sense. Summing the magnitudes along the arc, of length $R\varphi$,
$$
B = \frac{\mu_0 I}{4\pi R^2} \int_{\text{arc}} dl = \frac{\mu_0 I}{4\pi R^2}\,R\varphi = \frac{\mu_0 I \varphi}{4\pi R} .
$$
:::
::::

:::osservazione{#spira-dipolo-magnetico titolo="The loop as a magnetic dipole"}
At a large distance from the loop, that is for $z \gg R$, we have $(R^2 + z^2)^{\frac{3}{2}} \approx z^3$, and the field on the axis becomes
$$
B \approx \frac{\mu_0 I R^2}{2 z^3} = \frac{\mu_0\,\mu}{2\pi z^3} ,
$$
where $\mu = I\pi R^2$ is the magnitude of the **magnetic moment** $\vec{\mu} = I A\,\hat{n}$ of the loop, introduced in the topic on the magnetic field and the Lorentz force. The expression has the same form as the electric field on the axis of a dipole, $E = \dfrac{p}{2\pi\varepsilon_0 z^3}$; for this reason a small loop is called a **magnetic dipole**, and its distant field lines have the same shape as those of an electric dipole and of a small magnet.
:::

## Force between parallel wires and definition of the ampere

:::richiamo{titolo="Magnetic force on a straight wire"}
A straight segment of wire of length $\ell$, carrying the current $I$ and placed in a uniform magnetic field $\vec{B}$, experiences the force $\vec{F} = I\,\vec{\ell} \times \vec{B}$, where $\vec{\ell}$ has magnitude $\ell$ and the sense of the current. See the topic on the magnetic field and the Lorentz force.
:::

::::teorema{#forza-tra-fili-paralleli titolo="Force between two parallel wires"}
Consider two infinite parallel straight wires, at distance $d$ in vacuum, carrying the currents $I_1$ and $I_2$. On each segment of length $\ell$ of each wire there acts a force perpendicular to the wires, in the plane containing them, of magnitude
$$
F = \frac{\mu_0 I_1 I_2\,\ell}{2\pi d} .
$$
The force is **attractive** if the currents are in the same direction and **repulsive** if they are in opposite directions. The forces on the two wires are opposite, in agreement with Newton's third law. The force per unit length $\dfrac{F}{\ell}$ does not depend on the length of the segment: two wires $1\,\mathrm{m}$ apart, both carrying $1\,\mathrm{A}$, attract each other with $2 \cdot 10^{-7}\,\mathrm{N}$ for each meter of length.

::grafico{assi=0 uguale=1 linee="3.537,3.000 3.530,3.033 3.511,3.061 3.483,3.080 3.450,3.087 3.417,3.080 3.389,3.061 3.370,3.033 3.363,3.000 3.370,2.967 3.389,2.939 3.417,2.920 3.450,2.913 3.483,2.920 3.511,2.939 3.530,2.967 3.537,3.000;3.389,2.939 3.511,3.061;3.389,3.061 3.511,2.939;0,0 0,4;3,0 3,4" vettori="0,0.4,0,1.4,I₁;3,0.4,3,1.4,I₂;0,2.4,0.95,2.4,F;3,2.4,2.05,2.4,F" segmenti="0,3.6,3,3.6" punti="0,2.4,pieno;3,2.4,pieno" etichette="1.42,3.75,d;3.65,2.85,B₁" xmin=-1 xmax=4.4 ymin=-0.3 ymax=4.2 titolo="Two parallel wires with currents in the same direction: the field $\vec{B}_1$ of the first wire points into the page at the position of the second, and the forces are attractive"}

:::dimostrazione
We place wire $1$ along the $z$ axis, with the current $I_1$ toward $+\hat{k}$, and wire $2$ in the $xz$ plane at distance $d$, at the point with abscissa $x = d$. By the theorem on the field of an infinite straight wire, at the points of wire $2$ the field of wire $1$ has magnitude $B_1 = \dfrac{\mu_0 I_1}{2\pi d}$; its sense, by the right-hand rule, is that of $+\hat{\jmath}$, and it is the same along the whole wire $2$. The field is therefore uniform along wire $2$, and by the magnetic force on a straight wire, if $I_2$ is in the same direction as $I_1$,
$$
\vec{F}_2 = I_2\,\ell\,\hat{k} \times B_1\,\hat{\jmath} = -\frac{\mu_0 I_1 I_2\,\ell}{2\pi d}\,\hat{\imath} .
$$
The force points toward wire $1$, that is, it is attractive. If $I_2$ is in the opposite direction, $\vec{\ell}$ changes sense and the force with it, which becomes repulsive.
:::
::::

:::definizione{#definizione-ampere titolo="Definition of the ampere"}
Until 2019 the **ampere** was defined by means of the force between parallel wires: it is the constant current which, maintained in two straight parallel conductors of infinite length and negligible cross section, placed $1\,\mathrm{m}$ apart in vacuum, produces between them a force of $2 \cdot 10^{-7}\,\mathrm{N}$ per meter of length.

Since 2019 the International System instead fixes the exact value of the elementary charge, $e = 1.602176634 \cdot 10^{-19}\,\mathrm{C}$, and the ampere corresponds to the passage of $\dfrac{1}{1.602176634 \cdot 10^{-19}}$ elementary charges per second. Since then $\mu_0$ is a measured quantity, which differs from $4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ by less than one part in a billion, and this value is used in calculations.
:::

## Ampère's law

:::richiamo{titolo="Circulation of a vector field"}
The **circulation** of a vector field $\vec{F}$ along an oriented closed curve $\gamma$ is the line integral $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{l}$, where $d\vec{l}$ is the infinitesimal displacement along the curve in the chosen sense. If $\vec{F}$ is tangent to the curve and has constant magnitude $F$ along it, the circulation equals $F$ times the length of the curve. See the topic on curves and line integrals in Mathematical Analysis 2.
:::

:::teorema{#legge-di-ampere titolo="Ampère's law"}
Consider a system of steady currents in vacuum and an oriented closed curve $\gamma$. The circulation of the magnetic field along $\gamma$ is
$$
\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, I_{\text{enc}} ,
$$
where $I_{\text{enc}}$ is the **enclosed current** linked with $\gamma$, that is the algebraic sum of the currents crossing a surface that has $\gamma$ as its boundary. The law is derived from the Biot-Savart law for steady currents; the general proof requires vector calculus and is omitted, while in the case of an infinite straight wire the law is checked by direct computation of the circulation.

The circulation of $\vec{B}$ along a curve that encircles a current is nonzero, so the magnetic field is **not conservative** and does not admit a potential like the electrostatic field. In distributions with high symmetry the law gives the field: if $\vec{B}$ is tangent and of constant magnitude along a curve, the circulation is $B$ times the length of the curve.
:::

:::osservazione{#corrente-concatenata titolo="Sign of the enclosed currents"}
The sense of traversal of $\gamma$ fixes the orientation of the surface that has $\gamma$ as its boundary by the right-hand rule: with the fingers curled in the sense of traversal, the thumb indicates the sense of the normal. The currents crossing the surface in the sense of the normal are counted as positive, those in the opposite sense as negative; the currents that do not cross the surface do not contribute, even if their field acts along $\gamma$.

::grafico{punti="-1.200,0.400,pieno;4.400,1.600,pieno" linee="-1.055,0.400 -1.066,0.455 -1.098,0.502 -1.145,0.534 -1.200,0.545 -1.255,0.534 -1.302,0.502 -1.334,0.455 -1.345,0.400 -1.334,0.345 -1.302,0.298 -1.255,0.266 -1.200,0.255 -1.145,0.266 -1.098,0.298 -1.066,0.345 -1.055,0.400;1.145,-0.500 1.134,-0.445 1.102,-0.398 1.055,-0.366 1.000,-0.355 0.945,-0.366 0.898,-0.398 0.866,-0.445 0.855,-0.500 0.866,-0.555 0.898,-0.602 0.945,-0.634 1.000,-0.645 1.055,-0.634 1.102,-0.602 1.134,-0.555 1.145,-0.500;0.898,-0.602 1.102,-0.398;0.898,-0.398 1.102,-0.602;4.545,1.600 4.534,1.655 4.502,1.702 4.455,1.734 4.400,1.745 4.345,1.734 4.298,1.702 4.266,1.655 4.255,1.600 4.266,1.545 4.298,1.498 4.345,1.466 4.400,1.455 4.455,1.466 4.502,1.498 4.534,1.545 4.545,1.600" assi=0 uguale=1 curve="3*cos(t)+0.4*cos(2*t),2*sin(t)+0.3*sin(3*t),0,6.29" vettori="-0.1,1.7,-0.95,1.7" etichette="-0.95,0.55,I₁;1.25,-0.35,I₂;4.65,1.75,I₃;2.55,1.95,γ" xmin=-3.6 xmax=5.4 ymin=-2.5 ymax=2.5 titolo="The curve $\gamma$, traversed counterclockwise, has its normal pointing out of the page: the enclosed current is $I_1 - I_2$, and $I_3$ does not contribute"}

:::

:::esempio{titolo="Circulation around a straight wire"}
Consider an infinite straight wire carrying the current $I$ and an arbitrary closed curve $\gamma$ in a plane perpendicular to the wire, described in polar coordinates $(r, \phi)$ with the pole on the wire. The field is tangent to the circles centered on the wire and has magnitude $\dfrac{\mu_0 I}{2\pi r}$; the displacement $d\vec{l}$ has component $r\,d\phi$ along that direction, therefore
$$
\vec{B} \cdot d\vec{l} = \frac{\mu_0 I}{2\pi r}\,r\,d\phi = \frac{\mu_0 I}{2\pi}\,d\phi .
$$
If $\gamma$ goes once around the wire, the angle $\phi$ increases by $2\pi$ and the circulation equals $\mu_0 I$, whatever the shape of the curve. If $\gamma$ does not go around the wire, the angle $\phi$ returns to its initial value without completing the turn, and the circulation is zero. In both cases Ampère's law is satisfied.
:::

:::osservazione{#ampere-forma-locale titolo="Local form and limits of validity"}
Applying Stokes' theorem to the circulation, and writing the enclosed current as the flux of the current density $\vec{J}$, Ampère's law takes the local form
$$
\nabla \times \vec{B} = \mu_0 \vec{J} .
$$
For Stokes' theorem see the topic on surfaces, fluxes and the theorems of Gauss and Stokes in Mathematical Analysis 2. The law holds for steady currents; when the currents and the fields vary in time it must be completed with the displacement current, and we refer to the topic on Maxwell's equations and electromagnetic waves.
:::

## Applications of Ampère's law

::::teorema{#campo-filo-spesso titolo="Field of a cylindrical wire"}
An infinite straight wire with circular cross section of radius $R$, carrying the current $I$ distributed uniformly over the cross section, produces at distance $r$ from the axis a field tangent to the coaxial circles, of magnitude
$$
B(r) =
\begin{cases}
\dfrac{\mu_0 I\, r}{2\pi R^2} & 0 \leq r \leq R \\[10pt]
\dfrac{\mu_0 I}{2\pi r} & r \geq R
\end{cases}
$$
Outside, the wire produces the same field as a thin wire along the axis; inside, the field grows linearly with $r$, it is zero on the axis and maximum at the surface. A wire of radius $1.0\,\mathrm{mm}$ carrying $20\,\mathrm{A}$ has at its surface the field $B = \dfrac{2 \cdot 10^{-7} \cdot 20}{1.0 \cdot 10^{-3}}\,\mathrm{T} = 4.0 \cdot 10^{-3}\,\mathrm{T}$.

::grafico{f="min(x,1/x)" segmenti="1,0,1,1" legenda="B(r)" nomi="r,B" xmin=0 xmax=4.3 ymin=0 ymax=1.3 titolo="Field of a cylindrical wire as a function of the distance from the axis, with $r$ in units of $R$ and $B$ in units of $\dfrac{\mu_0 I}{2\pi R}$: a straight line inside, a hyperbola outside"}

:::dimostrazione
By the Biot-Savart law each contribution $d\vec{B}$ is perpendicular to $d\vec{l}$, which is parallel to the axis, so the field has no component along the axis. The radial component is zero by Gauss's law for the magnetic field, applied to a coaxial cylinder: the bases do not contribute to the flux, because the field has no axial component, while by symmetry the radial component would have the same value and the same sign on the whole lateral surface, and the outward flux would be nonzero. The field is therefore tangent to the coaxial circles, and by rotational symmetry its magnitude depends only on $r$.

We apply Ampère's law to the coaxial circle of radius $r$, traversed in the sense consistent with the current according to the right-hand rule; the circulation equals $B(r)\,2\pi r$. If $r \geq R$, the circle encloses the whole current $I$, therefore $B\,2\pi r = \mu_0 I$. If $r < R$, the current is uniform over the cross section, so the enclosed current is the fraction $\dfrac{\pi r^2}{\pi R^2}$ of the total current, and
$$
B\,2\pi r = \mu_0 I\,\frac{r^2}{R^2}
\quad\Longrightarrow\quad
B = \frac{\mu_0 I\, r}{2\pi R^2} .
$$
:::
::::

::::teorema{#campo-cavo-coassiale titolo="Field of a coaxial cable"}
An infinite coaxial cable consists of an inner cylindrical conductor of radius $a$ and an outer conductor in the shape of a coaxial cylindrical shell, with radii $b$ and $c$, where $a < b < c$. The two conductors carry the same current $I$ in opposite senses, distributed uniformly over the respective cross sections. The field is tangent to the coaxial circles and its magnitude is
$$
B(r) =
\begin{cases}
\dfrac{\mu_0 I\, r}{2\pi a^2} & 0 \leq r \leq a \\[10pt]
\dfrac{\mu_0 I}{2\pi r} & a \leq r \leq b \\[10pt]
\dfrac{\mu_0 I}{2\pi r}\,\dfrac{c^2 - r^2}{c^2 - b^2} & b \leq r \leq c \\[10pt]
0 & r \geq c
\end{cases}
$$
Outside the cable the field is zero, because the two currents compensate each other; for this reason the coaxial cable carries current without producing a magnetic field outside.

:::dimostrazione
The distribution has the same symmetry as the cylindrical wire, so the field is tangent to the coaxial circles and depends only on $r$; by Ampère's law applied to the circle of radius $r$ we have $B\,2\pi r = \mu_0 I_{\text{enc}}(r)$, and it remains to compute the enclosed current, counting the current of the inner conductor as positive.

- For $r \leq a$ the circle encloses the fraction $\dfrac{r^2}{a^2}$ of the inner current, as in the cylindrical wire.
- For $a \leq r \leq b$ it encloses the whole inner current, $I_{\text{enc}} = I$.
- For $b \leq r \leq c$ it encloses the inner current and the part of the outer current that crosses the annulus between $b$ and $r$; since the outer current is uniform, that part equals $I\,\dfrac{r^2 - b^2}{c^2 - b^2}$, and $I_{\text{enc}} = I - I\,\dfrac{r^2 - b^2}{c^2 - b^2} = I\,\dfrac{c^2 - r^2}{c^2 - b^2}$.
- For $r \geq c$ we have $I_{\text{enc}} = I - I = 0$.

Dividing by $2\pi r$ we obtain the four expressions.
:::
::::

## Solenoid and toroid

::::teorema{#campo-solenoide titolo="Field of an ideal solenoid"}
A **solenoid** is a wire wound in a helix on a cylinder, with closely spaced turns. Consider an ideal solenoid, that is infinitely long and with turns so closely spaced as to be equivalent to a current distributed over the lateral surface, with $n$ turns per unit length carrying the current $I$. Inside, the field is **uniform**, parallel to the axis, of magnitude
$$
B = \mu_0\, n I ,
$$
and outside it is zero. The sense is found with the right-hand rule, with the fingers curled in the sense of the current in the turns. The model describes well a real solenoid whose length is much greater than its radius, far from the ends. A solenoid with $1000$ turns per meter carrying $2.0\,\mathrm{A}$ has inside $B = 4\pi \cdot 10^{-7} \cdot 1000 \cdot 2.0\,\mathrm{T} \approx 2.5 \cdot 10^{-3}\,\mathrm{T}$. For a solenoid of length $\ell$ with $N$ turns we have $n = \dfrac{N}{\ell}$.

::grafico{punti="0.250,1.000,pieno;0.750,1.000,pieno;1.250,1.000,pieno;1.750,1.000,pieno;2.250,1.000,pieno;2.750,1.000,pieno;3.250,1.000,pieno;3.750,1.000,pieno;4.250,1.000,pieno;4.750,1.000,pieno;5.250,1.000,pieno;5.750,1.000,pieno;6.250,1.000,pieno;6.750,1.000,pieno;7.250,1.000,pieno;7.750,1.000,pieno" linee="0.388,1.000 0.378,1.053 0.348,1.098 0.303,1.128 0.250,1.138 0.197,1.128 0.152,1.098 0.122,1.053 0.112,1.000 0.122,0.947 0.152,0.902 0.197,0.872 0.250,0.862 0.303,0.872 0.348,0.902 0.378,0.947 0.388,1.000;0.888,1.000 0.878,1.053 0.848,1.098 0.803,1.128 0.750,1.138 0.697,1.128 0.652,1.098 0.622,1.053 0.612,1.000 0.622,0.947 0.652,0.902 0.697,0.872 0.750,0.862 0.803,0.872 0.848,0.902 0.878,0.947 0.888,1.000;1.388,1.000 1.378,1.053 1.348,1.098 1.303,1.128 1.250,1.138 1.197,1.128 1.152,1.098 1.122,1.053 1.112,1.000 1.122,0.947 1.152,0.902 1.197,0.872 1.250,0.862 1.303,0.872 1.348,0.902 1.378,0.947 1.388,1.000;1.888,1.000 1.878,1.053 1.848,1.098 1.803,1.128 1.750,1.138 1.697,1.128 1.652,1.098 1.622,1.053 1.612,1.000 1.622,0.947 1.652,0.902 1.697,0.872 1.750,0.862 1.803,0.872 1.848,0.902 1.878,0.947 1.888,1.000;2.388,1.000 2.378,1.053 2.348,1.098 2.303,1.128 2.250,1.138 2.197,1.128 2.152,1.098 2.122,1.053 2.112,1.000 2.122,0.947 2.152,0.902 2.197,0.872 2.250,0.862 2.303,0.872 2.348,0.902 2.378,0.947 2.388,1.000;2.888,1.000 2.878,1.053 2.848,1.098 2.803,1.128 2.750,1.138 2.697,1.128 2.652,1.098 2.622,1.053 2.612,1.000 2.622,0.947 2.652,0.902 2.697,0.872 2.750,0.862 2.803,0.872 2.848,0.902 2.878,0.947 2.888,1.000;3.388,1.000 3.378,1.053 3.348,1.098 3.303,1.128 3.250,1.138 3.197,1.128 3.152,1.098 3.122,1.053 3.112,1.000 3.122,0.947 3.152,0.902 3.197,0.872 3.250,0.862 3.303,0.872 3.348,0.902 3.378,0.947 3.388,1.000;3.888,1.000 3.878,1.053 3.848,1.098 3.803,1.128 3.750,1.138 3.697,1.128 3.652,1.098 3.622,1.053 3.612,1.000 3.622,0.947 3.652,0.902 3.697,0.872 3.750,0.862 3.803,0.872 3.848,0.902 3.878,0.947 3.888,1.000;4.388,1.000 4.378,1.053 4.348,1.098 4.303,1.128 4.250,1.138 4.197,1.128 4.152,1.098 4.122,1.053 4.112,1.000 4.122,0.947 4.152,0.902 4.197,0.872 4.250,0.862 4.303,0.872 4.348,0.902 4.378,0.947 4.388,1.000;4.888,1.000 4.878,1.053 4.848,1.098 4.803,1.128 4.750,1.138 4.697,1.128 4.652,1.098 4.622,1.053 4.612,1.000 4.622,0.947 4.652,0.902 4.697,0.872 4.750,0.862 4.803,0.872 4.848,0.902 4.878,0.947 4.888,1.000;5.388,1.000 5.378,1.053 5.348,1.098 5.303,1.128 5.250,1.138 5.197,1.128 5.152,1.098 5.122,1.053 5.112,1.000 5.122,0.947 5.152,0.902 5.197,0.872 5.250,0.862 5.303,0.872 5.348,0.902 5.378,0.947 5.388,1.000;5.888,1.000 5.878,1.053 5.848,1.098 5.803,1.128 5.750,1.138 5.697,1.128 5.652,1.098 5.622,1.053 5.612,1.000 5.622,0.947 5.652,0.902 5.697,0.872 5.750,0.862 5.803,0.872 5.848,0.902 5.878,0.947 5.888,1.000;6.388,1.000 6.378,1.053 6.348,1.098 6.303,1.128 6.250,1.138 6.197,1.128 6.152,1.098 6.122,1.053 6.112,1.000 6.122,0.947 6.152,0.902 6.197,0.872 6.250,0.862 6.303,0.872 6.348,0.902 6.378,0.947 6.388,1.000;6.888,1.000 6.878,1.053 6.848,1.098 6.803,1.128 6.750,1.138 6.697,1.128 6.652,1.098 6.622,1.053 6.612,1.000 6.622,0.947 6.652,0.902 6.697,0.872 6.750,0.862 6.803,0.872 6.848,0.902 6.878,0.947 6.888,1.000;7.388,1.000 7.378,1.053 7.348,1.098 7.303,1.128 7.250,1.138 7.197,1.128 7.152,1.098 7.122,1.053 7.112,1.000 7.122,0.947 7.152,0.902 7.197,0.872 7.250,0.862 7.303,0.872 7.348,0.902 7.378,0.947 7.388,1.000;7.888,1.000 7.878,1.053 7.848,1.098 7.803,1.128 7.750,1.138 7.697,1.128 7.652,1.098 7.622,1.053 7.612,1.000 7.622,0.947 7.652,0.902 7.697,0.872 7.750,0.862 7.803,0.872 7.848,0.902 7.878,0.947 7.888,1.000;0.388,-1.000 0.378,-0.947 0.348,-0.902 0.303,-0.872 0.250,-0.862 0.197,-0.872 0.152,-0.902 0.122,-0.947 0.112,-1.000 0.122,-1.053 0.152,-1.098 0.197,-1.128 0.250,-1.138 0.303,-1.128 0.348,-1.098 0.378,-1.053 0.388,-1.000;0.152,-1.098 0.348,-0.902;0.152,-0.902 0.348,-1.098;0.888,-1.000 0.878,-0.947 0.848,-0.902 0.803,-0.872 0.750,-0.862 0.697,-0.872 0.652,-0.902 0.622,-0.947 0.612,-1.000 0.622,-1.053 0.652,-1.098 0.697,-1.128 0.750,-1.138 0.803,-1.128 0.848,-1.098 0.878,-1.053 0.888,-1.000;0.652,-1.098 0.848,-0.902;0.652,-0.902 0.848,-1.098;1.388,-1.000 1.378,-0.947 1.348,-0.902 1.303,-0.872 1.250,-0.862 1.197,-0.872 1.152,-0.902 1.122,-0.947 1.112,-1.000 1.122,-1.053 1.152,-1.098 1.197,-1.128 1.250,-1.138 1.303,-1.128 1.348,-1.098 1.378,-1.053 1.388,-1.000;1.152,-1.098 1.348,-0.902;1.152,-0.902 1.348,-1.098;1.888,-1.000 1.878,-0.947 1.848,-0.902 1.803,-0.872 1.750,-0.862 1.697,-0.872 1.652,-0.902 1.622,-0.947 1.612,-1.000 1.622,-1.053 1.652,-1.098 1.697,-1.128 1.750,-1.138 1.803,-1.128 1.848,-1.098 1.878,-1.053 1.888,-1.000;1.652,-1.098 1.848,-0.902;1.652,-0.902 1.848,-1.098;2.388,-1.000 2.378,-0.947 2.348,-0.902 2.303,-0.872 2.250,-0.862 2.197,-0.872 2.152,-0.902 2.122,-0.947 2.112,-1.000 2.122,-1.053 2.152,-1.098 2.197,-1.128 2.250,-1.138 2.303,-1.128 2.348,-1.098 2.378,-1.053 2.388,-1.000;2.152,-1.098 2.348,-0.902;2.152,-0.902 2.348,-1.098;2.888,-1.000 2.878,-0.947 2.848,-0.902 2.803,-0.872 2.750,-0.862 2.697,-0.872 2.652,-0.902 2.622,-0.947 2.612,-1.000 2.622,-1.053 2.652,-1.098 2.697,-1.128 2.750,-1.138 2.803,-1.128 2.848,-1.098 2.878,-1.053 2.888,-1.000;2.652,-1.098 2.848,-0.902;2.652,-0.902 2.848,-1.098;3.388,-1.000 3.378,-0.947 3.348,-0.902 3.303,-0.872 3.250,-0.862 3.197,-0.872 3.152,-0.902 3.122,-0.947 3.112,-1.000 3.122,-1.053 3.152,-1.098 3.197,-1.128 3.250,-1.138 3.303,-1.128 3.348,-1.098 3.378,-1.053 3.388,-1.000;3.152,-1.098 3.348,-0.902;3.152,-0.902 3.348,-1.098;3.888,-1.000 3.878,-0.947 3.848,-0.902 3.803,-0.872 3.750,-0.862 3.697,-0.872 3.652,-0.902 3.622,-0.947 3.612,-1.000 3.622,-1.053 3.652,-1.098 3.697,-1.128 3.750,-1.138 3.803,-1.128 3.848,-1.098 3.878,-1.053 3.888,-1.000;3.652,-1.098 3.848,-0.902;3.652,-0.902 3.848,-1.098;4.388,-1.000 4.378,-0.947 4.348,-0.902 4.303,-0.872 4.250,-0.862 4.197,-0.872 4.152,-0.902 4.122,-0.947 4.112,-1.000 4.122,-1.053 4.152,-1.098 4.197,-1.128 4.250,-1.138 4.303,-1.128 4.348,-1.098 4.378,-1.053 4.388,-1.000;4.152,-1.098 4.348,-0.902;4.152,-0.902 4.348,-1.098;4.888,-1.000 4.878,-0.947 4.848,-0.902 4.803,-0.872 4.750,-0.862 4.697,-0.872 4.652,-0.902 4.622,-0.947 4.612,-1.000 4.622,-1.053 4.652,-1.098 4.697,-1.128 4.750,-1.138 4.803,-1.128 4.848,-1.098 4.878,-1.053 4.888,-1.000;4.652,-1.098 4.848,-0.902;4.652,-0.902 4.848,-1.098;5.388,-1.000 5.378,-0.947 5.348,-0.902 5.303,-0.872 5.250,-0.862 5.197,-0.872 5.152,-0.902 5.122,-0.947 5.112,-1.000 5.122,-1.053 5.152,-1.098 5.197,-1.128 5.250,-1.138 5.303,-1.128 5.348,-1.098 5.378,-1.053 5.388,-1.000;5.152,-1.098 5.348,-0.902;5.152,-0.902 5.348,-1.098;5.888,-1.000 5.878,-0.947 5.848,-0.902 5.803,-0.872 5.750,-0.862 5.697,-0.872 5.652,-0.902 5.622,-0.947 5.612,-1.000 5.622,-1.053 5.652,-1.098 5.697,-1.128 5.750,-1.138 5.803,-1.128 5.848,-1.098 5.878,-1.053 5.888,-1.000;5.652,-1.098 5.848,-0.902;5.652,-0.902 5.848,-1.098;6.388,-1.000 6.378,-0.947 6.348,-0.902 6.303,-0.872 6.250,-0.862 6.197,-0.872 6.152,-0.902 6.122,-0.947 6.112,-1.000 6.122,-1.053 6.152,-1.098 6.197,-1.128 6.250,-1.138 6.303,-1.128 6.348,-1.098 6.378,-1.053 6.388,-1.000;6.152,-1.098 6.348,-0.902;6.152,-0.902 6.348,-1.098;6.888,-1.000 6.878,-0.947 6.848,-0.902 6.803,-0.872 6.750,-0.862 6.697,-0.872 6.652,-0.902 6.622,-0.947 6.612,-1.000 6.622,-1.053 6.652,-1.098 6.697,-1.128 6.750,-1.138 6.803,-1.128 6.848,-1.098 6.878,-1.053 6.888,-1.000;6.652,-1.098 6.848,-0.902;6.652,-0.902 6.848,-1.098;7.388,-1.000 7.378,-0.947 7.348,-0.902 7.303,-0.872 7.250,-0.862 7.197,-0.872 7.152,-0.902 7.122,-0.947 7.112,-1.000 7.122,-1.053 7.152,-1.098 7.197,-1.128 7.250,-1.138 7.303,-1.128 7.348,-1.098 7.378,-1.053 7.388,-1.000;7.152,-1.098 7.348,-0.902;7.152,-0.902 7.348,-1.098;7.888,-1.000 7.878,-0.947 7.848,-0.902 7.803,-0.872 7.750,-0.862 7.697,-0.872 7.652,-0.902 7.622,-0.947 7.612,-1.000 7.622,-1.053 7.652,-1.098 7.697,-1.128 7.750,-1.138 7.803,-1.128 7.848,-1.098 7.878,-1.053 7.888,-1.000;7.652,-1.098 7.848,-0.902;7.652,-0.902 7.848,-1.098" assi=0 uguale=1 etichette="2.75,0.12,a;5.08,0.12,b;5.08,2.3,c;2.75,2.3,d;3.9,0.5,h" segmenti="3,0.35,5,0.35;5,0.35,5,2.2;5,2.2,3,2.2;3,2.2,3,0.35" vettori="2.6,-0.45,5.4,-0.45,B" xmin=-0.3 xmax=8.3 ymin=-1.5 ymax=2.7 titolo="Cross section of a solenoid with the rectangular path $abcd$: only the side $ab$, inside, contributes to the circulation, which equals $B h = \mu_0 n h I$"}

:::dimostrazione
By the symmetry of the infinite solenoid, the field inside is parallel to the axis and does not depend on the position along the axis. Consider a rectangular path with two sides parallel to the axis, both inside, at different distances from the axis: the sides perpendicular to the axis do not contribute to the circulation, because there $\vec{B}$ is perpendicular to $d\vec{l}$, and the path encloses no current; by Ampère's law the circulation is zero, hence the field has the same value on the two parallel sides. The field inside is therefore uniform. The same argument, with two outer sides, shows that the field outside is uniform, and since the field tends to zero at a large distance from the solenoid, the field outside is **zero**.

Finally, we apply Ampère's law to the rectangle $abcd$ in the figure, with the side $ab$ of length $h$ inside and the side $cd$ outside. The sides $bc$ and $da$ are perpendicular to $\vec{B}$ in their inner part and lie where $\vec{B} = \vec{0}$ in their outer part, and on $cd$ the field is zero; hence the circulation equals $B h$. The rectangle is crossed by $n h$ turns, each carrying $I$, therefore
$$
B h = \mu_0\, n h I
\quad\Longrightarrow\quad
B = \mu_0\, n I .
$$
:::
::::

::::teorema{#campo-toroide titolo="Field of a toroid"}
A **toroid** is a solenoid closed into a ring: $N$ turns, carrying the current $I$, are wound on a ring of inner radius $a$ and outer radius $b$. The field is zero outside the ring, while inside the ring the field lines are circles coaxial with the toroid and the magnitude of the field at distance $r$ from the axis is
$$
B = \frac{\mu_0 N I}{2\pi r} , \qquad a < r < b .
$$
The field is not uniform: it is maximum at the inner edge and minimum at the outer edge. A toroid with $N = 600$ turns, $I = 2.0\,\mathrm{A}$, $a = 8.0\,\mathrm{cm}$ and $b = 12\,\mathrm{cm}$ has $B = 3.0 \cdot 10^{-3}\,\mathrm{T}$ at the inner edge and $2.0 \cdot 10^{-3}\,\mathrm{T}$ at the outer one.

::grafico{punti="1.850,0.770,pieno;0.770,1.850,pieno;-0.770,1.850,pieno;-1.850,0.770,pieno;-1.850,-0.770,pieno;-0.770,-1.850,pieno;0.770,-1.850,pieno;1.850,-0.770,pieno" assi=0 uguale=1 linee="1.966,0.770 1.957,0.814 1.932,0.852 1.894,0.877 1.850,0.886 1.806,0.877 1.768,0.852 1.743,0.814 1.734,0.770 1.743,0.726 1.768,0.688 1.806,0.663 1.850,0.654 1.894,0.663 1.932,0.688 1.957,0.726 1.966,0.770;0.886,1.850 0.877,1.894 0.852,1.932 0.814,1.957 0.770,1.966 0.726,1.957 0.688,1.932 0.663,1.894 0.654,1.850 0.663,1.806 0.688,1.768 0.726,1.743 0.770,1.734 0.814,1.743 0.852,1.768 0.877,1.806 0.886,1.850;-0.654,1.850 -0.663,1.894 -0.688,1.932 -0.726,1.957 -0.770,1.966 -0.814,1.957 -0.852,1.932 -0.877,1.894 -0.886,1.850 -0.877,1.806 -0.852,1.768 -0.814,1.743 -0.770,1.734 -0.726,1.743 -0.688,1.768 -0.663,1.806 -0.654,1.850;-1.734,0.770 -1.743,0.814 -1.768,0.852 -1.806,0.877 -1.850,0.886 -1.894,0.877 -1.932,0.852 -1.957,0.814 -1.966,0.770 -1.957,0.726 -1.932,0.688 -1.894,0.663 -1.850,0.654 -1.806,0.663 -1.768,0.688 -1.743,0.726 -1.734,0.770;-1.734,-0.770 -1.743,-0.726 -1.768,-0.688 -1.806,-0.663 -1.850,-0.654 -1.894,-0.663 -1.932,-0.688 -1.957,-0.726 -1.966,-0.770 -1.957,-0.814 -1.932,-0.852 -1.894,-0.877 -1.850,-0.886 -1.806,-0.877 -1.768,-0.852 -1.743,-0.814 -1.734,-0.770;-0.654,-1.850 -0.663,-1.806 -0.688,-1.768 -0.726,-1.743 -0.770,-1.734 -0.814,-1.743 -0.852,-1.768 -0.877,-1.806 -0.886,-1.850 -0.877,-1.894 -0.852,-1.932 -0.814,-1.957 -0.770,-1.966 -0.726,-1.957 -0.688,-1.932 -0.663,-1.894 -0.654,-1.850;0.886,-1.850 0.877,-1.806 0.852,-1.768 0.814,-1.743 0.770,-1.734 0.726,-1.743 0.688,-1.768 0.663,-1.806 0.654,-1.850 0.663,-1.894 0.688,-1.932 0.726,-1.957 0.770,-1.966 0.814,-1.957 0.852,-1.932 0.877,-1.894 0.886,-1.850;1.966,-0.770 1.957,-0.726 1.932,-0.688 1.894,-0.663 1.850,-0.654 1.806,-0.663 1.768,-0.688 1.743,-0.726 1.734,-0.770 1.743,-0.814 1.768,-0.852 1.806,-0.877 1.850,-0.886 1.894,-0.877 1.932,-0.852 1.957,-0.814 1.966,-0.770;3.016,0.780 3.007,0.824 2.982,0.862 2.944,0.887 2.900,0.896 2.856,0.887 2.818,0.862 2.793,0.824 2.784,0.780 2.793,0.736 2.818,0.698 2.856,0.673 2.900,0.664 2.944,0.673 2.982,0.698 3.007,0.736 3.016,0.780;2.818,0.698 2.982,0.862;2.818,0.862 2.982,0.698;2.236,2.120 2.227,2.164 2.202,2.202 2.164,2.227 2.120,2.236 2.076,2.227 2.038,2.202 2.013,2.164 2.004,2.120 2.013,2.076 2.038,2.038 2.076,2.013 2.120,2.004 2.164,2.013 2.202,2.038 2.227,2.076 2.236,2.120;2.038,2.038 2.202,2.202;2.038,2.202 2.202,2.038;0.896,2.900 0.887,2.944 0.862,2.982 0.824,3.007 0.780,3.016 0.736,3.007 0.698,2.982 0.673,2.944 0.664,2.900 0.673,2.856 0.698,2.818 0.736,2.793 0.780,2.784 0.824,2.793 0.862,2.818 0.887,2.856 0.896,2.900;0.698,2.818 0.862,2.982;0.698,2.982 0.862,2.818;-0.664,2.900 -0.673,2.944 -0.698,2.982 -0.736,3.007 -0.780,3.016 -0.824,3.007 -0.862,2.982 -0.887,2.944 -0.896,2.900 -0.887,2.856 -0.862,2.818 -0.824,2.793 -0.780,2.784 -0.736,2.793 -0.698,2.818 -0.673,2.856 -0.664,2.900;-0.862,2.818 -0.698,2.982;-0.862,2.982 -0.698,2.818;-2.004,2.120 -2.013,2.164 -2.038,2.202 -2.076,2.227 -2.120,2.236 -2.164,2.227 -2.202,2.202 -2.227,2.164 -2.236,2.120 -2.227,2.076 -2.202,2.038 -2.164,2.013 -2.120,2.004 -2.076,2.013 -2.038,2.038 -2.013,2.076 -2.004,2.120;-2.202,2.038 -2.038,2.202;-2.202,2.202 -2.038,2.038;-2.784,0.780 -2.793,0.824 -2.818,0.862 -2.856,0.887 -2.900,0.896 -2.944,0.887 -2.982,0.862 -3.007,0.824 -3.016,0.780 -3.007,0.736 -2.982,0.698 -2.944,0.673 -2.900,0.664 -2.856,0.673 -2.818,0.698 -2.793,0.736 -2.784,0.780;-2.982,0.698 -2.818,0.862;-2.982,0.862 -2.818,0.698;-2.784,-0.780 -2.793,-0.736 -2.818,-0.698 -2.856,-0.673 -2.900,-0.664 -2.944,-0.673 -2.982,-0.698 -3.007,-0.736 -3.016,-0.780 -3.007,-0.824 -2.982,-0.862 -2.944,-0.887 -2.900,-0.896 -2.856,-0.887 -2.818,-0.862 -2.793,-0.824 -2.784,-0.780;-2.982,-0.862 -2.818,-0.698;-2.982,-0.698 -2.818,-0.862;-2.004,-2.120 -2.013,-2.076 -2.038,-2.038 -2.076,-2.013 -2.120,-2.004 -2.164,-2.013 -2.202,-2.038 -2.227,-2.076 -2.236,-2.120 -2.227,-2.164 -2.202,-2.202 -2.164,-2.227 -2.120,-2.236 -2.076,-2.227 -2.038,-2.202 -2.013,-2.164 -2.004,-2.120;-2.202,-2.202 -2.038,-2.038;-2.202,-2.038 -2.038,-2.202;-0.664,-2.900 -0.673,-2.856 -0.698,-2.818 -0.736,-2.793 -0.780,-2.784 -0.824,-2.793 -0.862,-2.818 -0.887,-2.856 -0.896,-2.900 -0.887,-2.944 -0.862,-2.982 -0.824,-3.007 -0.780,-3.016 -0.736,-3.007 -0.698,-2.982 -0.673,-2.944 -0.664,-2.900;-0.862,-2.982 -0.698,-2.818;-0.862,-2.818 -0.698,-2.982;0.896,-2.900 0.887,-2.856 0.862,-2.818 0.824,-2.793 0.780,-2.784 0.736,-2.793 0.698,-2.818 0.673,-2.856 0.664,-2.900 0.673,-2.944 0.698,-2.982 0.736,-3.007 0.780,-3.016 0.824,-3.007 0.862,-2.982 0.887,-2.944 0.896,-2.900;0.698,-2.982 0.862,-2.818;0.698,-2.818 0.862,-2.982;2.236,-2.120 2.227,-2.076 2.202,-2.038 2.164,-2.013 2.120,-2.004 2.076,-2.013 2.038,-2.038 2.013,-2.076 2.004,-2.120 2.013,-2.164 2.038,-2.202 2.076,-2.227 2.120,-2.236 2.164,-2.227 2.202,-2.202 2.227,-2.164 2.236,-2.120;2.038,-2.202 2.202,-2.038;2.038,-2.038 2.202,-2.202;3.016,-0.780 3.007,-0.736 2.982,-0.698 2.944,-0.673 2.900,-0.664 2.856,-0.673 2.818,-0.698 2.793,-0.736 2.784,-0.780 2.793,-0.824 2.818,-0.862 2.856,-0.887 2.900,-0.896 2.944,-0.887 2.982,-0.862 3.007,-0.824 3.016,-0.780;2.818,-0.862 2.982,-0.698;2.818,-0.698 2.982,-0.862;2.00,0.00 1.97,0.35 1.88,0.68 1.73,1.00 1.53,1.29 1.29,1.53 1.00,1.73 0.68,1.88 0.35,1.97 0.00,2.00 -0.35,1.97 -0.68,1.88 -1.00,1.73 -1.29,1.53 -1.53,1.29 -1.73,1.00 -1.88,0.68 -1.97,0.35 -2.00,0.00 -1.97,-0.35 -1.88,-0.68 -1.73,-1.00 -1.53,-1.29 -1.29,-1.53 -1.00,-1.73 -0.68,-1.88 -0.35,-1.97 -0.00,-2.00 0.35,-1.97 0.68,-1.88 1.00,-1.73 1.29,-1.53 1.53,-1.29 1.73,-1.00 1.88,-0.68 1.97,-0.35 2.00,-0.00;3.00,0.00 2.95,0.52 2.82,1.03 2.60,1.50 2.30,1.93 1.93,2.30 1.50,2.60 1.03,2.82 0.52,2.95 0.00,3.00 -0.52,2.95 -1.03,2.82 -1.50,2.60 -1.93,2.30 -2.30,1.93 -2.60,1.50 -2.82,1.03 -2.95,0.52 -3.00,0.00 -2.95,-0.52 -2.82,-1.03 -2.60,-1.50 -2.30,-1.93 -1.93,-2.30 -1.50,-2.60 -1.03,-2.82 -0.52,-2.95 -0.00,-3.00 0.52,-2.95 1.03,-2.82 1.50,-2.60 1.93,-2.30 2.30,-1.93 2.60,-1.50 2.82,-1.03 2.95,-0.52 3.00,-0.00" curve="2.5*cos(t),2.5*sin(t),0,6.29" vettori="-2.5,0,-2.5,-1.1,B" segmenti="0,0,1.77,1.77" etichette="0.75,1.15,r" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Toroid seen from above: the turns come out of the page at the inner edge and go into it at the outer edge; the circle of radius $r$ encloses the current $I$ $N$ times"}

:::dimostrazione
By the rotational symmetry about the axis of the toroid, the field lines are coaxial circles and the magnitude of the field depends only on the distance $r$ from the axis. We apply Ampère's law to the coaxial circle of radius $r$, in the equatorial plane of the ring, and the circulation equals $B\,2\pi r$.

- If $a < r < b$, the circle is crossed once by each of the $N$ turns, where they pass along the inner edge, so $I_{\text{enc}} = N I$ and $B = \dfrac{\mu_0 N I}{2\pi r}$.
- If $r < a$, the circle is not crossed by any turn, so $I_{\text{enc}} = 0$.
- If $r > b$, each turn crosses the surface twice, upward at the inner edge and downward at the outer edge, so $I_{\text{enc}} = N I - N I = 0$.
:::
::::

## Flux of the magnetic field and Gauss's law

:::richiamo{titolo="Flux of a vector field"}
The **flux** of a vector field $\vec{F}$ through an oriented surface $S$, with unit normal vector $\hat{n}$, is the surface integral $\displaystyle\iint_S \vec{F} \cdot \hat{n}\,dA$. If $S$ is plane, of area $A$, and $\vec{F}$ is uniform, the flux equals $F A\cos\theta$, with $\theta$ the angle between $\vec{F}$ and $\hat{n}$. The divergence theorem transforms the outward flux through a closed surface into the integral of the divergence over the enclosed volume. See the topic on surfaces, fluxes and the theorems of Gauss and Stokes in Mathematical Analysis 2.
:::

:::definizione{#flusso-campo-magnetico titolo="Flux of the magnetic field"}
The **flux of the magnetic field** through an oriented surface $S$ is
$$
\Phi_B = \iint_S \vec{B} \cdot \hat{n}\,dA .
$$
It is measured in **webers**, $1\,\mathrm{Wb} = 1\,\mathrm{T\cdot m^2}$. For a plane surface of area $A$ in a uniform field we have $\Phi_B = B A\cos\theta$, with $\theta$ the angle between $\vec{B}$ and the normal: the flux is maximum when the field is perpendicular to the surface and zero when it is parallel. A loop of radius $5.0\,\mathrm{cm}$ perpendicular to a uniform field of $0.25\,\mathrm{T}$ is crossed by the flux $\Phi_B = 0.25 \cdot \pi \cdot 0.050^2\,\mathrm{Wb} \approx 2.0 \cdot 10^{-3}\,\mathrm{Wb}$. Changes in the flux produce induced currents, for which see the topic on electromagnetic induction.
:::

:::teorema{#legge-gauss-magnetismo titolo="Gauss's law for the magnetic field"}
The outward flux of the magnetic field through *every* closed surface $S$ is zero:
$$
\oint_S \vec{B} \cdot \hat{n}\,dA = 0 .
$$
It is an experimental law, one of the postulates of electromagnetism: it expresses the fact that isolated magnetic charges, the so-called magnetic monopoles, have never been observed.

It follows that the magnetic field lines have neither beginning nor end, as in the fields of the wire, the loop and the solenoid. Moreover, by the divergence theorem, the law is equivalent to the local form $\nabla \cdot \vec{B} = 0$, while for the electric field the divergence is proportional to the charge density.
:::

:::osservazione{#flusso-concatenato titolo="Flux linked with a closed line"}
Let $S_1$ and $S_2$ be two surfaces that have the same boundary $\gamma$, oriented consistently with the sense of traversal of $\gamma$. The two surfaces together form a closed surface, on which the outward normal coincides with that of $S_1$ and with the opposite of that of $S_2$, or vice versa. By Gauss's law for the magnetic field the total outward flux is zero, so
$$
\Phi_B(S_1) - \Phi_B(S_2) = 0 .
$$
The flux therefore depends only on the closed line $\gamma$, and we speak of the **flux linked** with $\gamma$: to compute it one chooses the most convenient surface, usually the plane one. For a coil of $N$ identical turns crossed by the same field the linked flux is $N$ times the flux through one turn; for example, in a long solenoid of cross section $A$ with $N$ turns the linked flux is $N \mu_0 n I A$.
:::

:::esempio{titolo="Flux of the field of a wire through a rectangular loop"}
An infinite straight wire, carrying the current $I$, lies in the plane of a rectangular loop with two sides of length $\ell$ parallel to the wire, at distances $a$ and $b$ from the wire, with $a < b$. The field of the wire is perpendicular to the plane of the loop but it is not uniform, therefore the loop is divided into strips parallel to the wire, of width $dr$ and area $\ell\,dr$, on each of which the field is constant:
$$
\Phi_B = \int_a^b \frac{\mu_0 I}{2\pi r}\,\ell\,dr = \frac{\mu_0 I \ell}{2\pi}\,\ln\frac{b}{a} .
$$
With $I = 10\,\mathrm{A}$, $\ell = 20\,\mathrm{cm}$, $a = 2.0\,\mathrm{cm}$ and $b = 8.0\,\mathrm{cm}$ we obtain $\Phi_B = 2 \cdot 10^{-7} \cdot 10 \cdot 0.20 \cdot \ln 4\,\mathrm{Wb} \approx 5.5 \cdot 10^{-7}\,\mathrm{Wb}$.

::grafico{assi=0 uguale=1 linee="1.590,1.500 1.583,1.534 1.564,1.564 1.534,1.583 1.500,1.590 1.466,1.583 1.436,1.564 1.417,1.534 1.410,1.500 1.417,1.466 1.436,1.436 1.466,1.417 1.500,1.410 1.534,1.417 1.564,1.436 1.583,1.466 1.590,1.500;1.436,1.436 1.564,1.564;1.436,1.564 1.564,1.436;3.390,1.500 3.383,1.534 3.364,1.564 3.334,1.583 3.300,1.590 3.266,1.583 3.236,1.564 3.217,1.534 3.210,1.500 3.217,1.466 3.236,1.436 3.266,1.417 3.300,1.410 3.334,1.417 3.364,1.436 3.383,1.466 3.390,1.500;3.236,1.436 3.364,1.564;3.236,1.564 3.364,1.436;1.590,2.700 1.583,2.734 1.564,2.764 1.534,2.783 1.500,2.790 1.466,2.783 1.436,2.764 1.417,2.734 1.410,2.700 1.417,2.666 1.436,2.636 1.466,2.617 1.500,2.610 1.534,2.617 1.564,2.636 1.583,2.666 1.590,2.700;1.436,2.636 1.564,2.764;1.436,2.764 1.564,2.636;3.390,2.700 3.383,2.734 3.364,2.764 3.334,2.783 3.300,2.790 3.266,2.783 3.236,2.764 3.217,2.734 3.210,2.700 3.217,2.666 3.236,2.636 3.266,2.617 3.300,2.610 3.334,2.617 3.364,2.636 3.383,2.666 3.390,2.700;3.236,2.636 3.364,2.764;3.236,2.764 3.364,2.636;0,-0.2 0,4.3;1,0.8 4,0.8 4,3.4 1,3.4 1,0.8" poligoni="2.2,0.8 2.5,0.8 2.5,3.4 2.2,3.4" vettori="0,1.6,0,2.6,I" segmenti="0,0.45,1,0.45;0,0.05,4,0.05" etichette="0.4,0.58,a;1.9,0.18,b;4.15,2.0,ℓ;2.1,3.62,dr" xmin=-0.6 xmax=5 ymin=-0.3 ymax=4.4 titolo="Rectangular loop in the plane of a wire: the field points into the page and decreases with distance, and the strip of width $dr$ is crossed by the flux $\dfrac{\mu_0 I}{2\pi r}\,\ell\,dr$"}

:::

## Magnetic materials

:::definizione{#permeabilita-relativa titolo="Magnetization and relative permeability"}
The atoms of a material possess magnetic moments, due to the orbital motion and the spin of the electrons. In the presence of an external field these moments align at least partially, and the material acquires a **magnetization** $\vec{M}$, that is a magnetic moment per unit volume, which is measured in $\mathrm{A/m}$. A cylinder uniformly magnetized along its axis produces the same field as a surface current of $M$ amperes per meter of length, that is of a solenoid with $n I = M$.

Consider a long solenoid filled with a homogeneous material. The field inside is the sum of the field of the turns and that of the material, $B = \mu_0\,(n I + M)$. In **linear** materials the magnetization is proportional to $nI$, $M = \chi_m\, n I$, where the dimensionless constant $\chi_m$ is the **magnetic susceptibility**; hence
$$
B = \mu_r\, \mu_0\, n I , \qquad \mu_r = 1 + \chi_m .
$$
The constant $\mu_r$ is the **relative magnetic permeability** of the material, analogous to the relative dielectric constant $\varepsilon_r$. For example, in an empty solenoid with $500$ turns per meter and $I = 0.40\,\mathrm{A}$ the field equals $2.5 \cdot 10^{-4}\,\mathrm{T}$; an iron core which under these conditions has $\mu_r \approx 2000$ raises it to about $0.50\,\mathrm{T}$.
:::

:::osservazione{#classi-materiali-magnetici titolo="Diamagnets, paramagnets and ferromagnets"}
- In **diamagnets**, such as copper, water and bismuth, the susceptibility is negative and very small in absolute value, so the magnetization is opposite to the applied field and the material is weakly repelled from regions of strong field.
- In **paramagnets**, such as aluminum and oxygen, the susceptibility is positive and small, because the atomic magnetic moments align only partially in the sense of the field, opposed by thermal agitation.
- In **ferromagnets**, such as iron, nickel and cobalt, the atomic moments are aligned in extended regions, the magnetic domains, and the relative permeability reaches values from hundreds to tens of thousands. The relation between $M$ and $nI$ is *not* linear and depends on the history of the material (hysteresis), and a magnetization can remain even at zero current, as in permanent magnets.

Above a characteristic temperature, the **Curie temperature**, a ferromagnet becomes a paramagnet; for iron it is about $770\,^\circ\mathrm{C}$. In diamagnets and paramagnets $\mu_r$ is very close to $1$, and in calculations $\mu_0$ is usually used as in vacuum.
:::
