---
titolo: "Lebesgue measure and integration"
sommario: "Measurability, simple functions, the Lebesgue integral, monotone convergence, Fatou's lemma, dominated convergence, and the theorems of Tonelli and Fubini."
---

## Sigma-algebras and measures

:::definizione{#misura titolo="Measure space"}
A sigma-algebra $\mathcal A$ on $X$ contains $X$ and is closed under complements and countable unions. A **measure** is a function $\mu:\mathcal A\to[0,+\infty]$ such that $\mu(\varnothing)=0$ and
$$
\mu\left(\bigcup_{n=1}^{\infty}E_n\right)=\sum_{n=1}^{\infty}\mu(E_n)
$$
for pairwise disjoint measurable sets. The triple $(X,\mathcal A,\mu)$ is a measure space. Monotonicity and countable subadditivity follow. A property holds almost everywhere if the exceptions lie in a measurable set of measure zero. Counting measure assigns each set its number of elements, so integrals become sums.
:::

:::osservazione
The sigma-algebra specifies which subsets can be measured. Closure under complements and countable unions also gives closure under countable intersections. For example, suppose $E_n$ describes the event that a value exceeds a threshold at step $n$. The event that this happens infinitely often is $\bigcap_{k=1}^\infty\bigcup_{n\ge k}E_n$. The two closure properties of a sigma-algebra ensure that this set is measurable as well.

Countable additivity applies to a disjoint family. If the sets overlap, first replace them by the successive new pieces $E_1$, $E_2\setminus E_1$, $E_3\setminus(E_1\cup E_2)$, and so on. The union is unchanged and each point is counted only once.
:::

:::esempio{titolo="A measure specified on the blocks of a partition"}
Let $X=\{1,2,3,4,5,6\}$ and consider the blocks $A=\{1,2\}$, $B=\{3\}$, and $C=\{4,5,6\}$. The family of all unions of these blocks is a sigma-algebra. The complement of a union is the union of the blocks left out, and any countable union selects at most three blocks. Assigning the blocks masses $\dfrac14$, $\dfrac13$, and $\dfrac5{12}$, respectively, gives a measure of total mass one. The measure of $A\cup C$ is $\dfrac14+\dfrac5{12}=\dfrac23$. The set $\{1,3\}$ does not belong to the sigma-algebra because it contains only part of the block $A$. To measure a subset in this space, one must first determine whether it is a union of the available blocks. With the sigma-algebra of all subsets, one could instead assign separate masses to the singletons.
:::

:::esempio{titolo="Two overlapping intervals"}
The intervals $[0,3]$ and $[2,4]$ have measures $3$ and $2$. Their common part $[2,3]$ has measure $1$. We can add the measure of $[0,3]$ to that of the new part $(3,4]$. The measure of the union is therefore $4$. This is the same value obtained by subtracting the measure of the intersection from the sum of the two measures.

::grafico{linee="0,1 3,1;2,2 4,2;0,3 4,3" segmenti="0,0,0,3;2,0,2,2;3,0,3,3;4,0,4,3" etichette="1,1.25,A;2.7,2.25,B;1.7,3.25,A ∪ B" xmin=-0.5 xmax=4.6 ymin=-0.3 ymax=3.8 titolo="The projections of the segments show the endpoints of $A=[0,3]$, $B=[2,4]$, and their union."}

:::

## Lebesgue measure

:::definizione{#lebesgue titolo="Outer measure and measurability"}
For $E\subseteq\mathbb R$, define
$$
m^*(E)=\inf\left\{\sum_n|I_n|:E\subseteq\bigcup_n I_n,\ I_n\text{ open intervals}\right\}.
$$
A set $E$ is Lebesgue measurable if, for every $A\subseteq\mathbb R$, we have $m^*(A)=m^*(A\cap E)+m^*(A\setminus E)$. Restricted to measurable sets, $m=m^*$ is a complete measure. Every subset of a null set is itself measurable and has measure zero.

The measure of an interval equals its length. Singletons have measure zero, so every countable set has measure zero. In particular, $\mathbb Q\cap[0,1]$ has measure zero despite being dense. In $\mathbb R^d$ the construction uses covers by rectangles.
:::

:::esempio{titolo="A dense set of measure zero"}
Enumerate the rationals in $[0,1]$ as $q_1,q_2,\ldots$. Fix $\varepsilon>0$ and surround $q_k$ with an open interval of length $\varepsilon 2^{-k}$. The resulting cover contains every rational in the interval and has total length $\varepsilon$. The definition of outer measure gives $m^*(\mathbb Q\cap[0,1])\le\varepsilon$. Since this bound holds for every $\varepsilon>0$, the measure is zero. Density means that every subinterval contains a rational. The estimate for the cover concerns the sum of the lengths assigned to all the rationals.

::grafico{linee="0.2,1 0.8,1;0.05,2 0.35,2;0.725,3 0.875,3" punti="0.5,1,pieno;0.2,2,pieno;0.8,3,pieno" etichette="0.51,1.28,q₁;0.22,2.28,q₂;0.8,3.28,q₃" xmin=-0.15 xmax=1.15 ymin=-0.1 ymax=3.65 titolo="The first three intervals around the enumerated rationals. Their widths decrease, and the cover continues through all indices."}

:::

:::osservazione
For an increasing sequence of measurable sets, the measure of their union is the limit of their measures. To see this, write the union as the disjoint union of the first set and the successive increments. A decreasing sequence has the corresponding continuity from above provided the first set has finite measure. Indeed, apply the increasing case to the complements relative to the first set. Finiteness allows us to subtract the measures. For the intervals $(n,+\infty)$, every measure is infinite and the intersection is empty.
:::

:::esempio{titolo="A null set obtained by removing open middle thirds"}
Start from $C_0=[0,1]$. At the first step, remove the open middle third and retain the two remaining closed intervals. Repeat this operation on every interval at each step. After $n$ steps, the set $C_n$ is the disjoint union of $2^n$ intervals of length $3^{-n}$, so $m(C_n)=\left(\dfrac23\right)^n$. The sets decrease and $m(C_0)=1$. Continuity from above therefore gives measure zero for their intersection $C=\bigcap_n C_n$. Each point of $C$ can be described by choosing the left or the right interval at each step. Every infinite sequence of choices determines a point, because the intervals are closed and nested and their lengths tend to zero. Two sequences that first differ at some step give distinct points, since the two intervals chosen at that step are disjoint. The set thus has as many points as there are infinite binary sequences, even though it has measure zero.
:::

## Measurable functions and simple functions

:::definizione{#semplici titolo="Measurability and integration of simple functions"}
A real-valued function $f$ is measurable if $\{x:f(x)>t\}\in\mathcal A$ for every $t\in\mathbb R$. Continuous functions on $\mathbb R$ are Borel measurable, and pointwise limits preserve measurability. A simple function is a finite sum $s=\sum_{j=1}^k a_j\mathbf1_{E_j}$, where the sets are measurable and pairwise disjoint. For $a_j\ge0$,
$$
\int s\,d\mu=\sum_{j=1}^k a_j\mu(E_j),
$$
with the convention $0\cdot\infty=0$. For example, $2\mathbf1_{[0,1]}+3\mathbf1_{(1,3]}$ has integral $2+6=8$. Every nonnegative measurable function is the pointwise limit of an increasing sequence of nonnegative simple functions.
:::

:::esempio{titolo="Level sets and approximation from below"}
For $f(x)=x$ on $[0,1)$, the set where $f>\dfrac12$ is the part to the right of $\dfrac12$. Its complement in the domain consists of the points where $f\le\dfrac12$. Partition the range into steps of width $\dfrac14$. This gives four bands. Assign to each point the lower endpoint of the band containing its function value. The resulting simple function takes the values $0$, $\dfrac14$, $\dfrac12$, and $\dfrac34$ on four intervals of equal measure. Its integral is therefore $\dfrac38$.

::grafico{curve="t,t,0,1" punti="1,1,vuoto" linee="0,0 0.25,0;0.25,0.25 0.5,0.25;0.5,0.5 0.75,0.5;0.75,0.75 1,0.75" segmenti="0.25,0,0.25,0.25;0.5,0,0.5,0.5;0.75,0,0.75,0.75" xmin=-0.1 xmax=1.12 ymin=-0.1 ymax=1.15 titolo="Steps of height one quarter below $f(x)=x$ on $[0,1)$. Each height is the lower endpoint of the corresponding band."}

For a nonnegative measurable function, the same construction rounds down to multiples of $2^{-n}$ and truncates above the level $n$. The preimages of the bands are measurable. As $n$ increases, the truncation level rises and each step is split in two. The approximations stay below the function and increase to its value at every point.
:::

:::osservazione
To verify measurability, it suffices to check rational thresholds. Indeed, if $f(x)>t$, there is a rational $q$ strictly between $t$ and $f(x)$. Conversely, $f(x)>q>t$ implies $f(x)>t$. Therefore
$$
\{f>t\}=\bigcup_{\substack{q\in\mathbb Q\\q>t}}\{f>q\}.
$$
The union on the right is countable. The same criterion explains why the supremum of a sequence of measurable functions is measurable. Its value exceeds $t$ precisely when at least one value in the sequence exceeds $t$. The corresponding level set is therefore the union of the sets $\{f_n>t\}$. The conclusion still holds if the supremum takes the value infinity. Applying it to the negatives of the functions gives measurability of infima. In particular, the infima of the tails of a measurable sequence are measurable. They can therefore be integrated, and the monotone convergence theorem can be applied to them in the proof of Fatou's lemma.
:::

## The Lebesgue integral

:::definizione{#integrale-lebesgue titolo="Integral of a measurable function"}
For measurable $f\ge0$, define
$$
\int f\,d\mu=\sup\left\{\int s\,d\mu:0\le s\le f,\ s\text{ simple}\right\}.
$$
For real-valued $f$, write $f=f^+-f^-$, where $f^+=\max(f,0)$ and $f^-=\max(-f,0)$. The integral is defined if at least one of the two integrals is finite. The function is **integrable** if $\int|f|<\infty$, in which case $\int f=\int f^+-\int f^-$. For complex-valued functions, integrate the real and imaginary parts separately.

Two measurable functions that agree almost everywhere have the same integral whenever it is defined. Thus $\int_0^1\mathbf1_{\mathbb Q}\,dm=0$. For a Riemann-integrable function on a compact interval, the Lebesgue integral agrees with the Riemann integral. An improper integral that converges only conditionally does not give the absolute integrability required for $L^1$.
:::

:::esempio{titolo="Signed area and the integral of the absolute value"}
For $f(x)=x-1$ on $[0,2]$, the positive part equals $x-1$ to the right of $1$, while the negative part equals $1-x$ to the left. Both areas equal $\dfrac12$. The integral of $f$ is their difference and equals zero. The integral of $|f|$ is their sum and equals one. It is this sum that determines integrability.

::grafico{f="x-1" area="0;x-1;0;1|x-1;0;1;2" punti="1,0,pieno" xmin=-0.2 xmax=2.2 ymin=-1.3 ymax=1.3 titolo="Both areas equal $\dfrac12$. The area on the left contributes negatively to the integral of $f$."}

:::

:::attenzione
For $f(x)=\dfrac1x$ on $(-1,1)$, the symmetric principal value is zero. However, the integrals of the positive and negative parts are both $+\infty$. The difference of these two infinities is indeterminate, so the Lebesgue integral of $f$ is undefined. The principal value links the two integration cutoffs, whereas the definition of the integral treats the two parts separately.
:::

:::esempio{titolo="Comparing a singularity with a tail at infinity"}
Consider $x^{-\alpha}$ for $x>0$, with $\alpha$ real. The function is continuous on every closed interval contained in the positive half-line. Near zero, first integrate over $[\varepsilon,1]$ with $0<\varepsilon<1$. For $\alpha\ne1$ the result is $\dfrac{1-\varepsilon^{1-\alpha}}{1-\alpha}$. If $\alpha<1$, the power of $\varepsilon$ tends to zero and the integral equals $\dfrac1{1-\alpha}$. If $\alpha>1$, the same expression tends to infinity. For $\alpha=1$, the truncated integral equals $-\log\varepsilon$ and diverges as the cutoff tends to zero. For the tail, integrate over $[1,R]$ instead. For $\alpha\ne1$ we obtain $\dfrac{R^{1-\alpha}-1}{1-\alpha}$, which has the finite limit $\dfrac1{\alpha-1}$ precisely when $\alpha>1$. For $\alpha=1$ we obtain $\log R$. In both cases the integrand is nonnegative, so the limits of the truncated integrals give the Lebesgue integral by monotone convergence. The two integrability conditions are incompatible, so the integral over the entire half-line is infinite for every $\alpha$.
:::

## Monotone convergence and Fatou's lemma

::::teorema{#convergenza-monotona titolo="Monotone convergence"}
Let $f_n$ and $f$ be measurable. If $0\le f_n\le f_{n+1}$ and $f_n\to f$ almost everywhere, then
$$
\int f\,d\mu=\lim_n\int f_n\,d\mu,
$$
even if the value is infinite. It follows that integration can be interchanged with summation for nonnegative functions.

:::dimostrazione
Monotonicity gives $\lim\int f_n\le\int f$. For a simple function $0\le s\le f$ and $0<c<1$, the sets $E_n=\{f_n\ge cs\}$ increase and cover $\{s>0\}$ up to a null set. Therefore $\int f_n\ge c\int_{E_n}s\to c\int s$. Take the supremum over $s$, then let $c$ tend to $1$.
:::
::::

::::teorema{#fatou titolo="Fatou's lemma"}
Let $(f_n)$ be a sequence of nonnegative measurable functions. Then
$$
\int\liminf_n f_n\,d\mu\le\liminf_n\int f_n\,d\mu.
$$
The lemma bounds the integral of the limit inferior even when there is no integrable majorant. For $f_n=n\mathbf1_{(0,\frac1n)}$, the limit is zero almost everywhere and the integrals equal $1$, so the inequality is strict.

:::dimostrazione
Approximate the limit inferior by the infima of the tails. For each $n$, let $h_n=\inf_{k\ge n} f_k$. The function $h_n$ is measurable because it is the infimum of a countable family of measurable functions. Moreover, $0\le h_n\le h_{n+1}$ and, by definition, $h_n\to\liminf_n f_n$ pointwise. The **monotone convergence theorem** therefore applies to $(h_n)$.

For each $k\ge n$, we have $h_n\le f_k$, so $\int h_n\,d\mu\le\int f_k\,d\mu$. Taking the infimum over all these indices and then the limit in $n$ gives
$$
\begin{aligned}
\int\liminf_n f_n\,d\mu
&=\lim_{n\to\infty}\int h_n\,d\mu \\
&\le\lim_{n\to\infty}\inf_{k\ge n}\int f_k\,d\mu \\
&=\liminf_n\int f_n\,d\mu.
\end{aligned}
$$
:::
::::

:::esempio{titolo="Increasing truncations without an integrable majorant"}
On $(0,1)$, let $f_n(x)=\min(n,\dfrac1x)$. Each $f_n$ has finite integral and the sequence increases pointwise to $\dfrac1x$. Separating the constant part from the part where the function equals $\dfrac1x$ gives
$$
\int_0^1 f_n(x)\,dx
=\int_0^{\frac1n}n\,dx+\int_{\frac1n}^1\dfrac{dx}{x}
=1+\log n.
$$
The limit is infinite, as predicted by monotone convergence. The theorem applies because the functions are nonnegative and increase at each point. Its hypotheses allow the absence of an integrable majorant.

::grafico{f="min(2,1/x);min(4,1/x);min(8,1/x)" punti="0.5,2,pieno;0.25,4,pieno;0.125,8,pieno" xmin=0.005 xmax=1 ymin=0 ymax=9 legenda="f_2;f_4;f_8" titolo="As $n$ increases, the truncation level rises. The area grows to infinity as $1+\log n$."}

:::

:::osservazione
In the rectangles in the example for Fatou's lemma, the support shrinks while the height grows. The product of base and height remains one. For each $x>0$, the index beyond which the support excludes $x$ depends on the point, so the pointwise limit is zero even though every integral equals one.

::grafico{linee="0,2 0.5,2 0.5,0;0,4 0.25,4 0.25,0;0,8 0.125,8 0.125,0" etichette="0.49,2.4,n = 2;0.27,4.38,n = 4;0.18,8.3,n = 8" xmin=-0.05 xmax=0.65 ymin=-0.2 ymax=9.1 titolo="The rectangles in the sequence illustrating Fatou's lemma all have area $1$. Their supports shrink toward $0$."}

:::

:::esempio{titolo="A sum of steps with increasing heights"}
For each positive integer $k$, let $I_k=(2^{-k},2^{1-k}]$. These disjoint intervals cover $(0,1]$. Set $f(x)=k$ when $x\in I_k$. The function is measurable and grows without bound as $x$ approaches zero from the right. The partial sum $s_N=\sum_{k=1}^N k\mathbf1_{I_k}$ is zero on the intervals omitted, so $s_N$ increases pointwise to $f$. Since each interval has length $2^{-k}$,
$$
\int_0^1s_N\,dm=\sum_{k=1}^N \frac{k}{2^k}
=2-\frac{N+2}{2^N}.
$$
The last equality follows by induction. It holds for $N=1$, and passing from $N$ to $N+1$ adds $\dfrac{N+1}{2^{N+1}}$ to both sides. Since $\dfrac{N+2}{2^N}$ tends to zero, monotone convergence gives an integral of two. In this example, the shrinking widths of the intervals offset the growing heights.
:::

## Dominated convergence

::::teorema{#dominata titolo="Dominated convergence"}
Let $f_n$ and $f$ be measurable. If $f_n\to f$ almost everywhere and there exists $g\in L^1(\mu)$ such that $|f_n|\le g$ almost everywhere for every $n$, then $f\in L^1(\mu)$ and
$$
\int|f_n-f|\,d\mu\to0,\qquad \int f_n\,d\mu\to\int f\,d\mu.
$$
For $f_n(x)=\dfrac{e^{-x}}{1+\dfrac{x}{n}}$ on $(0,\infty)$, the dominating function $e^{-x}$ is integrable and coincides with the limit. The theorem therefore gives the limit of the integrals without requiring us to integrate each quotient.

:::dimostrazione
Apply Fatou's lemma to the difference between an integrable upper bound and the error. Outside the union of the exceptional sets, all the bounds and pointwise convergence hold, so $|f|\le g$ holds there as well. The limit function and every term of the sequence are therefore integrable. The triangle inequality gives $0\le |f_n-f|\le 2g$ almost everywhere. Hence the functions $2g-|f_n-f|$ are measurable, nonnegative almost everywhere, and converge to $2g$ almost everywhere. We can redefine them on a common null set before applying **Fatou's lemma**, which gives
$$
\begin{aligned}
\int 2g\,d\mu
&\le\liminf_n\int (2g-|f_n-f|)\,d\mu \\
&=\int 2g\,d\mu-\limsup_n\int|f_n-f|\,d\mu.
\end{aligned}
$$
Since $\int 2g\,d\mu$ is finite, it follows that $\limsup_n\int|f_n-f|\,d\mu\le0$. The error integrals are nonnegative and therefore tend to zero. Finally, $\left|\int f_n\,d\mu-\int f\,d\mu\right|\le\int|f_n-f|\,d\mu$, so the integrals of the functions converge as well.
:::
::::

:::esempio{titolo="Choosing a dominating function on a half-line"}
To check domination in this example, observe that the denominator is at least one for every $n$ and every $x>0$. The exponential is therefore an upper bound independent of the index. Since $\int_0^\infty e^{-x}\,dx=1$, the dominating function is integrable over the domain in question. For each fixed $x$, $\dfrac xn$ tends to zero. The theorem gives the limit without integrating the quotient separately for each $n$.

::grafico{f="exp(-x);exp(-x)/(1+x);exp(-x)/(1+x/4)" xmin=0 xmax=5 ymin=0 ymax=1.12 legenda="e^{-x};f_1;f_4" titolo="The curve $e^{-x}$ bounds both $f_1$ and $f_4$ from above and coincides with the pointwise limit."}

When a function has a singularity or its domain is unbounded, different bounds may be used on different parts of the domain. For example, for $f_n(x)=\dfrac{1}{(1+x^2)(1+\dfrac{x}{n})}$ on $(0,\infty)$, take the dominating function equal to $1$ on $(0,1]$ and $x^{-2}$ on $(1,\infty)$. Both pieces are integrable and the pointwise limit is $\dfrac1{1+x^2}$. The limit of the integrals is therefore $\dfrac{\pi}{2}$.
:::

:::osservazione
Convergence in the $L^1$ norm bounds the absolute error, so positive and negative contributions cannot cancel before the estimate is made. The pointwise limit identifies the limiting function, and integrability of $g$ makes the subtraction in the proof valid.

A sequence of translates such as $\mathbf1_{(n,n+1)}$ on the real line shows that taking a limit and integrating can give different results depending on their order, even when the peak height stays fixed. The height remains one and each integral equals one, but the rectangle passes each fixed point at most once, so the limit is zero. A common dominating function must be at least one on all these intervals and therefore has infinite integral.
:::

:::esempio{titolo="A change of variable before applying dominated convergence"}
On $(0,\infty)$, consider $f_n(x)=\dfrac{ne^{-x}}{1+n^2x^2}$. For each $x>0$, the function tends to zero because the denominator grows quadratically in $n$ while the numerator grows linearly. The substitution $u=nx$ gives
$$
\int_0^\infty f_n(x)\,dx
=\int_0^\infty \frac{e^{-\frac un}}{1+u^2}\,du .
$$
For fixed $u$, the integrand on the right tends to $\dfrac1{1+u^2}$. This same function is an integrable majorant on the entire half-line, since $e^{-\dfrac un}\le1$. Dominated convergence therefore gives $\lim_n\int_0^\infty f_n\,dx=\dfrac{\pi}{2}$. In the original coordinates, however, the limit function has integral zero. The change of scale reveals the contribution from values of $x$ close to zero. For example, the integral of $f_n$ over $(0,\dfrac1n)$ equals the integral of the new integrand over $(0,1)$ and tends to $\dfrac{\pi}{4}$. The positive limit of the integral rules out a common integrable majorant in the variable $x$.
:::

## Tonelli's and Fubini's theorems

:::teorema{#fubini titolo="Integration on product spaces"}
On sigma-finite measure spaces, **Tonelli's theorem** equates the double integral and the iterated integrals for nonnegative measurable functions, even when the value is infinite. If $\int|f|<\infty$, **Fubini's theorem** gives integrable sections almost everywhere and
$$
\int_{X\times Y}f\,d(\mu\otimes\nu)
=\int_X\left(\int_Y f\,d\nu\right)d\mu
=\int_Y\left(\int_X f\,d\mu\right)d\nu.
$$
For $e^{-x-2y}$ on the positive quadrant, Tonelli's theorem allows the two integrals to be separated and gives $\dfrac12$. For a function that changes sign, first check absolute integrability.
:::

:::esempio{titolo="Two orders of integration over the same triangle"}
Integrate $x$ over the domain $D=\{(x,y):0<y<x<1\}$. The integrand $x\mathbf1_D$ is measurable and nonnegative, so Tonelli's theorem allows either order. For fixed $x$, the vertical section is $0<y<x$. For fixed $y$, the horizontal section is $y<x<1$. Both orders give the same value:
$$
\int_0^1\int_0^x x\,dy\,dx
=\int_0^1x^2\,dx=\dfrac13,
\qquad
\int_0^1\int_y^1 x\,dx\,dy
=\int_0^1\dfrac{1-y^2}{2}\,dy=\dfrac13.
$$

::grafico{poligoni="0,0 1,0 1,1" linee="0,0 1,1 1,0 0,0;0.7,0 0.7,0.7;0.3,0.3 1,0.3" xmin=-0.12 xmax=1.22 ymin=-0.12 ymax=1.16 uguale=1 titolo="The triangle $D$ with a vertical section at $x=\dfrac7{10}$ and a horizontal section at $y=\dfrac3{10}$."}

:::

:::attenzione
To see why absolute integrability matters, consider $a(i,j)=\mathbf1_{\{j=i\}}-\mathbf1_{\{j=i+1\}}$ on pairs of positive integers, using counting measure in both variables. Summing over $j$ for fixed $i$ gives zero, since each row contains one $1$ and one $-1$. Summing over $i$ for fixed $j$ gives one when $j=1$ and zero when $j\ge2$, since the first column lacks the negative contribution. The two iterated sums therefore give zero and one. The sum of $|a(i,j)|$ is infinite, so the hypothesis of Fubini's theorem fails.
:::

:::esempio{titolo="Recovering the integral from the measures of level sets"}
Let $f(x)=\sqrt{x}$ on $(0,4)$. For fixed $x$, the indicator of the condition $0<t<f(x)$ has integral with respect to $t$ equal to $f(x)$. The indicator is measurable and nonnegative, so Tonelli's theorem allows us to integrate first with respect to $x$. For $0<t<2$, the condition $\sqrt{x}>t$ is equivalent to $t^2<x<4$. The section therefore has measure $4-t^2$. For $t\ge2$, the section is empty. It follows that
$$
\int_0^4\sqrt{x}\,dx
=\int_0^2 (4-t^2)\,dt
=\frac{16}{3}.
$$
This calculation expresses the integral in terms of the measure of the set where the function exceeds each height. The same construction applies to a nonnegative measurable function on a sigma-finite measure space. For each height $t$, the contribution is the measure of $\{f>t\}$. The formula is useful when these measures are known, even if $f$ takes its values on irregularly shaped sets.
:::

## Integrals depending on a parameter

::::teorema{#parametri titolo="Differentiation under the integral sign"}
Let $I$ be an open interval. Suppose that $F(t,x)$ is real-valued, measurable in $x$ for every $t$, and integrable in $x$ for one value $t_0$. Assume also that $t\mapsto F(t,x)$ is differentiable on $I$ for every $x$ outside a fixed null set. Finally, suppose that on every compact subinterval of $I$ there is an integrable function dominating $|\partial_tF(t,x)|$ for all parameters in the subinterval simultaneously, except on a null set of values of $x$. Then
$$
\frac d{dt}\int F(t,x)\,d\mu(x)=\int\partial_tF(t,x)\,d\mu(x).
$$
For $t>0$, differentiating $\int_0^\infty e^{-tx}\,dx=\dfrac1t$ gives $\int_0^\infty xe^{-tx}\,dx=\dfrac1{t^2}$.

:::dimostrazione
Use the majorant for the derivative to bound the difference quotients. For every $t\in I$, the segment joining $t_0$ and $t$ lies in a compact subinterval $J$ of $I$. Applying the **mean value theorem** in $t$ gives $|F(t,x)-F(t_0,x)|\le |t-t_0|g_J(x)$ almost everywhere, where $g_J$ is the integrable majorant on that compact interval. Since $F(t_0,\cdot)$ is integrable, so is $F(t,\cdot)$.

Fix $t$ and choose a compact interval $K\subset I$ containing $t$ in its interior. For sufficiently small $h\ne0$, the segment from $t$ to $t+h$ lies in $K$. A second application of the mean value theorem gives
$$
\left|\frac{F(t+h,x)-F(t,x)}{h}\right|\le g_K(x)
$$
almost everywhere, with the same majorant for all such increments. The quotients are measurable in $x$ and converge almost everywhere to $\partial_tF(t,x)$ by differentiability. Apply **dominated convergence** along every sequence of nonzero increments tending to zero. The integrals of the quotients converge to the integral of the partial derivative. Hence the difference quotient of the integral has a limit, and its value is the one stated.
:::
::::

:::osservazione
The bound on the derivative may depend on the neighborhood of the parameter at which one differentiates. In the exponential example, fix $t_*>0$ and take $t$ between $\dfrac{t_*}{2}$ and $\dfrac{3t_*}{2}$. By the mean value theorem, $x e^{-\dfrac{t_*}{2}x}$ dominates the difference quotients. This bound applies before taking the limit. For each $x$ the difference quotient converges to $-xe^{-t_*x}$. Dominated convergence therefore justifies writing the derivative of the integral as the integral of the derivative.

::grafico{f="x*exp(-x/2);x*exp(-x);x*exp(-3*x/2)" xmin=0 xmax=9 ymin=0 ymax=0.84 legenda="xe^{-x/2};xe^{-x};xe^{-3x/2}" titolo="For $t$ between $\dfrac12$ and $\dfrac32$, $xe^{-\dfrac x2}$ dominates $|\partial_t e^{-tx}|$."}

Finding an integral from an antiderivative in the parameter also requires an initial value. Set $G(t)=\int_0^1\dfrac{\log(1+tx)}{x}\,dx$ for $t>-1$. On a compact interval contained in $(-1,\infty)$, the derivative of the integrand is $\dfrac1{1+tx}$ and is uniformly bounded on $(0,1)$. Hence $G'(t)=\dfrac{\log(1+t)}{t}$ for $t\ne0$, and $G'(0)=1$. The value $G(0)=0$ then gives $G(t)=\int_0^t\dfrac{\log(1+s)}{s}\,ds$, with the function extended by continuity at zero.
:::

:::esempio{titolo="A difference of exponentials divided by the variable"}
For $t>0$, consider
$$
H(t)=\int_0^\infty \frac{e^{-x}-e^{-tx}}{x}\,dx .
$$
The integrand is measurable in $x$ and differentiable in $t$ for every $x>0$. At $t=1$ it vanishes identically and is therefore integrable for at least one parameter value. Its derivative with respect to $t$ is $e^{-tx}$. On a compact interval $[a,b]\subset(0,\infty)$, the function $e^{-ax}$ dominates the derivative for every $t$ and has integral $\dfrac1a$. The hypotheses for differentiation under the integral sign are therefore satisfied, and
$$
H'(t)=\int_0^\infty e^{-tx}\,dx=\frac1t .
$$
Integrating with respect to the parameter between $1$ and $t$ gives $H(t)=\log t$. An initial value at which the numerator vanishes allows the theorem to be applied directly to the difference. Separating the exponentials would instead give two integrals that diverge near zero, since each numerator tends to one.
:::
