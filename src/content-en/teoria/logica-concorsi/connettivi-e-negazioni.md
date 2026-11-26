---
titolo: Logical connectives, negations, and implications
sommario: How to combine propositions using "not," "and," "or," "if … then," and "if and only if," negate compound statements, translate statements in ordinary Italian into logical notation, and recognize equivalent statements on logic tests.
---

## Propositions and truth values

:::definizione{#proposizione titolo="Proposition"}
A **proposition** is a statement that is either true or false, with no third possibility. Its **truth value** is T (true) or F (false). We denote propositions by capital letters such as $A$, $B$, and $C$.

- "Turin is in Piedmont" is a true proposition.
- "A year has $13$ months" is a false proposition.
- "Close the door" and "What time is it?" are not propositions because neither a command nor a question is true or false.

In this kind of logic question, each statement in the passage is a proposition. The question asks which other statements are true or false when the given statement is true.
:::

:::definizione{#proposizioni-composte titolo="Compound propositions and truth tables"}
A **compound** proposition is formed by joining simpler propositions with words such as "not," "and," "or," "if … then," and "if and only if," called **connectives**. The truth value of a compound proposition depends only on the truth values of its parts. The statement "Anna is at the office and Bruno is on vacation" consists of the propositions $A$ = "Anna is at the office" and $B$ = "Bruno is on vacation."

Two propositions give four possible cases, TT, TF, FT, and FF. Three propositions give eight. A table that lists all the cases and the truth value of the compound proposition in each case is called a **truth table**. Truth tables show when a statement is true and let us compare two statements row by row.
:::

## Negation, conjunction, and disjunction

:::definizione{#negazione titolo="Negation"}
The **negation** of $A$, written $\lnot A$ and read "not $A$," is true when $A$ is false and false when $A$ is true.

| $A$ | $\lnot A$ |
| --- | --- |
| T | F |
| F | T |

The negation of "The store is open" is "The store is not open," which can also be written as "It is not true that the store is open." Exactly one of a statement and its negation is true. Negating a statement twice gives the original statement, so "It is not true that the store is not open" is equivalent to "The store is open."
:::

:::attenzione
A statement at the opposite extreme is *not* its negation. The negation of "The coffee is hot" is "The coffee is not hot." The statement "The coffee is cold" is different because lukewarm coffee makes both "The coffee is hot" and "The coffee is cold" false. A statement and its negation always have opposite truth values, so "The coffee is cold" is not the negation of "The coffee is hot."
:::

:::definizione{#congiunzione titolo="Conjunction"}
The **conjunction** of $A$ and $B$, written $A \land B$ and read "$A$ and $B$," is true when $A$ and $B$ are *both* true and false in every other case.

| $A$ | $B$ | $A \land B$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

The statement "Luca has a driver's license and has a car" is false if Luca has a driver's license and does not have a car. When an application notice joins requirements with "and," applicants must meet all of them.
:::

:::definizione{#disgiunzione-inclusiva titolo="Inclusive disjunction"}
The **disjunction** of $A$ and $B$, written $A \lor B$ and read "$A$ or $B$," is true when *at least one* of the two propositions is true, including when both are true. It is false only when $A$ and $B$ are both false.

| $A$ | $B$ | $A \lor B$ |
| --- | --- | --- |
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

This "or" is called **inclusive** and is the meaning of "or" in logic unless the text specifies otherwise. A notice that admits "anyone who has a degree or five years of service" also admits those who meet both requirements and excludes only those who meet neither.
:::

:::definizione{#disgiunzione-esclusiva titolo="Exclusive disjunction"}
The **exclusive disjunction** "either $A$ or $B$, but not both" is true when *exactly one* of the two propositions is true. It differs from inclusive "or" only in the first row, where $A$ and $B$ are both true.

| $A$ | $B$ | $A \lor B$ | either $A$ or $B$, but not both |
| --- | --- | --- | --- |
| T | T | T | F |
| T | F | T | T |
| F | T | T | T |
| F | F | F | F |

On tests, exclusive "or" is indicated by "but not both" or expressions such as "only one of the two." The statement "The prize goes to either Giulia or Marco, but not both" rules out the case in which both win. Without such a qualification, "or" is inclusive.
:::

## Equivalent statements and De Morgan's laws

:::definizione{#equivalenza-logica titolo="Equivalent propositions"}
Two compound propositions are **equivalent** if they have the same truth value in every case, that is, if their truth tables agree row by row. We write $P \equiv Q$. Equivalent statements say the same thing in different words, so when a test asks "Which statement is equivalent to …?" the answer is the option with the same truth table as the given statement. For example, by double negation, "It is not true that Paolo is not at the office" is equivalent to "Paolo is at the office."
:::

:::teorema{#de-morgan titolo="De Morgan's laws"}
$$
\lnot (A \land B) \equiv \lnot A \lor \lnot B,
\qquad
\lnot (A \lor B) \equiv \lnot A \land \lnot B .
$$
The negation of a conjunction is the disjunction of the negations, and the negation of a disjunction is the conjunction of the negations. In both cases, "and" becomes "or," "or" becomes "and," and each part is negated.

| $A$ | $B$ | $A \land B$ | $\lnot (A \land B)$ | $\lnot A \lor \lnot B$ |
| --- | --- | --- | --- | --- |
| T | T | T | F | F |
| T | F | F | T | T |
| F | T | F | T | T |
| F | F | F | T | T |

A conjunction is false when at least one part is false, so its negation states that at least one part is false, namely $\lnot A \lor \lnot B$. The last two columns of the table agree. The second law can be verified in the same way.
:::

:::esempio{titolo="Negating a conjunction and a disjunction"}
- The negation of "Marco speaks English and speaks German" is "Marco does not speak English or does not speak German." If there is even one of the two languages that Marco does not speak, the original statement is false.
- The negation of "Tonight Ilaria is going to the movies or to the theater" is "Tonight Ilaria is not going to the movies and is not going to the theater," which can also be expressed as "Tonight Ilaria is going neither to the movies nor to the theater."
:::

:::attenzione
The negation of "$A$ and $B$" is *not* "not $A$ and not $B$." If Marco speaks English and does not speak German, the statement "Marco speaks English and speaks German" is false, and "Marco does not speak English and does not speak German" is also false. A statement and its negation are never both false, so the second statement is not the negation of the first. The answer choice "not $A$ and not $B$" often appears on tests precisely because of this mistake.
:::

:::osservazione{#negazione-quantificatori titolo="Statements with all, some, and none"}
Statements with "all," "some," and "none" have their own rules for negation, covered in the topic on syllogisms and quantifiers. For example, the negation of "All employees are present" is "At least one employee is absent." The statement "No employees are present" makes a much stronger claim, and choosing it as the negation is a common error.
:::

## Implications and biconditionals

:::definizione{#implicazione titolo="Implication"}
The **implication** "if $A$, then $B$," written $A \Rightarrow B$, is false in *only one* case, when $A$ is true and $B$ is false. The proposition $A$ is called the **antecedent**, and the proposition $B$ is called the **consequent**.

| $A$ | $B$ | $A \Rightarrow B$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

The promise "If it is sunny tomorrow, we will go to the beach" is broken in only one case, when it is sunny tomorrow and we do not go to the beach. If it is not sunny tomorrow, the circumstances covered by the promise have not arisen, so the promise is not broken whatever we do. This is why the last two rows of the table show T.
:::

:::osservazione{#lettura-implicazione titolo="What follows from an implication"}
Suppose the statement "If Anna wins the competition, she will move to Rome" is true.

- If Anna wins the competition, then she will move to Rome.
- If Anna does not move to Rome, then she did not win the competition, because otherwise she would have moved.
- If Anna moves to Rome, nothing follows about the competition because Anna could move for other reasons.
- If Anna does not win the competition, nothing follows about whether she will move.

Valid and invalid inferences are discussed in the topic on necessary and sufficient conditions.
:::

:::definizione{#doppia-implicazione titolo="Biconditional"}
The **biconditional** "$A$ if and only if $B$," written $A \Leftrightarrow B$, is true when $A$ and $B$ have the *same* truth value, that is, when both are true or both are false.

| $A$ | $B$ | $A \Leftrightarrow B$ |
| --- | --- | --- |
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

The biconditional is equivalent to the two implications $A \Rightarrow B$ and $B \Rightarrow A$ taken together. The statement "The bonus is paid if and only if the target is met" says that the bonus is paid when the target is met and is not paid when the target is missed. In each row the biconditional has the opposite truth value from exclusive "or," so the negation of "either $A$ or $B$, but not both" is "$A$ if and only if $B$."
:::

## Negating an implication

:::teorema{#negazione-implicazione titolo="Negating an implication"}
$$
\lnot (A \Rightarrow B) \equiv A \land \lnot B .
$$
An implication is false only when $A$ is true and $B$ is false, so negating it means asserting this very case. The negation of an implication is therefore a **conjunction**, with no "if" or "then." The negation of "If it rains, Carlo takes the bus" is "It rains and Carlo does not take the bus."
:::

:::attenzione
The negation of "if $A$, then $B$" is *not* "if $A$, then not $B$." On a day without rain, "If it rains, Carlo takes the bus" and "If it rains, Carlo does not take the bus" are both true because their antecedent is false. A statement and its negation are never both true, so the second statement is not the negation of the first.
:::

:::teorema{#implicazione-come-disgiunzione titolo="Implication as a disjunction"}
$$
A \Rightarrow B \equiv \lnot A \lor B .
$$

| $A$ | $B$ | $A \Rightarrow B$ | $\lnot A$ | $\lnot A \lor B$ |
| --- | --- | --- | --- | --- |
| T | T | T | F | T |
| T | F | F | F | F |
| F | T | T | T | T |
| F | F | T | T | T |

The two propositions are false in exactly the same single case, when $A$ is true and $B$ is false, so they have the same truth table. The statement "If Mario goes out, he takes his umbrella" is therefore equivalent to "Mario does not go out or he takes his umbrella." This form lets us recognize an implication written without "if" and negate it using De Morgan's laws, because $\lnot (\lnot A \lor B) \equiv A \land \lnot B$.
:::

## Converse, inverse, and contrapositive

:::definizione{#inversa-contraria-contronominale titolo="Converse, inverse, and contrapositive"}
Given the implication $A \Rightarrow B$, we can construct three related implications.

- The **converse** $B \Rightarrow A$ exchanges the antecedent and the consequent.
- The **inverse** $\lnot A \Rightarrow \lnot B$ negates the antecedent and the consequent.
- The **contrapositive** $\lnot B \Rightarrow \lnot A$ exchanges and negates them.

For the statement "If Giorgio lives in Naples, he lives in Campania," the converse is "If Giorgio lives in Campania, he lives in Naples," the inverse is "If Giorgio does not live in Naples, he does not live in Campania," and the contrapositive is "If Giorgio does not live in Campania, he does not live in Naples." These three implications often appear among the choices when a test asks "Which statement is equivalent to …?"
:::

:::teorema{#contronominale titolo="Equivalence to the contrapositive"}
An implication is equivalent to its contrapositive,
$$
A \Rightarrow B \equiv \lnot B \Rightarrow \lnot A ,
$$
whereas the converse and the inverse are equivalent to each other and are *not* equivalent to the original implication in general.

| $A$ | $B$ | $A \Rightarrow B$ | converse $B \Rightarrow A$ | inverse $\lnot A \Rightarrow \lnot B$ | contrapositive $\lnot B \Rightarrow \lnot A$ |
| --- | --- | --- | --- | --- | --- |
| T | T | T | T | T | T |
| T | F | F | T | T | F |
| F | T | T | F | F | T |
| F | F | T | T | T | T |

The columns for $A \Rightarrow B$ and its contrapositive agree, whereas the columns for the converse and the inverse differ from them in the second and third rows. The statement "If Giorgio lives in Naples, he lives in Campania" is true, as is its contrapositive, "If Giorgio does not live in Campania, he does not live in Naples." By contrast, the converse, "If Giorgio lives in Campania, he lives in Naples," is false when Giorgio lives in Salerno.

::venn{tipo="incluso" zone="u" nomi="Campania,Napoli" etichetteNomi="Campania,Naples" universo=1 titolo="Naples is in Campania, so anyone living outside Campania, in the shaded region, also lives outside Naples. Someone who lives in Campania can nevertheless live outside Naples."}

:::

## From ordinary language to logical connectives

:::osservazione{#solo-se titolo="If, only if, it is sufficient that, it is necessary that"}
The word "if" on its own introduces the antecedent, even when it comes later in the sentence. Thus "Luca takes the car if it rains" means "if it rains, then Luca takes the car."

The expression "only if" introduces the consequent, so "$A$ only if $B$" means $A \Rightarrow B$. The statement "Elena enters the server room only if she has her badge" means "if Elena enters the server room, then she has her badge." Having a badge does not guarantee that Elena enters, so the statement does not say "if Elena has her badge, then she enters."

- "$B$ if $A$," "it is enough for $A$ to hold for $B$ to hold," and "$A$ is sufficient for $B$" all mean $A \Rightarrow B$.
- "$A$ only if $B$," "$B$ is required for $A$," and "$B$ is necessary for $A$" all mean $A \Rightarrow B$.

The connection between these formulas and necessary and sufficient conditions is discussed in the topic on necessary and sufficient conditions.
:::

:::osservazione{#a-meno-che titolo="Unless"}
The statement "$A$ unless $B$" means "if not $B$, then $A$," that is, $\lnot B \Rightarrow A$. Expressing the implication as a disjunction gives the equivalent "$A$ or $B$." In Italian, "a meno che" ("unless") is often followed by "non," which does not express negation here. The statement "The flight departs at 18\:00 unless it is foggy" means "if it is not foggy, then the flight departs at 18\:00." By the contrapositive, if the flight does not depart at 18\:00, then it is foggy.
:::

:::osservazione{#ne-ne-e-ma titolo="Neither … nor, but, it is not true that"}
- "Neither $A$ nor $B$" means "not $A$ and not $B$," that is, $\lnot A \land \lnot B$, which by De Morgan's laws is the negation of "$A$ or $B$." The statement "Neither Chiara nor Enrico is coming to dinner" is true only if neither of them comes.
- "But," "however," and "whereas" have the same truth conditions as "and." The statement "Sara studied but did not pass the exam" is the conjunction $A \land \lnot B$, with $A$ = "Sara studied" and $B$ = "Sara passed the exam." The word "but" merely signals a contrast between the two parts.
- "It is not true that …" negates the entire statement that follows. The statement "It is not true that Sara studied but did not pass the exam" is $\lnot (A \land \lnot B)$, which by De Morgan's laws is equivalent to $\lnot A \lor B$, that is, to "if Sara studied, then she passed the exam."
:::

:::esempio{titolo="Translate the statement, then negate it"}
The statement "The package will arrive by Friday only if it is shipped today" means "if the package will arrive by Friday, then it is shipped today," because "only if" introduces the consequent. By the rule for negating an implication, its negation is "The package will arrive by Friday and it is not shipped today."
:::

## Tautologies and contradictions

:::definizione{#tautologie-contraddizioni titolo="Tautology and contradiction"}
A **tautology** is a compound proposition that is true in every case, whatever the truth values of its component propositions. A **contradiction** is a compound proposition that is false in every case. In the final column of the truth table, a tautology has only T's and a contradiction has only F's.

| $A$ | $\lnot A$ | $A \lor \lnot A$ | $A \land \lnot A$ |
| --- | --- | --- | --- |
| T | F | T | F |
| F | T | T | F |

The statement "It will rain tomorrow or it will not rain tomorrow" is true whatever the weather, so it is a tautology. The statement "It will rain tomorrow and it will not rain tomorrow" is a contradiction. A statement such as "It will rain tomorrow," true in some cases and false in others, is neither a tautology nor a contradiction.
:::

:::esempio{titolo="Checking with a truth table"}
The proposition $(A \land B) \Rightarrow A$ is a tautology.

| $A$ | $B$ | $A \land B$ | $(A \land B) \Rightarrow A$ |
| --- | --- | --- | --- |
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | T |

An implication is false only when its antecedent is true and its consequent is false. When $A \land B$ is true, $A$ is true as well, so that case never arises. The proposition $(A \lor B) \Rightarrow A$, by contrast, is not a tautology because when $A$ is false and $B$ is true, its antecedent is true and its consequent is false.
:::

:::osservazione{#tautologie-ed-equivalenze titolo="Tautologies and equivalences"}
Two propositions $P$ and $Q$ are equivalent exactly when $P \Leftrightarrow Q$ is a tautology, because a biconditional is true only in the rows where $P$ and $Q$ have the same truth value. For example, since an implication is equivalent to its contrapositive, the proposition $(A \Rightarrow B) \Leftrightarrow (\lnot B \Rightarrow \lnot A)$ is a tautology.
:::

## Quick methods for logic tests

:::osservazione{#metodi-rapidi titolo="Quick methods for logic tests"}
Many questions on connectives and negation can be solved without writing out the entire truth table.

- **Symbolic notes in the margin**. Assign a letter to each simple statement, for example $L$ = "Laura is on vacation." Translate the text into symbols, apply the rule, and translate the result back into words.
- **The false case**. The negation of a statement describes exactly the cases in which the statement is false. An implication is false only when its antecedent is true and its consequent is false. A conjunction is false when at least one part is false. A disjunction is false only when every part is false.
- **Form of the answer choices**. The negation of an implication is true exactly when the antecedent is true and the consequent is false. Rule out any choice whose truth values differ from this pattern. In equivalence questions, the implication $A \Rightarrow B$ is equivalent to both $\lnot B \Rightarrow \lnot A$ and $\lnot A \lor B$. The converse and the inverse are common distractors.
- **Counterexample**. An option can be ruled out by finding a case in which the given statement is true and the option is false.

The most common negations are summarized in the following table.

| statement | negation |
| --- | --- |
| $A$ and $B$ | not $A$ or not $B$ |
| $A$ or $B$ | neither $A$ nor $B$ |
| if $A$ then $B$ | $A$ and not $B$ |
| $A$ if and only if $B$ | either $A$ or $B$, but not both |
| either $A$ or $B$, but not both | $A$ if and only if $B$ |
:::

:::esempio{titolo="Solving a question by finding the false case"}
Find the negation of "If Laura is on vacation, Piero fills in for her" among the choices "Laura is not on vacation and Piero fills in for her," "If Laura is on vacation, Piero does not fill in for her," "Laura is on vacation and Piero does not fill in for her," "If Laura is not on vacation, Piero does not fill in for her," and "Laura is on vacation and Piero fills in for her." The two choices with "if" are implications, so we can immediately rule them out. The original statement is false only when Laura is on vacation and Piero does not fill in for her, so among the three remaining conjunctions, its negation is "Laura is on vacation and Piero does not fill in for her."
:::
