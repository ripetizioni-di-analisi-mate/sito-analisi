---
titolo: "Deduction problems and logic tables"
sommario: "How to work out who does what from a set of clues using logic grids, arrangements in a line or around a table, work schedules, truth-teller and liar puzzles, and problems in which a fixed number of statements are true."
---

## What is a deduction problem?

:::definizione{#problema-di-deduzione titolo="Deduction problem"}
A **deduction problem** describes a group of people, characteristics to assign to them (a job, a city, a position in line, or a day on duty), and a list of **clues**, also called constraints. Solving it means finding every assignment that satisfies every clue. The problem almost always specifies that the characteristics are distinct: each person receives exactly one value of a given characteristic, and no two people share that value.

If Anna, Bruno, and Carla work in three different offices, the civil registry, the records office, and the tax office, exactly one of them works in each office. The clue “Carla works in neither the civil registry nor the tax office” leaves her only one possible office, so Carla works in the records office.
:::

:::osservazione{#soluzione-unica titolo="One solution or several"}
The clues of a well-constructed question can leave one possible assignment or several. In the first case the question is direct (“Who works in the tax office?”). In the second it asks what holds in every solution, or what further information would determine a single one. Two solutions can also differ only in details the question does not ask about: if Luca and Nicola can exchange the juice and the water, “Who has the coffee?” may still have just one answer.
:::

## Logic grids

:::definizione{#griglia-di-deduzione titolo="Logic grid"}
A **logic grid** is a two-way table with a row for each person and a column for each possible value of a characteristic. Mark a cell ✗ if the clues rule out the match and ✓ if they establish it. The grid records what has already been deduced so that it does not all have to be kept in mind.

Three friends, Davide, Elisa, and Fabio, each own a different pet: a cat, a dog, or a parrot. Davide does not have the cat, and Fabio has neither the cat nor the dog. After these clues are entered, the grid looks as follows.

| | cat | dog | parrot |
| --- | --- | --- | --- |
| Davide | ✗ | | |
| Elisa | | | |
| Fabio | ✗ | ✗ | |
:::

::::teorema{#caselle-escluse-e-certe titolo="The row and column rule"}
If each person has exactly one value and each value belongs to exactly one person, two rules apply to a logic grid.

- If all but one cell in a row or column are marked ✗, the remaining cell must be ✓.
- If one cell is ✓, all other cells in its row and column must be ✗.

In the pet grid Fabio's row has two ✗ marks, so Fabio has the parrot. Consequently, the parrot column gets an ✗ in the rows for Davide and Elisa.

:::dimostrazione
Each row contains exactly one ✓ because each person has only one value. If all other values are ruled out, only that one remains. Likewise each column contains exactly one ✓ because each value belongs to only one person. A ✓ therefore rules out every other cell in both its column and its row.
:::
::::

:::esempio{#propagazione-dei-vincoli titolo="Constraint propagation"}
Applying a rule produces a new ✓ or ✗, which in turn allows another rule to be applied. This process is called **constraint propagation**. In the pet problem, after Fabio is marked ✓ for the parrot, Davide's row has an ✗ for both the cat and the parrot, so Davide has the dog. The cat column now has an ✗ for both Davide and Fabio, so the cat belongs to Elisa.

| | cat | dog | parrot |
| --- | --- | --- | --- |
| Davide | ✗ | ✓ | ✗ |
| Elisa | ✓ | ✗ | ✗ |
| Fabio | ✗ | ✗ | ✓ |

Each step uses a single clue or rule. The grid is complete once each row contains a ✓.
:::

:::definizione{#griglie-con-piu-categorie titolo="Grids with two characteristics"}
With two characteristics, such as occupation and city, use a table with one row per person and one column per characteristic. Record excluded values alongside it. A clue linking characteristics, such as “the teacher lives in Rome,” can connect information about either characteristic to the other. If the teacher lives in Rome and Giulia lives in Naples, then Giulia is not the teacher. This step uses the **contrapositive** of the clue: “if a person is the teacher, then that person lives in Rome” is equivalent to “if a person does not live in Rome, then that person is not the teacher.” The equivalence between an implication and its contrapositive is discussed in the topic on connectives, negations, and implications.
:::

:::attenzione
The clue “the teacher lives in Rome” does *not* say that whoever lives in Rome is the teacher, unless the problem specifies that only one person lives in each city. With three people in three different cities, the two statements are equivalent. With four people in just two cities, one of them Rome, someone who does not teach could also live in Rome.
:::

## Arrangements in a line

:::definizione{#disposizioni-in-fila titolo="Arrangements in a line"}
In a **linear arrangement**, people occupy positions numbered $1, 2, 3, \ldots$. In a waiting line, position $1$ belongs to the person served first. In a row of chairs or parking spaces, position $1$ is the leftmost. Each clue becomes a condition on the position numbers.

| clue | condition |
| --- | --- |
| “Bea is immediately behind Ciro” | Bea's position $=$ Ciro's position $+ 1$ |
| “Dina is behind Ezio” | Dina's position number is greater than Ezio's |
| “Ilda is next to Gianni” | the positions differ by $1$ |
| “Lino is at one end” | Lino is in the first or last position |

The table expresses all the clues in the same form so they can be compared.
:::

:::esempio{titolo="Four people waiting in line"}
Gianni, Ilda, Lino, and Mia are waiting in line at a counter. Lino is at one end of the line and ahead of Mia. Ilda is immediately behind Gianni. Mia is not next to Lino.

Since Lino is ahead of Mia, he cannot be last, so he is first. Mia is not next to Lino, so she is in position $3$ or $4$. If she were in position $3$, positions $2$ and $4$ would be left for Gianni and Ilda, but those positions are not consecutive. Thus Mia is fourth, Gianni second, and Ilda third. The order is
$$
\text{Lino},\ \text{Gianni},\ \text{Ilda},\ \text{Mia}.
$$
:::

:::attenzione
“Behind” and “immediately behind” are different clues. “Dina is behind Ezio” holds even if other people stand between them, while “Dina is immediately behind Ezio” requires consecutive positions. In the line Ezio, Aldo, Dina, the first statement is true and the second is false.
:::

## Seating around a table

:::definizione{#tavolo-rotondo titolo="Seating around a round table"}
In round-table problems the seats are equally spaced and everyone faces the center. Viewed from above, the person immediately to someone's **right** occupies the next seat counterclockwise, and the person immediately to their **left** occupies the next seat clockwise. With an even number of seats, the person *opposite* is half the seats away. With six seats, move three seats around.

Rotating everyone by the same number of seats does not change who sits next to whom. One person's position can therefore be fixed and everyone else placed relative to that person. Number the seats $0, 1, 2, \ldots$ counterclockwise starting with that person. For the person in seat $k$, the seat to the right is $k + 1$ and the seat to the left is $k - 1$. After the last seat the numbering returns to $0$.
:::

:::esempio{titolo="Six people around a table"}
Carlo, Dafne, Ennio, Fulvia, Gino, and Ilda sit around a round table with six seats, facing the center. Fulvia is opposite Carlo. Dafne is on Carlo's right. Gino is opposite Dafne. Ilda is not next to Fulvia.

Place Carlo in seat $0$. Fulvia, opposite him, is in seat $3$, and Dafne, to his right, is in seat $1$. Gino is opposite Dafne, so he is in seat $1 + 3 = 4$. This leaves seats $2$ and $5$. Seat $2$ is next to Fulvia's seat $3$, so Ilda is in seat $5$ and Ennio in seat $2$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" punti="0,-2,pieno;1.732,-1,pieno;1.732,1,pieno;0,2,pieno;-1.732,1,pieno;-1.732,-1,pieno" segmenti="0,-2,0,2;1.732,-1,-1.732,1;1.732,1,-1.732,-1" etichette="-0.4,-2.65,Carlo;2.05,-1.3,Dafne;2.05,1.15,Ennio;-0.45,2.4,Fulvia;-2.95,1.15,Gino;-2.75,-1.3,Ilda" xmin=-3.6 xmax=3.6 ymin=-3.1 ymax=2.9 legenda=0 titolo="The table seen from above. Starting from Carlo and moving counterclockwise, the order is Dafne, Ennio, Fulvia, Gino, and Ilda. The dashed segments join pairs of people sitting opposite each other"}

:::

:::attenzione
In the top view, the right-hand side of someone seated at the top of the table appears on the reader's left. In the six-seat diagram, Fulvia's right-hand neighbor is Gino, drawn to Fulvia's left because he follows her counterclockwise. For this reason, determine right and left using the counterclockwise convention rather than the positions on the page.
:::

## Work shifts and schedules

:::definizione{#turni-e-calendari titolo="Work shifts and schedules"}
In a scheduling problem the days or time slots have a fixed order and can be treated like positions in a line, with Monday as position $1$, Tuesday as position $2$, and so on. “The day after” corresponds to “immediately behind,” and “two consecutive days” to “two adjacent positions.” If each person works several shifts, put the days in columns of a table and enter the person on duty in each column.

Suppose Aldo, Bruno, and Ciro cover six nights, two each, and no one works on consecutive nights. Whoever works on Monday cannot work on Tuesday. A single clue of this kind therefore rules out that person on both the preceding and the following day.
:::

:::esempio{titolo="Four coworkers on four days"}
Ornella, Piero, Teresa, and Ugo work at the office one per day from Monday through Thursday. Ornella works neither Monday nor Thursday. Piero works the day after Ornella. Teresa works after Ugo. Teresa does not work on Tuesday.

Ornella works on Tuesday or Wednesday. If she worked on Wednesday, Piero would work on Thursday, leaving Monday and Tuesday for Ugo and Teresa. Teresa would have to work on Tuesday because she works after Ugo, contradicting the last clue. Thus Ornella works on Tuesday and Piero on Wednesday. Since Teresa works after Ugo, Ugo works on Monday and Teresa on Thursday.
:::

## Truth-tellers and liars

:::definizione{#veri-e-bugiardi titolo="The two types of speaker"}
In **truth-teller and liar** problems, each person is one of two types: a **truth-teller** always says something true and a **liar** always says something false. It follows that a statement is true if and only if its speaker is a truth-teller. This rule allows reasoning from the statements to the speakers' types and vice versa.

If Lucio is a truth-teller and says “Mirta is a liar,” then Mirta is a liar. If Lucio is a liar, his statement is false, so Mirta is a truth-teller.
:::

::::teorema{#metodo-per-ipotesi titolo="Reasoning by assumption and contradiction"}
To determine a person's type, suppose the person is a truth-teller and deduce the consequences of the statements. If this leads to a contradiction, with someone required to be both a truth-teller and a liar, the assumption is false and the original person is a liar. If there is no contradiction, test the opposite assumption as well. If only one assumption allows a consistent assignment, that person's type is determined. The complete solution is unique if there is exactly one consistent assignment of types to everyone.

:::dimostrazione
Each person is either a truth-teller or a liar and cannot be both. If the assumption “this person is a truth-teller” leads to a contradiction, it cannot be true. Only the other possibility remains.
:::
::::

:::esempio{titolo="Two statements about the speakers"}
Marco says, “Nadia is a liar.” Nadia says, “Marco and I are the same type.”

Suppose Marco is a liar. His statement is then false, so Nadia is a truth-teller. Her statement must therefore be true, which would make Marco a truth-teller like her, contradicting the assumption. Thus Marco is a **truth-teller** and Nadia is a **liar**. As a check, Nadia's statement is false because the two are different types, consistent with Nadia lying.
:::

:::osservazione{#frasi-ricorrenti titolo="Three recurring statements"}
Some statements occur frequently. Each has a fixed consequence that can be derived by testing both possible types for the speaker.

- No one can say “I am a liar.” A truth-teller would be saying something false and a liar something true, and neither is possible.
- If $X$ says “$Y$ is a truth-teller,” then $X$ and $Y$ are the same type. If $X$ says “$Y$ is a liar,” they are different types. A truth-teller describes $Y$ correctly, whereas a liar assigns the opposite type.
- If $X$ says “$Y$ and I are the same type,” then $Y$ is a truth-teller regardless of the type of $X$. If $X$ is a truth-teller, $Y$ is the same type and hence a truth-teller. If $X$ is a liar, $Y$ is a different type from $X$ and therefore again a truth-teller.

These consequences often establish someone's type without having to test assumptions.
:::

## Who did it? Contradictory statements

:::definizione{#affermazioni-contraddittorie titolo="Contradictory statements"}
Two statements are **contradictory** if one is the negation of the other, so one is true and the other false. “Bruno did it” and “Bruno did not do it” are contradictory. A person's statement and another person's claim “that person is lying” are also contradictory because the second says that the first is false. The negation of compound statements is covered in the topic on connectives, negations, and implications.
:::

:::teorema{#chi-e-stato titolo="Problems with a fixed number of true statements"}
In many problems one person performed an action, several people each make one statement, and the problem specifies how many statements are true, for example by saying “exactly one is false.” A contradictory pair contains exactly one true and one false statement, which determines how many of the remaining statements are true. If there are no contradictory pairs, test each possible culprit and count the true statements. The culprit is the person for whom the count agrees with the problem.

This method works because every statement is either true or false and, once the culprit is fixed, the truth value of each statement is determined.
:::

:::esempio{titolo="Exactly one false statement"}
Exactly one of Aldo, Bruno, Carlo, and Dino left the office window open. Aldo says, “Bruno did it.” Bruno says, “Carlo did it.” Carlo says, “Bruno is lying.” Dino says, “I didn't do it.” Exactly one of the four statements is false.

Bruno's and Carlo's statements are contradictory, so one of them is the only false one. Aldo and Dino therefore tell the truth, and Aldo's statement implies that **Bruno** did it. As a check, if Bruno did it, his own statement is false and the other three are true.

| culprit | Aldo | Bruno | Carlo | Dino | false |
| --- | --- | --- | --- | --- | --- |
| Aldo | F | F | T | T | $2$ |
| Bruno | T | F | T | T | $1$ |
| Carlo | F | T | F | T | $2$ |
| Dino | F | F | T | F | $3$ |
:::

## Questions about the answer choices

:::definizione{#necessariamente-vera titolo="Necessary, possible, or impossible"}
When the clues admit several solutions, questions use three expressions with precise meanings.

- A statement is **necessarily true** if it is true in *every* solution.
- A statement *could be true* if it is true in at least one solution.
- A statement *cannot be true* if it is false in every solution.

Alfio, Bruna, and Cora are waiting in line. Alfio is not first, and Bruna is ahead of Cora. The two solutions are Bruna, Alfio, Cora and Bruna, Cora, Alfio. Thus “Bruna is first” is necessarily true, “Alfio is last” could be true, and “Cora is first” cannot be true.
:::

:::osservazione{#informazione-aggiuntiva titolo="Additional information"}
Another common question asks, “Which additional piece of information uniquely determines the solution?” List every solution to the original clues and check how many remain under each option. The correct option leaves exactly one. An option true in every solution adds no information. In the line with Alfio, Bruna, and Cora, “Cora is second” leaves a single solution. “Bruna is first” already follows from the clues and leaves both solutions.
:::

## Quick methods for timed questions

:::osservazione{#vincolo-piu-forte titolo="Start with the strongest constraint"}
Read all the clues and apply them in a specific order.

- First apply clues fixing a value: “Gina is third,” “Ugo is on the first floor,” or “the manager is on the fourth floor.”
- Next use those that establish a fixed relationship between two people: “immediately behind,” “opposite,” or “the day after.” A pair needing consecutive positions has only a few possible placements. List them all.
- Finally use exclusions (“is not first,” “is not next to”) to eliminate the remaining placements that violate them.

At a round table, fix the person mentioned most often. In truth-teller and liar problems, start with the recurring statements that determine a person's type without an assumption.
:::

:::osservazione{#provare-le-opzioni titolo="Testing the options one at a time"}
The answer choices reduce the number of cases to examine. In a “who did it?” question, each option gives a possible culprit, so count the true statements for each. In a “who is third?” question, put the person named by each option in third place and check whether the clues can be satisfied. To rule out a “necessarily true” option, one solution in which the statement is false is enough: it is a counterexample.

Wrong options often arise from recurring mistakes: exchanging right and left at a table, reading “behind” as “immediately behind,” or reversing a clue. An option such as “there is insufficient information” is correct only when two solutions have been found that give different answers.
:::

:::osservazione{#schema-a-margine titolo="Diagrams to draw in the margin"}
Each type of problem has a diagram that takes a few seconds to draw in the margin.

- For matching people with characteristics, use a grid with ✗ and ✓.
- For lines and rankings, use a row of numbered boxes.
- For tables, draw a circle with the seats and an arrow showing counterclockwise movement, which corresponds to the seated person's right.
- For shifts, use a table with one day per column.
- For truth-teller and liar problems and “who did it?” questions, use a table with one assumption or culprit per row and the truth value T or F for every statement.

Check the solution against the diagram by reviewing each clue in turn.
:::
