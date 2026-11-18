---
titolo: "Elementary Probability"
sommario: "Equally likely outcomes, events, counting with trees and tables, conditional probability, and observed frequencies."
---

## Experiments, outcomes, and events

:::definizione{#eventi titolo="Sample space and what to record"}
A **random experiment** has an outcome that is uncertain before the trial. The **sample space** $\Omega$ lists all the elementary outcomes in the model. An **event** $E\subseteq\Omega$ occurs if the observed outcome belongs to $E$. The empty set is the impossible event. The entire sample space is the certain event.

The outcome depends on what we record. For two coin tosses, we can keep the order of the tosses. Using $H$ for heads and $T$ for tails, the sample space is $\{HH,HT,TH,TT\}$. The event “exactly one head” contains two outcomes, $HT$ and $TH$. If we record only the number of heads, the possible values are $0$, $1$, and $2$. The value $1$ groups together two outcomes from the original model.
:::

:::esempio{titolo="Outcomes that give the same count"}
Each cell in the grid corresponds to one ordered outcome. Exactly one head means choosing the two cells off the main diagonal. For independent tosses of a fair coin, the four cells are equally likely. Grouping them by the number of heads therefore gives different probabilities for the three counts.

::grafico{assi=0 xmin=-0.75 xmax=3.2 ymin=-0.7 ymax=3.2 linee="0,0 2.6,0 2.6,2.6 0,2.6 0,0;1.3,0 1.3,2.6;0,1.3 2.6,1.3" etichette="0.65,1.95,HH;1.95,1.95,HT;0.65,0.65,TH;1.95,0.65,TT;0.65,2.92,H;1.95,2.92,T;-0.32,1.95,H;-0.32,0.65,T" titolo="The first toss determines the row and the second determines the column"}
:::

## Classical probability and the weights of categories

::::teorema{#classica titolo="Counting equally likely outcomes"}
If $\Omega$ contains $N>0$ equally likely outcomes and $E$ contains $n$ of them, then
$$
P(E)=\frac{n}{N}.
$$
This ratio is between $0$ and $1$. The empty event has probability $0$ and the whole sample space has probability $1$.

:::dimostrazione
The $N$ elementary outcomes are pairwise mutually exclusive and cover all the possibilities. Their probabilities add to $1$. If every outcome has the same probability $p$, then $Np=1$ and $p=\dfrac1N$. The event $E$ consists of $n$ mutually exclusive outcomes, so their contributions add to $\dfrac nN$.
:::
::::

:::esempio{titolo="Different colors, equally likely individual tiles"}
A bag holds four orange tiles and two purple tiles, identical to the touch. Numbering the tiles makes the six equally likely elementary outcomes explicit. The probability of drawing orange is $\dfrac46=\dfrac23$. Purple has probability $\dfrac26=\dfrac13$. Counting just the two color names would give equal weight to categories containing different numbers of tiles.

::grafico{assi=0 xmin=-0.1 xmax=3.55 ymin=-0.8 ymax=4.8 poligoni="0.48,0 1.34,0 1.34,4 0.48,4;2,0 2.86,0 2.86,2 2,2" linee="0.15,0 3.21,0" etichette="0.4,-0.42,Orange;2.05,-0.42,Purple;0.83,4.37,4;2.35,2.37,2" titolo="The bar heights count the elementary outcomes of each color"}
:::

:::esempio{titolo="One die and two probability models"}
A die assigns the face $6$ twice the weight of each of the other faces, which all have the same weight. If each of those faces has weight $p$, the sum of the six weights is $5p+2p=1$, giving $p=\dfrac17$. The event “even score” consists of $2$, $4$, and $6$. In this model its probability is $\dfrac17+\dfrac17+\dfrac27=\dfrac47$.

In the fair die model those same three faces have a combined probability of $\dfrac12$. The model changed the weights while keeping the sample space. The probability of an event is the sum of the weights of its individual faces even when a simple ratio of counts does not apply.
:::

## Complements and at-least-one events

::::teorema{#complementare titolo="Subtracting from the certain event"}
The **complement** $E^c=\Omega\setminus E$ contains all outcomes for which $E$ fails to occur. We have
$$
P(E^c)=1-P(E).
$$

:::dimostrazione
Each outcome belongs to exactly one of $E$ and $E^c$. Their probabilities add to $P(\Omega)=1$, from which the formula follows.
:::
::::

:::esempio{titolo="At least one six in two rolls"}
When you roll a fair die twice, a six can appear on the first roll, the second, or both. Adding the two events directly would count the case with two sixes twice. The complement is simpler to count. Neither roll shows $6$, so each coordinate has five permitted values. That gives $5\cdot5=25$ of the $36$ equally likely ordered pairs in the complement. Therefore
$$
P(\text{at least one six})=1-\frac{25}{36}=\frac{11}{36}.
$$
The grid highlights the row and column that contain a six. Their intersection $(6,6)$ is a single ordered pair.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,6 6,1" punti="1,6;2,6;3,6;4,6;5,6;6,6;6,1;6,2;6,3;6,4;6,5" nomi="First,Second" titolo="Eleven ordered pairs have at least one coordinate equal to 6"}
:::

## Unions, intersections, and mutually exclusive events

::::teorema{#unione titolo="Adding probabilities with an overlap"}
The union $A\cup B$ occurs when at least one event occurs. The intersection $A\cap B$ requires both. We have
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

:::dimostrazione
The three regions $A\setminus B$, $A\cap B$, and $B\setminus A$ are mutually exclusive. Their probabilities add to the probability of the union. The sum $P(A)+P(B)$ includes the first and last regions once, but includes the middle region twice. Subtracting one copy of the middle region gives the probability of the union.
:::
::::

:::esempio{titolo="Finding the overlap from three totals"}
Out of one hundred participants, $56$ chose $A$, $38$ chose $B$, and $74$ chose at least one activity. For a uniformly random selection, divide the counts by one hundred to get the probabilities. Applying the same relationship to the counts shows that $56+38-74=20$ people chose both. There are $36$ in $A$ only, $18$ in $B$ only, and $26$ in neither. The four regions add to one hundred.

::venn{zone="ab" elementi="a:36;ab:20;b:18;u:26" nomi="A,B" universo=1 titolo="The overlap counts the participants who chose both activities"}

Events are **mutually exclusive** when $A\cap B=\varnothing$. In that case each outcome contributes at most once, and direct addition is valid. In this example, the overlap contains twenty people, so adding $56+38$ gives a number larger than the size of the union.
:::

:::esempio{titolo="Checking whether two probabilities can fit the same model"}
If $P(A)=\dfrac34$ and $P(B)=\dfrac23$, their sum exceeds one. The intersection must have probability at least $\dfrac34+\dfrac23-1=\dfrac5{12}$ to keep $P(A\cup B)\le1$. The smallest value is possible when the complement of the union is empty. To construct it, use twelve equally likely outcomes and assign five to the overlap, four to $A$ only, and three to $B$ only.

A proposed intersection of $\dfrac13$ would give a union probability of $\dfrac{13}{12}$. It is therefore incompatible with those marginal probabilities. Counting the regions both rules out the proposal and shows that the lower bound can be attained.
:::

## Compound experiments and tree diagrams

:::definizione{#composti titolo="Paths and ordered pairs"}
In a multistage experiment, a complete outcome specifies the result of every trial in order. In a tree diagram, each node describes the situation reached at that stage. An edge leads to the next result and carries the probability of that step given the situation at its starting node. Multiply along a path. If multiple complete paths form an event, add their weights because the complete outcomes are mutually exclusive.
:::

:::esempio{titolo="Two dice totals with different probabilities"}
For two independent rolls of a fair die there are $36$ equally likely ordered pairs. The total $7$ comes from the six pairs $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$. The total $8$ runs from $(2,6)$ to $(6,2)$, giving five pairs. The probabilities are $\dfrac16$ and $\dfrac5{36}$, respectively. A pair giving an even total may have two identical coordinates, as in $(4,4)$, which is a single outcome.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,1;2,6 6,2" punti="1,6;2,5;3,4;4,3;5,2;6,1;2,6;3,5;4,4;5,3;6,2" nomi="First,Second" titolo="The total of 7 has six points on its diagonal. The total of 8 has five."}
:::

## Independence

:::definizione{#indipendenza titolo="Checking independence through the intersection"}
Two events $A$ and $B$ are independent if
$$
P(A\cap B)=P(A)P(B).
$$
With uniform draws from a bag with replacement, the contents return to their original composition after each draw. If there are two red balls out of five, the probability of two reds is $\dfrac25\cdot\dfrac25=\dfrac4{25}$.
:::

:::esempio{titolo="Two questions about the same number"}
Choose an integer uniformly from $1$ to $8$. Let $A$ be “the number is even” and $B$ be “the number is greater than $4$.” Each event includes four of the eight outcomes. The common numbers are $6$ and $8$, so
$$
\begin{aligned}
P(A\cap B)&=\frac28=\frac14,\\[6pt]
P(A)P(B)&=\frac12\cdot\frac12=\frac14.
\end{aligned}
$$
The proportion of even numbers is the same at or below $4$ as it is above $4$. Independence can occur when the two events arise from the same experiment.

::venn{zone="ab" elementi="a:2,4;ab:6,8;b:5,7;u:1,3" nomi="A,B" universo=1 titolo="The overlap contains two of the eight outcomes"}

If two mutually exclusive events both have positive probability, the product of their probabilities is positive, while the intersection has probability zero. In that case the independence equation cannot hold.
:::

:::osservazione{titolo="Independence with the complement of one event"}
When $A$ and $B$ are independent, split $A$ into the outcomes with $B$ and those with $B^c$. Subtracting the first group gives
$$
\begin{aligned}
P(A\cap B^c)&=P(A)-P(A\cap B)\\[6pt]
&=P(A)-P(A)P(B)\\[6pt]
&=P(A)(1-P(B))=P(A)P(B^c).
\end{aligned}
$$
So $A$ and $B^c$ are also independent. For example, if two independent trials have success probabilities $\dfrac23$ and $\dfrac14$, the probability of succeeding only on the first is $\dfrac23\cdot\dfrac34=\dfrac12$. The formula incorporates failure on the second trial as a condition, with probability complementary to its success probability.
:::

## Drawing without replacement

:::esempio{#dipendenza titolo="Updating the bag after the first draw"}
A bag contains three red balls $R$ and two blue balls $B$. Draw twice uniformly without replacement. A red first draw leaves two reds and two blues. A blue first draw leaves three reds and one blue. The probabilities on the second set of branches therefore depend on the first outcome.

::grafico{assi=0 xmin=-0.7 xmax=7.6 ymin=-4 ymax=4 linee="0,0 3,2 6,3;3,2 6,1;0,0 3,-2 6,-1;3,-2 6,-3" etichette="1.5,1.85,3/5;1.5,-1.85,2/5;4.5,3.1,2/4;4.5,0.9,2/4;4.5,-0.9,3/4;4.5,-3.1,1/4;6.6,3,RR;6.6,1,RB;6.6,-1,BR;6.6,-3,BB" titolo="The two middle nodes represent different sets of balls remaining in the bag"}

| Path | First step | Second step | Path probability |
|---|---|---|---|
| $RR$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $RB$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $BR$ | $\dfrac25$ | $\dfrac34$ | $\dfrac3{10}$ |
| $BB$ | $\dfrac25$ | $\dfrac14$ | $\dfrac1{10}$ |

The event “two different colors” consists of $RB$ and $BR$. Adding their probabilities gives $\dfrac35$. A direct count reaches the same result. Labeling the five balls gives $5\cdot4=20$ ordered pairs. The number of pairs with different colors is $3\cdot2+2\cdot3=12$. The four path probabilities in the table sum to $1$ because the paths cover all possible outcomes.
:::

:::esempio{titolo="The second color when the first is still unknown"}
Let $r$ be the number of red balls and $b$ the number of blue balls, with at least one of each and $n=r+b$. Before the first color is known, the probability of a red second draw adds two branches, first red and first blue.
$$
\frac rn\cdot\frac{r-1}{n-1}
+\frac bn\cdot\frac r{n-1}
=\frac{r(r+b-1)}{n(n-1)}=\frac rn.
$$
The probability of a red second draw on its own equals that of a red first draw. If you learn that the first ball was red, only the branch with conditional probability $\dfrac{r-1}{n-1}$ remains. With five red and three blue balls the two probabilities are $\dfrac58$ and $\dfrac47$. The first outcome thus affects the calculation when you learn it.
:::

## Conditional probability

::::teorema{#condizionata titolo="Restricting the set of possible outcomes"}
If $P(B)>0$, the **conditional probability** of $A$ given that $B$ occurred is
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

:::dimostrazione
In a finite model with equally likely outcomes, let $N$ be the total number of outcomes, $n_B$ the number in $B$, and $n_{AB}$ the number in $A\cap B$. The condition restricts the denominator to $n_B$, with $n_{AB}$ favorable outcomes. Dividing both parts of $\dfrac{n_{AB}}{n_B}$ by $N$ gives the ratio of the two probabilities. If outcomes have different probabilities, the same rule uses the sums of their weights in place of counts.
:::
::::

:::esempio{titolo="The condition determines which total to use"}
Out of $80$ students, $50$ took a practice test ($B$) and $40$ passed the exam ($A$). Both statements are true for $30$ students. A two-way table gives the counts.

| | Passed the exam | Did not pass | Total |
|---|---:|---:|---:|
| Took the practice test | 30 | 20 | 50 |
| Did not take the practice test | 10 | 20 | 30 |
| Total | 40 | 40 | 80 |

Among the students who took the practice test, the share who passed is $P(A\mid B)=\dfrac{30}{50}=\dfrac35$. Among those who passed, the share who took the practice test is $P(B\mid A)=\dfrac{30}{40}=\dfrac34$. The numerator is the same, but the first calculation reads a row and the second reads a column.

::venn{zone="ab" elementi="a:10;ab:30;b:20;u:20" nomi="A,B" universo=1 titolo="Both conditional probabilities use the overlap and have different reference regions"}

The definition gives $P(A\cap B)=P(B)P(A\mid B)$, the product used along a path when the second probability depends on the first outcome. If $A$ and $B$ are independent and $P(B)>0$, then $P(A\mid B)=P(A)$.
:::

## Relative frequencies and the model

:::definizione{#frequenza titolo="Theoretical probability and observations"}
If $E$ occurs $n_E$ times in $N>0$ trials, the observed relative frequency is $f_E=\dfrac{n_E}{N}$. Its percentage is $100f_E\%$. In a fair coin model, the probability of heads is $\dfrac12$. The observed number of heads is a data point that can vary from one run of the experiment to another.
:::

:::esempio{titolo="Cumulative frequency after blocks of twenty tosses"}
A sequence of tosses gives $13$ heads after $20$ tosses and $51$ heads after $100$ tosses. The graph shows the cumulative proportions after five blocks.

| Total tosses | Total heads | Cumulative frequency |
|---:|---:|---:|
| 20 | 13 | $0.650$ |
| 40 | 23 | $0.575$ |
| 60 | 32 | $\dfrac8{15}$ |
| 80 | 42 | $0.525$ |
| 100 | 51 | $0.510$ |

::grafico{assi=0 xmin=-12 xmax=117 ymin=0.427 ymax=0.725 linee="12,0.69 12,0.46 105,0.46;20,0.46 20,0.454;40,0.46 40,0.454;60,0.46 60,0.454;80,0.46 80,0.454;100,0.46 100,0.454" segmenti="12,0.5,105,0.5" punti="20,0.65;40,0.575;60,0.533333333;80,0.525;100,0.51" etichette="17,0.440,20;37,0.440,40;57,0.440,60;77,0.440,80;96,0.440,100;-1,0.497,0.50;-1,0.547,0.55;-1,0.597,0.60;-1,0.647,0.65;12,0.711,Frequency;104,0.473,Tosses" titolo="The observations are points. The horizontal line marks the theoretical probability of 0.5."}

The ratios get closer to $\dfrac12$ in this sequence. The data after $40$ trials already include the first twenty tosses. To find the number of heads in the second block alone, subtract the cumulative counts, giving $23-13=10$. The relative frequency for just that block is $\dfrac{10}{20}=\dfrac12$.
:::

:::esempio{titolo="Combining groups of different sizes"}
Two classes toss the same coin. The first records $8$ heads in $10$ tosses, while the second records $18$ in $30$. The overall relative frequency is
$$
\frac{8+18}{10+30}=\frac{26}{40}=0.65.
$$
Giving equal weight to the two proportions would yield $0.70$. Every toss must have the same weight, so the sample of thirty tosses counts three times as much as the sample of ten. The combined relative frequency is closer to the larger group’s proportion.
:::
