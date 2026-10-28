---
titolo: Linear systems and rank
sommario: How to write a linear system in matrix form, how to compute the rank, when a system has solutions and how many, how to solve it with Gauss or with Cramer, and how to discuss it as a parameter varies.
---

## Linear systems and matrix form

:::definizione{#sistema-lineare titolo="Linear system"}
A **linear system** of $m$ equations in $n$ unknowns $x_1, \dots, x_n$ is a set of equations to be satisfied simultaneously
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\[4pt]
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\[4pt]
\quad \vdots \\[4pt]
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$
with coefficients $a_{ij} \in \mathbb{R}$ and constant terms $b_i \in \mathbb{R}$. A **solution** is an $n$-tuple $(x_1, \dots, x_n) \in \mathbb{R}^n$ that satisfies *all* the $m$ equations, and solving the system means determining the set of all solutions. The equations are linear because the unknowns appear only to the first degree and are not multiplied together.
:::

:::definizione{#sistema-compatibile titolo="Consistent and inconsistent system"}
A linear system is called

- **consistent** if it has *at least one* solution, inconsistent if it has none;
- **determined** if it is consistent with exactly one solution, underdetermined if it is consistent with more than one solution.

The system formed by $x + y = 1$ and $x + y = 3$ is inconsistent, because the same quantity $x + y$ cannot equal both $1$ and $3$. An underdetermined system always has infinitely many solutions, as follows from the Rouché-Capelli theorem; consequently a linear system with exactly two solutions does not exist.
:::

:::definizione{#forma-matriciale titolo="Matrix form"}
The system is written in compact form as
$$
A x = b, \qquad
A = (a_{ij}) \in M_{m,n}(\mathbb{R}), \quad
x =
\begin{pmatrix}
x_1 \\ \vdots \\ x_n
\end{pmatrix}, \quad
b =
\begin{pmatrix}
b_1 \\ \vdots \\ b_m
\end{pmatrix},
$$
where $A$ is the **coefficient matrix** and the product is the row-by-column product, for which see the topic on matrices. The **augmented matrix** $(A \mid b) \in M_{m, n+1}(\mathbb{R})$ is obtained by appending the column of constant terms to $A$. Row $i$ of the augmented matrix contains all the information of equation $i$, therefore every operation on the equations translates into an operation on the rows of $(A \mid b)$.
:::

:::esempio
The system
$$
\begin{cases}
x + 2y - z = 3 \\[4pt]
2x - y + z = 1
\end{cases}
$$
has $m = 2$ equations and $n = 3$ unknowns, with
$$
A =
\begin{pmatrix}
1 & 2 & -1 \\
2 & -1 & 1
\end{pmatrix},
\qquad
(A \mid b) =
\left(\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
2 & -1 & 1 & 1
\end{array}\right).
$$
:::

## Geometric interpretation

:::osservazione{#interpretazione-geometrica titolo="Geometric interpretation"}
An equation $a x + b y = c$ with $(a, b) \neq (0, 0)$ represents a line in the plane, so solving a system of two equations in two unknowns means finding the points common to two lines. There are three possible cases.

- The lines are **intersecting**: the system is determined and the solution is the point of intersection. This happens when the coefficients of the unknowns are *not* proportional, that is, when $\det A \neq 0$.
- The lines are **parallel and distinct**: the system is inconsistent.
- The lines are **coincident**: the two equations are proportional and the system has infinitely many solutions, the points of the line.

::grafico{f="3-x;x-1" punti="2,1,pieno" etichette="0.9,3.0,x + y = 3;3.3,1.7,x − y = 1" xmin=-1.5 xmax=5 ymin=-2 ymax=4 uguale=1 titolo="The system formed by $x + y = 3$ and $x - y = 1$ is determined: the two lines meet only at the point $(2, 1)$"}

::grafico{f="3-x;1-x" etichette="2.1,1.5,x + y = 3;-1.4,0.55,x + y = 1" xmin=-1.5 xmax=5 ymin=-2 ymax=4 uguale=1 titolo="The system formed by $x + y = 3$ and $x + y = 1$ is inconsistent: the two lines are parallel and distinct"}

In three unknowns each equation represents a plane in space, and three planes can have in common a point, a line, a plane, or no point at all; for the study of their relative positions, see the topic on lines and planes in space.
:::

## Elementary operations and Gaussian elimination

:::definizione{#operazioni-elementari titolo="Elementary row operations"}
There are three **elementary operations** on the rows of a matrix:

- swapping two rows, $R_i \leftrightarrow R_j$;
- multiplying a row by a nonzero number, $R_i \to c\, R_i$ with $c \neq 0$;
- adding to a row a multiple of another row, $R_i \to R_i + c\, R_j$ with $j \neq i$.

On the augmented matrix of a system they correspond to swapping two equations, multiplying an equation by a nonzero constant, and adding to an equation a multiple of another. They are the same operations used in the topic on matrices to reduce to echelon form and to compute the inverse.
:::

::::teorema{#sistemi-equivalenti titolo="Elementary operations and equivalent systems"}
If the augmented matrix $(A' \mid b')$ is obtained from $(A \mid b)$ by a sequence of elementary row operations, then the systems $A x = b$ and $A' x = b'$ have the same solutions. Two systems with the same solutions are called **equivalent**. The theorem guarantees that during the reduction to echelon form the solution set stays the same, so one can solve the reduced system in place of the original one.

:::dimostrazione
It suffices to consider a single operation, because the case of a sequence follows by applying the argument at each step. Every equation of the new system is a linear combination of the equations of the old one, so every solution of the old system also satisfies the new one. Every elementary operation is undone by an operation of the same type: the swap $R_i \leftrightarrow R_j$ by the same swap, $R_i \to c\, R_i$ by $R_i \to \dfrac{1}{c}\, R_i$, which is defined since $c \neq 0$, and $R_i \to R_i + c\, R_j$ by $R_i \to R_i - c\, R_j$. Therefore the old system is also obtained from the new one by an elementary operation, and by the same argument every solution of the new system satisfies the old one.
:::
::::

:::attenzione
The theorem concerns operations performed one after another. Two operations performed in the same step produce an equivalent system when each modified row uses rows that remain unchanged in that step. The system formed by $x + y = 2$ and $x - y = 0$ has the unique solution $(1, 1)$; performing $R_1 \to R_1 - R_2$ and $R_2 \to R_2 - R_1$ together gives the equations $2y = 2$ and $-2y = -2$, which have the infinitely many solutions $(t, 1)$. The new system **is not equivalent** to the first, because the information on $x$ has been lost.
:::

:::osservazione{#sistema-a-scala titolo="Solving a system in echelon form"}
A system whose augmented matrix is in echelon form is solved from the bottom up. The first nonzero entry of each nonzero row is called the **pivot**.

- If a row has the form $(0 \ \cdots \ 0 \mid c)$ with $c \neq 0$, it corresponds to the equation $0 = c$, so the system is **inconsistent**.
- Otherwise the unknowns of the columns with a pivot are found by back substitution, from the last equation to the first, and the unknowns of the columns without a pivot remain free: each one is assigned a real parameter.

Rows of the form $(0 \ \cdots \ 0 \mid 0)$ correspond to the equation $0 = 0$ and are discarded. The number of free parameters is therefore the number of unknowns minus the number of pivots.
:::

:::osservazione{#metodo-di-gauss titolo="Gaussian elimination"}
**Gaussian elimination** solves a system in two phases: the augmented matrix $(A \mid b)$ is reduced to echelon form by elementary row operations, then the resulting echelon system is solved. By the theorem on equivalent systems the solutions found are those of the original system. The method applies with any number of equations and unknowns and establishes in the same computation whether the system is consistent.
:::

:::esempio{titolo="A determined system"}
$$
\begin{cases}
x + y + z = 6 \\[4pt]
2x + 3y + z = 11 \\[4pt]
x - y + 2z = 5
\end{cases}
$$
$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
2 & 3 & 1 & 11 \\
1 & -1 & 2 & 5
\end{array}\right)
\xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - 2R_1}
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & -1 \\
0 & -2 & 1 & -1
\end{array}\right)
\xrightarrow{R_3 \to R_3 + 2R_2}
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & -1 \\
0 & 0 & -1 & -3
\end{array}\right)
$$
The last equation $-z = -3$ gives $z = 3$; the second, $y - z = -1$, gives $y = 2$; the first gives $x = 6 - y - z = 1$. There are three pivots and three unknowns, so no unknown is free and the **unique solution** is $(1, 2, 3)$.
:::

## The rank of a matrix

:::definizione{#minore titolo="Minor of a matrix"}
Let $A \in M_{m,n}(\mathbb{R})$ and let $p \leq \min(m, n)$. Choosing $p$ rows and $p$ columns of $A$ and keeping the entries at their intersections, in the order in which they appear, one obtains a square submatrix of order $p$. Its determinant is called a **minor** of order $p$ of $A$. The entries of $A$ are the minors of order $1$; for the computation of determinants, see the topic on the determinant and the inverse matrix.
:::

:::definizione{#rango titolo="Rank"}
The **rank** of a nonzero matrix $A \in M_{m,n}(\mathbb{R})$, denoted by $\operatorname{rk} A$, is the largest order of a nonzero minor of $A$; the zero matrix has rank $0$. Saying that $\operatorname{rk} A = r$ means that there exists a nonzero minor of order $r$ and that *all* the minors of order $r + 1$ are zero. Three properties follow from the definition.

- $\operatorname{rk} A \leq \min(m, n)$, because there are no minors of larger order.
- $\operatorname{rk} A^T = \operatorname{rk} A$, because the minors of $A^T$ are the minors of $A$, given that the determinant of a square matrix equals that of its transpose.
- If $A \in M_n(\mathbb{R})$, then $\operatorname{rk} A = n$ if and only if $\det A \neq 0$, because the only minor of order $n$ is $\det A$.

The rank equals the maximum number of linearly independent rows, or columns, and for this interpretation see the topic on vector spaces.
:::

:::esempio
For
$$
A =
\begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
1 & 0 & 1
\end{pmatrix}
$$
the determinant is zero, since the second row is twice the first; hence $\operatorname{rk} A < 3$. The minor formed by rows $1$, $3$ and columns $1$, $2$ equals
$$
\begin{vmatrix}
1 & 2 \\
1 & 0
\end{vmatrix}
= -2 \neq 0,
$$
therefore $\operatorname{rk} A = 2$.
:::

::::teorema{#rango-e-riduzione-a-scala titolo="Rank and reduction to echelon form"}
Elementary row operations do not change the rank of a matrix, and the rank of a matrix in echelon form equals the number of its pivots. Hence, to compute $\operatorname{rk} A$, one reduces $A$ to echelon form and counts the pivots; for matrices with many rows and columns the computation is much shorter than examining all the minors.

:::dimostrazione
The invariance of the rank follows from the properties of the determinant with respect to elementary operations, for which see the topic on the determinant and the inverse matrix. A row swap changes at most the sign of a minor; multiplying a row by $c \neq 0$ multiplies by $c$ the minors that contain that row; the operation $R_i \to R_i + c\, R_j$ leaves unchanged the minors that contain both rows or neither of them, and transforms a minor that contains only row $i$ into the sum of that minor and $c$ times, up to sign, another minor of the same matrix, the one in which row $j$ takes the place of row $i$. Hence, if all the minors of order $r + 1$ of $A$ are zero, so are those of the new matrix, and since the operations are invertible the converse also holds.

Now let $S$ be in echelon form with $r$ pivots. The minor formed by the $r$ nonzero rows and the $r$ pivot columns is the determinant of an upper triangular matrix with the pivots on the diagonal, so it is the product of the pivots and is nonzero. Every submatrix of order $r + 1$ contains at least one zero row of $S$, since there are only $r$ nonzero rows, therefore every minor of order $r + 1$ is zero. It follows that $\operatorname{rk} S = r$.
:::
::::

## The bordered minors theorem

:::definizione{#orlato titolo="Bordered minor"}
Let $M$ be a minor of order $p$ of $A$, obtained from rows $i_1, \dots, i_p$ and columns $j_1, \dots, j_p$. A **bordered minor** of $M$ is a minor of order $p + 1$ obtained by adding to those rows and columns one row and one column of $A$ not yet chosen. An $m \times n$ matrix has exactly $(m - p)(n - p)$ bordered minors of a minor of order $p$, one for each pair formed by a remaining row and a remaining column.
:::

:::teorema{#teorema-degli-orlati titolo="Bordered minors theorem (Kronecker)"}
Let $A \in M_{m,n}(\mathbb{R})$ and let $M$ be a nonzero minor of order $r$ of $A$. If all the bordered minors of $M$ are zero, then $\operatorname{rk} A = r$. The theorem reduces the number of determinants to compute: instead of all the minors of order $r + 1$, the $(m - r)(n - r)$ bordered minors of a nonzero minor already found are enough. The procedure starts from a nonzero entry and goes up in order; if a bordered minor is nonzero, the rank is at least $r + 1$ and the check is repeated on the bordered minors of the new minor. The proof uses linear dependence among the rows and is omitted.
:::

:::esempio{titolo="Rank of a 3 × 4 matrix"}
$$
A =
\begin{pmatrix}
1 & 2 & 0 & 1 \\
2 & 4 & 1 & 3 \\
3 & 6 & 1 & 4
\end{pmatrix}
$$
The minor of rows $1$, $2$ and columns $1$, $3$ equals
$$
\begin{vmatrix}
1 & 0 \\
2 & 1
\end{vmatrix}
= 1 \neq 0,
$$
so $\operatorname{rk} A \geq 2$. Its bordered minors are $(3 - 2)(4 - 2) = 2$ and they are obtained by adding row $3$ and one of columns $2$ and $4$:
$$
\begin{vmatrix}
1 & 2 & 0 \\
2 & 4 & 1 \\
3 & 6 & 1
\end{vmatrix}
= 0,
\qquad
\begin{vmatrix}
1 & 0 & 1 \\
2 & 1 & 3 \\
3 & 1 & 4
\end{vmatrix}
= 1 \cdot 1 - 0 + 1 \cdot (-1) = 0 .
$$
The first is zero because its second column is twice the first. Since both bordered minors are zero, by the **bordered minors theorem** $\operatorname{rk} A = 2$. From the definition alone, all four minors of order $3$ would have had to be computed.
:::

## The Rouché-Capelli theorem

::::teorema{#rouche-capelli titolo="Rouché-Capelli theorem"}
Let $A x = b$ be a linear system with $A \in M_{m,n}(\mathbb{R})$. The system is consistent if and only if
$$
\operatorname{rk} A = \operatorname{rk} (A \mid b) .
$$
In that case, denoting by $r$ the common value of the two ranks, the solutions depend on $n - r$ free parameters:

- if $r = n$, the system has **exactly one solution**;
- if $r < n$, the system has **infinitely many solutions**, and one says that it has $\infty^{n - r}$ of them.

The theorem answers the two preliminary questions about a system, namely whether it has solutions and how many, with only the computation of two ranks. Since $A$ is a submatrix of $(A \mid b)$, it always holds that $\operatorname{rk} A \leq \operatorname{rk} (A \mid b) \leq \operatorname{rk} A + 1$, so there are two possible cases: equal ranks, or the rank of the augmented matrix larger by one.

:::dimostrazione
Reduce $(A \mid b)$ to an echelon matrix $(S \mid c)$ by elementary row operations. The same operations, restricted to the first $n$ columns, reduce $A$ to the echelon matrix $S$. By the theorem on equivalent systems the system $S x = c$ has the same solutions as $A x = b$; by the theorem on rank and reduction to echelon form $\operatorname{rk} A = \operatorname{rk} S$ and $\operatorname{rk} (A \mid b) = \operatorname{rk} (S \mid c)$, and these ranks are the numbers of pivots.

The pivots of $S$ are the pivots of $(S \mid c)$ that are not in the last column. Hence $\operatorname{rk} (S \mid c) = \operatorname{rk} S + 1$ if and only if the last column contains a pivot, that is, if and only if a row $(0 \ \cdots \ 0 \mid c_i)$ with $c_i \neq 0$ appears; in that case the system contains the equation $0 = c_i$ and is inconsistent.

If instead the ranks are both equal to $r$, every nonzero row has its pivot in a column of $S$. The $r$ pivot unknowns are found by back substitution in terms of the other $n - r$, which remain free, and to every choice of values of the free unknowns there corresponds exactly one solution. Therefore the solution is unique if $r = n$, whereas if $r < n$ the solutions are infinitely many and depend on $n - r$ parameters.
:::
::::

:::richiamo{titolo="Elementary operations and equivalent systems"}
If $(A' \mid b')$ is obtained from $(A \mid b)$ by elementary row operations, then $A x = b$ and $A' x = b'$ have the same solutions.
:::

:::richiamo{titolo="Rank and reduction to echelon form"}
Elementary row operations do not change the rank. The rank of a matrix in echelon form is the number of its pivots.
:::

:::esempio{titolo="An inconsistent system"}
$$
\begin{cases}
x + y + z = 2 \\[4pt]
x - y + 3z = 0 \\[4pt]
2x + 4z = 1
\end{cases}
$$
The third row of $A$ is the sum of the first two, so $\det A = 0$, whereas the minor $\begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = -2$ is nonzero; therefore $\operatorname{rk} A = 2$. In the augmented matrix the bordered minor obtained with the third row and the column of constant terms equals
$$
\begin{vmatrix}
1 & 1 & 2 \\
1 & -1 & 0 \\
2 & 0 & 1
\end{vmatrix}
= -1 - 1 + 4 = 2 \neq 0,
$$
so $\operatorname{rk} (A \mid b) = 3 \neq \operatorname{rk} A$ and the system is **inconsistent**. The reason can also be read from the equations: the sum of the first two gives $2x + 4z = 2$, which contradicts the third.
:::

:::osservazione{#incognite-libere titolo="Choice of the free unknowns"}
When the common rank $r$ has been found with a nonzero minor $M$ of order $r$, the system is solved in three steps.

- Keep the $r$ equations corresponding to the rows of $M$; the others are consequences of these and are discarded.
- The unknowns corresponding to the columns of $M$ stay on the left, the other $n - r$ move to the right and become parameters.
- The resulting $r \times r$ system has determinant $M \neq 0$, so it has exactly one solution for each value of the parameters.

In the previous system, with the constant term of the third equation replaced by $2$, both ranks are $2$ and the solutions are $\infty^{3 - 2} = \infty^1$. The minor used involves the columns of $x$ and $y$, so $z = t$ is free; from the equations $x + y = 2 - t$ and $x - y = -3t$ one obtains $x = 1 - 2t$, $y = 1 + t$, and the solutions are $(1 - 2t, \, 1 + t, \, t)$ with $t \in \mathbb{R}$.
:::

## Cramer's rule

::::teorema{#regola-di-cramer titolo="Cramer's rule"}
Let $A x = b$ be a system of $n$ equations in $n$ unknowns with $\det A \neq 0$. Then the system has **exactly one solution**, given by
$$
x_j = \frac{\det A_j}{\det A}, \qquad j = 1, \dots, n,
$$
where $A_j$ is the matrix obtained from $A$ by replacing column $j$ with the column $b$ of constant terms. The rule gives each unknown as a ratio of determinants, without reducing to echelon form; it is convenient for $2 \times 2$ and $3 \times 3$ systems and when only one unknown is needed. The full computation requires $n + 1$ determinants of order $n$, therefore for $n \geq 4$ Gaussian elimination requires fewer operations.

:::dimostrazione
Since $\det A \neq 0$, the matrix $A$ is invertible and the system is equivalent to $x = A^{-1} b$, which is the unique solution. The inverse is written in terms of the cofactors $C_{ij}$ of the entries $a_{ij}$ as $(A^{-1})_{ji} = \dfrac{C_{ij}}{\det A}$, hence
$$
x_j = \sum_{i=1}^{n} (A^{-1})_{ji}\, b_i = \frac{1}{\det A} \sum_{i=1}^{n} b_i\, C_{ij} .
$$
On the other hand $A_j$ differs from $A$ only in column $j$, and the cofactors of the entries of that column do not depend on the column itself, so in $A_j$ they are still the $C_{ij}$. The Laplace expansion of $\det A_j$ along column $j$ therefore gives $\det A_j = \sum_{i} b_i\, C_{ij}$, and substituting yields the claim.
:::
::::

:::richiamo{titolo="Inverse via cofactors"}
If $A \in M_n(\mathbb{R})$ and $\det A \neq 0$, then $A$ is invertible and $(A^{-1})_{ji} = \dfrac{C_{ij}}{\det A}$, where $C_{ij}$ is the cofactor of $a_{ij}$.
:::

:::richiamo{titolo="Laplace expansion along a column"}
For every $A \in M_n(\mathbb{R})$ and every column $j$, $\det A = \sum_{i=1}^{n} a_{ij}\, C_{ij}$.
:::

:::esempio
$$
\begin{cases}
2x + y = 5 \\[4pt]
x - 3y = -1
\end{cases}
\qquad
\det A =
\begin{vmatrix}
2 & 1 \\
1 & -3
\end{vmatrix}
= -7 \neq 0
$$
$$
x = \frac{1}{-7}
\begin{vmatrix}
5 & 1 \\
-1 & -3
\end{vmatrix}
= \frac{-14}{-7} = 2,
\qquad
y = \frac{1}{-7}
\begin{vmatrix}
2 & 5 \\
1 & -1
\end{vmatrix}
= \frac{-7}{-7} = 1
$$
The solution is $(2, 1)$, as can be checked by substitution: $4 + 1 = 5$ and $2 - 3 = -1$.
:::

:::attenzione
The rule requires the hypothesis $\det A \neq 0$. If $\det A = 0$ the ratios are not defined and the system can be either inconsistent or underdetermined: the system formed by $x + y = 1$ and $2x + 2y = 3$ is inconsistent, whereas the one formed by $x + y = 1$ and $2x + 2y = 2$ has the infinitely many solutions $(1 - t, t)$. In both cases $\det A = 0$, and to decide one applies the **Rouché-Capelli theorem**.
:::

## Homogeneous systems and structure of the solutions

:::definizione{#sistema-omogeneo titolo="Homogeneous system"}
The system $A x = b$ is called **homogeneous** if $b = 0$, that is, if all the constant terms are zero. A homogeneous system is always consistent, because $x = 0$ is a solution, called the **trivial solution**. We denote by
$$
S_0 = \{ x \in \mathbb{R}^n : A x = 0 \}
$$
its solution set. Given any system $A x = b$, the system $A x = 0$ with the same coefficient matrix is called the **associated homogeneous system**.
:::

::::teorema{#soluzioni-non-banali titolo="Nontrivial solutions of a homogeneous system"}
Let $A \in M_{m,n}(\mathbb{R})$. The homogeneous system $A x = 0$ has solutions other than the trivial one if and only if $\operatorname{rk} A < n$; in that case the solutions are $\infty^{n - \operatorname{rk} A}$. If $A$ is square, this happens if and only if $\det A = 0$. In particular, a homogeneous system with more unknowns than equations, $n > m$, *always* has nontrivial solutions, since $\operatorname{rk} A \leq m < n$.

:::dimostrazione
Adding a zero column does not change the rank, because every minor that contains that column is zero; hence $\operatorname{rk} (A \mid 0) = \operatorname{rk} A$. By the Rouché-Capelli theorem the solution is unique, and then it is the trivial one, if and only if $\operatorname{rk} A = n$, whereas the solutions are $\infty^{n - \operatorname{rk} A}$ if $\operatorname{rk} A < n$. For $A$ square of order $n$ the condition $\operatorname{rk} A < n$ is equivalent to $\det A = 0$, by the properties of the rank.
:::
::::

:::osservazione{#spazio-delle-soluzioni-omogenee titolo="The solution space of a homogeneous system"}
If $u$ and $v$ are solutions of $A x = 0$ and $\alpha \in \mathbb{R}$, then $A(u + v) = Au + Av = 0$ and $A(\alpha u) = \alpha\, Au = 0$, so $S_0$ is closed under addition and scalar multiplication. Therefore $S_0$ is a **subspace** of $\mathbb{R}^n$, of dimension $n - \operatorname{rk} A$, and it is the kernel of the linear map $x \mapsto A x$; see the topics on vector spaces and linear maps. In computations the solutions are written as linear combinations of $n - \operatorname{rk} A$ vectors, one for each free parameter, and these vectors form a basis of $S_0$.
:::

:::esempio
$$
\begin{cases}
x + y - z = 0 \\[4pt]
2x - y + z = 0
\end{cases}
$$
Adding the two equations gives $3x = 0$, so $x = 0$, and the first gives $y = z$. Setting $z = t$, the solutions are
$$
S_0 = \{ t\,(0, 1, 1) : t \in \mathbb{R} \} = \langle (0, 1, 1) \rangle,
$$
in agreement with the theorem, since $\operatorname{rk} A = 2$ and the solutions are $\infty^{3 - 2} = \infty^1$.
:::

::::teorema{#struttura-delle-soluzioni titolo="Structure of the solutions"}
Let $A x = b$ be a consistent system, let $x_0$ be one of its solutions, called a **particular solution**, and let $S_0$ be the solution set of the associated homogeneous system. Then the solution set $S$ of $A x = b$ is
$$
S = x_0 + S_0 = \{ x_0 + y : y \in S_0 \} .
$$
Hence all the solutions are obtained from a single one, by adding the solutions of the associated homogeneous system. For this reason a consistent system has either one solution or infinitely many: it has as many solutions as $A x = 0$.

:::dimostrazione
Let $x \in S$. Then $A(x - x_0) = Ax - Ax_0 = b - b = 0$, so $y = x - x_0$ belongs to $S_0$ and $x = x_0 + y$. Conversely, if $y \in S_0$, then $A(x_0 + y) = A x_0 + A y = b + 0 = b$, so $x_0 + y \in S$. The two inclusions give the equality.
:::
::::

:::esempio
The system
$$
\begin{cases}
x + y - z = 1 \\[4pt]
2x - y + z = 2
\end{cases}
$$
has the same associated homogeneous system as the previous example. Adding the equations gives $3x = 3$, so $x = 1$ and $y = z$; the solutions are
$$
(1, t, t) = (1, 0, 0) + t\,(0, 1, 1), \qquad t \in \mathbb{R},
$$
that is, the particular solution $(1, 0, 0)$ plus the solutions of the homogeneous system. Geometrically $S_0$ is a line through the origin and $S$ is the parallel line through $(1, 0, 0)$. In the plane the same happens for a single equation in two unknowns, as the figure shows for $x - 2y = 2$.

::grafico{f="x/2-1;x/2" vettori="0,0,2,0,x₀;0,0,2,1,v" punti="2,0,pieno" etichette="3.4,0.3,S;-2.6,-0.75,S₀" xmin=-3 xmax=5 ymin=-3 ymax=2.5 uguale=1 titolo="The solutions of $x - 2y = 2$ (in color) form the line parallel to the line of solutions of $x - 2y = 0$ (dashed) through the particular solution $x_0 = (2, 0)$: $S = \{ (2, 0) + t\,(2, 1) : t \in \mathbb{R} \}$"}

:::

## Systems with a parameter

:::osservazione{#discussione-con-parametro titolo="Discussion of a system with a parameter"}
**Discussing** a system that depends on a real parameter $k$ means establishing, for each value of $k$, whether the system is consistent, how many solutions it has and what they are. For a square system, with $n$ equations in $n$ unknowns, the procedure has three steps.

- Compute $\det A$ as a function of $k$ and find its zeros.
- For the values of $k$ with $\det A \neq 0$ we have $\operatorname{rk} A = \operatorname{rk}(A \mid b) = n$, so the system is determined; the solution is found with Cramer's rule or with Gauss.
- For each of the values with $\det A = 0$, substitute the value into the system and apply the Rouché-Capelli theorem to the resulting numerical system.

If the system is not square, compute the ranks of $A$ and of $(A \mid b)$ as functions of $k$, with the bordered minors theorem or with reduction to echelon form.
:::

:::esempio{titolo="Complete discussion"}
$$
\begin{cases}
x + y + z = 1 \\[4pt]
-x + ky + z = 1 \\[4pt]
x + y + kz = 1
\end{cases}
\qquad
\det A =
\begin{vmatrix}
1 & 1 & 1 \\
-1 & k & 1 \\
1 & 1 & k
\end{vmatrix}
= (k^2 - 1) + (k + 1) + (-1 - k) = k^2 - 1
$$
The determinant vanishes for $k = 1$ and for $k = -1$.

- If $k \neq \pm 1$, the system is **determined**. Subtracting the first equation from the third gives $(k - 1) z = 0$, so $z = 0$ since $k \neq 1$; adding the first two leaves $(k + 1) y = 2$. The solution is
$$
\left( \frac{k - 1}{k + 1}, \ \frac{2}{k + 1}, \ 0 \right).
$$
- If $k = 1$, the third equation coincides with the first. The minor $\begin{vmatrix} 1 & 1 \\ -1 & 1 \end{vmatrix} = 2$ is nonzero, so $\operatorname{rk} A = \operatorname{rk} (A \mid b) = 2$ and the solutions are $\infty^1$. Subtracting the second equation from the first gives $2x = 0$, therefore the solutions are $(0, \, 1 - t, \, t)$ with $t \in \mathbb{R}$.
- If $k = -1$, the columns of $y$ and $z$ in the first two rows give the minor $\begin{vmatrix} 1 & 1 \\ -1 & 1 \end{vmatrix} = 2 \neq 0$, so $\operatorname{rk} A = 2$. Its bordered minor in the augmented matrix with the third row and the column of constant terms equals $\begin{vmatrix} 1 & 1 & 1 \\ -1 & 1 & 1 \\ 1 & -1 & 1 \end{vmatrix} = 4 \neq 0$, therefore $\operatorname{rk} (A \mid b) = 3$ and the system is **inconsistent**.
:::

:::attenzione
In the reduction, dividing by an expression that contains the parameter requires the expression to be nonzero, and the values that make it vanish must be studied separately. In the previous example the equation $(k - 1) z = 0$ gives $z = 0$ only for $k \neq 1$; for $k = 1$ it becomes $0 = 0$, which is satisfied by every $z$, and indeed for $k = 1$ the solutions have $z = t$ arbitrary. Likewise, $R_i \to (k - 1)\, R_i$ is an elementary operation only for $k \neq 1$.
:::

:::osservazione{#sistemi-sovradeterminati titolo="Systems with more equations than unknowns"}
If the system has $n + 1$ equations in $n$ unknowns, the augmented matrix $(A \mid b)$ is square of order $n + 1$, whereas $\operatorname{rk} A \leq n$. Hence if $\det (A \mid b) \neq 0$ then $\operatorname{rk} (A \mid b) = n + 1 > \operatorname{rk} A$ and the system is inconsistent. The condition $\det (A \mid b) = 0$ is therefore *necessary* for consistency, and the values of the parameter that satisfy it are studied one by one. For the system formed by $x + y = 1$, $x - y = 3$ and $x + 2y = k$ we have
$$
\det (A \mid b) =
\begin{vmatrix}
1 & 1 & 1 \\
1 & -1 & 3 \\
1 & 2 & k
\end{vmatrix}
= -2k,
$$
so the system can be consistent only for $k = 0$. For $k = 0$ the first two equations give $(2, -1)$, which also satisfies the third, and since $\operatorname{rk} A = 2$ this is the **unique solution**.

::grafico{f="1-x;x-3;-x/2" punti="2,-1,pieno" etichette="-1.9,3.4,x + y = 1;3.9,0.25,x − y = 3;-1.9,1.4,x + 2y = 0" xmin=-2 xmax=5 ymin=-3.5 ymax=4 uguale=1 titolo="For $k = 0$ the lines $x + y = 1$, $x - y = 3$ and $x + 2y = 0$ all pass through $(2, -1)$; for $k \neq 0$ the third line does not pass through that point and the system is inconsistent"}

:::
