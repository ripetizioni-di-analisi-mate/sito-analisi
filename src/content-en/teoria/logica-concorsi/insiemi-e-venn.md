---
titolo: "Sets and Venn diagrams"
sommario: "What sets and their elements are, how to represent unions, intersections, differences, and complements with Venn diagrams, how to choose the diagram that represents three categories, and how to count elements in problems involving two or three sets."
---

## Sets and elements

:::definizione{#insieme titolo="Sets and their elements"}
A **set** is a collection of objects for which it is possible to determine unambiguously whether any given object belongs to it. The objects that belong to the set are called its **elements**. Sets are denoted by uppercase letters such as $A$, $B$, and $C$. To say that $x$ is an element of $A$, we write $x \in A$, read as “$x$ belongs to $A$.” To say that it is not an element, we write $x \notin A$.

The days of the week form a set $G$, so Tuesday $\in G$ and January $\notin G$. The “most beautiful cities in Italy” do not form a set because there is no agreed-upon criterion for deciding whether a city belongs to it.
:::

:::definizione{#rappresentazione-insiemi titolo="Roster notation and set-builder notation"}
A set can be described in two ways.

- In **roster notation**, its elements are listed between braces, separated by commas. The set of vowels is $V = \{a, e, i, o, u\}$.
- In **set-builder notation**, we give a property that holds for all the elements of the set and for no others. The set $P = \{x \mid x \text{ is an even number between } 1 \text{ and } 9\}$ is read as “the set of all $x$ such that $x$ is an even number between $1$ and $9$.”

Both descriptions give the same set, since $P = \{2, 4, 6, 8\}$. Listing the elements is practical when there are only a few. Giving a property is practical when there are many, as with the multiples of $3$ less than $1000$. The order of a list does not matter, and a repeated element is counted only once, so $\{1, 2, 3\}$ and $\{3, 1, 2, 1\}$ are the same set.
:::

:::definizione{#numero-di-elementi titolo="Number of elements"}
The **number of elements** in a finite set $A$ is denoted by $|A|$. For the set of vowels, $|V| = 5$, and for the set of even numbers between $1$ and $9$, $|P| = 4$. Counting problems on public-service exams ask how many elements belong to a set formed from other sets, such as the number of employees who speak two languages or the number of students who play no sports.
:::

## Subsets, the empty set, and the universal set

:::definizione{#sottoinsieme titolo="Subset"}
A set $B$ is a **subset** of $A$, written $B \subseteq A$, if *every* element of $B$ also belongs to $A$. We also say that $B$ is **contained** in $A$. The set of dogs is contained in the set of mammals because every dog is a mammal. The set $\{2, 4\}$ is contained in $\{1, 2, 3, 4\}$. The set $\{2, 5\}$ is not contained in $\{1, 2, 3, 4\}$ because $5$ does not belong to it.

::venn{tipo="incluso" nomi="Mammiferi,Cani" etichetteNomi="Mammals,Dogs" zone="ab" titolo="The set of dogs is contained in the set of mammals, so the circle for dogs lies entirely inside the circle for mammals"}

Inclusion expresses statements of the form “all … are ….” The statement “all dogs are mammals” says that the set of dogs is contained in the set of mammals. Statements with “all,” “some,” and “none” are studied in the chapter on syllogisms.
:::

:::definizione{#insieme-vuoto titolo="Empty set"}
The **empty set** is the set that has no elements. It is denoted by $\emptyset$, and $|\emptyset| = 0$. For example, the set of months with $32$ days is empty. The empty set expresses the fact that a region of a diagram contains no elements, as in the region for dogs that are not mammals.
:::

:::definizione{#insieme-universo titolo="Universal set"}
The **universal set**, denoted by $U$, is the set of all elements under consideration in a problem. The other sets in the problem are its subsets. In a question about the $40$ employees in an office, the universal set consists of the $40$ employees, and the set of employees who speak English is one of its subsets. In a diagram, the universal set is drawn as a rectangle. It also contains elements that belong to none of the other sets, such as employees who speak no foreign languages.
:::

:::definizione{#diagramma-di-venn titolo="Venn diagram"}
A **Venn diagram** represents sets by closed curves, usually circles, drawn inside the rectangle representing the universal set. Each element is placed in the region corresponding to the sets to which it belongs. Two overlapping circles divide the rectangle into four regions: elements in the first set only, elements in both sets, elements in the second set only, and elements in neither set.

Consider $U = \{1, 2, \ldots, 10\}$, the set $A$ of even numbers, and the set $B$ of multiples of $3$. The number $6$ is even and is a multiple of $3$, so it goes in the region common to the two circles. The numbers $1$, $5$, and $7$ are neither even nor multiples of $3$, so they go inside the rectangle but outside both circles.

::venn{nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="Numbers from $1$ to $10$: $A$ is the set of even numbers and $B$ is the set of multiples of $3$"}

:::

## Set operations

:::definizione{#unione titolo="Union"}
The **union** of $A$ and $B$, denoted by $A \cup B$, is the set of elements that belong to $A$ *or* to $B$, including those that belong to both. The “or” in a union is therefore inclusive. Taking the even numbers and the multiples of $3$ among the numbers from $1$ to $10$ gives
$$
A \cup B = \{2, 3, 4, 6, 8, 9, 10\},
$$
and $6$ is written only once. If $A$ is the set of employees who speak English and $B$ is the set of employees who speak French, $A \cup B$ is the set of employees who speak *at least one* of the two languages.

::venn{zone="a,ab,b" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="The union $A \cup B$ consists of the three regions inside the two circles"}

:::

:::definizione{#intersezione titolo="Intersection"}
The **intersection** of $A$ and $B$, denoted by $A \cap B$, is the set of elements that belong *both* to $A$ *and* to $B$. For the even numbers and the multiples of $3$ between $1$ and $10$, $A \cap B = \{6\}$. In the office example, $A \cap B$ is the set of employees who speak English and French. Two sets are **disjoint** if they have no elements in common, that is, if $A \cap B = \emptyset$. The even numbers and the odd numbers form two disjoint sets.

::venn{zone="ab" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="The intersection $A \cap B$ is the region common to the two circles"}

:::

:::definizione{#differenza titolo="Difference"}
The **difference** of $A$ and $B$, denoted by $A \setminus B$, is the set of elements that belong to $A$ and do *not* belong to $B$. For the even numbers and the multiples of $3$ between $1$ and $10$, $A \setminus B = \{2, 4, 8, 10\}$. In the office example, $A \setminus B$ is the set of employees who speak English and do not speak French, that is, those who speak *only* English out of the two languages. The order of the sets matters because $B \setminus A = \{3, 9\}$ is a different set from $A \setminus B$.

::venn{zone="a" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="The difference $A \setminus B$ is the part of circle $A$ outside circle $B$"}

:::

:::definizione{#complementare titolo="Complement"}
The **complement** of $A$, denoted by $\overline{A}$, is the set of elements in the universal set that do not belong to $A$. With $U = \{1, 2, \ldots, 10\}$ and $A$ the set of even numbers, $\overline{A} = \{1, 3, 5, 7, 9\}$. The complement depends on the universal set. Since every element of $U$ belongs to $A$ or to $\overline{A}$, we have
$$
|\overline{A}| = |U| - |A| .
$$
In an office of $40$ employees, $26$ of whom speak English, the number who do not speak English is $40 - 26 = 14$.

::venn{zone="b,u" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="The complement $\overline{A}$ includes everything inside the rectangle and outside circle $A$"}

:::

:::teorema{#complementare-unione titolo="Complements of unions and intersections"}
For two sets $A$ and $B$, **De Morgan’s laws** state that
$$
\overline{A \cup B} = \overline{A} \cap \overline{B},
\qquad
\overline{A \cap B} = \overline{A} \cup \overline{B} .
$$
An element is outside the union if it belongs to neither $A$ nor $B$, so it belongs to $\overline{A}$ and to $\overline{B}$. An element is outside the intersection if it fails to belong to at least one of the two sets, so it belongs to $\overline{A}$ or to $\overline{B}$. The first law applies to questions such as “How many play *neither* soccer *nor* tennis?” because the people in question form the complement of the union. Among the numbers from $1$ to $10$, the elements that are neither even nor multiples of $3$ are $1$, $5$, and $7$. The corresponding laws for statements appear in the chapter on connectives and negations.

::venn{zone="u" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="The complement of the union $\overline{A \cup B} = \overline{A} \cap \overline{B}$ is the region outside both circles"}

:::

## Relationships between categories

:::definizione{#relazioni-tra-due-categorie titolo="Inclusion, overlap, and disjointness"}
Two categories of people or objects, considered as sets, have one of the following relationships.

- One category is **included** in the other if each of its elements belongs to the other, as with Italians and Europeans. In the diagram, one circle lies inside the other.
- The two categories **overlap** if they have some elements in common and each also has elements that do not belong to the other, as with doctors and women. In the diagram, the two circles overlap in part.
- The two categories are **disjoint** if they have no elements in common, as with fish and birds. In the diagram, the two circles are separate.

In questions of this kind, the relationship is determined by the ordinary meanings of the words.

::venn{tipo="incluso" nomi="Europei,Italiani" etichetteNomi="Europeans,Italians" titolo="Inclusion: every Italian is a European"}

::venn{nomi="Medici,Donne" etichetteNomi="Doctors,Women" zone="ab" titolo="Overlap: there are women who are doctors, men who are doctors, and women who are not doctors"}

::venn{tipo="disgiunti" nomi="Pesci,Uccelli" etichetteNomi="Fish,Birds" titolo="Disjointness: no fish is a bird"}

:::

:::osservazione{#come-si-stabilisce-la-relazione titolo="How to determine the relationship"}
To determine the relationship between two categories, look for a concrete example for each region of the diagram. With dogs and mammals, there is no dog that is not a mammal. The region for dogs outside the set of mammals is therefore empty, and the circle for dogs is drawn inside the circle for mammals.
:::

:::definizione{#tre-categorie titolo="Diagrams with three categories"}
With three categories, examine the three pairs one at a time and combine their relationships in a single diagram. A diagram correctly represents the three categories if it contains a region for every combination that actually occurs and none for impossible combinations. Six cases occur most frequently on exams.

- Animals, mammals, dogs: every dog is a mammal and every mammal is an animal, so the three circles are nested.
- Mammals, dogs, cats: dogs and cats form disjoint sets, and both are mammals, so two separate circles lie inside a third.
- Musicians, pianists, violinists: pianists and violinists are musicians, and some people play both instruments, so two overlapping circles lie inside a third.
- Doctors, men, Italians: each pair overlaps, and there are Italian men who are doctors, so the three circles overlap to form seven regions.
- Dogs, cats, white animals: dogs and cats form disjoint sets, and there are white dogs, white cats, and white animals that are neither dogs nor cats, so the circle for white animals overlaps the other two, which remain separate.
- Fish, birds, reptiles: the three categories are pairwise disjoint, so the three circles are separate.

::grafico{assi=0 uguale=1 legenda=0 curve="5.0+4.3*cos(t),16+4.3*sin(t),0,6.29;5.5+2.9*cos(t),15.6+2.9*sin(t),0,6.29;6.0+1.5*cos(t),15.3+1.5*sin(t),0,6.29;16.0+4.3*cos(t),16+4.3*sin(t),0,6.29;14.4+1.4*cos(t),16+1.4*sin(t),0,6.29;17.6+1.4*cos(t),16+1.4*sin(t),0,6.29;27.0+4.3*cos(t),16+4.3*sin(t),0,6.29;26.0+1.9*cos(t),16+1.9*sin(t),0,6.29;28.0+1.9*cos(t),16+1.9*sin(t),0,6.29;3.9+2.4*cos(t),5.9+2.4*sin(t),0,6.29;6.1+2.4*cos(t),5.9+2.4*sin(t),0,6.29;5.0+2.4*cos(t),4+2.4*sin(t),0,6.29;13.6+2.2*cos(t),5+2.2*sin(t),0,6.29;18.4+2.2*cos(t),5+2.2*sin(t),0,6.29;16.0+1.6*cos(t),5+1.6*sin(t),0,6.29;24.6+1.7*cos(t),6.7+1.7*sin(t),0,6.29;29.4+1.7*cos(t),6.7+1.7*sin(t),0,6.29;27.0+1.7*cos(t),2.9+1.7*sin(t),0,6.29" etichette="0.1,20.4,1;11.1,20.4,2;22.1,20.4,3;0.1,9.4,4;11.1,9.4,5;22.1,9.4,6" xmin=-0.5 xmax=32.5 ymin=-0.5 ymax=21.5 titolo="The six diagrams in the order listed: 1 animals, mammals, dogs; 2 mammals, dogs, cats; 3 musicians, pianists, violinists; 4 doctors, men, Italians; 5 dogs, cats, white animals; 6 fish, birds, reptiles"}

:::

:::esempio{#scelta-del-diagramma titolo="Fruit, apples, red objects"}
Which diagram represents the categories “fruit,” “apples,” and “red objects”? Every apple is a fruit, so the circle for apples lies inside the circle for fruit. Some apples are red and others are green, so the circle for red objects overlaps part of the circle for apples. Strawberries are red fruit but are not apples, so the circle for red objects also extends into the part of the fruit circle outside the apple circle. Finally, a red pen is not a fruit, so the circle for red objects extends outside the fruit circle. The correct diagram therefore has one circle inside another and a third circle that overlaps both and extends outside them.
:::

:::attenzione
Two categories associated in everyday life can be disjoint. Among “doctors, hospitals, patients,” doctors and patients overlap because a doctor can be hospitalized. Hospitals are buildings rather than people, so their circle is separate from the other two.
:::

## Counting the elements of two sets

::::teorema{#principio-inclusione-esclusione titolo="Number of elements in a union"}
For two finite sets $A$ and $B$, we have
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
At an office, $18$ employees speak English, $12$ speak French, and $5$ speak both languages. The number of employees who speak at least one of these languages is
$$
18 + 12 - 5 = 25 .
$$
If $A$ and $B$ are disjoint, $|A \cap B| = 0$ and the number of elements in the union is the sum $|A| + |B|$.

::venn{zone="a,ab,b" nomi="I,F" elementi="a:13;ab:5;b:7" titolo="Employees who speak English ($I$) and French ($F$): $13$ speak only English, $5$ speak both languages, and $7$ speak only French, for a total of $25$"}

:::dimostrazione
In the sum $|A| + |B|$, the elements of $A \cap B$ are counted twice, once as elements of $A$ and once as elements of $B$. Subtracting $|A \cap B|$ means that each element of the union is counted exactly once.
:::
::::

:::esempio{#nessuno-dei-due titolo="How many play neither sport?"}
In a class of $30$ students, $17$ play soccer, $14$ play tennis, and $6$ play both sports. The number who play at least one of the two sports is
$$
17 + 14 - 6 = 25,
$$
so $30 - 25 = 5$ students play neither sport. These students form the complement of the union. The $17$ soccer players include the $6$ who also play tennis, so $17 - 6 = 11$ play only soccer and $14 - 6 = 8$ play only tennis.

::venn{zone="u" nomi="C,T" elementi="a:11;ab:6;b:8;u:5" titolo="Students who play soccer ($C$) and tennis ($T$): the shaded region contains the $5$ students who play neither sport"}

:::

:::osservazione{#zone-due-insiemi titolo="The four regions and the missing count"}
With two sets, the elements fall into four regions: $A$ only, both, $B$ only, and neither. The four counts add up to $|U|$. A question gives some of the counts and asks for a missing one. Usually the overlap is filled in first, and the other counts are found by subtraction. At an office of $50$ employees, $32$ travel to work by car, $25$ use public transportation, and $4$ use neither. The number who use at least one of these forms of transportation is $50 - 4 = 46$, so the formula for a union gives
$$
|A \cap B| = 32 + 25 - 46 = 11
$$
employees who use both a car and public transportation.
:::

:::osservazione{#tabella-doppia-entrata titolo="Two-way table"}
The four regions for two sets can be recorded in a **two-way table**. The rows indicate whether an element belongs to $A$, the columns indicate whether it belongs to $B$, and the last row and column give the totals. The table for the class of $30$ students is shown below.

| | Tennis | No tennis | Total |
| --- | --- | --- | --- |
| Soccer | $6$ | $11$ | $17$ |
| No soccer | $8$ | $5$ | $13$ |
| Total | $14$ | $16$ | $30$ |

Each row and column adds up to the total shown at its end, so a missing entry can be found by subtraction. Such a table is used to cross-classify people by two characteristics, for example, men and women by full-time or part-time employment.
:::

:::attenzione
The statement “$17$ play soccer” includes those who also play tennis unless the problem specifies “play *only* soccer.” Adding $17$ and $14$ without subtracting the $6$ students in both groups gives $31$, which exceeds the class size because the $6$ students in both groups were counted twice. This error is called **double counting**.
:::

## Counting the elements of three sets

:::teorema{#unione-di-tre-insiemi titolo="Number of elements in the union of three sets"}
For three finite sets $A$, $B$, and $C$, we have
$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| .
$$
An element that belongs to all three sets is counted three times in the sum $|A| + |B| + |C|$ and subtracted three times through the three pairwise intersections, so it must be added back once in the final term. The formula gives the number of elements in the union without drawing the diagram. It is useful when a question asks how many belong to none of the three sets or how many belong to all three.
:::

:::osservazione{#dal-centro-verso-esterno titolo="Filling in a diagram from the center outward"}
In the full three-set Venn diagram, the circles form seven regions inside them, plus the region outside. The diagram is filled in from the center outward.

- Write $|A \cap B \cap C|$ in the center.
- In the region for $A$ and $B$ but not $C$, write $|A \cap B| - |A \cap B \cap C|$. Use the same method for the other two regions belonging to exactly two sets.
- In the “$A$ only” region, write $|A|$ minus the three counts already entered inside circle $A$. Do the same for $B$ and $C$.
- Outside the circles, write $|U|$ minus the sum of the counts in the seven regions.

The center is filled in first because the figures given for “$A$ and $B$” include elements belonging to all three sets.
:::

:::esempio{titolo="Three languages in an office"}
In an office of $60$ employees, $30$ speak English, $20$ speak French, and $15$ speak German. Of these, $10$ speak English and French, $6$ speak English and German, $5$ speak French and German, and $3$ speak all three languages. The center contains $3$ employees. The regions for exactly two languages contain
$$
10 - 3 = 7,
\qquad
6 - 3 = 3,
\qquad
5 - 3 = 2
$$
employees. The regions for exactly one language contain
$$
30 - 7 - 3 - 3 = 17,
\qquad
20 - 7 - 2 - 3 = 8,
\qquad
15 - 3 - 2 - 3 = 7
$$
employees, for English, French, and German, respectively. The counts in the seven regions add up to $47$, so $60 - 47 = 13$ employees speak none of the three languages. The union formula gives the same count because $30 + 20 + 15 - 10 - 6 - 5 + 3 = 47$.

::venn{tipo="tre" nomi="I,F,T" elementi="a:17;b:8;c:7;ab:7;ac:3;bc:2;abc:3;u:13" titolo="Employees who speak English ($I$), French ($F$), and German ($T$), with the regions filled in from the center outward"}

:::

:::definizione{#esattamente-uno-esattamente-due titolo="At least one, exactly one, exactly two"}
In questions involving three sets, the following expressions refer to different groups of regions.

- Membership in **at least one** of the three sets means membership in the union, which covers all seven regions inside the circles. At the office, this accounts for $47$ employees.
- Membership in **exactly one** refers to the three regions “$A$ only,” “$B$ only,” and “$C$ only.” At the office, this accounts for $17 + 8 + 7 = 32$ employees.
- Membership in **exactly two** refers to the three regions shared by exactly two sets, excluding the center. At the office, this accounts for $7 + 3 + 2 = 12$ employees.

The three counts for “exactly one,” “exactly two,” and “all three” add up to the size of the union, since $32 + 12 + 3 = 47$. In the sum $|A| + |B| + |C|$, each element belonging to “exactly two” is counted twice, and each element belonging to “all three” is counted three times, so
$$
|A| + |B| + |C| = (\text{exactly one}) + 2 \cdot (\text{exactly two}) + 3 \cdot (\text{all three}) .
$$
Indeed, at the office we have $30 + 20 + 15 = 65$ and $32 + 2 \cdot 12 + 3 \cdot 3 = 65$. This relationship is useful when a question gives the totals for the three sets and asks how many elements belong to exactly two of them.
:::

:::attenzione
The statement “$10$ speak English and French” gives $|I \cap F|$, which includes those who also speak German. The statement “$10$ speak *only* English and French” refers to the region excluding the center. In the first case, the number entered in that region is $10 - 3 = 7$. In the second, it is $10$.
:::

## Minimum and maximum sizes of an intersection

::::teorema{#intersezione-minima-massima titolo="Smallest and largest numbers of elements in common"}
Let $A$ and $B$ be subsets of a finite universal set $U$. The number of elements they have in common satisfies
$$
|A| + |B| - |U| \leq |A \cap B| \leq \min\big(|A|, |B|\big),
$$
where $\min$ denotes the smaller of the two numbers. If $|A| + |B| - |U|$ is negative, the minimum is $0$. In a class of $30$ students, $20$ name mathematics and $18$ name history as a favorite subject. They may choose more than one. The number who name both subjects is at least $20 + 18 - 30 = 8$ and at most $18$.

:::dimostrazione
The union is contained in $U$, so $|A| + |B| - |A \cap B| \leq |U|$, which is equivalent to the inequality on the left. The intersection is contained in both $A$ and $B$, so it has no more elements than the smaller of the two.
:::
::::

:::esempio{titolo="Finding a minimum using percentages"}
In a company, $75\%$ of the employees use a computer and $45\%$ use a printer. Taking $U$ to represent $100\%$, the percentage of employees who use both is at least
$$
75\% + 45\% - 100\% = 20\% .
$$
The minimum occurs when every employee uses at least one of the two devices. The maximum, $45\%$, occurs when everyone who uses a printer also uses a computer.
:::

## Quick methods for exam questions

:::osservazione{#metodi-rapidi titolo="Sketching a diagram for a counting problem"}
A diagram sketched in the margin lets you solve a counting problem in a few steps.

- Draw two or three circles in a rectangle and enter the count for the central region first.
- Fill in the other regions by subtraction, working from the center outward.
- Check that the counts for all the regions, including the outside region, add up to the total number of elements.

Incorrect answer choices usually arise from recognizable mistakes. A choice equal to $|U| - |A| - |B|$ comes from subtracting the intersection twice. A choice equal to $|A|$ instead of $|A| - |A \cap B|$ comes from confusing “play soccer” with “play only soccer.” A negative result or a result greater than the total indicates an error. One possible cause is double counting.
:::

:::osservazione{#metodi-rapidi-diagrammi titolo="Using elimination to choose a diagram"}
To select the diagram representing three categories, examine the three pairs one at a time.

- If one category is contained in another, eliminate diagrams in which its circle extends outside the other circle.
- If two categories are disjoint, eliminate diagrams in which their circles overlap.
- If an element belongs to all three categories, eliminate diagrams without a region common to all three circles.

One concrete example is enough to rule out a diagram. The existence of an Italian man who is a doctor, for instance, rules out every diagram without a region common to doctors, men, and Italians. After two or three checks, usually only one choice remains.
:::
