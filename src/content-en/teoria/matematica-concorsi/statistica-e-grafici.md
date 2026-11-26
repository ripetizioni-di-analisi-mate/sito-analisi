---
titolo: Averages, tables, and graphs
sommario: How to count and summarize data using frequencies, the mean, the median, the mode, and measures of variability. How the mean changes when a value is added or removed, and how to read two-way tables, bar charts, histograms, pie charts, and line graphs.
---

## Data and frequencies

:::definizione{#dati-e-caratteri titolo="Data and variables"}
A statistical study collects information about a group of people or objects called a **population**. The characteristic observed for each member is called a **variable**, and the value observed is a **data value**, or a category for categorical data. A variable is *quantitative* if its values are numbers, such as age or household size, and *qualitative* if its values are labels, such as favorite color or level of education. This distinction has a practical consequence. The mean can be calculated only for a quantitative variable, while the mode can be found for either type.
:::

:::definizione{#frequenza-assoluta titolo="Absolute frequency"}
The **absolute frequency** of a value is the number of times it occurs. The frequencies can be recorded in a table, and their sum is the total number $N$ of observations. In a survey of $20$ households, the number of people in each household was recorded:

| Household size | $1$ | $2$ | $3$ | $4$ | $5$ | Total |
|---|---|---|---|---|---|---|
| Households | $6$ | $5$ | $4$ | $3$ | $2$ | $20$ |

The absolute frequency of the value $3$ is $4$, meaning that $4$ households have three members. As a check, $6 + 5 + 4 + 3 + 2 = 20$.
:::

:::definizione{#frequenza-relativa titolo="Relative frequency and percentage frequency"}
The **relative frequency** of a value is the ratio of its absolute frequency to the total $N$:
$$
f = \frac{\text{absolute frequency}}{N} .
$$
Multiplying this ratio by $100$ gives the **percentage frequency**. Relative frequencies allow us to compare groups of different sizes. In the household table, the value $1$ has relative frequency $\dfrac{6}{20} = 0.3$, or $30\%$. The value $2$ has relative frequency $\dfrac{5}{20} = 0.25$, or $25\%$. The relative frequencies of all the values add up to $1$, and their percentage frequencies add up to $100\%$.
:::

:::definizione{#frequenze-cumulate titolo="Cumulative frequencies"}
For a quantitative variable, the **cumulative frequency** of a value is the sum of the frequencies of that value and all smaller values. It answers questions such as “How many have *at most* this many?” For the households, the cumulative frequencies are
$$
6, \qquad 6 + 5 = 11, \qquad 11 + 4 = 15, \qquad 15 + 3 = 18, \qquad 18 + 2 = 20 .
$$
Thus $15$ of the $20$ households, or $75\%$, have at most three members. The remaining households, $20 - 15 = 5$, have *at least* four members.

::grafico{linee="0,0 1,0 1,6 2,6 2,11 3,11 3,15 4,15 4,18 5,18 5,20 6,20" punti="1,6,pieno;2,11,pieno;3,15,pieno;4,18,pieno;5,20,pieno" etichette="1.25,7.6,6;2.25,12.6,11;3.25,16.6,15;4.25,19.6,18;5.25,21.6,20" xmin=0 xmax=7 ymin=0 ymax=23 nomi="x,F" legenda=0 titolo="Cumulative frequency $F$ for the $20$ households as a function of household size $x$. At each size, the cumulative frequency increases by the frequency of that size"}

:::

## Arithmetic mean and weighted mean

:::definizione{#media-aritmetica titolo="Arithmetic mean"}
The **arithmetic mean** of $n$ numbers $x_1, x_2, \ldots, x_n$ is their sum divided by $n$:
$$
\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n} .
$$
The mean is the value each observation would have if they all had the same value and their sum stayed the same. The scores $6$, $7$, $7$, $8$, $9$, and $5$ add up to $42$, so their mean is $\dfrac{42}{6} = 7$. Six scores all equal to $7$ have the same sum, $42$. The mean always lies between the smallest and largest values, which provides an initial check on the result.

::grafico{poligoni="0.7,0 0.7,6 1.3,6 1.3,0;1.7,0 1.7,7 2.3,7 2.3,0;2.7,0 2.7,7 3.3,7 3.3,0;3.7,0 3.7,8 4.3,8 4.3,0;4.7,0 4.7,9 5.3,9 5.3,0;5.7,0 5.7,5 6.3,5 6.3,0" segmenti="0.4,7,6.6,7" etichette="6.9,7.5,mean 7" xmin=0 xmax=7.6 ymin=0 ymax=10 nomi="i,voto" legenda=0 titolo="The six scores $6$, $7$, $7$, $8$, $9$, and $5$ and their mean $\bar{x} = 7$. The portions of the bars above the dashed line balance the shortfalls below it"}

:::

:::definizione{#media-ponderata titolo="Weighted mean"}
When the values do not all have the same importance, assign each value $x_i$ a **weight** $p_i$ and calculate the **weighted mean**
$$
\bar{x} = \frac{x_1 \cdot p_1 + x_2 \cdot p_2 + \cdots + x_n \cdot p_n}{p_1 + p_2 + \cdots + p_n} .
$$
Divide by the sum of the weights rather than the number of observations. A student passed four exams with grades of $24$, $28$, $30$, and $26$, worth $6$, $9$, $6$, and $9$ credits, respectively. The credit-weighted mean is
$$
\frac{24 \cdot 6 + 28 \cdot 9 + 30 \cdot 6 + 26 \cdot 9}{6 + 9 + 6 + 9} = \frac{810}{30} = 27 .
$$
The weighted mean can also be used for data in a frequency table, in which case the frequencies are the weights.
:::

:::esempio{titolo="Finding the mean from a frequency table"}
In the table of $20$ households, multiply each household size by its frequency:
$$
\bar{x} = \frac{1 \cdot 6 + 2 \cdot 5 + 3 \cdot 4 + 4 \cdot 3 + 5 \cdot 2}{20} = \frac{50}{20} = 2.5 .
$$
The mean household size is therefore $2.5$ people. The mean of a variable that takes only integer values can be a decimal because it describes the group as a whole rather than an individual household.
:::

:::attenzione{#media-di-gruppi}
The mean of two groups combined is generally *not* the simple mean of the group means. In a class of $20$ students the mean is $6$, and in another class of $30$ students the mean is $7$. The mean for all $50$ students is the weighted mean with weights $20$ and $30$:
$$
\frac{6 \cdot 20 + 7 \cdot 30}{50} = \frac{330}{50} = 6.6 .
$$
For these two means, their simple mean, $6.5$, would be correct only if the groups were the same size. The overall mean is closer to the mean of the larger group.
:::

## Median and mode

:::definizione{#mediana titolo="Median"}
The **median** of a set of numerical data is the middle value when the data are arranged in increasing order.

- If the number of observations $n$ is odd, the median is the value in the middle position $\dfrac{n + 1}{2}$. In increasing order, the values $3$, $8$, $5$, $12$, and $4$ become $3$, $4$, $5$, $8$, and $12$, so the median is $5$.
- If $n$ is even, there are two middle values, and the median is their mean. In increasing order, the values $2$, $9$, $4$, and $7$ become $2$, $4$, $7$, and $9$, so the median is $\dfrac{4 + 7}{2} = 5.5$.

The median divides the data in half in the sense that at least half the observations are less than or equal to it and at least half are greater than or equal to it. In the table of $20$ households, the middle observations are the tenth and eleventh. The cumulative frequencies $6$ and $11$ show that both equal $2$, so the median is $2$.
:::

:::definizione{#moda titolo="Mode"}
The **mode** is the value with the highest frequency. A qualitative variable can also have a mode. For example, if the most common answer in a survey about transportation is the bus, the mode is “bus.” In the household table, the mode is $1$ because $6$ is the highest frequency. A data set can have more than one mode if two or more values are tied for the highest frequency. The mode is a data value and is distinct from its frequency. In the household example, the mode is $1$, while $6$ is the number of one-person households.
:::

:::osservazione{#valori-anomali titolo="Mean and median in the presence of an outlier"}
The mean depends on every observation, including a value far from the others. The median depends only on which values occupy the middle positions. In a small office, the monthly salaries are $1500$, $1600$, $1700$, $1800$, and $9400$ euros. The mean is
$$
\frac{1500 + 1600 + 1700 + 1800 + 9400}{5} = \frac{16\,000}{5} = 3200 \text{ euros},
$$
whereas the median is $1700$ euros. Four of the five salaries are below the mean, so in this case the median better describes a typical salary. In questions comparing the mean and median, a sufficiently large outlier pulls the mean above the median, and a sufficiently small outlier pulls it below.

::grafico{poligoni="0.7,0 0.7,1500 1.3,1500 1.3,0;1.7,0 1.7,1600 2.3,1600 2.3,0;2.7,0 2.7,1700 3.3,1700 3.3,0;3.7,0 3.7,1800 4.3,1800 4.3,0;4.7,0 4.7,9400 5.3,9400 5.3,0" segmenti="0.4,3200,5.6,3200;0.4,1700,5.6,1700" etichette="3,3700,mean 3200;3,2200,median 1700" xmin=0 xmax=6.2 ymin=0 ymax=9600 nomi="i,€" legenda=0 titolo="The five salaries in euros. The value $9400$ raises the mean to $3200$, while the median stays at $1700$"}

:::

## How the mean changes

:::teorema{#somma-dei-dati titolo="Sum of the values and the mean"}
If $n$ values have mean $\bar{x}$, their sum is
$$
x_1 + x_2 + \cdots + x_n = n \cdot \bar{x} .
$$
The formula follows by multiplying both sides of the definition of the mean by $n$. It applies whenever a value is added, removed, or missing, since adding or removing a value changes the sum by exactly that amount. If $8$ packages have a mean weight of $15$ kg, their total weight is $8 \cdot 15 = 120$ kg.
:::

:::esempio{#aggiungere-un-dato titolo="Adding or removing a value"}
Ten observations have mean $20$, so their sum is $10 \cdot 20 = 200$. Adding the value $31$ brings the sum to $231$ and the number of observations to $11$, so the new mean is
$$
\frac{231}{11} = 21 .
$$
Similarly, five observations with mean $12$ have sum $60$. Removing $20$ leaves four observations with sum $40$ and mean $10$. Adding a value above the mean raises the mean, and removing such a value lowers it. Adding or removing a value equal to the mean leaves the mean unchanged.
:::

:::esempio{#dato-mancante titolo="Finding a missing value"}
A student scored $5$, $6$, and $7$ on the first three tests and wants a mean of $6.5$ on all four. The sum of the four scores must be
$$
4 \cdot 6.5 = 26 ,
$$
and the first three scores add up to $18$, so the fourth score must be $26 - 18 = 8$. In general, subtract the sum of the known values from the required total, which is the number of observations times the target mean, to find the missing value.
:::

:::teorema{#trasformazioni-dei-dati titolo="Mean of transformed data"}
If the same number $k$ is added to every observation, the mean increases by $k$. If every observation is multiplied by the same number $k$, the mean is also multiplied by $k$. In the first case the sum increases by $n \cdot k$, so after division by $n$ the mean increases by $k$. In the second case the sum is multiplied by $k$. The values $5$, $7$, $8$, $9$, and $11$ have mean $8$. Adding $10$ gives $15$, $17$, $18$, $19$, and $21$, with mean $18$. Multiplying the original values by $3$ gives $15$, $21$, $24$, $27$, and $33$, with mean $24$. Increasing every value by the same percentage amounts to multiplying by a common factor. Thus if the mean salary is $2000$ euros and everyone receives a $10\%$ raise, the new mean is $2000 \cdot 1.1 = 2200$ euros.
:::

## Measures of variability

:::definizione{#campo-di-variazione titolo="Range"}
Two data sets can have the same mean yet differ considerably. For example, the sets $7$, $7$, $7$ and $1$, $7$, $13$ both have a mean of $7$. Measures of variability describe how spread out the data are. The simplest is the **range**, the difference between the largest and smallest values. If the daily high temperatures in a week range from $9$ °C to $20$ °C, the range is $20 - 9 = 11$ °C. Because the range depends on only two values, a single outlier can make it very large.
:::

:::definizione{#varianza titolo="Variance and standard deviation"}
The **deviation** of a value from the mean is the difference $x_i - \bar{x}$. The deviations always sum to zero because positive and negative deviations cancel. This is why we use their squares. The **population variance** is the mean of the squared deviations,
$$
\sigma^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + \cdots + (x_n - \bar{x})^2}{n} ,
$$
and the **standard deviation** (the root mean square of the deviations) is its square root, $\sigma = \sqrt{\sigma^2}$. It has the same units as the data. For the values $5$, $7$, $8$, $9$, and $11$, with mean $8$, the deviations are $-3$, $-1$, $0$, $1$, and $3$, and their squares are $9$, $1$, $0$, $1$, and $9$. Therefore
$$
\sigma^2 = \frac{20}{5} = 4, \qquad \sigma = 2 .
$$
A small standard deviation indicates that the data are clustered close to the mean.

::grafico{punti="1,5,pieno;2,7,pieno;3,8,pieno;4,9,pieno;5,11,pieno" segmenti="0.5,8,5.5,8;1,5,1,8;2,7,2,8;4,9,4,8;5,11,5,8" etichette="5.6,8.6,mean 8;1.2,6.5,-3;2.2,7.5,-1;4.2,8.5,1;5.2,9.5,3" xmin=0 xmax=6.8 ymin=0 ymax=12 nomi="i,x" legenda=0 titolo="The values $5$, $7$, $8$, $9$, and $11$ and their deviations from the mean $8$. The vertical segments show the signed differences $-3$, $-1$, $0$, $1$, and $3$"}

:::

:::osservazione{#variabilita-e-trasformazioni titolo="Variability of transformed data"}
Adding the same number to every observation leaves the deviations from the mean unchanged, so the variance and standard deviation stay the same. Multiplying all the observations by $k > 0$ multiplies their deviations by $k$, so the standard deviation is multiplied by $k$ and the variance by $k^2$. The values $5$, $7$, $8$, $9$, and $11$ each increase by $10$, and the standard deviation remains $\sigma = 2$. Multiplying the original values by $3$ gives $\sigma = 6$ and $\sigma^2 = 36$.
:::

## Two-way tables

:::definizione{#tabella-doppia-entrata titolo="Two-way tables"}
A **two-way table** displays frequencies for two variables observed together. The rows represent the values of one variable and the columns represent those of the other. Each cell gives the number of observations with both values. The last row and column contain the **marginal totals**. The following table records the sex and employment status of $120$ employees at a company:

| | Men | Women | Total |
|---|---|---|---|
| Full-time | $42$ | $48$ | $90$ |
| Part-time | $18$ | $12$ | $30$ |
| Total | $60$ | $60$ | $120$ |

Each row total is the sum of its cells, and the same holds for each column. If the total and all but one of the cells in a row are known, subtract the sum of the known cells from the total to find the missing cell.

::grafico{poligoni="0.6,0 0.6,42 1,42 1,0;1,0 1,48 1.4,48 1.4,0;2,0 2,18 2.4,18 2.4,0;2.4,0 2.4,12 2.8,12 2.8,0" etichette="0.8,45,M;1.2,51,W;2.2,21,M;2.6,15,W;1,-6,full-time;2.4,-6,part-time" xmin=0 xmax=3.4 ymin=0 ymax=56 nomi="c,n" legenda=0 titolo="Employees by employment status and sex (M for men, W for women). The full-time counts are $42$ and $48$, and the part-time counts are $18$ and $12$"}

:::

:::osservazione{#percentuali-di-riga-e-colonna titolo="Percentages with different reference totals"}
The same cell gives different percentages depending on which total is used as the denominator. In the employee table, the cell for men working part-time contains $18$.

- Relative to the total number of men, the proportion is $\dfrac{18}{60} = 30\%$, so $30\%$ of the men work part-time.
- Relative to the total number of part-time employees, the proportion is $\dfrac{18}{30} = 60\%$, so $60\%$ of part-time employees are men.
- Relative to all employees, the proportion is $\dfrac{18}{120} = 15\%$, so $15\%$ of all employees are men working part-time.

Phrases such as “among,” “of the,” or “out of all” identify the reference group. In “the percentage of men *among* part-time employees,” the reference total is the number of part-time employees, $30$.
:::

## Statistical graphs

:::definizione{#diagramma-a-barre titolo="Bar charts"}
In a **bar chart**, each value is represented by a bar whose height equals its frequency. The bars have equal widths and gaps between them. Bar charts are used for qualitative variables or quantitative variables with only a few distinct values. Read frequencies on the vertical axis. The tallest bar identifies the mode.

::grafico{poligoni="0.7,0 0.7,6 1.3,6 1.3,0;1.7,0 1.7,5 2.3,5 2.3,0;2.7,0 2.7,4 3.3,4 3.3,0;3.7,0 3.7,3 4.3,3 4.3,0;4.7,0 4.7,2 5.3,2 5.3,0" xmin=0 xmax=6 ymin=0 ymax=7 nomi="x,n" legenda=0 titolo="Number $n$ of households with $x$ members out of $20$ households. The tallest bar identifies the mode, a household size of $1$"}

:::

:::definizione{#istogramma titolo="Histograms"}
When a quantitative variable has many values, the observations are grouped into **classes**, or intervals such as “ages $20$ to $30$.” A **histogram** represents each class with a rectangle whose base spans the interval. For classes of equal width, the height represents the class frequency, and adjacent rectangles touch. The histogram shows the ages of the $50$ participants in a course in classes $10$ years wide. By convention, each class includes its left endpoint and excludes its right endpoint.

::grafico{poligoni="20,0 20,10 30,10 30,0;30,0 30,16 40,16 40,0;40,0 40,12 50,12 50,0;50,0 50,8 60,8 60,0;60,0 60,4 70,4 70,0" xmin=0 xmax=91 ymin=0 ymax=18 nomi="età,n" legenda=0 titolo="Number $n$ of participants by age group, out of $50$ participants. There are $10$ from $20$ to under $30$ years old, $16$ from $30$ to under $40$, $12$ from $40$ to under $50$, $8$ from $50$ to under $60$, and $4$ from $60$ to under $70$"}

Among those aged $40$ or older, there are $12 + 8 + 4 = 24$ participants, or $\dfrac{24}{50} = 48\%$ of the total. Grouped data do not give an exact mean. To estimate it, use the midpoint of each class as its representative value:
$$
\frac{25 \cdot 10 + 35 \cdot 16 + 45 \cdot 12 + 55 \cdot 8 + 65 \cdot 4}{50} = \frac{2050}{50} = 41 .
$$
:::

:::definizione{#diagramma-a-torta titolo="Pie charts"}
In a **pie chart** (or circle graph), a circle is divided into sectors, one for each value, with angles proportional to the frequencies. Since a full circle measures $360°$, each sector's angle is
$$
\text{angle} = \frac{\text{frequency}}{\text{total}} \cdot 360° .
$$
Each percentage point therefore corresponds to $3.6°$. For the $20$ households, the sectors measure $\dfrac{6}{20} \cdot 360° = 108°$, followed by $90°$, $72°$, $54°$, and $36°$. Their angles sum to $360°$. Reversing the calculation gives the frequency from an angle. A sector of $72°$ corresponds to $\dfrac{72}{360} = \dfrac{1}{5}$, or $20\%$ of the total.

::grafico{assi=0 uguale=1 curve="3*cos(t),3*sin(t),0,6.29" segmenti="0,0,0,3;0,0,2.853,-0.927;0,0,-0.927,-2.853;0,0,-3,0;0,0,-1.763,2.427" etichette="0.81,1.05,x = 1, 108°;0.19,-1.84,x = 2, 90°;-2.28,-1.25,x = 3, 72°;-2.44,0.79,x = 4, 54°;-1.30,1.75,x = 5, 36°" xmin=-3.4 xmax=3.4 ymin=-3.4 ymax=3.4 legenda=0 titolo="Pie chart for the $20$ households by household size $x$. A value with frequency $f$ has a sector measuring $\dfrac{f}{20} \cdot 360°$"}

:::

:::definizione{#diagramma-cartesiano titolo="Line graphs"}
A **line graph** plots values on a Cartesian coordinate plane to show how a quantity changes over time. Time is plotted on the horizontal axis, the quantity on the vertical axis, and consecutive points are joined by line segments. An upward segment indicates an increase and a downward segment a decrease. The slope indicates how much the quantity changes per unit of time. The graph shows the cases processed by an office in the first six months of the year.

::grafico{linee="1,80 2,100 3,90 4,120 5,150 6,120" punti="1,80,pieno;2,100,pieno;3,90,pieno;4,120,pieno;5,150,pieno;6,120,pieno" etichette="0.8,87,80;1.8,107,100;2.8,97,90;3.8,127,120;4.8,157,150;5.8,127,120" xmin=0 xmax=7 ymin=0 ymax=200 nomi="t,n" legenda=0 titolo="Number $n$ of cases processed in month $t$, from January ($t = 1$) through June ($t = 6$)"}

From March to April and from April to May, the increase is the same, $30$ cases. The percent changes differ because they are calculated using different starting values. The increase is $\dfrac{30}{90} \cdot 100\% \approx 33.3\%$ from March to April and $\dfrac{30}{120} \cdot 100\% = 25\%$ from April to May. For more on percent change, see the topic on ratios, proportions, and percentages.
:::

:::attenzione
On a line graph with equal time intervals, the steepest segment shows the greatest *absolute* change, which need not be the greatest percent change. On the case-processing graph, the segments from March to April and from April to May both rise by $30$. The first increase is greater in percentage terms because it starts from a lower value. Similarly, an increase of $10$ from a starting value of $20$ is $50\%$, while an increase of $30$ from a starting value of $150$ is $20\%$.
:::

## Shortcuts for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Calculating means and frequencies quickly"}
Many statistics questions on timed tests can be solved mentally.

- **Find a mean using a reference value.** Choose a number close to the data, find the mean of the deviations from that number, and add it to the reference value. For $998$, $1003$, $1005$, $994$, and $1010$, the deviations from $1000$ are $-2$, $3$, $5$, $-6$, and $10$, with sum $10$ and mean $2$. The original mean is therefore $1002$. This method follows from the rule for the mean of transformed data.
- **Work with sums.** When a value is added, removed, or missing, turn each mean into a sum by multiplying by the number of observations. Do the calculations with the sums and divide only at the end.
- **Check the result.** The mean lies between the smallest and largest values. The weighted mean of two values is closer to the one with the greater weight. Relative frequencies sum to $1$, and the angles in a pie chart sum to $360°$.

The choices often include the sum of the observations in place of their mean, a median found without sorting the values, the simple mean of group means in place of the weighted mean, or a percentage calculated with the wrong denominator. Recognizing these values can help you eliminate them before doing the full calculation.
:::
