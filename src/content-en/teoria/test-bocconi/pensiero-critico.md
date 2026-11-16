---
titolo: "Critical thinking"
sommario: "Drawing conclusions from data or constraints and assessing statements against a short passage."
---

## Given information and propositions

:::definizione{#dati-e-proposizioni titolo="Consequence of the given information"}
The **premises** are the statements the question assumes to be true. A **proposition** is a statement that can be true or false once the situation is fixed. A situation is *consistent with the premises* if it satisfies every premise. A proposition is necessarily true if it holds in every such situation and necessarily false if it is false in each of them.

In a passage, the premises may appear alongside background details. A deduction begins by identifying who or what the proposition is about and which facts apply to them. If two sentences refer to different groups or periods, information about the first also applies to the second only if the passage establishes a connection.
:::

:::esempio{titolo="Opening hours and duration"}
A laboratory opens at 9 a.m. and closes at 1 p.m. A survey starts at 11 a.m. and takes place entirely during opening hours. It lasts at most two hours because it must finish by 1 p.m. It cannot last three hours, which would place the end at 2 p.m. A duration of two hours is consistent with the premises because the survey could finish exactly at closing time. A one-hour duration also fits the facts. The actual duration therefore remains undetermined.
:::

:::osservazione
The question determines how many situations need to be considered. To show that a proposition is *possible*, it suffices to find one situation in which it is true and all premises hold. To show that it is *necessary*, the reasoning must apply in every such situation. In the opening-hours example, the two-hour limit follows directly from the closing time and holds whatever the duration. One situation in which the survey takes two hours shows only that the limit can be reached.
:::

:::esempio{titolo="Complete and incomplete information"}
A room contains exactly nine chairs. Each chair is a single color, red or blue. Five are red. Since these colors are the only possibilities, four chairs are blue. If the total and the number of red chairs were given with no restriction on colors, the other four chairs could all be blue, all green or a mixture of colors. The complete list of possibilities, together with the total, determines the number of blue chairs.
:::

## Quantifiers and sets

:::definizione{#quantificatori-e-insiemi titolo="All, none and at least one"}
A **quantifier** indicates how many elements a property applies to. Let $A$ and $B$ be the subsets of a universe $U$ whose elements satisfy two properties. Saying that every $A$ is a $B$ means that $A$ is contained in $B$, written $A\subseteq B$. Saying that no $A$ is a $B$ means that the intersection $A\cap B$ is empty. Saying that some $A$ is a $B$ means that $A\cap B$ contains at least one element.

An inclusion describes where the elements of $A$ lie, if there are any. A universal statement is therefore also consistent with an empty $A$. Concluding that there is a shared element requires an existence premise, such as the facts that $A$ is nonempty and that $A\subseteq B$.
:::

:::esempio{titolo="An inclusion with a known element"}
Every file with a blue label has been cataloged. File 12 has a blue label. Let $A$ be the set of files with blue labels and $B$ the set of cataloged files. Then $A\subseteq B$. Since file 12 belongs to $A$, it also belongs to $B$. At least one file has therefore been cataloged. The passage leaves open the possibility that a file with a different label has also been cataloged.

::venn{tipo="incluso" nomi="B,A" zone="ab" elementi="ab:12" titolo="File 12 belongs to A and therefore also to B"}

:::

:::osservazione
The negation of ‘every $A$ is a $B$’ requires at least one $A$ outside $B$. For example, blue-labeled file 35 still awaiting cataloging would be enough to disprove the rule about labels, even if all the other blue-labeled files had been cataloged. The negation of ‘no $A$ is a $B$’ requires at least one element in the intersection. A counterexample must satisfy every premise still in force.
:::

:::esempio{titolo="Bounds on a quantity"}
A group includes at least three assistants and at most five. The number $n$ of assistants satisfies $3\leq n\leq 5$, so it can be 3, 4 or 5 provided the other facts permit those values. The statement ‘the group has fewer than five assistants’ would exclude 5. Concluding that the group has exactly five assistants would require another fact, such as a minimum of five.
:::

## Conditions and implications

:::definizione{#condizioni-e-implicazioni titolo="Sufficient and necessary conditions"}
Let $P$ and $Q$ be two propositions. The **implication** $P\implies Q$ states that whenever $P$ is true, $Q$ is also true. Here $P$ is a *sufficient* condition for $Q$, and $Q$ is a *necessary* condition for $P$. The phrase ‘$P$ only if $Q$’ therefore translates to $P\implies Q$. ‘$P$ if $Q$’ points in the direction $Q\implies P$.

If $P\implies Q$ holds and $Q$ is false, then $P$ is false. Indeed, if $P$ were true, $Q$ would have to be true as well. This inference is **contraposition**. When all that is known is that $Q$ is true, the implication leaves open both the possibility that $P$ is true and the possibility that it is false.
:::

:::esempio{titolo="A rule for entry"}
A room can be opened only with an authorized access card. Proposition $P$ says that a person opened the room. Proposition $Q$ says that they used an authorized access card. The rule gives $P\implies Q$. If the person opened the room, they used an authorized card. If they used an authorized card, the rule alone leaves the outcome open. A second lock could still be locked, for example. In that situation $Q$ is true and $P$ is false, and the rule still holds.
:::

:::osservazione
The phrase ‘if and only if’ comprises two implications. For example, an order is completed if and only if it passes inspection and payment has been received. For every completed order, both conditions are met. Passing inspection *together with* receipt of payment is also enough for completion.

In logic, ‘$P$ or $Q$’ includes the possibility that both are true unless the passage calls for *exactly one*. If a rule permits applicants to supply a receipt or a transaction code, supplying both meets the minimum requirement. If it requires them to choose a single submission method, the two methods are mutually exclusive. The wording of the rule determines which interpretation applies.
:::

## Constraints and ordering

:::definizione{#vincoli-e-ordinamenti titolo="Feasible situations"}
A **constraint** limits which situations are possible. In a problem with several constraints, a situation is feasible if it satisfies all of them *at the same time*. When there are few cases, it is useful to list those permitted by some of the facts and then rule out any that violate a second condition. A property follows from the premises if it holds in all the remaining cases.

In a sequence, ‘before’ is a transitive relation. If $A$ is before $B$ and $B$ is before $C$, then $A$ is before $C$. The phrase ‘immediately before’ additionally requires consecutive positions. The distance between the two positions is therefore a second condition.
:::

:::esempio{titolo="Ordering four tasks"}
Four distinct tasks $A$, $B$, $C$ and $D$ occupy four positions, starting with the first. $B$ comes immediately after $D$, while $A$ comes before $D$. Also, $C$ must come last. This leaves positions 1, 2 and 3 for $A$, $D$ and $B$. Since $D$ requires a position before it and another after it, it occupies position 2. The order is therefore $A,D,B,C$.

If the constraint placing $C$ last is dropped, the sequence $A,C,D,B$ becomes feasible. $A$ still comes before $D$, and the pair $D,B$ occupies consecutive positions. The first order shows that $D$ can be second, while the second order shows that it can be third.
:::

:::esempio{titolo="Allocation to distinct places"}
Three appointments $L$, $M$ and $N$ are assigned to three rooms, one per room. $L$ can use only rooms 1 and 2. $N$ uses room 3. $M$ can also use only rooms 1 and 2. There are two feasible allocations.

| Room 1 | Room 2 | Room 3 |
| --- | --- | --- |
| $L$ | $M$ | $N$ |
| $M$ | $L$ | $N$ |

In each allocation, either $L$ or $M$ uses room 1. This disjunction therefore follows from the premises. Assigning room 1 to $L$ is merely possible. The table distinguishes the two claims without introducing preferences among the rooms.
:::

## Exceptions and the scope of a rule

:::definizione{#eccezioni-e-ambito titolo="Scope and exceptions"}
The **scope** of a rule is the group of people, objects or times to which it applies. In the sentence ‘nonurgent applications go through standard review’, the condition *nonurgent* identifies the applications subject to the procedure. To determine what happens to urgent applications, one must see whether the passage also sets out a procedure for them or expressly excludes them from standard review.

Wording such as ‘the rule applies to nonurgent applications’ defines the scope, while ‘urgent applications are exempt from review’ fixes an outcome for urgent applications. Dates also form part of the scope. If a rule applies from Monday onwards, information from the previous Friday falls outside the specified period.
:::

:::esempio{titolo="A condition for two groups"}
Visitors who are not suppliers use the west entrance. Suppliers with scheduled deliveries use the north entrance. A person attending the visit is a supplier and has a scheduled delivery. The second rule applies to that person, so the designated entrance is the north one. For a supplier without an appointment, the passage assigns no entrance. The outcome for that supplier is undetermined even though the passage gives a rule for suppliers with appointments.
:::

:::osservazione
‘At least’, ‘at most’ and ‘only’ may apply to just one part of a sentence. ‘Each shift has at least one person with experience’ does not require every worker on the shift to have experience. ‘Only evening-shift workers have access to storage’ implies that any worker with access works on the evening shift. An evening-shift worker may still lack access. Thus ‘only’ limits the group that can have the property without assigning it to every member of that group.
:::

:::esempio{titolo="Observation period"}
A register covers 3 to 7 June and lists every application submitted on those dates. Eleven applications appear in that period, and all are complete. ‘Every application submitted from 3 to 7 June was complete’ follows from the register. The same statement for the whole of June is undetermined. An incomplete application dated 12 June would make it false and would be consistent with the register. A month in which the other applications were all complete would be equally consistent.
:::

## True, false or cannot be determined

:::definizione{#vero-falso-indeterminato titolo="The three judgments"}
When a question offers **True**, **False** and **Cannot be determined**, the judgment is based on the passage. There are three cases.

- **True** if the statement follows from the information given. It may be stated in the passage or established by deduction.
- **False** if its negation follows from the facts. The passage rules out every situation in which the statement would be true.
- **Cannot be determined** if the facts allow at least one situation in which the statement is true and at least one in which it is false.

For the third judgment, two fully specified examples are useful. The two situations may differ only in the missing fact. In both, the given quantities, constraints and scope must be preserved.
:::

:::esempio{titolo="Two possible arrival times"}
A ferry leaves at 8 a.m. and takes at least 40 minutes and at most one hour. ‘It arrives before 8:30 a.m.’ is false because the earliest arrival is at 8:40 a.m. ‘It arrives by 9 a.m.’ is true because the maximum duration puts the arrival at 9 a.m. ‘It arrives before 8:50 a.m.’ cannot be determined. A 45-minute crossing makes the statement true, and a 55-minute crossing makes it false. Both durations meet the given bounds.
:::

:::osservazione
‘The passage allows us to rule out $P$’ and ‘the passage allows us to conclude $P$’ are different requests. Finding a single consistent counterexample rules out that $P$ is necessarily true. To classify $P$ as false, its negation must hold in every case. In the ferry example a 55-minute crossing rules out the necessity of arriving before 8:50 a.m. A 45-minute crossing confirms that arrival before 8:50 a.m. is still possible.
:::

:::esempio{titolo="Negating an existence claim"}
If a cabinet contains exactly four folders and all of them are closed, ‘at least one folder is open’ is false because each of the four is closed. If the passage says only that one of the four folders is closed, at least one of the other three could be open. They could also all be closed. In that case the same claim cannot be determined.
:::

## Claims based on data

:::definizione{#affermazioni-sui-dati titolo="Comparing counts and proportions"}
An **absolute count** gives the number of units. A **proportion** expresses that count relative to its total. Comparing two counts answers a different question from comparing their proportions. When moving from one group to another, the relevant total for each value must therefore be identified.

In a table with a value for each group and period, a cell refers to the intersection of its row and column. A total can be interpreted as the sum of the entries only if the parts are disjoint and exhaust the group, or if the passage explicitly defines that total this way.
:::

:::esempio{titolo="Two samples of different sizes"}
In an illustrative inspection, 15 components in a batch of 60 and 16 components in a batch of 80 pass an additional test. The second batch has more passes in absolute terms because $16>15$. The two proportions are

$$
\frac{15}{60}=\frac{1}{4}=25\%, \qquad \frac{16}{80}=\frac{1}{5}=20\%.
$$

The first batch therefore has the higher proportion. The counts establish the comparison between the observed batches. Attributing the difference to the manufacturing process would require information that isolates its effect from differences in materials, equipment and measurement conditions.
:::

:::osservazione
Two counts for overlapping categories may count some items twice. For example, if 12 visits per month include the main room and 8 include the side room, there are 20 distinct visits to at least one of the two rooms only if no visit includes both. If three visits include both, there are $12+8-3=17$ distinct visits. If the overlap is unknown, the sum of 20 is the largest possible total and the exact number remains undetermined.
:::

:::esempio{titolo="A bound from incomplete results"}
Twenty-four checks are scheduled during a shift. Twelve have passed so far and five others have failed. That leaves $24-12-5=7$ checks. Even if all seven pass, there will be $12+7=19$ passes. ‘The shift could have at least 20 passes’ is therefore false. The final count can still range from 12 to 19.
:::

## Questions with several propositions

:::definizione{#combinazioni-di-proposizioni titolo="Evaluating the propositions separately"}
When a question presents several numbered propositions, each is assessed against the same premises. A listed proposition is a statement to evaluate and does not become a premise for the others. An answer such as ‘I and III only’ states that the two propositions meet the specified criterion, while the others fall outside it.

If the criterion is ‘which are necessarily true’, a proposition that cannot be determined is excluded along with those that are false under the premises. If the criterion is ‘which are necessarily false’, a proposition that cannot be determined is again excluded. A change in criterion can change the answer even though the premises remain the same.
:::

:::esempio{titolo="Three statements about one rule"}
In an association all adult members can vote. At least one adult member is present. The passage also states that visitors are not members. Consider the three propositions I ‘At least one member can vote’, II ‘No adult member is present’ and III ‘Every member can vote’.

| Proposition | Judgment | Decisive step |
| --- | --- | --- |
| I | True | The adult member present can vote. |
| II | False | An adult member is stated to be present. |
| III | Cannot be determined | The voting rights of members who are minors are unspecified. |

For III, an association whose members are all adults satisfies the claim. An association with at least one member who is a minor and is barred from voting also fits the premises, but falsifies the claim. The answer to ‘Which are necessarily true?’ is therefore ‘I only’. For ‘Which are necessarily false?’ the answer is ‘II only’.
:::

:::osservazione
‘Which proposition is consistent with the premises?’ asks what is possible. ‘Which proposition must hold?’ asks what follows from the premises. The answer to ‘Which of the following cannot be true?’ is the proposition whose *negation* follows from the premises. For paired statements, recording the judgment for each one first helps avoid treating similarities between the options as logical implications.
:::
