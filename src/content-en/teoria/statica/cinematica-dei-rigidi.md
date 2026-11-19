---
titolo: "Planar rigid-body kinematics and the center of rotation"
sommario: "How to describe infinitesimal displacements of a planar rigid body and of a chain of rigid bodies using absolute and relative centers of rotation, kinematic chain theorems and displacement diagrams."
---

## Degrees of freedom of a planar rigid body

:::definizione{#corpo-rigido-piano titolo="Planar rigid body"}
A **planar rigid body** is a set of points in the $xy$-plane whose mutual distances remain constant under any displacement. The beams, columns and plates of planar structures can be modeled as rigid bodies when their deformations are negligible compared with their overall displacement. This assumption applies throughout this statics course. The $x$-axis points horizontally to the right, the $y$-axis vertically upward and the $z$-axis out of the page. Counterclockwise rotations are positive.
:::

:::definizione{#spostamento-rigido titolo="Rigid-body displacement"}
A displacement moves each point $P$ of the body to the position $P'$. The displacement is **rigid** if there are a point $O$ of the body and an angle $\theta$ such that, for every point $P$,
$$
P' = O' + R(\theta)\,(P - O) ,
\qquad
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} .
$$
In other words, the body translates with $O$ and rotates through the angle $\theta$ about $O$. The matrix $R(\theta)$ represents rotation about the origin, as discussed in the chapter on linear maps in Linear Algebra. Since $R(\theta)$ preserves lengths, the distances between points of the body remain constant. Every distance-preserving displacement that does not flip the body can be shown to have this form. The vector $\vec{s}_P = P' - P$, with horizontal component $u_P$ and vertical component $v_P$, is the **displacement** of the point $P$.
:::

:::definizione{#gradi-di-liberta titolo="Degrees of freedom"}
The **degrees of freedom** of a system are the independent parameters that specify its displacements. A planar rigid-body displacement is determined by the components $u_O$ and $v_O$ of the displacement of one point $O$ and by the rotation angle. Thus a free planar rigid body has **three degrees of freedom**, two translations and one rotation. A system of $n$ unconnected rigid bodies has $3n$ degrees of freedom. Constraints such as supports, hinges and fixed connections impose conditions on the displacements and reduce the degrees of freedom. The classification of constraints and the count of scalar constraints are discussed in the chapter on constraints and kinematic analysis. Here we consider only how constraints affect the center of rotation.
:::

## Infinitesimal rigid-body displacements

We study structures undergoing displacements small compared with their dimensions. For small displacements, the rigid-body displacement equations become linear.

:::richiamo{titolo="First-order Taylor expansion"}
For $\theta \to 0$, with the angle measured in radians, $\sin\theta = \theta + o(\theta)$ and $\cos\theta = 1 + o(\theta)$. See the chapter on differential calculus and Taylor expansions in Mathematical Analysis 1.
:::

:::richiamo{titolo="Cross product with the unit vector along the z-axis"}
The coordinate unit vectors satisfy $\hat{k} \times \hat{\imath} = \hat{\jmath}$ and $\hat{k} \times \hat{\jmath} = -\hat{\imath}$. Thus, for a vector in the plane, $\hat{k} \times (a\,\hat{\imath} + b\,\hat{\jmath}) = -b\,\hat{\imath} + a\,\hat{\jmath}$ gives that vector rotated counterclockwise through a right angle. See the chapter on vectors in the plane and in space in Linear Algebra.
:::

::::teorema{#spostamenti-infinitesimi titolo="Infinitesimal rigid-body displacements"}
Let $O = (x_O, y_O)$ be a point of the body with displacement $(u_O, v_O)$, and let $\varphi$ be the rotation of the body. Neglecting terms of order higher than the first in $\varphi$, the displacement of the point $P = (x, y)$ is
$$
u = u_O - \varphi\,(y - y_O) ,
\qquad
v = v_O + \varphi\,(x - x_O) ,
$$
or, in vector form, $\vec{s}_P = \vec{s}_O + \varphi\,\hat{k} \times \overrightarrow{OP}$. Displacements of this form are called **infinitesimal rigid-body displacements** (or instantaneous rigid-body motions). They are linear in the point coordinates and in the three parameters $u_O$, $v_O$ and $\varphi$. The sum of two infinitesimal rigid-body displacements is therefore another such displacement. For example, if $O = (0, 0)$ has $u_O = 2\,\mathrm{mm}$ and $v_O = 0$ and the body rotates through $\varphi = 0.001\,\mathrm{rad}$, then point $P = (3, 4)\,\mathrm{m}$ has $u = 2\,\mathrm{mm} - 0.001 \cdot 4\,\mathrm{m} = -2\,\mathrm{mm}$ and $v = 0.001 \cdot 3\,\mathrm{m} = 3\,\mathrm{mm}$.

:::dimostrazione
Write the definition of a rigid displacement with $\theta = \varphi$ and subtract $P$ from both sides. Since $O' = O + \vec{s}_O$, this gives
$$
\vec{s}_P = P' - P = \vec{s}_O + \big( R(\varphi) - I \big)(P - O) ,
\qquad
R(\varphi) - I = \begin{pmatrix} \cos\varphi - 1 & -\sin\varphi \\ \sin\varphi & \cos\varphi - 1 \end{pmatrix} .
$$
The Taylor expansion gives $\cos\varphi - 1 = o(\varphi)$ and $\sin\varphi = \varphi + o(\varphi)$, so to first order
$$
R(\varphi) - I = \begin{pmatrix} 0 & -\varphi \\ \varphi & 0 \end{pmatrix} .
$$
Multiplying this matrix by the vector $P - O$ with components $x - x_O$ and $y - y_O$ gives components $-\varphi\,(y - y_O)$ and $\varphi\,(x - x_O)$. Adding $\vec{s}_O$ yields the two component formulas. By the cross-product rule recalled above, $\hat{k} \times \overrightarrow{OP}$ has precisely the components $-(y - y_O)$ and $x - x_O$, which gives the vector form.
:::
::::

:::teorema{#proiezioni-uguali titolo="Displacements of two points along the line joining them"}
Under an infinitesimal rigid-body displacement, two points $P$ and $Q$ of the body have equal displacement components along the line $PQ$:
$$
(\vec{s}_P - \vec{s}_Q) \cdot \overrightarrow{QP} = 0 .
$$
This follows from the theorem on infinitesimal rigid-body displacements with $O = Q$, since $\vec{s}_P - \vec{s}_Q = \varphi\,\hat{k} \times \overrightarrow{QP}$ is perpendicular to $\overrightarrow{QP}$. It is the infinitesimal form of the condition that the distance from $P$ to $Q$ remain constant. Thus all points of a horizontal beam have the same horizontal displacement. If one end has $u = 0$, the entire beam has $u = 0$.
:::

## Center of rotation

An infinitesimal rigid-body displacement with $\varphi \neq 0$ is a rotation about a point. Once this point is known, the displacements of all other points follow directly.

::::teorema{#centro-di-rotazione titolo="Existence of the center of rotation"}
Consider an infinitesimal rigid-body displacement with rotation $\varphi \neq 0$. There is exactly one point $C$ in the plane with zero displacement, called the **center of rotation**. Its coordinates are
$$
x_C = x_O - \frac{v_O}{\varphi} ,
\qquad
y_C = y_O + \frac{u_O}{\varphi} ,
$$
and the displacement of every point $P = (x, y)$ is
$$
u = -\varphi\,(y - y_C) ,
\qquad
v = \varphi\,(x - x_C) .
$$
The displacement of $P$ is perpendicular to the segment $CP$, has magnitude $|\varphi|\,\overline{CP}$ and points in the direction of rotation. The center may lie outside the body because the displacement formulas apply throughout the plane, as if the body were extended by a plate rigidly attached to it.

:::dimostrazione
A point $(x, y)$ has zero displacement if and only if
$$
\begin{cases}
u_O - \varphi\,(y - y_O) = 0 \\
v_O + \varphi\,(x - x_O) = 0
\end{cases}
$$
Since $\varphi \neq 0$, the first equation has the unique solution $y = y_O + \dfrac{u_O}{\varphi}$ and the second the unique solution $x = x_O - \dfrac{v_O}{\varphi}$. The point $C$ so obtained has zero displacement. Applying the theorem on infinitesimal rigid-body displacements with $C$ in place of $O$ gives $\vec{s}_P = \varphi\,\hat{k} \times \overrightarrow{CP}$, which yields the stated formulas. The vector $\hat{k} \times \overrightarrow{CP}$ is $\overrightarrow{CP}$ rotated counterclockwise through a right angle, so it is perpendicular to $CP$ and has the same length.
:::
::::

:::esempio{titolo="Displacements of a bent beam"}
The bent beam $ABD$ shown rotates through $\varphi = 0.002\,\mathrm{rad}$ about the center $C = (1, 3)\,\mathrm{m}$. The center-of-rotation formulas give, in millimeters,
$$
\begin{aligned}
A = (0, 0) &: \quad u_A = -0.002 \cdot (0 - 3)\,\mathrm{m} = 6\,\mathrm{mm} , \quad v_A = 0.002 \cdot (0 - 1)\,\mathrm{m} = -2\,\mathrm{mm} \\[4pt]
B = (4, 0) &: \quad u_B = 6\,\mathrm{mm} , \quad v_B = 0.002 \cdot (4 - 1)\,\mathrm{m} = 6\,\mathrm{mm} \\[4pt]
D = (4, 2) &: \quad u_D = -0.002 \cdot (2 - 3)\,\mathrm{m} = 2\,\mathrm{mm} , \quad v_D = 6\,\mathrm{mm}
\end{aligned}
$$
Points $A$ and $B$ have the same vertical coordinate and hence the same $u$. Points $B$ and $D$ have the same horizontal coordinate and hence the same $v$. As a check, $|\vec{s}_A| = \sqrt{6^2 + 2^2}\,\mathrm{mm} \approx 6.32\,\mathrm{mm}$ equals $\varphi\,\overline{CA} = 0.002 \cdot \sqrt{10}\,\mathrm{m} \approx 6.32\,\mathrm{mm}$.

::struttura{nodi="A,0,0;B,4,0;D,4,2" aste="A-B;B-D" punti="1,3,C,centro" linee="1,3 0,0;1,3 4,0;1,3 4,2" frecce="0,0,1.05,-0.35,s_A;4,0,4.9,0.9,s_B;4,2,4.3,2.9,s_D" tratteggi="0.36,-0.12 4.36,0.36 4.12,2.36" titolo="The displacements of $A$, $B$ and $D$ are perpendicular to the segments joining them to the center $C$. The dashed outline shows the displaced configuration with displacements exaggerated"}

:::

:::definizione{#centro-improprio titolo="Translation and a center at infinity"}
If $\varphi = 0$, the infinitesimal rigid-body displacement is a **translation**. All points have the same displacement $(u_O, v_O)$, and if it is nonzero, no point is stationary. As $\varphi \to 0$ with $(u_O, v_O)$ fixed, the center $C = O + \dfrac{1}{\varphi}(-v_O,\ u_O)$ recedes to infinity in the direction of the vector $(-v_O,\ u_O)$, which is perpendicular to the displacement. A translation is therefore described as a rotation about a **center at infinity**, the point at infinity in the direction perpendicular to the displacements. For example, a vertically translating beam has its center at infinity in the horizontal direction. With this convention every nonzero infinitesimal rigid-body displacement has a center, either finite or at infinity. In geometric constructions a line through a center at infinity is parallel to the direction of that center.
:::

## Locating the center of rotation

In a structure the center of rotation can usually be found geometrically from the displacement directions permitted by the constraints.

:::teorema{#centro-da-due-direzioni titolo="Locating the center from the displacement directions of two points"}
Let $A$ and $B$ be two points of the body with nonzero displacements in known directions. The center of rotation lies on the line through $A$ perpendicular to $\vec{s}_A$ and on the line through $B$ perpendicular to $\vec{s}_B$. If the lines are distinct, the center is their intersection: a finite point if the lines meet, or a point at infinity if they are parallel. This follows from the existence theorem, since each displacement is perpendicular to the segment from the point to the center. When the two lines are parallel the displacements are parallel and the body translates. If the two lines coincide, meaning that $A$, $B$ and the center are collinear, the directions alone are insufficient. We also need the ratio of the displacement magnitudes, which are proportional to the distances from the center.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" punti="2,3,C,centro" frecce="0,0,1.2,-0.8,s_A;5,0,6,1,s_B" tratteggi="0,0 2.4,3.6;5,0 1.6,3.4" titolo="The center $C$ is the intersection of the lines through $A$ and $B$ perpendicular to their respective displacements"}

:::

:::osservazione{#vincoli-e-centro titolo="Effect of external supports on the center"}
An external support prescribes the direction of displacement of a point and hence a line on which the center of the supported body must lie.

- **Fixed pin** at $A$: the displacement of $A$ is zero, so if the body rotates, its center is $A$.
- **Roller support** at $A$: point $A$ moves along the support surface, so the center lies on the line through $A$ normal to that surface.
- **Two-force link** at $A$ (a link pinned at both ends, with its other end fixed): point $A$ moves perpendicular to the link, so the center lies on the link axis.
- **Parallel-link support**: the body cannot rotate and can only translate perpendicular to the links, so the center lies at infinity in the direction of the links.

With two rollers, or a roller and a two-force link, the center is the intersection of the two lines. With a fixed pin at $A$ and a roller at $B$, the center would have to coincide with $A$ and lie on the normal through $B$. If the normal through $B$ does not pass through $A$, the body remains stationary. These observations underlie the kinematic analysis presented in the chapter on constraints and instability.
:::

:::esempio{titolo="A bar supported by a floor and a wall"}
The bar $AB$ shown has a roller at $A = (4, 0)$ that moves along the horizontal floor and a roller at $B = (0, 3)$ that moves along the vertical wall. The normal to the floor through $A$ is the line $x = 4$, and the normal to the wall through $B$ is the line $y = 3$. The center is therefore $C = (4, 3)$. If $A$ moves $u_A = 6\,\mathrm{mm}$ to the right, the formula $u_A = -\varphi\,(y_A - y_C) = 3\,\mathrm{m} \cdot \varphi$ gives the counterclockwise rotation $\varphi = 0.002\,\mathrm{rad}$. Then $v_B = \varphi\,(x_B - x_C) = 0.002 \cdot (-4)\,\mathrm{m} = -8\,\mathrm{mm}$, so $B$ moves down by $8\,\mathrm{mm}$. Both displacements have the same component along the bar, as required by the theorem on components along the line joining two points: $(\vec{s}_A - \vec{s}_B) \cdot \overrightarrow{BA} = 6 \cdot 4 + 8 \cdot (-3) = 0$.

::struttura{nodi="A,4,0;B,0,3" aste="A-B" vincoli="A,carrello;B,carrello,180" punti="4,3,C,centro" tratteggi="4,0 4,3.5;0,3 4.5,3" frecce="4,0,5.3,0,s_A;0,3,0,1.6,s_B" titolo="The normals to the travel directions of the two rollers intersect at the center $C$"}

:::

## Rigid-body systems and relative centers

A structure made up of several bodies joined by internal constraints that can move is called a **kinematic chain**. Each body has its own infinitesimal rigid-body displacement, with its own rotation and center.

:::definizione{#centro-relativo titolo="Relative center of rotation"}
Let $i$ and $j$ be two bodies in a system undergoing infinitesimal rigid-body displacements $\vec{s}_i$ and $\vec{s}_j$ with rotations $\varphi_i$ and $\varphi_j$, extended to the whole plane. The **relative center of rotation** $C_{ij}$ is the point at which the two displacements coincide:
$$
\vec{s}_i(C_{ij}) = \vec{s}_j(C_{ij}) .
$$
The difference $\vec{s}_j - \vec{s}_i$ is an infinitesimal rigid-body displacement with rotation $\varphi_j - \varphi_i$. It is the displacement of body $j$ as seen by an observer attached to body $i$, and its center is $C_{ij}$. By the existence theorem for the center of rotation, $C_{ij}$ exists and is unique if $\varphi_i \neq \varphi_j$, and is at infinity if $\varphi_i = \varphi_j$. Also, $C_{ij} = C_{ji}$. To distinguish them from the relative centers, the centers $C_1$, $C_2$, … of the individual bodies are called **absolute centers**.
:::

:::osservazione{#vincoli-interni-e-centro titolo="Effect of internal constraints on the relative center"}
- An **internal hinge** at $B$ between bodies $i$ and $j$ requires the same displacement of $B$ viewed as a point of either body, so $C_{ij} = B$.
- An **internal two-force link** joins the two bodies and allows only relative displacements perpendicular to the link. Hence $C_{ij}$ lies on the link axis.
- An **internal parallel-link connection** prevents relative rotation, so $\varphi_i = \varphi_j$, and $C_{ij}$ is the point at infinity in the direction of the links.
:::

## Kinematic chain theorems

The centers of a chain can be found using two collinearity theorems that follow from the definition of a relative center.

::::teorema{#primo-teorema-catene titolo="First kinematic chain theorem"}
Let $1$ and $2$ be two rigid bodies with absolute centers $C_1$ and $C_2$ and relative center $C_{12}$. If their rotations $\varphi_1$ and $\varphi_2$ are not both zero, then $C_1$, $C_2$ and $C_{12}$ are collinear. When the absolute centers are finite, the rotations satisfy
$$
\varphi_1\,\overrightarrow{C_1 C_{12}} = \varphi_2\,\overrightarrow{C_2 C_{12}} .
$$
The theorem locates a center when the other two are known, or when one of the other centers and a line containing the third are known. The vector relation gives the ratio of the rotations. If $C_{12}$ lies inside the segment $C_1 C_2$, the bodies rotate in opposite directions. If it lies outside, they rotate in the same direction. If one absolute center is at infinity, collinearity means that the line joining $C_{12}$ to the other center is parallel to the direction of the center at infinity.

:::dimostrazione
Write the displacement of $C_{12}$ in two ways. First suppose both absolute centers are finite. Viewed as a point of body $1$ rotating about $C_1$ and of body $2$ rotating about $C_2$, point $C_{12}$ has displacements
$$
\vec{s}_1(C_{12}) = \varphi_1\,\hat{k} \times \overrightarrow{C_1 C_{12}} ,
\qquad
\vec{s}_2(C_{12}) = \varphi_2\,\hat{k} \times \overrightarrow{C_2 C_{12}} .
$$
By the definition of a relative center the two displacements are equal, so $\hat{k} \times \big( \varphi_1\,\overrightarrow{C_1 C_{12}} - \varphi_2\,\overrightarrow{C_2 C_{12}} \big) = \vec{0}$. The cross product $\hat{k} \times \vec{w}$ is the vector $\vec{w}$ rotated through a right angle, and it vanishes only for $\vec{w} = \vec{0}$. Therefore $\varphi_1\,\overrightarrow{C_1 C_{12}} = \varphi_2\,\overrightarrow{C_2 C_{12}}$. If both rotations are nonzero, the vectors $\overrightarrow{C_1 C_{12}}$ and $\overrightarrow{C_2 C_{12}}$ are parallel and share the endpoint $C_{12}$, so $C_1$, $C_2$ and $C_{12}$ are collinear. If instead $\varphi_2 = 0$, the relation gives $\varphi_1\,\overrightarrow{C_1 C_{12}} = \vec{0}$ with $\varphi_1 \neq 0$. Hence $C_{12} = C_1$ and the three points are again collinear.

Now suppose body $2$ translates by $\vec{d} \neq \vec{0}$, so $C_2$ is at infinity. Equality of the displacements at $C_{12}$ becomes $\varphi_1\,\hat{k} \times \overrightarrow{C_1 C_{12}} = \vec{d}$. Thus $\overrightarrow{C_1 C_{12}}$ is perpendicular to $\vec{d}$, and the line $C_1 C_{12}$ is perpendicular to the displacements of body $2$. It is therefore parallel to the direction of the center at infinity $C_2$.
:::
::::

:::osservazione{#centri-non-allineati titolo="Noncollinear centers"}
If the constraints require $C_1$, $C_2$ and $C_{12}$ to occupy three noncollinear finite positions, the first kinematic chain theorem can be satisfied only with $\varphi_1 = \varphi_2 = 0$, so at most the two bodies can translate. For a three-hinged arch with fixed pins $A$ and $B$ and internal hinge $C$ not collinear, the centers are $C_1 = A$, $C_2 = B$ and $C_{12} = C$. The arch remains stationary because the fixed pins also prevent translation. This is the basis of the method of centers in kinematic analysis, discussed in the chapter on constraints and instability.
:::

:::esempio{titolo="Portal frame with an internal hinge"}
The portal frame shown consists of body $1$, comprising column $AB$ and crossbeam segment $BD$, and body $2$, comprising crossbeam segment $DE$ and column $EF$. At $A = (0, 0)$ there is a fixed pin, at $D = (3, 4)$ an internal hinge and at $F = (6, 0)$ a roller moving along a horizontal surface. The fixed pin gives $C_1 = A$ and the internal hinge gives $C_{12} = D$. The center $C_2$ lies on the vertical line through $F$, normal to the support surface, and, by the first kinematic chain theorem, on the line $AD$ with equation $y = \dfrac{4}{3}x$. Hence $C_2 = (6, 8)$. The relation between the rotations gives
$$
\varphi_1 \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \varphi_2 \begin{pmatrix} 3 - 6 \\ 4 - 8 \end{pmatrix}
\quad\Longrightarrow\quad
\varphi_2 = -\varphi_1 .
$$
The bodies rotate in opposite directions because $D$ lies inside the segment $C_1 C_2$. The roller $F$ moves by $u_F = -\varphi_2\,(y_F - y_{C_2}) = -8\,\mathrm{m} \cdot \varphi_1$, to the left if $\varphi_1 > 0$.

::struttura{nodi="A,0,0;B,0,4;D,3,4;E,6,4;F,6,0" aste="A-B;B-D;D-E;E-F" cerniere="D" vincoli="A,cerniera;F,carrello" punti="6,8,C_2,centro" etichette="-1,0.5,C_1;2.4,4.6,C_12" tratteggi="0,0 6.3,8.4;6,0 6,8.5" titolo="The center $C_2$ is where the vertical line through the roller $F$ meets the line joining $C_1 = A$ and $C_{12} = D$"}

:::

::::teorema{#secondo-teorema-catene titolo="Second kinematic chain theorem"}
Let $1$, $2$ and $3$ be three rigid bodies undergoing a displacement with rotations $\varphi_1$, $\varphi_2$ and $\varphi_3$ that are not all equal. Their three relative centers $C_{12}$, $C_{13}$ and $C_{23}$ are collinear. The theorem gives the relative center of two bodies that are not directly connected, such as the two columns of a portal frame. Together with the first theorem applied to each pair of bodies, it gives the lines containing the centers of a three-body chain.

:::dimostrazione
Consider the displacements relative to body $1$, namely $\vec{s}_2 - \vec{s}_1$ and $\vec{s}_3 - \vec{s}_1$. These are infinitesimal rigid-body displacements with rotations $\varphi_2 - \varphi_1$ and $\varphi_3 - \varphi_1$, which are not both zero. By definition of the relative center, the center of $\vec{s}_2 - \vec{s}_1$ is $C_{12}$ and the center of $\vec{s}_3 - \vec{s}_1$ is $C_{13}$. The two relative displacements coincide at the point where $\vec{s}_2 - \vec{s}_1 = \vec{s}_3 - \vec{s}_1$, that is, where $\vec{s}_2 = \vec{s}_3$. Their relative center is therefore $C_{23}$. Applying the first kinematic chain theorem to these displacements as if they belonged to two bodies shows that $C_{12}$, $C_{13}$ and $C_{23}$ are collinear.
:::
::::

:::esempio{titolo="Four-bar linkage"}
In the frame shown, bodies $1 = AB$, $2 = BC$ and $3 = CD$ are joined by internal hinges $B = (0, 4)$ and $C = (3, 4)$, and $A = (0, 0)$ and $D = (6, 0)$ are fixed pins. Thus $C_1 = A$, $C_3 = D$, $C_{12} = B$ and $C_{23} = C$. By the first kinematic chain theorem, $C_2$ lies on the line $C_1 C_{12}$, that is, $x = 0$, and on the line $C_3 C_{23}$ with equation $y = -\dfrac{4}{3}(x - 6)$, giving $C_2 = (0, 8)$. The center $C_{13}$ lies on the line $C_1 C_3$, that is, $y = 0$, and, by the second theorem, on $C_{12} C_{23}$, that is, $y = 4$. The two lines are parallel, so $C_{13}$ is the point at infinity in the horizontal direction and the two columns have the same rotation, $\varphi_3 = \varphi_1$. Applying the first theorem to bodies $1$ and $2$ gives $\varphi_1 \cdot (0, 4) = \varphi_2 \cdot (0, -4)$, hence $\varphi_2 = -\varphi_1$.

::struttura{nodi="A,0,0;B,0,4;C,3,4;D,6,0" aste="A-B;B-C;C-D" cerniere="B;C" vincoli="A,cerniera;D,cerniera" punti="0,8,C_2,centro" tratteggi="0,4 0,8.4;6,0 -0.3,8.4" titolo="The crossbeam center $C_2$ is where the two column axes meet. The relative center $C_{13}$ of the columns lies at infinity because $AD$ and $BC$ are parallel"}

:::

## Displacement diagrams

For each body in a chain, the vertical displacement depends only on the horizontal coordinate and the horizontal displacement only on the vertical coordinate. Both can be plotted as piecewise linear diagrams.

:::teorema{#diagrammi-spostamenti titolo="Vertical and horizontal displacements of a body"}
Let $i$ be a body with finite center $C_i = (x_{C_i}, y_{C_i})$ and rotation $\varphi_i$. The vertical displacement of any point depends only on its horizontal coordinate, and the horizontal displacement only on its vertical coordinate:
$$
v = \varphi_i\,(x - x_{C_i}) ,
\qquad
u = -\varphi_i\,(y - y_{C_i}) .
$$
This follows from the center-of-rotation formulas. In the **vertical displacement diagram** $v(x)$ of a chain, plotted along a horizontal baseline, each body therefore contributes a line segment with slope $\varphi_i$ and zero value on the vertical line through its center $C_i$. In the **horizontal displacement diagram** $u(y)$, plotted along a vertical baseline, each body's segment has slope $-\varphi_i$ and zero value on the horizontal line through its center. For a body in translation, $u$ and $v$ are constant. At an internal hinge the diagrams are continuous because the hinge has the same displacement viewed as a point of either body.
:::

:::osservazione{#spostamenti-di-una-catena titolo="Displacements of a one-degree-of-freedom chain"}
In a one-degree-of-freedom chain all displacements depend on a single parameter, usually the rotation $\varphi_1$ of one body. Once the absolute and relative centers are known, use $\varphi_1$ in the relation $\varphi_i\,\overrightarrow{C_i C_{ij}} = \varphi_j\,\overrightarrow{C_j C_{ij}}$ from the first kinematic chain theorem to find the rotations of the other bodies, working from one body to the next. The center-of-rotation formulas then give the point displacements. At an internal hinge the displacement found from the two bodies that it connects must agree, which provides a check. The vertical displacement diagram of a mechanism gives the virtual work of vertical loads and, by the kinematic method, influence lines. See the chapters on the principle of virtual work and on influence lines.
:::

:::esempio{titolo="Two-body beam"}
The beam shown has a fixed pin at $A = (0, 0)$, an internal hinge at $B = (4, 0)$ and a roller at $C = (7, 0)$ moving along a horizontal surface. The centers are $C_1 = A$ and $C_{12} = B$. The center $C_2$ lies on the vertical through $C$ and on the line $AB$, giving $C_2 = C$. The first kinematic chain theorem yields $\varphi_1 \cdot 4\,\mathrm{m} = \varphi_2 \cdot (4 - 7)\,\mathrm{m}$, hence $\varphi_2 = -\dfrac{4}{3}\varphi_1$. The vertical displacements are
$$
\begin{aligned}
v(x) &= \varphi_1\,x & &(0 \le x \le 4\,\mathrm{m}) \\[4pt]
v(x) &= -\frac{4}{3}\varphi_1\,(x - 7) & &(4\,\mathrm{m} \le x \le 7\,\mathrm{m})
\end{aligned}
\ ,
$$
and at hinge $B$ both segments give the same value $v_B = 4\,\mathrm{m} \cdot \varphi_1$.

::struttura{nodi="A,0,0;B,4,0;C,7,0" aste="A-B;B-C" cerniere="B" vincoli="A,cerniera;C,carrello" tratteggi="0,0 4,1 7,0" titolo="Two-body beam and displaced configuration (dashed) for $\varphi_1 > 0$"}

::struttura{nodi="A,0,0;B,4,0;C,7,0" aste="A-B;B-C" cerniere="B" vincoli="A,cerniera;C,carrello" diagramma="0,0,4,0,s;4,0,7,0,4-4*s/3" titolo="Vertical displacement diagram $\dfrac{v}{\varphi_1}$ ($\mathrm{m}$)"}

:::

:::esempio{titolo="Beam with a parallel-link support"}
In the beam shown, body $1$ has a fixed pin at $A = (0, 0)$. The internal hinge $B = (4, 0)$ joins it to body $2$, and at $C = (7, 0)$ body $2$ has a parallel-link support with horizontal links. The support prevents body $2$ from rotating or translating horizontally, so $C_2$ is the point at infinity in the horizontal direction. The line $C_1 C_{12}$ is the horizontal line $AB$, so the three centers are collinear and the chain can move. Body $1$ rotates about $A$ and body $2$ translates vertically with the displacement of $B$, $v = 4\,\mathrm{m} \cdot \varphi_1$. The vertical displacement diagram consists of a sloping segment over $AB$ and a horizontal segment over $BC$.

::struttura{nodi="A,0,0;B,4,0;C,7,0" aste="A-B;B-C" cerniere="B" vincoli="A,cerniera;C,doppio-pendolo,0" tratteggi="0,0 4,1 7,1" titolo="Body $BC$ has its center at infinity in the horizontal direction and translates vertically (displaced configuration shown dashed)"}

:::
