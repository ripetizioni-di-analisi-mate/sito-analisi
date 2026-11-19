---
titolo: Net present value, internal rate of return, and investment comparison
sommario: Net present value, internal rate of return, comparing projects, the effective cost of a loan, and the payback period.
---

## Net present value

:::definizione{#van titolo="Net present value"}
A project requires payments and generates receipts on different dates. To express the balance in euros as of the initial date, discount each cash flow to time $0$ at the same valuation rate.

Let $C_0>0$ be the outlay at time $0$. Denote the cash flow at time $t_k>0$ by $F_k$, positive for a receipt and negative for a payment. If $i>-1$ is the effective rate for the time unit used to measure the $t_k$, set $q=1+i$ and $v=q^{-1}$. The **net present value** is
$$
\operatorname{NPV}(i)=-C_0+\sum_{k=1}^n F_kv^{t_k}.
$$
The term $-C_0$ is already in time-$0$ euros. The factor $v^{t_k}$ also expresses the cash flow due at $t_k$ in time-$0$ euros, so the sum measures the excess of the present value of receipts over that of payments.
:::

:::esempio{titolo="Two receipts after an initial outlay"}
An investment costs $100\,\mathrm{EUR}$ today and pays $60\,\mathrm{EUR}$ at the end of each of the next two years. At an effective annual rate of $10\%$, the first receipt is worth $\dfrac{60}{1.1}\,\mathrm{EUR}$ today and the second is worth $\dfrac{60}{1.1^2}\,\mathrm{EUR}$. The initial outlay enters at its full amount, so
$$
\begin{aligned}
\operatorname{NPV}(0.10)
&=-100+\frac{60}{1.1}+\frac{60}{1.1^2}\\[6pt]
&\approx 4.13\,\mathrm{EUR}.
\end{aligned}
$$
The two receipts have the same nominal amount. The second arrives a year later, so its present value is lower. The sum of the discounted receipts exceeds the outlay by approximately $4.13\,\mathrm{EUR}$.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.6 xmax=3 ymin=-1.3 ymax=0.95 linee="-0.3,0 2.55,0;2.43,0.06 2.55,0 2.43,-0.06;0,-0.04 0,0.04;1,-0.04 1,0.04;2,-0.04 2,0.04" vettori="0,0,0,-1;1,0,1,0.6;2,0,2,0.6" etichette="-0.22,-1.12,100;0.88,0.72,60;1.88,0.72,60;0.1,0.12,0;1.1,-0.15,1;2.1,-0.15,2;2.75,-0.03,t" titolo="Investment cash flows in euros, with $t$ in years. The downward arrow is the outlay of $100$ at time $0$. The upward arrows are receipts of $60$ at times $1$ and $2$."}
:::

:::osservazione
If the alternative is to forgo the project and the rate $i$ measures the opportunity cost of funds in the model, the **NPV rule** gives three possible outcomes.

- If $\operatorname{NPV}(i)>0$, the project creates additional value relative to the alternative.
- If $\operatorname{NPV}(i)=0$, the value of the receipts exactly offsets the value of the payments at the given rate.
- If $\operatorname{NPV}(i)<0$, the receipts are worth less than the payments.

If the receipts are worth $1000\,\mathrm{EUR}$ today at the given rate and the purchase price is the only cost, $1000\,\mathrm{EUR}$ is the break-even price. Reducing the price by $40\,\mathrm{EUR}$ raises NPV by $40\,\mathrm{EUR}$ because the price is a time-$0$ cash flow.
:::

:::esempio{titolo="Revenue and cost on the same date"}
A machine costs $600\,\mathrm{EUR}$ today. After one year it generates revenue of $500\,\mathrm{EUR}$ and requires maintenance costing $60\,\mathrm{EUR}$. At the end of the second year it is sold for $242\,\mathrm{EUR}$. The first two future amounts fall on the same date, so the net cash flow in year one is $500-60=440\,\mathrm{EUR}$. At an annual rate of $10\%$,
$$
\operatorname{NPV}(0.10)
=-600+\frac{440}{1.1}+\frac{242}{1.1^2}
=-600+400+200=0.
$$
The sale proceeds contribute to the value of the project because they are a future cash receipt. If they were received a year earlier, their discount factor would differ from the second-year factor.
:::

## Internal rate of return

:::definizione{#tir titolo="Internal rate of return"}
In an NPV calculation the rate is given. Alternatively, setting NPV equal to zero determines the rate at which the future cash flows are equivalent to the initial outlay.

A rate $i^*>-1$ is an **internal rate of return**, or IRR, if $\operatorname{NPV}(i^*)=0$. The rate is expressed per unit of time in which the dates are measured. For an initial outlay $C_0>0$ and a single receipt $M>0$ after $T>0$ periods, the break-even equation gives
$$
\begin{aligned}
C_0&=M(1+i^*)^{-T},\\[6pt]
(1+i^*)^T&=\frac{M}{C_0},\\[6pt]
i^*&=\left(\frac{M}{C_0}\right)^{\frac{1}{T}}-1.
\end{aligned}
$$
The ratio $\dfrac{M}{C_0}$ is the growth factor for the full interval. Raising that factor to the power $\dfrac{1}{T}$ gives the corresponding growth factor for one unit of time.
:::

:::esempio{titolo="From a two-year return to an annual rate"}
An outlay of $1000\,\mathrm{EUR}$ is followed by a single receipt of $1210\,\mathrm{EUR}$ at time $2$, measured in years. The two-year factor is $1.21$. Since $1.1^2=1.21$, the annual rate is $10\%$. Substituting it in the break-even equation gives $\dfrac{1210}{1.1^2}=1000$.

The total gain is $21\%$ of the outlay. A hypothetical investment growing at the equivalent compound rate earns $100\,\mathrm{EUR}$ in the first year and $110\,\mathrm{EUR}$ in the second because the second year's interest is calculated on $1100\,\mathrm{EUR}$. The actual investment makes a single payment at the end of year two.
:::

:::osservazione
For integer payment dates, the substitution $v=(1+i)^{-1}$ turns the IRR equation into a polynomial in $v$. The relevant roots are the real values $v>0$ because $1+i>0$. Each gives a rate $i=v^{-1}-1$.

For the cash flows $(-300,165,181.5)$ at dates $0,1,2$, the equation is $-300+165v+181.5v^2=0$. With $v=\dfrac{10}{11}$, the first-year term is $150$ and the second-year term is also $150$, giving $i^*=10\%$. In addition to checking the algebra, the substitution verifies the equivalence in cash terms.
:::

## Uniqueness for conventional investments

::::teorema{#unicita-tir titolo="Existence and uniqueness of the IRR for a conventional investment"}
Let $C_0>0$ and suppose $F_k\geq 0$ for every $k$, with at least one $F_k>0$. Assume all the times $t_k$ are positive. NPV is continuous and strictly decreasing on $(-1,+\infty)$ and has exactly one IRR $i^*$.

- If $\sum_k F_k>C_0$, then $i^*>0$.
- If $\sum_k F_k=C_0$, then $i^*=0$.
- If $\sum_k F_k<C_0$, then $-1<i^*<0$.

Moreover, at a given rate $i>-1$, NPV is positive precisely when $i<i^*$. In this case, comparing the IRR with the valuation rate determines the sign of NPV.

::grafico{f="-300+165/(1+x/100)+181.5/(1+x/100)^2" xmin=-40 xmax=160 ymin=-400 ymax=600 asintoti="y=-300" punti="0,46.5,pieno;10,0,pieno" etichette="17,70,i* = 10%" nomi="i,VAN" legenda="\operatorname{NPV}(i)" titolo="NPV in euros for an outlay of $300$ euros and receipts of $165$ and $181.5$ euros at dates $1$ and $2$, with $i$ in percentage points. The function decreases, equals $46.5$ euros at $i=0$, vanishes at the unique IRR $i^*=10\%$, and approaches $-300$ euros as $i\to+\infty$."}

:::dimostrazione
Each positive receipt loses present value as the rate rises. Formally, the derivative with respect to $i$ is
$$
\operatorname{NPV}'(i)
=-\sum_{k=1}^n t_kF_k(1+i)^{-t_k-1}<0.
$$
At least one summand is strictly negative, and the others are nonpositive, so the derivative is negative throughout the domain. As $i\to-1^+$, the discount factor for any positive receipt approaches $+\infty$, and hence NPV also approaches $+\infty$. As $i\to+\infty$, the present values of the receipts tend to zero, so NPV tends to $-C_0$. The intermediate value theorem gives a root, and strict monotonicity makes it unique. Comparison with $\operatorname{NPV}(0)=\sum_kF_k-C_0$ determines the sign of the root.
:::
::::

:::esempio{titolo="Finding the root by bisection"}
An investment costs $260\,\mathrm{EUR}$ and pays $150\,\mathrm{EUR}$ at the end of each of the next two years. At a zero rate its NPV is $40\,\mathrm{EUR}$. At $20\%$ it is $-260+125+\dfrac{625}{6}<0$, so the unique IRR lies between $0\%$ and $20\%$.

The midpoint is $10\%$. At this rate NPV is $-260+\dfrac{150}{1.1}+\dfrac{150}{1.1^2}\approx0.33\,\mathrm{EUR}$. Since it is positive and NPV is decreasing, retain the interval from $10\%$ to $20\%$. Each iteration halves the width of the interval. The search ends when the two endpoints agree to the required precision.

::grafico{f="-260+150/(1+x/100)+150/(1+x/100)^2" xmin=0 xmax=20 ymin=-40 ymax=60 punti="0,40,pieno;10,0.33,pieno;20,-30.83,pieno" segmenti="10,-40,10,60;20,-40,20,60" nomi="i,VAN" legenda="\operatorname{NPV}(i)" titolo="NPV in euros for the $260$-euro project with two receipts of $150$ euros, with $i$ in percentage points. NPV is $40$ euros at $i=0$, approximately $0.33$ euros at $i=10\%$, and approximately $-30.83$ euros at $i=20\%$. The dashed lines mark the interval retained after the first step."}
:::

## Cash flows with multiple sign changes

:::attenzione{#tir-multipli titolo="Multiple IRRs and the absence of an IRR"}
Major maintenance or a shutdown cost can follow a receipt. In this case, discounting a future outflow gives a term that increases as the rate rises. Monotonicity must therefore be checked for the particular cash flow stream.

For cash flows $-100$, $230$, and $-132$ at times $0$, $1$, and $2$, the equation is
$$
-100+230v-132v^2=-(11v-10)(12v-10)=0.
$$
The two roots are $v=\dfrac{10}{11}$ and $v=\dfrac{5}{6}$, both positive. The corresponding rates are therefore $10\%$ and $20\%$. At a zero rate, NPV is $-2\,\mathrm{EUR}$ despite the two positive IRRs.

For the cash flows $(-100,180,-100)$, the equation instead gives
$$
-100+180v-100v^2=-100(v-0.9)^2-19<0.
$$
NPV is always negative and there is no IRR. Both examples have two changes of sign, so the number of sign changes alone does not determine the number of admissible roots.
:::

::grafico{f="-100+230/(1+x)-132/(1+x)^2" xmin=0 xmax=0.31 ymin=-2.2 ymax=0.45 punti="0.1,0;0.2,0" etichette="0.105,-0.5,10%;0.205,-0.5,20%" nomi="i,VAN" legenda="\operatorname{NPV}(i)" titolo="NPV of a cash flow stream with two IRRs"}

:::osservazione
For the cash flow stream $(-100,230,-132)$, the product $-(11v-10)(12v-10)$ is positive when $v$ lies between $\dfrac{5}{6}$ and $\dfrac{10}{11}$. Since $i=v^{-1}-1$ decreases as $v>0$ increases, NPV is positive precisely for $10\%<i<20\%$.

A double root gives another possible outcome. For $(-100,220,-121)$, we have $\operatorname{NPV}(i)=-(11v-10)^2$. There is only one IRR, $10\%$, yet NPV is negative on both sides. A rate that makes NPV zero is a break-even rate. A sign change is a separate property, determined by examining the function on either side.
:::

## Comparing mutually exclusive projects

:::definizione{#confronto-progetti titolo="Incremental NPV"}
Two projects are mutually exclusive if at most one can be undertaken. A comparison requires a common valuation rate, a common reference date, and consistent assumptions about future cash flows. If either project is feasible with the available resources, the one with the higher NPV is preferred, taking into account the option of undertaking neither.

Denote the projects by $A$ and $B$. To construct the incremental cash flows $B-A$, subtract the cash flow of $A$ from that of $B$ on each date. By linearity of discounting,
$$
\operatorname{NPV}_{B-A}(i)
=\operatorname{NPV}_B(i)-\operatorname{NPV}_A(i).
$$
The result measures the additional value $B$ offers over $A$. If $B$ requires the larger initial outlay, the time-$0$ cash flow of $B-A$ is negative and represents the additional capital required.
:::

:::esempio{titolo="Percentage return and value in euros"}
Project $A$ costs $100\,\mathrm{EUR}$ today and pays $130\,\mathrm{EUR}$ in one year. Project $B$ costs $500\,\mathrm{EUR}$ and pays $600\,\mathrm{EUR}$ on the same date. Their IRRs are $30\%$ and $20\%$, respectively. At a valuation rate of $10\%$, their net present values are
$$
\begin{aligned}
\operatorname{NPV}_A&=-100+\frac{130}{1.1}=\frac{200}{11},\\[6pt]
\operatorname{NPV}_B&=-500+\frac{600}{1.1}=\frac{500}{11}.
\end{aligned}
$$
The NPV of $B$ is higher by $\dfrac{300}{11}\,\mathrm{EUR}$. Switching from $A$ to $B$ costs $400\,\mathrm{EUR}$ today and generates an additional $470\,\mathrm{EUR}$ in one year. The return on the extra investment is $17.5\%$, above the valuation rate. The incremental comparison explains why $B$ is preferred at $10\%$.

::grafico{f="-100+130/(1+x/100);-500+600/(1+x/100)" xmin=0 xmax=45 ymin=-100 ymax=100 punti="10,18.18,pieno;10,45.45,pieno;17.5,10.64,vuoto;20,0,pieno;30,0,pieno" segmenti="10,0,10,45.45" nomi="i,VAN" legenda="\operatorname{NPV}_A(i);\operatorname{NPV}_B(i)" titolo="NPVs in euros of projects $A$ and $B$ as functions of $i$, in percentage points. The zeros are the IRRs, $30\%$ for $A$ and $20\%$ for $B$. The curves intersect at $i=17.5\%$ (open circle). At $10\%$, project $B$ has the higher NPV."}
:::

:::osservazione
A shorter project may allow for replacement, a different investment, or a period with no further cash flows. If a machine lasts two years but the service is required for four, a comparison with a four-year machine must account for what happens from year three onward. If replacement takes place on the same terms, the NPV of the second cycle is discounted from the replacement date to time $0$. For projects available only once, include only the cash flows actually expected at or after the end of each project, such as the final sale proceeds. The choice of horizon depends on the economic problem.

For example, a two-year machine has an NPV of $110\,\mathrm{EUR}$ per cycle, measured at the purchase date for that cycle. A four-year machine has an NPV of $205\,\mathrm{EUR}$. If the annual rate is $10\%$ and the two-year machine is replaced on the same terms after two years, the net present value of the two cycles is
$$
110+\frac{110}{1.1^2}\approx200.91\,\mathrm{EUR}.
$$
The $110\,\mathrm{EUR}$ from the second cycle expresses its net cash flows in year-$2$ euros. Dividing by $1.1^2$ expresses that balance in euros of the initial date, so it can be added to the NPV of the first cycle. Together the two cycles have a lower NPV than the four-year machine, even though the values calculated separately at the start of their respective cycles sum to $220\,\mathrm{EUR}$.
:::

## Crossover rates

:::definizione{#tasso-soglia titolo="The crossover rate for two projects"}
A **crossover rate** is a value $i>-1$ such that $\operatorname{NPV}_B(i)=\operatorname{NPV}_A(i)$. It is found by setting $\operatorname{NPV}_{B-A}(i)$ equal to zero. If the incremental cash flows comprise an initial outlay and nonnegative future receipts, at least one of them positive, the uniqueness theorem applies to $B-A$. In that case, below the crossover rate project $B$ has the higher NPV, and above it that project has the lower NPV.

This result ranks the two projects. To decide whether the preferred project creates value, its NPV must also be compared with the NPV of the option of undertaking neither.
:::

:::esempio{titolo="Equal costs with receipts on different dates"}
Two projects have the same initial cost. Project $A$ pays $110\,\mathrm{EUR}$ in one year and project $B$ pays $121$ in two years. At the crossover rate,
$$
\begin{aligned}
\frac{110}{q}&=\frac{121}{q^2},\\[6pt]
q&=\frac{121}{110}=1.1.
\end{aligned}
$$
Since $q>0$, the difference $\dfrac{121-110q}{q^2}$ has the same sign as $121-110q$. Thus $B$ has the higher NPV for $i<10\%$, while $A$ has the higher NPV for $i>10\%$. The initial outlay cancels only because it is the same for both projects.

::grafico{f="110/(1+x/100);121/(1+x/100)^2" xmin=0 xmax=20 ymin=80 ymax=125 punti="10,100,pieno" segmenti="10,80,10,100" nomi="i,euro" legenda="\dfrac{110}{1+i};\dfrac{121}{(1+i)^2}" titolo="Present values in euros of the receipts from $A$ and $B$, with $i$ in percentage points. The curves intersect at $i=10\%$, where both receipts are worth $100$ euros. The curve for $B$ is higher to the left and lower to the right."}
:::

:::osservazione
Even if $A$ and $B$ are conventional investments, subtracting their cash flows can produce receipts and outflows at several dates. The incremental cash flows can therefore have several crossover rates. To rank the projects in that case, examine the sign of the NPV difference in the interval containing the given rate. If the cash flows coincide on every date, the difference in NPVs is identically zero and every admissible rate gives the same value.
:::

## The effective cost of a loan

:::definizione{#taeg titolo="Effective rate on the borrower's cash flows"}
A borrower receives principal $C$ and immediately pays fees $S$, with $C-S>0$. On dates $t_k>0$ the borrower pays amounts $R_k\geq 0$, at least one of them positive. From the borrower's perspective the first cash flow is positive and subsequent payments are negative. The **effective rate on the cash flows** is the rate at which NPV is zero, so it satisfies
$$
C-S=\sum_{k=1}^n R_k(1+i)^{-t_k}.
$$
Multiplying all cash flows by $-1$ leaves the zeros of NPV unchanged. The resulting stream has an initial outlay followed by receipts, so the uniqueness theorem guarantees exactly one rate in the domain $i>-1$.
:::

:::esempio{titolo="Fees paid on the disbursement date"}
The contract specifies a principal amount of $1050\,\mathrm{EUR}$, upfront fees of $50\,\mathrm{EUR}$, and a repayment of $1100\,\mathrm{EUR}$ in one year. The borrower has $1000\,\mathrm{EUR}$ available initially, so $1000=\dfrac{1100}{1+i}$ and $i=10\%$. Taking the full $1050\,\mathrm{EUR}$ of nominal principal as the amount available would give a lower rate because the repayment would be compared with a larger initial amount.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.7 xmax=2.1 ymin=-1.4 ymax=1.25 linee="-0.3,0 1.65,0;1.53,0.06 1.65,0 1.53,-0.06;0,-0.04 0,0.04;1,-0.04 1,0.04" vettori="0,0,0,1;1,0,1,-1.1" etichette="-0.3,1.08,1000;0.7,-1.25,1100;0.1,-0.15,0;1.1,0.12,1;1.85,-0.03,t" titolo="The borrower's cash flows in euros, with $t$ in years. The upward arrow is the amount available, $1000=1050-50$, at time $0$. The downward arrow is the repayment of $1100$ at time $1$."}
:::

:::osservazione
If dates are measured in months, the root $i_m$ is a monthly rate. The equivalent effective annual rate is $(1+i_m)^{12}-1$ because a year comprises twelve applications of the monthly factor. Fees paid with an installment are added to that date's payment. Upfront fees are deducted from the principal received.

This calculation gives the cost of the cash flows specified in the problem. Determining the annual percentage rate of charge (TAEG in Italy) for an actual product requires the cost components and timing conventions applicable to that product.
:::

## Discounted payback period

:::definizione{#recupero-attualizzato titolo="Discounted payback at discrete dates"}
Let $C_0>0$ be the initial cost and $F_k\geq0$ the receipts on the ordered dates $0<t_1<\cdots<t_n$. At a given rate $i>-1$, let $S_m$ denote the present value of the first $m$ receipts. The **discounted payback period** ends on the first date $t_m$ such that
$$
S_m=\sum_{k=1}^m F_k(1+i)^{-t_k}\geq C_0.
$$
The increments of $S_m$ are nonnegative, so after the first payback date the cumulative total remains at least as large as the cost. If $S_n<C_0$, there is no payback within the project's horizon. Exact equality at time $t_m$ counts as payback.
:::

:::esempio{titolo="Simple and discounted payback"}
A project costs $105\,\mathrm{EUR}$ and pays $55\,\mathrm{EUR}$ at the end of year one, $55$ at the end of year two, and $44$ at the end of year three. The undiscounted sum of the first two receipts is $110\,\mathrm{EUR}$, so simple payback occurs in year two.

At a rate of $10\%$ the first two receipts are worth $50+\dfrac{500}{11}\approx95.45\,\mathrm{EUR}$ in present value. The third is worth $\dfrac{44}{1.1^3}\approx33.06\,\mathrm{EUR}$. The cumulative total exceeds $105\,\mathrm{EUR}$ in year three, so discounted payback occurs on that date. Before the third payment date only the first two receipts are available.

::grafico{f="105" xmin=0 xmax=3.5 ymin=0 ymax=200 punti="1,50,pieno;2,95.45,pieno;3,128.51,pieno;1,55,vuoto;2,110,vuoto;3,154,vuoto" nomi="t,euro" legenda="C_0=105" titolo="Cumulative receipts in euros at dates $1$, $2$, and $3$. Open dots show the nominal totals $55$, $110$, and $154$. Filled dots show the totals discounted at $10\%$, approximately $50$, $95.45$, and $128.51$. The open dots first lie above the cost line at time $2$ and the filled dots at time $3$."}
:::

:::attenzione
Two projects can pay back on the same date and have different NPVs. At an annual rate of $10\%$, two projects that each cost $100\,\mathrm{EUR}$ and pay $110\,\mathrm{EUR}$ after one year both recover their initial cost in year one. If the second project also pays $121\,\mathrm{EUR}$ in year two, its NPV is $100\,\mathrm{EUR}$, while the first project's NPV is zero.

If payments are due after the cumulative receipts first cover the cost, the cumulative net amount can fall below the initial cost again. The first crossing therefore needs to be distinguished from permanent recovery. With cash flows at discrete dates, claiming payback between two dates also requires an assumption about the timing of payments within the interval.
:::
