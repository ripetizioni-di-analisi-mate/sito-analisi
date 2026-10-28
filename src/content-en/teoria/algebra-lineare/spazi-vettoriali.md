---
titolo: Vector spaces, bases and dimension
sommario: The common structure of vectors, matrices and polynomials, subspaces described by generators or by equations, bases, dimension and Grassmann's formula for sum and intersection.
---

## Vector spaces

:::definizione{#spazio-vettoriale titolo="Real vector space"}
A **real vector space** is a set $V$ equipped with two operations, addition $V \times V \to V$, $(u, v) \mapsto u + v$, and scalar multiplication $\mathbb{R} \times V \to V$, $(\lambda, v) \mapsto \lambda v$, such that the following properties hold for every $u, v, w \in V$ and every $\lambda, \mu \in \mathbb{R}$.

- Addition is associative and commutative: $(u + v) + w = u + (v + w)$ and $u + v = v + u$.
- There exists a zero vector $0 \in V$ with $v + 0 = v$ for every $v$.
- Every $v$ has an opposite $-v$ with $v + (-v) = 0$.
- Distributivity: $\lambda(u + v) = \lambda u + \lambda v$ and $(\lambda + \mu)v = \lambda v + \mu v$.
- Compatibility: $\lambda(\mu v) = (\lambda\mu)v$ and $1 \cdot v = v$.

The elements of $V$ are called **vectors**, and the real numbers are called scalars. The definition collects only the computational rules needed to speak of linear combinations, bases and dimension; therefore every result proved from them holds *simultaneously* for $n$-tuples, for matrices and for polynomials.
:::

:::esempio{titolo="The vector spaces of the exam"}
- $\mathbb{R}^n$, with componentwise addition and scalar multiplication: $(1, 2, 0) + 3\,(0, 1, 1) = (1, 5, 3)$.
- $M_{m,n}(\mathbb{R})$, the $m \times n$ matrices with entrywise addition and scalar multiplication; the zero vector is the zero matrix.
- $\mathbb{R}_n[x]$, the polynomials with real coefficients of degree less than or equal to $n$, including the zero polynomial, with the usual operations on polynomials.

For $\mathbb{R}_n[x]$ the condition on the degree is written as an inequality because the polynomials of degree *exactly* $2$ do not form a vector space: the sum $(x^2 + x) + (-x^2) = x$ has degree $1$.
:::

:::osservazione{#proprieta-elementari titolo="Computational rules"}
The axioms imply the rules $0 \cdot v = 0$, $\lambda \cdot 0 = 0$ and $(-1)\,v = -v$. For the first one we write $0 \cdot v = (0 + 0)\,v = 0 \cdot v + 0 \cdot v$; adding the opposite of $0 \cdot v$ to both sides gives $0 = 0 \cdot v$. Moreover, the zero-product law holds: if $\lambda v = 0$, then $\lambda = 0$ or $v = 0$. These rules are used in all subsequent computations without being cited.
:::

## Vector subspaces

:::definizione{#sottospazio titolo="Vector subspace"}
A subset $W \subseteq V$ is a **vector subspace** of $V$ if it is itself a vector space with the operations of $V$. Every space $V$ contains the trivial subspaces $\{0\}$ and $V$. In $\mathbb{R}^2$ the other subspaces are the lines through the origin, in $\mathbb{R}^3$ the lines and the planes through the origin, as the computation of the dimension will show.
:::

::::teorema{#criterio-sottospazio titolo="Subspace criterion"}
Let $V$ be a vector space and let $W \subseteq V$. Then $W$ is a subspace of $V$ if and only if the following three conditions are satisfied together:
$$
\begin{cases}
0 \in W \\[4pt]
u + v \in W \quad \text{for every } u, v \in W \\[4pt]
\lambda u \in W \quad \text{for every } u \in W, \ \lambda \in \mathbb{R}
\end{cases}
$$
The criterion reduces the verification of the axioms to three checks. To rule out that $W$ is a subspace, a counterexample to *one* of the three conditions is sufficient, and the quickest one to check is $0 \in W$.

:::dimostrazione
If $W$ is a subspace, the sum and the scalar multiple of elements of $W$ lie in $W$ by definition, and $0 \in W$ since for every $u \in W$ we have $0 = 0 \cdot u \in W$. Conversely, if the three conditions are satisfied, the two operations of $V$ remain operations on $W$. The associative, commutative, distributive and compatibility properties hold in $W$ because they hold in $V$; the zero vector lies in $W$ by the first condition, and the opposite of $u \in W$ is $-u = (-1)\,u$, which lies in $W$ by the third. Therefore $W$ is a vector space.
:::
::::

:::esempio{titolo="A plane through the origin"}
$W = \{ (x, y, z) \in \mathbb{R}^3 : x + y - 2z = 0 \}$. The zero vector satisfies the equation. If $u = (u_1, u_2, u_3)$ and $v = (v_1, v_2, v_3)$ lie in $W$, then
$$
\begin{aligned}
(u_1 + v_1) + (u_2 + v_2) - 2(u_3 + v_3) &= (u_1 + u_2 - 2u_3) + (v_1 + v_2 - 2v_3) \\[6pt]
&= 0 + 0 = 0 ,
\end{aligned}
$$
so $u + v \in W$; in the same way $\lambda u_1 + \lambda u_2 - 2\lambda u_3 = \lambda \cdot 0 = 0$, so $\lambda u \in W$. By the **subspace criterion**, $W$ **is a subspace** of $\mathbb{R}^3$.
:::

:::osservazione{#sottospazi-ed-equazioni titolo="Homogeneous and non-homogeneous equations"}
The argument of the example holds for every homogeneous linear system: the solution set of $A x = 0$, with $A \in M_{m,n}(\mathbb{R})$, is a **subspace** of $\mathbb{R}^n$, since $A0 = 0$, $A(u + v) = Au + Av$ and $A(\lambda u) = \lambda\, Au$. The solution set of a system $A x = b$ with $b \neq 0$ is *not* a subspace, because the zero vector does not satisfy it. In the plane the line $x - 2y = 0$ is a subspace, while the parallel line $x - 2y = -2$ does not contain the origin.

::grafico{f="x/2;x/2+1" punti="0,0,pieno;0,1,vuoto" etichette="2.3,0.6,x − 2y = 0;-3.6,0.2,x − 2y = −2" xmin=-4 xmax=4 ymin=-2.5 ymax=3 uguale=1 titolo="The line $x - 2y = 0$ passes through the origin and is a subspace of $\mathbb{R}^2$; the parallel line $x - 2y = -2$ (dashed) does not contain the zero vector"}

:::

:::attenzione
A subset can contain the zero vector and be closed under scalar multiplication without being a subspace. The union of the two axes of $\mathbb{R}^2$, that is $\{ (x, y) : xy = 0 \}$, contains $(1, 0)$ and $(0, 1)$, while their sum $(1, 1)$ does not satisfy $xy = 0$. The three conditions of the criterion must *all* be verified.

::grafico{curve="t<2.6?t:(t>3.4?0:NaN),t<2.6?0:(t>3.4?t-6:NaN),-2.5,8.5" vettori="0,0,1,0,u;0,0,0,1,v;0,0,1,1,u + v" punti="1,1,vuoto" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=2.5 uguale=1 titolo="The set $xy = 0$ (in color) is the union of the two axes: it contains $u = (1, 0)$ and $v = (0, 1)$, and it does not contain the sum $u + v = (1, 1)$"}

:::

## Linear combinations and generators

:::definizione{#combinazione-lineare titolo="Linear combination"}
Given $v_1, \dots, v_k \in V$, a **linear combination** of these vectors is a vector of the form
$$
\lambda_1 v_1 + \lambda_2 v_2 + \dots + \lambda_k v_k , \qquad \lambda_1, \dots, \lambda_k \in \mathbb{R} .
$$
The numbers $\lambda_i$ are the coefficients of the combination. Determining whether $v$ is a linear combination of $v_1, \dots, v_k$ is equivalent to determining whether a linear system in the unknowns $\lambda_i$ has a solution. For example $(3, 5) = \lambda_1 (1, 1) + \lambda_2 (1, 2)$ is equivalent to the system $\lambda_1 + \lambda_2 = 3$, $\lambda_1 + 2\lambda_2 = 5$, which has the solution $\lambda_1 = 1$, $\lambda_2 = 2$.
:::

::::teorema{#sottospazio-generato titolo="Subspace spanned"}
Let $v_1, \dots, v_k \in V$. The set of all their linear combinations
$$
\langle v_1, \dots, v_k \rangle = \{ \lambda_1 v_1 + \dots + \lambda_k v_k : \lambda_1, \dots, \lambda_k \in \mathbb{R} \}
$$
is a subspace of $V$, and it is the **smallest subspace** that contains $v_1, \dots, v_k$. The subspace spanned by a nonzero vector is the line through the origin with that direction; in $\mathbb{R}^3$ the subspace spanned by two non-proportional vectors is the plane through the origin that contains them.

::grafico{f="2*x" vettori="0,0,1,2,v;0,0,-1,-2,−v" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-3.5 ymax=3.5 uguale=1 titolo="The subspace $\langle v \rangle$ spanned by $v = (1, 2)$ is the line $y = 2x$: it contains all the multiples $\lambda v$, such as $-v = (-1, -2)$"}

:::dimostrazione
The combination with all coefficients equal to zero gives $0$. The sum of two combinations is the combination with coefficients $\lambda_i + \mu_i$, and the product of a combination by $c \in \mathbb{R}$ is the combination with coefficients $c\lambda_i$; hence by the **subspace criterion** $\langle v_1, \dots, v_k \rangle$ is a subspace. If $U$ is a subspace that contains $v_1, \dots, v_k$, then it contains every $\lambda_i v_i$ and every sum of such vectors, because it is closed under the two operations; therefore $\langle v_1, \dots, v_k \rangle \subseteq U$.
:::
::::

:::definizione{#sistema-di-generatori titolo="Spanning set"}
The vectors $v_1, \dots, v_k$ **span** $V$ if $\langle v_1, \dots, v_k \rangle = V$, that is, if every vector of $V$ is a linear combination of them. A space that admits a finite number of generators is called finitely generated, and all the spaces of this topic are. For example $(1, 1)$ and $(1, -1)$ span $\mathbb{R}^2$, since for every $(a, b)$ we have
$$
(a, b) = \frac{a + b}{2}\,(1, 1) + \frac{a - b}{2}\,(1, -1) .
$$
The space $\mathbb{R}[x]$ of *all* polynomials is not finitely generated: a finite number of polynomials has a maximum degree $d$, so their combinations have degree at most $d$.
:::

:::teorema{#generatori-ridondanti titolo="Removal of a redundant generator"}
Let $v_1, \dots, v_k \in V$. If $v_k$ is a linear combination of $v_1, \dots, v_{k-1}$, then
$$
\langle v_1, \dots, v_{k-1}, v_k \rangle = \langle v_1, \dots, v_{k-1} \rangle .
$$
Indeed, in every combination of $v_1, \dots, v_k$ one can replace $v_k$ with its expression, and one obtains a combination of $v_1, \dots, v_{k-1}$ alone. This theorem is used to reduce a spanning set: since $(2, 3) = 2\,(1, 0) + 3\,(0, 1)$, we have $\langle (1, 0), (0, 1), (2, 3) \rangle = \langle (1, 0), (0, 1) \rangle = \mathbb{R}^2$.
:::

## Linear dependence and independence

:::definizione{#indipendenza-lineare titolo="Linearly independent vectors"}
The vectors $v_1, \dots, v_k \in V$ are **linearly independent** if the only linear combination that gives the zero vector is the one with all coefficients equal to zero:
$$
\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \quad \Longrightarrow \quad \lambda_1 = \dots = \lambda_k = 0 .
$$
Otherwise they are **linearly dependent**, and a zero combination with coefficients not all zero is called a dependence relation. The verification consists in solving the homogeneous system in the unknowns $\lambda_i$: the vectors are independent when the *only* solution is the zero one.
:::

::::teorema{#caratterizzazione-dipendenza titolo="Dependence and linear combinations"}
Let $v_1, \dots, v_k \in V$ with $k \geq 2$. The vectors are linearly dependent if and only if *at least one* of them is a linear combination of the others. From the dependence relation $2v_1 - v_2 + 3v_3 = 0$, for example, one obtains $v_2 = 2v_1 + 3v_3$.

:::dimostrazione
If $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ with a coefficient $\lambda_j \neq 0$, we divide by $\lambda_j$ and obtain
$$
v_j = -\sum_{i \neq j} \frac{\lambda_i}{\lambda_j}\, v_i ,
$$
so $v_j$ is a combination of the others. Conversely, if $v_j = \sum_{i \neq j} \mu_i v_i$, then $\sum_{i \neq j} \mu_i v_i - v_j = 0$ is a zero combination in which the coefficient of $v_j$ equals $-1 \neq 0$, therefore the vectors are dependent.
:::
::::

:::osservazione{#casi-particolari-indipendenza titolo="Special cases"}
- A single vector $v$ is independent if and only if $v \neq 0$.
- Two vectors are dependent if and only if they are proportional.
- A set that contains the zero vector is dependent, since $1 \cdot 0 = 0$ is a dependence relation.
- A subset of independent vectors consists of independent vectors.
:::

:::attenzione
For three or more vectors, pairwise comparison does not decide. The vectors $(1, 0)$, $(0, 1)$, $(1, 1)$ are pairwise non-proportional, yet they are **dependent**, because $(1, 1) = (1, 0) + (0, 1)$.

::grafico{vettori="0,0,1,0,u;0,0,0,1,v;0,0,1,1,w" segmenti="1,0,1,1;0,1,1,1" xmin=-0.6 xmax=1.8 ymin=-0.5 ymax=1.6 uguale=1 titolo="The vector $w = (1, 1)$ is the diagonal of the parallelogram with sides $u = (1, 0)$ and $v = (0, 1)$: since $w = u + v$, the three vectors are dependent"}

:::

::::teorema{#indipendenza-e-rango titolo="Independence and rank"}
Let $v_1, \dots, v_k \in \mathbb{R}^n$ and let $A \in M_{n,k}(\mathbb{R})$ be the matrix that has these vectors as columns. The vectors are linearly independent if and only if $\operatorname{rk} A = k$. In particular, for $k = n$ the vectors are independent if and only if $\det A \neq 0$. The rank is computed with row reduction or with minors, as in the topic on linear systems.

:::dimostrazione
The equality $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ is the homogeneous system $A \lambda = 0$ in the unknown $\lambda = (\lambda_1, \dots, \lambda_k)$. By the **Rouché-Capelli theorem** its solutions depend on $k - \operatorname{rk} A$ free parameters, so the only solution is the zero one if and only if $\operatorname{rk} A = k$. For $k = n$ the matrix is square, and $\operatorname{rk} A = n$ is equivalent to $\det A \neq 0$.
:::
::::

:::richiamo{titolo="Rouché-Capelli theorem (homogeneous case)"}
Let $A \in M_{m,k}(\mathbb{R})$. The system $A \lambda = 0$ is always solvable and its solutions depend on $k - \operatorname{rk} A$ free parameters.
:::

:::esempio{titolo="Three independent vectors"}
The vectors $(1, 2, 0)$, $(0, 1, 1)$, $(1, 1, 1)$ are **independent**, since the matrix that has them as columns has nonzero determinant:
$$
\begin{vmatrix}
1 & 0 & 1 \\
2 & 1 & 1 \\
0 & 1 & 1
\end{vmatrix}
= 1 \cdot (1 - 1) - 0 + 1 \cdot (2 - 0) = 2 \neq 0 .
$$
:::

::::teorema{#aggiunta-di-un-vettore titolo="Adding a vector to an independent set"}
Let $v_1, \dots, v_k \in V$ be linearly independent and let $v \in V$ with $v \notin \langle v_1, \dots, v_k \rangle$. Then $v_1, \dots, v_k, v$ are linearly independent. The theorem allows one to extend an independent set one vector at a time, and it is used to complete an independent set to a basis.

:::dimostrazione
Let $\lambda_1 v_1 + \dots + \lambda_k v_k + \mu v = 0$. If $\mu \neq 0$, we would have $v = -\dfrac{1}{\mu}(\lambda_1 v_1 + \dots + \lambda_k v_k) \in \langle v_1, \dots, v_k \rangle$, contrary to the hypothesis; hence $\mu = 0$. The relation becomes $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$, and since $v_1, \dots, v_k$ are independent, all the $\lambda_i$ are zero.
:::
::::

## Bases and coordinates

:::definizione{#base titolo="Basis"}
A **basis** of $V$ is an ordered sequence $\mathcal{B} = (v_1, \dots, v_n)$ of vectors of $V$ that are linearly independent and span $V$. The two conditions play distinct roles: since the vectors span $V$, every vector can be written as a combination of them; since they are independent, this expression is unique, as stated by the theorem on the uniqueness of coordinates.
:::

:::osservazione{#basi-canoniche titolo="Standard bases"}
- In $\mathbb{R}^n$ the standard basis consists of $e_1 = (1, 0, \dots, 0)$, $\dots$, $e_n = (0, \dots, 0, 1)$, and $(a_1, \dots, a_n) = a_1 e_1 + \dots + a_n e_n$.
- In $M_{m,n}(\mathbb{R})$ the standard basis consists of the $mn$ matrices $E_{ij}$ with $1$ in position $(i, j)$ and $0$ elsewhere.
- In $\mathbb{R}_n[x]$ the standard basis is $(1, x, x^2, \dots, x^n)$, consisting of $n + 1$ polynomials.
:::

::::teorema{#unicita-delle-coordinate titolo="Uniqueness of coordinates"}
Let $\mathcal{B} = (v_1, \dots, v_n)$ be a basis of $V$. Then every $v \in V$ can be written in **one and only one way** as
$$
v = a_1 v_1 + \dots + a_n v_n .
$$

:::dimostrazione
The existence of the expression follows from the fact that $v_1, \dots, v_n$ span $V$. If $v = a_1 v_1 + \dots + a_n v_n = b_1 v_1 + \dots + b_n v_n$, subtracting the two expressions gives $(a_1 - b_1)\,v_1 + \dots + (a_n - b_n)\,v_n = 0$; since the basis vectors are independent, $a_i - b_i = 0$ for every $i$, so the two expressions coincide.
:::
::::

:::definizione{#coordinate titolo="Coordinates with respect to a basis"}
The numbers $a_1, \dots, a_n$ of the uniqueness theorem are the **coordinates** of $v$ with respect to $\mathcal{B}$, and $(a_1, \dots, a_n) \in \mathbb{R}^n$ is the coordinate vector. With respect to the standard basis the coordinates of a vector of $\mathbb{R}^n$ are its components, and the coordinates of $p(x) = 3 - x + 2x^2$ with respect to $(1, x, x^2)$ are $(3, -1, 2)$. With respect to another basis the coordinates are found by solving a linear system: with $\mathcal{B} = \big( (1, 1), (1, -1) \big)$ we have $(5, 1) = 3\,(1, 1) + 2\,(1, -1)$, so the coordinates of $(5, 1)$ are $(3, 2)$.

::grafico{vettori="0,0,3,3,3b₁;3,3,5,1,2b₂;0,0,5,1,v;0,0,1,1,b₁;0,0,1,-1,b₂" segmenti="0,0,2,-2;2,-2,5,1" xmin=-0.8 xmax=5.8 ymin=-2.6 ymax=3.6 uguale=1 titolo="With respect to the basis $b_1 = (1, 1)$, $b_2 = (1, -1)$ the vector $v = (5, 1)$ is written $3b_1 + 2b_2$: its coordinates are $(3, 2)$"}

:::

:::osservazione{#calcoli-in-coordinate titolo="Computations in coordinates"}
Once a basis of $V$ is fixed, passing from vectors to coordinates preserves sums, scalar multiples and linear combinations. Therefore vectors of $V$ are independent if and only if their coordinate vectors in $\mathbb{R}^n$ are, and the same holds for generators. In computations with polynomials or matrices one therefore passes to coordinates with respect to the standard basis and applies the methods of $\mathbb{R}^n$: the polynomials $1 + x$, $x - x^2$, $1 + 2x + x^2$ correspond to the vectors $(1, 1, 0)$, $(0, 1, -1)$, $(1, 2, 1)$, which are independent because the determinant of the matrix that has them as columns equals $2$. This correspondence is an isomorphism, a notion for which we refer to the topic on linear maps.
:::

## Dimension

::::teorema{#lemma-di-steinitz titolo="Steinitz lemma"}
Let $V$ be spanned by $w_1, \dots, w_n$. Then every set of linearly independent vectors of $V$ has *at most* $n$ elements. For example $\mathbb{R}^3$ is spanned by the three standard vectors, so four vectors of $\mathbb{R}^3$ are always dependent.

:::dimostrazione
Let $v_1, \dots, v_m \in V$ with $m > n$; we show that they are dependent. Since the $w_i$ span $V$, each $v_j$ can be written $v_j = \sum_{i=1}^{n} a_{ij} w_i$. The homogeneous system
$$
\sum_{j=1}^{m} a_{ij}\, x_j = 0 , \qquad i = 1, \dots, n ,
$$
has $n$ equations and $m > n$ unknowns, so it has a nonzero solution $(x_1, \dots, x_m)$. For this solution
$$
\begin{aligned}
\sum_{j=1}^{m} x_j v_j &= \sum_{j=1}^{m} x_j \sum_{i=1}^{n} a_{ij} w_i \\[6pt]
&= \sum_{i=1}^{n} \Big( \sum_{j=1}^{m} a_{ij} x_j \Big) w_i = 0 ,
\end{aligned}
$$
therefore $v_1, \dots, v_m$ are linearly dependent.
:::
::::

:::richiamo{titolo="Homogeneous systems with more unknowns than equations"}
A homogeneous linear system of $n$ equations in $m > n$ unknowns has nonzero solutions, since the rank is at most $n$ and the solutions depend on at least $m - n \geq 1$ free parameters.
:::

::::teorema{#invarianza-della-dimensione titolo="Invariance of the number of elements of a basis"}
Let $V \neq \{0\}$ be finitely generated. Then $V$ has a basis, and any two bases of $V$ have the **same number of elements**. The existence of a basis follows from the theorem on extracting a basis, applied to a finite spanning set.

:::dimostrazione
Let $(v_1, \dots, v_n)$ and $(w_1, \dots, w_m)$ be two bases of $V$. The $w_j$ are independent and the $v_i$ span $V$, so by the **Steinitz lemma** $m \leq n$. Exchanging the roles of the two bases gives $n \leq m$, therefore $m = n$.
:::
::::

:::definizione{#dimensione titolo="Dimension"}
The **dimension** of $V$, denoted by $\dim V$, is the number of elements of any basis; by convention $\dim \{0\} = 0$. From the standard bases one reads
$$
\dim \mathbb{R}^n = n , \qquad \dim M_{m,n}(\mathbb{R}) = mn , \qquad \dim \mathbb{R}_n[x] = n + 1 .
$$
The dimension is the number of free parameters needed to describe a vector of the space: a line through the origin has dimension $1$, a plane through the origin dimension $2$.
:::

::::teorema{#conseguenze-della-dimensione titolo="Consequences of the dimension"}
Let $\dim V = n$. Then:

- more than $n$ vectors of $V$ are linearly dependent;
- fewer than $n$ vectors of $V$ do not span $V$;
- $n$ linearly independent vectors form a basis of $V$;
- $n$ vectors that span $V$ form a basis of $V$.

The last two properties reduce the checks: to verify that $n$ vectors of a space of dimension $n$ form a basis it is sufficient to check *only one* of the two conditions, usually independence by means of the determinant.

:::dimostrazione
The first two properties follow from the **Steinitz lemma** applied to a basis of $V$, which consists of $n$ vectors that are independent and generators. Let $v_1, \dots, v_n$ be independent: if they did not span $V$, there would exist $v \notin \langle v_1, \dots, v_n \rangle$ and, by the theorem on adding a vector, $v_1, \dots, v_n, v$ would be $n + 1$ independent vectors, contrary to the first property. Now let $v_1, \dots, v_n$ be generators: if they were dependent, one of them would be a combination of the others and, removing it, $V$ would be spanned by $n - 1$ vectors, contrary to the second property.
:::
::::

:::richiamo{titolo="Adding a vector to an independent set"}
If $v_1, \dots, v_k$ are linearly independent and $v \notin \langle v_1, \dots, v_k \rangle$, then $v_1, \dots, v_k, v$ are linearly independent.
:::

:::teorema{#dimensione-di-un-sottospazio titolo="Dimension of a subspace"}
Let $\dim V = n$ and let $W$ be a subspace of $V$. Then $\dim W \leq n$, and $\dim W = n$ if and only if $W = V$. Indeed, by the Steinitz lemma, every set of independent vectors of $W$ has at most $n$ elements. If $W \neq \{0\}$, we choose an independent set $w_1, \dots, w_m$ of $W$ with $m$ maximal; every $w \in W$ belongs to $\langle w_1, \dots, w_m \rangle$, since otherwise, by the theorem on adding a vector, $w_1, \dots, w_m, w$ would be $m + 1$ independent vectors of $W$. Hence $(w_1, \dots, w_m)$ is a basis of $W$ and $\dim W = m \leq n$. If $m = n$, by the consequences of the dimension $w_1, \dots, w_n$ form a basis of $V$, therefore $W = V$. The theorem is used to prove equalities between subspaces: if $U \subseteq W$ and $\dim U = \dim W$, then $U = W$.
:::

## Extracting and completing bases

::::teorema{#estrazione-di-una-base titolo="Extracting a basis"}
Let $v_1, \dots, v_k$ be generators of $V \neq \{0\}$. Then a basis of $V$ can be chosen among them. In particular $\dim \langle v_1, \dots, v_k \rangle$ is the maximum number of independent vectors among $v_1, \dots, v_k$.

:::dimostrazione
If $v_1, \dots, v_k$ are independent, they already form a basis. Otherwise, by the theorem on dependence and linear combinations, one of them is a combination of the others, and by the **theorem on removing a redundant generator** the remaining ones still span $V$. The procedure is repeated until the remaining vectors are independent. At each step the number of vectors decreases by one, and a single nonzero vector is independent, so the procedure ends with a basis of $V$.
:::
::::

::::teorema{#completamento-a-base titolo="Completion to a basis"}
Let $\dim V = n$ and let $v_1, \dots, v_k \in V$ be linearly independent, with $k < n$. Then there exist $v_{k+1}, \dots, v_n \in V$ such that $(v_1, \dots, v_n)$ is a basis of $V$. The added vectors can be chosen among those of any fixed basis of $V$, for example the standard basis.

:::dimostrazione
Let $(e_1, \dots, e_n)$ be a basis of $V$. Since $k < n$, by the consequences of the dimension the vectors $v_1, \dots, v_k$ do not span $V$. If all the $e_j$ belonged to $\langle v_1, \dots, v_k \rangle$, this subspace would contain every combination of them and would be equal to $V$; hence there exists an $e_j \notin \langle v_1, \dots, v_k \rangle$, and by the **theorem on adding a vector** the vectors $v_1, \dots, v_k, e_j$ are independent. The step is repeated until there are $n$ independent vectors, which by the consequences of the dimension form a basis of $V$.
:::
::::

:::osservazione{#metodo-della-riduzione-a-scala titolo="The method with row reduction"}
In $\mathbb{R}^n$, or in coordinates, extraction and completion are carried out with row reduction.

- **Extraction**: write the generators as *columns* of a matrix $A$ and reduce $A$ to row echelon form. The columns of $A$ corresponding to the pivot columns form a basis of $\langle v_1, \dots, v_k \rangle$, and $\dim \langle v_1, \dots, v_k \rangle = \operatorname{rk} A$. The method is correct because elementary row operations do not change the solutions of $A x = 0$, that is, the linear relations among the columns.
- **Completion**: write the independent vectors as *rows* and reduce to row echelon form, then add the standard vectors $e_j$ corresponding to the columns without a pivot. Row operations do not change the subspace spanned by the rows, and the echelon rows together with the added vectors have a pivot in every column, so they form $n$ independent vectors and span $\mathbb{R}^n$. Since the echelon rows span the same subspace as the original vectors, the original vectors together with the added ones also span $\mathbb{R}^n$, and by the consequences of dimension they form a basis of it.
:::

:::esempio{titolo="Extraction with row reduction"}
Generators $v_1 = (1, 2, 1)$, $v_2 = (2, 4, 2)$, $v_3 = (0, 1, 1)$, $v_4 = (1, 3, 2)$, written as columns:
$$
\begin{pmatrix}
1 & 2 & 0 & 1 \\
2 & 4 & 1 & 3 \\
1 & 2 & 1 & 2
\end{pmatrix}
\xrightarrow{\substack{R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 - R_1}}
\begin{pmatrix}
1 & 2 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 1 & 1
\end{pmatrix}
\xrightarrow{R_3 \to R_3 - R_2}
\begin{pmatrix}
1 & 2 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
The pivots are in columns $1$ and $3$, so $(v_1, v_3)$ is a **basis** of the spanned subspace, which has dimension $2$. The columns without a pivot give the relations $v_2 = 2v_1$ and $v_4 = v_1 + v_3$.
:::

:::attenzione
The basis is taken among the columns of the *original* matrix. The columns of the echelon matrix in general do not belong to the subspace: for $\langle (1, 2) \rangle$ the reduction of $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ gives $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$, and $(1, 0)$ is not a multiple of $(1, 2)$.

::grafico{f="2*x" vettori="0,0,1,2,v;0,0,1,0,e₁" xmin=-2 xmax=2.5 ymin=-2.5 ymax=3 uguale=1 titolo="The subspace $\langle (1, 2) \rangle$ is the line $y = 2x$ that contains $v = (1, 2)$; the vector $e_1 = (1, 0)$ obtained from row reduction does not lie on the line"}

:::

## Parametric form and Cartesian form

:::definizione{#forma-parametrica titolo="Parametric form"}
A subspace $W = \langle w_1, \dots, w_k \rangle$ of $\mathbb{R}^n$ is described in **parametric form** by the equality $x = t_1 w_1 + \dots + t_k w_k$, with $t_1, \dots, t_k \in \mathbb{R}$. If the generators are independent, the number of parameters is $\dim W$. For example $\{ (s + t, s, t) : s, t \in \mathbb{R} \} = \langle (1, 1, 0), (1, 0, 1) \rangle$ is a plane of $\mathbb{R}^3$.
:::

:::definizione{#forma-cartesiana titolo="Cartesian form"}
A subspace $W$ of $\mathbb{R}^n$ is described in **Cartesian form** as the solution set of a homogeneous system $A x = 0$, with $A \in M_{m,n}(\mathbb{R})$. By the Rouché-Capelli theorem
$$
\dim W = n - \operatorname{rk} A ,
$$
so, if the equations are independent, their number is $n - \dim W$: a plane of $\mathbb{R}^3$ has one equation, a line of $\mathbb{R}^3$ has two, a subspace of dimension $3$ in $\mathbb{R}^4$ has one.
:::

:::osservazione{#da-cartesiana-a-parametrica titolo="From Cartesian to parametric form"}
Solve the system, express the dependent variables in terms of the free ones and factor out the free variables: the vectors of their coefficients form a basis of $W$. For
$$
W :
\begin{cases}
x + y - z = 0 \\[4pt]
y + 2z = 0
\end{cases}
$$
the second equation gives $y = -2z$ and the first $x = z - y = 3z$, so $(x, y, z) = z\,(3, -2, 1)$ and $W = \langle (3, -2, 1) \rangle$, of dimension $3 - 2 = 1$.
:::

:::osservazione{#da-parametrica-a-cartesiana titolo="From parametric to Cartesian form"}
Let $W = \langle w_1, \dots, w_k \rangle$ with independent generators. A vector $x$ belongs to $W$ if and only if $w_1, \dots, w_k, x$ are dependent, that is, if and only if
$$
\operatorname{rk} \begin{pmatrix} w_1 & \cdots & w_k & x \end{pmatrix} = k .
$$
Reduce to row echelon form the matrix with columns $w_1, \dots, w_k, x$: the rows that vanish in the first $k$ columns give, in the last column, the $n - k$ Cartesian equations. When $k = n - 1$ the condition is the vanishing of a determinant. For $W = \langle (1, 0, 2), (0, 1, -1) \rangle$ one obtains
$$
\begin{vmatrix}
1 & 0 & x \\
0 & 1 & y \\
2 & -1 & z
\end{vmatrix}
= -2x + y + z = 0 ,
$$
that is $W : 2x - y - z = 0$. The check consists in substituting the generators into the equation found: $2 - 0 - 2 = 0$ and $0 - 1 + 1 = 0$.
:::

## Intersection, sum and Grassmann's formula

:::teorema{#intersezione-di-sottospazi titolo="Intersection of subspaces"}
Let $U$ and $W$ be subspaces of $V$. Then $U \cap W$ is a subspace of $V$. Indeed the zero vector lies in both, and sums and multiples of common vectors remain in both, so the subspace criterion applies. If $U$ and $W$ are in Cartesian form, the equations of $U \cap W$ are obtained by combining the equations of $U$ and those of $W$ into one system.
:::

:::attenzione
The union of two subspaces is in general *not* a subspace. The lines $\langle (1, 1) \rangle$ and $\langle (1, -1) \rangle$ of $\mathbb{R}^2$ are subspaces, while their union does not contain the sum $(1, 1) + (1, -1) = (2, 0)$.
:::

:::definizione{#somma-di-sottospazi titolo="Sum of subspaces"}
Let $U$ and $W$ be subspaces of $V$. Their **sum** is
$$
U + W = \{ u + w : u \in U, \ w \in W \} .
$$
It is the smallest subspace that contains $U \cup W$. If $U = \langle u_1, \dots, u_r \rangle$ and $W = \langle w_1, \dots, w_s \rangle$, then $U + W = \langle u_1, \dots, u_r, w_1, \dots, w_s \rangle$, so a basis of the sum is extracted from the union of the two bases.
:::

::::teorema{#formula-di-grassmann titolo="Grassmann's formula"}
Let $U$ and $W$ be subspaces of a finite-dimensional space $V$. Then
$$
\dim (U + W) = \dim U + \dim W - \dim (U \cap W) .
$$
The formula allows one to compute one of the four dimensions knowing the other three, and it provides a check on the computations. Two distinct planes through the origin in $\mathbb{R}^3$ have sum $\mathbb{R}^3$, so $\dim (U \cap W) = 2 + 2 - 3 = 1$, that is, they intersect in a line.

:::dimostrazione
Let $(z_1, \dots, z_r)$ be a basis of $U \cap W$. By the **completion theorem** it is completed to a basis $(z_1, \dots, z_r, u_1, \dots, u_s)$ of $U$ and to a basis $(z_1, \dots, z_r, w_1, \dots, w_t)$ of $W$, so $\dim U = r + s$ and $\dim W = r + t$. We show that $\mathcal{B} = (z_1, \dots, z_r, u_1, \dots, u_s, w_1, \dots, w_t)$ is a basis of $U + W$. The vectors of $\mathcal{B}$ span $U + W$, since they contain a basis of $U$ and a basis of $W$. For independence, let
$$
\sum_i a_i z_i + \sum_j b_j u_j + \sum_l c_l w_l = 0 .
$$
The vector $w = \sum_l c_l w_l$ lies in $W$ and is equal to $-\sum_i a_i z_i - \sum_j b_j u_j$, which lies in $U$; hence $w \in U \cap W$ and it can be written $w = \sum_i d_i z_i$. From $\sum_i d_i z_i - \sum_l c_l w_l = 0$ and the independence of the basis of $W$ it follows that all the $c_l$ are zero. The initial relation becomes $\sum_i a_i z_i + \sum_j b_j u_j = 0$, and from the independence of the basis of $U$ it follows that the $a_i$ and the $b_j$ are zero as well. Therefore
$$
\dim (U + W) = r + s + t = (r + s) + (r + t) - r .
$$
:::
::::

:::richiamo{titolo="Completion to a basis"}
If $\dim V = n$ and $v_1, \dots, v_k \in V$ are linearly independent with $k < n$, there exist $v_{k+1}, \dots, v_n$ such that $(v_1, \dots, v_n)$ is a basis of $V$.
:::

:::osservazione{#calcolo-di-somma-e-intersezione titolo="Computing sum and intersection"}
- **Sum**: join the bases of $U$ and of $W$ and extract a basis with row reduction; $\dim (U + W)$ is the rank of the matrix that has all the generators as columns.
- **Intersection** with both subspaces in Cartesian form: combine all the equations into one system.
- **Intersection** with $U$ in Cartesian form and $W = \langle w_1, \dots, w_s \rangle$: substitute the generic vector $t_1 w_1 + \dots + t_s w_s$ into the equations of $U$ and derive the conditions on the parameters.

The dimensions found must satisfy Grassmann's formula. For $U : x - z = 0$ and $W : y + z = 0$ in $\mathbb{R}^3$, the system of the two equations gives $x = z$, $y = -z$, so $U \cap W = \langle (1, -1, 1) \rangle$, and $\dim (U + W) = 2 + 2 - 1 = 3$, that is $U + W = \mathbb{R}^3$.
:::

## Direct sum

:::definizione{#somma-diretta titolo="Direct sum"}
The sum of two subspaces $U$ and $W$ is **direct** if $U \cap W = \{0\}$, and in this case one writes $U \oplus W$. If moreover $U \oplus W = V$, the two subspaces are called **complementary** in $V$. By Grassmann's formula the sum is direct if and only if $\dim (U + W) = \dim U + \dim W$.
:::

::::teorema{#caratterizzazione-somma-diretta titolo="Uniqueness of the decomposition"}
Let $U$ and $W$ be subspaces of $V$. The sum $U + W$ is direct if and only if every vector of $U + W$ can be written in **only one way** as $u + w$ with $u \in U$ and $w \in W$. In a direct sum every vector therefore has two well-determined components, one in $U$ and one in $W$.

::grafico{f="x/2;-x" vettori="0,0,2,1,u;0,0,-1,1,w;0,0,1,2,v" segmenti="2,1,1,2;-1,1,1,2" xmin=-2.5 xmax=3 ymin=-1.5 ymax=2.6 uguale=1 titolo="$\mathbb{R}^2 = U \oplus W$ with $U = \langle (2, 1) \rangle$ and $W = \langle (-1, 1) \rangle$ (dashed): the vector $v = (1, 2)$ decomposes in only one way as $u + w$, with $u = (2, 1)$ and $w = (-1, 1)$"}

:::dimostrazione
Let $U \cap W = \{0\}$ and let $u + w = u' + w'$ with $u, u' \in U$ and $w, w' \in W$. Then $u - u' = w' - w$; the left-hand side lies in $U$, the right-hand side in $W$, so both lie in $U \cap W = \{0\}$, therefore $u = u'$ and $w = w'$. Conversely, if the decomposition is unique and $v \in U \cap W$, the expressions $v = v + 0$ and $v = 0 + v$ are two decompositions of $v$, so they coincide and $v = 0$.
:::
::::

:::osservazione{#criterio-dei-supplementari titolo="Criterion for complementary subspaces"}
Let $\dim V = n$. Then $V = U \oplus W$ if and only if the conditions
$$
\begin{cases}
U \cap W = \{0\} \\[4pt]
\dim U + \dim W = n
\end{cases}
$$
are satisfied together, and this is equivalent to saying that the union of a basis of $U$ and a basis of $W$ is a basis of $V$. Indeed, by Grassmann's formula the two conditions give $\dim (U + W) = n$, and by the theorem on the dimension of a subspace $U + W = V$. In $\mathbb{R}^3$ the plane $U : x + y + z = 0$ and the line $W = \langle (1, 1, 1) \rangle$ are **complementary**, since $(1, 1, 1)$ does not satisfy the equation of $U$ and $2 + 1 = 3$. The complement is *not* unique: $\langle (1, 0, 0) \rangle$ is also a complement of $U$.
:::

:::esempio{titolo="Symmetric and skew-symmetric matrices"}
In $M_n(\mathbb{R})$ let $S$ be the subspace of symmetric matrices ($A^T = A$) and $K$ that of skew-symmetric matrices ($A^T = -A$). Every matrix decomposes as
$$
A = \frac{A + A^T}{2} + \frac{A - A^T}{2} ,
$$
with the first summand in $S$ and the second in $K$, so $S + K = M_n(\mathbb{R})$. If $A \in S \cap K$, then $A = A^T = -A$, so $A = 0$. Therefore $M_n(\mathbb{R}) = S \oplus K$; for $n = 2$ the dimensions are $\dim S = 3$ and $\dim K = 1$, with sum $4 = \dim M_2(\mathbb{R})$.
:::
