---
titolo: Matrices, determinants and linear systems
sommario: How to work with matrices, how to compute the determinant, the inverse and the rank, when a linear system has solutions and how to find them with Cramer, Rouché-Capelli and Gauss, also in the presence of a parameter, with the equilibrium of two markets and the Leontief model.
---

## Matrices and operations

:::definizione{#matrice titolo="Matrix"}
An $m \times n$ **matrix** is a table of real numbers arranged in $m$ rows and $n$ columns:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix} .
$$
The number $a_{ij}$ is the **entry** in position $(i, j)$, that is, in row $i$ and column $j$, and one also writes $A = (a_{ij})$. A $1 \times n$ matrix is a **row vector**, an $m \times 1$ matrix is a **column vector**. For example
$$
A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{pmatrix}
$$
is a $2 \times 3$ matrix with $a_{12} = 2$ and $a_{23} = 4$. Matrices collect in a single object the coefficients of a linear system, or data arranged in a table.
:::

:::definizione{#somma-e-prodotto-per-scalare titolo="Sum and product by a scalar"}
Let $A = (a_{ij})$ and $B = (b_{ij})$ be two $m \times n$ matrices and let $\lambda \in \mathbb{R}$. The **sum** $A + B$ and the **product by the scalar** $\lambda$ are computed entry by entry:
$$
A + B = (a_{ij} + b_{ij}),
\qquad
\lambda A = (\lambda\, a_{ij}) .
$$
The sum is defined *only* between matrices with the same dimensions, and it is commutative and associative; the zero matrix $O$ is the neutral element. With the matrix $A$ of the previous definition and $B = \begin{pmatrix} 2 & 0 & 1 \\ -1 & 1 & 2 \end{pmatrix}$ we have
$$
A + B = \begin{pmatrix} 3 & 2 & 1 \\ 2 & 0 & 6 \end{pmatrix},
\qquad
2A = \begin{pmatrix} 2 & 4 & 0 \\ 6 & -2 & 8 \end{pmatrix} .
$$
:::

:::definizione{#prodotto-righe-per-colonne titolo="Row-by-column product"}
Let $A$ be an $m \times n$ matrix and $B$ an $n \times p$ matrix, that is, the number of columns of $A$ equals the number of rows of $B$. The **product** $AB$ is the $m \times p$ matrix whose entry in position $(i, j)$ is obtained by multiplying row $i$ of $A$ by column $j$ of $B$, entry by entry, and adding:
$$
(AB)_{ij} = a_{i1} b_{1j} + a_{i2} b_{2j} + \dots + a_{in} b_{nj} = \sum_{k = 1}^{n} a_{ik}\, b_{kj} .
$$
With $A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{pmatrix}$, of type $2 \times 3$, and $C = \begin{pmatrix} 1 & 0 \\ 2 & 1 \\ -1 & 3 \end{pmatrix}$, of type $3 \times 2$, the product $AC$ is $2 \times 2$:
$$
AC = \begin{pmatrix}
1 + 4 + 0 & 0 + 2 + 0 \\
3 - 2 - 4 & 0 - 1 + 12
\end{pmatrix}
= \begin{pmatrix} 5 & 2 \\ -3 & 11 \end{pmatrix} .
$$
The product $CA$, instead, is a $3 \times 3$ matrix.
:::

:::teorema{#proprieta-del-prodotto titolo="Properties of the product"}
For matrices with dimensions such that the products and sums are defined, and for every $\lambda \in \mathbb{R}$, the following hold:

- associativity: $(AB)C = A(BC)$;
- distributivity: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$;
- compatibility with scalars: $(\lambda A)B = A(\lambda B) = \lambda\,(AB)$.

The properties follow by writing the generic entry of both sides. By associativity one writes $ABC$ without parentheses, and for a square matrix one defines the powers $A^2 = AA$, $A^3 = AAA$ and so on.
:::

:::attenzione
The matrix product is *not* commutative, even when $AB$ and $BA$ are both defined and have the same dimensions. For example
$$
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
= \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix},
\qquad
\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
= \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} .
$$
Moreover, the product of two nonzero matrices can be the zero matrix, since $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} = O$. Therefore $AB = O$ does *not* imply that $A = O$ or $B = O$.
:::

:::definizione{#trasposta titolo="Transpose matrix"}
The **transpose** of a matrix $A$ of type $m \times n$ is the matrix $A^{T}$ of type $n \times m$ whose rows are the columns of $A$, that is, $(A^{T})_{ij} = a_{ji}$. The following hold:
$$
(A + B)^{T} = A^{T} + B^{T},
\qquad
(\lambda A)^{T} = \lambda A^{T},
\qquad
(AB)^{T} = B^{T} A^{T} ,
$$
and in the last formula the order of the factors is reversed. For example $\begin{pmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{pmatrix}^{T} = \begin{pmatrix} 1 & 3 \\ 2 & -1 \\ 0 & 4 \end{pmatrix}$.
:::

## Square matrices

:::definizione{#matrice-quadrata titolo="Square matrix and identity matrix"}
A matrix is **square** of order $n$ if it has $n$ rows and $n$ columns. The entries $a_{11}, a_{22}, \dots, a_{nn}$ form the **main diagonal**. The **identity matrix** $I_n$ is the square matrix of order $n$ with $1$ on the main diagonal and $0$ elsewhere:
$$
I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix},
\qquad
I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} .
$$
For every square matrix $A$ of order $n$ we have $A I_n = I_n A = A$, because the product of $A$ by column $j$ of $I_n$ is column $j$ of $A$; in the matrix product the identity therefore plays the role of the number $1$.
:::

:::definizione{#matrici-diagonali-e-triangolari titolo="Diagonal and triangular matrices"}
Let $A$ be a square matrix of order $n$.

- $A$ is **diagonal** if $a_{ij} = 0$ for every $i \neq j$, that is, if the entries off the main diagonal are zero.
- $A$ is **upper triangular** if $a_{ij} = 0$ for every $i > j$, that is, if the entries below the main diagonal are zero.
- $A$ is **lower triangular** if $a_{ij} = 0$ for every $i < j$.

The product of two diagonal matrices is diagonal and is obtained by multiplying the corresponding diagonal entries, so the powers of a diagonal matrix are computed at once:
$$
\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}^{3} = \begin{pmatrix} 8 & 0 \\ 0 & -1 \end{pmatrix} .
$$
Gauss's method transforms a square matrix into an upper triangular matrix, whose determinant is the product of the diagonal entries.
:::

:::definizione{#matrice-simmetrica titolo="Symmetric matrix"}
A square matrix $A$ is **symmetric** if $A^{T} = A$, that is, if $a_{ij} = a_{ji}$ for every $i$ and $j$; the entries are arranged symmetrically with respect to the main diagonal. For example $\begin{pmatrix} 1 & 4 \\ 4 & -3 \end{pmatrix}$ is symmetric. For every matrix $B$ the matrix $B B^{T}$ is symmetric, since $(B B^{T})^{T} = (B^{T})^{T} B^{T} = B B^{T}$. Symmetric matrices appear in the study of functions of two variables, where the Hessian matrix is symmetric by Schwarz's theorem.
:::

## Determinant

:::definizione{#determinante-2x2 titolo="Determinant of a 2 × 2 matrix"}
The **determinant** of a square matrix of order $2$ is the number
$$
\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc ,
$$
that is, the product of the entries of the main diagonal minus the product of the entries of the other diagonal. For example $\begin{vmatrix} 4 & 1 \\ 1 & 3 \end{vmatrix} = 12 - 1 = 11$. The absolute value of the determinant is the area of the parallelogram whose sides are the row vectors $(a, b)$ and $(c, d)$; in particular the determinant is zero exactly when the two rows are proportional and the parallelogram is flattened onto a line.

::grafico{area="3*x;x/4;0;1|3+(x-1)/4;x/4;1;4|3+(x-1)/4;1+3*(x-4);4;5" vettori="0,0,4,1,u;0,0,1,3,v" segmenti="4,1,5,4;1,3,5,4" etichette="2.1,1.9,area 11" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 titolo="The parallelogram with sides $u = (4, 1)$ and $v = (1, 3)$ has area $\begin{vmatrix} 4 & 1 \\ 1 & 3 \end{vmatrix} = 11$"}

:::

:::definizione{#complemento-algebrico titolo="Complementary minor and cofactor"}
Let $A$ be a square matrix of order $n \geq 2$. The **complementary minor** $M_{ij}$ of the entry $a_{ij}$ is the determinant of the matrix of order $n - 1$ obtained by deleting row $i$ and column $j$ from $A$. The **cofactor** of $a_{ij}$ is
$$
A_{ij} = (-1)^{i + j}\, M_{ij} .
$$
The sign $(-1)^{i + j}$ equals $+1$ when $i + j$ is even and $-1$ when it is odd, and it is distributed in a checkerboard pattern starting from the $+$ in the top left corner. For $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}$, deleting the first row and the second column gives $M_{12} = \begin{vmatrix} 1 & 1 \\ 0 & 4 \end{vmatrix} = 4$, so $A_{12} = -4$.
:::

:::definizione{#determinante titolo="Determinant of a square matrix"}
The determinant of a square matrix of order $n$ is defined starting from order $n - 1$. For $n = 1$ one sets $\det (a_{11}) = a_{11}$; for $n \geq 2$
$$
\det A = a_{11} A_{11} + a_{12} A_{12} + \dots + a_{1n} A_{1n} ,
$$
that is, each entry of the first row is multiplied by its cofactor and the products are added. For $n = 2$ we recover $ad - bc$, since $A_{11} = d$ and $A_{12} = -c$. For the matrix $A$ of the previous definition
$$
\det A = 2 \begin{vmatrix} 3 & 1 \\ 2 & 4 \end{vmatrix} - 1 \begin{vmatrix} 1 & 1 \\ 0 & 4 \end{vmatrix} + 0 = 2 \cdot 10 - 4 = 16 .
$$
:::

:::teorema{#regola-di-sarrus titolo="Sarrus's rule"}
For a square matrix of order $3$ the first two columns are copied to the right. The determinant is the sum of the products along the three diagonals going down to the right minus the sum of the products along the three diagonals going up to the right:
$$
\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} .
$$
The formula is obtained by expanding the three $2 \times 2$ determinants of the definition. For $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}$ we have $\det A = (24 + 0 + 0) - (0 + 4 + 4) = 16$, as with the definition. The rule holds *only* for order $3$; for order $4$ one uses the Laplace expansion.

::grafico{assi=0 uguale=1 etichette="0,2,2;1,2,1;2,2,0;3,2,2;4,2,1;0,1,1;1,1,3;2,1,1;3,1,1;4,1,3;0,0,0;1,0,2;2,0,4;3,0,0;4,0,2" linee="-0.3,2.3 2.3,-0.3;0.7,2.3 3.3,-0.3;1.7,2.3 4.3,-0.3" segmenti="-0.3,-0.3,2.3,2.3;0.7,-0.3,3.3,2.3;1.7,-0.3,4.3,2.3" xmin=-1 xmax=5 ymin=-1 ymax=3 titolo="Sarrus's rule: the first two columns are copied to the right; the products along the solid diagonals ($24$, $0$, $0$) are added, those along the dashed diagonals ($0$, $4$, $4$) are subtracted"}

:::

:::teorema{#sviluppo-di-laplace titolo="Laplace expansion"}
Let $A$ be a square matrix of order $n \geq 2$. For every row $i$ and every column $j$
$$
\det A = \sum_{k = 1}^{n} a_{ik}\, A_{ik} = \sum_{k = 1}^{n} a_{kj}\, A_{kj} ,
$$
that is, the determinant can be expanded along *any* row or along *any* column. If instead the entries of one row are multiplied by the cofactors of another row, the sum is zero:
$$
\sum_{k = 1}^{n} a_{ik}\, A_{jk} = 0 \qquad \text{for } i \neq j .
$$
It is convenient to expand along the row or column with the most zeros, because the terms with $a_{ik} = 0$ need not be computed. The second formula is the expansion of a matrix with two equal rows, row $i$ repeated in place of row $j$, which has zero determinant. For the proof, see the topic on determinants in Linear Algebra.
:::

:::esempio{titolo="Determinant of order 4"}
In the matrix
$$
A = \begin{pmatrix} 1 & 0 & 2 & 0 \\ 3 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 \\ 1 & 0 & 1 & 2 \end{pmatrix}
$$
the fourth column has a single nonzero entry, $a_{44} = 2$, with sign $(-1)^{4 + 4} = +1$. Expanding along the fourth column and then along the first row gives
$$
\begin{aligned}
\det A &= 2 \begin{vmatrix} 1 & 0 & 2 \\ 3 & 1 & 0 \\ 0 & 2 & 1 \end{vmatrix} \\[6pt]
&= 2 \left( 1 \cdot (1 - 0) - 0 + 2 \cdot (6 - 0) \right) \\[6pt]
&= 2 \cdot 13 = 26 .
\end{aligned}
$$
:::

:::teorema{#determinante-triangolare titolo="Determinant of a triangular matrix"}
The determinant of a triangular matrix, upper or lower, and in particular of a diagonal matrix, is the product of the entries of the main diagonal:
$$
\det A = a_{11}\, a_{22} \cdots a_{nn} .
$$
For an upper triangular matrix one expands along the first column, whose only nonzero entry is $a_{11}$; the complementary minor is again upper triangular, and repeating the argument gives the product of the diagonal entries. In particular $\det I_n = 1$, and for example $\begin{vmatrix} 2 & 5 & -1 \\ 0 & 3 & 7 \\ 0 & 0 & -1 \end{vmatrix} = -6$.
:::

## Properties of the determinant

:::teorema{#proprieta-del-determinante titolo="Properties of the determinant"}
Let $A$ be a square matrix of order $n$. The following properties hold.

- $\det A^{T} = \det A$; hence every property stated for rows also holds for columns.
- If $A$ has a zero row, or two equal or proportional rows, then $\det A = 0$.
- Swapping two rows changes the sign of the determinant.
- Multiplying a row by $\lambda$ multiplies the determinant by $\lambda$; consequently $\det(\lambda A) = \lambda^{n} \det A$.
- Adding to a row a multiple of another row does not change the determinant.

The last property makes it possible to create zeros in a column without changing the determinant, and to arrive at a triangular matrix. For the proof, see the topic on determinants in Linear Algebra.
:::

:::esempio{titolo="Computation with row operations"}
In the matrix $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 1 & 3 & 5 \end{pmatrix}$ we subtract twice the first row from the second row and the first row from the third row; then we subtract the new second row from the third row. The operations are all of the type of the last property, so
$$
\begin{vmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 1 & 3 & 5 \end{vmatrix}
= \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix}
= \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{vmatrix}
= 1 .
$$
The last determinant is that of a triangular matrix, and it equals the product $1 \cdot 1 \cdot 1$.
:::

:::teorema{#teorema-di-binet titolo="Binet's theorem"}
Let $A$ and $B$ be square matrices of the same order. Then
$$
\det(AB) = \det A \cdot \det B .
$$
It follows that $\det(AB) = \det(BA)$, although in general $AB \neq BA$, and that $\det(A^{k}) = (\det A)^{k}$. For example, with $\det A = 3$ and $\det B = -2$ we get $\det(A^{2} B) = 9 \cdot (-2) = -18$. For the proof, see the topic on determinants in Linear Algebra.
:::

:::attenzione
The determinant is *not* additive. With $A = B = I_2$ we have $\det(A + B) = \det(2 I_2) = 4$, whereas $\det A + \det B = 2$. In the same way $\det(2A) = 2^{n} \det A$, and not $2 \det A$.
:::

## Inverse matrix

:::definizione{#matrice-inversa titolo="Inverse matrix"}
A square matrix $A$ of order $n$ is **invertible** if there exists a matrix $B$ of order $n$ such that
$$
AB = BA = I_n .
$$
If such a $B$ exists it is unique; it is called the **inverse** of $A$ and is denoted by $A^{-1}$. Uniqueness follows from associativity, since if $C$ also satisfies $AC = CA = I_n$ then $C = C\,(AB) = (CA)\,B = B$. The inverse is used to solve matrix equations; for example from $AX = B$, multiplying on the left by $A^{-1}$, we get $X = A^{-1} B$.
:::

::::teorema{#esistenza-inversa titolo="Existence and computation of the inverse"}
A square matrix $A$ is invertible if and only if $\det A \neq 0$. In this case
$$
A^{-1} = \frac{1}{\det A}
\begin{pmatrix}
A_{11} & A_{21} & \cdots & A_{n1} \\
A_{12} & A_{22} & \cdots & A_{n2} \\
\vdots & \vdots & & \vdots \\
A_{1n} & A_{2n} & \cdots & A_{nn}
\end{pmatrix} ,
$$
that is, the entry in position $(i, j)$ of the inverse is $\dfrac{A_{ji}}{\det A}$, so one computes the matrix of cofactors, transposes it and divides it by $\det A$. For $n = 2$ the formula becomes
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix},
\qquad ad - bc \neq 0 ,
$$
so the entries of the main diagonal are swapped and the other two change sign. For example $\begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}^{-1} = \dfrac{1}{11} \begin{pmatrix} 3 & -1 \\ -1 & 4 \end{pmatrix}$.

:::dimostrazione
The idea is that the product of $A$ by the transpose of the matrix of cofactors, denoted by $\operatorname{adj} A$, contains a Laplace expansion in every position. If $A$ is invertible, by **Binet's theorem** $\det A \cdot \det A^{-1} = \det I_n = 1$, so $\det A \neq 0$. Conversely, let $\det A \neq 0$. The entry in position $(i, j)$ of the product $A \cdot \operatorname{adj} A$ is
$$
\sum_{k = 1}^{n} a_{ik}\, A_{jk} .
$$
For $i = j$ this sum is the expansion of $\det A$ along row $i$; for $i \neq j$ it is zero, by the second formula of the **Laplace expansion**. Therefore $A \cdot \operatorname{adj} A = \det A \cdot I_n$, and expanding along the columns one obtains in the same way $\operatorname{adj} A \cdot A = \det A \cdot I_n$. Dividing by $\det A \neq 0$ we conclude that $\dfrac{1}{\det A} \operatorname{adj} A$ is the inverse of $A$.
:::
::::

:::esempio{titolo="Inverse of a matrix of order 3"}
For $A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$ the expansion along the first column gives $\det A = 1 \cdot (1 - 1) + 1 \cdot (2 - 1) = 1 \neq 0$, so $A$ is invertible. The cofactors are
$$
\begin{aligned}
&A_{11} = 0, \quad A_{12} = 1, \quad A_{13} = -1, \\[4pt]
&A_{21} = -1, \quad A_{22} = 0, \quad A_{23} = 1, \\[4pt]
&A_{31} = 1, \quad A_{32} = -1, \quad A_{33} = 1 ,
\end{aligned}
$$
and transposing their matrix we obtain
$$
A^{-1} = \begin{pmatrix} 0 & -1 & 1 \\ 1 & 0 & -1 \\ -1 & 1 & 1 \end{pmatrix} .
$$
As a check, the first row of $A$ times the first column of $A^{-1}$ gives $0 + 2 - 1 = 1$, and the first row of $A$ times the second column gives $-1 + 0 + 1 = 0$.
:::

:::teorema{#proprieta-dell-inversa titolo="Properties of the inverse"}
Let $A$ and $B$ be invertible square matrices of the same order. Then $AB$, $A^{T}$ and $A^{-1}$ are invertible and
$$
(AB)^{-1} = B^{-1} A^{-1},
\qquad
(A^{T})^{-1} = (A^{-1})^{T},
\qquad
\det(A^{-1}) = \frac{1}{\det A} .
$$
The first formula is checked with the product, since $(AB)(B^{-1}A^{-1}) = A\,(B B^{-1})\,A^{-1} = A A^{-1} = I_n$; as for the transpose, the order of the factors is reversed. The third follows from Binet's theorem applied to $A A^{-1} = I_n$.
:::

## Rank

:::definizione{#rango titolo="Minors and rank"}
Let $A$ be an $m \times n$ matrix. A **minor of order** $k$ of $A$ is the determinant of a square $k \times k$ matrix obtained by choosing $k$ rows and $k$ columns of $A$. The **rank** $\operatorname{rk} A$ is the largest order of a nonzero minor of $A$, and the zero matrix has rank $0$. We always have $\operatorname{rk} A \leq \min(m, n)$, and a square matrix of order $n$ has rank $n$ if and only if $\det A \neq 0$.
:::

:::esempio{titolo="Rank with minors"}
For $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 0 & 1 \end{pmatrix}$ the only minor of order $3$ is $\det A$, which is zero because the second row is twice the first. The minor of order $2$ formed by the first and third rows and by the first two columns is
$$
\begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = -2 \neq 0 ,
$$
so $\operatorname{rk} A = 2$.
:::

:::teorema{#teorema-degli-orlati titolo="Bordered minors theorem"}
Let $M$ be a nonzero minor of order $r$ of a matrix $A$. If all the minors of order $r + 1$ that contain $M$, called the **bordered minors** of $M$, are zero, then $\operatorname{rk} A = r$. The bordered minors are obtained by adding to $M$ one row and one column of $A$; for a $3 \times 4$ matrix with a nonzero minor of order $2$, for example, $2$ bordered minors suffice instead of the $4$ minors of order $3$. For the proof, see the topic on linear systems and rank in Linear Algebra.
:::

:::definizione{#matrice-a-scala titolo="Echelon matrix"}
A matrix is in **echelon form** (by rows) if the first nonzero entry of each row, called the **pivot**, lies strictly to the right of the pivot of the previous row, and any zero rows are at the bottom. Below each pivot there are therefore only zeros. For example
$$
\begin{pmatrix} 1 & 2 & -1 & 3 \\ 0 & 0 & 3 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$
is in echelon form, with pivot $1$ in the first column and $3$ in the third. The rank of an echelon matrix is the **number of nonzero rows**, because the rows with the pivots and the columns of the pivots form a triangular minor with nonzero diagonal entries, while every larger minor contains a zero row.

::grafico{assi=0 uguale=1 etichette="0,2,1;1,2,2;2,2,-1;3,2,3;0,1,0;1,1,0;2,1,3;3,1,1;0,0,0;1,0,0;2,0,0;3,0,0" linee="-0.5,2.5 -0.5,1.5 1.5,1.5 1.5,0.5 3.5,0.5" xmin=-1 xmax=4 ymin=-1 ymax=3 titolo="In the echelon matrix the pivots $1$ and $3$ lie just above the staircase line and below the line there are only zeros; the nonzero rows are two, so the rank is $2$"}

:::

:::teorema{#riduzione-a-scala titolo="Reduction to echelon form"}
The **elementary operations** on the rows of a matrix are:

- swapping two rows;
- multiplying a row by a number different from zero;
- adding to a row a multiple of another row.

Elementary operations do not change the rank, and with a finite number of them every matrix is transformed into an echelon matrix (**Gaussian elimination method**). For example, in the matrix $\begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 7 \\ 1 & 2 & 2 & 4 \end{pmatrix}$ we subtract twice the first row from the second and the first row from the third, obtaining the rows $(0, 0, 3, 1)$ and $(0, 0, 3, 1)$; subtracting the second row from the third we arrive at the echelon matrix of the previous definition, so the rank is $2$. The invariance of the rank follows from the properties of the determinant; for the proof, see the topic on linear systems and rank in Linear Algebra.
:::

## Linear systems and Cramer's rule

:::definizione{#sistema-lineare titolo="Linear system in matrix form"}
A **linear system** of $m$ equations in $n$ unknowns $x_1, \dots, x_n$ is
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\[4pt]
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\[4pt]
\quad \vdots \\[4pt]
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$
The numbers $a_{ij}$ form the **coefficient matrix** $A$, of type $m \times n$, and the constant terms form the column vector $b$. With the column vector of the unknowns $x$, the system is written in **matrix form**
$$
A x = b ,
$$
because row $i$ of $A$ times the column $x$ is the left-hand side of equation $i$. The **augmented matrix** $(A \mid b)$ is obtained by adding to $A$ the column of the constant terms. The system is **consistent** if it has at least one solution and **inconsistent** if it has none; a consistent system is **determinate** if the solution is unique and **indeterminate** if there are infinitely many solutions. The system is **homogeneous** if $b = 0$, and in that case it always has the zero solution.
:::

:::osservazione{#sistemi-in-due-incognite titolo="Systems of two equations in two unknowns"}
Each equation $a x + b y = c$, with $a$ and $b$ not both zero, represents a line in the plane, and the solutions of the system are the points common to the two lines.

- If the lines intersect, the system is determinate.
- If the lines are parallel and distinct, the system is inconsistent.
- If the lines coincide, the system is indeterminate, with infinitely many solutions.

The lines are parallel or coincident exactly when the coefficients of the unknowns are proportional, that is, when the determinant of the coefficient matrix is zero. For example the system formed by $x - 2y = 2$ and $x - 2y = -2$ has determinant $\begin{vmatrix} 1 & -2 \\ 1 & -2 \end{vmatrix} = 0$ and different constant terms, so it is inconsistent.

::grafico{f="(x-2)/2;(x+2)/2" etichette="4,-1,x − 2y = 2;-3.6,0.6,x − 2y = −2" xmin=-4 xmax=6 ymin=-3 ymax=4 uguale=1 titolo="The lines $x - 2y = 2$ and $x - 2y = -2$ are parallel and distinct, so the system formed by the two equations is inconsistent"}

:::

::::teorema{#regola-di-cramer titolo="Cramer's rule"}
Let $A x = b$ be a system of $n$ equations in $n$ unknowns with $\det A \neq 0$. Then the system has one and only one solution, given by
$$
x = A^{-1} b,
\qquad
x_j = \frac{\det A_j}{\det A}, \quad j = 1, \dots, n ,
$$
where $A_j$ is the matrix obtained from $A$ by replacing column $j$ with the column $b$ of the constant terms. The rule is convenient for systems of order $2$ and $3$ and for systems with a parameter.

:::dimostrazione
Since $\det A \neq 0$, the matrix $A$ is invertible. If $x$ is a solution, multiplying $Ax = b$ on the left by $A^{-1}$ gives $x = A^{-1} b$; conversely $x = A^{-1}b$ satisfies $A x = A A^{-1} b = b$. Therefore the solution exists and is unique. By the formula for the **inverse**, component $j$ of $A^{-1} b$ is
$$
x_j = \frac{1}{\det A} \sum_{i = 1}^{n} A_{ij}\, b_i .
$$
The sum is the **Laplace expansion** of $\det A_j$ along column $j$, because $A_j$ has the numbers $b_i$ in that column and, outside that column, coincides with $A$, so it has the same cofactors $A_{ij}$. Hence $x_j = \dfrac{\det A_j}{\det A}$.
:::
::::

:::esempio{titolo="System of order 2 with Cramer"}
For the system
$$
\begin{cases}
2x + y = 5 \\[4pt]
x - y = 1
\end{cases}
$$
we have $\det A = \begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} = -3 \neq 0$, so Cramer's rule applies and
$$
x = \frac{\begin{vmatrix} 5 & 1 \\ 1 & -1 \end{vmatrix}}{-3} = \frac{-6}{-3} = 2,
\qquad
y = \frac{\begin{vmatrix} 2 & 5 \\ 1 & 1 \end{vmatrix}}{-3} = \frac{-3}{-3} = 1 .
$$

::grafico{f="5-2*x;x-1" punti="2,1,pieno" etichette="3.4,-1.1,2x + y = 5;4.3,2.4,x − y = 1" xmin=-2 xmax=6 ymin=-2 ymax=6 uguale=1 titolo="The lines $2x + y = 5$ and $x - y = 1$ meet only at the point $(2, 1)$, the solution given by Cramer's rule"}

:::

## Rouché-Capelli theorem and Gauss's method

:::teorema{#metodo-di-gauss titolo="Gaussian elimination method"}
Elementary operations on the rows of the augmented matrix $(A \mid b)$ transform the system into an **equivalent** system, that is, one with the same solutions. Indeed the three operations correspond to swapping two equations, multiplying an equation by a nonzero number and adding to an equation a multiple of another, and each is undone by an operation of the same type. **Gauss's method** reduces the augmented matrix to echelon form and then solves the echelon system starting from the last equation and working upward. For example
$$
\left( \begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 1 & 2 & 3 & 3 \\ 2 & 3 & 4 & 5 \end{array} \right)
\longrightarrow
\left( \begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 1 & 2 & 1 \end{array} \right)
\longrightarrow
\left( \begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{array} \right),
$$
where the first row was subtracted from the second, twice the first from the third and finally the second from the third. The equations $x + y + z = 2$ and $y + 2z = 1$ remain; setting $z = t$, we obtain $y = 1 - 2t$ and then $x = 2 - y - z = 1 + t$. The solutions are $(1 + t,\ 1 - 2t,\ t)$ with $t \in \mathbb{R}$.
:::

::::teorema{#rouche-capelli titolo="Rouché-Capelli theorem"}
A linear system $A x = b$ in $n$ unknowns is consistent if and only if
$$
\operatorname{rk} A = \operatorname{rk}(A \mid b) .
$$
In this case, denoting by $r$ the common value of the two ranks:

- if $r = n$ the system is determinate;
- if $r < n$ the system is indeterminate and the solutions depend on $n - r$ free parameters, and one says that there are $\infty^{n - r}$ of them.

The theorem makes it possible to know whether a system has solutions, and how many, without solving it. In the system of Gauss's method the coefficient matrix and the augmented matrix both have rank $2$ and the unknowns are $3$, so the solutions are $\infty^{1}$, in agreement with the parameter $t$ found.

:::dimostrazione
The idea is to read the answer off the echelon form. The augmented matrix is reduced to echelon form with **Gauss's method**, giving $(A' \mid b')$; the system $A' x = b'$ is equivalent to the original one, and the same operations reduce $A$ to the echelon matrix $A'$. By the **reduction to echelon form** the ranks do not change, so $\operatorname{rk} A = \operatorname{rk} A'$ and $\operatorname{rk}(A \mid b) = \operatorname{rk}(A' \mid b')$, and each rank is the number of nonzero rows. The two ranks are different exactly when $(A' \mid b')$ has a row of the form $(0 \ \cdots \ 0 \mid c)$ with $c \neq 0$, which corresponds to the equation $0 = c$; in that case the system is inconsistent. If the ranks are both equal to $r$, there remain $r$ equations, each with a pivot. The $n - r$ unknowns that do not correspond to a pivot can be chosen freely; working upward from the last equation, each equation uniquely determines its pivot unknown. Hence the solutions depend on $n - r$ parameters, and there is only one when $r = n$.
:::
::::

:::osservazione{#sistemi-omogenei titolo="Homogeneous systems"}
For a homogeneous system $A x = 0$ the column of the constant terms is zero, so $\operatorname{rk}(A \mid 0) = \operatorname{rk} A$ and the system is always consistent. By the Rouché-Capelli theorem it has solutions other than the zero one if and only if $\operatorname{rk} A < n$, that is, for a square system, if and only if $\det A = 0$. For example the system formed by $x + 2y = 0$ and $3x + 6y = 0$ has zero determinant, and its solutions are $(-2t, t)$ with $t \in \mathbb{R}$.
:::

## Systems with a parameter

:::osservazione{#discussione-con-parametro titolo="Discussion of a system with a parameter"}
When the coefficients or the constant terms depend on a parameter $k$, *discussing* the system means stating for which values of $k$ it is determinate, indeterminate or inconsistent. For a square system one proceeds as follows.

- Compute $\det A$ as a function of $k$ and find the values that make it zero.
- For the values of $k$ with $\det A \neq 0$ the system is determinate, and the solution is found with Cramer's rule.
- For each value with $\det A = 0$, substitute $k$ into the system and compare $\operatorname{rk} A$ and $\operatorname{rk}(A \mid b)$ using the Rouché-Capelli theorem.

If the system is not square, the ranks are studied directly, for example with minors and the bordered minors theorem, or with reduction to echelon form.
:::

:::esempio{titolo="System with a parameter in two unknowns"}
We discuss the system
$$
\begin{cases}
x + k y = 2 \\[4pt]
k x + 4 y = 4
\end{cases}
$$
The determinant is $\begin{vmatrix} 1 & k \\ k & 4 \end{vmatrix} = 4 - k^{2}$, which vanishes for $k = 2$ and for $k = -2$.

- For $k \neq \pm 2$ the system is determinate. Cramer's rule gives $x = \dfrac{8 - 4k}{4 - k^{2}} = \dfrac{4}{k + 2}$ and $y = \dfrac{4 - 2k}{4 - k^{2}} = \dfrac{2}{k + 2}$, after canceling the factor $2 - k \neq 0$.
- For $k = 2$ the second equation, $2x + 4y = 4$, is twice the first, so $\operatorname{rk} A = \operatorname{rk}(A \mid b) = 1$ and the system is indeterminate with $\infty^{1}$ solutions $(2 - 2t,\ t)$.
- For $k = -2$ the equations are $x - 2y = 2$ and $-2x + 4y = 4$, that is, $x - 2y = -2$. The minor $\begin{vmatrix} 1 & 2 \\ -2 & 4 \end{vmatrix} = 8$ of the augmented matrix is nonzero, so $\operatorname{rk}(A \mid b) = 2 > 1 = \operatorname{rk} A$ and the system is inconsistent. The two equations represent the parallel and distinct lines $x - 2y = 2$ and $x - 2y = -2$.
:::

## Economic applications

:::definizione{#equilibrio-due-beni titolo="Market equilibrium with two goods"}
When two goods are related, the demand for each also depends on the price of the other. With demands and supplies linear in the prices $p_1$ and $p_2$, the **equilibrium** is the pair of prices for which in both markets the quantity demanded equals the quantity supplied:
$$
\begin{cases}
q_{d1}(p_1, p_2) = q_{s1}(p_1, p_2) \\[4pt]
q_{d2}(p_1, p_2) = q_{s2}(p_1, p_2)
\end{cases}
$$
and the two conditions form a linear system of two equations in the unknowns $p_1$ and $p_2$. A positive coefficient of $p_2$ in the demand for the first good indicates that the two goods are substitutes.
:::

:::esempio{titolo="Two substitute goods"}
The demands and supplies of two goods are
$$
q_{d1} = 25 - 2p_1 + p_2, \quad q_{s1} = 2 + 2p_1, \qquad q_{d2} = 12 + p_1 - 2p_2, \quad q_{s2} = 4 + p_2 .
$$
Setting demand equal to supply in each market gives the system
$$
\begin{cases}
4p_1 - p_2 = 23 \\[4pt]
-p_1 + 3p_2 = 8
\end{cases}
$$
with determinant $12 - 1 = 11 \neq 0$. Cramer's rule gives
$$
p_1 = \frac{23 \cdot 3 - (-1) \cdot 8}{11} = \frac{77}{11} = 7,
\qquad
p_2 = \frac{4 \cdot 8 - (-1) \cdot 23}{11} = \frac{55}{11} = 5 .
$$
The equilibrium quantities are $q_1 = 2 + 14 = 16$ and $q_2 = 4 + 5 = 9$; as a check, $25 - 14 + 5 = 16$ and $12 + 7 - 10 = 9$.

::grafico{f="4*x-23;(x+8)/3" punti="7,5,pieno" etichette="8.7,8.4,market 1;1,4.4,market 2" xmin=0 xmax=12 ymin=0 ymax=12 nomi="p₁,p₂" titolo="The price pairs that balance the first market ($4p_1 - p_2 = 23$) and the second ($-p_1 + 3p_2 = 8$) lie on two lines that meet at the equilibrium $(7, 5)$"}

:::

:::definizione{#modello-di-leontief titolo="Leontief input-output model"}
An economy is divided into $n$ sectors, and each sector uses as input part of the production of the others. The **technical coefficient** $a_{ij} \geq 0$ is the quantity of the product of sector $i$ needed to produce one unit of sector $j$; the coefficients form the **technology matrix** $A$. If $x$ is the vector of production levels and $d$ that of **final demand**, the production of sector $i$ must cover both the intermediate uses $a_{i1} x_1 + \dots + a_{in} x_n$ and the final demand $d_i$, so
$$
x = A x + d
\iff
(I_n - A)\, x = d .
$$
If $I_n - A$ is invertible, the production that meets final demand is
$$
x = (I_n - A)^{-1} d .
$$
If each column of $A$ has sum less than $1$, one can prove that $(I_n - A)^{-1}$ exists and has all entries nonnegative, so a nonnegative final demand corresponds to nonnegative production levels.
:::

:::esempio{titolo="Economy with two sectors"}
The technology matrix and the final demand are
$$
A = \begin{pmatrix} 0.2 & 0.3 \\ 0.4 & 0.1 \end{pmatrix},
\qquad
d = \begin{pmatrix} 12 \\ 24 \end{pmatrix} .
$$
The columns of $A$ have sums $0.6$ and $0.4$, less than $1$. We have
$$
I_2 - A = \begin{pmatrix} 0.8 & -0.3 \\ -0.4 & 0.9 \end{pmatrix},
\qquad
\det(I_2 - A) = 0.72 - 0.12 = 0.6 ,
$$
and with the formula for the inverse of order $2$
$$
x = \frac{1}{0.6} \begin{pmatrix} 0.9 & 0.3 \\ 0.4 & 0.8 \end{pmatrix} \begin{pmatrix} 12 \\ 24 \end{pmatrix}
= \frac{1}{0.6} \begin{pmatrix} 18 \\ 24 \end{pmatrix}
= \begin{pmatrix} 30 \\ 40 \end{pmatrix} .
$$
The first sector must produce $30$ units, of which $0.2 \cdot 30 + 0.3 \cdot 40 = 18$ are absorbed by intermediate uses and $12$ go to final demand.

::grafico{f="(0.8*x-12)/0.3;(24+0.4*x)/0.9" punti="30,40,pieno" etichette="44,60,sector 1;3,40,sector 2" xmin=0 xmax=72 ymin=0 ymax=72 nomi="x₁,x₂" titolo="The equations $0.8\,x_1 - 0.3\,x_2 = 12$ and $-0.4\,x_1 + 0.9\,x_2 = 24$ are two lines that meet in the first quadrant, at the point $(30, 40)$"}

:::
