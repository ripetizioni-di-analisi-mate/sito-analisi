---
titolo: "Refraction and lenses"
sommario: "Refractive index, Snell’s law, total internal reflection, thin-lens images and optical power."
---

## Refractive index

:::definizione{#indice titolo="The speed of light in a material"}
For a transparent material at a fixed frequency, its **refractive index** $n$ is the ratio of vacuum light speed $c$ to phase speed in the material $v$. The index is dimensionless. The ordinary transparent materials treated here have $n>1$, so light travels slower in them than in vacuum.

$$
n=\frac cv,\qquad v=\frac cn.
$$

At a stationary boundary, frequency $\nu$ stays the same because the incident and transmitted waves have the same time dependence at the interface. Wavelength changes. If it is $\lambda_0=c/\nu$ in vacuum, it becomes $\lambda=v/\nu=\lambda_0/n$ in the material. The index may depend on frequency, so use a stated index for the specified light.
:::

:::esempio{titolo="From speed to wavelength"}
In glass of $n=1.50$, with $c=3.0\cdot10^8\,\mathrm{m/s}$, the speed is $2.0\cdot10^8\,\mathrm{m/s}$. A vacuum wavelength of $600\,\mathrm{nm}$ becomes $400\,\mathrm{nm}$. The wavelength ratio is the same as the speed ratio because the number of oscillations per second is unchanged.

::grafico{f="600/x" punti="1,600,pieno;1.5,400,pieno;2,300,pieno" xmin=0.9 xmax=2.35 ymin=0 ymax=695 nomi="n,λ (nm)" titolo="For a given frequency, a higher refractive index gives a shorter wavelength."}
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
For $n_1=1.00$, $n_2=1.50$ and $\theta_1=30^\circ$, the refracted sine is $\dfrac{1.00}{1.50}\cdot0.50=\dfrac13$. Its inverse sine is about $19.5^\circ$. The angle is below $30^\circ$ as expected. Swapping the media and reversing the ray path recovers the original ray.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-1.4,2.424871,0,0;0,0,0.933333,-2.639865" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="The ray in air makes 30° with the normal. In glass it makes about 19.5°."}
:::

:::osservazione{#lastra titolo="Entering and leaving a slab"}
When the two faces of a slab are parallel, their normals are parallel. If the same material is outside both faces, applying Snell’s law at the first and second surfaces gives the same sine as at entry. The emerging ray is parallel to the incident ray and can be shifted because it followed a different direction within the slab.
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
From glass of index $1.50$ to air of index $1.00$, $\theta_c=\arcsin(\dfrac23)\simeq41.8^\circ$. Incidence from glass at $55^\circ$ exceeds the critical value. The reflected ray is also $55^\circ$ from the normal inside the glass. If light entered from air to glass instead, total internal reflection would be absent in this model.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-2.293626,1.606014,0,0;0,0,2.293626,1.606014" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="From glass to air at incidence 55°, the reflected ray remains within the glass."}
:::

## Converging and diverging lenses

:::definizione{#lenti titolo="Thin-lens focal points"}
A **thin lens** is modelled as an element whose thickness is negligible relative to focal and working distances. For paraxial rays near the axis, a ray crossing the optical centre is treated as undeviated. An incoming parallel ray passes through the output-side focus after a converging lens. After a diverging lens, its backward extension appears to come from the focus on the object side.

Use $f>0$ for a converging lens and $f<0$ for a diverging lens. The construction assumes the same surrounding medium on both sides. For thick lenses or far-off-axis rays, this representation is insufficient.
:::

## Thin lens equation

::::teorema{#equazione titolo="Image position and size"}
In this convention a real object before the lens has $p>0$. A real image after the lens has $q>0$. If only backward extensions meet on the object side then $q<0$ and the image is virtual. In the paraxial model,

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=\frac{h_i}{h_o}=-\frac qp.
$$

Transverse magnification $M$ is negative for an inverted image and positive for an upright image. Its magnitude is the ratio of heights. When $p=f>0$, rays emerge parallel and there is no finite image position.

:::dimostrazione
Put the lens at $x=0$ and an object of height $h_o$ at $x=-p$. The central ray lies on $y=-h_ox/p$. The ray arriving parallel to the axis meets the lens at height $h_o$ and follows $y=h_o(1-x/f)$ after the lens. Equating their values at $x=q$ gives $-q/p=1-q/f$. A virtual image uses backward extensions of the same lines.
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

## Optical power and applications

:::definizione{#diottrie titolo="The reciprocal of the focal length"}
The **optical power** $D$ of a thin lens is the reciprocal of the signed focal length expressed in metres. It is measured in dioptres, with one dioptre equal to $\mathrm{m^{-1}}$. A focal length stated in centimetres must be converted before finding $D$.

$$
D=\frac{1}{f}.
$$

A converging lens with $f=25\,\mathrm{cm}=0.25\,\mathrm m$ has $D=+4\,\mathrm{m^{-1}}$. A diverging lens with $f=-0.50\,\mathrm m$ has $D=-2\,\mathrm{m^{-1}}$. For thin lenses in contact in air, optical powers add to first order. Separated lenses require a model that includes their separation.
:::
