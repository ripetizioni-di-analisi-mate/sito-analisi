---
titolo: "Numerical reasoning"
sommario: "Reading tables and graphs, comparing data, percentages, indices, averages and estimates."
---

## Headings, units and coverage

:::definizione{#intestazioni-e-unita titolo="Reading a data value"}
A table cell associates a number with a quantity, a category and a period. The heading gives the quantity and its unit. The row and column labels identify the group that the number refers to. Notes specify which observations are included in the count.

The same number can therefore describe different quantities. A value of $18$ in a column measured in thousands of euros equals $18{,}000\,\mathrm{EUR}$. A rate of $18\%$ means $18$ units for every $100$ units in the reference population.
:::

:::esempio{titolo="One row, different quantities"}
The register shows April activities at two civic halls.

| Hall | Events | Entries (hundreds) | Days open |
| --- | ---: | ---: | ---: |
| Viola | 12 | 9 | 20 |
| Cedro | 16 | 8 | 25 |

Viola hall recorded $9\cdot 100=900$ entries. Dividing $900$ by $12$ gives $75$ entries per event, provided that all recorded entries were related to the events. Dividing $900$ by $20$ instead gives an average of $45$ entries per day open. The denominator follows from the question. An entry is a recorded visit, so the same person may be counted more than once if they attend multiple events.
:::

:::osservazione
Numbers expressed on different scales are converted to the same unit before comparison. A cost of $1.4$ thousand euros equals $1{,}400\,\mathrm{EUR}$. The difference compared with $950\,\mathrm{EUR}$ is therefore $450\,\mathrm{EUR}$. If the question asks for a ratio between two costs both in thousands of euros, the common factor of $1{,}000$ cancels.

The period is also part of the data. A quarterly count and a monthly count may describe the same phenomenon. Comparing the two absolute values answers a different question from comparing their respective monthly averages.
:::

:::attenzione
A note in the key may distinguish zero from missing data. If a dash indicates “not recorded”, a table with $80$ entries on Monday and a dash on Tuesday records $80$ entries for Monday alone. The total for both days also requires Tuesday's value. A stated zero is included in the sum as a recorded value.
:::

## Tables, filters and totals

:::definizione{#tabelle-e-totali titolo="Cross-classifying categories"}
A two-way table cross-classifies observations using two criteria. An interior cell value belongs to both its row category and its column category. A **marginal total** combines all values in a row or column when the categories being added are disjoint. If the table already shows totals, each interior value is already included in its corresponding sums.
:::

:::esempio{titolo="Proportions with different reference groups"}
A workshop records $48$ registrations across two attendance modes.

| Session | In person | Remote | Total |
| --- | ---: | ---: | ---: |
| Morning | 18 | 6 | 24 |
| Evening | 8 | 16 | 24 |
| Total | 26 | 22 | 48 |

Among the **evening** registrations, the proportion attending remotely is $\dfrac{16}{24}=\dfrac{2}{3}$. Among those attending **remotely**, the proportion registered for the evening is $\dfrac{16}{22}=\dfrac{8}{11}$. The numerator is the same because both calculations count the $16$ remote evening registrations. The denominators differ because each proportion uses a different reference group.

To select everyone registered for the morning **or** in person, add the two marginal totals and subtract the overlap, which is included in both. This gives $24+26-18=32$.
:::

:::osservazione
A missing value can be recovered from a fixed total. If $72$ parcels fall into exactly three disjoint weight classes and the first two contain $18$ and $24$, the third contains $72-18-24=30$. The complete partition justifies the subtraction. If the third category can overlap the others, the same calculation is no longer justified.
:::

:::attenzione
When proportions are rounded separately, their displayed sum may differ from $100\%$. Three categories with exact proportions of $\dfrac{1}{3}$ each show $33\%$ when rounded to the nearest whole percent. The combined $99\%$ results from rounding. To reconstruct exact counts, use the original frequencies or state the interval consistent with the reported precision.
:::

## Bar charts and time series

:::definizione{#grafici-e-scale titolo="Scale and visual comparison"}
The key matches colours, symbols or line styles to the data series. The axes specify variables, units and scales. In a bar chart with a linear axis starting at zero, bar length is proportional to the value. In a line chart, a point pairs a time with a recorded value. A straight segment between points shows a linear change between observations. Values inside the segment are estimates unless the data specify a constant rate over that interval.

On a linear scale, equally spaced tick marks represent equal numerical increments. If the vertical axis shows $40$, $50$ and $60$, a point halfway between the first two marks has a vertical coordinate of $45$.
:::

:::esempio{titolo="Changes over intervals of different lengths"}
The volume of water in a tank is measured at irregular intervals. The horizontal coordinate $x$ gives elapsed time in hours. The vertical coordinate $y$ gives volume in litres.

::grafico{xmin=0 xmax=7 ymin=0 ymax=50 linee="0,12 2,24 6,36" punti="0,12,pieno;2,24,pieno;6,36,pieno" titolo="Volume in litres after 0, 2 and 6 hours"}

Between the first and second observations, the volume grows by $24-12=12\,\mathrm{L}$ in $2\,\mathrm{h}$. The average rate is therefore $\dfrac{12}{2}=6\,\mathrm{L/h}$. Between the second and third observations, the volume rises by another $12\,\mathrm{L}$ over $4\,\mathrm{h}$, so the average rate is $3\,\mathrm{L/h}$. The absolute increases are equal, while the average rates differ because the intervals have different lengths.
:::

:::esempio{titolo="Cumulative totals and daily output"}
An archive has digitised a total of $30$ documents by the end of Monday, $80$ by the end of Tuesday and $110$ by the end of Wednesday. To find Wednesday's output alone, subtract the two consecutive cumulative totals. This gives $110-80=30$. The same calculation gives $80-30=50$ for Tuesday, so Tuesday has the larger increase of the two days, even though Wednesday has the highest cumulative total.
:::

:::osservazione
Some charts show two vertical scales. Read each series against the axis given in the key. If one tick represents $6\,\mathrm{km}$ on the distance scale and $12$ minutes on the duration scale, a point at the second tick means $12\,\mathrm{km}$ or $24$ minutes, depending on its series. To compare the heights, first convert them into the measured quantities.
:::

:::attenzione
If the visible part of the axis starts at $90$, a bar reaching $110$ appears twice as long as a bar reaching $100$. The quantities shown are $110$ and $100$ and their ratio is $\dfrac{110}{100}=1.1$. To determine how much larger the first is, read the scale and calculate the difference or ratio between the values.
:::

## Relevant data and consistent comparisons

:::definizione{#dati-pertinenti titolo="Target quantity and basis for comparison"}
The **basis for comparison** is the group or unit relative to which a result is expressed. To compare the productivity of two teams, the measures could be items per employee, per machine or per hour. The meaning follows from the basis stated in the question. If the requested rate is per employee per hour, the basis is the number of person-hours spent on the work.

Writing down the expected unit helps identify the columns that matter. Euros per kilometre requires the cost in euros and the distance in kilometres. A passenger-count column enters the calculation if the question asks for euros per passenger or euros per passenger-kilometre.
:::

:::esempio{titolo="Counts and rates"}
Two support centres use the same definition of a request resolved on first contact.

| Centre | Requests | Resolved on first contact | Staff |
| --- | ---: | ---: | ---: |
| Alfa | 300 | 210 | 12 |
| Beta | 180 | 144 | 9 |

Alfa has the greater number of requests resolved on first contact because $210>144$. Alfa's proportion is $\dfrac{210}{300}=70\%$. Beta's is $\dfrac{144}{180}=80\%$. The probability that a request chosen at random *within the centre* was resolved on first contact is therefore higher for Beta. The staff count would be relevant to a separate productivity question.
:::

:::esempio{titolo="Identifying the reference population"}
A report records $150$ responses collected in a week, including $60$ from new users. The platform registered $400$ new users in the same period. The percentage of new users *among respondents* uses $\dfrac{60}{150}=40\%$. If each new user can respond only once, the percentage of new users *who responded* is $\dfrac{60}{400}=15\%$. The two formulations identify different populations.
:::

:::osservazione
When a count concerns a subset, the numerator and denominator must refer to the same time window and use the same definition of the units being counted. A rate of complaints per order for the first half of the month also requires the number of orders in that half of the month. A table listing only the monthly order total gives a different ratio. A rate for the shorter period requires its own order count or enough information to derive it.
:::

## Percentages, differences and percentage points

:::definizione{#rapporti-e-percentuali titolo="Proportion, absolute change and relative change"}
Let $V_0>0$ be the starting value and $V_1$ the later value. The **absolute change** is $V_1-V_0$ and keeps the unit of the data. The **relative change** uses the starting value as its base and equals
$$
r=\frac{V_1-V_0}{V_0}.
$$
The corresponding percentage is $100r$. If $V_0$ and $V_1$ are already expressed as percentages, their difference in **percentage points** describes the absolute change between the two proportions.
:::

:::esempio{titolo="The difference between two rates"}
The share of orders delivered in one day rises from $32\%$ to $40\%$. The difference is $40-32=8$ percentage points. Dividing the $8$-point difference by the starting share of $32\%$ gives $\dfrac{8}{32}=\dfrac{1}{4}$. The share has therefore risen by $25\%$ relative to its initial value. To find the change in the number of orders delivered in one day, the total number of orders behind each rate is also needed.
:::

:::esempio{titolo="Successive changes"}
A city reduces water consumption by $20\%$ from the previous year's $500$ units. Its new consumption is $500\cdot 0.8=400$. If consumption rises by $20\%$ the following year, that increase is based on $400$. This gives $400\cdot 1.2=480$. Compared with the initial $500$ units, the absolute change is $-20$ units, or $-4\%$. Multiplying the factors gives $0.8\cdot 1.2=0.96$, which yields the same comparison without knowing the initial consumption.
:::

:::attenzione
A share can rise as the corresponding count falls. If same-day deliveries rise from $25\%$ of $1{,}200$ orders to $30\%$ of $900$, the counts are $300$ and $270$. The share rises by $5$ percentage points while the same-day delivery count drops by $30$. The relevant comparison depends on which quantity the question asks for.
:::

## Indices and reversing percentage changes

:::definizione{#indici-e-valori-inversi titolo="Base-100 index and starting value"}
Given the reference value $V_b>0$, the **base-100 index** of a value $V_t$ is
$$
I_t = 100\frac{V_t}{V_b}.
$$
An index of $108$ corresponds to a value of $108\%$ of the base, which is $8\%$ higher than the base value. The ratio of two values in the same series can be obtained by dividing their indices because they have the common factor $100$ and the same base $V_b$.

A relative change $r$ turns the initial value $V_0$ into $V_1=(1+r)V_0$. If $1+r$ is non-zero, the initial value can be recovered by dividing $V_1$ by that factor.
:::

:::esempio{titolo="Comparing two periods in an index series"}
The indexed cost of a service is $125$ in June and $115$ in September on the same base. The ratio of September to June is $\dfrac{115}{125}=0.92$. The cost therefore fell by $8\%$ compared with June. The index fell by $10$ index points and the basis for the percentage change was June's index of $125$.

If the cost in the base period is $240\,\mathrm{EUR}$, the index of $115$ corresponds to $240\cdot 1.15=276\,\mathrm{EUR}$. The meaning of the index determines which of the two problems is being solved.
:::

:::esempio{titolo="Recovering a total and reversing a reduction"}
In a survey, $12\%$ of respondents, or $42$ people, choose an earlier time slot. The total $N$ satisfies $0.12N=42$, so $N=\dfrac{42}{0.12}=350$. The same principle applies to a reduction. If an amount reduced by $30\%$ equals $126\,\mathrm{EUR}$, then $126\,\mathrm{EUR}$ is $70\%$ of the original value. Dividing by $0.7$ gives $180\,\mathrm{EUR}$.
:::

:::osservazione
If two series start from different actual values, equal indices indicate the same change from their respective bases. To compare the actual values, multiply each index by its own base and divide by $100$. An index of $110$ for a town with a base of $2{,}000$ visits corresponds to $2{,}200$ visits. The same index with a base of $800$ corresponds to $880$ visits.
:::

## Weighted means and aggregate ratios

:::definizione{#medie-e-aggregati titolo="Weights and combined means"}
A **weighted mean** combines values representing different numbers of observations. If $a_i$ represents group $i$ and its weight is $w_i\ge 0$, with a positive sum of weights, the mean is
$$
\overline{a}=\frac{\sum_i w_i a_i}{\sum_i w_i}.
$$
For means from disjoint groups, the weights are the counts of observations. Multiplying a group mean by its count reconstructs the group total. If all group counts are equal, the common factor cancels and the combined mean is the arithmetic mean of the group means.
:::

:::esempio{titolo="Reconstructing group totals"}
One box contains $12$ packages with a mean weight of $90\,\mathrm{g}$ per package. Another contains $8$ packages with a mean of $140\,\mathrm{g}$. The total weight is
$$
12\cdot 90+8\cdot 140=1{,}080+1{,}120=2{,}200\,\mathrm{g}.
$$
There are $20$ packages, so the mean weight is $\dfrac{2{,}200}{20}=110\,\mathrm{g}$. It is closer to $90\,\mathrm{g}$ because the first group has more packages. The mean concerns package weight, so each package has the same statistical weight.
:::

:::esempio{titolo="One ratio across both groups"}
The North branch handles $36$ of $40$ requests before the deadline. The South branch handles $96$ of $120$. The overall rate uses the total number of successes and the total number of requests. It equals $\dfrac{36+96}{40+120}=\dfrac{132}{160}=82.5\%$. The request count gives more weight to the South branch, so the overall rate is closer to its own rate of $80\%$.
:::

:::osservazione
A weighted mean with positive weights lies between the smallest and largest values used. Recovering a missing group mean reverses the calculation. If $20$ measurements average $14$ and the first $12$ average $10$, the full total is $280$ and the known group's total is $120$. The other $8$ measurements therefore have a sum of $160$ and a mean of $20$.
:::

## Estimation, thresholds and checking results

:::definizione{#stime-e-controlli titolo="Approximation and exact comparison"}
An **estimate** replaces one or more inputs with nearby values and gives an approximate result. This is useful for checking the order of magnitude or comparing well-separated ranges. When a question asks whether a rate reaches a threshold, an exact comparison can be quicker than finding the percentage. For $b>0$, the condition $\dfrac{a}{b}\ge r$ is equivalent to $a\ge rb$, because multiplying by $b$ preserves the direction of the inequality.
:::

:::esempio{titolo="Threshold and rounding"}
A library aims to handle at least $80\%$ of $444$ requests within one day. The numerical threshold is $0.8\cdot 444=355.2$. Since the count is an integer, at least $356$ requests must be handled. A result of $355$ may be displayed as $80\%$ after rounding to a whole percent, but it remains below the exact threshold.
:::

:::esempio{titolo="Which statement follows from the data?"}
There are $196$ paying visitors and each ticket costs between $18\,\mathrm{EUR}$ and $22\,\mathrm{EUR}$. Revenue is therefore between $196\cdot 18=3{,}528\,\mathrm{EUR}$ and $196\cdot 22=4{,}312\,\mathrm{EUR}$. The data guarantee revenue above $3{,}500\,\mathrm{EUR}$, while allowing revenue either below or above $4{,}000\,\mathrm{EUR}$. A central estimate of about $4{,}000\,\mathrm{EUR}$ comes from rounding $196$ to $200$ and using the midpoint price of $20\,\mathrm{EUR}$. The interval establishes which statement is certain.
:::

:::osservazione
To check whether a result is coherent, consider its unit, range and sign. A subset's proportion lies between $0\%$ and $100\%$, whereas a base-100 index can exceed $100$. If a cost falls, its final multiplier is below $1$ and its relative change from the starting cost is negative.

In a multiple-choice question, the requested form also determines the last calculation. If the result is requested “per hour”, a duration of $45$ minutes is expressed as $\dfrac{3}{4}\,\mathrm{h}$. “How many more” asks for a difference. “By what percent more” asks for that difference divided by the reference value.
:::
