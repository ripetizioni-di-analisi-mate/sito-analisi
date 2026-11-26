---
titolo: "Syllogisms and quantifiers"
sommario: "How to read and negate statements containing all, none, and some, which pairs of statements can be true or false together, and how to use Venn diagrams to decide whether a conclusion necessarily follows from the premises."
---

## Quantifiers

:::definizione{#quantificatori titolo="Universal and existential quantifiers"}
Many test questions concern a **category** of people or things (applicants, offices, trains) and say how many of its members have a particular property. The words that indicate this quantity are called **quantifiers**.

- The **universal quantifier** applies to *every* member of the category. It is expressed by “all,” “every,” or “any,” and in negative statements by “no” or “none.”
- The **existential quantifier** applies to *at least one* member of the category. It is expressed by “some,” “a certain,” “at least one,” “there exists,” or “there is.”

The statement “Every service counter is open” is universal, so a single closed counter makes it false. The statement “There is an open service counter” is existential, so a single open counter makes it true.
:::

:::osservazione{#alcuni-in-senso-logico titolo="Some means at least one"}
In logic, “some” means *at least one, possibly all*. The statement “Some employees speak English” is true if just one employee speaks English, and it is also true if they all do. In everyday speech, someone who says “some” often means “some do and others do not.” In test questions, the statement does not convey this extra information. Therefore, “At least one employee speaks English” follows from “Some employees speak English,” whereas “Some employees do not speak English” does not.
:::

:::osservazione{#categorie-non-vuote titolo="Categories with at least one member"}
The traditional square of opposition assumes that the subject category has at least one member. In questions that allow empty categories, naming a category does not establish that it has a member. For example, “Some night-shift officers have a driver’s license” follows from “All night-shift officers have a driver’s license” if at least one officer works that shift. The question may state the required information explicitly, for example by saying “There are $12$ books on the shelf.”
:::

## The four forms

:::definizione{#forma-universale-affermativa titolo="All A are B"}
The statement “All $A$ are $B$” says that every member of category $A$ also belongs to category $B$. In a Venn diagram, the circle for $A$ lies inside the circle for $B$. The statement says nothing about the members of $B$ outside $A$, so “All members of the Carabinieri have passed a medical examination” does not imply that everyone who has passed a medical examination is a member of the Carabinieri.

::venn{tipo="incluso" zone="a,ab" nomi="B,A" titolo="All $A$ are $B$. The colored regions can contain members, and there is no part of $A$ outside $B$"}

:::

:::definizione{#forma-universale-negativa titolo="No A is B"}
The statement “No $A$ is $B$” says that no member belongs to both categories. The two circles are disjoint. The statement works in either direction, so “No doctor in the department is a resident” and “No resident is a doctor in the department” say the same thing.

::venn{tipo="disgiunti" zone="a,b" nomi="A,B" titolo="No $A$ is $B$. The two categories have no members in common"}

:::

:::definizione{#forma-particolare-affermativa titolo="Some A are B"}
The statement “Some $A$ are $B$” says that at least one member belongs to both $A$ and $B$. In the diagram, the symbol $\times$ marks the overlap, which must contain at least one member. The other regions may be empty or nonempty. This statement also works in either direction, so “Some tourists are French” is equivalent to “Some French people are tourists,” because both assert the existence of a French tourist.

::venn{zone="a,ab,b" nomi="A,B" elementi="ab:×" titolo="Some $A$ are $B$. The symbol $\times$ indicates that the overlap contains at least one member"}

:::

:::definizione{#forma-particolare-negativa titolo="Some A are not B"}
The statement “Some $A$ are not $B$” says that at least one member of $A$ lies outside $B$. The symbol $\times$ goes in the part of $A$ outside $B$. Unlike “No $A$ is $B$” and “Some $A$ are $B$,” this statement cannot be reversed. “Some graduates are not managers” can be true in an office where all managers are graduates, so it does not imply “Some managers are not graduates.”

::venn{zone="a,ab,b" nomi="A,B" elementi="a:×" titolo="Some $A$ are not $B$. At least one member of $A$ lies outside $B$"}

:::

:::osservazione{#frasi-equivalenti titolo="Equivalent statements in test questions"}
Two statements are **equivalent** when they are true in exactly the same situations. Exam notices and test questions use many different wordings for the four forms.

| wording in the question | form |
| --- | --- |
| Every $A$ is a $B$; whoever is an $A$ is a $B$; only $B$ are $A$ | All $A$ are $B$ |
| No $A$ is $B$; no $B$ is $A$; there is no $A$ that is a $B$ | No $A$ is $B$ |
| At least one $A$ is a $B$; there is an $A$ that is a $B$; some $B$ are $A$ | Some $A$ are $B$ |
| Not all $A$ are $B$; at least one $A$ is not a $B$ | Some $A$ are not $B$ |

The statement “Only employees with five years of service can request a transfer” means that anyone eligible to request a transfer must be an employee with five years of service. It is therefore equivalent to “Everyone who can request a transfer is an employee with five years of service.” The direction of the implication with “only” is covered in detail in the topic on necessary and sufficient conditions.
:::

## Negating quantified statements

:::teorema{#negazione-quantificatori titolo="Negations of the four forms"}
The **negation** of a statement is true exactly when the original statement is false. The four forms have the following negations.

| statement | negation |
| --- | --- |
| All $A$ are $B$ | Some $A$ are not $B$ (at least one $A$ is not a $B$) |
| Some $A$ are not $B$ | All $A$ are $B$ |
| No $A$ is $B$ | Some $A$ are $B$ (at least one $A$ is a $B$) |
| Some $A$ are $B$ | No $A$ is $B$ |

The rule holds because a universal statement is false as soon as there is a single member for which it fails. A single closed counter makes “All service counters are open” false, so the negation is “At least one service counter is not open.” Similarly, “No applicant arrived late” is false as soon as one applicant has arrived late.
:::

:::attenzione
The negation of “All $A$ are $B$” is *not* “No $A$ is $B$.” In an office with $10$ employees, $7$ of whom are graduates, “All employees are graduates” is false and “No employee is a graduate” is also false. Two statements that are both false cannot be each other’s negations, so “No employee is a graduate” is not the required negation. The correct negation is “At least one employee is not a graduate,” which is true in that office.
:::

:::esempio{titolo="Negating a compound property"}
The statement “Every admitted applicant passed both the written and the oral test” is universal, so its negation says that there is an admitted applicant who did *not* pass both tests. By De Morgan’s laws, covered in the topic on connectives, “not (written and oral)” is equivalent to “not written or not oral,” with inclusive “or.” The negation is therefore “At least one admitted applicant did not pass the written test or did not pass the oral test.”
:::

## The square of opposition

:::definizione{#quadrato-logico titolo="Contradictories, contraries, and subcontraries"}
The **square of opposition** classifies pairs of statements drawn from the four forms with the same $A$ and $B$, according to whether the two statements can both be true or both be false. The tables for the square assume that the subject category $A$ has at least one member.

- Two statements are **contradictory** if they can neither both be true nor both be false, that is, if one is the negation of the other.
- Two statements are **contrary** if they cannot both be true but can both be false.
- Two statements are **subcontrary** if they can both be true but cannot both be false.

| pair | relationship | both true | both false |
| --- | --- | --- | --- |
| All $A$ are $B$ / Some $A$ are not $B$ | contradictory | no | no |
| No $A$ is $B$ / Some $A$ are $B$ | contradictory | no | no |
| All $A$ are $B$ / No $A$ is $B$ | contrary | no | yes |
| Some $A$ are $B$ / Some $A$ are not $B$ | subcontrary | yes | no |

The statements “All trains are on time” and “No train is on time” are contrary because both are false on a day when some trains are on time and others are not. The statements “Some trains are on time” and “Some trains are not on time” are subcontrary because both are true on a day when some trains are on time and others are not, and they cannot both be false, because each train either is or is not on time.
:::

:::teorema{#vero-e-falso-nel-quadrato titolo="What follows when one of the four forms is true or false"}
When one of the four forms is known to be true or false, the table gives the truth values of the other three. The symbol ? means the truth value is undetermined.

| given statement | All $A$ are $B$ | No $A$ is $B$ | Some $A$ are $B$ | Some $A$ are not $B$ |
| --- | --- | --- | --- | --- |
| “All $A$ are $B$” is true | T | F | T | F |
| “All $A$ are $B$” is false | F | ? | ? | T |
| “No $A$ is $B$” is true | F | T | F | T |
| “No $A$ is $B$” is false | ? | F | T | ? |
| “Some $A$ are $B$” is true | ? | F | T | ? |
| “Some $A$ are $B$” is false | F | T | F | T |
| “Some $A$ are not $B$” is true | F | ? | ? | T |
| “Some $A$ are not $B$” is false | T | F | T | F |

Each row follows from the relationships in the square of opposition and the convention that $A$ has at least one member. For example, if “All $A$ are $B$” is true, every member of $A$ also belongs to $B$. Since $A$ has at least one member, “Some $A$ are $B$” is true. “Some $A$ are $B$” is called the **subaltern** of “All $A$ are $B$.” If, instead, “Some $A$ are $B$” is true, the other members of $A$ may be inside or outside $B$, which is why the first and last cells in that row contain ?.
:::

## The syllogism

:::definizione{#sillogismo titolo="Syllogism"}
A **syllogism** is an argument consisting of two quantified statements called **premises** and a third statement called the **conclusion**. The premises share a category, the **middle term**, which does not appear in the conclusion. In the syllogism

- All inspectors are officials;
- all officials have passed a competitive exam;
- therefore, all inspectors have passed a competitive exam,

the middle term is “officials,” and the conclusion links the remaining two categories, “inspectors” and “people who have passed a competitive exam.”
:::

:::definizione{#sillogismo-valido titolo="Valid syllogism"}
A syllogism is **valid** if its conclusion is true in *every* situation in which the premises are true. Thus, in a valid syllogism there is no situation with true premises and a false conclusion. An invalid syllogism admits at least one such situation, called a **counterexample**.

Test questions ask which conclusion “necessarily follows” from the premises, in other words, which conclusion makes the syllogism valid. The real-world truth of the premises is irrelevant because we accept them as true and check only what follows. The syllogism “All cats can swim; Fufi is a cat; therefore, Fufi can swim” is valid even if the first premise is false.
:::

## Valid syllogisms

:::teorema{#schemi-validi titolo="Common valid forms"}
The following syllogisms are valid for any choice of categories $A$, $B$, and $C$. The middle term is $B$.

| first premise | second premise | conclusion |
| --- | --- | --- |
| All $A$ are $B$ | All $B$ are $C$ | All $A$ are $C$ |
| All $A$ are $B$ | No $B$ is $C$ | No $A$ is $C$ |
| Some $A$ are $B$ | All $B$ are $C$ | Some $A$ are $C$ |
| Some $A$ are $B$ | No $B$ is $C$ | Some $A$ are not $C$ |
| All $B$ are $A$ | Some $B$ are $C$ | Some $A$ are $C$ |

The first form is valid because if the circle for $A$ lies inside that for $B$ and the circle for $B$ lies inside that for $C$, then the circle for $A$ lies inside that for $C$. The second is valid because $A$ lies inside $B$ and $B$ has no members in common with $C$, so $A$ has no members in common with $C$ either. In the last three forms, consider the member whose existence is guaranteed by the premise containing “some.” The premises tell us which categories it belongs to.

::venn{tipo="tre" zone="abc,bc,c" nomi="A,B,C" titolo="All $A$ are $B$ and all $B$ are $C$. The only region of $A$ that can contain members lies inside $C$"}

::venn{tipo="tre" zone="ab,b,c" nomi="A,B,C" titolo="All $A$ are $B$ and no $B$ is $C$. The only region of $A$ that can contain members lies outside $C$"}

:::

:::esempio{titolo="A premise containing some"}
“Some registry office employees receive the newsletter” follows from the premises “Some registry office employees belong to the union” and “All union members receive the newsletter.” Indeed, there is a registry office employee who belongs to the union. Since this employee is a member, they receive the newsletter. This gives us a registry office employee who receives the newsletter. “All registry office employees receive the newsletter” does not follow, because nonmembers might not receive it.

::venn{tipo="tre" zone="a,ac,abc,bc,c" nomi="anagr.,sind.,newsletter" etichetteNomi="registry,union,newsletter" elementi="abc:×" titolo="The region for union members who do not receive the newsletter is empty, so the union member $\times$ from the registry office lies in the region common to all three categories"}

:::

:::teorema{#sillogismi-con-un-individuo titolo="Syllogisms about an individual"}
When one premise concerns a single person, the following two forms are valid.

- If all $A$ are $B$ and Anna is an $A$, then Anna is a $B$.
- If all $A$ are $B$ and Anna is not a $B$, then Anna is not an $A$.

The second form is valid because if Anna were an $A$, she would also be a $B$ by the first premise. Thus, “Paolo does not work in the sales department” follows from “All sales department employees have a company car” and “Paolo does not have a company car.” The same reasoning applies with a negative premise. If no club member is a minor and Giulia is a minor, then Giulia is not a member.
:::

## Checking validity with diagrams and counterexamples

:::definizione{#diagramma-delle-premesse titolo="Diagram of the premises"}
To check a syllogism, draw three intersecting circles, one for each category, and read the premises one at a time.

- A premise containing “all” or “no” tells us which regions are *empty*. “All $A$ are $B$” makes the regions of $A$ outside $B$ empty. “No $A$ is $B$” makes the regions common to $A$ and $B$ empty.
- A premise containing “some” guarantees *at least one* member. After identifying the regions that the universal premises make empty, place a $\times$ in the region that must contain this member. If two regions are possible, place the mark on their shared boundary to show that at least one of them contains the member.

In the diagrams, the empty regions remain white and the others are colored. The conclusion necessarily follows if it can already be read from the diagram. For “All $A$ are $C$,” every colored region of $A$ must be inside $C$. For “Some $A$ are $C$,” a $\times$ must be inside both $A$ and $C$. The method works because the diagram represents all situations consistent with the premises.
:::

:::osservazione{#controesempio titolo="Looking for a counterexample"}
To rule out a conclusion, a single concrete situation with true premises and a false conclusion suffices. Given the premises “All cats are mammals” and “All dogs are mammals,” the conclusion “All cats are dogs” is false in the real world even though the premises are true. Therefore the form “All $A$ are $B$, all $C$ are $B$, so all $A$ are $C$” **is invalid**. To find a counterexample, replace the categories in the question with familiar ones, such as animals, numbers, or cities.

::venn{tipo="tre" zone="ac,bc,c" nomi="gatti,cani,mammiferi" etichetteNomi="cats,dogs,mammals" titolo="Counterexample. Cats and dogs both belong to the category of mammals and have no members in common"}

:::

:::osservazione{#schemi-non-validi titolo="Common invalid forms"}
The following forms appear frequently in test questions. Each has a counterexample, so the stated conclusion does not follow from the premises.

- **Undistributed middle**. “All $A$ are $B$” and “All $C$ are $B$” do not imply “All $A$ are $C$.” The example with cats, dogs, and mammals is a counterexample.
- **Two particular premises**. “Some $A$ are $B$” and “Some $B$ are $C$” do not imply “Some $A$ are $C$.” Some even numbers are multiples of $3$ and some multiples of $3$ are odd, but no even number is odd.
- **Two negative premises**. “No $A$ is $B$” and “No $B$ is $C$” do not imply “No $A$ is $C$.” No cat is a fish and no fish is a mammal, but all cats are mammals.
- **Affirming the consequent**. “All $A$ are $B$” and “Luca is a $B$” do not imply “Luca is an $A$.” All doctors have degrees and Luca has a degree, but Luca might be an engineer.
- **Denying the antecedent**. “All $A$ are $B$” and “Marco is not an $A$” do not imply “Marco is not a $B$.” All club members pay a fee and Marco is not a member, but he may pay the guest fee.

The last two errors also appear in the topic on necessary and sufficient conditions, where “All $A$ are $B$” corresponds to the implication “if someone is an $A$, then they are a $B$.”
:::

:::esempio{titolo="A conclusion that does not follow"}
“All first-floor employees have degrees” and “All part-time employees have degrees” do not imply “Some first-floor employees work part-time.” In the diagram, the region common to all three circles is colored, so it may contain members. Since neither premise places a $\times$ there, it may also be empty. An office in which the first-floor staff all work full-time can make the premises true and the conclusion false.

::venn{tipo="tre" zone="ab,abc,bc,b" nomi="1° p.,laureati,part-time" etichetteNomi="1st fl.,grads,part-time" titolo="The regions for first-floor and part-time employees outside the graduates are empty. The region common to all three categories may be empty or nonempty"}

:::

## Short methods for test questions

:::osservazione{#metodi-rapidi titolo="Strategies for multiple-choice questions"}
A few recurring steps help answer questions about quantifiers quickly.

- **Rewrite the premises using the four forms**. “Only $B$ are $A$” becomes “All $A$ are $B$,” and “not all” becomes “Some … are not.” Once the premises are rewritten, the form of the argument becomes clear.
- **Use the table of negations**. The negation of a statement with “all” contains “at least one … is not,” and the negation of an affirmative statement with “some” contains “no.” Options that negate “all” with “no” can be eliminated immediately.
- **Draw three circles in the margin**. Mark the regions made empty by “all” and “no,” then mark $\times$ for “some.” Compare each option with the diagram.
- **Look for a counterexample to each option**. An option that is false in a situation consistent with the premises does not necessarily follow and can be eliminated. Familiar categories such as animals or numbers suffice.
- **Check the direction**. “All $A$ are $B$” cannot be reversed to give “All $B$ are $A$,” whereas “No $A$ is $B$” and “Some $A$ are $B$” work in either direction.

From two particular premises or two negative premises, no statement connecting the two outer terms follows. If these are the premises, the correct answer is therefore an option such as “none of the proposed conclusions,” if offered. For a question asking “which statement cannot be true,” look for an option that contradicts a valid conclusion.
:::
