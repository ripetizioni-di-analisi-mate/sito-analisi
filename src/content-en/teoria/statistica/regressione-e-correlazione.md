---
titolo: "Linear regression and correlation"
sommario: "From paired data to the least-squares line, including residuals, correlation, and intervals for the slope, the mean response, and a new observation."
---

## Paired data and scatterplots

:::definizione{#dati titolo="Paired data"}
With **paired data**, each unit provides two measurements. Let $(x_i,y_i)$ denote the pair observed on unit $i$, with $i=1,\ldots,n$. In the regression of $y$ on $x$, $x$ is the predictor and $y$ is the response. For example, a workshop may record the thickness of each piece of material and the time needed to cut it. Each pair links two measurements on the same piece.

In a **scatterplot**, each pair is represented by a point in the plane. If the vertical coordinates tend to increase as we move from left to right, the plot suggests a positive association. The shape of the point cloud indicates whether a line could describe the mean relationship. Its vertical spread at different horizontal positions helps assess whether variability is approximately constant.
:::

:::esempio{titolo="Reading five observations"}
For the pairs $(1,2)$, $(2,3)$, $(3,5)$, $(4,4)$, and $(5,6)$, the last response is higher than the first. Between $x=3$ and $x=4$ there is a local decrease, so the overall upward trend still allows departures at individual points. A line describes the average trend and leaves a vertical distance to each observation.

::grafico{xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" titolo="Scatterplot of the five observed pairs"}
:::

:::attenzione
Sorting the two columns separately generally pairs measurements from different units. For example, the pairs $(1,5)$, $(2,3)$, and $(3,1)$ show a decreasing relationship. Sorting just the vertical coordinates gives $(1,1)$, $(2,3)$, and $(3,5)$, and the association becomes increasing. The means and variances of the individual columns are unchanged because each column contains the same numbers. What differs is how those numbers are paired.
:::

:::definizione{#somme-centrate titolo="Centered sums"}
Let $\bar x$ and $\bar y$ denote the means of the horizontal and vertical coordinates. The centered deviations are $x_i-\bar x$ and $y_i-\bar y$. Define the **centered sums**
$$
\begin{aligned}
S_{xx}&=\sum_{i=1}^n(x_i-\bar x)^2,\\[6pt]
S_{yy}&=\sum_{i=1}^n(y_i-\bar y)^2,\\[6pt]
S_{xy}&=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y).
\end{aligned}
$$
The first two describe the spread of the individual variables. In the third, two deviations of the same sign contribute a positive term, while opposite signs give a negative term. The sign of the sum indicates which contributions predominate. For the five observations in the example, the means are $\bar x=3$ and $\bar y=4$. The two sums of squares both equal $10$, and the sum of products is $4+1+0+0+4=9$.

::grafico{xmin=-2.7 xmax=2.7 ymin=-2.7 ymax=2.7 nomi="u,v" punti="-2,-2;-1,-1;0,1;1,0;2,2" titolo="Plot of the centered deviations u and v. At all three points off the axes, the deviations have the same sign and contribute 4, 1, and 4."}
:::

:::osservazione
Given the totals $\sum_i x_i$, $\sum_i y_i$, and $\sum_i x_i y_i$, one can calculate $S_{xy}$ as
$$
S_{xy}=\sum_{i=1}^n x_i y_i-n\bar x\bar y.
$$
Expanding the centered product and using $\sum_i x_i=n\bar x$ and $\sum_i y_i=n\bar y$ reduces the three terms containing the means to $-n\bar x\bar y$. Setting $y_i=x_i$ gives $S_{xx}=\sum_i x_i^2-n\bar x^2$. These identities allow calculations directly from a table of totals. When measurements are very large and close together, calculating directly from the deviations reduces the loss of precision caused by subtracting two nearly equal numbers.
:::

## The least-squares line

:::definizione{#criterio-minimi-quadrati titolo="The least-squares criterion"}
For the line $a+bx$, write $a$ for the intercept and $b$ for the slope. At predictor value number $i$, the line gives $a+bx_i$, so the vertical deviation from the fitted line is $y_i-a-bx_i$. The **least-squares** criterion chooses $a$ and $b$ to minimize the sum
$$
Q(a,b)=\sum_{i=1}^n(y_i-a-bx_i)^2.
$$
Squaring gives positive contributions from deviations of opposite signs. For example, two deviations $-2$ and $2$ contribute $8$ to the criterion. Since the deviations are vertical, interchanging predictor and response changes the minimization problem.
:::

::::teorema{#retta titolo="The least-squares line with an intercept"}
Consider $n\ge 2$ pairs with $S_{xx}>0$. The minimum of $Q(a,b)$ is unique and occurs at
$$
b=\frac{S_{xy}}{S_{xx}},
\qquad
a=\bar y-b\bar x.
$$
Write $\hat y(x)=a+bx$ for the fitted value at any predictor value $x$. The line passes through $(\bar x,\bar y)$ because substituting $\bar x$ gives $\hat y(\bar x)=\bar y$.

:::dimostrazione
To determine the minimum, first find the best intercept for a fixed slope. The conditions for a stationary point, obtained by differentiating $Q$ with respect to $a$ and $b$, are the **normal equations**
$$
\begin{cases}
\sum_i(y_i-a-bx_i)=0,\\
\sum_i x_i(y_i-a-bx_i)=0.
\end{cases}
$$
The first equation is $n(\bar y-a-b\bar x)=0$, so $a=\bar y-b\bar x$. With this intercept, the deviation becomes $(y_i-\bar y)-b(x_i-\bar x)$. These deviations sum to zero. In the second equation $x_i$ can therefore be replaced by $x_i-\bar x$ because the constant $\bar x$ makes zero contribution. This yields $S_{xy}-bS_{xx}=0$.

To verify that this point minimizes the objective function, decompose the function as
$$
Q(a,b)=n(\bar y-a-b\bar x)^2+S_{yy}-2bS_{xy}+b^2 S_{xx}.
$$
Write each deviation as a centered deviation plus the constant $\bar y-a-b\bar x$ and expand the square to obtain the decomposition. With $b$ fixed, the first term is minimized by the unique intercept that makes it zero. The remaining term is quadratic in $b$ with coefficient $S_{xx}>0$, so its unique minimum is at the slope found above.
:::
::::

:::esempio{titolo="Slope, intercept, and units"}
For the five observations with $\bar x=3$, $\bar y=4$, $S_{xx}=10$, and $S_{xy}=9$, we obtain
$$
\begin{aligned}
b&=\frac{9}{10}=0.9,\\[6pt]
a&=4-0.9\cdot3=1.3,\\[6pt]
\hat y(x)&=1.3+0.9x.
\end{aligned}
$$
If $x$ is measured in millimeters and $y$ in seconds, an increase of one millimeter corresponds to an estimated increase of $0.9\,\mathrm{s}$ in the response. The intercept is measured in seconds and represents the fitted value at $x=0$. Since the observed predictor values range from $1$ to $5$, interpreting the intercept experimentally requires that the model remain plausible as far as $0$.
:::

:::osservazione
In the regression of $x$ on $y$, the predictor becomes $y$, so the slope is $\dfrac{S_{xy}}{S_{yy}}$ if $S_{yy}>0$. For example, if $S_{xx}=20$, $S_{yy}=45$, and $S_{xy}=18$, the slopes of the two regression lines are $0.9$ and $0.4$. Solving the first equation for $x$ would instead give slope $\dfrac{1}{0.9}$. The difference reflects which deviations are minimized. In the first regression we measure deviations in $y$ at fixed $x$. In the other regression we measure deviations in $x$ at fixed $y$.
:::

## Residuals and goodness of fit

:::definizione{#residui titolo="Fitted values and residuals"}
The **fitted value** at predictor observation $i$ is $\hat y_i=a+bx_i$. The **residual** is $e_i=y_i-\hat y_i$. It is positive when the observed point lies above the line and negative when it lies below. The normal equations for regression with an intercept give $\sum_i e_i=0$ and $\sum_i x_i e_i=0$. The first constraint ensures that the mean of the fitted values equals the mean of the observed responses.
:::

:::esempio{titolo="Vertical deviation from the line"}
For the line $\hat y(x)=1.3+0.9x$, the fitted value at $4$ is $4.9$. The observed response is $4$, so the residual is $-0.9$. At $3$ the fitted value is $4$ and the observed response is $5$, so the residual equals $1$. The dashed segments in the figure represent these two vertical differences.

::grafico{f="1.3+0.9*x" xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" segmenti="3,4,3,5;4,4,4,4.9" legenda="\hat y=1.3+0.9x" titolo="Fitted line and vertical deviations at predictor values 3 and 4"}
:::

::::teorema{#scomposizione-regressione titolo="Decomposing variability"}
For a least-squares line with an intercept and $S_{xx}>0$, let $SST=\sum_i(y_i-\bar y)^2$ denote the total sum of squares, $SSR=\sum_i(\hat y_i-\bar y)^2$ the sum of squares attributed to regression, and $SSE=\sum_i e_i^2$ the residual sum of squares. Then
$$
SST=SSR+SSE.
$$
This identity compares the fitted line with the model that assigns the same mean $\bar y$ to every unit.

:::dimostrazione
Each deviation from the mean can be written as $(\hat y_i-\bar y)+e_i$. Expanding the square gives two squared terms and the cross term $2\sum_i(\hat y_i-\bar y)e_i$. Since $\hat y_i-\bar y=b(x_i-\bar x)$, the cross term is
$$
2b\left(\sum_i x_i e_i-\bar x\sum_i e_i\right)=0.
$$
Both sums vanish by the normal equations. Summing the squares therefore leaves $SSR$ and $SSE$.
:::
::::

:::definizione{#coefficiente-determinazione titolo="Coefficient of determination"}
If $SST>0$, the **coefficient of determination** is
$$
R^2=\frac{SSR}{SST}=1-\frac{SSE}{SST}.
$$
With an intercept and a least-squares fit, $R^2$ lies in $[0,1]$ because both parts of the decomposition are nonnegative. It gives the fraction of the observed variability in the response accounted for by the line. For example, for the five observations, total variability is $10$ and $SSR=b^2S_{xx}=8.1$. Consequently, $SSE=1.9$ and $R^2=0.81$.
:::

:::attenzione
The value $0.81$ is a fraction of a sum of squares. The percentage of predictions within a given tolerance, for example half a second, would require counting the deviations that meet that threshold. These are two different measures. If all the response values are equal, $SST=0$ and the definition of $R^2$ has a zero denominator, even when the line reproduces every observation exactly.
:::

## Pearson correlation

:::definizione{#pearson titolo="Pearson correlation coefficient"}
When $S_{xx}>0$ and $S_{yy}>0$, the **sample Pearson correlation coefficient** is
$$
r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.
$$
The denominator makes the ratio dimensionless. Its sign is that of $S_{xy}$ and agrees with the sign of the slope in the regression of $y$ on $x$. Regression assigns distinct roles to the response and the predictor, whereas the calculation of $r$ is symmetric. For the five observations, $r=\dfrac{9}{\sqrt{10\cdot 10}}=0.9$.
:::

::::teorema{#pearson-determinazione titolo="Correlation and the coefficient of determination"}
For data with $S_{xx}>0$ and $S_{yy}>0$, simple linear regression with an intercept gives $R^2=r^2$. The sign of $r$ identifies the direction of the association even when two fitted lines have the same $R^2$.

:::dimostrazione
Since the line passes through the point determined by the two means, $\hat y_i-\bar y=b(x_i-\bar x)$. Hence $SSR=b^2S_{xx}$. Substituting $b=\dfrac{S_{xy}}{S_{xx}}$ into the formula for $R^2$ gives
$$
R^2=\frac{b^2S_{xx}}{S_{yy}}
=\frac{S_{xy}^2}{S_{xx}S_{yy}}
=r^2.
$$
From $R^2\le 1$ it follows that $|r|\le 1$. If $|r|=1$, then $SSE=0$, so all points lie exactly on the line. The sign is positive for a line that rises and negative for one that falls.
:::
::::

:::osservazione
Adding a constant to all predictor values leaves their deviations from their mean unchanged, so $r$ is unchanged. Multiplying the predictor values by a positive constant $c$ multiplies the deviations and $S_{xy}$ by $c$, while $S_{xx}$ is multiplied by $c^2$. The factor cancels in the ratio. For $c<0$ the denominator is multiplied by $|c|$ and the numerator by $c$, so the sign of $r$ reverses. Converting the predictor from meters to centimeters leaves $r$ unchanged and divides the slope per unit of the predictor by $100$.
:::

:::osservazione
Standardizing each variable by its own sample standard deviation gives two columns with mean zero and sum of squares $n-1$. In the regression of the standardized columns, the intercept is therefore zero and the denominator of the slope equals $n-1$. The same number is the denominator in Pearson's coefficient because it is the square root of the product of the two sums of squares. The standardized slope therefore equals $r$. If $r=0.6$, an increase of one standard deviation in the predictor corresponds to an increase of $0.6$ standard deviations in the fitted response.
:::

:::attenzione
For the three points $(-1,1)$, $(0,0)$, and $(1,1)$, symmetry gives $S_{xy}=0$, so $r=0$. The predictor still determines the response through $y=x^2$. A zero coefficient indicates the absence of linear association as measured by Pearson's correlation. The shape of the scatterplot is still needed to identify curved relationships. Since $b=0$, the least-squares line is the horizontal line $\hat y=\bar y=\dfrac23$.

::grafico{f="x^2;2/3" xmin=-1.8 xmax=1.8 ymin=-0.4 ymax=2.2 punti="-1,1;0,0;1,1" legenda="y=x^2;\hat y=\frac{2}{3}" titolo="The three points lie on the parabola $y=x^2$, but the least-squares line is horizontal and $r=0$."}
:::

## The linear model and inference for the slope

:::definizione{#modello-lineare titolo="Linear model with independent errors"}
In the **simple linear model** with fixed predictor values, the response $Y_i$ is random and satisfies
$$
Y_i=\alpha+\beta x_i+\varepsilon_i.
$$
The coefficients $\alpha$ and $\beta$ are the parameters of the mean response line. The errors $\varepsilon_i$ have mean zero, so $E[Y_i]=\alpha+\beta x_i$. Classical inference further assumes independence and a common variance $\sigma^2>0$. The error $\varepsilon_i$ is the deviation from the true mean response line, which depends on unknown parameters. The residual $e_i$ can be calculated after fitting a line to the sample. If the errors are also normally distributed, the t statistics for regression coefficients have exact Student's t distributions under their null hypotheses.
:::

:::teorema{#inferenza titolo="Standard error and hypothesis test for the slope"}
In the fixed-predictor model with independent errors $N(0,\sigma^2)$, $n>2$, and $S_{xx}>0$, the error variance is estimated by the **residual variance**
$$
s_e^2=\frac{SSE}{n-2}.
$$
Two coefficients are estimated, leaving $n-2$ degrees of freedom for estimating dispersion. The estimated standard error of the slope is
$$
SE(b)=\frac{s_e}{\sqrt{S_{xx}}}.
$$
Under $H_0\colon\beta=\beta_0$, the statistic $T=\dfrac{b-\beta_0}{SE(b)}$ has distribution $t_{n-2}$. Write $t_{\nu,p}$ for the quantile of order $p$ of Student's t distribution with $\nu$ degrees of freedom. A confidence interval with level $1-\gamma$ for $\beta$ is
$$
b\pm t_{n-2,1-\frac{\gamma}{2}}SE(b).
$$
The level $\gamma$ is distinct from the intercept $\alpha$. A smaller standard error gives a more precise estimate at a fixed confidence level.
:::

:::osservazione
Writing $B$ for the slope estimator as a random variable gives
$$
B=\beta+\frac{\sum_i (x_i-\bar x)\varepsilon_i}{S_{xx}}.
$$
Substitute the model into the sum of centered products to obtain this expression. The intercept contributes nothing because $\sum_i(x_i-\bar x)=0$. Independence of the errors gives the random numerator variance $\sigma^2 S_{xx}$, so the slope has variance $\dfrac{\sigma^2}{S_{xx}}$. With normal errors the slope is normally distributed. The residual sum of squares divided by $\sigma^2$ has a chi-square distribution with $n-2$ degrees of freedom and is independent of the slope. This holds because for a normal vector with covariance $\sigma^2 I$, the projections of the errors onto the subspace spanned by the intercept and predictor vectors and onto its orthogonal complement are independent. Dividing a standard normal variable by the square root of the normalized chi-square variable gives Student's t distribution.
:::

:::esempio{titolo="Testing a hypothesized slope"}
With $n=11$, $b=1.8$, and $SE(b)=0.3$, consider $H_0\colon\beta=1.2$ against a two-sided alternative at the $5\%$ level. The observed statistic is
$$
T=\frac{1.8-1.2}{0.3}=2.
$$
Since $|T|=2<2.262=t_{9,0.975}$, the test does not reject $H_0$. Using the given quantile, the $95\%$ interval is $[1.1214;\,2.4786]$. The value $1.2$ lies in the interval, consistent with the two-sided test at the same level.

::grafico{f="0.388035*(1+x^2/9)^(-5)" area="0.388035*(1+x^2/9)^(-5);0;-4.6;-2.262|0.388035*(1+x^2/9)^(-5);0;2.262;4.6" punti="2,0.0617,pieno,T" segmenti="2,0,2,0.0617" xmin=-4.6 xmax=4.8 ymin=-0.035 ymax=0.45 nomi="t,f" legenda="t_9" titolo="Student's t density with $9$ degrees of freedom. The shaded tails beyond $\pm 2.262$ form the rejection region at level $5\%$. The observed value $T=2$ lies between the thresholds."}
:::

:::osservazione
For a lower-tailed alternative, compare $T$ with the lower quantile $t_{n-2,\gamma}$. For an upper-tailed alternative, use the upper quantile $t_{n-2,1-\gamma}$. In the example with $T=2$, the two-sided $p$-value is about $0.077$, while the value for the upper-tailed alternative is about $0.038$. Decisions can differ because the two-sided test also considers deviations of the same magnitude in the opposite direction. The direction of the alternative is part of the hypothesis under investigation and must be specified before observing the sign of the estimate.
:::

## Mean response and individual prediction

:::teorema{#previsione titolo="Intervals for the mean response and a new observation"}
Assume the normal model with independent errors, common variance, $n>2$, and $S_{xx}>0$. At a new fixed predictor value $x_0$, the fitted value is $\hat y_0=a+bx_0$. Write $h_0$ for the term
$$
h_0=\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}},
$$
The interval for the **mean response** $\alpha+\beta x_0$ is then
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{h_0}.
$$
For a new independent observation with the same error variance, the **prediction interval** is
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{1+h_0}.
$$
Both intervals have the same center because the new error has mean zero. Individual prediction has a wider margin because it must also account for the variation in that particular observation.
:::

:::osservazione
The estimate of the mean response can be written as $\bar y+b(x_0-\bar x)$. In this model the sample mean and slope are uncorrelated. The errors enter the first with coefficients $\dfrac1n$ and the second with coefficients $\dfrac{x_i-\bar x}{S_{xx}}$. Their covariance is $\sigma^2$ times the sum of the products of these coefficients, which is proportional to $\sum_i(x_i-\bar x)=0$. The two variances add to give $\sigma^2h_0$. For a new response, the additional error has variance $\sigma^2$ and is independent of the sample. This produces the term $1+h_0$. The margin for the mean is smallest at $x_0=\bar x$, where the slope contribution vanishes.
:::

:::esempio{titolo="A band for the mean response in the five-point example"}
For the five observations with $\hat y(x)=1.3+0.9x$, we have $SSE=1.9$, so
$$
s_e^2=\frac{1.9}{5-2}=\frac{19}{30},\qquad s_e\approx0.796.
$$
With $t_{3,0.975}\approx3.182$, the $95\%$ margin for the mean response at predictor value $x_0$ is
$$
3.182\cdot0.796\sqrt{\frac15+\frac{(x_0-3)^2}{10}}.
$$
At $x_0=3$ the expression under the square root is $\dfrac15$ and the margin is about $1.13$. At $x_0=0$ and $x_0=6$ the expression is $\dfrac{11}{10}$, so the margin increases to about $2.66$. As $x_0$ varies, the interval endpoints trace two branches of a hyperbola, closest together at the center of the data.

::grafico{f="1.3+0.9*x" area="1.3+0.9*x+2.5323*sqrt(0.2+(x-3)^2/10);1.3+0.9*x-2.5323*sqrt(0.2+(x-3)^2/10);0;6" punti="1,2;2,3;3,5;4,4;5,6" segmenti="3,0,3,4" xmin=-0.4 xmax=6.4 ymin=-1.8 ymax=10 legenda="\hat y=1.3+0.9x" titolo="Pointwise $95\%$ confidence band for the mean response. Its width is smallest at the mean predictor value $\bar x=3$."}
:::

:::esempio{titolo="Two margins at the same x value"}
Let $n=16$, $s_e=2$, and $\hat y(\bar x)=20$. For $x_0=\bar x$ we have $h_0=\dfrac1{16}$. The estimated standard errors are therefore
$$
\begin{aligned}
SE_{\mathrm{mean}}&=2\sqrt{\frac1{16}}=\frac12,\\[6pt]
SE_{\mathrm{pred}}&=2\sqrt{1+\frac1{16}}=\frac{\sqrt{17}}2.
\end{aligned}
$$
At the $95\%$ level both are multiplied by $t_{14,0.975}\approx2.145$. The first margin is about $1.073$ and the second about $4.422$. A precise estimate of the mean can therefore coexist with a wide interval for an individual response.

::grafico{assi=0 xmin=14 xmax=26 ymin=0 ymax=3 linee="18.927,2 21.073,2;15.578,1 24.422,1" punti="18.927,2;21.073,2;15.578,1;24.422,1;20,2;20,1" segmenti="20,0.7,20,2.3" etichette="18.4,2.3,M;15.3,1.3,P;20.1,2.5,20" titolo="The 95% intervals at the same predictor value. M denotes the mean response and P the individual prediction. The vertical dashed line marks their common center, 20."}
:::

:::attenzione
The confidence level describes the coverage frequency of the procedure under repeated sampling in the same conditions. For the mean response, the interval is intended to cover a fixed parameter. For prediction, every repetition includes a new independent random response. Using the mean response interval for an individual response omits the variation in the new error and does not guarantee the stated prediction coverage.
:::

## Model diagnostics and limitations

:::definizione{#diagnostica titolo="Residual plots"}
A **residual plot** places $e_i$ on the vertical axis and $x_i$ or $\hat y_i$ on the horizontal axis. A curved pattern suggests that a linear mean leaves systematic variation unexplained. Increasing vertical spread suggests increasing variance. If observations have a time order, plotting residuals against that order also provides information. Long runs of residuals with the same sign may indicate dependence over time.
:::

:::esempio{titolo="Residuals can sum to zero while showing a curved pattern"}
At predictor values $1,2,3,4,5$ the observed residuals are $2,-1,-2,-1,2$. Their sum is zero, as is their sum weighted by the predictor values. The normal equations are therefore satisfied. The plot nevertheless shows positive residuals at the extremes and negative residuals in the middle. This pattern is consistent with a convex mean response that the line captures only in part.

::grafico{f="0" xmin=-0.4 xmax=6 ymin=-2.8 ymax=2.8 nomi="x,e" punti="1,2;2,-1;3,-2;4,-1;5,2" legenda="e=0" titolo="Residuals above zero at the extremes and below zero in the middle"}
:::

:::definizione{#leva titolo="Leverage and influence"}
In a model with an intercept, the **leverage** of observation $i$ is $h_i=\dfrac1n+\dfrac{(x_i-\bar x)^2}{S_{xx}}$. It depends on the horizontal distance of the predictor value from the center of the data. An observation is influential if removing it appreciably changes the fitted model. High leverage makes substantial influence possible, especially when the point departs from the trend of the other observations. If an extreme point lies exactly on the line determined by the other points, adding it leaves the fit unchanged.
:::

:::esempio{titolo="A high-leverage point off the original trend"}
The pairs $(1,2)$, $(2,3)$, $(3,4)$, and $(4,5)$ lie on the line $y=1+x$ with slope $1$. Add the point $(10,4)$, although the original line predicts $11$ at that predictor value. For the five pairs, $\bar x=4$ and $\bar y=\dfrac{18}{5}$. The centered sums are
$$
\begin{aligned}
S_{xx}&=130-5\cdot4^2=50,\\[6pt]
S_{xy}&=80-5\cdot4\cdot\frac{18}{5}=8,
\end{aligned}
$$
so the new slope is $b=\dfrac{8}{50}=0.16$. The leverage of the added point is
$$
h=\frac15+\frac{(10-4)^2}{50}=\frac{23}{25}=0.92.
$$
Changing the response of the added point by $\Delta$ therefore changes its fitted value by $0.92\,\Delta$. Adding this point alone reduces the slope from $1$ to $0.16$.

::grafico{f="1+x;2.96+0.16*x" xmin=-0.5 xmax=11 ymin=-0.5 ymax=12.5 punti="1,2;2,3;3,4;4,5;10,4" segmenti="10,4,10,11" legenda="y=1+x;\hat y=2.96+0.16x" titolo="The point $(10,4)$ has leverage $0.92$. Its vertical distance from the original line is $7$ and its distance from the refitted dashed line is only $0.56$."}
:::

:::osservazione
The leverages sum to $2$. Indeed, the constant terms $\dfrac1n$ sum to $1$, and the squared deviations in the numerators sum to $S_{xx}$. The average leverage is therefore $\dfrac2n$. Leverage also measures how much the fitted value for observation $i$ changes when only its response changes. In the expression $\hat y_i=\bar y+b(x_i-\bar x)$, changing $y_i$ by $\Delta$ increases $\bar y$ by $\dfrac{\Delta}{n}$ and changes $b$ by $\dfrac{(x_i-\bar x)\Delta}{S_{xx}}$. The overall change in $\hat y_i$ is therefore $h_i\Delta$.
:::

:::attenzione
A large sample value of $R^2$ describes the fit. Extrapolation also requires that the linear form remain plausible outside the observed range of the predictor. For example, a line that fits demand for a service at prices between $10$ and $20$ euros may predict negative demand at $100$ euros. The standard interval quantifies uncertainty under the linear model and assumes that the model still holds at the new predictor value.

A causal interpretation also requires additional information. In observational data, travel time and fuel consumption may rise together because both depend on the distance traveled. Correlation between time and fuel consumption alone leaves the role of this third variable unresolved.
:::

## Rank correlation

:::definizione{#spearman titolo="Spearman's rank correlation coefficient"}
**Spearman's rank correlation coefficient** is Pearson's correlation calculated from the ranks of the two variables, preserving each pair. Tied observations receive the average of the positions they occupy in the ordering. The coefficient is defined when both sets of ranks have positive variance. It describes agreement in the ordering and is also useful for ordinal data.
:::

:::esempio{titolo="Ranks with a tie"}
For $x=(10,20,20,40)$, the ranks are $(1,2.5,2.5,4)$ because the two middle values share second and third place. For $y=(8,4,6,2)$ the ranks are $(4,2,3,1)$. Both mean ranks equal $2.5$. The centered sums of squares are $4.5$ and $5$, and the sum of centered products is $-4.5$. Therefore
$$
r_S=\frac{-4.5}{\sqrt{4.5\cdot 5}}=-\sqrt{0.9}.
$$
The value is close to $-1$ because increasing ranks of $x$ mostly correspond to decreasing ranks of $y$. If the predictor values are all distinct, the response values are all distinct, and both are always in the same order, the two rank vectors coincide and the coefficient equals $1$ even when the original values have a curved relationship.
:::

:::osservazione
A strictly increasing transformation preserves order and ties, so the ranks are unchanged. Taking logarithms of positive times is one example. Pearson's correlation for the times may change because the distances between values change. Spearman's coefficient stays the same because it uses positions in the ordering. A strictly decreasing transformation reverses the order and therefore reverses the sign of the coefficient when applied to just one of the variables.
:::
