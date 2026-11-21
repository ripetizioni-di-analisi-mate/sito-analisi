---
titolo: "Random variables and continuous distributions"
sommario: "Calculating probabilities, quantiles, and moments from a density and using the main families of continuous distributions."
---

In chapter 5 random variables took isolated values, such as the number of defective items in a batch, and each value had a probability. Many quantities, such as the waiting time at a service counter or the weight of a package, instead take every value in an interval. For them a single exact value has probability zero, and the probability of an interval is computed as an area under the graph of a function called a density. For example, if the lifetime of a light bulb has mean $4$ hours and follows the exponential distribution of this chapter, the probability that it lasts more than $8$ hours is $e^{-2}\approx0.135$.

From the density one obtains, with integrals in place of the sums of chapter 5, the cumulative distribution function, the quantiles (for example the threshold within which $90\%$ of the waiting times end), the expected value and the variance. Then come the continuous distributions used in the rest of the course: uniform, exponential, normal, gamma, chi-square, Student's t and F.

The chapter belongs to the part of the course on probability (chapters 3 to 7), which is used to measure the error made in passing from a sample to the whole population. Chapter 7 extends the density to several variables. In chapter 8 the normal distribution is the approximate distribution of the mean of a large sample, and in chapters 10 and 11 the quantiles of these distributions give the endpoints of confidence intervals and the thresholds of tests.

## Densities and interval probabilities

:::definizione{#densita titolo="Density of a random variable"}
As in chapter 5, a random variable $X$ assigns a number to each outcome of an experiment; here the number is a measurement that can fall at any point of an interval, such as the duration of a test. The **distribution** of $X$ is the rule that gives, for every interval of numbers, the probability that $X$ falls in it.

A bus passes every $10$ minutes and a student arrives at the stop at a random time. The wait $X$, in minutes, lies between $0$ and $10$, and waiting intervals of the same length have the same probability. Hence $P(2<X\le5)=\dfrac{3}{10}$, because the interval from $2$ to $5$ covers $3$ of the $10$ minutes. The same number is the area $3\cdot\dfrac1{10}$ of the rectangle with base from $2$ to $5$ and height $\dfrac1{10}$. Every probability about the wait is therefore an area under the function equal to $\dfrac1{10}$ between $0$ and $10$ and zero elsewhere; the total area is $1$. Where values are more probable, the function is higher.

A **density** is an integrable function $f_X$ such that $f_X(x)\ge 0$ for every $x$, $\displaystyle\int_{-\infty}^{+\infty}f_X(x)\,dx=1$, and
$$
P(a<X\le b)=\int_a^b f_X(x)\,dx
\qquad\text{for every }a<b.
$$
If $X$ has a density, its distribution is called **absolutely continuous**. The density is nonnegative because probabilities are not negative, and its total area is $1$ because this is the probability that $X$ takes some value.

The set of points where the density is positive is called the support of $X$, as in the discrete case of chapter 5; for the bus it is $(0,10)$. If $X$ is measured in seconds, $f_X(x)$ is expressed in $\mathrm{s}^{-1}$, because height times base must give a pure number. Changing a density at finitely many points leaves all areas unchanged, because a point has zero width; for this reason the value at the endpoints of the pieces, such as at $x=0$ and $x=10$, is chosen for convenience.
:::

:::esempio{titolo="Finding the normalizing constant"}
Let $f_X(x)=cx$ for $0<x<2$ and $f_X(x)=0$ elsewhere. The constant $c$ must be chosen so that the total area is $1$; for this reason it is called the normalizing constant. We obtain
$$
1=\int_0^2 cx\,dx
  =\left[\frac{cx^2}{2}\right]_0^2=2c.
$$
It follows that $c=\dfrac12$, and with this value the function is nonnegative throughout the support. To find $P(1<X<2)$, integrate only from $1$ to $2$. The area from $0$ to $1$ is that of the triangle with base $1$ and height $f_X(1)=\dfrac12$, so it equals $\dfrac{1\cdot\frac12}{2}=\dfrac14$. The two areas add to $1$, so the area from $1$ to $2$ is $1-\dfrac14=\dfrac34$.

::grafico{curve="t,t/2,0,2" legenda="f_X(x)=\dfrac{x}{2}" segmenti="2,0,2,1" area="x/2;0;1;2" xmin=-0.4 xmax=2.6 ymin=-0.12 ymax=1.22 nomi="x,y" titolo="The shaded area is the probability that X lies between 1 and 2"}

:::

::::teorema{#probabilita-puntuale titolo="Probability at a single point"}
For the bus, a wait between $3$ and $3+h$ minutes has probability $\dfrac{h}{10}$. A wait of exactly $3$ minutes has probability at most $\dfrac h{10}$ for every $h>0$, so it is zero.

If $X$ has a density, then $P(X=x_0)=0$ for every $x_0\in\mathbb R$. Consequently, the probability of an interval is the same whichever endpoints are included:
$$
P(a<X<b)=P(a\le X<b)=P(a<X\le b)=P(a\le X\le b).
$$
For the discrete variables of chapter 5, by contrast, including the endpoints changes the result.
:::dimostrazione
The event $\{X=x_0\}$ is contained in $\{x_0-h<X\le x_0\}$ for every $h>0$, so $P(X=x_0)$ does not exceed the integral of $f_X$ over $(x_0-h,x_0]$. Since $f_X$ is integrable, the integral over $(x_0-h,x_0]$ tends to zero as $h\to0^+$. The probability of the single point lies between zero and a quantity that tends to zero, so it is zero.
:::
::::

:::attenzione{titolo="A density can be greater than one"}
The value $f_X(x)$ is a height, whereas probabilities are areas. The constant density on $(0,\dfrac14)$ has height $4$, because its area must equal $4\cdot\dfrac14=1$. Thus the normalization condition constrains the integral of the density and leaves its height free.

A positive probability at a single value, on the other hand, cannot come from any density, by the theorem on the probability at a single point. If a waiting time is zero with probability $\dfrac14$, because one customer in four finds the counter free, its distribution has no density.
:::

## Cumulative distribution functions, quantiles, and moments

:::definizione{#ripartizione titolo="Cumulative distribution function"}
As in chapter 5, the **cumulative distribution function** $F_X$ gives, for every threshold $x$, the probability that $X$ does not exceed $x$. For the bus wait, for example, $F_X(4)=P(X\le4)=\dfrac4{10}$, which is the area of the rectangle between $0$ and $4$. For a variable with a density, the cumulative distribution function is the area accumulated to the left of the threshold:
$$
F_X(x)=P(X\le x)=\int_{-\infty}^x f_X(t)\,dt.
$$
The function has three properties.

- $F_X$ is nondecreasing, because as $x$ increases the interval of integration grows and the integrand is nonnegative.
- $F_X$ is continuous, because the area over intervals whose lengths approach zero tends to zero.
- As $x\to-\infty$ the function tends to $0$, because the area accumulated to the left of $x$ shrinks to zero. As $x\to+\infty$ it tends to $1$, because all the area of the density is accumulated.

Once $F_X$ is known, the probability of an interval follows from two of its values, without computing integrals:
$$
P(a<X\le b)=F_X(b)-F_X(a),
$$
because the second term removes the area accumulated up to $a$.
:::

:::esempio{titolo="A cumulative distribution function on three intervals"}
Let $f_X(x)=2x$ for $0<x<1$ and zero elsewhere. If $0<x<1$, the accumulated area is $\displaystyle\int_0^x 2t\,dt=x^2$. To the left of the support no area has accumulated, while to the right all of it has. The cumulative distribution function therefore equals $0$ for $x\le 0$, $x^2$ for $0<x<1$, and $1$ for $x\ge1$. The calculation $F_X(1)-F_X(\dfrac12)=1-\dfrac14=\dfrac34$ gives the probability that $X$ falls between the midpoint of the interval and its right endpoint.
:::

:::osservazione{titolo="From the cumulative distribution function to the density"}
Probabilities and thresholds are read directly from the cumulative distribution function; the expected value and the variance of the next section require the density instead, which is obtained from the distribution function. At a point where $f_X$ is continuous, the fundamental theorem of calculus gives $F_X'(x)=f_X(x)$. For example, the distribution function $x^2$ on $(0,1)$ has derivative $2x$, which is the density we started from. If the distribution function is continuous and differentiable on a finite number of pieces, the density is obtained by differentiating piece by piece. A horizontal portion of the distribution function, such as $F_X(x)=0$ for $x\le0$, has derivative zero and corresponds to an interval of zero probability.

If the distribution function has a jump at a point $x_0$, the size of the jump is the probability of the point, as for discrete variables:
$$
P(X=x_0)=F_X(x_0)-F_X(x_0^-),
$$
where $F_X(x_0^-)$ is the left-hand limit of chapter 5. Since with a density every point has probability zero, a variable whose distribution function has a jump has no density. For the wait that is zero with probability $\dfrac14$, the distribution function jumps from $0$ to $\dfrac14$ at $0$, and differentiating the pieces without jumps gives a function with area $\dfrac34$.
:::

:::definizione{#quantili-continui titolo="Lower-tail quantile"}
To find within how many minutes the bus arrives in $90\%$ of cases, one looks for the threshold $x$ with $F_X(x)=\dfrac{x}{10}=0.90$, that is, $x=9$ minutes.

The probability to the left of a threshold, $P(X\le x)=F_X(x)$, is called the **lower tail**; the probability to the right, $P(X>x)=1-F_X(x)$, is called the upper tail. Let $p\in(0,1)$. The **quantile of order** $p$ is the smallest threshold at which the lower tail reaches at least $p$:
$$
q_p=\inf\{x\in\mathbb R:F_X(x)\ge p\}.
$$
The symbol $\inf$ denotes the infimum of the set. If the distribution function is continuous and strictly increasing around the threshold, the quantile is the unique solution of $F_X(x)=p$, as for the bus.

The **median** is the quantile $q_{\frac12}$, which splits the probability into two halves; for the bus it is $5$ minutes. A threshold with probability $0.10$ to its right has lower tail $1-0.10=0.90$, because the two tails sum to one, so it is the quantile $q_{0.90}$.
:::

:::esempio{titolo="Reading a quantile from the cumulative distribution function"}
For a distribution function equal to $x^2$ between $0$ and $1$, the quantile of order $\dfrac14$ satisfies $q_{\frac14}^2=\dfrac14$. The root $\dfrac12$ belongs to the interval, so it is the required threshold. The negative root lies outside the interval on which the distribution function equals $x^2$.

::grafico{curve="t,0,-0.35,0;t,t*t,0,1;t,1,1,1.4" punti="0.5,0.25,pieno" segmenti="0,0.25,0.5,0.25;0.5,0,0.5,0.25" etichette="0.46,-0.10,0.5;-0.25,0.25,0.25" xmin=-0.35 xmax=1.42 ymin=-0.16 ymax=1.18 nomi="x,F_X" legenda=0 titolo="The cumulative distribution function reaches $p=\dfrac14$ at the threshold $x=\dfrac12$"}

The infimum is needed when the distribution function stays constant at level $p$ over a whole interval. If the density equals $\dfrac12$ on $(0,1)$ and on $(3,4)$ and zero elsewhere, the distribution function equals $\dfrac12$ for every $x$ between $1$ and $3$, so all these thresholds solve $F_X(x)=\dfrac12$. The definition selects the smallest one, hence $q_{\frac12}=1$.
:::

## Expected value and variance

:::definizione{#momenti-continui titolo="Moments of a distribution with a density"}
In chapter 5 the expected value of a discrete variable was the sum of the values weighted by their probabilities, $E[X]=\sum x\,p_X(x)$. With a density, the interval from $x$ to $x+dx$ has probability approximately $f_X(x)\,dx$, so the sum becomes an integral. If $\int_{\mathbb R}|x|f_X(x)\,dx$ is finite, the **expected value** is
$$
E[X]=\int_{\mathbb R}x f_X(x)\,dx.
$$
If $\int_{\mathbb R}x^2f_X(x)\,dx$ is also finite, we define
$$
\begin{aligned}
E[X^2]&=\int_{\mathbb R}x^2 f_X(x)\,dx,\\[6pt]
\operatorname{Var}(X)&=E[X^2]-E[X]^2.
\end{aligned}
$$
The first formula integrates the squared values weighted by the density. The integrals of $x^k f_X(x)$ are called the **moments** of the distribution: $E[X]$ is the first moment and $E[X^2]$ the second moment.

The **variance** is the expected value of the squared deviation from the mean, $\operatorname{Var}(X)=E[(X-E[X])^2]$. The computational formula follows by expanding the square and using the linearity of expectation, $E[aU+bW]=aE[U]+bE[W]$. The standard deviation is the square root of the variance. The expected value gives the center of the distribution, such as the mean wait at a counter, and the standard deviation gives the typical distance of the values from that center. If $X$ is measured in meters, $E[X]$ and the standard deviation have units of $\mathrm m$, whereas the variance has units of $\mathrm{m}^2$.
:::

:::esempio{titolo="Moments for an increasing density"}
For $f_X(x)=2x$ on $(0,1)$,
$$
E[X]=\int_0^1 x\cdot2x\,dx=\left[\frac{2x^3}{3}\right]_0^1=\frac23,
\qquad
E[X^2]=\int_0^1 x^2\cdot2x\,dx=\left[\frac{x^4}{2}\right]_0^1=\frac12.
$$
The variance is therefore $\dfrac12-\dfrac49=\dfrac1{18}$. The mean lies above the midpoint $\dfrac12$ of the interval, because the density is higher on intervals on the right than on their counterparts on the left.
:::

:::osservazione{titolo="Effect of an affine transformation"}
If $Y=aX+b$ and $E[X^2]$ is finite, linearity of expectation gives $E[Y]=aE[X]+b$. Subtracting the means gives $Y-E[Y]=a(X-E[X])$, so $\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$. For the standard deviation the factor is $|a|$, the square root of $a^2$.

Converting seconds to minutes divides the values and the standard deviation by $60$ and the variance by $60^2=3600$; a standard deviation of $30\,\mathrm s$ becomes $0.5\,\mathrm{min}$, and the variance goes from $900\,\mathrm{s}^2$ to $0.25\,\mathrm{min}^2$.
:::

## The uniform distribution

:::definizione{#uniforme titolo="Uniform distribution on an interval"}
The bus wait has constant density on $(0,10)$, and a distribution of this kind is called uniform. For $a<b$, the notation $X\sim U(a,b)$, read "$X$ has a **uniform** distribution on $(a,b)$", means that $X$ has constant density $\dfrac1{b-a}$ on $(a,b)$ and zero density elsewhere. The height is the reciprocal of the interval length $b-a$, so the density rectangle has area one.

To find a probability, take the length of the part of the requested interval that lies inside $(a,b)$ and divide it by $b-a$, as for the bus, whose wait has distribution $U(0,10)$.
:::

:::esempio{titolo="An interval extending beyond the support"}
A delivery arrives between $8$ and $12$ on a 24-hour clock, uniformly over that interval, that is, with distribution $U(8,12)$. An arrival after $10$ and before $13$ has the same probability as an arrival between $10$ and $12$, because the density is zero after $12$. The part of the interval within the support lasts two hours, so the probability is $\dfrac24=\dfrac12$. Indeed, the uniform distribution gives equal probabilities to intervals of equal length within the support.

::grafico{linee="0,0 8,0;8,0.25 12,0.25;12,0 14.4,0" area="0.25;0;10;12" segmenti="8,0,8,0.25;12,0,12,0.25;13,0,13,0.12;0,0.25,8,0.25" etichette="13,0.15,13;0.9,0.27,0.25" xmin=-0.6 xmax=14.6 ymin=-0.04 ymax=0.34 nomi="x,f_X" legenda=0 titolo="The density of $U(8,12)$ has height $\dfrac14$. Of the interval from $10$ to $13$, only the portion up to $12$ contributes, giving area $2\cdot\dfrac14=\dfrac12$"}

:::

::::teorema{#parametri-uniforme titolo="Quantiles and moments of the uniform distribution"}
If $X\sim U(a,b)$ with $a<b$, then
$$
q_p=a+p(b-a),\qquad E[X]=\frac{a+b}{2},
\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$
The quantile is found by moving a fraction $p$ of the interval's length from $a$. The variance depends only on the length $b-a$ of the interval. For the delivery with distribution $U(8,12)$ we get $q_{0.25}=8+0.25\cdot4=9$, $E[X]=10$, and $\operatorname{Var}(X)=\dfrac{16}{12}=\dfrac43$.
:::dimostrazione
For $a<x<b$, the cumulative distribution function is the area of the rectangle between $a$ and $x$, that is, $\dfrac{x-a}{b-a}$. Solving $\dfrac{q_p-a}{b-a}=p$ gives the quantile formula. For the mean, integrate $x$ over $(a,b)$ and divide by $b-a$. This gives $\dfrac{b^2-a^2}{2(b-a)}=\dfrac{a+b}{2}$. For the variance, set $V=\dfrac{X-a}{b-a}$, which has distribution $U(0,1)$. Since $E[V]=\dfrac12$ and $E[V^2]=\displaystyle\int_0^1 v^2\,dv=\dfrac13$, we have $\operatorname{Var}(V)=\dfrac13-\dfrac14=\dfrac1{12}$. Since $X=a+(b-a)V$, the effect of an affine transformation gives variance $(b-a)^2\operatorname{Var}(V)=\dfrac{(b-a)^2}{12}$ for $X$.
:::
::::

## The exponential distribution

:::definizione{#esponenziale titolo="Exponential waiting times"}
Customers arrive at a counter according to a homogeneous Poisson process with intensity $2$ arrivals per minute (chapter 5), so the number of arrivals in $t$ minutes has a Poisson distribution with parameter $2t$. The time $X$ until the first arrival exceeds $t$ minutes exactly when nobody arrives in the first $t$ minutes. The Poisson mass at zero is $e^{-2t}\dfrac{(2t)^0}{0!}=e^{-2t}$, hence
$$
P(X>t)=P(\text{no arrivals in }t\text{ minutes})=e^{-2t},\qquad t\ge0.
$$
The cumulative distribution function is therefore $F_X(t)=1-e^{-2t}$ for $t\ge0$ and, differentiating, the density of $X$ is $2e^{-2t}$ for $t>0$.

A variable $X$ has an **exponential distribution** with rate $\lambda>0$ if its density is $\lambda e^{-\lambda x}$ for $x>0$ and zero elsewhere. The rate $\lambda$ (read lambda) is the average number of events per unit time, like the intensity of the Poisson process, and its units are the reciprocal of the time units; at the counter $\lambda=2\,\mathrm{min}^{-1}$. For $t\ge0$, integrating the density from $t$ to infinity gives
$$
P(X>t)=\int_t^{+\infty}\lambda e^{-\lambda x}\,dx=\Bigl[-e^{-\lambda x}\Bigr]_t^{+\infty}=e^{-\lambda t},
\qquad F_X(t)=1-e^{-\lambda t}.
$$
The function $t\mapsto P(X>t)$ is called the **survival function**; the name comes from lifetimes, for which $P(X>t)$ is the probability that a component still works at time $t$. For $0\le a<b$, the probability between $a$ and $b$ is $e^{-\lambda a}-e^{-\lambda b}$, because the tail beyond $b$ is subtracted from the tail beyond $a$.
:::

:::osservazione{titolo="Scale, variance, and quantiles"}
Integrating $x\lambda e^{-\lambda x}$ and $x^2\lambda e^{-\lambda x}$ by parts over $(0,+\infty)$ gives $E[X]=\dfrac1\lambda$ and $E[X^2]=\dfrac{2}{\lambda^2}$. Hence $\operatorname{Var}(X)=\dfrac{2}{\lambda^2}-\dfrac{1}{\lambda^2}=\dfrac1{\lambda^2}$. The reciprocal $\dfrac1\lambda$ of the rate is called the **scale** parameter and equals the mean waiting time, for example $\dfrac12$ minute at the counter. From the equation $1-e^{-\lambda q_p}=p$ we get $e^{-\lambda q_p}=1-p$ and, taking logarithms,
$$
q_p=-\frac{\log(1-p)}{\lambda}.
$$
Here $\log$ denotes the natural logarithm. If the rate is $\dfrac14\,\mathrm{min}^{-1}$, the mean is $4\,\mathrm{min}$ and the median is $-4\log\dfrac12=4\log 2\approx2.77\,\mathrm{min}$. The median is smaller than the mean because $\log 2<1$.

::grafico{curve="t,exp(-t/4)/4,0,16" area="exp(-x/4)/4;0;0;2.7726" segmenti="2.7726,0,2.7726,0.125;4,0,4,0.09197" etichette="3.9,0.14,median;5.1,0.105,mean" xmin=-0.6 xmax=16.5 ymin=-0.025 ymax=0.3 nomi="x,f_X" legenda="f_X(x)=\dfrac14e^{-x/4}" titolo="Exponential density with rate $\dfrac14$. The shaded area is $\dfrac12$ and ends at the median $4\log 2\approx2.77$, to the left of the mean $4$"}

:::

::::teorema{#assenza-di-memoria titolo="Memorylessness"}
A light bulb has an exponential lifetime with mean $4\,\mathrm{h}$, so its rate is $\dfrac14\,\mathrm{h}^{-1}$, and it lasts more than $4$ hours with probability $e^{-\frac14\cdot4}=e^{-1}$. If it has already been on for $10$ hours, the probability that it lasts another $4$ hours is
$$
P(X>14\mid X>10)=\frac{e^{-\frac{14}{4}}}{e^{-\frac{10}{4}}}=e^{-1},
$$
the same as for a new bulb. The hours already elapsed do not change the probability of the following ones; hence the name memorylessness.

If $X$ has an exponential distribution with rate $\lambda>0$, then for every $s,t\ge0$,
$$
P(X>s+t\mid X>s)=P(X>t).
$$
:::dimostrazione
The conditional probability of chapter 4 is $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$. Since $\{X>s+t\}\subseteq\{X>s\}$, the intersection of the two events is $\{X>s+t\}$. Moreover $P(X>s)=e^{-\lambda s}>0$, so the ratio defining the conditional probability is
$$
\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}.
$$
The result depends only on $t$ and not on $s$, so the remaining waiting time, conditional on survival to $s$, has the same distribution as the original waiting time.
:::
::::

:::attenzione{titolo="Memorylessness is a property of the model"}
If $X\sim U(0,10)$, then $P(X>6\mid X>5)=\dfrac45$ because the conditioning leaves an interval of length five, four units of which lie above $6$. Yet $P(X>1)=\dfrac9{10}$. The exponential memoryless property therefore does not hold for every continuous lifetime.
:::

:::esempio{titolo="Converting time units"}
A response time $T$ has an exponential distribution with mean $30\,\mathrm{s}$. In seconds, the rate is $\dfrac1{30}\,\mathrm{s}^{-1}$. For a threshold of $90\,\mathrm{s}$, the rate times the duration is $\dfrac{90}{30}=3$, so $P(T>90\,\mathrm{s})=e^{-3}$. In minutes, the mean waiting time is $\dfrac12\,\mathrm{min}$ and the rate is $2\,\mathrm{min}^{-1}$, while the threshold is $\dfrac32\,\mathrm{min}$. The product is again $2\cdot\dfrac32=3$. The probability stays the same because the threshold and the rate are expressed in the same time unit.
:::

## The normal distribution and standardization

:::definizione{#normale titolo="Normal distribution"}
The weights of packages filled by a machine cluster around a central value and become rarer moving away from it, in the same way to the right and to the left. Quantities of this kind are described by the normal distribution, whose density is bell-shaped.

We write $X\sim N(\mu,\sigma^2)$ when $X$ has a **normal distribution** with mean $\mu$ (read mu) and variance $\sigma^2$, where $\sigma>0$ (read sigma) is the standard deviation. Its density is
$$
f_X(x)=\frac{1}{\sigma\sqrt{2\pi}}
          \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),
$$
where $\exp(u)$ denotes $e^u$. The exponent depends on the squared distance from $\mu$, so points equally distant from the center have equal densities: $f_X(\mu+d)=f_X(\mu-d)$ for every $d$. A distribution with this property is called **symmetric** about $\mu$, and for every $d>0$ we have $P(X<\mu-d)=P(X>\mu+d)$. In particular, each of the two half-lines separated by $\mu$ has probability $\dfrac12$.

The height at the center is $\dfrac{1}{\sigma\sqrt{2\pi}}$, so increasing $\sigma$ increases the spread and lowers the height at the center, while the total area stays one. The normal distribution with $\mu=0$ and $\sigma=1$, denoted by $N(0,1)$, is called the **standard normal** distribution.
:::

::::teorema{#standardizzazione-normale titolo="Standardizing a normal variable"}
The normal density has no elementary antiderivative, so its probabilities are read from a table. Standardization reduces every normal distribution to the standard normal, so a single table is enough.

If $X\sim N(\mu,\sigma^2)$ with $\sigma>0$, then $Z=\dfrac{X-\mu}{\sigma}$ has distribution $N(0,1)$. Writing $\Phi$ (read phi) for the cumulative distribution function of the standard normal gives, for $a<b$,
$$
P(a<X<b)=
\Phi\!\left(\frac{b-\mu}{\sigma}\right)
-\Phi\!\left(\frac{a-\mu}{\sigma}\right).
$$
A standard normal table lists $\Phi(z)$, the area to the left of $z$, for positive values of $z$; for example $\Phi(1.00)\approx0.8413$. The probability to the right of $z$ is $1-\Phi(z)$.

Conversely, if $Z$ is standard normal, then $\mu+\sigma Z$ has distribution $N(\mu,\sigma^2)$. Now let $Y=aX+b$ with $a\ne0$. Since $X=\mu+\sigma Z$, we have $Y=(a\mu+b)+a\sigma Z$.

- If $a>0$, the previous rule with standard deviation $a\sigma$ gives $Y\sim N(a\mu+b,a^2\sigma^2)$.
- If $a<0$, write $Y=(a\mu+b)+|a|\sigma\,(-Z)$. Two variables have the same distribution when they assign the same probability to every interval. The variable $-Z$ has the same distribution as $Z$, because $P(c<-Z<d)=P(-d<Z<-c)=P(c<Z<d)$, where the last equality holds because the standard density is symmetric about $0$. Hence $-Z$ is again standard normal and once more $Y\sim N(a\mu+b,a^2\sigma^2)$.
:::dimostrazione
Subtracting $\mu$ and dividing by $\sigma>0$ preserve the direction of the inequalities, so $P(Z\le z)=P(X\le\mu+\sigma z)$. In the integral for $P(X\le x)$, substitute $u=\dfrac{t-\mu}{\sigma}$. The differential $dt=\sigma\,du$ cancels the density factor $\dfrac1\sigma$. What remains is the standard normal density integrated up to $\dfrac{x-\mu}{\sigma}$, that is, $P(X\le x)=\Phi\!\left(\dfrac{x-\mu}{\sigma}\right)$. With $x=\mu+\sigma z$ this gives $P(Z\le z)=\Phi(z)$ for every $z$, so $Z$ has the standard normal distribution function and $Z\sim N(0,1)$. Taking the difference of two values of the distribution function gives the interval formula.

For the converse, let $Z\sim N(0,1)$ and $X=\mu+\sigma Z$. Since $\sigma>0$, $P(X\le x)=P\!\left(Z\le\dfrac{x-\mu}{\sigma}\right)=\Phi\!\left(\dfrac{x-\mu}{\sigma}\right)$. Differentiating with the chain rule, the density of $X$ is $\dfrac1\sigma$ times the standard density evaluated at $\dfrac{x-\mu}{\sigma}$, which is the density of $N(\mu,\sigma^2)$.
:::
::::

:::esempio{titolo="Two symmetric tails"}
For $X\sim N(40,25)$, the standard deviation is $\sqrt{25}=5$. The thresholds $35$ and $45$ correspond to the standardized values $\dfrac{35-40}{5}=-1$ and $\dfrac{45-40}{5}=1$. The standard density is symmetric about $0$, so the area to the left of $-1$ equals the area to the right of $1$, that is, $\Phi(-1)=1-\Phi(1)$. Thus, using $\Phi(1)\approx0.84134$, the probability of the interval is
$$
P(35<X<45)=\Phi(1)-\Phi(-1)=2\Phi(1)-1\approx0.6827.
$$
The outside probability is the sum of the two tails, approximately $1-0.6827=0.3173$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1;1" segmenti="-1,0,-1,0.24197;1,0,1,0.24197" xmin=-3.8 xmax=3.8 ymin=-0.045 ymax=0.46 nomi="z,y" legenda="f_Z(z)" titolo="Area between the standardized values −1 and 1"}

:::

:::osservazione{titolo="Quantiles of the normal distribution"}
Let $z_p$ be the standard normal quantile of order $p$; for example $z_{0.95}\approx1.645$ and $z_{0.975}\approx1.96$. By symmetry about $0$, $z_{1-p}=-z_p$, so $z_{0.025}\approx-1.96$. If $X\sim N(\mu,\sigma^2)$, then $q_p=\mu+\sigma z_p$, since standardizing that threshold gives exactly $z_p$.

A central $95\%$ interval is the interval centered at $\mu$ that contains probability $0.95$. It leaves $2.5\%$ in each tail, so its endpoints are the quantiles of order $0.025$ and $0.975$; for $N(40,25)$ it runs from $40-5\cdot1.96=30.2$ to $40+5\cdot1.96=49.8$. A single upper threshold leaving $5\%$ to its right instead uses the quantile of order $0.95$, which for $N(40,25)$ equals $40+5\cdot1.645\approx48.2$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-4;-1.96|exp(-x*x/2)/sqrt(2*PI);0;1.96;4" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-1.96,0.1,−1.96;1.96,0.1,1.96" xmin=-4 xmax=4 ymin=-0.045 ymax=0.46 nomi="z,f_Z" legenda="f_Z(z)" titolo="Each of the shaded tails beyond $z_{0.025}\approx-1.96$ and $z_{0.975}\approx1.96$ has area $0.025$"}

:::

## Gamma, chi-square, Student's t, and F distributions

:::definizione{#famiglie titolo="The gamma distribution and distributions for inference"}
At the counter with $2$ arrivals per minute, the time until the first arrival is exponential with rate $2$, while the time until the third arrival has a gamma distribution with shape $3$ and rate $2$. In chapter 8 the gamma distribution with shape $k$ and rate $\lambda$ appears again as the distribution of the sum of $k$ exponential waiting times with rate $\lambda$.

The **gamma distribution** with shape $k>0$ and rate $\lambda>0$ has density
$$
f_X(x)=\frac{\lambda^k}{\Gamma(k)}x^{k-1}e^{-\lambda x}
\qquad\text{for }x>0,
$$
and zero density elsewhere. When $k$ is an integer, the gamma distribution is the distribution of the time until the $k$-th arrival; with $k=1$ the density decreases from $x=0$ onward, while with $k>1$ it rises from zero to a maximum and then decreases.

The symbol $\Gamma$ is read capital gamma and denotes the gamma function, $\Gamma(k)=\int_0^\infty t^{k-1}e^{-t}\,dt$. For integer $k$, $\Gamma(k)=(k-1)!$, for example $\Gamma(3)=2$. The substitution $t=\lambda x$ turns the integral of the density into $\dfrac{1}{\Gamma(k)}\displaystyle\int_0^{\infty}t^{k-1}e^{-t}\,dt=1$. Setting $k=1$ gives the exponential distribution, because $\Gamma(1)=1$ and $x^0=1$. With shape $k$ and rate $\lambda$, $E[X]=\dfrac{k}{\lambda}$ and $\operatorname{Var}(X)=\dfrac{k}{\lambda^2}$. With shape $3$ and rate $2$, the density is $\dfrac{2^3}{2}x^2e^{-2x}=4x^2e^{-2x}$, the mean is $\dfrac32$, and the variance is $\dfrac34$. The derivative $4(2x-2x^2)e^{-2x}$ vanishes at $x=1$, where the density is largest; this point is called the mode of the distribution, like the mode of data in chapter 2.

::grafico{curve="t,4*t*t*exp(-2*t),0,5" segmenti="1.5,0,1.5,0.44808" punti="1,0.54134,pieno" etichette="1.85,0.5,mean 1.5;0.7,0.6,mode 1" xmin=-0.25 xmax=5.2 ymin=-0.06 ymax=0.68 nomi="x,f_X" legenda="f_X(x)=4x^2e^{-2x}" titolo="Gamma density with shape $3$ and rate $2$. Its maximum is at $x=1$ and its mean at $x=\dfrac32$"}

:::

:::osservazione{titolo="Moments of the gamma distribution"}
The integral of $x f_X(x)$ differs from the normalizing integral by one additional power of $x$. After the substitution $t=\lambda x$, $E[X]=\dfrac{\Gamma(k+1)}{\lambda\Gamma(k)}$. Integrating $t^ke^{-t}$ by parts gives $\Gamma(k+1)=k\Gamma(k)$, so $E[X]=\dfrac{k}{\lambda}$. Two additional powers give $E[X^2]=\dfrac{\Gamma(k+2)}{\lambda^2\Gamma(k)}=\dfrac{k(k+1)}{\lambda^2}$. Subtracting the square of the mean leaves $\operatorname{Var}(X)=\dfrac{k(k+1)-k^2}{\lambda^2}=\dfrac{k}{\lambda^2}$. With $k=1$ we recover the exponential mean $\dfrac1\lambda$ and variance $\dfrac1{\lambda^2}$.
:::

:::definizione{#chi-quadrato-student-fisher titolo="Chi-square, Student's t, and F distributions"}
The following three distributions are built from standard normal variables; Student's t, for example, gives in chapter 10 the confidence interval for a mean when the variance is unknown.

Two random variables $X$ and $Y$ are called **independent** when every event involving only $X$ is independent, in the sense of chapter 4, of every event involving only $Y$; for example $P(X\le1,\,Y\le2)=P(X\le1)\,P(Y\le2)$. The definition for several variables is in chapter 7.

If $Z_1,\ldots,Z_\nu$ are independent standard normal variables, with $\nu$ (read nu) a positive integer, the sum $\sum_{i=1}^\nu Z_i^2$ has a **chi-square** distribution with $\nu$ degrees of freedom, denoted by $\chi^2_\nu$ (the letter $\chi$ is read chi). The number $\nu$ of summed squares is called the number of **degrees of freedom**. In chapter 8 the sample variance of $n$ normal observations, multiplied by $\dfrac{n-1}{\sigma^2}$, has a chi-square distribution with $n-1$ degrees of freedom. The $\chi^2_\nu$ distribution is a gamma distribution with shape $\dfrac\nu2$ and rate $\dfrac12$, so the formulas $\dfrac{k}{\lambda}$ and $\dfrac{k}{\lambda^2}$ give mean $\nu$ and variance $2\nu$. In particular, the sum of the squares of three independent standard normal variables has mean $3$ and variance $6$.

- If $Z\sim N(0,1)$ and $U\sim\chi^2_\nu$ are independent, the variable $T=\dfrac{Z}{\sqrt{\frac{U}{\nu}}}$ has Student's $t_\nu$ distribution with $\nu$ degrees of freedom.
- If $U\sim\chi^2_r$ and $V\sim\chi^2_s$ are independent, the variable $\dfrac{\frac{U}{r}}{\frac{V}{s}}$ has the $F_{r,s}$ distribution.

The chi-square and F distributions take nonnegative values. Student's t distribution takes values of both signs and is symmetric about $0$. Indeed $-T=\dfrac{-Z}{\sqrt{\frac{U}{\nu}}}$, and $-Z$ has the same distribution as $Z$ and is independent of $U$, so $-T$ has the same distribution as $T$. With few degrees of freedom, Student's t distribution gives more probability than the standard normal to values far from $0$, as the figure shows for $t_3$. The chapters on confidence intervals and tests use the quantiles of these distributions, read from tables as for the normal. In the $F_{r,s}$ distribution, the first index belongs to the numerator variable.

::grafico{f="0.367553*(1+x^2/3)^(-2);exp(-x^2/2)/sqrt(2*PI)" area="0.367553*(1+x^2/3)^(-2);0;-4.5;-1.96|0.367553*(1+x^2/3)^(-2);0;1.96;4.5" segmenti="-1.96,0,-1.96,0.07067;1.96,0,1.96,0.07067" xmin=-4.5 xmax=4.5 ymin=-0.04 ymax=0.46 nomi="t,f" legenda="t_3;N(0,1)" titolo="Densities of $t_3$ and the standard normal distribution. Beyond $\pm1.96$ the normal distribution places $5\%$ of its probability, whereas the shaded tails of $t_3$ have a combined area of about $0.145$"}

:::

## Monotone transformations

::::teorema{#trasformazioni titolo="Density under a monotone transformation"}
Let $X\sim U(0,1)$ be the side of a square and let $Y=X^2$ be its area. For $0<y<1$, $Y\le y$ exactly when $X\le\sqrt y$, so $F_Y(y)=\sqrt y$ and, differentiating, $f_Y(y)=\dfrac{1}{2\sqrt y}$. The same procedure, carried out for any monotone transformation, gives the general formula.

Let $X$ have a density that is zero outside an interval $I$ and let $Y=g(X)$. Suppose $g$ is strictly monotone and of class $C^1$, that is, differentiable with continuous derivative, in the interior of $I$, with a nonzero derivative throughout that interior. Write $g^{-1}$ for the inverse function and $g(I)$ for the set of values of $g$ on $I$. Then, for every $y$ in the interior of $g(I)$, except at most finitely many points,
$$
f_Y(y)=f_X\bigl(g^{-1}(y)\bigr)
       \left|\frac{d}{dy}g^{-1}(y)\right|.
$$
The density is zero outside the transformed interval. The derivative factor converts the length of an interval in $y$ to the corresponding length in the original variable.
:::dimostrazione
If $g$ is increasing, the event $\{Y\le y\}$ is the same as $\{X\le g^{-1}(y)\}$. Thus $F_Y(y)=F_X(g^{-1}(y))$. Differentiating with the chain rule gives the density evaluated at the inverse, multiplied by the derivative of the inverse, which is positive. If $g$ is decreasing, the inequality reverses and the event $\{Y\le y\}$ is the same as $\{X\ge g^{-1}(y)\}$. Since individual points have zero probability, $F_Y(y)=1-F_X(g^{-1}(y))$. Differentiation introduces a minus sign, which makes the product positive because the derivative of the inverse is negative. In both cases the result is written with the absolute value of the derivative.
:::
::::

:::esempio{titolo="A decreasing affine transformation"}
If $X\sim U(1,4)$ and $Y=9-2X$, the transformed endpoints are $7$ and $1$. Thus the density of $Y$ vanishes outside $(1,7)$. The inverse is $x=\dfrac{9-y}{2}$ and its derivative is $-\dfrac12$. The density of $X$ equals $\dfrac13$ on $(1,4)$, so inside the support $f_Y(y)=\dfrac13\cdot\left|-\dfrac12\right|=\dfrac16$. The area is still $6\cdot\dfrac16=1$, because the length of the support has doubled from $3$ to $6$ and the height has halved.
:::

:::esempio{titolo="Two branches of a quadratic transformation"}
Let $X\sim U(-2,2)$ and $Y=X^2$. The function $x^2$ decreases on $(-2,0)$ and increases on $(0,2)$, so it is not monotone and the theorem on monotone transformations does not apply. We compute the distribution function instead. For $0<y<4$, $X^2\le y$ is equivalent to $-\sqrt y\le X\le\sqrt y$. The interval has length $2\sqrt y$ and the density of $X$ equals $\dfrac14$, so $F_Y(y)=\dfrac{2\sqrt y}{4}=\dfrac{\sqrt y}{2}$ for $0<y<4$. Differentiating, the density is $f_Y(y)=\dfrac1{4\sqrt y}$ on the same interval. Outside it, $F_Y$ equals $0$ on the left and $1$ on the right. Random vectors and transformations involving several components are discussed in chapter 7 on joint distributions.

::grafico{curve="t,t*t,-2,2" linee="-2,1 2,1" punti="-1,1,pieno;1,1,pieno" segmenti="-1,0,-1,1;1,0,1,1" poligoni="-1,0 1,0 1,-0.21 -1,-0.21" xmin=-2.4 xmax=2.4 ymin=-0.45 ymax=4.55 nomi="x,y" legenda="y=x^2" titolo="Two roots correspond to the threshold $y=1$. The band on the horizontal axis marks the values of $X$ for which $Y\le 1$"}
:::

:::osservazione{titolo="Probabilities and the density of the transformed variable"}
For a single probability concerning $Y=g(X)$, it suffices to rewrite the event in terms of $X$. For $X\sim U(-2,2)$, for example, $X^2>1$ is equivalent to $X<-1$ or $X>1$; the two events are disjoint, so
$$
P(X^2>1)=P(X<-1)+P(X>1)=\frac14+\frac14=\frac12.
$$
The full distribution of $Y$ is found instead by computing the cumulative distribution function at a variable threshold $y$ and differentiating on the pieces where it varies. When the transformation has several branches and the question concerns a single threshold, the first method avoids computing the whole distribution function.
:::
