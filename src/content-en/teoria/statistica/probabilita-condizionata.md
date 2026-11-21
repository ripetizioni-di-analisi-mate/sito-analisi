---
titolo: "Conditional probability, independence, and Bayes' theorem"
sommario: "Calculating probabilities given new information, recognizing independence, and updating probabilities with Bayes' theorem."
---

This chapter calculates probabilities when some information is already known. One example is quality control in a department where $2\%$ of the items are defective. An automatic inspection flags $90\%$ of the defective items and, by mistake, also $5\%$ of the nondefective items. If an item is flagged, the probability that it is actually defective is about $0.27$, so just over one flagged item in four is defective. The number $0.90$ answers a different question, namely what proportion of the defective items is flagged. The chapter shows how to keep the two questions apart and how to move from one to the other.

There are five tools. Conditional probability is a probability calculated within a group, for example among the flagged items only. The multiplication rule gives the probability of an experiment in several stages, such as two successive draws from an urn. The law of total probability obtains the rejection rate of the whole production from the rejection rates of the individual lines. Bayes' theorem reverses the direction of conditioning, that is, it goes from the proportion of defective items that are flagged, $0.90$, to the proportion of defective items among the flagged ones, $0.27$. Two events are independent when knowing that one has occurred leaves the probability of the other unchanged, as with tosses of a coin.

The chapter uses the events, probabilities, and partitions of Chapter 3, and it reworks in terms of probabilities the conditional frequencies of the two-way tables of Chapter 1. Together with Chapters 5 to 7 it completes the probability part of the course, which is used to measure the error made in passing from a sample to the population. Independence returns in Chapter 5, where the number of successes in independent trials gives the binomial distribution, in Chapter 7 for independent random variables, and in Chapter 8, where a sample consists of independent observations; the inference of Chapters 8 to 12 is based on this.

## The reference group

:::definizione{#condizionata titolo="Conditional probability"}
Roll a fair die. Face $6$ comes up with probability $\dfrac16$. If we know that an even number came up, the outcomes still possible are $2$, $4$, and $6$, all with the same probability, and $6$ is one of the three. Given that the result is even, the probability of $6$ therefore becomes $\dfrac13$. The information has narrowed the possible outcomes down to a smaller group, and the new probability is calculated within that group.

In symbols, $\Omega$ (read “omega”) is the sample space of Chapter 3, that is, the set of all possible outcomes, and an event is a subset of $\Omega$. Let $A$ and $B$ be events with $P(B)>0$. Once $B$ is known to have occurred, the outcomes still possible are those in $B$. Among these, the outcomes for which $A$ also occurs form the intersection $A\cap B$. The **conditional probability of $A$ given $B$** is denoted by $P(A\mid B)$, read “the probability of $A$ given $B$,” and is

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

For the die, $A=\{6\}$ and $B=\{2,4,6\}$, so $A\cap B=\{6\}$ and $P(A\mid B)=\dfrac{\frac16}{\frac12}=\dfrac13$, as in the count of cases.

Dividing by $P(B)$ gives the outcomes of $B$ a total probability of one. For the die, each of the faces $2$, $4$, and $6$ has conditional probability $\dfrac13$, and the sum is $1$. Since $A\cap B\subseteq B$, monotonicity of probability (Chapter 3) gives $P(A\cap B)\le P(B)$, so the ratio lies between zero and one.

Conditional probability answers questions that contain “given that” or “among the…”. In the inspection of the introduction, the probability that a flagged item is defective is the conditional probability of “defective” given “flagged.” It is the same idea as the conditional frequency of Chapter 1, with probabilities in place of frequencies.
:::

:::esempio{titolo="Two questions about the same table"}
Of $200$ students, $50$ commute from outside the area. Among these commuters, $20$ travel by train. Of the $150$ students who live locally, $10$ travel by train. Let $B$ be the event that a student is a commuter and $A$ the event that a student travels by train. A student is chosen at random, so each student has probability $\dfrac1{200}$ and the probability of an event is the number of corresponding students divided by $200$.

| Group | By train | Other transportation | Total |
| --- | ---: | ---: | ---: |
| Commuters | 20 | 30 | 50 |
| Local residents | 10 | 140 | 150 |
| Total | 30 | 170 | 200 |

The probability of traveling by train given that a student is a commuter is calculated among the $50$ commuters, so divide by the first row total. The probability of being a commuter given that a student travels by train is calculated among the $30$ students who travel by train, so divide by the first column total. The numerator is the same in both calculations, because it counts the same $20$ students, commuters who travel by train.

$$
P(A\mid B)=\frac{20}{50}=\frac{2}{5},
\qquad
P(B\mid A)=\frac{20}{30}=\frac{2}{3}.
$$

::venn{nomi="A,B" ambiente="Ω" zone="ab" elementi="a:10;ab:20;b:30;u:140" titolo="A denotes students who travel by train, and B denotes commuters. Group B includes 20 students in the intersection and 30 outside A."}
:::

:::osservazione
If $\Omega$ has finitely many equally likely outcomes, the definition reduces to the ratio of two counts, $\dfrac{|A\cap B|}{|B|}$. The symbol $|\cdot|$ denotes the number of elements in the set. Indeed $P(A\cap B)=\dfrac{|A\cap B|}{|\Omega|}$ and $P(B)=\dfrac{|B|}{|\Omega|}$, so the common factor $\dfrac{1}{|\Omega|}$ cancels in the ratio.

If outcomes have different weights, the weights of the outcomes are added in place of the counts. For example, a die gives probability $\dfrac{1}{4}$ to face $6$ and probability $\dfrac{3}{20}$ to each of the other five faces. Given an even result, the known event contains faces $2$, $4$, and $6$, with total weight $\dfrac3{20}+\dfrac3{20}+\dfrac14=\dfrac{11}{20}$. The conditional probability of face $6$ is therefore $\dfrac{\frac14}{\frac{11}{20}}=\dfrac{5}{11}$.
:::

:::attenzione
The definition requires $P(B)>0$. If an ordinary die is rolled and $B$ is the event of rolling $7$, then $P(B)=0$ and $P(A\cap B)=0$ for every $A$. The ratio becomes $\dfrac00$, which is not a number, so the probability conditional on $B$ is undefined. The same difficulty arises in a table of counts when the group on which we wish to condition is empty, that is, when its row or column has total zero.
:::

## Complements and bounds on probabilities

:::teorema{#complementi titolo="The complement under a fixed condition"}
Among the students in an evening session, $70\%$ pass a test. Then $30\%$ of the students *in that same session* do not pass, because each student in the session either passes the test or does not. The same rule holds for conditional probabilities.

Let $A$ and $B$ be events with $P(B)>0$, and let $A^c$ be the complement of $A$, that is, the event “$A$ does not occur” (Chapter 3). Then

$$
P(A^c\mid B)=1-P(A\mid B).
$$

Indeed, the events $A\cap B$ and $A^c\cap B$ are disjoint, meaning they have no outcomes in common, and their union is $B$. By additivity of probability (Chapter 3), $P(A\cap B)+P(A^c\cap B)=P(B)$. Dividing by $P(B)$ gives $P(A\mid B)+P(A^c\mid B)=1$.
:::

:::esempio{titolo="Changing the reference group"}
Of $100$ receipts, $40$ are for online orders. Corrections were made to $12$ online order receipts and $6$ receipts for other orders. Let $A$ be the event that a receipt was corrected and $B$ the event that the order was placed online, so $B^c$ is the event that the order was not placed online. Changing the condition from $B$ to $B^c$ changes the denominator from $40$ to $100-40=60$. Thus

$$
P(A\mid B)=\frac{12}{40}=\frac{3}{10},
\qquad
P(A\mid B^c)=\frac{6}{60}=\frac{1}{10}.
$$

The complement of the first probability is $P(A^c\mid B)=1-\dfrac3{10}=\dfrac{7}{10}$, and it still refers to online receipts. Indeed, among the $40$ online receipts, $40-12=28$ were not corrected, and $\dfrac{28}{40}=\dfrac7{10}$. The probability $P(A\mid B^c)=\dfrac{1}{10}$ instead concerns receipts for the other orders, so it cannot be obtained from $P(A\mid B)$ and differs from $1-P(A\mid B)=\dfrac{7}{10}$.
:::

:::osservazione
Let $P(A)=0.7$ and $P(B)=0.6$. The probability of the intersection cannot exceed $0.6$, because $A\cap B$ is contained in $B$. Nor can it fall below $0.3$. If $P(A\cap B)$ were $0.2$, the inclusion–exclusion formula of Chapter 3 would give the union probability $0.7+0.6-0.2=1.1$, while no probability exceeds one. Therefore $P(A\cap B)$ can only be a number between $0.3$ and $0.6$.

For any two events, $A$ and $B$ divide $\Omega$ into four regions: $A\cap B$, the part of $A$ outside $B$, the part of $B$ outside $A$, and the part outside both. Setting $x=P(A\cap B)$, the four regions have probabilities

$$
x,\qquad P(A)-x,\qquad P(B)-x,\qquad 1-P(A)-P(B)+x.
$$

The last value is obtained by subtracting the other three probabilities from one. Every probability is nonnegative. The first and last give $x\ge0$ and $x\ge P(A)+P(B)-1$; the second and third give $x\le P(A)$ and $x\le P(B)$. Therefore

$$
\max\{0,P(A)+P(B)-1\}\le x\le\min\{P(A),P(B)\}.
$$

These bounds decide whether a value assigned to $P(A\cap B)$ is possible.
:::

:::esempio{titolo="Reconstructing a table from three probabilities"}
Let $A$ be the event that a request is urgent and $B$ the event that it is submitted online. Every request not submitted online is submitted in person, so “in person” is the event $B^c$. Suppose $P(A)=0.4$, $P(B)=0.6$, and $P(A\cap B)=0.3$.

Urgent requests account for $0.4$ and urgent online requests for $0.3$, so urgent requests submitted in person account for $0.4-0.3=0.1$. This value is a proportion of all requests. In the same way, online requests that are not urgent account for $0.6-0.3=0.3$. This leaves $1-0.3-0.1-0.3=0.3$ for nonurgent requests submitted in person. The complete table is therefore

| Channel | Urgent | Nonurgent | Total |
| --- | ---: | ---: | ---: |
| Online | $0.3$ | $0.3$ | $0.6$ |
| In person | $0.1$ | $0.3$ | $0.4$ |
| Total | $0.4$ | $0.6$ | $1$ |

Each cell of the table contains the probability that two events occur together, calculated over all requests. A probability of this kind is called a joint probability, like the joint frequency of Chapter 1. Conditional probabilities are obtained by dividing a cell by the total of its row or column. Given that a request was submitted in person, the probability that it is urgent is $\dfrac{0.1}{0.4}=\dfrac14$, which differs from the joint probability $0.1$. Given that a request was submitted online, the probability that it is urgent is $\dfrac{0.3}{0.6}=\dfrac12$.

::grafico{assi=0 xmin=-0.6 xmax=10.6 ymin=-1.4 ymax=10.6 poligoni="0,0 6,0 6,5 0,5;6,0 10,0 10,2.5 6,2.5" linee="0,0 10,0 10,10 0,10 0,0;6,0 6,10;0,5 6,5;6,2.5 10,2.5" etichette="1.3,2.3,urgent 0.3;1,7.3,nonurgent 0.3;6.6,1,urgent 0.1;6.4,6,nonurgent 0.3;2.2,-0.9,Online;7,-0.9,In person" titolo="The widths of the two columns are $P(B)=0.6$ and $P(B^c)=0.4$. The shaded portions have heights $P(A\mid B)=\dfrac{1}{2}$ and $P(A\mid B^c)=\dfrac{1}{4}$, so the area of each rectangle equals the joint probability shown inside it."}
:::

## The multiplication rule and tree diagrams

::::teorema{#prodotto titolo="Multiplication rule"}
In the table of requests, $60\%$ are submitted online and, among online requests, half are urgent. Online urgent requests are therefore half of $60\%$, that is, $0.6\cdot\dfrac12=0.3$, the value in the table.

If $P(A)>0$, the probability that both $A$ and $B$ occur is

$$
P(A\cap B)=P(A)P(B\mid A).
$$

For three events, if $P(A)>0$ and $P(A\cap B)>0$, then

$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$

Each factor after the first is conditional on all the events preceding it, so the third factor has the condition $A\cap B$. For example, three balls are drawn from an urn with three red balls and two blue balls, without putting them back. The first is red with probability $\dfrac35$. After one red, two red balls remain among four, and after two reds, one red remains among three. All three balls are red with probability $\dfrac35\cdot\dfrac24\cdot\dfrac13=\dfrac1{10}$.

The rule is used for experiments in several stages, such as successive draws or inspections in sequence, in which each stage depends on the earlier ones.

:::dimostrazione
For two events, the definition of conditional probability gives $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$. Since $P(A)>0$, multiplying both sides by $P(A)$ gives the formula.

For three events, apply the formula just obtained with $A\cap B$ in place of $A$ and $C$ in place of $B$. Since $P(A\cap B)>0$, this gives $P(A\cap B\cap C)=P(A\cap B)P(C\mid A\cap B)$. Finally, replace $P(A\cap B)$ with $P(A)P(B\mid A)$.
:::
::::

:::esempio{titolo="A tree for two draws"}
An urn contains three red balls and two blue balls. Draw twice without replacement, that is, without putting the first ball back in the urn. Let $R_i$ and $B_i$ denote the events “red on draw $i$” and “blue on draw $i$.”

An experiment in several stages is drawn as a tree. From each point, called a node, branches leave for the possible outcomes of the next stage, and each branch carries the probability of that outcome given the path already taken. The node at which a complete path ends is called a leaf, and each leaf corresponds to a single path from the starting node. At the first level of the tree, the branches have probabilities $\dfrac{3}{5}$ and $\dfrac{2}{5}$. At the second level, the composition of the urn depends on the branch already taken. After a first red, two red and two blue balls remain, so the two outgoing branches have probability $\dfrac24=\dfrac12$ each. After a first blue, three red and one blue remain, so the branch leading to red has probability $\dfrac34$ and the branch leading to blue $\dfrac14$.

::grafico{assi=0 xmin=-0.8 xmax=12 ymin=-0.6 ymax=6.5 linee="0,3 4,4.7;0,3 4,1.3;4,4.7 8,5.9;4,4.7 8,3.8;4,1.3 8,2.1;4,1.3 8,0.1" punti="0,3,pieno;4,4.7,pieno;4,1.3,pieno;8,5.9,pieno;8,3.8,pieno;8,2.1,pieno;8,0.1,pieno" etichette="1.45,4.08,⅗;1.45,1.62,⅖;5.55,5.68,½;5.55,3.65,½;5.55,2.33,¾;5.55,0.05,¼;8.2,5.9,red red;8.2,3.8,red blue;8.2,2.1,blue red;8.2,0.1,blue blue" titolo="Branch probabilities for two draws without replacement. The four leaves identify the possible ordered color sequences."}

The probability of each leaf is obtained by the multiplication rule, multiplying the probabilities of the branches along the path. The leaves “red, blue” and “blue, red” are disjoint, so the probability of drawing two different colors is the sum of the two paths.

$$
\begin{aligned}
P(R_1\cap B_2)&=\frac{3}{5}\cdot\frac{2}{4}=\frac{3}{10},\\[6pt]
P(B_1\cap R_2)&=\frac{2}{5}\cdot\frac{3}{4}=\frac{3}{10},\\[6pt]
P(\text{two different colors})&=\frac{3}{10}+\frac{3}{10}=\frac{3}{5}.
\end{aligned}
$$
:::

:::osservazione
The branches “second red” and “second blue” leave the node “first red,” with probabilities $\dfrac12$ and $\dfrac12$, and the sum is one. Indeed, after a first red, the second ball is either red or blue, and it cannot be both. The same holds for every node reached with positive probability, because the branches leaving it correspond to outcomes that exclude one another and cover all the cases still possible, that is, they form a partition in the sense of Chapter 3.

If an event concerns an intermediate stage, its probability is the sum of the leaves that pass through that stage. In the urn, for example, the probability of a first blue is recovered by adding the two leaves that begin with blue:

$$
\frac{2}{5}\cdot\frac{3}{4}+\frac{2}{5}\cdot\frac{1}{4}=\frac{3}{10}+\frac{1}{10}=\frac{2}{5}.
$$

The result is the probability of the branch “first blue,” because the two branches leaving it sum to one.
:::

:::esempio{titolo="Marginal probability for the second draw"}
Consider again the urn with three red balls and two blue balls. We want the probability that the second ball is red without knowing the color of the first. This probability without conditions is called the marginal probability of $R_2$, like the marginal frequencies of Chapter 1. Two paths lead to a red second draw, “red, red” and “blue, red.” They are disjoint, so their probabilities are added:

$$
P(R_2)=\frac35\cdot\frac24+\frac25\cdot\frac34=\frac3{10}+\frac3{10}=\frac35.
$$

The result equals the initial proportion of red balls. Indeed, a given ball is drawn second with probability $\dfrac45\cdot\dfrac14=\dfrac15$, because it must not come out on the first draw, which happens with probability $\dfrac45$, and it must then be chosen from the four that remain. The calculation holds for every ball and there are three red balls, so $P(R_2)=3\cdot\dfrac15=\dfrac35$.

Given the first color, however, the probability of a red second draw is $\dfrac24$ after a red and $\dfrac34$ after a blue. There are therefore two distinct questions about the second draw. If the first outcome is unknown, add the probabilities of both paths. If it is known, read the probability on the branch leaving that node.
:::

## Independence of two events

:::definizione{#indipendenza titolo="Independent events"}
In the table of commuters, the probability of traveling by train is $\dfrac{30}{200}=0.15$ among all students and $\dfrac{20}{50}=0.4$ among commuters. Knowing that a student is a commuter therefore changes the probability of traveling by train. When instead the information $B$ leaves the probability of $A$ unchanged, that is, $P(A\mid B)=P(A)$, the events are called independent. Multiplying by $P(B)$ and using the multiplication rule, the condition becomes $P(A\cap B)=P(A)P(B)$.

The events $A$ and $B$ are **independent** if

$$
P(A\cap B)=P(A)P(B).
$$

Two events that are not independent are called dependent. In the table of commuters, $P(A\cap B)=\dfrac{20}{200}=0.1$, while $P(A)P(B)=0.15\cdot0.25=0.0375$, so “train” and “commuter” are dependent.

Compared with $P(A\mid B)=P(A)$, the product form has two advantages. It is symmetric, so it also states that $P(B\mid A)=P(B)$ when $P(A)>0$. It also applies when one of the probabilities is zero. If $P(B)=0$, then $P(A\cap B)=0$ because $A\cap B\subseteq B$, and the product $P(A)P(B)$ is also zero, so an event of probability zero is independent of every event.

When two events are independent, the probability that both occur is the product of the two probabilities. This is the case of repeated trials, such as tosses of a coin, from which the binomial distribution is derived in Chapter 5.
:::

:::esempio{titolo="Checking independence on a die"}
Roll a fair die. Let $A=\{2,4,6\}$ be the event of rolling an even number and $B=\{3,6\}$ the event of rolling a multiple of three. The only face common to both is $6$, so

$$
P(A\cap B)=\frac{1}{6}
=\frac{1}{2}\cdot\frac{1}{3}
=P(A)P(B).
$$

The events are independent even though they concern the same roll. Learning that a multiple of three was rolled leaves two equally likely possibilities, $3$ and $6$, one odd and one even. Therefore $P(A\mid B)=\dfrac12$, equal to $P(A)$.
:::

::::teorema{#indipendenza-complementari titolo="Independence and complements"}
For the die in the example, $A^c=\{1,3,5\}$ is the event of rolling an odd number, and $A^c\cap B=\{3\}$ has probability $\dfrac16$. The product is also $P(A^c)P(B)=\dfrac12\cdot\dfrac13=\dfrac16$, so $A^c$ and $B$ are independent as well.

If $A$ and $B$ are independent, the pairs $(A^c,B)$, $(A,B^c)$, and $(A^c,B^c)$ are also independent.

The theorem is used when independence is known for the operating events and the question concerns failures. For example, if two devices operate independently with probabilities $0.9$ and $0.8$, the first works and the second fails with probability $0.9\cdot0.2=0.18$, and both fail with probability $0.1\cdot0.2=0.02$.

::grafico{assi=0 xmin=-1.4 xmax=6.4 ymin=-1 ymax=6.4 poligoni="0,0 3,0 3,2 0,2" linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;0,2 6,2" etichette="0.6,0.9,A∩B  ⅙;3.5,0.9,Aᶜ∩B  ⅙;0.6,3.9,A∩Bᶜ  ⅓;3.5,3.9,Aᶜ∩Bᶜ  ⅓;1.3,-0.6,A  ½;4.3,-0.6,Aᶜ  ½;-1.2,0.9,B  ⅓;-1.2,3.9,Bᶜ  ⅔" titolo="Rectangle of area $1$ for a die roll, with $A=\{2,4,6\}$ and $B=\{3,6\}$. The widths are $P(A)$ and $P(A^c)$, and the heights are $P(B)$ and $P(B^c)$. Since $A$ and $B$ are independent, multiplying each rectangle’s width by its height gives the joint probability of the corresponding events."}

:::dimostrazione
The events $A\cap B$ and $A^c\cap B$ are disjoint and their union is $B$, so $P(A^c\cap B)=P(B)-P(A\cap B)$. Since $A$ and $B$ are independent, $P(A\cap B)=P(A)P(B)$, and therefore

$$
\begin{aligned}
P(A^c\cap B)&=P(B)-P(A)P(B)\\[6pt]
&=P(B)\bigl(1-P(A)\bigr)=P(B)P(A^c).
\end{aligned}
$$

The same calculation with the roles of $A$ and $B$ exchanged shows that $A$ and $B^c$ are independent. Applying the first calculation to the independent pair $(A,B^c)$, with $B^c$ in place of $B$, shows that $A^c$ and $B^c$ are independent.
:::
::::

:::attenzione
Two disjoint events of positive probability are dependent, because if one is known to have occurred, the other becomes impossible. In a single die roll, the events of rolling $1$ and rolling $2$ have empty intersection, so their intersection has probability zero. The product of their probabilities, however, is $\dfrac16\cdot\dfrac16=\dfrac{1}{36}$.
:::

## Partitions and total probability

::::teorema{#totale titolo="Law of total probability"}
For the urn with three red balls and two blue balls, the probability of a red second draw was obtained by adding two paths:

$$
P(R_2)=P(R_2\mid R_1)P(R_1)+P(R_2\mid B_1)P(B_1)=\frac24\cdot\frac35+\frac34\cdot\frac25=\frac35.
$$

The two conditions $R_1$ and $B_1$ exclude one another and cover all cases. The following formula extends this calculation to any number of groups.

As in Chapter 3, a **partition** of the sample space is a family of pairwise disjoint events, that is, mutually exclusive events, whose union is $\Omega$. Let $B_1,\ldots,B_r$ be the events of a partition, with $P(B_i)>0$ for each index $i$. For every event $A$,

$$
P(A)=\sum_{i=1}^{r} P(A\mid B_i)P(B_i).
$$

The number $P(B_i)$ is the share of group $B_i$, and the number $P(A\mid B_i)$ is the probability of $A$ within that group. The formula is therefore a weighted mean of conditional probabilities, with weights equal to the shares of the groups. It is the same rule that gives the relative frequency of combined groups in Chapter 1.

:::dimostrazione
Each outcome in $A$ belongs to exactly one group $B_i$. Thus the events $A\cap B_i$ are pairwise disjoint and their union is $A$. By additivity, $P(A)$ is the sum of the probabilities $P(A\cap B_i)$. Since all the $P(B_i)$ are positive, the multiplication rule gives $P(A\cap B_i)=P(B_i)P(A\mid B_i)$ for every $i$, and substituting gives the formula.
:::
::::

:::esempio{titolo="Three lines with different production volumes"}
Production lines $B_1$, $B_2$, and $B_3$ supply $50\%$, $30\%$, and $20\%$ of the items, respectively. Their rejection rates are $2\%$, $5\%$, and $10\%$, respectively; for example, $2\%$ of the items from the first line are rejected. Select an item at random, and let $S$ denote the event that it is rejected, so $P(S\mid B_1)=0.02$, $P(S\mid B_2)=0.05$, and $P(S\mid B_3)=0.10$. Each item comes from exactly one line, so the three lines form a partition and the total probability is

$$
\begin{aligned}
P(S)&=0.50\cdot0.02+0.30\cdot0.05+0.20\cdot0.10\\[6pt]
&=0.010+0.015+0.020=0.045.
\end{aligned}
$$

The figure shows the same calculation for $1000$ items. The first line produces $500$ items and rejects $2\%$ of them, that is, $10$; in the same way, $300\cdot0.05=15$ and $200\cdot0.10=20$. These numbers are called expected rejections, because they are the counts that correspond exactly to the probabilities; among $1000$ actual items, each line may reject a few more or a few fewer. Chapter 5 gives these numbers the general name of expected value.

::grafico{xmin=-0.28 xmax=3.7 ymin=0 ymax=24 nomi="i,n" poligoni="0.72,0 1.28,0 1.28,10 0.72,10;1.72,0 2.28,0 2.28,15 1.72,15;2.72,0 3.28,0 3.28,20 2.72,20" etichette="0.94,11,10;1.94,16,15;2.94,21,20" titolo="Expected numbers of rejected items per 1,000 items produced. The i-axis identifies the line, and n is the number rejected. The bar heights add to 45."}

The first line produces more items than the third, so its rejection rate carries more weight in the total. The value $0.045$ lies between the lowest rate, $0.02$, and the highest, $0.10$, because a weighted mean with positive weights always lies between the smallest and the largest value.
:::

:::osservazione
A partition may contain a group of probability zero, for example a fourth line shut down for maintenance. For that group the conditional probability is undefined, but its intersection with $A$ has probability zero, because it is contained in an event of probability zero. Its contribution to the total probability is therefore zero. It is therefore enough to apply the formula to the categories with positive weight only.
:::

:::osservazione
With two groups $B$ and $B^c$, the formula also gives a missing conditional probability. For the three lines, let $B=B_1$ be the first line. We know $P(S)=0.045$, $P(B)=0.5$, and $P(S\mid B)=0.02$, and we want the rejection rate of the items from the other two lines, that is, $P(S\mid B^c)$. The formula with two groups gives $0.045=0.02\cdot0.5+P(S\mid B^c)\cdot0.5$, so $P(S\mid B^c)=\dfrac{0.045-0.010}{0.5}=0.07$.

For any event $B$, if $0<P(B)<1$ and $P(A)$, $P(B)$, and $P(A\mid B)$ are known, the formula $P(A)=P(A\mid B)P(B)+P(A\mid B^c)\bigl(1-P(B)\bigr)$ is solved for $P(A\mid B^c)$:

$$
P(A\mid B^c)=\frac{P(A)-P(A\mid B)P(B)}{1-P(B)}.
$$

The numerator is the probability of $A\cap B^c$, a proportion of the entire population (for the lines, $0.015+0.020=0.035$). Dividing by $P(B^c)=1-P(B)$ expresses that proportion relative to the group outside $B$ only.
:::

## Reversing the direction of conditioning

::::teorema{#bayes titolo="Bayes' theorem"}
For the three lines, the law of total probability starts from the rejection rates $P(S\mid B_i)$ and gives $P(S)=0.045$. The opposite question starts from a rejected item and asks which line it came from, that is, it asks for $P(B_i\mid S)$. For the third line the answer is the ratio of its contribution to rejections, $0.020$, to the total rejection probability, $0.045$, that is, $\dfrac49$. Bayes' theorem writes this ratio in general.

Let $B_1,\ldots,B_r$ be the events of a partition with positive probabilities, and let $A$ be an event with $P(A)>0$. After observing $A$, the probability of group $B_j$ is

$$
P(B_j\mid A)
=\frac{P(A\mid B_j)P(B_j)}
       {\displaystyle\sum_{i=1}^{r}P(A\mid B_i)P(B_i)}.
$$

The quantity $P(B_j)$ is the group's **prior** probability, that is, its probability before the observation. The quantity $P(B_j\mid A)$ is its **posterior** probability, calculated after learning that $A$ occurred. The theorem gives the probability of a cause (the line an item came from, a defect) after observing one of its effects (a rejection, a flag from an inspection).

:::dimostrazione
By the definition of conditional probability, $P(B_j\mid A)=\dfrac{P(B_j\cap A)}{P(A)}$. By the multiplication rule applied to group $B_j$, the numerator is $P(B_j\cap A)=P(B_j)P(A\mid B_j)$. By the law of total probability, the denominator is $P(A)=\sum_{i=1}^{r}P(A\mid B_i)P(B_i)$.
:::
::::

:::esempio{titolo="Origin of a rejected item"}
For the three lines, the contribution of the third to rejections is $P(S\cap B_3)=0.20\cdot0.10=0.020$, so among rejected items the proportion from the third line is

$$
P(B_3\mid S)=\frac{0.020}{0.045}=\frac{4}{9}.
$$

In the same way, $P(B_1\mid S)=\dfrac{0.010}{0.045}=\dfrac29$ and $P(B_2\mid S)=\dfrac{0.015}{0.045}=\dfrac13$. The third line supplies $20\%$ of production, but its rejection rate, $0.10$, exceeds the overall rate $0.045$. Its share among rejected items, $\dfrac{4}{9}\approx0.44$, therefore exceeds its production share.

::grafico{xmin=-0.2 xmax=3.8 ymin=0 ymax=50 nomi="i,%" poligoni="0.6,0 0.95,0 0.95,50 0.6,50;1.6,0 1.95,0 1.95,30 1.6,30;2.6,0 2.95,0 2.95,20 2.6,20" linee="1.05,0 1.05,22.22 1.4,22.22 1.4,0;2.05,0 2.05,33.33 2.4,33.33 2.4,0;3.05,0 3.05,44.44 3.4,44.44 3.4,0" etichette="0.6,46,50;1.06,24,22;1.6,32,30;2.06,35,33;2.6,22,20;3.06,46,44" titolo="For each line $i$, the shaded bar is its production share $P(B_i)$ and the unfilled bar its share of rejected items $P(B_i\mid S)$, both expressed as percentages. The posterior shares are $\dfrac{2}{9}$, $\dfrac{1}{3}$, and $\dfrac{4}{9}$."}
:::

:::osservazione
Two lines have production shares $0.9$ and $0.1$ and rejection rates $0.02$ and $0.10$. The products $P(S\mid B_i)P(B_i)$ are $0.02\cdot0.9=0.018$ and $0.10\cdot0.1=0.010$. A rejected item is therefore more likely to have come from the first line, even though the second line has the higher rejection rate.

To rank the posterior probabilities of several groups given the same event $A$, it suffices to compare the products $P(A\mid B_i)P(B_i)$. Indeed, all the posterior probabilities have the same positive denominator $P(A)$.
:::

:::esempio{titolo="Updating after two observations"}
Choose one of two urns with equal probability. The first contains three red balls and one blue, and the second one red and three blue. Here $B_1$ and $B_2$ denote the choice of the first and of the second urn, and $R_1$ and $R_2$ the events “red on the first draw” and “red on the second draw.” Two balls are drawn with replacement from the chosen urn, that is, the first ball is put back in the urn before the second draw.

Once the urn has been chosen, replacement restores its composition, so the second draw has the same probability of red whatever the color of the first. Therefore

$$
P(R_1\cap R_2\mid B_1)=\frac34\cdot\frac34=\frac9{16},
\qquad
P(R_1\cap R_2\mid B_2)=\frac14\cdot\frac14=\frac1{16}.
$$

Bayes' theorem gives

$$
P(B_1\mid R_1\cap R_2)
=\frac{\tfrac12\cdot\tfrac9{16}}
       {\tfrac12\cdot\tfrac9{16}+\tfrac12\cdot\tfrac1{16}}
=\frac9{10}.
$$

After a single red draw, the products $P(R_1\mid B_i)P(B_i)$ are $\dfrac12\cdot\dfrac34=\dfrac38$ for the first urn and $\dfrac12\cdot\dfrac14=\dfrac18$ for the second, so they are in the ratio $3$ to $1$, and the first urn has posterior probability $\dfrac{\frac38}{\frac38+\frac18}=\dfrac34$. A second red draw changes the ratio to $9$ to $1$, and the probability of the first urn rises to $\dfrac9{10}$.

Without knowing which urn was chosen, however, the two draws are dependent. By the law of total probability, $P(R_2)=\dfrac12\cdot\dfrac34+\dfrac12\cdot\dfrac14=\dfrac12$ and $P(R_1\cap R_2)=\dfrac12\cdot\dfrac9{16}+\dfrac12\cdot\dfrac1{16}=\dfrac5{16}$. Therefore $P(R_2\mid R_1)=\dfrac{\frac5{16}}{\frac12}=\dfrac58$, which differs from $P(R_2)=\dfrac12$. A red first draw makes the urn with more red balls more likely, and hence also a red second draw.

After $n$ consecutive red draws, the ratio of the products for the two urns is $\left(\dfrac34\right)^n$ to $\left(\dfrac14\right)^n$, or $3^n$ to $1$. The posterior probability of the first urn is therefore $\dfrac{3^n}{3^n+1}$.

::grafico{xmin=-0.3 xmax=4.6 ymin=0 ymax=100 nomi="n,%" punti="0,50;1,75;2,90;3,96.43;4,98.78" segmenti="1,0,1,75;2,0,2,90;3,0,3,96.43;4,0,4,98.78" etichette="0.15,45,50%;1.15,70,75%;2.15,85,90%" titolo="Posterior probability of the first urn, as a percentage, after $n$ consecutive red draws. The values are given by $\dfrac{3^n}{3^n+1}$ for $n=0,1,2,3,4$."}
:::

## Classifiers and base rates

:::definizione{#classificatori titolo="Sensitivity, specificity, and predictive values"}
An automatic inspection examines each item and either flags it as defective or does not. Out of $100$ defective items it flags $90$ and lets $10$ through; out of $100$ nondefective items it flags $5$ by mistake and lets $95$ through. A procedure that assigns each unit to one of two classes, here “flagged” and “unflagged,” is called a classifier. The probability that an item is defective before the inspection is called the base rate, or prevalence.

Let $D$ be the event that an item is defective and $T$ the event that the inspection flags it. When the reference groups have positive probabilities, the following quantities are defined.

- The **sensitivity** is $P(T\mid D)$, the probability of being flagged among defective items. In the example it is $\dfrac{90}{100}=0.90$.
- The **specificity** is $P(T^c\mid D^c)$, the probability of not being flagged among nondefective items. In the example it is $\dfrac{95}{100}=0.95$.
- There are two **predictive values**. The positive predictive value is $P(D\mid T)$, the probability that a flagged item is defective. The negative predictive value is $P(D^c\mid T^c)$, the probability that an unflagged item is nondefective.

Sensitivity and specificity have the actual state of the item, defective or nondefective, as their reference group. The predictive values have the result of the inspection, flagged or unflagged, as their reference group, and they also depend on the prevalence.

A flagged defective item is a true positive and a flagged nondefective item is a false positive; an unflagged defective item is a false negative. The false-positive probability is $P(T\mid D^c)=1-P(T^c\mid D^c)$, in the example $1-0.95=0.05$. The false-negative probability is $P(T^c\mid D)=1-P(T\mid D)$, in the example $1-0.90=0.10$. Both are obtained with the complement under a fixed condition.
:::

:::esempio{titolo="A rare defect and many false alarms"}
Suppose the prevalence is $P(D)=0.02$ and the inspection has sensitivity $0.90$ and specificity $0.95$. Apply these probabilities to $10\,000$ items. There are $10\,000\cdot0.02=200$ defective items, and the inspection flags $0.90\cdot200=180$ of them. There are $9800$ nondefective items, and the inspection flags $0.05\cdot9800=490$ of them. As with the rejections from the three lines, these are expected counts.

| Status | Flagged | Unflagged | Total |
| --- | ---: | ---: | ---: |
| Defective | 180 | 20 | 200 |
| Nondefective | 490 | 9310 | 9800 |
| Total | 670 | 9330 | 10000 |

Among flagged items, the proportion that are defective, that is, the positive predictive value, is $\dfrac{180}{670}=\dfrac{18}{67}\approx0.269$. Among unflagged items, the proportion that are nondefective, that is, the negative predictive value, is $\dfrac{9310}{9330}=\dfrac{931}{933}\approx0.998$. Of the $670$ flagged items, $490$ are false positives and $180$ are true positives. False positives are more numerous because nondefective items are $49$ times as many as defective ones, and $5\%$ of $9800$ items exceeds $90\%$ of $200$ items.
:::

:::osservazione
Let $p=P(D)$ be the prevalence, $s=P(T\mid D)$ the sensitivity, and $f=P(T\mid D^c)$ the false-positive probability. By the multiplication rule, true positives have probability $P(D\cap T)=sp$ and false positives $P(D^c\cap T)=f(1-p)$; their sum is $P(T)$. For $0<p<1$ and $P(T)>0$, Bayes' theorem then gives the positive predictive value, denoted by PPV in the figure:

$$
P(D\mid T)=\frac{sp}{sp+f(1-p)}.
$$

With $s=0.9$ and $f=0.05$, at a prevalence of $2\%$ the numerator is $0.018$ and the denominator $0.018+0.049=0.067$, so the positive predictive value is about $0.27$, as in the example. If the prevalence rises to $10\%$, the numerator rises to $0.09$ and the denominator is $0.09+0.045=0.135$, so the positive predictive value reaches $\dfrac{2}{3}$. The same inspection therefore has different predictive values in production runs with different prevalence.

::grafico{f="0.9*x/(0.05+0.0085*x)" xmin=0 xmax=20 ymin=0 ymax=90 nomi="p,VPP" legenda=0 punti="2,26.865672;10,66.666667" segmenti="2,0,2,26.865672;10,0,10,66.666667" etichette="2.7,25,27%;10.8,63,67%" titolo="Positive predictive value (PPV) as a function of the defective proportion p, both shown as percentages. The false-positive rate is 5% and the sensitivity is 90%."}

:::

:::esempio{titolo="Defect prevalence required for half the flags to be correct"}
An inspection flags $\dfrac45$ of defective items and $\dfrac15$ of nondefective items. Find the prevalence $p$ for which exactly half of the flagged items are defective. This happens when true positives and false positives have the same probability. By the multiplication rule, true positives have probability $\dfrac45p$ and false positives $\dfrac15(1-p)$, so the condition is

$$
\frac45p=\frac15(1-p).
$$

Multiplying by $5$ gives $4p=1-p$, so $5p=1$ and $p=\dfrac15$.

To check the result, among $100$ items there are $20$ defective and $80$ nondefective. The inspection flags $\dfrac45\cdot20=16$ defective items and $\dfrac15\cdot80=16$ nondefective items, so half of the flagged items are defective. If the prevalence falls below $\dfrac15$, true positives decrease and false positives increase, so the positive predictive value falls below $\dfrac12$.
:::

## Multiple events and mutual independence

:::definizione{#mutua titolo="Mutual independence"}
Toss a fair coin three times. Each of the $8$ sequences of heads and tails has probability $\dfrac18$, so the probability of three heads is $\dfrac18=\dfrac12\cdot\dfrac12\cdot\dfrac12$. For every pair of tosses, too, the probability of two heads is $\dfrac14=\dfrac12\cdot\dfrac12$. Independence of more than two events requires the product of the probabilities to hold for every group of events, as happens for the three tosses.

The events $A_1,\ldots,A_n$ are **mutually independent** if, for every subset $I$ of at least two indices, the probability of the intersection of the selected events equals the product of their probabilities:

$$
P\left(\bigcap_{i\in I} A_i\right)=\prod_{i\in I}P(A_i).
$$

The symbol $\bigcap_{i\in I}A_i$ denotes the intersection of the events $A_i$ with index in $I$, and the symbol $\prod$ (read “product”) denotes the product of the factors, just as $\sum$ denotes the sum. For three events $A$, $B$, and $C$, four identities must therefore hold, one for each pair and one for the triple:

- $P(A\cap B)=P(A)P(B)$;
- $P(A\cap C)=P(A)P(C)$;
- $P(B\cap C)=P(B)P(C)$;
- $P(A\cap B\cap C)=P(A)P(B)P(C)$.

As for two events, if $A_1,\ldots,A_n$ are mutually independent, so are the events obtained by replacing some of them with their complements. This is proved by repeating the calculation of the theorem **Independence and complements** one event at a time.

With mutually independent trials, the probability that all succeed is the product of the success probabilities of the individual trials. The same calculation gives the probability that all the components of a system work.
:::

:::attenzione{titolo="Pairwise independence without mutual independence"}
Toss two fair coins independently. Let $A$ be the event that the first coin shows heads, $B$ the event that the second coin shows heads, and $C$ the event that the outcomes match. Each event has probability $\dfrac{1}{2}$. Each pairwise intersection contains only heads–heads and therefore has probability $\dfrac{1}{4}$, the product of the corresponding probabilities.

The triple intersection also contains only heads–heads and therefore has probability $\dfrac{1}{4}$, while the product of the three probabilities is $\dfrac{1}{8}$. The pairs are independent, but the three events together are not mutually independent. Indeed, if both coins are known to show heads, the outcomes certainly match, so $P(C\mid A\cap B)=1$, while $P(C)=\dfrac12$.
:::

:::esempio{titolo="Components in series and in parallel"}
The **reliability** of a system is the probability that the system works. Three components operate mutually independently with probabilities $p_1$, $p_2$, and $p_3$; component $i$ fails with probability $1-p_i$.

- In series, the system works only when all three components work. By mutual independence, its reliability is $p_1p_2p_3$.
- In parallel, a single working component suffices, so the system fails only when all three components fail. The three failures are mutually independent, because they are the complements of mutually independent events. Therefore the probability that all three fail is the product $(1-p_1)(1-p_2)(1-p_3)$, and by the complement rule the reliability is $1-(1-p_1)(1-p_2)(1-p_3)$.

With $p_1=0.9$, $p_2=0.8$, and $p_3=0.7$, the series configuration has reliability $0.9\cdot0.8\cdot0.7=0.504$. In the parallel configuration the probability of complete failure is $0.1\cdot0.2\cdot0.3=0.006$, so the reliability is $1-0.006=0.994$.

::grafico{assi=0 xmin=-0.4 xmax=9 ymin=-0.3 ymax=6.6 poligoni="1.4,5.2 3,5.2 3,6 1.4,6;3.8,5.2 5.4,5.2 5.4,6 3.8,6;6.2,5.2 7.8,5.2 7.8,6 6.2,6;3.4,0 5,0 5,0.8 3.4,0.8;3.4,1.4 5,1.4 5,2.2 3.4,2.2;3.4,2.8 5,2.8 5,3.6 3.4,3.6" linee="0.6,5.6 1.4,5.6;3,5.6 3.8,5.6;5.4,5.6 6.2,5.6;7.8,5.6 8.6,5.6;0.6,1.8 2.2,1.8;2.2,0.4 2.2,3.2;2.2,0.4 3.4,0.4;2.2,1.8 3.4,1.8;2.2,3.2 3.4,3.2;5,0.4 6.2,0.4;5,1.8 6.2,1.8;5,3.2 6.2,3.2;6.2,0.4 6.2,3.2;6.2,1.8 7.8,1.8" etichette="1.65,5.5,C₁ · 0.9;4.05,5.5,C₂ · 0.8;6.45,5.5,C₃ · 0.7;3.65,3.1,C₁ · 0.9;3.65,1.7,C₂ · 0.8;3.65,0.3,C₃ · 0.7;0.6,6.25,in series;0.6,4.1,in parallel" titolo="The same three components connected in series (top) and in parallel (bottom). Each component's probability of operating appears beside its name. The reliabilities are $0.504$ and $0.994$."}
:::

:::esempio{titolo="Exactly two working components"}
Three components operate mutually independently with probabilities $\dfrac12$, $\dfrac23$, and $\dfrac34$. Let $F_i$ be the event that component $i$ works, so $F_i^c$ is the event that component $i$ fails. Exactly two components work when the first, the second, or the third fails and the other two work. Each configuration has a single failure, in a different position, so the three cases are disjoint. Since operating events and failures are mutually independent, the probability of each configuration is the product of the probabilities for the individual components:

$$
\begin{aligned}
P(F_1^c\cap F_2\cap F_3)&=\frac12\cdot\frac23\cdot\frac34=\frac14,\\[6pt]
P(F_1\cap F_2^c\cap F_3)&=\frac12\cdot\frac13\cdot\frac34=\frac18,\\[6pt]
P(F_1\cap F_2\cap F_3^c)&=\frac12\cdot\frac23\cdot\frac14=\frac1{12}.
\end{aligned}
$$

The sum is $\dfrac14+\dfrac18+\dfrac1{12}=\dfrac{11}{24}$. If the system requires *at least* two working components, add the configuration in which all three work. Its probability is $\dfrac12\cdot\dfrac23\cdot\dfrac34=\dfrac14$, so the system reliability is $\dfrac{11}{24}+\dfrac{6}{24}=\dfrac{17}{24}$. Changing “exactly” to “at least” changes the event of interest, while the probability of each configuration stays the same.
:::
