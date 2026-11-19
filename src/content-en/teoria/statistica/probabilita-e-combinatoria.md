---
titolo: "Probability and combinatorics"
sommario: "Events and the axioms of probability, counting under constraints, and sampling from a finite population."
---

## Outcomes, events, and operations

:::definizione{#eventi titolo="Sample space and events"}
A random experiment has several possible outcomes. The **sample space** $\Omega$ is the set of elementary outcomes chosen to represent the experiment. An individual outcome is denoted by $\omega$. In the finite case, each subset $A\subseteq\Omega$ is an **event**. The event occurs if the observed outcome belongs to $A$.

Here T and C stand for the Italian words for heads and tails. In two coin tosses, the outcome $(T,C)$ records heads on the first toss and tails on the second. The event “exactly one head” includes both $(T,C)$ and $(C,T)$. The two outcomes belong to the same event even though they describe different sequences.
:::

:::definizione{#operazioni-eventi titolo="Union, intersection, and difference"}
Let $A$ and $B$ be events defined on the same sample space.

- The intersection $A\cap B$ contains the outcomes common to both events and therefore means that both occur.
- The union $A\cup B$ contains the outcomes that belong to at least one of the two events.
- The difference $A\setminus B$ contains the outcomes in $A$ that lie outside $B$.
- The complement $A^c=\Omega\setminus A$ contains all outcomes for which $A$ does not occur.

Events $A$ and $B$ are **mutually exclusive** if $A\cap B=\varnothing$, where $\varnothing$ denotes the empty set. The notation $A\subseteq B$ means that every outcome of $A$ belongs to $B$, so the occurrence of $A$ implies the occurrence of $B$.
:::

:::esempio{titolo="Events on a die"}
When a six-sided die is rolled, let $A=\{2,4,6\}$ be the event that the number is even, and let $B=\{4,5,6\}$ be the event that the number is at least $4$. The outcome $6$ meets both conditions. The outcome $5$ meets only the second, so it belongs to $B\setminus A$. The outcome $2$ belongs only to $A$, while $1$ and $3$ lie outside both events.

$$
A\cap B=\{4,6\},\qquad A\cup B=\{2,4,5,6\}.
$$

The diagram highlights the outcomes that meet both conditions. The union also includes the two regions on either side.

::venn{zone="ab" nomi="A,B" elementi="a:2;ab:4,6;b:5;u:1,3" universo=1 ambiente="Ω" titolo="Even and at least four"}

:::

:::osservazione
The definition of an outcome depends on the information of interest. If only the number of heads in three tosses is recorded, the possible recorded outcomes are $0,1,2,3$. The space of ordered sequences also preserves the positions of the heads. A count of $1$ corresponds to three sequences, whereas a count of $0$ corresponds to just one. The choice of sample space determines what information can be recovered from an outcome and which probabilities to assign to the individual outcomes.

For three independent tosses of a fair coin, the eight ordered sequences are equally likely. Head counts of $0,1,2,3$ correspond to $1$, $3$, $3$, and $1$ sequences, respectively, and thus have probabilities $\dfrac{1}{8}$, $\dfrac{3}{8}$, $\dfrac{3}{8}$, and $\dfrac{1}{8}$.

::grafico{xmin=-0.6 xmax=3.8 ymin=-0.04 ymax=0.48 nomi="k,p" linee="0,0 0,0.125;1,0 1,0.375;2,0 2,0.375;3,0 3,0.125" punti="0,0.125;1,0.375;2,0.375;3,0.125" etichette="0,0.17,0.125;1,0.42,0.375;2,0.42,0.375;3,0.17,0.125" titolo="Probability of observing $k$ heads in three tosses. Each of the values $1$ and $2$ corresponds to three sequences."}
:::

## Axioms and the assignment of probabilities

:::definizione{#assiomi titolo="Axioms of probability"}
On the finite sample space $\Omega$, a **probability measure** $P$ assigns a real number to each event. It has the following properties.

- $P(A)\ge 0$ for every event $A$.
- $P(\Omega)=1$.
- If $A_1,\ldots,A_m$ are pairwise mutually exclusive events, then
  $$
  P\left(\bigcup_{i=1}^{m} A_i\right)=\sum_{i=1}^{m}P(A_i).
  $$

The third property is additivity for disjoint events. On a general sample space, one specifies the family of events on which $P$ is defined and also requires additivity for countable sequences of pairwise disjoint events. All the counting problems in this chapter have finite sample spaces.
:::

::::teorema{#masse-elementari titolo="Probabilities of elementary outcomes"}
Let $\Omega=\{\omega_1,\ldots,\omega_N\}$, with $N\ge 1$. For each index $i$, let $p_i\ge 0$ be a number such that $\sum_{i=1}^N p_i=1$. Then the function
$$
P(A)=\sum_{\omega_i\in A}p_i
$$
defines a probability measure on $\Omega$. Conversely, every probability measure on this space is obtained by setting $p_i=P(\{\omega_i\})$. This characterization gives the probability of an event whenever the probabilities of individual outcomes are known.

:::dimostrazione
The idea is to decompose each event into individual outcomes. For the function defined by the sum, all terms are nonnegative and the sum over the whole space is $1$. If the events are disjoint, each outcome belongs to at most one of them, so the sum over their union equals the sum of the contributions from the individual events. Conversely, if $P$ satisfies the axioms, every event is the disjoint union of its singletons. By additivity, $P(A)$ is the sum of their probabilities.
:::
::::

:::esempio{titolo="Three outcomes with unequal probabilities"}
A spinner has three sectors $R,S,T$ with respective probabilities $\dfrac{1}{2}$, $\dfrac{1}{3}$, and $\dfrac{1}{6}$. The weights add to $1$. The event $A=\{R,T\}$ has probability
$$
P(A)=\frac{1}{2}+\frac{1}{6}=\frac{2}{3}.
$$
The event contains two of the three outcomes, but its probability equals that ratio only because of the particular weights assigned to $R$ and $T$. For example, the event $\{S,T\}$ also contains two outcomes and has probability $\dfrac{1}{2}$.
:::

::::teorema{#complementare titolo="Complements and monotonicity"}
For every event $A$, $P(A^c)=1-P(A)$. If $A\subseteq B$, then $P(A)\le P(B)$. In particular, $P(\varnothing)=0$ and $0\le P(A)\le 1$. The complement is useful when counting the cases in which a property is absent takes fewer cases than counting those in which it is present.

:::dimostrazione
The event $A$ and its complement are disjoint, and their union is $\Omega$. By additivity, $P(A)+P(A^c)=1$, which gives the complement formula. If $A\subseteq B$, the events $A$ and $B\setminus A$ are disjoint and their union is $B$. Thus $P(B)=P(A)+P(B\setminus A)\ge P(A)$. Finally, $\varnothing=\Omega^c$, and every event is a subset of $\Omega$.

::venn{tipo="incluso" nomi="B,A" zone="a" universo=1 ambiente="Ω" titolo="If $A\subseteq B$, the event $B$ is the union of the disjoint events $A$ and $B\setminus A$. The latter is shaded."}
:::
::::

:::esempio{titolo="At least one favorable outcome"}
In four independent tosses of a fair coin, the only sequence with no heads is $(C,C,C,C)$. The $2^4=16$ sequences are equally likely, so this outcome has probability $\dfrac{1}{16}$. By the complement rule, the probability of at least one head is $\dfrac{15}{16}$. The same strategy applies to the event that a sample contains at least one defective item. In that case, the probability of the complement depends on how the sample was drawn.
:::

:::definizione{#partizione titolo="Partitions of the sample space"}
A **partition** of $\Omega$ is a family of nonempty, pairwise disjoint events whose union is $\Omega$. Each outcome belongs to exactly one event in the family. If the probabilities of the parts are known, the probability of an event made up of whole parts is the sum of their weights. The chapter on conditional probability uses partitions to distinguish the possible sources of the same result.
:::

:::esempio{titolo="Mutually exclusive outcome categories"}
A batch can be accepted, sent for reinspection, or rejected. If the procedure assigns exactly one of these outcomes, the three categories form a partition. If the probability of reinspection is $0.12$ and the probability of rejection is $0.08$, the probability that the batch is not accepted at the first inspection is $0.12+0.08=0.20$. The probabilities can be added because no outcome belongs to both categories. The probability of acceptance is therefore $1-0.20=0.80$.

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=10.3 ymin=-1.1 ymax=4.2 poligoni="8,0 9.2,0 9.2,3 8,3;9.2,0 10,0 10,3 9.2,3" linee="0,0 10,0 10,3 0,3 0,0;8,0 8,3;9.2,0 9.2,3" segmenti="8.6,3,8.6,3.45;9.6,0,9.6,-0.45" etichette="2.6,1.5,Accepted  0.80;6.4,3.75,Reinspection  0.12;8.1,-0.8,Rejected  0.08" titolo="The three categories form a partition of Ω. The shaded part is the event “not accepted,” with probability $0.12+0.08=0.20$."}
:::

:::osservazione
Suppose a trial is repeated $n$ times, with independent outcomes and a constant success probability $p$. The probability of no successes is $(1-p)^n$. Indeed, every trial must be a failure, and independence allows the failure probabilities to be multiplied. Taking the complement therefore gives
$$
P(\text{at least one success})=1-(1-p)^n.
$$
Independence concerns the probabilities of the trial outcomes. The multiplication principle for counting concerns the number of ways an outcome can be formed. For independent tosses of a fair coin, both arguments yield the same calculation because all ordered sequences are equally likely.
:::

## Unions of overlapping events

::::teorema{#inclusione-esclusione titolo="Inclusion–exclusion formula"}
For two events $A,B$ on the same sample space,
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
The formula can also be used to recover the probability of the intersection from the probability of the union and the two individual probabilities.

:::dimostrazione
The idea is to isolate the shared part. The events $A\setminus B$, $A\cap B$, and $B\setminus A$ are pairwise disjoint, and their union is $A\cup B$. The sum $P(A)+P(B)$ counts the probabilities of the two outer regions once each and the probability of the intersection twice. Subtracting $P(A\cap B)$ once therefore gives the probability of the union.
:::
::::

:::esempio{titolo="Two checks on the same component"}
A component is selected from a batch. The probability that it exceeds the mass limit is $0.08$, the probability that it exceeds the diameter limit is $0.10$, and the probability that it exceeds both is $0.03$. Exceeding at least one limit is the union of the two events, so its probability is
$$
0.08+0.10-0.03=0.15.
$$
The probability of exceeding exactly one limit is $0.15-0.03=0.12$, since the union also includes components exceeding both. The probability of staying within both limits is $1-0.15=0.85$.
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
An outcome common to all three events is counted three times in the individual probabilities and three times in the pairwise intersections. The final term restores its contribution. An outcome belonging to exactly two events is counted twice in the first group and once in the second, leaving a single contribution.

The same decomposition applies to counts. Among $40$ students, $18$ attend a lab, $13$ a seminar, and $9$ a supplementary course. If the pairwise intersections contain $5$, $4$, and $3$ students, respectively, and $2$ attend all three activities, the number attending at least one is $18+13+9-5-4-3+2=30$.

::venn{tipo="tre" zone="a,b,c,ab,ac,bc,abc" nomi="L,S,C" elementi="a:11;b:7;c:4;ab:3;ac:2;bc:1;abc:2;u:10" universo=1 ambiente="Ω" titolo="The regions in the union account for 30 students taking the lab, the seminar, or the course. Each number refers to a separate, disjoint region."}
:::

## Equally likely outcomes and the choice of sample space

:::definizione{#equiprobabilita titolo="Finite model with equally likely outcomes"}
Let $\Omega$ be a finite space with $N\ge 1$ equally likely outcomes. Since the probabilities of the elementary outcomes add to $1$, each has probability $\dfrac{1}{N}$. The probability of an event $A$ is therefore
$$
P(A)=\frac{|A|}{|\Omega|},
$$
where $|A|$ is the number of outcomes in $A$. The numerator and denominator refer to the same sample space and use the same conventions about order and repetition.
:::

:::esempio{titolo="Sums of two dice"}
Two fair dice are rolled independently. An outcome is an ordered pair $(i,j)$, with $i$ on the first die and $j$ on the second. The $36$ pairs are equally likely. The six pairs $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ give a sum of $7$, so its probability is $\dfrac{6}{36}=\dfrac{1}{6}$. For a sum of $11$, the possible pairs are $(5,6)$ and $(6,5)$, giving probability $\dfrac{1}{18}$.
:::

:::attenzione{titolo="Grouped outcomes with different weights"}
The eleven possible sums of two independently rolled fair dice are not equally likely. The sum $2$ comes from only one pair, whereas the sum $3$ comes from two. If sums are recorded directly, each must therefore be assigned the total probability of the pairs that produce it. The same issue arises if pairs are grouped without regard to order. The pair of different values $\{2,5\}$ corresponds to two ordered pairs, whereas a double $2$ corresponds to only one.

For $s$ between $2$ and $12$, the number of ordered pairs with sum $s$ is $6-|s-7|$. The probabilities of the sums therefore increase from $\dfrac{1}{36}$ to $\dfrac{6}{36}$ and then decrease symmetrically.

::grafico{xmin=0.6 xmax=12.8 ymin=-0.4 ymax=7 nomi="s,N" linee="2,0 2,1;3,0 3,2;4,0 4,3;5,0 5,4;6,0 6,5;7,0 7,6;8,0 8,5;9,0 9,4;10,0 10,3;11,0 11,2;12,0 12,1" punti="2,1;3,2;4,3;5,4;6,5;7,6;8,5;9,4;10,3;11,2;12,1" titolo="Number $N$ of ordered pairs with sum $s$. Dividing by $36$ gives $P(S=s)$, which is $\dfrac{6}{36}=\dfrac{1}{6}$ for $s=7$ and $\dfrac{1}{36}$ for $s=2$."}
:::

:::osservazione
In experiments involving objects of the same color, it is usually the individual objects that are equally likely. A ball is drawn uniformly at random from an urn with three red balls and one blue one. There are two possible colors, but red balls account for three of the four elementary outcomes. The probability of red is therefore $\dfrac{3}{4}$. Labeling each ball makes it possible to count outcomes even when only the color is observed.
:::

## Choices in stages and permutations

::::teorema{#principio-prodotto titolo="Multiplication principle"}
An outcome is constructed in $k$ successive stages. Whatever choices have already been made, at stage $i$ there are exactly $a_i$ allowable continuations. The number of complete outcomes is $a_1a_2\cdots a_k$. The available continuations can vary from one branch to another, provided their number at each stage is constant.

:::dimostrazione
After the first stage there are $a_1$ partial outcomes. Each has $a_2$ continuations, so after two stages there are $a_1a_2$ partial outcomes. Each outcome of length two has $a_3$ continuations. Repeating the argument through stage $k$ gives the stated product.
:::

The outcomes can be represented by a tree of choices. Each level is a stage and each leaf is a complete outcome. With $a_1=2$ and $a_2=3$, each of the two first-stage branches has three continuations, so there are $2\cdot3=6$ leaves.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=7.4 ymin=0 ymax=6 linee="0,3 3,4.5;0,3 3,1.5;3,4.5 6,5.5;3,4.5 6,4.5;3,4.5 6,3.5;3,1.5 6,2.5;3,1.5 6,1.5;3,1.5 6,0.5" punti="0,3;3,4.5;3,1.5;6,5.5;6,4.5;6,3.5;6,2.5;6,1.5;6,0.5" etichette="3,5,a;3,1,b;6.6,5.5,a1;6.6,4.5,a2;6.6,3.5,a3;6.6,2.5,b1;6.6,1.5,b2;6.6,0.5,b3" titolo="Tree of choices with $a_1=2$ and $a_2=3$. The six leaves are the complete outcomes."}
::::

:::esempio{titolo="A code with distinct digits"}
A code consists of three distinct digits, and the first must be nonzero. There are $9$ choices for the first position. Zero is allowed in the second position, but the first digit cannot be reused, so there are again $9$ choices. There are $8$ digits left for the third position. The total is $9\cdot9\cdot8=648$. The number of continuations is constant even though the available digits change.
:::

:::definizione{#permutazioni titolo="Permutations of distinct objects"}
A **permutation** of $n$ distinct objects is an ordering that uses every object exactly once. There are $n$ choices for the first position, $n-1$ for the second, and so on through the last position. Thus the number of permutations is
$$
n!=n(n-1)\cdots 2\cdot 1.
$$
The notation $n!$ is read “$n$ factorial.” By convention $0!=1$ because the empty set has exactly one ordering, the one with no positions.
:::

:::esempio{titolo="A pair of consecutive objects"}
Five distinct books are to be arranged on a shelf. Two volumes from the same series must be adjacent. Treating the pair as a single block gives four units that can be arranged in $4!$ ways. The pair has two internal orders, so the required number of arrangements is $4!\cdot 2=48$. Each valid arrangement determines one order of the four units and one order within the pair.
:::

::::teorema{#permutazioni-ripetute titolo="Permutations with indistinguishable objects"}
Suppose $n$ objects divided into $r$ groups are to be arranged. Group $i$ contains $n_i$ indistinguishable objects, and $n_1+\cdots+n_r=n$. The number of distinguishable arrangements is
$$
\frac{n!}{n_1!\cdots n_r!}.
$$
For example, the letters of MAMMA have $\dfrac{5!}{3!\,2!}=10$ distinct arrangements.

:::dimostrazione
Temporarily assign a distinct label to each object. This gives $n!$ arrangements. For a fixed unlabeled arrangement, the positions occupied by group $i$ are fixed, but its $n_i$ labels can be arranged in $n_i!$ ways. Label assignments for different groups can be combined, so each unlabeled arrangement has exactly $n_1!\cdots n_r!$ labeled representatives. Dividing removes this multiplicity.
:::
::::

## Ordered selections and combinations

:::definizione{#disposizioni titolo="Ordered selections of fixed length"}
An **ordered selection** of length $k$ is a sequence of $k$ elements chosen from a set of $n\ge 1$ elements. If repetition is allowed, each position has $n$ options, giving $n^k$ ordered selections. If the elements must be distinct, $0\le k\le n$ is required and the count is
$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$
When $k=0$, both conventions give one empty sequence. For example, assigning three distinct roles to different candidates from a group of seven gives $7\cdot6\cdot5=210$ ordered selections.
:::

::::teorema{#combinazioni titolo="Combinations without repetition"}
For $0\le k\le n$, the number of subsets of size $k$ of a set of $n$ elements is
$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
$$
The number $\binom{n}{k}$ is the **binomial coefficient**. It counts selections of distinct objects when only the choice of members matters. A committee of three members with no designated roles can be selected from eight candidates in $\binom{8}{3}=56$ ways.

:::dimostrazione
First count the sequences of $k$ distinct elements. Each subset of $k$ elements gives $k!$ sequences containing all those elements, one per ordering. The groups of sequences belonging to different subsets are disjoint and have equal sizes. Dividing $D_{n,k}$ by $k!$ gives the formula.
:::
::::

:::osservazione
Choosing $k$ elements also specifies which $n-k$ elements are left out, so $\binom{n}{k}=\binom{n}{n-k}$. The selections can also be counted separately according to whether they include a particular element. If they include it, $k-1$ more elements must be chosen from the remaining $n-1$. If they exclude it, all $k$ elements are chosen from the remaining $n-1$. Thus, for $1\le k<n$,
$$
\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}.
$$
With $n=6$ and $k=2$, there are $5$ pairs containing the specified element and $10$ pairs excluding it.
:::

:::esempio{titolo="Positions of a symbol in a sequence"}
A string of seven symbols contains exactly three As and four Bs. It suffices to choose the three positions occupied by the As, since every remaining position holds a B. The A positions form a subset of the seven positions, so there are $\binom{7}{3}=35$ strings. The strings are ordered, but the subset specifying the positions is counted without regard to order. The same count results from dividing the $7!$ labeled permutations by $3!\,4!$.
:::

## Counting with restrictions

:::osservazione
If the number of continuations varies between branches, find the total by counting mutually exclusive cases separately. These cases must cover every required configuration. For example, committees with at least two technicians can be divided into those with exactly two and those with three or more. If it is easier to count committees with fewer than two technicians, their number can be subtracted from the total number of unrestricted committees.
:::

:::esempio{titolo="An even last digit and a nonzero first digit"}
Form three-digit numbers with distinct digits from $0,1,2,3,4$. For an even number, the last digit must be $0$, $2$, or $4$. If it is $0$, there are $4$ choices for the first digit and $3$ for the second. If it is $2$ or $4$, the first digit must be one of the other three nonzero digits and the second has $3$ choices. The cases are disjoint, so the total is
$$
4\cdot3+2\cdot3\cdot3=30.
$$
Zero must be treated separately from the nonzero even digits because the choice of final digit changes the number of digits available for the first position.

::grafico{assi=0 xmin=0 xmax=10.5 ymin=0.4 ymax=5.8 linee="2.4,3 3.6,4.4 6.9,4.4;2.4,3 3.6,1.6 6.9,1.6" etichette="0.15,3,Final digit;3.85,4.75,Ends in 0;3.85,1.95,Ends in 2 or 4;7.2,4.3,4 × 3 = 12;7.2,1.5,2 × 3 × 3 = 18" titolo="The 12 numbers ending in 0 are added to the 18 ending in 2 or 4."}
:::

:::esempio{titolo="A committee representing two occupations"}
Four people are selected from five technicians and four administrators, with at least one member from each occupation. There are $\binom{9}{4}=126$ unrestricted selections. Of these, $\binom{5}{4}=5$ contain only technicians and $\binom{4}{4}=1$ contains only administrators. The excluded cases are disjoint, so the required count is $126-5-1=120$. The same total can be found by counting compositions with one, two, or three technicians, provided the members from the other occupation are chosen in each case as well.
:::

## Sampling without replacement

::::teorema{#estrazioni titolo="Uniform samples without replacement"}
In a population of $N$ distinct objects, $R$ have a specified property and $N-R$ lack it. Draw $n$ objects without replacement, with $0\le n\le N$, choosing uniformly from the remaining objects at each stage. Let $K$ be the number of objects drawn that have the property. For every integer $k$ between $\max(0,n-N+R)$ and $\min(n,R)$ inclusive,
$$
P(K=k)=\frac{\binom{R}{k}\binom{N-R}{n-k}}{\binom{N}{n}}.
$$
The lower bound ensures that $n-k$ objects without the property can be chosen. The upper bound ensures that $k$ is compatible with both the population composition and the sample size. Outside this interval the event is impossible. The formula anticipates the hypergeometric distribution introduced in the chapter on discrete distributions.

:::dimostrazione
Sequences of $n$ uniform draws without replacement are equally likely. Each subset of $n$ distinct objects occurs in $n!$ sequences, so the subsets are equally likely as well. There are $\binom{N}{n}$ possible samples. A favorable sample is specified by choosing $k$ objects from the $R$ with the property and $n-k$ from the $N-R$ without it. The choices can be combined, so the numerator is the product of the corresponding binomial coefficients.
:::
::::

:::esempio{titolo="Three items from a batch"}
A batch contains eight distinguishable items, three of which are defective. Three are drawn uniformly without replacement. Exactly one is defective if one of the three defective items and two of the five nondefective ones are chosen, so
$$
P(K=1)=\frac{\binom{3}{1}\binom{5}{2}}{\binom{8}{3}}
=\frac{30}{56}=\frac{15}{28}.
$$
For the event that at least one is defective, it suffices to exclude samples made up entirely of nondefective items. The probability is $1-\dfrac{\binom{5}{3}}{\binom{8}{3}}=\dfrac{23}{28}$. The two events have different probabilities because the second also includes samples with two or three defective items.

By the same formula, the numbers of samples with $k=0,1,2,3$ defective items are $\binom{5}{3}=10$, $30$, $\binom{3}{2}\binom{5}{1}=15$, and $\binom{3}{3}=1$, respectively. Their sum is $56$ because each sample has exactly one count of defective items.

::grafico{xmin=-0.7 xmax=3.9 ymin=-0.9 ymax=35 nomi="k,N" linee="0,0 0,10;1,0 1,30;2,0 2,15;3,0 3,1" punti="0,10;1,30,pieno;2,15;3,1" etichette="0.3,11.5,10;1.3,31.5,30;2.3,16.5,15;3.3,2.5,1" titolo="Number $N$ of samples containing $k$ defective items out of $\binom{8}{3}=56$ possible samples. The value $k=1$ gives $P(K=1)=\dfrac{30}{56}=\dfrac{15}{28}$."}
:::

:::attenzione{titolo="Replacement and the probability of a complement"}
Two balls are drawn without replacement from an urn containing two red and two blue balls. There are $\binom{4}{2}=6$ two-ball samples and only one contains both blue balls. The probability of drawing no red balls is therefore $\dfrac{1}{6}$. For two independent uniform draws with replacement, the probability of two blue balls is $\left(\dfrac{1}{2}\right)^2=\dfrac{1}{4}$. Without replacement, the first draw changes the composition of the urn. The chapter on conditional probability formalizes the calculation for sequences in which probabilities depend on earlier outcomes.
:::
