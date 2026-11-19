---
titolo: "Measures of location and spread"
sommario: "The mean, median, quantiles, and measures of spread for describing and comparing groups of observations."
---

## Arithmetic and weighted means

:::definizione{#media titolo="Arithmetic mean"}
Let $x_1,\ldots,x_n$ be $n\ge 1$ numerical observations of a quantity. The **arithmetic mean** $\bar x$ is the value each observation would receive if the sum of the data were divided equally among them.
$$
\bar x=\frac{1}{n}\sum_{i=1}^n x_i.
$$
The mean has the same units as the data. Multiplying it by the number of observations recovers the total, even if the individual values are unknown. For example, if four visits last $30\,\mathrm{min}$ on average, their total duration is $120\,\mathrm{min}$.
:::

:::definizione{#media-ponderata titolo="Weighted means and frequencies"}
Let $a_1,\ldots,a_k$ be numerical values with nonnegative weights $w_1,\ldots,w_k$ whose sum is positive. The **weighted mean** is
$$
\bar a_w=\frac{\sum_{j=1}^k w_j a_j}{\sum_{j=1}^k w_j}.
$$
The denominator normalizes the weights. Multiplying every weight by the same positive constant leaves the mean unchanged. When $w_j$ is the absolute frequency of the value $a_j$, the product $w_j a_j$ is the sum of all observations with that value. The mean calculated from the frequency table then equals the mean of the individual data values.
:::

:::esempio{titolo="Recovering the total from group summaries"}
A laboratory measured a mean concentration of $12\,\mathrm{mg/L}$ in ten samples and $16\,\mathrm{mg/L}$ in thirty other samples. The groups are disjoint and the units of measurement are the same. The sum of the values is $10\cdot12=120$ for the first group and $30\cdot16=480$ for the second. The overall mean is therefore
$$
\bar x=\frac{120+480}{40}\,\mathrm{mg/L}=15\,\mathrm{mg/L}.
$$
The result is closer to $16$ because the second group has three times as many observations as the first. The unweighted average of the two group means would give $14\,\mathrm{mg/L}$, assigning the groups equal weights.

::grafico{xmin=10.5 xmax=17.5 ymin=-0.7 ymax=35 nomi="x,n" poligoni="11.7,0 12.3,0 12.3,10 11.7,10;15.7,0 16.3,0 16.3,30 15.7,30" segmenti="15,0,15,30" etichette="11.85,12.1,10;15.85,32.2,30" titolo="The bars represent the two groups by their means and sizes. The vertical line at 15 marks the weighted mean."}
:::

:::osservazione
When observations are grouped into intervals, the frequency of each class is known, but the individual values within it are usually unknown. Replacing each observation by its class midpoint yields an **approximate mean**. For six observations in $[0,10)$ and four in $[10,30)$, the mean of the class midpoints weighted by frequency is $\dfrac{6\cdot5+4\cdot20}{10}=11$. If all the observations lie just above their respective lower endpoints, however, the actual mean is close to $4$. The accuracy of the approximation depends on the class widths and on how the values are distributed within them.

::grafico{xmin=-0.5 xmax=33 ymin=-0.07 ymax=0.78 nomi="x,densità" poligoni="0,0 10,0 10,0.6 0,0.6;10,0 30,0 30,0.2 10,0.2" linee="0,0.6 10,0.6 10,0;10,0.2 30,0.2 30,0" segmenti="11,0,11,0.7" punti="5,0,pieno;20,0,pieno" etichette="3.2,0.66,6 values;17.2,0.26,4 values;11.6,0.73,mean 11" titolo="Histogram of the two classes. The heights are the frequency densities $\dfrac{6}{10}$ and $\dfrac{4}{20}$, and the areas are the counts $6$ and $4$. The points on the axis mark the midpoints $5$ and $20$. The vertical line marks the approximate mean $11$."}
:::

:::osservazione
Even if only the class containing each measurement is known, the interval endpoints provide bounds on the mean. A table reports three times in $[10,20)$ and two in $[20,25)$. The total of the five times is at least $3\cdot10+2\cdot20=70$ minutes and strictly less than $3\cdot20+2\cdot25=110$ minutes. The mean is therefore at least $14\,\mathrm{min}$ and less than $22\,\mathrm{min}$. The mean calculated using class midpoints is $18\,\mathrm{min}$, the center of this interval. If the exact value of one time becomes available, replacing its interval by that value narrows the range of possible means.
:::

:::osservazione
The mean can be updated without keeping the whole data set. If a value $u$ is added to $n$ observations with mean $\bar x$, the new mean is $\dfrac{n\bar x+u}{n+1}$. Subtracting the previous mean gives
$$
\bar x_{\rm nuova}-\bar x=\frac{u-\bar x}{n+1}.
$$
The mean therefore shifts toward the new value. The larger the original group, the smaller the shift. Adding a time of $42\,\mathrm{min}$ to five times with mean $30\,\mathrm{min}$ gives a new mean of $32\,\mathrm{min}$. If a time of $42\,\mathrm{min}$ instead replaces a recorded time of $36\,\mathrm{min}$, the group still has five observations, and the change is $\dfrac{42-36}{5}\,\mathrm{min}=1.2\,\mathrm{min}$. The denominator depends on whether the observation is added or replaced.
:::

## The median, mode, and quantiles

:::definizione{#quantili titolo="Median and empirical quantiles"}
Arrange the $n\ge1$ observations in increasing order, and denote the value in position $k$ by $x_{(k)}$. Repeated values occupy separate positions. The **median** is the middle value when $n$ is odd and the mean of the two middle values when $n$ is even.
$$
\begin{aligned}
\operatorname{Med}(x)&=x_{(m+1)} &&\text{if }n=2m+1,\\[6pt]
\operatorname{Med}(x)&=\frac{x_{(m)}+x_{(m+1)}}{2} &&\text{if }n=2m.
\end{aligned}
$$
At least half the observations are less than or equal to the median, and at least half are greater than or equal to it. For the other **empirical quantiles** of order $0<p<1$, this course uses $q_p=x_{(\lceil np\rceil)}$. The symbol $\lceil np\rceil$ denotes the smallest integer greater than or equal to $np$. For $p=0.5$ the median convention is retained. The orders $0.25$ and $0.75$ give the first and third quartiles, denoted by $Q_1$ and $Q_3$.
:::

:::esempio{titolo="Ranks and cumulative frequencies"}
The ordered data are $2,2,4,5,7,7,8,10$. The first quartile occupies position $\lceil 8\cdot0.25\rceil=2$, so $Q_1=2$. The third quartile occupies position $\lceil8\cdot0.75\rceil=6$, so $Q_3=7$. The median uses positions $4$ and $5$, giving $\operatorname{Med}(x)=6$.

In a frequency table, position $6$ can be found by locating the first value for which the cumulative count is at least $6$. At $5$ the cumulative count is $4$, and at $7$ it is $6$. This gives $Q_3=7$ without expanding the table.

::grafico{xmin=-0.3 xmax=9 ymin=-0.6 ymax=11.6 nomi="k,xₖ" punti="1,2;2,2;3,4;4,5;5,7;6,7;7,8;8,10" segmenti="2,0,2,2;6,0,6,7" titolo="The points show the values in rank order. The vertical lines at ranks 2 and 6 reach the first and third quartiles, respectively."}
:::

:::attenzione
Software packages use different conventions, especially when the rank falls between two positions in the list. For $2,6,10,18,30$, rounding the rank up gives $Q_1=6$ because $\lceil5\cdot0.25\rceil=2$. A method that uses rank $(n+1)p$ and interpolates linearly assigns position $1.5$ and gives $4$. Comparing results therefore requires knowing which rule was used.
:::

:::definizione{#moda titolo="Mode"}
A **mode** is a value or category with the highest frequency. This measure of location can also be found for unordered categorical variables. If red, blue, and green occur $5$, $5$, and $2$ times, respectively, red and blue are both modes. In a histogram with unequal class widths, the class with the highest frequency may differ from the class with the highest frequency density, which has the tallest bar.
:::

:::osservazione
When a quantile is obtained by rounding the rank up, the proportion of observations strictly below $q_p$ is less than $p$, and the proportion less than or equal to $q_p$ is at least $p$. Indeed, if $k=\lceil np\rceil$, at most $k-1$ observations are strictly below the value at position $k$, whereas at least $k$ are less than or equal to it. The two proportions can differ considerably when values repeat. In the data $1,2,4,4,4,4,6,9$, the third quartile has rank $6$ and value $4$. Only two observations are strictly less than $4$, but six are less than or equal to it. The statement that 75 percent of the observations lie below the third quartile therefore needs to distinguish between the two inequalities.

::grafico{xmin=-1 xmax=10.5 ymin=-0.08 ymax=1.16 nomi="x,Fₙ(x)" linee="-0.6,0 1,0;1,0.125 2,0.125;2,0.25 4,0.25;4,0.75 6,0.75;6,0.875 9,0.875;9,1 10,1" punti="1,0,vuoto;1,0.125,pieno;2,0.125,vuoto;2,0.25,pieno;4,0.25,vuoto;4,0.75,pieno;6,0.75,vuoto;6,0.875,pieno;9,0.875,vuoto;9,1,pieno" segmenti="-0.6,0.75,4,0.75;4,0,4,0.25" etichette="-0.95,0.79,0.75;-0.95,0.29,0.25" titolo="Empirical distribution function of $1,2,4,4,4,4,6,9$. The jump at $4$ goes from $\dfrac{2}{8}$ to $\dfrac{6}{8}$ and reaches the level $\dfrac{3}{4}$, so $Q_3=4$."}
:::

::::teorema{#centro-assoluto titolo="Minimizing the sum of absolute deviations"}
For $n\ge1$ ordered real observations, the sum $\sum_i |x_i-c|$ is minimized when $c$ is the median. When $n$ is even, every value between the two middle observations is a minimizer. This property characterizes a center in terms of absolute deviations and explains why taking the mean of the middle pair in an even-sized sample is a convention. For the data $1,2,9$, the median $2$ gives a sum of absolute deviations of $8$, whereas the mean $4$ gives $10$.

::grafico{f="abs(x-1)+abs(x-2)+abs(x-9)" xmin=-0.8 xmax=11 ymin=-1 ymax=23 nomi="c,S(c)" legenda=0 punti="2,8,pieno;4,10,pieno" segmenti="2,0,2,8;4,0,4,10" etichette="2.2,6.2,(2, 8);4.2,11.6,(4, 10)" titolo="Graph of $S(c)=|1-c|+|2-c|+|9-c|$. The function is piecewise linear and attains its minimum $8$ at the median $c=2$. At the mean $c=4$ its value is $10$."}

:::dimostrazione
Pair the smallest observation with the largest, the second smallest with the second largest, and so on. For a pair $a\le b$, the sum $|a-c|+|b-c|$ is at least $b-a$ and attains this lower bound for $c\in[a,b]$. The intervals formed by the pairs are nested. Hence it suffices for $c$ to lie in the interval of the innermost pair to minimize all the contributions. When $n$ is even, this is the interval between the two middle observations. When $n$ is odd, the single middle observation also contributes, and its contribution is minimized when $c$ equals that observation.
:::
::::

## Descriptive variance and corrected sample variance

:::definizione{#varianza titolo="Variance and standard deviation"}
The difference $x_i-\bar x$ measures how far observation $i$ lies above or below the mean. The signed deviations sum to zero, so their squares can be added to measure spread. Denoting this sum by $D$, we define
$$
D=\sum_{i=1}^{n}(x_i-\bar x)^2,\qquad
v=\frac{D}{n},\qquad
s^2=\frac{D}{n-1}\quad(n>1).
$$
The **descriptive variance** $v$ is the mean of the observed squared deviations. The **corrected sample variance** $s^2$ uses the divisor $n-1$. The chapter on point estimation examines why it is unbiased for an independent random sample from a population with finite variance. When data cover an entire finite population of size $N$, its descriptive variance uses the divisor $N$.
:::

:::esempio{titolo="Two divisors for the same squared deviations"}
Three processing times are $2,4,6$ minutes. Their mean is $4\,\mathrm{min}$, so their deviations are $-2,0,2$ minutes and the sum of squared deviations is $8\,\mathrm{min^2}$. The two variances are
$$
v=\frac{8}{3}\,\mathrm{min^2},
\qquad
s^2=\frac{8}{2}\,\mathrm{min^2}=4\,\mathrm{min^2}.
$$
The square roots $\sqrt v$ and $s=\sqrt{s^2}$ are the corresponding standard deviations, once again expressed in minutes. The sample standard deviation in this example is $2\,\mathrm{min}$. If all times were equal, every deviation would be zero, so both measures of spread would vanish.
:::

:::osservazione
In an absolute frequency table, the squared deviation associated with $a_j$ appears $n_j$ times. Thus $D=\sum_j n_j(a_j-\bar x)^2$. For a table with relative frequencies $f_j=\dfrac{n_j}{n}$, this gives $v=\sum_j f_j(a_j-\bar x)^2$ directly. The divisor used to obtain $s^2$ is still $n-1$, where $n$ is the number of observations. The number of rows in the table counts only the distinct values.
:::

## Computational identities and changes of scale

::::teorema{#trasformazioni titolo="Deviations, the variance identity, and transformations"}
For $n\ge1$ real observations with mean $\bar x$,
$$
\sum_{i=1}^{n}(x_i-\bar x)=0,\qquad
v=\frac{1}{n}\sum_{i=1}^n x_i^2-\bar x^2.
$$
If each observation is transformed according to $y_i=a+bx_i$ with real constants $a,b$, then
$$
\bar y=a+b\bar x,\qquad
v_y=b^2v_x,\qquad
s_y=|b|s_x\quad(n>1).
$$
The identity involving squares gives $v$ using only the mean and the mean of the squares. The transformation rules give the converted measures without having to reconstruct all the individual observations.

:::dimostrazione
Substituting $\sum_i x_i=n\bar x$ gives the sum of the deviations, $\sum_i(x_i-\bar x)=n\bar x-n\bar x=0$. For the variance, expand the square and use the same identity.
$$
\begin{aligned}
D
&=\sum_i x_i^2-2\bar x\sum_i x_i+n\bar x^2\\[6pt]
&=\sum_i x_i^2-n\bar x^2.
\end{aligned}
$$
Dividing by $n$ gives the formula. For the transformed observations, the sum of the values $a+bx_i$ divided by $n$ equals $a+b\bar x$. It follows that $y_i-\bar y=b(x_i-\bar x)$. Each squared deviation is multiplied by $b^2$, so the same factor applies to the variances. Taking the square root gives the factor $|b|$ for standard deviations.
:::
::::

:::esempio{titolo="Shifting the zero point and changing the units"}
Three temperatures have a mean of $20\,^\circ\mathrm{C}$ and a sample standard deviation of $5\,^\circ\mathrm{C}$. The conversion to Fahrenheit is $y=32+\dfrac{9}{5}x$. The new mean is $68\,^\circ\mathrm{F}$, and the new standard deviation is $9\,^\circ\mathrm{F}$. The additive constant $32$ enters the calculation of the mean. Only the factor $\dfrac{9}{5}$ affects the standard deviation because taking a difference between two temperatures cancels the shift in the zero point.
:::

:::osservazione
If $b>0$, the ordering of the observations is preserved. The median and quantiles therefore follow the same transformation $a+bx$, and the interquartile range is multiplied by $b$. If $b<0$, the positions in the ordered list are reversed. A quantile can then be found using $y_{(k)}=a+bx_{(n+1-k)}$. The median still transforms as $a+b\operatorname{Med}(x)$ because the two middle values switch places and their mean follows the same transformation.
:::

:::attenzione
When ranks are rounded up, reflecting the scale can change the interquartile range even if the range stays the same. For the data $0,1,2,10$, the first and third quartiles occupy the first and third positions, so the interquartile range is $2$. After applying $y=-x$, the ordered observations are $-10,-2,-1,0$. The same positions now give quartiles $-10$ and $-1$, with interquartile range $9$. Reflection exchanges the endpoints and preserves the range of $10$.
:::

:::osservazione
Suppose two disjoint groups have sizes $n_1,n_2$, means $\bar x_1,\bar x_2$, and within-group sums of squared deviations $D_1,D_2$. Let $\bar x$ be the overall mean. The sum of squared deviations about $\bar x$ is
$$
D=D_1+D_2+n_1(\bar x_1-\bar x)^2+n_2(\bar x_2-\bar x)^2.
$$
To obtain the identity, write each deviation from the overall mean as the sum of its deviation from the group mean and the difference between the two means. When the square is expanded, the cross term vanishes because the deviations within each group sum to zero. Overall spread therefore reflects both the spread within groups and the differences between their means.
:::

::::teorema{#centro-quadratico titolo="Minimizing the sum of squared deviations"}
Let $x_1,\ldots,x_n$ be real observations with $n\ge1$. Among all real numbers $c$, the sum $\sum_i(x_i-c)^2$ is minimized at $c=\bar x$. The mean is therefore the single value that best approximates the data when error is measured by the sum of squared deviations.

::grafico{f="x^2+(x-1)^2+(x-5)^2" xmin=-0.8 xmax=5 ymin=-0.5 ymax=45 nomi="c,Q(c)" legenda=0 punti="2,14,pieno;1,17,pieno" segmenti="2,0,2,14;1,0,1,17" etichette="2.2,10,(2, 14);0.15,12.5,(1, 17)" titolo="Graph of $Q(c)=c^2+(c-1)^2+(c-5)^2$ for the observations $0,1,5$. The vertex of the parabola lies at the mean $c=2$, where its value is $D=14$. At the median $c=1$, its value is $17$."}

:::dimostrazione
Write $x_i-c=(x_i-\bar x)+(\bar x-c)$ and expand the square. The cross terms sum to zero because $2(\bar x-c)$ is constant and $\sum_i(x_i-\bar x)=0$. This gives
$$
\sum_i(x_i-c)^2=D+n(\bar x-c)^2.
$$
The term added to $D$ is nonnegative and vanishes only for $c=\bar x$, which is therefore the minimizer. For the data $0,1,5$, the center $2$ gives the sum $4+1+9=14$, whereas the center $1$ gives $1+0+16=17$.
:::
::::

## Absolute and relative measures of spread

:::definizione{#dispersione titolo="Range, interquartile range, and coefficient of variation"}
The **range** is the difference between the maximum and the minimum. The **interquartile range** $\operatorname{IQR}=Q_3-Q_1$ is the distance between the first and third quartiles and measures the spread of the central part of the distribution. Both are expressed in the same units as the data. The range depends only on the two extreme values, whereas the interquartile range depends on two interior ranks in the ordered list.

For measurements on a ratio scale with a meaningful zero and a positive mean, the coefficient of variation is $\operatorname{CV}=\dfrac{s}{\bar x}$. Here $s$ is the sample standard deviation calculated with the corrected divisor. When describing an entire population, the population standard deviation is used instead. The ratio is dimensionless and can also be expressed as a percentage.
:::

:::esempio{titolo="Comparing processes with different means"}
Two production lines make containers with mean capacities of $200\,\mathrm{mL}$ and $500\,\mathrm{mL}$, respectively. Their sample standard deviations are $8\,\mathrm{mL}$ and $15\,\mathrm{mL}$. Their coefficients of variation are
$$
\operatorname{CV}_1=\frac{8}{200}=0.04,\qquad
\operatorname{CV}_2=\frac{15}{500}=0.03.
$$
The second line has the larger standard deviation in milliliters, but the first has the greater spread relative to its own mean. Converting all capacities to liters multiplies the numerator and denominator of each ratio by the same constant, so the coefficients remain unchanged.
:::

:::attenzione
The coefficient of variation depends on the zero of the scale. Temperatures with mean $20\,^\circ\mathrm{C}$ and standard deviation $5\,^\circ\mathrm{C}$ would give a ratio of $0.25$ in Celsius. In kelvins the same measurements would have mean $293.15\,\mathrm{K}$ and standard deviation $5\,\mathrm{K}$, so the ratio would be about $0.017$. Shifting zero changes the ratio even though the physical variability is the same. Furthermore, when the mean is very close to zero, small changes in the denominator can cause large changes in the coefficient.
:::

## Box plots and observations beyond the fences

:::definizione{#boxplot titolo="Box plots and Tukey's fences"}
In a **box plot**, the box extends from the first quartile to the third, and a line inside marks the median. Tukey's rule gives the two fences
$$
L=Q_1-1.5\operatorname{IQR},\qquad
U=Q_3+1.5\operatorname{IQR}.
$$
The lower whisker extends to the smallest observation greater than or equal to $L$. The upper whisker extends to the largest observation less than or equal to $U$. Observations strictly outside $[L,U]$ are plotted as individual points. The whiskers therefore end at observed values. A fence that coincides with an observation may also coincide with the tip of a whisker.
:::

:::esempio{titolo="From the quartiles to the whiskers"}
For the observations $2,3,4,5,6,7,8,18$, the quartiles are $Q_1=3$ and $Q_3=7$, and the median is $5.5$. Since $\operatorname{IQR}=4$, the fences are $-3$ and $13$. The observation $18$ exceeds the upper fence. The whiskers therefore end at $2$ and $8$, the most extreme observations within the fences.

::grafico{xmin=0 xmax=20 ymin=-0.6 ymax=1.7 nomi="x,y" poligoni="3,0.65 7,0.65 7,1.35 3,1.35" linee="3,0.65 7,0.65 7,1.35 3,1.35 3,0.65;2,1 3,1;7,1 8,1;2,0.86 2,1.14;8,0.86 8,1.14;5.5,0.65 5.5,1.35" punti="18,1,pieno" titolo="Observed values on the x-axis."}
:::

:::osservazione
The length of the box gives the interquartile range. The position of the median within the box and the lengths of the whiskers help compare the spread of the middle half of the observations with the spread toward either extreme. Two identical box plots can nevertheless come from different data sets because the plot retains only a few features. A point beyond a fence lies far from the middle of the distribution according to this rule. Interpreting it requires knowing the units, understanding the context, and checking how the observation was collected.
:::

:::esempio{titolo="Comparing two box plots"}
Two departments produce batches measured in the same units. The first department has $Q_1=12$, median $14$, and $Q_3=18$. The second has $Q_1=16$, median $18$, and $Q_3=20$. The median of the second department equals the third quartile of the first, so the centers and upper quartiles of the two distributions occupy different positions on the same scale. The interquartile range of the second department is $4$, compared with $6$ for the first. This comparison concerns the middle of the distribution. Determining which department has the greater distance between maximum and minimum also requires the observed extremes, including any individually plotted points. The lengths of the boxes do not indicate how many batches were measured.

::grafico{xmin=0 xmax=23 ymin=-0.3 ymax=3.3 nomi="x,y" poligoni="12,0.6 18,0.6 18,1.4 12,1.4;16,1.9 20,1.9 20,2.7 16,2.7" linee="12,0.6 18,0.6 18,1.4 12,1.4 12,0.6;14,0.6 14,1.4;16,1.9 20,1.9 20,2.7 16,2.7 16,1.9;18,1.9 18,2.7" segmenti="18,1.4,18,1.9" etichette="2,1,dept. 1;2,2.3,dept. 2" titolo="Boxes for the two departments on a common scale. The whiskers are omitted because the extremes are unknown. The dashed line connects the upper quartile of the first department to the median of the second, both equal to $18$."}
:::

## Standardization and the shape of a distribution

:::definizione{#standardizzazione titolo="Standardized score"}
For a data set with $n>1$ observations and sample standard deviation $s>0$, the **standardized score** of $x_i$ is
$$
z_i=\frac{x_i-\bar x}{s}.
$$
The sign of $z_i$ indicates which side of the mean the observation lies on. Its absolute value gives the distance in standard deviations. The score is dimensionless. The inverse formula $x_i=\bar x+s z_i$ converts a threshold back to the original scale. If all observations are equal, $s=0$ and the division is undefined.
:::

:::esempio{titolo="Comparing two measurements"}
A test has mean $64$ and standard deviation $8$. A score of $76$ is $\dfrac{76-64}{8}=1.5$ standard deviations above the mean. On a second test with mean $72$ and standard deviation $4$, a score of $78$ has the same standardized value. The relative distance from the center is the same on both tests. The proportion of scores below each one may still differ because it also depends on the shape of the score distribution.
:::

:::osservazione
Standardization is an affine transformation with positive coefficient $b=\dfrac{1}{s}$. It therefore preserves the ordering and transforms the mean to $0$ and the sample standard deviation to $1$. Any gaps between groups of values and the direction of a tail remain visible. For example, in the data $1,2,2,3,22$ the mean is $6$ and the median is $2$. A single very high value contributes to a right tail. Standardization shifts and rescales the axis, and the tail remains on the right.
:::

:::osservazione
The mean and standard deviation are appropriate for describing the average level and measuring squared deviations. The median and interquartile range describe the center and central spread through ranks, so the exact magnitudes of a few extreme values affect them less. In the two sets $2,3,4,5,6$ and $2,3,4,5,26$, the median and quartiles agree. The means, however, are $4$ and $8$, and the spread measured by squared deviations is also larger in the second set. Reporting both types of measures makes the contribution of the highest observation explicit.

::grafico{xmin=0 xmax=28 ymin=-0.2 ymax=3 nomi="x,y" punti="2,2;3,2;4,2;5,2;6,2;2,1;3,1;4,1;5,1;26,1" linee="4,1.7 4,2.3;8,0.7 8,1.3" segmenti="4,0.75,4,1.25" etichette="3.4,2.55,mean and median 4;8.4,1.5,mean 8;3.4,0.4,median 4" titolo="The data sets $2,3,4,5,6$ (top) and $2,3,4,5,26$ (bottom). The solid lines mark the means $4$ and $8$. The dashed line marks the median $4$ of the second set."}
:::
