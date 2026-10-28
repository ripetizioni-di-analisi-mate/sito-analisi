---
titolo: Scalar product, orthogonality and the spectral theorem
sommario: The standard scalar product, norm and angles, orthonormal bases, orthogonal projections with the Gram-Schmidt process, orthogonal matrices and the orthogonal diagonalization of symmetric matrices.
---

## Standard scalar product and norm

:::definizione{#prodotto-scalare-standard titolo="Standard scalar product"}
Given $u = (u_1, \dots, u_n)$ and $v = (v_1, \dots, v_n)$ in $\mathbb{R}^n$, the **standard scalar product** of $u$ and $v$ is the real number
$$
\langle u, v \rangle = u_1 v_1 + u_2 v_2 + \dots + u_n v_n ,
$$
also denoted by $u \cdot v$. Writing the vectors as columns one gets $\langle u, v \rangle = u^T v$, that is, the row-by-column product of the row $u^T$ by the column $v$; this is the form used in computations with matrices. For $u = (1, 2, -1)$ and $v = (3, 0, 1)$ one obtains $\langle u, v \rangle = 3 + 0 - 1 = 2$. In $\mathbb{R}^2$ and in $\mathbb{R}^3$ the definition coincides with the scalar product of geometric vectors, for which we refer to the topic on vectors in the plane and in space.
:::

:::teorema{#proprieta-prodotto-scalare titolo="Properties of the scalar product"}
For every $u, v, w \in \mathbb{R}^n$ and every $\alpha, \beta \in \mathbb{R}$ the following hold:

- **symmetry**: $\langle u, v \rangle = \langle v, u \rangle$;
- **bilinearity**: $\langle \alpha u + \beta w, v \rangle = \alpha \langle u, v \rangle + \beta \langle w, v \rangle$, and likewise in the second argument;
- **positive definiteness**: $\langle v, v \rangle = v_1^2 + \dots + v_n^2 \geq 0$, with equality *only if* $v = 0$.

The three properties follow directly from the definition, because the scalar product is a sum of products of components. Bilinearity makes it possible to expand products as in algebra: for example $\langle u + v, u + v \rangle = \langle u, u \rangle + 2\langle u, v \rangle + \langle v, v \rangle$.
:::

:::osservazione{#prodotto-scalare-generale titolo="Scalar products on a vector space"}
On any real vector space $V$, a **scalar product** is any function $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{R}$ that is symmetric, bilinear and positive definite. An example on $M_n(\mathbb{R})$ is $\langle A, B \rangle = \operatorname{tr}(A^T B)$, which is the sum of the products of the entries in the same position. The definitions and theorems of this topic use only the three properties, therefore they hold for every scalar product; in exam exercises the scalar product is almost always the standard one on $\mathbb{R}^n$.
:::

:::definizione{#norma titolo="Norm and distance"}
The **norm** of $v \in \mathbb{R}^n$ is the number
$$
\|v\| = \sqrt{\langle v, v \rangle} = \sqrt{v_1^2 + \dots + v_n^2} ,
$$
and the **distance** between $u$ and $v$ is $d(u, v) = \|u - v\|$. By positive definiteness the norm is zero *only* for the zero vector; from bilinearity it follows that $\|\alpha v\| = |\alpha|\, \|v\|$. A vector of norm $1$ is called a **unit vector**: if $v \neq 0$, the vector $\dfrac{v}{\|v\|}$ is a unit vector with the same direction and the same orientation as $v$, and passing from $v$ to its unit vector is called *normalization*. For $v = (1, 2, -1)$ one has $\|v\| = \sqrt{6}$, therefore the unit vector is $\dfrac{1}{\sqrt{6}}\,(1, 2, -1)$.
:::

## Cauchy-Schwarz inequality and angle between vectors

::::teorema{#cauchy-schwarz titolo="Cauchy-Schwarz inequality"}
For every $u, v \in \mathbb{R}^n$
$$
|\langle u, v \rangle| \leq \|u\|\, \|v\| ,
$$
and equality holds *if and only if* $u$ and $v$ are linearly dependent. The inequality guarantees that, for nonzero $u$ and $v$, the quotient $\dfrac{\langle u, v \rangle}{\|u\|\, \|v\|}$ lies in $[-1, 1]$, and the definition of angle in $\mathbb{R}^n$ is based on this fact.

:::dimostrazione
If $v = 0$ both sides are zero and the vectors are dependent. Let $v \neq 0$. For every $t \in \mathbb{R}$, positive definiteness and bilinearity give
$$
0 \leq \|u - t v\|^2 = \|v\|^2\, t^2 - 2 \langle u, v \rangle\, t + \|u\|^2 .
$$
The right-hand side is a polynomial of degree two in $t$ with positive leading coefficient that takes no negative values, therefore its discriminant is less than or equal to zero:
$$
4 \langle u, v \rangle^2 - 4 \|u\|^2 \|v\|^2 \leq 0 ,
$$
that is, $\langle u, v \rangle^2 \leq \|u\|^2 \|v\|^2$, from which the statement follows by taking the square root. The discriminant is zero if and only if the polynomial has a root $t_0$, that is, if and only if $\|u - t_0 v\| = 0$; by positive definiteness this is equivalent to $u = t_0 v$, that is, to the linear dependence of $u$ and $v$.
:::
::::

::::teorema{#disuguaglianza-triangolare titolo="Triangle inequality"}
For every $u, v \in \mathbb{R}^n$ one has $\|u + v\| \leq \|u\| + \|v\|$. In terms of distances, $d(u, w) \leq d(u, v) + d(v, w)$ for every $u, v, w$: in a triangle each side is less than or equal to the sum of the other two.

:::dimostrazione
Expanding with bilinearity and applying the **Cauchy-Schwarz inequality** one obtains
$$
\|u + v\|^2 = \|u\|^2 + 2 \langle u, v \rangle + \|v\|^2 \leq \|u\|^2 + 2 \|u\|\,\|v\| + \|v\|^2 = \left( \|u\| + \|v\| \right)^2 ,
$$
and the statement follows by taking the square root, since both sides are nonnegative.
:::
::::

:::definizione{#angolo-tra-vettori titolo="Angle between two vectors"}
Let $u, v \in \mathbb{R}^n$ be nonzero. The **angle** between $u$ and $v$ is the unique $\theta \in [0, \pi]$ such that
$$
\cos \theta = \frac{\langle u, v \rangle}{\|u\|\, \|v\|} .
$$
The definition makes sense for every $n$ thanks to the Cauchy-Schwarz inequality, and in $\mathbb{R}^2$ and $\mathbb{R}^3$ it gives back the geometric angle. The sign of the scalar product gives the type of angle: $\theta$ is acute if $\langle u, v \rangle > 0$, right if $\langle u, v \rangle = 0$, obtuse if $\langle u, v \rangle < 0$. For $u = (3, 1)$ and $v = (1, 2)$ one gets $\langle u, v \rangle = 5$, $\|u\| = \sqrt{10}$, $\|v\| = \sqrt{5}$, therefore $\cos\theta = \dfrac{5}{\sqrt{50}} = \dfrac{1}{\sqrt{2}}$ and $\theta = \dfrac{\pi}{4}$.

::grafico{vettori="0,0,3,1,u;0,0,1,2,v" curve="0.9*cos(t),0.9*sin(t),0.3218,1.1071" etichette="1.05,0.75,θ" xmin=-0.6 xmax=3.6 ymin=-0.6 ymax=2.6 uguale=1 titolo="The vectors $u = (3, 1)$ and $v = (1, 2)$ form the angle $\theta = \dfrac{\pi}{4}$, since $\cos\theta = \dfrac{1}{\sqrt{2}}$"}

:::

## Orthogonality and orthonormal bases

:::definizione{#vettori-ortogonali titolo="Orthogonal vectors"}
Two vectors $u, v \in \mathbb{R}^n$ are **orthogonal**, written $u \perp v$, if $\langle u, v \rangle = 0$. A set of vectors $\{ v_1, \dots, v_k \}$ is called **orthogonal** if its vectors are pairwise orthogonal, and **orthonormal** if in addition each $v_i$ is a unit vector, that is, if
$$
\langle v_i, v_j \rangle =
\begin{cases}
1 & \text{if } i = j \\[4pt]
0 & \text{if } i \neq j
\end{cases}
$$
The zero vector is orthogonal to every vector. In $\mathbb{R}^4$ the vectors $(1, 1, 2, -1)$ and $(2, 1, -1, 1)$ are orthogonal, because $2 + 1 - 2 - 1 = 0$.
:::

:::teorema{#teorema-di-pitagora titolo="Pythagorean theorem"}
If $u, v \in \mathbb{R}^n$ are orthogonal, then $\|u + v\|^2 = \|u\|^2 + \|v\|^2$. This follows from the expansion $\|u + v\|^2 = \|u\|^2 + 2\langle u, v \rangle + \|v\|^2$, in which the middle term is zero by hypothesis. By induction the formula extends to any number of pairwise orthogonal vectors. The theorem will be used to prove that the orthogonal projection realizes the minimum distance from a subspace.
:::

::::teorema{#ortogonali-indipendenti titolo="Independence of orthogonal vectors"}
If $v_1, \dots, v_k \in \mathbb{R}^n$ are nonzero and pairwise orthogonal, then they are **linearly independent**. Consequently, an orthogonal set of $n$ nonzero vectors of $\mathbb{R}^n$ is a basis, with no need to compute a rank or a determinant.

:::dimostrazione
Let $\alpha_1 v_1 + \dots + \alpha_k v_k = 0$. Fix an index $j$ and take the scalar product with $v_j$; by bilinearity and since $\langle v_i, v_j \rangle = 0$ for $i \neq j$, one obtains
$$
0 = \langle \alpha_1 v_1 + \dots + \alpha_k v_k, v_j \rangle = \alpha_j \langle v_j, v_j \rangle = \alpha_j \|v_j\|^2 .
$$
Since $v_j \neq 0$, one has $\|v_j\|^2 > 0$, therefore $\alpha_j = 0$. The index $j$ is arbitrary, so all the coefficients are zero and the vectors are independent.
:::
::::

:::definizione{#base-ortonormale titolo="Orthonormal basis"}
A basis of a subspace $W \subseteq \mathbb{R}^n$ is called **orthogonal** if its vectors are pairwise orthogonal, **orthonormal** if in addition they are unit vectors. The standard basis $e_1, \dots, e_n$ is orthonormal. From an orthogonal basis one obtains an orthonormal basis by dividing each vector by its norm: the vectors $(1, 1)$ and $(1, -1)$ are orthogonal, therefore $\dfrac{1}{\sqrt{2}}\,(1, 1)$ and $\dfrac{1}{\sqrt{2}}\,(1, -1)$ form an orthonormal basis of $\mathbb{R}^2$. Orthonormal bases are those in which coordinates are computed with a scalar product, as stated by the following theorem.
:::

::::teorema{#coordinate-base-ortonormale titolo="Coordinates with respect to an orthonormal basis"}
Let $\{ e_1, \dots, e_k \}$ be an orthonormal basis of the subspace $W$. Then for every $w \in W$
$$
w = \langle w, e_1 \rangle\, e_1 + \dots + \langle w, e_k \rangle\, e_k ,
$$
that is, the $i$-th coordinate of $w$ is the scalar product $\langle w, e_i \rangle$. If the basis is only orthogonal, with vectors $w_1, \dots, w_k$, the $i$-th coordinate is $\dfrac{\langle w, w_i \rangle}{\langle w_i, w_i \rangle}$. In both cases solving a linear system is avoided.

:::dimostrazione
Since $\{ e_1, \dots, e_k \}$ is a basis of $W$, there exist $\alpha_1, \dots, \alpha_k$ with $w = \alpha_1 e_1 + \dots + \alpha_k e_k$. Taking the scalar product with $e_j$ and using $\langle e_i, e_j \rangle = 0$ for $i \neq j$ and $\langle e_j, e_j \rangle = 1$, one obtains $\langle w, e_j \rangle = \alpha_j$. For an orthogonal basis the same computation gives $\langle w, w_j \rangle = \alpha_j \langle w_j, w_j \rangle$, from which the second formula follows.
:::
::::

:::esempio{titolo="Coordinates in an orthonormal basis of the plane"}
With respect to the orthonormal basis $e_1 = \dfrac{1}{\sqrt{2}}\,(1, 1)$, $e_2 = \dfrac{1}{\sqrt{2}}\,(1, -1)$, the vector $v = (3, 1)$ has coordinates
$$
\langle v, e_1 \rangle = \frac{4}{\sqrt{2}} = 2\sqrt{2},
\qquad
\langle v, e_2 \rangle = \frac{2}{\sqrt{2}} = \sqrt{2} .
$$
The check confirms the result: $2\sqrt{2}\, e_1 + \sqrt{2}\, e_2 = (2, 2) + (1, -1) = (3, 1)$.
:::

## Orthogonal projection

:::definizione{#proiezione-su-un-vettore titolo="Orthogonal projection onto a vector"}
Let $u, v \in \mathbb{R}^n$ with $u \neq 0$. The **orthogonal projection** of $v$ onto $u$ is the vector
$$
\operatorname{pr}_u(v) = \frac{\langle v, u \rangle}{\langle u, u \rangle}\, u .
$$
It is the unique multiple of $u$ such that the difference $v - \operatorname{pr}_u(v)$ is orthogonal to $u$: indeed $\langle v - t u, u \rangle = \langle v, u \rangle - t \langle u, u \rangle$ vanishes only for $t = \dfrac{\langle v, u \rangle}{\langle u, u \rangle}$. Thus $v$ is written as the sum of a vector parallel to $u$ and one orthogonal to $u$. For $u = (2, 1)$ and $v = (3, 4)$ one has $\langle v, u \rangle = 10$ and $\langle u, u \rangle = 5$, therefore $\operatorname{pr}_u(v) = 2u = (4, 2)$ and $v - \operatorname{pr}_u(v) = (-1, 2)$, which is orthogonal to $u$.

::grafico{vettori="0,0,2,1,u;0,0,3,4,v;0,0,4,2,p;4,2,3,4,v − p" segmenti="-1,-0.5,5,2.5" xmin=-1 xmax=5 ymin=-0.8 ymax=4.5 uguale=1 titolo="The projection $p = \operatorname{pr}_u(v) = (4, 2)$ of $v = (3, 4)$ onto the line spanned by $u = (2, 1)$ (dashed): the difference $v - p = (-1, 2)$ is orthogonal to the line"}

:::

::::teorema{#proiezione-su-sottospazio titolo="Orthogonal projection onto a subspace"}
Let $W \subseteq \mathbb{R}^n$ be a subspace with orthogonal basis $\{ w_1, \dots, w_k \}$ and let $v \in \mathbb{R}^n$. The vector
$$
P_W(v) = \frac{\langle v, w_1 \rangle}{\langle w_1, w_1 \rangle}\, w_1 + \dots + \frac{\langle v, w_k \rangle}{\langle w_k, w_k \rangle}\, w_k
$$
belongs to $W$, and the difference $v - P_W(v)$ is orthogonal to *every* vector of $W$. Moreover $P_W(v)$ is the unique vector of $W$ with this property, and it is called the **orthogonal projection** of $v$ onto $W$. The formula is the sum of the projections of $v$ onto the basis vectors, and it holds *only* for an orthogonal basis; if the basis of $W$ is not orthogonal, it is made orthogonal with the Gram-Schmidt process.

:::dimostrazione
The vector $P_W(v)$ is a linear combination of $w_1, \dots, w_k$, therefore it belongs to $W$. For every index $j$, since $\langle w_i, w_j \rangle = 0$ for $i \neq j$, one has
$$
\langle P_W(v), w_j \rangle = \frac{\langle v, w_j \rangle}{\langle w_j, w_j \rangle}\, \langle w_j, w_j \rangle = \langle v, w_j \rangle ,
$$
so $\langle v - P_W(v), w_j \rangle = 0$. Every vector of $W$ is a linear combination of the $w_j$, therefore by bilinearity $v - P_W(v)$ is orthogonal to all of $W$. For uniqueness, let $p, p' \in W$ with $v - p$ and $v - p'$ both orthogonal to $W$. Then $p - p' = (v - p') - (v - p)$ is orthogonal to $W$ and belongs to $W$, therefore it is orthogonal to itself: $\|p - p'\|^2 = 0$, that is, $p = p'$.
:::
::::

::::teorema{#distanza-da-sottospazio titolo="Distance from a subspace"}
Let $W \subseteq \mathbb{R}^n$ be a subspace and let $v \in \mathbb{R}^n$. For every $w \in W$
$$
\|v - P_W(v)\| \leq \|v - w\| ,
$$
with equality *only if* $w = P_W(v)$. The orthogonal projection is therefore the point of $W$ **closest** to $v$, and the **distance** of $v$ from $W$ is $d(v, W) = \|v - P_W(v)\|$.

:::dimostrazione
For every $w \in W$ one writes $v - w = \left( v - P_W(v) \right) + \left( P_W(v) - w \right)$. The first summand is orthogonal to $W$ and the second belongs to $W$, therefore the two summands are orthogonal and by the **Pythagorean theorem**
$$
\|v - w\|^2 = \|v - P_W(v)\|^2 + \|P_W(v) - w\|^2 \geq \|v - P_W(v)\|^2 ,
$$
with equality if and only if $\|P_W(v) - w\| = 0$, that is, $w = P_W(v)$.
:::
::::

:::esempio{titolo="Projection onto a plane in space"}
Let $W = \langle (1, 0, 1), (1, 1, -1) \rangle$ and let $v = (2, 3, 2)$. The two generators are orthogonal, since $1 + 0 - 1 = 0$, therefore the formula applies directly:
$$
P_W(v) = \frac{4}{2}\,(1, 0, 1) + \frac{3}{3}\,(1, 1, -1) = (3, 1, 1) .
$$
The difference $v - P_W(v) = (-1, 2, 1)$ is orthogonal to both generators, as the theorem predicts, and the distance of $v$ from $W$ is $\|(-1, 2, 1)\| = \sqrt{6}$.
:::

## The Gram-Schmidt process

::::teorema{#gram-schmidt titolo="Gram-Schmidt process"}
Let $v_1, \dots, v_k \in \mathbb{R}^n$ be linearly independent. The vectors defined by
$$
\begin{aligned}
u_1 &= v_1 \\[6pt]
u_2 &= v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle}\, u_1 \\[6pt]
u_3 &= v_3 - \frac{\langle v_3, u_1 \rangle}{\langle u_1, u_1 \rangle}\, u_1 - \frac{\langle v_3, u_2 \rangle}{\langle u_2, u_2 \rangle}\, u_2
\end{aligned}
$$
and so on, subtracting from each $v_j$ its projections onto the $u_i$ already built, are nonzero, pairwise orthogonal, and for every $j$ one has $\langle u_1, \dots, u_j \rangle = \langle v_1, \dots, v_j \rangle$. Dividing each $u_j$ by its norm one obtains an **orthonormal basis** of $\langle v_1, \dots, v_k \rangle$. The process is used to build orthonormal bases of a given subspace, to compute orthogonal projections and, in orthogonal diagonalization, to make a basis of an eigenspace orthonormal.

:::dimostrazione
We proceed by induction on $j$. For $j = 1$ one has $u_1 = v_1 \neq 0$. Assume that $u_1, \dots, u_{j-1}$ are nonzero, pairwise orthogonal, and span $W_{j-1} = \langle v_1, \dots, v_{j-1} \rangle$. The sum subtracted from $v_j$ is the orthogonal projection $P_{W_{j-1}}(v_j)$, therefore $u_j = v_j - P_{W_{j-1}}(v_j)$ is orthogonal to $W_{j-1}$ by the **theorem on orthogonal projection onto a subspace**, and in particular to $u_1, \dots, u_{j-1}$. The vector $u_j$ is nonzero, because otherwise $v_j = P_{W_{j-1}}(v_j)$ would belong to $W_{j-1}$, contradicting the independence of $v_1, \dots, v_j$. Finally, $u_j$ is a combination of $v_j$ and of vectors of $W_{j-1}$, and conversely $v_j = u_j + P_{W_{j-1}}(v_j)$, therefore the two sets $\{ u_1, \dots, u_j \}$ and $\{ v_1, \dots, v_j \}$ span the same subspace.
:::
::::

:::esempio{titolo="Gram-Schmidt in the plane and in space"}
In $\mathbb{R}^2$, with $v_1 = (3, 1)$ and $v_2 = (2, 4)$, one has $\langle v_2, v_1 \rangle = 10$ and $\langle v_1, v_1 \rangle = 10$, therefore $u_2 = (2, 4) - (3, 1) = (-1, 3)$. In $\mathbb{R}^3$, with $v_1 = (1, 1, 0)$ and $v_2 = (1, 0, 1)$, one obtains
$$
u_2 = (1, 0, 1) - \frac{1}{2}\,(1, 1, 0) = \left( \frac{1}{2}, -\frac{1}{2}, 1 \right) ,
$$
and the orthonormal basis of $\langle v_1, v_2 \rangle$ consists of $\dfrac{1}{\sqrt{2}}\,(1, 1, 0)$ and $\dfrac{1}{\sqrt{6}}\,(1, -1, 2)$.

::grafico{vettori="0,0,3,1,v₁;0,0,2,4,v₂;0,0,-1,3,u₂" segmenti="3,1,2,4" xmin=-1.8 xmax=3.8 ymin=-0.6 ymax=4.4 uguale=1 titolo="Gram-Schmidt in $\mathbb{R}^2$: from $v_2 = (2, 4)$ one removes its projection onto $v_1$, which is $v_1$ itself, and $u_2 = (-1, 3)$ remains, orthogonal to $v_1$"}

:::

:::osservazione{#gram-schmidt-nei-calcoli titolo="Gram-Schmidt in computations"}
The projections do not change if a vector $u_i$ is replaced by a nonzero multiple of it, because the vector $\dfrac{\langle v, u_i \rangle}{\langle u_i, u_i \rangle}\, u_i$ stays the same. So, at each step, one can multiply $u_i$ by a number that clears the denominators: in the example in $\mathbb{R}^3$ one uses $u_2 = (1, -1, 2)$ instead of $\left( \dfrac{1}{2}, -\dfrac{1}{2}, 1 \right)$. Normalization is carried out at the end, once and for all. If $u_j = 0$ is obtained during the process, the vector $v_j$ is a linear combination of the previous ones, and the process applied to dependent vectors thus detects the dependence.
:::

## Orthogonal complement

:::definizione{#complemento-ortogonale titolo="Orthogonal complement"}
Let $W \subseteq \mathbb{R}^n$ be a subspace. The **orthogonal complement** of $W$ is the set
$$
W^\perp = \{ v \in \mathbb{R}^n : \langle v, w \rangle = 0 \ \text{ for every } w \in W \} .
$$
It is a subspace of $\mathbb{R}^n$, by the bilinearity of the scalar product. If $W = \langle w_1, \dots, w_k \rangle$, a vector is orthogonal to all of $W$ if and only if it is orthogonal to the generators, therefore $W^\perp$ is the solution set of the homogeneous system $\langle v, w_1 \rangle = 0, \dots, \langle v, w_k \rangle = 0$, whose coefficient matrix is the matrix with the generators as rows. For $W = \langle (1, 1, 0) \rangle$ in $\mathbb{R}^3$ one has $W^\perp = \{ x + y = 0 \} = \langle (1, -1, 0), (0, 0, 1) \rangle$.
:::

::::teorema{#dimensione-complemento titolo="Dimension of the orthogonal complement"}
Let $W \subseteq \mathbb{R}^n$ be a subspace. Then

- $\dim W^\perp = n - \dim W$;
- $\mathbb{R}^n = W \oplus W^\perp$, that is, every $v \in \mathbb{R}^n$ can be written uniquely as $v = w + w'$ with $w \in W$ and $w' \in W^\perp$, and the component in $W$ is $w = P_W(v)$;
- $(W^\perp)^\perp = W$.

The second property gives two equivalent ways of computing a projection: $P_W(v)$ directly, or $P_W(v) = v - P_{W^\perp}(v)$, which is convenient when $W^\perp$ has smaller dimension. For a plane in $\mathbb{R}^3$, for example, $W^\perp$ is the line spanned by a normal vector $n$, and $P_W(v) = v - \operatorname{pr}_n(v)$.

:::dimostrazione
Let $\{ w_1, \dots, w_k \}$ be a basis of $W$ and let $A$ be the $k \times n$ matrix that has the vectors $w_1, \dots, w_k$ as rows. Since $W^\perp$ is the solution set of the homogeneous system $Ax = 0$ and $\operatorname{rk} A = k$, the number of free parameters is $n - k$, therefore $\dim W^\perp = n - \dim W$. For every $v$, the orthogonal projection theorem gives $v = P_W(v) + \left( v - P_W(v) \right)$ with the first summand in $W$ and the second in $W^\perp$; moreover $W \cap W^\perp = \{ 0 \}$, because a vector orthogonal to itself is zero. So the sum is direct. Finally, every vector of $W$ is orthogonal to all the vectors of $W^\perp$, therefore $W \subseteq (W^\perp)^\perp$; by the first property applied twice $\dim (W^\perp)^\perp = n - (n - k) = k = \dim W$, and a subspace contained in another of the same dimension coincides with it.
:::
::::

:::richiamo{titolo="Solutions of a homogeneous system"}
If $A \in M_{k,n}(\mathbb{R})$, the solution set of the system $Ax = 0$ is a subspace of $\mathbb{R}^n$ of dimension $n - \operatorname{rk} A$.
:::

:::osservazione{#complemento-forma-cartesiana titolo="Complement of a subspace in Cartesian form"}
If $W$ is given in Cartesian form, that is, as the solution set of $Ax = 0$, each equation says that $x$ is orthogonal to a row of $A$. So $W$ is the orthogonal complement of the subspace spanned by the rows of $A$ and, by the property $(W^\perp)^\perp = W$,
$$
W^\perp = \langle \text{rows of } A \rangle ,
$$
of dimension $\operatorname{rk} A$. The two conversions from parametric to Cartesian form and vice versa thus become a computation of complements: the plane $W = \{ x + y - z = 0 \}$ of $\mathbb{R}^3$ has complement $W^\perp = \langle (1, 1, -1) \rangle$, and the vector $(1, 1, -1)$ is the normal vector to the plane.

::grafico{f="x/2;-2*x" vettori="0,0,2,1,w;0,0,-1,2,n" etichette="2.3,1.55,W;-0.7,2.7,W⊥" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="In $\mathbb{R}^2$ the orthogonal complement of the line $W = \langle (2, 1) \rangle$ is the line $W^\perp = \langle (-1, 2) \rangle$, with equation $2x + y = 0$"}

:::

## Orthogonal matrices

:::definizione{#matrice-ortogonale titolo="Orthogonal matrix"}
A matrix $Q \in M_n(\mathbb{R})$ is called **orthogonal** if
$$
Q^T Q = I_n ,
$$
that is, if $Q$ is invertible with $Q^{-1} = Q^T$. The entry in position $(i, j)$ of $Q^T Q$ is the scalar product between column $i$ and column $j$ of $Q$, therefore the condition is equivalent to saying that the **columns** of $Q$ form an orthonormal basis of $\mathbb{R}^n$; since also $Q Q^T = I_n$, the same holds for the rows. Checking orthogonality therefore requires only scalar products between columns, and the inverse is obtained by transposing.
:::

::::teorema{#proprieta-matrici-ortogonali titolo="Properties of orthogonal matrices"}
Let $Q \in M_n(\mathbb{R})$ be orthogonal. Then:

- $\langle Qu, Qv \rangle = \langle u, v \rangle$ for every $u, v \in \mathbb{R}^n$, therefore $Q$ preserves norms, distances and angles;
- $\det Q = 1$ or $\det Q = -1$;
- every real eigenvalue of $Q$ is $1$ or $-1$;
- the product of two orthogonal matrices and the inverse of an orthogonal matrix are orthogonal.

Orthogonal matrices are the change-of-basis matrices between orthonormal bases and describe the rigid transformations that fix the origin: rotations, if $\det Q = 1$, and compositions of rotations with a reflection, if $\det Q = -1$.

:::dimostrazione
For the first property, $\langle Qu, Qv \rangle = (Qu)^T (Qv) = u^T Q^T Q\, v = u^T v = \langle u, v \rangle$. For the second, from **Binet's theorem** and from $\det Q^T = \det Q$ it follows that $(\det Q)^2 = \det(Q^T Q) = \det I_n = 1$. For the third, if $Qv = \lambda v$ with $v \neq 0$, the first property gives $\|v\| = \|Qv\| = |\lambda|\, \|v\|$, therefore $|\lambda| = 1$. For the fourth, if $Q$ and $R$ are orthogonal, then $(QR)^T (QR) = R^T Q^T Q R = R^T R = I_n$, and $(Q^{-1})^T Q^{-1} = Q Q^T = I_n$.
:::
::::

:::richiamo{titolo="Binet's theorem"}
If $A, B \in M_n(\mathbb{R})$, then $\det(AB) = \det A \cdot \det B$.
:::

:::esempio{titolo="Rotations and reflections of the plane"}
The orthogonal matrices of order $2$ are, as $\theta \in [0, 2\pi)$ varies,
$$
R_\theta =
\begin{pmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{pmatrix},
\qquad
S_\theta =
\begin{pmatrix}
\cos\theta & \sin\theta \\
\sin\theta & -\cos\theta
\end{pmatrix} .
$$
The matrix $R_\theta$ has determinant $1$ and is the **rotation** by the angle $\theta$ about the origin; the matrix $S_\theta$ has determinant $-1$ and is the **reflection** across the line through the origin that forms the angle $\dfrac{\theta}{2}$ with the $x$-axis. The columns of $R_\theta$ are the images of the vectors $e_1$ and $e_2$ of the standard basis, and they remain two orthogonal unit vectors.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,1,0,e₁;0,0,0,1,e₂;0,0,0.866,0.5,Re₁;0,0,-0.5,0.866,Re₂" xmin=-1.4 xmax=1.5 ymin=-1.3 ymax=1.4 uguale=1 titolo="The rotation $R_\theta$ with $\theta = \dfrac{\pi}{6}$ takes the standard basis to the orthonormal basis formed by the columns $\left( \dfrac{\sqrt{3}}{2}, \dfrac{1}{2} \right)$ and $\left( -\dfrac{1}{2}, \dfrac{\sqrt{3}}{2} \right)$"}

:::

## The spectral theorem

::::teorema{#matrici-simmetriche titolo="Eigenvalues and eigenvectors of a symmetric matrix"}
Let $A \in M_n(\mathbb{R})$ be symmetric, that is, $A^T = A$. Then:

- $\langle Au, v \rangle = \langle u, Av \rangle$ for every $u, v \in \mathbb{R}^n$;
- all the roots of the characteristic polynomial $p_A(\lambda)$ are **real**;
- eigenvectors associated with distinct eigenvalues are **orthogonal**.

The second property ensures that the characteristic polynomial of a symmetric matrix always factors into real linear factors; the third says that the eigenspaces are pairwise orthogonal.

:::dimostrazione
For the first property, $\langle Au, v \rangle = (Au)^T v = u^T A^T v = u^T A v = \langle u, Av \rangle$. For the second, let $\lambda \in \mathbb{C}$ be a root of $p_A$ and let $z \in \mathbb{C}^n$ be nonzero with $Az = \lambda z$. Taking conjugates, since $A$ is real, one has $A \bar{z} = \bar{\lambda} \bar{z}$. Computing the number $\bar{z}^T A z$ in two ways one obtains
$$
\lambda\, \bar{z}^T z = \bar{z}^T A z = (A^T \bar{z})^T z = (A \bar{z})^T z = \bar{\lambda}\, \bar{z}^T z ,
$$
and since $\bar{z}^T z = |z_1|^2 + \dots + |z_n|^2 > 0$, one gets $\lambda = \bar{\lambda}$, that is, $\lambda \in \mathbb{R}$. For the third, let $Au = \lambda u$ and $Av = \mu v$ with $\lambda \neq \mu$. By the first property
$$
\lambda \langle u, v \rangle = \langle Au, v \rangle = \langle u, Av \rangle = \mu \langle u, v \rangle ,
$$
therefore $(\lambda - \mu) \langle u, v \rangle = 0$ and, since $\lambda \neq \mu$, one has $\langle u, v \rangle = 0$.
:::
::::

::::teorema{#teorema-spettrale titolo="Real spectral theorem"}
Let $A \in M_n(\mathbb{R})$. The following conditions are equivalent:

- $A$ is symmetric;
- there exists an orthonormal basis of $\mathbb{R}^n$ made of eigenvectors of $A$;
- there exists an orthogonal matrix $P$ such that $P^T A P = D$ is diagonal.

In particular **every real symmetric matrix is diagonalizable**, and the diagonalizing matrix can be chosen orthogonal, so that $P^{-1} = P^T$. For a symmetric matrix there is therefore no need to compare algebraic and geometric multiplicities: diagonalizability is guaranteed from the start, and the work consists in building $P$.

:::dimostrazione
The second and the third conditions are equivalent, because the columns of $P$ are the eigenvectors of the basis and a matrix is orthogonal if and only if its columns are orthonormal. If the third holds, then $A = P D P^T$ and $A^T = P D^T P^T = P D P^T = A$, therefore $A$ is symmetric.

It remains to prove that a symmetric matrix satisfies the third condition, and we proceed by induction on $n$; for $n = 1$ there is nothing to prove. Let $n \geq 2$. By the theorem on symmetric matrices, $A$ has a real eigenvalue $\lambda_1$; let $q_1$ be an eigenvector of norm $1$. Extend $q_1$ to an orthonormal basis $q_1, \dots, q_n$ of $\mathbb{R}^n$, for example with the Gram-Schmidt process, and let $Q$ be the orthogonal matrix with these columns. The matrix $B = Q^T A Q$ is symmetric, and its first column is $Q^T A q_1 = \lambda_1 Q^T q_1 = \lambda_1 e_1$; by symmetry the first row is also $(\lambda_1, 0, \dots, 0)$, therefore
$$
Q^T A Q =
\begin{pmatrix}
\lambda_1 & 0 \\
0 & A_1
\end{pmatrix}
$$
with $A_1 \in M_{n-1}(\mathbb{R})$ symmetric. By the induction hypothesis there exists an orthogonal $P_1$ of order $n - 1$ with $P_1^T A_1 P_1 = D_1$ diagonal. The matrix $P = Q \begin{pmatrix} 1 & 0 \\ 0 & P_1 \end{pmatrix}$ is orthogonal, as a product of orthogonal matrices, and $P^T A P = \begin{pmatrix} \lambda_1 & 0 \\ 0 & D_1 \end{pmatrix}$ is diagonal.
:::
::::

:::osservazione{#autospazi-ortogonali titolo="Consequences for the eigenspaces"}
For a symmetric matrix $A$ with distinct eigenvalues $\lambda_1, \dots, \lambda_r$, the spectral theorem and the third property of symmetric matrices give
$$
\mathbb{R}^n = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_r},
\qquad
V_{\lambda_i} \perp V_{\lambda_j} \ \text{ for } i \neq j ,
$$
and $m_a(\lambda_i) = m_g(\lambda_i)$ for every $i$. When there are two distinct eigenvalues, each eigenspace is the orthogonal complement of the other: $V_{\lambda_2} = V_{\lambda_1}^\perp$. It is therefore enough to compute the smaller eigenspace and obtain the other as its orthogonal complement, without a second system. For the matrix $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$, with eigenvalues $4$ and $1$, one gets $V_4 = \langle (1, 1, 1) \rangle$ and therefore $V_1 = \{ x + y + z = 0 \}$.
:::

:::osservazione{#interpretazione-geometrica-spettrale titolo="Geometric interpretation"}
A symmetric matrix acts on $\mathbb{R}^n$ as a dilation by the factor $\lambda_i$ along each of the pairwise orthogonal directions of the basis of eigenvectors. In $\mathbb{R}^2$, if $A$ is invertible, that is, if no eigenvalue is zero, the unit circle is transformed into an ellipse whose axes lie along the eigenvectors and whose semi-axes are equal to the absolute values of the eigenvalues. For $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$ the eigenvalues are $4$, with eigenvector $(1, 1)$, and $2$, with eigenvector $(1, -1)$.

::grafico{curve="cos(t),sin(t),0,6.29;3*cos(t)+sin(t),cos(t)+3*sin(t),0,6.29" vettori="0,0,2.828,2.828,Ae₁;0,0,1.414,-1.414,Ae₂" xmin=-3.8 xmax=3.8 ymin=-3.5 ymax=3.5 uguale=1 titolo="The matrix $A$ with rows $(3, 1)$ and $(1, 3)$ transforms the unit circle into an ellipse with semi-axes $4$ and $2$ along the orthogonal eigenvectors $e_1 = \dfrac{1}{\sqrt{2}}\,(1, 1)$ and $e_2 = \dfrac{1}{\sqrt{2}}\,(1, -1)$"}

:::

## Orthogonal diagonalization

:::osservazione{#metodo-diagonalizzazione-ortogonale titolo="The orthogonal diagonalization method"}
Given a symmetric $A \in M_n(\mathbb{R})$, the orthogonal matrix $P$ and the diagonal matrix $D$ with $P^T A P = D$ are built as follows.

- Compute the eigenvalues as roots of $p_A(\lambda) = \det(A - \lambda I)$, which by the spectral theorem are all real.
- For each eigenvalue compute a basis of the eigenspace $V_\lambda$, by solving the homogeneous system $(A - \lambda I) x = 0$.
- If $\dim V_\lambda \geq 2$, make the basis of $V_\lambda$ orthogonal with the **Gram-Schmidt process**; eigenvectors of different eigenspaces are already orthogonal.
- Normalize all the vectors and arrange them as columns of $P$; on the diagonal of $D$ write the eigenvalues in the same order as the columns.

Since $P$ is orthogonal, the check $P^T A P = D$ does not require computing an inverse, and as a check it is enough to verify $A p = \lambda p$ on each column.
:::

:::esempio{titolo="A matrix of order 2"}
Let $A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$. The characteristic polynomial is $\lambda^2 - 7\lambda + 6 = (\lambda - 1)(\lambda - 6)$, therefore the eigenvalues are $1$ and $6$. The system $(A - I)x = 0$ reduces to the equation $x + 2y = 0$ and gives $V_1 = \langle (2, -1) \rangle$; the system $(A - 6I)x = 0$ reduces to $2x - y = 0$ and gives $V_6 = \langle (1, 2) \rangle$. The two eigenvectors are orthogonal, as predicted, and after normalization
$$
P = \frac{1}{\sqrt{5}}
\begin{pmatrix}
2 & 1 \\
-1 & 2
\end{pmatrix},
\qquad
P^T A P =
\begin{pmatrix}
1 & 0 \\
0 & 6
\end{pmatrix} .
$$
:::

:::esempio{titolo="A matrix of order 3 with a double eigenvalue"}
Let $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. The characteristic polynomial is $p_A(\lambda) = -(\lambda - 1)^2 (\lambda - 4)$. The eigenspace $V_4$ is spanned by $(1, 1, 1)$, and $V_1$ is the plane $x + y + z = 0$, with basis $(1, -1, 0)$, $(1, 0, -1)$. These two vectors are *not* orthogonal, therefore the Gram-Schmidt process is applied within $V_1$:
$$
(1, 0, -1) - \frac{1}{2}\,(1, -1, 0) = \left( \frac{1}{2}, \frac{1}{2}, -1 \right) ,
$$
which is replaced by the multiple $(1, 1, -2)$. Normalizing one obtains
$$
P =
\begin{pmatrix}
\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \\[10pt]
-\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \\[10pt]
0 & -\dfrac{2}{\sqrt{6}} & \dfrac{1}{\sqrt{3}}
\end{pmatrix},
\qquad
P^T A P =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 4
\end{pmatrix} .
$$
:::

:::attenzione
A matrix with orthogonal but *not* normalized columns is not orthogonal. In the example of order $2$, the matrix $M = \begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$ has orthogonal columns, but $M^T M = 5 I_2$, therefore $M^T \neq M^{-1}$ and $M^T A M = \begin{pmatrix} 5 & 0 \\ 0 & 30 \end{pmatrix}$ is not the matrix of eigenvalues. Normalization is the step that makes $P^T$ equal to $P^{-1}$.
:::

:::osservazione{#decomposizione-spettrale titolo="Spectral decomposition and sign of a symmetric matrix"}
If $e_1, \dots, e_n$ are the columns of $P$, with $A e_i = \lambda_i e_i$, the equality $A = P D P^T$ can be written as
$$
A = \lambda_1\, e_1 e_1^T + \dots + \lambda_n\, e_n e_n^T ,
$$
where $e_i e_i^T$ is the matrix of the orthogonal projection onto the line $\langle e_i \rangle$. The formula makes it possible to reconstruct a symmetric matrix from its eigenvalues and eigenvectors. With the change of variables $y = P^T x$ one also obtains
$$
x^T A x = \lambda_1 y_1^2 + \dots + \lambda_n y_n^2 ,
$$
therefore $x^T A x > 0$ for every $x \neq 0$ if and only if all the eigenvalues are positive. The classification of critical points with the Hessian matrix and the reduction to canonical form are based on this fact; for the latter we refer to the topic on conics and quadrics.
:::
