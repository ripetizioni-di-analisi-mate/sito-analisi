---
titolo: Descriptive statistics and bivariate data
sommario: From frequency tables to regression, with worked examples of interpreting, comparing and predicting.
---

## Data, frequencies and percentages

:::definizione{#frequenze titolo="Absolute and relative frequency"}
In a survey, each row represents a **statistical unit**, such as one student, and each column records a characteristic. The means of transport is a categorical variable. The number of journeys is discrete quantitative data because it is counted, while their duration is continuous quantitative data because it is measured.

For a value or category, the **absolute frequency** $n_i$ counts the observations in category $i$. If every observation belongs to exactly one category and the categories cover all the data, the absolute frequencies add up to the total number of observations $N$. When $N>0$, the relative frequency $f_i$ and percentage frequency $p_i$ are given by
$$
f_i=\frac{n_i}{N},\qquad p_i=100f_i\,\%,\qquad \sum_i f_i=1.
$$
The denominator is the total for the group described by the table. Rounded percentages can add up to slightly more or less than $100\,\%$.
:::

:::esempio{titolo="Comparing groups of different sizes"}
In class A, $8$ out of $20$ students cycle to school. In class B, $9$ out of $30$ do. To compare how common cycling is, compare the two proportions.
$$
\begin{aligned}
f_A&=\frac{8}{20}=\frac25=0{,}40,\\[4pt]
f_B&=\frac{9}{30}=\frac3{10}=0{,}30.
\end{aligned}
$$
Class B has one more cyclist, while the proportion is $10$ percentage points higher in class A. Across both classes, $17$ out of $50$ students cycle, which is $34\,\%$. The combined denominator accounts for the different class sizes.
:::

:::definizione{#cumulata titolo="Cumulative frequencies"}
If the variable takes ordered values $v_1<\cdots<v_k$, the **cumulative frequency** at $v_i$ is the number of observations with a value at most $v_i$. Add the frequencies from the first row up to and including the row for $v_i$. Dividing by $N$ gives the proportion of observations at or below the threshold.
:::

:::esempio{titolo="Reading a threshold from a table"}
The table summarises the number of absences recorded for $20$ students in one month.

| Absences | Absolute frequency | Cumulative frequency |
| --- | --- | --- |
| $0$ | $5$ | $5$ |
| $1$ | $8$ | $13$ |
| $2$ | $4$ | $17$ |
| $3$ | $3$ | $20$ |

At most one absence was recorded for $13$ students, so the proportion is $\dfrac{13}{20}=65\,\%$. Students with more than one absence form the complementary group, so $20-13=7$ students had two or three absences.
:::

## Charts for values and intervals

:::osservazione{#grafici titolo="Bars for categories and discrete values"}
A **bar chart** assigns one bar to each category or discrete value. The bars are separated because different categories occupy distinct positions. For a categorical variable without a natural order, the bars can be rearranged as long as each label stays with its frequency.

The chart shows the absences listed in the table. Comparing the bar heights gives the most common number of absences. The tallest bar corresponds to one absence.

::grafico{xmin=-0.6 xmax=3.8 ymin=-0.7 ymax=9.4 nomi="x,students" poligoni="-0.24,0 0.24,0 0.24,5 -0.24,5;0.76,0 1.24,0 1.24,8 0.76,8;1.76,0 2.24,0 2.24,4 1.76,4;2.76,0 3.24,0 3.24,3 2.76,3" titolo="The horizontal axis gives the number of absences. The bar for one absence has height $8$ students."}

:::

:::definizione{#istogramma titolo="Histogram and frequency density"}
When measurements are grouped into intervals of width $w_i>0$, the rectangle for each class spans its entire interval. The proportion of observations in a class is proportional to the rectangle's **area**. To make the areas equal to the absolute frequencies $n_i$, use **frequency density** $d_i$ for the heights.
$$
d_i=\frac{n_i}{w_i},\qquad w_i d_i=n_i.
$$
Relative frequencies can also be used in place of absolute frequencies. The total area is then $1$. With the convention $[a,b)$, a measurement equal to $b$ belongs to the following interval, so each measurement is counted once.
:::

:::esempio{titolo="Intervals of different widths"}
Two duration intervals contain $12$ stops in $[0,4)$ and $18$ stops in $[4,13)$, respectively. The first interval is $4$ minutes wide and the second is $9$ minutes wide.
$$
\begin{aligned}
d_1&=\frac{12}{4}=3,\\[4pt]
d_2&=\frac{18}{9}=2.
\end{aligned}
$$
The first rectangle is taller because it contains more stops per minute of interval width. The second rectangle has a greater area because the interval is wide enough to contain $18$ stops at its lower density.

::grafico{xmin=-1 xmax=15 ymin=-0.35 ymax=4 nomi="min,density" poligoni="0,0 4,0 4,3 0,3;4,0 13,0 13,2 4,2" etichette="1.4,1.3,12;8,1.1,18;4,0.23,4" titolo="The areas give frequencies $12$ and $18$. The two classes meet at $4$ minutes."}

:::

## Means and weights

:::definizione{#media titolo="Arithmetic mean and mean from frequencies"}
The **arithmetic mean** is the value obtained by dividing the sum of the observations into $N$ equal parts. For numerical observations $x_1,\ldots,x_N$ with $N>0$,
$$
\bar x=\frac{x_1+\cdots+x_N}{N}.
$$
If the table lists each distinct value $v_i$ once with its frequency $n_i$, then $v_i$ contributes $n_i v_i$ to the sum. Therefore
$$
\bar x=\frac{\sum_i n_i v_i}{\sum_i n_i}.
$$
The same idea combines two groups using their means. Multiply each group's mean by its size, since this product gives the sum of the observations in that group.
:::

:::esempio{titolo="Combined mean for two groups"}
A group of $10$ students scores an average of $8$ points. A group of $20$ students scores an average of $6$ points. First recover the totals, then divide.
$$
\begin{aligned}
S&=10\cdot 8+20\cdot 6=200,\\[4pt]
\bar x&=\frac{200}{30}=\frac{20}{3}.
\end{aligned}
$$
The combined mean is closer to $6$ because the second group has twice as many students. The two means would contribute equally if the groups were the same size.
:::

:::attenzione
When a table gives only class intervals, the individual observations within each class are unknown. Replacing the observations by their class midpoints gives an **estimate**. For example, two measurements in $[0,10)$ might be $1$ and $3$, or $7$ and $9$. The midpoint is $5$, while the actual means would be $2$ and $8$.
:::

## Median, mode and quartiles

:::definizione{#mediana titolo="Middle position and most frequent value"}
The **median** is found by putting numerical observations in order. If $N$ is odd, it is the observation in position $\dfrac{N+1}{2}$. If $N$ is even, it is the mean of the observations in positions $\dfrac N2$ and $\dfrac N2+1$. Every observation counts towards a position, including repeats. A **mode** is a value or category with the highest frequency. When two values share the highest frequency, both are modes.
:::

:::esempio{titolo="Reading the median from cumulative frequencies"}
In a distribution of $12$ scores, the values $4$, $6$ and $9$ have frequencies $3$, $4$ and $5$, respectively. The first three positions contain $4$. Positions four to seven contain $6$, so the sixth and seventh observations are both $6$. The median is $6$. The mode is $9$, since $5$ is the highest frequency, even though more than half the observations are at most $6$.
:::

:::definizione{#quartili titolo="Quartiles and interquartile range"}
**Quartiles** specify positions in the ordered data. For at least two observations, one convention taught in schools takes $Q_1$ as the median of the lower half and $Q_3$ as the median of the upper half. When $N$ is odd, exclude the overall median from both halves. The difference $Q_3-Q_1$ is the **interquartile range**. It measures the distance between the two quartiles. When the quartiles are determined by interior positions, changing an extreme without altering their positions leaves the interquartile range unchanged.
:::

:::esempio{titolo="An extreme value raises the mean"}
For the ordered observations $2,3,4,5,6$, the median is $4$ and the quartiles are $\dfrac52$ and $\dfrac{11}{2}$. Replacing $6$ by $36$ leaves the median at $4$, since the same observation occupies the middle position. The sum increases by $30$, so the mean increases by $\dfrac{30}{5}=6$, from $4$ to $10$. The median describes the centre by position, while the mean also reflects how far the extreme values lie from it.
:::

## Spread and units of measurement

:::definizione{#varianza titolo="Descriptive variance and standard deviation"}
Two groups can have the same mean while differing in how far their observations lie from the centre. The **deviation** from the mean is $x_i-\bar x$. The signed deviations sum to zero, so take the mean of their squares to measure spread. To describe the $N$ recorded observations, use
$$
\sigma^2=\frac1N\sum_i(x_i-\bar x)^2,\qquad \sigma=\sqrt{\sigma^2}.
$$
For a frequency table, multiply each squared deviation by the frequency $n_i$. If the measurements are in centimetres, variance is measured in square centimetres and standard deviation in centimetres. The divisor $N$ is used here because the variance describes the observed data.
:::

::::teorema{#formula-varianza titolo="Mean of squares and square of the mean"}
For $N>0$, variance can also be calculated from
$$
\sigma^2=\frac{1}{N}\sum_i x_i^2-\bar x^2.
$$
This formula is convenient when the sum of the observations and the sum of their squares are already known.

:::dimostrazione
Expand the square of each deviation. Since $\sum_i x_i=N\bar x$, the cross term becomes $-2\bar x^2$ after division by $N$.
$$
\begin{aligned}
\sigma^2
&=\frac{\sum_i x_i^2}{N}
-\frac{2\bar x\sum_i x_i}{N}+\bar x^2\\[5pt]
&=\frac{\sum_i x_i^2}{N}-2\bar x^2+\bar x^2\\[5pt]
&=\frac{\sum_i x_i^2}{N}-\bar x^2 .
\end{aligned}
$$
:::
::::

:::esempio{titolo="Same centre and different spreads"}
The data $2,4,6$ and $3,4,5$ both have mean $4$. Their squared deviations are $4,0,4$ and $1,0,1$, respectively, so
$$
\sigma_A^2=\frac83,\qquad \sigma_B^2=\frac23.
$$
The variance of A is four times that of B, while the ratio of their standard deviations is $\sqrt{4}=2$. The square root returns the measure of spread to the scale of the observations.
:::

## Changes of units and affine transformations

::::teorema{#trasformazioni titolo="Effects of an affine transformation"}
If each observation becomes $y_i=ax_i+b$, with $a,b\in\mathbb R$, then
$$
\bar y=a\bar x+b,\qquad \sigma_y^2=a^2\sigma_x^2,\qquad
\sigma_y=|a|\sigma_x.
$$
The term $b$ shifts the observations and the mean by the same amount. The factor $a$ multiplies the deviations, and its absolute value multiplies the distances.

:::dimostrazione
Add the $N$ equations $y_i=ax_i+b$ and divide by $N$ to obtain the formula for $\bar y$. Subtract this mean from $y_i$ to find the new deviation.
$$
\begin{aligned}
y_i-\bar y
&=(ax_i+b)-(a\bar x+b)\\
&=a(x_i-\bar x).
\end{aligned}
$$
The squared deviation contains the factor $a^2$. This factor is common to all observations and can therefore be taken outside the mean. The standard deviation thus contains the factor $\sqrt{a^2}=|a|$.
:::
::::

:::esempio{titolo="Converting metres to centimetres"}
A set of lengths has mean $2{,}4\,\mathrm{m}$ and standard deviation $0{,}15\,\mathrm{m}$. The numerical values in centimetres are obtained with $a=100$ and $b=0$. The new mean is $240\,\mathrm{cm}$ and the standard deviation is $15\,\mathrm{cm}$. The numerical value of the variance changes from $0{,}0225$ to $225$ because its conversion factor is $100^2$.
:::

## Pairs, covariance and correlation

:::definizione{#covarianza titolo="Covariance and scatter plots"}
When two measurements are taken for each unit, such as training hours and distance travelled, the observations are **pairs** $(x_i,y_i)$. In a scatter plot, each pair is a point and the lines $x=\bar x$ and $y=\bar y$ divide the plane into four regions. The product of the deviations is positive where both values are above their respective means or both are below. It is negative in the other two regions.

**Covariance** is the mean of these products. Its sign indicates which contribution is greater.
$$
\operatorname{cov}(x,y)
=\frac1N\sum_i (x_i-\bar x)(y_i-\bar y).
$$
If $\sigma_x$ and $\sigma_y$ are positive, covariance divided by their product gives the **linear correlation coefficient** $r$.
$$
r=\frac{\operatorname{cov}(x,y)}{\sigma_x\sigma_y},
\qquad -1\le r\le 1.
$$
The denominator has the same units as covariance, so $r$ is dimensionless. Values of $|r|$ close to $1$ indicate points close to a linear relationship. If one variable is constant, the denominator is zero and $r$ is undefined.
:::

:::esempio{titolo="Signs of the products of deviations"}
For the pairs $(1,1)$, $(2,4)$ and $(3,4)$, the means are $\bar x=2$ and $\bar y=3$. The products of the deviations are
$$
(1-2)(1-3)=2,\qquad
(2-2)(4-3)=0,\qquad
(3-2)(4-3)=1.
$$
The covariance is $\dfrac{2+0+1}{3}=1$. The first and third points contribute positively because their deviations have the same sign. At the second point the horizontal deviation is zero, so the contribution is zero.

::grafico{xmin=-0.4 xmax=4.4 ymin=-0.4 ymax=5.3 punti="1,1;2,4;3,4" asintoti="x=2;y=3" titolo="The dashed lines run through the means of the two variables."}

:::

::::teorema{#limiti-correlazione titolo="Why correlation lies between −1 and 1"}
The quantities $u_i=\dfrac{x_i-\bar x}{\sigma_x}$ and $v_i=\dfrac{y_i-\bar y}{\sigma_y}$ measure deviations in units of standard deviation. By definition, the mean square of $u_i$ and the mean square of $v_i$ both equal $1$. The mean of the products $u_iv_i$ is $r$.

:::dimostrazione
The mean square of $u_i-v_i$ is $2-2r$, while that of $u_i+v_i$ is $2+2r$. Both means are nonnegative, so $r\le1$ and $r\ge-1$. If $r=1$, the first mean is zero, which gives $u_i=v_i$ for every $i$. If $r=-1$, the second mean is zero and $u_i=-v_i$. In both cases the pairs lie exactly on a straight line.
:::
::::

:::attenzione
A correlation of zero concerns the linear component. The pairs $(-2,4)$, $(-1,1)$, $(0,0)$, $(1,1)$ and $(2,4)$ all satisfy $y=x^2$. The mean of $x$ is zero and the contributions to covariance at opposite horizontal coordinates cancel, so $r=0$.

::grafico{xmin=-2.6 xmax=2.7 ymin=-0.6 ymax=5.3 punti="-2,4;-1,1;0,0;1,1;2,4" titolo="The points satisfy $y=x^2$ and have zero linear correlation."}

:::

## Linear regression and residuals

::::teorema{#regressione titolo="Regression line of y on x"}
The regression line uses $x$ to predict $y$. For a pair $(x_i,y_i)$, the prediction is $\hat y_i=mx_i+q$ and the **residual** is $e_i=y_i-\hat y_i$. The least squares criterion selects the line that minimises the sum $\sum_i e_i^2$. If $\sigma_x^2>0$, its coefficients are
$$
m=\frac{\operatorname{cov}(x,y)}{\sigma_x^2},\qquad
q=\bar y-m\bar x.
$$
The equation for $q$ implies that the line passes through the point of means $(\bar x,\bar y)$.

:::dimostrazione
For a fixed slope $m$, seek the value of $q$ that minimises the squared differences between $y_i-mx_i$ and $q$. Their sum is minimised when $q$ equals their mean $\bar y-m\bar x$. Indeed, for numbers $u_i$ with mean $\bar u$,
$$
\sum_i(u_i-q)^2=\sum_i(u_i-\bar u)^2+N(\bar u-q)^2 ,
$$
because the cross term contains $\sum_i(u_i-\bar u)=0$. Substituting $q=\bar y-m\bar x$ gives the residual $(y_i-\bar y)-m(x_i-\bar x)$. The mean of its square is
$$
\sigma_y^2-2m\operatorname{cov}(x,y)+m^2\sigma_x^2 .
$$
This is a parabola in $m$ with a positive quadratic coefficient. Its vertex has horizontal coordinate $\dfrac{\operatorname{cov}(x,y)}{\sigma_x^2}$, which gives the minimum.
:::
::::

:::esempio{titolo="A prediction and its residual"}
Return to the pairs $(1,1)$, $(2,4)$ and $(3,4)$. Here $\sigma_x^2=\dfrac{1+0+1}{3}=\dfrac23$ and $\operatorname{cov}(x,y)=1$. The coefficients and the residual for the middle point are
$$
\begin{aligned}
m&=\frac{1}{\dfrac23}=\frac32,\\[5pt]
q&=3-\frac32\cdot 2=0,\\[5pt]
e_2&=4-\frac32\cdot 2=1.
\end{aligned}
$$
At $x=2$ the line predicts $3$, while the observed value is $4$. The residual is positive because the point lies one unit above the line.

::grafico{f="1.5*x" xmin=-0.4 xmax=4.4 ymin=-0.4 ymax=5.5 punti="1,1;2,4;3,4" segmenti="2,3,2,4" titolo="The vertical segment at $x=2$ measures the residual $e_2=1$."}

:::

## Interpreting the model

:::osservazione{#lettura titolo="The observed range and common factors"}
A prediction for an input between the smallest and largest observed input values is an **interpolation**. A prediction outside that range is an **extrapolation**. Both use the same equation, but extrapolation assumes that the observed relationship extends beyond the data.

Covariance and correlation are symmetric when $x$ and $y$ are interchanged. The regression of $y$ on $x$ minimises vertical residuals. After interchanging the variables, the new regression minimises residuals along the horizontal axis of the original plot.
:::

:::esempio{titolo="Prediction within and beyond the data"}
A hypothetical experiment uses heating times between $2$ and $8$ minutes. A linear model predicts a temperature increase of $3\,\mathrm{^\circ C}$ per minute. Applying it at $5$ minutes is interpolation. At $40$ minutes it is extrapolation, since the experiment ends at $8$ minutes. A physical limit or automatic regulation may change the slope beyond the measured range.
:::

:::esempio{titolo="One new observation changes the slope"}
The points $(1,2)$, $(2,3)$ and $(3,4)$ lie on $y=x+1$, so the regression on those three points has slope $1$. Add the pair $(8,0)$. The mean x-coordinate is now $\dfrac72$ and the mean y-coordinate is $\dfrac94$. The mean of the products $x_iy_i$ is $\dfrac{2+6+12+0}{4}=5$. Expanding the product of deviations shows that covariance is the mean of the products minus the product of the means.

$$
\begin{aligned}
\operatorname{cov}(x,y)
&=5-\frac72\cdot\frac94=-\frac{23}{8},\\[4pt]
\sigma_x^2&=\frac{1+4+9+64}{4}-\left(\frac72\right)^2=\frac{29}{4},\\[4pt]
m&=\frac{-\dfrac{23}{8}}{\dfrac{29}{4}}=-\frac{23}{58},\\[4pt]
q&=\frac94+\frac{23}{58}\cdot\frac72=\frac{211}{58}.
\end{aligned}
$$

The new slope is negative. The x-coordinate $8$ is far from the original group and the corresponding y-coordinate is low, so the product of its deviations is negative and large in absolute value. Before interpreting the slope, it is therefore worth checking whether one observation has a marked effect and finding out how it was measured.

::grafico{f="x+1;(-23*x+211)/58" xmin=-0.4 xmax=9 ymin=-0.55 ymax=6 punti="1,2;2,3;3,4;8,0,pieno,P" legenda="y=x+1;y=-\dfrac{23}{58}x+\dfrac{211}{58}" titolo="The solid line fits the first three points. The dashed line also uses $P$."}

:::

:::attenzione
An observed association alone leaves the question of causation open. A stand may sell more ice creams on days when more people visit the swimming pool. Warmer days may increase both visits and sales, so the two series can rise together even if visits have no effect on purchasing decisions. Assessing the association requires knowing the context in which the data were collected.
:::
