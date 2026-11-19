---
titolo: "Data, frequencies, and graphs"
sommario: "From collecting data on individual units to interpreting frequencies, tables, empirical distributions, and histograms."
---

## Populations, units, and samples

:::definizione{#popolazione titolo="Population and sample"}
The **population** consists of all the units to which the research question refers. Each member of this set is a **statistical unit**. For a finite population, $N$ denotes the number of units. A census attempts to observe them all, whereas a sample survey observes a subset. The **sample** consists of the units selected for observation. Its size is denoted by $n$.

The definition of the population specifies the place, time, and eligibility criteria that identify its members. If a survey concerns students' commutes to a university during a particular semester, the unit is a student enrolled that semester. The enrollment list gives the total $N$, and $n$ is the number of students selected.
:::

:::esempio{titolo="One unit with several measurements"}
A laboratory studies a property of a batch of 300 tiles. For each of 25 selected tiles, the laboratory records one mass measurement and measures thickness at three points. The batch is the population, and a tile is the unit. A table with one row per unit has 25 rows and four measurement columns. The 75 thickness measurements come from 25 tiles. An analysis of mean thickness per tile therefore uses the 25 individual means, whereas an analysis of variation in thickness within a tile uses the three values recorded for each unit.
:::

:::definizione{#parametro-statistica titolo="Parameter and statistic"}
A **parameter** is a quantity that describes a population or the model representing it. A **sample statistic** is a function of the sample observations. The proportion of all tiles in the batch that fall outside tolerance is a parameter of the batch. The proportion outside tolerance among the selected tiles is a statistic. If samples are repeatedly drawn from the same batch, the parameter stays fixed, whereas the value of the statistic can change.
:::

:::osservazione
A unit identifier links the measurements made on that unit. For example, mass and thickness form a pair when measured on the same tile. Sorting the two columns separately preserves the counts for each variable but changes the pairs. Studying the relationship between two variables therefore requires keeping the observations paired.
:::

## Variables and measurement scales

:::definizione{#caratteri titolo="Categorical and quantitative variables"}
A **variable** is a characteristic recorded for each unit. Its possible outcomes are the values or categories it can take.

- A categorical variable is nominal when its categories have no intrinsic order. One example is the main form of transportation a student uses to get to campus.
- A categorical variable is ordinal when its categories are ordered. The ratings poor, adequate, and excellent indicate increasing levels, although the distance between levels is undefined.
- A quantitative variable is discrete when its possible values form a finite or countably infinite set. The number of absences in a semester takes integer values.
- A quantitative variable is continuous when the model allows every value in an interval. Travel time is continuous even when recorded to the nearest minute.

The distinction determines which calculations are meaningful. For forms of transportation, one can compare counts. For ordered ratings, one can count how many are at least adequate. For travel times, one can find the difference in minutes between two observations.
:::

:::definizione{#scale-di-misura titolo="Interval and ratio scales"}
On an **interval scale**, differences represent comparable distances, and the choice of origin is conventional. A change of units or origin has the form $y=ax+b$ with $a>0$. The difference becomes $y_2-y_1=a(x_2-x_1)$ because the term $b$ cancels. A ratio of values, however, can change when the origin changes.

On a **ratio scale**, zero represents the absence of the measured quantity, and a change of units has the form $y=ax$ with $a>0$. If $x_1\ne 0$, then $\dfrac{y_2}{y_1}=\dfrac{ax_2}{ax_1}=\dfrac{x_2}{x_1}$. A duration of $30\,\mathrm{min}$ is therefore twice as long as one of $15\,\mathrm{min}$ even when both are expressed in seconds.
:::

:::attenzione
The numerical codes assigned to categories can change without altering the categorical data. For cycling and taking the bus, the codes $(1,2)$ and $(10,20)$ give different arithmetic means for the same responses. The category counts describe the transportation choices. Likewise, the ratio of $20\,^\circ\mathrm{C}$ to $10\,^\circ\mathrm{C}$ changes when the temperatures are converted to kelvins. The temperature difference has the same numerical value in both units.
:::

## Absolute and relative frequencies

:::definizione{#frequenze titolo="Frequency distribution"}
Let $x_1,\ldots,x_k$ be the possible values of a variable, and suppose there are $n>0$ observations. The **absolute frequency** $n_i$ is the number of observations with value $x_i$. The **relative frequency** $f_i$ is their share of all observations, obtained by dividing the count by the total number of observations:

$$
f_i=\frac{n_i}{n}.
$$

The percentage frequency is $100 f_i\,\%$. If the categories are disjoint and cover all observations, each observation is counted once. Therefore

$$
\sum_{i=1}^k n_i=n,\qquad
\sum_{i=1}^k f_i=\frac{\sum_{i=1}^k n_i}{n}=1.
$$

The sum of the counts can be used to find a missing absolute frequency. For example, in a table of 40 observations, if two categories account for 13 and 17 cases, the third accounts for $40-13-17=10$ cases.

::grafico{assi=0 xmin=-0.08 xmax=3.95 ymin=-2.2 ymax=19.5 poligoni="0.69,0 1.31,0 1.31,13 0.69,13;1.69,0 2.31,0 2.31,17 1.69,17;2.69,0 3.31,0 3.31,10 2.69,10" vettori="0.33,0,3.7,0;0.33,0,0.33,18.1" etichette="0.41,18.65,count;0.94,13.55,13;1.94,17.55,17;2.94,10.55,10;0.94,-1.23,A;1.94,-1.23,B;2.94,-1.23,C" titolo="Bar chart for the three categories. The gaps between A, B, and C distinguish the categories. The heights represent counts."}
:::

::::teorema{#frequenze-aggregate titolo="Relative frequency in pooled groups"}
Consider $g$ disjoint groups of sizes $m_1,\ldots,m_g$, all positive. Suppose the same variable, with the same categories, is observed in each group. If $q_r$ is the relative frequency of a category in group $r$, its relative frequency in the pooled groups is

$$
f=\sum_{r=1}^g w_rq_r,\qquad
w_r=\frac{m_r}{\sum_{j=1}^g m_j}.
$$

The weights $w_r$ sum to 1. The formula therefore gives the overall frequency from the group proportions and their respective sizes.

:::dimostrazione
The count in group $r$ is $m_rq_r$, since $q_r$ is the ratio of the count to $m_r$. Each unit belongs to exactly one group, so the combined count is $\sum_{r=1}^g m_rq_r$. Dividing by the total size $\sum_{j=1}^g m_j$ gives the weighted sum. If the groups are all the same size, $w_r=\dfrac1g$ for every $r$, and the weighted sum equals the arithmetic mean of the proportions.
:::
::::

:::esempio{titolo="Comparing groups of different sizes"}
Of the 40 students in the first session, 14 travel to campus by bus. Of the 60 in the second session, 18 take the bus. The second session has four more bus riders, but the first has the higher proportion, since $\dfrac{14}{40}=0.35$ and $\dfrac{18}{60}=0.30$. These facts answer different questions. The count helps estimate how many seats are needed. The percentage describes how common bus travel is in each session.

Combining the sessions gives $14+18=32$ bus riders out of $40+60=100$ students, so the overall relative frequency is $0.32$. The first session has 40 students and the second 60, so their percentages receive weights of $0.40$ and $0.60$ in the overall figure.
:::

:::osservazione
Published percentages may be rounded. In a group of 200 units, a category reported as $33\%$ after rounding to the nearest whole percent can have a count of 65 or 66 under the usual convention of rounding halves up. A count of 65 corresponds to $32.5\%$, and 66 corresponds to $33\%$. The percentages in a complete table can therefore add to $99\%$ or $101\%$.
:::

## Cumulative frequencies and the empirical distribution

:::definizione{#cumulate titolo="Cumulative frequencies"}
Suppose the possible values satisfy $x_1<\cdots<x_k$. The cumulative absolute frequency $N_i$ counts observations no greater than $x_i$. The cumulative relative frequency $F_i$ expresses the same information as a proportion:

$$
N_i=\sum_{j=1}^i n_j,\qquad F_i=\frac{N_i}{n}.
$$

By convention, set $N_0=F_0=0$. Since $N_i=N_{i-1}+n_i$, the frequency of an individual value can be recovered as $n_i=N_i-N_{i-1}$. Similarly, $f_i=F_i-F_{i-1}$. The variable must have a meaningful order. For ordered satisfaction ratings, one can therefore find the proportion rated adequate or below. Changing the alphabetical order of colors, however, would change a cumulative frequency that has no statistical meaning.
:::

:::definizione{#ripartizione-empirica titolo="Empirical distribution function"}
Let $x_1^{\mathrm{obs}},\ldots,x_n^{\mathrm{obs}}$ be the individual numerical observations, including repeats. The **empirical distribution function** $F_n(x)$ is the proportion of observations less than or equal to the real threshold $x$:

$$
F_n(x)=\frac{1}{n}\sum_{j=1}^n
\mathbf{1}_{\{x_j^{\mathrm{obs}}\le x\}}.
$$

The indicator equals 1 when the observation satisfies the inequality and 0 otherwise. The function is constant between consecutive distinct observed values. At an observed value, it already takes the value reached after the jump. It is therefore right-continuous. The size of each jump is the relative frequency of the value at that point.
:::

:::esempio{titolo="Reading a step and an interval"}
For the data $1,2,2,4,6$, three observations are at or below $2$, so $F_n(2)=\dfrac35$. Throughout the interval $[2,4)$ the threshold includes the same three observations. At $4$ a fourth observation is included, so $F_n(4)=\dfrac45$.

::grafico{xmin=-1.1 xmax=7.1 ymin=-0.1 ymax=1.16 nomi="x,F_n(x)" linee="-0.5,0 1,0;1,0.2 2,0.2;2,0.6 4,0.6;4,0.8 6,0.8;6,1 6.8,1" punti="1,0,vuoto;1,0.2,pieno;2,0.2,vuoto;2,0.6,pieno;4,0.6,vuoto;4,0.8,pieno;6,0.8,vuoto;6,1,pieno" etichette="-0.63,0.18,0.2;-0.63,0.58,0.6;-0.63,0.78,0.8" titolo="Empirical distribution function for the five observations"}

To count the observations in $(2,4]$, start with those less than or equal to $4$ and remove those less than or equal to $2$. This gives a relative frequency of $F_n(4)-F_n(2)=\dfrac15$. For $[2,4]$, only the observations strictly less than $2$ should be removed. The value just before the jump at $2$, denoted by $F_n(2^-)$, is $\dfrac15$. The relative frequency of the closed interval is therefore $\dfrac45-\dfrac15=\dfrac35$.
:::

## Grouping data into classes

:::definizione{#classi titolo="Classes, widths, and midpoints"}
When a measurement has many possible values, they can be grouped into disjoint intervals. A class $[a_i,b_i)$ includes its left endpoint $a_i$ and excludes its right endpoint $b_i$. Its width is $h_i=b_i-a_i$ and its midpoint is $c_i=\dfrac{a_i+b_i}{2}$. The endpoint convention assigns each observation on a boundary to exactly one class. If the last interval includes its right endpoint, the table indicates this explicitly.

For durations grouped into $[0,5)$, $[5,10)$, and $[10,20]$ minutes, a duration of exactly $5\,\mathrm{min}$ belongs to the second class. A duration of $20\,\mathrm{min}$ belongs to the last. The widths are $5$, $5$, and $10\,\mathrm{min}$.
:::

:::esempio{titolo="What a grouped table tells us"}
Suppose the classes $[0,5)$, $[5,10)$, and $[10,20]$ contain 8, 12, and 5 waiting times. The table tells us exactly how many waits are strictly shorter than $10\,\mathrm{min}$: $8+12=20$. A threshold of $8\,\mathrm{min}$, however, falls within the second class. The first eight observations are known to be below it and the five in the final class to be above it. The number of waits strictly shorter than $8\,\mathrm{min}$ is therefore between 8 and 20. A more precise estimate requires information about the distribution of values within the second class.

::grafico{assi=0 xmin=-1.5 xmax=22.5 ymin=-1.3 ymax=2.3 vettori="-0.5,0,21.8,0" poligoni="0,0.3 5,0.3 5,1.2 0,1.2;5,0.3 10,0.3 10,1.2 5,1.2;10,0.3 20,0.3 20,1.2 10,1.2" linee="0,0.12 0,-0.12;5,0.12 5,-0.12;10,0.12 10,-0.12;20,0.12 20,-0.12" segmenti="8,-0.1,8,1.75" etichette="-0.2,-0.55,0;4.8,-0.55,5;9.6,-0.55,10;19.6,-0.55,20;21.3,-0.6,t;2.2,0.65,8;6.0,0.65,12;14.8,0.65,5;7.3,2.0,threshold 8" titolo="Waiting-time classes with 8, 12, and 5 observations. The threshold of 8 minutes falls within $[5,10)$, so the 12 waits in this class can fall on either side."}
:::

:::osservazione
The midpoint is one way to represent the contents of a class by a single value. For example, assigning $7.5\,\mathrm{min}$ to each of the twelve waits in $[5,10)$ gives an approximate mean, as in the chapter on descriptive statistics. The mean of the twelve observed values may differ from $7.5\,\mathrm{min}$ if waits cluster near one endpoint. An open-ended class such as $[20,+\infty)$ lacks a finite upper endpoint, so its midpoint is undefined.
:::

## Graphs and frequency density

:::definizione{#istogramma titolo="Relative frequency density histogram"}
A **histogram** represents each class of a quantitative variable by a rectangle spanning the class interval. In a relative frequency density histogram, the area of the rectangle equals the relative frequency $f_i$. If its base has width $h_i>0$, its height $d_i$ is

$$
d_i=\frac{f_i}{h_i},\qquad d_i h_i=f_i.
$$

If the classes cover all observations, the areas sum to 1. With minutes on the horizontal axis, the height is measured in relative frequency per minute. With absolute frequency density $\dfrac{n_i}{h_i}$, measured in observations per minute, the areas sum to $n$.
:::

:::esempio{titolo="The tallest rectangle and the most frequent class"}
Of 20 waits, 8 fall in $[0,2)$ minutes and 12 in $[2,8)$ minutes. Their relative frequencies are $0.40$ and $0.60$, respectively. Dividing by the widths gives $d_1=0.20\,\mathrm{min}^{-1}$ and $d_2=0.10\,\mathrm{min}^{-1}$. The first class has a higher concentration of observations per minute. The second is three times as wide and has the larger area, so it contains more observations.

::grafico{xmin=-0.99 xmax=8.99 ymin=-0.023 ymax=0.253 nomi="t,d_i" poligoni="0,0 2,0 2,0.2 0,0.2;2,0 8,0 8,0.1 2,0.1" linee="0,0.2 2,0.2 2,0 8,0 8,0.1 2,0.1" etichette="-0.78,0.19,0.20;-0.78,0.09,0.10;0.62,0.12,0.40;4.64,0.055,0.60" titolo="Relative frequency represented by the area of each class"}
:::

:::attenzione
With unequal class widths, heights proportional to the counts give wide classes too much area. Consider 30 waiting times in the classes $[0,5)$, $[5,10)$, and $[10,20)$ minutes, with 8, 12, and 10 observations. If every count is divided by the same width $5\,\mathrm{min}$ to obtain the heights, the last rectangle has height $\dfrac{10}{5}=2$ observations per minute and area $2\cdot10=20$, twice the 10 observations in that class. The correct absolute frequency densities are $\dfrac{8}{5}=1.6$, $\dfrac{12}{5}=2.4$, and $\dfrac{10}{10}=1$ observations per minute. At these heights each area equals its class count, and the areas sum to 30.

::grafico{assi=0 xmin=-2.6 xmax=22.8 ymin=-0.45 ymax=3.05 vettori="-0.6,0,22,0;-0.6,0,-0.6,2.85" poligoni="0,0 5,0 5,1.6 0,1.6;5,0 10,0 10,2.4 5,2.4;10,0 20,0 20,1 10,1" linee="0,1.6 5,1.6 5,0;5,2.4 10,2.4 10,0;10,1 20,1 20,0;-0.75,1 -0.45,1;-0.75,2 -0.45,2" segmenti="10,1,10,2;10,2,20,2;20,2,20,1" etichette="-1.9,0.95,1;-1.9,1.95,2;-0.4,2.95,density;-0.2,-0.22,0;4.8,-0.22,5;9.6,-0.22,10;19.6,-0.22,20;21.4,-0.25,t;2.2,0.75,8;7.2,1.15,12;14.6,0.45,10;13.4,2.18,area 20" titolo="Absolute frequency densities for the three classes. The dashed outline shows the rectangle of height $\dfrac{10}{5}$. Its area of 20 does not match the 10 observations in $[10,20)$."}
:::

:::osservazione
In a **bar chart**, the rectangles are separate, and their heights show the count or proportion in each category. Their width is a design choice. In a histogram, the base measures the width of the class along the quantitative axis. In a **pie chart**, the proportion $f_i$ is represented by a sector with angle $360^\circ f_i$. A sector of $90^\circ$ corresponds to a quarter of the total. In each case the axis label or legend indicates whether the graph shows counts, proportions, or densities.
:::

:::esempio{titolo="Angles in a pie chart"}
Categories A, B, and C account for 13, 17, and 10 of the 40 observations. Their sector angles are $360^\circ\cdot\dfrac{13}{40}=117^\circ$, $360^\circ\cdot\dfrac{17}{40}=153^\circ$, and $360^\circ\cdot\dfrac{10}{40}=90^\circ$. The angles add to $360^\circ$ because the relative frequencies sum to 1. Category C occupies a quarter of the circle since $\dfrac{10}{40}=\dfrac14$. The ratio of two angles equals the ratio of their counts, for example $\dfrac{153}{117}=\dfrac{17}{13}$, so the chart preserves comparisons between categories.

::grafico{assi=0 uguale=1 xmin=-1.35 xmax=1.35 ymin=-1.25 ymax=1.25 curve="cos(t),sin(t),0,6.2832" poligoni="0,0 0,-1 0.174,-0.985 0.342,-0.940 0.500,-0.866 0.643,-0.766 0.766,-0.643 0.866,-0.500 0.940,-0.342 0.985,-0.174 1,0" linee="0,0 1,0;0,0 -0.454,0.891;0,0 0,-1" etichette="0.22,0.47,A 117°;-0.72,-0.13,B 153°;0.30,-0.40,C 90°" titolo="Sectors with angles $360^\circ\cdot\dfrac{n_i}{40}$ for the three categories"}
:::

## Two-way tables

:::definizione{#tabelle titolo="Joint, marginal, and conditional frequencies"}
A **two-way table** cross-classifies two variables recorded on the same units. Cell $n_{ij}$ counts the units in category $i$ of the first variable and category $j$ of the second. The **marginal totals** are found by summing across a row or down a column:

$$
n_{i\cdot}=\sum_j n_{ij},\qquad
n_{\cdot j}=\sum_i n_{ij}.
$$

The joint relative frequency is $\dfrac{n_{ij}}{n}$. Within row $i$, the relative frequency of column $j$ is $\dfrac{n_{ij}}{n_{i\cdot}}$, defined when $n_{i\cdot}>0$. Within column $j$, the relative frequency of row $i$ is $\dfrac{n_{ij}}{n_{\cdot j}}$ if $n_{\cdot j}>0$. The denominator determines the reference group.
:::

:::esempio{titolo="Three questions about the same cell"}
A course has a daytime session and an evening session. The table summarizes the outcomes for 80 students.

| Session | Passed | Did not pass | Total |
| --- | ---: | ---: | ---: |
| Daytime | 30 | 20 | 50 |
| Evening | 21 | 9 | 30 |
| Total | 51 | 29 | 80 |

The proportion of all students who attended the evening session and passed is $\dfrac{21}{80}=0.2625$. Among evening students, the proportion who passed is $\dfrac{21}{30}=0.70$. Among students who passed, the proportion who attended the evening session is $\dfrac{21}{51}=\dfrac7{17}$. The three numerators agree because they count the same cell. The denominators differ because the questions concern all students, only evening students, and only those who passed, respectively.

To compare pass rates for the two sessions, use the two row totals. This gives $0.60$ for the daytime session and $0.70$ for the evening session. The 30 daytime students who passed outnumber the 21 evening students who passed because the daytime session enrolled 50 students. Counts answer a question about numbers, whereas comparing proportions accounts for the different session sizes.

::grafico{assi=0 xmin=-0.7 xmax=4.4 ymin=-16 ymax=112 vettori="0,0,4.1,0;0,0,0,108" poligoni="0.7,0 1.5,0 1.5,60 0.7,60;2.4,0 3.2,0 3.2,70 2.4,70" linee="0.7,60 0.7,100 1.5,100 1.5,60;2.4,70 2.4,100 3.2,100 3.2,70;-0.08,50 0.08,50;-0.08,100 0.08,100" etichette="-0.5,48,50;-0.6,98,100;0.1,108,share (%);0.82,28,passed 60;0.82,78,failed 40;2.52,33,passed 70;2.52,83,failed 30;0.85,-8,Daytime;2.6,-8,Evening" titolo="Relative frequencies of the outcomes within each session. Each bar uses its own row total as the denominator in $\dfrac{n_{ij}}{n_{i\cdot}}$."}
:::

## Selection and missing data

:::definizione{#campionamento titolo="Simple random, stratified, and convenience sampling"}
In a **simple random sample** of size $n$ drawn without replacement, each subset of $n$ units from the population has the same probability of selection. **Stratified sampling** divides the population into disjoint groups defined before selection and samples units within each group. If the groups are the schools within a university, the number of students to select from each school can be fixed in advance. Interviewing people who pass a single classroom instead produces a sample that depends on who is available at that place and time.

A frequency calculated from the respondents describes those who responded. Using it to estimate a frequency for the entire population requires considering how units were selected and which ones responded. The chapter on sampling explains how the selection method enters the calculation of the standard error.
:::

:::attenzione
A large sample may describe one part of a population well while overlooking another. Suppose the aim is to estimate travel time for all students. A set of 800 interviews conducted outside a residence hall describes the students reached there. Commuter students who avoid that area have little chance of being interviewed. Repeating interviews at the same location leaves the selection mechanism unchanged.
:::

:::esempio{titolo="Response rate and percentage among valid responses"}
Of 120 students invited, 90 answer the question about transportation. Of these, 27 report walking. The response rate is $\dfrac{90}{120}=0.75$. The proportion who walk among those providing a valid response is $\dfrac{27}{90}=0.30$. The proportion of all invitees known to walk is $\dfrac{27}{120}=0.225$.

If the quantity of interest is the actual proportion among all 120 invitees and no information is available for the 30 nonrespondents, a range can be given. The minimum count is 27 if all nonrespondents use some other form of transportation. The maximum is $27+30=57$ if they all walk. The extreme proportions are therefore $0.225$ and $0.475$. This range reflects missing responses. A confidence interval, by comparison, quantifies sampling uncertainty under specific assumptions.

::grafico{assi=0 xmin=-4 xmax=124 ymin=-0.32 ymax=1.32 uguale=1 poligoni="0,0 27,0 27,1 0,1" linee="0,0 120,0 120,1 0,1 0,0;27,0 27,1;90,0 90,1" etichette="4,0.46,27 walk;49,0.46,63 other modes;95,0.60,30 did not;96.2,0.32,respond" titolo="Of the 120 invitees, 90 responded and 30 did not. The actual proportion who walk depends on the missing responses."}
:::
