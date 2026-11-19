---
titolo: "Random variables and continuous distributions"
sommario: "Calculating probabilities, quantiles, and moments from a density and using the main families of continuous distributions."
---

## Densities and interval probabilities

:::definizione{#densita titolo="Density of a random variable"}
A measurement such as the duration of a test can be modeled by a real-valued random variable $X$. The distribution of $X$ is **absolutely continuous** if there is an integrable function $f_X$, called its **density**, such that $f_X(x)\ge 0$, the total area is one, and
$$
P(a<X\le b)=\int_a^b f_X(x)\,dx
\qquad\text{for every }a<b.
$$
A density assigns probabilities through areas. If $X$ is measured in seconds, $f_X(x)$ is expressed in $\mathrm{s}^{-1}$, and probability is dimensionless. Changing a density at finitely many points leaves the areas unchanged, so its values at the endpoints of its individual pieces are a matter of convention.
:::

:::esempio{titolo="Finding the normalizing constant"}
Let $f_X(x)=cx$ for $0<x<2$ and $f_X(x)=0$ elsewhere. Since the area under the density must be one,
$$
1=\int_0^2 cx\,dx
  =\left[\frac{cx^2}{2}\right]_0^2=2c.
$$
It follows that $c=\dfrac12$. With this value, the function is also nonnegative throughout the support. To find $P(1<X<2)$, integrate only from $1$ to $2$. The area is $\dfrac34$ because the area from $0$ to $1$ is $\dfrac14$ and the two areas add to $1$.

::grafico{curve="t,t/2,0,2" legenda="f_X(x)=\dfrac{x}{2}" segmenti="2,0,2,1" area="x/2;0;1;2" xmin=-0.4 xmax=2.6 ymin=-0.12 ymax=1.22 nomi="x,y" titolo="The shaded area is the probability that X lies between 1 and 2"}

:::

::::teorema{#probabilita-puntuale titolo="Probability at a single point"}
If $X$ has a density, then $P(X=x_0)=0$ for every $x_0\in\mathbb R$. Consequently, the probability of an interval is the same whichever endpoints are included.
:::dimostrazione
The event $\{X=x_0\}$ is contained in $\{x_0-h<X\le x_0\}$ for every $h>0$. Since $f_X$ is integrable, its integral over $(x_0-h,x_0]$ tends to zero as $h\to0^+$. The probability of the singleton lies between zero and that integral, so it is zero.
:::
::::

:::attenzione{titolo="A density can be greater than one"}
The uniform density on $(0,\dfrac14)$ has height $4$. Its area is $4\cdot\dfrac14=1$. Thus the normalization condition constrains the integral of the density and does not bound its height by one. If a distribution assigns positive probability to a single value, as when a waiting time is zero with probability $\dfrac14$, a density cannot describe the entire distribution.
:::

## Cumulative distribution functions, quantiles, and moments

:::definizione{#ripartizione titolo="Cumulative distribution function"}
The **cumulative distribution function** $F_X$ gives the probability that $X$ is at most a threshold $x$. For a variable with a density,
$$
F_X(x)=P(X\le x)=\int_{-\infty}^x f_X(t)\,dt.
$$
As $x$ increases, the interval of integration grows and the integrand is nonnegative. Hence $F_X$ is nondecreasing. The area over intervals whose lengths approach zero tends to zero, so $F_X$ is continuous. Its limits at negative and positive infinity are $0$ and $1$, respectively. The probability between two thresholds is given by
$$
P(a<X\le b)=F_X(b)-F_X(a),
$$
because the second term removes the area accumulated up to $a$.
:::

:::esempio{titolo="A cumulative distribution function on three intervals"}
Let $f_X(x)=2x$ for $0<x<1$ and zero elsewhere. If $0<x<1$, the integral from $0$ to $x$ equals $x^2$. To the left of the support no area has accumulated. To the right all the area has accumulated. The cumulative distribution function therefore equals $0$ for $x\le 0$, $x^2$ for $0<x<1$, and $1$ for $x\ge1$. The calculation $F_X(1)-F_X(\dfrac12)=\dfrac34$ includes all the area from the midpoint of the interval to its right endpoint.
:::

:::osservazione{titolo="From the cumulative distribution function to the density"}
At a point of continuity of $f_X$, the fundamental theorem of calculus gives $F_X'(x)=f_X(x)$. For a continuous distribution function that is differentiable on a finite number of pieces, the derivatives on those pieces give the density. The distribution function gives probabilities and thresholds. Integrating the density after multiplying it by a power of $x$ gives the moments of the distribution. A horizontal portion of the distribution function corresponds to an interval of zero probability. If there is a jump, its size is the probability assigned to that point. Differentiating only the smooth pieces does not recover that mass.
:::

:::definizione{#quantili-continui titolo="Lower-tail quantile"}
Let $p\in(0,1)$. The **quantile of order** $p$ is the first threshold at which the cumulative distribution function reaches at least $p$:
$$
q_p=\inf\{x\in\mathbb R:F_X(x)\ge p\}.
$$
If the distribution function is continuous and strictly increasing around that threshold, the quantile is the unique solution of $F_X(x)=p$. The median is $q_{\frac12}$. A threshold leaving probability $0.10$ to its right is the quantile $q_{0.90}$, since the two complementary tail probabilities sum to one.
:::

:::esempio{titolo="Reading a quantile from the cumulative distribution function"}
For a distribution function equal to $x^2$ between $0$ and $1$, the quantile of order $\dfrac14$ satisfies $q_{\frac14}^2=\dfrac14$. The root $\dfrac12$ belongs to the interval, so it is the required threshold. The negative root lies outside the interval on which the equation holds. If the distribution function were constant at the required level over a whole interval, the definition using the infimum would select the left endpoint.

::grafico{curve="t,0,-0.35,0;t,t*t,0,1;t,1,1,1.4" punti="0.5,0.25,pieno" segmenti="0,0.25,0.5,0.25;0.5,0,0.5,0.25" etichette="0.46,-0.10,0.5;-0.25,0.25,0.25" xmin=-0.35 xmax=1.42 ymin=-0.16 ymax=1.18 nomi="x,F_X" legenda=0 titolo="The cumulative distribution function reaches $p=\dfrac14$ at the threshold $x=\dfrac12$"}
:::

## Expected value and variance

:::definizione{#momenti-continui titolo="Moments of a distribution with a density"}
If $\int_{\mathbb R}|x|f_X(x)\,dx$ is finite, the **expected value** is obtained by weighting each value by the density. If the second moment is finite, we can also calculate the following quantities:
$$
\begin{aligned}
E[X]&=\int_{\mathbb R}x f_X(x)\,dx,\\[6pt]
E[X^2]&=\int_{\mathbb R}x^2 f_X(x)\,dx,\\[6pt]
\operatorname{Var}(X)&=E[X^2]-E[X]^2.
\end{aligned}
$$
The second formula weights and integrates the squared values to obtain their mean. The last follows by expanding the square in $E[(X-E[X])^2]$ and using linearity. If $X$ is measured in meters, $E[X]$ and the standard deviation have units of $\mathrm m$, whereas the variance has units of $\mathrm{m}^2$.
:::

:::esempio{titolo="Moments for an increasing density"}
For $f_X(x)=2x$ on $(0,1)$, integrating $2x^2$ gives $E[X]=\dfrac23$, and integrating $2x^3$ gives $E[X^2]=\dfrac12$. The variance is therefore $\dfrac12-\dfrac49=\dfrac1{18}$. The mean lies above the midpoint because the density is higher on intervals on the right than on their counterparts on the left.
:::

:::osservazione{titolo="Effect of an affine transformation"}
If $Y=aX+b$ and $E[X^2]$ is finite, then $E[Y]=aE[X]+b$. Subtracting the means gives $Y-E[Y]=a(X-E[X])$, so $\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$. For the standard deviation the factor is $|a|$. Converting seconds to minutes divides the values and their standard deviation by $60$ and the variance by $3600$.
:::

## The uniform distribution

:::definizione{#uniforme titolo="Uniform distribution on an interval"}
For $a<b$, the notation $X\sim U(a,b)$ means that $X$ has constant density $\dfrac1{b-a}$ on $(a,b)$ and zero density elsewhere. The height is the reciprocal of the interval length $b-a$, so the density rectangle has area one. To find a probability, take the length of the part of the requested interval that intersects $(a,b)$ and divide by $b-a$.
:::

:::esempio{titolo="An interval extending beyond the support"}
A delivery arrives between $8$ and $12$ on a 24-hour clock, uniformly over that interval. An arrival after $10$ and before $13$ has the same probability as an arrival between $10$ and $12$. The part of the interval within the support lasts two hours, so the probability is $\dfrac24=\dfrac12$. This calculation uses the stated uniform model, which gives equal probabilities to intervals of equal length within the support.

::grafico{linee="0,0 8,0;8,0.25 12,0.25;12,0 14.4,0" area="0.25;0;10;12" segmenti="8,0,8,0.25;12,0,12,0.25;13,0,13,0.12;0,0.25,8,0.25" etichette="13,0.15,13;0.9,0.27,0.25" xmin=-0.6 xmax=14.6 ymin=-0.04 ymax=0.34 nomi="x,f_X" legenda=0 titolo="The density of $U(8,12)$ has height $\dfrac14$. Of the interval from $10$ to $13$, only the portion up to $12$ contributes, giving area $2\cdot\dfrac14=\dfrac12$"}

:::

::::teorema{#parametri-uniforme titolo="Quantiles and moments of the uniform distribution"}
If $X\sim U(a,b)$ with $a<b$, then
$$
q_p=a+p(b-a),\qquad E[X]=\frac{a+b}{2},
\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$
The quantile is found by moving a fraction $p$ of the interval's length from $a$. The variance depends on the length of the interval.
:::dimostrazione
For $a<x<b$, the cumulative distribution function is $\dfrac{x-a}{b-a}$. Solving $F_X(q_p)=p$ gives the quantile formula. For the mean, integrate $x$ over $(a,b)$ and divide by $b-a$, obtaining $\dfrac{b^2-a^2}{2(b-a)}=\dfrac{a+b}{2}$. For the variance, set $V=\dfrac{X-a}{b-a}$, which is uniform on $(0,1)$. Since $E[V]=\dfrac12$ and $E[V^2]=\dfrac13$, $\operatorname{Var}(V)=\dfrac1{12}$. The transformation $X=a+(b-a)V$ multiplies the variance by $(b-a)^2$.
:::
::::

## The exponential distribution

:::definizione{#esponenziale titolo="Exponential waiting times"}
If $X$ has an **exponential distribution** with rate $\lambda>0$, its density is $\lambda e^{-\lambda x}$ for $x>0$ and zero elsewhere. The units of the rate $\lambda$ are the reciprocal of the time units. For $t\ge0$, integrating the density from $t$ to infinity gives
$$
P(X>t)=e^{-\lambda t},
\qquad F_X(t)=1-e^{-\lambda t}.
$$
The first function is the **survival function**. It gives the probability of exceeding a threshold directly. For $0\le a<b$, the probability between $a$ and $b$ is $e^{-\lambda a}-e^{-\lambda b}$. This subtracts the tail beyond $b$ from the tail beyond $a$.
:::

:::osservazione{titolo="Scale, variance, and quantiles"}
Integration by parts gives $E[X]=\dfrac1\lambda$ and $E[X^2]=\dfrac{2}{\lambda^2}$. Hence $\operatorname{Var}(X)=\dfrac1{\lambda^2}$. The reciprocal of the rate is the **scale** parameter and equals the mean waiting time. Solving $1-e^{-\lambda q_p}=p$ gives
$$
q_p=-\frac{\log(1-p)}{\lambda}.
$$
Here $\log$ denotes the natural logarithm. If the rate is $\dfrac14\,\mathrm{min}^{-1}$, the mean is $4\,\mathrm{min}$ and the median is $4\log 2\,\mathrm{min}$. The median is smaller than the mean because $\log 2<1$.

::grafico{curve="t,exp(-t/4)/4,0,16" area="exp(-x/4)/4;0;0;2.7726" segmenti="2.7726,0,2.7726,0.125;4,0,4,0.09197" etichette="3.9,0.14,median;5.1,0.105,mean" xmin=-0.6 xmax=16.5 ymin=-0.025 ymax=0.3 nomi="x,f_X" legenda="f_X(x)=\dfrac14e^{-x/4}" titolo="Exponential density with rate $\dfrac14$. The shaded area is $\dfrac12$ and ends at the median $4\log 2\approx2.77$, to the left of the mean $4$"}

:::

::::teorema{#assenza-di-memoria titolo="Memorylessness"}
If $X$ has an exponential distribution with rate $\lambda>0$, then for every $s,t\ge0$,
$$
P(X>s+t\mid X>s)=P(X>t).
$$
For example, if a lifetime is exponential with mean $4\,\mathrm{h}$, the probability of lasting another four hours given that it has already exceeded ten hours is $e^{-1}$.
:::dimostrazione
Since $\{X>s+t\}\subseteq\{X>s\}$ and $P(X>s)=e^{-\lambda s}>0$, the ratio defining the conditional probability is
$$
\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}.
$$
The result depends only on $t$. Thus, conditional on survival to $s$, the remaining waiting time has the same distribution as the original waiting time.
:::
::::

:::attenzione{titolo="Memorylessness is a property of the model"}
If $X\sim U(0,10)$, then $P(X>6\mid X>5)=\dfrac45$ because the conditioning leaves an interval of length five, four units of which lie above $6$. Yet $P(X>1)=\dfrac9{10}$. The exponential memoryless property therefore does not extend to all continuous lifetimes.
:::

:::esempio{titolo="Converting time units"}
A response time $T$ has an exponential distribution with mean $30\,\mathrm{s}$. In seconds, the rate is $\dfrac1{30}\,\mathrm{s}^{-1}$. For a threshold of $90\,\mathrm{s}$, the rate times the duration is $\dfrac{90}{30}=3$, so $P(T>90\,\mathrm{s})=e^{-3}$. In minutes, the mean waiting time is $\dfrac12\,\mathrm{min}$ and the rate is $2\,\mathrm{min}^{-1}$. The product is again $2\cdot\dfrac32=3$. The probability stays the same because the threshold and the rate are expressed in compatible units.
:::

## The normal distribution and standardization

:::definizione{#normale titolo="Normal distribution"}
We write $X\sim N(\mu,\sigma^2)$ when $X$ has a **normal distribution** with mean $\mu$ and variance $\sigma^2$, where $\sigma>0$ is the standard deviation. Its density is
$$
f_X(x)=\frac{1}{\sigma\sqrt{2\pi}}
          \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$
The exponent depends on the squared distance from $\mu$, so points equally distant from the center have equal densities. Each of the two half-lines separated by $\mu$ has probability $\dfrac12$. Increasing $\sigma$ increases the spread and lowers the density at the center, while the total area stays one.
:::

::::teorema{#standardizzazione-normale titolo="Standardizing a normal variable"}
If $X\sim N(\mu,\sigma^2)$ with $\sigma>0$, then $Z=\dfrac{X-\mu}{\sigma}$ has distribution $N(0,1)$. Writing $\Phi$ for its cumulative distribution function gives, for $a<b$,
$$
P(a<X<b)=
\Phi\!\left(\frac{b-\mu}{\sigma}\right)
-\Phi\!\left(\frac{a-\mu}{\sigma}\right).
$$
In a standard normal table, $\Phi(z)$ is the area to the left of $z$. The probability to the right is $1-\Phi(z)$. Conversely, if $Z$ is standard normal, then $\mu+\sigma Z$ has distribution $N(\mu,\sigma^2)$. Since $-Z$ has the same distribution as $Z$ by symmetry, for $a\ne0$ the variable $aX+b$ is normal with mean $a\mu+b$ and variance $a^2\sigma^2$.
:::dimostrazione
Subtracting $\mu$ and dividing by $\sigma>0$ preserve the direction of the inequalities. In the integral for $P(X\le x)$, substitute $u=\dfrac{t-\mu}{\sigma}$. The differential $dt=\sigma\,du$ cancels the density factor $\dfrac1\sigma$. The remaining integral is that of the standard normal density up to $\dfrac{x-\mu}{\sigma}$. Taking the difference of two values of the distribution function gives the interval formula.
:::
::::

:::esempio{titolo="Two symmetric tails"}
For $X\sim N(40,25)$, the standard deviation is $5$. The thresholds $35$ and $45$ correspond to $-1$ and $1$. Since the standard normal density is even, $\Phi(-1)=1-\Phi(1)$. Thus, using $\Phi(1)\approx0.84134$, the probability of the interval is $2\Phi(1)-1\approx0.6827$. Adding the two tails gives an outside probability of approximately $0.3173$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1;1" segmenti="-1,0,-1,0.24197;1,0,1,0.24197" xmin=-3.8 xmax=3.8 ymin=-0.045 ymax=0.46 nomi="z,y" legenda="f_Z(z)" titolo="Area between the standardized values −1 and 1"}

:::

:::osservazione{titolo="Quantiles and tolerance limits"}
Let $z_p$ be the standard normal quantile of order $p$. If $X\sim N(\mu,\sigma^2)$, then $q_p=\mu+\sigma z_p$, since standardizing that threshold gives exactly $z_p$. A central $95\%$ interval leaves $2.5\%$ in each tail, so its endpoints use the orders $0.025$ and $0.975$. A single upper threshold leaving $5\%$ to its right instead uses the quantile of order $0.95$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-4;-1.96|exp(-x*x/2)/sqrt(2*PI);0;1.96;4" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-1.96,0.1,−1.96;1.96,0.1,1.96" xmin=-4 xmax=4 ymin=-0.045 ymax=0.46 nomi="z,f_Z" legenda="f_Z(z)" titolo="Each of the shaded tails beyond $z_{0.025}\approx-1.96$ and $z_{0.975}\approx1.96$ has area $0.025$"}

:::

## Gamma, chi-square, Student's t, and F distributions

:::definizione{#famiglie titolo="The gamma distribution and distributions for inference"}
The **gamma distribution** with shape $k>0$ and rate $\lambda>0$ has density
$$
f_X(x)=\frac{\lambda^k}{\Gamma(k)}x^{k-1}e^{-\lambda x}
\qquad\text{for }x>0,
$$
and zero density elsewhere. The gamma function is $\Gamma(k)=\int_0^\infty t^{k-1}e^{-t}\,dt$. The substitution $t=\lambda x$ shows that the density integrates to one. Setting $k=1$ gives the exponential distribution because $\Gamma(1)=1$. In this parameterization, $E[X]=\dfrac{k}{\lambda}$ and $\operatorname{Var}(X)=\dfrac{k}{\lambda^2}$. With shape $3$ and rate $2$, the mean is $\dfrac32$ and the variance is $\dfrac34$.

::grafico{curve="t,4*t*t*exp(-2*t),0,5" segmenti="1.5,0,1.5,0.44808" punti="1,0.54134,pieno" etichette="1.85,0.5,mean 1.5;0.7,0.6,mode 1" xmin=-0.25 xmax=5.2 ymin=-0.06 ymax=0.68 nomi="x,f_X" legenda="f_X(x)=4x^2e^{-2x}" titolo="Gamma density with shape $3$ and rate $2$. Its maximum is at $x=1$ and its mean at $x=\dfrac32$"}

:::

:::osservazione{titolo="Moments of the gamma distribution"}
The integral of $x f_X(x)$ differs from the normalizing integral by one additional power of $x$. After changing variables, $E[X]=\dfrac{\Gamma(k+1)}{\lambda\Gamma(k)}$. Integration by parts gives $\Gamma(k+1)=k\Gamma(k)$, so $E[X]=\dfrac{k}{\lambda}$. Two additional powers give $E[X^2]=\dfrac{k(k+1)}{\lambda^2}$. Subtracting the square of the mean leaves $\dfrac{k}{\lambda^2}$.
:::

:::definizione{#chi-quadrato-student-fisher titolo="Chi-square, Student's t, and F distributions"}
If $Z_1,\ldots,Z_\nu$ are independent standard normal variables, with $\nu$ a positive integer, the sum $\sum_{i=1}^\nu Z_i^2$ has a **chi-square** distribution with $\nu$ degrees of freedom, denoted by $\chi^2_\nu$. It is a gamma distribution with shape $\dfrac\nu2$ and rate $\dfrac12$, so its mean is $\nu$ and its variance $2\nu$. In particular, the sum of the squares of three independent standard normal variables has mean $3$ and variance $6$.

- If $Z\sim N(0,1)$ and $U\sim\chi^2_\nu$ are independent, the variable $\dfrac{Z}{\sqrt{\frac{U}{\nu}}}$ has Student's $t_\nu$ distribution.
- If $U\sim\chi^2_r$ and $V\sim\chi^2_s$ are independent, the variable $\dfrac{\frac{U}{r}}{\frac{V}{s}}$ has the $F_{r,s}$ distribution.

The chi-square and F distributions take nonnegative values. Student's t distribution takes values of both signs and is symmetric because its numerator is symmetric and independent of its positive denominator. The chapters on confidence intervals and tests use their quantiles. In the $F_{r,s}$ distribution, the first index belongs to the numerator variable.

::grafico{f="0.367553*(1+x^2/3)^(-2);exp(-x^2/2)/sqrt(2*PI)" area="0.367553*(1+x^2/3)^(-2);0;-4.5;-1.96|0.367553*(1+x^2/3)^(-2);0;1.96;4.5" segmenti="-1.96,0,-1.96,0.07067;1.96,0,1.96,0.07067" xmin=-4.5 xmax=4.5 ymin=-0.04 ymax=0.46 nomi="t,f" legenda="t_3;N(0,1)" titolo="Densities of $t_3$ and the standard normal distribution. Beyond $\pm1.96$ the normal distribution places $5\%$ of its probability, whereas the shaded tails of $t_3$ have a combined area of about $0.145$"}

:::

## Monotone transformations

::::teorema{#trasformazioni titolo="Density under a monotone transformation"}
Let $X$ have a density concentrated on an interval $I$ and let $Y=g(X)$. Suppose $g$ is strictly monotone and of class $C^1$ in the interior of $I$, with a nonzero derivative throughout that interior. Then, for almost every $y\in g(I)$,
$$
f_Y(y)=f_X\bigl(g^{-1}(y)\bigr)
       \left|\frac{d}{dy}g^{-1}(y)\right|.
$$
The density is zero outside the transformed interval. The derivative factor converts the length of an interval in $y$ to the corresponding length in the original variable.
:::dimostrazione
If $g$ is increasing, the event $\{Y\le y\}$ is the same as $\{X\le g^{-1}(y)\}$. Thus $F_Y(y)=F_X(g^{-1}(y))$. Differentiating gives the density evaluated at the inverse, multiplied by the derivative of the inverse. If $g$ is decreasing, the inequality reverses and $F_Y(y)=1-F_X(g^{-1}(y))$ because individual points have zero probability. Differentiation introduces a minus sign, making the factor from the negative derivative positive. In both cases the absolute value appears.
:::
::::

:::esempio{titolo="A decreasing affine transformation"}
If $X\sim U(1,4)$ and $Y=9-2X$, the transformed endpoints are $7$ and $1$. Thus the density of $Y$ vanishes outside $(1,7)$. The inverse is $x=\dfrac{9-y}{2}$ and its derivative is $-\dfrac12$. Inside the support, $f_Y(y)=\dfrac13\cdot\dfrac12=\dfrac16$. The area is still one because the length of the support has doubled.
:::

:::esempio{titolo="Two branches of a quadratic transformation"}
Let $X\sim U(-2,2)$ and $Y=X^2$. The equation $x^2=y$ has two solutions for $0<y<4$. To obtain the distribution function, observe that $X^2\le y$ is equivalent to $-\sqrt y\le X\le\sqrt y$. The interval has length $2\sqrt y$, so $F_Y(y)=\dfrac{\sqrt y}{2}$ for $0<y<4$. The density is $f_Y(y)=\dfrac1{4\sqrt y}$ on the same interval. Outside it, $F_Y$ equals $0$ on the left and $1$ on the right. Random vectors and transformations involving several components are discussed in the chapter on joint distributions.

::grafico{curve="t,t*t,-2,2" linee="-2,1 2,1" punti="-1,1,pieno;1,1,pieno" segmenti="-1,0,-1,1;1,0,1,1" poligoni="-1,0 1,0 1,-0.21 -1,-0.21" xmin=-2.4 xmax=2.4 ymin=-0.45 ymax=4.55 nomi="x,y" legenda="y=x^2" titolo="Two roots correspond to the threshold $y=1$. The band on the horizontal axis marks the values of $X$ for which $Y\le 1$"}
:::

:::osservazione{titolo="Probabilities and the density of the transformed variable"}
For a single probability concerning $Y=g(X)$, it suffices to rewrite the event in terms of $X$. For example, $P(X^2>1)$ is the sum of $P(X<-1)$ and $P(X>1)$ because the two events are disjoint. The cumulative distribution function at a variable threshold $y$ gives the full distribution. If the transformed variable has a density, differentiating its cumulative distribution function recovers that density almost everywhere. This distinction is useful when the transformation has several branches but the question concerns only one threshold.
:::
