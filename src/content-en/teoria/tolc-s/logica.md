---
titolo: "Logical reasoning and problems"
sommario: "Statements, conditions, quantifiers, sets, constraints and procedures with examples, diagrams and checks of conclusions."
---

## Statements and truth values

:::definizione{#enunciati titolo="Statements and premises"}
A **statement** is a sentence that, in the context under consideration, can be assigned the value true or false. “The code contains four digits” is a statement; “enter the code” is an instruction. The letters $P,Q,R$ represent complete statements. Each letter keeps the same meaning throughout the argument, even when it appears again within a longer formula.

The **premises** are the information assumed to be true. A conclusion follows from the premises when it is true in every situation satisfying them. The everyday plausibility of a conclusion does not replace this check. If the text states that all the electric vehicles in a depot are red, the deduction concerns that particular depot, even if electric vehicles of other colors exist elsewhere.
:::

:::esempio{titolo="A possible conclusion and a necessary one"}
All numbered samples are cataloged. Sample $a$ is cataloged. The sample might be numbered, but it might also belong to the part of the cataloged samples without a number. The premises allow both cases, so whether $a$ is numbered is **undetermined**. If instead the fact about the sample were “$a$ is numbered”, its being cataloged would follow from the rule and would be a necessary conclusion.

A **counterexample** is a situation in which all the premises are true and the proposed conclusion is false. One counterexample is enough to reject a deduction; proving it requires covering all the allowed situations. This difference explains why finding a favorable case does not establish a universal conclusion.
:::

:::osservazione
“Can be true” requires at least one compatible situation; “must be true” requires every compatible situation; “is impossible” requires that none is compatible. These three requests can concern the same premises and have different answers. Information that is not stated remains unrestricted, unless it is determined by the other conditions.
:::

## Connectives and negations

:::definizione{#connettivi titolo="Conjunction and disjunction"}
The **conjunction** $P\land Q$ is true when both statements are true. The **inclusive disjunction** $P\lor Q$ is true when at least one is true, including the case in which both are true. The negation $\neg P$ reverses the truth value of $P$. In the table, T means true and F means false.

| $P$ | $Q$ | $P\land Q$ | $P\lor Q$ |
| --- | --- | --- | --- |
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |

The phrase “exactly one” requires at least one true statement and rules out both being true. It is therefore expressed by $(P\lor Q)\land\neg(P\land Q)$. Unless further qualifications are given, the word “or” is read inclusively in the questions in this chapter.
:::

::::teorema{#de-morgan titolo="De Morgan's laws"}
For any statements $P,Q$, the following equivalences hold:
$$
\neg(P\land Q)\iff(\neg P)\lor(\neg Q),
$$
$$
\neg(P\lor Q)\iff(\neg P)\land(\neg Q).
$$
They allow a compound requirement to be negated without losing any of its allowed cases.

:::dimostrazione
The conjunction is false in three rows of the table, precisely those in which at least one statement is false. Its negation is therefore equivalent to the disjunction of the negations. The disjunction is false only in the last row, where both are false. Its negation is therefore equivalent to the conjunction of the negations.
:::
::::

:::esempio{titolo="Requirements for a request"}
A request is complete exactly when it includes a signature and at least one contact detail, either a telephone number or an email address. Writing these three facts as $F,T,E$, completeness is $F\land(T\lor E)$. The request is incomplete when
$$
\neg\bigl(F\land(T\lor E)\bigr)
\iff \neg F\lor(\neg T\land\neg E).
$$
Thus either a missing signature or the absence of both contact details is enough. The presence of a signature alone leaves the completeness of the request undetermined.
:::

## Implications and conditions

:::definizione{#implicazione titolo="Implication"}
The statement $P\Rightarrow Q$, read “if $P$, then $Q$”, rules out only the case in which $P$ is true and $Q$ is false. $P$ is called the antecedent and $Q$ the consequent. For example, “if the sensor detects smoke, it sends an alert” is violated when the sensor detects smoke and no alert is sent.

| $P$ | $Q$ | $P\Rightarrow Q$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

The table gives two useful expressions. The implication is equivalent to $\neg P\lor Q$; its negation is equivalent to $P\land\neg Q$. When the antecedent is false, the rule does not determine the value of the consequent.
:::

::::teorema{#contrapposta titolo="Contraposition and deduction"}
The implication $P\Rightarrow Q$ is equivalent to its **contrapositive** $\neg Q\Rightarrow\neg P$. From $P\Rightarrow Q$ together with $P$, we obtain $Q$; from the same rule together with $\neg Q$, we obtain $\neg P$.

:::dimostrazione
Both implications are false in the same case, namely $P$ true and $Q$ false, so they always have the same truth value. If the rule is true and $P$ is true, the case $Q$ false is ruled out. If the rule is true and $Q$ is false, the case $P$ true is ruled out. This justifies both deductions without additional information.
:::
::::

:::definizione{#necessario-sufficiente titolo="Necessary and sufficient conditions"}
In $P\Rightarrow Q$, $P$ is **sufficient** for $Q$, while $Q$ is **necessary** for $P$. “Entry is allowed only if a badge is held” means entry $\Rightarrow$ badge. “A badge is enough for entry” means badge $\Rightarrow$ entry. The two sentences express different constraints. If both hold, we write entry $\iff$ badge and call the condition necessary and sufficient.

The sentence “the visit takes place unless the museum is closed”, understood as a guarantee in every case in which it is open, means museum open $\Rightarrow$ visit. When the museum is closed, this sentence alone does not determine whether the visit might take place elsewhere. The meaning of exceptions therefore depends on the precise wording of the question.
:::

:::attenzione
From “if it rains, the courtyard is wet” and “the courtyard is wet”, it does not follow that it is raining. The courtyard might have been washed. Similarly, the absence of rain does not guarantee a dry courtyard. These two errors replace the rule with its converse or negate both parts without reversing their order.
:::

## Quantifiers and sets

:::definizione{#quantificatori titolo="All, some, none"}
The **universal** quantifier “all” concerns every element of a set. In logic questions, the **existential** quantifier “some” means at least one. “All A are B” is represented by $A\subseteq B$; “some A are B” requires $A\cap B\ne\varnothing$; “no A is B” requires $A\cap B=\varnothing$.

A universal property does not assert that any elements exist. If a laboratory has no microscopes, “all the microscopes in the laboratory have been serviced” is contradicted by no object. To infer that a serviced instrument exists, it is also necessary to know that at least one microscope exists.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="All A are B: A is contained in B"}
:::

:::teorema{#negazione-quantificatori titolo="Negating quantifiers"}
The negation of “all A are B” is “there is at least one A that is not B”. The negation of “some A are B” is “no A is B”. The negation of “no A is B” is “at least one A is B”. Negating “exactly one” means allowing zero or at least two elements with the property.

To negate “every student has read at least one text”, there must be a student who has read no text. Saying that every student has left at least one text unread would be different: even someone who has read many texts might satisfy that last sentence.
:::

:::esempio{titolo="A witness carried through two premises"}
Some technicians are volunteers, and all volunteers are insured. The first premise guarantees a person who is both a technician and a volunteer. The second applies to that same person, so **some technicians are insured**. It does not follow that all technicians are insured, because technicians outside the volunteer group remain unrestricted.

From “some A are B” and “some B are C”, however, it does not follow that some A are C. Two distinct elements can satisfy the two existence statements: one belongs to A and B, the other to B and C, and neither belongs to A and C. The identity of the element used in the deduction is therefore decisive.
:::

:::osservazione
In “every student consults a tutor”, the tutor may vary from student to student. “There is a tutor consulted by all students” requires a single person in common. The second sentence always implies the first: the shared tutor provides a witness for each student. The first, however, does not guarantee the second. The order of the expressions “every” and “there is” changes what is asserted.
:::

## Counting with sets

:::definizione{#conteggi-insiemi titolo="Disjoint regions"}
For a finite set $A$, the symbol $|A|$ denotes its number of elements. Two properties determine four regions: A only, B only, both, neither. These regions are **disjoint**, so their counts can be added without counting a person twice. If $N$ is the total size of the group, the four regional counts add up to $N$.

::venn{tipo="due" nomi="A,B" universo="1" elementi="a:12;ab:5;b:8;u:7" titolo="The four regions contain 32 elements in total"}

In the diagram, $|A|=12+5=17$, $|B|=8+5=13$, the union contains $25$ elements and the whole group contains $32$. The elements with exactly one property number $12+8=20$.
:::

::::teorema{#inclusione-esclusione titolo="Inclusion and exclusion"}
For two finite sets,
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
The elements with exactly one property number
$$
|A|+|B|-2|A\cap B|.
$$

:::dimostrazione
In the sum $|A|+|B|$, common elements are counted twice, while the others are counted once. The union must retain one copy of every common element, so the intersection is subtracted once. To exclude the common elements completely, both copies must be subtracted, so the intersection is subtracted twice.
:::
::::

:::esempio{titolo="A lower bound without knowing the intersection"}
Among $30$ people, $19$ speak French and $16$ speak German. There are $35$ memberships in total, but only $30$ people. Therefore at least $5$ people occur in both groups. In general,
$$
\max(0,|A|+|B|-N)\le |A\cap B|\le\min(|A|,|B|).
$$
The lower bound is reached by making the union as large as possible; the upper bound is reached by placing the smaller group inside the larger. To claim that a minimum or maximum is attainable, a distribution realizing it must also be described.
:::

:::osservazione
With three sets, add the three counts, subtract the three pairwise intersections and add the triple intersection. Unless stated otherwise, pairwise intersections include the elements common to all three sets. An element shared by all three is added three times and subtracted three times; the final addition counts it exactly once.
:::

## Orders, assignments and networks

:::definizione{#vincoli titolo="Constraints and configurations"}
A **constraint** limits the allowed configurations. In an order without ties, $A<B$ means that A precedes B. From $A<B$ and $B<C$, it follows that $A<C$. “Immediately before” also requires that there is no intervening element. In one-to-one assignments, each person receives a single role and each role is assigned exactly once.

A table can record possible assignments. If a role is already occupied, it is ruled out for the other people. If a person has only one remaining possibility, that assignment is forced. When several possibilities remain, the cases are examined separately, keeping all the original constraints in each case.
:::

:::esempio{titolo="A block of consecutive activities"}
Four activities A, B, C, D occupy four slots. B takes place immediately after A, C precedes A and D finishes. The block AB can occupy only slots $2$ and $3$, because it must leave C before it and D after it. The complete order is therefore C, A, B, D. The adjacency constraint adds information that the relation $A<B$ alone does not contain.

If instead only A preceding C were known, with B and D unrestricted, many orders would be allowed. To answer “who can be first”, it is enough to construct a valid order for each candidate; to answer “who must be first”, every valid order must start with the same person.
:::

:::definizione{#reti titolo="Connections and paths"}
A network is described by vertices, representing places or activities, and connections between vertices. In directed questions, each connection has a direction; in undirected questions, it can be traversed both ways. A path is a sequence of consecutive connections. Whether a place can be reached depends on the available connections, not on the visual distance between labels.

In a network with connections A–B, B–C and B–D, every path from A to D passes through B. Removing B separates A from the rest. Adding A–D removes that compulsory passage. To count paths of a fixed length, the successors of each position can be listed, respecting any restrictions on repetition.
:::

## Sequences, procedures and guarantees

:::definizione{#procedure titolo="Initial state and instructions"}
A procedure specifies an initial state and an updating rule. For example, starting at $4$, doubling and then subtracting $1$ produces $8$ and then $7$. The phrase “after two operations” concerns $7$, whereas “the second value, counting the initial one” concerns $8$. Counting operations must therefore be distinguished from counting listed values.

In periodic sequences, a block of length $k$ repeats. Dividing the position by $k$ identifies the place within the block: a remainder of zero corresponds to the final position. In a recursively defined sequence such as $a_{n+2}=a_{n+1}+a_n$, each value uses values already obtained, and the initial conditions must be given.
:::

:::attenzione
A finite list, without a stated rule or class of rules, admits many continuations. The questions in this chapter specify the procedure or ask which of the proposed rules agrees with all the data. Similarity between the first increments alone does not prove that there is a unique continuation.
:::

::::teorema{#cassetti titolo="The pigeonhole principle"}
If more than $kr$ objects are distributed among $k$ groups, at least one group contains at least $r+1$ objects.

:::dimostrazione
If each group contained at most $r$ objects, the total would be at most $kr$. A larger total makes this situation impossible, so at least one group exceeds $r$. To establish the smallest number guaranteeing the property, it is also necessary to check that $kr$ objects can actually be distributed with $r$ in each group.
:::
::::

:::esempio{titolo="Guaranteeing a color or a repetition"}
A bag contains $4$ red tokens and $6$ blue ones. Guaranteeing at least one red token requires $7$ draws without replacement: all six blue tokens could be drawn first. Guaranteeing two tokens of the same color requires only $3$, because two colors can accommodate at most one token each without repetition. The two questions use different worst cases, even though they concern the same bag.
:::

## Arguments and checking conclusions

:::definizione{#argomentazioni titolo="Assumptions and conclusions of an argument"}
An argument connects data and a conclusion through a rule, which is sometimes left implicit. “The new schedule is useful because attendance has increased” uses attendance data to assess the schedule. Attributing the increase to the schedule requires ruling out relevant alternative explanations, such as increased enrollment or a different attendance-recording method.

Information **strengthens** an argument if it makes the connection better supported; it **weakens** it if it supplies contrary data or an alternative explanation. Neither verb necessarily means proving or definitively refuting the claim. The question may ask only which information is most relevant to the stated conclusion.
:::

:::esempio{titolo="A controlled comparison"}
Two groups take the same test. One group studied with a new worksheet and achieves better results. If that group was already better prepared before using the worksheet, the final result alone does not isolate the effect of the material. If instead the initial conditions and study time are comparable, the comparison provides more direct support for the worksheet's usefulness. Observing results remains distinct from drawing a causal conclusion.
:::

:::osservazione
An answer is checked by reconstructing a concrete situation with all the data. In numerical problems this check includes units, allowed integers and the available total; in verbal problems it includes the meaning of quantifiers and the identity of the people mentioned. A conclusion requiring an additional premise remains undetermined, even when that premise appears reasonable.
:::
