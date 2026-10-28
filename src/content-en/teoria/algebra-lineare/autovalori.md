---
titolo: Eigenvalues, eigenvectors and diagonalization
sommario: How to compute the eigenvalues and eigenspaces of a matrix or of an endomorphism, when a matrix is diagonalizable and how to build the diagonalizing matrix, with applications to powers and to matrices with a parameter.
---

## Eigenvalues and eigenvectors

:::definizione{#autovalore-autovettore titolo="Eigenvalue and eigenvector of an endomorphism"}
Let $V$ be a real vector space and let $f : V \to V$ be a linear map, called an **endomorphism** of $V$. A number $\lambda \in \mathbb{R}$ is an **eigenvalue** of $f$ if there exists a vector $v \in V$ that satisfies the two conditions *together*
$$
\begin{cases}
v \neq 0 \\[4pt]
f(v) = \lambda v
\end{cases}
$$
and every vector $v$ with these two properties is called an **eigenvector** of $f$ associated with the eigenvalue $\lambda$. An eigenvector is therefore a nonzero vector that $f$ maps to a multiple of itself, so the line $\langle v \rangle$ is mapped into itself. The condition $v \neq 0$ is necessary in the definition, since $f(0) = 0 = \lambda \cdot 0$ for *every* $\lambda$; the eigenvalue, on the other hand, can be $0$, and this happens exactly when $\ker f$ contains nonzero vectors.
:::

:::definizione{#autovalori-di-una-matrice titolo="Eigenvalue and eigenvector of a matrix"}
Let $A \in M_n(\mathbb{R})$. A number $\lambda \in \mathbb{R}$ is an eigenvalue of $A$ if there exists a column vector $v \in \mathbb{R}^n$, with $v \neq 0$, such that $Av = \lambda v$, and $v$ is called an eigenvector of $A$ associated with $\lambda$. This is the previous definition applied to the endomorphism $v \mapsto Av$ of $\mathbb{R}^n$. To check that a given vector is an eigenvector, one computes $Av$ and checks that it is a multiple of $v$; the proportionality coefficient is the eigenvalue.
:::

:::esempio
Let
$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}, \qquad v = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \qquad w = \begin{pmatrix} 1 \\ 0 \end{pmatrix} .
$$
Since $Av = (5, 5) = 5v$, the vector $v$ is an **eigenvector** of $A$ associated with the eigenvalue $5$. On the other hand, $Aw = (4, 2)$ is *not* a multiple of $w$, because the second component of $w$ is zero and that of $Aw$ is not, therefore $w$ is not an eigenvector.

::grafico{vettori="0,0,5,5;0,0,1,1;0,0,1,0,w;0,0,4,2" etichette="1.9,2.6,Av;0.3,0.6,v;2.6,0.8,Aw" segmenti="-0.6,-0.6,5.8,5.8" xmin=-0.8 xmax=6 ymin=-0.8 ymax=6 uguale=1 titolo="$Av = 5v$ stays on the line of $v$ (dashed): the direction of $v$ is invariant; $Aw = (4, 2)$ leaves the line of $w$, the $x$-axis"}

:::

## The characteristic polynomial

:::definizione{#polinomio-caratteristico titolo="Characteristic polynomial"}
Let $A \in M_n(\mathbb{R})$. The **characteristic polynomial** of $A$ is
$$
p_A(\lambda) = \det(A - \lambda I_n) ,
$$
a polynomial of degree $n$ in the variable $\lambda$, with leading coefficient $(-1)^n$. It is obtained by subtracting $\lambda$ from every entry of the main diagonal and computing the determinant with the rules of the topic on determinants. For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ one gets $p_A(\lambda) = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10$.
:::

::::teorema{#autovalori-e-polinomio-caratteristico titolo="Eigenvalues as roots of the characteristic polynomial"}
Let $A \in M_n(\mathbb{R})$ and let $\lambda_0 \in \mathbb{R}$. Then $\lambda_0$ is an eigenvalue of $A$ *if and only if*
$$
p_A(\lambda_0) = \det(A - \lambda_0 I_n) = 0 .
$$
The theorem reduces the search for eigenvalues to solving a **polynomial equation** of degree $n$. For the matrix of the previous example $\lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$, therefore the eigenvalues are $2$ and $5$. A matrix of order $n$ has *at most* $n$ distinct eigenvalues, because a polynomial of degree $n$ has at most $n$ roots.

:::dimostrazione
The equality $Av = \lambda_0 v$ is equivalent to $Av - \lambda_0 I_n v = 0$, that is, to $(A - \lambda_0 I_n)v = 0$. Therefore $\lambda_0$ is an eigenvalue if and only if the homogeneous linear system $(A - \lambda_0 I_n)v = 0$ has a solution $v \neq 0$. Since the coefficient matrix is square, by the criterion recalled below this happens if and only if $\det(A - \lambda_0 I_n) = 0$.
:::
::::

:::richiamo{titolo="Square homogeneous systems"}
If $M \in M_n(\mathbb{R})$, the system $Mx = 0$ has nonzero solutions if and only if $\det M = 0$.
:::

:::osservazione{#autovalori-di-matrici-triangolari titolo="Triangular matrices and expansion along a row"}
If $A$ is triangular, in particular diagonal, then $A - \lambda I_n$ is also triangular, and its determinant is the product of the diagonal entries:
$$
p_A(\lambda) = (a_{11} - \lambda)(a_{22} - \lambda) \cdots (a_{nn} - \lambda) .
$$
The eigenvalues of a **triangular matrix** are therefore its diagonal entries, each counted as many times as it appears. For $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ the only eigenvalue is $2$, with $p_A(\lambda) = (2 - \lambda)^2$. When the matrix is not triangular but has a row or a column in which all the off-diagonal entries are zero, it is convenient to compute $\det(A - \lambda I_n)$ by **Laplace expansion** along that row or column, since the polynomial is then obtained already partly factored.
:::

:::teorema{#traccia-e-determinante titolo="Trace, determinant and eigenvalues"}
Let $A \in M_n(\mathbb{R})$. The constant term of $p_A$ is $p_A(0) = \det A$ and the coefficient of $\lambda^{n-1}$ is $(-1)^{n-1} \operatorname{tr} A$. For $n = 2$ one therefore has
$$
p_A(\lambda) = \lambda^2 - (\operatorname{tr} A)\, \lambda + \det A .
$$
If $p_A$ has $n$ real roots $\lambda_1, \dots, \lambda_n$, counted with their multiplicity, then
$$
\begin{aligned}
\operatorname{tr} A &= \lambda_1 + \lambda_2 + \dots + \lambda_n \\[4pt]
\det A &= \lambda_1 \lambda_2 \cdots \lambda_n .
\end{aligned}
$$
The first statement follows by setting $\lambda = 0$ and observing that in the expansion of $\det(A - \lambda I_n)$ the powers $\lambda^n$ and $\lambda^{n-1}$ come only from the product of the diagonal entries; the second follows by comparing the coefficients with $p_A(\lambda) = (\lambda_1 - \lambda) \cdots (\lambda_n - \lambda)$. The two equalities serve as a **check on the computations**: for $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ one has $\operatorname{tr} A = 7 = 2 + 5$ and $\det A = 10 = 2 \cdot 5$. Since $\det A = p_A(0)$, the matrix $A$ is invertible if and only if $0$ is *not* an eigenvalue of $A$.
:::

## Similar matrices and endomorphisms

::::teorema{#invarianza-per-similitudine titolo="Similar matrices have the same characteristic polynomial"}
Let $A, B \in M_n(\mathbb{R})$ be similar, that is, such that $B = P^{-1} A P$ for an invertible matrix $P \in M_n(\mathbb{R})$. Then
$$
p_B(\lambda) = p_A(\lambda) ,
$$
therefore $A$ and $B$ have the **same eigenvalues**, with the same multiplicity as roots, the same trace and the same determinant. The theorem makes it possible to define the characteristic polynomial of an endomorphism and provides a quick way to rule out that two matrices are similar: if the trace, the determinant or the eigenvalues differ, the matrices are not similar.

:::dimostrazione
Since $P^{-1} I_n P = I_n$, one has $B - \lambda I_n = P^{-1} A P - \lambda P^{-1} I_n P = P^{-1}(A - \lambda I_n) P$. By **Binet's theorem**
$$
\det(B - \lambda I_n) = \det(P^{-1}) \det(A - \lambda I_n) \det P = \det(A - \lambda I_n) ,
$$
since $\det(P^{-1}) \det P = \det(P^{-1} P) = \det I_n = 1$.
:::
::::

:::richiamo{titolo="Binet's theorem"}
If $A, B \in M_n(\mathbb{R})$, then $\det(AB) = \det A \cdot \det B$.
:::

:::attenzione
The converse of the theorem is false: two matrices with the same characteristic polynomial may *not* be similar. The matrices $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ and $2I_2$ both have characteristic polynomial $(2 - \lambda)^2$; however $P^{-1}(2I_2)P = 2I_2$ for every invertible $P$, therefore the only matrix similar to $2I_2$ is $2I_2$ itself, and $A$ **is not similar** to $2I_2$.
:::

:::osservazione{#autovalori-di-un-endomorfismo titolo="Eigenvalues of an endomorphism via the associated matrix"}
Let $f : V \to V$ be an endomorphism of a space of dimension $n$, let $\mathcal{B}$ be a basis of $V$ and let $A = M^{\mathcal{B}}_{\mathcal{B}}(f)$. Since the associated matrix maps the coordinates of $v$ to the coordinates of $f(v)$, the equality $f(v) = \lambda v$ is equivalent to the equality $AX = \lambda X$ between the coordinate vectors. Therefore the eigenvalues of $f$ are the **eigenvalues of the associated matrix** $A$, and the eigenvectors of $f$ are the vectors whose coordinates are eigenvectors of $A$. Changing the basis gives a matrix similar to $A$, as seen in the topic on linear maps, so the characteristic polynomial $p_f = p_A$ does *not* depend on the chosen basis. In spaces of polynomials or of matrices one chooses the most convenient basis, for example $\{1, x, x^2\}$ in $\mathbb{R}_2[x]$.
:::

:::esempio{titolo="The reflection across the bisector"}
The endomorphism $f(x, y) = (y, x)$ of $\mathbb{R}^2$ has matrix $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ with respect to the standard basis and $p_A(\lambda) = \lambda^2 - 1$, therefore the eigenvalues are $1$ and $-1$. One has $f(1, 1) = (1, 1)$ and $f(1, -1) = (-1, 1) = -(1, -1)$, so the vectors of the bisector $y = x$ stay fixed and those of the line $y = -x$ reverse direction. In agreement with the geometry, $f$ is the **reflection** across the line $y = x$.

::grafico{vettori="0,0,1.5,1.5;0,0,1.5,-1.5,w;0,0,-1.5,1.5,f(w)" etichette="0.55,0.35,u = f(u)" segmenti="-2.4,-2.4,2.4,2.4;-2.4,2.4,2.4,-2.4" xmin=-2.5 xmax=2.5 ymin=-2.2 ymax=2.2 uguale=1 titolo="The reflection across $y = x$: the vectors of the bisector stay fixed (eigenvalue $1$), those of the line $y = -x$ reverse direction (eigenvalue $-1$)"}

:::

## Eigenspaces

:::definizione{#autospazio titolo="Eigenspace"}
Let $A \in M_n(\mathbb{R})$ and let $\lambda$ be an eigenvalue of $A$. The **eigenspace** associated with $\lambda$ is
$$
V_\lambda = \{ v \in \mathbb{R}^n : Av = \lambda v \} = \ker(A - \lambda I_n) .
$$
It is a subspace of $\mathbb{R}^n$, because it is the kernel of a matrix, and it contains all the eigenvectors associated with $\lambda$ together with the zero vector. Since $\lambda$ is an eigenvalue, $V_\lambda$ contains a nonzero vector, therefore $\dim V_\lambda \geq 1$. For an endomorphism $f$ the definition is the same, with $V_\lambda = \ker(f - \lambda \operatorname{id}_V)$.
:::

:::osservazione{#calcolo-degli-autospazi titolo="Computing an eigenspace"}
The eigenspace $V_\lambda$ is the solution set of the homogeneous system $(A - \lambda I_n)v = 0$. By the **Rouché-Capelli theorem** the system has $n - \operatorname{rk}(A - \lambda I_n)$ free parameters, therefore
$$
\dim V_\lambda = n - \operatorname{rk}(A - \lambda I_n) .
$$
In computations one writes $A - \lambda I_n$ with the numerical value of $\lambda$, computes its rank, solves the system and writes a basis of $V_\lambda$. Since $\det(A - \lambda I_n) = 0$, the rank is *always* less than $n$; if row reduction gives rank $n$, the value of $\lambda$ used **is not an eigenvalue** and there is an error in the previous computation.
:::

:::esempio{titolo="Eigenspaces of a matrix of order 2"}
For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, with eigenvalues $2$ and $5$, one has
$$
A - 2I_2 = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix},
\qquad
A - 5I_2 = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} .
$$
Both matrices have rank $1$, therefore both eigenspaces have dimension $1$. The first system reduces to the equation $2x + y = 0$, the second to the equation $x = y$, so
$$
V_2 = \langle (1, -2) \rangle, \qquad V_5 = \langle (1, 1) \rangle .
$$
The two eigenspaces are **lines through the origin**, and on each of them $A$ acts as multiplication by the corresponding scalar.

::grafico{f="x;-2*x" vettori="0,0,1,1,u;0,0,1,-2,w" etichette="1.85,1.3,V₅ : y = x;-2.5,2.2,V₂ : y = −2x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="The eigenspaces $V_5$ and $V_2$ of $A$ are two lines through the origin, spanned by $u = (1, 1)$ and by $w = (1, -2)$"}

:::

## Algebraic and geometric multiplicity

:::definizione{#molteplicita titolo="Algebraic and geometric multiplicity"}
Let $\lambda_0$ be an eigenvalue of $A \in M_n(\mathbb{R})$.

- The **algebraic multiplicity** $m_a(\lambda_0)$ is the multiplicity of $\lambda_0$ as a root of $p_A$, that is, the largest integer $m$ such that $(\lambda - \lambda_0)^m$ divides $p_A(\lambda)$.
- The **geometric multiplicity** $m_g(\lambda_0)$ is the dimension of the eigenspace, $m_g(\lambda_0) = \dim V_{\lambda_0} = n - \operatorname{rk}(A - \lambda_0 I_n)$.

The first is read off the factorization of the characteristic polynomial, the second requires the computation of a rank. Diagonalizability depends on the comparison between the two, as stated by the diagonalizability criterion.
:::

::::teorema{#relazione-tra-molteplicita titolo="Relation between the multiplicities"}
Let $\lambda_0$ be an eigenvalue of $A \in M_n(\mathbb{R})$. Then
$$
1 \leq m_g(\lambda_0) \leq m_a(\lambda_0) .
$$
In particular, if $m_a(\lambda_0) = 1$ then $m_g(\lambda_0) = 1$ with no need for computations, so the rank of $A - \lambda_0 I_n$ needs to be computed *only* for multiple eigenvalues.

:::dimostrazione
Let $g = m_g(\lambda_0)$. One has $g \geq 1$ because $V_{\lambda_0}$ contains a nonzero vector. Let $v_1, \dots, v_g$ be a basis of $V_{\lambda_0}$; by the **basis extension theorem** there exist $v_{g+1}, \dots, v_n$ such that $v_1, \dots, v_n$ is a basis of $\mathbb{R}^n$. The matrix $P$ that has these vectors as columns is invertible and satisfies $Pe_j = v_j$, where $e_j$ is the $j$-th vector of the standard basis, therefore $P^{-1} v_j = e_j$. For $j \leq g$ the $j$-th column of $P^{-1}AP$ is
$$
P^{-1} A v_j = P^{-1}(\lambda_0 v_j) = \lambda_0 e_j ,
$$
so
$$
P^{-1} A P = \begin{pmatrix} \lambda_0 I_g & B \\ 0 & C \end{pmatrix}
$$
with $C \in M_{n-g}(\mathbb{R})$. Expanding $\det(P^{-1}AP - \lambda I_n)$ by Laplace along the first column, and repeating the expansion $g$ times, one obtains $(\lambda_0 - \lambda)^g \det(C - \lambda I_{n-g})$. Since $A$ and $P^{-1}AP$ are similar, they have the same characteristic polynomial, therefore $p_A(\lambda) = (\lambda_0 - \lambda)^g\, p_C(\lambda)$. It follows that $(\lambda - \lambda_0)^g$ divides $p_A$, that is, $m_a(\lambda_0) \geq g$.
:::
::::

:::richiamo{titolo="Basis extension theorem"}
If $v_1, \dots, v_g$ are linearly independent vectors of a space $V$ of dimension $n$, there exist $v_{g+1}, \dots, v_n \in V$ such that $v_1, \dots, v_n$ is a basis of $V$.
:::

:::esempio{titolo="Different multiplicities"}
For $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ one has $p_A(\lambda) = (2 - \lambda)^2$, therefore $m_a(2) = 2$. The matrix $A - 2I_2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ has rank $1$, therefore $m_g(2) = 2 - 1 = 1$ and $V_2 = \langle (1, 0) \rangle$. The inequality $m_g \leq m_a$ can thus be **strict**. Geometrically, $A$ maps $e_1 = (1, 0)$ to $(2, 0)$ and $e_2 = (0, 1)$ to $(1, 2)$: the $x$-axis is the *only* line through the origin mapped into itself.

::grafico{vettori="0,0,2,0,Ae₁;0,0,1,2,Ae₂;0,0,0,1,e₂" segmenti="-0.6,0,2.8,0" xmin=-0.8 xmax=3 ymin=-0.6 ymax=2.6 uguale=1 titolo="The matrix $A$ doubles the vectors of the $x$-axis (eigenspace $V_2$) and maps $e_2$ to $(1, 2)$, off its line"}

:::

## Independence of eigenvectors

::::teorema{#autovettori-indipendenti titolo="Eigenvectors associated with distinct eigenvalues"}
Let $A \in M_n(\mathbb{R})$ and let $v_1, \dots, v_k$ be eigenvectors of $A$ associated with pairwise distinct eigenvalues $\lambda_1, \dots, \lambda_k$. Then $v_1, \dots, v_k$ are **linearly independent**. The theorem guarantees that eigenvectors chosen from different eigenspaces do not produce linear dependencies, and it is the starting point of the diagonalizability criterion.

:::dimostrazione
We proceed by induction on $k$. For $k = 1$ the statement holds because $v_1 \neq 0$. Assume the statement true for $k - 1$ eigenvectors and let
$$
c_1 v_1 + c_2 v_2 + \dots + c_k v_k = 0 . \qquad (1)
$$
Multiplying (1) on the left by $A$ and using $Av_i = \lambda_i v_i$ one obtains $c_1 \lambda_1 v_1 + \dots + c_k \lambda_k v_k = 0$; subtracting from this equality (1) multiplied by $\lambda_k$ one obtains
$$
c_1 (\lambda_1 - \lambda_k) v_1 + \dots + c_{k-1} (\lambda_{k-1} - \lambda_k) v_{k-1} = 0 .
$$
By the induction hypothesis $v_1, \dots, v_{k-1}$ are independent, therefore $c_i (\lambda_i - \lambda_k) = 0$ for $i = 1, \dots, k-1$. Since the eigenvalues are distinct, $\lambda_i - \lambda_k \neq 0$, so $c_i = 0$ for $i < k$. Equation (1) becomes $c_k v_k = 0$, and since $v_k \neq 0$ also $c_k = 0$.
:::
::::

:::osservazione{#unione-di-basi-di-autospazi titolo="Union of bases of eigenspaces"}
Let $\lambda_1, \dots, \lambda_r$ be the distinct eigenvalues of $A$ and choose a basis of each eigenspace $V_{\lambda_i}$. Then the **union of these bases** is a set of linearly independent vectors. Indeed, in a vanishing linear combination of all these vectors one groups the terms associated with each eigenvalue into a vector $w_i \in V_{\lambda_i}$, and obtains $w_1 + \dots + w_r = 0$. If some $w_i$ were nonzero, the nonzero $w_i$ would be eigenvectors associated with distinct eigenvalues with zero sum, contradicting the previous theorem; therefore every $w_i$ is zero, and since $w_i$ is a linear combination of a basis of $V_{\lambda_i}$, all the coefficients are zero. In particular the sum of the eigenspaces is direct and has dimension $m_g(\lambda_1) + \dots + m_g(\lambda_r)$.
:::

## Diagonalizability

:::definizione{#matrice-diagonalizzabile titolo="Diagonalizable matrix and endomorphism"}
A matrix $A \in M_n(\mathbb{R})$ is **diagonalizable** if it is similar to a diagonal matrix, that is, if there exist an invertible $P \in M_n(\mathbb{R})$ and a diagonal $D$ such that
$$
P^{-1} A P = D .
$$
The matrix $P$ is called a **diagonalizing matrix**. An endomorphism $f : V \to V$ is diagonalizable if there exists a basis of $V$ with respect to which the matrix associated with $f$ is diagonal. A diagonal matrix describes an endomorphism that stretches, shrinks or flips each coordinate axis without mixing the coordinates; diagonalizing means finding axes with this property.
:::

::::teorema{#base-di-autovettori titolo="Diagonalizability and bases of eigenvectors"}
Let $A \in M_n(\mathbb{R})$. Then $A$ is diagonalizable if and only if there exists a **basis of eigenvectors** of $A$ in $\mathbb{R}^n$. In that case, if $v_1, \dots, v_n$ is such a basis with $Av_j = \lambda_j v_j$, the matrix $P$ with columns $v_1, \dots, v_n$ satisfies
$$
P^{-1} A P = D = \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix} .
$$
The theorem says how $P$ and $D$ are built: the columns of $P$ are eigenvectors and the diagonal entries of $D$ are the corresponding eigenvalues, in the same order.

:::dimostrazione
Let $P$ be an invertible matrix with columns $v_1, \dots, v_n$ and let $D$ be diagonal with diagonal entries $d_1, \dots, d_n$. The equality $P^{-1}AP = D$ is equivalent to $AP = PD$. The $j$-th column of $AP$ is $Av_j$ and the $j$-th column of $PD$ is $d_j v_j$, therefore $AP = PD$ if and only if $Av_j = d_j v_j$ for every $j$. The columns of an invertible matrix are nonzero and form a basis of $\mathbb{R}^n$; so $A$ is diagonalizable if and only if there exists a basis $v_1, \dots, v_n$ with $Av_j = d_j v_j$, that is, a basis of eigenvectors.
:::
::::

::::teorema{#criterio-di-diagonalizzabilita titolo="Diagonalizability criterion"}
Let $A \in M_n(\mathbb{R})$. Then $A$ is diagonalizable if and only if both conditions are satisfied
$$
\begin{cases}
p_A \text{ has } n \text{ real roots, counted with their multiplicity} \\[4pt]
m_g(\lambda) = m_a(\lambda) \text{ for every eigenvalue } \lambda
\end{cases}
$$
The criterion is applied in two steps. One factors the characteristic polynomial, and if there are non-real roots the matrix **is not diagonalizable**; then, for each eigenvalue with $m_a \geq 2$, one computes the rank of $A - \lambda I_n$. Simple eigenvalues require no checks, because for them $m_g = m_a = 1$.

:::dimostrazione
Assume $P^{-1}AP = D$ with $D$ diagonal with entries $d_1, \dots, d_n$. The matrices $A$ and $D$ are similar, therefore $p_A(\lambda) = p_D(\lambda) = (d_1 - \lambda) \cdots (d_n - \lambda)$, which has $n$ real roots. For an eigenvalue $\lambda_0$, the multiplicity $m_a(\lambda_0)$ is the number of indices $j$ with $d_j = \lambda_0$; the columns of $P$ with these indices are eigenvectors associated with $\lambda_0$ and are independent, because they are columns of an invertible matrix. Therefore $m_g(\lambda_0) \geq m_a(\lambda_0)$, and equality follows from the relation between the multiplicities.

Conversely, let $\lambda_1, \dots, \lambda_r$ be the distinct eigenvalues. Since $p_A$ has $n$ real roots, $m_a(\lambda_1) + \dots + m_a(\lambda_r) = n$, therefore by the second condition also $m_g(\lambda_1) + \dots + m_g(\lambda_r) = n$. By the remark on the union of bases of eigenspaces, the union of the bases of the eigenspaces consists of $n$ linearly independent vectors, so it is a basis of $\mathbb{R}^n$ made of eigenvectors, and $A$ is diagonalizable by the previous theorem.
:::
::::

:::teorema{#autovalori-distinti titolo="Distinct real eigenvalues"}
Let $A \in M_n(\mathbb{R})$ have $n$ pairwise distinct real eigenvalues. Then $A$ is **diagonalizable**. Indeed, every eigenvalue has $m_a = 1$, therefore $m_g = 1$, and both conditions of the criterion are satisfied. The condition is *sufficient* and not *necessary*: the matrix $I_n$ is diagonal and has the single eigenvalue $1$.
:::

:::attenzione
A real matrix with non-real eigenvalues is not diagonalizable over $\mathbb{R}$. For $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, which describes the rotation by a right angle, one has $p_A(\lambda) = \lambda^2 + 1$, with no real roots: no line through the origin is mapped into itself, therefore **there are no eigenvectors** in $\mathbb{R}^2$.

::grafico{vettori="0,0,2,1,v;0,0,-1,2,Av" segmenti="-2.6,-1.3,2.6,1.3" xmin=-2.6 xmax=2.6 ymin=-1.6 ymax=2.6 uguale=1 titolo="The rotation by a right angle maps $v = (2, 1)$ to $Av = (-1, 2)$, orthogonal to the line of $v$ (dashed); the same happens for every nonzero vector"}

:::

:::osservazione{#matrici-simmetriche-diagonalizzabili titolo="Symmetric matrices"}
Every real **symmetric matrix** is diagonalizable, and the diagonalizing matrix can be chosen with orthonormal columns. This result is the spectral theorem, for which we refer to the topic on the scalar product and the spectral theorem; in exercises it makes it possible to assert the diagonalizability of a symmetric matrix without computing ranks.
:::

## The diagonalizing matrix and powers

:::osservazione{#procedura-di-diagonalizzazione titolo="Diagonalization procedure"}
To determine whether $A \in M_n(\mathbb{R})$ is diagonalizable and, if so, to find $P$ and $D$, one proceeds in three steps.

- Compute and factor $p_A(\lambda)$; if it has non-real roots, $A$ is not diagonalizable.
- For each eigenvalue $\lambda$ with $m_a(\lambda) \geq 2$ compute $m_g(\lambda) = n - \operatorname{rk}(A - \lambda I_n)$; if $m_g < m_a$ for some eigenvalue, the matrix $A$ is not diagonalizable.
- If all checks are passed, find a basis of each eigenspace, arrange the vectors as columns of $P$ and write the corresponding eigenvalues on the diagonal of $D$, in the same order.

The matrix $P$ is *not* unique: each eigenvector can be multiplied by a nonzero scalar and the order of the columns can be changed, provided $D$ is reordered in the same way. As a check it is convenient to verify the equality $AP = PD$, which avoids computing $P^{-1}$.
:::

:::esempio{titolo="A matrix of order 3 with a double eigenvalue"}
Let
$$
A = \begin{pmatrix} 3 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} .
$$
The matrix is triangular, therefore $p_A(\lambda) = (3 - \lambda)(2 - \lambda)^2$, with $m_a(3) = 1$ and $m_a(2) = 2$. For the double eigenvalue the matrix
$$
A - 2I_3 = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$
has rank $1$, therefore $m_g(2) = 3 - 1 = 2 = m_a(2)$ and $A$ is **diagonalizable**. The eigenspace $V_2$ is the plane $x + y + z = 0$, with basis $(1, -1, 0)$, $(1, 0, -1)$. For $\lambda = 3$ the system $(A - 3I_3)v = 0$ gives $y = 0$ and $z = 0$, therefore $V_3 = \langle (1, 0, 0) \rangle$. It follows that
$$
P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix},
\qquad
D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} .
$$
:::

:::teorema{#potenze-di-matrici-diagonalizzabili titolo="Powers of a diagonalizable matrix"}
Let $A \in M_n(\mathbb{R})$ be diagonalizable, with $P^{-1}AP = D$ and $D$ diagonal with entries $\lambda_1, \dots, \lambda_n$. Then for every integer $k \geq 1$
$$
A^k = P D^k P^{-1},
\qquad
D^k = \begin{pmatrix} \lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k \end{pmatrix} .
$$
Indeed $A = PDP^{-1}$, and in the product $A^k = (PDP^{-1})(PDP^{-1}) \cdots (PDP^{-1})$ every inner factor $P^{-1}P$ equals $I_n$, therefore $PD^kP^{-1}$ remains; the power of a diagonal matrix is computed by raising the diagonal entries to that power. The computation of $A^k$ for a generic $k$, which with row-by-column products would require $k - 1$ multiplications, is thus reduced to **two matrix products**.
:::

:::esempio{titolo="Power of a matrix of order 2"}
For $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ the eigenspaces are $V_2 = \langle (1, -2) \rangle$ and $V_5 = \langle (1, 1) \rangle$, therefore
$$
P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix},
\qquad
P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix},
\qquad
D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix} .
$$
The product $P D^k P^{-1}$ gives
$$
A^k = \frac{1}{3} \begin{pmatrix} 2^k + 2 \cdot 5^k & 5^k - 2^k \\ 2 \cdot 5^k - 2^{k+1} & 2^{k+1} + 5^k \end{pmatrix} .
$$
For $k = 1$ one recovers $A$, and this confirms the computation.
:::

## Matrices with a parameter

:::osservazione{#matrici-con-parametro titolo="Diagonalizability as a parameter varies"}
When $A$ depends on a real parameter $k$, diagonalizability is discussed by following the **diagonalizability criterion** and distinguishing cases.

- Compute $p_A(\lambda)$, trying to factor it with $k$ treated as a constant; often a Laplace expansion along a row with many zeros immediately isolates a factor.
- Identify the values of $k$ for which some roots are not real, and for these the matrix is not diagonalizable, and those for which two eigenvalues coincide.
- For the values of $k$ with real and distinct eigenvalues the matrix is diagonalizable.
- For each value of $k$ with a multiple eigenvalue, substitute $k$ into the matrix and compute $m_g$ via the rank.

Even when the eigenvalues do not depend on $k$, the rank of $A - \lambda I_n$ may depend on $k$, and then the discussion concerns *only* the computation of $m_g$.
:::

:::esempio{titolo="A parameter off the diagonal"}
Let
$$
A = \begin{pmatrix} 2 & 0 & k \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}, \qquad k \in \mathbb{R} .
$$
The matrix is triangular, therefore for every $k$ the eigenvalues are $1$, simple, and $2$, with $m_a(2) = 2$. One has
$$
A - 2I_3 = \begin{pmatrix} 0 & 0 & k \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix} .
$$
If $k \neq 0$ the first two rows are independent, therefore the rank is $2$, $m_g(2) = 1 < 2$ and $A$ is not diagonalizable. If $k = 0$ the rank is $1$, therefore $m_g(2) = 2$ and $A$, which in this case is already diagonal, is diagonalizable. In conclusion, $A$ is **diagonalizable if and only if** $k = 0$.
:::
