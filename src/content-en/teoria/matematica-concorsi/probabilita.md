---
titolo: Probability
sommario: Calculating probabilities with dice, coins, cards, and urns. Topics include complements, addition and multiplication rules, sampling with and without replacement, conditional probability, counting techniques, and the relationships among probability, relative frequency, and percentages.
---

## Random experiments and events

:::definizione{#esperimento-aleatorio titolo="Random experiments and sample spaces"}
A **random experiment** is a process whose outcome cannot be predicted with certainty beforehand, such as rolling a die, tossing a coin, or drawing a ball from an urn. The set of all possible outcomes is called the **sample space**, or outcome space, and is denoted by $\Omega$. For a roll of a six-sided die,
$$
\Omega = \{1, 2, 3, 4, 5, 6\},
$$
while for a coin toss, $\Omega = \{T, C\}$, where $T$ denotes heads and $C$ denotes tails. The elements of the sample space are the possible outcomes used to calculate probabilities.
:::

:::definizione{#evento titolo="Events"}
An **event** is a statement about the outcome of an experiment that is either true or false once the experiment is over. Each event corresponds to the set of outcomes for which the statement is true, a subset of $\Omega$. When rolling a die, the event “the number is even” corresponds to $\{2, 4, 6\}$. An outcome for which the event occurs is called **favorable** to that event.

- The **certain** event occurs for every outcome and equals $\Omega$. For example, the number rolled is less than $7$.
- The **impossible** event has no favorable outcomes and corresponds to the empty set $\emptyset$. Rolling $8$ is an example.
:::

:::esempio{titolo="Rolling two dice"}
When two dice are rolled, an outcome is an ordered pair $(a, b)$, where $a$ is the number on the first die and $b$ the number on the second. Each die has $6$ outcomes, so the multiplication principle from the chapter on combinatorics gives $6 \cdot 6 = 36$ pairs. The event “the sum is $7$” has $6$ favorable outcomes:
$$
(1, 6),\quad (2, 5),\quad (3, 4),\quad (4, 3),\quad (5, 2),\quad (6, 1) .
$$
The pairs $(1, 6)$ and $(6, 1)$ are distinct outcomes because the first and second dice are distinguishable, even if they look alike. Think of them as having different colors.

::grafico{punti="1,1,vuoto;1,2,vuoto;1,3,vuoto;1,4,vuoto;1,5,vuoto;1,6,pieno;2,1,vuoto;2,2,vuoto;2,3,vuoto;2,4,vuoto;2,5,pieno;2,6,vuoto;3,1,vuoto;3,2,vuoto;3,3,vuoto;3,4,pieno;3,5,vuoto;3,6,vuoto;4,1,vuoto;4,2,vuoto;4,3,pieno;4,4,vuoto;4,5,vuoto;4,6,vuoto;5,1,vuoto;5,2,pieno;5,3,vuoto;5,4,vuoto;5,5,vuoto;5,6,vuoto;6,1,pieno;6,2,vuoto;6,3,vuoto;6,4,vuoto;6,5,vuoto;6,6,vuoto" segmenti="1,6,6,1" xmin=0 xmax=6.8 ymin=0 ymax=6.8 uguale=1 nomi="a,b" titolo="The $36$ outcomes of rolling two dice. Here $a$ is the number on the first die and $b$ the number on the second. The filled points are the $6$ outcomes with sum $7$."}

:::

## Classical definition of probability

:::definizione{#probabilita-classica titolo="Classical probability"}
Consider an experiment with finitely many outcomes that are **equally likely**, meaning each has the same chance of occurring. Examples include rolling a fair die, tossing a fair coin, or drawing balls that feel identical. The **probability** of an event $E$ is the ratio of the number of favorable outcomes to the number of possible outcomes:
$$
P(E) = \frac{\text{favorable outcomes}}{\text{possible outcomes}} .
$$
This definition reduces a probability calculation to two counts. The probability of rolling an even number on a die is $\dfrac{3}{6} = \dfrac{1}{2}$ because the favorable outcomes are $2$, $4$, and $6$, and there are $6$ possible outcomes. When rolling two dice, the probability that the sum is $7$ is $\dfrac{6}{36} = \dfrac{1}{6}$.
:::

:::teorema{#proprieta-della-probabilita titolo="Possible values of a probability"}
For every event $E$,
$$
0 \leq P(E) \leq 1 .
$$
Indeed, the number of favorable outcomes is at least $0$ and at most the total number of possible outcomes. The impossible event has probability $0$, and the certain event has probability $1$. This property provides a first check. A value greater than $1$, such as $\dfrac{7}{6}$, or a negative value indicates a counting error.

::grafico{assi=0 uguale=1 linee="0,0 10,0;0,-0.2 0,0.2;2.5,-0.2 2.5,0.2;5,-0.2 5,0.2;7.5,-0.2 7.5,0.2;10,-0.2 10,0.2" punti="0,0,pieno;1.67,0,pieno;5,0,pieno;10,0,pieno" etichette="0,-0.8,0;1.67,0.8,roll a 6;5,0.8,heads;10,-0.8,1;0,1.5,impossible;10,0.8,certain;5,-0.8,0.5;1.67,-0.8,0.17" xmin=-1.5 xmax=11.5 ymin=-1.6 ymax=1.6 titolo="The probability scale runs from $0$ to $1$. Rolling a $6$ on a die has probability $\dfrac{1}{6} \approx 0.17$, and tossing heads on a coin has probability $\dfrac{1}{2}$."}

:::

:::attenzione
The classical definition applies *only* when the possible outcomes are equally likely. When two dice are rolled, the possible sums are the $11$ numbers from $2$ to $12$, but the probability of a sum of $7$ is *not* $\dfrac{1}{11}$. A sum of $2$ occurs only with the pair $(1, 1)$, whereas six pairs give a sum of $7$, so the sums are not equally likely. The $36$ ordered pairs are equally likely, so count the favorable outcomes among these pairs.

::grafico{poligoni="1.6,0 2.4,0 2.4,1 1.6,1;2.6,0 3.4,0 3.4,2 2.6,2;3.6,0 4.4,0 4.4,3 3.6,3;4.6,0 5.4,0 5.4,4 4.6,4;5.6,0 6.4,0 6.4,5 5.6,5;6.6,0 7.4,0 7.4,6 6.6,6;7.6,0 8.4,0 8.4,5 7.6,5;8.6,0 9.4,0 9.4,4 8.6,4;9.6,0 10.4,0 10.4,3 9.6,3;10.6,0 11.4,0 11.4,2 10.6,2;11.6,0 12.4,0 12.4,1 11.6,1" xmin=0 xmax=13 ymin=0 ymax=7 nomi="s,casi" titolo="The vertical axis counts the ordered pairs, out of $36$, that give each sum $s$ from $2$ to $12$ for two dice. A sum of $7$ has $6$ favorable outcomes. Each of the sums $2$ and $12$ has only one."}

:::

## Coins, dice, cards, and urns

:::osservazione{#lancio-di-monete-e-dadi titolo="Coins and dice"}
For a fair coin, heads and tails each have probability $\dfrac{1}{2}$. For a fair six-sided die, each face has probability $\dfrac{1}{6}$. For repeated tosses or rolls, one outcome is the ordered sequence of individual results. By the multiplication principle, $n$ coin tosses have $2^n$ possible outcomes and $n$ rolls of a die have $6^n$. Tossing two coins together is equivalent to tossing one coin twice because the two coins can be distinguished.

For three coin tosses, there are $2^3 = 8$ outcomes:
$$
TTT,\quad TTC,\quad TCT,\quad CTT,\quad TCC,\quad CTC,\quad CCT,\quad CCC .
$$
The event “exactly two heads” has $3$ favorable outcomes, $TTC$, $TCT$, and $CTT$, so its probability is $\dfrac{3}{8}$.
:::

:::definizione{#mazzi-di-carte titolo="Decks of cards"}
The questions use two kinds of decks and specify which one is meant.

- A deck of $40$ **Italian playing cards** has $4$ suits (cups, coins, clubs, and swords) with $10$ cards each. The ranks are ace, $2$, $3$, $4$, $5$, $6$, $7$, jack, knight, and king. The **face cards** are the jack, knight, and king, so there are $3$ per suit and $12$ altogether.
- A deck of $52$ **French-suited playing cards** has $4$ suits. Hearts and diamonds are red, and clubs and spades are black. Each suit has $13$ cards, the ace, the numbers $2$ through $10$, the jack, the queen, and the king. The face cards are the jack, queen, and king, so there are $12$ face cards altogether. There are $26$ red cards.

Always assume the deck is well shuffled so every card has the same chance of being drawn. The probability of drawing a king is $\dfrac{4}{40} = \dfrac{1}{10}$ from the Italian deck and $\dfrac{4}{52} = \dfrac{1}{13}$ from the French-suited deck. The probability of drawing a heart from the French-suited deck is $\dfrac{13}{52} = \dfrac{1}{4}$.
:::

:::definizione{#urne titolo="Urns and random draws"}
An **urn** is a container of balls of the same shape and weight that differ only in color or in the numbers written on them. When a ball is drawn without looking, each ball is equally likely to be selected, so the number of possible outcomes is the total number of balls. In an urn with $3$ red balls, $5$ white balls, and $2$ green balls, the probability of drawing a white ball is $\dfrac{5}{10} = \dfrac{1}{2}$ and the probability of drawing a green ball is $\dfrac{2}{10} = \dfrac{1}{5}$.

Many competitive exam questions describe a random selection of people, such as choosing one employee at random from the $40$ people in an office. The calculation is the same as for an urn with one ball for each person.
:::

## Complements and mutually exclusive events

:::teorema{#evento-contrario titolo="Probability of the complement"}
The **complement** of $E$, denoted by $\overline{E}$, occurs when $E$ does not occur. Its favorable outcomes are the possible outcomes that are not favorable to $E$, so
$$
P(\overline{E}) = 1 - P(E) .
$$
Indeed, if there are $n$ possible outcomes and the number favorable to $E$ is $f$, then the number favorable to $\overline{E}$ is $n - f$, and $\dfrac{n - f}{n} = 1 - \dfrac{f}{n}$. For a single die, the probability of *not* rolling a $6$ is $1 - \dfrac{1}{6} = \dfrac{5}{6}$.

The rule is especially useful for “at least one” events. The complement of “at least one $6$ in two rolls of a die” is “no $6$ in two rolls,” which has $5 \cdot 5 = 25$ favorable outcomes out of $36$. Therefore
$$
P(\text{at least one } 6) = 1 - \frac{25}{36} = \frac{11}{36} .
$$
A direct count would have to distinguish the outcomes with exactly one $6$ from the outcome with two rolls of $6$. The complement requires only one multiplication.

::grafico{punti="1,1,vuoto;1,2,vuoto;1,3,vuoto;1,4,vuoto;1,5,vuoto;1,6,pieno;2,1,vuoto;2,2,vuoto;2,3,vuoto;2,4,vuoto;2,5,vuoto;2,6,pieno;3,1,vuoto;3,2,vuoto;3,3,vuoto;3,4,vuoto;3,5,vuoto;3,6,pieno;4,1,vuoto;4,2,vuoto;4,3,vuoto;4,4,vuoto;4,5,vuoto;4,6,pieno;5,1,vuoto;5,2,vuoto;5,3,vuoto;5,4,vuoto;5,5,vuoto;5,6,pieno;6,1,pieno;6,2,pieno;6,3,pieno;6,4,pieno;6,5,pieno;6,6,pieno" segmenti="0.5,5.5,5.5,5.5;5.5,0.5,5.5,5.5" xmin=0 xmax=6.8 ymin=0 ymax=6.8 uguale=1 nomi="a,b" titolo="The $36$ ordered pairs for two dice. The $11$ filled points in the row and column for $6$ correspond to at least one $6$. The $25$ open points, with both numbers from $1$ to $5$, form the complement."}
:::

:::definizione{#eventi-incompatibili titolo="Mutually exclusive events"}
The event “$A$ or $B$,” written $A \cup B$, occurs when at least one of the two events occurs. The event “$A$ and $B$,” written $A \cap B$, occurs when both do. Two events $A$ and $B$ are **mutually exclusive** if they cannot occur together, meaning they share no favorable outcomes. On a single roll of a die, “roll $1$” and “roll an even number” are mutually exclusive. In contrast, “roll an even number” and “roll a number greater than $3$” can occur together because $4$ and $6$ are favorable to both.

::venn{tipo="disgiunti" zone="a,b" nomi="A,B" universo=1 ambiente="Ω" titolo="Two mutually exclusive events. The sets of outcomes favorable to $A$ and $B$ have no elements in common."}

:::

:::teorema{#regola-della-somma titolo="Addition rule for mutually exclusive events"}
If $A$ and $B$ are mutually exclusive, then
$$
P(A \cup B) = P(A) + P(B) .
$$
Indeed, the number of outcomes favorable to $A \cup B$ is the number favorable to $A$ plus the number favorable to $B$, with no outcome counted twice. In an Italian deck of $40$ cards, the probability of drawing an ace or a king is
$$
\frac{4}{40} + \frac{4}{40} = \frac{8}{40} = \frac{1}{5} .
$$
The rule also holds for more than two events provided they are pairwise mutually exclusive.
:::

:::teorema{#somma-eventi-compatibili titolo="General addition rule"}
For any two events $A$ and $B$,
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$
Adding the outcomes favorable to $A$ and the outcomes favorable to $B$ counts the outcomes favorable to both twice, so subtract them once. In a French-suited deck of $52$ cards, the probability of drawing a king or a heart is
$$
\frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13},
$$
because the king of hearts is favorable to both events. If the events are mutually exclusive, $P(A \cap B) = 0$ and the previous rule follows.

::venn{zone="a,ab,b" nomi="Ks,♥" elementi="a:3;ab:1;b:12" titolo="Kings (Ks) and hearts (♥) in a French-suited deck. There are $3$ kings outside the suit of hearts, the king of hearts in the intersection, and $12$ hearts that are not kings. This gives $16$ favorable cards in all."}

:::

## Independent events

:::definizione{#eventi-indipendenti titolo="Independent events"}
Two events are **independent** if the occurrence of one does not change the probability of the other. The results of separate coin tosses or die rolls are independent because the conditions for each toss or roll are the same regardless of preceding results. Events involving separate experiments can also be independent, as when tossing a coin and rolling a die, or observing delays on two different bus routes when the question specifies independence.
:::

:::teorema{#regola-del-prodotto titolo="Multiplication rule for independent events"}
If $A$ and $B$ are independent, then
$$
P(A \cap B) = P(A) \cdot P(B) .
$$
Tossing a coin and rolling a die gives $2 \cdot 6 = 12$ possible pairs, and the event “heads and a $6$” has $1 \cdot 1 = 1$ favorable outcome. The number of outcomes is a product in both the numerator and the denominator, so
$$
P(T \text{ and } 6) = \frac{1}{12} = \frac{1}{2} \cdot \frac{1}{6} .
$$
The rule also holds for more than two independent events. The probability of three heads in three coin tosses is $\left( \dfrac{1}{2} \right)^{3} = \dfrac{1}{8}$.

::grafico{assi=0 uguale=1 linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;0,1 6,1" poligoni="0,0 3,0 3,1 0,1" etichette="1.5,-0.7,T;4.5,-0.7,C;-1.6,0.5,roll a 6;-1.6,3.5,other;1.5,0.5,T and 6" xmin=-3 xmax=7 ymin=-1.5 ymax=7 titolo="The square represents all possible outcomes. Its width is split into $\dfrac{1}{2}$ and $\dfrac{1}{2}$ for the coin, and its height into $\dfrac{1}{6}$ and $\dfrac{5}{6}$ for the die. The shaded rectangle, with area $\dfrac{1}{2} \cdot \dfrac{1}{6} = \dfrac{1}{12}$, corresponds to heads and a $6$."}
:::

:::esempio{titolo="Neither, both, at least one, and exactly one"}
Two lamps fail within a year with probabilities $0.1$ and $0.2$, independently. The probabilities that they remain lit are $0.9$ and $0.8$.

- Both fail with probability $0.1 \cdot 0.2 = 0.02$.
- Neither fails with probability $0.9 \cdot 0.8 = 0.72$.
- At least one fails with probability $1 - 0.72 = 0.28$, by the complement rule.
- Exactly one fails with probability $0.1 \cdot 0.8 + 0.9 \cdot 0.2 = 0.08 + 0.18 = 0.26$ because “only the first fails” and “only the second fails” are mutually exclusive, so their probabilities add.

As a check, $0.02 + 0.26 + 0.72 = 1$ because the three outcomes “both,” “exactly one,” and “neither” are mutually exclusive and cover all possibilities.
:::

:::attenzione
Two mutually exclusive events that both have positive probability are *not* independent. On a single die roll, “roll a $1$” and “roll a $2$” are mutually exclusive. If the result is $1$, it cannot also be $2$ on that roll, so the occurrence of the first event changes the probability of the second from $\dfrac{1}{6}$ to $0$. For “$A$ or $B$,” add the probabilities if the events are mutually exclusive. For “$A$ and $B$,” multiply the probabilities if the events are independent.
:::

## Sampling and conditional probability

:::definizione{#estrazioni-con-reimmissione titolo="Sampling with replacement"}
In sampling **with replacement**, the ball drawn is returned to the urn before the next draw. The composition of the urn stays the same, so the draws are independent and the multiplication rule applies. From an urn with $3$ red balls and $2$ white balls, the probability of drawing two red balls with replacement is
$$
\frac{3}{5} \cdot \frac{3}{5} = \frac{9}{25} .
$$
:::

:::definizione{#estrazioni-senza-reimmissione titolo="Sampling without replacement"}
In sampling **without replacement**, the ball drawn is kept out of the urn. The composition changes after each draw, so the probability of a given color on the second draw depends on the outcome of the first. For the same urn with $3$ red and $2$ white balls, the first ball is red with probability $\dfrac{3}{5}$. If it is red, $2$ red balls remain among $4$ balls, so the probability that the second is red is $\dfrac{2}{4}$. Therefore
$$
P(\text{two red}) = \frac{3}{5} \cdot \frac{2}{4} = \frac{3}{10} .
$$
Drawing several balls together, or simultaneously, is equivalent to drawing them one at a time without replacement. A **tree diagram** represents the draws. Label each branch with the probability of its outcome. The probability of a path is the product of the probabilities along its branches.

::grafico{assi=0 uguale=1 linee="0,0 2.7,1.4;0,0 2.7,-1.4;3.5,1.5 6,2.25;3.5,1.5 6,0.75;3.5,-1.5 6,-0.75;3.5,-1.5 6,-2.25" punti="0,0,pieno" etichette="2.85,1.35,R;2.85,-1.65,B;6.15,2.1,P(RR) = 0.3;6.15,0.6,P(RB) = 0.3;6.15,-0.9,P(BR) = 0.3;6.15,-2.4,P(BB) = 0.1;0.9,1.0,0.6;0.9,-1.35,0.4;4.3,2.25,0.5;4.3,0.55,0.5;4.3,-0.75,0.75;4.3,-2.4,0.25" xmin=-0.5 xmax=9 ymin=-2.9 ymax=2.9 titolo="Two draws without replacement from an urn with $3$ red balls (R) and $2$ white balls (B). The first pair of branches has probabilities $\dfrac{3}{5} = 0.6$ and $\dfrac{2}{5} = 0.4$. The next branches use probabilities calculated from the $4$ remaining balls, for example $\dfrac{2}{4} = 0.5$. Each path ends with the product of its branch probabilities."}

:::

:::definizione{#probabilita-condizionata titolo="Conditional probability"}
The **conditional probability** of $A$ given $B$, denoted by $P(A \mid B)$, is the probability of $A$ when we know that $B$ has occurred. With equally likely outcomes, restrict the possible outcomes to those favorable to $B$:
$$
P(A \mid B) = \frac{\text{outcomes favorable to } A \text{ and } B}{\text{outcomes favorable to } B} = \frac{P(A \cap B)}{P(B)},
\qquad P(B) > 0 .
$$
When a die is rolled, the probability of having rolled $6$ given an even number is $\dfrac{1}{3}$ because the possible outcomes are now $2$, $4$, and $6$. In a tree diagram for draws without replacement, the probabilities on the second set of branches are conditional probabilities.

::venn{tipo="incluso" zone="ab" nomi="even,6" universo=1 elementi="a:2,4;ab:6;u:1,3,5" titolo="Given an even result on the die, the possible outcomes are $2$, $4$, and $6$. Only one is a $6$, so the conditional probability is $\dfrac{1}{3}$."}
:::

:::teorema{#regola-del-prodotto-generale titolo="General multiplication rule"}
For any two events $A$ and $B$ with $P(A) > 0$,
$$
P(A \cap B) = P(A) \cdot P(B \mid A) .
$$
To derive the formula, interchange $A$ and $B$ in the definition of conditional probability, then multiply by $P(A)$. If $A$ and $B$ are independent, then $P(B \mid A) = P(B)$ and the multiplication rule for independent events follows. Two people are selected at random for a shift from an office of $20$ people, including $12$ women. The probability that both are women is
$$
\frac{12}{20} \cdot \frac{11}{19} = \frac{132}{380} = \frac{33}{95},
$$
because after the first woman is selected, $11$ women remain among $19$ people.
:::

:::esempio{titolo="Finding conditional probabilities from a table"}
An office has $50$ employees, distributed as shown in the table.

| | Part-time | Full-time | Total |
| --- | --- | --- | --- |
| Men | $5$ | $15$ | $20$ |
| Women | $12$ | $18$ | $30$ |
| Total | $17$ | $33$ | $50$ |

An employee is selected at random from those working part-time. The possible outcomes are the $17$ part-time employees, and $12$ are women, so
$$
P(\text{woman} \mid \text{part-time}) = \frac{12}{17} .
$$
Other probabilities in the table answer different questions. The probability that an employee chosen from the entire office is a woman who works part-time is $\dfrac{12}{50}$. The probability that someone chosen from among the women works part-time is $\dfrac{12}{30} = \dfrac{2}{5}$.
:::

## Probability and combinatorics

:::teorema{#probabilita-e-combinatoria titolo="Counting possible and favorable outcomes"}
When there are too many outcomes to list, use the counting formulas from the chapter on combinatorics. If $k$ objects are selected together from $n$, order does not matter, so the number of possible outcomes is the number of combinations
$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
An urn contains $r$ red balls and $b$ white balls. If $k$ are drawn together, the probability that all are red is
$$
P = \frac{C_{r,k}}{C_{r+b,k}} .
$$
With $4$ red balls and $6$ white balls, drawing two together gives
$$
P(\text{two red}) = \frac{C_{4,2}}{C_{10,2}} = \frac{6}{45} = \frac{2}{15} .
$$
The multiplication rule gives the same result because $\dfrac{4}{10} \cdot \dfrac{3}{9} = \dfrac{12}{90} = \dfrac{2}{15}$. Counting combinations is faster when the selected group must contain objects of different types.
:::

:::esempio{titolo="Groups with a specified composition"}
From a group of $5$ men and $4$ women, a committee of $3$ is selected at random. There are $C_{9,3} = 84$ possible committees. For exactly one woman, choose $2$ men from $5$ in $C_{5,2} = 10$ ways and $1$ woman from $4$ in $C_{4,1} = 4$ ways. By the multiplication principle there are $10 \cdot 4 = 40$ favorable outcomes. Therefore
$$
P(\text{exactly one woman}) = \frac{40}{84} = \frac{10}{21} .
$$
:::

:::esempio{titolo="Orderings"}
When order matters, count the outcomes using permutations or ordered selections. Consider an anagram chosen at random from the anagrams of the word LIBRO. Its $5$ letters are distinct, so there are $P_5 = 5! = 120$ possible outcomes. For an anagram to begin and end with a vowel, its first letter must be I or O, its last letter the other vowel, and its middle letters the $3$ consonants in any order. This gives $2 \cdot 1 \cdot 3! = 12$ favorable anagrams, so the probability is $\dfrac{12}{120} = \dfrac{1}{10}$.
:::

## Relative frequency and probability as a percentage

:::definizione{#frequenza-relativa titolo="Relative frequency"}
If an experiment is repeated $n$ times under the same conditions and an event occurs $k$ times, the **relative frequency** of the event is
$$
f = \frac{k}{n} .
$$
Over many trials, the relative frequency tends to be close to the probability. This observation is called the **empirical law of chance**. If a die is rolled $600$ times, the number of times $6$ appears is usually close to $\dfrac{600}{6} = 100$.

Relative frequency is also useful in reverse. When outcomes are not equally likely, as with a train delay or a defective part, we estimate the probability using the observed frequency. For a train that was late $30$ times in $200$ days, the estimated probability of a delay is $\dfrac{30}{200} = 0.15$.
:::

:::osservazione{#probabilita-in-percentuale titolo="Probability as a percentage and expected count"}
A probability is a number between $0$ and $1$, so it can be written as a fraction, a decimal, or a percentage:
$$
\frac{1}{4} = 0.25 = 25\%,
\qquad
\frac{3}{8} = 0.375 = 37.5\% .
$$
To express a decimal as a percentage, multiply the number by $100$ and append a percent sign. To convert back to a decimal, divide the number before the percent sign by $100$. The chapter on ratios, proportions, and percentages covers percentage calculations.

If an event has probability $p$ on each of $n$ trials, the expected number of occurrences is $n \cdot p$. If each part has a $3\%$ probability of being defective, a batch of $2000$ parts has an expected count of $2000 \cdot 0.03 = 60$ defective parts. The observed count can differ from the expected count.
:::

## Quick methods for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Checks and shortcuts"}
Many incorrect choices can be identified before completing the calculation.

- **Check the bounds**. A probability lies between $0$ and $1$. The probability of “$A$ and $B$” cannot exceed either $P(A)$ or $P(B)$, and the probability of “$A$ or $B$” cannot be less than either individual probability.
- **Use the complement**. For “at least one,” “not all,” or “none,” calculate $1 - P(\overline{E})$, which usually requires only one product.
- **Use symmetry**. Without replacement, the probability that the *second* ball is red equals the probability that the first ball is red, because every ball is equally likely to occupy any position in the sequence of draws. With $3$ red balls and $2$ white balls, we indeed have $\dfrac{3}{5} \cdot \dfrac{2}{4} + \dfrac{2}{5} \cdot \dfrac{3}{4} = \dfrac{12}{20} = \dfrac{3}{5}$.
- Incorrect choices usually come from **common errors** such as adding probabilities that should be multiplied, using the result for sampling with replacement when there is no replacement, counting dice without distinguishing their order, or counting “both” instead of “at least one.”

Choices can give the same value in different forms, such as $\dfrac{3}{20}$, $0.15$, and $15\%$. Convert them to the same form before comparing.
:::

:::esempio{titolo="A multiple-choice problem solved using the complement"}
A coin is tossed $5$ times. The choices for the probability of getting at least one head are $\dfrac{5}{32}$, $\dfrac{1}{2}$, $\dfrac{31}{32}$, $\dfrac{1}{32}$, and $\dfrac{5}{2}$. Choice $\dfrac{5}{2}$ exceeds $1$, so eliminate it. The complement, “no heads,” has just one favorable outcome, $CCCCC$, out of $2^5 = 32$. Thus the required probability is $1 - \dfrac{1}{32} = \dfrac{31}{32}$.
:::
