---
titolo: "Complex analysis: Cauchy's theorem, Laurent series, and residues"
sommario: "Oriented paths, Cauchy's theorem and integral formula, Laurent series, singularities, residues, and the evaluation of real integrals."
---

## Integration along a path

:::definizione{#integrale-complesso titolo="Contour integrals and orientation"}
For a piecewise $C^1$ path $\gamma:[a,b]\to\mathbb C$ and a function $f$ continuous on its image, we define
$$
\int_\gamma f(z)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt.
$$
Reversing the limits of the parametrization changes the sign of the integral. The estimate $\left|\int_\gamma f\,dz\right|\le L(\gamma)\max_\gamma|f|$ holds. For $\gamma(t)=a+re^{it}$ with $0\le t\le2\pi$, we have $dz=ire^{it}dt$ and $\int_\gamma\dfrac{dz}{z-a}=2\pi i$. The orientation is counterclockwise.
:::

:::esempio{titolo="A segment and a semicircle with the same endpoints"}
For $f(z)=\overline z$, compare the segment directed from $-1$ to $1$ with the upper semicircle directed from the same initial point to the same terminal point. On the segment, $\overline z=z=x$, so the integral is $\int_{-1}^1 x\,dx=0$. Parametrize the semicircle by $z=e^{it}$, letting $t$ decrease from $\pi$ to zero. Here $\overline z=e^{-it}$ and $dz=ie^{it}\,dt$, so their product is $i\,dt$ and the integral equals $-i\pi$. Thus the endpoints alone do not determine the integral when the function has no antiderivative on the domain containing both paths.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.6 xmax=1.6 ymin=-0.8 ymax=1.5 curve="cos(t),sin(t),0,3.141592653589793" linee="-1,0 1,0" vettori="-0.6,0,0.45,0;-0.22,0.98,0.23,0.98" punti="-1,0,pieno;1,0,pieno" titolo="A segment and an upper semicircular arc directed from $-1$ to $1$. The angle decreases along the second path"}
:::

:::osservazione
In the length estimate, the maximum is taken along the path. On the circle $|z|=R$ with $R>1$, the reverse triangle inequality gives $|z-1|\ge R-1$. Therefore the modulus of the integral of $\dfrac1{(z-1)^2}$ is at most $\dfrac{2\pi R}{(R-1)^2}$. This bound tends to zero as $R$ increases, even though the length of the curve also grows. These two effects must be weighed against each other when an arc is used to close a real segment.
:::

:::esempio{titolo="Traversing the same circle several times"}
Let $\gamma(t)=1+2e^{3it}$ with $0\le t\le2\pi$. Its image is the circle centered at one with radius two. The argument of $\gamma(t)-1$ increases by $6\pi$, so the path makes three counterclockwise turns. In the integral of $\dfrac1{z-1}$, the exponential factor in $\gamma'(t)$ cancels the one in the denominator. We obtain
$$
\int_\gamma \frac{dz}{z-1}
=\int_0^{2\pi} \frac{6i e^{3it}}{2e^{3it}}\,dt
=6\pi i .
$$
Traversing the same circle once gives $2\pi i$. Thus in this example the integral depends both on the orientation and on the number of times the circle is traversed.
:::

## Antiderivatives and Cauchy's theorem

:::teorema{#cauchy titolo="Antiderivatives and Cauchy's theorem"}
If $F'=f$ on an open set containing the path, the chain rule and the fundamental theorem of calculus for real variables give
$$
\int_\gamma f\,dz=F(\gamma(b))-F(\gamma(a)).
$$
Hence the integral around a closed path is zero. If $f$ is holomorphic on a simply connected open set $\Omega$, **Cauchy's theorem** says that the integral around every closed path in $\Omega$ vanishes. It follows that an antiderivative exists. Fix $z_*$ and define $F(z)$ as the integral from $z_*$ to $z$. The vanishing of all integrals around closed paths makes this value independent of the path. The local result underlying the theorem is Goursat's triangle lemma.

For $f(z)=z^2$, an antiderivative is $\dfrac{z^3}3$. For $\dfrac1z$ on the punctured plane, the integral around the unit circle equals $2\pi i$. The domain is not simply connected.
:::

::::teorema{#lemma-goursat titolo="Goursat's triangle lemma"}
Let $T$ be a closed triangle contained in an open set on which $f$ is holomorphic. On the positively oriented boundary, $\displaystyle\int_{\partial T}f(z)\,dz=0$. The lemma implies that integrals vanish around polygonal boundaries that enclose triangulable regions in the open set, because each interior edge is traversed twice with opposite orientations.

:::dimostrazione
The idea is to compare the boundary integral with integrals around successively smaller triangles and use differentiability at their common point. Joining the midpoints of the sides divides $T$ into four triangles. The integrals along the interior edges cancel, so the four boundary integrals sum to the original integral. At least one of them therefore has modulus at least one quarter of the modulus of the original integral. Repeating the choice gives a sequence of nested closed triangles $T_n$ with diameters equal to $2^{-n}$ times the original diameter. The triangles share a point $z_*$, and their perimeters shrink by the same factor $2^{-n}$.

Near $z_*$, the modulus of the difference between $f$ and its affine approximation is at most $\varepsilon|z-z_*|$ for each $\varepsilon>0$, provided the point is sufficiently close. The affine part has a polynomial antiderivative, so its integral around a closed boundary is zero. Let $D$ and $L$ be the diameter and perimeter of $T$, respectively. For sufficiently large $n$, the length estimate gives
$$
4^{-n}\left|\int_{\partial T}f(z)\,dz\right|
\le \left|\int_{\partial T_n}f(z)\,dz\right|
\le \varepsilon DL\,4^{-n}.
$$
After canceling the common factor, we may let $\varepsilon$ tend to zero. The original integral therefore vanishes.
:::
::::

:::osservazione
A closed curve can lie entirely within a domain without its interior being contained in the domain. In the punctured plane, compare the circle $|z|=1$ with the circle of radius $\dfrac12$ centered at $2$. The first encloses the origin, and the integral of $\dfrac1z$ equals $2\pi i$. The second encloses a disk on which the integrand is holomorphic, so the integral is zero. The location of the excluded point explains the difference, even though the function is holomorphic near both curves.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.6 xmax=3 ymin=-1.5 ymax=1.5 curve="cos(t),sin(t),0,6.283185307179586;2+0.5*cos(t),0.5*sin(t),0,6.283185307179586" punti="0,0,vuoto,0;2,0,pieno,2" titolo="In the punctured plane the left-hand curve encloses the excluded point. The right-hand curve encloses a disk contained in the domain"}
:::

## Cauchy's integral formula and its consequences

::::teorema{#formula-cauchy titolo="Cauchy's integral formula"}
Let $\gamma$ be a simple, closed, positively oriented, piecewise $C^1$ curve. If $f$ is holomorphic on an open set containing the curve and its interior, then for every interior point $a$ and integer $n\ge0$ we have
$$
\int_\gamma\frac{f(z)}{(z-a)^{n+1}}\,dz=\frac{2\pi i}{n!}f^{(n)}(a).
$$
For $n=0$ the formula follows by subtracting $f(a)$ and applying Cauchy's theorem. Differentiating with respect to $a$ gives the other cases. For $f(z)=e^{2z}$ on $|z|=1$, the integral of $\dfrac{e^{2z}}{z^3}$ equals $4\pi i$.

For a closed disk with center $a$ and radius $R>0$ contained in the domain of holomorphy, **Cauchy's estimates** give $|f^{(n)}(a)|\le\dfrac{n!M_R}{R^n}$, where $M_R=\max_{|z-a|=R}|f(z)|$. A bounded entire function is constant, because for $n=1$ the bound tends to zero as $R\to\infty$. This is Liouville's theorem.

:::dimostrazione
For $n=0$, write $f(z)=f(a)+(z-a)g(z)$. The definition of the derivative shows that $g$ is bounded near $a$. Since $g$ is holomorphic away from $a$, the contour can be deformed into a small circle centered at $a$. A cut joining the two boundaries allows us to apply Cauchy's theorem to the slit region. The contributions from opposite sides of the cut cancel. The modulus of the integral of $g$ is bounded by the length of this circle times a uniform upper bound for $|g|$. Letting the radius shrink to zero shows that the integral vanishes. The remaining term is $f(a)$ times the integral of $\dfrac1{z-a}$, which equals $2\pi i$ on every positively oriented simple contour enclosing $a$. This value follows by deforming the contour into a small circle centered at $a$. To differentiate with respect to $a$, we may restrict $a$ to a disk inside the curve. The positive distance from the contour gives uniform bounds on the derivatives of the kernel along the path.
:::
::::

:::teorema{#identita-massimo titolo="The identity theorem and the maximum modulus principle"}
On a connected domain, two holomorphic functions that agree on a set with an accumulation point in the domain agree everywhere. The modulus of a nonconstant holomorphic function on a connected domain has no local maximum. These results follow from the local Taylor expansion and Cauchy's integral formula.

If a function is holomorphic on a neighborhood of a closed disk, its maximum modulus is therefore attained on the boundary. The accumulation point in the identity theorem must lie inside the domain. Zeros accumulating only at a boundary point are insufficient.
:::

:::esempio{titolo="How the formula changes with the location of the point"}
Consider the integral of $\dfrac{z^2+1}{z-a}$ around the positively oriented circle $|z|=2$. For $a=1$, the numerator is holomorphic on the entire disk and the point lies inside, so Cauchy's formula gives $2\pi i(1^2+1)=4\pi i$. For $a=3$, the quotient itself is holomorphic on the disk, so the integral is zero. For $a=2$ the formula does not apply because the denominator vanishes on the path. To distinguish the three cases, compare the point's distance from the center with the radius before evaluating the numerator.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.6 xmax=3.7 ymin=-2.6 ymax=2.6 curve="2*cos(t),2*sin(t),0,6.283185307179586" punti="1,0,pieno,1;2,0,vuoto,2;3,0,pieno,3" titolo="The points $1$, $2$, and $3$ lie inside, on, and outside $|z|=2$, respectively"}
:::


:::esempio{titolo="Cauchy's estimates and linear growth"}
Let $f$ be entire, and suppose that $|f(z)|\le A+B|z|$ holds for every $z$, with $A,B\ge0$. On a circle with center $a$ and radius $R$ we have $|z|\le |a|+R$, so Cauchy's estimates give
$$
|f''(a)|\le \frac{2\big(A+B|a|+BR\big)}{R^2}.
$$
The center $a$ stays fixed, and the radius may grow without bound because the function is entire. The right-hand side tends to zero, so $f''(a)=0$ at every point. It follows that $f'$ is constant and $f(z)=c_0+c_1z$. Here we apply the estimate to the second derivative because the maximum on the circle may grow linearly with the radius.
:::

:::esempio{titolo="Maximum modulus and level sets of a power"}
For $f(z)=z^2$ we have $|f(z)|=|z|^2$. Thus points of the same modulus have images of the same modulus. On the disk $|z|\le2$ the maximum is $4$, attained on the entire boundary circle, while the modulus is smaller in the interior. The maximum modulus principle rules out an interior maximum even for a nonconstant holomorphic function with differently shaped level sets. It therefore suffices to look for the maximum on the boundary of the disk.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=2.7 ymin=-2.7 ymax=2.7 curve="2*cos(t),2*sin(t),0,6.283185307179586;cos(t),sin(t),0,6.283185307179586" etichette="1.05,1.85,|f| = 4;0.45,0.86,|f| = 1" titolo="The level sets of the modulus of $z^2$ at radii one and two show how the modulus varies with distance from the origin"}
:::

## Taylor and Laurent expansions

::::teorema{#laurent titolo="Laurent series"}
If $f$ is holomorphic on the annulus $r<|z-a|<R$, it has the unique expansion
$$
f(z)=\sum_{n=-\infty}^{\infty}c_n(z-a)^n,\qquad
c_n=\frac1{2\pi i}\int_{|\zeta-a|=\rho}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta,
$$
where $r<\rho<R$ and the circle is positively oriented. Both parts of the series converge uniformly on compact subsets of the annulus. In a disk of holomorphy, the coefficients of negative powers vanish and $c_n=\dfrac{f^{(n)}(a)}{n!}$, giving the Taylor expansion.

For $0<|z|<2$,
$$
\frac1{z(z-2)}=-\frac1{2z}\frac1{1-\frac z2}
=-\sum_{n=0}^{\infty}\frac{z^{n-1}}{2^{n+1}}.
$$
For $|z|>2$, we instead expand in powers of $\dfrac2z$. Each expansion must specify its own annulus of convergence.

:::dimostrazione
The idea is to apply Cauchy's formula between two circles and expand the kernel differently on each one. Fix a point $z$ of the annulus and choose two radii $\rho_-$ and $\rho_+$ with $r<\rho_-<|z-a|<\rho_+<R$. Denote by $\gamma_-$ and $\gamma_+$ the two circles centered at $a$, both oriented counterclockwise. The point $z$ lies between the two circles. Remove a small disk centered at $z$. Join the two inner boundaries to the outer boundary by two disjoint cuts, so that Cauchy's theorem applies to the slit region. The contributions from the two sides of each cut cancel. On the small circle centered at $z$, apply Cauchy's formula. This gives
$$
f(z)=\frac1{2\pi i}\int_{\gamma_+}\frac{f(\zeta)}{\zeta-z}\,d\zeta
-\frac1{2\pi i}\int_{\gamma_-}\frac{f(\zeta)}{\zeta-z}\,d\zeta.
$$
The minus sign in front of the second integral accounts for the clockwise orientation of the inner boundary of the region. On the outer boundary the ratio $\dfrac{z-a}{\zeta-a}$ has modulus less than one, so the geometric series for the kernel gives nonnegative powers of $z-a$. On the inner boundary the ratio with modulus less than one is $\dfrac{\zeta-a}{z-a}$. There the kernel expands as
$$
\frac1{\zeta-z}
=-\sum_{k=0}^{\infty}\frac{(\zeta-a)^k}{(z-a)^{k+1}},
$$
where the minus sign cancels the sign of the inner boundary contribution. This gives the negative powers of $z-a$. If the two radii bracket an entire compact subannulus, the moduli of both ratios have a common upper bound strictly less than one. This justifies integration term by term and uniform convergence on compact subsets.

The coefficient integrals have the same values on every intermediate circle, by Cauchy's theorem applied between any two such circles. To show uniqueness, start with any expansion converging uniformly on compact subsets. Multiplying by $(z-a)^{-n-1}$ and integrating on an intermediate circle isolates the term of degree $n$, because every other power has integral zero. This yields the same formula for $c_n$.
:::
::::

:::osservazione
In a Laurent expansion, the center and the singularities determine the relevant radii. For the function $\dfrac1{z(z-2)}$, the center at zero is a pole, and the second pole is at distance two. For $0<|z|<2$, the series uses the ratio $\dfrac z2$, which has modulus less than one. For $|z|>2$, rewrite the function as $z^{-2}\big(1-\dfrac2z\big)^{-1}$. The resulting series starts with $z^{-2}$ and contains only negative powers. Thus the coefficient of $z^{-1}$ is zero in the outer expansion, whereas in the local expansion around the first pole it equals $-\dfrac12$. To find a residue, use the expansion on a punctured disk whose center is the only excluded singularity.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.5 xmax=3.8 ymin=-3.4 ymax=3.4 curve="2*cos(t),2*sin(t),0,6.283185307179586;cos(t),sin(t),0,6.283185307179586;3*cos(t),3*sin(t),0,6.283185307179586" punti="0,0,vuoto,0;2,0,vuoto,2" titolo="The circles of radii one and three lie in different annuli separated by the pole $z=2$"}
:::

## Singularities and residues

:::definizione{#singolarita titolo="Isolated singularities and residues"}
If $f$ is holomorphic on a punctured disk centered at $a$, the Laurent series classifies the singularity.

- If all coefficients of negative powers vanish, the singularity is removable.
- If there are finitely many terms with negative powers and the lowest power is $-m$, the singularity is a pole of order $m$.
- If infinitely many negative powers occur, the singularity is essential.

The **residue** is $c_{-1}$. At a simple pole of $\dfrac gh$, where $g,h$ are holomorphic, $h(a)=0$, $h'(a)\ne0$, and $g(a)\ne0$, we have $\operatorname{Res}(\dfrac gh,a)=\dfrac{g(a)}{h'(a)}$. For a pole of order $m$,
$$
\operatorname{Res}(f,a)=\frac1{(m-1)!}
\left[\frac{d^{m-1}}{dz^{m-1}}\big((z-a)^mf(z)\big)\right]_{z=a}.
$$
At zero, $\dfrac{\sin z}z$ has a removable singularity, $\dfrac1{z^3}$ has a triple pole with residue zero, and $e^{\frac1z}$ has an essential singularity with residue $1$. For $e^{\frac az}$ the series $\sum_{n=0}^\infty\dfrac{a^n}{n!z^n}$ shows that when $a\ne0$, the singularity is essential and the residue is $a$.
:::

:::esempio{titolo="An isolated singularity and an accumulation point"}
Zero is an isolated essential singularity of $e^{\frac1z}$, which is holomorphic on every punctured disk centered at zero. For $\dfrac1{\sin\bigl(\dfrac1z\bigr)}$, however, the domain excludes not only zero but also all the points $z_k=\dfrac1{k\pi}$ with $k\ne0$. Each such point is a simple pole. Indeed, the derivative of the denominator is $-\dfrac{\cos\bigl(\dfrac1z\bigr)}{z^2}$, and its value at $z_k$ is nonzero. Since the poles accumulate at the origin, there is no punctured disk about zero on which the function is holomorphic. The Laurent classification on a punctured disk applies to the individual poles. At zero the singularity is not isolated.

::grafico{uguale=1 nomi="Re,Im" xmin=-0.55 xmax=0.55 ymin=-0.24 ymax=0.24 punti="-0.31831,0,vuoto;-0.15915,0,vuoto;-0.10610,0,vuoto;-0.07958,0,vuoto;0,0,vuoto;0.07958,0,vuoto;0.10610,0,vuoto;0.15915,0,vuoto;0.31831,0,vuoto" titolo="The first poles of $\dfrac{1}{\sin\bigl(\dfrac1z\bigr)}$, with real coordinates $\dfrac1{k\pi}$, approach the origin from both sides"}
:::

:::attenzione
A zero residue gives information about only one coefficient. For example, the expansion
$$
e^{\frac1{z^2}}=\sum_{k=0}^{\infty}\frac{z^{-2k}}{k!}
$$
contains infinitely many even negative powers, so zero is an essential singularity. The power $z^{-1}$ is absent, and the residue is zero. Thus the integral around a circle centered at zero vanishes, even though the integrand has an essential singularity inside.
:::

## The residue theorem and real integrals

::::teorema{#residui titolo="The residue theorem"}
Let $\gamma$ be a simple, closed, positively oriented, piecewise $C^1$ curve. If $f$ is holomorphic on a neighborhood of the curve and its interior except at finitely many isolated interior singularities $a_j$, then
$$
\int_\gamma f(z)\,dz=2\pi i\sum_j\operatorname{Res}(f,a_j).
$$
The singularities must lie off the path. Reversing the orientation changes the sign. The formula replaces integration along the contour with local calculations at the singular points. For example, for $f(z)=z^{-1}$ on the positively oriented unit circle, only the residue $1$ at zero is needed.

:::dimostrazione
Remove small disjoint disks around the singularities. Join their boundary circles to the outer boundary by cuts and apply Cauchy's theorem to the slit region. Each cut is traversed twice in opposite directions and contributes zero. The outer integral therefore equals the sum of the integrals along the small positively oriented circles. In the Laurent expansions, the only monomial with nonzero integral is $(z-a_j)^{-1}$, which gives $2\pi i$. Thus only the residues contribute.
:::
::::

:::esempio{titolo="Integrating a rational function over the real line"}
For $a>0$ and $R>a$, integrate $\dfrac1{z^2+a^2}$ along the segment from $-R$ to $R$ and the counterclockwise upper semicircle. The interior pole $ia$ has residue $\dfrac1{2ia}$. The integral along the arc has modulus at most $\dfrac{\pi R}{R^2-a^2}$, which tends to zero. Hence
$$
\int_{-\infty}^{\infty}\frac{dx}{x^2+a^2}=\frac\pi a.
$$
For a factor $e^{ibz}$, the sign of $b$ determines the half-plane in which the exponential stays bounded. Discarding the arc requires an estimate, for example from Jordan's lemma when its hypotheses hold. A pole on the path prevents direct application of the theorem. For a real integral, one may instead study the principal value when it exists.
:::

:::osservazione
In the residue theorem, the boundary of the region with disks removed consists of the positively oriented outer contour and the small clockwise circles. Therefore the outer integral minus the sum of the positively oriented inner integrals is zero. Singularities outside the curve do not contribute. For example, for $f(z)=\dfrac1{(z-1)(z+1)(z-4)}$ on the positively oriented curve $|z|=2$, only the poles $1$ and $-1$ enter the calculation. Their residues are $-\dfrac16$ and $\dfrac1{10}$, respectively. The sum is $-\dfrac1{15}$, so the integral equals $-\dfrac{2\pi i}{15}$.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=4.8 ymin=-2.5 ymax=2.5 curve="2*cos(t),2*sin(t),0,6.283185307179586;-1+0.28*cos(t),0.28*sin(t),0,6.283185307179586;1+0.28*cos(t),0.28*sin(t),0,6.283185307179586" punti="-1,0,vuoto,−1;1,0,vuoto,1;4,0,vuoto,4" titolo="The small disks isolate the interior poles. The pole $4$ lies outside the region of integration"}
:::

:::esempio{titolo="Choosing a half-plane for an oscillatory integral"}
For $\dfrac{e^{iz}}{z^2+1}$, close the real segment in the upper half-plane because $|e^{iz}|=e^{-\operatorname{Im}z}\le1$ when $\operatorname{Im}z\ge0$. On the arc of radius $R>1$ the modulus of the denominator is at least $R^2-1$. The resulting bound on the arc integral is $\dfrac{\pi R}{R^2-1}$, which tends to zero. The only interior pole is $i$, and its residue is $\dfrac{e^{-1}}{2i}$. By oddness, the sine term integrates to zero on the real line, so the real integral of $\dfrac{\cos x}{x^2+1}$ over $\mathbb R$ is $\pi e^{-1}$. For $e^{-iz}$ one would use the lower half-plane, accounting for the reversal of orientation.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.4 xmax=3.4 ymin=-1.6 ymax=3.4 curve="3*cos(t),3*sin(t),0,3.141592653589793" linee="-3,0 3,0" vettori="-0.65,0,0.65,0;0.45,2.96,-0.45,2.96" punti="0,1,vuoto,i;0,-1,vuoto,−i" titolo="The positively oriented contour in the upper half-plane encloses the pole $i$ and excludes the pole $-i$"}
:::

## Counting zeros

::::teorema{#argomento-rouche titolo="The argument principle and Rouché's theorem"}
Let $\gamma$ be a simple, closed, positively oriented, piecewise $C^1$ curve. If $f$ is meromorphic on a neighborhood of the curve and its interior and has no zeros or poles on the curve, then
$$
\frac1{2\pi i}\int_\gamma\frac{f'}f\,dz=N-P,
$$
where zeros and poles are counted with multiplicity. If $f,g$ are holomorphic on a neighborhood of the curve and its interior and $|g|<|f|$ on the curve, **Rouché's theorem** gives the same number of interior zeros for $f$ and $f+g$.

On $|z|=2$, we have $|z+1|\le3<8=|z^3|$. Hence $z^3+z+1$ has three zeros in the disk, without any need to compute the roots.

:::dimostrazione
To prove Rouché's theorem, apply the argument principle to $F_t=f+tg$ with $0\le t\le1$. On the contour we have $|F_t|\ge |f|-|g|$, and the difference has a positive minimum because it is continuous on the compact curve. Thus each function $F_t$ stays nonzero on the contour. The quotient $\dfrac{F_t'}{F_t}$ is continuous along the path and varies continuously with $t$, including near the endpoints of the interval. Its integral divided by $2\pi i$ is therefore a continuous function of $t$. Since $F_t$ is holomorphic, the argument principle identifies this value with the number of its interior zeros, counted with multiplicity. An integer-valued continuous function on an interval is constant. Its values at $t=0$ and $t=1$ therefore agree and count the zeros of $f$ and $f+g$, respectively.
:::
::::


:::osservazione
In the argument principle, a zero of order $m$ can be written locally as $f(z)=(z-a)^m h(z)$, where $h(a)\ne0$. This factorization gives $\dfrac{f'}f=\dfrac{m}{z-a}+\dfrac{h'}h$. The second term is holomorphic near $a$ and the first has residue $m$. For a pole of order $m$ the exponent is $-m$, so the residue is $-m$. The formula counting zeros and poles therefore follows from the residue theorem. Geometrically, the image of $\gamma$ under $f$ makes $N-P$ signed turns around zero.
:::

:::esempio{titolo="Comparing functions on the contour in Rouché's theorem"}
For the polynomial $z^3+z+1$, fix a point $z$ with $|z|=2$. The value $z^3$ has modulus $8$, and the perturbation $z+1$ has modulus at most $3$. During the transition from $z^3$ to $z^3+z+1$, the segment traced by $z^3+t(z+1)$ for $0\le t\le1$ stays away from the origin. This holds uniformly on the entire circle, so the winding number of the image curve does not change during the deformation. The curve $z^3$ goes three times around its circle. The polynomial therefore has three interior zeros, counted with multiplicity.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.4 xmax=12.3 ymin=-4.7 ymax=4.7 curve="8+3*cos(t),3*sin(t),0,6.283185307179586" punti="0,0,pieno,0;8,0,pieno,8;11,0,pieno,11" vettori="8,0,10.7,0" titolo="In the image plane, for the contour point $z=2$ the perturbation moves $z^3=8$ within the disk of radius $3$, which excludes the origin"}
:::

::::teorema{#media-sul-cerchio titolo="The mean value property on a circle"}
If $f$ is holomorphic on a neighborhood of the closed disk with center $a$ and radius $r$, then $f(a)$ is the average of the values of $f$ on the circle. This identity gives a proof of the local maximum modulus principle. For $f(z)=z^2$ and $a=0$, the average is zero because the image of the circle makes two complete turns around zero.

:::dimostrazione
In Cauchy's formula for $n=0$, use the parametrization $z=a+re^{it}$. The factor $re^{it}$ occurs both in $dz$ and in the denominator and cancels. This gives
$$
f(a)=\frac1{2\pi}\int_0^{2\pi} f(a+re^{it})\,dt .
$$
Suppose that $|f|$ has a local maximum at $a$ and that $f(a)\ne0$. Multiplying $f$ by a complex number of modulus one makes $f(a)$ real and positive. On every sufficiently small circle, the real part of each boundary value is at most $f(a)$, yet the average of these real parts is exactly $f(a)$. By continuity the real part must therefore equal $f(a)$ at every point of the circle. The modulus is also at most $f(a)$, so the imaginary part is zero. Applying this argument at every sufficiently small radius shows that $f$ is constant in a neighborhood. If $f(a)=0$, the local maximum already forces $f$ to vanish in a neighborhood.
:::
::::
