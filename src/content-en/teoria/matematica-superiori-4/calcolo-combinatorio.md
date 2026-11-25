---
titolo: "Combinatorics"
sommario: "How to count the ways to make a choice without listing them all, from the fundamental counting principle and tree diagrams to ordered selections, permutations, combinations, binomial coefficients, Pascal’s triangle, and the binomial theorem, with applications to anagrams, committees, codes, and handshakes."
---

## The fundamental counting principle

:::teorema{#principio-fondamentale titolo="The fundamental counting principle"}
Combinatorics counts the ways to make a choice without listing every possibility. Many choices consist of successive stages, such as choosing a shirt and then a pair of pants. The fundamental counting principle explains how to combine the numbers of choices at the individual stages.

Suppose a choice has $k$ successive stages. There are $n_1$ ways to complete the first stage and $n_2$ ways to complete the second, regardless of the outcome of the first. This continues through the $k$th stage, which can be completed in $n_k$ ways regardless of the outcomes of the preceding stages. The complete choice can therefore be made in
$$
n_1 \cdot n_2 \cdot \ldots \cdot n_k
$$
ways. For example, $3$ shirts and $2$ pairs of pants make $3 \cdot 2 = 6$ outfits, since each of the $3$ shirts can be worn with either pair of pants.
:::

:::definizione{#diagramma-albero titolo="Tree diagram"}
A **tree diagram** represents a choice made in stages. From a starting point called the *root*, one branch extends for each way to complete the first stage. From the end of each of these branches, one branch extends for each way to complete the second stage, and so on. Each path from the root to a final endpoint, called a *leaf*, corresponds to a complete choice, so the number of choices equals the number of leaves.

For shirts $M_1$, $M_2$, $M_3$ and pairs of pants $P_1$, $P_2$, there are $3$ branches from the root and $2$ branches from each of these. There are therefore $3 \cdot 2 = 6$ leaves, as the fundamental counting principle predicts.

::grafico{assi=0 uguale=1 legenda=0 linee="0,0 3,2;0,0 3,0;0,0 3,-2;3,2 6,2.6;3,2 6,1.4;3,0 6,0.6;3,0 6,-0.6;3,-2 6,-1.4;3,-2 6,-2.6" punti="0,0,pieno;3,2,pieno;3,0,pieno;3,-2,pieno;6,2.6,pieno;6,1.4,pieno;6,0.6,pieno;6,-0.6,pieno;6,-1.4,pieno;6,-2.6,pieno" etichette="2.8,2.45,M₁;2.8,0.45,M₂;2.8,-1.55,M₃;7,2.6,M₁ P₁;7,1.4,M₁ P₂;7,0.6,M₂ P₁;7,-0.6,M₂ P₂;7,-1.4,M₃ P₁;7,-2.6,M₃ P₂" xmin=-0.5 xmax=8 ymin=-3.2 ymax=3.2 titolo="Tree diagram of the outfits formed from $3$ shirts and $2$ pairs of pants. Each shirt has $2$ branches, giving $3 \cdot 2 = 6$ leaves"}

A tree can also be used when the number of branches varies from node to node. In that case the leaves are counted branch by branch.
:::

:::esempio{titolo="Choosing a meal in three stages"}
A restaurant offers $4$ first courses, $5$ main courses, and $3$ desserts. A meal consists of one first course, one main course, and one dessert. At each stage the number of choices is the same regardless of the preceding choices, so by the fundamental counting principle the number of meals is
$$
4 \cdot 5 \cdot 3 = 60 .
$$
If dessert is optional, the third stage has $4$ outcomes, namely one of the three desserts or no dessert. The number of meals is then $4 \cdot 5 \cdot 4 = 80$.
:::

:::teorema{#principio-somma titolo="The addition principle"}
Sometimes the possibilities fall into groups that have no cases in common. The total number of cases then equals the sum of the numbers of cases in the individual groups. In symbols, $|A|$ denotes the number of elements of a finite set $A$. If $A$ and $B$ are *disjoint* finite sets, meaning that $A \cap B = \varnothing$, then
$$
|A \cup B| = |A| + |B| .
$$
For example, there are $3$ direct trains and $2$ buses from one city to another. A traveler who chooses a single means of transportation has $3 + 2 = 5$ options, since the same trip cannot be both a train trip and a bus trip.
:::

:::esempio{titolo="Addition and multiplication in the same problem"}
Consider codes consisting of one, two, or three letters chosen from $A$, $B$, $C$, with repetition allowed. Codes of different lengths form disjoint groups, so we count them separately and then add. For each length, each position can be filled in $3$ ways. By the fundamental counting principle, there are therefore $3$ one-letter codes, $3 \cdot 3 = 9$ two-letter codes, and $3 \cdot 3 \cdot 3 = 27$ three-letter codes. By the addition principle the total number of codes is
$$
3 + 9 + 27 = 39 .
$$
:::

:::attenzione
The fundamental counting principle applies when the number of outcomes at each stage is the same regardless of the outcomes of the preceding stages. Toss a coin. If it shows heads ($T$), roll a die; if it shows tails ($C$), toss the coin again. The second stage has $6$ outcomes after heads and $2$ outcomes after tails, so the product $2 \cdot 6$ gives an incorrect result. Counting the leaves of the tree branch by branch gives $6 + 2 = 8$ outcomes.

::grafico{assi=0 uguale=1 legenda=0 linee="0,0 3,1.5;0,0 3,-2.2;3,1.5 6,3.5;3,1.5 6,2.7;3,1.5 6,1.9;3,1.5 6,1.1;3,1.5 6,0.3;3,1.5 6,-0.5;3,-2.2 6,-1.7;3,-2.2 6,-2.7" punti="0,0,pieno;3,1.5,pieno;3,-2.2,pieno;6,3.5,pieno;6,2.7,pieno;6,1.9,pieno;6,1.1,pieno;6,0.3,pieno;6,-0.5,pieno;6,-1.7,pieno;6,-2.7,pieno" etichette="2.8,1.95,T;2.8,-1.75,C;6.4,3.5,1;6.4,2.7,2;6.4,1.9,3;6.4,1.1,4;6.4,0.3,5;6.4,-0.5,6;6.4,-1.7,T;6.4,-2.7,C" xmin=-0.5 xmax=7.2 ymin=-3.2 ymax=4 titolo="There are $6$ branches after heads and $2$ after tails, giving $6 + 2 = 8$ outcomes"}

:::

:::osservazione{#insiemi-non-disgiunti titolo="Groups with overlapping cases"}
If the two groups have cases in common, the sum $|A| + |B|$ counts the elements of $A \cap B$ twice. To correct the count, subtract the number of these elements once:
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
Among the numbers from $1$ to $30$, the number divisible by $2$ is $15$, the number divisible by $3$ is $10$, and the number divisible by both, that is, by $6$, is $5$. Therefore the number divisible by $2$ or $3$ is $15 + 10 - 5 = 20$.

::venn{zone="a,ab,b" nomi="A,B" elementi="a:10;ab:5;b:5" titolo="Numbers from $1$ to $30$. Set $A$ contains the $15$ multiples of $2$ and set $B$ contains the $10$ multiples of $3$. The $5$ multiples of $6$ lie in $A \cap B$, so $|A \cup B| = 10 + 5 + 5 = 20$"}

:::

## Ordered selections without repetition

:::definizione{#disposizioni-semplici titolo="Ordered selections without repetition"}
Many problems involve choosing some objects and arranging them in order, as when recording the top three finishers in a race. Suppose there are $n$ distinct objects and a natural number $k$ with $1 \leq k \leq n$. For $n$ objects and a selection size of $k$, an **ordered selection without repetition** is a sequence of $k$ objects chosen from the $n$ objects, all distinct. Two selections are different if they contain different objects or if they contain the same objects in a different order. The number of ordered selections without repetition is denoted by $D_{n,k}$.

Using the letters $A$, $B$, and $C$ with $k = 2$, the ordered selections without repetition are
$$
AB, \quad AC, \quad BA, \quad BC, \quad CA, \quad CB ,
$$
so $D_{3,2} = 6$. The sequences $AB$ and $BA$ are distinct, since they contain the same letters in a different order.

::grafico{assi=0 uguale=1 legenda=0 linee="0,0 3,2.2;0,0 3,0;0,0 3,-2.2;3,2.2 6,2.7;3,2.2 6,1.7;3,0 6,0.5;3,0 6,-0.5;3,-2.2 6,-1.7;3,-2.2 6,-2.7" punti="0,0,pieno;3,2.2,pieno;3,0,pieno;3,-2.2,pieno;6,2.7,pieno;6,1.7,pieno;6,0.5,pieno;6,-0.5,pieno;6,-1.7,pieno;6,-2.7,pieno" etichette="2.8,2.65,A;2.8,0.45,B;2.8,-1.75,C;6.6,2.7,AB;6.6,1.7,AC;6.6,0.5,BA;6.6,-0.5,BC;6.6,-1.7,CA;6.6,-2.7,CB" xmin=-0.5 xmax=7.5 ymin=-3.2 ymax=3.2 titolo="Tree of ordered selections without repetition from $A$, $B$, $C$, taking $2$ at a time. The first letter can be chosen in $3$ ways and the second from the $2$ letters that remain, so $D_{3,2} = 3 \cdot 2 = 6$"}

:::

::::teorema{#numero-disposizioni-semplici titolo="Counting ordered selections without repetition"}
For $1 \leq k \leq n$, the number of ordered selections from $n$ objects taken $k$ at a time without repetition is the product of $k$ consecutive natural numbers in decreasing order, starting with $n$:
$$
D_{n,k} = n \cdot (n - 1) \cdot (n - 2) \cdot \ldots \cdot (n - k + 1) .
$$
For example, in a race with $10$ athletes, the number of possible podium finishes, that is, ordered triples of gold, silver, and bronze medalists, is $D_{10,3} = 10 \cdot 9 \cdot 8 = 720$. The last factor is $n - k + 1 = 10 - 3 + 1 = 8$.

:::dimostrazione
Fill the $k$ positions in the sequence one at a time and apply the fundamental counting principle. The first position can be filled with any of the $n$ objects, so there are $n$ choices. The objects must be different, so $n - 1$ objects remain for the second position, whichever object was chosen first. For the third position $n - 2$ remain, and so on. Before filling the $k$th position, $k - 1$ objects have already been used, so $n - (k - 1) = n - k + 1$ remain. The number of outcomes at each stage is independent of the preceding choices, so by the fundamental counting principle the number of sequences is $n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)$.
:::
::::

:::esempio{titolo="Three-digit numbers with distinct digits"}
Count the three-digit natural numbers whose digits are all different. The hundreds digit must be different from $0$, since otherwise the number would have only two digits, so it can be chosen in $9$ ways. The tens digit differs from the hundreds digit and can be $0$, so there are $9$ choices. The units digit differs from both digits already used, so there are $8$ choices. By the fundamental counting principle the total is
$$
9 \cdot 9 \cdot 8 = 648 .
$$
This count agrees with $D_{10,3} - D_{9,2} = 720 - 72 = 648$, since from the $720$ sequences of three distinct digits we subtract the $72$ that start with $0$.
:::

## Ordered selections with repetition

:::definizione{#disposizioni-ripetizione titolo="Ordered selections with repetition"}
A digit can appear more than once in a PIN. Suppose there are $n$ distinct objects and a natural number $k \geq 1$. For $n$ objects and a selection size of $k$, an **ordered selection with repetition** is a sequence of $k$ objects chosen from the $n$ objects, in which each object can appear more than once. The number of ordered selections with repetition is denoted by $D'_{n,k}$. Since objects can repeat, the selection size $k$ can exceed $n$.

Using the letters $A$ and $B$ with $k = 3$, the ordered selections with repetition are
$$
AAA, \quad AAB, \quad ABA, \quad ABB, \quad BAA, \quad BAB, \quad BBA, \quad BBB ,
$$
so $D'_{2,3} = 8$.
:::

::::teorema{#numero-disposizioni-ripetizione titolo="Counting ordered selections with repetition"}
For every $n \geq 1$ and $k \geq 1$,
$$
D'_{n,k} = n^k .
$$
For example, the number of PINs with $4$ digits, allowing $0$ even in the first position, is $D'_{10,4} = 10^4 = 10\,000$. The number of sequences of outcomes of $3$ rolls of a die is $D'_{6,3} = 6^3 = 216$.

:::dimostrazione
Fill the $k$ positions one at a time. Each object can repeat, so each position can be filled in $n$ ways regardless of the objects in the preceding positions. By the fundamental counting principle the number of sequences is $n \cdot n \cdot \ldots \cdot n$, with $k$ factors, or $n^k$.
:::
::::

:::attenzione
In the formula $n^k$ the base is the number of possible outcomes for *each* position and the exponent is the number of positions. When a die is rolled $4$ times, each roll has $6$ outcomes, so the number of sequences is $6^4 = 1296$. In contrast, $4^6 = 4096$ counts sequences of $6$ positions with $4$ outcomes each.
:::

:::esempio{titolo="Codes with letters and digits"}
A password consists of $3$ letters chosen from an alphabet of $26$ letters followed by $2$ digits. Both letters and digits can repeat. The letters form an ordered selection with repetition from $26$ objects taken $3$ at a time, and the digits form an ordered selection with repetition from $10$ objects taken $2$ at a time. By the fundamental counting principle the number of passwords is
$$
26^3 \cdot 10^2 = 17\,576 \cdot 100 = 1\,757\,600 .
$$
If the $3$ letters must be different, the letter portion becomes an ordered selection without repetition, and the number of passwords is $D_{26,3} \cdot 10^2 = 26 \cdot 25 \cdot 24 \cdot 100 = 1\,560\,000$.
:::

:::osservazione{#numero-sottoinsiemi titolo="Number of subsets of a set"}
Let $S$ be a set with $n$ elements. A subset of $S$ is determined by answering the question “Does this element belong to the subset?” with yes or no for each of the $n$ elements. The sequences of $n$ answers are ordered selections with repetition from $2$ objects taken $n$ at a time, so the number of subsets of $S$, including the empty set and $S$ itself, is
$$
D'_{2,n} = 2^n .
$$
For $S = \{a, b, c\}$, there are $2^3 = 8$ subsets: $\varnothing$, $\{a\}$, $\{b\}$, $\{c\}$, $\{a, b\}$, $\{a, c\}$, $\{b, c\}$, $\{a, b, c\}$. The binomial theorem gives the same count.
:::

## Permutations of distinct objects and factorials

:::definizione{#permutazioni-semplici titolo="Permutations of distinct objects"}
When *all* the available objects are arranged in order, such as $5$ books on a shelf, the sequence contains each object exactly once. A **permutation** of $n$ distinct objects is an ordered selection without repetition from $n$ objects taken $n$ at a time, that is, an ordering of all $n$ objects. The number of permutations of distinct objects is denoted by $P_n$. The permutations of the letters $A$, $B$, $C$ are
$$
ABC, \quad ACB, \quad BAC, \quad BCA, \quad CAB, \quad CBA ,
$$
so $P_3 = 6$.
:::

:::definizione{#fattoriale titolo="Factorial"}
For a natural number $n \geq 1$, the **factorial** of $n$, read “$n$ factorial,” is the product of the natural numbers from $1$ to $n$:
$$
n! = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1 .
$$
We also define $0! = 1$. The reason for this choice appears in the factorial formula for ordered selections. The first values are
$$
1! = 1, \quad 2! = 2, \quad 3! = 6, \quad 4! = 24, \quad 5! = 120, \quad 6! = 720, \quad 7! = 5040 ,
$$
and factorials grow very rapidly; for example, $10! = 3\,628\,800$. The definition gives the relation $n! = n \cdot (n - 1)!$ for $n \geq 1$, which can be used to simplify quotients. For example,
$$
\frac{8!}{6!} = \frac{8 \cdot 7 \cdot 6!}{6!} = 8 \cdot 7 = 56 ,
\qquad
\frac{(n + 1)!}{(n - 1)!} = (n + 1) \cdot n \quad \text{for } n \geq 1 .
$$
:::

::::teorema{#numero-permutazioni titolo="Counting permutations of distinct objects"}
For every $n \geq 1$, the number of permutations of $n$ distinct objects is
$$
P_n = n! .
$$
For example, $5$ different books can be arranged on a shelf in $5! = 120$ ways and $7$ people can line up in $7! = 5040$ ways.

:::dimostrazione
A permutation is an ordered selection without repetition of size $n$. In the theorem that counts ordered selections without repetition, set $k = n$. The last factor is $n - n + 1 = 1$, so
$$
P_n = D_{n,n} = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1 = n! .
$$
:::
::::

::::teorema{#disposizioni-fattoriali titolo="Counting ordered selections without repetition using factorials"}
For $1 \leq k \leq n$,
$$
D_{n,k} = \frac{n!}{(n - k)!} .
$$
This form is convenient in equations with unknown $n$ and in proofs. For example, $D_{7,3} = \dfrac{7!}{4!} = 7 \cdot 6 \cdot 5 = 210$. With $k = n$, the formula gives $D_{n,n} = \dfrac{n!}{0!}$, and this value equals $P_n = n!$ precisely because we set $0! = 1$.

:::dimostrazione
The idea is to extend the product $n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)$ to obtain $1$. Multiply and divide by $(n - k)! = (n - k) \cdot (n - k - 1) \cdot \ldots \cdot 1$:
$$
\begin{aligned}
D_{n,k} &= \frac{n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1) \cdot (n - k) \cdot \ldots \cdot 1}{(n - k) \cdot \ldots \cdot 1} \\[6pt]
&= \frac{n!}{(n - k)!} .
\end{aligned}
$$
The numerator contains all the natural numbers from $n$ to $1$, so it equals $n!$.
:::
::::

:::osservazione{#permutazioni-circolari titolo="Circular permutations"}
Seat $n$ people around a round table. Two arrangements that differ by a rotation are considered the same, since each person has the same neighbors on the right and left. Fix one person’s seat. The other $n - 1$ people can be arranged in the remaining seats in $(n - 1)!$ ways, and each arrangement around the table is obtained exactly once this way. The number of **circular permutations** of $n$ objects is therefore
$$
(n - 1)! = \frac{n!}{n} .
$$
For $4$ people, the number is $3! = 6$. The $4! = 24$ linear arrangements fall into groups of $4$. Each group has $4$ arrangements because all $4$ rotations give the same seating around the table.

::grafico{assi=0 uguale=1 legenda=0 curve="1.5*cos(t),1.5*sin(t),0,6.29;5+1.5*cos(t),1.5*sin(t),0,6.29" punti="0,1.5,pieno;-1.5,0,pieno;0,-1.5,pieno;1.5,0,pieno;5,1.5,pieno;3.5,0,pieno;5,-1.5,pieno;6.5,0,pieno" etichette="0,1.95,A;-1.95,0,B;0,-1.95,C;1.95,0,D;5,1.95,D;3.05,0,A;5,-1.95,B;6.95,0,C" xmin=-2.5 xmax=7.5 ymin=-2.5 ymax=2.5 titolo="The two arrangements differ by a rotation. Moving counterclockwise in either gives $A$, $B$, $C$, $D$, so they represent the same circular permutation"}

:::

## Permutations with repeated elements

::::teorema{#permutazioni-ripetute titolo="Permutations with repeated elements"}
A word containing repeated letters has fewer than $n!$ anagrams, since interchanging two identical letters does not produce a new word. Suppose $n$ objects are divided into $r$ groups. Objects in the same group are identical and objects in different groups are distinct. The first group contains $n_1$ objects, the second $n_2$, and so on, with $n_1 + n_2 + \ldots + n_r = n$. The number of **permutations with repeated elements** is
$$
P_n^{(n_1, n_2, \ldots, n_r)} = \frac{n!}{n_1! \cdot n_2! \cdot \ldots \cdot n_r!} .
$$
For example, the word $ANNA$ has $4$ letters, with $2$ occurrences of $A$ and $2$ occurrences of $N$, so it has $\dfrac{4!}{2! \cdot 2!} = \dfrac{24}{4} = 6$ anagrams:
$$
AANN, \quad ANAN, \quad ANNA, \quad NAAN, \quad NANA, \quad NNAA .
$$

:::dimostrazione
To distinguish identical objects and count how often each sequence occurs, number the objects in each group, for instance $A_1$, $A_2$, $N_1$, $N_2$. The $n$ objects are now all distinct and have $n!$ permutations. Fix a permutation with repeated elements, for example $ANNA$. The permutations of the numbered objects that give this sequence when the numbers are erased are obtained by permuting the $n_1$ objects in the first group in $n_1!$ ways, the $n_2$ objects in the second group in $n_2!$ ways, and so on. Therefore, by the fundamental counting principle, each permutation with repeated elements corresponds to $n_1! \cdot n_2! \cdot \ldots \cdot n_r!$ permutations of the numbered objects. Thus the required number $P$ satisfies
$$
P \cdot n_1! \cdot n_2! \cdot \ldots \cdot n_r! = n! ,
$$
and division gives the formula.
:::
::::

:::esempio{titolo="Anagrams of MATEMATICA"}
The word $MATEMATICA$ has $10$ letters: $3$ occurrences of $A$, $2$ occurrences of $M$, $2$ occurrences of $T$, and one occurrence each of $E$, $I$, $C$. Letters that occur only once contribute factors of $1! = 1$ to the denominator, so the number of anagrams is
$$
\frac{10!}{3! \cdot 2! \cdot 2!} = \frac{3\,628\,800}{6 \cdot 2 \cdot 2} = \frac{3\,628\,800}{24} = 151\,200 .
$$
:::

:::esempio{titolo="Paths on a grid"}
On a street grid, travel from intersection $O$ to intersection $P$, which is $4$ blocks to the right and $3$ blocks up, moving only right ($D$) or up ($A$). Each shortest path is a sequence of $7$ steps, consisting of $4$ steps marked $D$ and $3$ steps marked $A$. For example, the path in the figure is $DDADAAD$. Conversely, every sequence with $4$ occurrences of $D$ and $3$ occurrences of $A$ describes a path from $O$ to $P$. The paths are therefore the permutations of these $7$ letters with repeated elements:
$$
\frac{7!}{4! \cdot 3!} = \frac{5040}{24 \cdot 6} = 35 .
$$

::grafico{assi=0 uguale=1 legenda=0 unicolore=1 linee="0,0 0,3;1,0 1,3;2,0 2,3;3,0 3,3;4,0 4,3;0,0 4,0;0,1 4,1;0,2 4,2;0,3 4,3" vettori="0,0,1,0;1,0,2,0;2,0,2,1;2,1,3,1;3,1,3,2;3,2,3,3;3,3,4,3" punti="0,0,pieno,O;4,3,pieno,P" xmin=-0.8 xmax=4.8 ymin=-0.6 ymax=3.6 titolo="The path $DDADAAD$ from $O$ to $P$. Each shortest path has $4$ steps to the right and $3$ up, so the number of paths is $\dfrac{7!}{4! \cdot 3!} = 35$"}

:::

## Combinations without repetition

:::definizione{#combinazioni-semplici titolo="Combinations without repetition"}
For a committee of $3$ people, only its membership matters; the order in which the people were chosen is irrelevant. Suppose there are $n$ distinct objects and a natural number $k$ with $1 \leq k \leq n$. For $n$ objects and a selection size of $k$, a **combination without repetition** is a group of $k$ distinct objects chosen from the $n$ objects, disregarding order. In other words, it is a subset of $k$ elements of the set of $n$ objects. Two combinations are different if they differ in at least one object. The number of combinations without repetition is denoted by $C_{n,k}$.

Using the letters $A$, $B$, and $C$ with $k = 2$, the combinations without repetition are $\{A, B\}$, $\{A, C\}$, $\{B, C\}$, so $C_{3,2} = 3$. There are $D_{3,2} = 6$ ordered selections of the same size, twice as many, since each pair of letters can be written in $2$ orders.
:::

::::teorema{#numero-combinazioni titolo="Counting combinations without repetition"}
For $1 \leq k \leq n$,
$$
C_{n,k} = \frac{D_{n,k}}{k!} = \frac{n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)}{k!} = \frac{n!}{k! \, (n - k)!} .
$$
For example, the number of committees of $3$ people chosen from $8$ is
$$
C_{8,3} = \frac{8 \cdot 7 \cdot 6}{3!} = \frac{336}{6} = 56 .
$$

:::dimostrazione
Count the ordered selections in two ways. Every ordered selection without repetition of size $k$ is formed in two stages. First choose a group of $k$ objects, a combination, in $C_{n,k}$ ways. Then arrange the $k$ chosen objects in order, in $P_k = k!$ ways regardless of the group. By the fundamental counting principle,
$$
D_{n,k} = C_{n,k} \cdot k! ,
$$
so $C_{n,k} = \dfrac{D_{n,k}}{k!}$. Substituting $D_{n,k} = \dfrac{n!}{(n - k)!}$ gives the final form of the formula.
:::
::::

:::attenzione
The counting model changes when the selected objects have different roles. Among $8$ people the number of committees with $3$ members is $C_{8,3} = 56$. If a president, a vice president, and a secretary are elected, order matters, and the number of choices is $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$, or $56 \cdot 3!$, since the roles can be assigned in $3! = 6$ ways within each committee.
:::

:::esempio{titolo="Handshakes and diagonals"}
In a group of $n$ people, each person shakes hands with every other person exactly once. Each handshake is determined by the pair of people involved, and their order does not matter. The number of handshakes is therefore
$$
C_{n,2} = \frac{n \, (n - 1)}{2} .
$$
With $5$ people there are $\dfrac{5 \cdot 4}{2} = 10$ handshakes. If the people are represented by the vertices of a pentagon, each handshake is a segment joining two vertices, hence a side or a diagonal.

::grafico{assi=0 uguale=1 legenda=0 linee="0,2 -1.902,0.618 -1.176,-1.618 1.176,-1.618 1.902,0.618 0,2;0,2 -1.176,-1.618;0,2 1.176,-1.618;-1.902,0.618 1.176,-1.618;-1.902,0.618 1.902,0.618;-1.176,-1.618 1.902,0.618" punti="0,2,pieno;-1.902,0.618,pieno;-1.176,-1.618,pieno;1.176,-1.618,pieno;1.902,0.618,pieno" etichette="0,2.4,A;-2.3,0.7,B;-1.4,-2,C;1.4,-2,D;2.3,0.7,E" xmin=-3 xmax=3 ymin=-2.5 ymax=2.8 titolo="The handshakes among $5$ people correspond to the segments joining the $5$ vertices. There are $5$ sides and $5$ diagonals, giving $\dfrac{5 \cdot 4}{2} = 10$ segments in total"}

The diagonals of a polygon with $n$ sides are the segments joining pairs of nonadjacent vertices, so there are $\dfrac{n \, (n - 1)}{2} - n = \dfrac{n \, (n - 3)}{2}$ diagonals. A decagon has $\dfrac{10 \cdot 7}{2} = 35$ diagonals.
:::

:::esempio{titolo="Committees drawn from two groups"}
A class has $5$ boys and $4$ girls. A committee is formed with $2$ boys and $2$ girls. The boys can be chosen in $C_{5,2} = 10$ ways and the girls in $C_{4,2} = 6$ ways regardless of which boys are chosen. By the fundamental counting principle the number of committees is $10 \cdot 6 = 60$.
:::

:::teorema{#combinazioni-ripetizione titolo="Combinations with repetition"}
In a **combination with repetition** from $n$ objects taken $k$ at a time, we choose $k$ objects from $n$ types. Each type may be chosen more than once, and order does not matter. The number of such combinations is
$$
C'_{n,k} = \binom{n + k - 1}{k} = \frac{(n + k - 1)!}{k! \, (n - 1)!} ,
$$
where the symbol $\dbinom{n + k - 1}{k}$ denotes the binomial coefficient, equal to $C_{n + k - 1, k}$. For example, a cup with $4$ scoops of ice cream chosen from $3$ flavors, with repetition allowed, can be filled in $\dbinom{6}{4} = 15$ ways. To obtain the formula, represent each choice with $k$ dots and $n - 1$ bars separating the types. A choice of $2$ scoops of the first flavor, none of the second, and $2$ of the third is written as $\bullet\bullet\,|\,|\,\bullet\bullet$. A choice therefore corresponds to one way of choosing the $k$ positions for the dots among $n + k - 1$ positions.
:::

## Binomial coefficients and their properties

:::definizione{#coefficiente-binomiale titolo="Binomial coefficient"}
The number of combinations occurs in many formulas, so it has its own notation. For natural numbers $n$ and $k$ with $0 \leq k \leq n$, the **binomial coefficient** “$n$ choose $k$” is
$$
\binom{n}{k} = \frac{n!}{k! \, (n - k)!} .
$$
For $k \geq 1$ it equals $C_{n,k}$, so it counts the subsets of $k$ elements of a set with $n$ elements. We also have
$$
\binom{n}{0} = \binom{n}{n} = 1 ,
\qquad
\binom{n}{1} = n ,
$$
and the value $\dbinom{n}{0} = 1$ counts the unique subset with $0$ elements, the empty set. In calculations, the factor $(n - k)!$ can be canceled before multiplying. For example,
$$
\binom{6}{2} = \frac{6 \cdot 5}{2 \cdot 1} = 15 ,
\qquad
\binom{9}{4} = \frac{9 \cdot 8 \cdot 7 \cdot 6}{4 \cdot 3 \cdot 2 \cdot 1} = 126 .
$$
:::

::::teorema{#binomiali-complementari titolo="Symmetry of binomial coefficients"}
For $0 \leq k \leq n$,
$$
\binom{n}{k} = \binom{n}{n - k} .
$$
This property simplifies the calculation when $k$ is close to $n$. For example,
$$
\binom{20}{18} = \binom{20}{2} = \frac{20 \cdot 19}{2} = 190 .
$$

:::dimostrazione
Apply the definition to the right-hand side. Since $n - (n - k) = k$, we obtain
$$
\binom{n}{n - k} = \frac{n!}{(n - k)! \, \big( n - (n - k) \big)!} = \frac{n!}{(n - k)! \, k!} = \binom{n}{k} .
$$
The identity also has a counting interpretation. Choosing the $k$ elements that belong to a subset is equivalent to choosing the $n - k$ elements left out, so there are as many subsets with $k$ elements as there are with $n - k$ elements.
:::
::::

::::teorema{#legge-stifel titolo="Pascal’s identity"}
For $1 \leq k \leq n - 1$,
$$
\binom{n}{k} = \binom{n - 1}{k - 1} + \binom{n - 1}{k} .
$$
This identity computes binomial coefficients with upper index $n$ from those with upper index $n - 1$ using addition alone. For example,
$$
\binom{5}{2} = \binom{4}{1} + \binom{4}{2} = 4 + 6 = 10 .
$$

:::dimostrazione
Write the two terms on the right-hand side with a common denominator. By definition,
$$
\binom{n - 1}{k - 1} = \frac{(n - 1)!}{(k - 1)! \, (n - k)!} ,
\qquad
\binom{n - 1}{k} = \frac{(n - 1)!}{k! \, (n - 1 - k)!} .
$$
Since $k! = k \cdot (k - 1)!$ and $(n - k)! = (n - k) \cdot (n - k - 1)!$, the common denominator is $k! \, (n - k)!$. Multiply the numerator and denominator of the first fraction by $k$ and those of the second by $n - k$:
$$
\begin{aligned}
\binom{n - 1}{k - 1} + \binom{n - 1}{k} &= \frac{k \cdot (n - 1)!}{k! \, (n - k)!} + \frac{(n - k) \cdot (n - 1)!}{k! \, (n - k)!} \\[6pt]
&= \frac{(k + n - k) \cdot (n - 1)!}{k! \, (n - k)!} \\[6pt]
&= \frac{n \cdot (n - 1)!}{k! \, (n - k)!} = \frac{n!}{k! \, (n - k)!} = \binom{n}{k} .
\end{aligned}
$$
:::
::::

:::osservazione{#stifel-significato titolo="A counting interpretation of Pascal’s identity"}
Fix one of the $n$ elements, say $a$. The subsets with $k$ elements fall into two disjoint groups, those containing $a$ and those that do not. A subset containing $a$ is determined by its other $k - 1$ elements, chosen from the $n - 1$ elements different from $a$, so there are $\dbinom{n - 1}{k - 1}$ such subsets. A subset that does not contain $a$ has all $k$ of its elements among the $n - 1$ elements different from $a$, so there are $\dbinom{n - 1}{k}$ such subsets. The addition principle now gives Pascal’s identity. For $n = 5$, $k = 2$ and the elements $a$, $b$, $c$, $d$, $e$, the pairs containing $a$ are $4$ and those that do not contain it are $\dbinom{4}{2} = 6$.
:::

## Pascal’s triangle

:::definizione{#triangolo-tartaglia titolo="Pascal’s triangle"}
**Pascal’s triangle** is the triangular array of binomial coefficients. Row $n$, counting from $n = 0$, contains the following numbers in order:
$$
\binom{n}{0}, \quad \binom{n}{1}, \quad \ldots, \quad \binom{n}{n} .
$$
Each row starts and ends with $1$, since $\dbinom{n}{0} = \dbinom{n}{n} = 1$. By Pascal’s identity, every other entry is the sum of the two entries in the preceding row immediately above it to the left and to the right. For example, in row $5$, the entry $10$ is the sum of $4$ and $6$ in row $4$.

::grafico{assi=0 uguale=1 legenda=0 etichette="0,0,1;-0.55,-0.9,1;0.55,-0.9,1;-1.1,-1.8,1;0,-1.8,2;1.1,-1.8,1;-1.65,-2.7,1;-0.55,-2.7,3;0.55,-2.7,3;1.65,-2.7,1;-2.2,-3.6,1;-1.1,-3.6,4;0,-3.6,6;1.1,-3.6,4;2.2,-3.6,1;-2.75,-4.5,1;-1.65,-4.5,5;-0.55,-4.5,10;0.55,-4.5,10;1.65,-4.5,5;2.75,-4.5,1;-3.3,-5.4,1;-2.2,-5.4,6;-1.1,-5.4,15;0,-5.4,20;1.1,-5.4,15;2.2,-5.4,6;3.3,-5.4,1;-4.6,0,n = 0;-4.6,-0.9,n = 1;-4.6,-1.8,n = 2;-4.6,-2.7,n = 3;-4.6,-3.6,n = 4;-4.6,-4.5,n = 5;-4.6,-5.4,n = 6" segmenti="-1,-3.85,-0.65,-4.25;-0.1,-3.85,-0.45,-4.25" xmin=-5.5 xmax=4 ymin=-6 ymax=0.5 titolo="Rows $n = 0$ through $n = 6$ of Pascal’s triangle. By Pascal’s identity, each interior entry is the sum of the two entries above it, as in $4 + 6 = 10$"}

:::

:::esempio{titolo="Constructing row 7"}
Row $6$ is $1, \ 6, \ 15, \ 20, \ 15, \ 6, \ 1$. Adding adjacent entries gives the interior entries of row $7$:
$$
1 + 6 = 7, \quad 6 + 15 = 21, \quad 15 + 20 = 35, \quad 20 + 15 = 35, \quad 15 + 6 = 21, \quad 6 + 1 = 7 .
$$
Adding $1$ at the beginning and end gives row $7$ as $1, \ 7, \ 21, \ 35, \ 35, \ 21, \ 7, \ 1$. The definition can be used to check one value: $\dbinom{7}{3} = \dfrac{7 \cdot 6 \cdot 5}{3 \cdot 2 \cdot 1} = 35$.
:::

:::osservazione{#proprieta-tartaglia titolo="Symmetry and row sums"}
Each row of the triangle is symmetric about its center, since $\dbinom{n}{k} = \dbinom{n}{n - k}$ by the symmetry of binomial coefficients. The sum of the entries in row $n$ is $2^n$. For example, $1 + 4 + 6 + 4 + 1 = 16 = 2^4$ and $1 + 6 + 15 + 20 + 15 + 6 + 1 = 64 = 2^6$. This property follows from the binomial theorem.
:::

## The binomial theorem

::::teorema{#binomio-newton titolo="The binomial theorem"}
The coefficients of $(a + b)^2 = a^2 + 2ab + b^2$ and $(a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$ form rows $2$ and $3$ of Pascal’s triangle. The binomial theorem states that the same holds for every exponent. For every natural number $n$ and every pair of real numbers $a$, $b$,
$$
(a + b)^n = \binom{n}{0} a^n + \binom{n}{1} a^{n - 1} b + \binom{n}{2} a^{n - 2} b^2 + \ldots + \binom{n}{n} b^n ,
$$
which, using the summation symbol $\sum$, is written as
$$
(a + b)^n = \sum_{k = 0}^{n} \binom{n}{k} a^{n - k} b^k .
$$
The symbol $\sum$ denotes the sum of the terms obtained by letting $k$ take the values $0, 1, \ldots, n$. In each term, the sum of the exponents of $a$ and $b$ equals $n$. Row $4$ of the triangle gives
$$
(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4 .
$$

:::dimostrazione
Count the ways to obtain each term when multiplying the $n$ factors. The power $(a + b)^n$ is the product of $n$ factors equal to $a + b$. By the distributive property, the product is the sum of all the terms obtained by choosing either $a$ or $b$ in each factor and multiplying the chosen letters. Choosing $b$ in $k$ factors and $a$ in the remaining $n - k$ gives the term $a^{n - k} b^k$. It occurs once for each way of choosing the $k$ factors from which to take $b$, namely $\dbinom{n}{k}$ times. Summing over $k = 0, 1, \ldots, n$ gives the formula. For $n = 3$, the term $a b^2$ is obtained by choosing $b$ in the first and second factors, in the first and third, or in the second and third, so it occurs $\dbinom{3}{2} = 3$ times.
:::
::::

:::esempio{titolo="Expanding a binomial with a negative term"}
Expand $(2x - 1)^4$ with $a = 2x$ and $b = -1$. The coefficients in row $4$ are $1, 4, 6, 4, 1$, so
$$
\begin{aligned}
(2x - 1)^4 &= (2x)^4 + 4 \, (2x)^3 (-1) + 6 \, (2x)^2 (-1)^2 + 4 \, (2x) (-1)^3 + (-1)^4 \\[6pt]
&= 16x^4 - 32x^3 + 24x^2 - 8x + 1 .
\end{aligned}
$$
Since $b = -1$, the term containing $b^k$ has the sign of $(-1)^k$, so the signs alternate.
:::

:::attenzione
In the powers of both $b$ and $a$, the exponent applies to the sign and to the coefficient as well. In the expansion of $(2x - 1)^4$ the second term is $4 \, (2x)^3 (-1) = -32x^3$. Writing $4 \cdot 2x^3$ in place of $4 \, (2x)^3$ would give $8x^3$, since the exponent $3$ would then apply only to $x$ and not to the coefficient $2$.
:::

:::teorema{#termine-generale titolo="General term of the expansion"}
An individual term of an expansion can be found without writing out the others. In the expansion of $(a + b)^n$ in descending powers of $a$, the term in position $k + 1$ is
$$
T_{k + 1} = \binom{n}{k} a^{n - k} b^k ,
\qquad
0 \leq k \leq n .
$$
The value of $k$ is the exponent of $b$. For example, the coefficient of $x^3$ in the expansion of $(x + 2)^5$ is obtained when the exponent of $x$ is $5 - k = 3$, that is, for $k = 2$, and equals
$$
\binom{5}{2} \cdot 2^2 = 10 \cdot 4 = 40 .
$$
The term is therefore $40x^3$, the third term in the expansion.
:::

:::esempio{titolo="Term independent of x"}
Find the term independent of $x$ in the expansion of $\left( x^2 + \dfrac{2}{x} \right)^6$, for $x \neq 0$. With $a = x^2$ and $b = \dfrac{2}{x} = 2x^{-1}$, the general term is
$$
T_{k + 1} = \binom{6}{k} \left( x^2 \right)^{6 - k} \left( 2x^{-1} \right)^k = \binom{6}{k} \, 2^k \, x^{12 - 2k - k} = \binom{6}{k} \, 2^k \, x^{12 - 3k} .
$$
The term is independent of $x$ when the exponent is zero, that is, $12 - 3k = 0$, so $k = 4$. The required term is
$$
T_5 = \binom{6}{4} \cdot 2^4 = 15 \cdot 16 = 240 .
$$
:::

::::teorema{#somma-binomiali titolo="Sum of the binomial coefficients"}
For every natural number $n$,
$$
\binom{n}{0} + \binom{n}{1} + \ldots + \binom{n}{n} = 2^n ,
$$
and for $n \geq 1$ we also have
$$
\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \ldots + (-1)^n \binom{n}{n} = 0 .
$$
The first identity states that the sum of row $n$ of Pascal’s triangle is $2^n$. Since $\dbinom{n}{k}$ counts subsets of $k$ elements, the same identity counts all subsets of a set with $n$ elements, in agreement with the subset count obtained from ordered selections with repetition. For $n = 4$ we have $1 - 4 + 6 - 4 + 1 = 0$.

:::dimostrazione
Apply the binomial theorem for particular values of $a$ and $b$. With $a = b = 1$, every power of $a$ and of $b$ equals $1$, so
$$
2^n = (1 + 1)^n = \sum_{k = 0}^{n} \binom{n}{k} .
$$
With $a = 1$ and $b = -1$, the term in position $k + 1$ equals $\dbinom{n}{k} (-1)^k$, so
$$
0 = 0^n = (1 - 1)^n = \sum_{k = 0}^{n} (-1)^k \binom{n}{k} ,
$$
where $0^n = 0$ since $n \geq 1$.
:::
::::

## Counting problems

:::osservazione{#scelta-modello titolo="Identifying the counting model"}
The counting model depends on the answers to three questions about the problem. Does the order of the chosen objects matter? Can the objects repeat? Are all the available objects used?

| Order matters | Repetition allowed | Model | Count |
| --- | --- | --- | --- |
| Yes | No | Ordered selections without repetition | $D_{n,k} = \dfrac{n!}{(n - k)!}$ |
| Yes | Yes | Ordered selections with repetition | $D'_{n,k} = n^k$ |
| Yes, all objects are used | No | Permutations | $P_n = n!$ |
| No | No | Combinations without repetition | $C_{n,k} = \dbinom{n}{k}$ |
| No | Yes | Combinations with repetition | $C'_{n,k} = \dbinom{n + k - 1}{k}$ |

For example, a podium finish is an ordered selection without repetition, a PIN is an ordered selection with repetition, and a five-a-side soccer team is an unordered selection without repetition. A problem with constraints is often broken down into stages or cases, using the appropriate model for each part.
:::

:::esempio{titolo="Anagrams with constraints"}
The word $LIBRO$ has $5$ distinct letters, so it has $5! = 120$ anagrams. Count the anagrams that begin and end with a consonant in three stages. Choose the first letter from the consonants $L$, $B$, $R$ in $3$ ways and the last from the $2$ remaining consonants. The $3$ middle letters can be arranged in $3! = 6$ ways. The number of anagrams is therefore $3 \cdot 2 \cdot 6 = 36$.

To count the anagrams with the vowels $I$, $O$ next to each other, treat the pair of vowels as a single block. The objects to arrange are the block and the $3$ consonants, giving $4$ objects that can be arranged in $4! = 24$ ways. Within the block, the vowels can be arranged in $2! = 2$ ways ($IO$ or $OI$). There are $24 \cdot 2 = 48$ such anagrams, and the number with the vowels separated is $120 - 48 = 72$.
:::

:::esempio{titolo="Committees with at least one member from a given group"}
From $6$ boys and $4$ girls, choose a committee of $3$ people with at least one girl. The opposite case, no girls, is easier to describe, so count all the committees and subtract those consisting entirely of boys:
$$
\binom{10}{3} - \binom{6}{3} = 120 - 20 = 100 .
$$
The same number is obtained by splitting the committees into disjoint cases according to the number of girls and using the addition principle:
$$
\binom{4}{1} \binom{6}{2} + \binom{4}{2} \binom{6}{1} + \binom{4}{3} \binom{6}{0} = 4 \cdot 15 + 6 \cdot 6 + 4 \cdot 1 = 100 .
$$
:::

:::esempio{titolo="Handshakes: finding the number of people from the total"}
At a gathering everyone shook hands with each of the other people once, and there were $28$ handshakes. The number $n$ of people satisfies
$$
\binom{n}{2} = \frac{n \, (n - 1)}{2} = 28 ,
\qquad
\text{that is,}
\qquad
n^2 - n - 56 = 0 .
$$
The solutions of the equation are $n = 8$ and $n = -7$. The number of people is a natural number greater than or equal to $2$, so there are $8$ people.
:::
