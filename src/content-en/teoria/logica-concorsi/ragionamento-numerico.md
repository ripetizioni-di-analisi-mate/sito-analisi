---
titolo: "Numerical reasoning with clocks, calendars and rankings"
sommario: "How to find the angle between clock hands, read a clock that gains or loses time, calculate elapsed time across time zones, and work out the day of the week after a given number of days. Other problems involve positions in a line or ranking, comparisons of ages, the minimum number of draws guaranteed by the pigeonhole principle, and family relationships."
---

## Clocks and the angle between the hands

:::definizione{#quadrante-orologio titolo="The clock face"}
The face of an analog clock is a circle divided into $12$ hours. Each hour is divided into $5$ one-minute marks, for a total of $60$ marks. A full turn measures $360°$, so each hour on the dial corresponds to
$$
\frac{360°}{12} = 30°
$$
and each minute mark corresponds to $\dfrac{360°}{60} = 6°$. The position of a hand is measured in degrees clockwise from $12$.

- The **minute hand** makes one full turn in $60$ minutes, so it moves $6°$ per minute.
- The **hour hand** makes one full turn in $12$ hours, so it moves $30°$ per hour. Since an hour lasts $60$ minutes, it advances $\dfrac{30°}{60} = 0.5°$ per minute.

At 3:00 the hour hand is at $90°$ and the minute hand is at $0°$. Twenty minutes later, the minute hand is at $20 \cdot 6° = 120°$, while the hour hand has advanced to $90° + 20 \cdot 0.5° = 100°$.
:::

::::teorema{#angolo-lancette titolo="The angle between the hands"}
At $h$ hours and $m$ minutes, with $h$ counted from $0$ to $11$ on the dial, the hour hand is at $30h + 0.5m$ degrees and the minute hand is at $6m$ degrees. The angular separation is therefore
$$
\alpha = \left| \, 30h - 5.5\,m \, \right| .
$$
If $\alpha$ exceeds $180°$, the smaller angle between the hands is $360° - \alpha$. The formula answers questions such as “What angle do the hands form at …?” without a drawing. At 15:40, use $h = 3$ because hour 15 corresponds to $3$ on the dial. This gives $\alpha = |90 - 220| = 130°$.

::grafico{assi=0 uguale=1 curve="3*cos(t),3*sin(t),0,6.29" linee="0,2.75 0,3;1.375,2.382 1.5,2.598;2.382,1.375 2.598,1.5;2.75,0 3,0;2.382,-1.375 2.598,-1.5;1.375,-2.382 1.5,-2.598;0,-2.75 0,-3;-1.375,-2.382 -1.5,-2.598;-2.382,-1.375 -2.598,-1.5;-2.75,0 -3,0;-2.382,1.375 -2.598,1.5;-1.375,2.382 -1.5,2.598" vettori="0,0,1.597,-0.581;0,0,-2.252,-1.3" punti="0,0,pieno" etichette="-0.2,2.25,12;2.05,-0.1,3;-0.08,-2.45,6;-2.3,-0.1,9;-0.3,-1.15,130°;0.9,0.05,hour;-2.2,-0.6,minute" xmin=-3.4 xmax=3.4 ymin=-3.4 ymax=3.4 legenda=0 titolo="At 15:40 the hour hand is $90° + 40 \cdot 0.5° = 110°$ clockwise from $12$ and the minute hand is at $40 \cdot 6° = 240°$, so the angle between them is $130°$"}

:::dimostrazione
In $h$ hours and $m$ minutes the hour hand moves $30h$ degrees for the full hours and $0.5m$ degrees for the minutes, while the minute hand moves $6m$ degrees. The difference between their positions is $30h + 0.5m - 6m = 30h - 5.5m$. Its absolute value gives their angular separation.
:::
::::

:::attenzione
Between exact hours the hour hand is *not* on the hour numeral. At 3:30 the angle between the hands is $|90 - 165| = 75°$ because the hour hand is halfway between $3$ and $4$. Leaving it at $3$ gives $90°$, the angle at 3:00 and a common distractor.
:::

:::osservazione{#sovrapposizioni titolo="When the hands coincide"}
The minute hand moves $6°$ per minute and the hour hand moves $0.5°$ per minute, so the minute hand gains $5.5°$ per minute on the hour hand. After the hands coincide, they next coincide when the minute hand has gained a full turn. This takes
$$
\frac{360}{5.5} = \frac{720}{11} = 65 + \frac{5}{11} \ \text{minutes}.
$$
Hence the hands coincide $11$ times in $12$ hours and $22$ times in one day. After noon they first coincide just after 13:05. They do not coincide strictly between 11:00 and 12:00.
:::

## Clocks that gain or lose time

:::definizione{#orologio-avanti-indietro titolo="A clock that gains or loses time"}
A clock **gains** $a$ minutes per hour if its hands advance $60 + a$ minutes during one actual hour. It **loses** $a$ minutes per hour if they advance $60 - a$ minutes. In these problems the clock runs at a constant rate, so the accumulated error is proportional to the time elapsed. A clock set correctly at 8:00 that gains $3$ minutes per hour will be $6 \cdot 3 = 18$ minutes fast at 14:00, so it will read 14:18.
:::

:::esempio{titolo="Finding the actual time"}
A clock set correctly at 9:00 gains $4$ minutes per hour and now reads 12:12. Each actual hour corresponds to $64$ minutes on the clock. The clock has advanced $192$ minutes since 9:00, so the number of actual hours elapsed is
$$
\frac{192}{64} = 3 ,
$$
and the actual time is 12:00. Subtracting $4$ minutes for each hour *shown* by the clock, or $3.2 \cdot 4 = 12.8$ minutes in all, gives a close but inexact result. For the exact calculation, divide the elapsed time shown by the number of minutes the clock advances in one actual hour.
:::

:::teorema{#ora-esatta-di-nuovo titolo="When a clock shows the right time again"}
An analog clock that gains or loses time at a constant rate next shows the right time when the accumulated error reaches $12$ hours, or $720$ minutes, because the hands repeat their positions every $12$ hours. A clock that loses $2$ minutes a day shows the right time again after
$$
\frac{720}{2} = 360 \ \text{days}.
$$
For a digital clock displaying the hours from 00:00 to 23:59, the error must reach $24$ hours, or $1440$ minutes. A stopped analog clock is a limiting case. Its hands always show the same time, which is correct twice a day.
:::

## Elapsed time, midnight and time zones

:::definizione{#durate-mezzanotte titolo="Elapsed time"}
The **elapsed time** between two clock readings is the time that passes from the first to the second. An hour contains $60$ minutes, so when borrowing in a subtraction, one hour is worth $60$ minutes rather than $100$. From 9:45 to 14:10, $4$ hours and $25$ minutes elapse. There are $15$ minutes from 9:45 to 10:00, then $4$ hours from 10:00 to 14:00, and finally $10$ minutes. When the interval crosses midnight, add the time before 24:00 to the time after 00:00. A night shift from 22:45 to 6:20 lasts
$$
1\ \text{h}\ 15\ \text{min} + 6\ \text{h}\ 20\ \text{min} = 7\ \text{h}\ 35\ \text{min}.
$$
:::

:::attenzione
Clock times *cannot* be subtracted as if they were decimals. Writing $14.10 - 9.45 = 4.65$ would give “$4$ hours and $65$ minutes,” equivalent to $5$ hours and $5$ minutes. The actual duration is $4$ hours and $25$ minutes. The same mistake leads to writing $1.5$ hours as “$1$ hour and $50$ minutes,” although $1.5$ hours is $1$ hour and $30$ minutes.
:::

:::definizione{#fusi-orari titolo="Time zones"}
Two places in different **time zones** have different local times at the same instant. Each problem gives the difference in hours that applies to the trip. Add the travel time to the departure time in the departure time zone, then add or subtract the time difference to obtain the local arrival time. Suppose New York is $6$ hours behind Rome. A flight leaving Rome at 10:30 and lasting $9$ hours and $15$ minutes arrives at 19:45 Rome time, or 13:45 New York time. On the return trip, add the difference because the destination is in a time zone where the local time is later.
:::

## Calendars, months and leap years

:::definizione{#giorni-dei-mesi titolo="Days in a month and in a year"}
In the calendar used in Italy, months have different lengths.

- January, March, May, July, August, October and December each have $31$ days.
- April, June, September and November each have $30$ days.
- February has $28$ days, or $29$ in a leap year.

A common year has $365$ days and a leap year has $366$. Since $365 = 52 \cdot 7 + 1$, a common year contains $52$ full weeks and one extra day. July and August are consecutive months that both have $31$ days, as do December and January.
:::

:::teorema{#anno-bisestile titolo="The leap-year rule"}
A year is a **leap year** if its number satisfies either of the following conditions.

- It is divisible by $4$ and not divisible by $100$, as in 2028 and 2032.
- It is divisible by $400$, as in 2000.

Century years such as 1900 and 2100 are divisible by $4$ but not by $400$, so they are common years. The reason for this rule is that a solar year lasts about $365.2422$ days. Adding one day every $4$ years adds an average of $0.25$ day per year, slightly too much. Omitting the leap day in three out of every four century years removes $3$ days every $400$ years.
:::

:::osservazione{#stesso-giorno-anno-dopo titolo="The same date a year later"}
Since $365$ days make $52$ weeks and one extra day, the same date normally falls one weekday later the following year. If February 29 falls within the interval, there are $366$ days and the weekday advances by two. June 15, 2026 is a Monday, so June 15, 2027 is a Tuesday. June 15, 2028 is a Thursday because February 29, 2028 falls between those two dates.
:::

## The day of the week after n days

::::teorema{#resto-per-sette titolo="Remainders on division by 7"}
After $n$ days, the weekday advances by $r$ places, where $r$ is the remainder when $n$ is divided by $7$. If today is Wednesday, then $100$ days from now it will be Friday, since
$$
100 = 14 \cdot 7 + 2
$$
and advancing $2$ places from Wednesday gives Friday. Likewise, $100$ days ago it was Monday because the weekday moves back $2$ places.

:::dimostrazione
Each block of $7$ days brings us back to the same weekday. Write $n = 7q + r$ with $0 \le r \le 6$. The $q$ full weeks do not change the weekday, leaving $r$ days to count one at a time.
:::
::::

:::esempio{#contare-giorni titolo="Days between two dates"}
March 10, 2027 is a Wednesday. To find the day of the week on May 4, 2027, count the days separating the two dates, one month at a time.
$$
(31 - 10) + 30 + 4 = 21 + 30 + 4 = 55 .
$$
The $21$ days are those remaining in March after the 10th, the $30$ days are all of April, and the $4$ days are May 1 through May 4 inclusive. Since $55 = 7 \cdot 7 + 6$, the weekday advances by $6$ places, so May 4, 2027 is a Tuesday. Moving forward $6$ places gives the same result as moving back $1$.
:::

:::attenzione
From the 3rd to the 10th of a month, $10 - 3 = 7$ days elapse. If both the 3rd and the 10th are counted, the period includes $8$ dates. A class that meets daily from the 3rd through the 10th therefore has $8$ meetings. Answer choices one day away from the correct answer often reflect confusion between these two counts.
:::

:::definizione{#ricorrenze titolo="Recurring events"}
An event has a **period** of $a$ days if it occurs every $a$ days. Two events with periods $a$ and $b$ that coincide on a particular day next coincide $\operatorname{lcm}(a, b)$ days later. Here $\operatorname{lcm}$ denotes the least common multiple, as discussed in “Numbers, fractions and arithmetic” in Mathematics for public exams. A pharmacy is on duty every $6$ days, and a market is held every $8$ days. If both occur on a Monday, they next coincide $24$ days later. Since $24 = 3 \cdot 7 + 3$, that day is a Thursday.
:::

:::esempio{titolo="How often a weekday occurs in a year"}
The year 2027 is a common year, and January 1, 2027 is a Friday. The $52$ complete weeks contain $52$ Fridays, and the extra day is December 31, also a Friday. Thus 2027 has $53$ Fridays and $52$ occurrences of each other weekday. In a leap year two weekdays occur $53$ times each, the weekday of January 1 and the one immediately following it.
:::

## Orderings and comparisons

:::definizione{#confronti-transitivi titolo="Comparisons and the transitive property"}
The relations “is taller than,” “is older than” and “arrives before” have the **transitive property**. If Anna is taller than Bruno and Bruno is taller than Carlo, then Anna is taller than Carlo. To order several people, place their names on a line from greatest to least, adding one comparison at a time. “Elena is taller than Dario,” “Dario is taller than Franco” and “Gina is taller than Elena” give the order Gina, Elena, Dario, Franco. Gina is therefore the tallest.
:::

:::attenzione
Two comparisons with a common term do *not* always determine the order of all three people. “Anna is taller than Bruno” and “Carlo is taller than Bruno” establish only that Bruno is the shortest. Both “Anna is taller than Carlo” and “Carlo is taller than Anna” fit the clues, so the answer to “Who is tallest?” is “It cannot be determined.”
:::

:::teorema{#posizioni-in-fila titolo="Positions in a line"}
In a line of $n$ people, if one person is in position $k$ from the left and position $h$ from the right, then
$$
n = k + h - 1 .
$$
Adding $k$ and $h$ counts everyone in the line, with the person in question counted twice. Someone who is third from the left and fifth from the right is in a line of $3 + 5 - 1 = 7$ people. Between the people in positions $p$ and $q$, where $p < q$, there are $q - p - 1$ people.

::grafico{assi=0 uguale=1 punti="1,0,vuoto;2,0,vuoto;3,0,pieno;4,0,vuoto;5,0,vuoto;6,0,vuoto;7,0,vuoto" etichette="-1.6,0.4,from left;0.85,0.45,1st;1.85,0.45,2nd;2.85,0.45,3rd;2.85,-0.7,5th;3.85,-0.7,4th;4.85,-0.7,3rd;5.85,-0.7,2nd;6.85,-0.7,1st;7.4,-0.75,from right" xmin=-1.8 xmax=9.2 ymin=-1.1 ymax=0.9 titolo="The solid dot is third from the left and fifth from the right, so the number of people is $3 + 5 - 1 = 7$"}

:::

:::osservazione{#posizioni-classifica titolo="Rankings and overtaking"}
In a ranking with no ties, each place is held by one person. A runner who overtakes the person in second place takes second place, and the other runner falls to third. In a race with $20$ competitors, if Luca is $8$th from the front, then $20 - 8 = 12$ competitors are behind him. Counting from the back, he is $13$th, in agreement with $n = k + h - 1$.
:::

:::definizione{#eta-relative titolo="Comparing ages"}
The age difference between two people stays the same throughout their lives because each gets one year older every year. The ratio of their ages changes. Marta is $30$ years old and her daughter is $6$, so Marta is currently five times as old as her daughter. In $x$ years the mother's age will be three times her daughter's if
$$
30 + x = 3\,(6 + x)
\iff
30 + x = 18 + 3x
\iff
x = 6 ,
$$
and indeed, in $6$ years they will be $36$ and $12$ years old. The difference is still $24$ years.
:::

## The pigeonhole principle and the worst case

::::teorema{#principio-dei-cassetti titolo="The pigeonhole principle"}
If $n + 1$ objects are placed in $n$ boxes, at least one box holds at least $2$ objects. More generally, if $k \cdot n + 1$ objects are placed in $n$ boxes, at least one holds at least $k + 1$. The principle guarantees a coincidence without identifying where it occurs. In a group of $13$ people at least two were born in the same month because there are $12$ months. In a group of $25$ people at least $3$ were born in the same month, since $25 = 2 \cdot 12 + 1$.

:::dimostrazione
If each box held at most $k$ objects, there would be at most $k \cdot n$ objects in all, fewer than $k \cdot n + 1$. This contradicts the given total, so at least one box holds at least $k + 1$ objects.
:::
::::

:::definizione{#caso-peggiore titolo="Reasoning from the worst case"}
Questions asking “How many items must you draw without looking to be *certain* of …?” call for the least favorable order of draws, the **worst case**. The required number of draws must meet the condition even in that case. Suppose a drawer contains $10$ black socks and $10$ blue socks.

- To guarantee two socks of the same color, $3$ draws suffice. In the worst case the first two socks have different colors, and the third must match one of them.
- To guarantee two black socks, $12$ draws are necessary because all $10$ blue socks could come out before the $2$ black ones.

In general, with $c$ colors, $c + 1$ draws guarantee two objects of the same color. This is the pigeonhole principle with colors taking the place of boxes.
:::

:::attenzione
“Two of the same color” and “two of a specified color” give different answers. With $5$ red gloves, $4$ green gloves and $3$ yellow gloves, $4$ draws suffice for two gloves of the same color, whereas guaranteeing two yellow gloves takes $5 + 4 + 2 = 11$.
:::

## Family relationships

:::definizione{#parentele titolo="Kinship terms"}
Kinship problems describe a person through a chain of family relationships. Start with the person you know and work through one relationship at a time, sketching a small family tree with parents above their children.

- **Siblings** share parents. **First cousins** are children of siblings.
- **Aunts and uncles** are a parent's sisters and brothers and their spouses.
- The Italian word **nipote** can mean a grandson (the son of a son or daughter) or a nephew (the son of a brother or sister).
- A **father-in-law** and **mother-in-law** are a spouse's parents. A **brother-in-law** is a spouse's brother or a sister's husband.

“The son of my father's only brother” describes my cousin, because my father's brother is my uncle and his son is my cousin.
:::

:::esempio{titolo="Working through a chain of relationships"}
Paolo points to a photograph and says, “I have no brothers or sisters, and this man's father is my father's son.” Paolo has no siblings, so he himself is his father's only son. The statement therefore says that Paolo is the father of the man in the photograph. The man in the photograph is Paolo's son. Answering “It's Paolo” treats “my father's son” as a description of the man in the photo rather than of his father.
:::

## Short methods for timed questions

:::osservazione{#metodi-rapidi titolo="Quick checks on the answer choices"}
Checks that take only a few seconds can eliminate many options before a calculation is complete.

- **Angles between clock hands**. The angle $|30h - 5.5m|$ has fractional part $0.5$ when the minute reading is odd and is a whole number when it is even. At 7:25 the angle is $|210 - 137.5| = 72.5°$, so the whole-number options can be ruled out immediately.
- **Remainder on division by 7**. After $7$, $14$, $70$ or $700$ days, the weekday is the same. Remove a nearby multiple of $7$ from the number of days. After $73$ days the weekday advances by $3$ places because $73 = 70 + 3$.
- **Calendars**. Check whether February 29 falls within the interval and whether its endpoints count. Either mistake can produce an answer one day away from the correct one.
- **Worst case**. Take the largest number of objects that can be drawn without meeting the condition and add $1$. The result does not depend on probability.
:::

:::osservazione{#schemi-a-margine titolo="Sketches to draw in the margin"}
For each type of question, a quick sketch lets you read off the answer.

- For ordering problems, draw a vertical line with the names in descending order. Keep incomplete comparisons on separate branches.
- For people in a line, draw a row of numbered boxes. For rankings, write a column of positions.
- For calendars, write the seven weekdays in order starting with the known one, with remainders from $0$ to $6$ underneath.
- For family relationships, draw a family tree with spouses on the same line and children below.

A sketch also lets you check an answer choice by substituting it into the information given and testing all the conditions in the problem.
:::
