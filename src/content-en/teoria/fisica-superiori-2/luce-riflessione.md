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

:::osservazione{titolo="Separating time of flight from detector delay"}
A detector next to the source records the echo after $8.4\,\mathrm{\mu s}$. Its circuit adds $0.4\,\mathrm{\mu s}$ to the time between emission and return. Propagation therefore takes $8.0\,\mathrm{\mu s}$. At the same speed as in the preceding example, the path in a vacuum is $2400\,\mathrm m$, so a stationary target on the outward line is $1200\,\mathrm m$ away. Halve the path length after subtracting the delay from the time reading.

When comparing two echoes recorded with the same fixed delay, the circuit delay cancels in the difference. For example, readings separated by $2.0\,\mathrm{\mu s}$ correspond to a $600\,\mathrm m$ difference in the complete path lengths. The targets differ in distance by $300\,\mathrm m$. On the position graph, the slope changes sign on the return to the source, while the speed of light keeps the same magnitude.

For the one-way travel time plotted against distance, the slope is the reciprocal of $c$. The two graphs answer different questions. The slope of position against time gives the velocity along the axis. The slope of time against path length tells us how much time each additional metre of path takes.
:::

## Shadows and the pinhole camera

:::teorema{#ombre titolo="Similar triangles along the rays"}
With a point source, the geometric edges of the shadow come from rays just touching the obstacle. With an extended source, a **penumbra** receives light from part of the source, so the edge is less sharp. In the ideal pinhole camera, the ray aimed at the opening passes through for each object point. The screen receives an inverted image.

$$
\frac{|h_i|}{h_o}=\frac{q}{p}.
$$

Here $p$ is object distance from the pinhole, $q$ screen distance from the pinhole, $h_o$ object height and $|h_i|$ image-height magnitude. The two right triangles share equal angles at the opening, so their legs are proportional. The top of the object above the axis reaches below the axis on the screen.

::grafico{assi=0 linee="-120,0 30,0;-120,0 -120,48;30,-24 30,24" vettori="-120,48,30,-12" punti="-120,48,pieno,O;0,0,pieno,F;30,-12,pieno,I" xmin=-128.4 xmax=36 ymin=-24 ymax=52.8 titolo="Aperture F lies between the two similar triangles. The 48 cm object gives an image of magnitude 12 cm."}
:::

:::esempio{titolo="Comparing two screens"}
A $40\,\mathrm{cm}$ object is $160\,\mathrm{cm}$ from the pinhole. With $q=20\,\mathrm{cm}$ the image height has magnitude $5\,\mathrm{cm}$. Moving the screen to $30\,\mathrm{cm}$ multiplies the height by $\dfrac{30}{20}=1.5$, giving $7.5\,\mathrm{cm}$. Ray geometry determines the shape. Sharpness also depends on the aperture size and the model’s limits.
:::

:::esempio{titolo="The shadow of a disc"}
A point source $S$ lights an opaque disc of diameter $4\,\mathrm{cm}$ at a distance of $4\,\mathrm{cm}$. A screen parallel to the disc is $10\,\mathrm{cm}$ from $S$. In the section along the axis of the disc, the boundary rays pass the two edges at heights $+2\,\mathrm{cm}$ and $-2\,\mathrm{cm}$. The rays would continue in straight lines and mark the part of the screen that the obstacle prevents from being lit.

The scale factor is the ratio of the source-to-screen distance to the source-to-disc distance. The shadow diameter is $4\cdot\dfrac{10}{4}\,\mathrm{cm}=10\,\mathrm{cm}$. Both distances start at $S$. The $6\,\mathrm{cm}$ from disc to screen describes only the final segment of the rays.

::grafico{assi=0 uguale=1 linee="0,0 10,5;0,0 10,-5;4,-2 4,2;10,-5.5 10,5.5" segmenti="0,0,10,0" punti="0,0,pieno;4,2,pieno;4,-2,pieno;10,5,pieno;10,-5,pieno" etichette="-0.75,0.65,S;3.45,2.45,disc;8.35,5.55,screen" xmin=-1.3 xmax=11.7 ymin=-6 ymax=6.3 titolo="The boundary rays meet the edges of the disc. The shadow is the part of the screen between the boundaries."}
:::

:::osservazione{titolo="Penumbra and finite openings"}
To determine whether a point on the screen is illuminated, trace the possible straight lines back from it towards the source. If every line crosses the obstacle, the point is in full shadow. If only some cross, it is in penumbra. The transition is wider when the source subtends a larger angle at the obstacle.

In a pinhole camera, a wider opening admits more rays from the same object point. As they pass through different parts of the opening, they reach slightly different places on the screen. This gives a small patch in place of the ideal image point. Shrinking the opening too far can make diffraction important. Geometrical optics alone describes the first effect.
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

:::osservazione{titolo="The opening between the arms and the change in direction"}
In a diagram the two arms spread apart by $2\theta_i$ when both are traced outwards from the point of incidence. The incident arrow, however, travels along its arm towards that point. To compare the directions of propagation, reverse one of the arms. The change in direction between the two arrows when placed at a common origin is $180^\circ-2\theta_i$. At normal incidence the arms lie along the same line and propagation reverses. This case distinguishes the zero opening between the arms from the $180^\circ$ change in direction.
:::

:::esempio{titolo="Rotating a mirror with the incident ray held fixed"}
A ray strikes a mirror along the initial normal. Rotating the mirror by $15^\circ$ in the plane of the rays about the point of incidence also rotates the normal by $15^\circ$. The incident arm stays fixed. The new normal bisects the angle between the arms into two angles of $15^\circ$. The reflected arm rotates $30^\circ$ from its initial reflected direction. With the incident ray held fixed, changing the orientation of the mirror changes the reflected orientation by twice that amount, as long as the ray continues to strike the reflecting face.

::grafico{assi=0 uguale=1 linee="-2.6,0 2.6,0;-2.5,-0.669873 2.5,0.669873" segmenti="0,0,-0.776457,2.897777" vettori="0,4.1,0,3.15;0,0,0,2.75;0,0,-1.65,2.857884" etichette="0.2,3.7,incoming;0.15,2.3,before;-2.55,2.8,after;-1.02,2.64,n′" xmin=-3.1 xmax=3.2 ymin=-1.1 ymax=4.5 titolo="The new normal n′ is dashed. The outgoing ray rotates by 30°."}
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

:::esempio{titolo="How tall does the mirror need to be?"}
A person $1.70\,\mathrm m$ tall stands in front of a vertical mirror with eyes at a height of $1.60\,\mathrm m$. Their eyes, top of the head and feet are equally distant from the plane. To find where a ray from the feet reflects towards the eye, draw the line through the eye and the image of the foot. The part behind the plane is the extension of the reflected ray. Since the two points are at equal distances on opposite sides of the plane, the line crosses the plane at the mean of their heights, $0.80\,\mathrm m$. For the top of the head the intersection is at $1.65\,\mathrm m$.

A reflecting section from $0.80$ to $1.65\,\mathrm m$ is enough to show the full figure in this geometry. The minimum height is $0.85\,\mathrm m$. Moving away without changing posture preserves the heights of the reflection points because the plane is still halfway between the two horizontal positions. A taller mirror mounted too high can still leave the feet out of view.

::grafico{assi=0 uguale=1 linee="-1.5,0 -1.5,1.7;1.5,0 1.5,1.7;0,0.8 0,1.65" segmenti="-1.5,0,0,0.8;-1.5,1.7,0,1.65" vettori="1.5,0,0,0.8;0,0.8,1.5,1.6;1.5,1.7,0,1.65;0,1.65,1.5,1.6" punti="0,0.8,pieno;0,1.65,pieno;1.5,1.6,pieno" etichette="1.59,1.48,E;-0.66,0.72,0.80 m;-0.67,1.78,1.65 m" xmin=-1.9 xmax=2 ymin=-0.2 ymax=2.1 titolo="E is the eye. The two intersections on the plane bound the minimum reflective section."}
:::

## Spherical mirrors

:::definizione{#fuoco titolo="Principal axis and focus"}
A spherical mirror is part of a spherical surface. Its principal axis passes through the vertex and centre of curvature. In a **concave** mirror the inner side reflects, and rays near the axis and initially parallel to it converge towards a real focus. In a **convex** mirror reflected rays diverge from a virtual focus defined by their backward extensions.

$$
|f|\simeq\frac{R}{2}.
$$

Use $f>0$ for the real focus of a concave mirror and $f<0$ for the virtual focus of a convex mirror. Here $R$ is the radius-of-curvature magnitude. The approximation is **paraxial** because it applies to rays within a small aperture around the axis. Rays far from the axis can cross it at different points.
:::

:::osservazione{titolo="Choosing two rays for a construction"}
To locate the image of the top of an object, use two rays from the same point. For a concave mirror, a ray parallel to the axis returns towards the focus, and a ray aimed at the centre of curvature returns along the same line. In the second case the line passes through the centre of the sphere and gives the local normal at the point of incidence. Another convenient ray is the one aimed at the vertex, where the normal coincides with the axis. It works even when the centre of curvature would lie off the page. Two rays suffice in the paraxial model. Their intersection, or that of their backward extensions, gives the image height.
:::

## Mirror equation and magnification

::::teorema{#equazione titolo="Finding the image"}
In the paraxial model, $p$ is object distance from the vertex. A real object in front of the mirror has $p>0$. Signed distance $q$ is positive for a real image in front of the mirror and negative for a virtual image behind it. Transverse magnification $M$ is the signed ratio of image height to object height.

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=-\frac qp.
$$

For a concave mirror with $p>f$, the image is real and $M<0$, so it is inverted. When $p=f$, reflected rays leave parallel and there is no image at a finite distance. If $0<p<f$, the image is virtual and upright. For a convex mirror with a real object, $q<0$ and $0<M<1$.

:::dimostrazione
A ray from the object top strikes the vertex. Its reflected line has slope $-\dfrac{h_o}{p}$ for a coordinate positive in front of the mirror. In the paraxial construction, a ray parallel to the axis reaches the vertex plane at height $h_o$ and its reflected line passes through the focus, along $y=h_o\left(1-\dfrac{x}{f}\right)$. Equating the values at $x=q$ gives $-\dfrac{q}{p}=1-\dfrac{q}{f}$, which yields the reciprocal equation. For a virtual image, equate the backward extensions.
:::
::::

:::esempio{titolo="A real and a virtual image"}
Let $f=8\,\mathrm{cm}$ and $p=24\,\mathrm{cm}$. Then $q=\dfrac{8\cdot24}{24-8}\,\mathrm{cm}=12\,\mathrm{cm}$ and $M=-0.50$. The real image is inverted and half the object height. With $f=-8\,\mathrm{cm}$ and the same object, we obtain $q=-6\,\mathrm{cm}$ and $M=0.25$. The image is behind the mirror, upright and reduced.

::grafico{assi=0 linee="-1.846154,0 25.846154,0;0,-6.24 0,6.24" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,-2.4;0,0,12,-2.4;12,0,12,-2.4" punti="8,0,pieno,F;12,-2.4,pieno,I;24,4.8,pieno,O" xmin=-3.692308 xmax=27.692308 ymin=-6.864 ymax=6.864 titolo="For a concave mirror, rays meet in front of the mirror at I. The vertical segments represent the heights."}
:::

:::esempio{titolo="Using a concave mirror at close range"}
A concave mirror has $f=10\,\mathrm{cm}$ and the object is at $p=6\,\mathrm{cm}$. Since $p-f=-4\,\mathrm{cm}$, the equation gives $q=-15\,\mathrm{cm}$ and $M=+2.5$. For an object $2\,\mathrm{cm}$ tall, the image appears $5\,\mathrm{cm}$ tall. The reflected rays diverge, and only their extensions behind the plane meet in the diagram. A positive focal length on its own therefore does not determine whether the image is real. The object's position relative to the focus also matters.

::grafico{assi=0 linee="-18,0 18,0;0,-4 0,6;6,0 6,2" vettori="6,2,0,2;6,2,0,0;0,2,16,-1.2;0,0,16,-5.333333" segmenti="0,2,-15,5;0,0,-15,5;-15,0,-15,5" punti="6,2,pieno,O;10,0,pieno,F;-15,5,vuoto,I" xmin=-19 xmax=19 ymin=-6 ymax=7 titolo="With the object inside the focal point, the dashed extensions meet at I behind the mirror."}
:::

:::osservazione{titolo="Image position and orientation across the regimes"}
The table assumes a real object with $p>0$. For a concave mirror the centre of curvature is $2f$ from the vertex.

| Object | Image position | Height and orientation |
|---|---|---|
| $p>2f$ | Real, between focus and centre | Inverted and reduced |
| $p=2f$ | Real, at the centre | Inverted and the same height |
| $f<p<2f$ | Real, beyond the centre | Inverted and enlarged |
| $p=f$ | Parallel rays | No finite image |
| $0<p<f$ | Virtual, behind the mirror | Upright and enlarged |
| Convex, any $p>0$ | Virtual, between vertex and focus | Upright and reduced |

For a concave mirror, writing $q=f+\dfrac{f^2}{p-f}$ shows why the image moves rapidly when the object is close to the focus. A small change in $p$ produces a large change in the second term because its denominator is small. For a very distant object, that term becomes negligible and the image approaches the focus. The graph uses the dimensionless variables $\dfrac{p}{f}$ and $\dfrac{q}{f}$, so it applies to any positive focal length within the paraxial model.

::grafico{f="1+1/(x-1)" asintoti="x=1;y=1" punti="0.5,-1,pieno;2,2,pieno,C;3,1.5,pieno" xmin=0 xmax=4.35 ymin=-4 ymax=5 nomi="p/f,q/f" titolo="The branch with p/f below 1 gives negative q. At large distances the image approaches the focus."}
:::

:::osservazione{#controllo-specchi titolo="Checking signs with rays"}
In a convex mirror, the reflected line of a ray that was initially parallel diverges as though it came from the focus behind the mirror. In the diagram, extend the two lines backwards to the image point. The result $q<0$ agrees with this construction.

::grafico{assi=0 linee="-10.461538,0 26.461538,0;0,-15.6 0,15.6" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,12;0,0,12,-2.4" segmenti="0,4.8,-6,1.2;0,0,-6,1.2;-6,0,-6,1.2" punti="-8,0,pieno,F;-6,1.2,vuoto,I;24,4.8,pieno,O" xmin=-12.923077 xmax=28.923077 ymin=-17.16 ymax=17.16 titolo="For a convex mirror, the dashed backward extensions meet behind the vertex plane."}
:::
