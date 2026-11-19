---
titolo: "Sampling, the law of large numbers, and the central limit theorem"
sommario: "How a statistic varies across samples, how to calculate exact probabilities, and how to obtain normal approximations and upper bounds."
---

## From sample to statistic

:::definizione{#campione titolo="Random samples and statistics"}
Let $X_1,\ldots,X_n$ be random variables with the same distribution, where $X_i$ represents the value of observation $i$. If the variables are also independent, they form an **i.i.d. sample** of size $n$. Their common distribution describes the population in the probability model.

A **statistic** is a function of the data and known constants. The mean, the maximum, and the number of observations exceeding a known threshold are all statistics. Before the data are collected, they are random variables because they can take different values under repeated sampling. Once the data have been collected, the numbers $x_1,\ldots,x_n$ form a realization of the sample and determine the observed value of the statistic.
:::

:::esempio{titolo="Distribution of the mean of two trials"}
Two independent measurements each take the values $0$ and $1$ with equal probability. The four ordered outcomes are equally likely. The mean equals $0$ for outcome $(0,0)$, equals $\dfrac12$ for outcomes $(0,1)$ and $(1,0)$, and equals $1$ for outcome $(1,1)$. Its distribution therefore assigns probabilities $\dfrac14$, $\dfrac12$, and $\dfrac14$ to the three values. If the observed sample is $(1,0)$, the observed mean is $\bar x=\dfrac12$.

::grafico{xmin=-0.27 xmax=1.35 ymin=-0.05 ymax=0.66 nomi="m,p" linee="0,0 0,0.25;0.5,0 0.5,0.5;1,0 1,0.25" punti="0,0.25;0.5,0.5;1,0.25" etichette="0.08,0.31,¼;0.5,0.56,½;1,0.31,¼;0.5,-0.035,½" titolo="The probability mass at one-half is twice as large because two ordered outcomes give this mean."}
:::

:::attenzione
Observations can have the same marginal distribution and still be dependent. Let $Y$ be an indicator that equals $1$ with probability $\dfrac12$, and set $X_1=X_2=Y$. Each observation has the same distribution as in the example, but the pair can take only the values $(0,0)$ and $(1,1)$. The mean then equals $Y$ and has variance $\dfrac14$, whereas the mean of two independent trials has variance $\dfrac18$. Measurements collected from the same unit in cluster sampling may exhibit this kind of dependence.
:::

## Sample mean and standard error

::::teorema{#media-campionaria titolo="Distribution of the mean"}
Let $X_1,\ldots,X_n$ be an i.i.d. sample from a distribution with mean $\mu$ and finite variance $\sigma^2$. The **sample mean** is $\bar X_n=\dfrac{1}{n}\sum_{i=1}^nX_i$. The **standard error** of a statistic $T$ with finite variance is the standard deviation of its sampling distribution, denoted by $SE(T)$. For the mean,
$$
E[\bar X_n]=\mu,\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},\qquad
SE(\bar X_n)=\frac{\sigma}{\sqrt n}.
$$
The value $\sigma$ measures the spread of individual observations. The quantity $SE(\bar X_n)$ measures the variation among means of samples of the same size and is expressed in the same units as the data.

:::dimostrazione
Linearity of expectation gives the center of the distribution, and independence gives its spread. Each $X_i$ has expectation $\mu$, so $E[\bar X_n]=\dfrac{n\mu}{n}=\mu$. The covariances between distinct observations are zero. The variance of the sum is therefore $n\sigma^2$. Multiplying the sum by $\dfrac1n$ to form the mean gives variance $\dfrac{n\sigma^2}{n^2}=\dfrac{\sigma^2}{n}$. Its square root is the standard error.
:::
::::

:::esempio{titolo="Precision when sampling again"}
Individual measurements have standard deviation $12\,\mathrm{mm}$. For a sample of $36$ independent measurements, the mean has standard error $\dfrac{12}{6}\,\mathrm{mm}=2\,\mathrm{mm}$. Achieving $1\,\mathrm{mm}$ requires at least $144$ measurements, because $\dfrac{12}{\sqrt n}\le1$ is equivalent to $n\ge144$. Halving the standard error therefore requires four times as many observations if the population spread stays the same.

::grafico{curve="t,12/sqrt(t),4,156" xmin=0 xmax=160 ymin=-0.3 ymax=6.6 nomi="n,SE" legenda="SE=\dfrac{12}{\sqrt n}" punti="36,2;144,1" segmenti="36,0,36,2;144,0,144,1" etichette="44,2.5,n = 36;144,1.5,n = 144" titolo="The standard error $\dfrac{12}{\sqrt n}$ in millimeters is $2$ at $n=36$ and $1$ at $n=144$."}
:::

:::osservazione{titolo="Estimating the standard error"}
When $\sigma$ is unknown, for $n\ge2$ use the sample standard deviation $S$ calculated from $S^2=\dfrac{1}{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2$. The estimator of the standard error is $\dfrac{S}{\sqrt n}$. If a sample of $25$ measurements gives $s=10\,\mathrm{mm}$, the estimate is $2\,\mathrm{mm}$. A new sample of the same size can give a different $s$. The estimate changes with the data, whereas the theoretical standard error is determined by $n$ and the population.
:::

:::osservazione{titolo="Precision with a common error component"}
An instrument can introduce the same random calibration error $B$ into every measurement in a session. Suppose observation $i$ has the form $X_i=\mu+B+E_i$, where the errors $E_i$ are independent of each other and of $B$. If $\operatorname{Var}(B)=\tau^2$ and each $E_i$ has variance $\sigma_E^2$, then
$$
\operatorname{Var}(\bar X_n)=\tau^2+\frac{\sigma_E^2}{n}.
$$
Indeed, the mean is $\mu+B+\bar E_n$. The variance of $\bar E_n$ equals that of an individual error divided by $n$. When sessions are repeated independently, the calibration component changes across sessions and contributes to the variation among their means. The same component $B$ appears with coefficient one in each mean, so its variance is retained. For example, with $\tau=1$, $\sigma_E=4$, and $n=16$, the variance of the mean is $1+\dfrac{16}{16}=2$. Treating all measurements as independent would give $\dfrac{17}{16}$, because each measurement has variance $17$. The comparison shows how positive covariance affects precision.

::grafico{curve="t,1+16/t,1,48;t,17/t,1,48" xmin=-0.45 xmax=49 ymin=-0.22 ymax=6.8 nomi="n,V" legenda="1+\dfrac{16}{n};\dfrac{17}{n}" segmenti="16,0,16,2" punti="16,2;16,1.0625" asintoti="y=1" titolo="With a common error, the variance of the mean tends to 1. For 16 measurements it equals 2, whereas independent measurements with individual variance 17 would give a variance of seventeen sixteenths."}
:::

## Exact sampling distributions for a normal population

::::teorema{#normale-campione titolo="Mean and variance in a normal sample"}
If $X_1,\ldots,X_n$ are independent and each has distribution $N(\mu,\sigma^2)$ with $\sigma>0$, then
$$
\bar X_n\sim N\!\left(\mu,\frac{\sigma^2}{n}\right).
$$
Let $\Phi$ denote the standard normal cumulative distribution function. Then
$$
P(\bar X_n\le a)=\Phi\!\left(\frac{a-\mu}{\dfrac{\sigma}{\sqrt n}}\right).
$$
The denominator is the standard error of the mean. This formula gives the exact probability even for small samples.

:::dimostrazione
A linear combination of independent normal variables is normally distributed. The sample mean is a linear combination in which every coefficient equals $\dfrac1n$. The formulas for expectation and variance therefore give the two parameters of its distribution. Subtracting $\mu$ and dividing by $\dfrac{\sigma}{\sqrt n}$ gives a standard normal variable.
:::
::::

:::osservazione{titolo="Lower-tail quantiles"}
Write $z_q$ for the standard normal quantile of order $q\in(0,1)$, defined by $\Phi(z_q)=q$. The quantile of order $q$ of the normally distributed sample mean is $\mu+z_q\dfrac{\sigma}{\sqrt n}$. For example, if $\mu=80$, $\sigma=12$, and $n=36$, the quantile of order $0.95$ is approximately $83.29$ because $80+1.645\cdot2=83.29$. In repeated sampling, $5\,\%$ of sample means exceed this threshold.
:::

:::teorema{#student-campione titolo="The t statistic and the sample variance"}
Under the normal-sample assumptions, for $n\ge2$ the mean $\bar X_n$ and the sample variance $S^2$ are independent, and
$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1},
\qquad
\frac{\bar X_n-\mu}{\dfrac{S}{\sqrt n}}\sim t_{n-1}.
$$
To obtain the first distribution, decompose the vector of standardized normal observations into its component along $(1,\ldots,1)$ and its component in the orthogonal subspace. The first coordinate determines the mean. The sum of the squares of the other $n-1$ coordinates determines the sample variance and has a chi-square distribution. The coordinates are independent standard normal variables, so the independence required in the definition of the $t$ distribution also holds. These two distributions are used to construct intervals for the variance and for the mean of a normal population with unknown $\sigma$.
:::

:::esempio{titolo="Degrees of freedom in a sample of nine measurements"}
For nine independent normal observations, the statistic $\dfrac{\bar X_9-\mu}{\dfrac{S}{3}}$ has distribution $t_8$. The number $8$ is also the number of degrees of freedom of $\dfrac{8S^2}{\sigma^2}$. Deviations from the sample mean sum to zero, so the other eight determine any one of them.

At zero, the density of $t_8$ is about $0.387$, compared with $0.399$ for the standard normal. At $3$, the two densities are about $0.013$ and $0.0044$, respectively. The $t_8$ distribution therefore assigns more probability to the tails because the denominator of the statistic uses the estimate $S$ in place of $\sigma$.

::grafico{f="0.386699*(1+x^2/8)^(-4.5);exp(-x^2/2)/sqrt(2*PI)" xmin=-4.2 xmax=4.2 ymin=-0.03 ymax=0.46 nomi="t,f" legenda="t_8;N(0,1)" titolo="Densities of $t_8$ and the standard normal. The $t_8$ density is higher in the tails."}
:::

## Probability bounds from the mean and variance

::::teorema{#markov titolo="Markov's inequality"}
Let $Y$ be a nonnegative random variable with finite expectation. For every threshold $a>0$,
$$
P(Y\ge a)\le\frac{E[Y]}{a}.
$$
This inequality bounds the probability that a measurement reaches or exceeds a threshold when its expectation is known.

:::dimostrazione
Let $\mathbf 1_{\{Y\ge a\}}$ denote the indicator of the event $Y\ge a$. On the event, the indicator equals $1$ and $Y$ is at least $a$. Off the event, the indicator equals $0$ and $Y$ is nonnegative. In either case, $Y\ge a\mathbf 1_{\{Y\ge a\}}$. Taking expectations gives $E[Y]\ge aP(Y\ge a)$. Since $a$ is positive, we can divide by $a$.
:::
::::

:::esempio{titolo="Mean waiting time and long delays"}
A nonnegative waiting time has mean $6\,\mathrm{min}$. The probability that it is at least $24\,\mathrm{min}$ is at most $\dfrac{6}{24}=0.25$. If the only possible waiting times are $0$ and $24\,\mathrm{min}$, and the second has probability $0.25$, the bound is attained. A different distribution with the same mean may give a smaller probability.
:::

::::teorema{#chebyshev titolo="Chebyshev's inequality"}
Let $X$ be a random variable with mean $\mu$ and finite variance $\sigma^2$. For every $\varepsilon>0$,
$$
P(|X-\mu|\ge\varepsilon)\le\frac{\sigma^2}{\varepsilon^2}.
$$
The event includes both tails about the center $\mu$. If the threshold is $k\sigma$ with $k>0$ and $\sigma>0$, the upper bound is $\dfrac{1}{k^2}$.

:::dimostrazione
The squared deviation $Y=(X-\mu)^2$ is nonnegative and has expectation $\sigma^2$. The event $|X-\mu|\ge\varepsilon$ is equivalent to $Y\ge\varepsilon^2$ because both sides of the absolute-value inequality are nonnegative. Applying Markov's inequality to $Y$ with threshold $\varepsilon^2$ gives the bound.
:::
::::

:::esempio{titolo="A probability bound for a sample mean"}
Consider $16$ i.i.d. measurements with standard deviation $8\,\mathrm{g}$. The variance of their mean is $4\,\mathrm{g}^2$. Hence $P(|\bar X_{16}-\mu|\ge5)\le\dfrac4{25}=0.16$, with the threshold measured in grams. Taking the complementary event gives $P(|\bar X_{16}-\mu|<5)\ge0.84$. If the threshold is so small that the ratio exceeds $1$, the only upper bound this calculation gives is the general bound $1$.
:::

:::esempio{titolo="When Chebyshev's bound is attained"}
A centered variable $X$ takes values $-5$, $0$, and $5$ with respective probabilities $0.08$, $0.84$, and $0.08$. By symmetry, $E[X]=0$, and the variance is $E[X^2]=25\cdot0.16=4$. At threshold $5$ the event $|X|\ge5$ has probability $0.16$, which equals the bound $\dfrac4{25}$. Considering just the tail $X\ge5$ gives probability $0.08$. Chebyshev's bound applies to the union of both tails, so inclusion of events gives the same upper bound for either tail separately. Moments alone do not generally determine the shape of the distribution or the individual tail probabilities.

::grafico{xmin=-7 xmax=7 ymin=-0.06 ymax=1 nomi="x,p" linee="-5,0 -5,0.08;0,0 0,0.84;5,0 5,0.08" punti="-5,0.08;0,0.84;5,0.08" etichette="-5,0.15,0.08;0.9,0.84,0.84;5,0.15,0.08" titolo="The two tails $|X|\ge5$ have total probability $0.16$, equal to Chebyshev's bound $\dfrac{4}{25}$."}
:::

## Weak law of large numbers

::::teorema{#legge-grandi-numeri titolo="Convergence in probability of the sample mean"}
Let $X_1,X_2,\ldots$ be a sequence of i.i.d. variables with mean $\mu$ and finite variance $\sigma^2$. Then $\bar X_n$ converges in probability to $\mu$. That is, for every fixed tolerance $\varepsilon>0$,
$$
\lim_{n\to\infty}P(|\bar X_n-\mu|>\varepsilon)=0.
$$
As the sample size increases, the probability that the sample mean falls outside a fixed interval about $\mu$ becomes arbitrarily small.

:::dimostrazione
Apply Chebyshev's inequality to each sample mean. Its distribution has center $\mu$ and variance $\dfrac{\sigma^2}{n}$, so
$$
0\le P(|\bar X_n-\mu|>\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}.
$$
With $\varepsilon$ fixed, the denominator increases with $n$ and the upper bound tends to zero. The squeeze theorem gives the result.
:::
::::

:::esempio{titolo="Relative frequencies of an outcome"}
Let $X_i$ equal $1$ if trial $i$ produces a specified outcome and $0$ otherwise. For independent trials with success probability $p$, the indicators are i.i.d. with expectation $p$. Their mean is the relative frequency of successes and converges in probability to $p$. If $p=0.4$ and $n=400$, the probability of a deviation of at least $0.1$ is at most $\dfrac{0.4\cdot0.6}{400\cdot0.1^2}=0.06$. The bound uses only the parameters of the Bernoulli model.

::grafico{curve="t,24/t,24,990" xmin=0 xmax=1000 ymin=-0.06 ymax=1.12 nomi="n,L" legenda="L=\dfrac{24}{n}" punti="400,0.06" segmenti="400,0,400,0.06" etichette="400,0.17,n = 400" titolo="Chebyshev's bound $\dfrac{0.4\cdot0.6}{n\cdot0.1^2}=\dfrac{24}{n}$ for a deviation of at least $0.1$. At $n=400$ it equals $0.06$."}
:::

:::attenzione
In the weak law, the tolerance is fixed before $n$ tends to infinity. For example, if the observations have distribution $N(0,1)$, then $\bar X_n$ has standard deviation $\dfrac{1}{\sqrt n}$. Taking $\varepsilon_n=\dfrac{1}{\sqrt n}$ itself as the tolerance gives $P(|\bar X_n|>\varepsilon_n)=P(|Z|>1)$ with $Z\sim N(0,1)$. The probability stays close to $0.3173$ for every $n$.
:::

## Central limit theorem

:::teorema{#tcl titolo="A normal limit for the standardized sample mean"}
Let $X_1,X_2,\ldots$ be i.i.d. with mean $\mu$ and variance $0<\sigma^2<\infty$. Define the standardized mean $Z_n=\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$. Then for every $z\in\mathbb R$,
$$
\lim_{n\to\infty}P(Z_n\le z)=\Phi(z).
$$
This convergence concerns the cumulative distribution functions of $Z_n$. The weak law says that the mean approaches $\mu$. By centering the mean and dividing by its standard error, the central limit theorem describes the shape of its distribution on the scale at which deviations remain visible.
:::

:::osservazione{titolo="Calculations with the normal approximation"}
For a sufficiently large sample, the distribution of $\bar X_n$ is approximated by $N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$. For the sum $T_n=\sum_{i=1}^nX_i=n\bar X_n$ the center becomes $n\mu$ and the standard deviation becomes $\sigma\sqrt n$. The probabilities for the mean and the sum agree when their thresholds are converted using the same factor $n$. For an interval, standardize both endpoints and subtract the cumulative distribution function at the lower endpoint from its value at the upper endpoint.
:::

:::esempio{titolo="A threshold for total consumption"}
The daily energy consumption of each of $64$ independent devices has the same distribution, with mean $5\,\mathrm{kWh}$ and standard deviation $2\,\mathrm{kWh}$. The total consumption $T_{64}$ has mean $320\,\mathrm{kWh}$ and standard deviation $16\,\mathrm{kWh}$. The threshold of $352\,\mathrm{kWh}$ lies two standard errors above the mean because $\dfrac{352-320}{16}=2$. The central limit theorem gives $P(T_{64}>352)\approx1-\Phi(2)\approx0.0228$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;2;3.9" segmenti="2,0,2,0.05399" xmin=-3.9 xmax=4 ymin=-0.035 ymax=0.46 nomi="z,f" legenda="N(0,1)" etichette="2.1,0.11,352 kWh;0.1,0.42,320 kWh" titolo="The threshold $352\,\mathrm{kWh}$ corresponds to $z=2$. The shaded area approximates $P(T_{64}>352)\approx0.0228$."}
:::

:::attenzione
The theorem is asymptotic. A fixed sample-size threshold such as $n=30$ can yield a poor approximation. For example, in $30$ Bernoulli trials with $p=0.01$, the number of successes is zero with probability $0.99^{30}\approx0.7397$. The distribution places substantial mass at a single point. When the binomial distribution is available, a tail probability at a fixed sample size can be calculated exactly.
:::

:::esempio{titolo="Comparison with an exact skewed distribution"}
Consider $36$ independent, exponentially distributed times with mean and standard deviation both equal to one minute. On the scale of the total, the threshold $45$ is $9$ minutes from the mean. The standard deviation of the total is $6\,\mathrm{min}$, so the central limit theorem gives $P(T_{36}>45)\approx1-\Phi(1.5)\approx0.0668$. Knowing the distribution of the individual observations shows that their sum has an exact gamma distribution with shape $36$ and rate $1$ per minute. The gamma tail probability is about $0.0742$. The approximate and exact probabilities differ because a finite sum of exponential variables remains skewed. When the gamma model is known, the exact value can be used to measure the approximation error.

::grafico{f="exp(35*log(x+1e-12)-x-92.1361756);exp(-((x-36)/6)^2/2)/(6*sqrt(2*PI))" area="exp(35*log(x)-x-92.1361756);0;45;60" segmenti="45,0,45,0.02018" xmin=0 xmax=60 ymin=-0.005 ymax=0.078 nomi="t,f" legenda="\text{gamma with shape }36;N(36,36)" titolo="Exact density of the total and its normal approximation. The shading shows the visible part of the upper tail, whose exact probability is $P(T_{36}>45)\approx0.0742$."}
:::

## Proportions and the continuity correction

:::teorema{#proporzioni titolo="Distribution of the sample proportion"}
Let $X_1,\ldots,X_n$ be i.i.d. success indicators with success probability $p$. The count $K=\sum_{i=1}^nX_i$ has distribution $\operatorname{Bin}(n,p)$, and the proportion $\hat p=\dfrac{K}{n}$ satisfies
$$
E[\hat p]=p,\qquad
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$
These formulas follow from those for the sample mean because $\hat p$ is the mean of the indicators and an indicator has variance $p(1-p)$. If $0<p<1$, the central limit theorem applies. A common rule for the normal approximation to the binomial requires both $np$ and $n(1-p)$ to be at least $10$.
:::

:::definizione{#correzione-continuita titolo="Continuity correction"}
The count $K$ takes integer values. When its distribution is approximated by a normal variable $Y$ with mean $np$ and variance $np(1-p)$, the mass at $k$ is approximated by the area over the interval $(k-0.5,k+0.5)$. This is the **continuity correction**. For the event $a\le K\le b$, with integer endpoints $a,b$, the thresholds become $a-0.5$ and $b+0.5$. For $K\ge k$ use the upper tail starting at $k-0.5$. Thus the integers in the original event must be identified before applying the correction.

When $n=100$ and $p=0.5$, each histogram bar has width $1$, is centered on count $k$, and has height $P(K=k)$. Its area therefore equals the mass at $k$. The three bars for counts $49$, $50$, and $51$ cover the interval from $48.5$ to $51.5$, over which the normal density with mean $50$ and variance $25$ is integrated.

::grafico{f="exp(-((x-50)/5)^2/2)/(5*sqrt(2*PI))" area="exp(-((x-50)/5)^2/2)/(5*sqrt(2*PI));0;48.5;51.5" linee="41.5,0 41.5,0.02229 42.5,0.02229 42.5,0;42.5,0 42.5,0.03007 43.5,0.03007 43.5,0;43.5,0 43.5,0.03895 44.5,0.03895 44.5,0;44.5,0 44.5,0.04847 45.5,0.04847 45.5,0;45.5,0 45.5,0.05796 46.5,0.05796 46.5,0;46.5,0 46.5,0.06659 47.5,0.06659 47.5,0;47.5,0 47.5,0.07353 48.5,0.07353 48.5,0;48.5,0 48.5,0.07803 49.5,0.07803 49.5,0;49.5,0 49.5,0.07959 50.5,0.07959 50.5,0;50.5,0 50.5,0.07803 51.5,0.07803 51.5,0;51.5,0 51.5,0.07353 52.5,0.07353 52.5,0;52.5,0 52.5,0.06659 53.5,0.06659 53.5,0;53.5,0 53.5,0.05796 54.5,0.05796 54.5,0;54.5,0 54.5,0.04847 55.5,0.04847 55.5,0;55.5,0 55.5,0.03895 56.5,0.03895 56.5,0;56.5,0 56.5,0.03007 57.5,0.03007 57.5,0;57.5,0 57.5,0.02229 58.5,0.02229 58.5,0" xmin=37.2 xmax=61 ymin=-0.006 ymax=0.095 nomi="k,p" legenda="N(50,25)" titolo="Histogram of $\operatorname{Bin}(100,0.5)$ and normal density. The shaded area from $48.5$ to $51.5$ approximates the total mass at counts $49$, $50$, and $51$."}
:::

:::esempio{titolo="A normal area for three integer counts"}
Let $K\sim\operatorname{Bin}(100,0.5)$. The event $49\le K\le51$ contains three integers, so we integrate the density of the approximating normal variable $Y\sim N(50,25)$ from $48.5$ to $51.5$. This gives
$$
P(49\le K\le51)
\approx \Phi(0.3)-\Phi(-0.3)
\approx 0.2358.
$$
The exact sum of the three binomial masses is approximately $0.2356$. The graph shows the area between $-0.3$ and $0.3$ on the standardized scale, corresponding to the thresholds $48.5$ and $51.5$ on the count scale.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-0.3;0.3" segmenti="-0.3,0,-0.3,0.38139;0.3,0,0.3,0.38139" xmin=-3.5 xmax=3.5 ymin=-0.04 ymax=0.46 nomi="z,f" legenda="N(0,1)" titolo="Area between −0.3 and 0.3 approximating the combined probability of counts 49, 50, and 51"}

:::

:::esempio{titolo="From a percentage to a tail probability for a count"}
For $n=120$, the event $\hat p>0.60$ is equivalent to $K>72$. Since $K$ is an integer, the first possible count in the event is $73$. The approximating normal density is therefore integrated from $72.5$ to the right, provided the binomial parameters justify the approximation. On the proportion scale, this threshold adjustment is half of one step of size $\dfrac1{120}$.
:::

## Random samples from finite populations

::::teorema{#popolazione-finita titolo="Finite population correction"}
Let $y_1,\ldots,y_N$ be the values of a finite population with $N\ge2$. Its mean is $\mu_N=\dfrac1N\sum_{i=1}^Ny_i$ and its population variance is $\sigma_N^2=\dfrac1N\sum_{i=1}^N(y_i-\mu_N)^2$. In a simple random sample without replacement, all subsets of $n$ units, with $1\le n\le N$, are equally likely. For the sample mean,
$$
E[\bar X_n]=\mu_N,
\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
$$
The square root of $\dfrac{N-n}{N-1}$ is the correction factor applied to the standard error obtained under independent draws from the same population.

:::dimostrazione
Consider the draws in order and calculate the covariance between two distinct positions. Each position samples the population values uniformly, so it has expectation $\mu_N$ and variance $\sigma_N^2$. Writing $d_i=y_i-\mu_N$ gives $\sum_i d_i=0$. The sum of the products $d_id_j$ over ordered pairs with $i\ne j$ is therefore $-\sum_i d_i^2=-N\sigma_N^2$. Dividing by the number $N(N-1)$ of equally likely pairs gives covariance $-\dfrac{\sigma_N^2}{N-1}$.

The variance of the sample sum contains $n$ variances and $n(n-1)$ covariance terms for distinct positions. Dividing by $n^2$ to pass from the sum to the mean gives
$$
\begin{aligned}
\operatorname{Var}(\bar X_n)
&=\frac{1}{n^2}
\left(n\sigma_N^2-\frac{n(n-1)\sigma_N^2}{N-1}\right)\\[6pt]
&=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
\end{aligned}
$$
:::
::::

:::esempio{titolo="Precision with and without replacement"}
Draw $20$ units from a population of $81$ units with $\sigma_N^2=80$. Without replacement, the variance of the mean is $\dfrac{80}{20}\cdot\dfrac{61}{80}=3.05$. Under independent sampling with replacement it is $4$. If all $81$ units are sampled without replacement, the standard error is zero because the sample includes the entire population.
:::

:::osservazione{titolo="Two conventions for population variance"}
If the variance is defined as $S_N^2=\dfrac1{N-1}\sum_{i=1}^N(y_i-\mu_N)^2$, then $S_N^2=\dfrac{N}{N-1}\sigma_N^2$. Substituting this identity gives $\dfrac{S_N^2}{n}\left(1-\dfrac nN\right)$ for the variance of the mean. For a population of indicators with proportion $p$, the variance with divisor $N$ is $p(1-p)$. The finite population formula therefore also applies to the sample proportion under sampling without replacement.
:::

:::esempio{titolo="Exact distribution for a population of three units"}
A population contains the values $2$, $4$, and $6$. Two units are drawn without replacement. The three unordered samples are equally likely, with sample means $3$, $4$, and $5$. The mean of these three possibilities is $4$ and their variance is $\dfrac{1+0+1}{3}=\dfrac23$. The original population variance is $\dfrac{4+0+4}{3}=\dfrac83$. The formula with the finite population correction gives
$$
\frac{\sigma_N^2}{n}\frac{N-n}{N-1}
=\frac{8}{3\cdot2}\cdot\frac12
=\frac23,
$$
in agreement with the direct count. For $n=1$, the correction factor equals $1$ because a single draw has the same distribution with or without replacement.
:::

:::esempio{titolo="Proportions in a finite batch"}
A batch contains $20$ items, four of them defective. Three items are selected by simple random sampling without replacement. If $K$ counts defective items, the probability of finding at least one is one minus the ratio of the number of triples containing only good items to the total number of possible triples. Hence $P(K\ge1)=1-\dfrac{\binom{16}{3}}{\binom{20}{3}}\approx0.5088$. The exact count follows a hypergeometric distribution. To find the variance of the proportion $\hat p=\dfrac K3$, instead start with the population variance of the indicators, $0.2\cdot0.8$, which gives $\operatorname{Var}(\hat p)=\dfrac{0.16}{3}\cdot\dfrac{17}{19}$. The exact count and the variance formula refer to the same sampling design.
:::

## Choosing the model and the result

:::esempio{titolo="The same threshold with different information"}
Consider $25$ independent measurements with mean $50$ and standard deviation $10$. The sample mean has center $50$ and standard error $2$. We want the probability that the sample mean differs from its center by at least $4$. Given only the moments, Chebyshev's inequality gives the upper bound $\dfrac{2^2}{4^2}=0.25$. If the individual measurements are known to be normal, the sample mean has distribution $N(50,4)$ and the exact probability is $2\bigl(1-\Phi(2)\bigr)\approx0.0455$. The equality applies to the normal model, whereas the inequality applies to every i.i.d. distribution satisfying the moment assumptions. If the underlying distribution is unknown, using the second value as an approximation requires assessing how well the central limit theorem applies at the given sample size.
:::

:::osservazione{titolo="Fixed and standardized thresholds"}
For a fixed tolerance, doubling $n$ halves Chebyshev's bound on the probability of a deviation of the mean. The corresponding threshold on the standardized scale increases because the standard error falls. If the number of standard errors is held fixed instead, for example at $2$, the tolerance in the original units becomes $\dfrac{2\sigma}{\sqrt n}$. By the central limit theorem, the probability of exceeding this tolerance then approaches $2\bigl(1-\Phi(2)\bigr)$. Whether the tolerance is expressed in the original units or in standard errors therefore determines which probability is being studied.
:::

:::esempio{titolo="Sums, means, and numbers of successes"}
For $80$ components, one can study their total weight or the number of components exceeding a limit. In the first case the measured variable is weight, and the sum has standard error $\sigma\sqrt{80}$ if the measurements are i.i.d. In the second case an indicator represents each component, so the count has a binomial distribution if the indicators are independent with a common success probability. If the batch is finite and the units are selected without replacement, the finite population model applies instead. Specifying the quantity measured and how the units were selected identifies the applicable formulas.
:::
