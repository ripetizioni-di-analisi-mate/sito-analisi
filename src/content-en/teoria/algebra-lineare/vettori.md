---
titolo: Vectors in the plane and in space
sommario: What a geometric vector is, how to compute with components, and how the dot product, the cross product and the scalar triple product measure angles, areas and volumes and detect orthogonality, parallelism and coplanarity.
---

## Geometric vectors and operations

:::definizione{#vettore-geometrico titolo="Geometric vector"}
A directed segment $AB$ is a segment with a first endpoint $A$ (the tail) and a second endpoint $B$ (the head). Two directed segments are called **equipollent** if they have the same length, the same direction (that is, they lie on parallel lines) and the same orientation. A **geometric vector** is the class of all directed segments equipollent to a given one; the vector determined by $AB$ is denoted by $\overrightarrow{AB}$, a generic vector by $\vec{v}$.

A vector therefore has three attributes: length, direction and orientation. The starting point is free, since given a point $P$ and a vector $\vec{v}$ there exists exactly one point $Q$ such that $\overrightarrow{PQ} = \vec{v}$; one then says that $\vec{v}$ is applied at $P$. The **zero vector** $\vec{0}$ is represented by the segments whose tail and head coincide, $\vec{0} = \overrightarrow{AA}$; it has length zero and undefined direction.
:::

:::definizione{#somma-di-vettori titolo="Sum of vectors"}
Let $\vec{v}$ and $\vec{w}$ be two vectors. Apply $\vec{v}$ at a point $A$, obtaining $\vec{v} = \overrightarrow{AB}$, and apply $\vec{w}$ at the head $B$, obtaining $\vec{w} = \overrightarrow{BC}$. The **sum** is
$$
\vec{v} + \vec{w} = \overrightarrow{AC} .
$$
This is the head-to-tail rule; when $\vec{v}$ and $\vec{w}$ are applied at the same point and are not parallel, $\vec{v} + \vec{w}$ is the diagonal of the parallelogram having the two vectors as sides (**parallelogram rule**). In physics the sum of vectors describes the composition of displacements and of forces.

::grafico{vettori="0,0,3,1,u;0,0,1,2,v;0,0,4,3,u + v" segmenti="3,1,4,3;1,2,4,3" xmin=-0.6 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="Parallelogram rule: $\vec{u} + \vec{v}$ is the diagonal of the parallelogram with sides $\vec{u}$ and $\vec{v}$"}

:::

:::definizione{#prodotto-per-scalare titolo="Multiplication by a scalar"}
Let $\lambda \in \mathbb{R}$ and let $\vec{v}$ be a vector. The vector $\lambda \vec{v}$ has length equal to $|\lambda|$ times the length of $\vec{v}$, the same direction as $\vec{v}$, the same orientation if $\lambda > 0$ and the opposite orientation if $\lambda < 0$; if $\lambda = 0$ or $\vec{v} = \vec{0}$, one sets $\lambda \vec{v} = \vec{0}$. The vector $(-1)\vec{v}$ is denoted by $-\vec{v}$ and is the **opposite** of $\vec{v}$; the **difference** is $\vec{v} - \vec{w} = \vec{v} + (-\vec{w})$. If $\vec{v} = \overrightarrow{AB}$ and $\vec{w} = \overrightarrow{AC}$, then $\vec{v} - \vec{w} = \overrightarrow{CB}$, that is, the difference is the vector going from the head of $\vec{w}$ to the head of $\vec{v}$.

::grafico{vettori="0,0,3,1,v;0,0,1,2,w;1,2,3,1,v − w" xmin=-0.6 xmax=3.8 ymin=-0.6 ymax=2.8 uguale=1 titolo="The difference $\vec{v} - \vec{w}$ goes from the head of $\vec{w}$ to the head of $\vec{v}$, because $\vec{w} + (\vec{v} - \vec{w}) = \vec{v}$"}

:::

:::osservazione{#proprieta-delle-operazioni titolo="Properties of the operations"}
For every triple of vectors $\vec{u}, \vec{v}, \vec{w}$ and for every $\lambda, \mu \in \mathbb{R}$ the following properties hold.

- Commutativity and associativity of the sum: $\vec{v} + \vec{w} = \vec{w} + \vec{v}$ and $(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$.
- Identity element and opposite: $\vec{v} + \vec{0} = \vec{v}$ and $\vec{v} + (-\vec{v}) = \vec{0}$.
- Distributivity: $\lambda(\vec{v} + \vec{w}) = \lambda\vec{v} + \lambda\vec{w}$ and $(\lambda + \mu)\vec{v} = \lambda\vec{v} + \mu\vec{v}$.
- Mixed associativity and unit: $\lambda(\mu\vec{v}) = (\lambda\mu)\vec{v}$ and $1\,\vec{v} = \vec{v}$.

These are the same properties that define a **vector space**, and the general theory is covered in the topic on vector spaces.
:::

## Components in a Cartesian coordinate system

:::definizione{#componenti titolo="Components of a vector"}
Fix in space an orthogonal Cartesian coordinate system $Oxyz$ and denote by $\vec{i}$, $\vec{j}$, $\vec{k}$ the vectors of length $1$ oriented like the three axes. Every vector $\vec{v}$, applied at the origin, has its head at exactly one point $P = (v_1, v_2, v_3)$, and
$$
\vec{v} = \overrightarrow{OP} = v_1 \vec{i} + v_2 \vec{j} + v_3 \vec{k} .
$$
The numbers $v_1, v_2, v_3$ are the **components** of $\vec{v}$, and one writes $\vec{v} = (v_1, v_2, v_3)$. In this way the vectors of space correspond to the triples of $\mathbb{R}^3$, and the vectors of the plane, with a coordinate system $Oxy$, to the pairs of $\mathbb{R}^2$. In particular $\vec{i} = (1, 0, 0)$, $\vec{j} = (0, 1, 0)$, $\vec{k} = (0, 0, 1)$ and $\vec{0} = (0, 0, 0)$.

::grafico{vettori="0,0,3,2,v;0,0,1,0,i;0,0,0,1,j" segmenti="3,0,3,2;0,2,3,2" punti="3,2,pieno,P" xmin=-0.6 xmax=3.8 ymin=-0.6 ymax=2.8 uguale=1 titolo="In the plane $\vec{v} = \overrightarrow{OP} = 3\,\vec{i} + 2\,\vec{j}$, therefore $\vec{v} = (3, 2)$"}

:::

:::teorema{#operazioni-in-componenti titolo="Operations in components"}
Let $\vec{v} = (v_1, v_2, v_3)$, $\vec{w} = (w_1, w_2, w_3)$ and $\lambda \in \mathbb{R}$. Then
$$
\vec{v} + \vec{w} = (v_1 + w_1,\ v_2 + w_2,\ v_3 + w_3),
\qquad
\lambda \vec{v} = (\lambda v_1,\ \lambda v_2,\ \lambda v_3) .
$$
The formula follows from the properties of the operations: adding $v_1\vec{i} + v_2\vec{j} + v_3\vec{k}$ and $w_1\vec{i} + w_2\vec{j} + w_3\vec{k}$ and collecting $\vec{i}$, $\vec{j}$, $\vec{k}$ gives the components of the sum, and the same holds for multiplication by $\lambda$. Geometric operations thus become computations with numbers; for $\vec{v} = (1, 2, -1)$ and $\vec{w} = (3, 0, 2)$ one has $2\vec{v} - \vec{w} = (2 - 3,\ 4 - 0,\ -2 - 2) = (-1, 4, -4)$.
:::

:::teorema{#vettore-tra-due-punti titolo="Vector between two points and midpoint"}
Let $A = (a_1, a_2, a_3)$ and $B = (b_1, b_2, b_3)$. Then
$$
\overrightarrow{AB} = (b_1 - a_1,\ b_2 - a_2,\ b_3 - a_3),
$$
and the midpoint of the segment $AB$ is
$$
M = \left( \frac{a_1 + b_1}{2},\ \frac{a_2 + b_2}{2},\ \frac{a_3 + b_3}{2} \right) .
$$
By the head-to-tail rule $\overrightarrow{OA} + \overrightarrow{AB} = \overrightarrow{OB}$, hence $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$, which in components is the first formula. The midpoint satisfies $\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB}$, therefore $\overrightarrow{OM} = \overrightarrow{OA} + \dfrac{1}{2}\left(\overrightarrow{OB} - \overrightarrow{OA}\right) = \dfrac{1}{2}\left(\overrightarrow{OA} + \overrightarrow{OB}\right)$. By the same reasoning the point $P$ such that $\overrightarrow{AP} = t\,\overrightarrow{AB}$ has coordinates $A + t\,(B - A)$; for $t \in [0, 1]$ the point $P$ traces the segment $AB$, for $t \in \mathbb{R}$ the line $AB$.
:::

:::definizione{#combinazione-lineare titolo="Linear combination"}
Given the vectors $\vec{v}_1, \dots, \vec{v}_k$ and the real numbers $\lambda_1, \dots, \lambda_k$, the vector
$$
\lambda_1 \vec{v}_1 + \lambda_2 \vec{v}_2 + \dots + \lambda_k \vec{v}_k
$$
is a **linear combination** of $\vec{v}_1, \dots, \vec{v}_k$ with coefficients $\lambda_1, \dots, \lambda_k$. Writing a vector as a linear combination of given vectors means finding the coefficients, and equating the components yields a linear system. The expression $\vec{v} = v_1\vec{i} + v_2\vec{j} + v_3\vec{k}$ is the linear combination of the three unit vectors of the axes with coefficients equal to the components.
:::

:::esempio{titolo="Coefficients of a combination"}
In the plane we look for a way to write $\vec{w} = (5, 1)$ as a combination of $\vec{u} = (1, 1)$ and $\vec{v} = (1, -1)$. The equality $\alpha\vec{u} + \beta\vec{v} = \vec{w}$, read component by component, is the system
$$
\begin{cases}
\alpha + \beta = 5 \\[4pt]
\alpha - \beta = 1
\end{cases}
$$
which has the unique solution $\alpha = 3$, $\beta = 2$, therefore $\vec{w} = 3\vec{u} + 2\vec{v}$.

::grafico{vettori="0,0,1,1,u;0,0,1,-1,v;0,0,3,3,3u;3,3,5,1,2v;0,0,5,1,w" xmin=-0.6 xmax=5.8 ymin=-1.6 ymax=3.6 uguale=1 titolo="$\vec{w} = (5, 1)$ is obtained by adding $3\vec{u}$ and $2\vec{v}$ with the head-to-tail rule"}

:::

## Magnitude, distance and unit vectors

:::definizione{#modulo titolo="Magnitude of a vector"}
The **magnitude** (or norm) of $\vec{v}$ is the length of any of its representatives and is denoted by $\|\vec{v}\|$. In components, for $\vec{v} = (v_1, v_2, v_3)$,
$$
\|\vec{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2} .
$$
The formula follows by applying the **Pythagorean theorem** twice: the projection of $\overrightarrow{OP}$ onto the $xy$-plane has length $\sqrt{v_1^2 + v_2^2}$, and together with the vertical segment of length $|v_3|$ it forms a right triangle with hypotenuse $OP$. In the plane the magnitude is $\sqrt{v_1^2 + v_2^2}$. One has $\|\vec{v}\| \geq 0$, with equality *only* for $\vec{v} = \vec{0}$, and $\|\lambda\vec{v}\| = |\lambda|\,\|\vec{v}\|$; for example $\|(2, -1, 2)\| = \sqrt{4 + 1 + 4} = 3$.
:::

:::definizione{#distanza-tra-punti titolo="Distance between two points"}
The **distance** between the points $A$ and $B$ is the magnitude of the vector $\overrightarrow{AB}$:
$$
d(A, B) = \|\overrightarrow{AB}\| = \sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2 + (b_3 - a_3)^2} .
$$
For $A = (1, 0, 2)$ and $B = (3, -1, 4)$ one has $\overrightarrow{AB} = (2, -1, 2)$, therefore $d(A, B) = 3$.
:::

:::definizione{#versore titolo="Unit vector"}
A **unit vector** is a vector of magnitude $1$. If $\vec{v} \neq \vec{0}$, the unit vector of $\vec{v}$ is
$$
\frac{\vec{v}}{\|\vec{v}\|} ,
$$
which has the same direction and the same orientation as $\vec{v}$, because $\dfrac{1}{\|\vec{v}\|} > 0$, and has magnitude $\dfrac{\|\vec{v}\|}{\|\vec{v}\|} = 1$. The unit vector separates direction and orientation from length: the vectors of magnitude $r$ parallel to $\vec{v}$ are $\pm\, r\,\dfrac{\vec{v}}{\|\vec{v}\|}$. For $\vec{v} = (2, -1, 2)$ the unit vector is $\left( \dfrac{2}{3}, -\dfrac{1}{3}, \dfrac{2}{3} \right)$.
:::

## Dot product and angle between vectors

:::definizione{#angolo-tra-vettori titolo="Angle between two vectors"}
Let $\vec{u}$ and $\vec{v}$ be nonzero vectors applied at the same point. The **angle** between $\vec{u}$ and $\vec{v}$ is the angle $\theta \in [0, \pi]$ formed by the two rays containing them. One has $\theta = 0$ when the vectors have the same direction and the same orientation, $\theta = \pi$ when they have the same direction and opposite orientations. The angle does not depend on the length of the vectors, and the dot product makes it possible to compute it from the components.
:::

:::definizione{#prodotto-scalare titolo="Dot product"}
Let $\vec{u}$ and $\vec{v}$ be nonzero vectors and let $\theta$ be the angle between them. The **dot product** (or scalar product) is the real number
$$
\vec{u} \cdot \vec{v} = \|\vec{u}\|\, \|\vec{v}\| \cos\theta ;
$$
if one of the two vectors is zero one sets $\vec{u} \cdot \vec{v} = 0$. The notation $\langle \vec{u}, \vec{v} \rangle$ is also used. The sign of the dot product indicates whether the angle is acute ($\vec{u} \cdot \vec{v} > 0$), right ($\vec{u} \cdot \vec{v} = 0$) or obtuse ($\vec{u} \cdot \vec{v} < 0$). For $\vec{u} = \vec{v}$ one has $\theta = 0$, therefore $\vec{v} \cdot \vec{v} = \|\vec{v}\|^2$.
:::

::::teorema{#prodotto-scalare-in-componenti titolo="Dot product in components"}
Let $\vec{u} = (u_1, u_2, u_3)$ and $\vec{v} = (v_1, v_2, v_3)$. Then
$$
\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 .
$$
In the plane the formula is $u_1 v_1 + u_2 v_2$. The theorem makes the dot product computable without knowing the angle, and therefore allows one to find the angle from the components. For $\vec{u} = (1, 2, 2)$ and $\vec{v} = (2, 0, -1)$ one has $\vec{u} \cdot \vec{v} = 2 + 0 - 2 = 0$.

:::dimostrazione
If one of the two vectors is zero, both sides equal $0$. Otherwise apply $\vec{u}$ and $\vec{v}$ at the origin, with heads $U$ and $V$; the vector $\overrightarrow{VU}$ is $\vec{u} - \vec{v}$. The **law of cosines** in the triangle $OUV$ gives
$$
\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2 - 2\,\|\vec{u}\|\,\|\vec{v}\|\cos\theta ,
$$
and the equality also holds when the triangle is degenerate ($\theta = 0$ or $\theta = \pi$), because in that case it reduces to $(a - b)^2$ or $(a + b)^2$ with $a = \|\vec{u}\|$, $b = \|\vec{v}\|$. In components the left-hand side is
$$
\begin{aligned}
\|\vec{u} - \vec{v}\|^2
&= (u_1 - v_1)^2 + (u_2 - v_2)^2 + (u_3 - v_3)^2 \\[6pt]
&= \|\vec{u}\|^2 + \|\vec{v}\|^2 - 2\,(u_1 v_1 + u_2 v_2 + u_3 v_3) .
\end{aligned}
$$
Comparing the two expressions gives $\|\vec{u}\|\,\|\vec{v}\|\cos\theta = u_1 v_1 + u_2 v_2 + u_3 v_3$, which is the claim.
:::
::::

:::richiamo{titolo="Law of cosines"}
In a triangle with sides of length $a$, $b$, $c$, if $\gamma$ is the angle between the sides $a$ and $b$, then $c^2 = a^2 + b^2 - 2ab\cos\gamma$.
:::

:::teorema{#proprieta-del-prodotto-scalare titolo="Properties of the dot product"}
For every triple of vectors $\vec{u}, \vec{v}, \vec{w}$ and for every $\lambda \in \mathbb{R}$:

- symmetry: $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$;
- linearity: $(\vec{u} + \vec{w}) \cdot \vec{v} = \vec{u} \cdot \vec{v} + \vec{w} \cdot \vec{v}$ and $(\lambda\vec{u}) \cdot \vec{v} = \lambda\,(\vec{u} \cdot \vec{v})$;
- positivity: $\vec{v} \cdot \vec{v} = \|\vec{v}\|^2 \geq 0$, with equality only for $\vec{v} = \vec{0}$.

The three properties follow from the formula in components, since $u_1 v_1 + u_2 v_2 + u_3 v_3$ is symmetric and linear in each vector. Thanks to linearity the dot product expands like a product of binomials; for example $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$.
:::

:::osservazione{#calcolo-dell-angolo titolo="Computing the angle"}
From the definition and the formula in components, for nonzero $\vec{u}, \vec{v}$,
$$
\cos\theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\,\|\vec{v}\|} = \frac{u_1 v_1 + u_2 v_2 + u_3 v_3}{\|\vec{u}\|\,\|\vec{v}\|},
\qquad \theta \in [0, \pi] ,
$$
and since cosine is invertible on $[0, \pi]$ the angle is $\theta = \arccos\left( \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\,\|\vec{v}\|} \right)$. The angles of a triangle $ABC$ are computed in the same way: the angle at $A$ is the one between $\overrightarrow{AB}$ and $\overrightarrow{AC}$, with *both* vectors leaving $A$.
:::

:::esempio{titolo="Angle between two vectors"}
For $\vec{u} = (1, 0, 1)$ and $\vec{v} = (0, 1, 1)$ one has $\vec{u} \cdot \vec{v} = 1$ and $\|\vec{u}\| = \|\vec{v}\| = \sqrt{2}$, therefore $\cos\theta = \dfrac{1}{2}$ and $\theta = \dfrac{\pi}{3}$.
:::

## Orthogonality and orthogonal projection

:::definizione{#ortogonalita titolo="Orthogonal vectors"}
Two vectors $\vec{u}$ and $\vec{v}$ are called **orthogonal**, written $\vec{u} \perp \vec{v}$, if $\vec{u} \cdot \vec{v} = 0$. If the vectors are nonzero, they are orthogonal if and only if they form a right angle. Indeed $\|\vec{u}\|\,\|\vec{v}\| \neq 0$, so $\vec{u} \cdot \vec{v} = 0$ is equivalent to $\cos\theta = 0$, and the only angle in $[0, \pi]$ with zero cosine is $\theta = \dfrac{\pi}{2}$. With this definition the zero vector is orthogonal to *every* vector. In components the condition is an equation; for $\vec{u} = (k, 1, 2)$ and $\vec{v} = (1, k, -1)$ one has $\vec{u} \cdot \vec{v} = 2k - 2$, therefore the vectors are orthogonal only for $k = 1$.
:::

:::osservazione{#vettori-ortogonali-nel-piano titolo="Orthogonal vectors in the plane"}
In the plane, if $\vec{v} = (a, b) \neq \vec{0}$, the vector $(-b, a)$ is orthogonal to $\vec{v}$, because $a(-b) + ba = 0$, and it has the same magnitude as $\vec{v}$. The vectors orthogonal to $\vec{v}$ are *exactly* the multiples $t\,(-b, a)$ with $t \in \mathbb{R}$, since the condition $ax + by = 0$ is an equation in two unknowns with coefficients not both zero, and its solutions form the line through the origin with direction $(-b, a)$.

::grafico{vettori="0,0,3,1,v;0,0,-1,3,w" f="-3*x" punti="0,0,pieno" xmin=-2.2 xmax=3.8 ymin=-1.6 ymax=3.6 uguale=1 titolo="The vectors orthogonal to $\vec{v} = (3, 1)$ are the multiples of $\vec{w} = (-1, 3)$ and lie on the line $3x + y = 0$"}

:::

::::teorema{#proiezione-ortogonale titolo="Orthogonal projection onto a vector"}
Let $\vec{u} \neq \vec{0}$ and $\vec{v}$ be two vectors. There exists a unique pair of vectors $\vec{v}_{\parallel}$ and $\vec{v}_{\perp}$ such that
$$
\begin{cases}
\vec{v} = \vec{v}_{\parallel} + \vec{v}_{\perp} \\[4pt]
\vec{v}_{\parallel} = \lambda\,\vec{u} \ \text{ for some } \lambda \in \mathbb{R} \\[4pt]
\vec{v}_{\perp} \cdot \vec{u} = 0
\end{cases}
$$
and
$$
\vec{v}_{\parallel} = \operatorname{pr}_{\vec{u}}(\vec{v}) = \frac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2}\, \vec{u},
\qquad
\vec{v}_{\perp} = \vec{v} - \operatorname{pr}_{\vec{u}}(\vec{v}) .
$$
The vector $\operatorname{pr}_{\vec{u}}(\vec{v})$ is the **orthogonal projection** of $\vec{v}$ onto the direction of $\vec{u}$, and the number $\dfrac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|} = \|\vec{v}\|\cos\theta$ is the component of $\vec{v}$ along $\vec{u}$, with negative sign when the angle is obtuse. The decomposition is used to compute heights of triangles, feet of perpendiculars and components of a force along a given direction.

::grafico{vettori="0,0,2,1,u;0,0,3,4,v;0,0,4,2,pr(v);4,2,3,4,v⊥" segmenti="-1,-0.5,5,2.5" xmin=-1 xmax=5 ymin=-0.8 ymax=4.6 uguale=1 titolo="For $\vec{v} = (3, 4)$ and $\vec{u} = (2, 1)$ one has $\dfrac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2} = 2$, therefore $\operatorname{pr}_{\vec{u}}(\vec{v}) = (4, 2)$ and $\vec{v}_{\perp} = (-1, 2)$"}

:::dimostrazione
We look for $\vec{v}_{\parallel} = \lambda\vec{u}$; then $\vec{v}_{\perp} = \vec{v} - \lambda\vec{u}$ is determined by $\lambda$, and by linearity of the dot product the third condition becomes
$$
(\vec{v} - \lambda\vec{u}) \cdot \vec{u} = \vec{v} \cdot \vec{u} - \lambda\,\|\vec{u}\|^2 = 0 .
$$
Since $\vec{u} \neq \vec{0}$, the coefficient $\|\vec{u}\|^2$ is nonzero, so the equation has the unique solution $\lambda = \dfrac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2}$. Therefore the pair exists and is unique.
:::
::::

:::esempio{titolo="Decomposition of a vector"}
For $\vec{v} = (3, 1, 2)$ and $\vec{u} = (1, 1, 0)$ one has $\vec{v} \cdot \vec{u} = 4$ and $\|\vec{u}\|^2 = 2$, therefore $\vec{v}_{\parallel} = 2\vec{u} = (2, 2, 0)$ and $\vec{v}_{\perp} = (1, -1, 2)$. The check $\vec{v}_{\perp} \cdot \vec{u} = 1 - 1 + 0 = 0$ confirms the result.
:::

## Cross product

:::definizione{#prodotto-vettoriale titolo="Cross product"}
Let $\vec{u} = (u_1, u_2, u_3)$ and $\vec{v} = (v_1, v_2, v_3)$ be vectors in space. The **cross product** (or vector product) is the vector
$$
\vec{u} \times \vec{v} = \left( u_2 v_3 - u_3 v_2,\ \ u_3 v_1 - u_1 v_3,\ \ u_1 v_2 - u_2 v_1 \right) .
$$
To remember the formula one writes it as a symbolic determinant expanded along the first row:
$$
\vec{u} \times \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
u_1 & u_2 & u_3 \\
v_1 & v_2 & v_3
\end{vmatrix}
= \begin{vmatrix} u_2 & u_3 \\ v_2 & v_3 \end{vmatrix} \vec{i}
- \begin{vmatrix} u_1 & u_3 \\ v_1 & v_3 \end{vmatrix} \vec{j}
+ \begin{vmatrix} u_1 & u_2 \\ v_1 & v_2 \end{vmatrix} \vec{k} ,
$$
where $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$; the minus sign in front of the second component is part of the rule. The cross product is defined only for vectors in space, and the result is a vector, whereas the dot product is a number.
:::

:::esempio{titolo="Computing a cross product"}
For $\vec{u} = (1, 0, -1)$ and $\vec{v} = (2, 2, -1)$ one has
$$
\vec{u} \times \vec{v} = \big( 0 \cdot (-1) - (-1) \cdot 2,\ \ (-1) \cdot 2 - 1 \cdot (-1),\ \ 1 \cdot 2 - 0 \cdot 2 \big) = (2, -1, 2) .
$$
The result is orthogonal to both factors, since $(2, -1, 2) \cdot (1, 0, -1) = 0$ and $(2, -1, 2) \cdot (2, 2, -1) = 4 - 2 - 2 = 0$.
:::

:::teorema{#proprieta-algebriche-del-prodotto-vettoriale titolo="Algebraic properties of the cross product"}
For every triple of vectors $\vec{u}, \vec{v}, \vec{w}$ in space and for every $\lambda \in \mathbb{R}$:

- anticommutativity: $\vec{v} \times \vec{u} = -\,\vec{u} \times \vec{v}$, and in particular $\vec{u} \times \vec{u} = \vec{0}$;
- linearity: $(\vec{u} + \vec{w}) \times \vec{v} = \vec{u} \times \vec{v} + \vec{w} \times \vec{v}$ and $(\lambda\vec{u}) \times \vec{v} = \lambda\,(\vec{u} \times \vec{v})$;
- products of the unit vectors: $\vec{i} \times \vec{j} = \vec{k}$, $\vec{j} \times \vec{k} = \vec{i}$, $\vec{k} \times \vec{i} = \vec{j}$.

All of them follow from the formula in components, because swapping $\vec{u}$ and $\vec{v}$ changes the sign of every component and every component is linear in $\vec{u}$. By anticommutativity the order of the factors matters, and reversing it reverses the orientation of the result.
:::

:::attenzione
The cross product is *not* associative. With the unit vectors of the axes one has
$$
\vec{i} \times (\vec{i} \times \vec{j}) = \vec{i} \times \vec{k} = -\vec{j},
\qquad
(\vec{i} \times \vec{i}) \times \vec{j} = \vec{0} \times \vec{j} = \vec{0} ,
$$
therefore in a product of three vectors one must always indicate which product is performed first.
:::

::::teorema{#proprieta-geometriche-del-prodotto-vettoriale titolo="Geometric meaning of the cross product"}
Let $\vec{u}$ and $\vec{v}$ be nonzero vectors in space and let $\theta \in [0, \pi]$ be the angle between them. Then:

- $\vec{u} \times \vec{v}$ is orthogonal to both $\vec{u}$ and $\vec{v}$;
- $\|\vec{u} \times \vec{v}\| = \|\vec{u}\|\,\|\vec{v}\|\sin\theta$;
- if $\vec{u} \times \vec{v} \neq \vec{0}$, the orientation of $\vec{u} \times \vec{v}$ is given by the right-hand rule: with the thumb along $\vec{u}$ and the index finger along $\vec{v}$, the middle finger points along $\vec{u} \times \vec{v}$.

The first property provides a vector orthogonal to two given vectors with a single computation. If $\vec{u}$ and $\vec{v}$ are not parallel, the vectors orthogonal to both are *exactly* the multiples of $\vec{u} \times \vec{v}$, since they are orthogonal to the plane determined by $\vec{u}$ and $\vec{v}$ and therefore have the direction of the line perpendicular to that plane. The second property is the basis of the area formulas. The orientation rule is derived from the case $\vec{i} \times \vec{j} = \vec{k}$, and its justification is omitted.

:::dimostrazione
For the first property one computes
$$
\begin{aligned}
\vec{u} \cdot (\vec{u} \times \vec{v})
&= u_1 (u_2 v_3 - u_3 v_2) + u_2 (u_3 v_1 - u_1 v_3) + u_3 (u_1 v_2 - u_2 v_1) \\[6pt]
&= u_1 u_2 v_3 - u_1 u_3 v_2 + u_2 u_3 v_1 - u_1 u_2 v_3 + u_1 u_3 v_2 - u_2 u_3 v_1 \\[6pt]
&= 0 ,
\end{aligned}
$$
and similarly $\vec{v} \cdot (\vec{u} \times \vec{v}) = 0$. For the second one proves **Lagrange's identity**
$$
\|\vec{u} \times \vec{v}\|^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2 - (\vec{u} \cdot \vec{v})^2 .
$$
Expanding the right-hand side, the terms $u_i^2 v_i^2$ cancel and what remains, for each pair of indices $i < j$, are the terms $u_i^2 v_j^2 + u_j^2 v_i^2 - 2\,u_i v_i u_j v_j = (u_i v_j - u_j v_i)^2$; the sum of these three squares is exactly $\|\vec{u} \times \vec{v}\|^2$. Since $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$, the identity gives
$$
\|\vec{u} \times \vec{v}\|^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2\,(1 - \cos^2\theta) = \|\vec{u}\|^2\,\|\vec{v}\|^2 \sin^2\theta ,
$$
and since $\sin\theta \geq 0$ for $\theta \in [0, \pi]$, taking the square root yields the claim.
:::
::::

::::teorema{#area-del-parallelogramma titolo="Area of the parallelogram and of the triangle"}
Let $\vec{u}$ and $\vec{v}$ be vectors in space applied at the same point. The area of the parallelogram having $\vec{u}$ and $\vec{v}$ as sides is
$$
\mathcal{A} = \|\vec{u} \times \vec{v}\| ,
$$
and the area of the triangle with vertices $A$, $B$, $C$ is
$$
\mathcal{A}_{ABC} = \frac{1}{2}\, \left\| \overrightarrow{AB} \times \overrightarrow{AC} \right\| .
$$
With the same formula, dividing by the length of a side, one obtains the height relative to that side: $h_C = \dfrac{2\,\mathcal{A}_{ABC}}{\|\overrightarrow{AB}\|}$.

::grafico{vettori="0,0,4,0,u;0,0,1,2,v" segmenti="1,2,5,2;4,0,5,2;1,0,1,2" etichette="1.15,0.9,h;0.45,0.25,θ" xmin=-0.6 xmax=5.6 ymin=-0.6 ymax=2.8 uguale=1 titolo="The parallelogram with sides $\vec{u}$ and $\vec{v}$ has base $\|\vec{u}\|$ and height $h = \|\vec{v}\| \sin\theta$, therefore area $\|\vec{u}\|\,\|\vec{v}\| \sin\theta = \|\vec{u} \times \vec{v}\|$"}

:::dimostrazione
If one of the two vectors is zero the parallelogram is degenerate and both sides equal $0$. Otherwise take $\vec{u}$ as the base; the corresponding height is the distance of the head of $\vec{v}$ from the line of $\vec{u}$, which equals $\|\vec{v}\|\sin\theta$. Hence the area is $\|\vec{u}\|\,\|\vec{v}\|\sin\theta$, which by the **geometric meaning of the cross product** coincides with $\|\vec{u} \times \vec{v}\|$. The triangle $ABC$ is half of the parallelogram with sides $\overrightarrow{AB}$ and $\overrightarrow{AC}$, which gives the second formula.
:::
::::

:::osservazione{#area-nel-piano titolo="Areas in the plane"}
For two vectors in the plane $\vec{u} = (u_1, u_2)$ and $\vec{v} = (v_1, v_2)$ consider the vectors in space $(u_1, u_2, 0)$ and $(v_1, v_2, 0)$, whose cross product is $(0, 0, u_1 v_2 - u_2 v_1)$. Therefore the area of the parallelogram with sides $\vec{u}$ and $\vec{v}$ is
$$
\mathcal{A} = \left| \begin{vmatrix} u_1 & u_2 \\ v_1 & v_2 \end{vmatrix} \right| = |u_1 v_2 - u_2 v_1| ,
$$
and that of the triangle is half of it. For $A = (0, 0)$, $B = (4, 1)$, $C = (1, 3)$ one obtains $\mathcal{A}_{ABC} = \dfrac{1}{2}\,|4 \cdot 3 - 1 \cdot 1| = \dfrac{11}{2}$.

::grafico{area="3*x;x/4;0;1|(11-2*x)/3;x/4;1;4" vettori="0,0,4,1;0,0,1,3" segmenti="4,1,1,3;4,1,5,4;1,3,5,4" punti="0,0,pieno,A;4,1,pieno,B;1,3,pieno,C" xmin=-0.6 xmax=5.6 ymin=-0.6 ymax=4.6 uguale=1 titolo="The triangle with vertices $A = (0, 0)$, $B = (4, 1)$, $C = (1, 3)$ is half of the parallelogram with sides $\overrightarrow{AB}$ and $\overrightarrow{AC}$, which has area $11$"}

:::

## Parallelism and collinear points

:::definizione{#vettori-paralleli titolo="Parallel vectors"}
Two nonzero vectors $\vec{u}$ and $\vec{v}$ are called **parallel**, written $\vec{u} \parallel \vec{v}$, if they have the same direction, that is, if there exists $\lambda \in \mathbb{R}$, necessarily nonzero, such that $\vec{v} = \lambda\vec{u}$. The orientation is the same for $\lambda > 0$ and opposite for $\lambda < 0$. In components the condition says that the components of $\vec{v}$ are proportional to those of $\vec{u}$; for example $(2, -4, 6) = 2\,(1, -2, 3)$, therefore the two vectors are parallel with the same orientation.
:::

::::teorema{#criterio-di-parallelismo titolo="Parallelism criterion"}
Let $\vec{u}$ and $\vec{v}$ be nonzero vectors in space. Then
$$
\vec{u} \parallel \vec{v}
\quad\Longleftrightarrow\quad
\vec{u} \times \vec{v} = \vec{0} .
$$
In the plane, for nonzero $\vec{u} = (u_1, u_2)$ and $\vec{v} = (v_1, v_2)$, the condition becomes $u_1 v_2 - u_2 v_1 = 0$. The criterion turns parallelism into equations in the components and requires no divisions, so it applies even when some component is zero; when the vectors depend on parameters, one requires the three components of $\vec{u} \times \vec{v}$ to be zero *simultaneously*.

:::dimostrazione
If $\vec{v} = \lambda\vec{u}$, by linearity and anticommutativity $\vec{u} \times \vec{v} = \lambda\,(\vec{u} \times \vec{u}) = \vec{0}$. Conversely, let $\vec{u} \times \vec{v} = \vec{0}$. By **Lagrange's identity** $(\vec{u} \cdot \vec{v})^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2$. Decompose $\vec{v} = \vec{v}_{\parallel} + \vec{v}_{\perp}$ with respect to $\vec{u}$, with $\vec{v}_{\parallel} = \lambda\vec{u}$ and $\lambda = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|^2}$. Since $\vec{v}_{\parallel} \cdot \vec{v}_{\perp} = 0$, expanding $\|\vec{v}\|^2 = \|\vec{v}_{\parallel} + \vec{v}_{\perp}\|^2$ gives
$$
\begin{aligned}
\|\vec{v}_{\perp}\|^2 &= \|\vec{v}\|^2 - \lambda^2 \|\vec{u}\|^2 \\[6pt]
&= \|\vec{v}\|^2 - \frac{(\vec{u} \cdot \vec{v})^2}{\|\vec{u}\|^2} \\[6pt]
&= \|\vec{v}\|^2 - \|\vec{v}\|^2 = 0 ,
\end{aligned}
$$
hence $\vec{v}_{\perp} = \vec{0}$ and $\vec{v} = \lambda\vec{u}$. The case of the plane follows by considering the vectors in space with third component zero, whose cross product is $(0, 0, u_1 v_2 - u_2 v_1)$.
:::
::::

:::richiamo{titolo="Lagrange's identity"}
For every pair of vectors $\vec{u}$, $\vec{v}$ in space, $\|\vec{u} \times \vec{v}\|^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2 - (\vec{u} \cdot \vec{v})^2$.
:::

:::teorema{#punti-allineati titolo="Collinear points"}
Three distinct points $A$, $B$, $C$ are **collinear** if and only if the vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are parallel, that is, if and only if
$$
\overrightarrow{AB} \times \overrightarrow{AC} = \vec{0} .
$$
The three points lie on the same line exactly when the segments $AB$ and $AC$, which share the endpoint $A$, have the same direction; the condition then follows from the **parallelism criterion**. In terms of areas, the points are collinear when the triangle $ABC$ is degenerate, that is, has zero area. For $A = (1, 0, 2)$, $B = (2, 1, 1)$, $C = (4, 3, -1)$ one has $\overrightarrow{AB} = (1, 1, -1)$ and $\overrightarrow{AC} = (3, 3, -3) = 3\,\overrightarrow{AB}$, therefore the points are collinear.
:::

## Scalar triple product, volumes and coplanarity

:::definizione{#prodotto-misto titolo="Scalar triple product"}
Let $\vec{u}$, $\vec{v}$, $\vec{w}$ be vectors in space. The **scalar triple product** is the real number $\vec{u} \cdot (\vec{v} \times \vec{w})$. In components, by the formula for the cross product,
$$
\vec{u} \cdot (\vec{v} \times \vec{w}) =
\begin{vmatrix}
u_1 & u_2 & u_3 \\
v_1 & v_2 & v_3 \\
w_1 & w_2 & w_3
\end{vmatrix} ,
$$
that is, the determinant of the matrix whose rows are the components of the three vectors, expanded along the first row:
$$
\begin{aligned}
\vec{u} \cdot (\vec{v} \times \vec{w})
&= u_1 (v_2 w_3 - v_3 w_2) - u_2 (v_1 w_3 - v_3 w_1) \\[6pt]
&\quad + u_3 (v_1 w_2 - v_2 w_1) .
\end{aligned}
$$
From the properties of determinants, which are covered in the topic on determinants, it follows that the scalar triple product does not change under cyclic permutations of the three vectors and changes sign if two of them are swapped: $\vec{u} \cdot (\vec{v} \times \vec{w}) = \vec{v} \cdot (\vec{w} \times \vec{u}) = -\,\vec{v} \cdot (\vec{u} \times \vec{w})$.
:::

:::esempio{titolo="Computing a scalar triple product"}
For $\vec{u} = (1, 0, 2)$, $\vec{v} = (0, 1, 1)$, $\vec{w} = (1, 1, 0)$ one has $\vec{v} \times \vec{w} = (1 \cdot 0 - 1 \cdot 1,\ 1 \cdot 1 - 0 \cdot 0,\ 0 \cdot 1 - 1 \cdot 1) = (-1, 1, -1)$, therefore
$$
\vec{u} \cdot (\vec{v} \times \vec{w}) = -1 + 0 - 2 = -3 .
$$
Expanding the determinant gives the same value, $1\,(0 - 1) - 0 + 2\,(0 - 1) = -3$.
:::

::::teorema{#volume-del-parallelepipedo titolo="Volume of the parallelepiped and of the tetrahedron"}
Let $\vec{u}$, $\vec{v}$, $\vec{w}$ be vectors in space applied at the same point. The volume of the parallelepiped having the three vectors as edges is
$$
V = \left| \vec{u} \cdot (\vec{v} \times \vec{w}) \right| ,
$$
and the volume of the tetrahedron with vertices $A$, $B$, $C$, $D$ is
$$
V_{ABCD} = \frac{1}{6}\, \left| \overrightarrow{AB} \cdot \left( \overrightarrow{AC} \times \overrightarrow{AD} \right) \right| .
$$
The absolute value is necessary because the scalar triple product can be negative; its sign indicates the orientation of the triple and has no meaning for the volume.

:::dimostrazione
If $\vec{v} \times \vec{w} = \vec{0}$, the vectors $\vec{v}$ and $\vec{w}$ are parallel or one of them is zero, so the parallelepiped is degenerate and both sides equal $0$. Otherwise take as base the parallelogram with sides $\vec{v}$ and $\vec{w}$, which has area $\|\vec{v} \times \vec{w}\|$. The vector $\vec{n} = \vec{v} \times \vec{w}$ is orthogonal to $\vec{v}$ and to $\vec{w}$, hence to the plane of the base, and the height $h$ is the magnitude of the **orthogonal projection** of $\vec{u}$ onto the direction of $\vec{n}$:
$$
h = \left\| \frac{\vec{u} \cdot \vec{n}}{\|\vec{n}\|^2}\, \vec{n} \right\| = \frac{|\vec{u} \cdot \vec{n}|}{\|\vec{n}\|} .
$$
The volume is base area times height, that is, $\|\vec{n}\| \cdot \dfrac{|\vec{u} \cdot \vec{n}|}{\|\vec{n}\|} = |\vec{u} \cdot (\vec{v} \times \vec{w})|$. The tetrahedron $ABCD$ has as its base half of the base of the parallelepiped built on $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$, and the same height; since the volume of a pyramid is one third of base area times height, its volume is $\dfrac{1}{3} \cdot \dfrac{1}{2} = \dfrac{1}{6}$ of the volume of the parallelepiped.
:::
::::

:::definizione{#vettori-complanari titolo="Coplanar vectors"}
Three vectors $\vec{u}$, $\vec{v}$, $\vec{w}$ are called **coplanar** if, when applied at the same point, they lie in one plane. Four points are called coplanar if there exists a plane containing all of them. Three coplanar vectors form a degenerate parallelepiped, flattened onto a plane, and therefore of zero volume; this observation is the basis of the following criterion.
:::

::::teorema{#criterio-di-complanarita titolo="Coplanarity criterion"}
Let $\vec{u}$, $\vec{v}$, $\vec{w}$ be vectors in space. Then
$$
\vec{u}, \vec{v}, \vec{w} \ \text{coplanar}
\quad\Longleftrightarrow\quad
\vec{u} \cdot (\vec{v} \times \vec{w}) = 0 .
$$
Consequently four points $A$, $B$, $C$, $D$ are coplanar if and only if $\overrightarrow{AB} \cdot \left( \overrightarrow{AC} \times \overrightarrow{AD} \right) = 0$. The criterion reduces coplanarity to the computation of a determinant; with a parameter, one obtains an equation in the parameter.

:::dimostrazione
If $\vec{v} \times \vec{w} = \vec{0}$, the vectors $\vec{v}$ and $\vec{w}$ are parallel or one of them is zero, so they lie on a line and together with $\vec{u}$ they lie in a plane; the scalar triple product is also zero, therefore the equivalence holds. If $\vec{n} = \vec{v} \times \vec{w} \neq \vec{0}$, the vectors $\vec{v}$ and $\vec{w}$ are not parallel and determine a unique plane $\pi$ through the point of application; since $\vec{n}$ is orthogonal to $\vec{v}$ and to $\vec{w}$, the plane $\pi$ consists of the vectors orthogonal to $\vec{n}$. Hence $\vec{u}$ lies in $\pi$ if and only if $\vec{u} \cdot \vec{n} = 0$, that is, if and only if the scalar triple product is **zero**.
:::
::::

:::esempio{titolo="Coplanarity with a parameter"}
The vectors $\vec{u} = (1, 1, 0)$, $\vec{v} = (0, 1, 1)$, $\vec{w} = (1, k, 2)$ have scalar triple product
$$
\begin{vmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
1 & k & 2
\end{vmatrix}
= 1\,(2 - k) - 1\,(0 - 1) + 0 = 3 - k ,
$$
therefore they are **coplanar** if and only if $k = 3$. Indeed, for $k = 3$ one checks that $\vec{w} = (1, 3, 2) = \vec{u} + 2\vec{v}$.
:::
