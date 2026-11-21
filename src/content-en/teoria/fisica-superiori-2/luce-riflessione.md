---
titolo: "Light, reflection and mirrors"
sommario: "Straight-line propagation, shadows, pinhole cameras, reflection and image formation."
---

## Light rays

:::definizione{#raggi titolo="The geometrical optics model"}
A **light ray** is a line with an arrow that shows the direction and sense in which light travels. The direction is the straight line along which the light moves. The sense is the way the light travels along that line and is shown by the arrowhead. A **beam** is a set of rays.

The **medium** is the material through which light travels, for example air, water or glass, or a vacuum. A medium is **uniform** when it has the same properties at all its points, like the air in a room. In a uniform medium light travels in a straight line, so rays are drawn as straight segments. The study of light with these rays is called **geometrical optics**.

Light is also a wave. The **wavelength** is the distance between two successive crests of the wave, and for visible light it lies between about $4\cdot10^{-7}\,\mathrm m$ and $7\cdot10^{-7}\,\mathrm m$. The model of straight rays applies away from obstacles comparable in size to the wavelength. A very small obstacle or a narrow **slit**, that is a thin opening, can spread the beam and send light sideways too. This effect is called **diffraction**, and describing it requires a wave model, which treats light as a wave.
:::

:::esempio{#tempo-luce titolo="Distance, time and the return path"}
In a vacuum light travels at constant speed. This speed is written with the letter $c$ and is approximately $c=3.0\cdot10^8\,\mathrm{m/s}$. A **pulse** is a very short flash of light. If a pulse travels just $d=900\,\mathrm m$, the time taken is the distance divided by the speed.
$$
t=\frac{d}{c}=\frac{900\,\mathrm m}{3.0\cdot10^8\,\mathrm{m/s}}=3.0\cdot10^{-6}\,\mathrm s=3.0\,\mathrm{\mu s}.
$$
The symbol $\mathrm{\mu s}$ is read «microsecond». The Greek letter $\mu$, read «mu», stands for one millionth, so $1\,\mathrm{\mu s}=10^{-6}\,\mathrm s$.

In an **echo method** the pulse leaves the source, strikes a target and travels back to a **detector**, that is a device next to the source that records the arrival of the light. The pulse travels $900\,\mathrm m$ out and another $900\,\mathrm m$ back. Its **path length**, that is the total length of its route, is therefore $1800\,\mathrm m$. The clock would record twice the one-way time, that is $6.0\,\mathrm{\mu s}$. To obtain the target distance, the total measured path is divided by two, giving $\dfrac{1800\,\mathrm m}{2}=900\,\mathrm m$.

The graph shows the position $x$ of the pulse, that is its distance from the source, against the time $t$. The position increases up to the target and returns to zero after $6\,\mathrm{\mu s}$. The **displacement** is the difference between the final and initial positions, so at the end it is zero, while the path length is $1800\,\mathrm m$.

::grafico{linee="0,0 3,900 6,0" punti="3,900,pieno" xmin=0 xmax=6.7 ymin=0 ymax=1050 nomi="t (μs),x (m)" titolo="Position returns to zero after 6 μs. The total distance travelled is 1800 m."}
:::

:::osservazione{titolo="Separating time of flight from detector delay"}
A detector next to the source records the echo after $8.4\,\mathrm{\mu s}$. Its circuit takes $0.4\,\mathrm{\mu s}$ to signal the arrival, that is it adds a **delay** of $0.4\,\mathrm{\mu s}$ to the time between emission and return. The time of flight of the light is obtained by subtracting the delay.
$$
t_{\mathrm{flight}}=8.4\,\mathrm{\mu s}-0.4\,\mathrm{\mu s}=8.0\,\mathrm{\mu s}.
$$
At the same speed as in the preceding example, the path in a vacuum is
$$
s=c\,t_{\mathrm{flight}}=3.0\cdot10^8\,\mathrm{m/s}\cdot8.0\cdot10^{-6}\,\mathrm s=2400\,\mathrm m.
$$
The path includes the outward and return journeys, so a stationary target on the outward line is $\dfrac{2400\,\mathrm m}{2}=1200\,\mathrm m$ away. The path length is halved after the delay has been subtracted from the time reading.

If two echoes are recorded with the same fixed delay, the delay appears in both readings, so it cancels in their difference. For example, readings separated by $2.0\,\mathrm{\mu s}$ correspond to a difference between the complete path lengths of
$$
\Delta s=3.0\cdot10^8\,\mathrm{m/s}\cdot2.0\cdot10^{-6}\,\mathrm s=600\,\mathrm m.
$$
The Greek letter $\Delta$ (capital delta) denotes a difference. Each path is twice the distance of its target, so the targets differ in distance by $300\,\mathrm m$.

On the position graph, the **slope** is the change in position divided by the time taken. On the way out the position increases and the slope is positive. On the return to the source the position decreases and the slope changes sign, while the speed of light keeps the same magnitude, that is the same value without sign.

If the one-way travel time is plotted against distance, each metre of path takes a time $\dfrac{1\,\mathrm m}{c}$. The slope is therefore $\dfrac{1}{c}$, the **reciprocal** of $c$, that is the number $1$ divided by $c$. The two graphs answer different questions. The slope of position against time gives the velocity along the axis. The slope of time against path length gives how much time each additional metre of path takes.
:::

## Shadows and the pinhole camera

:::teorema{#ombre titolo="Similar triangles along the rays"}
A **point source** is a light source so small, compared with the distances involved, that it can be treated as a point. A **shadow** is the region that the light from the source does not reach because an obstacle blocks it. With a point source, the geometric edges of the shadow come from the rays just touching the edge of the obstacle. An **extended source**, such as the Sun, has a size that cannot be neglected. With it a region of **penumbra** appears, which receives light from only part of the source, and the edge of the shadow is less sharp.

The **pinhole camera** is a closed box with a small hole in one face and a screen on the opposite face. In the model with a point-like hole, from each point of the object a single ray reaches the screen, the one aimed at the hole, and it continues in a straight line. The **axis** is the line that passes through the hole and is perpendicular to the screen. A ray from a point above the axis arrives below the axis, so the screen receives an **inverted** image, that is upside down.

$$
\frac{|h_i|}{h_o}=\frac{q}{p}.
$$

Here $p$ is the object distance from the pinhole, $q$ the screen distance from the pinhole and $h_o$ the object height. The image height $h_i$ has a sign, positive above the axis and negative below. The symbol $|h_i|$ denotes the **magnitude** of the image height, that is its value without sign.

The formula comes from two triangles. The first has its vertices at the hole, the foot and the top of the object, the second at the hole, the foot and the top of the image. The two triangles are right-angled and have equal angles at the hole, because these are vertically opposite angles. Two triangles with the same angles are called **similar** and have corresponding sides in proportion. Therefore the vertical legs $|h_i|$ and $h_o$ are in the same ratio as the horizontal legs $q$ and $p$. The top of the object above the axis reaches below the axis on the screen, at $I$.

In the figure the object, with its top at $O$, is $48\,\mathrm{cm}$ tall and $120\,\mathrm{cm}$ from the hole $F$, and the screen is $30\,\mathrm{cm}$ from the hole.
$$
|h_i|=h_o\cdot\frac{q}{p}=48\,\mathrm{cm}\cdot\frac{30}{120}=12\,\mathrm{cm}.
$$

::grafico{assi=0 linee="-120,0 30,0;-120,0 -120,48;30,-24 30,24" vettori="-120,48,30,-12" punti="-120,48,pieno,O;0,0,pieno,F;30,-12,pieno,I" xmin=-128.4 xmax=36 ymin=-24 ymax=52.8 titolo="Aperture F lies between the two similar triangles. The 48 cm object gives an image of magnitude 12 cm."}
:::

:::esempio{titolo="Comparing two screens"}
A $40\,\mathrm{cm}$ object is $160\,\mathrm{cm}$ from the pinhole. With $q=20\,\mathrm{cm}$ the image height has magnitude
$$
|h_i|=40\,\mathrm{cm}\cdot\frac{20}{160}=5\,\mathrm{cm}.
$$
Moving the screen to $30\,\mathrm{cm}$ multiplies the distance $q$ by $\dfrac{30}{20}=1.5$, and the height is multiplied by the same number, so it becomes $5\,\mathrm{cm}\cdot1.5=7.5\,\mathrm{cm}$. Ray geometry determines the shape of the image. The **sharpness**, that is how clear the outlines are, also depends on the size of the hole and the model’s limits.
:::

:::esempio{titolo="The shadow of a disc"}
A point source $S$ lights an **opaque** disc, that is one that does not let light through, of diameter $4\,\mathrm{cm}$ at a distance of $4\,\mathrm{cm}$. A screen parallel to the disc is $10\,\mathrm{cm}$ from $S$. In the section along the axis of the disc, that is along the line through $S$ and the centre of the disc, the boundary rays pass the two edges of the disc at heights $+2\,\mathrm{cm}$ and $-2\,\mathrm{cm}$ relative to the axis. The rays would continue in straight lines and mark the part of the screen that the obstacle prevents from being lit.

The scale factor is the ratio of the source-to-screen distance to the source-to-disc distance, $\dfrac{10}{4}=2.5$. The shadow diameter is therefore
$$
4\,\mathrm{cm}\cdot\frac{10}{4}=10\,\mathrm{cm}.
$$
Both distances in the ratio start at $S$. The $6\,\mathrm{cm}$ from disc to screen describes only the final segment of the rays.

::grafico{assi=0 uguale=1 linee="0,0 10,5;0,0 10,-5;4,-2 4,2;10,-5.5 10,5.5" segmenti="0,0,10,0" punti="0,0,pieno;4,2,pieno;4,-2,pieno;10,5,pieno;10,-5,pieno" etichette="-0.75,0.65,S;3.45,2.45,disc;8.35,5.55,screen" xmin=-1.3 xmax=11.7 ymin=-6 ymax=6.3 titolo="The boundary rays meet the edges of the disc. The shadow is the part of the screen between the boundaries."}
:::

:::osservazione{titolo="Penumbra and finite openings"}
To determine whether a point on the screen is illuminated, the straight lines joining it to the various points of the source are drawn. If every line crosses the obstacle, no part of the source lights the point, which is in full shadow. If only some lines cross the obstacle, the point receives light from part of the source and is in penumbra. The transition from shadow to the lit region is wider when the source, seen from the obstacle, looks larger, that is when it subtends a larger angle.

In a pinhole camera, a wider hole admits more rays from the same object point. As they pass through different parts of the opening, they reach slightly different places on the screen. This gives a small patch in place of the ideal image point, and the image is less sharp. With a very narrow hole, diffraction instead becomes noticeable and also widens the patch. Geometrical optics describes only the first effect.
:::

## Law of reflection

:::teorema{#riflessione titolo="Angles measured from the normal"}
**Reflection** is the effect in which light striking a surface travels back into the medium it came from. The **point of incidence** is the point struck by the ray. The **normal** is the line perpendicular to the surface at the point of incidence, that is the line forming a right angle with it. The ray that arrives is the **incident ray**, the one that leaves is the **reflected ray**.

- The incident ray, the normal and the reflected ray are **coplanar**, that is they lie in the same plane.
- The **angle of incidence** $\theta_i$ is the angle between the incident arm and the normal pointing into the incident medium. The Greek letter $\theta$ is read «theta».
- The **angle of reflection** $\theta_r$ is measured from the same normal, on the opposite side.

The law of reflection states that the two angles are equal.

$$
\theta_r=\theta_i.
$$

If the angle $\varphi$ (Greek letter «phi») measured from the surface is given, the angle from the normal is found first. The normal and the surface form a right angle, so the two angles are **complementary**, that is they add up to $90^\circ$. With $\varphi=35^\circ$ one obtains
$$
\theta_i=90^\circ-\varphi=90^\circ-35^\circ=55^\circ,
$$
so the reflected angle from the normal is also $55^\circ$. The angle between the two ray arms in the medium above the mirror is $55^\circ+55^\circ=110^\circ$.

::grafico{assi=0 uguale=1 linee="-3.6,0 3.6,0;0.671705,0.470333 0.601103,0.557742 0.519214,0.634678 0.427577,0.699699 0.327911,0.751581 0.222089,0.789352 0.112097,0.812302 0.000000,0.820000;0.000000,0.820000 -0.112097,0.812302 -0.222089,0.789352 -0.327911,0.751581 -0.427577,0.699699 -0.519214,0.634678 -0.601103,0.557742 -0.671705,0.470333" segmenti="0,-0.4,0,3.5" vettori="-2.457456,1.720729,0,0;0,0,2.457456,1.720729" xmin=-4 xmax=4 ymin=-0.6 ymax=3.8 etichette="-2.1,3.4,incident;2.1,3.4,reflected;-0.822596,1.095205,55°;0.442596,1.095205,55°" titolo="Both angles to the dashed normal are 55°."}
:::

:::osservazione{titolo="The opening between the arms and the change in direction"}
In a diagram the two arms spread apart by $2\theta_i$ when both are traced outwards from the point of incidence. The incident arrow, however, travels along its arm towards that point. To compare the directions of propagation, one of the arms is therefore reversed. The **change in direction** is the angle between the direction of propagation before and after reflection, that is between the two arrows placed at a common origin. Reversing an arm replaces the opening by its **supplementary** angle, that is the angle that adds to it to give $180^\circ$, so the change in direction is $180^\circ-2\theta_i$. With $\theta_i=55^\circ$ the opening is $110^\circ$ and the change in direction is $180^\circ-110^\circ=70^\circ$.

At **normal incidence** the ray arrives along the normal and $\theta_i=0^\circ$. The arms lie along the same line and propagation reverses. In this case the opening between the arms is zero degrees, while the change in direction is $180^\circ$.
:::

:::esempio{titolo="Rotating a mirror with the incident ray held fixed"}
A ray strikes a mirror along the initial normal, so at first the reflected ray travels back along the same line. The mirror is rotated by $15^\circ$ in the plane of the rays about the point of incidence, and the normal also rotates by $15^\circ$. The incident arm stays fixed, so it now forms an angle of $15^\circ$ with the new normal. By the law of reflection the reflected arm also forms $15^\circ$ with the new normal. The reflected arm is therefore $15^\circ+15^\circ=30^\circ$ from the initial reflected direction, which coincided with the incident arm.

With the incident ray held fixed, a rotation of the mirror produces a rotation of the reflected ray twice as large, as long as the ray continues to strike the reflecting face.

::grafico{assi=0 uguale=1 linee="-2.6,0 2.6,0;-2.5,-0.669873 2.5,0.669873" segmenti="0,0,-0.776457,2.897777" vettori="0,4.1,0,3.15;0,0,0,2.75;0,0,-1.65,2.857884" etichette="0.2,3.7,incoming;0.15,2.3,before;-2.55,2.8,after;-1.02,2.64,n′" xmin=-3.1 xmax=3.2 ymin=-1.1 ymax=4.5 titolo="The new normal n′ is dashed. The outgoing ray rotates by 30°."}
:::

:::osservazione{#ruggosita titolo="Specular and diffuse reflection"}
A surface is **smooth** when its irregularities are much smaller than the wavelength. Over a small region of a smooth surface the normals are nearly parallel. A parallel beam, that is one made of rays with the same direction, therefore meets the same angle of incidence at every point and stays parallel after reflection. This is **specular reflection**.

On a rough surface, such as a sheet of paper or a wall, each small patch has a different normal, called the **local normal**. The reflected rays therefore spread in many directions, and this is called **diffuse reflection**. The angle law still applies to each reflection on a small patch, with its local normal.
:::

## Plane mirrors

:::teorema{#piano titolo="Image position"}
A **plane mirror** is a flat reflecting surface. The image point is the **mirror point** of the object in the plane of the mirror, that is the point on the other side of the plane, on the same perpendicular to the plane and at the same distance. If the object is at distance $p$ in front of the mirror, the image is at distance $p$ behind, with the same height and upright orientation. Object and image are separated by $p+p=2p$.

The symmetry changes only the distance from the plane. If the object moves $0.3\,\mathrm m$ upwards, parallel to the mirror, the image also moves $0.3\,\mathrm m$ upwards.

The observed rays stay in front of the plane. When extended backwards, that is continued beyond the mirror, they appear to come from the image point. An image obtained from backward extensions is called **virtual**. A screen behind the mirror does not receive the physical beam corresponding to the image point, because the light does not pass through the mirror.

In the figure a ray leaves the object $O$, reflects and reaches the eye $E$.

::grafico{assi=0 linee="-1.3,0 1.7,0;0,-0.4 0,0.6" segmenti="-1,0,-1,0.35;0,0.15,-1,0.35" vettori="1,0,1,0.35;1,0.35,0,0.15;0,0.15,1.48,-0.146" punti="-1,0.35,vuoto,I;1,0.35,pieno,O;1.48,-0.146,pieno,E" xmin=-1.43 xmax=1.86 ymin=-0.51 ymax=0.7 titolo="O and I are each 1 m from the plane. The dashed extension traces the ray back towards I."}
:::

:::esempio{titolo="Moving the object"}
An object $0.80\,\mathrm m$ from the plane moves $0.15\,\mathrm m$ closer. Its new distance from the plane is $0.80\,\mathrm m-0.15\,\mathrm m=0.65\,\mathrm m$. The image stays at the same distance from the plane as the object, so it advances towards the plane on the opposite side by $0.15\,\mathrm m$. Object-to-image separation falls from $2\cdot0.80\,\mathrm m=1.60\,\mathrm m$ to $2\cdot0.65\,\mathrm m=1.30\,\mathrm m$. The change is $1.60\,\mathrm m-1.30\,\mathrm m=0.30\,\mathrm m$, twice the object movement.
:::

:::esempio{titolo="How tall does the mirror need to be?"}
A person $1.70\,\mathrm m$ tall stands in front of a vertical mirror with eyes at a height of $1.60\,\mathrm m$, that is $1.60\,\mathrm m$ above the floor. Their eyes, top of the head and feet are equally distant from the plane. To find where a ray from the feet reflects towards the eye, the eye is joined to the image of the foot. The part behind the plane is the extension of the reflected ray. The eye and the image of the foot are at equal distances on opposite sides of the plane, so the line joining them crosses the plane halfway between their heights.
$$
\frac{0\,\mathrm m+1.60\,\mathrm m}{2}=0.80\,\mathrm m.
$$
The top of the head, at a height of $1.70\,\mathrm m$, is treated in the same way.
$$
\frac{1.70\,\mathrm m+1.60\,\mathrm m}{2}=1.65\,\mathrm m.
$$

A reflecting section from $0.80$ to $1.65\,\mathrm m$ is enough to show the full figure in this geometry. The minimum height is $1.65\,\mathrm m-0.80\,\mathrm m=0.85\,\mathrm m$, that is half the height of the person. Moving away without changing posture preserves the heights of the reflection points, because the plane is still halfway between the eye and the images. A taller mirror mounted too high can still leave the feet out of view.

::grafico{assi=0 uguale=1 linee="-1.5,0 -1.5,1.7;1.5,0 1.5,1.7;0,0.8 0,1.65" segmenti="-1.5,0,0,0.8;-1.5,1.7,0,1.65" vettori="1.5,0,0,0.8;0,0.8,1.5,1.6;1.5,1.7,0,1.65;0,1.65,1.5,1.6" punti="0,0.8,pieno;0,1.65,pieno;1.5,1.6,pieno" etichette="1.59,1.48,E;-0.66,0.72,0.80 m;-0.67,1.78,1.65 m" xmin=-1.9 xmax=2 ymin=-0.2 ymax=2.1 titolo="E is the eye. The two intersections on the plane bound the minimum reflective section."}
:::

## Spherical mirrors

:::definizione{#fuoco titolo="Principal axis and focus"}
A **spherical mirror** is part of a spherical surface, like a cap cut from a hollow ball.

- The **centre of curvature** $C$ is the centre of the sphere.
- The **radius of curvature** is the radius of the sphere. The value $R$ is its magnitude.
- The **vertex** is the central point of the mirror.
- The **principal axis** is the line through the vertex and the centre of curvature.

In a **concave** mirror the reflecting side is the inner one, hollowed like the inside of a spoon. Rays near the axis and initially parallel to it converge after reflection, that is they come together until they meet, at a point on the axis called the **focus** $F$. This focus is **real**, because the light actually passes through it.

In a **convex** mirror the reflecting side is the outer one, bulging like the back of a spoon. After reflection, rays parallel to the axis diverge, that is they spread apart. Their backward extensions behind the mirror meet at a **virtual** focus.

The **focal length** $f$ is the distance of the focus from the vertex. The symbol $\simeq$ is read «approximately equal to».

$$
|f|\simeq\frac{R}{2}.
$$

The convention is $f>0$ for the real focus of a concave mirror and $f<0$ for the virtual focus of a convex mirror. A concave mirror with $R=30\,\mathrm{cm}$ therefore has $f\simeq15\,\mathrm{cm}$. The focus lies halfway between the vertex and the centre of curvature. The **focal plane** is the plane perpendicular to the axis through the focus, and a screen placed there receives the meeting point of a beam parallel to the axis.

The approximation is **paraxial** because it applies to rays within a small aperture around the axis, that is rays close to the axis and only slightly inclined to it. Rays far from the axis strike parts of the mirror with a different inclination and can cross the axis at points other than the focus.
:::

:::osservazione{titolo="Choosing two rays for a construction"}
To locate the image of the top of an object, two rays from the same starting point can be used. For a concave mirror three rays are easy to construct.

- A ray parallel to the axis returns through the focus.
- A ray aimed at the centre of curvature returns along the same line. The line passes through the centre of the sphere, so it is the local normal at the point struck, and the angle of incidence is zero.
- A ray aimed at the vertex reflects symmetrically about the axis, because at the vertex the normal coincides with the axis. It works even when the centre of curvature would lie off the page.

Two rays suffice in the paraxial model. Their intersection, or that of their backward extensions, gives the image height. Every part of the mirror receives rays from all points of the object, so covering half of the mirror leaves the image complete and only makes it receive less light.
:::

## Mirror equation and magnification

::::teorema{#equazione titolo="Finding the image"}
In the paraxial model signed distances are used, measured from the vertex.

- $p$ is the object distance from the vertex. A real object in front of the mirror has $p>0$.
- $q$ is the signed image distance. It is positive for a **real** image, which forms in front of the mirror where the rays actually meet, and negative for a virtual image behind the mirror.
- $f$ is the focal length, positive for a concave mirror and negative for a convex one.
- The **transverse magnification** $M$ is the signed ratio of image height to object height, $M=\dfrac{h_i}{h_o}$. If $M<0$ the image is inverted, if $M>0$ it is **upright**, that is oriented like the object. If the magnitude of $M$ is greater than $1$ the image is enlarged, if it is less than $1$ it is reduced.

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=-\frac qp.
$$

The first equality is the **mirror equation**. The second is obtained from the first by isolating $\dfrac1q$ and using a common denominator.
$$
\frac1q=\frac1f-\frac1p=\frac{p-f}{fp},\qquad\text{so}\qquad q=\frac{fp}{p-f}.
$$

For a concave mirror with $p>f$, the denominator $p-f$ is positive and $q>0$, so the image is real. Since $p$ and $q$ are positive, $M<0$ and the image is inverted. When $p=f$, the denominator is zero and the formula gives no value of $q$. Reflected rays leave parallel and there is no image at a finite distance. If $0<p<f$, the denominator is negative, so $q<0$ and $M>0$, and the image is virtual and upright. For a convex mirror with a real object, the numerator $fp$ is negative and the denominator $p-f=p+|f|$ is positive, so $q<0$ and $M>0$. Moreover $|q|=\dfrac{|f|}{p+|f|}\cdot p$ is less than $p$, so $0<M<1$.

:::dimostrazione
The vertex is placed at the origin, with the coordinate $x$ along the axis, positive in front of the mirror, and the height $y$ perpendicular to the axis. The top of the object is at the point with coordinates $(p,h_o)$.

A ray from the object top strikes the vertex. At the vertex the normal is the axis, so the reflected ray is symmetric about the axis and its line passes through the origin with slope $-\dfrac{h_o}{p}$. Its equation is $y=-\dfrac{h_o}{p}\,x$.

In the paraxial construction, a ray parallel to the axis reaches the vertex plane at height $h_o$ and its reflected line passes through the focus $(f,0)$. This line passes through $(0,h_o)$ and $(f,0)$, so its equation is $y=h_o\left(1-\dfrac{x}{f}\right)$.

The top of the image is the meeting point of the two lines, which lies at $x=q$. Equating the values of $y$ at $x=q$ gives $-\dfrac{h_o}{p}\,q=h_o\left(1-\dfrac{q}{f}\right)$, and dividing by $h_o$ gives
$$
-\frac{q}{p}=1-\frac{q}{f}.
$$
Dividing both sides by $q$ gives $-\dfrac1p=\dfrac1q-\dfrac1f$, and adding $\dfrac1f+\dfrac1p$ to both sides yields the reciprocal equation $\dfrac1f=\dfrac1p+\dfrac1q$. The height of the image top is $h_i=-\dfrac{h_o}{p}\,q$, so $M=\dfrac{h_i}{h_o}=-\dfrac{q}{p}$. For a virtual image, the backward extensions of the two lines are equated.
:::
::::

:::esempio{titolo="A real and a virtual image"}
Let $f=8\,\mathrm{cm}$ and $p=24\,\mathrm{cm}$.
$$
q=\frac{8\cdot24}{24-8}\,\mathrm{cm}=\frac{192}{16}\,\mathrm{cm}=12\,\mathrm{cm},\qquad M=-\frac{12}{24}=-0.50.
$$
The sign of $q$ is positive, so the image is real. The sign of $M$ is negative and its magnitude is $0.50$, so the image is inverted and half the object height.

With $f=-8\,\mathrm{cm}$ and the same object, one obtains instead
$$
q=\frac{(-8)\cdot24}{24-(-8)}\,\mathrm{cm}=\frac{-192}{32}\,\mathrm{cm}=-6\,\mathrm{cm},\qquad M=-\frac{-6}{24}=0.25.
$$
The image is behind the mirror, upright and reduced.

The graph shows the concave case.

::grafico{assi=0 linee="-1.846154,0 25.846154,0;0,-6.24 0,6.24" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,-2.4;0,0,12,-2.4;12,0,12,-2.4" punti="8,0,pieno,F;12,-2.4,pieno,I;24,4.8,pieno,O" xmin=-3.692308 xmax=27.692308 ymin=-6.864 ymax=6.864 titolo="For a concave mirror, rays meet in front of the mirror at I. The vertical segments represent the heights."}
:::

:::esempio{titolo="Using a concave mirror at close range"}
A concave mirror has $f=10\,\mathrm{cm}$ and the object is at $p=6\,\mathrm{cm}$. The denominator is $p-f=6\,\mathrm{cm}-10\,\mathrm{cm}=-4\,\mathrm{cm}$, so the equation gives
$$
q=\frac{10\cdot6}{-4}\,\mathrm{cm}=-15\,\mathrm{cm},\qquad M=-\frac{-15}{6}=+2.5.
$$
For an object $2\,\mathrm{cm}$ tall, the image appears $2.5\cdot2\,\mathrm{cm}=5\,\mathrm{cm}$ tall. The reflected rays diverge, and only their extensions behind the plane meet in the diagram, at the point $I$. A positive focal length on its own therefore does not determine whether the image is real. The object's position relative to the focus also matters.

::grafico{assi=0 linee="-18,0 18,0;0,-4 0,6;6,0 6,2" vettori="6,2,0,2;6,2,0,0;0,2,16,-1.2;0,0,16,-5.333333" segmenti="0,2,-15,5;0,0,-15,5;-15,0,-15,5" punti="6,2,pieno,O;10,0,pieno,F;-15,5,vuoto,I" xmin=-19 xmax=19 ymin=-6 ymax=7 titolo="With the object inside the focal point, the dashed extensions meet at I behind the mirror."}
:::

:::osservazione{titolo="Image position and orientation across the regimes"}
The table assumes a real object with $p>0$. For a concave mirror the centre of curvature is $2f$ from the vertex, because $R\simeq2f$.

| Object | Image position | Height and orientation |
|---|---|---|
| $p>2f$ | Real, between focus and centre | Inverted and reduced |
| $p=2f$ | Real, at the centre | Inverted and the same height |
| $f<p<2f$ | Real, beyond the centre | Inverted and enlarged |
| $p=f$ | Parallel rays | No finite image |
| $0<p<f$ | Virtual, behind the mirror | Upright and enlarged |
| Convex, any $p>0$ | Virtual, between vertex and focus | Upright and reduced |

For a concave mirror the formula for $q$ can be rewritten by adding and subtracting $f$ in the numerator.
$$
q=\frac{fp}{p-f}=\frac{f(p-f)+f^2}{p-f}=f+\frac{f^2}{p-f}.
$$
This form shows why the image moves rapidly when the object is close to the focus. A small change in $p$ produces a large change in the second term because its denominator $p-f$ is small. For a very distant object, that term becomes negligible and the image approaches the focus.

The graph uses the dimensionless variables $\dfrac{p}{f}$ and $\dfrac{q}{f}$, so it applies to any positive focal length within the paraxial model. The dashed lines are **asymptotes**, that is lines that the curve approaches more and more closely without touching them. The vertical asymptote $\dfrac{p}{f}=1$ corresponds to the object at the focus, the horizontal one $\dfrac{q}{f}=1$ to the image at the focus. The point $C$ is the case $p=q=2f$, with object and image at the centre of curvature.

::grafico{f="1+1/(x-1)" asintoti="x=1;y=1" punti="0.5,-1,pieno;2,2,pieno,C;3,1.5,pieno" xmin=0 xmax=4.35 ymin=-4 ymax=5 nomi="p/f,q/f" titolo="The branch with p/f below 1 gives negative q. At large distances the image approaches the focus."}
:::

:::osservazione{#controllo-specchi titolo="Checking signs with rays"}
In a convex mirror, the reflected line of a ray that was initially parallel diverges as though it came from the focus behind the mirror. In the diagram the two reflected lines are extended backwards to the image point $I$. In the figure $f=-8\,\mathrm{cm}$ and $p=24\,\mathrm{cm}$, so the equation gives $q=-6\,\mathrm{cm}$. The result $q<0$ agrees with this construction, because $I$ lies behind the mirror.

::grafico{assi=0 linee="-10.461538,0 26.461538,0;0,-15.6 0,15.6" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,12;0,0,12,-2.4" segmenti="0,4.8,-6,1.2;0,0,-6,1.2;-6,0,-6,1.2" punti="-8,0,pieno,F;-6,1.2,vuoto,I;24,4.8,pieno,O" xmin=-12.923077 xmax=28.923077 ymin=-17.16 ymax=17.16 titolo="For a convex mirror, the dashed backward extensions meet behind the vertex plane."}
:::
