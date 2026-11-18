---
titolo: "Data and descriptive statistics"
sommario: "Data collection, frequencies, reading graphs and histograms, mean, median, mode, and spread."
---

## What is observed

:::definizione{#dati titolo="Population, sample, and variable"}
The **population** is the set of units the study is about. When only part of the population is studied, the units observed make up the **sample**. The **variable** is the property measured or recorded for each unit. Its **values or categories** are the results it can take.

To study how students enrolled at a school travel there in October, the unit might be the student. For each observed student we can then record their usual means of transport, the number of changes, and their travel time in minutes. If times are measured every morning, the same student supplies more than one observation. The final count needs to specify whether it is counting journeys or students.
:::

:::esempio{titolo="Measurement and recording"}
Usual means of transport is **nominal categorical**, because bicycle, bus, and train have no intrinsic order. A rating expressed as poor, adequate, or good is ordinal categorical. The number of changes is discrete quantitative and takes integer values. Duration is continuous quantitative because it can take any positive value in an interval, even when the questionnaire records it to the nearest minute. A time recorded as $12$ minutes may represent a duration from $11.5$ minutes inclusive to $12.5$ minutes exclusive, using half-up rounding.
:::

:::attenzione
Assigning codes $1$, $2$, and $3$ to three means of transport makes recording easier. But the code $3$ could be swapped with $1$ without changing any journey. An average of the codes would depend on their assignment. The counts or proportions for each means of transport remain meaningful.
:::

## Frequencies and denominators

:::definizione{#frequenze titolo="Absolute and relative frequencies"}
The **absolute frequency** $n_i$ counts the occurrences of value or category $i$. The **relative frequency** divides that count by the total $N>0$. The values or categories must be disjoint and exhaustive so that each observation is included exactly once.

$$
N=\sum_i n_i,\qquad
f_i=\frac{n_i}{N},\qquad
\sum_i f_i=\frac{\sum_i n_i}{N}=1.
$$

To obtain a percentage, calculate $100f_i$ and append $\%$. If the total is zero, relative frequencies are undefined. Cumulative frequencies make sense when the values have an order. We can ask how many students read at most two books or how many ratings were at least adequate. For means of transport, listing bicycles or buses first would arbitrarily change the cumulative counts.
:::

:::esempio{titolo="Reading a frequency table"}
Twenty students recorded how many books they read in one month. The count row shows that $8$ students read exactly two books. The cumulative row shows that $16$ read at most two. The corresponding proportion is $\dfrac{16}{20}=80\%$.

| Books read | $0$ | $1$ | $2$ | $3$ |
|---|---:|---:|---:|---:|
| Absolute frequency | $3$ | $5$ | $8$ | $4$ |
| Relative frequency | $15\%$ | $25\%$ | $40\%$ | $20\%$ |
| Absolute cumulative frequency | $3$ | $8$ | $16$ | $20$ |

::grafico{assi=0 xmin=-1.2 xmax=4.15 ymin=-1.3 ymax=10 vettori="-0.62,0,3.95,0;-0.62,0,-0.62,9.5" poligoni="-0.19,0 0.19,0 0.19,3 -0.19,3;0.81,0 1.19,0 1.19,5 0.81,5;1.81,0 2.19,0 2.19,8 1.81,8;2.81,0 3.19,0 3.19,4 2.81,4" etichette="-0.10,3.55,3;0.9,5.55,5;1.9,8.55,8;2.9,4.55,4;-0.1,-0.75,0;0.9,-0.75,1;1.9,-0.75,2;2.9,-0.75,3;3.78,-0.75,x;-0.93,9.45,n" titolo="$x$ is the number of books and $n$ the number of students with that value"}

The cumulative count grows by adding the count from the next column. At $2$, the $8$ observations are added to the previous cumulative count, which was $8$. If we were given only the cumulative row, the frequency for $2$ would be the difference $16-8=8$. The last cumulative count equals $N$.

::grafico{xmin=-0.55 xmax=4.2 ymin=-0.65 ymax=22 nomi="x,N(x)" linee="-0.48,0 0,0;0,3 1,3;1,8 2,8;2,16 3,16;3,20 3.9,20" punti="0,0,vuoto;0,3,pieno;1,3,vuoto;1,8,pieno;2,8,vuoto;2,16,pieno;3,16,vuoto;3,20,pieno" etichette="0.23,4.3,3;1.25,9.4,8;2.24,17.4,16;3.30,20.7,20" titolo="The jump at $x=2$ adds the students who read exactly two books"}
:::

:::osservazione
Out of $18$ students in one group, $9$ cycle to school. In the other group, $12$ out of $30$ cycle. The second group has more cyclists but a smaller proportion, since $\dfrac9{18}=\dfrac12$ and $\dfrac{12}{30}=\dfrac25$. To compare how common cycling is in the two groups, use proportions calculated with their respective totals.
:::

## Bar charts, pie charts, and scales

:::osservazione{#grafici titolo="Reading the vertical axis"}
In a **bar chart**, each value or category has a separate bar. Read the count or proportion from the vertical axis. Check its label, unit, and the numerical distance between ticks to distinguish a value of the variable from the frequency with which it was observed.
:::

:::esempio{titolo="The same data on two scales"}
A library lends $48$ books in one week and $54$ in the next. In the first graph, $n$ is the number of loans and the scale begins at zero. There are $54-48=6$ more loans and the ratio is $\dfrac{54}{48}=\dfrac98$.

::grafico{xmin=-0.3 xmax=3.3 ymin=0 ymax=60 nomi="s,n" poligoni="0.73,0 1.27,0 1.27,48 0.73,48;1.73,0 2.27,0 2.27,54 1.73,54" etichette="0.87,51,48;1.87,57,54" titolo="Number of loans in week $s$, with a zero baseline"}

If the axis starts at $45$, only the last $3$ and $9$ loans are visible in the bars. The second visible portion is three times as high, while the ratio of the counts is still $\dfrac98$. The second chart emphasises the gap because it devotes more space to a smaller interval.

::grafico{xmin=-0.3 xmax=3.3 ymin=45 ymax=56.5 nomi="s,n" poligoni="0.73,45 1.27,45 1.27,48 0.73,48;1.73,45 2.27,45 2.27,54 1.73,54" etichette="0.87,48.55,48;1.87,54.65,54" titolo="The same counts with the visible baseline at 45 loans"}
:::

:::esempio{titolo="From count to angle"}
Forty students choose one of activities $A$, $B$, and $C$, with $20$, $10$, and $10$ votes. A **pie chart** assigns each category the angle $\alpha_i=360^\circ f_i$. Since half the students choose $A$, it takes up $180^\circ$. The two other activities each have one quarter of votes and take up $90^\circ$ each. The angles sum to $360^\circ$, a full turn.

::grafico{assi=0 uguale=1 xmin=-1.3 xmax=1.3 ymin=-1.22 ymax=1.22 curve="cos(t),sin(t),0,6.2832" poligoni="-1,0 -0.966,0.259 -0.866,0.5 -0.707,0.707 -0.5,0.866 -0.259,0.966 0,1 0.259,0.966 0.5,0.866 0.707,0.707 0.866,0.5 0.966,0.259 1,0" linee="-1,0 1,0;0,0 0,-1" etichette="-0.25,0.43,A 180°;-0.65,-0.45,B 90°;0.18,-0.45,C 90°" titolo="Each sector angle is proportional to the number of votes"}
:::

## Classes and histograms

:::definizione{#istogrammi titolo="Why rectangle area matters"}
Continuous data can be grouped into **classes**. The interval $[a_i,b_i)$ includes $a_i$ and excludes $b_i$. This convention assigns each boundary value to only one class. In a **histogram**, the rectangle has width $h_i=b_i-a_i$. For area to represent $n_i$ observations, the height must be the **absolute frequency density** $d_i$.

$$
h_i d_i=n_i,\qquad d_i=\frac{n_i}{h_i}.
$$

If width is measured in minutes, density is measured in observations per minute. Their product is a count. A relative density histogram uses $f_i/h_i$ as height. In that case the areas sum to one.
:::

:::esempio{titolo="The tallest rectangle and the largest class"}
We record $30$ waiting times in minutes. A time of $3$ belongs in the second class. The table gives heights of $12/3=4$ and $18/6=3$.

| Duration (min) | Width (min) | Waits | Density (waits/min) |
|---|---:|---:|---:|
| $[0,3)$ | $3$ | $12$ | $4$ |
| $[3,9)$ | $6$ | $18$ | $3$ |

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=5.45 nomi="t,d" poligoni="0,0 3,0 3,4 0,4;3,0 9,0 9,3 3,3" linee="0,4 3,4 3,0;3,3 9,3 9,0" etichette="0.74,2.18,12 waits;4.55,1.48,18 waits" titolo="$t$ is measured in minutes and $d$ in waits per minute"}

The rectangle on the left is taller but has area $3\cdot4=12$. The one on the right has area $6\cdot3=18$, so it represents more waits. Using counts as heights would give areas $3\cdot12=36$ and $6\cdot18=108$. The visible ratio would be $108/36=3$, while the correct ratio is $18/12=1.5$. With equal widths, comparing heights or areas would give the same ratio.
:::

:::osservazione{titolo="Thresholds at boundaries and within classes"}
The table shows that exactly $12$ waits last less than three minutes. For “less than five minutes,” the threshold lies inside the second class. Without the individual values, the count could range from $12$ to $30$. The histogram groups the observations, and each uniform rectangle represents the density of its class as a whole.

The total waiting time also depends on the values within each class. The lists $1,1,4,4$ and $2,2,8,8$ would give the same histogram using the two classes in the table, because each class would contain two waits. Their means would be $\dfrac{10}{4}$ and $\dfrac{20}{4}$ minutes. If only the class frequencies have been kept, the exact mean may have been lost.
:::


## Arithmetic and weighted means

::::teorema{#media titolo="From the sum of the values to the mean"}
For $N>0$ numerical observations $x_1,\ldots,x_N$, the **arithmetic mean** $\bar x$ is their sum divided by $N$. When a table gives each distinct value $v_i$ with frequency $n_i$, we can use $v_i n_i$ instead of listing every occurrence.

$$
\bar x=\frac{x_1+\cdots+x_N}{N}
=\frac{\sum_i v_i n_i}{\sum_i n_i}.
$$

:::dimostrazione
Grouping equal terms in the sum, each value $v_i$ occurs in $n_i$ summands, so its contribution is $v_i n_i$. The total number of summands is $\sum_i n_i$. The numerator and denominator are the same as if the full list had been used.
:::
::::

:::esempio{titolo="The mean as a balance point"}
The data $1,1,4,4,4,7$ have mean $\dfrac{1\cdot2+4\cdot3+7}{6}=\dfrac72$. The result lies between the minimum and maximum, although it does not occur in the observations. If the values are positions on the number line, the contribution to the left of $3.5$ is $2\cdot2.5=5$. On the right the contributions are $3\cdot0.5$ and $3.5$, with the same sum.

::grafico{xmin=-0.7 xmax=8.2 ymin=-0.4 ymax=4.2 nomi="x," punti="1,1;1,2;4,1;4,2;4,3;7,1" segmenti="3.5,0,3.5,3.35" etichette="2.55,3.55,3.5" titolo="Each point is one observation. The distances to the right and left of $3.5$ balance."}
:::

:::esempio{titolo="Combining two groups"}
Eight children take an average of $12$ minutes to reach a sports ground, and another twelve take an average of $7$ minutes. The groups are disjoint. Their total travel times are $8\cdot12=96$ and $12\cdot7=84$ minutes, so the combined mean is $\dfrac{96+84}{20}=9$ minutes. The simple mean of the two means would give each group the same weight, whereas the second group contains more observations.
:::

:::osservazione
The identity $N\bar x=\sum_i x_i$ gives the sum from the mean when a value is missing. If $b$ is added to every value, the sum increases by $Nb$ and the mean increases by $b$. If every value is multiplied by $a$, both the sum and the mean are multiplied by $a$.

If every value lies between $m$ and $M$, the sum lies between $Nm$ and $NM$. Dividing by $N>0$ gives $m\le \bar x\le M$. The mean therefore lies within the interval spanned by the observations. This check can detect an impossible result caused by a wrong denominator.
:::

## Median and mode

:::definizione{#mediana-moda titolo="Central position and highest frequency"}
To find the **median** of numerical data, sort the values, including repetitions. If $N=2k+1$, take the value at position $k+1$. If $N=2k>0$, take the mean of the values in positions $k$ and $k+1$. A frequency table can locate these positions using cumulative counts.

A **mode** is a value or category with maximum frequency. Several values or categories are modes if they share that maximum. A mode can also be found for categorical data, because it requires only comparing counts.
:::

:::esempio{titolo="A median between two values and two modes"}
The data $2,2,4,7,7,9$ have six observations. The cumulative count goes from $2$ to $3$ at $4$, so $4$ is the third value. The fourth is $7$, since its block takes positions four and five. The median is $\dfrac{4+7}{2}=5.5$. The maximum frequency is two, attained by the values $2$ and $7$.

::grafico{xmin=-0.7 xmax=10.2 ymin=-0.4 ymax=3.4 nomi="x," punti="2,1;2,2;4,1;7,1;7,2;9,1" segmenti="5.5,0,5.5,2.2" etichette="4.64,2.43,5.5" titolo="The two central values are $4$ and $7$, on either side of the median"}

Replacing $9$ with $21$ leaves the two central positions and the two highest frequencies unchanged. The mean increases by $\dfrac{21-9}{6}=2$. An extreme value can therefore change the mean much more than the median when its position in the ordering remains the same.
:::

## Spread and extremes

:::definizione{#dispersione titolo="Range"}
The **range** is the maximum minus the minimum. It is expressed in the same unit as the data. It depends on two observations, so it immediately reflects a change at an extreme and can stay the same when values away from the ends change.
:::

:::esempio{titolo="Same mean, different spread"}
The data $6,7,8$ and $2,7,12$ both have mean and median $7$. The first group lies within an interval of width $8-6=2$, and the second occupies an interval of width $12-2=10$. The two rows in the plot share a single value axis, so their distances are comparable.

::grafico{xmin=-0.8 xmax=13.2 ymin=-0.35 ymax=3.3 nomi="x," punti="6,2;7,2;8,2;2,1;7,1;12,1" linee="6,2 8,2;2,1 12,1" segmenti="7,0,7,2.6" etichette="2.55,2.2,first;2.55,1.2,second;6.47,2.77,7" titolo="The dashed line marks a common centre for two different ranges"}

Conversely, $2,3,3,3,12$ and $2,7,10,11,12$ have the same range $10$ but medians $3$ and $10$. To compare two groups, consider a measure of spread alongside the centre and, when possible, examine the data or plot.
:::

## How data are collected

:::osservazione{#rilevazione titolo="Who can enter the sample"}
A travel survey conducted only next to the school bicycle rack reaches cyclists more easily. Conducting more interviews at the same spot leaves that preference in selection in place. To describe the whole school, a sample can be selected from the class lists and students who travel in other ways can also be contacted.

The timing of collection can influence the data. If the aim is to estimate how many students usually walk, a rainy day describes the journeys on that day. Collecting data on several days under different conditions helps answer the question about usual behaviour. The question should also allow all relevant answers, such as distinguishing “bus only” from “bus and train.”
:::

:::esempio{titolo="Valid responses and missing responses"}
Of $50$ students invited to take a survey, $32$ respond. Of the respondents, $16$ report walking to school. The $50\%$ is therefore the proportion among respondents, because the denominator is $32$. Among all invitees, at least $16$ and at most $16+18=34$ walk. The bounds of $32\%$ and $68\%$ allow for none or all of the non-respondents walking.

::grafico{assi=0 xmin=-1.0 xmax=51.0 ymin=-0.35 ymax=3.65 linee="0,0 50,0 50,2 0,2 0,0;16,0 16,2;32,0 32,2" poligoni="0,0 16,0 16,2 0,2" etichette="3.4,0.95,16 walk;18.0,0.95,16 other;34.1,0.97,18 missing;1.1,2.65,32 responses;34.1,2.65,non-responses" titolo="The students who responded are the only ones whose means of transport is known"}
:::

:::osservazione{#controlli titolo="Which question the summary can answer"}
To plan seats on a bus, count the number of students who use it. To compare its popularity in two schools of different sizes, use their proportions. To describe a typical journey time, compare the median with the mean and see whether a few very long journeys explain the difference. The denominator, the unit, and how the observations were collected should be read alongside the result.
:::
