---
titolo: "Probability and data for the TOLC-S"
sommario: "Sample spaces, counting, events, sampling, frequencies, and interpreting tables and graphs."
---

## Sets and outcomes

:::definizione{#insiemi-ed-esiti titolo="Experiment, outcome, and event"}
A random experiment has a result that is not known before it is performed. The **sample space** $\Omega$ collects the possible outcomes, described with the detail needed to answer the question. An **event** is a subset of $\Omega$: it occurs when the observed outcome belongs to that subset. For a die roll, $\Omega=\{1,2,3,4,5,6\}$; the event “even number” is $\{2,4,6\}$. The impossible event is the empty set, while the certain event is the whole sample space.

Probability assigns each event a number between zero and one. We have $P(\Omega)=1$ and $P(\varnothing)=0$. A value greater than one cannot represent a probability: it may result, for example, from repeatedly counting overlapping outcomes. Saying that an outcome is possible does not mean it is as likely as every other outcome.
:::

:::teorema{#equiprobabilita titolo="When outcomes can be counted"}
If the space contains finitely many **equally likely** outcomes, then
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
The symbol $|A|$ denotes the number of outcomes belonging to $A$. For a fair die, the probability of an even number is $\dfrac36=\dfrac12$. Fairness justifies assigning equal probabilities to the faces; without this information, the number of favorable faces alone is insufficient.

The choice of outcomes also matters. With two independent fair coins, the ordered outcomes are $HH,HT,TH,TT$, where $H$ means heads and $T$ tails. The four sequences are equally likely. The three possible numbers of heads, zero, one, and two, instead have probabilities $\dfrac14,\dfrac12,\dfrac14$: grouping outcomes can produce categories with different weights.
:::

## Ordered counting

:::teorema{#conteggi titolo="Successive choices and the product rule"}
If a choice is made in two stages, with $m$ possibilities in the first and $n$ in the second for each initial choice, the total number is $mn$. Three shirts and two pairs of trousers give six combinations of clothing. If there are more than two stages, all the numbers of possibilities are multiplied. This principle counts objects or sequences; it does not require the choices to be random.

One must check whether a choice changes the subsequent options. A code of three distinct letters selected from four letters has $4\cdot3\cdot2=24$ possibilities. If repetition is allowed, there are $4^3=64$. In a three-digit number, moreover, the first digit cannot be zero: this restriction concerns the first position and must be applied before multiplying.
:::

:::definizione{#permutazioni titolo="Order and permutations"}
The factorial $n!$ is the product of the positive integers up to $n$; by convention, $0!=1$. Arranging $n$ distinct objects in a row gives $n!$ orders. If some objects are indistinguishable, permutations among identical copies do not create new arrangements. The word MAMMA contains three Ms and two As: the number of distinct sequences is $\dfrac{5!}{3!2!}=10$.

An adjacency restriction may suggest treating two people as one block. Five people in a row, with Ada and Bruno adjacent, can be arranged by ordering four objects: the block and the other three people. The block has two internal orders, so there are $2\cdot4!=48$ rows. The factor two is necessary because Ada can come before or after Bruno.

When the possibilities belong to disjoint alternative cases, the counts are added. A menu offers two first courses and four main courses: choosing a single dish gives six possibilities; choosing one first course and one main course gives eight. If either a single dish or a pair of dishes is allowed, the total is fourteen. Before adding, one checks that no choice belongs to both cases. Before multiplying, one instead checks that every stage of the choice is required.
:::

## Choices without order

:::definizione{#combinazioni titolo="Combinations and overcounting"}
Choosing $k$ distinct objects from $n$, without assigning roles or considering order, gives
$$
\binom nk=\frac{n!}{k!(n-k)!},\qquad 0\le k\le n.
$$
To select two samples from seven, the ordered count $7\cdot6$ counts every pair twice. Dividing by $2!$ gives $\binom72=21$. In general, the denominator $k!$ removes the different arrangements of the same group. A committee is normally an unordered group; chair and secretary, however, are distinct roles.

Combinations also select positions. A path with three steps right and two steps up has five steps: choosing the two positions of the upward steps determines the whole path. There are therefore $\binom52=10$ paths. Representing a path by positions makes it possible to count without drawing every route.
:::

:::esempio{titolo="Exactly two elements of one category"}
Three objects are selected without order from three red and three blue objects, all distinct. To obtain exactly two red objects, select two of the three red ones and one of the three blue ones:
$$
N=\binom32\binom31=3\cdot3=9.
$$
The total number of groups is $\binom63=20$. If every group is equally likely, the required probability is $\dfrac9{20}$. The word “exactly” excludes both a single red object and three red objects. For a count with “at least two,” the group containing all the red objects would also have to be added.

For four independent trials with success probability $p$, each sequence with three successes and one failure has probability $p^3(1-p)$. The failure has four possible positions, so the probability of exactly three successes is $4p^3(1-p)$. If $p=\dfrac12$, this becomes $\dfrac14$. Counting the positions does not replace the weight of an individual path: with a biased coin, sequences containing different numbers of heads do not all have the same probability.
:::

## Union and complement

:::definizione{#unione-e-complemento titolo="Operations on events"}
The union $A\cup B$ contains outcomes belonging to at least one of the two events. The intersection $A\cap B$ contains those belonging to both. The complement $A^c$ contains outcomes in the sample space that do not belong to $A$. In problem statements, “A or B” is normally inclusive: it also includes both occurring. “Exactly one of the two,” however, excludes the intersection.

Two events are **disjoint** when $A\cap B=\varnothing$. In a single die roll, getting one and getting two are disjoint; getting an even number and getting a number greater than three are not, because four and six belong to both.

::venn{tipo="due" zone="ab" titolo="The intersection contains only the outcomes common to the two events"}
:::

:::teorema{#regole-eventi titolo="Addition and complementation of probabilities"}
For every pair of events,
$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
In the sum $P(A)+P(B)$, the intersection is counted twice; subtracting it once restores the correct weight. For disjoint events, the subtracted term is zero. The probability of “exactly one of the two” is instead $P(A)+P(B)-2P(A\cap B)$, because the common part must be removed completely.

If $A\subseteq B$, the region $B\setminus A$ has nonnegative probability, so $P(A)\le P(B)$. Inclusion between events therefore imposes an ordering on their probabilities.

The complement is useful for “at least one.” With two independent fair coins, the only sequence with no heads is $TT$, with probability $\dfrac14$. The probability of at least one head is therefore $1-\dfrac14=\dfrac34$. This method includes one and two heads together without counting them twice.
:::

## Independence and conditioning

:::definizione{#indipendenza-e-condizionamento titolo="Restricting the reference population"}
The conditional probability $P(A\mid B)$ answers the question: how likely is $A$, given that $B$ occurred? If $P(B)>0$,
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Only the part of the space belonging to $B$ is retained, and its weights are rescaled to total one. Given that a fair die shows an even number, the remaining outcomes are $2,4,6$, still equally likely. The conditional probability of six is therefore $\dfrac13$. The denominator is no longer the total number of faces.

If $P(B)=0$, this formula does not define conditional probability: division by zero is impossible. Moreover, $P(A\mid B)$ and $P(B\mid A)$ have different denominators and are not generally equal. Reading the information introduced by “given that” precisely determines which event belongs in the denominator.
:::

:::definizione{#indipendenza titolo="Independence and incompatibility"}
Events $A$ and $B$ are independent when
$$
P(A\cap B)=P(A)P(B).
$$
If $P(B)>0$, this is equivalent to $P(A\mid B)=P(A)$: learning $B$ does not change the probability of $A$. Independence must be specified by the model or checked using the data. Having equal probabilities does not make two events independent.

Disjoint events with positive probabilities are not independent. Their intersection has probability zero, whereas the product of their probabilities is positive. Knowing that one has occurred rules out the other. For two independent coin tosses, by contrast, the first result does not change the distribution of the second. Even after many consecutive heads, the probability of the next head remains one half in the model of a fair coin with independent tosses.

Conditioning on a third event may instead change independence: when two coins are tossed, selecting only cases with at least one head removes TT and changes the relationship between the results in the two positions.

Independence is preserved when taking complements. If two devices work independently with probabilities $\dfrac45$ and $\dfrac34$, the probability that neither works is $\dfrac15\cdot\dfrac14=\dfrac1{20}$. The probability that at least one works is therefore $\dfrac{19}{20}$. If the devices share a cause of failure and independence is not given, multiplying their failure probabilities is not justified. The calculation depends on the relationships between events as well as their individual probabilities.
:::

## Sampling and tree diagrams

:::teorema{#estrazioni-e-diagrammi-ad-albero titolo="Probability along a path"}
The definition of conditioning gives
$$
P(A\cap B)=P(A)P(B\mid A),
$$
when $P(A)>0$. The product describes both conditions occurring, even without a temporal ordering between them. A tree diagram organizes these possibilities: each node represents what is already known, and the subsequent branches show probabilities conditional on that history. The probabilities on the branches leaving one node sum to one. Probabilities are multiplied along each path, and disjoint alternative paths realizing the required event are added.

With three red and two blue balls, drawing two red balls without replacement has probability $\dfrac35\cdot\dfrac24=\dfrac3{10}$. The first red ball leaves two red balls among four balls. Replacing the ball and mixing each time, with independent uniform draws, makes the probability $\dfrac35\cdot\dfrac35=\dfrac9{25}$. Replacement changes the model and therefore changes the second factor.
:::

:::esempio{#probabilita-totale titolo="Adding paths and reversing information"}
One of two urns is chosen with equal probability: the first contains three red balls and one blue ball, the second one red and three blue. A ball is then drawn uniformly from the chosen urn. The two paths producing red have probabilities
$$
P(U_1\cap R)=\frac12\cdot\frac34=\frac38,\qquad
P(U_2\cap R)=\frac12\cdot\frac14=\frac18.
$$
Thus $P(R)=\dfrac38+\dfrac18=\dfrac12$. If a red ball is observed, the probability that it came from the first urn is $\dfrac{\frac38}{\frac12}=\dfrac34$. Red is compatible with both urns, but makes the first more likely. The division compares the desired path with all the paths producing the observation.
:::

## Variables and frequencies

:::definizione{#variabili titolo="What is being observed"}
A qualitative variable describes a category, such as color or species. A quantitative variable describes an amount. It is discrete when its values arise from counting, such as the number of books borrowed; it is continuous in a model of measurement, such as mass or duration. An instrument may round a measurement without turning the physical quantity into a count.

A numerical code assigned to a species remains a qualitative label. For ordered categories such as low, medium and high, a median can be identified; an arithmetic mean instead requires quantitative values rather than arbitrary codes.

The population is the set of units addressed by the investigation; the sample is the group actually observed. Every frequency must be associated with this reference group. “Twelve students” is a count, whereas “forty percent” is a proportion that requires knowing how many students were considered.
:::

:::definizione{#frequenze titolo="Absolute, relative, and cumulative frequencies"}
The absolute frequency $n_i$ counts how often a value or category occurs. If the total is $N>0$, the relative frequency is $f_i=\dfrac{n_i}{N}$. For disjoint categories covering all observations, absolute frequencies sum to $N$ and relative frequencies sum to one. With multiple responses to the same questionnaire, a person may belong to several categories: the sum of the counts can then exceed the number of respondents.

For ordered data, cumulative frequency up to a value counts all observations no greater than that value. If the cumulative counts up to two and up to three are eleven and nineteen, respectively, the frequency of three is $19-11=8$. A cumulative count cannot decrease as the threshold increases. The final cumulative count equals the total if it includes all the observed values.

Frequencies can locate positions without expanding the entire list. With frequencies five, seven, three, and one for the values zero, one, two, and three, there are sixteen observations. The eighth and ninth positions determine the median. The first five observations are zero, and the sixth through twelfth are one, so both central positions contain one. The median is one, although the mean need not equal it. Cumulative frequencies identify precisely which group contains each position.
:::

## Mean, median, and variables

:::definizione{#media-mediana-e-variabili titolo="Mean and weights"}
The arithmetic mean of $N$ data values is their sum divided by $N$. If the values $x_i$ have frequencies $n_i$,
$$
\bar x=\frac{\sum_i n_ix_i}{\sum_i n_i}.
$$
Frequency indicates how many times each value contributes to the sum. To combine two groups, their means must therefore be weighted by group size: ten results with mean eighteen and thirty with mean twenty-six give $\dfrac{10\cdot18+30\cdot26}{40}=24$. Simply averaging the two means is guaranteed to be correct for equally sized groups. It is also correct, regardless of group sizes, when the two means are equal.

The mean retains the unit of the data and must lie between the minimum and maximum. Knowing the mean and the number of values allows the sum to be recovered, but not the individual values or, in general, the median. Different distributions may have the same mean.
:::

:::definizione{#mediana-moda titolo="Central position and dispersion"}
To find the median, order all the data, including repetitions. If $N$ is odd, take the value in position $\dfrac{N+1}{2}$; if it is even, average the values in positions $\dfrac N2$ and $\dfrac N2+1$. A mode is a value with maximum frequency and may not be unique. The range is the difference between maximum and minimum and provides a simple measure of dispersion.

At least half of the observations are no greater than the median and at least half are no smaller. The individual group medians do not generally determine the median of their union.

For the data $1,2,3,4,100$, the median is three and the mean is twenty-two. Replacing one hundred with two hundred leaves the median at three while increasing the mean by twenty. An extreme value strongly affects the sum but may leave the central position unchanged. Adding a constant to every value increases the mean and median by that constant while leaving the range unchanged.
:::

## Tables and percentages

:::esempio{#tabelle-e-percentuali titolo="Cell, margin, and denominator"}
A table records forty students enrolled in two courses.

| Course | Present | Absent | Total |
| --- | ---: | ---: | ---: |
| A | 12 | 8 | 20 |
| B | 9 | 11 | 20 |
| Total | 21 | 19 | 40 |

Selecting an enrolled student uniformly, the probability of being present and belonging to B is $\dfrac9{40}$. Given that the student is present, the probability of B is $\dfrac9{21}=\dfrac37$. Given instead that the student belongs to B, the probability of being present is $\dfrac9{20}$. The numerator stays nine while the reference group changes with the question. Marginal totals collect a row or column without imposing the other characteristic.
:::

:::osservazione{#percentuali-dati titolo="Percentages, points, and rounding"}
A relative frequency is converted to a percentage by multiplying by one hundred. Moving from twenty to twenty-five percent is an increase of five **percentage points**; the relative increase is instead $\dfrac{25-20}{20}=25\%$. The two measures answer different questions.

When groups of different sizes are combined, first add the counts, then divide by the combined total. A published percentage may also be rounded. Ten people out of thirty represent $33.\overline3\%$, which rounds to $33\%$ to the nearest integer: the product $30\cdot0.33$ need not be an integer. The stated precision determines which counts are compatible with the data.
:::

## Graphs and interpretation

:::definizione{#grafici titolo="Bars, sectors, and histograms"}
In a bar chart, heights represent frequencies or other quantities indicated on the vertical axis. The scale and the axis origin must be read before comparing bars visually. A pie chart represents parts of a total: a sector of angle $\theta$ degrees corresponds to the fraction $\dfrac{\theta}{360}$ of the total.

In a histogram with unequal class widths, frequency is represented by rectangle area. Height is a density: it must be multiplied by class width. Two rectangles with widths two and three and heights six and four both have area twelve, so they represent equal frequencies. Comparing only their heights would lead to an incorrect conclusion.

Classes must also specify endpoint inclusion. In the intervals $[0,2)$ and $[2,5)$, the value two belongs only to the second class: each observation is counted once. If areas represent relative frequencies, they sum to one; if they represent absolute frequencies, they sum to the number of observations. A graph grouping data into intervals loses the individual values within them: it may allow the observations in a class to be counted without determining their exact mean.

::grafico{poligoni="0,0 2,0 2,6 0,6;2,0 5,0 5,4 2,4" xmin=-0.5 xmax=5.5 ymin=-0.5 ymax=7 nomi="x,d" titolo="Classes of width two and three: equal areas despite different heights"}
:::

:::osservazione{#campioni titolo="What the data allow us to conclude"}
An observed frequency describes the collected sample. It need not equal the model's theoretical probability and does not guarantee the frequency of the next trial. Seven heads in ten tosses do not make the probability of the next head seven tenths if the model specifies independent fair tosses.

To extend a result to the population, one must consider how the sample was selected. A voluntary survey may mainly attract people already interested in the subject; increasing the number of responses does not automatically remove this imbalance. When some responses are missing, only bounds may be available for the population share: consider the extremes where all nonrespondents are opposed or all are favorable. A comparison of rates may also reverse when subgroups of very different sizes are combined; the total incorporates these weights too. Finally, an observed relationship between two variables does not by itself show that one causes the other: other shared characteristics may be involved. These limitations concern interpretation even when the numerical calculations are correct.
:::
