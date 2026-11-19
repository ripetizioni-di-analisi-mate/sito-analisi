---
titolo: "Conditional probability, independence, and Bayes' theorem"
sommario: "Calculating probabilities given new information, recognizing independence, and updating probabilities with Bayes' theorem."
---

## The reference group

:::definizione{#condizionata titolo="Conditional probability"}
Let $A$ and $B$ be events in a sample space $\Omega$, with $P(B)>0$. Once $B$ is known to have occurred, only outcomes in $B$ remain possible. Among these, the outcomes for which $A$ also occurs form the intersection $A\cap B$. The **conditional probability of $A$ given $B$** is

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

Dividing by the denominator rescales the total weight of the outcomes in $B$ to one. The numerator selects the outcomes within that group that also satisfy $A$. Since $A\cap B\subseteq B$, the ratio lies between zero and one.
:::

:::esempio{titolo="Two questions about the same table"}
Of $200$ students, $50$ commute from outside the area. Among these commuters, $20$ travel by train. Of the $150$ students who live locally, $10$ travel by train. Let $B$ be the event that a student is a commuter and $A$ the event that a student travels by train. A student is chosen at random.

| Group | By train | Other transportation | Total |
| --- | ---: | ---: | ---: |
| Commuters | 20 | 30 | 50 |
| Local residents | 10 | 140 | 150 |
| Total | 30 | 170 | 200 |

To find the probability of traveling by train given that a student is a commuter, divide by the first row total. To find the probability of being a commuter given that a student travels by train, divide by the first column total. The intersection is the same in both calculations.

$$
P(A\mid B)=\frac{20}{50}=\frac{2}{5},
\qquad
P(B\mid A)=\frac{20}{30}=\frac{2}{3}.
$$

::venn{nomi="A,B" ambiente="Ω" zone="ab" elementi="a:10;ab:20;b:30;u:140" titolo="A denotes students who travel by train, and B denotes commuters. Group B includes 20 students in the intersection and 30 outside A."}
:::

:::osservazione
If $\Omega$ has finitely many equally likely outcomes, the definition reduces to the ratio $\dfrac{|A\cap B|}{|B|}$. Here $|\cdot|$ denotes the number of elements in the set. The common factor $\dfrac{1}{|\Omega|}$ cancels from numerator and denominator. If outcomes have different weights, the sums of the weights in the corresponding regions replace the counts.

For example, a die gives probability $\dfrac{1}{4}$ to face $6$ and probability $\dfrac{3}{20}$ to each of the other faces. Given an even result, the conditioning event contains faces $2$, $4$, and $6$, with total weight $\dfrac{11}{20}$. The conditional probability of face $6$ is therefore $\dfrac{5}{11}$.
:::

:::attenzione
The definition requires $P(B)>0$. If an ordinary die is rolled and $B$ is the event of rolling $7$, then $P(B)=0$ and $P(A\cap B)=0$ for every $A$. The ratio is therefore undefined. The same difficulty arises in a table of counts when the group on which we wish to condition is empty.
:::

## Complements and bounds on probabilities

:::teorema{#complementi titolo="The complement under a fixed condition"}
Let $A$ and $B$ be events with $P(B)>0$. The event $A^c$ is the complement of $A$ in $\Omega$. The events $A\cap B$ and $A^c\cap B$ are disjoint, and their union is $B$. Adding their probabilities and dividing by $P(B)$ gives

$$
P(A^c\mid B)=1-P(A\mid B).
$$

The formula gives the probability of the opposite outcome while retaining the same reference group. If $70\%$ of the students in an evening session pass a test, $30\%$ of the students *in that session* do not pass.
:::

:::esempio{titolo="Changing the reference group"}
Of $100$ receipts, $40$ are for online orders. Corrections were made to $12$ online order receipts and $6$ receipts for other orders. Let $A$ be the event that a receipt was corrected and $B$ the event that the order was placed online. Changing the condition from $B$ to $B^c$ changes the denominator from $40$ to $60$. Thus

$$
P(A\mid B)=\frac{12}{40}=\frac{3}{10},
\qquad
P(A\mid B^c)=\frac{6}{60}=\frac{1}{10}.
$$

The complement of the first probability is $P(A^c\mid B)=\dfrac{7}{10}$. The value $\dfrac{1}{10}$ instead concerns receipts from a different group.
:::

:::osservazione
Specifying $P(A)$, $P(B)$, and $P(A\cap B)$ determines the weights of the four regions formed by $A$ and $B$. Setting $x=P(A\cap B)$ gives the weights $x$, $P(A)-x$, $P(B)-x$, and $1-P(A)-P(B)+x$. Since all must be nonnegative, the intersection satisfies

$$
\max\{0,P(A)+P(B)-1\}\le x\le\min\{P(A),P(B)\}.
$$

For example, if $P(A)=0.7$ and $P(B)=0.6$, the intersection probability can range from $0.3$ to $0.6$. The lower bound follows because without an overlap of at least $0.3$, the probability of the union would exceed one.
:::

:::esempio{titolo="Reconstructing a table from three probabilities"}
Let $A$ be the event that a request is urgent and $B$ the event that it is submitted online. Suppose $P(A)=0.4$, $P(B)=0.6$, and $P(A\cap B)=0.3$. Urgent requests submitted in person account for $0.4-0.3=0.1$ of all requests. Online requests that are not urgent account for $0.6-0.3=0.3$. This leaves a probability of $0.3$ for nonurgent requests submitted in person. The complete table is therefore

| Channel | Urgent | Nonurgent | Total |
| --- | ---: | ---: | ---: |
| Online | $0.3$ | $0.3$ | $0.6$ |
| In person | $0.1$ | $0.3$ | $0.4$ |
| Total | $0.4$ | $0.6$ | $1$ |

Given that a request was submitted in person, the probability that it is urgent is $\dfrac{0.1}{0.4}=\dfrac14$. The value $0.1$ is a joint probability relative to all requests. Reconstructing the table shows which row or column supplies each denominator.

::grafico{assi=0 xmin=-0.6 xmax=10.6 ymin=-1.4 ymax=10.6 poligoni="0,0 6,0 6,5 0,5;6,0 10,0 10,2.5 6,2.5" linee="0,0 10,0 10,10 0,10 0,0;6,0 6,10;0,5 6,5;6,2.5 10,2.5" etichette="1.3,2.3,urgent 0.3;1,7.3,nonurgent 0.3;6.6,1,urgent 0.1;6.4,6,nonurgent 0.3;2.2,-0.9,Online;7,-0.9,In person" titolo="The widths of the two columns are $P(B)=0.6$ and $P(B^c)=0.4$. The shaded portions have heights $P(A\mid B)=\dfrac{1}{2}$ and $P(A\mid B^c)=\dfrac{1}{4}$, so the area of each rectangle equals the joint probability shown inside it."}
:::

## The multiplication rule and tree diagrams

::::teorema{#prodotto titolo="Multiplication rule"}
If $P(A)>0$, the probability that both $A$ and $B$ occur is

$$
P(A\cap B)=P(A)P(B\mid A).
$$

For three events, if $P(A)>0$ and $P(A\cap B)>0$, then

$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$

When an experiment takes place in several stages, each factor after the first is conditional on the entire sequence of events preceding it.

:::dimostrazione
Apply the definition of conditional probability to the last event in the sequence. Since $P(A\cap B)>0$, multiplying $P(C\mid A\cap B)$ by $P(A\cap B)$ gives $P(A\cap B\cap C)$. Since $P(A)>0$, replace $P(A\cap B)$ with $P(A)P(B\mid A)$.
:::
::::

:::esempio{titolo="A tree for two draws"}
An urn contains three red balls and two blue balls. Draw twice without replacing the first ball. Let $R_i$ and $B_i$ denote the events “red on draw $i$” and “blue on draw $i$.” At the first level of the tree, the branches have probabilities $\dfrac{3}{5}$ and $\dfrac{2}{5}$. At the second level, the composition of the urn depends on the branch already taken.

::grafico{assi=0 xmin=-0.8 xmax=12 ymin=-0.6 ymax=6.5 linee="0,3 4,4.7;0,3 4,1.3;4,4.7 8,5.9;4,4.7 8,3.8;4,1.3 8,2.1;4,1.3 8,0.1" punti="0,3,pieno;4,4.7,pieno;4,1.3,pieno;8,5.9,pieno;8,3.8,pieno;8,2.1,pieno;8,0.1,pieno" etichette="1.45,4.08,⅗;1.45,1.62,⅖;5.55,5.68,½;5.55,3.65,½;5.55,2.33,¾;5.55,0.05,¼;8.2,5.9,red red;8.2,3.8,red blue;8.2,2.1,blue red;8.2,0.1,blue blue" titolo="Branch probabilities for two draws without replacement. The four leaves identify the possible ordered color sequences."}

The probability at each leaf is obtained by the multiplication rule. The leaves “red, blue” and “blue, red” are disjoint, so the probability of drawing two different colors is the sum of the two path probabilities.

$$
\begin{aligned}
P(R_1\cap B_2)&=\frac{3}{5}\cdot\frac{2}{4}=\frac{3}{10},\\[6pt]
P(B_1\cap R_2)&=\frac{2}{5}\cdot\frac{3}{4}=\frac{3}{10},\\[6pt]
P(\text{two different colors})&=\frac{3}{5}.
\end{aligned}
$$

At the node following a first red draw, two red and two blue balls remain, so the two outgoing branches are equally likely. At the node following a first blue draw, three red and one blue remain, so the branch leading to red has higher probability.
:::

:::osservazione
In a complete tree, the branches leaving a node reached with positive probability partition the remaining possible outcomes. Thus the conditional probabilities on those branches sum to one. Leaves represent complete paths. For an event specified by an intermediate outcome, add the probabilities of the leaves whose paths pass through that outcome.

For example, in the urn problem the probability of blue on the first draw is recovered by adding $\dfrac{2}{5}\cdot\dfrac{3}{4}$ and $\dfrac{2}{5}\cdot\dfrac{1}{4}$. The sum is $\dfrac{2}{5}$, the weight of the node before the second draw.
:::

:::esempio{titolo="Marginal probability for the second draw"}
Consider again the urn with three red balls and two blue balls. Before the first color is observed, the paths “red, red” and “blue, red” both lead to a red second draw. Their probabilities sum to

$$
P(R_2)=\frac35\cdot\frac24+\frac25\cdot\frac34=\frac35.
$$

The result equals the initial proportion of red balls, since each individual ball is equally likely to be drawn second. Given the first color, however, the proportion varies between $\dfrac24$ and $\dfrac34$. There are therefore two distinct questions about the second draw. If the first outcome is unknown, add the probabilities of both paths. If it is known, read the probability on the branch leaving that node.
:::

## Independence of two events

:::definizione{#indipendenza titolo="Independent events"}
The events $A$ and $B$ are **independent** if

$$
P(A\cap B)=P(A)P(B).
$$

If $P(B)>0$, the definition is equivalent to $P(A\mid B)=P(A)$ because the identity can be divided by $P(B)$. The probability of $A$ is therefore unchanged on learning that $B$ occurred. The product definition also applies when one of the probabilities is zero.
:::

:::esempio{titolo="Checking independence on a die"}
Roll a fair die. Let $A=\{2,4,6\}$ be the event of rolling an even number and $B=\{3,6\}$ the event of rolling a multiple of three. The only face common to both is $6$, so

$$
P(A\cap B)=\frac{1}{6}
=\frac{1}{2}\cdot\frac{1}{3}
=P(A)P(B).
$$

The events are independent even though they concern the same roll. Learning that a multiple of three was rolled leaves two equally likely possibilities, one even and one odd. The probability of an even result is therefore still $\dfrac{1}{2}$.
:::

::::teorema{#indipendenza-complementari titolo="Independence and complements"}
If $A$ and $B$ are independent, the pairs $(A^c,B)$, $(A,B^c)$, and $(A^c,B^c)$ are also independent. This gives, for example, the probability that one device works and another fails when their operating events are independent.

::grafico{assi=0 xmin=-1.4 xmax=6.4 ymin=-1 ymax=6.4 poligoni="0,0 3,0 3,2 0,2" linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;0,2 6,2" etichette="0.6,0.9,A∩B  ⅙;3.5,0.9,Aᶜ∩B  ⅙;0.6,3.9,A∩Bᶜ  ⅓;3.5,3.9,Aᶜ∩Bᶜ  ⅓;1.3,-0.6,A  ½;4.3,-0.6,Aᶜ  ½;-1.2,0.9,B  ⅓;-1.2,3.9,Bᶜ  ⅔" titolo="Rectangle of area $1$ for a die roll, with $A=\{2,4,6\}$ and $B=\{3,6\}$. The widths are $P(A)$ and $P(A^c)$, and the heights are $P(B)$ and $P(B^c)$. Since $A$ and $B$ are independent, multiplying each rectangle’s width by its height gives the joint probability of the corresponding events."}

:::dimostrazione
Subtract the weight of $A\cap B$ from the weight of $B$. Since $A$ and $B$ are independent,

$$
\begin{aligned}
P(A^c\cap B)&=P(B)-P(A\cap B)\\[6pt]
&=P(B)\bigl(1-P(A)\bigr)=P(B)P(A^c).
\end{aligned}
$$

Exchanging $A$ and $B$ gives the result for $(A,B^c)$. Applying the same argument to one of these pairs also replaces the other event by its complement.
:::
::::

:::attenzione
Two disjoint events of positive probability are dependent. In a single die roll, the events of rolling $1$ and rolling $2$ have empty intersection, so their intersection has zero probability. The product of their probabilities, however, is $\dfrac{1}{36}$. If one event has zero probability, both sides of the independence identity are zero.
:::

## Partitions and total probability

::::teorema{#totale titolo="Law of total probability"}
Let $B_1,\ldots,B_r$ be pairwise disjoint events with union $\Omega$, with $P(B_i)>0$ for each index $i$. They form a **partition** of the sample space. For every event $A$,

$$
P(A)=\sum_{i=1}^{r} P(A\mid B_i)P(B_i).
$$

The term $P(A\mid B_i)$ gives the expected relative frequency of $A$ within group $B_i$. The weight $P(B_i)$ is the group's share of the overall model. The formula is therefore a weighted mean of conditional probabilities.

:::dimostrazione
Each outcome in $A$ belongs to exactly one group $B_i$. Thus the events $A\cap B_i$ are disjoint and their union is $A$. By additivity, $P(A)$ is the sum of the weights $P(A\cap B_i)$. Apply the multiplication rule to each intersection, since all the $P(B_i)$ are positive.
:::
::::

:::esempio{titolo="Three lines with different production volumes"}
Production lines $B_1$, $B_2$, and $B_3$ supply $50\%$, $30\%$, and $20\%$ of the items, respectively. Their rejection rates are $2\%$, $5\%$, and $10\%$, respectively. Select an item at random, and let $S$ denote the event that it is rejected. Each item comes from exactly one line, so the total probability is

$$
\begin{aligned}
P(S)&=0.50\cdot0.02+0.30\cdot0.05+0.20\cdot0.10\\[6pt]
&=0.010+0.015+0.020=0.045.
\end{aligned}
$$

::grafico{xmin=-0.28 xmax=3.7 ymin=0 ymax=24 nomi="i,n" poligoni="0.72,0 1.28,0 1.28,10 0.72,10;1.72,0 2.28,0 2.28,15 1.72,15;2.72,0 3.28,0 3.28,20 2.72,20" etichette="0.94,11,10;1.94,16,15;2.94,21,20" titolo="Expected numbers of rejected items per 1,000 items produced. The i-axis identifies the line, and n is the number rejected. The bar heights add to 45."}

The first line produces more items than the third, so their rejection rates receive different weights in the total. The value $0.045$ lies between $0.02$ and $0.10$, as any weighted mean with positive weights must.
:::

:::osservazione
If a category has zero probability, its intersection with $A$ also has zero probability. One can therefore add the intersection probabilities directly or apply the conditional formula only to categories with positive weight.

A partition into two groups $B$ and $B^c$ can also be used to find a missing rate. Suppose $0<P(B)<1$. Given $P(A)$, $P(B)$, and $P(A\mid B)$, rearranging the formula gives

$$
P(A\mid B^c)=\frac{P(A)-P(A\mid B)P(B)}{1-P(B)}.
$$

The numerator is the proportion of the entire population belonging to $A\cap B^c$. Dividing by $P(B^c)$ expresses that proportion relative to the group outside $B$.
:::

## Reversing the direction of conditioning

::::teorema{#bayes titolo="Bayes' theorem"}
Let $B_1,\ldots,B_r$ form a partition with positive probabilities, and suppose $P(A)>0$. After observing $A$, the probability of group $B_j$ is

$$
P(B_j\mid A)
=\frac{P(A\mid B_j)P(B_j)}
       {\displaystyle\sum_{i=1}^{r}P(A\mid B_i)P(B_i)}.
$$

The quantity $P(B_j)$ is the group's **prior** probability. The quantity $P(B_j\mid A)$ is its **posterior** probability, calculated after learning that $A$ occurred.

:::dimostrazione
By definition, $P(B_j\mid A)=\dfrac{P(B_j\cap A)}{P(A)}$. The multiplication rule in group $B_j$ gives the numerator, and the law of total probability over all groups gives the denominator.
:::
::::

:::esempio{titolo="Origin of a rejected item"}
For the three lines in the previous example, the contribution of the third line to rejections is $P(S\cap B_3)=0.020$ and the overall rejection probability is $0.045$. Among rejected items, the proportion from the third line is therefore

$$
P(B_3\mid S)=\frac{0.020}{0.045}=\frac{4}{9}.
$$

The third line supplies a fifth of all production, but its rejection rate exceeds the overall rate. Its share among rejected items, $\dfrac{4}{9}$, therefore exceeds its production share.

::grafico{xmin=-0.2 xmax=3.8 ymin=0 ymax=50 nomi="i,%" poligoni="0.6,0 0.95,0 0.95,50 0.6,50;1.6,0 1.95,0 1.95,30 1.6,30;2.6,0 2.95,0 2.95,20 2.6,20" linee="1.05,0 1.05,22.22 1.4,22.22 1.4,0;2.05,0 2.05,33.33 2.4,33.33 2.4,0;3.05,0 3.05,44.44 3.4,44.44 3.4,0" etichette="0.6,46,50;1.06,24,22;1.6,32,30;2.06,35,33;2.6,22,20;3.06,46,44" titolo="For each line $i$, the shaded bar is its production share $P(B_i)$ and the unfilled bar its share of rejected items $P(B_i\mid S)$, both expressed as percentages. The posterior shares are $\dfrac{2}{9}$, $\dfrac{1}{3}$, and $\dfrac{4}{9}$."}
:::

:::osservazione
To rank the posterior probabilities of several groups given the same event $A$, it suffices to compare the products $P(A\mid B_i)P(B_i)$. Indeed, all the posterior probabilities have the same positive denominator $P(A)$. A larger group can therefore be more likely after the observation even when another group has a higher rate within the group.

For example, suppose two lines have production shares $0.9$ and $0.1$ and rejection rates $0.02$ and $0.10$. The probabilities of the intersections with rejection are $0.018$ and $0.010$. A rejected item is therefore more likely to have come from the first line.
:::

:::esempio{titolo="Updating after two observations"}
Choose one of two urns with equal probability. The first contains three red balls and one blue, and the second one red and three blue. Draw twice with replacement from the chosen urn. Denote the choice of urn by $B_1$ and $B_2$. The probability of drawing red twice given $B_1$ is $\left(\dfrac34\right)^2$. Given $B_2$ it is $\left(\dfrac14\right)^2$. Conditional on the choice of urn, the draws are independent because replacement restores the composition of the chosen urn.

$$
P(B_1\mid R_1\cap R_2)
=\frac{\tfrac12\cdot\tfrac9{16}}
       {\tfrac12\cdot\tfrac9{16}+\tfrac12\cdot\tfrac1{16}}
=\frac9{10}.
$$

After one red draw, the relative weights of the urns are $3$ to $1$, and the first urn has posterior probability $\dfrac34$. A second red draw changes the odds to $9$ to $1$. Both results come from the same urn, so learning the first result changes the probability assigned to each urn and hence the probability for the second draw.

After $n$ consecutive red draws, the relative weights of the two urns are $\left(\dfrac34\right)^n$ to $\left(\dfrac14\right)^n$, or $3^n$ to $1$. The posterior probability of the first urn is therefore $\dfrac{3^n}{3^n+1}$.

::grafico{xmin=-0.3 xmax=4.6 ymin=0 ymax=100 nomi="n,%" punti="0,50;1,75;2,90;3,96.43;4,98.78" segmenti="1,0,1,75;2,0,2,90;3,0,3,96.43;4,0,4,98.78" etichette="0.15,45,50%;1.15,70,75%;2.15,85,90%" titolo="Posterior probability of the first urn, as a percentage, after $n$ consecutive red draws. The values are given by $\dfrac{3^n}{3^n+1}$ for $n=0,1,2,3,4$."}
:::

## Classifiers and base rates

:::definizione{#classificatori titolo="Sensitivity, specificity, and predictive values"}
Let $D$ be the event that an item is defective and $T$ the event that the inspection flags it. When the reference groups have positive probabilities, the following quantities are defined.

- The **sensitivity** is $P(T\mid D)$, the probability of being flagged among defective items.
- The **specificity** is $P(T^c\mid D^c)$, the probability of avoiding a flag among nondefective items.
- The positive predictive value is $P(D\mid T)$ and the negative predictive value is $P(D^c\mid T^c)$. Their reference groups are the flagged and unflagged items, respectively.

The false-positive probability is $P(T\mid D^c)=1-P(T^c\mid D^c)$. The false-negative probability is $P(T^c\mid D)=1-P(T\mid D)$. Each of these complements conditions on the actual state of the item.
:::

:::esempio{titolo="A rare defect and many false alarms"}
In a hypothetical model, the defective proportion is $P(D)=0.02$. The inspection has sensitivity $0.90$ and specificity $0.95$. Among $10\,000$ items, the expected counts are as follows.

| Status | Flagged | Unflagged | Total |
| --- | ---: | ---: | ---: |
| Defective | 180 | 20 | 200 |
| Nondefective | 490 | 9310 | 9800 |
| Total | 670 | 9330 | 10000 |

Among flagged items, the proportion that are defective is $\dfrac{180}{670}=\dfrac{18}{67}\approx0.269$. Among unflagged items, the proportion that are nondefective is $\dfrac{9310}{9330}=\dfrac{931}{933}\approx0.998$. The much larger number of nondefective items explains why false positives outnumber true positives despite a specificity of $95\%$.
:::

:::osservazione
Let $p=P(D)$ be the defective proportion, $s=P(T\mid D)$ the sensitivity, and $f=P(T\mid D^c)$ the false-positive probability. For $0<p<1$ and $P(T)>0$, Bayes' theorem gives

$$
P(D\mid T)=\frac{sp}{sp+f(1-p)}.
$$

If $s=0.9$ and $f=0.05$ stay fixed and the initial defective proportion rises from $2\%$ to $10\%$, the numerator rises from $0.018$ to $0.09$. At $10\%$ the denominator is $0.09+0.045=0.135$, so the positive predictive value reaches $\dfrac{2}{3}$. The same inspection can therefore have different predictive values in production runs with different defect prevalence.

::grafico{f="0.9*x/(0.05+0.0085*x)" xmin=0 xmax=20 ymin=0 ymax=90 nomi="p,VPP" legenda=0 punti="2,26.865672;10,66.666667" segmenti="2,0,2,26.865672;10,0,10,66.666667" etichette="2.7,25,27%;10.8,63,67%" titolo="Positive predictive value (PPV) as a function of the defective proportion p, both shown as percentages. The false-positive rate is 5% and the sensitivity is 90%."}

:::

:::esempio{titolo="Defect prevalence required for half the flags to be correct"}
An inspection flags $\dfrac45$ of defective items and $\dfrac15$ of nondefective items. Find the defective proportion $p$ for which exactly half of the flagged items are defective. For half the flags to be correct, true positives and false positives must have equal weights. This requires

$$
\frac45p=\frac15(1-p),
\qquad p=\frac15.
$$

To check the result, the expected counts among $100$ items are $20$ defective and $80$ nondefective. The expected number flagged is $16$ in each group. If the initial defective proportion falls below $\dfrac15$, true positives decrease and false positives increase, so the positive predictive value falls below $\dfrac12$.
:::

## Multiple events and mutual independence

:::definizione{#mutua titolo="Mutual independence"}
The events $A_1,\ldots,A_n$ are **mutually independent** if, for every subset $I$ of at least two indices, the probability of the intersection of the selected events equals the product of their probabilities.

$$
P\left(\bigcap_{i\in I} A_i\right)=\prod_{i\in I}P(A_i).
$$

For three events, the three pairwise identities and the identity for the triple must therefore all hold. If three trials are conducted independently, the probability of success in all three is the product of their individual success probabilities.
:::

:::attenzione{titolo="Pairwise independence without mutual independence"}
Toss two fair coins independently. Let $A$ be the event that the first coin shows heads, $B$ the event that the second coin shows heads, and $C$ the event that the outcomes match. Each event has probability $\dfrac{1}{2}$. Each pairwise intersection contains only heads–heads and therefore has probability $\dfrac{1}{4}$, the product of the corresponding probabilities.

The triple intersection also contains only heads–heads and therefore has probability $\dfrac{1}{4}$. The product of the three individual probabilities is $\dfrac{1}{8}$. The pairs are independent, but the three events are not mutually independent.
:::

:::esempio{titolo="Components in series and in parallel"}
Three components operate independently with probabilities $p_1$, $p_2$, and $p_3$. If the system operates only when all three are working, its reliability is $p_1p_2p_3$. If a single working component suffices, the system fails when all three fail, so its reliability is $1-(1-p_1)(1-p_2)(1-p_3)$. The factorization for the three failures follows by expanding the complement of the union of the operating events by inclusion–exclusion and using mutual independence for every intersection.

With $p_1=0.9$, $p_2=0.8$, and $p_3=0.7$, the series configuration has reliability $0.504$. In the parallel configuration the probability of complete failure is $0.1\cdot0.2\cdot0.3=0.006$, so reliability is $0.994$.

::grafico{assi=0 xmin=-0.4 xmax=9 ymin=-0.3 ymax=6.6 poligoni="1.4,5.2 3,5.2 3,6 1.4,6;3.8,5.2 5.4,5.2 5.4,6 3.8,6;6.2,5.2 7.8,5.2 7.8,6 6.2,6;3.4,0 5,0 5,0.8 3.4,0.8;3.4,1.4 5,1.4 5,2.2 3.4,2.2;3.4,2.8 5,2.8 5,3.6 3.4,3.6" linee="0.6,5.6 1.4,5.6;3,5.6 3.8,5.6;5.4,5.6 6.2,5.6;7.8,5.6 8.6,5.6;0.6,1.8 2.2,1.8;2.2,0.4 2.2,3.2;2.2,0.4 3.4,0.4;2.2,1.8 3.4,1.8;2.2,3.2 3.4,3.2;5,0.4 6.2,0.4;5,1.8 6.2,1.8;5,3.2 6.2,3.2;6.2,0.4 6.2,3.2;6.2,1.8 7.8,1.8" etichette="1.65,5.5,C₁ · 0.9;4.05,5.5,C₂ · 0.8;6.45,5.5,C₃ · 0.7;3.65,3.1,C₁ · 0.9;3.65,1.7,C₂ · 0.8;3.65,0.3,C₃ · 0.7;0.6,6.25,in series;0.6,4.1,in parallel" titolo="The same three components connected in series (top) and in parallel (bottom). Each component's probability of operating appears beside its name. The reliabilities are $0.504$ and $0.994$."}
:::

:::esempio{titolo="Exactly two working components"}
Three components operate mutually independently with probabilities $\dfrac12$, $\dfrac23$, and $\dfrac34$. Let $F_i$ denote the event that component $i$ works. Exactly two components operate when the first, second, or third fails and the other two work. Each configuration contains a single failure, so the three cases are disjoint.

$$
\begin{aligned}
P(F_1^c\cap F_2\cap F_3)&=\frac12\cdot\frac23\cdot\frac34=\frac14,\\[6pt]
P(F_1\cap F_2^c\cap F_3)&=\frac12\cdot\frac13\cdot\frac34=\frac18,\\[6pt]
P(F_1\cap F_2\cap F_3^c)&=\frac12\cdot\frac23\cdot\frac14=\frac1{12}.
\end{aligned}
$$

The sum is $\dfrac{11}{24}$. If the system requires *at least* two working components, add the configuration in which all three work. Its probability is $\dfrac12\cdot\dfrac23\cdot\dfrac34=\dfrac14$, so system reliability is $\dfrac{17}{24}$. Changing “exactly” to “at least” changes the event of interest, while the probability of each configuration stays the same.
:::
