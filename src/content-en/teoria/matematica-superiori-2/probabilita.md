---
titolo: "Elementary Probability"
sommario: "Equally likely outcomes, events, counting with trees and tables, conditional probability, and observed frequencies."
---

## Experiments, outcomes, and events

:::definizione{#eventi titolo="Sample space and what to record"}
A **random experiment** is a trial whose result is not known before it is carried out, such as rolling a die or drawing a ball from a bag. Each possible result is called an **outcome**.

The **sample space** is the set of all possible outcomes and is denoted by $\Omega$, the capital Greek letter omega. For a die, $\Omega=\{1,2,3,4,5,6\}$.

An **event** is a subset of $\Omega$, that is, a group of outcomes, and is written $E\subseteq\Omega$ (the symbol $\subseteq$ is read “is contained in”). The event $E$ occurs if the outcome obtained belongs to $E$. With a die, “an even number comes up” is the event $E=\{2,4,6\}$, and it occurs if $4$ comes up.

Two events are special.

- The empty set $\varnothing$, which contains no outcomes, is the **impossible event**.
- The whole of $\Omega$ is the **certain event**, because every outcome belongs to it.

The outcomes depend on what we choose to record. When a coin is tossed twice, we can keep the order of the tosses. Using $H$ for heads and $T$ for tails, the sample space is $\{HH,HT,TH,TT\}$, where $HT$ means heads on the first toss and tails on the second. The event “exactly one head” contains two outcomes, $HT$ and $TH$. If instead we record only the number of heads, there are three possible values, $0$, $1$, and $2$. The value $1$ groups together the two outcomes $HT$ and $TH$ of the previous model.
:::

:::esempio{titolo="Outcomes that give the same count"}
The grid places each ordered outcome in a cell. The first toss determines the row and the second determines the column. The event “exactly one head” corresponds to the two cells off the main diagonal, $HT$ and $TH$.

With a **fair** coin, meaning heads and tails are equally likely, and with tosses that do not influence each other, the four cells have the same probability $\dfrac14$. Grouping them by the number of heads therefore gives different probabilities.

- $0$ heads: only $TT$, probability $\dfrac14$.
- $1$ head: $HT$ and $TH$, probability $\dfrac24=\dfrac12$.
- $2$ heads: only $HH$, probability $\dfrac14$.

::grafico{assi=0 xmin=-0.75 xmax=3.2 ymin=-0.7 ymax=3.2 linee="0,0 2.6,0 2.6,2.6 0,2.6 0,0;1.3,0 1.3,2.6;0,1.3 2.6,1.3" etichette="0.65,1.95,HH;1.95,1.95,HT;0.65,0.65,TH;1.95,0.65,TT;0.65,2.92,H;1.95,2.92,T;-0.32,1.95,H;-0.32,0.65,T" titolo="The first toss determines the row and the second determines the column"}
:::

## Classical probability and the weights of categories

::::teorema{#classica titolo="Counting equally likely outcomes"}
Outcomes are called **equally likely** when they all have the same probability. An object is chosen **uniformly** (or “at random”) when every object has the same probability of being chosen, like a ball drawn from a bag without looking.

If $\Omega$ contains $N>0$ equally likely outcomes and the event $E$ contains $n$ of them, the probability of $E$ is
$$
P(E)=\frac{n}{N}=\frac{\text{number of favourable outcomes}}{\text{number of possible outcomes}}.
$$
For example, with a **fair** die, meaning a die whose six faces are equally likely, the event “even” contains $3$ outcomes out of $6$, so $P(\text{even})=\dfrac36=\dfrac12$. The number of elements of an event is also written $|E|$ or $\#E$, so $P(E)=\dfrac{|E|}{|\Omega|}$.

Since $0\le n\le N$, this ratio is between $0$ and $1$. It equals $0$ for the impossible event, which has $n=0$, and $1$ for the certain event, which has $n=N$.

The same idea applies to a spinner that stops at a uniformly chosen point. A sector with an angle of $\alpha$ degrees ($\alpha$ is the Greek letter alpha) has probability $\dfrac{\alpha}{360}$. A sector of $90^\circ$ therefore has probability $\dfrac{90}{360}=\dfrac14$.

:::dimostrazione
The $N$ outcomes are pairwise **mutually exclusive**, that is, two different outcomes cannot occur together. They also cover all the possibilities. Therefore their probabilities add to $1$. If they all have the same value $p$, the sum is $Np=1$, so $p=\dfrac1N$. The event $E$ consists of $n$ mutually exclusive outcomes, each with probability $\dfrac1N$, so
$$
P(E)=n\cdot\frac1N=\frac nN.
$$
:::
::::

:::esempio{titolo="Different colours, equally likely individual tiles"}
A bag holds four orange tiles and two purple tiles, identical to the touch. The equally likely outcomes are the individual tiles. Numbering the tiles from $1$ to $6$ shows the six elementary outcomes. Four are orange and two are purple, so
$$
P(\text{orange})=\frac46=\frac23,\qquad P(\text{purple})=\frac26=\frac13.
$$
There are only two colour names. If the two colours were taken as the possible outcomes, each would have probability $\dfrac12$, that is, the same weight to categories containing different numbers of tiles.

::grafico{assi=0 xmin=-0.1 xmax=3.55 ymin=-0.8 ymax=4.8 poligoni="0.48,0 1.34,0 1.34,4 0.48,4;2,0 2.86,0 2.86,2 2,2" linee="0.15,0 3.21,0" etichette="0.4,-0.42,Orange;2.05,-0.42,Purple;0.83,4.37,4;2.35,2.37,2" titolo="The bar heights count the elementary outcomes of each colour"}
:::

:::esempio{titolo="One die and two probability models"}
A **loaded** die gives the face $6$ twice the weight of each of the other faces, which all have the same weight. The **weight** of a face is its probability. If each of the faces $1$ to $5$ has weight $p$, the face $6$ has weight $2p$. The weights of the six faces add to $1$, so
$$
5p+2p=1,\qquad 7p=1,\qquad p=\frac17.
$$
The event “even score” consists of $2$, $4$, and $6$. In this model its probability is
$$
\frac17+\frac17+\frac27=\frac47.
$$

With a fair die those same three faces have a combined probability of $\dfrac36=\dfrac12$. The two models have the same sample space and different weights. When the outcomes are not equally likely, the ratio $\dfrac nN$ does not apply, and the probability of an event is found by adding the weights of its outcomes.
:::

## Complements and at-least-one events

::::teorema{#complementare titolo="Subtracting from the certain event"}
The **complement** of $E$ is the event made up of the outcomes of $\Omega$ that are not in $E$. It is written $E^c=\Omega\setminus E$ (read “omega minus $E$”) or $\overline E$, and it is also called the **complementary event**. It occurs exactly when $E$ does not occur. We have
$$
P(E^c)=1-P(E).
$$
With a fair die, the complement of “a $6$ comes up” is “a number from $1$ to $5$ comes up”, and it has probability $1-\dfrac16=\dfrac56$.

:::dimostrazione
Each outcome belongs to exactly one of $E$ and $E^c$, and together the two events make up all of $\Omega$. Therefore $P(E)+P(E^c)=P(\Omega)=1$. Subtracting $P(E)$ from both sides gives $P(E^c)=1-P(E)$.
:::
::::

:::esempio{titolo="At least one six in two rolls"}
A fair die is rolled twice. The outcomes are the $6\cdot6=36$ ordered pairs $(\text{first},\text{second})$, all equally likely. The event “at least one six” occurs with a six on the first roll, on the second, or on both. Adding the cases “six on the first” and “six on the second” would count the pair $(6,6)$ twice.

The complement is simpler to count. The complement of “at least one six” is “no six”, and in that case each roll has five permitted values, from $1$ to $5$. The complement therefore contains $5\cdot5=25$ of the $36$ pairs, and
$$
P(\text{at least one six})=1-\frac{25}{36}=\frac{36-25}{36}=\frac{11}{36}.
$$
The grid highlights the row and the column that contain a six. The point $(6,6)$ is shared by the two lines and is a single pair, so there are $6+6-1=11$ points.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,6 6,1" punti="1,6;2,6;3,6;4,6;5,6;6,6;6,1;6,2;6,3;6,4;6,5" nomi="First,Second" titolo="Eleven ordered pairs have at least one coordinate equal to 6"}
:::

## Unions, intersections, and mutually exclusive events

::::teorema{#unione titolo="Adding probabilities with an overlap"}
Given two events $A$ and $B$, we use three operations already met with sets.

- The **union** $A\cup B$ (“$A$ or $B$”) contains the outcomes that are in at least one of the two events.
- The **intersection** $A\cap B$ (“$A$ and $B$”) contains the outcomes that are in both.
- The **difference** $A\setminus B$ (“$A$ but not $B$”) contains the outcomes of $A$ that are not in $B$.

We have
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
For example, with a fair die let $A$ be “even” and $B$ be “greater than $3$”. Then $A\cap B=\{4,6\}$ and $P(A\cup B)=\dfrac36+\dfrac36-\dfrac26=\dfrac46$; indeed $A\cup B=\{2,4,5,6\}$.

:::dimostrazione
The union splits into three regions with no outcomes in common, $A\setminus B$, $A\cap B$, and $B\setminus A$. Therefore $P(A\cup B)$ is the sum of the probabilities of the three regions. In the sum $P(A)+P(B)$ the region $A\setminus B$ appears once, inside $P(A)$, and the region $B\setminus A$ appears once, inside $P(B)$. The middle region $A\cap B$ instead appears twice, because it lies in both $A$ and $B$. Subtracting $P(A\cap B)$ once leaves every region counted exactly once, and this gives $P(A\cup B)$.
:::
::::

:::esempio{titolo="Finding the overlap from three totals"}
Out of one hundred participants, $56$ chose activity $A$, $38$ chose activity $B$, and $74$ chose at least one activity. One person is selected uniformly, so each probability is the count divided by one hundred. The union formula also holds for counts, so the number of people who chose both activities is
$$
56+38-74=20.
$$
The other regions of the diagram follow from this.

- $A$ only: $56-20=36$.
- $B$ only: $38-20=18$.
- Neither: $100-74=26$.

The four regions add to $36+20+18+26=100$.

::venn{zone="ab" elementi="a:36;ab:20;b:18;u:26" nomi="A,B" universo=1 titolo="The overlap counts the participants who chose both activities"}

Two events are **mutually exclusive** when they cannot occur together, that is, when $A\cap B=\varnothing$. In that case $P(A\cap B)=0$ and the formula becomes $P(A\cup B)=P(A)+P(B)$, because each outcome is counted at most once. In the example the overlap contains twenty people, so the direct sum $56+38=94$ exceeds by $20$ the number $74$ of people in the union.
:::

:::esempio{titolo="Checking whether two probabilities can fit the same model"}
Let $P(A)=\dfrac34$ and $P(B)=\dfrac23$. Their sum is $\dfrac34+\dfrac23=\dfrac{17}{12}$, greater than one. Since $P(A\cup B)\le1$, the union formula gives
$$
P(A\cap B)=P(A)+P(B)-P(A\cup B)\ge\frac34+\frac23-1=\frac{9+8-12}{12}=\frac5{12}.
$$
The smallest value, $\dfrac5{12}$, is reached when the union is the whole sample space, that is, when no outcome lies outside both events. A model that attains it has twelve equally likely outcomes, distributed as follows.

- Five in the overlap $A\cap B$.
- Four in $A$ only, so $|A|=4+5=9$ and $P(A)=\dfrac9{12}=\dfrac34$.
- Three in $B$ only, so $|B|=3+5=8$ and $P(B)=\dfrac8{12}=\dfrac23$.

The three regions add to $5+4+3=12$.

A proposed intersection of $\dfrac13=\dfrac4{12}$ would instead give $P(A\cup B)=\dfrac{9+8-4}{12}=\dfrac{13}{12}$, greater than one. It is therefore incompatible with the given **marginal probabilities**, that is, with the probabilities $P(A)$ and $P(B)$ of the single events. Counting the regions rules out the proposal and shows that the lower bound $\dfrac5{12}$ can be attained.
:::

## Compound experiments and tree diagrams

:::definizione{#composti titolo="Paths and ordered pairs"}
An experiment can consist of several trials one after another, such as two rolls of a die. A complete outcome gives the result of each trial in the order in which it happens. With two trials the outcome is an **ordered pair**, in which order matters: $(1,6)$ and $(6,1)$ are different outcomes.

A **tree diagram** represents these trials.

- Each **node** (point of the tree) describes the situation reached so far.
- Each **branch** (or edge) leads from the node to the result of the next trial and carries the probability of that result in the situation of the node.
- A **path** goes from the start to the end of the tree and corresponds to one complete outcome.

The probability of a path is the product of the probabilities of its branches. If an event consists of several paths, their probabilities are added, because two different complete outcomes are mutually exclusive. For example, when a fair coin is tossed twice the path “heads, then tails” has probability $\dfrac12\cdot\dfrac12=\dfrac14$, and the event “one head and one tail” adds the two paths $HT$ and $TH$, so it has probability $\dfrac14+\dfrac14=\dfrac12$.
:::

:::esempio{titolo="Two dice totals with different probabilities"}
A fair die is rolled twice, with independent rolls, that is, rolls that do not influence each other. There are $36$ equally likely ordered pairs.

- The total $7$ comes from the six pairs $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, so it has probability $\dfrac6{36}=\dfrac16$.
- The total $8$ comes from the five pairs $(2,6),(3,5),(4,4),(5,3),(6,2)$, so it has probability $\dfrac5{36}$.

From one pair to the next the first number goes up by one and the second goes down by one, so the total stays the same and the points lie on a diagonal. In the total $8$ the pair $(4,4)$ has equal coordinates and swapping them gives the same pair, so it is counted only once.

::grafico{xmin=0 xmax=7 ymin=0 ymax=7 linee="1,6 6,1;2,6 6,2" punti="1,6;2,5;3,4;4,3;5,2;6,1;2,6;3,5;4,4;5,3;6,2" nomi="First,Second" titolo="The total of 7 has six points on its diagonal. The total of 8 has five."}
:::

## Independence

:::definizione{#indipendenza titolo="Checking independence through the intersection"}
Two events $A$ and $B$ are **independent** if
$$
P(A\cap B)=P(A)P(B).
$$
In words, the probability that both occur is the product of the two probabilities. To check independence, both sides are computed and compared. If they are different, the events are called **dependent**.

A typical case is drawing **with replacement**, where the ball drawn is put back into the bag before the next draw. The bag returns to its original contents each time, so the result of the first draw does not change the probabilities of the second. If the bag has two red balls out of five, the probability that two draws with replacement are both red is
$$
\frac25\cdot\frac25=\frac4{25}.
$$
:::

:::esempio{titolo="Two questions about the same number"}
An integer is chosen uniformly from $1$ to $8$. Let $A$ be the event “the number is even” and $B$ the event “the number is greater than $4$”. Each contains four of the eight outcomes, so $P(A)=P(B)=\dfrac12$. The common numbers are $6$ and $8$, so
$$
\begin{aligned}
P(A\cap B)&=\frac28=\frac14,\\[6pt]
P(A)P(B)&=\frac12\cdot\frac12=\frac14.
\end{aligned}
$$
The two values are equal, so $A$ and $B$ are independent. The reason is that the proportion of even numbers is the same below and above $4$. Indeed, among $1,2,3,4$ two out of four are even, and among $5,6,7,8$ again two out of four are even. Independence can therefore occur between two events of the same experiment.

::venn{zone="ab" elementi="a:2,4;ab:6,8;b:5,7;u:1,3" nomi="A,B" universo=1 titolo="The overlap contains two of the eight outcomes"}

Two mutually exclusive events with positive probabilities are not independent. Indeed the product $P(A)P(B)$ is positive, while $P(A\cap B)=0$ because the intersection is empty. With a die, “a $1$ comes up” and “a $2$ comes up” have product $\dfrac16\cdot\dfrac16=\dfrac1{36}$ and an intersection of probability $0$.
:::

:::osservazione{titolo="Independence with the complement of one event"}
Let $A$ and $B$ be independent. The outcomes of $A$ split into those that are also in $B$ and those that are in $B^c$, so $P(A)=P(A\cap B)+P(A\cap B^c)$. Subtracting $P(A\cap B)$ gives
$$
\begin{aligned}
P(A\cap B^c)&=P(A)-P(A\cap B)\\[6pt]
&=P(A)-P(A)P(B)\\[6pt]
&=P(A)(1-P(B))=P(A)P(B^c).
\end{aligned}
$$
The second step uses independence; the third factors out $P(A)$ and uses $1-P(B)=P(B^c)$. So $A$ and $B^c$ are also independent.

For example, two independent trials succeed with probabilities $\dfrac23$ and $\dfrac14$. “Succeeding only on the first” means succeeding on the first and failing on the second. Failure on the second has probability $1-\dfrac14=\dfrac34$, so
$$
P(\text{only the first})=\frac23\cdot\frac34=\frac12.
$$
:::

## Drawing without replacement

:::esempio{#dipendenza titolo="Updating the bag after the first draw"}
When drawing **without replacement**, the ball drawn stays out of the bag. After each draw both the total number of balls and the number of balls of the colour drawn change.

A bag contains three red balls $R$ and two blue balls $B$. Two uniform draws are made without replacement.

- If the first is red, two reds and two blues are left, that is, four balls.
- If the first is blue, three reds and one blue are left.

The probabilities on the branches of the second draw therefore depend on the first outcome. In the tree, the upper middle node corresponds to the bag with two reds and two blues, the lower one to the bag with three reds and one blue.

::grafico{assi=0 xmin=-0.7 xmax=7.6 ymin=-4 ymax=4 linee="0,0 3,2 6,3;3,2 6,1;0,0 3,-2 6,-1;3,-2 6,-3" etichette="1.5,1.85,3/5;1.5,-1.85,2/5;4.5,3.1,2/4;4.5,0.9,2/4;4.5,-0.9,3/4;4.5,-3.1,1/4;6.6,3,RR;6.6,1,RB;6.6,-1,BR;6.6,-3,BB" titolo="The two middle nodes represent different sets of balls remaining in the bag"}

The probability of each path is the product of its two branches.

| Path | First step | Second step | Path probability |
|---|---|---|---|
| $RR$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $RB$ | $\dfrac35$ | $\dfrac24$ | $\dfrac3{10}$ |
| $BR$ | $\dfrac25$ | $\dfrac34$ | $\dfrac3{10}$ |
| $BB$ | $\dfrac25$ | $\dfrac14$ | $\dfrac1{10}$ |

The event “two different colours” consists of the paths $RB$ and $BR$, so it has probability $\dfrac3{10}+\dfrac3{10}=\dfrac35$.

A direct count gives the same value. Labelling the five balls, the first draw has $5$ choices and the second $4$, so there are $5\cdot4=20$ ordered pairs. The pairs with different colours are $3\cdot2=6$ with red first and $2\cdot3=6$ with blue first, $12$ in all, and $\dfrac{12}{20}=\dfrac35$. The four probabilities in the table add to $1$, because the paths cover all the possibilities.
:::

:::esempio{titolo="The second colour when the first is still unknown"}
A bag has $r$ red balls and $b$ blue balls, with at least one of each colour, and $n=r+b$ balls in total. Two draws are made without replacement and the first is not looked at. The second is red along two paths.

- Red first and then red: after the first draw, $r-1$ reds are left out of $n-1$ balls.
- Blue first and then red: after the first draw, still $r$ reds are left out of $n-1$ balls.

Adding the two paths and factoring out $r$ in the numerator,
$$
\frac rn\cdot\frac{r-1}{n-1}
+\frac bn\cdot\frac r{n-1}
=\frac{r(r-1)+br}{n(n-1)}
=\frac{r(r+b-1)}{n(n-1)}=\frac rn,
$$
where the last step uses $r+b-1=n-1$. The probability that the second ball is red, taken on its own, is therefore equal to the probability that the first is red.

If instead it is known that the first ball was red, only one branch remains, with probability $\dfrac{r-1}{n-1}$. With five red and three blue balls the two values are $\dfrac58$, with no information, and $\dfrac47$, knowing that the first was red. The result of the first draw therefore changes the calculation when it is known.
:::

## Conditional probability

::::teorema{#condizionata titolo="Restricting the set of possible outcomes"}
The **conditional probability** of $A$ given $B$ is the probability of $A$ when it is known that $B$ has occurred. It is written $P(A\mid B)$ and read “probability of $A$ given $B$”. If $P(B)>0$, it is computed with
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Knowing that $B$ occurred restricts the possible outcomes to those of $B$. For example, with a fair die, knowing that an even number came up, the probability that a $6$ came up is
$$
P(\{6\}\mid\text{even})=\frac{\frac16}{\frac36}=\frac13.
$$

:::dimostrazione
Consider a finite model with equally likely outcomes. Let $N$ be the total number of outcomes, $n_B$ the number of outcomes in $B$, and $n_{AB}$ the number of outcomes in $A\cap B$. Knowing that $B$ occurred, the possible outcomes are the $n_B$ outcomes of $B$ and the favourable ones are the $n_{AB}$ outcomes that are also in $A$, so $P(A\mid B)=\dfrac{n_{AB}}{n_B}$. Dividing numerator and denominator by $N$ gives
$$
\frac{n_{AB}}{n_B}=\frac{\frac{n_{AB}}{N}}{\frac{n_B}{N}}=\frac{P(A\cap B)}{P(B)}.
$$
When the outcomes have different probabilities, the same rule applies with sums of weights in place of counts.
:::
::::

:::esempio{titolo="The condition determines which total to use"}
Out of $80$ students, $50$ took a practice test (event $B$) and $40$ passed the exam (event $A$). Both statements are true for $30$ of them. The counts go into a **two-way table**, in which each cell counts the students who have the property of its row and that of its column. The other cells follow by subtraction; for example, $50-30=20$ students took the practice test without passing the exam.

| | Passed the exam | Did not pass | Total |
|---|---:|---:|---:|
| Took the practice test | 30 | 20 | 50 |
| Did not take the practice test | 10 | 20 | 30 |
| Total | 40 | 40 | 80 |

- Among the students who took the practice test, the share who passed is $P(A\mid B)=\dfrac{30}{50}=\dfrac35$. This reads the row “Took the practice test”.
- Among those who passed, the share who took the practice test is $P(B\mid A)=\dfrac{30}{40}=\dfrac34$. This reads the column “Passed the exam”.

The numerator is the same, $30$, while the denominator is the total of the group given by the condition.

::venn{zone="ab" elementi="a:10;ab:30;b:20;u:20" nomi="A,B" universo=1 titolo="Both conditional probabilities use the overlap and have different reference regions"}

Multiplying both sides of the definition by $P(B)$ gives
$$
P(A\cap B)=P(B)P(A\mid B).
$$
This is the product used along a branch of the tree when the second probability depends on the first outcome. If $A$ and $B$ are independent and $P(B)>0$, substituting $P(A\cap B)=P(A)P(B)$ into the definition gives $P(A\mid B)=\dfrac{P(A)P(B)}{P(B)}=P(A)$, that is, knowing that $B$ occurred does not change the probability of $A$.
:::

## Relative frequencies and the model

:::definizione{#frequenza titolo="Theoretical probability and observations"}
An experiment is repeated $N>0$ times and we count how many times the event $E$ occurs. If $E$ occurs $n_E$ times, the **relative frequency** of $E$ is
$$
f_E=\frac{n_E}{N}.
$$
As a percentage it is $100f_E\%$. For example, $13$ heads in $20$ tosses give $f=\dfrac{13}{20}=0.65$, that is, $65\%$.

Probability and relative frequency are two different numbers. In a fair coin model the probability of heads is $\dfrac12$ and is fixed by the model. The number of heads observed is instead collected data, which changes from one series of tosses to another.
:::

:::esempio{titolo="Cumulative frequency after blocks of twenty tosses"}
A sequence of coin tosses gives $13$ heads after $20$ tosses and $51$ after $100$. The **cumulative frequency** after a given number of tosses is the number of heads from the start up to that point divided by the number of tosses made. The table and the graph show it at the end of each of the five blocks of twenty tosses.

| Total tosses | Total heads | Cumulative frequency |
|---:|---:|---:|
| 20 | 13 | $0.650$ |
| 40 | 23 | $0.575$ |
| 60 | 32 | $\dfrac8{15}$ |
| 80 | 42 | $0.525$ |
| 100 | 51 | $0.510$ |

::grafico{assi=0 xmin=-12 xmax=117 ymin=0.427 ymax=0.725 linee="12,0.69 12,0.46 105,0.46;20,0.46 20,0.454;40,0.46 40,0.454;60,0.46 60,0.454;80,0.46 80,0.454;100,0.46 100,0.454" segmenti="12,0.5,105,0.5" punti="20,0.65;40,0.575;60,0.533333333;80,0.525;100,0.51" etichette="17,0.440,20;37,0.440,40;57,0.440,60;77,0.440,80;96,0.440,100;-1,0.497,0.50;-1,0.547,0.55;-1,0.597,0.60;-1,0.647,0.65;12,0.711,Frequency;104,0.473,Tosses" titolo="The observations are points. The horizontal line marks the theoretical probability of 0.5."}

In this sequence the cumulative frequencies get closer to the theoretical probability $\dfrac12$. After sixty tosses the frequency is $\dfrac8{15}\approx0.533$.

The figure after $40$ tosses already includes the first twenty. The heads in the second block alone are found by subtracting the cumulative counts, $23-13=10$. The relative frequency of the second block alone is therefore $\dfrac{10}{40-20}=\dfrac{10}{20}=\dfrac12$.
:::

:::esempio{titolo="Combining groups of different sizes"}
Two classes toss the same coin. The first records $8$ heads in $10$ tosses, a frequency of $0.8$, and the second $18$ heads in $30$ tosses, a frequency of $0.6$. The overall frequency is found by adding the heads and adding the tosses:
$$
\frac{8+18}{10+30}=\frac{26}{40}=0.65.
$$
The simple average of the two ratios would be $\dfrac{0.8+0.6}{2}=0.70$, a different value. In the overall frequency every toss counts the same, so the group of thirty tosses carries three times the weight of the group of ten. This is why $0.65$ is closer to $0.6$, the ratio of the larger group.
:::
