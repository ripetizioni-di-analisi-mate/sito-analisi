---
titolo: Electric flux and Gauss's law
sommario: What the flux of the electric field through a surface measures, why the outward flux through a closed surface depends only on the enclosed charge, how Gauss's law gives the field of distributions with spherical, cylindrical and planar symmetry, and what its local form is.
---

## Electric flux

Throughout the topic the charges are at rest in an inertial reference frame and are in vacuum.

:::richiamo{titolo="Flux of a vector field"}
Let $S$ be a regular oriented surface, with unit normal vector $\hat{n}$ varying continuously over the surface, and let $\vec{F}$ be a vector field continuous on $S$. The flux of $\vec{F}$ through $S$ is the surface integral $\displaystyle\iint_S \vec{F} \cdot \hat{n}\, dA$, where $dA$ is the area element. See the topic on surfaces, flux and the theorems of Gauss and Stokes in Mathematical Analysis 2.
:::

:::definizione{#flusso-campo-elettrico titolo="Electric flux"}
Let $S$ be an oriented surface, with unit normal vector $\hat{n}$. The **electric flux** through $S$ is
$$
\Phi_E = \iint_S \vec{E} \cdot \hat{n}\, dA = \iint_S E \cos\theta \, dA ,
$$
where $\theta$ is the angle between $\vec{E}$ and $\hat{n}$ at the point of the surface. The flux is a scalar and is measured in $\mathrm{N \cdot m^2/C}$. The product $\hat{n}\,dA$ is also denoted by $d\vec{A}$ and is called the vector area element.

If the surface is flat, with area $A$, and the field is uniform, the integrand is constant and
$$
\Phi_E = E A \cos\theta .
$$
The flux is maximum when the field is perpendicular to the surface, that is, parallel to $\hat{n}$, and it is zero when the field is parallel to the surface. A square of side $0.10\,\mathrm{m}$ in a uniform field of $2.0 \cdot 10^3\,\mathrm{N/C}$ making the angle $\theta = 30^\circ$ with the normal is crossed by the flux $2.0 \cdot 10^3 \cdot 0.010 \cdot \cos 30^\circ\,\mathrm{N \cdot m^2/C} \approx 17\,\mathrm{N \cdot m^2/C}$.

::grafico{assi=0 uguale=1 linee="1.972,2.726 4.028,0.274" segmenti="0,0.4,5.8,0.4;0,0.95,5.8,0.95;0,1.5,5.8,1.5;0,2.05,5.8,2.05;0,2.6,5.8,2.6" vettori="0.1,2.6,1.5,2.6,E;3,1.5,3.996,2.336,n̂" punti="3,1.5,pieno" etichette="3.908,1.728,θ;1.622,2.826,S" xmin=-0.2 xmax=6 ymin=-0.1 ymax=3.1 titolo="Flat surface $S$ in a uniform field; the flux $\Phi_E = E A \cos\theta$ depends on the angle $\theta$ between $\vec{E}$ and the normal $\hat{n}$"}

:::

:::osservazione{#flusso-e-linee-di-campo titolo="Flux and field lines"}
Field lines are drawn with a density proportional to the magnitude of the field, that is, so that the number of lines crossing a small surface perpendicular to the field is proportional to $E\,dA$. With this convention the flux through a surface is proportional to the number of lines crossing it, counted with the plus sign if they pass in the direction of $\hat{n}$ and with the minus sign if they pass in the opposite direction. When a flat surface is tilted with respect to a uniform field, the lines crossing it decrease in proportion to $\cos\theta$, in agreement with the formula $E A \cos\theta$. For the construction of field lines, see the topic on the electric field.
:::

## Flux through a closed surface

:::definizione{#flusso-superficie-chiusa titolo="Outward flux through a closed surface"}
A closed surface $S$, such as a sphere or the surface of a cube, divides space into a bounded interior region and an exterior region. On a closed surface, by convention, the unit normal vector chosen at each point is the one pointing **outward** from the interior region, and the flux
$$
\Phi_E = \oint_S \vec{E} \cdot \hat{n}\, dA
$$
is called the outward flux through $S$; the circle on the integral sign indicates that the surface is closed. Where the field leaves the surface the contribution to the flux is positive, where it enters it is negative. A positive outward flux therefore indicates that the field lines leaving $S$ outnumber those entering, and a zero flux that they are equal in number.
:::

:::esempio{titolo="Cube in a uniform field"}
A cube of edge $\ell$ is in a uniform field $\vec{E} = E\,\hat{\imath}$, with its faces parallel to the coordinate planes. On the face through which the field enters, the outward unit vector is $-\hat{\imath}$, so the flux is $-E\ell^2$; on the opposite face the outward unit vector is $\hat{\imath}$ and the flux is $+E\ell^2$. On the other four faces the field is parallel to the surface, therefore the flux is zero. The total outward flux is
$$
\Phi_E = -E\ell^2 + E\ell^2 + 0 = 0 .
$$
Every field line that enters the cube leaves it, and the two contributions cancel. With $E = 2.0 \cdot 10^3\,\mathrm{N/C}$ and $\ell = 0.10\,\mathrm{m}$ each of the two faces perpendicular to the field is crossed by a flux of magnitude $20\,\mathrm{N \cdot m^2/C}$, and the total flux is zero.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="2,0.5 4,0.5 4,2.5 2,2.5" segmenti="0,0.9,6,0.9;0,1.5,6,1.5;0,2.1,6,2.1" vettori="0.1,2.1,1.4,2.1,E;2,1.5,1,1.5,n̂₁;4,1.5,5,1.5,n̂₂" etichette="2.1,2.75,face 1;3.35,2.75,face 2" xmin=-0.1 xmax=6.1 ymin=0.1 ymax=3.1 titolo="Cube in a uniform field, seen from the side; the flux is $-E\ell^2$ through face 1, $+E\ell^2$ through face 2 and zero through the faces parallel to the field, so the total flux is zero"}

:::

## Gauss's law

:::richiamo{titolo="Field of a point charge"}
A point charge $q$ at rest at the point $O$ produces, at the point at distance $r$ from $O$, the field $\vec{E} = \dfrac{1}{4\pi\varepsilon_0} \dfrac{q}{r^2}\,\hat{r}$, where $\hat{r}$ is the unit vector of the direction going from $O$ to the point. See the topic on the electric field.
:::

::::teorema{#flusso-carica-puntiforme titolo="Flux of the field of a point charge through a sphere"}
The outward flux of the field of a point charge $q$ through a sphere of radius $R$ centered on the charge is
$$
\Phi_E = \frac{q}{\varepsilon_0} ,
$$
whatever the radius $R$. The result depends on the $\dfrac{1}{r^2}$ law of the field, because the area of the sphere grows as $R^2$ and the two factors cancel. For a charge of $1.0\,\mathrm{nC}$ the flux is $\dfrac{1.0 \cdot 10^{-9}}{8.85 \cdot 10^{-12}}\,\mathrm{N \cdot m^2/C} \approx 113\,\mathrm{N \cdot m^2/C}$.

:::dimostrazione
On the sphere the outward unit normal is $\hat{n} = \hat{r}$ and the field has the same magnitude at every point, so $\vec{E} \cdot \hat{n} = \dfrac{q}{4\pi\varepsilon_0 R^2}$ is constant over the whole surface. Therefore
$$
\Phi_E = \frac{q}{4\pi\varepsilon_0 R^2} \oint_S dA = \frac{q}{4\pi\varepsilon_0 R^2} \cdot 4\pi R^2 = \frac{q}{\varepsilon_0} .
$$
:::
::::

:::definizione{#angolo-solido titolo="Solid angle"}
Let $dA$ be a surface element at distance $r$ from a point $O$, with unit normal $\hat{n}$ making the angle $\alpha$ with the unit vector $\hat{r}$ of the direction going from $O$ to the element. The **solid angle** subtended by the element as seen from $O$ is
$$
d\Omega = \frac{\hat{r} \cdot \hat{n}\, dA}{r^2} = \frac{dA \cos\alpha}{r^2} .
$$
The product $dA\cos\alpha$ is the projection of the element onto the sphere of center $O$ and radius $r$; dividing by $r^2$ gives the area that the cone with vertex $O$ resting on the element cuts out on the sphere of unit radius. The solid angle is measured in steradians ($\mathrm{sr}$), is dimensionless and has the sign of $\cos\alpha$. A sphere of radius $R$ is seen from its center under the solid angle $\dfrac{4\pi R^2}{R^2} = 4\pi$, which is the maximum value, corresponding to all directions in space.

::grafico{unicolore=1 assi=0 uguale=1 curve="4*cos(t),4*sin(t),0.176,0.543;cos(t),sin(t),0.236,0.483" linee="3.267,1.712 4.25,1.024" segmenti="0,0,3.659,1.918;0,0,4.76,1.147;3.759,1.368,4.98,1.813" vettori="0,0,3.759,1.368;3.759,1.368,4.447,2.351,n̂" punti="0,0,pieno,q" etichette="4.483,1.736,α;4.2,0.574,dA;1.15,0.3,dΩ;1.9,0.95,r" xmin=-0.5 xmax=5.6 ymin=-0.6 ymax=2.9 titolo="The element $dA$, with normal $\hat{n}$ tilted by $\alpha$ with respect to the radial direction, is seen from the charge $q$ under the solid angle $d\Omega = \dfrac{dA \cos\alpha}{r^2}$, which cuts out the area $d\Omega$ on the sphere of unit radius"}

:::

::::teorema{#legge-di-gauss titolo="Gauss's law"}
Let $S$ be a closed surface with no point charges on it, and let $q_{\text{int}}$ be the total charge contained in the region enclosed by $S$. The outward electric flux through $S$ is
$$
\oint_S \vec{E} \cdot \hat{n}\, dA = \frac{q_{\text{int}}}{\varepsilon_0} .
$$
The field $\vec{E}$ is the one produced by *all* the charges, inside and outside, while the flux depends *only* on the charges inside. If the charge is distributed with volume density $\rho$, the enclosed charge is $q_{\text{int}} = \displaystyle\iiint_V \rho\, dV$, where $V$ is the region enclosed by $S$. The law relates the field to the charges that produce it and, for distributions with high symmetry, makes it possible to compute the field without summing the contributions of the individual charges. A closed surface enclosing the charges $+3.0\,\mathrm{nC}$ and $-1.0\,\mathrm{nC}$ is crossed by the outward flux $\dfrac{2.0 \cdot 10^{-9}}{8.85 \cdot 10^{-12}}\,\mathrm{N \cdot m^2/C} \approx 226\,\mathrm{N \cdot m^2/C}$, whatever its shape.

::grafico{assi=0 uguale=1 curve="2.6*cos(t)+0.3*cos(2*t),1.6*sin(t)+0.25*sin(3*t),0,6.29" punti="-1,0.35,pieno,+q₁;0.9,-0.45,pieno,−q₂;3.7,1.3,pieno,+q₃" etichette="-2.1,1.45,S" xmin=-3.2 xmax=4.6 ymin=-2 ymax=2 titolo="The flux of the field through the closed surface $S$ is $\dfrac{q_1 - q_2}{\varepsilon_0}$; the outside charge $q_3$ changes the field on $S$ without contributing to the total flux"}

:::dimostrazione
Consider first a point charge $q$ at the point $O$. By the definition of solid angle, the contribution to the flux of the element $dA$ of the surface is
$$
\vec{E} \cdot \hat{n}\, dA = \frac{q}{4\pi\varepsilon_0}\,\frac{\hat{r} \cdot \hat{n}\, dA}{r^2} = \frac{q}{4\pi\varepsilon_0}\, d\Omega ,
$$
so the flux is $\dfrac{q}{4\pi\varepsilon_0}$ multiplied by the total signed solid angle under which $S$ is seen from $O$. An elementary cone with vertex $O$ and solid angle $d\Omega$ cuts out an element of $S$ at each crossing, and each of these elements gives the contribution $+d\Omega$ if the cone leaves $S$ and $-d\Omega$ if it enters.

- If $O$ is inside $S$, every half-line from $O$ crosses the surface an odd number of times, alternately leaving and entering. The contributions cancel in pairs, and for each direction the contribution $+d\Omega$ of one exit remains. The total solid angle is therefore $4\pi$, and $\Phi_E = \dfrac{q}{4\pi\varepsilon_0} \cdot 4\pi = \dfrac{q}{\varepsilon_0}$.
- If $O$ is outside $S$, every half-line from $O$ that meets the surface crosses it an even number of times, alternately entering and leaving. The contributions cancel in pairs, so the total solid angle is zero and $\Phi_E = 0$.

For an arbitrary distribution of point charges the field is the sum of the fields of the individual charges, by the **superposition principle**, and the flux depends linearly on the field. The total flux is therefore the sum of the fluxes of the fields of the individual charges, that is, $\dfrac{q_i}{\varepsilon_0}$ for each charge $q_i$ inside and zero for each charge outside, and the sum equals $\dfrac{q_{\text{int}}}{\varepsilon_0}$. For a continuous distribution the argument is repeated on the charge elements $\rho\,dV$.
:::
::::

:::osservazione{#cariche-esterne titolo="Role of the outside charges"}
A charge outside $S$ changes the field at every point of the surface, and hence the flux through each portion of $S$; the positive and negative contributions it produces cancel, and the total flux stays the same. A positive point charge placed outside a sphere, for example, gives inward flux through the part of the sphere facing the charge and outward flux through the opposite part, with zero sum. Similarly, if the charges inside add up to zero, the outward flux is zero even when the field on the surface is nonzero.
:::

:::attenzione{#gauss-e-simmetria}
Gauss's law holds for *every* closed surface and fixes the value of an integral of the field; the value of the field at the individual points remains in general undetermined. An electric dipole, formed by the charges $+q$ and $-q$, enclosed in a sphere centered at its midpoint, has zero enclosed charge, so the outward flux through the sphere is zero. The field on the sphere, however, is nonzero almost everywhere, outward on the side of $+q$ and inward on the side of $-q$. Gauss's law gives the magnitude of the field only when the symmetry of the distribution makes it possible to take it outside the integral.
:::

## Computing the field with Gauss's law

:::osservazione{#superficie-gaussiana titolo="Gaussian surface method"}
The field of a charge distribution with high symmetry is obtained from Gauss's law in four steps.

1. From the symmetry of the distribution one deduces the direction of the field and the variables on which its magnitude depends; for a distribution with spherical symmetry, for example, the field is radial and its magnitude depends only on the distance from the center.
2. One chooses a closed surface, called a **Gaussian surface**, that passes through the point where the field is sought and is made of parts on which the field is perpendicular to the surface and has constant magnitude, and of parts on which the field is parallel to the surface.
3. One computes the flux, which turns out to be the product of the field component and an area, and one computes the charge inside the surface.
4. One sets the flux equal to $\dfrac{q_{\text{int}}}{\varepsilon_0}$ and solves for the field component.

The most frequently used Gaussian surfaces are the sphere concentric with the distribution for spherical symmetry, the coaxial cylinder for cylindrical symmetry and the cylinder with bases parallel to the charged plane for planar symmetry. The Gaussian surface is an imaginary surface, and it may pass through the charge distribution.
:::

## Distributions with spherical symmetry

::::teorema{#campo-guscio-sferico titolo="Field of a charged spherical shell"}
Consider a thin spherical shell of radius $R$ with charge $Q$ distributed uniformly over the surface, with surface density $\sigma = \dfrac{Q}{4\pi R^2}$. The field at the point at distance $r$ from the center is
$$
\vec{E} =
\begin{cases}
\vec{0} & \text{if } r < R \\[8pt]
\dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q}{r^2}\,\hat{r} & \text{if } r > R
\end{cases}
$$
where $\hat{r}$ is the radial unit vector pointing outward from the center. Outside, the shell produces the same field as a point charge $Q$ placed at the center, and inside the field is zero. With $Q = 5.0\,\mathrm{nC}$ and $R = 0.20\,\mathrm{m}$, at $0.40\,\mathrm{m}$ from the center the field is $\dfrac{8.99 \cdot 10^9 \cdot 5.0 \cdot 10^{-9}}{0.40^2}\,\mathrm{N/C} \approx 281\,\mathrm{N/C}$, and at every interior point it is zero. The same result holds for the gravitational force of a shell of mass; see the topic on gravitation in Physics 1.

:::dimostrazione
The distribution remains the same under every rotation about an axis through the center, so the field must also remain the same. It follows that the magnitude of the field depends only on the distance $r$ from the center, and that the field is radial, $\vec{E} = E(r)\,\hat{r}$, because a component perpendicular to $\hat{r}$ would change direction under a rotation about the line joining the center to the point, while the distribution would remain the same.

As the Gaussian surface one chooses the sphere of radius $r$ concentric with the shell. On it $\hat{n} = \hat{r}$ and $E(r)$ is constant, so the outward flux is
$$
\Phi_E = E(r) \cdot 4\pi r^2 .
$$
If $r < R$, the Gaussian sphere contains no charge, therefore $E(r) \cdot 4\pi r^2 = 0$ and $E(r) = 0$. If $r > R$, the Gaussian sphere contains the whole charge $Q$, therefore $E(r) \cdot 4\pi r^2 = \dfrac{Q}{\varepsilon_0}$ and $E(r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}$.
:::
::::

::::teorema{#campo-sfera-piena titolo="Field of a uniformly charged sphere"}
Consider a sphere of radius $R$ with charge $Q$ distributed uniformly throughout its volume, with density $\rho = \dfrac{3Q}{4\pi R^3}$, for example a sphere of insulating material. The field is $\vec{E} = E(r)\,\hat{r}$, with
$$
E(r) =
\begin{cases}
\dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q\,r}{R^3} = \dfrac{\rho\, r}{3\varepsilon_0} & \text{if } r \leq R \\[12pt]
\dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q}{r^2} & \text{if } r \geq R
\end{cases}
$$
The magnitude of the field grows linearly from the center to the surface, where it reaches the maximum value $\dfrac{kQ}{R^2}$, and outside it coincides with that of a point charge $Q$ placed at the center. For a sphere with $Q = 10\,\mathrm{nC}$ and $R = 10\,\mathrm{cm}$ the field is about $8.99 \cdot 10^3\,\mathrm{N/C}$ at the surface and half of that, about $4.5 \cdot 10^3\,\mathrm{N/C}$, at $5.0\,\mathrm{cm}$ from the center.

::grafico{f="x<0 ? NaN : (x<=1 ? x : 1/x^2);x<0 ? NaN : (x<1 ? 0 : 1/x^2)" xmin=-0.3 xmax=4.2 ymin=-0.2 ymax=1.35 nomi="r,E" segmenti="1,0,1,1" etichette="1.05,-0.12,R" legenda="\text{solid sphere};\text{spherical shell}" titolo="Magnitude of the field as a function of the distance from the center, with $r$ in units of $R$ and $E$ in units of $\dfrac{kQ}{R^2}$; for $r > R$ the two fields coincide with that of a point charge"}

:::dimostrazione
The symmetry is the same as for the spherical shell, so $\vec{E} = E(r)\,\hat{r}$ and the outward flux through the Gaussian sphere of radius $r$ concentric with the distribution is $E(r) \cdot 4\pi r^2$. If $r \leq R$, the Gaussian sphere encloses the fraction $\dfrac{r^3}{R^3}$ of the charged volume, so $q_{\text{int}} = Q\,\dfrac{r^3}{R^3}$, and **Gauss's law** gives
$$
E(r) \cdot 4\pi r^2 = \frac{Q\,r^3}{\varepsilon_0 R^3}
\quad\Longrightarrow\quad
E(r) = \frac{Q\,r}{4\pi\varepsilon_0 R^3} .
$$
Substituting $Q = \dfrac{4}{3}\pi R^3 \rho$ gives $E(r) = \dfrac{\rho\, r}{3\varepsilon_0}$. If $r \geq R$, the enclosed charge is $Q$, and one obtains $E(r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}$.
:::
::::

:::osservazione{#distribuzioni-sferiche-non-uniformi titolo="Nonuniform and layered spherical distributions"}
The method applies to every density that depends only on the distance from the center, $\rho = \rho(r)$, because the distribution still has spherical symmetry. The charge contained in the sphere of radius $r$ is computed by summing the spherical shells of radius $s$ and thickness $ds$, which have volume $4\pi s^2\,ds$:
$$
q_{\text{int}}(r) = \int_0^r \rho(s)\, 4\pi s^2\, ds ,
\qquad
E(r) = \frac{q_{\text{int}}(r)}{4\pi\varepsilon_0 r^2} .
$$
With $\rho = \rho_0\,\dfrac{r}{R}$ for $r \leq R$, for example, one has $q_{\text{int}}(r) = \dfrac{\pi\rho_0 r^4}{R}$, so inside $E(r) = \dfrac{\rho_0\, r^2}{4\varepsilon_0 R}$, which grows as the square of the distance. For a hollow sphere with inner radius $a$ and outer radius $b$, uniformly charged between the two radii, the field is zero in the cavity and for $a \leq r \leq b$ the enclosed charge is $\dfrac{4}{3}\pi\rho\,(r^3 - a^3)$. For distributions in concentric layers, such as a solid sphere surrounded by a shell, the field in each region is obtained in the same way, by summing the charges of the layers contained in the Gaussian sphere.
:::

## Distributions with cylindrical symmetry

::::teorema{#campo-filo-infinito titolo="Field of an infinite straight wire"}
Consider an infinite straight wire with charge distributed uniformly, with linear density $\lambda$. The field at the point at distance $r$ from the wire is perpendicular to the wire, lies on the line joining the point to the wire and has radial component
$$
E(r) = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r} .
$$
The field decreases as $\dfrac{1}{r}$, more slowly than the field of a point charge. The infinite-wire model describes a charged wire of finite length at points whose distance from the wire is small compared with the distance from the ends. For $\lambda = 2.0\,\mathrm{nC/m}$, at $10\,\mathrm{cm}$ from the wire the field is $\dfrac{2 \cdot 8.99 \cdot 10^9 \cdot 2.0 \cdot 10^{-9}}{0.10}\,\mathrm{N/C} \approx 360\,\mathrm{N/C}$. The same result is obtained by integrating the contributions of the elements of the wire; see the topic on the electric field.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="-1.5,-1 1.5,-1 1.5,1 -1.5,1" curve="1.5*cos(t),1+0.25*sin(t),0,6.29;1.5*cos(t),-1+0.25*sin(t),0,6.29" linee="0,-2.3 0,2.3" segmenti="0,-1.6,1.5,-1.6;1.75,-1,1.75,1" vettori="0.05,0.45,2.5,0.45,E;-0.05,0.45,-2.5,0.45;0.05,-0.45,2.5,-0.45;-0.05,-0.45,-2.5,-0.45;0.8,1,0.8,1.8,n̂" etichette="0.65,-1.95,r;1.9,0.05,h;-0.45,2.1,λ;0.12,-1.9,+;0.12,-1.3,+;0.12,1.3,+;0.12,1.9,+" xmin=-2.8 xmax=2.8 ymin=-2.4 ymax=2.4 titolo="Gaussian surface for the infinite wire, a coaxial cylinder of radius $r$ and height $h$; the field is radial, perpendicular to the lateral surface and parallel to the bases"}

:::dimostrazione
The distribution remains the same under translations along the wire, under rotations about the wire and under reflections in a plane perpendicular to the wire or in a plane containing it. The reflection in the plane perpendicular to the wire through the point would reverse a component of the field parallel to the wire, and the reflection in the plane containing the wire and the point would reverse a component tangent to the circles around the wire; therefore both components are zero. The field is thus radial and, by the translations and rotations, its magnitude depends only on the distance $r$.

As the Gaussian surface one chooses a cylinder coaxial with the wire, of radius $r$ and height $h$. On the two bases the field is parallel to the surface, so their flux is zero; on the lateral surface the field is perpendicular to the surface and has constant component $E(r)$, so the flux is $E(r) \cdot 2\pi r h$. The cylinder encloses the segment of wire of length $h$, with charge $\lambda h$, and **Gauss's law** gives
$$
E(r) \cdot 2\pi r h = \frac{\lambda h}{\varepsilon_0}
\quad\Longrightarrow\quad
E(r) = \frac{\lambda}{2\pi\varepsilon_0 r} .
$$
The height $h$ cancels, because it is an arbitrary choice of the Gaussian surface.
:::
::::

::::teorema{#campo-cilindro-carico titolo="Field of a uniformly charged cylinder"}
Consider an infinite cylinder of radius $R$ with charge distributed uniformly throughout its volume with density $\rho$, and let $\lambda = \rho\,\pi R^2$ be the charge per unit length. The field is radial and its radial component at distance $r$ from the axis is
$$
E(r) =
\begin{cases}
\dfrac{\rho\, r}{2\varepsilon_0} & \text{if } r \leq R \\[12pt]
\dfrac{\lambda}{2\pi\varepsilon_0 r} = \dfrac{\rho R^2}{2\varepsilon_0 r} & \text{if } r \geq R
\end{cases}
$$
Outside, the cylinder produces the same field as a wire placed on the axis with the same charge per unit length; inside, the field grows linearly from the axis to the surface. For $\rho = 1.0\,\mathrm{\mu C/m^3}$ and $R = 1.0\,\mathrm{cm}$ the field at the surface is $\dfrac{1.0 \cdot 10^{-6} \cdot 0.010}{2 \cdot 8.85 \cdot 10^{-12}}\,\mathrm{N/C} \approx 565\,\mathrm{N/C}$.

::grafico{f="x<0 ? NaN : (x<=1 ? x : 1/x)" xmin=-0.3 xmax=5.2 ymin=-0.2 ymax=1.35 nomi="r,E" segmenti="1,0,1,1" etichette="1.05,-0.12,R" legenda="E(r)" titolo="Field of a uniformly charged cylinder, with $r$ in units of $R$ and $E$ in units of $\dfrac{\rho R}{2\varepsilon_0}$; the field grows linearly inside and decreases as $\dfrac{1}{r}$ outside"}

:::dimostrazione
The symmetry is the same as for the infinite wire, so the field is radial and the outward flux through the coaxial Gaussian cylinder of radius $r$ and height $h$ is $E(r) \cdot 2\pi r h$. If $r \leq R$, the Gaussian cylinder encloses the volume $\pi r^2 h$ of charged material and the charge $\rho\,\pi r^2 h$, therefore
$$
E(r) \cdot 2\pi r h = \frac{\rho\,\pi r^2 h}{\varepsilon_0}
\quad\Longrightarrow\quad
E(r) = \frac{\rho\, r}{2\varepsilon_0} .
$$
If $r \geq R$, the enclosed charge is $\rho\,\pi R^2 h = \lambda h$, and the field of the infinite wire is recovered.
:::
::::

:::osservazione{#guscio-cilindrico titolo="Charged cylindrical surfaces and coaxial cable"}
An infinite cylindrical surface of radius $R$, with charge $\lambda$ per unit length distributed uniformly, produces a zero field for $r < R$, because the Gaussian cylinder of radius $r < R$ encloses no charge, and the field of the infinite wire for $r > R$. For two coaxial cylindrical surfaces of radii $a < b$, with charges per unit length $\lambda_1$ and $\lambda_2$, as in the *coaxial cable*, the Gaussian cylinder of radius $r$ encloses zero, one or two charged surfaces, and Gauss's law gives
$$
E(r) =
\begin{cases}
0 & \text{if } r < a \\[8pt]
\dfrac{\lambda_1}{2\pi\varepsilon_0 r} & \text{if } a < r < b \\[12pt]
\dfrac{\lambda_1 + \lambda_2}{2\pi\varepsilon_0 r} & \text{if } r > b
\end{cases}
$$
When $\lambda_2 = -\lambda_1$ the field is nonzero only between the two surfaces. For the coaxial cable as a capacitor, see the topic on conductors, capacitors and dielectrics.
:::

## Distributions with planar symmetry

::::teorema{#campo-piano-infinito titolo="Field of an infinite charged plane"}
Consider an infinite plane with charge distributed uniformly, with surface density $\sigma$. The field is perpendicular to the plane, has at every point the magnitude
$$
E = \frac{\sigma}{2\varepsilon_0}
$$
and, for $\sigma > 0$, points away from the plane on both sides. In each of the two half-spaces the field is uniform and does not depend on the distance from the plane. The model describes a thin charged sheet of finite size at points whose distance from the sheet is small compared with the distance from the edges. For $\sigma = 1.0\,\mathrm{nC/m^2}$ one has $E = \dfrac{1.0 \cdot 10^{-9}}{2 \cdot 8.85 \cdot 10^{-12}}\,\mathrm{N/C} \approx 56\,\mathrm{N/C}$. The same result is obtained as the limit of the field of a charged disk as the radius tends to infinity; see the topic on the electric field.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="-1.2,-0.7 1.2,-0.7 1.2,0.7 -1.2,0.7" curve="1.2+0.22*cos(t),0.7*sin(t),0,6.29;-1.2+0.22*cos(t),0.7*sin(t),0,6.29" linee="0,-2.2 0,2.2" vettori="1.2,0,2.5,0,E;-1.2,0,-2.5,0;0.1,1.15,2.5,1.15;-0.1,1.15,-2.5,1.15;0.1,-1.15,2.5,-1.15;-0.1,-1.15,-2.5,-1.15" etichette="0.95,-1,A;-1.45,-1,A;-0.4,2.05,σ;0.1,-1.9,+;0.1,-1.35,+;0.1,1.35,+;0.1,1.9,+" xmin=-2.8 xmax=2.8 ymin=-2.3 ymax=2.3 titolo="Infinite charged plane seen edge-on and Gaussian cylinder crossing it; the flux leaves only through the two bases of area $A$"}

:::dimostrazione
The distribution remains the same under translations parallel to the plane, under rotations about a line perpendicular to the plane and under reflection in the plane itself. Hence the field is perpendicular to the plane, its magnitude depends only on the distance from the plane, and at two points symmetric with respect to the plane the field has the same magnitude and opposite direction. As the Gaussian surface one chooses a cylinder with its axis perpendicular to the plane and with bases of area $A$ at the same distance from the plane, on opposite sides. On the lateral surface the field is parallel to the surface and the flux is zero; on each base the field is perpendicular and outward, with magnitude $E$. The cylinder encloses the portion of plane of area $A$, with charge $\sigma A$, therefore
$$
2 E A = \frac{\sigma A}{\varepsilon_0}
\quad\Longrightarrow\quad
E = \frac{\sigma}{2\varepsilon_0} .
$$
:::
::::

::::teorema{#campo-due-piani titolo="Field of two parallel planes with opposite charges"}
Consider two infinite parallel planes with uniform surface densities $+\sigma$ and $-\sigma$. The field is zero in the two regions outside the planes, while in the region between the planes it is uniform, perpendicular to the planes, directed from the positive plane to the negative plane and of magnitude
$$
E = \frac{\sigma}{\varepsilon_0} .
$$
This is the arrangement of the plates of the parallel-plate capacitor; see the topic on conductors, capacitors and dielectrics. For $\sigma = 2.0\,\mathrm{nC/m^2}$ the field between the planes is about $226\,\mathrm{N/C}$.

::grafico{unicolore=1 assi=0 uguale=1 linee="0,-2 0,2;3,-2 3,2" vettori="0.25,1.2,2.75,1.2,E;0.25,0,2.75,0;0.25,-1.2,2.75,-1.2" etichette="-0.38,-1.6,+;-0.38,-0.8,+;-0.38,0,+;-0.38,0.8,+;-0.38,1.6,+;3.12,-1.6,−;3.12,-0.8,−;3.12,0,−;3.12,0.8,−;3.12,1.6,−;-1.7,0.1,E = 0;3.8,0.1,E = 0;-0.25,2.25,+σ;2.8,2.25,−σ" xmin=-2 xmax=5 ymin=-2.2 ymax=2.5 titolo="Two parallel planes with densities $+\sigma$ and $-\sigma$; the fields of the two planes add between the plates and cancel outside"}

:::dimostrazione
By the **superposition principle** the field is the sum of the fields of the two planes, each of magnitude $\dfrac{\sigma}{2\varepsilon_0}$; the field of the positive plane points away from the plane, that of the negative plane points toward it. Between the planes both fields are directed from the positive plane toward the negative plane, so the magnitudes add and $E = \dfrac{\sigma}{\varepsilon_0}$. In each of the two outer regions the two fields have the same magnitude and opposite directions, therefore their sum is zero.
:::
::::

::::teorema{#campo-lastra-carica titolo="Field of a uniformly charged slab"}
Consider an infinite slab of thickness $d$ with charge distributed uniformly throughout its volume with density $\rho$, and let $x$ be the axis perpendicular to the slab with the origin on the midplane. The field is parallel to the $x$ axis and its component is
$$
E_x(x) =
\begin{cases}
-\dfrac{\rho\, d}{2\varepsilon_0} & \text{if } x \leq -\dfrac{d}{2} \\[12pt]
\dfrac{\rho\, x}{\varepsilon_0} & \text{if } -\dfrac{d}{2} \leq x \leq \dfrac{d}{2} \\[12pt]
\dfrac{\rho\, d}{2\varepsilon_0} & \text{if } x \geq \dfrac{d}{2}
\end{cases}
$$
Outside, the slab produces the same field as a plane with surface density $\sigma = \rho d$, equal to the charge per unit area of the slab; inside, the field varies linearly and is zero on the midplane. For $\rho = 1.0 \cdot 10^{-5}\,\mathrm{C/m^3}$ and $d = 1.0\,\mathrm{cm}$ the outside field is about $5.6 \cdot 10^3\,\mathrm{N/C}$.

::grafico{f="x<-1 ? -1 : (x>1 ? 1 : x)" xmin=-3.2 xmax=3.2 ymin=-1.5 ymax=1.5 nomi="x,Eₓ" segmenti="-1,-1.5,-1,1.5;1,-1.5,1,1.5" etichette="1.08,-0.3,½d;-1.6,0.3,−½d" legenda="E_x(x)" titolo="Component $E_x$ of the field of a uniformly charged slab of thickness $d$, in units of $\dfrac{\rho d}{2 \varepsilon_0}$; the field is linear inside, constant outside"}

:::dimostrazione
The symmetry is that of the infinite plane, and the distribution also remains the same under reflection in the midplane; so the field is parallel to the $x$ axis, depends only on $x$ and satisfies $E_x(-x) = -E_x(x)$. As the Gaussian surface one chooses a cylinder with its axis parallel to the $x$ axis and with bases of area $A$ at the positions $-x$ and $x$, with $x > 0$. The flux through the lateral surface is zero, and on each base the outward flux is $E_x(x)\,A$, so the total flux is $2E_x(x)\,A$. If $x \leq \dfrac{d}{2}$, the cylinder encloses the charge $\rho \cdot 2xA$, therefore
$$
2E_x(x)\,A = \frac{2\rho\, x A}{\varepsilon_0}
\quad\Longrightarrow\quad
E_x(x) = \frac{\rho\, x}{\varepsilon_0} .
$$
If $x \geq \dfrac{d}{2}$, the enclosed charge is $\rho\, d A$, and one obtains $E_x(x) = \dfrac{\rho\, d}{2\varepsilon_0}$. The values for $x < 0$ follow from the relation $E_x(-x) = -E_x(x)$.
:::
::::

:::osservazione{#discontinuita-campo titolo="Discontinuity of the field across a charged surface"}
Crossing a plane with density $\sigma$, the component of the field perpendicular to the plane goes from $-\dfrac{\sigma}{2\varepsilon_0}$ to $+\dfrac{\sigma}{2\varepsilon_0}$, that is, it has a jump of $\dfrac{\sigma}{\varepsilon_0}$. The same jump occurs when crossing any charged surface. Indeed, applying Gauss's law to a small cylinder with bases parallel to the surface and very close to it, on opposite sides, the flux through the lateral surface becomes negligible, and one obtains
$$
E_{n,2} - E_{n,1} = \frac{\sigma}{\varepsilon_0} ,
$$
where $\sigma$ is the surface density at the point considered and $E_{n,1}$, $E_{n,2}$ are the components of the field along the normal oriented from side 1 to side 2. For the spherical shell, for example, the field goes from $0$ to $\dfrac{Q}{4\pi\varepsilon_0 R^2} = \dfrac{\sigma}{\varepsilon_0}$. A volume distribution with bounded density, such as the slab, produces a continuous field. The jump is used for the field near the surface of a conductor; see the topic on conductors, capacitors and dielectrics.
:::

## Local form of Gauss's law

:::richiamo{titolo="Divergence theorem"}
Let $V$ be a regular domain in space with boundary $S$ oriented by the outward unit normal $\hat{n}$, and let $\vec{F}$ be a vector field of class $C^1$ on an open set containing $V$. Then
$$
\oint_S \vec{F} \cdot \hat{n}\, dA = \iiint_V \nabla \cdot \vec{F}\, dV ,
\qquad
\nabla \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} .
$$
See the topic on surfaces, flux and the theorems of Gauss and Stokes in Mathematical Analysis 2.
:::

::::teorema{#forma-locale-gauss titolo="Local form of Gauss's law"}
If the charge is distributed with continuous volume density $\rho$ and the electric field is of class $C^1$, at every point
$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0} .
$$
The integral form of Gauss's law concerns a surface and the charge it encloses; the local form relates the derivatives of the field at a point to the charge density at the same point, and makes it possible to obtain the charge density from a known field. Where there are no charges the divergence of the field is zero; where $\rho > 0$ field lines originate and where $\rho < 0$ they terminate. The field $\vec{E} = a\,x\,\hat{\imath}$, with $a$ constant, for example has divergence $a$, so it is produced by the uniform density $\rho = \varepsilon_0 a$. This relation is the first of Maxwell's equations; see the topic on Maxwell's equations and electromagnetic waves.

:::dimostrazione
Let $V$ be any regular domain with boundary $S$. By the **divergence theorem** and by Gauss's law,
$$
\iiint_V \nabla \cdot \vec{E}\, dV = \oint_S \vec{E} \cdot \hat{n}\, dA = \frac{1}{\varepsilon_0} \iiint_V \rho\, dV ,
$$
so the function $g = \nabla \cdot \vec{E} - \dfrac{\rho}{\varepsilon_0}$, which is continuous, has zero integral over every regular domain. If at a point $P_0$ one had $g(P_0) > 0$, by the sign-preservation theorem one would have $g > 0$ in a ball centered at $P_0$, and the integral of $g$ over that ball would be positive; in the same way $g(P_0) < 0$ is ruled out. Therefore $g = 0$ at every point, that is, $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$.
:::
::::

:::esempio{titolo="Divergence of the field of a uniformly charged sphere"}
Inside a uniformly charged sphere the field is $\vec{E} = \dfrac{\rho}{3\varepsilon_0}\, r\,\hat{r}$, and $r\,\hat{r} = x\,\hat{\imath} + y\,\hat{\jmath} + z\,\hat{k}$ is the position vector $\vec{r}$. Hence
$$
\nabla \cdot \vec{E} = \frac{\rho}{3\varepsilon_0}\left( \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} \right) = \frac{\rho}{3\varepsilon_0} \cdot 3 = \frac{\rho}{\varepsilon_0} ,
$$
in agreement with the local form. Outside, the field is $\vec{E} = \dfrac{Q}{4\pi\varepsilon_0}\,\dfrac{\vec{r}}{r^3}$. Since $\dfrac{\partial}{\partial x}\left( \dfrac{x}{r^3} \right) = \dfrac{1}{r^3} - \dfrac{3x^2}{r^5}$, and similarly for $y$ and $z$, the sum of the three derivatives is
$$
\frac{3}{r^3} - \frac{3\,(x^2 + y^2 + z^2)}{r^5} = \frac{3}{r^3} - \frac{3}{r^3} = 0 ,
$$
so the divergence is zero, in agreement with $\rho = 0$ outside the sphere.
:::
