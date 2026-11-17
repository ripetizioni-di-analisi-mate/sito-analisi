---
titolo: Data and descriptive statistics
sommario: Variables, frequencies, graphs, mean, median, mode, and interpreting data.
---

## Population, sample, and variables

:::definizione{#dati titolo="What is observed"}
The **statistical population** consists of the units on which a variable is to be studied. A **sample** is a portion of that population that is actually observed. The variable is the property recorded, and its possible outcomes are the values or categories it can take.

The means of transport used to get to school is a nominal categorical variable. Satisfaction measured as low, medium, or high is ordinal categorical. The number of siblings is a discrete quantitative variable because its values can only be nonnegative integers. Height is a continuous quantitative variable because it can take values in an interval even when measurements are rounded. The units and the way the data were collected are part of the description.
:::

## Absolute, relative, and cumulative frequencies

:::definizione{#frequenze titolo="From counts to ratios"}
The **absolute frequency** $n_i$ is the count for category i. The total number of observations is $N=\sum n_i$. If $N>0$, the **relative frequency** is $f_i=\dfrac{n_i}{N}$. To express it as a percentage, multiply $f_i$ by $100$ and append the $\%$ sign.

If $8$ out of $20$ students travel by bus, the relative frequency is $\dfrac8{20}=0.4$ and the percentage is $40\%$. The relative frequencies of all disjoint and exhaustive categories sum to one.

For an ordered variable, cumulative frequency adds the frequencies up to the stated value. The count of students with at most two siblings includes the counts for zero, one, and two siblings.
:::

:::esempio{titolo="Finding a frequency from a table"}
The table shows how many books $20$ students read in October. Add the three known frequencies and subtract their sum from the total to find the frequency of $2$.

| Books read | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Students | $3$ | $7$ | $n_2$ | $4$ |

$$
n_2=20-(3+7+4)=6.
$$

The relative frequency for students who read exactly two books is $\dfrac6{20}=0.30$. The count for those who read at most two books also includes the first two groups. The cumulative absolute frequency is therefore $3+7+6=16$.
:::

## Graphs and scales

:::osservazione{#grafici titolo="Reading the value shown"}
A bar chart compares separate categories. A pie chart assigns a sector with angle $\alpha=360^\circ f_i$ to a category. For example, a frequency of $25\%$ corresponds to $90^\circ$.

Read the scale before comparing bar heights. A bar chart with a truncated vertical axis can make a small numerical difference look large. The labels, the units, and where the scale starts make the comparison possible.

A frequency chart distinguishes the value of a category from its count. A bar of height five can represent five observations of the value three.
:::

:::esempio{titolo="Comparing two bars with the same starting point"}
Over two weeks, a library lends $32$ and $36$ books, respectively. Both bars start at zero and each height equals the number of loans.

::grafico{xmin=0 xmax=3 ymin=0 ymax=40 poligoni="0.72,0 1.28,0 1.28,32 0.72,32;1.72,0 2.28,0 2.28,36 1.72,36" etichette="0.93,33,32;1.93,37,36" titolo="Loans rise from 32 in the first week to 36 in the second"}

There are four more loans in the second week. If the axis started at $30$, the visible heights would be $2$ and $6$. The ratio of the two counts would still be $\dfrac{36}{32}=\dfrac98$. In the chart with the truncated axis, the second bar would be three times as tall as the first.
:::

## Arithmetic mean and weighted mean

:::teorema{#media titolo="Using all values with their correct weights"}
For N numerical observations, the **arithmetic mean** is

$$
\bar x=\frac{x_1+\cdots+x_N}{N}.
$$

When values are grouped in a frequency table, multiply each value by its frequency.

$$
\bar x=\frac{\sum x_i n_i}{\sum n_i}.
$$

If four occurs twice and seven occurs four times, the mean is $\dfrac{4\cdot2+7\cdot4}{6}=6$.

Adding the same amount to every value adds that amount to the mean. Multiplying all the values by a factor also multiplies the mean by that factor. To find a missing value, the total sum can be recovered as $N\bar x$.
:::

:::esempio{titolo="Overall mean of groups of different sizes"}
A first group of $10$ students spends an average of $6$ hours a week in the library. A second group of $20$ students spends $9$ hours there on average. The two means represent groups of different sizes, so start with the totals to combine them.

$$
\begin{aligned}
\bar x&=\frac{10\cdot6+20\cdot9}{10+20}\\[6pt]
&=\frac{60+180}{30}=8.
\end{aligned}
$$

The overall mean is eight hours. It is closer to nine than to six because the group with a mean of nine has more students.
:::

## Median and mode

:::definizione{#mediana-moda titolo="The middle position and the most frequent value"}
To find the **median**, order the data. With an odd number of observations, take the middle value. With an even number, take the mean of the two middle values. For $2,4,7,10$, the median is $\dfrac{4+7}{2}=5.5$.

The **mode** is a value with the greatest frequency. A data set can have more than one mode. In $2,3,3,5,5$, the modes are three and five. The mode describes the value itself. Here each modal value occurs twice.

The mean, median, and mode answer different questions and may differ. The median depends on the middle positions, while the mean uses every observed value.
:::

## Spread and extreme values

:::definizione{#dispersione titolo="Range and limitations of summaries"}
The **range** is the difference between the maximum and the minimum. For the values $3,4,5,12$, it equals $12-3=9$. It is a simple measure of spread that depends only on the two extremes.

For the data $4,4,5,5,24$, the median is five and the mean is $\dfrac{42}{5}=8.4$. The extreme value twenty-four shifts the mean considerably. Reporting only one measure can therefore hide a feature of the group.

The same mean can describe different groups. The data sets $4,5,6$ and $1,5,9$ both have a mean of five, with ranges of two and eight, respectively. The context and the distribution complete the information the mean provides.
:::
