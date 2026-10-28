---
titolo: Matrices and matrix operations
sommario: Matrices and their types, sum, row-by-column product, transpose and powers, the inverse matrix, row echelon reduction and the computation of the inverse with the Gauss-Jordan method.
---

## Matrices and notation

:::definizione{#matrice titolo="Matrix"}
Let $m, n$ be positive integers. An $m \times n$ **matrix** with real entries is an array of $mn$ real numbers arranged in $m$ rows and $n$ columns:
$$
A =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix} .
$$
The number $a_{ij}$ is the **entry in position** $(i, j)$; the first index indicates the row and the second the column. One writes briefly $A = (a_{ij})$, and the set of $m \times n$ matrices is denoted by $M_{m,n}(\mathbb{R})$. Two matrices are equal if they have the same dimensions and the entries in the same position coincide, so an equality between $m \times n$ matrices is equivalent to $mn$ equalities between numbers. Matrices collect into a single object the coefficients of a linear system, of a linear map or of a quadratic form, and the operations between matrices translate the operations on these objects.
:::

:::esempio
The matrix
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
-1 & 3 & 4
\end{pmatrix}
\in M_{2,3}(\mathbb{R})
$$
has two rows and three columns; its entry in position $(2, 3)$ is $a_{23} = 4$, while $a_{12} = 2$ and $a_{21} = -1$. The second row is the $1 \times 3$ matrix given by $(-1 \ \ 3 \ \ 4)$.
:::

:::definizione{#matrice-quadrata titolo="Square matrices, row vectors and column vectors"}
- A matrix with $m = n$ is called **square** of order $n$; the set of square matrices of order $n$ is denoted by $M_n(\mathbb{R})$.
- In a square matrix the entries $a_{11}, a_{22}, \dots, a_{nn}$ form the **main diagonal**. Their sum is the **trace**, $\operatorname{tr} A = a_{11} + a_{22} + \dots + a_{nn}$.
- A $1 \times n$ matrix is a row vector; an $m \times 1$ matrix is a column vector. In matrix computations the vectors of $\mathbb{R}^n$ are written as columns.
- The zero matrix $O$ has all entries equal to $0$.

For $A = \begin{pmatrix} 2 & 5 \\ -1 & 3 \end{pmatrix}$ the main diagonal consists of $2$ and $3$, therefore $\operatorname{tr} A = 5$.
:::

## Special square matrices

:::definizione{#matrici-diagonali-e-triangolari titolo="Diagonal, triangular and identity matrices"}
Let $A = (a_{ij}) \in M_n(\mathbb{R})$.

- $A$ is **upper triangular** if $a_{ij} = 0$ for $i > j$, that is, if the entries below the main diagonal are zero.
- $A$ is lower triangular if $a_{ij} = 0$ for $i < j$, that is, if the entries above the main diagonal are zero.
- $A$ is **diagonal** if $a_{ij} = 0$ for $i \neq j$; one writes $A = \operatorname{diag}(a_{11}, \dots, a_{nn})$.
- The **identity matrix** $I_n$ is the diagonal matrix with all diagonal entries equal to $1$.

A diagonal matrix is both upper and lower triangular. The product of two upper triangular matrices of the same order is upper triangular, and the same holds for diagonal matrices. On these classes computations become simpler: row echelon reduction produces upper triangular matrices, and the powers of a diagonal matrix are computed entry by entry.
:::

:::esempio
$$
T =
\begin{pmatrix}
1 & 4 & -2 \\
0 & 3 & 5 \\
0 & 0 & 2
\end{pmatrix},
\qquad
D =
\begin{pmatrix}
2 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0
\end{pmatrix},
\qquad
I_3 =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix} .
$$
$T$ is upper triangular and $D = \operatorname{diag}(2, -1, 0)$ is diagonal. A zero diagonal entry is allowed, since the definition imposes conditions *only* on the entries off the diagonal.
:::

:::definizione{#matrice-simmetrica titolo="Symmetric and skew-symmetric matrices"}
A matrix $A = (a_{ij}) \in M_n(\mathbb{R})$ is called

- **symmetric** if $a_{ij} = a_{ji}$ for all $i, j$;
- **skew-symmetric** if $a_{ij} = -a_{ji}$ for all $i, j$.

In a symmetric matrix the entries are arranged as mirror images with respect to the main diagonal. In a skew-symmetric matrix, setting $i = j$ gives $a_{ii} = -a_{ii}$, therefore the diagonal entries are zero. Symmetric matrices describe quadratic forms and conics, and the spectral theorem guarantees that they are always diagonalizable; these are covered in the topics on the inner product and on conics.
:::

:::esempio
$$
S =
\begin{pmatrix}
1 & 2 & -3 \\
2 & 0 & 4 \\
-3 & 4 & 5
\end{pmatrix},
\qquad
K =
\begin{pmatrix}
0 & 1 & -2 \\
-1 & 0 & 3 \\
2 & -3 & 0
\end{pmatrix} .
$$
$S$ is symmetric, since $s_{12} = s_{21} = 2$, $s_{13} = s_{31} = -3$ and $s_{23} = s_{32} = 4$. $K$ is skew-symmetric, since it has zero diagonal and the entries in mirror positions are opposite.
:::

## Sum and multiplication by a scalar

:::definizione{#somma-e-prodotto-per-scalare titolo="Sum and multiplication by a scalar"}
Let $A = (a_{ij})$ and $B = (b_{ij})$ be in $M_{m,n}(\mathbb{R})$ and let $k \in \mathbb{R}$. The **sum** and the **multiplication by a scalar** are performed entry by entry:
$$
A + B = (a_{ij} + b_{ij}),
\qquad
kA = (k\, a_{ij}) .
$$
The sum is defined *only* between matrices with the same dimensions. One sets $-A = (-1)A$ and $A - B = A + (-B)$. An expression such as $2A - 3B$ is called a **linear combination** of $A$ and $B$.
:::

:::esempio
With
$$
A =
\begin{pmatrix}
1 & -2 \\
0 & 3
\end{pmatrix},
\qquad
B =
\begin{pmatrix}
4 & 1 \\
2 & -1
\end{pmatrix}
$$
one obtains
$$
A + B =
\begin{pmatrix}
5 & -1 \\
2 & 2
\end{pmatrix},
\qquad
2A - B =
\begin{pmatrix}
2 - 4 & -4 - 1 \\
0 - 2 & 6 + 1
\end{pmatrix}
=
\begin{pmatrix}
-2 & -5 \\
-2 & 7
\end{pmatrix} .
$$
:::

:::teorema{#proprieta-operazioni-lineari titolo="Properties of the sum and of multiplication by a scalar"}
For all $A, B, C \in M_{m,n}(\mathbb{R})$ and all $h, k \in \mathbb{R}$:

- $(A + B) + C = A + (B + C)$ and $A + B = B + A$;
- $A + O = A$ and $A + (-A) = O$;
- $k(A + B) = kA + kB$ and $(h + k)A = hA + kA$;
- $h(kA) = (hk)A$ and $1A = A$.

Each property, written entry by entry, is the corresponding property of real numbers, so it follows from it. These rules make it possible to solve equations such as $2X + A = B$ with the same steps as numerical equations, obtaining $X = \dfrac{1}{2}(B - A)$. They also say that $M_{m,n}(\mathbb{R})$ is a vector space of dimension $mn$, which is covered in the topic on vector spaces.
:::

## Row-by-column product

:::definizione{#prodotto-righe-per-colonne titolo="Row-by-column product"}
Let $A = (a_{ij}) \in M_{m,n}(\mathbb{R})$ and $B = (b_{jk}) \in M_{n,p}(\mathbb{R})$, that is, the number of columns of $A$ equals the number of rows of $B$. The **row-by-column product** $AB$ is the matrix in $M_{m,p}(\mathbb{R})$ with entry in position $(i, k)$
$$
(AB)_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk} = a_{i1} b_{1k} + a_{i2} b_{2k} + \dots + a_{in} b_{nk} .
$$
The entry $(i, k)$ of the product is therefore obtained by multiplying row $i$ of $A$ by column $k$ of $B$, that is, by multiplying the corresponding entries and adding the results. The dimensions follow the pattern $(m \times n) \cdot (n \times p) = m \times p$; if the inner dimensions are different, the product is *not* defined.
:::

:::esempio{titolo="Product of a 2 × 3 matrix by a 3 × 2 matrix"}
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
-1 & 3 & 1
\end{pmatrix},
\qquad
B =
\begin{pmatrix}
2 & 1 \\
0 & -1 \\
3 & 4
\end{pmatrix} .
$$
Since $A$ has three columns and $B$ has three rows, the product $AB$ is defined and is $2 \times 2$:
$$
AB =
\begin{pmatrix}
1 \cdot 2 + 2 \cdot 0 + 0 \cdot 3 & 1 \cdot 1 + 2 \cdot (-1) + 0 \cdot 4 \\
-1 \cdot 2 + 3 \cdot 0 + 1 \cdot 3 & -1 \cdot 1 + 3 \cdot (-1) + 1 \cdot 4
\end{pmatrix}
=
\begin{pmatrix}
2 & -1 \\
1 & 0
\end{pmatrix} .
$$
$BA$ is also defined, since $B$ has two columns and $A$ has two rows, but it is a $3 \times 3$ matrix; therefore $AB$ and $BA$ are different.
:::

:::osservazione{#prodotto-per-colonne titolo="The column-by-column product and linear systems"}
Column $k$ of $AB$ is the product of $A$ by column $k$ of $B$. The product of $A \in M_{m,n}(\mathbb{R})$ by a column vector $x \in \mathbb{R}^n$ is the **linear combination of the columns** $A^1, \dots, A^n$ of $A$ with coefficients the components of $x$:
$$
Ax = x_1 A^1 + x_2 A^2 + \dots + x_n A^n .
$$
This reading explains the definition of the product: a linear system of $m$ equations in $n$ unknowns is written as a single matrix equation $Ax = b$, with $A$ the coefficient matrix and $b$ the column of constant terms. The system
$$
\begin{cases}
2x_1 - x_2 = 3 \\[4pt]
x_1 + 4x_2 = 6
\end{cases}
$$
is equivalent to $\begin{pmatrix} 2 & -1 \\ 1 & 4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$ and asks with which coefficients the columns $(2, 1)$ and $(-1, 4)$ give $(3, 6)$; the solution is $x = (2, 1)$, as the figure shows. The study of systems in this form is found in the topic on linear systems and rank.

::grafico{vettori="0,0,2,1,A¹;0,0,-1,4,A²;0,0,3,6,b" segmenti="2,1,4,2;4,2,3,6" punti="4,2,vuoto" etichette="4.15,1.55,2A¹" xmin=-2 xmax=5.5 ymin=-0.8 ymax=6.8 uguale=1 titolo="The vector $b = (3, 6)$ is the combination $2A^1 + A^2$ of the columns $A^1 = (2, 1)$ and $A^2 = (-1, 4)$, therefore $x = (2, 1)$ solves $Ax = b$"}

:::

::::teorema{#proprieta-del-prodotto titolo="Properties of the row-by-column product"}
Let $A, B, C$ be matrices and $k \in \mathbb{R}$, with dimensions such that the written operations are defined. Then:

- $(AB)C = A(BC)$ (associative property);
- $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$ (distributive properties);
- $(kA)B = k(AB) = A(kB)$;
- $I_m A = A = A I_n$ for every $A \in M_{m,n}(\mathbb{R})$.

The associative property makes it possible to write $ABC$ without ambiguity and to define powers; the identity plays the role of the number $1$. In the distributive properties the side matters: in $A(B + C)$ the matrix $A$ stays on the left in both terms.

:::dimostrazione
Let $A \in M_{m,n}(\mathbb{R})$, $B \in M_{n,p}(\mathbb{R})$, $C \in M_{p,q}(\mathbb{R})$. By the definition of the product, the entry in position $(i, l)$ of $(AB)C$ is
$$
\big( (AB)C \big)_{il}
= \sum_{k=1}^{p} (AB)_{ik}\, c_{kl}
= \sum_{k=1}^{p} \sum_{j=1}^{n} a_{ij}\, b_{jk}\, c_{kl} .
$$
The entry in position $(i, l)$ of $A(BC)$ is
$$
\big( A(BC) \big)_{il}
= \sum_{j=1}^{n} a_{ij}\, (BC)_{jl}
= \sum_{j=1}^{n} \sum_{k=1}^{p} a_{ij}\, b_{jk}\, c_{kl} .
$$
The two double sums have the same terms in a different order, so they coincide; since the two matrices also have the same dimensions $m \times q$, they are equal. The other properties are verified in the same way: for the first distributive property one has $\sum_j a_{ij}(b_{jk} + c_{jk}) = \sum_j a_{ij} b_{jk} + \sum_j a_{ij} c_{jk}$, and for the identity one observes that in the sum $\sum_j a_{ij}\, (I_n)_{jk}$ the only nonzero term is the one with $j = k$, which equals $a_{ik}$.
:::
::::

## Noncommutativity and zero divisors

:::attenzione
The matrix product is **not commutative**. Even when $A$ and $B$ are square of the same order, so that $AB$ and $BA$ are both defined and have the same dimensions, in general $AB \neq BA$:
$$
A =
\begin{pmatrix}
1 & 1 \\
0 & 1
\end{pmatrix},
\quad
B =
\begin{pmatrix}
1 & 0 \\
1 & 1
\end{pmatrix},
\qquad
AB =
\begin{pmatrix}
2 & 1 \\
1 & 1
\end{pmatrix},
\quad
BA =
\begin{pmatrix}
1 & 1 \\
1 & 2
\end{pmatrix} .
$$
:::

:::definizione{#matrici-che-commutano titolo="Commuting matrices"}
Two matrices $A, B \in M_n(\mathbb{R})$ **commute** if $AB = BA$. Every matrix commutes with $I_n$, with the zero matrix and with its own powers; two diagonal matrices of the same order always commute, because their product is the diagonal matrix of the products of the diagonal entries. To find *all* the matrices that commute with a given matrix $A$ one writes $X$ with unknown entries and solves the linear system obtained from the equality $AX = XA$.
:::

:::osservazione{#prodotti-notevoli titolo="Special products of matrices"}
By the distributive property, for all $A, B \in M_n(\mathbb{R})$
$$
(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2 .
$$
The formula $(A + B)^2 = A^2 + 2AB + B^2$ holds if and only if $AB + BA = 2AB$, that is, *if and only if* $A$ and $B$ commute. Similarly $(A + B)(A - B) = A^2 - AB + BA - B^2$, which coincides with $A^2 - B^2$ if and only if $AB = BA$. When $AB = BA$ the **binomial formula** $(A + B)^k = \sum_{j=0}^{k} \binom{k}{j} A^{k-j} B^j$ also holds, with the same proof by induction as in the numerical case.
:::

:::definizione{#divisori-dello-zero titolo="Zero divisors"}
A matrix $A \neq O$ is called a **zero divisor** if there exists a matrix $B \neq O$ such that $AB = O$ or $BA = O$. Among real numbers a product is zero only when one of the factors is zero; among matrices this zero product property does *not* hold:
$$
\begin{pmatrix}
1 & 1 \\
1 & 1
\end{pmatrix}
\begin{pmatrix}
1 & -1 \\
-1 & 1
\end{pmatrix}
=
\begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix},
\qquad
\begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix}^2
=
\begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix} .
$$
In the first product the left factor sends every vector $(t, -t)$ to the zero vector, and the columns of the right factor are of this type, as the figure shows. An invertible square matrix is never a zero divisor, by the sufficient conditions for non-invertibility.

::grafico{f="-x;x" vettori="0,0,1,-1,c₁;0,0,-1,1,c₂" etichette="1.25,-1.75,y = −x;1.3,1.75,y = x" xmin=-2.2 xmax=2.2 ymin=-2.2 ymax=2.2 uguale=1 titolo="The columns $c_1 = (1, -1)$ and $c_2 = (-1, 1)$ of the right factor lie on the line $y = -x$, which the left factor sends to the zero vector; the image of every vector under the left factor lies on the line $y = x$ (dashed)"}

:::

:::attenzione
From $AB = AC$ with $A \neq O$ it does *not* follow that $B = C$. With
$$
A =
\begin{pmatrix}
1 & 1 \\
1 & 1
\end{pmatrix},
\qquad
C =
\begin{pmatrix}
2 & 1 \\
-1 & 0
\end{pmatrix}
$$
one has $AC = A = A I_2$, and yet $C \neq I_2$. Cancellation is allowed when $A$ is invertible: multiplying both sides on the left by $A^{-1}$ gives $B = C$.
:::

## Transpose matrix

:::definizione{#trasposta titolo="Transpose matrix"}
Let $A = (a_{ij}) \in M_{m,n}(\mathbb{R})$. The **transpose** of $A$ is the matrix $A^T \in M_{n,m}(\mathbb{R})$ with entry in position $(i, j)$ equal to $a_{ji}$, that is, the matrix whose columns are the rows of $A$. A square matrix is symmetric if and only if $A^T = A$, and it is skew-symmetric if and only if $A^T = -A$. The transpose is used to write the dot product in matrix form, $u \cdot v = u^T v$ for column vectors $u, v \in \mathbb{R}^n$, and to pass from the rows to the columns of a matrix.
:::

:::esempio
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
-1 & 3 & 1
\end{pmatrix},
\qquad
A^T =
\begin{pmatrix}
1 & -1 \\
2 & 3 \\
0 & 1
\end{pmatrix},
\qquad
A A^T =
\begin{pmatrix}
5 & 5 \\
5 & 11
\end{pmatrix} .
$$
The product $A A^T$ is square and symmetric, in agreement with the properties of the transpose.
:::

::::teorema{#proprieta-della-trasposta titolo="Properties of the transpose"}
Let $A, B$ be matrices and $k \in \mathbb{R}$, with dimensions such that the written operations are defined. Then:

- $(A^T)^T = A$;
- $(A + B)^T = A^T + B^T$ and $(kA)^T = k A^T$;
- $(AB)^T = B^T A^T$.

In the transpose of a product the **order of the factors is reversed**. For every $A \in M_{m,n}(\mathbb{R})$ it follows that $A A^T$ and $A^T A$ are symmetric, since $(A A^T)^T = (A^T)^T A^T = A A^T$; similarly, for every $A \in M_n(\mathbb{R})$ the matrix $A + A^T$ is symmetric and $A - A^T$ is skew-symmetric.

:::dimostrazione
The first properties follow from the definition, since transposing twice brings every entry back to its place and transposing a sum or a multiple acts entry by entry. For the last one let $A \in M_{m,n}(\mathbb{R})$ and $B \in M_{n,p}(\mathbb{R})$; both matrices $(AB)^T$ and $B^T A^T$ are $p \times m$. The entry in position $(k, i)$ of $(AB)^T$ is the entry in position $(i, k)$ of $AB$:
$$
\big( (AB)^T \big)_{ki} = (AB)_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk} .
$$
Since $(B^T)_{kj} = b_{jk}$ and $(A^T)_{ji} = a_{ij}$, the entry in position $(k, i)$ of $B^T A^T$ is
$$
\big( B^T A^T \big)_{ki} = \sum_{j=1}^{n} (B^T)_{kj}\, (A^T)_{ji} = \sum_{j=1}^{n} b_{jk}\, a_{ij} .
$$
The two sums coincide by the commutativity of the product of real numbers, hence $(AB)^T = B^T A^T$.
:::
::::

:::attenzione
The formula $(AB)^T = A^T B^T$ is wrong. With $A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$ and $B = \begin{pmatrix} 3 & 0 \\ 1 & 2 \end{pmatrix}$ one gets
$$
(AB)^T = B^T A^T =
\begin{pmatrix}
5 & -1 \\
4 & -2
\end{pmatrix},
\qquad
A^T B^T =
\begin{pmatrix}
3 & 1 \\
6 & 0
\end{pmatrix} .
$$
:::

## Powers of a matrix

:::definizione{#potenze-di-una-matrice titolo="Powers of a square matrix"}
Let $A \in M_n(\mathbb{R})$. One sets $A^0 = I_n$ and, for every integer $k \geq 1$, $A^k = A^{k-1} A$, that is, $A^k$ is the product of $k$ factors equal to $A$. **Powers** are defined *only* for square matrices, because the product $AA$ requires the number of columns of $A$ to equal the number of rows. By the associative property, $A^h A^k = A^{h+k}$ and $(A^h)^k = A^{hk}$; the rule $(AB)^k = A^k B^k$ instead holds when $A$ and $B$ commute.
:::

:::teorema{#potenze-di-matrici-diagonali titolo="Powers of diagonal and triangular matrices"}
Let $D = \operatorname{diag}(d_1, \dots, d_n)$. Then for every integer $k \geq 0$
$$
D^k = \operatorname{diag}(d_1^{\,k}, \dots, d_n^{\,k}) .
$$
The statement is proved by **induction** on $k$: the product of two diagonal matrices is the diagonal matrix of the products of the corresponding entries, so from $D^{k-1} = \operatorname{diag}(d_1^{\,k-1}, \dots, d_n^{\,k-1})$ it follows that $D^k = D^{k-1} D = \operatorname{diag}(d_1^{\,k}, \dots, d_n^{\,k})$. For example $\operatorname{diag}(2, -1)^5 = \operatorname{diag}(32, -1)$. The powers of an upper triangular matrix remain upper triangular and have on the diagonal the powers of the diagonal entries, while the entries above the diagonal must be computed. This theorem is the basis of the computation of powers by diagonalization, $A^k = P D^k P^{-1}$, which is covered in the topic on eigenvalues.
:::

:::osservazione{#potenze-per-induzione titolo="Powers via a conjectured formula and induction"}
For a matrix that is not diagonal one computes the first powers, conjectures the general form of $A^k$ and proves it **by induction**. For $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ one finds $A^2 = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}$ and $A^3 = \begin{pmatrix} 1 & 6 \\ 0 & 1 \end{pmatrix}$, which leads to the conjecture $A^k = \begin{pmatrix} 1 & 2k \\ 0 & 1 \end{pmatrix}$. It holds for $k = 1$; if it holds for $k$, then
$$
A^{k+1} = A^k A =
\begin{pmatrix}
1 & 2k \\
0 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 2 \\
0 & 1
\end{pmatrix}
=
\begin{pmatrix}
1 & 2k + 2 \\
0 & 1
\end{pmatrix},
$$
so it also holds for $k + 1$. The second column of $A^k$ is $A^k$ applied to the vector $(0, 1)$, and the figure shows how each multiplication by $A$ shifts it by $2$ horizontally.

::grafico{vettori="0,0,0,1;0,0,2,1;0,0,4,1;0,0,6,1" segmenti="-0.5,1,7,1" etichette="0.12,1.35,k = 0;1.8,1.35,k = 1;3.8,1.35,k = 2;5.8,1.35,k = 3" xmin=-1 xmax=7.5 ymin=-0.8 ymax=2 uguale=1 titolo="The second columns $(2k, 1)$ of $A^k$ for $k = 0, 1, 2, 3$ lie on the line $y = 1$, at distance $2$ from one another"}

:::

:::definizione{#matrice-nilpotente titolo="Nilpotent matrix"}
A matrix $N \in M_n(\mathbb{R})$ is called **nilpotent** if there exists an integer $k \geq 1$ such that $N^k = O$; a nonzero nilpotent matrix is therefore a zero divisor. Upper triangular matrices with zero diagonal are nilpotent:
$$
N =
\begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{pmatrix},
\qquad
N^2 =
\begin{pmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix},
\qquad
N^3 = O .
$$
At each power the diagonal of entries equal to $1$ moves one place up and to the right, so after three steps the matrix is zero. Nilpotent matrices are used to compute the powers of matrices of the form $\lambda I_n + N$: since $I_n$ commutes with $N$, the **binomial formula** applies, and the sum terminates because the powers of $N$ are zero from some exponent on.
:::

## Inverse matrix

:::definizione{#matrice-invertibile titolo="Invertible matrix"}
A matrix $A \in M_n(\mathbb{R})$ is called **invertible** if there exists a matrix $B \in M_n(\mathbb{R})$ such that
$$
AB = BA = I_n .
$$
Such a $B$ is called the **inverse** of $A$ and is denoted by $A^{-1}$. The inverse makes it possible to solve matrix equations like numerical ones: if $A$ is invertible, the equation $AX = C$ has the unique solution $X = A^{-1} C$, obtained by multiplying both sides on the left by $A^{-1}$. In particular the linear system $Ax = b$ has the unique solution $x = A^{-1} b$. The definition concerns *only* square matrices.
:::

:::esempio
For $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ one computes
$$
AB =
\begin{pmatrix}
2 - 1 & -2 + 2 \\
1 - 1 & -1 + 2
\end{pmatrix}
= I_2,
\qquad
BA =
\begin{pmatrix}
2 - 1 & 1 - 1 \\
-2 + 2 & -1 + 2
\end{pmatrix}
= I_2,
$$
therefore $A$ is **invertible** and $A^{-1} = B$. Applied to a vector, $A^{-1}$ undoes the effect of $A$, as the figure shows.

::grafico{vettori="0,0,1,1,x;0,0,3,2,Ax" xmin=-0.6 xmax=3.8 ymin=-0.6 ymax=2.8 uguale=1 titolo="$A$ sends $x = (1, 1)$ to $Ax = (3, 2)$, and $A^{-1}$ brings $(3, 2)$ back to $(1, 1)$, since $A^{-1}(Ax) = I_2\, x = x$"}

:::

::::teorema{#unicita-dell-inversa titolo="Uniqueness of the inverse"}
Let $A \in M_n(\mathbb{R})$ and let $B, C \in M_n(\mathbb{R})$ be such that $BA = I_n$ and $AC = I_n$. Then $B = C$. In particular, if $A$ is invertible, its inverse is **unique**, and the notation $A^{-1}$ is justified.

:::dimostrazione
By the associative property of the product and by the properties of the identity,
$$
B = B I_n = B(AC) = (BA)C = I_n C = C .
$$
If $B$ and $C$ are two inverses of $A$, they satisfy in particular $BA = I_n$ and $AC = I_n$, so they coincide.
:::
::::

::::teorema{#proprieta-dell-inversa titolo="Properties of the inverse matrix"}
Let $A, B \in M_n(\mathbb{R})$ be invertible and let $k \in \mathbb{R}$ with $k \neq 0$. Then $A^{-1}$, $AB$, $A^T$ and $kA$ are invertible and
$$
(A^{-1})^{-1} = A,
\qquad
(AB)^{-1} = B^{-1} A^{-1},
\qquad
(A^T)^{-1} = (A^{-1})^T,
\qquad
(kA)^{-1} = \frac{1}{k}\, A^{-1} .
$$
As with the transpose, in the inverse of a product the **order of the factors is reversed**. By induction the product of any number of invertible matrices is invertible, with $(A_1 A_2 \cdots A_r)^{-1} = A_r^{-1} \cdots A_2^{-1} A_1^{-1}$. A diagonal matrix with all diagonal entries nonzero is invertible, with $\operatorname{diag}(d_1, \dots, d_n)^{-1} = \operatorname{diag}\!\left( \dfrac{1}{d_1}, \dots, \dfrac{1}{d_n} \right)$.

:::dimostrazione
By the uniqueness of the inverse it suffices to verify, in each case, that the proposed matrix multiplied on the right and on the left gives $I_n$. The equality $A A^{-1} = A^{-1} A = I_n$ says that $A$ is the inverse of $A^{-1}$. For the product, using the associative property,
$$
(AB)(B^{-1} A^{-1}) = A (B B^{-1}) A^{-1} = A I_n A^{-1} = A A^{-1} = I_n,
$$
and in the same way $(B^{-1} A^{-1})(AB) = B^{-1} (A^{-1} A) B = B^{-1} B = I_n$. For the transpose, the rule $(XY)^T = Y^T X^T$ gives
$$
A^T (A^{-1})^T = (A^{-1} A)^T = I_n^T = I_n,
\qquad
(A^{-1})^T A^T = (A A^{-1})^T = I_n .
$$
Finally $(kA) \cdot \dfrac{1}{k} A^{-1} = \dfrac{k}{k}\, A A^{-1} = I_n$, and likewise with the factors swapped.
:::
::::

:::richiamo{titolo="Uniqueness of the inverse"}
If $BA = I_n$ and $AC = I_n$, then $B = C$.
:::

::::teorema{#matrici-non-invertibili titolo="Sufficient conditions for non-invertibility"}
Let $A \in M_n(\mathbb{R})$.

- If $A$ has a zero row or a zero column, then $A$ is not invertible.
- If there exists $B \in M_n(\mathbb{R})$ with $B \neq O$ such that $AB = O$ or $BA = O$, then $A$ is not invertible.

The second point says that a **zero divisor is not invertible**; in particular a nilpotent matrix is not invertible. These conditions make it possible to rule out invertibility without computations, while row echelon reduction decides in every case.

:::dimostrazione
If row $i$ of $A$ is zero, by the definition of the product row $i$ of $AB$ is zero for every $B$, so $AB \neq I_n$ for every $B$ and $A$ has no inverse; if column $k$ of $A$ is zero, one argues in the same way on column $k$ of $BA$. Now suppose $AB = O$ with $B \neq O$ and, by contradiction, $A$ invertible. Multiplying on the left by $A^{-1}$ gives
$$
B = I_n B = (A^{-1} A) B = A^{-1} (AB) = A^{-1} O = O,
$$
which contradicts $B \neq O$. The case $BA = O$ is handled by multiplying on the right by $A^{-1}$.
:::
::::

:::osservazione{#inversa-da-un-identita titolo="Inverse from a polynomial identity"}
When a matrix satisfies a polynomial identity with nonzero constant term, the inverse is obtained by factoring out $A$. If for example $A^2 - 4A + 3I_n = O$, then $A(4I_n - A) = 3I_n$ and also $(4I_n - A)A = 3I_n$, because $A$ commutes with $I_n$; therefore $A$ is invertible and
$$
A^{-1} = \frac{1}{3}\,(4I_n - A) .
$$
With the same factoring, for $N$ nilpotent with $N^3 = O$ one has $(I_n - N)(I_n + N + N^2) = I_n - N^3 = I_n$, therefore $I_n - N$ is invertible with inverse $I_n + N + N^2$.
:::

## Row echelon reduction

:::definizione{#operazioni-elementari titolo="Elementary row operations"}
Let $A$ be a matrix with rows $R_1, \dots, R_m$. The **elementary row operations** are three:

- swapping two rows, $R_i \leftrightarrow R_j$;
- multiplying a row by a nonzero scalar, $R_i \to k R_i$ with $k \neq 0$;
- replacing a row with the sum of itself and a multiple of another row, $R_i \to R_i + k R_j$ with $j \neq i$.

Each elementary operation is undone by an elementary operation of the same type: $R_i \leftrightarrow R_j$ by itself, $R_i \to k R_i$ by $R_i \to \dfrac{1}{k} R_i$, $R_i \to R_i + k R_j$ by $R_i \to R_i - k R_j$. Applied to the augmented matrix of a linear system, elementary operations produce a system with the **same solutions**; for this reason they are the computational tool for systems, rank and the inverse. In computations each operation is written above the arrow, for example $\xrightarrow{R_2 \to R_2 - 2R_1}$.
:::

:::definizione{#matrice-a-scala titolo="Row echelon matrix and pivots"}
A matrix is in **row echelon form** if both conditions are satisfied:

- any zero rows are at the bottom of the matrix;
- in each nonzero row the first nonzero entry, called the **pivot**, lies in a column strictly to the right of the pivot of the previous row.

Below each pivot, therefore, there are only zeros. A row echelon matrix is called **reduced** if, in addition, every pivot equals $1$ and is the only nonzero entry of its column. A square matrix in row echelon form is upper triangular.
:::

:::esempio
$$
\begin{pmatrix}
2 & 1 & 0 & 3 \\
0 & 0 & -1 & 4 \\
0 & 0 & 0 & 5
\end{pmatrix},
\qquad
\begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & -3 \\
0 & 0 & 0
\end{pmatrix} .
$$
The first matrix is in row echelon form with pivots $2$, $-1$, $5$ in columns $1$, $3$, $4$. The second is in reduced row echelon form with two pivots and one zero row. The matrix $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ is *not* in row echelon form, because the pivot of the second row lies to the left of that of the first; the swap $R_1 \leftrightarrow R_2$ brings it to row echelon form.
:::

::::teorema{#algoritmo-di-gauss titolo="Gaussian elimination"}
Every matrix can be transformed into a row echelon matrix with a finite number of elementary row operations, and with further operations into a reduced row echelon matrix. Row echelon reduction is used to solve linear systems, to compute the rank and to compute the inverse. The number of pivots does not depend on the chosen operations and is the rank of the matrix, which is covered in the topic on linear systems and rank.

:::dimostrazione
We proceed by induction on the number $m$ of rows. If the matrix is zero, it is already in row echelon form. Otherwise let $c$ be the first nonzero column; with a swap one brings to the first row a row with a nonzero entry $p$ in column $c$, which becomes the pivot. For each row $R_i$ with $i \geq 2$ and entry $a_{ic}$ in column $c$, the operation $R_i \to R_i - \dfrac{a_{ic}}{p} R_1$ makes that entry zero. After these steps the columns to the left of $c$ are zero and in column $c$ the only nonzero entry is the pivot in the first row. By the induction hypothesis, the submatrix formed by the rows from the second on is reduced to row echelon form with operations that do not affect the first row; the resulting matrix is in row echelon form, because the pivots of the subsequent rows lie to the right of column $c$. To obtain the reduced form one divides each nonzero row by its pivot and, proceeding from the last pivot to the first, makes the entries above each pivot zero with operations of the third type.
:::
::::

:::esempio{titolo="Row echelon reduction of a 3 × 4 matrix"}
$$
\begin{pmatrix}
1 & 2 & -1 & 3 \\
2 & 4 & 1 & 0 \\
-1 & -2 & 2 & -5
\end{pmatrix}
\xrightarrow[R_3 \to R_3 + R_1]{R_2 \to R_2 - 2R_1}
\begin{pmatrix}
1 & 2 & -1 & 3 \\
0 & 0 & 3 & -6 \\
0 & 0 & 1 & -2
\end{pmatrix}
$$
$$
\xrightarrow{R_2 \leftrightarrow R_3}
\begin{pmatrix}
1 & 2 & -1 & 3 \\
0 & 0 & 1 & -2 \\
0 & 0 & 3 & -6
\end{pmatrix}
\xrightarrow{R_3 \to R_3 - 3R_2}
\begin{pmatrix}
1 & 2 & -1 & 3 \\
0 & 0 & 1 & -2 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
After the first step the second column is zero below the first row, so the second pivot is sought in the third column; the row swap brings the pivot $1$ to the top and avoids fractions. The final matrix is in row echelon form with **two pivots**, in columns $1$ and $3$.
:::

::::teorema{#matrici-elementari titolo="Elementary matrices"}
An **elementary matrix** of order $m$ is the matrix $E$ obtained by applying a single elementary row operation to $I_m$. Then:

- for every $A \in M_{m,n}(\mathbb{R})$ the product $EA$ is the matrix obtained by applying the same operation to $A$;
- $E$ is invertible, and $E^{-1}$ is the elementary matrix of the inverse operation.

Reducing $A$ with the operations corresponding to $E_1, E_2, \dots, E_r$ therefore means multiplying it on the left by the product $E_r \cdots E_2 E_1$, which is invertible. For example, in order $3$ the operation $R_3 \to R_3 - 2R_1$ corresponds to
$$
E =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
-2 & 0 & 1
\end{pmatrix},
\qquad
E^{-1} =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
2 & 0 & 1
\end{pmatrix} .
$$

:::dimostrazione
Row $i$ of $EA$ is the product of row $i$ of $E$ by $A$, that is, the linear combination of the rows of $A$ with coefficients the entries of row $i$ of $E$. For $R_i \to R_i + k R_j$ row $i$ of $E$ has $1$ in position $i$ and $k$ in position $j$, so row $i$ of $EA$ is $R_i + k R_j$, while the other rows of $E$ coincide with those of $I_m$ and leave the other rows of $A$ unchanged. The other two types are verified in the same way. Now let $E'$ be the elementary matrix of the inverse operation. By the first point $E'E$ is obtained by applying to $E$ the inverse of the operation that produced $E$ from $I_m$, hence $E'E = I_m$; by the same reasoning $EE' = I_m$, therefore $E' = E^{-1}$.
:::
::::

## Computing the inverse with the Gauss-Jordan method

::::teorema{#teorema-di-gauss-jordan titolo="Gauss-Jordan theorem"}
Let $A \in M_n(\mathbb{R})$ and let $R$ be the reduced row echelon matrix obtained from $A$ with elementary row operations. Then $A$ is invertible *if and only if* $R = I_n$, that is, if and only if the row echelon reduction of $A$ produces $n$ pivots. In that case the same operations that transform $A$ into $I_n$ transform $I_n$ into $A^{-1}$.

The theorem provides at once an **invertibility criterion** and a **method for computing** the inverse. An upper triangular matrix with all diagonal entries nonzero, for example, has $n$ pivots and is therefore invertible.

:::dimostrazione
Let $E_1, \dots, E_r$ be the elementary matrices of the operations used, and let $P = E_r \cdots E_1$, so that $R = PA$; by the theorem on elementary matrices and by the properties of the inverse, $P$ is invertible. If $R$ has $n$ pivots, the pivot columns are $n$ strictly increasing indices between $1$ and $n$, so the pivot of row $i$ lies in column $i$; since every pivot equals $1$ and is the only nonzero entry of its column, $R = I_n$. If instead there are fewer than $n$ pivots, there are fewer than $n$ nonzero rows, and since the zero rows are at the bottom, the last row of $R$ is zero.

If $R = I_n$, then $PA = I_n$. Multiplying on the left by $P^{-1}$ gives $A = P^{-1}$, so $A$ is invertible, as the inverse of an invertible matrix, and $A^{-1} = (P^{-1})^{-1} = P = E_r \cdots E_1 I_n$; therefore the inverse is obtained by applying to $I_n$ the same operations in the same order.

If $R \neq I_n$, then $R$ has its last row zero and, by the sufficient conditions for non-invertibility, $R$ is not invertible. If $A$ were invertible, $R = PA$ would be invertible too, as a product of invertible matrices; therefore $A$ is not invertible.
:::
::::

:::richiamo{titolo="Elementary matrices"}
If $E$ is the elementary matrix of a row operation, then $EA$ is the matrix obtained by applying that operation to $A$, and $E$ is invertible.
:::

:::osservazione{#metodo-di-gauss-jordan titolo="The Gauss-Jordan method in practice"}
One writes the $n \times 2n$ matrix obtained by placing $A$ and $I_n$ side by side, and reduces it with row operations until the left block is in reduced row echelon form:
$$
\left( A \mid I_n \right) \longrightarrow \left( I_n \mid A^{-1} \right) .
$$
The operations are applied to entire rows, so they act on both blocks simultaneously. First one produces the zeros below the diagonal, then one makes the pivots equal to $1$, and finally one produces the zeros above the diagonal proceeding from the last column to the first. If during the reduction a zero row appears in the left block, there are fewer than $n$ pivots and $A$ is **not invertible**. The operations are *all* row operations, since a column operation corresponds to multiplication on the right by an elementary matrix, and with it the right block would no longer give $A^{-1}$. At the end the result is checked with the single product $A A^{-1} = I_n$, by the theorem on right and left inverses.
:::

::::teorema{#inversa-unilaterale titolo="Right inverse and left inverse"}
Let $A, B \in M_n(\mathbb{R})$ be such that $AB = I_n$. Then $A$ is invertible and $B = A^{-1}$; in particular $BA = I_n$ also holds. For square matrices, therefore, *only one* of the two equalities in the definition of the inverse is needed. The invertibility criterion via the determinant and the formula for the inverse via cofactors are found in the topic on the determinant and the inverse matrix.

:::dimostrazione
Let $R = PA$ be the reduced row echelon form of $A$, with $P$ invertible and a product of elementary matrices. If $A$ were not invertible, by the Gauss-Jordan theorem the last row of $R$ would be zero, so the last row of $RB$ would also be zero; but $RB = PAB = P$, which is invertible and by the sufficient conditions for non-invertibility has no zero rows. Therefore $A$ is invertible, and multiplying $AB = I_n$ on the left by $A^{-1}$ gives $B = A^{-1}$.
:::
::::

:::esempio{titolo="Inverse of a 3 × 3 matrix"}
Let $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 1 & 2 & 1 \end{pmatrix}$.
$$
\left(\begin{array}{ccc|ccc}
1 & 2 & 0 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
1 & 2 & 1 & 0 & 0 & 1
\end{array}\right)
\xrightarrow{R_3 \to R_3 - R_1}
\left(\begin{array}{ccc|ccc}
1 & 2 & 0 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
0 & 0 & 1 & -1 & 0 & 1
\end{array}\right)
$$
$$
\xrightarrow{R_2 \to R_2 - R_3}
\left(\begin{array}{ccc|ccc}
1 & 2 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 & -1 \\
0 & 0 & 1 & -1 & 0 & 1
\end{array}\right)
\xrightarrow{R_1 \to R_1 - 2R_2}
\left(\begin{array}{ccc|ccc}
1 & 0 & 0 & -1 & -2 & 2 \\
0 & 1 & 0 & 1 & 1 & -1 \\
0 & 0 & 1 & -1 & 0 & 1
\end{array}\right)
$$
The left block has become $I_3$, therefore $A$ is **invertible** and
$$
A^{-1} =
\begin{pmatrix}
-1 & -2 & 2 \\
1 & 1 & -1 \\
-1 & 0 & 1
\end{pmatrix} .
$$
:::

:::esempio{titolo="A non-invertible matrix"}
For $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ the reduction of $\left( A \mid I_2 \right)$ gives
$$
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
2 & 4 & 0 & 1
\end{array}\right)
\xrightarrow{R_2 \to R_2 - 2R_1}
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
0 & 0 & -2 & 1
\end{array}\right) .
$$
A zero row appears in the left block, so the reduction produces a single pivot and $A$ is **not invertible**. In agreement with the sufficient conditions for non-invertibility, $A$ is a zero divisor:
$$
\begin{pmatrix}
1 & 2 \\
2 & 4
\end{pmatrix}
\begin{pmatrix}
2 & 0 \\
-1 & 0
\end{pmatrix}
=
\begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix} .
$$
:::

:::osservazione{#equazioni-matriciali titolo="Matrix equations"}
Let $A \in M_n(\mathbb{R})$ be invertible. The equations in the unknown $X$
$$
AX = B
\qquad \text{and} \qquad
XA = B
$$
have respectively the unique solutions $X = A^{-1} B$ and $X = B A^{-1}$: in the first case one multiplies on the left by $A^{-1}$, in the second on the right, and the two results are in general different because the product is not commutative. For $AX = B$ one can avoid computing $A^{-1}$ by reducing the augmented matrix $\left( A \mid B \right)$ to $\left( I_n \mid X \right)$, by the same argument as in the Gauss-Jordan theorem. When $A$ is *not* invertible, one writes $X$ with unknown entries and solves the resulting linear system; the solutions may not exist or may be infinitely many.
:::
