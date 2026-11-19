---
titolo: "Geometric properties of areas: centroids and second moments of area"
sommario: "How to calculate areas, first moments, centroids and second moments of beam cross sections, including composite and perforated sections, and how to find the principal axes and principal moments of area."
---

## Plane areas and first moments

:::definizione{#figura-piana titolo="Cross section and plane area"}
The **cross section** of a beam is the region occupied by material when a plane perpendicular to the beam axis cuts through it. In studying its geometric properties we treat the section as a plane figure, denoted by $A$, the same symbol used for its area. We choose Cartesian axes $x$ and $y$ in its plane and divide the region into area elements $dA$ small enough to be identified by their positions $(x, y)$ alone.

The quantities studied here depend only on the shape and dimensions of the section. The connection with mass geometry comes from the analogy with a homogeneous plate, in which the mass of each part is proportional to its area. Lengths are measured in $\mathrm{cm}$ (or $\mathrm{mm}$), and areas in $\mathrm{cm^2}$.
:::

:::richiamo{titolo="Definite integral"}
For a function $f$ continuous on $[a, b]$, the integral $\displaystyle\int_a^b f(t)\,dt$ is the limit of the sums $\sum_k f(t_k)\,\Delta t_k$ as the widths of the intervals $\Delta t_k$ tend to zero. If $F$ is an antiderivative of $f$, then $\displaystyle\int_a^b f(t)\,dt = F(b) - F(a)$. See the chapter on integral calculus in Mathematical Analysis 1.
:::

:::definizione{#momento-statico titolo="First moment of area"}
The **first moments of area** of the figure $A$ about the $x$- and $y$-axes are
$$
S_x = \int_A y\,dA ,
\qquad
S_y = \int_A x\,dA ,
$$
and are measured in $\mathrm{cm^3}$. Each element contributes its area multiplied by its signed distance from the axis. For $S_x$, the relevant coordinate is the ordinate $y$, which is the distance from the $x$-axis. Elements on opposite sides of the axis make contributions of opposite signs, so a first moment can be positive, negative or zero. The first moment is **additive**: when a region is divided into nonoverlapping parts, its first moment is the sum of the first moments of the parts.

When the integrand depends only on $y$, divide the region into thin strips parallel to the $x$-axis. The strip at height $y$ has width $b(y)$ and height $dy$, giving area $dA = b(y)\,dy$. The area integral then becomes an integral in one variable. For a rectangle of base $b$ and height $h$ with its base on the $x$-axis, the width is constant, so
$$
S_x = \int_0^h y\,b\,dy = \frac{b h^2}{2} .
$$
For a rectangle of width $6\,\mathrm{cm}$ and height $10\,\mathrm{cm}$ this gives $S_x = 300\,\mathrm{cm^3}$. The first moment is used to locate the centroid and, in Mechanics of Materials, to calculate the shear stresses due to a transverse shear force.

::struttura{poligoni="1,1 7,0.5 8.6,3.6 6,6.2 2,5.6" punti="5.5,3.2,dA;0,0,O" tratteggi="5.5,3.2 5.5,0;5.5,3.2 0,3.2" frecce="0,0,10,0,x;0,0,0,7.6,y" etichette="5.85,1.5,y;2.6,3.55,x" riferimento=0 titolo="An area element $dA$ at $(x, y)$ contributes to $S_x$ by $y\,dA$ and to $S_y$ by $x\,dA$"}

:::

## Centroid

:::definizione{#baricentro titolo="Centroid"}
The **centroid** of a plane area is the point $G$ with coordinates
$$
x_G = \frac{S_y}{A} ,
\qquad
y_G = \frac{S_x}{A} .
$$
In other words, all the area can be concentrated at $G$ without changing its first moments, since $S_x = A\,y_G$ and $S_y = A\,x_G$. For a rectangle of base $6\,\mathrm{cm}$ and height $10\,\mathrm{cm}$ with one vertex at the origin and its sides along the axes, $S_y = 180\,\mathrm{cm^3}$ and $S_x = 300\,\mathrm{cm^3}$, giving $G = (3, 5)\,\mathrm{cm}$, the center of the rectangle. The axes through $G$ parallel to $x$ and $y$ are called **centroidal axes** and are denoted by $x_G$ and $y_G$.
:::

::::teorema{#momento-statico-baricentro titolo="First moment about a centroidal axis"}
Let $r$ be a line in the plane of a figure and $d_G$ the signed distance of its centroid from $r$. Then the first moment of area about $r$ is
$$
S_r = A\,d_G .
$$
In particular, the first moment about a line through $G$ is zero, and any line about which the first moment is zero passes through $G$. This gives an immediate check on a calculated centroid: the first moments of the component areas about the calculated centroidal axis must sum to zero.

:::dimostrazione
Choose coordinates with the $x$-axis on the line $r$ and with positive distances corresponding to $y > 0$. The signed distance from $G$ to $r$ is then $d_G = y_G$, and the definition of the centroid gives $S_r = S_x = A\,y_G = A\,d_G$. If $r$ passes through $G$, then $d_G = 0$, so $S_r = 0$. Conversely, if $S_r = 0$, then $A\,d_G = 0$. Since $A > 0$, it follows that $d_G = 0$, so $G$ lies on $r$.
:::
::::

::::teorema{#simmetria-baricentro titolo="Centroid of a symmetric area"}
If a plane area has an axis of symmetry, its centroid lies on that axis. If it has two axes of symmetry, their intersection is the centroid. Thus the centroid of a rectangle, a circle, an annulus or an I-section with equal flanges is its center. For a T-section or a channel section, only one centroid coordinate needs to be calculated.

:::dimostrazione
Take the $y$-axis along the axis of symmetry. For every element $dA$ at $(x, y)$, symmetry supplies an element of equal area at $(-x, y)$. Their contributions to $S_y$ are $x\,dA$ and $-x\,dA$, which sum to zero, so $S_y = 0$. Thus $x_G = \dfrac{S_y}{A} = 0$, and $G$ lies on the $y$-axis. With two axes of symmetry $G$ lies on both and must therefore be their intersection.
:::
::::

::::teorema{#baricentro-per-composizione titolo="Centroid of a composite area"}
Divide the region into nonoverlapping parts $A_1, \ldots, A_n$ and let $(x_i, y_i)$ be the centroid of part $A_i$. Then
$$
x_G = \frac{\sum_i A_i\,x_i}{\sum_i A_i} ,
\qquad
y_G = \frac{\sum_i A_i\,y_i}{\sum_i A_i} .
$$
Treat a hole as a part with negative area. The remaining region is the solid area minus the hole, so subtract both the area and the first moment of the hole. This formula gives the centroid of a section made up of rectangles without integration.

:::dimostrazione
By additivity of the first moment, $S_x = \sum_i S_{x,i}$, and the definition of the centroid applied to each part gives $S_{x,i} = A_i\,y_i$. The total area is $A = \sum_i A_i$, so $y_G = \dfrac{S_x}{A} = \dfrac{\sum_i A_i\,y_i}{\sum_i A_i}$. For $x_G$ the same argument uses $S_y$. If the region is $A_1$ with a hole $A_2$ removed, the complete solid region is the union of the remaining region and the hole. We therefore obtain the first moments of the region with the hole by subtracting those of $A_2$ from those of $A_1$.
:::
::::

:::esempio{titolo="Centroid of a T-section"}
The T-section shown consists of a flange measuring $8 \times 2\,\mathrm{cm}$ and a web measuring $2 \times 8\,\mathrm{cm}$. The $y$-axis is an axis of symmetry, so $x_G = 0$. Taking the $x$-axis along the bottom edge, the web has area $16\,\mathrm{cm^2}$ and centroid at height $4\,\mathrm{cm}$, while the flange has area $16\,\mathrm{cm^2}$ and centroid at height $9\,\mathrm{cm}$. Therefore
$$
y_G = \frac{16 \cdot 4 + 16 \cdot 9}{16 + 16}\,\mathrm{cm} = \frac{208}{32}\,\mathrm{cm} = 6.5\,\mathrm{cm} .
$$
As a check, the first moments of the two parts about the $x_G$-axis are $16 \cdot (4 - 6.5) = -40\,\mathrm{cm^3}$ and $16 \cdot (9 - 6.5) = 40\,\mathrm{cm^3}$, and they sum to zero.

::struttura{poligoni="-1,0 1,0 1,8 4,8 4,10 -4,10 -4,8 -1,8" punti="0,6.5,G,baricentro" tratteggi="-5.5,6.5 5.5,6.5" frecce="-5.5,0,6,0,x;0,-0.6,0,11.6,y" etichette="6.1,6.8,x_G" quote="-4 10,4 10,8 cm,-1.9;-1 0,1 0,2 cm,1.1;4 0,4 10,10 cm,1.3;-4 8,-4 10,2 cm,-0.8" riferimento=0 titolo="T-section with symmetry axis $y$. The centroid $G$ is a distance $y_G = 6.5\,\mathrm{cm}$ above the bottom edge"}

:::

::::teorema{#baricentri-notevoli titolo="Centroids of a triangle and a semicircle"}
- The centroid of a triangle lies one third of the corresponding altitude from each side, at the intersection of the medians. For a right triangle with legs $b$ and $h$ along the $x$- and $y$-axes and its right angle at the origin, $G = \left( \dfrac{b}{3}, \dfrac{h}{3} \right)$.
- The centroid of a semicircle of radius $r$ lies on its axis of symmetry, a distance $\dfrac{4r}{3\pi}$ from its diameter.

For a right triangle with legs of length $6\,\mathrm{cm}$ along $x$ and $9\,\mathrm{cm}$ along $y$, the centroid is $G = (2, 3)\,\mathrm{cm}$. For a semicircle of radius $6\,\mathrm{cm}$, the centroid lies $\dfrac{8}{\pi}\,\mathrm{cm} = 2.55\,\mathrm{cm}$ from the diameter. These results apply to composite sections containing triangular or semicircular parts.

::struttura{poligoni="0,0 6,0 2,9" frecce="0,0,8,0,x;0,0,0,10.4,y" tratteggi="0.89,4 4.22,4;0.8,3.6 4.4,3.6;-0.6,3 6.6,3" punti="2.67,3,G,baricentro" etichette="2.55,4.35,b(y);4.9,3.85,dy" quote="0 0,6 0,b,0.8;6 0,6 9,h,1" riferimento=0 titolo="The strip at height $y$ has width $b(y) = b\left(1 - \dfrac{y}{h}\right)$. The centroid is a distance $\dfrac{h}{3}$ from the base"}

:::dimostrazione
Place the triangle's base $b$ on the $x$-axis, with the opposite vertex at height $h$. The strip at height $y$ is parallel to the base, and similar triangles give its width as $b(y) = b\left(1 - \dfrac{y}{h}\right)$. Hence
$$
S_x = \int_0^h y\,b\left(1 - \frac{y}{h}\right) dy = b\left( \frac{h^2}{2} - \frac{h^2}{3} \right) = \frac{b h^2}{6} ,
\qquad
y_G = \frac{S_x}{A} = \frac{\dfrac{b h^2}{6}}{\dfrac{b h}{2}} = \frac{h}{3} .
$$
The same calculation applies when any of the three sides is taken as the base. Place the diameter of the semicircle on the $x$-axis with the center at the origin. The strip at height $y$ has width $2\sqrt{r^2 - y^2}$, so
$$
S_x = \int_0^r 2y\sqrt{r^2 - y^2}\,dy = \left[ -\frac{2}{3}\,(r^2 - y^2)^{\frac{3}{2}} \right]_0^r = \frac{2r^3}{3} ,
\qquad
y_G = \frac{\dfrac{2r^3}{3}}{\dfrac{\pi r^2}{2}} = \frac{4r}{3\pi} .
$$
:::
::::

## Second moments of area

The centroid specifies the mean position of an area. Second moments measure how far that area is distributed from an axis.

:::definizione{#momenti-d-inerzia titolo="Second moments about axes, product of inertia and polar moment"}
The **second moments of area** about the $x$- and $y$-axes, the **product of inertia** and the **polar moment** about the origin $O$ are
$$
I_x = \int_A y^2\,dA ,
\qquad
I_y = \int_A x^2\,dA ,
\qquad
I_{xy} = \int_A x y\,dA ,
\qquad
I_p = \int_A (x^2 + y^2)\,dA = I_x + I_y ,
$$
and are measured in $\mathrm{cm^4}$. In $I_p$ the integrand contains the square of the distance $\sqrt{x^2 + y^2}$ of each element from $O$. The moments $I_x$, $I_y$ and $I_p$ are always positive because their integrands are squares. The product of inertia may have either sign. Like first moments, all these quantities are additive.

The second moment of area increases as more area lies far from the axis because each element is weighted by the square of its distance. In Mechanics of Materials, the bending stiffness of a beam is proportional to the second moment of its section about the centroidal axis around which the section rotates. This is why steel I-beams have much of their area in the flanges, far from that axis. For a rectangle of base $b$ and height $h$ with its base on the $x$-axis, horizontal strips give
$$
I_x = \int_0^h y^2\,b\,dy = \frac{b h^3}{3} .
$$
:::

::::teorema{#centrifugo-simmetria titolo="Product of inertia and symmetry"}
If either of the axes $x$ and $y$ is an axis of symmetry, $I_{xy} = 0$. Thus for T-sections, I-sections and channels, each of which has an axis of symmetry, the product of inertia about centroidal axes parallel to their sides is zero. For L- and Z-sections without axes of symmetry, it must be calculated.

:::dimostrazione
Suppose the $y$-axis is an axis of symmetry. For every element $dA$ at $(x, y)$ there is an element of equal area at the symmetric point $(-x, y)$. Their contributions to $I_{xy}$ are $x y\,dA$ and $-x y\,dA$. These sum to zero, giving $I_{xy} = 0$. If $x$ is the symmetry axis, interchange $x$ and $y$.
:::
::::

:::attenzione
The product of inertia depends on the pair of axes. A rectangle may have a nonzero product of inertia about axes that are not axes of symmetry. For a rectangle of base $b$ and height $h$ with a vertex at the origin and sides along the positive axes, the strip at height $y$ extends from $x = 0$ to $x = b$, so
$$
I_{xy} = \int_0^h y \left( \int_0^b x\,dx \right) dy = \frac{b^2}{2} \cdot \frac{h^2}{2} = \frac{b^2 h^2}{4} > 0 .
$$
:::

## Parallel-axis theorem

The following theorem relates the second moment about an arbitrary axis to that about the parallel centroidal axis, which is known for elementary shapes.

::::teorema{#huygens-steiner titolo="Parallel-axis theorem"}
Let $G = (x_G, y_G)$ be the centroid of a region of area $A$, and let $x_G$ and $y_G$ be the centroidal axes parallel to the $x$- and $y$-axes. Then
$$
I_x = I_{x_G} + A\,y_G^2 ,
\qquad
I_y = I_{y_G} + A\,x_G^2 ,
\qquad
I_{xy} = I_{x_G y_G} + A\,x_G\,y_G .
$$
The second moment about an axis thus equals the second moment about the parallel centroidal axis plus the area times the square of the distance between the axes. Among all axes parallel to a given direction, the centroidal axis gives the smallest second moment. The coordinates $x_G$ and $y_G$ in the parallel-axis term for the product of inertia are signed. For a rectangle of base $12\,\mathrm{cm}$ and height $20\,\mathrm{cm}$, the moment about the base is $I_x = 8000 + 240 \cdot 10^2 = 32\,000\,\mathrm{cm^4}$, which equals $\dfrac{b h^3}{3}$.

::struttura{poligoni="1,2 5,2 5,8 1,8" punti="3,5,G,baricentro" tratteggi="-0.5,5 7,5" frecce="-0.5,0,7.5,0,x" etichette="7.4,5.3,x_G" quote="6 0,6 5,y_G,0.8" riferimento=0 titolo="The axes $x$ and $x_G$ are parallel and a distance $y_G$ apart, so $I_x = I_{x_G} + A\,y_G^2$"}

:::dimostrazione
Write the coordinates of each element as $x = x_G + u$ and $y = y_G + v$, where $(u, v)$ are the coordinates relative to the centroidal axes. Then
$$
I_x = \int_A (y_G + v)^2\,dA = y_G^2 \int_A dA + 2y_G \int_A v\,dA + \int_A v^2\,dA .
$$
The first term is $A\,y_G^2$ and the last is $I_{x_G}$. The integral $\displaystyle\int_A v\,dA$ is the first moment about the centroidal $x_G$-axis. This first moment vanishes by the theorem on first moments about centroidal axes, so $I_x = I_{x_G} + A\,y_G^2$. For $I_y$, the same calculation uses $u$. For the product of inertia,
$$
I_{xy} = \int_A (x_G + u)(y_G + v)\,dA = A\,x_G\,y_G + x_G \int_A v\,dA + y_G \int_A u\,dA + \int_A u v\,dA ,
$$
and the two middle integrals vanish because they are first moments about centroidal axes. This leaves $I_{xy} = I_{x_G y_G} + A\,x_G\,y_G$.
:::
::::

:::attenzione
The theorem connects an arbitrary axis to its parallel centroidal axis. To move between two parallel axes neither of which passes through $G$, use the centroidal axis as an intermediate step. For a rectangle of base $b$ and height $h$ the second moment about its top edge is $\dfrac{b h^3}{3}$, equal to the second moment about its base. Adding $A h^2$ to the moment about the base would give the incorrect value $\dfrac{4 b h^3}{3}$.
:::

## Second moments of elementary shapes

::::teorema{#momenti-notevoli titolo="Second moments of a rectangle, triangle, circle and annulus"}
The following second moments refer to the indicated centroidal axes.

- Rectangle of base $b$ (along $x$) and height $h$: $I_{x_G} = \dfrac{b h^3}{12}$, $I_{y_G} = \dfrac{h b^3}{12}$, $I_{x_G y_G} = 0$. About the base, $I = \dfrac{b h^3}{3}$.
- Triangle of base $b$ and height $h$: the second moment about the centroidal axis parallel to the base is $I = \dfrac{b h^3}{36}$, and about the base it is $I = \dfrac{b h^3}{12}$. For a right triangle with leg $b$ parallel to $x$, leg $h$ parallel to $y$ and the right angle at the lower left, $I_{x_G y_G} = -\dfrac{b^2 h^2}{72}$.
- Circle of radius $r$: $I_{x_G} = I_{y_G} = \dfrac{\pi r^4}{4}$, with polar moment $I_p = \dfrac{\pi r^4}{2}$ about its center.
- Annulus with radii $R$ and $r < R$: $I_{x_G} = I_{y_G} = \dfrac{\pi (R^4 - r^4)}{4}$.

A rectangle of base $12\,\mathrm{cm}$ and height $20\,\mathrm{cm}$ has $I_{x_G} = \dfrac{12 \cdot 20^3}{12} = 8000\,\mathrm{cm^4}$ and $I_{y_G} = \dfrac{20 \cdot 12^3}{12} = 2880\,\mathrm{cm^4}$. The same section is nearly three times as stiff when bent about the axis parallel to its shorter side. An annulus with radii $6\,\mathrm{cm}$ and $5\,\mathrm{cm}$ has $I_{x_G} = \dfrac{\pi (1296 - 625)}{4} = 527\,\mathrm{cm^4}$ and area $34.6\,\mathrm{cm^2}$, whereas a solid circle of the same area, with radius $3.32\,\mathrm{cm}$, has $I_{x_G} = 95\,\mathrm{cm^4}$.

::struttura{poligoni="0,0 4,0 4,6 0,6;9,0 13,0 9,6" cerchi="19,3,2.2;26.5,3,2.2;26.5,3,1.6,foro" punti="2,3,G,baricentro;10.33,2,G,baricentro;19,3,G,baricentro;26.5,3,G,baricentro" frecce="-0.6,3,5,3,x_G;2,-0.6,2,7.2,y_G;8.4,2,14,2,x_G;10.33,-0.6,10.33,7.2,y_G;16.3,3,21.9,3,x_G;19,0.3,19,6.2,y_G;23.8,3,29.4,3,x_G;26.5,0.3,26.5,6.2,y_G" quote="0 0,4 0,b,0.8;0 0,0 6,h,-0.8;9 0,13 0,b,0.8;9 0,9 6,h,-0.8" riferimento=0 titolo="Rectangle, right triangle, circle and annulus with centroidal axes parallel to the $x$- and $y$-axes"}

:::dimostrazione
For the rectangle referred to centroidal axes, the strip at height $y$ has width $b$, so $I_{x_G} = \displaystyle\int_{-\frac{h}{2}}^{\frac{h}{2}} y^2\,b\,dy = \dfrac{b h^3}{12}$. Interchanging $b$ and $h$ gives $I_{y_G}$, and the theorem on the product of inertia and symmetry gives $I_{x_G y_G} = 0$. By the **parallel-axis theorem**, the second moment about the base is $I = \dfrac{b h^3}{12} + b h \left( \dfrac{h}{2} \right)^2 = \dfrac{b h^3}{3}$.

For a triangle with its base on the $x$-axis, the strip at height $y$ has width $b\left(1 - \dfrac{y}{h}\right)$. Therefore
$$
I_{\text{base}} = \int_0^h y^2\,b\left(1 - \frac{y}{h}\right) dy = b\left( \frac{h^3}{3} - \frac{h^3}{4} \right) = \frac{b h^3}{12} .
$$
The centroid is a distance $\dfrac{h}{3}$ from the base, so the parallel-axis theorem gives $I = \dfrac{b h^3}{12} - \dfrac{b h}{2} \cdot \dfrac{h^2}{9} = \dfrac{b h^3}{36}$. For a right triangle with its right angle at the origin and its legs along the positive axes, the strip at height $y$ extends from $x = 0$ to $x = b\left(1 - \dfrac{y}{h}\right)$. Therefore
$$
I_{xy} = \int_0^h y\,\frac{b^2}{2}\left(1 - \frac{y}{h}\right)^2 dy = \frac{b^2}{2}\left( \frac{h^2}{2} - \frac{2h^2}{3} + \frac{h^2}{4} \right) = \frac{b^2 h^2}{24} ;
$$
the centroid is $\left( \dfrac{b}{3}, \dfrac{h}{3} \right)$, and the parallel-axis theorem gives $I_{x_G y_G} = \dfrac{b^2 h^2}{24} - \dfrac{b h}{2} \cdot \dfrac{b}{3} \cdot \dfrac{h}{3} = -\dfrac{b^2 h^2}{72}$.

For the circle, first calculate the polar moment by dividing the region into thin rings of radius $\rho$, thickness $d\rho$ and area $2\pi\rho\,d\rho$. All points on each ring are a distance $\rho$ from the center:
$$
I_p = \int_0^r \rho^2 \cdot 2\pi\rho\,d\rho = \frac{\pi r^4}{2} .
$$
The circle is symmetric about every diameter, so $I_{x_G} = I_{y_G}$. Since $I_{x_G} + I_{y_G} = I_p$, each moment is $\dfrac{\pi r^4}{4}$. The annulus consists of the circle of radius $R$ with the concentric circle of radius $r$ removed, so its second moment is the difference between the two.
:::
::::

## Composite sections: T, L, I and channel sections

Most beam cross sections can be divided into rectangles. The same procedure applies to each shape.

:::osservazione{#sezioni-composte titolo="Procedure for composite sections"}
To calculate the centroid and the centroidal second moments of a composite section, use the following steps.

1. Divide the section into nonoverlapping elementary areas $A_i$. Treat holes as negative areas.
2. Use any axes of symmetry, then find the centroid $G$ from the formula for the centroid of a composite area.
3. For each part, write its moments about its own centroidal axes and use the parallel-axis theorem to transfer them to the centroidal axes $x_G$ and $y_G$ of the whole section, using the offsets $y_i - y_G$ and $x_i - x_G$.
4. Add the contributions from the constituent parts, subtracting the contributions from holes.

The offsets in step 3 are measured from the centroid of the whole section. Their signs matter only in the product of inertia.
:::

:::esempio{titolo="Second moments of the T-section"}
For the T-section in the centroid example, with $y_G = 6.5\,\mathrm{cm}$, the flange centroid is a distance $9 - 6.5 = 2.5\,\mathrm{cm}$ from the $x_G$-axis and the web centroid is a distance $4 - 6.5 = -2.5\,\mathrm{cm}$ from it. Therefore
$$
\begin{aligned}
I_{x_G} &= \left( \frac{8 \cdot 2^3}{12} + 16 \cdot 2.5^2 \right) + \left( \frac{2 \cdot 8^3}{12} + 16 \cdot 2.5^2 \right) \\[6pt]
&= (5.33 + 100) + (85.33 + 100) = 290.67\,\mathrm{cm^4} ,
\end{aligned}
$$
whereas for $y_G$, which passes through the centroids of both parts, the parallel-axis terms vanish:
$$
I_{y_G} = \frac{2 \cdot 8^3}{12} + \frac{8 \cdot 2^3}{12} = 85.33 + 5.33 = 90.67\,\mathrm{cm^4} .
$$
:::

:::esempio{titolo="I-section as the difference of rectangles"}
An I-section of height $16\,\mathrm{cm}$ with flanges measuring $8 \times 2\,\mathrm{cm}$ and web thickness $2\,\mathrm{cm}$ has two axes of symmetry, so $G$ is its center. About $x_G$, the section can be treated as the complete rectangle $8 \times 16\,\mathrm{cm}$ minus the two rectangular voids measuring $3 \times 12\,\mathrm{cm}$ on either side of the web. Their centroids lie on the $x_G$-axis. Hence
$$
I_{x_G} = \frac{8 \cdot 16^3}{12} - 2 \cdot \frac{3 \cdot 12^3}{12} = 2730.67 - 864 = 1866.67\,\mathrm{cm^4} .
$$
For $y_G$ the centroids of the rectangular voids are off the axis, so it is simpler to add the three solid parts, each with its centroid on $y_G$:
$$
I_{y_G} = 2 \cdot \frac{2 \cdot 8^3}{12} + \frac{12 \cdot 2^3}{12} = 170.67 + 8 = 178.67\,\mathrm{cm^4} .
$$
:::

:::esempio{titolo="L-section"}
The L-section shown consists of a horizontal rectangle measuring $10 \times 2\,\mathrm{cm}$ with centroid $(5, 1)$ and a vertical rectangle measuring $2 \times 10\,\mathrm{cm}$ with centroid $(1, 7)$. Both have area $20\,\mathrm{cm^2}$. Therefore
$$
x_G = \frac{20 \cdot 5 + 20 \cdot 1}{40} = 3\,\mathrm{cm} ,
\qquad
y_G = \frac{20 \cdot 1 + 20 \cdot 7}{40} = 4\,\mathrm{cm} .
$$
The offsets of the component centroids from $G$ are $(2, -3)\,\mathrm{cm}$ and $(-2, 3)\,\mathrm{cm}$, and each rectangle has zero product of inertia about its own centroidal axes. Hence
$$
\begin{aligned}
I_{x_G} &= \left( \frac{10 \cdot 2^3}{12} + 20 \cdot 3^2 \right) + \left( \frac{2 \cdot 10^3}{12} + 20 \cdot 3^2 \right) = \frac{1600}{3}\,\mathrm{cm^4} = 533.33\,\mathrm{cm^4} , \\[6pt]
I_{y_G} &= \left( \frac{2 \cdot 10^3}{12} + 20 \cdot 2^2 \right) + \left( \frac{10 \cdot 2^3}{12} + 20 \cdot 2^2 \right) = \frac{1000}{3}\,\mathrm{cm^4} = 333.33\,\mathrm{cm^4} , \\[6pt]
I_{x_G y_G} &= 20 \cdot 2 \cdot (-3) + 20 \cdot (-2) \cdot 3 = -240\,\mathrm{cm^4} .
\end{aligned}
$$
The product of inertia is negative because most of the area lies in the second and fourth quadrants of the centroidal axes.

::struttura{poligoni="0,0 10,0 10,2 2,2 2,12 0,12" punti="3,4,G,baricentro" tratteggi="-1,4 11.5,4;3,-1 3,13.5" frecce="0,0,12.5,0,x;0,0,0,14,y" etichette="12,4.3,x_G;3.4,13.6,y_G" quote="0 0,10 0,10 cm,0.9;0 0,0 12,12 cm,-0.9;10 0,10 2,2 cm,0.8;0 12,2 12,2 cm,-0.8" riferimento=0 titolo="L-section with centroid $G = (3, 4)\,\mathrm{cm}$ and centroidal axes $x_G$ and $y_G$"}

:::

## Rotation of axes

:::richiamo{titolo="Double-angle formulas"}
For every angle $\alpha$, the identities $\cos^2\alpha = \dfrac{1 + \cos 2\alpha}{2}$, $\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}$ and $2\sin\alpha\cos\alpha = \sin 2\alpha$ hold. See the chapter on trigonometric functions in the preparatory course.
:::

::::teorema{#rotazione-degli-assi titolo="Second moments of area about rotated axes"}
Let $\xi$ and $\eta$ be axes with the same origin as $x$ and $y$, rotated counterclockwise through an angle $\alpha$. Then
$$
\begin{aligned}
I_\xi &= \frac{I_x + I_y}{2} + \frac{I_x - I_y}{2}\cos 2\alpha - I_{xy}\sin 2\alpha , \\[6pt]
I_\eta &= \frac{I_x + I_y}{2} - \frac{I_x - I_y}{2}\cos 2\alpha + I_{xy}\sin 2\alpha , \\[6pt]
I_{\xi\eta} &= \frac{I_x - I_y}{2}\sin 2\alpha + I_{xy}\cos 2\alpha .
\end{aligned}
$$
Adding the first two equations gives $I_\xi + I_\eta = I_x + I_y$. The sum of the second moments about two perpendicular axes is independent of rotation because it is the polar moment about the origin. The formulas give the second moment about an inclined axis without repeating the integrations. For a square of side $a$ with centroidal axes parallel to its sides, $I_x = I_y = \dfrac{a^4}{12}$ and $I_{xy} = 0$, giving $I_\xi = \dfrac{a^4}{12}$ for every $\alpha$.

::struttura{poligoni="-3,-2 2.5,-2.6 4,0.5 2,3.2 -2.2,2.4" punti="0,0,O" frecce="0,0,5.5,0,x;0,0,0,5,y;0,0,4.76,2.75,ξ;0,0,-2.5,4.33,η" linee="1.6,0 1.6,0.08 1.59,0.17 1.58,0.25 1.57,0.33 1.55,0.41 1.52,0.49 1.49,0.57 1.46,0.65 1.43,0.73 1.39,0.8" etichette="1.95,0.45,α" riferimento=0 titolo="The axes $\xi$ and $\eta$ are rotated counterclockwise through $\alpha$ from the axes $x$ and $y$"}

:::dimostrazione
The coordinates of an element referred to the rotated axes are
$$
\xi = x\cos\alpha + y\sin\alpha ,
\qquad
\eta = -x\sin\alpha + y\cos\alpha .
$$
The second moment about the $\xi$-axis is the integral of the squared distance from that axis, namely $\eta^2$:
$$
I_\xi = \int_A (-x\sin\alpha + y\cos\alpha)^2\,dA = I_x\cos^2\alpha + I_y\sin^2\alpha - 2 I_{xy}\sin\alpha\cos\alpha .
$$
The double-angle identities give the first formula. Likewise, $I_\eta = \displaystyle\int_A \xi^2\,dA = I_x\sin^2\alpha + I_y\cos^2\alpha + 2 I_{xy}\sin\alpha\cos\alpha$, and finally
$$
I_{\xi\eta} = \int_A \xi\,\eta\,dA = (I_x - I_y)\sin\alpha\cos\alpha + I_{xy}(\cos^2\alpha - \sin^2\alpha) ,
$$
which gives the third formula after applying the double-angle identities.
:::
::::

## Principal axes and principal moments of area

:::definizione{#assi-principali titolo="Principal axes"}
Two perpendicular axes $\xi$ and $\eta$ are **principal axes** if the product of inertia about them is zero, $I_{\xi\eta} = 0$. Principal axes through the centroid are called **principal centroidal axes**. The corresponding second moments of area are the **principal moments of area**, denoted by $I_\xi$ and $I_\eta$, or by $I_1 \geq I_2$. By the theorem on products of inertia and symmetry, any axis of symmetry and the axis perpendicular to it form a pair of principal axes. For T-sections, I-sections and channels, the principal centroidal axes are therefore $x_G$ and $y_G$.
:::

::::teorema{#momenti-principali titolo="Directions of the principal axes and values of the principal moments"}
Suppose $I_x$, $I_y$ and $I_{xy}$ are known for two perpendicular axes through a point $O$, with $I_x \neq I_y$. The principal axes through $O$ are rotated relative to $x$ and $y$ by an angle $\alpha_0$ satisfying
$$
\tan 2\alpha_0 = -\frac{2 I_{xy}}{I_x - I_y} ,
$$
and the principal moments are
$$
I_{1,2} = \frac{I_x + I_y}{2} \pm \sqrt{\left( \frac{I_x - I_y}{2} \right)^2 + I_{xy}^2} .
$$
As the direction of the axis through $O$ varies, $I_1$ and $I_2$ are the maximum and minimum second moments of area. If $I_x = I_y$ and $I_{xy} \neq 0$, the principal axes are the angle bisectors, $\alpha_0 = 45^\circ$. If $I_x = I_y$ and $I_{xy} = 0$, every pair of perpendicular axes through $O$ is principal. To find which axis has moment $I_1$, calculate $I_\xi$ using $\alpha = \alpha_0$ in the rotation formula.

:::dimostrazione
By the axis-rotation formulas, the condition $I_{\xi\eta} = 0$ can be written $\dfrac{I_x - I_y}{2}\sin 2\alpha + I_{xy}\cos 2\alpha = 0$, which for $I_x \neq I_y$ gives the formula for $\tan 2\alpha_0$. Differentiating the formula for $I_\xi$ gives
$$
\frac{dI_\xi}{d\alpha} = -(I_x - I_y)\sin 2\alpha - 2 I_{xy}\cos 2\alpha = -2 I_{\xi\eta} ,
$$
so $I_\xi$ reaches its maximum and minimum precisely in those directions for which $I_{\xi\eta} = 0$. Set $C = \dfrac{I_x + I_y}{2}$ and $D = \dfrac{I_x - I_y}{2}$. The rotation formulas give
$$
(I_\xi - C)^2 + I_{\xi\eta}^2 = (D\cos 2\alpha - I_{xy}\sin 2\alpha)^2 + (D\sin 2\alpha + I_{xy}\cos 2\alpha)^2 = D^2 + I_{xy}^2 ,
$$
because the cross terms cancel. When $I_{\xi\eta} = 0$, it follows that $I_\xi = C \pm \sqrt{D^2 + I_{xy}^2}$.
:::
::::

:::esempio{titolo="Principal axes of the L-section"}
For the L-section in the preceding example, $I_{x_G} = 533.33\,\mathrm{cm^4}$, $I_{y_G} = 333.33\,\mathrm{cm^4}$ and $I_{x_G y_G} = -240\,\mathrm{cm^4}$. Therefore $C = 433.33\,\mathrm{cm^4}$, $D = 100\,\mathrm{cm^4}$ and
$$
\sqrt{D^2 + I_{x_G y_G}^2} = \sqrt{100^2 + 240^2} = 260\,\mathrm{cm^4} ,
\qquad
I_1 = 693.33\,\mathrm{cm^4} ,
\qquad
I_2 = 173.33\,\mathrm{cm^4} .
$$
The direction is specified by $\tan 2\alpha_0 = \dfrac{480}{200} = \dfrac{12}{5}$, so $2\alpha_0 = 67.38^\circ$ and $\alpha_0 = 33.69^\circ$. With $\cos 2\alpha_0 = \dfrac{5}{13}$ and $\sin 2\alpha_0 = \dfrac{12}{13}$ the rotation formula gives $I_\xi = 433.33 + 100 \cdot \dfrac{5}{13} + 240 \cdot \dfrac{12}{13} = 693.33\,\mathrm{cm^4}$. Thus the $\xi$-axis inclined at $33.69^\circ$ is the axis of maximum second moment. The sum $I_1 + I_2 = 866.67\,\mathrm{cm^4}$ equals $I_{x_G} + I_{y_G}$.

::struttura{poligoni="0,0 10,0 10,2 2,2 2,12 0,12" punti="3,4,G,baricentro" tratteggi="-1,4 11,4;3,-1 3,13;-1.16,1.23 3,4;5.77,-0.16 3,4" frecce="3,4,8.82,7.88,ξ;3,4,-0.69,9.53,η" linee="5,4 5,4.12 4.99,4.23 4.97,4.35 4.94,4.47 4.91,4.58 4.88,4.69 4.83,4.8 4.78,4.91 4.73,5.01 4.66,5.11" etichette="5.6,4.55,α_0;11.4,4.3,x_G;3.4,13.2,y_G" riferimento=0 titolo="The principal centroidal axes $\xi$ and $\eta$ of the L-section are rotated through $\alpha_0 = 33.69^\circ$ relative to the axes $x_G$ and $y_G$"}

:::

## Mohr's circle for second moments of area

::::teorema{#cerchio-di-mohr titolo="Mohr's circle for second moments of area"}
In a plane with second moment of area on the horizontal axis and product of inertia on the vertical axis, associate each axis $\xi$ rotated through $\alpha$ from $x$ with the point $P(\alpha) = (I_\xi, I_{\xi\eta})$. As $\alpha$ varies, $P(\alpha)$ traces a circle with center $\left( \dfrac{I_x + I_y}{2}, 0 \right)$ and radius $\sqrt{\left( \dfrac{I_x - I_y}{2} \right)^2 + I_{xy}^2}$, called **Mohr's circle**. The following relationships also hold:

- the $x$-axis corresponds to $X = (I_x, I_{xy})$ and the $y$-axis to the diametrically opposite point $Y = (I_y, -I_{xy})$;
- if the axes rotate counterclockwise through $\alpha$, the point moves counterclockwise through $2\alpha$ on the circle;
- the intersections with the horizontal axis give the principal moments $I_1$ and $I_2$.

The circle represents the rotation formulas graphically. Plot $X$ and $Y$. The center is the midpoint of $XY$, and the radius is the distance from the center to $X$. The principal moments can be read from the horizontal axis. The central angle from $X$ to $(I_1, 0)$ is twice the angle through which the $x$-axis must rotate to become the axis of maximum second moment. Some texts plot $-I_{\xi\eta}$ vertically. With that convention the direction of rotation on the circle is reversed.

::struttura{linee="6.93,0 6.92,0.23 6.89,0.45 6.84,0.67 6.78,0.89 6.69,1.1 6.58,1.3 6.46,1.49 6.33,1.67 6.17,1.84 6,1.99 5.82,2.13 5.63,2.25 5.43,2.36 5.22,2.44 5.01,2.51 4.78,2.56 4.56,2.59 4.33,2.6 4.11,2.59 3.88,2.56 3.66,2.51 3.44,2.44 3.23,2.36 3.03,2.25 2.84,2.13 2.66,1.99 2.49,1.84 2.34,1.67 2.2,1.49 2.08,1.3 1.98,1.1 1.89,0.89 1.82,0.67 1.77,0.45 1.74,0.23 1.73,0 1.74,-0.23 1.77,-0.45 1.82,-0.67 1.89,-0.89 1.98,-1.1 2.08,-1.3 2.2,-1.49 2.34,-1.67 2.49,-1.84 2.66,-1.99 2.84,-2.13 3.03,-2.25 3.23,-2.36 3.44,-2.44 3.66,-2.51 3.88,-2.56 4.11,-2.59 4.33,-2.6 4.56,-2.59 4.78,-2.56 5.01,-2.51 5.22,-2.44 5.43,-2.36 5.63,-2.25 5.82,-2.13 6,-1.99 6.17,-1.84 6.33,-1.67 6.46,-1.49 6.58,-1.3 6.69,-1.1 6.78,-0.89 6.84,-0.67 6.89,-0.45 6.92,-0.23 6.93,0;4.64,-0.74 4.71,-0.7 4.78,-0.66 4.84,-0.62 4.9,-0.56 4.95,-0.51 5,-0.44 5.04,-0.38 5.07,-0.31 5.1,-0.23 5.12,-0.16 5.13,-0.08 5.13,0" frecce="0,0,8,0,I;0,-3.2,0,3.3,I_ξη" tratteggi="5.33,-2.4 3.33,2.4;5.33,-2.4 5.33,0;3.33,2.4 3.33,0" punti="5.33,-2.4,X;3.33,2.4,Y;4.33,0,C;6.93,0,I_1;1.73,0,I_2" etichette="5.55,-0.75,2α_0" riferimento=0 titolo="Mohr's circle for the L-section: $X = (I_{x_G}, I_{x_G y_G})$ and $Y = (I_{y_G}, -I_{x_G y_G})$, with center $C$ at horizontal coordinate $\dfrac{I_{x_G} + I_{y_G}}{2}$"}

:::dimostrazione
Set $C = \dfrac{I_x + I_y}{2}$ and $D = \dfrac{I_x - I_y}{2}$. The axis-rotation formulas give
$$
\begin{cases}
I_\xi - C = D\cos 2\alpha - I_{xy}\sin 2\alpha \\[4pt]
I_{\xi\eta} = D\sin 2\alpha + I_{xy}\cos 2\alpha
\end{cases}
$$
so the vector $(I_\xi - C, I_{\xi\eta})$ is the vector $(D, I_{xy})$ rotated counterclockwise through $2\alpha$. Since a rotation preserves length, $P(\alpha)$ is always a distance $\sqrt{D^2 + I_{xy}^2}$ from $(C, 0)$. Setting $\alpha = 0$ gives $X = (I_x, I_{xy})$. For $\alpha = 90^\circ$ the vector $(D, I_{xy})$ rotates through $180^\circ$, giving $Y = (I_y, -I_{xy})$. Points with zero vertical coordinate correspond to principal axes, and their horizontal coordinates are $C \pm \sqrt{D^2 + I_{xy}^2}$.
:::
::::

## Radii of gyration and the centroidal inertia ellipse

:::definizione{#raggi-d-inerzia titolo="Radii of gyration"}
The **radius of gyration** of a plane area about an axis $r$ is the length
$$
\rho_r = \sqrt{\frac{I_r}{A}} ,
\qquad\text{that is}\qquad
I_r = A\,\rho_r^2 .
$$
It is the distance from the axis at which the entire area could be concentrated to give the same second moment. For axes $x$ and $y$ the radii are written $\rho_x$ and $\rho_y$, and for the principal axes, $\rho_\xi$ and $\rho_\eta$. For a rectangle of height $h$, $\rho_{x_G} = \sqrt{\dfrac{b h^3}{12\,b h}} = \dfrac{h}{2\sqrt{3}}$, and when $h = 20\,\mathrm{cm}$ this gives $\rho_{x_G} = 5.77\,\mathrm{cm}$. The smallest radius of gyration of a section enters the slenderness ratio of compression members in the study of buckling in Mechanics of Materials.
:::

:::osservazione{#ellisse-centrale titolo="Centroidal inertia ellipse"}
The **centroidal inertia ellipse** is centered at the centroid $G$ and has its axes along the principal centroidal axes $\xi$ and $\eta$. Its semiaxis along $\xi$ is $\rho_\eta$ and its semiaxis along $\eta$ is $\rho_\xi$:
$$
\frac{\xi^2}{\rho_\eta^2} + \frac{\eta^2}{\rho_\xi^2} = 1 .
$$
For any line $r$ through $G$, the distance from $r$ to either tangent to the ellipse parallel to $r$ equals the radius of gyration $\rho_r$, so $I_r = A\,\rho_r^2$. The ellipse therefore represents all the centroidal second moments. It is elongated in the direction along which the section's area is more spread out. For the $12 \times 20\,\mathrm{cm}$ rectangle, the semiaxes are $\rho_{y_G} = 3.46\,\mathrm{cm}$ along the short side and $\rho_{x_G} = 5.77\,\mathrm{cm}$ along the long side.

::struttura{poligoni="-6,-10 6,-10 6,10 -6,10" tratteggi="3.46,0 3.45,0.5 3.41,1 3.35,1.49 3.26,1.97 3.14,2.44 3,2.89 2.84,3.31 2.65,3.71 2.45,4.08 2.23,4.42 1.99,4.73 1.73,5 1.46,5.23 1.18,5.43 0.9,5.58 0.6,5.69 0.3,5.75 0,5.77 -0.3,5.75 -0.6,5.69 -0.9,5.58 -1.18,5.43 -1.46,5.23 -1.73,5 -1.99,4.73 -2.23,4.42 -2.45,4.08 -2.65,3.71 -2.84,3.31 -3,2.89 -3.14,2.44 -3.26,1.97 -3.35,1.49 -3.41,1 -3.45,0.5 -3.46,0 -3.45,-0.5 -3.41,-1 -3.35,-1.49 -3.26,-1.97 -3.14,-2.44 -3,-2.89 -2.84,-3.31 -2.65,-3.71 -2.45,-4.08 -2.23,-4.42 -1.99,-4.73 -1.73,-5 -1.46,-5.23 -1.18,-5.43 -0.9,-5.58 -0.6,-5.69 -0.3,-5.75 0,-5.77 0.3,-5.75 0.6,-5.69 0.9,-5.58 1.18,-5.43 1.46,-5.23 1.73,-5 1.99,-4.73 2.23,-4.42 2.45,-4.08 2.65,-3.71 2.84,-3.31 3,-2.89 3.14,-2.44 3.26,-1.97 3.35,-1.49 3.41,-1 3.45,-0.5 3.46,0" frecce="-6.7,0,8.5,0,x_G;0,-10.5,0,12.5,y_G" punti="0,0,G,baricentro" quote="0 0,3.46 0,ρ_y,7;0 0,0 5.77,ρ_x,-4.5;-6 -10,6 -10,12 cm,0.9;-6 -10,-6 10,20 cm,-1.2" riferimento=0 titolo="Centroidal inertia ellipse of the $12 \times 20\,\mathrm{cm}$ rectangle, with semiaxes $\rho_{y_G}$ along $x_G$ and $\rho_{x_G}$ along $y_G$"}

:::
