---
titolo: "Counting, probability and statistics"
sommario: "Counting techniques, conditional probability and Bayes’ theorem, frequencies and descriptive statistics."
---

## Counting by cases and in stages

:::definizione{#conteggio titolo="The addition and multiplication rules"}
A counting problem begins with a description of the outcome. For instance, a route can be identified by its two legs in order. One way to classify routes is to group them by the mode of transport on the first leg.

The **addition rule** applies when the cases are disjoint and exhaust all possibilities. The total is the sum of the number of objects in each case. If two cases share objects, the objects counted twice can be subtracted.

The **multiplication rule** applies to choices made in stages. If the first stage has $n_1$ possibilities and the second has $n_2$ possibilities for each first-stage outcome, the total is $n_1n_2$. The number of possibilities may differ from stage to stage. At a given stage, the number of choices must be the same for every sequence of choices already made.
:::

:::esempio{titolo="Two branches with different numbers of choices"}
Each morning, a shuttle reaches the town center from three stops. From either of the first two stops, it can be paired with one of four regional trains. From the third stop, there are two direct trains to choose from. Each outcome consists of a stop and a train.

The first two stops give $2\cdot4=8$ pairs. The third gives $1\cdot2=2$. Since a given pair belongs to exactly one of the two cases, the total is $8+2=10$. The product $3\cdot4$ would include two unavailable pairings.
:::

:::osservazione{titolo="Counting by negating a condition"}
If the total number of outcomes is known, it is sometimes enough to count the outcomes that fail the condition. For a five-digit code, for example, *at least one zero* occurs in $10^5-9^5$ cases. The total allows every digit in every position. Each excluded code has nine choices in every position, because zero is ruled out in all of them.
:::

## Permutations and ordered selections

:::definizione{#permutazioni titolo="Ordered choices"}
In an **ordered selection** of $k$ objects, order is part of the outcome. If there are $n$ distinct objects and each can appear at most once, the first $k$ positions have $n,n-1,\ldots,n-k+1$ possible choices, respectively. For $0\le k\le n$ this gives
$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$
Here $n!$ is the product of the first $n$ positive integers and $0!=1$. For $k=0$ there is one outcome, the empty sequence. With $k=n$ these are the **permutations** of all $n$ objects, and there are $n!$ of them.

If repetition is allowed, each of the $k$ positions again has $n$ possible choices, giving $n^k$ sequences. Repetition affects the available choices. Order determines whether two sequences count as distinct objects.
:::

:::esempio{titolo="A restriction on the first digit"}
Consider all three-digit numbers made from distinct digits in $0,2,4,7,9$. The first digit has four possibilities, because a leading zero would yield a two-digit number. Once the first digit is fixed, four digits remain, including zero. With the second digit fixed too, there are three possibilities for the last digit. The total is $4\cdot4\cdot3=48$. If the same symbols form a code that may begin with zero, the outcomes change and the total becomes $5\cdot4\cdot3=60$.
:::

:::definizione{titolo="Permutations with indistinguishable items"}
If $n$ positions are filled by $r_1$ copies of one symbol, $r_2$ copies of a second symbol, and so on, with $r_1+r_2+\cdots=n$, the number of distinct sequences is
$$
\frac{n!}{r_1!\,r_2!\cdots}.
$$
Temporarily labeling all copies gives $n!$ permutations. Once the labels are removed, each sequence has been counted exactly $r_1!\,r_2!\cdots$ times, because labels on identical symbols can be exchanged in any order. The letters of MAMMA thus give $\dfrac{5!}{3!\,2!}=10$ distinct sequences.
:::

## Combinations and groups

:::definizione{#combinazioni titolo="Unordered choices"}
A **combination** is a subset of $k$ elements chosen from $n$ distinct elements. Any group of $k$ elements can be ordered in $k!$ ways. Since all of these orders describe the same group, the number of combinations is
$$
\binom nk=\frac{D_{n,k}}{k!}
         =\frac{n!}{k!(n-k)!},
\qquad 0\le k\le n.
$$
The expression $\binom nk$ is read “$n$ choose $k$.” The identity $\binom nk=\binom n{n-k}$ follows because specifying who joins the group determines who is left out.
:::

:::esempio{titolo="Members and roles"}
From seven candidates, $\binom73=35$ committees of three can be formed. If the three members receive three different roles, each committee gives $3!=6$ assignments. This produces $35\cdot6=210$ outcomes, the same value as $D_{7,3}$. Assigning a role only to the chair would instead give $35\cdot3=105$ outcomes.
:::

:::esempio{titolo="Exact counts and minimum counts"}
A lab has five tubes of type $A$ and four of type $B$, all distinguishable. To select four tubes with *exactly* two of type $A$, choose one group of each type. This gives $\binom52\binom42=10\cdot6=60$ selections.

To choose *at least* two tubes of type $A$, the possible cases have two, three, or four tubes of that type. These cases are disjoint. The total becomes
$$
\binom52\binom42+\binom53\binom41+\binom54\binom40
=60+40+5=105.
$$
:::

:::osservazione{titolo="When the divisor is constant"}
Dividing by $k!$ is justified because every group of $k$ distinct elements has the same number of orders. With repeated symbols, this property must be checked. For example, the letters $A$ and $B$ produce the sequences $AA,AB,BA,BB$. If order is ignored, $AB$ and $BA$ become one outcome. The three unordered outcomes are represented by either one or two sequences.
:::

## Events, unions, and complements

:::definizione{#eventi titolo="Sample spaces and events"}
The **sample space** $\Omega$ is the set of outcomes of an experiment. An **event** $A$ is a subset of $\Omega$. The event occurs when the outcome belongs to $A$. If $\Omega$ is finite and all its outcomes have the same probability,
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
If outcomes have different probabilities, the probabilities of the individual favorable outcomes are added. For example, when two fair dice are rolled, the ordered pairs are equally likely. The sums from $2$ to $12$ have different probabilities because they arise from different numbers of pairs.
:::

:::definizione{titolo="Operations on events"}
The **intersection** $A\cap B$ occurs when both events occur. The **union** $A\cup B$ occurs when at least one occurs, including when both occur. The complement $A^c$ contains outcomes for which $A$ fails to occur. The following formulas hold:
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B),
\qquad P(A^c)=1-P(A).
$$
The intersection is subtracted because it was included once with $A$ and once with $B$. For disjoint events the intersection is empty, so the formula reduces to the sum of the probabilities.
:::

:::esempio{titolo="Students in two activities"}
Of $30$ students in a class, $12$ sing in a choir, $14$ work on a newspaper, and $5$ do both. Let $A$ be the event “sings in the choir” and $B$ the event “works on the newspaper.” Students who take part in exactly one activity occupy two disjoint regions, with $12-5=7$ and $14-5=9$ students.

::venn{tipo="due" universo=1 ambiente="Ω" zone="a,ab,b" elementi="a:7;ab:5;b:9;u:9" titolo="Number of students in the four regions. The union includes 7, 5, and 9 students."}

For a student chosen uniformly at random, the probability of at least one activity is $\dfrac{12+14-5}{30}=\dfrac{21}{30}$. The probability of exactly one is $\dfrac{7+9}{30}=\dfrac{16}{30}$, while nine students take part in neither activity.
:::

## Conditioning and independence

:::definizione{#condizionata titolo="Conditional probability"}
If $B$ is known to have occurred and $P(B)>0$, the **probability of $A$ given $B$** is
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
The denominator refers to the population consistent with the information $B$. The numerator counts the part of that population for which $A$ also occurs. Multiplying by $P(B)$ gives the multiplication rule for events:
$$
P(A\cap B)=P(B)P(A\mid B).
$$
The rule still applies if the outcome of the first choice changes the probabilities of the second.
:::

:::esempio{titolo="Two draws without replacement"}
A bag contains four blue tokens and three green ones. For blue followed by green, the first probability is $\dfrac47$. After a blue token is drawn, six tokens remain, including three green ones. Therefore
$$
P(\text{blue, then green})=\frac47\cdot\frac36=\frac27.
$$
If only one token of each color is required, add the case of green followed by blue, with probability $\dfrac37\cdot\dfrac46=\dfrac27$. The total is $\dfrac47$.
:::

:::definizione{titolo="Independence"}
Two events $A$ and $B$ are **independent** if $P(A\cap B)=P(A)P(B)$. When $P(B)>0$, this is equivalent to $P(A\mid B)=P(A)$. Knowing that $B$ occurred therefore leaves the probability of $A$ unchanged. For example, after rolling a $6$ on the first of two independent rolls of a fair die, the probability of a $6$ on the second remains $\dfrac16$.
:::

:::attenzione
*Disjoint* describes events with an empty intersection. *Independent* describes events whose intersection probability is the product of their probabilities. On a fair coin toss, if $A$ is heads and $B$ is tails, the intersection has probability $0$ whereas $P(A)P(B)=\dfrac14$. These two disjoint events are dependent.
:::

## Total probability and Bayes' rule

:::definizione{#bayes titolo="Partitions and total probability"}
The events $B_1,\ldots,B_m$ form a **partition** when they are disjoint and their union is $\Omega$. If each $B_i$ has positive probability, the probability of each part of $A$ can be expressed using $P(A\mid B_i)$. This gives
$$
P(A)=\sum_{i=1}^{m} P(B_i)P(A\mid B_i).
$$
Each term is the probability of a complete branch. Since the branches are disjoint, the probabilities of those ending in $A$ are added. A group's weight is its probability in the population. A simple average of the group probabilities is therefore suitable only when the weights are equal, except for numerical coincidences.
:::

:::esempio{titolo="Two inspection lines"}
Line $B_1$ produces $70\%$ of the parts and rejects $2\%$ of its own output. Line $B_2$ produces the remaining $30\%$ and rejects $5\%$ of its output. Let $A$ be the event that a part is rejected. Expected counts per $1000$ parts make the weights explicit.

| Line | Parts | Rejected |
|---|---:|---:|
| $B_1$ | $700$ | $14$ |
| $B_2$ | $300$ | $15$ |
| Total | $1000$ | $29$ |

Since a rejected part comes from one of the two lines, $P(A)=\dfrac{29}{1000}$. The calculation is equivalent to the sum $0.70\cdot0.02+0.30\cdot0.05$.
:::

:::teorema{titolo="Bayes' rule"}
For the same partition, if $P(A)>0$, **Bayes' rule** is
$$
P(B_j\mid A)=
\frac{P(B_j)P(A\mid B_j)}
     {\displaystyle\sum_{i=1}^{m}P(B_i)P(A\mid B_i)}.
$$
Apply the definition of conditional probability. The numerator is $P(B_j\cap A)$, which equals the contribution from branch $B_j$. The denominator is the total probability of $A$. In the inspection example, $15$ of the $29$ rejected parts come from the second line. Hence $P(B_2\mid A)=\dfrac{15}{29}$, whereas $P(A\mid B_2)=\dfrac{5}{100}$.
:::

## Frequencies, tables, and charts

:::definizione{#frequenze titolo="Absolute, relative, and conditional frequencies"}
An **absolute frequency** is the number of observations that satisfy a condition. A relative frequency divides this count by the number of observations in the relevant group. A relative frequency can be written as a fraction, decimal, or percentage.

When two variables are recorded, the **joint frequency** counts observations with both values in a cell. A **marginal frequency** counts observations that have a given value of one variable, regardless of the value of the other. It is read from a row or column total. A **conditional relative frequency** is calculated within the row or column specified by the condition. The total for that group must be positive.
:::

:::esempio{titolo="Which denominator applies?"}
A course records how students registered and whether they attended the first session.

| Registration | Attended | Did not attend | Total |
|---|---:|---:|---:|
| Individual | $18$ | $6$ | $24$ |
| Group | $12$ | $4$ | $16$ |
| Total | $30$ | $10$ | $40$ |

The joint absolute frequency of individual registration and attendance is $18$. The joint relative frequency is $\dfrac{18}{40}$. The marginal relative frequency of attendance is $\dfrac{30}{40}$. Among individual registrants the relative frequency of attendance is $\dfrac{18}{24}$. Among those who attended, the relative frequency of individual registration is $\dfrac{18}{30}$. A single cell can therefore contribute to several answers because the reference group changes.
:::

:::osservazione{titolo="Reading axes and units"}
In a bar chart with a linear scale, the value of each category is read from the height of its bar on the stated scale. The vertical axis may show counts or percentages. Equal percentages in groups of different sizes correspond to different counts, so the group total is needed to recover the count. In a pie chart, a sector's angle is its relative frequency multiplied by $360^\circ$. A $54^\circ$ sector represents $\dfrac{54}{360}=\dfrac{3}{20}=15\%$ of the total.
:::

## Measures of center and spread

:::definizione{#sintesi-statistica titolo="Mean, median, and mode"}
For $N>0$ numerical observations $x_1,\ldots,x_N$, the **arithmetic mean** is $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. If each distinct value $v_j$ occurs $f_j$ times, the same mean can be computed as
$$
\bar x=\frac{\sum_j f_jv_j}{\sum_j f_j}.
$$
To find the **median**, sort the observations. For odd $N$, use the observation in position $\dfrac{N+1}{2}$. For even $N$, average the values in positions $\dfrac N2$ and $\dfrac N2+1$. In a frequency table, the positions are found from cumulative frequencies. A **mode** is a value of highest frequency. Several values may share the highest frequency.
:::

:::esempio{titolo="The middle position in a frequency table"}
The times in minutes are $2,2,4,4,4,10$. From the values and their frequencies,
$$
\bar x=\frac{2\cdot2+4\cdot3+10\cdot1}{6}=\frac{26}{6}=\frac{13}{3}.
$$
The third and fourth observations are both $4$, so the median is $4$. The mode is also $4$, since it occurs three times. If $10$ is changed to $16$, the mean increases by $\dfrac66=1$. The median remains $4$ because the order of the middle observations is unchanged.
:::

:::definizione{titolo="Range, variance, and standard deviation"}
The **range** is the difference between the maximum and minimum. The **descriptive variance** $\sigma^2$ is the mean of the squared deviations from the mean. The **standard deviation** $\sigma$ is its square root. For data grouped by individual values,
$$
\sigma^2=\frac{\sum_j f_j(v_j-\bar x)^2}{\sum_j f_j}
        =\frac{\sum_j f_jv_j^2}{\sum_j f_j}-\bar x^2,
\qquad
\sigma=\sqrt{\sigma^2}.
$$
The second formula follows by expanding the square and using $\sum_j f_jv_j=N\bar x$. If the data are measured in minutes, the variance is in square minutes and the standard deviation is in minutes. If the corrected sample variance is explicitly requested, the denominator of the sum of squared deviations is $N-1$ for $N\ge2$.
:::

:::esempio{titolo="Same mean, different spread"}
The measurements $2,4,6$ and $3,4,5$ both have mean $4$. Their ranges are $4$ and $2$, respectively. Their descriptive variances are $\dfrac{4+0+4}{3}=\dfrac83$ and $\dfrac{1+0+1}{3}=\dfrac23$. In the first data set the values lie farther from the center, so the standard deviation is greater.
:::

:::osservazione{titolo="Aggregated data and changes of scale"}
To combine groups of sizes $n_1,n_2$ and means $\bar x_1,\bar x_2$, the sums of their values are $n_1\bar x_1$ and $n_2\bar x_2$. The combined mean is therefore $\dfrac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}$. The weights are the group sizes.

Adding the same constant to every measurement shifts the mean by the same amount. The deviations from the mean stay the same, so the variance and standard deviation are unchanged. Multiplying every observation by $a$ multiplies every deviation by $a$. Thus the variance is multiplied by $a^2$ and the standard deviation by $|a|$.
:::
