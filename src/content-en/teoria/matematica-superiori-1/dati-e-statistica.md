---
titolo: "Data and descriptive statistics"
sommario: "Data collection, frequencies, reading graphs and histograms, mean, median, mode, and spread."
---

## What is observed

:::definizione{#dati titolo="Population, sample, and variable"}
A statistical survey collects information about a group of people or objects in order to describe it with numbers. Each person or object about which information is collected is a **statistical unit**.

The **population** is the set of all the units the survey is about. When only part of the population is observed, the units observed make up the **sample**. The **variable**, also called the character, is the property measured or recorded for each unit. Its **values or categories** are the results the variable can take. For the variable “means of transport”, the categories are, for example, bicycle, bus, and train.

The aim is to study how students enrolled at a school travel there in October. The population is made up of all enrolled students and the statistical unit is the student. For each observed student three variables are recorded:

- the usual means of transport;
- the number of changes;
- the travel time in minutes.

If times are measured every morning, the same student supplies more than one observation, one for each journey. Therefore, for the final count, it is specified whether it refers to journeys or to students.
:::

:::esempio{titolo="Measurement and recording"}
Variables are of two kinds.

- A **categorical** (qualitative) variable has words or categories as its results. It is **nominal** if the categories have no order and **ordinal** if they do.
- A **quantitative** variable has numbers as its values. It is **discrete** if it takes separate values, such as the whole numbers obtained by counting. It is **continuous** if it can take any value in an interval, such as a duration or a length.

In the travel survey:

- usual means of transport is **nominal categorical**, because bicycle, bus, and train are categories with no order;
- a rating expressed as poor, adequate, or good is ordinal categorical, because poor comes before adequate and adequate comes before good;
- the number of changes is discrete quantitative, because it takes integer values: $0$, $1$, $2$, …;
- the travel time is continuous quantitative, because it can take any positive value in an interval, even when the questionnaire records it to the nearest whole minute.

A time recorded as $12$ minutes, rounded to the nearest minute, corresponds to a duration from $11.5$ minutes, inclusive, to $12.5$ minutes, exclusive. Half minutes are rounded up, so $11.5$ becomes $12$ and $12.5$ becomes $13$.
:::

:::attenzione
To record data more quickly, codes can be assigned to the means of transport: $1$ for bicycle, $2$ for bus, $3$ for train. These numbers are labels. Swapping codes $1$ and $3$ leaves the journeys unchanged, while the mean of the codes changes. With two journeys by bicycle and one by train the mean of the codes is
$$
\frac{1+1+3}{3}=\frac53,
$$
and with the codes swapped it becomes
$$
\frac{3+3+1}{3}=\frac73.
$$
The mean of the codes therefore depends on the coding chosen. The counts or proportions for each means of transport remain meaningful.
:::

## Frequencies and denominators

:::definizione{#frequenze titolo="Absolute and relative frequencies"}
The **absolute frequency** of a value or category is the number of times it occurs in the data. It is written $n_i$, where the index $i$ numbers the categories: $n_1$ for the first, $n_2$ for the second, and so on. The **total** $N$ is the number of all observations. The **relative frequency** $f_i$ is the absolute frequency divided by the total $N>0$, that is, the part of the total that has that value or category.

The categories are **disjoint**, meaning that no observation belongs to two categories, and **exhaustive**, meaning that every observation belongs to some category. With these two conditions each observation is counted exactly once.

The symbol $\sum$ (capital sigma, a Greek letter) denotes a sum. The expression $\sum_i n_i$ is read “sum of the $n_i$” and equals $n_1+n_2+\cdots$, up to the last category.

$$
N=\sum_i n_i,\qquad
f_i=\frac{n_i}{N},\qquad
\sum_i f_i=\frac{\sum_i n_i}{N}=1.
$$

A **percentage** is obtained by calculating $100f_i$ and appending the symbol $\%$. For example, $f_i=0.4$ corresponds to $40\%$. If the total is zero, no relative frequency can be calculated, because division by zero is undefined.

The **cumulative frequency** of a value is the number of observations less than or equal to that value. It is obtained by adding the frequency of that value and the frequencies of all the values before it. Cumulative frequencies make sense when the values have an order. We can ask how many students read at most two books or how many ratings were at least adequate. Means of transport, on the other hand, have no order, so listing bicycles or buses first would arbitrarily change the cumulative counts.
:::

:::esempio{titolo="Reading a frequency table"}
Twenty students recorded how many books they read in one month, so $N=20$. The count row shows that $8$ students read exactly two books. Their relative frequency is $\dfrac{8}{20}=0.4=40\%$. The cumulative row shows that $16$ students read at most two. The corresponding proportion is $\dfrac{16}{20}=80\%$.

| Books read | $0$ | $1$ | $2$ | $3$ |
|---|---:|---:|---:|---:|
| Absolute frequency | $3$ | $5$ | $8$ | $4$ |
| Relative frequency | $15\%$ | $25\%$ | $40\%$ | $20\%$ |
| Absolute cumulative frequency | $3$ | $8$ | $16$ | $20$ |

In the bar chart the horizontal axis shows the number $x$ of books, and the height of each bar is the number $n$ of students with that value.

::grafico{assi=0 xmin=-1.2 xmax=4.15 ymin=-1.3 ymax=10 vettori="-0.62,0,3.95,0;-0.62,0,-0.62,9.5" poligoni="-0.19,0 0.19,0 0.19,3 -0.19,3;0.81,0 1.19,0 1.19,5 0.81,5;1.81,0 2.19,0 2.19,8 1.81,8;2.81,0 3.19,0 3.19,4 2.81,4" etichette="-0.10,3.55,3;0.9,5.55,5;1.9,8.55,8;2.9,4.55,4;-0.1,-0.75,0;0.9,-0.75,1;1.9,-0.75,2;2.9,-0.75,3;3.78,-0.75,x;-0.93,9.45,n" titolo="$x$ is the number of books and $n$ the number of students with that value"}

The cumulative count grows by adding the count from the next column each time:
$$
\begin{aligned}
&\text{up to } 0: && 3,\\[3pt]
&\text{up to } 1: && 3+5=8,\\[3pt]
&\text{up to } 2: && 8+8=16,\\[3pt]
&\text{up to } 3: && 16+4=20.
\end{aligned}
$$
The cumulative count up to the value $x$ is written $N(x)$, so $N(1)=8$ and $N(2)=16$. If we were given only the cumulative row, the frequency for $2$ would be the difference $N(2)-N(1)=16-8=8$. The last cumulative count equals the total $N=20$.

In the second graph the cumulative count $N(x)$ stays constant between two observed values and rises with a jump at each of them. The height of the jump is the frequency of that value. The filled dot shows the value of the cumulative count at the jump, and the open dot the value the cumulative count had just before the jump.

::grafico{xmin=-0.55 xmax=4.2 ymin=-0.65 ymax=22 nomi="x,N(x)" linee="-0.48,0 0,0;0,3 1,3;1,8 2,8;2,16 3,16;3,20 3.9,20" punti="0,0,vuoto;0,3,pieno;1,3,vuoto;1,8,pieno;2,8,vuoto;2,16,pieno;3,16,vuoto;3,20,pieno" etichette="0.23,4.3,3;1.25,9.4,8;2.24,17.4,16;3.30,20.7,20" titolo="The jump at $x=2$ adds the students who read exactly two books"}
:::

:::osservazione
Two groups of students are compared:

- in the first group $9$ students out of $18$ cycle to school;
- in the second group $12$ students out of $30$ cycle to school.

The second group has more cyclists, because $12>9$. The proportions of cyclists, however, are
$$
\frac{9}{18}=\frac12=0.5,\qquad \frac{12}{30}=\frac25=0.4,
$$
so the proportion is higher in the first group. To compare how common cycling is in two groups of different sizes, the proportions are therefore compared, each calculated on the total of its own group.
:::

## Bar charts, pie charts, and scales

:::osservazione{#grafici titolo="Reading the vertical axis"}
A **bar chart** is a graph that draws a separate bar for each value or category. The values or categories lie along the horizontal axis. The height of the bar is the frequency of that value, absolute (a count) or relative (a proportion), and is read from the vertical axis. Before reading a height, one checks the label of the vertical axis, its unit, and the numerical distance between two ticks, that is, between two numbered marks on the axis. This check distinguishes a value of the variable, read on the horizontal axis, from the frequency with which it was observed, read on the vertical axis.
:::

:::esempio{titolo="The same data on two scales"}
A library lends $48$ books in one week and $54$ in the next. In the first graph $s$ is the week, $n$ the number of loans, and the vertical scale begins at zero. The comparison gives
$$
54-48=6\ \text{more loans},\qquad \frac{54}{48}=\frac{54\div6}{48\div6}=\frac98.
$$

::grafico{xmin=-0.3 xmax=3.3 ymin=0 ymax=60 nomi="s,n" poligoni="0.73,0 1.27,0 1.27,48 0.73,48;1.73,0 2.27,0 2.27,54 1.73,54" etichette="0.87,51,48;1.87,57,54" titolo="Number of loans in week $s$, with a zero baseline"}

In the second graph the vertical axis starts at $45$. Only the top parts of the two bars are visible:
$$
48-45=3,\qquad 54-45=9.
$$
The second visible portion is $\dfrac93=3$ times as high as the first, while the ratio of the counts is still $\dfrac98$. The second chart emphasises the gap because it devotes the same vertical space to a smaller interval of values.

::grafico{xmin=-0.3 xmax=3.3 ymin=45 ymax=56.5 nomi="s,n" poligoni="0.73,45 1.27,45 1.27,48 0.73,48;1.73,45 2.27,45 2.27,54 1.73,54" etichette="0.87,48.55,48;1.87,54.65,54" titolo="The same counts with the visible baseline at 45 loans"}
:::

:::esempio{titolo="From count to angle"}
A **pie chart** divides a circle into sectors, one for each value or category. A sector is the part of the circle between two radii. The angle of the sector is written $\alpha_i$ (alpha, a Greek letter) and equals
$$
\alpha_i=360^\circ\cdot f_i,
$$
because the full turn measures $360^\circ$ and each category takes up the same fraction of it as it has among the observations.

Forty students choose one of activities $A$, $B$, and $C$, with $20$, $10$, and $10$ votes.
$$
\begin{aligned}
A:&\quad f=\frac{20}{40}=\frac12, && \alpha=360^\circ\cdot\frac12=180^\circ,\\[5pt]
B:&\quad f=\frac{10}{40}=\frac14, && \alpha=360^\circ\cdot\frac14=90^\circ,\\[5pt]
C:&\quad f=\frac{10}{40}=\frac14, && \alpha=360^\circ\cdot\frac14=90^\circ.
\end{aligned}
$$
The three angles sum to $180^\circ+90^\circ+90^\circ=360^\circ$, a full turn. In the graph $A$ takes up the upper half of the circle, and $B$ and $C$ one quarter each in the lower half.

::grafico{assi=0 uguale=1 xmin=-1.3 xmax=1.3 ymin=-1.22 ymax=1.22 curve="cos(t),sin(t),0,6.2832" poligoni="-1,0 -0.966,0.259 -0.866,0.5 -0.707,0.707 -0.5,0.866 -0.259,0.966 0,1 0.259,0.966 0.5,0.866 0.707,0.707 0.866,0.5 0.966,0.259 1,0" linee="-1,0 1,0;0,0 0,-1" etichette="-0.25,0.43,A 180°;-0.65,-0.45,B 90°;0.18,-0.45,C 90°" titolo="Each sector angle is proportional to the number of votes"}
:::

## Classes and histograms

:::definizione{#istogrammi titolo="Why rectangle area matters"}
A continuous variable, such as a duration, takes many different values. To summarise them, they are grouped into **classes**, that is, intervals of consecutive values. The notation $[a_i,b_i)$ denotes the values $x$ with $a_i\le x<b_i$. The sign $[$ shows that the endpoint $a_i$ is included, and the sign $)$ shows that the endpoint $b_i$ is excluded. For example, the class $[0,3)$ contains $0$ and $2.9$, while the value $3$ belongs to the next class $[3,9)$. This convention assigns each boundary value to only one class.

A **histogram** represents the classes with adjacent rectangles. The base of each rectangle is the **width** of the class, that is, the difference $h_i=b_i-a_i$ between its two endpoints. The number $n_i$ of observations in the class is represented by the **area** of the rectangle. Area is base times height, so the height is the **absolute frequency density** $d_i$, that is, the number of observations per unit of width.

$$
h_i d_i=n_i,\qquad d_i=\frac{n_i}{h_i}.
$$

If width is measured in minutes, density is measured in observations per minute. The product of minutes and observations per minute is therefore a count. A relative density histogram can also be drawn, using $\dfrac{f_i}{h_i}$ as height. In that case the area of each rectangle is the relative frequency of the class, so the areas sum to one.
:::

:::esempio{titolo="The tallest rectangle and the largest class"}
We record $30$ waiting times in minutes. A time of $3$ belongs in the second class, because the first class $[0,3)$ excludes $3$.

| Duration (min) | Width (min) | Waits | Density (waits/min) |
|---|---:|---:|---:|
| $[0,3)$ | $3$ | $12$ | $4$ |
| $[3,9)$ | $6$ | $18$ | $3$ |

The heights of the rectangles are the densities, found by dividing the waits by the width:
$$
d_1=\frac{12}{3}=4,\qquad d_2=\frac{18}{6}=3.
$$

::grafico{xmin=-0.8 xmax=10.2 ymin=-0.35 ymax=5.45 nomi="t,d" poligoni="0,0 3,0 3,4 0,4;3,0 9,0 9,3 3,3" linee="0,4 3,4 3,0;3,3 9,3 9,0" etichette="0.74,2.18,12 waits;4.55,1.48,18 waits" titolo="$t$ is measured in minutes and $d$ in waits per minute"}

The rectangle on the left is taller but has area $3\cdot4=12$. The one on the right has area $6\cdot3=18$, so it represents more waits. The largest class is the second, even though its rectangle is lower.

Using counts as heights would give areas $3\cdot12=36$ and $6\cdot18=108$. The visible ratio would be $\dfrac{108}{36}=3$, while the correct ratio of the waits is $\dfrac{18}{12}=1.5$. With equal widths, comparing heights or areas would give the same ratio, because the equal widths cancel.
:::

:::osservazione{titolo="Thresholds at boundaries and within classes"}
The table shows that exactly $12$ waits last less than three minutes, because the threshold $3$ coincides with the boundary between the two classes. The threshold of five minutes, on the other hand, lies inside the second class $[3,9)$. The $12$ waits in the first class certainly last less than five minutes. Of the $18$ waits in the second class, anywhere from none to all of them may last less than five minutes. Without the individual values, the count could therefore range from $12$ to $12+18=30$. The histogram groups the observations, and each rectangle, equally tall across its class, represents the density of its class as a whole.

The total waiting time also depends on the values within each class. The lists $1,1,4,4$ and $2,2,8,8$ would give the same histogram using the two classes in the table, because each class would contain two waits. Their means, however, would be
$$
\frac{1+1+4+4}{4}=\frac{10}{4},\qquad \frac{2+2+8+8}{4}=\frac{20}{4}
$$
minutes. If only the class frequencies have been kept, the exact mean may have been lost.
:::


## Arithmetic and weighted means

::::teorema{#media titolo="From the sum of the values to the mean"}
The **arithmetic mean** of $N>0$ numerical observations is their sum divided by $N$. The observations are written $x_1,x_2,\ldots,x_N$ and the mean $\bar x$, read “$x$ bar”. For the data $3,5,10$ the mean is $\bar x=\dfrac{3+5+10}{3}=\dfrac{18}{3}=6$.

When a value is repeated, the sum can be shortened with a multiplication. For the data $2,2,2,5$ the sum $2+2+2+5$ equals $2\cdot3+5\cdot1=11$. In a frequency table each distinct value $v_i$ comes with its frequency $n_i$, and the value contributes the product $v_i n_i$ to the sum. The resulting calculation is called a **weighted mean**, because each value counts as much as its frequency, also called its weight.

$$
\bar x=\frac{x_1+\cdots+x_N}{N}
=\frac{\sum_i v_i n_i}{\sum_i n_i}.
$$

:::dimostrazione
The **summands** are the numbers being added. In the sum $x_1+\cdots+x_N$ the value $v_i$ occurs in $n_i$ summands.

Grouping these equal summands, the value $v_i$ contributes $v_i n_i$ to the sum.

Adding the contributions of all the distinct values gives the numerator $\sum_i v_i n_i$.

Each observation is counted in exactly one frequency, so the number of summands is $\sum_i n_i=N$.

The numerator and denominator are therefore the same as if the full list had been used, so the two fractions are equal.
:::
::::

:::esempio{titolo="The mean as a balance point"}
The data $1,1,4,4,4,7$ contain the value $1$ twice, the value $4$ three times, and the value $7$ once. The weighted mean is
$$
\bar x=\frac{1\cdot2+4\cdot3+7\cdot1}{6}=\frac{2+12+7}{6}=\frac{21}{6}=\frac72=3.5.
$$
The result lies between the minimum $1$ and the maximum $7$, although it does not occur in the observations.

The **deviation** of an observation from the mean is the difference between the observation and the mean. If the values are positions on the number line, the deviations measure the distances from $3.5$, with a minus sign on the left.

- To the left of $3.5$ there are the two observations equal to $1$, each at distance $2.5$. Their contribution is $2\cdot2.5=5$.
- To the right there are the three observations equal to $4$, at distance $0.5$, and the observation $7$, at distance $3.5$. The contributions are $3\cdot0.5=1.5$ and $3.5$, with sum $5$.

The two contributions are equal, so the sum of the deviations is $-5+5=0$. In the plot each point is one observation and the dashed line marks the mean.

::grafico{xmin=-0.7 xmax=8.2 ymin=-0.4 ymax=4.2 nomi="x," punti="1,1;1,2;4,1;4,2;4,3;7,1" segmenti="3.5,0,3.5,3.35" etichette="2.55,3.55,3.5" titolo="Each point is one observation. The distances to the right and left of $3.5$ balance."}
:::

:::esempio{titolo="Combining two groups"}
Eight children take an average of $12$ minutes to reach a sports ground, and another twelve take an average of $7$ minutes. The groups are disjoint, meaning that no child belongs to both. Multiplying each mean by the number of children in the group gives the total travel times:
$$
\begin{aligned}
\text{first group:}&\quad 8\cdot12=96\ \text{minutes},\\[5pt]
\text{second group:}&\quad 12\cdot7=84\ \text{minutes},\\[5pt]
\text{everyone:}&\quad \frac{96+84}{8+12}=\frac{180}{20}=9\ \text{minutes}.
\end{aligned}
$$
The simple mean of the two means, $\dfrac{12+7}{2}=9.5$, would give each group the same weight, whereas the second group contains more observations. This is why the combined mean is closer to $7$.
:::

:::osservazione
Multiplying both sides of $\bar x=\dfrac{\sum_i x_i}{N}$ by $N$ gives $N\bar x=\sum_i x_i$. This equality is an **identity**, meaning that it holds for any set of data. With it, the sum can be recovered from the mean when a value is missing. If three values have mean $10$, their sum is $3\cdot10=30$. If two of them add up to $18$, the third is $30-18=12$.

The identity also shows that the deviations from the mean add up to zero:
$$
\sum_i (x_i-\bar x)=\sum_i x_i-N\bar x=0.
$$

If $b$ is added to every value, each of the $N$ summands increases by $b$. The sum therefore increases by $Nb$ and the mean increases by $b$. If every value is multiplied by $a$, the sum is also multiplied by $a$, and so is the mean. The data $2,5,11$ have mean $6$. Adding $3$ to each value gives $5,8,14$, with mean $\dfrac{27}{3}=9=6+3$. Doubling each value gives $4,10,22$, with mean $\dfrac{36}{3}=12=2\cdot6$.

If every value lies between a minimum $m$ and a maximum $M$, each of the $N$ summands lies between $m$ and $M$. The sum therefore lies between $Nm$ and $NM$. Dividing by $N>0$ gives $m\le \bar x\le M$. The mean therefore lies within the interval spanned by the data, and a result outside that interval signals a calculation error, such as a wrong denominator.
:::

## Median and mode

:::definizione{#mediana-moda titolo="Central position and highest frequency"}
The **median** of numerical data is the value in the central position when the data are sorted in increasing order. It is written $\operatorname{Med}$. Repetitions are counted in the ordering, so in the data $4,4,6$ the value $4$ occupies the first and second positions. The value in position $k$ is written $x_{(k)}$.

- If the number of data is odd, $N=2k+1$, take the value at position $k+1$. With $5$ data, $k=2$ and the central position is the third: the data $3,8,5,1,9$, sorted, become $1,3,5,8,9$, and the median is $5$.
- If the number of data is even, $N=2k>0$, take the mean of the values in positions $k$ and $k+1$. With $6$ data, $k=3$ and the central positions are the third and the fourth.

A frequency table can locate these positions using cumulative counts. A value with frequency $n$, preceded by a cumulative count $c$, occupies positions $c+1$ to $c+n$.

A **mode** is a value or category with maximum frequency, that is, one that occurs more often than any other. Several values or categories are modes if they share the same maximum frequency. A mode can also be found for categorical variables, because it requires only comparing counts: if $5$ students cycle, $8$ take the bus, and $2$ take the train, the mode is the bus.
:::

:::esempio{titolo="A median between two values and two modes"}
The data $2,2,4,7,7,9$ have six observations, so $N=6=2\cdot3$ and the central positions are the third and the fourth. The positions are read from the cumulative counts:

- the value $2$ has cumulative count $2$ and occupies the first and second positions;
- the cumulative count goes from $2$ to $3$ at $4$, so $4$ is the third value;
- the value $7$ occupies positions four and five, so the fourth value is $7$;
- the value $9$ occupies the sixth position.

The median is
$$
\operatorname{Med}=\frac{x_{(3)}+x_{(4)}}{2}=\frac{4+7}{2}=5.5.
$$
The maximum frequency is two, attained by the values $2$ and $7$, so the data have two modes.

::grafico{xmin=-0.7 xmax=10.2 ymin=-0.4 ymax=3.4 nomi="x," punti="2,1;2,2;4,1;7,1;7,2;9,1" segmenti="5.5,0,5.5,2.2" etichette="4.64,2.43,5.5" titolo="The two central values are $4$ and $7$, on either side of the median"}

Now the value $9$ is replaced with $21$. The value $21$ still occupies the sixth position, so the two central values and the two highest frequencies are unchanged, and so are the median and the modes. The sum of the data, however, increases by $21-9=12$, so the mean increases by $\dfrac{21-9}{6}=2$. An extreme value can therefore change the mean much more than the median when its position in the ordering remains the same.
:::

## Spread and extremes

:::definizione{#dispersione titolo="Range"}
The **spread** of a set of data indicates how scattered the values are, that is, how far apart they are. The **range**, written $R$, is the maximum minus the minimum: for the data $3,8,5$ it is $R=8-3=5$. It is expressed in the same unit as the data, so for times in minutes it is in minutes.

The range depends on only two observations, the minimum and the maximum. Therefore it changes immediately when an extreme moves and can stay the same when the values in between change. The data $3,4,8$ and $3,7,8$ both have $R=8-3=5$.
:::

:::esempio{titolo="Same mean, different spread"}
The data $6,7,8$ and $2,7,12$ both have mean and median $7$. The first group lies within an interval of width $8-6=2$, and the second occupies an interval of width $12-2=10$. The two rows in the plot share a single value axis, so their distances are comparable, and the dashed line marks the common centre $7$.

::grafico{xmin=-0.8 xmax=13.2 ymin=-0.35 ymax=3.3 nomi="x," punti="6,2;7,2;8,2;2,1;7,1;12,1" linee="6,2 8,2;2,1 12,1" segmenti="7,0,7,2.6" etichette="2.55,2.2,first;2.55,1.2,second;6.47,2.77,7" titolo="The dashed line marks a common centre for two different ranges"}

Conversely, $2,3,3,3,12$ and $2,7,10,11,12$ have the same range $12-2=10$ but medians $3$ and $10$. A set of data is therefore better described by a central value together with a measure of spread and, when possible, by the data themselves or their plot.
:::

## How data are collected

:::osservazione{#rilevazione titolo="Who can enter the sample"}
The place where data are collected decides who can enter the sample. A travel survey conducted only next to the school bicycle rack reaches cyclists more easily. If more interviews are conducted at the same spot, most of the people interviewed are still cyclists, so that preference in selection stays in place. To describe the whole school, a group of students can be selected from the class lists and students who travel in other ways can also be contacted.

The timing of collection also influences the data. If the aim is to estimate how many students usually walk, a rainy day describes only the journeys on that day. Collecting data on several days, under different weather conditions, answers the question about usual behaviour. Finally, the survey question offers an answer to every student when it includes all relevant answers, for example when it distinguishes “bus only” from “bus and train”.
:::

:::esempio{titolo="Valid responses and missing responses"}
Of $50$ students invited to take a survey, $32$ respond and $50-32=18$ do not. The **response rate** is the proportion of invitees who responded, that is, $\dfrac{32}{50}=64\%$. Of the respondents, $16$ report walking to school. The $50\%$ is therefore the proportion among respondents, because
$$
\frac{16}{32}=\frac12=50\%
$$
has denominator $32$. For the $18$ non-respondents the means of transport is unknown, so among all invitees only two bounds are known:
$$
\begin{aligned}
\text{no non-respondent walks:}&\quad \frac{16}{50}=32\%,\\[5pt]
\text{all non-respondents walk:}&\quad \frac{16+18}{50}=\frac{34}{50}=68\%.
\end{aligned}
$$
In the graph the rectangle represents the $50$ invitees: on the left the $32$ responses, split into $16$ walking and $16$ by other means, on the right the $18$ non-respondents.

::grafico{assi=0 xmin=-1.0 xmax=51.0 ymin=-0.35 ymax=3.65 linee="0,0 50,0 50,2 0,2 0,0;16,0 16,2;32,0 32,2" poligoni="0,0 16,0 16,2 0,2" etichette="3.4,0.95,16 walk;18.0,0.95,16 other;34.1,0.97,18 missing;1.1,2.65,32 responses;34.1,2.65,non-responses" titolo="The students who responded are the only ones whose means of transport is known"}
:::

:::osservazione{#controlli titolo="Which question the summary can answer"}
The same set of data is summarised in different ways depending on the question.

- To plan seats on a bus, what counts is the number of students who take it, that is, an absolute frequency.
- To compare how common the bus is in two schools with different numbers of students, the proportions are used, that is, the relative frequencies.
- To describe a typical journey time, the median is compared with the mean, and one checks whether a few very long journeys explain the difference.

The denominator, the unit, and how the observations were collected are read alongside the result.
:::
