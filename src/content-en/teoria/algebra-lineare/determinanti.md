---
titolo: Determinant and inverse matrix
sommario: How to compute the determinant of a square matrix, which properties simplify the computation, and how the determinant decides invertibility and gives the formula for the inverse.
---

## Determinant of order 2 and 3

:::definizione{#determinante-ordine-2 titolo="Determinant of order 2"}
Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M_2(\mathbb{R})$. The **determinant** of $A$ is the real number
$$
\det A =
\begin{vmatrix} a & b \\ c & d \end{vmatrix}
= ad - bc ,
$$
that is, the product of the entries on the main diagonal minus the product of the entries on the antidiagonal. The determinant assigns a single number to every square matrix, and by the invertibility criterion this number decides whether the matrix is invertible. For example
$$
\begin{vmatrix} 3 & -2 \\ 5 & 4 \end{vmatrix} = 3 \cdot 4 - (-2) \cdot 5 = 22 .
$$
:::

:::osservazione{#significato-geometrico titolo="Geometric meaning"}
Let $u = (u_1, u_2)$ and $v = (v_1, v_2)$ be two vectors in the plane. The **area of the parallelogram** with two adjacent sides along $u$ and $v$ is the absolute value of the determinant of the matrix with rows $u$ and $v$:
$$
\text{Area} = \left| \det \begin{pmatrix} u_1 & u_2 \\ v_1 & v_2 \end{pmatrix} \right| .
$$
The sign indicates the orientation: the determinant is positive when the shortest rotation taking $u$ to $v$ is counterclockwise, negative when it is clockwise. For $u = (3, 1)$ and $v = (1, 2)$ one gets $\det = 3 \cdot 2 - 1 \cdot 1 = 5$, so the parallelogram has area $5$. The triangle with sides $u$ and $v$ is half of the parallelogram and has area $\dfrac{5}{2}$.

::grafico{area="2*x;x/3;0;1|2+(x-1)/3;x/3;1;3|2+(x-1)/3;1+2*(x-3);3;4" vettori="0,0,3,1,u;0,0,1,2,v" segmenti="3,1,4,3;1,2,4,3" etichette="1.8,1.4,area 5" xmin=-0.5 xmax=4.6 ymin=-0.5 ymax=3.5 uguale=1 titolo="The parallelogram with sides $u = (3, 1)$ and $v = (1, 2)$ has area $\left|\det \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}\right| = 5$"}

:::

:::attenzione
The determinant is zero exactly when the parallelogram degenerates into a segment, that is, when $u$ and $v$ are **parallel**. For $u = (2, 1)$ and $v = (4, 2)$ we have $v = 2u$, so the rows of the matrix are proportional and
$$
\begin{vmatrix} 2 & 1 \\ 4 & 2 \end{vmatrix} = 4 - 4 = 0 .
$$

::grafico{vettori="0,0,4,2;0,0,2,1" etichette="2.9,1.8,v = (4, 2);1.3,0.3,u = (2, 1)" xmin=-0.5 xmax=4.6 ymin=-0.5 ymax=2.6 uguale=1 titolo="The vectors $u = (2, 1)$ and $v = (4, 2)$ lie on the same line: the parallelogram has area $0$ and the determinant is zero"}

:::

:::definizione{#regola-di-sarrus titolo="Determinant of order 3 and Sarrus' rule"}
Let $A = (a_{ij}) \in M_3(\mathbb{R})$. The **determinant** of $A$ is
$$
\begin{aligned}
\det A ={}& a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\[4pt]
&- a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} .
\end{aligned}
$$
**Sarrus' rule** is a way to remember the six products: copy the first two columns to the right of the matrix,
$$
\left(\begin{array}{ccc|cc}
a_{11} & a_{12} & a_{13} & a_{11} & a_{12} \\
a_{21} & a_{22} & a_{23} & a_{21} & a_{22} \\
a_{31} & a_{32} & a_{33} & a_{31} & a_{32}
\end{array}\right)
$$
then add the products of the three diagonals going down to the right and subtract the products of the three diagonals going down to the left. For example
$$
\begin{vmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{vmatrix}
= (12 + 0 + 0) - (0 + 2 + 2) = 8 .
$$
:::

:::attenzione
Sarrus' rule holds *only* for matrices of order $3$. For the matrix $J \in M_4(\mathbb{R})$ with $1$ on the antidiagonal and $0$ elsewhere, the analogous scheme with the first three columns copied gives $-1$, whereas Laplace expansion gives $\det J = 1$. For order $n \geq 4$ one uses Laplace expansion and elementary operations.
:::

## Laplace expansion

:::definizione{#complemento-algebrico titolo="Minor and cofactor"}
Let $A = (a_{ij}) \in M_n(\mathbb{R})$ with $n \geq 2$. For each pair of indices $(i, j)$, $A_{ij}$ denotes the matrix of order $n - 1$ obtained from $A$ by deleting row $i$ and column $j$; its determinant $\det A_{ij}$ is the **minor** of the entry $a_{ij}$. The **cofactor** of $a_{ij}$ is
$$
C_{ij} = (-1)^{i+j} \det A_{ij} .
$$
The sign $(-1)^{i+j}$ is $+$ when $i + j$ is even and $-$ when it is odd, and it is arranged in a checkerboard pattern with $+$ in the top left corner:
$$
\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix} .
$$
For $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$ we have $C_{12} = -\begin{vmatrix} 1 & 1 \\ 0 & 2 \end{vmatrix} = -2$.
:::

:::definizione{#determinante titolo="Determinant of order n"}
The determinant of a matrix of order $1$ is its only entry: $\det (a_{11}) = a_{11}$. For $n \geq 2$ the **determinant** of $A \in M_n(\mathbb{R})$ is defined by expanding along the first row:
$$
\det A = a_{11} C_{11} + a_{12} C_{12} + \dots + a_{1n} C_{1n} = \sum_{j=1}^{n} a_{1j} C_{1j} .
$$
The definition is recursive: a determinant of order $n$ reduces to $n$ determinants of order $n - 1$. For $n = 2$ and $n = 3$ the formula returns $ad - bc$ and the six products of Sarrus' rule.
:::

:::teorema{#teorema-di-laplace titolo="Laplace's theorem"}
Let $A \in M_n(\mathbb{R})$ with $n \geq 2$. For *every* row $i$ and *every* column $j$,
$$
\det A = \sum_{k=1}^{n} a_{ik} C_{ik}
\qquad \text{and} \qquad
\det A = \sum_{k=1}^{n} a_{kj} C_{kj} .
$$
Hence the determinant can be expanded along any row or any column, with the same result. In computations one chooses the row or column with the **most zeros**, because the terms with $a_{ik} = 0$ do not require computing the cofactor. The proof uses the expression of the determinant as a sum over the permutations of the indices and is omitted.
:::

:::esempio{titolo="Expansion of a determinant of order 4"}
$$
\det A =
\begin{vmatrix}
1 & 2 & 0 & 3 \\
0 & 1 & 0 & 2 \\
2 & 1 & 3 & 1 \\
0 & 0 & 0 & 2
\end{vmatrix}
= 2 \cdot (-1)^{4+4}
\begin{vmatrix}
1 & 2 & 0 \\
0 & 1 & 0 \\
2 & 1 & 3
\end{vmatrix}
= 2 \cdot 3 \cdot (-1)^{3+3}
\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix}
= 6 .
$$
The fourth row has only one nonzero entry, therefore the expansion along that row leaves a single determinant of order $3$. In this one the third column has only one nonzero entry, and the expansion along the third column reduces to a determinant of order $2$.
:::

## Properties of the determinant

::::teorema{#proprieta-del-determinante titolo="Properties of the determinant"}
Let $A \in M_n(\mathbb{R})$.

- $\det A^T = \det A$; consequently every property stated for rows also holds for columns.
- If a row of $A$ is zero, then $\det A = 0$.
- If a row of $A$ is multiplied by $k \in \mathbb{R}$, the determinant is multiplied by $k$.
- If a row of $A$ is the sum of two rows $r'$ and $r''$, then $\det A$ is the sum of the determinants of the two matrices obtained by replacing that row with $r'$ and with $r''$.
- If two rows are swapped, the determinant changes sign.
- If $A$ has two equal or proportional rows, then $\det A = 0$.
- If a multiple of another row is added to a row, the determinant does not change.

The properties make it possible to compute a determinant without expanding it and to recognize a zero determinant at a glance. For example $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 5 & 1 & 7 \end{vmatrix} = 0$, since the second row is twice the first.

:::dimostrazione
The first property and the row swap follow from the expression of the determinant in terms of permutations and are accepted without proof. Expanding along a zero row, by **Laplace's theorem** all the terms are zero. Expanding along the modified row $i$, the cofactors $C_{i1}, \dots, C_{in}$ do not depend on the entries of row $i$; therefore, if the row becomes $k$ times the previous one, each term $a_{ij} C_{ij}$ is multiplied by $k$, and if the row is $r' + r''$ the sum splits into two expansions. If two rows are equal, swapping them leaves the matrix unchanged while the determinant changes sign, hence $\det A = -\det A$, that is, $\det A = 0$. If row $j$ is $k$ times row $i$, the factor $k$ can be pulled out and what remains is a matrix with two equal rows, so the determinant is zero. Finally, if row $i$ becomes $r_i + k\, r_j$, by the sum property the new determinant is $\det A$ plus the determinant of a matrix in which row $i$ is $k\, r_j$, proportional to row $j$; the latter is zero, so the determinant does not change.
:::
::::

:::attenzione
Multiplying the whole matrix by $k$ means multiplying *each* of the $n$ rows by $k$, hence
$$
\det (kA) = k^n \det A .
$$
For $A \in M_3(\mathbb{R})$ with $\det A = 5$ we get $\det (2A) = 8 \cdot 5 = 40$, and the value $2 \cdot 5 = 10$ is wrong. Moreover, the determinant is *not* additive on matrices. With $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ we have $\det A + \det B = 0$, whereas $\det (A + B) = \det I_2 = 1$.
:::

::::teorema{#determinante-triangolare titolo="Determinant of a triangular matrix"}
Let $A \in M_n(\mathbb{R})$ be triangular, upper or lower. Then the determinant is the **product of the diagonal entries**:
$$
\det A = a_{11}\, a_{22} \cdots a_{nn} .
$$
In particular $\det I_n = 1$, and a triangular matrix has zero determinant if and only if it has at least one zero on the diagonal. The theorem is the basis of the computation with elementary operations: one reduces the matrix to triangular form and multiplies the diagonal entries.

:::dimostrazione
We proceed by induction on $n$; for $n = 1$ the claim is immediate. Let $A$ be upper triangular of order $n \geq 2$. The only possibly nonzero entry of the first column is $a_{11}$, so by **Laplace's theorem** the expansion along the first column gives $\det A = a_{11} \det A_{11}$. The matrix $A_{11}$ is upper triangular of order $n - 1$ with diagonal entries $a_{22}, \dots, a_{nn}$, therefore by the induction hypothesis $\det A_{11} = a_{22} \cdots a_{nn}$, and the claim follows. For $A$ lower triangular one expands along the first row, or applies the previous case to $A^T$, which is upper triangular with the same diagonal entries.
:::
::::

## Computation with elementary operations

:::teorema{#operazioni-elementari-e-determinante titolo="Effect of elementary operations"}
Let $A \in M_n(\mathbb{R})$ and let $A'$ be obtained from $A$ by a single elementary row operation. By the properties of the determinant:

- if the operation is $R_i \leftrightarrow R_j$ with $i \neq j$, then $\det A' = -\det A$;
- if the operation is $R_i \to k R_i$ with $k \neq 0$, then $\det A' = k \det A$;
- if the operation is $R_i \to R_i + k R_j$ with $i \neq j$, then $\det A' = \det A$.

In every case $\det A' = c \det A$ with $c \neq 0$, so elementary operations preserve the property $\det A \neq 0$. The **computation method** consists in reducing $A$ to a triangular matrix by elementary operations, keeping track of sign changes and factors, and multiplying the diagonal entries. For order $n \geq 4$ the method requires far fewer computations than the full Laplace expansion.
:::

:::esempio{titolo="Reduction to triangular form"}
$$
\begin{vmatrix} 0 & 2 & 4 \\ 1 & 3 & 2 \\ 2 & 1 & 1 \end{vmatrix}
\xrightarrow{R_1 \leftrightarrow R_2}
-\begin{vmatrix} 1 & 3 & 2 \\ 0 & 2 & 4 \\ 2 & 1 & 1 \end{vmatrix}
\xrightarrow{R_3 \to R_3 - 2R_1}
-\begin{vmatrix} 1 & 3 & 2 \\ 0 & 2 & 4 \\ 0 & -5 & -3 \end{vmatrix}
$$
$$
= -2\begin{vmatrix} 1 & 3 & 2 \\ 0 & 1 & 2 \\ 0 & -5 & -3 \end{vmatrix}
\xrightarrow{R_3 \to R_3 + 5R_2}
-2\begin{vmatrix} 1 & 3 & 2 \\ 0 & 1 & 2 \\ 0 & 0 & 7 \end{vmatrix}
= -2 \cdot 7 = -14 .
$$
The initial swap introduces the minus sign; the factor $2$ is pulled out of the second row, by the property of multiplying a row; the operations of the form $R_i \to R_i + k R_j$ do not change the determinant. The final matrix is triangular, so its determinant is the product $1 \cdot 1 \cdot 7$.
:::

:::attenzione
The operation $R_i \to a R_i + b R_j$ with $a \neq 1$ multiplies the determinant by $a$. For example, in $\begin{vmatrix} 2 & 1 \\ 3 & 4 \end{vmatrix} = 5$ the operation $R_2 \to 2R_2 - 3R_1$ produces $\begin{vmatrix} 2 & 1 \\ 0 & 5 \end{vmatrix} = 10$, which is twice the initial determinant.
:::

:::osservazione{#laplace-e-operazioni titolo="Elementary operations and Laplace expansion together"}
The two techniques can be combined: with operations of the form $R_i \to R_i + k R_j$ one makes all the entries of a column zero except one, then expands along that column. The determinant of order $n$ thus reduces to a single determinant of order $n - 1$, with no change in value. By the properties of the determinant the same operations can be performed on columns, for example adding all the columns to the first when the rows have the same sum.
:::

:::esempio{titolo="Zeros in a column and expansion"}
$$
\begin{vmatrix} 2 & 1 & 3 \\ 4 & 3 & 5 \\ -2 & 1 & 1 \end{vmatrix}
\xrightarrow[R_3 \to R_3 + R_1]{R_2 \to R_2 - 2R_1}
\begin{vmatrix} 2 & 1 & 3 \\ 0 & 1 & -1 \\ 0 & 2 & 4 \end{vmatrix}
= 2 \begin{vmatrix} 1 & -1 \\ 2 & 4 \end{vmatrix}
= 2 \cdot 6 = 12 .
$$
The two operations make the first column zero below the entry $a_{11} = 2$ and do not change the determinant. The expansion along the first column therefore has a single term, with sign $(-1)^{1+1} = +1$.
:::

::::teorema{#determinante-matrici-elementari titolo="Determinant of the product by an elementary matrix"}
Let $E \in M_n(\mathbb{R})$ be an elementary matrix and let $B \in M_n(\mathbb{R})$. Then
$$
\det (EB) = \det E \cdot \det B ,
$$
with $\det E = -1$ for a row swap, $\det E = k$ for $R_i \to k R_i$, $\det E = 1$ for $R_i \to R_i + k R_j$. In every case $\det E \neq 0$. The proposition is the special case of Binet's theorem from which the proof of the general case starts.

:::dimostrazione
By the theorem on elementary matrices, $EB$ is the matrix obtained from $B$ by the operation that defines $E$, so by the effect of elementary operations $\det (EB) = c \det B$, with $c = -1$, $c = k$ or $c = 1$ according to the type. With $B = I_n$ one gets $\det E = c \det I_n = c$, therefore $\det (EB) = \det E \cdot \det B$.
:::
::::

:::richiamo{titolo="Elementary matrices"}
If $E$ is the elementary matrix of a row operation, then $EA$ is the matrix obtained by applying that operation to $A$, and $E$ is invertible with elementary inverse.
:::

## Determinant and invertibility

::::teorema{#invertibilita-e-determinante titolo="Invertibility criterion"}
Let $A \in M_n(\mathbb{R})$. Then
$$
A \text{ is invertible} \iff \det A \neq 0 .
$$
Matrices with zero determinant are called **singular**. The criterion reduces the question of invertibility to the computation of a single number, and it is the starting point for the formula of the inverse and for the discussion of matrices with a parameter. For example $\begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$ **is not invertible**, since its determinant is $0$.

:::dimostrazione
Reduce $A$ to reduced row echelon form by elementary row operations: denoting by $E_1, \dots, E_r$ the elementary matrices of the operations used, one obtains $R = E_r \cdots E_1 A$. Applying $r$ times the proposition on the product by an elementary matrix,
$$
\det R = \det E_r \cdots \det E_1 \cdot \det A ,
$$
and since each $\det E_i$ is nonzero, $\det R \neq 0$ if and only if $\det A \neq 0$. By the **Gauss-Jordan theorem**, if $A$ is invertible then $R = I_n$, so $\det R = 1 \neq 0$ and therefore $\det A \neq 0$. If instead $A$ is not invertible, the last row of $R$ is zero, so $\det R = 0$ and therefore $\det A = 0$.
:::
::::

:::richiamo{titolo="Gauss-Jordan theorem"}
Let $A \in M_n(\mathbb{R})$ and let $R$ be the reduced row echelon matrix obtained from $A$ by elementary row operations. If $A$ is invertible, then $R = I_n$; if $A$ is not invertible, then the last row of $R$ is zero.
:::

:::osservazione{#righe-dipendenti titolo="Zero determinant and dependent rows"}
By the properties of the determinant, if a row of $A$ is a linear combination of the others, then $\det A = 0$, since with operations of the form $R_i \to R_i + k R_j$ that row becomes zero without the determinant changing. The converse also holds, and the complete formulation in terms of rank and linear independence is found in the topics on linear systems and vector spaces. For $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 2 & 5 & 7 \end{pmatrix}$ the third row is $2R_1 + R_2$, so $\det A = 0$ and $A$ **is not invertible**.
:::

## Binet's theorem

::::teorema{#teorema-di-binet titolo="Binet's theorem"}
Let $A, B \in M_n(\mathbb{R})$. Then
$$
\det (AB) = \det A \cdot \det B .
$$
The theorem makes it possible to compute the determinant of a product *without* carrying out the product. Two consequences of constant use follow: $\det (A^k) = (\det A)^k$ for every integer $k \geq 1$, and $\det (AB) = \det (BA)$ even when $AB \neq BA$. With $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ we have
$$
AB = \begin{pmatrix} 4 & 3 \\ 10 & 7 \end{pmatrix},
\qquad
BA = \begin{pmatrix} 5 & 8 \\ 4 & 6 \end{pmatrix},
$$
two different matrices, both with determinant $-2 = \det A \cdot \det B = (-2) \cdot 1$.

:::dimostrazione
We distinguish two cases.

- $A$ **invertible**. By the Gauss-Jordan theorem there exist elementary matrices with $E_r \cdots E_1 A = I_n$; multiplying on the left by the inverses one gets $A = F_1 F_2 \cdots F_r$, where $F_i = E_i^{-1}$ is again elementary. Applying $r$ times the proposition on the product by an elementary matrix,
$$
\det (AB) = \det (F_1 F_2 \cdots F_r B) = \det F_1 \cdots \det F_r \cdot \det B ,
$$
and with $B = I_n$ the same equality gives $\det A = \det F_1 \cdots \det F_r$. Substituting, one gets $\det (AB) = \det A \cdot \det B$.
- $A$ **not invertible**. By the invertibility criterion $\det A = 0$. The matrix $AB$ is not invertible either, because if it were, setting $C = B\,(AB)^{-1}$ we would have $AC = I_n$, and a square matrix with a right inverse is invertible. Hence $\det (AB) = 0 = \det A \cdot \det B$.
:::
::::

:::richiamo{titolo="Inverse from a single equality"}
If $A, C \in M_n(\mathbb{R})$ and $AC = I_n$, then also $CA = I_n$, so $A$ is invertible and $C = A^{-1}$.
:::

:::teorema{#determinante-dell-inversa titolo="Determinant of the inverse"}
Let $A \in M_n(\mathbb{R})$ be invertible. Then
$$
\det (A^{-1}) = \frac{1}{\det A} .
$$
Indeed $A A^{-1} = I_n$, so by **Binet's theorem** $\det A \cdot \det (A^{-1}) = \det I_n = 1$. Together with $\det A^T = \det A$ and $\det (kA) = k^n \det A$, the formula makes it possible to compute the determinant of expressions such as $2 A^T B^{-1}$ knowing only $\det A$ and $\det B$. For $A, B \in M_3(\mathbb{R})$ with $\det A = 3$ and $\det B = -2$ one gets $\det (2 A^T B^{-1}) = 8 \cdot 3 \cdot \left(-\dfrac{1}{2}\right) = -12$.
:::

:::osservazione{#binet-geometrico titolo="Geometric meaning of Binet's theorem"}
Let $A \in M_2(\mathbb{R})$. The map $x \mapsto Ax$ transforms the square with sides $e_1 = (1, 0)$ and $e_2 = (0, 1)$ into the parallelogram with sides $Ae_1$ and $Ae_2$, which are the columns of $A$; by the geometric meaning of the determinant and by $\det A^T = \det A$, its area is $|\det A|$. More generally, $|\det A|$ is the factor by which the map multiplies areas. Applying first $B$ and then $A$ multiplies areas by $|\det B|$ and then by $|\det A|$, in agreement with Binet's theorem. For linear maps, see the dedicated topic.

::grafico{area="1;0;0;1" vettori="0,0,2,1,Ae₁;0,0,1,2,Ae₂" segmenti="2,1,3,3;1,2,3,3;1,0,1,1;0,1,1,1" etichette="0.25,0.35,1;1.4,1.55,3" xmin=-0.5 xmax=3.5 ymin=-0.5 ymax=3.4 uguale=1 titolo="With $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ the square of area $1$ (shaded) becomes the parallelogram with sides $Ae_1 = (2, 1)$ and $Ae_2 = (1, 2)$, of area $\det A = 3$"}

:::

## Inverse via the cofactor matrix

:::definizione{#matrice-dei-complementi-algebrici titolo="Cofactor matrix"}
Let $A \in M_n(\mathbb{R})$ with $n \geq 2$. The **cofactor matrix** of $A$ is the matrix $\operatorname{cof} A = (C_{ij})$ that has in position $(i, j)$ the cofactor $C_{ij}$ of $a_{ij}$. Its transpose $(\operatorname{cof} A)^T$, which has $C_{ji}$ in position $(i, j)$, is called the **adjugate matrix** of $A$. The two matrices are the ingredients of the formula for the inverse.
:::

::::teorema{#formula-dell-inversa titolo="Formula for the inverse"}
Let $A \in M_n(\mathbb{R})$ with $n \geq 2$ and $\det A \neq 0$. Then
$$
A^{-1} = \frac{1}{\det A}\, (\operatorname{cof} A)^T ,
$$
that is, the entry in position $(i, j)$ of $A^{-1}$ is $\dfrac{C_{ji}}{\det A}$. For $n = 2$ the formula gives
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1}
= \frac{1}{ad - bc}
\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} .
$$
In the case of order $2$, therefore, one swaps the entries of the main diagonal, changes the sign of the other two and divides by the determinant. For example $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ has determinant $1$ and inverse $\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$.

:::dimostrazione
Let $P = A\, (\operatorname{cof} A)^T$. The entry in position $(i, k)$ of $P$ is the product of row $i$ of $A$ and column $k$ of $(\operatorname{cof} A)^T$, that is,
$$
p_{ik} = \sum_{j=1}^{n} a_{ij}\, C_{kj} .
$$
If $k = i$, the sum is the expansion of $\det A$ along row $i$, so by **Laplace's theorem** $p_{ii} = \det A$. If $k \neq i$, let $A'$ be the matrix obtained from $A$ by replacing row $k$ with row $i$. The cofactors $C_{k1}, \dots, C_{kn}$ do not depend on row $k$, so they are the same for $A$ and for $A'$, and the sum is the expansion of $\det A'$ along row $k$. Since $A'$ has two equal rows, $p_{ik} = \det A' = 0$. Therefore $P = \det A \cdot I_n$, and dividing by $\det A \neq 0$ one gets $A \cdot \dfrac{1}{\det A}(\operatorname{cof} A)^T = I_n$. By the inverse from a single equality, the matrix $\dfrac{1}{\det A}(\operatorname{cof} A)^T$ is the inverse of $A$.
:::
::::

:::esempio{titolo="Inverse of a matrix of order 3"}
Let $A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$. The expansion along the first row gives $\det A = 1 \cdot (1 - 0) - 0 + 1 \cdot (1 - 0) = 2 \neq 0$, so $A$ is invertible. The nine cofactors are
$$
\begin{aligned}
C_{11} &= +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1, &
C_{12} &= -\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = -1, &
C_{13} &= +\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1, \\[6pt]
C_{21} &= -\begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix} = 1, &
C_{22} &= +\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1, &
C_{23} &= -\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = -1, \\[6pt]
C_{31} &= +\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix} = -1, &
C_{32} &= -\begin{vmatrix} 1 & 1 \\ 1 & 0 \end{vmatrix} = 1, &
C_{33} &= +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1 .
\end{aligned}
$$
They are arranged in $\operatorname{cof} A$, which is then transposed and divided by $\det A = 2$:
$$
A^{-1} = \frac{1}{2}
\begin{pmatrix} 1 & 1 & -1 \\ -1 & 1 & 1 \\ 1 & -1 & 1 \end{pmatrix} .
$$
The product $A A^{-1}$ gives $I_3$, and this check confirms the result.
:::

:::attenzione
The cofactor matrix must be **transposed**. For $A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, with $\det A = 2$, we have $\operatorname{cof} A = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 1 & -1 \\ -1 & 1 & 1 \end{pmatrix}$, and the matrix $\dfrac{1}{2}\operatorname{cof} A$ has first row $\left(\dfrac{1}{2}, -\dfrac{1}{2}, \dfrac{1}{2}\right)$; the product of this row and the first column of $A$ equals $\dfrac{1}{2} - \dfrac{1}{2} + 0 = 0$, whereas in $I_3$ that entry equals $1$. Only for symmetric matrices does transposition leave $\operatorname{cof} A$ unchanged.
:::

:::osservazione{#elemento-dell-inversa titolo="A single entry of the inverse"}
When only one entry of $A^{-1}$ is needed, the formula for the inverse avoids the full computation:
$$
(A^{-1})_{ij} = \frac{C_{ji}}{\det A} ,
$$
with the indices swapped. For $A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, with $\det A = 2$, we get $(A^{-1})_{13} = \dfrac{C_{31}}{2} = -\dfrac{1}{2}$. For matrices of order $n \geq 4$ the full inverse is usually computed with the Gauss-Jordan method, described in the topic on matrices, because the formula requires $n^2$ determinants of order $n - 1$.
:::

## Determinants with a parameter

:::osservazione{#determinanti-con-parametro titolo="Matrices with a parameter"}
If the entries of $A_k$ depend on a real parameter $k$, the determinant $\det A_k$ is a **polynomial** in $k$. By the invertibility criterion, $A_k$ is invertible for all values of $k$ that do *not* make this polynomial vanish. The method is therefore:

- compute $\det A_k$ trying to obtain it already **factored**, with elementary operations that bring out common factors before the expansion;
- solve the equation $\det A_k = 0$;
- conclude that $A_k$ is invertible for the values of $k$ different from the roots found.

Direct expansion produces a high-degree polynomial to be factored; operations of the form $R_i \to R_i + h R_j$ with numerical $h$, on the other hand, do not change the determinant and often bring out a common factor in a row.
:::

:::esempio{titolo="Invertibility as the parameter varies"}
$$
\det A_k =
\begin{vmatrix} 1 & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{vmatrix}
\xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - R_1}
\begin{vmatrix} 1 & 1 & 1 \\ 0 & k - 1 & 0 \\ 0 & 0 & k - 1 \end{vmatrix}
= (k - 1)^2 .
$$
The two operations do not change the determinant and produce a triangular matrix, whose determinant is the product of the diagonal entries. The determinant vanishes only for $k = 1$, so $A_k$ is **invertible** for every $k \neq 1$.
:::

:::attenzione
An operation $R_i \to h R_i$ with $h$ depending on the parameter multiplies the determinant by $h$, and for the values of $k$ that make $h$ vanish the operation is no longer invertible. With $A_k = \begin{pmatrix} k & 1 \\ 1 & 1 \end{pmatrix}$, the operation $R_2 \to k R_2 - R_1$ produces $\begin{pmatrix} k & 1 \\ 0 & k - 1 \end{pmatrix}$, with determinant $k(k - 1)$; the correct value is $\det A_k = k - 1$, and the root $k = 0$ was introduced by the operation. Operations involving the parameter are used keeping track of the factor, or else replaced by operations with numerical coefficients.
:::
