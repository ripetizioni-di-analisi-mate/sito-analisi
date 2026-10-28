---
titolo: Geometrical and wave optics
sommario: How light is reflected and refracted according to Snell's laws, how mirrors and thin lenses form images, and how interference, diffraction and polarization reveal the wave nature of light.
---

## Light, rays and index of refraction

:::richiamo{titolo="Electromagnetic waves"}
Light is a transverse electromagnetic wave that propagates in vacuum with speed $c = 3.00 \cdot 10^{8}\,\mathrm{m/s}$; wavelength $\lambda$ and frequency $\nu$ are related by $c = \lambda\,\nu$. Visible light has wavelengths between about $400\,\mathrm{nm}$ (violet) and $700\,\mathrm{nm}$ (red). See the topic on Maxwell's equations and electromagnetic waves.
:::

:::definizione{#ottica-geometrica titolo="Light ray and geometrical optics"}
A **light ray** is an oriented line, perpendicular at every point to the wavefronts, that is, to the surfaces of constant phase, which indicates the direction of propagation; in a homogeneous medium the rays are straight. **Geometrical optics** describes light only by means of rays, and it is an approximation valid when apertures and obstacles have dimensions much larger than the wavelength. When the dimensions are comparable with $\lambda$, as for slits a few tenths of a millimeter wide, interference and diffraction appear, and these are the subject of **wave optics**.
:::

:::definizione{#indice-di-rifrazione titolo="Index of refraction"}
In a homogeneous transparent medium light propagates with a speed $v$ less than $c$. The **index of refraction** of the medium is the pure number
$$
n = \frac{c}{v} \geq 1 .
$$
Vacuum has $n = 1$, air $n \approx 1.0003$, which in problems is approximated by $1.00$, water $n = 1.33$, ordinary glass $n \approx 1.5$, diamond $n = 2.42$. Of two media, the one with the larger index is called *optically denser*. In water, for example, $v = \dfrac{c}{1.33} \approx 2.26 \cdot 10^{8}\,\mathrm{m/s}$.
:::

:::teorema{#lunghezza-onda-nel-mezzo titolo="Frequency and wavelength in a medium"}
When light passes from one medium to another the frequency $\nu$ stays the same, because it is imposed by the source and the fields on the two sides of the interface oscillate at the same rate. In a medium of index $n$ the wavelength is therefore
$$
\lambda_n = \frac{v}{\nu} = \frac{c}{n\,\nu} = \frac{\lambda}{n} ,
$$
where $\lambda$ is the wavelength in vacuum. Light of $600\,\mathrm{nm}$ in vacuum has in water $\lambda_n = \dfrac{600}{1.33}\,\mathrm{nm} \approx 451\,\mathrm{nm}$.
:::

## Reflection and refraction

When a ray strikes the interface between two transparent media, part of the light returns into the first medium and part enters the second, changing direction. Angles are measured from the normal to the surface at the point of incidence, and the **plane of incidence** is the plane that contains the incident ray and the normal.

:::teorema{#legge-della-riflessione titolo="Law of reflection"}
It is an experimental law. The reflected ray lies in the plane of incidence, on the opposite side of the normal from the incident ray, and the angle of reflection is equal to the angle of incidence:
$$
\theta_1' = \theta_1 .
$$
The law holds for every reflecting surface, flat or curved, and it is the basis of the theory of mirrors.
:::

:::teorema{#legge-di-snell titolo="Snell's law"}
It is an experimental law. A ray that passes from a medium of index $n_1$ to a medium of index $n_2$ is refracted in the plane of incidence, on the opposite side of the normal, and the angle of incidence $\theta_1$ and the angle of refraction $\theta_2$ satisfy
$$
n_1 \sin\theta_1 = n_2 \sin\theta_2 .
$$
Together with the law of reflection it makes up **Snell's laws**, and it allows one to compute the direction of the refracted ray. A ray that passes from air to glass with $n_2 = 1.50$ and $\theta_1 = 45^\circ$ has $\sin\theta_2 = \dfrac{\sin 45^\circ}{1.50} \approx 0.471$, so $\theta_2 \approx 28.1^\circ$.

::grafico{assi=0 uguale=1 poligoni="-4,0 4,0 4,-3 -4,-3" linee="-4,0 4,0" segmenti="0,-3,0,3" vettori="-2.83,2.83,0,0;0,0,2.83,2.83;0,0,1.41,-2.65" etichette="-0.65,1.2,θ₁;0.3,1.2,θ₁;0.12,-1.3,θ₂;-3.7,0.35,n₁;-3.7,-0.65,n₂;-3.4,2.45,incident;2.15,2.45,reflected;1.55,-2.1,refracted" xmin=-4.2 xmax=4.2 ymin=-3.2 ymax=3.3 titolo="Incident, reflected and refracted rays: the angles are measured from the dashed normal; with $n_2 > n_1$ the refracted ray bends toward the normal"}

:::

:::osservazione{#verso-della-deviazione titolo="Direction of the deviation"}
From Snell's law, $\sin\theta_2 = \dfrac{n_1}{n_2}\sin\theta_1$, and the sine is increasing between $0$ and $\dfrac{\pi}{2}$.

- If $n_2 > n_1$, then $\theta_2 < \theta_1$: the ray that enters an optically denser medium bends **toward** the normal.
- If $n_2 < n_1$, then $\theta_2 > \theta_1$: the ray bends away from the normal.
- If $\theta_1 = 0$, then $\theta_2 = 0$: the ray perpendicular to the surface is not deviated.

Through layers with parallel faces the quantity $n \sin\theta$ is conserved at every surface, so the angle in the last medium depends only on the indices of the first and the last.
:::

:::osservazione{#dispersione titolo="Dispersion of light"}
The index of refraction depends on the wavelength; in glass and in water it decreases as $\lambda$ increases, so violet light is deviated more than red light. Because of this **dispersion** a prism separates white light into colors. In problems in which the index is given as a single number, dispersion is neglected.
:::

::::teorema{#lamina-a-facce-parallele titolo="Slab with parallel faces"}
Consider a transparent slab of thickness $t$ and index $n$, with two flat parallel faces, immersed in air, and a ray that strikes the first face at angle $\theta_1$. Then the ray emerges **parallel** to the incident ray, displaced laterally by the distance
$$
d = \frac{t \sin(\theta_1 - \theta_2)}{\cos\theta_2} , \qquad \sin\theta_2 = \frac{\sin\theta_1}{n} .
$$
For this reason a window pane does not alter the direction from which objects are seen. With $t = 1.0\,\mathrm{cm}$, $n = 1.50$ and $\theta_1 = 45^\circ$ we have $\theta_2 \approx 28.1^\circ$ and $d \approx 0.33\,\mathrm{cm}$.

:::dimostrazione
The two faces have parallel normals, so the inner ray strikes the second face at the same angle $\theta_2$ at which it was refracted at the first. **Snell's law** at the two faces gives $\sin\theta_1 = n \sin\theta_2 = \sin\theta_3$, hence $\theta_3 = \theta_1$ and the emerging ray is parallel to the incident one.

Let $A$ and $B$ be the points of entry and exit. The segment $AB$ forms the angle $\theta_2$ with the normal and crosses the thickness $t$, so $AB = \dfrac{t}{\cos\theta_2}$. The displacement $d$ is the distance of $B$ from the extension of the incident ray, which passes through $A$ and forms the angle $\theta_1 - \theta_2$ with $AB$; hence $d = AB \sin(\theta_1 - \theta_2)$.
:::
::::

## Total internal reflection

::::teorema{#angolo-limite titolo="Total internal reflection and critical angle"}
Consider a ray that passes from a medium of index $n_1$ to a *less* optically dense medium, of index $n_2 < n_1$. The **critical angle** is the angle $\theta_c$ such that
$$
\sin\theta_c = \frac{n_2}{n_1} .
$$
For $\theta_1 = \theta_c$ the refracted ray grazes the surface; for $\theta_1 > \theta_c$ there is no refracted ray and all the light is reflected. This phenomenon is called **total internal reflection**, and it guides light in optical fibers. Between water and air $\theta_c = \arcsin\dfrac{1}{1.33} \approx 48.8^\circ$, between glass with $n = 1.50$ and air $\theta_c \approx 41.8^\circ$; hence a ray that strikes the inner face of a glass prism at $45^\circ$ is totally reflected.

::grafico{assi=0 uguale=1 poligoni="-1,0 7,0 7,-2.6 -1,-2.6" linee="-1,0 7,0" segmenti="2.28,-2.4,2.28,1.2;3.76,-2.4,3.76,1.2" vettori="0,-2,0.93,0;0.93,0,2.17,1.82;0,-2,2.28,0;2.28,0,4.6,0.02;0,-2,3.76,0;3.76,0,6.77,-1.6" punti="0,-2,pieno,S" etichette="1.85,-0.75,θc;3.3,-0.75,θ₁;-0.8,0.3,air;-0.8,-0.5,water" xmin=-1.2 xmax=7.2 ymin=-2.8 ymax=2.2 titolo="Rays emitted by the source $S$ in water: below the critical angle they emerge refracted, at the critical angle $\theta_c$ they emerge grazing, beyond the critical angle they are totally reflected"}

:::dimostrazione
By **Snell's law** $\sin\theta_2 = \dfrac{n_1}{n_2}\sin\theta_1$, with $\dfrac{n_1}{n_2} > 1$. The right-hand side grows with $\theta_1$ and equals $1$ for $\theta_1 = \theta_c$, and in that case $\theta_2 = 90^\circ$. For $\theta_1 > \theta_c$ the right-hand side exceeds $1$, so no angle $\theta_2$ satisfies Snell's law and the refracted ray does not exist; it is observed experimentally that all the light energy is then found in the reflected ray. If instead $n_2 > n_1$, the right-hand side is always less than $1$, hence total internal reflection occurs *only* toward a less optically dense medium.
:::
::::

:::richiamo{titolo="Small-angle approximation"}
For $\theta$ in radians, from the Taylor expansions $\sin\theta = \theta + o(\theta^2)$, $\tan\theta = \theta + o(\theta^2)$ and $\cos\theta = 1 + o(\theta)$ there follow, for small $\theta$, the approximations $\sin\theta \approx \tan\theta \approx \theta$ and $\cos\theta \approx 1$. See the Analisi 1 topic on differential calculus and Taylor.
:::

::::teorema{#profondita-apparente titolo="Apparent depth"}
Consider an object at depth $h$ below the flat surface of a medium of index $n_1$, observed from a medium of index $n_2$ in a direction nearly perpendicular to the surface. Then the image of the object is at the depth
$$
h' = \frac{n_2}{n_1}\, h .
$$
Seen from the air, the bottom of a swimming pool $2.0\,\mathrm{m}$ deep appears at $\dfrac{2.0}{1.33}\,\mathrm{m} \approx 1.5\,\mathrm{m}$.

::grafico{assi=0 uguale=1 poligoni="-3,0 3,0 3,-3.4 -3,-3.4" linee="-3,0 3,0" vettori="0,-3,1,0;1,0,1.84,1.81;0,-3,-1,0;-1,0,-1.84,1.81" segmenti="1,0,0,-2.16;-1,0,0,-2.16;0,-3.4,0,1.5" punti="0,-3,pieno,O;0,-2.16,vuoto,O′" etichette="-2.8,0.3,air;-2.8,-0.5,water" xmin=-3.2 xmax=3.2 ymin=-3.6 ymax=2.1 titolo="The rays leaving the water seem to come from $O'$, closer to the surface than the object $O$: for nearly vertical rays $h' = \dfrac{n_2}{n_1}\,h$"}

:::dimostrazione
A ray that leaves the object $O$ at angle $\theta_1$ from the vertical reaches the surface at the horizontal distance $x = h\tan\theta_1$ from the vertical through $O$, and is refracted at the angle $\theta_2$. Its backward extension meets the vertical through $O$ at the depth $h'$ such that $x = h'\tan\theta_2$. Therefore
$$
h' = h\,\frac{\tan\theta_1}{\tan\theta_2} \approx h\,\frac{\sin\theta_1}{\sin\theta_2} = \frac{n_2}{n_1}\, h ,
$$
where the approximation holds for small angles and the last equality follows from **Snell's law**. The approximate value does not depend on $\theta_1$, hence the nearly vertical rays all seem to come from the same point, which is the image.
:::
::::

## Plane and spherical mirrors

:::definizione{#oggetto-e-immagine titolo="Object and image"}
Consider a system of mirrors or lenses and a point $P$ from which light rays leave. If after the system the rays converge at a point $P'$, the point $P'$ is a **real image** of $P$, and a screen placed at $P'$ captures it. If instead the rays diverge as if they came from $P'$, that is, if their extensions pass through $P'$, then $P'$ is a **virtual image**: the eye sees it, but a screen does not capture it.
:::

:::teorema{#specchio-piano titolo="Image in a plane mirror"}
The image of a point $P$ in a plane mirror is the point $P'$ symmetric to $P$ with respect to the mirror; the image is virtual, upright and the same size as the object. Indeed, by the **law of reflection** every reflected ray is symmetric to the incident ray with respect to the normal, so its extension behind the mirror passes through the symmetric point of $P$, whatever the point of incidence.
:::

:::definizione{#specchio-sferico titolo="Spherical mirror"}
A **spherical mirror** is a reflecting spherical cap of radius $R$, with **center of curvature** $C$, **vertex** $V$ at the central point of the cap and **optical axis** $CV$. The mirror is *concave* if it reflects on the side of $C$, *convex* if it reflects on the opposite side. We work in the **paraxial approximation**, that is, with rays close to the axis and slightly inclined to it, for which the small-angle approximations hold.
:::

::::teorema{#equazione-degli-specchi titolo="Spherical mirror equation"}
Consider a concave spherical mirror of radius $R$, in the paraxial approximation, and a point object on the axis at distance $p$ from the vertex. Then the image is on the axis at distance $q$ from the vertex, with
$$
\frac{1}{p} + \frac{1}{q} = \frac{2}{R} = \frac{1}{f} , \qquad f = \frac{R}{2} .
$$
For $p \to \infty$ one obtains $q = f$: rays parallel to the axis converge at the **focus** $F$, halfway between vertex and center, and $f$ is the **focal length**. With the sign convention the equation also holds for the convex mirror, with $R$ and $f$ negative. For a concave mirror with $R = 40\,\mathrm{cm}$ and an object at $60\,\mathrm{cm}$ we have $\dfrac{1}{q} = \dfrac{1}{20} - \dfrac{1}{60} = \dfrac{1}{30}$, so $q = 30\,\mathrm{cm}$.

:::dimostrazione
We treat the case in which the object $O$ is beyond the center of curvature; the other cases are analogous. A ray leaves $O$, strikes the mirror at the point $A$, at distance $h$ from the axis, and after reflection meets the axis at $I$. Let $\alpha$, $\beta$ and $\gamma$ be the angles that the lines $OA$, $CA$ and $IA$ form with the axis. The line $CA$ is a radius of the sphere, so it is the normal at $A$, and the angle of incidence $\theta$ is the angle between $OA$ and $CA$.

In the triangle $OAC$ the exterior angle at $C$ is the sum of the two non-adjacent interior angles, so $\beta = \alpha + \theta$. By the **law of reflection** the angle between $CA$ and $AI$ is also $\theta$, and in the triangle $CAI$ the exterior angle at $I$ gives $\gamma = \beta + \theta$. Eliminating $\theta$ we obtain
$$
\alpha + \gamma = 2\beta .
$$
In the paraxial approximation the angles are small and the distance of $A$ from the tangent plane at $V$ is negligible, hence $\alpha \approx \dfrac{h}{p}$, $\beta \approx \dfrac{h}{R}$ and $\gamma \approx \dfrac{h}{q}$. Substituting and dividing by $h$ gives the claim. The result does not depend on $h$, so all the paraxial rays leaving $O$ pass through $I$, which is the image of $O$.
:::
::::

:::definizione{#convenzione-dei-segni titolo="Sign convention and magnification"}
For mirrors and lenses the following convention is used.

- The distance $p$ is positive for a real object, placed on the side from which the light arrives.
- The distance $q$ is positive for a real image, in front of the mirror or behind the lens, and negative for a virtual image.
- The focal length $f$ is positive for the concave mirror and for the converging lens, negative for the convex mirror and for the diverging lens.
- The heights $y$ of the object and $y'$ of the image are positive above the axis.

The **linear magnification** is
$$
m = \frac{y'}{y} = -\frac{q}{p} .
$$
If $m < 0$ the image is inverted, if $|m| > 1$ it is enlarged. For the mirror the formula follows from the ray directed at the vertex, which is reflected symmetrically with respect to the axis and forms two similar triangles with the object and the image. In the example of the mirror with $R = 40\,\mathrm{cm}$ we have $m = -\dfrac{30}{60} = -0.5$: the image is real, inverted and half as tall as the object.
:::

:::osservazione{#costruzione-specchi titolo="Ray diagrams for mirrors"}
The image of the tip of an object is the intersection of two of the principal rays: the ray parallel to the axis, which is reflected through the focus; the ray through the focus, which is reflected parallel to the axis; the ray through the center, which returns on itself; the ray directed at the vertex, which is reflected symmetrically with respect to the axis.

- Concave mirror, object beyond $C$: real, inverted and reduced image, between $F$ and $C$.
- Concave mirror, object between $F$ and $C$: real, inverted and enlarged image, beyond $C$.
- Concave mirror, object between $F$ and the mirror: virtual, upright and enlarged image.
- Convex mirror: image always virtual, upright and reduced.

::grafico{assi=0 uguale=1 curve="-6+6*cos(t),6*sin(t),-0.3,0.3" linee="-10,0 0.5,0;-9,1.5 0,1.5 -4.5,-0.75;-9,1.5 -3,0 0,-0.75 -4.5,-0.75;-9,1.5 0,0 -4.5,-0.75" vettori="-9,0,-9,1.5;-4.5,0,-4.5,-0.75" punti="-6,0,pieno,C;-3,0,pieno,F;0,0,pieno,V" etichette="-9.7,1.8,object;-5.3,-1.25,image" xmin=-10.2 xmax=1 ymin=-2.2 ymax=2.3 titolo="Concave mirror with the object at distance $p = 3f$: the principal rays meet at $q = \dfrac{3}{2}\,f$, where a real, inverted and reduced image forms with $m = -\dfrac{1}{2}$"}

:::

## Thin lenses

:::definizione{#lente-sottile titolo="Thin lens"}
A **lens** is a transparent body bounded by two spherical surfaces, or by one spherical and one flat surface; it is **thin** if its thickness is negligible compared with the radii of curvature and with the object and image distances, which are measured from the center $O$ of the lens. A lens in air that is thicker at the center is **converging**: it makes rays parallel to the axis converge at the second focus $F'$. A lens that is thinner at the center is **diverging**: it makes parallel rays diverge as if they came from the focus $F$, on the side from which the light arrives. The two foci are symmetric with respect to the lens, at distance $|f|$, with $f > 0$ for converging lenses and $f < 0$ for diverging ones. The **optical power** is
$$
P = \frac{1}{f} ,
$$
and it is measured in diopters, $1\,\mathrm{D} = 1\,\mathrm{m^{-1}}$; a lens with $f = 25\,\mathrm{cm}$ has $P = 4.0\,\mathrm{D}$.
:::

:::teorema{#formula-del-costruttore titolo="Lensmaker's equation"}
Consider a thin lens of index $n$ immersed in air, with radii of curvature $R_1$, of the face that the light meets first, and $R_2$; a radius of curvature is positive if the center of curvature is on the side from which the light exits. Then
$$
\frac{1}{f} = (n - 1)\left( \frac{1}{R_1} - \frac{1}{R_2} \right) .
$$
The formula is derived by applying Snell's law, in the paraxial approximation, to the two spherical surfaces; the proof is omitted. A biconvex lens with $R_1 = 20\,\mathrm{cm}$, $R_2 = -20\,\mathrm{cm}$ and $n = 1.50$ has $\dfrac{1}{f} = 0.50 \cdot \dfrac{2}{20\,\mathrm{cm}}$, that is, $f = 20\,\mathrm{cm}$ and $P = 5.0\,\mathrm{D}$.
:::

:::osservazione{#costruzione-lenti titolo="Principal rays of a lens"}
To construct the image of the tip of an object, two of the following rays suffice.

- The ray parallel to the axis exits through $F'$ if the lens is converging; if it is diverging, its backward extension passes through $F$.
- The ray through the center $O$ is not deviated, because near the center the lens behaves like a slab with parallel faces of negligible thickness.
- The ray directed toward $F$ in the converging lens, or toward $F'$ in the diverging one, exits parallel to the axis.

::grafico{assi=0 uguale=1 poligoni="0.20,0.00 0.19,0.65 0.17,1.25 0.14,1.77 0.10,2.17 0.05,2.41 0.00,2.50 -0.05,2.41 -0.10,2.17 -0.14,1.77 -0.17,1.25 -0.19,0.65 -0.20,0.00 -0.19,-0.65 -0.17,-1.25 -0.14,-1.77 -0.10,-2.17 -0.05,-2.41 0.00,-2.50 0.05,-2.41 0.10,-2.17 0.14,-1.77 0.17,-1.25 0.19,-0.65" linee="-4,0 7,0;-3,1 0,1 6,-2;-3,1 6,-2;-3,1 0,-2 6,-2" vettori="-3,0,-3,1;6,0,6,-2" punti="-2,0,pieno,F;2,0,pieno,F′;0,0,pieno,O" xmin=-4.2 xmax=7.2 ymin=-2.8 ymax=2.8 titolo="Converging lens with $f = 10\,\mathrm{cm}$ and object at $p = 15\,\mathrm{cm}$: the three principal rays meet at $q = 30\,\mathrm{cm}$, where the image is real and inverted, with $m = -2$"}

:::

::::teorema{#equazione-delle-lenti titolo="Thin lens equation"}
Consider a thin lens of focal length $f$, in the paraxial approximation, and an object at distance $p$ from the lens. Then the image is at distance $q$ from the lens, with
$$
\frac{1}{p} + \frac{1}{q} = \frac{1}{f} , \qquad m = -\frac{q}{p} ,
$$
in the sign convention for mirrors and lenses, for both converging and diverging lenses. With $f = 10\,\mathrm{cm}$ and $p = 15\,\mathrm{cm}$ one obtains $q = 30\,\mathrm{cm}$ and $m = -2$. With $p = 5.0\,\mathrm{cm}$, that is, with the object between the focus and the lens, one obtains $\dfrac{1}{q} = \dfrac{1}{10} - \dfrac{1}{5} = -\dfrac{1}{10}$, so $q = -10\,\mathrm{cm}$ and $m = 2$: the image is virtual, upright and enlarged, and the lens works as a magnifying glass.

:::dimostrazione
We treat the case of the converging lens with a real image; the other cases are analogous with the signs of the convention. Let $B$ be the foot of the object on the axis and $A$ its tip, at height $y$; let $B'$ and $A'$ be the foot and the tip of the image, at height $y' < 0$.

The ray through the center is not deviated, so $A$, $O$ and $A'$ are collinear, and the right triangles $ABO$ and $A'B'O$ are similar because their angles at $O$ are vertical angles; hence $\dfrac{-y'}{y} = \dfrac{q}{p}$. The ray that leaves $A$ parallel to the axis meets the lens at the point $H$ at height $y$ and continues through $F'$ and $A'$. The right triangles $HOF'$ and $A'B'F'$ are similar, with legs $OF' = f$ and $B'F' = q - f$, so $\dfrac{-y'}{y} = \dfrac{q - f}{f}$. Equating the right-hand sides gives $qf = pq - pf$, and dividing by $pqf$ gives $\dfrac{1}{f} = \dfrac{1}{p} + \dfrac{1}{q}$. The first proportion also gives $m = \dfrac{y'}{y} = -\dfrac{q}{p}$.
:::
::::

:::esempio{titolo="Diverging lens"}
A diverging lens has $f = -30\,\mathrm{cm}$ and an object is at $p = 60\,\mathrm{cm}$. The lens equation gives
$$
\frac{1}{q} = -\frac{1}{30\,\mathrm{cm}} - \frac{1}{60\,\mathrm{cm}} = -\frac{1}{20\,\mathrm{cm}}
\quad\Longrightarrow\quad
q = -20\,\mathrm{cm} ,
$$
and $m = \dfrac{20}{60} = \dfrac{1}{3}$. The image is virtual, on the same side as the object, upright and reduced, as for every real object in front of a diverging lens.

::grafico{assi=0 uguale=1 poligoni="0.37,2.40 0.24,1.80 0.15,1.20 0.09,0.60 0.07,0.00 0.09,-0.60 0.14,-1.20 0.24,-1.80 0.37,-2.40 -0.37,-2.40 -0.24,-1.80 -0.14,-1.20 -0.09,-0.60 -0.07,0.00 -0.09,0.60 -0.15,1.20 -0.24,1.80 -0.37,2.40" linee="-7,0 3.5,0;-6,1.5 0,1.5 3,3;-6,1.5 3,-0.75" segmenti="0,1.5,-3,0" vettori="-6,0,-6,1.5;-2,0,-2,0.5" punti="-3,0,pieno,F;3,0,pieno,F′" xmin=-7.2 xmax=3.6 ymin=-1.2 ymax=3.2 titolo="Diverging lens with $f = -30\,\mathrm{cm}$ and object at $p = 60\,\mathrm{cm}$: the parallel ray exits as if it came from $F$, and the virtual image forms at $20\,\mathrm{cm}$ from the lens, with $m = \dfrac{1}{3}$"}

:::

:::osservazione{#sistemi-di-due-lenti titolo="Systems of two lenses"}
In a system of two thin lenses on the same axis, at distance $D$, the image formed by the first lens acts as the object for the second, at distance $p_2 = D - q_1$; if $p_2 < 0$, the object for the second lens is virtual. The overall magnification is the product $m = m_1 m_2$. For two lenses in contact $p_2 = -q_1$, and adding the equations of the two lenses one finds that the optical powers **add**.
:::

## Interference and Young's experiment

:::teorema{#principio-di-huygens titolo="Huygens-Fresnel principle"}
It is a postulate of wave optics. Every point of a wavefront behaves as a source of secondary spherical waves, with the frequency of the incident wave, and the wave at later instants is the superposition of the secondary waves. The principle explains why light that passes through a narrow aperture spreads out beyond it.
:::

:::definizione{#interferenza titolo="Superposition and interference"}
At a point reached by two light waves the electric field is the sum of the two fields, because Maxwell's equations are linear. Two sources are **coherent** if they emit with the same frequency and with a constant phase difference. If two coherent in-phase sources reach the point $P$ after the paths $r_1$ and $r_2$, the **path difference** $\delta = r_2 - r_1$ corresponds to the phase difference $\varphi = \dfrac{2\pi\,\delta}{\lambda}$, and at $P$ there is

- **constructive interference** if $\delta = m\lambda$, with $m$ an integer, because the waves arrive in phase;
- **destructive interference** if $\delta = \left( m + \dfrac{1}{2} \right) \lambda$, because the waves arrive in phase opposition and, with equal amplitudes, cancel each other.
:::

::::teorema{#esperimento-di-young titolo="Two-slit interference"}
Consider two narrow parallel slits, at distance $d$, illuminated perpendicularly by a monochromatic plane wave of wavelength $\lambda$, and a screen parallel to the slits at distance $L \gg d$. In the direction that forms the angle $\theta$ with the perpendicular to the slits one observes

- intensity maxima, or bright fringes, for $d \sin\theta = m\lambda$, with $m = 0, \pm 1, \pm 2, \dots$;
- minima, or dark fringes, for $d \sin\theta = \left( m + \dfrac{1}{2} \right) \lambda$.

For small angles the bright fringes are at the distances $y_m = \dfrac{m \lambda L}{d}$ from the center of the screen, equally spaced with the **fringe spacing**
$$
\Delta y = \frac{\lambda L}{d} .
$$
The experiment allows one to measure the wavelength from macroscopic quantities. With $\lambda = 600\,\mathrm{nm}$, $d = 0.20\,\mathrm{mm}$ and $L = 1.5\,\mathrm{m}$ we have $\Delta y = \dfrac{6.00 \cdot 10^{-7} \cdot 1.5}{2.0 \cdot 10^{-4}}\,\mathrm{m} = 4.5\,\mathrm{mm}$.

::grafico{assi=0 uguale=1 linee="0,3.6 0,0.75;0,0.45 0,-0.45;0,-0.75 0,-3.6;8,-3.6 8,3.6;0,0.6 8,3;0,-0.6 8,3" segmenti="0,0,8,0;0,0,8,3;0,0.6,0.45,-0.4" punti="0,0.6,pieno;0,-0.6,pieno;8,3,pieno,P" etichette="-0.75,0.75,S₁;-0.75,-0.95,S₂;1.3,0.12,θ;0.5,-0.8,δ;8.15,0.1,screen;3.8,-0.45,L" xmin=-0.8 xmax=9.6 ymin=-3.8 ymax=4 titolo="The waves that leave $S_1$ and $S_2$ reach $P$ with the path difference $\delta = d \sin\theta$; the figure is not to scale, because in the experiment $d$ is much smaller than $L$"}

:::dimostrazione
By the **Huygens-Fresnel principle** the slits, illuminated by the same wavefront, are two coherent in-phase sources. Let $P$ be a point of the screen in the direction $\theta$. Since $L \gg d$, the rays $S_1P$ and $S_2P$ are nearly parallel and both form the angle $\theta$ with the perpendicular to the slits. Let $H$ be the foot of the perpendicular dropped from $S_1$ to the line $S_2P$; then $HP \approx S_1P$, and the path difference is the leg $S_2H$ of the right triangle $S_1HS_2$, opposite the angle $\theta$:
$$
\delta = S_2 H = d \sin\theta .
$$
The conditions for constructive and destructive interference give the maxima and the minima. The point $P$ is at distance $y = L\tan\theta$ from the center of the screen, and for small angles $\tan\theta \approx \sin\theta$, so $y_m = \dfrac{m\lambda L}{d}$.
:::
::::

:::richiamo{titolo="Sum-to-product formulas"}
For every pair of angles $\alpha$ and $\beta$, $\sin\alpha + \sin\beta = 2 \sin\dfrac{\alpha + \beta}{2} \cos\dfrac{\alpha - \beta}{2}$. See the Precorso topic on trigonometric equations and inequalities.
:::

::::teorema{#intensita-young titolo="Intensity of the interference pattern"}
Under the hypotheses of Young's experiment, if each slit alone produces on the screen the intensity $I_1$, with waves of equal amplitude, the intensity in the direction $\theta$ is
$$
I(\theta) = I_{\max} \cos^2\left( \frac{\pi\, d \sin\theta}{\lambda} \right) , \qquad I_{\max} = 4 I_1 ,
$$
and for small angles $I(y) = I_{\max} \cos^2\left( \dfrac{\pi\, d\, y}{\lambda L} \right)$. The average over one fringe is $2I_1$, hence interference redistributes the energy of the two waves without creating any.

::grafico{f="cos(pi*x)^2" nomi="y,I" legenda="I = I_{\max}\cos^2\left(\dfrac{\pi d y}{\lambda L}\right)" xmin=-3.3 xmax=3.3 ymin=-0.3 ymax=1.4 titolo="Relative intensity $\dfrac{I}{I_{\max}}$ as a function of the position $y$ on the screen, measured in units of the fringe spacing $\dfrac{\lambda L}{d}$: the bright fringes are equally spaced and equally intense"}

:::dimostrazione
At $P$ the fields of the two waves are $E_1 = E_0 \sin(\omega t)$ and $E_2 = E_0 \sin(\omega t + \varphi)$, with $\varphi = \dfrac{2\pi\, d \sin\theta}{\lambda}$. By the **sum-to-product formulas**
$$
E_1 + E_2 = 2 E_0 \cos\frac{\varphi}{2}\, \sin\left( \omega t + \frac{\varphi}{2} \right) ,
$$
so the resulting field oscillates with amplitude $2E_0 \left| \cos\dfrac{\varphi}{2} \right|$. The intensity is proportional to the square of the amplitude and $I_1$ is proportional to $E_0^2$, hence $I = 4 I_1 \cos^2\dfrac{\varphi}{2}$, which is the claim.
:::
::::

## Single-slit diffraction

::::teorema{#minimi-di-diffrazione titolo="Single-slit diffraction minima"}
Consider a slit of width $a$, illuminated perpendicularly by a monochromatic plane wave of wavelength $\lambda$, and a screen at distance $L \gg a$. The intensity is zero in the directions
$$
a \sin\theta = m\lambda , \qquad m = \pm 1, \pm 2, \dots
$$
The **central maximum** lies between the minima with $m = \pm 1$, and for small angles it is $w = \dfrac{2\lambda L}{a}$ wide on the screen; the narrower the slit, the wider the pattern. With $\lambda = 500\,\mathrm{nm}$, $a = 0.10\,\mathrm{mm}$ and $L = 2.0\,\mathrm{m}$ we have $w = \dfrac{2 \cdot 5.00 \cdot 10^{-7} \cdot 2.0}{1.0 \cdot 10^{-4}}\,\mathrm{m} = 2.0\,\mathrm{cm}$.

:::dimostrazione
By the **Huygens-Fresnel principle** every point of the slit is a source of secondary waves in phase. Divide the slit into two halves and pair each point of the upper half with the point $\dfrac{a}{2}$ below it. In the direction $\theta$ the waves from two paired points have the path difference $\dfrac{a}{2}\sin\theta$, by the same reasoning as in Young's experiment. If $\dfrac{a}{2}\sin\theta = \dfrac{\lambda}{2}$, the waves of each pair arrive in phase opposition and cancel, so the intensity is zero: this is the condition $a \sin\theta = \lambda$. Dividing the slit into $2|m|$ strips and pairing adjacent strips two by two, the same reasoning gives a minimum when $\dfrac{a}{2|m|}\sin\theta = \dfrac{\lambda}{2}$, that is, $a \sin\theta = |m|\lambda$, and by symmetry also in the direction $-\theta$. For $\theta = 0$ all the waves arrive in phase, and that is where the central maximum is.
:::
::::

:::osservazione{#intensita-diffrazione titolo="Intensity of the diffraction pattern"}
Adding the contributions of all the points of the slit with an integral one obtains, with a computation that is omitted,
$$
I(\theta) = I_0 \left( \frac{\sin\beta}{\beta} \right)^{2} , \qquad \beta = \frac{\pi\, a \sin\theta}{\lambda} .
$$
The zeros of $\sin\beta$ with $\beta \neq 0$ are the minima already found. The first secondary maximum is about $4.7\,\%$ of $I_0$, so almost all the light falls in the central maximum, which is twice as wide as the secondary maxima.

::grafico{f="(sin(pi*x+1e-9)/(pi*x+1e-9))^2" nomi="y,I" legenda="I = I_0\left(\dfrac{\sin\beta}{\beta}\right)^2" xmin=-3.3 xmax=3.3 ymin=-0.3 ymax=1.4 titolo="Relative intensity $\dfrac{I}{I_0}$ of single-slit diffraction as a function of the position $y$ on the screen, measured in units of $\dfrac{\lambda L}{a}$: the minima fall at the nonzero integer multiples"}

:::

## Diffraction grating

:::definizione{#reticolo-di-diffrazione titolo="Diffraction grating"}
A **diffraction grating** is a set of $N$ identical, equally spaced parallel slits, in a very large number. The distance $d$ between the centers of two adjacent slits is the **grating spacing**, and it is obtained from the number of lines per unit length: a grating with $600$ lines per millimeter has $d = \dfrac{1}{600}\,\mathrm{mm} \approx 1.67\,\mu\mathrm{m}$.
:::

::::teorema{#massimi-del-reticolo titolo="Principal maxima of the grating"}
Consider a grating of spacing $d$, illuminated perpendicularly by a monochromatic plane wave of wavelength $\lambda$, and a distant screen. The **principal maxima** are observed in the directions
$$
d \sin\theta = m\lambda , \qquad m = 0, \pm 1, \pm 2, \dots ,
$$
and the integer $m$ is the **order** of the maximum. Since $|\sin\theta| \leq 1$, only the orders with $|m| \leq \dfrac{d}{\lambda}$ are visible. With $600$ lines per millimeter and $\lambda = 500\,\mathrm{nm}$ we have $\sin\theta = 0.30\,m$: the first three orders are at $17.5^\circ$, $36.9^\circ$ and $64.2^\circ$, and the fourth does not exist.

:::dimostrazione
By the same reasoning as in Young's experiment, the waves from two adjacent slits have in the direction $\theta$ the path difference $d \sin\theta$. If $d \sin\theta = m\lambda$, every pair of adjacent slits sends waves in phase, so all $N$ waves arrive in phase; the amplitude is $N$ times that of one slit and the intensity $N^2$ times.
:::
::::

:::osservazione{#larghezza-dei-massimi titolo="Width of the maxima and separation of colors"}
The directions of the principal maxima are those of Young's experiment with the same distance $d$, but with $N$ slits $N - 1$ minima fall between two consecutive principal maxima, and the maxima are narrower the larger $N$ is. For this reason the grating sharply separates nearby wavelengths. In every order $m \geq 1$ violet light is deviated *less* than red light, in the reverse order with respect to the prism.

::grafico{f="sin(6*pi*x+1e-7)*sin(6*pi*x+1e-7)/(36*sin(pi*x+1e-7)*sin(pi*x+1e-7));cos(pi*x)^2" nomi="u,I" legenda="N = 6;N = 2" xmin=-2.4 xmax=2.4 ymin=-0.3 ymax=1.4 titolo="Relative intensity as a function of $u = \dfrac{d \sin\theta}{\lambda}$ for $N = 6$ slits and for $N = 2$: the principal maxima have the same position, and with more slits they are much narrower"}

:::

## Polarization

:::definizione{#luce-polarizzata titolo="Polarized light"}
Light is **linearly polarized** if the electric field always oscillates in the same direction, called the direction of polarization. Light from the Sun and from ordinary lamps is *unpolarized*: the direction of the electric field changes randomly among all those perpendicular to the propagation. A **polarizer**, such as a Polaroid filter, transmits only the component of the electric field parallel to its **transmission axis**, and the transmitted light is polarized along that axis.
:::

:::teorema{#legge-di-malus titolo="Malus's law"}
It is an experimental law. If linearly polarized light of intensity $I_0$ is incident on a polarizer whose transmission axis forms the angle $\theta$ with the direction of polarization, the transmitted intensity is
$$
I = I_0 \cos^2\theta .
$$
The law is interpreted by observing that the polarizer transmits the component $E_0 \cos\theta$ of the field, and the intensity is proportional to the square of the amplitude. For *un*polarized light the average value of $\cos^2\theta$ over all directions is $\dfrac{1}{2}$, so the transmitted intensity is $\dfrac{I_0}{2}$; two polarizers with perpendicular axes let no light through. Unpolarized light of $40\,\mathrm{W/m^2}$ exits a polarizer with $20\,\mathrm{W/m^2}$, and a second polarizer rotated by $60^\circ$ with $20 \cdot \cos^2 60^\circ\,\mathrm{W/m^2} = 5.0\,\mathrm{W/m^2}$.
:::

:::teorema{#angolo-di-brewster titolo="Polarization by reflection and Brewster's angle"}
It is observed experimentally that unpolarized light reflected by a transparent surface is totally polarized, perpendicular to the plane of incidence, when the reflected ray and the refracted ray are perpendicular. This happens at **Brewster's angle** $\theta_B$, which for light going from the medium of index $n_1$ to the medium of index $n_2$ satisfies
$$
\tan\theta_B = \frac{n_2}{n_1} .
$$
Indeed, the perpendicularity of the two rays is equivalent to $\theta_B + \theta_2 = 90^\circ$, so $\sin\theta_2 = \cos\theta_B$, and Snell's law becomes $n_1 \sin\theta_B = n_2 \cos\theta_B$. From air onto glass with $n = 1.50$ we have $\theta_B = \arctan 1.50 \approx 56.3^\circ$. For this reason polarized sunglasses with a vertical axis reduce glare from horizontal surfaces.
:::
