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
The index is a ratio of two speeds, so it is dimensionless. In glass with $n=1.50$, the phase speed is $u=\dfrac{c}{1.50}=2.00\cdot10^8\,\mathrm{m/s}$. Different indices at different frequencies explain why a prism separates colors. In air $n=1.0003$, a value that is set equal to $1.00$ in problems.
:::

:::esempio{titolo="Frequency and wavelength"}
At a stationary interface, the oscillations on both sides have the same frequency $\nu$. Since $u=\lambda\nu$ and $c=\lambda_0\nu$ in vacuum, the wavelength in the medium is $\lambda=\dfrac{\lambda_0}{n}$.

Light with a vacuum wavelength of $600\,\mathrm{nm}$ has a wavelength of $400\,\mathrm{nm}$ in glass of index $1.50$. Its frequency is $5.00\cdot10^{14}\,\mathrm{Hz}$ in both media.
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

:::esempio{titolo="Two perpendicular mirrors"}
Two plane mirrors form an angle of $90^\circ$ and the ray lies in a plane perpendicular to the line where they meet. The ray strikes the first mirror at angle $\theta$ from the normal and is reflected at the same angle. The normals to the two mirrors are perpendicular, so at the second mirror the angle of incidence is $90^\circ-\theta$. After the second reflection the ray has the direction of the initial ray and the opposite sense, whatever $\theta$ is.

With $\theta=30^\circ$ the two reflection angles are $30^\circ$ and $60^\circ$, and the overall deviation is $180^\circ$. Because of this property, three mutually perpendicular mirrors arranged at a cube corner send light back in the direction it came from, as a retroreflector does.
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

:::esempio{titolo="From water into glass"}
Snell's law holds for any two media. A ray travels from water ($n_1=1.33$) into glass ($n_2=1.50$) with $\theta_1=40^\circ$.
$$
\begin{aligned}
\sin\theta_2&=\frac{1.33}{1.50}\sin40^\circ\simeq0.570\\[6pt]
\theta_2&\simeq34.7^\circ.
\end{aligned}
$$
Glass has a higher index than water, so $\theta_2<\theta_1$. The ray bends toward the normal less than it would on passing from air, because the ratio $\dfrac{n_1}{n_2}\simeq0.887$ is closer to $1$ than $\dfrac{1}{1.50}$ is.
:::

:::attenzione
Snell's law involves angles measured from the normal. A ray at $30^\circ$ to the surface of glass of index $1.50$ has incidence $\theta_1=60^\circ$, so $\sin\theta_2=\dfrac{\sin60^\circ}{1.50}\simeq0.577$ and $\theta_2\simeq35.3^\circ$. Inserting $30^\circ$ in place of $60^\circ$ gives $\theta_2\simeq19.5^\circ$, a value that is wrong by almost $16^\circ$.
:::

:::esempio{titolo="Two colors in the same glass"}
The index of crown glass is about $1.51$ for red light and $1.53$ for violet light. A ray of white light is incident from air with $\theta_1=40^\circ$.
$$
\begin{aligned}
\theta_{2,\text{red}}&=\arcsin\left(\frac{\sin40^\circ}{1.51}\right)\simeq25.2^\circ\\[6pt]
\theta_{2,\text{violet}}&=\arcsin\left(\frac{\sin40^\circ}{1.53}\right)\simeq24.8^\circ.
\end{aligned}
$$
Violet bends closer to the normal than red and the two rays separate by about $0.35^\circ$. This angular separation is the origin of the colors seen with a prism.
:::

:::osservazione{#lastra titolo="Parallel-sided slab"}
When the medium before and after a slab has the same index $n_1$, the same internal angle $\theta_2$ occurs at both interfaces, since the normals are parallel. The first refraction gives $n_1\sin\theta_1=n_2\sin\theta_2$, and the second gives $n_2\sin\theta_2=n_1\sin\theta_3$. Therefore $\theta_3=\theta_1$. For oblique incidence, nonzero thickness, and different indices, the emerging ray is parallel to the incident ray and displaced sideways.
:::

::::teorema{#spostamento-lastra titolo="Lateral displacement in a slab"}
A parallel-sided slab of thickness $t$ and index $n$, surrounded by air, is crossed by a ray with angle of incidence $\theta_1$ and internal angle $\theta_2$. The emerging ray is parallel to the incident one and the distance between the two lines is
$$
d=\frac{t\,\sin(\theta_1-\theta_2)}{\cos\theta_2},\qquad \sin\theta_2=\frac{\sin\theta_1}{n}.
$$
The formula gives the amount by which a ray crossing a flat piece of glass is displaced, for example a microscope slide.

::grafico{assi=0 uguale=1 poligoni="-3.2,0 3.6,0 3.6,-2 -3.2,-2" segmenti="0,1.7,0,-2.2;1.069,-1,1.069,-3.2;2.6,-2.6,0,0;1.069,-2,1.5345,-1.5345" vettori="-2.2,2.2,0,0;0,0,1.069,-2;1.069,-2,3.069,-4" etichette="-2.9,1.9,air;-2.9,-1.6,glass;-0.45,1.3,θ₁;0.2,-0.7,θ₂;1.85,-1.45,d;3,-0.4,t = 2 cm" xmin=-3.4 xmax=3.9 ymin=-4.3 ymax=2.7 titolo="The emerging ray is parallel to the incident ray. For $t=2.0\,\mathrm{cm}$, $n=1.50$, and $\theta_1=45^\circ$ the displacement $d$ is about $0.66\,\mathrm{cm}$."}

:::dimostrazione
Let $A$ be the point where the ray enters the slab and $B$ the point where it leaves. In the slab the ray makes angle $\theta_2$ with the normal, perpendicular to the faces, and crosses the thickness $t$, so $\overline{AB}=\dfrac{t}{\cos\theta_2}$. The extension of the incident ray passes through $A$ and makes angle $\theta_1$ with the normal. The segment $AB$ instead makes angle $\theta_2$ with the same direction, so the angle between $AB$ and the extension is $\theta_1-\theta_2$.

At the second interface Snell's law gives $n\sin\theta_2=\sin\theta_3$ with $\sin\theta_2=\dfrac{\sin\theta_1}{n}$, so $\theta_3=\theta_1$ and the emerging ray is parallel to the extension of the incident ray. The distance between the two parallel lines is the distance of $B$ from the extension, that is, $d=\overline{AB}\,\sin(\theta_1-\theta_2)$. Substituting the expression for $\overline{AB}$ gives the formula.
:::
::::

:::esempio{titolo="Ray crossing a flat piece of glass"}
A glass slab with $n=1.50$ and $t=2.0\,\mathrm{cm}$ is struck with $\theta_1=45^\circ$.
$$
\begin{aligned}
\sin\theta_2&=\frac{\sin45^\circ}{1.50}\simeq0.471
\quad\Rightarrow\quad\theta_2\simeq28.1^\circ\\[6pt]
d&=\frac{2.0\,\mathrm{cm}\cdot\sin(45^\circ-28.1^\circ)}{\cos28.1^\circ}
 \simeq0.66\,\mathrm{cm}.
\end{aligned}
$$
At normal incidence $\theta_1=\theta_2=0^\circ$ and $d=0$. With $\theta_1=45^\circ$ the displacement is about one third of the thickness.
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
For glass of index $1.50$ and air of index $1.00$, $\theta_c=\arcsin\left(\dfrac{1}{1.50}\right)\simeq41.8^\circ$. At $45^\circ$ incidence, reflection is total. At $30^\circ$, a transmitted ray exists and is about $48.6^\circ$ from the normal.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-1.2,0,3" vettori="-2.4,2.4,0,0;0,0,2.4,2.4" etichette="-2.55,2.85,glass;-2.55,-0.55,air;0.45,2.66,normal;-0.9,1.4,45°;0.9,1.4,45°" xmin=-4 xmax=4 ymin=-1.4 ymax=3.4 titolo="From glass toward air at $45^\circ$: the incident and reflected rays stay in the glass."}

In a fiber the core has a higher index than the cladding. A ray stays within the core while its incidence angles at the boundary exceed the critical angle, always measured from the boundary normal.
:::

:::esempio{titolo="Circle of light on the surface of water"}
A point source is at depth $h=1.0\,\mathrm m$ below the still surface of a pool ($n=1.33$). Light leaves the surface from rays with $\theta_1\le\theta_c$, where
$$
\theta_c=\arcsin\left(\frac{1}{1.33}\right)\simeq48.8^\circ.
$$
The ray with incidence $\theta_c$ meets the surface at distance $r=h\tan\theta_c$ from the vertical through the source, so
$$
r=1.0\,\mathrm m\cdot\tan48.8^\circ\simeq1.14\,\mathrm m.
$$
From outside, the source is visible only through a circle of radius $1.14\,\mathrm m$. More steeply inclined rays are totally reflected toward the bottom.

::grafico{assi=0 uguale=1 poligoni="-3.2,0 3.8,0 3.8,-2.1 -3.2,-2.1" vettori="0,-1,1.14,0;0,-1,-1.14,0;1.14,0,2.4,0;-1.14,0,-2.4,0;0,-1,1.8,0;1.8,0,3.6,-1" segmenti="0,0,0,-1;0,0.12,1.14,0.12" punti="0,-1,pieno,S" etichette="-2.9,0.45,air;-2.9,-1.8,water;-0.45,-0.5,h;0.5,0.3,r" xmin=-3.4 xmax=4 ymin=-2.3 ymax=0.8 titolo="The limiting rays leave grazing the surface. The more steeply inclined ray is reflected toward the bottom."}
:::

:::attenzione
The critical angle exists only for passage into a medium of lower index. From air into glass, even with $\theta_1=89^\circ$ we have $\sin\theta_2=\dfrac{\sin89^\circ}{1.50}\simeq0.667$, so $\theta_2\simeq41.8^\circ$ and the ray always enters the glass.
:::

## Images and ray diagrams

:::definizione{#immagini titolo="Real and virtual images"}
An image is **real** when emerging rays from the same object point meet. A screen placed at their intersection intercepts the light there. The image is **virtual** when the backward extensions of the rays meet. The light can reach an eye, which assigns the diverging rays an apparent origin.

In a thin converging lens, a ray incident parallel to the axis is deflected toward the focal point on the exit side. A ray through the optical center continues approximately straight. Tracing these two rays from the top of the object locates the top of the image. In a diverging lens, a ray that enters parallel to the axis emerges as if it came from the focal point on the entrance side.

These constructions use the **paraxial** approximation, valid for rays close to the axis and at small angles.
:::

:::esempio{#profondita-apparente titolo="Apparent depth"}
An object under a flat surface can appear shallower to an observer in air. The liquid has index $n_1$ and the air $n_2$. Let $d$ be the actual depth and $x$ the horizontal distance traveled by the ray before it crosses the surface. In the liquid, the ray satisfies $x=d\tan\theta_1$. Extending the ray in air backward reaches the object's vertical line at depth $d'$ and satisfies $x=d'\tan\theta_2$.

At small angles, $\tan\theta$ is close to $\sin\theta$. Snell's law therefore gives
$$
d'=d\frac{\tan\theta_1}{\tan\theta_2}\simeq d\frac{n_2}{n_1}.
$$
A coin $12\,\mathrm{cm}$ deep in a liquid of index $1.50$, viewed from air nearly along the normal, therefore appears about $8\,\mathrm{cm}$ deep. The approximation applies when the viewing direction is close to perpendicular to the surface.

::grafico{assi=0 uguale=1 poligoni="-2.5,0 3.5,0 3.5,-3.6 -2.5,-3.6" vettori="0,-3,1.092,0;1.092,0,2.133,1.74" segmenti="1.092,0,0,-1.827;0,0.6,0,-3.4;-0.7,0,-0.7,-1.827;-1.3,0,-1.3,-3" punti="0,-3,pieno,O;0,-1.827,vuoto,O′" etichette="-2.2,0.5,air;-2.2,-3.4,liquid;-0.55,-1,d′;-1.15,-1.5,d;1.5,0.3,θ₂;0.3,-0.9,θ₁" xmin=-2.7 xmax=3.7 ymin=-3.8 ymax=2.3 titolo="The outgoing ray extends backward to $O'$, at depth $d'<d$. For small angles $\dfrac{d'}{d}\simeq\dfrac{n_2}{n_1}$."}
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

:::osservazione{titolo="Position and size of the image"}
In a converging lens, $p>f$ gives $q>0$. When $p=2f$, we obtain $q=2f$ and $M=-1$. For $f<p<2f$ the real image is enlarged, and for $p>2f$ it is reduced. As the object approaches the focus from outside, the denominator $p-f$ decreases to zero and $q$ increases. At $p=f$ the rays emerge parallel and the image is at infinity.

::grafico{f="10*x/(x-10)" xmin=0 xmax=50 ymin=0 ymax=50 nomi="p,q (cm)" asintoti="x=10;y=10" punti="20,20,pieno;30,15,pieno" titolo="Image distance as a function of object distance for $f=10\,\mathrm{cm}$. At $p=20\,\mathrm{cm}$ we have $q=20\,\mathrm{cm}$. As $p\to\infty$ the distance $q$ tends to $f$."}

For $0<p<f$, the equation gives $q<0$ and $M>1$. With $p=5.0\,\mathrm{cm}$ and $f=10\,\mathrm{cm}$, we get $q=-10\,\mathrm{cm}$ and $M=+2.0$. For a diverging lens, we can write $f=-|f|$, so $q=-\dfrac{|f|p}{p+|f|}$ and $M=\dfrac{|f|}{p+|f|}$. The image of a real object is always virtual, upright, and reduced, with $|q|<|f|$.
:::

:::esempio{titolo="Diverging lens"}
A diverging lens with $f=-3.0\,\mathrm{cm}$ and an object $1.2\,\mathrm{cm}$ tall at $p=6.0\,\mathrm{cm}$ give
$$
q=\frac{(-3.0)\cdot6.0}{6.0-(-3.0)}\,\mathrm{cm}=-2.0\,\mathrm{cm},
\qquad
M=-\frac{-2.0}{6.0}=+\frac{1}{3}.
$$
The image is virtual, upright, and $0.40\,\mathrm{cm}$ tall. It is on the object side, between the lens and the focal point $F$. The ray parallel to the axis emerges diverging and its extension passes through $F$.

::grafico{assi=0 uguale=1 linee="-6.8,0 4,0;0,-2 0,2" unicolore=1 vettori="-6,0,-6,1.2;-6,1.2,0,1.2;0,1.2,3,2.4;-6,1.2,3,-0.6" segmenti="0,1.2,-3,0;-2,0,-2,0.4" punti="-3,0,pieno,F;3,0,pieno,F′;-2,0.4,vuoto" etichette="-5.6,1.7,object;-3.6,-0.5,virtual image" xmin=-7.2 xmax=4.3 ymin=-1.4 ymax=2.8 titolo="The ray parallel to the axis diverges and its dashed extension passes through $F$. The central ray is not deflected. The extensions meet at the virtual image."}
:::

:::esempio{titolo="Two lens positions"}
An object and a screen are $D=80\,\mathrm{cm}$ apart. A converging lens with $f=15\,\mathrm{cm}$ forms the image on the screen when $p+q=D$. Substitute $q=\dfrac{fp}{p-f}$ and multiply by $p-f$.
$$
\begin{aligned}
p+\frac{fp}{p-f}&=D\\[6pt]
p^2-Dp+Df&=0\\[6pt]
p&=\frac{D\pm\sqrt{D^2-4Df}}{2}
 =\frac{80\pm\sqrt{6400-4800}}{2}\,\mathrm{cm}
 =\frac{80\pm40}{2}\,\mathrm{cm}.
\end{aligned}
$$
The solutions are $p=60\,\mathrm{cm}$ with $q=20\,\mathrm{cm}$ and $M=-\dfrac{1}{3}$, or $p=20\,\mathrm{cm}$ with $q=60\,\mathrm{cm}$ and $M=-3$. There are therefore two lens positions, one with a reduced image and one with an enlarged image. The discriminant $D^2-4Df$ is nonnegative only for $D\ge4f$, so the minimum distance between object and screen is $4f=60\,\mathrm{cm}$.
:::

:::attenzione
The sign of $M$ and its magnitude have distinct meanings. The sign says whether the image is upright or inverted, the magnitude says by what factor the size changes. With $M=-3$ the image is inverted and three times larger, with $M=+\dfrac{1}{3}$ it is upright and three times smaller. A negative value therefore does not indicate a reduced image.
:::

## Spherical mirrors

::::teorema{#specchi titolo="Concave and convex mirrors"}
For a paraxial spherical mirror, the focal length magnitude is half the radius of curvature $R$. With this convention, $f>0$ for a concave mirror and $f<0$ for a convex mirror. For a real object in front of the mirror, $p>0$. The distance $q$ is positive for a real image in front of the mirror and negative for a virtual image behind it.
$$
|f|=\frac{R}{2},\qquad
\frac{1}{f}=\frac{1}{p}+\frac{1}{q},\qquad
M=-\frac{q}{p}.
$$
A positive $q$ identifies the side where the outgoing rays travel. For a mirror this is the side in front of the surface, since light is reflected. For a lens it is the side beyond the lens, since light is transmitted.

:::dimostrazione
Consider a concave mirror with vertex $V$ and center of curvature $C$, with $R=\overline{VC}$, and an object $O$ on the axis with $p>R$. A ray leaving $O$ strikes the mirror at $P$, at a small height $y$ from the axis, and the reflected ray meets the axis at $I$. Let $\alpha$, $\beta$, $\gamma$ be the angles that the lines $PO$, $PC$, $PI$ make with the axis and $\theta$ the angle of incidence, equal to the angle of reflection because the normal at $P$ is the line $PC$.

In triangle $OPC$ the angle $\beta$ is exterior, so $\beta=\alpha+\theta$. In triangle $CPI$ the angle $\gamma$ is exterior, so $\gamma=\beta+\theta$. Eliminating $\theta$ gives $\alpha+\gamma=2\beta$.

For rays close to the axis the angles are small, so $\alpha\simeq\dfrac{y}{p}$, $\beta\simeq\dfrac{y}{R}$, and $\gamma\simeq\dfrac{y}{q}$. Substituting and dividing by $y$ gives
$$
\frac{1}{p}+\frac{1}{q}=\frac{2}{R}.
$$
For very large $p$ the incident rays are parallel to the axis and $q=\dfrac{R}{2}$. This distance is the focal length, so $f=\dfrac{R}{2}$ and $\dfrac{1}{f}=\dfrac{1}{p}+\dfrac{1}{q}$. The cases with $p<R$ are treated in the same way, with signed distances.

The ray that strikes the vertex finds the normal along the axis, so it makes the same angle with the axis before and after reflection. If the object has height $h$ and the real image has height $h'<0$, the right triangles with legs $p$, $h$ and $q$, $-h'$ are similar, so $\dfrac{h'}{h}=-\dfrac{q}{p}$.
:::
::::

:::esempio{titolo="From the surface to the image"}
A concave mirror with $R=40\,\mathrm{cm}$ has focal length $f=20\,\mathrm{cm}$. With $p=60\,\mathrm{cm}$, we obtain $q=30\,\mathrm{cm}$ and $M=-0.50$. The image is therefore in front of the mirror, inverted, and reduced. For a convex mirror of the same radius, $f=-20\,\mathrm{cm}$. With the same object we get $q=-15\,\mathrm{cm}$ and $M=+0.25$, so the image is behind the mirror, upright, and reduced. For a real object a convex mirror always gives an image with these properties and $|q|<|f|$, and the reduced image allows a wider region to be seen, as in a rearview mirror.

::grafico{assi=0 uguale=1 linee="-1,0 7.4,0" curve="4-4*cos(t),4*sin(t),-0.4,0.4" unicolore=1 vettori="6,0,6,0.8;0,0.8,3,-0.4;6,0.8,0,0;0,0,3,-0.4;3,0,3,-0.4" segmenti="6,0.8,0,0.8" punti="2,0,pieno,F;4,0,pieno,C" etichette="6.2,0.9,object;3.1,-0.75,image" xmin=-1 xmax=7.6 ymin=-1.2 ymax=1.5 titolo="Concave mirror with $R=40\,\mathrm{cm}$ and object at $60\,\mathrm{cm}$: the real, inverted image forms $30\,\mathrm{cm}$ in front of the mirror, between $F$ and $C$. Heights are enlarged relative to distances."}
:::

:::esempio{titolo="Makeup mirror"}
A concave mirror with $R=60\,\mathrm{cm}$ has $f=30\,\mathrm{cm}$. A face at $p=10\,\mathrm{cm}$, that is, inside the focal length, produces
$$
q=\frac{30\cdot10}{10-30}\,\mathrm{cm}=-15\,\mathrm{cm},
\qquad
M=-\frac{-15}{10}=+1.5.
$$
The image is virtual, $15\,\mathrm{cm}$ behind the mirror, upright, and enlarged by a factor of one and a half.
:::

## Optical power and instruments

:::definizione{#diottrie titolo="Optical power of a lens"}
**Optical power** is the reciprocal of the focal length in meters. It is measured in diopters, denoted by $\mathrm D$, with one diopter equal to $1\,\mathrm{m^{-1}}$.
$$
D=\frac{1}{f}.
$$
A converging lens with $f=25\,\mathrm{cm}=0.25\,\mathrm m$ has power $D=+4.0\,\mathrm D$. A diverging lens with $f=-0.50\,\mathrm m$ has power $D=-2.0\,\mathrm D$. For two thin lenses in contact in the same medium, the powers add. The combination of these lenses has power $+2.0\,\mathrm D$ and focal length $0.50\,\mathrm m$. If the sum is zero, the system is afocal in the thin lens model.
:::

:::richiamo{titolo="Thin lens equation"}
A thin lens of focal length $f$ forms, for an object at distance $p$, an image at distance $q$ such that $\dfrac{1}{f}=\dfrac{1}{p}+\dfrac{1}{q}$. If the object is virtual, that is, if the incident rays converge toward a point beyond the lens, we use $p<0$.
:::

::::teorema{#lenti-a-contatto titolo="Sum of the powers of lenses in contact"}
Two thin lenses in contact, with powers $D_1=\dfrac{1}{f_1}$ and $D_2=\dfrac{1}{f_2}$, are equivalent to a thin lens of power
$$
D=D_1+D_2.
$$
The result allows a pair of lenses to be replaced by a single lens and the powers to be added without computing the intermediate images. Two lenses of $+4.0\,\mathrm D$ and $+1.0\,\mathrm D$ are equivalent to a lens of $+5.0\,\mathrm D$, that is, a focal length of $0.20\,\mathrm m$.

:::dimostrazione
The first lens forms, for an object at distance $p$, an image at distance $q_1$, with $\dfrac{1}{f_1}=\dfrac{1}{p}+\dfrac{1}{q_1}$. The lenses are thin and in contact, so the distances from the first lens and from the second coincide. The image of the first lens acts as the object for the second, with $p_2=-q_1$: if $q_1>0$ the rays converge beyond the second lens and the object is virtual, if $q_1<0$ the object is real.

For the second lens, $\dfrac{1}{f_2}=\dfrac{1}{p_2}+\dfrac{1}{q}=-\dfrac{1}{q_1}+\dfrac{1}{q}$, where $q$ is the final image distance. Adding the two equations side by side, the terms in $q_1$ cancel and
$$
\frac{1}{f_1}+\frac{1}{f_2}=\frac{1}{p}+\frac{1}{q}
$$
remains. This is the equation of a single lens with $\dfrac{1}{f}=\dfrac{1}{f_1}+\dfrac{1}{f_2}$, that is, $D=D_1+D_2$.
:::
::::

:::esempio{titolo="Corrective lenses"}
The distance between the lens and the eye is neglected. A nearsighted eye sees clearly up to $0.50\,\mathrm m$. Distant objects, with $\dfrac{1}{p}\simeq0$, must have a virtual image at $0.50\,\mathrm m$, so $q=-0.50\,\mathrm m$ and
$$
D=\frac{1}{p}+\frac{1}{q}\simeq-\frac{1}{0.50\,\mathrm m}=-2.0\,\mathrm D.
$$
A farsighted eye has its near point at $1.00\,\mathrm m$ and must read at $p=0.25\,\mathrm m$, with a virtual image at $q=-1.00\,\mathrm m$.
$$
D=\frac{1}{0.25\,\mathrm m}-\frac{1}{1.00\,\mathrm m}=+3.0\,\mathrm D.
$$
The lens for the nearsighted eye is diverging and the one for the farsighted eye is converging.
:::

:::osservazione
In a camera, the lens forms a real image on the sensor. When the object is far away, $\dfrac{1}{p}$ is small and the image distance is close to $f$. To focus on a closer object, a fixed-focal-length lens requires a larger image distance. In the eye, the retina is fixed, so accommodation changes the power of the optical system. In a magnifying glass, the object is inside the focal length and the image is virtual.
:::
