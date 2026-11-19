---
titolo: "The Fourier transform and convolution"
sommario: "The Fourier transform convention, transform properties, convolution, inversion, Plancherel's theorem, distributions, and applications to differential equations."
---

## The transform convention and conditions for existence

A periodic function has discrete Fourier frequencies. For a function on the real line, the frequency can take any real value.

:::definizione{#fourier titolo="The Fourier transform"}
For $f\in L^1(\mathbb R)$ we adopt the convention
$$
\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-i\xi x}\,dx.
$$
The variable $\xi$ is angular frequency. The transform is bounded and continuous, satisfies $\|\widehat f\|_\infty\le\|f\|_1$, and tends to zero as $|\xi|\to\infty$ by the Riemann–Lebesgue lemma. Continuity follows from dominated convergence. Decay at infinity is proved first for compactly supported step functions and then by density in $L^1$.

The convention fixes the factors of $2\pi$ in Fourier inversion and Plancherel's theorem. All the exercises in this chapter use this definition.
:::

:::osservazione
The value $\widehat f(0)=\int_{\mathbb R} f$ is the signed integral of the original function. If the function is real, then at $\xi\ne0$ we obtain the real part by weighting $f$ with $\cos(\xi x)$ and the imaginary part by weighting it with $-\sin(\xi x)$. If $f$ is real and even, the second integrand is odd and integrates to zero, while the first integral is twice the integral over the positive half-line. This gives a way to detect a spurious imaginary term before completing the calculation.

To prove continuity, suppose $\xi_n\to\xi$. The factor $e^{-i\xi_nx}$ converges for every $x$ and has modulus one. The common dominating function is $|f|$, so dominated convergence gives $\widehat f(\xi_n)\to\widehat f(\xi)$. To prove decay at infinity, first take the indicator of $[a,b]$. Its transform is a difference of two exponentials divided by $i\xi$ and has modulus at most $\dfrac2{|\xi|}$. For a general function, approximate $f$ in $L^1$ by a step function $g$. The bound $\|\widehat f-\widehat g\|_\infty\le\|f-g\|_1$ controls the error at all frequencies, including as the frequency tends to infinity.
:::

:::osservazione
In fact the transform is uniformly continuous on the entire real line. To compare two frequencies a distance $|h|$ apart, factor out $e^{-i\xi x}$, which has modulus one, and estimate
$$
\left|\widehat f(\xi+h)-\widehat f(\xi)\right|
\le \int_{\mathbb R}|f(x)|\left|e^{-ihx}-1\right|\,dx .
$$
The second factor on the right tends to zero for every $x$ and is at most two. Dominated convergence therefore gives a limit independent of $\xi$. If $f$ vanishes outside $[-A,A]$, with $A>0$, we also obtain an explicit estimate. Indeed, $\left|e^{-ihx}-1\right|=2\left|\sin\left(\dfrac{hx}{2}\right)\right|\le |hx|$, so the difference between the transform values is at most $A|h|\|f\|_1$. This bounds the change in the transform under a shift in frequency, while the Riemann–Lebesgue lemma describes its value at high frequencies.
:::

## Elementary transforms

:::esempio{#esempi-fourier titolo="Intervals, exponentials, and Gaussians"}
For $a>0$,
$$
\widehat{\mathbf1_{[-a,a]}}(\xi)=\frac{2\sin(a\xi)}{\xi},\qquad
\widehat{\mathbf1_{[-a,a]}}(0)=2a.
$$
Integrate the exponential from $-a$ to $a$. The value at zero is obtained by continuity. Integrating separately over the two half-lines gives
$$
\widehat{e^{-a|x|}}(\xi)=\frac1{a+i\xi}+\frac1{a-i\xi}
=\frac{2a}{a^2+\xi^2}.
$$
For the Gaussian,
$$
\widehat{e^{-ax^2}}(\xi)=\sqrt{\frac\pi a}\,e^{-\frac{\xi^2}{4a}}.
$$
One proof differentiates the transform with respect to $\xi$, integrates by parts, and obtains the equation $F'=-\dfrac{\xi}{2a}F$. The initial value is the Gaussian integral $F(0)=\sqrt{\dfrac\pi a}$.
:::

:::osservazione
To prove the Gaussian formula, set $g(x)=e^{-ax^2}$ and $F=\widehat g$. We can differentiate with respect to frequency because $xg$ is integrable. Since $g'=-2axg$, we obtain
$$
F'(\xi)=\frac{i}{2a}\int_{\mathbb R}g'(x)e^{-i\xi x}\,dx.
$$
Integration by parts gives $i\xi F(\xi)$ for the integral on the right. The minus sign in the equation $F'=-\dfrac{\xi}{2a}F$ thus comes from $i^2=-1$. Multiplying by $e^{\frac{\xi^2}{4a}}$ shows that $F(\xi)e^{\frac{\xi^2}{4a}}$ is constant. Its value is determined at zero. This calculation avoids shifting the integration path in the complex plane and uses only the two operations justified by the integrability estimates.
:::

:::esempio{titolo="From pulse duration to spacing between zeros"}
For the pulse on $[-a,a]$, the transform has value $2a$ at the center. It vanishes at $\xi=\dfrac{k\pi}{a}$ for $k\in\mathbb Z\setminus\{0\}$. Doubling $a$ doubles the value at zero and halves the spacing between consecutive zeros on either side of the origin. The central peak is therefore higher and narrower. The transform alternates in sign between successive zeros because the denominator keeps its sign on each half-line while the sine changes sign.

::grafico{f="2*sin(x)/x;2*sin(2*x)/x" punti="0,2,pieno;0,4,pieno;1.570796,0,pieno;3.141593,0,pieno" nomi="ξ,F" xmin=-10 xmax=10 ymin=-1.25 ymax=4.65 legenda="\frac{2\sin(\xi)}{\xi};\frac{2\sin(2\xi)}{\xi}" titolo="The transforms of the pulses on $[-1,1]$ and $[-2,2]$ have their first positive zeros at $\pi$ and $\dfrac{\pi}{2}$, respectively"}
:::

:::esempio{titolo="Two rates of decay at high frequencies"}
With $a=1$, both the two-sided exponential and the Gaussian have positive transforms. The transform of the former has a tail of order $\xi^{-2}$, because multiplying it by $\xi^2$ gives a limit of $2$. The Gaussian in the frequency domain decays faster than any power. For each $m>0$, we have $|\xi|^m e^{-\dfrac{\xi^2}{4}}\to0$. The difference is also related to the smoothness of the original functions. The Gaussian has integrable derivatives of every order, while the first derivative of $e^{-|x|}$ has a jump at zero.

::grafico{f="2/(1+x^2);sqrt(pi)*exp(-x^2/4)" nomi="ξ,F" xmin=-7 xmax=7 ymin=-0.2 ymax=2.3 legenda="\frac{2}{1+\xi^2};\sqrt{\pi}e^{-\frac{\xi^2}{4}}" titolo="In the frequency domain the Gaussian decays faster than the transform of the two-sided exponential"}
:::

:::esempio{titolo="Two pulses of opposite sign"}
Let $p$ be the indicator of $[0,1]$ minus the indicator of $[1,2]$. The intervals have the same length, so the integral of $p$ is zero and $\widehat p(0)=0$. For $\xi\ne0$, integrating on the two intervals gives
$$
\begin{aligned}
\widehat p(\xi)
&=\frac{1-e^{-i\xi}}{i\xi}
  -\frac{e^{-i\xi}-e^{-2i\xi}}{i\xi}\\[6pt]
&=\frac{(1-e^{-i\xi})^2}{i\xi}.
\end{aligned}
$$
The first factor $1-e^{-i\xi}$ comes from integration over an interval of length one. The second appears when we subtract the contribution from the second interval, which is shifted by one. For $\xi$ near zero, the ratio $\dfrac{1-e^{-i\xi}}{\xi}$ tends to $i$, so $\widehat p(\xi)=i\xi+o(\xi)$. The integrals of the pulses cancel, explaining the zero at the origin. The linear term measures the change of the transform near that zero.
:::

## Translations, modulations, and scaling

::::teorema{#proprieta-fourier titolo="Algebraic properties"}
For $f\in L^1$, $a,b\in\mathbb R$, and $c\ne0$,
$$
\begin{aligned}
\mathcal F[f(x-a)](\xi)&=e^{-ia\xi}\widehat f(\xi),\\
\mathcal F[e^{ibx}f(x)](\xi)&=\widehat f(\xi-b),\\
\mathcal F[f(cx)](\xi)&=\frac1{|c|}\widehat f\left(\frac\xi c\right).
\end{aligned}
$$
The transform is linear. If $f$ is real and even, its transform is real and even. If it is real and odd, its transform is purely imaginary and odd. Thus a translation in space introduces a phase factor, while modulation shifts the frequencies.

:::dimostrazione
All three integrals can be reduced to the definition of $\widehat f$. Translation and scaling preserve integrability, and modulation multiplies the integrand by a factor of modulus one. For translation, set $y=x-a$ to obtain
$$
\begin{aligned}
\mathcal F[f(x-a)](\xi)
&=\int_{\mathbb R} f(y)e^{-i\xi(y+a)}\,dy\\
&=e^{-ia\xi}\widehat f(\xi).
\end{aligned}
$$
For modulation, adding the exponents gives
$$
\begin{aligned}
\mathcal F[e^{ibx}f(x)](\xi)
&=\int_{\mathbb R} f(x)e^{-i(\xi-b)x}\,dx\\
&=\widehat f(\xi-b).
\end{aligned}
$$
For scaling, the substitution $y=cx$ introduces the measure factor $\dfrac1{|c|}$ because the limits are reversed when $c<0$. The kernel becomes $e^{-i\frac{\xi}{c}y}$, so
$$
\mathcal F[f(cx)](\xi)
=\frac1{|c|}\int_{\mathbb R} f(y)e^{-i\frac{\xi}{c}y}\,dy
=\frac1{|c|}\widehat f\left(\frac{\xi}{c}\right).
$$
Linearity follows from linearity of the absolutely convergent integral. If the function is real and even, its product with the sine is odd and its product with the cosine is even as a function of $x$. The first integral vanishes, and the second is even in $\xi$. For a real odd function, the cosine term vanishes instead. The remaining sine contribution is imaginary and odd in $\xi$.
:::
::::

:::esempio{titolo="Shifting a frequency band"}
Take $g(x)=e^{-x^2}$ and set $f(x)=e^{3ix}g(x)$. Multiplying by $e^{-i\xi x}$ and combining the exponents gives $e^{-i(\xi-3)x}g(x)$. The transform of $f$ is therefore the Gaussian $\widehat g(\xi-3)$, with its maximum at $\xi=3$. A real factor $\cos(3x)$ is half the sum of the two modulations $e^{3ix}$ and $e^{-3ix}$. Thus for $g(x)\cos(3x)$ we obtain two shifted copies, centered at $3$ and $-3$, each with coefficient $\dfrac12$. The symmetry agrees with the fact that the original function is real and even.

::grafico{f="sqrt(pi)*exp(-x^2/4);sqrt(pi)*exp(-(x-3)^2/4);sqrt(pi)/2*(exp(-(x-3)^2/4)+exp(-(x+3)^2/4))" nomi="ξ,F" xmin=-8 xmax=8 ymin=-0.15 ymax=2.2 legenda="\widehat g(\xi);\widehat g(\xi-3);\mathcal F[g\cos(3x)]" titolo="Complex modulation shifts the Gaussian in frequency. The cosine gives a sum of two symmetrically placed copies"}
:::

:::osservazione
The scaling law must also account for $c<0$. With $u=cx$ the direction of integration is reversed, so the substitution gives the factor $\dfrac1{|c|}$. The sign of $c$ remains in the argument $\dfrac{\xi}{c}$ and thus reflects the frequency. When $c>1$ the original function is compressed on the real line, while its transform spreads out and its value at zero decreases by a factor of $c$. The value at zero can be checked directly by integrating the scaled function.
:::

:::osservazione
For a real integrable function, whether even, odd, or neither, conjugating the integral gives $\overline{\widehat f(\xi)}=\widehat f(-\xi)$. Opposite frequencies therefore have the same modulus, equal real parts, and opposite imaginary parts. For example, if $g$ is real and even and we set $f(x)=g(x-1)$, then
$$
\widehat f(\xi)=(\cos\xi-i\sin\xi)\widehat g(\xi).
$$
Translation generally introduces an imaginary part. Since $\widehat g$ is real and even, the cosine factor gives the even real part and the sine factor gives the odd imaginary part. In particular, the transform of a shifted two-sided exponential has even modulus even when the original function is centered away from the origin.
:::

## Differentiation and multiplication

::::teorema{#derivate-fourier titolo="Differentiation and frequency"}
If $f$ is absolutely continuous on every compact interval and $f,f'\in L^1(\mathbb R)$, then
$$
\widehat{f'}(\xi)=i\xi\widehat f(\xi).
$$
If $f$ and $xf$ belong to $L^1$, then
$$
\frac d{d\xi}\widehat f(\xi)=-i\,\widehat{xf}(\xi),\qquad
\widehat{xf}(\xi)=i\,\widehat f'(\xi).
$$
For Schwartz functions, these operations can be repeated to any order. In particular, $\widehat{f''}=-\xi^2\widehat f$.

:::dimostrazione
To prove the first identity, integrate by parts with respect to $x$. On $[-R,R]$, with $R>0$, this gives
$$
\int_{-R}^{R}f'(x)e^{-i\xi x}\,dx
=\big[f(x)e^{-i\xi x}\big]_{-R}^{R}
+i\xi\int_{-R}^{R}f(x)e^{-i\xi x}\,dx .
$$
The limits of $f$ at either end of the line exist because the change between two points in the same tail is bounded by the integral of the modulus of $f'$ between those points. Both limits are zero because $f$ is integrable. Thus the boundary term tends to zero and the integrals converge absolutely. For the second identity, differentiate with respect to $\xi$. The difference quotient of the exponential factor has modulus at most $|x|$, so its product with $f$ is dominated by $|xf(x)|$. Taking the limit under the integral introduces the factor $-ix$ and proves the formula.
:::
::::

:::esempio{titolo="The derivative of a Gaussian"}
For $g(x)=e^{-x^2}$ we have $g'(x)=-2xe^{-x^2}$. Since $g$ and $g'$ are both integrable and $g$ tends to zero at both ends of the line, we may integrate by parts on a finite interval and then pass to the limit. This gives $\widehat{g'}(\xi)=i\xi\sqrt{\pi}e^{-\dfrac{\xi^2}{4}}$. The transform is purely imaginary, as expected for a real odd derivative. It also vanishes at zero because the integral of $g'$ is the difference between two zero limits. To differentiate the transform itself, we instead differentiate under the integral. The modulus of the difference quotient of the exponential is bounded by $|x|$, so the required dominating function is $|xg(x)|$.

::grafico{f="sqrt(pi)*exp(-x^2/4);sqrt(pi)*x*exp(-x^2/4)" nomi="ξ,F" xmin=-6 xmax=6 ymin=-1.9 ymax=2.05 legenda="\widehat g(\xi);\operatorname{Im}\widehat{g'}(\xi)" titolo="Differentiation multiplies the transform by $i\xi$. The graph shows the imaginary part of $\widehat{g'}$"}
:::

:::esempio{titolo="Curvature of the transform at zero frequency"}
For $f=\mathbf1_{[-2,2]}$, the function and its products with $x$ and $x^2$ are integrable, so we may differentiate twice with respect to $\xi$. Each derivative of the exponential introduces a factor $-ix$. Setting $\xi=0$ after differentiation gives
$$
\begin{aligned}
\widehat f'(0)&=-i\int_{-2}^{2}x\,dx=0,\\[6pt]
\widehat f''(0)&=-\int_{-2}^{2}x^2\,dx=-\frac{16}{3}.
\end{aligned}
$$
The first integral vanishes because the integrand is odd. The second has a minus sign because $(-i)^2=-1$. Since $\widehat f(0)=4$, the Taylor expansion at zero gives $\widehat f(\xi)=4-\dfrac83\xi^2+o(\xi^2)$. Expanding the sine in the formula $\dfrac{2\sin(2\xi)}{\xi}$ gives the same coefficient. The calculation using moments also works when the Fourier integral has no elementary closed form.
:::

## Convolution

:::definizione{#convoluzione titolo="Convolution and the Fourier transform"}
For $f,g\in L^1(\mathbb R)$, the **convolution** is
$$
(f*g)(x)=\int_{\mathbb R}f(x-y)g(y)\,dy.
$$
For indicator functions this integral measures the overlap of their supports. For example, the intersection of $[0,1]$ and $[x-1,x]$ has length one for $x=1$.
:::

::::teorema{#teorema-convoluzione titolo="The transform of a convolution"}
If $f,g\in L^1(\mathbb R)$, the convolution exists almost everywhere, belongs to $L^1$, and satisfies $\|f*g\|_1\le\|f\|_1\|g\|_1$. Moreover,
$$
\widehat{f*g}=\widehat f\,\widehat g.
$$
For example, convolving two identical interval indicators gives a triangular function whose transform is the square of the transform of the indicator.

:::dimostrazione
First we show that the product is absolutely integrable in the two variables. The substitution $u=x-y$ preserves measure in $x$. By Tonelli's theorem,
$$
\begin{aligned}
\int_{\mathbb R}\int_{\mathbb R}|f(x-y)|\,|g(y)|\,dy\,dx
&=\int_{\mathbb R}|g(y)|
 \left(\int_{\mathbb R}|f(u)|\,du\right)dy\\
&=\|f\|_1\|g\|_1.
\end{aligned}
$$
This quantity is finite. Hence the inner integral exists for almost every $x$, and the triangle inequality gives the bound on $\|f*g\|_1$. The Fourier kernel has modulus one, so Fubini's theorem also applies to the complex integral. The same substitution gives
$$
\begin{aligned}
\widehat{f*g}(\xi)
&=\int_{\mathbb R}\int_{\mathbb R}f(u)g(y)e^{-i\xi(u+y)}\,du\,dy\\
&=\left(\int_{\mathbb R}f(u)e^{-i\xi u}\,du\right)
 \left(\int_{\mathbb R}g(y)e^{-i\xi y}\,dy\right)\\
&=\widehat f(\xi)\widehat g(\xi).
\end{aligned}
$$
:::
::::

:::osservazione
For Schwartz functions we also have $\widehat{fg}=\dfrac1{2\pi}\widehat f*\widehat g$. The convolution of two interval indicators equals the length of their overlap after translation. For $\mathbf1_{[0,a]}*\mathbf1_{[0,a]}$, this gives the triangular function equal to $x$ on $[0,a]$, to $2a-x$ on $[a,2a]$, and to zero elsewhere.
:::

:::esempio{titolo="Overlap of intervals of different lengths"}
For $f=\mathbf1_{[0,2]}$ and $g=\mathbf1_{[0,1]}$, with $x$ fixed, the condition $f(x-y)=1$ is equivalent to $x-2\le y\le x$. The integrand is therefore one on the intersection of $[x-2,x]$ and $[0,1]$ and zero elsewhere. As $x$ increases, the length of the intersection grows from zero to one on $[0,1]$, stays at one on $[1,2]$, and drops from one to zero on $[2,3]$. The graph is a trapezoid. The area under it is $2$, equal to the product of the masses $\int f=2$ and $\int g=1$.

::grafico{linee="0,0 1,1 2,1 3,0" poligoni="0,0 1,1 2,1 3,0" punti="1,1,pieno;2,1,pieno" xmin=-0.4 xmax=3.55 ymin=-0.2 ymax=1.4 titolo="The convolution of $\mathbf1_{[0,2]}$ and $\mathbf1_{[0,1]}$ is constant wherever the shorter interval lies entirely within the longer one"}
:::

:::osservazione
To justify exchanging the integrals in the transform of $f*g$, first consider the double integral of the modulus. The substitution $u=x-y$ gives $\int |g(y)|\int|f(u)|\,du\,dy=\|f\|_1\|g\|_1$. This product is finite, so Fubini's theorem also applies with the factor $e^{-i\xi x}$ present. After substitution, $e^{-i\xi x}=e^{-i\xi u}e^{-i\xi y}$. Each factor then depends on just one variable, and the two integrals separate.
:::

:::esempio{titolo="Averaging an exponential over a moving interval"}
Let $f(x)=e^{-|x|}$ and $g=\mathbf1_{[0,1]}$. In the convolution, integrate first with respect to the variable in the indicator, then set $u=x-y$. This gives
$$
(f*g)(x)=\int_0^1 e^{-|x-y|}\,dy
=\int_{x-1}^{x} e^{-|u|}\,du.
$$
The interval has length one, so this integral is the average of $f$ over the interval ending at $x$. If $x\le0$, the entire interval lies on the negative half-line and the integrand is $e^u$. If $x\ge1$, the interval lies on the positive half-line and the integrand is $e^{-u}$. For $0<x<1$ the interval crosses zero, so we evaluate the two contributions separately. The result is
$$
(f*g)(x)=\begin{cases}
e^x-e^{x-1},&x\le 0,\\
2-e^{x-1}-e^{-x},&0<x<1,\\
e^{1-x}-e^{-x},&x\ge1.
\end{cases}
$$
The function is positive even outside $[0,1]$ because the exponential is positive everywhere on the real line. The fundamental theorem of calculus also gives $f(x)-f(x-1)$ for the derivative of the average. Since $f$ is continuous even at zero, the derivative of the convolution is continuous at both points where the formula changes.
:::

## Inversion and Plancherel's theorem

::::teorema{#inversione-fourier titolo="Fourier inversion and Plancherel's identity"}
If $f,\widehat f\in L^1$, then
$$
f(x)=\frac1{2\pi}\int_{\mathbb R}\widehat f(\xi)e^{i\xi x}\,d\xi
$$
almost everywhere and at every point where $f$ is continuous. The transform extends by density from $L^1\cap L^2$ to all of $L^2$. Writing $\langle f,g\rangle=\int_{\mathbb R}f(x)\overline{g(x)}\,dx$ for the inner product, we have
$$
\|\widehat f\|_2^2=2\pi\|f\|_2^2,\qquad
\langle\widehat f,\widehat g\rangle=2\pi\langle f,g\rangle.
$$
This is Plancherel's theorem. For a function assumed only to belong to $L^2$, its transform is defined by a norm limit without assuming that the ordinary integral converges. With the factor $\dfrac1{\sqrt{2\pi}}$, the transform is a unitary operator.

:::dimostrazione
**Inversion.** Multiply $\widehat f(\xi)$ by $e^{-\varepsilon \xi^2}$, with $\varepsilon>0$, to express the inverse integral as a convolution. Substituting the definition of $\widehat f$ and interchanging the integrals gives
$$
\frac1{2\pi}\int_{\mathbb R} e^{-\varepsilon\xi^2}\widehat f(\xi)e^{i\xi x}\,d\xi
=\int_{\mathbb R}\frac{e^{-\frac{(x-y)^2}{4\varepsilon}}}{\sqrt{4\pi\varepsilon}}f(y)\,dy.
$$
The interchange is justified by $\|f\|_1\int e^{-\varepsilon\xi^2}\,d\xi<\infty$, and the Gaussian formula evaluates the inner integral. As $\varepsilon\downarrow0$, the condition $\widehat f\in L^1$ allows the limit to pass under the integral on the left. On the right, the kernel has mass one and concentrates around $y=x$. At a point of continuity, the integral of the difference $f(y)-f(x)$ is small in a neighborhood of $x$. Outside that neighborhood, the term involving $f(y)$ is bounded by $\|f\|_1$ times the maximum of the kernel there, which tends to zero. The tail mass times $|f(x)|$ also tends to zero. This proves pointwise inversion at every point of continuity.

The same calculation gives equality almost everywhere for any function in $L^1$ with an integrable transform. Write $K_\varepsilon$ for the Gaussian kernel in the identity and $F$ for the inverse integral without the factor $e^{-\varepsilon \xi^2}$. Convergence to $F$ is uniform because for every $x$ the error is bounded by
$$
\frac{1}{2\pi}\int_{\mathbb R}|\widehat f(\xi)|\big|e^{-\varepsilon\xi^2}-1\big|\,d\xi,
$$
which tends to zero. On the other hand, since the kernel has integral one, the triangle inequality and Tonelli's theorem give
$$
\|K_\varepsilon*f-f\|_1
\le\int_{\mathbb R}K_\varepsilon(y)\|f(\cdot-y)-f\|_1\,dy.
$$
Translation is continuous in the $L^1$ norm. This holds first for continuous functions of compact support and then follows by density, since translation preserves the norm. Near zero the difference on the right is therefore small. Away from zero it is at most $2\|f\|_1$, and the mass of the kernel there tends to zero. This gives convergence in the $L^1$ norm to $f$. On every bounded interval, uniform convergence also gives convergence in the $L^1$ norm to $F$ on that interval. By uniqueness of the limit, $F=f$ almost everywhere.

**Plancherel's theorem.** We first prove the inner product identity for Schwartz functions, which are smooth and decay rapidly together with all their derivatives. Write the inversion formula for $g$, take its complex conjugate, and substitute into $\int f(x)\overline{g(x)}\,dx$. The factor $e^{-i\xi x}$ appearing after conjugation is the one in the definition of $\widehat f$. The order of integration can be reversed because $f$ and $\widehat g$ both belong to $L^1$, so
$$
\int_{\mathbb R} f(x)\overline{g(x)}\,dx
=\frac1{2\pi}\int_{\mathbb R}\widehat f(\xi)\overline{\widehat g(\xi)}\,d\xi.
$$
Taking $g=f$ gives the estimate needed to extend the result to functions in $L^2$. Indeed, if $(f_n)$ is a sequence of Schwartz functions converging in $L^2$ to $f$, applying the identity to $f_n-f_m$ shows that their transforms form a Cauchy sequence in $L^2$. If a different approximating sequence is chosen, applying the identity to the difference of the two approximations gives the same limit. It is in this sense that the transform in $L^2$ depends only on the equivalence class of $f$.

If $f$ belongs to $L^1\cap L^2$, the two definitions of its transform agree almost everywhere. To verify this, approximate $f$ by smooth functions of compact support, first truncating the function and then smoothing each truncation. The approximations can be chosen to converge in both norms. The inequality $\|\widehat f_n-\widehat f\|_\infty\le\|f_n-f\|_1$ gives uniform convergence to the transform defined by the integral. Plancherel's identity gives convergence in $L^2$ to the extended transform. On every bounded interval both limits are also attained in the $L^2$ norm, so they agree almost everywhere. Thus when both hypotheses hold we may compute the transform by integration and then apply the norm identity to the result.

The normalized transform preserves the norm and has closed range because $L^2$ is complete. The inverse given by the inversion formula also maps Schwartz functions to Schwartz functions. Indeed, the differentiation and multiplication identities can be iterated because every derivative of a Schwartz function, multiplied by any power of the variable, is integrable. The range of the normalized transform therefore contains the Schwartz functions. Since they are dense in $L^2$, the range is all of $L^2$.
:::
::::

:::esempio{titolo="Evaluating an integral with Plancherel's theorem"}
For $f(x)=e^{-|x|}$ we have $\int|f|^2=2\int_0^\infty e^{-2x}\,dx=1$. The transform is $\dfrac2{1+\xi^2}$. The norm identity gives
$$
4\int_{\mathbb R}\frac{d\xi}{(1+\xi^2)^2}=2\pi,
\qquad
\int_{\mathbb R}\frac{d\xi}{(1+\xi^2)^2}=\frac{\pi}{2}.
$$
The factor $4$ comes from squaring the numerator of the transform. The factor $2\pi$ depends on the convention. With the same function we can check the inversion constant at $x=0$. We have $\dfrac1{2\pi}\int_{\mathbb R}\dfrac2{1+\xi^2}\,d\xi=1=f(0)$, since the integral of $\dfrac1{1+\xi^2}$ can be evaluated using the arctangent.

::grafico{f="4/(1+x^2)^2" area="4/(1+x^2)^2;0;-4;4" nomi="ξ,E" xmin=-5 xmax=5 ymin=-0.25 ymax=4.55 titolo="The frequency-domain energy density is $|\widehat f(\xi)|^2$. Its integral over the entire real line is $2\pi$"}
:::

:::attenzione
For $f=\mathbf1_{[-1,1]}$ the transform $\dfrac{2\sin \xi}{\xi}$ belongs to $L^2$ but not to $L^1$. Indeed, on fixed-length intervals around points where $|\sin\xi|=1$, we have $|\sin\xi|\ge\dfrac12$. The contribution from these intervals to the integral of the modulus is bounded below by a positive constant times the harmonic series. Plancherel's theorem still applies because $f$ is square integrable. The absolute integrability required by the inversion formula stated here must be checked separately.
:::

## Tempered distributions

:::definizione{#distribuzioni titolo="Distributions and the Dirac delta"}
The Schwartz space $\mathcal S$ consists of smooth functions whose derivatives of every order decay faster than any inverse power. A tempered distribution is a continuous linear functional on $\mathcal S$. The Dirac delta is $\langle\delta_a,\varphi\rangle=\varphi(a)$, and the distributional derivative is defined by
$$
\langle T',\varphi\rangle=-\langle T,\varphi'\rangle.
$$
The transform extends by duality via $\langle\widehat T,\varphi\rangle=\langle T,\widehat\varphi\rangle$, using the bilinear pairing for distributions. This gives $\widehat{\delta_a}(\xi)=e^{-ia\xi}$, $\widehat1=2\pi\delta_0$, and $\widehat{T'}=i\xi\widehat T$. The distributional derivative of the Heaviside function is $\delta_0$. Its jump gives a point mass.
:::

:::esempio{titolo="The Heaviside jump and its distributional derivative"}
For a test function $\varphi$, the distribution associated with $H=\mathbf1_{(0,+\infty)}$ acts by integrating $\varphi$ on the positive half-line. Hence
$$
\langle H',\varphi\rangle=-\int_0^\infty\varphi'(x)\,dx=\varphi(0),
$$
because $\varphi(x)\to0$ at infinity. The classical derivative of $H$ vanishes away from the origin. The distributional derivative also records the jump. In the figure, the arrow marks the point at which the delta of mass one acts.

::grafico{linee="-2,0 0,0;0,1 2,1" punti="0,0,pieno;0,1,vuoto" vettori="0,0,0,1.6,δ₀" xmin=-2.2 xmax=2.25 ymin=-0.25 ymax=1.9 titolo="The unit jump of the Heaviside function at zero contributes the point mass $\delta_0$ to its distributional derivative"}
:::

:::esempio{titolo="The jump in the derivative of a two-sided exponential"}
Let $g(x)=e^{-a|x|}$, with $a>0$. The function is continuous and is absolutely continuous on every compact interval, so its first distributional derivative agrees almost everywhere with its ordinary derivative. To the left of the origin the derivative is $ae^{ax}$ and tends to $a$. To the right it is $-ae^{-ax}$ and tends to $-a$. Apply the definition of the distributional derivative to $g'$ and integrate by parts on each half-line. For a test function $\varphi$ this gives
$$
\begin{aligned}
\langle g'',\varphi\rangle
&=a^2\int_{\mathbb R}g(x)\varphi(x)\,dx
+(-a-a)\varphi(0),\\[6pt]
g''&=a^2g-2a\delta_0.
\end{aligned}
$$
The mass has coefficient $-2a$ because the jump is the right-hand limit minus the left-hand limit. The term $a^2g$ represents the ordinary second derivative on the two open half-lines. Taking the transform gives $-\xi^2\widehat g=a^2\widehat g-2a$. Since $a^2+\xi^2$ is positive, we obtain $\widehat g(\xi)=\dfrac{2a}{a^2+\xi^2}$, recovering the result of direct integration. In this calculation the point mass at the origin determines the numerator of the transform.
:::

## Application to the heat equation

:::esempio{#calore-fourier titolo="Transforming an initial value problem"}
For $u_t=\kappa u_{xx}$ on the real line, with $\kappa>0$ and Schwartz initial data $u_0$, take the transform in the variable $x$ to obtain
$$
\partial_t\widehat u=-\kappa\xi^2\widehat u,\qquad
\widehat u(t,\xi)=e^{-\kappa t\xi^2}\widehat u_0(\xi).
$$
Fourier inversion and the convolution theorem give
$$
u(t,x)=G_t*u_0(x),\qquad
G_t(x)=\frac1{\sqrt{4\pi\kappa t}}e^{-\frac{x^2}{4\kappa t}}.
$$
The kernel has integral $1$ and concentrates at zero as $t\downarrow0$. The solution is smooth for $t>0$ and converges to the initial data in the limit.
:::


:::esempio{titolo="Evolution of a Gaussian initial profile"}
For $u_0(x)=e^{-x^2}$ and $\kappa=1$, start with $\widehat u_0(\xi)=\sqrt{\pi}e^{-\dfrac{\xi^2}{4}}$. Multiplying by $e^{-t\xi^2}$ changes the exponent to $-(t+\dfrac14)\xi^2$. To invert, recognize a Gaussian with spatial parameter $a=\dfrac1{1+4t}$. The required factor multiplying the transform of that Gaussian is $\dfrac1{\sqrt{1+4t}}$, so
$$
u(t,x)=\frac1{\sqrt{1+4t}}e^{-\frac{x^2}{1+4t}}.
$$
As $t$ increases, the value at zero decreases and the width increases. The integral in $x$ remains $\sqrt{\pi}$, since the amplitude factor cancels the factor from the Gaussian integral. In the frequency domain we see the same conservation by evaluating at $\xi=0$, where the multiplier $e^{-t\xi^2}$ equals one.

::grafico{f="exp(-x^2);exp(-x^2/2)/sqrt(2);exp(-x^2/5)/sqrt(5)" xmin=-4 xmax=4 ymin=-0.1 ymax=1.18 legenda="t=0;t=\frac14;t=1" titolo="Heat diffusion spreads out the initial profile. All three curves have the same mass $\sqrt{\pi}$"}
:::

:::osservazione
To show how the kernel $G_t$ recovers the initial data, write $(G_t*u_0)(x)-u_0(x)$ as the integral of $G_t(y)[u_0(x-y)-u_0(x)]$. For $|y|<\delta$ the difference is small by uniform continuity of $u_0$. For $|y|\ge\delta$ the difference is at most $2\|u_0\|_\infty$, and the kernel mass outside $(-\delta,\delta)$ tends to zero. To see this, use $y=\sqrt{4\kappa t}\,z$, which sends the endpoints of the exterior intervals to infinity in the variable $z$. The two estimates give uniform convergence for Schwartz initial data.

::grafico{f="exp(-x^2);exp(-x^2/4)" nomi="ξ,m" xmin=-5 xmax=5 ymin=-0.12 ymax=1.18 legenda="t=1;t=\frac14" titolo="The multiplier $e^{-t\xi^2}$ always equals one at zero and attenuates higher frequencies more strongly"}
:::

:::osservazione
Diffusion also preserves the first moment, the integral of the profile times $x$. For Schwartz initial data, the profile at every positive time is also a Schwartz function, so we may differentiate its transform. At zero frequency the derivative of the factor $e^{-\kappa t\xi^2}$ is zero and the factor itself is one. The product rule therefore gives
$$
\partial_\xi\widehat u(t,0)=\widehat u_0'(0),\qquad
\int_{\mathbb R}x\,u(t,x)\,dx=\int_{\mathbb R}x\,u_0(x)\,dx .
$$
For example, the initial profile $u_0(x)=(x+1)e^{-(x+1)^2}$ integrates to zero because it is odd about $-1$. To compute the first moment, the substitution $y=x+1$ gives the integral of $(y^2-y)e^{-y^2}$. The odd term vanishes, and integration by parts gives $\dfrac{\sqrt\pi}{2}$ for the quadratic term. The solution thus has zero mass and first moment $\dfrac{\sqrt\pi}{2}$ at all times. These integrals describe different properties of the initial data and correspond to the value and the derivative of the transform at zero, respectively.
:::
