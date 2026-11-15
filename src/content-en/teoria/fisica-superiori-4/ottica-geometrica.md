---
titolo: Reflection, refraction, mirrors and lenses
sommario: The ray model describes how light travels between media and predicts the
  images formed by mirrors and lenses.
---

## Rays and refractive index

:::definizione{#indice titolo="The light ray model"}
**Geometrical optics** represents light propagation by rays pointing in the direction of travel. Rays are straight in a homogeneous, isotropic medium. The model works when obstacles and openings are much larger than the wavelength. A slit comparable in width to the wavelength requires the wave model to describe diffraction.

The **refractive index** $n$ compares the speed of light in vacuum $c$ with the phase speed $u$ in the medium.
$$
n=\frac{c}{u},\qquad c=3.00\cdot10^8\,\mathrm{m/s}.
$$
The index is a ratio of two speeds, so it is dimensionless. In glass with $n=1.50$, the phase speed is $u=\dfrac{c}{1.50}=2.00\cdot10^8\,\mathrm{m/s}$. Different indices at different frequencies explain why a prism separates colors.
:::

:::esempio{titolo="Frequency and wavelength"}
At a stationary interface, the oscillations on both sides have the same frequency $\nu$. Since $u=\lambda\nu$ and $c=\lambda_0\nu$ in vacuum, the wavelength in the medium is $\lambda=\dfrac{\lambda_0}{n}$.

Light with a vacuum wavelength of $600\,\mathrm{nm}$ has a wavelength of $400\,\mathrm{nm}$ in glass of index $1.50$. Its frequency is $5.00\cdot10^{14}\,\mathrm{Hz}$ in both media. The values of $\lambda$ and $u$ change by the same factor, so their ratio stays constant.
:::

## Reflection

:::teorema{#riflessione titolo="Law of reflection"}
The **normal** is the line perpendicular to the surface at the point of incidence. The incident ray, the reflected ray, and the normal lie in the same plane. Measured from the normal, the reflection angle $\theta_r$ and the incidence angle $\theta_i$ are equal.
$$
\theta_r=\theta_i.
$$
A ray at $30^\circ$ to the mirror is at $60^\circ$ to the normal. The reflected ray is therefore also at $60^\circ$ to the normal, on its other side. The angle between the two ray segments above the surface is $120^\circ$.

::grafico{assi=0 uguale=1 linee="-3.7,0 3.7,0" segmenti="0,-0.4,0,3.1" vettori="-2.6,1.5,0,0;0,0,2.6,1.5" etichette="-2.45,2.05,incident;2.35,2.05,reflected;0.55,2.7,normal;-2.65,-0.5,mirror;-0.95,0.9,60°;0.95,0.9,60°" xmin=-4 xmax=4 ymin=-0.9 ymax=3.25 titolo="The incidence and reflection angles are both $60^\circ$. They are measured from the dashed normal."}
:::

:::esempio{titolo="Image in a plane mirror"}
The backward extensions of rays reflected by a plane mirror meet at the point symmetric to the object across the mirror. The image of an object $0.80\,\mathrm m$ in front of the mirror therefore appears $0.80\,\mathrm m$ behind it. It is virtual, upright, and the same height as the object.

If the object has coordinate $x_O$ along an axis perpendicular to a mirror at $x_S$, then $x_I-x_S=x_S-x_O$. Hence $x_I=2x_S-x_O$. With the object fixed, moving the mirror by $10\,\mathrm{cm}$ moves the image by $20\,\mathrm{cm}$ in the same direction in the laboratory frame.
:::

## Refraction and Snell's law

:::teorema{#snell titolo="Travel between two transparent media"}
When a transmitted ray travels between two homogeneous, isotropic media, the incident ray, refracted ray, and normal lie in the same plane. **Snell's law** relates the angles $\theta_1$ and $\theta_2$, both measured from the normal.
$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$
Since sine increases between $0^\circ$ and $90^\circ$, oblique incidence into a higher-index medium gives $\theta_2<\theta_1$. In a lower-index medium, the transmitted ray bends away from the normal when transmission is possible. At normal incidence, $\theta_1=\theta_2=0^\circ$ even when the indices differ.
:::

:::esempio{titolo="From air into glass"}
A ray travels from air of index $n_1=1.00$ into glass of index $n_2=1.50$, with $\theta_1=30^\circ$. First isolate $\sin\theta_2$, then use the inverse sine in degrees.
$$
\begin{aligned}
\sin\theta_2 &= \frac{1.00}{1.50}\sin30^\circ
             =\frac{1}{3}\\[6pt]
\theta_2 &= \arcsin\left(\frac{1}{3}\right)\simeq19.5^\circ.
\end{aligned}
$$
The result is below $30^\circ$, as expected when entering a higher-index medium. The refracted ray is approximately $70.5^\circ$ from the surface.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-3.2,0,3.2" vettori="-1.6,2.77,0,0;0,0,1.025,-2.9" etichette="-2.4,2.85,air;2.55,-2.6,glass;0.55,2.7,normal;-0.78,1.88,30°;0.22,-1.75,θ₂" xmin=-4 xmax=4 ymin=-3.5 ymax=3.5 titolo="In glass the angle from the normal decreases from $30^\circ$ to about $19.5^\circ$."}
:::

:::osservazione{#lastra titolo="Parallel-sided slab"}
When the medium before and after a slab has the same index $n_1$, the same internal angle $\theta_2$ occurs at both interfaces, since the normals are parallel. The first refraction gives $n_1\sin\theta_1=n_2\sin\theta_2$, and the second gives $n_2\sin\theta_2=n_1\sin\theta_3$. Therefore $\theta_3=\theta_1$. For oblique incidence, nonzero thickness, and different indices, the emerging ray is parallel to the incident ray and displaced sideways.
:::

## Total internal reflection

::::teorema{#angolo-limite titolo="Condition for total internal reflection"}
For light traveling from a medium of index $n_1$ toward one of index $n_2<n_1$, the **critical angle** $\theta_c$ satisfies
$$
\theta_c=\arcsin\left(\frac{n_2}{n_1}\right).
$$
For $\theta_1<\theta_c$ there is a transmitted ray. At $\theta_1=\theta_c$ the limiting direction is along the interface, and for $\theta_1>\theta_c$ total internal reflection occurs in the lossless model.

:::dimostrazione
Snell's law requires $\sin\theta_2=\dfrac{n_1}{n_2}\sin\theta_1$. For $n_1>n_2$, the right-hand side increases beyond $1$. The limit is reached when $\theta_2=90^\circ$, giving $n_1\sin\theta_c=n_2$. The sine of a real angle cannot exceed $1$, so beyond $\theta_c$ there is no propagating transmitted ray.
:::
::::

:::esempio{titolo="Glass, air, and optical fibers"}
For glass of index $1.50$ and air of index $1.00$, $\theta_c=\arcsin\left(\dfrac{1}{1.50}\right)\simeq41.8^\circ$. Once the incident medium is fixed, the comparison with $41.8^\circ$ determines which model applies. At $45^\circ$ incidence, reflection is total. At $30^\circ$, a transmitted ray exists and is about $48.6^\circ$ from the normal.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-1.2,0,3" vettori="-2.4,2.4,0,0;0,0,2.4,2.4" etichette="-2.55,2.85,glass;-2.55,-0.55,air;0.45,2.66,normal;-0.9,1.4,45°;0.9,1.4,45°" xmin=-4 xmax=4 ymin=-1.4 ymax=3.4 titolo="From glass toward air at $45^\circ$: the incident and reflected rays stay in the glass."}

In a fiber the core has a higher index than the cladding. A ray stays within the core while its incidence angles at the boundary exceed the critical angle, always measured from the boundary normal.
:::

## Images and ray diagrams

:::definizione{#immagini titolo="Real and virtual images"}
An image is **real** when emerging rays from the same object point meet. A screen placed at their intersection intercepts the light there. The image is **virtual** when the backward extensions of the rays meet. The light can reach an eye, which assigns the diverging rays an apparent origin.

In a thin converging lens, a ray incident parallel to the axis is deflected toward the focal point on the exit side. A ray through the optical center continues approximately straight. Tracing these two rays from the top of the object locates the top of the image. In a diverging lens, a ray that enters parallel to the axis emerges as if it came from the focal point on the entrance side.

These diagrams use the **paraxial** approximation, valid for rays close to the axis and at small angles. The diagrams and equations describe the same optical model.
:::

:::esempio{#profondita-apparente titolo="Apparent depth"}
An object under a flat surface can appear shallower to an observer in air. Let $d$ be the actual depth and $x$ the horizontal distance traveled by the ray before it crosses the surface. In the liquid, the ray satisfies $x=d\tan\theta_1$. Extending the ray in air backward reaches the object's vertical line at depth $d'$, so $x=d'\tan\theta_2$.

At small angles, $\tan\theta$ is close to $\sin\theta$. Snell's law therefore gives
$$
d'=d\frac{\tan\theta_1}{\tan\theta_2}\simeq d\frac{n_2}{n_1}.
$$
A coin $12\,\mathrm{cm}$ deep in a liquid of index $1.50$, viewed from air nearly along the normal, therefore appears about $8\,\mathrm{cm}$ deep. The approximation applies when the viewing direction is close to perpendicular to the surface.
:::

## Thin lenses

::::teorema{#lenti titolo="Thin lens equation and magnification"}
For a thin lens in air with a real object, take $p>0$. The image distance $q$ is positive for a real image on the exit side and negative for a virtual image on the object side. The focal length $f$ is positive for a converging lens and negative for a diverging lens. If $p\ne f$, then
$$
\begin{aligned}
\frac{1}{f}&=\frac{1}{p}+\frac{1}{q}\\[6pt]
q&=\frac{fp}{p-f}\\[6pt]
M&=\frac{h'}{h}=-\frac{q}{p}.
\end{aligned}
$$
The object and image heights are $h$ and $h'$, measured from the same axis. Positive transverse magnification $M$ indicates an upright image, and negative magnification indicates an inverted image. The magnitude $|M|$ is the ratio of the sizes.

:::dimostrazione
For a converging lens and a real image, the ray through the optical center forms two similar triangles with bases $p$ and $q$. Their signed heights therefore give $M=-\dfrac{q}{p}$. The ray that enters parallel to the axis starts at height $h$ on the lens and passes through the focal point at distance $f$. At distance $q$, its height is $h'=h\left(1-\dfrac{q}{f}\right)$. Equating the two expressions for $M$ and dividing by $q$ gives
$$
-\frac{1}{p}=\frac{1}{q}-\frac{1}{f}.
$$
The signed-distance equation also applies when the intersection is formed by backward extensions.
:::
::::

:::esempio{titolo="An image captured on a screen"}
With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$, we get
$$
q=\frac{10\cdot30}{30-10}\,\mathrm{cm}=15\,\mathrm{cm},
\qquad
M=-\frac{15}{30}=-0.50.
$$
The screen belongs $15\,\mathrm{cm}$ away on the exit side. The image is inverted and its height in absolute value is half the object height.

::grafico{assi=0 uguale=1 linee="-6.8,0 4.3,0;0,-2 0,2.1" unicolore=1 vettori="-6,0,-6,1.5;3,0,3,-0.75;-6,1.5,0,1.5;0,1.5,3,-0.75;-6,1.5,0,0;0,0,3,-0.75" punti="-2,0,pieno,F₁;2,0,pieno,F₂" etichette="-5.6,2,object;3.15,0.5,screen" xmin=-7.3 xmax=4.6 ymin=-2.2 ymax=2.6 titolo="The two rays start at the top of the object and meet below the axis. The object is at $3f$ and the image is at $\dfrac{3}{2}f$."}
:::

:::osservazione{titolo="Predicting the sign before calculation"}
In a converging lens, $p>f$ gives $q>0$. When $p=2f$, we obtain $q=2f$ and $M=-1$. For $f<p<2f$ the real image is enlarged, and for $p>2f$ it is reduced. As the object approaches the focus from outside, the denominator $p-f$ decreases to zero and $q$ increases. At $p=f$ the rays emerge parallel and the image is at infinity.

For $0<p<f$, the equation gives $q<0$ and $M>1$. With $p=5.0\,\mathrm{cm}$ and $f=10\,\mathrm{cm}$, we get $q=-10\,\mathrm{cm}$ and $M=+2.0$. For a diverging lens, write $f=-|f|$ to get $q=-\dfrac{|f|p}{p+|f|}$ and $M=\dfrac{|f|}{p+|f|}$. The image of a real object is always virtual, upright, and reduced, with $|q|<|f|$.
:::

## Spherical mirrors

:::teorema{#specchi titolo="Concave and convex mirrors"}
For a paraxial spherical mirror, the focal length magnitude is half the radius of curvature $R$. With this convention, $f>0$ for a concave mirror and $f<0$ for a convex mirror. For a real object in front of the mirror, $p>0$. The distance $q$ is positive for a real image in front of the mirror and negative for a virtual image behind it.
$$
|f|=\frac{R}{2},\qquad
\frac{1}{f}=\frac{1}{p}+\frac{1}{q},\qquad
M=-\frac{q}{p}.
$$
A positive $q$ identifies the side where the outgoing rays travel. For a mirror this is the side in front of the surface, since light is reflected. For a lens it is the side beyond the lens, since light is transmitted.
:::

:::esempio{titolo="From the surface to the image"}
A concave mirror with $R=40\,\mathrm{cm}$ has focal length $f=20\,\mathrm{cm}$. With $p=60\,\mathrm{cm}$, we obtain $q=30\,\mathrm{cm}$ and $M=-0.50$. The image is therefore in front of the mirror, inverted, and reduced. For a convex mirror of the same radius, $f=-20\,\mathrm{cm}$. With the same object we get $q=-15\,\mathrm{cm}$ and $M=+0.25$, so the image is behind the mirror, upright, and reduced.
:::

## Optical power and instruments

:::definizione{#diottrie titolo="Optical power of a lens"}
**Optical power** is the reciprocal of the focal length in meters. It is measured in diopters, denoted by $\mathrm D$, with one diopter equal to $1\,\mathrm{m^{-1}}$.
$$
D=\frac{1}{f}.
$$
A converging lens with $f=25\,\mathrm{cm}=0.25\,\mathrm m$ has power $D=+4.0\,\mathrm D$. A diverging lens with $f=-0.50\,\mathrm m$ has power $D=-2.0\,\mathrm D$. For two thin lenses in contact in the same medium, the powers add. The combination of these lenses has power $+2.0\,\mathrm D$ and focal length $0.50\,\mathrm m$. If the sum is zero, the system is afocal in the thin lens model.
:::

:::osservazione
In a camera, the lens forms a real image on the sensor. When the object is far away, $\dfrac{1}{p}$ is small and the image distance is close to $f$. To focus on a closer object, a fixed-focal-length lens requires a larger image distance. In the eye, the retina is fixed, so accommodation changes the power of the optical system. In a magnifying glass, the object is inside the focal length and the image is virtual. The angular magnification perceived by the eye also depends on the viewing position.
:::
