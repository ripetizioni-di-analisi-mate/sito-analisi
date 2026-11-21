---
titolo: "Point estimation and maximum likelihood"
sommario: "Estimators, mean squared error, the method of moments, and maximum likelihood, with examples of consistency and efficiency."
---

A technical office records $1,0,2,1,1$ service requests on five randomly chosen shifts and wants to know how many requests arrive on average in a shift, taking into account all shifts and not only the five observed ones. The mean of the five counts is $1$, and this number is used as an approximate value of the mean over all shifts. A number computed from the data to approximate an unknown quantity of the population is called a point estimate, and it is the subject of this chapter.

The chapter answers two questions. The first question is which rule gives the estimate, and to answer it the chapter presents the method of moments and the method of maximum likelihood, which give a rule for every model whose distribution is known up to a parameter. The second question is how much the rule errs, and to answer it the chapter computes the bias, that is, how far the estimate lies from the true value on average, and the mean squared error. For example, for the data $2,5,8$ the sum of the squared deviations from the mean is $18$. Dividing by $3$ gives $6$, dividing by $2$ gives $9$, and only the second rule has on average the value of the population variance.

The calculations of expectations and variances use the random variables of Chapters 5 to 7 and the results on the sample mean from Chapter 8. Chapter 10 starts from an estimator and its distribution to build an interval of values that contains the parameter with a fixed probability, for example $0.95$. The tests of Chapter 11 and the regression of Chapter 12 use the estimators of this chapter, in particular the sample mean $\bar X$ and the unbiased sample variance $S^2$.

## Parameter, estimator, and estimate

:::definizione{#stimatore titolo="Estimator and observed estimate"}
Of $20$ items inspected on a production line, $3$ are defective. The probability $p$ that an item from the line is defective is unknown. For item $i$ set $X_i=1$ if it is defective and $X_i=0$ otherwise, so $X_i$ has a Bernoulli distribution with parameter $p$ (Chapter 5). Each value of $p$ between $0$ and $1$ gives a different distribution for the data. For example, with $p=0.1$ an item is defective with probability $0.1$, with $p=0.2$ with probability $0.2$.

The set of possible distributions for the data, one for each value of an unknown number, is called a statistical model. The unknown number is the **parameter** of the model and, for a general model, is denoted by $\theta$, read theta; in the example $\theta=p$. The set of allowable values of $\theta$ is called the parameter space and is denoted by $\Theta$, capital theta; in the example $\Theta=[0,1]$. The parameter has a fixed value, which is unknown before the data are observed.

The variables $X_1,\ldots,X_n$ denote the values of the $n$ observations before data collection, and a statistic is a function of the observations and of known quantities (Chapter 8). In the example the proportion of defective items in the sample, $\dfrac{X_1+\cdots+X_{20}}{20}$, is a statistic chosen to approximate $p$. For a general parameter, an **estimator** of $\theta$ is a statistic $T=T(X_1,\ldots,X_n)$ chosen to approximate $\theta$. Substituting the observed values $x_1,\ldots,x_n$ gives the **estimate** $t=T(x_1,\ldots,x_n)$; in the example $t=\dfrac{3}{20}=0.15$.

The estimator is a random variable, because another $20$ items may contain $1$ or $5$ defective ones and the proportion changes. The estimate is the number already calculated from the observed sample.

When estimating a mean, $\bar X$ denotes the sample mean as a random variable and $\bar x$ denotes the mean of the observed values. For a general parameter one also writes $\widehat{\theta}$, read theta hat; the context indicates whether it refers to the rule or to its value for the observed data.

The rest of the chapter compares different estimators of the same parameter and presents two methods for constructing them. The confidence intervals of Chapter 10 start from an estimator and its distribution.
:::

:::esempio{titolo="Two estimates from the same observations"}
On five independently selected shifts, the numbers of service requests are $1,0,2,1,1$. To estimate the mean number of requests per shift, use $\bar X$; these data give $\bar x=1$. To estimate the probability of at least one request during a shift, use instead the mean of the indicators $\mathbf{1}_{\{X_i\ge 1\}}$, which equal $1$ for shifts with at least one request and $0$ for the others. The corresponding estimate is $\dfrac45$, because four shifts out of five meet the condition. The two numbers estimate different parameters. The first gives how many requests arrive on average in a shift, the second the fraction of shifts in which at least one request arrives.

::grafico{xmin=-0.35 xmax=5.8 ymin=-0.35 ymax=2.6 nomi="i,xᵢ" punti="1,1;2,0;3,2;4,1;5,1" segmenti="1,0,1,1;3,0,3,2;4,0,4,1;5,0,5,1" linee="0.6,1 5.35,1" titolo="The horizontal line marks the mean of one request per shift. The points above zero identify the four shifts with at least one request."}
:::

:::osservazione
On another five shifts the estimator $\bar X$ takes a different value. The distribution of an estimator $T$, computed assuming that the data follow the model distribution for a given value of $\theta$, is called the sampling distribution of $T$. The notation $E_\theta[T]$ and $\operatorname{Var}_\theta(T)$ indicates that the expectation and variance are calculated assuming that $\theta$ is the true value of the parameter.

Two rules can give the same estimate for one sample and have different sampling distributions. With the data $1,0,2,1,1$ the mean is $1$ and the first observation is also $1$, so the two rules give the same estimate. As random variables, however, $X_1$ has variance $\sigma^2$, the variance of a single observation, while $\bar X$ has variance $\dfrac{\sigma^2}{5}$ (Chapter 8, distribution of the mean). If $\sigma^2>0$, on another sample the first observation therefore lies farther from the expected value on average than the sample mean.
:::

:::attenzione
An estimator is computed from the observations and known quantities only. The expression $X_1-\mu$ has expectation zero when $E[X_1]=\mu$, but it contains the unknown parameter $\mu$. Computing it for the data $1,0,2,1,1$ would require the value of $\mu$, which is exactly what is being sought, so it is not a statistic and cannot be used as an estimator.

The expression $X_1-\mu$ can be computed only when $\mu$ is known. For example, if $\mu$ is the certified mass of a reference weight and $X_1$ is its reading on a scale, $X_1-\mu$ is the measurement error. The deviation $X_1-\bar X$, by contrast, is computed from the data, and for the shifts it equals $1-1=0$. It is a statistic, but it estimates no parameter, because it only gives how far the first observation lies from the sample mean.
:::

## Bias and mean squared error

:::definizione{#eqm titolo="Bias and unbiasedness"}
Let $X_1,X_2,X_3$ be three observations with mean $\mu$, and consider the estimator $T=\dfrac{X_1+X_2+X_3}{4}$, which divides the sum by $4$ instead of $3$. By linearity of expectation, $E[T]=\dfrac{3\mu}{4}$. If $\mu=8$, then $E[T]=6$, so the estimates equal $6$ on average while the parameter equals $8$, and the mean error is $6-8=-2$.

If $T$ has finite expectation, the **bias** of $T$ is the mean signed error between the estimator and the parameter:
$$
b_\theta(T)=E_\theta[T]-\theta.
$$
In the example $b_\mu(T)=\dfrac{3\mu}{4}-\mu=-\dfrac{\mu}{4}$, which equals $-2$ for $\mu=8$. When the bias is positive the estimates exceed the parameter on average; when it is negative they are smaller on average.

The estimator is **unbiased** if the bias is zero for every $\theta\in\Theta$. For example $\bar X=\dfrac{X_1+X_2+X_3}{3}$ has expectation $\mu$ for every $\mu$, so it is unbiased. Unbiasedness is a property of the rule, and it is checked by computing the expectation as a function of $\theta$, without knowing the true value of the parameter.

The bias gives how much a rule errs on average. The theorem on the sample variance, later in the chapter, uses it to choose between the divisor $n$ and the divisor $n-1$.
:::

::::teorema{#scomposizione-mse titolo="Decomposition of mean squared error"}
An unbiased estimator with variance $100$ gives estimates that agree with $\theta$ on average, but have standard deviation $10$ about $\theta$. To measure bias and spread together, one uses the mean of the square of the error $T-\theta$.

For a real-valued estimator $T$ with finite $E_\theta[T^2]$, the **mean squared error** is $MSE_\theta(T)=E_\theta[(T-\theta)^2]$. It satisfies
$$
MSE_\theta(T)=\operatorname{Var}_\theta(T)+b_\theta(T)^2.
$$
The variance gives how much the estimates spread about the expectation of the estimator. The squared bias gives how far this expectation lies from the parameter. For an unbiased estimator the second term is zero, so comparing the mean squared errors of two unbiased estimators is equivalent to comparing their variances. The unbiased estimator with variance $100$ therefore has mean squared error $100$.

The mean squared error also allows an unbiased estimator to be compared with a biased one, as in the following example.

:::dimostrazione
Write the error $T-\theta$ as the sum of a deviation from the expectation and a constant. Setting $m=E_\theta[T]$, expanding the square and using linearity of expectation gives
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
For a given value of $\theta$, the estimator $T$ is unbiased with variance $5$. The estimator $U$ has expectation $\theta-1$, hence bias $-1$, and variance $3$. The mean squared errors are
$$
MSE_\theta(T)=5+0^2=5,\qquad
MSE_\theta(U)=3+(-1)^2=4.
$$
For this value of $\theta$ the variance of $U$ is smaller by $2$ than that of $T$, while the squared bias adds only $1$, so $U$ has the smaller error. To conclude that $U$ is preferable for every value of the parameter, the comparison must be repeated for every $\theta\in\Theta$; the last example of the chapter shows a case in which the comparison changes with $\theta$.

::grafico{f="exp(-x*x/10)/sqrt(10*PI);exp(-(x+1)^2/6)/sqrt(6*PI)" xmin=-8 xmax=7 ymin=-0.03 ymax=0.29 nomi="t,y" punti="0,0,pieno,θ" segmenti="-1,0,-1,0.2303" legenda="f_T;f_U" titolo="Densities of $T$ and $U$, assumed normal, for $\theta=0$. The density of $T$ is centered at $0$ with variance $5$. The density of $U$ is centered at $-1$ and is narrower, with variance $3$."}
:::

## Sample mean and sample variance

:::teorema{#media-corretta titolo="Expectation and variance of the sample mean"}
Let $X_1,\ldots,X_n$ be independent and identically distributed, with mean $\mu$ and finite variance $\sigma^2$. The sample mean is an unbiased estimator of $\mu$ and has variance
$$
E[\bar X]=\frac{1}{n}\sum_{i=1}^nE[X_i]=\mu,\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
$$
The formula for the expectation follows from linearity of expectation. The formula for the variance follows from independence, which makes the covariances between distinct observations zero (Chapter 7), and agrees with the result of Chapter 8 on the distribution of the mean. With $n=16$ and $\sigma^2=36$, the standard error of $\bar X$, that is, its standard deviation, is $\sqrt{\dfrac{36}{16}}=1.5$.

Since the variance is $\dfrac{\sigma^2}{n}$, the standard error decreases like $\dfrac{1}{\sqrt n}$. Halving it therefore requires four times as many observations. For example, with $n=64$ and $\sigma^2=36$ the standard error is $\sqrt{\dfrac{36}{64}}=0.75$.

::grafico{f="exp(-(x-20)^2/72)/(6*sqrt(2*PI));exp(-(x-20)^2/18)/(3*sqrt(2*PI));exp(-(x-20)^2/4.5)/(1.5*sqrt(2*PI))" xmin=0 xmax=41 ymin=-0.03 ymax=0.31 nomi="x̄,y" legenda="n=1;n=4;n=16" titolo="Densities of $\bar X$ for a normal population with $\mu=20$ and $\sigma^2=36$. For $n=1$, $4$, and $16$, the standard deviations are $6$, $3$, and $1.5$, respectively."}
:::

::::teorema{#varianza-corretta titolo="Unbiasedness of the sample variance"}
To estimate the population variance $\sigma^2$ one may start from the descriptive variance of Chapter 2, which divides by $n$ the sum of the squared deviations from the mean. The theorem shows that this rule gives on average a value smaller than $\sigma^2$; for example, with $n=3$ its expectation is $\dfrac23\sigma^2$.

Consider an independent and identically distributed sample of size $n>1$, with mean $\mu$ and finite variance $\sigma^2$. Let $D=\sum_{i=1}^n(X_i-\bar X)^2$ denote the sum of squared deviations from the sample mean. Then
$$
E[D]=(n-1)\sigma^2,\qquad
E[S^2]=\sigma^2,\qquad S^2=\frac{D}{n-1}.
$$
The statistic $S^2$ is the **unbiased sample variance** and is an unbiased estimator of $\sigma^2$. With divisor $n$, the statistic $V_n=\dfrac{D}{n}$ instead has expectation $\dfrac{n-1}{n}\sigma^2$, so its bias is $\dfrac{n-1}{n}\sigma^2-\sigma^2=-\dfrac{\sigma^2}{n}$.

The statistic $S^2$ is the variance estimator used in the confidence intervals of Chapter 10 and in the tests of Chapter 11 when $\sigma^2$ is unknown.

:::dimostrazione
Write the deviations from the sample mean in terms of the deviations from the population mean, $X_i-\bar X=(X_i-\mu)-(\bar X-\mu)$. Squaring and summing over $i$ gives
$$
D=\sum_{i=1}^n(X_i-\mu)^2-2(\bar X-\mu)\sum_{i=1}^n(X_i-\mu)+n(\bar X-\mu)^2.
$$
Since $\sum_i(X_i-\mu)=n\bar X-n\mu=n(\bar X-\mu)$, the middle term equals $-2n(\bar X-\mu)^2$, so
$$
D=\sum_{i=1}^n(X_i-\mu)^2-n(\bar X-\mu)^2.
$$
Each term $(X_i-\mu)^2$ has expectation $\sigma^2$ by the definition of variance, so the first summand has expectation $n\sigma^2$. Since $\bar X$ has expectation $\mu$ and variance $\dfrac{\sigma^2}{n}$, the second summand has expectation $nE[(\bar X-\mu)^2]=n\cdot\dfrac{\sigma^2}{n}=\sigma^2$. Therefore $E[D]=n\sigma^2-\sigma^2=(n-1)\sigma^2$, and dividing by $n-1$ gives $E[S^2]=\sigma^2$.
:::
::::

:::esempio{titolo="The same sum with two different divisors"}
For the data $2,5,8$ the observed mean is $5$. The deviations are $-3,0,3$ and the sum of their squares is $18$. The observed unbiased sample variance is $s^2=\dfrac{18}{2}=9$, whereas divisor $n$ gives $v_n=\dfrac{18}{3}=6$. The two numbers use the same deviations and answer two different questions. The value $6$ is the descriptive variance of the three data values, that is, the mean of their squared deviations (Chapter 2). The value $9$ is the estimate of the variance of the population from which the data come, obtained with an unbiased rule.
:::

:::attenzione
If the population mean $\mu$ is known, the deviations are computed from $\mu$ and not from $\bar X$. Each $(X_i-\mu)^2$ has expectation $\sigma^2$, so the statistic $\dfrac1n\sum_i(X_i-\mu)^2$ has expectation $\sigma^2$ and is already unbiased. For example, if $\mu=4$ is known and the data are $2,5,8$, the deviations from $4$ are $-2,1,4$ and the estimate of $\sigma^2$ is $\dfrac{4+1+16}{3}=7$. The divisor $n-1$ is needed only with deviations from the estimated mean $\bar X$.
:::

:::attenzione
The standard deviation $\sigma$ is estimated by $S=\sqrt{S^2}$. Since $\operatorname{Var}(S)=E[S^2]-E[S]^2\ge0$, we have $E[S]^2\le E[S^2]=\sigma^2$, so $E[S]\le\sigma$. Equality holds only when $\operatorname{Var}(S)=0$, that is, when $S$ always takes the same value. Therefore $S$, although it is the square root of an unbiased estimator, has negative bias unless it is constant.

For example, draw two independent observations from a population that takes the values $-1$ and $1$ with probability $\dfrac12$ each, with mean $0$ and variance $\sigma^2=1$. Then $S^2=\dfrac{(X_1-X_2)^2}{2}$, which equals $0$ if the two observations are equal and $2$ if they differ, each case with probability $\dfrac12$. Hence $E[S^2]=1=\sigma^2$, while $E[S]=\dfrac12\cdot0+\dfrac12\sqrt2\approx0.71$, which is less than $\sigma=1$.
:::

## Method of moments

:::definizione{#momenti titolo="Moment equations"}
Suppose the data $1,4,7$ come from a uniform distribution on $[0,\theta]$ with unknown $\theta$. The mean of this distribution is $\dfrac\theta2$ (Chapter 6), while the observed mean is $\dfrac{1+4+7}{3}=4$. Setting $\dfrac\theta2=4$ gives the estimate $\theta=8$.

The moment of order $j$ of $X$, where $j$ is a positive integer, is $m_j(\theta)=E_\theta[X^j]$; the moment of order $1$ is the mean. From the data one computes the corresponding average of powers, called the **sample moment** of order $j$:
$$
m_j(\theta)=E_\theta[X^j],\qquad
\widehat m_j=\frac{1}{n}\sum_{i=1}^n X_i^j.
$$
The **method of moments** takes as the estimate the value of $\theta$ for which the moments of the distribution equal the sample moments. One writes as many equations as there are unknown parameters, using the moments of order $1,2,\ldots$, which must be finite. With one parameter one solves the equation $E_\theta[X]=\bar x$, as in the uniform example. With two parameters one adds the equation $E_\theta[X^2]=\widehat m_2$.

The system may have several solutions, or a solution outside the parameter space; the second example below shows a case of this kind.

The method gives an estimator whenever the moments of the distribution can be written in terms of the parameters, and it only requires solving equations. The section «Parameter-dependent support» shows a case in which its estimate is smaller than an observed value, and maximum likelihood gives a better estimate.
:::

:::esempio{titolo="One mean with two interpretations"}
For a Poisson sample, $E_\lambda[X]=\lambda$, so the method of moments gives $\widehat\lambda=\bar X$. For an exponential sample with rate $\lambda>0$, instead, $E_\lambda[X]=\dfrac1\lambda$ (Chapter 6), so one obtains $\widehat\lambda=\dfrac{1}{\bar X}$ for $\bar X>0$. If the observed mean is $4$ in both cases, the estimates are $4$ and $\dfrac14$. The equation to solve changes with the distribution, because the mean of the distribution is $\lambda$ in the first case and $\dfrac1\lambda$ in the second. In the exponential model $\dfrac1\lambda$ is the mean duration, so if the mean is expressed in minutes the rate $\lambda$ is expressed in $\mathrm{min}^{-1}$, that is, per minute.
:::

:::esempio{titolo="Two moments for the mean and variance"}
For a normal distribution $N(\mu,\sigma^2)$ with both parameters unknown, $E[X]=\mu$ and $E[X^2]=\operatorname{Var}(X)+E[X]^2=\sigma^2+\mu^2$. The first equation gives $\widehat\mu=\bar X$. Substituting into the second gives
$$
\widehat{\sigma^2}=\frac{1}{n}\sum_{i=1}^n X_i^2-\bar X^2
=\frac{1}{n}\sum_{i=1}^n (X_i-\bar X)^2.
$$
The second equality is checked by expanding the square: $\dfrac1n\sum_i(X_i-\bar X)^2=\dfrac1n\sum_iX_i^2-2\bar X\cdot\bar X+\bar X^2=\dfrac1n\sum_iX_i^2-\bar X^2$. For the data $1,3,5$, $\widehat\mu=3$ and $\widehat{\sigma^2}=\dfrac{1+9+25}{3}-9=\dfrac{35}{3}-9=\dfrac83$.

The estimator obtained divides by $n$, so it coincides with the estimator $V_n$ of the theorem on the sample variance and has bias $-\dfrac{\sigma^2}{n}$. The normal model also requires $\sigma^2>0$. With all data equal, for example $2,2,2$, one obtains $\widehat{\sigma^2}=0$, which does not belong to the parameter space, so the system has no admissible solution.
:::

## Likelihood and maximization

:::definizione{#verosimiglianza titolo="Likelihood and log-likelihood"}
Two light bulbs of the same type last $1$ year and $3$ years. Assume the lifetime has an exponential distribution with rate $\lambda$, with density $\lambda e^{-\lambda x}$ for $x>0$ (Chapter 6). The two lifetimes are independent, so the joint density evaluated at the data is the product of the densities (Chapter 7):
$$
\lambda e^{-\lambda\cdot1}\cdot\lambda e^{-\lambda\cdot3}=\lambda^2e^{-4\lambda}.
$$
With $\lambda=\dfrac12$ this quantity equals $\dfrac{e^{-2}}{4}\approx0.034$, with $\lambda=1$ it equals $e^{-4}\approx0.018$. The observed data therefore have a density about $1.8$ times larger if $\lambda=\dfrac12$ than if $\lambda=1$.

For fixed observations $x_1,\ldots,x_n$, the **likelihood** is the function that assigns to each value $\theta$ of the parameter the joint density evaluated at the data, or the joint mass in the discrete case. For an independent sample with common density $f_\theta$, or with a common mass denoted in the same way,
$$
L(\theta;x_1,\ldots,x_n)=\prod_{i=1}^n f_\theta(x_i).
$$
In the light-bulb example $L(\lambda)=\lambda^2e^{-4\lambda}$, and with $n$ lifetimes of sum $s$ one obtains $L(\lambda)=\lambda^ne^{-\lambda s}$.

A **maximum likelihood estimate** is a point of the parameter space at which $L$ attains its largest value. Where $L$ is positive one considers the log-likelihood $\ell(\theta)=\log L(\theta)$. The logarithm is strictly increasing, so $L$ and $\ell$ have their maximum at the same points. The logarithm also turns the product into a sum, and the derivative of a sum is computed term by term. In the example $\ell(\lambda)=2\log\lambda-4\lambda$; the maximum is at $\lambda=\dfrac12$, as the calculation in the example «Estimating an exponential rate» shows.

The method can be used in every model whose density or mass can be written down. The next section applies it to the Bernoulli, exponential, Poisson, and normal models.
:::

:::osservazione
An additive constant in the log-likelihood that does not depend on the parameter leaves the maximizing points unchanged, because it shifts all values of $\ell$ by the same amount and leaves unchanged the difference between the values at two points. For example, for $K$ binomial with known size $n$, observing $K=k$ puts the coefficient $\binom nk$ into the likelihood. With $n=10$ and $k=3$ the coefficient is $\binom{10}{3}=120$ and adds $\log120$ to every value of $\ell$. Since the coefficient depends on the data and on $n$, but not on $p$, the optimization is carried out with the terms $k\log p$ and $(n-k)\log(1-p)$ alone.
:::

:::attenzione
The equation $\ell'(\theta)=0$ finds the maximizing points that lie in the interior of the parameter space and at which $\ell$ is differentiable. The maximum may instead lie at an endpoint of the parameter space, or not exist.

For $L(\theta)=\theta^3$ with $\Theta=[0,1]$ the derivative $3\theta^2$ is positive for $0<\theta<1$, so it does not vanish in the interior, and the maximum is at the endpoint $\theta=1$, where $L$ equals $1$. With $\Theta=(0,1)$ the function approaches $1$ as $\theta\to1$ without reaching this value, so it has no maximum.
:::

:::osservazione
The likelihood is a function of $\theta$ computed with the data fixed, and its integral with respect to $\theta$ can differ from $1$. For the light bulbs $\int_0^{+\infty}\lambda^2e^{-4\lambda}\,d\lambda=\dfrac{2}{4^3}=\dfrac{1}{32}$. Therefore the value $L\!\left(\dfrac12\right)\approx0.034$ is not the probability that $\lambda$ equals $\dfrac12$, and the likelihood serves only to compare values of the parameter with one another.
:::

:::esempio{titolo="Comparing discrete parameter values"}
Consider only the success probabilities $\dfrac14$ and $\dfrac12$. In three independent Bernoulli trials one observes, in order, two successes and one failure. In this model the parameter space contains two points, so the two likelihood values are compared.

$$
L\!\left(\frac14\right)=\left(\frac14\right)^2\frac34=\frac{3}{64},
\qquad
L\!\left(\frac12\right)=\left(\frac12\right)^3=\frac18 .
$$

Since $\dfrac18=\dfrac{8}{64}>\dfrac{3}{64}$, the maximum likelihood value is $\dfrac12$. If only the number of successes were observed, each of the two values would be multiplied by $3$, the number of sequences with two successes in three trials. The comparison would remain the same.

If the model allowed every $p\in[0,1]$, the maximum would instead be at $\dfrac23$, the observed proportion of successes.

::grafico{curve="t,t*t*(1-t),0,1" xmin=-0.1 xmax=1.12 ymin=-0.02 ymax=0.19 nomi="p,L" punti="0.25,0.046875,pieno;0.5,0.125,pieno;0.666667,0.148148,vuoto" segmenti="0.25,0,0.25,0.046875;0.5,0,0.5,0.125;0.666667,0,0.666667,0.148148" etichette="0.21,-0.012,¼;0.47,-0.012,½;0.64,-0.012,⅔" legenda="L(p)=p^2(1-p)" titolo="Likelihood for the observed data. At the allowable values, it equals $\dfrac{3}{64}$ at $\dfrac14$ and $\dfrac18$ at $\dfrac12$. Over all of $[0,1]$ its maximum $\dfrac{4}{27}$ occurs at $\dfrac23$."}
:::

:::osservazione{#invarianza-mle titolo="Estimation after reparameterization"}
The exponential model can be written in terms of the rate $\lambda$ or of the mean duration $\eta=\dfrac1\lambda$, where $\eta$ is read eta. If the maximum likelihood estimate of the rate is $\dfrac14$ per minute, that of the mean duration is $4$ minutes.

For a general model, let $\eta=g(\theta)$ be a new parameter, with $g$ one-to-one, that is, such that each allowable value of $\eta$ corresponds to one and only one value of $\theta$. The likelihood as a function of $\eta$ is $L(g^{-1}(\eta))$, so at the point $\eta=g(\theta)$ it takes the same value that $L$ takes at $\theta$. Therefore, if the maximum in $\theta$ is at $\widehat\theta$, the maximum in $\eta$ is at $g(\widehat\theta)$.

Unbiasedness, which depends on the expectation, is instead checked separately for each parameter. In the exponential model $\bar X$ is an unbiased estimator of $\eta=\dfrac1\lambda$, while $\dfrac1{\bar X}$ has positive bias as an estimator of $\lambda$ (remark «Bias when estimating an exponential rate»).
:::

## Maximum likelihood in common models

::::teorema{#mle-bernoulli titolo="Maximum likelihood for Bernoulli trials"}
Let $x_1,\ldots,x_n$ be observations of independent Bernoulli trials with parameter $p\in[0,1]$. With $k=\sum_i x_i$, the number of successes, the maximum likelihood estimate is $\widehat p=\dfrac{k}{n}$, the proportion of successes in the sample. With $20$ inspected items and $3$ defective ones, $\widehat p=\dfrac{3}{20}=0.15$.

:::dimostrazione
The likelihood is $L(p)=p^k(1-p)^{n-k}$. If $0<k<n$, for $0<p<1$ the log-likelihood is $\ell(p)=k\log p+(n-k)\log(1-p)$ and has derivative
$$
\ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}
=\frac{k-np}{p(1-p)}.
$$
The denominator is positive, so the derivative is positive for $p<\dfrac{k}{n}$ and negative for $p>\dfrac{k}{n}$. At the endpoints the likelihood is zero, because $p^k=0$ at $p=0$ when $k>0$ and $(1-p)^{n-k}=0$ at $p=1$ when $n-k>0$. The maximum is therefore at $\dfrac kn$. If $k=0$, the likelihood is $(1-p)^n$, which decreases, and the maximum is at $0$. If $k=n$, it is $p^n$, which increases, and the maximum is at $1$.
:::
::::

:::esempio{titolo="Estimating an exponential rate"}
For independent exponential observations with rate $\lambda>0$, let $s=\sum_i x_i$ and suppose $s>0$. The likelihood is $L(\lambda)=\lambda^ne^{-\lambda s}$, so the log-likelihood is $\ell(\lambda)=n\log\lambda-\lambda s$ and its derivative is $\ell'(\lambda)=\dfrac{n}{\lambda}-s$. The only zero is $\widehat\lambda=\dfrac ns$, and the derivative is positive before this point and negative after it, so $\dfrac ns$ is the maximum. For the times $2,3,7$ minutes, $s=12$ and $\widehat\lambda=\dfrac{3}{12}=\dfrac14\,\mathrm{min}^{-1}$. The estimate $\dfrac14$ is the reciprocal of the observed mean $4$, so it coincides with the method-of-moments estimate of the example «One mean with two interpretations».

::grafico{f="3*log(x)-12*x" xmin=-0.06 xmax=0.9 ymin=-12.5 ymax=1.3 nomi="λ,ℓ" punti="0.25,-7.1589,pieno" segmenti="0.25,0,0.25,-7.1589" etichette="0.27,0.6,¼" legenda="\ell(\lambda)=3\log\lambda-12\lambda" titolo="Log-likelihood for observed times of $2$, $3$, and $7$ minutes. Its maximum occurs at $\lambda=\dfrac14$ and equals $3\log\dfrac14-3\approx-7.16$."}
:::

:::osservazione{#mle-poisson titolo="Estimating a Poisson rate"}
For independent Poisson observations with parameter $\lambda\ge0$, the product of the masses is
$$
L(\lambda)=\frac{e^{-n\lambda}\lambda^{s}}{\prod_i x_i!},
\qquad s=\sum_i x_i.
$$
Chapter 5 defines the Poisson distribution for $\lambda>0$. Here $\lambda=0$ is also allowed; it corresponds to a variable equal to $0$ with probability $1$, and this distribution is called degenerate.

If $s>0$, for $\lambda>0$ we have $\ell'(\lambda)=\dfrac{s}{\lambda}-n$. The derivative is positive for $\lambda<\dfrac{s}{n}$ and negative for $\lambda>\dfrac{s}{n}$, so the estimate is $\dfrac{s}{n}=\bar x$. With the counts $1,0,2,1,1$, $s=5$ and $\widehat\lambda=\dfrac55=1$.

If $s=0$, that is, if all counts are zero, the product equals $e^{-n\lambda}$, which decreases in $\lambda$. If $\lambda=0$ is allowed, the maximum is at $\lambda=0$. If the model requires $\lambda>0$, the likelihood approaches $1$ as $\lambda\to0^+$ without reaching this value, so it has no maximum.
:::

:::osservazione{#correzione-tasso titolo="Bias when estimating an exponential rate"}
The gamma distribution with shape $n$ and rate $\lambda$ (Chapter 6) has density $\dfrac{\lambda^n}{\Gamma(n)}a^{n-1}e^{-\lambda a}$ for $a>0$. For integer $n$, $\Gamma(n)=(n-1)!$, because $\Gamma(1)=1$ and $\Gamma(k+1)=k\Gamma(k)$. The sum $A=\sum_iX_i$ of $n$ independent exponential times with rate $\lambda$ has this distribution (Chapter 8), so its density is
$$
f_A(a)=\frac{\lambda^n a^{n-1}e^{-\lambda a}}{(n-1)!},\qquad a>0.
$$
For $n>1$ the expectation of $\dfrac1A$ is obtained by integrating $\dfrac1a f_A(a)$. Since $(n-1)!=(n-1)\cdot(n-2)!$,
$$
E\left[\frac1A\right]=\int_0^{+\infty}\frac{\lambda^n a^{n-2}e^{-\lambda a}}{(n-1)!}\,da=\frac{\lambda}{n-1}\int_0^{+\infty}\frac{\lambda^{n-1}a^{n-2}e^{-\lambda a}}{(n-2)!}\,da=\frac{\lambda}{n-1}.
$$
The last integral equals $1$, because it is the integral of the gamma density with shape $n-1$ and rate $\lambda$.

The maximum likelihood estimator $\dfrac nA$ therefore has expectation $\dfrac{n}{n-1}\lambda$ and positive bias $\dfrac{\lambda}{n-1}$. For example, with $n=4$ and $\lambda=3$ the expectation is $\dfrac43\cdot3=4$ and the bias is $1$. The estimator $\dfrac{n-1}{A}$ instead has expectation $\lambda$, so it is unbiased. For the times $2,3,7$ minutes the maximum likelihood estimate is $\dfrac{3}{12}=\dfrac14$, while the unbiased estimate is $\dfrac{2}{12}=\dfrac16$ per minute.
:::

:::osservazione{#mle-normale titolo="Mean and variance in the normal model"}
For an independent normal sample with mean $\mu$ and variance $v=\sigma^2>0$, the logarithm of the product of the densities is
$$
\ell(\mu,v)=-\frac n2\log(2\pi v)-\frac{1}{2v}\sum_{i=1}^n(x_i-\mu)^2 .
$$
The log-likelihood depends on $\mu$ only through $\sum_i(x_i-\mu)^2$, with a negative sign. Expanding the square and using $\sum_i(x_i-\bar x)=0$ gives
$$
\sum_{i=1}^n(x_i-\mu)^2
=\sum_{i=1}^n(x_i-\bar x)^2+n(\bar x-\mu)^2,
$$
which is smallest for $\mu=\bar x$. For fixed variance the maximum in $\mu$ is therefore $\widehat\mu=\bar x$.

If the variance is also estimated, substitute $\mu=\bar x$. Letting $d$ denote the sum of squared deviations from $\bar x$ gives
$$
\ell'(v)=-\frac{n}{2v}+\frac{d}{2v^2}
=\frac{d-nv}{2v^2}.
$$
For $d>0$ the derivative is positive for $v<\dfrac dn$ and negative for $v>\dfrac dn$, so the maximum is at $v=\dfrac dn$. The divisor is $n$, so the estimate coincides with the descriptive variance of Chapter 2 and not with $s^2$. For the data $1,3,5$, $\widehat\mu=3$ and $\widehat v=\dfrac83$, the same values as the method of moments. If the mean is known, the sum of squares is computed about the known mean and the divisor remains $n$.

If $d=0$, that is, if all data are equal, the log-likelihood grows without bound as $v\to0^+$. Since $v=0$ is not allowed in the normal model, in this case there is no maximum.
:::

## Parameter-dependent support

:::esempio{#uniforme titolo="Estimating the endpoint of a uniform distribution"}
Two numbers drawn independently from a uniform distribution on $[0,\theta]$, with unknown $\theta>0$, are $x_1=1$ and $x_2=2$. The set of values where the density is positive is called the support, and here it is the interval $[0,\theta]$. Chapter 6 defines the density of $U(0,\theta)$ as $\dfrac1\theta$ on $(0,\theta)$. Here it is taken equal to $\dfrac1\theta$ also at the endpoints $0$ and $\theta$, and zero elsewhere. Changing the value of a density at a single point changes no probability, because the probability of a single point is zero (Chapter 6, probability at a point).

If $\theta<2$, the observation $2$ lies outside the support, its density is zero, and therefore $L(\theta)=0$. If $\theta\ge2$, both observations lie in $[0,\theta]$ and $L(\theta)=\dfrac1\theta\cdot\dfrac1\theta=\theta^{-2}$. The point $(2,0)$ is excluded from the left branch, while the point $(2,\dfrac14)$ is included in the right branch. The jump occurs at $\theta=2$, the first value for which the observation $2$ belongs to $[0,\theta]$.

With $n$ observations, let $x_1,\ldots,x_n$ be independent observations from $U(0,\theta)$, with nonnegative data and observed maximum $m>0$. Values $\theta<m$ have likelihood zero, while for $\theta\ge m$ one has $L(\theta)=\theta^{-n}$. The function is strictly decreasing for $\theta\ge m$, so the maximum is at $\widehat\theta=m$.

The same check, observation by observation, is needed when the support moves with $\theta$, as in the example «An interval of maximizers» at the end of this section.

::grafico{curve="t,0,0.1,2;t,1/(t*t),2,5.3" xmin=-0.35 xmax=5.5 ymin=-0.075 ymax=0.39 punti="2,0,vuoto;2,0.25,pieno" segmenti="2,0,2,0.25" nomi="θ,L" legenda="L(\theta)=0;L(\theta)=\theta^{-2}" titolo="For observations 1 and 2, L reaches its maximum at the boundary θ = 2."}
:::

::::teorema{#massimo-corretto titolo="Correcting the sample maximum for a uniform distribution"}
With four observations from $U(0,10)$ the sample maximum never exceeds $10$, so on average it stays below $10$; its expectation is $8$. The maximum likelihood estimate $m$ is therefore biased, and the theorem gives the factor that corrects it.

For an independent sample of size $n$ from $U(0,\theta)$, the maximum $M=\max_i X_i$ has expectation $E[M]=\dfrac{n}{n+1}\theta$. The estimator $\dfrac{n+1}{n}M$ is therefore unbiased for $\theta$.

The method-of-moments estimate $2\bar x$ comes instead from the theoretical mean $\dfrac{\theta}{2}$. The unbiased rule uses only the largest observation, while the method-of-moments estimate uses the mean of all the data. For the data $2,3,9$ the first gives $\dfrac43\cdot9=12$, the second $2\cdot\dfrac{14}{3}=\dfrac{28}{3}\approx9.33$.

::grafico{curve="t,4*t^3/10000,0,10" xmin=-0.8 xmax=12 ymin=-0.04 ymax=0.46 nomi="m,y" segmenti="10,0,10,0.4;8,0,8,0.2048" punti="8,0.2048,pieno;10,0.4,pieno" etichette="7.3,0.25,E[M] = 8" legenda="f_M(m)=\dfrac{4m^3}{10^4}" titolo="Density of the maximum of four observations from $U(0,10)$. It is concentrated near the endpoint $10$, but its expectation is $\dfrac45\cdot10=8$."}

:::dimostrazione
The event $\{M\le m\}$ coincides with the event that all observations are less than or equal to $m$. For $0\le m\le\theta$ each observation is at most $m$ with probability $\dfrac m\theta$, and by independence the $n$ probabilities multiply. One obtains
$$
P_\theta(M\le m)=\left(\frac{m}{\theta}\right)^n .
$$
The density of $M$ is the derivative of the distribution function (Chapter 6), so for $0<m<\theta$ it equals $\dfrac{nm^{n-1}}{\theta^n}$. Therefore
$$
E[M]=\int_0^\theta m\cdot\frac{nm^{n-1}}{\theta^n}\,\mathrm dm=\frac{n}{\theta^n}\int_0^\theta m^n\,\mathrm dm
=\frac{n}{\theta^n}\cdot\frac{\theta^{n+1}}{n+1}=\frac{n}{n+1}\theta .
$$
Multiplying by $\dfrac{n+1}{n}$ gives an estimator with expectation $\theta$. For example, with four observations the factor is $\dfrac54$, and an observed maximum of $8$ gives an estimate of $10$. The factor $\dfrac{n+1}{n}$ approaches one as $n$ grows, because the probability of observing at least one value near the endpoint increases with the number of independent observations; with $n=20$ the factor is $1.05$.
:::
::::

:::attenzione
The method-of-moments estimate can give an endpoint smaller than an observed value. For the data $1,1,7$, $\bar x=3$ and hence $2\bar x=6$, while the observation $7$ requires an endpoint at least equal to $7$. The method of moments only requires the mean of the distribution, $\dfrac\theta2$, to equal the observed mean, and it does not check that every observation lies in $[0,\theta]$. In maximum likelihood every $\theta<7$ has likelihood zero, so the estimate is $7$.
:::

:::esempio{titolo="An interval of maximizers"}
For the model $U(\theta,\theta+2)$ use the density $\dfrac12$ on the closed interval $[\theta,\theta+2]$, which is the support. Denoting by $a$ the observed minimum and by $b$ the observed maximum, all observations lie in the support exactly when
$$
\begin{cases}
\theta\le a,\\
\theta+2\ge b.
\end{cases}
$$
The values of $\theta$ that satisfy both conditions form the interval $[b-2,a]$, which is nonempty when $b-a\le2$. On this interval the joint density is constant, because each observation contributes the same factor $\dfrac12$. For the data $3$ and $4$, $[b-2,a]=[2,3]$, so all values from $2$ to $3$, endpoints included, maximize the likelihood. In this model the maximum likelihood estimate is not unique, because every $\theta\in[2,3]$ is an estimate. If instead $b-a>2$, no value of $\theta$ places all the data in the support, and the likelihood is zero for every $\theta$.
:::

## Consistency and efficiency

:::definizione{#consistenza titolo="Consistency in probability"}
For Bernoulli trials with $p=0.4$, the relative frequency of successes $\bar X_n$ over $n$ trials differs from $0.4$ by at least $0.1$ with probability at most $\dfrac{0.4\cdot0.6}{n\cdot0.1^2}$, by Chebyshev's inequality (Chapter 8). The bound equals $0.24$ for $n=100$ and $0.06$ for $n=400$, and it tends to zero as $n$ grows.

A sequence of estimators $T_n$, one for each sample size $n$, is **consistent** for $\theta$ if it converges in probability to the parameter (Chapter 8, law of large numbers), that is, if for every $\varepsilon>0$ and every $\theta\in\Theta$
$$
\lim_{n\to\infty}P_\theta(|T_n-\theta|>\varepsilon)=0.
$$
The symbol $P_\theta$ denotes a probability computed assuming that $\theta$ is the true value of the parameter, like $E_\theta$. The event $\{|T_n-\theta|>\varepsilon\}$ contains the samples in which the error of the estimate exceeds the threshold $\varepsilon$.

A consistent estimator gives, with a large enough amount of data, an estimate within $\varepsilon$ of the parameter with probability close to $1$. Unbiasedness concerns instead the expectation at a fixed sample size. The two examples at the end of this section show an estimator that is biased and consistent and one that is unbiased and not consistent.
:::

:::teorema{#consistenza-mse titolo="Mean squared error and consistency"}
If $MSE_\theta(T_n)\to 0$ for every $\theta\in\Theta$, then $T_n$ is consistent.

Markov's inequality (Chapter 8) states that if $Y\ge0$ has finite expectation and $a>0$, then $P(Y\ge a)\le\dfrac{E[Y]}{a}$. Applied to $Y=(T_n-\theta)^2$ with $a=\varepsilon^2$, since the event $\{|T_n-\theta|>\varepsilon\}$ is contained in $\{(T_n-\theta)^2\ge\varepsilon^2\}$, it gives
$$
P_\theta(|T_n-\theta|>\varepsilon)
\le \frac{MSE_\theta(T_n)}{\varepsilon^2}.
$$
The right-hand side tends to zero, so the left-hand side does too. Since $MSE_\theta(T_n)=\operatorname{Var}_\theta(T_n)+b_\theta(T_n)^2$, the condition holds when the bias and the variance both tend to zero. For the mean of an independent sample with finite variance, the mean squared error is $\dfrac{\sigma^2}{n}$ and tends to zero. With $\sigma^2=9$, $\varepsilon=0.5$, and $n=100$ the bound equals $\dfrac{9}{100\cdot0.25}=0.36$.
:::

:::esempio{titolo="An estimator can be both biased and consistent"}
The maximum $M_n$ of a sample from $U(0,\theta)$ has expectation $\dfrac{n}{n+1}\theta$, so it is biased for every $n$. Every observation lies in $[0,\theta]$, so $M_n\le\theta$, and the error $|M_n-\theta|$ exceeds $\varepsilon$ only when $M_n<\theta-\varepsilon$. For $0<\varepsilon<\theta$, using $P_\theta(M_n\le m)=\left(\dfrac m\theta\right)^n$ with $m=\theta-\varepsilon$,
$$
P_\theta(|M_n-\theta|>\varepsilon)
=P_\theta(M_n<\theta-\varepsilon)
=\left(1-\frac{\varepsilon}{\theta}\right)^n.
$$
The base lies between zero and one, so the power tends to zero. For $\varepsilon\ge\theta$ the probability is already zero. The sample maximum is therefore consistent even without correction.

::grafico{xmin=-0.8 xmax=21.5 ymin=-0.08 ymax=1.1 nomi="n,P" punti="1,0.9;2,0.81;3,0.729;4,0.6561;5,0.5905;6,0.5314;7,0.4783;8,0.4305;9,0.3874;10,0.3487;11,0.3138;12,0.2824;13,0.2542;14,0.2288;15,0.2059;16,0.1853;17,0.1668;18,0.1501;19,0.1351;20,0.1216" titolo="Values of $\left(1-\dfrac{\varepsilon}{\theta}\right)^n$ with $\dfrac{\varepsilon}{\theta}=\dfrac{1}{10}$ for $n$ ranging from $1$ to $20$. For $n=20$, the probability of an error larger than $\varepsilon$ is about $0.12$."}
:::

:::attenzione
Consider a sample from a population with positive variance and the estimator $T_n=X_1$, which uses only the first observation whatever $n$ is. It is unbiased for the mean, because $E[X_1]=\mu$. The distribution of $X_1$, however, does not change as $n$ grows. If, for example, the population is normal with standard deviation $\sigma=1$, then $P(|X_1-\mu|>1)\approx0.32$ for every $n$, and this probability does not tend to zero. The estimator is therefore unbiased at every sample size but not consistent.
:::

:::osservazione{#efficienza titolo="Comparing precision under the same conditions"}
For two independent observations with the same mean and variance $\sigma^2>0$, consider $T=\dfrac{X_1+X_2}{2}$ and $U=\dfrac{3X_1+X_2}{4}$. The weights in both combinations sum to one, so both estimators are unbiased for the mean. By the formula for the variance of a linear combination of independent variables (Chapter 7), the variances are
$$
\operatorname{Var}(T)=\frac{1+1}{4}\sigma^2=\frac{\sigma^2}{2},\qquad
\operatorname{Var}(U)=\frac{9+1}{16}\sigma^2=\frac{5\sigma^2}{8}.
$$
The mean $T$ is more precise with the same data, because its variance is smaller.

For two unbiased estimators of the same parameter, under the same model and with the same sample size, the **relative efficiency** of $T$ with respect to $U$ is the ratio of the variances $\dfrac{\operatorname{Var}(U)}{\operatorname{Var}(T)}$. Here it equals $\dfrac{5}{8}\cdot2=\dfrac54$, so $T$ is more efficient than $U$. If the two observations are not independent, the variance also contains the covariance term (Chapter 7).

If one of the two estimators is biased, the mean squared errors are compared, since they also include the bias, as in the following example.
:::

:::esempio{titolo="The comparison can depend on the parameter"}
Let $X$ be a measurement with mean $\theta$ and variance $1$. Compare $T=X$ and $U=\dfrac X2$. For $T$ the mean squared error is $1$. For $U$ the variance is $\dfrac14$ and the bias is $\dfrac\theta2-\theta=-\dfrac{\theta}{2}$, so $MSE_\theta(U)=\dfrac14+\dfrac{\theta^2}{4}=\dfrac{1+\theta^2}{4}$. For $\theta=0$ the second rule has mean squared error $\dfrac14$, whereas for $\theta=2$ it has mean squared error $\dfrac54$. The estimator $U$ halves the measurement, so it has smaller variance than $T$ for every $\theta$, but it has a bias that grows with $|\theta|$. One has $\dfrac{1+\theta^2}{4}<1$ exactly when $\theta^2<3$, so $U$ has the smaller error for $|\theta|<\sqrt3$ and the larger error for $|\theta|>\sqrt3$.

::grafico{f="1;(1+x^2)/4" xmin=-3.1 xmax=3.1 ymin=-0.25 ymax=2.9 nomi="θ,R" punti="-1.73205,1;1.73205,1;0,0.25;2,1.25" segmenti="-1.73205,0,-1.73205,1;1.73205,0,1.73205,1" legenda="MSE_\theta(T);MSE_\theta(U)" titolo="Near zero, the curve for U lies below the line for T. The two mean squared errors coincide when θ equals −√3 or √3."}
:::
