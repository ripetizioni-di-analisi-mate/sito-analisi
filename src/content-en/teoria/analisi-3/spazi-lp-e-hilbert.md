---
titolo: "Lᵖ spaces and Hilbert spaces"
sommario: "Integral norms, Hölder's inequality, convergence in Lᵖ, inner products, projections, orthonormal bases, the Riesz representation theorem, and weak convergence."
---

## Lᵖ spaces

:::definizione{#spazi-lp titolo="Integral norms and equivalence classes"}
On a measure space, for $1\le p<\infty$ define
$$
L^p=\{f\text{ measurable}:\int|f|^p\,d\mu<\infty\}\big/\sim,
\qquad \|f\|_p=\left(\int|f|^p\,d\mu\right)^{\frac1p},
$$
where $f\sim g$ denotes equality almost everywhere. The elements of the space are therefore equivalence classes of functions. In $L^\infty$ the norm is $\operatorname{ess\,sup}|f|$, which disregards null sets.

On $(0,1)$, the function $x^{-\alpha}$ with $\alpha>0$ belongs to $L^p$ precisely when $\alpha p<1$. Indeed, the integral of $x^{-\alpha p}$ converges only in this case.
:::

:::esempio{titolo="An isolated spike and the essential supremum"}
On $[0,1]$, set $f(x)=x$ for $x\ne\dfrac12$ and $f(\dfrac12)=3$. The set where $|f|>1$ is a singleton and therefore has measure zero. For every $0\le a<1$, the set where $|f|>a$ contains the interval $(a,1]$ and therefore has positive measure. The essential supremum is $1$, while the pointwise maximum is $3$. The class of $f$ has the same norm as the class of the monomial $x$.

::grafico{linee="0,0 1,1" punti="0.5,0.5,vuoto;0.5,3,pieno;1,1,pieno" segmenti="0,1,1,1" xmin=-0.1 xmax=1.16 ymin=-0.1 ymax=3.4 titolo="The point at height $3$ changes the pointwise maximum. Each level between $0$ and $1$ is exceeded on a set of positive measure."}

:::

:::osservazione
For $p<\infty$, the equality $\|f-g\|_p=0$ means that the integral of $|f-g|^p$ is zero. The integrand is nonnegative, so each set on which it exceeds a positive threshold has measure zero. The countable union of the sets corresponding to the thresholds $\dfrac1k$ contains all points where $f\ne g$. Therefore the distance is zero precisely when the two functions represent the same equivalence class.

The singular power function on $(0,1)$ shows how the exponent $p$ determines which spikes are integrable. For $f(x)=x^{-\dfrac13}$, the integrand defining $\|f\|_2^2$ grows like $x^{-\dfrac23}$ and the area near zero is finite. The integrand defining $\|f\|_3^3$ instead grows like $x^{-1}$ and its area diverges. Thus $f\in L^2(0,1)$ but $f\notin L^3(0,1)$.

::grafico{f="x^(-2/3);1/x" xmin=0.035 xmax=1.1 ymin=0 ymax=9 legenda="|f|^2;|f|^3" titolo="Both curves rise as the variable approaches zero, but at the critical exponent $p=3$ the logarithmic antiderivative gives a divergent integral."}

:::

:::esempio{titolo="A two-level function"}
Let $A$ and $B$ be disjoint measurable sets with $\mu(A)=1$ and $\mu(B)=4$. The function $f=3\mathbf1_A-\mathbf1_B$ equals three on the first set and minus one on the second. Since the norm uses the absolute value, the two contributions add. This gives $\|f\|_1=7$, while $\|f\|_2^2=9+4=13$. The essential supremum norm is determined by the largest absolute value attained on a set of positive measure, so $\|f\|_\infty=3$. The measures of $A$ and $B$ enter the norms with finite exponent and determine which levels contribute to the essential supremum.
:::

:::attenzione
The condition $p\geq1$ is needed for the triangle inequality. For $p=\dfrac12$, take two indicator functions $f$ and $g$ of disjoint sets of measure one. The expression $\left(\int |f|^{\frac12}\,d\mu\right)^2$ equals one for each function. For their sum it equals four, since its absolute value is one on a set of measure two. Thus the expression evaluated on the sum exceeds the sum of the two individual values. With an exponent less than one, the same formula generally fails to define a norm.
:::

## The Hölder and Minkowski inequalities

::::teorema{#holder titolo="Integral inequalities and completeness"}
For $f\in L^p$ and $g\in L^q$, with $1\le p,q\le\infty$ and $\dfrac1p+\dfrac1q=1$, we have
$$
\int|fg|\,d\mu\le\|f\|_p\|g\|_q.
$$
For $p=q=2$ this is the Cauchy–Schwarz inequality. Minkowski's inequality gives $\|f+g\|_p\le\|f\|_p+\|g\|_p$. Every $L^p$, for $1\le p\le\infty$, is complete.

For example, Hölder's inequality ensures that the product of two elements of $L^2$ is integrable. Completeness guarantees that the norm limit of a Cauchy sequence belongs to the same space.

:::dimostrazione
To prove Hölder's inequality for $1<p<\infty$, normalize the factors so that their respective powers each have integral one. If $\|f\|_p$ or $\|g\|_q$ is zero, the corresponding factor vanishes almost everywhere and equality holds. Otherwise, let $a=\dfrac{|f|}{\|f\|_p}$ and $b=\dfrac{|g|}{\|g\|_q}$. Apply Young's inequality and integrate.
$$
\begin{aligned}
\int ab\,d\mu
&\le \int\left(\frac{a^p}{p}+\frac{b^q}{q}\right)d\mu \\[5pt]
&= \frac{1}{p}+\frac{1}{q} \\[5pt]
&=1.
\end{aligned}
$$
Multiplication by $\|f\|_p\|g\|_q$ gives the estimate. For $p=1$ and $q=\infty$, integrate the inequality $|fg|\le |f|\|g\|_\infty$, which holds almost everywhere. The case $p=\infty$ follows by interchanging $f$ and $g$. Hölder's inequality yields Minkowski's inequality by bounding the two products in the argument below for the norm of a sum. To prove completeness, extract a subsequence for which the norms of successive differences are summable.
:::
::::

:::esempio{titolo="Integrable products and conjugate exponents"}
On $(0,1)$, the function $x^{-\dfrac14}$ belongs to $L^2$ because its square is $x^{-\dfrac12}$ and has integral $2$. The function $x$ also belongs to $L^2$ and has norm $\dfrac1{\sqrt3}$. Cauchy–Schwarz therefore gives $\int_0^1 x^{-\dfrac14}x\,dx\le\sqrt{\dfrac23}$. Direct calculation gives $\dfrac47$. The inequality guarantees that the product of two elements of $L^2$ belongs to $L^1$, even when we estimate the two norms without knowing an antiderivative of the product.
:::

:::osservazione{titolo="Normalization and equality in Hölder's inequality"}
For conjugate $1<p,q<\infty$ and positive norms, the equality condition in Hölder's inequality follows from Young's inequality for the normalized factors $a=\dfrac{|f|}{\|f\|_p}$ and $b=\dfrac{|g|}{\|g\|_q}$. Equality in the pointwise bound holds when $a^p=b^q$. Since the difference between the two sides is nonnegative, equality after integration requires that difference to vanish almost everywhere. Thus, when both norms are positive, Hölder's inequality is an equality precisely when the two normalized powers agree almost everywhere. On $(0,1)$, for $p=3$ and $q=\dfrac32$, take $f(x)=x$ and $g(x)=x^2$. Both powers equal $x^3$ and the integral of the product is $\dfrac14$, equal to the product of the norms.
:::

:::osservazione
Let $f,g\in L^p$ with $1<p<\infty$. Since $|f+g|^p\le 2^{p-1}(|f|^p+|g|^p)$, the sum belongs to $L^p$. Multiply $|f+g|\le |f|+|g|$ by $|f+g|^{p-1}$ and integrate. Apply Hölder's inequality to the two products on the right. The common factor has norm $\big\||f+g|^{p-1}\big\|_q=\|f+g\|_p^{p-1}$ because $(p-1)q=p$. If $\|f+g\|_p>0$, division by this factor gives the triangle inequality. If the norm is zero, the inequality follows from nonnegativity of the right-hand side.

For two-component vectors with counting measure, the unit ball for the $L^p$ norm is a diamond for $p=1$, a disk for $p=2$, and a square for $p=\infty$. The different unit balls explain why the same vector sum can have different lengths in different norms.

::grafico{curve="cos(t),sin(t),0,6.283185307179586" linee="1,0 0,1 -1,0 0,-1 1,0;-1,-1 1,-1 1,1 -1,1 -1,-1" xmin=-1.28 xmax=1.28 ymin=-1.28 ymax=1.28 uguale=1 titolo="Boundaries of the unit balls in $\mathbb R^2$. The diamond corresponds to $p=1$, the circle to $p=2$, and the square to $p=\infty$."}

:::

:::osservazione
To prove completeness, start from a Cauchy sequence in $L^p$, with $p<\infty$, and extract terms $g_k$ such that $\|g_{k+1}-g_k\|_p\le 2^{-k}$. By Minkowski's inequality the partial sums of the absolute differences have uniformly bounded norms. Applying monotone convergence to their $p$th powers shows that the infinite sum of the absolute differences also belongs to $L^p$. This sum is therefore finite almost everywhere, so $g_k$ converges pointwise outside a null set. Its limit $g$ satisfies $|g-g_k|\le\sum_{j\ge k}|g_{j+1}-g_j|$. Applying Minkowski's inequality again to the finite sums and passing to the limit gives $\|g-g_k\|_p\le\sum_{j\ge k}2^{-j}$. The entire sequence converges in norm to the same limit because it is Cauchy.

For $p=\infty$, the differences satisfy the same uniform bounds outside a null set for each $k$. The union of these null sets still has measure zero. On its complement the bounds hold simultaneously and the subsequence converges uniformly. The limit defines a class in $L^\infty$, and the sequence converges in the essential supremum norm.
:::

## Inclusions and modes of convergence

::::teorema{#convergenze-lp titolo="Inclusions on finite measure spaces"}
If $\mu(X)<\infty$ and $1\le p<q\le\infty$, then
$$
L^q\subseteq L^p,\qquad
\|f\|_p\le\mu(X)^{\frac1p-\frac1q}\|f\|_q.
$$
For example, on a space of measure one the estimate gives $\|f\|_1\le \|f\|_2$. On infinite measure spaces this inclusion need not hold.

For $p<\infty$, convergence in the $L^p$ norm implies convergence in measure since $\mu\{|f_n-f|>\varepsilon\}\le\dfrac{\|f_n-f\|_p^p}{\varepsilon^p}$, and there is a subsequence converging almost everywhere.

:::dimostrazione
To prove the inclusion, estimate the integral of $|f|^p$. For $p<q<\infty$, apply Hölder's inequality with exponents $\dfrac qp$ and $\dfrac q{q-p}$. The required power of the first factor $|f|^p$ is integrable because $f\in L^q$, and the required power of the constant $1$ is integrable because $\mu(X)<\infty$. It follows that
$$
\begin{aligned}
\int_X |f|^p\,d\mu
 &\le \left(\int_X |f|^q\,d\mu\right)^{\frac pq}
      \left(\int_X 1\,d\mu\right)^{1-\frac pq} \\[5pt]
 &=\|f\|_q^p\,\mu(X)^{1-\frac pq}.
\end{aligned}
$$
The right-hand side is finite, so $f\in L^p$. Taking the $p$th root gives the norm estimate. For $q=\infty$, integrate the inequality $|f|^p\le\|f\|_\infty^p$ that holds almost everywhere. Markov's inequality gives convergence in measure. To obtain an almost-everywhere limit, select a subsequence for which the measures of the exceptional sets are summable.
:::
::::

:::esempio{titolo="The role of total measure when comparing norms"}
On $(0,2)$ with Lebesgue measure, the constant function $f=4$ has $\|f\|_1=8$ and $\|f\|_2=4\sqrt2$. Here the norm with the smaller exponent is larger. Hölder's inequality gives $\|f\|_1\leq\sqrt2\|f\|_2$, and equality shows that the factor $\sqrt2$ is needed for a bound valid for every function. If $\mu(X)$ is positive, we can divide the measure by $\mu(X)$. The resulting space has measure one, and the factor in the estimate becomes one. With the normalized measure the comparison therefore reads $\|f\|_p\leq\|f\|_q$.
:::

:::esempio{titolo="Concentrating sequences"}
For $f_n=n^\alpha\mathbf1_{(0,\dfrac1n)}$,
$$
\|f_n\|_p^p=n^{\alpha p-1},\qquad
\|f_n\|_p=n^{\alpha-\frac1p}.
$$
Thus convergence to zero in $L^p$ holds if and only if $\alpha<\dfrac1p$. For $\alpha=\dfrac1p$ the norm remains $1$, while the pointwise limit on $(0,1)$ is zero.
:::

:::osservazione
The estimate for convergence in measure follows by integrating $|f_n-f|^p$ over the set where the absolute difference exceeds $\varepsilon$. There the integrand is at least $\varepsilon^p$. To extract a subsequence converging almost everywhere, choose indices $n_k$ such that the measure of $\{|f_{n_k}-f|>2^{-k}\}$ is less than $2^{-k}$. The union of the sets with $k\ge K$ then has measure at most $\sum_{k\ge K}2^{-k}$, which tends to zero as $K$ increases. Almost every point belongs to only finitely many of these sets, so the difference tends to zero at that point.
:::

:::esempio{titolo="Indicators of dyadic intervals"}
First list the indicators of the two halves of $[0,1)$, then the indicators of the four quarters, and so on. At level $k$, each interval has measure $2^{-k}$ and its indicator has norm $2^{-\dfrac kp}$, so the entire sequence tends to zero in $L^p$ for $p<\infty$. Every $x\in[0,1)$ lies in exactly one interval at each level. The corresponding indicator equals one there, while the others at that level equal zero. Thus at every point there are infinitely many zeros and infinitely many ones, so no pointwise limit exists.

::grafico{linee="0,1 0.5,1;0.5,1.25 1,1.25;0,2 0.25,2;0.25,2.2 0.5,2.2;0.5,2.4 0.75,2.4;0.75,2.6 1,2.6" segmenti="0.65,0,0.65,2.8" punti="0.65,1.25,pieno;0.65,2.4,pieno" etichette="0.7,0.46,x = 0.65" xmin=-0.12 xmax=1.2 ymin=-0.1 ymax=3.05 titolo="The segments show the supports at the first two levels. The fixed point lies in exactly one support at each level."}

:::

:::teorema{#stima-convergenza-misura titolo="Convergence in measure for bounded functions"}
Let $X$ have finite measure. Suppose $f_n\to f$ in measure and both $|f_n|$ and $|f|$ are bounded almost everywhere by the same constant $M$. Then $f_n\to f$ in $L^p$ for every $1\leq p<\infty$.

To estimate the norm, fix a threshold $\varepsilon>0$. On the set where the absolute difference exceeds the threshold, use the upper bound $2M$. On the complement, use $\varepsilon$. Calling the first set $E_n$, we obtain
$$
\|f_n-f\|_p^p\leq (2M)^p\mu(E_n)+\varepsilon^p\mu(X).
$$
The first term tends to zero by convergence in measure. Since the total measure is finite, the second term can be made small by choosing $\varepsilon$ sufficiently small. For example, on $(0,1)$ the function $\mathbf1_{(0,\dfrac1n)}$ is bounded in absolute value by one and converges in measure to zero. Direct calculation gives $\|f_n\|_p=n^{-\dfrac1p}$, confirming the conclusion.
:::

:::attenzione
Finiteness of the measure is used to estimate the contribution below the threshold. On $\mathbb R$, take $f_n=\dfrac1n\mathbf1_{(0,n)}$. For every positive threshold, the set where the absolute value exceeds it is empty for all sufficiently large $n$. The functions therefore converge in measure to zero and are uniformly bounded. In $L^1$, however, the base of length $n$ offsets the height $\dfrac1n$, so the norm remains one. For $p>1$ the norm equals $n^{\frac1p-1}$ and tends to zero.
:::

:::attenzione
On an infinite measure domain, the inclusions can fail in both directions. On $(1,\infty)$, $x^{-\dfrac34}$ belongs to $L^2$ but not to $L^1$. On $(0,\infty)$, the function $x^{-\dfrac34}\mathbf1_{(0,1)}$ belongs to $L^1$ but not to $L^2$. In the first case the behavior at infinity is decisive. In the second it is integrability near the origin.
:::

## Hilbert spaces

:::definizione{#hilbert titolo="Inner products and completeness"}
A complex inner product is linear in its first argument, conjugate-linear in its second, Hermitian, and positive definite. It induces $\|x\|=\sqrt{\langle x,x\rangle}$. A space complete in this norm is a **Hilbert space**.

In $L^2$ we set $\langle f,g\rangle=\int f\overline g\,d\mu$, and in $\ell^2$ we set $\langle x,y\rangle=\sum_nx_n\overline{y_n}$. The Cauchy–Schwarz inequality holds, as does the parallelogram identity
$$
\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2.
$$
The latter characterizes norms that come from an inner product.
:::

:::esempio{titolo="The parallelogram and the Euclidean norm"}
In $\mathbb R^2$ with the Euclidean norm, take $u=(2,0)$ and $v=(1,2)$. We have $\|u+v\|^2=13$ and $\|u-v\|^2=5$. Their sum is $18$, which equals $2\|u\|^2+2\|v\|^2=2\cdot4+2\cdot5$. Indeed, the two diagonals of the parallelogram are represented by $u+v$ and $u-v$ up to orientation.

::grafico{vettori="0,0,2,0,u;0,0,1,2,v" linee="0,0 2,0 3,2 1,2 0,0;0,0 3,2;1,2 2,0" punti="3,2,pieno" xmin=-0.35 xmax=3.55 ymin=-0.42 ymax=2.52 uguale=1 titolo="The diagonals are represented by $u+v$ and $u-v$. The identity relates their squared lengths."}

For the $\ell^1$ norm, taking $u=(1,0)$ and $v=(0,1)$ gives $\|u+v\|_1^2+\|u-v\|_1^2=8$ and $2\|u\|_1^2+2\|v\|_1^2=4$ instead. Since every inner product norm satisfies the parallelogram identity, this norm cannot come from an inner product.
:::

:::osservazione{titolo="Recovering the inner product from the squared norm"}
The norm of a Hilbert space also determines its inner product. When we expand the squared norms of $\|u+v\|$ and $\|u-v\|$ and take the difference, the terms involving the individual squared norms cancel. The difference that remains is four times the real part of $\langle u,v\rangle$. In a real space this determines the inner product. In a complex space, with the first argument taken to be linear, $\langle u,iv\rangle=-i\langle u,v\rangle$. The real part of the second inner product is thus the imaginary part of the first. Hence
$$
\begin{aligned}
\operatorname{Re}\langle u,v\rangle
 &=\frac{\|u+v\|^2-\|u-v\|^2}{4},\\[6pt]
\operatorname{Im}\langle u,v\rangle
 &=\frac{\|u+iv\|^2-\|u-iv\|^2}{4}.
\end{aligned}
$$
In the case $H=\mathbb C$, with $u=1$ and $v=i$, the first two squared norms are both two. The other two are zero and four, since $iv=-1$. The formulas give $\langle 1,i\rangle=-i$, in agreement with conjugation in the second argument.
:::

## Orthogonal projection

::::teorema{#proiezione titolo="Best approximation in a closed subspace"}
If $M$ is a closed linear subspace of a Hilbert space $H$, then for every $x\in H$ there exists a unique $p\in M$ minimizing $\|x-p\|$. It is characterized by $x-p\perp M$. For a finite orthonormal basis $(e_j)$ of $M$,
$$
P_Mx=\sum_j\langle x,e_j\rangle e_j.
$$

:::dimostrazione
The parallelogram identity shows that a minimizing sequence is Cauchy. Completeness and closedness give a limit $p\in M$. Minimizing $\|x-p-ty\|^2$ for $y\in M$ and real $t$, and also for purely imaginary values when $H$ is complex, gives orthogonality. Finally,
$$
\|x-y\|^2=\|x-p\|^2+\|p-y\|^2
$$
gives minimality and uniqueness.
:::
::::

:::esempio{titolo="Approximation by a constant"}
In $L^2(0,1)$, the projection of $x$ onto the constants is the mean $\dfrac12$. The minimum squared error is $\int_0^1(x-\dfrac12)^2\,dx=\dfrac1{12}$.
:::

:::esempio{titolo="How the residual determines the minimum error"}
In $\mathbb R^2$, for $x=(3,2)$ and $M=\operatorname{span}(1,0)$ we have $p=(3,0)$. For another candidate $q=(1,0)$, the segment from $x$ to $q$ is the hypotenuse of the triangle with legs $x-p$ and $p-q$. Its squared length is $8$, while the orthogonal residual has squared length $4$. The Pythagorean identity isolates the additional error incurred by moving along the subspace.

::grafico{vettori="0,0,3,2,x" linee="1,0 3,0 3,2 1,0;2.78,0 2.78,0.22 3,0.22" punti="1,0,pieno,q;3,0,pieno,p" xmin=-0.2 xmax=3.65 ymin=-0.42 ymax=2.6 uguale=1 titolo="The residual $x-p$ is orthogonal to $M$. The sloping segment from $q$ to $x$ is longer than the residual."}

When a real function $f\in L^2(a,b)$ is approximated by a constant, with $a<b$, the orthogonality condition is $\int_a^b(f-c)\,dx=0$. The best constant is therefore $\dfrac1{b-a}\int_a^b f(x)\,dx$. The positive and negative parts of the residual have equal integrals. The squared error, however, integrates the square of the residual and is positive unless $f$ is constant almost everywhere.

::grafico{f="x;0.5" area="0.5;x;0;0.5|x;0.5;0.5;1" punti="0.5,0.5,pieno" xmin=0 xmax=1.12 ymin=0 ymax=1.14 legenda="x;\frac12" titolo="The oppositely signed areas of the residual $x-\dfrac12$ cancel. The integral of the squared residual is $\dfrac1{12}$."}

:::

:::osservazione
In the proof of the projection theorem, let $d$ denote the infimum of the distances, and take two terms $p_j,p_k$ of a minimizing sequence. Their midpoint also lies in $M$ and its distance from $x$ is at least $d$. By the parallelogram identity,
$$
\|p_j-p_k\|^2
=2\|x-p_j\|^2+2\|x-p_k\|^2-4\left\|x-\dfrac{p_j+p_k}{2}\right\|^2
\le 2\|x-p_j\|^2+2\|x-p_k\|^2-4d^2.
$$
The right-hand side tends to zero. The sequence converges in $H$, and its limit belongs to $M$ because the subspace is closed. Closedness is necessary. In $\ell^2$, the subspace of finitely supported sequences is dense, so the distance of $(2^{-n})_{n\ge1}$ from it is zero. The vector has infinitely many nonzero components, however, so no finitely supported sequence attains this distance.
:::

:::esempio{titolo="Affine approximation using nonorthogonal generators"}
We seek the projection of $x^2$ onto the subspace spanned by $1$ and $x$ in $L^2(0,1)$. The candidate has the form $a+bx$. The generators have inner product $\dfrac12$, so their coefficients must be determined together. The residual must be orthogonal to both generators. Integrating the residual and its product with $x$ gives
$$
\begin{cases}
a+\dfrac b2=\dfrac13,\\[5pt]
\dfrac a2+\dfrac b3=\dfrac14.
\end{cases}
$$
Subtracting half the first equation from the second gives $\dfrac b{12}=\dfrac1{12}$. Thus $b=1$ and $a=-\dfrac16$. The residual is $r(x)=x^2-x+\dfrac16$. Since the projection lies in the subspace and the residual is orthogonal to it, the squared distance is obtained by subtracting $\int_0^1(x-\dfrac16)^2\,dx=\dfrac7{36}$ from $\int_0^1x^4\,dx=\dfrac15$. The result is $\|r\|_2^2=\dfrac1{180}$. Other generators give the same type of system, with entries given by the inner products of the chosen functions.
:::

## Orthonormal bases and Parseval's identity

:::richiamo{titolo="Projection onto a closed subspace"}
Let $H$ be a Hilbert space and $M$ a closed linear subspace. For every $x\in H$ there exists a unique $p\in M$ such that $x-p\perp M$.
:::

::::teorema{#basi-hilbert titolo="Bessel's inequality and Parseval's identity"}
For an orthonormal system $(e_n)$, Bessel's inequality states that $\sum_n|\langle x,e_n\rangle|^2\le\|x\|^2$. If its linear span is dense, the system is an orthonormal basis and
$$
x=\sum_n\langle x,e_n\rangle e_n\quad\text{in norm},\qquad
\|x\|^2=\sum_n|\langle x,e_n\rangle|^2.
$$
The second equality is Parseval's identity. Every separable Hilbert space has a finite or countably infinite orthonormal basis. In $L^2(-\pi,\pi)$, the functions $\dfrac{e^{inx}}{\sqrt{2\pi}}$ with $n\in\mathbb Z$ form an orthonormal basis. Thus Fourier series converge in norm.

:::dimostrazione
Compute the norm of the residual after retaining finitely many coefficients. The subspace $M_N$ spanned by $e_1,\ldots,e_N$ is finite-dimensional and closed, so the projection theorem applies. The projection is the sum of the first $N$ coefficients times their respective vectors. By orthonormality, the squared norm of this sum equals the sum of the squared absolute values of the coefficients. Since the residual is orthogonal to $M_N$, the Pythagorean identity gives
$$
\left\|x-\sum_{n=1}^N\langle x,e_n\rangle e_n\right\|^2
=\|x\|^2-\sum_{n=1}^N|\langle x,e_n\rangle|^2.
$$
The left-hand side is nonnegative, so the partial sums of the squared coefficient magnitudes are bounded above by $\|x\|^2$. Taking the limit gives Bessel's inequality. If the system is complete, for every $\varepsilon>0$ there is a finite linear combination of its vectors whose distance from $x$ is less than $\varepsilon$. This combination belongs to $M_N$ for all sufficiently large $N$. Since the projection minimizes the distance, the residual tends to zero in norm. Passing to the limit in the identity gives Parseval's identity.
:::
::::

:::esempio{titolo="Trigonometric projection onto a single mode"}
In $L^2(-\pi,\pi)$, consider $f(t)=\cos t+\dfrac12\cos(2t)$. The two cosines are orthogonal and have squared norm $\pi$. The projection onto the subspace spanned by $\cos t$ is $\cos t$. The squared error is $\dfrac{\pi}{4}$, contributed by the second mode. Once $\cos(2t)$ is added to the subspace, the projection equals the function itself.

::grafico{f="cos(x)+cos(2*x)/2;cos(x)" xmin=-3.15 xmax=3.15 ymin=-1.1 ymax=1.62 legenda="f;\cos x" titolo="The projection retains the first harmonic. The difference is the second harmonic, whose amplitude is $\dfrac12$."}

:::

:::esempio{titolo="Energy retained and truncation error"}
In $\ell^2$, consider the sequence $u_n=2^{-n}$ for $n\geq1$. Its squared norm is the sum of the geometric series $\sum_{n\geq1}4^{-n}$ and equals $\dfrac13$. Projection onto the first three standard basis vectors retains the components $\dfrac12$, $\dfrac14$, and $\dfrac18$. To find the squared distance, sum the squares of the components from index $n=4$ onward. The first term of the tail is $4^{-4}$ and the common ratio is $\dfrac14$, so the sum is $\dfrac1{192}$.

In this example the error can be calculated without summing the entire series again. After the first $N$ terms, the distance is $\dfrac{2^{-N}}{\sqrt3}$. Retaining one more component halves the distance, since the first omitted component is also halved and the tail remains geometric. The same projection method works for sequences with a different decay rate. The rate of approximation then depends on the sum of the squared magnitudes of the omitted coefficients.
:::

## Riesz representation and weak convergence

::::teorema{#riesz-debole titolo="Functionals and weak convergence"}
Let $H$ be a Hilbert space over the scalar field $\mathbb K$. For every continuous linear functional $\ell:H\to\mathbb K$ there exists a unique $y\in H$ such that $\ell(x)=\langle x,y\rangle$, and $\|\ell\|=\|y\|$. This is the Riesz representation theorem. For $\ell(f)=\int_0^1f(x)x\,dx$ the representing vector is $y(x)=x$ and the norm is $\dfrac1{\sqrt3}$.

We write $x_n\rightharpoonup x$ if $\langle x_n,y\rangle\to\langle x,y\rangle$ for every $y\in H$. By Bessel's inequality, an orthonormal sequence converges weakly to zero despite having constant norm $1$. Weak convergence together with $\|x_n\|\to\|x\|$ implies norm convergence, as follows by expanding the square of $\|x_n-x\|$.

:::dimostrazione
To construct the representing vector, isolate the component orthogonal to the kernel of the functional. If $\ell=0$, take $y=0$. If $\ell\ne0$, choose $v$ such that $\ell(v)\ne0$. The kernel $K=\ker\ell$ is closed by continuity, so we can project $v$ onto $K$. The residual $u=v-P_Kv$ is orthogonal to $K$ and satisfies $\ell(u)=\ell(v)\ne0$.

For every $x$, the vector $x-\dfrac{\ell(x)}{\ell(u)}u$ belongs to $K$. Its inner product with $u$ therefore vanishes, giving
$$
\ell(x)=\frac{\ell(u)}{\|u\|^2}\langle x,u\rangle
       =\left\langle x,\frac{\overline{\ell(u)}}{\|u\|^2}u\right\rangle.
$$
The last step uses conjugation in the second argument. If two vectors represent $\ell$, their difference has zero inner product with every $x$. Taking the difference itself as the test vector shows that its norm is zero. The representing vector is therefore unique. Cauchy–Schwarz gives $\|\ell\|\le\|y\|$, and if $y\ne0$, the vector $\dfrac{y}{\|y\|}$ attains equality. For $y=0$ both norms are zero.
:::
::::

:::osservazione
The Riesz representation theorem allows us to compute an operator norm from a vector norm. For every unit vector $x$, Cauchy–Schwarz gives $|\ell(x)|\le\|y\|$. If $y\ne0$, taking $x=\dfrac{y}{\|y\|}$ gives equality. In the complex case the position of the conjugation matters. With the convention used here, the functional $f\mapsto\int f h$ has representing vector $\overline h$, whereas the functional $f\mapsto\int f\overline h$ has representing vector $h$.
:::

:::esempio{titolo="An inner product with a test vector and the norm"}
In $\ell^2$ choose $y=(1,\dfrac12,\dfrac13,\ldots)$, and let $e_n$ be the vector whose only nonzero component is a one in position $n$. Then $\langle e_n,y\rangle=\dfrac1n$. For any test vector $z\in\ell^2$, its components $z_n$ tend to zero because their squared absolute values form a convergent series. Consequently $\langle e_n,z\rangle\to0$, so $e_n$ converges weakly to zero. Yet every $\|e_n\|$ equals one.

::grafico{punti="1,1,pieno;2,0.5,pieno;3,0.3333333333333333,pieno;4,0.25,pieno;5,0.2,pieno;6,0.1666666666666667,pieno;7,0.1428571428571429,pieno" asintoti="y=0" xmin=0 xmax=7.7 ymin=-0.08 ymax=1.13 nomi="n,valore" titolo="The first few values of the inner product $\langle e_n,y\rangle=\dfrac1n$ for the chosen test vector. The norms $\|e_n\|$ are all $1$."}

To see how convergence of the norms complements weak convergence, expand $\|x_n-x\|^2=\|x_n\|^2+\|x\|^2-2\operatorname{Re}\langle x_n,x\rangle$. Weak convergence makes the last inner product tend to $\|x\|^2$. If the norms also tend to $\|x\|$, the squared distance tends to zero.
:::

:::teorema{#norma-limite-debole titolo="Bounding the norm of a weak limit"}
If $x_n\rightharpoonup x$ in a Hilbert space, then $\|x\|\leq\liminf_n\|x_n\|$. If $x=0$, the bound follows from nonnegativity of the norm. For $x\ne0$, use the test vector $\dfrac{x}{\|x\|}$. The inner products with that vector tend to $\|x\|$, and their absolute values are at most $\|x_n\|$ by Cauchy–Schwarz. Taking the limit inferior gives the conclusion.

For example, in $\ell^2$, set $v_n=2e_1+3e_n$ for $n\geq2$. For every fixed test vector, the component in the $e_n$ direction makes a contribution to the inner product that tends to zero. Hence the weak limit is $2e_1$. The terms have norm $\sqrt{13}$ because their two components are orthogonal. The limit, however, has norm two. Here the inequality is strict and the distance from $2e_1$ remains three.
:::
