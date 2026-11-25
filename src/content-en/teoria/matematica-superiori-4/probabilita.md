---
titolo: "Probability and conditional probability"
sommario: "Random experiments and events, the classical, frequentist, subjective, and axiomatic approaches to probability, the addition and multiplication rules, conditional probability and independent events, counting methods for draws, the law of total probability, Bayes’ theorem, and repeated trials."
---

## Random experiments and events

:::definizione{#esperimento-aleatorio titolo="Random experiments and sample spaces"}
A **random experiment** is an experiment for which all possible results are known, but whose result cannot be predicted with certainty before it is performed. Rolling a die, drawing a card from a deck, and tossing a coin are random experiments. Each possible result is called an **outcome**.

The set of all outcomes is called the **sample space** and is denoted by $\Omega$. When a die is rolled, the sample space is
$$
\Omega = \{ 1, 2, 3, 4, 5, 6 \} .
$$
When two coins are tossed, the outcomes are ordered pairs of results, so $\Omega = \{ TT, TC, CT, CC \}$, where $T$ denotes heads and $C$ denotes tails. The sample space is the starting point for every calculation, since probabilities are assigned to its elements.
:::

:::esempio{titolo="The sample space for rolling two dice"}
Roll a red die and a blue die. Each outcome is an ordered pair $(a, b)$, where $a$ is the number on the red die and $b$ the number on the blue die. There are $6$ choices for the first number and $6$ for the second, so the sample space contains $6 \cdot 6 = 36$ elements. The pairs $(1, 2)$ and $(2, 1)$ are distinct outcomes, since the $2$ is on the blue die in the first case and on the red die in the second.

::grafico{punti="1,1;1,2;1,3;1,4;1,5;1,6;2,1;2,2;2,3;2,4;2,5;2,6;3,1;3,2;3,3;3,4;3,5;3,6;4,1;4,2;4,3;4,4;4,5;4,6;5,1;5,2;5,3;5,4;5,5;5,6;6,1;6,2;6,3;6,4;6,5;6,6" f="7-x" xmin=0 xmax=7 ymin=0 ymax=7 uguale=1 nomi="a,b" titolo="The $36$ outcomes of rolling two dice, shown as points $(a, b)$ in the plane. The $6$ points on the line $a + b = 7$ are the outcomes with sum $7$"}

:::

:::definizione{#eventi titolo="Events"}
An **event** is a subset of the sample space. An event is said to occur when the outcome of the experiment belongs to that subset. On a roll of a die, the event “an even number comes up” is $A = \{ 2, 4, 6 \}$ and occurs if the result is $2$, $4$, or $6$.

- An event consisting of a single outcome is called an **elementary event**, for example $\{ 5 \}$.
- The sample space $\Omega$ is the **certain event**, since it always occurs.
- The empty set $\varnothing$ is the **impossible event**, since it never occurs. On a roll of a die, “rolling $7$” is the impossible event.

Expressing events as sets allows us to use set operations to describe compound events, such as “the number rolled is even *or* greater than $4$.”
:::

## Operations on events

:::definizione{#operazioni-eventi titolo="Union, intersection, and complement"}
Let $A$ and $B$ be two events in the same sample space $\Omega$.

- The **union** $A \cup B$ is the event that *at least one* of the two events occurs. It corresponds to the word “or.”
- The **intersection** $A \cap B$ is the event that *both* events occur. It corresponds to the word “and.”
- The **complement** of $A$, denoted by $\overline{A}$, is the set of outcomes in $\Omega$ that do not belong to $A$. It occurs exactly when $A$ does not occur.

On a roll of a die, let $A = \{ 2, 4, 6 \}$ be “rolling an even number” and $B = \{ 5, 6 \}$ be “rolling a number greater than $4$.” Then
$$
A \cup B = \{ 2, 4, 5, 6 \} ,
\qquad
A \cap B = \{ 6 \} ,
\qquad
\overline{A} = \{ 1, 3, 5 \} .
$$

::venn{zone="a,ab,b" nomi="A,B" universo=1 ambiente="Ω" elementi="a:2,4;ab:6;b:5;u:1,3" titolo="The union $A \cup B$ is the shaded region and contains the outcomes that belong to at least one of the two events, namely $2$, $4$, $5$, and $6$"}

:::

:::esempio{titolo="Intersection and complement in a Venn diagram"}
For the same events $A = \{ 2, 4, 6 \}$ and $B = \{ 5, 6 \}$, the intersection is the region common to the two circles and contains the single outcome $6$. The complement of $A$ is everything outside the circle for $A$, so it contains $1$, $3$, and $5$.

::venn{zone="ab" nomi="A,B" universo=1 ambiente="Ω" elementi="a:2,4;ab:6;b:5;u:1,3" titolo="The intersection $A \cap B = \{ 6 \}$ is the region common to the two events"}

::venn{zone="b,u" nomi="A,B" universo=1 ambiente="Ω" elementi="a:2,4;ab:6;b:5;u:1,3" titolo="The complement $\overline{A} = \{ 1, 3, 5 \}$ is the part of $\Omega$ outside $A$"}

An event and its complement have no outcomes in common, and together they form the entire sample space. Therefore
$$
A \cap \overline{A} = \varnothing ,
\qquad
A \cup \overline{A} = \Omega .
$$
:::

:::definizione{#eventi-incompatibili titolo="Mutually exclusive events"}
Two events $A$ and $B$ are **mutually exclusive** if they cannot occur together, that is, if
$$
A \cap B = \varnothing .
$$
Otherwise the events can occur together. On a roll of a die, the events $A = \{ 1, 2 \}$, “rolling a number less than $3$,” and $B = \{ 5, 6 \}$, “rolling a number greater than $4$,” are mutually exclusive. The events “rolling an even number” and “rolling a multiple of $3$” can occur together, since they share the outcome $6$. An event and its complement are always mutually exclusive. For mutually exclusive events, the probability of the union is found by simple addition, as the addition rule shows.

::venn{tipo="disgiunti" zone="a,b" nomi="A,B" universo=1 ambiente="Ω" elementi="a:1,2;b:5,6;u:3,4" titolo="The events $A = \{ 1, 2 \}$ and $B = \{ 5, 6 \}$ are mutually exclusive, since the two sets have no outcomes in common"}

:::

## Definitions of probability

:::definizione{#probabilita-classica titolo="Classical definition"}
The probability of an event is a number between $0$ and $1$ that measures how likely the event is to occur. The first definition applies when the sample space is finite and the outcomes are **equally likely**, meaning that all have the same chance of occurring, as with the faces of a fair die. In this case the probability of an event $E$ is the ratio of the number of favorable outcomes to the number of possible outcomes:
$$
P(E) = \frac{\text{number of outcomes favorable to } E}{\text{number of possible outcomes}} .
$$
On a roll of a fair die, “rolling an even number” has $3$ favorable outcomes out of $6$ possible outcomes, so $P(\text{even}) = \dfrac{3}{6} = \dfrac{1}{2}$. When two dice are rolled, the sum $7$ is obtained with the $6$ pairs $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$, so $P(\text{sum } 7) = \dfrac{6}{36} = \dfrac{1}{6}$.

The definition implies that $0 \leq P(E) \leq 1$, since the number of favorable outcomes cannot exceed the total number of possible outcomes. The impossible event has probability $0$ and the certain event has probability $1$.
:::

:::attenzione
The classical definition applies *only* to equally likely outcomes. When two dice are rolled, the possible sums are the eleven numbers from $2$ to $12$, but the probability of a sum of $2$ differs from $\dfrac{1}{11}$. Indeed, the sum $2$ is obtained only with the pair $(1, 1)$, so $P(\text{sum } 2) = \dfrac{1}{36}$, whereas the sum $7$ has probability $\dfrac{6}{36}$. The equally likely outcomes are the $36$ ordered pairs, so these are the outcomes to count.
:::

:::definizione{#probabilita-frequentista titolo="Frequentist definition"}
Many experiments have outcomes that are not equally likely. For example, a thumbtack tossed onto a table may land with its point up or on its side, and there is no reason to expect the two outcomes to have the same probability. In such cases the experiment is repeated many times under the same conditions. If in $n$ trials the event $E$ occurs $k$ times, the **relative frequency** of $E$ is
$$
f(E) = \frac{k}{n} .
$$
The **empirical law of large numbers** states that when $n$ is large, the relative frequency takes values close to the probability of the event, and that the approximation usually improves as $n$ increases. The **frequentist definition** takes the probability of $E$ to be the relative frequency calculated over a large number of trials. For example, if a thumbtack is tossed $500$ times and lands point up $310$ times, the estimate is
$$
P(\text{point up}) \approx \frac{310}{500} = 0.62 .
$$
This definition is used for repeatable events, such as estimating the percentage of defective items produced by a machine.
:::

:::definizione{#probabilita-soggettiva titolo="Subjective definition"}
Some events cannot be repeated, such as a team winning a particular game. The **subjective definition** uses a bet to measure a person’s degree of belief that an event will occur. The probability of $E$ is the ratio between the amount $S$ the person is willing to pay and the amount $V$ the person receives if the event occurs:
$$
P(E) = \frac{S}{V} .
$$
The bet must be **coherent**, meaning that the person must also be willing to take the other side of the bet, receiving $S$ and paying out $V$. If Luca is willing to pay $3$ euros to receive $5$ euros if his team wins, his probability for a win is $\dfrac{3}{5}$.
:::

## The axiomatic approach

:::definizione{#assiomi-probabilita titolo="Axioms of probability"}
The three preceding definitions share certain properties. The **axiomatic approach** starts with these properties and calls any function satisfying them a probability measure. Let $\Omega$ be a finite sample space. A **probability measure** is a function $P$ that assigns to each event $E$ a real number $P(E)$ such that the following three axioms hold.

1. $P(E) \geq 0$ for every event $E$.
2. $P(\Omega) = 1$.
3. If $A$ and $B$ are mutually exclusive, then $P(A \cup B) = P(A) + P(B)$.

For a finite space, it suffices to assign a nonnegative number to each outcome so that all the numbers add up to $1$. The probability of an event is then the sum of the probabilities of its outcomes. The classical definition is the case in which all outcomes have the same probability $\dfrac{1}{n}$, where $n$ is the number of outcomes.
:::

:::esempio{titolo="A loaded die"}
A die is loaded so that the face $6$ comes up with probability $\dfrac{1}{4}$, while the other five faces are equally likely. By the second axiom the probabilities of the six faces add up to $1$, so the five faces from $1$ to $5$ together have probability $1 - \dfrac{1}{4} = \dfrac{3}{4}$, and each has probability
$$
\frac{3}{4} \cdot \frac{1}{5} = \frac{3}{20} .
$$
The probability of rolling an even number is the sum of the probabilities of the faces $2$, $4$, and $6$:
$$
P(\text{even}) = \frac{3}{20} + \frac{3}{20} + \frac{1}{4} = \frac{3 + 3 + 5}{20} = \frac{11}{20} .
$$
The classical definition does not apply here, since the outcomes are not equally likely, whereas the axioms allow us to calculate the probability of every event.
:::

::::teorema{#evento-contrario titolo="Probability of the complement"}
For every event $E$,
$$
P\left( \overline{E} \right) = 1 - P(E) .
$$
The rule is useful when it is easier to count the outcomes in the complement. For example, when three coins are tossed, the event “at least one head” includes seven outcomes, while its complement, “three tails,” contains only $CCC$. There are $2^3 = 8$ equally likely outcomes, so
$$
P(\text{at least one head}) = 1 - P(CCC) = 1 - \frac{1}{8} = \frac{7}{8} .
$$

:::dimostrazione
Express the certain event as the union of two mutually exclusive events. The events $E$ and $\overline{E}$ are mutually exclusive, and their union is $\Omega$. By the third axiom we therefore have $P(\Omega) = P(E) + P\left( \overline{E} \right)$. By the second axiom $P(\Omega) = 1$, so
$$
P(E) + P\left( \overline{E} \right) = 1 ,
$$
which gives the stated result.
:::
::::

::::teorema{#proprieta-probabilita titolo="Consequences of the axioms"}
For every probability measure $P$, the following properties hold.

- $P(\varnothing) = 0$.
- If $A \subseteq B$, then $P(A) \leq P(B)$.
- $0 \leq P(E) \leq 1$ for every event $E$.

The second property states that an event containing another has probability at least as great as that of the event it contains. For example, on a roll of a die, “rolling $6$” is contained in “rolling an even number,” and indeed $\dfrac{1}{6} \leq \dfrac{1}{2}$.

:::dimostrazione
The empty set is the complement of the certain event, so by the complement rule $P(\varnothing) = 1 - P(\Omega) = 1 - 1 = 0$.

Suppose $A \subseteq B$. The event $B$ is the union of $A$ and $B \cap \overline{A}$, the outcomes in $B$ that are not in $A$. The two events are mutually exclusive, so by the third axiom
$$
P(B) = P(A) + P\left( B \cap \overline{A} \right) .
$$
The second term is greater than or equal to $0$ by the first axiom, so $P(B) \geq P(A)$.

Finally, every event $E$ is contained in $\Omega$. The property just proved gives $P(E) \leq P(\Omega) = 1$, and $P(E) \geq 0$ by the first axiom.
:::
::::

## The addition rule

:::teorema{#somma-incompatibili titolo="Addition for mutually exclusive events"}
If $E_1, E_2, \ldots, E_n$ are pairwise mutually exclusive events, meaning that no two have an outcome in common, then
$$
P(E_1 \cup E_2 \cup \ldots \cup E_n) = P(E_1) + P(E_2) + \ldots + P(E_n) .
$$
For $n = 2$ this is the third axiom. For $n$ events, it follows by applying the third axiom repeatedly, adding one event at a time. The rule is useful when an event splits into mutually exclusive cases. For example, when two dice are rolled, their sum is less than $5$ if it equals $2$, $3$, or $4$. The three cases are mutually exclusive and have $1$, $2$, and $3$ favorable pairs, respectively, so
$$
P(\text{sum} < 5) = \frac{1}{36} + \frac{2}{36} + \frac{3}{36} = \frac{6}{36} = \frac{1}{6} .
$$
:::

::::teorema{#teorema-somma titolo="The addition rule for any two events"}
For any two events $A$ and $B$,
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$
In the sum $P(A) + P(B)$, outcomes in the intersection are counted twice, once in $A$ and once in $B$, and the formula subtracts them once. If $A$ and $B$ are mutually exclusive, $P(A \cap B) = 0$, and the addition rule for mutually exclusive events is recovered.

::venn{zone="a,ab,b" nomi="A,B" universo=1 ambiente="Ω" elementi="a:A ∩ B̅;ab:A ∩ B;b:A̅ ∩ B" titolo="The union $A \cup B$ consists of three mutually exclusive parts: the outcomes in $A$ alone, the shared outcomes, and the outcomes in $B$ alone"}

:::dimostrazione
Split the union into three mutually exclusive parts, as in the Venn diagram. We have
$$
A \cup B = \left( A \cap \overline{B} \right) \cup (A \cap B) \cup \left( \overline{A} \cap B \right) ,
$$
and the three parts are pairwise mutually exclusive. By the addition rule for mutually exclusive events,
$$
P(A \cup B) = P\left( A \cap \overline{B} \right) + P(A \cap B) + P\left( \overline{A} \cap B \right) .
$$
The event $A$ is the union of the two mutually exclusive parts $A \cap \overline{B}$ and $A \cap B$, so $P\left( A \cap \overline{B} \right) = P(A) - P(A \cap B)$. Similarly, $P\left( \overline{A} \cap B \right) = P(B) - P(A \cap B)$. Substitution of the two expressions gives
$$
\begin{aligned}
P(A \cup B) &= P(A) - P(A \cap B) + P(A \cap B) + P(B) - P(A \cap B) \\[6pt]
&= P(A) + P(B) - P(A \cap B) .
\end{aligned}
$$
:::
::::

:::esempio{titolo="A king or a card from the suit of coins"}
Draw a card from a deck of $40$ Neapolitan cards, with four suits (cups, coins, clubs, and swords) of $10$ cards each. Let $A$ be the event “drawing a king” and $B$ the event “drawing a coin card.” There are $4$ kings and $10$ coin cards, and the king of coins belongs to both events. By the addition rule,
$$
P(A \cup B) = \frac{4}{40} + \frac{10}{40} - \frac{1}{40} = \frac{13}{40} .
$$
A direct count gives the same result. The favorable cards are the $3$ kings from suits other than coins, the king of coins, and the $9$ coin cards other than the king, giving $13$ cards.

::venn{zone="a,ab,b" nomi="re,denari" elementi="a:3;ab:1;b:9" titolo="The deck of $40$ cards contains $3$ kings outside the suit of coins, the king of coins, and $9$ other coin cards, so the number of cards in the union is $13$"}

:::

:::osservazione{#somma-tre-eventi titolo="The addition rule for three events"}
For three events $A$, $B$, and $C$, the argument is similar. Add the three probabilities, subtract the probabilities of the three pairwise intersections, and add the probability of the intersection of all three events, which would otherwise go uncounted:
$$
P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C) .
$$
Choose a number at random from $1$ to $30$ and find the probability that it is divisible by $2$, $3$, or $5$. The number of multiples of $2$ is $15$, the number of multiples of $3$ is $10$, and the number of multiples of $5$ is $6$. The common multiples for pairs of divisors are the multiples of $6$, $10$, and $15$, giving $5$, $3$, and $2$ numbers, respectively. The number of multiples of $30$ is $1$. Therefore
$$
P = \frac{15 + 10 + 6 - 5 - 3 - 2 + 1}{30} = \frac{22}{30} = \frac{11}{15} .
$$

::venn{tipo="tre" zone="a,b,c,ab,ac,bc,abc" nomi="mult. 2,mult. 3,mult. 5" elementi="a:8;b:4;c:2;ab:4;ac:2;bc:1;abc:1" titolo="Numbers from $1$ to $30$ divisible by $2$, $3$, or $5$. Each region shows the number of elements it contains, and the sum across the seven shaded regions is $22$"}

:::

## Conditional probability and the multiplication rule

:::definizione{#probabilita-condizionata titolo="Conditional probability"}
Partial information about the outcome of an experiment is often available. Suppose a die has been rolled and the result is known to be even. The possible outcomes are then reduced to $2$, $4$, and $6$. The probability of an event $A$ calculated given that the event $B$ has occurred is called the **conditional probability** of $A$ given $B$. It is denoted by $P(A \mid B)$ and, if $P(B) > 0$, is defined as
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$
The event $B$ becomes the new sample space, and only the part of $A$ that lies in $B$ counts. Let $A = \{ 4, 5, 6 \}$ be “rolling a number greater than $3$” and $B = \{ 2, 4, 6 \}$ be “rolling an even number.” We have $A \cap B = \{ 4, 6 \}$, so
$$
P(A \mid B) = \frac{\frac{2}{6}}{\frac{3}{6}} = \frac{2}{3} .
$$
Without this information the probability of $A$ is $\dfrac{1}{2}$, whereas given that the number is even the probability of $A$ is $\dfrac{2}{3}$.

::venn{zone="ab" nomi="A,B" universo=1 ambiente="Ω" elementi="a:5;ab:4,6;b:2;u:1,3" titolo="Given that $B$ has occurred, the possible outcomes are the $3$ outcomes in $B$. The outcomes favorable to $A$ are the $2$ in the intersection, so $P(A \mid B) = \dfrac{2}{3}$"}

:::

:::osservazione{#condizionata-equiprobabili titolo="Conditional probability with equally likely outcomes"}
When the outcomes are equally likely, the conditional probability formula can be expressed in terms of counts. Dividing the numerator and denominator by the number of outcomes in $\Omega$ gives
$$
P(A \mid B) = \frac{\text{number of outcomes in } A \cap B}{\text{number of outcomes in } B} .
$$
A class of $30$ students has $16$ girls and $14$ boys. Of these, $6$ girls and $4$ boys wear glasses. Select a student at random. Given that the student is a girl, the probability that she wears glasses is $\dfrac{6}{16} = \dfrac{3}{8}$, since there are $16$ girls and $6$ of them wear glasses.

| | Glasses | No glasses | Total |
| --- | --- | --- | --- |
| Girls | $6$ | $10$ | $16$ |
| Boys | $4$ | $10$ | $14$ |
| Total | $10$ | $20$ | $30$ |
:::

:::attenzione
In general $P(A \mid B)$ differs from $P(B \mid A)$. In the preceding class, let $A$ be the event “the student wears glasses” and $B$ the event “the student is a girl.” Then
$$
P(A \mid B) = \frac{6}{16} = \frac{3}{8} ,
\qquad
P(B \mid A) = \frac{6}{10} = \frac{3}{5} ,
$$
since the first calculation divides by the number of girls and the second by the number of students who wear glasses.
:::

:::teorema{#teorema-prodotto titolo="The multiplication rule"}
Let $A$ and $B$ be two events with $P(A) > 0$. Then
$$
P(A \cap B) = P(A) \cdot P(B \mid A) .
$$
Multiply both sides by $P(A)$ in the definition $P(B \mid A) = \dfrac{P(A \cap B)}{P(A)}$ to obtain the formula. It gives the probability that two events occur in succession when the probability of the second depends on the first. For three events, with $P(A \cap B) > 0$, the formula becomes
$$
P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B) .
$$
An urn contains $3$ red balls and $2$ blue balls. Draw two balls without returning the first to the urn. Let $R_1$ and $R_2$ be the events “the first ball is red” and “the second ball is red.” We have $P(R_1) = \dfrac{3}{5}$. If the first ball is red, $2$ red balls remain among $4$ balls, so $P(R_2 \mid R_1) = \dfrac{2}{4}$. By the multiplication rule,
$$
P(R_1 \cap R_2) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} .
$$
:::

:::esempio{titolo="The tree diagram"}
Successive draws can be represented by a **tree diagram**. Each branch is labeled with the probability of an outcome given what happened on the preceding branches. By the multiplication rule, the probability of a complete path is the product of the probabilities on its branches. For an urn with $3$ red balls and $2$ blue balls, two draws without replacement give
$$
P(RR) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} ,
\quad
P(RB) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} ,
\quad
P(BR) = \frac{2}{5} \cdot \frac{3}{4} = \frac{3}{10} ,
\quad
P(BB) = \frac{2}{5} \cdot \frac{1}{4} = \frac{1}{10} .
$$
The four paths are mutually exclusive and their probabilities add up to $1$. The probability of drawing a red ball and a blue ball in either order is therefore $P(RB) + P(BR) = \dfrac{3}{5}$.

::grafico{assi=0 uguale=1 linee="0,0 3,1.6;0,0 3,-1.6;3,1.6 6,2.4;3,1.6 6,0.8;3,-1.6 6,-0.8;3,-1.6 6,-2.4" punti="0,0,pieno;3,1.6,pieno;3,-1.6,pieno;6,2.4,pieno;6,0.8,pieno;6,-0.8,pieno;6,-2.4,pieno" etichette="3.1,1.95,R;3.1,-1.25,B;6.2,2.4,RR;6.2,0.8,RB;6.2,-0.8,BR;6.2,-2.4,BB;1.2,1.15,⅗;1.2,-1.25,⅖;4.4,2.35,½;4.4,0.85,½;4.4,-0.85,¾;4.4,-2.35,¼" xmin=-0.5 xmax=7.5 ymin=-3 ymax=3 titolo="Two draws without replacement from an urn with $3$ red balls and $2$ blue balls. The second-level branches show the conditional probabilities, calculated using the $4$ balls that remain"}

:::

## Independent events

:::definizione{#eventi-indipendenti titolo="Independent events"}
Learning that $B$ has occurred may leave the probability of $A$ unchanged. Two events $A$ and $B$ are **independent** if
$$
P(A \cap B) = P(A) \cdot P(B) .
$$
If $P(B) > 0$, this condition is equivalent to $P(A \mid B) = P(A)$, since both sides can be divided by $P(B)$. Two events that are not independent are **dependent**.

On a roll of a die, let $A = \{ 2, 4, 6 \}$ and $B = \{ 1, 2 \}$. We have $A \cap B = \{ 2 \}$, and
$$
P(A \cap B) = \frac{1}{6} ,
\qquad
P(A) \cdot P(B) = \frac{1}{2} \cdot \frac{1}{3} = \frac{1}{6} ,
$$
so $A$ and $B$ are **independent**. In contrast, with $C = \{ 1, 2, 3 \}$ we have $A \cap C = \{ 2 \}$ and $P(A) \cdot P(C) = \dfrac{1}{4}$, which differs from $\dfrac{1}{6}$, so $A$ and $C$ are dependent.
:::

:::osservazione{#prove-indipendenti titolo="Independent trials"}
Independence can be checked using the definition or assumed when the events concern experiments that do not affect one another, such as separate tosses of a coin, rolls of a die, draws with replacement, or shots taken by different people. In these cases the probability that all the events occur is the product of their probabilities. Three events $A$, $B$, and $C$ are independent if each pair consists of independent events and, in addition,
$$
P(A \cap B \cap C) = P(A) \cdot P(B) \cdot P(C) .
$$
For example, the probability of obtaining three heads in three tosses of a fair coin is $\dfrac{1}{2} \cdot \dfrac{1}{2} \cdot \dfrac{1}{2} = \dfrac{1}{8}$.
:::

::::teorema{#indipendenza-contrari titolo="Independence of complements"}
If $A$ and $B$ are independent, then so are $A$ and $\overline{B}$, $\overline{A}$ and $B$, and $\overline{A}$ and $\overline{B}$.

This rule is useful in “at least one” problems. Three archers hit a target independently of one another with probabilities $\dfrac{1}{2}$, $\dfrac{2}{3}$, and $\dfrac{3}{4}$. By the rule, the three misses are also independent, with probabilities $\dfrac{1}{2}$, $\dfrac{1}{3}$, and $\dfrac{1}{4}$. The target is not hit if all three miss, so
$$
P(\text{at least one hit}) = 1 - \frac{1}{2} \cdot \frac{1}{3} \cdot \frac{1}{4} = 1 - \frac{1}{24} = \frac{23}{24} .
$$

:::dimostrazione
Prove the first case. The others follow by applying it repeatedly. The event $A$ is the union of the two mutually exclusive events $A \cap B$ and $A \cap \overline{B}$, so
$$
P\left( A \cap \overline{B} \right) = P(A) - P(A \cap B) .
$$
Since $A$ and $B$ are independent, $P(A \cap B) = P(A) \cdot P(B)$, so
$$
P\left( A \cap \overline{B} \right) = P(A) - P(A) \cdot P(B) = P(A) \cdot \big( 1 - P(B) \big) = P(A) \cdot P\left( \overline{B} \right) ,
$$
where the last step uses the complement rule. Therefore $A$ and $\overline{B}$ are independent.
:::
::::

:::attenzione
Mutual exclusivity and independence are different concepts. If $A$ and $B$ are mutually exclusive and have positive probabilities, then $P(A \cap B) = 0$, whereas $P(A) \cdot P(B) > 0$, so $A$ and $B$ are *dependent*. On a roll of a die, the events “rolling $1$” and “rolling $2$” are mutually exclusive. Given that $1$ was rolled, the probability that $2$ was rolled is $0$, whereas without this information it is $\dfrac{1}{6}$.
:::

:::esempio{titolo="At least one six in four rolls"}
Roll a die four times and find the probability of getting at least one $6$. The complement is “no $6$ in the four rolls.” On each roll the probability of a result other than $6$ is $\dfrac{5}{6}$, and the rolls are independent, so
$$
P(\text{no } 6) = \left( \frac{5}{6} \right)^4 = \frac{625}{1296} ,
\qquad
P(\text{at least one } 6) = 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0.518 .
$$
The probability is slightly greater than $\dfrac{1}{2}$.
:::

## Drawing samples and counting outcomes

:::richiamo{titolo="Combinations without repetition"}
The number of subsets with $k$ elements of a set with $n$ elements, where $0 \leq k \leq n$, is
$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
:::

:::teorema{#estrazioni-senza-reimmissione titolo="Drawing without replacement"}
An urn contains $N$ balls, of which $r$ are red and $N - r$ blue. Draw $n$ balls without replacement, meaning that none of the balls drawn is returned to the urn. The probability of drawing exactly $k$ red balls is
$$
P = \frac{\dbinom{r}{k} \dbinom{N - r}{n - k}}{\dbinom{N}{n}} .
$$
Drawing $n$ balls one after another without replacement is equivalent to drawing them all at once. The possible outcomes are therefore the groups of $n$ balls, numbering $\dbinom{N}{n}$, and they are equally likely. The favorable outcomes are obtained by choosing $k$ balls from the $r$ red balls and $n - k$ from the $N - r$ blue balls, so by the fundamental counting principle their number is the product of the two binomial coefficients.

An urn contains $6$ red balls and $4$ blue balls. Draw $3$ balls. The probability of obtaining $2$ red and $1$ blue is
$$
P = \frac{\dbinom{6}{2} \dbinom{4}{1}}{\dbinom{10}{3}} = \frac{15 \cdot 4}{120} = \frac{1}{2} .
$$
:::

:::esempio{titolo="The same result using the multiplication rule"}
In the urn with $6$ red balls and $4$ blue balls, the ordered sequence red, red, blue has probability
$$
\frac{6}{10} \cdot \frac{5}{9} \cdot \frac{4}{8} = \frac{120}{720} = \frac{1}{6} .
$$
The sequences containing $2$ red balls and $1$ blue ball are $RRB$, $RBR$, and $BRR$, one for each possible position of the blue ball. Each has probability $\dfrac{1}{6}$, since only the order of the numerators changes in the three products. The three sequences are mutually exclusive, so the required probability is $3 \cdot \dfrac{1}{6} = \dfrac{1}{2}$, as obtained using combinations.
:::

:::teorema{#estrazioni-con-reimmissione titolo="Drawing with replacement"}
If the ball is returned to the urn after each draw, the composition of the urn stays the same and the draws are independent. With $r$ red balls out of $N$, each draw gives a red ball with probability $\dfrac{r}{N}$. The probability of a particular sequence is the product of the probabilities of its outcomes.

From the urn with $6$ red balls and $4$ blue balls, make $3$ draws with replacement. The sequence $RRB$ has probability $\dfrac{6}{10} \cdot \dfrac{6}{10} \cdot \dfrac{4}{10} = \dfrac{18}{125}$, and the same holds for $RBR$ and $BRR$. The probability of obtaining exactly $2$ red balls is therefore
$$
3 \cdot \frac{18}{125} = \frac{54}{125} .
$$
This result differs from the result without replacement, since without replacement the composition of the urn changes after each draw.
:::

:::esempio{titolo="Cards and dice"}
From a deck of $40$ Neapolitan cards, draw $2$ cards together. There are $4$ aces and $36$ other cards. The probability of drawing no aces is $\dbinom{36}{2} \Big/ \dbinom{40}{2}$, so by the complement rule
$$
P(\text{at least one ace}) = 1 - \frac{\dbinom{36}{2}}{\dbinom{40}{2}} = 1 - \frac{630}{780} = \frac{150}{780} = \frac{5}{26} .
$$
Roll three dice and find the probability that all three numbers are different. The possible outcomes are the ordered triples, numbering $6^3 = 216$. For the favorable outcomes, take the $6$ numbers in ordered groups of $3$, with $3$ distinct entries in each group, giving $D_{6,3} = 6 \cdot 5 \cdot 4 = 120$. Therefore
$$
P(\text{different numbers}) = \frac{120}{216} = \frac{5}{9} .
$$
:::

## Total probability and Bayes’ theorem

:::definizione{#partizione titolo="Partition of the sample space"}
Events $B_1, B_2, \ldots, B_n$ form a **partition** of $\Omega$ if they have positive probabilities, are pairwise mutually exclusive, and their union is $\Omega$. In other words, each time the experiment is performed, exactly one of these events occurs. On a roll of a die, the events $\{ 1, 2 \}$, $\{ 3, 4 \}$, and $\{ 5, 6 \}$ form a partition. An event $B$ with $0 < P(B) < 1$ and its complement $\overline{B}$ always form a partition.

Partitions describe the cases into which a problem is divided, such as which urn a ball is drawn from, which machine produced a part, or which group a person belongs to.
:::

::::teorema{#probabilita-totale titolo="The law of total probability"}
Let $B_1, B_2, \ldots, B_n$ be a partition of $\Omega$ and let $A$ be an event. Then
$$
P(A) = P(B_1) \cdot P(A \mid B_1) + P(B_2) \cdot P(A \mid B_2) + \ldots + P(B_n) \cdot P(A \mid B_n) .
$$
The formula gives the probability of $A$ case by case. For each case $B_i$, multiply its probability by the probability of $A$ given that case, and then add the results. In a tree diagram, this amounts to adding the probabilities of the paths that end in $A$.

A company has two machines. Machine $M_1$ produces $60\%$ of the parts, of which $5\%$ are defective. Machine $M_2$ produces the remaining $40\%$, of which $10\%$ are defective. A part is selected at random. Let $D$ denote the event “the part is defective.” The events $M_1$ and $M_2$ form a partition, so
$$
P(D) = 0.6 \cdot 0.05 + 0.4 \cdot 0.1 = 0.03 + 0.04 = 0.07 .
$$

::grafico{assi=0 uguale=1 linee="0,0 3,1.6;0,0 3,-1.6;3,1.6 6,2.4;3,1.6 6,0.8;3,-1.6 6,-0.8;3,-1.6 6,-2.4" punti="0,0,pieno;3,1.6,pieno;3,-1.6,pieno;6,2.4,pieno;6,0.8,pieno;6,-0.8,pieno;6,-2.4,pieno" etichette="3.1,1.95,M₁;3.1,-1.25,M₂;6.2,2.4,D;6.2,0.8,D̅;6.2,-0.8,D;6.2,-2.4,D̅;0.9,1.2,0.6;0.9,-1.3,0.4;4.1,2.4,0.05;4.1,0.8,0.95;4.1,-0.8,0.1;4.1,-2.4,0.9" xmin=-0.5 xmax=7.5 ymin=-3 ymax=3 titolo="Tree for the two-machine problem. The paths ending in $D$ have probabilities $0.6 \cdot 0.05 = 0.03$ and $0.4 \cdot 0.1 = 0.04$, which add up to $P(D) = 0.07$"}

:::dimostrazione
Split $A$ according to the cases in the partition. Since the events $B_i$ are mutually exclusive and their union is $\Omega$, we have
$$
A = (A \cap B_1) \cup (A \cap B_2) \cup \ldots \cup (A \cap B_n) ,
$$
and the events $A \cap B_i$ are pairwise mutually exclusive. By the addition rule for mutually exclusive events,
$$
P(A) = P(A \cap B_1) + P(A \cap B_2) + \ldots + P(A \cap B_n) .
$$
Each $B_i$ has positive probability, so by the multiplication rule $P(A \cap B_i) = P(B_i) \cdot P(A \mid B_i)$. Substitution gives the stated result.
:::
::::

::::teorema{#teorema-bayes titolo="Bayes’ theorem"}
Let $B_1, B_2, \ldots, B_n$ be a partition of $\Omega$ and let $A$ be an event with $P(A) > 0$. Then, for each $i$,
$$
P(B_i \mid A) = \frac{P(B_i) \cdot P(A \mid B_i)}{P(B_1) \cdot P(A \mid B_1) + \ldots + P(B_n) \cdot P(A \mid B_n)} .
$$
This theorem answers the reverse question to the one answered by the law of total probability. Given that $A$ occurred, it gives the probability of each case that could have produced it. The probabilities $P(B_i)$ are called **prior** probabilities, since they are known before the experiment. The probabilities $P(B_i \mid A)$ are called **posterior** probabilities.

In the two-machine problem, a part is found to be defective. The probability that it was produced by machine $M_1$ is
$$
P(M_1 \mid D) = \frac{0.6 \cdot 0.05}{0.07} = \frac{0.03}{0.07} = \frac{3}{7} .
$$
Before inspection, the probability of $M_1$ is $0.6$. Given that the part is defective, it is $\dfrac{3}{7} \approx 0.43$. The value is lower because machine $M_1$ has a lower percentage of defective parts than machine $M_2$.

:::dimostrazione
By the definition of conditional probability, $P(B_i \mid A) = \dfrac{P(B_i \cap A)}{P(A)}$. By the multiplication rule, the numerator is $P(B_i) \cdot P(A \mid B_i)$. By the law of total probability, the denominator is the sum $P(B_1) \cdot P(A \mid B_1) + \ldots + P(B_n) \cdot P(A \mid B_n)$. Substituting the two expressions gives the stated result.
:::
::::

:::esempio{titolo="Three urns"}
Roll a die. If it shows $1$, draw a ball from urn $U_1$, which contains $2$ red balls and $2$ blue balls. If it shows $2$ or $3$, draw from urn $U_2$, with $1$ red ball and $3$ blue balls. If it shows $4$, $5$, or $6$, draw from urn $U_3$, with $3$ red balls and $1$ blue ball. The prior probabilities of the urns are $\dfrac{1}{6}$, $\dfrac{2}{6}$, and $\dfrac{3}{6}$. By the law of total probability,
$$
P(R) = \frac{1}{6} \cdot \frac{2}{4} + \frac{2}{6} \cdot \frac{1}{4} + \frac{3}{6} \cdot \frac{3}{4} = \frac{2 + 2 + 9}{24} = \frac{13}{24} .
$$
Given that the ball drawn is red, Bayes’ theorem gives the following probability that it came from urn $U_3$:
$$
P(U_3 \mid R) = \frac{\frac{9}{24}}{\frac{13}{24}} = \frac{9}{13} .
$$
:::

## Repeated trials and the Bernoulli model

::::teorema{#schema-bernoulli titolo="The repeated-trials model"}
An experiment with two possible outcomes, called **success** and **failure**, is repeated $n$ times. The trials are independent and the probability of success stays at $p$ on every trial. The probability of obtaining exactly $k$ successes, with $0 \leq k \leq n$, is
$$
P(k \text{ successes in } n) = \binom{n}{k} \, p^k \, (1 - p)^{n - k} .
$$
This model is called the **Bernoulli model**. A die is rolled $4$ times and rolling a $6$ counts as success, so $p = \dfrac{1}{6}$. The probability that exactly two rolls show $6$ is
$$
\binom{4}{2} \left( \frac{1}{6} \right)^2 \left( \frac{5}{6} \right)^2 = 6 \cdot \frac{1}{36} \cdot \frac{25}{36} = \frac{150}{1296} = \frac{25}{216} .
$$

:::dimostrazione
Count the sequences of outcomes with $k$ successes and find the probability of each. A specified sequence with $k$ successes and $n - k$ failures, for example one with successes in the first $k$ trials, has probability $p^k (1 - p)^{n - k}$, since the trials are independent and the probability of failure is $1 - p$ by the complement rule. Every other sequence with $k$ successes has the same probability, since it contains the same factors in a different order.

A sequence with $k$ successes is determined by their positions, that is, by a subset of $k$ of the $n$ trials. There are therefore $\dbinom{n}{k}$ such sequences, and they are pairwise mutually exclusive. By the addition rule for mutually exclusive events the required probability is $\dbinom{n}{k} \, p^k (1 - p)^{n - k}$.
:::
::::

:::esempio{titolo="Two heads in three tosses"}
Toss a fair coin three times. The sequences with exactly two heads are $TTC$, $TCT$, and $CTT$, giving $\dbinom{3}{2} = 3$ in total, and each has probability $\left( \dfrac{1}{2} \right)^3 = \dfrac{1}{8}$. The probability of two heads is therefore $\dfrac{3}{8}$. The probability of *at least* two heads includes the case of three heads as well and equals $\dfrac{3}{8} + \dfrac{1}{8} = \dfrac{1}{2}$.

::grafico{assi=0 uguale=1 linee="0,0 2,2;0,0 2,-2;2,2 4,3;2,2 4,1;2,-2 4,-1;2,-2 4,-3;4,3 6,3.5;4,3 6,2.5;4,1 6,1.5;4,1 6,0.5;4,-1 6,-0.5;4,-1 6,-1.5;4,-3 6,-2.5;4,-3 6,-3.5" punti="0,0,pieno" etichette="6.2,3.5,TTT;6.2,2.5,TTC;6.2,1.5,TCT;6.2,0.5,TCC;6.2,-0.5,CTT;6.2,-1.5,CTC;6.2,-2.5,CCT;6.2,-3.5,CCC;1.7,2.4,T;1.7,-2.5,C" xmin=-0.5 xmax=8 ymin=-4 ymax=4 titolo="The $8$ sequences of three coin tosses. Each branch has probability $\dfrac{1}{2}$. The sequences with two heads are $TTC$, $TCT$, and $CTT$"}

:::

:::osservazione{#bernoulli-almeno-uno titolo="Probability of at least one success"}
In the Bernoulli model, the probability of no successes is $\dbinom{n}{0} p^0 (1 - p)^n = (1 - p)^n$. By the complement rule, the probability of at least one success is
$$
P(\text{at least one success}) = 1 - (1 - p)^n .
$$
A shooter hits a target with probability $\dfrac{1}{3}$ on each shot and takes $3$ shots. The probability of at least one hit is $1 - \left( \dfrac{2}{3} \right)^3 = 1 - \dfrac{8}{27} = \dfrac{19}{27}$. The fifth-year topic on probability and distributions examines the number of successes as a random variable, including its binomial distribution, mean, and variance.
:::
