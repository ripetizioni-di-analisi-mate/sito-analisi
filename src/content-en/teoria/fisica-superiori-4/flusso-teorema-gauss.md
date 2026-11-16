---
titolo: Electric flux and Gauss's law
sommario: How to orient a surface, add flux contributions, and use symmetry to determine the electric field.
---

## Oriented surfaces and the normal component

:::definizione{#superficie-orientata titolo="Oriented area"}
A flat surface of area $A$ has two possible unit normals, perpendicular to the plane and pointing in opposite directions. Once the unit vector $\hat n$ has been chosen, the area vector is $\vec A=A\hat n$. Reversing the orientation replaces $\vec A$ with $-\vec A$.

A closed surface bounds a volume, so at each point we choose the **outward** normal. The unit normals to opposite faces of a cube point in opposite directions. On a sphere centered at the origin, the unit normal at a point is the radial unit vector $\hat r$ pointing from the center to that point. On a curved surface the normal is perpendicular to the tangent plane at the point in question.
:::

:::esempio{titolo="Normal component on a face"}
An electric field $\vec E$ makes an angle $\theta$ with $\hat n$. Its signed normal component is $E_n=\vec E\cdot\hat n=E\cos\theta$, where $E$ is its magnitude. If the field crosses the face outward, $E_n>0$. If it crosses in the direction opposite to $\hat n$, $E_n<0$. A field parallel to the face has $E_n=0$.

::grafico{assi=0 uguale=1 linee="-2.1,0 2.6,0" vettori="0,0,0,2,n;0,0,2.08,1.2,E" etichette="0.47,0.79,60°;0.76,-0.35,plane" xmin=-2.7 xmax=3 ymin=-0.75 ymax=2.25 titolo="Cross-section of the flat surface. The field makes a $60^\circ$ angle with the normal and a $30^\circ$ angle with the plane."}

:::

## Electric flux through a surface

:::definizione{#flusso titolo="Flux of the electric field"}
If $\vec E$ is uniform over a flat surface, the **flux** is the normal component times the area,
$$
\Phi_E=\vec E\cdot\vec A=EA\cos\theta.
$$
The unit is $\mathrm{N\,m^2/C}$. Reversing the normal changes the angle to $180^\circ-\theta$, so the cosine changes sign and the flux becomes $-\Phi_E$. The field in space remains the same.
:::

:::esempio{titolo="An angle measured from the plane"}
A field with magnitude $200\,\mathrm{N/C}$ makes an angle of $30^\circ$ with a plane of area $0.030\,\mathrm{m^2}$. The normal is chosen on the side toward which the field points. The angle to the normal is $60^\circ$. Since $\cos60^\circ=\dfrac12$,
$$
\Phi_E=200\cdot0.030\cdot\frac12\,\mathrm{N\,m^2/C}
=3\,\mathrm{N\,m^2/C}.
$$
With the opposite normal the angle is $120^\circ$ and the flux is $-3\,\mathrm{N\,m^2/C}$.
:::

:::osservazione
On a curved surface or in a varying field, take area elements small enough for both the field and the normal to be considered constant on each element. An oriented element of area $\Delta A$ contributes $\vec E\cdot\hat n\,\Delta A$. Adding the signed contributions and passing to the limit gives $\Phi_E=\int_S\vec E\cdot\hat n\,\mathrm{d}A$.
:::

## Gauss's law

:::teorema{#gauss titolo="Total flux and enclosed charge"}
For any closed surface oriented with outward normals, the total electric flux is
$$
\Phi_{E,\mathrm{chiusa}}=\frac{Q_{\mathrm{int}}}{\varepsilon_0},
\qquad
\varepsilon_0=8.85\cdot10^{-12}\,\mathrm{C^2/(N\,m^2)}.
$$
Here $Q_{\mathrm{int}}$ is the **algebraic sum** of the enclosed charges. Charges lying exactly on the boundary can be avoided by shifting the Gaussian surface slightly. An external charge affects the local field, while its contribution to the net flux is zero.
:::

:::esempio{titolo="Signed net charge"}
A closed surface encloses charges of $+4\,\mathrm{nC}$ and $-6\,\mathrm{nC}$. Their sum is $-2\,\mathrm{nC}$. Since $1\,\mathrm{nC}=10^{-9}\,\mathrm{C}$, the total flux is
$$
\Phi_{E,\mathrm{chiusa}}=
\frac{-2\cdot10^{-9}}{8.85\cdot10^{-12}}\,\mathrm{N\,m^2/C}
\simeq -226\,\mathrm{N\,m^2/C}.
$$
The negative flux means that inward contributions dominate the sum over the entire surface. The field can still point outward in individual regions.
:::

:::attenzione
A cube in a uniform field can have **zero net flux with a nonzero field**. Suppose the field of magnitude $E$ is parallel to an edge. It exits through one face of area $A$ and enters through the opposite one, with contributions $+EA$ and $-EA$. It is tangent to the remaining four faces. The sum is zero, consistent with the absence of net enclosed charge.

::grafico{assi=0 uguale=1 linee="-1.6,-1.35 1.6,-1.35 1.6,1.35 -1.6,1.35 -1.6,-1.35" vettori="-2.65,0.57,2.65,0.57,E;-1.63,0,-2.45,0,n₁;1.63,0,2.45,0,n₂" etichette="-2.45,-0.85,−EA;1.88,-0.85,+EA" xmin=-3.2 xmax=3.2 ymin=-1.72 ymax=1.72 titolo="Cross-section of the cube. The two faces crossed by the field have opposite normals and canceling fluxes."}

:::

:::richiamo{titolo="Field of a point charge"}
**Hypothesis:** a point charge $Q$ is at rest in vacuum and $r$ is the distance from the point considered.

**Conclusion:** the field is radial and its signed radial component is $E_r=\dfrac{Q}{4\pi\varepsilon_0r^2}$.
:::

::::teorema{#gauss-puntiforme titolo="Flux of a point charge through a sphere"}
A point charge $Q$ sits at the center of a sphere of radius $r$. The flux of the electric field through the sphere, with outward normals, is
$$
\Phi_E=\frac{Q}{\varepsilon_0}
$$
for every value of $r$. This is the special case of Gauss's law that follows directly from Coulomb's law. The flux is independent of the radius, since the field decreases as $\dfrac{1}{r^2}$ while the area of the sphere grows as $r^2$.

:::dimostrazione
At every point of the sphere the field is radial and the outward normal is $\hat r$, so $\vec E\cdot\hat n=E_r$. By Coulomb's law $E_r$ depends only on $r$, so it has the same value at all points of the sphere. The flux is the product of $E_r$ and the area $4\pi r^2$,
$$
\begin{aligned}
\Phi_E&=E_r\cdot4\pi r^2\\[6pt]
&=\frac{Q}{4\pi\varepsilon_0r^2}\cdot4\pi r^2\\[6pt]
&=\frac{Q}{\varepsilon_0}.
\end{aligned}
$$
The radius cancels, so the result holds for every sphere centered on the charge. If $Q<0$ the field points inward, $E_r<0$, and the flux is negative.
:::
::::

:::esempio{titolo="Same flux on different spheres"}
A charge $Q=+2\,\mathrm{nC}$ is at the center of two spheres, of radii $0.10\,\mathrm{m}$ and $0.50\,\mathrm{m}$. On the first the field is $1.80\cdot10^{3}\,\mathrm{N/C}$ and the area is $0.126\,\mathrm{m^2}$. On the second the field is $71.9\,\mathrm{N/C}$ and the area is $3.14\,\mathrm{m^2}$. In both cases the product is $226\,\mathrm{N\,m^2/C}$, that is, $\dfrac{Q}{\varepsilon_0}$.

::grafico{assi=0 uguale=1 unicolore=1 curve="1.6*cos(t),1.6*sin(t),0,6.28318530718" punti="0,0,pieno,Q" vettori="1.60,0.00,2.50,0.00;1.13,1.13,1.77,1.77;0.00,1.60,0.00,2.50;-1.13,1.13,-1.77,1.77;-1.60,0.00,-2.50,0.00;-1.13,-1.13,-1.77,-1.77;-0.00,-1.60,-0.00,-2.50;1.13,-1.13,1.77,-1.77" xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="Charge $+Q$ at the center of a Gaussian sphere. At every point of the surface the field is parallel to the outward normal."}

:::

:::attenzione
The value $\dfrac{Q}{\varepsilon_0}$ refers to the flux through a *closed* surface and does not hold for an open surface. If the charge $+2\,\mathrm{nC}$ is at the center of a sphere, a hemispherical cap occupies half the area. The field has the same magnitude and the same angle with the normal at every point, so the cap receives half the flux, that is, $113\,\mathrm{N\,m^2/C}$ and not $226\,\mathrm{N\,m^2/C}$.
:::

## Spherical symmetry

::::teorema{#sfera titolo="Field of a spherically symmetric distribution"}
For a spherically symmetric charge distribution, the field is radial. Its signed radial component $E_r=\vec E\cdot\hat r$ has the same value at all points the same distance $r>0$ from the center. A spherical Gaussian surface centered there gives
$$
E_r=\frac{Q_{\mathrm{int}}(r)}{4\pi\varepsilon_0r^2}.
$$
Outside the distribution, $Q_{\mathrm{int}}(r)=Q$, the total charge. The exterior field therefore equals that of a point charge $Q$ at the center. The field points outward if $E_r>0$ and inward if $E_r<0$. The magnitude is $E=|E_r|$.

:::dimostrazione
Rotational symmetry about the radial direction rules out tangential components. A rotation about the center can also carry any point on the surface to any other point. The radial component therefore has the same value over the whole sphere. Since the outward normal is $\hat r$, the total flux is $E_r$ times the area $4\pi r^2$. Gauss's law gives $4\pi r^2E_r=\dfrac{Q_{\mathrm{int}}(r)}{\varepsilon_0}$.
:::
::::

:::esempio{titolo="An exterior field pointing toward the center"}
A spherical distribution with total charge $-1\,\mathrm{nC}$ lies within a radius of $0.10\,\mathrm{m}$. At a distance $r=0.20\,\mathrm{m}$ all the charge is enclosed. The result is
$$
E_r=\frac{-10^{-9}}{4\pi\cdot8.85\cdot10^{-12}\cdot(0.20)^2}\,\mathrm{N/C}
\simeq-225\,\mathrm{N/C}.
$$
The sign specifies the direction toward the center. Doubling the distance leaves the same charge inside the Gaussian sphere. The area quadruples, so the field magnitude becomes one-quarter as large and the total flux stays the same.
:::

:::teorema{#sfera-uniforme titolo="Field inside a charged insulating sphere"}
Let $R$ be the radius of an insulating sphere with total charge $Q$ distributed at uniform volume density. The inner sphere of radius $r<R$ encloses a fraction of the charge equal to its fraction of the total volume,
$$
Q_{\mathrm{int}}(r)
=Q\frac{\frac43\pi r^3}{\frac43\pi R^3}
=Q\left(\frac{r}{R}\right)^3.
$$
Substitution into Gauss's law gives $E_r=\dfrac{Qr}{4\pi\varepsilon_0R^3}$. At the center the field is zero by symmetry, and the magnitude rises linearly up to $r=R$. The interior value approaches the exterior value as $r\to R$, since this model has a volume density with no separate surface charge.

::grafico{f="x<=1?x:1/(x^2)" xmin=0 xmax=3 ymin=0 ymax=1.25 punti="1,1,pieno;0.5,0.5,pieno;2,0.25,pieno" nomi="r/R,E/Eₛ" legenda="\dfrac{E}{E_s}" titolo="Normalized magnitude for the insulating sphere, with $E_s$ the magnitude at the surface. At $r=\dfrac R2$ we have $E=\dfrac{E_s}2$, and at $r=2R$ we have $E=\dfrac{E_s}4$."}

:::

:::attenzione
Inside a charged insulating sphere, the formula for the exterior field with the total charge does not apply. For $R=0.10\,\mathrm{m}$ and $Q=1.5\,\mathrm{nC}$, at $r=0.040\,\mathrm{m}$ the formula $\dfrac{Q}{4\pi\varepsilon_0r^2}$ would give $8.43\cdot10^{3}\,\mathrm{N/C}$. The Gaussian sphere of that radius encloses only the fraction $\left(\dfrac{r}{R}\right)^3=0.064$ of the charge, so the field is $540\,\mathrm{N/C}$, about $16$ times smaller.
:::

:::richiamo{titolo="Field of a spherically symmetric distribution"}
**Hypothesis:** the charge distribution is spherically symmetric and $Q_{\mathrm{int}}(r)$ is the charge enclosed in the sphere of radius $r$.

**Conclusion:** $E_r=\dfrac{Q_{\mathrm{int}}(r)}{4\pi\varepsilon_0r^2}$.
:::

::::teorema{#guscio titolo="Field of a spherical shell"}
A thin spherical shell of radius $R$ carries the charge $Q$ with uniform surface density $\sigma_q=\dfrac{Q}{4\pi R^2}$. The field is zero inside and, outside, coincides with that of a point charge $Q$ at the center,
$$
E_r=
\begin{cases}
0 & \text{if } r<R,\\[6pt]
\dfrac{Q}{4\pi\varepsilon_0r^2} & \text{if } r>R.
\end{cases}
$$
It is used for hollow bodies charged on the surface and for conducting spheres.

:::dimostrazione
The distribution has spherical symmetry, so $E_r=\dfrac{Q_{\mathrm{int}}(r)}{4\pi\varepsilon_0r^2}$ holds. All the charge lies on the shell. A Gaussian sphere with $r<R$ lies inside the shell and encloses no charge, so $Q_{\mathrm{int}}=0$ and $E_r=0$. A Gaussian sphere with $r>R$ contains the whole shell, so $Q_{\mathrm{int}}=Q$ and the formula for the field of a point charge is obtained.
:::
::::

:::esempio{titolo="Charged shell"}
A shell of radius $R=0.10\,\mathrm{m}$ carries $Q=+4\,\mathrm{nC}$. The surface density is $\sigma_q=\dfrac{Q}{4\pi R^2}=3.18\cdot10^{-8}\,\mathrm{C/m^2}$. Inside the shell the field is zero. Just outside it is $3.60\cdot10^{3}\,\mathrm{N/C}$ and at $r=0.20\,\mathrm{m}$ it is $899\,\mathrm{N/C}$, one fourth of the previous value.

::grafico{f="x<1?0:1/(x^2)" xmin=0 xmax=3 ymin=0 ymax=1.25 punti="1,1,pieno;1,0,vuoto;2,0.25,pieno" nomi="r/R,E/Eₛ" legenda="\dfrac{E}{E_s}" titolo="Normalized magnitude of the field of a shell, with $E_s$ the value just outside. Inside the shell $E=0$."}

:::

:::osservazione
At the shell the field magnitude jumps from zero to $\dfrac{Q}{4\pi\varepsilon_0R^2}=\dfrac{\sigma_q}{\varepsilon_0}$, which in the example is $3.60\cdot10^{3}\,\mathrm{N/C}$. The jump equals the ratio of the surface density to $\varepsilon_0$, the same value as the field just outside a conductor.
:::

## Cylindrical symmetry and an infinite wire

::::teorema{#filo titolo="Field of an infinite straight wire"}
An infinite wire with uniform linear density $\lambda_q$ carries charge $\lambda_q L$ on a segment of length $L$. At a distance $r$ from the axis, the field is radial in the plane perpendicular to the wire, and its outward component is
$$
E_r=\frac{\lambda_q}{2\pi\varepsilon_0r}.
$$
The field points toward the wire if $\lambda_q<0$. The model describes the central part of a finite wire when the observation point is much closer to the axis than to either end.

:::dimostrazione
Translations along the wire and rotations about it make every point on the curved side of a coaxial cylinder equivalent. Reflection in the plane perpendicular to the wire through the point rules out an axial component. Reflection in the plane containing both the wire and the point rules out a tangential component around the axis. The field is normal to the curved side and tangent to the end caps. Therefore
$$
\begin{aligned}
\Phi_{\mathrm{basi}} &=0,\\[6pt]
\Phi_{\mathrm{mantello}}&=E_r\,2\pi rL
=\frac{\lambda_qL}{\varepsilon_0}.
\end{aligned}
$$
The length $L$ cancels. The field depends on radial distance, while the cylinder length is a calculation choice.
:::
::::

:::esempio{titolo="Contributions from the curved side and end caps"}
For a wire with $\lambda_q=1\,\mathrm{nC/m}$ at $r=0.10\,\mathrm{m}$ the magnitude is $E\simeq180\,\mathrm{N/C}$. Doubling $r$ at the same $L$ leaves the same enclosed charge and doubles the curved side's area. The field falls by half to about $90\,\mathrm{N/C}$.

::grafico{assi=0 uguale=1 linee="-2.4,-1.12 2.4,-1.12 2.4,1.12 -2.4,1.12 -2.4,-1.12" segmenti="-3.12,0,3.12,0;0,-1.12,0,0;-2.4,-1.46,2.4,-1.46" vettori="-1.5,1.13,-1.5,1.71,E;1.2,-1.13,1.2,-1.72,E;0.85,0.24,0.85,0.84,E" etichette="-0.32,-0.59,r;-0.04,-1.6,L;2.58,-0.13,wire" xmin=-3.5 xmax=3.75 ymin=-1.95 ymax=1.95 titolo="Cross-section along the axis of the Gaussian cylinder. The field crosses the curved side and stays tangent to the end caps on the left and right."}

:::

:::esempio{titolo="Constant flux as the radius varies"}
A wire with $\lambda_q=2.0\,\mathrm{nC/m}$ passes through two coaxial cylinders $0.50\,\mathrm{m}$ long, of radii $0.20\,\mathrm{m}$ and $0.40\,\mathrm{m}$. Each encloses $1.0\,\mathrm{nC}$, so the flux is the same,
$$
\Phi_E=\frac{10^{-9}}{8.85\cdot10^{-12}}\,\mathrm{N\,m^2/C}\simeq113\,\mathrm{N\,m^2/C}.
$$
The areas of the curved sides are $0.628\,\mathrm{m^2}$ and $1.26\,\mathrm{m^2}$, so the field is $180\,\mathrm{N/C}$ on the first and $90\,\mathrm{N/C}$ on the second.
:::

:::osservazione
The field of the wire decreases as $\dfrac{1}{r}$. That of a point charge or of a spherical distribution decreases as $\dfrac{1}{r^2}$. If the two magnitudes coincide at $r=r_0$, at $r=2r_0$ the wire gives half the initial value and the sphere one fourth.

::grafico{f="1/x;1/(x^2)" xmin=0.2 xmax=3 ymin=0 ymax=3 punti="1,1,pieno;2,0.5,pieno;2,0.25,pieno" nomi="r/r₀,E/E₀" legenda="\dfrac{1}{r};\dfrac{1}{r^2}" titolo="Magnitudes normalized to the value $E_0$ they have at $r=r_0$. The curve that decreases more slowly is that of the wire, $\dfrac{1}{r}$."}

:::

## A charged plane and two plates

::::teorema{#piano titolo="Field of an infinite uniformly charged plane"}
For an infinite plane with uniform surface density $\sigma_q$, the field is perpendicular to the plane and has the same magnitude on both sides,
$$
E=\frac{|\sigma_q|}{2\varepsilon_0}.
$$
With $\sigma_q>0$ the fields point away from the plane. With $\sigma_q<0$ they point toward it. The magnitude in this model is independent of distance from the plane.

:::dimostrazione
Use a short cylindrical Gaussian surface that crosses the plane. Its equal end caps have area $A$ and are parallel to the plane. The field is tangent to the curved side, so the curved side contributes no flux. For positive charge, flux leaves through both caps and the sum is $2EA$. The charge enclosed is $\sigma_qA$, hence $2EA=\dfrac{\sigma_q A}{\varepsilon_0}$. For negative charge both caps have inward flux, and the field magnitude uses $|\sigma_q|$.
:::
::::

:::esempio{titolo="A Gaussian pillbox"}
Let the plane have $\sigma_q=8.85\cdot10^{-9}\,\mathrm{C/m^2}$. The formula gives $E=500\,\mathrm{N/C}$ on each side. For caps of area $0.10\,\mathrm{m^2}$, each cap has outward flux $50\,\mathrm{N\,m^2/C}$ and the total closed flux is $100\,\mathrm{N\,m^2/C}$.

::grafico{assi=0 uguale=1 linee="-2.55,0 2.55,0;-1.15,-0.65 1.15,-0.65 1.15,0.65 -1.15,0.65 -1.15,-0.65" vettori="-0.42,0.68,-0.42,1.48,E;0.42,-0.68,0.42,-1.48,E" etichette="-1.99,0.18,+σ;0.34,0.78,A;-0.5,-0.82,A" xmin=-2.85 xmax=2.85 ymin=-1.65 ymax=1.65 titolo="The charged plane cuts through the Gaussian cylinder. Both end caps give the same outward contribution."}

:::

:::teorema{#due-piani titolo="Field between oppositely charged plates"}
Two infinite parallel planes of densities $+\sigma_q$ and $-\sigma_q$, with $\sigma_q>0$, produce zero field outside and a uniform field inside by superposition. Between the planes each contribution points from the positive plane to the negative plane and has magnitude $\dfrac{\sigma_q}{2\varepsilon_0}$. Therefore
$$
E_{\mathrm{int}}=\frac{\sigma_q}{\varepsilon_0}.
$$
In the regions outside, the two magnitudes are equal and their directions are opposite. For finite plates the result is a good approximation in the central region when their separation is much smaller than their transverse dimensions.
:::

:::esempio{titolo="Field along the perpendicular to the plates"}
Two plates with densities $+8.85\cdot10^{-9}\,\mathrm{C/m^2}$ and $-8.85\cdot10^{-9}\,\mathrm{C/m^2}$ are $2\,\mathrm{cm}$ apart. Between the plates each plane contributes $500\,\mathrm{N/C}$ in the same direction, so $E_{\mathrm{int}}=\dfrac{\sigma_q}{\varepsilon_0}=1000\,\mathrm{N/C}$. Outside, the two contributions of $500\,\mathrm{N/C}$ have opposite directions and the field is zero.

::grafico{f="abs(x)<=1?1000:0" xmin=-3 xmax=3 ymin=0 ymax=1500 punti="0,1000,pieno" segmenti="-1,0,-1,1400;1,0,1,1400" etichette="-1.0,1450,+σ;1.0,1450,−σ" nomi="x,E" legenda="E" titolo="Field magnitude in $\mathrm{N/C}$ along the $x$ axis (in $\mathrm{cm}$) perpendicular to the plates, located at $x=-1\,\mathrm{cm}$ ($+\sigma_q$) and at $x=1\,\mathrm{cm}$ ($-\sigma_q$)."}

:::

:::attenzione
If the two plates have the same density $+\sigma_q$, superposition gives the opposite result: between the planes the two fields have opposite directions and cancel, outside they have the same direction and add. With $\sigma_q=8.85\cdot10^{-9}\,\mathrm{C/m^2}$ the field between the planes is zero and outside it is $1000\,\mathrm{N/C}$ on both sides.
:::

## Conductors in electrostatic equilibrium

:::teorema{#conduttore titolo="Field in the metal and just outside it"}
The electric field in the material of a conductor in electrostatic equilibrium is zero. An internal field would exert a force on the mobile charges and set them in motion. A Gaussian surface lying entirely in the metal therefore has zero flux. Any excess charge lies on the surfaces.

The field just outside the metal is normal to its surface. A tangential component would make charge flow along the metal. For a small cylindrical Gaussian surface that crosses the boundary, the inner cap has zero flux. In the limit of a thin cylinder, the curved side makes a negligible contribution. If $\sigma_q$ is the local surface charge density and $A$ the area of the outer cap,
$$
E_{n,\mathrm{est}}A=\frac{\sigma_q A}{\varepsilon_0}
\quad\Longrightarrow\quad
E_{n,\mathrm{est}}=\frac{\sigma_q}{\varepsilon_0}.
$$
For an isolated charged conducting sphere, the field magnitude goes from zero just inside to $\dfrac{|Q|}{4\pi\varepsilon_0R^2}$ just outside. Here the charge lies on the surface and the two one-sided limits differ.
:::

:::esempio{titolo="Charge induced on a cavity wall"}
A closed cavity inside a conductor contains a point charge $+3\,\mathrm{nC}$. A closed surface drawn in the metal around the cavity has zero flux because it lies where $\vec E=0$. The point charge and the charge induced on the inner wall must therefore sum to zero. The inner wall carries a total of $-3\,\mathrm{nC}$. If the conductor was neutral, a total of $+3\,\mathrm{nC}$ lies on its outer surface.

With no charge in the cavity, the entire inner wall is at the same potential. The electrostatic solution with this boundary has constant potential throughout the cavity, so its electric field is zero.
:::

:::esempio{titolo="Field just outside a conductor"}
A conductor has surface density $\sigma_q=8.85\cdot10^{-9}\,\mathrm{C/m^2}$ at a point of its surface. Just outside, the field is perpendicular to the surface and equals $\dfrac{\sigma_q}{\varepsilon_0}=1000\,\mathrm{N/C}$. An infinite insulating plane with the same density produces $\dfrac{\sigma_q}{2\varepsilon_0}=500\,\mathrm{N/C}$ on each side.
:::

:::osservazione
The double value compared with the insulating plane is explained by superposition. The charge near the point produces $\dfrac{\sigma_q}{2\varepsilon_0}$ outward outside the metal and $\dfrac{\sigma_q}{2\varepsilon_0}$ inward inside. All the other charges produce $\dfrac{\sigma_q}{2\varepsilon_0}$ outward both inside and outside. Inside the two contributions cancel, outside they add.
:::

:::esempio{titolo="Conducting shell with a charge in the cavity"}
A neutral conducting shell, with inner radius $0.10\,\mathrm{m}$ and outer radius $0.15\,\mathrm{m}$, has a charge $+3\,\mathrm{nC}$ at the center of the cavity. The inner wall carries $-3\,\mathrm{nC}$ and the outer surface $+3\,\mathrm{nC}$. Outside the shell the distribution has spherical symmetry and a Gaussian sphere of radius $0.30\,\mathrm{m}$ encloses the net charge $(+3-3+3)\,\mathrm{nC}=+3\,\mathrm{nC}$. The field is
$$
E=\frac{3\cdot10^{-9}}{4\pi\cdot8.85\cdot10^{-12}\cdot(0.30)^2}\,\mathrm{N/C}\simeq300\,\mathrm{N/C}.
$$
In the metal, between $0.10\,\mathrm{m}$ and $0.15\,\mathrm{m}$, the field is zero.
:::

## When flux determines the field

:::osservazione{#uso-simmetria titolo="Choosing a Gaussian surface"}
Gauss's law holds for every closed surface. To isolate the field in the equation, the symmetry of the charge distribution must determine the normal component on parts of the surface. On a concentric sphere $E_r$ is constant. On a cylinder around the wire it is constant on the curved side and zero on the caps. For a pillbox crossing a charged plane, the normal component is constant on the caps and zero on the curved side.

Moving a point charge from the center of a Gaussian sphere to another point inside leaves the enclosed charge unchanged. The field closer to the charge gets stronger, and the directions are no longer all radial relative to the sphere's center. Dividing the total flux by the area gives the average normal component, while finding the field at an individual point requires Coulomb's law.
:::

:::esempio{titolo="Zero flux and nonzero field"}
Two charges $+2\,\mathrm{nC}$ and $-2\,\mathrm{nC}$ are $0.10\,\mathrm{m}$ apart and both are enclosed by a sphere. The net charge is zero, so the total flux is zero. At the midpoint between the charges the field is not zero. Each charge is $0.050\,\mathrm{m}$ away and the two contributions have the same direction, from the positive charge toward the negative one, so
$$
E=2\cdot\frac{2\cdot10^{-9}}{4\pi\cdot8.85\cdot10^{-12}\cdot(0.050)^2}\,\mathrm{N/C}\simeq1.4\cdot10^{4}\,\mathrm{N/C}.
$$
Gauss's law does not allow us to find this field, because the distribution has no symmetry that makes the normal component constant on a surface.
:::
