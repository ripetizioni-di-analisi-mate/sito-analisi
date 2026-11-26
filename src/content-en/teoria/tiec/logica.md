---
titolo: Logic
sommario: Negating statements, using implications and necessary and sufficient conditions, testing syllogisms with Venn diagrams, and solving questions about groups of people, orderings, proportions, number sequences, and symbols that stand for numbers.
---

## Statements and logical connectives

:::definizione{#enunciato titolo="Statements"}
A **statement** is a sentence that is either true or false. “Milan is in Lombardy” is a true statement, and “An hour has $50$ minutes” is a false one. Questions and commands are not statements because they are neither true nor false. Capital letters denote statements, for example $A$ = “Luca has a driver's license.” In TIEC logic questions, take the statements in the question as true and determine which other statements must therefore be true or false.
:::

:::definizione{#connettivi titolo="Negation, conjunction, and disjunction"}
The words “not,” “and,” and “or” form compound statements from simple ones. They are called **connectives**, and the truth value of a compound statement depends only on the truth values of its parts.

- The **negation** $\lnot A$ (“not $A$”) is true when $A$ is false.
- The **conjunction** $A \land B$ (“$A$ and $B$”) is true only when $A$ and $B$ are *both* true.
- The **disjunction** $A \lor B$ (“$A$ or $B$”) is true when *at least one* of the two statements is true, including when both are true.

| $A$ | $B$ | $A \land B$ | $A \lor B$ |
| --- | --- | --- | --- |
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |

The table, called a **truth table**, lists all four possibilities. Let $A$ = “Sara speaks English” and $B$ = “Sara speaks German.” If Sara speaks only English, then “Sara speaks English and German” is false, whereas “Sara speaks English or German” is true. The words “but” and “yet” have the same effect on truth values as “and.”
:::

:::osservazione{#o-esclusiva titolo="Inclusive and exclusive or"}
Unless otherwise stated, “or” is inclusive. The **exclusive** “or” (“either $A$ or $B$, but not both”) is true when *exactly one* of the two parts is true. Phrases such as “but not both” and “only one of the two” indicate this meaning. The statement “Giulia or Marco wins the prize, but not both” is false if both win.
:::

## Negating statements

::::teorema{#de-morgan titolo="De Morgan's laws"}
$$
\lnot (A \land B) \equiv \lnot A \lor \lnot B,
\qquad
\lnot (A \lor B) \equiv \lnot A \land \lnot B .
$$
The symbol $\equiv$ means that the two statements are true in the same cases. To negate a statement joined by “and,” negate both parts and change “and” to “or.” To negate a statement joined by “or,” negate both parts and change “or” to “and.” The negation of “The flight is on time and the luggage has arrived” is “The flight is not on time or the luggage has not arrived.” The negation of “Marco is going to the movies or the theater” is “Marco is going neither to the movies nor to the theater.”

:::dimostrazione
The conjunction $A \land B$ is false when at least one of its parts is false. Thus its negation says that at least one part is false, giving $\lnot A \lor \lnot B$. The disjunction $A \lor B$ is false only when both parts are false, so its negation is $\lnot A \land \lnot B$.
:::
::::

:::attenzione
The negation of “$A$ and $B$” is *not* “not $A$ and not $B$.” If the flight is on time and the luggage has not arrived, “The flight is on time and the luggage has arrived” is false, and “The flight is not on time and the luggage has not arrived” is also false. A statement and its negation always have opposite truth values, so the second statement is not the negation of the first.
:::

:::teorema{#negazione-quantificatori titolo="Negating statements with all, some, and none"}
The words “all,” “every,” and “none” refer to *every* member of a category. The words “some,” “there is a,” and “at least one” refer to *at least one* member. In logic, “some” means “at least one, possibly all.”

| Statement | Negation |
| --- | --- |
| All $A$ are $B$ | At least one $A$ is not $B$ |
| At least one $A$ is not $B$ | All $A$ are $B$ |
| No $A$ is $B$ | At least one $A$ is $B$ |
| At least one $A$ is $B$ | No $A$ is $B$ |

This works because a statement about *all* members becomes false as soon as a single member fails to satisfy it. Just one closed counter makes “All the counters are open” false, so the negation is “At least one counter is not open,” or equivalently, “Not all the counters are open.”
:::

:::attenzione
The negation of “All the employees are college graduates” is *not* “None of the employees are college graduates.” In an office with $10$ employees, $7$ of whom are graduates, both statements are false. “Only some of the employees are college graduates” is not the negation either, because it is false in an office where no one is a graduate and the original statement is also false.
:::

:::esempio{titolo="Two quantifiers in the same statement"}
Negate “Every branch has at least one employee who speaks German” in two steps. First negate “every branch,” which becomes “at least one branch.” Then negate the rest. The phrase “has at least one employee who speaks German” becomes “has no employees who speak German.” Thus the negation is “At least one branch has no employees who speak German.”
:::

## Implications and necessary and sufficient conditions

:::definizione{#implicazione titolo="Implication"}
The **implication** “if $A$, then $B$,” written $A \Rightarrow B$, is false in *only one* case, when $A$ is true and $B$ is false. The statement $A$ is called the **antecedent** and $B$ the **consequent**.

| $A$ | $B$ | $A \Rightarrow B$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

Only a rainy day on which the game is played disproves “If it rains, the game is postponed.” On a day without rain, the condition does not arise, so the statement is not disproved. “All $A$ are $B$” is equivalent to the implication “if an element is an $A$, then it is a $B$.”
:::

:::teorema{#negazione-implicazione titolo="Negation of an implication"}
$$
\lnot (A \Rightarrow B) \equiv A \land \lnot B .
$$
The implication is false only when $A$ is true and $B$ is false, so its negation states exactly that case. The negation has an “and” and no “if.” The negation of “If I study, I pass the exam” is “I study and I do not pass the exam.”
:::

:::teorema{#contronominale titolo="Contrapositive, converse, and inverse"}
Given an implication $A \Rightarrow B$, the **contrapositive** $\lnot B \Rightarrow \lnot A$ is equivalent to the original implication. The **converse** $B \Rightarrow A$ and the **inverse** $\lnot A \Rightarrow \lnot B$ are not equivalent to the original implication.

| $A$ | $B$ | $A \Rightarrow B$ | $\lnot B \Rightarrow \lnot A$ | $B \Rightarrow A$ |
| --- | --- | --- | --- | --- |
| T | T | T | T | T |
| T | F | F | F | T |
| F | T | T | T | F |
| F | F | T | T | T |

The contrapositive holds because if $B$ is false and $A$ were true, the implication would make $B$ true. From “If Giorgio lives in Naples, he lives in Campania,” it follows that “If Giorgio does not live in Campania, he does not live in Naples.” The converse, “If Giorgio lives in Campania, he lives in Naples,” fails for someone who lives in Salerno.

::venn{tipo="incluso" zone="u" nomi="Campania,Naples" universo=1 titolo="Naples lies within Campania. Anyone outside Campania, in the shaded region, is also outside Naples."}

:::

:::definizione{#condizione-necessaria-sufficiente titolo="Necessary and sufficient conditions"}
If $A \Rightarrow B$ holds, then $A$ is a **sufficient condition** for $B$, and $B$ is a **necessary condition** for $A$. If both $A \Rightarrow B$ and $B \Rightarrow A$ hold, then $A$ is **necessary and sufficient** for $B$. We write $A \Leftrightarrow B$ (“$A$ if and only if $B$”).

- “$A$ is sufficient for $B$,” “$A$ is enough for $B$,” and “$B$ if $A$” all mean $A \Rightarrow B$.
- “$B$ is necessary for $A$,” “$B$ is required for $A$,” and “$A$ only if $B$” all mean $A \Rightarrow B$.

“A high school diploma is necessary to enroll in college” means “If someone is enrolled in college, then they have a high school diploma.” It does not imply that everyone with a diploma is enrolled because a diploma alone is insufficient.
:::

:::teorema{#deduzioni-corrette titolo="Valid inferences"}
Two valid inferences follow from a true implication $A \Rightarrow B$.

- If $A$ is true, then $B$ is true.
- If $B$ is false, then $A$ is false.

The second inference applies the contrapositive to a specific case. From “If the café is open, Lucia goes out for breakfast” and “Lucia did not go out for breakfast today,” it follows that the café is closed today. Inferences can be chained. From $A \Rightarrow B$, $B \Rightarrow C$, and “$C$ is false,” it follows that $B$ is false, and hence that $A$ is false.
:::

:::osservazione{#deduzioni-scorrette titolo="Invalid inferences"}
Given $A \Rightarrow B$, nothing follows about $A$ when $B$ is true, or about $B$ when $A$ is false. Inferring $A$ from $B$ is called **affirming the consequent**. Inferring $\lnot B$ from $\lnot A$ is called **denying the antecedent**. Given “If Paolo passes the test, he enrolls in the economics program,” knowing that he enrolled in economics does not tell us whether he passed the test, because he may have qualified another way. In such questions, the correct answer is a choice such as “It cannot be determined.”
:::

:::definizione{#equivalenza titolo="Equivalent statements"}
Two statements are **equivalent** if they are true in exactly the same cases, that is, if they have identical truth tables. To find which statement is equivalent to a given one, look for the choice that is true and false in the same cases as the original. Along with the contrapositive, another useful equivalence is
$$
A \Rightarrow B \equiv \lnot A \lor B ,
$$
which holds because both statements are false in exactly the same case, when $A$ is true and $B$ is false. Thus “If I go out, I take my umbrella” is equivalent to “I do not go out or I take my umbrella.”
:::

## Syllogisms and Venn diagrams

:::definizione{#sillogismo titolo="Syllogisms"}
A **syllogism** is an argument with two premises and a conclusion. Its premises concern three categories, one of which, the **middle term**, appears in both. The syllogism is **valid** if the conclusion is true in *every* situation in which the premises are true. Whether the premises are true in the real world is irrelevant because the questions take them as true. These questions also assume that every category mentioned has at least one member.
:::

:::teorema{#schemi-sillogismi titolo="Valid patterns"}
The following syllogisms are valid for any choice of categories $A$, $B$, and $C$.

| First premise | Second premise | Conclusion |
| --- | --- | --- |
| All $A$ are $B$ | All $B$ are $C$ | All $A$ are $C$ |
| All $A$ are $B$ | No $B$ is $C$ | No $A$ is $C$ |
| Some $A$ are $B$ | All $B$ are $C$ | Some $A$ are $C$ |
| Some $A$ are $B$ | No $B$ is $C$ | Some $A$ are not $C$ |

The first pattern holds because if the circle for $A$ lies inside the circle for $B$ and the circle for $B$ lies inside the circle for $C$, then the circle for $A$ lies inside the circle for $C$. In the third and fourth patterns, consider the member whose existence is guaranteed by the premise containing “some.” That member belongs to $B$, so the second premise tells us whether it also belongs to $C$.

::venn{tipo="tre" zone="abc,bc,c" nomi="A,B,C" titolo="All $A$ are $B$ and all $B$ are $C$. Only the shaded regions can contain elements, and those belonging to $A$ lie inside $C$."}

:::

:::osservazione{#venn-tre-insiemi titolo="Testing a conclusion with three circles"}
To test a conclusion, draw three circles, one for each category, and use the premises as follows.

- “All $A$ are $B$” leaves the regions of $A$ outside $B$ empty. “No $A$ is $B$” leaves the regions common to $A$ and $B$ empty.
- “Some $A$ are $B$” places a mark $\times$ in one of the remaining regions common to $A$ and $B$.

The conclusion follows necessarily if it can already be read from the diagram. With the premises “All doctors are college graduates” and “Some college graduates are athletes,” the mark $\times$ can lie outside the doctors' circle, so “Some doctors are athletes” does not follow.

::venn{tipo="tre" zone="ab,abc,b,bc,c" nomi="doctors,grads,athletes" elementi="bc:×" titolo="The college graduate who is an athlete, marked $\times$, can lie outside the doctors' circle, so the conclusion about doctors and athletes does not follow."}

:::

## Problems involving set data

:::teorema{#conteggio-due-insiemi titolo="Counting with two sets"}
If $|A|$ denotes the number of elements in the set $A$, then
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
Adding $|A|$ and $|B|$ counts the common elements twice, so subtract them once. This formula is useful in questions about groups of people and the activities they choose. Of $40$ customers, $23$ have a phone plan, $19$ have an internet plan, and $9$ have both. The number with at least one plan is $23 + 19 - 9 = 33$, so $40 - 33 = 7$ have neither. The number with only a phone plan is $23 - 9 = 14$.

::venn{zone="a,ab,b" nomi="T,I" elementi="a:14;ab:9;b:10;u:7" titolo="Phone ($T$) and internet ($I$) plans. In all, $14 + 9 + 10 = 33$ customers have at least one plan and $7$ have neither."}

:::

:::teorema{#conteggio-tre-insiemi titolo="Counting with three sets"}
For three sets, we have
$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| .
$$
An element common to all three sets is counted three times in the first sum and subtracted three times in the pairwise intersections, so add it back once at the end. In practice, fill in the diagram from the center outward. In a class of $50$ students, $22$ study English, $18$ French, and $15$ Spanish. Of these, $7$ study English and French, $5$ English and Spanish, $4$ French and Spanish, and $2$ all three languages. Place $2$ in the center and $7 - 2 = 5$ in the region for English and French but not Spanish, and continue outward. The number who study English only is $22 - 5 - 3 - 2 = 12$. The number who study at least one language is
$$
22 + 18 + 15 - 7 - 5 - 4 + 2 = 41 ,
$$
so $9$ students study none of the languages.

::venn{tipo="tre" nomi="I,F,S" elementi="a:12;b:9;c:8;ab:5;ac:3;bc:2;abc:2;u:9" titolo="Students studying English ($I$), French ($F$), and Spanish ($S$), with the regions filled in from the center outward."}

:::

## Orderings and comparisons

:::definizione{#relazioni-di-ordine titolo="Comparisons"}
Phrases such as “is taller than,” “earns more than,” and “arrives before” express **comparisons**. They have the **transitive property**. If Anna is taller than Bruno and Bruno is taller than Carla, then Anna is taller than Carla. To solve a question, express every statement using $>$ in a consistent direction and arrange the names on a line. Write “Carla is shorter than Bruno” as $B > C$. From $D > A$, $A > B$, and $B > C$, we obtain the chain
$$
D > A > B > C ,
$$
so Dario is tallest and Carla is shortest.
:::

:::osservazione{#ordinamenti-indeterminati titolo="Comparisons that cannot be determined"}
Often the information is insufficient to order everyone. “Marco earns more than Luca” and “Paola earns more than Luca” tell us that Luca earns less than both, but they leave the comparison between Marco and Paola undetermined. Questions asking which statement is *necessarily* true call for a relation that holds in *every* ordering consistent with the information. To eliminate a choice, give a possible ordering in which it is false. For positions in a line or a race, write out all possible arrangements, usually two or three, and look for what they have in common.
:::

## Proportions and numerical reasoning

:::teorema{#proporzionalita titolo="Direct, inverse, and compound proportions"}
Two quantities are **directly proportional** if their ratio is constant and **inversely proportional** if their product is constant. If $5$ notebooks cost $7.50$ euros, one notebook costs $1.50$ euros and $12$ notebooks cost $18$ euros. If $6$ workers complete a job in $10$ days, the job takes $60$ worker-days, so $4$ workers need $15$ days.

When more than two quantities are involved, calculate how much *one* unit produces in *one* unit of time. If $3$ machines produce $240$ parts in $4$ hours, the number of parts one machine produces in one hour is
$$
\frac{240}{3 \cdot 4} = 20 \text{ pieces},
$$
so $5$ machines working for $6$ hours produce $5 \cdot 6 \cdot 20 = 600$ parts. For proportions and percentages, see the chapter “Sets, numbers, and percentages.”
:::

:::teorema{#miscele titolo="Weighted averages and mixtures"}
When $p$ kg of a product priced at $a$ is mixed with $q$ kg of a product priced at $b$, the price per kilogram of the mixture is the **weighted average**
$$
\frac{p \cdot a + q \cdot b}{p + q} .
$$
The numerator is the total cost and the denominator is the total weight. If $30$ kg of coffee at $4$ euros per kg is mixed with $20$ kg at $9$ euros per kg, the mixture costs $\dfrac{120 + 180}{50} = 6$ euros per kg. The weighted average always lies between $a$ and $b$, closer to the price of the product present in the greater quantity.
:::

:::osservazione{#problemi-con-equazioni titolo="Translating problems into equations"}
Many numerical reasoning questions can be solved by choosing an unknown and writing an equation or a system of equations. A theater sells $30$ tickets, full-price tickets at $8$ euros and discounted tickets at $5$ euros, and takes in $204$ euros. If $x$ tickets are full price, then $30 - x$ are discounted, so
$$
8x + 5\,(30 - x) = 204
\iff
3x = 54
\iff
x = 18 .
$$
There are $18$ full-price tickets and $12$ discounted tickets. As a check, $18 \cdot 8 + 12 \cdot 5 = 144 + 60 = 204$. For systems, see the chapter “Equations, inequalities, and systems.”
:::

## Number sequences and symbols

:::definizione{#serie-numeriche titolo="Number sequences"}
A **number sequence** to be completed is a list of numbers generated by a rule. The question asks for the missing term. The following rules occur most often.

- Constant difference. In $4, 7, 10, 13$, each term increases by $3$.
- Differences that grow in a regular pattern. In $1, 3, 7, 13, 21$, the differences are $2, 4, 6, 8$.
- Constant ratio. In $3, 6, 12, 24$, each term is double the preceding one.
- Two operations in succession. In $2, 5, 11, 23$, each term is twice the preceding one plus $1$.
- Squares, cubes, and variations on them. The numbers $2, 5, 10, 17, 26$ have the form $n^2 + 1$.
- Each term is the sum of the two preceding terms, as in $2, 3, 5, 8, 13$.

Always check the sequence of differences between consecutive terms first. If the differences show no pattern, look at the ratios.
:::

:::osservazione{#serie-intercalate titolo="Alternating and interleaved sequences"}
In some sequences two rules alternate. In $3, 8, 6, 11, 9$, alternately add $5$ and subtract $2$, so the next term is $14$. In others, the odd- and even-numbered terms form two separate sequences. In $2, 30, 4, 27, 8, 24$, the odd-numbered terms $2, 4, 8$ double and the even-numbered terms $30, 27, 24$ decrease by $3$. A long sequence with ups and downs can often be recognized as interleaved.
:::

:::teorema{#simboli-numeri titolo="Symbols that stand for numbers"}
In questions with shapes or letters standing for numbers, each symbol is an unknown and each equality is an equation. If $\triangle + \triangle + \square = 17$ and $\triangle + \square = 11$, subtracting the second equation from the first gives $\triangle = 6$, so $\square = 5$. When symbols occur in pairs in three equations, it helps to add all three. Given
$$
\begin{cases}
\triangle + \square = 12 \\
\square + \bigcirc = 15 \\
\triangle + \bigcirc = 13
\end{cases}
$$
adding gives $2\,(\triangle + \square + \bigcirc) = 40$, or $\triangle + \square + \bigcirc = 20$. Subtracting each equation from $20$ gives $\bigcirc = 8$, $\triangle = 5$, and $\square = 7$.
:::

:::osservazione{#cifre-lettere titolo="Letters that stand for digits"}
When letters represent digits, a two-digit number written $AB$ has the value $10A + B$. This translates the question into an equation. For example, $AB + BA = 10A + B + 10B + A = 11\,(A + B)$, so the sum of a two-digit number and the number with its digits reversed is always a multiple of $11$. If $AB + BA = 99$, then $A + B = 9$. Digits are integers from $0$ to $9$, and the first digit of a number cannot be $0$. These restrictions rule out many possibilities.
:::

## Quick methods for multiple-choice questions

:::osservazione{#metodi-rapidi titolo="Quick methods for multiple-choice questions"}
With one minute per question, many logic problems can be solved in a few steps.

- **Form of the answer**. The negation of an implication contains “and” and no “if,” so choices containing “if” can be eliminated immediately. The negation of an “all” statement contains “at least one … is not” or “not all.”
- **False cases**. The negation of a statement describes exactly the cases in which it is false.
- **Counterexample**. Eliminate an answer by finding a situation consistent with the given information in which that answer is false. Familiar categories such as animals, numbers, or cities suffice for syllogisms.
- **Sketch in the margin**. Use letters for statements, arrows for implications, a line of $>$ symbols for orderings, and three circles for sets, filled in from the center outward.
- **Test the answer choices**. For numerical and symbol questions, substitute each choice into the conditions of the question. The answer is the one that satisfies all of them. For a sequence, insert the proposed value and check that the rule holds through the last term.
- **Order of magnitude**. In a proportion problem, the result must increase or decrease in the expected direction. With fewer workers, more days are needed, so any answer shorter than the initial time can be eliminated.
:::
