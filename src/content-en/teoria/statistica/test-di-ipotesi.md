---
titolo: "Hypothesis testing, power, and chi-square tests"
sommario: "From hypotheses to statistical decisions, including power, tests for means, proportions, and variances, and the analysis of counts."
---

A company claims that its components last at least $100$ hours on average. In a test of $16$ components the mean lifetime is $96$ hours, with sample standard deviation $8$ hours. The difference of $4$ hours may indicate that the claim is false, but it may also depend only on the components that happened to be in the sample, because another sample would give another mean. A hypothesis test is a rule, fixed before looking at the data, that decides whether the data contradict the claim. The rule is built so that the probability of rejecting a true claim is small, for example $0.05$. With these data the claim is rejected, as calculated in the section on the test for a mean.

This chapter calculates the threshold of the rule, for example "reject the claim if the sample mean is at most $96.49$ hours", the probabilities that the rule makes a wrong decision, and the p-value, that is, the probability of a result at least this far from the claim when the claim is true. The rules concern a mean, a proportion such as the fraction of defective items, the comparison of two groups, a variance, and tables of counts.

The chapter belongs to statistical inference (Chapters 8-12). It uses the distribution of the sample mean from Chapter 8, the normal, chi-square, and Student's t distributions from Chapter 6, and the statistics of the confidence intervals of Chapter 10; the last section shows that a confidence interval is the set of values that a test does not reject. In Chapter 12 the same procedure decides whether the slope of a regression line differs from zero.

## Hypotheses and decision rules

:::definizione{#ipotesi titolo="Null and alternative hypotheses"}

A company claims that the mean lifetime of its components is $500$ hours. The mean lifetime of all components produced is a parameter, denoted by $\mu$ (read mu), and the claim states that $\mu=500$. Before collecting data, two mutually exclusive statements about the parameter are written down. The **null hypothesis** $H_0$ is the statement being tested, here $H_0:\mu=500$. The **alternative hypothesis** $H_1$ collects the values of interest to the research question, here $H_1:\mu\ne500$. The test uses the sample to decide whether to reject $H_0$ in favor of $H_1$.

In symbols, let $\theta$ (read theta) be the parameter of a probability model. The null hypothesis states that $\theta$ belongs to a set $\Theta_0$ (capital theta zero), the alternative that it belongs to a set $\Theta_1$, and the two sets are disjoint. In the example $\Theta_0=\{500\}$.

The null hypothesis is called simple when it determines a single distribution for the sample, and composite when it allows more than one. With normal lifetimes of known standard deviation $\sigma=40$, the hypothesis $H_0:\mu=500$ fixes the single distribution $N(500,40^2)$ and is simple. With $\sigma$ unknown, the same $H_0$ allows the distribution $N(500,\sigma^2)$ for every $\sigma>0$ and is composite. The hypothesis $H_0:\mu\le500$ is also composite.

Given a reference value $\mu_0$, there are three pairs of hypotheses for a mean.

- For a departure in either direction, $H_0:\mu=\mu_0$ and $H_1:\mu\ne\mu_0$.
- To establish an increase, $H_0:\mu\le\mu_0$ and $H_1:\mu>\mu_0$.
- To establish a decrease, $H_0:\mu\ge\mu_0$ and $H_1:\mu<\mu_0$.

The first alternative contains values on both sides of $\mu_0$ and is called **two-sided**; the other two are called one-sided. The corresponding test is called two-sided, upper-tailed if $H_1:\mu>\mu_0$, and lower-tailed if $H_1:\mu<\mu_0$. The chosen pair determines on which side the results that lead to rejection lie.

When $H_0$ contains several values, as $H_0:\mu\le\mu_0$ does, the probability of a wrong rejection must be calculated for each of them. The null value closest to the alternative, $\mu=\mu_0$, is called the boundary of the null hypothesis; the block on the significance level shows that for one-sided tests for a mean the calculation at the boundary suffices.

:::

:::definizione{#regione-critica titolo="Test statistic and rejection region"}

To test $H_0:\mu\le50$ against $H_1:\mu>50$ with $25$ observations, one rule is to calculate the sample mean $\bar X$ and reject $H_0$ if $\bar X\ge53.29$; the number $53.29$ is derived in the next section. Here $\bar X$ is the test statistic, and the values from $53.29$ upward form the rejection region.

A **test statistic** $T$ is a function of the sample. Substituting the observed data into this function gives the value $t_{\mathrm{obs}}$ (obs stands for observed). The **rejection region**, also called the critical region, is the set $C$ of values of $T$ for which the rule rejects $H_0$. It is built from the distribution of $T$ under $H_0$, that is, when $H_0$ is true, by placing in $C$ the values that become more probable when $H_1$ is true.

- If large values of $T$ point to $H_1$, as $\bar X$ does for an increase in the mean, choose a threshold $c$ and reject when $T\ge c$.
- If small values of $T$ point to $H_1$, as $\bar X$ does for a decrease in the mean, reject when $T\le c$.
- If $T$ has a distribution symmetric about zero under $H_0$ and the alternative is two-sided, reject when $|T|\ge c$, that is, when $T\le-c$ or $T\ge c$.

In the first two cases the rejection region is one tail of the distribution; in the third it consists of two tails. Once $t_{\mathrm{obs}}$ is calculated, the decision consists in checking whether it belongs to $C$.

:::

:::esempio{titolo="The research question determines the direction"}

A mean lifetime of at least $500$ hours meets the design requirement. If the investigation seeks evidence that the requirement is violated, the hypotheses are $H_0:\mu\ge500$ and $H_1:\mu<500$, and rejection occurs for small sample means. A sample mean of $510$ hours lies on the side opposite the one that would lead to rejection, so the rule does not reject $H_0$.

The requirement determines the alternative, which is fixed before sampling. If each tail has probability $0.05$ when $H_0$ is true, someone who chooses the tail after seeing the sign of the result rejects whenever the result falls in either tail. That person therefore rejects a true hypothesis with probability $0.05+0.05=0.10$, twice the stated value.

:::

## Errors and power

:::definizione{#errori titolo="Significance level, Type II error, and power"}

The rule of the previous block rejects $H_0:\mu\le50$ if $\bar X\ge53.29$. Since the decision is based on a sample, it can be wrong in two ways.

- If $\mu=50$, so that $H_0$ is true, a sample may give $\bar X\ge53.29$ and the rule rejects. Rejecting a true null hypothesis is a **Type I error**.
- If $\mu=54$, so that $H_1$ is true, a sample may give $\bar X<53.29$ and the rule does not reject. Failing to reject a false null hypothesis is a Type II error.

For every value $\theta$, the **power function** $\pi(\theta)=P_\theta(T\in C)$ (read pi of theta) is the probability that the rule rejects $H_0$ when the parameter equals $\theta$. The subscript on $P_\theta$ identifies the distribution used to calculate the probability. For $\theta\in\Theta_0$, $\pi(\theta)$ is the probability of a Type I error. For $\theta\in\Theta_1$ rejection is the correct decision, and the Type II error has probability $\beta(\theta)=1-\pi(\theta)$ (beta of theta). With $\sigma=10$ the next theorem gives $\pi(50)=0.05$, $\pi(54)\approx0.639$, and therefore $\beta(54)\approx0.361$.

A test has **significance level** $\alpha$ (read alpha) if the Type I error probability does not exceed $\alpha$ at any value of $H_0$:
$$
\sup_{\theta\in\Theta_0}\pi(\theta)\le\alpha.
$$
The symbol $\sup$, the supremum, is the smallest number that no $\pi(\theta)$ with $\theta\in\Theta_0$ exceeds; when there is a maximum, the supremum equals it. The level is fixed before collecting data; exercises usually use $0.05$ and $0.01$. If the maximum Type I error probability is strictly less than $\alpha$, the test is called conservative, like the test for a count at the end of this section, which at level $0.05$ has maximum probability $0.03125$.

If $H_0:\mu\le50$ contains several values, the level must be checked at all of them. In the test for a mean the rejection probability increases with $\mu$, as the next theorem proves. At $\mu=48$, for example, it is approximately $0.004$, less than $\pi(50)=0.05$. The maximum over $H_0$ therefore occurs at the boundary $\mu=50$, and it suffices to calculate the rejection probability there.

The probability $\beta(\theta)$ depends on the alternative value $\theta$. Since $\pi(52)\approx0.259$, for a true mean of $52$, close to the boundary, the rule fails to reject in about $74$ samples out of $100$; for a true mean of $58$, $\pi(58)\approx0.991$. Likewise, if at a given alternative value a procedure rejects in $84$ samples out of $100$ in the long run, its power at that value is $0.84$ and $\beta$ equals $0.16$. The power at a value of the alternative is therefore the probability of rejecting $H_0$ when the true mean is that value; the remark on sample size chooses $n$ so that power reaches a specified value.

:::

::::teorema{#potenza-z titolo="Power of an upper-tailed z test"}

Let $\bar X$ be the mean of $n$ independent normal observations with mean $\mu$ and known standard deviation $\sigma>0$. Let $z_p$ denote the standard normal quantile of order $p$, that is, the number with probability $p$ to its left (Chapter 6), and let $\Phi$ (capital phi) be the standard normal cumulative distribution function. To test $H_0:\mu\le\mu_0$ against $H_1:\mu>\mu_0$ at level $\alpha$, the test rejects $H_0$ if $\bar X\ge c$, with $c$ chosen so that $P_{\mu_0}(\bar X\ge c)=\alpha$. The rule is equivalent to rejecting if $Z=\dfrac{(\bar X-\mu_0)\sqrt n}{\sigma}\ge z_{1-\alpha}$, and the test based on this statistic is called the **z test**. The threshold for the sample mean and the power are
$$
\begin{aligned}
c&=\mu_0+z_{1-\alpha}\frac{\sigma}{\sqrt n},\\[6pt]
\pi(\mu)&=1-\Phi\!\left(z_{1-\alpha}-
          \frac{(\mu-\mu_0)\sqrt n}{\sigma}\right).
\end{aligned}
$$

:::dimostrazione

If $\mu=\mu_0$, the mean $\bar X$ is normal with mean $\mu_0$ and variance $\dfrac{\sigma^2}{n}$ (Chapter 8), so standardization gives $P_{\mu_0}(\bar X\ge c)=1-\Phi\!\left(\dfrac{(c-\mu_0)\sqrt n}{\sigma}\right)$. This probability equals $\alpha$ when $\dfrac{(c-\mu_0)\sqrt n}{\sigma}=z_{1-\alpha}$, and solving for $c$ gives the threshold. Subtracting $\mu_0$ in $\bar X\ge c$ and multiplying by the positive number $\dfrac{\sqrt n}{\sigma}$ turns the inequality into $Z\ge z_{1-\alpha}$.

To calculate power, keep the threshold $c$ and use the distribution of $\bar X$ when the mean is $\mu$. Since $\dfrac{(\bar X-\mu)\sqrt n}{\sigma}$ has a standard normal distribution,
$$
P_\mu(\bar X\ge c)=1-\Phi\!\left(\frac{(c-\mu)\sqrt n}{\sigma}\right).
$$
Substituting $c$ gives $\dfrac{(c-\mu)\sqrt n}{\sigma}=z_{1-\alpha}-\dfrac{(\mu-\mu_0)\sqrt n}{\sigma}$, which is the formula. As $\mu$ increases the argument of $\Phi$ decreases and $\Phi$ is increasing, so power increases with $\mu$. The maximum of $\pi(\mu)$ over $\mu\le\mu_0$ is therefore $\pi(\mu_0)=\alpha$.

:::

The theorem gives the threshold from the chosen level and the rejection probability for every value of the mean; the next two blocks calculate them with numbers.

::::

:::esempio{titolo="One threshold, two sampling distributions"}

With $\mu_0=50$, $\sigma=10$, $n=25$, and $\alpha=0.05$, we have $\dfrac{\sigma}{\sqrt n}=2$. Since $z_{0.95}\approx1.645$, the threshold for the sample mean is $c\approx50+1.645\cdot2=53.29$. If $\mu=54$, the threshold standardized relative to $54$ is $\dfrac{53.29-54}{2}\approx-0.355$. The rejection probability is therefore $1-\Phi(-0.355)\approx0.639$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI);exp(-(x-2)^2/2)/sqrt(2*PI)" area="exp(-(x-2)^2/2)/sqrt(2*PI);0;1.645;5.5" segmenti="1.645,0,1.645,0.375" etichette="1.645,-0.072,c" xmin=-4 xmax=5.5 ymin=-0.095 ymax=0.48 nomi="z,y" legenda="\mu=50;\mu=54" titolo="Threshold on the Z scale and rejection probability under the alternative."}

On the $Z$ scale the two distributions have centers $0$ and $\dfrac{54-50}{2}=2$, and the threshold is the same in both cases. Reducing $\alpha$ to $0.01$ with $n=25$ moves the threshold to $50+2.326\cdot2\approx54.65$, and power at $\mu=54$ falls to approximately $0.372$. At a fixed level, increasing $n$ reduces the standard error $\dfrac{\sigma}{\sqrt n}$, that is, the standard deviation of the sample mean, and the two distributions overlap less.

:::

:::osservazione{titolo="Sample size for a specified power"}

The upper-tailed z test should detect an increase $\delta=\mu-\mu_0>0$ (read delta) with power at least $1-\beta_\star$. By the theorem this happens if $1-\Phi\!\left(z_{1-\alpha}-\dfrac{\delta\sqrt n}{\sigma}\right)\ge1-\beta_\star$, that is, if $\Phi\!\left(z_{1-\alpha}-\dfrac{\delta\sqrt n}{\sigma}\right)\le\beta_\star$. Since $\Phi$ is increasing, the condition is equivalent to $z_{1-\alpha}-\dfrac{\delta\sqrt n}{\sigma}\le z_{\beta_\star}$. By the symmetry of the normal distribution $z_{\beta_\star}=-z_{1-\beta_\star}$, so
$$
\frac{\delta\sqrt n}{\sigma}\ge z_{1-\alpha}+z_{1-\beta_\star}.
$$
Isolate $\sqrt n$; if $\alpha$ and $\beta_\star$ are less than $0.5$ the two quantiles are positive, so square both sides and round up to an integer.

For example, with $\delta=4$, $\sigma=10$, $\alpha=0.05$, and minimum power $0.80$, we have $z_{0.95}\approx1.645$ and $z_{0.80}\approx0.842$, with sum $2.487$. Hence $\sqrt n\ge2.487\cdot\dfrac{10}{4}$ and $n\ge(2.487\cdot 2.5)^2\approx38.66$, so at least $39$ observations are needed. The bound on $n$ is proportional to $\dfrac{1}{\delta^2}$, so halving the difference to be detected while keeping the other quantities fixed quadruples the theoretical threshold for $n$.

With $n=39$, power at $\mu=54$ is $1-\Phi\!\left(1.645-\dfrac{4\sqrt{39}}{10}\right)=1-\Phi(-0.853)\approx0.803$, whereas with $n=25$ it is approximately $0.639$. Both power functions equal $0.05$ at $\mu=50$ because the significance level determines the threshold.

::grafico{f="1/(1+exp(1.5976*(1.6449-(x-50)/2)*(1+0.04417*(1.6449-(x-50)/2)^2)));1/(1+exp(1.5976*(1.6449-(x-50)*0.6245)*(1+0.04417*(1.6449-(x-50)*0.6245)^2)))" punti="50,0.05,pieno;54,0.639,pieno;54,0.803,pieno" segmenti="54,0,54,0.803;44,0.8,54,0.8" etichette="54.5,0.58,0.639;51.7,0.87,0.803" xmin=43.3 xmax=62 ymin=-0.1 ymax=1.12 nomi="μ,π" legenda="n=25;n=39" titolo="Power functions for the test with $\mu_0=50$, $\sigma=10$, and $\alpha=0.05$. At $\mu=54$, power rises from $0.639$ with $n=25$ to $0.803$ with $n=39$."}

:::

:::esempio{titolo="Actual significance level for a discrete count"}

Let $X$ be the number of successes in five independent trials. For $H_0:p=\dfrac12$ against $H_1:p>\dfrac12$ the upper-tailed test rejects if $X=5$. Under $H_0$ the rejection probability is $\left(\dfrac12\right)^5=\dfrac1{32}$, or $0.03125$. Extending the rejection region to four successes would add the five sequences with a single failure, each of probability $\dfrac1{32}$, and the probability would rise to $\dfrac6{32}=0.1875$. Of the two regions considered, only the first has level at most $0.05$.

The rejection probability under $H_0$ of the chosen rule, $0.03125$, is called the actual significance level. With a count the rejection region grows one value at a time, so the actual level changes in jumps and here does not equal $0.05$ exactly; the test is conservative. Under the alternative $p=\dfrac34$, the same region gives power $\left(\dfrac34\right)^5\approx0.2373$. Both calculations sum probabilities over the same rejection region using the binomial distribution (Chapter 5) at the specified value of $p$.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.45 nomi="x,P" poligoni="4.62,0 4.62,0.03125 4.98,0.03125 4.98,0;5.02,0 5.02,0.2373 5.38,0.2373 5.38,0" linee="-0.38,0 -0.38,0.03125 -0.02,0.03125 -0.02,0;0.62,0 0.62,0.15625 0.98,0.15625 0.98,0;1.62,0 1.62,0.3125 1.98,0.3125 1.98,0;2.62,0 2.62,0.3125 2.98,0.3125 2.98,0;3.62,0 3.62,0.15625 3.98,0.15625 3.98,0;4.62,0 4.62,0.03125 4.98,0.03125 4.98,0;0.02,0 0.02,0.00098 0.38,0.00098 0.38,0;1.02,0 1.02,0.01465 1.38,0.01465 1.38,0;2.02,0 2.02,0.08789 2.38,0.08789 2.38,0;3.02,0 3.02,0.26367 3.38,0.26367 3.38,0;4.02,0 4.02,0.39551 4.38,0.39551 4.38,0;5.02,0 5.02,0.2373 5.38,0.2373 5.38,0" etichette="4.5,0.065,0.031;4.95,0.27,0.237" titolo="At each value of $X$, the left bar gives the probability under $p=\dfrac{1}{2}$ and the right bar the probability under $p=\dfrac{3}{4}$. The highlighted bars represent the rejection region $X=5$, with probability $0.031$ under $H_0$ and $0.237$ under the alternative."}

:::

## P-values and significance

:::definizione{#p-value titolo="P-values and the ordering of outcomes"}

In the test of $H_0:\mu\le50$ with standard error $2$, the observed sample mean is $\bar x=54.5$, so $z_{\mathrm{obs}}=\dfrac{54.5-50}{2}=2.25$. If $\mu$ were $50$, the probability of a value of $Z$ at least $2.25$ would be $1-\Phi(2.25)\approx0.012$, that is, about $1$ sample in $100$.

The **p-value** is the probability, calculated assuming the null hypothesis is true, of a result at least as unfavorable to $H_0$ as the observed $t_{\mathrm{obs}}$. Which results are at least as unfavorable depends on the alternative, that is, on the ordering of outcomes chosen for the test: for the upper-tailed alternative the values $T\ge t_{\mathrm{obs}}$, for the lower-tailed one the values $T\le t_{\mathrm{obs}}$, for the two-sided one with symmetric $T$ the values $|T|\ge|t_{\mathrm{obs}}|$. If the null hypothesis allows several distributions, take the maximum, or supremum, of this probability over the null values; for one-sided tests for a mean the maximum is at the boundary, as for the significance level.

For a statistic with a standard normal distribution under $H_0$ and observed value $z_{\mathrm{obs}}$, the formulas are
- $p=1-\Phi(z_{\mathrm{obs}})$ for the upper-tailed alternative.
- $p=\Phi(z_{\mathrm{obs}})$ for the lower-tailed alternative.
- $p=2[1-\Phi(|z_{\mathrm{obs}}|)]$ for the symmetric two-sided test.

Reject $H_0$ if $p\le\alpha$; in that case the result is called **significant** at level $\alpha$. In the example $p\approx0.012$, so the result is significant at level $0.05$ and not at level $0.01$. For the continuous tests considered here, the p-value is the smallest significance level at which the observed result leads to rejection, so the p-value gives the decision at any level.

If only some quantiles are known, comparing with them places the p-value between two levels. For example, $z_{\mathrm{obs}}=2.2$ exceeds $z_{0.975}\approx1.96$ and is less than $z_{0.995}\approx2.576$, so the two-sided test rejects at level $0.05$ and not at level $0.01$. The two-sided p-value therefore lies between $0.01$ and $0.05$; the calculation gives approximately $0.028$.

:::

:::esempio{titolo="One and two tails for the same observation"}

Suppose $z_{\mathrm{obs}}=-2$ is observed. Since $\Phi(-2)\approx0.02275$, the p-value is approximately $0.02275$ for the lower-tailed alternative, $0.97725$ for the upper-tailed alternative, and $0.04550$ for the two-sided alternative. In the two-sided case, outcomes at least as extreme lie to the left of $-2$ or to the right of $2$. Since the standard normal distribution is symmetric, the two areas are equal and the p-value is twice one of them. In the figure $\varphi(z)$ (read phi) is the standard normal density.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-4.5;-2|exp(-x^2/2)/sqrt(2*PI);0;2;4.5" segmenti="-2,0,-2,0.054;2,0,2,0.054" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="Both shaded tails contribute to the two-sided p-value for an observed z of −2."}

:::

:::attenzione{titolo="The p-value depends on the null model"}

A p-value of $0.04$ does not assign probability $4\%$ to the null hypothesis. The calculation assumes the null distribution and gives the probability of a set of possible sample outcomes.

Moreover, a small p-value does not by itself indicate a large difference. An observed difference of $1$ gram with standard error $1$ gives $z_{\mathrm{obs}}=1$ and a two-sided p-value of about $0.317$; with standard error $0.25$, that is, with a sample $16$ times larger, it gives $z_{\mathrm{obs}}=4$ and a p-value of about $0.00006$. The practical importance of $1$ gram is judged from the estimate, its uncertainty, and its units.

If a test gives $p=0.18$ at level $0.05$, failure to reject does not prove that $H_0$ is true, because with a small sample the power against small differences is low, and the rule fails to reject in many samples even when the difference exists.

:::

## Tests for a mean

::::teorema{#media titolo="Null distributions of the one-sample z and t tests"}

Let $X_1,\ldots,X_n$ be independent observations with distribution $N(\mu,\sigma^2)$, $\sigma>0$. Under $H_0:\mu=\mu_0$, if $\sigma$ is known, the statistic
$$
Z=\frac{(\bar X-\mu_0)\sqrt n}{\sigma}
$$
has a standard normal distribution. If $\sigma$ is unknown and $n\ge2$, use the sample standard deviation $S$, the square root of the sample variance with divisor $n-1$. Then
$$
T=\frac{(\bar X-\mu_0)\sqrt n}{S}\sim t_{n-1},
$$
where $t_{n-1}$ is Student's t distribution with $n-1$ degrees of freedom (Chapter 6). The test based on $T$ is called the t test. The theorem therefore gives the reference distribution for a mean: the normal when $\sigma$ is known, the t when $\sigma$ is estimated from the data.

:::dimostrazione

Under $H_0$, the sample mean is normal with mean $\mu_0$ and variance $\dfrac{\sigma^2}{n}$, and standardization gives the distribution of $Z$. In a normal sample, moreover, $\bar X$ is independent of $S^2$, and $U=\dfrac{(n-1)S^2}{\sigma^2}$ has a chi-square distribution with $n-1$ degrees of freedom (Chapter 8). Dividing the numerator and denominator of $T$ by $\sigma$ gives $T=\dfrac{Z}{\sqrt{\dfrac{U}{n-1}}}$. By definition, the ratio of a standard normal variable to the square root of an independent chi-square variable divided by its degrees of freedom has Student's t distribution with those same degrees of freedom.

:::

::::

:::osservazione

Write $t_{\nu,p}$ for the quantile of order $p$ of Student's t distribution with $\nu$ (read nu) degrees of freedom. For a two-sided test reject if $|t_{\mathrm{obs}}|\ge t_{\nu,1-\frac{\alpha}{2}}$, for the upper-tailed alternative if $t_{\mathrm{obs}}\ge t_{\nu,1-\alpha}$, and for the lower-tailed alternative if $t_{\mathrm{obs}}\le t_{\nu,\alpha}$. The same rules with quantiles $z_p$ apply to a z test. The t thresholds are larger because they account for the additional variability from estimating $\sigma$. For example, with $15$ degrees of freedom $t_{15,0.975}\approx2.131$, compared with $z_{0.975}\approx1.96$.

If the observations are not normal but are independent and identically distributed with positive finite variance, then for large $n$ the statistic $T$ has approximately a standard normal distribution under $H_0$. This follows from the central limit theorem (Chapter 8) and the consistency of $S$, that is, the fact that $S$ approaches $\sigma$ as $n$ grows (Chapter 9). How large $n$ must be depends on the shape of the distribution, and a strongly skewed distribution requires more observations than a nearly symmetric one.

:::

:::esempio{titolo="An observed mean below the reference value"}

For $16$ normal observations, $\bar x=96$ and $s=8$. Test $H_0:\mu\ge100$ against $H_1:\mu<100$. The estimated standard error is $\dfrac{8}{\sqrt{16}}=2$, so $t_{\mathrm{obs}}=\dfrac{96-100}{2}=-2$. At level $0.05$ the lower-tail threshold is $t_{15,0.05}\approx-1.753$. Since $-2<-1.753$, reject $H_0$. For a two-sided alternative at the same level the comparison would be between $|t_{\mathrm{obs}}|=2$ and $t_{15,0.975}\approx2.131$, and the null hypothesis would not be rejected.

::grafico{f="0.39235316*(1+x^2/15)^(-8)" area="0.39235316*(1+x^2/15)^(-8);0;-4.4;-1.753" segmenti="-1.753,0,-1.753,0.08834" punti="-2,0,pieno" xmin=-4.4 xmax=4.4 ymin=-0.06 ymax=0.45 nomi="t,f" legenda="t_{15}" titolo="The observed value is −2. It lies to the left of the threshold −1.753, in the rejection region of the one-sided test."}

:::

## Proportions and comparisons between samples

:::definizione{#proporzioni titolo="Score tests for one or two proportions"}

A coin tossed $100$ times gives $60$ heads. If the coin is fair, the proportion of heads $\widehat p$ has mean $0.5$ and standard deviation $\sqrt{\dfrac{0.5\cdot0.5}{100}}=0.05$, so the difference $0.10$ equals $2$ standard deviations and the two-sided p-value is $2[1-\Phi(2)]\approx0.046$.

For $n$ independent Bernoulli trials with success probability $p$, let $X$ be the number of successes and set $\widehat p=\dfrac{X}{n}$. Under $H_0:p=p_0$, with $0<p_0<1$, the variance of $\widehat p$ is $\dfrac{p_0(1-p_0)}{n}$. The **score test** standardizes the difference using this variance, calculated at the null value $p_0$:
$$
Z=\frac{\widehat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}.
$$
By the central limit theorem the null distribution of $Z$ is approximated by the standard normal when the expected counts $np_0$ and $n(1-p_0)$ are large enough; the exercises require both to be at least $5$. With $p_0=0.04$, for example, at least $125$ trials are needed, because $0.04\cdot125=5$.

When one of the two conditions is not satisfied, the p-value is calculated exactly from the distribution $X\sim\operatorname{Bin}(n,p_0)$ (Chapter 5). For a two-sided binomial test, two common criteria give different p-values in some cases. With $n=10$, $p_0=0.3$, and $X=0$, we have $P(X=0)=0.7^{10}\approx0.0282$.

- Doubling the smaller tail gives $p\approx0.0565$.
- Adding the probabilities of the outcomes whose probability is no larger than that of the observed one, namely $X=0$ and $X\ge7$, gives $p\approx0.0282+0.0106=0.0388$.

At level $0.05$ the first criterion does not reject and the second rejects, so the criterion must be specified.

With two independent Bernoulli samples of sizes $n_1,n_2$ and counts $x_1,x_2$, the hypothesis $H_0:p_1=p_2$ states that the proportions are equal without stating their value. If $H_0$ is true, all $n_1+n_2$ trials have the same success probability, so it is estimated by the pooled proportion $\widehat p_{\mathrm c}=\dfrac{x_1+x_2}{n_1+n_2}$, in which each observation receives the same weight. If $\widehat p_{\mathrm c}$ lies in $(0,1)$ and the expected counts are adequate, use
$$
Z=\frac{\widehat p_1-\widehat p_2}
{\sqrt{\widehat p_{\mathrm c}(1-\widehat p_{\mathrm c})
       \left(\frac1{n_1}+\frac1{n_2}\right)}}.
$$
For example, with $60$ successes out of $100$ and $20$ out of $50$, the pooled estimate is $\dfrac{80}{150}\approx0.533$. The denominator is $\sqrt{0.533\cdot0.467\cdot\left(\dfrac1{100}+\dfrac1{50}\right)}\approx0.0864$, so $Z\approx\dfrac{0.60-0.40}{0.0864}\approx2.31$.

:::

:::definizione{#confronto-medie titolo="Welch's test and the paired t test"}

Compare the means $\mu_1,\mu_2$ of two populations with unknown variances, for example the scores of two classes, using two independent samples with $n_1,n_2\ge2$ observations, sample means $\bar X_1,\bar X_2$, and sample variances $S_1^2,S_2^2$ with divisor $n_i-1$. The null hypothesis is $H_0:\mu_1-\mu_2=\Delta_0$ (delta zero), usually with $\Delta_0=0$. The quantity $V_i=\dfrac{S_i^2}{n_i}$, for $i=1,2$, is the estimated variance of the mean of group $i$, and since the groups are independent the variance of the difference of the means is $V_1+V_2$. **Welch's statistic** and its approximate degrees of freedom are
$$
T_W=\frac{\bar X_1-\bar X_2-\Delta_0}{\sqrt{V_1+V_2}},
\qquad
\nu=\frac{(V_1+V_2)^2}{\frac{V_1^2}{n_1-1}+\frac{V_2^2}{n_2-1}}.
$$
The test uses Student's t distribution with the observed value of $\nu$ as its reference, and $\nu$ need not be an integer. For normal samples this approximation is accurate even with unequal variances; for nonnormal data it is used with large samples, on the basis of the central limit theorem.

When the two measurements come from the same unit, the two groups are not independent, because an item thicker than the others before a treatment remains thicker than the others afterward. Form the differences $D_i=X_{1i}-X_{2i}$, with the sign chosen according to the question. Let $\mu_D$ (mu with D) be the mean of the differences in the population, $\bar D$ their sample mean, and $S_D$ their sample standard deviation. For $H_0:\mu_D=\Delta_0$ the **paired t test** uses
$$
T=\frac{(\bar D-\Delta_0)\sqrt n}{S_D},
$$
where $n$ is the number of pairs. If the differences are independent across pairs and normal with positive variance, $T$ has exactly a t distribution with $n-1$ degrees of freedom under $H_0$. The variance used is that of the differences, which is calculated from the differences themselves and therefore already accounts for the link between the two measurements on the same unit.

:::

:::esempio{titolo="Two measurements on the same unit"}

Nine items are measured for thickness before and after treatment. Define $D$ as thickness after treatment minus thickness before treatment, giving $\bar d=0.6$ and $s_D=0.9$ in the same units. Test $H_0:\mu_D\le0$ against $H_1:\mu_D>0$. The estimated standard error of the mean difference is $\dfrac{0.9}{\sqrt9}=0.3$ and the observed statistic is $\dfrac{0.6}{0.3}=2$. With independent pairs and normally distributed differences, the reference distribution is $t_8$. The quantile $t_{8,0.95}\approx1.860$ is smaller than $2$, so the test rejects at level $0.05$. The sampling unit is the item and the sample size is nine, even though there are eighteen measurements.

:::

:::esempio{titolo="Degrees of freedom in Welch's test"}

Two independent groups of nine normal observations yield sample means $31$ and $26$ and sample standard deviations $6$ and $3$, calculated with the degrees-of-freedom correction. Test equality of the means against a two-sided alternative. The estimated variances of the sample means are $\dfrac{36}{9}=4$ and $\dfrac{9}{9}=1$, so $t_W=\dfrac{5}{\sqrt5}\approx2.236$. The formula for $\nu$ gives
$$
\nu=\frac{(4+1)^2}{\frac{4^2}{8}+\frac{1^2}{8}}
=\frac{200}{17}\approx11.765.
$$
The quantile of order $0.975$ of the reference t distribution is approximately $2.184$. Since $2.236\ge2.184$, the observed value leads to rejection at level $0.05$. The degrees of freedom are fewer than $9+9-2=16$, the degrees of freedom of the pooled-variance test (Chapter 10), because the greater uncertainty in the first mean weighs on the calculation of $\nu$.

::grafico{f="0.3905641*(1+x^2/11.7647)^(-6.382353)" area="0.3905641*(1+x^2/11.7647)^(-6.382353);0;-4.5;-2.184|0.3905641*(1+x^2/11.7647)^(-6.382353);0;2.184;4.5" segmenti="-2.184,0,-2.184,0.0445;2.184,0,2.184,0.0445" punti="2.236,0,pieno" etichette="2.5,0.09,2.236" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.45 nomi="t,f" legenda="t_{11.765}" titolo="The t density with $\nu\approx11.765$ degrees of freedom. The tails beyond $-2.184$ and $2.184$ each have area $0.025$, and the observed value $2.236$ lies in the right tail."}

:::

## Goodness of fit and independence

:::definizione{#chi-quadrato titolo="Pearson's statistic and expected counts"}

In $90$ independent trials each outcome falls into one of three categories, to which the null hypothesis assigns probabilities $\dfrac12$, $\dfrac13$, and $\dfrac16$. Under $H_0$ the expected numbers are therefore $45$, $30$, and $15$, while $50$, $25$, and $15$ are observed. The deviations $5$, $-5$, and $0$ are summarized in a single number.

Let $O_j$ denote the observed counts and $E_j>0$ the expected counts under the null hypothesis. **Pearson's chi-square statistic** is
$$
Q=\sum_j\frac{(O_j-E_j)^2}{E_j}.
$$
Each term is the squared deviation of a count from its expected value, divided by that expected value. In the example $Q=\dfrac{25}{45}+\dfrac{25}{30}+0\approx1.39$. The sum grows as the deviations grow, in either direction, so the test uses the right tail.

A **goodness-of-fit test** compares the observed distribution across $k$ categories with theoretical probabilities $p_1,\ldots,p_k$. For $n$ independent units and mutually exclusive, exhaustive categories, that is, categories such that each unit falls into exactly one, set $E_j=np_j$. With fixed positive probabilities, for large $n$ the distribution of $Q$ under $H_0$ is approximately chi-square with $k-1$ degrees of freedom (Chapter 6). The constraint $\sum_jO_j=n$ removes one degree of freedom, because once $k-1$ counts are known the last one follows by subtraction, as in $90-50-25=15$. If the $p_j$ depend on $d$ parameters estimated from the same counts by maximum likelihood (Chapter 9), each estimate removes another degree of freedom, and $k-1-d$ are used. For example, to test a Poisson distribution with mean estimated from the data over $5$ categories, use $5-1-1=3$ degrees of freedom.

In the example there are $3-1=2$ degrees of freedom. Writing $\chi^2_{\nu,p}$ for the quantile of order $p$ of the chi-square distribution with $\nu$ degrees of freedom, $\chi^2_{2,0.95}\approx5.991$. Since $1.39<5.991$, $H_0$ is not rejected at level $0.05$.

:::

:::definizione{#indipendenza titolo="Test of independence in a contingency table"}

Two groups of $40$ units have $30$ and $10$ successes, respectively, and the question is whether the proportion of successes depends on the group; the data form a two-way table (Chapter 1), and the calculation is in the example that follows. In a table with $r$ rows and $c$ columns, let $n_{i\cdot}$ denote the total for row $i$, $n_{\cdot j}$ the total for column $j$, and $n$ the overall sample size. Under independence, the probability of a cell is the product of the probabilities of its row and its column (Chapter 4). Estimating these probabilities by the marginal proportions $\dfrac{n_{i\cdot}}{n}$ and $\dfrac{n_{\cdot j}}{n}$ and multiplying by $n$ gives
$$
E_{ij}=n\frac{n_{i\cdot}}n\frac{n_{\cdot j}}n
=\frac{n_{i\cdot}n_{\cdot j}}n.
$$
Pearson's statistic is obtained by summing the terms over all cells. The conditions are independent units, positive row and column totals, adequate expected counts, and no structural zeros, that is, no cell that is empty by construction, such as "enrolled in the first year" and "has passed a third-year exam". Under these conditions the reference distribution is approximately chi-square with $(r-1)(c-1)$ degrees of freedom. The degrees of freedom are $(r-1)(c-1)$ because, with the totals fixed, the cells in the first $r-1$ rows and first $c-1$ columns suffice to reconstruct the table; the others follow by subtraction.

:::

:::esempio{titolo="Independence in a two-by-two table"}

Two groups of $40$ units have $30$ and $10$ observed successes, respectively. The success column totals $40$ out of $80$, so the expected number of successes in each row is $\dfrac{40\cdot40}{80}=20$. The expected number of failures is also $20$ in each row. All four absolute deviations equal $10$, so $Q=4\cdot\dfrac{100}{20}=20$. There are $(2-1)(2-1)=1$ degrees of freedom. Since $\chi^2_{1,0.95}\approx3.841$ and $20>3.841$, independence is rejected at level $0.05$.

::grafico{f="exp(-x/2)/sqrt(2*PI*x)" area="exp(-x/2)/sqrt(2*PI*x);0;3.841;22" segmenti="3.841,0,3.841,0.0298" punti="20,0,pieno" etichette="3.2,0.1,3.841;19.2,0.06,Q = 20" xmin=-0.6 xmax=22 ymin=-0.06 ymax=0.62 nomi="q,f" legenda="\chi^2_{1}" titolo="Chi-square density with one degree of freedom. The rejection region starts at $3.841$ and has area $0.05$. The observed value $Q=20$ lies well beyond the threshold."}

:::

:::attenzione{titolo="Small expected counts and repeated measurements"}

In the exercises, an expected count of at least five in each cell is a practical criterion for using Pearson's approximation. The check is made on the expected counts and not on the observed ones, because a small expected count depends on the margins or on the null probabilities. If two categories have small expected counts, they are merged into a category that makes sense for the problem, adding both the observed and the expected counts.

For a sparse $2\times2$ table Fisher's exact test is used. It considers the tables with the same row and column totals as the observed one, that is, it conditions on the margins, and calculates their exact probabilities with the hypergeometric distribution (Chapter 5).

If $50$ people answer yes or no before and after a course, the table contains $100$ answers but only $50$ people. The two answers of the same person are not independent, so treating them as independent units changes the null distribution. A paired-data procedure is used instead, comparing the people who switched from no to yes with those who switched from yes to no.

:::

:::osservazione{titolo="Overall discrepancies and cell contributions"}

Rejection in a goodness-of-fit test means that the overall discrepancies are large relative to the null model. To identify which categories contribute most, calculate the individual ratios $\dfrac{O_j-E_j}{\sqrt{E_j}}$. The square of each ratio is its contribution to the statistic, while its sign distinguishes an excess from a shortfall. For example, with expected counts $10$ and $40$ in two cells, a deviation of $4$ contributes $\dfrac{16}{10}=1.6$ in the first and $\dfrac{16}{40}=0.4$ in the second. The same absolute deviation therefore weighs more where the expected count is small. The overall test tells whether the frequencies, taken together, depart from the model; a separate check on one cell tells whether that single category departs, which is a different question.

:::

## Variance, multiple comparisons, and intervals

:::teorema{#varianza-test titolo="Chi-square test for a variance"}

A manufacturer claims that the volume dispensed by a machine has variance $4\,\mathrm{ml}^2$, and for $10$ bottles the unbiased sample variance is $8\,\mathrm{ml}^2$. The theorem gives the reference distribution for deciding whether the ratio of the two variances can be explained by sampling variability alone.

Let $S^2$ be the unbiased sample variance of $n\ge2$ independent observations from a normal population. Under $H_0:\sigma^2=\sigma_0^2$, with $\sigma_0^2>0$, the statistic $Q_\sigma=\dfrac{(n-1)S^2}{\sigma_0^2}$ has distribution $\chi^2_{n-1}$, because it is the quantity $\dfrac{(n-1)S^2}{\sigma^2}$ of Chapter 8 evaluated at the null value. Let $\chi^2_{\nu,p}$ denote the quantile of order $p$ for $\nu$ degrees of freedom. For the equal-tailed two-sided test, reject if $Q_\sigma\ge\chi^2_{n-1,1-\frac{\alpha}{2}}$ or if $Q_\sigma\le\chi^2_{n-1,\frac{\alpha}{2}}$. Use only the right tail, with threshold $\chi^2_{n-1,1-\alpha}$, for an upper-tailed alternative, and only the left tail, with threshold $\chi^2_{n-1,\alpha}$, for a lower-tailed alternative.

Since the chi-square distribution is asymmetric, the cutoffs for two tails of equal probability lie at different distances from the center. For example, with $\nu=9$ and $\alpha=0.05$, the endpoints of the central interval are approximately $2.700$ and $19.023$, while the mean of the distribution is $9$. For the bottles $Q_\sigma=\dfrac{9\cdot8}{4}=18$, which lies between the two thresholds, so the two-sided test at level $0.05$ does not reject $H_0$.

::grafico{f="0.00379945*max(0,x)^3.5*exp(-x/2)" area="0.00379945*max(0,x)^3.5*exp(-x/2);0;0;2.7|0.00379945*max(0,x)^3.5*exp(-x/2);0;19.023;31.6" segmenti="2.7,0,2.7,0.03186;19.023,0,19.023,0.00844" xmin=-0.4 xmax=31.6 ymin=-0.013 ymax=0.128 nomi="q,f" legenda="\chi^2_{9}" titolo="Under the chi-square distribution with nine degrees of freedom, each shaded region has probability 0.025. The thresholds are 2.700 and 19.023."}

The p-value of the equal-tailed two-sided test is twice the smaller of the probabilities to the left and to the right of the observed value. For $Q_\sigma=18$ with $9$ degrees of freedom the probability to the right is about $0.035$ and that to the left about $0.965$, so the p-value is about $2\cdot0.035=0.070$, greater than $0.05$.

:::

::::teorema{#multipli titolo="Bonferroni control of the familywise error rate"}

With $5$ independent tests at level $0.05$ on null hypotheses that are all true, the probability that no test rejects is $0.95^5$. The probability of at least one false rejection is therefore $1-0.95^5\approx0.226$. This probability, which refers to all decisions together, is called the **familywise error rate**.

Suppose $m\ge1$ tests are performed and the familywise error rate should be at most $\alpha$. If each test is performed at level $\dfrac{\alpha}{m}$, the familywise error rate is at most $\alpha$, even when the test statistics are dependent.

:::dimostrazione

For each true null hypothesis let $A_j$ be the event that it is rejected. The event of at least one error is the union of the events $A_j$. For two events $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ (Chapter 3), and since $P(A\cap B)\ge0$, we have $P(A\cup B)\le P(A)+P(B)$. Adding one event at a time, the probability of the union of several events is at most the sum of their probabilities, even for dependent events. Each term is at most $\dfrac{\alpha}{m}$ and there are at most $m$ terms, so the sum is at most $\alpha$.

:::

For example, with five tests and familywise error rate $0.05$, each decision is made at level $0.01$; with independent tests the familywise error rate becomes $1-0.99^5\approx0.049$. Equivalently, multiply each p-value by five, replace results greater than $1$ by $1$, and compare with $0.05$.

::::

:::osservazione{#dualita titolo="Inverting a two-sided test"}

With $\bar x=96$, $s=8$, and $n=16$ the estimated standard error is $2$, and the two-sided t test at level $0.05$ compares $|t_{\mathrm{obs}}|$ with $t_{15,0.975}\approx2.131$. For $\mu_0=100$ we have $|t_{\mathrm{obs}}|=2$ and the test does not reject; for $\mu_0=101$ we have $|t_{\mathrm{obs}}|=2.5$ and the test rejects. The values $\mu_0$ that are not rejected form an interval.

Consider a family of level-$\alpha$ tests, one for each parameter value $\theta_0$. The set of values $\theta_0$ that the test fails to reject is a confidence set with level at least $1-\alpha$, that is, it contains the true parameter value with probability at least $1-\alpha$ (Chapter 10). Indeed, if the parameter equals $\theta$, the probability that $\theta$ belongs to the set equals the probability of failing to reject the true hypothesis $\theta_0=\theta$, which is at least $1-\alpha$.

For a normal mean with unknown variance, the condition $|t_{\mathrm{obs}}|<t_{n-1,1-\frac{\alpha}{2}}$ is equivalent to requiring $\mu_0$ to lie between the two endpoints $\bar x\pm t_{n-1,1-\frac{\alpha}{2}}\dfrac{s}{\sqrt n}$, that is, in the t interval of Chapter 10. At the endpoints $|t_{\mathrm{obs}}|$ equals the threshold and the rule rejects. A single value has probability zero in a continuous model, however, so including or excluding the endpoints does not change the level, and the interval is written as closed, as in Chapter 10. The correspondence applies when the interval and the test are based on the same model and the same statistic.

In the example the $95\%$ interval is $96\pm2.131\cdot2=96\pm4.262$, or $[91.738;\ 100.262]$. The value $\mu_0=100$ lies inside the interval, so the two-sided test at level $0.05$ does not reject $H_0:\mu=100$.

::grafico{f="abs(96-x)/2;2.131" segmenti="91.738,0,91.738,2.131;100.262,0,100.262,2.131" linee="91.738,0 100.262,0" punti="91.738,0,pieno;100.262,0,pieno;100,2,pieno" etichette="100.4,1.6,μ₀ = 100" xmin=86.3 xmax=105 ymin=-0.5 ymax=4.6 nomi="μ₀,|t|" legenda="|t_{\mathrm{obs}}(\mu_0)|;t_{15,0.975}" titolo="Absolute value of the t statistic as a function of the null value $\mu_0$, with $\bar x=96$, $s=8$, and $n=16$. The highlighted closed confidence interval for $\mu_0$ is $[91.738;\ 100.262]$, to three decimal places. The test fails to reject precisely the values strictly between the unrounded endpoints."}

For the lower-tailed alternative the test rejects if $\dfrac{(\bar x-\mu_0)\sqrt n}{s}\le-t_{n-1,1-\alpha}$, that is, if $\mu_0\ge\bar x+t_{n-1,1-\alpha}\dfrac{s}{\sqrt n}$. Inverting the test therefore gives a set unbounded below, with upper endpoint $\bar x+t_{n-1,1-\alpha}\dfrac{s}{\sqrt n}$. A null value above the endpoint is rejected because the observed mean is much smaller than that value. The quantile of order $1-\alpha$ is used because all the rejection probability at the null boundary lies in one tail. In the example the endpoint is $96+1.753\cdot2\approx99.51$, so the lower-tailed test rejects $H_0:\mu\ge100$, as in the t test example.

:::
