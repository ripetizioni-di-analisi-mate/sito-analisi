---
titolo: "Refraction and lenses"
sommario: "Refractive index, Snell’s law, total internal reflection, thin-lens images and optical power."
---

## Refractive index

:::definizione{#indice titolo="The speed of light in a material"}
For a transparent material at a fixed frequency, its **refractive index** $n$ is the ratio of vacuum light speed $c$ to phase speed in the material $v$. The index is dimensionless. The ordinary transparent materials treated here have $n>1$, so light travels slower in them than in vacuum.

$$
n=\frac{c}{v},\qquad v=\frac{c}{n}.
$$

At a stationary boundary, frequency $\nu$ stays the same because the incident and transmitted waves have the same time dependence at the interface. Wavelength changes. If it is $\lambda_0=\dfrac{c}{\nu}$ in vacuum, it becomes $\lambda=\dfrac{v}{\nu}=\dfrac{\lambda_0}{n}$ in the material. The index $n$ may depend on frequency, so use a stated index for the specified light. When an exercise gives no value for air, take $n=1$ in this approximation.
:::

:::esempio{titolo="From speed to wavelength"}
In glass of $n=1.50$, with $c=3.0\cdot10^8\,\mathrm{m/s}$, the speed is $v=2.0\cdot10^8\,\mathrm{m/s}$. A vacuum wavelength of $600\,\mathrm{nm}$ becomes $400\,\mathrm{nm}$. The wavelength ratio is the same as the speed ratio because the number of oscillations per second is unchanged.

::grafico{f="600/x" punti="1,600,pieno;1.5,400,pieno;2,300,pieno" xmin=0.9 xmax=2.35 ymin=0 ymax=695 nomi="n,λ (nm)" titolo="For a given frequency, a higher refractive index gives a shorter wavelength."}
:::

:::esempio{#tempo-in-piu-mezzi titolo="Light through two successive materials"}
Consider the same radiation with a vacuum wavelength of $600\,\mathrm{nm}$. In each medium, divide the speed in vacuum by $n$ to obtain the phase speed. As the frequency stays fixed, divide the wavelength by the same factor. The two quantities therefore follow the same ordering.

| Medium | Speed ($10^8\,\mathrm{m/s}$) | Wavelength (nm) |
| --- | --- | --- |
| Vacuum | $3.0$ | $600$ |
| A, $n=1.20$ | $2.5$ | $500$ |
| B, $n=1.50$ | $2.0$ | $400$ |

A pulse travels at normal incidence through $30\,\mathrm{cm}$ of material A and $30\,\mathrm{cm}$ of material B. If the media are weakly dispersive, $\dfrac{c}{n}$ also estimates the pulse speed. The first segment takes $1.2\,\mathrm{ns}$ and the second takes $1.5\,\mathrm{ns}$, so the total time is $2.7\,\mathrm{ns}$. In vacuum the same total length would take $2.0\,\mathrm{ns}$. The delay of $0.7\,\mathrm{ns}$ comes from adding the delays on each segment. Average speed is the total distance divided by the total time.

::grafico{linee="0,0 30,1.2 60,2.7" segmenti="0,0,60,2" punti="30,1.2,pieno,A;60,2.7,pieno,B" xmin=0 xmax=65 ymin=0 ymax=3.6 nomi="distance (cm),time (ns)" titolo="The segment in medium B is steeper. The dashed line gives the time over the same distance in vacuum."}
:::

## Snell’s law

:::teorema{#snell titolo="Angles of refraction"}
Between two uniform media, a ray can change direction. The normal is perpendicular to the interface. Let $\theta_1$ be the incident angle from the normal in the first medium, and $\theta_2$ the transmitted angle from the normal in the second. If a transmitted ray propagates in the second medium, then

$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$

Isolate $\sin\theta_2$ and find the angle between $0^\circ$ and $90^\circ$ with that sine. If $n_2>n_1$, the angle decreases and the ray bends towards the normal. At normal incidence with both media transparent, the direction remains along the normal even though speed and wavelength change.
:::

:::esempio{titolo="From air to glass"}
For $n_1=1.00$, $n_2=1.50$ and $\theta_1=30^\circ$, the refracted sine is $\dfrac{1.00}{1.50}\cdot0.50=\dfrac{1}{3}$. Its inverse sine is about $19.5^\circ$. The angle is below $30^\circ$ as expected. Swapping the media and reversing the ray path recovers the original ray.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-1.4,2.424871,0,0;0,0,0.933333,-2.639865" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="The ray in air makes 30° with the normal. In glass it makes about 19.5°."}
:::

:::esempio{#angolo-dalla-superficie titolo="Which angle goes into Snell’s law"}
On an optical bench a protractor may be laid along the surface. Its reading is then the angle $\varphi$ from the surface. The normal is perpendicular, so calculate $\theta_1=90^\circ-\varphi$ before applying Snell’s law. If $\varphi=30^\circ$, the angle used in the law is $60^\circ$.

Take air to have $n_1=1.00$ and glass to have $n_2=1.50$. Since $\sin60^\circ=\dfrac{\sqrt3}{2}$, the law gives $\sin\theta_2=\dfrac{\sqrt3}{3}$ and $\theta_2\simeq35.3^\circ$. Mistakenly using the protractor’s $30^\circ$ would give about $19.5^\circ$. Both results are smaller than the input angle, so simply checking the direction of bending does not catch the error. Identify the reference line before reading the value.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-3.05,0,3.05" curve="0.85*cos(t),0.85*sin(t),1.5707963,2.6179939;1.25*cos(t),1.25*sin(t),2.6179939,3.1415927" vettori="-2.424871,1.4,0,0;0,0,1.616581,-2.28619" etichette="-0.93,1.14,60°;-1.76,0.32,30°;1.86,-1.18,35.3°" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 titolo="Incidence is 60° from the normal and 30° from the surface. Refraction in glass is about 35.3° from the normal."}
:::

:::osservazione{#lastra titolo="Entering and leaving a slab"}
When the two faces of a slab are parallel, their normals are parallel. If the same material is outside both faces, applying Snell’s law at the first and second surfaces gives the same sine as at entry. The emerging ray is parallel to the incident ray and can be shifted because it followed a different direction within the slab.
:::

:::esempio{#scarto-lastra titolo="Lateral displacement through a slab"}
A slab of thickness $e$ is surrounded by air. The ray enters at angle $\theta_1$ to the normal and travels a distance $L=\dfrac{e}{\cos\theta_2}$ inside the slab. At the second face it leaves at its initial angle, since it returns from the slab’s index to that of air. The perpendicular distance from the outgoing ray to the extended incident line is $L\sin(\theta_1-\theta_2)$ when $\theta_1>\theta_2$. The sine appears because the internal segment makes an angle $\theta_1-\theta_2$ with the original direction.

For $e=4.0\,\mathrm{cm}$, slab index $\sqrt2$ and $\theta_1=45^\circ$, Snell’s law gives $\theta_2=30^\circ$. The distance is then $\dfrac{4.0\sin15^\circ}{\cos30^\circ}\,\mathrm{cm}\simeq1.2\,\mathrm{cm}$. Doubling the thickness doubles this displacement, while the emerging angle stays the same. At normal incidence the angle difference is zero and the two lines coincide.

::grafico{assi=0 uguale=1 linee="-3.6,0 7,0;-3.6,-4 7,-4" segmenti="0,0,0,2.4;2.309401,-6.4,2.309401,-2.5;0,0,5.9,-5.9;2.309401,-4,3.154701,-3.154701" vettori="-2.3,2.3,0,0;0,0,2.309401,-4;2.309401,-4,4.509401,-6.2" etichette="4.1,-2.8,slab;2.65,-3.35,shift" xmin=-4 xmax=7.4 ymin=-7 ymax=2.8 titolo="The directions before and after the slab are parallel. The displacement is measured perpendicular to the dashed line."}
:::

## Total internal reflection

:::teorema{#totale titolo="The critical angle"}
Total internal reflection can occur when the ray starts in the higher-index medium, so $n_1>n_2$. The **critical angle** $\theta_c$ is the value of $\theta_1$ for which Snell’s law gives $\theta_2=90^\circ$.

$$
\theta_c=\arcsin\frac{n_2}{n_1}.
$$

For $\theta_1<\theta_c$ a transmitted ray propagates in the second medium. At the limit it is parallel to the surface. For $\theta_1>\theta_c$ the sine required by Snell’s law would exceed one, so there is no propagating transmitted ray. At an ideal nonabsorbing interface, light is reflected back into the first medium.
:::

:::esempio{titolo="Above the critical angle"}
From glass of index $1.50$ to air of index $1.00$, $\theta_c=\arcsin(\dfrac{2}{3})\simeq41.8^\circ$. Incidence from glass at $55^\circ$ exceeds the critical value. The reflected ray is also $55^\circ$ from the normal inside the glass. If light entered from air to glass instead, total internal reflection would be absent in this model.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-2.293626,1.606014,0,0;0,0,2.293626,1.606014" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="From glass to air at incidence 55°, the reflected ray remains within the glass."}
:::

:::osservazione{#soglia-snell titolo="Check that a refracted ray can exist"}
For glass to air, find the value required for $\sin\theta_2$ before taking an arcsine. With a glass index of $1.50$, an incidence of $30^\circ$ gives $1.50\cdot0.50=0.75$, so a ray can emerge. At $60^\circ$ the result is about $1.30$. This exceeds the maximum value of a sine and corresponds to no transmitted angle.

The point where the value reaches one separates the two regimes. Replacing air with water of index $1.33$ means dividing by that index. The critical angle becomes about $62.5^\circ$. The same $60^\circ$ incidence that gives total internal reflection into air now allows a ray to propagate into the water.

::grafico{f="1.5*sin(x*pi/180);1" punti="30,0.75,pieno;41.810315,1,pieno,C;60,1.299038,pieno" xmin=0 xmax=85 ymin=0 ymax=1.65 nomi="incidence (°),required sine" legenda="1.50\sin\theta_1;1" titolo="The threshold C lies at 41.8°. To the right of C, the required value exceeds one."}
:::

## Converging and diverging lenses

:::definizione{#lenti titolo="Thin-lens focal points"}
A **thin lens** is modelled as an element whose thickness is negligible relative to focal and working distances. For paraxial rays near the axis, a ray crossing the optical centre is treated as undeviated. An incoming parallel ray passes through the output-side focus after a converging lens. After a diverging lens, its backward extension appears to come from the focus on the object side.

Use $f>0$ for a converging lens and $f<0$ for a diverging lens. The construction assumes the same surrounding medium on both sides. For thick lenses or far-off-axis rays, this representation is insufficient.
:::

:::osservazione{#controllo-raggi titolo="Checking the construction with a third ray"}
Two rays in different directions are enough to find the image of a point off the axis. For a converging lens, the central ray and the ray incident parallel to the axis are usually drawn. A third ray can check the construction. A ray directed through the focus on the object side emerges parallel to the axis. This rule follows by reversing the path of a parallel ray brought to a focus by the lens.

After finding the intersection of the first two, check that the third ray or its extension also passes through the same point. For a real image the outgoing rays intersect. For a virtual image the lines extended towards the object side intersect. In the drawing, use dashed lines for the extensions. They distinguish the lines used to locate the image from the actual paths taken by light.
:::

## Thin lens equation

::::teorema{#equazione titolo="Image position and size"}
In this convention a real object before the lens has $p>0$. A real image after the lens has $q>0$. If only backward extensions meet on the object side then $q<0$ and the image is virtual. In the paraxial model,

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=\frac{h_i}{h_o}=-\frac qp.
$$

Transverse magnification $M$ is negative for an inverted image and positive for an upright image. Its magnitude is the ratio of heights. When $p=f>0$, rays starting from the same object point emerge parallel to one another. There is no finite image position.

:::dimostrazione
Put the lens at $x=0$ and an object of height $h_o$ at $x=-p$. The central ray lies on $y=-\dfrac{h_ox}{p}$. The ray arriving parallel to the axis meets the lens at height $h_o$ and follows $y=h_o(1-\dfrac{x}{f})$ after the lens. Equating their values at $x=q$ gives $-\dfrac{q}{p}=1-\dfrac{q}{f}$. A virtual image uses backward extensions of the same lines.
:::
::::

:::esempio{titolo="When a screen works"}
With $f=10\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$, $q=15\,\mathrm{cm}$ is positive and $M=-0.50$. The lens produces a real, reduced image on the opposite side from the object. Changing only to a lens with $f=-10\,\mathrm{cm}$ gives $q=-7.5\,\mathrm{cm}$ and $M=0.25$. A screen cannot collect an image at that point because only backward extensions meet there.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-5.2 0,5.2" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,-2;0,0,15,-2;15,0,15,-2" punti="10,0,pieno,F;-10,0,pieno,F′;15,-2,pieno,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-5.72 ymax=5.72 titolo="The converging lens produces real image I 15 cm from its centre."}
:::

:::osservazione{#regimi titolo="Reading sign and magnitude"}
A converging lens with $p>f$ makes a real image. It is reduced for $p>2f$, equal in height magnitude at $p=2f$, and enlarged when $f<p<2f$. For $0<p<f$, the same converging lens gives a virtual, upright and enlarged image. A diverging lens with a real object always gives $q<0$ and $0<M<1$.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-13 0,13" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,10;0,0,15,-2" segmenti="0,4,-7.5,1;0,0,-7.5,1;-7.5,0,-7.5,1" punti="-10,0,pieno,F;10,0,pieno,F′;-7.5,1,vuoto,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-14.3 ymax=14.3 titolo="With a diverging lens, I is on the same side as O where backward extensions intersect."}
:::

:::esempio{#ingrandimento-virtuale titolo="Using a converging lens as a magnifier"}
A converging lens with focal length $12\,\mathrm{cm}$ views a real object $6\,\mathrm{cm}$ away. The denominator $p-f$ is negative, so $q=-12\,\mathrm{cm}$. The sign places the image on the object side. Since $M=-\dfrac{-12}{6}=+2$, it is upright and twice the object’s height. The outgoing rays stay apart and their backward extensions meet at the virtual image.

The construction distinguishes two kinds of upright image. A converging lens with an object inside its focus gives a virtual image whose magnification magnitude exceeds one. A diverging lens with a real object instead gives a smaller virtual image. The sign of $q$ sets the side on which to draw the image. To tell whether it is reduced or magnified also requires the magnitude of $M$.

::grafico{assi=0 uguale=1 linee="-16,0 19,0;0,-7 0,7" vettori="-6,0,-6,2;-6,2,0,2;-6,2,0,0;0,2,18,-1;0,0,18,-6" segmenti="0,2,-12,4;0,0,-12,4;-12,0,-12,4" punti="-12,0,pieno,F′;12,0,pieno,F;-12,4,vuoto,I;-6,2,pieno,O" xmin=-17.5 xmax=20 ymin=-7.5 ymax=7.5 titolo="The object is inside the focus. Backward extensions on the left meet at virtual image I."}
:::

:::osservazione{#grafico-distanza-immagine titolo="Reading how the image plane moves"}
For a converging lens with focal length $10\,\mathrm{cm}$, the graph of $q$ against $p$ has two branches. With the object at $5\,\mathrm{cm}$, $q=-10\,\mathrm{cm}$. At $15\,\mathrm{cm}$, instead, $q=30\,\mathrm{cm}$ and a screen can catch the image. Moving the object towards the focus from outside requires moving the screen away. With $p=12\,\mathrm{cm}$, $q=60\,\mathrm{cm}$ is needed. With $p=11\,\mathrm{cm}$, $q=110\,\mathrm{cm}$ is needed. Close to the focus, moving the object a centimetre can therefore require tens of centimetres to refocus.

When $p$ becomes large, $q$ approaches $f$ on the output side. At $p=f$, on the other hand, the graph has no finite value. The left side represents virtual images, so negative distances give no locations at which a screen can catch them.

::grafico{f="10*x/(x-10)" asintoti="x=10;y=10" punti="5,-10,pieno;15,30,pieno;20,20,pieno;30,15,pieno" xmin=0 xmax=36 ymin=-34 ymax=41 nomi="p (cm),q (cm)" titolo="The vertical line at p = 10 cm separates the branches. The horizontal line gives the limit q = 10 cm for distant objects."}
:::

## Optical power and applications

:::definizione{#diottrie titolo="The reciprocal of the focal length"}
The **optical power** $D$ of a thin lens is the reciprocal of the signed focal length expressed in metres. It is measured in dioptres, with one dioptre equal to $\mathrm{m^{-1}}$. A focal length stated in centimetres must be converted before finding $D$.

$$
D=\frac{1}{f}.
$$

A converging lens with $f=25\,\mathrm{cm}=0.25\,\mathrm m$ has $D=+4\,\mathrm{m^{-1}}$. A diverging lens with $f=-0.50\,\mathrm m$ has $D=-2\,\mathrm{m^{-1}}$. For thin lenses in contact in air, optical powers add to first order. Separated lenses require a model that includes their separation.
:::

:::esempio{#banco-ottico titolo="From focal length to position on the bench"}
On an optical bench take light to travel from left to right. The object is at coordinate $20\,\mathrm{cm}$ and the lens is at coordinate $50\,\mathrm{cm}$. The object distance to substitute into the law is $p=30\,\mathrm{cm}$. If two thin lenses in contact have powers of $+8$ and $-3\,\mathrm{m^{-1}}$, the net power is $+5\,\mathrm{m^{-1}}$ and the equivalent focal length is $20\,\mathrm{cm}$.

Calculating with $f=20\,\mathrm{cm}$ and $p=30\,\mathrm{cm}$ gives $q=60\,\mathrm{cm}$. The screen goes at coordinate $110\,\mathrm{cm}$, since $q$ is measured from the lens on the output side. If the bench ends at $100\,\mathrm{cm}$, that setup cannot be focused on the bench. The object position or chosen focal length can be adjusted.
:::

:::osservazione{#due-posizioni-lente titolo="Two sharp positions with fixed object and screen"}
If the object and screen are a fixed distance $L$ apart and the converging lens is between them, $p+q=L$. The lens equation gives $\dfrac{1}{f}=\dfrac{p+q}{pq}$. The distance constraint then gives $pq=fL$. Any pair $(p,q)$ that satisfies both conditions remains a solution if the distances are swapped.

With a lens of focal length $10\,\mathrm{cm}$ and an object-to-screen distance of $45\,\mathrm{cm}$, the distances are $15\,\mathrm{cm}$ and $30\,\mathrm{cm}$. They add to $45\,\mathrm{cm}$ and multiply to $450\,\mathrm{cm^2}$. Putting the lens in the first position gives an inverted image twice the object’s height in magnitude. The second position gives a smaller image half the object’s height.

For two positive distances with a fixed sum, their product is at most $\dfrac{L^2}{4}$, when they are equal. Therefore $L\geq4f$ is required for at least one sharp position. At equality there is a single position halfway between object and screen.
:::
