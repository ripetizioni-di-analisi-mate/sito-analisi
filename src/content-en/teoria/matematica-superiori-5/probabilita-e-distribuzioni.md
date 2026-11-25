---
titolo: Probability and distributions
sommario: How to count outcomes using combinatorics, how to find the probability of an event using the addition and multiplication rules, conditional probability, and Bayes’ theorem, what discrete and continuous random variables are and how their means and variances are defined, and how to use the binomial, Poisson, uniform, exponential, and normal distributions.
---

## Review of counting methods

:::definizione{#disposizioni-permutazioni titolo="Ordered selections and permutations"}
Suppose we have $n$ distinct objects and a natural number $k \leq n$. An **ordered selection without replacement** of size $k$ is an ordered sequence of $k$ objects chosen from the $n$ objects, with no repetitions. Two selections differ if they contain different objects or the same objects in a different order. There are $n$ choices for the first object, $n - 1$ remaining choices for the second, and so on up to the $k$th object, so the number of ordered selections without replacement is
$$
D_{n,k} = n\,(n - 1)\,(n - 2) \cdots (n - k + 1) .
$$
If objects can be repeated, there are $n$ choices for each position, giving **ordered selections with replacement**, of which there are $D'_{n,k} = n^k$. The **permutations** of $n$ objects are the ordered selections without replacement of size $n$, that is, all the ways to arrange all the objects in a line. Their number is $P_n = n!$, where $n! = n\,(n - 1) \cdots 2 \cdot 1$ is read as “$n$ factorial.” We also define $0! = 1$.

For example, in a race with $8$ athletes there are $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$ possible podium finishes. The number of codes with $3$ digits, allowing repetitions, is $D'_{10,3} = 10^3 = 1000$, and the number of ways to arrange $5$ people in a line is $P_5 = 5! = 120$.
:::

:::definizione{#combinazioni titolo="Combinations and the binomial coefficient"}
Given $n$ distinct objects, a **combination without repetition** of size $k$ is a group of $k$ objects chosen from the $n$ objects, without repetitions and regardless of order. The $k$ objects in a combination can be arranged in $k!$ ways, so each combination corresponds to $k!$ ordered selections. Therefore the number of combinations is
$$
C_{n,k} = \frac{D_{n,k}}{k!} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
The number $\dbinom{n}{k}$ is called a **binomial coefficient** and is read as “$n$ choose $k$.” We have $\dbinom{n}{0} = \dbinom{n}{n} = 1$ and $\dbinom{n}{k} = \dbinom{n}{n - k}$. For example, the number of ways to choose $3$ students out of $10$ for an oral examination is
$$
\binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{3!} = \frac{720}{6} = 120 .
$$
Binomial coefficients are also the coefficients in the expansion of a power of a binomial and appear in the binomial distribution.
:::

:::esempio{titolo="Three ways to count pairs of letters"}
Form pairs from the letters $A$, $B$, $C$, and $D$.

- If order matters and the letters must be different, $AB$ and $BA$ are different pairs, and the number of pairs is $D_{4,2} = 4 \cdot 3 = 12$.
- If order matters and the letters may repeat, include $AA$, $BB$, $CC$, and $DD$ as well, giving $D'_{4,2} = 4^2 = 16$ pairs.
- If order does not matter, $AB$ and $BA$ are the same group, and the number of groups is $\dbinom{4}{2} = \dfrac{12}{2} = 6$.
:::

## Events and classical probability

:::definizione{#eventi titolo="Sample space and events"}
A **random experiment** is an experiment whose outcome cannot be predicted, such as rolling a die or drawing a card. The set of all possible outcomes is called the **sample space** and is denoted by $\Omega$. An **event** is a subset of $\Omega$. The event occurs if the outcome of the experiment belongs to that subset. The space $\Omega$ is the certain event, and the empty set is the impossible event.

Operations on events are the same as operations on sets.

- The **union** $A \cup B$ occurs when at least one of the two events occurs.
- The **intersection** $A \cap B$ occurs when both events occur.
- The **complementary event** $\overline{E}$ is the complement of $E$ in $\Omega$ and occurs when $E$ does not occur.

Two events are **mutually exclusive** if $A \cap B = \emptyset$, meaning that they cannot occur together. For one roll of a die, $\Omega = \{1, 2, 3, 4, 5, 6\}$. The events “the number rolled is even” and “the number rolled is greater than $3$” are $A = \{2, 4, 6\}$ and $B = \{4, 5, 6\}$, so $A \cup B = \{2, 4, 5, 6\}$, $A \cap B = \{4, 6\}$, and $\overline{A} = \{1, 3, 5\}$.
:::

:::definizione{#probabilita-classica titolo="Classical probability"}
Let $\Omega$ be a finite set of **equally likely** outcomes, meaning that they all have the same chance of occurring. The **probability** of an event $E$ is the ratio of the number of favorable outcomes, that is, the elements of $E$, to the number of possible outcomes, that is, the elements of $\Omega$:
$$
P(E) = \frac{\text{number of favorable outcomes}}{\text{number of possible outcomes}} .
$$
The number of favorable outcomes cannot exceed the number of possible outcomes, so $0 \leq P(E) \leq 1$. Also, $P(\Omega) = 1$ and $P(\emptyset) = 0$. When rolling a die, the probability of an even number is $\dfrac{3}{6} = \dfrac{1}{2}$. When rolling two dice, the possible outcomes are the ordered pairs of individual results, giving $D'_{6,2} = 36$ possibilities. The sum is $7$ in the $6$ cases $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, and $(6, 1)$, so its probability is $\dfrac{6}{36} = \dfrac{1}{6}$.
:::

:::osservazione{#altre-definizioni titolo="Empirical and subjective probability"}
When outcomes are not equally likely, other definitions are used. In the **empirical** definition, the probability of an event is the relative frequency $\dfrac{m}{n}$ with which it occurred in a large number $n$ of trials repeated under the same conditions. For example, if out of $1000$ parts inspected, $23$ are defective, the probability of a defective part is estimated as $0.023$. In the **subjective** definition, probability is the amount a person with consistent beliefs is willing to pay to receive $1$ if the event occurs. The following theorems apply to all these definitions.
:::

:::teorema{#evento-contrario titolo="Probability of the complement"}
For every event $E$, we have
$$
P\big( \overline{E} \big) = 1 - P(E) .
$$
In classical probability, the outcomes favorable to $\overline{E}$ are all the possible outcomes except those favorable to $E$, which gives the formula. The rule is useful for “at least one” events, whose complements are simpler. For example, when tossing three coins, the complement of “at least one head” is “three tails,” which has probability $\dfrac{1}{8}$ because there are $2^3 = 8$ possible outcomes. Therefore the probability of at least one head is $1 - \dfrac{1}{8} = \dfrac{7}{8}$.
:::

:::esempio{titolo="Calculating probability with combinations"}
An urn contains $6$ red balls and $4$ white balls, and $3$ balls are drawn at once. Order does not matter, so there are $\dbinom{10}{3} = 120$ possible outcomes. There are $\dbinom{6}{3} = 20$ ways for all three balls to be red, so
$$
P(\text{three red}) = \frac{20}{120} = \frac{1}{6} .
$$
To obtain exactly two red balls, choose $2$ red balls from $6$ and $1$ white ball from $4$, in $\dbinom{6}{2} \cdot \dbinom{4}{1} = 15 \cdot 4 = 60$ ways, so the probability is $\dfrac{60}{120} = \dfrac{1}{2}$.
:::

## Addition and multiplication rules

:::teorema{#teorema-somma titolo="Addition rule"}
For any two events $A$ and $B$, we have
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) .
$$
If $A$ and $B$ are mutually exclusive, then $P(A \cap B) = 0$ and the formula becomes $P(A \cup B) = P(A) + P(B)$. In classical probability, the formula follows by counting favorable outcomes. Adding the outcomes in $A$ to those in $B$ counts the outcomes in $A \cap B$ twice, so we subtract them once.

When rolling a die, with $A = \{2, 4, 6\}$ and $B = \{4, 5, 6\}$, we have
$$
P(A \cup B) = \frac{3}{6} + \frac{3}{6} - \frac{2}{6} = \frac{4}{6} = \frac{2}{3} ,
$$
in agreement with a direct count of $A \cup B = \{2, 4, 5, 6\}$.

::venn{zone="a,ab,b" nomi="A,B" ambiente="Ω" elementi="a:2;ab:4,6;b:5;u:1,3" titolo="For one roll of a die, $A \cup B = \{2, 4, 5, 6\}$. The outcomes $4$ and $6$ belong to both $A$ and $B$, so the sum $P(A) + P(B)$ counts them twice"}

:::

:::definizione{#probabilita-condizionata titolo="Conditional probability"}
Let $A$ and $B$ be two events with $P(B) > 0$. The **probability of $A$ given $B$** is the probability that $A$ occurs, knowing that $B$ has occurred. It is given by
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$
Knowing that $B$ occurred restricts the possible outcomes to those in $B$, and among these, the favorable outcomes are those in $A \cap B$. For equally likely outcomes, $P(A \mid B)$ is therefore the number of elements in $A \cap B$ divided by the number in $B$. When rolling a die, given that the number rolled is greater than $3$, the probability of an even number is
$$
P(A \mid B) = \frac{P(\{4, 6\})}{P(\{4, 5, 6\})} = \frac{\dfrac{2}{6}}{\dfrac{3}{6}} = \frac{2}{3} ,
$$
whereas without this information the probability of an even number is $\dfrac{1}{2}$.

::venn{zone="ab" nomi="A,B" ambiente="Ω" elementi="a:2;ab:4,6;b:5;u:1,3" titolo="Given that $B = \{4, 5, 6\}$ occurred, there are $3$ possible outcomes, and those favorable to $A$ are the outcomes in $A \cap B = \{4, 6\}$, so $P(A \mid B) = \dfrac{2}{3}$"}

:::

:::teorema{#teorema-prodotto titolo="Multiplication rule"}
For two events $A$ and $B$ with positive probabilities, we have
$$
P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B) .
$$
The formula follows by multiplying the definition of conditional probability by its denominator. It applies to successive draws when the probability for each draw is known given the outcomes of the earlier ones. For example, draw two cards from a deck of $40$ cards without replacing the first. The probability that the first card is an ace is $\dfrac{4}{40}$. If the first is an ace, $3$ aces remain among $39$ cards, so
$$
P(\text{two aces}) = \frac{4}{40} \cdot \frac{3}{39} = \frac{12}{1560} = \frac{1}{130} .
$$
:::

:::definizione{#eventi-indipendenti titolo="Independent events"}
Two events $A$ and $B$ with positive probabilities are **independent** if $P(A \mid B) = P(A)$, meaning that knowing that $B$ occurred does not change the probability of $A$. By the multiplication rule, this condition is equivalent to
$$
P(A \cap B) = P(A) \cdot P(B) .
$$
For several independent events, the probability that they all occur is the product of their probabilities. Repeated draws with replacement and successive rolls of a die or tosses of a coin produce independent events. When rolling two dice, the probability that the first shows $6$ and the second an even number is $\dfrac{1}{6} \cdot \dfrac{1}{2} = \dfrac{1}{12}$. A direct count confirms this because the favorable pairs are $(6, 2)$, $(6, 4)$, and $(6, 6)$, that is, $3$ out of $36$.
:::

:::attenzione
Two mutually exclusive events with positive probabilities are *never* independent. When rolling a die, the events $A = \{1, 2\}$ and $B = \{3, 4\}$ are mutually exclusive, so $P(A \cap B) = 0$. However, $P(A) \cdot P(B) = \dfrac{1}{3} \cdot \dfrac{1}{3} = \dfrac{1}{9}$, so $A$ and $B$ are not independent. Indeed, knowing that $B$ occurred makes the probability of $A$ equal to $0$.
:::

## Bayes’ theorem

:::teorema{#disintegrazione titolo="Decomposing a probability"}
Let $B_1, B_2, \dots, B_n$ be pairwise mutually exclusive events with positive probabilities whose union is $\Omega$. They are said to form a **partition** of $\Omega$. Then for every event $A$, we have
$$
P(A) = P(B_1) \cdot P(A \mid B_1) + P(B_2) \cdot P(A \mid B_2) + \dots + P(B_n) \cdot P(A \mid B_n) .
$$
The event $A$ is the union of the mutually exclusive events $A \cap B_1, \dots, A \cap B_n$, so its probability is the sum of their probabilities, and by the multiplication rule $P(A \cap B_i) = P(B_i) \cdot P(A \mid B_i)$. The formula is also called the law of total probability.

For example, urn $U_1$ contains $2$ white balls and $3$ black balls, and urn $U_2$ contains $4$ white balls and $1$ black ball. Choose an urn by tossing a coin and draw a ball. The events $U_1$ and $U_2$ form a partition, so
$$
P(\text{white}) = \frac{1}{2} \cdot \frac{2}{5} + \frac{1}{2} \cdot \frac{4}{5} = \frac{1}{5} + \frac{2}{5} = \frac{3}{5} .
$$
:::

:::teorema{#teorema-bayes titolo="Bayes’ theorem"}
Let $B_1, \dots, B_n$ be a partition of $\Omega$, and let $A$ be an event with $P(A) > 0$. Then for each $k$, we have
$$
P(B_k \mid A) = \frac{P(B_k) \cdot P(A \mid B_k)}{P(B_1) \cdot P(A \mid B_1) + \dots + P(B_n) \cdot P(A \mid B_n)} .
$$
By the definition of conditional probability, $P(B_k \mid A) = \dfrac{P(B_k \cap A)}{P(A)}$. Writing the numerator using the multiplication rule and the denominator using the law of total probability gives the formula. The theorem lets us work back from the observed effect, event $A$, to the probability of each cause $B_k$. In the two-urn example, if the ball drawn is white, the probability that it came from $U_2$ is
$$
P(U_2 \mid \text{white}) = \frac{\dfrac{1}{2} \cdot \dfrac{4}{5}}{\dfrac{3}{5}} = \frac{\dfrac{2}{5}}{\dfrac{3}{5}} = \frac{2}{3} .
$$
:::

:::esempio{titolo="A diagnostic test"}
A disease affects $1\%$ of the population. A test gives a positive result in $90\%$ of people with the disease and $5\%$ of those without it. The events $M$, “the person has the disease,” and $S$, “the person does not have the disease,” form a partition, with $P(M) = 0.01$ and $P(S) = 0.99$. By the law of total probability, the probability of a positive test is
$$
P(+) = 0.01 \cdot 0.9 + 0.99 \cdot 0.05 = 0.009 + 0.0495 = 0.0585 .
$$
By Bayes’ theorem, the probability that a person who tests positive has the disease is
$$
P(M \mid +) = \frac{0.009}{0.0585} \approx 0.154 .
$$
The value is about $15\%$ because people without the disease greatly outnumber those with it, so there are more false positives than true positives.
:::

## Discrete random variables

:::definizione{#variabile-aleatoria-discreta titolo="Discrete random variable"}
A **random variable** $X$ assigns a number to each outcome of a random experiment. It is **discrete** if it takes a finite number of values $x_1, x_2, \dots, x_n$ or a sequence of values. The **probability distribution** of $X$ lists the values and their probabilities $p_i = P(X = x_i)$. The events $X = x_i$ are mutually exclusive and their union is $\Omega$, so
$$
p_1 + p_2 + \dots + p_n = 1 .
$$
For example, toss three coins and let $X$ be the number of heads. There are $8$ possible outcomes. One sequence gives $0$ heads, three sequences give $1$ head, namely $TCC$, $CTC$, and $CCT$, three give $2$ heads, and one gives $3$ heads. The distribution is

| $x_i$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- |
| $p_i$ | $\dfrac{1}{8}$ | $\dfrac{3}{8}$ | $\dfrac{3}{8}$ | $\dfrac{1}{8}$ |

and the sum of the probabilities is $1$. The graph of the distribution, called a histogram, has, above each value $x_i$, a rectangle of height $p_i$.

::grafico{poligoni="-0.35,0 -0.35,0.1250 0.35,0.1250 0.35,0;0.65,0 0.65,0.3750 1.35,0.3750 1.35,0;1.65,0 1.65,0.3750 2.35,0.3750 2.35,0;2.65,0 2.65,0.1250 3.35,0.1250 3.35,0" linee="-0.06,0.125 0.06,0.125;-0.06,0.375 0.06,0.375" etichette="-0.75,0.125,0.125;-0.75,0.375,0.375" xmin=-1 xmax=4 ymin=-0.05 ymax=0.45 nomi="x,p" legenda=0 titolo="Distribution of the number of heads in three coin tosses. The values $0$ and $3$ have probability $\dfrac{1}{8}$, and $1$ and $2$ have probability $\dfrac{3}{8}$"}

:::

:::definizione{#valore-medio titolo="Mean"}
The **mean**, or expected value, of a discrete random variable $X$ is the sum of its values, each multiplied by its probability:
$$
M(X) = x_1 p_1 + x_2 p_2 + \dots + x_n p_n .
$$
It is also denoted by $\mu$. If the experiment is repeated many times, the average of the observed values of $X$ is close to $M(X)$. For the number of heads in three tosses, we obtain
$$
M(X) = 0 \cdot \frac{1}{8} + 1 \cdot \frac{3}{8} + 2 \cdot \frac{3}{8} + 3 \cdot \frac{1}{8} = \frac{12}{8} = \frac{3}{2} .
$$
The mean need not be one of the possible values of the variable, as this example shows.
:::

:::osservazione{#gioco-equo titolo="Fair game"}
In a game, a player’s net gain $G$ is a random variable, and the game is called **fair** if $M(G) = 0$. For example, a player pays $1$ euro to roll a die and receives $4$ euros for rolling a $6$. The net gain is $3$ with probability $\dfrac{1}{6}$ and $-1$ with probability $\dfrac{5}{6}$, so
$$
M(G) = 3 \cdot \frac{1}{6} - 1 \cdot \frac{5}{6} = -\frac{2}{6} = -\frac{1}{3} ,
$$
and the game is unfavorable to the player. If rolling a $6$ pays $6$ euros, the net gain is $5$ with probability $\dfrac{1}{6}$ and $M(G) = \dfrac{5}{6} - \dfrac{5}{6} = 0$, so the game is fair.
:::

:::definizione{#varianza titolo="Variance and standard deviation"}
Let $\mu = M(X)$. The **variance** of $X$ is the mean of the squared distances of its values from $\mu$:
$$
\operatorname{var}(X) = (x_1 - \mu)^2 p_1 + (x_2 - \mu)^2 p_2 + \dots + (x_n - \mu)^2 p_n .
$$
The **standard deviation** is $\sigma = \sqrt{\operatorname{var}(X)}$ and is measured in the same units as $X$. Both quantities measure how spread out the values of $X$ are around the mean. We also write $\operatorname{var}(X) = \sigma^2$. For the number of heads in three tosses, with $\mu = \dfrac{3}{2}$, we have
$$
\operatorname{var}(X) = \frac{9}{4} \cdot \frac{1}{8} + \frac{1}{4} \cdot \frac{3}{8} + \frac{1}{4} \cdot \frac{3}{8} + \frac{9}{4} \cdot \frac{1}{8} = \frac{24}{32} = \frac{3}{4} ,
$$
so $\sigma = \dfrac{\sqrt{3}}{2} \approx 0.87$.
:::

:::teorema{#calcolo-varianza titolo="A formula for calculating variance"}
The variance equals the mean of the square minus the square of the mean:
$$
\operatorname{var}(X) = M\big( X^2 \big) - \big[ M(X) \big]^2 ,
\qquad
\text{where } M\big( X^2 \big) = x_1^2 p_1 + \dots + x_n^2 p_n .
$$
Expand $(x_i - \mu)^2 = x_i^2 - 2\mu x_i + \mu^2$ in each term of the definition and add. This gives $M\big( X^2 \big) - 2\mu \cdot \mu + \mu^2 \cdot 1$ because the sum of the terms $x_i p_i$ is $\mu$ and the sum of the terms $p_i$ is $1$, and the result is $M\big( X^2 \big) - \mu^2$. This formula avoids calculating the differences $x_i - \mu$, which are often fractions. For the number of heads, $M\big( X^2 \big) = \dfrac{0 + 3 + 12 + 9}{8} = 3$, so $\operatorname{var}(X) = 3 - \dfrac{9}{4} = \dfrac{3}{4}$, as in the calculation using the definition.
:::

:::osservazione{#trasformazione-lineare titolo="Mean and variance of aX + b"}
Let $a$ and $b$ be real numbers. The variable $aX + b$ takes the values $a x_i + b$ with the same probabilities $p_i$, so the definitions give
$$
M(aX + b) = a\,M(X) + b ,
\qquad
\operatorname{var}(aX + b) = a^2 \operatorname{var}(X) .
$$
Shifting all the values shifts the mean and leaves the spread unchanged. For the number of heads $X$ and the variable $Y = 2X + 1$, we have $M(Y) = 2 \cdot \dfrac{3}{2} + 1 = 4$ and $\operatorname{var}(Y) = 4 \cdot \dfrac{3}{4} = 3$.
:::

## Binomial distribution

:::definizione{#distribuzione-binomiale titolo="Binomial distribution"}
A trial has just two outcomes, success with probability $p$ and failure with probability $q = 1 - p$. Repeat the trial $n$ times independently and let $X$ denote the number of successes. Then for $k = 0, 1, \dots, n$, we have
$$
P(X = k) = \binom{n}{k}\,p^k\,q^{\,n - k} .
$$
We say that $X$ has a **binomial distribution** with parameters $n$ and $p$. A particular sequence with $k$ successes and $n - k$ failures has probability $p^k q^{\,n - k}$ by the multiplication rule for independent events. The $k$ positions of the successes among the $n$ trials can be chosen in $\dbinom{n}{k}$ ways. These sequences are mutually exclusive, so their probabilities add.

For example, roll a die $4$ times and let $X$ be the number of times a $6$ appears, with $p = \dfrac{1}{6}$ and $q = \dfrac{5}{6}$. Then
$$
P(X = 2) = \binom{4}{2} \left( \frac{1}{6} \right)^2 \left( \frac{5}{6} \right)^2 = 6 \cdot \frac{25}{1296} = \frac{25}{216} \approx 0.116 .
$$

::grafico{poligoni="-0.35,0 -0.35,0.0878 0.35,0.0878 0.35,0;0.65,0 0.65,0.2634 1.35,0.2634 1.35,0;1.65,0 1.65,0.3292 2.35,0.3292 2.35,0;2.65,0 2.65,0.2195 3.35,0.2195 3.35,0;3.65,0 3.65,0.0823 4.35,0.0823 4.35,0;4.65,0 4.65,0.0165 5.35,0.0165 5.35,0;5.65,0 5.65,0.0014 6.35,0.0014 6.35,0" linee="-0.08,0.1 0.08,0.1;-0.08,0.2 0.08,0.2;-0.08,0.3 0.08,0.3" etichette="-0.75,0.1,0.1;-0.75,0.2,0.2;-0.75,0.3,0.3" xmin=-1 xmax=7 ymin=-0.04 ymax=0.38 nomi="k,p" legenda=0 titolo="Binomial distribution with $n = 6$ and $p = \dfrac{1}{3}$. The most likely value is $k = 2$, with probability $\dfrac{80}{243} \approx 0.33$"}

:::

:::teorema{#media-varianza-binomiale titolo="Mean and variance of the binomial distribution"}
If $X$ has a binomial distribution with parameters $n$ and $p$, then
$$
M(X) = n p ,
\qquad
\operatorname{var}(X) = n p q ,
\qquad
\sigma = \sqrt{n p q} .
$$
For $n = 1$, the variable takes the value $1$ with probability $p$ and $0$ with probability $q$, so $M(X) = p$, $M\big( X^2 \big) = p$, and $\operatorname{var}(X) = p - p^2 = pq$. The proof for general $n$ is covered in college. For example, in $600$ rolls of a die, the number of times a $6$ appears has mean $600 \cdot \dfrac{1}{6} = 100$ and variance $600 \cdot \dfrac{1}{6} \cdot \dfrac{5}{6} = \dfrac{250}{3}$, so $\sigma \approx 9.13$.
:::

## Poisson distribution

:::definizione{#distribuzione-poisson titolo="Poisson distribution"}
Let $\lambda$ be a positive number. A random variable $X$ taking the values $0, 1, 2, \dots$ has a **Poisson distribution** with parameter $\lambda$ if
$$
P(X = k) = \frac{\lambda^k}{k!}\,e^{-\lambda} .
$$
This distribution describes the number of rare events occurring in a time interval or a region of space when the events are independent and their mean count is $\lambda$. Examples include the number of calls to a switchboard in one minute, the number of decays of a radioactive source in one second, and the number of defects in one meter of fabric. The sum of all the probabilities is $1$. Verifying this requires series, which are studied in college.

For example, if a switchboard receives an average of $2$ calls per minute, the probability of no calls in one minute is $P(X = 0) = e^{-2} \approx 0.135$, and the probability of exactly $3$ calls is
$$
P(X = 3) = \frac{2^3}{3!}\,e^{-2} = \frac{4}{3}\,e^{-2} \approx 0.180 .
$$

::grafico{poligoni="-0.35,0 -0.35,0.1353 0.35,0.1353 0.35,0;0.65,0 0.65,0.2707 1.35,0.2707 1.35,0;1.65,0 1.65,0.2707 2.35,0.2707 2.35,0;2.65,0 2.65,0.1804 3.35,0.1804 3.35,0;3.65,0 3.65,0.0902 4.35,0.0902 4.35,0;4.65,0 4.65,0.0361 5.35,0.0361 5.35,0;5.65,0 5.65,0.0120 6.35,0.0120 6.35,0;6.65,0 6.65,0.0034 7.35,0.0034 7.35,0" linee="-0.08,0.1 0.08,0.1;-0.08,0.2 0.08,0.2" etichette="-0.8,0.1,0.1;-0.8,0.2,0.2" xmin=-1 xmax=8 ymin=-0.03 ymax=0.32 nomi="k,p" legenda=0 titolo="Poisson distribution with $\lambda = 2$. The values $k = 1$ and $k = 2$ have the same probability $2e^{-2} \approx 0.27$, and for large $k$ the probabilities become very small"}

:::

:::teorema{#media-varianza-poisson titolo="Mean and variance of the Poisson distribution"}
If $X$ has a Poisson distribution with parameter $\lambda$, then
$$
M(X) = \lambda ,
\qquad
\operatorname{var}(X) = \lambda ,
\qquad
\sigma = \sqrt{\lambda} .
$$
The parameter $\lambda$ is therefore the mean number of events and can be found from the given data. The proof is covered in college. In the switchboard example, the number of calls in one minute has mean $2$ and standard deviation $\sqrt{2} \approx 1.41$, and the number of calls in $5$ minutes has a Poisson distribution with $\lambda = 10$.
:::

:::osservazione{#approssimazione-poisson titolo="Poisson approximation to the binomial distribution"}
If $n$ is large and $p$ is small, the probabilities in the binomial distribution with parameters $n$ and $p$ are close to those in the Poisson distribution with $\lambda = n p$. The Poisson formula is simpler to evaluate because it does not contain binomial coefficients with large $n$. For example, if $0.4\%$ of the parts produced by a machine are defective, then for a batch of $500$ parts we have $\lambda = 500 \cdot 0.004 = 2$. The probability that the batch contains no defective parts is $0.996^{500} \approx 0.1348$ using the binomial distribution and $e^{-2} \approx 0.1353$ using the Poisson distribution.
:::

## Continuous random variables

:::definizione{#densita-probabilita titolo="Continuous random variables and probability densities"}
A random variable is **continuous** if it can take any value in an interval, as with a waiting time or a length. Its distribution is described by a **probability density**, a function $f$ such that
$$
\begin{cases}
f(x) \geq 0 \quad \text{for every } x , \\[4pt]
\displaystyle\int_{-\infty}^{+\infty} f(x)\,dx = 1 .
\end{cases}
$$
The probability that $X$ lies between $a$ and $b$ is the area under the graph of $f$ on $[a, b]$:
$$
P(a \leq X \leq b) = \int_a^b f(x)\,dx .
$$
Integrals over unbounded intervals are improper integrals, as discussed in the chapter on definite integrals, areas, and volumes. For example, the function that equals $\dfrac{x}{2}$ for $0 \leq x \leq 2$ and $0$ elsewhere is a density because it is never negative and $\displaystyle\int_0^2 \frac{x}{2}\,dx = \left[ \frac{x^2}{4} \right]_0^2 = 1$. For this density,
$$
P(1 \leq X \leq 2) = \int_1^2 \frac{x}{2}\,dx = \left[ \frac{x^2}{4} \right]_1^2 = 1 - \frac{1}{4} = \frac{3}{4} .
$$

::grafico{f="x<0||x>2?0:x/2" area="x/2;0;1;2" segmenti="2,0,2,1" xmin=-1 xmax=3 ymin=-0.2 ymax=1.4 legenda="y = f(x)" titolo="The density equals $\dfrac{x}{2}$ on $[0, 2]$ and $0$ elsewhere. The shaded area between $x = 1$ and $x = 2$ is $P(1 \leq X \leq 2) = \dfrac{3}{4}$, and the total area is $1$"}

:::

:::attenzione
For a continuous random variable, the probability of any single value is zero because $P(X = a) = \displaystyle\int_a^a f(x)\,dx = 0$. Therefore $P(a \leq X \leq b) = P(a < X < b)$, and including or excluding the endpoints does not change the result. Moreover, the value $f(x)$ is *not* a probability and may exceed $1$. For example, the function that equals $2$ on $\left[ 0, \dfrac{1}{2} \right]$ and $0$ elsewhere is a density because the area of the rectangle is $2 \cdot \dfrac{1}{2} = 1$.
:::

:::definizione{#funzione-ripartizione titolo="Cumulative distribution function"}
The **cumulative distribution function** of a continuous random variable $X$ with density $f$ is
$$
F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t)\,dt .
$$
It is defined by an integral, so by the fundamental theorem of calculus, $F'(x) = f(x)$ wherever $f$ is continuous. The cumulative distribution function gives $P(a \leq X \leq b) = F(b) - F(a)$. For the density $\dfrac{x}{2}$ on $[0, 2]$, we obtain $F(x) = 0$ for $x < 0$, $F(x) = \dfrac{x^2}{4}$ for $0 \leq x \leq 2$, and $F(x) = 1$ for $x > 2$. For example, $P(X \leq 1) = F(1) = \dfrac{1}{4}$.
:::

:::definizione{#media-varianza-continua titolo="Mean and variance of a continuous random variable"}
For a continuous random variable with density $f$, the mean and variance are defined as in the discrete case, with an integral in place of the sum:
$$
M(X) = \int_{-\infty}^{+\infty} x\,f(x)\,dx ,
\qquad
\operatorname{var}(X) = \int_{-\infty}^{+\infty} (x - \mu)^2 f(x)\,dx = \int_{-\infty}^{+\infty} x^2 f(x)\,dx - \mu^2 .
$$
The second expression for the variance follows in the same way as the corresponding formula in the discrete case. For the density $\dfrac{x}{2}$ on $[0, 2]$, we have
$$
M(X) = \int_0^2 \frac{x^2}{2}\,dx = \frac{8}{6} = \frac{4}{3} ,
\qquad
\int_0^2 \frac{x^3}{2}\,dx = \frac{16}{8} = 2 ,
$$
so $\operatorname{var}(X) = 2 - \dfrac{16}{9} = \dfrac{2}{9}$ and $\sigma = \dfrac{\sqrt{2}}{3} \approx 0.47$.
:::

## Uniform and exponential distributions

:::definizione{#distribuzione-uniforme titolo="Uniform distribution"}
A random variable has a **uniform distribution** on the interval $[a, b]$ if its density equals $\dfrac{1}{b - a}$ on $[a, b]$ and $0$ elsewhere. The density is constant, so intervals of the same length contained in $[a, b]$ have the same probability, and for $a \leq c \leq d \leq b$ we have
$$
P(c \leq X \leq d) = \frac{d - c}{b - a} .
$$
The formulas for the mean and variance of a continuous random variable give
$$
M(X) = \frac{a + b}{2} ,
\qquad
\operatorname{var}(X) = \frac{(b - a)^2}{12} .
$$
For example, a subway train passes every $8$ minutes and a passenger arrives at the station at a random time. The waiting time $X$, in minutes, is uniformly distributed on $[0, 8]$. The probability of waiting at most $3$ minutes is $\dfrac{3}{8}$, the mean wait is $4$ minutes, and the standard deviation is $\sqrt{\dfrac{64}{12}} = \dfrac{4}{\sqrt{3}} \approx 2.31$ minutes.

::grafico{f="x<0||x>8?0:1/8" area="1/8;0;0;3" segmenti="0,0,0,0.125;8,0,8,0.125" xmin=-2 xmax=10 ymin=-0.03 ymax=0.2 nomi="x,y" legenda="y = f(x)" titolo="Uniform density on $[0, 8]$ with height $\dfrac{1}{8}$. The shaded area is $P(0 \leq X \leq 3) = \dfrac{3}{8}$"}

:::

:::definizione{#distribuzione-esponenziale titolo="Exponential distribution"}
Let $\lambda$ be a positive number. A random variable has an **exponential distribution** with parameter $\lambda$ if its density equals $\lambda\,e^{-\lambda x}$ for $x \geq 0$ and $0$ for $x < 0$. It describes waiting times and lifetimes, such as the time until a component fails or a nucleus decays. For $t \geq 0$, the improper integral gives
$$
P(X > t) = \int_t^{+\infty} \lambda\,e^{-\lambda x}\,dx = \lim_{c \to +\infty} \Big[ -e^{-\lambda x} \Big]_t^c = e^{-\lambda t} ,
$$
so the cumulative distribution function is $F(t) = 1 - e^{-\lambda t}$. The mean and variance are
$$
M(X) = \frac{1}{\lambda} ,
\qquad
\operatorname{var}(X) = \frac{1}{\lambda^2} ,
$$
and are calculated by integration by parts. For example, if the length of a telephone call in minutes has an exponential distribution with a mean of $1$ minute, then $\lambda = 1$. The probability that a call lasts more than $2$ minutes is $e^{-2} \approx 0.135$, and the probability that it lasts at most $1$ minute is $1 - e^{-1} \approx 0.632$.

::grafico{f="x<0?0:exp(-x)" area="exp(-x);0;0;1" xmin=-1 xmax=5 ymin=-0.2 ymax=1.3 legenda="y = f(x)" titolo="Exponential density with $\lambda = 1$. The shaded area is $P(X \leq 1) = 1 - e^{-1} \approx 0.632$"}

:::

:::osservazione{#assenza-memoria titolo="Memoryless property"}
For an exponentially distributed variable and $s, t \geq 0$, we have
$$
P(X > s + t \mid X > s) = \frac{P(X > s + t)}{P(X > s)} = \frac{e^{-\lambda (s + t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t) ,
$$
where we used the fact that the event $X > s + t$ is contained in the event $X > s$. In words, a component that has already operated for a time $s$ has the same probability of operating for a further time $t$ as a new component. In the phone call example, the probability that a call already lasting $3$ minutes continues past $5$ minutes is $e^{-2}$, the same as the probability that a new call lasts more than $2$ minutes.
:::

## Normal distribution

:::definizione{#distribuzione-normale titolo="Normal distribution"}
Let $\mu$ be a real number and $\sigma$ a positive number. A random variable has a **normal distribution**, also called a Gaussian distribution, with parameters $\mu$ and $\sigma$ if its density is
$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}}\,e^{-\frac{(x - \mu)^2}{2\sigma^2}} .
$$
Its mean is $\mu$ and its standard deviation is $\sigma$. Analyzing this function gives a bell-shaped graph with the following properties.

- The graph is symmetric about the line $x = \mu$.
- The maximum occurs at $x = \mu$ and equals $\dfrac{1}{\sigma \sqrt{2\pi}}$.
- The inflection points occur at $x = \mu - \sigma$ and $x = \mu + \sigma$.
- The $x$-axis is a horizontal asymptote as $x \to \pm\infty$.

As $\sigma$ increases, the bell becomes lower and wider because the area under the graph remains $1$. Many measured quantities, such as people’s heights or measurement errors, have an approximately normal distribution.

::grafico{f="exp(-x^2/2)/sqrt(2*pi);exp(-x^2/8)/(2*sqrt(2*pi))" punti="-1,0.242,pieno;1,0.242,pieno" xmin=-6 xmax=6 ymin=-0.05 ymax=0.5 legenda="\mu = 0,\ \sigma = 1;\mu = 0,\ \sigma = 2" titolo="Normal densities with $\mu = 0$. For $\sigma = 2$, the bell is lower and wider than for $\sigma = 1$. The marked points are the inflection points $x = \pm 1$ of the curve with $\sigma = 1$"}

:::

:::definizione{#normale-standard titolo="Standard normal distribution and tabulated values"}
The normal distribution with $\mu = 0$ and $\sigma = 1$ is called the **standard normal distribution**, and its variable is denoted by $Z$. Its cumulative distribution function is written as
$$
\Phi(z) = P(Z \leq z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}}\,e^{-\frac{t^2}{2}}\,dt .
$$
The function $e^{-\frac{t^2}{2}}$ has no antiderivative expressible in terms of elementary functions, so the values of $\Phi$ are read from a table. Some values are

| $z$ | $0$ | $0.5$ | $1$ | $1.5$ | $1.645$ | $1.96$ | $2$ | $2.5$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Phi(z)$ | $0.5000$ | $0.6915$ | $0.8413$ | $0.9332$ | $0.9500$ | $0.9750$ | $0.9772$ | $0.9938$ | $0.9987$ |

The table lists only nonnegative values of $z$. The density graph is symmetric about the $y$-axis, so the area to the left of $-z$ equals the area to the right of $z$. Therefore
$$
\Phi(-z) = 1 - \Phi(z) ,
\qquad
P(a \leq Z \leq b) = \Phi(b) - \Phi(a) .
$$
For example, $P(Z \leq -1) = 1 - 0.8413 = 0.1587$ and $P(-1 \leq Z \leq 2) = 0.9772 - 0.1587 = 0.8185$.
:::

:::teorema{#standardizzazione titolo="Standardization"}
If $X$ has a normal distribution with parameters $\mu$ and $\sigma$, then the variable
$$
Z = \frac{X - \mu}{\sigma}
$$
has a standard normal distribution. Consequently, for every $x$, we have
$$
P(X \leq x) = \Phi\left( \frac{x - \mu}{\sigma} \right) .
$$
The number $z = \dfrac{x - \mu}{\sigma}$ indicates how many standard deviations the value $x$ lies above or below the mean. Standardization lets us use a single table for all normal distributions. The proof is covered in college. For example, the heights of the students at a school are normally distributed with $\mu = 170\,\mathrm{cm}$ and $\sigma = 8\,\mathrm{cm}$. Then
$$
P(X \leq 178) = \Phi\left( \frac{178 - 170}{8} \right) = \Phi(1) = 0.8413 ,
$$
$$
P(162 \leq X \leq 186) = \Phi(2) - \Phi(-1) = 0.9772 - 0.1587 = 0.8185 .
$$

::grafico{f="exp(-x^2/2)/sqrt(2*pi)" area="exp(-x^2/2)/sqrt(2*pi);0;-1;2" xmin=-4 xmax=4 ymin=-0.05 ymax=0.5 nomi="z,y" legenda="y = \frac{1}{\sqrt{2\pi}}\,e^{-\frac{z^2}{2}}" titolo="Under the standardization $z = \dfrac{x - 170}{8}$, the heights $162$ and $186$ become $z = -1$ and $z = 2$. The shaded area under the standard normal density is $\Phi(2) - \Phi(-1) = 0.8185$"}

:::

:::esempio{titolo="Finding a value from a probability"}
The table also solves the inverse problem. In the height example, we seek the height $h$ exceeded by only $5\%$ of the students, that is, the height satisfying $P(X \leq h) = 0.95$. From the table, $\Phi(1.645) = 0.9500$, so
$$
\frac{h - 170}{8} = 1.645 ,
\qquad
h = 170 + 1.645 \cdot 8 \approx 183.2\,\mathrm{cm} .
$$
:::

:::osservazione{#regola-tre-sigma titolo="Three-sigma rule"}
Standardization and the table give the probabilities that a normally distributed variable lies within one, two, or three standard deviations of the mean:
$$
\begin{aligned}
P(\mu - \sigma \leq X \leq \mu + \sigma) &= 2\,\Phi(1) - 1 \approx 0.683 , \\[4pt]
P(\mu - 2\sigma \leq X \leq \mu + 2\sigma) &= 2\,\Phi(2) - 1 \approx 0.954 , \\[4pt]
P(\mu - 3\sigma \leq X \leq \mu + 3\sigma) &= 2\,\Phi(3) - 1 \approx 0.997 .
\end{aligned}
$$
Indeed, by symmetry, $P(-z \leq Z \leq z) = \Phi(z) - \big( 1 - \Phi(z) \big) = 2\,\Phi(z) - 1$. In the height example, about $68\%$ of the students have heights between $162$ and $178\,\mathrm{cm}$, and almost all have heights between $146$ and $194\,\mathrm{cm}$.
:::
