---
titolo: "Probability and data for the TOLC-S"
sommario: "Sample spaces, counting, events, sampling, frequencies, and interpreting tables and graphs."
---

## Sets and outcomes

:::definizione{#insiemi-ed-esiti titolo="Experiment, outcome, and event"}
A **random experiment** is an action whose result is unknown before it is performed, such as rolling a die. Each possible result is called an **outcome**. The set of all outcomes is the **sample space**, or outcome space, and is written $\Omega$, the Greek letter "omega". For the roll of a six-sided die
$$
\Omega=\{1,2,3,4,5,6\}.
$$

An **event** is a set of some of the outcomes, that is, a subset of $\Omega$, and is written with a capital letter. The event "an even number comes up" is $A=\{2,4,6\}$. An event *occurs* when the outcome of the experiment is one of its elements: if 4 comes up, $A$ occurs; if 3 comes up, it does not.

The **certain event** contains all the outcomes, so it coincides with $\Omega$; for the die, the event "a number less than 7 comes up" is certain. The **impossible event** contains no outcomes and is the empty set, denoted by $\varnothing$; for the die, the event "a 7 comes up" is impossible.

The **probability** of an event $A$ is a number between 0 and 1 that measures how much $A$ is expected to occur. It is written $P(A)$, "probability of $A$". The certain event has probability $P(\Omega)=1$ and the impossible event has probability $P(\varnothing)=0$. A negative result, or one greater than 1, therefore signals a mistake in the calculation.
:::

:::teorema{#equiprobabilita titolo="When outcomes can be counted"}
The outcomes of an experiment are **equally likely** when they all have the same probability. In a **fair** die, one that is not loaded, each of the six faces has probability $\dfrac{1}{6}$.

If $\Omega$ consists of finitely many equally likely outcomes, the probability of an event $A$ is
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
The symbol $|A|$ is the number of outcomes in $A$, the *favourable cases*. The symbol $|\Omega|$ is the number of all the outcomes, the *possible cases*. For a fair die the event "an even number comes up", $A=\{2,4,6\}$, has 3 favourable cases out of 6 possible cases, so
$$
P(A)=\frac{3}{6}=\frac{1}{2}.
$$
The formula requires equally likely outcomes. In a loaded die the same event still contains 3 faces out of 6, but its probability is the sum of the probabilities of the three faces and depends on how the die is loaded.

Two fair coins are tossed. The letter $H$ stands for heads and the letter $T$ for tails. Each outcome is an ordered pair of letters, one per coin, so $HT$ and $TH$ are different outcomes. There are four outcomes,
$$
\Omega=\{HH,HT,TH,TT\},
$$
and they are equally likely, so each has probability $\dfrac{1}{4}$. The event "exactly one head comes up" is $\{HT,TH\}$. It has 2 favourable cases out of 4, so its probability is $\dfrac{2}{4}=\dfrac{1}{2}$.
:::

:::attenzione
When two coins are tossed, "no heads", "one head" and "two heads" are three possible results, but they are not equally likely, because they have probabilities $\dfrac{1}{4}$, $\dfrac{1}{2}$ and $\dfrac{1}{4}$. Counting them as 3 equally likely cases would give the wrong value $\dfrac{1}{3}$ for "one head".
:::

## Ordered counting

:::teorema{#conteggi titolo="Successive choices and the product rule"}
The **product rule** counts cases without listing them, even in problems where nothing is chosen at random. If a choice is made in two stages, with $m$ possibilities in the first and $n$ in the second whatever the first choice was, there are $m\cdot n$ choices in all. With 3 T-shirts and 2 pairs of trousers, each T-shirt goes with each pair of trousers, so there are $3\cdot2=6$ outfits. With more than two stages, the possibilities of all the stages are multiplied.

A 3-letter code is formed from the 4 letters $A,B,C,D$. Order matters, because $ABC$ and $CBA$ are different codes.

- **All letters different.** The first position has 4 possibilities. One letter has been used, so the second has 3 and the third has 2. There are $4\cdot3\cdot2=24$ codes. Ordered sequences of $k$ different objects chosen from $n$ are called **arrangements without repetition**.
- **Letters may be repeated.** Each position has 4 possibilities, so there are $4\cdot4\cdot4=4^3=64$ codes. Ordered sequences in which objects may be repeated are called **arrangements with repetition**; with $n$ objects and $k$ positions there are $n^k$.

A restriction on a position reduces its possibilities. In a three-digit number the first digit is not 0, so it has 9 possibilities, and the other two have 10 each. There are $9\cdot10\cdot10=900$ three-digit numbers.
:::

:::definizione{#permutazioni titolo="Order and permutations"}
A **permutation** of $n$ distinct objects is a way of putting them all in a row. Three books $A,B,C$ can be placed on a shelf in 6 ways:
$$
ABC,\quad ACB,\quad BAC,\quad BCA,\quad CAB,\quad CBA.
$$
Indeed, the first place has 3 possibilities, the second has 2 and the third has 1, and $3\cdot2\cdot1=6$.

The product of all the integers from 1 to $n$ is called the **factorial** of $n$. It is written $n!$ and read "$n$ factorial":
$$
n!=n\cdot(n-1)\cdot(n-2)\cdots2\cdot1.
$$
For example, $4!=4\cdot3\cdot2\cdot1=24$ and $5!=5\cdot4!=120$; by convention $0!=1$. There are $n!$ permutations of $n$ distinct objects.

If some of the objects are identical, there are fewer than $n!$ distinguishable orders. The word "mamma" has 3 letters $M$ and 2 letters $A$. If the 5 letters were all different, they would have $5!=120$ orders. Swapping the 3 letters $M$ among themselves, in $3!=6$ ways, does not change the word, and the same holds for the $2!=2$ swaps of the letters $A$. Each word is therefore counted $6\cdot2=12$ times, and the number of anagrams, that is, of different sequences of the 5 letters, is
$$
\frac{5!}{3!\cdot2!}=\frac{120}{12}=10.
$$

By the **sum rule**, if a choice is made in one of two ways that share no cases, the possibilities of the two ways are added. A menu offers 2 starters and 4 main courses. Ordering a single dish means choosing a starter *or* a main course, so there are $2+4=6$ possibilities. Ordering a starter *and* a main course means two successive choices, so there are $2\cdot4=8$ possibilities. If both a single dish and a pair of dishes are allowed, the two cases share no choices and there are $6+8=14$ possibilities.
:::

:::esempio{titolo="Two people next to each other in a queue"}
Five people stand in a queue, and Ada and Bruno are next to each other. The pair is treated as a single block. There are then 4 objects to order, namely the block and the other 3 people, and they have $4!=24$ orders. Inside the block there are 2 orders, because Ada stands in front of Bruno or behind him. By the product rule there are $2\cdot24=48$ queues.
:::

## Choices without order

:::definizione{#combinazioni titolo="Combinations and overcounting"}
A **combination** is a group of $k$ objects chosen from $n$ distinct objects, in which order does not matter.

From 4 people $A,B,C,D$, 2 representatives are chosen. There are $4\cdot3=12$ ordered pairs. In this list each pair appears twice, for example as $AB$ and as $BA$, so there are $\dfrac{12}{2}=6$ unordered pairs:
$$
AB,\quad AC,\quad AD,\quad BC,\quad BD,\quad CD.
$$
Counting the same group several times is called **overcounting**, and dividing by 2 removes it. In general, each group of $k$ objects appears $k!$ times among the ordered sequences, because its elements have $k!$ orders. The number of groups is written as the **binomial coefficient** $\dbinom{n}{k}$, read "$n$ choose $k$", and equals
$$
\binom nk=\frac{n!}{k!(n-k)!},\qquad 0\le k\le n.
$$
A committee of 2 people chosen from 7 is a group without order, so the number of committees is
$$
\binom72=\frac{7!}{2!\cdot5!}=\frac{7\cdot6\cdot5!}{2\cdot5!}=\frac{42}{2}=21.
$$
A chair and a secretary chosen from 7 people have different roles, so order matters and there are $7\cdot6=42$ choices.

Combinations are also used to count choices of positions. A grid path of 3 steps right and 2 steps up is determined by the 2 positions, among the 5, of the upward steps. There are therefore $\dbinom{5}{2}=\dfrac{5!}{2!\cdot3!}=\dfrac{120}{12}=10$ paths.
:::

:::esempio{titolo="Exactly two elements of one category"}
An urn, that is, a container from which one draws without looking, holds 3 red and 3 blue balls, numbered so that all can be told apart. Three balls are drawn together, so order does not matter and the groups of 3 balls are equally likely. We want the probability of exactly 2 red balls.

The possible cases are the groups of 3 balls chosen from 6, that is, $\dbinom{6}{3}=\dfrac{6!}{3!\cdot3!}=\dfrac{720}{36}=20$. A group with exactly 2 red balls is formed by choosing 2 red from 3, in $\dbinom{3}{2}=3$ ways, and 1 blue from 3, in $\dbinom{3}{1}=3$ ways. By the product rule the number of favourable cases is
$$
N=\binom32\binom31=3\cdot3=9.
$$
The required probability is $\dfrac{9}{20}$.

The word "exactly" excludes the groups with 1 red ball and the group with 3 red balls. With "at least 2 red balls" the single group of 3 red balls is added, so the favourable cases become $9+1=10$ and the probability becomes $\dfrac{10}{20}=\dfrac{1}{2}$.
:::

## Union and complement

:::definizione{#unione-e-complemento titolo="Operations on events"}
A die is rolled and two events are considered: $A=\{2,4,6\}$, "an even number comes up", and $B=\{4,5,6\}$, "a number greater than 3 comes up". From two events, others are built with three operations.

- The **union** $A\cup B$, read "$A$ union $B$", consists of the outcomes belonging to at least one of the two events. It means "$A$ or $B$". Here $A\cup B=\{2,4,5,6\}$.
- The **intersection** $A\cap B$, read "$A$ intersection $B$", consists of the outcomes belonging to both events. It means "$A$ and $B$". Here $A\cap B=\{4,6\}$.
- The **complement** of $A$ is written $A^c$ and read "$A$ complement". It consists of the outcomes of $\Omega$ not belonging to $A$. It means "not $A$". Here $A^c=\{1,3,5\}$, that is, "an odd number comes up".

In questions, "$A$ or $B$" also includes the case in which both occur. The expression "exactly one of the two" instead denotes the union without the intersection, that is, $\{2,5\}$.

Two events are **disjoint**, or incompatible, when they share no outcomes, that is, when $A\cap B=\varnothing$. The events "a 1 comes up" and "a 2 comes up" are disjoint; $A$ and $B$ are not, because they share the outcomes 4 and 6.

In the figure the two circles represent $A$ and $B$, and the highlighted region is the intersection $A\cap B$.

::venn{tipo="due" zone="ab" titolo="The intersection contains only the outcomes common to the two events"}
:::

:::teorema{#regole-eventi titolo="Addition and complementation of probabilities"}
For every pair of events $A$ and $B$ two rules hold:
$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
**Complement rule.** The events $A$ and $A^c$ share no outcomes and together make up all of $\Omega$, so their probabilities add up to 1. For a fair die "a 6 comes up" has probability $\dfrac{1}{6}$, hence "a 6 does not come up" has probability $1-\dfrac{1}{6}=\dfrac{5}{6}$.

The complement of "at least one" is "none". For two fair coins "no heads" is the single outcome $TT$, which has probability $\dfrac{1}{4}$, so "at least one head" has probability $1-\dfrac{1}{4}=\dfrac{3}{4}$.

**Union rule.** In the sum $P(A)+P(B)$ the common outcomes are counted twice, and subtracting $P(A\cap B)$ leaves them counted once. For $A=\{2,4,6\}$ and $B=\{4,5,6\}$ we have $P(A)=\dfrac{3}{6}$, $P(B)=\dfrac{3}{6}$ and $P(A\cap B)=\dfrac{2}{6}$, so
$$
P(A\cup B)=\frac{3}{6}+\frac{3}{6}-\frac{2}{6}=\frac{4}{6}=\frac{2}{3}.
$$
Indeed, $A\cup B=\{2,4,5,6\}$ has 4 outcomes out of 6. Without the subtraction, the events "a number greater than 1 comes up" and "an even number comes up" would give $\dfrac{5}{6}+\dfrac{3}{6}=\dfrac{8}{6}$, a value greater than 1. If $A$ and $B$ are disjoint, then $P(A\cap B)=0$ and the rule reduces to $P(A\cup B)=P(A)+P(B)$.

For "exactly one of the two" the intersection is removed from both events, so it is subtracted twice: $P(A)+P(B)-2P(A\cap B)=\dfrac{3}{6}+\dfrac{3}{6}-\dfrac{4}{6}=\dfrac{1}{3}$, that is, 2 outcomes out of 6.

The notation $A\subseteq B$ is read "$A$ is contained in $B$" and means that every outcome of $A$ also belongs to $B$. In this case $P(A)\le P(B)$, because $B$ contains all the outcomes of $A$. For example, "a 6 comes up" is contained in "an even number comes up", and indeed $\dfrac{1}{6}\le\dfrac{3}{6}$.
:::

## Independence and conditioning

:::definizione{#indipendenza-e-condizionamento titolo="Restricting the reference population"}
A fair die is rolled and we learn that an even number came up, but not which. The outcomes still possible are 2, 4 and 6, all with the same probability. The probability that 6 came up is therefore $\dfrac{1}{3}$, whereas before the information it was $\dfrac{1}{6}$.

The **conditional probability** of $A$ given $B$ is the probability of $A$ calculated knowing that $B$ has occurred. It is written $P(A\mid B)$ and read "probability of $A$ given $B$". To the left of the vertical bar is the event whose probability is required, to the right is the known information. If $P(B)>0$, it is defined by
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
The information reduces the outcome space to the event $B$ alone, which is why $P(B)$ is the denominator. What remains of $A$ is the part contained in $B$, that is, $A\cap B$, which is the numerator. The condition $P(B)>0$ avoids division by zero.

For the die, with $A=\{6\}$ and $B=\{2,4,6\}$, we have $A\cap B=\{6\}$, $P(A\cap B)=\dfrac{1}{6}$ and $P(B)=\dfrac{3}{6}=\dfrac{1}{2}$. The formula gives
$$
P(A\mid B)=\frac{\frac{1}{6}}{\frac{1}{2}}=\frac{1}{6}\cdot2=\frac{2}{6}=\frac{1}{3},
$$
the same value found by counting the remaining outcomes. In questions conditional probability is introduced by "given that", "knowing that", "among those who".
:::

:::attenzione
$P(A\mid B)$ and $P(B\mid A)$ are two different probabilities, because the known information is different. The probability that 6 came up given that the number is even is $\dfrac{1}{3}$. The probability that the number is even given that 6 came up is 1, because 6 is even.
:::

:::definizione{#indipendenza titolo="Independence and incompatibility"}
A fair coin is tossed twice. Knowing that the first toss gave heads does not change the probability of heads on the second, which is still $\dfrac{1}{2}$.

Two events $A$ and $B$ are **independent** when the probability that both occur is the product of the two probabilities:
$$
P(A\cap B)=P(A)P(B).
$$
If $P(B)>0$, dividing both sides by $P(B)$ gives $\dfrac{P(A\cap B)}{P(B)}=P(A)$, that is, $P(A\mid B)=P(A)$. Knowing that $B$ has occurred therefore does not change the probability of $A$.

For the two tosses, the event $A$, "heads on the first toss", is $\{HH,HT\}$ and has probability $\dfrac{2}{4}=\dfrac{1}{2}$. The event $B$, "heads on the second toss", is $\{HH,TH\}$ and has probability $\dfrac{1}{2}$. The intersection is $\{HH\}$, with probability $\dfrac{1}{4}$. Since $\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{1}{4}$, the equality holds and the two events are **independent**. For this reason, even after many consecutive heads, the probability of heads on the next toss is still $\dfrac{1}{2}$.

Having the same probability does not make two events independent. For a fair die the events $A=\{2,4,6\}$ and $B=\{4,5,6\}$ both have probability $\dfrac{1}{2}$, with product $\dfrac{1}{4}$, whereas the intersection $\{4,6\}$ has probability $\dfrac{2}{6}=\dfrac{1}{3}$, so they are **not independent**.

Two **incompatible** events, that is, disjoint events, with positive probabilities are not independent, because their intersection has probability 0 whereas the product $P(A)P(B)$ is positive. For a fair die "a 1 comes up" and "a 2 comes up" are incompatible, and the product of their probabilities is $\dfrac{1}{6}\cdot\dfrac{1}{6}=\dfrac{1}{36}$, which is different from 0. Indeed, knowing that a 1 came up rules out that a 2 came up.

Additional information can make two events lose their independence. For the two tosses, given that at least one head came up, the three outcomes $HH,HT,TH$ remain, equally likely. Among these, $A$ and $B$ each have probability $\dfrac{2}{3}$ and the intersection $\{HH\}$ has probability $\dfrac{1}{3}$. Since $\dfrac{2}{3}\cdot\dfrac{2}{3}=\dfrac{4}{9}\ne\dfrac{1}{3}$, with this information $A$ and $B$ are no longer independent.

In questions independence is stated by the text ("independent tosses", "draws with replacement", in which the object drawn is put back before the next draw) or is checked with the product equality. If $A$ and $B$ are independent, so are the complements $A^c$ and $B^c$.
:::

:::esempio{titolo="At least one of two devices"}
Two devices work independently, the first with probability $\dfrac{4}{5}$ and the second with probability $\dfrac{3}{4}$. We want the probability that at least one works; its complement is "neither works". The first does not work with probability $1-\dfrac{4}{5}=\dfrac{1}{5}$ and the second with probability $1-\dfrac{3}{4}=\dfrac{1}{4}$. The complements are also independent, so neither works with probability $\dfrac{1}{5}\cdot\dfrac{1}{4}=\dfrac{1}{20}$. The required probability is $1-\dfrac{1}{20}=\dfrac{19}{20}$. If the two devices had a common cause of failure, such as the same power supply, the failures would not be independent and the product would not apply.
:::

:::esempio{titolo="Exactly three heads in four tosses"}
A fair coin is tossed 4 times, with independent tosses. Each sequence of 4 results has probability $\dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{1}{16}$. There are 4 sequences with exactly 3 heads, one for each position of the single tail: $HHHT,HHTH,HTHH,THHH$. The probability of exactly 3 heads is therefore $4\cdot\dfrac{1}{16}=\dfrac{1}{4}$.

If the coin is biased and gives heads with probability $p$ on each toss, sequences with a different number of heads are no longer equally likely. Each sequence with 3 heads and 1 tail has probability $p\cdot p\cdot p\cdot(1-p)=p^3(1-p)$, and the probability of exactly 3 heads is $4p^3(1-p)$. The same holds for any 4 independent trials with probability of success $p$.
:::

## Sampling and tree diagrams

:::teorema{#estrazioni-e-diagrammi-ad-albero titolo="Probability along a path"}
From the definition $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$, multiplying both sides by $P(A)$, one obtains the **multiplication rule**, which holds when $P(A)>0$:
$$
P(A\cap B)=P(A)P(B\mid A).
$$
The probability that both $A$ and $B$ occur is the probability of $A$ times the probability of $B$ given $A$. The rule also holds when $A$ and $B$ do not follow one another in time.

From an urn with 3 red and 2 blue balls, two are drawn one after the other. We want the probability that both are red. The event $A$ is "the first is red" and the event $B$ is "the second is red".

- **Without replacement**, that is, without putting the first ball drawn back into the urn. There are 3 red balls out of 5, so $P(A)=\dfrac{3}{5}$. After a red ball 4 balls remain, 2 of them red, so $P(B\mid A)=\dfrac{2}{4}$. The required probability is $\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}=\dfrac{3}{10}$.
- **With replacement**, that is, putting the first ball back into the urn. The urn returns to how it was, so $P(B\mid A)=\dfrac{3}{5}$ and the two draws are independent. The required probability is $\dfrac{3}{5}\cdot\dfrac{3}{5}=\dfrac{9}{25}$.

A **tree diagram** represents an experiment in several stages. From a starting point there is one branch for each result of the first stage, and from the end of each branch start the branches of the second stage. Each branch carries the probability of that result, conditional on the branches before it. A **path** is a succession of branches from the starting point to the last stage.

- The probabilities of the branches starting from the same point add up to 1.
- The probability of a path is the product of the probabilities of its branches, by the multiplication rule.
- The probability of an event is the sum of the probabilities of the paths that produce it, because different paths are disjoint events.
:::

:::esempio{titolo="The tree of two draws without replacement"}
The tree of the two draws without replacement from the urn with 3 red and 2 blue balls has four paths.

| Path | Product of the two branches |
| --- | :---: |
| red, red | $\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}$ |
| red, blue | $\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}$ |
| blue, red | $\dfrac{2}{5}\cdot\dfrac{3}{4}=\dfrac{6}{20}$ |
| blue, blue | $\dfrac{2}{5}\cdot\dfrac{1}{4}=\dfrac{2}{20}$ |

After a red ball 2 red and 2 blue remain; after a blue ball 3 red and 1 blue remain. The probability of a red ball on the second draw is therefore $\dfrac{2}{4}$ or $\dfrac{3}{4}$ depending on the colour of the first, and for this reason without replacement the two draws are not independent. The event "two balls of different colours" is produced by the paths "red, blue" and "blue, red", so it has probability $\dfrac{6}{20}+\dfrac{6}{20}=\dfrac{12}{20}=\dfrac{3}{5}$.
:::

:::esempio{#probabilita-totale titolo="Adding paths and reversing information"}
One of two urns is chosen by tossing a fair coin, so each urn has probability $\dfrac{1}{2}$. Urn $U_1$ holds 3 red balls and 1 blue, urn $U_2$ holds 1 red and 3 blue. A ball is drawn from the chosen urn, and $R$ is the event "the ball is red".

**Probability of a red ball.** The tree has two paths that end with a red ball, one for each urn:
$$
P(U_1\cap R)=\frac12\cdot\frac34=\frac38,\qquad
P(U_2\cap R)=\frac12\cdot\frac14=\frac18.
$$
Their sum is $P(R)=\dfrac{3}{8}+\dfrac{1}{8}=\dfrac{4}{8}=\dfrac{1}{2}$.

**Reversed information.** The ball drawn is red and the probability that it comes from $U_1$ is required, that is, $P(U_1\mid R)$. By the definition of conditional probability
$$
P(U_1\mid R)=\frac{P(U_1\cap R)}{P(R)}=\frac{\frac{3}{8}}{\frac{1}{2}}=\frac{3}{8}\cdot2=\frac{6}{8}=\frac{3}{4}.
$$
The numerator is the probability of the path that goes through $U_1$, and the denominator is the sum of the probabilities of the paths that end with a red ball. A red ball comes out of both urns, but drawing it takes the probability of $U_1$ from $\dfrac{1}{2}$ to $\dfrac{3}{4}$, because $U_1$ holds more red balls than $U_2$.
:::

## Variables and frequencies

:::definizione{#variabili titolo="What is being observed"}
A statistical survey collects data on people or objects, called **units**.

- The **population** is the set of all the units the survey is concerned with, for example the students of a school.
- The **sample** is the part of the population actually observed, for example the 50 students interviewed.
- A **variable** is the characteristic recorded for each unit, for example eye colour or height.

There are two types of variable.

- A **qualitative** variable has categories as its values, such as eye colour or the species of a plant.
- A **quantitative** variable has numbers as its values. It is **discrete** when the values come from counting, such as the number of books borrowed. It is **continuous** when the values come from measuring and are any numbers in an interval, such as a mass or a duration.

A mass remains continuous even when the scales show it rounded to $2.3\,\mathrm{kg}$. A qualitative variable remains qualitative even when the categories have numerical codes: if three species are labelled 1, 2 and 3, the mean of the codes is meaningless, because the mean is calculated only for quantitative variables.
:::

:::definizione{#frequenze titolo="Absolute, relative, and cumulative frequencies"}
Sixteen students are asked how many books they borrowed in a month. The table summarises the answers, and $N=16$ is the total number of observations.

| Books | Absolute frequency | Relative frequency | Cumulative frequency |
| :---: | :---: | :---: | :---: |
| 0 | 5 | $\dfrac{5}{16}$ | 5 |
| 1 | 7 | $\dfrac{7}{16}$ | 12 |
| 2 | 3 | $\dfrac{3}{16}$ | 15 |
| 3 | 1 | $\dfrac{1}{16}$ | 16 |

- The **absolute frequency** of a value is the number of times it occurs. It is written $n_i$, where the subscript $i$ numbers the values: $n_1=5$, $n_2=7$ and so on. The absolute frequencies add up to $N$, indeed $5+7+3+1=16$.
- The **relative frequency** of a value is the fraction of the data with that value, that is, $f_i=\dfrac{n_i}{N}$. The value 1 has relative frequency $\dfrac{7}{16}=0.4375$, that is, $43.75\%$ of the data. The relative frequencies add up to 1.
- The **cumulative frequency** up to a value is the number of observations less than or equal to that value. It is obtained by adding the absolute frequencies from the first row down to the row of the value: $5$, then $5+7=12$, then $12+3=15$, then $15+1=16$. Moving to a larger value the cumulative frequency never decreases, and the last one equals $N$.

The difference between two consecutive cumulative frequencies is an absolute frequency. The cumulative frequencies up to 2 and up to 1 are 15 and 12, so the value 2 occurs $15-12=3$ times.

The cumulative frequencies show which value occupies each place in the list of the data in increasing order. By the cumulative frequency 5, places 1 to 5 contain the value 0. By the cumulative frequency 12, places 6 to 12 contain the value 1. The two central places out of 16, the eighth and the ninth, therefore both contain 1. The value in the central place is called the median, and here it is 1.

An absolute frequency is interpreted together with the total it refers to: 12 students out of 30 are $40\%$, whereas 12 students out of 60 are $20\%$.

If a questionnaire allows several answers, the same person is counted in several categories and the sum of the frequencies exceeds the number of people. Out of 10 people, 7 choose the cinema and 6 choose sport, with sum $7+6=13$.
:::

## Mean, median, and variables

:::definizione{#media-mediana-e-variabili titolo="Mean and weights"}
The **arithmetic mean** of $N$ numerical data is their sum divided by $N$. It is written $\bar x$, read "$x$ bar". The four marks $6,7,8,7$ have mean
$$
\bar x=\frac{6+7+8+7}{4}=\frac{28}{4}=7.
$$
When the data are summarised in a frequency table, the value $x_i$ occurs $n_i$ times, so it contributes the product $n_ix_i$ to the sum. The mean is then
$$
\bar x=\frac{\sum_i n_ix_i}{\sum_i n_i}.
$$
The symbol $\sum$, the Greek capital letter sigma, is read "sum". The numerator is the sum of the products $n_ix_i$ over all the values, and the denominator is the sum of the frequencies, that is, $N$. For the books of the 16 students, with values $0,1,2,3$ and frequencies $5,7,3,1$, this gives
$$
\bar x=\frac{5\cdot0+7\cdot1+3\cdot2+1\cdot3}{16}=\frac{0+7+6+3}{16}=\frac{16}{16}=1.
$$
In this formula the frequencies are also called **weights**, and the mean is called a **weighted mean**.

The mean has the same unit as the data and lies between the smallest and the largest value. From the mean and the number of observations one obtains the sum of the data, $N\cdot\bar x$: four marks with mean 7 have sum $4\cdot7=28$. The individual data and the median, that is, the central value of the ordered data, cannot be obtained. The data $4,4,4,16$ also have sum 28 and mean 7, but their central value is 4, whereas that of the ordered marks $6,7,7,8$ is 7.
:::

:::esempio{titolo="The mean of two groups combined"}
A group of 10 students has mean 18 and a group of 30 students has mean 26. The sum of the scores of the first group is $10\cdot18=180$ and that of the second is $30\cdot26=780$. The mean of the 40 students is
$$
\bar x=\frac{180+780}{40}=\frac{960}{40}=24.
$$
The result is closer to 26 than to 18, because the second group is larger. The mean of the two means, $\dfrac{18+26}{2}=22$, is different from 24. The two values coincide only for groups with the same number of observations, or with equal means.
:::

:::definizione{#mediana-moda titolo="Central position and dispersion"}
The **median** is the value in the central place when the data are written in increasing order, including repetitions.

- If the number $N$ of data is odd, the central place is number $\dfrac{N+1}{2}$. For the 5 values $3,5,5,8,9$ it is place $\dfrac{5+1}{2}=3$, and the median is the third value, that is, 5.
- If $N$ is even, the central places are $\dfrac{N}{2}$ and $\dfrac{N}{2}+1$, and the median is the mean of the two values that occupy them. For the 4 values $3,5,6,8$ they are the second and third places, and the median is $\dfrac{5+6}{2}=5.5$.

At least half of the data are less than or equal to the median and at least half are greater than or equal to it. The median only requires that the data can be ordered, so it also exists for ordered categories such as "low", "medium", "high".

For the books of the 16 students the central places are $\dfrac{16}{2}=8$ and $\dfrac{16}{2}+1=9$. By the cumulative frequencies 5 and 12, both contain the value 1, so the median is $\dfrac{1+1}{2}=1$.

The median of two groups combined is calculated on the full list of the data, because the two medians are not enough to determine it. The groups $1,2,9$ and $3,4,5$ have medians 2 and 4, and combined they have median $\dfrac{3+4}{2}=3.5$. The groups $2,2,2$ and $4,4,4$ also have medians 2 and 4, but combined they have median $\dfrac{2+4}{2}=3$.

The **mode** is the value with the highest frequency. In the data $3,5,5,8,9$ the mode is 5. If several values have the same highest frequency, there is more than one mode: in the data $1,1,2,2,3$ the modes are 1 and 2.

The **range** is the difference between the largest and the smallest value and measures the **dispersion**, that is, how far apart the data are. For the data $3,5,5,8,9$ it is $9-3=6$.
:::

:::esempio{titolo="A value far from the others"}
The data $1,2,3,4,100$ have median 3 and mean $\dfrac{1+2+3+4+100}{5}=\dfrac{110}{5}=22$. Replacing 100 with 200, the median remains 3 and the mean becomes $\dfrac{210}{5}=42$. A value far from the others shifts the mean and leaves the median unchanged, because the mean depends on the sum of all the data and the median only on the central value.

Adding 10 to each value gives $11,12,13,14,110$. The median goes from 3 to 13 and the mean from 22 to 32, that is, both increase by 10, while the range remains $110-11=99$.
:::

## Tables and percentages

:::esempio{#tabelle-e-percentuali titolo="Cell, margin, and denominator"}
A **two-way table** classifies the same units by two variables, one on the rows and one on the columns. Here the 40 students enrolled in two courses, A and B, are classified by attendance at a lesson.

| Course | Present | Absent | Total |
| --- | ---: | ---: | ---: |
| A | 12 | 8 | 20 |
| B | 9 | 11 | 20 |
| Total | 21 | 19 | 40 |

Each inner **cell** counts the units with both the row characteristic and the column characteristic: 9 students of course B are present. The **marginal totals**, in the last row and in the last column, count the units with a single characteristic: 21 students are present and 20 are enrolled in course B.

A student is chosen at random, with the same probability for all. Three questions use the same cell with three different denominators.

- The probability that the student is in course B *and* is present is $\dfrac{9}{40}$. The denominator is the grand total, because no information is available.
- The probability that the student is in course B *given that* the student is present is $\dfrac{9}{21}=\dfrac{3}{7}$. The denominator is the total of those present, because the information restricts the choice to the 21 present.
- The probability that the student is present *given that* the student is in course B is $\dfrac{9}{20}$. The denominator is the total of the 20 students enrolled in course B.
:::

:::osservazione{#percentuali-dati titolo="Percentages, points, and rounding"}
A **percentage** is a relative frequency multiplied by 100. The symbol $\%$ is read "per cent" and denotes hundredths. Nine students present out of 20 enrolled are $\dfrac{9}{20}=0.45$, that is, $45\%$.

The change in a percentage is expressed in two ways. Suppose a share goes from $20\%$ to $25\%$.

- The difference $25-20=5$ is measured in **percentage points**: the share has increased by 5 percentage points.
- The **relative change** compares the difference with the starting value. It is $\dfrac{25-20}{20}=\dfrac{5}{20}=0.25$, so the share has increased by $25\%$.

To combine two groups, the counts are added and then divided by the overall total. With 18 passes out of 20 in one class ($90\%$) and 15 out of 30 in another ($50\%$), the two classes together have $18+15=33$ passes out of 50, that is, $66\%$, and not the $70\%$ obtained as the mean of the two percentages.

Published percentages are rounded, for example to the nearest integer. Ten people out of 30 are $\dfrac{10}{30}=0.333\ldots$, that is, $33.\overline3\%$, where the bar over the digit 3 means that it repeats without end. Rounded, the percentage becomes $33\%$. This is why $30\cdot0.33=9.9$ is not an integer. The count is 10, the only integer that gives $33\%$ out of 30 people after rounding.
:::

## Graphs and interpretation

:::definizione{#grafici titolo="Bars, sectors, and histograms"}
A statistical graph represents frequencies by heights, angles or areas.

- A **bar chart** has one bar per category or value, with height equal to the frequency, which is read on the vertical axis. The heights are proportional to the frequencies when the vertical axis starts from 0. If the axis starts from 40, two bars with frequencies 50 and 60 are drawn with heights 10 and 20, so the second looks twice as tall as the first, whereas the ratio of the frequencies is $\dfrac{60}{50}=1.2$.
- A **pie chart**, or sector diagram, divides a circle into sectors, one per category, with the angle proportional to the frequency. The whole circle measures $360^\circ$, so a sector of $\theta$ degrees (the Greek letter $\theta$ is read "theta") represents the fraction $\dfrac{\theta}{360}$ of the total. A sector of $90^\circ$ represents $\dfrac{90}{360}=\dfrac{1}{4}$ of the total, that is, $25\%$.
- A **histogram** represents a quantitative variable whose values are grouped into intervals, called **classes**. Each class is a rectangle whose base is the class interval, and the class frequency is the **area** of the rectangle.

The height of a rectangle of the histogram is called the **frequency density** and is the frequency divided by the class width, that is, by the length of its interval. If all the classes have the same width, the heights are proportional to the frequencies.

Each value belongs to one class only. In the notation $[0,2)$ the symbol $[$ means that the endpoint 0 belongs to the class and the symbol $)$ that the endpoint 2 is excluded. With the classes $[0,2)$ and $[2,5)$ the value 2 belongs only to the second.

In the figure the horizontal axis shows the variable $x$ and the vertical axis the density $d$. The class from 0 to 2 has width 2 and height 6, so its frequency is $2\cdot6=12$. The class from 2 to 5 has width 3 and height 4, so its frequency is $3\cdot4=12$. The two classes contain the same number of observations, even though the first rectangle is taller. The sum of the areas is the total number of observations, $12+12=24$; if the areas represent relative frequencies, the sum is 1. A histogram shows how many observations fall in each class and does not keep the individual values, so their exact mean requires the full list.

::grafico{poligoni="0,0 2,0 2,6 0,6;2,0 5,0 5,4 2,4" xmin=-0.5 xmax=5.5 ymin=-0.5 ymax=7 nomi="x,d" titolo="Classes of width two and three: equal areas despite different heights"}
:::

:::osservazione{#campioni titolo="What the data allow us to conclude"}
Calculations on a table or a graph describe the data collected. Conclusions that go further depend on how the data were obtained.

- **Observed frequency and probability.** Suppose that a fair coin, tossed 10 times, gives 7 heads. The observed relative frequency of heads is $\dfrac{7}{10}$. The probability of heads on the next toss is still $\dfrac{1}{2}$, because the coin is fair and the tosses are independent. The observed frequency describes the 10 tosses performed.
- **Choice of the sample.** The result of a sample is used as an estimate for the population when the sample is chosen at random, that is, when every unit has the same probability of being in it. A sports survey open to anyone is answered mostly by interested people, so the share of people who do sport is higher in the sample than in the population, even with many answers.
- **Missing answers.** Suppose that out of 100 people asked, 80 answer and 50 are in favour. If the 20 who did not answer were all against, those in favour would be 50 out of 100. If they were all in favour, there would be $50+20=70$ out of 100. The share of those in favour among the 100 people is therefore between $50\%$ and $70\%$.
- **Relationship and cause.** Suppose that in months with higher ice-cream sales more cases of sunburn are recorded. The two variables increase together because both depend on a third one, the number of sunny days. A relationship between two variables does not by itself prove that one causes the other.
- **Totals and subgroups.** A comparison between two percentages can reverse when subgroups of very different sizes are combined, because the total also depends on their sizes.
:::

:::esempio{titolo="A comparison that reverses in the total"}
Two study methods, A and B, are tried on easy and hard questions. Each cell shows the questions solved out of those attempted (exercise data).

| Questions | Method A | Method B |
| --- | :---: | :---: |
| Easy | 9 of 10 ($90\%$) | 80 of 100 ($80\%$) |
| Hard | 30 of 100 ($30\%$) | 2 of 10 ($20\%$) |
| Total | 39 of 110 (about $35\%$) | 82 of 110 (about $75\%$) |

Method A has the higher percentage on both the easy and the hard questions, whereas B prevails in the total. The comparison reverses because with B almost only easy questions were attempted and with A almost only hard ones.
:::
