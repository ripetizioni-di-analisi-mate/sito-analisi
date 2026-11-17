---
titolo: "Light, reflection and mirrors"
sommario: "Straight-line propagation, shadows, pinhole cameras, reflection and image formation."
---

## Light rays

:::definizione{#raggi titolo="The geometrical optics model"}
A **light ray** shows the direction and sense in which light travels. In a uniform medium, away from obstacles comparable in size to the wavelength, the model represents propagation by straight lines. A beam is a set of rays. A very small obstacle or a narrow slit can produce diffraction and require a wave model.
:::

:::esempio{#tempo-luce titolo="Distance, time and the return path"}
In a vacuum the speed of light is approximately $c=3.0\cdot10^8\,\mathrm{m/s}$. If a pulse travels just $d=900\,\mathrm m$, its time is $\dfrac{900}{3.0\cdot10^8}\,\mathrm s=3.0\,\mathrm{\mu s}$. In an echo method the pulse travels $900\,\mathrm m$ out and another $900\,\mathrm m$ back. The clock would record $6.0\,\mathrm{\mu s}$. To obtain the target distance, halve the total measured path.

::grafico{linee="0,0 3,900 6,0" punti="3,900,pieno" xmin=0 xmax=6.7 ymin=0 ymax=1050 nomi="t (μs),x (m)" titolo="Position returns to zero after 6 μs. The total distance travelled is 1800 m."}
:::

## Shadows and the pinhole camera

:::teorema{#ombre titolo="Similar triangles along the rays"}
With a point source, the geometric edges of the shadow come from rays just touching the obstacle. With an extended source, a **penumbra** receives light from part of the source, so the edge is less sharp. A pinhole camera admits a ray in each direction through a small opening and the screen receives an inverted image.

$$
\frac{|h_i|}{h_o}=\frac{q}{p}.
$$

Here $p$ is object distance from the pinhole, $q$ screen distance from the pinhole, $h_o$ object height and $|h_i|$ image-height magnitude. The two right triangles share equal angles at the opening, so their legs are proportional. The top of the object above the axis reaches below the axis on the screen.

::grafico{assi=0 linee="-120,0 30,0;-120,0 -120,48;30,-24 30,24" vettori="-120,48,30,-12" punti="-120,48,pieno,O;0,0,pieno,F;30,-12,pieno,I" xmin=-128.4 xmax=36 ymin=-24 ymax=52.8 titolo="Aperture F lies between the two similar triangles. The 48 cm object gives an image of magnitude 12 cm."}
:::

:::esempio{titolo="Comparing two screens"}
A $40\,\mathrm{cm}$ object is $160\,\mathrm{cm}$ from the pinhole. With $q=20\,\mathrm{cm}$ the image height has magnitude $5\,\mathrm{cm}$. Moving the screen to $30\,\mathrm{cm}$ multiplies the height by $30/20=1.5$, giving $7.5\,\mathrm{cm}$. Ray geometry determines the shape. Sharpness also depends on the aperture size and the model’s limits.
:::

## Law of reflection

:::teorema{#riflessione titolo="Angles measured from the normal"}
The **normal** is the line perpendicular to the surface at the point of incidence. The incident ray, normal and reflected ray lie in one plane. The angle of incidence $\theta_i$ is measured between the incident arm and the normal pointing into the incident medium. The angle of reflection $\theta_r$ is measured from the same normal, on the opposite side.

$$
\theta_r=\theta_i.
$$

If angle $\varphi$ from the surface is given, first find $\theta_i=90^\circ-\varphi$. With $\varphi=35^\circ$, the reflected angle from the normal is $55^\circ$. The angle between the two ray arms in the medium above the mirror is $110^\circ$.

::grafico{assi=0 uguale=1 linee="-3.6,0 3.6,0;0.671705,0.470333 0.601103,0.557742 0.519214,0.634678 0.427577,0.699699 0.327911,0.751581 0.222089,0.789352 0.112097,0.812302 0.000000,0.820000;0.000000,0.820000 -0.112097,0.812302 -0.222089,0.789352 -0.327911,0.751581 -0.427577,0.699699 -0.519214,0.634678 -0.601103,0.557742 -0.671705,0.470333" segmenti="0,-0.4,0,3.5" vettori="-2.457456,1.720729,0,0;0,0,2.457456,1.720729" xmin=-4 xmax=4 ymin=-0.6 ymax=3.8 etichette="-2.1,3.4,incident;2.1,3.4,reflected;-0.822596,1.095205,55°;0.442596,1.095205,55°" titolo="Both angles to the dashed normal are 55°."}
:::

:::osservazione{#ruggosita titolo="Specular and diffuse reflection"}
A surface smooth compared with the wavelength has nearly parallel normals over a small region. A parallel beam can then stay ordered after reflection. On a rough surface the local normals differ, and the reflected rays spread in several directions. The angle law still applies to each local reflection.
:::

## Plane mirrors

:::teorema{#piano titolo="Image position"}
For a plane mirror the image point is symmetric to the object in the mirror plane. If the object is at distance $p$ in front, the image is at distance $p$ behind, with the same height and upright orientation. Object and image are separated by $2p$. The observed rays stay in front of the plane. When extended backwards, they appear to come from the image point.

An image obtained from backward extensions is called **virtual**. A screen behind the mirror does not receive the physical beam corresponding to that image point.

::grafico{assi=0 linee="-1.3,0 1.7,0;0,-0.4 0,0.6" segmenti="-1,0,-1,0.35;0,0.15,-1,0.35" vettori="1,0,1,0.35;1,0.35,0,0.15;0,0.15,1.48,-0.146" punti="-1,0.35,vuoto,I;1,0.35,pieno,O;1.48,-0.146,pieno,E" xmin=-1.43 xmax=1.86 ymin=-0.51 ymax=0.7 titolo="O and I are each 1 m from the plane. The dashed extension traces the ray back towards I."}
:::

:::esempio{titolo="Moving the object"}
An object $0.80\,\mathrm m$ from the plane moves $0.15\,\mathrm m$ closer. Its new distance is $0.65\,\mathrm m$ and the image advances towards the plane on the opposite side by $0.15\,\mathrm m$. Object-to-image separation falls from $1.60$ to $1.30\,\mathrm m$. Its change is twice the object movement.
:::

## Spherical mirrors

:::definizione{#fuoco titolo="Principal axis and focus"}
A spherical mirror is part of a spherical surface. Its principal axis passes through the vertex and centre of curvature. In a **concave** mirror the inner side reflects, and rays near the axis and initially parallel to it converge towards a real focus. In a **convex** mirror reflected rays diverge from a virtual focus defined by their backward extensions.

$$
|f|\simeq\frac{R}{2}.
$$

Use $f>0$ for the real focus of a concave mirror and $f<0$ for the virtual focus of a convex mirror. Here $R$ is the radius-of-curvature magnitude. The approximation is **paraxial** because it applies to rays within a small aperture around the axis. Rays far from the axis can cross it at different points.
:::

## Mirror equation and magnification

::::teorema{#equazione titolo="Finding the image"}
In the paraxial model, $p$ is object distance from the vertex. A real object in front of the mirror has $p>0$. Signed distance $q$ is positive for a real image in front of the mirror and negative for a virtual image behind it. Transverse magnification $M$ is the signed ratio of image height to object height.

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=-\frac qp.
$$

For a concave mirror with $p>f$, the image is real and $M<0$, so it is inverted. When $p=f$, reflected rays leave parallel and there is no image at a finite distance. If $0<p<f$, the image is virtual and upright. For a convex mirror with a real object, $q<0$ and $0<M<1$.

:::dimostrazione
A ray from the object top passes near the vertex, and its reflected line has slope $-h_o/p$ for a coordinate positive in front of the mirror. A ray initially parallel to the axis reaches the paraxial representation’s vertex plane at height $h_o$ and returns through the focus along $y=h_o(1-x/f)$. Equating the values at $x=q$ gives $-q/p=1-q/f$, which yields the reciprocal equation. For a virtual image, equate the backward extensions.
:::
::::

:::esempio{titolo="A real and a virtual image"}
Let $f=8\,\mathrm{cm}$ and $p=24\,\mathrm{cm}$. Then $q=\dfrac{8\cdot24}{24-8}\,\mathrm{cm}=12\,\mathrm{cm}$ and $M=-0.50$. The real image is inverted and half the object height. With $f=-8\,\mathrm{cm}$ and the same object, we obtain $q=-6\,\mathrm{cm}$ and $M=0.25$. The image is behind the mirror, upright and reduced.

::grafico{assi=0 linee="-1.846154,0 25.846154,0;0,-6.24 0,6.24" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,-2.4;0,0,12,-2.4;12,0,12,-2.4" punti="8,0,pieno,F;12,-2.4,pieno,I;24,4.8,pieno,O" xmin=-3.692308 xmax=27.692308 ymin=-6.864 ymax=6.864 titolo="For a concave mirror, rays meet in front of the mirror at I. The vertical segments represent the heights."}
:::

:::osservazione{#controllo-specchi titolo="Checking signs with rays"}
In a convex mirror, the reflected line of a ray that was initially parallel diverges as though it came from the focus behind the mirror. In the diagram, extend the two lines backwards to the image point. The result $q<0$ agrees with this construction.

::grafico{assi=0 linee="-10.461538,0 26.461538,0;0,-15.6 0,15.6" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,12;0,0,12,-2.4" segmenti="0,4.8,-6,1.2;0,0,-6,1.2;-6,0,-6,1.2" punti="-8,0,pieno,F;-6,1.2,vuoto,I;24,4.8,pieno,O" xmin=-12.923077 xmax=28.923077 ymin=-17.16 ymax=17.16 titolo="For a convex mirror, the dashed backward extensions meet behind the vertex plane."}
:::
