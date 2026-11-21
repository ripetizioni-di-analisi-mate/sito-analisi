---
titolo: "Data, frequencies, and graphs"
sommario: "From collecting data on individual units to interpreting frequencies, tables, empirical distributions, and histograms."
---

Statistics derives, from collected data, numbers that describe a group of people or objects. For the students of a university, for example, these numbers might be the mean time it takes to get to class or the percentage of students who take the bus.

The work has two parts. The first part summarizes the collected data with tables, graphs, and a few indices, such as the mean, and is called descriptive statistics; it is the subject of this chapter and the next. The second part arises because data are usually not collected for the whole group, since that would cost too much time and money, so one interviews, for example, 200 students out of 12000. From the answers of the 200, one wants to estimate the percentage of bus users among all 12000, and also to state by how much that estimate can be wrong. This second part is called statistical inference and is the subject of Chapters 8 to 12. Chapters 3 to 7 introduce probability, which is used to measure that error.

This chapter starts from the basics: whom the data refer to, what was measured, and how the collected numbers are read. It defines population and sample, then the types of data and the calculations that make sense for each type, and finally the frequencies, tables, and graphs used to summarize data. The indices of Chapter 2, such as the mean and the variance, are computed from these frequencies, and two-way tables return in the conditional probability of Chapter 4.

## Populations, units, and samples

:::definizione{#popolazione titolo="Population and sample"}
Suppose one wants to know how long the students of a university take to get to campus during a given semester. The students enrolled in that semester form the **population** of the survey. The population is therefore the set of all the members to which the question refers, and each of these members is a **statistical unit**. In the example, the statistical unit is an individual enrolled student.

To define the population, one states who belongs to it, where, and in which period. Here it consists of the students enrolled at that university in the semester considered. When the population is finite, the number of its units is denoted by $N$; in the example, $N$ is the number of enrolled students, which can be read from the registrar's list.

Observing every unit is called a census. A census costs time and money, so usually only some of the units are observed. The units selected for observation form the **sample**, and the number of its units, called the sample size, is denoted by $n$. If 200 students are interviewed at a university with 12000 enrolled students, then $N=12000$ and $n=200$.
:::

:::esempio{titolo="One unit with several measurements"}
A company produces a batch of 300 tiles and wants to check their mass and thickness. It selects 25 tiles; for each one it measures the mass and measures the thickness at three different points. The population is the batch, the statistical unit is an individual tile, and the sample consists of the 25 selected tiles, so $N=300$ and $n=25$.

The data are recorded in a table with one row for each unit and one column for each measurement. Here there are 25 rows and four measurement columns, namely the mass and the three thicknesses.

There are $25\cdot3=75$ thickness measurements, but there are still only 25 units, because each tile appears with three measurements. To compare the tiles with one another, one first computes the mean thickness of each tile, that is, the mean of its three thicknesses; the comparison therefore uses 25 values, one per tile. To see how much the thickness varies within a single tile, one instead uses the three values of that tile.
:::

:::definizione{#parametro-statistica titolo="Parameter and statistic"}
In the batch of 300 tiles, some have a thickness outside the limits allowed by the company; these tiles are said to be outside tolerance. The proportion of tiles outside tolerance among all 300 is a fixed number of the batch, even though nobody knows it until every tile has been measured. A **parameter** is a number of this kind, that is, a quantity that describes the entire population. From Chapter 5 on, the population will also be represented by a formula that gives the probability of each possible value, called a model. The numbers that appear in that formula, such as the probability $0.03$ that a tile is outside tolerance, will also be called parameters.

The proportion of tiles outside tolerance among the 25 selected tiles, by contrast, is computed from the sample data alone. A number computed from the sample observations is called a **sample statistic**; in mathematical terms, it is a function of the sample observations.

If another group of 25 tiles is selected from the same batch, the parameter stays the same, because the batch has not changed. The statistic, however, can take a different value, because different tiles have been selected. For example, if 3 tiles are outside tolerance in the first sample and 1 in the second, the statistic equals $\dfrac{3}{25}=0.12$ in the first case and $\dfrac{1}{25}=0.04$ in the second.

The parameter is usually the number of interest, but it is unknown; the statistic is known, because it is computed from the collected data. Much of the course studies how to use a sample statistic to say something reliable about the parameter: this is the subject of the chapters on estimation, confidence intervals, and tests.
:::

:::osservazione
Each unit has an identifier, for example the number printed on the back of the tile. The identifier shows which measurements belong to the same unit. The mass and the thickness measured on tile number 7, for example, form a pair of data.

If the column of masses and, separately, the column of thicknesses are each sorted from smallest to largest, each column still contains the same values, but the pairs no longer correspond to the tiles. To study the relationship between two characteristics measured on the same units, such as mass and thickness, one therefore sorts complete rows of the table, so that the pairs stay together.
:::

## Variables and measurement scales

:::definizione{#caratteri titolo="Categorical and quantitative variables"}
Several pieces of information can be recorded for each student in the commuting survey, for example the means of transportation, the rating given to the transportation service, the number of absences in the semester, and the travel time. Each of these characteristics is a **variable**. The value that the variable takes on a particular unit, for example "bus" or "35 minutes", is called a **value** of the variable; for a categorical variable the values are also called categories.

Variables fall into four types.

- A variable is nominal categorical when its values are categories with no order. The means of transportation is of this type, because bicycle, bus, car, and walking are different categories and none comes before the others.
- A variable is ordinal categorical when its values are ordered categories. The rating poor, adequate, or excellent is of this type. The order of the levels is clear, while the distance between two levels is undefined, so one cannot say whether the distance between poor and adequate is the same as the distance between adequate and excellent.
- A variable is discrete quantitative when its values are numbers that can be listed one after another. The number of absences is of this type, because it takes the integer values $0,1,2,\ldots$. The set of possible values is finite, or infinite but listable like the natural numbers; an infinite set that can be listed in this way is called countable.
- A variable is continuous quantitative when its values are numbers and, in principle, every value in an interval is possible. Travel time is of this type, because a trip can last $31$, $31.5$, or $31.47$ minutes. The variable remains continuous even if, for convenience, the durations are recorded rounded to the nearest minute.

The type of variable determines which calculations are meaningful. For the means of transportation, one counts the students who use each means. For the rating, one can also count how many students gave at least "adequate", because the values are ordered. For travel time, one can compute the difference in minutes between two trips, because the values are numbers.
:::

:::definizione{#scale-di-misura titolo="Interval and ratio scales"}
Consider two temperatures, $10\,^\circ\mathrm{C}$ and $20\,^\circ\mathrm{C}$. In degrees Celsius their ratio is $\dfrac{20}{10}=2$, and it is tempting to say that the second temperature is twice the first. The same temperatures in kelvins, however, are $283.15\,\mathrm{K}$ and $293.15\,\mathrm{K}$, and their ratio is $\dfrac{293.15}{283.15}\approx1.04$. The "twice" therefore depends on the unit chosen, so it does not describe the temperatures. This happens because the zero of the Celsius scale is set by convention at the temperature at which ice melts, and $0\,^\circ\mathrm{C}$ is a temperature like any other.

The difference between the two temperatures, by contrast, is $20-10=10$ degrees Celsius and $293.15-283.15=10$ kelvins, so it stays the same in the two units.

A variable such as temperature in degrees Celsius is measured on an **interval scale**. On an interval scale the zero is chosen by convention, so differences between values are meaningful and their ratios are not. The reason can be seen with a calculation. A change of unit or of zero has the form $y=ax+b$ with $a>0$; from Celsius to kelvins, for example, $a=1$ and $b=273.15$. The difference of two values becomes

$$
y_2-y_1=(ax_2+b)-(ax_1+b)=a(x_2-x_1),
$$

because the term $b$ cancels. The ratio $\dfrac{y_2}{y_1}=\dfrac{ax_2+b}{ax_1+b}$ still contains $b$, so it changes when the zero changes.

With durations the situation is different. A trip of $30\,\mathrm{min}$ lasts twice as long as one of $15\,\mathrm{min}$, and in seconds the two durations become $1800\,\mathrm{s}$ and $900\,\mathrm{s}$, whose ratio is still $\dfrac{1800}{900}=2$. Here the zero is not a convention, because a duration of $0\,\mathrm{min}$ means the absence of duration. A variable such as duration is measured on a **ratio scale**. On a ratio scale the zero indicates the absence of the measured quantity, and a change of unit has the form $y=ax$ with $a>0$; from minutes to seconds, for example, $a=60$. If $x_1\ne0$, the ratio stays the same, because

$$
\frac{y_2}{y_1}=\frac{ax_2}{ax_1}=\frac{x_2}{x_1}.
$$

On a ratio scale, therefore, both differences and ratios are meaningful. Interval scales and ratio scales are two types of measurement scale, that is, two ways of assigning numbers to a quantitative variable.
:::

:::attenzione
To process the data, numbers are sometimes assigned to the categories of a categorical variable, for example 1 to bicycle and 2 to bus. These numbers are only labels. With one answer "bicycle" and one answer "bus", the coding $(1,2)$ gives the mean $\dfrac{1+2}{2}=1.5$, while the coding $(10,20)$ gives the mean $\dfrac{10+20}{2}=15$, even though the answers are the same. The mean of a nominal variable therefore depends on the coding chosen. Categorical data are described by the count of answers in each category.
:::

## Absolute and relative frequencies

:::definizione{#frequenze titolo="Frequency distribution"}
Forty students are asked to choose one of three categories, labeled A, B, and C. Thirteen students choose A, 17 choose B, and 10 choose C.

The number of observations of a value is called its **absolute frequency**; for category A it is 13. The proportion of observations of a value is called its **relative frequency** and is obtained by dividing the absolute frequency by the total number of observations; for category A it is $\dfrac{13}{40}=0.325$. Multiplying by 100 gives the percentage frequency, which for A is $32.5\%$.

In symbols, let $x_1,\ldots,x_k$ be the $k$ values of the variable and suppose $n>0$ observations are available. The absolute frequency of the value $x_i$ is denoted by $n_i$, the relative frequency by $f_i$, and the percentage frequency is $100 f_i\,\%$. Then

$$
f_i=\frac{n_i}{n}.
$$

The list of the values with their frequencies is called the frequency distribution of the variable. If the values do not overlap and together cover all cases, each observation appears exactly once in the counts. Therefore the sum of the absolute frequencies is the total number of observations and the sum of the relative frequencies is 1:

$$
\sum_{i=1}^k n_i=n,\qquad
\sum_{i=1}^k f_i=\frac{\sum_{i=1}^k n_i}{n}=1.
$$

In the example, $13+17+10=40$ and $\dfrac{13}{40}+\dfrac{17}{40}+\dfrac{10}{40}=1$. The sum of the counts can also be used to find a missing absolute frequency. If only the counts of A and B are known, the count of C is $40-13-17=10$.

Two percentage frequencies can be compared in two ways. If the proportion of students who take the bus falls from $25\%$ in one year to $20\%$ in the following year, the difference $25-20=5$ is called a decrease of 5 **percentage points**. The relative change instead divides the difference by the starting value, and equals $\dfrac{25-20}{25}=0.20$, that is, $20\%$ of the initial value.

The figure shows the three counts in a bar chart, in which each category has a bar as tall as its count.

::grafico{assi=0 xmin=-0.08 xmax=3.95 ymin=-2.2 ymax=19.5 poligoni="0.69,0 1.31,0 1.31,13 0.69,13;1.69,0 2.31,0 2.31,17 1.69,17;2.69,0 3.31,0 3.31,10 2.69,10" vettori="0.33,0,3.7,0;0.33,0,0.33,18.1" etichette="0.41,18.65,count;0.94,13.55,13;1.94,17.55,17;2.94,10.55,10;0.94,-1.23,A;1.94,-1.23,B;2.94,-1.23,C" titolo="Bar chart for the three categories. The gaps between A, B, and C distinguish the categories. The heights represent counts."}
:::

::::teorema{#frequenze-aggregate titolo="Relative frequency in pooled groups"}
When several groups are pooled, the relative frequency of a value in the total is obtained from the relative frequencies of the individual groups, weighted by the size of each group.

Consider $g$ disjoint groups, that is, groups with no units in common, of sizes $m_1,\ldots,m_g$, all positive. The same variable, with the same values, is observed in each group. If $q_r$ is the relative frequency of a value in group $r$, then the relative frequency of that value in the pooled groups is

$$
f=\sum_{r=1}^g w_rq_r,\qquad
w_r=\frac{m_r}{\sum_{j=1}^g m_j}.
$$

The weight $w_r$ is the proportion of units that belong to group $r$, so the weights sum to 1. The formula gives the overall frequency from the group proportions and their sizes alone.

:::dimostrazione
Since $q_r$ is the ratio of the count of the value in group $r$ to the size $m_r$, the count in group $r$ is $m_rq_r$. Each unit belongs to exactly one group, so the overall count is $\sum_{r=1}^g m_rq_r$. Dividing by the total size $\sum_{j=1}^g m_j$ gives the weighted sum. When all the groups have the same size, $w_r=\dfrac1g$ for every $r$, and the weighted sum equals the arithmetic mean of the proportions.
:::
::::

:::esempio{titolo="Comparing groups of different sizes"}
Of the 40 students in the first session, 14 travel to campus by bus. Of the 60 students in the second session, 18 take the bus. The second session has $18-14=4$ more bus riders, while the first session has the higher proportion, since $\dfrac{14}{40}=0.35$ and $\dfrac{18}{60}=0.30$. The two comparisons answer different questions. The count tells how many bus seats are needed. The proportion tells how common bus travel is in each session.

Combining the two sessions gives $14+18=32$ bus riders out of $40+60=100$ students, so the overall relative frequency is $\dfrac{32}{100}=0.32$. The theorem gives the same value. The first session contains 40 of the 100 students and the second 60, so the weights are $w_1=0.40$ and $w_2=0.60$, and

$$
f=0.40\cdot0.35+0.60\cdot0.30=0.14+0.18=0.32.
$$

The simple average of the two proportions, $\dfrac{0.35+0.30}{2}=0.325$, gives a different value, because it assigns the same weight to two sessions of different sizes.
:::

:::osservazione
Published percentages are usually rounded to whole numbers. In a group of 200 units, a category reported as $33\%$ can have 65 or 66 units, if halves are rounded up. Indeed, $\dfrac{65}{200}$ corresponds to $32.5\%$, which rounds to $33\%$, and $\dfrac{66}{200}$ corresponds to exactly $33\%$. Each category of a table is rounded separately, so the sum of the rounded percentages can come to $99\%$ or $101\%$ even when the table is complete.
:::

## Cumulative frequencies and the empirical distribution

:::definizione{#cumulate titolo="Cumulative frequencies"}
Twenty students are asked to rate the transportation service. Four answer poor, 10 adequate, and 6 excellent. The students who give at most "adequate", that is, poor or adequate, number $4+10=14$, and their proportion is $\dfrac{14}{20}=0.70$. A count of this kind, which adds the observations of a value and of all the values that precede it, is called a cumulative frequency. It is computed when the values have an order, because one needs to know which values come first.

In symbols, suppose the values are ordered, $x_1<\cdots<x_k$. The **cumulative absolute frequency** $N_i$ counts the observations at most equal to $x_i$. The **cumulative relative frequency** $F_i$ expresses the same information as a proportion:

$$
N_i=\sum_{j=1}^i n_j,\qquad F_i=\frac{N_i}{n}.
$$

In the example, $N_1=4$, $N_2=14$, $N_3=20$, and therefore $F_1=0.20$, $F_2=0.70$, $F_3=1$.

By convention, $N_0=F_0=0$. Since $N_i=N_{i-1}+n_i$, the frequency of a single value is the difference of two consecutive cumulative frequencies, $n_i=N_i-N_{i-1}$. Similarly, $f_i=F_i-F_{i-1}$. In the example, the students who answer adequate number $n_2=N_2-N_1=14-4=10$.

For a nominal variable, such as favorite color, the order of the values is chosen by whoever writes the table, for example alphabetical order. Changing that order would change the cumulative frequencies, so for a nominal variable cumulative frequencies have no statistical meaning.
:::

:::definizione{#ripartizione-empirica titolo="Empirical distribution function"}
With numerical data, the cumulative frequency can be computed for any threshold, even for a value that nobody observed. For the five observations $1,2,2,4,6$, three observations are less than or equal to $3$, so their proportion is $\dfrac35$.

Let $x_1^{\mathrm{obs}},\ldots,x_n^{\mathrm{obs}}$ be the individual numerical observations, including repeats. The **empirical distribution function** $F_n(x)$ is the proportion of observations less than or equal to the threshold $x$, for every real number $x$. The subscript $n$ recalls the number of observations. In a formula,

$$
F_n(x)=\frac{1}{n}\sum_{j=1}^n
\mathbf{1}_{\{x_j^{\mathrm{obs}}\le x\}}.
$$

The symbol $\mathbf{1}_{\{x_j^{\mathrm{obs}}\le x\}}$ is called an indicator and equals 1 when the observation $x_j^{\mathrm{obs}}$ satisfies the inequality and 0 otherwise. The sum therefore counts the observations that do not exceed the threshold. Evaluated at an observed value $x_i$, the function gives the cumulative relative frequency, that is, $F_n(x_i)=F_i$.

Between two consecutive observed values the function is constant, because moving the threshold within that stretch adds no observation. At each observed value the function rises with a jump, and the size of the jump is the relative frequency of that value. At the point of the jump the function already takes the higher value, because the inequality $x_j^{\mathrm{obs}}\le x$ includes equality; for this reason the function is said to be right-continuous. The value the function has just before the jump at a point $x$ is denoted by $F_n(x^-)$ and is the proportion of observations strictly less than $x$.
:::

:::esempio{titolo="Reading a step and an interval"}
For the data $1,2,2,4,6$, three observations are counted up to the threshold $2$, so $F_n(2)=\dfrac35$. For every threshold in the interval $[2,4)$ the same three observations are counted. At $4$ a fourth observation is added, so $F_n(4)=\dfrac45$.

::grafico{xmin=-1.1 xmax=7.1 ymin=-0.1 ymax=1.16 nomi="x,F_n(x)" linee="-0.5,0 1,0;1,0.2 2,0.2;2,0.6 4,0.6;4,0.8 6,0.8;6,1 6.8,1" punti="1,0,vuoto;1,0.2,pieno;2,0.2,vuoto;2,0.6,pieno;4,0.6,vuoto;4,0.8,pieno;6,0.8,vuoto;6,1,pieno" etichette="-0.63,0.18,0.2;-0.63,0.58,0.6;-0.63,0.78,0.8" titolo="Empirical distribution function for the five observations"}

At each jump of the graph, the solid dot, at the start of the higher step, shows the value of the function at that point. The open dot, at the end of the lower step, shows the value just before the jump, which the function does not take.

To count the observations in $(2,4]$, one starts from those less than or equal to $4$ and removes those less than or equal to $2$. This gives $F_n(4)-F_n(2)=\dfrac45-\dfrac35=\dfrac15$. To count those in $[2,4]$, one instead removes only the observations strictly less than $2$. The value just before the jump at $2$ is $F_n(2^-)=\dfrac15$, because the only observation less than $2$ is $1$. The relative frequency of the closed interval is therefore $\dfrac45-\dfrac15=\dfrac35$.
:::

## Grouping data into classes

:::definizione{#classi titolo="Classes, widths, and midpoints"}
When a numerical variable takes many different values, such as the travel times of 200 students, a table with one row per value becomes too long. The values are then grouped into disjoint intervals, called **classes**, and for each class one counts how many observations it contains.

The class $[a_i,b_i)$ includes the left endpoint $a_i$ and excludes the right endpoint $b_i$. This convention assigns each observation that falls exactly on a boundary to exactly one class. If the last interval includes its right endpoint, the table states this explicitly. The **width** of the class is $h_i=b_i-a_i$ and the **midpoint** is

$$
c_i=\frac{a_i+b_i}{2}.
$$

For duration classes $[0,5)$, $[5,10)$, and $[10,20]$ measured in minutes, a duration of exactly $5\,\mathrm{min}$ belongs to the second class and a duration of $20\,\mathrm{min}$ belongs to the last. The widths are $5$, $5$, and $10\,\mathrm{min}$, and the midpoints are $2.5$, $7.5$, and $15\,\mathrm{min}$.
:::

:::esempio{titolo="What a grouped table tells us"}
Suppose the classes $[0,5)$, $[5,10)$, and $[10,20]$ contain 8, 12, and 5 waiting times. From the table it follows exactly that $8+12=20$ waits are strictly shorter than $10\,\mathrm{min}$. A threshold of $8\,\mathrm{min}$, however, falls inside the second class. The eight waits of the first class are below the threshold and the five of the last class are above it, while for the twelve waits of the second class it is not known on which side they lie. The number of waits strictly shorter than $8\,\mathrm{min}$ is therefore between 8, if no wait of the second class is below the threshold, and $8+12=20$, if all of them are. A more precise estimate requires information on how the values are distributed within the second class.

::grafico{assi=0 xmin=-1.5 xmax=22.5 ymin=-1.3 ymax=2.3 vettori="-0.5,0,21.8,0" poligoni="0,0.3 5,0.3 5,1.2 0,1.2;5,0.3 10,0.3 10,1.2 5,1.2;10,0.3 20,0.3 20,1.2 10,1.2" linee="0,0.12 0,-0.12;5,0.12 5,-0.12;10,0.12 10,-0.12;20,0.12 20,-0.12" segmenti="8,-0.1,8,1.75" etichette="-0.2,-0.55,0;4.8,-0.55,5;9.6,-0.55,10;19.6,-0.55,20;21.3,-0.6,t;2.2,0.65,8;6.0,0.65,12;14.8,0.65,5;7.3,2.0,threshold 8" titolo="Waiting-time classes with 8, 12, and 5 observations. The threshold of 8 minutes falls within $[5,10)$, so the 12 waits in this class can fall on either side."}
:::

:::osservazione
The midpoint represents all the observations of the class with a single value. For example, assigning $7.5\,\mathrm{min}$ to the twelve waits of the class $[5,10)$ gives an approximate mean, as shown in the chapter on descriptive indices. The actual mean of the twelve waits can differ from $7.5\,\mathrm{min}$ if the waits cluster near one of the two endpoints. An open class such as $[20,+\infty)$ has no finite right endpoint, so its midpoint is not determined.
:::

## Graphs and frequency density

:::definizione{#istogramma titolo="Relative frequency density histogram"}
When the classes have different widths, a wide class can contain more observations simply because it covers more values. To compare the classes correctly, in a histogram the proportion of a class is read from the area of its rectangle.

A **histogram** represents each class of a quantitative variable by a rectangle whose base is the class interval. In a relative frequency density histogram, the area of the rectangle is the relative frequency $f_i$ of the class. The height $d_i$ is therefore the relative frequency divided by the width $h_i>0$, that is, the proportion of observations per unit of width, and is called the relative frequency **density**:

$$
d_i=\frac{f_i}{h_i},\qquad d_i h_i=f_i.
$$

If the classes cover all observations, the areas sum to 1, because they are the sum of the relative frequencies. With minutes on the horizontal axis, the height is measured in relative frequency per minute, that is, in $\mathrm{min}^{-1}$. If the absolute frequency density $\dfrac{n_i}{h_i}$ is used instead, measured in observations per minute, the areas sum to $n$.
:::

:::esempio{titolo="The tallest rectangle and the most frequent class"}
Of 20 waits, 8 fall in $[0,2)$ minutes and 12 in $[2,8)$ minutes. The relative frequencies are $\dfrac{8}{20}=0.40$ and $\dfrac{12}{20}=0.60$. Dividing by the widths, which are $2$ and $6\,\mathrm{min}$, gives the densities $d_1=\dfrac{0.40}{2}=0.20\,\mathrm{min}^{-1}$ and $d_2=\dfrac{0.60}{6}=0.10\,\mathrm{min}^{-1}$. The first rectangle is taller, because its waits are more concentrated per minute. The second has three times the base and a larger area, so its class contains more observations.

::grafico{xmin=-0.99 xmax=8.99 ymin=-0.023 ymax=0.253 nomi="t,d_i" poligoni="0,0 2,0 2,0.2 0,0.2;2,0 8,0 8,0.1 2,0.1" linee="0,0.2 2,0.2 2,0 8,0 8,0.1 2,0.1" etichette="-0.78,0.19,0.20;-0.78,0.09,0.10;0.62,0.12,0.40;4.64,0.055,0.60" titolo="Relative frequency represented by the area of each class"}
:::

:::attenzione
With classes of different widths, heights proportional to the counts give the wide classes too much area. Consider 30 waits in the classes $[0,5)$, $[5,10)$, and $[10,20)$ minutes, with 8, 12, and 10 observations. If all the heights are obtained by dividing the count by the same width $5\,\mathrm{min}$, the last rectangle has height $\dfrac{10}{5}=2$ observations per minute and area $2\cdot10=20$, that is, twice the 10 observations it contains. The correct absolute frequency densities are obtained by dividing each count by the width of its own class, and are $\dfrac{8}{5}=1.6$, $\dfrac{12}{5}=2.4$, and $\dfrac{10}{10}=1$ observations per minute. With these heights each area equals the count of the class, and the areas sum to $8+12+10=30$.

::grafico{assi=0 xmin=-2.6 xmax=22.8 ymin=-0.45 ymax=3.05 vettori="-0.6,0,22,0;-0.6,0,-0.6,2.85" poligoni="0,0 5,0 5,1.6 0,1.6;5,0 10,0 10,2.4 5,2.4;10,0 20,0 20,1 10,1" linee="0,1.6 5,1.6 5,0;5,2.4 10,2.4 10,0;10,1 20,1 20,0;-0.75,1 -0.45,1;-0.75,2 -0.45,2" segmenti="10,1,10,2;10,2,20,2;20,2,20,1" etichette="-1.9,0.95,1;-1.9,1.95,2;-0.4,2.95,density;-0.2,-0.22,0;4.8,-0.22,5;9.6,-0.22,10;19.6,-0.22,20;21.4,-0.25,t;2.2,0.75,8;7.2,1.15,12;14.6,0.45,10;13.4,2.18,area 20" titolo="Absolute frequency densities for the three classes. The dashed outline shows the rectangle of height $\dfrac{10}{5}$. Its area of 20 does not match the 10 observations in $[10,20)$."}
:::

:::osservazione
In a **bar chart**, the rectangles are separate and the height represents the count or the proportion of a category; the width of the bars is a design choice. In a histogram, by contrast, the base measures the width of the class on the axis of values. In a **pie chart**, the proportion $f_i$ is represented by a circular sector with angle $360^\circ f_i$; a sector of $90^\circ$, for example, corresponds to a quarter of the total. In all three graphs the label of the axis or of the legend indicates whether counts, proportions, or densities are being read.
:::

:::esempio{titolo="Angles in a pie chart"}
Three categories A, B, and C account for 13, 17, and 10 of 40 observations. The sector angles are $360^\circ\cdot\dfrac{13}{40}=117^\circ$, $360^\circ\cdot\dfrac{17}{40}=153^\circ$, and $360^\circ\cdot\dfrac{10}{40}=90^\circ$. Their sum is $360^\circ$, because the relative frequencies sum to 1. Category C occupies a quarter of the circle, because $\dfrac{10}{40}=\dfrac14$. The ratio of two angles equals the ratio of the counts, for example $\dfrac{153}{117}=\dfrac{17}{13}$, so the chart preserves the comparisons between categories.

::grafico{assi=0 uguale=1 xmin=-1.35 xmax=1.35 ymin=-1.25 ymax=1.25 curve="cos(t),sin(t),0,6.2832" poligoni="0,0 0,-1 0.174,-0.985 0.342,-0.940 0.500,-0.866 0.643,-0.766 0.766,-0.643 0.866,-0.500 0.940,-0.342 0.985,-0.174 1,0" linee="0,0 1,0;0,0 -0.454,0.891;0,0 0,-1" etichette="0.22,0.47,A 117°;-0.72,-0.13,B 153°;0.30,-0.40,C 90°" titolo="Sectors with angles $360^\circ\cdot\dfrac{n_i}{40}$ for the three categories"}
:::

## Two-way tables

:::definizione{#tabelle titolo="Joint, marginal, and conditional frequencies"}
When two variables are recorded on each unit, for example the session attended and the outcome of a test, the counts are collected in a two-way table. The table has one row for each value of the first variable and one column for each value of the second. The cell in row $i$ and column $j$ contains $n_{ij}$, the number of units that have both value $i$ of the first variable and value $j$ of the second.

The row and column totals are called **marginal frequencies**, because they are written in the margins of the table. They are obtained by summing along a row or down a column:

$$
n_{i\cdot}=\sum_j n_{ij},\qquad
n_{\cdot j}=\sum_i n_{ij}.
$$

A dot in place of an index indicates that the sum has been taken over that index. Thus $n_{i\cdot}$ is the total of row $i$ and $n_{\cdot j}$ is the total of column $j$.

Three relative frequencies are obtained from the same cell, and they differ in their denominator.

- The **joint relative frequency** is $\dfrac{n_{ij}}{n}$, that is, the proportion of the cell among all units.
- Within row $i$, the relative frequency of column $j$ is $\dfrac{n_{ij}}{n_{i\cdot}}$, defined when $n_{i\cdot}>0$. It is called the **conditional frequency** of column $j$ given row $i$.
- Within column $j$, the relative frequency of row $i$ is $\dfrac{n_{ij}}{n_{\cdot j}}$, defined when $n_{\cdot j}>0$. It is the conditional frequency of row $i$ given column $j$.

The choice of denominator indicates the reference group: all units, only the units in row $i$, or only the units in column $j$.
:::

:::esempio{titolo="Three questions about the same cell"}
A course has a daytime session and an evening session. The table summarizes the test outcomes of 80 students.

| Session | Passed | Did not pass | Total |
| --- | ---: | ---: | ---: |
| Daytime | 30 | 20 | 50 |
| Evening | 21 | 9 | 30 |
| Total | 51 | 29 | 80 |

The proportion of students who attend the evening session and passed, out of the total, is the joint frequency $\dfrac{21}{80}=0.2625$. Among evening students, the proportion who passed is the conditional frequency $\dfrac{21}{30}=0.70$. Among students who passed, the proportion of evening students is $\dfrac{21}{51}=\dfrac7{17}\approx0.41$. The three numerators coincide because they count the same cell. The denominator changes because the three questions concern, respectively, all students, the evening session only, and only those who passed.

To compare the pass rates of the two sessions, one divides by the totals of the two rows, obtaining $\dfrac{30}{50}=0.60$ for the daytime session and $\dfrac{21}{30}=0.70$ for the evening session. More daytime students passed than evening students, 30 against 21, because the daytime session has 50 students against 30. The counts therefore answer a question about the number of students who passed, while comparing the proportions takes the sizes of the sessions into account.

::grafico{assi=0 xmin=-0.7 xmax=4.4 ymin=-16 ymax=112 vettori="0,0,4.1,0;0,0,0,108" poligoni="0.7,0 1.5,0 1.5,60 0.7,60;2.4,0 3.2,0 3.2,70 2.4,70" linee="0.7,60 0.7,100 1.5,100 1.5,60;2.4,70 2.4,100 3.2,100 3.2,70;-0.08,50 0.08,50;-0.08,100 0.08,100" etichette="-0.5,48,50;-0.6,98,100;0.1,108,share (%);0.82,28,passed 60;0.82,78,failed 40;2.52,33,passed 70;2.52,83,failed 30;0.85,-8,Daytime;2.6,-8,Evening" titolo="Relative frequencies of the outcomes within each session. Each bar uses its own row total as the denominator in $\dfrac{n_{ij}}{n_{i\cdot}}$."}
:::

## Selection and missing data

:::definizione{#campionamento titolo="Simple random, stratified, and convenience sampling"}
A **simple random sample** of size $n$ is obtained by drawing $n$ distinct units of the population by lot, so that every group of $n$ units has the same probability of being chosen. For example, the 2000 students enrolled at a university are numbered and 100 numbers are drawn, without putting back those already drawn; a draw of this kind is said to be without replacement. The calculation of these probabilities is covered in the chapter on probability and combinatorics.

In **stratified sampling** the population is divided, before selection, into disjoint groups called strata, and the units are drawn within each stratum. If the strata are the schools of a university, the number of students to be drawn from each school can be fixed in advance.

If, instead, the people interviewed are those who pass in front of a single classroom, the sample depends on who happens to be at that place at that time. A sample of this kind is called a convenience sample.

A frequency computed on the respondents describes the group that responded. To use it as an estimate of the frequency in the whole population, one needs to know how the units were selected and which of them responded. The chapter on sampling shows how, with random selection, the precision of an estimate is measured by a quantity called the standard error.
:::

:::attenzione
A large sample can describe one part of the population well and miss another. To estimate the travel time of all students, 800 interviews collected outside the university residence hall describe the students who pass by that place. Commuter students, who do not frequent that area, have little chance of being interviewed. Repeating the interviews at the same place increases the number of interviews but leaves this selection mechanism unchanged.
:::

:::esempio{titolo="Response rate and percentage among valid responses"}
Of 120 students invited, 90 answer the question about transportation. Of these, 27 report that they walk. The response rate, that is, the proportion of invitees who responded, is $\dfrac{90}{120}=0.75$. The proportion who walk among the valid responses is $\dfrac{27}{90}=0.30$. The proportion of invitees known to walk is $\dfrac{27}{120}=0.225$.

If the quantity of interest is the actual proportion among all 120 invitees and nothing is known about the 30 who did not respond, a range can be given. The minimum count is 27, if all 30 use some other means of transportation. The maximum is $27+30=57$, if they all walk. The extreme proportions are therefore $\dfrac{27}{120}=0.225$ and $\dfrac{57}{120}=0.475$. The actual proportion among the 120 invitees therefore lies between $0.225$ and $0.475$, whatever means of transportation the 30 nonrespondents use.

::grafico{assi=0 xmin=-4 xmax=124 ymin=-0.32 ymax=1.32 uguale=1 poligoni="0,0 27,0 27,1 0,1" linee="0,0 120,0 120,1 0,1 0,0;27,0 27,1;90,0 90,1" etichette="4,0.46,27 walk;49,0.46,63 other modes;95,0.60,30 did not;96.2,0.32,respond" titolo="Of the 120 invitees, 90 responded and 30 did not. The actual proportion who walk depends on the missing responses."}
:::
