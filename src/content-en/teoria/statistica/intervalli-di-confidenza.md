---
titolo: "Confidence intervals and sample size"
sommario: "Intervals for means, proportions, and variances, comparisons between samples, and planning for a specified precision."
---

## Coverage and the observed interval

:::definizione{#confidenza titolo="Confidence procedures"}
A random sample gives two statistics $L$ and $U$, called the lower and upper endpoints. The probability that the random interval $[L,U]$ contains the fixed parameter $\theta$ is the **coverage probability** at $\theta$. A procedure has confidence level $1-\alpha$, with $0<\alpha<1$, if the model guarantees
$$
P_\theta(L\leq\theta\leq U)\geq 1-\alpha
\qquad\text{for every }\theta.
$$
The subscript in $P_\theta$ denotes the sampling distribution when the parameter equals $\theta$. If equality holds for every parameter value, coverage equals the stated level exactly. A procedure may have coverage above this level at some parameter values, as happens with many exact binomial constructions.

Once the sample has been observed, $L$ and $U$ take fixed numerical values. The confidence level describes the long-run frequency with which the intervals contain the parameter when sampling is repeated using the same construction rule.
:::

:::esempio{titolo="Coverage under repeated sampling"}
A laboratory measures the mean concentration of the same solution under controlled conditions. For every series of measurements, it uses the same $95\,\%$ confidence procedure. If the model assumptions hold and coverage equals the stated level, the expected number of intervals containing the mean concentration in $200$ series is $200\cdot0.95=190$. The actual count in any particular sequence of series may differ from $190$. Coverage is a property of the procedure under the model.
:::

:::esempio{titolo="Ten intervals from the same procedure"}
A normal population has $\mu=70\,\mathrm{g}$ and $\sigma=6\,\mathrm{g}$. Ten independent samples, each of $36$ units, are drawn from it. The standard error is $\dfrac{6}{\sqrt{36}}=1\,\mathrm{g}$, so each $95\,\%$ interval has half-width $1.96\,\mathrm{g}$. The ten observed means are $69.2$, $70.8$, $71.1$, $68.6$, $70.3$, $72.3$, $69.7$, $70.5$, $68.9$, and $70.1\,\mathrm{g}$. The sixth interval is $[70.34,74.26]\,\mathrm{g}$ and excludes $\mu$ because $72.3-1.96=70.34>70$. The other nine intervals contain $\mu$. The centers vary from sample to sample, whereas the half-width stays the same because it depends only on $\sigma$, $n$, and the confidence level.

::grafico{assi=0 xmin=65.4 xmax=75.4 ymin=-1.3 ymax=11.6 linee="65.9,0 74.9,0;66,-0.15 66,0.15;68,-0.15 68,0.15;72,-0.15 72,0.15;74,-0.15 74,0.15;70,0 70,10.8;67.24,1 71.16,1;68.84,2 72.76,2;69.14,3 73.06,3;66.64,4 70.56,4;68.34,5 72.26,5;67.74,7 71.66,7;68.54,8 72.46,8;66.94,9 70.86,9;68.14,10 72.06,10" poligoni="70.34,5.82 74.26,5.82 74.26,6.18 70.34,6.18" punti="69.2,1;70.8,2;71.1,3;68.6,4;70.3,5;72.3,6;69.7,7;70.5,8;68.9,9;70.1,10" etichette="65.75,-0.7,66;67.75,-0.7,68;69.75,-0.7,70;71.75,-0.7,72;73.75,-0.7,74;70.25,11.2,μ = 70;72.6,6.75,excludes μ;74.5,-0.7,g" titolo="Each horizontal segment is an interval from one sample, centered on its observed mean. The highlighted segment for the sixth sample is the only one that excludes $\mu=70$."}
:::

:::attenzione{titolo="Interpreting an observed interval"}
Suppose that an observed $95\,\%$ interval is $[8,12]$ and that the population parameter equals $13$. The endpoints are now fixed, and the event $8\leq 13\leq 12$ is false. Assigning probability $0.95$ to the fixed parameter after observing the sample confuses the observed event with the one involving the random endpoints $L$ and $U$.

::grafico{assi=0 xmin=6.8 xmax=14.5 ymin=-0.88 ymax=0.9 linee="7.2,0 14.0,0;8,-0.16 8,0.15;12,-0.16 12,0.15" poligoni="8,-0.13 12,-0.13 12,0.13 8,0.13" punti="13,0" etichette="7.93,-0.42,8;11.87,-0.42,12;12.87,-0.42,13;8.8,0.46,observed interval;12.63,0.46,θ" titolo="The highlighted segment runs from 8 to 12. The point θ = 13 represents the fixed parameter and lies outside the segment."}
:::

:::definizione{#pivot titolo="Pivotal quantities and lower-tail quantiles"}
A **pivotal quantity** is a function of the sample and the parameter of interest whose distribution is known and does not depend on unknown parameters. For a continuous distribution with a cumulative distribution function increasing on its support, the quantile of order $p$ is the value with probability $p$ to its left. The symbols $z_p$, $t_{\nu,p}$, and $\chi^2_{\nu,p}$ denote the lower-tail quantiles of the standard normal, Student's t, and chi-square distributions, respectively. The symbol $\nu$ gives the degrees of freedom for the last two distributions.

To construct a two-sided, equal-tailed interval, take the quantiles of orders $\dfrac{\alpha}{2}$ and $1-\dfrac{\alpha}{2}$. The pivot falls between them with probability $1-\alpha$. Solve both inequalities for the parameter. The distribution of the pivot determines the quantiles, while the algebra determines the order of the interval endpoints.
:::

:::osservazione
The same measurement can play different roles depending on the question. A confidence interval for the mean concerns the center of the population. A prediction interval concerns a new observation, which still varies even when the center is known. For example, with known standard deviation $6\,\mathrm{g}$ and $36$ independent measurements, the sample mean has standard deviation $1\,\mathrm{g}$. A new weighing from the same population still has standard deviation $6\,\mathrm{g}$. This difference explains why the endpoints of a confidence interval for the mean are generally closer to the center than those of a prediction interval.
:::

## Mean with known standard deviation

::::teorema{#media-nota titolo="Normal confidence interval for the mean"}
Let $X_1,\ldots,X_n$ be independent observations with distribution $N(\mu,\sigma^2)$, where $n\geq1$ and the standard deviation $\sigma>0$ is known. The sample mean is $\bar X=\dfrac{1}{n}\sum_{i=1}^n X_i$. Writing $q=z_{1-\frac{\alpha}{2}}$, the interval
$$
\left[\bar X-q\frac{\sigma}{\sqrt n},\ \bar X+q\frac{\sigma}{\sqrt n}\right]
$$
has exact coverage $1-\alpha$ for $\mu$. The quantity $\dfrac{\sigma}{\sqrt n}$ is the **standard error** of the mean. Multiplying it by $q$ gives the half-width of the interval.

:::dimostrazione
Standardize the sample mean, which under the assumptions has a normal distribution with mean $\mu$ and variance $\dfrac{\sigma^2}{n}$. The pivot $Z=\dfrac{\bar X-\mu}{\dfrac{\sigma}{\sqrt n}}$ therefore has a standard normal distribution. By symmetry,
$$
P\!\left(-q\leq\frac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}\leq q\right)=1-\alpha.
$$
The denominator is positive. Multiplying by the standard error and isolating $\mu$ turns the two inequalities into $\bar X-q\dfrac{\sigma}{\sqrt n}\leq\mu\leq\bar X+q\dfrac{\sigma}{\sqrt n}$. This event is equivalent to the one involving the pivot and has the same probability.
:::
::::

:::esempio{titolo="The quantile and the two tails"}
For a $95\,\%$ confidence level, $\alpha=0.05$ and each tail has area $0.025$. The positive quantile is $z_{0.975}\approx1.96$. With $n=36$, $\bar x=70\,\mathrm{g}$, and $\sigma=6\,\mathrm{g}$, the standard error is $1\,\mathrm{g}$, giving approximately $[68.04,71.96]\,\mathrm{g}$. The central $95\,\%$ in the figure refers to the dimensionless pivot. The interval endpoints are expressed in the units of the mean.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1.96;1.96" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-2.55,0.13,−1.96;2.06,0.108,1.96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.48 nomi="z,y" legenda="\varphi(z)" titolo="The shaded area is approximately 95%. The two remaining tails each have area 2.5%."}

:::

:::osservazione
For independent and identically distributed observations with known, positive, finite variance, the **central limit theorem** gives asymptotic coverage for the same formula. The accuracy of the approximation at a given sample size depends on the population distribution. Strong skewness or a long tail can make the approximation inadequate for a small sample. Other conditions being equal, quadrupling $n$ halves the standard error, whereas increasing the confidence level increases $q$ and widens the interval.
:::

:::esempio{titolo="Effect of sample size on the margin of error"}
With $\sigma=10\,\mathrm{g}$, $z=1.96$, and $n=25$, the half-width is $3.92\,\mathrm{g}$. With $n=100$ it becomes $1.96\,\mathrm{g}$. The observed mean can vary from sample to sample, so the two samples may produce intervals with different centers. The relationship with $\sqrt n$ concerns width at a fixed confidence level and standard deviation. For the same sample, increasing the confidence level from $90\,\%$ to $95\,\%$ instead widens the interval about the same observed mean.
:::

## Mean with unknown standard deviation

::::teorema{#student titolo="The t interval for the mean"}
For a sample of $n>1$ independent and identically distributed normal observations with unknown positive variance, the unbiased sample variance is
$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2.
$$
Its square root $S$ estimates the population standard deviation. Writing $\nu=n-1$ and $q=t_{\nu,1-\frac{\alpha}{2}}$, the interval $[\bar X-q\dfrac{S}{\sqrt n},\,\bar X+q\dfrac{S}{\sqrt n}]$ has exact coverage $1-\alpha$ for $\mu$.

:::dimostrazione
Express the standardized mean with $S$ in the denominator as a ratio of two quantities with known distributions. Under normality, $Z=\dfrac{\bar X-\mu}{\dfrac{\sigma}{\sqrt n}}$ is standard normal and $V=\dfrac{(n-1)S^2}{\sigma^2}$ has a chi-square distribution with $\nu$ degrees of freedom. The quantities are independent. Therefore
$$
T=\frac{Z}{\sqrt{\frac{V}{\nu}}}
 =\frac{\bar X-\mu}{\frac{S}{\sqrt n}}
$$
has Student's t distribution with $\nu$ degrees of freedom. By symmetry, $P(-q\leq T\leq q)=1-\alpha$. Solving the inequalities gives the interval. The event $S=0$ has probability zero under the normal model with positive variance.
:::
::::

:::esempio{titolo="Effect of estimating variability"}
A normal sample of $9$ processing times has mean $\bar x=18\,\mathrm{min}$ and sample standard deviation $s=3\,\mathrm{min}$, calculated with the degrees-of-freedom correction. The estimated standard error is $1\,\mathrm{min}$, and $\nu=8$. At the $95\,\%$ confidence level, $t_{8,0.975}\approx2.306$, so the interval is approximately $[15.694,20.306]\,\mathrm{min}$. For the same standard error, the normal quantile $1.96$ would give a smaller half-width. The larger t quantile accounts for the additional variability from estimating $\sigma$.

::grafico{f="0.38669*(1+x*x/8)^(-4.5);exp(-x*x/2)/sqrt(2*PI)" area="0.38669*(1+x*x/8)^(-4.5);0;-2.306;2.306" segmenti="-2.306,0,-2.306,0.039;2.306,0,2.306,0.039;-1.96,0,-1.96,0.0584;1.96,0,1.96,0.0584" etichette="2.38,0.085,2.306;0.95,0.03,1.96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.46 nomi="t,y" legenda="f_{t_8}(t);\varphi(t)" titolo="The shaded area under the t density with $8$ degrees of freedom equals $0.95$ and lies between $-2.306$ and $2.306$. The dashed standard normal density has thinner tails and encloses $95\,\%$ between $-1.96$ and $1.96$."}
:::

:::osservazione
There are $n-1$ degrees of freedom because the $n$ deviations from the sample mean sum to zero. The constraint leaves $n-1$ independent directions in the sum of squares. As $\nu$ increases, the t quantiles approach the standard normal quantiles. For a nonnormal population, the exact t distribution generally no longer applies. With i.i.d. observations and positive finite variance, standardization using $S$ is asymptotically normal because $S$ converges to $\sigma$. The t interval is then an approximate procedure.
:::

:::osservazione
The letter $s$ denotes the observed value of $S$. Given only the sum of squared deviations, obtain $s$ by first dividing the sum by $n-1$ and then taking its square root. For example, for $n=10$ and a sum of $90\,\mathrm{mm}^2$, this gives $s=\sqrt{10}\,\mathrm{mm}$. The estimated standard error is therefore $1\,\mathrm{mm}$. The two divisors play different roles. The first is used to estimate the variance, whereas the second accounts for the variability of a mean of $n$ observations.
:::

## Binomial proportions

:::definizione{#proporzione titolo="The Wald interval and observed counts"}
Consider $n$ independent Bernoulli trials, each with success probability $p$. The random success count $K$ has a binomial distribution and the sample proportion is $\widehat p=\dfrac{K}{n}$. With $z=z_{1-\frac{\alpha}{2}}$, the normal **Wald** procedure uses
$$
\widehat p\ \pm\ z\sqrt{\frac{\widehat p(1-\widehat p)}{n}}.
$$
The theoretical standard error is $\sqrt{\dfrac{p(1-p)}{n}}$. The Wald procedure estimates it by replacing $p$ with the sample proportion. Coverage is approximate. The observed counts of successes and failures help assess whether the normal approximation is plausible. At least ten observations of each type is a rule of thumb with no exact coverage guarantee.
:::

:::attenzione{titolo="Samples in which every outcome is the same"}
In $12$ trials one can observe zero successes even when the success probability is $0.10$. For these data the Wald interval has center zero and half-width zero, and gives $[0,0]$. The zero estimate of variability arises from the observed value $\widehat p=0$. Under the binomial model with $p=0.10$, variability is positive.
:::

::::teorema{#wilson titolo="The Wilson interval"}
For the same model, the **Wilson** interval has endpoints $c-h$ and $c+h$, where
$$
\begin{aligned}
c&=\frac{\widehat p+\frac{z^2}{2n}}{1+\frac{z^2}{n}},\\[6pt]
h&=\frac{z}{1+\frac{z^2}{n}}
\sqrt{\frac{\widehat p(1-\widehat p)}{n}+\frac{z^2}{4n^2}}.
\end{aligned}
$$
The construction uses the binomial variance under the value of $p$ being assessed. Coverage is still approximate. The center is a weighted average of the observed proportion and $\dfrac12$, with weights $n$ and $z^2$.

:::dimostrazione
For a candidate value $p$ in the interval $(0,1)$, the score interval includes the candidate if the absolute value of $\widehat p-p$ is at most $z$ times its theoretical standard error. Squaring and multiplying by $n$ gives
$$
n(\widehat p-p)^2\leq z^2p(1-p).
$$
Expanding both sides and collecting powers of $p$ gives
$$
(n+z^2)p^2-(2n\widehat p+z^2)p+n\widehat p^2\leq0.
$$
The coefficient of $p^2$ is positive, so the inequality holds between the two roots. Their mean is $c$ and half their difference is $h$. By continuity of the quadratic inequality, the formula extends to the endpoints.
:::
::::

:::esempio{titolo="Upper endpoint with zero successes"}
With $n=12$ and $\widehat p=0$, the Wilson inequality reduces to $p((12+z^2)p-z^2)\leq0$. The two-sided $95\,\%$ interval is thus approximately $[0,0.2425]$. The exact equal-tailed binomial interval is obtained instead by inverting the binomial probabilities in the two tails. Since $K$ is discrete, the exact procedure guarantees at least the stated confidence level and generally has higher coverage.

::grafico{f="15.8416*x^2-3.8416*x" area="0;15.8416*x^2-3.8416*x;0;0.2425" punti="0,0;0.2425,0" etichette="0.25,-0.09,0.2425" xmin=-0.04 xmax=0.36 ymin=-0.3 ymax=0.6 nomi="p,y" legenda="(12+z^2)p^2-z^2p" titolo="With $z=1.96$, the polynomial $(12+z^2)p^2-z^2p$ is less than or equal to zero between its roots $0$ and approximately $0.2425$. The values of $p$ in the shaded region form the Wilson interval."}
:::

:::osservazione
The Wald interval may include values below zero or above one. Taking its intersection with $[0,1]$ removes inadmissible values and preserves coverage for every allowable $p$. Indeed, for a fixed $p\in[0,1]$, belonging to the original interval is equivalent to belonging to its intersection with $[0,1]$. This operation therefore also leaves any coverage shortfall unchanged. The choice between Wald, Wilson, and an exact procedure concerns how the counts are used to construct the interval.
:::

## Variance of a normal population

::::teorema{#varianza titolo="Chi-square interval for the variance"}
For an i.i.d. normal sample with positive variance and $n>1$, let $a=\chi^2_{n-1,\frac{\alpha}{2}}$ and $b=\chi^2_{n-1,1-\frac{\alpha}{2}}$ denote the lower-tail chi-square quantiles. The interval
$$
\left[\frac{(n-1)S^2}{b},\ \frac{(n-1)S^2}{a}\right]
$$
has exact coverage $1-\alpha$ for $\sigma^2$. The chi-square distribution has positive support and both quantiles are positive. Take the square root of each endpoint to obtain the interval for $\sigma$, since the square root is increasing.

:::dimostrazione
Under normality, $Q=\dfrac{(n-1)S^2}{\sigma^2}$ has a chi-square distribution with $n-1$ degrees of freedom. Hence $P(a\leq Q\leq b)=1-\alpha$. Writing $D=(n-1)S^2$, the inequalities are $a\sigma^2\leq D$ and $D\leq b\sigma^2$. The first is equivalent to $\sigma^2\leq\dfrac{D}{a}$ and the second to $\sigma^2\geq\dfrac{D}{b}$. The larger quantile therefore appears in the denominator of the lower endpoint.
:::
::::

:::esempio{titolo="Ordering the quantiles"}
With $n=7$, $s^2=4\,\mathrm{mm}^2$, and a $90\,\%$ confidence level, $D=24\,\mathrm{mm}^2$. The lower-tail chi-square quantiles for $6$ degrees of freedom are $\chi^2_{6,0.05}\approx1.635$ and $\chi^2_{6,0.95}\approx12.592$. Using the rounded quantiles gives a variance interval of approximately $[1.906,14.679]\,\mathrm{mm}^2$. For the standard deviation the interval is approximately $[1.38,3.83]\,\mathrm{mm}$. The central region of the chi-square distribution is asymmetric, as the figure shows.

::grafico{f="x^2*exp(-x/2)/16" area="x^2*exp(-x/2)/16;0;1.635;12.592" segmenti="1.635,0,1.635,0.0738;12.592,0,12.592,0.0183" etichette="0.47,0.112,1.635;11.65,0.043,12.592" xmin=0 xmax=18 ymin=-0.012 ymax=0.17 nomi="q,y" legenda="f_{\chi^2_6}(q)" titolo="The shaded area is approximately 90% under the chi-square distribution with six degrees of freedom."}

:::

:::osservazione
The chi-square interval uses the exact distribution of the sample variance for normal observations. The central limit theorem for the sample mean, on its own, describes the distribution of the mean. The variance is a different statistic, and its variability depends on the shape of the population distribution.
:::

:::esempio{titolo="Changing units when measuring spread"}
A variance interval expressed in $\mathrm{cm}^2$ has endpoints $0.04$ and $0.25$. To express it in $\mathrm{mm}^2$, multiply both endpoints by $100$, because a deviation expressed in millimeters is ten times its value in centimeters. This gives $[4,25]\,\mathrm{mm}^2$. The interval for the standard deviation is therefore $[2,5]\,\mathrm{mm}$. The degrees of freedom and chi-square quantiles are unaffected by the change of units.
:::

## Difference between two independent means

:::teorema{#due-medie titolo="Comparing means with known variances"}
Two independent samples of sizes $n_X$ and $n_Y$ are observed from normal populations with means $\mu_X,\mu_Y$ and known positive variances $\sigma_X^2,\sigma_Y^2$. The sample difference $\bar X-\bar Y$ has mean $\mu_X-\mu_Y$ and standard error
$$
e=\sqrt{\frac{\sigma_X^2}{n_X}+\frac{\sigma_Y^2}{n_Y}}.
$$
The difference is normal, and independence makes the covariance between the two means zero. Standardizing gives the exact interval $[\bar X-\bar Y-ze,\,\bar X-\bar Y+ze]$, where $z=z_{1-\frac{\alpha}{2}}$. Reversing the order of the groups changes the signs of both endpoints and reverses their order.
:::

:::definizione{#welch titolo="Welch's interval"}
When both variances are unknown, **Welch's interval** can be used for independent samples from normal populations. Let $n_X,n_Y>1$ and $S_X^2,S_Y^2$ be the unbiased sample variances. Write $v_X=\dfrac{S_X^2}{n_X}$ and $v_Y=\dfrac{S_Y^2}{n_Y}$ for the estimated contributions to the variance of the difference. Then use
$$
\begin{aligned}
e_W&=\sqrt{v_X+v_Y},\\[6pt]
\nu_W&=\frac{(v_X+v_Y)^2}{
\frac{v_X^2}{n_X-1}+\frac{v_Y^2}{n_Y-1}}.
\end{aligned}
$$
The difference $\bar X-\bar Y$ is the center and $t_{\nu_W,1-\frac{\alpha}{2}}e_W$ the half-width. The reference distribution is approximate and may have fractional degrees of freedom. If a table lists only integer degrees of freedom, rounding down gives a two-sided critical value at least as large as the original one. Welch's formula allows unequal population variances.
:::

:::esempio{titolo="Equal contributions to the variance"}
Two independent samples of size $10$ have unbiased sample variances $40$ and $40$. Here $v_X=v_Y=4$, so the estimated standard error is $\sqrt8$. Welch's formula gives $\nu_W=\dfrac{64}{\frac{16}{9}+\frac{16}{9}}=18$. If the observed difference is $6$ and the quantile for the $95\,\%$ interval is approximately $2.101$, the margin is about $5.943$. The interval is therefore approximately $[0.057,11.943]$. The contributions depend on both the observed variances and the sample sizes.
:::

:::osservazione
For independent samples from normal populations with the same unknown positive variance and $n_X,n_Y>1$, the sums of squared deviations can be pooled across groups. The **pooled variance** is their sum divided by the total degrees of freedom.
$$
S_C^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}.
$$
The estimated standard error of the difference is $S_C\sqrt{\dfrac1{n_X}+\dfrac1{n_Y}}$. The pivot for the difference has a t distribution with $n_X+n_Y-2$ degrees of freedom. The distribution is exact because under normality and a common variance, the two standardized sums of squares add to a chi-square variable independent of the means. For example, two groups of sizes $5$ and $7$ with sample variances $4$ and $9$ have pooled variance $\dfrac{4\cdot4+6\cdot9}{10}=7$.
:::

:::osservazione
At a fixed confidence level, decisions about changing the two sample sizes depend on each group's contribution to the variance of the difference in sample means. If the known contributions are $4$ and $1$, quadrupling the first sample size reduces their sum from $5$ to $2$. Quadrupling the second reduces it from $5$ to $4.25$. Compare the sums of variances and then take their square roots. Sample size alone does not determine which contribution is larger, since the numerator also contains the variance.
:::

## Paired differences

:::teorema{#appaiate titolo="The t interval for paired differences"}
Let $(X_i,Y_i)$ be mutually independent pairs, and let $D_i=X_i-Y_i$ be the difference for pair $i$. If the $n>1$ differences have the same normal distribution with positive variance, the exact interval for their population mean is
$$
\left[\bar D-t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n},
\ \bar D+t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n}\right].
$$
Here $\bar D$ is the sample mean of the differences and $S_D$ is their sample standard deviation using the degrees-of-freedom correction. The one-sample t result applies because the units analyzed are differences between measurements in the same pair.
:::

:::esempio{titolo="A before-and-after comparison"}
At a plant, the same four items are measured before and after an adjustment. The differences, after minus before, are $1$, $2$, $3$, and $2\,\mathrm{mm}$. Their mean is $2\,\mathrm{mm}$ and their sum of squared deviations is $2\,\mathrm{mm}^2$, so $s_D=\sqrt{\dfrac23}\,\mathrm{mm}$. The estimated standard error of the mean difference is $\sqrt{\dfrac16}\,\mathrm{mm}$. Assuming normally distributed differences and using $t_{3,0.975}\approx3.182$ gives an interval of approximately $[0.701,3.299]\,\mathrm{mm}$. There are four independent units because each item contributes one difference.
:::

:::osservazione
If the two measurements in a pair are strongly positively correlated, their difference can vary less than either measurement alone. Indeed, $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y)$. The independent-samples model sets the last term to zero. With paired data, the standard error calculated from the differences incorporates the covariance between measurements on the same unit.
:::

:::attenzione{titolo="Checking the pairing"}
For three instruments the initial readings are $10$, $13$, and $16$. The final readings in the same order are $12$, $14$, and $19$. The observed differences are $2$, $1$, and $3$. Swapping the last two final readings instead gives $2$, $6$, and $-2$. The mean difference is $2$ in both cases because the sums of the initial and final readings are unchanged. The spread of the differences changes, however, so the margin of the paired interval changes.
:::

## Sample size and one-sided bounds

:::definizione{#numerosita titolo="Sample size for a specified margin"}
When the standard deviation is known, the two-sided interval for the mean has half-width $z\dfrac{\sigma}{\sqrt n}$. Given a maximum acceptable margin $E>0$, solve $z\dfrac{\sigma}{\sqrt n}\leq E$. The smallest sample size is
$$
n_{\min}=\left\lceil\left(\frac{z\sigma}{E}\right)^2\right\rceil,
$$
where $\lceil\cdot\rceil$ gives the smallest integer greater than or equal to its argument. To plan a sample for estimating a proportion using the normal margin, use $n\geq\dfrac{z^2p_*(1-p_*)}{E^2}$, where $p_*$ is the proportion selected at the design stage. The value $p_*=\dfrac12$ maximizes $p_*(1-p_*)$, so it gives a conservative design margin within this approximation. This criterion concerns the precision of the normal margin. The coverage of the chosen procedure is a separate question.

::grafico{f="x*(1-x)" punti="0.5,0.25" segmenti="0.5,0,0.5,0.25;0,0.25,0.5,0.25" etichette="0.56,0.272,maximum 0.25;0.44,-0.022,0.5" xmin=-0.12 xmax=1.18 ymin=-0.04 ymax=0.31 nomi="p*,y" legenda="p_*(1-p_*)" titolo="The product $p_*(1-p_*)$ is zero at $0$ and $1$ and reaches its maximum value $\dfrac14$ at $p_*=\dfrac12$."}
:::

:::esempio{titolo="Checking after rounding"}
For $z=1.96$, $\sigma=5\,\mathrm{g}$, and $E=1.4\,\mathrm{g}$, we have $\left(\dfrac{1.96\cdot5}{1.4}\right)^2=49$. At $n=49$ the margin is exactly $1.4\,\mathrm{g}$ using the chosen quantile. With $48$ measurements, $\sqrt{48}<7$, so the margin exceeds the specified maximum. Rounding up preserves the required inequality even when the theoretical value lies between two integers.

::grafico{assi=0 xmin=5.3 xmax=93 ymin=-0.4 ymax=4.4 unicolore=1 f="9.8/sqrt(x)" legenda="h=\dfrac{9.8}{\sqrt{n}}" vettori="5.7,0,91,0;5.7,0,5.7,4.28" segmenti="5.7,1.4,49,1.4;49,0,49,1.4" punti="49,1.4" etichette="47,-0.24,49;88,-0.24,n;7,4.19,h;13,1.57,E = 1.4" titolo="The solid curve shows the margin. The threshold is reached at 49 measurements and is met for all larger integer sample sizes."}
:::

::::teorema{#unilateri titolo="Lower and upper bounds"}
In the same normal model for a mean with known $\sigma$, the one-sided **upper bound** with confidence level $1-\alpha$ is $U=\bar X+z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, giving the confidence set $(-\infty,U]$. The **lower bound** is $L=\bar X-z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, giving the set $[L,+\infty)$. For a normal sample with unknown variance, use $S$ and the t quantile of order $1-\alpha$.

:::dimostrazione
Consider the upper bound. The event $\mu\leq U$ is equivalent to $Z\geq-z_{1-\alpha}$ for the standard normal pivot. Symmetry gives $P(Z\geq-z_{1-\alpha})=1-\alpha$. For the lower bound the equivalent event is $Z\leq z_{1-\alpha}$. Each construction places the entire probability of exclusion in one tail.
:::
::::

:::esempio{titolo="Comparing the mean with a minimum threshold"}
To assess whether the mean of a normal population exceeds a service threshold, use a lower bound. With $\bar x=52$, standard error $2$, and $z_{0.95}\approx1.645$, the $95\,\%$ lower bound is approximately $48.71$. The confidence set therefore contains only values at least as large as $48.71$. In the chapter on hypothesis testing, the same critical threshold corresponds to a one-sided test of the mean based on the same pivot.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-4;1.645" segmenti="1.645,0,1.645,0.1031" etichette="1.72,0.14,1.645;-0.9,0.17,0.95" xmin=-4 xmax=4 ymin=-0.04 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="For the lower bound, the event $\mu\geq L$ is equivalent to $Z\leq1.645$. The shaded area is $0.95$, and the excluded $5\,\%$ is entirely in the right tail of the pivot."}
:::

:::osservazione
Calculating a lower and an upper bound, each with confidence level $95\,\%$, from the same normal sample with known standard deviation yields two distinct one-sided statements. For both to hold, the pivot must lie between $-z_{0.95}$ and $z_{0.95}$. The central area is $90\,\%$ because $5\,\%$ is excluded on each side. For a two-sided $95\,\%$ interval use $z_{0.975}$ instead.
:::
