---
titolo: "Descriptive statistics"
sommario: "From frequencies to the shape of a distribution. Weighted mean, median and quartiles, deviations, descriptive variance, and standard deviation."
---

## What the observations describe

:::definizione{#dati titolo="Unit, variable, and reference group"}
A **population** contains every unit to which a survey refers. A **sample** is part of the population. The **variable** is the property observed for each unit. It is categorical when it gives a category, such as the bus route used. It is discrete quantitative when the values are separated, as with the number of stops. It is continuous quantitative when the measurement can take any value within an interval, as with duration.

We use $N$ for the number of observations we are describing. If we measure the same bus’s journey time five times, the five durations are five observations from a single vehicle. To compare two routes’ punctuality, specify the period, the unit of measurement, the scheduled time, and how services were selected.
:::

:::osservazione
A mean delay for eight o’clock in the morning describes the services observed at that time. Drawing conclusions about all services throughout the day requires collecting data at other times as well. More measurements at eight provide more detail about that time.
:::

## Frequencies and groups of different sizes

:::definizione{#frequenze titolo="Counts and proportions"}
For $N>0$, a value or category with $n_i$ observations has relative frequency $f_i=\dfrac{n_i}{N}$ and represents $100f_i\%$. If categories are disjoint and cover all observations, the absolute frequencies sum to $N$ and the relative frequencies to $1$. For ordered values, the cumulative frequency up to a threshold adds the frequencies of the values that are less than or equal to it.
:::

:::esempio{titolo="Equal counts, different proportions"}
In two disjoint lab sessions, $8$ tests are repeated out of $20$ in the first session and $8$ out of $40$ in the second. Equal counts give different proportions, $\dfrac8{20}=40\%$ and $\dfrac8{40}=20\%$. If the lab needs to set up stations for repeats, it needs eight in both sessions. To compare how common it is to repeat the test, compare the two proportions.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=50 nomi="s,p" poligoni="0.73,0 1.27,0 1.27,40 0.73,40;1.73,0 2.27,0 2.27,20 1.73,20" etichette="0.81,43,40%;1.81,23,20%" titolo="For session $s$, the height gives the percentage $p$ of repeated tests out of that session’s total"}

The proportion for the sessions combined is $\dfrac{8+8}{20+40}=\dfrac4{15}$. Both numerators contribute eight. In the denominator the second session has twice the weight, so the combined proportion is closer to $20\%$ than to $40\%$.
:::

## Graphs, scales, and histograms

:::osservazione{#grafici titolo="What height and area represent"}
A bar chart assigns a separate bar to each value or category. Its height shows the count or proportion named on the vertical axis. In a pie chart, proportion $f_i$ takes up an angle of $360^\circ f_i$. These charts split a total when the categories are disjoint and cover all responses.
:::

:::esempio{titolo="Distinguishing the difference from the visible ratio"}
Two thermometers in a laboratory test read $21$ and $24$ degrees Celsius. The difference is $3$ degrees in both graphs. With a baseline of $20$ the visible portions are $1$ and $4$ degrees high. The second visible portion is four times taller because the degrees from $0$ to $20$ are left out in both cases. Comparing the Celsius readings requires stating the scale and baseline.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=27 nomi="s,T" poligoni="0.72,0 1.28,0 1.28,21 0.72,21;1.72,0 2.28,0 2.28,24 1.72,24" etichette="0.91,22.1,21;1.91,25.1,24" titolo="From the baseline of 0, the readings $T$ are in degrees Celsius for the two instruments $s$"}

::grafico{xmin=-0.35 xmax=3.3 ymin=20 ymax=25.5 nomi="s,T" poligoni="0.72,20 1.28,20 1.28,21 0.72,21;1.72,20 2.28,20 2.28,24 1.72,24" etichette="0.91,21.38,21;1.91,24.38,24" titolo="The baseline at 20 visually enlarges the same difference"}
:::

:::definizione{#istogrammi titolo="Recovering the count from area"}
When measurements are grouped in intervals, a rectangle in the **histogram** has width $h_i$. If the class has $n_i$ values, choose height $d_i=\dfrac{n_i}{h_i}$ so the area is $n_i$. Relative density $\dfrac{f_i}{h_i}$ gives area $f_i$. The areas sum to $N$ or $1$, respectively.
:::

:::esempio{titolo="Equal heights, different counts"}
In one survey the classes $[0,2)$, $[2,5)$, and $[5,9)$ minutes contain $6$, $9$, and $8$ observations. The absolute densities are $\dfrac{6}{2}=3$, $\dfrac{9}{3}=3$, and $\dfrac{8}{4}=2$ observations per minute. The first two rectangles reach height $3$, but the second has larger area because it is wider. A duration of exactly five minutes goes in the third class because of the square bracket on the left.

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=4.35 nomi="t,d" poligoni="0,0 2,0 2,3 0,3;2,0 5,0 5,3 2,3;5,0 9,0 9,2 5,2" linee="0,3 2,3 2,0;2,3 5,3 5,0;5,2 9,2 9,0" etichette="0.68,1.25,6;3.25,1.25,9;6.75,0.89,8" titolo="Density $d$ is in observations per minute. The labels inside the rectangles give their areas."}
:::

## Mean and signed deviations

::::teorema{#media titolo="Frequencies as weights and the sum of deviations"}
The **arithmetic mean** of $N>0$ measurements is their sum divided by $N$. If a distinct value $v_i$ occurs $n_i$ times, its contribution to the sum is $n_i v_i$. A **deviation** from the mean is the signed difference $x_j-\bar x$.

$$
\begin{aligned}
\bar x&=\frac{\sum_{j=1}^N x_j}{N}
=\frac{\sum_i n_i v_i}{\sum_i n_i},\\[5pt]
\sum_{j=1}^N (x_j-\bar x)&=0.
\end{aligned}
$$

:::dimostrazione
In the first sum, the $n_i$ copies of $v_i$ can be grouped without changing either the total or the number of terms. For the second equality, subtract $\bar x$ once for each observation. This gives $\sum_jx_j-N\bar x$, which is zero by the definition of the mean.
:::
::::

:::esempio{titolo="A repeated value carries more weight"}
The three values are $0$, $3$, and $6$, with frequencies $1$, $2$, and $3$. The mean is $\dfrac{0\cdot1+3\cdot2+6\cdot3}{6}=4$. The signed deviations are $-4$, $-1$ twice, and $2$ three times. The weight of observations on the right balances that on the left, since $3\cdot2=4+2\cdot1$.

::grafico{xmin=-0.65 xmax=7.3 ymin=-0.35 ymax=4.25 nomi="x," punti="0,1;3,1;3,2;6,1;6,2;6,3" segmenti="4,0,4,3.6" etichette="3.53,3.94,4" titolo="Each point is one observation. The dashed line marks the mean."}
:::

## Median and quartiles

:::definizione{#mediana titolo="Reading the central positions"}
Sort the data from smallest to largest, including repeats. If $N=2k+1$, the **median** is the observation at position $k+1$. If $N=2k>0$, it is the mean of the observations at positions $k$ and $k+1$. In a table, find a rank at the first cumulative count that reaches or exceeds it.
:::

:::definizione{#quartili titolo="Rank convention for the first and third quartiles"}
For $Q_1$, multiply $N$ by $\tfrac14$. For $Q_3$, multiply by $\tfrac34$. Round each product up to a whole number if necessary and take the observation at that rank. This is the nearest-rank convention, one of several possible conventions. Use the median rule for $Q_2$. The difference $Q_3-Q_1$ is the **interquartile range**.
:::

:::esempio{titolo="Quartiles and median in a list with repeats"}
The sorted values are $1,2,2,3,5,7,7,11$. Here $N=8$. Read the first quartile at position $\dfrac{8}{4}=2$, giving $Q_1=2$. The third comes from position $\dfrac{3\cdot8}{4}=6$, giving $Q_3=7$. The two central observations are fourth and fifth, so $Q_2=\dfrac{3+5}{2}=4$. The interquartile range is $7-2=5$.

::grafico{xmin=-0.3 xmax=9.2 ymin=-0.4 ymax=12.2 nomi="k,xₖ" punti="1,1;2,2;3,2;4,3;5,5;6,7;7,7;8,11" segmenti="2,0,2,2;6,0,6,7" titolo="Quartiles $Q_1$ and $Q_3$ are at ranks $2$ and $6$. The median uses ranks $4$ and $5$."}

Here only one observation is strictly below $Q_1$, while three are at or below it. Interpreting a quartile requires distinguishing values equal to the threshold from values strictly below it. Replacing $11$ with $20$ moves the maximum and increases the range. The same observations still occupy the quartile ranks and the two central positions.
:::

:::esempio{titolo="Same extremes, different central spread"}
The lists $1,3,4,5,6,8$ and $1,2,3,6,7,8$ both have range $8-1=7$ and median $\dfrac{4+5}{2}=\dfrac{3+6}{2}=4.5$. The quartile ranks are second and fifth. The interquartile range of the first list is $6-3=3$, and that of the second is $7-2=5$. In the diagram each box runs from $Q_1$ to $Q_3$, the inner line marks the median, and the segments reach both extremes.

::grafico{xmin=-0.4 xmax=9.5 ymin=-0.35 ymax=3.05 nomi="x," poligoni="3,1.78 6,1.78 6,2.22 3,2.22;2,0.78 7,0.78 7,1.22 2,1.22" linee="1,2 3,2;6,2 8,2;1,1 2,1;7,1 8,1;1,1.81 1,2.19;8,1.81 8,2.19;1,0.81 1,1.19;8,0.81 8,1.19;4.5,0.78 4.5,1.22;4.5,1.78 4.5,2.22" etichette="0.38,2.15,A;0.38,1.15,B" titolo="The boxes have different widths even though they share a median and extremes"}
:::

:::esempio{titolo="Finding positions without expanding the data"}
This table contains nine observations. The three ranks are $3$, $5$, and $7$. The cumulative count reaches $5$ at value $2$, which takes positions two through five. Hence $Q_1=Q_2=2$. Rank $7$ lies in the block of observations equal to $8$, which begins right after cumulative count $6$. The third quartile is therefore $8$.

| Value | Frequency | Cumulative count |
|---|---:|---:|
| $1$ | $1$ | $1$ |
| $2$ | $4$ | $5$ |
| $5$ | $1$ | $6$ |
| $8$ | $3$ | $9$ |
:::

## Mode and what it represents

:::definizione{#moda titolo="The most frequent value or category"}
A **mode** is a value or category of maximum frequency. Several values can share the maximum. For bus routes $A$, $B$, and $C$, with $5$, $7$, and $7$ uses, the modes are $B$ and $C$. The number $7$ is the frequency of each. Modes are also defined for categories without an order.
:::

:::osservazione
When measurements have been grouped into classes, we can name the class with the largest count. With unequal widths, the tallest rectangle represents the greatest density and can belong to a class with fewer observations. Without the individual values we cannot tell which exact measurement occurred most often.
:::

## Descriptive variance

::::teorema{#varianza titolo="Squared deviations and frequencies"}
The **range** is the maximum minus the minimum. **Descriptive variance** $\sigma^2$ is the mean of the squared deviations, for $N>0$. Divide by $N$, the number of observations being described. When equal values are grouped, each square can be weighted by its frequency.

$$
\begin{aligned}
\sigma^2&=\frac{1}{N}\sum_{j=1}^N(x_j-\bar x)^2\\[5pt]
&=\frac{\sum_i n_i(v_i-\bar x)^2}{\sum_i n_i}.
\end{aligned}
$$

:::dimostrazione
Every occurrence of $v_i$ contributes the same square, so the $n_i$ occurrences contribute $n_i(v_i-\bar x)^2$. Squaring makes all contributions nonnegative. Their sum is zero only when every deviation is zero, meaning every observation equals the mean.
:::

The divisor $N$ also applies if the data being described come from a sample. Dividing by $N-1$ belongs to a different problem, estimating the variance of a population from sample data. Exercises in this chapter ask for descriptive variance.
::::

:::esempio{titolo="Same mean and range, different variances"}
The data $A=(0,0,4,4)$ and $B=(0,2,2,4)$ both have mean $2$ and range $4$. In $A$ every value is two units from the mean. In $B$ two values equal the mean and only two are at the extremes. Their variances are $\sigma_A^2=\dfrac{16}{4}=4$ and $\sigma_B^2=\dfrac{8}{4}=2$. Two distributions with the same extremes can have different frequencies away from the ends.

::grafico{xmin=-0.7 xmax=5.2 ymin=-0.25 ymax=5.25 nomi="x," punti="0,3;0,4;4,3;4,4;0,0.9;2,0.9;2,1.9;4,0.9" segmenti="2,0,2,4.65" etichette="0.5,4.2,A;0.5,1.85,B;2.25,4.62,2" titolo="Both groups share a mean. In B two observations have zero deviation."}
:::

::::teorema{#secondo-momento titolo="Checking with the mean of the squares"}
Expanding the squares also gives

$$
\sigma^2=\frac{\sum_i n_i v_i^2}{N}-\bar x^2.
$$

:::dimostrazione
Expanding $(v_i-\bar x)^2$ produces the term $-2v_i\bar x$. Weighting it by $n_i$ and summing gives $-2N\bar x^2$, because $\sum_i n_i v_i=N\bar x$. The final term contributes $N\bar x^2$ because the frequencies sum to $N$. Dividing by $N$ leaves the stated difference.
:::
::::

:::esempio{titolo="Checking variance with a table"}
The values $0$, $2$, and $8$ have frequencies $1$, $2$, and $1$. The mean is $\dfrac{0+2\cdot2+8}{4}=3$. With weighted squared deviations, the quantities to add are $9$, $2$, and $25$. The variance is $\dfrac{36}{4}=9$. The mean of the squares of the values is $\dfrac{0+2\cdot4+64}{4}=18$. Subtracting the square of the mean, $3^2=9$, gives the same variance.

| Value $v_i$ | Count $n_i$ | $n_i(v_i-3)^2$ |
|---|---:|---:|
| $0$ | $1$ | $9$ |
| $2$ | $2$ | $2$ |
| $8$ | $1$ | $25$ |
:::

:::osservazione
When every frequency is multiplied by the same positive number, the relative frequencies stay the same. In the mean and variance, doubling each count, for example, doubles both numerators and denominators. Two groups can therefore have different sizes and equal summaries if they have the same proportions of each value. To decide which group is more spread out, compare how these proportions are distributed, since the number of observations alone does not determine spread.
:::

## Standard deviation and changes of scale

::::teorema{#deviazione titolo="Units and transformations"}
The **standard deviation** is $\sigma=\sqrt{\sigma^2}$ and is expressed in the original unit. Variance is expressed in its square. Replacing every $x_j$ with $y_j=ax_j+b$ changes the mean to $a\bar x+b$.

$$
\begin{aligned}
y_j-\bar y&=a(x_j-\bar x),\\[5pt]
\sigma_y^2&=a^2\sigma_x^2,\qquad
\sigma_y=|a|\sigma_x.
\end{aligned}
$$

:::dimostrazione
The constant $b$ occurs in both the transformed value and its mean, so it cancels in the deviation. The factor $a$ multiplies the deviation and its square is multiplied by $a^2$. The mean of the squares gets the same factor. Taking a square root gives $\sqrt{a^2}=|a|$.
:::
::::

:::esempio{titolo="Correcting zero or changing unit"}
The lengths $2,4,6$ centimetres have mean $4$ and variance $\dfrac{8}{3}$ square centimetres. In millimetres the mean is $40$ and the variance is $\dfrac{800}{3}$ square millimetres. Changing units multiplies the distances by ten. If a calibration then adds $3$ millimetres to every measurement, the new mean is $43$ and the distances from the centre are unchanged.

::grafico{xmin=-2 xmax=70 ymin=-0.3 ymax=2.8 nomi="x," punti="20,1;40,1;60,1;23,2;43,2;63,2" linee="20,1 60,1;23,2 63,2" etichette="5,1.17,A;5,2.17,B" titolo="Measurements A in millimetres and measurements B adjusted by 3 millimetres have the same deviations from their respective means"}
:::

:::attenzione
A change of scale applies to every observation. For example, the variance of $4,4,4,4$ is zero. Doubling only the last observation gives new mean $5$ and variance $\dfrac{1+1+1+9}{4}=3$. Doubling all observations instead gives four $8$s and variance stays zero. Applying the square-factor rule requires knowing which observations were changed.
:::

## What grouping values loses

:::osservazione{#riepilogo titolo="Estimating from class midpoints"}
The lists $1,2,6,7$ and $3,3,5,5$ both give two observations in $[0,4)$ and two in $[4,8)$. The same grouped table would give the same histogram. Their means are indeed both $4$, but their variances are $\dfrac{26}{4}$ and $1$. The squared deviations depend on the values within the classes.

::grafico{xmin=-0.7 xmax=9.0 ymin=-0.35 ymax=5.1 nomi="x," punti="1,3;2,3;6,3;7,3;3,0.9;3,1.9;5,0.9;5,1.9" segmenti="4,0,4,4.7" etichette="0.45,3.5,A;0.45,1.6,B;4.24,4.45,4" titolo="Both distributions have two observations per class, with different distances from the centre"}

When only the table is available, the class midpoints $2$ and $6$ can represent the class values. This gives the statistics of $2,2,6,6$, with mean $4$ and variance $4$. It provides an approximation because the table cannot recover the individual data. The mean could also differ without changing the histogram. For instance, $3,3,7,7$ again puts two observations in each class and has mean $5$. Before choosing a statistic, check whether the available data are individual observations, counts of each distinct value, or counts by class interval.
:::
