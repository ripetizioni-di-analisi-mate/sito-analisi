---
titolo: "Descriptive statistics"
sommario: "From frequencies to the shape of a distribution. Weighted mean, median and quartiles, deviations, descriptive variance, and standard deviation."
---

## What the observations describe

:::definizione{#dati titolo="Unit, variable, and reference group"}
**Descriptive statistics** collects data and summarises them with tables, graphs and a few numbers, called **summary measures**.

Each piece of data refers to a **unit**, that is, the object or person on which the measurement is made: a bus journey, a student, a laboratory test.

- The **population** is the set of all the units to which the survey refers, for example all the journeys of a bus route in one month.
- A **sample** is part of the population, for example twenty journeys chosen in that month.

The **variable** is the property observed on each unit. The values that the variable takes are called its **values or categories**.

- The variable is **categorical** if its values are categories expressed in words, such as the bus route used.
- It is **discrete quantitative** if its values are numbers separated from one another, such as the number of stops ($12$ or $13$, never $12.5$).
- It is **continuous quantitative** if the measurement can take any value in an interval, such as the journey time (for example $23.4$ minutes).

$N$ denotes the number of **observations**, that is, of the data being described. The same unit can give several observations. If the journey time of the same bus is measured five times, the five durations are five observations, so $N=5$, but they come from a single vehicle. To compare the punctuality of two routes, one states the period of the measurements, the unit of measurement, the scheduled time and the criterion used to choose the journeys, so that the data for the two routes are collected in the same way.
:::

:::osservazione
The mean of the delays recorded at eight in the morning, that is, the sum of those delays divided by the number of journeys, describes only the eight o’clock journeys. To draw conclusions about all the journeys of the day, the data must include the other times as well. A larger number of data collected at eight gives more detailed information about that time only.
:::

## Frequencies and groups of different sizes

:::definizione{#frequenze titolo="Counts and proportions"}
The **absolute frequency** $n_i$ of a value or category is the number of observations that have it. The index $i$ written below distinguishes the values: $n_1$ is the count of the first value, $n_2$ the count of the second, and so on.

The **relative frequency** $f_i$ is the absolute frequency divided by the total number $N>0$ of observations:
$$
f_i=\frac{n_i}{N}.
$$
Multiplied by $100$, the relative frequency gives the **percentage frequency** $100f_i\,\%$. If $6$ students out of $N=24$ cycle to school, the absolute frequency is $6$, the relative frequency is $\dfrac{6}{24}=\dfrac14=0.25$ and the percentage frequency is $25\%$.

The categories are **disjoint** if no observation has two categories at once, and they **cover all the observations** if every observation has one. In this case every observation is counted exactly once, so:

- the absolute frequencies add up to $N$;
- the relative frequencies add up to $\dfrac{N}{N}=1$, that is, $100\%$.

If the values are numbers listed in increasing order, the **cumulative frequency** of a value is the number of observations less than or equal to that value. It is obtained by adding the frequency of that value and the frequencies of all smaller values. For the values $1$, $2$, $5$ with frequencies $1$, $4$, $1$ the cumulative frequencies are $1$, then $1+4=5$, then $5+1=6$.
:::

:::esempio{titolo="Equal counts, different proportions"}
A laboratory counts the repeated tests in two disjoint sessions, that is, sessions with no people in common. In the first session $8$ tests out of $20$ are repeated, in the second $8$ out of $40$. The absolute frequencies are equal, while the relative frequencies are different:
$$
\frac{8}{20}=\frac{40}{100}=40\%,\qquad \frac{8}{40}=\frac{20}{100}=20\%.
$$
The number of stations to set up for repeats depends on the count, so it is eight in both sessions. How common it is to repeat the test in each session is read from the proportions instead, because each proportion compares the count with the total of its own session. In the graph the height of each session’s bar is its percentage.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=50 nomi="s,p" poligoni="0.73,0 1.27,0 1.27,40 0.73,40;1.73,0 2.27,0 2.27,20 1.73,20" etichette="0.81,43,40%;1.81,23,20%" titolo="For session $s$, the height gives the percentage $p$ of repeated tests out of that session’s total"}

The proportion for the two sessions together is obtained by adding the counts and adding the totals:
$$
\frac{8+8}{20+40}=\frac{16}{60}=\frac4{15}\approx26.7\%.
$$
The two sessions contribute eight tests each to the numerator. In the denominator the second session contributes $40$ people, twice as many as the first, so the combined proportion is closer to $20\%$ than to $40\%$. For the same reason the combined proportion differs from the mean of the two proportions, which is $\dfrac{40\%+20\%}{2}=30\%$.
:::

## Graphs, scales, and histograms

:::osservazione{#grafici titolo="What height and area represent"}
In a **bar chart** each value or category has its own bar, separate from the others. The height of the bar is the count or the proportion, as stated on the vertical axis.

In a **pie chart** the circle represents the total and each category takes up a slice, called a **sector**. A full turn measures $360^\circ$, so a category with relative frequency $f_i$ takes up an angle of $360^\circ\cdot f_i$. For example a category with $25\%$ of the responses takes up $360^\circ\cdot\dfrac14=90^\circ$.

These charts represent how a total is split when the categories are disjoint and cover all the responses. In this case the proportions add up to $100\%$ and the angles of the sectors add up to $360^\circ$.
:::

:::esempio{titolo="Distinguishing the difference from the visible ratio"}
Two thermometers in a laboratory test read $21$ and $24$ degrees Celsius. The difference between the two readings is $24-21=3$ degrees.

- In the first graph the vertical axis starts at $0$. The bars are $21$ and $24$ high, and the second is only slightly taller than the first.
- In the second graph the vertical axis starts at $20$, that is, the **baseline** of the graph is $20$. The visible parts of the bars are $21-20=1$ and $24-20=4$ high, so the second looks four times the first.

In both graphs the readings differ by $3$ degrees. The visible ratio of $4$ arises because the degrees from $0$ to $20$ are missing from the second drawing. The ratio of the visible heights equals the ratio of the readings only when the vertical axis starts at $0$, so to compare two values in a graph one reads the scale and the value at which the axis starts.

::grafico{xmin=-0.35 xmax=3.3 ymin=0 ymax=27 nomi="s,T" poligoni="0.72,0 1.28,0 1.28,21 0.72,21;1.72,0 2.28,0 2.28,24 1.72,24" etichette="0.91,22.1,21;1.91,25.1,24" titolo="From the baseline of 0, the readings $T$ are in degrees Celsius for the two instruments $s$"}

::grafico{xmin=-0.35 xmax=3.3 ymin=20 ymax=25.5 nomi="s,T" poligoni="0.72,20 1.28,20 1.28,21 0.72,21;1.72,20 2.28,20 2.28,24 1.72,24" etichette="0.91,21.38,21;1.91,24.38,24" titolo="The baseline at 20 visually enlarges the same difference"}
:::

:::definizione{#istogrammi titolo="Recovering the count from area"}
When measurements, for example durations, are grouped into intervals, the intervals are called **classes** and the graph is called a **histogram**. The notation $[2,5)$ means the values from $2$ included to $5$ excluded. The symbol $[$ marks an endpoint that belongs to the class, the symbol $)$ an endpoint that does not.

Each class is the base of a rectangle. The **width** $h_i$ of the class is the length of the base, for example $[2,5)$ has width $5-2=3$. If the class contains $n_i$ data, the height is the **density**
$$
d_i=\frac{n_i}{h_i},
$$
that is, the number of data per unit of width. With this choice the area of the rectangle, base times height, is $h_i\cdot\dfrac{n_i}{h_i}=n_i$, the count of the class. If instead the height is the **relative density** $\dfrac{f_i}{h_i}$, the area is the relative frequency $f_i$. The areas of all the rectangles therefore add up to $N$ in the first case and to $1$ in the second.
:::

:::esempio{titolo="Equal heights, different counts"}
In a set of measured durations, the classes $[0,2)$, $[2,5)$ and $[5,9)$ minutes contain $6$, $9$ and $8$ observations. The widths are $2$, $3$ and $4$ minutes, so the densities are
$$
\frac{6}{2}=3,\qquad \frac{9}{3}=3,\qquad \frac{8}{4}=2
$$
observations per minute. The first two bars both reach height $3$. The second, however, has area $3\cdot3=9$, while the first has area $2\cdot3=6$, because the second base is wider. A duration of exactly five minutes goes in the third class, because $5$ is included in $[5,9)$ and excluded from $[2,5)$.

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=4.35 nomi="t,d" poligoni="0,0 2,0 2,3 0,3;2,0 5,0 5,3 2,3;5,0 9,0 9,2 5,2" linee="0,3 2,3 2,0;2,3 5,3 5,0;5,2 9,2 9,0" etichette="0.68,1.25,6;3.25,1.25,9;6.75,0.89,8" titolo="Density $d$ is in observations per minute. The labels inside the rectangles give their areas."}
:::
## Mean and signed deviations

::::teorema{#media titolo="Frequencies as weights and the sum of deviations"}
The $N$ measurements are denoted by $x_1,x_2,\ldots,x_N$. The symbol $\sum$ (capital sigma, a Greek letter) denotes a sum: $\sum_{j=1}^N x_j$ is read «sum of the $x_j$ for $j$ from $1$ to $N$» and means $x_1+x_2+\ldots+x_N$.

The **arithmetic mean** $\bar x$ (read «x bar») of $N>0$ measurements is the sum of the measurements divided by $N$.

If measurements repeat, $v_i$ denotes the distinct values and $n_i$ their frequencies. A value $v_i$ that occurs $n_i$ times contributes $n_i v_i$ to the sum. The mean computed in this way is called the **weighted mean**, and the frequencies are the **weights**. Dividing each weight by $N$ gives the same mean with the relative frequencies, $\bar x=\sum_i v_i f_i$.

The **deviation** of a measurement from the mean is the signed difference $x_j-\bar x$. It is positive for the measurements above the mean and negative for those below.

$$
\begin{aligned}
\bar x&=\frac{\sum_{j=1}^N x_j}{N}
=\frac{\sum_i n_i v_i}{\sum_i n_i},\\[5pt]
\sum_{j=1}^N (x_j-\bar x)&=0.
\end{aligned}
$$

:::dimostrazione
For the first equality, the $n_i$ copies of $v_i$ are added, giving $n_i v_i$. The total does not change, and the number of observations is still $N=\sum_i n_i$.

For the second equality, adding the deviations means adding all the data and subtracting $\bar x$ once for each observation, that is, $N$ times:
$$
\sum_{j=1}^N (x_j-\bar x)=\sum_{j=1}^N x_j-N\bar x.
$$
By the definition of the mean, $\sum_j x_j=N\bar x$, so the difference is zero.
:::
::::

:::esempio{titolo="A repeated value carries more weight"}
The values $0$, $3$ and $6$ have frequencies $1$, $2$ and $3$. The weighted mean is
$$
\bar x=\frac{0\cdot1+3\cdot2+6\cdot3}{1+2+3}=\frac{0+6+18}{6}=\frac{24}{6}=4.
$$
The signed deviations are $0-4=-4$ once, $3-4=-1$ twice and $6-4=2$ three times. Their sum is $-4+2\cdot(-1)+3\cdot2=-4-2+6=0$. The observations to the right of the mean have total distance $3\cdot2=6$, equal to the total distance $4+2\cdot1=6$ of the observations to the left, so they balance. In the graph each point is an observation and the dashed line marks the mean.

::grafico{xmin=-0.65 xmax=7.3 ymin=-0.35 ymax=4.25 nomi="x," punti="0,1;3,1;3,2;6,1;6,2;6,3" segmenti="4,0,4,3.6" etichette="3.53,3.94,4" titolo="Each point is one observation. The dashed line marks the mean."}
:::

## Median and quartiles

:::definizione{#mediana titolo="Reading the central positions"}
The data are sorted from smallest to largest, including repeats. The **rank** of an observation is its position in this sorted list: in $2,5,5,9$ the value $9$ has rank $4$. The observation of rank $k$ is also written $x_{(k)}$.

The **median**, written $M_e$, $\operatorname{Med}$ or $Q_2$, is the value at the centre of the sorted list.

- If $N$ is odd, $N=2k+1$, the median is the observation of rank $k+1$. For example with $N=5$ one has $k=2$, and in $2,5,5,9,11$ the median is the third observation, $5$.
- If $N$ is even, $N=2k>0$, the median is the mean of the observations of rank $k$ and $k+1$. For example with $N=4$ one has $k=2$, and in $2,5,7,9$ the median is $\dfrac{5+7}{2}=6$.

When the data are in a table with cumulative frequencies, the observation of a given rank is the first value whose cumulative frequency is greater than or equal to that rank.
:::

:::definizione{#quartili titolo="Rank convention for the first and third quartiles"}
The **quartiles** $Q_1$, $Q_2$ and $Q_3$ divide the sorted list into four parts with roughly the same number of observations. Here the **nearest-rank convention** is used.

- For $Q_1$ one computes $\dfrac N4$, for $Q_3$ one computes $\dfrac{3N}{4}$.
- If the result is not a whole number, it is rounded up to the next whole number, for example $2.25$ becomes $3$.
- The quartile is the observation at the rank obtained.

Other conventions also exist, and with few data they give slightly different values. The second quartile $Q_2$ is the median and is found with the median rule. The difference $Q_3-Q_1$ is called the **interquartile range** and is the width of the interval that contains roughly the central half of the data.
:::

:::esempio{titolo="Quartiles and median in a list with repeats"}
The sorted data are $1,2,2,3,5,7,7,11$, so $N=8$.

- For the first quartile one computes $\dfrac{8}{4}=2$, a whole number. The observation of rank $2$ is $2$, so $Q_1=2$.
- For the third quartile one computes $\dfrac{3\cdot8}{4}=6$. The observation of rank $6$ is $7$, so $Q_3=7$.
- Since $N=8$ is even, the median is the mean of the fourth and fifth observations, $Q_2=\dfrac{3+5}{2}=4$.

The interquartile range is $Q_3-Q_1=7-2=5$.

::grafico{xmin=-0.3 xmax=9.2 ymin=-0.4 ymax=12.2 nomi="k,xₖ" punti="1,1;2,2;3,2;4,3;5,5;6,7;7,7;8,11" segmenti="2,0,2,2;6,0,6,7" titolo="Quartiles $Q_1$ and $Q_3$ are at ranks $2$ and $6$. The median uses ranks $4$ and $5$."}

Only one observation, $1$, is strictly less than $Q_1=2$, while the observations less than or equal to $Q_1$ are three, namely $1,2,2$. With repeated values the two quantities differ, so to interpret a quartile one distinguishes between values equal to the threshold and values strictly below it.

The **range** is the difference between the largest and the smallest observation, here $11-1=10$. If $11$ is changed to $20$, the maximum becomes $20$ and the range grows to $20-1=19$. Ranks $2$, $4$, $5$ and $6$ are still occupied by the same observations, so the quartiles and the median do not change.
:::
:::esempio{titolo="Same extremes, different central spread"}
The lists $A$: $1,3,4,5,6,8$ and $B$: $1,2,3,6,7,8$ both have range $8-1=7$. The median is also the same, because $\dfrac{4+5}{2}=\dfrac{3+6}{2}=4.5$. With $N=6$ one has $\dfrac64=1.5$ and $\dfrac{3\cdot6}{4}=4.5$, which rounded up give the ranks of the quartiles, the second and the fifth. In $A$ the interquartile range is $6-3=3$, in $B$ it is $7-2=5$, so in $B$ the central data are farther apart, that is, more **spread out**.

The drawing is a **box plot**. The box goes from $Q_1$ to $Q_3$, the line inside marks the median and the outer segments reach the minimum and the maximum.

::grafico{xmin=-0.4 xmax=9.5 ymin=-0.35 ymax=3.05 nomi="x," poligoni="3,1.78 6,1.78 6,2.22 3,2.22;2,0.78 7,0.78 7,1.22 2,1.22" linee="1,2 3,2;6,2 8,2;1,1 2,1;7,1 8,1;1,1.81 1,2.19;8,1.81 8,2.19;1,0.81 1,1.19;8,0.81 8,1.19;4.5,0.78 4.5,1.22;4.5,1.78 4.5,2.22" etichette="0.38,2.15,A;0.38,1.15,B" titolo="The boxes have different widths even though they share a median and extremes"}
:::

:::esempio{titolo="Finding positions without expanding the data"}
In the table the last cumulative count is $9$, so there are nine observations. The three ranks needed are $\dfrac94=2.25$ rounded up to $3$ for $Q_1$, the fifth for the median (with $N=9=2\cdot4+1$ one takes rank $4+1$) and $\dfrac{27}{4}=6.75$ rounded up to $7$ for $Q_3$.

The cumulative count of value $1$ is $1$ and that of value $2$ is $5$, so value $2$ occupies positions two through five. Hence $Q_1=Q_2=2$. The cumulative count of value $5$ is $6$, so rank $7$ falls in the block of value $8$, which begins right after it. The third quartile is therefore $8$.

| Value | Frequency | Cumulative count |
|---|---:|---:|
| $1$ | $1$ | $1$ |
| $2$ | $4$ | $5$ |
| $5$ | $1$ | $6$ |
| $8$ | $3$ | $9$ |
:::

## Mode and what it represents

:::definizione{#moda titolo="The most frequent value or category"}
A **mode** is a value or category of maximum frequency. Several values can share the maximum frequency, and then there is more than one mode. The bus routes $A$, $B$ and $C$ have $5$, $7$ and $7$ uses. The maximum is $7$ and is reached by $B$ and by $C$, so the modes are $B$ and $C$, and $7$ is the frequency of each. The mode can be found also for categories without an order, such as bus routes, because it only requires counting.
:::

:::osservazione
When measurements are grouped into classes, one can name the class with the largest count. With classes of different widths, the tallest bar of the histogram is the one with the greatest density, and it can belong to a class with fewer observations. In the example of the durations, class $[0,2)$ has the same height $3$ as class $[2,5)$, but contains $6$ observations against $9$. Without the individual values one cannot tell which exact measurement occurred most often.
:::

## Descriptive variance

::::teorema{#varianza titolo="Squared deviations and frequencies"}
The **range** $R$ is the maximum minus the minimum. The **descriptive variance** $\sigma^2$, for $N>0$, is the mean of the squared deviations. To compute it, each deviation is squared, the squares are added and the sum is divided by $N$, the number of observations being described. The symbol $\sigma$ is the lower-case Greek letter sigma, and $\sigma^2$ is read «sigma squared». Squares are used because the sum of the signed deviations is always zero, while every square is positive or zero. For data grouped into equal values, the square of the deviation of $v_i$ is multiplied by its frequency $n_i$.

$$
\begin{aligned}
\sigma^2&=\frac{1}{N}\sum_{j=1}^N(x_j-\bar x)^2\\[5pt]
&=\frac{\sum_i n_i(v_i-\bar x)^2}{\sum_i n_i}.
\end{aligned}
$$

:::dimostrazione
The $n_i$ observations equal to $v_i$ all have the same deviation and therefore the same square. Together they contribute $n_i(v_i-\bar x)^2$, and this gives the second line.

Every square is greater than or equal to zero, so the variance is also greater than or equal to zero. A sum of nonnegative numbers is zero only if every term (that is, every number added) is zero. Therefore the variance is zero only if every deviation is zero, that is, if all the observations equal the mean.
:::

The divisor $N$ is used also when the data being described come from a sample. The divisor $N-1$ appears in a different problem, when sample data are used to estimate the variance of the whole population. The exercises in this chapter ask for the descriptive variance, with divisor $N$.
::::

:::esempio{titolo="Same mean and range, different variances"}
In the data $A=(0,0,4,4)$ and $B=(0,2,2,4)$ the mean is $2$ and the range is $4-0=4$. In $A$ all the observations are two units from the mean. In $B$ two observations coincide with the mean and only two are at the extremes. The variances are
$$
\sigma_A^2=\frac{(-2)^2+(-2)^2+2^2+2^2}{4}=\frac{16}{4}=4,\qquad
\sigma_B^2=\frac{(-2)^2+0^2+0^2+2^2}{4}=\frac{8}{4}=2.
$$
Two distributions with the same mean and the same extremes can therefore have different variances, because the variance also depends on how many observations lie close to the mean.

::grafico{xmin=-0.7 xmax=5.2 ymin=-0.25 ymax=5.25 nomi="x," punti="0,3;0,4;4,3;4,4;0,0.9;2,0.9;2,1.9;4,0.9" segmenti="2,0,2,4.65" etichette="0.5,4.2,A;0.5,1.85,B;2.25,4.62,2" titolo="Both groups share a mean. In B two observations have zero deviation."}
:::

::::teorema{#secondo-momento titolo="Checking with the mean of the squares"}
The **mean of the squares** of the data is $\dfrac{\sum_i n_i v_i^2}{N}$. Expanding the squared deviations also gives

$$
\sigma^2=\frac{\sum_i n_i v_i^2}{N}-\bar x^2.
$$

The formula is read «the variance is the mean of the squares minus the square of the mean». It is used to check the calculation done with the deviations, and to find the mean of the squares when the mean and the variance are known.

:::dimostrazione
For the square of a difference, $(v_i-\bar x)^2=v_i^2-2v_i\bar x+\bar x^2$. Each line is multiplied by $n_i$ and summed over all the values:
$$
\begin{aligned}
\sum_i n_i(v_i-\bar x)^2&=\sum_i n_i v_i^2-2\bar x\sum_i n_i v_i+\bar x^2\sum_i n_i\\[5pt]
&=\sum_i n_i v_i^2-2\bar x\cdot N\bar x+\bar x^2\cdot N\\[5pt]
&=\sum_i n_i v_i^2-N\bar x^2.
\end{aligned}
$$
The second step uses $\sum_i n_i v_i=N\bar x$, which is the definition of the mean, and $\sum_i n_i=N$, because the frequencies add up to $N$. Dividing by $N$ leaves the stated formula.
:::
::::

:::esempio{titolo="Checking variance with a table"}
The values $0$, $2$ and $8$ have frequencies $1$, $2$ and $1$. The mean is
$$
\bar x=\frac{0\cdot1+2\cdot2+8\cdot1}{4}=\frac{12}{4}=3.
$$
With the weighted deviations one computes $1\cdot(0-3)^2=9$, $2\cdot(2-3)^2=2$ and $1\cdot(8-3)^2=25$, as in the table. The variance is
$$
\sigma^2=\frac{9+2+25}{4}=\frac{36}{4}=9.
$$
The mean of the squares of the values is $\dfrac{0^2\cdot1+2^2\cdot2+8^2\cdot1}{4}=\dfrac{0+8+64}{4}=18$. Subtracting the square of the mean, $3^2=9$, gives $18-9=9$, the same variance.

| Value $v_i$ | Count $n_i$ | $n_i(v_i-3)^2$ |
|---|---:|---:|
| $0$ | $1$ | $9$ |
| $2$ | $2$ | $2$ |
| $8$ | $1$ | $25$ |
:::

:::osservazione
If all the frequencies are multiplied by the same positive number, the relative frequencies do not change. Doubling every count, for example, doubles both the numerators and the denominators in the mean and in the variance, so the results stay the same. With frequencies $2$, $4$, $2$ instead of $1$, $2$, $1$ in the previous table, the mean is still $\dfrac{0\cdot2+2\cdot4+8\cdot2}{8}=\dfrac{24}{8}=3$. Two groups of different sizes therefore have the same summary measures when the values have the same relative frequencies. To decide which group is more spread out one compares the proportions of the values, because the number of data alone does not determine the spread.
:::

## Standard deviation and changes of scale

::::teorema{#deviazione titolo="Units and transformations"}
The **standard deviation** is the square root of the variance, $\sigma=\sqrt{\sigma^2}$. If the data are in centimetres, the deviations are also in centimetres and their squares in square centimetres. Therefore the variance has as its unit the square of the unit of the data, while the standard deviation is expressed in the same unit as the data.

A **linear transformation** replaces every observation $x_j$ with $y_j=ax_j+b$. The number $a$ multiplies all the data, for example $a=10$ when changing from centimetres to millimetres. The number $b$ is added to all the data, for example to correct the zero of an instrument. The mean becomes $a\bar x+b$. The symbol $|a|$ denotes the **absolute value** of $a$, that is, the number $a$ taken without its sign, for example $|-2|=2$.

$$
\begin{aligned}
y_j-\bar y&=a(x_j-\bar x),\\[5pt]
\sigma_y^2&=a^2\sigma_x^2,\qquad
\sigma_y=|a|\sigma_x.
\end{aligned}
$$

:::dimostrazione
The sum of the new data is $a\sum_j x_j+Nb$, because every observation is multiplied by $a$ and increased by $b$. Dividing by $N$ gives $\bar y=a\bar x+b$.

The constant $b$ appears both in the transformed value and in its mean, so it cancels in the deviation:
$$
y_j-\bar y=(ax_j+b)-(a\bar x+b)=a(x_j-\bar x).
$$
Every deviation is multiplied by $a$, so its square is multiplied by $a^2$. The mean of the squared deviations is multiplied by the same factor, that is, $\sigma_y^2=a^2\sigma_x^2$. Taking the square root gives $\sigma_y=\sqrt{a^2}\,\sigma_x=|a|\sigma_x$, because the square root of a number is always positive or zero.
:::

With $a>0$ the transformation preserves the order of the data, so the ranks are still occupied by the same transformed observations. The median becomes $aM_e+b$ and the interquartile range is multiplied by $a$. With $a<0$ the order is reversed, and the median still becomes $aM_e+b$.
::::

:::esempio{titolo="Correcting zero or changing unit"}
The lengths $2,4,6$ centimetres have mean $4$ and variance $\dfrac{(-2)^2+0^2+2^2}{3}=\dfrac{8}{3}$ square centimetres. In millimetres every length is multiplied by $10$, so the data become $20,40,60$. The mean is $10\cdot4=40$ and the variance is $10^2\cdot\dfrac83=\dfrac{800}{3}$ square millimetres, because the change of unit has multiplied the distances from the mean by ten. If a calibration then adds $3$ millimetres to every measurement, the data become $23,43,63$ and the new mean is $43$. The deviations are still $-20$, $0$ and $20$, so the distances from the centre do not change.

::grafico{xmin=-2 xmax=70 ymin=-0.3 ymax=2.8 nomi="x," punti="20,1;40,1;60,1;23,2;43,2;63,2" linee="20,1 60,1;23,2 63,2" etichette="5,1.17,A;5,2.17,B" titolo="Measurements A in millimetres and measurements B adjusted by 3 millimetres have the same deviations from their respective means"}
:::

:::attenzione
The rule $\sigma_y^2=a^2\sigma_x^2$ holds when the same transformation is applied to all the data. For $4,4,4,4$ the variance is zero. If only the last observation is doubled one obtains $4,4,4,8$, the new centre is $\dfrac{20}{4}=5$ and the variance becomes $\dfrac{1+1+1+9}{4}=3$, different from $2^2\cdot0=0$. Doubling all the observations instead gives four $8$s, and the variance stays zero. Before applying the squared-factor rule, one therefore checks which observations the change refers to.
:::

## What grouping values loses

:::osservazione{#riepilogo titolo="Estimating from class midpoints"}
The lists $A$: $1,2,6,7$ and $B$: $3,3,5,5$ both have two observations in $[0,4)$ and two in $[4,8)$. Grouped into classes they therefore give the same table and the same histogram. Both have mean $4$, while their variances differ:
$$
\sigma_A^2=\frac{(-3)^2+(-2)^2+2^2+3^2}{4}=\frac{26}{4},\qquad
\sigma_B^2=\frac{(-1)^2+(-1)^2+1^2+1^2}{4}=1.
$$
The squared deviations depend on the values inside the classes, which the table does not record.

::grafico{xmin=-0.7 xmax=9.0 ymin=-0.35 ymax=5.1 nomi="x," punti="1,3;2,3;6,3;7,3;3,0.9;3,1.9;5,0.9;5,1.9" segmenti="4,0,4,4.7" etichette="0.45,3.5,A;0.45,1.6,B;4.24,4.45,4" titolo="Both distributions have two observations per class, with different distances from the centre"}

If only the table is known, the **midpoint** of each class, that is, the mean of its two endpoints, is used as the representative value: $\dfrac{0+4}{2}=2$ for $[0,4)$ and $\dfrac{4+8}{2}=6$ for $[4,8)$. This amounts to computing the summary measures for the list $2,2,6,6$, which has mean $4$ and variance $\dfrac{4+4+4+4}{4}=4$. The result is an approximation, because the individual data cannot be reconstructed from the table. The mean can change too while the histogram stays the same. For example the measurements $3,3,7,7$ still fall two per class and have mean $5$. The summary measures are therefore exact when the data are individual or grouped into equal values, and approximate when the data are collected in classes.
:::
