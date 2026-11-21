---
titolo: "Measures of location and spread"
sommario: "The mean, median, quantiles, and measures of spread for describing and comparing groups of observations."
---

In Chapter 1 the collected data were summarized with frequency tables and graphs. This chapter summarizes them with a few numbers, called measures or indices. Suppose, for example, that five patients at a clinic wait $5$, $10$, $15$, $20$, and $50$ minutes. The mean waiting time is $\dfrac{5+10+15+20+50}{5}=20$ minutes; the median, the waiting time in the middle of the ordered list, is $15$ minutes; and the shortest and longest waits differ by $50-5=45$ minutes.

The mean and the median are measures of location, because each gives in a single number the typical length of a wait. The difference of $45$ minutes is a measure of spread, because it says how different the waits are from one another. The mean exceeds the median because the single wait of $50$ minutes raises the sum; the chapter shows how each measure changes when one observation lies far from the others, and how the measures are computed from the frequency tables of Chapter 1. The chapter also defines the variance and the standard deviation, two measures of spread computed from the distances of the data from the mean.

In Chapters 5 and 6, on probability, the mean and the variance become the expected value and the variance of a number that depends on chance. In Chapters 8 to 12, on inference, the mean $\bar x$ and the standard deviation $s$ of a sample are used to estimate the mean of the whole population and to compute the error of this estimate. The property of the mean proved in this chapter, that it minimizes the sum of the squared distances from the data, is the criterion used to construct the regression line of Chapter 12.

## Arithmetic and weighted means

:::definizione{#media titolo="Arithmetic mean"}
Four appointments at a clinic last $20$, $25$, $35$, and $40$ minutes, $120$ minutes in all. If the total time were divided equally among the four appointments, each would last $\dfrac{120}{4}=30$ minutes. This value is the arithmetic mean of the four durations.

In symbols, let $x_1,\ldots,x_n$ be the $n\ge 1$ observations of a quantitative variable (Chapter 1). The **arithmetic mean** $\bar x$, read "x bar", is the sum of the observations divided by their number:
$$
\bar x=\frac{1}{n}\sum_{i=1}^n x_i.
$$
The symbol $\sum_{i=1}^n x_i$ denotes the sum $x_1+x_2+\cdots+x_n$.

The mean has the same units as the data. Multiplying it by the number of observations recovers the total, because $n\bar x=\sum_{i=1}^n x_i$, even when the individual values are unknown. If all that is known about four appointments is that they last $30\,\mathrm{min}$ on average, their total duration is $4\cdot30=120\,\mathrm{min}$. This step is used to combine two groups and to update a mean.
:::

:::definizione{#media-ponderata titolo="Weighted means and frequencies"}
A student scored $24$ on a $6$-credit exam and $30$ on a $12$-credit exam. The $12$-credit exam counts twice as much, so each grade is multiplied by its credits and the sum is divided by the total number of credits:
$$
\frac{6\cdot24+12\cdot30}{6+12}=\frac{144+360}{18}=28.
$$
The simple mean of the two grades, $\dfrac{24+30}{2}=27$, treats the two exams as if they carried the same credits. The number $28$ is a weighted mean of the grades, and the credits are the weights.

In symbols, let $a_1,\ldots,a_k$ be numerical values with nonnegative weights $w_1,\ldots,w_k$ whose sum is positive. The **weighted mean** is
$$
\bar a_w=\frac{\sum_{j=1}^k w_j a_j}{\sum_{j=1}^k w_j}.
$$
The denominator is the sum of the weights, so multiplying every weight by the same positive constant leaves the mean unchanged.

When $w_j$ is the absolute frequency (Chapter 1) of the value $a_j$, the product $w_ja_j$ is the sum of the observations equal to $a_j$, and the sum of the weights is the number of observations. The mean computed from the frequency table therefore equals the mean of the individual observations. For example, the data $2,2,2,5$ have the table "value $2$ with frequency $3$, value $5$ with frequency $1$", and $\dfrac{3\cdot2+1\cdot5}{4}=2.75$ is also the mean $\dfrac{2+2+2+5}{4}$.
:::

:::esempio{titolo="Recovering the total from group summaries"}
A laboratory measured a mean concentration of $12\,\mathrm{mg/L}$ in ten test tubes and $16\,\mathrm{mg/L}$ in thirty other test tubes. The groups are disjoint and the measurements are in the same units. The sum of the measurements is $10\cdot12=120$ for the first group and $30\cdot16=480$ for the second. The overall mean is therefore
$$
\bar x=\frac{120+480}{40}\,\mathrm{mg/L}=15\,\mathrm{mg/L}.
$$
This is the weighted mean of the means $12$ and $16$ with weights equal to the group sizes $10$ and $30$. The result is closer to $16$ because the second group has three times as many test tubes as the first. The simple mean of the two group means would give $14\,\mathrm{mg/L}$, because it would give the two groups the same weight.

::grafico{xmin=10.5 xmax=17.5 ymin=-0.7 ymax=35 nomi="x,n" poligoni="11.7,0 12.3,0 12.3,10 11.7,10;15.7,0 16.3,0 16.3,30 15.7,30" segmenti="15,0,15,30" etichette="11.85,12.1,10;15.85,32.2,30" titolo="The bars represent the two groups by their means and sizes. The vertical line at 15 marks the weighted mean."}
:::

:::osservazione
When observations are grouped into classes (Chapter 1), the number of observations in each class is known, but the individual values are not. Each observation is then replaced by the midpoint of its class, and the weighted mean of the midpoints is computed with the frequencies as weights; the result is called the **approximate mean**. For six observations in $[0,10)$ and four in $[10,30)$, the midpoints are $5$ and $20$, and the approximate mean is $\dfrac{6\cdot5+4\cdot20}{10}=11$.

The actual mean depends on how the values lie within the classes. If the six observations of the first class all equal $0$ and the four of the second all equal $10$, the actual mean is $\dfrac{4\cdot10}{10}=4$, far from $11$.

::grafico{xmin=-0.5 xmax=33 ymin=-0.07 ymax=0.78 nomi="x,densità" poligoni="0,0 10,0 10,0.6 0,0.6;10,0 30,0 30,0.2 10,0.2" linee="0,0.6 10,0.6 10,0;10,0.2 30,0.2 30,0" segmenti="11,0,11,0.7" punti="5,0,pieno;20,0,pieno" etichette="3.2,0.66,6 values;17.2,0.26,4 values;11.6,0.73,mean 11" titolo="Histogram of the two classes. The heights are the frequency densities $\dfrac{6}{10}$ and $\dfrac{4}{20}$, and the areas are the counts $6$ and $4$. The points on the axis mark the midpoints $5$ and $20$. The vertical line marks the approximate mean $11$."}
:::

:::osservazione
The class endpoints give two bounds on the actual mean. A table reports three times in $[10,20)$ and two in $[20,25)$, in minutes. Each time in the first class is at least $10$ and less than $20$, and each time in the second is at least $20$ and less than $25$. Hence the total of the five times is at least $3\cdot10+2\cdot20=70$ minutes and strictly less than $3\cdot20+2\cdot25=110$ minutes. Dividing by $5$, the mean is at least $14\,\mathrm{min}$ and less than $22\,\mathrm{min}$. The approximate mean computed with the midpoints is $\dfrac{3\cdot15+2\cdot22.5}{5}=18\,\mathrm{min}$, the center of this interval.
:::

:::osservazione
Five times have mean $30\,\mathrm{min}$, so their total is $150\,\mathrm{min}$. A sixth time of $42\,\mathrm{min}$ is added; the total becomes $192\,\mathrm{min}$ and the new mean is $\dfrac{192}{6}=32\,\mathrm{min}$.

In symbols, if a value $u$ is added to $n$ observations with mean $\bar x$, the new mean is $\dfrac{n\bar x+u}{n+1}$. Subtracting the previous mean gives
$$
\bar x_{\rm nuova}-\bar x=\frac{n\bar x+u-(n+1)\bar x}{n+1}=\frac{u-\bar x}{n+1}.
$$
The mean therefore moves toward the new value, and the shift is smaller the larger the original group; in the example it is $\dfrac{42-30}{6}=2\,\mathrm{min}$. If instead the time of $42\,\mathrm{min}$ replaces a recorded time of $36\,\mathrm{min}$, the group still has five observations and the total increases by $6\,\mathrm{min}$, so the mean increases by $\dfrac{42-36}{5}\,\mathrm{min}=1.2\,\mathrm{min}$. When a value is added the denominator is $n+1$; when a value is replaced it stays $n$.
:::

## The median, mode, and quantiles

:::definizione{#quantili titolo="Median and empirical quantiles"}
Seven students take $12$, $30$, $8$, $25$, $15$, $40$, and $18$ minutes to get to the university. In increasing order the times are $8,12,15,18,25,30,40$. The time in the middle of the list, $18$, has three times before it and three after it, and is the median of the seven times.

In symbols, arrange the $n\ge1$ observations from smallest to largest and denote by $x_{(k)}$ the value in position $k$ of the ordered list. The position $k$ is called the rank of the observation. Repeated values occupy separate positions; in the list $2,2,4$, for example, the value $2$ has ranks $1$ and $2$. The **median** $\operatorname{Med}(x)$ is the middle observation when $n$ is odd and the mean of the two middle observations when $n$ is even. Writing $n=2m+1$ in the first case and $n=2m$ in the second,
$$
\begin{aligned}
\operatorname{Med}(x)&=x_{(m+1)} &&\text{if }n=2m+1,\\[6pt]
\operatorname{Med}(x)&=\frac{x_{(m)}+x_{(m+1)}}{2} &&\text{if }n=2m.
\end{aligned}
$$
For the seven times $m=3$ and $\operatorname{Med}(x)=x_{(4)}=18$. In both cases at least half the observations are less than or equal to the median, and at least half are greater than or equal to it.

In the same way, one can look for a value that has a quarter of the observations at or below it. A quarter of the seven times corresponds to $7\cdot0.25=1.75$ observations. Up to rank $1$ there is only one observation, fewer than $1.75$; up to rank $2$ there are two, which is at least $1.75$. The required value is therefore the observation of rank $2$, namely $12$.

The **empirical quantile** of order $p$, with $0<p<1$, is the observation $q_p$ in the first rank $k$ at which the proportion $\dfrac kn$ of observations up to that position reaches at least $p$. The condition $\dfrac kn\ge p$ is equivalent to $k\ge np$, so the required rank is the smallest integer greater than or equal to $np$, denoted by $\lceil np\rceil$; for example $\lceil1.75\rceil=2$ and $\lceil2\rceil=2$. In a formula,
$$
q_p=x_{(\lceil np\rceil)}.
$$
This rule is called the **upper-rank rule**, or rounding the rank up, and it is the rule used throughout this course; for $p=0.5$ the median defined above is used instead. The orders $0.25$ and $0.75$ give the first and third quartiles, denoted by $Q_1$ and $Q_3$, which together with the median divide the ordered list into four parts of about $\dfrac n4$ observations each. The quantile $q_p$ is also called the percentile of order $100p$.

The quartiles are used to measure the spread of the middle half of the data and to draw the box plot, later in this chapter. Quantiles of a random variable return in Chapter 6 and in the confidence intervals of Chapter 10.
:::

:::esempio{titolo="Ranks and cumulative frequencies"}
The ordered data are $2,2,4,5,7,7,8,10$, so $n=8$. The first quartile has rank $\lceil 8\cdot0.25\rceil=2$, so $Q_1=x_{(2)}=2$. The third quartile has rank $\lceil8\cdot0.75\rceil=6$, so $Q_3=x_{(6)}=7$. The median uses ranks $4$ and $5$, occupied by $5$ and $7$, so $\operatorname{Med}(x)=\dfrac{5+7}{2}=6$.

In a frequency table, the cumulative absolute frequency of a value (Chapter 1) is the rank of the last copy of that value. Rank $6$ is therefore found by looking for the first value whose cumulative count reaches at least $6$. At the value $5$ the cumulative count is $2+1+1=4$, while at the value $7$ it is $4+2=6$. This gives $Q_3=7$ without writing out the whole list.

In the graph the horizontal axis shows the rank $k$ and the vertical axis shows the value $x_{(k)}$ with that rank.

::grafico{xmin=-0.3 xmax=9 ymin=-0.6 ymax=11.6 nomi="k,xₖ" punti="1,2;2,2;3,4;4,5;5,7;6,7;7,8;8,10" segmenti="2,0,2,2;6,0,6,7" titolo="The points show the values in rank order. The vertical lines at ranks 2 and 6 reach the first and third quartiles, respectively."}
:::

:::attenzione
Software packages use different rules for quantiles, and the results differ when $np$ is not an integer. For the data $2,6,10,18,30$, the upper-rank rule gives $Q_1=6$, because $\lceil5\cdot0.25\rceil=\lceil1.25\rceil=2$. Another common rule uses rank $(n+1)p$ and, when it is not an integer, takes the intermediate value between the two neighboring observations, a procedure called linear interpolation. Here $(5+1)\cdot0.25=1.5$ lies halfway between the first and second ranks, so the quartile is $\dfrac{2+6}{2}=4$. Two quartiles computed with different rules are therefore not comparable.
:::

:::definizione{#moda titolo="Mode"}
In a survey on favorite colors, red, blue, and green occur $5$, $5$, and $2$ times, respectively. A **mode** is a category or value with the highest frequency, so in this survey there are two modes, red and blue. The mode is the only measure of location in this chapter that can also be found for an unordered categorical variable (Chapter 1), because it only requires counting the answers.

With data grouped into classes of unequal width, the frequency densities of the histogram (Chapter 1) are compared. With $8$ waiting times in $[0,2)$ minutes and $12$ in $[2,8)$ minutes, the class with more waiting times is $[2,8)$, but the density of the first class is $\dfrac82=4$ waiting times per minute and that of the second is $\dfrac{12}{6}=2$ waiting times per minute. The **modal class** is the class with the highest frequency density, that is, the one with the tallest rectangle in the histogram; here it is $[0,2)$.
:::

:::osservazione
In the data $1,2,4,4,4,4,6,9$, the third quartile has rank $\lceil8\cdot0.75\rceil=6$ and value $4$. Six observations are less than or equal to $4$, that is $75\,\%$ of the eight, while only two are strictly less than $4$, that is $25\,\%$. The two proportions are very different because the value $4$ is repeated four times.

For every quantile obtained with the upper-rank rule, with $k=\lceil np\rceil$, two inequalities hold.

- The proportion of observations less than or equal to $q_p$ is at least $p$, because the observations of ranks $1$ to $k$ are less than or equal to $x_{(k)}$ and $\dfrac kn\ge p$.
- The proportion of observations strictly less than $q_p$ is less than $p$, because these observations have ranks before $k$, so there are at most $k-1$ of them, and $k-1<np$ since $k$ is the smallest integer greater than or equal to $np$.

With the empirical distribution function of Chapter 1 the two inequalities read $F_n(q_p)\ge p$ and $F_n(q_p^-)<p$, so the quantile is the point where the graph of $F_n$ reaches or jumps past the level $p$. The statement "the third quartile has $75\,\%$ of the observations below it" should therefore be read as "at least $75\,\%$ of the observations are less than or equal to $Q_3$".

::grafico{xmin=-1 xmax=10.5 ymin=-0.08 ymax=1.16 nomi="x,Fₙ(x)" linee="-0.6,0 1,0;1,0.125 2,0.125;2,0.25 4,0.25;4,0.75 6,0.75;6,0.875 9,0.875;9,1 10,1" punti="1,0,vuoto;1,0.125,pieno;2,0.125,vuoto;2,0.25,pieno;4,0.25,vuoto;4,0.75,pieno;6,0.75,vuoto;6,0.875,pieno;9,0.875,vuoto;9,1,pieno" segmenti="-0.6,0.75,4,0.75;4,0,4,0.25" etichette="-0.95,0.79,0.75;-0.95,0.29,0.25" titolo="Empirical distribution function of $1,2,4,4,4,4,6,9$. The jump at $4$ goes from $\dfrac{2}{8}$ to $\dfrac{6}{8}$ and reaches the level $\dfrac{3}{4}$, so $Q_3=4$."}
:::

::::teorema{#centro-assoluto titolo="Minimizing the sum of absolute deviations"}
Three houses stand along a straight road, at kilometers $1$, $2$, and $9$. With a meeting point at kilometer $2$, the median of the three data, the total distance from the three houses is $1+0+7=8$ kilometers. At kilometer $4$, the mean, the total distance is $3+2+5=10$ kilometers.

Let $x_1,\ldots,x_n$ be real observations, with $n\ge1$. The sum of the distances of the observations from a number $c$, namely $S(c)=\sum_i |x_i-c|$, is minimized when $c$ is the median. When $n$ is even, every value between the two middle observations minimizes the sum, so taking their mean as the median is a convention. The theorem states in what sense the median is a center of the data.

::grafico{f="abs(x-1)+abs(x-2)+abs(x-9)" xmin=-0.8 xmax=11 ymin=-1 ymax=23 nomi="c,S(c)" legenda=0 punti="2,8,pieno;4,10,pieno" segmenti="2,0,2,8;4,0,4,10" etichette="2.2,6.2,(2, 8);4.2,11.6,(4, 10)" titolo="Graph of $S(c)=|1-c|+|2-c|+|9-c|$. The function is piecewise linear and attains its minimum $8$ at the median $c=2$. At the mean $c=4$ its value is $10$."}

:::dimostrazione
Order the observations and pair the smallest with the largest, the second smallest with the second largest, and so on. For a pair $a\le b$ the sum $|a-c|+|b-c|$ equals

- $(c-a)+(b-c)=b-a$ if $c\in[a,b]$;
- $(a-c)+(b-c)=b-a+2(a-c)$, which is greater than $b-a$, if $c<a$;
- $(c-a)+(c-b)=b-a+2(c-b)$, which is greater than $b-a$, if $c>b$.

The contribution of each pair is therefore minimized exactly when $c$ lies in the interval $[a,b]$ of the pair. The intervals of the pairs are nested, that is, each contains the next, because moving from one pair to the next the left observation increases and the right observation decreases. Hence every $c$ in the interval of the innermost pair belongs to all the intervals and minimizes all the contributions at once. When $n$ is even, this is the interval between the two middle observations. When $n$ is odd, the middle observation is left without a partner, and its contribution $|x_{(m+1)}-c|$ is minimized, with value $0$, at $c=x_{(m+1)}$. For the data $1,2,9$ the pair $(1,9)$ contributes at least $8$ and the observation $2$ at least $0$, so the minimum of $S$ is $8$, at $c=2$.
:::
::::

## Descriptive variance and corrected sample variance

:::definizione{#varianza titolo="Variance and standard deviation"}
The times $4,4,4$ and the times $1,4,7$, in minutes, have the same mean, $4$ minutes, but only in the second group do they differ from one another. To measure this difference, compute for each observation its deviation from the mean, $x_i-\bar x$, which is positive if the observation lies above the mean and negative if it lies below. For $1,4,7$ the deviations are $-3$, $0$, and $3$.

The signed deviations always sum to zero, because $\sum_i(x_i-\bar x)=\sum_i x_i-n\bar x$ and $\sum_i x_i=n\bar x$ by the definition of the mean. Their squares, which are positive or zero, are summed instead. For $1,4,7$ the sum is $9+0+9=18\,\mathrm{min^2}$; for $4,4,4$ it is $0$. Denoting this sum by $D$, we define
$$
D=\sum_{i=1}^{n}(x_i-\bar x)^2,\qquad
v=\frac{D}{n},\qquad
s^2=\frac{D}{n-1}\quad(n>1).
$$

- The **descriptive variance** $v$ is the mean of the squared deviations; for $1,4,7$ it equals $\dfrac{18}{3}=6\,\mathrm{min^2}$. It is used when only the collected data are of interest.
- The **corrected sample variance** $s^2$, read "s squared", divides the same sum by $n-1$; for $1,4,7$ it equals $\dfrac{18}{2}=9\,\mathrm{min^2}$. It is used when the data are a sample (Chapter 1) and the spread of the whole population they come from is of interest.

The divisor $n-1$ arises because the population mean is unknown, so the deviations are computed from the sample mean $\bar x$. By the theorem on minimizing the sum of squared deviations, later in this chapter, the sum of the squared distances of the data from a number is smallest when that number is $\bar x$. Hence $D$ is less than or equal to the same sum computed from the population mean. If, for example, the population from which the times $1,4,7$ come had mean $5$ minutes, that sum would be $16+1+4=21\,\mathrm{min^2}$, whereas $D=18\,\mathrm{min^2}$. Dividing by $n-1$ instead of $n$ gives a larger value, which compensates for this difference; Chapter 9 proves that the compensation is exact on average over all possible samples.

If the data are those of all $N$ units of a finite population, the population variance is their descriptive variance, with divisor $N$.

The variance is measured in the square of the data's units, for example in square minutes. Its square root returns to the units of the data and is called the **standard deviation**. The square root of $v$ is the descriptive standard deviation, $s=\sqrt{s^2}$ is the sample standard deviation, and the square root of the population variance is the population standard deviation. For $1,4,7$ we get $s=\sqrt9=3\,\mathrm{min}$. The standard deviation returns in the confidence intervals and tests of Chapters 10 and 11.
:::

:::esempio{titolo="Two divisors for the same squared deviations"}
Three processing times are $2,4,6$ minutes. Their mean is $4\,\mathrm{min}$, so the deviations are $-2,0,2$ minutes and the sum of their squares is $8\,\mathrm{min^2}$. The two variances are
$$
v=\frac{8}{3}\,\mathrm{min^2},
\qquad
s^2=\frac{8}{2}\,\mathrm{min^2}=4\,\mathrm{min^2}.
$$
The standard deviations are $\sqrt v=\sqrt{\dfrac83}\approx1.63\,\mathrm{min}$ and $s=2\,\mathrm{min}$.
:::

:::osservazione
The data $2,2,2,5$ have mean $2.75$, as seen with the weighted mean. The deviation $-0.75$ occurs three times and the deviation $2.25$ once, so
$$
D=3\cdot(-0.75)^2+1\cdot2.25^2=1.6875+5.0625=6.75,
$$
which gives $v=\dfrac{6.75}{4}=1.6875$ and $s^2=\dfrac{6.75}{3}=2.25$.

In an absolute frequency table, the squared deviation of the value $a_j$ occurs $n_j$ times, so $D=\sum_j n_j(a_j-\bar x)^2$. With the relative frequencies $f_j=\dfrac{n_j}{n}$ this gives $v=\sum_j f_j(a_j-\bar x)^2$ directly. The divisor for $s^2$ is $n-1$, where $n$ is the number of observations and not the number of rows in the table; in the example there are two rows, four observations, and divisor $3$.
:::

## Computational identities and changes of scale

::::teorema{#trasformazioni titolo="Deviations, the variance identity, and transformations"}
For the data $1,4,7$ the mean of the squares is $\dfrac{1+16+49}{3}=22$ and the square of the mean is $16$; the difference $6$ is the descriptive variance found with the deviations. Multiplying the data by $2$ and adding $10$ gives $12,18,24$, with mean $18=10+2\cdot4$ and descriptive variance $\dfrac{36+0+36}{3}=24=2^2\cdot6$.

A transformation of the data of the form $y=a+bx$, with real numbers $a$ and $b$, is called an affine transformation or affine change. The number $a$ shifts the zero of the scale and the number $b$ changes the unit of measurement; the conversion from degrees Celsius to degrees Fahrenheit, for example, is $y=32+\dfrac95x$.

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
The identity involving squares gives $v$ from the mean and the mean of the squares alone, without computing the deviations one by one. The transformation rules give the measures of the converted data without rewriting the data.

:::dimostrazione
By the definition of the mean $\sum_i x_i=n\bar x$, so $\sum_i(x_i-\bar x)=n\bar x-n\bar x=0$. For the variance, expand the square $(x_i-\bar x)^2=x_i^2-2\bar xx_i+\bar x^2$, sum over $i$, and substitute $\sum_i x_i=n\bar x$ again:
$$
\begin{aligned}
D
&=\sum_i x_i^2-2\bar x\sum_i x_i+n\bar x^2\\[6pt]
&=\sum_i x_i^2-2\bar x\cdot n\bar x+n\bar x^2\\[6pt]
&=\sum_i x_i^2-n\bar x^2.
\end{aligned}
$$
Dividing by $n$ gives the formula for $v$. For the transformed observations $\bar y=\dfrac1n\sum_i(a+bx_i)=\dfrac{na+b\sum_i x_i}{n}=a+b\bar x$. It follows that $y_i-\bar y=b(x_i-\bar x)$, so each squared deviation is multiplied by $b^2$, and the same factor multiplies $D$, $v$, and $s^2$. Since $\sqrt{b^2}=|b|$, the standard deviation is multiplied by $|b|$.
:::
::::

:::esempio{titolo="Shifting the zero point and changing the units"}
Three temperatures have a mean of $20\,^\circ\mathrm{C}$ and a sample standard deviation of $5\,^\circ\mathrm{C}$. The conversion to Fahrenheit is $y=32+\dfrac{9}{5}x$. The new mean is $32+\dfrac95\cdot20=68\,^\circ\mathrm{F}$, and the new standard deviation is $\dfrac95\cdot5=9\,^\circ\mathrm{F}$. The additive constant $32$ enters the calculation of the mean. Only the factor $\dfrac{9}{5}$ affects the standard deviation, because each deviation is a difference between two temperatures, and in a difference the shift of the zero point cancels.
:::

:::osservazione
If $b>0$, the transformation $y=a+bx$ preserves the ordering of the observations, so each observation keeps its rank. The median and quantiles therefore follow the same transformation $a+bx$, and the difference $Q_3-Q_1$ between the third and first quartiles, called the interquartile range, is multiplied by $b$. If $b<0$, the ordering is reversed, and the observation of rank $n+1-k$ among the $x$ becomes the observation of rank $k$ among the $y$. A quantile is then found using $y_{(k)}=a+bx_{(n+1-k)}$. The median still transforms as $a+b\operatorname{Med}(x)$, because the two middle values switch places and their mean follows the same transformation.
:::

:::attenzione
With the upper-rank rule, the reflection $y=-x$ changes the interquartile range $Q_3-Q_1$ but leaves the range, the difference between the largest and smallest observations, unchanged. For the data $0,1,2,10$ the first and third quartiles have ranks $\lceil4\cdot0.25\rceil=1$ and $\lceil4\cdot0.75\rceil=3$, so they equal $0$ and $2$, and the interquartile range is $2$. After the reflection the ordered observations are $-10,-2,-1,0$, and the same ranks give the quartiles $-10$ and $-1$, with interquartile range $9$. The range is $10$ before and after.

The difference arises because ranks $1$ and $3$ are not symmetric in a list of four observations, since the rank symmetric to $1$ is $4$. Before the reflection the observation far from the others, $10$, has rank $4$ and lies outside both quartiles; after the reflection it becomes $-10$, has rank $1$, and coincides with the first quartile.
:::

:::osservazione
The groups $1,3$ and $7,9$ have means $2$ and $8$, and the mean of all four observations is $5$. The sums of squared deviations within the groups are $D_1=1+1=2$ and $D_2=1+1=2$. For the four observations the sum of squared deviations from $5$ is $16+4+4+16=40$, which also equals $2+2+2\cdot(2-5)^2+2\cdot(8-5)^2$.

In symbols, suppose two disjoint groups have sizes $n_1,n_2$, means $\bar x_1,\bar x_2$, and within-group sums of squared deviations $D_1,D_2$, and let $\bar x$ be the overall mean. The sum of squared deviations about $\bar x$ is
$$
D=D_1+D_2+n_1(\bar x_1-\bar x)^2+n_2(\bar x_2-\bar x)^2.
$$
To derive it, for an observation in the first group write $x_i-\bar x=(x_i-\bar x_1)+(\bar x_1-\bar x)$ and sum the squares over the group:
$$
\sum_{i\in\text{gr. 1}}(x_i-\bar x)^2=D_1+2(\bar x_1-\bar x)\sum_{i\in\text{gr. 1}}(x_i-\bar x_1)+n_1(\bar x_1-\bar x)^2=D_1+n_1(\bar x_1-\bar x)^2.
$$
The middle term is zero because the deviations from the group's own mean sum to zero. The same calculation holds for the second group, and adding the two results gives the formula. The overall spread therefore combines the spread within the groups and the distance between the group means and the overall mean.
:::

::::teorema{#centro-quadratico titolo="Minimizing the sum of squared deviations"}
For the data $0,1,5$, whose mean is $2$, the sum of the squared distances of the data from $2$ is $4+1+9=14$. From $1$, the median, the same sum is $1+0+16=17$.

Let $x_1,\ldots,x_n$ be real observations with $n\ge1$. Among all real numbers $c$, the sum $\sum_i(x_i-c)^2$ is minimized at $c=\bar x$. The mean is therefore the center of the data when distances are measured by their squares, whereas without squares the center is the median. The theorem explains the divisor $n-1$ of the corrected sample variance, and the same criterion constructs the regression line of Chapter 12.

::grafico{f="x^2+(x-1)^2+(x-5)^2" xmin=-0.8 xmax=5 ymin=-0.5 ymax=45 nomi="c,Q(c)" legenda=0 punti="2,14,pieno;1,17,pieno" segmenti="2,0,2,14;1,0,1,17" etichette="2.2,10,(2, 14);0.15,12.5,(1, 17)" titolo="Graph of $Q(c)=c^2+(c-1)^2+(c-5)^2$ for the observations $0,1,5$. The vertex of the parabola lies at the mean $c=2$, where its value is $D=14$. At the median $c=1$, its value is $17$."}

:::dimostrazione
Write $x_i-c=(x_i-\bar x)+(\bar x-c)$ and expand the square:
$$
\sum_i(x_i-c)^2=\sum_i(x_i-\bar x)^2+2(\bar x-c)\sum_i(x_i-\bar x)+n(\bar x-c)^2.
$$
The middle term is zero because $2(\bar x-c)$ does not depend on $i$ and $\sum_i(x_i-\bar x)=0$. This gives
$$
\sum_i(x_i-c)^2=D+n(\bar x-c)^2.
$$
The term added to $D$ is nonnegative and vanishes only for $c=\bar x$, which is therefore the minimizer. The formula also says how much the sum grows as the center moves away from the mean; for the data $0,1,5$ and the center $1$ it gives $14+3\cdot(2-1)^2=17$, the same value found by adding $1+0+16$.
:::
::::

## Absolute and relative measures of spread

:::definizione{#dispersione titolo="Range, interquartile range, and coefficient of variation"}
The waiting times $5,10,15,20,50$ minutes from the introduction span $50-5=45$ minutes. The first and third quartiles have ranks $\lceil5\cdot0.25\rceil=2$ and $\lceil5\cdot0.75\rceil=4$, so they equal $10$ and $20$ minutes and are $10$ minutes apart. If the longest wait were $100$ minutes, the first distance would become $95$ minutes and the second would stay $10$.

The **range** is the difference between the largest and the smallest observation. The **interquartile range** is the difference $\operatorname{IQR}=Q_3-Q_1$. About the middle half of the data lies between $Q_1$ and $Q_3$, so the interquartile range measures the spread of the central part. Both measures have the same units as the data. The range depends only on the two extreme observations, whereas the interquartile range depends on two observations of intermediate rank and does not change if only the value of the maximum or the minimum changes.

A standard deviation of $8\,\mathrm{mL}$ is $4\,\%$ of a mean capacity of $200\,\mathrm{mL}$ and $0.4\,\%$ of a mean capacity of $2000\,\mathrm{mL}$. The **coefficient of variation** is the standard deviation divided by the mean,
$$
\operatorname{CV}=\frac{s}{\bar x},
$$
where $s$ is the sample standard deviation; for a whole population the population standard deviation is used. The coefficient is dimensionless, is also written as a percentage, and compares the spread of groups with different means. It is computed for measurements on a ratio scale (Chapter 1), whose zero indicates the absence of the quantity, and with a positive mean; with a conventional zero the coefficient changes when the zero is shifted, as the temperature example below shows.
:::

:::esempio{titolo="Comparing processes with different means"}
Two production lines make containers with mean capacities of $200\,\mathrm{mL}$ and $500\,\mathrm{mL}$, respectively. Their sample standard deviations are $8\,\mathrm{mL}$ and $15\,\mathrm{mL}$. Their coefficients of variation are
$$
\operatorname{CV}_1=\frac{8}{200}=0.04,\qquad
\operatorname{CV}_2=\frac{15}{500}=0.03,
$$
that is, $4\,\%$ and $3\,\%$. The second line has the larger standard deviation in milliliters, but the first has the greater spread relative to its own mean. Converting the capacities to liters divides the numerator and denominator of each ratio by $1000$, so the coefficients remain unchanged.
:::

:::attenzione
The coefficient of variation depends on the position of the zero of the scale. Temperatures with mean $20\,^\circ\mathrm{C}$ and standard deviation $5\,^\circ\mathrm{C}$ give the ratio $\dfrac{5}{20}=0.25$. In kelvins the same measurements have mean $293.15\,\mathrm{K}$ and standard deviation $5\,\mathrm{K}$, because converting to kelvins adds $273.15$ to every observation and leaves the deviations unchanged. The ratio therefore becomes $\dfrac{5}{293.15}\approx0.017$, even though the measured temperatures are the same.

A mean close to zero also makes the coefficient unstable. With $s=1$ and mean $0.1$ the coefficient is $10$; if the mean becomes $0.2$, the coefficient drops to $5$.
:::

## Box plots and observations beyond the fences

:::definizione{#boxplot titolo="Box plots and Tukey's fences"}
A **box plot** summarizes a list of data along the value axis with these elements.

- A box that extends from the first to the third quartile, with a line inside at the median.
- Two whiskers, that is, two segments that start from the sides of the box and end at two observed values.
- An individual point for each observation far from the others.

The length of the whiskers is determined by two thresholds, called fences, computed with the rule proposed by the statistician John Tukey:
$$
L=Q_1-1.5\operatorname{IQR},\qquad
U=Q_3+1.5\operatorname{IQR}.
$$
The fences are computational thresholds and are not drawn. The lower whisker extends to the smallest observation greater than or equal to $L$, and the upper whisker to the largest observation less than or equal to $U$; an observation equal to a fence is therefore inside. Observations strictly outside the interval $[L,U]$ are drawn as individual points and are called **outliers** according to Tukey's rule.

Several box plots drawn on the same scale compare several groups.
:::

:::esempio{titolo="From the quartiles to the whiskers"}
For the observations $2,3,4,5,6,7,8,18$ we have $n=8$. The quartiles have ranks $\lceil8\cdot0.25\rceil=2$ and $\lceil8\cdot0.75\rceil=6$, so $Q_1=3$ and $Q_3=7$, and the median is $\dfrac{5+6}{2}=5.5$. Since $\operatorname{IQR}=4$ and $1.5\cdot4=6$, the fences are $L=3-6=-3$ and $U=7+6=13$. The observation $18$ exceeds the upper fence, so it is an outlier. The whiskers therefore end at $2$ and $8$, the smallest and largest observations within the fences. The graph shows the box from $3$ to $7$, the median $5.5$, the whiskers reaching $2$ and $8$, and the individual point $18$.

::grafico{xmin=0 xmax=20 ymin=-0.6 ymax=1.7 nomi="x,y" poligoni="3,0.65 7,0.65 7,1.35 3,1.35" linee="3,0.65 7,0.65 7,1.35 3,1.35 3,0.65;2,1 3,1;7,1 8,1;2,0.86 2,1.14;8,0.86 8,1.14;5.5,0.65 5.5,1.35" punti="18,1,pieno" titolo="Observed values on the x-axis."}
:::

:::osservazione
The length of the box is the interquartile range, and the position of the median within the box shows how the middle half of the data is arranged; in the previous example the median $5.5$ is $2.5$ from $Q_1$ and $1.5$ from $Q_3$.

A box plot keeps only a few numbers from the list, so different lists give the same plot. The lists $1,2,3,4,5$ and $1,2,3,3,3,4,5$ both have $Q_1=2$, median $3$, $Q_3=4$, and whiskers reaching $1$ and $5$; the plot therefore does not show how many observations there are.

The outlier $18$ in the previous example is either a recording error or a genuine but rare value, and telling the two cases apart requires going back to how the observation was collected.
:::

:::esempio{titolo="Comparing two box plots"}
Two departments produce batches measured in the same units. The first department has $Q_1=12$, median $14$, and $Q_3=18$. The second has $Q_1=16$, median $18$, and $Q_3=20$. The median of the second department equals the third quartile of the first. Hence at least half the batches of the second department measure at least $18$, while in the first department at least three quarters of the batches measure at most $18$. The measurements of the second department are therefore shifted toward higher values.

The interquartile range is $20-16=4$ in the second department and $18-12=6$ in the first, so the middle half of the measurements is less spread out in the second department. Comparing the ranges also requires the smallest and largest observation of each department, including any outliers.

::grafico{xmin=0 xmax=23 ymin=-0.3 ymax=3.3 nomi="x,y" poligoni="12,0.6 18,0.6 18,1.4 12,1.4;16,1.9 20,1.9 20,2.7 16,2.7" linee="12,0.6 18,0.6 18,1.4 12,1.4 12,0.6;14,0.6 14,1.4;16,1.9 20,1.9 20,2.7 16,2.7 16,1.9;18,1.9 18,2.7" segmenti="18,1.4,18,1.9" etichette="2,1,dept. 1;2,2.3,dept. 2" titolo="Boxes for the two departments on a common scale. The whiskers are omitted because the extremes are unknown. The dashed line connects the upper quartile of the first department to the median of the second, both equal to $18$."}
:::

## Standardization and the shape of a distribution

:::definizione{#standardizzazione titolo="Standardized score"}
In a group of measurements with mean $70$ and standard deviation $6$, the measurement $58$ has deviation $58-70=-12$ from the mean. Since $\dfrac{-12}{6}=-2$, the measurement $58$ lies two standard deviations below the mean, and the number $-2$ is its standardized score.

In symbols, for a data set with $n>1$ observations and sample standard deviation $s>0$, the **standardized score** of $x_i$ is
$$
z_i=\frac{x_i-\bar x}{s}.
$$
The sign of $z_i$ indicates on which side of the mean the observation lies, and the absolute value $|z_i|$ gives how many standard deviations separate it from the mean. The score is dimensionless. It is used to compare data measured on different scales, as in the next example, and in Chapter 6 to compute probabilities of the normal distribution with a single table.

The inverse formula $x_i=\bar x+s z_i$ converts a standardized score back to the scale of the data; with mean $70$ and standard deviation $6$, the score $z=1$ corresponds to the value $76$. If all observations are equal, $s=0$ and the division is undefined.
:::

:::esempio{titolo="Comparing two measurements"}
A test has mean $64$ and standard deviation $8$. A score of $76$ is $\dfrac{76-64}{8}=1.5$ standard deviations above the mean. On a second test with mean $72$ and standard deviation $4$, a score of $78$ has the same standardized value, because $\dfrac{78-72}{4}=1.5$.

The proportion of lower scores, however, also depends on the shape of the score distribution, that is, on how the scores are arranged around the mean. For example, the lists $-1,-1,2$ and $-2,1,1$ both have mean $0$ and sample standard deviation $\sqrt3$, so in both the value $0$ has standardized score $0$. In the first list the value $0$ has two of the three observations below it, in the second only one.
:::

:::osservazione
In the data $1,2,2,3,22$, four observations lie between $1$ and $3$, while the observation $22$ lies much farther to the right. The arrangement of the data along the axis, that is, where they cluster, whether there are gaps between groups of values, and in which direction they stretch out, is called the **shape of the distribution**. A distribution has a **right tail** when some observations lie much farther from the center toward high values than the others lie toward low values; it is also said to be skewed to the right. In these data the observation $22$ forms a right tail and raises the mean to $6$, while the median stays at $2$.

Standardization is the affine change $z=-\dfrac{\bar x}{s}+\dfrac1s\,x$, with positive coefficient $b=\dfrac{1}{s}$. Hence, by the theorem on transformations, it preserves the ordering of the data and transforms the mean to $0$ and the sample standard deviation to $1$. It shifts the axis and multiplies all distances between the data by the same number $\dfrac1s$, so the shape stays the same; in particular the tail remains on the right and the gaps between groups of values remain.
:::

:::osservazione
The two sets $2,3,4,5,6$ and $2,3,4,5,26$ differ only in their largest observation. The median and quartiles are the observations of ranks $3$, $2$, and $4$, so they agree in the two sets and equal $4$, $3$, and $5$. The means, however, are $4$ and $8$, and the sample standard deviations are about $1.58$ and $10.12$.

The median and the interquartile range depend only on the observations with certain ranks, so they do not change as long as the largest observation remains the largest. The mean and the standard deviation use the values of all the observations, so they are affected by the observation $26$, and the difference between mean and median shows how much that observation weighs.

::grafico{xmin=0 xmax=28 ymin=-0.2 ymax=3 nomi="x,y" punti="2,2;3,2;4,2;5,2;6,2;2,1;3,1;4,1;5,1;26,1" linee="4,1.7 4,2.3;8,0.7 8,1.3" segmenti="4,0.75,4,1.25" etichette="3.4,2.55,mean and median 4;8.4,1.5,mean 8;3.4,0.4,median 4" titolo="The data sets $2,3,4,5,6$ (top) and $2,3,4,5,26$ (bottom). The solid lines mark the means $4$ and $8$. The dashed line marks the median $4$ of the second set."}
:::
