---
titolo: "Point estimation and maximum likelihood"
sommario: "Estimators, mean squared error, the method of moments, and maximum likelihood, with examples of consistency and efficiency."
---

## Parameter, estimator, and estimate

:::definizione{#stimatore titolo="Estimator and observed estimate"}
A statistical model specifies a family of distributions for the data, indexed by a **parameter** $\theta$ that belongs to a set $\Theta$. For example, if $X$ is the outcome of a Bernoulli trial, the parameter $p$ is the success probability and the set of allowable values is $[0,1]$. In the frequentist model the parameter has a fixed value that is unknown before the data are observed.

Let $X_1,\ldots,X_n$ be the variables describing the sample. An **estimator** of $\theta$ is a statistic $T=T(X_1,\ldots,X_n)$ chosen to approximate $\theta$. The rule depends on the data and any known quantities. Substituting the observations $x_1,\ldots,x_n$ gives the **estimate** $t=T(x_1,\ldots,x_n)$. The estimator is a random variable because the sample can change. The estimate is the number calculated from the observed sample.

When estimating a mean, $\bar X$ denotes the sample mean as a random variable and $\bar x$ denotes the mean of the observed values. For a general parameter, the notation $\widehat{\theta}$ is also used, with the context indicating whether it refers to the rule or to its value for a particular data set.
:::

:::esempio{titolo="Two estimates from the same observations"}
On five independently selected shifts, the numbers of service requests are $1,0,2,1,1$. To estimate the mean number of requests per shift, use $\bar X$. These data give $\bar x=1$. To estimate the probability of at least one request during a shift, use the mean of the indicators $\mathbf{1}_{\{X_i\ge 1\}}$, which equal one for shifts with at least one request. The corresponding estimate is $\dfrac45$ because four shifts meet the condition. The two numbers estimate different parameters and therefore answer different questions about the same observations.

::grafico{xmin=-0.35 xmax=5.8 ymin=-0.35 ymax=2.6 nomi="i,xᵢ" punti="1,1;2,0;3,2;4,1;5,1" segmenti="1,0,1,1;3,0,3,2;4,0,4,1;5,0,5,1" linee="0.6,1 5.35,1" titolo="The horizontal line marks the mean of one request per shift. The points above zero identify the four shifts with at least one request."}
:::

:::osservazione
The distribution of $T$ under the model indexed by $\theta$ is its sampling distribution. The notation $E_\theta[T]$ and $\operatorname{Var}_\theta(T)$ emphasizes that the expectation and variance are calculated assuming that the data follow the distribution for that value of $\theta$. Two rules can give the same estimate for a particular sample despite having different sampling distributions. For example, the mean of all observations and the first observation agree when every value in the sample is the same. For two or more i.i.d. observations with positive finite variance, the first observation has greater variance than the sample mean.
:::

:::attenzione
An estimation rule must be computable from the observations and known quantities. The expression $X_1-\mu$ has expectation zero when $E[X_1]=\mu$, but requires knowledge of $\mu$. It can be used to analyze measurement errors. When $\mu$ is the unknown parameter, the expression is not an observable statistic. The deviation $X_1-\bar X$, by contrast, is computable and measures how far the first observation lies from the sample center.
:::

## Bias and mean squared error

:::definizione{#eqm titolo="Bias and unbiasedness"}
If $E_\theta[|T|]$ is finite, the **bias** of $T$ is the mean signed error
$$
b_\theta(T)=E_\theta[T]-\theta.
$$
The estimator is **unbiased** if this error is zero for every $\theta\in\Theta$. If the bias is positive, the estimates exceed the parameter on average. If it is negative, the estimates are smaller on average. Unbiasedness is a property of the rule and can be verified by calculating its expectation without knowing the true value of the parameter.
:::

::::teorema{#scomposizione-mse titolo="Decomposition of mean squared error"}
For a real-valued estimator $T$ with finite second moment, the **mean squared error** is $MSE_\theta(T)=E_\theta[(T-\theta)^2]$. It satisfies
$$
MSE_\theta(T)=\operatorname{Var}_\theta(T)+b_\theta(T)^2.
$$
The variance measures spread about the expectation of the estimator. The squared bias measures how far that expectation is from the parameter. For an unbiased estimator, the second contribution is zero, so comparing mean squared errors is equivalent to comparing variances.

:::dimostrazione
Write the deviation from the parameter as the sum of a centered deviation and a constant. Setting $m=E_\theta[T]$ gives
$$
\begin{aligned}
E_\theta[(T-\theta)^2]
&= E_\theta[((T-m)+(m-\theta))^2]\\[6pt]
&= E_\theta[(T-m)^2]
+2(m-\theta)E_\theta[T-m]+(m-\theta)^2\\[6pt]
&= \operatorname{Var}_\theta(T)+(m-\theta)^2 .
\end{aligned}
$$
The cross term vanishes because $E_\theta[T-m]=m-m=0$. The quantity $m-\theta$ is the bias.
:::
::::

:::esempio{titolo="Comparing two estimation rules"}
For a given value of $\theta$, the estimator $T$ is unbiased with variance $5$. The estimator $U$ has expectation $\theta-1$ and variance $3$. Their mean squared errors are
$$
MSE_\theta(T)=5+0^2=5,\qquad
MSE_\theta(U)=3+(-1)^2=4.
$$
At this point in the parameter space, the reduction in variance exceeds the contribution of squared bias. To conclude that $U$ is preferable throughout the family, the comparison would have to hold for every allowable value of $\theta$.

::grafico{f="exp(-x*x/10)/sqrt(10*PI);exp(-(x+1)^2/6)/sqrt(6*PI)" xmin=-8 xmax=7 ymin=-0.03 ymax=0.29 nomi="t,y" punti="0,0,pieno,θ" segmenti="-1,0,-1,0.2303" legenda="f_T;f_U" titolo="Densities of $T$ and $U$, assumed normal, for $\theta=0$. The density of $T$ is centered at $0$ with variance $5$. The density of $U$ is centered at $-1$ and is narrower, with variance $3$."}
:::

## Sample mean and sample variance

:::teorema{#media-corretta titolo="Expectation and variance of the sample mean"}
Let $X_1,\ldots,X_n$ be independent and identically distributed with mean $\mu$ and finite variance $\sigma^2$. The sample mean is unbiased for $\mu$ and has variance
$$
E[\bar X]=\frac{1}{n}\sum_{i=1}^nE[X_i]=\mu,\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
$$
The expectation formula follows from linearity. The variance formula follows from independence, which gives zero covariance between distinct observations. With $n=16$ and $\sigma^2=36$, the standard error of $\bar X$, that is, its standard deviation, is $\sqrt{\dfrac{36}{16}}=1.5$.

::grafico{f="exp(-(x-20)^2/72)/(6*sqrt(2*PI));exp(-(x-20)^2/18)/(3*sqrt(2*PI));exp(-(x-20)^2/4.5)/(1.5*sqrt(2*PI))" xmin=0 xmax=41 ymin=-0.03 ymax=0.31 nomi="x̄,y" legenda="n=1;n=4;n=16" titolo="Densities of $\bar X$ for a normal population with $\mu=20$ and $\sigma^2=36$. For $n=1$, $4$, and $16$, the standard deviations are $6$, $3$, and $1.5$, respectively."}
:::

::::teorema{#varianza-corretta titolo="Unbiasedness of the sample variance"}
Consider an independent and identically distributed sample of size $n>1$ with mean $\mu$ and finite variance $\sigma^2$. Let $D=\sum_{i=1}^n(X_i-\bar X)^2$ denote the sum of squared deviations from the sample mean. Then
$$
E[D]=(n-1)\sigma^2,\qquad
E[S^2]=\sigma^2,\qquad S^2=\frac{D}{n-1}.
$$
The statistic $S^2$ is the **unbiased sample variance**. With divisor $n$, the statistic $V_n=\dfrac{D}{n}$ instead has expectation $\dfrac{n-1}{n}\sigma^2$. Its bias is $-\dfrac{\sigma^2}{n}$.

:::dimostrazione
Express the sum of squared deviations from the observed center in terms of deviations from the population mean. Indeed, $X_i-\bar X=(X_i-\mu)-(\bar X-\mu)$ and $\sum_i(X_i-\mu)=n(\bar X-\mu)$. Expanding the squares gives
$$
D=\sum_{i=1}^n(X_i-\mu)^2-n(\bar X-\mu)^2.
$$
The first term has expectation $n\sigma^2$. The second has expectation $n\operatorname{Var}(\bar X)=\sigma^2$ because $\bar X$ is unbiased for $\mu$. Hence $E[D]=n\sigma^2-\sigma^2$. Dividing by $n-1$ gives the result.
:::
::::

:::esempio{titolo="The same sum with two different divisors"}
For the data $2,5,8$, the observed mean is $5$. The deviations are $-3,0,3$ and the sum of their squares is $18$. The observed unbiased sample variance is $s^2=\dfrac{18}{2}=9$, whereas using divisor $n$ gives $v_n=\dfrac{18}{3}=6$. Both values use the same deviations. The choice depends on how the sum is used: divisor $n$ describes the observations, while divisor $n-1$ gives an unbiased estimate of the population variance.
:::

:::attenzione
If the mean $\mu$ is known, each deviation from $\mu$ has second moment $\sigma^2$. The statistic $\dfrac1n\sum_i(X_i-\mu)^2$ is already unbiased. The correction using $n-1$ applies to deviations from the estimated mean. Moreover, taking the square root of an unbiased variance estimator can introduce bias. By concavity of the square root, $E[S]\le \sqrt{E[S^2]}=\sigma$, with strict inequality unless $S^2$ is almost surely constant.
:::

## Method of moments

:::definizione{#momenti titolo="Moment equations"}
The **method of moments** pairs a population moment with its counterpart calculated from the data. For the moment of order $j$, where $j$ is a positive integer, define
$$
m_j(\theta)=E_\theta[X^j],\qquad
\widehat m_j=\frac{1}{n}\sum_{i=1}^n X_i^j.
$$
The theoretical moment must exist. Equate as many sample moments to theoretical moments as needed to identify the parameters. In a one-parameter model, if the theoretical mean uniquely determines $\theta$, solve $E_\theta[X]=\bar x$ using the observed data. With several parameters, check that the system yields an admissible solution. A sample moment may correspond to multiple solutions or fall outside the range allowed by the model.
:::

:::esempio{titolo="One mean with two interpretations"}
For a Poisson sample, $E_\lambda[X]=\lambda$, so the method of moments gives $\widehat\lambda=\bar X$. For an exponential distribution parameterized by its rate $\lambda>0$, we instead have $E_\lambda[X]=\dfrac1\lambda$, giving $\widehat\lambda=\dfrac{1}{\bar X}$ for $\bar X>0$. If the observed mean is $4$ in both cases, the estimates are $4$ and $\dfrac14$, respectively. The distribution determines the equation to solve. In the exponential model, the rate is the reciprocal of the scale, so a mean measured in minutes gives a rate per minute.
:::

:::esempio{titolo="Two moments for the mean and variance"}
For a normal distribution $N(\mu,\sigma^2)$ with both parameters unknown, $E[X]=\mu$ and $E[X^2]=\mu^2+\sigma^2$. The first moment gives $\widehat\mu=\bar X$. Substitution into the second gives
$$
\widehat{\sigma^2}=\frac{1}{n}\sum_{i=1}^n X_i^2-\bar X^2
=\frac{1}{n}\sum_{i=1}^n (X_i-\bar X)^2.
$$
Expanding the sum of squared deviations gives the second identity. For the data $1,3,5$, we have $\widehat\mu=3$ and $\widehat{\sigma^2}=\dfrac{35}{3}-9=\dfrac83$. Since the divisor is $n$, this method-of-moments estimate comes from a biased estimator. A nondegenerate normal distribution requires $\sigma^2>0$, so when all the observations are equal the system has no solution in the parameter space.
:::

## Likelihood and maximization

:::definizione{#verosimiglianza titolo="Likelihood and log-likelihood"}
For fixed observations $x_1,\ldots,x_n$, the **likelihood** is the function of the parameter that assigns to each $\theta$ the joint density evaluated at the observations, or the joint probability mass in the discrete case. For an independent sample with common density $f_\theta$, or common mass function denoted in the same way,
$$
L(\theta;x_1,\ldots,x_n)=\prod_{i=1}^n f_\theta(x_i).
$$
A **maximum likelihood estimate** is a point in the parameter space at which $L$ attains its maximum. Where $L$ is positive, $\ell(\theta)=\log L(\theta)$ can be maximized instead because the logarithm is strictly increasing. The product becomes a sum, so it is often more convenient to calculate and study the derivatives of $\ell$.
:::

:::osservazione
Adding a constant to the log-likelihood leaves its maximizers unchanged if the constant is independent of the parameter. For example, for a binomial variable $K$ with known number of trials $n$, observing $K=k$ introduces a coefficient $\binom nk$ into the likelihood. The coefficient depends on the data and $n$, so it adds a term to the log-likelihood that is constant with respect to $p$. The optimization can therefore use just the terms $k\log p$ and $(n-k)\log(1-p)$.
:::

:::attenzione
The equation $\ell'(\theta)=0$ identifies candidates at differentiable interior points. The maximum can occur at the boundary or fail to exist when the parameter space excludes the limiting point. On $[0,1]$, the function $L(\theta)=\theta^3$ has its maximum at $1$ even though its derivative is positive throughout the interior. On $(0,1)$ it has the same supremum and no maximum. The likelihood is also a function evaluated with the data fixed. Its integral with respect to $\theta$ is generally not one, so its height cannot be interpreted as a probability for the parameter.
:::

:::esempio{titolo="Comparing discrete parameter values"}
Suppose the only possible success probabilities are $\dfrac14$ and $\dfrac12$. Three independent Bernoulli trials yield, in order, two successes followed by one failure. The parameter space contains just two points, so compare their likelihoods.

$$
L\!\left(\frac14\right)=\left(\frac14\right)^2\frac34=\frac{3}{64},
\qquad
L\!\left(\frac12\right)=\left(\frac12\right)^3=\frac18 .
$$

Since $\dfrac18>\dfrac{3}{64}$, the maximum likelihood estimate is $\dfrac12$. If only the success count were observed, both likelihoods would be multiplied by $3$, the number of sequences containing two successes. Their ranking would stay the same.

If the model allowed every $p\in[0,1]$, the maximum would instead occur at $\dfrac23$, the observed success proportion.

::grafico{curve="t,t*t*(1-t),0,1" xmin=-0.1 xmax=1.12 ymin=-0.02 ymax=0.19 nomi="p,L" punti="0.25,0.046875,pieno;0.5,0.125,pieno;0.666667,0.148148,vuoto" segmenti="0.25,0,0.25,0.046875;0.5,0,0.5,0.125;0.666667,0,0.666667,0.148148" etichette="0.21,-0.012,¼;0.47,-0.012,½;0.64,-0.012,⅔" legenda="L(p)=p^2(1-p)" titolo="Likelihood for the observed data. At the allowable values, it equals $\dfrac{3}{64}$ at $\dfrac14$ and $\dfrac18$ at $\dfrac12$. Over all of $[0,1]$ its maximum $\dfrac{4}{27}$ occurs at $\dfrac23$."}
:::

:::osservazione{#invarianza-mle titolo="Estimation after reparameterization"}
If $\eta=g(\theta)$ is a one-to-one reparameterization, each allowable value of $\eta$ corresponds to exactly one value of $\theta$. The likelihood as a function of $\eta$ is therefore $L(g^{-1}(\eta))$. If the maximum with respect to $\theta$ occurs at $\widehat\theta$, the maximum under the new parameterization occurs at $g(\widehat\theta)$, because the two functions have the same values at corresponding points. For example, if an exponential rate is estimated at $\dfrac14$ per minute, the estimated scale is $4$ minutes. This transformation preserves the likelihood maximum. Unbiasedness depends on expectation and must be checked separately for the new parameter.
:::

## Maximum likelihood in common models

::::teorema{#mle-bernoulli titolo="Maximum likelihood for Bernoulli trials"}
Let $x_1,\ldots,x_n$ be observations from independent Bernoulli trials with parameter $p\in[0,1]$. Writing $k=\sum_i x_i$, the maximum likelihood estimate is $\widehat p=\dfrac{k}{n}$. This equals the sample proportion and can be calculated by counting successes.

:::dimostrazione
If $0<k<n$, the derivative of the log-likelihood in the interior of $[0,1]$ is
$$
\ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}
=\frac{k-np}{p(1-p)}.
$$
The denominator is positive, so the derivative is positive before $\dfrac{k}{n}$ and negative after it. The likelihood is zero at the endpoints because both successes and failures were observed. If $k=0$, the likelihood is $(1-p)^n$ and its maximum occurs at $0$. If $k=n$, it is $p^n$ and its maximum occurs at $1$.
:::
::::

:::esempio{titolo="Estimating an exponential rate"}
For independent observations from an exponential distribution with rate $\lambda>0$, let $s=\sum_i x_i$ and assume $s>0$. The log-likelihood is $\ell(\lambda)=n\log\lambda-\lambda s$. Differentiating gives $\ell'(\lambda)=\dfrac{n}{\lambda}-s$. The only zero is $\widehat\lambda=\dfrac ns$, where the derivative changes from positive to negative. For $2,3,7$ minutes, $\widehat\lambda=\dfrac{3}{12}=\dfrac14\,\mathrm{min}^{-1}$. In this model the reciprocal of the observed mean agrees with the method-of-moments estimate.

::grafico{f="3*log(x)-12*x" xmin=-0.06 xmax=0.9 ymin=-12.5 ymax=1.3 nomi="λ,ℓ" punti="0.25,-7.1589,pieno" segmenti="0.25,0,0.25,-7.1589" etichette="0.27,0.6,¼" legenda="\ell(\lambda)=3\log\lambda-12\lambda" titolo="Log-likelihood for observed times of $2$, $3$, and $7$ minutes. Its maximum occurs at $\lambda=\dfrac14$ and equals $3\log\dfrac14-3\approx-7.16$."}
:::

:::osservazione{#mle-poisson titolo="Estimating a Poisson rate"}
For independent Poisson observations with parameter $\lambda\ge0$, the product of their probability masses is
$$
L(\lambda)=\frac{e^{-n\lambda}\lambda^{s}}{\prod_i x_i!},
\qquad s=\sum_i x_i.
$$
If $s>0$, then in the interior of the domain $\ell'(\lambda)=\dfrac{s}{\lambda}-n$. The sign is positive for $\lambda<\dfrac{s}{n}$ and negative for $\lambda>\dfrac{s}{n}$. The estimate is therefore $\dfrac{s}{n}=\bar x$. If $s=0$, the product is $e^{-n\lambda}$, so the maximum occurs at $\lambda=0$ when the degenerate distribution is included. If the domain requires $\lambda>0$, the supremum of the likelihood is $1$, approached as $\lambda\to0^+$.
:::

:::osservazione{#correzione-tasso titolo="Bias when estimating an exponential rate"}
For a sample of $n>1$ independent exponential observations with rate $\lambda$, their sum $A=\sum_i X_i$ has a gamma distribution with shape $n$ and rate $\lambda$. When calculating the expectation of the reciprocal, the factor $a^{n-1}$ in the density of $A$ becomes $a^{n-2}$. Recognizing the integral of the gamma density with shape $n-1$ gives $E[\dfrac1A]=\dfrac{\lambda}{n-1}$. Hence $\dfrac nA$ has expectation $\dfrac{n}{n-1}\lambda$ and positive bias. In contrast, the rule $\dfrac{n-1}{A}$ has expectation $\lambda$. The example shows why an estimator obtained by maximizing likelihood may require a correction if unbiasedness is the objective.
:::

:::osservazione{#mle-normale titolo="Mean and variance in the normal model"}
For an independent normal sample, the log-likelihood depends on $\mu$ through $\sum_i(x_i-\mu)^2$ with a negative sign. For fixed variance it is therefore maximized by choosing $\widehat\mu=\bar x$, because
$$
\sum_{i=1}^n(x_i-\mu)^2
=\sum_{i=1}^n(x_i-\bar x)^2+n(\bar x-\mu)^2.
$$
If the variance is also estimated, substitute $\bar x$ and write $v=\sigma^2>0$. Let $d$ denote the sum of squared deviations from $\bar x$. This gives
$$
\ell'(v)=-\frac{n}{2v}+\frac{d}{2v^2}
=\frac{d-nv}{2v^2}.
$$
For $d>0$ the maximum occurs at $v=\dfrac dn$. The divisor arises from the optimization. If the mean is known, the sum of squared deviations is calculated about that mean and the divisor is still $n$. In the limiting case $d=0$, the log-likelihood increases without bound as $v$ tends to zero, which is excluded from the nondegenerate normal model.
:::

## Parameter-dependent support

:::esempio{#uniforme titolo="Estimating the endpoint of a uniform distribution"}
Let $x_1,\ldots,x_n$ be independent observations from $U(0,\theta)$, with $\theta>0$. Use the version of the density that equals $\dfrac1\theta$ on $[0,\theta]$, including the endpoints, and zero elsewhere. If the observations are nonnegative and their observed maximum $m$ is positive, parameter values $\theta<m$ have likelihood zero. For $\theta\ge m$ the likelihood is $L(\theta)=\theta^{-n}$. It is strictly decreasing on the admissible part of the domain, so its maximum occurs at $\widehat\theta=m$.

For $x_1=1$ and $x_2=2$, the likelihood is zero below $2$ and equals $\theta^{-2}$ starting at $2$. The point $(2,0)$ is excluded from the left-hand branch, whereas $(2,\dfrac14)$ is included in the right-hand branch. The jump occurs when the support of the density first includes the largest observation.

::grafico{curve="t,0,0.1,2;t,1/(t*t),2,5.3" xmin=-0.35 xmax=5.5 ymin=-0.075 ymax=0.39 punti="2,0,vuoto;2,0.25,pieno" segmenti="2,0,2,0.25" nomi="θ,L" legenda="L(\theta)=0;L(\theta)=\theta^{-2}" titolo="For observations 1 and 2, L reaches its maximum at the boundary θ = 2."}
:::

::::teorema{#massimo-corretto titolo="Correcting the sample maximum for a uniform distribution"}
For an independent sample of size $n$ from $U(0,\theta)$, the maximum $M=\max_i X_i$ has expectation $E[M]=\dfrac{n}{n+1}\theta$. The corrected estimator $\dfrac{n+1}{n}M$ is therefore unbiased for $\theta$. The method-of-moments estimate $2\bar x$ instead follows from the theoretical mean $\dfrac{\theta}{2}$. The two rules use different information in the sample.

::grafico{curve="t,4*t^3/10000,0,10" xmin=-0.8 xmax=12 ymin=-0.04 ymax=0.46 nomi="m,y" segmenti="10,0,10,0.4;8,0,8,0.2048" punti="8,0.2048,pieno;10,0.4,pieno" etichette="7.3,0.25,E[M] = 8" legenda="f_M(m)=\dfrac{4m^3}{10^4}" titolo="Density of the maximum of four observations from $U(0,10)$. It is concentrated near the endpoint $10$, but its expectation is $\dfrac45\cdot10=8$."}

:::dimostrazione
The event $\{M\le m\}$ is the event that every observation is at most $m$. For $0\le m\le\theta$, independence gives
$$
P_\theta(M\le m)=\left(\frac{m}{\theta}\right)^n .
$$
Differentiating the distribution function on the interval $0<m<\theta$ gives the density $\dfrac{nm^{n-1}}{\theta^n}$. Therefore
$$
E[M]=\frac{n}{\theta^n}\int_0^\theta m^n\,\mathrm dm
=\frac{n}{n+1}\theta .
$$
Multiplying by $\dfrac{n+1}{n}$ gives an estimator with expectation $\theta$. For example, with four observations the factor is $\dfrac54$. An observed maximum of $8$ thus gives an estimate of $10$. The correction is closer to one for larger samples because the probability of observing at least one value close to the endpoint increases with the number of independent observations.
:::
::::

:::attenzione
The method of moments can give an endpoint incompatible with the observations. For $1,1,7$, we have $\bar x=3$ and hence $2\bar x=6$, whereas the observation $7$ requires an endpoint at least as large as $7$. The method of moments satisfies the equation for the mean and produces a positive parameter. Maximum likelihood accounts for the support of each observation and gives $7$.
:::

:::esempio{titolo="An interval of maximizers"}
For the model $U(\theta,\theta+2)$ use density $\dfrac12$ on its closed support. For a given observed minimum $a$ and maximum $b$, all observations lie within the support exactly when
$$
\begin{cases}
\theta\le a,\\
\theta+2\ge b.
\end{cases}
$$
The compatible values form the interval $[b-2,a]$ when $b-a\le2$. The joint density is constant over this interval because each observation contributes the same factor $\dfrac12$. For the data $3$ and $4$, every value from $2$ to $3$, inclusive, therefore maximizes the likelihood. There can be more than one maximizer even when the observations are compatible with the model.
:::

## Consistency and efficiency

:::definizione{#consistenza titolo="Consistency in probability"}
A sequence of estimators $T_n$ is **consistent** for $\theta$ if it converges in probability to the parameter. For every $\varepsilon>0$ and every $\theta\in\Theta$, this requires
$$
\lim_{n\to\infty}P_\theta(|T_n-\theta|>\varepsilon)=0.
$$
The event comprises estimates whose absolute error exceeds a fixed threshold. Consistency describes what happens as the sample size grows, whereas unbiasedness concerns the expectation at a given sample size.
:::

:::teorema{#consistenza-mse titolo="Mean squared error and consistency"}
If $MSE_\theta(T_n)\to 0$ for every $\theta\in\Theta$, then $T_n$ is consistent. In fact, applying Markov's inequality to $(T_n-\theta)^2$ gives
$$
P_\theta(|T_n-\theta|>\varepsilon)
\le \frac{MSE_\theta(T_n)}{\varepsilon^2}.
$$
This condition holds, for example, if the bias and variance both tend to zero. For the mean of an i.i.d. sample with finite variance, the mean squared error is $\dfrac{\sigma^2}{n}$ and tends to zero.
:::

:::esempio{titolo="An estimator can be both biased and consistent"}
The sample maximum $M_n$ from $U(0,\theta)$ is biased for every finite $n$. Since $M_n\le\theta$ almost surely, for $0<\varepsilon<\theta$ we have
$$
P_\theta(|M_n-\theta|>\varepsilon)
=P_\theta(M_n<\theta-\varepsilon)
=\left(1-\frac{\varepsilon}{\theta}\right)^n.
$$
The base lies between zero and one, so its power tends to zero. For $\varepsilon\ge\theta$ the probability is already zero. The sample maximum is therefore consistent even without correction.

::grafico{xmin=-0.8 xmax=21.5 ymin=-0.08 ymax=1.1 nomi="n,P" punti="1,0.9;2,0.81;3,0.729;4,0.6561;5,0.5905;6,0.5314;7,0.4783;8,0.4305;9,0.3874;10,0.3487;11,0.3138;12,0.2824;13,0.2542;14,0.2288;15,0.2059;16,0.1853;17,0.1668;18,0.1501;19,0.1351;20,0.1216" titolo="Values of $\left(1-\dfrac{\varepsilon}{\theta}\right)^n$ with $\dfrac{\varepsilon}{\theta}=\dfrac{1}{10}$ for $n$ ranging from $1$ to $20$. For $n=20$, the probability of an error larger than $\varepsilon$ is about $0.12$."}
:::

:::attenzione
Consider a sample from a population with positive variance, and take the estimator $T_n=X_1$ for every $n$. It is unbiased for the mean because $E[X_1]=\mu$. The distribution of $X_1$ stays the same as $n$ increases, so there is a positive threshold for which the probability of exceeding that error stays positive. Thus the estimator is unbiased at every sample size but fails to be consistent.
:::

:::osservazione{#efficienza titolo="Comparing precision under the same conditions"}
When two estimators are unbiased for the same parameter, their **relative efficiency** can be compared through their variances under the same model and at the same sample size. For two independent observations with a common mean and variance $\sigma^2>0$, let $T=\dfrac{X_1+X_2}{2}$ and $U=\dfrac{3X_1+X_2}{4}$. The weights in both combinations sum to one, so both estimators are unbiased. Their variances are $\dfrac{\sigma^2}{2}$ and $\dfrac{5\sigma^2}{8}$. The sample mean is more precise for the same data because its variance is smaller. When bias is present, mean squared error also accounts for the difference between the estimator's expectation and the parameter.
:::

:::esempio{titolo="The comparison can depend on the parameter"}
Let $X$ be a measurement with mean $\theta$ and variance $1$. Compare $T=X$ and $U=\dfrac X2$. For $T$, the mean squared error equals $1$. For $U$ the variance is $\dfrac14$ and the bias is $-\dfrac{\theta}{2}$, so $MSE_\theta(U)=\dfrac{1+\theta^2}{4}$. At $\theta=0$ the second rule has mean squared error $\dfrac14$, whereas at $\theta=2$ it has mean squared error $\dfrac54$. Shrinking the values toward zero reduces the variance in both cases. The distance of the parameter from zero determines whether the reduction compensates for the bias.

::grafico{f="1;(1+x^2)/4" xmin=-3.1 xmax=3.1 ymin=-0.25 ymax=2.9 nomi="θ,R" punti="-1.73205,1;1.73205,1;0,0.25;2,1.25" segmenti="-1.73205,0,-1.73205,1;1.73205,0,1.73205,1" legenda="MSE_\theta(T);MSE_\theta(U)" titolo="Near zero, the curve for U lies below the line for T. The two mean squared errors coincide when θ equals −√3 or √3."}
:::
