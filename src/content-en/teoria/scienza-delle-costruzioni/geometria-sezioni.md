---
titolo: "Geometric properties of cross sections"
sommario: "Area, centroid, second moments of area, and section moduli of solid and hollow sections."
---

## Area and first moments of area

:::definizione{#momenti-statici titolo="First moments of area"}
Cut a beam with a plane perpendicular to its longitudinal axis $x$. The part of the plane occupied by material is the **cross section** $A$. In this chapter the coordinates in the plane of the cross section are $(z,y)$, with $z$ pointing to the right and $y$ upward in the figures. The element $dA$ represents an infinitesimal area. If coordinates are measured in millimeters, its unit is the square millimeter.

To sum the signed distances of all the area elements from an axis, weight each distance by the area of its element. Integrating over the cross section gives the **first moments of area**.

$$
A=\int_A dA,
\qquad
S_z=\int_A y\,dA,
\qquad
S_y=\int_A z\,dA.
$$

The moment about $z$ uses the vertical coordinate $y$, since this is the signed distance from the horizontal axis. The moment about $y$ uses the horizontal coordinate $z$. Areas on opposite sides of an axis contribute with opposite signs. A zero result therefore means that the positive and negative contributions cancel. First moments of area are measured in $\mathrm{mm^3}$.
:::

:::esempio{titolo="First moment of area about an edge"}
A rectangle has width $40\,\mathrm{mm}$ and height $60\,\mathrm{mm}$. The $z$ axis coincides with its lower edge. At height $y$, a horizontal strip of thickness $dy$ has area $40\,dy$. Therefore

$$
S_z=\int_0^{60}40y\,dy
=40\,\frac{60^2}{2}\,\mathrm{mm^3}
=72\,000\,\mathrm{mm^3}.
$$

::struttura{riferimento=0 poligoni="0,0 40,0 40,60 0,60" linee="0,31 40,31;0,35 40,35" frecce="0,0,54,0,z;0,0,0,72,y" quote="0 60,40 60,40 mm,-8;40 0,40 60,60 mm,9" titolo="A horizontal strip in the rectangle"}

If the origin moves upward by $30\,\mathrm{mm}$, the strip's coordinate becomes $y-30\,\mathrm{mm}$. Since the area is $2\,400\,\mathrm{mm^2}$, the first moment about the new axis is $72\,000-30\cdot2\,400=0$, in $\mathrm{mm^3}$. The cross section is the same. Only the position of the reference axis has changed.
:::

:::esempio{titolo="First moment of the upper portion alone"}
Consider a rectangle of width $20\,\mathrm{mm}$ and height $100\,\mathrm{mm}$ centered at the origin. The first moment of the entire cross section about $z$ is zero. If the integration is restricted to $y\geq30\,\mathrm{mm}$, the portion has area $20\cdot20=400\,\mathrm{mm^2}$ and mean height $40\,\mathrm{mm}$. Its first moment is therefore $16\,000\,\mathrm{mm^3}$. In the chapter on the Saint-Venant problem, the Jourawski shear formula uses precisely this first moment of the area on one side of a cut.

::struttura{riferimento=0 poligoni="-10,30 10,30 10,50 -10,50" linee="-10,-50 10,-50 10,50 -10,50 -10,-50" frecce="0,0,22,0,z;0,0,0,64,y" quote="-10 0,-10 30,30 mm,-8;10 -50,10 50,100 mm,22" titolo="The shaded area is the portion used to calculate the first moment"}
:::

:::esempio{titolo="Flanges and web of a rolled section"}
The web separates the two flanges. In the idealized section, the flanges lie far from the centroidal axis parallel to them. The square of this distance enters the calculation of the second moment of area about that axis.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/profilo-h.webp" alt="End view of a steel H-section showing two flanges and a central web" width="1211" height="1024" loading="lazy" decoding="async"><figcaption>Flanges and web of a rolled section. Resized photograph by <a href="https://commons.wikimedia.org/wiki/File:Balk6.jpg">Anders Lagerås</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a>.</figcaption></figure>
:::

## Centroid and symmetry

:::definizione{#coordinate-baricentro titolo="Coordinates of the centroid"}
The **centroid** $G$ is the point whose coordinates are the area-weighted means of the coordinates of all points in the cross section. For a section of positive area,

$$
z_G=\frac{S_y}{A},
\qquad
y_G=\frac{S_z}{A}.
$$

This definition describes the geometric distribution of material. If the body has uniform density, the centroid of its cross section coincides with the center of mass of the corresponding lamina. If the section consists of several materials, mass-weighted and area-weighted averages can differ.

The first moment about an axis parallel to $z$ and passing through $G$ is zero, because $\int_A(y-y_G)\,dA=S_z-Ay_G=0$. The same reasoning applies to the axis parallel to $y$. This property provides a way to check the centroid coordinates using the first moments of the individual parts.
:::

:::osservazione{#simmetria-sezioni titolo="The centroid lies on an axis of symmetry"}
If reflection about a line leaves the cross section unchanged, each area element on one side has an identical counterpart the same distance away on the other side. Their first moments about the line cancel in pairs. The centroid therefore lies on the line of symmetry. Two distinct intersecting lines of symmetry determine both coordinates of $G$.

In a T-section with a centered flange, the vertical axis is a line of symmetry and therefore fixes the horizontal coordinate. The vertical coordinate depends on the areas of the web and flange and the heights of their centroids. In a concentric annulus, every diameter passes through the center. The center is therefore the centroid of the annulus even though it lies in the hole.

::struttura{riferimento=0 cerchi="0,0,30;0,0,17,foro" frecce="0,0,42,0,z;0,0,0,42,y" punti="0,0,G,baricentro" titolo="The centroid of the annulus coincides with the center of the hole"}
:::

## Adding and subtracting areas

::::teorema{#baricentro titolo="Centroid of a composite section"}
Let $A$ be a section assembled from elementary parts whose areas and centroids are known. Solid parts may share boundaries. If they overlap over a region of positive area, subtract the intersection that has been counted twice. If $A_i$ is the signed area of part $i$ and $(z_i,y_i)$ are its centroid coordinates, then

$$
A=\sum_i A_i,
\qquad
z_G=\frac{\sum_i A_i z_i}{\sum_i A_i},
\qquad
y_G=\frac{\sum_i A_i y_i}{\sum_i A_i}.
$$

Use a negative area for a hole lying entirely within the outer boundary. The coordinates of the hole's center retain their own signs. The sign of the area represents removal of the region, while the signs of the coordinates specify its position relative to the origin.

:::dimostrazione
Calculate the area and the first moment separately. Add the integrals of $1$ over solid parts and subtract those over removed parts. The integrals of $y$ are added or subtracted for the same reason. For each part, the first moment equals its area times its mean height. Thus $S_z=\sum_i A_i y_i$. Dividing by the net area $\sum_i A_i$ gives $y_G$. Integrating $z$ gives the expression for $z_G$.
:::
::::

:::esempio{titolo="Web and flange of a T-section"}
A web of width $20\,\mathrm{mm}$ and height $80\,\mathrm{mm}$ supports a centered flange of width $100\,\mathrm{mm}$ and thickness $20\,\mathrm{mm}$. Place the origin at the base of the web. The areas of the web and flange are $1\,600$ and $2\,000\,\mathrm{mm^2}$, respectively. Their centroid heights are $40$ and $90\,\mathrm{mm}$. Therefore

$$
y_G=\frac{1\,600\cdot40+2\,000\cdot90}{3\,600}\,\mathrm{mm}
=\frac{610}{9}\,\mathrm{mm}\simeq67.78\,\mathrm{mm}.
$$

The result lies between $40$ and $90\,\mathrm{mm}$ and is closer to the centroid of the flange, which has the larger area. By symmetry, $z_G=0$.

::struttura{riferimento=0 poligoni="-10,0 10,0 10,80 50,80 50,100 -50,100 -50,80 -10,80" tratteggi="-10,80 10,80" punti="0,40,G_a,centro;0,90,G_b,centro;0,67.778,G,baricentro" frecce="0,0,64,0,z;0,0,0,113,y" quote="-50 100,50 100,100 mm,-23;10 0,10 80,80 mm,11" titolo="Centroids of the web, flange, and complete section"}
:::

:::esempio{titolo="A hole below the center of the solid section"}
A rectangle measuring $80\times60\,\mathrm{mm}$ contains a square hole of side $20\,\mathrm{mm}$ centered at $(30,20)\,\mathrm{mm}$. The origin is at the lower left corner. The centroid of the solid rectangle is at height $30\,\mathrm{mm}$, and its area is $4\,800\,\mathrm{mm^2}$. The hole removes an area of $400\,\mathrm{mm^2}$ at height $20\,\mathrm{mm}$. This gives

$$
y_G=\frac{4\,800\cdot30-400\cdot20}{4\,800-400}\,\mathrm{mm}
=\frac{340}{11}\,\mathrm{mm}.
$$

To establish the direction of the shift, use the center of the outer rectangle as a reference. Relative to this point, the area removed by the hole had a negative height. Subtracting its negative contribution gives the remaining area a positive first moment. Its centroid therefore lies above the center of the outer rectangle.

::struttura{riferimento=0 poligoni="0,0 80,0 80,60 0,60" fori="20,10 40,10 40,30 20,30" punti="30,20,C,centro;40.909,30.909,G,baricentro" frecce="0,0,95,0,z;0,0,0,71,y" quote="0 60,80 60,80 mm,-8;80 0,80 60,60 mm,9" titolo="The removed area lies below the geometric center of the outer boundary"}
:::

## Second moments of area

:::definizione{#momenti-inerzia titolo="Second moment of area about an axis"}
The **second moment of area** about an axis weights each area element by the square of its distance from that axis. For the two coordinate axes,

$$
I_z=\int_A y^2\,dA,
\qquad
I_y=\int_A z^2\,dA.
$$

Because the distance is squared, portions at equal distances on opposite sides contribute equally. Thus the first moment about a centroidal axis is zero, while the second moment is positive. Its unit is $\mathrm{mm^4}$, since each contribution is a squared distance times an area.

For the same area, moving material farther from the axis increases its contribution to the second moment. In an I-section, both flanges lie some distance from the horizontal centroidal axis. Their contributions to $I_z$ therefore depend on the distance between each flange centroid and the axis of the entire section. This also explains why rotating a rectangle through $90^\circ$ can substantially change its second moment about a fixed axis.
:::

::::teorema{#inerzia-rettangolo titolo="Centroidal second moments of a rectangle"}
For a rectangle with side $b$ parallel to $z$ and side $h$ parallel to $y$, the second moments about the two axes through its center are

$$
I_z=\frac{bh^3}{12},
\qquad
I_y=\frac{hb^3}{12}.
$$

The cubed dimension is perpendicular to the axis about which the moment is calculated. If $h$ is twice $b$, then $I_z$ is four times $I_y$.

:::dimostrazione
Divide the rectangle into horizontal strips of area $b\,dy$ between the heights $-\dfrac h2$ and $\dfrac h2$. Since $y^2$ is even, both halves contribute equally. Hence

$$
I_z=2b\int_0^{h/2} y^2\,dy
=2b\,\frac{\left(\frac h2\right)^3}{3}
=\frac{bh^3}{12}.
$$

Vertical strips of area $h\,dz$ and a half-width of $\dfrac b2$ give the second formula.
:::
::::


:::esempio{titolo="Distribution of material in an I-section"}
An I-section has an overall depth of $100\,\mathrm{mm}$. Both flanges are $60\,\mathrm{mm}$ wide and $10\,\mathrm{mm}$ thick. The web is $12\,\mathrm{mm}$ thick and has a clear depth of $80\,\mathrm{mm}$. By double symmetry, $G$ lies at the intersection of the horizontal and vertical centerlines. The section can be formed from a rectangle measuring $60\times100\,\mathrm{mm}$ by subtracting two rectangular regions of width $24\,\mathrm{mm}$ and height $80\,\mathrm{mm}$. Since both removed regions are centered at height zero, their second moments about their own horizontal centerlines suffice for the calculation about the horizontal axis.

$$
I_z=\frac{60\cdot100^3-2\cdot24\cdot80^3}{12}\,\mathrm{mm^4}
=2\,952\,000\,\mathrm{mm^4}.
$$

For the vertical axis it is easier to add the second moments of the three solid parts. The web and both flanges are centered on the same vertical centerline. The two flanges can therefore be treated as identical rectangles about their centroidal axes, even though their centroids are at different heights. This gives

$$
I_y=\frac{80\cdot12^3+2\cdot10\cdot60^3}{12}\,\mathrm{mm^4}
=371\,520\,\mathrm{mm^4}.
$$

::struttura{riferimento=0 poligoni="-30,-50 30,-50 30,-40 6,-40 6,40 30,40 30,50 -30,50 -30,40 -6,40 -6,-40 -30,-40" frecce="0,0,46,0,z;0,0,0,64,y" quote="-30 50,30 50,60 mm,-23;30 -50,30 50,100 mm,28;-6 -40,-6 40,80 mm,-34" titolo="An I-section with equal flanges and a centered web"}

The positions of the flanges relative to each axis explain the difference between the two second moments. About $z$, the flanges are far away vertically and contribute substantially in addition to the web. About $y$, the vertical thickness of the flanges appears as a linear factor, and the entire web is concentrated close to the centerline. Compared with the solid outer rectangle, material has been removed over the full depth of the web and across much of the width. The ratio of area removed to second moment removed therefore depends on the choice of axis.

In the subtraction method the two voids have a combined width of $48\,\mathrm{mm}$. In the addition method the web has width $12\,\mathrm{mm}$. Their sum gives the outer width of $60\,\mathrm{mm}$, confirming that the three portions account for the entire width at the horizontal centerline. This geometric check prevents the web thickness from being used in the term for the void.
:::

## Shifting to a parallel axis

::::teorema{#steiner titolo="Parallel-axis theorem"}
Let $z_G$ be the horizontal axis through the centroid $G$ of a section. An axis $z$ parallel to $z_G$ lies a distance $d$ away. The second moment of area about $z$ is

$$
I_z=I_{z,G}+Ad^2,
$$

where $I_{z,G}$ is the second moment about $z_G$. The same formula applies to any other pair of parallel axes. For a given direction, the second moment is smallest about the axis through the centroid. Any parallel shift adds the positive contribution $Ad^2$.

:::dimostrazione
Measure the height $\eta$ of each element from the centroidal axis. Let $d$ be the signed displacement from $z$ to the centroidal axis. The height relative to $z$ is $y=\eta+d$. Expanding the square in the integral gives

$$
\begin{aligned}
I_z
&=\int_A \eta^2\,dA+2d\int_A \eta\,dA+d^2\int_A dA\\[6pt]
&=I_{z,G}+Ad^2.
\end{aligned}
$$

The integral of $\eta$ is the first moment about the centroidal axis and is zero. The direction of the shift appears only in this vanishing linear term. The square of the distance therefore remains.
:::
::::

:::esempio{titolo="Second moment of a rectangle about an edge"}
A rectangle of width $30\,\mathrm{mm}$ and height $40\,\mathrm{mm}$ has area $1\,200\,\mathrm{mm^2}$. Its second moment about its horizontal centroidal axis is $160\,000\,\mathrm{mm^4}$. The lower edge is a distance $20\,\mathrm{mm}$ from this axis. Thus

$$
I_z=160\,000+1\,200\cdot20^2
=640\,000\,\mathrm{mm^4}.
$$

Direct integration over the rectangle gives $30\displaystyle\int_0^{40}y^2\,dy=640\,000$, in $\mathrm{mm^4}$. The two calculations use the same geometry with different references. The first transfers the centroidal second moment to a parallel axis. The second measures all heights from the lower edge.

::struttura{riferimento=0 poligoni="0,0 30,0 30,40 0,40" tratteggi="-7,20 41,20" etichette="46,20,z_G" frecce="0,0,49,0,z;0,0,0,52,y" quote="30 0,30 20,20 mm,10" titolo="Axis along the lower edge and parallel centroidal axis"}
:::

:::osservazione{titolo="Transferring the contributions of a hollow section"}
For a composite section all contributions must refer to a common axis. Transfer each centroidal second moment to that axis, then add the contributions from solid parts and subtract those from removed parts. For an eccentric hole of positive area $A_f$ whose centroid is a distance $d_f$ from the common axis, subtract $I_{z,f,G}+A_f d_f^2$. If the hole is centered on the axis, the distance $d_f$ is zero, leaving only the centroidal term. This calculation distinguishes the effect of the hole's shape from that of its position.
:::

## Product of inertia

:::definizione{#prodotto-inerzia titolo="Product of inertia and signs in the four quadrants"}
Calculating second moments about inclined axes also requires products of the two coordinates. The **product of inertia** is

$$
I_{yz}=\int_A yz\,dA.
$$

Under the convention used here, the product is positive if the quadrants where $y$ and $z$ have the same sign contribute more. It is negative if the quadrants where their signs differ contribute more. Its unit is $\mathrm{mm^4}$.

If the cross section is symmetric about the $y$ axis, every point $(z,y)$ has a counterpart $(-z,y)$ with the same area element. The two portions contribute products of opposite signs. Thus $I_{yz}=0$. The same holds for symmetry about $z$. In both cases, choose the centroidal axes along the axis of symmetry and perpendicular to it.
:::

::::teorema{#trasporto-prodotto titolo="Transferring the product of inertia to parallel axes"}
Let $G=(z_G,y_G)$ be the centroid of the section in the given coordinate system. If $I_{yz,G}$ denotes the product of inertia about parallel axes through $G$, then

$$
I_{yz}=I_{yz,G}+Ay_Gz_G.
$$

The transfer term depends on the quadrant containing $G$. For a composite section, apply the formula separately to each part, measuring all centroid coordinates in the same frame.

:::dimostrazione
Write $y=\eta+y_G$ and $z=\zeta+z_G$, where $\eta$ and $\zeta$ are centroidal coordinates. Their product contains four terms. Integrating $\eta\zeta$ gives $I_{yz,G}$. The terms $z_G\eta$ and $y_G\zeta$ have zero integrals because the means of $\eta$ and $\zeta$ over the section are zero. The constant term $y_Gz_G$ gives $Ay_Gz_G$.
:::
::::

:::esempio{titolo="Sign of the product of inertia of an angle section"}
An equal-leg angle has an outside leg length of $60\,\mathrm{mm}$ and thickness $10\,\mathrm{mm}$. Divide it into a horizontal rectangle and the vertical portion above it. Relative to $G$, the centroid of the first rectangle lies to the right and below, and that of the second lies to the left and above. Each rectangle has a zero centroidal product of inertia. Both transfer terms are therefore negative. For centroidal axes parallel to the legs, the product of inertia of the angle is negative.

::struttura{riferimento=0 poligoni="0,0 60,0 60,10 10,10 10,60 0,60" tratteggi="0,10 10,10" punti="30,5,G_a,centro;5,35,G_b,centro;18.636,18.636,G,baricentro" frecce="18.636,18.636,74,18.636,z_G;18.636,18.636,18.636,71,y_G" titolo="Centroids of the two parts in quadrants with a negative coordinate product"}
:::

## Rotation and principal axes

::::teorema{#rotazione-assi titolo="Second moment of area about a rotated axis"}
Consider a centroidal coordinate system in the $(z,y)$ plane. The $z^\prime$ axis is obtained by rotating $z$ toward $y$ through an angle $\theta$. The point's coordinates in the new system are $y^\prime=y\cos\theta-z\sin\theta$ and $z^\prime=z\cos\theta+y\sin\theta$. The second moment about $z^\prime$ is

$$
I_{z^\prime}
=I_z\cos^2\theta+I_y\sin^2\theta
-2I_{yz}\sin\theta\cos\theta.
$$

The formula gives $I_z$ for $\theta=0$ and $I_y$ for $\theta=90^\circ$. The sign of the cross term depends both on the direction of rotation and on the sign convention for $I_{yz}$.

:::dimostrazione
The signed distance from $z^\prime$ is the coordinate $y^\prime$. Squaring its expression and integrating, the terms in $y^2$ and $z^2$ give the moments $I_z$ and $I_y$. Twice the product of $y\cos\theta$ and $-z\sin\theta$ gives the contribution $-2I_{yz}\sin\theta\cos\theta$. The same procedure, integrating $y^\prime z^\prime$, gives

$$
I_{y^\prime z^\prime}
=I_{yz}\cos(2\theta)
+\frac{I_z-I_y}{2}\sin(2\theta).
$$
:::
::::

:::esempio{titolo="Rotation in the plane of a rectangle"}
For a rectangle of width $80\,\mathrm{mm}$ and height $40\,\mathrm{mm}$, symmetry makes the product of inertia zero. Since $I_y=4I_z$, a rotation of $30^\circ$ from $z$ toward $y$ gives $I_{z^\prime}=\dfrac34 I_z+\dfrac14 I_y=\dfrac74 I_z$. The result is closer to the second moment about the horizontal axis because the squared cosine weights that axis's contribution by three quarters.

::struttura{riferimento=0 poligoni="-40,-20 40,-20 40,20 -40,20" frecce="0,0,57,0,z;0,0,0,34,y;0,0,48,27.713,z′" quote="-40 -20,40 -20,80 mm,8;40 -20,40 20,40 mm,26" titolo="Rectangle with an axis inclined at 30° to z"}
:::

::::teorema{#assi-principali titolo="Principal axes and principal second moments of area"}
The **principal axes** are orthogonal centroidal axes for which the product of inertia vanishes. The second moments about these two axes are the maximum and minimum over all centroidal axes. Their values are

$$
I_{\max,\min}=\frac{I_y+I_z}{2}
\pm\sqrt{\left(\frac{I_y-I_z}{2}\right)^2+I_{yz}^2}.
$$

To find the directions, solve $I_{y^\prime z^\prime}=0$ and substitute the angle into the expression for $I_{z^\prime}$ to determine which value it gives. If $I_y=I_z$ and $I_{yz}=0$, every pair of orthogonal centroidal axes is principal.

:::dimostrazione
Rewrite the rotation formula in terms of double angles. The variable part is a combination of the sine and cosine of $2\theta$,

$$
I_{z^\prime}-\frac{I_y+I_z}{2}
=\frac{I_z-I_y}{2}\cos(2\theta)-I_{yz}\sin(2\theta).
$$

The maximum of this combination is the square root of the sum of the squared coefficients. Its minimum is the negative of that value. If the square root is positive, the two directions differ by $90^\circ$. Moreover, the derivative with respect to $\theta$ is $-2I_{y^\prime z^\prime}$. The product of inertia therefore vanishes precisely in the stationary directions.
:::
::::

## Polar moment and radii of gyration

:::definizione{#momento-polare titolo="Polar moment of inertia"}
The **polar moment** $I_p$ about the origin is the integral of the squared distance from the origin. Since that squared distance is $y^2+z^2$,

$$
I_p=\int_A(y^2+z^2)\,dA=I_y+I_z.
$$

This sum is invariant when the axes rotate about the same origin. For a concentric annulus with inner radius $r$ and outer radius $R$, a thin ring of radius $\rho$ and thickness $d\rho$ has area $2\pi\rho\,d\rho$. Every point on the ring is the same distance $\rho$ from the center. It follows that

$$
I_p=2\pi\int_r^R\rho^3\,d\rho
=\frac{\pi}{2}(R^4-r^4).
$$

Since an annulus has the same second moment about every diameter, $I_y=I_z=\dfrac{I_p}{2}$. For circular sections, the polar moment enters the torsion calculation. For other shapes, the torsion constant must be obtained from the Saint-Venant torsion model for that cross section.
:::

:::definizione{#raggio-inerzia titolo="Radius of gyration about an axis"}
The **radius of gyration** $\rho_z$ is the distance from the axis at which the entire area $A$ could be concentrated to give the same second moment $I_z$. The identity $A\rho_z^2=I_z$ yields

$$
\rho_z=\sqrt{\frac{I_z}{A}}.
$$

The result is a length. The area of a section is the same for both principal axes, so the smaller second moment also corresponds to the smaller radius of gyration. When the end conditions are the same in both planes of buckling, this is the first direction to examine in the chapter on stability. If the restraints differ, the effective buckling lengths in the two planes must also be compared.
:::

## Section moduli at the extreme fibers and unit checks

:::definizione{#modulo-resistente titolo="Elastic section modulus"}
Let $z_G$ be a horizontal principal axis. Let $c_{\mathrm{upper}}$ and $c_{\mathrm{lower}}$ be the positive distances of the top and bottom fibers from that axis. The two **elastic section moduli** are

$$
W_{\mathrm{upper}}=\frac{I_z}{c_{\mathrm{upper}}},
\qquad
W_{\mathrm{lower}}=\frac{I_z}{c_{\mathrm{lower}}}.
$$

If the section is symmetric about $z_G$, the two extreme fibers are equally distant and their section moduli are equal. For an asymmetric section, the farther fiber has the smaller section modulus. The flexure formula, discussed in the chapter on the Saint-Venant problem, uses the section modulus for the fiber under consideration. The section modulus is measured in $\mathrm{mm^3}$ because it is a second moment in $\mathrm{mm^4}$ divided by a distance in $\mathrm{mm}$.
:::

:::esempio{titolo="Extreme fiber distances in the T-section"}
For the T-section with overall depth $100\,\mathrm{mm}$ and centroid height $\dfrac{610}{9}\,\mathrm{mm}$, the distances are $c_{\mathrm{lower}}=\dfrac{610}{9}\,\mathrm{mm}$ and $c_{\mathrm{upper}}=\dfrac{290}{9}\,\mathrm{mm}$. The same $I_z$ appears in both ratios. Hence $\dfrac{W_{\mathrm{upper}}}{W_{\mathrm{lower}}}=\dfrac{61}{29}$. This comparison can be made as soon as $G$ is known, before calculating the second moment.

::struttura{riferimento=0 poligoni="-10,0 10,0 10,80 50,80 50,100 -50,100 -50,80 -10,80" tratteggi="-54,67.778 54,67.778" punti="0,67.778,G,baricentro" frecce="0,0,68,0,z;0,0,0,114,y" quote="50 67.778,50 100,c_sup,13;50 0,50 67.778,c_inf,13" titolo="Different distances from the extreme fibers to the centroidal axis"}
:::

:::osservazione{#scala-sezioni titolo="Geometric similarity and unit conversion"}
If all linear dimensions of a section are multiplied by $\lambda>0$, its area is multiplied by $\lambda^2$. Each first moment is multiplied by $\lambda^3$ because an area is weighted by one power of distance. Each second moment is multiplied by $\lambda^4$ because distance is squared. The section modulus is multiplied by $\lambda^3$ and the radius of gyration by $\lambda$. These scaling laws apply when corresponding axes are compared in the two geometries.

The same powers govern unit conversions. Since $1\,\mathrm{cm}=10\,\mathrm{mm}$, it follows that $1\,\mathrm{cm^4}=10^4\,\mathrm{mm^4}$. For example, $864\,\mathrm{cm^4}$ is equivalent to $8.64\cdot10^6\,\mathrm{mm^4}$. If an area or length is to be used with dimensions in millimeters, convert it before applying the parallel-axis theorem. Both terms in $I_{z,G}+Ad^2$ will then be expressed in the same units.
:::
