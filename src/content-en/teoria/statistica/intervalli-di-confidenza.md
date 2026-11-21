---
titolo: "Confidence intervals and sample size"
sommario: "Intervals for means, proportions, and variances, comparisons between samples, and planning for a specified precision."
---

In Chapter 9 the mean of a sample was used as an estimate of the population mean. If 36 items from a production run are weighed and their mean is $70\,\mathrm{g}$, the estimate of the mean mass $\mu$ of all the items is $70\,\mathrm{g}$. Another group of 36 items would give a different mean, however, so the estimate equals $\mu$ only by chance. A confidence interval adds a margin to the estimate. If the standard deviation of the masses is $6\,\mathrm{g}$, the 36 items give the interval $[68.04,71.96]\,\mathrm{g}$. The rule that produces it, applied to many different samples, gives an interval containing $\mu$ in 95 cases out of 100.

This chapter computes intervals of this kind for the mean of a population, for a proportion, for a variance, and for the difference between two means. They answer questions such as "between which values does the percentage of students who take the bus lie?". If 64 of 200 students interviewed take the bus, the estimate is $0.32$ and the $95\,\%$ interval runs from about $0.26$ to $0.38$. The last section computes how much data to collect so that the margin does not exceed a value fixed before the survey, for example $0.03$.

The calculations use results from earlier chapters. The normal, chi-square, and Student's t distributions and their quantiles are in Chapter 6. The distribution of the sample mean, the standard error, and the central limit theorem are in Chapter 8. Chapter 11 uses the same calculations to decide between two hypotheses about a parameter, and Chapter 12 constructs intervals for the slope of a regression line and for a new observation.

## Coverage and the observed interval

:::definizione{#confidenza titolo="Confidence procedures"}
A normal population has standard deviation $\sigma=6\,\mathrm{g}$ and unknown mean $\mu$. Weigh 36 items, compute the sample mean $\bar X$, and take the interval from $\bar X-1.96$ to $\bar X+1.96$. Before the weighing, $\bar X$ is a random variable, so the two endpoints are also random and change from one sample to another. The theorem on the normal interval for the mean shows that the interval constructed in this way contains $\mu$ with probability $0.95$, whatever the value of $\mu$. After the weighing, with observed mean $\bar x=70\,\mathrm{g}$, the endpoints become the numbers $68.04$ and $71.96$.

In general, the unknown parameter is denoted by $\theta$, read theta; it may be, for example, a mean $\mu$ or a proportion $p$. A random sample gives two statistics $L$ and $U$, called the lower and upper endpoints. The probability that the random interval $[L,U]$ contains $\theta$ is the **coverage probability** at $\theta$. A procedure has confidence level $1-\alpha$, where $\alpha$, read alpha, is a number with $0<\alpha<1$, if it guarantees
$$
P_\theta(L\leq\theta\leq U)\geq 1-\alpha
\qquad\text{for every }\theta.
$$
The subscript in $P_\theta$ indicates that the probability is computed assuming that the parameter equals $\theta$. In the weighing example $\alpha=0.05$ and the level is $0.95$, that is, $95\,\%$. The interval produced by a procedure with level $1-\alpha$ is called a **confidence interval** at level $1-\alpha$.

If the coverage probability equals $1-\alpha$ for every $\theta$, the procedure has exact coverage equal to the level. For other procedures the coverage exceeds the level at some values of $\theta$, as happens for the exact binomial interval in the section on proportions.

For a single interval, the **coverage indicator** equals $1$ if the interval contains $\theta$ and $0$ otherwise. With $\theta=5$, the interval $[4,6]$ has indicator $1$ and the interval $[5.5,7]$ has indicator $0$. Before the data are collected, the indicator is a Bernoulli variable, as in Chapter 5, and its expected value is the coverage probability. If sampling is repeated many times with the same rule, the fraction of intervals with indicator $1$ approaches the coverage probability, by the law of large numbers in Chapter 8. For a procedure with exact coverage, the level $1-\alpha$ is therefore the value approached by the fraction of intervals that contain the parameter when the same rule is applied to many samples.
:::

:::esempio{titolo="Coverage under repeated sampling"}
A laboratory measures the concentration of the same solution under controlled conditions and repeats $200$ series of measurements. In each series it computes an interval for the mean concentration with the same $95\,\%$ procedure. The number of intervals containing the mean concentration is the sum of the $200$ coverage indicators. If the assumptions of the procedure are satisfied and coverage is exact, each indicator has expected value $0.95$, so by linearity of expectation the expected number of intervals containing the mean concentration is $200\cdot0.95=190$. In a particular sequence of $200$ series the observed count may differ, for example $187$, because $190$ is the average count over many repetitions of the whole sequence. Coverage is therefore a property of the procedure, computed under its assumptions.
:::

:::esempio{titolo="Ten intervals from the same procedure"}
A normal population has $\mu=70\,\mathrm{g}$ and $\sigma=6\,\mathrm{g}$. Ten independent samples, each of $36$ units, are drawn from it. The standard error of the mean, that is, the standard deviation of $\bar X$ seen in Chapter 8, is $\dfrac{6}{\sqrt{36}}=1\,\mathrm{g}$. Each $95\,\%$ interval therefore has half-width, that is, distance from the center to each endpoint, equal to $1.96\cdot1=1.96\,\mathrm{g}$. The ten observed means are $69.2$, $70.8$, $71.1$, $68.6$, $70.3$, $72.3$, $69.7$, $70.5$, $68.9$, and $70.1\,\mathrm{g}$. The sixth interval is $[70.34,74.26]\,\mathrm{g}$ and excludes $\mu$ because $72.3-1.96=70.34>70$. The other nine intervals contain $\mu$, so nine coverage indicators out of ten equal $1$. The centers vary from sample to sample, whereas the half-width stays the same because it depends only on $\sigma$, $n$, and the confidence level.

::grafico{assi=0 xmin=65.4 xmax=75.4 ymin=-1.3 ymax=11.6 linee="65.9,0 74.9,0;66,-0.15 66,0.15;68,-0.15 68,0.15;72,-0.15 72,0.15;74,-0.15 74,0.15;70,0 70,10.8;67.24,1 71.16,1;68.84,2 72.76,2;69.14,3 73.06,3;66.64,4 70.56,4;68.34,5 72.26,5;67.74,7 71.66,7;68.54,8 72.46,8;66.94,9 70.86,9;68.14,10 72.06,10" poligoni="70.34,5.82 74.26,5.82 74.26,6.18 70.34,6.18" punti="69.2,1;70.8,2;71.1,3;68.6,4;70.3,5;72.3,6;69.7,7;70.5,8;68.9,9;70.1,10" etichette="65.75,-0.7,66;67.75,-0.7,68;69.75,-0.7,70;71.75,-0.7,72;73.75,-0.7,74;70.25,11.2,μ = 70;72.6,6.75,excludes μ;74.5,-0.7,g" titolo="Each horizontal segment is an interval from one sample, centered on its observed mean. The highlighted segment for the sixth sample is the only one that excludes $\mu=70$."}
:::

:::attenzione{titolo="Interpreting an observed interval"}
Suppose that an observed $95\,\%$ interval is $[8,12]$ and that the population parameter equals $13$. The endpoints are now fixed numbers and the event $8\leq 13\leq 12$ is false, so it has probability $0$. After the observation, the interval $[8,12]$ either contains the parameter or does not, so the statement "the parameter lies in $[8,12]$ with probability $0.95$" is wrong.

The probability $0.95$ refers to the random endpoints $L$ and $U$ before the data are collected. What can be said of the interval $[8,12]$ is that it was produced by a rule that gives an interval containing the parameter in $95\,\%$ of samples.

::grafico{assi=0 xmin=6.8 xmax=14.5 ymin=-0.88 ymax=0.9 linee="7.2,0 14.0,0;8,-0.16 8,0.15;12,-0.16 12,0.15" poligoni="8,-0.13 12,-0.13 12,0.13 8,0.13" punti="13,0" etichette="7.93,-0.42,8;11.87,-0.42,12;12.87,-0.42,13;8.8,0.46,observed interval;12.63,0.46,θ" titolo="The highlighted segment runs from 8 to 12. The point θ = 13 represents the fixed parameter and lies outside the segment."}
:::

:::definizione{#pivot titolo="Pivotal quantities and lower-tail quantiles"}
In the weighing example, with $\sigma=6\,\mathrm{g}$ and $n=36$, consider the quantity
$$
Z=\frac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}=\frac{\bar X-\mu}{1}.
$$
The quantity $Z$ contains the data, through $\bar X$, and the unknown parameter $\mu$. By the theorem "Mean and variance in a normal sample" in Chapter 8, $Z$ has a standard normal distribution whatever the value of $\mu$. The probability $P(-1.96\leq Z\leq1.96)\approx0.95$ can therefore be computed without knowing $\mu$. Solving the two inequalities for $\mu$ gives $\bar X-1.96\leq\mu\leq\bar X+1.96$, which is the weighing rule.

A **pivotal quantity** is a function of the sample and the parameter of interest, such as $Z$, whose distribution is known and does not depend on unknown parameters.

Probabilities for the pivot are expressed through quantiles, defined in Chapter 6. For a continuous distribution with an increasing cumulative distribution function, the quantile of order $p$ is the value with probability $p$ to its left. For the standard normal, for example, the quantile of order $0.975$ is about $1.96$, because $P(Z\leq1.96)\approx0.975$. The symbols $z_p$, $t_{\nu,p}$, and $\chi^2_{\nu,p}$ denote the quantiles of order $p$ of the standard normal, Student's t, and chi-square distributions, respectively, the three distributions defined in Chapter 6. The symbol $\nu$, read nu, gives the degrees of freedom for the last two distributions. These quantiles are called **lower-tail quantiles** because $p$ is the probability to the left.

A two-sided interval has one endpoint on each side of the estimate. To construct an equal-tailed one, take the quantiles of orders $\dfrac{\alpha}{2}$ and $1-\dfrac{\alpha}{2}$, which leave probability $\dfrac{\alpha}{2}$ outside on the left and $\dfrac{\alpha}{2}$ on the right. At $95\,\%$, $\alpha=0.05$ and the orders are $0.025$ and $0.975$. The pivot falls between the two quantiles with probability $1-\alpha$. The probabilities are read from the distribution of the pivot; solving the two inequalities for the parameter gives the endpoints of the interval. The order of the endpoints depends on the form of the pivot. In the interval for the variance, for example, the larger quantile gives the lower endpoint.
:::

:::osservazione
A confidence interval for the mean concerns a fixed number, the population mean $\mu$. A **prediction interval**, by contrast, is an interval that contains, with a specified probability, a new observation from the population, for example the mass of the next item weighed. It is constructed in Chapter 12, on regression.

With known standard deviation $6\,\mathrm{g}$ and $36$ independent measurements, the sample mean has standard deviation $1\,\mathrm{g}$, and the $95\,\%$ interval for $\mu$ has half-width $1.96\,\mathrm{g}$. A new weighing from the same population still has standard deviation $6\,\mathrm{g}$. Even if $\mu=70\,\mathrm{g}$ were known exactly, $95\,\%$ of new weighings would fall between $70-1.96\cdot6=58.24\,\mathrm{g}$ and $70+1.96\cdot6=81.76\,\mathrm{g}$, that is, in an interval of half-width $11.76\,\mathrm{g}$. The prediction endpoints are therefore farther from the center than the confidence endpoints for the mean, because the variability of a single observation remains even when $\mu$ is known.
:::

## Mean with known standard deviation

::::teorema{#media-nota titolo="Normal confidence interval for the mean"}
Let $X_1,\ldots,X_n$ be independent observations with distribution $N(\mu,\sigma^2)$, where $n\geq1$ and the standard deviation $\sigma>0$ is known. The sample mean is $\bar X=\dfrac{1}{n}\sum_{i=1}^n X_i$. Writing $z=z_{1-\frac{\alpha}{2}}$, the interval
$$
\left[\bar X-z\frac{\sigma}{\sqrt n},\ \bar X+z\frac{\sigma}{\sqrt n}\right]
$$
has exact coverage $1-\alpha$ for $\mu$. The quantity $\dfrac{\sigma}{\sqrt n}$ is the **standard error** of the mean. The product $z\dfrac{\sigma}{\sqrt n}$ is the **half-width** of the interval, also called the **margin**; the width of the interval is twice the margin.

The theorem applies when the population standard deviation is known, for example from the specifications of a measuring instrument used for a long time. When $\sigma$ is unknown, the t interval of the next section is used.

:::dimostrazione
By the theorem "Mean and variance in a normal sample" in Chapter 8, the mean of independent normal observations has a normal distribution with mean $\mu$ and variance $\dfrac{\sigma^2}{n}$. The pivot $Z=\dfrac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}$ therefore has a standard normal distribution. Since the standard normal is symmetric about $0$, the quantile of order $\dfrac{\alpha}{2}$ is $-z$, and
$$
P\!\left(-z\leq\frac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}\leq z\right)=1-\alpha.
$$
The denominator $\dfrac{\sigma}{\sqrt n}$ is positive, so multiplying both inequalities by $\dfrac{\sigma}{\sqrt n}$ keeps their direction and gives
$$
-z\frac{\sigma}{\sqrt n}\leq\bar X-\mu\leq z\frac{\sigma}{\sqrt n}.
$$
Subtracting $\bar X$ from all three parts gives $-\bar X-z\dfrac{\sigma}{\sqrt n}\leq-\mu\leq-\bar X+z\dfrac{\sigma}{\sqrt n}$. Multiplying by $-1$ reverses the inequalities, hence
$$
\bar X-z\frac{\sigma}{\sqrt n}\leq\mu\leq\bar X+z\frac{\sigma}{\sqrt n}.
$$
This event is equivalent to the one involving the pivot, so it has the same probability $1-\alpha$. The other proofs in the chapter solve the inequalities in the same way.
:::
::::

:::esempio{titolo="The quantile and the two tails"}
For a $95\,\%$ confidence level, $\alpha=0.05$ and each tail has area $\dfrac{\alpha}{2}=0.025$. The positive quantile is $z_{0.975}\approx1.96$. With $n=36$, $\bar x=70\,\mathrm{g}$, and $\sigma=6\,\mathrm{g}$, the standard error is $\dfrac{6}{\sqrt{36}}=1\,\mathrm{g}$ and the margin is $1.96\,\mathrm{g}$, giving approximately $[68.04,71.96]\,\mathrm{g}$. In the figure, $\varphi(z)$, read phi of z, is the standard normal density, denoted by $f_Z$ in Chapter 6. The central $95\,\%$ in the figure refers to the pivot, which is a number without units. The interval endpoints are expressed in the units of the mean, grams.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1.96;1.96" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-2.55,0.13,−1.96;2.06,0.108,1.96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.48 nomi="z,y" legenda="\varphi(z)" titolo="The shaded area is approximately 95%. The two remaining tails each have area 2.5%."}

:::

:::osservazione
Consider independent and identically distributed observations, with finite known variance, from a nonnormal population. In this case the same formula has asymptotic coverage $1-\alpha$, that is, its coverage probability approaches $1-\alpha$ as $n$ grows. The reason is the **central limit theorem** of Chapter 8, by which the distribution of $Z$ approaches the standard normal as $n$ grows. For a fixed $n$ the coverage is not guaranteed, and its distance from the level depends on the shape of the population. With a strongly skewed population, such as waiting times, or with values far from the mean that have non-negligible probability, a sample of a few observations gives coverage far from the level.
:::

:::esempio{titolo="Effect of sample size on the margin of error"}
With $\sigma=10\,\mathrm{g}$, $z=1.96$, and $n=25$, the standard error is $\dfrac{10}{5}=2\,\mathrm{g}$ and the half-width is $1.96\cdot2=3.92\,\mathrm{g}$. With $n=100$ the standard error is $\dfrac{10}{10}=1\,\mathrm{g}$ and the half-width becomes $1.96\,\mathrm{g}$. Quadrupling $n$ has halved the half-width, because it has doubled $\sqrt n$. Two different samples give different observed means, so the two intervals have different centers; the relationship with $\sqrt n$ concerns only the width, at a fixed confidence level and standard deviation.

For the same sample of $25$ observations, instead, the center remains the observed mean and only the quantile changes. Going from $90\,\%$ to $95\,\%$, the quantile rises from $1.645$ to $1.96$, the half-width from $1.645\cdot2=3.29\,\mathrm{g}$ to $3.92\,\mathrm{g}$, and the interval widens about the same mean.
:::

## Mean with unknown standard deviation

::::teorema{#student titolo="The t interval for the mean"}
When $\sigma$ is unknown, it is replaced in the pivot by an estimate computed from the data. Consider a sample of $n>1$ independent and identically distributed normal observations with unknown positive variance. The unbiased sample variance is
$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2,
$$
and its square root $S$ estimates the population standard deviation. Writing $\nu=n-1$ and $q=t_{\nu,1-\frac{\alpha}{2}}$, a quantile of Student's t, the interval $\left[\bar X-q\dfrac{S}{\sqrt n},\,\bar X+q\dfrac{S}{\sqrt n}\right]$ has exact coverage $1-\alpha$ for $\mu$. The quantity $\dfrac{S}{\sqrt n}$ is the estimated standard error of the mean.

:::dimostrazione
Write the standardized mean with $S$ in the denominator as a ratio of two quantities with known distributions. Under normality, $Z=\dfrac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}$ is standard normal. By the theorem "The t statistic and the sample variance" in Chapter 8, $V=\dfrac{(n-1)S^2}{\sigma^2}$ has a chi-square distribution with $\nu$ degrees of freedom and is independent of $\bar X$, hence of $Z$. In Chapter 6 Student's t distribution with $\nu$ degrees of freedom is defined as the distribution of $\dfrac{Z}{\sqrt{\frac{V}{\nu}}}$ with $Z$ and $V$ independent. Cancelling $\sigma$ gives
$$
T=\frac{Z}{\sqrt{\frac{V}{\nu}}}
 =\frac{\bar X-\mu}{\frac{S}{\sqrt n}},
$$
which therefore has Student's t distribution with $\nu$ degrees of freedom and does not contain $\sigma$. By the symmetry of the t distribution, $P(-q\leq T\leq q)=1-\alpha$. The inequalities are solved for $\mu$ as in the proof of the normal interval, with $S$ in place of $\sigma$ and $q$ in place of $z$. The event $S=0$ has probability zero under the normal model with positive variance.
:::
::::

:::esempio{titolo="Effect of estimating variability"}
A normal sample of $9$ processing times has mean $\bar x=18\,\mathrm{min}$ and sample standard deviation $s=3\,\mathrm{min}$, calculated with the degrees-of-freedom correction. The estimated standard error is $\dfrac{3}{\sqrt9}=1\,\mathrm{min}$, and $\nu=9-1=8$. At the $95\,\%$ confidence level, $t_{8,0.975}\approx2.306$, so the margin is $2.306\,\mathrm{min}$ and the interval is approximately $[15.694,20.306]\,\mathrm{min}$. With the same standard error, the normal quantile $1.96$ would give the narrower interval $[16.04,19.96]\,\mathrm{min}$. The t quantile is larger because it accounts for the additional variability from estimating $\sigma$ by $s$.

::grafico{f="0.38669*(1+x*x/8)^(-4.5);exp(-x*x/2)/sqrt(2*PI)" area="0.38669*(1+x*x/8)^(-4.5);0;-2.306;2.306" segmenti="-2.306,0,-2.306,0.039;2.306,0,2.306,0.039;-1.96,0,-1.96,0.0584;1.96,0,1.96,0.0584" etichette="2.38,0.085,2.306;0.95,0.03,1.96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.46 nomi="t,y" legenda="f_{t_8}(t);\varphi(t)" titolo="The shaded area under the t density with $8$ degrees of freedom equals $0.95$ and lies between $-2.306$ and $2.306$. The dashed standard normal density has thinner tails and encloses $95\,\%$ between $-1.96$ and $1.96$."}
:::

:::osservazione
The $n$ deviations $X_i-\bar X$ from the sample mean sum to zero, so once $n-1$ deviations are known, the last one is determined. With $n=3$, for example, if the first two deviations are $-2$ and $1$, the third is $1$. In the sum of squared deviations, therefore, $n-1$ values are free, and there are $n-1$ degrees of freedom.

As $\nu$ increases, the t quantiles approach the standard normal quantiles. For example, $t_{8,0.975}\approx2.306$, $t_{30,0.975}\approx2.042$, and $z_{0.975}\approx1.96$.

If the population is not normal, the exact t distribution of the pivot no longer holds. With independent and identically distributed observations and positive finite variance, however, $S$ approaches $\sigma$ as $n$ grows, and the distribution of the mean standardized with $S$ approaches the standard normal. The t formula then gives an approximate procedure, with coverage close to the level for large $n$.
:::

:::osservazione
The letter $s$ denotes the observed value of $S$. Given only the sum of squared deviations, obtain $s$ by first dividing the sum by $n-1$ and then taking the square root. For example, for $n=10$ and a sum of $90\,\mathrm{mm}^2$, this gives $s^2=\dfrac{90}{9}=10\,\mathrm{mm}^2$ and $s=\sqrt{10}\,\mathrm{mm}$. The estimated standard error is therefore $\dfrac{\sqrt{10}}{\sqrt{10}}=1\,\mathrm{mm}$. Two different divisors appear in the calculation. The divisor $n-1=9$ is used to estimate the population variance, whereas dividing by $\sqrt n=\sqrt{10}$ goes from the standard deviation of a single observation to that of the mean of $n$ observations.
:::

## Binomial proportions

:::definizione{#proporzione titolo="The Wald interval and observed counts"}
Interview $200$ students; $64$ say that they take the bus. Each interview is a Bernoulli trial, as in Chapter 5, with success "takes the bus". In the general case, consider $n$ independent Bernoulli trials, each with success probability $p$. The random success count $K$ has a binomial distribution, and the sample proportion is $\widehat p=\dfrac{K}{n}$, read p hat. In the example $\widehat p=\dfrac{64}{200}=0.32$.

By Chapter 8 the standard error of $\widehat p$ is $\sqrt{\dfrac{p(1-p)}{n}}$, which contains the unknown value $p$. The **Wald** procedure estimates the standard error by replacing $p$ with $\widehat p$ and, with $z=z_{1-\frac{\alpha}{2}}$, uses the interval
$$
\widehat p\ \pm\ z\sqrt{\frac{\widehat p(1-\widehat p)}{n}}.
$$
In the example the estimated standard error is $\sqrt{\dfrac{0.32\cdot0.68}{200}}\approx0.0330$ and at $95\,\%$ the margin is about $1.96\cdot0.0330\approx0.0647$, so the interval is approximately $[0.255,0.385]$.

The coverage of the Wald interval is approximate, because it relies on the normal approximation to the binomial seen in Chapter 8. The observed counts of successes and failures help assess whether the approximation is plausible. The rule of thumb asks for at least ten successes and at least ten failures, and gives no exact guarantee on coverage. In the example there are $64$ successes and $136$ failures, so the rule is satisfied.
:::

:::attenzione{titolo="Samples in which every outcome is the same"}
In $12$ trials one can observe zero successes even when the success probability is $0.10$; this happens with probability $0.9^{12}\approx0.28$. For these data the Wald interval has center $\widehat p=0$ and half-width $z\sqrt{\dfrac{0\cdot1}{12}}=0$, and gives $[0,0]$. The zero estimate of variability arises only from the observed value $\widehat p=0$. Under the binomial model with $p=0.10$, variability is positive, and the interval $[0,0]$ excludes the true value $0.10$.
:::

::::teorema{#wilson titolo="The Wilson interval"}
The Wald interval computes the standard error with $\widehat p$, and with $\widehat p=0$ finds it to be zero. The **Wilson** interval instead computes the standard error with each value of $p$ being assessed, and contains the values $p\in[0,1]$ for which
$$
\left|\widehat p-p\right|\leq z\sqrt{\frac{p(1-p)}{n}}.
$$
For the same model as the Wald interval, these values form the interval with endpoints $c-h$ and $c+h$, where
$$
\begin{aligned}
c&=\frac{\widehat p+\frac{z^2}{2n}}{1+\frac{z^2}{n}},\\[6pt]
h&=\frac{z}{1+\frac{z^2}{n}}
\sqrt{\frac{\widehat p(1-\widehat p)}{n}+\frac{z^2}{4n^2}}.
\end{aligned}
$$
Multiplying numerator and denominator by $n$, the half-width can also be written $h=\dfrac{z}{n+z^2}\sqrt{n\widehat p(1-\widehat p)+\dfrac{z^2}{4}}$ and the center $c=\dfrac{n\widehat p+z^2\cdot\frac12}{n+z^2}$. The center is therefore the weighted average of the observed proportion and $\dfrac12$, with weights $n$ and $z^2$, and lies between $\widehat p$ and $\dfrac12$. Coverage is still approximate.

:::dimostrazione
The idea is to keep the values of $p$ from which the observed proportion is at most $z$ standard errors away, with the standard error computed using that same $p$. Both sides of the condition $\left|\widehat p-p\right|\leq z\sqrt{\dfrac{p(1-p)}{n}}$ are nonnegative, so squaring gives an equivalent condition. Multiplying then by $n>0$ gives
$$
n(\widehat p-p)^2\leq z^2p(1-p).
$$
Expanding both sides and collecting powers of $p$ gives
$$
(n+z^2)p^2-(2n\widehat p+z^2)p+n\widehat p^2\leq0.
$$
The coefficient of $p^2$ is $n+z^2>0$, so the inequality holds between the two roots of the polynomial. The mean of the roots is $\dfrac{2n\widehat p+z^2}{2(n+z^2)}$, which equals $c$ after dividing numerator and denominator by $n$. The discriminant is $(2n\widehat p+z^2)^2-4(n+z^2)n\widehat p^2=z^4+4nz^2\widehat p(1-\widehat p)$, so half the difference of the roots is
$$
\frac{z\sqrt{z^2+4n\widehat p(1-\widehat p)}}{2(n+z^2)}
=\frac{z}{n+z^2}\sqrt{n\widehat p(1-\widehat p)+\frac{z^2}{4}},
$$
which is $h$. The quadratic inequality is also defined at $p=0$ and $p=1$, so its solution set gives the interval at the endpoints as well.
:::
::::

:::esempio{titolo="Upper endpoint with zero successes"}
With $n=12$ and $\widehat p=0$, the Wilson inequality becomes $(12+z^2)p^2-z^2p\leq0$, that is, $p\big((12+z^2)p-z^2\big)\leq0$. The roots are $0$ and $\dfrac{z^2}{12+z^2}$; with $z=1.96$ the second equals $\dfrac{3.8416}{15.8416}\approx0.2425$. The two-sided $95\,\%$ Wilson interval is thus approximately $[0,0.2425]$, whereas the Wald interval gave $[0,0]$.

The **exact binomial interval** with equal tails uses the binomial distribution of $K$ directly, with no normal approximation. Given $k$ observed successes, the upper endpoint is the value of $p$ for which $P_p(K\leq k)=\dfrac{\alpha}{2}$, and the lower endpoint is the value of $p$ for which $P_p(K\geq k)=\dfrac{\alpha}{2}$; with $k=0$ the lower endpoint is $0$. With zero successes in $12$ trials, the upper endpoint solves $(1-p)^{12}=0.025$, so it equals $1-0.025^{\frac{1}{12}}\approx0.2646$, and the exact interval $[0,0.2646]$ is wider than the Wilson interval. The discreteness of $K$, that is, the fact that $K$ takes only integer values, makes it impossible to obtain coverage equal to $0.95$ for every $p$. The exact construction therefore guarantees coverage at least equal to the stated level, and for many values of $p$ the coverage is higher.

::grafico{f="15.8416*x^2-3.8416*x" area="0;15.8416*x^2-3.8416*x;0;0.2425" punti="0,0;0.2425,0" etichette="0.25,-0.09,0.2425" xmin=-0.04 xmax=0.36 ymin=-0.3 ymax=0.6 nomi="p,y" legenda="(12+z^2)p^2-z^2p" titolo="With $z=1.96$, the polynomial $(12+z^2)p^2-z^2p$ is less than or equal to zero between its roots $0$ and approximately $0.2425$. The values of $p$ in the shaded region form the Wilson interval."}
:::

:::osservazione
The Wald interval may include values below zero or above one. With $n=50$ and $2$ successes, for example, $\widehat p=0.04$ and the $95\,\%$ Wald interval is approximately $[-0.014,0.094]$. Taking its intersection with $[0,1]$ gives $[0,0.094]$ and removes inadmissible values. Coverage stays the same for every allowable $p$, because for a fixed $p\in[0,1]$, belonging to the original interval is equivalent to belonging to its intersection with $[0,1]$. For the same reason, any coverage shortfall also remains. Here there are $2$ successes, far fewer than the ten of the rule of thumb, so the shortfall is corrected only by changing the construction. With the same data the Wilson interval is approximately $[0.011,0.135]$, already entirely inside $[0,1]$.
:::

## Variance of a normal population

::::teorema{#varianza titolo="Chi-square interval for the variance"}
For a sample of $n>1$ independent and identically distributed normal observations with positive variance, let $a=\chi^2_{n-1,\frac{\alpha}{2}}$ and $b=\chi^2_{n-1,1-\frac{\alpha}{2}}$ denote the lower-tail quantiles of the chi-square distribution with $n-1$ degrees of freedom. The interval
$$
\left[\frac{(n-1)S^2}{b},\ \frac{(n-1)S^2}{a}\right]
$$
has exact coverage $1-\alpha$ for $\sigma^2$. The chi-square distribution takes only positive values, so both quantiles are positive and the divisions are possible. Take the square root of each endpoint to obtain the interval for $\sigma$, since the square root is increasing and preserves order.

:::dimostrazione
The sample variance $S^2$ changes from one sample to another. By the theorem "The t statistic and the sample variance" in Chapter 8, under normality $Q=\dfrac{(n-1)S^2}{\sigma^2}$ has a chi-square distribution with $n-1$ degrees of freedom, which does not depend on $\sigma$; $Q$ is therefore a pivot. Hence $P(a\leq Q\leq b)=1-\alpha$. Writing $D=(n-1)S^2$ and multiplying by $\sigma^2>0$, the two inequalities are $a\sigma^2\leq D$ and $D\leq b\sigma^2$. Dividing by $a>0$, the first is equivalent to $\sigma^2\leq\dfrac{D}{a}$; dividing by $b>0$, the second is equivalent to $\sigma^2\geq\dfrac{D}{b}$. The larger quantile $b$ therefore appears in the denominator of the lower endpoint, because dividing $D$ by a larger number gives a smaller number.
:::
::::

:::esempio{titolo="Ordering the quantiles"}
With $n=7$, $s^2=4\,\mathrm{mm}^2$, and a $90\,\%$ confidence level, $D=(7-1)\cdot4=24\,\mathrm{mm}^2$ and $\alpha=0.10$. The lower-tail chi-square quantiles for $6$ degrees of freedom are $\chi^2_{6,0.05}\approx1.635$ and $\chi^2_{6,0.95}\approx12.592$. Using the rounded quantiles gives a variance interval of approximately $\left[\dfrac{24}{12.592},\dfrac{24}{1.635}\right]\approx[1.906,14.679]\,\mathrm{mm}^2$. For the standard deviation, taking square roots gives approximately $[1.38,3.83]\,\mathrm{mm}$. The estimate $s^2=4$ is not at the center of the interval, because the central region of the chi-square distribution is asymmetric, as the figure shows.

::grafico{f="x^2*exp(-x/2)/16" area="x^2*exp(-x/2)/16;0;1.635;12.592" segmenti="1.635,0,1.635,0.0738;12.592,0,12.592,0.0183" etichette="0.47,0.112,1.635;11.65,0.043,12.592" xmin=0 xmax=18 ymin=-0.012 ymax=0.17 nomi="q,y" legenda="f_{\chi^2_6}(q)" titolo="The shaded area is approximately 90% under the chi-square distribution with six degrees of freedom."}

:::

:::osservazione
The chi-square interval uses the exact distribution of the sample variance for normal observations. The central limit theorem concerns the distribution of the sample mean and says nothing about the distribution of $\dfrac{(n-1)S^2}{\sigma^2}$. The variability of $S^2$ depends on the shape of the population, in particular on how probable values far from the mean are. If these values are more probable than in the normal distribution, the coverage of the chi-square interval stays below the level even for large $n$. As $n$ grows, in fact, the coverage approaches a value smaller than $1-\alpha$.
:::

:::esempio{titolo="Changing units when measuring spread"}
A variance interval expressed in $\mathrm{cm}^2$ has endpoints $0.04$ and $0.25$. A deviation of $1\,\mathrm{cm}$ equals $10\,\mathrm{mm}$, so its square goes from $1\,\mathrm{cm}^2$ to $100\,\mathrm{mm}^2$. To express the interval in $\mathrm{mm}^2$, therefore, multiply both endpoints by $100$, which gives $[4,25]\,\mathrm{mm}^2$. The interval for the standard deviation is therefore $[2,5]\,\mathrm{mm}$. The degrees of freedom and chi-square quantiles are unaffected by the change of units.
:::

## Difference between two independent means

:::teorema{#due-medie titolo="Comparing means with known variances"}
Two independent samples of sizes $n_X$ and $n_Y$ are observed from normal populations with means $\mu_X,\mu_Y$ and known positive variances $\sigma_X^2,\sigma_Y^2$. The sample difference $\bar X-\bar Y$ estimates $\mu_X-\mu_Y$. By Chapter 8, $\bar X$ has variance $\dfrac{\sigma_X^2}{n_X}$ and $\bar Y$ has variance $\dfrac{\sigma_Y^2}{n_Y}$; these two quantities are the **contributions** of the two groups to the variance of the difference. The two means are independent, so their covariance is zero and, by the properties of variance in Chapter 7, the variance of the difference is the sum of the contributions. The standard error of the difference is
$$
e=\sqrt{\frac{\sigma_X^2}{n_X}+\frac{\sigma_Y^2}{n_Y}}.
$$
The difference of two independent normal variables is normal. Standardizing as for a single mean gives the exact interval $[\bar X-\bar Y-ze,\,\bar X-\bar Y+ze]$, where $z=z_{1-\frac{\alpha}{2}}$.

For example, with $\sigma_X^2=20$, $n_X=5$, $\sigma_Y^2=9$, and $n_Y=9$ the contributions are $\dfrac{20}{5}=4$ and $\dfrac99=1$, so $e=\sqrt5\approx2.236$. Reversing the order of the groups, that is, estimating $\mu_Y-\mu_X$, changes the signs of both endpoints and swaps them; the interval $[1,5]$, for example, becomes $[-5,-1]$.
:::

:::definizione{#welch titolo="Welch's interval"}
When both variances are unknown, **Welch's interval** is used for independent samples from normal populations; it allows unequal variances in the two populations. Let $n_X,n_Y>1$ and $S_X^2,S_Y^2$ be the unbiased sample variances. Write $v_X=\dfrac{S_X^2}{n_X}$ and $v_Y=\dfrac{S_Y^2}{n_Y}$ for the estimated contributions to the variance of the difference. Then use
$$
\begin{aligned}
e_W&=\sqrt{v_X+v_Y},\\[6pt]
\nu_W&=\frac{(v_X+v_Y)^2}{
\frac{v_X^2}{n_X-1}+\frac{v_Y^2}{n_Y-1}}.
\end{aligned}
$$
The difference $\bar X-\bar Y$ is the center and $t_{\nu_W,1-\frac{\alpha}{2}}e_W$ the half-width. The t distribution with $\nu_W$ degrees of freedom approximates the distribution of the pivot, so coverage is approximate. The number $\nu_W$ is usually not an integer, whereas tables list only integer degrees of freedom. The t quantile decreases as the degrees of freedom increase, so the integer below $\nu_W$ is used, which gives a quantile at least as large as the one with $\nu_W$ and hence an interval that is not narrower. With $\nu_W=18.4$, for example, $\nu=18$ is used, with $t_{18,0.975}\approx2.101$, instead of $t_{19,0.975}\approx2.093$.
:::

:::esempio{titolo="Equal contributions to the variance"}
Two independent samples of size $10$ have unbiased sample variances $40$ and $40$. Each contribution is the sample variance divided by the sample size, so $v_X=v_Y=\dfrac{40}{10}=4$ and the estimated standard error is $\sqrt{4+4}=\sqrt8$. Welch's formula gives $\nu_W=\dfrac{(4+4)^2}{\frac{16}{9}+\frac{16}{9}}=\dfrac{64}{\frac{32}{9}}=18$. If the observed difference is $6$ and the quantile $t_{18,0.975}$ is approximately $2.101$, the margin is about $2.101\cdot\sqrt8\approx5.943$. The interval is therefore approximately $[0.057,11.943]$.
:::

:::osservazione
Consider independent samples from normal populations with the same unknown positive variance, and $n_X,n_Y>1$. In this case the sums of squared deviations of the two groups are pooled, and the **pooled variance** is their sum divided by the total degrees of freedom $n_X+n_Y-2$:
$$
S_C^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}.
$$
For example, two groups of sizes $5$ and $7$ with sample variances $4$ and $9$ have pooled variance $\dfrac{4\cdot4+6\cdot9}{10}=7$. The estimated standard error of the difference is $S_C\sqrt{\dfrac1{n_X}+\dfrac1{n_Y}}$, and the pivot for the difference has a t distribution with $n_X+n_Y-2$ degrees of freedom. The distribution is exact because, under normality and with a common variance $\sigma^2$, the quantity $\dfrac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{\sigma^2}$ is the sum of two independent chi-square variables, with $n_X-1$ and $n_Y-1$ degrees of freedom, so it has a chi-square distribution with $n_X+n_Y-2$ degrees of freedom, and it is independent of the two means. When the population variances may differ, Welch's interval is used instead.
:::

:::osservazione
At a fixed confidence level, when the sizes of the two groups can be changed, the standard error decreases more if the group with the larger contribution is enlarged. Consider the known contributions $4$ and $1$ from the example of comparing means with known variances, with standard error $\sqrt5\approx2.236$. Quadrupling the first sample makes the first contribution $\dfrac44=1$, and the sum falls from $5$ to $2$, so the standard error becomes $\sqrt2\approx1.414$. Quadrupling the second makes the second contribution $\dfrac14=0.25$, and the sum falls from $5$ to $4.25$, so the standard error becomes $\sqrt{4.25}\approx2.062$. Compare the sums of variances and then take their square roots. Sample size alone does not determine which contribution is larger, since the numerator of each contribution also contains the variance.
:::

## Paired differences

:::teorema{#appaiate titolo="The t interval for paired differences"}
When the same units are measured twice, for example before and after an adjustment, the two measurements on a unit are not independent. Let $(X_i,Y_i)$ be mutually independent pairs, and let $D_i=X_i-Y_i$ be the difference for pair $i$. If the $n>1$ differences have the same normal distribution with positive variance, the exact interval for their population mean is
$$
\left[\bar D-t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n},
\ \bar D+t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n}\right].
$$
Here $\bar D$ is the sample mean of the differences and $S_D$ is their sample standard deviation using the degrees-of-freedom correction. The result is the t interval for the mean applied to the sample of differences, because the units analyzed are the $n$ differences, one per pair.
:::

:::esempio{titolo="A before-and-after comparison"}
At a plant, the same four items are measured before and after an adjustment. The differences, after minus before, are $1$, $2$, $3$, and $2\,\mathrm{mm}$. Their mean is $2\,\mathrm{mm}$, the deviations from the mean are $-1$, $0$, $1$, and $0\,\mathrm{mm}$, and the sum of their squares is $2\,\mathrm{mm}^2$. Hence $s_D=\sqrt{\dfrac23}\,\mathrm{mm}$ and the standard error is $\dfrac{s_D}{\sqrt4}=\sqrt{\dfrac16}\,\mathrm{mm}\approx0.408\,\mathrm{mm}$. Assuming normally distributed differences and using $t_{3,0.975}\approx3.182$, the margin is about $1.299\,\mathrm{mm}$ and the interval is approximately $[0.701,3.299]\,\mathrm{mm}$. There are four independent units because each item contributes one difference.
:::

:::osservazione
Two measurements on the same unit usually have positive covariance, because an item thicker than the others before the adjustment remains thicker afterwards. The variance of the difference is
$$
\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y).
$$
With $\operatorname{Var}(X)=25$, $\operatorname{Var}(Y)=16$, and $\operatorname{Cov}(X,Y)=18$, for example, this gives $25+16-36=5$, whereas ignoring the covariance would give $41$. The independent-samples model sets the last term to zero. With paired data, the standard error calculated from the differences already incorporates the covariance between measurements on the same unit.
:::

:::attenzione{titolo="Checking the pairing"}
For three instruments the initial readings are $10$, $13$, and $16$. The final readings in the same order are $12$, $14$, and $19$. The observed differences are $2$, $1$, and $3$. Swapping the last two final readings instead gives $2$, $6$, and $-2$. The mean difference is $2$ in both cases because the sums of the initial and final readings are unchanged. The spread of the differences changes, however. In the first case $s_D=1$; in the second the deviations are $0$, $4$, and $-4$, so $s_D^2=\dfrac{32}{2}=16$ and $s_D=4$. With $t_{2,0.975}\approx4.303$, the margin of the paired interval goes from about $2.48$ to about $9.94$.
:::

## Sample size and one-sided bounds

:::definizione{#numerosita titolo="Sample size for a specified margin"}
Before collecting the data, choose the maximum acceptable margin $E>0$ and find the number of observations needed. When the standard deviation is known, the two-sided interval for the mean has half-width $z\dfrac{\sigma}{\sqrt n}$, so solve $z\dfrac{\sigma}{\sqrt n}\leq E$ for $n$. The smallest sample size is
$$
n_{\min}=\left\lceil\left(\frac{z\sigma}{E}\right)^2\right\rceil,
$$
where $\lceil\cdot\rceil$ gives the smallest integer greater than or equal to its argument.

For a proportion with the Wald margin, use $n\geq\dfrac{z^2p_*(1-p_*)}{E^2}$. The value $p_*$, read p star, is the proportion chosen at the design stage, for example the proportion observed in a pilot study, that is, in a small preliminary sample. Without preliminary data, take $p_*=\dfrac12$, because $\dfrac12$ maximizes the product $p_*(1-p_*)$ and therefore gives the largest margin; the resulting sample size meets the margin $E$ whatever the true proportion. With $z=1.96$, $E=0.03$, and $p_*=\dfrac12$, this gives $n\geq\dfrac{1.96^2\cdot0.25}{0.03^2}\approx1067.1$, so $1068$ respondents are needed. The calculation fixes the width of the Wald interval; the coverage probability remains the approximate one of the Wald interval.

::grafico{f="x*(1-x)" punti="0.5,0.25" segmenti="0.5,0,0.5,0.25;0,0.25,0.5,0.25" etichette="0.56,0.272,maximum 0.25;0.44,-0.022,0.5" xmin=-0.12 xmax=1.18 ymin=-0.04 ymax=0.31 nomi="p*,y" legenda="p_*(1-p_*)" titolo="The product $p_*(1-p_*)$ is zero at $0$ and $1$ and reaches its maximum value $\dfrac14$ at $p_*=\dfrac12$."}
:::

:::esempio{titolo="Checking after rounding"}
For $z=1.96$, $\sigma=5\,\mathrm{g}$, and $E=1.4\,\mathrm{g}$, we have $\left(\dfrac{1.96\cdot5}{1.4}\right)^2=7^2=49$. At $n=49$ the margin is $\dfrac{9.8}{7}=1.4\,\mathrm{g}$, exactly the specified maximum. With $48$ measurements, $\sqrt{48}<7$, so the margin $\dfrac{9.8}{\sqrt{48}}$ exceeds the maximum.

When the theoretical value lies between two integers, round up. With $E=1.5\,\mathrm{g}$, for example, $\left(\dfrac{9.8}{1.5}\right)^2\approx42.68$, and $n=43$ is taken. The margin with $43$ measurements is $\dfrac{9.8}{\sqrt{43}}\approx1.494\,\mathrm{g}$, below the maximum, whereas with $42$ measurements it would be about $1.512\,\mathrm{g}$, above the maximum.

::grafico{assi=0 xmin=5.3 xmax=93 ymin=-0.4 ymax=4.4 unicolore=1 f="9.8/sqrt(x)" legenda="h=\dfrac{9.8}{\sqrt{n}}" vettori="5.7,0,91,0;5.7,0,5.7,4.28" segmenti="5.7,1.4,49,1.4;49,0,49,1.4" punti="49,1.4" etichette="47,-0.24,49;88,-0.24,n;7,4.19,h;13,1.57,E = 1.4" titolo="The solid curve shows the margin. The threshold is reached at 49 measurements and is met for all larger integer sample sizes."}
:::

::::teorema{#unilateri titolo="Lower and upper bounds"}
In some problems only one side matters, for example guaranteeing that the mean exceeds a minimum value. In the same normal model for a mean with known $\sigma$, the one-sided **upper bound** with confidence level $1-\alpha$ is $U=\bar X+z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, giving the confidence set $(-\infty,U]$. The **lower bound** is $L=\bar X-z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, giving the confidence set $[L,+\infty)$. A confidence set is a set of parameter values constructed like a confidence interval; here it is a half-line. The quantile has order $1-\alpha$ because the entire probability $\alpha$ of exclusion lies on one side. For a normal sample with unknown variance, use $S$ in place of $\sigma$ and the t quantile of order $1-\alpha$.

:::dimostrazione
Consider the upper bound. Dividing by $\dfrac{\sigma}{\sqrt n}>0$, the event $\mu\leq\bar X+z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$ is equivalent to $\dfrac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}\geq-z_{1-\alpha}$, that is, to $Z\geq-z_{1-\alpha}$ for the standard normal pivot. By the symmetry of the standard normal, $P(Z\geq-z_{1-\alpha})=P(Z\leq z_{1-\alpha})=1-\alpha$. For the lower bound, the event $\mu\geq L$ is equivalent in the same way to $Z\leq z_{1-\alpha}$, which has probability $1-\alpha$.
:::
::::

:::esempio{titolo="Comparing the mean with a minimum threshold"}
A service requires the mean of a normal population to exceed the threshold $48$. With $\bar x=52$, standard error $2$, and $z_{0.95}\approx1.645$, the $95\,\%$ lower bound is $52-1.645\cdot2\approx48.71$. The confidence set $[48.71,+\infty)$ therefore contains only values greater than $48$, and at the $95\,\%$ level one concludes that the mean **exceeds the threshold**. In Chapter 11, on hypothesis testing, the same comparison becomes a one-sided test of the mean based on the same pivot.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-4;1.645" segmenti="1.645,0,1.645,0.1031" etichette="1.72,0.14,1.645;-0.9,0.17,0.95" xmin=-4 xmax=4 ymin=-0.04 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="For the lower bound, the event $\mu\geq L$ is equivalent to $Z\leq1.645$. The shaded area is $0.95$, and the excluded $5\,\%$ is entirely in the right tail of the pivot."}
:::

:::osservazione
Calculate, from the same normal sample with known standard deviation, a lower and an upper bound, each with confidence level $95\,\%$. With the data of the threshold example this gives $L\approx48.71$ and $U=52+1.645\cdot2\approx55.29$. The two statements $\mu\geq L$ and $\mu\leq U$ hold together when the pivot lies between $-z_{0.95}$ and $z_{0.95}$. The central area between these two quantiles is $90\,\%$, because $5\,\%$ is excluded on each side, so $[48.71,55.29]$ is a two-sided $90\,\%$ interval. For a two-sided $95\,\%$ interval use $z_{0.975}\approx1.96$ instead.
:::
