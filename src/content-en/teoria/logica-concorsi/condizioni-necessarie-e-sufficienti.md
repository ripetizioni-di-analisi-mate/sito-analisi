---
titolo: Necessary and sufficient conditions
sommario: What sufficient, necessary, and necessary and sufficient conditions mean, how to translate each wording into an implication in the correct direction, which deductions are valid, and how to answer questions about chains of implications, rules, and eligibility requirements.
---

## Sufficient conditions

:::definizione{#condizione-sufficiente titolo="Sufficient condition"}
A **statement**, or proposition, is a sentence that is either true or false, such as “it is raining today” or “Marco has a driver's license.” Given two statements $A$ and $B$, we say that $A$ is a **sufficient condition** for $B$ if, whenever $A$ is true, $B$ is also true. We express this relationship by saying “if $A$, then $B$.” This is called an **implication**. The statement $A$ is its *antecedent*, and $B$ is its *consequent*. Exam questions express the same implication in several ways:

- “if $A$, then $B$,” or “if $A$, $B$”;
- “$A$ is enough for $B$,” or “$A$ is sufficient for $B$”;
- “whenever $A$, $B$,” or “when $A$, $B$.”

In the statement “If a package weighs more than $20$ kg, a surcharge applies,” weighing more than $20$ kg is a sufficient condition for the surcharge to apply. If we know that a package weighs $25$ kg, we can conclude that the surcharge applies to that package without needing any further information.
:::

:::teorema{#quando-e-falsa titolo="When an implication is false"}
The implication “if $A$, then $B$” is false in just one case, when $A$ is true and $B$ is false. It is true in the other three cases.

| $A$ | $B$ | if $A$, then $B$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

The statement “If it rains, Luca takes the bus” concerns only rainy days. Therefore, only a day when it rains and Luca does not take the bus can disprove it. On a day without rain, Luca may take the bus or walk. In either case, the statement remains true. The table answers questions that ask which situation *cannot* occur, because the only situation ruled out by “if $A$, then $B$” is the one in which $A$ is true and $B$ is false.
:::

:::osservazione{#implicazione-e-inclusione titolo="Interpreting implications using sets"}
When $A$ and $B$ describe properties of people, animals, or numbers, the statement “if an element has property $A$, then it has property $B$” means that the set of elements with property $A$ is contained in the set of elements with property $B$. The statement “If an animal is a cat, then it is a mammal” says that the set of cats is contained in the set of mammals.

::venn{tipo="incluso" zone="ab" nomi="mammiferi,gatti" etichetteNomi="mammals,cats" titolo="The set of cats is contained in the set of mammals, so being a cat is a sufficient condition for being a mammal"}

An element of the smaller circle also lies in the larger circle, so being a cat is enough to be a mammal. An element of the larger circle, such as a dog, may lie outside the smaller one, so being a mammal is not enough to be a cat.
:::

## Necessary conditions

:::definizione{#condizione-necessaria titolo="Necessary condition"}
We say that $B$ is a **necessary condition** for $A$ if $A$ cannot be true when $B$ is false. The most common ways of expressing this are:

- “$A$ only if $B$,” or “$A$ only when $B$”;
- “for $A$ to hold, $B$ is necessary,” “$B$ is required,” or “$B$ must hold”;
- “without $B$, there is no $A$”;
- “$B$ is indispensable for $A$.”

In the statement “You can enter the exam room only if you show identification,” showing identification is a necessary condition for entry. Therefore, anyone who entered showed identification, and anyone who did not show identification did not enter. The statement does not guarantee entry to anyone who shows identification, because even a candidate with identification can be excluded for another reason, such as arriving late.
:::

:::teorema{#necessaria-e-implicazione titolo="Two ways to read the same implication"}
$B$ is a *necessary* condition for $A$ if and only if the implication “if $A$, then $B$” holds. Thus the two statements

- “$A$ is a sufficient condition for $B$,”
- “$B$ is a necessary condition for $A$”

have the same meaning. Every implication can be read in two ways. The antecedent is sufficient for the consequent, and the consequent is necessary for the antecedent. This rule holds because “$B$ is necessary for $A$” rules out only the case in which $A$ is true and $B$ is false, the one case in which “if $A$, then $B$” is false.

For an integer $n$, the statement “if $n$ is a multiple of $4$, then $n$ is even” holds. Thus being a multiple of $4$ is sufficient for being even, and being even is necessary for being a multiple of $4$, because an odd number is never a multiple of $4$.
:::

:::attenzione{#solo-se titolo="“Only if” and “if”"}
The statement “$A$ only if $B$” is *not* equivalent to “$A$ if $B$.” The statement “The gate opens only if the badge is inserted” translates as “if the gate opens, then the badge has been inserted.” Inserting the badge is necessary, and the statement does not say that it is enough. If the gate stays closed when an expired badge is inserted, the statement is still true. By contrast, “The gate opens if the badge is inserted” translates as “if the badge is inserted, then the gate opens,” which is the implication in the opposite direction.
:::

## Necessary and sufficient conditions

:::definizione{#condizione-necessaria-e-sufficiente titolo="Necessary and sufficient condition"}
$A$ is a **necessary and sufficient condition** for $B$ when both implications “if $A$, then $B$” and “if $B$, then $A$” hold. In that case, $A$ and $B$ are either both true or both false, and we write “$A$ *if and only if* $B$.” Other ways of saying this are “exactly when” and “all and only.”

The statement “All and only those members who have paid their dues receive a membership card” contains two implications. The word *all* says that every member who has paid receives a card. The word *only* says that anyone who receives a card has paid. Thus a member who did not receive a card has not paid the dues, and a member who has not paid does not receive a card.
:::

:::esempio{titolo="Multiples of 6"}
For a positive integer $n$, being a multiple of $6$ is a necessary and sufficient condition for being a multiple of both $2$ and $3$. If $n$ is a multiple of $6$, that is, $n = 6k$ for some integer $k$, then $n = 2 \cdot 3k$ and $n = 3 \cdot 2k$, so $n$ is a multiple of $2$ and of $3$. Conversely, if $n$ is a multiple of $2$ and of $3$, the prime factorization of $n$ contains both $2$ and $3$. Therefore, $n$ is a multiple of $2 \cdot 3 = 6$.
:::

:::osservazione{#quattro-casi titolo="The four possible cases"}
To determine what type of condition $A$ is for $B$, check the two implications one at a time.

| if $A$, then $B$ | if $B$, then $A$ | $A$ as a condition for $B$ |
| --- | --- | --- |
| holds | does not hold | sufficient but not necessary |
| does not hold | holds | necessary but not sufficient |
| holds | holds | necessary and sufficient |
| does not hold | does not hold | neither necessary nor sufficient |

To show that an implication does not hold, one **counterexample** is enough: a case in which the antecedent is true and the consequent is false. For an integer $n$, “$n$ is a multiple of $4$” is a sufficient but not necessary condition for “$n$ is even,” because every multiple of $4$ is even, while $6$ is even but is not a multiple of $4$. On the other hand, “$n$ is a multiple of $3$” is neither a necessary nor a sufficient condition for “$n$ is even,” because $3$ is a multiple of $3$ and is odd, and $2$ is even and is not a multiple of $3$.

::venn{tipo="incluso" zone="ab" nomi="pari,multipli di 4" etichetteNomi="even numbers,multiples of 4" elementi="a:2,6,10;ab:4,8,12" titolo="The multiples of $4$ are contained in the set of even numbers, while $2$, $6$, and $10$ are even and are not multiples of $4$"}

:::

## Translating statements into implications

:::teorema{#tabella-delle-formulazioni titolo="Common ways to state an implication"}
The statements in the table can be written as implications. In the right column, the arrow stands for “if …, then …,” as in the topic on connectives, negations, and implications. It points from the sufficient condition to the necessary condition.

| wording | implication |
| --- | --- |
| if $A$, then $B$ | $A \Rightarrow B$ |
| $A$ is enough for $B$ | $A \Rightarrow B$ |
| whenever $A$, $B$ | $A \Rightarrow B$ |
| $A$ only if $B$ | $A \Rightarrow B$ |
| for $A$ to hold, $B$ is necessary | $A \Rightarrow B$ |
| without $B$, there is no $A$ | $A \Rightarrow B$ |
| $A$ if $B$ | $B \Rightarrow A$ |
| $A$ unless $B$ | not $B \Rightarrow A$ |
| $A$ if and only if $B$ | $A \Rightarrow B$ and $B \Rightarrow A$ |

A single rule determines the direction of the arrow. A condition introduced by “if,” “it is enough that,” or “whenever” goes at the start of the arrow. A condition introduced by “only if,” “it is necessary that,” or “it is required that” goes at the end. The statement “A refund is issued only if the receipt is submitted” therefore becomes “refund issued,” followed by the arrow and “receipt submitted.”
:::

:::osservazione{#a-meno-che titolo="“Unless”"}
In logic questions, “$A$ unless $B$” translates as “if not $B$, then $A$.” The statement “The train leaves on time unless there is a strike” means “if there is no strike, the train leaves on time.” The statement does not say what happens during a strike, because in that case the train may leave late or on time. The Italian expression “a meno che non ci sia uno sciopero” means “unless there is a strike”: the word “non” after “a meno che” is redundant and does not negate the condition.
:::

:::teorema{#contronominale titolo="The contrapositive of an implication"}
The implication “if $A$, then $B$” is equivalent to its **contrapositive**, “if not $B$, then not $A$.” In other words, the two statements are true in the same cases and false in the same cases. Indeed, the only case in which either implication is false is the one in which $A$ is true and $B$ is false. The contrapositive of “If a candidate passes the written exam, they are admitted to the oral exam” is “If a candidate is not admitted to the oral exam, they did not pass the written exam.”

The other two implications associated with “if $A$, then $B$,” namely the *converse*, “if $B$, then $A$,” and the *inverse*, “if not $A$, then not $B$,” are not equivalent to the original implication. They are equivalent to each other, however, because the inverse is the contrapositive of the converse. The complete truth tables are given in the topic on connectives, negations, and implications.
:::

## Valid deductions

:::teorema{#modus-ponens titolo="Modus ponens"}
If the two premises “if $A$, then $B$” and “$A$” are true, then $B$ is also true. This rule is the definition of a sufficient condition. From the premises “If a candidate passes the written exam, they are admitted to the oral exam” and “Giorgio passed the written exam,” it follows that Giorgio is admitted to the oral exam.
:::

::::teorema{#modus-tollens titolo="Modus tollens"}
If the two premises “if $A$, then $B$” and “not $B$” are true, then “not $A$” is true. From the premises “If a candidate passes the written exam, they are admitted to the oral exam” and “Giorgio is not admitted to the oral exam,” it follows that Giorgio did not pass the written exam. This rule is useful in questions where the given fact is the negation of the consequent.

:::dimostrazione
If $A$ were true, then by modus ponens $B$ would also be true, whereas the second premise states that $B$ is false. Therefore $A$ is false.
:::
::::

:::osservazione{#schema-delle-deduzioni titolo="Comparing the four deductions"}
Given the premise “if $A$, then $B$” and a second premise about just one of the two statements, there are four cases.

| premises | conclusion | deduction |
| --- | --- | --- |
| $A \Rightarrow B$ and $A$ | $B$ | valid (modus ponens) |
| $A \Rightarrow B$ and not $B$ | not $A$ | valid (modus tollens) |
| $A \Rightarrow B$ and $B$ | $A$ | invalid (affirming the consequent) |
| $A \Rightarrow B$ and not $A$ | not $B$ | invalid (denying the antecedent) |

The valid deductions start with a true antecedent or a false consequent. If instead all we know is that the antecedent is false or that the consequent is true, nothing follows about the other statement.
:::

## Invalid deductions

:::attenzione{#affermazione-del-conseguente titolo="Affirming the consequent"}
From the premises “if $A$, then $B$” and “$B$,” it does *not* follow that $A$ is true. From “If it rains, the road is wet” and “The road is wet,” we cannot conclude that it is raining, because the street-cleaning crew may have washed the road. In the truth table for implication, there are two rows in which $B$ is true, one with $A$ true and one with $A$ false. In both rows, the implication is true.
:::

:::attenzione{#negazione-dell-antecedente titolo="Denying the antecedent"}
From the premises “if $A$, then $B$” and “not $A$,” it does *not* follow that “not $B$” is true. From “If it rains, the road is wet” and “It is not raining today,” we cannot conclude that the road is dry, for the same reason: it may have been washed. Anyone who makes this error is using the inverse, “if not $A$, then not $B$,” which is not equivalent to the given implication.
:::

:::osservazione{#non-si-puo-stabilire titolo="The answer “cannot be determined”"}
Many questions include the answer choice “cannot be determined.” This is correct when there are two situations consistent with all the premises, and the statement in question is true in the first but false in the second. The premises “If it snows, the school is closed” and “The school is closed today” are consistent both with a snowy day and with a day when it is not snowing and the school is closed for an election. Therefore, whether it is snowing today cannot be determined.
:::

## Chains of implications

:::teorema{#proprieta-transitiva titolo="Transitive property"}
If “if $A$, then $B$” and “if $B$, then $C$” hold, then “if $A$, then $C$” also holds. Indeed, when $A$ is true, the first implication makes $B$ true, and the second then makes $C$ true. From the premises “If Franco goes on vacation, Maria fills in for him” and “If Maria fills in for Franco, Carlo also works on Saturdays,” it follows that if Franco goes on vacation, Carlo also works on Saturdays. A chain may have more links, and the rule applies one link at a time.
:::

:::osservazione{#catene-all-indietro titolo="Following a chain backward"}
Replacing each link by its contrapositive lets us follow the chain in the opposite direction with all the statements negated.

| forward chain | backward chain |
| --- | --- |
| $A \Rightarrow B \Rightarrow C$ | not $C \Rightarrow$ not $B \Rightarrow$ not $A$ |

If an employee who participates in the project takes the course, and everyone who takes the course receives the certificate, then an employee without a certificate did not take the course and therefore does not participate in the project. The given fact in an exam question is often the negation of the last link. Following the chain backward yields the answer by repeated applications of modus tollens.
:::

:::attenzione{#catene-spezzate titolo="Arrows that do not connect"}
Two implications form a chain only if the consequent of the first is the antecedent of the second. The premises “If there is a strike, Paola works from home” and “If it snows, Paola works from home” do not imply any relationship between a strike and snowfall. Both arrows point to “Paola works from home,” so knowing that Paola works from home does not tell us which of the two causes occurred. It is possible that neither did.
:::

## Rules and eligibility requirements

:::esempio{#requisiti-necessari titolo="“Only those who … may take part”"}
An exam announcement states, “Only candidates who hold a diploma and a category B driver's license may take part in the exam.” This translates as “if a candidate takes part, then they have a diploma and a category B driver's license,” so each requirement is a *necessary* condition.

- Anyone who takes part has a diploma and a license, by modus ponens.
- Anyone who lacks a diploma or lacks a license does not take part, by modus tollens. The absence of even one requirement is enough.
- Whether a candidate who meets both requirements takes part is unknown, because the announcement does not say that meeting the requirements is sufficient.

The negation of “has a diploma and has a license” is “does not have a diploma or does not have a license,” by De Morgan's laws, introduced in the topic on connectives.
:::

:::esempio{#requisiti-sufficienti titolo="Sufficient requirements and “all and only”"}
Two sets of rules treat a candidate who scored $18$ points on the written exam differently.

- “Scoring at least $21$ points on the written exam is sufficient for admission to the oral exam.” The rule only addresses those who scored at least $21$ points, so we cannot determine whether the candidate who scored $18$ points is admitted.
- “All and only those candidates who score at least $21$ points on the written exam are admitted to the oral exam.” Scoring at least $21$ points is both necessary and sufficient, so the candidate who scored $18$ points is not admitted.
:::

:::osservazione{#necessariamente-vera titolo="“Must be true,” “can be true,” and “cannot be true”"}
Exam questions ask you to classify a statement in relation to premises that are assumed to be true.

- A statement **must be true** if it is true in every situation consistent with the premises.
- A statement **cannot be true** if it is false in every situation consistent with the premises.
- A statement *can be true* if there is at least one situation consistent with the premises in which it is true.

Given the premise “If it rains, Luca takes the bus,” the statement “it is raining and Luca does not take the bus” cannot be true, because this is the only case in which the implication is false. The statement “it is not raining and Luca takes the bus” can be true, and the statement “if Luca does not take the bus, then it is not raining” must be true, because it is the contrapositive of the premise.
:::

## Quick methods for exam questions

:::osservazione{#metodi-rapidi titolo="Drawing arrows in the margin and eliminating answer choices"}
Questions about conditions and implications can be solved with a few notes in the margin.

- **Draw an arrow in the margin**: write the premise as an arrow, using initials for the statements. “If,” “it is enough that,” and “whenever” go at the start of the arrow. “Only if,” “it is required that,” and “it is necessary that” go at the end.
- **Only one equivalent form**: of the converse, the inverse, and the contrapositive, only the contrapositive is equivalent to the given implication. Eliminate choices that use the converse or the inverse. Since the converse and inverse are equivalent to each other, two choices that say the same thing in different ways must both be wrong when there is a single correct answer.
- **The forbidden case**: given “if $A$, then $B$,” the only impossible situation is “$A$ and not $B$.” In questions asking what “cannot be true,” look for the choice that affirms the antecedent and denies the consequent.
- **Counterexample**: to rule out an answer choice, it is enough to find one situation consistent with the premises in which the choice is false.
- **Chains**: arrange the arrows in sequence. If the given fact negates the last link, follow the chain backward, negating each link.
:::
