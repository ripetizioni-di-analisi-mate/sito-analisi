---
titolo: "Logic and reasoning"
sommario: "Statements, conditions, quantifiers, sets, constraints and procedures with examples, diagrams and checks of conclusions."
---

## Statements and truth values

:::definizione{#enunciati titolo="Statements and premises"}
A **statement**, also called a proposition, is a sentence that can be said to be true or false. “The code contains four digits” is a statement, because looking at the code settles whether it is true. “Enter the code” is an instruction, and asking whether an instruction is true makes no sense, so it is not a statement. True and false are called **truth values**.

Each statement is denoted by a capital letter, for example $P$ = “the code contains four digits”. Within one argument the same letter always denotes the same statement.

The **premises** are the information that the question gives as true. A conclusion **follows** from the premises when it is true in every situation where the premises are true. Only the premises written in the question count. If the text states that all the electric vehicles in the depot are red, in that question they are, even though electric vehicles of other colours exist elsewhere.
:::

:::esempio{titolo="A possible conclusion and a necessary one"}
The premises are “all numbered samples are catalogued” and “sample $a$ is catalogued”. The question is whether $a$ is numbered.

The first premise says that every sample with a number is in the catalogue, and says nothing about samples without a number. There are therefore two situations where both premises are true.

- Sample $a$ is catalogued and numbered.
- Sample $a$ is catalogued and has no number.

The premises do not allow a choice, so whether $a$ is numbered is **undetermined**. If instead the second premise were “$a$ is numbered”, the first would apply to $a$, and “$a$ is catalogued” would be a **necessary** conclusion, that is, one that follows from the premises.

A **counterexample** is a situation where the premises are true and the proposed conclusion is false. The second situation in the list is a counterexample to the conclusion “$a$ is numbered”. One counterexample is enough to reject a conclusion.
:::

:::osservazione
Questions ask three different things about the same premises.

- “Can be true” asks for at least one situation, among those where the premises are true, where the sentence is true.
- “Must be true” asks for the sentence to be true in all those situations.
- “Is impossible” asks for the sentence to be false in all those situations.

In the samples example, “$a$ is numbered” can be true, because it is true in the first situation, and it need not be true, because it is false in the second.
:::

## Connectives and negations

:::definizione{#connettivi titolo="Conjunction and disjunction"}
A **connective** is a word, such as “not”, “and”, “or”, that forms a new statement from one or two statements. Let $P$ = “Luca has the ticket” and $Q$ = “Luca has the document”.

- The **negation** “Luca does not have the ticket” is written $\neg P$ and read “not $P$”. It is true when $P$ is false and false when $P$ is true.
- The **conjunction** “Luca has the ticket *and* the document” is written $P\land Q$ and read “$P$ and $Q$”. It is true when both statements are true.
- The **disjunction** “Luca has the ticket *or* the document” is written $P\lor Q$ and read “$P$ or $Q$”. It is true when at least one of the two statements is true, including when both are, which is why it is called *inclusive*.

A **truth table** lists, one per row, all the combinations of true (T) and false (F) for the starting statements, with the value of the compound statement.

| $P$ | $Q$ | $P\land Q$ | $P\lor Q$ |
| --- | --- | --- | --- |
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |

In the second row Luca has the ticket and does not have the document, so the conjunction is false and the disjunction is true.

“Luca has exactly one of the two things” requires at least one statement to be true and not both. It is written $(P\lor Q)\land\neg(P\land Q)$ and is true in the second and third rows. In this chapter's questions, an unqualified “or” has the inclusive meaning.
:::

::::teorema{#de-morgan titolo="De Morgan's laws"}
De Morgan's laws say how to negate a sentence built with “and” or with “or”.

- “It is not true that Luca has the ticket and the document” means that at least one is missing, that is, Luca does not have the ticket or does not have the document.
- “It is not true that Luca has the ticket or the document” means that both are missing, that is, Luca does not have the ticket and does not have the document.

In symbols, for any statements $P$ and $Q$,
$$
\neg(P\land Q)\iff(\neg P)\lor(\neg Q),
$$
$$
\neg(P\lor Q)\iff(\neg P)\land(\neg Q).
$$
The symbol $\iff$ is read “is equivalent to” and indicates that the two expressions have the same truth value in every row of the table.

:::dimostrazione
The conjunction $P\land Q$ is false in the second, third and fourth rows of the table, that is, in the rows where at least one of $P$ and $Q$ is false. These are the same rows where $\neg P$ or $\neg Q$ is true, so the first equivalence holds. The disjunction $P\lor Q$ is false only in the fourth row, which is the only one where $\neg P$ and $\neg Q$ are both true, so the second holds.
:::
::::

:::esempio{titolo="Requirements for a request"}
A request is complete exactly when it has a signature and at least one contact detail, phone or email. With $F$ = “there is a signature”, $T$ = “there is a phone number” and $E$ = “there is an email”, the request is complete when $F\land(T\lor E)$ is true. It is incomplete when the negation is true, which is found with De Morgan's two laws, applied first to $\land$ and then to $\lor$.
$$
\neg\bigl(F\land(T\lor E)\bigr)
\iff \neg F\lor\neg(T\lor E)
\iff \neg F\lor(\neg T\land\neg E).
$$
The request is therefore incomplete when the signature is missing, or when both phone and email are missing. A request with a signature and no contact details is thus incomplete.
:::

## Implications and conditions

:::definizione{#implicazione titolo="Implication"}
An **implication** is a sentence of the form “if …, then …”. A parent promises a child: “If you pass the exam, I will give you a bicycle”. With $P$ = “the child passes the exam” and $Q$ = “the parent gives the bicycle”, the promise is written $P\Rightarrow Q$ and read “if $P$, then $Q$” or “$P$ implies $Q$”. $P$ is called the **antecedent** and $Q$ the **consequent**.

The implication is false when the promise is broken and true in all other cases.

| $P$ | $Q$ | $P\Rightarrow Q$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

- First row. The child passes the exam and receives the bicycle. The promise is kept, so the implication is true.
- Second row. The child passes the exam and does not receive the bicycle. The promise is broken, so the implication is false.
- Third row. The child does not pass the exam and receives the bicycle anyway. The parent had said what would happen if the exam was passed and nothing about the opposite case, so the promise is not broken and the implication is true.
- Fourth row. The child does not pass the exam and does not receive the bicycle. Here too the promise is not broken, so the implication is true.

The implication is therefore false in one case only, with $P$ true and $Q$ false, and it is true whenever the antecedent is false, whatever $Q$ is. Similarly, the rule “if the sensor detects smoke, it sends an alert” is broken only when the sensor detects smoke and no alert is sent.

The implication is true exactly in the rows where $P$ is false or $Q$ is true, so $P\Rightarrow Q$ is equivalent to $\neg P\lor Q$. Its negation is true only in the second row, so it is equivalent to $P\land\neg Q$, that is, to “the child passed the exam and did not receive the bicycle”.
:::

::::teorema{#contrapposta titolo="Contraposition and deduction"}
From the rule “if it rains, the courtyard is wet” it follows that, if the courtyard is not wet, it is not raining, because with rain the courtyard would be wet. The sentence “if the courtyard is not wet, it is not raining” is the **contrapositive** of the rule. It is obtained by swapping the two statements and negating both.

In symbols, the implication $P\Rightarrow Q$ is equivalent to its contrapositive $\neg Q\Rightarrow\neg P$. A true implication gives two deductions.

- From $P\Rightarrow Q$ and $P$, $Q$ follows. It is raining, so the courtyard is wet.
- From $P\Rightarrow Q$ and $\neg Q$, $\neg P$ follows. The courtyard is not wet, so it is not raining.

:::dimostrazione
The implication $P\Rightarrow Q$ is false only when $P$ is true and $Q$ is false. The contrapositive is false only when its antecedent $\neg Q$ is true and its consequent $\neg P$ is false, that is, in the same case. The two implications therefore have the same value in every row of the table.

If $P\Rightarrow Q$ and $P$ are true, then $Q$ is true, because with $Q$ false the implication would be false. For the same reason, if $P\Rightarrow Q$ is true and $Q$ is false, then $P$ is false.
:::
::::

:::definizione{#necessario-sufficiente titolo="Necessary and sufficient conditions"}
The sentence “if a person was born in Rome, that person was born in Italy” is a true implication.

- Being born in Rome is a **sufficient** condition for being born in Italy, because knowing that a person was born in Rome is enough to conclude that the person was born in Italy.
- Being born in Italy is a **necessary** condition for being born in Rome, because anyone not born in Italy was not born in Rome. The condition is not sufficient, since a person born in Milan was born in Italy and not in Rome.

In general, when $P\Rightarrow Q$ is true, $P$ is sufficient for $Q$ and $Q$ is necessary for $P$.

- “A badge is enough for entry” means badge $\Rightarrow$ entry. The badge is a sufficient condition, that is, whoever has the badge enters.
- “Entry is allowed only if a badge is held” means entry $\Rightarrow$ badge. The badge is a necessary condition, that is, whoever entered had the badge. The sentence is contradicted only by a person who enters without a badge, whereas a person with the badge who stays outside leaves it true.
- “Entry is allowed if and only if a badge is held” asserts both implications and is written entry $\iff$ badge. The badge is a necessary and sufficient condition, and here the symbol $\iff$ is read “if and only if”.

A sentence with “unless” is an implication whose antecedent is the absence of the exception. “The delivery takes place tomorrow unless something unforeseen happens” means nothing unforeseen $\Rightarrow$ delivery tomorrow. If something unforeseen happens, the delivery takes place tomorrow or later, and in both cases the sentence is true.
:::

:::attenzione
From “if it rains, the courtyard is wet” and “the courtyard is wet” it does not follow that it is raining. A courtyard just washed on a sunny day is a counterexample, because the two premises are true and “it is raining” is false. The same courtyard shows that from “it is not raining” it does not follow that “the courtyard is not wet”.

The two wrong conclusions use, in place of the rule $P\Rightarrow Q$, an implication that is not equivalent to it.

- The **converse** $Q\Rightarrow P$, that is, “if the courtyard is wet, it is raining”.
- The **inverse** $\neg P\Rightarrow\neg Q$, that is, “if it is not raining, the courtyard is not wet”.
:::

## Quantifiers and sets

:::definizione{#quantificatori titolo="All, some, none"}
A **quantifier** is a word that says how many elements of a group a sentence refers to.

- The **universal** quantifier is “all”, or “every”. “All the students in the class have the book” says that every student has it, without exception. The symbol is $\forall$ and is read “for every”.
- The **existential** quantifier is “some”, or “there is”. “Some students in the class have the book” says that *at least one* student has it. In logic “some” always has this meaning, so the sentence is true with a single student and also when all of them have the book. The symbol is $\exists$ and is read “there exists”.

A sentence with “all” does not assert that any elements exist. If the laboratory has no microscopes, “all the microscopes in the laboratory have been serviced” is true, because contradicting it would take an unserviced microscope. To conclude that a serviced instrument exists, another premise is therefore needed, namely that the laboratory has at least one microscope.

A **set** is a group of objects, called elements, and the notation $x\in A$ is read “$x$ belongs to $A$”. Let $A$ be the set of students in the class and $B$ the set of those who have the book. The **intersection** $A\cap B$ is the set of elements that belong to both $A$ and $B$, and $\varnothing$ denotes the empty set, that is, the set with no elements.

- “All A are B” is written “$\forall x\in A$, $x\in B$”, or $A\subseteq B$, which is read “$A$ is contained in $B$”.
- “Some A are B” is written “$\exists x\in A$ such that $x\in B$”, or $A\cap B\ne\varnothing$, that is, the intersection is different from the empty set.
- “No A is B” is written $A\cap B=\varnothing$, that is, the intersection is the empty set.

In the diagram of the first sentence the region of $A$ is drawn inside that of $B$, because every element of $A$ is also an element of $B$.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="All A are B: A is contained in B"}
:::

:::teorema{#negazione-quantificatori titolo="Negating quantifiers"}
To contradict “all the students have handed in the assignment”, one student who has not handed it in is enough. The negation of a sentence with “all” is therefore a sentence with “there is at least one”, and vice versa.

- The negation of “all A are B” is “there is at least one A that is not B”.
- The negation of “some A are B” is “no A is B”.
- The negation of “no A is B” is “at least one A is B”.
- The negation of “exactly one A is B” is “no A is B, or at least two A are B”.

With two quantifiers the rule applies to both. In “every student has read at least one text”, “every student” becomes “there is a student” and “at least one text” becomes “no text”, so the negation is “there is a student who has read no text”.
:::

:::attenzione
The negation of “all the students have handed in the assignment” is “at least one student has not handed it in”, and not “no student has handed it in”. In a class of $20$ students, $19$ have handed in the assignment and $1$ has not. The sentence “all have handed it in” is false, and “none has handed it in” is false too. A sentence and its negation always have opposite truth values, so the second is not the negation of the first. The sentence “at least one student has not handed it in” is true instead.
:::

:::esempio{titolo="A witness carried through two premises"}
The premises are “some technicians are volunteers” and “all volunteers are insured”. By the first there is at least one person who is both a technician and a volunteer, called a *witness* of the premise; call her Marta. Marta is a volunteer, so by the second premise she is insured. Therefore **some technicians are insured**. About technicians who are not volunteers the premises say nothing, so “all technicians are insured” does not follow.

From “some technicians are volunteers” and “some volunteers are pensioners”, however, it does not follow that some technicians are pensioners. A counterexample is a group of two people, in which Marta is a technician and a volunteer and is not a pensioner, while Piero is a volunteer and a pensioner and is not a technician. The two premises are true and no technician is a pensioner. In the first argument the premises apply to the same person; in this one the two witnesses are different.
:::

:::osservazione
The order of the quantifiers changes the meaning of a sentence.

- “Every student consults a tutor.” For every student there is a tutor, who changes from one student to another.
- “There is a tutor consulted by all the students.” The tutor is a single person, the same for everyone.

If Anna and Bruno consult the tutor Rossi and Carla consults the tutor Bianchi, the first sentence is true and the second is false, because neither tutor is consulted by all three. When the second sentence is true, so is the first, because the common tutor is a tutor for each student.
:::

## Counting with sets

:::definizione{#conteggi-insiemi titolo="Disjoint regions"}
For a finite set $A$, the symbol $|A|$ denotes the number of its elements.

In a group of people, let $A$ be the set of those who play an instrument and $B$ the set of those who play a sport. Each person lies in exactly one of four regions: A only, B only, both, neither. The regions are **disjoint**, that is, they have no elements in common, so in the sum of their counts each person is counted once and the sum is the total $N$ of the group.

::venn{tipo="due" nomi="A,B" universo="1" elementi="a:12;ab:5;b:8;u:7" titolo="The four regions contain 32 elements in total"}

In the diagram the rectangle represents the whole group and each number says how many elements its region contains.

- $|A|=12+5=17$, because $A$ consists of the region “A only” and the common region. Similarly, $|B|=8+5=13$.
- The **union** $A\cup B$ is the set of elements that belong to at least one of the two sets, and contains $12+5+8=25$ elements.
- The elements with exactly one property, that is, those belonging to only one of the two sets, number $12+8=20$.
- The whole group contains $N=25+7=32$ elements.
:::

::::teorema{#inclusione-esclusione titolo="Inclusion and exclusion"}
For two finite sets $A$ and $B$,
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
The elements with exactly one property number
$$
|A|+|B|-2|A\cap B|.
$$
With the numbers in the diagram, $|A\cup B|=17+13-5=25$ and the elements with exactly one property number $17+13-2\cdot 5=20$, as in the count by regions.

:::dimostrazione
In the sum $|A|+|B|$ an element that belongs to only one set is counted once, while a common element is counted twice, once in $|A|$ and once in $|B|$. In the union each element must be counted once, so $|A\cap B|$ is subtracted once. Among the elements with exactly one property the common ones must not be counted, so $|A\cap B|$ is subtracted twice.
:::
::::

:::esempio{titolo="A lower bound without knowing the intersection"}
In a group of $N=30$ people, $19$ speak French and form the set $A$, while $16$ speak German and form the set $B$. The minimum number of people who speak both languages is required.

The inclusion and exclusion formula gives $|A\cap B|=19+16-|A\cup B|=35-|A\cup B|$. There are $30$ people, so the union has at most $30$ elements and the intersection at least $35-30=5$. The value $5$ is attained with $14$ people who speak only French, $11$ who speak only German and $5$ who speak both, because $14+11+5=30$. The intersection is contained in $B$, so it has at most $16$ elements, and the value $16$ is attained when all the people who speak German also speak French. In general,
$$
\max(0,|A|+|B|-N)\le |A\cap B|\le\min(|A|,|B|),
$$
where $\le$ is read “less than or equal to”, $\max$ denotes the largest and $\min$ the smallest of the numbers listed. The $0$ is needed when $|A|+|B|$ is less than $N$. A minimum or a maximum is established only when a distribution that attains it is also described.
:::

:::osservazione
With three sets, the three counts are added, the three pairwise intersections are subtracted and the intersection of all three is added. An element common to all three is counted three times in the sum and removed three times with the pairwise intersections, so the final addition counts it once. For example, with sets of $10$, $9$ and $8$ elements, pairwise intersections of $4$, $3$ and $2$ elements and $1$ element common to all three, the union contains $10+9+8-4-3-2+1=19$ elements. In the questions the intersection of two sets also includes the elements common to all three, unless stated otherwise.
:::

## Orders, assignments and networks

:::definizione{#vincoli titolo="Constraints and configurations"}
A **configuration** is a complete arrangement of the elements, for example the finishing order of four runners. A **constraint** is a condition that the configuration must satisfy, for example “Anna finishes before Bruno”. The answer is sought among the configurations that satisfy all the constraints.

In an order without ties, that is, without two elements in the same position, $A<B$ means “A precedes B”. From $A<B$ and $B<C$ it follows that $A<C$. “A is immediately before B” also requires that no element lies between A and B.

In a **one-to-one assignment** each person receives a single role and each role is assigned to a single person. The assignments are recorded in a table with one row per person and one column per role, in which the cells ruled out by the constraints are marked. Dario, Elena and Franco share the roles of goalkeeper, defender and striker, with the constraints “Dario is neither goalkeeper nor defender” and “Elena is not goalkeeper”.

| | Goalkeeper | Defender | Striker |
| --- | --- | --- | --- |
| Dario | no | no | |
| Elena | no | | |
| Franco | | | |

Dario has only one cell left, so Dario is the striker and this role is ruled out for Elena and Franco. Elena is then left with defender, and Franco with goalkeeper. When every person has several cells left, the cases are examined separately, and in each all the original constraints hold.
:::

:::esempio{titolo="A block of consecutive activities"}
Four activities A, B, C, D occupy slots $1$, $2$, $3$, $4$. There are three constraints: B takes place immediately after A, C precedes A, D occupies the last slot.

D occupies slot $4$, so A, B, C occupy the first three slots. A and B are consecutive, so they occupy slots $1$ and $2$ or slots $2$ and $3$. In the first case A would be in slot $1$ and C would have no earlier slot. The second case remains, with C in slot $1$. The order is **C, A, B, D** and it is the only one that satisfies the three constraints.

With the single constraint “A precedes C” several orders are allowed, among them A, B, C, D and B, A, C, D and D, A, C, B. Each of A, B and D *can* be first, because it is first in one of these orders. No activity *must* be first, because the valid orders do not all start with the same one.
:::

:::definizione{#reti titolo="Connections and paths"}
A **network** consists of points, called **vertices**, and **connections** between pairs of vertices. The vertices represent places, for example the stops of a bus, and the connection between A and B is written A–B. In a *directed* network each connection has a direction, like a one-way street, while in an *undirected* network it can be travelled both ways.

A **path** is a sequence of connections where each one starts from the vertex where the previous one ends. A vertex can be reached from another when there is a path joining them, and this is settled from the list of connections, not from how close the vertices are in the drawing.

In the undirected network with connections A–B, B–C and B–D, the only connection of A is A–B, so every path from A to D passes through B. Removing B with its connections leaves A separated from C and from D. Adding the connection A–D instead, D is reached from A without passing through B.

The paths between two vertices are counted by listing, vertex by vertex, the connections that leave it. In the directed network with connections A→B, A→C, B→D and C→D, from A one goes to B or to C, and from each of them only to D. There are therefore two paths from A to D, A→B→D and A→C→D.
:::

## Sequences, procedures and guarantees

:::definizione{#procedure titolo="Initial state and instructions"}
A **procedure** is a list of instructions carried out in order starting from a given value, called the **initial state**. In the procedure “start from $4$, double, then subtract $1$” the initial state is $4$, the first operation gives $2\cdot 4=8$ and the second gives $8-1=7$. “The value after two operations” is $7$, whereas “the second value, counting the initial one” is $8$.

A **sequence** is an ordered list of numbers, called terms. The term in position $n$ is denoted by $a_n$, which is read “a sub $n$”. A sequence is **periodic** when a block of $k$ terms repeats unchanged. The remainder of the division of $n$ by $k$ gives the place of $a_n$ within the block, and a remainder of $0$ corresponds to the last place. In the sequence $3, 5, 8, 3, 5, 8, \dots$ the block has $k=3$ terms. Since $20=3\cdot 6+2$, the remainder is $2$ and $a_{20}$ is the second term of the block, that is, $5$.

A sequence is defined **by recurrence** when each term is calculated from the previous ones. The rule $a_{n+2}=a_{n+1}+a_n$ says that each term is the sum of the two before it. Applying it requires the first two terms, called initial conditions. With $a_1=1$ and $a_2=1$ this gives $a_3=1+1=2$, then $a_4=2+1=3$ and $a_5=3+2=5$.
:::

:::attenzione
A finite list of numbers, without a stated rule, admits more than one continuation. The list $2, 4, 8$ continues with $16$ if each term is double the previous one, and continues with $14$ if the differences between consecutive terms are $+2$, $+4$, $+6$. For this reason the questions state the rule, or ask which of the proposed rules produces all the given terms.
:::

::::teorema{#cassetti titolo="The pigeonhole principle"}
If $7$ socks are put into $3$ drawers, at least one drawer contains at least $3$ of them. Indeed, with at most $2$ socks per drawer, there would be at most $3\cdot 2=6$ socks in all.

In general, if more than $kr$ objects are distributed among $k$ groups, at least one group contains at least $r+1$ objects. In the example $k=3$, $r=2$ and there are $7$ objects, more than $kr=6$.

:::dimostrazione
If each group contained at most $r$ objects, there would be at most $kr$ objects in all. There are more than $kr$ objects, so at least one group contains more than $r$, that is, at least $r+1$. With $kr$ objects the conclusion is not guaranteed, because $r$ objects can be put in each group. Hence $kr+1$ is the smallest number that guarantees a group with at least $r+1$ objects.
:::
::::

:::esempio{titolo="Guaranteeing a colour or a repetition"}
A bag contains $4$ red tokens and $6$ blue ones, which are drawn without looking and without putting them back. A number of draws guarantees a result when the result is obtained even in the worst case.

To guarantee at least one red token, the worst case is that all $6$ blue tokens come out first. After them only red tokens remain in the bag, so $6+1=7$ draws are needed.

To guarantee two tokens of the same colour, the worst case is that the first two tokens have different colours. The third token has the colour of one of the first two, so $3$ draws are enough. This is the pigeonhole principle with $k=2$ colours and $r=1$.
:::

## Arguments and checking conclusions

:::definizione{#argomentazioni titolo="Assumptions and conclusions of an argument"}
An **argument** is reasoning that starts from a fact and reaches a conclusion. Consider “the new library timetable is useful, because attendance has increased since it came into force”. The fact is the increase in attendance and the conclusion is that the timetable is useful. The **implicit assumption**, that is, the premise the argument uses without writing it, is that the increase is due to the timetable. The increase, however, also has other explanations, for example a rise in the number of members or a different way of recording attendance.

Information **strengthens** the argument if it makes the step from the fact to the conclusion more credible, and **weakens** it if it makes that step less credible.

- “The number of members has stayed the same” strengthens the argument, because it rules out an alternative explanation.
- “The number of members has doubled” weakens it, because it supplies an alternative explanation.

Strengthening an argument is less than proving its conclusion, and weakening it is less than proving the conclusion false.
:::

:::esempio{titolo="A controlled comparison"}
Two groups of students take the same test. Group 1, which studied with a new worksheet, scores $26$ points out of $30$ on average. Group 2, which studied without the worksheet, scores $22$. The argument is “the worksheet is useful, because the group that used it scored $4$ points more”.

- If group 1 already had a $4$-point lead before receiving the worksheet, the argument is weakened, because the difference is explained by the starting level of preparation.
- If before the worksheet the two groups had the same average and then studied for the same number of hours, the argument is strengthened, because these two alternative explanations are ruled out.
:::

:::osservazione
An answer is checked by building a concrete situation that satisfies all the data in the question and verifying that the answer is true in it. In problems with numbers, the check is that a number of people is a non-negative integer and that the parts add up to the given total. In verbal problems, the check concerns the meaning of “all”, “some” and “none” and whether the premises used together refer to the same person.

A conclusion that requires a premise not written in the question remains undetermined, even when the premise seems reasonable.
:::
