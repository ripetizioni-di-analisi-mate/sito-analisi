---
titolo: "Hypothesis testing, power, and chi-square tests"
sommario: "From hypotheses to statistical decisions, including power, tests for means, proportions, and variances, and the analysis of counts."
---

## Hypotheses and decision rules

:::definizione{#ipotesi titolo="Null and alternative hypotheses"}

Let $\theta$ be a parameter of a probability model, for example the mean $\mu$ of component lifetimes. The **null hypothesis** $H_0$ specifies the set $\Theta_0$ of values to be tested. The **alternative hypothesis** $H_1$ specifies the set $\Theta_1$ of values addressed by the research question. The two sets are disjoint. The null hypothesis is simple when it specifies a single distribution for the sample. It is composite when it allows more than one, for example when it specifies the mean but leaves the variance unknown.

To study departures from a reference value $\mu_0$, use $H_0:\mu=\mu_0$ against $H_1:\mu\ne\mu_0$. To determine whether the mean is greater than $\mu_0$, use $H_0:\mu\le\mu_0$ against $H_1:\mu>\mu_0$. To test for a decrease, use $H_0:\mu\ge\mu_0$ against $H_1:\mu<\mu_0$. In one-sided tests for a mean, the rejection probability under $H_0$ is often largest at the boundary $\mu=\mu_0$. In that case a calculation at the boundary also controls the rejection probability at interior values of the null hypothesis.

:::

:::definizione{#regione-critica titolo="Test statistic and rejection region"}

A **test statistic** $T$ is a function of the sample. Substituting the observations into this function gives the value $t_{\mathrm{obs}}$. The **rejection region** $C$ is the set of statistic values for which the rule calls for rejecting $H_0$. Its construction uses the distribution of $T$ under $H_0$ and specifies which outcomes provide evidence for $H_1$.

If large values of $T$ favor the alternative, choose a threshold $c$ and reject when $T\ge c$. For a test of a decrease with the same statistic increasing with the mean, the rejection region is in the lower tail. For a statistic symmetric about zero and a two-sided alternative, a common rule is to reject when $|T|\ge c$.

:::

:::esempio{titolo="The research question determines the direction"}

A mean lifetime of at least $500$ hours meets the design requirement. If the investigation seeks evidence that the requirement is violated, the hypotheses are $H_0:\mu\ge500$ and $H_1:\mu<500$. A sample mean of $510$ hours lies on the side opposite the one that would support rejection. The requirement determines the alternative before sampling. Choosing the tail according to the sign of the observed difference would effectively include both tails and change the error probability of the rule.

:::

## Errors and power

:::definizione{#errori titolo="Significance level, Type II error, and power"}

For every value $\theta$, the **power function** $\pi(\theta)=P_\theta(T\in C)$ is the probability of rejecting the null hypothesis when the parameter equals $\theta$. The subscript on $P_\theta$ identifies the distribution used to calculate the probability. For $\theta\in\Theta_0$, rejection constitutes a **Type I error**. A test has level $\alpha$ if
$$
\sup_{\theta\in\Theta_0}\pi(\theta)\le\alpha.
$$
For $\theta\in\Theta_1$, failing to reject is a Type II error with probability $\beta(\theta)=1-\pi(\theta)$. Thus the probability $\beta(\theta)$ depends on the particular effect one wishes to detect.

If at a given alternative value a procedure rejects in $84$ samples out of $100$ in the long run, its power at that value is $0.84$ and $\beta$ equals $0.16$. Power may be lower for an alternative value closer to the null boundary.

:::

::::teorema{#potenza-z titolo="Power of an upper-tailed z test"}

Let $\bar X$ be the mean of $n$ independent normal observations with mean $\mu$ and known standard deviation $\sigma>0$. Let $z_p$ denote the standard normal quantile of order $p$ and $\Phi$ its cumulative distribution function. For testing $H_0:\mu\le\mu_0$ against $H_1:\mu>\mu_0$, the threshold for the sample mean and the power are
$$
\begin{aligned}
c&=\mu_0+z_{1-\alpha}\frac{\sigma}{\sqrt n},\\[6pt]
\pi(\mu)&=1-\Phi\!\left(z_{1-\alpha}-
          \frac{(\mu-\mu_0)\sqrt n}{\sigma}\right).
\end{aligned}
$$

:::dimostrazione

The threshold comes from the upper tail of the distribution of the sample mean at the boundary $\mu_0$. To calculate power, keep this threshold and use the distribution of $\bar X$ when the population mean is $\mu$. Indeed, $\dfrac{(\bar X-\mu)\sqrt n}{\sigma}$ has a standard normal distribution, so
$$
P_\mu(\bar X\ge c)=1-\Phi\!\left(\frac{(c-\mu)\sqrt n}{\sigma}\right).
$$
Substituting $c$ gives the formula. Power increases with $\mu$, so the maximum of $\pi(\mu)$ over $\mu\le\mu_0$ is $\pi(\mu_0)=\alpha$.

:::

::::

:::esempio{titolo="One threshold, two sampling distributions"}

With $\mu_0=50$, $\sigma=10$, $n=25$, and $\alpha=0.05$, we have $\dfrac{\sigma}{\sqrt n}=2$. Since $z_{0.95}\approx1.645$, the threshold for the sample mean is $c\approx53.29$. If $\mu=54$, the standardized threshold is approximately $-0.355$. The rejection probability is therefore $1-\Phi(-0.355)\approx0.639$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI);exp(-(x-2)^2/2)/sqrt(2*PI)" area="exp(-(x-2)^2/2)/sqrt(2*PI);0;1.645;5.5" segmenti="1.645,0,1.645,0.375" etichette="1.645,-0.072,c" xmin=-4 xmax=5.5 ymin=-0.095 ymax=0.48 nomi="z,y" legenda="\mu=50;\mu=54" titolo="Threshold on the Z scale and rejection probability under the alternative."}

On the scale standardized relative to $\mu_0$, the two distributions have centers $0$ and $2$. The threshold is the same in both cases. Reducing $\alpha$ while holding $n$ fixed moves the threshold to the right and reduces power at $\mu=54$. At a fixed significance level, increasing $n$ reduces the standard error and makes the two distributions of the sample mean easier to distinguish.

:::

:::osservazione{titolo="Sample size for a specified power"}

To plan a study that detects an increase $\delta=\mu-\mu_0>0$, specify a minimum power $1-\beta_\star$. In the normal model with known variance and an upper-tailed alternative, the power requirement is equivalent to
$$
\frac{\delta\sqrt n}{\sigma}\ge z_{1-\alpha}+z_{1-\beta_\star}.
$$
The formula follows by isolating the standardized threshold in the formula for $\pi(\mu_0+\delta)$ and using the symmetry of the normal distribution. When the right-hand side is positive, isolate $\sqrt n$, square both sides, and round up to an integer. For example, with $\delta=4$, $\sigma=10$, $\alpha=0.05$, and minimum power $0.80$, we obtain $n\ge(2.487\cdot 2.5)^2\approx38.66$, so at least $39$ observations are needed. Halving the difference to be detected while keeping the other quantities fixed quadruples the theoretical threshold for $n$.

With $n=39$, power at $\mu=54$ is $1-\Phi\!\left(1.645-\dfrac{4\sqrt{39}}{10}\right)=1-\Phi(-0.853)\approx0.803$, whereas with $n=25$ it is approximately $0.639$. Both power functions equal $0.05$ at $\mu=50$ because the significance level determines the threshold.

::grafico{f="1/(1+exp(1.5976*(1.6449-(x-50)/2)*(1+0.04417*(1.6449-(x-50)/2)^2)));1/(1+exp(1.5976*(1.6449-(x-50)*0.6245)*(1+0.04417*(1.6449-(x-50)*0.6245)^2)))" punti="50,0.05,pieno;54,0.639,pieno;54,0.803,pieno" segmenti="54,0,54,0.803;44,0.8,54,0.8" etichette="54.5,0.58,0.639;51.7,0.87,0.803" xmin=43.3 xmax=62 ymin=-0.1 ymax=1.12 nomi="μ,π" legenda="n=25;n=39" titolo="Power functions for the test with $\mu_0=50$, $\sigma=10$, and $\alpha=0.05$. At $\mu=54$, power rises from $0.639$ with $n=25$ to $0.803$ with $n=39$."}

:::

:::esempio{titolo="Actual significance level for a discrete count"}

Let $X$ be the number of successes in five independent trials. Under $H_0:p=\dfrac12$ the upper-tailed test rejects if $X=5$. The probability of rejection under $H_0$ is $\dfrac1{32}$, or $0.03125$. Extending the rejection region to include four successes would raise this probability to $\dfrac6{32}=0.1875$ by adding the five sequences with a single failure. Of the two regions considered, only the first has level at most $0.05$. Under the alternative $p=\dfrac34$, that same region gives power $\left(\dfrac34\right)^5\approx0.2373$. Both calculations sum probabilities over the same rejection region using the distribution of the count at the specified parameter value.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.45 nomi="x,P" poligoni="4.62,0 4.62,0.03125 4.98,0.03125 4.98,0;5.02,0 5.02,0.2373 5.38,0.2373 5.38,0" linee="-0.38,0 -0.38,0.03125 -0.02,0.03125 -0.02,0;0.62,0 0.62,0.15625 0.98,0.15625 0.98,0;1.62,0 1.62,0.3125 1.98,0.3125 1.98,0;2.62,0 2.62,0.3125 2.98,0.3125 2.98,0;3.62,0 3.62,0.15625 3.98,0.15625 3.98,0;4.62,0 4.62,0.03125 4.98,0.03125 4.98,0;0.02,0 0.02,0.00098 0.38,0.00098 0.38,0;1.02,0 1.02,0.01465 1.38,0.01465 1.38,0;2.02,0 2.02,0.08789 2.38,0.08789 2.38,0;3.02,0 3.02,0.26367 3.38,0.26367 3.38,0;4.02,0 4.02,0.39551 4.38,0.39551 4.38,0;5.02,0 5.02,0.2373 5.38,0.2373 5.38,0" etichette="4.5,0.065,0.031;4.95,0.27,0.237" titolo="At each value of $X$, the left bar gives the probability under $p=\dfrac{1}{2}$ and the right bar the probability under $p=\dfrac{3}{4}$. The highlighted bars represent the rejection region $X=5$, with probability $0.031$ under $H_0$ and $0.237$ under the alternative."}

:::

## P-values and significance

:::definizione{#p-value titolo="P-values and the ordering of outcomes"}

Let $t_{\mathrm{obs}}$ be the observed value of a test statistic. The **p-value** is the probability, under the null hypothesis, of an outcome at least as unfavorable to $H_0$ as the observed one, according to the direction or ordering specified by the test. If the null hypothesis allows several distributions, the maximum, or supremum, of this probability over the null parameter values can be used. When the maximum occurs at the boundary, the distribution at the boundary suffices.

For a statistic with a standard normal distribution under $H_0$ and observed value $z_{\mathrm{obs}}$, the formulas are
- $p=1-\Phi(z_{\mathrm{obs}})$ for the upper-tailed alternative.
- $p=\Phi(z_{\mathrm{obs}})$ for the lower-tailed alternative.
- $p=2[1-\Phi(|z_{\mathrm{obs}}|)]$ for the symmetric two-sided test.

Reject $H_0$ if $p\le\alpha$. For the continuous tests considered here, the p-value is the smallest significance level at which the observed result leads to rejection.

:::

:::esempio{titolo="One and two tails for the same observation"}

Suppose $z_{\mathrm{obs}}=-2$ is observed. Since $\Phi(-2)\approx0.02275$, the p-value is approximately $0.02275$ for the lower-tailed alternative, $0.97725$ for the upper-tailed alternative, and $0.04550$ for the two-sided alternative. In the two-sided case, outcomes at least as extreme lie to the left of $-2$ or to the right of $2$. Since the standard normal distribution is symmetric, the two areas added together are equal.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-4.5;-2|exp(-x^2/2)/sqrt(2*PI);0;2;4.5" segmenti="-2,0,-2,0.054;2,0,2,0.054" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="Both shaded tails contribute to the two-sided p-value for an observed z of −2."}

:::

:::attenzione{titolo="The p-value depends on the null model"}

A p-value of $0.04$ does not assign probability $4\%$ to the null hypothesis. It is calculated under the null distribution and concerns a set of possible sample outcomes. For a given observed difference, a smaller standard error can also produce a smaller p-value. The practical importance of a difference depends on the estimate, its uncertainty, and its units. If a test gives $p=0.18$ at level $0.05$, failure to reject also leaves open the possibility that the sample provides little information about small effects.

:::

## Tests for a mean

::::teorema{#media titolo="Null distributions of the one-sample z and t tests"}

Let $X_1,\ldots,X_n$ be independent observations with distribution $N(\mu,\sigma^2)$, $\sigma>0$. Under $H_0:\mu=\mu_0$, if $\sigma$ is known, the statistic
$$
Z=\frac{(\bar X-\mu_0)\sqrt n}{\sigma}
$$
has a standard normal distribution. If $\sigma$ is unknown and $n\ge2$, use the sample standard deviation $S$, the square root of the sample variance with divisor $n-1$. Then
$$
T=\frac{(\bar X-\mu_0)\sqrt n}{S}\sim t_{n-1}.
$$

:::dimostrazione

Under $H_0$, the sample mean is normal with mean $\mu_0$ and variance $\dfrac{\sigma^2}{n}$. Standardization gives the distribution of $Z$. In a normal sample, $\bar X$ is also independent of $S^2$, and $U=\dfrac{(n-1)S^2}{\sigma^2}$ has a chi-square distribution with $n-1$ degrees of freedom. Hence $T=\dfrac{Z}{\sqrt{\dfrac{U}{n-1}}}$. By definition, dividing a standard normal variable by the square root of the ratio of an independent chi-square variable to its degrees of freedom gives a variable with Student's t distribution with those same degrees of freedom.

:::

::::

:::osservazione

Write $t_{\nu,p}$ for the quantile of order $p$ of Student's t distribution with $\nu$ degrees of freedom. For a two-sided test, compare $|t_{\mathrm{obs}}|$ with $t_{\nu,1-\frac{\alpha}{2}}$. Use $t_{\nu,1-\alpha}$ for the upper-tailed alternative and $t_{\nu,\alpha}$ for the lower-tailed alternative. The same rules with quantiles $z_p$ apply to a z test. The t thresholds account for the additional variability from estimating $\sigma$. When the observations are independent and identically distributed with positive finite variance, the central limit theorem and consistency of $S$ justify a large-sample approximation even without normality. The quality of that approximation depends on the shape of the distribution.

:::

:::esempio{titolo="An observed mean below the reference value"}

For $16$ normal observations, $\bar x=96$ and $s=8$. Test $H_0:\mu\ge100$ against $H_1:\mu<100$. The estimated standard error is $\dfrac{8}{\sqrt{16}}=2$, so $t_{\mathrm{obs}}=-2$. At level $0.05$ the lower-tail threshold is $t_{15,0.05}\approx-1.753$. Since $-2<-1.753$, reject $H_0$. For a two-sided alternative at the same level the comparison would be with $t_{15,0.975}\approx2.131$, and the null hypothesis would not be rejected.

::grafico{f="0.39235316*(1+x^2/15)^(-8)" area="0.39235316*(1+x^2/15)^(-8);0;-4.4;-1.753" segmenti="-1.753,0,-1.753,0.08834" punti="-2,0,pieno" xmin=-4.4 xmax=4.4 ymin=-0.06 ymax=0.45 nomi="t,f" legenda="t_{15}" titolo="The observed value is −2. It lies to the left of the threshold −1.753, in the rejection region of the one-sided test."}

:::

## Proportions and comparisons between samples

:::definizione{#proporzioni titolo="Score tests for one or two proportions"}

For $n$ independent Bernoulli trials with success probability $p$, let $X$ be the number of successes and set $\widehat p=\dfrac{X}{n}$. Under $H_0:p=p_0$, with $0<p_0<1$, the variance of $\widehat p$ is $\dfrac{p_0(1-p_0)}{n}$. The **score test** standardizes the difference using this variance:
$$
Z=\frac{\widehat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}.
$$
The null distribution of $Z$ is approximated by the standard normal when the expected counts $np_0$ and $n(1-p_0)$ are sufficiently large. When the approximation is inadequate, an exact tail probability of $X\sim\operatorname{Bin}(n,p_0)$ can be calculated. For a two-sided binomial test, the ordering of outcomes must be specified because different conventions can give different p-values.

With two independent Bernoulli samples of sizes $n_1,n_2$ and counts $x_1,x_2$, the hypothesis $H_0:p_1=p_2$ allows an unknown common proportion. Estimate it by $\widehat p_{\mathrm c}=\dfrac{x_1+x_2}{n_1+n_2}$. If the pooled proportion lies in $(0,1)$ and the expected counts are adequate, use
$$
Z=\frac{\widehat p_1-\widehat p_2}
{\sqrt{\widehat p_{\mathrm c}(1-\widehat p_{\mathrm c})
       \left(\frac1{n_1}+\frac1{n_2}\right)}}.
$$
For example, with $60$ successes out of $100$ and $20$ out of $50$, the pooled estimate is $\dfrac{80}{150}$ because under the null hypothesis each observation receives the same weight in estimating $p$.

:::

:::definizione{#confronto-medie titolo="Welch's test and the paired t test"}

For two independent samples with $n_1,n_2\ge2$, unknown variances, and $H_0:\mu_1-\mu_2=\Delta_0$, set $V_i=\dfrac{S_i^2}{n_i}$ for $i=1,2$. Welch's statistic and its approximate degrees of freedom are
$$
T_W=\frac{\bar X_1-\bar X_2-\Delta_0}{\sqrt{V_1+V_2}},
\qquad
\nu=\frac{(V_1+V_2)^2}{\frac{V_1^2}{n_1-1}+\frac{V_2^2}{n_2-1}}.
$$
The test uses Student's t distribution with the observed value of $\nu$ as its reference. This is a standard approximation for normal samples with positive, possibly unequal variances. For nonnormal data the adequacy of the sampling approximation must be assessed.

When two measurements come from the same unit, form differences $D_i=X_{1i}-X_{2i}$ using the sign convention appropriate to the question. Use statistic $T=\dfrac{(\bar D-\Delta_0)\sqrt n}{S_D}$, where $n$ is the number of pairs. The t distribution with $n-1$ degrees of freedom is exact under $H_0$ when the differences are independent across pairs and have the same normal distribution with positive variance. The variance to use is the variance of the differences, which accounts for the dependence between measurements on the same unit.

:::

:::esempio{titolo="Two measurements on the same unit"}

Nine items are measured for thickness before and after treatment. Define $D$ as thickness after treatment minus thickness before treatment, giving $\bar d=0.6$ and $s_D=0.9$ in the same units. Test $H_0:\mu_D\le0$ against $H_1:\mu_D>0$. The estimated standard error of the mean difference is $\dfrac{0.9}{\sqrt9}=0.3$ and the observed statistic is $2$. With independent pairs and normally distributed differences, the reference distribution at the null boundary is $t_8$. The quantile $t_{8,0.95}\approx1.860$ is smaller than $2$, so the test rejects at level $0.05$. The sampling unit is the item and the sample size is nine.

:::

:::esempio{titolo="Degrees of freedom in Welch's test"}

Two independent groups of nine normal observations yield sample means $31$ and $26$ and sample standard deviations $6$ and $3$, calculated with the degrees-of-freedom correction. Test equality of the means against a two-sided alternative. The estimated variances of the sample means are $4$ and $1$, so $t_W=\dfrac{5}{\sqrt5}\approx2.236$. The formula for $\nu$ gives
$$
\nu=\frac{(4+1)^2}{\frac{4^2}{8}+\frac{1^2}{8}}
=\frac{200}{17}\approx11.765.
$$
The quantile of order $0.975$ of the reference t distribution is approximately $2.184$, so the observed value leads to rejection at level $0.05$. The greater uncertainty in the first mean also affects the degrees of freedom, which here are fewer than $9+9-2=16$.

::grafico{f="0.3905641*(1+x^2/11.7647)^(-6.382353)" area="0.3905641*(1+x^2/11.7647)^(-6.382353);0;-4.5;-2.184|0.3905641*(1+x^2/11.7647)^(-6.382353);0;2.184;4.5" segmenti="-2.184,0,-2.184,0.0445;2.184,0,2.184,0.0445" punti="2.236,0,pieno" etichette="2.5,0.09,2.236" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.45 nomi="t,f" legenda="t_{11.765}" titolo="The t density with $\nu\approx11.765$ degrees of freedom. The tails beyond $-2.184$ and $2.184$ each have area $0.025$, and the observed value $2.236$ lies in the right tail."}

:::

## Goodness of fit and independence

:::definizione{#chi-quadrato titolo="Pearson's statistic and expected counts"}

Let $O_j$ denote the observed counts and $E_j>0$ the expected counts under the null hypothesis. **Pearson's chi-square statistic** is
$$
Q=\sum_j\frac{(O_j-E_j)^2}{E_j}.
$$
Each term measures the squared deviation of a count from its expected value, scaled by that expected value. Larger deviations increase the sum, so the test uses the right tail.

A **goodness-of-fit test** compares the observed distribution across $k$ categories with theoretical probabilities $p_1,\ldots,p_k$. For $n$ independent units and mutually exclusive, exhaustive categories, set $E_j=np_j$. With fixed positive probabilities, the asymptotic null distribution of $Q$ is chi-square with $k-1$ degrees of freedom. The constraint $\sum_jO_j=n$ removes one degree of freedom. In the regular case where $d$ parameters are estimated from the counts by multinomial maximum likelihood, the degrees of freedom become $k-1-d$.

:::

:::definizione{#indipendenza titolo="Test of independence in a contingency table"}

In a table with $r$ rows and $c$ columns, let $n_{i\cdot}$ denote the total for row $i$, $n_{\cdot j}$ the total for column $j$, and $n$ the overall sample size. Under independence, each cell probability is the product of the marginal probabilities. Substituting the sample marginal proportions gives
$$
E_{ij}=n\frac{n_{i\cdot}}n\frac{n_{\cdot j}}n
=\frac{n_{i\cdot}n_{\cdot j}}n.
$$
Sum the contributions over all cells to obtain Pearson's statistic. With independent units, positive marginal totals, no structural zeros, and adequate expected counts, the reference distribution is approximately chi-square with $(r-1)(c-1)$ degrees of freedom. With fixed margins, the entries in the first $r-1$ rows and first $c-1$ columns suffice to reconstruct the table.

:::

:::esempio{titolo="Independence in a two-by-two table"}

Two groups of $40$ units have $30$ and $10$ observed successes, respectively. The success column totals $40$ out of $80$, so the expected number of successes in each row is $\dfrac{40\cdot40}{80}=20$. The expected number of failures is also $20$ in each row. All four absolute deviations equal $10$, so $Q=4\cdot\dfrac{100}{20}=20$. There are $(2-1)(2-1)=1$ degrees of freedom. Since the quantile of order $0.95$ is approximately $3.841$, independence is rejected at level $0.05$.

::grafico{f="exp(-x/2)/sqrt(2*PI*x)" area="exp(-x/2)/sqrt(2*PI*x);0;3.841;22" segmenti="3.841,0,3.841,0.0298" punti="20,0,pieno" etichette="3.2,0.1,3.841;19.2,0.06,Q = 20" xmin=-0.6 xmax=22 ymin=-0.06 ymax=0.62 nomi="q,f" legenda="\chi^2_{1}" titolo="Chi-square density with one degree of freedom. The rejection region starts at $3.841$ and has area $0.05$. The observed value $Q=20$ lies well beyond the threshold."}

:::

:::attenzione{titolo="Small expected counts and repeated measurements"}

In the exercises, an expected count of at least five in each cell is a practical criterion for using Pearson's approximation. A small expected count depends on the margins or the null probabilities, so it is the expected counts that must be checked. For a sparse $2\times2$ table, Fisher's exact test can be used, conditioning on the margins. Comparing marginal response rates measured twice on the same people requires a paired-data procedure. Treating the two responses from one person as independent units changes the null distribution.

:::

:::osservazione{titolo="Overall discrepancies and cell contributions"}

Rejection in a goodness-of-fit test means that the overall discrepancies are large relative to the null model. To identify which categories contribute most, examine the individual ratios $\dfrac{O_j-E_j}{\sqrt{E_j}}$. The square of each ratio is its contribution to the statistic, while its sign distinguishes an excess from a shortfall. For example, with expected counts $10$ and $40$ in two cells, a deviation of $4$ contributes $1.6$ in the first and $0.4$ in the second. The same absolute deviation therefore receives different weights. The significance of the overall test and a separate test of an individual cell address different questions.

:::

## Variance, multiple comparisons, and intervals

:::teorema{#varianza-test titolo="Chi-square test for a variance"}

Let $S^2$ be the unbiased sample variance of $n\ge2$ independent observations from a normal population. Under $H_0:\sigma^2=\sigma_0^2$, with $\sigma_0^2>0$, the statistic $Q_\sigma=\dfrac{(n-1)S^2}{\sigma_0^2}$ has distribution $\chi^2_{n-1}$. Let $\chi^2_{\nu,p}$ denote the quantile of order $p$ for $\nu$ degrees of freedom. For the equal-tailed two-sided test, reject if $Q_\sigma$ is at least $\chi^2_{n-1,1-\frac{\alpha}{2}}$ or at most $\chi^2_{n-1,\frac{\alpha}{2}}$. Use only the right tail for an upper-tailed alternative and only the left tail for a lower-tailed alternative.

Since the chi-square distribution is asymmetric, the cutoffs for two tails of equal probability lie at different distances from the center. For example, with $\nu=9$ and $\alpha=0.05$, the endpoints of the central interval are approximately $2.700$ and $19.023$.

::grafico{f="0.00379945*max(0,x)^3.5*exp(-x/2)" area="0.00379945*max(0,x)^3.5*exp(-x/2);0;0;2.7|0.00379945*max(0,x)^3.5*exp(-x/2);0;19.023;31.6" segmenti="2.7,0,2.7,0.03186;19.023,0,19.023,0.00844" xmin=-0.4 xmax=31.6 ymin=-0.013 ymax=0.128 nomi="q,f" legenda="\chi^2_{9}" titolo="Under the chi-square distribution with nine degrees of freedom, each shaded region has probability 0.025. The thresholds are 2.700 and 19.023."}

:::

::::teorema{#multipli titolo="Bonferroni control of the familywise error rate"}

Suppose $m\ge1$ tests are performed and the aim is to control the probability of at least one false rejection across all decisions at level $\alpha$. If each test is performed at level $\dfrac{\alpha}{m}$, the familywise error rate is at most $\alpha$, even when the test statistics are dependent.

:::dimostrazione

For each true null hypothesis let $A_j$ be the event that it is rejected. The event of at least one error is the union of the events $A_j$. The probability of the union is at most the sum of their probabilities. Each term is at most $\dfrac{\alpha}{m}$ and there are at most $m$ terms, so the sum is at most $\alpha$.

:::

For example, with five tests and familywise error rate $0.05$, each decision is made at level $0.01$. Equivalently, multiply each p-value by five, cap the result at one, and compare it with $0.05$.

::::

:::osservazione{#dualita titolo="Inverting a two-sided test"}

Consider a family of level-$\alpha$ tests, one for each parameter value $\theta_0$. The set of all values $\theta_0$ that the test fails to reject is a confidence set with level at least $1-\alpha$. Indeed, if the parameter equals $\theta$, the probability that $\theta$ belongs to the set equals the probability of failing to reject the true null hypothesis, which is at least $1-\alpha$.

For a normal mean with unknown variance, the condition $|t_{\mathrm{obs}}|<t_{n-1,1-\frac{\alpha}{2}}$ is equivalent to requiring $\mu_0$ to lie between the two endpoints $\bar x\pm t_{n-1,1-\frac{\alpha}{2}}\dfrac{s}{\sqrt n}$. Under rule $p\le\alpha$, values exactly at the endpoints are rejected. Including them in a closed interval gives the same coverage in the continuous model. This correspondence applies when the interval and test are based on the same model and statistic.

For example, with $\bar x=96$, $s=8$, and $n=16$, we have $\dfrac{s}{\sqrt n}=2$ and $t_{15,0.975}\approx2.131$, so the $95\%$ interval is $96\pm4.262$, or $[91.738;\ 100.262]$. The value $\mu_0=100$ lies inside the interval, so the two-sided test at level $0.05$ does not reject $H_0:\mu=100$.

::grafico{f="abs(96-x)/2;2.131" segmenti="91.738,0,91.738,2.131;100.262,0,100.262,2.131" linee="91.738,0 100.262,0" punti="91.738,0,pieno;100.262,0,pieno;100,2,pieno" etichette="100.4,1.6,μ₀ = 100" xmin=86.3 xmax=105 ymin=-0.5 ymax=4.6 nomi="μ₀,|t|" legenda="|t_{\mathrm{obs}}(\mu_0)|;t_{15,0.975}" titolo="Absolute value of the t statistic as a function of the null value $\mu_0$, with $\bar x=96$, $s=8$, and $n=16$. The highlighted closed confidence interval for $\mu_0$ is $[91.738;\ 100.262]$, to three decimal places. The test fails to reject precisely the values strictly between the unrounded endpoints."}

For a lower-tailed alternative, inverting the t test instead gives a set unbounded below. Its upper endpoint is $\bar x+t_{n-1,1-\alpha}\dfrac{s}{\sqrt n}$. A null value above this endpoint is rejected because the observed mean lies too far to the left. The quantile of order $1-\alpha$ is used here because the entire rejection probability at the null boundary is assigned to one tail.

:::
