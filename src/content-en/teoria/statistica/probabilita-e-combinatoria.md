---
titolo: "Probability and combinatorics"
sommario: "Events and the axioms of probability, counting under constraints, and sampling from a finite population."
---

This chapter shows how to compute the probability of a result before observing it, when the possible results are finite in number. For example, a batch contains eight items, three of which are defective, and three items are chosen at random. With the methods of this chapter, the probability of finding exactly one defective item among the three turns out to be $\dfrac{15}{28}$, about $0.54$, and the probability of finding at least one is $\dfrac{23}{28}$, about $0.82$.

The possible results are listed, each is assigned a probability, and the probabilities of the results of interest are added. When all results have the same probability, the probability of an event is the number of favorable cases divided by the number of possible cases, so the problem becomes one of counting. There are $56$ samples of three items drawn from eight, while there are about seventeen trillion samples of ten items drawn from a hundred, so the second half of the chapter presents combinatorics, that is, the formulas that give these numbers without listing the cases.

Chapters 1 and 2 summarize data that have already been collected, for instance with relative frequencies; a probability, by contrast, is assigned before the result is observed. This chapter begins the part of the course on probability, from Chapter 3 to Chapter 7, which is used to measure the error made when moving from a sample to the whole population. The probabilities of the simple random sample of Chapter 1, drawn without replacement, are computed in this chapter. Chapter 4 studies how a probability changes when part of the result is already known and introduces independence. Chapter 5 uses the counts of this chapter to build the binomial and hypergeometric distributions, which return in the statistical inference of Chapters 8 to 12.

## Outcomes, events, and operations

:::definizione{#eventi titolo="Sample space and events"}
A coin is tossed twice and the result of each toss is recorded, with $T$ for heads and $C$ for tails; T and C stand for the Italian words for heads and tails. Before the tosses it is known that one of the four sequences $(T,T)$, $(T,C)$, $(C,T)$, $(C,C)$ will occur, but not which one. An experiment whose possible results are known, but whose actual result is not, is called a **random experiment**. Rolling a die and drawing an item from a batch to inspect it are also random experiments.

Each possible result of the experiment is called an outcome, or elementary outcome, and an individual outcome is denoted by $\omega$, read “omega.” The set of all outcomes is called the **sample space** and is denoted by $\Omega$, read “capital omega.” For the two coin tosses,

$$
\Omega=\{(T,T),(T,C),(C,T),(C,C)\}.
$$

The outcome $(T,C)$ means heads on the first toss and tails on the second, so it differs from the outcome $(C,T)$.

A question about the result, such as “did exactly one head come up?”, singles out the outcomes for which the answer is yes. A subset $A$ of the sample space, that is, a set $A\subseteq\Omega$, is called an **event**. In this chapter the sample space is always finite, and each of its subsets is an event. The event “exactly one head” is

$$
A=\{(T,C),(C,T)\}.
$$

The event $A$ is said to occur when the observed outcome belongs to $A$. With the outcome $(T,C)$ the event $A$ occurs; with the outcome $(C,C)$ it does not.
:::

:::definizione{#operazioni-eventi titolo="Union, intersection, and difference"}
Set operations produce new events. Let $A$ and $B$ be events defined on the same sample space.

- The intersection $A\cap B$ contains the outcomes common to both events, so it means “both $A$ and $B$ occur.”
- The union $A\cup B$ contains the outcomes that belong to at least one of the two events, so it means “$A$ or $B$ occurs, or both.”
- The difference $A\setminus B$ contains the outcomes of $A$ that do not belong to $B$, so it means “$A$ occurs and $B$ does not.”
- The complement $A^c=\Omega\setminus A$ contains all outcomes for which $A$ does not occur.

The symbol $\varnothing$ denotes the empty set. As an event it is called the impossible event, because it contains no outcomes and therefore never occurs; the event $\Omega$ always occurs and is called the certain event.

Events $A$ and $B$ are **mutually exclusive** if $A\cap B=\varnothing$, that is, if they cannot occur together. When a die is rolled, the events “a $1$ comes up” and “an even number comes up” are mutually exclusive. Mutually exclusive events are also called disjoint, which is the name for sets with no elements in common. Several events $A_1,\ldots,A_m$ are pairwise mutually exclusive if every pair of different events among them is mutually exclusive, so no outcome belongs to two of them.

The notation $A\subseteq B$ means that every outcome of $A$ belongs to $B$, so the occurrence of $A$ implies the occurrence of $B$.
:::

:::esempio{titolo="Events on a die"}
When a six-sided die is rolled, let $A=\{2,4,6\}$ be the event that the number is even, and let $B=\{4,5,6\}$ be the event that the number is at least $4$. The outcome $6$ meets both conditions, the outcome $5$ only the second and the outcome $2$ only the first, while $1$ and $3$ lie outside both events.

$$
A\cap B=\{4,6\},\qquad A\cup B=\{2,4,5,6\}.
$$

Likewise $A\setminus B=\{2\}$, $B\setminus A=\{5\}$, and $A^c=\{1,3,5\}$, which is the event that the number is odd.

The diagram highlights the outcomes that meet both conditions; the union also includes the two regions on either side.

::venn{zone="ab" nomi="A,B" elementi="a:2;ab:4,6;b:5;u:1,3" universo=1 ambiente="Ω" titolo="Even and at least four"}

:::

:::osservazione
The same experiment can be described with different sample spaces. In three tosses of a coin, one can record the sequences of results, of which there are eight:

$$
TTT,\quad TTC,\quad TCT,\quad CTT,\quad TCC,\quad CTC,\quad CCT,\quad CCC.
$$

One can also record only the number of heads, and then the sample space is $\{0,1,2,3\}$. This second space does not say on which toss the heads came up.

A coin is called fair if heads and tails have the same probability, $\dfrac12$; likewise, a die is fair if each of its six faces has probability $\dfrac16$. Several tosses are called independent if the result of one toss does not change the probabilities of the results of the others. The precise definition of independence is given in Chapter 4; this chapter uses only one of its consequences. In independent tosses of fair coins or fair dice, all sequences of results have the same probability, that is, they are equally likely. The same holds for any series of independent trials in which the results of each trial all have the same probability.

For three independent tosses of a fair coin, therefore, each of the eight sequences has probability $\dfrac18$. A head count of $1$ collects the three sequences $TCC$, $CTC$, $CCT$, a count of $2$ collects the three sequences $TTC$, $TCT$, $CTT$, and $0$ and $3$ each collect a single sequence. The head counts $0,1,2,3$ therefore have probabilities $\dfrac{1}{8}$, $\dfrac{3}{8}$, $\dfrac{3}{8}$, and $\dfrac{1}{8}$.

In the space $\{0,1,2,3\}$ the four outcomes are thus not equally likely, and their probabilities are obtained from the space of sequences. The same count of sequences gives the binomial distribution of Chapter 5.

::grafico{xmin=-0.6 xmax=3.8 ymin=-0.04 ymax=0.48 nomi="k,p" linee="0,0 0,0.125;1,0 1,0.375;2,0 2,0.375;3,0 3,0.125" punti="0,0.125;1,0.375;2,0.375;3,0.125" etichette="0,0.17,0.125;1,0.42,0.375;2,0.42,0.375;3,0.17,0.125" titolo="Probability of observing $k$ heads in three tosses. Each of the values $1$ and $2$ corresponds to three sequences."}
:::

## Axioms and the assignment of probabilities

:::definizione{#assiomi titolo="Axioms of probability"}
When a fair die is rolled, each face is assigned probability $\dfrac16$. The event “an even number comes up,” which contains three faces, is assigned probability $\dfrac16+\dfrac16+\dfrac16=\dfrac12$, and the certain event $\Omega$, which contains all six faces, is assigned probability $1$. If the die is rolled many times, the relative frequency of even numbers, defined in Chapter 1, approaches $\dfrac12$, as stated by the law of large numbers in Chapter 8.

On the finite sample space $\Omega$, a **probability measure** $P$ is a rule that assigns to each event $A$ a real number $P(A)$, read “probability of $A$,” in such a way that the following three properties, called the axioms of probability, hold.

- $P(A)\ge 0$ for every event $A$.
- $P(\Omega)=1$.
- If $A_1,\ldots,A_m$ are pairwise mutually exclusive events, then
  $$
  P\left(\bigcup_{i=1}^{m} A_i\right)=\sum_{i=1}^{m}P(A_i).
  $$

The third property is called additivity. The left-hand side is the probability of the event “one of the $A_i$ occurs,” and the right-hand side is the sum of their probabilities. For the die, the events “a $1$ comes up” and “an even number comes up” are mutually exclusive, so the event “a $1$ or an even number comes up” has probability $\dfrac16+\dfrac12=\dfrac23$.

On an infinite space, as for the continuous random variables of Chapter 6, one also specifies which subsets are events and requires additivity for infinitely many mutually exclusive events listed like the natural numbers; in this chapter the space is always finite. All the formulas of the chapter, such as the complement rule and the inclusion–exclusion formula, follow from the three axioms.
:::

::::teorema{#masse-elementari titolo="Probabilities of elementary outcomes"}
For a fair die, the probability of “an even number comes up” is the sum of the probabilities of the faces $2$, $4$, $6$. The theorem states that on a finite space every probability measure is computed in this way.

Let $\Omega=\{\omega_1,\ldots,\omega_N\}$ be a space with $N\ge 1$ outcomes. Assign to each outcome $\omega_i$ a number $p_i\ge 0$, called the weight of the outcome, so that the weights sum to $1$, that is, $\sum_{i=1}^N p_i=1$. Then the rule

$$
P(A)=\sum_{\omega_i\in A}p_i,
$$

which assigns to each event $A$ the sum of the weights of its outcomes, defines a probability measure on $\Omega$. Conversely, every probability measure on this space arises in this way, by setting $p_i=P(\{\omega_i\})$, where $\{\omega_i\}$ is the event consisting of the single outcome $\omega_i$. To compute the probability of an event, it is therefore enough to know the probabilities of the individual outcomes.

:::dimostrazione
The idea is to break each event down into its outcomes. First, the three axioms are checked for the rule defined by the sum. The weights are nonnegative, so their sums are nonnegative as well. The event $\Omega$ contains all the outcomes, so $P(\Omega)=\sum_{i=1}^N p_i=1$. If the events $A_1,\ldots,A_m$ are pairwise mutually exclusive, each outcome of their union belongs to exactly one of them, so the sum of the weights over the union splits into the sums of the weights over each event.

Conversely, let $P$ be a probability measure. Every event $A$ is the union of the events $\{\omega_i\}$ formed by its individual outcomes, and these events are pairwise mutually exclusive. By additivity, $P(A)$ is therefore the sum of the probabilities $p_i=P(\{\omega_i\})$. The numbers $p_i$ are nonnegative by the first axiom and have sum $P(\Omega)=1$ by the second.
:::
::::

:::esempio{titolo="Three outcomes with unequal probabilities"}
A wheel has three sectors $R,S,T$ with probabilities $\dfrac{1}{2}$, $\dfrac{1}{3}$, and $\dfrac{1}{6}$, respectively. The weights sum to $1$, because $\dfrac36+\dfrac26+\dfrac16=1$. The event $A=\{R,T\}$ has probability

$$
P(A)=\frac{1}{2}+\frac{1}{6}=\frac{2}{3}.
$$

The event $A$ contains two of the three outcomes, and the value $\dfrac23$ coincides with the share of outcomes only by chance. The event $\{S,T\}$ also contains two outcomes, but its probability is $\dfrac13+\dfrac16=\dfrac{1}{2}$.
:::

::::teorema{#complementare titolo="Complements and monotonicity"}
When a fair die is rolled, the probability of “a $6$ does not come up” is $1-\dfrac16=\dfrac56$. Moreover, the event “a $6$ comes up” is contained in “an even number comes up,” and indeed $\dfrac16\le\dfrac12$. The two rules hold in general.

For every event $A$,

$$
P(A^c)=1-P(A).
$$

If $A\subseteq B$, then $P(A)\le P(B)$; this property is called monotonicity. In particular, $P(\varnothing)=0$ and $0\le P(A)\le 1$ for every event $A$.

The complement rule is used when the opposite case contains fewer outcomes than the required event, as “no heads” compared with “at least one head.”

:::dimostrazione
The event $A$ and its complement are mutually exclusive, and their union is $\Omega$. By additivity, $P(A)+P(A^c)=P(\Omega)=1$, from which the formula follows.

If $A\subseteq B$, the events $A$ and $B\setminus A$ are mutually exclusive and their union is $B$. By additivity, $P(B)=P(A)+P(B\setminus A)$, and $P(B\setminus A)\ge0$ by the first axiom, so $P(B)\ge P(A)$.

Finally, $\varnothing=\Omega^c$, so $P(\varnothing)=1-P(\Omega)=0$. Every event is contained in $\Omega$, so $P(A)\le P(\Omega)=1$ by monotonicity, while $P(A)\ge0$ by the first axiom.

::venn{tipo="incluso" nomi="B,A" zone="a" universo=1 ambiente="Ω" titolo="If $A\subseteq B$, the event $B$ is the union of the disjoint events $A$ and $B\setminus A$. The latter is shaded."}
:::
::::

:::esempio{titolo="At least one favorable outcome"}
A fair coin is tossed four times, with independent tosses. Each toss has two results, so there are $2\cdot2\cdot2\cdot2=2^4=16$ possible sequences, and they are equally likely. The only sequence with no heads is $(C,C,C,C)$, which has probability $\dfrac{1}{16}$. The event “at least one head” is the complement of that sequence, so by the complement rule its probability is

$$
1-\frac{1}{16}=\frac{15}{16}.
$$
:::

:::definizione{#partizione titolo="Partitions of the sample space"}
When a die is rolled, the three events “a $1$ or $2$ comes up,” “a $3$ or $4$ comes up,” and “a $5$ or $6$ comes up” have no outcomes in common and together contain all the faces. Whatever the outcome, therefore, exactly one of the three events occurs.

A **partition** of $\Omega$ is a family of nonempty, pairwise mutually exclusive events whose union is $\Omega$. Each outcome therefore belongs to exactly one event in the family; the events of the partition are also called parts or cells. If the probabilities of the parts are known, the probability of an event made up of some whole parts is obtained, by additivity, as the sum of their probabilities.

Partitions are used in the chapter on conditional probability to distinguish the possible sources of the same result. For example, if a defective item can come from one of three machines, the three events “made by machine $1$,” “by machine $2$,” and “by machine $3$” form a partition.
:::

:::esempio{titolo="Mutually exclusive outcome categories"}
A batch can be accepted, sent for reinspection, or rejected. If the procedure assigns exactly one of these outcomes to each batch, the three categories form a partition. If the probability of reinspection is $0.12$ and the probability of rejection is $0.08$, the probability that the batch is not accepted at the first inspection is $0.12+0.08=0.20$. The sum is justified by additivity, because no batch is classified in both categories at once. Acceptance is the complement of “not accepted,” so its probability is $1-0.20=0.80$.

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=10.3 ymin=-1.1 ymax=4.2 poligoni="8,0 9.2,0 9.2,3 8,3;9.2,0 10,0 10,3 9.2,3" linee="0,0 10,0 10,3 0,3 0,0;8,0 8,3;9.2,0 9.2,3" segmenti="8.6,3,8.6,3.45;9.6,0,9.6,-0.45" etichette="2.6,1.5,Accepted  0.80;6.4,3.75,Reinspection  0.12;8.1,-0.8,Rejected  0.08" titolo="The three categories form a partition of Ω. The shaded part is the event “not accepted,” with probability $0.12+0.08=0.20$."}
:::

:::osservazione
With $n$ independent tosses of a fair coin there are $2^n$ sequences, all equally likely, and only one has no heads, so by the complement rule

$$
P(\text{at least one head})=1-\frac{1}{2^n}.
$$

The same scheme applies to $n$ repeated trials with two possible results, called success and failure, when each trial succeeds with the same probability $p$ and the trials are independent. Chapter 4 proves that in this case the probability of no successes is the product of the $n$ failure probabilities, that is, $(1-p)^n$. Taking the complement therefore gives

$$
P(\text{at least one success})=1-(1-p)^n.
$$

With three trials and $p=0.2$, for example, this gives $1-0.8^3=1-0.512=0.488$. With $p=\dfrac12$ the coin formula is recovered, because $\left(1-\dfrac12\right)^n=\dfrac{1}{2^n}$.
:::

## Unions of overlapping events

::::teorema{#inclusione-esclusione titolo="Inclusion–exclusion formula"}
When a fair die is rolled, let $A=\{2,4,6\}$ be the event “an even number comes up” and $B=\{4,5,6\}$ the event “at least $4$ comes up.” The sum $P(A)+P(B)=\dfrac36+\dfrac36=1$ differs from $P(A\cup B)=\dfrac46$, because the outcomes $4$ and $6$, common to the two events, have been counted twice. Subtracting their probability once, $P(A\cap B)=\dfrac26$, gives $1-\dfrac26=\dfrac46$, which is the correct value.

For two events $A,B$ on the same sample space, in general,

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

The formula is also used in reverse, when the probability of the union is known and the probability of the intersection is required.

:::dimostrazione
The idea is to separate the shared part. The events $A\setminus B$, $A\cap B$, and $B\setminus A$ are pairwise mutually exclusive. By additivity,

$$
\begin{aligned}
P(A)&=P(A\setminus B)+P(A\cap B),\\[6pt]
P(B)&=P(B\setminus A)+P(A\cap B),\\[6pt]
P(A\cup B)&=P(A\setminus B)+P(A\cap B)+P(B\setminus A),
\end{aligned}
$$

because $A$ is the union of the first two events, $B$ is the union of the last two, and $A\cup B$ is the union of all three. Adding the first two equalities, $P(A)+P(B)$ contains the probabilities of the two outer regions once and the probability of the intersection twice. Subtracting $P(A\cap B)$ once therefore gives the third line, that is, $P(A\cup B)$.
:::
::::

:::esempio{titolo="Two checks on the same component"}
A component is selected from a batch. The probability that it exceeds the mass limit is $0.08$, the probability that it exceeds the diameter limit is $0.10$, and the probability that it exceeds both is $0.03$. Exceeding at least one limit is the union of the two events, so its probability is

$$
0.08+0.10-0.03=0.15.
$$

The probability of exceeding exactly one limit is $0.15-0.03=0.12$, since the union also includes components exceeding both. The probability of staying within both limits is the probability of the complement of the union, $1-0.15=0.85$.
:::

:::osservazione
For three events $A,B,C$ the formula becomes

$$
\begin{aligned}
P(A\cup B\cup C)={}&P(A)+P(B)+P(C)\\[6pt]
&-P(A\cap B)-P(A\cap C)-P(B\cap C)\\[6pt]
&+P(A\cap B\cap C).
\end{aligned}
$$

An outcome common to all three events appears in the three individual probabilities and in the three pairwise intersections, which are subtracted; with the final term it is counted $3-3+1=1$ time. An outcome common to exactly two events appears in two individual probabilities and in one pairwise intersection, so it is counted $2-1=1$ time.

The same decomposition applies to counts. The number of elements of a finite set $A$ is called the cardinality of $A$ and is denoted by $|A|$. Among $40$ students, $18$ attend a lab, $13$ a seminar, and $9$ a supplementary course. The pairwise intersections, namely lab and seminar, lab and course, and seminar and course, contain $5$, $4$, and $3$ students, respectively, and $2$ students attend all three activities. The number of students attending at least one activity is then $18+13+9-5-4-3+2=30$, and the number attending none is $40-30=10$.

::venn{tipo="tre" zone="a,b,c,ab,ac,bc,abc" nomi="L,S,C" elementi="a:11;b:7;c:4;ab:3;ac:2;bc:1;abc:2;u:10" universo=1 ambiente="Ω" titolo="The regions in the union account for 30 students taking the lab, the seminar, or the course. Each number refers to a separate, disjoint region."}
:::

## Equally likely outcomes and the choice of sample space

:::definizione{#equiprobabilita titolo="Finite model with equally likely outcomes"}
When a fair die is rolled, the event “an even number comes up” contains three of the six faces and has probability $\dfrac36$, which is obtained by counting faces.

The outcomes of a finite space are called **equally likely** if they all have the same probability. Let $\Omega$ be a space with $N\ge 1$ equally likely outcomes. The probabilities of the $N$ outcomes are equal and sum to $1$, so each outcome has probability $\dfrac{1}{N}$. By the theorem on the probabilities of elementary outcomes, $P(A)$ is the sum of $|A|$ terms equal to $\dfrac1N$, where $|A|$ is the cardinality of $A$, that is, the number of its outcomes. This gives

$$
P(A)=\frac{|A|}{|\Omega|},
$$

that is, the number of favorable cases divided by the number of possible cases.

The numerator and denominator must be counted on the same sample space, with the same choice about order and repetition. If the outcomes of rolling two dice are ordered pairs, such as $(2,5)$ and $(5,2)$, the favorable outcomes are also counted as ordered pairs. Computing a probability thus comes down to two counts, which are the subject of combinatorics.
:::

:::esempio{titolo="Sums of two dice"}
Two fair dice are rolled independently. An outcome is an ordered pair $(i,j)$ of values, with $i$ on the first die and $j$ on the second. There are $6\cdot6=36$ pairs, and they are equally likely. The six pairs $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ give a sum of $7$, so its probability is $\dfrac{6}{36}=\dfrac{1}{6}$. For a sum of $11$, the possible pairs are $(5,6)$ and $(6,5)$, so the probability is $\dfrac{2}{36}=\dfrac{1}{18}$.
:::

:::attenzione{titolo="Grouped outcomes with different weights"}
The eleven possible sums of two fair dice are not equally likely. The sum $2$ comes from only one pair, $(1,1)$, whereas the sum $3$ comes from two, $(1,2)$ and $(2,1)$. If sums are recorded directly, each sum must therefore be assigned the total probability of the pairs that produce it. The same happens if pairs are grouped without regard to order. The pair of different values $\{2,5\}$ corresponds to two ordered pairs, $(2,5)$ and $(5,2)$, whereas the double $2$ corresponds only to the pair $(2,2)$.

Let $S$ be the sum of the two dice, and let $P(S=s)$ be the probability that the sum equals $s$. A quantity such as $S$, which takes a numerical value for each outcome, is called a random variable and is studied in Chapter 5. For $s$ between $2$ and $12$, the number of ordered pairs with sum $s$ is $6-|s-7|$; for $s=7$, for example, it is $6-0=6$. The probabilities of the sums therefore increase from $\dfrac{1}{36}$ to $\dfrac{6}{36}$ and then decrease symmetrically.

::grafico{xmin=0.6 xmax=12.8 ymin=-0.4 ymax=7 nomi="s,N" linee="2,0 2,1;3,0 3,2;4,0 4,3;5,0 5,4;6,0 6,5;7,0 7,6;8,0 8,5;9,0 9,4;10,0 10,3;11,0 11,2;12,0 12,1" punti="2,1;3,2;4,3;5,4;6,5;7,6;8,5;9,4;10,3;11,2;12,1" titolo="Number $N$ of ordered pairs with sum $s$. Dividing by $36$ gives $P(S=s)$, which is $\dfrac{6}{36}=\dfrac{1}{6}$ for $s=7$ and $\dfrac{1}{36}$ for $s=2$."}
:::

:::osservazione
A ball is drawn from an urn with three red balls and one blue ball, after mixing them so that each of the four balls has the same probability of being drawn. A draw in which every object present has the same probability of being drawn is called **uniform**; such a draw is also described as made uniformly at random.

There are two possible colors, but the two colors are not equally likely. Labeling each ball, $R_1$, $R_2$, $R_3$ for the red ones and $B$ for the blue one, the sample space is $\{R_1,R_2,R_3,B\}$ and its four outcomes are equally likely. The event “a red ball is drawn” is $\{R_1,R_2,R_3\}$, so its probability is $\dfrac{3}{4}$, and the blue ball has probability $\dfrac14$.

Equal likelihood is therefore established on the individual objects, which are given labels even when only the color is observed. The same device is used for permutations with indistinguishable objects and for draws from a batch.
:::

## Choices in stages and permutations

::::teorema{#principio-prodotto titolo="Multiplication principle"}
An outcome is constructed by $k$ successive choices. The first choice can be made in $a_1$ ways. Whatever the first choice, the second can be made in $a_2$ ways, and so on through the $k$-th choice, which can be made in $a_k$ ways. Then the number of complete outcomes is

$$
a_1a_2\cdots a_k.
$$

The options available at a step can depend on the earlier choices, provided their *number* stays the same. Sequences of two different letters are formed with the letters $A$, $B$, $C$. If the first letter is $A$, the second is $B$ or $C$; if the first is $B$, the second is $A$ or $C$. The letters allowed in the second position change, but there are always two of them, so there are $3\cdot2=6$ sequences. The formulas for permutations, ordered selections, and combinations follow from the multiplication principle.

:::dimostrazione
After the first choice there are $a_1$ partial sequences, one for each first choice. Each is extended by the second choice in $a_2$ ways, so after two choices there are $a_1a_2$ partial sequences. Each sequence of two choices is extended in $a_3$ ways, so after three choices there are $a_1a_2a_3$ sequences. Repeating the argument through choice $k$ gives the stated product.
:::

The outcomes can be represented by a tree of choices. From the starting point $a_1$ branches leave, and each branch splits in turn into $a_2$ branches. Each level of the tree corresponds to a choice, and each end point, called a leaf, corresponds to a complete outcome. With $a_1=2$ and $a_2=3$, each of the two first-level branches splits into three, so there are $2\cdot3=6$ leaves.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=7.4 ymin=0 ymax=6 linee="0,3 3,4.5;0,3 3,1.5;3,4.5 6,5.5;3,4.5 6,4.5;3,4.5 6,3.5;3,1.5 6,2.5;3,1.5 6,1.5;3,1.5 6,0.5" punti="0,3;3,4.5;3,1.5;6,5.5;6,4.5;6,3.5;6,2.5;6,1.5;6,0.5" etichette="3,5,a;3,1,b;6.6,5.5,a1;6.6,4.5,a2;6.6,3.5,a3;6.6,2.5,b1;6.6,1.5,b2;6.6,0.5,b3" titolo="Tree of choices with $a_1=2$ and $a_2=3$. The six leaves are the complete outcomes."}
::::

:::esempio{titolo="A code with distinct digits"}
A code consists of three distinct digits, and the first must be nonzero. There are $9$ choices for the first position, the digits from $1$ to $9$. Zero is allowed in the second position, but the digit already chosen is excluded, so there are again $9$ choices. For the third position the two digits already used are excluded, leaving $8$ digits. The total is $9\cdot9\cdot8=648$. The digits available in the second position change with the first digit, but their number is always $9$, so the multiplication principle applies.
:::

:::definizione{#permutazioni titolo="Permutations of distinct objects"}
Three books $A$, $B$, $C$ can be lined up on a shelf in six ways:

$$
ABC,\quad ACB,\quad BAC,\quad BCA,\quad CAB,\quad CBA.
$$

A **permutation** of $n$ distinct objects is an ordering that uses every object exactly once. The first position can be filled with any of the $n$ objects, the second with one of the $n-1$ remaining, and so on through the last, which receives the one object left. By the multiplication principle, the number of permutations is therefore

$$
n!=n(n-1)\cdots 2\cdot 1.
$$

The notation $n!$ is read “$n$ factorial”; for the three books, $3!=3\cdot2\cdot1=6$. By convention $0!=1$, because the empty set has exactly one ordering, the one with no positions. The factorial grows quickly, for example $10!=3\,628\,800$, so orderings are counted with the formula.
:::

:::esempio{titolo="A pair of consecutive objects"}
Five distinct books are to be arranged on a shelf. Two volumes from the same series must be adjacent. The two volumes are treated as a single block, so four units, the block and the other three books, are arranged in $4!=24$ ways. Within the block the two volumes can be placed in two orders, so the required number of arrangements is $4!\cdot 2=48$. The count repeats no arrangement, because each valid arrangement corresponds to one order of the four units and one order of the two volumes in the block.
:::

::::teorema{#permutazioni-ripetute titolo="Permutations with indistinguishable objects"}
The letters of the word ORO form the words $ORO$, $OOR$, $ROO$, that is, three words. If the two Os are distinguished as $O_1$ and $O_2$, there are $3!=6$ orderings; swapping $O_1$ and $O_2$, however, gives the same word, so there are $\dfrac{6}{2}=3$ distinct words.

Suppose $n$ objects divided into $r$ groups are to be arranged. Group $i$ contains $n_i$ indistinguishable objects, that is, objects identical to one another like the two Os of ORO, and $n_1+\cdots+n_r=n$. The number of distinguishable arrangements is

$$
\frac{n!}{n_1!\cdots n_r!}.
$$

For example, the letters of MAMMA, three Ms and two As, give $\dfrac{5!}{3!\,2!}=\dfrac{120}{12}=10$ distinct words.

:::dimostrazione
Temporarily assign a distinct label to each object, such as $O_1$ and $O_2$. The objects all become distinct, so there are $n!$ arrangements. Fix an unlabeled arrangement. The positions occupied by group $i$ are determined, but the $n_i$ labels of that group can be placed in those positions in $n_i!$ ways. The ways of placing the labels of different groups combine by the multiplication principle, so each unlabeled arrangement corresponds to exactly $n_1!\cdots n_r!$ labeled arrangements. Dividing $n!$ by this number therefore counts each unlabeled arrangement once.
:::
::::

## Ordered selections and combinations

:::definizione{#disposizioni titolo="Ordered selections of fixed length"}
Two-digit codes are formed with the digits $1$, $2$, $3$. If digits may be repeated, there are $3\cdot3=9$ codes, namely $11,12,13,21,22,23,31,32,33$. If the two digits must be distinct, there are $3\cdot2=6$ codes, namely $12,13,21,23,31,32$.

An **ordered selection** of length $k$ is an ordered sequence of $k$ elements chosen from a set of $n\ge 1$ elements. If repetition is allowed, each position has $n$ options and the number of ordered selections is $n^k$. If the elements must be distinct, $0\le k\le n$ is required, and the number of ordered selections, denoted by $D_{n,k}$, is

$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$

The product $n(n-1)\cdots(n-k+1)$ has $k$ factors, one for each position. When $k=0$ the two formulas give $n^0=1$ and $\dfrac{n!}{n!}=1$, that is, the single empty sequence. For example, assigning three distinct roles to three different people chosen from seven gives $D_{7,3}=7\cdot6\cdot5=210$ ordered selections, while there are $10^3=1000$ sequences of three digits from $0$ to $9$ with repetition. Ordered selections therefore count the choices in which two sequences with the same elements in a different order are different outcomes, such as the roles in a committee or the digits of a code.
:::

::::teorema{#combinazioni titolo="Combinations without repetition"}
A pair with no designated roles is chosen from four people $A$, $B$, $C$, $D$. There are six pairs, namely $\{A,B\}$, $\{A,C\}$, $\{A,D\}$, $\{B,C\}$, $\{B,D\}$, $\{C,D\}$. The ordered sequences of two distinct people, on the other hand, number $D_{4,2}=4\cdot3=12$, because each pair, for example $\{A,B\}$, appears twice, as $AB$ and as $BA$. Hence $\dfrac{12}{2}=6$.

For $0\le k\le n$, the number of subsets of size $k$ of a set of $n$ elements is

$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
$$

The symbol $\binom{n}{k}$ is read “$n$ choose $k$” and is called the **binomial coefficient**. The binomial coefficient counts choices of $k$ distinct objects in which only which objects are chosen matters, not their order. A committee of three members with no designated roles can be selected from eight candidates in $\binom{8}{3}=\dfrac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$ ways. Binomial coefficients count the samples drawn from a batch and return in the binomial distribution of Chapter 5.

:::dimostrazione
First count the ordered sequences of $k$ distinct elements, of which there are $D_{n,k}$. Each subset of $k$ elements gives $k!$ sequences that use all its elements, one for each order. Sequences coming from different subsets are different, so the $D_{n,k}$ sequences split into disjoint groups of $k!$ sequences, one for each subset. Therefore $D_{n,k}=k!\binom{n}{k}$, and dividing $D_{n,k}=\dfrac{n!}{(n-k)!}$ by $k!$ gives the formula.
:::
::::

:::osservazione
Choosing $k$ elements also specifies which $n-k$ elements are left out, so $\binom{n}{k}=\binom{n}{n-k}$. For example, $\binom83=\binom85=56$.

The subsets can also be counted separately according to whether or not they contain a particular element. In the first case, the other $k-1$ elements are chosen from the other $n-1$. In the second case, all $k$ elements are chosen from the other $n-1$. The two cases are mutually exclusive and cover all subsets, so for $1\le k<n$,

$$
\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}.
$$

This identity is called Pascal's rule. With $n=6$ and $k=2$, the pairs containing the specified element number $\binom51=5$ and those excluding it number $\binom52=10$. This gives $5+10=15=\binom62$.
:::

:::esempio{titolo="Positions of a symbol in a sequence"}
A string of seven symbols contains exactly three As and four Bs. It suffices to choose the three positions occupied by the As, since every remaining position holds a B. The positions of the As form a subset of three of the seven positions, so there are $\binom{7}{3}=35$ strings. The strings are ordered, but the set of positions of the As is counted without regard to order. The same number is obtained with the formula for permutations with indistinguishable objects, dividing the $7!$ labeled permutations by $3!\,4!$, because $\dfrac{5040}{6\cdot24}=35$.
:::

## Counting with restrictions

:::osservazione
When the number of possibilities at a step depends on the earlier choices, the multiplication principle does not apply directly. The set to be counted is then divided into mutually exclusive cases that together cover every required configuration; each case is counted with the multiplication principle or with combinations, and the results are added.

For example, a committee of three people with at least two technicians is chosen from four technicians and three administrators. There are $\binom42\binom31=18$ committees with exactly two technicians and $\binom43=4$ with three technicians, so the total is $18+4=22$.

If it is quicker to count the excluded cases, they are subtracted from the unrestricted total. There are $\binom73=35$ unrestricted committees; those with fewer than two technicians are $\binom33=1$, with no technicians, and $\binom41\binom32=12$, with one technician. Again $35-1-12=22$.
:::

:::esempio{titolo="An even last digit and a nonzero first digit"}
Three-digit numbers with distinct digits are formed from $0,1,2,3,4$. A number is even when its last digit is $0$, $2$, or $4$. If the last digit is $0$, the first has $4$ choices, the digits from $1$ to $4$, and the second has $3$. If the last digit is $2$ or $4$, the first can only be one of the other three nonzero digits, and the second has $3$ choices, because the two digits already used are excluded but zero may be used. The two cases are disjoint, so the total is

$$
4\cdot3+2\cdot3\cdot3=12+18=30.
$$

Zero must be distinguished from the nonzero even digits, because the final digit changes the number of digits that can occupy the first position.

::grafico{assi=0 xmin=0 xmax=10.5 ymin=0.4 ymax=5.8 linee="2.4,3 3.6,4.4 6.9,4.4;2.4,3 3.6,1.6 6.9,1.6" etichette="0.15,3,Final digit;3.85,4.75,Ends in 0;3.85,1.95,Ends in 2 or 4;7.2,4.3,4 × 3 = 12;7.2,1.5,2 × 3 × 3 = 18" titolo="The 12 numbers ending in 0 are added to the 18 ending in 2 or 4."}
:::

:::esempio{titolo="A committee representing two occupations"}
Four people are selected from five technicians and four administrators, with at least one member from each occupation. There are $\binom{9}{4}=126$ unrestricted selections. Of these, $\binom{5}{4}=5$ contain only technicians and $\binom{4}{4}=1$ contains only administrators. The two excluded cases are mutually exclusive, so the required count is $126-5-1=120$.

The same total is obtained by counting the compositions with one, two, or three technicians, each time also choosing the administrators who complete the committee. This gives $\binom51\binom43+\binom52\binom42+\binom53\binom41=20+60+40=120$.
:::

## Sampling without replacement

::::teorema{#estrazioni titolo="Uniform samples without replacement"}
Objects are drawn one at a time from a finite population, for example items from a batch. A draw is **without replacement** if the object drawn is not put back into the population, so it cannot be drawn a second time. It is with replacement if the object is put back before the next draw. In this theorem every draw is uniform, that is, each of the objects still present has the same probability of being drawn.

In a population of $N$ distinct objects, $R$ have a specified property and $N-R$ lack it. Draw $n$ objects without replacement, with $0\le n\le N$. Let $K$ be the number of objects drawn that have the property, and let $P(K=k)$ be the probability that there are exactly $k$ such objects. For every integer $k$ between $\max(0,n-N+R)$ and $\min(n,R)$ inclusive,

$$
P(K=k)=\frac{\binom{R}{k}\binom{N-R}{n-k}}{\binom{N}{n}}.
$$

The two bounds on $k$ are read as follows. The upper bound says that $k$ exceeds neither the number $n$ of objects drawn nor the number $R$ of objects with the property. The lower bound says that the objects without the property, $n-k$, do not exceed the $N-R$ available, so $k\ge n-(N-R)$. For example, if five objects are drawn from ten, seven with the property and three without, at most three objects lack the property, so $k$ ranges from $5-3=2$ to $5$. For values of $k$ outside this interval the event is impossible.

The probabilities $P(K=k)$, as $k$ varies, form the hypergeometric distribution, studied among the discrete distributions in Chapter 5.

:::dimostrazione
Every ordered sequence of $n$ distinct objects has the same probability of being drawn, because at each step each of the remaining objects has the same probability of being drawn. The common value is $\dfrac{1}{N(N-1)\cdots(N-n+1)}$, and the explicit calculation uses the multiplication rule of Chapter 4. Each subset of $n$ objects appears in $n!$ sequences, one for each order of drawing, so the subsets are equally likely as well.

The possible samples, that is, the subsets of $n$ objects, number $\binom{N}{n}$. A favorable sample is formed by choosing $k$ objects from the $R$ with the property, in $\binom Rk$ ways, and $n-k$ objects from the $N-R$ without it, in $\binom{N-R}{n-k}$ ways. The two choices combine by the multiplication principle, so the number of favorable samples is the product of the two binomial coefficients. In the equally likely model the probability is the ratio of favorable samples to possible samples.
:::
::::

:::esempio{titolo="Three items from a batch"}
A batch contains eight numbered, hence distinguishable, items, three of which are defective. Three items are drawn uniformly without replacement. Exactly one is defective if one of the three defective items and two of the five nondefective ones are chosen, so

$$
P(K=1)=\frac{\binom{3}{1}\binom{5}{2}}{\binom{8}{3}}
=\frac{3\cdot10}{56}=\frac{30}{56}=\frac{15}{28}.
$$

For at least one defective item, it suffices to exclude the samples made up entirely of nondefective items, of which there are $\binom53=10$. By the complement rule, the probability is $1-\dfrac{\binom{5}{3}}{\binom{8}{3}}=1-\dfrac{10}{56}=\dfrac{46}{56}=\dfrac{23}{28}$. The two events have different probabilities, because the second also includes samples with two or three defective items.

By the same formula, the numbers of samples with $k=0,1,2,3$ defective items are $\binom{5}{3}=10$, $30$, $\binom{3}{2}\binom{5}{1}=15$, and $\binom{3}{3}=1$. Their sum is $56$, because each sample has exactly one count of defective items.

::grafico{xmin=-0.7 xmax=3.9 ymin=-0.9 ymax=35 nomi="k,N" linee="0,0 0,10;1,0 1,30;2,0 2,15;3,0 3,1" punti="0,10;1,30,pieno;2,15;3,1" etichette="0.3,11.5,10;1.3,31.5,30;2.3,16.5,15;3.3,2.5,1" titolo="Number $N$ of samples containing $k$ defective items out of $\binom{8}{3}=56$ possible samples. The value $k=1$ gives $P(K=1)=\dfrac{30}{56}=\dfrac{15}{28}$."}
:::

:::attenzione{titolo="With and without replacement"}
An urn contains two red and two blue balls, and two balls are drawn uniformly. Without replacement, there are $\binom{4}{2}=6$ two-ball samples and only one contains both blue balls. The probability of two blue balls, that is, of no red balls, is therefore $\dfrac{1}{6}$.

With replacement, each ball is labeled, $R_1$, $R_2$, $B_1$, $B_2$. There are $4\cdot4=16$ ordered sequences of two draws. The draws are independent and in each draw the four balls have the same probability, so the $16$ sequences are equally likely. Those with two blue balls number $2\cdot2=4$, so the probability of two blue balls is $\dfrac{4}{16}=\dfrac14=\left(\dfrac{1}{2}\right)^2$.

The two probabilities differ because, without replacement, the first draw changes the composition of the urn. After a blue ball, one blue and two red balls remain, and the second blue ball has probability $\dfrac13$ instead of $\dfrac12$. The chapter on conditional probability studies the calculation for sequences of draws in which the probability of a result changes depending on the earlier results.
:::
