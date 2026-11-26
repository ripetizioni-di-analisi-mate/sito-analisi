---
titolo: Combinatorics
sommario: Count selections and arrangements without listing them all. Learn how to recognize when a quiz question calls for the multiplication principle, permutations, ordered selections, or combinations.
---

## The fundamental counting principle

:::teorema{#principio-moltiplicazione titolo="Multiplication principle"}
Combinatorics studies how to count the ways to select or arrange objects without listing them one by one. Its basic tool is the **multiplication principle**, also called the fundamental counting principle. Suppose a choice has two successive stages. If there are $m$ ways to complete the first stage and, for each of them, $n$ ways to complete the second, the number of ways to complete both stages is
$$
m \cdot n
$$
because each of the $m$ choices in the first stage can be paired with $n$ choices in the second. The complete choices therefore form $m$ groups of $n$ choices each. The principle extends to more stages. A restaurant offers $3$ first courses, $4$ main courses, and $2$ desserts, so a meal consisting of one of each can be chosen in $3 \cdot 4 \cdot 2 = 24$ ways.
:::

:::esempio{#diagramma-ad-albero titolo="Tree diagrams"}
A **tree diagram** shows the choices at each stage. Draw one branch from the starting point for each possible choice at the first stage. From the end of each branch, draw one branch for each possible choice at the second stage, and continue in the same way. Every path from the starting point to an endpoint represents a complete choice, so counting the endpoints counts the choices. With $2$ first courses, pasta and rice, and $3$ main courses, meat, fish, and vegetables, the tree has $2$ branches at the first stage and $3$ branches from each of those. There are $2 \cdot 3 = 6$ complete choices.

::grafico{assi=0 uguale=1 xmin=-1 xmax=12 ymin=-0.8 ymax=5.8 linee="0,2.5 3,4;0,2.5 3,1;3,4 6,5;3,4 6,4;3,4 6,3;3,1 6,2;3,1 6,1;3,1 6,0" punti="0,2.5,pieno;3,4,pieno;3,1,pieno;6,5,pieno;6,4,pieno;6,3,pieno;6,2,pieno;6,1,pieno;6,0,pieno" etichette="1.9,4.3,pasta;2.1,0.35,rice;6.4,4.85,pasta and meat;6.4,3.85,pasta and fish;6.4,2.85,pasta and vegetables;6.4,1.85,rice and meat;6.4,0.85,rice and fish;6.4,-0.15,rice and vegetables" titolo="Tree diagram for $2$ first courses and $3$ main courses. There are $2 \cdot 3 = 6$ paths, one for each meal."}

A tree diagram also helps when the number of choices at one stage depends on the choice made at the previous stage. In that case the multiplication principle does not apply directly. Count the endpoints of the tree instead.
:::

:::teorema{#principio-somma titolo="Addition principle"}
Suppose the possible choices fall into two nonoverlapping groups, with $m$ choices in the first and $n$ in the second. The total number of choices is
$$
m + n .
$$
The addition principle applies when making *a single* choice from different alternatives. The multiplication principle applies when making several choices in succession. Someone traveling from Rome to Milan can take one of $5$ morning trains or one of $3$ flights, giving $5 + 3 = 8$ possibilities. Someone taking a train from Rome to Milan and then a bus from Milan to Como, with $4$ buses available, has $5 \cdot 4 = 20$ possibilities.
:::

## Factorials and permutations

:::definizione{#fattoriale titolo="Factorials"}
The **factorial** of a natural number $n \geq 1$ is the product of all the natural numbers from $1$ through $n$. It is written $n!$.
$$
n! = n \cdot (n - 1) \cdot (n - 2) \cdots 2 \cdot 1 .
$$
By convention, $0! = 1$. The first few values are $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$, and $7! = 5040$. Factorials grow rapidly, but we can simplify a quotient without evaluating each factorial in full because $n! = n \cdot (n - 1)!$. For example,
$$
\frac{8!}{6!} = \frac{8 \cdot 7 \cdot 6!}{6!} = 8 \cdot 7 = 56 .
$$
:::

:::definizione{#permutazioni-semplici titolo="Permutations of distinct objects"}
A **permutation** of $n$ distinct objects is a way to arrange them all in a row, that is, to put them in order. The number of permutations of $n$ objects is
$$
P_n = n! .
$$
The formula follows from the multiplication principle. There are $n$ choices for the first position, $n - 1$ objects left for the second, $n - 2$ for the third, and so on until just one object remains for the last position. Permutations count the ways to arrange people in line, books on a shelf, or exams on a schedule. Five people can line up at a service counter in $P_5 = 5! = 120$ different ways.
:::

:::esempio{titolo="Permutations of three letters"}
There are $3! = 6$ permutations of the letters $A$, $B$, and $C$.
$$
ABC, \quad ACB, \quad BAC, \quad BCA, \quad CAB, \quad CBA .
$$
The first two start with $A$, the next two with $B$, and the last two with $C$. Once the first letter is fixed, the other two can be arranged in $2! = 2$ ways, giving $3 \cdot 2 = 6$ permutations.

::grafico{assi=0 uguale=1 xmin=-1 xmax=10 ymin=0 ymax=7 linee="0,3.5 3,5.5;3,5.5 6,6;3,5.5 6,5;0,3.5 3,3.5;3,3.5 6,4;3,3.5 6,3;0,3.5 3,1.5;3,1.5 6,2;3,1.5 6,1" punti="0,3.5,pieno;3,5.5,pieno;6,6,pieno;6,5,pieno;3,3.5,pieno;6,4,pieno;6,3,pieno;3,1.5,pieno;6,2,pieno;6,1,pieno" etichette="6.4,5.85,ABC;6.4,4.85,ACB;1.9,5.75,A;6.4,3.85,BAC;6.4,2.85,BCA;1.9,3.8,B;6.4,1.85,CAB;6.4,0.85,CBA;1.9,0.6,C" titolo="Permutations of $A$, $B$, and $C$. There are $3$ branches for the first letter, $2$ for the second, and $1$ for the third, giving $3 \cdot 2 \cdot 1 = 6$ paths."}

:::

:::osservazione{#vincoli-di-posizione titolo="Permutations with restrictions"}
When certain objects must be next to each other, treat them as a single block. Suppose Anna and Bruno must stand next to each other in a line of $5$ people. Their block and the other $3$ people make $4$ items that can be arranged in $4!$ ways. Within the block, Anna and Bruno can stand in $2!$ orders. By the multiplication principle, the number of lineups is
$$
4! \cdot 2! = 24 \cdot 2 = 48 .
$$
When one object has a fixed position, only the others need to be arranged. If Anna must stand first, there are $4! = 24$ lineups.
:::

:::osservazione{#tavolo-rotondo titolo="Seating people around a round table"}
At a round table, seatings that differ only by a rotation can be considered identical. Each person has the same neighbor on the right and the same neighbor on the left in both seatings. With this convention, fix one person’s seat and arrange the other $n - 1$ people, giving $(n - 1)!$ seatings. Six friends can sit around a round table in $5! = 120$ ways. If rotations are considered different, for example because the seats are numbered, there are $6! = 720$ seatings.
:::

## Permutations with repeated objects

:::teorema{#permutazioni-con-ripetizione titolo="Permutations with repeated objects"}
Arrange $n$ objects in a row. Suppose $k_1$ are identical to one another, another $k_2$ are identical to one another, and so on through a final group of $k_r$ identical objects, with $k_1 + k_2 + \dots + k_r = n$. The number of distinct arrangements is
$$
P_n^{(k_1, k_2, \dots, k_r)} = \frac{n!}{k_1! \cdot k_2! \cdots k_r!} .
$$
If the objects were all distinct, there would be $n!$ arrangements. Rearranging the $k_1$ identical objects in the first group leaves the row unchanged, and there are $k_1!$ ways to rearrange them. The same reasoning applies to each of the other groups. Thus $n!$ counts every distinct arrangement $k_1! \cdot k_2! \cdots k_r!$ times. Dividing by this product gives the number of distinct arrangements. With $3$ red flags and $2$ blue flags, identical within each color, there are
$$
\frac{5!}{3! \cdot 2!} = \frac{120}{12} = 10
$$
distinct arrangements.
:::

:::esempio{#anagrammi titolo="Anagrams"}
An **anagram** of a word is any arrangement of its letters, even one that does not form a word. If all the letters are different, the anagrams are the permutations of distinct letters. If some letters repeat, count permutations with repeated letters.

- The Italian word ROMA has $4$ distinct letters and therefore $4! = 24$ anagrams.
- The Italian word CAMERA has $6$ letters. The letter A occurs $2$ times, so there are $\dfrac{6!}{2!} = 360$ anagrams.
- The word BANANA has $6$ letters. A occurs $3$ times and N occurs $2$ times, so there are $\dfrac{6!}{3! \cdot 2!} = \dfrac{720}{12} = 60$ anagrams.

A letter that occurs only once would contribute the factor $1! = 1$ to the denominator, so it can be omitted from the denominator.
:::

## Ordered selections without repetition

:::definizione{#disposizioni-semplici titolo="Ordered selections without repetition"}
To make an **ordered selection without repetition** from $n$ distinct objects, choose $k$ of them and assign them to $k$ positions, with $k \leq n$. The result is a row of $k$ different objects chosen from the $n$ available. Two selections are different if they contain different objects or the same objects in a different order. The number of ordered selections without repetition is
$$
D_{n,k} = n \cdot (n - 1) \cdot (n - 2) \cdots (n - k + 1) = \frac{n!}{(n - k)!} ,
$$
the product of $k$ consecutive integers in descending order starting at $n$. This formula also follows from the multiplication principle. There are $n$ choices for the first position, $n - 1$ for the second, and so on for $k$ positions. Ordered selections count rankings, podium finishes, and assignments of different offices to different people. In a race with $8$ athletes, there are $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$ possible podium finishes.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=10.5 ymin=-0.6 ymax=2.8 poligoni="0,0 2,0 2,1.5 0,1.5;3.5,0 5.5,0 5.5,1.5 3.5,1.5;7,0 9,0 9,1.5 7,1.5" etichette="0.75,0.55,8;4.25,0.55,7;7.75,0.55,6;2.6,0.55,·;6.1,0.55,·;0.45,1.95,1st place;3.95,1.95,2nd place;7.45,1.95,3rd place" titolo="Choices for the three podium places with $8$ athletes give $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$."}

:::

:::osservazione{#permutazioni-come-disposizioni titolo="Permutations and ordered selections"}
When $k = n$, each ordered selection uses all the objects and is therefore a permutation. Indeed, $D_{n,n} = n! = P_n$. The factorial formula gives the same result by the convention $0! = 1$, since $\dfrac{n!}{0!} = n!$.
:::

:::esempio{#cifre-diverse titolo="Numbers with distinct digits"}
The digits $1$, $2$, $3$, $4$, and $5$ can form $D_{5,3} = 5 \cdot 4 \cdot 3 = 60$ numbers of $3$ distinct digits. The order matters ($123$ and $321$ are different numbers), and no digit is repeated. If $0$ is available, there is one fewer choice for the first position because a three-digit number cannot start with $0$. With the digits from $0$ to $9$, there are $9$ choices from $1$ to $9$ for the first digit, $9$ remaining digits including $0$ for the second, and $8$ remaining digits for the third. The number of $3$-digit numbers with distinct digits is therefore $9 \cdot 9 \cdot 8 = 648$.
:::

## Ordered selections with repetition

:::definizione{#disposizioni-con-ripetizione titolo="Ordered selections with repetition"}
In an **ordered selection with repetition** from $n$ objects, make $k$ choices and record them in $k$ positions. Each of the $k$ positions holds one of the $n$ objects, and the same object can appear more than once. Here $k$ can even exceed $n$. The number of ordered selections with repetition is
$$
D'_{n,k} = n^k ,
$$
because each of the $k$ positions can be filled in $n$ ways independently of the others. By the multiplication principle, multiply $k$ factors equal to $n$. Ordered selections with repetition count codes, PINs, and passwords in which a symbol can repeat. There are $10^4 = 10\,000$ PINs with $4$ digits, each from $0$ to $9$.
:::

:::esempio{#codici-e-totocalcio titolo="Codes and soccer pool entries"}
When the positions have different numbers of choices, apply the multiplication principle directly. A code consists of $2$ letters chosen from the $21$ letters of the Italian alphabet, followed by $3$ digits. Both letters and digits can repeat. The code can be formed in
$$
21^2 \cdot 10^3 = 441 \cdot 1000 = 441\,000
$$
ways. In Italy’s Totocalcio soccer pool, an entry assigns one of the three symbols $1$, $X$, or $2$ to each match. For $14$ matches, there are $3^{14} = 4\,782\,969$ possible entries.
:::

:::attenzione
For ordered selections with repetition, the base of the power is the number of available symbols and the exponent is the number of positions. The number of sequences of $3$ coin flips, with heads denoted by T and tails by C, is $2^3 = 8$, *not* $3^2 = 9$.
$$
TTT, \quad TTC, \quad TCT, \quad TCC, \quad CTT, \quad CTC, \quad CCT, \quad CCC .
$$

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=10.5 ymin=-0.8 ymax=7.8 linee="0,3.5 3,5.5;0,3.5 3,1.5;3,5.5 6,6.5;3,5.5 6,4.5;3,1.5 6,2.5;3,1.5 6,0.5;6,6.5 9,7;6,6.5 9,6;6,4.5 9,5;6,4.5 9,4;6,2.5 9,3;6,2.5 9,2;6,0.5 9,1;6,0.5 9,0" punti="0,3.5,pieno;3,5.5,pieno;3,1.5,pieno;6,6.5,pieno;6,4.5,pieno;6,2.5,pieno;6,0.5,pieno;9,7,pieno;9,6,pieno;9,5,pieno;9,4,pieno;9,3,pieno;9,2,pieno;9,1,pieno;9,0,pieno" etichette="2.6,5.85,T;2.6,0.75,C;5.6,6.85,T;5.6,4.85,C;5.6,2.85,T;5.6,0.85,C;9.3,6.85,TTT;9.3,5.85,TTC;9.3,4.85,TCT;9.3,3.85,TCC;9.3,2.85,CTT;9.3,1.85,CTC;9.3,0.85,CCT;9.3,-0.15,CCC" titolo="Three coin flips. Each of the $3$ flips has $2$ choices, giving $2^3 = 8$ sequences."}

:::

## Combinations and binomial coefficients

:::definizione{#combinazioni-semplici titolo="Combinations without repetition"}
To form a **combination without repetition** from $n$ distinct objects, take $k$ of them to make a group of size $k$, with $k \leq n$. The group contains $k$ different objects chosen from the $n$ available, without regard to order. Two combinations differ only if they contain different objects. The number of combinations without repetition is
$$
C_{n,k} = \frac{D_{n,k}}{k!} = \frac{n!}{k! \, (n - k)!} .
$$
Divide by $k!$ because each group of $k$ objects appears among the ordered selections in all $k!$ possible orders, but just once among the combinations. Combinations count committees, teams, hands of cards, and groups of questions chosen from a list. A delegation of $2$ people can be chosen from $6$ people in
$$
C_{6,2} = \frac{6 \cdot 5}{2 \cdot 1} = 15
$$
ways.
:::

:::definizione{#coefficiente-binomiale titolo="Binomial coefficient"}
The number $C_{n,k}$ can also be written $\dbinom{n}{k}$. This is read “$n$ choose $k$” and is called a **binomial coefficient**.
$$
\binom{n}{k} = \frac{n!}{k! \, (n - k)!} = \frac{n \cdot (n - 1) \cdots (n - k + 1)}{k!} .
$$
For calculation by hand, the second form is quickest. Use $k$ descending factors starting from $n$ in the numerator and $k!$ in the denominator. For example,
$$
\binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = \frac{720}{6} = 120 .
$$
:::

:::teorema{#proprieta-binomiale titolo="Properties of binomial coefficients"}
The following three equalities hold for every natural number $n \geq 1$ and every $k$ such that $0 \leq k \leq n$.

- $\dbinom{n}{0} = \dbinom{n}{n} = 1$, because there is just one way to choose no objects and just one way to choose all of them.
- $\dbinom{n}{1} = n$, because choosing one object means specifying which one.
- $\dbinom{n}{k} = \dbinom{n}{n - k}$, because choosing the $k$ objects to take is equivalent to choosing the $n - k$ objects to leave behind.

The third property is called **symmetry**. It allows us to replace $k$ with $n - k$ when $n - k$ is smaller. For example, $\dbinom{20}{18} = \dbinom{20}{2} = \dfrac{20 \cdot 19}{2} = 190$.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=10.5 ymin=-1.6 ymax=5 poligoni="0,0 1.1,0 1.1,0.2 0,0.2;1.5,0 2.6,0 2.6,1.2 1.5,1.2;3,0 4.1,0 4.1,3 3,3;4.5,0 5.6,0 5.6,4 4.5,4;6,0 7.1,0 7.1,3 6,3;7.5,0 8.6,0 8.6,1.2 7.5,1.2;9,0 10.1,0 10.1,0.2 9,0.2" etichette="0.3,0.55,1;0.45,-0.5,0;1.8,1.55,6;1.95,-0.5,1;3.3,3.35,15;3.45,-0.5,2;4.8,4.35,20;4.95,-0.5,3;6.3,3.35,15;6.45,-0.5,4;7.8,1.55,6;7.95,-0.5,5;9.3,0.55,1;9.45,-0.5,6;9.4,-1.2,k" titolo="The coefficients $\dbinom{6}{k}$ for $k = 0, 1, \dots, 6$. The values $1$, $6$, $15$, $20$, $15$, $6$, and $1$ read the same in either direction because $\dbinom{6}{k} = \dbinom{6}{6 - k}$."}

:::

:::esempio{#strette-di-mano titolo="Handshakes and round-robin games"}
If each of $n$ people shakes hands once with every other person, each handshake corresponds to a pair of people and the order within a pair does not matter. The number of handshakes is therefore
$$
\binom{n}{2} = \frac{n \, (n - 1)}{2} .
$$
With $4$ people, there are $\dbinom{4}{2} = 6$ handshakes. With $10$ people, there are $\dfrac{10 \cdot 9}{2} = 45$. The same calculation counts the games in a single round-robin tournament, in which every team plays every other team once. In a home-and-away tournament, each pair of teams plays twice, once at each team’s home venue. Order then matters and there are $D_{n,2} = n \, (n - 1)$ games.

::grafico{assi=0 uguale=1 xmin=-1 xmax=4 ymin=-0.8 ymax=3.8 linee="0,0 3,0 3,3 0,3 0,0;0,0 3,3;3,0 0,3" punti="0,0,pieno;3,0,pieno;3,3,pieno;0,3,pieno" etichette="-0.45,-0.45,A;3.15,-0.45,B;3.15,3.2,C;-0.45,3.2,D" titolo="Four people $A$, $B$, $C$, and $D$. Each line segment represents a handshake, and there are $\dbinom{4}{2} = 6$ segments."}

:::

:::esempio{#diagonali-di-un-poligono titolo="Diagonals of a polygon"}
A **diagonal** of a polygon is a segment joining two nonconsecutive vertices. In a polygon with $n$ vertices, $\dbinom{n}{2}$ segments join pairs of vertices, and $n$ of these segments are sides. The number of diagonals is therefore
$$
\binom{n}{2} - n = \frac{n \, (n - 1)}{2} - n = \frac{n \, (n - 3)}{2} .
$$
Another way to obtain the same result is to count $n - 3$ diagonals from each vertex, one to each vertex other than itself or either of its neighbors. The product $n \, (n - 3)$ counts each diagonal twice, once from each endpoint, so divide by $2$. A pentagon has $\dfrac{5 \cdot 2}{2} = 5$ diagonals, a hexagon has $\dfrac{6 \cdot 3}{2} = 9$, and a decagon has $\dfrac{10 \cdot 7}{2} = 35$.

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-2.4 ymax=2.6 poligoni="0,2 -1.902,0.618 -1.176,-1.618 1.176,-1.618 1.902,0.618" linee="0,2 -1.176,-1.618;0,2 1.176,-1.618;-1.902,0.618 1.902,0.618;-1.902,0.618 1.176,-1.618;1.902,0.618 -1.176,-1.618" punti="0,2,pieno;-1.902,0.618,pieno;-1.176,-1.618,pieno;1.176,-1.618,pieno;1.902,0.618,pieno" titolo="A pentagon has $\dfrac{5 \cdot (5 - 3)}{2} = 5$ diagonals. There are $2$ from each vertex, and every diagonal has two endpoints."}

:::

## Choosing a counting method

:::osservazione{#scelta-del-modello titolo="Does order matter? Are repetitions allowed?"}
Two questions about the problem determine which counting method to use.

- First, *does order matter*? Would exchanging two of the selected objects give a different outcome? Order matters on a podium because first and second place are different. Order does not matter on a committee whose members all have the same role.
- Second, *are repetitions allowed*? Can the same object be chosen more than once? In a PIN, a digit can repeat. On a podium, an athlete occupies only one place.

If order matters and repetitions are not allowed, count ordered selections without repetition, $D_{n,k}$. When all objects are used, these are the permutations $P_n$. If order matters and repetitions are allowed, count ordered selections with repetition, $D'_{n,k} = n^k$. If order does not matter and repetitions are not allowed, count combinations, $C_{n,k}$.
:::

:::esempio{titolo="Two people out of five, counted three ways"}
Consider three ways to choose two people from a group of $5$.

- A president and a secretary hold different offices, so order matters and there are $D_{5,2} = 5 \cdot 4 = 20$ ways to elect them.
- When choosing $2$ representatives who will have the same role, order does not matter and there are $C_{5,2} = \dfrac{5 \cdot 4}{2} = 10$ ways.
- When awarding a January prize and a February prize that can both go to the same person, order matters and repetitions are allowed. There are $D'_{5,2} = 5^2 = 25$ ways.
:::

:::osservazione{#scelte-composte titolo="Multistage choices and alternative cases"}
When a selection involves several independent choices, count each using the appropriate method and multiply the results by the multiplication principle. A committee of $2$ men chosen from $5$ and $3$ women chosen from $6$ can be formed in
$$
\binom{5}{2} \cdot \binom{6}{3} = 10 \cdot 20 = 200
$$
ways. When a question allows several alternative cases, such as “exactly $2$ men or exactly $3$ men,” count each case separately and add the results by the addition principle.
:::

## Counting by complements

:::teorema{#conteggio-per-complementare titolo="Counting the complement"}
Suppose there are $N$ possible outcomes and $M$ of them do *not* have a specified property. The number that do have the property is
$$
N - M .
$$
Every outcome either has the property or lacks it. The cases are mutually exclusive, so by the addition principle, $N$ is the sum of the two counts. This method is quickest for questions asking for “at least one.” To count outcomes with *at least one* element of a certain type, subtract the outcomes with *no* elements of that type from the total. There are $10^3 = 1000$ codes with $3$ digits from $0$ to $9$ when repetition is allowed. The number without the digit $7$ is $9^3 = 729$ because each position has $9$ choices. The number of codes with at least one $7$ is therefore
$$
1000 - 729 = 271 .
$$
:::

:::esempio{#almeno-una-donna titolo="Committees with at least one woman"}
A committee of $3$ is chosen from $4$ men and $3$ women. There are $\dbinom{7}{3} = 35$ possible committees in all, of which $\dbinom{4}{3} = 4$ consist only of men. The number of committees with at least one woman is therefore $35 - 4 = 31$. A direct count considers three cases, with one, two, or three women, and gives the same result.
$$
\binom{3}{1} \binom{4}{2} + \binom{3}{2} \binom{4}{1} + \binom{3}{3} \binom{4}{0} = 18 + 12 + 1 = 31 .
$$

::venn{tipo="incluso" zone="a" nomi="groups,men only" elementi="a:31;ab:4" titolo="Of the $\dbinom{7}{3} = 35$ possible committees, $4$ consist only of men and $35 - 4 = 31$ include at least one woman."}

:::

:::attenzione
Choosing a woman first and then choosing the other two people from everyone who remains counts some committees more than once. With the numbers in this example, this gives $3 \cdot \dbinom{6}{2} = 3 \cdot 15 = 45$, which exceeds $31$. A committee of two women and one man, for instance, appears twice because either woman can be chosen first.
:::

## Quick methods for quizzes

:::osservazione{#metodi-rapidi titolo="Quick ways to check a result"}
On a timed exam, the following checks help verify a count.

- **Identify the counting method** before calculating by asking about order and repetition. Quiz options often include results from the other methods. If the correct answer is $C_{8,3} = 56$, the options may also include $D_{8,3} = 336$ and $8^3 = 512$.
- **Compare the sizes of the results**. For the same $n$ and $k$, we have $C_{n,k} \leq D_{n,k} \leq n^k$. Combinations disregard order, and every arrangement without repetition is still possible when repetition is allowed. An option that violates these inequalities uses the wrong method.
- **Cancel factorials** before multiplying. For instance, $\dfrac{10!}{7! \cdot 3!} = \dfrac{10 \cdot 9 \cdot 8}{6} = 120$ without calculating $10!$.
- **Try small numbers**. If the right formula is unclear, solve the same problem with $3$ or $4$ objects by listing the outcomes by hand, then compare the result with the formulas.
- **Test the options**. For an inverse question such as “How many sides does a polygon with $20$ diagonals have?”, substitute the options into the formula. With $n = 8$, the result is $\dfrac{8 \cdot 5}{2} = 20$.

The direction of the change gives another check. An added restriction, such as requiring two people to stand together or forbidding a digit, cannot increase the number of outcomes. Allowing repetition cannot decrease it.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=11 ymin=-1 ymax=6.2 poligoni="0,0 2.6,0 2.6,0.56 0,0.56;3.6,0 6.2,0 6.2,3.36 3.6,3.36;7.2,0 9.8,0 9.8,5.12 7.2,5.12" etichette="0.1,0.96,C₈,₃ = 56;0.1,-0.5,combinations;3.7,3.76,D₈,₃ = 336;3.7,-0.5,arrangements;7.3,5.52,8³ = 512;7.3,-0.5,with repetition" titolo="For $n = 8$ and $k = 3$, the three counts satisfy $C_{8,3} \leq D_{8,3} \leq 8^3$, as shown by $56 \leq 336 \leq 512$."}
:::
