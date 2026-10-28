---
titolo: Linear maps
sommario: The functions between vector spaces that preserve sums and scalar multiples, the matrix that represents them, kernel and image, the rank-nullity theorem, isomorphisms, composition and change of basis.
---

## Definition and examples

:::definizione{#applicazione-lineare titolo="Linear map"}
Let $V$ and $W$ be real vector spaces. A function $f : V \to W$ is a **linear map** if for every $u, v \in V$ and every $\lambda \in \mathbb{R}$ the two conditions are satisfied together:
$$
\begin{cases}
f(u + v) = f(u) + f(v) \\[4pt]
f(\lambda v) = \lambda f(v)
\end{cases}
$$
A linear map from $V$ to itself is called an **endomorphism** of $V$. The two conditions are equivalent to the single condition $f(\alpha u + \beta v) = \alpha f(u) + \beta f(v)$ for every $u, v \in V$ and $\alpha, \beta \in \mathbb{R}$; by induction, $f$ sends *every* linear combination to the linear combination of the images with the same coefficients. The associated matrix and the construction of $f$ from its values on a basis are based on this property.
:::

:::teorema{#proprieta-elementari titolo="First properties"}
Let $f : V \to W$ be linear. Then $f(0_V) = 0_W$ and $f(-v) = -f(v)$ for every $v \in V$. Indeed, setting $\lambda = 0$ in the second condition gives $f(0_V) = f(0 \cdot 0_V) = 0 \cdot f(0_V) = 0_W$, and setting $\lambda = -1$ gives the second equality. The first property provides an immediate check, because a map with $f(0_V) \neq 0_W$ **is not linear**.
:::

:::esempio{titolo="The linear maps of the exam"}
- For every $A \in M_{m,n}(\mathbb{R})$ the function $f_A : \mathbb{R}^n \to \mathbb{R}^m$, $f_A(x) = Ax$, is linear, since the row-by-column product satisfies $A(x + y) = Ax + Ay$ and $A(\lambda x) = \lambda\, Ax$. All functions such as $f(x, y, z) = (x + 2y,\ y - z)$, in which each component is a polynomial of degree one with no constant term, are of this type.
- The derivative $D : \mathbb{R}_n[x] \to \mathbb{R}_{n-1}[x]$, $D(p) = p'$, is linear, since the derivative of a sum is the sum of the derivatives and multiplicative constants can be taken outside.
- Transposition $M_n(\mathbb{R}) \to M_n(\mathbb{R})$, $A \mapsto A^T$, and the trace $M_n(\mathbb{R}) \to \mathbb{R}$, $A \mapsto \operatorname{tr} A$, are linear.
- The rotation by a right angle about the origin, $R(x, y) = (-y, x)$, is linear. Rotating the parallelogram built on $u$ and $v$ gives the parallelogram built on $R(u)$ and $R(v)$, so the diagonal $u + v$ goes to the diagonal $R(u) + R(v)$.

::grafico{vettori="0,0,2,1;0,0,1,2,v;0,0,3,3;0,0,-1,2;0,0,-2,1;0,0,-3,3" segmenti="2,1,3,3;1,2,3,3;-1,2,-3,3;-2,1,-3,3" etichette="1.3,0.3,u;2.95,3.25,u + v;-0.8,2.15,R(u);-1.8,0.35,R(v);-3.55,3.25,R(u + v)" xmin=-3.8 xmax=3.8 ymin=-0.6 ymax=3.7 uguale=1 titolo="The rotation $R(x, y) = (-y, x)$ sends the parallelogram built on $u = (2, 1)$ and $v = (1, 2)$ to the one built on $R(u)$ and $R(v)$, therefore $R(u + v) = R(u) + R(v)$"}

:::

:::attenzione
The condition $f(0_V) = 0_W$ is *necessary* and not sufficient for linearity.

- $f(x, y) = (x + 1,\ y)$ is not linear, since $f(0, 0) = (1, 0)$.
- $g(x, y) = (xy,\ x)$ satisfies $g(0, 0) = (0, 0)$ and is not linear, since $g(2, 2) = (4, 2)$ is different from $2\, g(1, 1) = (2, 2)$.

To rule out linearity a numerical counterexample suffices; to prove it, the two conditions with generic vectors and scalars are needed.
:::

## Maps defined on the vectors of a basis

::::teorema{#esistenza-e-unicita titolo="Existence and uniqueness on the vectors of a basis"}
Let $\mathcal{B} = (v_1, \dots, v_n)$ be a basis of $V$ and let $w_1, \dots, w_n$ be arbitrary vectors of $W$. Then there exists one and only one linear map $f : V \to W$ such that $f(v_i) = w_i$ for $i = 1, \dots, n$, and it is given by
$$
f(a_1 v_1 + \dots + a_n v_n) = a_1 w_1 + \dots + a_n w_n .
$$
A linear map is therefore **determined by its values on a basis**, and these values can be chosen freely. To compute $f(v)$ one writes $v$ as a combination of the basis vectors and replaces each $v_i$ with $w_i$.

:::dimostrazione
By the uniqueness of coordinates every $v \in V$ can be written in only one way as $v = a_1 v_1 + \dots + a_n v_n$, so the formula defines a function $f : V \to W$; moreover $f(v_i) = w_i$, because the coordinates of $v_i$ are $1$ in position $i$ and $0$ elsewhere. If $u = b_1 v_1 + \dots + b_n v_n$, then $\alpha u + \beta v = \sum_{i} (\alpha b_i + \beta a_i)\, v_i$, therefore
$$
f(\alpha u + \beta v) = \sum_{i=1}^{n} (\alpha b_i + \beta a_i)\, w_i = \alpha f(u) + \beta f(v) ,
$$
that is, $f$ is linear. If $g$ is another linear map with $g(v_i) = w_i$, by linearity $g(v) = \sum_i a_i\, g(v_i) = \sum_i a_i w_i = f(v)$ for every $v$, so $g = f$.
:::
::::

:::richiamo{titolo="Uniqueness of coordinates"}
If $\mathcal{B} = (v_1, \dots, v_n)$ is a basis of $V$, every $v \in V$ can be written in one and only one way as $v = a_1 v_1 + \dots + a_n v_n$.
:::

:::esempio{titolo="A map assigned on a basis of the plane"}
We look for a linear $f : \mathbb{R}^2 \to \mathbb{R}^3$ with $f(1, 1) = (2, 0, 1)$ and $f(1, 2) = (1, 1, 0)$. The vectors $(1, 1)$ and $(1, 2)$ form a basis of $\mathbb{R}^2$, since they are not proportional, so $f$ **exists and is unique**. We write $(x, y) = a\,(1, 1) + b\,(1, 2)$, that is
$$
\begin{cases}
a + b = x \\[4pt]
a + 2b = y
\end{cases}
\quad\Longrightarrow\quad
a = 2x - y, \quad b = y - x ,
$$
and by linearity
$$
\begin{aligned}
f(x, y) &= (2x - y)\,(2, 0, 1) + (y - x)\,(1, 1, 0) \\[6pt]
&= (3x - y,\ -x + y,\ 2x - y) .
\end{aligned}
$$
:::

:::osservazione{#valori-su-vettori-dipendenti titolo="Values assigned on dependent vectors"}
If the values are assigned on *linearly dependent* vectors $u_1, \dots, u_k$, every relation among the vectors must also hold among the values: for example, from $u_3 = u_1 + u_2$ it follows that a linear $f$ satisfies $f(u_3) = f(u_1) + f(u_2)$. If all the relations are respected, $f$ exists, and it is unique *if and only if* $u_1, \dots, u_k$ span $V$; if a relation is not respected, $f$ **does not exist**. There is, for example, no linear map $f : \mathbb{R}^2 \to \mathbb{R}^2$ with $f(1, 0) = (1, 1)$, $f(0, 1) = (2, 0)$ and $f(1, 1) = (3, 2)$, since from $(1, 1) = (1, 0) + (0, 1)$ it would follow that $f(1, 1) = (3, 1)$.
:::

## The associated matrix

:::definizione{#matrice-associata titolo="Associated matrix"}
Let $\mathcal{B} = (v_1, \dots, v_n)$ be a basis of $V$, $\mathcal{C} = (w_1, \dots, w_m)$ a basis of $W$ and $f : V \to W$ linear. For every vector $v$ we denote by $[v]_{\mathcal{B}}$ the column of its coordinates with respect to $\mathcal{B}$. The **matrix associated** with $f$ with respect to the bases $\mathcal{B}$ and $\mathcal{C}$ is the matrix $M^{\mathcal{B}}_{\mathcal{C}}(f) \in M_{m,n}(\mathbb{R})$ whose $j$-th column is $[f(v_j)]_{\mathcal{C}}$, that is, the coordinates with respect to $\mathcal{C}$ of the image of the $j$-th vector of $\mathcal{B}$. The matrix has as many columns as the dimension of the domain and as many rows as the dimension of the codomain. By the existence and uniqueness theorem it contains all the information about $f$.
:::

::::teorema{#matrice-e-coordinate titolo="Coordinates of the image"}
Under the hypotheses of the definition, for every $v \in V$
$$
[f(v)]_{\mathcal{C}} = M^{\mathcal{B}}_{\mathcal{C}}(f)\, [v]_{\mathcal{B}} .
$$
The associated matrix transforms the coordinates of $v$ into the coordinates of $f(v)$, so every computation on $f$ becomes a **computation with matrices**, even when $V$ and $W$ are spaces of polynomials or of matrices.

:::dimostrazione
Let $[v]_{\mathcal{B}} = (a_1, \dots, a_n)$, that is $v = a_1 v_1 + \dots + a_n v_n$, and $M^{\mathcal{B}}_{\mathcal{C}}(f) = (c_{ij})$, so that $f(v_j) = \sum_{i=1}^{m} c_{ij} w_i$. By linearity
$$
f(v) = \sum_{j=1}^{n} a_j f(v_j) = \sum_{j=1}^{n} a_j \sum_{i=1}^{m} c_{ij} w_i = \sum_{i=1}^{m} \Big( \sum_{j=1}^{n} c_{ij} a_j \Big) w_i ,
$$
so the $i$-th coordinate of $f(v)$ is $\sum_{j} c_{ij} a_j$, which is the $i$-th entry of the product $M^{\mathcal{B}}_{\mathcal{C}}(f)\, [v]_{\mathcal{B}}$.
:::
::::

:::osservazione{#matrice-rispetto-alle-basi-canoniche titolo="Matrix with respect to the standard bases"}
For $f : \mathbb{R}^n \to \mathbb{R}^m$ with the standard bases the coordinates coincide with the components, so the associated matrix $A$ has columns $f(e_1), \dots, f(e_n)$ and $f(x) = Ax$. In practice the matrix is read off from the coefficients, because the $i$-th row contains the coefficients of the $i$-th component of $f$. For $f(x, y, z) = (x + 2y,\ y - z)$ we have
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
0 & 1 & -1
\end{pmatrix} .
$$
:::

:::esempio{titolo="Image of a square"}
The endomorphism of $\mathbb{R}^2$ with matrix
$$
A =
\begin{pmatrix}
2 & 1 \\
1 & 2
\end{pmatrix}
$$
sends $e_1$ to $(2, 1)$ and $e_2$ to $(1, 2)$. Every point of the square $[0, 1] \times [0, 1]$ can be written $a e_1 + b e_2$ with $a, b \in [0, 1]$, and its image is $a\,(2, 1) + b\,(1, 2)$, so the square goes to the **parallelogram** built on the columns of $A$, with opposite sides that remain parallel.

::grafico{area="(5*x+3-abs(3*x-3))/4;(5*x/2-3+abs(3-3*x/2))/2;0;3" vettori="0,0,1,0,e₁;0,0,0,1,e₂;0,0,2,1;0,0,1,2" segmenti="1,0,1,1;0,1,1,1" etichette="2.05,0.72,f(e₁);0.45,2.1,f(e₂)" xmin=-0.5 xmax=3.6 ymin=-0.5 ymax=3.4 uguale=1 titolo="The square $[0, 1] \times [0, 1]$ (dashed) and its image under $A$: the colored parallelogram built on $f(e_1) = (2, 1)$ and $f(e_2) = (1, 2)$"}

:::

:::esempio{titolo="The derivative on polynomials"}
Let $D : \mathbb{R}_2[x] \to \mathbb{R}_1[x]$, $D(p) = p'$, with the bases $(1, x, x^2)$ and $(1, x)$. Since $D(1) = 0$, $D(x) = 1$ and $D(x^2) = 2x$, the columns of the matrix are the coordinates of these three polynomials:
$$
M(D) =
\begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 2
\end{pmatrix} .
$$
For $p(x) = 3 - x + 5x^2$, with coordinates $(3, -1, 5)$, the product $M(D)\,(3, -1, 5)^T = (-1, 10)^T$ gives the coordinates of $p'(x) = -1 + 10x$, as one verifies by differentiating directly.
:::

## Kernel and image

:::definizione{#nucleo-e-immagine titolo="Kernel and image"}
Let $f : V \to W$ be linear. The **kernel** of $f$ is the set of vectors of $V$ whose image is zero,
$$
\ker f = \{ v \in V : f(v) = 0_W \} ,
$$
and the **image** of $f$ is the set of values taken,
$$
\operatorname{Im} f = \{ f(v) : v \in V \} \subseteq W .
$$
The kernel collects the vectors that $f$ sends to zero, the image the vectors of $W$ that are reached. The first is used to decide injectivity, the second surjectivity.
:::

::::teorema{#nucleo-e-immagine-sottospazi titolo="Kernel and image are subspaces"}
Let $f : V \to W$ be linear. Then $\ker f$ is a subspace of $V$ and $\operatorname{Im} f$ is a subspace of $W$. It therefore makes sense to look for a basis and the dimension of each, with the methods of the topic on vector spaces.

:::dimostrazione
We apply the **subspace criterion**. Since $f(0_V) = 0_W$, the zero vector belongs to $\ker f$. If $u, v \in \ker f$ and $\lambda \in \mathbb{R}$, then $f(u + v) = f(u) + f(v) = 0_W$ and $f(\lambda u) = \lambda f(u) = 0_W$, so $u + v$ and $\lambda u$ belong to $\ker f$. For the image, $0_W = f(0_V) \in \operatorname{Im} f$; if $w_1 = f(u)$ and $w_2 = f(v)$, then $w_1 + w_2 = f(u + v)$ and $\lambda w_1 = f(\lambda u)$ belong to $\operatorname{Im} f$.
:::
::::

:::richiamo{titolo="Subspace criterion"}
A subset $U \subseteq V$ is a subspace if and only if $0 \in U$, $u + v \in U$ for every $u, v \in U$ and $\lambda u \in U$ for every $u \in U$ and $\lambda \in \mathbb{R}$.
:::

:::teorema{#generatori-dell-immagine titolo="Generators of the image and rank"}
If $v_1, \dots, v_n$ span $V$, then $f(v_1), \dots, f(v_n)$ span $\operatorname{Im} f$. Indeed every vector of the image is $f(v)$ with $v = \sum_i a_i v_i$, so $f(v) = \sum_i a_i f(v_i)$. For $f(x) = Ax$ with the standard bases the vectors $f(e_j)$ are the columns of $A$, therefore the image is the subspace spanned by the **columns** of $A$ and
$$
\dim \operatorname{Im} f = \operatorname{rk} A .
$$
The equality holds for the matrix associated with respect to any bases, since its columns are the coordinates of the generators $f(v_j)$ and passing to coordinates preserves linear independence. The number $\dim \operatorname{Im} f$ is called the **rank** of $f$.
:::

:::osservazione{#calcolo-di-nucleo-e-immagine titolo="Computing kernel and image"}
Let $A \in M_{m,n}(\mathbb{R})$ be the matrix of $f$ with respect to the standard bases.

- The kernel is the solution set of the homogeneous system $Ax = 0$, which is solved by row reduction. There are $n - \operatorname{rk} A$ free parameters and each one gives a vector of a basis of the kernel (see the topic on linear systems).
- The image is spanned by the columns of $A$; a basis consists of the columns of $A$ corresponding to the pivots of the echelon form. To write the image in Cartesian form one requires that the generic vector $(x, y, z)$ be linearly dependent on the basis vectors, for example by setting a determinant equal to zero.
:::

:::esempio{titolo="Kernel and image in space"}
Let $f(x, y, z) = (x + y,\ y - z,\ x + z)$. Row reduction of the matrix gives
$$
\begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & -1 \\
1 & 0 & 1
\end{pmatrix}
\xrightarrow{R_3 \to R_3 - R_1}
\begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & -1 \\
0 & -1 & 1
\end{pmatrix}
\xrightarrow{R_3 \to R_3 + R_2}
\begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & -1 \\
0 & 0 & 0
\end{pmatrix} ,
$$
so the rank is $2$. The reduced system gives $y = z$ and $x = -y = -z$, therefore $\ker f = \langle (-1, 1, 1) \rangle$. The pivots are in the first two columns, therefore $\operatorname{Im} f = \langle (1, 0, 1), (1, 1, 0) \rangle$, and the condition
$$
\begin{vmatrix}
1 & 1 & x \\
0 & 1 & y \\
1 & 0 & z
\end{vmatrix}
= -x + y + z = 0
$$
gives the Cartesian equation $x - y - z = 0$ of the image, which is a plane through the origin.
:::

:::esempio{titolo="Kernel and image in the plane"}
Let $f(x, y) = (x - 2y,\ 2x - 4y)$. The second component is twice the first, so $f(x, y) = (x - 2y)\,(1, 2)$. The kernel is given by $x - 2y = 0$, that is $\ker f = \langle (2, 1) \rangle$, the line $y = \dfrac{x}{2}$; the image is $\operatorname{Im} f = \langle (1, 2) \rangle$, the line $y = 2x$. The map collapses the whole plane onto the line $y = 2x$, and the points of each line parallel to the kernel have the same image, since $f(v + t\,(2, 1)) = f(v)$ for every $t$.

::grafico{f="2*x;x/2" vettori="0,0,2,1;0,0,1,2" etichette="1.2,3.2,Im f;2.7,0.9,ker f" xmin=-2 xmax=3.5 ymin=-1.5 ymax=3.6 uguale=1 titolo="The image $y = 2x$ and the kernel $y = \dfrac{x}{2}$ (dashed) of $f(x, y) = (x - 2y,\ 2x - 4y)$"}

:::

## Injectivity and surjectivity

::::teorema{#iniettivita-e-nucleo titolo="Injectivity and kernel"}
Let $f : V \to W$ be linear. Then $f$ is injective if and only if $\ker f = \{0_V\}$. To establish injectivity it is therefore enough to verify that the associated homogeneous system has **only the zero solution**, instead of comparing the images of all pairs of vectors.

:::dimostrazione
If $f$ is injective and $v \in \ker f$, then $f(v) = 0_W = f(0_V)$, so $v = 0_V$. Conversely, let $\ker f = \{0_V\}$ and let $u, v \in V$ with $f(u) = f(v)$. By linearity $f(u - v) = f(u) - f(v) = 0_W$, therefore $u - v \in \ker f$, that is $u - v = 0_V$ and $u = v$.
:::
::::

:::teorema{#suriettivita titolo="Surjectivity and rank"}
Let $f : V \to W$ be linear with $\dim W = m$ and let $A$ be a matrix associated with it. Then $f$ is surjective if and only if $\operatorname{rk} A = m$, that is, if the rank is equal to the number of rows. Indeed $f$ is surjective when $\operatorname{Im} f = W$, and since $\operatorname{Im} f$ is a subspace of $W$, this happens if and only if $\dim \operatorname{Im} f = \dim W$. For $f(x, y, z) = (x + y + z,\ x - y)$ the rank is $2$, so $f$ is **surjective** onto $\mathbb{R}^2$.
:::

::::teorema{#immagine-di-vettori-indipendenti titolo="Injective maps and independent vectors"}
Let $f : V \to W$ be linear and injective. If $v_1, \dots, v_k$ are linearly independent, then $f(v_1), \dots, f(v_k)$ are also linearly independent. In particular an injective map sends a basis of $V$ to a basis of $\operatorname{Im} f$, and therefore $\dim \operatorname{Im} f = \dim V$.

:::dimostrazione
Let $a_1 f(v_1) + \dots + a_k f(v_k) = 0_W$. By linearity $f(a_1 v_1 + \dots + a_k v_k) = 0_W$, so $a_1 v_1 + \dots + a_k v_k \in \ker f = \{0_V\}$. Since the vectors $v_i$ are independent, $a_1 = \dots = a_k = 0$.
:::
::::

:::attenzione
Without injectivity, independence is *not* preserved. The projection $f(x, y) = (x, 0)$ sends the independent vectors $(1, 0)$ and $(1, 1)$ to the same vector $(1, 0)$, in agreement with the fact that $\ker f$ is the $y$-axis.
:::

## The rank-nullity theorem

::::teorema{#teorema-della-dimensione titolo="Rank-nullity theorem"}
Let $V$ be finite-dimensional and let $f : V \to W$ be linear. Then
$$
\dim V = \dim \ker f + \dim \operatorname{Im} f .
$$
The theorem is also called the dimension theorem; the name rank-nullity comes from the fact that $\dim \ker f$ is called the nullity of $f$. Once one of the two dimensions is computed, the other follows without further computation. If $A \in M_{m,n}(\mathbb{R})$ is a matrix associated with $f$, one obtains $\dim \ker f = n - \operatorname{rk} A$, which is the number of free parameters of the system $Ax = 0$.

:::dimostrazione
Let $(u_1, \dots, u_k)$ be a basis of $\ker f$, with $k = 0$ if the kernel is zero, and complete it to a basis $(u_1, \dots, u_k, v_1, \dots, v_r)$ of $V$, so that $\dim V = k + r$. It suffices to prove that $f(v_1), \dots, f(v_r)$ form a basis of $\operatorname{Im} f$. The images of the vectors of a basis span $\operatorname{Im} f$ and $f(u_i) = 0_W$, so $f(v_1), \dots, f(v_r)$ span $\operatorname{Im} f$. For independence, let $b_1 f(v_1) + \dots + b_r f(v_r) = 0_W$. Then $b_1 v_1 + \dots + b_r v_r \in \ker f$, so there exist $a_1, \dots, a_k$ with
$$
b_1 v_1 + \dots + b_r v_r = a_1 u_1 + \dots + a_k u_k .
$$
Since $u_1, \dots, u_k, v_1, \dots, v_r$ are independent, all the coefficients are zero, in particular $b_1 = \dots = b_r = 0$. Therefore $\dim \operatorname{Im} f = r = \dim V - \dim \ker f$.
:::
::::

:::richiamo{titolo="Completion to a basis"}
If $\dim V = n$ and $u_1, \dots, u_k \in V$ are linearly independent, with $k < n$, then there exist $v_1, \dots, v_{n-k} \in V$ such that $(u_1, \dots, u_k, v_1, \dots, v_{n-k})$ is a basis of $V$.
:::

:::teorema{#conseguenze-del-teorema-della-dimensione titolo="Consequences of the rank-nullity theorem"}
Let $f : V \to W$ be linear, with $\dim V = n$ and $\dim W = m$, and let $A$ be a matrix associated with it.

- $f$ is injective if and only if $\operatorname{rk} A = n$; if $n > m$, $f$ **is not injective**.
- $f$ is surjective if and only if $\operatorname{rk} A = m$; if $n < m$, $f$ **is not surjective**.
- If $n = m$, $f$ is injective if and only if it is surjective, and this happens if and only if $\det A \neq 0$.

By the theorem, $\dim \ker f = 0$ is equivalent to $\dim \operatorname{Im} f = n$, that is, to $\operatorname{rk} A = n$; since $\operatorname{rk} A \leq m$, this is impossible if $n > m$. The second point follows from the surjectivity criterion and from the inequality $\operatorname{rk} A \leq n$. The third combines the first two, since for a square matrix the rank is maximal if and only if the determinant is nonzero. No linear map $\mathbb{R}^3 \to \mathbb{R}^2$ is injective and no linear map $\mathbb{R}^2 \to \mathbb{R}^3$ is surjective.
:::

:::esempio{titolo="The derivative on polynomials of degree at most three"}
Let $D : \mathbb{R}_3[x] \to \mathbb{R}_3[x]$, $D(p) = p'$. The kernel consists of the constant polynomials, so $\dim \ker D = 1$. The image is $\mathbb{R}_2[x]$, since every polynomial of degree at most two is the derivative of a polynomial of degree at most three, so $\dim \operatorname{Im} D = 3$. The sum $1 + 3 = 4$ is $\dim \mathbb{R}_3[x]$, as the theorem predicts. The endomorphism $D$ **is not injective** and, in agreement with the third consequence, it is not surjective either.
:::

## Isomorphisms

:::definizione{#isomorfismo titolo="Isomorphism"}
A bijective linear map $f : V \to W$ is called an **isomorphism**, and two spaces between which there exists an isomorphism are called **isomorphic**. The inverse function $f^{-1} : W \to V$ is again linear. Indeed, if $w_1 = f(v_1)$ and $w_2 = f(v_2)$, the linearity of $f$ gives $f(\alpha v_1 + \beta v_2) = \alpha w_1 + \beta w_2$, so
$$
f^{-1}(\alpha w_1 + \beta w_2) = \alpha v_1 + \beta v_2 = \alpha f^{-1}(w_1) + \beta f^{-1}(w_2) .
$$
An isomorphism sends bases to bases and subspaces to subspaces of the same dimension, therefore two isomorphic spaces are studied with the same computations.
:::

::::teorema{#isomorfismo-e-dimensione titolo="Isomorphic spaces and dimension"}
Let $V$ and $W$ be finite-dimensional. Then $V$ and $W$ are isomorphic if and only if $\dim V = \dim W$. The dimension is therefore the *only* information that distinguishes two finite-dimensional vector spaces.

:::dimostrazione
If $f : V \to W$ is an isomorphism, then $\ker f = \{0_V\}$ and $\operatorname{Im} f = W$, so by the **rank-nullity theorem** $\dim V = 0 + \dim W$. Conversely, let $\dim V = \dim W = n$ and let $(v_1, \dots, v_n)$ be a basis of $V$ and $(w_1, \dots, w_n)$ a basis of $W$. By the existence and uniqueness theorem there exists a linear $f$ with $f(v_i) = w_i$; its image contains a basis of $W$, so $f$ is surjective, and by the consequences of the rank-nullity theorem it is also injective.
:::
::::

:::esempio{#isomorfismo-delle-coordinate titolo="The coordinate isomorphism"}
Let $\mathcal{B}$ be a basis of $V$, with $\dim V = n$. The function $V \to \mathbb{R}^n$ that assigns to $v$ the coordinate column $[v]_{\mathcal{B}}$ is the linear map that sends the basis $\mathcal{B}$ to the standard basis, and it is an **isomorphism**. Therefore $\mathbb{R}_2[x]$ is isomorphic to $\mathbb{R}^3$ and $M_2(\mathbb{R})$ is isomorphic to $\mathbb{R}^4$, and questions about independence, generators and bases of polynomials or matrices are solved on the coordinates in $\mathbb{R}^n$. The polynomial $2 - x + 3x^2$ corresponds to $(2, -1, 3)$, the matrix $\begin{pmatrix} 1 & 0 \\ 4 & -2 \end{pmatrix}$ corresponds to $(1, 0, 4, -2)$.
:::

:::teorema{#isomorfismi-e-determinante titolo="Isomorphisms and determinant"}
Let $f : V \to W$ be linear with $\dim V = \dim W = n$ and let $A$ be a matrix associated with it. Then $f$ is an isomorphism if and only if $\det A \neq 0$. This is the third consequence of the rank-nullity theorem: for $f$ injectivity and surjectivity coincide, and they are equivalent to $\operatorname{rk} A = n$. For $f(x, y) = (x + y,\ x + 2y)$ the determinant of the matrix is $1 \cdot 2 - 1 \cdot 1 = 1 \neq 0$, so $f$ is an **isomorphism** of $\mathbb{R}^2$.
:::

## Composition and matrix product

::::teorema{#composizione titolo="Matrix of the composition"}
Let $f : U \to V$ and $g : V \to W$ be linear and let $\mathcal{A}$, $\mathcal{B}$, $\mathcal{C}$ be bases of $U$, $V$, $W$. Then $g \circ f : U \to W$ is linear and
$$
M^{\mathcal{A}}_{\mathcal{C}}(g \circ f) = M^{\mathcal{B}}_{\mathcal{C}}(g)\, M^{\mathcal{A}}_{\mathcal{B}}(f) .
$$
Composing linear maps corresponds to **multiplying the matrices** in the order in which the composition is written, so the matrix of the map applied first stands on the right. The definition of the row-by-column product is the one that makes this rule true.

:::dimostrazione
For $u_1, u_2 \in U$ and $\alpha, \beta \in \mathbb{R}$, the linearity of $f$ and then that of $g$ give
$$
g(f(\alpha u_1 + \beta u_2)) = g(\alpha f(u_1) + \beta f(u_2)) = \alpha\, g(f(u_1)) + \beta\, g(f(u_2)) ,
$$
so $g \circ f$ is linear. Applying twice the theorem on the coordinates of the image, for every $u \in U$
$$
[g(f(u))]_{\mathcal{C}} = M^{\mathcal{B}}_{\mathcal{C}}(g)\, [f(u)]_{\mathcal{B}} = M^{\mathcal{B}}_{\mathcal{C}}(g)\, M^{\mathcal{A}}_{\mathcal{B}}(f)\, [u]_{\mathcal{A}} .
$$
If $u$ is the $j$-th vector of $\mathcal{A}$, the column $[u]_{\mathcal{A}}$ is the $j$-th vector of the standard basis, so the $j$-th column of $M^{\mathcal{A}}_{\mathcal{C}}(g \circ f)$ coincides with the $j$-th column of the product.
:::
::::

:::esempio{titolo="Composition in the two orders"}
Let $f(x, y) = (x + y,\ y)$ and $g(x, y) = (2x,\ x - y)$. The matrices with respect to the standard basis give
$$
\begin{aligned}
M(g \circ f) &=
\begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
=
\begin{pmatrix} 2 & 2 \\ 1 & 0 \end{pmatrix} , \\[8pt]
M(f \circ g) &=
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
\begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}
=
\begin{pmatrix} 3 & -1 \\ 1 & -1 \end{pmatrix} ,
\end{aligned}
$$
that is $(g \circ f)(x, y) = (2x + 2y,\ x)$ and $(f \circ g)(x, y) = (3x - y,\ x - y)$. The two compositions are different, like the two matrix products, therefore the composition of linear maps **is not commutative**.
:::

:::teorema{#matrice-dell-inversa titolo="Matrix of the inverse map"}
Let $f : V \to W$ be an isomorphism and let $A = M^{\mathcal{B}}_{\mathcal{C}}(f)$. Then $A$ is invertible and
$$
M^{\mathcal{C}}_{\mathcal{B}}(f^{-1}) = A^{-1} .
$$
Indeed $f^{-1} \circ f = \operatorname{id}_V$, and the matrix of the identity with the same basis in the domain and in the codomain is the identity matrix; by the matrix of the composition $M^{\mathcal{C}}_{\mathcal{B}}(f^{-1})\, A = I_n$, and in the same way $f \circ f^{-1} = \operatorname{id}_W$ gives $A\, M^{\mathcal{C}}_{\mathcal{B}}(f^{-1}) = I_n$. For $f(x, y) = (x + y,\ x + 2y)$ one obtains
$$
\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}^{-1}
=
\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} ,
\qquad
f^{-1}(x, y) = (2x - y,\ -x + y) .
$$
:::

## Change of basis and similar matrices

:::definizione{#matrice-del-cambiamento-di-base titolo="Change-of-basis matrix"}
Let $\mathcal{B}$ and $\mathcal{B}'$ be two bases of $V$. The **change-of-basis matrix** from $\mathcal{B}'$ to $\mathcal{B}$ is $P = M^{\mathcal{B}'}_{\mathcal{B}}(\operatorname{id}_V)$, the matrix of the identity with the basis $\mathcal{B}'$ in the domain and the basis $\mathcal{B}$ in the codomain. Its columns are the coordinates with respect to $\mathcal{B}$ of the vectors of $\mathcal{B}'$, and by the theorem on the coordinates of the image
$$
[v]_{\mathcal{B}} = P\, [v]_{\mathcal{B}'} ,
$$
so $P$ transforms the coordinates with respect to the new basis into the coordinates with respect to the old basis. The matrix $P$ is invertible, with inverse $M^{\mathcal{B}}_{\mathcal{B}'}(\operatorname{id}_V)$. In $\mathbb{R}^n$, with $\mathcal{B}$ the standard basis, the columns of $P$ are the vectors of $\mathcal{B}'$.
:::

::::teorema{#formula-del-cambiamento-di-base titolo="Change-of-basis formula"}
Let $f : V \to W$ be linear, let $\mathcal{B}, \mathcal{B}'$ be bases of $V$ and $\mathcal{C}, \mathcal{C}'$ bases of $W$. Setting $P = M^{\mathcal{B}'}_{\mathcal{B}}(\operatorname{id}_V)$ and $Q = M^{\mathcal{C}'}_{\mathcal{C}}(\operatorname{id}_W)$, we have
$$
M^{\mathcal{B}'}_{\mathcal{C}'}(f) = Q^{-1}\, M^{\mathcal{B}}_{\mathcal{C}}(f)\, P .
$$
For an endomorphism, with the same basis in the domain and in the codomain, the formula becomes
$$
M^{\mathcal{B}'}_{\mathcal{B}'}(f) = P^{-1}\, M^{\mathcal{B}}_{\mathcal{B}}(f)\, P .
$$
In computations $\mathcal{B}$ and $\mathcal{C}$ are the standard bases, $P$ and $Q$ have as columns the vectors of the new bases, and the formula gives the matrix of $f$ with respect to the new bases with two products and one inverse.

:::dimostrazione
We write $f = \operatorname{id}_W \circ f \circ \operatorname{id}_V$, where $\operatorname{id}_V$ goes from $V$ with the basis $\mathcal{B}'$ to $V$ with the basis $\mathcal{B}$, $f$ goes from $V$ with the basis $\mathcal{B}$ to $W$ with the basis $\mathcal{C}$, and $\operatorname{id}_W$ goes from $W$ with the basis $\mathcal{C}$ to $W$ with the basis $\mathcal{C}'$. By the **matrix of the composition**
$$
M^{\mathcal{B}'}_{\mathcal{C}'}(f) = M^{\mathcal{C}}_{\mathcal{C}'}(\operatorname{id}_W)\, M^{\mathcal{B}}_{\mathcal{C}}(f)\, M^{\mathcal{B}'}_{\mathcal{B}}(\operatorname{id}_V) ,
$$
and by the matrix of the inverse map $M^{\mathcal{C}}_{\mathcal{C}'}(\operatorname{id}_W) = \big( M^{\mathcal{C}'}_{\mathcal{C}}(\operatorname{id}_W) \big)^{-1} = Q^{-1}$.
:::
::::

:::richiamo{titolo="Matrix of the composition"}
If $f : U \to V$ and $g : V \to W$ are linear and $\mathcal{A}$, $\mathcal{B}$, $\mathcal{C}$ are bases of $U$, $V$, $W$, then $M^{\mathcal{A}}_{\mathcal{C}}(g \circ f) = M^{\mathcal{B}}_{\mathcal{C}}(g)\, M^{\mathcal{A}}_{\mathcal{B}}(f)$.
:::

:::esempio{titolo="A basis in which the matrix is diagonal"}
Let $f$ be the endomorphism of $\mathbb{R}^2$ with matrix $A$ with respect to the standard basis and let $\mathcal{B}' = \big( (1, 1), (2, 1) \big)$. Then
$$
A =
\begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix} ,
\qquad
P =
\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix} ,
\qquad
P^{-1} =
\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix} ,
$$
$$
P^{-1} A P =
\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} 2 & 6 \\ 2 & 3 \end{pmatrix}
=
\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} .
$$
The result can be read on the vectors of the new basis, since $f(1, 1) = (2, 2) = 2\,(1, 1)$ and $f(2, 1) = (6, 3) = 3\,(2, 1)$. With respect to $\mathcal{B}'$ the matrix is **diagonal**, and the search for bases of this kind is the subject of the topic on eigenvalues and diagonalization.

::grafico{vettori="0,0,6,3;0,0,2,2;0,0,2,1;0,0,1,1" etichette="3.3,1.05,f(b₂);0.75,1.55,f(b₁);1.25,0.22,b₂;0.3,0.65,b₁" segmenti="0,0,3.4,3.4;0,0,6.6,3.3" xmin=-0.5 xmax=6.9 ymin=-0.5 ymax=3.7 uguale=1 titolo="The vectors $b_1 = (1, 1)$ and $b_2 = (2, 1)$ and their images $f(b_1) = 2\,b_1$ and $f(b_2) = 3\,b_2$: each one stays on its own line through the origin"}

:::

:::definizione{#matrici-simili titolo="Similar matrices"}
Two matrices $A, A' \in M_n(\mathbb{R})$ are **similar** if there exists an invertible matrix $P \in M_n(\mathbb{R})$ such that $A' = P^{-1} A P$. By the change-of-basis formula, the matrices associated with the same endomorphism with respect to different bases are similar. Conversely, if $A' = P^{-1} A P$, the columns of $P$ form a basis of $\mathbb{R}^n$ with respect to which the endomorphism $x \mapsto Ax$ has matrix $A'$.
:::

::::teorema{#invarianti-per-similitudine titolo="Similarity invariants"}
If $A, A' \in M_n(\mathbb{R})$ are similar, then they have the same determinant, the same trace and the same rank. The three quantities therefore depend only on the endomorphism and are used to prove that two matrices **are not similar**. The matrices $\begin{pmatrix} 3 & 1 \\ 2 & 0 \end{pmatrix}$ and $\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ both have trace $3$, but the determinants are $-2$ and $2$, therefore they are not similar.

:::dimostrazione
Let $A' = P^{-1} A P$. By **Binet's theorem** $\det A' = \det P^{-1} \det A \det P = \det A$, since $\det P^{-1} \det P = \det I_n = 1$. For the trace we use the equality $\operatorname{tr}(XY) = \operatorname{tr}(YX)$, valid for $X, Y \in M_n(\mathbb{R})$ because both traces are equal to $\sum_{i,j} x_{ij} y_{ji}$; with $X = P^{-1}$ and $Y = AP$ we obtain $\operatorname{tr} A' = \operatorname{tr}(A P P^{-1}) = \operatorname{tr} A$. Finally $A$ and $A'$ are matrices of the same endomorphism $f$, so the rank of both is $\dim \operatorname{Im} f$.
:::
::::

:::richiamo{titolo="Binet's theorem"}
If $A, B \in M_n(\mathbb{R})$, then $\det(AB) = \det A \det B$.
:::

:::attenzione
Equal determinant, trace and rank are *not* enough for similarity. The matrices $I_2$ and $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ have determinant $1$, trace $2$ and rank $2$. However, the only matrix similar to $I_2$ is $I_2$ itself, since $P^{-1} I_2 P = I_2$ for every invertible $P$; therefore the two matrices **are not similar**.
:::

## Linear maps with a parameter

:::osservazione{#applicazioni-con-parametro titolo="Discussion as the parameter varies"}
When the matrix $A_k$ of $f$ depends on a parameter $k$, the discussion follows the rank of $A_k$.

- If $A_k$ is square, compute $\det A_k$. For the values of $k$ with $\det A_k \neq 0$ the map is an isomorphism, with $\ker f = \{0\}$ and $\operatorname{Im} f = W$.
- For each of the values that make the determinant vanish, substitute $k$ in the matrix and compute rank, kernel and image as for a numerical matrix.
- If $A_k$ is not square, reduce it to row echelon form keeping $k$ in the computations and identify the values of $k$ for which a row vanishes; alternatively, use minors and the bordered minors theorem.

The question whether a vector $w$ belongs to $\operatorname{Im} f$ is equivalent to the solvability of the system $A_k x = w$, which is discussed with the **Rouché-Capelli theorem** (see the topic on linear systems).
:::

:::esempio{titolo="An endomorphism with a parameter"}
Let $f_k$ be the endomorphism of $\mathbb{R}^3$ with matrix
$$
A_k =
\begin{pmatrix}
1 & 2 & 0 \\
2 & k & 1 \\
0 & 1 & 1
\end{pmatrix} ,
\qquad
\det A_k = 1 \cdot (k - 1) - 2 \cdot (2 - 0) = k - 5 .
$$
For $k \neq 5$ the map is an **isomorphism**. For $k = 5$ the reduction $R_2 \to R_2 - 2R_1$ gives the row $(0, 1, 1)$, equal to the third, so the rank is $2$. The reduced system $x + 2y = 0$, $y + z = 0$ gives $\ker f_5 = \langle (2, -1, 1) \rangle$. The image is spanned by the first two columns, $\operatorname{Im} f_5 = \langle (1, 2, 0), (2, 5, 1) \rangle$, and setting equal to zero the determinant with the column $(x, y, z)$ gives the Cartesian equation $2x - y + z = 0$.
:::
