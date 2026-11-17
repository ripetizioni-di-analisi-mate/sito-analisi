---
titolo: Descriptive statistics
sommario: Variables and frequencies, tables and graphs, arithmetic and weighted means, median, mode, spread, variance, and standard deviation.
---

## Data and variables

:::definizione{#dati titolo="What is observed"}
A **statistical population** is the set of units under consideration. A **variable** is the characteristic observed for each unit. It may be qualitative, such as a method of getting to school, or quantitative, such as the journey time.

A quantitative variable is discrete if it takes separate values, such as a sibling count. It is continuous if it can take the values in an interval, like a length. Measurement precision does not change the continuous nature of the quantity.

A sample is a subset of the population. To describe collected data clearly, give the group observed, the meaning of the values, and the units of measurement.
:::

## Frequency tables

:::definizione{#frequenze titolo="Counts, ratios, and percentages"}
The **absolute frequency** $n_i$ is the number of observations with a given value. If the total is $N>0$, the relative frequency is $f_i=\dfrac{n_i}{N}$ and the percentage frequency is $100f_i\%$.

Absolute frequencies sum to $N$, relative frequencies to $1$, and percentage frequencies to $100\%$. For example, if eight out of twenty students take the bus, the relative frequency is $0.4$ and the percentage is $40\%$.

Cumulative frequencies add the frequencies up to and including a specified value. They require a meaningful order and help locate the median.
:::

## Graphs

:::osservazione{#grafici titolo="Bar charts, pie charts, and histograms"}
A bar chart compares categories or discrete values. Each bar height gives the frequency, and the axis should identify it as absolute or relative.

In a pie chart, a category with relative frequency $f$ occupies an angle of $360^\circ f$. A frequency of $25\%$ occupies $90^\circ$.

A histogram displays data grouped into intervals. When the classes have different widths, the frequency is proportional to the bar area. The height is the density, meaning the frequency divided by the interval width.

A vertical axis starting close to the bar heights can make a small difference look large. Read the scale, labels, and units when interpreting the graph.

::grafico{poligoni="0.7,0 1.3,0 1.3,2 0.7,2;1.7,0 2.3,0 2.3,5 1.7,5;2.7,0 3.3,0 3.3,3 2.7,3" xmin=0 xmax=4 ymin=0 ymax=6 nomi="x,n" titolo="In the bar chart, values $1$, $2$, and $3$ have frequencies $2$, $5$, and $3$"}
:::

:::esempio{titolo="Histogram with unequal class widths"}
Of $20$ journeys, $8$ last from $0$ to under $10$ minutes and $12$ last from $10$ to under $30$ minutes. The class widths are therefore $10$ and $20$ minutes.

$$
\begin{aligned}
d_1&=\frac8{10}=0.8,\\
d_2&=\frac{12}{20}=0.6.
\end{aligned}
$$

The second bar is lower but has a greater area because it is twice as wide. The frequencies come from the areas $0.8\cdot10=8$ and $0.6\cdot20=12$. The height measures density in observations per minute.

::grafico{poligoni="0,0 10,0 10,0.8 0,0.8;10,0 30,0 30,0.6 10,0.6" xmin=-2 xmax=32 ymin=0 ymax=1 nomi="t,d" etichette="4,0.88,0.8;20,0.69,0.6" titolo="The two bar areas are 8 and 12"}
:::

## The mean

:::definizione{#media titolo="Arithmetic and weighted means"}
The **arithmetic mean** of $N>0$ values is
$$
\bar x=\frac{x_1+\cdots+x_N}{N}.
$$
For distinct values $v_i$ with frequencies $n_i$, use the weighted mean
$$
\bar x=\frac{\sum_i n_iv_i}{\sum_i n_i}.
$$
The mean of $4,6,8$ is $6$. If $4$ occurs once and $8$ occurs three times, the mean is $\dfrac{4+24}{4}=7$.

The deviations from the mean sum to zero because $\sum_i(x_i-\bar x)=\sum_i x_i-N\bar x=0$. Extreme values enter the sum directly and affect the mean.
:::

:::esempio{titolo="Finding the mean of one group"}
Two separate groups contain $8$ and $12$ students. The mean travel time to school in the first group is $12$ minutes, and the overall mean is $15$ minutes. Let $m$ be the mean of the second group.

$$
\begin{aligned}
8\cdot12+12m&=20\cdot15,\\[6pt]
12m&=300-96=204,\\[6pt]
m&=17.
\end{aligned}
$$

The second group has a mean of $17$ minutes. The overall mean of $15$ minutes is closer to $17$ than to $12$ because the second group has more students.
:::

## The median

:::definizione{#mediana titolo="The middle position"}
To find the **median**, first sort the data. With an odd number of observations, it is the middle value. With an even number of numerical observations, it is the average of the two middle values.

The median of $2,3,7,9,12$ is $7$. For $2,3,7,9$, it is $\dfrac{3+7}{2}=5$. Thus a median can fall between two observed values.

The median depends on position, whereas the mean uses every value. In $1,2,3,4,100$, the median is $3$ and the mean is $22$. The extreme value has a large effect on the mean while the middle value stays the same.
:::

:::esempio{titolo="Finding the median from cumulative counts"}
To locate the middle observations from a table, add the absolute frequencies in order of their values.

| Value | $2$ | $4$ | $7$ | $9$ |
| --- | --- | --- | --- | --- |
| Absolute frequency | $2$ | $3$ | $1$ | $4$ |
| Cumulative frequency | $2$ | $5$ | $6$ | $10$ |

The total is $10$, so use the fifth and sixth observations. The cumulative count is $5$ at $4$, which occupies positions up to the fifth. The next position corresponds to $7$, where the cumulative count reaches $6$. Thus the median is $\dfrac{4+7}{2}=5.5$.
:::

## Mode and choice of measure

:::definizione{#moda titolo="The most frequent value"}
The **mode** is the value or category with the greatest frequency. It may be unique, or several values may share the highest frequency.

The mode of $2,2,3,4,4,4$ is $4$. In $1,1,3,3,5$, the values $1$ and $3$ both have the greatest frequency. The mode can also be used for qualitative variables without an inherent order.

The mean, median, and mode answer different questions. When numerical data contain an extreme value, the median describes the central position, which depends on the order of the data. Interpret each measure alongside the whole distribution.
:::

## Measures of spread

:::definizione{#varianza titolo="Deviations and descriptive variance"}
The **range** is the maximum minus the minimum. For $3,5,9$, it is $6$. It uses only the two extremes and gives no information about where the intermediate values lie.

The **descriptive variance** of $N>0$ values is the mean of the squared deviations from the mean.
$$
\sigma^2=\frac1N\sum_{i=1}^N(x_i-\bar x)^2.
$$
For $2,4,6$, the mean is $4$, the deviations are $-2,0,2$, and the variance is $\dfrac83$.

The variance is nonnegative. It is zero only when all values are equal, because a sum of squares vanishes only when every square vanishes. The divisor here is $N$ because the aim is to describe the observed data. The sample estimate with divisor $N-1$ serves a different purpose.
:::

:::esempio{titolo="Two groups with the same mean"}
The values $0,3,6$ have mean $3$, as do the values $2,3,4$. The deviations are $-3,0,3$ in the first group and $-1,0,1$ in the second.

$$
\begin{aligned}
\sigma_A^2&=\frac{9+0+9}{3}=6,\\
\sigma_B^2&=\frac{1+0+1}{3}=\frac23.
\end{aligned}
$$

The first group has greater variance because its outer values lie farther from the mean. Two groups can therefore have the same mean and different spreads.
:::

## Standard deviation and transformations

:::definizione{#deviazione titolo="Spread in the original units"}
The **standard deviation** is $\sigma=\sqrt{\sigma^2}$. It has the same units as the data, whereas the variance has squared units.

For $1,5$, the mean is $3$, the variance is $4$, and the standard deviation is $2$. Adding the same number to every value changes the mean and leaves the deviations and spread unchanged.

Multiplying every value by $k$ multiplies the mean by $k$, the variance by $k^2$, and the standard deviation by $|k|$. These rules help check unit conversions and numerical results.
:::
