---
titolo: "The Laplace transform"
sommario: "The half-plane of convergence, elementary transforms, time delays, convolution, inversion, and differential equations with initial conditions."
---

## The unilateral transform and convergence

:::definizione{#laplace titolo="The Laplace transform"}
For a locally integrable function on $[0,\infty)$, we define
$$
F(s)=\mathcal L[f](s)=\int_0^\infty e^{-st}f(t)\,dt,\qquad s\in\mathbb C,
$$
wherever the integral converges absolutely. If $|f(t)|\le Me^{at}$ for sufficiently large $t$, the integral converges for $\operatorname{Re}s>a$. The transform $F$ is holomorphic in the open half-plane of absolute convergence. It is called **unilateral** because the integral runs only over nonnegative times. In initial value problems the data at zero are therefore right-hand values.

For $f=1$ the integral is $\dfrac1s$ when $\operatorname{Re}s>0$. Thus the transform consists of the formula together with its half-plane of convergence.
:::

:::osservazione
Write $s=\sigma+i\omega$. The factor $e^{-st}$ has modulus $e^{-\sigma t}$, so the convergence estimate depends on $\sigma$. For $f(t)=e^t$, for example, the modulus of the integrand is $e^{-(\sigma-1)t}$. If $\sigma>1$, the integral of the modulus is finite. For $\sigma=1$ the modulus is constant, even when $\omega$ is nonzero. The integral defining the transform converges absolutely in the open half-plane to the right of the line $\operatorname{Re}s=1$.

::grafico{nomi="σ,ω" xmin=-2 xmax=5 ymin=-3 ymax=3 uguale=1 poligoni="1,-3 5,-3 5,3 1,3" asintoti="x=1" punti="1,1,vuoto;2,1,pieno" titolo="For $f(t)=e^t$, the point $2+i$ lies in the half-plane of absolute convergence. The point $1+i$ is on the boundary, where the modulus of the integrand equals one."}
:::

:::attenzione
The rational formula obtained in the half-plane may also take values outside it. For $f(t)=e^t$ the formula is $\dfrac1{s-1}$, which evaluates to $-1$ at $s=0$. The integral defining $\mathcal L[f](0)$, however, is $\int_0^\infty e^t\,dt$ and diverges. The value $-1$ belongs to the continuation of the rational formula.
:::

:::osservazione
To differentiate with respect to $s$ at an interior point, choose a small disk lying entirely in the half-plane. Choose it so that a slightly larger half-plane still containing the disk also lies within the region of absolute convergence. Relative to the weight in the larger half-plane, differentiation introduces a factor $t$ while leaving some exponential damping. The function $t e^{-\varepsilon t}$ is bounded for $\varepsilon>0$, so we obtain an integrable bound uniform on the disk. The same argument applies to every power of $t$ and justifies repeated differentiation under the integral.
:::

:::esempio{titolo="A growth bound and the exact half-plane of convergence"}
Let $f(t)=e^{2t}-e^t$ for $t\ge0$. A bound using $2e^{3t}$ suffices to establish convergence for $\operatorname{Re}s>3$. To find the exact half-plane, factor $f$ as $e^{2t}(1-e^{-t})$. For $t\ge\log 2$ the factor $1-e^{-t}$ lies between $\dfrac12$ and $1$. Set $\sigma=\operatorname{Re}s$. The modulus of the integrand then lies between
$$
\frac12 e^{-(\sigma-2)t}
\qquad\text{and}\qquad
e^{-(\sigma-2)t}.
$$
For $\sigma>2$ the upper bound is integrable on the tail. For $\sigma\le2$ the integral of the lower bound diverges. On a bounded interval the product is continuous, so only the tail determines convergence. The exact half-plane is $\operatorname{Re}s>2$. Both elementary transforms converge there, giving
$$
F(s)=\frac1{s-2}-\frac1{s-1}
=\frac1{(s-2)(s-1)}.
$$
:::

:::attenzione
On the boundary we must examine the integrand itself. For example, with $f(t)=\dfrac{e^{2t}}{(1+t)^2}$ and $\operatorname{Re}s=2$ the modulus is $\dfrac1{(1+t)^2}$, which is integrable on the half-line. With $g(t)=\dfrac{e^{2t}}{1+t}$ the modulus on the same line is $\dfrac1{1+t}$, and its integral diverges. Both functions have the same open half-plane of convergence. Their different behavior on the boundary comes from the factor left after the two exponentials cancel. Any boundary points of absolute convergence lie outside the open half-plane on which holomorphicity was proved.
:::

## Elementary transforms

:::teorema{#tabella-laplace titolo="Powers, exponentials, and trigonometric functions"}
For integers $n\ge0$ and parameters $a\in\mathbb R$ and $b>0$,
$$
\begin{aligned}
\mathcal L[t^n](s)&=\frac{n!}{s^{n+1}}, &&\operatorname{Re}s>0,\\
\mathcal L[e^{at}](s)&=\frac1{s-a}, &&\operatorname{Re}s>a,\\
\mathcal L[\cos(bt)](s)&=\frac{s}{s^2+b^2}, &&\operatorname{Re}s>0,\\
\mathcal L[\sin(bt)](s)&=\frac b{s^2+b^2}, &&\operatorname{Re}s>0.
\end{aligned}
$$
The formulas for powers follow by repeated integration by parts, starting from $\mathcal L[1]$. For sine and cosine, use complex exponentials. By linearity the formulas can be combined on a common half-plane. For example, $\mathcal L[t^2+3e^{-t}]=\dfrac2{s^3}+\dfrac3{s+1}$ for $\operatorname{Re}s>0$.
:::

:::esempio{titolo="Evaluating a transform by integration by parts"}
For $\operatorname{Re}s>0$, first integrate over $[0,R]$. Use $-\dfrac1s e^{-st}$ as an antiderivative of $e^{-st}$. This gives
$$
\begin{aligned}
\int_0^R t e^{-st}\,dt
&=-\frac{R e^{-sR}}s+\frac1s\int_0^R e^{-st}\,dt \\
&=-\frac{R e^{-sR}}s+\frac{1-e^{-sR}}{s^2}.
\end{aligned}
$$
The first term tends to zero because $R e^{-\sigma R}\to0$ for every $\sigma>0$. The second tends to $\dfrac1{s^2}$. Starting instead from $t^2$, integration by parts gives twice the integral just evaluated, divided by $s$. In general, the factor $n!$ comes from the successive factors $n,n-1,\ldots,1$.

::grafico{f="x*exp(-x);x*exp(-2*x)" xmin=0 xmax=6 ymin=0 ymax=0.48 nomi="t,y" area="x*exp(-x);0;0;6" punti="1,0.367879,pieno;0.5,0.183940,pieno" legenda="te^{-t};te^{-2t}" titolo="The area under $te^{-t}$ over the entire half-line is $\mathcal L[t](1)=1$. As $s$ increases from $1$ to $2$, the weight becomes $e^{-2t}$ and the area decreases to $\dfrac14$."}
:::

:::esempio{titolo="Sine and cosine from the same integral"}
For the cosine write $\cos(bt)=\dfrac{e^{ibt}+e^{-ibt}}2$. The two elementary transforms are $\dfrac1{s-ib}$ and $\dfrac1{s+ib}$, both converging for $\operatorname{Re}s>0$. Taking half their sum gives the numerator $s$ and denominator $s^2+b^2$. For sine, the numerator comes from the difference of the same terms divided by $2i$ and equals $b$. This derivation works for complex $s$ because Euler's identity is applied before integration.
:::

:::esempio{titolo="Cancellation of a growing term"}
Let $f(t)=\cosh(2t)$ and $g(t)=\sinh(2t)$. Both contain the growing term $\dfrac12e^{2t}$, so their transforms are defined for $\operatorname{Re}s>2$. From the sum and difference of the exponentials we obtain
$$
\begin{aligned}
\mathcal L[f](s)&=\frac{s}{s^2-4},\\
\mathcal L[g](s)&=\frac{2}{s^2-4}.
\end{aligned}
$$
Subtraction in the common half-plane gives $\dfrac{s-2}{s^2-4}=\dfrac1{s+2}$. To find where this last formula represents the integral, return to the original signal. Since the growing term has the same coefficient in both functions, their difference is $e^{-2t}$. Its Laplace integral already converges for $\operatorname{Re}s>-2$. In particular, the transform of the difference exists at zero and equals $\dfrac12$ there, whereas the two separate integrals diverge. Linearity therefore gives a sufficient half-plane of convergence. Examining the signal gives the exact domain after cancellation.
:::

## Derivatives and initial conditions

::::teorema{#derivate-laplace titolo="Transforms of derivatives"}
Suppose $f,f'$ are locally absolutely continuous and $f,f',f''$ are of exponential order. On a half-plane sufficiently far to the right, integration by parts gives
$$
\mathcal L[f']=sF(s)-f(0^+),\qquad
\mathcal L[f'']=s^2F(s)-sf(0^+)-f'(0^+).
$$
Also, $\mathcal L[t^nf]=(-1)^nF^{(n)}(s)$ at interior points of the half-plane of convergence. The initial-value terms let us transform an initial value problem into an algebraic equation.

For $y'+ay=0$ with $y(0)=c$, we have $(s+a)Y=c$ and hence $y(t)=ce^{-at}$. The initial value appears in the numerator.

:::dimostrazione
Integration by parts separates the derivative of the signal from the derivative of the exponential weight. On $[0,R]$ the upper boundary term is $e^{-sR}f(R)$. When $\operatorname{Re}s$ exceeds the exponential growth bound for $f$, the modulus of this term is bounded by a decaying exponential. At the lower endpoint the weight is one, leaving $-f(0^+)$. The remaining integral is $sF(s)$. This gives the transform formula for the first derivative.

For the second derivative apply the same argument to $f'$. The growth assumption on $f'$ ensures that the new upper boundary term also tends to zero. Hence $\mathcal L[f'']=s\mathcal L[f']-f'(0^+)$. Substitution of the formula already proved shows why $f(0^+)$ is multiplied by $s$ whereas $f'(0^+)$ appears on its own. Differentiation with respect to $s$ acts directly on the integral kernel. Each differentiation introduces a factor $-t$. The uniform bound with its margin of exponential damping justifies taking each derivative under the integral.
:::
::::

:::esempio{titolo="The boundary term and the derivative of the transform"}
For $f(t)=2+e^{-t}$, we have $f(0^+)=3$ and $F(s)=\dfrac2s+\dfrac1{s+1}$. Evaluating $sF(s)-3$ gives $-\dfrac1{s+1}$, in agreement with $f'(t)=-e^{-t}$. The term $3$ comes from evaluating the product $e^{-st}f(t)$ at the lower endpoint in integration by parts.
$$
\int_0^R e^{-st} f'(t)\,dt
=e^{-sR}f(R)-f(0^+)+s\int_0^R e^{-st}f(t)\,dt.
$$
For $s$ sufficiently far to the right, the contribution at $R$ tends to zero. In the same example, $-F'(s)=\dfrac2{s^2}+\dfrac1{(s+1)^2}$ is the transform of $t(2+e^{-t})$. Differentiation with respect to $t$ uses the initial value. Differentiation with respect to $s$ acts on the weight of the integral and introduces the factor $-t$.

::grafico{f="2+exp(-x);-exp(-x)" xmin=0 xmax=6 ymin=-1.4 ymax=3.6 nomi="t,y" punti="0,3,pieno;0,-1,pieno" asintoti="y=2" legenda="f(t);f^\prime(t)" titolo="The function $f(t)=2+e^{-t}$ starts at $3$. The formula for $\mathcal L[f']$ uses this value, whereas the graph of $f'$ starts at $-1$."}
:::

:::attenzione
The formula for $\mathcal L[f']$ requires regularity of the signal across each interior point. Take $f(t)=H(t-2)$. Its ordinary derivative is zero on both pieces, so its transform vanishes. On the other hand, $f(0^+)=0$ and $F(s)=\dfrac{e^{-2s}}s$ for $\operatorname{Re}s>0$. Direct application of $sF(s)-f(0^+)$ would give $e^{-2s}$. The step has a jump at $2$, so on any interval containing that point the function fails the absolute continuity hypothesis.

We recover the transform of the ordinary derivative by integrating by parts separately on the two pieces. The boundary term at $2$ is evaluated once from the left and once from the right. Its total contribution is
$$
e^{-2s}\bigl(f(2^-)-f(2^+)\bigr)=-e^{-2s}.
$$
This term cancels $sF(s)$, leaving zero. For a continuous signal with a change in slope, the one-sided values of the function agree and the interior boundary terms cancel. Thus a step and a ramp switched on at the same time require different regularity checks before applying the derivative formula.
:::

## Shifts and delays

::::teorema{#ritardi titolo="Frequency shifts and time shifts"}
If $F=\mathcal L[f]$ and $a\in\mathbb R$, then $\mathcal L[e^{at}f(t)](s)=F(s-a)$. For $\tau>0$ and the Heaviside function $H$,
$$
\mathcal L[H(t-\tau)f(t-\tau)](s)=e^{-\tau s}F(s).
$$
The second formula follows by substituting $u=t-\tau$ in the integral beginning at $\tau$. For example,
$$
\mathcal L[H(t-2)(t-2)^2]=\frac{2e^{-2s}}{s^3}.
$$
A delay changes both the switch-on time and the argument of the function. To transform $H(t-\tau)f(t)$, express $f(t)$ as a function of $t-\tau$.

::grafico{f="x*exp(-x);x" xmin=0 xmax=4 ymin=0 ymax=2.5 nomi="t,y" punti="1,0.367879,pieno" legenda="te^{-t};t" titolo="Multiplying $t$ by $e^{-t}$ leaves its value at zero unchanged and damps it for positive times. In the transform, $s$ is replaced by $s+1$."}

:::dimostrazione
For the frequency shift, combine the two exponential weights. For the time delay, move the origin to the switch-on time. If the integral for $f$ converges absolutely at $s-a$, then
$$
\begin{aligned}
\mathcal L[e^{at}f(t)](s)&=\int_0^\infty e^{-st}e^{at}f(t)\,dt\\
&=\int_0^\infty e^{-(s-a)t}f(t)\,dt\\
&=F(s-a).
\end{aligned}
$$
For the delay, the integrand vanishes before $\tau$. If $F(s)$ converges absolutely, the substitution $u=t-\tau$ gives
$$
\begin{aligned}
\int_\tau^\infty e^{-st}f(t-\tau)\,dt
&=\int_0^\infty e^{-s(u+\tau)}f(u)\,du\\
&=e^{-s\tau}\int_0^\infty e^{-su}f(u)\,du\\
&=e^{-s\tau}F(s).
\end{aligned}
$$
In the integral of the modulus, the same substitution introduces the positive factor $e^{-\tau\operatorname{Re}s}$. The delayed and original signals therefore have the same region of absolute convergence.
:::
::::

:::osservazione
Absolute convergence also distinguishes the two operations. Multiplication by $e^{at}$ replaces the weight $e^{-\sigma t}$ by $e^{-(\sigma-a)t}$, moving a boundary with real part $\sigma_0$ to $\sigma_0+a$. For a time delay, the substitution $u=t-\tau$ instead shows that the integral of the modulus is the original one multiplied by $e^{-\sigma\tau}$. Thus a delay preserves the entire set of absolute convergence, including any boundary points it contains. For example, the transform of $H(t-2)e^{t-2}$ converges for $\operatorname{Re}s>1$, as does that of $e^t$, whereas the transform of $e^{-2t}e^t$ converges for $\operatorname{Re}s>-1$.
:::

:::esempio{titolo="A delayed ramp and a truncated ramp"}
Consider $H(t-2)t$ and $H(t-2)(t-2)$. Both vanish before $t=2$. Immediately after $t=2$ the first has height $2$, while the second starts at zero. Writing $t=(t-2)+2$ for $t>2$ gives
$$
\begin{aligned}
\mathcal L[H(t-2)t]
&=e^{-2s}\left(\frac1{s^2}+\frac2s\right),\\
\mathcal L[H(t-2)(t-2)]&=\frac{e^{-2s}}{s^2},
\qquad \operatorname{Re}s>0.
\end{aligned}
$$
The additional term $\dfrac{2e^{-2s}}s$ represents the step of height $2$ separating the two functions. The value assigned to $H(0)$ does not affect the integral because it changes the function at only one point.

::grafico{linee="0,0 2,0;2,0 5,3;2,2 5,5" segmenti="2,0,2,2" punti="2,0,pieno;2,2,vuoto" xmin=0 xmax=5.4 ymin=-0.5 ymax=5.7 nomi="t,y" titolo="After $t=2$ the truncated ramp $H(t-2)t$ lies two units above the delayed ramp $H(t-2)(t-2)$. The dashed segment shows the height of the jump in the first ramp."}
:::

::::teorema{#segnali-periodici titolo="The transform of a periodic signal"}
Let $f$ be locally integrable and periodic with period $T>0$. For $\operatorname{Re}s>0$,
$$
\mathcal L[f](s)=\frac{\displaystyle\int_0^T e^{-st}f(t)\,dt}{1-e^{-sT}}.
$$
The integral in the numerator describes the signal over one period. The denominator accounts for the repetition of that period over time.

:::dimostrazione
Split the integral over the intervals $[kT,(k+1)T]$. On the interval indexed by $k$ set $t=kT+u$, with $0\le u\le T$. By periodicity $f(kT+u)=f(u)$, and the exponential weight factors as $e^{-skT}$ times $e^{-su}$. Thus each integral is the first one multiplied by $e^{-skT}$. The sum of the absolute values of the integrals is bounded by a geometric series with ratio $e^{-(\operatorname{Re}s)T}$ times the integral of the modulus over the first period. We may therefore sum the contributions using the geometric series formula.
:::
::::

:::esempio{titolo="When the period differs from the time spent on"}
For a signal of period $3$ that takes the value $2$ only during the first unit of each period and is otherwise off, the numerator is $\dfrac{2(1-e^{-s})}{s}$. The denominator is $1-e^{-3s}$ because the signal switches on at times $0,3,6,\ldots$. For small positive $s>0$, the product $sF(s)$ approaches $\dfrac23$, the average over one period. The signal continues to jump between zero and two. The number $\dfrac23$ gives the time average, while the signal itself has no final value.
:::

:::esempio{titolo="A ramp switched off after two time units"}
Let $f$ be zero until time $1$, equal to $t-1$ between times $1$ and $3$, and zero again after time $3$. The first ramp starts at $1$ and keeps growing until a second term cancels it. For $t>3$ the ramp is given by $(t-3)+2$. Cancellation therefore requires a ramp and a step switched on together at $3$. This gives
$$
f(t)=H(t-1)(t-1)-H(t-3)\bigl((t-3)+2\bigr)
$$
and, for $\operatorname{Re}s>0$,
$$
F(s)=\frac{e^{-s}}{s^2}
-e^{-3s}\left(\frac1{s^2}+\frac2s\right).
$$
The signal has bounded support, so the integral converges for every complex $s$. The point $s=0$ must be evaluated using the integral because the separate terms contain negative powers of $s$. With unit weight the integral is the area of a triangle of base two and height two, namely $2$. This is also the limit of the combined formula as $s$ tends to zero, since the weight converges uniformly to one on the interval where the signal is active.
:::

## Convolution and the inverse Laplace transform

::::teorema{#convoluzione-laplace titolo="Causal convolution"}
For locally integrable functions of exponential order,
$$
(f*g)(t)=\int_0^t f(t-u)g(u)\,du,\qquad
\mathcal L[f*g](s)=F(s)G(s)
$$
on a common half-plane of convergence. The convolution is defined and finite almost everywhere. Fubini's theorem allows the two integrals to be interchanged. For $a\ne b$,
$$
\mathcal L^{-1}\left[\frac1{(s+a)(s+b)}\right]
=\frac{e^{-at}-e^{-bt}}{b-a}.
$$
The same result follows from partial fractions. The inverse transform of $\dfrac1{(s+a)^m}$ is $\dfrac{t^{m-1}}{(m-1)!}e^{-at}$. In a partial fraction decomposition, a pole of order $m$ can also contribute terms with lower powers of the same denominator.

:::dimostrazione
Change the region of integration from the triangular region $0\le u\le t$ to the quadrant in the independent variables $u$ and $v=t-u$. If $\sigma=\operatorname{Re}s$ lies in a common half-plane of convergence, we obtain
$$
\begin{aligned}
\int_0^\infty\int_0^t e^{-\sigma t}|f(t-u)|\,|g(u)|\,du\,dt
&=\int_0^\infty\int_0^\infty e^{-\sigma(v+u)}|f(v)|\,|g(u)|\,dv\,du\\
&=\left(\int_0^\infty e^{-\sigma v}|f(v)|\,dv\right)
\left(\int_0^\infty e^{-\sigma u}|g(u)|\,du\right)\\
&<\infty.
\end{aligned}
$$
The linear substitution has a determinant of absolute value one. The product is finite because both factors converge absolutely. Fubini's theorem therefore ensures that the convolution exists almost everywhere and allows us to separate the complex integral. It follows that
$$
\begin{aligned}
\mathcal L[f*g](s)
&=\int_0^\infty\int_0^\infty e^{-s(v+u)}f(v)g(u)\,dv\,du\\
&=F(s)G(s).
\end{aligned}
$$
:::
::::

:::teorema{#inversione-laplace titolo="Uniqueness and the inversion formula"}
For locally integrable functions of exponential order, equality of their transforms on a half-plane implies equality of the functions almost everywhere. If the functions are continuous, equality holds at every point. For functions with sufficient regularity and growth control, for example piecewise $C^1$ functions of exponential order whose derivatives on each piece satisfy a similar bound, Bromwich inversion gives
$$
f(t)=\lim_{R\to\infty}\frac1{2\pi i}\int_{\gamma-iR}^{\gamma+iR}e^{st}F(s)\,ds
$$
for $t>0$ at points of continuity, with $\gamma$ chosen in the half-plane of convergence. For the proper rational functions in the exercises, partial fractions and a transform table give the inverse transform directly.
:::

:::esempio{titolo="The region of integration and repeated poles"}
To see why the transform of a convolution is a product, denote the inner time variable by $u$ and set $v=t-u$. The region $0\le u\le t$ becomes the first quadrant in $(u,v)$. In a half-plane where both integrals converge absolutely, the integral of the modulus over the quadrant is the product of the absolute integrals of $e^{-su}g(u)$ and $e^{-sv}f(v)$. Fubini's theorem then allows us to separate the variables. At a fixed time $t$, the original integral uses only pairs satisfying $u+v=t$.

::grafico{nomi="u,v" xmin=0 xmax=4.6 ymin=0 ymax=4.1 uguale=1 poligoni="0,0 3,0 0,3" linee="0,3 3,0" etichette="1.8,1.52,u+v=3" punti="3,0,pieno;0,3,pieno" titolo="The shaded triangle contains the pairs with $u,v\ge0$ and $u+v\le3$. At time $t=3$ only pairs on the segment $u+v=3$ contribute."}
:::

:::esempio{titolo="Convolution of two identical exponentials"}
For $f=g=e^{-t}$ the product $e^{-(t-u)}e^{-u}$ is constant with respect to $u$ and equals $e^{-t}$. The integral over $[0,t]$ is therefore $te^{-t}$. In the Laplace domain the transforms are identical, and their product has a double pole at $-1$. For distinct poles, partial fractions separate the two exponentials. For a double pole, the factor $t$ arises directly from the convolution integral.

::grafico{f="x*exp(-x);exp(-x)-exp(-2*x)" xmin=0 xmax=6 ymin=0 ymax=0.47 nomi="t,y" punti="1,0.367879,pieno" legenda="te^{-t};e^{-t}-e^{-2t}" titolo="Distinct poles at $-1$ and $-2$ give $e^{-t}-e^{-2t}$. A double pole at $-1$ gives $te^{-t}$, whose maximum occurs at $t=1$."}
:::

:::osservazione
To choose the inversion line, start with the half-plane on which the Laplace integral is valid. If $s=\gamma+i\omega$, then $F(\gamma+i\omega)$ is the Fourier transform of $e^{-\gamma t}f(t)$ extended by zero for $t<0$, using the convention with kernel $e^{-i\omega t}$. Inversion with respect to $\omega$ recovers the damped signal. The factor $e^{\gamma t}$ in the Bromwich formula restores the original signal. Uniqueness of the Fourier transform for the damped signal implies uniqueness for the Laplace transform.

::grafico{nomi="σ,ω" uguale=1 xmin=-3 xmax=3 ymin=-2.7 ymax=2.7 punti="-1,0,pieno;0,1,pieno;0,-1,pieno" vettori="1,-2.3,1,2.3,γ=1" titolo="For $F(s)=\dfrac1{(s+1)(s^2+1)}$, one possible inversion line is $\operatorname{Re}s=1$, to the right of the poles $-1$ and $\pm i$."}
:::

:::esempio{titolo="Inverting a rational function with a double pole by residues"}
Let $F(s)=\dfrac{1}{(s+1)^2(s+2)}$. For $t>0$, choose the vertical line $\operatorname{Re}s=0$ and close the contour on the left with a semicircle of radius $R$ centered at zero. Along the arc the modulus of $e^{st}$ is at most one. For large $R$ the rational function is bounded by a constant times $R^{-3}$, while the arc length is $\pi R$. The arc integral therefore tends to zero. In the limit, the integral along the line is determined by the residues at the two enclosed poles.
$$
\begin{aligned}
\operatorname{Res}_{s=-2}\frac{e^{st}}{(s+1)^2(s+2)}
&=e^{-2t},\\
\operatorname{Res}_{s=-1}\frac{e^{st}}{(s+1)^2(s+2)}
&=\left.\frac d{ds}\frac{e^{st}}{s+2}\right|_{s=-1}
=(t-1)e^{-t}.
\end{aligned}
$$
The sum is $(t-1)e^{-t}+e^{-2t}$. The simple pole contributes one exponential. At the double pole the derivative acts both on $e^{st}$ and on the remaining denominator factor, giving the additional term $te^{-t}$. One can check the result by adding the transforms of the three terms over a common denominator. The bound on the arc used both the decay of the rational function and the sign of $\operatorname{Re}s$ along the contour.
:::

:::esempio{titolo="Convolution of a delayed ramp and an exponential"}
Let $f(t)=H(t-1)(t-1)$ and $g(t)=e^{-t}$. In the convolution integral the factor $f(t-u)$ is active only when $t-u>1$. For $t\le1$ the entire integrand vanishes. For $t>1$ the interval reduces to $0\le u\le t-1$. Setting $v=t-1$ gives
$$
\begin{aligned}
(f*g)(t)
&=\int_0^v (v-u)e^{-u}\,du\\
&=v(1-e^{-v})-\bigl(1-(v+1)e^{-v}\bigr)\\
&=v-1+e^{-v}.
\end{aligned}
$$
To obtain the second term in the intermediate line, integrate $u e^{-u}$ by parts using the antiderivative $-e^{-u}$. In the Laplace domain the same calculation becomes $F(s)G(s)=\dfrac{e^{-s}}{s^2(s+1)}$. The rational factor has the partial fraction decomposition
$$
\frac1{s^2(s+1)}=\frac1{s^2}-\frac1s+\frac1{s+1}.
$$
The table gives the undelayed response $t-1+e^{-t}$. The factor $e^{-s}$ switches the function on at $1$ and replaces $t$ by $t-1$, recovering the expression obtained directly. At the switch-on time both the value and the right-hand derivative are zero. The delay in the convolution is already visible in the limits of integration.
:::

## Initial value problems and forcing terms

:::esempio{#cauchy-laplace titolo="A second-order equation"}
For $y''+y=1$, $y(0)=0$, and $y'(0)=0$, we obtain
$$
(s^2+1)Y(s)=\frac1s,\qquad
Y(s)=\frac1{s(s^2+1)}=\frac1s-\frac{s}{s^2+1}.
$$
Hence $y(t)=1-\cos t$. Substitution verifies $y''+y=1$ and both initial conditions. A delayed forcing term introduces a factor $e^{-\tau s}$. After inversion, apply the delay to the causal response.
:::

:::esempio{titolo="Response to a delayed step with a nonzero initial value"}
Let $y'+2y=H(t-1)$ with $y(0)=1$. The transform of the left-hand side is $(s+2)Y(s)-1$. From
$$
Y(s)=\frac1{s+2}+\frac{e^{-s}}{s(s+2)}
$$
we can identify the free and forced responses. To invert the second term, decompose $\dfrac1{s(s+2)}=\dfrac12\left(\dfrac1s-\dfrac1{s+2}\right)$ and delay the result. We obtain
$$
y(t)=e^{-2t}+\frac12 H(t-1)\bigl(1-e^{-2(t-1)}\bigr).
$$
Before the step is applied, only the free response is present. At $t=1$ the forced term vanishes and the solution stays continuous. The solution satisfies the equation for $t\ne1$. Its right-hand derivative exceeds its left-hand derivative by one, in agreement with the jump in the forcing term. At large times the transient decays, leaving the value $\dfrac12$.

::grafico{f="exp(-2*x)+0.5*(1-exp(-2*(0.5*(x-1+abs(x-1)))));exp(-2*x)" xmin=0 xmax=5 ymin=0 ymax=1.15 nomi="t,y" segmenti="1,0,1,0.135335" punti="1,0.135335,pieno" asintoti="y=0.5" legenda="y(t);e^{-2t}" titolo="At $t=1$ the step changes the slope of the solution without a jump in its value. The dashed curve shows the free response alone."}
:::

:::esempio{titolo="An initial value problem with exponential forcing"}
Consider $y''+3y'+2y=e^{-3t}$ with $y(0)=1$ and $y'(0)=-1$. Write $Y$ for the transform of $y$. The term $y''$ gives $s^2Y-s+1$ and $3y'$ gives $3sY-3$. Hence
$$
(s^2+3s+2)Y(s)=s+2+\frac1{s+3}.
$$
Factor the denominator as $(s+1)(s+2)$. The contribution of the initial conditions reduces to $\dfrac1{s+1}$ because the numerator factor $s+2$ cancels. The forcing term retains both factors of the operator and introduces the additional factor $s+3$. Partial fractions give
$$
\begin{aligned}
Y(s)
&=\frac1{s+1}+\frac1{(s+1)(s+2)(s+3)}\\
&=\frac{3}{2(s+1)}-\frac1{s+2}+\frac1{2(s+3)}.
\end{aligned}
$$
Therefore $y(t)=\dfrac32e^{-t}-e^{-2t}+\dfrac12e^{-3t}$. The first two exponentials solve the homogeneous equation. On the third exponential the operator multiplies the coefficient by $(-3)^2+3(-3)+2=2$, giving precisely $e^{-3t}$. The coefficients sum to one. The coefficients multiplied by their respective exponents sum to minus one. These two checks recover the initial conditions directly, without returning to the algebraic equation for $Y$.
:::

## Initial and final values

:::osservazione{#valori-limite titolo="Hypotheses of the initial and final value theorems"}
For a function of exponential order that is right-continuous at the origin, $\lim_{s\to+\infty}sF(s)=f(0^+)$. For a proper rational transform with an ordinary inverse continuous for $t>0$, the final value theorem requires all poles of $sF(s)$ to have strictly negative real parts. Under this condition, $\lim_{t\to\infty}f(t)=\lim_{s\to0^+}sF(s)$.

For $F(s)=\dfrac1{s+2}$ the final value is zero, in agreement with $e^{-2t}$. For $F(s)=\dfrac1{s^2+1}$, the product $sF(s)$ has poles on the imaginary axis, so the criterion does not apply. The function $\sin t$ has no final value even though the algebraic limit at zero exists.
:::

:::esempio{titolo="Checking stability before computing the final value"}
For $F(s)=\dfrac1{s(s+2)}$, the pole at the origin represents the constant level of the response. Multiplying by $s$ leaves only the pole at $-2$, so the final value criterion applies and gives $\dfrac12$. The inverse transform $\dfrac12(1-e^{-2t})$ confirms the result. For $F(s)=\dfrac1{s(s-2)}$, on the other hand, the product $sF(s)$ has a positive pole at $2$. The function $\dfrac12(e^{2t}-1)$ grows without bound even though formally substituting $s=0$ in the rational formula gives the finite value $-\dfrac12$.

::grafico{f="0.5*(1-exp(-2*x));sin(x)" xmin=0 xmax=9 ymin=-1.2 ymax=1.2 nomi="t,y" asintoti="y=0.5" legenda="\dfrac12(1-e^{-2t});\sin t" titolo="The response $\dfrac12(1-e^{-2t})$ converges to $\dfrac12$. The function $\sin t$ continues to oscillate and has no final value."}
:::

:::osservazione
The initial value theorem can be understood in terms of a weight that concentrates near the origin. For $s>0$ the function $s e^{-st}$ integrates to one on the half-line. For every $\varepsilon>0$, the integral of this weight from $\varepsilon$ onward is $e^{-s\varepsilon}$, which tends to zero. To deduce the limit of $sF(s)$, subtract $f(0^+)$ from the function in the weighted integral. On $[0,\varepsilon]$ the difference is uniformly small by right continuity. On the tail, the weight dominates the exponential growth of $f$ for large $s$. On any compact interval away from the origin the integral tends to zero because the weight decays uniformly. The remaining contribution therefore tends to zero.
:::

:::osservazione
For a proper rational transform, the final value theorem can be understood by decomposing $F$ into partial fractions. If $sF$ has poles only in the open left half-plane, $F$ may have at most one additional simple pole at the origin. The inverse transforms of the terms from other poles are decaying exponentials, multiplied by polynomials for repeated poles. All of these terms decay to zero. The term from a simple pole at the origin has the form $\dfrac As$ and corresponds to a constant $A$. Multiplying by $s$ and taking the limit at zero gives precisely this coefficient. For a pole on the imaginary axis away from the origin, sinusoidal terms can instead persist indefinitely.
:::

:::esempio{titolo="Actual poles and the final value"}
Consider the rational function
$$
F(s)=\frac{s-2}{s(s-2)(s+1)} .
$$
The factor $s-2$ occurs in both the numerator and the denominator. At $2$ the quotient has a removable singularity, so the final value criterion must be applied to the simplified function. This gives $sF(s)=\dfrac1{s+1}$, with a single pole at $-1$. The final value is therefore one. The decomposition $\dfrac1{s(s+1)}=\dfrac1s-\dfrac1{s+1}$ gives the inverse transform $1-e^{-t}$, which indeed tends to one.

By comparison, if the numerator were $1$ and the denominator were $s(s-2)(s+1)$, there would be an actual pole at $2$. The coefficient of the fraction $\dfrac1{s-2}$ would be $\dfrac16$, obtained by multiplying by $s-2$ and evaluating at $2$. This would introduce the growing term $\dfrac16e^{2t}$. The other terms are a constant and a decaying exponential, so they cannot cancel that growth.
:::
