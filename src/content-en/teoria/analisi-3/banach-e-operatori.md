---
titolo: "Banach spaces and linear operators"
sommario: "Completeness, operator norms, dual spaces, fixed points, the Baire category theorem, uniform boundedness, the open mapping theorem, the Hahn–Banach theorem, and compactness."
---

## Normed spaces and completeness

:::definizione{#banach titolo="Banach space"}
A norm on a real or complex vector space is nonnegative, vanishes only at the zero vector, is absolutely homogeneous, and satisfies the triangle inequality. A sequence $(x_n)$ is Cauchy if, for every $\varepsilon>0$, we have $\|x_n-x_m\|<\varepsilon$ for all sufficiently large $n,m$. A normed space in which every Cauchy sequence converges is a **Banach space**.

The spaces $\mathbb R^d$, $L^p$ for $1\le p\le\infty$, and $C([a,b])$ with the supremum norm are Banach spaces. The space of polynomials with the supremum norm on $[0,1]$ is incomplete. The Taylor polynomials of the exponential function form a Cauchy sequence but converge uniformly to a function that is not a polynomial.
:::

:::esempio{titolo="Two norms on the plane"}
In the plane, the Euclidean norm of $(x,y)$ is its distance from the origin, while the maximum norm is the larger of the absolute values of its two coordinates. The Euclidean unit ball is a disk. For the maximum norm, the conditions $|x|\le1$ and $|y|\le1$ describe a square. The vector $(1,1)$ has maximum norm one and Euclidean norm $\sqrt{2}$. In general,
$$
\|(x,y)\|_\infty\le\|(x,y)\|_2\le\sqrt{2}\|(x,y)\|_\infty.
$$
A sequence that is Cauchy in either norm is Cauchy in the other, since each distance is bounded by a fixed multiple of the other. The two bounds are independent of the sequence, so completeness carries over from one norm to the other.

::grafico{curve="cos(t),sin(t),0,6.283185" linee="-1,-1 1,-1 1,1 -1,1 -1,-1" punti="1,1,pieno,P" uguale=1 xmin=-1.45 xmax=1.65 ymin=-1.45 ymax=1.55 titolo="The Euclidean disk is inscribed in the square that forms the unit ball for the maximum norm"}
:::

:::esempio{titolo="A Cauchy sequence whose limit lies outside the polynomial space"}
Let $p_n(x)=\sum_{k=0}^n \dfrac{x^k}{k!}$ on $[0,1]$. The difference between two partial sums is bounded by the corresponding tail of $\sum_k\dfrac{1}{k!}$, since $x^k\le1$ throughout the interval. The bound holds at every point simultaneously, so the partial sums are Cauchy in the supremum norm. Their limit in the larger space $C([0,1])$ is $e^x$. If the limit were a polynomial of degree $d$, its derivative of order $d+1$ would vanish throughout the interior of the interval, whereas the same derivative of $e^x$ is again $e^x$. This example shows why one must check that the limit belongs to the chosen space before applying an existence theorem.

::grafico{f="exp(x);1+x;1+x+x^2/2" xmin=0 xmax=1.1 ymin=-0.06 ymax=3.1 legenda="e^x;1+x;1+x+\dfrac{x^2}{2}" titolo="The first few polynomial approximations approach $e^x$ throughout the interval $[0,1]$"}
:::

:::esempio{titolo="Truncations of a square-summable sequence"}
Let $c_{00}$ be the space of sequences with only finitely many nonzero coordinates, equipped with the $\ell^2$ norm. For each positive integer $n$, consider the vector $x^{(n)}$ whose coordinates are $2^{-k}$ for $1\le k\le n$ and zero at all subsequent indices. If $m>n$, the two vectors agree through coordinate $n$, so their distance depends only on the tail. In particular,
$$
\bigl\|x^{(m)}-x^{(n)}\bigr\|_2^2
=\sum_{k=n+1}^m 4^{-k}
\le\sum_{k=n+1}^{\infty}4^{-k}
=\frac{4^{-n}}3.
$$
The sequence is Cauchy. The norm of a vector bounds the absolute value of each coordinate. Thus, if the sequence had a limit in $c_{00}$, its $k$th coordinate would be the limit of the corresponding coordinates of the truncations and would equal $2^{-k}$. The resulting vector belongs to $\ell^2$ because the squares of its coordinates form a convergent geometric series. It has infinitely many nonzero coordinates, however, so the Cauchy sequence does not converge in $c_{00}$. The same tail estimate shows that every vector in $\ell^2$ is the limit of its truncations, using convergence of the series of squared coordinates in place of the geometric series.
:::

## Continuous linear operators

::::teorema{#operatori titolo="Boundedness and the operator norm"}
For a linear operator $T:X\to Y$, continuity at zero, continuity everywhere, and the existence of a constant $C$ such that $\|Tx\|_Y\le C\|x\|_X$ are equivalent. The operator norm is
$$
\|T\|=\sup_{\|x\|\le1}\|Tx\|.
$$
The bounded operators form the space $\mathcal L(X,Y)$, which is complete if $Y$ is a Banach space. Whenever the composition is defined, $\|ST\|\le\|S\|\|T\|$.

For $Tf(x)=\int_0^x f(t)\,dt$ on $C([0,1])$, we have $|Tf(x)|\le x\|f\|_\infty$, so $\|T\|\le1$. The function $f=1$ attains equality, giving $\|T\|=1$.

:::dimostrazione
Homogeneity turns a local estimate at zero into a global one. If $T$ is continuous at zero, there exists $\delta>0$ such that $\|Tv\|_Y<1$ whenever $\|v\|_X<\delta$. For every $x\ne0$, the vector $v=\dfrac{\delta}{2\|x\|_X}x$ has norm $\dfrac{\delta}{2}$. Consequently,
$$
\begin{aligned}
\|Tx\|_Y
&=\frac{2\|x\|_X}{\delta}\|Tv\|_Y\\
&\le\frac{2}{\delta}\|x\|_X.
\end{aligned}
$$
By linearity, the estimate also holds at zero. Conversely, if a global estimate holds with constant $C$, then $\|Tx-Ty\|_Y=\|T(x-y)\|_Y\le C\|x-y\|_X$. This gives continuity at every point, in particular at zero.

Every admissible constant is at least the supremum over the unit ball. For $x\ne0$, applying the supremum bound to $\dfrac{x}{\|x\|_X}$ and using homogeneity recovers the global estimate. The supremum is therefore the smallest admissible constant.
:::
::::

:::esempio{titolo="An upper bound and a function that attains it"}
For a continuous multiplier $m$ on $[0,1]$, the operator $Tf=mf$ satisfies $\|Tf\|_\infty\le\|m\|_\infty\|f\|_\infty$. To determine the norm, we also need a lower bound. Taking $f=1$ gives exactly $Tf=m$, so $\|T\|=\|m\|_\infty$. For $m(x)=x(1-x)$, completing the square gives
$$
x(1-x)=\frac{1}{4}-\left(x-\frac{1}{2}\right)^2.
$$
The maximum is $\dfrac{1}{4}$ and is attained in the interior of the interval. Testing only the endpoints would give zero and miss the amplification produced by the operator.

::grafico{f="x*(1-x)" punti="0.5,0.25,pieno,M" segmenti="0.5,0,0.5,0.25" xmin=0 xmax=1 ymin=-0.04 ymax=0.33 titolo="For the multiplier $x(1-x)$, the norm is the height of the maximum"}
:::

:::osservazione
To see why $\mathcal L(X,Y)$ is complete, take a sequence of operators $(T_n)$ that is Cauchy in the operator norm. For each fixed $x$, the estimate $\|(T_n-T_m)x\|\le\|T_n-T_m\|\|x\|$ makes $(T_nx)$ a Cauchy sequence in $Y$. Define $Tx$ to be its limit. The limit respects linear combinations because each $T_n$ does. The estimate that holds for all sufficiently large $m$ passes to the limit as $m$ tends to infinity, with the same constant for every $x$ in the unit ball. For every $\varepsilon>0$ and all sufficiently large $n$, we have $\|(T-T_n)x\|\le\varepsilon\|x\|$. Taking one such index gives $\|Tx\|\le(\|T_n\|+\varepsilon)\|x\|$, so $T$ is bounded. The same estimate gives $\|T-T_n\|\le\varepsilon$ and hence convergence in the operator norm. This argument uses completeness of the target space $Y$.
:::

:::esempio{titolo="Matrix norm induced by the maximum norm"}
In the plane with the maximum norm, consider $T(x,y)=(2x-y,x+y)$. If both input coordinates have absolute value at most one, the first output coordinate has absolute value at most three and the second at most two. Therefore the image of every vector in the unit ball has norm at most three. For $(x,y)=(1,-1)$, the first output coordinate equals three and the second equals zero. Since the input vector has norm one, we obtain $\|T\|=3$.

The same calculation gives the norm of a real matrix when both domain and codomain carry the maximum norm. In each row, add the absolute values of the entries, since each input coordinate can have absolute value one. The largest row sum bounds the norm of every image of a vector in the unit ball. Choose a row attaining the maximum and give each input coordinate the sign of the corresponding entry in that row. All products in the row are then nonnegative, so the corresponding output coordinate attains the upper bound.
:::

## Functionals and the dual space

:::definizione{#duale titolo="Dual space"}
The **dual space** $X^*$ consists of the continuous linear functionals $\ell:X\to\mathbb K$, with norm $\|\ell\|=\sup_{\|x\|\le1}|\ell(x)|$. It is always a Banach space. The functional $\ell(f)=f(t_0)$ on $C([0,1])$ has norm $1$. In $L^p$, functions that agree almost everywhere represent the same element, so point evaluation is generally not well defined.

For $\ell(f)=\int_0^1f(t)g(t)\,dt$ and $g\in L^q$ with conjugate exponents, Hölder's inequality gives $|\ell(f)|\le\|f\|_p\|g\|_q$. In the real case $1<p<\infty$, taking a function proportional to $\operatorname{sgn}(g)|g|^{q-1}$ gives equality, so $\|\ell\|=\|g\|_q$.
:::

:::esempio{titolo="Point evaluations with coefficients of opposite signs"}
On $C([0,1])$, let $\ell(f)=f(0)-f(1)$. The triangle inequality gives $|\ell(f)|\le2\|f\|_\infty$. A constant function has equal values at the two endpoints and therefore gives zero here. The bound is attained by choosing $f(x)=1-2x$, which stays between $-1$ and $1$ and satisfies $f(0)=1$ and $f(1)=-1$. Hence $\|\ell\|=2$. The sign of the coefficient of a point evaluation determines the value to assign to the test function at that point.

::grafico{linee="0,1 1,-1" punti="0,1,pieno;1,-1,pieno" segmenti="0,1,1,1;0,-1,1,-1" xmin=-0.12 xmax=1.2 ymin=-1.35 ymax=1.35 titolo="The function $1-2x$ lies in the unit ball and attains the maximum of $f(0)-f(1)$"}
:::

:::esempio{titolo="Norm of an integral functional on two different spaces"}
Consider $\ell(f)=\int_0^1 t f(t)\,dt$. On $L^2([0,1])$, the Cauchy–Schwarz inequality gives an upper bound in terms of the L² norm of the weight $t$. On $C([0,1])$ with the supremum norm, we may instead bound $|f(t)|$ by the norm of the input function throughout the interval. This gives the estimates
$$
|\ell(f)|\le \frac{\|f\|_2}{\sqrt{3}},
\qquad
|\ell(f)|\le \frac{\|f\|_\infty}{2},
$$
in their respective spaces. For the first, take $f(t)=\sqrt{3}\,t$, whose L² norm is one and for which $\ell(f)=\dfrac{1}{\sqrt{3}}$. For the second, take $f=1$, whose supremum norm is one and for which $\ell(f)=\dfrac{1}{2}$. Thus the two bounds are the exact norms of the functional on the respective spaces. The test vectors differ because, in the first case, equality requires the input to be proportional to the weight, whereas in the second case a unit input can attain its maximum everywhere the weight is positive.
:::

## Contractions and the Neumann series

::::teorema{#punto-fisso titolo="Banach fixed-point theorem"}
Let $X$ be a nonempty complete metric space and $T:X\to X$ a contraction, meaning that $d(Tx,Ty)\le qd(x,y)$ with $0\le q<1$. There is a unique fixed point $x_*$, and the iterates $x_{n+1}=Tx_n$ converge to it. They satisfy
$$
d(x_n,x_*)\le\frac{q^n}{1-q}d(x_1,x_0).
$$

:::dimostrazione
We estimate the distances between successive iterates so that we can use completeness of $X$. For each $k\ge0$, the contraction inequality gives $d(x_{k+1},x_k)\le q^k d(x_1,x_0)$. For $m>n$, it follows that
$$
\begin{aligned}
d(x_m,x_n)
&\le\sum_{k=n}^{m-1} d(x_{k+1},x_k)\\
&\le d(x_1,x_0)\sum_{k=n}^{m-1}q^k\\
&\le\frac{q^n}{1-q}d(x_1,x_0).
\end{aligned}
$$
Since $0\le q<1$, the upper bound tends to zero as $n$ increases, and the sequence is Cauchy. Let $x_*$ be its limit in $X$. The contraction is continuous, so $x_{n+1}=Tx_n$ also converges to $Tx_*$. Uniqueness of the limit gives $Tx_*=x_*$. If $y_*$ is another fixed point, then $(1-q)d(x_*,y_*)\le0$. The distance is therefore zero and the two points coincide. Finally, letting $m$ tend to infinity in the upper bound for $d(x_m,x_n)$ gives the stated estimate.
:::
::::

::::teorema{#neumann titolo="Neumann series"}
If $A\in\mathcal L(X)$, $X$ is a Banach space, and $\|A\|<1$, then
$$
(I-A)^{-1}=\sum_{n=0}^{\infty}A^n,\qquad
\|(I-A)^{-1}\|\le\frac{1}{1-\|A\|}.
$$
Applying the sum to $b$ solves $x=Ax+b$. For example, if $A=\dfrac{1}{2} I$, the solution is $2b$.

:::dimostrazione
We construct the inverse as the operator norm limit of the partial sums $S_N=\sum_{j=0}^{N}A^j$. The norm inequality for products gives $\|A^j\|\le\|A\|^j$ and, for $M>N$,
$$
\begin{aligned}
\|S_M-S_N\|&\le\sum_{j=N+1}^M\|A\|^j\\
&\le\frac{\|A\|^{N+1}}{1-\|A\|}.
\end{aligned}
$$
The upper bound tends to zero because $\|A\|<1$, so the partial sums form a Cauchy sequence. The space $\mathcal L(X)$ is complete because $X$ is a Banach space, so the limit $S$ exists. The identities
$$
(I-A)S_N=S_N(I-A)=I-A^{N+1}
$$
follow by cancellation of the terms of degrees one through $N$. Multiplication by $I-A$ is continuous in the operator norm, and $\|A^{N+1}\|\le\|A\|^{N+1}\to0$. Passing to the limit gives $(I-A)S=S(I-A)=I$. Finally, the estimate $\|S_N\|\le\sum_{j=0}^{N}\|A\|^j$ passes to the limit and gives the upper bound for the norm of the inverse.
:::
::::

:::esempio{titolo="Iteration, error, and an invariant interval"}
For $T(x)=1+\dfrac{x}{2}$ we can work on the closed interval $[0,3]$. The image lies between $1$ and $\dfrac{5}{2}$, so every iterate remains in the space to which the theorem applies. The fixed point satisfies $x=1+\dfrac{x}{2}$ and equals $2$. With $x_0=0$, the first three iterates are $1$, $\dfrac{3}{2}$, and $\dfrac{7}{4}$. Subtracting $2$ from the recurrence gives $x_{n+1}-2=\dfrac{1}{2}(x_n-2)$. The exact error in this case is $2^{1-n}$. If the fixed point were unknown, a practical stopping criterion would use $d(x_n,x_*)\le \dfrac{q}{1-q}d(x_n,x_{n-1})$, since the next step has length at most $q$ times the last observed increment.

::grafico{f="x;1+x/2" linee="0,0 0,1 1,1 1,1.5 1.5,1.5 1.5,1.75 1.75,1.75" punti="2,2,pieno,P" uguale=1 xmin=-0.2 xmax=2.6 ymin=-0.2 ymax=2.6 titolo="At each step, read $T(x_n)$ from the graph of the line and return to the diagonal to obtain $x_{n+1}$"}
:::

:::esempio{titolo="Estimating the remainder of the Neumann series"}
For $A=\dfrac{1}{2} I$, the partial sums $\sum_{j=0}^N A^j$ are multiples of the identity with coefficients $1$, $\dfrac{3}{2}$, $\dfrac{7}{4}$, $\dfrac{15}{8}$, and converge to $2I$. In general, $\|A^j\|\le\|A\|^j$, so the tail after the term of order $N$ has norm at most $\dfrac{\|A\|^{N+1}}{1-\|A\|}$. This bounds the error in approximating the inverse operator. When we apply the inverse to $b$ to solve $x=Ax+b$, the error in the solution is bounded by the same tail estimate multiplied by $\|b\|$. The remainder can be smaller if some powers of $A$ vanish.

::grafico{punti="0,1,pieno;1,1.5,pieno;2,1.75,pieno;3,1.875,pieno;4,1.9375,pieno" asintoti="y=2" nomi="N,s" xmin=-0.4 xmax=4.8 ymin=-0.06 ymax=2.25 titolo="The scalar partial sums for $A=\dfrac{1}{2}I$ converge to $2$"}
:::

:::esempio{titolo="Powers of an integral operator and convergence of the series"}
On $C([0,1])$ with the supremum norm, let $Af(x)=\int_0^x f(t)\,dt$. The norm of $A$ is one. To estimate the powers, write $A^n$ for the composition of $A$ with itself $n$ times. Start from $|Af(x)|\le x\|f\|_\infty$. If the power of order $n$ satisfies the first inequality below, integrating gives the estimate for the next power:
$$
|A^n f(x)|\le\frac{x^n}{n!}\|f\|_\infty,
\qquad
|A^{n+1} f(x)|
\le\int_0^x\frac{t^n}{n!}\|f\|_\infty\,dt
=\frac{x^{n+1}}{(n+1)!}\|f\|_\infty.
$$
The constant function one gives equality at every step. In particular, taking $x=1$ gives $\|A^n\|=\dfrac{1}{n!}$. The series of norms converges and the operator space is complete, so the partial sums converge in the operator norm. Multiplying each partial sum by $I-A$ gives $I-A^{N+1}$. The limit is $I$ whether we multiply on the right or the left, so the sum is the inverse. Applying it to the constant function one gives the solution $u(x)=\sum_{n=0}^\infty\dfrac{x^n}{n!}=e^x$ of $u=1+Au$. The bounds on the individual powers explain why the series converges even though the norm of $A$ equals one.
:::

## The Baire category theorem and uniform boundedness

::::teorema{#baire titolo="The Baire category theorem and the uniform boundedness principle"}
In a complete metric space, a countable union of closed sets with empty interior has empty interior. This is the Baire category theorem.

If $X$ is a Banach space, $Y$ is a normed space, and $(T_\alpha)\subset\mathcal L(X,Y)$ is pointwise bounded, meaning that $\sup_\alpha\|T_\alpha x\|<\infty$ for every $x$, then $\sup_\alpha\|T_\alpha\|<\infty$. This is the **uniform boundedness** principle. Apply the Baire category theorem to the closed sets $E_n=\{x:\sup_\alpha\|T_\alpha x\|\le n\}$. One of them contains a ball, and linearity then gives a bound on the entire unit ball.

A weakly convergent sequence $(x_n)$ is norm bounded. Indeed, the evaluation functionals $J(x_n)$, defined by $J(x_n)(\ell)=\ell(x_n)$ on the dual space $X^*$, are pointwise bounded by weak convergence. Applying the principle on the Banach space $X^*$ gives a uniform bound for $\|J(x_n)\|$. By the Hahn–Banach theorem, this norm equals $\|x_n\|$. Pointwise boundedness concerns each fixed vector separately, while the uniform bound holds on the whole unit ball.

:::dimostrazione
To prove the Baire category theorem, we construct a point in a nonempty open set $U$ outside every closed set $F_n$ with empty interior. Choose a closed ball $B_1$ of positive radius at most $\dfrac{1}{2}$ contained in $U\setminus F_1$. Once $B_n$ has been chosen, its interior contains its center and is therefore nonempty. Since $F_{n+1}$ has empty interior, the interior of $B_n$ contains a nonempty open set disjoint from $F_{n+1}$. Inside this set choose a closed ball $B_{n+1}$ with radius at most $2^{-(n+1)}$. The centers form a Cauchy sequence because those with index at least $n$ all belong to $B_n$, whose diameter tends to zero. By completeness they converge to a point $x$ that belongs to every $B_n$ because the balls are closed. Therefore $x\in U$ and $x\notin F_n$ for every $n$.

To prove the uniform boundedness principle, apply the Baire category theorem to the sets $E_n$. Each $E_n$ is closed because it is the intersection of the closed sets $\{x:\|T_\alpha x\|\le n\}$. Pointwise boundedness gives $\bigcup_{n\ge1}E_n=X$, so at least one of the sets $E_n$ has nonempty interior. Let $B(x_0,r)\subseteq E_n$. If $\|h\|<r$, both $x_0$ and $x_0+h$ belong to $E_n$, so
$$
\begin{aligned}
\|T_\alpha h\|
&\le\|T_\alpha(x_0+h)\|+\|T_\alpha x_0\|\\
&\le2n .
\end{aligned}
$$
For any unit vector $u$, the vector $h=\dfrac{r}{2}u$ satisfies $\|h\|<r$. By linearity, $\|T_\alpha u\|\le\dfrac{4n}{r}$, with the same constant for every index $\alpha$ and every unit vector. Hence $\sup_\alpha\|T_\alpha\|\le\dfrac{4n}{r}$.

::grafico{uguale=1 curve="1.7*cos(t),1.7*sin(t),0,6.283185;0.55+0.95*cos(t),0.95*sin(t),0,6.283185;0.82+0.45*cos(t),0.45*sin(t),0,6.283185" punti="0,0,pieno;0.55,0,pieno;0.82,0,pieno" xmin=-2 xmax=2 ymin=-1.95 ymax=1.95 titolo="Three nested closed balls. Each successive center lies in all previously chosen balls"}
:::
::::

:::osservazione
Let $(T_n)$ be a sequence of continuous linear operators from a Banach space $X$ to a normed space $Y$. If $T_nx$ converges in $Y$ for every $x\in X$, then the images of each fixed input form a bounded sequence. The uniform boundedness principle therefore gives a common constant $M$ such that $\|T_nx\|\le M\|x\|$ for every $n$. Passing to the limit gives $\|Tx\|\le M\|x\|$, where $Tx$ is the limit of the images. Linearity passes to the limit under addition and scalar multiplication. The limit operator is therefore linear and continuous.
:::

:::attenzione
Convergence of $T_nx$ for every $x$ can hold even when the operator norm distance stays constant. On $\ell^2$, let $P_n$ denote truncation to the first $n$ coordinates. For each fixed $x$, we have
$$
\|x-P_nx\|_2^2=\sum_{k=n+1}^{\infty}|x_k|^2\longrightarrow0,
$$
because the series of squared coordinates converges. However, the unit vector $e_{n+1}$, whose only nonzero coordinate is a one in position $n+1$, is mapped to zero by $P_n$. Its image under $I-P_n$ still has norm one. Since discarding coordinates cannot increase the norm, we conclude that $\|I-P_n\|=1$ for every $n$. The input attaining this error changes with $n$, whereas pointwise convergence concerns a fixed input.
:::

## The open mapping, closed graph, and Hahn–Banach theorems

:::teorema{#teoremi-banach titolo="The open mapping and closed graph theorems"}
A continuous surjective linear operator between Banach spaces is open. If it is also injective, its inverse is therefore continuous. A linear operator $T:X\to Y$ defined on all of a Banach space $X$ and taking values in a Banach space $Y$ is continuous if and only if its graph is closed in $X\times Y$. Both results follow from the Baire category theorem.

The completeness assumptions and the domain of the operator must be checked. Differentiation $D:C^1([0,1])\to C([0,1])$ is bounded for the norm $\|f\|_\infty+\|f'\|_\infty$ but becomes unbounded when the domain carries only the norm $\|f\|_\infty$. Indeed, for $f_n(x)=\sin(nx)$ we have $\|f_n\|_\infty\le1$ and $\|f_n'\|_\infty=n$.
:::

:::teorema{#hahn-banach titolo="The Hahn–Banach extension theorem"}
If $M$ is a subspace of a normed space $X$ and $\ell:M\to\mathbb K$ is linear and continuous, it has a continuous extension $\widetilde\ell:X\to\mathbb K$ of the same norm. In particular, for every $x\ne0$ there exists $\ell\in X^*$ such that $\|\ell\|=1$ and $\ell(x)=\|x\|$.

Start with the subspace spanned by $x$, define $\ell(\alpha x)=\alpha\|x\|$ there, and apply the theorem. Thus continuous linear functionals separate the points of the space.
:::

:::attenzione
Consider the same space $C^1([0,1])$ with two different norms. The space with norm $\|f\|_\infty+\|f'\|_\infty$ is complete. For a Cauchy sequence, the functions and their derivatives have uniform limits $f$ and $g$, respectively. The identity $f_n(x)-f_n(0)=\int_0^x f_n'(t)\,dt$ passes to the limit, so $f'=g$. With the supremum norm alone, the space is incomplete, as can be seen by approximating $|x-\dfrac{1}{2}|$ with $\sqrt{(x-\dfrac{1}{2})^2+n^{-2}}$. The identity map from the first space to the second is continuous and bijective, but its inverse is unbounded. The functions $\sin(nx)$ have supremum norm at most one and norm at least $n$ in the first space. The bounded inverse theorem also requires the codomain to be complete.
:::

:::esempio{titolo="The projection of an open ball"}
The projection $P(x,y)=x$ is continuous and surjective from $\mathbb R^2$ to $\mathbb R$. The image of the open Euclidean unit ball is $(-1,1)$. Indeed, $x^2+y^2<1$ implies $|x|<1$, and for every $|x|<1$ the point $(x,0)$ is a preimage in the ball. More generally, the open mapping theorem ensures that the image of the unit ball contains a neighborhood of zero. When the operator is also injective, this inclusion is equivalent to bounding the norm of the preimage in terms of the given output, and thus to continuity of the inverse. To check that the graph is closed, one works in the product space. If $x_n\to x$ and $Tx_n\to y$, the condition to verify is $y=Tx$.

::grafico{curve="cos(t),sin(t),0,6.283185" linee="-1,0 1,0" punti="-1,0,vuoto;1,0,vuoto;0.55,0,pieno" segmenti="0.55,0,0.55,0.75" uguale=1 xmin=-1.45 xmax=1.55 ymin=-1.25 ymax=1.25 titolo="The horizontal projection of the open disk is the open interval $(-1,1)$"}
:::

:::esempio{titolo="A norm-one functional on the diagonal"}
In $\mathbb R^2$ with the Euclidean norm, let $u=\dfrac{(1,1)}{\sqrt2}$ and let $M$ be the line spanned by $u$. On $M$ define $\ell(tu)=t$, which has norm one. One extension is $\widetilde\ell(x,y)=\dfrac{x+y}{\sqrt2}$. The Cauchy–Schwarz inequality gives $|\widetilde\ell(v)|\le\|v\|_2$, with equality at $v=u$. The level line $\widetilde\ell(v)=1$ touches the unit ball at $u$. This calculation uses the inner product on the plane. The Hahn–Banach theorem guarantees a norm-preserving extension even when the norm does not come from an inner product.

::grafico{curve="cos(t),sin(t),0,6.283185" f="x;sqrt(2)-x" vettori="0,0,0.707107,0.707107,u" uguale=1 xmin=-1.25 xmax=1.8 ymin=-1.25 ymax=1.8 titolo="The level line $x+y=\sqrt2$ is tangent to the unit circle at the vector $u$"}
:::

:::osservazione
To deduce the closed graph theorem from the open mapping theorem, consider the graph $G=\{(x,Tx):x\in X\}$ with the product norm $\|(x,y)\|=\|x\|_X+\|y\|_Y$. The product space is complete because a Cauchy sequence is Cauchy in both coordinates. If $G$ is closed, then $G$ is complete as well. The projection $P:G\to X$ given by $P(x,Tx)=x$ is continuous, since the norm of the first coordinate is at most the norm of the pair. It is bijective because each $x$ determines exactly one point of the graph. The open mapping theorem then gives continuity of $P^{-1}$. Boundedness of the inverse gives an upper bound for $\|x\|_X+\|Tx\|_Y$ by a multiple of $\|x\|_X$, so $T$ is continuous. Conversely, if the pairs $(x_n,Tx_n)$ converge to $(x,y)$ and $T$ is continuous, then $Tx_n$ also converges to $Tx$. Uniqueness of the limit gives $y=Tx$, so the pair belongs to the graph.
:::

:::esempio{titolo="Different extensions of the same norm"}
On $\mathbb R^2$ with the norm $\|(x,y)\|_1=|x|+|y|$, take the functional $\ell(x,0)=x$ on the horizontal axis. Every linear extension has the form $\widetilde\ell_a(x,y)=x+ay$, where $a$ is the value assigned to the vector $(0,1)$. We have
$$
|x+ay|\le\max(1,|a|)(|x|+|y|).
$$
The absolute value of the functional on $(1,0)$ is one, and on $(0,1)$ it is $|a|$. Both are unit vectors, so the norm of the extension is exactly $\max(1,|a|)$. The original norm is one and is preserved for every $a\in[-1,1]$. Thus in this example the norm constraint allows a range of values on the second standard basis vector.
:::

## Compact operators and the Arzelà–Ascoli theorem

:::definizione{#compatti titolo="Compactness and the Arzelà–Ascoli criterion"}
A linear operator is **compact** if it maps bounded sets to relatively compact sets. Equivalently, the images of any bounded sequence have a convergent subsequence. Bounded finite-rank operators are compact. The identity on an infinite-dimensional Banach space is not compact.

For a compact metric space $K$, a family in $C(K)$ is relatively compact in the supremum norm if and only if it is equicontinuous and pointwise bounded. This is the **Arzelà–Ascoli theorem**. The operator $Tf(x)=\int_0^x f(t)\,dt$ maps the unit ball to a family of uniformly bounded functions with Lipschitz constant at most $1$, so it is compact. On $\ell^2$, a diagonal operator $(x_n)\mapsto(a_nx_n)$ is compact if and only if $a_n\to0$. When the coefficients tend to zero, its finite-rank truncations approximate it in the operator norm.
:::


:::esempio{titolo="Uniform boundedness and equicontinuity are separate conditions"}
The family $f_n(x)=x^n$ on $[0,1]$ is uniformly bounded by one. If it were relatively compact, the sequence would have a uniformly convergent subsequence. Every subsequence has the same pointwise limit, zero for $x<1$ and one at $x=1$. This limit is discontinuous, whereas a uniform limit of continuous functions is continuous. The family is therefore not relatively compact. We can also locate the point at which equicontinuity fails. Taking $x_n=2^{-\dfrac{1}{n}}$, we have $x_n\to1$, yet $|f_n(1)-f_n(x_n)|=\dfrac{1}{2}$ for every $n$.

::grafico{f="x;x^4;x^12" xmin=0 xmax=1 ymin=-0.12 ymax=1.14 titolo="The functions $x$, $x^4$, and $x^{12}$ remain bounded by one, but the transition near $1$ becomes progressively steeper"}
:::

::::teorema{#diagonali-compatti titolo="A compactness criterion for diagonal operators"}
Let $(a_n)$ be a bounded scalar sequence and define $D:\ell^2\to\ell^2$ by $(Dx)_n=a_nx_n$. The operator $D$ is compact if and only if $a_n\to0$. For example, the choice $a_n=\dfrac{1}{n}$ gives a compact operator of norm one.

:::dimostrazione
For sufficiency, approximate $D$ by the truncations $D_N$ that retain the first $N$ coordinates of $Dx$. Each $D_N$ is bounded and has finite rank, so it is compact. For every $x\in\ell^2$, we have
$$
\|(D-D_N)x\|_2^2
=\sum_{n>N}|a_n|^2|x_n|^2
\le\left(\sup_{n>N}|a_n|\right)^2\|x\|_2^2.
$$
For $n>N$, we also have $\|(D-D_N)e_n\|_2=|a_n|$. Since the vectors $e_n$ have norm one, the two estimates give $\|D-D_N\|=\sup_{n>N}|a_n|$. If $a_n\to0$, the remainder tends to zero in the operator norm. The image of the unit ball under $D$ is totally bounded. For any given radius, one can obtain a finite cover from a finite cover of the image under a sufficiently close approximation $D_N$. The codomain $\ell^2$ is complete, so the closure of the image is compact.

For necessity, if the coefficients do not tend to zero, there exist $\varepsilon>0$ and distinct indices $n_k$ such that $|a_{n_k}|\ge\varepsilon$. The images of two of the corresponding standard basis vectors have nonzero coordinates in different positions, so
$$
\|De_{n_k}-De_{n_j}\|_2
=\sqrt{|a_{n_k}|^2+|a_{n_j}|^2}
\ge\sqrt2\,\varepsilon\qquad(k\ne j).
$$
The images have no Cauchy subsequence, although all the input vectors have norm one. This rules out compactness.
:::
::::

:::esempio{titolo="Finite-rank approximation of an integral operator"}
Consider again $Tf(x)=\int_0^x f(t)\,dt$ on $C([0,1])$. For an integer $N\ge1$, choose nodes $t_j=\dfrac{j}{N}$ with $0\le j\le N$, and define $T_N f$ as the piecewise linear function that agrees with $Tf$ at the nodes. The operator is linear because the nodal values depend linearly on $f$. Its images belong to the finite-dimensional space of piecewise linear functions with those nodes. On each interval between nodes, the interpolated value is a convex combination of the endpoint values, so $\|T_N f\|_\infty\le\|Tf\|_\infty$.

For $g=Tf$, we have $|g(x)-g(y)|\le\|f\|_\infty|x-y|$. If $x=t_j+\dfrac{\theta}{N}$ with $0\le\theta\le1$, then
$$
\begin{aligned}
|Tf(x)-T_N f(x)|
&\le (1-\theta)|g(x)-g(t_j)|+\theta|g(x)-g(t_{j+1})|\\[6pt]
&\le\frac{2\theta(1-\theta)}{N}\|f\|_\infty
\le\frac{\|f\|_\infty}{2N}.
\end{aligned}
$$
The estimate is uniform in both the point and the choice of unit input. Consequently, $T_N$ converges to $T$ in the operator norm. Every $T_N$ is compact because it is bounded and has finite rank. The norm limit is compact because, for every positive radius however small, the image of the unit ball can be covered by finitely many balls of that radius using a finite cover for a sufficiently close approximation. Completeness of the codomain then gives compactness of the closure.
:::
