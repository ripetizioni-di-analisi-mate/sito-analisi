---
titolo: "Linear regression and correlation"
sommario: "From paired data to the least-squares line, including residuals, correlation, and intervals for the slope, the mean response, and a new observation."
---

In a workshop, five pieces are recorded with the thickness of the material in millimeters and the time needed to cut it in seconds. From these data we want to find by how many seconds the cutting time increases on average for each additional millimeter of thickness, and what time to expect for a piece of given thickness. This chapter calculates the line that passes closest to the points (thickness, time). For the five pieces of the example used throughout the chapter, the line is $\hat y=1.3+0.9x$, so each additional millimeter adds $0.9$ seconds on average. We then calculate two numbers that say how close the points are to that line, the coefficient of determination $R^2=0.81$ and the correlation $r=0.9$.

The five pieces are a sample: five other pieces would give a slope different from $0.9$. The second part of the chapter therefore answers the questions of statistical inference. We build an interval for the slope of the population, use a test to check whether the data are enough to conclude that the time really depends on the thickness, and calculate the interval in which the time of a new piece will fall with a given probability.

The chapter uses the mean and the standard deviation of Chapter 2. The slope calculated from the data corresponds to the slope $\dfrac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}$ of the regression line for two random variables, and the correlation $r$ corresponds to the coefficient $\rho$, both seen in Chapter 7. The inference part uses the normal distribution of Chapter 6, the chi-square and Student's t distributions of Chapter 8, the confidence intervals of Chapter 10, and the tests of Chapter 11. This is the last chapter of the course, and it applies to a line the tools that Chapters 8 to 11 built for a single mean.

## Paired data and scatterplots

:::definizione{#dati titolo="Paired data"}
In a workshop, the thickness of the material and the time needed to cut it are recorded for each piece. Each piece therefore provides two measurements, and data of this kind are called **paired data**. Let $(x_i,y_i)$ denote the pair observed on unit $i$, with $i=1,\ldots,n$; for piece $i$, $x_i$ is the thickness and $y_i$ the time.

The **regression** of $y$ on $x$ looks for a function of $x$, in this chapter a line, that gives the mean value of $y$ for each value of $x$. In the workshop, the line gives the mean cutting time for each thickness. The variable $x$, from which we start, is called the predictor; the variable $y$, which we want to predict, is called the response. In the example the predictor is the thickness and the response is the time.

In a **scatterplot**, each pair is represented by a point in the plane, with $x_i$ on the horizontal axis and $y_i$ on the vertical axis. There is a positive association between $x$ and $y$ when the vertical coordinates tend to increase as we move through the points from left to right; there is a negative association when they tend to decrease. The scatterplot is used for three checks before any calculation.

- If the points lie around a line, a line describes well how the response varies on average.
- If they lie around a curve, a line describes the relationship poorly.
- If the height of the point cloud is similar at all predictor values, the spread of the response around its mean is approximately constant.
:::

:::esempio{titolo="Reading five observations"}
For the pairs $(1,2)$, $(2,3)$, $(3,5)$, $(4,4)$, and $(5,6)$, the last response is higher than the first, so the association is positive. Between $x=3$ and $x=4$ the response falls from $5$ to $4$, so the increase holds for the points as a whole and not for every pair of neighboring points. A line describes the average trend and leaves a vertical distance to each observation.

::grafico{xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" titolo="Scatterplot of the five observed pairs"}
:::

:::attenzione
Sorting the two columns separately pairs measurements from different units. For example, the pairs $(1,5)$, $(2,3)$, and $(3,1)$ show a decreasing relationship. Sorting just the vertical coordinates gives $(1,1)$, $(2,3)$, and $(3,5)$, and the association becomes increasing. The means and variances of the individual columns are unchanged because each column contains the same numbers. Only the way those numbers are paired has changed.
:::

:::definizione{#somme-centrate titolo="Centered sums"}
For the five observations of the example, the means are $\bar x=\dfrac{1+2+3+4+5}{5}=3$ and $\bar y=\dfrac{2+3+5+4+6}{5}=4$. Subtracting the means gives the deviations
$$
\begin{aligned}
x_i-\bar x&\colon\ -2,\ -1,\ 0,\ 1,\ 2,\\[6pt]
y_i-\bar y&\colon\ -2,\ -1,\ 1,\ 0,\ 2.
\end{aligned}
$$
The sum of the squared deviations of the predictor values is $4+1+0+1+4=10$, and the same holds for the responses. The sum of the products of the deviations, pair by pair, is $4+1+0+0+4=9$.

In general, let $\bar x$ and $\bar y$ denote the means of the horizontal and vertical coordinates, and call the differences $x_i-\bar x$ and $y_i-\bar y$ centered deviations. Define the **centered sums**
$$
\begin{aligned}
S_{xx}&=\sum_{i=1}^n(x_i-\bar x)^2,\\[6pt]
S_{yy}&=\sum_{i=1}^n(y_i-\bar y)^2,\\[6pt]
S_{xy}&=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y).
\end{aligned}
$$
For the five observations, $S_{xx}=S_{yy}=10$ and $S_{xy}=9$.

The first two sums measure the spread of each variable around its mean: divided by $n-1$, they give the corrected variances of Chapter 2. In the third, two deviations of the same sign contribute a positive term, while opposite signs give a negative term. Therefore $S_{xy}>0$ when pairs with both measurements above the mean or both below predominate, as happens in a positive association. Divided by $n-1$, $S_{xy}$ gives the sample covariance, which equals $\dfrac{9}{4}=2.25$ for the five observations. The three sums are used to calculate the slope of the line, the coefficient $R^2$, and the correlation $r$ of this chapter.

::grafico{xmin=-2.7 xmax=2.7 ymin=-2.7 ymax=2.7 nomi="u,v" punti="-2,-2;-1,-1;0,1;1,0;2,2" titolo="Plot of the centered deviations u and v. At all three points off the axes, the deviations have the same sign and contribute 4, 1, and 4."}
:::

:::osservazione
Given the totals $\sum_i x_i$, $\sum_i y_i$, and $\sum_i x_i y_i$, one can calculate $S_{xy}$ without writing the deviations, using the formula
$$
S_{xy}=\sum_{i=1}^n x_i y_i-n\bar x\bar y.
$$
The formula follows by expanding the product and using $\sum_i x_i=n\bar x$ and $\sum_i y_i=n\bar y$:
$$
\begin{aligned}
S_{xy}&=\sum_i x_iy_i-\bar y\sum_i x_i-\bar x\sum_i y_i+n\bar x\bar y\\[6pt]
&=\sum_i x_iy_i-n\bar x\bar y-n\bar x\bar y+n\bar x\bar y\\[6pt]
&=\sum_i x_iy_i-n\bar x\bar y.
\end{aligned}
$$
For the five observations, $\sum_i x_iy_i=2+6+15+16+30=69$, so $S_{xy}=69-5\cdot3\cdot4=9$. Setting $y_i=x_i$ gives $S_{xx}=\sum_i x_i^2-n\bar x^2$.

When measurements are very large and close together, calculating from the deviations is safer. For the predictor values $1\,000\,001$, $1\,000\,002$, and $1\,000\,003$, the numbers $\sum_i x_i^2=3\,000\,012\,000\,014$ and $n\bar x^2=3\,000\,012\,000\,012$ become equal on a ten-digit calculator, which therefore gives $S_{xx}=0$, whereas the deviations $-1$, $0$, $1$ give $S_{xx}=2$.
:::

## The least-squares line

:::definizione{#criterio-minimi-quadrati titolo="The least-squares criterion"}
Consider the line $y=1+x$ for the five observations. At the predictor values $1,2,3,4,5$ the line gives the values $2,3,4,5,6$, while the observed responses are $2,3,5,4,6$. The vertical deviations, that is, observed response minus value of the line, are $0$, $0$, $1$, $-1$, $0$, and the sum of their squares is $2$. Another line gives a different sum, and we look for the line for which this sum is as small as possible.

In general, for the line $a+bx$, write $a$ for the intercept and $b$ for the slope. At predictor value number $i$, the line gives $a+bx_i$, so the vertical deviation from the observation is $y_i-a-bx_i$. The **least-squares** criterion chooses $a$ and $b$ to minimize the sum
$$
Q(a,b)=\sum_{i=1}^n(y_i-a-bx_i)^2.
$$
Squaring gives positive contributions from deviations of opposite signs: two deviations $-2$ and $2$ contribute $4+4=8$, while their sum without squares would be $0$.

The deviation is measured vertically, that is, along the response. If predictor and response are interchanged, the deviations become horizontal and the minimization problem changes, so the line found also changes.
:::

::::teorema{#retta titolo="The least-squares line with an intercept"}
Consider $n\ge 2$ pairs with $S_{xx}>0$, that is, with at least two different predictor values. The minimum of $Q(a,b)$ is unique and occurs at
$$
b=\frac{S_{xy}}{S_{xx}},
\qquad
a=\bar y-b\bar x.
$$
Write $\hat y(x)=a+bx$ (read "y hat") for the **fitted value** at any predictor value $x$, that is, the value the fitted line gives at that predictor value. The line passes through the point of means $(\bar x,\bar y)$ because substituting $\bar x$ gives $\hat y(\bar x)=\bar y-b\bar x+b\bar x=\bar y$.

:::dimostrazione
The idea is to write $Q$ as the sum of a term containing the intercept and a quadratic polynomial in the slope alone. Each deviation splits as
$$
y_i-a-bx_i=\big[(y_i-\bar y)-b(x_i-\bar x)\big]+(\bar y-a-b\bar x).
$$
The first part sums to zero over $i$, because $\sum_i(y_i-\bar y)=n\bar y-n\bar y=0$ and in the same way $\sum_i(x_i-\bar x)=0$. The second part does not depend on $i$. Expanding the square and summing over $i$, the cross term equals $2(\bar y-a-b\bar x)$ times the sum of the first part, so it is zero. What remains is
$$
\begin{aligned}
Q(a,b)&=\sum_i\big[(y_i-\bar y)-b(x_i-\bar x)\big]^2+n(\bar y-a-b\bar x)^2\\[6pt]
&=S_{yy}-2bS_{xy}+b^2S_{xx}+n(\bar y-a-b\bar x)^2.
\end{aligned}
$$
The term $n(\bar y-a-b\bar x)^2$ is nonnegative and equals zero only for $a=\bar y-b\bar x$. The quadratic $S_{xx}b^2-2S_{xy}b+S_{yy}$ has leading coefficient $S_{xx}>0$, so it is an upward-opening parabola with a unique minimum at the vertex $b=\dfrac{S_{xy}}{S_{xx}}$. Therefore $Q$ is smallest when the quadratic is at its vertex and, at the same time, the first term is zero, that is, for the pair in the statement. For any other pair, either the quadratic exceeds its minimum or the first term is positive, so the minimum is unique.

The minimum point satisfies two equations that are used to study residuals. With the slope fixed, $Q$ is a quadratic in the intercept, and at the minimum its derivative with respect to $a$ is zero; with the intercept fixed, the same holds for the derivative with respect to $b$. The derivatives computed holding the other letter fixed are $-2\sum_i(y_i-a-bx_i)$ and $-2\sum_i x_i(y_i-a-bx_i)$. The two conditions are called the **normal equations**:
$$
\begin{cases}
\sum_i(y_i-a-bx_i)=0,\\
\sum_i x_i(y_i-a-bx_i)=0.
\end{cases}
$$
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
If $x$ is measured in millimeters and $y$ in seconds, the slope is measured in seconds per millimeter: one additional millimeter of thickness corresponds to an estimated time that is $0.9\,\mathrm{s}$ longer. The intercept is measured in seconds and is the fitted value at $x=0$, that is, $1.3\,\mathrm{s}$. The observed thicknesses, however, range from $1$ to $5\,\mathrm{mm}$, so $1.3\,\mathrm{s}$ is the cutting time of a piece of zero thickness only if the line remains valid as far as $x=0$, outside the observed predictor values.
:::

:::osservazione
In the regression of $x$ on $y$, the predictor becomes $y$, so the slope is $\dfrac{S_{xy}}{S_{yy}}$, if $S_{yy}>0$. For example, with $S_{xx}=20$, $S_{yy}=45$, and $S_{xy}=18$, the two slopes are
$$
\frac{S_{xy}}{S_{xx}}=\frac{18}{20}=0.9,\qquad \frac{S_{xy}}{S_{yy}}=\frac{18}{45}=0.4.
$$
Solving the line of $y$ on $x$ for $x$ would instead give slope $\dfrac{1}{0.9}\approx1.11$, which differs from $0.4$. The difference reflects which deviations are minimized. In the regression of $y$ on $x$ we measure deviations in $y$ at fixed $x$; in the regression of $x$ on $y$ we measure deviations in $x$ at fixed $y$.
:::

## Residuals and goodness of fit

:::definizione{#residui titolo="Fitted values and residuals"}
The **fitted value** at predictor observation $i$ is $\hat y_i=a+bx_i$. The **residual** is the difference $e_i=y_i-\hat y_i$ between the observed response and the fitted value. It is positive when the observed point lies above the line and negative when it lies below.

The first normal equation is $\sum_i(y_i-a-bx_i)=0$, that is, $\sum_i e_i=0$; the second is $\sum_i x_i e_i=0$. The first gives $\sum_i\hat y_i=\sum_i y_i-\sum_i e_i=\sum_i y_i$, so the mean of the fitted values equals the mean $\bar y$ of the observed responses. The two zero sums also check the calculations: if the calculated residuals do not sum to zero, the line contains an error.
:::

:::esempio{titolo="Vertical deviation from the line"}
For the line $\hat y(x)=1.3+0.9x$, the fitted value at $4$ is $1.3+3.6=4.9$. The observed response is $4$, so the residual is $4-4.9=-0.9$. At $3$ the fitted value is $4$ and the observed response is $5$, so the residual equals $1$. The dashed segments in the figure represent these two vertical differences.

For all five observations the fitted values are $2.2$, $3.1$, $4$, $4.9$, $5.8$, and the residuals are $-0.2$, $-0.1$, $1$, $-0.9$, $0.2$. Their sum is $0$, and also $\sum_i x_ie_i=-0.2-0.2+3-3.6+1=0$. The sum of the squared residuals is $0.04+0.01+1+0.81+0.04=1.9$, less than the value $2$ of the line $y=1+x$.

::grafico{f="1.3+0.9*x" xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" segmenti="3,4,3,5;4,4,4,4.9" legenda="\hat y=1.3+0.9x" titolo="Fitted line and vertical deviations at predictor values 3 and 4"}
:::

::::teorema{#scomposizione-regressione titolo="Decomposing variability"}
For the five observations, the horizontal line $y=\bar y=4$, which gives every piece the mean time, leaves deviations with sum of squares $S_{yy}=10$. The least-squares line leaves residuals with sum of squares $1.9$. The difference $10-1.9=8.1$ is the part of the variability that the line attributes to the change in thickness.

For a least-squares line with an intercept and $S_{xx}>0$, let
- $SST=\sum_i(y_i-\bar y)^2=S_{yy}$ denote the total sum of squares;
- $SSR=\sum_i(\hat y_i-\bar y)^2$ denote the regression sum of squares;
- $SSE=\sum_i e_i^2$ denote the residual (error) sum of squares.

Then
$$
SST=SSR+SSE,\qquad SSR=b^2S_{xx}.
$$
For the five observations, $SSR=0.9^2\cdot10=8.1$ and $10=8.1+1.9$.

:::dimostrazione
Since $a=\bar y-b\bar x$, the fitted value can be written $\hat y_i=\bar y+b(x_i-\bar x)$, so $\hat y_i-\bar y=b(x_i-\bar x)$. Squaring and summing gives $SSR=b^2S_{xx}$.

Each deviation from the mean can be written as $y_i-\bar y=(\hat y_i-\bar y)+e_i$. Expanding the square and summing over $i$ gives $SSR$, $SSE$, and the cross term $2\sum_i(\hat y_i-\bar y)e_i$. Substituting $\hat y_i-\bar y=b(x_i-\bar x)$, the cross term is
$$
2b\left(\sum_i x_i e_i-\bar x\sum_i e_i\right)=0,
$$
because both sums vanish by the normal equations. Therefore only $SSR$ and $SSE$ remain.
:::
::::

:::definizione{#coefficiente-determinazione titolo="Coefficient of determination"}
For the five observations, the total sum of squares is $SST=10$, and the line attributes $SSR=8.1$ of it to the thickness, that is, a fraction $\dfrac{8.1}{10}=0.81$.

If $SST>0$, the **coefficient of determination** is
$$
R^2=\frac{SSR}{SST}=1-\frac{SSE}{SST}.
$$
With an intercept and a least-squares fit, $SSR$ and $SSE$ are nonnegative and add up to $SST$, so $R^2$ lies in $[0,1]$. The value $R^2=1$ occurs when all residuals are zero, that is, when the points lie on a line; the value $R^2=0$ occurs when $b=0$ and the least-squares line is horizontal.

The condition $SST>0$ excludes the case in which all responses are equal. If all responses equal $5$, then $SST=0$ and the ratio has a zero denominator, even though the horizontal line $y=5$ passes through every point.
:::

:::attenzione
The value $0.81$ is a fraction of a sum of squares, and it does not say how many predictions fall close to the observations. For the five observations the residuals are $-0.2$, $-0.1$, $1$, $-0.9$, $0.2$, so the fitted values within half a second of the observed time are $3$ out of $5$, that is, $60\%$. This percentage is obtained by counting the residuals that meet the threshold; $R^2$ does not provide it.
:::

## Pearson correlation

:::definizione{#pearson titolo="Pearson correlation coefficient"}
The sum $S_{xy}$ depends on the units of measurement. For the five observations, $S_{xy}=9$ with the thickness in millimeters; with the thickness in centimeters, the deviations of the predictor values are divided by $10$ and $S_{xy}=0.9$, even though the pieces are the same. To obtain a number that does not depend on the units, divide $S_{xy}$ by $\sqrt{S_{xx}S_{yy}}$, which changes with the units in the same way: in millimeters $\dfrac{9}{\sqrt{10\cdot10}}=0.9$, in centimeters $\dfrac{0.9}{\sqrt{0.1\cdot10}}=0.9$.

When $S_{xx}>0$ and $S_{yy}>0$, the **sample Pearson correlation coefficient** is
$$
r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.
$$
The number $r$ is a pure number, without units. Its sign is that of $S_{xy}$, so it agrees with the sign of the slope of the line of $y$ on $x$. Regression assigns distinct roles to the response and the predictor, whereas the formula for $r$ does not change when $x$ and $y$ are interchanged. The coefficient $r$ calculated from data corresponds to the coefficient $\rho$ defined in Chapter 7 for two random variables.

The following theorem shows that $-1\le r\le1$ and that $|r|=1$ when the points lie on a line. A value of $r$ close to $1$ does not say which of the two variables affects the other. In data collected without fixing the predictor, $x$ and $y$ increase together even when neither affects the other and both depend on a third variable.
:::

::::teorema{#pearson-determinazione titolo="Correlation and the coefficient of determination"}
For data with $S_{xx}>0$ and $S_{yy}>0$, simple linear regression with an intercept gives $R^2=r^2$. It follows that $|r|\le 1$ and
$$
|S_{xy}|\le\sqrt{S_{xx}S_{yy}}.
$$
Two data sets with $r=0.9$ and $r=-0.9$ both have $R^2=0.81$, because $R^2$ is a square; only the sign of $r$ says whether the line rises or falls.

:::dimostrazione
By the theorem on decomposing variability, $SSR=b^2S_{xx}$, and moreover $SST=S_{yy}$. Substituting $b=\dfrac{S_{xy}}{S_{xx}}$ into the formula for $R^2$ gives
$$
R^2=\frac{b^2S_{xx}}{S_{yy}}
=\frac{S_{xy}^2}{S_{xx}^2}\cdot\frac{S_{xx}}{S_{yy}}
=\frac{S_{xy}^2}{S_{xx}S_{yy}}
=r^2.
$$
Since $R^2\le 1$, we have $r^2\le1$, that is, $|r|\le 1$; multiplying $|r|\le1$ by $\sqrt{S_{xx}S_{yy}}>0$ gives the inequality for $|S_{xy}|$. If $|r|=1$, then $R^2=1$ and $SSE=0$, so all residuals are zero and the points lie exactly on the line.
:::
::::

:::osservazione
Adding a constant to all predictor values, for example going from $x$ to $x+100$, also increases their mean by $100$, so the deviations from the mean are unchanged and $r$ is unchanged. Multiplying the predictor values by a positive constant $c$ multiplies the deviations and $S_{xy}$ by $c$, while $S_{xx}$ is multiplied by $c^2$. The denominator $\sqrt{S_{xx}S_{yy}}$ is therefore multiplied by $c$, and the factor cancels in the ratio. For $c<0$ the denominator is multiplied by $|c|=-c$ and the numerator by $c$, so the sign of $r$ reverses. Converting from meters to centimeters multiplies the predictor values by $100$: it leaves $r$ unchanged and divides the slope by $100$, which becomes a change per centimeter.
:::

:::osservazione
Standardizing a variable means subtracting its mean and dividing by the corrected sample standard deviation of Chapter 2, $s_x=\sqrt{\dfrac{S_{xx}}{n-1}}$. The standardized predictor values $u_i=\dfrac{x_i-\bar x}{s_x}$ have mean zero and sum of squares $\dfrac{S_{xx}}{s_x^2}=n-1$; the same holds for the standardized responses $v_i$. In the regression of $v$ on $u$, the intercept is therefore zero because both means are zero, and the slope is
$$
\frac{\sum_i u_iv_i}{\sum_i u_i^2}=\frac{\dfrac{S_{xy}}{s_xs_y}}{n-1}.
$$
Pearson's denominator calculated on the standardized variables equals $\sqrt{(n-1)(n-1)}=n-1$, the same as for the slope, so the standardized slope equals $r$. If $r=0.6$, an increase of one standard deviation in the predictor corresponds to an increase of $0.6$ standard deviations in the fitted response.
:::

:::attenzione
The three points $(-1,1)$, $(0,0)$, and $(1,1)$ have $\bar x=0$ and $\bar y=\dfrac23$, so $S_{xy}=(-1)\cdot\dfrac13+0+1\cdot\dfrac13=0$ and $r=0$. The predictor still determines the response through $y=x^2$. A zero coefficient indicates that there is no linear association, that is, that the least-squares line is horizontal; recognizing a curved relationship requires the scatterplot. Since $b=0$, the least-squares line is the horizontal line $\hat y=\bar y=\dfrac23$.

::grafico{f="x^2;2/3" xmin=-1.8 xmax=1.8 ymin=-0.4 ymax=2.2 punti="-1,1;0,0;1,1" legenda="y=x^2;\hat y=\frac{2}{3}" titolo="The three points lie on the parabola $y=x^2$, but the least-squares line is horizontal and $r=0$."}
:::

## The linear model and inference for the slope

:::definizione{#modello-lineare titolo="Linear model with independent errors"}
If the workshop cuts three pieces of the same thickness, $3\,\mathrm{mm}$, the times are not equal: for example $4.1$, $3.8$, and $4.4$ seconds. At fixed thickness, the time is therefore a random variable that varies around a mean time; the mean time changes with the thickness. The thickness, on the other hand, is chosen before cutting and is not random: the predictor values are said to be fixed.

In the **simple linear model** with fixed predictor values, the numbers $x_1,\ldots,x_n$ are known and the response $Y_i$ is a random variable that satisfies
$$
Y_i=\alpha+\beta x_i+\varepsilon_i.
$$
The parameters $\alpha$ and $\beta$ (read alpha and beta) are the intercept and the slope of the mean response line of the population, which is unknown. The error $\varepsilon_i$ (read epsilon) is the deviation of $Y_i$ from that mean line. The errors have mean zero, so $E[Y_i]=\alpha+\beta x_i$: the line $\alpha+\beta x$ gives the mean time for each thickness. The procedures in this section further assume that the errors are independent and all have the same variance $\sigma^2>0$ ($\sigma$ is read sigma).

The model and the calculated line are related in the same way as parameter and statistic in Chapter 1. The parameters $\alpha$ and $\beta$ are fixed and unknown; $a$ and $b$ are calculated from the sample and are their estimates. In the same way, the error $\varepsilon_i$ is unknown because it depends on the true line, whereas the residual $e_i$ is calculated after fitting the line to the data.

If, in addition, the errors have the normal distribution $N(0,\sigma^2)$ of Chapter 6, the statistics in this section follow Student's t distribution of Chapter 8 exactly, and the intervals and tests have exactly the stated level.
:::

:::teorema{#inferenza titolo="Standard error and hypothesis test for the slope"}
In the fixed-predictor model with independent errors $N(0,\sigma^2)$, $n>2$, and $S_{xx}>0$, the error variance is estimated by the **residual variance**
$$
s_e^2=\frac{SSE}{n-2},
$$
and its square root $s_e$ is called the residual standard deviation. The divisor is $n-2$, and not $n$, because the residuals satisfy the two normal equations $\sum_ie_i=0$ and $\sum_ix_ie_i=0$; for example, with five observations, once three residuals are known the other two follow from the two equations. Therefore $n-2$ residuals remain free, called degrees of freedom, like the $n-1$ deviations from the mean in Chapter 8. For the five observations, $s_e^2=\dfrac{1.9}{3}$ and $s_e\approx0.796$.

The estimated **standard error** of the slope, that is, the estimate of the standard deviation of $b$, which changes from one sample to another, is
$$
SE(b)=\frac{s_e}{\sqrt{S_{xx}}}.
$$
For the five observations, $SE(b)=\dfrac{0.796}{\sqrt{10}}\approx0.252$. For the same $s_e$, predictor values that are more spread out give a larger $S_{xx}$ and therefore a more precise slope.

In this theorem $b$, $s_e$, and $SE(b)$ denote the quantities calculated from a sample yet to be observed, and are therefore random variables. Under the null hypothesis $H_0\colon\beta=\beta_0$, the statistic
$$
T=\frac{b-\beta_0}{SE(b)}
$$
has distribution $t_{n-2}$, Student's t with $n-2$ degrees of freedom. The significance level is written here as $\gamma$ (read gamma), because the letter $\alpha$, used for the level in Chapters 10 and 11, is already the intercept of the model. Write $t_{\nu,p}$ for the quantile of order $p$ of Student's t distribution with $\nu$ degrees of freedom. With the two-sided alternative $H_1\colon\beta\ne\beta_0$, reject $H_0$ if
$$
|T|\ge t_{n-2,1-\frac{\gamma}{2}}.
$$
The most common case is $\beta_0=0$. The hypothesis $\beta=0$ says that the mean response is the same for every $x$; if it is rejected, the data indicate that the mean response changes linearly with $x$. For the five observations, $T=\dfrac{0.9}{0.252}\approx3.57$ and, at level $\gamma=0.05$, $t_{3,0.975}\approx3.182$; since $3.57\ge3.182$, $\beta=0$ is rejected.

A confidence interval with confidence level $1-\gamma$ for $\beta$ is
$$
b\pm t_{n-2,1-\frac{\gamma}{2}}SE(b).
$$
For the five observations, at $95\%$, $0.9\pm3.182\cdot0.252$ gives about $[0.10;\,1.70]$. The half-width is proportional to $SE(b)$, so, at the same confidence level, halving the standard error halves the interval.
:::

:::osservazione
Write $B$ for the slope as a random variable, that is, $B=\dfrac{\sum_i(x_i-\bar x)Y_i}{S_{xx}}$; indeed $\sum_i(x_i-\bar x)(Y_i-\bar Y)=\sum_i(x_i-\bar x)Y_i$, because $\bar Y\sum_i(x_i-\bar x)=0$. Substituting the model $Y_i=\alpha+\beta x_i+\varepsilon_i$ gives three contributions.
- The intercept gives $\alpha\sum_i(x_i-\bar x)=0$.
- The slope gives $\beta\sum_i(x_i-\bar x)x_i=\beta S_{xx}$, because $\sum_i(x_i-\bar x)x_i=\sum_i(x_i-\bar x)(x_i-\bar x)$.
- The errors give $\sum_i(x_i-\bar x)\varepsilon_i$.

Therefore
$$
B=\beta+\frac{\sum_i (x_i-\bar x)\varepsilon_i}{S_{xx}}.
$$
The errors have mean zero, so $E[B]=\beta$. The errors are independent with variance $\sigma^2$, so, by the formula for the variance of a linear combination in Chapter 7, the random numerator has variance $\sigma^2\sum_i(x_i-\bar x)^2=\sigma^2S_{xx}$ and the slope has variance $\dfrac{\sigma^2S_{xx}}{S_{xx}^2}=\dfrac{\sigma^2}{S_{xx}}$. With normal errors, $B$ is normal because it is a linear combination of independent normal variables, and $Z=\dfrac{B-\beta}{\dfrac{\sigma}{\sqrt{S_{xx}}}}$ is standard normal.

One can also prove that $V=\dfrac{SSE}{\sigma^2}$ has a chi-square distribution with $n-2$ degrees of freedom and is independent of $B$. The proof uses the same decomposition of the vector of observations into perpendicular directions that gives the distribution of the sample variance in Chapter 8; here we use the result. By the definition of Student's t distribution in Chapter 8, the ratio
$$
\frac{Z}{\sqrt{\dfrac{V}{n-2}}}=\frac{\dfrac{B-\beta}{\dfrac{\sigma}{\sqrt{S_{xx}}}}}{\dfrac{s_e}{\sigma}}=\frac{B-\beta}{\dfrac{s_e}{\sqrt{S_{xx}}}}
$$
has distribution $t_{n-2}$, because $\sqrt{\dfrac{V}{n-2}}=\sqrt{\dfrac{SSE}{\sigma^2(n-2)}}=\dfrac{s_e}{\sigma}$. With $\beta=\beta_0$, the ratio is the statistic $T$ of the theorem.
:::

:::esempio{titolo="Testing a hypothesized slope"}
With $n=11$, $b=1.8$, and $SE(b)=0.3$, consider $H_0\colon\beta=1.2$ against a two-sided alternative at the $5\%$ level. The observed statistic is
$$
T=\frac{1.8-1.2}{0.3}=2.
$$
The degrees of freedom are $11-2=9$. Since $|T|=2<2.262=t_{9,0.975}$, the test does not reject $H_0$. With the same quantile, the $95\%$ interval is $1.8\pm2.262\cdot0.3=1.8\pm0.6786$, that is, $[1.1214;\,2.4786]$. The value $1.2$ lies in the interval, consistent with the two-sided test at the same level, as predicted by the link between two-sided tests and confidence intervals seen in Chapter 11.

::grafico{f="0.388035*(1+x^2/9)^(-5)" area="0.388035*(1+x^2/9)^(-5);0;-4.6;-2.262|0.388035*(1+x^2/9)^(-5);0;2.262;4.6" punti="2,0.0617,pieno,T" segmenti="2,0,2,0.0617" xmin=-4.6 xmax=4.8 ymin=-0.035 ymax=0.45 nomi="t,f" legenda="t_9" titolo="Student's t density with $9$ degrees of freedom. The shaded tails beyond $\pm 2.262$ form the rejection region at level $5\%$. The observed value $T=2$ lies between the thresholds."}
:::

:::osservazione
One-sided alternatives are treated as in Chapter 11. For the lower-tailed alternative $H_1\colon\beta<\beta_0$, reject if $T\le t_{n-2,\gamma}$. For the upper-tailed alternative $H_1\colon\beta>\beta_0$, reject if $T\ge t_{n-2,1-\gamma}$.

In the same way, as in Chapter 10, the upper confidence limit with level $1-\gamma$ for $\beta$ is $b+t_{n-2,1-\gamma}SE(b)$ and the lower limit is $b-t_{n-2,1-\gamma}SE(b)$. In the example, with $t_{9,0.95}\approx1.833$, the $95\%$ upper limit is $1.8+1.833\cdot0.3\approx2.35$.

In the example with $T=2$ and $9$ degrees of freedom, the two-sided $p$-value is about $0.077$, while the value for the upper-tailed alternative is about $0.038$, half as large. At the $5\%$ level the upper-tailed test therefore rejects $H_0$, because $0.038<0.05$, while the two-sided test does not reject it, because $0.077>0.05$. The difference arises because the two-sided test also counts deviations of the same magnitude in the opposite direction as evidence against $H_0$. The direction of the alternative is part of the question and is fixed before seeing the sign of the estimate.
:::

## Mean response and individual prediction

:::teorema{#previsione titolo="Intervals for the mean response and a new observation"}
In the workshop, for pieces of thickness $x_0=4\,\mathrm{mm}$, we want to know the mean cutting time, and the interval in which the time of the next piece of that thickness will fall. Both estimates start from the fitted value $1.3+0.9\cdot4=4.9$ seconds, but the second interval is wider, because the time of a single piece varies around the mean.

Assume the normal model with independent errors, common variance, $n>2$, and $S_{xx}>0$. At a fixed predictor value $x_0$, the fitted value is $\hat y_0=a+bx_0$. Write $h_0$ for the term
$$
h_0=\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}},
$$
which is smallest, equal to $\dfrac1n$, at $x_0=\bar x$ and increases with the distance of $x_0$ from the mean predictor value. The interval with confidence level $1-\gamma$ for the **mean response** $\alpha+\beta x_0$ is
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{h_0}.
$$
For a new observation $Y_0$, independent of the sample and with the same error variance, the **prediction interval** with level $1-\gamma$ is
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{1+h_0}.
$$
The center is the same because the new error has mean zero. The prediction margin is wider because it also contains the variance of the error of that single observation, represented by the term $1$ under the square root.

If $x_0$ lies outside the range of the observed predictor values, using the line there is called **extrapolation**. In that case the data do not show whether the relationship remains linear as far as $x_0$, so the intervals are valid only if the line remains valid up to that point.
:::

:::osservazione
Since $a=\bar y-b\bar x$, the estimate of the mean response can be written $\hat y_0=\bar y+b(x_0-\bar x)$. In the model, with $\bar Y$ the mean of the random responses, the errors enter $\bar Y$ with coefficients $\dfrac1n$ and $B$ with coefficients $\dfrac{x_i-\bar x}{S_{xx}}$. The covariance of Chapter 7 is linear in each variable, and two different errors are independent, so their covariance is zero, while each error has variance $\sigma^2$. Therefore
$$
\operatorname{Cov}(\bar Y,B)=\sigma^2\sum_i\frac1n\cdot\frac{x_i-\bar x}{S_{xx}}=\frac{\sigma^2}{nS_{xx}}\sum_i(x_i-\bar x)=0.
$$
By the formula for the variance of a linear combination, with zero covariance the variances add:
$$
\operatorname{Var}\big(\bar Y+B(x_0-\bar x)\big)=\frac{\sigma^2}{n}+(x_0-\bar x)^2\frac{\sigma^2}{S_{xx}}=\sigma^2h_0.
$$
For the new response we consider the difference $Y_0-\hat Y_0$. The error of $Y_0$ has variance $\sigma^2$ and is independent of the sample, so the variance of the difference is $\sigma^2+\sigma^2h_0=\sigma^2(1+h_0)$. Replacing $\sigma$ by $s_e$ and the normal quantile by the Student quantile gives the two intervals. The margin for the mean is smallest at $x_0=\bar x$, where the slope contribution $(x_0-\bar x)^2\dfrac{\sigma^2}{S_{xx}}$ vanishes.
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
At $x_0=3$ the expression under the square root is $\dfrac15$ and the margin is about $1.13$. At $x_0=0$ and $x_0=6$ the expression is $\dfrac15+\dfrac{9}{10}=\dfrac{11}{10}$, so the margin increases to about $2.66$. As $x_0$ varies, the interval endpoints trace two branches of a hyperbola, closest together at the center of the data.

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
At the $95\%$ level both are multiplied by $t_{14,0.975}\approx2.145$, with $16-2=14$ degrees of freedom. The first margin is about $1.073$ and the second about $4.422$. The mean is therefore estimated with a margin of about $1$, while a single new response requires a margin about four times wider.

::grafico{assi=0 xmin=14 xmax=26 ymin=0 ymax=3 linee="18.927,2 21.073,2;15.578,1 24.422,1" punti="18.927,2;21.073,2;15.578,1;24.422,1;20,2;20,1" segmenti="20,0.7,20,2.3" etichette="18.4,2.3,M;15.3,1.3,P;20.1,2.5,20" titolo="The 95% intervals at the same predictor value. M denotes the mean response and P the individual prediction. The vertical dashed line marks their common center, 20."}
:::

:::attenzione
The confidence level is the frequency with which the procedure covers the target value when sampling is repeated under the same conditions. For the mean response, the value to be covered is the fixed parameter $\alpha+\beta x_0$. For prediction, every repetition includes a new independent random response. The interval for the mean is too narrow for an individual response. In the previous example, if the error standard deviation were exactly $2$ and the mean exactly $20$, a new response would fall outside $20\pm1.073$ with probability about $0.59$, far more than the stated $5\%$.
:::

## Model diagnostics and limitations

:::definizione{#diagnostica titolo="Residual plots"}
The linear model assumes that the mean response is a line and that the errors have constant variance and are independent. Residuals are used to check these assumptions after fitting the line. A **residual plot** places the residual $e_i$ on the vertical axis and $x_i$ or the fitted value $\hat y_i$ on the horizontal axis. If the assumptions hold, the points form a horizontal band of constant height around zero, with no pattern. Three patterns indicate a problem.

- Positive residuals at the extremes and negative ones in the middle, or the reverse, indicate that the mean response follows a curve: the line leaves systematic variation.
- A vertical band that widens from left to right indicates that the error variance increases with $x$.
- If the observations have a time order, residuals are also plotted against that order. Long runs of the same sign, for example six positive residuals in a row followed by six negative ones, indicate that a large error tends to be followed by an error of the same sign, so the errors are not independent.
:::

:::esempio{titolo="Residuals can sum to zero while showing a curved pattern"}
At predictor values $1,2,3,4,5$ the observed residuals are $2,-1,-2,-1,2$. Their sum is $2-1-2-1+2=0$, and their sum weighted by the predictor values is $2-2-6-4+10=0$. The normal equations are therefore satisfied. The plot nevertheless shows positive residuals at the extremes and negative residuals in the middle. This pattern indicates a convex mean response, like an upward-opening parabola, which the line captures only in part.

::grafico{f="0" xmin=-0.4 xmax=6 ymin=-2.8 ymax=2.8 nomi="x,e" punti="1,2;2,-1;3,-2;4,-1;5,2" legenda="e=0" titolo="Residuals above zero at the extremes and below zero in the middle"}
:::

:::definizione{#leva titolo="Leverage and influence"}
In a model with an intercept, the **leverage** of observation $i$ is
$$
h_i=\frac1n+\frac{(x_i-\bar x)^2}{S_{xx}}.
$$
The value $h_i$ equals the term $h_0$ of the intervals for the mean response, calculated at $x_0=x_i$, and depends only on the horizontal distance of the predictor value from the center of the data. For the five observations, with $\bar x=3$ and $S_{xx}=10$, the leverages are $0.6$, $0.3$, $0.2$, $0.3$, $0.6$: the extreme predictor values have three times the leverage of the central one.

Leverage measures how closely the fitted value at $x_i$ follows the response $y_i$. If only the response $y_i$ changes, by an amount $\Delta$, the fitted value $\hat y_i$ changes by $h_i\Delta$. With leverage $0.6$, raising the observation at predictor value $5$ by $1$ raises its fitted value by $0.6$; with leverage $0.2$, at predictor value $3$, it raises it by only $0.2$.

An observation is **influential** if removing it changes the fitted line substantially, as in the next example. High leverage makes strong influence possible, especially when the point departs from the trend of the other observations. If, on the other hand, the extreme point lies exactly on the line determined by the other points, adding it leaves the fit unchanged: the pairs $(1,2)$, $(2,3)$, $(3,4)$, $(4,5)$, and $(10,11)$ all lie on the line $y=1+x$, which remains the least-squares line.
:::

:::esempio{titolo="A high-leverage point off the original trend"}
The pairs $(1,2)$, $(2,3)$, $(3,4)$, and $(4,5)$ lie on the line $y=1+x$ with slope $1$. Add the point $(10,4)$, although the original line predicts $11$ at that predictor value. For the five pairs, $\bar x=\dfrac{20}{5}=4$ and $\bar y=\dfrac{18}{5}$. Moreover $\sum_i x_i^2=1+4+9+16+100=130$ and $\sum_i x_iy_i=2+6+12+20+40=80$, so the centered sums are
$$
\begin{aligned}
S_{xx}&=130-5\cdot4^2=50,\\[6pt]
S_{xy}&=80-5\cdot4\cdot\frac{18}{5}=8,
\end{aligned}
$$
and the new slope is $b=\dfrac{8}{50}=0.16$. The leverage of the added point is
$$
h=\frac15+\frac{(10-4)^2}{50}=\frac{23}{25}=0.92.
$$
Changing the response of the added point by $\Delta$ therefore changes its fitted value by $0.92\,\Delta$: the line passes almost through that point. The fitted value at $x=10$ is $2.96+0.16\cdot10=4.56$, at distance $0.56$ from the observation. Adding this point alone reduces the slope from $1$ to $0.16$.

::grafico{f="1+x;2.96+0.16*x" xmin=-0.5 xmax=11 ymin=-0.5 ymax=12.5 punti="1,2;2,3;3,4;4,5;10,4" segmenti="10,4,10,11" legenda="y=1+x;\hat y=2.96+0.16x" titolo="The point $(10,4)$ has leverage $0.92$. Its vertical distance from the original line is $7$ and its distance from the refitted dashed line is only $0.56$."}
:::

:::osservazione
The leverages sum to $2$. Indeed, the $n$ constant terms $\dfrac1n$ sum to $1$, while the numerators $(x_i-\bar x)^2$ sum to $S_{xx}$, so the second terms sum to $\dfrac{S_{xx}}{S_{xx}}=1$. For the five observations, $0.6+0.3+0.2+0.3+0.6=2$. The average leverage is therefore $\dfrac2n$.

The property $\Delta\hat y_i=h_i\Delta$ follows from the expression $\hat y_i=\bar y+b(x_i-\bar x)$. Changing $y_i$ by $\Delta$ increases $\bar y$ by $\dfrac{\Delta}{n}$ and increases $S_{xy}$ by $(x_i-\bar x)\Delta$, so it changes $b$ by $\dfrac{(x_i-\bar x)\Delta}{S_{xx}}$. The overall change in $\hat y_i$ is therefore
$$
\frac{\Delta}{n}+\frac{(x_i-\bar x)\Delta}{S_{xx}}(x_i-\bar x)=h_i\Delta.
$$
:::

:::attenzione
A large value of $R^2$ says that the line is close to the observed data, and says nothing about the relationship outside the observed predictor values. Extrapolation also requires that the linear form remain valid outside the range of the predictor values in the sample. For example, a line $\hat y=500-6x$ that describes well the daily demand for a service at prices $x$ between $10$ and $20$ euros, with values between $440$ and $380$, gives at $100$ euros the demand $500-600=-100$, which is impossible. The intervals of the theorem on the mean response measure only the uncertainty due to the sample, under the assumption that the linear model also holds at the new predictor value.

A causal interpretation, that is, the statement that changing $x$ changes $y$, also requires additional information. In observational data, the value of $x$ is not fixed by whoever collects the data, as the thickness of the pieces is, but is recorded as it occurs. For the trips of a transport company, for example, travel time and fuel consumption rise together because both depend on the distance traveled. Correlation between time and fuel consumption alone leaves the role of this third variable unresolved.
:::

## Rank correlation

:::definizione{#spearman titolo="Spearman's rank correlation coefficient"}
The **rank** of a value is its position in the increasing order of the values of the same variable: for the values $7$, $3$, $9$ the ranks are $2$, $1$, $3$. When several values are equal, that is, tied, each receives the average of the positions they occupy: for $3$, $5$, $5$, $8$, the two values $5$ occupy positions $2$ and $3$ and both receive rank $\dfrac{2+3}{2}=2.5$.

**Spearman's rank correlation coefficient** $r_S$ is Pearson's correlation calculated from the ranks of the two variables, preserving each pair. The coefficient is defined when both sets of ranks have positive variance, that is, when neither the predictor values nor the responses are all equal. It equals $1$ when the two variables are ordered in the same way and $-1$ when the order of one is the reverse of the order of the other. The coefficient therefore measures the agreement between the two orderings, even when the relationship is curved: for $(1,1)$, $(2,4)$, $(3,9)$, Pearson's correlation is about $0.990$, while $r_S=1$. Since it uses only the order, it also applies to the ordinal data of Chapter 1, such as the ratings insufficient, adequate, excellent coded with ranks $1$, $2$, $3$.
:::

:::esempio{titolo="Ranks with a tie"}
For $x=(10,20,20,40)$, the ranks are $(1,2.5,2.5,4)$ because the two middle values share second and third place. For $y=(8,4,6,2)$ the ranks are $(4,2,3,1)$. Both mean ranks equal $2.5$. The deviations of the ranks from the mean are $(-1.5,0,0,1.5)$ for $x$ and $(1.5,-0.5,0.5,-1.5)$ for $y$. The centered sums of squares are $2.25+0+0+2.25=4.5$ and $2.25+0.25+0.25+2.25=5$, and the sum of centered products is $-2.25+0+0-2.25=-4.5$. Therefore
$$
r_S=\frac{-4.5}{\sqrt{4.5\cdot 5}}=-\sqrt{0.9}\approx-0.949.
$$
The value is close to $-1$ because increasing ranks of $x$ mostly correspond to decreasing ranks of $y$.
:::

:::osservazione
A strictly increasing transformation, such as the logarithm of positive times, preserves order and ties, so it leaves the ranks and Spearman's coefficient unchanged. Pearson's correlation, by contrast, changes, because the distances between values change. For the times $1$, $10$, $100$ paired with the responses $1$, $2$, $3$, Pearson's correlation is about $0.904$; with the base-$10$ logarithms of the times, $0$, $1$, $2$, the points lie on a line and it equals $1$. Spearman's coefficient equals $1$ in both cases. A strictly decreasing transformation applied to just one of the two variables reverses the positions, so it changes the sign of Spearman's coefficient.
:::
