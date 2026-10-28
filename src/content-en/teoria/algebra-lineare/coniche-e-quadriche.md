---
titolo: Conics and quadrics
sommario: How to write the matrix of a conic or a quadric, how to classify it with the invariants, and how to reduce it to canonical form with a rotation and a translation, using eigenvalues and eigenvectors.
---

## Ellipse, hyperbola and parabola

:::definizione{#conica titolo="Conic"}
A **conic** is the set of points $(x, y)$ of the plane that satisfy a second-degree equation
$$
a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0 ,
$$
with real coefficients and $a_{11}$, $a_{12}$, $a_{22}$ not all zero. The factors $2$ in front of the mixed and linear terms make it possible to write the associated matrix without fractions. The aim of this topic is to recognize from the equation *which* curve one is dealing with and *where* it lies, bringing it to one of the following canonical forms by a change of coordinates.
:::

:::osservazione{#forme-canoniche-coniche titolo="The canonical forms"}
Non-degenerate conics, in a suitable reference frame, have one of the following equations, already known from high-school analytic geometry.

- **Ellipse**: $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ with $a \geq b > 0$; it is the locus of points whose sum of distances from the foci $(\pm c, 0)$ equals $2a$, where $c^2 = a^2 - b^2$. The numbers $a$ and $b$ are the semi-axes; for $a = b$ one obtains the circle.
- **Hyperbola**: $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ with $a, b > 0$; it is the locus of points whose difference of distances from the foci $(\pm c, 0)$ equals $2a$ in absolute value, where $c^2 = a^2 + b^2$. The asymptotes are the lines $y = \pm \dfrac{b}{a}\, x$.
- **Parabola**: $y^2 = 2px$ with $p > 0$; it is the locus of points equidistant from the focus $\left( \dfrac{p}{2}, 0 \right)$ and from the directrix $x = -\dfrac{p}{2}$.

In canonical form the coordinate axes are axes of symmetry of the curve and, for the ellipse and the hyperbola, the origin is a center of symmetry.

::grafico{curve="3*cos(t),2*sin(t),0,6.29" punti="2.236,0,pieno,F₁;-2.236,0,pieno,F₂" xmin=-4 xmax=4 ymin=-3 ymax=3 uguale=1 titolo="The ellipse $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$, with semi-axes $3$ and $2$ and foci $(\pm\sqrt{5}, 0)$"}

::grafico{curve="2/cos(t),tan(t),-1.5,4.65" segmenti="-5,-2.5,5,2.5;-5,2.5,5,-2.5" punti="2.236,0,pieno,F₁;-2.236,0,pieno,F₂" xmin=-5 xmax=5 ymin=-3 ymax=3 uguale=1 titolo="The hyperbola $\dfrac{x^2}{4} - y^2 = 1$, with foci $(\pm\sqrt{5}, 0)$ and asymptotes $y = \pm\dfrac{x}{2}$ (dashed)"}

::grafico{curve="t^2/4,t,-4,4" asintoti="x=-1" punti="1,0,pieno,F" xmin=-2 xmax=5 ymin=-4 ymax=4 uguale=1 titolo="The parabola $y^2 = 4x$, that is, $p = 2$: focus $(1, 0)$ and directrix $x = -1$ (dashed)"}

:::

## The matrix associated with a conic

:::definizione{#matrice-associata-conica titolo="Matrix associated with a conic"}
The **associated matrix** of the conic with equation $a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0$ is the symmetric matrix of order $3$
$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{12} & a_{22} & a_{23} \\
a_{13} & a_{23} & a_{33}
\end{pmatrix} ,
\qquad
A_0 = \begin{pmatrix}
a_{11} & a_{12} \\
a_{12} & a_{22}
\end{pmatrix} ,
$$
where $A_0$ is the upper-left $2 \times 2$ block, which contains only the second-degree terms. With the row-by-column product the equation of the conic is written
$$
\begin{pmatrix} x & y & 1 \end{pmatrix} A \begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = 0 ,
$$
and this notation makes it possible to treat changes of coordinates as products of matrices. The matrix contains *half* the coefficients of $xy$, of $x$ and of $y$.
:::

:::esempio
For the conic $2x^2 - 4xy + 5y^2 + 2x - 6y + 1 = 0$ we have $a_{12} = -2$, $a_{13} = 1$, $a_{23} = -3$, hence
$$
A = \begin{pmatrix}
2 & -2 & 1 \\
-2 & 5 & -3 \\
1 & -3 & 1
\end{pmatrix} ,
\qquad
A_0 = \begin{pmatrix}
2 & -2 \\
-2 & 5
\end{pmatrix} .
$$
Expanding the product $\begin{pmatrix} x & y & 1 \end{pmatrix} A \begin{pmatrix} x & y & 1 \end{pmatrix}^T$ returns the original equation, and this is the quickest check on the matrix written.
:::

## Rigid motions and invariants

:::definizione{#rototraslazione titolo="Rigid motion"}
A **rigid motion** of the plane is a change of coordinates of the form
$$
\begin{pmatrix} x \\ y \end{pmatrix} = R \begin{pmatrix} X \\ Y \end{pmatrix} + \begin{pmatrix} x_0 \\ y_0 \end{pmatrix} ,
$$
with $R \in M_2(\mathbb{R})$ orthogonal ($R^T R = I_2$) and $\det R = 1$. The columns of $R$ are the unit vectors of the new axes $X$ and $Y$, and the point $(x_0, y_0)$ is the new origin. A rigid motion preserves distances and angles, so it transforms a curve into a **congruent** curve; the shape of the conic stays the same and only the equation describing it changes.
:::

:::osservazione{#matrice-dopo-rototraslazione titolo="The matrix after a rigid motion"}
Write $A$ and the matrix of the change of coordinates in block form, with $b = \begin{pmatrix} a_{13} \\ a_{23} \end{pmatrix}$ and $c = \begin{pmatrix} x_0 \\ y_0 \end{pmatrix}$:
$$
A = \begin{pmatrix} A_0 & b \\ b^T & a_{33} \end{pmatrix} ,
\qquad
T = \begin{pmatrix} R & c \\ 0 & 1 \end{pmatrix} ,
\qquad
\begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = T \begin{pmatrix} X \\ Y \\ 1 \end{pmatrix} .
$$
Substituting into the matrix form of the equation gives the matrix $A' = T^T A T$ of the conic in the new coordinates, and the block computation gives
$$
A' = \begin{pmatrix} R^T A_0 R & R^T (A_0 c + b) \\ (A_0 c + b)^T R & f(x_0, y_0) \end{pmatrix} ,
$$
where $f(x, y)$ denotes the left-hand side of the equation of the conic. The formula shows the effect of the two parts separately: the rotation $R$ acts on the block $A_0$, the translation $c$ modifies the linear terms and the constant term.
:::

::::teorema{#invarianti-ortogonali titolo="Orthogonal invariants"}
Let $A$ be the matrix of a conic and let $A'$ be the matrix of the same conic after a rigid motion. Then
$$
\begin{cases}
\det A' = \det A \\[4pt]
\det A'_0 = \det A_0 \\[4pt]
\operatorname{tr} A'_0 = \operatorname{tr} A_0
\end{cases}
$$
The three numbers $I_3 = \det A$, $I_2 = \det A_0$ and $I_1 = \operatorname{tr} A_0$ are called the **orthogonal invariants** of the conic. Since they do not depend on the reference frame, they can be computed on the given equation and compared with those of the canonical form: the classification and the direct computation of the canonical form are based on this.

:::dimostrazione
The matrix $T$ is block triangular, hence $\det T = \det R \cdot 1 = 1$. By **Binet's theorem**
$$
\det A' = \det T^T \cdot \det A \cdot \det T = \det A .
$$
The $2 \times 2$ block of $A'$ is $A'_0 = R^T A_0 R$, and since $R$ is orthogonal we have $R^T = R^{-1}$, hence $A'_0 = R^{-1} A_0 R$ is similar to $A_0$. Similar matrices have the same characteristic polynomial, therefore they have the same determinant and the same trace.
:::
::::

:::richiamo{titolo="Binet's theorem"}
If $A, B \in M_n(\mathbb{R})$, then $\det(AB) = \det A \cdot \det B$.
:::

:::richiamo{titolo="Similar matrices"}
If $B = P^{-1} A P$ with $P$ invertible, then $p_B(\lambda) = p_A(\lambda)$, hence $\det B = \det A$ and $\operatorname{tr} B = \operatorname{tr} A$.
:::

## Reduction to canonical form

::::teorema{#forma-canonica-a-centro titolo="Canonical form of central conics"}
Let a conic be given with invariants $I_3$ and $I_2 \neq 0$, and let $\lambda_1, \lambda_2$ be the eigenvalues of $A_0$. Then there exists a rigid motion that transforms the equation of the conic into
$$
\lambda_1 X^2 + \lambda_2 Y^2 + \frac{I_3}{I_2} = 0 .
$$
The rotation has as columns eigenvectors of $A_0$ of norm $1$; the translation moves the origin to the point $(x_0, y_0)$ that solves $A_0 c = -b$, called the **center** of the conic. The theorem gives the canonical form by computing only the invariants and the eigenvalues, without carrying out the substitution.

:::dimostrazione
The matrix $A_0$ is symmetric, so by the **spectral theorem** there exists an orthonormal basis of $\mathbb{R}^2$ consisting of eigenvectors $u_1, u_2$ of $A_0$, associated with $\lambda_1$ and $\lambda_2$. The matrix $R$ with columns $u_1$ and $u_2$ is orthogonal and has determinant $\pm 1$; if it equals $-1$, replace $u_2$ with $-u_2$, which is still an eigenvector. Then $R^T A_0 R$ is the diagonal matrix with entries $\lambda_1$ and $\lambda_2$.

Since $\det A_0 = I_2 \neq 0$, the system $A_0 c = -b$ has a unique solution $c$. With these choices of $R$ and $c$ the formula for the matrix after a rigid motion gives
$$
A' = \begin{pmatrix}
\lambda_1 & 0 & 0 \\
0 & \lambda_2 & 0 \\
0 & 0 & f(x_0, y_0)
\end{pmatrix} ,
$$
so the equation in the new coordinates is $\lambda_1 X^2 + \lambda_2 Y^2 + f(x_0, y_0) = 0$. By the invariance of the determinant $I_3 = \det A' = \lambda_1 \lambda_2\, f(x_0, y_0) = I_2\, f(x_0, y_0)$, therefore $f(x_0, y_0) = \dfrac{I_3}{I_2}$.
:::
::::

:::richiamo{titolo="Spectral theorem"}
If $A_0 \in M_n(\mathbb{R})$ is symmetric, there exists an orthonormal basis of $\mathbb{R}^n$ consisting of eigenvectors of $A_0$; the matrix $R$ that has these vectors as columns is orthogonal and $R^T A_0 R$ is diagonal.
:::

::::teorema{#forma-canonica-parabola titolo="Canonical form of the parabola"}
Let a conic be given with $I_2 = 0$ and $I_3 \neq 0$. Then $I_1 \neq 0$ and there exists a rigid motion that transforms the equation into
$$
Y^2 = 2pX ,
\qquad
p = \sqrt{-\frac{I_3}{I_1^3}} ,
$$
that is, the conic is a **parabola**. The parameter $p$ is obtained from the invariants alone; the position of the vertex and of the axis instead requires the computation in coordinates, described in the section on the parabola.

:::dimostrazione
Since $\det A_0 = 0$ and $A_0$ is not zero, the eigenvalues of $A_0$ are $0$ and $I_1 \neq 0$. A rotation with columns $u_1 \in V_0$ and $u_2 \in V_{I_1}$ of norm $1$ brings the equation to the form $I_1 Y^2 + 2\beta X + 2\gamma Y + \delta = 0$, with matrix
$$
\begin{pmatrix}
0 & 0 & \beta \\
0 & I_1 & \gamma \\
\beta & \gamma & \delta
\end{pmatrix} ,
\qquad
\det = -I_1 \beta^2 .
$$
By invariance $-I_1\beta^2 = I_3 \neq 0$, hence $\beta \neq 0$ and $\beta^2 = -\dfrac{I_3}{I_1}$. Completing the square in $Y$ and factoring out $2\beta$ in the remaining terms, a translation brings the equation to $I_1 Y^2 + 2\beta X = 0$, that is, $Y^2 = -\dfrac{2\beta}{I_1}\, X$. Up to a rotation through a straight angle, which changes the sign of $X$ and of $Y$, the coefficient is positive and equals
$$
2p = \frac{2|\beta|}{|I_1|} ,
\qquad
p = \frac{1}{|I_1|} \sqrt{-\frac{I_3}{I_1}} = \sqrt{-\frac{I_3}{I_1^3}} .
$$
:::
::::

:::osservazione{#procedura-riduzione titolo="Reduction procedure"}
To reduce a conic to canonical form and draw it in the original plane, proceed as follows.

- Write $A$ and $A_0$ and compute $I_1$, $I_2$, $I_3$.
- Compute the eigenvalues of $A_0$ and, for each one, an eigenvector of norm $1$; with them form $R$, with $\det R = 1$.
- If $I_2 \neq 0$, solve the system of the center and write $\lambda_1 X^2 + \lambda_2 Y^2 + \dfrac{I_3}{I_2} = 0$; dividing by $-\dfrac{I_3}{I_2}$ the semi-axes can be read off.
- If $I_2 = 0$, write $Y^2 = 2pX$ and determine the axis and the vertex.

The new $X$-axis is the line through the center (or through the vertex) with the direction of $u_1$; the new $Y$-axis has the direction of $u_2$.
:::

:::esempio{titolo="A rotated and translated ellipse"}
Let $5x^2 - 4xy + 8y^2 - 2x - 28y - 7 = 0$. We have
$$
A = \begin{pmatrix}
5 & -2 & -1 \\
-2 & 8 & -14 \\
-1 & -14 & -7
\end{pmatrix} ,
\qquad
I_3 = -1296 ,
\qquad
I_2 = 36 ,
\qquad
I_1 = 13 .
$$
The characteristic polynomial of $A_0$ is $\lambda^2 - 13\lambda + 36 = (\lambda - 4)(\lambda - 9)$; the eigenspaces are $V_4 = \langle (2, 1) \rangle$ and $V_9 = \langle (-1, 2) \rangle$. The system of the center $5x - 2y - 1 = 0$, $-2x + 8y - 14 = 0$ gives $(1, 2)$, and $\dfrac{I_3}{I_2} = -36$. Hence the rigid motion
$$
\begin{pmatrix} x \\ y \end{pmatrix}
= \frac{1}{\sqrt{5}} \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} X \\ Y \end{pmatrix}
+ \begin{pmatrix} 1 \\ 2 \end{pmatrix}
$$
brings the conic to $4X^2 + 9Y^2 = 36$, that is, to the **ellipse** $\dfrac{X^2}{9} + \dfrac{Y^2}{4} = 1$, with semi-major axis $3$ along the line $x - 2y + 3 = 0$ and semi-minor axis $2$ along the line $2x + y - 4 = 0$.

::grafico{curve="1+(6*cos(t)-2*sin(t))/sqrt(5),2+(3*cos(t)+4*sin(t))/sqrt(5),0,6.29" segmenti="-2.13,0.43,4.13,3.57;0.105,3.79,1.895,0.21" vettori="1,2,1.894,2.447;1,2,0.553,2.894" etichette="1.55,1.95,u₁;0.3,2.45,u₂" punti="1,2,pieno" xmin=-2.5 xmax=4.5 ymin=-1 ymax=5 uguale=1 titolo="The ellipse $5x^2 - 4xy + 8y^2 - 2x - 28y - 7 = 0$: center $(1, 2)$, axes of symmetry (dashed) in the directions of the eigenvectors $u_1 = \dfrac{(2, 1)}{\sqrt{5}}$ and $u_2 = \dfrac{(-1, 2)}{\sqrt{5}}$"}

:::

## Classification of conics

:::definizione{#conica-degenere titolo="Degenerate conic"}
A conic is called **degenerate** if $I_3 = \det A = 0$, **non-degenerate** if $\det A \neq 0$. Degenerate conics are unions of two lines, real or complex; non-degenerate ones are ellipses, hyperbolas and parabolas. The determinant of the $3 \times 3$ matrix is therefore the first number to compute.
:::

::::teorema{#classificazione-coniche titolo="Classification of non-degenerate conics"}
Let a conic be given with $I_3 \neq 0$.

- If $I_2 > 0$, the conic is an **ellipse**: real if $I_1 \cdot I_3 < 0$, imaginary (with no real points) if $I_1 \cdot I_3 > 0$.
- If $I_2 < 0$, the conic is a **hyperbola**.
- If $I_2 = 0$, the conic is a **parabola**.

The criterion uses only the determinants and the trace, so it recognizes the conic without reducing it. For $2x^2 - 4xy + 5y^2 + 2x - 6y + 1 = 0$ we have $I_3 = -5$, $I_2 = 6 > 0$ and $I_1 \cdot I_3 = 7 \cdot (-5) < 0$, so the conic is a **real ellipse**.

:::dimostrazione
If $I_2 \neq 0$, by the canonical form of central conics the conic has equation $\lambda_1 X^2 + \lambda_2 Y^2 = -\dfrac{I_3}{I_2}$, with $\lambda_1 \lambda_2 = I_2$ and nonzero right-hand side.

If $I_2 > 0$, the eigenvalues have the same sign, which is the sign of their sum $I_1$, so the left-hand side has the sign of $I_1$ or is zero. There are real points if and only if $-\dfrac{I_3}{I_2}$ has the sign of $I_1$, that is, since $I_2 > 0$, if and only if $I_1 I_3 < 0$; in this case, dividing by the right-hand side, we obtain $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = 1$.

If $I_2 < 0$, the eigenvalues have opposite signs; dividing by the right-hand side, the coefficients of $X^2$ and $Y^2$ turn out one positive and one negative, and we obtain a hyperbola with transverse axis $X$ or $Y$.

If $I_2 = 0$, the claim is the canonical form of the parabola.
:::
::::

:::osservazione{#circonferenza-iperbole-equilatera titolo="Circles and rectangular hyperbolas"}
Two special cases can be read directly off the coefficients.

- An ellipse is a **circle** if and only if $\lambda_1 = \lambda_2$, that is, if $A_0$ is a multiple of the identity: $a_{11} = a_{22}$ and $a_{12} = 0$.
- A hyperbola is **rectangular** (perpendicular asymptotes, $a = b$) if and only if $\lambda_1 = -\lambda_2$, that is, if $I_1 = a_{11} + a_{22} = 0$.

For example $3x^2 - 8xy - 3y^2 + 2x + 14y - 13 = 0$ has $I_3 = 125 \neq 0$, $I_2 = -25 < 0$ and $I_1 = 0$, so it is a rectangular hyperbola.
:::

## Center, axes and asymptotes

:::definizione{#centro-conica titolo="Center of a conic"}
A point $C$ is a **center** of a conic if the conic is symmetric with respect to $C$. If $I_2 \neq 0$ the conic has a unique center $(x_0, y_0)$, the solution of the system
$$
\begin{cases}
a_{11}x + a_{12}y + a_{13} = 0 \\[4pt]
a_{12}x + a_{22}y + a_{23} = 0
\end{cases}
$$
that is, of $A_0 c = -b$. Indeed, translating the origin to $(x_0, y_0)$, the formula for the matrix after a rigid motion with $R$ equal to the identity matrix shows that the linear terms vanish; the equation then contains only terms of degree $2$ and $0$, and is unchanged by the symmetry $(X, Y) \mapsto (-X, -Y)$. For this reason ellipses and hyperbolas are called **central conics**, while the parabola ($I_2 = 0$) has no center.
:::

:::osservazione{#assi-di-simmetria titolo="Axes of symmetry"}
The axes of an ellipse that is not a circle, or of a hyperbola, are the lines through the center parallel to the eigenvectors of $A_0$. In the canonical form they are the $X$ and $Y$ axes, and the rigid motion carries them back to the original plane. If $(l, m)$ is an eigenvector, the axis has equation $m(x - x_0) - l(y - y_0) = 0$. In the canonical form $\lambda_1 X^2 + \lambda_2 Y^2 = -\dfrac{I_3}{I_2}$ the square of the semi-axis on the axis associated with $\lambda_i$ equals $-\dfrac{I_3}{I_2 \lambda_i}$, so in the ellipse the axis associated with the eigenvalue of *smaller* absolute value is the major axis. In the hyperbola the transverse axis, which contains the vertices, is the one associated with the eigenvalue having the same sign as $-\dfrac{I_3}{I_2}$.
:::

:::osservazione{#asintoti-iperbole titolo="Asymptotes of a hyperbola"}
The asymptotes of a hyperbola with center $(x_0, y_0)$ are the lines through the center with direction $(l, m)$ such that
$$
a_{11}l^2 + 2a_{12}lm + a_{22}m^2 = 0 ,
$$
that is, the directions on which the second-degree part vanishes. Equivalently, the pair of asymptotes has equation $f(x, y) - f(x_0, y_0) = 0$, a degenerate conic with the same center and the same second-degree terms. In canonical form this rule gives $\lambda_1 X^2 + \lambda_2 Y^2 = 0$, that is, the lines $Y = \pm \sqrt{-\dfrac{\lambda_1}{\lambda_2}}\, X$, which are the asymptotes $Y = \pm \dfrac{b}{a}\, X$ of the canonical form.
:::

:::esempio{titolo="A rectangular hyperbola"}
The conic $xy - 1 = 0$ has $a_{12} = \dfrac{1}{2}$ and all other coefficients zero except $a_{33} = -1$, hence $I_3 = \dfrac{1}{4}$, $I_2 = -\dfrac{1}{4}$, $I_1 = 0$, therefore it is a **rectangular hyperbola**. The center is the origin. The eigenvalues of $A_0$ are $\pm \dfrac{1}{2}$, with eigenvectors $(1, 1)$ and $(-1, 1)$, so the axes are the bisectors $y = x$ and $y = -x$. Since $\dfrac{I_3}{I_2} = -1$, the canonical form is
$$
\frac{1}{2}X^2 - \frac{1}{2}Y^2 = 1 ,
\qquad
\frac{X^2}{2} - \frac{Y^2}{2} = 1 ,
$$
with semi-axes $\sqrt{2}$. The condition for the asymptotes is $lm = 0$, so the asymptotes are the coordinate axes.

::grafico{f="1/x" segmenti="-3.2,-3.2,3.2,3.2;-3.2,3.2,3.2,-3.2" punti="1,1,pieno;-1,-1,pieno" xmin=-4 xmax=4 ymin=-3.5 ymax=3.5 uguale=1 titolo="The rectangular hyperbola $xy = 1$: transverse axis $y = x$ and axis $y = -x$ (dashed), vertices $(1, 1)$ and $(-1, -1)$, asymptotes the coordinate axes"}

:::

## Axis and vertex of the parabola

:::osservazione{#asse-e-vertice-parabola titolo="Axis and vertex of a parabola"}
If $I_2 = 0$, the second-degree part is a square and, up to multiplying the equation by $-1$, we have $a_{11}x^2 + 2a_{12}xy + a_{22}y^2 = (\alpha x + \beta y)^2$. Rewrite the equation in the form
$$
(\alpha x + \beta y + t)^2 = \gamma x + \delta y + \varepsilon ,
$$
with $t$ chosen so that the lines $\alpha x + \beta y + t = 0$ and $\gamma x + \delta y + \varepsilon = 0$ are perpendicular, that is, $\alpha\gamma + \beta\delta = 0$. Then the first line is the **axis** of the parabola, the second is the tangent at the vertex, and the **vertex** is their intersection. The reason is that the signed distances from the two lines,
$$
Y = \frac{\alpha x + \beta y + t}{\sqrt{\alpha^2 + \beta^2}} ,
\qquad
X = \frac{\gamma x + \delta y + \varepsilon}{\sqrt{\gamma^2 + \delta^2}} ,
$$
are coordinates in a new orthogonal Cartesian reference frame, in which the equation becomes $(\alpha^2 + \beta^2)\, Y^2 = \sqrt{\gamma^2 + \delta^2}\; X$, that is, $Y^2 = 2pX$.
:::

:::esempio{titolo="A parabola with its axis on the bisector"}
Let $x^2 - 2xy + y^2 - 4x - 4y = 0$. We have $I_2 = 0$, $I_1 = 2$ and $I_3 = -16$, so it is a **parabola** with $p = \sqrt{\dfrac{16}{8}} = \sqrt{2}$. The second-degree part is $(x - y)^2$, and the equation can already be written
$$
(x - y)^2 = 4x + 4y ,
$$
with the lines $x - y = 0$ and $x + y = 0$ perpendicular, since $1 \cdot 4 + (-1) \cdot 4 = 0$; therefore $t = 0$. The axis is the line $y = x$, the tangent at the vertex is $y = -x$ and the vertex is the origin. With $X = \dfrac{x + y}{\sqrt{2}}$ and $Y = \dfrac{x - y}{\sqrt{2}}$ the equation becomes $2Y^2 = 4\sqrt{2}\, X$, that is, $Y^2 = 2\sqrt{2}\, X$, in agreement with the value of $p$ obtained from the invariants.

::grafico{curve="t^2/2+t,t^2/2-t,-5,5" segmenti="-1.5,-1.5,6.5,6.5;-2,2,2,-2" punti="0,0,pieno,V;4,0,pieno;0,4,pieno" xmin=-2.5 xmax=7 ymin=-2.5 ymax=7 uguale=1 titolo="The parabola $(x - y)^2 = 4(x + y)$: axis $y = x$, tangent at the vertex $y = -x$ (dashed) and vertex at the origin"}

:::

## Degenerate conics and conics with a parameter

::::teorema{#coniche-degeneri titolo="Classification of degenerate conics"}
Let a conic be given with $I_3 = 0$.

- If $I_2 < 0$, the conic is the union of **two real lines intersecting** at the center.
- If $I_2 > 0$, the conic is the union of two complex conjugate lines, intersecting at the center, which is its *only* real point.
- If $I_2 = 0$, the conic is the union of **two parallel lines**, real and distinct, complex conjugate, or coincident; they are coincident if and only if $\operatorname{rk} A = 1$.

To write the two lines, factor the polynomial, for example by solving the equation as a second-degree equation in one of the two variables, whose discriminant turns out to be a perfect square.

:::dimostrazione
If $I_2 \neq 0$, the canonical form is $\lambda_1 X^2 + \lambda_2 Y^2 = 0$. With eigenvalues of opposite signs the left-hand side factors as $\left( \sqrt{|\lambda_1|}\, X - \sqrt{|\lambda_2|}\, Y \right)\left( \sqrt{|\lambda_1|}\, X + \sqrt{|\lambda_2|}\, Y \right)$, a product of two real linear factors; with eigenvalues of the same sign the only real solution is $X = Y = 0$. If $I_2 = 0$, with the rotation used for the parabola the equation becomes $I_1 Y^2 + 2\beta X + 2\gamma Y + \delta = 0$ with $-I_1 \beta^2 = I_3 = 0$, hence $\beta = 0$ and the equation $I_1 Y^2 + 2\gamma Y + \delta = 0$ contains only $Y$; its two roots, real and distinct, coincident, or complex, give two lines $Y = \text{constant}$.
:::
::::

:::esempio{titolo="Two intersecting lines"}
The conic $x^2 - y^2 + 2x + 4y - 3 = 0$ has
$$
A = \begin{pmatrix}
1 & 0 & 1 \\
0 & -1 & 2 \\
1 & 2 & -3
\end{pmatrix} ,
\qquad
I_3 = 0 ,
\qquad
I_2 = -1 < 0 ,
$$
so it consists of two real intersecting lines. Completing the squares gives $(x + 1)^2 - (y - 2)^2 = 0$, and the difference of squares factors as
$$
(x - y + 3)(x + y - 1) = 0 .
$$
The two lines meet at the center $(-1, 2)$.

::grafico{f="x+3;1-x" punti="-1,2,pieno" xmin=-5 xmax=3 ymin=-2 ymax=5 uguale=1 titolo="The degenerate conic $x^2 - y^2 + 2x + 4y - 3 = 0$: the lines $x - y + 3 = 0$ (in color) and $x + y - 1 = 0$ (dashed), intersecting at the center $(-1, 2)$"}

:::

:::osservazione{#coniche-con-parametro titolo="Conics with a parameter"}
When the equation depends on a parameter $k$, the invariants $I_3(k)$, $I_2(k)$ and $I_1(k)$ are polynomials in $k$. One finds the zeros of $I_3(k)$, which give the degenerate conics, and the study of the sign of $I_2(k)$ separates ellipses, parabolas and hyperbolas; for the values with $I_2 > 0$ the sign of $I_1 I_3$ distinguishes real ellipses from imaginary ones. The degenerate values of $k$ are studied separately, by substituting them into the equation.
:::

:::esempio
For $x^2 + 2kxy + y^2 - 1 = 0$ we have
$$
I_3 = k^2 - 1 ,
\qquad
I_2 = 1 - k^2 ,
\qquad
I_1 = 2 .
$$
For $k = \pm 1$ the conic is degenerate and the equation becomes $(x \pm y)^2 = 1$, that is, the two parallel lines $x \pm y = 1$ and $x \pm y = -1$. For $|k| < 1$ we have $I_2 > 0$ and $I_1 I_3 = 2(k^2 - 1) < 0$, hence a **real ellipse**, which for $k = 0$ is the circle $x^2 + y^2 = 1$. For $|k| > 1$ we have $I_2 < 0$, hence a **hyperbola**.
:::

## Quadrics and their matrix

:::definizione{#quadrica titolo="Quadric and associated matrix"}
A **quadric** is the set of points $(x, y, z)$ in space that satisfy a second-degree equation
$$
\begin{aligned}
&a_{11}x^2 + a_{22}y^2 + a_{33}z^2 + 2a_{12}xy + 2a_{13}xz + 2a_{23}yz \\[4pt]
&\quad + 2a_{14}x + 2a_{24}y + 2a_{34}z + a_{44} = 0 .
\end{aligned}
$$
As for conics, the **associated matrix** is the symmetric matrix $A = (a_{ij})$ of order $4$, and $A_0$ is the $3 \times 3$ block of the second-degree terms:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} & a_{14} \\
a_{12} & a_{22} & a_{23} & a_{24} \\
a_{13} & a_{23} & a_{33} & a_{34} \\
a_{14} & a_{24} & a_{34} & a_{44}
\end{pmatrix} .
$$
The quadric is called **degenerate** if $\det A = 0$. The invariants under rigid motions of space are $\det A$ and the eigenvalues of $A_0$, with the same proof as in the case of conics.
:::

:::teorema{#forma-canonica-quadriche titolo="Canonical form of quadrics"}
Let a quadric be given with matrix $A$ and let $\lambda_1, \lambda_2, \lambda_3$ be the eigenvalues of $A_0$.

- If $\det A_0 \neq 0$, the quadric has a unique center, the solution of $A_0 c = -b$ with $b = (a_{14}, a_{24}, a_{34})^T$, and a rigid motion brings it to $\lambda_1 X^2 + \lambda_2 Y^2 + \lambda_3 Z^2 + \dfrac{\det A}{\det A_0} = 0$.
- If $\det A_0 = 0$ and $\det A \neq 0$, then $\operatorname{rk} A_0 = 2$ and, denoting by $\lambda_1, \lambda_2$ the nonzero eigenvalues, a rigid motion brings it to $\lambda_1 X^2 + \lambda_2 Y^2 = 2qZ$, with $q^2 = -\dfrac{\det A}{\lambda_1 \lambda_2}$.

The proof repeats the one for conics with the rigid-motion matrix of order $4$: the rotation diagonalizes $A_0$ by the spectral theorem and the translation eliminates the linear terms that can be eliminated. The second case follows from the computation $\det A' = -\lambda_1 \lambda_2\, q^2$ for the matrix of the form $\lambda_1 X^2 + \lambda_2 Y^2 - 2qZ = 0$.
:::

## Classification of quadrics

:::definizione{#quadriche-non-degeneri titolo="Non-degenerate quadrics"}
The non-degenerate quadrics, in canonical form with $a, b, c > 0$, are the following.

- **Ellipsoid**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} + \dfrac{Z^2}{c^2} = 1$; the sections by planes parallel to the coordinate planes are ellipses, or a single point or the empty set for the planes farther from the center. If two semi-axes are equal it is an ellipsoid of revolution, if all three are equal it is a sphere.
- **Hyperboloid of one sheet**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} - \dfrac{Z^2}{c^2} = 1$; the sections with $Z = \text{constant}$ are ellipses, those with $X = 0$ or $Y = 0$ are hyperbolas. It is a connected surface.
- **Hyperboloid of two sheets**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} - \dfrac{Z^2}{c^2} = -1$; it has no points with $|Z| < c$, so it consists of two separate parts.
- **Elliptic paraboloid**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = 2Z$; the sections with $Z = \text{constant} > 0$ are ellipses.
- **Hyperbolic paraboloid** (saddle): $\dfrac{X^2}{a^2} - \dfrac{Y^2}{b^2} = 2Z$; the sections with $X = 0$ and with $Y = 0$ are parabolas opening in opposite directions.

There is also the imaginary ellipsoid $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} + \dfrac{Z^2}{c^2} = -1$, with no real points.

::grafico{curve="1/cos(t),tan(t),-1.5,4.65;tan(t),1/cos(t),-1.5,4.65" segmenti="-3.5,-3.5,3.5,3.5;-3.5,3.5,3.5,-3.5" nomi="x,z" xmin=-4 xmax=4 ymin=-3.5 ymax=3.5 uguale=1 titolo="Sections by the plane $y = 0$: the hyperbola $x^2 - z^2 = 1$ of the hyperboloid of one sheet $x^2 + y^2 - z^2 = 1$ (in color) and the hyperbola $z^2 - x^2 = 1$ of the hyperboloid of two sheets $x^2 + y^2 - z^2 = -1$ (dashed); the lines $z = \pm x$ are the section of the cone $x^2 + y^2 = z^2$"}

::grafico{f="x^2/2;-x^2/2" nomi="x,z" xmin=-3 xmax=3 ymin=-3.5 ymax=3.5 uguale=1 titolo="The hyperbolic paraboloid $x^2 - y^2 = 2z$: the section with $y = 0$ is the parabola $z = \dfrac{x^2}{2}$ (in color), the section with $x = 0$ is the parabola $z = -\dfrac{y^2}{2}$ (dashed, with $y$ on the horizontal axis)"}

:::

:::definizione{#coni-e-cilindri titolo="Cones and cylinders"}
The degenerate quadrics with $\operatorname{rk} A = 3$ are cones and cylinders.

- **Cone**, if $\det A_0 \neq 0$: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} - \dfrac{Z^2}{c^2} = 0$, with vertex at the center. If the eigenvalues of $A_0$ have the same sign, the equation $\lambda_1 X^2 + \lambda_2 Y^2 + \lambda_3 Z^2 = 0$ has the vertex as its only real point.
- **Cylinder**, if $\det A_0 = 0$: the canonical equation does not contain $Z$ and is that of a conic in the $XY$ plane, so the cylinder is **elliptic** $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = 1$, **hyperbolic** $\dfrac{X^2}{a^2} - \dfrac{Y^2}{b^2} = 1$ or **parabolic** $Y^2 = 2pX$, or it is the imaginary cylinder $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = -1$, with no real points.

If $\operatorname{rk} A \leq 2$, the quadric is a pair of planes, real or complex, distinct or coincident.
:::

::::teorema{#riconoscimento-quadriche titolo="Recognition of non-degenerate quadrics"}
Let a quadric be given with $\det A \neq 0$.

- If $\det A_0 \neq 0$ and the eigenvalues of $A_0$ have the same sign, the quadric is an **ellipsoid**: real if $\det A < 0$, imaginary if $\det A > 0$.
- If $\det A_0 \neq 0$ and the eigenvalues of $A_0$ do not all have the same sign, the quadric is a **hyperboloid**: of one sheet if $\det A > 0$, of two sheets if $\det A < 0$.
- If $\det A_0 = 0$, the quadric is a **paraboloid**: elliptic if $\det A < 0$, hyperbolic if $\det A > 0$.

The sign of $\det A$ and the signs of the eigenvalues are therefore enough to recognize the quadric. For $x^2 + 2y^2 + 2yz + 2z^2 - 4 = 0$ the eigenvalues of $A_0$ are $1, 1, 3$, all of the same sign, and $\det A = 3 \cdot (-4) = -12 < 0$, so the canonical form is $X^2 + Y^2 + 3Z^2 = 4$, a **real ellipsoid** of revolution.

:::dimostrazione
If $\det A_0 \neq 0$, the canonical form is $\lambda_1 X^2 + \lambda_2 Y^2 + \lambda_3 Z^2 = -h$ with $h = \dfrac{\det A}{\det A_0}$, hence $\det A = \lambda_1 \lambda_2 \lambda_3\, h$. Changing the sign of the whole equation, which does not change the sign of $\det A$ because $A$ has order $4$, we may assume that at least two eigenvalues are positive. With three positive eigenvalues, $\det A < 0$ is equivalent to $h < 0$, that is, to a positive right-hand side, hence to a real ellipsoid; $\det A > 0$ gives a negative right-hand side and no real points. With $\lambda_1, \lambda_2 > 0 > \lambda_3$, $\det A > 0$ is equivalent to $h < 0$, that is, to $\lambda_1 X^2 + \lambda_2 Y^2 - |\lambda_3| Z^2 = |h| > 0$, which is a hyperboloid of one sheet; $\det A < 0$ gives a negative right-hand side, hence a hyperboloid of two sheets. If $\det A_0 = 0$, from the canonical form $\det A = -\lambda_1 \lambda_2\, q^2$, so $\det A < 0$ is equivalent to $\lambda_1 \lambda_2 > 0$, elliptic paraboloid, and $\det A > 0$ to $\lambda_1 \lambda_2 < 0$, hyperbolic paraboloid.
:::
::::
