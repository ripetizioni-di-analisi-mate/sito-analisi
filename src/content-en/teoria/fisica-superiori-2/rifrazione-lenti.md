---
titolo: "Refraction and lenses"
sommario: "Refractive index, Snell’s law, total internal reflection, thin-lens images and optical power."
---

## Refractive index

:::definizione{#indice titolo="The speed of light in a material"}
A **medium** is the material that light travels through: air, water, glass. It is **transparent** if light passes through it. In vacuum light travels at $c=3.0\cdot10^8\,\mathrm{m/s}$, that is three hundred million metres per second; in a transparent medium it travels at a lower speed $v$.

The **refractive index** $n$ of a medium is the ratio of the speed of light in vacuum $c$ to the speed $v$ at which light advances in the medium (also called the phase speed). The ratio is calculated for light of a fixed frequency.

$$
n=\frac{c}{v},\qquad v=\frac{c}{n}.
$$

The second formula follows from the first by multiplying both sides by $v$ and dividing them by $n$. The index is **dimensionless**, that is, a pure number, because $c$ and $v$ are both in metres per second, and the unit cancels in the ratio. The ordinary transparent materials treated here have $n>1$, so light travels more slowly in them than in vacuum. For example, $n=2$ means that light in the medium goes at half the speed it has in vacuum.

The **frequency** $\nu$ (Greek letter *nu*) is the number of oscillations of the wave in one second and is measured in hertz ($1\,\mathrm{Hz}$ is one oscillation per second). The **wavelength** $\lambda$ (Greek letter *lambda*) is the distance the wave travels during a single oscillation, so $\lambda=\dfrac{v}{\nu}$. For light it is measured in nanometres: $1\,\mathrm{nm}=10^{-9}\,\mathrm m$, a billionth of a metre.

When light crosses a stationary surface separating two media, the frequency $\nu$ stays the same. The reason is that the arriving wave and the continuing wave oscillate together at the points of the surface, so they complete the same number of oscillations per second. The wavelength, on the other hand, changes. If it is $\lambda_0=\dfrac{c}{\nu}$ in vacuum (the subscript $0$ denotes vacuum), in the medium it is

$$
\lambda=\frac{v}{\nu}=\frac{c}{n\,\nu}=\frac{\lambda_0}{n}.
$$

Light of a single frequency, that is of a single colour, is called **monochromatic**. The index of a material may depend on frequency: for example, the same glass has one index for red light and another, slightly larger, for violet light. A material with this property is called **dispersive**. For this reason a stated index applies to the light specified in the text. When an exercise gives no value for air, $n=1$ is used, because light in air is slower than in vacuum by only three parts in ten thousand.
:::

:::esempio{titolo="From speed to wavelength"}
In glass with $n=1.50$ and with $c=3.0\cdot10^8\,\mathrm{m/s}$,

$$
v=\frac{3.0\cdot10^8}{1.50}\,\mathrm{m/s}=2.0\cdot10^8\,\mathrm{m/s}.
$$

A vacuum wavelength of $600\,\mathrm{nm}$ becomes $\dfrac{600}{1.50}\,\mathrm{nm}=400\,\mathrm{nm}$. The wavelength ratio is the same as the speed ratio, because the number of oscillations per second is unchanged. The graph shows $\lambda=\dfrac{600}{n}$ in nanometres: for $n=1$ (vacuum) it reads $600$, for $n=1.5$ it reads $400$, for $n=2$ it reads $300$.

::grafico{f="600/x" punti="1,600,pieno;1.5,400,pieno;2,300,pieno" xmin=0.9 xmax=2.35 ymin=0 ymax=695 nomi="n,λ (nm)" titolo="For a given frequency, a higher refractive index gives a shorter wavelength."}
:::

:::esempio{#tempo-in-piu-mezzi titolo="Light through two successive materials"}
Consider the same light with a vacuum wavelength of $600\,\mathrm{nm}$. In each medium, the speed in vacuum is divided by $n$ to obtain the speed in the medium. As the frequency stays the same, the wavelength is divided by the same number. The two quantities therefore follow the same ordering, and in the medium where the speed is lower the wavelength is also shorter.

| Medium | Speed ($10^8\,\mathrm{m/s}$) | Wavelength (nm) |
| --- | --- | --- |
| Vacuum | $3.0$ | $600$ |
| A, $n=1.20$ | $2.5$ | $500$ |
| B, $n=1.50$ | $2.0$ | $400$ |

A **pulse** is a brief flash of light. A pulse travels through $30\,\mathrm{cm}$ of material A and then $30\,\mathrm{cm}$ of material B, entering at **normal incidence**, that is perpendicular to the surfaces. If the media are weakly dispersive, $\dfrac{c}{n}$ is also used as the speed of the pulse. The time for each segment is the length divided by the speed:

$$
t_A=\frac{0.30\,\mathrm m}{2.5\cdot10^8\,\mathrm{m/s}}=1.2\cdot10^{-9}\,\mathrm s=1.2\,\mathrm{ns},\qquad
t_B=\frac{0.30\,\mathrm m}{2.0\cdot10^8\,\mathrm{m/s}}=1.5\,\mathrm{ns}.
$$

A nanosecond ($\mathrm{ns}$) is a billionth of a second. The total time is therefore $1.2+1.5=2.7\,\mathrm{ns}$. In vacuum, the same total length of $0.60\,\mathrm m$ would take $\dfrac{0.60}{3.0\cdot10^8}\,\mathrm s=2.0\,\mathrm{ns}$. The delay of $0.7\,\mathrm{ns}$ is the sum of the delays on the two segments, $0.2\,\mathrm{ns}$ in A and $0.5\,\mathrm{ns}$ in B. Average speed is the total distance divided by the total time, that is $\dfrac{0.60\,\mathrm m}{2.7\cdot10^{-9}\,\mathrm s}\simeq2.2\cdot10^8\,\mathrm{m/s}$. The result differs from the mean of the two speeds, because light spends more time in the slower segment.

::grafico{linee="0,0 30,1.2 60,2.7" segmenti="0,0,60,2" punti="30,1.2,pieno,A;60,2.7,pieno,B" xmin=0 xmax=65 ymin=0 ymax=3.6 nomi="distance (cm),time (ns)" titolo="The segment in medium B is steeper. The dashed line gives the time over the same distance in vacuum."}
:::

## Snell’s law

:::teorema{#snell titolo="Angles of refraction"}
**Refraction** is the change in direction of a ray of light when it passes from one medium to another. A medium is **uniform** if it has the same properties at every point. The surface separating two media is called the **interface**. The **normal** is the line perpendicular to the interface at the point where the ray arrives.

Angles are measured from the normal. Let $\theta_1$ (Greek letter *theta*) be the angle between the arriving ray, called the incident ray, and the normal in the first medium, and $\theta_2$ the angle between the continuing ray, called the refracted or transmitted ray, and the normal in the second medium. If a transmitted ray propagates in the second medium, **Snell’s law** holds:

$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$

To find $\theta_2$, both sides are divided by $n_2$, so $\sin\theta_2=\dfrac{n_1}{n_2}\sin\theta_1$. Then one looks for the angle between $0^\circ$ and $90^\circ$ with that sine. This angle is called the **inverse sine** (arcsine) of the number, and on a calculator set to degrees it is obtained with the $\sin^{-1}$ key.

Between $0^\circ$ and $90^\circ$ the sine increases with the angle. If $n_2>n_1$, the fraction $\dfrac{n_1}{n_2}$ is less than one, so $\sin\theta_2<\sin\theta_1$ and $\theta_2<\theta_1$, which means the ray bends towards the normal. At normal incidence, that is $\theta_1=0^\circ$, $\sin\theta_2=0$ and $\theta_2=0^\circ$. The ray therefore continues along the normal even though speed and wavelength change.
:::

:::esempio{titolo="From air to glass"}
For $n_1=1.00$, $n_2=1.50$ and $\theta_1=30^\circ$, $\sin30^\circ=0.50$, so

$$
\sin\theta_2=\frac{1.00}{1.50}\cdot0.50=\frac{1}{3}.
$$

The inverse sine of $\dfrac{1}{3}$ is about $19.5^\circ$. The angle is below $30^\circ$ as expected, because glass has a higher index than air. The ray is deviated by $30^\circ-19.5^\circ=10.5^\circ$ from the direction in which it arrived. If the two media were swapped and the ray reversed, the same equality read from right to left would give $30^\circ$ again, so the original ray would be recovered. In the figure the horizontal line is the interface, the vertical line is the normal, air ($n_1$) is above and glass ($n_2$) below.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-1.4,2.424871,0,0;0,0,0.933333,-2.639865" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="The ray in air makes 30° with the normal. In glass it makes about 19.5°."}
:::

:::esempio{#angolo-dalla-superficie titolo="Which angle goes into Snell’s law"}
A **protractor** is the instrument that measures angles. On an optical bench a protractor may be laid along the surface. Its reading is then the angle $\varphi$ (Greek letter *phi*) between the ray and the surface. Since the normal is perpendicular to the surface, the two angles together make $90^\circ$, so $\theta_1=90^\circ-\varphi$ is calculated before applying Snell’s law. If $\varphi=30^\circ$, the angle to use in the law is $60^\circ$.

Air is taken to have $n_1=1.00$ and glass $n_2=1.50$. Since $\sin60^\circ=\dfrac{\sqrt3}{2}$, the law gives

$$
\sin\theta_2=\frac{1.00}{1.50}\cdot\frac{\sqrt3}{2}=\frac{\sqrt3}{3}\simeq0.577,
$$

so $\theta_2\simeq35.3^\circ$.

Mistakenly using the $30^\circ$ read on the protractor would give about $19.5^\circ$. Both results are smaller than the angle put into the law, so the check “going into glass the ray bends towards the normal” does not reveal the error. The error is avoided by establishing, before the calculation, whether the angle read is measured from the surface or from the normal. In the figure the $60^\circ$ arc is measured from the normal and the $30^\circ$ arc from the surface.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-3.05,0,3.05" curve="0.85*cos(t),0.85*sin(t),1.5707963,2.6179939;1.25*cos(t),1.25*sin(t),2.6179939,3.1415927" vettori="-2.424871,1.4,0,0;0,0,1.616581,-2.28619" etichette="-0.93,1.14,60°;-1.76,0.32,30°;1.86,-1.18,35.3°" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 titolo="Incidence is 60° from the normal and 30° from the surface. Refraction in glass is about 35.3° from the normal."}
:::

:::osservazione{#lastra titolo="Entering and leaving a slab"}
A **parallel-sided slab** is a transparent block, for example of glass, whose two faces are parallel. The two faces therefore have parallel normals, and the angle of the internal ray with the normal is the same at both faces. If the same medium is outside both faces, for example air with index $n$, and the slab has index $n_L$, Snell’s law written at the two faces gives

$$
n\sin\theta_1=n_L\sin\theta_2,\qquad n_L\sin\theta_2=n\sin\theta_3.
$$

So $n\sin\theta_1=n\sin\theta_3$, that is, the exit angle $\theta_3$ equals the entry angle $\theta_1$. The emerging ray is parallel to the incident ray. It can, however, be shifted sideways, because inside the slab it followed a different direction.
:::

:::esempio{#scarto-lastra titolo="Lateral displacement through a slab"}
A slab of thickness $e$ is surrounded by air. The ray enters at angle $\theta_1$ to the normal and inside the slab makes the angle $\theta_2$ with the normal. The internal segment, of length $L$, is the hypotenuse of a right triangle whose side adjacent to the angle $\theta_2$ is the thickness $e$, so $e=L\cos\theta_2$ and

$$
L=\frac{e}{\cos\theta_2}.
$$

At the second face the ray leaves at its initial angle, because it returns from the slab’s index to that of air. The **displacement** is the perpendicular distance between the emerging ray and the extension of the initial ray. The internal segment makes the angle $\theta_1-\theta_2$ with the original direction, and the displacement is the side opposite this angle in the right triangle with hypotenuse $L$. Therefore, when $\theta_1>\theta_2$, the displacement is $L\sin(\theta_1-\theta_2)$.

For $e=4.0\,\mathrm{cm}$, slab index $\sqrt2$ and $\theta_1=45^\circ$, Snell’s law gives $\sin\theta_2=\dfrac{\sin45^\circ}{\sqrt2}=\dfrac{1}{2}$, so $\theta_2=30^\circ$. The displacement is then

$$
\frac{4.0\cdot\sin(45^\circ-30^\circ)}{\cos30^\circ}\,\mathrm{cm}=\frac{4.0\cdot\sin15^\circ}{\cos30^\circ}\,\mathrm{cm}\simeq\frac{4.0\cdot0.259}{0.866}\,\mathrm{cm}\simeq1.2\,\mathrm{cm}.
$$

Doubling the thickness doubles the displacement, while the exit angle stays the same. At normal incidence the angle difference is zero, so the displacement is zero and the two lines coincide.

::grafico{assi=0 uguale=1 linee="-3.6,0 7,0;-3.6,-4 7,-4" segmenti="0,0,0,2.4;2.309401,-6.4,2.309401,-2.5;0,0,5.9,-5.9;2.309401,-4,3.154701,-3.154701" vettori="-2.3,2.3,0,0;0,0,2.309401,-4;2.309401,-4,4.509401,-6.2" etichette="4.1,-2.8,slab;2.65,-3.35,shift" xmin=-4 xmax=7.4 ymin=-7 ymax=2.8 titolo="The directions before and after the slab are parallel. The displacement is measured perpendicular to the dashed line."}
:::

## Total internal reflection

:::teorema{#totale titolo="The critical angle"}
When a ray arrives at an interface, part of the light is always **reflected**, that is, sent back into the first medium. The reflected ray makes the same angle with the normal as the incident ray, on the other side of the normal. **Total internal reflection** occurs when there is no transmitted ray and all the light is reflected.

Total internal reflection can occur only when the ray starts in the medium with the higher index, that is $n_1>n_2$. In this case $\dfrac{n_1}{n_2}>1$, so $\sin\theta_2>\sin\theta_1$ and the transmitted ray bends away from the normal. The **critical angle** $\theta_c$ is the value of $\theta_1$ for which Snell’s law gives $\theta_2=90^\circ$. Substituting $\sin90^\circ=1$ gives $n_1\sin\theta_c=n_2$, so

$$
\theta_c=\arcsin\frac{n_2}{n_1}.
$$

For $\theta_1<\theta_c$ a transmitted ray exists in the second medium. At the limit, $\theta_1=\theta_c$, the transmitted ray is **grazing**, that is, parallel to the surface. For $\theta_1>\theta_c$ the law would require a sine greater than one. Since the sine of an angle never exceeds one, there is no transmitted ray propagating in the second medium. At an ideal interface, which absorbs no light, all the light is then reflected back into the first medium.
:::

:::esempio{titolo="Above the critical angle"}
From glass of index $1.50$ to air of index $1.00$,

$$
\theta_c=\arcsin\frac{1.00}{1.50}=\arcsin\frac{2}{3}\simeq41.8^\circ.
$$

A ray arriving from the glass at an incidence of $55^\circ$ exceeds the critical angle, so it is totally reflected. The reflected ray also makes $55^\circ$ with the normal, inside the glass. If the light went from air to glass instead, there would be no total internal reflection, because the starting index is the smaller one. In the figure the glass ($n_1$) is above, the air ($n_2$) below, and the reflected ray goes back upwards.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-2.293626,1.606014,0,0;0,0,2.293626,1.606014" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="From glass to air at incidence 55°, the reflected ray remains within the glass."}
:::

:::osservazione{#soglia-snell titolo="Check that a refracted ray can exist"}
For glass to air, the value $\dfrac{n_1}{n_2}\sin\theta_1$ required for $\sin\theta_2$ is calculated before taking the inverse sine. With a glass index of $1.50$:

- at an incidence of $30^\circ$ one obtains $1.50\cdot0.50=0.75$, less than one, so a ray emerges;
- at an incidence of $60^\circ$ one obtains $1.50\cdot0.866\simeq1.30$, greater than one, which is the maximum value of a sine. There is therefore no transmitted angle.

The point where the value reaches one separates the two cases. If air is replaced with water of index $1.33$, the formula divides by $1.33$ instead of $1$. The critical angle becomes

$$
\theta_c=\arcsin\frac{1.33}{1.50}\simeq62.5^\circ.
$$

Therefore the same $60^\circ$ incidence, which gives total internal reflection into air, lets a ray pass into water. The graph shows the angle of incidence horizontally and the value $1.50\sin\theta_1$ vertically; point C, at $41.8^\circ$, is where the curve meets the line of value $1$.

::grafico{f="1.5*sin(x*pi/180);1" punti="30,0.75,pieno;41.810315,1,pieno,C;60,1.299038,pieno" xmin=0 xmax=85 ymin=0 ymax=1.65 nomi="incidence (°),required sine" legenda="1.50\sin\theta_1;1" titolo="The threshold C lies at 41.8°. To the right of C, the required value exceeds one."}
:::

## Converging and diverging lenses

:::definizione{#lenti titolo="Thin-lens focal points"}
A **lens** is a piece of transparent glass or plastic with curved faces that deviates rays of light. The **optical axis** is the line perpendicular to the lens through its centre, called the **optical centre**. A **thin lens** is a lens whose thickness is negligible, that is, very small compared with the distances of the object, the image and the focal points; in drawings it is shown as a line segment.

**Paraxial** rays are rays close to the axis and only slightly inclined to it. For these rays three rules hold:

- the ray through the optical centre continues without being deviated;
- for a **converging** lens, a ray arriving parallel to the axis passes, after the lens, through the **focal point** (focus) on the output side, a point on the axis;
- for a **diverging** lens, a ray arriving parallel to the axis moves away from the axis after the lens; extended backwards, it appears to come from the focal point on the object side.

The **focal length** $f$ is the distance of the focal point from the centre of the lens. The sign $f>0$ is used for a converging lens and $f<0$ for a diverging lens. The plane perpendicular to the axis through a focal point is called the **focal plane**. The construction assumes the same medium, usually air, on both sides of the lens. For very thick lenses or for rays far from the axis, these rules do not describe the path of light well.
:::

:::osservazione{#controllo-raggi titolo="Checking the construction with a third ray"}
Two non-parallel lines meet at one point. To find the image of an object point off the axis, two rays in different directions are therefore enough. For a converging lens, the ray through the centre and the ray arriving parallel to the axis are usually drawn. A third ray serves as a check: a ray passing through the focal point on the object side leaves the lens parallel to the axis. This rule follows by reversing the path of a parallel ray that the lens sends to the focal point.

After finding where the first two rays meet, one checks that the third ray, or its extension, also passes through the same point. An image is **real** when the rays leaving the lens actually meet; an image is **virtual** when only the **extensions** of the outgoing rays meet, that is, their lines continued backwards towards the object side. In the drawing, extensions are dashed. The dashes distinguish the lines used to find the image from the paths actually taken by light.
:::

## Thin lens equation

::::teorema{#equazione titolo="Image position and size"}
Let $p$ be the distance of the object from the lens and $q$ the distance of the image from the lens, with these sign rules:

- a real object, placed before the lens, has $p>0$;
- a real image, after the lens on the output side, has $q>0$;
- a virtual image, where only the extensions towards the object side meet, has $q<0$.

Let $h_o$ be the height of the object and $h_i$ the height of the image, positive if the image is above the axis and negative if it is below. For paraxial rays,

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=\frac{h_i}{h_o}=-\frac qp.
$$

The second formula follows from the first: $\dfrac1q=\dfrac1f-\dfrac1p=\dfrac{p-f}{fp}$, and one takes the reciprocal.

The **transverse magnification** $M$ is the ratio of the heights. It is negative for an **inverted** image and positive for an **upright** image. Its **magnitude**, that is the value without sign, tells how many times taller or shorter the image is than the object. When $p=f>0$, the denominator $p-f$ is zero. In this case rays starting from the same object point leave parallel to one another, so there is no image at a finite distance.

:::dimostrazione
The lens is placed at $x=0$ on the $x$-axis, which coincides with the optical axis, and the object of height $h_o$ at $x=-p$. The top of the object is the point $(-p,\,h_o)$.

1. The ray through the centre goes from the top of the object to the origin without deviating. Its line passes through $(0,\,0)$ and $(-p,\,h_o)$, so it is $y=-\dfrac{h_o}{p}\,x$.
2. The ray arriving parallel to the axis meets the lens at height $h_o$ and then passes through the focal point $(f,\,0)$. Its line after the lens is $y=h_o\left(1-\dfrac{x}{f}\right)$, which is $h_o$ at $x=0$ and $0$ at $x=f$.
3. The image of the top is the point where the two lines meet, at $x=q$. Equating the two heights and dividing by $h_o$ gives
$$
-\frac{q}{p}=1-\frac{q}{f}.
$$
4. Dividing both sides by $q$ gives $-\dfrac{1}{p}=\dfrac{1}{q}-\dfrac{1}{f}$, that is $\dfrac1f=\dfrac1p+\dfrac1q$.
5. The height of the image is the height of the first ray at $x=q$, that is $h_i=-\dfrac{h_o}{p}\,q$. Dividing by $h_o$ gives $M=\dfrac{h_i}{h_o}=-\dfrac{q}{p}$.

For a virtual image the extensions of the same lines are used and the calculation is identical.
:::
::::

:::esempio{titolo="When a screen works"}
A **screen** is a white sheet on which the image is collected. With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$,

$$
q=\frac{10\cdot30}{30-10}\,\mathrm{cm}=15\,\mathrm{cm},\qquad M=-\frac{15}{30}=-0.50.
$$

Since $q$ is positive, the lens produces a real image on the opposite side from the object. Since $M$ is negative with magnitude $0.50$, the image is inverted and half as tall as the object. Changing only the lens, to one with $f=-10\,\mathrm{cm}$, gives

$$
q=\frac{(-10)\cdot30}{30-(-10)}\,\mathrm{cm}=-7.5\,\mathrm{cm},\qquad M=-\frac{-7.5}{30}=0.25.
$$

A screen placed at that point does not collect the image, because only the extensions of the rays meet there. In the figure O is the top of the object, F and F′ are the focal points and I is the real image produced by the converging lens.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-5.2 0,5.2" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,-2;0,0,15,-2;15,0,15,-2" punti="10,0,pieno,F;-10,0,pieno,F′;15,-2,pieno,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-5.72 ymax=5.72 titolo="The converging lens produces real image I 15 cm from its centre."}
:::

:::osservazione{#regimi titolo="Reading sign and magnitude"}
For a converging lens with a real object there are these cases:

- $p>2f$: real, inverted and reduced image;
- $p=2f$: real, inverted image of the same height in magnitude ($q=2f$, $M=-1$);
- $f<p<2f$: real, inverted and enlarged image;
- $0<p<f$: virtual, upright and enlarged image.

For a diverging lens with a real object, always $q<0$ and $0<M<1$, so the image is virtual, upright and reduced. The reason is that with $f<0$ one has $q=\dfrac{fp}{p-f}=-\dfrac{|f|\,p}{p+|f|}$, where $|f|$ is the magnitude of $f$; this fraction is negative and, since $|f|<p+|f|$, its magnitude is less than $p$. Therefore $M=-\dfrac{q}{p}$ is positive and less than $1$. In the figure, for the diverging lens, the dashed extensions cross at I, on the same side as O.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-13 0,13" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,10;0,0,15,-2" segmenti="0,4,-7.5,1;0,0,-7.5,1;-7.5,0,-7.5,1" punti="-10,0,pieno,F;10,0,pieno,F′;-7.5,1,vuoto,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-14.3 ymax=14.3 titolo="With a diverging lens, I is on the same side as O where backward extensions intersect."}
:::

:::esempio{#ingrandimento-virtuale titolo="Using a converging lens as a magnifier"}
A converging lens with focal length $12\,\mathrm{cm}$ is used to view a real object placed $6\,\mathrm{cm}$ away. The denominator $p-f=6-12=-6\,\mathrm{cm}$ is negative, so

$$
q=\frac{12\cdot6}{-6}\,\mathrm{cm}=-12\,\mathrm{cm}.
$$

The minus sign indicates that the image is on the object side. Since $M=-\dfrac{-12}{6}=+2$, the image is upright and twice as tall as the object. The rays leaving the lens move apart and their extensions meet at the point of the virtual image. This is how a magnifying glass works.

Upright images of a real object are therefore of two kinds. For a converging lens with the object closer than the focal point, the virtual image has a magnification of magnitude greater than one. For a diverging lens, instead, the virtual image is smaller than the object. The sign of $q$ determines on which side of the lens the image is drawn. To tell whether it is reduced or enlarged, the magnitude of $M$ is also needed.

::grafico{assi=0 uguale=1 linee="-16,0 19,0;0,-7 0,7" vettori="-6,0,-6,2;-6,2,0,2;-6,2,0,0;0,2,18,-1;0,0,18,-6" segmenti="0,2,-12,4;0,0,-12,4;-12,0,-12,4" punti="-12,0,pieno,F′;12,0,pieno,F;-12,4,vuoto,I;-6,2,pieno,O" xmin=-17.5 xmax=20 ymin=-7.5 ymax=7.5 titolo="The object is inside the focus. Backward extensions on the left meet at virtual image I."}
:::

:::osservazione{#grafico-distanza-immagine titolo="Reading how the image plane moves"}
For a converging lens with focal length $10\,\mathrm{cm}$, $q=\dfrac{10\,p}{p-10}$, with $p$ and $q$ in centimetres. The graph of $q$ against $p$ has two branches, separated by the vertical line $p=10\,\mathrm{cm}$, where the denominator is zero.

| $p$ (cm) | $5$ | $11$ | $12$ | $15$ |
| --- | --- | --- | --- | --- |
| $q$ (cm) | $-10$ | $110$ | $60$ | $30$ |

With the object at $5\,\mathrm{cm}$, $q=\dfrac{50}{-5}\,\mathrm{cm}=-10\,\mathrm{cm}$, a virtual image. With the object at $15\,\mathrm{cm}$, $q=\dfrac{150}{5}\,\mathrm{cm}=30\,\mathrm{cm}$ and the image can be collected on a screen. Moving the object towards the focal point from outside requires moving the screen away: with $p=12\,\mathrm{cm}$, $q=60\,\mathrm{cm}$ is needed, and with $p=11\,\mathrm{cm}$, $q=110\,\mathrm{cm}$ is needed. Close to the focal point, therefore, moving the object by one centimetre can require moving the screen by tens of centimetres to get a sharp image again.

When $p$ becomes very large, $\dfrac1p$ becomes almost zero, so $\dfrac1q$ approaches $\dfrac1f$ and $q$ approaches $f$ on the output side. At $p=f$, on the other hand, the graph has no finite value. The left branch has $q<0$ and represents virtual images, so its negative values are not positions where a screen can collect an image.

::grafico{f="10*x/(x-10)" asintoti="x=10;y=10" punti="5,-10,pieno;15,30,pieno;20,20,pieno;30,15,pieno" xmin=0 xmax=36 ymin=-34 ymax=41 nomi="p (cm),q (cm)" titolo="The vertical line at p = 10 cm separates the branches. The horizontal line gives the limit q = 10 cm for distant objects."}
:::

## Optical power and applications

:::definizione{#diottrie titolo="The reciprocal of the focal length"}
The **optical power** $D$ of a thin lens is the reciprocal of the focal length, taken with its sign and expressed in metres. It is measured in **dioptres**: one dioptre equals $1\,\mathrm{m^{-1}}$, read “metre to the minus one” and meaning $\dfrac{1}{\mathrm m}$. A focal length given in centimetres is converted to metres before calculating $D$.

$$
D=\frac{1}{f}.
$$

A converging lens with $f=25\,\mathrm{cm}=0.25\,\mathrm m$ has $D=\dfrac{1}{0.25\,\mathrm m}=+4\,\mathrm{m^{-1}}$. A diverging lens with $f=-0.50\,\mathrm m$ has $D=\dfrac{1}{-0.50\,\mathrm m}=-2\,\mathrm{m^{-1}}$. The shorter the focal length, the greater the power in magnitude, so the lens deviates rays more strongly. $D$ has the same sign as $f$: positive for converging lenses, negative for diverging ones.

For thin lenses **in contact** (resting against each other) in air, to a good approximation the powers add with their signs: $D=D_1+D_2$. For lenses separated by a non-negligible distance, a calculation that takes that distance into account is needed instead.
:::

:::esempio{#banco-ottico titolo="From focal length to position on the bench"}
An **optical bench** is a rail with a ruler on which the object, lens and screen are mounted. On this bench light travels from left to right. The object is at the $20\,\mathrm{cm}$ mark and the lens at the $50\,\mathrm{cm}$ mark, so the object distance to use in the law is $p=(50-20)\,\mathrm{cm}=30\,\mathrm{cm}$. The lens is made of two thin lenses in contact with powers of $+8$ and $-3\,\mathrm{m^{-1}}$. The net power is $(8-3)\,\mathrm{m^{-1}}=+5\,\mathrm{m^{-1}}$, so the equivalent focal length is $\dfrac{1}{5}\,\mathrm m=0.20\,\mathrm m=20\,\mathrm{cm}$.

Calculating with $f=20\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$ gives

$$
q=\frac{20\cdot30}{30-20}\,\mathrm{cm}=60\,\mathrm{cm}.
$$

The distance $q$ is measured from the lens towards the output side, so the screen goes to the $(50+60)\,\mathrm{cm}=110\,\mathrm{cm}$ mark. If the bench ends at $100\,\mathrm{cm}$, with this setup the sharp image falls off the bench. To bring it back onto the bench, the object position or the focal length is changed.
:::

:::osservazione{#due-posizioni-lente titolo="Two sharp positions with fixed object and screen"}
The object and screen are fixed a distance $L$ apart and the converging lens moves between them. Since the lens is between the two, $p+q=L$. Writing the sum of reciprocals over a common denominator, the lens equation becomes

$$
\frac{1}{f}=\frac{1}{p}+\frac{1}{q}=\frac{p+q}{pq}=\frac{L}{pq},
$$

so $pq=fL$. The two conditions $p+q=L$ and $pq=fL$ do not change if $p$ and $q$ are swapped. Therefore, if a pair $(p,\,q)$ is a solution, the swapped pair $(q,\,p)$ is too, and the lens has two positions giving a sharp image.

With a lens of focal length $10\,\mathrm{cm}$ and an object-to-screen distance of $45\,\mathrm{cm}$, two numbers are needed with sum $45$ and product $10\cdot45=450$: they are $15$ and $30$, because $15+30=45$ and $15\cdot30=450$.

- Lens $15\,\mathrm{cm}$ from the object: $p=15\,\mathrm{cm}$, $q=30\,\mathrm{cm}$, $M=-\dfrac{30}{15}=-2$. The image is inverted and twice as tall as the object.
- Lens $30\,\mathrm{cm}$ from the object: $p=30\,\mathrm{cm}$, $q=15\,\mathrm{cm}$, $M=-\dfrac{15}{30}=-0.5$. The image is inverted and half as tall as the object.

Among all pairs of positive distances with sum $L$, the largest product occurs when the two distances are equal, and it is $\dfrac{L}{2}\cdot\dfrac{L}{2}=\dfrac{L^2}{4}$. For example, with sum $45$, $20\cdot25=500$ and $22.5\cdot22.5=506.25$. The product $pq=fL$ therefore cannot exceed $\dfrac{L^2}{4}$, that is $fL\leq\dfrac{L^2}{4}$. Dividing by $\dfrac{L}{4}$ shows that $L\geq4f$ is required for at least one sharp position. When $L=4f$ there is a single position, halfway between object and screen, with $p=q=2f$.
:::
