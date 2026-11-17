---
titolo: Elementary probability
sommario: Outcomes and events, classical probability, complements, unions, successive trials, independence, and relative frequencies.
---

## Experiments and events

:::definizione{#eventi titolo="Outcome space"}
The result of a **random experiment** is unknown before the trial. The **sample space** $\Omega$ contains all possible elementary outcomes. An **event** is a set of such outcomes.

For a fair die, $\Omega=\{1,2,3,4,5,6\}$. The event “an even number” is $\{2,4,6\}$. The certain event is all of $\Omega$. The impossible event is the empty set.

A probability lies between zero and one. In the finite model with equally likely outcomes used here, zero corresponds to the impossible event and one to the certain event.
:::

## Classical probability

:::teorema{#classica titolo="Favorable and possible outcomes"}
If the outcomes form a finite set and are equally likely,
$$
P(E)=\frac{\text{number of favorable outcomes}}{\text{number of possible outcomes}}.
$$
For a fair die, the probability of a number greater than four is $\dfrac26=\dfrac13$.

Check that the model makes the outcomes equally likely. A biased coin may have different probabilities for its two sides. In a uniform draw from an urn of balls that feel identical, each individual ball is equally likely to be selected.

If the numbers of balls of each color differ, the colors are not equally likely.
:::

## The complement

:::teorema{#complementare titolo="The event that does not occur"}
The **complement** $\overline E$ contains every outcome outside $E$. Since the two events are disjoint and cover the sample space,
$$
P(\overline E)=1-P(E).
$$
Suppose a box contains three defective items and seventeen intact items. If an item is selected uniformly, its probability of being intact is $1-\dfrac3{20}=\dfrac{17}{20}$.

The complement is useful for events that require at least one occurrence. In three independent tosses of a fair coin, the probability of at least one head is $1-\dfrac18=\dfrac78$ because the only complementary outcome is three tails.
:::

## Union and intersection

:::teorema{#unione titolo="Counting without double-counting"}
The union $A\cup B$ means that at least one event occurs. The intersection $A\cap B$ means that both occur. The probabilities satisfy
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Subtract the contribution of the intersection because it was added twice. If the events are **mutually exclusive**, their intersection is empty and their probabilities add directly.

For a die, the intersection of “even” and “greater than four” is $\{6\}$. Their union is $\{2,4,5,6\}$ and has probability $\dfrac46=\dfrac23$.

::venn{zone="a,ab,b" elementi="a:2,4;ab:6;b:5;u:1,3" nomi="Even,>4" universo=1 titolo="The union includes both events and counts $6$ once"}
:::

## Compound experiments

:::teorema{#composti titolo="Ordered pairs and tree diagrams"}
In two successive rolls of a die, an outcome is an ordered pair. The first coordinate records the first result and the second records the second result. There are $6\cdot6=36$ possible pairs, and they are equally likely for fair and independent rolls.

A sum of seven occurs in six pairs, from $(1;6)$ to $(6;1)$, and has probability $\dfrac16$. A sum of two occurs in one pair and has probability $\dfrac1{36}$. Thus the eleven possible sums are not equally likely.

A tree diagram represents each trial by one level. The product of the branch probabilities along a path gives the probability of that path. For an event made up of distinct paths, add their probabilities because the paths are mutually exclusive.
:::

## Independence and replacement

:::definizione{#indipendenza titolo="Probabilities that stay the same"}
Two events $A$ and $B$ are **independent** if
$$
P(A\cap B)=P(A)P(B).
$$
For an urn with two red and three blue balls, the probability of two reds in two draws with replacement is $\dfrac25\cdot\dfrac25=\dfrac4{25}$.

Mutual exclusivity and independence describe different properties. Mutually exclusive events with positive probabilities are dependent because knowing that one occurs makes the other impossible.
:::

## Without replacement

:::teorema{#dipendenza titolo="Updating the counts"}
Without replacement, the first draw changes what remains in the urn. Calculate the probability on the second draw using the remaining outcomes.

With two red and three blue balls, the probability of drawing two reds is
$$
\frac25\cdot\frac14=\frac1{10}.
$$
After a red ball is drawn first, one red and three blue balls remain. To obtain one red and one blue in either order, add the probabilities of red then blue and blue then red.
$$
\frac25\frac34+\frac35\frac24=\frac35.
$$
The two paths are mutually exclusive, and each uses the correct counts after the first draw.
:::

:::esempio{titolo="The branch changes after the first draw"}
An urn contains three red and two blue balls. Two uniform draws are made without replacement. Write $R$ for red and $B$ for blue. In the diagram, the first level records the color of the first ball and the second level records the color of the second ball. After $R$ first, two red balls and two blue balls remain. After $B$ first, three red balls and one blue ball remain.

::grafico{assi=0 xmin=-0.7 xmax=7.6 ymin=-4 ymax=4 linee="0,0 3,2 6,3;3,2 6,1;0,0 3,-2 6,-1;3,-2 6,-3" etichette="1.5,1.85,3/5;1.5,-1.85,2/5;4.5,3.1,2/4;4.5,0.9,2/4;4.5,-0.9,3/4;4.5,-3.1,1/4;6.6,3,RR;6.6,1,RB;6.6,-1,BR;6.6,-3,BB" titolo="Branch probabilities for two draws without replacement"}

To get a different color on the second draw, consider $RB$ and $BR$. The paths have the same probability because $\dfrac35\cdot\dfrac24=\dfrac25\cdot\dfrac34=\dfrac3{10}$. Since the paths are mutually exclusive, the total probability is $\dfrac35$.
:::

## Conditional probability

:::definizione{#condizionata titolo="Restricting the outcomes with given information"}
If $B$ is known to occur, consider only its outcomes, those in $B$. Among these, the outcomes favorable to $A$ are those in $A\cap B$. The **conditional probability** of $A$ given $B$, with $P(B)>0$, is

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

For example, select an integer uniformly from $1$ to $8$. Let $A$ be the event “multiple of $4$” and $B$ the event “even number.” If the number is known to be even, consider $2$, $4$, $6$, and $8$. Two even numbers are multiples of $4$, so the conditional probability is $\dfrac24=\dfrac12$.

::venn{tipo="incluso" zone="a,ab" elementi="a:2,6;ab:4,8;u:1,3,5,7" nomi="B,A" universo=1 titolo="The given information restricts the outcomes to the four even numbers"}

The formula gives $P(A\cap B)=P(B)P(A\mid B)$. For example, in draws without replacement, the probability that the second ball is red is calculated given that the first was red. If the events are independent and $P(B)>0$, then $P(A\mid B)=P(A)$.
:::

## Frequency and probability

:::definizione{#frequenza titolo="Experimental data"}
If an event occurs $n_E$ times in $N>0$ trials, its observed **relative frequency** is $f_E=\dfrac{n_E}{N}$. It lies between zero and one.

If a coin lands heads $47$ times in $100$ tosses, the relative frequency is $0.47$. In the fair coin model, the theoretical probability remains $0.5$. Data from finitely many tosses may differ from the theoretical value.

Multiply the relative frequency by one hundred to express it as a percentage. A frequency of $0.35$ corresponds to $35\%$. When describing an experiment, distinguish the theoretical model from the observed data.
:::
