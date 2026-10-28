---
titolo: Lines and planes in space
sommario: Equations of planes and lines in space, relative positions, angles, distances, orthogonal projections, pencils of planes, and the line of minimum distance between two skew lines.
---

## The plane: Cartesian equation and normal vector

:::definizione{#piano-per-un-punto titolo="Plane through a point orthogonal to a vector"}
Let $P_0$ be a point in space and $\vec{n}$ a nonzero vector. The plane through $P_0$ orthogonal to $\vec{n}$ is the set of points $P$ for which the vector $\overrightarrow{P_0 P}$ is orthogonal to $\vec{n}$:
$$
\pi = \{ P : \vec{n} \cdot \overrightarrow{P_0 P} = 0 \} .
$$
The vector $\vec{n}$ is called a **normal vector** to the plane. A plane is therefore determined by a point and an orthogonal direction; since the condition $\vec{n} \cdot \overrightarrow{P_0 P} = 0$ does not change when $\vec{n}$ is multiplied by a nonzero number, the normal vector is defined up to a factor. For the dot product and orthogonality, see the topic on vectors.

::grafico{f="2-x" vettori="1,1,2,2,n;1,1,3,-1;1,1,0.5,2.5,P₀Q" punti="1,1,pieno;3,-1,pieno,P;0.5,2.5,pieno,Q" etichette="3.45,-0.95,π;2.2,0.2,P₀P;0.5,0.72,P₀" xmin=-1 xmax=4 ymin=-2 ymax=3.2 uguale=1 nomi="x,z" titolo="Section by the plane $y = 0$ of the plane $\pi : x + z = 2$, with normal vector $\vec{n} = (1, 0, 1)$: the vector $\overrightarrow{P_0 P}$ with $P \in \pi$ is orthogonal to $\vec{n}$, while for the point $Q$ off the plane $\vec{n} \cdot \overrightarrow{P_0 Q} \neq 0$"}

:::

::::teorema{#equazione-cartesiana-piano titolo="Cartesian equation of the plane"}
Every plane in space is the solution set of an equation
$$
ax + by + cz + d = 0 \qquad \text{with } (a, b, c) \neq (0, 0, 0),
$$
and the vector $(a, b, c)$ is normal to the plane. Conversely, every equation of this kind represents a plane with normal vector $(a, b, c)$. The components of a normal vector can therefore be read off the equation, and a point and a normal vector are enough to write the equation. The plane through $P_0 = (1, 2, -1)$ with $\vec{n} = (2, -1, 3)$ has equation $2(x - 1) - (y - 2) + 3(z + 1) = 0$, that is, $2x - y + 3z + 3 = 0$.

:::dimostrazione
Let $\pi$ be the plane through $P_0 = (x_0, y_0, z_0)$ orthogonal to $\vec{n} = (a, b, c)$. Writing the dot product in components, the condition $\vec{n} \cdot \overrightarrow{P_0 P} = 0$ becomes
$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 ,
$$
that is, $ax + by + cz + d = 0$ with $d = -(a x_0 + b y_0 + c z_0)$. Conversely, let the equation be given with $(a, b, c) \neq (0, 0, 0)$ and suppose, for example, $a \neq 0$. The point $P_0 = \left( -\dfrac{d}{a}, 0, 0 \right)$ satisfies the equation, hence $d = -(a x_0 + b y_0 + c z_0)$ with $(x_0, y_0, z_0) = P_0$. Substituting this expression for $d$, the equation becomes $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$, which is the condition $\vec{n} \cdot \overrightarrow{P_0 P} = 0$; therefore the solutions form the plane through $P_0$ orthogonal to $(a, b, c)$. If $a = 0$, the same argument works with whichever of $b$ and $c$ is nonzero.
:::
::::

:::osservazione{#piano-per-tre-punti titolo="Plane through three points"}
Three non-collinear points $A$, $B$, $C$ determine a unique plane. The vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are parallel to the plane and not parallel to each other, so their cross product is a normal vector:
$$
\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} .
$$
Equivalently, the point $P = (x, y, z)$ lies in the plane if and only if the vectors $\overrightarrow{AP}$, $\overrightarrow{AB}$, $\overrightarrow{AC}$ are coplanar, that is, if and only if their scalar triple product is zero:
$$
\begin{vmatrix}
x - x_A & y - y_A & z - z_A \\
x_B - x_A & y_B - y_A & z_B - z_A \\
x_C - x_A & y_C - y_A & z_C - z_A
\end{vmatrix} = 0 .
$$
For $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$ we have $\overrightarrow{AB} \times \overrightarrow{AC} = (-1, 2, 0) \times (-1, 0, 3) = (6, 3, 2)$, so the plane is $6x + 3y + 2z - 6 = 0$. Dividing by $6$ gives $\dfrac{x}{1} + \dfrac{y}{2} + \dfrac{z}{3} = 1$, a form in which the intercepts of the plane with the three axes can be read off.
:::

:::definizione{#equazioni-parametriche-piano titolo="Parametric equations of the plane"}
Let $P_0$ be a point and $\vec{u}$, $\vec{w}$ two non-parallel vectors. The plane through $P_0$ parallel to $\vec{u}$ and to $\vec{w}$ is described by the **parametric equations**
$$
P = P_0 + s\,\vec{u} + t\,\vec{w}, \qquad s, t \in \mathbb{R} .
$$
Passing to Cartesian form requires a normal vector, which is $\vec{n} = \vec{u} \times \vec{w}$. The reverse passage consists in solving the Cartesian equation, which has two free unknowns. For the plane $x + y - z = 1$ we set $y = s$, $z = t$ and obtain $x = 1 - s + t$, hence $P = (1, 0, 0) + s\,(-1, 1, 0) + t\,(1, 0, 1)$.
:::

## The line: parametric and Cartesian equations

:::definizione{#equazioni-parametriche-retta titolo="Parametric equations of the line"}
Let $P_0 = (x_0, y_0, z_0)$ be a point and $\vec{v} = (v_1, v_2, v_3)$ a nonzero vector. The line through $P_0$ parallel to $\vec{v}$ is the set of points $P = P_0 + t\,\vec{v}$ for $t \in \mathbb{R}$, that is, of the points whose coordinates satisfy
$$
\begin{cases}
x = x_0 + v_1\, t \\[4pt]
y = y_0 + v_2\, t \\[4pt]
z = z_0 + v_3\, t
\end{cases}
\qquad t \in \mathbb{R} .
$$
The vector $\vec{v}$ is called a **direction vector** of the line and its components are called **direction numbers**; like the normal vector of a plane, the direction vector is defined up to a nonzero factor. The line through two distinct points $A$ and $B$ has direction vector $\overrightarrow{AB}$.
:::

:::esempio
The line through $A = (1, -1, 2)$ with direction vector $\vec{v} = (2, 1, -3)$ has parametric equations $x = 1 + 2t$, $y = -1 + t$, $z = 2 - 3t$. The point $(5, 1, -4)$ belongs to the line, because it is obtained for $t = 2$. The point $(3, 0, 0)$ does *not* belong to the line, because the first two equations give $t = 1$ while the third gives $t = \dfrac{2}{3}$.
:::

:::definizione{#equazioni-cartesiane-retta titolo="Cartesian equations of the line"}
A line is the intersection of two non-parallel planes, so it is described by the system
$$
\begin{cases}
a_1 x + b_1 y + c_1 z + d_1 = 0 \\[4pt]
a_2 x + b_2 y + c_2 z + d_2 = 0
\end{cases}
\qquad \text{with } \operatorname{rk} \begin{pmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{pmatrix} = 2 .
$$
The two equations are called **Cartesian equations** of the line. The rank condition says that the normal vectors $\vec{n}_1$ and $\vec{n}_2$ are not parallel; by the **Rouché-Capelli theorem** the system then has $\infty^1$ solutions, which form a line. The Cartesian equations of a line are *not* unique, because any pair of distinct planes containing it represents it; the set of all these planes is the pencil of planes having the line as its axis.
:::

:::osservazione{#passaggio-tra-forme titolo="Passing between the two forms"}
- **From parametric to Cartesian**: solve for $t$ in an equation where its coefficient is nonzero and substitute it into the other two. For the line of the previous example, $t = y + 1$ gives $x = 2y + 3$ and $z = -3y - 1$, so the Cartesian equations are
$$
\begin{cases}
x - 2y - 3 = 0 \\[4pt]
3y + z + 1 = 0
\end{cases}
$$
- **From Cartesian to parametric**: solve the system choosing a free unknown as parameter, or compute a point and a direction vector. The line lies in both planes, so its direction vector is orthogonal to $\vec{n}_1$ and to $\vec{n}_2$, and one can take
$$
\vec{v} = \vec{n}_1 \times \vec{n}_2 .
$$
For the line with equations $x + y - z = 1$ and $2x - y + z = 2$ we obtain $\vec{v} = (1, 1, -1) \times (2, -1, 1) = (0, -3, -3)$, parallel to $(0, 1, 1)$. Adding the two equations gives $3x = 3$, hence $x = 1$ and $y = z$; a point of the line is $(1, 0, 0)$ and the parametric equations are $x = 1$, $y = t$, $z = t$.
:::

## Relative positions of two planes and of a line and a plane

::::teorema{#posizione-due-piani titolo="Relative position of two planes"}
Let $\pi_1 : a_1 x + b_1 y + c_1 z + d_1 = 0$ and $\pi_2 : a_2 x + b_2 y + c_2 z + d_2 = 0$ be two planes, and let $A$ and $(A \mid b)$ be the coefficient matrix and the augmented matrix of the system formed by the two equations.

- If $\operatorname{rk} A = 2$, the planes are **intersecting** and meet in a line.
- If $\operatorname{rk} A = 1$ and $\operatorname{rk} (A \mid b) = 2$, the planes are parallel and distinct.
- If $\operatorname{rk} A = \operatorname{rk} (A \mid b) = 1$, the planes coincide.

In practice the planes are *parallel* when the normal vectors are proportional, and *coincident* when the whole equations are proportional. The planes $x + 2y - z = 1$ and $2x + 4y - 2z = 5$ are parallel and distinct, since $(2, 4, -2) = 2\,(1, 2, -1)$ while $5 \neq 2 \cdot 1$.

:::dimostrazione
The points common to the two planes are the solutions of the system of two equations in three unknowns. If $\operatorname{rk} A = 2$, then also $\operatorname{rk} (A \mid b) = 2$, since the augmented matrix has two rows; by the **Rouché-Capelli theorem** the solutions then depend on $3 - 2 = 1$ parameter and form a line. If $\operatorname{rk} A = 1$, the two rows of $A$ are proportional, so the normal vectors are parallel. In this case, if $\operatorname{rk} (A \mid b) = 2$ the system has no solutions and the planes are disjoint; if $\operatorname{rk} (A \mid b) = 1$ the second equation is a multiple of the first and the two planes coincide.
:::
::::

:::richiamo{titolo="Rouché-Capelli theorem"}
Let $Ax = b$ be a linear system in $n$ unknowns. The system has solutions if and only if $\operatorname{rk} A = \operatorname{rk} (A \mid b)$; in that case the solutions depend on $n - \operatorname{rk} A$ free parameters.
:::

::::teorema{#posizione-retta-piano titolo="Relative position of a line and a plane"}
Let $r$ be the line $P = P_0 + t\,\vec{v}$ and $\pi$ the plane $ax + by + cz + d = 0$, with normal vector $\vec{n} = (a, b, c)$.

- If $\vec{n} \cdot \vec{v} \neq 0$, the line and the plane are **intersecting** at a single point.
- If $\vec{n} \cdot \vec{v} = 0$ and $P_0 \notin \pi$, the line is parallel to the plane and has no points in common with it.
- If $\vec{n} \cdot \vec{v} = 0$ and $P_0 \in \pi$, the line is contained in the plane.

The criterion requires a single dot product. In the intersecting case the common point is found by substituting the parametric equations into the equation of the plane. For $r : P = (1 + t,\ 2t,\ -1 + t)$ and $\pi : x - y + 2z = 1$ we have $\vec{n} \cdot \vec{v} = (1, -1, 2) \cdot (1, 2, 1) = 1 \neq 0$; the substitution gives $t - 1 = 1$, hence $t = 2$ and the common point is $(3, 4, 1)$.

:::dimostrazione
Let $P_0 = (x_0, y_0, z_0)$. Substituting the coordinates of $P_0 + t\,\vec{v}$ into the equation of the plane gives the first-degree equation in the unknown $t$
$$
(\vec{n} \cdot \vec{v})\, t + (a x_0 + b y_0 + c z_0 + d) = 0 .
$$
If $\vec{n} \cdot \vec{v} \neq 0$ the equation has a unique solution, so the line and the plane have a single common point. If $\vec{n} \cdot \vec{v} = 0$ the equation reduces to $a x_0 + b y_0 + c z_0 + d = 0$, which does not depend on $t$. If $P_0 \in \pi$ this equality is true, therefore every point of the line lies in the plane; if $P_0 \notin \pi$ it is false, therefore no point of the line lies in the plane.
:::
::::

## Relative positions of two lines

:::definizione{#rette-sghembe titolo="Coplanar lines and skew lines"}
Two lines in space are called **coplanar** if there exists a plane containing both of them, and **skew** otherwise. Two coplanar lines are *intersecting* if they have a single point in common, and *parallel* if they have parallel direction vectors; two parallel lines with a point in common coincide. Two skew lines have no common points and are not parallel, a situation that does not occur in the plane. The $x$-axis and the line with equations $x = 0$, $z = 1$ are skew, because they have no common points (on the first $z = 0$, on the second $z = 1$) and their direction vectors $(1, 0, 0)$ and $(0, 1, 0)$ are not parallel.
:::

::::teorema{#criterio-complanarita-rette titolo="Coplanarity criterion for two lines"}
Let $r$ be the line through $A$ with direction vector $\vec{v}$ and $s$ the line through $B$ with direction vector $\vec{w}$. The lines $r$ and $s$ are coplanar if and only if
$$
\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = 0 ,
$$
that is, if and only if the determinant of the matrix whose rows are the components of $\overrightarrow{AB}$, $\vec{v}$ and $\vec{w}$ is zero. The criterion establishes with a determinant of order $3$ whether two lines are skew, without looking for the common points.

:::dimostrazione
If $\vec{v}$ and $\vec{w}$ are parallel, the cross product $\vec{v} \times \vec{w}$ is zero and hence the scalar triple product is zero; on the other hand two parallel lines are coplanar, therefore in this case the equivalence holds. Now let $\vec{v}$ and $\vec{w}$ be non-parallel. If the lines lie in a plane $\pi$, the vectors $\overrightarrow{AB}$, $\vec{v}$, $\vec{w}$ are parallel to $\pi$, so they are coplanar and their scalar triple product is zero by the **coplanarity criterion** for vectors. Conversely, suppose the scalar triple product is zero and let $\pi$ be the plane through $A$ with normal vector $\vec{n} = \vec{v} \times \vec{w}$, which is nonzero. The plane contains $r$, since $A \in \pi$ and $\vec{n} \cdot \vec{v} = 0$. The plane also contains $B$, since $\vec{n} \cdot \overrightarrow{AB} = 0$, and since $\vec{n} \cdot \vec{w} = 0$ it contains the whole line $s$ by the theorem on the relative position of a line and a plane. Hence the lines are coplanar.
:::
::::

:::richiamo{titolo="Coplanarity criterion for three vectors"}
Three vectors $\vec{u}$, $\vec{v}$, $\vec{w}$ in space are coplanar if and only if $\vec{u} \cdot (\vec{v} \times \vec{w}) = 0$.
:::

:::osservazione{#classificazione-due-rette titolo="Classification of two lines"}
If one of the lines is given in Cartesian form, first compute a point and a direction vector of it. The classification then requires two checks.

- If $\vec{v}$ and $\vec{w}$ are parallel, the lines are **parallel**; they coincide if $B \in r$.
- If $\vec{v}$ and $\vec{w}$ are not parallel and $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = 0$, the lines are **intersecting**, and the common point is found by solving the system $A + t\,\vec{v} = B + u\,\vec{w}$ in the unknowns $t$ and $u$.
- If $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) \neq 0$, the lines are **skew**.
:::

:::esempio
Let $r : P = (t,\ 1 + t,\ 1)$, with $A = (0, 1, 1)$ and $\vec{v} = (1, 1, 0)$, and $s : P = (1,\ u,\ 2u)$, with $B = (1, 0, 0)$ and $\vec{w} = (0, 1, 2)$. The direction vectors are not parallel and $\vec{v} \times \vec{w} = (2, -2, 1)$. Since $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = (1, -1, -1) \cdot (2, -2, 1) = 3 \neq 0$, the lines are **skew**. The line $s' : P = (2,\ 2 + u,\ -1 + 2u)$, parallel to $s$ and passing through $B' = (2, 2, -1)$, gives instead $\overrightarrow{AB'} \cdot (\vec{v} \times \vec{w}) = (2, 1, -2) \cdot (2, -2, 1) = 0$, so $r$ and $s'$ are **intersecting**. The system $t = 2$, $1 + t = 2 + u$, $1 = -1 + 2u$ has the solution $t = 2$, $u = 1$, and the common point is $(2, 3, 1)$.
:::

## Angles between lines and planes

Angles are computed with the dot product of the direction and normal vectors, and the acute or right angle is always chosen.

:::definizione{#angolo-tra-rette titolo="Angle between two lines"}
Let $r$ and $s$ be two lines with direction vectors $\vec{v}$ and $\vec{w}$. The **angle** between $r$ and $s$ is the number $\theta \in \left[0, \dfrac{\pi}{2}\right]$ such that
$$
\cos\theta = \frac{|\vec{v} \cdot \vec{w}|}{\|\vec{v}\|\, \|\vec{w}\|} .
$$
The absolute value is necessary because the direction vector is defined up to sign, and replacing $\vec{v}$ with $-\vec{v}$ turns the angle between the vectors into its supplement. The definition also applies to skew lines. For $\vec{v} = (1, 1, 0)$ and $\vec{w} = (1, 0, 0)$ we have $\cos\theta = \dfrac{1}{\sqrt{2}}$, hence $\theta = \dfrac{\pi}{4}$.
:::

:::definizione{#angolo-retta-piano titolo="Angle between a line and a plane"}
Let $r$ be a line with direction vector $\vec{v}$ and $\pi$ a plane with normal vector $\vec{n}$. The **angle** between $r$ and $\pi$ is the angle $\theta \in \left[0, \dfrac{\pi}{2}\right]$ between $r$ and its orthogonal projection onto $\pi$, with $\theta = \dfrac{\pi}{2}$ if $r$ is perpendicular to $\pi$. Since $\vec{n}$ is orthogonal to the plane, the angle between $r$ and the direction of $\vec{n}$ is $\dfrac{\pi}{2} - \theta$, hence
$$
\sin\theta = \frac{|\vec{v} \cdot \vec{n}|}{\|\vec{v}\|\, \|\vec{n}\|} .
$$
The formula contains the *sine*, because the dot product measures the angle with the normal. For $\vec{v} = (1, 0, 1)$ and the plane $x + y = 2$, with $\vec{n} = (1, 1, 0)$, we have $\sin\theta = \dfrac{1}{2}$, hence $\theta = \dfrac{\pi}{6}$.

::grafico{f="0.5*x" vettori="0,0,0,2,n;0,0,2.4,1.2" etichette="1.0,0.85,v;1.3,0.2,θ;0.2,1.3,π/2 − θ;3,-0.4,π;-2.6,-1,r" xmin=-3 xmax=3.4 ymin=-1.6 ymax=2.5 uguale=1 nomi="x,z" titolo="Section by the plane $y = 0$ of the plane $\pi : z = 0$ and of the line $r$ through the origin with $\vec{v} = (2, 0, 1)$: $r$ forms the angle $\theta$ with $\pi$ and the angle $\dfrac{\pi}{2} - \theta$ with $\vec{n} = (0, 0, 1)$"}

:::

:::definizione{#angolo-tra-piani titolo="Angle between two planes"}
Let $\pi_1$ and $\pi_2$ be two planes with normal vectors $\vec{n}_1$ and $\vec{n}_2$. The **angle** between $\pi_1$ and $\pi_2$ is the number $\theta \in \left[0, \dfrac{\pi}{2}\right]$ such that
$$
\cos\theta = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{\|\vec{n}_1\|\, \|\vec{n}_2\|} .
$$
If the planes are intersecting, the section by a plane perpendicular to the common line shows them as two lines, and the normal vectors as two vectors orthogonal to those lines; therefore the angle between the normals equals the angle between the two lines of the section. For $\pi_1 : x - y = 0$ and $\pi_2 : y - z = 0$ we have $|\vec{n}_1 \cdot \vec{n}_2| = |(1, -1, 0) \cdot (0, 1, -1)| = 1$ and $\|\vec{n}_1\| = \|\vec{n}_2\| = \sqrt{2}$, hence $\cos\theta = \dfrac{1}{2}$ and $\theta = \dfrac{\pi}{3}$.

::grafico{f="x" vettori="0,0,0,1.8,n₁;0,0,-1.27,1.27,n₂" etichette="2.7,-0.4,π₁;2.1,2.5,π₂;0.6,0.22,θ;-0.35,1.05,θ" xmin=-2.4 xmax=3 ymin=-1.2 ymax=2.8 uguale=1 nomi="x,z" titolo="Section by the plane $y = 0$ of the planes $\pi_1 : z = 0$ and $\pi_2 : x - z = 0$, which intersect along the $y$-axis: the traces form the angle $\theta = \dfrac{\pi}{4}$, the same angle formed by the normal vectors $\vec{n}_1 = (0, 0, 1)$ and $\vec{n}_2 = (-1, 0, 1)$"}

:::

:::osservazione{#parallelismo-perpendicolarita titolo="Parallelism and perpendicularity"}
The conditions of parallelism and perpendicularity are read off the direction and normal vectors.

- A line $r$ is parallel to the plane $\pi$ if and only if $\vec{v} \cdot \vec{n} = 0$, and is perpendicular to $\pi$ if and only if $\vec{v}$ and $\vec{n}$ are parallel.
- Two planes are parallel if and only if $\vec{n}_1$ and $\vec{n}_2$ are parallel, and are perpendicular if and only if $\vec{n}_1 \cdot \vec{n}_2 = 0$.
- Two lines are perpendicular if and only if $\vec{v} \cdot \vec{w} = 0$, even when they are skew.

These conditions are used to write lines and planes subject to given constraints. The line through $P_0$ perpendicular to the plane $\pi$ has direction vector $\vec{n}$, and the plane through $P_0$ perpendicular to the line $r$ has normal vector $\vec{v}$.
:::

## Distances

::::teorema{#distanza-punto-piano titolo="Distance from a point to a plane"}
Let $P_1 = (x_1, y_1, z_1)$ be a point and $\pi : ax + by + cz + d = 0$ a plane. The distance from $P_1$ to $\pi$, that is, the minimum distance from $P_1$ to the points of $\pi$, is
$$
d(P_1, \pi) = \frac{|a x_1 + b y_1 + c z_1 + d|}{\sqrt{a^2 + b^2 + c^2}} ,
$$
and the minimum is attained at the foot $H$ of the perpendicular to $\pi$ drawn from $P_1$. The formula is the analogue of the one for the distance from a point to a line in the plane: in the numerator the coordinates of the point are substituted into the left-hand side of the equation, in the denominator there is the norm of the normal vector. For $P_1 = (2, 1, -1)$ and $\pi : x + 2y + 2z - 6 = 0$ we obtain $d = \dfrac{|2 + 2 - 2 - 6|}{3} = \dfrac{4}{3}$.

::grafico{f="2-x" vettori="3,-1,4,0,n;3,-1,3,3,P₀P₁" segmenti="3,3,1,1" punti="3,-1,pieno;1,1,pieno,H;3,3,pieno,P₁" etichette="-0.6,2.2,π;2.5,-1.35,P₀" xmin=-1 xmax=4.6 ymin=-1.8 ymax=3.6 uguale=1 nomi="x,z" titolo="Section by the plane $y = 0$ of the plane $\pi : x + z = 2$ and of the point $P_1 = (3, 0, 3)$: the distance $\|\overrightarrow{H P_1}\| = 2\sqrt{2}$ is the absolute value of the component of $\overrightarrow{P_0 P_1}$ along $\vec{n} = (1, 0, 1)$"}

:::dimostrazione
Let $\vec{n} = (a, b, c)$ and let $H$ be the point where the line through $P_1$ with direction vector $\vec{n}$ meets $\pi$; this point exists and is unique by the theorem on the relative position of a line and a plane, since $\vec{n} \cdot \vec{n} \neq 0$. For every $Q \in \pi$ the vector $\overrightarrow{HQ}$ is orthogonal to $\vec{n}$, while $\overrightarrow{H P_1}$ is parallel to $\vec{n}$, hence by the **Pythagorean theorem**
$$
\|\overrightarrow{Q P_1}\|^2 = \|\overrightarrow{H P_1}\|^2 + \|\overrightarrow{Q H}\|^2 \geq \|\overrightarrow{H P_1}\|^2 ,
$$
with equality only for $Q = H$. The distance is therefore $\|\overrightarrow{H P_1}\|$. Now let $P_0$ be a point of $\pi$. Since $\overrightarrow{P_0 P_1} = \overrightarrow{P_0 H} + \overrightarrow{H P_1}$ and $\overrightarrow{P_0 H}$ is orthogonal to $\vec{n}$, we have $\vec{n} \cdot \overrightarrow{P_0 P_1} = \vec{n} \cdot \overrightarrow{H P_1}$, and this last product equals $\pm \|\vec{n}\|\, \|\overrightarrow{H P_1}\|$ because the two vectors are parallel. Hence
$$
d(P_1, \pi) = \frac{|\vec{n} \cdot \overrightarrow{P_0 P_1}|}{\|\vec{n}\|} .
$$
Finally, $P_0$ satisfies the equation of the plane, therefore $a x_0 + b y_0 + c z_0 = -d$ and $\vec{n} \cdot \overrightarrow{P_0 P_1} = a x_1 + b y_1 + c z_1 + d$, which gives the formula.
:::
::::

::::teorema{#distanza-punto-retta titolo="Distance from a point to a line"}
Let $r$ be the line through $A$ with direction vector $\vec{v}$ and $P$ a point. The distance from $P$ to $r$ is
$$
d(P, r) = \frac{\|\overrightarrow{AP} \times \vec{v}\|}{\|\vec{v}\|} .
$$
Alternatively, one finds the foot $H$ of the perpendicular, by intersecting $r$ with the plane through $P$ orthogonal to $r$, and computes $\|\overrightarrow{HP}\|$; this second method also gives the projection of $P$ onto $r$. For $A = (1, 0, 0)$, $\vec{v} = (1, 2, 2)$ and $P = (2, 2, -1)$ we have $\overrightarrow{AP} \times \vec{v} = (1, 2, -1) \times (1, 2, 2) = (6, -3, 0)$, with norm $3\sqrt{5}$, and since $\|\vec{v}\| = 3$ the distance is $\sqrt{5}$.

::grafico{f="1+0*x" area="((x+2)/2+1+3-abs((x+2)/2+1-3))/2;(x/2+2+abs(x/2))/2;-2;4" vettori="-2,1,0,1,v;-2,1,2,3" segmenti="2,3,2,1" punti="-2,1,pieno;2,1,pieno,H;2,3,pieno,P" etichette="4.3,0.55,r;-0.6,2.2,AP;-2.6,1.2,A" xmin=-2.8 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="In the plane $z = 0$, the line $r$ through $A = (-2, 1, 0)$ with $\vec{v} = (2, 0, 0)$ and the point $P = (2, 3, 0)$: the parallelogram spanned by $\vec{v}$ and $\overrightarrow{AP}$ has base $\|\vec{v}\| = 2$ and height $d(P, r) = \|\overrightarrow{HP}\| = 2$"}

:::dimostrazione
Apply the vectors $\vec{v}$ and $\overrightarrow{AP}$ at the point $A$. The parallelogram they determine has area $\|\overrightarrow{AP} \times \vec{v}\|$, by the geometric meaning of the cross product. The same area is the product of base and height: the base is the side $\vec{v}$, of length $\|\vec{v}\|$, which lies on $r$, and the height relative to this base is the distance from $P$ to the line $r$. Dividing the area by $\|\vec{v}\|$ gives the formula.
:::
::::

:::osservazione{#distanze-tra-rette-e-piani titolo="Distances between lines and planes"}
The other distances reduce to the two previous formulas.

- Two parallel planes have distance equal to the distance from any point of one of them to the other. If the equations have the same coefficients, $ax + by + cz + d_1 = 0$ and $ax + by + cz + d_2 = 0$, the distance is $\dfrac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}$.
- A line parallel to a plane has, from the plane, the distance of any one of its points.
- Two parallel lines have distance equal to the distance from a point of one to the other.
- Lines and planes that have points in common have distance $0$.

The planes $x + 2y - 2z - 3 = 0$ and $x + 2y - 2z + 6 = 0$ have distance $\dfrac{|-3 - 6|}{3} = 3$. What remains is skew lines, whose distance is positive and is computed with the theorem on the common perpendicular.
:::

## Orthogonal projections and symmetric points

:::definizione{#proiezione-punto-piano titolo="Orthogonal projection of a point onto a plane"}
Let $P$ be a point and $\pi : ax + by + cz + d = 0$ a plane with normal vector $\vec{n}$. The **orthogonal projection** of $P$ onto $\pi$ is the point $H \in \pi$ such that $\overrightarrow{HP}$ is parallel to $\vec{n}$, that is, the foot of the perpendicular to $\pi$ drawn from $P$. To find it, intersect $\pi$ with the line $P + t\,\vec{n}$; solving the equation in $t$ gives
$$
H = P - \frac{a x_P + b y_P + c z_P + d}{a^2 + b^2 + c^2}\, \vec{n} .
$$
For $P = (3, 1, 2)$ and $\pi : x + y + z = 0$ the line $(3 + t,\ 1 + t,\ 2 + t)$ meets the plane when $6 + 3t = 0$, that is, for $t = -2$, hence $H = (1, -1, 0)$.
:::

:::definizione{#punto-simmetrico titolo="Symmetric point"}
The **symmetric** of a point $P$ with respect to a plane, or to a line, is the point $P'$ such that the orthogonal projection $H$ of $P$ is the midpoint of the segment $P P'$. From the midpoint formula it follows that
$$
P' = 2H - P ,
$$
where the operation is carried out on the coordinates. The symmetric with respect to a point $C$ is obtained with the same formula, with $H = C$. In the case of the plane $x + y + z = 0$ and of $P = (3, 1, 2)$ we have $H = (1, -1, 0)$, hence $P' = (2, -2, 0) - (3, 1, 2) = (-1, -3, -2)$; as a check, $\overrightarrow{P P'} = (-4, -4, -4)$ is parallel to $\vec{n}$.

::grafico{f="1+0*x" segmenti="1,3,1,-1" vettori="-1.5,1,-1.5,2.2,n" punti="1,3,pieno,P;1,1,pieno,H;1,-1,pieno,P′" etichette="2.6,1.25,π" xmin=-2.5 xmax=3 ymin=-1.6 ymax=3.6 uguale=1 nomi="x,z" titolo="Section by the plane $y = 0$ of the plane $\pi : z = 1$ and of the point $P = (1, 0, 3)$: the orthogonal projection $H = (1, 0, 1)$ is the midpoint of the segment $P P'$, with $P' = (1, 0, -1)$"}

:::

:::osservazione{#proiezione-punto-retta titolo="Orthogonal projection of a point onto a line"}
The orthogonal projection of $P$ onto the line $r : A + t\,\vec{v}$ is the point $H \in r$ such that $\overrightarrow{HP}$ is orthogonal to $\vec{v}$. There are two methods to find it.

- Intersect $r$ with the plane through $P$ that has normal vector $\vec{v}$.
- Impose $\left( P - A - t\,\vec{v} \right) \cdot \vec{v} = 0$, which gives $t = \dfrac{\overrightarrow{AP} \cdot \vec{v}}{\|\vec{v}\|^2}$, and substitute the value of $t$ into the equations of $r$.

For the line $r$ with parametric equations $x = 1 + t$, $y = t$, $z = -t$, with $A = (1, 0, 0)$ and $\vec{v} = (1, 1, -1)$, and for the point $P = (2, 3, 1)$ we have $\overrightarrow{AP} = (1, 3, 1)$ and $\overrightarrow{AP} \cdot \vec{v} = 1 + 3 - 1 = 3 = \|\vec{v}\|^2$, hence $t = 1$, $H = (2, 1, -1)$ and the symmetric of $P$ with respect to $r$ is $P' = (2, -1, -3)$. Moreover $d(P, r) = \|\overrightarrow{HP}\| = \|(0, 2, 2)\| = 2\sqrt{2}$.
:::

:::osservazione{#proiezione-retta-piano titolo="Orthogonal projection of a line onto a plane"}
Let $r$ be a line not perpendicular to the plane $\pi$. The orthogonal projections onto $\pi$ of the points of $r$ form a line, the intersection of $\pi$ with the plane that contains $r$ and is perpendicular to $\pi$. The plane that contains $r$ and is perpendicular to $\pi$ is determined with the pencil of planes with axis $r$. Alternatively, project two points of $r$; if $r$ meets $\pi$, it is convenient to choose as first point the intersection point, which coincides with its own projection. If $r$ is perpendicular to $\pi$, the projection is the single intersection point. On the plane $z = 0$ the projection is obtained by setting the third coordinate to zero, therefore the line $(1 + t,\ t,\ 2t)$ projects onto the line $(1 + t,\ t,\ 0)$.
:::

## Pencils of planes

:::definizione{#fascio-di-piani titolo="Pencil of planes"}
The **proper pencil** with axis $r$ is the set of all planes containing the line $r$. The **improper pencil** is the set of planes parallel to a given plane $ax + by + cz + d = 0$, that is, of the planes $ax + by + cz + k = 0$ for $k \in \mathbb{R}$. Pencils are used to write the plane that contains a given line and satisfies one more condition, such as passing through a point or being parallel to a line.

::grafico{f="0.5*x;-x;3*x" punti="0,0,pieno" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=2.5 uguale=1 nomi="x,z" titolo="Section by the plane $y = 0$ of three planes of the pencil whose axis is the $y$-axis: each plane of the pencil appears as a line through the origin, the point where the section meets the axis"}

:::

::::teorema{#piani-per-una-retta titolo="Planes containing a line"}
Let $r$ be the line with Cartesian equations $a_1 x + b_1 y + c_1 z + d_1 = 0$ and $a_2 x + b_2 y + c_2 z + d_2 = 0$, with non-parallel normal vectors $\vec{n}_1$ and $\vec{n}_2$. The planes containing $r$ are exactly the planes with equation
$$
\lambda\, (a_1 x + b_1 y + c_1 z + d_1) + \mu\, (a_2 x + b_2 y + c_2 z + d_2) = 0, \qquad (\lambda, \mu) \neq (0, 0) .
$$
To find the plane of the pencil that satisfies a further condition, impose the condition on the equation, obtaining a homogeneous linear equation in $\lambda$ and $\mu$; the pair $(\lambda, \mu)$ is determined up to a factor. Setting $\lambda = 1$ from the start excludes the second plane, which corresponds to $\lambda = 0$. For the line $x - y = 0$, $z - 1 = 0$ and the point $P = (1, 0, 0)$, the substitution gives $\lambda - \mu = 0$; with $\lambda = \mu = 1$ we obtain the plane $x - y + z - 1 = 0$.

:::dimostrazione
The equation of the pencil has coefficient vector $\lambda\,\vec{n}_1 + \mu\,\vec{n}_2$, which is nonzero since $\vec{n}_1$ and $\vec{n}_2$ are linearly independent and $(\lambda, \mu) \neq (0, 0)$; hence the equation represents a plane. Every point of $r$ makes both $a_1 x + b_1 y + c_1 z + d_1$ and $a_2 x + b_2 y + c_2 z + d_2$ vanish, therefore it makes their combination vanish, and the plane contains $r$. Conversely, let $\sigma$ be a plane containing $r$, with normal vector $\vec{n}$. Since $\sigma$ contains $r$, the vector $\vec{n}$ is orthogonal to the direction vector $\vec{v}$ of $r$. The vectors orthogonal to $\vec{v}$ form a subspace of dimension $2$, the orthogonal complement of $\langle \vec{v} \rangle$, which contains the independent vectors $\vec{n}_1$ and $\vec{n}_2$ and is therefore spanned by them; therefore $\vec{n} = \lambda\,\vec{n}_1 + \mu\,\vec{n}_2$ for suitable $\lambda$, $\mu$ not both zero. The plane of the pencil with these coefficients and the plane $\sigma$ have the same normal vector and both pass through a point $P_0$ of $r$, hence they are the same plane, by the definition of plane through a point orthogonal to a vector.
:::
::::

:::esempio{titolo="Plane through a line, perpendicular to a plane"}
We look for the plane that contains the line $r$ with equations $x + z - 1 = 0$, $y - 2 = 0$ and is perpendicular to the plane $\pi : x + y + 2z = 0$. The pencil with axis $r$ is $\lambda\,(x + z - 1) + \mu\,(y - 2) = 0$, with normal vector $(\lambda, \mu, \lambda)$. Perpendicularity to $\pi$ requires $(\lambda, \mu, \lambda) \cdot (1, 1, 2) = 3\lambda + \mu = 0$, so one can choose $\lambda = 1$, $\mu = -3$, and the required plane is
$$
x - 3y + z + 5 = 0 .
$$
The intersection of this plane with $\pi$ is the orthogonal projection of $r$ onto $\pi$.
:::

## Skew lines: distance and line of minimum distance

::::teorema{#perpendicolare-comune titolo="Common perpendicular to two skew lines"}
Let $r : A + t\,\vec{v}$ and $s : B + u\,\vec{w}$ be two skew lines. There exists one and only one line that meets both $r$ and $s$ and is perpendicular to both, called the **common perpendicular** or **line of minimum distance**. If $H \in r$ and $K \in s$ are the points where it meets the two lines, then for every $P \in r$ and $Q \in s$
$$
\|\overrightarrow{PQ}\| \geq \|\overrightarrow{HK}\| ,
$$
with equality only for $P = H$ and $Q = K$. The distance between $r$ and $s$ is therefore $d(r, s) = \|\overrightarrow{HK}\|$. To find $H$ and $K$, write them as generic points of the two lines and impose that $\overrightarrow{HK}$ be orthogonal to $\vec{v}$ and to $\vec{w}$.

::grafico{f="0.5*x;-x" punti="0,0,pieno" etichette="0.25,0.4,H and K;2.2,1.45,r;-2.2,2.6,s" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=3 uguale=1 titolo="The skew lines $r : y = \dfrac{x}{2},\ z = 0$ and $s : y = -x,\ z = 2$ seen from above: the projections onto the plane $z = 0$ meet at the origin, onto which the common perpendicular projects, the segment of the $z$-axis from $H = (0, 0, 0)$ to $K = (0, 0, 2)$"}

:::dimostrazione
Let $H = A + t\,\vec{v}$ and $K = B + u\,\vec{w}$, so that $\overrightarrow{HK} = \overrightarrow{AB} + u\,\vec{w} - t\,\vec{v}$. The conditions $\overrightarrow{HK} \cdot \vec{v} = 0$ and $\overrightarrow{HK} \cdot \vec{w} = 0$ form the linear system in the unknowns $t$ and $u$
$$
\begin{cases}
(\vec{v} \cdot \vec{v})\, t - (\vec{v} \cdot \vec{w})\, u = \overrightarrow{AB} \cdot \vec{v} \\[4pt]
(\vec{v} \cdot \vec{w})\, t - (\vec{w} \cdot \vec{w})\, u = \overrightarrow{AB} \cdot \vec{w}
\end{cases}
$$
whose determinant is $(\vec{v} \cdot \vec{w})^2 - \|\vec{v}\|^2 \|\vec{w}\|^2$. The lines are skew, so $\vec{v}$ and $\vec{w}$ are not parallel and by the **Cauchy-Schwarz inequality** the determinant is nonzero. The system therefore has a unique solution, and the points $H$, $K$ are distinct because the lines have no common points; the line $HK$ is thus the only line that meets both and is perpendicular to both. Now let $P = A + t'\,\vec{v}$ and $Q = B + u'\,\vec{w}$ be any two points of the two lines. We have
$$
\overrightarrow{PQ} = \overrightarrow{HK} + \left[ (u' - u)\, \vec{w} - (t' - t)\, \vec{v} \right] ,
$$
and the vector $(u' - u)\, \vec{w} - (t' - t)\, \vec{v}$ is orthogonal to $\overrightarrow{HK}$, since it is a combination of $\vec{v}$ and $\vec{w}$. By the **Pythagorean theorem**
$$
\|\overrightarrow{PQ}\|^2 = \|\overrightarrow{HK}\|^2 + \|(u' - u)\, \vec{w} - (t' - t)\, \vec{v}\|^2 \geq \|\overrightarrow{HK}\|^2 ,
$$
and equality holds only if the combination is zero, that is, since $\vec{v}$ and $\vec{w}$ are independent, only for $t' = t$ and $u' = u$.
:::
::::

:::richiamo{titolo="Cauchy-Schwarz inequality"}
For every pair of vectors $\vec{v}$, $\vec{w}$ we have $|\vec{v} \cdot \vec{w}| \leq \|\vec{v}\|\, \|\vec{w}\|$, with equality if and only if $\vec{v}$ and $\vec{w}$ are parallel.
:::

::::teorema{#distanza-rette-sghembe titolo="Distance between two skew lines"}
Let $r : A + t\,\vec{v}$ and $s : B + u\,\vec{w}$ be two skew lines. Then
$$
d(r, s) = \frac{|\overrightarrow{AB} \cdot (\vec{v} \times \vec{w})|}{\|\vec{v} \times \vec{w}\|} .
$$
The formula gives the distance without computing $H$ and $K$. The numerator is the scalar triple product of the coplanarity criterion, so the formula assigns a positive distance precisely to skew lines. For $r : P = (t,\ t,\ 0)$ and $s : P = (1,\ u,\ 2 + u)$ we have $\vec{v} \times \vec{w} = (1, 1, 0) \times (0, 1, 1) = (1, -1, 1)$ and $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = (1, 0, 2) \cdot (1, -1, 1) = 3$, hence $d(r, s) = \dfrac{3}{\sqrt{3}} = \sqrt{3}$.

:::dimostrazione
Let $H = A + t\,\vec{v}$ and $K = B + u\,\vec{w}$ be the points of the common perpendicular. Then $\overrightarrow{AB} = \overrightarrow{HK} + t\,\vec{v} - u\,\vec{w}$, and taking the dot product with $\vec{v} \times \vec{w}$, which is orthogonal to $\vec{v}$ and to $\vec{w}$, we obtain
$$
\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = \overrightarrow{HK} \cdot (\vec{v} \times \vec{w}) .
$$
The vector $\overrightarrow{HK}$ is orthogonal to $\vec{v}$ and to $\vec{w}$, which are independent, so it is parallel to $\vec{v} \times \vec{w}$, and the absolute value of their dot product is $\|\overrightarrow{HK}\|\, \|\vec{v} \times \vec{w}\|$. Dividing by $\|\vec{v} \times \vec{w}\|$ gives $\|\overrightarrow{HK}\| = d(r, s)$.
:::
::::

:::osservazione{#metodi-retta-minima-distanza titolo="Two methods for the line of minimum distance"}
- **Generic points method**: write $H = A + t\,\vec{v}$ and $K = B + u\,\vec{w}$, impose $\overrightarrow{HK} \cdot \vec{v} = 0$ and $\overrightarrow{HK} \cdot \vec{w} = 0$ and solve the system in $t$ and $u$. The required line is the line $HK$, and the method also gives the points of minimum distance and the distance.
- **Two planes method**: the common perpendicular has direction vector $\vec{n} = \vec{v} \times \vec{w}$, so it lies in the plane $\alpha$ that contains $r$ and is parallel to $\vec{n}$ and in the plane $\beta$ that contains $s$ and is parallel to $\vec{n}$. The plane $\alpha$ passes through $A$ with normal vector $\vec{v} \times \vec{n}$, the plane $\beta$ passes through $B$ with normal vector $\vec{w} \times \vec{n}$, and their equations are the Cartesian equations of the common perpendicular.
:::

:::esempio{titolo="Line of minimum distance"}
For the lines $r : P = (t,\ t,\ 0)$ and $s : P = (1,\ u,\ 2 + u)$ the generic points are $H = (t, t, 0)$ and $K = (1, u, 2 + u)$, hence $\overrightarrow{HK} = (1 - t,\ u - t,\ 2 + u)$. The two orthogonality conditions are
$$
\begin{cases}
\overrightarrow{HK} \cdot (1, 1, 0) = 1 - 2t + u = 0 \\[4pt]
\overrightarrow{HK} \cdot (0, 1, 1) = 2 - t + 2u = 0
\end{cases}
$$
From the first equation $u = 2t - 1$, and substituting into the second gives $3t = 0$; hence $t = 0$, $u = -1$, $H = (0, 0, 0)$ and $K = (1, -1, 1)$. The line of minimum distance is $P = (\lambda,\ -\lambda,\ \lambda)$ with $\lambda \in \mathbb{R}$, and $\|\overrightarrow{HK}\| = \sqrt{3}$ confirms the distance computed with the formula.
:::
